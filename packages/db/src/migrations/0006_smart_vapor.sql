DO $$ BEGIN
 CREATE TYPE "product_availabilities" AS ENUM('Available', 'Preorder');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "product_conditions" AS ENUM('New', 'Almost new', 'Used', 'Refurbished');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "product_delivery_options" AS ENUM('Free delivery', 'Standard delivery', 'Express delivery', 'In-store pickup', 'Digital delivery', 'No delivery');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "product_statuses" AS ENUM('Sold', 'Deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "product_types" AS ENUM('Buy', 'Sell', 'Post');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "store_statuses" AS ENUM('Pending approval', 'Approved', 'Declined', 'Blocked', 'Deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'attribute-options:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'attribute-options:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'attribute-options:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'attribute-options:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'attribute-options:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'attribute-options:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'attribute-options:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'genders:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'genders:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'genders:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'genders:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-availabilities:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-availabilities:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-availabilities:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-availabilities:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-availabilities:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-availabilities:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-availabilities:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-conditions:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-conditions:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-conditions:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-conditions:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-conditions:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-conditions:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-conditions:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-delivery-options:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-delivery-options:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-delivery-options:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-delivery-options:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-delivery-options:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-delivery-options:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-delivery-options:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-images:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-images:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-images:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-images:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-images:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-images:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-images:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-statuses:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-statuses:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-statuses:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-statuses:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-statuses:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-statuses:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-statuses:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-types:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-types:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-types:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-types:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-types:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-types:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-types:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'role-permissions:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'role-permissions:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'role-permissions:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'role-permissions:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'role-permissions:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'role-permissions:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'role-permissions:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'stores:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'stores:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'stores:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'stores:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'stores:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'stores:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'stores:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branches:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branches:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branches:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branches:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branches:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branches:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branches:print';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-statuses:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-statuses:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-statuses:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-statuses:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-statuses:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-statuses:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-statuses:print';--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image_url" varchar(255),
	"product_id" uuid NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stores" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"phone_number" varchar(255),
	"email" varchar(255) NOT NULL,
	"cover_image_url" varchar(255),
	"profile_image_url" varchar(255),
	"facebook_url" varchar(255),
	"instagram_url" varchar(255),
	"status" "store_statuses" DEFAULT 'Pending approval' NOT NULL,
	"owner_id" uuid,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "stores_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "store_branches" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"phone_number" varchar(255),
	"store_id" uuid,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "cost_price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "sale_price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "product_category_attributes" ALTER COLUMN "attribute_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "price" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "quantity_available" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "is_price_negotiable" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "type" "product_types" NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "condition" "product_conditions" NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "delivery_option" "product_delivery_options" NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "availability" "product_availabilities" NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "status" "product_statuses" NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "published_at" timestamp NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stores" ADD CONSTRAINT "stores_owner_id_accounts_id_fk" FOREIGN KEY ("owner_id") REFERENCES "accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "store_branches" ADD CONSTRAINT "store_branches_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
