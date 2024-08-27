import { homeSellProductSchema } from 'schemas';
import {
  buyProductImageTable,
  buyProductTable,
  productImageTable,
  productTable,
  sellProductBarterProductTable,
  db,
  desc,
  eq,
  sql,
} from 'db';
import { TRPCException } from '../exception';
import { TRPCError } from '@trpc/server';
import { publicProcedure } from '../procedures';

export const homeSellProductQuery = publicProcedure
  .input(homeSellProductSchema)
  .query(async ({ input }) => {
    try {
      const { slug } = input;

      const products = await db
        .select()
        .from(productTable)
        .where(eq(productTable.slug, slug));

      const product = products[0];

      if (!product) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Sell product not found',
        });
      }

      const images = await db
        .select()
        .from(productImageTable)
        .where(eq(productImageTable.productId, product.id));

      const barterProducts = await db
        .select({
          id: sellProductBarterProductTable.id,
          buyProduct: {
            id: buyProductTable.id,
            name: buyProductTable.name,
            slug: buyProductTable.slug,
            description: buyProductTable.description,
            publishedAt: buyProductTable.publishedAt,
            categoryId: buyProductTable.categoryId,
            minPrice: buyProductTable.minPrice,
            maxPrice: buyProductTable.maxPrice,
            accountId: buyProductTable.accountId,
            createdAt: buyProductTable.createdAt,
            image: sql<{ imageUrl: string }>`1`,
          },
        })
        .from(sellProductBarterProductTable)
        .leftJoin(
          buyProductTable,
          eq(buyProductTable.id, sellProductBarterProductTable.buyProductId)
        )
        .where(eq(sellProductBarterProductTable.sellProductId, product.id));

      for (const result of barterProducts) {
        if (!result.buyProduct) continue;

        const images = await db
          .select()
          .from(buyProductImageTable)
          .where(eq(buyProductImageTable.productId, result.buyProduct.id))
          .orderBy(desc(buyProductImageTable.createdAt))
          .limit(1);

        result.buyProduct.image = {
          imageUrl: images[0]?.imageURL,
        };
      }

      return {
        result: product,
        images,
        barterProducts,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
