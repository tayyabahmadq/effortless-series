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
  metadataBase: new URL("https://effortless-series.pages.dev"),
  title: {
    default:
      "RGPV Notes & Syllabus — RGPV Digital Library (All Branches, All Subjects)",
    template: "%s | RGPV Digital Library",
  },
  description:
    "Free RGPV notes and syllabus for every B.Tech branch and subject code — unit-wise notes, diagrams, exam questions and study plans for the RGPV 2022 curriculum (Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal). 40 branches, 1,578 subjects, plus free certifications and live career portals.",
  keywords: [
    "RGPV notes",
    "RGPV syllabus",
    "RGPV notes pdf",
    "RGPV subject notes",
    "RGPV 2022 syllabus",
    "RGPV B.Tech notes",
    "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    "RGPV Bhopal",
    "RGPV previous year questions",
    "RGPV branch wise syllabus",
    "RGPV study material",
    "B.Tech notes",
  ],
  authors: [{ name: "Tayyab Ahmed" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "RGPV Notes & Syllabus — RGPV Digital Library",
    description:
      "Free unit-wise RGPV notes for every branch and subject code of the RGPV 2022 B.Tech curriculum — 40 branches, 1,578 subjects, chapter cards → topic cards → exam-ready content.",
    siteName: "RGPV Digital Library",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RGPV Notes & Syllabus — RGPV Digital Library",
    description:
      "Free unit-wise RGPV notes for every branch and subject code of the RGPV 2022 B.Tech curriculum.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
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
