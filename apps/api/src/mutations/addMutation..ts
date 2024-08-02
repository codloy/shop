import { z } from 'zod';
import { ee } from '../ee';
import { trpc } from '../trpc';

export const addMutationSchema = z.object({
  room: z.string().min(1),
  message: z.string(),
  name: z.string().min(1),
});

export type AddMutationSchema = z.infer<typeof addMutationSchema>;

export const addMutation = trpc.procedure
  .input(addMutationSchema)
  .mutation(async ({ input }) => {
    ee.emit(`chat:${input.room}`, input);

    return input;
  });
