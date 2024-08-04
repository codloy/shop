import { db, eq, AccountTable, RoleTable, accountTable, roleTable } from 'db';

export type UsernameExistsData = AccountTable & {
  role: {
    name: RoleTable['name'] | null;
  } | null;
};

export type IsUsernameExistsData = Promise<UsernameExistsData | false>;

export async function isUsernameExists(
  username: string
): Promise<UsernameExistsData | false> {
  const accounts = await db
    .select({
      id: accountTable.id,
      profilePictureURL: accountTable.profilePictureURL,
      lastName: accountTable.lastName,
      firstName: accountTable.firstName,
      username: accountTable.username,
      birthday: accountTable.birthday,
      email: accountTable.email,
      phoneNumber: accountTable.phoneNumber,
      password: accountTable.password,
      status: accountTable.status,
      gender: accountTable.gender,
      roleId: accountTable.roleId,
      createdAt: accountTable.createdAt,
      role: {
        name: roleTable.name,
      },
    })
    .from(accountTable)
    .leftJoin(roleTable, eq(roleTable.id, accountTable.roleId))
    .where(eq(accountTable.username, username));

  const account = accounts[0];

  if (!account) {
    return false;
  }

  return account;
}
