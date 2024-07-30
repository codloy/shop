import { WebSocketServer } from 'ws';
import { server } from './http';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { routers, Routers } from '../routers';
import { createContext } from '../context';

export const wss = new WebSocketServer({ server });

export const handler = applyWSSHandler<Routers>({
  wss,
  router: routers,
  createContext,
});
