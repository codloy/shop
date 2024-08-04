import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { storeTable } from './store';
import { storeBranchStatusEnum } from './storeBranchStatus';

export const storeBranchTable = pgTable('store_branches', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phoneNumber: varchar('phone_number', { length: 255 }),
  status: storeBranchStatusEnum('status').notNull(),
  storeId: uuid('store_id')
    .references(() => storeTable.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type StoreBranchTable = InferSelectModel<typeof storeBranchTable>;
