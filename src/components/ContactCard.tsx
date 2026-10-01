export function ContactCard() {
  return (
    <div className="bg-tint rounded-lg p-6 lg:p-12">
      <h3 className="text-[24px] lg:text-[32px] font-semibold text-ink mb-4">Rather talk it through?</h3>
      <p className="text-[17px] leading-[1.5] text-body-text mb-6 lg:mb-8">
        Call us and tell us what happened. It&apos;s free, and there&apos;s no pressure to sign anything.
      </p>
      
      <div className="mb-6 lg:mb-8">
        <a href="mailto:hello@rklegalcorp.com" className="text-[20px] lg:text-[24px] font-semibold text-rk-green block mb-1">
          hello@rklegalcorp.com
        </a>
        <a href="tel:7603389712" className="text-[17px] text-rk-green block">
          (760) 338-9712
        </a>
      </div>

      <hr className="border-divider my-6 lg:my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 lg:mb-8">
        <div>
          <h4 className="text-[17px] font-semibold text-ink mb-2">Victorville Office</h4>
          <p className="text-[17px] leading-[1.5] text-body-text">
            16888 Nisqualli Rd., Suite 200-13<br />
            Victorville, CA 92395
          </p>
        </div>
        <div>
          <h4 className="text-[17px] font-semibold text-ink mb-2">Pasadena Office</h4>
          <p className="text-[17px] leading-[1.5] text-body-text">
            Pasadena, CA<br />
            (Address pending)
          </p>
        </div>
      </div>

      <div className="mb-6 lg:mb-8">
        <h4 className="text-[17px] font-semibold text-ink mb-2">We speak</h4>
        <p className="text-[17px] leading-[1.5] text-body-text">English, Spanish, Czech, Russian, Slovak, and Armenian</p>
      </div>

      <hr className="border-divider my-6 lg:my-8" />

      <div>
        <p className="text-[17px] leading-[1.5] italic text-body-text mb-4">
          &quot;They have Armenian speakers who were able to communicate with my mother-in-law and guide us every step of the way when the insurance companies were taking advantage of us.&quot;
        </p>
        <p className="text-[15px] font-medium text-ink">John M., client review</p>
      </div>
    </div>
  );
}
