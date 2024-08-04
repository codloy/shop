import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { attributeTable } from './attribute';

export const attributeOptionTable = pgTable('attribute_options', {
  id: uuid('id').defaultRandom().primaryKey(),
  value: varchar('value', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  attributeId: uuid('attribute_id')
    .references(() => attributeTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type AttributeOptionTable = InferSelectModel<
  typeof attributeOptionTable
>;
