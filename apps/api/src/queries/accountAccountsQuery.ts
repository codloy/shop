import { asc, db, desc, ilike, or, sql, accountTable } from 'db';
import { TRPCException } from '../exception';
import { accountAccountsSchema } from 'schemas';
import {
  accountAccountsDefaultPage,
  accountAccountsDefaultTake,
  accountAccountsSortColumn,
  accountAccountsSortDirection,
} from 'configs';
import { accountProcedure } from '../procedures';

export const accountAccountsQuery = accountProcedure
  .input(accountAccountsSchema)
  .query(async ({ input }) => {
    try {
      const {
        page = accountAccountsDefaultPage,
        take = accountAccountsDefaultTake,
        sortColumn = accountAccountsSortColumn,
        sortDirection = accountAccountsSortDirection,
        search = '',
      } = input || {};

      const searchFilter = search
        ? or(
            // eq(accountTable.id, search),
            ilike(accountTable.lastName, `%${search}%`),
            ilike(accountTable.firstName, `%${search}%`),
            ilike(accountTable.username, `%${search}%`),
            ilike(accountTable.email, `%${search}%`),
            ilike(
              // @ts-ignore
              sql`TO_CHAR(${accountTable.createdAt} + '8 hour', 'YYYY-MM-DD HH24:MI:SS')`,
              `%${search}%`
            )
          )
        : undefined;

      const orderBy =
        sortDirection === 'asc'
          ? asc(accountTable[sortColumn])
          : desc(accountTable[sortColumn]);

      const totalRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(accountTable);

      const total = totalRows[0].count;

      const foundRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(accountTable)
        .where(searchFilter);

      const found = foundRows[0].count;

      const results = await db
        .select({
          id: accountTable.id,
          lastName: accountTable.lastName,
          firstName: accountTable.firstName,
          email: accountTable.email,
          phoneNumber: accountTable.phoneNumber,
          username: accountTable.username,
          status: accountTable.status,
          createdAt: accountTable.createdAt,
        })
        .from(accountTable)
        .where(searchFilter)
        .orderBy(orderBy)
        .limit(take)
        .offset((page - 1) * take);

      return {
        total,
        found,
        results,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
