import { SortDirection } from 'common';

export const accountChatDefaultPage = 1;
export const accountChatDefaultTake = 100;
export const accountChatSortableColumns = [
  'id',
  'message',
  'createdAt',
] as const;

export type AccountChatSortableColumn =
  (typeof accountChatSortableColumns)[number];

export const accountChatSortColumn: AccountChatSortableColumn = 'message';
export const accountChatSortDirection: SortDirection = 'asc';
