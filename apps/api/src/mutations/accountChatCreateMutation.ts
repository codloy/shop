import { accountChatCreateSchema } from 'schemas';
import { db, eq, inArray, chatMemberTable, chatTable } from 'db';
import { TRPCException } from '../exception';
import { accountProcedure } from '../procedures';

export const accountChatCreateMutation = accountProcedure
  .input(accountChatCreateSchema)
  .mutation(async ({ input, ctx: { account } }) => {
    try {
      const { recipientId } = input;

      const chat = await db.transaction(async tx => {
        const members = await tx
          .select({
            chatId: chatMemberTable.chatId,
          })
          .from(chatMemberTable)
          .where(inArray(chatMemberTable.accountId, [recipientId, account.id]))
          .groupBy(chatMemberTable.chatId);

        const member = members[0];

        if (!member) {
          const chats = await tx
            .insert(chatTable)
            .values({
              createdAt: new Date(),
            })
            .returning();

          const chat = chats[0];

          await tx.insert(chatMemberTable).values([
            {
              accountId: account.id,
              chatId: chat.id,
              createdAt: new Date(),
            },
            {
              accountId: recipientId,
              chatId: chat.id,
              createdAt: new Date(),
            },
          ]);

          return chat;
        }

        const chats = await db
          .select()
          .from(chatTable)
          .where(eq(chatTable.id, member.chatId));

        const chat = chats[0];

        return chat;
      });

      return {
        result: chat,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
