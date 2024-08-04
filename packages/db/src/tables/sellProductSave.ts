import { InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { productTable } from "./product";
import { accountTable } from "./account";

export const sellProductSaveTable = pgTable("sell_product_saveds", {
  id: uuid("id").defaultRandom().primaryKey(),
  sellProductId: uuid("sell_product_id")
    .references(() => productTable.id, { onDelete: "cascade" })
    .notNull(),
  accountId: uuid("account_id")
    .references(() => accountTable.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export type SellProductSaveTable = InferSelectModel<
  typeof sellProductSaveTable
>;
