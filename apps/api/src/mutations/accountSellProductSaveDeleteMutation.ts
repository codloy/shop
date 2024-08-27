import { accountProcedure } from '../procedures';
import { accountSellProductSaveDeleteSchema } from 'schemas';
import { TRPCException } from '../exception';
import { sellProductSaveTable, and, eq } from 'db';
import { TRPCError } from '@trpc/server';

export const accountSellProductSaveDeleteMutation = accountProcedure
  .input(accountSellProductSaveDeleteSchema)
  .mutation(async ({ input, ctx }) => {
    try {
      const { sellProductId } = input;
      const { account } = ctx;

      const sellProductSaves = await db
        .delete(sellProductSaveTable)
        .where(
          and(
            eq(sellProductSaveTable.sellProductId, sellProductId),
            eq(sellProductSaveTable.accountId, account.id)
          )
        )
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
