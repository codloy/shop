import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { productTable } from './product';

export const productImageTable = pgTable('product_images', {
  id: uuid('id').defaultRandom().primaryKey(),
  imageURL: varchar('image_url', { length: 255 }).notNull(),
  productId: uuid('product_id')
    .references(() => productTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type ProductImageTable = InferSelectModel<typeof productImageTable>;
