import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { storeStatusEnum } from './storeStatus';
import { accountTable } from './account';

export const storeTable = pgTable('stores', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  phoneNumber: varchar('phone_number', { length: 255 }),
  email: varchar('email', { length: 255 }),
  coverImageURL: varchar('cover_image_url', { length: 255 }),
  profileImageURL: varchar('profile_image_url', { length: 255 }),
  facebookURL: varchar('facebook_url', { length: 255 }),
  instagramURL: varchar('instagram_url', { length: 255 }),
  status: storeStatusEnum('status').default('Pending approval').notNull(),
  ownerId: uuid('owner_id').references(() => accountTable.id, {
    onDelete: 'set null',
  }),
  createdAt: timestamp('created_at').notNull(),
});

export type StoreTable = InferSelectModel<typeof storeTable>;
