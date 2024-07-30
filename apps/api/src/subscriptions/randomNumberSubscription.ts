import { observable } from '@trpc/server/observable';
import { publicProcedure } from '../procedures/publicProcedure';

export const randomNumberSubscription = publicProcedure.subscription(() => {
  return observable<{ randomNumber: number }>(emit => {
    const timer = setInterval(() => {
      // emits a number every second
      emit.next({ randomNumber: Math.random() });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
});
