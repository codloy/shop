import { observable } from '@trpc/server/observable';
import { ee } from '../ee';
import { z } from 'zod';
import { TypingMutationSchema } from '../mutations/typingMutation';
import { publicProcedure } from '../procedures';

const typingSubscriptionSchema = z.object({
  room: z.string().min(1),
  name: z.string().min(1),
  message: z.string(),
});

export type TypingSubscriptionSchema = z.infer<typeof typingSubscriptionSchema>;

export const typingSubscription = publicProcedure
  .input(typingSubscriptionSchema)
  .subscription(({ input }) =>
    observable<TypingMutationSchema>(emit => {
      const onTyping = (data: TypingMutationSchema) => emit.next(data);

      ee.on(`chat:${input.room}:typing`, onTyping);

      return () => {
        ee.off(`chat:${input.room}:typing`, onTyping);
      };
    })
  );
