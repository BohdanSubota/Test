import { router } from '../trpc';
import { contactRouter } from './contact';
import { blogRouter } from './blog';
import { newsletterRouter } from './newsletter';

export const appRouter = router({
  contact: contactRouter,
  blog: blogRouter,
  newsletter: newsletterRouter,
});

export type AppRouter = typeof appRouter;
