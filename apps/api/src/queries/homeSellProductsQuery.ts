import {
  and,
  asc,
  db,
  desc,
  eq,
  ilike,
  or,
  sql,
  productCategoryTable,
  ProductImageTable,
  productImageTable,
  productTable,
} from 'db';
import { TRPCException } from '../exception';
import { homeSellProductsSchema } from 'schemas';
import {
  homeSellProductsDefaultPage,
  homeSellProductsDefaultTake,
  homeSellProductsSortColumn,
  homeSellProductsSortDirection,
} from 'configs';
import { publicProcedure } from '../procedures';
import { TRPCError } from '@trpc/server';

export const homeSellProductsQuery = publicProcedure
  .input(homeSellProductsSchema)
  .query(async ({ input }) => {
    try {
      const {
        page = homeSellProductsDefaultPage,
        take = homeSellProductsDefaultTake,
        sortColumn = homeSellProductsSortColumn,
        sortDirection = homeSellProductsSortDirection,
        search = '',
        categorySlugs = [],
      } = input || {};

      let categoryId: null | string = null;

      if (categorySlugs.length) {
        const last = categorySlugs[categorySlugs.length - 1];

        const categories = await db
          .select()
          .from(productCategoryTable)
          .where(eq(productCategoryTable.slug, last));

        const category = categories[0];

        if (!category) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Category slug not found',
          });
        }

        categoryId = category.id;
      }

      const categoryFilter =
        categoryId === null
          ? undefined
          : eq(productTable.categoryId, categoryId);

      const searchFilter = search
        ? or(
            ilike(productTable.name, `%${search}%`),
            ilike(productTable.description, `%${search}%`)
          )
        : undefined;

      const filters = and(searchFilter, categoryFilter);

      const orderBy =
        sortDirection === 'asc'
          ? asc(productTable[sortColumn])
          : desc(productTable[sortColumn]);

      const totalRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(productTable);

      const total = totalRows[0].count;

      const foundRows = await db
        .select({ count: sql<number>`count(*)` })
        .from(productTable)
        .where(filters);

      const found = foundRows[0].count;

      const results = await db
        .select({
          product: productTable,
          images: sql<ProductImageTable[]>`1`,
          category: productCategoryTable,
        })
        .from(productTable)
        .leftJoin(
          productCategoryTable,
          eq(productCategoryTable.id, productTable.categoryId)
        )
        .where(filters)
        .orderBy(orderBy)
        .limit(take)
        .offset((page - 1) * take);

      for (const result of results) {
        const images = await db
          .select()
          .from(productImageTable)
          .where(eq(productImageTable.productId, result.product.id));

        result.images = images;
      }

      return {
        total,
        found,
        results,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
