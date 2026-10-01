import { ReviewsCarousel } from "@/components/ReviewsCarousel";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/Icons";
import { CaseReviewForm } from "@/components/CaseReviewForm";
import { ContactCard } from "@/components/ContactCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { GoogleBadge } from "@/components/GoogleBadge";

export default function WorkersComp() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      {/* Hero Wrapper */}
      <div className="pt-0 lg:pt-4 xl:pt-6 px-0 lg:px-4 xl:px-11 max-w-[1440px] mx-auto w-full flex flex-col lg:block relative">
        <section className="relative w-full lg:rounded-[20px] overflow-hidden lg:min-h-[540px] flex flex-col lg:block bg-tint lg:bg-transparent">
          <Header />

          {/* Mobile Image */}
          <div className="px-4 mt-4 lg:hidden">
            <div
              className="w-full h-[240px] rounded-[16px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/wc-hero.jpg')" }}
            />
          </div>

          {/* Desktop Background Image */}
          <div
            className="hidden lg:block absolute inset-0 bg-cover bg-[position:70%_center]"
            style={{ backgroundImage: "url('/images/wc-hero.jpg')" }}
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white from-20% via-white/60 via-40% to-transparent pointer-events-none" />

          {/* Hero Content */}
          <div className="relative pt-6 lg:pt-[100px] xl:pt-[140px] px-4 lg:px-11 pb-10 lg:pb-16 h-full flex flex-col lg:justify-center bg-white lg:bg-transparent">
            <div className="max-w-[900px]">
              <h1 className="text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4 lg:mb-6">
                Workers&apos; comp help in Victorville <br className="hidden lg:block" />and the High Desert
              </h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-ink mb-6 lg:mb-8 lg:max-w-[600px]">
                Hurt on the job, or was your claim denied? Your review is free, and your fee is set by the state appeals board, not by us.
              </p>

              {/* Google Badge */}
              <GoogleBadge />
            </div>
          </div>
        </section>
      </div>

      <main className="flex-1 w-full relative z-10">
        {/* Case Review Section */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto" id="review">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="hidden lg:block lg:col-span-4">
              <ContactCard />
            </div>
            <div className="lg:col-span-8 bg-white lg:bg-transparent rounded-lg lg:rounded-none">
              <h2 className="text-[34px] lg:text-[44px] leading-[1.1] font-semibold text-ink mb-2 lg:mb-4">Free case review</h2>
              <p className="text-[19px] leading-[1.4] text-body-text mb-8 lg:mb-10 max-w-[400px]">
                Unsure if you have a case? Answer a few quick questions and we&apos;ll call you back.
              </p>
              <div className="max-w-[700px]">
                <CaseReviewForm variant="workers" compactAction />
              </div>
              <div className="lg:hidden mt-8">
                <ContactCard />
              </div>
            </div>
          </div>
        </section>

        {/* What workers' comp covers */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <img src="/images/workers-care-v2.png" alt="Recovery care" className="w-full rounded-[16px] object-cover aspect-[4/5]" />
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">What workers&apos; comp covers</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-8">
                If you got hurt during your job in California, these are the benefits the law is meant to pay for.
              </p>
              <div className="divide-y divide-divider">
            {[
              {
                title: "Medical care",
                desc: "Doctor visits, tests, surgery, physical therapy and prescriptions for your work injury, paid for by your employer's insurance."
              },
              {
                title: "Temporary disability pay",
                desc: "If your doctor says you can't work while you heal, you get payments to replace part of the wages you're missing."
              },
              {
                title: "Permanent disability",
                desc: "If the injury leaves lasting limits on what your body can do, you may be owed payments based on how it affects your work."
              },
              {
                title: "Job retraining",
                desc: "If you can't go back to your old job, you may qualify for a voucher to pay for retraining in new skills."
              }
            ].map(item => (
              <div key={item.title} className="py-4 first:pt-0">
                <h3 className="text-[18px] font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-[17px] text-body-text leading-[1.5]">{item.desc}</p>
              </div>
            ))}
              </div>
              <p className="text-[15px] text-body-text mt-6">This is general information. Every case is different, so call us about yours.</p>
            </div>
          </div>
        </section>

        {/* Claim denied or delayed? */}
        <section className="px-4 lg:px-11 py-10 lg:py-24">
          <div className="max-w-[1396px] mx-auto bg-tint rounded-[20px] p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Claim denied or delayed?</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-8 lg:mb-10">
              A denial letter is not always the final word. Claims get denied or stalled for reasons that can often be challenged, like these:
            </p>

            <div className="flex flex-col gap-4 mb-8 lg:mb-10">
              {[
                "The insurer says the injury didn't happen at work",
                "You reported it late, or a form was missing",
                "Treatment your doctor asked for was denied or delayed",
                "Your disability checks stopped or keep coming late"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-[17px] text-ink leading-[1.5]">{item}</span>
                </div>
              ))}
            </div>

              <p className="text-[17px] text-body-text mb-6">Got a denial letter? Call us or use the form and tell us what it says. We&apos;ll explain your options in plain words, free.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:7603389712" className="flex-1 sm:flex-none"><Button variant="primary" size="lg" className="w-full justify-center h-[52px]">
                  <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 hidden sm:block brightness-0 invert" />
                  Call (760) 338-9712
                </Button></a>
                <Link href="#review" className="flex-1 sm:flex-none">
                  <Button variant="secondary" size="lg" className="w-full justify-center h-[52px] bg-white border-chip-border text-ink">
                    Start your free review
                  </Button>
                </Link>
              </div>
            </div>
            <img src="/images/workers-denial-v2.png" alt="A denial letter on a desk" className="w-full rounded-[16px] object-cover aspect-square order-1 lg:order-2" />
          </div>
        </section>

        {/* Can I get fired for filing a claim? */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Can I get fired for filing a claim?</h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[17px] text-body-text leading-[1.5]">
                In California, it&apos;s generally against the law for an employer to fire you, demote you, or cut your hours because you filed a workers&apos; comp claim or said you were going to. This protection comes from California Labor Code section 132a.
              </p>
              <p className="text-[17px] text-body-text leading-[1.5]">
                That doesn&apos;t mean every job loss after an injury is illegal. The timing, the reason your employer gives and the records both sides keep all matter.
              </p>
              <p className="text-[17px] text-body-text leading-[1.5]">
                If you were let go, had your hours cut or felt pressured not to file after you got hurt, write down what happened and when, keep any texts or emails, and call us. We&apos;ll tell you what we see.
              </p>
              <p className="text-[15px] text-muted">General information only, not legal advice for your situation.</p>
            </div>
          </div>
        </section>

        {/* What it costs to talk to us */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="bg-tint rounded-[20px] p-6 lg:p-12">
          <div className="mb-10 lg:mb-12">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">What it costs to talk to us</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text">Nothing. And if we take your case, we don&apos;t set our own fee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div className="border-t border-rk-green pt-6">
              <h3 className="text-[20px] font-bold text-ink mb-3">The review is free</h3>
              <p className="text-[17px] text-body-text leading-[1.5]">
                Call or send the form. We&apos;ll look at what happened and tell you where you stand, at no charge.
              </p>
            </div>
            <div className="border-t border-rk-green pt-6">
              <h3 className="text-[20px] font-bold text-ink mb-3">The fee is set by the WCAB</h3>
              <p className="text-[17px] text-body-text leading-[1.5]">
                In workers&apos; comp, attorney fees are set and approved by the Workers&apos; Compensation Appeals Board, not by us.
              </p>
            </div>
            <div className="border-t border-rk-green pt-6">
              <h3 className="text-[20px] font-bold text-ink mb-3">No pressure to sign</h3>
              <p className="text-[17px] text-body-text leading-[1.5]">
                If we can help, we&apos;ll explain how it works. If we can&apos;t, we&apos;ll tell you that too.
              </p>
            </div>
          </div>
          <p className="text-[14px] text-muted mt-10">[Confirm with John how the fee is paid in workers&apos; comp cases. An example out-of-the-award, and the usual percentage range.]</p>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="max-w-[700px] mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">How it works</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text">Three steps, and the first one costs nothing.</p>
          </div>

          <div className="h-px bg-divider w-full mb-10 lg:mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                num: "1",
                title: "Tell us what happened",
                desc: "Call us, or answer a few quick questions in the form. Tell us how you got hurt and about any letters from the insurer."
              },
              {
                num: "2",
                title: "We review it free",
                desc: "We look at your claim, your medical care and any denial, then tell you honestly where you stand."
              },
              {
                num: "3",
                title: "We handle the rest",
                desc: "We deal with the insurer, the paperwork and any hearings, and keep you updated in English, Spanish, Czech, Russian, Slovak, or Armenian."
              }
            ].map(step => (
              <div key={step.num}>
                <div className="text-[32px] lg:text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">{step.num}</div>
                <h3 className="text-[20px] lg:text-[24px] font-semibold text-ink mb-2 lg:mb-3">{step.title}</h3>
                <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <ReviewsCarousel />


        {/* FAQ */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[30px] lg:text-[36px] leading-[1.15] font-semibold text-ink mb-4">Workers&apos; comp questions</h2>
              <p className="text-[17px] lg:text-[19px] text-body-text max-w-sm">
                Straight answers to what people ask us most. Don&apos;t see yours? Call and ask.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              <FaqAccordion
                question="How long do I have to report a work injury?"
                answer="Tell your employer as soon as you can, in writing if possible. In California you generally have 30 days to report it, and going past that can put your benefits at risk."
              />
              <FaqAccordion
                question="My claim was denied. Is it too late to do anything?"
                answer="Not necessarily. A denial can often be challenged, but there are deadlines, so call soon. Tell us what the denial letter says and we'll look at it with you for free."
              />
              <FaqAccordion
                question="Can I see my own doctor?"
                answer="Sometimes. It depends on whether you needed a doctor before you got hurt and on your employer's medical network. We can check this for you."
              />
              <FaqAccordion
                question="Will I get paid while I can't work?"
                answer="Often, yes. If your doctor says you can't work, or can only work limited hours, you may qualify for temporary disability payments, which are usually about two-thirds of your regular pay, up to a limit set by the state."
              />
              <FaqAccordion
                question="Can my employer fire me for filing a claim?"
                answer="Generally no. California Labor Code section 132a protects you from being punished for filing. Call us and we'll look at what happened."
              />
              <FaqAccordion
                question="How much does it cost to talk to you?"
                answer="Talking to us is free. If we take your case, the fee is set and approved by the Workers' Compensation Appeals Board, not by us."
              />
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 border-t border-divider">
          <div className="max-w-[1440px] mx-auto bg-tint rounded-[24px] p-8 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="text-[32px] lg:text-[44px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Hurt at work? Let&apos;s talk it through.</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Tell us what happened. The review is free, and in workers&apos; comp your fee is set by the appeals board, not by us.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:7603389712" className="flex-1 sm:flex-none"><Button variant="primary" size="lg" className="w-full justify-center h-[52px]">
                <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 hidden sm:block brightness-0 invert" />
                Call (760) 338-9712
              </Button></a>
              <Link href="/contact" className="flex-1 sm:flex-none"><Button variant="secondary" size="lg" className="justify-center h-[52px] bg-white border-chip-border text-ink">Start your free review</Button></Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
