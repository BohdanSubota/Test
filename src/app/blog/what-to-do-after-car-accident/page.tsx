"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { PostCard } from "@/components/PostCard";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import Link from "next/link";
import { GoogleIcon } from "@/components/GoogleIcon";

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      <Header />

      <main className="flex-1 w-full relative">
        <article className="px-4 lg:px-11 pt-10 lg:pt-[100px] pb-10 lg:pb-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Breadcrumbs */}
              <div className="text-[14px] font-medium mb-4 lg:mb-6 flex items-center gap-2">
                <Link href="/blog" className="text-rk-green hover:underline">Blog</Link>
                <span className="text-muted">/</span>
                <span className="text-muted">Personal injury</span>
              </div>

              {/* Title & Sub */}
              <h1 className="text-[34px] lg:text-[48px] leading-[1.15] font-semibold text-ink mb-4">
                What to do in the first 24 hours after a car accident in California
              </h1>
              <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-6">
                A calm checklist for the day of a crash: what to do at the scene, why to see a doctor the same day, and how to handle the first call from an insurance company.
              </p>

              {/* Meta */}
              <div className="flex items-center gap-2 lg:gap-3 text-[14px] text-muted mb-8 lg:mb-10 flex-wrap">
                <span className="font-semibold text-rk-green uppercase tracking-wide">Personal injury</span>
                <span className="w-[3px] h-[3px] rounded-full bg-divider"></span>
                <span>September 18, 2026</span>
                <span className="w-[3px] h-[3px] rounded-full bg-divider"></span>
                <span>7 min read</span>
                <span className="w-[3px] h-[3px] rounded-full bg-divider"></span>
                <span>Written by our team</span>
              </div>

              {/* Hero Image */}
              <img 
                src="/images/img-1.png" 
                alt="Person taking photos of car damage" 
                className="w-full aspect-[3/2] lg:aspect-[16/9] object-cover rounded-[16px] lg:rounded-[24px] mb-8 lg:mb-12"
              />

              {/* Body */}
              <div className="max-w-[760px] text-[17px] leading-[1.6] text-body-text">
                <p className="mb-8">
                  The first day after a crash is confusing. You may be sore, your car may not start, and the other driver&apos;s insurance company may already be calling. What you do in these first 24 hours can protect your health and your claim. Here is a plain checklist you can follow, even from your phone.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink mb-4">First, make sure everyone is safe</h2>
                <p className="mb-8">
                  If you can, move out of traffic to the shoulder or a nearby parking lot and turn on your hazard lights. Call 911 if anyone is hurt. California law requires you to stop at the scene of any crash that involves an injury or damage to property. Stay calm and don&apos;t argue about who caused it. Police and insurers will look at fault later.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink mb-4">What to do at the scene</h2>
                <ol className="list-decimal list-outside ml-6 mb-8 space-y-4 font-semibold text-rk-green marker:text-rk-green">
                  <li>
                    <span className="text-ink">Call the police.</span> <span className="font-normal text-body-text">A police report gives you an independent record of what happened. If officers don&apos;t come out, write down the time you called and the location.</span>
                  </li>
                  <li>
                    <span className="text-ink">Swap information with the other driver.</span> <span className="font-normal text-body-text">Get their name, phone number, driver&apos;s license number, license plate, insurance company and policy number.</span>
                  </li>
                  <li>
                    <span className="text-ink">Take photos.</span> <span className="font-normal text-body-text">Photograph both cars, the road, traffic signals, skid marks and any cuts or bruises. Wide shots help as much as close-ups.</span>
                  </li>
                  <li>
                    <span className="text-ink">Get witness names and numbers.</span> <span className="font-normal text-body-text">People leave quickly, and an independent witness can make a real difference later.</span>
                  </li>
                  <li>
                    <span className="text-ink">Say as little as possible about fault.</span> <span className="font-normal text-body-text">Being polite is fine, but a simple &quot;I&apos;m sorry&quot; can be read as admitting blame.</span>
                  </li>
                </ol>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink mb-4">Get checked by a doctor the same day</h2>
                <p className="mb-8">
                  Adrenaline can hide pain for hours. Whiplash, concussions and back injuries often show up the next morning. Go to urgent care, the emergency room or your own doctor within 24 hours, and tell them you were in a car accident. A same-day visit protects your health, and it creates a medical record that connects your injuries to the crash. Waiting gives the insurance company room to argue you were hurt somewhere else.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink mb-4">Keep a simple record</h2>
                <p className="mb-4">
                  Start a folder or a note on your phone today. It takes a few minutes a day and saves a lot of stress later. Keep track of:
                </p>
                <ul className="list-disc list-outside ml-6 mb-8 space-y-2 marker:text-rk-green font-normal">
                  <li><span className="text-body-text">The claim number and the name of every adjuster who calls you</span></li>
                  <li><span className="text-body-text">Receipts for towing, a rental car, prescriptions and co-pays</span></li>
                  <li><span className="text-body-text">Days you miss from work and the pay you lose</span></li>
                  <li><span className="text-body-text">A few lines each day about your pain, your sleep and what you can&apos;t do</span></li>
                  <li><span className="text-body-text">Every letter, email and text from any insurance company</span></li>
                </ul>

                {/* Callout box */}
                <div className="bg-tint rounded-[16px] p-6 lg:p-8 mb-8 border border-divider">
                  <h4 className="text-[18px] lg:text-[20px] font-semibold text-ink mb-2">Talk to someone before you give a recorded statement</h4>
                  <p className="text-[16px] mb-4">
                    The other driver&apos;s insurance company may call within a day and ask to record your side of the story. You aren&apos;t required to give them one, and what you say can be used to pay you less. Call us first. It&apos;s free, and there&apos;s no pressure to sign anything.
                  </p>
                  <Button variant="secondary" className="bg-white border-chip-border text-ink h-[44px]">
                    <img src="/icons/icon-phone.svg" alt="Phone" className="w-4 h-4 mr-2" />
                    Call (760) 338-9712
                  </Button>
                </div>
                
                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink mb-4">Report the crash to the right places</h2>
                <p className="mb-8">
                  Tell your own insurance company about the crash soon, and stick to the basic facts. In California you also have to report the crash to the DMV on an SR-1 form within 10 days if anyone was hurt or killed, or if property damage is over $1,000. This is separate from any police report, and it&apos;s your job to file it.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink mb-4">Don&apos;t sign or settle too soon</h2>
                <p className="mb-8">
                  Early offers often arrive before you know how badly you&apos;re hurt or how long treatment will take. Once you sign a release, you usually can&apos;t ask for more later. In California you generally have two years from the accident to file an injury lawsuit, and some deadlines are much shorter, such as six months to file a claim against a city, county or state agency. Getting advice early keeps your options open.
                </p>

                {/* Second Callout */}
                <div className="bg-tint rounded-[16px] p-6 lg:p-8 mb-10 border border-divider">
                  <h4 className="text-[20px] font-semibold text-ink mb-2">Hurt in a crash? Ask us first.</h4>
                  <p className="text-[16px] mb-6">Tell us what happened and we&apos;ll call you back. No win, no fee.</p>
                  <Link href="/contact" className="inline-block"><Button variant="primary" className="h-[48px] px-6">Request my free review</Button></Link>
                </div>

                <hr className="border-divider mb-6" />
                <p className="text-[12px] text-muted leading-[1.5]">
                  This article is general information, not legal advice. Every situation is different. If you have questions about your own case, call us at (760) 338-9712.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-[120px]">
              {/* Form Card */}
              <div className="bg-tint rounded-[20px] p-6 lg:p-8 mb-6">
                <h3 className="text-[22px] font-semibold text-ink mb-3">Free case review</h3>
                <p className="text-[16px] text-body-text leading-[1.5] mb-6">
                  Hurt in a crash? Tell us what happened and we&apos;ll call you back. No win, no fee. You pay nothing unless we win.
                </p>
                <Button variant="primary" size="lg" className="w-full justify-center h-[52px] mb-6">
                  <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 brightness-0 invert" />
                  Call (760) 338-9712
                </Button>
                
                <p className="text-[15px] text-body-text mb-6">
                  Or leave your number and we&apos;ll call you back. We speak English, Spanish, Czech, Russian, Slovak, and Armenian.
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[14px] font-semibold text-ink mb-1.5">Your name</label>
                    <input 
                      type="text" 
                      placeholder="First and last name"
                      className="w-full border border-input-border rounded-lg px-4 py-3 text-[16px] text-ink focus:outline-none focus:border-rk-green bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-semibold text-ink mb-1.5">Phone number</label>
                    <input 
                      type="tel" 
                      defaultValue="(760) 555-0142"
                      className="w-full border border-input-border rounded-lg px-4 py-3 text-[16px] text-ink focus:outline-none focus:border-rk-green bg-white"
                    />
                  </div>
                  <Button size="lg" type="submit" className="w-full justify-center h-[52px]">Request my free review</Button>
                  <p className="text-[12px] text-muted leading-[1.4]">
                    By sending this, you agree we can call or text you about your case. Message and data rates may apply. This form doesn&apos;t make us your lawyers yet.
                  </p>
                </form>
              </div>

              {/* Google Badge */}
              <div className="flex items-center gap-2 bg-white rounded-full py-2.5 px-4 shadow-sm border border-chip-border w-max mb-6">
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

              {/* Review Card */}
              <div className="bg-tint rounded-[20px] p-6 lg:p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FBBF24"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[16px] leading-[1.5] text-ink mb-4">
                  &quot;They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.&quot;
                </p>
                <div>
                  <div className="text-[14px] font-semibold text-ink">Chris S.</div>
                  <div className="text-[13px] text-muted">Google review</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Keep reading */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink mb-2">Keep reading</h2>
          <p className="text-[18px] text-body-text mb-10">More plain answers about injuries, lemon cars and workers&apos; comp in California.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              <PostCard
                imageSrc="/images/img-9.png"
                category="Personal injury"
                title="Uber accident: whose insurance pays?"
                description="Hurt as a passenger or hit by a rideshare driver? Several policies may apply. Here is which one pays."
                date="August 20, 2026"
                readTime="5 min read"
              />
              <PostCard
                imageSrc="/images/img-5.png"
                category="Lemon law"
                title="Is my car a lemon? The 30-day rule explained"
                description="If your new car spent more than 30 days in the shop in its first 18 months, the law may presume it is a lemon."
                date="September 15, 2026"
                readTime="6 min read"
              />
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-tint rounded-[20px] p-6 lg:p-8 h-full flex flex-col">
                <h3 className="text-[22px] font-semibold text-ink mb-6">More from the blog</h3>
                <ul className="space-y-6 mb-8">
                  <li>
                    <div className="text-[13px] font-semibold text-rk-green mb-1">Workers&apos; comp</div>
                    <Link href="/blog" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors leading-[1.3] block">
                      Workers&apos; comp claim denied? Here is what happens next
                    </Link>
                  </li>
                  <li>
                    <div className="text-[13px] font-semibold text-rk-green mb-1">Personal injury</div>
                    <Link href="/blog" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors leading-[1.3] block">
                      Dog bite injuries in California: strict liability in plain English
                    </Link>
                  </li>
                  <li>
                    <div className="text-[13px] font-semibold text-rk-green mb-1">Lemon law</div>
                    <Link href="/blog" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors leading-[1.3] block">
                      Used car lemon law: when a used car qualifies
                    </Link>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/blog" className="block w-full"><Button variant="secondary" className="bg-white border-chip-border h-[44px] w-full">See all posts</Button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-4 lg:px-11 pb-10 lg:pb-24 max-w-[1440px] mx-auto">
          <div className="bg-tint rounded-[24px] p-6 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-xl">
              <h2 className="text-[28px] lg:text-[40px] leading-[1.15] font-semibold text-ink mb-3 lg:mb-4">Know your rights, in plain language</h2>
              <p className="text-[17px] lg:text-[20px] text-body-text">
                Short updates on California Lemon law, personal injury law and workers&apos; comp.<br className="hidden lg:block"/> Unsubscribe anytime.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-[320px] border border-input-border rounded-lg px-4 py-3.5 text-[16px] text-ink focus:outline-none focus:border-rk-green bg-white"
              />
              <Button type="submit" size="lg" className="shrink-0 justify-center h-[52px]">
                Subscribe
              </Button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
