import { accountProcedure } from '../procedures';
import { accountSellProductCommentCreateSchema } from 'schemas';
import { TRPCException } from '../exception';
import { sellProductCommentTable } from 'db';
import { TRPCError } from '@trpc/server';

export const accountSellProductCommentCreateMutation = accountProcedure
  .input(accountSellProductCommentCreateSchema)
  .mutation(async ({ input, ctx }) => {
    try {
      const { comment, rating, sellProductId } = input;
      const { account } = ctx;

      const sellProductComments = await db
        .insert(sellProductCommentTable)
        .values({
          comment,
          rating,
          accountId: account.id,
          sellProductId,
          createdAt: new Date(),
        })
        .returning();

      const sellProductComment = sellProductComments[0];

      if (!sellProductComment) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Sell product comment not found',
        });
      }

      return sellProductComment;
    } catch (err) {
      throw TRPCException(err);
    }
  });
