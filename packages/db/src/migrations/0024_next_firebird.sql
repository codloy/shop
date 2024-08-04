ALTER TABLE "sell_product_searches" DROP CONSTRAINT "sell_product_searches_sell_product_id_products_id_fk";
--> statement-breakpoint
ALTER TABLE "sell_product_searches" DROP COLUMN IF EXISTS "sell_product_id";