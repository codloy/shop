ALTER TABLE "sell_product_barter_products" DROP CONSTRAINT "sell_product_barter_products_buy_product_id_products_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sell_product_barter_products" ADD CONSTRAINT "sell_product_barter_products_buy_product_id_buy_products_id_fk" FOREIGN KEY ("buy_product_id") REFERENCES "public"."buy_products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
