"use client";

import { useState } from "react";
import { Button } from "./Button";

type CaseReviewFormProps = {
  /** The Figma screens use a deliberately blank contact form, but a filled-in
   * example on the practice-area pages. */
  variant?: "example" | "contact" | "workers";
  compactAction?: boolean;
};

export function CaseReviewForm({ variant = "example", compactAction = false }: CaseReviewFormProps) {
  const [happened, setHappened] = useState("Car accident");
  const [when, setWhen] = useState("This week");

  const happenedOptions = [
    "Car accident", "Motorcycle", "Truck", "Uber or Lyft", "Hurt at work", 
    "Pedestrian", "Dog bite", "Slip and fall", "Lemon car", "Something else"
  ];
  
  const whenOptions = [
    "This week", "This month", "This year", "Over a year ago"
  ];

  const isContact = variant === "contact";
  const isWorkers = variant === "workers";
  const nameValue = isContact ? undefined : isWorkers ? undefined : "Maria Lopez";
  const phoneValue = isContact ? undefined : isWorkers ? undefined : "(760) 555-0142";
  const noteValue = isContact ? undefined : isWorkers ? "Hurt my back lifting boxes at the warehouse in March. The insurer just denied my claim." : "Rear-ended on the I-15 last Tuesday. Their insurance keeps calling me.";

  return (
    <form className="space-y-7 lg:space-y-8" onSubmit={(e) => e.preventDefault()}>
      {/* What happened */}
      <div>
        <div className="text-[16px] font-semibold text-ink mb-4">What happened?</div>
        <div className="flex flex-wrap gap-3">
          {happenedOptions.map((opt) => (
            <button 
              key={opt}
              type="button"
              onClick={() => setHappened(opt)}
              className={`px-4 py-2 rounded-lg border text-[16px] transition-colors ${
                opt === happened 
                  ? 'bg-rk-green border-rk-green text-white font-semibold' 
                  : 'bg-white border-chip-border text-ink hover:bg-tint font-medium'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* When did it happen */}
      <div>
        <div className="text-[16px] font-semibold text-ink mb-4">When did it happen?</div>
        <div className="flex flex-wrap gap-3">
          {whenOptions.map((opt) => (
            <button 
              key={opt}
              type="button"
              onClick={() => setWhen(opt)}
              className={`px-4 py-2 rounded-lg border text-[16px] transition-colors ${
                opt === when 
                  ? 'bg-rk-green border-rk-green text-white font-semibold' 
                  : 'bg-white border-chip-border text-ink hover:bg-tint font-medium'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[16px] font-semibold text-ink mb-2">Your name</label>
          <input 
            type="text" 
            defaultValue={nameValue}
            placeholder={isWorkers ? "First and last name" : "Your full name"}
            className="w-full border border-input-border rounded-lg px-4 py-3 text-[17px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white"
          />
        </div>
        <div>
          <label className="block text-[16px] font-semibold text-ink mb-2">Phone number</label>
          <input 
            type="tel" 
            defaultValue={phoneValue}
            placeholder={isWorkers ? "(760) 000-0000" : "(760) 555-0142"}
            className="w-full border border-input-border rounded-lg px-4 py-3 text-[17px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white"
          />
        </div>
      </div>

      {/* Anything else */}
      <div>
        <label className="block text-[16px] font-semibold text-ink mb-2">Anything else? (optional)</label>
        <textarea 
          rows={3}
          defaultValue={noteValue}
          className="w-full border border-input-border rounded-lg px-4 py-3 text-[17px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white resize-none"
        />
      </div>

      <Button size="lg" type="submit" className={`${compactAction ? "w-auto px-8" : "w-full lg:w-max lg:px-8"} justify-center h-[52px]`}>Request my free review</Button>

      <p className="text-[13.5px] leading-[1.5] text-muted max-w-2xl">
        By sending this, you agree we can call or text you about your case. Message and data rates may apply. This form doesn&apos;t make us your lawyers yet.
      </p>
    </form>
  );
}
