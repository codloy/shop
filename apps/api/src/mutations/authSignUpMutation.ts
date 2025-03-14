import { TRPCError } from '@trpc/server';
import { authSignUpSchema } from 'schemas';
import { hash, genSalt } from 'bcryptjs';
import { TRPCException } from '../exception';
import { publicProcedure } from '../procedures';
import { isEmailExists, isUsernameExists } from '../utils';
import { accountTable } from 'db';

export const authSignUpMutation = publicProcedure
  .input(authSignUpSchema)
  .mutation(async ({ input }) => {
    try {
      const {
        username,
        email,
        password,
        confirmPassword,
        lastName,
        firstName,
        phoneNumber,
      } = input;

      if (password !== confirmPassword) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Passwords are not same',
        });
      }

      const emailExists = await isEmailExists(email);

      if (emailExists) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'This email already exists',
        });
      }

      const usernameExists = await isUsernameExists(username);

      if (usernameExists) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'This username already exists',
        });
      }

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const accounts = await db
        .insert(accountTable)
        .values({
          lastName,
          firstName,
          username: username.toLowerCase(),
          email: email.toLowerCase(),
          phoneNumber: phoneNumber.toLowerCase(),
          password: hashPassword,
          createdAt: new Date(),
          // status: 'Approved',
        })
        .returning();

      const account = accounts[0];

      return account;
    } catch (error) {
      throw TRPCException(error);
    }
  });
