import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseReviewForm } from "@/components/CaseReviewForm";
import { ContactCard } from "@/components/ContactCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function PersonalInjury() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      {/* Hero Wrapper */}
      <div className="pt-0 lg:pt-4 xl:pt-6 px-0 lg:px-4 xl:px-11 max-w-[1440px] mx-auto w-full flex flex-col lg:block relative">
        {/* Desktop Hero Card & Content */}
        <section className="relative w-full lg:rounded-[20px] overflow-hidden lg:min-h-[540px] flex flex-col lg:block bg-tint lg:bg-transparent">
          <Header />
          
          {/* Mobile Image */}
          <div className="px-4 mt-4 lg:hidden">
            <div 
              className="w-full h-[320px] rounded-[16px] bg-cover bg-[position:80%_center]" 
              style={{ backgroundImage: "url('/images/pi-hero.png')" }} 
            />
          </div>
          
          {/* Desktop Background Image */}
          <div 
            className="hidden lg:block absolute inset-0 bg-cover bg-[position:85%_center]"
            style={{ backgroundImage: "url('/images/pi-hero.png')" }}
          />
          {/* Desktop Gradient overlay */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

          {/* Hero Content (Mobile + Desktop) */}
          <div className="relative pt-6 lg:pt-[100px] xl:pt-[140px] px-4 lg:px-11 pb-10 lg:pb-16 h-full flex flex-col lg:justify-center">
            <div className="max-w-[720px]">
              <h1 className="text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4 lg:mb-6">
                Personal injury lawyer in Victorville and Southern California
              </h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-ink mb-6 lg:mb-8 lg:max-w-[600px]">
                Hurt in a crash? We can help. You pay nothing unless we win.
              </p>

              {/* Google Badge */}
              <div className="flex justify-center items-center gap-2 bg-white rounded-full py-2.5 px-4 shadow-sm lg:shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-chip-border lg:border-none w-full lg:w-max lg:inline-flex lg:justify-start">
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
                <CaseReviewForm />
              </div>
            </div>
          </div>
        </section>

        {/* Cases we handle */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="max-w-[800px] mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Cases we handle</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5]">
              If you were hurt because someone else was careless, we can help you find out what your claim is worth. These are the cases we see most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                title: "Car accidents",
                desc: "Rear-end, T-bone and head-on crashes, including hit and run and uninsured drivers."
              },
              {
                title: "Bicycle accidents",
                desc: "Hit by a turning driver, an opening car door, or a driver who never saw you."
              },
              {
                title: "Motorcycle accidents",
                desc: "Riders often get blamed unfairly. We push back when the other driver caused it."
              },
              {
                title: "Dog bites",
                desc: "Bite and attacks from a neighbor's dog or a dog in a public place."
              },
              {
                title: "Truck accidents",
                desc: "Crashes with big rigs and delivery vans, where a company's insurer gets involved fast."
              },
              {
                title: "Slip and fall",
                desc: "Injuries from wet floors, broken steps, or poor lighting at a store or property."
              },
              {
                title: "Uber and Lyft accidents",
                desc: "Passenger, driver, or hit by one. Rideshare insurance has its own rules."
              },
              {
                title: "Workplace injuries",
                desc: "Hurt on the job. We look at workers' comp and any claim against someone else at fault."
              },
              {
                title: "Pedestrian accidents",
                desc: "Hit in a crosswalk, a parking lot, or while walking along the road."
              },
              {
                title: "Wrongful death",
                desc: "When your family loses someone because of another person's carelessness."
              }
            ].map(item => (
              <div key={item.title}>
                <h3 className="text-[18px] font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-[17px] text-body-text leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What insurance companies do after a crash */}
        <section className="px-4 lg:px-11 py-10 lg:py-24">
          <div className="max-w-[1396px] mx-auto bg-tint rounded-[20px] p-6 lg:p-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">What insurance companies do after a crash</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-10 lg:mb-16 max-w-[800px]">
              The adjuster who calls you works for the insurance company. Their job is to close your claim for as little as possible. Here is what to expect, and what we do about it.
            </p>
            
            <div className="flex flex-col">
              {/* Header */}
              <div className="hidden lg:grid grid-cols-12 gap-6 pb-4 border-b border-divider">
                <div className="col-span-3"></div>
                <div className="col-span-4 text-[15px] font-semibold text-rk-green uppercase tracking-wider">What they do</div>
                <div className="col-span-5 text-[15px] font-semibold text-rk-green uppercase tracking-wider">What we do instead</div>
              </div>

              {/* Rows */}
              {[
                {
                  title: "Pressure to settle fast",
                  they: "They call within days and offer a quick check, often before you know how badly you are hurt.",
                  we: "We make sure your treatment is done and costs are known before we talk numbers."
                },
                {
                  title: "Lowball first offers",
                  they: "The first offer is often low, made in the hope that you will take it and move on.",
                  we: "We add up medical bills, lost wages and pain and suffering, then negotiate from the full picture."
                },
                {
                  title: "Recorded statements",
                  they: "They ask to record your account of the crash, then use small details to question your claim.",
                  we: "We take the calls with the other driver's insurer, so you don't have to give them a statement on your own."
                },
                {
                  title: "Delaying",
                  they: "They stop responding or ask for the same papers again, hoping you give up.",
                  we: "We keep the claim moving, track every deadline and follow up until there is an answer."
                }
              ].map((row, i) => (
                <div key={row.title} className={`py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 ${i !== 3 ? 'border-b border-divider' : ''}`}>
                  <div className="lg:col-span-3">
                    <h3 className="text-[18px] lg:text-[20px] font-bold text-ink">{row.title}</h3>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-2">
                    <span className="lg:hidden text-[13px] font-semibold text-rk-green uppercase tracking-wider">What they do</span>
                    <p className="text-[17px] text-ink leading-[1.5]">{row.they}</p>
                  </div>
                  <div className="lg:col-span-5 flex flex-col gap-2">
                    <span className="lg:hidden text-[13px] font-semibold text-rk-green uppercase tracking-wider">What we do instead</span>
                    <p className="text-[17px] text-ink leading-[1.5]">{row.we}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to do after an accident */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">What to do after an accident</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text mb-8">Keep this list on your phone. What you do in the first few days can make a real difference to your claim.</p>
              <img src="/images/pi-phone.png" alt="Person taking picture of car accident" className="w-full rounded-[20px] object-cover shadow-sm" />
            </div>
            
            <div className="flex flex-col gap-8">
              {[
                {
                  num: "1",
                  title: "Check on everyone and call 911",
                  desc: "Get medical help for anyone who is hurt, and ask the officer for a police report number."
                },
                {
                  num: "2",
                  title: "Take photos before the cars move",
                  desc: "Photograph both cars, the road, any injuries, and the other driver's license and insurance card."
                },
                {
                  num: "3",
                  title: "Get names and phone numbers",
                  desc: "Swap information with the other driver and ask anyone who saw the crash for their number."
                },
                {
                  num: "4",
                  title: "See a doctor, even if you feel fine",
                  desc: "Some injuries show up days later. A medical record from the start protects your claim."
                },
                {
                  num: "5",
                  title: "Be careful with the insurance company",
                  desc: "Report the crash to your own insurer, but don't give the other driver's insurer a recorded statement or accept an offer yet."
                },
                {
                  num: "6",
                  title: "Call us for a free review",
                  desc: "We'll tell you whether you have a case and what to do next. It costs nothing to ask."
                }
              ].map(step => (
                <div key={step.num} className="flex gap-4 lg:gap-6">
                  <div className="text-rk-green font-bold text-[20px] shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-ink mb-1">{step.title}</h3>
                    <p className="text-[17px] text-body-text leading-[1.5]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="max-w-[700px] mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">How it works</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text">No cost to ask, and no pressure to sign anything.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-[14px] left-[15px] right-[15%] h-[1px] bg-divider z-0" />
            {[
              {
                num: "1",
                title: "Tell us what happened",
                desc: "Call us, or answer a few quick questions in the form above."
              },
              {
                num: "2",
                title: "We review it for free",
                desc: "We look at the crash, your injuries and the insurance involved, then tell you plainly whether you have a case."
              },
              {
                num: "3",
                title: "We handle the rest",
                desc: "We deal with the insurance companies and push for a fair settlement while you focus on getting better. You pay nothing unless we win."
              }
            ].map((step, idx) => (
              <div key={step.num} className="relative z-10 flex flex-col items-start bg-white">
                <div className="text-rk-green font-bold text-[24px] mb-4 lg:mb-6 bg-white pr-4">
                  {step.num}
                </div>
                <h3 className="text-[20px] font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-[17px] text-body-text leading-[1.5]">{step.desc}</p>
              </div>
            ))}
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
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Common questions</h2>
          <p className="text-[18px] lg:text-[20px] text-body-text mb-10 lg:mb-16">
            Still unsure? Call <a href="tel:7603389712" className="text-rk-green font-semibold hover:underline">(760) 338-9712</a> and ask us anything. The call is free.
          </p>
          
          <div className="flex flex-col gap-4">
            <FaqAccordion 
              question="How much does it cost to hire you?" 
              answer="Nothing up front. The case review is free, and you pay no attorney fees unless we obtain a recovery for you. You may still be responsible for certain costs, and we explain them before you sign anything." 
            />
            <FaqAccordion 
              question="How long will my case take?" 
              answer="Every case is different. Some settle in a few months, while others with serious injuries or disputed fault can take longer. We work to get you maximum compensation as efficiently as possible without settling for less than your case is worth." 
            />
            <FaqAccordion 
              question="How do I know if I have a case?" 
              answer="The best way to know is to call us for a free review. If you were injured in a crash and it was completely or partially someone else's fault, you likely have a case." 
            />
            <FaqAccordion 
              question="What is my case worth?" 
              answer="Case value depends on your medical bills, lost wages, future medical needs, and pain and suffering. Once we understand the full extent of your injuries and the insurance policies available, we can give you a better estimate." 
            />
            <FaqAccordion 
              question="I already talked to the insurance company. Is that a problem?" 
              answer="Usually not. Many people talk to an adjuster before they call a lawyer. Tell us what you said and whether you signed anything, and we'll take over the calls from here." 
            />
            <FaqAccordion 
              question="Will I have to go to court?" 
              answer="Most cases settle before a lawsuit is even filed, meaning you won't have to go to court. If the insurance company refuses to make a fair offer, we may recommend filing a lawsuit, but the final decision is always yours." 
            />
          </div>
        </section>

      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
