import { subjectContentMap } from "../src/lib/rgpv/content-map";

let total = 0, bad = 0, qTotal = 0, dTotal = 0;
for (const [key, s] of Object.entries(subjectContentMap)) {
  let n = 0, d = 0, q = 0, k = 0, c = 0, prac = 0, words = 0, qs = 0;
  for (const u of s.units) for (const sec of u.chapter.sections) {
    n++;
    if (sec.diagram) d++; else { console.log(`  MISSING diagram ${key} ${sec.number}`); bad++; }
    if (sec.examQuestions?.length) { q++; qs += sec.examQuestions.length; } else { console.log(`  MISSING questions ${key} ${sec.number}`); bad++; }
    if (sec.keyTerms?.length) k++;
    if (sec.callout) c++;
    if (sec.codeExample || sec.table) prac++;
    words += sec.body.join(" ").split(/\s+/).length;
  }
  total += n; qTotal += qs; dTotal += d;
  console.log(`${key}: ${n} sections | diagrams ${d} | examQ ${q} (${qs}) | keyTerms ${k} | callout ${c} | practical ${prac} | avg words ${Math.round(words/n)}`);
}
console.log(`TOTAL: ${total} sections, ${dTotal} diagrams, ${qTotal} exam questions | ${bad === 0 ? "AUDIT_OK" : `AUDIT_FAILED (${bad} gaps)`}`);
