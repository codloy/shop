CREATE TABLE IF NOT EXISTS "sell_product_barter_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sell_product_id" uuid NOT NULL,
	"buy_product_id" uuid NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "cash" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "barter" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "loan" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "leasing" integer DEFAULT 0;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sell_product_barter_products" ADD CONSTRAINT "sell_product_barter_products_sell_product_id_products_id_fk" FOREIGN KEY ("sell_product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sell_product_barter_products" ADD CONSTRAINT "sell_product_barter_products_buy_product_id_products_id_fk" FOREIGN KEY ("buy_product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
