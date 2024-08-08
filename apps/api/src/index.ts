import { wss, broadcastReconnectNotification } from './servers/wss';
import { getIP } from './utils/getIP';
import 'dotenv/config';
import { getPort } from './utils/getPort';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { Routers, routers } from './routers';
import { createContext } from './context';
import { app } from './servers/express';
import cors from 'cors';
import { http } from './servers/http';

app.use(
  cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Referer', 'User-Agent'],
    origin: 'http://localhost:3000',
  })
);

app.use(
  '/trpc',
  createExpressMiddleware<Routers>({ router: routers, createContext })
);

app.get('/api', (_req, res) => {
  res.send({ message: 'Welcome to trpc!' });
});

const ip = getIP();
const port = getPort();

http.listen(port, ip, () => {
  console.log('API:');
  console.log(`PORT="${port}"`);
  console.log(`DB_URL="${process.env.DB_URL}"`);
  console.log(`ACCESS_TOKEN_SECRET="${process.env.ACCESS_TOKEN_SECRET}"\n`);

  console.log('WEB:');
  console.log(`NEXT_PUBLIC_TRPC_URL="http://${ip}:${port}/trpc"`);
  console.log(`NEXT_PUBLIC_HTTP_URL="http://${ip}:${port}"`);
  console.log(`NEXT_PUBLIC_WSS_URL="ws://${ip}:${port}"`);
});

http.on('error', console.error);

process.on('SIGTERM', () => {
  console.log('SIGTERM');
  broadcastReconnectNotification();
  wss.close();
  http.close();
});
