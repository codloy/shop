import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { accountTable } from './account';

export const sellProductSearchTable = pgTable('sell_product_searches', {
  id: uuid('id').defaultRandom().primaryKey(),
  search: varchar('search').notNull(),
  accountId: uuid('account_id')
    .references(() => accountTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type SellProductSearchTable = InferSelectModel<
  typeof sellProductSearchTable
>;
