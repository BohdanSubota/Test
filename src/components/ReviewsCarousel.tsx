"use client";

import { useRef } from "react";
import { ReviewCard } from "./ReviewCard";
import { GoogleIcon } from "@/components/GoogleIcon";

export function ReviewsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 lg:py-24 overflow-hidden border-t border-divider lg:border-none max-w-[1440px] mx-auto">
      <div className="max-w-[1396px] mx-auto px-4 lg:px-11 mb-8 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-2 lg:mb-4">
              <span className="hidden lg:inline">What our clients say on Google</span>
              <span className="lg:hidden">What our clients say</span>
            </h2>
            
            <p className="block lg:hidden text-[18px] text-body-text mb-6">
              Every one of our 49 Google reviews gives us five stars. Here are a few, in their own words.
            </p>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 bg-white rounded-md lg:bg-transparent lg:rounded-none px-3 py-2 lg:p-0 border border-chip-border lg:border-none shadow-sm lg:shadow-none w-max">
                <GoogleIcon />
                <span className="text-[15px] lg:text-[24px] font-bold lg:font-semibold text-ink ml-1">5.0</span>
                <div className="flex items-center gap-0.5 ml-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
                  ))}
                </div>
                <span className="text-[13px] font-medium text-body-text ml-2 block lg:hidden">49 Google reviews</span>
              </div>
              <span className="text-[16px] text-body-text hidden lg:block">Based on 49 Google reviews</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://google.com/search?q=Romero+Kucerkova+Law" target="_blank" className="text-[16px] font-semibold text-rk-green hover:underline">Read all reviews on Google</a>
            <div className="flex gap-2">
              <button onClick={scrollLeft} className="w-10 h-10 rounded-full border border-chip-border flex items-center justify-center text-ink hover:bg-tint transition-colors">&lsaquo;</button>
              <button onClick={scrollRight} className="w-10 h-10 rounded-full border border-chip-border flex items-center justify-center text-ink hover:bg-tint transition-colors">&rsaquo;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden lg:block w-full overflow-x-auto no-scrollbar pb-8" ref={containerRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-6 min-w-max pb-4 pr-11" style={{ paddingLeft: 'max(44px, calc((min(100%, 1440px) - 1396px) / 2 + 44px))' }}>
          <ReviewCard 
            name="Giovanni J."
            time="a year ago"
            text="Many other lawyers rejected my case, but they didn&apos;t. On the contrary, they accepted it and fought strategically for me. They resolved my car accident case without me having to lift a finger and secured me a very good compensation."
            chips={["Car accident"]}
            translated={true}
            avatarInitial="G"
            avatarBg="#795548"
          />
          <ReviewCard 
            name="Connor H."
            time="a year ago"
            text="The team took the time to explain every step of the process in plain language, so we always felt informed and confident about what was happening. ... They made a very difficult time much easier for our family."
            chips={[]}
            avatarInitial="C"
            avatarBg="#673AB7"
          />
          <ReviewCard 
            name="Ani S."
            time="5 months ago"
            text="Their team was professional, responsive, and kept me informed throughout the entire process. What really stood out was how much they genuinely cared and made a stressful situation feel manageable."
            chips={[]}
            avatarImg="/images/img-4.png"
          />
          <ReviewCard 
            name="Raul H."
            time="3 years ago"
            text="Their team was responsive ... I ended up with great treatment and a more than fair settlement. Thank you."
            chips={["Personal injury"]}
            avatarImg="/images/img-2.png"
          />
          <ReviewCard 
            name="Katie B."
            time="5 months ago"
            text="Everything was great from the very beginning. The team was responsive and they kept me updated throughout the process, which gave me confidence."
            chips={[]}
            avatarImg="/images/img-6.png"
          />
        </div>
      </div>
      
      {/* Mobile Vertical List */}
      <div className="block lg:hidden px-4 flex flex-col gap-4">
        <div className="bg-tint rounded-lg p-6 flex flex-col">
          <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map(i => <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-[18px] h-[18px]" />)}
          </div>
          <p className="text-[17px] text-body-text leading-[1.5] mb-6">
            &ldquo;Many other lawyers rejected my case, but they didn&apos;t. On the contrary, they accepted it and fought strategically for me. They resolved my car accident case without me having to lift a finger and secured me a very good compensation.&rdquo;
          </p>
          <div className="text-[15px] font-medium text-ink mb-0.5">Giovanni J.</div>
          <div className="text-[15px] text-body-text">Google review, translated by Google</div>
        </div>

        <div className="bg-tint rounded-lg p-6 flex flex-col">
          <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map(i => <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-[18px] h-[18px]" />)}
          </div>
          <p className="text-[17px] text-body-text leading-[1.5] mb-6">
            &ldquo;They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.&rdquo;
          </p>
          <div className="text-[15px] font-medium text-ink mb-0.5">Chris S.</div>
          <div className="text-[15px] text-body-text">Google review</div>
        </div>

        <div className="bg-tint rounded-lg p-6 flex flex-col">
          <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map(i => <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-[18px] h-[18px]" />)}
          </div>
          <p className="text-[17px] text-body-text leading-[1.5] mb-6">
            &ldquo;Everything was clearly explained and they kept me informed throughout the entire process, which gave me peace of mind and confidence proceeding forward.&rdquo;
          </p>
          <div className="text-[15px] font-medium text-ink mb-0.5">Katie S.</div>
          <div className="text-[15px] text-body-text">Google review</div>
        </div>
        
        <a href="https://google.com/search?q=Romero+Kucerkova+Law" target="_blank" className="text-[16px] font-semibold text-rk-green hover:underline mt-2 inline-block">Read all 49 reviews on Google</a>
      </div>
    </section>
  );
}
