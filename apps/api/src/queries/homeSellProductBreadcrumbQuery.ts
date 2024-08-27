import { TRPCException } from '../exception';
import { homeSellProductBreadcrumbSchema } from 'schemas';
import { publicProcedure } from '../procedures';
import { productTable, eq } from 'db';
import { TRPCError } from '@trpc/server';
import { getProductCategoriesByProductSlug } from '../utils';

export const homeSellProductBreadcrumbQuery = publicProcedure
  .input(homeSellProductBreadcrumbSchema)
  .query(async ({ input }) => {
    try {
      const { productSlug } = input;

      const products = await db
        .select()
        .from(productTable)
        .where(eq(productTable.slug, productSlug));

      const product = products[0];

      if (!product) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Sell product not found',
        });
      }

      const results = await getProductCategoriesByProductSlug(
        product.categoryId
      );

      return {
        results: results.reverse(),
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
