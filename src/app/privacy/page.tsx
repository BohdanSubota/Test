import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      <Header />

      <main className="flex-1 w-full">
        <section className="px-4 lg:px-11 pt-10 lg:pt-[140px] pb-10 lg:pb-24 max-w-[900px] mx-auto">
          <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-6 lg:mb-10">
            Privacy Policy
          </h1>
          
          <div className="text-body-text max-w-none space-y-6">
            <p className="text-[17px] leading-[1.6]">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <p className="text-[17px] leading-[1.6]">
              Romero Kucerkova Law Corp, APC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">1. The data we collect about you</h2>
            <p className="text-[17px] leading-[1.6]">
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[17px] leading-[1.6]">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">2. How is your personal data collected?</h2>
            <p className="text-[17px] leading-[1.6]">
              We use different methods to collect data from and about you including through:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[17px] leading-[1.6]">
              <li><strong>Direct interactions.</strong> You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email or otherwise.</li>
              <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and other similar technologies.</li>
            </ul>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">3. How we use your personal data</h2>
            <p className="text-[17px] leading-[1.6]">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[17px] leading-[1.6]">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">4. Data security</h2>
            <p className="text-[17px] leading-[1.6]">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">5. Contact details</h2>
            <p className="text-[17px] leading-[1.6]">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:<br /><br />
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
