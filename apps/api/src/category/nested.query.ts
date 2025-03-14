import { homeCategoryNestedQuerySchema } from './schema';
import { homeProcedure } from '../../procedure';
import { getProductCategoryNested } from '@/lib/db/functions/productCategory/getProductCategoryNested';
import { TRPCException } from '@/exception';

export const homeCategoryNestedQuery = homeProcedure
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
