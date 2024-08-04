DO $$ BEGIN
 CREATE TYPE "store_branch_statuses" AS ENUM('Pending approval', 'Approved', 'Declined', 'Blocked', 'Deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branch-statuses:read';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branch-statuses:create';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branch-statuses:update';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branch-statuses:delete';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branch-statuses:install';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branch-statuses:export-to-excel';--> statement-breakpoint
ALTER TYPE "permissions" ADD VALUE 'store-branch-statuses:print';--> statement-breakpoint
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_role_id_roles_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_product_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_account_id_accounts_id_fk";
--> statement-breakpoint
ALTER TABLE "stores" DROP CONSTRAINT "stores_owner_id_accounts_id_fk";
--> statement-breakpoint
ALTER TABLE "store_branches" DROP CONSTRAINT "store_branches_store_id_stores_id_fk";
--> statement-breakpoint
ALTER TABLE "store_branches" ADD COLUMN "email" varchar(255);--> statement-breakpoint
ALTER TABLE "store_branches" ADD COLUMN "status" "store_branch_statuses" NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_category_id_product_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "product_categories"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stores" ADD CONSTRAINT "stores_owner_id_accounts_id_fk" FOREIGN KEY ("owner_id") REFERENCES "accounts"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "store_branches" ADD CONSTRAINT "store_branches_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
