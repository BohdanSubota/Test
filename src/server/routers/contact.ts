import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_stub');
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hello@rklegalcorp.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';

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
      // Fake network delay to show the "Sending..." spinner if API is quick
      await new Promise(resolve => setTimeout(resolve, 500));

      console.log('Sending contact email for:', input.name);
      
      try {
        if (!process.env.RESEND_API_KEY) {
          console.log('[Dev] Missing RESEND_API_KEY, skipping actual email send.');
          console.log('Data:', input);
          return { success: true };
        }

        await resend.emails.send({
          from: `RK Legal Website <${FROM_EMAIL}>`,
          to: CONTACT_EMAIL,
          subject: `New Case Review / Referral: ${input.name}`,
          html: `
            <h2>New form submission from RK Legal Website</h2>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Phone:</strong> ${input.phone}</p>
            ${input.happened ? `<p><strong>What happened:</strong> ${input.happened}</p>` : ''}
            ${input.when ? `<p><strong>When:</strong> ${input.when}</p>` : ''}
            ${input.note ? `<p><strong>Note:</strong> ${input.note}</p>` : ''}
          `,
        });
      } catch (error) {
        console.error('Failed to send email:', error);
        throw new Error('Failed to send email');
      }

      return { success: true };
    }),
});
