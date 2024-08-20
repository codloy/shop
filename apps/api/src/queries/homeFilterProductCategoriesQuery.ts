import {
  db,
  eq,
  AttributeTable,
  AttributeOptionTable,
  attributeTable,
  productCategoryAttributeTable,
  attributeOptionTable,
  productCategoryTable,
} from 'db';
import { TRPCException } from '../exception';
import { homeFilterProductCategoriesSchema } from 'schemas';
import { publicProcedure } from '../procedures';

export const homeFilterProductCategoriesQuery = publicProcedure
  .input(homeFilterProductCategoriesSchema)
  .query(async ({ input }) => {
    try {
      const { slugs } = input;

      type Filter = AttributeTable & {
        options: AttributeOptionTable[];
        isRequired: boolean;
      };

      let filters: Filter[] = [];

      for (const slug of slugs) {
        const categories = await db
          .select()
          .from(productCategoryTable)
          .where(eq(productCategoryTable.slug, slug));

        if (!categories.length) return;

        const productCategoryAttributes = await db
          .select({
            isRequired: productCategoryAttributeTable.isRequired,
            attribute: {
              id: attributeTable.id,
              name: attributeTable.name,
              description: attributeTable.description,
              datatype: attributeTable.datatype,
              createdAt: attributeTable.createdAt,
            },
          })
          .from(productCategoryAttributeTable)
          .leftJoin(
            attributeTable,
            eq(attributeTable.id, productCategoryAttributeTable.attributeId)
          )
          .leftJoin(
            productCategoryTable,
            eq(
              productCategoryTable.id,
              productCategoryAttributeTable.productCategoryId
            )
          )
          .where(eq(productCategoryTable.slug, slug));

        for (const productCategoryAttribute of productCategoryAttributes) {
          const { isRequired, attribute } = productCategoryAttribute;

          if (!attribute) continue;

          const options = await db
            .select()
            .from(attributeOptionTable)
            .where(eq(attributeOptionTable.attributeId, attribute.id));

          filters.push({
            id: attribute.id,
            name: attribute.name,
            description: attribute.description,
            datatype: attribute.datatype,
            createdAt: attribute.createdAt,
            options,
            isRequired,
          });
        }
      }

      return {
        results: filters,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
