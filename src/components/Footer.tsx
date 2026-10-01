import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-divider pt-16 pb-8 px-5 lg:px-11">
      <div className="max-w-[1396px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center mb-6">
              <img src="/icons/logo.svg" alt="Romero Kucerkova Law" className="h-10 w-auto" />
            </Link>
            <p className="text-[17px] text-body-text leading-[1.5]">
              A local Victorville firm helping people with lemon law, personal injury law and workers&apos; comp claims across Southern California.
            </p>
          </div>

          {/* Practice areas */}
          <div>
            <h3 className="text-[16px] font-semibold text-ink mb-6">Practice areas</h3>
            <ul className="space-y-4">
              <li><Link href="/personal-injury" className="text-[16px] text-body-text hover:text-rk-green">Personal injury</Link></li>
              <li><Link href="/lemon-law" className="text-[16px] text-body-text hover:text-rk-green">Lemon law</Link></li>
              <li><Link href="/workers-comp" className="text-[16px] text-body-text hover:text-rk-green">Workers&apos; comp</Link></li>
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h3 className="text-[16px] font-semibold text-ink mb-6">Firm</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[16px] text-body-text hover:text-rk-green">About</Link></li>
              <li><Link href="/blog" className="text-[16px] text-body-text hover:text-rk-green">Blog</Link></li>
              <li><Link href="/newsletter" className="text-[16px] text-body-text hover:text-rk-green">Newsletter</Link></li>
              <li><Link href="/referral-partners" className="text-[16px] text-body-text hover:text-rk-green">Referral partners</Link></li>
              <li><Link href="/contact" className="text-[16px] text-body-text hover:text-rk-green">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[16px] font-semibold text-ink mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@rklegalcorp.com" className="text-[16px] font-semibold text-rk-green hover:text-rk-green-hover transition-colors">
                  hello@rklegalcorp.com
                </a>
              </li>
              <li className="text-[16px] text-body-text">(760) 338-9712</li>
              <li className="text-[16px] text-body-text leading-[1.4]">
                <strong className="font-semibold text-ink">Victorville Office:</strong><br/>
                16888 Nisqualli Rd., Suite 200-13<br/>Victorville, CA 92395
              </li>
              <li className="text-[16px] text-body-text leading-[1.4]">
                <strong className="font-semibold text-ink">Pasadena Office:</strong><br/>
                Pasadena, CA<br/>(Address pending)
              </li>
              <li className="text-[16px] text-body-text">We speak English, Spanish, Czech, Russian, Slovak, and Armenian</li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-divider w-full mb-8" />

        {/* Disclosures */}
        <div className="space-y-4 mb-8">
          <p className="text-[13.5px] text-body-text leading-[1.5]">
            Attorney advertising. The attorney responsible for the content of this website is Ludmila Kucerkova Romero, Romero Kucerkova Law Corp, APC, 16888 Nisqualli Rd., Suite 200-13, Victorville, CA 92395.
          </p>
          <p className="text-[13.5px] text-body-text leading-[1.5]">
            Personal injury matters are handled on a contingency fee basis: no attorney fees unless we obtain a recovery for you. You may still be responsible for certain costs, and for costs awarded to an opposing party in some cases. In workers&apos; compensation matters, attorney fees are set and approved by the Workers&apos; Compensation Appeals Board. In lemon law matters, a prevailing buyer&apos;s attorney fees are generally recoverable from the manufacturer under California Civil Code section 1794(d).
          </p>
          <p className="text-[13.5px] text-body-text leading-[1.5]">
            No result is guaranteed. Prior results do not guarantee a similar outcome.
          </p>
          <p className="text-[13.5px] text-body-text leading-[1.5]">
            The information on this website is general information, not legal advice. Contacting us does not create an attorney-client relationship. Please do not send confidential information until an attorney-client relationship has been established in writing.
          </p>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
          <p className="text-[13.5px] text-body-text">© 2026 Romero Kucerkova Law Corp, APC. RK Legal Corp.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[13.5px] text-body-text hover:text-rk-green">Privacy policy</Link>
            <Link href="/terms" className="text-[13.5px] text-body-text hover:text-rk-green">Terms</Link>
            <Link href="/accessibility" className="text-[13.5px] text-body-text hover:text-rk-green">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
