import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { buyProductTable } from './buyProduct';

export const buyProductImageTable = pgTable('buy_product_images', {
  id: uuid('id').defaultRandom().primaryKey(),
  imageURL: varchar('image_url', { length: 255 }).notNull(),
  productId: uuid('product_id')
    .references(() => buyProductTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type BuyProductImageTable = InferSelectModel<
  typeof buyProductImageTable
>;
