import {
  accountTable,
  productCategoryTable,
  ProductCategoryTable,
  rolePermissionTable,
  roleTable,
} from '../tables';
import { db } from '..';
import { seedAccounts } from './account';
import { seedRoles } from './role';
import { seedProductCategories } from './product-category';
import { randomUUID } from 'node:crypto';
import { slug } from 'common';
import { eq, and } from 'drizzle-orm';

type SeedProductCategoryTable = ProductCategoryTable & {
  oldId: number;
  oldParentId: number | null;
};

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

    const seedCategories: SeedProductCategoryTable[] = [];

    for (const adminSeedProductCategory of seedProductCategories) {
      if (adminSeedProductCategory.parentId === null) {
        const uuid = randomUUID();

        seedCategories.push({
          id: uuid,
          name: adminSeedProductCategory.name,
          slug: slug(adminSeedProductCategory.name),
          description: '',
          parentId: null,
          createdAt: new Date(),
          oldId: adminSeedProductCategory.id,
          oldParentId: null,
        });
      } else {
        const found = seedCategories.find(
          seed => seed.oldId === adminSeedProductCategory.parentId
        );

        if (found) {
          const uuid = randomUUID();

          seedCategories.push({
            id: uuid,
            name: adminSeedProductCategory.name,
            slug: slug(adminSeedProductCategory.name),
            description: '',
            parentId: found.id,
            createdAt: new Date(),
            oldId: adminSeedProductCategory.id,
            oldParentId: null,
          });
        }
      }
    }

    await db
      .insert(productCategoryTable)
      .values(
        seedCategories.map(seed => ({
          id: seed.id,
          name: seed.name,
          slug: seed.slug,
          description: '',
          parentId: seed.parentId,
          createdAt: new Date(),
        }))
      )
      .onConflictDoNothing()
      .returning();
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
