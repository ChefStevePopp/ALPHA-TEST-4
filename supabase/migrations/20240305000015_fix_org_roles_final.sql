-- Drop all existing policies for organization_roles
DO $$
BEGIN
  DROP POLICY IF EXISTS "View roles" ON organization_roles;
  DROP POLICY IF EXISTS "Manage roles" ON organization_roles;
  DROP POLICY IF EXISTS "Update roles" ON organization_roles;
  DROP POLICY IF EXISTS "Delete roles" ON organization_roles;
END $$;

-- Create new simplified policies without recursion
CREATE POLICY "View organization roles"
  ON organization_roles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Manage organization roles"
  ON organization_roles FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles p
      WHERE p.id = auth.uid()
      AND (
        p.system_role = 'dev'
        OR EXISTS (
          SELECT 1 FROM organizations o
          WHERE o.id = organization_roles.organization_id
          AND o.owner_id = auth.uid()
        )
      )
    )
  );

-- Ensure Steve has the correct permissions
DO $$
DECLARE
  steve_id uuid;
  org_id uuid := 'c1e1f1b1-1e1e-1e1e-1e1e-1e1e1e1e1e1e';
BEGIN
  -- Get Steve's user ID
  SELECT id INTO steve_id
  FROM auth.users
  WHERE email = 'office@memphisfirebbq.com';

  IF steve_id IS NOT NULL THEN
    -- Update organization owner
    UPDATE organizations
    SET owner_id = steve_id
    WHERE id = org_id;

    -- Update Steve's profile
    UPDATE profiles
    SET 
      system_role = 'dev',
      organization_id = org_id
    WHERE id = steve_id;

    -- Ensure Steve has owner role assignment
    INSERT INTO organization_roles (
      organization_id,
      user_id,
      role
    )
    VALUES (
      org_id,
      steve_id,
      'owner'
    )
    ON CONFLICT (organization_id, user_id) 
    DO UPDATE SET 
      role = 'owner',
      updated_at = CURRENT_TIMESTAMP;
  END IF;
END $$;