import { pgEnum } from 'drizzle-orm/pg-core';

export const accountPermissions = [
  'accounts:read',
  'accounts:create',
  'accounts:update',
  'accounts:delete',
  'accounts:install',
  'accounts:export-to-excel',
  'accounts:print',
] as const;

export const accountStatusPermissions = [
  'account-statuses:read',
  'account-statuses:create',
  'account-statuses:update',
  'account-statuses:delete',
  'account-statuses:install',
  'account-statuses:export-to-excel',
  'account-statuses:print',
] as const;

export const attributePermissions = [
  'attributes:read',
  'attributes:create',
  'attributes:update',
  'attributes:delete',
  'attributes:install',
  'attributes:export-to-excel',
  'attributes:print',
] as const;

export const attributeDatatypePermissions = [
  'attribute-datatypes:read',
  'attribute-datatypes:create',
  'attribute-datatypes:update',
  'attribute-datatypes:delete',
  'attribute-datatypes:install',
  'attribute-datatypes:export-to-excel',
  'attribute-datatypes:print',
] as const;

export const attributeOptionPermissions = [
  'attribute-options:read',
  'attribute-options:create',
  'attribute-options:update',
  'attribute-options:delete',
  'attribute-options:install',
  'attribute-options:export-to-excel',
  'attribute-options:print',
] as const;

export const genderPermissions = [
  'genders:read',
  'genders:create',
  'genders:update',
  'genders:delete',
  'genders:install',
  'genders:export-to-excel',
  'genders:print',
] as const;

export const permissionPermissions = [
  'permissions:read',
  'permissions:create',
  'permissions:update',
  'permissions:delete',
  'permissions:install',
  'permissions:export-to-excel',
  'permissions:print',
] as const;

export const rolePermisions = [
  'roles:read',
  'roles:create',
  'roles:update',
  'roles:delete',
  'roles:install',
  'roles:export-to-excel',
  'roles:print',
] as const;

export const rolePermissionPermisions = [
  'role-permissions:read',
  'role-permissions:create',
  'role-permissions:update',
  'role-permissions:delete',
  'role-permissions:install',
  'role-permissions:export-to-excel',
  'role-permissions:print',
] as const;

export const productPermissions = [
  'products:read',
  'products:create',
  'products:update',
  'products:delete',
  'products:install',
  'products:export-to-excel',
  'products:print',
] as const;

export const productAvailabilityPermissions = [
  'product-availabilities:read',
  'product-availabilities:create',
  'product-availabilities:update',
  'product-availabilities:delete',
  'product-availabilities:install',
  'product-availabilities:export-to-excel',
  'product-availabilities:print',
] as const;

export const productCategoryPermissions = [
  'product-categories:read',
  'product-categories:create',
  'product-categories:update',
  'product-categories:delete',
  'product-categories:install',
  'product-categories:export-to-excel',
  'product-categories:print',
] as const;

export const productCategoryAttributePermissions = [
  'product-category-attributes:read',
  'product-category-attributes:create',
  'product-category-attributes:update',
  'product-category-attributes:delete',
  'product-category-attributes:install',
  'product-category-attributes:export-to-excel',
  'product-category-attributes:print',
] as const;

export const productConditionPermissions = [
  'product-conditions:read',
  'product-conditions:create',
  'product-conditions:update',
  'product-conditions:delete',
  'product-conditions:install',
  'product-conditions:export-to-excel',
  'product-conditions:print',
] as const;

export const productDeliveryOptionPermissions = [
  'product-delivery-options:read',
  'product-delivery-options:create',
  'product-delivery-options:update',
  'product-delivery-options:delete',
  'product-delivery-options:install',
  'product-delivery-options:export-to-excel',
  'product-delivery-options:print',
] as const;

export const productImagePermissions = [
  'product-images:read',
  'product-images:create',
  'product-images:update',
  'product-images:delete',
  'product-images:install',
  'product-images:export-to-excel',
  'product-images:print',
] as const;

export const productStatusPermissions = [
  'product-statuses:read',
  'product-statuses:create',
  'product-statuses:update',
  'product-statuses:delete',
  'product-statuses:install',
  'product-statuses:export-to-excel',
  'product-statuses:print',
] as const;

export const productTypePermissions = [
  'product-types:read',
  'product-types:create',
  'product-types:update',
  'product-types:delete',
  'product-types:install',
  'product-types:export-to-excel',
  'product-types:print',
] as const;

export const sessionPermissions = [
  'sessions:read',
  'sessions:create',
  'sessions:update',
  'sessions:delete',
  'sessions:install',
  'sessions:export-to-excel',
  'sessions:print',
] as const;

export const storePermissions = [
  'stores:read',
  'stores:create',
  'stores:update',
  'stores:delete',
  'stores:install',
  'stores:export-to-excel',
  'stores:print',
] as const;

export const storeBranchPermissions = [
  'store-branches:read',
  'store-branches:create',
  'store-branches:update',
  'store-branches:delete',
  'store-branches:install',
  'store-branches:export-to-excel',
  'store-branches:print',
] as const;

export const storeStatusPermissions = [
  'store-statuses:read',
  'store-statuses:create',
  'store-statuses:update',
  'store-statuses:delete',
  'store-statuses:install',
  'store-statuses:export-to-excel',
  'store-statuses:print',
] as const;

export const storeBranchStatusPermissions = [
  'store-branch-statuses:read',
  'store-branch-statuses:create',
  'store-branch-statuses:update',
  'store-branch-statuses:delete',
  'store-branch-statuses:install',
  'store-branch-statuses:export-to-excel',
  'store-branch-statuses:print',
] as const;

export const permissions = [
  ...accountPermissions,
  ...accountStatusPermissions,
  ...attributePermissions,
  ...attributeDatatypePermissions,
  ...attributeOptionPermissions,
  ...genderPermissions,
  ...permissionPermissions,
  ...productPermissions,
  ...productAvailabilityPermissions,
  ...productCategoryPermissions,
  ...productCategoryAttributePermissions,
  ...productConditionPermissions,
  ...productDeliveryOptionPermissions,
  ...productImagePermissions,
  ...productStatusPermissions,
  ...productTypePermissions,
  ...rolePermisions,
  ...rolePermissionPermisions,
  ...sessionPermissions,
  ...storePermissions,
  ...storeBranchPermissions,
  ...storeStatusPermissions,
  ...storeBranchStatusPermissions,
] as const;

export type PermissionEnum = (typeof permissions)[number];

export const permissionsEnum = pgEnum('permissions', permissions);
