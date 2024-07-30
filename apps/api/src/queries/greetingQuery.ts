import { z } from 'zod';
import { publicProcedure } from '../procedures/publicProcedure';
import { router } from '../router';

export const greetingQuery = router({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => `Hello, ${input.name}!`),
});
