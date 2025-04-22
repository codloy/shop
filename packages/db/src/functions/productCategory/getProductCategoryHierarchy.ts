import { eq } from 'drizzle-orm';
import { db } from '../..';
import { productCategoryTable } from '../../tables';

async function getHierarchy(objectId: string | null) {
  const result: {
    id: string | null;
    name: string;
    slug: string;
    parentId: string | null;
  }[] = [];

  if (objectId === null) {
    return result;
  }

  const rows = await db
    .select()
    .from(productCategoryTable)
    .where(eq(productCategoryTable.id, objectId));

  const row = rows[0];

  if (row) {
    result.push({
      id: row.id,
      name: row.name,
      slug: row.slug,
      parentId: row.parentId,
    });

    if (row.parentId !== null) {
      const parentHierarchy = await getHierarchy(row.parentId);
      result.push(...parentHierarchy);
    }
  }

  return result;
}

export async function getProductCategoryHierarchy(objectId: string | null) {
  const heirarchy = await getHierarchy(objectId);

  heirarchy.push({
    id: null,
    name: '',
    slug: '',
    parentId: null,
  });

  heirarchy.reverse();

  return heirarchy;
}
