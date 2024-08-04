import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { attributeTable } from './attribute';
import { productTable } from './product';

export const productAttributeTable = pgTable('product_attributes', {
  id: uuid('id').defaultRandom().primaryKey(),
  productId: uuid('product_id')
    .references(() => productTable.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  attributeId: uuid('attribute_id')
    .references(() => attributeTable.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type ProductAttributeTable = InferSelectModel<
  typeof productAttributeTable
>;
