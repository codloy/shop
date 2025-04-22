import { isNull, eq } from 'drizzle-orm';
import { db } from '../..';
import { ProductCategoryTable, productCategoryTable } from '../../tables';

export type NestedCategory = {
  id: string;
  name: string;
  slug: string;
  href: string;
  isSelected: boolean;
  categories: NestedCategory[];
};

export async function getProductCategoryNested(slugs: string[]) {
  const nestedCategories: NestedCategory[] = [];

  const rootCategories = await db
    .select()
    .from(productCategoryTable)
    .where(isNull(productCategoryTable.parentId));

  for (const rootCategory of rootCategories) {
    nestedCategories.push({
      id: rootCategory.id,
      name: rootCategory.name,
      slug: rootCategory.slug,
      href: rootCategory.slug,
      isSelected: false,
      categories: [],
    });
  }

  for (const slug of slugs) {
    const categories = await db
      .select()
      .from(productCategoryTable)
      .where(eq(productCategoryTable.slug, slug));

    if (!categories.length) break;

    const category = categories[0];

    const subCategories = await db
      .select()
      .from(productCategoryTable)
      .where(eq(productCategoryTable.parentId, category.id));

    asd(nestedCategories, subCategories, slug);
  }

  return nestedCategories;
}

function asd(
  array1: NestedCategory[],
  array2: ProductCategoryTable[],
  slug: string
) {
  if (!array1.length) return;
  if (!array2.length) return;

  for (const array of array1) {
    if (array.slug === slug) {
      array.categories = array2.map(arr => ({
        categories: [],
        id: arr.id,
        name: arr.name,
        slug: arr.slug,
        href: `${array.href}/${arr.slug}`,
        isSelected: arr.slug === slug,
      }));

      array.isSelected = true;

      continue;
    }

    asd(array.categories, array2, slug);
  }
}
