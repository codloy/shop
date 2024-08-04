import { InferSelectModel } from 'drizzle-orm';
import {
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { accountTable } from './account';

export const sessionTable = pgTable('sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  accountId: uuid('account_id')
    .notNull()
    .references(() => accountTable.id, { onDelete: 'cascade' }),
  signedInAt: timestamp('signed_in_at').notNull(),
  signedOutAt: timestamp('signed_out_at'),
  userAgent: varchar('userAgent').notNull(),
  screenWidth: integer('screen_width').notNull(),
  screenHeight: integer('screen_height').notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type Session = InferSelectModel<typeof sessionTable>;
