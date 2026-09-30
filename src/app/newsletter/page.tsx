import { NewsletterForm } from "@/components/NewsletterForm";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

const issues = [
  {
    month: "September 2026",
    entries: [
      {
        date: "Sep 17, 2026",
        title: "What to say when the other driver's insurer calls",
        desc: "You don't have to give a recorded statement. What to write down first."
      },
      {
        date: "Sep 3, 2026",
        title: "Your car is back in the shop again. Now what?",
        desc: "How to keep your repair orders so every visit counts toward a California lemon law claim."
      }
    ]
  },
  {
    month: "August 2026",
    entries: [
      {
        date: "Aug 20, 2026",
        title: "Your workers' comp claim was denied. Here's what that letter means",
        desc: "A denial isn't the final word. How to read the letter and the steps to challenge it."
      },
      {
        date: "Aug 6, 2026",
        title: "Hurt in an Uber or Lyft: whose insurance pays?",
        desc: "Coverage depends on what the driver's app was doing at the time of the crash."
      }
    ]
  },
  {
    month: "July 2026",
    entries: [
      {
        date: "Jul 23, 2026",
        title: "Who pays the lawyer in a lemon law case",
        desc: "Under Civil Code 1794(d), the manufacturer pays a winning buyer's attorney fees."
      },
      {
        date: "Jul 9, 2026",
        title: "Heat illness at work can be a workplace injury",
        desc: "Working outside in High Desert heat? What to report, and when."
      }
    ]
  },
  {
    month: "June 2026",
    entries: [
      {
        date: "Jun 25, 2026",
        title: "The first hour after a crash",
        desc: "Photos, witness names, a police report and a doctor visit. A glovebox checklist."
      },
      {
        date: "Jun 11, 2026",
        title: "Dog bites in California: the basics",
        desc: "Why dog bite cases work differently here, and what to do first if you or your child was bitten."
      }
    ]
  }
];

export default function Newsletter() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full">
        {/* Intro */}
        <section className="px-4 lg:px-11 pt-10 lg:pt-[140px] pb-10 lg:pb-16 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4 lg:mb-6">Newsletter</h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-body-text mb-8">
                Short, plain-language emails from our Victorville office about your rights after a crash, a car that won&apos;t stay fixed, or an injury at work.
              </p>

              {/* Signup box */}
              <div className="bg-tint rounded-lg p-6 lg:p-8 mb-8">
                <h3 className="text-[18px] font-semibold text-ink mb-3">Get the next issue by email</h3>
                <p className="text-[17px] text-body-text leading-[1.5] mb-6">
                  Each issue answers one real question about injury, law or workers&apos; comp, plus one practical tip. Sent [Confirm frequency with John].
                </p>
                <NewsletterForm className="flex flex-col sm:flex-row gap-4 mb-4" />
                <p className="text-[14px] text-muted">Unsubscribe any time. The newsletter is general information, not legal advice.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-[17px] text-body-text">Hurt or stuck with a lemon right now? You don&apos;t need to wait for the next issue. No win, no fee.</p>
                <Button variant="secondary" size="lg" className="shrink-0 justify-center h-[48px]">Free case review</Button>
              </div>
            </div>

            <div className="relative">
              <img src="/images/newsletter-home.png" alt="Victorville home" className="w-full rounded-[16px] object-cover aspect-[5/4]" />
              {/* Google badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white rounded-full py-2.5 px-4 shadow-sm w-max">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-[14px] font-bold text-ink">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-3 h-3" />
                  ))}
                </div>
                <span className="text-[13px] text-body-text ml-1">49 Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Past issues */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Past issues</h2>
          <p className="text-[18px] lg:text-[20px] text-body-text mb-3">Every issue we&apos;ve sent, newest first. You can read any of them without signing up.</p>
          <p className="text-[14px] text-muted mb-10 lg:mb-16">[Sample issues, replace with real archive]</p>

          <div className="flex flex-col">
            {issues.map((group, gi) => (
              <div key={group.month} className={`${gi > 0 ? 'mt-10 lg:mt-12' : ''}`}>
                {group.entries.map((entry, ei) => (
                  <div
                    key={entry.title}
                    className={`grid grid-cols-1 lg:grid-cols-[180px_120px_1fr_auto] gap-2 lg:gap-8 items-baseline py-6 ${
                      ei === 0 ? 'border-t border-divider' : 'border-t border-divider/50'
                    }`}
                  >
                    {/* Month (only first entry shows it) */}
                    <div className="text-[17px] font-semibold text-ink lg:text-[18px]">
                      {ei === 0 ? group.month : <span className="lg:invisible">{group.month}</span>}
                    </div>

                    {/* Date */}
                    <div className="text-[15px] text-muted">{entry.date}</div>

                    {/* Title + Description */}
                    <div>
                      <h3 className="text-[17px] font-semibold text-ink mb-1">{entry.title}</h3>
                      <p className="text-[16px] text-body-text leading-[1.5]">{entry.desc}</p>
                    </div>

                    {/* Read issue link */}
                    <Link href="/blog/what-to-do-after-car-accident" className="text-[16px] font-semibold text-rk-green hover:underline whitespace-nowrap">Read issue</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 border-t border-divider">
          <div className="max-w-[1396px] mx-auto bg-tint rounded-lg p-6 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[28px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Unsure if you have a case?</h2>
              <p className="text-[17px] lg:text-[20px] text-body-text">Tell us what happened. The review is free, and you pay nothing unless we win.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button size="lg" className="justify-center h-[52px]">
                <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 brightness-0 invert" />
                Call (760) 338-9712
              </Button>
              <Button variant="secondary" size="lg" className="justify-center h-[52px]">Start your free review</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
