import { barterOptions } from 'common';

import { z } from 'zod';

export const accountSellProductCreateOptionSchema = z.object({
  options: z.array(
    z.object({
      type: z.enum(barterOptions),
      value: z.string(),
      productId: z.string(),
    })
  ),
});

export type AccountSellProductCreateOptionSchema = z.infer<
  typeof accountSellProductCreateOptionSchema
>;
