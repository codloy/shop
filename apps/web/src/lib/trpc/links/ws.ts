import {
  createWSClient,
  Operation,
  TRPCWebSocketClient,
  wsLink,
} from '@trpc/client';
import { getAccessToken } from '../utils/getAccessToken';

export const wsClient = createWSClient({
  url: process.env.NEXT_PUBLIC_WSS_URL || '',
});

const protectedWsClient = (getUrl: () => string) => {
  let client: TRPCWebSocketClient | undefined;
  let prevUrl: string;
  return {
    close() {
      client?.close();
      client = undefined;
    },
    request(op: Operation, callbacks: any) {
      const url = getUrl();
      if (!client || prevUrl !== url) {
        client?.close();
        prevUrl = url;
        client = createWSClient({ url });
      }
      return client.request(op, callbacks);
    },
    getConnection() {
      if (!client) {
        throw new Error('No WebSocket connection.');
      }
      return client.getConnection();
    },
  };
};

export const getWSLink = wsLink({
  client: protectedWsClient(() => {
    const url = process.env.NEXT_PUBLIC_WSS_URL || '';

    const tokenQuery = `session=${getAccessToken()}`;

    return `${url}?${tokenQuery}`;
  }),
  // client: wsClient,
});
