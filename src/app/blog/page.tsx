import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { PostCard } from "@/components/PostCard";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full">
        {/* Intro */}
        <section className="px-4 lg:px-11 pt-10 lg:pt-[140px] pb-10 lg:pb-16 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-16">
            <div>
              <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4">Blog</h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-body-text mb-8">
                Plain answers about injuries, lemon cars and workers&apos; comp in California. Written by our team in Victorville for people who want to know where they stand.
              </p>

              {/* Category chips */}
              <div className="flex flex-wrap gap-3">
                {["All posts", "Personal injury", "Lemon law", "Workers' comp", "Firm news"].map((cat, i) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-lg border text-[16px] transition-colors ${
                      i === 0
                        ? 'bg-ink border-ink text-white font-semibold'
                        : 'bg-white border-chip-border text-ink hover:bg-tint font-medium'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-tint rounded-lg p-6 lg:p-8 h-fit">
              <h3 className="text-[20px] font-semibold text-ink mb-3">Reading because something happened?</h3>
              <p className="text-[17px] text-body-text leading-[1.5] mb-6">Tell us about it. The review is free, and you pay nothing unless we win.</p>
              <Button variant="secondary" size="lg" className="justify-center h-[48px] mb-6">Start your free review</Button>
              <div className="flex items-center gap-2">
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

        {/* Featured post */}
        <section className="px-4 lg:px-11 py-10 lg:py-16 max-w-[1396px] mx-auto border-t border-divider">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <img src="/images/img-1.png" alt="Car accident checklist" className="w-full rounded-[16px] object-cover aspect-[4/3]" />
            </div>
            <div>
              <span className="text-[14px] font-semibold text-rk-green uppercase tracking-wider mb-3 block">Personal injury</span>
              <h2 className="text-[28px] lg:text-[36px] leading-[1.2] font-semibold text-ink mb-4">What to do in the first 24 hours after a car accident in California</h2>
              <p className="text-[17px] text-body-text leading-[1.5] mb-6">
                See a doctor, take photos, and hold off on a recorded statement to the other driver&apos;s insurer. Here is a simple checklist for the first day, and why each step protects your claim.
              </p>
              <div className="text-[15px] text-muted mb-4">September 18, 2026 · 7 min read</div>
              <a href="/blog/what-to-do-after-car-accident" className="text-[16px] font-semibold text-rk-green hover:underline">Read the checklist</a>
            </div>
          </div>
        </section>

        {/* Latest posts */}
        <section className="px-4 lg:px-11 py-10 lg:py-16 max-w-[1396px] mx-auto">
          <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-10 lg:mb-12">Latest posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PostCard
              imageSrc="/images/img-5.png"
              category="Lemon law"
              title="Is my car a lemon? The 30-day rule explained"
              date="September 15, 2026"
              readTime="6 min read"
            />
            <PostCard
              imageSrc="/images/img-0.png"
              category="Workers' comp"
              title="Workers' comp claim denied? Here is what happens next"
              date="September 9, 2026"
              readTime="5 min read"
            />
            <PostCard
              imageSrc="/images/img-3.png"
              category="Personal injury"
              title="Dog bite injuries in California: strict liability in plain English"
              date="September 3, 2026"
              readTime="4 min read"
            />
            <PostCard
              imageSrc="/images/img-9.png"
              category="Personal injury"
              title="Uber accident: whose insurance pays?"
              date="August 20, 2026"
              readTime="5 min read"
            />
            <PostCard
              imageSrc="/images/img-8.png"
              category="Lemon law"
              title="Used car lemon law: when a used car qualifies"
              date="August 6, 2026"
              readTime="6 min read"
            />
            <PostCard
              imageSrc="/images/img-7.png"
              category="Firm news"
              title="Help with your case in Armenian: what to expect when you call"
              date="June 24, 2026"
              readTime="3 min read"
            />
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-2 mt-12">
            <button className="px-4 py-2 rounded-lg border border-chip-border text-[16px] font-medium text-ink hover:bg-tint">Previous</button>
            <button className="w-10 h-10 rounded-lg bg-ink text-white text-[16px] font-semibold flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-lg border border-chip-border text-[16px] font-medium text-ink hover:bg-tint flex items-center justify-center">2</button>
            <button className="w-10 h-10 rounded-lg border border-chip-border text-[16px] font-medium text-ink hover:bg-tint flex items-center justify-center">3</button>
            <button className="px-4 py-2 rounded-lg border border-chip-border text-[16px] font-medium text-ink hover:bg-tint">Next</button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="bg-tint rounded-lg p-6 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-xl">
              <h2 className="text-[28px] lg:text-[32px] font-semibold text-ink mb-3 lg:mb-4">Know your rights, in plain language</h2>
              <p className="text-[17px] lg:text-[18px] text-body-text">
                Short updates on California injury, lemon law and workers&apos; comp. Unsubscribe anytime.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-[320px] border border-input-border rounded-sm px-4 py-3.5 text-[16px] text-ink focus:outline-none focus:border-rk-green bg-white"
              />
              <Button type="submit" size="lg" className="shrink-0 justify-center h-[52px]">
                Subscribe
              </Button>
            </form>
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
