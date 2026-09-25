import Link from 'next/link';
import { Button } from './Button';

export function Header() {
  return (
    <header className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:z-10 bg-white lg:bg-transparent border-b border-divider lg:border-none sticky top-0 z-50 w-full">
      <div className="max-w-[1396px] mx-auto px-5 lg:px-11 h-[72px] lg:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/icons/logo.svg" alt="Romero Kucerkova Law" className="hidden lg:block h-12 w-auto" />
          <img src="/icons/logo-small.svg" alt="Romero Kucerkova Law" className="block lg:hidden h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/personal-injury" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors">Personal injury</Link>
          <Link href="/lemon-law" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors">Lemon law</Link>
          <Link href="/workers-comp" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors">Workers&apos; comp</Link>
          <Link href="/about" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors">About</Link>
          <Link href="/blog" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors">Blog</Link>
          <Link href="/referral-partners" className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors">Referral partners</Link>
        </nav>

        {/* Desktop Call Button */}
        <div className="hidden lg:block">
          <Button variant="primary">
            <span className="flex items-center gap-2">
              <img src="/icons/icon-phone.svg" alt="Phone" className="w-4 h-4 brightness-0 invert" />
              Call (760) 338-9712
            </span>
          </Button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex lg:hidden items-center gap-3">
          <button className="w-10 h-10 bg-rk-green rounded-sm flex items-center justify-center text-white">
            <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
          </button>
          <button className="w-10 h-10 bg-white border border-chip-border rounded-sm flex items-center justify-center text-ink">
            <img src="/icons/icon-menu.svg" alt="Menu" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
