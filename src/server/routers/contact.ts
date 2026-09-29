import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const contactRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, 'Name is required'),
        phone: z.string().min(1, 'Phone is required'),
        happened: z.string().optional(),
        when: z.string().optional(),
        note: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      // Fake network delay to show the "Sending..." spinner
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Stubbing Resend for now
      console.log('--- EMAIL STUB ---');
      console.log('Sending email from:', input.name);
      console.log('Subject: We received your request');
      console.log('Body data:', input);
      console.log('------------------');

      // In the future:
      // await resend.emails.send({ ... })

      return { success: true };
    }),
});
