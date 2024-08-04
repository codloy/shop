import { db, sessionTable, and, eq } from 'db';
import { TRPCException } from '../exception';
import { accountProcedure } from '../procedures';

export const authSignOutMutation = accountProcedure.mutation(
  async ({ ctx: { account, session } }) => {
    try {
      const sessions = await db
        .update(sessionTable)
        .set({
          signedOutAt: new Date(),
        })
        .where(
          and(
            eq(sessionTable.id, session.id),
            eq(sessionTable.accountId, account.id)
          )
        )
        .returning();

      return {
        result: sessions[0],
      };
    } catch (error) {
      throw TRPCException(error);
    }
  }
);
