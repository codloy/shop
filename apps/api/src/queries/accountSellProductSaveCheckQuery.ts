import { accountProcedure } from '../procedures';
import { accountSellProductSaveCheckSchema } from 'schemas';
import { TRPCException } from '../exception';
import { sellProductSaveTable, and, eq } from 'db';

export const accountSellProductSaveCheckQuery = accountProcedure
  .input(accountSellProductSaveCheckSchema)
  .query(async ({ input, ctx }) => {
    try {
      const { sellProductId } = input;
      const { account } = ctx;

      const sellProductSaves = await db
        .select()
        .from(sellProductSaveTable)
        .where(
          and(
            eq(sellProductSaveTable.sellProductId, sellProductId),
            eq(sellProductSaveTable.accountId, account.id)
          )
        );

      const sellProductSave = sellProductSaves[0];

      let liked = false;

      if (sellProductSave) {
        liked = true;
      }

      return {
        liked,
      };
    } catch (err) {
      throw TRPCException(err);
    }
  });
