import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar, date } from 'drizzle-orm/pg-core';
import { accountStatusEnum } from './accountStatus';
import { roleTable } from './role';
import { genderEnum } from './gender';

export const accountTable = pgTable('accounts', {
  id: uuid('id').defaultRandom().primaryKey(),
  profilePictureURL: varchar('profile_picture_url', { length: 255 }),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  username: varchar('username', { length: 36 }).notNull().unique(),
  birthday: date('birthday'),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phoneNumber: varchar('phone_number', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 1024 }).notNull(),
  status: accountStatusEnum('status').default('Pending approval').notNull(),
  gender: genderEnum('gender').default('Rather not say').notNull(),
  roleId: uuid('role_id').references(() => roleTable.id, {
    onDelete: 'set null',
  }),
  createdAt: timestamp('created_at').notNull(),
});

export type AccountTable = InferSelectModel<typeof accountTable>;
export type AccountTableInsert = InferInsertModel<typeof accountTable>;
