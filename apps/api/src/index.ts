import { listen } from './servers/http';
import { wss, handler } from './servers/wss';
import { getIP } from './utils/getIP';
import 'dotenv/config';
import { getPort } from './utils/getPort';

const ip = getIP();
const port = getPort();

listen(port, ip);

console.log('API:');
console.log(`PORT="${port}"`);
console.log(`DB_URL="${process.env.DB_URL}"\n`);
console.log('WEB:');
console.log(`NEXT_PUBLIC_HTTP_URL="http://${ip}:${port}"`);
console.log(`NEXT_PUBLIC_WSS_URL="ws://${ip}:${port}"`);

process.on('SIGTERM', () => {
  console.log('SIGTERM');
  handler.broadcastReconnectNotification();
  wss.close();
});
