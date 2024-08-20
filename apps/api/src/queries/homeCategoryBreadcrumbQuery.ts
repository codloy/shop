import { TRPCException } from '../exception';
import { homeCategoryBreadcrumbSchema } from 'schemas';
import { publicProcedure } from '../procedures';
import { getProductCategoryBreadcrumb } from '../utils';

export const homeCategoryBreadcrumbQuery = publicProcedure
  .input(homeCategoryBreadcrumbSchema)
  .query(async ({ input }) => {
    try {
      const { categorySlugs } = input;

      const results = await getProductCategoryBreadcrumb(categorySlugs);

      return {
        results,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
