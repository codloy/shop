import { eq, PermissionEnum, rolePermissionTable } from 'db';

export async function getRolePermissions(
  roleId: string | null
): Promise<PermissionEnum[]> {
  const permissions: PermissionEnum[] = [];

  if (!roleId) return permissions;

  const rolePermissions = await db
    .selectDistinct({
      permission: rolePermissionTable.permission,
    })
    .from(rolePermissionTable)
    .where(eq(rolePermissionTable.roleId, roleId));

  for (const rolePermission of rolePermissions) {
    permissions.push(rolePermission.permission);
  }

  return permissions;
}
