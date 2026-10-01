"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { href: "/personal-injury", label: "Personal injury" },
    { href: "/lemon-law", label: "Lemon law" },
    { href: "/workers-comp", label: "Workers' comp" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/referral-partners", label: "Referral partners" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:z-10 bg-white lg:bg-transparent border-b border-divider lg:border-none sticky top-0 z-50 w-full">
        <div className="max-w-[1396px] mx-auto px-5 lg:px-11 h-[72px] lg:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img src="/icons/logo.svg" alt="Romero Kucerkova Law" className="hidden lg:block h-12 w-auto" />
            <img src="/icons/logo.svg" alt="Romero Kucerkova Law" className="block lg:hidden h-[30px] w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.slice(0, 6).map(link => (
              <Link key={link.href} href={link.href} className="text-[16px] font-medium text-ink hover:text-rk-green transition-colors">{link.label}</Link>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <div className="hidden lg:block">
            <a href="tel:7603389712">
              <Button variant="primary">
                <span className="flex items-center gap-2">
                  <img src="/icons/icon-phone.svg" alt="Phone" className="w-4 h-4 brightness-0 invert" />
                  Call (760) 338-9712
                </span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:7603389712" className="w-10 h-10 bg-rk-green rounded-sm flex items-center justify-center text-white hover:bg-rk-green-hover transition-colors">
              <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
            </a>
            <button 
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 bg-white border border-chip-border rounded-sm flex items-center justify-center text-ink hover:bg-tint transition-colors"
            >
              <img src="/icons/icon-menu.svg" alt="Menu" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden">
          {/* Menu Header (same height and layout as standard header) */}
          <div className="px-5 h-[72px] flex items-center justify-between border-b border-divider shrink-0">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img src="/icons/logo.svg" alt="Romero Kucerkova Law" className="h-[30px] w-auto object-contain" />
            </Link>
            
            <div className="flex items-center gap-3">
              <a href="tel:7603389712" className="w-10 h-10 bg-rk-green rounded-sm flex items-center justify-center text-white hover:bg-rk-green-hover transition-colors">
                <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 brightness-0 invert" />
              </a>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-white border border-chip-border rounded-sm flex items-center justify-center text-ink hover:bg-tint transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-[22px] font-semibold text-ink py-4 border-b border-divider last:border-none"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="mt-8 flex flex-col gap-4">
              <span className="text-[13px] text-muted font-semibold uppercase tracking-wider">Contact Us</span>
              <a href="tel:7603389712" className="text-[18px] font-medium text-ink flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-tint flex items-center justify-center">
                  <img src="/icons/icon-phone.svg" alt="Phone" className="w-[18px] h-[18px]" />
                </span>
                (760) 338-9712
              </a>
              <a href="mailto:hello@rklegalcorp.com" className="text-[18px] font-medium text-ink flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-tint flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                hello@rklegalcorp.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
