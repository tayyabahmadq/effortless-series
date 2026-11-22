import type { Metadata } from "next";
import { SiteShell } from "@/components/library/site-shell";
import { CertificationsPage } from "@/components/library/certifications-page";

export const metadata: Metadata = {
  title: "16 Free Online Certifications for RGPV Students",
  description:
    "Free certifications for RGPV B.Tech students — Harvard CS50, freeCodeCamp, Cisco Networking Academy, IBM SkillsBuild, Microsoft Learn, AWS Skill Builder, Google Skillshop, ISRO IIRS and more. Every card opens the official site.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsRoute() {
  return (
    <SiteShell>
      <CertificationsPage />
    </SiteShell>
  );
}
