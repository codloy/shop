import {
  AccountTable as TAccountTable,
  AccountTableInsert as TAccountTableInsert,
  AccountStatusEnum as TAccountStatusEnum,
  AttributeTable as TAttributeTable,
  AttributeDatatypeEnum as TAttributeDatatypeEnum,
  AttributeOptionTable as TAttributeOptionTable,
  BuyProductTable as TBuyProductTable,
  BuyProductImageTable as TBuyProductImageTable,
  ChatTable as TChatTable,
  ChatMemberTable as TChatMemberTable,
  ChatMessageTable as TChatMessageTable,
  GenderEnum as TGenderEnum,
  PermissionEnum as TPermissionEnum,
  ProductTable as TProductTable,
  ProductAttributeTable as TProductAttributeTable,
  ProductAttributeOptionTable as TProductAttributeOptionTable,
  ProductAvailabilityEnum as TProductAvailabilityEnum,
  ProductCategoryTable as TProductCategoryTable,
  ProductCategoryAttributeTable as TProductCategoryAttributeTable,
  ProductConditionEnum as TProductConditionEnum,
  ProductDeliveryOptionEnum as TProductDeliveryOptionEnum,
  ProductImageTable as TProductImageTable,
  ProductStatusEnum as TProductStatusEnum,
  ProductTypeEnum as TProductTypeEnum,
  RoleTable as TRoleTable,
  RolePermissionTable as TRolePermissionTable,
  SellProductBarterProducts as TSellProductBarterProducts,
  SellProductCommentTable as TSellProductCommentTable,
  SellProductSaveTable as TSellProductSaveTable,
  SellProductSearchTable as TSellProductSearchTable,
  Session as TSession,
  StoreTable as TStoreTable,
  StoreBranchTable as TStoreBranchTable,
  StoreStatusEnum as TStoreStatusEnum,
  StoreBranchStatusEnum as TStoreBranchStatusEnum,
} from './packages/db';

declare global {
  type AccountTable = TAccountTable;
  type AccountTableInsert = TAccountTableInsert;
  type AccountStatusEnum = TAccountStatusEnum;
  type AttributeDatatypeEnum = TAttributeDatatypeEnum;
  type AttributeOptionTable = TAttributeOptionTable;
  type BuyProductTable = TBuyProductTable;
  type BuyProductImageTable = TBuyProductImageTable;
  type ChatTable = TChatTable;
  type ChatMemberTable = TChatMemberTable;
  type ChatMessageTable = TChatMessageTable;
  type GenderEnum = TGenderEnum;
  type PermissionEnum = TPermissionEnum;
  type ProductTable = TProductTable;
  type ProductAttributeTable = TProductAttributeTable;
  type ProductAttributeOptionTable = TProductAttributeOptionTable;
  type ProductAvailabilityEnum = TProductAvailabilityEnum;
  type ProductCategoryTable = TProductCategoryTable;
  type ProductCategoryAttributeTable = TProductCategoryAttributeTable;
  type ProductConditionEnum = TProductConditionEnum;
  type ProductDeliveryOptionEnum = TProductDeliveryOptionEnum;
  type ProductImageTable = TProductImageTable;
  type ProductStatusEnum = TProductStatusEnum;
  type ProductTypeEnum = TProductTypeEnum;
  type RoleTable = TRoleTable;
  type RolePermissionTable = TRolePermissionTable;
  type SellProductBarterProducts = TSellProductBarterProducts;
  type SellProductCommentTable = TSellProductCommentTable;
  type SellProductSaveTable = TSellProductSaveTable;
  type SellProductSearchTable = TSellProductSearchTable;
  type Session = TSession;
  type StoreTable = TStoreTable;
  type StoreBranchTable = TStoreBranchTable;
  type StoreStatusEnum = TStoreStatusEnum;
  type StoreBranchStatusEnum = TStoreBranchStatusEnum;
}

export {};
