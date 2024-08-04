import { pgEnum } from 'drizzle-orm/pg-core';

export const storeStatuses = [
  'Pending approval',
  'Approved',
  'Declined',
  'Blocked',
  'Deleted',
] as const;

export type StoreStatusEnum = (typeof storeStatuses)[number];

export const storeStatusEnum = pgEnum('store_statuses', storeStatuses);
