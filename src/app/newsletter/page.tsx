import { NewsletterForm } from "@/components/NewsletterForm";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { GoogleIcon } from "@/components/GoogleIcon";

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
                  <GoogleIcon />
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
