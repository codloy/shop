import { accountProcedure } from '../procedures';
import { accountSellProductSaveSchema } from 'schemas';
import { TRPCException } from '../exception';
import { sellProductSaveTable } from 'db';
import { TRPCError } from '@trpc/server';

export const accountSellProductSaveMutation = accountProcedure
  .input(accountSellProductSaveSchema)
  .mutation(async ({ input, ctx }) => {
    try {
      const { sellProductId } = input;
      const { account } = ctx;

      const sellProductSaves = await db
        .insert(sellProductSaveTable)
        .values({
          accountId: account.id,
          sellProductId,
          createdAt: new Date(),
        })
        .returning();

      const sellProductSave = sellProductSaves[0];

      if (!sellProductSave) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Sell product comment not found',
        });
      }

      return sellProductSave;
    } catch (err) {
      throw TRPCException(err);
    }
  });
