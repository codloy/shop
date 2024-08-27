import { trpc } from '../trpc';
import { accountChatCreateMutation } from './accountChatCreateMutation';
import { accountChatSendMutation } from './accountChatSendMutation';
import { accountSellProductCommentCreateMutation } from './accountSellProductCommentCreateMutation';
import { accountSellProductSaveDeleteMutation } from './accountSellProductSaveDeleteMutation';
import { accountSellProductSaveMutation } from './accountSellProductSaveMutation';
import { accountSellProductSearchCreateMutation } from './accountSellProductSearchCreateMutation';
import { addMutation } from './addMutation.';
import { authSignInMutation } from './authSignInMutation';
import { authSignOutMutation } from './authSignOutMutation';
import { authSignUpMutation } from './authSignUpMutation';
import { createPostMutation } from './createPostMutation';
import { typingMutation } from './typingMutation';

export const mutationRouters = trpc.router({
  accountChatCreateMutation,
  accountChatSendMutation,
  accountSellProductCommentCreateMutation,
  accountSellProductSaveDeleteMutation,
  accountSellProductSaveMutation,
  accountSellProductSearchCreateMutation,
  addMutation,
  authSignInMutation,
  authSignOutMutation,
  authSignUpMutation,
  createPostMutation,
  typingMutation,
});
