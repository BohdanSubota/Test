import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/trpc/Provider";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romero Kucerkova Law",
  description: "Personal injury, lemon law and workers' comp claims across Southern California.",
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
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
