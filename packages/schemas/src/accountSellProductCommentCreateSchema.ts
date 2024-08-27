import { z } from 'zod';

export const accountSellProductCommentCreateSchema = z.object({
  comment: z.string().min(1),
  rating: z.number().max(5).min(1).int(),
  sellProductId: z.string().length(36),
});

export type AccountSellProductCommentCreateSchema = z.infer<
  typeof accountSellProductCommentCreateSchema
>;

export const accountSellProductCommentCreateDefaultSchema: AccountSellProductCommentCreateSchema =
  {
    comment: '',
    rating: 1,
    sellProductId: '',
  };
