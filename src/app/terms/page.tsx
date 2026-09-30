import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      <Header />

      <main className="flex-1 w-full">
        <section className="px-4 lg:px-11 pt-10 lg:pt-[140px] pb-10 lg:pb-24 max-w-[900px] mx-auto">
          <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-6 lg:mb-10">
            Terms of Use
          </h1>
          
          <div className="text-body-text max-w-none space-y-6">
            <p className="text-[17px] leading-[1.6]">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <p className="text-[17px] leading-[1.6]">
              Welcome to the Romero Kucerkova Law Corp, APC website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">1. No Legal Advice or Attorney-Client Relationship</h2>
            <p className="text-[17px] leading-[1.6]">
              The information provided on this website is for general informational purposes only and does not constitute legal advice. The content of this website is not guaranteed to be correct, complete, or up-to-date. Accessing this website or communicating with our firm through this website does not create an attorney-client relationship between you and Romero Kucerkova Law Corp, APC. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">2. Use of Content</h2>
            <p className="text-[17px] leading-[1.6]">
              All content on this website, including text, graphics, logos, images, and software, is the property of Romero Kucerkova Law Corp, APC or its content suppliers and is protected by copyright and other intellectual property laws. You may view, download, and print materials from this website for your personal, non-commercial use only. Any other use, reproduction, or distribution of the content without our prior written consent is strictly prohibited.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">3. Disclaimers</h2>
            <p className="text-[17px] leading-[1.6]">
              The materials on this website are provided &quot;as is&quot; and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, Romero Kucerkova Law Corp, APC disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the functions contained in the materials will be uninterrupted or error-free, that defects will be corrected, or that this website or the server that makes it available are free of viruses or other harmful components.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">4. Limitation of Liability</h2>
            <p className="text-[17px] leading-[1.6]">
              Under no circumstances, including, but not limited to, negligence, shall Romero Kucerkova Law Corp, APC be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this website, even if we or our authorized representative has been advised of the possibility of such damages.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">5. Governing Law</h2>
            <p className="text-[17px] leading-[1.6]">
              These terms and conditions shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law. You agree that any action at law or in equity arising out of or relating to these terms shall be filed only in the state or federal courts located in California, and you hereby consent and submit to the personal jurisdiction of such courts for the purposes of litigating any such action.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">6. Changes to Terms</h2>
            <p className="text-[17px] leading-[1.6]">
              We reserve the right, at our discretion, to change, modify, add, or remove portions of these terms at any time. Please check these terms periodically for changes. Your continued use of this website following the posting of changes to these terms will mean you accept those changes.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">7. Contact Information</h2>
            <p className="text-[17px] leading-[1.6]">
              If you have any questions about these Terms of Use, please contact us at:<br /><br />
              Romero Kucerkova Law Corp, APC<br />
              16888 Nisqualli Rd., Suite 200-13<br />
              Victorville, CA 92395<br />
              (760) 338-9712<br />
              hello@rklegalcorp.com
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
