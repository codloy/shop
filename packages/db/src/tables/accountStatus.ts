import { pgEnum } from 'drizzle-orm/pg-core';

export const accountStatuses = [
  'Pending approval',
  'Approved',
  'Declined',
  'Blocked',
  'Deleted',
] as const;

export type AccountStatusEnum = (typeof accountStatuses)[number];

export const accountStatusEnum = pgEnum('account_statuses', accountStatuses);
