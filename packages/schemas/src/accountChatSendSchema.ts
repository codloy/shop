import { z } from 'zod';

export const accountChatSendSchema = z.object({
  chatId: z.string().min(1),
  message: z.string().min(1),
});

export type AccountChatSendSchema = z.infer<typeof accountChatSendSchema>;

export const accountChatSendSchemaDefaultValues: AccountChatSendSchema = {
  chatId: '',
  message: '',
};
