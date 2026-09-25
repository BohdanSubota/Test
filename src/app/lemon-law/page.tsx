import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/Icons";
import { LemonLawForm } from "@/components/LemonLawForm";
import { ContactCard } from "@/components/ContactCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function LemonLaw() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      {/* Hero Wrapper */}
      <div className="pt-0 lg:pt-4 xl:pt-6 px-0 lg:px-4 xl:px-11 max-w-[1440px] mx-auto w-full flex flex-col lg:block relative">
        {/* Desktop Hero Card & Content */}
        <section className="relative w-full lg:rounded-[20px] overflow-hidden lg:min-h-[480px] flex flex-col lg:block bg-white">
          <Header />
          
          {/* Mobile Image */}
          <div className="px-4 mt-4 lg:hidden relative">
            <div 
              className="w-full h-[240px] rounded-[16px] bg-cover bg-right relative overflow-hidden" 
              style={{ backgroundImage: "url('/images/ll-hero.jpg')" }} 
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Desktop Background Image */}
          <div 
            className="hidden lg:block absolute inset-0 bg-cover bg-right"
            style={{ backgroundImage: "url('/images/ll-hero.jpg')" }}
          />
          {/* Desktop Gradient overlay */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />

          {/* Hero Content (Mobile + Desktop) */}
          <div className="relative pt-6 lg:pt-[100px] xl:pt-[140px] px-4 lg:px-11 pb-10 lg:pb-16 h-full flex flex-col lg:justify-center bg-white lg:bg-transparent">
            <div className="max-w-[700px]">
              <h1 className="text-[36px] lg:text-[60px] leading-[1.1] font-semibold tracking-tight text-ink mb-4 lg:mb-6">
                California lemon law help
              </h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-ink mb-6 lg:mb-8 lg:max-w-[600px]">
                If you win, the manufacturer pays our fees, so you pay nothing. Get a refund, a replacement, or cash for a car that keeps breaking.
              </p>

              {/* Google Badge */}
              <div className="flex items-center gap-2 bg-white rounded-full py-2.5 px-4 shadow-sm border border-chip-border w-max">
                <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
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
        </section>
      </div>

      <main className="flex-1 w-full relative z-10">
        {/* Case Review Section */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto">
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
                <LemonLawForm />
              </div>
            </div>
          </div>
        </section>

        {/* Is your car a lemon */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="order-2 lg:order-1">
              <div className="w-full h-[240px] lg:h-[480px] rounded-[16px] bg-cover bg-right mb-3" style={{ backgroundImage: "url('/images/ll-car.png')" }} />
              <p className="text-[12px] text-body-text">Photo: Shixart1985, Wikimedia Commons, CC BY 2.0</p>
            </div>
            <div className="order-1 lg:order-2 lg:pt-4">
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Is your car a lemon?</h2>
              <p className="text-[18px] lg:text-[19px] text-body-text mb-8 lg:mb-10">Your car may qualify if the problems started under the manufacturer&apos;s warranty and any of these sound familiar.</p>
              
              <div className="flex flex-col gap-6 lg:gap-8 mb-10 lg:mb-12">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0"><CheckIcon /></div>
                  <div>
                    <h3 className="text-[18px] lg:text-[19px] font-semibold text-ink mb-1">Still under the manufacturer&apos;s warranty</h3>
                    <p className="text-[16px] lg:text-[17px] text-body-text">The problems started while the factory warranty covered the car. New, used, and leased cars can all count.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0"><CheckIcon /></div>
                  <div>
                    <h3 className="text-[18px] lg:text-[19px] font-semibold text-ink mb-1">The same problem keeps coming back</h3>
                    <p className="text-[16px] lg:text-[17px] text-body-text">The dealer has tried to fix the same issue more than once, and it still isn&apos;t right.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0"><CheckIcon /></div>
                  <div>
                    <h3 className="text-[18px] lg:text-[19px] font-semibold text-ink mb-1">A safety defect</h3>
                    <p className="text-[16px] lg:text-[17px] text-body-text">Brakes, steering, airbags, stalling, or anything else that makes the car unsafe to drive.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0"><CheckIcon /></div>
                  <div>
                    <h3 className="text-[18px] lg:text-[19px] font-semibold text-ink mb-1">30 or more days in the shop</h3>
                    <p className="text-[16px] lg:text-[17px] text-body-text">Add up every repair visit. The days don&apos;t have to be in a row.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
                <p className="text-[17px] text-body-text">Not sure? Ask us, it&apos;s free.</p>
                <Button variant="secondary" size="lg" className="justify-center border-chip-border bg-white text-ink">Start your free review</Button>
              </div>
            </div>
          </div>
        </section>

        {/* What you can get */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">What you can get</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text max-w-2xl">California&apos;s lemon law gives you three possible outcomes. We&apos;ll tell you which one fits your car.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
            <div className="bg-tint rounded-[16px] p-8 lg:p-10">
              <h3 className="text-[22px] lg:text-[24px] font-semibold text-ink mb-2">A refund</h3>
              <p className="text-[13px] font-semibold text-rk-green mb-4 uppercase tracking-wider">Also called a buyback</p>
              <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">The manufacturer buys the car back. You get back what you paid, including your down payment and monthly payments, and your loan or lease is paid off. A small amount may be taken off for the miles you drove before the first repair.</p>
            </div>
            <div className="bg-tint rounded-[16px] p-8 lg:p-10">
              <h3 className="text-[22px] lg:text-[24px] font-semibold text-ink mb-2">A replacement</h3>
              <p className="text-[13px] font-semibold text-rk-green mb-4 uppercase tracking-wider">A new car of the same kind</p>
              <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">The manufacturer gives you a new vehicle that is substantially the same as yours, and covers related costs such as sales tax and registration fees.</p>
            </div>
            <div className="bg-tint rounded-[16px] p-8 lg:p-10">
              <h3 className="text-[22px] lg:text-[24px] font-semibold text-ink mb-2">Cash, and keep the car</h3>
              <p className="text-[13px] font-semibold text-rk-green mb-4 uppercase tracking-wider">Often called cash and keep</p>
              <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">If you would rather keep driving it, the manufacturer may pay you money for the trouble and the value the car has lost. The car stays yours.</p>
            </div>
          </div>
          <p className="text-[15px] lg:text-[16px] text-body-text">Every case is different, and no result is guaranteed. We&apos;ll explain your options before you decide anything.</p>
        </section>

        {/* Why it costs you nothing */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <div className="bg-tint rounded-[24px] p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4 lg:mb-6">Why it costs you nothing</h2>
                <p className="text-[18px] lg:text-[24px] font-medium leading-[1.4] text-ink mb-8 lg:mb-12 max-w-[400px]">If you win, the manufacturer pays our fees, so you pay nothing.</p>
                <Button variant="secondary" size="lg" className="w-full lg:w-auto justify-center hidden lg:flex bg-white text-ink border-chip-border">Start your free review</Button>
              </div>
              <div className="lg:pt-2">
                <p className="text-[17px] lg:text-[19px] leading-[1.5] text-body-text mb-6">California&apos;s lemon law, the Song-Beverly Consumer Warranty Act, was written to protect buyers. If you win, the law makes the manufacturer pay your attorney fees and costs. That rule is in Civil Code section 1794(d).</p>
                <p className="text-[17px] lg:text-[19px] leading-[1.5] text-body-text mb-8">So you can stand up to a car company without paying a lawyer out of your own pocket.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3"><CheckIcon /> <span className="text-[17px] lg:text-[19px] font-medium text-ink">Nothing to pay upfront</span></div>
                  <div className="flex items-center gap-3"><CheckIcon /> <span className="text-[17px] lg:text-[19px] font-medium text-ink">No hourly bills</span></div>
                  <div className="flex items-center gap-3"><CheckIcon /> <span className="text-[17px] lg:text-[19px] font-medium text-ink">No fee unless we win</span></div>
                </div>
                <Button variant="secondary" size="lg" className="w-full justify-center mt-8 lg:hidden bg-white text-ink border-chip-border">Start your free review</Button>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">How it works</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text max-w-2xl">Three steps, and the first one costs nothing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <div className="text-[32px] lg:text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">1</div>
              <h3 className="text-[20px] lg:text-[24px] font-semibold text-ink mb-2 lg:mb-3">Tell us about your car</h3>
              <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">Call, or answer a few quick questions in the form. Have your repair orders handy if you can.</p>
            </div>
            <div>
              <div className="text-[32px] lg:text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">2</div>
              <h3 className="text-[20px] lg:text-[24px] font-semibold text-ink mb-2 lg:mb-3">We review it free</h3>
              <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">We look at your repair history and warranty, then tell you plainly whether you have a case. No cost, no pressure.</p>
            </div>
            <div>
              <div className="text-[32px] lg:text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">3</div>
              <h3 className="text-[20px] lg:text-[24px] font-semibold text-ink mb-2 lg:mb-3">We handle the manufacturer</h3>
              <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">We deal with the manufacturer and its lawyers for you. If you win, the manufacturer pays our fees.</p>
            </div>
          </div>
        </section>

        {/* Any make can qualify */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
              <h2 className="text-[24px] lg:text-[28px] leading-[1.2] font-semibold text-ink">Any make or model can qualify</h2>
              <p className="text-[16px] lg:text-[17px] text-body-text lg:text-right">What matters is the warranty, not the brand. Common makes include:</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 lg:gap-x-8">
              {['Tesla', 'Ford', 'GM', 'Toyota', 'Mercedes-Benz', 'Jeep', 'Hyundai', 'Kia', 'Nissan', 'BMW'].map(brand => (
                <span key={brand} className="text-[18px] lg:text-[20px] font-semibold text-ink flex items-center">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 lg:mb-16 gap-6">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-2">What clients say</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Real reviews from people we helped after a crash.</p>
            </div>
            {/* Google Badge */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm border border-divider">
                <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
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
              <span className="text-[14px] text-body-text underline cursor-pointer hover:text-ink transition-colors ml-1">49 Google reviews</span>
            </div>
          </div>
          
          {/* Custom Desktop + Mobile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Giovanni J.",
                text: "Many other lawyers rejected my case, but they didn't. On the contrary, they accepted it and fought strategically for me. They resolved my car accident case without me having to lift a finger and secured me a very good compensation.",
                translated: true
              },
              {
                name: "Chris S.",
                text: "They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.",
                translated: false
              },
              {
                name: "Raul H.",
                text: "Their team was responsive ... I ended up with great treatment and a more than fair settlement. Thank you.",
                translated: false
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
                <div className="mt-auto flex flex-col gap-1">
                  <span className="text-[15px] font-semibold text-ink">{review.name}</span>
                  <div className="text-[13px] text-muted flex gap-2 items-center flex-wrap">
                    <span>Google review</span>
                    {review.translated && (
                      <>
                        <span className="w-1 h-1 bg-divider rounded-full"></span>
                        <span>Translated by Google</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="hidden lg:block lg:col-span-4">
              <h2 className="text-[30px] lg:text-[36px] leading-[1.15] font-semibold text-ink mb-4">Lemon law questions</h2>
              <p className="text-[17px] lg:text-[19px] text-body-text max-w-sm">
                Straight answers to what people ask us most. Have a different question? Call us, it&apos;s free.
              </p>
            </div>
            
            <div className="lg:col-span-8 flex flex-col gap-4">
              <FaqAccordion 
                question="How much does a lemon law case cost me?" 
                answer="Nothing out of your pocket. Under California Civil Code section 1794(d), if you win, the manufacturer pays your attorney fees and costs." 
              />
              <FaqAccordion 
                question="Does my used car qualify?" 
                answer="Yes, as long as it was purchased with a warranty, even if it is a pre-owned vehicle." 
              />
              <FaqAccordion 
                question="My car is leased. Can I still make a claim?" 
                answer="Yes, leased cars are fully protected under California's Lemon Law just like purchased cars." 
              />
              <FaqAccordion 
                question="Should I keep making my car payments?" 
                answer="Yes, you should continue making your payments to avoid default. If you win, you may get those payments refunded." 
              />
              <FaqAccordion 
                question="What paperwork should I have?" 
                answer="Keep your purchase or lease agreement, and all repair orders and invoices from the dealership." 
              />
              <FaqAccordion 
                question="Is there a deadline to file?" 
                answer="Yes, California has a 4-year statute of limitations for Lemon Law claims, starting from when the warranty breach occurs." 
              />
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 border-t border-divider">
          <div className="max-w-[1440px] mx-auto bg-tint rounded-[24px] p-8 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="text-[32px] lg:text-[44px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Tired of taking your car back to the dealer?</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Tell us what&apos;s going on. The review is free, and if you win, the manufacturer pays our fees.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button variant="primary" size="lg" className="justify-center h-[52px]">
                <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 hidden sm:block" />
                Call (760) 338-9712
              </Button>
              <Button variant="secondary" size="lg" className="justify-center h-[52px] bg-white border-chip-border text-ink">Start your free review</Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
