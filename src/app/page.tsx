import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { OverviewPage } from "@/components/library/overview-page";

export const metadata: Metadata = {
  title: "RGPV Notes & Syllabus — RGPV Digital Library (All Branches, All Subjects)",
  description:
    "Free RGPV notes for every B.Tech branch and subject code of the RGPV 2022 curriculum — unit-wise notes, diagrams, exam questions and study plans, plus free certifications and live career portals. 40 branches, 1,578 subjects.",
  alternates: { canonical: "/" },
};

function SiteJsonLd() {
  const base = "https://effortless-series.pages.dev";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "RGPV Digital Library",
        alternateName: "Effortless Academic Library",
        url: base,
        description:
          "Free RGPV notes and syllabus for every B.Tech branch and subject code of the RGPV 2022 curriculum, with free certifications and live career portals.",
        inLanguage: "en",
        publisher: {
          "@type": "Organization",
          name: "RGPV Digital Library",
          url: base,
        },
      },
      {
        "@type": "Organization",
        name: "RGPV Digital Library",
        url: base,
        description:
          "An independent student library for Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal — branch-wise syllabus, unit-wise notes and exam-ready study content for the 2022 B.Tech curriculum.",
        areaServed: "IN",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is this the official RGPV website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. This is an independent student library. The syllabus is mapped from the university's official scheme documents, but for anything binding — exam forms, results, revised schemes — always use rgpv.ac.in.",
            },
          },
          {
            "@type": "Question",
            name: "Does every subject already have full notes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The named subjects of the first year, AI & Data Science, Computer Science & Engineering, AI & Machine Learning, Information Technology, Cyber Security and Electronics & Communication carry full exam-ready content. The remaining branches render the official syllabus with structured placeholders while their content is authored.",
            },
          },
          {
            "@type": "Question",
            name: "Which branches are shown, and why only eight?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Study page shows the eight major branches most students are enrolled in — CSE, ECE, AI&ML, AI&DS, Mechanical, IT, Civil and Cyber Security. All 40 branches of the university remain reachable through the catalogue page.",
            },
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <SiteShell>
      <SiteJsonLd />
      <OverviewPage />
    </SiteShell>
  );
}
