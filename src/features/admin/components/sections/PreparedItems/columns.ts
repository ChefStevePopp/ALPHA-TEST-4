import type { ExcelColumn } from '@/types';

export const preparedItemColumns: ExcelColumn[] = [
  { key: 'itemId', name: 'Item ID', type: 'text', width: 100 },
  { key: 'category', name: 'CATEGORY', type: 'text', width: 120 },
  { key: 'product', name: 'PRODUCT', type: 'text', width: 200 },
  { key: 'station', name: 'STATION', type: 'text', width: 120 },
  { key: 'subCategory', name: 'SUB CATEGORY', type: 'text', width: 150 },
  { key: 'storageArea', name: 'STORAGE AREA', type: 'text', width: 150 },
  { key: 'container', name: 'CONTAINER', type: 'text', width: 120 },
  { key: 'containerType', name: 'CONTAINER TYPE', type: 'text', width: 120 },
  { key: 'shelfLife', name: 'SHELF LIFE', type: 'text', width: 120 },
  { key: 'recipeUnit', name: 'RECIPE UNIT', type: 'text', width: 120 },
  { key: 'costPerRecipeUnit', name: 'COST PER R/U', type: 'currency', width: 120 },
  { key: 'yieldPercent', name: 'YIELD %', type: 'percent', width: 100 },
  { key: 'finalCost', name: 'FINAL $', type: 'currency', width: 100 },
  // Allergen columns
  { key: 'peanuts', name: 'Peanuts', type: 'boolean', width: 80 },
  { key: 'crustaceans', name: 'Crustaceans', type: 'boolean', width: 80 },
  { key: 'treenuts', name: 'Tree Nuts', type: 'boolean', width: 80 },
  { key: 'shellfish', name: 'Shellfish', type: 'boolean', width: 80 },
  { key: 'sesame', name: 'Sesame', type: 'boolean', width: 80 },
  { key: 'soy', name: 'Soy', type: 'boolean', width: 80 },
  { key: 'fish', name: 'Fish', type: 'boolean', width: 80 },
  { key: 'wheat', name: 'Wheat', type: 'boolean', width: 80 },
  { key: 'milk', name: 'Milk', type: 'boolean', width: 80 },
  { key: 'sulphites', name: 'Sulphites', type: 'boolean', width: 80 },
  { key: 'eggs', name: 'Eggs', type: 'boolean', width: 80 },
  { key: 'gluten', name: 'Gluten', type: 'boolean', width: 80 },
  { key: 'mustard', name: 'Mustard', type: 'boolean', width: 80 },
  { key: 'celery', name: 'Celery', type: 'boolean', width: 80 },
  { key: 'garlic', name: 'Garlic', type: 'boolean', width: 80 },
  { key: 'onion', name: 'Onion', type: 'boolean', width: 80 },
  { key: 'nitrites', name: 'Nitrites', type: 'boolean', width: 80 },
  { key: 'mushrooms', name: 'Mushrooms', type: 'boolean', width: 80 },
  { key: 'hot_peppers', name: 'Hot Peppers', type: 'boolean', width: 80 },
  { key: 'citrus', name: 'Citrus', type: 'boolean', width: 80 }
];