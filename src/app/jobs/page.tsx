import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { JobsPage } from "@/components/library/jobs-page";

export const metadata: Metadata = {
  title: "Jobs & Internships · RGPV Digital Library",
  description:
    "20 official career portals for RGPV B.Tech students — MPESB, SSC JE, UPSC ESE, RRB, DRDO, ISRO, BARC, TCS, Amazon, GSoC and more. Openings update at the source.",
};

export default function JobsRoute() {
  return (
    <SiteShell>
      <JobsPage />
    </SiteShell>
  );
}
