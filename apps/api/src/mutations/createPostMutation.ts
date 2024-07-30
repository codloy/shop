import { z } from 'zod';
import { publicProcedure } from '../procedures/publicProcedure';

export const createPostMutation = publicProcedure
  .input(
    z.object({
      title: z.string(),
      text: z.string(),
    })
  )
  .mutation(({ input }) => {
    // imagine db call here
    return {
      id: `${Math.random()}`,
      ...input,
    };
  });
