import { trpc } from '../trpc';
import { accountSellProductSearchCreateMutation } from './accountSellProductSearchCreateMutation';
import { addMutation } from './addMutation.';
import { authSignInMutation } from './authSignInMutation';
import { authSignOutMutation } from './authSignOutMutation';
import { authSignUpMutation } from './authSignUpMutation';
import { createPostMutation } from './createPostMutation';
import { typingMutation } from './typingMutation';

export const mutationRouters = trpc.router({
  accountSellProductSearchCreateMutation,
  addMutation,
  authSignInMutation,
  authSignOutMutation,
  authSignUpMutation,
  createPostMutation,
  typingMutation,
});
