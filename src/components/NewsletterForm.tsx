"use client";

import { useState } from 'react';
import { Button } from './Button';
import { trpc } from '@/trpc/client';

export function NewsletterForm({ 
  className = "flex flex-col sm:flex-row gap-4 w-full lg:w-auto" 
}) {
  const [email, setEmail] = useState('');
  
  const subscribe = trpc.newsletter.subscribe.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    subscribe.mutate({ email });
  };

  if (subscribe.isSuccess) {
    return (
      <div className={`items-center text-rk-green font-medium flex gap-2 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        Thanks for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={subscribe.isPending}
        required
        className="w-full sm:w-[320px] border border-input-border rounded-sm px-4 py-3.5 text-[16px] text-ink focus:outline-none focus:border-rk-green bg-white disabled:opacity-70"
      />
      <Button 
        type="submit" 
        size="lg" 
        className="shrink-0 justify-center h-[52px] disabled:opacity-70"
        disabled={subscribe.isPending}
      >
        {subscribe.isPending ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
