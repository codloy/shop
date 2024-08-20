import { z } from 'zod';

export const accountChatSendSubscriptionSchema = z.object({
  chatId: z.string().min(1),
});

export type AccountChatSendSubscriptionSchema = z.infer<
  typeof accountChatSendSubscriptionSchema
>;
