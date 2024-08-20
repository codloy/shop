import { z } from 'zod';

export const accountChatCreateSchema = z.object({
  recipientId: z.string().min(1),
  message: z.string().min(1),
});

export type AccountChatCreateSchema = z.infer<typeof accountChatCreateSchema>;

export const accountChatCreateSchemaDefaultValues: AccountChatCreateSchema = {
  message: '',
  recipientId: '',
};
