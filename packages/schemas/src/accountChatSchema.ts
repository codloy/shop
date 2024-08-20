import { z } from 'zod';
import { accountChatSortableColumns } from 'configs';
import { sortDirectionSchema } from './sortDirectionSchema';

export const accountChatSchema = z.object({
  search: z.string().optional(),
  page: z.number().optional(),
  take: z.number().optional(),
  sortColumn: z.enum(accountChatSortableColumns).optional(),
  sortDirection: sortDirectionSchema.optional(),
  chatId: z.string().min(1),
});
