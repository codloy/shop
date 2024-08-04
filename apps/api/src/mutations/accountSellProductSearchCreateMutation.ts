import { accountProcedure } from '../procedures';
import { accountSellProductSearchCreateSchema } from 'schemas';
import { TRPCException } from '../exception';
import { sellProductSearchTable } from 'db';
import { TRPCError } from '@trpc/server';

export const accountSellProductSearchCreateMutation = accountProcedure
  .input(accountSellProductSearchCreateSchema)
  .mutation(async ({ input, ctx }) => {
    try {
      const { search } = input;
      const { account } = ctx;

      const sellProductSearchs = await db
        .insert(sellProductSearchTable)
        .values({
          search,
          accountId: account.id,
          createdAt: new Date(),
        })
        .returning();

      const sellProductSearch = sellProductSearchs[0];

      if (!sellProductSearch) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Sell product comment not found',
        });
      }

      return sellProductSearch;
    } catch (err) {
      throw TRPCException(err);
    }
  });
