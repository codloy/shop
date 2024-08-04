import { z } from 'zod';

export const accountSellProductSearchCreateSchema = z.object({
  search: z.string().min(1),
});

export type AccountSellProductSearchCreateSchema = z.infer<
  typeof accountSellProductSearchCreateSchema
>;

export const accountSellProductSearchCreateDefaultSchema: AccountSellProductSearchCreateSchema =
  {
    search: '',
  };
