import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { CertificationsPage } from "@/components/library/certifications-page";

export const metadata: Metadata = {
  title: "Free Certifications · RGPV Digital Library",
  description:
    "16 free online certifications for RGPV B.Tech students — Harvard CS50, freeCodeCamp, Cisco, IBM, Microsoft, AWS, Google, ISRO and more. Every card opens the official site.",
};

export default function CertificationsRoute() {
  return (
    <SiteShell>
      <CertificationsPage />
    </SiteShell>
  );
}
