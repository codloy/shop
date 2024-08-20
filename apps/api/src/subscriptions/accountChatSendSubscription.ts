import { ChatMessageTable } from 'db';
import { accountChatSendSubscriptionSchema } from 'schemas';
import { observable } from '@trpc/server/observable';
import { publicProcedure } from '../procedures';
import { ee } from '../ee';

export const accountChatSendSubscription = publicProcedure
  .input(accountChatSendSubscriptionSchema)
  .subscription(({ input }) => {
    return observable<ChatMessageTable>(emit => {
      const onAdd = (data: ChatMessageTable) => emit.next(data);

      ee.on(`chat:${input.chatId}`, onAdd);

      return () => {
        ee.off(`chat:${input.chatId}`, onAdd);
      };
    });
  });
