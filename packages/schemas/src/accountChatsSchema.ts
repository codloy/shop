import { z } from 'zod';
import { accountChatsSortableColumns } from 'configs';
import { sortDirectionSchema } from './sortDirectionSchema';

export const accountChatsSchema = z
  .object({
    search: z.string().optional(),
    page: z.number().optional(),
    take: z.number().optional(),
    sortColumn: z.enum(accountChatsSortableColumns).optional(),
    sortDirection: sortDirectionSchema.optional(),
  })
  .optional();
