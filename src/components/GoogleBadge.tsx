import { GoogleIcon } from "./GoogleIcon";

export function GoogleBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center gap-2 bg-white rounded-full py-2.5 px-4 shadow-sm lg:shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-chip-border lg:border-none w-full lg:w-max lg:inline-flex lg:justify-start ${className}`}>
      <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
        <GoogleIcon className="w-5 h-5" />
      </div>
      <span className="text-[15px] lg:text-[17px] font-bold text-ink ml-1">5.0</span>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-4 h-4" />
        ))}
      </div>
      <span className="text-[16px] text-body-text ml-1">49 Google reviews</span>
    </div>
  );
}
