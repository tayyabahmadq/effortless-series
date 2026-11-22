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
  title: "RGPV Digital Library — Syllabus, Study Content, Certifications & Careers",
  description:
    "The RGPV Digital Library: the complete RGPV 2022 B.Tech curriculum — 40 branches, 1,578 subjects, organized as syllabus → chapter cards → topic cards → exam-ready content — plus free certifications and live government, PSU and industry career portals.",
  keywords: [
    "RGPV",
    "RGPV syllabus",
    "RGPV 2022 curriculum",
    "B.Tech",
    "academic library",
    "AI and Data Science",
    "study content",
    "exam preparation",
    "free certifications",
    "RGPV jobs",
  ],
  authors: [{ name: "Tayyab Ahmed" }],
  openGraph: {
    title: "RGPV Digital Library",
    description:
      "The complete RGPV 2022 curriculum as an interactive study library — 40 branches, 1,578 subjects, chapter cards → topic cards → content.",
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
