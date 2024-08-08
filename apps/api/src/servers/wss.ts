import { Server } from 'ws';
import { http } from './http';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { routers, Routers } from '../routers';
import { createContext } from '../context';

export const wss = new Server({ server: http });

export const { broadcastReconnectNotification } = applyWSSHandler<Routers>({
  wss,
  router: routers,
  createContext,
});
