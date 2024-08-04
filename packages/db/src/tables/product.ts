import { InferSelectModel } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { productCategoryTable } from './productCategory';
import { productTypeEnum } from './productType';
import { productConditionEnum } from './productCondition';
import { productDeliveryOptionEnum } from './productDeliveryOption';
import { productAvailabilityEnum } from './productAvailability';
import { productStatusEnum } from './productStatus';
import { accountTable } from './account';
import { storeTable } from './store';

export const productTable = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: varchar('description', { length: 255 }),
  categoryId: uuid('category_id').references(() => productCategoryTable.id, {
    onDelete: 'set null',
  }),
  price: integer('price').notNull(),
  costPrice: integer('cost_price'),
  salePrice: integer('sale_price'),
  barCode: varchar('bar_code'),
  quantityAvailable: integer('quantity_available').default(1).notNull(),
  isPriceNegotiable: boolean('is_price_negotiable').default(false),
  isFree: boolean('is_free').default(false),
  canBarter: boolean('can_barter').default(false),
  type: productTypeEnum('type').notNull(),
  condition: productConditionEnum('condition').notNull(),
  deliveryOption: productDeliveryOptionEnum('delivery_option').notNull(),
  availability: productAvailabilityEnum('availability').notNull(),
  status: productStatusEnum('status').default('Available').notNull(),
  publishedAt: timestamp('published_at').notNull(),
  accountId: uuid('account_id')
    .references(() => accountTable.id, {
      onDelete: 'set null',
    })
    .notNull(),
  storeId: uuid('store_id').references(() => storeTable.id, {
    onDelete: 'set null',
  }),
  createdAt: timestamp('created_at').notNull(),
  cash: integer('cash').default(0),
  barter: integer('barter').default(0),
  loan: integer('loan').default(0),
  leasing: integer('leasing').default(0),
});

export type ProductTable = InferSelectModel<typeof productTable>;
