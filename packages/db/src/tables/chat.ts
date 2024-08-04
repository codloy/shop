import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const chatTable = pgTable('chats', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }),
  description: varchar('description', { length: 255 }),
  createdAt: timestamp('created_at').notNull(),
});

export type ChatTable = InferSelectModel<typeof chatTable>;
