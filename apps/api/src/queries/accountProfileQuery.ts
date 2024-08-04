import { TRPCException } from '../exception';
import { accountProcedure } from '../procedures';
import { getRolePermissions } from '../utils';

export const accountProfileQuery = accountProcedure.query(
  async ({ ctx: { account } }) => {
    try {
      const permissions = await getRolePermissions(account.roleId);

      return {
        result: {
          ...account,
          permissions,
        },
      };
    } catch (error) {
      throw TRPCException(error);
    }
  }
);
