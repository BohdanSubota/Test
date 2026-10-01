"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.innerWidth < 1024) return;
    if (sessionStorage.getItem("exitIntentShown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves from the top of the window
      if (e.clientY <= 5) {
        setIsOpen(true);
        sessionStorage.setItem("exitIntentShown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] hidden lg:flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[500px] p-8 relative shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted hover:text-ink transition-colors p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h3 className="text-[28px] font-semibold text-ink leading-[1.2] mb-4">
          Not sure if you have a case?
        </h3>
        <p className="text-[17px] text-body-text leading-[1.5] mb-8">
          Don&apos;t leave without finding out. Send us an email and we&apos;ll review your situation for free, with no obligations.
        </p>

        <div className="space-y-4">
          <a href="mailto:hello@rklegalcorp.com" className="block w-full" onClick={() => setIsOpen(false)}>
            <Button size="lg" className="w-full justify-center h-[52px]">
              <span className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 4.5H15.75C16.1642 4.5 16.5 4.83579 16.5 5.25V12.75C16.5 13.1642 16.1642 13.5 15.75 13.5H2.25C1.83579 13.5 1.5 13.1642 1.5 12.75V5.25C1.5 4.83579 1.83579 4.5 2.25 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 5.25L9 9.75L1.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Email hello@rklegalcorp.com
              </span>
            </Button>
          </a>
          <button 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center text-[16px] font-medium text-muted hover:text-ink transition-colors py-2"
          >
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
