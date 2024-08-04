ALTER TYPE "product_statuses" ADD VALUE 'Available';--> statement-breakpoint
ALTER TABLE "accounts" ALTER COLUMN "gender" SET DEFAULT 'Rather not say';--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "status" SET DEFAULT 'Available';--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "status" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "is_free" boolean DEFAULT false;