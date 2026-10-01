"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { trpc } from "@/trpc/client";
import { GoogleIcon } from "@/components/GoogleIcon";

export function BlogSidebar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const submitMutation = trpc.contact.submit.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Basic 10-digit validation
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setError("Enter a 10-digit phone number");
      return;
    }

    submitMutation.mutate({
      name,
      phone,
      happened: "Blog Sidebar form",
      note: "From blog sidebar",
    }, {
      onSuccess: () => {
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

  return (
    <aside className="lg:sticky lg:top-8">
      <div className="bg-tint rounded-lg p-6 lg:p-8 border border-divider">
        <h3 className="text-[20px] font-semibold text-ink mb-3">Free case review</h3>
        
        {isSuccess ? (
          <div className="transition-all duration-500 py-4">
            <div className="w-12 h-12 bg-white border-2 border-[#2D6A4F] rounded-full flex items-center justify-center mb-4">
              <GoogleIcon />
          </div>
          <span className="text-[14px] font-bold text-ink">5.0</span>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-3 h-3" />
            ))}
          </div>
          <span className="text-[13px] text-body-text ml-1">49 Google reviews</span>
        </div>

        {/* Testimonial */}
        <div className="mt-6 pt-6 border-t border-divider">
          <p className="text-[15px] text-body-text leading-[1.6] italic mb-3">
            &ldquo;They explained everything clearly, stayed on top of communication, and made a stressful situation much easier to deal with.&rdquo;
          </p>
          <p className="text-[14px] text-muted">Chris S.</p>
          <p className="text-[13px] text-muted">Google review</p>
        </div>
      </div>
    </aside>
  );
}
