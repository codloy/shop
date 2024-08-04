CREATE TABLE IF NOT EXISTS "buy_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" varchar(255),
	"category_id" uuid,
	"min_price" integer NOT NULL,
	"max_price" integer NOT NULL,
	"published_at" timestamp NOT NULL,
	"account_id" uuid NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "buy_products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "buy_product_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"product_id" uuid NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "can_barter" boolean DEFAULT false;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_products" ADD CONSTRAINT "buy_products_category_id_product_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_categories"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_products" ADD CONSTRAINT "buy_products_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_product_images" ADD CONSTRAINT "buy_product_images_product_id_buy_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."buy_products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
