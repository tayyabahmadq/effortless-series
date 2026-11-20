"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, ShieldCheck, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Fundamentals as your accuracy engine",
    body: "AI writes what you ask for. The blunders come from asking for the wrong thing, or accepting the wrong answer. Fundamentals are how you notice.",
    accent: "text-red-400",
  },
  {
    icon: ShieldCheck,
    title: "Production-grade from chapter one",
    body: "Every chapter assumes a beginner's vocabulary but a professional's standards. We explain what a transaction is, but we never tell you skipping backups is fine.",
    accent: "text-emerald-300",
  },
  {
    icon: Rocket,
    title: "Twelve months to a hired engineer",
    body: "Four focused hours a week, one project growing underneath. By month twelve the project is small, real, hardened and entirely yours to explain.",
    accent: "text-rose-300",
  },
  {
    icon: BookOpen,
    title: "Every chapter, the same skeleton",
    body: "A story from the field, the key idea, a three-part deep dive, a diagram, real code, the mistakes people actually make, a field checklist, key terms, three interview answers and a three-question quiz. Built around hands-on failure.",
    accent: "text-sky-300",
  },
];

export function Overview() {
  return (
    <section id="overview" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red-600/60" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-red-400/90 font-medium">
                Why this series exists
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight tracking-tight">
              Nobody sits a beginner down and{" "}
              <span className="italic text-red-400/95">explains the whole machine.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5 text-muted-foreground/90 leading-relaxed text-base lg:text-lg"
          >
            <p>
              Tutorials teach parts. Production requires the whole. Universities teach
              algorithms and theory. Bootcamps teach frameworks. Senior engineers guard
              the rest — databases, keys, deploys, the 3 a.m. pager — as tribal
              knowledge you absorb by breaking things.
            </p>
            <p>
              This series is that handoff. It is the entire operating manual for the
              layer between{" "}
              <span className="text-foreground font-medium">'I can write code'</span> and{" "}
              <span className="text-foreground font-medium">
                'I can run software that strangers depend on.'
              </span>{" "}
              In 2026, with AI writing half the diff, knowing these disciplines is
              precisely what makes you valuable instead of replaceable.
            </p>
            <p className="border-l-2 border-red-600/40 pl-5 italic text-foreground/90 font-serif text-lg lg:text-xl">
              &ldquo;Effortless is not zero effort — it is effort spent once, in
              advance, on purpose. The first deadlock costs you a weekend. The second
              costs ten minutes, because Chapter 12 of Book 01 already walked you
              through the lock report.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-xl border border-border/60 bg-card/40 hover:bg-card/60 backdrop-blur-sm p-6 transition-all hover:-translate-y-1 hover:border-red-600/30"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent transition-all pointer-events-none" />
              <div className="relative">
                <div className={`inline-flex p-2.5 rounded-lg bg-muted/40 ${p.accent} mb-4`}>
                  <p.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground/85 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
