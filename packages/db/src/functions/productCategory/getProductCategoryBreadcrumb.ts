import { eq } from 'drizzle-orm';
import { db } from '../..';
import { productCategoryTable } from '../../tables';

export type CategoryBreadcrumb = {
  id: string;
  name: string;
  slug: string;
  href: string;
};

export async function getProductCategoryBreadcrumb(slugs: string[]) {
  const nestedCategories: CategoryBreadcrumb[] = [];

  for (const slug of slugs) {
    const categories = await db
      .select()
      .from(productCategoryTable)
      .where(eq(productCategoryTable.slug, slug));

    if (!categories.length) break;

    const category = categories[0];

    nestedCategories.push({
      id: category.id,
      name: category.name,
      slug: category.slug,
      href: category.slug,
    });
  }

  let href = '';

  nestedCategories.forEach((item, index) => {
    href += `${index === 0 ? '' : '/'}${item.slug}`;

    item.href = href;
  });

  return nestedCategories;
}
