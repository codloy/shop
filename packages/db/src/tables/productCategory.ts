import { InferSelectModel } from 'drizzle-orm';
import {
  AnyPgColumn,
  pgTable,
  timestamp,
  unique,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const productCategoryTable = pgTable(
  'product_categories',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull(),
    description: varchar('description', { length: 255 }),
    parentId: uuid('parent_id').references(
      (): AnyPgColumn => productCategoryTable.id,
      { onDelete: 'cascade' }
    ),
    createdAt: timestamp('created_at').notNull(),
  },
  ({ name, parentId, slug }) => ({
    unique: unique().on(name, parentId),
    unique1: unique().on(slug, parentId),
  })
);

export type ProductCategoryTable = InferSelectModel<
  typeof productCategoryTable
>;
