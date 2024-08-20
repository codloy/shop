import { trpc } from '../trpc';
import { accountAccountsQuery } from './accountAccountsQuery';
import { accountChatQuery } from './accountChatQuery';
import { accountChatsQuery } from './accountChatsQuery';
import { accountProfileQuery } from './accountProfileQuery';
import { greetingQuery } from './greetingQuery';
import { homeCategoryBreadcrumbQuery } from './homeCategoryBreadcrumbQuery';
import { homeCategoryNestedQuery } from './homeCategoryNestedQuery';
import { homeFilterProductCategoriesQuery } from './homeFilterProductCategoriesQuery';

export const queryRouters = trpc.router({
  accountAccountsQuery,
  accountChatQuery,
  accountChatsQuery,
  accountProfileQuery,
  greetingQuery,
  homeCategoryBreadcrumbQuery,
  homeCategoryNestedQuery,
  homeFilterProductCategoriesQuery,
});
