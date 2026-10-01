import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CaseReviewForm } from "@/components/CaseReviewForm";
import { ContactCard } from "@/components/ContactCard";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { GoogleIcon } from "@/components/GoogleIcon";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      {/* Hero */}
      <div className="pt-0 lg:pt-4 xl:pt-6 px-0 lg:px-4 xl:px-11 max-w-[1440px] mx-auto w-full">
        <section className="relative w-full lg:rounded-[20px] overflow-hidden flex flex-col bg-white lg:min-h-[350px]">
          <Header />

          <div className="hidden lg:block absolute inset-0 bg-cover bg-[position:center_55%]" style={{ backgroundImage: "url('/images/about-hero.jpg')" }} />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/5" />
          <div className="px-4 mt-4 lg:hidden">
            <div className="h-[200px] rounded-[16px] bg-cover bg-center" style={{ backgroundImage: "url('/images/about-hero.jpg')" }} />
          </div>

          <div className="relative px-4 lg:px-11 pt-7 lg:pt-[160px] pb-10 lg:pb-16">
            <div className="max-w-[900px]">
              <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4 lg:mb-6">
                About Romero Kucerkova Law, your local firm in Victorville
              </h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-body-text mb-6 lg:mb-8 max-w-[700px]">
                Formerly Guardian Injury Law. Lemon law, personal injury law and workers&apos; comp help from the same local team. No win, no fee: you pay nothing unless we win.
              </p>

              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mb-8">
                <div className="hidden lg:flex flex-col sm:flex-row gap-4">
                  <a href="tel:7603389712" className="flex-1 sm:flex-none"><Button variant="primary" size="lg" className="w-full justify-center h-[52px]">
                    <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 brightness-0 invert" />
                    Call (760) 338-9712
                  </Button></a>
                  <Link href="/contact" className="flex-1 sm:flex-none"><Button variant="secondary" size="lg" className="justify-center h-[52px]">Start your free review</Button></Link>
                </div>

                {/* Google Badge */}
                <div className="flex items-center gap-2 bg-white rounded-full h-[52px] px-5 shadow-sm border border-chip-border w-max">
                  <div className="flex items-center justify-center w-5 h-5">
                    <GoogleIcon />
                  </div>
                  <span className="text-[17px] font-bold text-ink ml-1">5.0</span>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-4 h-4" />
                    ))}
                  </div>
                  <span className="text-[16px] text-body-text ml-1">49 Google reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="flex-1 w-full relative z-10">
        {/* Our story */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Same team. Same office. A new name.</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Here&apos;s what changed, and what didn&apos;t.</p>
            </div>
            <div>
              <p className="text-[17px] text-body-text leading-[1.5] mb-6">
                For years, people in the High Desert knew us as Guardian Injury Law. Today the firm carries the name of its attorney, Ludmila Kucerkova Romero. You may also see us as RK Legal Corp, the name on our website and email.
              </p>
              <p className="text-[17px] text-body-text leading-[1.5] mb-8">
                Nothing else about how we work has changed. The same local team answers the phone, from the same office in Victorville. If you already work with us, you don&apos;t need to do anything. Call the same number with any question.
              </p>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-t border-divider">
                  <span className="text-[15px] text-muted">Formerly</span>
                  <span className="text-[17px] text-ink">Guardian Injury Law</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-t border-divider">
                  <span className="text-[15px] text-muted">Legal name</span>
                  <span className="text-[17px] text-ink">Romero Kucerkova Law Corp, APC</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-t border-b border-divider">
                  <span className="text-[15px] text-muted">Also known as</span>
                  <span className="text-[17px] text-ink">RK Legal Corp</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Ludmila */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start bg-tint rounded-[20px] p-6 lg:p-12">
            <div>
              <p className="text-[15px] text-muted mb-2">Meet your attorney</p>
              <h2 className="text-[36px] lg:text-[48px] leading-[1.1] font-semibold text-ink mb-3">Ludmila Kucerkova Romero</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text mb-6">Attorney, licensed in California</p>
              
              <div className="w-full max-w-[340px] h-px bg-divider mb-6" />

              <p className="text-[15px] text-muted mb-2">State Bar of California no. [Confirm with John: bar number]</p>
              <p className="text-[15px] text-muted">Practice areas: lemon law, personal injury law, workers&apos; comp</p>
            </div>
            <div className="lg:pt-12">
              <p className="text-[17px] text-body-text leading-[1.5] mb-6">
                Ludmila Romero Kucerkova is the attorney at Romero Kucerkova Law. She represents people across the High Desert who have been hurt in a crash or at work, or who are stuck with a car that keeps breaking down.
              </p>
              <p className="text-[17px] text-body-text leading-[1.5] mb-6">
                Because the firm has one attorney, the lawyer who reviews your case is the lawyer who works on it. You will know who is handling your case, and you can reach her with any question.
              </p>
              <p className="text-[17px] text-body-text leading-[1.5]">
                Her background is in plaintiff-side consumer warranty litigation [Confirm with John: including cases against GM, Tesla, Mercedes-Benz, Jaguar Land Rover, Toyota and Ford].
              </p>
            </div>
          </div>
        </section>

        {/* Quote band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24">
          <div className="max-w-[1396px] mx-auto bg-tint rounded-[20px] p-8 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-[24px] lg:text-[32px] leading-[1.3] font-semibold text-ink mb-4">
                &ldquo;Everyone on their team is knowledgeable and supportive through the entire process.&rdquo;
              </p>
              <p className="text-[15px] text-muted">Aaron N., Google review</p>
            </div>
            <div className="shrink-0">
              <Link href="/contact" className="flex-1 sm:flex-none"><Button variant="secondary" size="lg" className="justify-center h-[52px] bg-white border-chip-border text-ink">Start your free review</Button></Link>
            </div>
          </div>
        </section>

        {/* How we work with you */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">How we work with you</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text">Five things you can count on, from your first call to the end of your case.</p>
          </div>

          <div className="flex flex-col">
            {[
              {
                title: "Your first review is free",
                desc: "Tell us what happened and we look at it at no cost. You don't have to sign anything to ask a question."
              },
              {
                title: "No win, no fee",
                desc: "In injury cases you pay no attorney fees unless we win. In lemon law cases, the manufacturer generally pays the attorney fees. In workers' comp, fees are set by the appeals board, not by us."
              },
              {
                title: "We call you back",
                desc: "Send the form or leave a message, and someone from our team calls you back to talk it through. No automated runaround."
              },
              {
                title: "English, Spanish, Czech, Russian, Slovak, and Armenian",
                desc: "Our staff speak English, Spanish, Czech, Russian, Slovak, and Armenian, so you and your family can ask questions in the language that feels easiest."
              },
              {
                title: "One team, start to finish",
                desc: "The same people take your first call, gather your records and stay with your case to the end. You always know who to call."
              }
            ].map((item, i) => (
              <div key={item.title} className={`py-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-16 ${i !== 4 ? 'border-b border-divider' : ''}`}>
                <h3 className="text-[18px] font-bold text-ink">{item.title}</h3>
                <p className="text-[17px] text-body-text leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our office */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 bg-tint">
          <div className="max-w-[1396px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img src="/images/contact-office.png" alt="Our office in Victorville" className="w-full rounded-[16px] object-cover aspect-[3/2]" />
            </div>
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Visit our Victorville or Pasadena office</h2>
              <p className="text-[17px] text-body-text leading-[1.5] mb-8">
                We&apos;re a local firm, and our office is here in the High Desert. Call before you come in so the right person is there to meet you.
              </p>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[100px_1fr] gap-4 py-3 border-t border-divider">
                  <span className="text-[15px] font-semibold text-ink">Address</span>
                  <span className="text-[17px] text-body-text">Victorville, CA & Pasadena, CA</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4 py-3 border-t border-divider">
                  <span className="text-[15px] font-semibold text-ink">Phone</span>
                  <span className="text-[17px] text-body-text">(760) 338-9712</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4 py-3 border-t border-divider">
                  <span className="text-[15px] font-semibold text-ink">Hours</span>
                  <span className="text-[17px] text-body-text">[Confirm with John: office hours]</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4 py-3 border-t border-b border-divider">
                  <span className="text-[15px] font-semibold text-ink">We speak</span>
                  <span className="text-[17px] text-body-text">English, Spanish, Czech, Russian, Slovak, and Armenian</span>
                </div>
              </div>
              <a href="https://maps.google.com/?q=16888+Nisqualli+Rd,+Victorville,+CA+92395" target="_blank" className="text-[16px] font-semibold text-rk-green hover:underline mt-6 inline-block">Get directions in Google Maps</a>
            </div>
          </div>
        </section>

        {/* What our clients say */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 lg:mb-16 gap-6">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-2">What our clients say</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Rated 5.0 across 49 Google reviews. A few of them, in their own words.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm border border-divider">
                <GoogleIcon />
              </div>
              <span className="text-[15px] font-bold text-ink">5.0</span>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-3.5 h-3.5" />
                ))}
              </div>
              <span className="text-[14px] text-body-text ml-1">49 Google reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Katie S.",
                text: "Everything was clearly explained and they kept me informed throughout the entire process, which gave me peace of mind and confidence proceeding forward."
              },
              {
                name: "Arpen A.",
                text: "My parents who speak little to no English were extremely thankful and happy to work with Lucy who's fluent in Armenian."
              },
              {
                name: "Chris S.",
                text: "They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with."
              }
            ].map(review => (
              <div key={review.name} className="bg-tint rounded-lg p-6 lg:p-8 flex flex-col w-full border border-divider/50 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-[18px] h-[18px]" />
                  ))}
                </div>
                <p className="text-[16px] text-body-text leading-[1.6] mb-6 flex-1">
                  &quot;{review.text}&quot;
                </p>
                <div className="mt-auto">
                  <span className="text-[15px] font-semibold text-ink">{review.name}</span>
                  <div className="text-[13px] text-muted mt-1">Google review</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case review */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
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
                <CaseReviewForm />
              </div>
              <div className="lg:hidden mt-8">
                <ContactCard />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
