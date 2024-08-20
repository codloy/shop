import {
  and,
  asc,
  db,
  desc,
  eq,
  ilike,
  inArray,
  not,
  or,
  sql,
  ChatMemberTable,
  chatMemberTable,
  chatTable,
} from 'db';
import { TRPCException } from '../exception';
import { accountChatsSchema } from 'schemas';
import {
  accountChatsDefaultPage,
  accountChatsDefaultTake,
  accountChatsSortColumn,
  accountChatsSortDirection,
} from 'configs';
import { accountProcedure } from '../procedures';

export const accountChatsQuery = accountProcedure
  .input(accountChatsSchema)
  .query(async ({ input, ctx: { account } }) => {
    try {
      const {
        page = accountChatsDefaultPage,
        take = accountChatsDefaultTake,
        sortColumn = accountChatsSortColumn,
        sortDirection = accountChatsSortDirection,
        search = '',
      } = input || {};

      const searchFilter = search
        ? or(
            eq(chatTable.id, search),
            ilike(chatTable.name, `%${search}%`),
            ilike(chatTable.description, `%${search}%`),
            ilike(
              // @ts-ignore
              sql`TO_CHAR(${chatTable.createdAt} + '8 hour', 'YYYY-MM-DD HH24:MI:SS')`,
              `%${search}%`
            )
          )
        : undefined;

      const chatMembersChatIds = await db
        .select({ chatId: chatMemberTable.chatId })
        .from(chatMemberTable)
        .where(eq(chatMemberTable.accountId, account.id));

      const chatIds = chatMembersChatIds.map(member => member.chatId);

      const filters = and(
        searchFilter,
        chatIds.length ? inArray(chatTable.id, chatIds) : undefined
      );

      const orderBy =
        sortDirection === 'asc'
          ? asc(chatTable[sortColumn])
          : desc(chatTable[sortColumn]);

      const totalRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(chatTable);

      const total = totalRows[0].count;

      const foundRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(chatTable)
        .where(filters);

      const found = foundRows[0].count;

      const results = await db
        .select({
          id: chatTable.id,
          name: chatTable.name,
          description: chatTable.description,
          createdAt: chatTable.createdAt,
          members: sql<ChatMemberTable[]>`1`,
        })
        .from(chatTable)
        .where(filters)
        .orderBy(orderBy)
        .limit(take)
        .offset((page - 1) * take);

      for (const result of results) {
        const members = await db
          .select()
          .from(chatMemberTable)
          .where(
            and(
              eq(chatMemberTable.chatId, result.id),
              not(eq(chatMemberTable.accountId, account.id))
            )
          );

        result.members = members;
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
