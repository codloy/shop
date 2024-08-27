import { z } from 'zod';
import { homeSellProductsSortableColumns } from 'configs';
import { sortDirectionSchema } from './sortDirectionSchema';

export const homeSellProductsSchema = z
  .object({
    search: z.string().optional(),
    page: z.number().optional(),
    take: z.number().optional(),
    sortColumn: z.enum(homeSellProductsSortableColumns).optional(),
    sortDirection: sortDirectionSchema.optional(),
    categorySlugs: z.array(z.string()),
  })
  .optional();
