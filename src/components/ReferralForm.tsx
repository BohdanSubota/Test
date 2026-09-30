"use client";

import { useState } from "react";
import { Button } from "./Button";
import { trpc } from "@/trpc/client";

export function ReferralForm() {
  const [selectedChip, setSelectedChip] = useState("Immigration");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  const submitMutation = trpc.contact.submit.useMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<Record<string, string> | null>(null);

  const chipOptions = [
    "Immigration", "Employment", "DUI", "Criminal defense", "Divorce",
    "Family law", "Business", "Litigation", "Estate planning, wills and trusts", "Something else"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Basic 10-digit validation for demo
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setError("Enter a 10-digit phone number, like (760) 555-0142");
      return;
    }

    submitMutation.mutate({
      name,
      phone,
      happened: selectedChip,
      note: "Referral Request",
    }, {
      onSuccess: () => {
        setSubmittedData({
          name,
          phone,
          happened: selectedChip,
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
          Thanks, {firstName}. We&apos;ve got your request.
        </h2>
        <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-10">
          We&apos;ll call you at {submittedData.phone} to talk through what you need. We&apos;ll suggest a firm we trust.
        </p>

        <div className="bg-tint rounded-lg p-6 lg:p-10 mb-10 border border-transparent">
          <h3 className="text-[16px] font-semibold text-ink mb-6">What you sent us</h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-[140px_1fr] items-baseline">
              <span className="text-[15px] text-muted">Help with</span>
              <span className="text-[16px] text-ink">{submittedData.happened}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-baseline">
              <span className="text-[15px] text-muted">Name</span>
              <span className="text-[16px] text-ink">{submittedData.name}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-baseline">
              <span className="text-[15px] text-muted">Phone</span>
              <span className="text-[16px] text-ink">{submittedData.phone}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className={`space-y-10 transition-opacity duration-300 ${isSending ? 'opacity-60 pointer-events-none' : ''}`} onSubmit={handleSubmit}>
      {error && (
        <div className="bg-[#FFF8F6] border border-[#B92A2A] rounded-[8px] p-4 flex gap-3 mb-2 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B92A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div>
            <h4 className="text-[16px] font-semibold text-[#B92A2A] mb-1">There&apos;s a problem</h4>
            <p className="text-[16px] text-[#B92A2A] underline cursor-pointer" onClick={() => document.getElementById('ref-phone-input')?.focus()}>{error}</p>
          </div>
        </div>
      )}

      <div>
        <div className="text-[16px] font-semibold text-ink mb-4">What do you need help with?</div>
        <div className="flex flex-wrap gap-3">
          {chipOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSelectedChip(opt)}
              className={`px-5 py-2.5 rounded-lg border text-[16px] transition-colors ${
                opt === selectedChip
                  ? 'bg-rk-green border-rk-green text-white font-semibold'
                  : 'bg-white border-chip-border text-ink hover:bg-tint font-medium'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[16px] font-semibold text-ink mb-2">Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Maria Lopez"
            required
            className="w-full border border-input-border rounded-[8px] px-4 py-3 text-[17px] text-ink focus:outline-none focus:border-rk-green focus:ring-1 focus:ring-rk-green bg-white"
          />
        </div>
        <div>
          <label className="block text-[16px] font-semibold text-ink mb-2">Phone number</label>
          <input
            id="ref-phone-input"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (error) setError(null);
            }}
            placeholder="(760) 555-0142"
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

      <Button size="lg" type="submit" disabled={isSending} className="w-full sm:w-auto justify-center h-[52px]">
        {isSending ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending
          </span>
        ) : (
          "Request a referral"
        )}
      </Button>

      <p className="text-[13.5px] leading-[1.5] text-muted max-w-2xl">
        By sending this, you agree we can call or text you about your referral. Message and data rates may apply. Sending this form doesn&apos;t make us your lawyers.
      </p>

      <div className="bg-tint rounded-lg p-6 border border-divider">
        <h4 className="text-[17px] font-semibold text-ink mb-2">Referrals are free to you</h4>
        <p className="text-[17px] text-body-text leading-[1.5]">
          You never pay us for a referral. If there&apos;s any fee arrangement between our firm and the firm we refer you to, we&apos;ll tell you about it in writing.
        </p>
        <p className="text-[14px] text-muted mt-2">[Confirm with John: fee arrangement wording]</p>
      </div>
    </form>
  );
}
