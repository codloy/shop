import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { attributeDatatypeEnum } from './attributeDatatype';

export const attributeTable = pgTable('attributes', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  datatype: attributeDatatypeEnum('datatype').notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type AttributeTable = InferSelectModel<typeof attributeTable>;
