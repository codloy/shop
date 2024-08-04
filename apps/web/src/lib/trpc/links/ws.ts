import { createWSClient, wsLink } from '@trpc/client';

export const wsClient = createWSClient({
  url: process.env.NEXT_PUBLIC_WSS_URL || '',
});

export const getWSLink = wsLink({
  // client: protectedWsClient(() => {
  //   const baseUrl = `ws://localhost:3001`;

  //   const tokenQuery = `session=${getAccessToken()}`;

  //   return `${baseUrl}?${tokenQuery}`;
  // }),
  client: wsClient,
});
