import { TRPCError } from '@trpc/server';
import { verify } from 'jsonwebtoken';
import { db, accountTable, sessionTable, desc, eq } from 'db';
import { publicProcedure } from './publicProcedure';

export const accountProcedure = publicProcedure.use(
  async ({ next, ...opts }) => {
    const { ctx, type } = opts;
    const { req } = ctx;

    let token: string = '';

    if (type === 'mutation' || type === 'query') {
      const authorizationHeader = req.headers.authorization;

      if (!authorizationHeader) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'No permission to access',
        });
      }

      token = authorizationHeader.split(' ')[1];
    }

    if (type === 'subscription') {
      if (!req.url) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Token not found',
        });
      }

      if (typeof req.url === 'string') {
        token = req.url.split('=')[1];
      } else {
        console.log(typeof req.url, req.url);
      }
    }

    if (!token) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Token not found',
      });
    }

    let payload: null | { sub: string } = null;

    if (!process.env.ACCESS_TOKEN_SECRET) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'ACCESS_TOKEN_SECRET not found',
      });
    }

    try {
      const isVerified = verify(token, process.env.ACCESS_TOKEN_SECRET);

      if (!isVerified) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'No permission to access',
        });
      }

      if (typeof isVerified === 'string') {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'No permission to access',
        });
      }

      payload = {
        sub: isVerified.sub || '',
      };
    } catch (err: Error | any) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'No permission to access',
      });
    }

    if (!payload) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'No permission to access',
      });
    }

    const accounts = await db
      .select()
      .from(accountTable)
      .where(eq(accountTable.id, payload.sub));

    if (accounts.length !== 1) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'No permission to access',
      });
    }

    const account = accounts[0];

    const sessions = await db
      .select()
      .from(sessionTable)
      .where(eq(sessionTable.accountId, account.id))
      .orderBy(desc(sessionTable.createdAt));

    const session = sessions[0];

    return next({
      ...opts,
      ctx: {
        ...opts.ctx,
        account,
        session,
        accessToken: token,
      },
    });
  }
);
