import { z } from 'zod';
import { ee } from '../ee';
import { trpc } from '../trpc';

export const typingMutationSchema = z.object({
  room: z.string().min(1),
  message: z.string(),
  name: z.string().min(1),
});

export type TypingMutationSchema = z.infer<typeof typingMutationSchema>;

export const typingMutation = trpc.procedure
  .input(typingMutationSchema)
  .mutation(async ({ input }) => {
    ee.emit(`chat:${input.room}:typing`, input);

    return input;
  });
