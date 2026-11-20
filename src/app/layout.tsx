import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Effortless Series · 13 Books for the 2026 Software Engineer",
  description:
    "If I were to start my career in Software engineering in 2026, this is how I would have done it effortlessly. Thirteen books, 182 chapters, one goal: make you the engineer who ships things that do not fall over. By Tayyab Ahmed, AI and Weight-Space Engineer.",
  keywords: [
    "software engineering",
    "system design",
    "databases",
    "encryption",
    "authentication",
    "security",
    "networking",
    "scaling",
    "deployment",
    "monitoring",
    "Tayyab Ahmed",
    "Effortless Series",
    "2026",
  ],
  authors: [{ name: "Tayyab Ahmed" }],
  openGraph: {
    title: "The Effortless Series · 13 Books for the 2026 Software Engineer",
    description:
      "Thirteen books, 182 chapters, one goal: make you the engineer who ships things that do not fall over.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body
        className={`${interSans.variable} ${playfair.variable} ${jetbrains.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
