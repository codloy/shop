import { pgEnum } from 'drizzle-orm/pg-core';

export const productTypes = ['Buy', 'Sell', 'Post'] as const;

export type ProductTypeEnum = (typeof productTypes)[number];

export const productTypeEnum = pgEnum('product_types', productTypes);
