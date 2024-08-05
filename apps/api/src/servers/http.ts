import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { routers } from '../routers';
import { createContext } from '../context';
import cors from 'cors';

export const { server, listen } = createHTTPServer({
  middleware: cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Referer', 'User-Agent'],
    origin: 'http://localhost:3000',
  }),
  router: routers,
  createContext,
});
