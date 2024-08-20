import { z } from 'zod';
import { accountAccountsSortableColumns } from 'configs';
import { sortDirectionSchema } from './sortDirectionSchema';

export const accountAccountsSchema = z
  .object({
    search: z.string().optional(),
    page: z.number().optional(),
    take: z.number().optional(),
    sortColumn: z.enum(accountAccountsSortableColumns).optional(),
    sortDirection: sortDirectionSchema.optional(),
  })
  .optional();
