import { appRouter } from '@/server/routers/_app';

export const serverTrpc = appRouter.createCaller({});

