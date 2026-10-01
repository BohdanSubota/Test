"use client";

import { useState } from "react";
import { Button } from "./Button";
import { trpc } from "@/trpc/client";

type CaseReviewFormProps = {
  variant?: "example" | "contact" | "workers";
  compactAction?: boolean;
};

export function CaseReviewForm({ variant = "example", compactAction = false }: CaseReviewFormProps) {
  const [happened, setHappened] = useState("Car accident");
  const [when, setWhen] = useState("This week");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  const submitMutation = trpc.contact.submit.useMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<Record<string, string> | null>(null);
  const [showNote, setShowNote] = useState(false);

  const happenedOptions = [
    "Car accident", "Motorcycle", "Truck", "Uber or Lyft", "Hurt at work", 
    "Pedestrian", "Dog bite", "Slip and fall", "Lemon car", "Something else"
  ];
  const happenedOptionsMobile = [
    "Car accident", "Lemon car", "Hurt at work", "Truck or rideshare", "Slip and fall", "Something else"
  ];
  
  const whenOptions = [
    "This week", "This month", "This year", "Over a year ago"
  ];

  const isContact = variant === "contact";
  const isWorkers = variant === "workers";
  const defaultName = "";
  const defaultPhone = "";
  const defaultNote = "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const finalName = name || defaultName;
    const finalPhone = phone || defaultPhone;
    const finalNote = note || defaultNote;

    // Basic 10-digit validation for demo
    const digitsOnly = finalPhone.replace(/\D/g, '');
    if (digitsOnly.length < 10 && finalPhone.length > 0) {
      setError("Enter a 10-digit phone number, like (760) 555-0142");
      return;
    }

    submitMutation.mutate({
      name: finalName,
      phone: finalPhone,
      happened,
      when,
      note: finalNote,
    }, {
      onSuccess: () => {
        setSubmittedData({
          name: finalName,
          phone: finalPhone,
          happened,
          when,
          note: finalNote
        });
        setIsSuccess(true);
      },
      onError: (err) => {
        try {
          const parsed = JSON.parse(err.message);
          if (Array.isArray(parsed) && parsed[0]?.message) {
            setError(parsed[0].message);
            return;
          }
        } catch(e) {}
        setError("Something went wrong. Please try again.");
      }
    });
  };

  const isSending = submitMutation.isPending;

  if (isSuccess && submittedData) {
    const firstName = submittedData.name.split(' ')[0] || "there";
    return (
      <div className="transition-all duration-500">
        <div className="w-16 h-16 bg-tint rounded-full flex items-center justify-center mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        <h2 className="text-[36px] lg:text-[44px] font-semibold text-ink leading-[1.1] tracking-[-0.01em] mb-4">
          Thanks, {firstName}. We&apos;ve got your case.
        </h2>
        <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-10">
          We&apos;ll call you at {submittedData.phone} to talk through what happened. The review is free, and there&apos;s nothing to sign on this call.
        </p>

        {/* Summary card */}
        <div className="bg-tint rounded-lg p-6 lg:p-10 mb-10 border border-transparent">
          <h3 className="text-[16px] font-semibold text-ink mb-6">What you sent us</h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-[140px_1fr] items-baseline">
              <span className="text-[15px] text-muted">What happened</span>
              <span className="text-[16px] text-ink">{submittedData.happened}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-baseline">
              <span className="text-[15px] text-muted">When</span>
              <span className="text-[16px] text-ink">{submittedData.when}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-baseline">
              <span className="text-[15px] text-muted">Name</span>
              <span className="text-[16px] text-ink">{submittedData.name}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-baseline">
              <span className="text-[15px] text-muted">Phone</span>
              <span className="text-[16px] text-ink">{submittedData.phone}</span>
            </div>
            {submittedData.note && (
              <div className="grid grid-cols-[140px_1fr] items-baseline">
                <span className="text-[15px] text-muted">Your note</span>
                <span className="text-[16px] text-ink leading-[1.5]">{submittedData.note}</span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-divider pt-8">
          <h4 className="text-[16px] font-semibold text-ink mb-4">Hurt badly or it&apos;s urgent? Call instead.</h4>
          <a href="tel:7603389712" className="inline-block">
            <Button variant="secondary" size="lg" className="h-[52px] px-8 bg-white text-ink border-chip-border hover:bg-tint">
              Call (760) 338-9712 now
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className={`space-y-7 lg:space-y-8 transition-opacity duration-300 ${isSending ? 'opacity-60 pointer-events-none' : ''}`} onSubmit={handleSubmit}>
      {/* Error banner */}
      {error && (
        <div className="bg-[#FFF8F6] border border-[#B92A2A] rounded-[8px] p-4 flex gap-3 mb-2 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B92A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div>
            <h4 className="text-[16px] font-semibold text-[#B92A2A] mb-1">There&apos;s a problem</h4>
            <p className="text-[16px] text-[#B92A2A] underline cursor-pointer" onClick={() => document.getElementById('phone-input')?.focus()}>{error}</p>
          </div>
        </div>
      )}

      {/* What happened */}
      <div>
        <div className="text-[16px] font-semibold text-ink mb-4">What happened?</div>
        <div>
          {/* Mobile options */}
          <div className="flex lg:hidden flex-wrap gap-3">
            {happenedOptionsMobile.map((opt) => (
              <button 
                key={opt}
                type="button"
                onClick={() => setHappened(opt)}
                className={`px-5 py-2.5 rounded-lg border text-[16px] transition-colors ${
                  opt === happened 
                    ? 'bg-rk-green border-rk-green text-white font-semibold' 
                    : 'bg-white border-chip-border text-ink hover:bg-tint font-medium'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {/* Desktop options */}
          <div className="hidden lg:flex flex-wrap gap-3">
            {happenedOptions.map((opt) => (
              <button 
                key={opt}
                type="button"
                onClick={() => setHappened(opt)}
                className={`px-5 py-2.5 rounded-lg border text-[16px] transition-colors ${
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
              className={`px-5 py-2.5 rounded-lg border text-[16px] transition-colors ${
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
            defaultValue={defaultName}
            onChange={(e) => setName(e.target.value)}
            placeholder={isWorkers ? "First and last name" : "Maria Lopez"}
            required
            className="w-full border border-input-border rounded-[8px] px-4 py-3 text-[17px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white"
          />
        </div>
        <div>
          <label className="block text-[16px] font-semibold text-ink mb-2">Phone number</label>
          <input 
            id="phone-input"
            type="tel" 
            defaultValue={defaultPhone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (error) setError(null);
            }}
            placeholder={isWorkers ? "(760) 000-0000" : "(760) 555-0142"}
            required
            className={`w-full border rounded-[8px] px-4 py-3 text-[17px] text-ink focus:outline-none focus:ring-1 bg-white transition-colors ${
              error ? 'border-[#B92A2A] bg-[#FFF8F6] focus:border-[#B92A2A] focus:ring-[#B92A2A]' : 'border-input-border focus:border-rk-green focus:ring-rk-green'
            }`}
          />
          {error && (
            <div className="flex items-center gap-1.5 mt-2 text-[#B92A2A]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span className="text-[14px] font-medium">{error}</span>
            </div>
          )}
        </div>
      </div>

      {/* Anything else */}
      <div className="lg:hidden">
        {!showNote ? (
          <button 
            type="button" 
            onClick={() => setShowNote(true)}
            className="flex items-center gap-2 text-[16px] font-semibold text-rk-green hover:text-rk-green-hover transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add details (optional)
          </button>
        ) : (
          <div>
            <label className="block text-[16px] font-semibold text-ink mb-2">Anything else? (optional)</label>
            <textarea 
              rows={3}
              defaultValue={defaultNote}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Tell us what happened..."
              className="w-full border border-input-border rounded-[8px] px-4 py-3 text-[17px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white resize-none"
              autoFocus
            />
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <label className="block text-[16px] font-semibold text-ink mb-2">Anything else? (optional)</label>
        <textarea 
          rows={3}
          defaultValue={defaultNote}
          onChange={(e) => setNote(e.target.value)}
          placeholder={isWorkers ? "Hurt my back lifting boxes at the warehouse in March. The insurer just denied my claim." : "Rear-ended on the I-15 last Tuesday. Their insurance keeps calling me."}
          className="w-full border border-input-border rounded-[8px] px-4 py-3 text-[17px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white resize-none"
        />
      </div>

      <Button size="lg" type="submit" disabled={isSending} className={`${compactAction ? "w-auto px-8" : "w-full lg:w-max lg:px-10"} justify-center h-[52px]`}>
        {isSending ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending
          </span>
        ) : (
          "Request my free review"
        )}
      </Button>

      <p className="text-[13.5px] leading-[1.5] text-muted max-w-2xl">
        By sending this, you agree we can call or text you about your case. Message and data rates may apply. This form doesn&apos;t make us your lawyers yet.
      </p>
    </form>
  );
}
