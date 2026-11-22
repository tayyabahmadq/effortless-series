"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  BookOpenCheck,
  Layers,
  Award,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { SITE_STATS } from "./portal-data";

const ease = [0.22, 1, 0.36, 1] as const;

function CountUp({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const dur = 1100;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * e));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);
  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString("en-IN")}
    </span>
  );
}

const FAQ = [
  {
    q: "Is this the official RGPV website?",
    a: "No. This is an independent student library. The syllabus is mapped from the university's official scheme documents, but for anything binding — exam forms, results, revised schemes — always use rgpv.ac.in. Every syllabus page here is generated from those official documents, and the library states where its listings came from.",
  },
  {
    q: "Does every subject already have full notes?",
    a: "The named subjects of the first year, AI & Data Science, Computer Science & Engineering, AI & Machine Learning, Information Technology, Cyber Security and Electronics & Communication carry full exam-ready content — chapters, topic cards, diagrams, comparison tables and a per-subject exam plan. The remaining branches render the official syllabus with structured placeholders while their content is authored, and the site marks honestly which state a subject is in.",
  },
  {
    q: "Why do some semesters list fewer subjects than the printed scheme?",
    a: "Because a portion of the official scheme PDFs are scanned images rather than text. Those branch-semesters are parsed partially and are flagged as partial listings. It is a source limitation, not a missing subject in your curriculum — cross-check the printed scheme for those semesters.",
  },
  {
    q: "Are these certifications really free?",
    a: "The courses and the certificate or digital badge listed here are free at the issuing provider. Some platforms additionally sell optional verified or professional certificates, and a few charge for exam proctoring. The card links to the official page so you can read the current terms before you start.",
  },
  {
    q: "Do you post job vacancies yourselves?",
    a: "No. Every career card links to the official recruitment portal — MPESB, SSC, UPSC, RRB, DRDO RAC, ISRO, BARC, BHEL, TCS, Amazon and the rest. Vacancies change daily, so a copied listing would be out of date within a week. Linking to the source keeps it permanently current.",
  },
  {
    q: "Which branches are shown, and why only eight?",
    a: "The Study page shows the eight major branches most students are enrolled in — CSE, ECE, AI&ML, AI&DS, Mechanical, IT, Civil and Cyber Security. All 40 branches of the university remain reachable through the link below the grid.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl border bg-card/40 overflow-hidden transition-colors ${
        open ? "border-red-500/40" : "border-border/50"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left text-sm font-medium hover:bg-muted/20 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown
          className={`ml-auto shrink-0 w-4 h-4 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180 text-red-400" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

const PILLARS = [
  {
    hue: "#f87171",
    icon: <BookOpenCheck className="w-5 h-5" />,
    title: "The complete syllabus, mapped",
    body: "All 40 B.Tech branches and 1,578 subjects, semester by semester, taken from the official scheme documents. Open a branch and you see every semester and every subject code, not a scattered folder of PDFs.",
    tag: "40 branches · 8 semesters",
  },
  {
    hue: "#60a5fa",
    icon: <Layers className="w-5 h-5" />,
    title: "Content written to be examined",
    body: "Each subject opens as chapter cards, then topic cards, then content — 300–500 words per section with diagrams, comparison tables, code and a Guide-me exam plan. Authored branch by branch, and marked honestly when it is ready.",
    tag: "Syllabus → chapters → topics",
  },
  {
    hue: "#34d399",
    icon: <Award className="w-5 h-5" />,
    title: "A credential beyond the degree",
    body: "Sixteen certifications you can genuinely earn online at zero cost — Harvard, Google, IBM, Cisco, Microsoft, AWS, ISRO and more — each with what it covers, who issues it, and a direct link to the official site.",
    tag: "16 programmes · ₹0",
  },
  {
    hue: "#fbbf24",
    icon: <Briefcase className="w-5 h-5" />,
    title: "Where to apply, kept live",
    body: "Twenty official career portals across software, core, PSU, MP state government, central government, defence, research and space — including MPESB, SSC JE, UPSC ESE, RRB, DRDO, ISRO and BARC. We link to the source so openings are never stale.",
    tag: "20 portals · all sectors",
  },
];

export function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(720px 440px at 10% -8%,rgba(239,68,68,.14),transparent 62%),radial-gradient(760px 480px at 98% 8%,rgba(96,165,250,.09),transparent 62%),radial-gradient(640px 440px at 40% 106%,rgba(45,212,191,.07),transparent 62%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-11">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-400 border border-red-500/35 bg-red-500/10 rounded-full px-3 py-1">
              RGPV · 2022 Curriculum
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border/60 rounded-full px-3 py-1">
              B.Tech · All batches
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="font-serif text-[clamp(2.4rem,8vw,3.6rem)] leading-[1.02] font-bold tracking-tight"
          >
            RGPV Digital
            <br />
            Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.12 }}
            className="text-muted-foreground text-[0.94rem] max-w-3xl mt-4 leading-relaxed"
          >
            A single, organised academic library for every B.Tech student of
            Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal — the complete
            branch-wise syllabus, exam-ready study content, free certifications
            worth earning alongside your degree, and live government, PSU and
            industry career portals. Four pages, no hunting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.18 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            <Link
              href="/branches"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-br from-red-500 to-red-800 text-white shadow-lg shadow-red-900/30 hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Start studying <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border/70 text-muted-foreground bg-muted/20 hover:text-foreground hover:border-red-500/50 transition-colors"
            >
              Free certifications
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.24 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-9 max-w-3xl"
          >
            {[
              { i: "Branches", v: SITE_STATS.branches },
              { i: "Subjects", v: SITE_STATS.subjects },
              { i: "Free certifications", v: SITE_STATS.certifications },
              { i: "Career portals", v: SITE_STATS.portals },
            ].map((s) => (
              <div
                key={s.i}
                className="rounded-xl border border-border/50 bg-card/40 backdrop-blur px-4 py-3 hover:border-border transition-colors"
              >
                <span className="block text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.i}
                </span>
                <b className="font-serif text-2xl">
                  <CountUp target={s.v} />
                </b>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            What this library is
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="flex gap-5 border border-border/60 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-red-500/10 via-card/40 to-card/40 backdrop-blur"
          >
            <span className="shrink-0 w-1.5 self-stretch rounded-full bg-gradient-to-b from-red-400 to-red-800 shadow-[0_0_16px_rgba(239,68,68,0.5)]" />
            <div>
              <q className="font-serif text-xl sm:text-2xl leading-snug block">
                Every RGPV student should be able to find their syllabus, their
                subjects and their next step in one place — without digging
                through scanned PDFs, forwarded group-chat files and dead
                links.
              </q>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                This is an independent student library, not the
                university&apos;s official website. The syllabus is mapped from
                the official scheme documents; study content is written subject
                by subject to the same standard: 300–500 words per topic,
                diagrams, tables, worked code and a per-subject exam plan. Where
                content is not written yet, we say so plainly instead of
                pretending.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Four things it does
          </div>
          <h2 className="font-serif text-3xl font-bold">
            Built around how a degree actually runs
          </h2>
          <p className="text-muted-foreground text-sm max-w-3xl mt-2 mb-7 leading-relaxed">
            A student needs four different things at four different moments: the
            syllabus when the semester starts, notes when the exam nears, a
            credential when the résumé is thin, and a portal when it is time to
            apply. The library covers all four.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease, delay: i * 0.07 }}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6 hover:-translate-y-1 hover:border-border transition-all duration-200"
                style={{ ["--hue" as string]: p.hue }}
              >
                <div
                  className="absolute -right-10 -top-10 w-28 h-28 rounded-full opacity-[0.13] blur-2xl pointer-events-none"
                  style={{ background: p.hue }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3"
                  style={{ color: p.hue, borderColor: `${p.hue}66`, background: "rgba(255,255,255,.04)" }}
                >
                  {p.icon}
                </div>
                <h3 className="font-serif text-lg">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                  {p.body}
                </p>
                <span
                  className="inline-block mt-3 text-[9.5px] uppercase tracking-[0.16em] rounded-full px-2.5 py-1 border"
                  style={{ color: p.hue, borderColor: `${p.hue}66` }}
                >
                  {p.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Four layers */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            How every subject is built
          </div>
          <h2 className="font-serif text-3xl font-bold">
            Four layers, always in the same order
          </h2>
          <p className="text-muted-foreground text-sm max-w-3xl mt-2 mb-7 leading-relaxed">
            Consistency is the point. Once you have opened one subject, you know
            how to open all 1,578 of them — no re-learning the interface every
            time you change branch.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              ["01", "Syllabus", "The official unit-wise syllabus for the subject, exactly as the scheme lists it, with the subject code and semester."],
              ["02", "Chapter cards", "Each unit becomes a chapter card, so you can see the whole subject at a glance and jump to the unit your exam covers."],
              ["03", "Topic cards", "Every chapter breaks into topic cards — one concept per card, sized for a single sitting rather than a marathon."],
              ["04", "Exam-ready content", "300–500 words per topic with diagrams, tables and code, plus a Guide-me plan mapping high-yield questions to a seven-day schedule."],
            ].map(([n, t, d], i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease, delay: i * 0.07 }}
                className="rounded-xl border border-border/50 bg-muted/15 p-5 hover:border-red-500/40 hover:bg-card/40 hover:-translate-y-1 transition-all duration-200"
              >
                <b className="font-serif text-3xl text-red-400/85 block leading-none mb-2">
                  {n}
                </b>
                <h4 className="text-sm font-semibold">{t}</h4>
                <p className="text-[11.5px] text-muted-foreground leading-relaxed mt-1">
                  {d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience routes */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Who it is for
          </div>
          <h2 className="font-serif text-3xl font-bold">
            Find yourself, then follow the route
          </h2>
          <p className="text-muted-foreground text-sm max-w-3xl mt-2 mb-7 leading-relaxed">
            Three students, three different needs. Each route below lands you
            exactly where you should start.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/branches",
                title: "First-year student",
                body: "Your syllabus is the same as everyone else's, whatever your branch says on the admission slip.",
                points: ["Semesters I & II, one common scheme", "14 subjects across both semesters", "No need to pick a branch yet"],
                go: "Open first year →",
              },
              {
                href: "/branches",
                title: "Semester III–VIII student",
                body: "Your branch has begun. Open it and work through the semester your exam is actually about.",
                points: ["Eight major branches, one tap away", "Semester chips on every branch card", "Full syllabus and subject codes live"],
                go: "Pick your branch →",
              },
              {
                href: "/jobs",
                title: "Final year & job seeker",
                body: "The degree is nearly done. What is missing is a credential and a place to apply.",
                points: ["16 free certifications to strengthen the résumé", "20 live official career portals", "Government, PSU, defence and research routes"],
                go: "See opportunities →",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease, delay: i * 0.07 }}
              >
                <Link
                  href={c.href}
                  className="flex flex-col h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/10 transition-all duration-200"
                >
                  <h3 className="font-serif text-lg">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1.5 mb-3">
                    {c.body}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {c.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-red-500 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto text-sm text-red-400 inline-flex items-center gap-1.5">
                    {c.go}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Straight answers
          </div>
          <h2 className="font-serif text-3xl font-bold mb-2">
            Questions worth asking before you rely on it
          </h2>
          <p className="text-muted-foreground text-sm max-w-3xl mb-7 leading-relaxed">
            A library is only useful if you know exactly what it does and does
            not guarantee.
          </p>
          <div className="flex flex-col gap-2.5">
            {FAQ.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Doors */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Go somewhere
          </div>
          <h2 className="font-serif text-3xl font-bold mb-7">
            Three doors out of this page
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/branches", title: "Study & Branches", body: "First year at the top, then eight major branches with semester-wise subject lists.", meta: "First year + 8 branches" },
              { href: "/certifications", title: "Certifications", body: "Free certificates from Harvard, Google, IBM, Cisco, ISRO and more, filterable by field.", meta: "16 programmes · ₹0" },
              { href: "/jobs", title: "Jobs & Internships", body: "Live official portals across every sector, updated at the source rather than copied here.", meta: "20 portals · all sectors" },
            ].map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease, delay: i * 0.07 }}
              >
                <Link
                  href={d.href}
                  className="group flex flex-col h-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-6 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/10 transition-all duration-200"
                >
                  <span className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-lg group-hover:text-red-400 transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                    {d.body}
                  </p>
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground mt-2">
                    {d.meta}
                  </span>
                  <span className="mt-3 text-sm text-red-400 transition-transform group-hover:translate-x-1">
                    Open →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
