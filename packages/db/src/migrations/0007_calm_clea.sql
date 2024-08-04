ALTER TABLE "products" DROP CONSTRAINT "products_name_category_id_unique";--> statement-breakpoint
ALTER TABLE "stores" DROP CONSTRAINT "stores_email_unique";--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "stores" ALTER COLUMN "email" DROP NOT NULL;