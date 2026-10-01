import { Button } from './Button';
import Link from 'next/link';

export function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-divider p-4 flex items-center justify-between gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
      <a href="mailto:hello@rklegalcorp.com" className="flex-1">
        <Button variant="primary" className="w-full justify-center h-[52px]">
          <span className="flex items-center gap-2">
            <img src="/icons/icon-email.svg" alt="Email" className="w-5 h-5 brightness-0 invert" />
            Email us
          </span>
        </Button>
      </a>
      <Link href="/contact" className="flex-1">
        <Button variant="secondary" className="w-full justify-center h-[52px]">
          Free case review
        </Button>
      </Link>
    </div>
  );
}
