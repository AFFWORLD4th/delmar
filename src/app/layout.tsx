import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Delmar Services | Global Maritime & Business Support",
  description: "Flexible and reliable support solutions across maritime operations, logistics, sourcing, and business coordination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-1 w-full">
          {children}
        </main>
        <WhatsAppButton />
        <SiteFooter />
      </body>
    </html>
  );
}
