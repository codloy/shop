import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { accountTable } from './account';
import { chatTable } from './chat';

export const chatMemberTable = pgTable('chat_members', {
  id: uuid('id').defaultRandom().primaryKey(),
  chatId: uuid('chat_id')
    .notNull()
    .references(() => chatTable.id),
  accountId: uuid('account_id')
    .notNull()
    .references(() => accountTable.id),
  createdAt: timestamp('created_at').notNull(),
});

export type ChatMemberTable = InferSelectModel<typeof chatMemberTable>;
