import { addMutation } from './mutations/addMutation.';
import { createPostMutation } from './mutations/createPostMutation';
import { greetingQuery } from './queries/greetingQuery';
import { router } from './router';
import { addSubscription } from './subscriptions/addSubscription';
import { randomNumberSubscription } from './subscriptions/randomNumberSubscription';

export const routers = router({
  createPostMutation,
  greetingQuery,
  randomNumberSubscription,
  addMutation,
  addSubscription,
});

export type Routers = typeof routers;
