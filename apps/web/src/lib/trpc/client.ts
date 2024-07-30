import {
  getFetch,
  httpBatchLink,
  splitLink,
  wsLink,
  httpLink,
} from '@trpc/client';
import { trpc } from './trpc';
// import { protectedWsClient } from '../ws/protectedClient';
import { wsClient } from './ws';

const url = process.env.NEXT_PUBLIC_URL as string;

export function getBaseUrl() {
  if (typeof window !== 'undefined') return '';

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  return url;
}

function getAccessToken() {
  return localStorage.getItem('access_token') || '';
}

export const trpcClient = trpc.createClient({
  links: [
    splitLink({
      condition(op) {
        // check for context property `skipBatch`
        return op.type === 'subscription';
      },
      // when condition is true, use normal request
      true: wsLink({
        // client: protectedWsClient(() => {
        //   const baseUrl = `ws://localhost:3001`;

        //   const tokenQuery = `session=${getAccessToken()}`;

        //   return `${baseUrl}?${tokenQuery}`;
        // }),
        client: wsClient,
      }),
      // when condition is false, use batching
      false: httpLink({
        url: 'http://192.168.99.165:2022',
        // fetch: async (input, init?) => {
        //   const fetch = getFetch();

        //   return fetch(input, {
        //     ...init,
        //     credentials: 'include',
        //     headers: {
        //       ...init?.headers,
        //       Authorization: `Bearer ${getAccessToken()}`,
        //     },
        //   });
        // },
      }),
    }),
    // loggerLink({
    //   enabled: () => process.env.NODE_ENV === 'development',
    // }),
  ],
});
