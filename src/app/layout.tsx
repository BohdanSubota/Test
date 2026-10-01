import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/trpc/Provider";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romero Kucerkova Law",
  description: "Lemon law, personal injury law and workers' comp claims across Southern California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased bg-white text-ink font-sans`}>
        <TRPCProvider>
          <ExitIntentPopup />
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
