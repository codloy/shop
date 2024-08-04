import { InferSelectModel } from 'drizzle-orm';
import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { productTable } from './product';
import { accountTable } from './account';

export const sellProductCommentTable = pgTable('sell_product_comments', {
  id: uuid('id').defaultRandom().primaryKey(),
  comment: text('comment').notNull(),
  rating: integer('rating').notNull(),
  sellProductId: uuid('sell_product_id')
    .references(() => productTable.id, { onDelete: 'cascade' })
    .notNull(),
  accountId: uuid('account_id')
    .references(() => accountTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type SellProductCommentTable = InferSelectModel<
  typeof sellProductCommentTable
>;
