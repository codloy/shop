import { z } from 'zod';

export const homeSellProductBreadcrumbSchema = z.object({
  productSlug: z.string(),
});
