import { z } from 'zod';

export const accountSellProductSaveCheckSchema = z.object({
  sellProductId: z.string().length(36),
});

export type AccountSellProductSaveCheckSchema = z.infer<
  typeof accountSellProductSaveCheckSchema
>;

export const accountSellProductSaveCheckDefaultSchema: AccountSellProductSaveCheckSchema =
  {
    sellProductId: '',
  };
