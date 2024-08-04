import { z } from 'zod';

export const authSignUpSchema = z.object({
  lastName: z.string().min(1).max(255),
  firstName: z.string().min(1).max(255),
  username: z.string().min(1).max(36),
  email: z.string().email().min(1),
  phoneNumber: z.string().min(1),
  password: z.string().min(8),
  confirmPassword: z.string().min(1),
});

export type AuthSignUpSchema = z.infer<typeof authSignUpSchema>;

export const authSignUpSchemaDefaultValues: AuthSignUpSchema = {
  lastName: '',
  firstName: '',
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};
