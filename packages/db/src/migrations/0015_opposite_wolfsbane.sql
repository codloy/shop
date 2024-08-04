ALTER TABLE "chat_messages" RENAME COLUMN "recipient_id" TO "message";--> statement-breakpoint
ALTER TABLE "chats" DROP CONSTRAINT "chats_name_unique";--> statement-breakpoint
ALTER TABLE "chat_messages" DROP CONSTRAINT "chat_messages_recipient_id_accounts_id_fk";
--> statement-breakpoint
ALTER TABLE "chats" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "chat_messages" ALTER COLUMN "message" SET DATA TYPE varchar;