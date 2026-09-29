import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const newsletterRouter = router({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email('Invalid email address'),
      })
    )
    .mutation(async ({ input }) => {
      // Stubbing for now
      console.log('--- NEWSLETTER STUB ---');
      console.log('New subscriber:', input.email);
      console.log('-----------------------');

      // In the future:
      // await resend.contacts.create({ email: input.email, audienceId: '...' })
      // or save to database

      return { success: true };
    }),
});
