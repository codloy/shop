import {
  PermissionEnum,
  RoleTable,
  accountPermissions,
  accountStatusPermissions,
  attributeDatatypePermissions,
  attributeOptionPermissions,
  attributePermissions,
  genderPermissions,
  permissionPermissions,
  productAvailabilityPermissions,
  productCategoryAttributePermissions,
  productCategoryPermissions,
  productConditionPermissions,
  productDeliveryOptionPermissions,
  productImagePermissions,
  productPermissions,
  productStatusPermissions,
  productTypePermissions,
  rolePermisions,
  rolePermissionPermisions,
  sessionPermissions,
  storeBranchPermissions,
  storeBranchStatusPermissions,
  storePermissions,
  storeStatusPermissions,
} from '../tables';

export type SeedRole = RoleTable & {
  permissions: PermissionEnum[];
};

export const seedRoles: SeedRole[] = [
  {
    id: 'e1a3c9bf-9a7f-479a-925b-e8287f3fc207',
    name: 'Хөгжүүлэгч',
    description: 'Програм хөгжүүлэгч',
    createdAt: new Date(),
    permissions: [
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
    ],
  },
  {
    id: '34032a30-d867-4241-a0be-6179a8e5cae9',
    name: 'Админ',
    description: 'Бүх үйлдлийг хийх эрхтэй',
    createdAt: new Date(),
    permissions: [
      ...accountPermissions,
      ...accountStatusPermissions,
      ...genderPermissions,
      ...permissionPermissions,
      ...productPermissions,
      ...productCategoryPermissions,
      ...rolePermisions,
      ...sessionPermissions,
    ],
  },
  {
    id: 'ec9fff2e-767c-444a-9c79-4711724a20fd',
    name: 'Менежэр',
    description: 'Удирдах хүн',
    createdAt: new Date(),
    permissions: [
      ...accountPermissions,
      ...accountStatusPermissions,
      ...genderPermissions,
      ...permissionPermissions,
      ...productPermissions,
      ...productCategoryPermissions,
      ...rolePermisions,
      ...sessionPermissions,
    ],
  },
];
