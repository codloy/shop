import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { productAttributeTable } from './productAttribute';
import { attributeOptionTable } from './attributeOption';

export const productAttributeOptionTable = pgTable(
  'product_attribute_options',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    productAttributeId: uuid('product_attribute_id')
      .references(() => productAttributeTable.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    attributeOptionId: uuid('attribute_option_id')
      .references(() => attributeOptionTable.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    value: varchar('value', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').notNull(),
  }
);

export type ProductAttributeOptionTable = InferSelectModel<
  typeof productAttributeOptionTable
>;
