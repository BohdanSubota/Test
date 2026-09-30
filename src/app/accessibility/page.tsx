import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Accessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      <Header />

      <main className="flex-1 w-full">
        <section className="px-4 lg:px-11 pt-10 lg:pt-[140px] pb-10 lg:pb-24 max-w-[900px] mx-auto">
          <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-6 lg:mb-10">
            Accessibility Statement
          </h1>
          
          <div className="text-body-text max-w-none space-y-6">
            <p className="text-[17px] leading-[1.6]">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <p className="text-[17px] leading-[1.6]">
              Romero Kucerkova Law Corp, APC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all of our users.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">Measures to Support Accessibility</h2>
            <p className="text-[17px] leading-[1.6]">
              Romero Kucerkova Law Corp, APC takes the following measures to ensure accessibility of our website:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[17px] leading-[1.6]">
              <li>Include accessibility as part of our mission statement.</li>
              <li>Include accessibility throughout our internal policies.</li>
              <li>Integrate accessibility into our procurement practices.</li>
              <li>Provide continual accessibility training for our staff.</li>
            </ul>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">Conformance Status</h2>
            <p className="text-[17px] leading-[1.6]">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. The Romero Kucerkova Law Corp, APC website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">Feedback</h2>
            <p className="text-[17px] leading-[1.6]">
              We welcome your feedback on the accessibility of the Romero Kucerkova Law Corp, APC website. Please let us know if you encounter accessibility barriers on our website:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[17px] leading-[1.6]">
              <li>Phone: (760) 338-9712</li>
              <li>E-mail: hello@rklegalcorp.com</li>
              <li>Visitor Address: 16888 Nisqualli Rd., Suite 200-13, Victorville, CA 92395</li>
            </ul>
            <p className="text-[17px] leading-[1.6]">
              We try to respond to feedback within 2 business days.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">Technical Specifications</h2>
            <p className="text-[17px] leading-[1.6]">
              Accessibility of the Romero Kucerkova Law Corp, APC website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[17px] leading-[1.6]">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p className="text-[17px] leading-[1.6]">
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>

            <h2 className="text-[24px] font-semibold text-ink mt-10 mb-4">Assessment Approach</h2>
            <p className="text-[17px] leading-[1.6]">
              Romero Kucerkova Law Corp, APC assessed the accessibility of our website by the following approaches:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[17px] leading-[1.6]">
              <li>Self-evaluation</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
