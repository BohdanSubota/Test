import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { PostCard } from "@/components/PostCard";
import { BlogSidebar } from "./BlogSidebar";

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full">
        {/* Breadcrumb */}
        <div className="px-4 lg:px-11 pt-6 lg:pt-[140px] max-w-[1396px] mx-auto">
          <div className="text-[14px] text-muted">
            <a href="/blog" className="hover:text-ink">Blog</a>
            <span className="mx-2">/</span>
            <span>Personal injury</span>
          </div>
        </div>

        {/* Article + Sidebar */}
        <section className="px-4 lg:px-11 pt-6 lg:pt-8 pb-10 lg:pb-24 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
            {/* Article */}
            <article>
              <h1 className="text-[32px] lg:text-[44px] leading-[1.15] font-semibold tracking-[-0.01em] text-ink mb-4 lg:mb-6">
                What to do in the first 24 hours after a car accident in California
              </h1>
              <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-6">
                A calm checklist for the day of a crash: what to do at the scene, why to see a doctor the same day, and how to handle the first call from an insurance company.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] text-muted mb-8 lg:mb-10">
                <span className="text-rk-green font-semibold">Personal injury</span>
                <span>September 18, 2026</span>
                <span>7 min read</span>
                <span>Written by our team</span>
              </div>

              {/* Hero image */}
              <img src="/images/img-1.png" alt="Car accident scene" className="w-full rounded-[16px] object-cover mb-10 lg:mb-12" />

              {/* Article body */}
              <div className="space-y-8 max-w-[680px]">
                <p className="text-[17px] text-body-text leading-[1.7]">
                  The first day after a crash is confusing. You may be sore, your car may not start, and the other driver&apos;s insurance company may already be calling. What you do in these first 24 hours can protect your health and your claim. Here is a plain checklist you can follow, even from your phone.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink">First, make sure everyone is safe</h2>
                <p className="text-[17px] text-body-text leading-[1.7]">
                  If you can, move out of traffic to the shoulder or a nearby parking lot and turn on your hazard lights. Call 911 if anyone is hurt. California law requires you to stop at the scene of any crash that involves an injury or damage to property. Stay calm and don&apos;t argue about who caused it. Police and insurers will look at fault later.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink">What to do at the scene</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-[17px] text-body-text leading-[1.7]">
                  <li><strong className="text-ink">Call the police.</strong> A police report gives you an independent record of what happened. If officers don&apos;t come out, write down the time you called and the location.</li>
                  <li><strong className="text-ink">Swap information with the other driver.</strong> Get their name, phone number, driver&apos;s license number, license plate, insurance company and policy number.</li>
                  <li><strong className="text-ink">Take photos.</strong> Photograph both cars, the road, traffic signals, skid marks and any cuts or bruises. Wide shots help as much as close-ups.</li>
                  <li><strong className="text-ink">Get witness names and numbers.</strong> People leave quickly, and an independent witness can make a real difference later.</li>
                  <li><strong className="text-ink">Say as little as possible about fault.</strong> Being polite is fine, but a simple &quot;I&apos;m sorry&quot; can be read as admitting blame.</li>
                </ol>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink">Get checked by a doctor the same day</h2>
                <p className="text-[17px] text-body-text leading-[1.7]">
                  Adrenaline can hide pain for hours. Whiplash, concussions and back injuries often show up the next morning. Go to urgent care, the emergency room or your own doctor within 24 hours, and tell them you were in a car accident. A same-day visit protects your health, and it creates a medical record that connects your injuries to the crash. Waiting gives the insurance company room to argue you were hurt somewhere else.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink">Keep a simple record</h2>
                <p className="text-[17px] text-body-text leading-[1.7]">
                  Start a folder or a note on your phone today. It takes a few minutes a day and saves a lot of stress later. Keep track of:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-[17px] text-body-text leading-[1.7]">
                  <li>The claim number and the name of every adjuster who calls you</li>
                  <li>Receipts for towing, a rental car, prescriptions and co-pays</li>
                  <li>Days you miss from work and the pay you lose</li>
                  <li>A few lines each day about your pain, your sleep and what you can&apos;t do</li>
                  <li>Every letter, email and text from any insurance company</li>
                </ul>

                {/* Callout box */}
                <div className="bg-tint rounded-lg p-6 lg:p-8 border border-divider">
                  <h3 className="text-[18px] font-bold text-ink mb-3">Talk to someone before you give a recorded statement</h3>
                  <p className="text-[17px] text-body-text leading-[1.7] mb-4">
                    The other driver&apos;s insurance company may call within a day and ask to record your side of the story. You aren&apos;t required to give them one, and what you say can be used to lower you claim. Call us first. It&apos;s free, and there&apos;s no pressure to sign anything.
                  </p>
                  <a href="tel:7603389712" className="inline-flex items-center gap-2 text-[17px] font-semibold text-rk-green hover:underline">
                    <img src="/icons/icon-phone.svg" alt="Phone" className="w-4 h-4" />
                    Call (760) 338-9712
                  </a>
                </div>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink">Report the crash to the right places</h2>
                <p className="text-[17px] text-body-text leading-[1.7]">
                  Tell your own insurance company about the crash soon, and stick to the basic facts. In California you also have to report the crash to the DMV on an SR-1 form within 10 days if anyone was hurt or killed, or if property damage is over \$1,000. This is separate from any police report, and it&apos;s your job to file it.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink">Don&apos;t sign or settle too soon</h2>
                <p className="text-[17px] text-body-text leading-[1.7]">
                  Early offers often arrive before you know how badly you&apos;re hurt or how long treatment will take. Once you sign a release, you usually can&apos;t ask for more later. In California, you generally have two years from the accident to file an injury lawsuit, and some deadlines are much shorter, such as six months to file a claim against a city, county or state agency. Getting advice early keeps your options open.
                </p>

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink">Hurt in a crash? Ask us first.</h2>
                <p className="text-[17px] text-body-text leading-[1.7] mb-6">
                  Tell us what happened and we&apos;ll call you back. No win, no fee.
                </p>
                <Button size="lg" className="justify-center h-[52px]">Request my free review</Button>

                <div className="border-t border-divider pt-8 mt-8">
                  <p className="text-[14px] text-muted leading-[1.6]">
                    This article is general information, not legal advice. Every situation is different. If you have questions about your own case, call us at (760) 338-9712.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </section>

        {/* Related posts */}
        <section className="px-4 lg:px-11 py-10 lg:py-16 max-w-[1396px] mx-auto border-t border-divider">
          <h2 className="text-[30px] lg:text-[36px] font-semibold text-ink mb-4">Keep reading</h2>
          <p className="text-[18px] text-body-text mb-10">More plain answers about injuries, lemon cars and workers&apos; comp in California.</p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_300px] gap-8">
            <PostCard
              imageSrc="/images/img-9.png"
              category="Personal injury"
              title="Uber accident: whose insurance pays?"
              date="August 20, 2026"
              readTime="5 min read"
            />
            <PostCard
              imageSrc="/images/img-5.png"
              category="Lemon law"
              title="Is my car a lemon? The 30-day rule explained"
              date="September 15, 2026"
              readTime="6 min read"
            />
            <div>
              <h3 className="text-[18px] font-semibold text-ink mb-6">More from the blog</h3>
              <div className="flex flex-col gap-6">
                {[
                  { cat: "Workers' comp", title: "Workers' comp claim denied? Here is what happens next" },
                  { cat: "Personal injury", title: "Dog bite injuries in California: strict liability in plain English" },
                  { cat: "Lemon law", title: "Used car lemon law: when a used car qualifies" }
                ].map(post => (
                  <div key={post.title}>
                    <span className="text-[13px] font-semibold text-rk-green uppercase tracking-wider">{post.cat}</span>
                    <a href="#" className="block text-[16px] font-semibold text-ink hover:text-rk-green mt-1 leading-[1.3]">{post.title}</a>
                  </div>
                ))}
                <a href="/blog" className="text-[16px] font-semibold text-rk-green hover:underline mt-2">See all posts</a>
              </div>
            </div>
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
      </main>

      <Footer />
    </div>
  );
}
