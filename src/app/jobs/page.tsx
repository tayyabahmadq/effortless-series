import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { JobsPage } from "@/components/library/jobs-page";

export const metadata: Metadata = {
  title: "RGPV Jobs & Internships — 20 Official Career Portals",
  description:
    "Official career portals for RGPV B.Tech students — MPESB (Vyapam), SSC JE, UPSC ESE, RRB JE, DRDO RAC, ISRO, BARC, BHEL Bhopal, TCS NQT, Amazon, Google Summer of Code, Internshala and more. Openings update at the source.",
  alternates: { canonical: "/jobs" },
};

export default function JobsRoute() {
  return (
    <SiteShell>
      <JobsPage />
    </SiteShell>
  );
}
