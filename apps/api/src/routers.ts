import { addMutation } from './mutations/addMutation.';
import { createPostMutation } from './mutations/createPostMutation';
import { typingMutation } from './mutations/typingMutation';
import { greetingQuery } from './queries/greetingQuery';
import { router } from './router';
import { addSubscription } from './subscriptions/addSubscription';
import { randomNumberSubscription } from './subscriptions/randomNumberSubscription';
import { typingSubscription } from './subscriptions/typingSubscription';

export const routers = router({
  createPostMutation,
  greetingQuery,
  randomNumberSubscription,
  addMutation,
  addSubscription,
  typingMutation,
  typingSubscription,
});

export type Routers = typeof routers;
