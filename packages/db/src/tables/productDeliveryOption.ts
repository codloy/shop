import { pgEnum } from 'drizzle-orm/pg-core';

export const productDeliveryOptions = [
  'Free delivery',
  'Standard delivery',
  // 'Express delivery',
  'In-store pickup',
  // 'Digital delivery',
  'No delivery',
] as const;

export type ProductDeliveryOptionEnum = (typeof productDeliveryOptions)[number];

export const productDeliveryOptionEnum = pgEnum(
  'product_delivery_options',
  productDeliveryOptions
);
