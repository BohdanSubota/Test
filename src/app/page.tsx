import { NewsletterForm } from "@/components/NewsletterForm";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/Icons";
import { CaseReviewForm } from "@/components/CaseReviewForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { PostCard } from "@/components/PostCard";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { serverTrpc } from "@/trpc/server";
import { GoogleBadge } from "@/components/GoogleBadge";

export default async function Home() {
  const { featured, posts } = await serverTrpc.blog.getAll({ page: 1 });
  const allPosts = featured ? [featured, ...posts] : posts;
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-[84px] lg:pb-0">
      {/* Hero Wrapper */}
      <div className="pt-0 lg:pt-4 xl:pt-6 px-0 lg:px-4 xl:px-11 max-w-[1440px] mx-auto w-full flex flex-col lg:block relative">
        {/* Desktop Hero Card & Content */}
        <section className="relative w-full lg:rounded-[20px] overflow-hidden lg:min-h-[640px] bg-white lg:bg-tint flex flex-col lg:block">
          <Header />
          
          {/* Mobile Image */}
          <div className="px-4 mt-4 lg:hidden">
            <div 
              className="w-full h-[200px] rounded-[16px] bg-cover bg-[position:85%_center]" 
              style={{ backgroundImage: "url('/images/home-hero.jpg')" }} 
            />
          </div>
          
          {/* Desktop Background Image */}
          <div 
            className="hidden lg:block absolute inset-0 bg-cover bg-[position:85%_center]"
            style={{ backgroundImage: "url('/images/home-hero.jpg')" }}
          />
          {/* Desktop Gradient overlay */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/70 to-transparent pointer-events-none" />

          {/* Hero Content (Mobile + Desktop) */}
          <div className="relative pt-6 lg:pt-[240px] px-4 lg:px-11 pb-10 lg:pb-16 h-full flex flex-col lg:justify-end bg-white lg:bg-transparent">
            <div className="max-w-[720px]">
              <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4 lg:mb-6">
                Lemon law & personal injury law firm in Southern California
              </h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-ink mb-6 lg:mb-8 lg:max-w-[600px]">
                <span className="hidden lg:inline">Hurt in a crash? No win, no fee. You pay nothing unless we win.</span>
                <span className="lg:hidden">You pay nothing unless we win.</span>
              </p>

              {/* Mobile Hero Buttons */}
              <div className="flex flex-col gap-3 mb-6 lg:hidden">
                <a href="tel:7603389712" className="block w-full">
                  <Button size="lg" className="w-full justify-center h-[52px]">
                    <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 brightness-0 invert" />
                    Call (760) 338-9712
                  </Button>
                </a>
                <Link href="/contact" className="block w-full">
                  <Button variant="secondary" size="lg" className="w-full justify-center h-[52px]">
                    Get a free case review
                  </Button>
                </Link>
              </div>

              {/* Google Badge */}
              <GoogleBadge />
            </div>
          </div>
        </section>
      </div>

      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        {/* Trust Strip */}
        <section className="hidden lg:block px-5 lg:px-11 py-10 lg:py-14 border-b border-divider">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-[1396px] mx-auto">
            {[
              "5.0 on Google from 49 reviews",
              "No fee unless we win",
              "Free case review",
              "English, Spanish, Czech, Russian, Slovak, and Armenian"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckIcon className="w-6 h-6 flex-shrink-0" />
                <span className="text-[16px] lg:text-[17px] font-medium text-ink">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Case Review Section */}
        <section className="px-4 lg:px-11 py-10 lg:py-24">
          <div className="max-w-[1396px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24">
            
            {/* Left/Bottom: Contact Card */}
            <div className="bg-tint lg:bg-tint rounded-lg p-6 lg:p-12 h-fit">
              <h2 className="text-[24px] font-semibold text-ink mb-4">Rather talk it through?</h2>
              <p className="text-[17px] leading-[1.5] text-body-text mb-8">
                Call us and tell us what happened. It&apos;s free, and there&apos;s no pressure to sign anything.
              </p>
              
              <div className="mb-8">
                <div className="text-[30px] font-semibold text-rk-green mb-1">(760) 338-9712</div>
                <div className="text-[17px] text-body-text">hello@rklegalcorp.com</div>
              </div>

              <div className="h-px bg-divider w-full mb-8" />

              <div className="mb-8">
                <div className="text-[15px] text-muted mb-1">Office</div>
                <div className="text-[17px] text-body-text leading-[1.4]">
                  Victorville, CA & Pasadena, CA
                </div>
              </div>

              <div className="mb-8">
                <div className="text-[15px] text-muted mb-1">We speak</div>
                <div className="text-[17px] text-body-text">English, Spanish, Czech, Russian, Slovak, and Armenian</div>
              </div>

              <div className="h-px bg-divider w-full mb-8 hidden lg:block" />

              <div className="hidden lg:block">
                <p className="text-[17px] leading-[1.5] text-body-text italic mb-4">
                  &ldquo;They have Armenian speakers who were able to communicate with my mother-in-law and guide us every step of the way when the insurance companies were taking advantage of us.&rdquo;
                </p>
                <div className="text-[15px] font-medium text-muted">John M., client review</div>
              </div>
            </div>

            {/* Right/Top: Free Case Review Form */}
            <div className="bg-tint lg:bg-transparent rounded-[20px] lg:rounded-none p-6 lg:p-0">
              <h2 className="text-[28px] lg:text-[44px] leading-[1.1] font-semibold text-ink mb-2 lg:mb-4">Free case review</h2>
              
              <p className="hidden lg:block text-[19px] leading-[1.4] text-body-text mb-8 lg:mb-10">
                Unsure if you have a case? Answer a few quick questions and we&apos;ll call you back.
              </p>
              <p className="lg:hidden text-[17px] text-body-text mb-6">Takes about 30 seconds.</p>

              <CaseReviewForm />
            </div>
          </div>
        </section>

        {/* What we help with */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="mb-8 lg:mb-16">
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Get help with your injury or lemon car</h2>
            <p className="text-[18px] lg:text-[20px] text-body-text max-w-3xl">Lemon law, personal injury law and workers&apos; comp cases, from our office in Victorville. Asking is free.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-tint rounded-lg p-6 lg:p-8">
              <h3 className="text-[24px] font-semibold text-ink mb-4">Personal injury</h3>
              <p className="text-[17px] leading-[1.5] text-body-text mb-8 min-h-[100px]">
                Hurt in a car, truck or rideshare crash, a fall or a dog bite? We handle the insurance company while you focus on getting better.
              </p>
              <Link href="/personal-injury" className="text-[16px] font-semibold text-rk-green hover:underline">About personal injury cases</Link>
            </div>
            <div className="bg-tint rounded-lg p-6 lg:p-8">
              <h3 className="text-[24px] font-semibold text-ink mb-4">Lemon law</h3>
              <p className="text-[17px] leading-[1.5] text-body-text mb-8 min-h-[100px]">
                Car keeps going back to the shop for the same problem? You may be owed a refund or a new car. If you win, the manufacturer pays our fees.
              </p>
              <Link href="/lemon-law" className="text-[16px] font-semibold text-rk-green hover:underline">About lemon law cases</Link>
            </div>
            <div className="bg-tint rounded-lg p-6 lg:p-8">
              <h3 className="text-[24px] font-semibold text-ink mb-4">Workers&apos; comp</h3>
              <p className="text-[17px] leading-[1.5] text-body-text mb-8 min-h-[100px]">
                Hurt on the job, or had your claim denied? We help you get medical care and wage benefits. Fees are set by the state appeals board.
              </p>
              <Link href="/workers-comp" className="text-[16px] font-semibold text-rk-green hover:underline">About workers&apos; comp cases</Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8 mb-10 lg:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Getting help takes three steps</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Getting help starts with a phone call or a short form.</p>
            </div>
            <div className="hidden lg:block">
              <Link href="/contact"><Button variant="secondary" size="lg">Start your free review</Button></Link>
            </div>
          </div>

          {/* Divider line between heading and steps */}
          <div className="h-px bg-divider w-full mb-10 lg:mb-16" />

          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-12">
            <div>
              <div className="text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">1</div>
              <h3 className="text-[24px] font-semibold text-ink mb-2 lg:mb-3">Tell us what happened</h3>
              <p className="text-[17px] leading-[1.5] text-body-text">Call us, or answer a few quick questions in the form. You don&apos;t need any paperwork to start.</p>
            </div>
            <div>
              <div className="text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">2</div>
              <h3 className="text-[24px] font-semibold text-ink mb-2 lg:mb-3">We review it for free</h3>
              <p className="text-[17px] leading-[1.5] text-body-text">We look at the details and tell you plainly whether we think you have a case. No cost, no pressure to sign.</p>
            </div>
            <div>
              <div className="text-[40px] font-semibold text-rk-green mb-2 lg:mb-4">3</div>
              <h3 className="text-[24px] font-semibold text-ink mb-2 lg:mb-3">We handle the rest</h3>
              <p className="text-[17px] leading-[1.5] text-body-text">If we take your case, we deal with the insurance company or the manufacturer and keep you updated.</p>
            </div>
          </div>

          <div className="mt-10 lg:hidden">
            <Link href="/contact" className="block w-full"><Button variant="secondary" size="lg" className="w-full justify-center h-[52px]">Start your free review</Button></Link>
          </div>
        </section>

        {/* Lemon law band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24">
          <div className="max-w-[1396px] mx-auto bg-tint rounded-lg flex flex-col lg:flex-row overflow-hidden lg:overflow-visible">
            <div className="p-6 lg:p-16 flex-1">
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4 lg:mb-6">
                <span className="hidden lg:inline">Win your lemon law case, and the manufacturer pays our fees</span>
                <span className="lg:hidden">In lemon law cases, the manufacturer pays our fees</span>
              </h2>
              <p className="text-[18px] lg:text-[20px] text-body-text mb-4 lg:mb-6">
                Under California Civil Code section 1794(d), when you win a lemon law case, the manufacturer is generally required to pay your attorney fees. So you can get help with a car that keeps breaking down without paying us out of pocket.
              </p>
              <p className="text-[17px] text-body-text mb-8 lg:mb-10">
                Your car may qualify if it has been in the shop again and again for the same problem while it was under warranty.
              </p>
              <Link href="/lemon-law"><Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center h-[52px]">See if your car qualifies</Button></Link>
            </div>
            
            <div className="px-6 pb-6 lg:py-8 lg:pr-8 lg:pl-0 lg:flex-1 lg:max-w-md w-full">
              <div className="bg-white p-6 lg:p-16 w-full h-full lg:h-auto rounded-lg">
                <h3 className="text-[22px] font-semibold text-ink mb-6 lg:mb-8">What a lemon law case can get you</h3>
                <div className="flex flex-col">
                  <div className="py-4 border-t border-divider">
                    <h4 className="text-[16px] font-semibold text-ink mb-1">A refund</h4>
                    <p className="text-[17px] text-body-text">The manufacturer buys the car back.</p>
                  </div>
                  <div className="py-4 border-t border-divider">
                    <h4 className="text-[16px] font-semibold text-ink mb-1">A replacement</h4>
                    <p className="text-[17px] text-body-text">You get a new car of the same kind.</p>
                  </div>
                  <div className="py-4 border-t border-divider">
                    <h4 className="text-[16px] font-semibold text-ink mb-1">A cash settlement</h4>
                    <p className="text-[17px] text-body-text">You keep the car and are paid for the trouble.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why people choose us */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">A local firm that keeps you informed</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text mb-2 lg:mb-8">Here&apos;s what you can count on from the first call.</p>
              <div className="hidden lg:block">
                <div className="text-[17px] font-semibold text-rk-green mb-1">Call (760) 338-9712</div>
                <div className="text-[15px] text-muted">Or send the form and we&apos;ll call you back.</div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="py-6 border-t lg:border-t-0 border-b border-divider flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <h3 className="text-[17px] font-semibold text-ink md:w-5/12">A local office in Victorville</h3>
                <p className="text-[17px] leading-[1.5] text-body-text md:w-7/12">
                  <span className="lg:hidden">You can meet us in person at our offices in Victorville or Pasadena.</span>
                  <span className="hidden lg:inline">Meet us in person at our offices in Victorville or Pasadena.</span>
                </p>
              </div>
              <div className="py-6 border-b border-divider flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <h3 className="text-[17px] font-semibold text-ink md:w-5/12">We speak English, Spanish, Czech, Russian, Slovak, and Armenian</h3>
                <p className="text-[17px] leading-[1.5] text-body-text md:w-7/12">
                  <span className="lg:hidden">Our staff can talk you and your family through every step in the language you&apos;re most comfortable with.</span>
                  <span className="hidden lg:inline">Our staff can walk you and your family through every step in the language you prefer.</span>
                </p>
              </div>
              <div className="py-6 border-b border-divider flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <h3 className="text-[17px] font-semibold text-ink md:w-5/12">Free review, no fee unless we win</h3>
                <p className="text-[17px] leading-[1.5] text-body-text md:w-7/12">Asking about your case costs nothing. On injury cases, you pay no attorney fees unless we win.</p>
              </div>
              <div className="py-6 border-b border-divider flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <h3 className="text-[17px] font-semibold text-ink md:w-5/12">We call you back</h3>
                <p className="text-[17px] leading-[1.5] text-body-text md:w-7/12">
                  <span className="lg:hidden">Leave a message or send the form, and someone from our team calls you back.</span>
                  <span className="hidden lg:inline">Leave a message or send the form, and someone from our team will call you back.</span>
                </p>
              </div>
              <div className="py-6 border-b lg:hidden border-divider flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <h3 className="text-[17px] font-semibold text-ink md:w-5/12">Lemon law fees paid by the manufacturer</h3>
                <p className="text-[17px] leading-[1.5] text-body-text md:w-7/12">In lemon law cases, California law generally requires the manufacturer to pay your attorney fees when you win.</p>
              </div>
            </div>
            
            <div className="block lg:hidden mt-2">
              <div className="text-[17px] font-semibold text-rk-green mb-1">Call (760) 338-9712</div>
              <div className="text-[15px] text-muted">Or send the form and we&apos;ll call you back.</div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ReviewsCarousel />

        {/* FAQ */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Common questions</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Don&apos;t see yours? Call us at (760) 338-9712 and ask. There&apos;s no charge.</p>
            </div>
            <div>
              <div className="border-t border-divider">
                <FaqAccordion 
                  question="How much does it cost to talk to you about my case?"
                  answer="Nothing. The case review is free, and there's no pressure to sign anything. We&apos;ll tell you plainly whether we think we can help."
                  defaultOpen={true}
                />
                <FaqAccordion question="Do I pay anything if we lose?" />
                <FaqAccordion question="How do I know if I have a case?" />
                <FaqAccordion question="Is there a deadline to file?" />
                <FaqAccordion question="Can I talk to someone in my native language?" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-2 lg:mb-4">From the blog</h2>
              <p className="text-[18px] lg:text-[20px] text-body-text">Plain answers to the questions we hear most, written by our team.</p>
            </div>
            <div className="hidden lg:block">
              <Link href="/blog"><Button variant="secondary">View all posts</Button></Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <PostCard 
                  imageSrc={post.imageSrc}
                  category={post.category}
                  title={post.title}
                  date={post.date}
                  readTime={post.readTime}
                />
              </Link>
            ))}
          </div>
          
          <div className="mt-8 lg:hidden">
            <Link href="/blog" className="text-[16px] font-semibold text-rk-green hover:underline">See all posts</Link>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto">
          <div className="border border-divider rounded-lg p-6 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-xl">
              <h2 className="text-[28px] lg:text-[32px] font-semibold text-ink mb-3 lg:mb-4">Know your rights, in plain language</h2>
              <p className="text-[17px] lg:text-[18px] text-body-text">
                Short updates on California Lemon law, personal injury law and workers&apos; comp. Unsubscribe anytime.
              </p>
            </div>
            <NewsletterForm className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto" />
          </div>
        </section>

        {/* Referral partners teaser */}
        <section className="px-4 lg:px-11 max-w-[1396px] mx-auto text-left lg:text-center">
          <div className="h-px bg-divider w-full mb-10 lg:mb-16" />
          <p className="text-[17px] text-body-text mb-2 lg:mb-0 lg:inline">
            Need help with something else? We can point you to firms we trust for cases outside Lemon law, personal injury law and workers&apos; comp.
          </p>
          <Link href="/blog" className="block lg:inline text-rk-green font-semibold hover:underline mt-2 lg:mt-0 lg:ml-2">See our referral partners</Link>
        </section>

        {/* CTA Band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24">
          <div className="max-w-[1396px] mx-auto bg-tint rounded-lg p-6 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[28px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Unsure if you have a case?</h2>
              <p className="text-[17px] lg:text-[20px] text-body-text">Tell us what happened. The review is free, and you pay nothing unless we win.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:7603389712" className="flex-1 sm:flex-none"><Button size="lg" className="w-full justify-center h-[52px]"><img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 brightness-0 invert" />Call (760) 338-9712</Button></a>
              <Link href="/contact" className="flex-1 sm:flex-none"><Button variant="secondary" size="lg" className="w-full justify-center h-[52px]">Start your free review</Button></Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
