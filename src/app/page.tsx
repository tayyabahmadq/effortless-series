import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { OverviewPage } from "@/components/library/overview-page";

export const metadata: Metadata = {
  title: "Overview · RGPV Digital Library",
  description:
    "A single, organised academic library for every RGPV B.Tech student — the complete branch-wise syllabus, exam-ready study content, free certifications and live career portals. Four pages, no hunting.",
};

export default function Home() {
  return (
    <SiteShell>
      <OverviewPage />
    </SiteShell>
  );
}
