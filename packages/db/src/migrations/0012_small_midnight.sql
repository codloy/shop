ALTER TABLE "product_attribute_options" DROP CONSTRAINT "product_attribute_options_attribute_option_id_attributes_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_attribute_options" ADD CONSTRAINT "product_attribute_options_attribute_option_id_attribute_options_id_fk" FOREIGN KEY ("attribute_option_id") REFERENCES "attribute_options"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
