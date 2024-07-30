import { listen } from './servers/http';
import { wss, handler } from './servers/wss';
import { getIP } from './utils/getIP';
import 'dotenv/config';
import { getPort } from './utils/getPort';

const ip = getIP();
const port = getPort();

listen(port, ip);

console.log(`HTTP: http://${ip}:${port}`);
console.log(`WSS: ws://${ip}:${port}`);

process.on('SIGTERM', () => {
  console.log('SIGTERM');
  handler.broadcastReconnectNotification();
  wss.close();
});
