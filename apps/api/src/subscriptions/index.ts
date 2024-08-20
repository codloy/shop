import { trpc } from '../trpc';
import { accountChatSendSubscription } from './accountChatSendSubscription';
import { addSubscription } from './addSubscription';
import { randomNumberSubscription } from './randomNumberSubscription';
import { typingSubscription } from './typingSubscription';

export const subscriptionRouters = trpc.router({
  accountChatSendSubscription,
  addSubscription,
  randomNumberSubscription,
  typingSubscription,
});
