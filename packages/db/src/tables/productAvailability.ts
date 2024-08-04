import { pgEnum } from 'drizzle-orm/pg-core';

export const productAvailabilities = ['Available', 'Preorder'] as const;

export type ProductAvailabilityEnum = (typeof productAvailabilities)[number];

export const productAvailabilityEnum = pgEnum(
  'product_availabilities',
  productAvailabilities
);
