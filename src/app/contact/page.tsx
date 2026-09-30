import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { CaseReviewForm } from "@/components/CaseReviewForm";
import { ContactCard } from "@/components/ContactCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      <Header />

      <main className="flex-1 w-full">
        {/* Title + Badge */}
        <section className="px-4 lg:px-11 pt-10 lg:pt-[140px] pb-6 lg:pb-8 max-w-[1396px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <div className="max-w-[700px]">
              <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4">Free case review</h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-body-text">
                Unsure if you have a case? Answer a few quick questions and we&apos;ll call you back. No win, no fee: you pay nothing unless we win your case.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4 lg:gap-2">
              <div className="flex items-center gap-2 bg-white lg:bg-transparent rounded-full lg:rounded-none py-2.5 px-4 lg:py-0 lg:px-0 shadow-sm lg:shadow-none border border-chip-border lg:border-none">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-[15px] font-bold text-ink">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-3.5 h-3.5" />
                  ))}
                </div>
                <span className="text-[14px] text-body-text ml-1">49 Google reviews</span>
              </div>
              <span className="text-[15px] lg:text-[14px] text-body-text lg:text-muted">We speak English and Armenian</span>
            </div>
          </div>
          <div className="h-px bg-divider w-full mt-8 lg:hidden" />
        </section>

        {/* Case Review */}
        <section className="px-4 lg:px-11 pb-10 lg:pb-24 max-w-[1440px] mx-auto" id="review">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="hidden lg:block lg:col-span-4">
              <ContactCard />
            </div>
            <div className="lg:col-span-8">
              <div className="max-w-[700px]">
                <CaseReviewForm variant="contact" compactAction />
              </div>
              <div className="lg:hidden mt-8">
                <ContactCard />
              </div>
            </div>
          </div>
        </section>

        {/* Office */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 bg-tint">
          <div className="max-w-[1396px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img src="/images/contact-office.png" alt="Our office in Victorville" className="w-full rounded-[16px] object-cover aspect-[3/2]" />
            </div>
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Our office in Victorville</h2>
              <p className="text-[17px] text-body-text leading-[1.5] mb-8">
                Prefer to talk in person? Call ahead and we&apos;ll set a time to meet. If it&apos;s hard for you to get here, a phone call works just as well.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-[15px] font-semibold text-ink block mb-1">Address</span>
                  <span className="text-[17px] text-body-text block mb-2">16888 Nisqualli Rd., Suite 200-13<br />Victorville, CA 92395</span>
                  <a href="https://maps.google.com/?q=16888+Nisqualli+Rd,+Victorville,+CA+92395" target="_blank" className="text-[16px] font-semibold text-rk-green hover:underline">Get directions</a>
                </div>
                <div>
                  <span className="text-[15px] font-semibold text-ink block mb-1">Hours</span>
                  <span className="text-[17px] text-body-text">[Confirm with John: office hours]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">What happens after you reach out</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text">Three steps, and the first one costs nothing.</p>
          </div>

          <div className="h-px bg-divider w-full mb-10 lg:mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-16">
            {[
              {
                num: "1",
                title: "Tell us what happened",
                desc: "Call us, or answer a few quick questions in the form above. It takes about a minute."
              },
              {
                num: "2",
                title: "We review it free",
                desc: "We call you back, hear the details and tell you plainly whether we think you have a case. There's no cost and nothing to sign."
              },
              {
                num: "3",
                title: "We handle the rest",
                desc: "If we take your case, we deal with the insurance company or manufacturer, the paperwork and the deadlines, so you can focus on getting better."
              }
            ].map((step, idx) => (
              <div key={step.num} className={idx !== 2 ? "pb-8 mb-8 border-b border-divider lg:pb-0 lg:mb-0 lg:border-none" : ""}>
                <div className="text-[48px] lg:text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">{step.num}</div>
                <h3 className="text-[20px] lg:text-[24px] font-semibold text-ink mb-2 lg:mb-3">{step.title}</h3>
                <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto lg:border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[30px] lg:text-[36px] leading-[1.15] font-semibold text-ink mb-4">Questions about the free review</h2>
              <p className="text-[17px] lg:text-[19px] text-body-text">
                Anything else on your mind? Call (760) 338-9712 and ask.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              <FaqAccordion
                question="Does the case review cost anything?"
                answer="No. The review is free, and asking doesn't commit you to anything. For personal injury you pay no attorney fees unless we win your case."
                defaultOpen={true}
              />
              <FaqAccordion
                question="What happens after I send the form?"
                answer="Someone from our team will call you back to discuss your situation. We'll tell you honestly whether we think you have a case."
              />
              <FaqAccordion
                question="What should I have ready?"
                answer="Just a few details about what happened — the date, who was involved, and any injuries. If you have documents like police reports or medical records, those help too, but they're not required."
              />
              <FaqAccordion
                question="Can I talk to someone in Armenian?"
                answer="Yes. Our staff speak English and Armenian. You and your family can ask questions in the language that feels easiest."
              />
              <FaqAccordion
                question="Is what I send kept private?"
                answer="Yes. Everything you share with us is kept confidential. Contacting us does not create an attorney-client relationship until we both agree to move forward."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
