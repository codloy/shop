ALTER TABLE "product_categories" ADD COLUMN "slug" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_slug_parent_id_unique" UNIQUE("slug","parent_id");