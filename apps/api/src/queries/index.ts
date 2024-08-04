import { trpc } from '../trpc';
import { accountProfileQuery } from './accountProfileQuery';
import { greetingQuery } from './greetingQuery';

export const queryRouters = trpc.router({
  accountProfileQuery,
  greetingQuery,
});
