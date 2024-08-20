import { SortDirection } from 'common';

export const accountAccountsDefaultPage = 1;
export const accountAccountsDefaultTake = 100;
export const accountAccountsSortableColumns = [
  'id',
  'lastName',
  'firstName',
  'username',
  'email',
  'phoneNumber',
  'status',
  'createdAt',
] as const;

export type AccountAccountsSortableColumn =
  (typeof accountAccountsSortableColumns)[number];

export const accountAccountsSortColumn: AccountAccountsSortableColumn = 'email';
export const accountAccountsSortDirection: SortDirection = 'asc';
