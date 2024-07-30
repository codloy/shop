import { createTRPCReact } from '@trpc/react-query';
import { Routers } from '../../../../api/src/routers';

export const trpc = createTRPCReact<Routers>({});
