import { z } from 'zod';
import { publicProcedure } from '../procedures/publicProcedure';

export const greetingQuery = publicProcedure
  .input(
    z.object({
      name: z.string(),
    })
  )
  .query(({ input }) => `Hello, ${input.name}!`);
