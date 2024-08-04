import { pgEnum } from 'drizzle-orm/pg-core';

export const productConditions = [
  'New',
  'Almost new',
  'Used',
  'Refurbished',
] as const;

export type ProductConditionEnum = (typeof productConditions)[number];

export const productConditionEnum = pgEnum(
  'product_conditions',
  productConditions
);
