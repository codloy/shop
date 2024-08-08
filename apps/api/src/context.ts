import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';

export function createContext(
  opts: CreateExpressContextOptions | CreateWSSContextFnOptions
) {
  return opts;
}

export type Context = Awaited<ReturnType<typeof createContext>>;
