import { observable } from '@trpc/server/observable';
import { trpc } from '../trpc';
import { ee } from '../ee';
import { z } from 'zod';
import { AddMutationSchema } from '../mutations/addMutation.';

const addSubscriptionSchema = z.object({
  room: z.string().min(1),
});

export type AddSubscriptionSchema = z.infer<typeof addSubscriptionSchema>;

export const addSubscription = trpc.procedure
  .input(addSubscriptionSchema)
  .subscription(({ input }) =>
    observable<AddMutationSchema>(emit => {
      const onAdd = (data: AddMutationSchema) => emit.next(data);

      ee.on(`chat:${input.room}`, onAdd);

      return () => {
        ee.off(`chat:${input.room}`, onAdd);
      };
    })
  );
