"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  AlertTriangle,
  Award,
  ListChecks,
  PenLine,
} from "lucide-react";
import type {
  AcadSection,
  AcadTable,
  Callout,
  ExamQuestion,
  KeyTerm,
} from "@/lib/academics/types";
import { ChapterDiagram } from "@/components/effortless/chapter-diagram";
import { CodeBlock } from "@/components/effortless/code-block";

const ease = [0.22, 1, 0.36, 1] as const;

const calloutStyles: Record<
  Callout["type"],
  { icon: typeof Lightbulb; color: string; label: string }
> = {
  tip: { icon: Lightbulb, color: "#fbbf24", label: "Tip" },
  exam: { icon: Award, color: "#34d399", label: "Exam" },
  warning: { icon: AlertTriangle, color: "#f87171", label: "Watch out" },
};

function TableBlock({ table }: { table: AcadTable }) {
  return (
    <div className="rounded-xl border border-border/50 bg-muted/15 overflow-hidden">
      {table.caption && (
        <div className="px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground border-b border-border/40">
          {table.caption}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40">
              {table.headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-4 py-2.5 font-medium text-foreground whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border/25 last:border-0 hover:bg-muted/20 transition-colors"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-2.5 align-top ${
                      j === 0
                        ? "text-foreground font-medium"
                        : "text-foreground/80"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CalloutBlock({ callout }: { callout: Callout }) {
  const { icon: Icon, color, label } = calloutStyles[callout.type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease }}
      className="rounded-xl border px-4 py-3.5 flex gap-3"
      style={{
        borderColor: `${color}40`,
        backgroundColor: `${color}0c`,
      }}
    >
      <Icon
        className="shrink-0 w-4 h-4 mt-0.5"
        style={{ color }}
        strokeWidth={2}
      />
      <div className="flex-1 min-w-0">
        <div
          className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1"
          style={{ color }}
        >
          {label} · {callout.title}
        </div>
        <p className="text-sm text-foreground/85 leading-relaxed">
          {callout.body}
        </p>
      </div>
    </motion.div>
  );
}

function ExamQuestionsBlock({
  questions,
  accent,
}: {
  questions: ExamQuestion[];
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-muted/10 p-4">
      <div className="flex items-center gap-2 mb-3">
        <PenLine className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">
          Exam questions
        </span>
      </div>
      <div className="space-y-4">
        {questions.map((item, i) => (
          <div key={i}>
            <div className="flex items-start gap-2.5">
              <span
                className="shrink-0 mt-0.5 rounded-md px-2 py-0.5 text-[11px] font-semibold tabular-nums"
                style={{
                  color: accent,
                  backgroundColor: `${accent}18`,
                }}
              >
                {item.marks} marks
              </span>
              <p className="text-sm font-medium text-foreground leading-relaxed">
                {item.q}
                {item.year && (
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    ({item.year})
                  </span>
                )}
              </p>
            </div>
            {item.outline && item.outline.length > 0 && (
              <ul className="mt-2 ml-1 sm:ml-3 space-y-1">
                {item.outline.map((pt, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function KeyTermsBlock({ terms }: { terms: KeyTerm[] }) {
  return (
    <div className="rounded-xl border border-border/40 bg-muted/10 p-4">
      <div className="flex items-center gap-2 mb-3">
        <ListChecks className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">
          Key terms
        </span>
      </div>
      <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {terms.map((t, i) => (
          <div key={i} className="flex flex-col">
            <dt className="text-sm font-medium text-foreground">{t.term}</dt>
            <dd className="text-xs text-muted-foreground leading-relaxed mt-0.5">
              {t.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function SectionRenderer({
  section,
  accent,
  index,
}: {
  section: AcadSection;
  accent: string;
  index: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease, delay: Math.min(index * 0.02, 0.12) }}
      className="scroll-mt-24"
      id={`sec-${section.number.replace(".", "-")}`}
    >
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="font-mono text-sm font-semibold tabular-nums shrink-0"
          style={{ color: accent }}
        >
          {section.number}
        </span>
        <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground leading-snug">
          {section.title}
        </h3>
      </div>

      <div className="space-y-4 pl-0 sm:pl-9">
        {section.body.map((p, i) => (
          <p
            key={i}
            className="text-sm sm:text-[15px] text-foreground/85 leading-relaxed"
          >
            {p}
          </p>
        ))}

        {section.bullets && (
          <ul className="space-y-1.5">
            {section.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed"
              >
                <span
                  className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {section.table && <TableBlock table={section.table} />}

        {section.codeExample && (
          <CodeBlock
            language={section.codeExample.language}
            caption={section.codeExample.caption}
            code={section.codeExample.code}
            accent={accent}
          />
        )}

        {section.diagram && (
          <ChapterDiagram diagram={section.diagram} accent={accent} />
        )}

        {section.callout && <CalloutBlock callout={section.callout} />}

        {section.keyTerms && section.keyTerms.length > 0 && (
          <KeyTermsBlock terms={section.keyTerms} />
        )}

        {section.examQuestions && section.examQuestions.length > 0 && (
          <ExamQuestionsBlock
            questions={section.examQuestions}
            accent={accent}
          />
        )}
      </div>
    </motion.section>
  );
}
