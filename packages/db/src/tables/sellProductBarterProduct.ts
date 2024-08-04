import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { productTable } from './product';
import { buyProductTable } from './buyProduct';

export const sellProductBarterProductTable = pgTable(
  'sell_product_barter_products',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    sellProductId: uuid('sell_product_id')
      .references(() => productTable.id, { onDelete: 'cascade' })
      .notNull(),
    buyProductId: uuid('buy_product_id')
      .references(() => buyProductTable.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').notNull(),
  }
);

export type SellProductBarterProducts = InferSelectModel<
  typeof sellProductBarterProductTable
>;
