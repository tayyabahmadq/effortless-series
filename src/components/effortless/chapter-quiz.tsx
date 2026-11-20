"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle, RotateCcw, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import type { QuizQuestion } from "@/lib/types";
import { useReaderStore } from "@/store/reader-store";

const ease = [0.22, 1, 0.36, 1] as const;

export function ChapterQuiz({
  questions,
  accent,
  bookId,
  chapterNumber,
}: {
  questions: QuizQuestion[];
  accent: string;
  bookId: string;
  chapterNumber: number;
}) {
  const setQuizScore = useReaderStore((s) => s.setQuizScore);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () =>
      questions.reduce(
        (sum, q, i) => sum + (answers[i] === q.answerIndex ? 1 : 0),
        0
      ),
    [answers, questions]
  );
  const allAnswered = answeredCount === questions.length;

  const pick = (qi: number, oi: number) => {
    if (answers[qi] !== undefined) return;
    const next = { ...answers, [qi]: oi };
    setAnswers(next);
    if (Object.keys(next).length === questions.length) {
      const s = questions.reduce(
        (sum, q, i) => sum + (next[i] === q.answerIndex ? 1 : 0),
        0
      );
      setQuizScore(bookId, chapterNumber, s);
    }
  };

  const reset = () => setAnswers({});

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const picked = answers[qi];
        const answered = picked !== undefined;
        const correct = picked === q.answerIndex;
        return (
          <motion.div
            key={qi}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease }}
            className="rounded-lg border border-border/50 bg-card/40 p-5"
          >
            <div className="flex items-start gap-3 mb-4">
              <span
                className="shrink-0 w-6 h-6 rounded-full text-[11px] font-mono font-semibold flex items-center justify-center mt-0.5"
                style={{ backgroundColor: `${accent}22`, color: accent }}
              >
                {qi + 1}
              </span>
              <p className="text-sm lg:text-base font-medium text-foreground leading-relaxed">
                {q.question}
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {q.options.map((opt, oi) => {
                const isAnswer = oi === q.answerIndex;
                const isPicked = picked === oi;
                let cls =
                  "border-border/50 bg-muted/20 text-foreground/85 hover:border-red-600/40 hover:bg-muted/40";
                if (answered && isAnswer)
                  cls =
                    "border-emerald-500/50 bg-emerald-500/10 text-emerald-200";
                else if (answered && isPicked)
                  cls = "border-red-500/50 bg-red-500/10 text-red-200";
                else if (answered)
                  cls = "border-border/40 bg-transparent text-muted-foreground/60";
                return (
                  <button
                    key={oi}
                    onClick={() => pick(qi, oi)}
                    disabled={answered}
                    className={`flex items-start gap-2.5 text-left rounded-lg border px-3.5 py-2.5 text-xs sm:text-sm transition-all disabled:cursor-default ${cls}`}
                  >
                    <span className="shrink-0 mt-0.5 font-mono text-[10px] text-muted-foreground">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="flex-1 leading-snug">{opt}</span>
                    {answered && isAnswer && (
                      <CheckCircle2 className="shrink-0 w-4 h-4 text-emerald-400" />
                    )}
                    {answered && isPicked && !correct && (
                      <XCircle className="shrink-0 w-4 h-4 text-red-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease }}
                className="mt-3.5 flex items-start gap-2 rounded-md border border-border/40 bg-muted/25 px-3.5 py-2.5"
              >
                {correct ? (
                  <CheckCircle2
                    className="shrink-0 w-4 h-4 mt-0.5 text-emerald-400"
                    strokeWidth={1.5}
                  />
                ) : (
                  <HelpCircle
                    className="shrink-0 w-4 h-4 mt-0.5 text-red-400"
                    strokeWidth={1.5}
                  />
                )}
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  <span className={correct ? "text-emerald-300 font-medium" : "text-red-300 font-medium"}>
                    {correct ? "Correct. " : "Not quite. "}
                  </span>
                  {q.explanation}
                </p>
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {allAnswered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease }}
          className="flex items-center justify-between rounded-lg border px-5 py-4"
          style={{ borderColor: `${accent}45`, backgroundColor: `${accent}10` }}
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5" style={{ color: accent }} />
            <span className="text-sm text-foreground font-medium">
              {score} / {questions.length} correct
              {score === questions.length
                ? " — flawless. The field is yours."
                : score > 0
                  ? " — reread the explanations above and it will click."
                  : " — walk the deep dive again, slowly."}
            </span>
          </div>
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Retry
          </button>
        </motion.div>
      )}
      {!allAnswered && answeredCount > 0 && (
        <p className="text-xs text-muted-foreground/70">
          {answeredCount} of {questions.length} answered
        </p>
      )}
    </div>
  );
}
