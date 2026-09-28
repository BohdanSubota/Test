"use client";

import { Button } from "@/components/Button";

export function BlogSidebar() {
  return (
    <aside className="lg:sticky lg:top-8">
      <div className="bg-tint rounded-lg p-6 lg:p-8 border border-divider">
        <h3 className="text-[20px] font-semibold text-ink mb-3">Free case review</h3>
        <p className="text-[17px] text-body-text leading-[1.5] mb-6">
          Hurt in a crash? Tell us what happened and we&apos;ll call you back. No win, no fee. You pay nothing unless we win your case.
        </p>

        <a
          href="tel:7603389712"
          className="flex items-center justify-center gap-2 w-full bg-rk-green text-white text-[16px] font-semibold rounded-lg py-3.5 mb-4 hover:bg-rk-green/90 transition-colors"
        >
          <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
          Call (760) 338-9712
        </a>

        <p className="text-[15px] text-muted mb-6 text-center">
          Or leave your number and we&apos;ll call you back. We speak English and Armenian.
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[15px] font-semibold text-ink mb-1.5">Your name</label>
            <input
              type="text"
              placeholder="First and last name"
              className="w-full border border-input-border rounded-lg px-4 py-3 text-[16px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white"
            />
          </div>
          <div>
            <label className="block text-[15px] font-semibold text-ink mb-1.5">Phone number</label>
            <input
              type="tel"
              placeholder="(760) 555-0142"
              className="w-full border border-input-border rounded-lg px-4 py-3 text-[16px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white"
            />
          </div>
          <Button type="submit" size="lg" className="w-full justify-center h-[52px]">
            Request my free review
          </Button>
        </form>

        <p className="text-[12px] text-muted mt-4 leading-[1.5]">
          By sending this, you agree we can call or text you about your case. Message and data rates may apply. This form doesn&apos;t make us your lawyers yet.
        </p>

        {/* Google Badge */}
        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-divider">
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

        {/* Testimonial */}
        <div className="mt-6 pt-6 border-t border-divider">
          <p className="text-[15px] text-body-text leading-[1.6] italic mb-3">
            &ldquo;They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.&rdquo;
          </p>
          <p className="text-[14px] text-muted">Chris S.</p>
          <p className="text-[13px] text-muted">Google review</p>
        </div>
      </div>
    </aside>
  );
}
