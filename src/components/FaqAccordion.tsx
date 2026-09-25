"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer?: string;
  defaultOpen?: boolean;
}

export function FaqAccordion({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-divider py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between text-left gap-4"
      >
        <span className="text-[20px] font-semibold text-ink">{question}</span>
        <img 
          src={isOpen ? "/icons/icon-minus.svg" : "/icons/icon-plus.svg"} 
          alt={isOpen ? "Collapse" : "Expand"} 
          className="w-6 h-6 flex-shrink-0 mt-1" 
        />
      </button>
      
      {isOpen && answer && (
        <div className="mt-4 pr-10">
          <p className="text-[17px] text-body-text leading-[1.5]">{answer}</p>
        </div>
      )}
    </div>
  );
}
