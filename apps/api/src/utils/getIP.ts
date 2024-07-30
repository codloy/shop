import os from 'os';

export function getIP() {
  const interfaces = os.networkInterfaces();

  for (const devName in interfaces) {
    const iface = interfaces[devName];

    if (!iface) continue;

    for (const alias of iface) {
      if (alias.family !== 'IPv4') continue;
      if (alias.address === '127.0.0.1') continue;
      if (alias.internal) continue;

      return alias.address;
    }
  }

  return 'localhost';
}
