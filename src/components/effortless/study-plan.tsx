"use client";

import { motion } from "framer-motion";
import { Calendar, Target, TrendingUp } from "lucide-react";
import { studyPlan } from "@/lib/books-data";

export function StudyPlan() {
  return (
    <section
      id="study-plan"
      className="relative py-24 lg:py-32 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red-600/60" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-red-400/90 font-medium">
                The twelve-month plan
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight tracking-tight">
              Four hours a week.{" "}
              <span className="italic text-red-400/95">
                One project growing underneath.
              </span>{" "}
              Honestly comfortable.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 flex items-end"
          >
            <p className="text-muted-foreground/85 leading-relaxed">
              The plan assumes four focused hours a week — two reading, two
              hands-on. If you have more, do not read faster; build more. The
              project is the point: every discipline only becomes intuition
              under real stakes.{" "}
              <span className="text-foreground">
                Never advance more than one book ahead of your project&apos;s
                adoption of it.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/60 via-red-600/30 to-transparent" />

          <div className="space-y-8 lg:space-y-12">
            {studyPlan.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.months}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(i * 0.06, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex items-center gap-6 sm:gap-12 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative w-3 h-3 rounded-full bg-red-600 shadow-lg shadow-red-600/40">
                      <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-40" />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block flex-1" />

                  {/* Content card */}
                  <div className="flex-1 ml-10 sm:ml-0">
                    <div className="group rounded-xl border border-border/50 bg-card/40 hover:bg-card/60 backdrop-blur-sm p-5 sm:p-6 transition-all hover:border-red-600/30 hover:-translate-y-0.5">
                      {/* Months */}
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-red-400/80" />
                        <span className="text-xs uppercase tracking-[0.15em] text-red-400/90 font-medium">
                          Months {item.months}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-3 leading-snug">
                        {item.title}
                      </h3>

                      {/* Books */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.books.map((bookNum) => (
                          <span
                            key={bookNum}
                            className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-muted/50 border border-border/40 text-muted-foreground"
                          >
                            Book {bookNum}
                          </span>
                        ))}
                      </div>

                      {/* Outcome */}
                      <div className="flex items-start gap-2 text-sm text-muted-foreground/85 leading-relaxed">
                        <Target className="w-3.5 h-3.5 mt-0.5 text-red-400/70 shrink-0" />
                        <span>{item.outcome}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs text-red-400 font-medium uppercase tracking-wider">
              The pacing rule
            </span>
          </div>
          <p className="font-serif text-lg lg:text-xl italic text-foreground/90 leading-relaxed">
            &ldquo;Never advance more than one book ahead of your project&apos;s
            adoption of it. Reading Book 11 while the project has no CI is fog,
            not progress.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
