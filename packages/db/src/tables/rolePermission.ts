import { InferSelectModel } from 'drizzle-orm';
import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { roleTable } from './role';
import { permissionsEnum } from './permission';

export const rolePermissionTable = pgTable('role_permissions', {
  id: uuid('id').defaultRandom().primaryKey(),
  roleId: uuid('role_id')
    .references(() => roleTable.id, { onDelete: 'cascade' })
    .notNull(),
  permission: permissionsEnum('permission').notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export type RolePermissionTable = InferSelectModel<typeof rolePermissionTable>;
