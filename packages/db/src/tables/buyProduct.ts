import { InferSelectModel } from 'drizzle-orm';
import {
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { productCategoryTable } from './productCategory';
import { accountTable } from './account';

export const buyProductTable = pgTable('buy_products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: varchar('description', { length: 255 }),
  categoryId: uuid('category_id').references(() => productCategoryTable.id, {
    onDelete: 'set null',
  }),
  minPrice: integer('min_price').notNull(),
  maxPrice: integer('max_price').notNull(),
  publishedAt: timestamp('published_at').notNull(),
  accountId: uuid('account_id')
    .references(() => accountTable.id, {
      onDelete: 'set null',
    })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type BuyProductTable = InferSelectModel<typeof buyProductTable>;
