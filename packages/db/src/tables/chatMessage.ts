import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { accountTable } from './account';
import { chatTable } from './chat';

export const chatMessageTable = pgTable('chat_messages', {
  id: uuid('id').defaultRandom().primaryKey(),
  senderId: uuid('sender_id')
    .notNull()
    .references(() => accountTable.id),
  chatId: uuid('chat_id')
    .notNull()
    .references(() => chatTable.id),
  message: varchar('message').notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type ChatMessageTable = InferSelectModel<typeof chatMessageTable>;
