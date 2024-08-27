import { z } from 'zod';

export const accountSellProductSaveDeleteSchema = z.object({
  sellProductId: z.string().length(36),
});

export type AccountSellProductSaveDeleteSchema = z.infer<
  typeof accountSellProductSaveDeleteSchema
>;

export const accountSellProductSaveDeleteDefaultSchema: AccountSellProductSaveDeleteSchema =
  {
    sellProductId: '',
  };
