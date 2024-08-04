import { pgEnum } from 'drizzle-orm/pg-core';

export const storeBranchStatuses = [
  'Pending approval',
  'Approved',
  'Declined',
  'Blocked',
  'Deleted',
] as const;

export type StoreBranchStatusEnum = (typeof storeBranchStatuses)[number];

export const storeBranchStatusEnum = pgEnum(
  'store_branch_statuses',
  storeBranchStatuses
);
