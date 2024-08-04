import { accountTable, rolePermissionTable, roleTable } from '../tables';
import { db, and, eq } from '..';
import { seedAccounts } from './account';
import { seedRoles } from './role';

async function seed() {
  await db.transaction(async tx => {
    await tx.insert(roleTable).values(seedRoles).onConflictDoNothing();

    await tx.insert(accountTable).values(seedAccounts).onConflictDoNothing();

    for (const seedRole of seedRoles) {
      for (const permission of seedRole.permissions) {
        const permissions = await tx
          .select()
          .from(rolePermissionTable)
          .where(
            and(
              eq(rolePermissionTable.roleId, seedRole.id),
              eq(rolePermissionTable.permission, permission)
            )
          );

        if (!permissions.length) {
          await tx
            .insert(rolePermissionTable)
            .values({
              roleId: seedRole.id,
              permission,
              createdAt: new Date(),
            })
            .onConflictDoNothing();
        }
      }
    }
  });
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Seeding done!');
    process.exit(0);
  });
