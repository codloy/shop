import { InferSelectModel } from 'drizzle-orm';
import { boolean, pgTable, timestamp, unique, uuid } from 'drizzle-orm/pg-core';
import { productCategoryTable } from './productCategory';
import { attributeTable } from './attribute';

export const productCategoryAttributeTable = pgTable(
  'product_category_attributes',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    isRequired: boolean('is_required').notNull(),
    productCategoryId: uuid('parent_id').references(
      () => productCategoryTable.id,
      { onDelete: 'cascade' }
    ),
    attributeId: uuid('attribute_id')
      .references(() => attributeTable.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    createdAt: timestamp('created_at').notNull(),
  },
  ({ productCategoryId, attributeId }) => ({
    unique: unique().on(productCategoryId, attributeId),
  })
);

export type ProductCategoryAttributeTable = InferSelectModel<
  typeof productCategoryAttributeTable
>;
