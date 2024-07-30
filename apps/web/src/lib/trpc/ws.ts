import { createWSClient } from '@trpc/client';

export const wsClient = createWSClient({
  url: `ws://192.168.99.165:2022`,
});
