DO $$ BEGIN
 CREATE TYPE "account_statuses" AS ENUM('Pending approval', 'Approved', 'Declined', 'Blocked', 'Deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "attribute_datatypes" AS ENUM('Pending approval', 'Approved', 'Declined', 'Blocked', 'Deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "genders" AS ENUM('Not known', 'Male', 'Female', 'Not applicable', 'Rather not say');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "permissions" AS ENUM('accounts:read', 'accounts:create', 'accounts:update', 'accounts:delete', 'accounts:install', 'accounts:export-to-excel', 'accounts:print', 'account-statuses:read', 'account-statuses:export-to-excel', 'account-statuses:print', 'attribute-datatypes:read', 'attribute-datatypes:export-to-excel', 'attribute-datatypes:print', 'genders:read', 'genders:export-to-excel', 'genders:print', 'permissions:read', 'permissions:create', 'permissions:update', 'permissions:delete', 'permissions:install', 'permissions:export-to-excel', 'permissions:print', 'products:read', 'products:create', 'products:update', 'products:delete', 'products:install', 'products:export-to-excel', 'products:print', 'product-categories:read', 'product-categories:create', 'product-categories:update', 'product-categories:delete', 'product-categories:install', 'product-categories:export-to-excel', 'product-categories:print', 'roles:read', 'roles:create', 'roles:update', 'roles:delete', 'roles:install', 'roles:export-to-excel', 'roles:print', 'sessions:read', 'sessions:create', 'sessions:update', 'sessions:delete', 'sessions:install', 'sessions:export-to-excel', 'sessions:print');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"profile_picture_url" varchar(255),
	"last_name" varchar(255) NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"username" varchar(36) NOT NULL,
	"birthday" date,
	"email" varchar(255) NOT NULL,
	"phone_number" varchar(255) NOT NULL,
	"password" varchar(1024) NOT NULL,
	"status" "account_statuses" DEFAULT 'Pending approval' NOT NULL,
	"gender" "genders" DEFAULT 'Not known' NOT NULL,
	"role_id" uuid,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "accounts_username_unique" UNIQUE("username"),
	CONSTRAINT "accounts_email_unique" UNIQUE("email"),
	CONSTRAINT "accounts_phone_number_unique" UNIQUE("phone_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "attributes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"datatype" "attribute_datatypes" NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "attribute_options" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"attribute_id" uuid NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"category_id" uuid,
	"cost_price" integer NOT NULL,
	"sale_price" integer NOT NULL,
	"bar_code" varchar,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "products_name_category_id_unique" UNIQUE("name","category_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"parent_id" uuid,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "product_categories_name_parent_id_unique" UNIQUE("name","parent_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"created_at" timestamp NOT NULL,
	CONSTRAINT "roles_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "role_permissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"role_id" uuid NOT NULL,
	"permission" "permissions" NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"account_id" uuid NOT NULL,
	"signed_in_at" timestamp NOT NULL,
	"signed_out_at" timestamp,
	"userAgent" varchar NOT NULL,
	"screen_width" integer NOT NULL,
	"screen_height" integer NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "attribute_options" ADD CONSTRAINT "attribute_options_attribute_id_attributes_id_fk" FOREIGN KEY ("attribute_id") REFERENCES "attributes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_category_id_product_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "product_categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_parent_id_product_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "product_categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "role_permissions" ADD CONSTRAINT "role_permissions_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
