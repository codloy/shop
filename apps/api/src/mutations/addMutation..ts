import { z } from 'zod';
import { ee } from '../ee';
import { trpc } from '../trpc';

export const addMutationSchema = z.object({
  chatId: z.string().min(1),
  message: z.string(),
});

export type AddMutationSchema = z.infer<typeof addMutationSchema>;

export const addMutation = trpc.procedure
  .input(addMutationSchema)
  .mutation(async ({ input }) => {
    ee.emit(`chat:${input.chatId}`, input);

    return input;
  });
