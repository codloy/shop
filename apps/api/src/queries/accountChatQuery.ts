import { and, asc, db, desc, eq, ilike, or, sql, chatMessageTable } from 'db';
import { TRPCException } from '../exception';
import { accountChatSchema } from 'schemas';
import {
  accountChatDefaultPage,
  accountChatDefaultTake,
  accountChatSortColumn,
  accountChatSortDirection,
} from 'configs';
import { accountProcedure } from '../procedures';

export const accountChatQuery = accountProcedure
  .input(accountChatSchema)
  .query(async ({ input, ctx: { account } }) => {
    try {
      const {
        page = accountChatDefaultPage,
        take = accountChatDefaultTake,
        sortColumn = accountChatSortColumn,
        sortDirection = accountChatSortDirection,
        search = '',
        chatId,
      } = input;

      const searchFilter = search
        ? or(
            eq(chatMessageTable.id, search),
            ilike(chatMessageTable.message, `%${search}%`),
            ilike(
              // @ts-ignore
              sql`TO_CHAR(${chatMessageTable.createdAt} + '8 hour', 'YYYY-MM-DD HH24:MI:SS')`,
              `%${search}%`
            )
          )
        : undefined;

      const chatFilter = eq(chatMessageTable.chatId, chatId);

      const filters = and(searchFilter, chatFilter);

      const orderBy =
        sortDirection === 'asc'
          ? asc(chatMessageTable[sortColumn])
          : desc(chatMessageTable[sortColumn]);

      const totalRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(chatMessageTable);

      const total = totalRows[0].count;

      const foundRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(chatMessageTable)
        .where(filters);

      const found = foundRows[0].count;

      const results = await db
        .select({
          id: chatMessageTable.id,
          message: chatMessageTable.message,
          chatId: chatMessageTable.chatId,
          senderId: chatMessageTable.senderId,
          createdAt: chatMessageTable.createdAt,
          isOwn: sql<boolean>`1`,
        })
        .from(chatMessageTable)
        .where(filters)
        .orderBy(orderBy)
        .limit(take)
        .offset((page - 1) * take);

      for (const result of results) {
        result.isOwn = result.senderId === account.id;
      }

      return {
        total,
        found,
        results,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
