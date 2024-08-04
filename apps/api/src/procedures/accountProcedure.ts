import { TRPCError } from '@trpc/server';
import { verify } from 'jsonwebtoken';
import { db, accountTable, sessionTable, desc, eq } from 'db';
import { publicProcedure } from './publicProcedure';

export const accountProcedure = publicProcedure.use(
  async ({ next, ...opts }) => {
    const { ctx } = opts;
    const { req } = ctx;

    const getQueryParam = (
      url: string | undefined,
      paramName: string
    ): string | undefined => {
      if (!url) return undefined;
      const params = new URLSearchParams(url.split('?')[1]);
      const param = params.get(paramName);
      return param ?? undefined;
    };

    let token;

    if (req instanceof Request) {
      const authorizationHeader = req.headers.get('authorization');

      if (!authorizationHeader) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'No permission to access',
        });
      }

      token = authorizationHeader.split(' ')[1];
    } else {
      token = getQueryParam(ctx.req?.url, 'session');
    }

    if (!token) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'No permission to access',
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
