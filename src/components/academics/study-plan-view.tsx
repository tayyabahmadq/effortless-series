"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  CalendarDays,
  ClipboardList,
  AlertCircle,
} from "lucide-react";
import type { StudyPlanSection } from "@/lib/academics/types";

const ease = [0.22, 1, 0.36, 1] as const;

const sectionIcons = {
  weightage: Trophy,
  schedule: CalendarDays,
  "exam-tips": ClipboardList,
  slips: AlertCircle,
} as const;

export function StudyPlanView({
  sections,
  accent,
}: {
  sections: StudyPlanSection[];
  accent: string;
}) {
  return (
    <div className="space-y-10">
      {sections.map((sec, i) => {
        const Icon =
          sectionIcons[sec.id as keyof typeof sectionIcons] ?? ClipboardList;
        return (
          <motion.section
            key={sec.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: Math.min(i * 0.04, 0.16) }}
            className="scroll-mt-24"
            id={`guide-${sec.id}`}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                style={{ backgroundColor: `${accent}18`, color: accent }}
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground leading-snug">
                {sec.heading}
              </h3>
            </div>

            <div className="pl-0 sm:pl-10 space-y-4">
              {sec.body?.map((p, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-[15px] text-foreground/85 leading-relaxed"
                >
                  {p}
                </p>
              ))}

              {sec.weightedTopics && (
                <div className="rounded-xl border border-border/50 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/40 bg-muted/20">
                        <th className="text-left px-4 py-2.5 font-medium text-foreground">
                          Topic
                        </th>
                        <th className="text-left px-4 py-2.5 font-medium text-foreground whitespace-nowrap">
                          Weight
                        </th>
                        <th className="text-left px-4 py-2.5 font-medium text-foreground">
                          Note
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sec.weightedTopics.map((t, i) => (
                        <tr
                          key={i}
                          className="border-b border-border/25 last:border-0"
                        >
                          <td
                            className="px-4 py-2.5 font-medium text-foreground align-top"
                            style={{ borderLeft: `3px solid ${accent}` }}
                          >
                            {t.topic}
                          </td>
                          <td
                            className="px-4 py-2.5 font-mono text-xs align-top whitespace-nowrap"
                            style={{ color: accent }}
                          >
                            {t.weight}
                          </td>
                          <td className="px-4 py-2.5 text-foreground/75 text-[13px] align-top leading-relaxed">
                            {t.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {sec.weeks && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {sec.weeks.map((w, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, ease, delay: i * 0.05 }}
                      className="rounded-xl border border-border/50 bg-muted/10 p-4"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded"
                          style={{
                            color: accent,
                            backgroundColor: `${accent}18`,
                          }}
                        >
                          {w.week}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {w.focus}
                        </span>
                      </div>
                      <ul className="space-y-1 mt-2">
                        {w.tasks.map((t, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-[13px] text-foreground/80 leading-snug"
                          >
                            <span
                              className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                              style={{ backgroundColor: accent }}
                            />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {sec.examTips && (
                <ul className="space-y-2">
                  {sec.examTips.map((tip, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease, delay: i * 0.04 }}
                      className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed rounded-lg border border-border/40 bg-muted/8 px-3.5 py-2.5"
                    >
                      <span
                        className="shrink-0 font-mono text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ color: accent, backgroundColor: `${accent}18` }}
                      >
                        {i + 1}
                      </span>
                      <span>{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {sec.bullets && (
                <ul className="space-y-1.5">
                  {sec.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed"
                    >
                      <AlertCircle
                        className="shrink-0 w-3.5 h-3.5 mt-0.5 text-red-400/80"
                        strokeWidth={2}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
