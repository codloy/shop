import { TRPCError } from '@trpc/server';
import { authSignInSchema } from 'schemas';
import { db, sessionTable } from 'db';
import { TRPCException } from '../exception';
import { publicProcedure } from '../procedures';
import {
  isEmailExists,
  isPasswordEqual,
  checkAccountStatus,
  generateAccessToken,
  getRolePermissions,
} from '../utils';

export const authSignInMutation = publicProcedure
  .input(authSignInSchema)
  .mutation(async ({ input }) => {
    try {
      const { email, password, userAgent, screenWidth, screenHeight } = input;

      const account = await isEmailExists(email.toLowerCase());

      if (!account) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Check email or password',
        });
      }

      const passwordEqual = await isPasswordEqual(password, account.password);

      if (!passwordEqual) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Check email or password',
        });
      }

      checkAccountStatus(account.status);

      const accessToken = generateAccessToken(account.id);

      const permissions = await getRolePermissions(account.roleId);

      const sessions = await db
        .insert(sessionTable)
        .values({
          accountId: account.id,
          signedInAt: new Date(),
          userAgent,
          screenWidth,
          screenHeight,
          createdAt: new Date(),
        })
        .returning();

      const session = sessions[0];

      return {
        id: account.id,
        username: account.username,
        lastName: account.lastName,
        firstName: account.firstName,
        email: account.email,
        createdAt: account.createdAt,
        accessToken,
        status: account.status,
        permissions,
        roleName: account.role?.name || '',
        sessionId: session.id,
      };
    } catch (error) {
      throw TRPCException(error);
    }
  });
