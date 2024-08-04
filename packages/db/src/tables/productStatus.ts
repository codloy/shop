import { pgEnum } from 'drizzle-orm/pg-core';

export const productStatuses = ['Available', 'Sold', 'Deleted'] as const;

export type ProductStatusEnum = (typeof productStatuses)[number];

export const productStatusEnum = pgEnum('product_statuses', productStatuses);
