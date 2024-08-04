import { TRPCError } from '@trpc/server';
import { AccountStatusEnum } from 'db';

export function checkAccountStatus(status: AccountStatusEnum) {
  if (status === 'Blocked') {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Your account is blocked',
    });
  }

  if (status === 'Declined') {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Your account is declined',
    });
  }

  if (status === 'Deleted') {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'Check email or password',
    });
  }

  if (status === 'Pending approval') {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'We checking your account. Please try later',
    });
  }
}
