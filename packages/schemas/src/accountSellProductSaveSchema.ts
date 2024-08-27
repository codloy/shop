import { z } from 'zod';

export const accountSellProductSaveSchema = z.object({
  sellProductId: z.string().length(36),
});

export type AccountSellProductSaveSchema = z.infer<
  typeof accountSellProductSaveSchema
>;

export const accountSellProductSaveDefaultSchema: AccountSellProductSaveSchema =
  {
    sellProductId: '',
  };
