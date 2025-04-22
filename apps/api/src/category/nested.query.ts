import { TRPCException } from '@/exception';
import { homeCategoryNestedQuerySchema } from 'schemas';
import { publicProcedure } from '@/procedures/publicProcedure';
import { getProductCategoryNested } from '@/utils/getProductCategoryNested';

export const homeCategoryNestedQuery = publicProcedure
  .input(homeCategoryNestedQuerySchema)
  .query(async ({ input }) => {
    try {
      const { slugs } = input;

      const categories = await getProductCategoryNested(slugs);

      return {
        results: categories,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
