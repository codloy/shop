import { accountChatSendSchema } from 'schemas';
import { db, chatMessageTable } from 'db';
import { TRPCException } from '../exception';
import { accountProcedure } from '../procedures';
import { ee } from '../ee';

export const accountChatSendMutation = accountProcedure
  .input(accountChatSendSchema)
  .mutation(async ({ input, ctx: { account } }) => {
    try {
      const { chatId, message } = input;

      const messages = await db
        .insert(chatMessageTable)
        .values({
          chatId,
          message,
          senderId: account.id,
          createdAt: new Date(),
        })
        .returning();

      const result = messages[0];

      ee.emit(`chat:${input.chatId}`, result);

      return {
        result: result,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
