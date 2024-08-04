ALTER TYPE "permissions" ADD VALUE 'product-category-attributes:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-category-attributes:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-category-attributes:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-category-attributes:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-category-attributes:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-category-attributes:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'product-category-attributes:print';--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_category_attributes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"is_required" boolean NOT NULL,
	"parent_id" uuid,
	"attribute_id" uuid,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "product_category_attributes_parent_id_attribute_id_unique" UNIQUE("parent_id","attribute_id")
);
--> statement-breakpoint
ALTER TABLE "attribute_options" DROP CONSTRAINT "attribute_options_attribute_id_attributes_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attribute_options" ADD CONSTRAINT "attribute_options_attribute_id_attributes_id_fk" FOREIGN KEY ("attribute_id") REFERENCES "attributes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_category_attributes" ADD CONSTRAINT "product_category_attributes_parent_id_product_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "product_categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_category_attributes" ADD CONSTRAINT "product_category_attributes_attribute_id_attributes_id_fk" FOREIGN KEY ("attribute_id") REFERENCES "attributes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
