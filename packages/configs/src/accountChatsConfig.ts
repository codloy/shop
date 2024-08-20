import { SortDirection } from 'common';

export const accountChatsDefaultPage = 1;
export const accountChatsDefaultTake = 100;
export const accountChatsSortableColumns = [
  'id',
  'name',
  'description',
  'createdAt',
] as const;

export type AccountChatsSortableColumn =
  (typeof accountChatsSortableColumns)[number];

export const accountChatsSortColumn: AccountChatsSortableColumn = 'name';
export const accountChatsSortDirection: SortDirection = 'asc';
