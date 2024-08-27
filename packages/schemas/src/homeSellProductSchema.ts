import { z } from 'zod';

export const homeSellProductSchema = z.object({
  slug: z.string().min(1),
});
