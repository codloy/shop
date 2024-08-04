import { trpc } from './trpc';
import { mutationRouters } from './mutations';
import { queryRouters } from './queries';
import { subscriptionRouters } from './subscriptions';

export const routers = trpc.mergeRouters(
  mutationRouters,
  queryRouters,
  subscriptionRouters
);

export type Routers = typeof routers;
