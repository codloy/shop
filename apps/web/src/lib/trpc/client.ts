import { splitLink } from '@trpc/client';
import { trpc } from './trpc';
import { getWSLink } from './links/ws';
import { getHTTPLink } from './links/http';
import superjson from 'superjson';

export const trpcClient = trpc.createClient({
  links: [
    splitLink({
      condition: ({ type }) => type === 'subscription',
      true: getWSLink,
      false: getHTTPLink,
    }),
  ],
  transformer: superjson,
});
