CREATE TABLE IF NOT EXISTS "sell_product_comments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"comment" text NOT NULL,
	"rating" integer NOT NULL,
	"sell_product_id" uuid NOT NULL,
	"account_id" uuid NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sell_product_comments" ADD CONSTRAINT "sell_product_comments_sell_product_id_products_id_fk" FOREIGN KEY ("sell_product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sell_product_comments" ADD CONSTRAINT "sell_product_comments_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
