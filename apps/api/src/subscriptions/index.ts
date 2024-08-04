import { trpc } from '../trpc';
import { addSubscription } from './addSubscription';
import { randomNumberSubscription } from './randomNumberSubscription';
import { typingSubscription } from './typingSubscription';

export const subscriptionRouters = trpc.router({
  addSubscription,
  randomNumberSubscription,
  typingSubscription,
});
