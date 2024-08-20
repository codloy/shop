import { z } from 'zod';

export const homeFilterProductCategoriesSchema = z.object({
  slugs: z.array(z.string()),
});
