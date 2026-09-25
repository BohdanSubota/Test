import { Button } from './Button';

export function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-divider p-4 flex items-center justify-between gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
      <Button variant="primary" className="flex-1 justify-center h-[52px]">
        <span className="flex items-center gap-2">
          <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
          Call now
        </span>
      </Button>
      <Button variant="secondary" className="flex-1 justify-center h-[52px]">
        Free case review
      </Button>
    </div>
  );
}
