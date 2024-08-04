import { z } from 'zod';
import { authSignUpSchema } from './authSignUpSchema';

export const authSignInSchema = authSignUpSchema
  .pick({
    email: true,
    password: true,
  })
  .extend({
    userAgent: z.string(),
    screenWidth: z.number(),
    screenHeight: z.number(),
  });

export type AuthSignInSchema = z.infer<typeof authSignInSchema>;

export const authSignInSchemaDefaultValues: AuthSignInSchema = {
  email: '',
  password: '',
  userAgent: '',
  screenWidth: 0,
  screenHeight: 0,
};
