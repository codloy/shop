import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { routers } from '../routers';
import { createContext } from '../context';
import cors from 'cors';

export const { server, listen } = createHTTPServer({
  middleware: cors(),
  router: routers,
  createContext,
});
