import { z } from 'zod';

export const homeCategoryBreadcrumbSchema = z.object({
  categorySlugs: z.array(z.string()),
});
