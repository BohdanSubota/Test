"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ReferralForm } from "@/components/ReferralForm";
import { ContactCard } from "@/components/ContactCard";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { GoogleIcon } from "@/components/GoogleIcon";

const referralAreas = [
  {
    title: "Immigration",
    desc: "Visas, green cards, citizenship and help with immigration court.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "Employment",
    desc: "Unpaid wages, wrongful firing, discrimination and harassment at work.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "DUI",
    desc: "Driving under the influence arrests, DMV hearings and license suspensions.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "Criminal defense",
    desc: "Misdemeanor and felony charges, from the first court date through trial.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "Divorce",
    desc: "Ending a marriage, dividing property and debts, and spousal support.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "Family law",
    desc: "Child custody, visitation, child support and adoption.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "Business",
    desc: "Starting a company, contracts, partnerships and business disputes.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "Litigation",
    desc: "Civil lawsuits and disputes that don't involve an injury or a lemon car.",
    note: "[Partner firm to confirm]"
  },
  {
    title: "Estate planning, wills and trusts",
    desc: "Wills, living trusts, powers of attorney and probate.",
    note: "[Partner firm to confirm]"
  }
];



export default function ReferralPartners() {
    return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      {/* Hero */}
      <div className="pt-0 lg:pt-4 xl:pt-6 px-0 lg:px-4 xl:px-11 max-w-[1440px] mx-auto w-full flex flex-col lg:block relative">
        <section className="relative w-full lg:rounded-[20px] overflow-hidden lg:min-h-[520px] flex flex-col lg:block bg-tint lg:bg-transparent">
          <Header />

          <div
            className="hidden lg:block absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/referral-hero.jpg')" }}
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white from-20% via-white/60 via-40% to-transparent pointer-events-none" />

          <div className="relative pt-6 lg:pt-[120px] xl:pt-[140px] px-4 lg:px-11 pb-10 lg:pb-16 h-full flex flex-col lg:justify-center bg-white lg:bg-transparent">
            <div className="max-w-[900px]">
              <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4 lg:mb-6">
                Referrals for other legal needs
              </h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-ink mb-6 lg:mb-14 max-w-[540px]">
                We focus on personal Lemon law, personal injury law and workers&apos; comp. For other legal needs, we can connect you with firms we trust.
              </p>

              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#form" className="flex-1 sm:flex-none"><Button variant="primary" size="lg" className="justify-center h-[52px]">Ask for a referral</Button></a>
                  <Link href="/contact" className="flex-1 sm:flex-none"><Button variant="secondary" size="lg" className="justify-center h-[52px]">Free case review</Button></Link>
                </div>

                {/* Google Badge */}
                <div className="flex items-center gap-2 bg-white rounded-full py-2.5 px-4 shadow-sm border border-chip-border w-max">
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
        {/* Where we can point you */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Where we can point you</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text">Tell us what you need and we&apos;ll connect you with a firm that handles it, at no cost to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 mb-10">
            {referralAreas.map(area => (
              <div key={area.title} className="border-y border-divider py-6">
                <h3 className="text-[18px] font-bold text-ink mb-2">{area.title}</h3>
                <p className="text-[17px] text-body-text leading-[1.5] mb-2">{area.desc}</p>
                <p className="text-[14px] text-muted">{area.note}</p>
              </div>
            ))}
          </div>

          <a href="https://maps.google.com/?q=16888+Nisqualli+Rd,+Victorville,+CA+92395" target="_blank" className="text-[16px] font-semibold text-rk-green hover:underline">
            Not sure which one fits? Ask us and we&apos;ll point you in the right direction.
          </a>
        </section>

        {/* Ask for a referral */}
        <section id="form" className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1440px] mx-auto border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="hidden lg:block lg:col-span-4">
              <ContactCard />
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-[34px] lg:text-[44px] leading-[1.1] font-semibold text-ink mb-2 lg:mb-4">Ask for a referral</h2>
              <p className="text-[19px] leading-[1.4] text-body-text mb-8 lg:mb-10 max-w-[500px]">
                Tell us what kind of help you need and how to reach you. We&apos;ll call you back with the name of a firm we trust.
              </p>

              <ReferralForm />
              <div className="lg:hidden mt-8">
                <ContactCard />
              </div>
            </div>
          </div>
        </section>

        {/* How a referral works */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">How a referral works</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text">It takes a minute, and you&apos;re never obligated to hire anyone.</p>
          </div>

          <div className="h-px bg-divider w-full mb-10 lg:mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { num: "1", title: "Tell us what you need", desc: "Use the short form above or call us. A sentence or two about your situation is enough." },
              { num: "2", title: "We suggest a firm we trust", desc: "We'll share the name and contact details of a firm that handles your kind of case." },
              { num: "3", title: "You decide", desc: "You choose whether to reach out. The referral is free, and there's no obligation." }
            ].map(step => (
              <div key={step.num}>
                <div className="text-[32px] lg:text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">{step.num}</div>
                <h3 className="text-[20px] lg:text-[24px] font-semibold text-ink mb-2 lg:mb-3">{step.title}</h3>
                <p className="text-[16px] lg:text-[17px] leading-[1.5] text-body-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For other law firms */}
        <section className="px-4 lg:px-11 py-10 lg:py-24">
          <div className="max-w-[1396px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img src="/images/referral-documents-v2.png" alt="A referral document being handed over" className="w-full rounded-[16px] object-cover aspect-[6/5]" />
            </div>
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Are you a lawyer with an injury or lemon law case?</h2>
              <p className="text-[17px] text-body-text leading-[1.5] mb-6">
                If a client comes to you with a lemon law, personal injury law or workers&apos; comp matter, we&apos;d welcome the referral. We&apos;ll treat your client with care and keep you in the loop.
              </p>
              <p className="text-[17px] text-body-text leading-[1.5] mb-8">
                Call (760) 338-9712 or email hello@rklegalcorp.com.
              </p>
              <a href="#form" className="flex-1 sm:flex-none"><Button variant="secondary" size="lg" className="justify-center h-[52px]">Refer a case</Button></a>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 border-t border-divider">
          <div className="max-w-[1440px] mx-auto bg-tint rounded-[24px] p-8 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="text-[32px] lg:text-[44px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Hurt, or stuck with a lemon car?</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">That&apos;s the work we do. The case review is free, and you pay nothing unless we win.</p>
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
