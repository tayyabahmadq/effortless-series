"use client";

import { useMemo } from "react";
import { Terminal } from "lucide-react";

/**
 * Tiny zero-dependency syntax highlighter.
 * Supports the languages used in chapter code examples:
 * ts/js/tsx, sql, bash, python, yaml, json.
 */

const KEYWORDS: Record<string, string[]> = {
  ts: ["const", "let", "var", "function", "return", "if", "else", "for", "while", "import", "export", "from", "class", "extends", "new", "await", "async", "interface", "type", "enum", "implements", "try", "catch", "finally", "throw", "switch", "case", "break", "continue", "default", "this", "super", "typeof", "instanceof", "in", "of", "null", "undefined", "true", "false", "void", "never", "unknown", "any", "as", "readonly", "private", "public", "protected", "static", "get", "set"],
  javascript: ["const", "let", "var", "function", "return", "if", "else", "for", "while", "import", "export", "from", "class", "extends", "new", "await", "async", "try", "catch", "finally", "throw", "switch", "case", "break", "continue", "default", "this", "super", "typeof", "instanceof", "in", "of", "null", "undefined", "true", "false", "yield", "delete"],
  sql: ["SELECT", "FROM", "WHERE", "JOIN", "LEFT", "RIGHT", "INNER", "OUTER", "FULL", "ON", "GROUP", "BY", "ORDER", "HAVING", "LIMIT", "OFFSET", "INSERT", "INTO", "VALUES", "UPDATE", "SET", "DELETE", "CREATE", "TABLE", "ALTER", "DROP", "INDEX", "CONCURRENTLY", "VIEW", "PRIMARY", "KEY", "FOREIGN", "REFERENCES", "NOT", "NULL", "DEFAULT", "CHECK", "UNIQUE", "CONSTRAINT", "AND", "OR", "AS", "DISTINCT", "UNION", "ALL", "EXISTS", "CASE", "WHEN", "THEN", "END", "WITH", "BEGIN", "COMMIT", "ROLLBACK", "TRANSACTION", "SERIAL", "BIGINT", "INT", "TEXT", "VARCHAR", "BOOLEAN", "TIMESTAMPTZ", "TIMESTAMP", "JSONB", "JSON", "UUID", "NUMERIC", "GENERATED", "ALWAYS", "IDENTITY", "DESC", "ASC", "SHOW", "SET", "VACUUM", "ANALYZE", "EXPLAIN", "IF", "ADD", "COLUMN", "USING", "PARTITION"],
  bash: ["echo", "export", "if", "then", "fi", "else", "for", "do", "done", "while", "case", "esac", "function", "return", "local", "cd", "ls", "sudo", "apt", "curl", "wget", "docker", "kubectl", "git", "npm", "npx", "node", "bun", "cat", "grep", "awk", "sed", "chmod", "chown", "mkdir", "rm", "cp", "mv", "tar", "ssh", "true", "false", "set"],
  python: ["def", "class", "return", "if", "elif", "else", "for", "while", "import", "from", "as", "try", "except", "finally", "raise", "with", "lambda", "yield", "pass", "break", "continue", "and", "or", "not", "in", "is", "None", "True", "False", "self", "print", "async", "await", "global", "assert"],
  yaml: ["true", "false", "null", "on", "off", "yes", "no"],
  json: ["true", "false", "null"],
  php: ["echo", "print", "function", "return", "if", "elseif", "else", "for", "foreach", "while", "do", "switch", "case", "break", "continue", "default", "class", "extends", "implements", "interface", "abstract", "public", "private", "protected", "static", "new", "use", "namespace", "try", "catch", "finally", "throw", "isset", "empty", "require", "include", "require_once", "include_once", "as", "array", "null", "true", "false", "self", "parent", "this", "instanceof", "clone", "const", "global", "yield", "and", "or", "not", "xor", "die", "exit", "header", "session_start", "session_destroy", "count", "strlen", "substr", "trim", "explode", "implode", "str_replace", "htmlspecialchars", "filter_var", "mysqli_query", "mysqli_connect", "mysqli_report", "setcookie"],
  html: [],
  xml: [],
};

const TOKEN_RE =
  /(\/\/[^\n]*|#[^\n]*|--[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][A-Za-z0-9_$]*)/g;

interface Token {
  text: string;
  cls: string;
}

function tokenize(code: string, language: string): Token[] {
  const keywords = new Set(
    (KEYWORDS[language] ?? KEYWORDS.ts).map((k) => k.toLowerCase())
  );
  const tokens: Token[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(code)) !== null) {
    if (m.index > last) {
      tokens.push({ text: code.slice(last, m.index), cls: "" });
    }
    const [full, comment, str, num, word] = m;
    if (comment) tokens.push({ text: full, cls: "text-muted-foreground/60 italic" });
    else if (str) tokens.push({ text: full, cls: "text-emerald-300/90" });
    else if (num) tokens.push({ text: full, cls: "text-amber-300/90" });
    else if (word && keywords.has(word.toLowerCase()))
      tokens.push({ text: full, cls: "text-red-300 font-medium" });
    else tokens.push({ text: full, cls: "" });
    last = m.index + full.length;
  }
  if (last < code.length) tokens.push({ text: code.slice(last), cls: "" });
  return tokens;
}

export function CodeBlock({
  language,
  caption,
  code,
  accent,
}: {
  language: string;
  caption: string;
  code: string;
  accent: string;
}) {
  const tokens = useMemo(() => tokenize(code, language), [code, language]);
  return (
    <div className="rounded-xl border border-border/50 overflow-hidden bg-[#0b0f17]">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-card/40">
        <Terminal className="w-3.5 h-3.5" style={{ color: accent }} />
        <span className="text-xs text-muted-foreground flex-1 truncate">{caption}</span>
        <span
          className="text-[10px] uppercase tracking-[0.15em] px-1.5 py-0.5 rounded font-medium"
          style={{ color: accent, backgroundColor: `${accent}15` }}
        >
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 text-xs sm:text-[13px] leading-relaxed font-mono">
        <code className="text-foreground/90">
          {tokens.map((t, i) => (
            <span key={i} className={t.cls}>
              {t.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
