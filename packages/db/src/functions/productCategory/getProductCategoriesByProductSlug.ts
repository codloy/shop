import { eq } from 'drizzle-orm';
import { db } from '../..';
import { productCategoryTable } from '../../tables';

export type ProductCategoriesByProductSlug = {
  id: string;
  name: string;
  slug: string;
  href: string;
};

async function getHierarchy(
  results: ProductCategoriesByProductSlug[],
  parentId: string | null
) {
  if (parentId === null) return;

  const categories = await db
    .select()
    .from(productCategoryTable)
    .where(eq(productCategoryTable.id, parentId));

  const category = categories[0];

  if (category) {
    results.push({
      id: category.id,
      name: category.name,
      slug: category.slug,
      href: category.slug,
    });

    if (category.parentId !== null) {
      await getHierarchy(results, category.parentId);
    }
  }

  return;
}

export async function getProductCategoriesByProductSlug(
  categoryId: string | null
) {
  const results: ProductCategoriesByProductSlug[] = [];

  await getHierarchy(results, categoryId);

  return results;
}
