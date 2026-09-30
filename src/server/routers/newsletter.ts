import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_stub');
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hello@rklegalcorp.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export const newsletterRouter = router({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email('Invalid email') }))
    .mutation(async ({ input }) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      console.log('Sending newsletter subscription email for:', input.email);
      
      try {
        if (!process.env.RESEND_API_KEY) {
          console.log('[Dev] Missing RESEND_API_KEY, skipping actual email send.');
          console.log('Newsletter email:', input.email);
          return { success: true };
        }

        // Ideally add to Resend Audience using resend.contacts.create
        // But for now, we just notify the law firm since they want manual handling
        await resend.emails.send({
          from: `RK Legal Website <${FROM_EMAIL}>`,
          to: CONTACT_EMAIL,
          subject: `New Newsletter Subscriber: ${input.email}`,
          html: `
            <h2>New Newsletter Subscriber</h2>
            <p><strong>Email:</strong> ${input.email}</p>
          `,
        });
      } catch (error) {
        console.error('Failed to send email:', error);
        throw new Error('Failed to send email');
      }

      return { success: true };
    }),
});
