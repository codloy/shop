import { z } from 'zod';

export const homeCategoryNestedQuerySchema = z.object({
  slugs: z.array(z.string()),
});
