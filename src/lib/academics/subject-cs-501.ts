import type { AcademicSubject } from "./types";

export const cs501: AcademicSubject = {
  id: "cs-501",
  code: "CS-501",
  title: "Theory of Computation",
  semester: "V Semester",
  program: "RGPV · Computer Science & Engineering",
  tagline:
    "The complete visual guide to the formal machines of computer science: sets, proofs, finite automata, Moore and Mealy machines, regular expressions, grammars and normal forms.",
  description:
    "Three units walk from the language of reasoning itself — sets and proofs — through every flavour of finite automaton and the algebra of regular expressions, up to grammars, parse trees and the two normal forms that real parsers depend on. Every section pairs formal statement with worked example and a diagram you can redraw in the exam hall.",
  accentColor: "#ef4444",
  emoji: "Σ",
  unitCount: 3,
  totalSections: 27,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Automata Theory",
      summary:
        "Before reasoning about machines, we build the language of reasoning itself: sets, formal proofs, alphabets and languages, then introduce finite automata as acceptors and translators, and the two classic circuit models — Moore and Mealy — and how one becomes the other.",
      chapter: {
        number: "01",
        title: "Sets, Proofs & the First Machines",
        intro:
          "Unit I builds the mathematical base — sets, formal proofs, alphabets and languages — then introduces finite automata as acceptors and translators, the two transducer families Moore and Mealy, their conversion, and serial composition of machines.",
        inOneBreath:
          "Sets and proofs are the language of the subject; alphabets and strings make languages; automata ladder = finite → pushdown → Turing by memory; an FA accepts by final state or translates per symbol; Moore output hangs on states, Mealy on moves; the two convert in both directions, and cascading finite machines yields another finite machine.",
        sections: [
          {
            number: "1.1",
            title: "Review of sets",
            body: [
              "A set is an unordered collection of distinct objects called its elements or members. We write sets with braces: A = {1, 2, 3}; membership uses ∈, so 2 ∈ A is true. Two sets are equal exactly when they contain the same elements — order and repetition do not matter, so {1,2,3}, {3,2,1} and {1,1,2,3} all name the same set. The empty set ∅ contains nothing and is a subset of every set. Sets may be specified by listing (roster form) or by a rule (set-builder form {x : P(x)}).",
              "A is a subset of B (A ⊆ B) when every element of A is also in B; proper subset A ⊂ B additionally requires A ≠ B. The power set 2^A is the set of all subsets of A: for A = {1,2} we get 2^A = {∅, {1}, {2}, {1,2}} — a set of n elements has exactly 2^n subsets, a fact that returns with force when converting nondeterministic machines to deterministic ones. The Cartesian product A × B is the set of all ordered pairs (a,b) with a∈A, b∈B, and the cardinality |A| is the number of elements in A.",
              "Four operations build new sets from old. The union A ∪ B collects everything in either set; the intersection A ∩ B keeps only what is in both; the difference A − B holds elements of A that are not in B; the complement A′ (relative to a fixed universe U) is everything outside A. These operations obey algebraic laws as crisp as those of arithmetic: union and intersection distribute over each other, complement swaps them via De Morgan's laws (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′, and both union and intersection are associative, commutative and idempotent.",
              "A worked identity makes the laws concrete. To simplify (A ∩ B) ∪ (A ∩ B′), factor A out using the distributive law: A ∩ (B ∪ B′). Since B ∪ B′ = U, the universe, the expression collapses to A ∩ U = A — every element of A regardless of whether it lies in B. Such identities are not algebraic curiosities: they are exactly what a compiler does when simplifying a Boolean condition, and what we do mentally when proving two descriptions of a language describe the same set of strings.",
              "Sets are the running substrate of automata theory. The set of states Q of any finite automaton is a finite set; the input alphabet Σ is another; a transition relation of an NFA is a subset of Q × Σ × Q; the language accepted L(M) is a subset of Σ*. When we minimize a DFA we partition Q into blocks of indistinguishable states; when we convert an NFA to a DFA we work inside the power set 2^Q; when we take closure properties we union, intersect and complement languages. Mastering the vocabulary of sets in Unit I pays back in every theorem of Units II and III.",
            ],
            keyTerms: [
              { term: "Set", definition: "An unordered collection of distinct elements written inside braces, e.g. A = {1, 2, 3}." },
              { term: "Power set 2^A", definition: "The set of all subsets of A; has exactly 2^|A| elements." },
              { term: "Cartesian product A × B", definition: "The set of all ordered pairs (a, b) with a ∈ A and b ∈ B." },
              { term: "Universe U", definition: "The ambient set from which complements are drawn; every set under discussion lives inside U." },
              { term: "Cardinality |A|", definition: "The number of elements in A." },
            ],
            table: {
              caption: "Set operations and notation.",
              headers: ["Operation", "Notation", "Meaning"],
              rows: [
                ["Union", "A ∪ B", "everything in A or in B (or both)"],
                ["Intersection", "A ∩ B", "only the elements in both A and B"],
                ["Difference", "A − B", "elements of A that are not in B"],
                ["Complement", "A′", "everything (in universe U) not in A"],
                ["Cross product", "A × B", "all ordered pairs (a, b)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Learn the two distributive laws cold — A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) and A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) — and De Morgan's laws (A ∪ B)′ = A′ ∩ B′. They are the most frequently asked one-mark set identities.",
            },
            diagram: {
              kind: "flow",
              title: "Simplifying a set identity step by step",
              caption:
                "Each arrow cites one law - exactly the discipline an exam proof needs.",
              steps: [
                { label: "Start: (A intersect B) union (A intersect B')" },
                { label: "Factor out A", note: "distributive law" },
                { label: "A intersect (B union B')", note: "regrouped" },
                { label: "B union B' = U", note: "complement law" },
                { label: "A intersect U = A", note: "identity law - done" },
              ],
            },
            bullets: [
              "Set: an unordered collection of distinct elements, written with braces; order and repetition are irrelevant.",
              "Subset vs proper subset: A is a subset of B when every element of A lies in B; proper subset adds A != B.",
              "Power set 2^A: all subsets of A; |2^A| = 2^|A| - the same power set that subset construction later lives in.",
              "Cartesian product A x B: the set of all ordered pairs (a, b).",
              "Four operations: union, intersection, difference, and complement relative to a universe U.",
              "De Morgan's laws: (A union B)' = A' intersect B' and (A intersect B)' = A' union B'.",
              "Distributive laws: A union (B intersect C) = (A union B) intersect (A union C), and the dual with union and intersection swapped.",
              "Worked identity: (A intersect B) union (A intersect B') = A intersect (B union B') = A intersect U = A.",
            ],
            examQuestions: [
              {
                q: "State and prove the distributive laws for sets and De Morgan's laws, and use them to simplify (A intersect B) union (A intersect B').",
                marks: 7,
                outline: [
                  "Define union, intersection, complement and subset with notation.",
                  "State A union (B intersect C) = (A union B) intersect (A union C) and its dual.",
                  "State both De Morgan laws.",
                  "Prove one law element-wise: take x in the left side, show x belongs to the right side, then conversely.",
                  "Simplify the given expression by factoring A (distributive law).",
                  "Apply the complement law B union B' = U and then A intersect U = A.",
                  "Conclude that the expression equals A and support with Venn diagrams.",
                ],
              },
              {
                q: "Define the power set of A = {a, b, c} and list all its elements. How many elements does it have?",
                marks: 3,
                outline: [
                  "Power set = the set of all subsets of A.",
                  "List: the empty set, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}.",
                  "Count: 2^3 = 8.",
                ],
              },
              {
                q: "State De Morgan's laws for sets.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Mathematical formal proofs",
            body: [
              "A proof is a chain of statements, each following from the previous by pure logic, leading from what is given to what must be shown. Automata theory leans on three classic styles plus a fourth variant. A direct proof starts from the hypothesis and derives the conclusion step by step. A proof by contradiction assumes the opposite of what we want, derives something impossible, and concludes the assumption was wrong. A proof by induction proves P(n) for every natural number by showing a base case P(0) or P(1) and then an inductive step: whenever P(k) holds, P(k+1) holds too — like an infinite row of dominoes. A proof by contrapositive proves 'if P then Q' by proving 'if not Q then not P', logically equivalent but often far easier.",
              "Worked induction: prove 1+2+⋯+n = n(n+1)/2. Base: n=1 both sides equal 1. Hypothesis: assume the formula holds for n=k. Step: 1+2+⋯+k+(k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2, which is the formula for n=k+1 — so the identity holds for all n. Worked contradiction: prove √2 is irrational. Suppose √2 = p/q in lowest terms; squaring gives 2q² = p², so p is even, say p=2r; substituting gives q² = 2r², so q is even too — but then p and q share factor 2, contradicting 'lowest terms'. The assumption was impossible, so √2 is irrational.",
              "A worked direct proof keeps the skeleton explicit. Claim: the sum of two even integers is even. Let m = 2a and n = 2b for integers a, b (definition of even); then m + n = 2a + 2b = 2(a + b), which is even by the same definition (since a + b is an integer). Each line cites the definition that licenses it. A worked contrapositive: prove 'if n² is even then n is even' directly is awkward, but the contrapositive 'if n is odd then n² is odd' falls out in one line — n = 2k + 1 ⇒ n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, which is odd. Equivalent statements, easier proof.",
              "Automata theory is proof-heavy by design: every theorem is of the form 'these two machines agree on a language', and a verbal picture is not enough. The exam expects you to state the claim, list the hypothesis, then march step by step to the conclusion — exactly the four-box pattern of the diagram below. The most common slip is to assert without justifying: 'clearly', 'obviously' and 'it is known' earn no marks. Always cite the rule (definition, hypothesis, inductive assumption) that licenses each line. A proof that survives the examiner's red pen names its tools at every step and never asks the reader to fill a gap.",
            ],
            keyTerms: [
              { term: "Direct proof", definition: "Derives the conclusion from the hypothesis using definitions and known facts step by step." },
              { term: "Proof by contradiction", definition: "Assumes the negation of the claim and derives an impossibility, forcing the claim to be true." },
              { term: "Proof by induction", definition: "Proves P(n) for all natural n via a base case and an inductive step." },
              { term: "Inductive hypothesis", definition: "The assumption P(k) used inside the inductive step to derive P(k+1)." },
              { term: "Contrapositive", definition: "The equivalent statement 'if not Q then not P' used to prove 'if P then Q'." },
            ],
            callout: {
              type: "warning",
              title: "Proof discipline",
              body: "Never write 'clearly', 'obviously' or 'as is well known' in an exam proof — the examiner awards marks for the named rule (definition, hypothesis, induction hypothesis) that licenses each line. Skip a step and you lose the proof mark even when the conclusion is correct.",
            },
            diagram: {
              kind: "pipeline",
              title: "Anatomy of a proof by induction",
              caption:
                "Every induction answer you write should show all four boxes: base case, hypothesis, step, conclusion.",
              stages: [
                { label: "Statement", note: "claim P(n) for all n ≥ 1" },
                { label: "Base case", note: "verify P(1) directly" },
                { label: "Inductive hypothesis", note: "assume P(k) holds" },
                { label: "Inductive step", note: "prove P(k+1) using P(k)" },
                { label: "Conclusion", note: "P(n) true for every n" },
              ],
            },
            bullets: [
              "Direct proof: hypothesis -> conclusion, every line justified by a definition or known fact.",
              "Proof by contradiction: assume the negation, derive an impossibility, reject the assumption.",
              "Proof by induction: base case P(1), inductive hypothesis P(k), inductive step P(k) implies P(k+1).",
              "Contrapositive: prove 'if not Q then not P' instead of 'if P then Q' - logically equivalent.",
              "Worked induction: 1 + 2 + ... + n = n(n+1)/2.",
              "Worked contradiction: sqrt(2) is irrational (parity argument).",
              "Worked contrapositive: n odd implies n^2 odd, proving 'if n^2 is even then n is even'.",
              "Exam discipline: never write 'clearly' or 'obviously'; name the rule that licenses each line.",
            ],
            examQuestions: [
              {
                q: "Prove by mathematical induction that 1 + 2 + ... + n = n(n+1)/2 for all n >= 1, clearly identifying the statement, base case, inductive hypothesis and inductive step.",
                marks: 7,
                outline: [
                  "State the claim P(n) and the principle of mathematical induction.",
                  "Base case: n = 1; both sides equal 1.",
                  "Inductive hypothesis: assume the identity holds for n = k.",
                  "Inductive step: add (k+1) to both sides of the assumed identity.",
                  "Simplify k(k+1)/2 + (k+1) to (k+1)(k+2)/2.",
                  "Recognize (k+1)(k+2)/2 as the formula at n = k+1 and conclude by induction.",
                ],
              },
              {
                q: "Distinguish proof by contradiction from proof by contrapositive, giving one short example of each.",
                marks: 3,
                outline: [
                  "Contradiction: assume the negation and derive an impossibility (e.g. sqrt(2) is irrational).",
                  "Contrapositive: prove 'if not Q then not P' (e.g. n odd implies n^2 odd).",
                ],
              },
              {
                q: "Write the contrapositive of the statement 'if n^2 is even then n is even'.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Alphabets, strings and languages",
            body: [
              "An alphabet Σ is a finite, non-empty set of symbols — e.g. Σ = {0,1} for binary strings or Σ = {a,…,z} for English. A string (word) over Σ is a finite sequence of symbols from Σ; its length |w| is the number of symbols, and the empty string ε has length zero. Strings concatenate: if x = ab and y = ba then xy = abba. The reversal w^R writes symbols backwards; w is a palindrome when w = w^R, like malayalam. Powers of a string repeat it: w² = ww, w³ = www, and w⁰ = ε by convention.",
              "A language is any set of strings over Σ — a subset of Σ*, where Σ* denotes all possible strings over Σ including ε. The star operator is Kleene closure: zero or more concatenations, so {a}* = {ε, a, aa, aaa, …}. The positive closure Σ+ excludes the empty string. Languages themselves can be unioned, intersected, concatenated (L1L2 = {xy : x∈L1, y∈L2}) and starred (L* = ⋃ Lⁱ). A grammar generates a language mechanically as a 4-tuple G = (V, T, P, S) where V is variables, T is terminals with V∩T=∅, P is production rules α→β, and S∈V is the start symbol. L(G) is the set of all terminal strings derivable from S.",
              "Worked example: over Σ = {a, b}, the language L = {w : |w| = 2 and w starts with a} = {aa, ab}. Concatenate L with itself: L² = {aaaa, aaab, abaa, abab}. The Kleene closure L* = {ε} ∪ L ∪ L² ∪ … contains every string whose length is a multiple of 2 and which is built by pasting copies of 'aa' or 'ab' end to end. Such manipulations are the everyday algebra of regular expressions, and the same algebra recurs whenever we reason about the languages of two automata that share an alphabet.",
              "The relationship between finite descriptions and infinite languages is the heart of the subject. A grammar is a finite object (a finite set of rules) that may generate an infinite language; an automaton is a finite machine that recognizes an infinite set; a regular expression is a finite formula. Each of these finite forms answers questions about an infinite set: 'is this string in the language?', 'are two descriptions equivalent?', 'is the language empty?'. The callout below — three faces of the same regular language — is the organizing picture of Unit II.",
            ],
            keyTerms: [
              { term: "Alphabet Σ", definition: "A finite non-empty set of symbols used to form strings." },
              { term: "Kleene closure Σ*", definition: "The set of all strings over Σ including ε; equivalently ⋃ Σⁱ for i ≥ 0." },
              { term: "Positive closure Σ+", definition: "Σ* with the empty string removed." },
              { term: "Language", definition: "Any subset of Σ*; a set of strings over a fixed alphabet." },
              { term: "Grammar G = (V, T, P, S)", definition: "A 4-tuple that generates a language by rewriting variables into strings of terminals and variables." },
            ],
            callout: {
              type: "tip",
              title: "The central question",
              body: "Three different machines can describe the same language: a grammar generates it, an automaton recognizes it, a regular expression specifies it. Almost every theorem in this course is of the form 'this grammar and that machine agree on the same set of strings.'",
            },
            diagram: {
              kind: "layers",
              title: "From alphabet to language",
              caption:
                "Each layer builds on the one below: symbols form strings, all strings form Sigma*, and a language is any subset of Sigma*.",
              layers: [
                { label: "Language L", note: "any subset of Sigma* - the object of study" },
                { label: "Sigma* (Kleene closure)", note: "all strings over Sigma, including epsilon" },
                { label: "Strings (words) w", note: "finite sequences of symbols, length |w|" },
                { label: "Alphabet Sigma", note: "finite non-empty set of symbols" },
              ],
            },
            bullets: [
              "Alphabet Sigma: a finite non-empty set of symbols (e.g. {0, 1}).",
              "String w over Sigma: a finite sequence of symbols; length |w|; the empty string epsilon has length 0.",
              "Concatenation xy; reversal w^R; powers w^0 = epsilon, w^2 = ww.",
              "Sigma* = all strings over Sigma including epsilon; Sigma+ = Sigma* minus epsilon.",
              "Language: any subset of Sigma*; languages combine under union, intersection, concatenation and star.",
              "Grammar G = (V, T, P, S) generates L(G): all terminal strings derivable from S.",
              "Worked example: over {a, b}, L = {aa, ab}; then L^2 = {aaaa, aaab, abaa, abab}.",
              "Key theme: finite descriptions (grammar, automaton, regex) characterize infinite languages.",
            ],
            examQuestions: [
              {
                q: "Define alphabet, string, language and Kleene closure. For Sigma = {a, b}, let L be the set of strings of length 2 that start with 'a'; compute L and the concatenation of L with itself.",
                marks: 7,
                outline: [
                  "Define alphabet with an example.",
                  "Define string, length, and the empty string epsilon.",
                  "Define a language as a subset of Sigma*.",
                  "Define Kleene closure Sigma* as the union of Sigma^i for i >= 0.",
                  "Compute L = {aa, ab}.",
                  "Compute L^2 = L.L = {aaaa, aaab, abaa, abab}.",
                  "Contrast Sigma* with Sigma+.",
                ],
              },
              {
                q: "Differentiate Sigma* and Sigma+ with one example each.",
                marks: 2,
              },
              {
                q: "If |w| = 3 over Sigma = {0, 1}, how many strings are in Sigma^3? Define concatenation with an example.",
                marks: 3,
                outline: [
                  "|Sigma^3| = 2^3 = 8 strings.",
                  "Concatenation: x = 01, y = 10 gives xy = 0110.",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Types of automata",
            body: [
              "An automaton is an abstract machine — a mathematical model of computation with a finite set of states, a way to read input, and rules for moving between states. Automata differ in only one crucial resource: memory. A finite automaton has no memory beyond its current state, so it can only count modulo a fixed number, never remembering exactly how many symbols it has already seen. A pushdown automaton adds an unbounded stack: it can push and pop, counting arbitrarily far but only in last-in-first-out order. A Turing machine replaces the stack with an infinite readable-writable tape, giving it the full power of any computer that has ever been built. This ladder of memory is the spine of the whole subject.",
              "Formally each machine is a tuple listing its parts. A finite automaton M = (Q, Σ, δ, q₀, F) has states Q, alphabet Σ, transition function δ, a start state q₀ and final states F. A pushdown automaton adds a stack alphabet Γ and pushes/pops in its transition δ: Q × (Σ ∪ {ε}) × Γ_top → finite subsets of Q × Γ*. A Turing machine is (Q, Σ, Γ, δ, q₀, □, F): it adds a tape alphabet Γ, a blank symbol □, and a head that moves left or right. Each tuple says exactly how much memory the machine has, and which questions about it are decidable.",
              "The machines accept increasingly expressive families of languages. Finite automata accept the regular languages (Type 3); pushdown automata accept the context-free languages (Type 2); linear-bounded automata — Turing machines on bounded tape — accept the context-sensitive languages (Type 1); and unrestricted Turing machines accept the recursively enumerable languages (Type 0). This correspondence, the Chomsky hierarchy, is one of the cleanest results in computer science: each grammatical restriction lines up exactly with a memory restriction, and the four floors nest strictly. Memorize the pyramid below — every later unit will return to it.",
            ],
            keyTerms: [
              { term: "Automaton", definition: "An abstract machine that recognizes (or generates) a language by following transition rules." },
              { term: "Finite automaton", definition: "A machine with a finite set of states and no auxiliary memory; accepts the regular languages." },
              { term: "Pushdown automaton", definition: "A finite automaton augmented with an unbounded LIFO stack; accepts the context-free languages." },
              { term: "Turing machine", definition: "A finite automaton augmented with an infinite read-write tape; accepts the recursively enumerable languages." },
              { term: "Memory hierarchy", definition: "The ladder of resources (none → stack → tape) that strictly separates the four language families." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The automata ladder",
              caption:
                "Each machine gains memory and, with it, the ability to recognize a strictly larger family of languages.",
              tiers: [
                { label: "Turing machine", note: "infinite tape · Type 0" },
                { label: "Pushdown automaton", note: "unbounded stack · Type 2" },
                { label: "Finite automaton", note: "state only · Type 3" },
              ],
            },
            table: {
              caption: "The memory ladder with one witness language per floor.",
              headers: ["Machine", "Memory", "Language family", "Example language"],
              rows: [
                ["Finite automaton (FA)", "current state only", "Regular (Type 3)", "strings ending in 01"],
                ["Pushdown automaton (PDA)", "unbounded stack (LIFO)", "Context-free (Type 2)", "{a^n b^n : n >= 0}"],
                ["Linear-bounded automaton (LBA)", "tape of length c x |input|", "Context-sensitive (Type 1)", "{a^n b^n c^n : n >= 1}"],
                ["Turing machine (TM)", "infinite read-write tape", "Recursively enumerable (Type 0)", "yes-instances of the halting problem"],
              ],
            },
            bullets: [
              "Automaton = abstract machine: finite states, input reading, transition rules.",
              "FA: no memory beyond the state - can count only modulo a constant.",
              "PDA: adds an unbounded LIFO stack - counts arbitrarily but in last-in-first-out order.",
              "TM: infinite read-write tape - as powerful as any computer ever built.",
              "Tuples: FA = (Q, Sigma, delta, q0, F); PDA adds a stack alphabet Gamma; TM adds a tape alphabet and a blank symbol.",
              "Language families: regular (Type 3), context-free (Type 2), context-sensitive (Type 1), recursively enumerable (Type 0).",
              "More memory strictly buys more languages - each step up the ladder is a proper containment.",
            ],
            callout: {
              type: "exam",
              title: "Draw the ladder",
              body: "Whenever a question says 'explain types of automata', draw the memory ladder and pair each machine with its language family and one witness language. The pairing machine <-> family <-> witness is what the marks are for.",
            },
            examQuestions: [
              {
                q: "Explain the different types of automata based on their memory capability, and relate each type to the class of languages it accepts with one example language.",
                marks: 7,
                outline: [
                  "Define an automaton generally.",
                  "FA: finite states only, no auxiliary memory; accepts regular languages; example: strings ending in 01.",
                  "PDA: finite control plus a stack; accepts context-free languages; example: a^n b^n.",
                  "LBA: Turing machine on tape bounded by c x |input|; accepts context-sensitive languages; example: a^n b^n c^n.",
                  "TM: infinite tape; accepts recursively enumerable languages.",
                  "State that each step up the ladder strictly enlarges the language family.",
                  "Draw the ladder diagram with the memory resource labelled on each floor.",
                ],
              },
              {
                q: "Which automaton accepts the context-free languages, and what memory resource does it use?",
                marks: 2,
              },
              {
                q: "Compare a finite automaton and a pushdown automaton in terms of memory and counting ability.",
                marks: 3,
                outline: [
                  "FA: state only - counting modulo a constant.",
                  "PDA: unbounded stack - arbitrary LIFO counting; example a^n b^n.",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Finite automata as acceptor and translator",
            body: [
              "A finite automaton (FA) is formally the 5-tuple M = (Q, Σ, δ, q₀, F): a finite set of states Q, an input alphabet Σ, a transition function δ mapping state–symbol pairs to states, a designated start state q₀, and a set of final (accepting) states F ⊆ Q. The machine reads the input string one symbol at a time starting in q₀ and follows δ at each step. When the string ends the machine accepts if it stands in a final state and rejects otherwise; the set of all accepted strings is L(M). In its acceptor role, the FA is a yes/no decision device — a compiler's lexical analyzer is exactly this: a big FA saying 'token' or 'error'.",
              "In its translator role, the machine produces output as it runs, converting an input string into an output string. Transducers — Moore and Mealy machines — are the translator form of finite automata, modeling circuits, protocol converters and vending machines. The FA can be drawn three equivalent ways: a transition diagram (directed graph: circles for states, labelled arrows for moves), a transition table (rows = states, columns = symbols), and the formal tuple itself; moving fluently among the three is a guaranteed exam skill. Engineers prefer diagrams for design, tables for implementation, tuples for proofs.",
              "The transition function δ extends from single symbols to entire strings by induction: δ(q, ε) = q (the machine does nothing on the empty string) and δ(q, aw) = δ(δ(q, a), w) (process one symbol, then the rest from the new state). A string w is accepted exactly when δ(q₀, w) ∈ F. This recursive definition is what makes acceptance decidable: feed the string left to right, look at the final state, and check membership in F. The same recursive extension handles nondeterministic machines — δ returns sets there, and the recursion uses union.",
              "Two design disciplines sharpen every automaton problem. First, decide up front whether the machine is an acceptor (5-tuple, has finals) or a translator (6-tuple, has output alphabet, no finals) — mixing the two is the most common mistake in transducer questions. Second, name states by their meaning: q_even, q_odd, q_seen11 — never q1, q2, q3. A state name that describes what the machine has seen so far is half the design: the transitions fall out almost mechanically. The table below summarizes the three views of one machine; in the exam, draw the diagram first, then write the tuple.",
            ],
            keyTerms: [
              { term: "Finite automaton M = (Q, Σ, δ, q₀, F)", definition: "The 5-tuple definition of an acceptor machine." },
              { term: "Transition function δ", definition: "Maps a (state, symbol) pair to the next state (or set of states for an NFA)." },
              { term: "Acceptor", definition: "A machine that decides yes/no membership of a string in a language." },
              { term: "Transducer", definition: "A machine that maps input strings to output strings (Moore or Mealy)." },
              { term: "Language L(M)", definition: "The set of all strings the automaton accepts; L(M) = {w ∈ Σ* : δ(q₀, w) ∈ F}." },
            ],
            table: {
              caption: "Three equivalent views of one finite automaton.",
              headers: ["View", "Example (Figure 3)", "Use"],
              rows: [
                ["Transition diagram", "circles q₀ → q₁ → q₂ with labelled arrows", "human reading, design"],
                ["Transition table", "q₀: a→q₁, b→q₀ …", "implementation, conversion"],
                ["Formal tuple", "({q₀,q₁,q₂}, {a,b}, δ, q₀, {q₂})", "proofs, theorems"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "FA as acceptor vs FA as translator",
              caption:
                "The acceptor answers yes/no using final states; the transducer (Moore or Mealy) emits one output symbol per step and has no final states.",
              left: {
                heading: "Acceptor (recognizer)",
                items: [
                  "5-tuple (Q, Sigma, delta, q0, F)",
                  "Has a set of final states F",
                  "Accepts w when delta(q0, w) is in F",
                  "Example: a lexical analyzer answering token or error",
                ],
              },
              right: {
                heading: "Translator (transducer)",
                items: [
                  "6-tuple with an output alphabet and output function lambda",
                  "No final states - it translates, never accepts",
                  "Output per state (Moore) or per move (Mealy)",
                  "Example: protocol converter, serial adder, vending machine",
                ],
              },
            },
            bullets: [
              "FA formalized as M = (Q, Sigma, delta, q0, F).",
              "Acceptance: w is accepted iff delta(q0, w) is in F; L(M) = {w : delta(q0, w) in F}.",
              "Extended transition: delta(q, epsilon) = q and delta(q, aw) = delta(delta(q, a), w).",
              "Three equivalent views: transition diagram, transition table, formal tuple.",
              "Transducers (Moore, Mealy) are the translator form - they output while reading.",
              "Design discipline: name states by what they remember (q_even, q_seen01), never q1, q2, q3.",
              "Decide acceptor vs translator up front; mixing the two loses marks in transducer questions.",
            ],
            callout: {
              type: "tip",
              title: "Write the tuple first",
              body: "In every automaton question, write the formal 5-tuple (or 6-tuple for a transducer) before drawing the diagram. The tuple earns the definition marks even if the drawing is imperfect, and it forces you to fix the alphabet and final states before designing states.",
            },
            examQuestions: [
              {
                q: "Define a finite automaton formally. Extend its transition function to strings and construct a DFA over {0, 1} that accepts all strings ending in '01'. Trace the run on the input 1101.",
                marks: 7,
                outline: [
                  "Give M = (Q, Sigma, delta, q0, F) with the role of each component.",
                  "Define the extended transition: delta(q, epsilon) = q, delta(q, aw) = delta(delta(q, a), w).",
                  "Design states q0 (nothing useful seen), q1 (last symbol 0), q2 (last two symbols 01).",
                  "Give all six transitions and F = {q2}.",
                  "Draw the transition diagram and table.",
                  "Trace 1101: q0 -> q0 -> q1 -> q2 - accepted.",
                ],
              },
              {
                q: "What is a transducer? Name the two classic transducer models.",
                marks: 2,
              },
              {
                q: "State the extended transition function of a DFA and explain how acceptance is decided.",
                marks: 3,
                outline: [
                  "delta(q, epsilon) = q; delta(q, aw) = delta(delta(q, a), w).",
                  "Accept w iff delta(q0, w) belongs to F.",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Moore machines and Mealy machines",
            body: [
              "A Moore machine is a 6-tuple (Q, Σ, Δ, δ, λ, q₀) where Δ is an output alphabet and λ: Q → Δ is an output function on states: every state carries a fixed output letter, and the machine emits the output of the state it has just entered. Output length is input length plus one (it prints the start state's output before reading anything). A Mealy machine instead attaches output to transitions: λ: Q × Σ → Δ, so each move prints one symbol and the output has exactly the same length as the input. Neither machine has final states and neither 'accepts' a language — both translate input strings into output strings, one output symbol per step. The mnemonic: Moore = output on state, Mealy = output on move.",
              "Trace a 1's complement machine as a worked example. Input alphabet Σ = {0, 1}, output Δ = {0, 1}. As a Mealy machine we need one state q with transitions: on input 0 print 1 (move back to q); on input 1 print 0 (move back to q). Output length equals input length: input 0110 produces output 1001. As a Moore machine the same translation cannot be done with one state, because each state prints a fixed letter regardless of input. The Moore machine must keep two states, one that prints 0 and one that prints 1, and toggle between them based on what input was just consumed — printing the previously seen symbol. This delay is exactly the extra first symbol that distinguishes Moore output from Mealy output.",
              "Design trade-offs follow directly from where the output lives. Moore outputs are simpler to implement as clocked sequential circuits: the state register holds the value, output is a function of the register alone, so glitches on input wires do not propagate to output. Mealy outputs respond combinatorially to the input the moment it arrives, so they are faster (one symbol per cycle, no extra latency) but more sensitive to input timing. Hardware designers pick Moore when stability matters, Mealy when latency matters. Both models are equivalent in expressive power: every Moore machine has a Mealy counterpart and vice versa, which is the content of the next section.",
            ],
            keyTerms: [
              { term: "Moore machine", definition: "6-tuple (Q, Σ, Δ, δ, λ, q₀) with output function λ: Q → Δ on states." },
              { term: "Mealy machine", definition: "6-tuple with output function λ: Q × Σ → Δ on transitions." },
              { term: "Output alphabet Δ", definition: "The alphabet of symbols a transducer may emit." },
              { term: "Transducer equivalence", definition: "Every Moore machine has a Mealy equivalent and vice versa, up to the leading Moore symbol." },
            ],
            diagram: {
              kind: "compare",
              title: "Moore vs Mealy transducers",
              caption:
                "Moore hangs its output on states (length |input|+1); Mealy hangs it on transitions (length |input|).",
              left: {
                heading: "Moore machine",
                items: [
                  "Output attached to state — λ: Q → Δ",
                  "Each state prints its own letter when entered",
                  "Output length = |input| + 1",
                  "Suited to sequential circuits, output per clock",
                ],
              },
              right: {
                heading: "Mealy machine",
                items: [
                  "Output attached to transition — λ: Q × Σ → Δ",
                  "Each arrow prints its letter while moving",
                  "Output length = |input|",
                  "Suited to protocol converters, encoders",
                ],
              },
            },
            bullets: [
              "Moore machine: (Q, Sigma, Delta, delta, lambda, q0) with lambda : Q -> Delta - output on states.",
              "Mealy machine: lambda : Q x Sigma -> Delta - output on transitions.",
              "Moore output length = |input| + 1; Mealy output length = |input|.",
              "Neither model has final states; both translate rather than accept.",
              "Worked Mealy for 1's complement: one state that prints 1 on reading 0 and 0 on reading 1.",
              "The same task needs two Moore states because each state prints a fixed letter.",
              "Moore: glitch-free, suits clocked circuits; Mealy: lower latency, suits converters.",
              "Mnemonic: Moore = output on state, Mealy = output on move.",
            ],
            callout: {
              type: "warning",
              title: "Length tells the model",
              body: "The quickest examiner check: count outputs. If the output has one more symbol than the input, it is a Moore machine (the leading symbol is the start state's output). A Mealy machine can never produce that extra symbol - mixing the two conventions is an instant mark deduction.",
            },
            examQuestions: [
              {
                q: "Define Moore and Mealy machines. Construct a Mealy machine that produces the 1's complement of a binary string, and explain why a Moore machine for the same task needs one more state.",
                marks: 7,
                outline: [
                  "Give both 6-tuples and where the output function lives.",
                  "Mealy construction: one state q; on 0 print 1, on 1 print 0.",
                  "Trace input 0110 -> output 1001, equal lengths.",
                  "Moore needs a state printing 0 and a state printing 1, toggling per input symbol.",
                  "Explain the extra leading symbol of Moore output.",
                  "Compare the two models for circuit implementation.",
                ],
              },
              {
                q: "State the relation between output length and input length for Moore and Mealy machines.",
                marks: 2,
              },
              {
                q: "Draw the state diagram of a Mealy machine that outputs the 1's complement of its binary input.",
                marks: 3,
                outline: [
                  "One state q with a self-loop on 0 printing 1.",
                  "Self-loop on 1 printing 0; label arrows input/output.",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Conversion from Mealy to Moore and vice versa",
            body: [
              "Mealy → Moore. The obstacle is that a Moore state can print only one letter, while a Mealy state may leave on different arrows printing different letters. The fix is to split each Mealy state into one copy per distinct output letter on its incoming arrows: state q with incoming outputs {0,1} becomes q0 and q1, each carrying that output as its state label. Transitions are rewired to the copy matching the printed letter, and if the start state has no incoming arrow we add a dummy start printing anything (its extra first symbol is discarded). The resulting Moore machine has at most |Q| × |Δ| states.",
              "Moore → Mealy. This direction is easier: each Moore state already knows its letter, so make every arrow into state q print q's letter — label the transition with symbol/output and drop the state outputs. The states, arrows and input behaviour are unchanged; only the first output symbol (which Moore printed before reading anything) disappears, aligning output length with input length. Both conversions preserve the translation up to that leading symbol, which is why the two models are called equivalent.",
              "Worked Mealy → Moore on a tiny machine. Suppose Mealy state q has two incoming arrows: from p on input 0/output 1, and from r on input 1/output 0. Since q's incoming outputs differ (1 and 0), q must split into two copies: q1 (carries output 1, reached from p) and q0 (carries output 0, reached from r). The outgoing arrows of q are duplicated onto both copies. The resulting Moore machine accepts the same translations as the original Mealy: at any moment the state name records the most recent output, which is exactly the information Moore needs but Mealy computed on the fly.",
              "Worked Moore → Mealy. Take a Moore machine with state q₀ outputting 0 and q₁ outputting 1, with arrow q₀ —a→ q₁. Convert by labelling every arrow into q₁ with output 1: the arrow becomes q₀ —a/1→ q₁. Drop the state-output function entirely. The Mealy machine has the same states, same arrows, same input behaviour; only the first Moore output (the one printed before any input was read) is lost. This is why we say the two machines are equivalent up to a leading symbol — they translate identically once the input starts flowing.",
            ],
            table: {
              caption: "Moore vs Mealy at a glance.",
              headers: ["Property", "Moore", "Mealy"],
              rows: [
                ["Output attached to", "state (λ: Q → Δ)", "transition (λ: Q × Σ → Δ)"],
                ["Output length", "|input| + 1", "|input|"],
                ["States after conversion", "fewer or equal", "up to |Q| × |Δ|"],
                ["Final states?", "none — translates", "none — translates"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Both conversion directions",
              caption:
                "Moore → Mealy changes only labels; Mealy → Moore may multiply states, one copy per distinct incoming output.",
              steps: [
                { label: "Mealy M", note: "output on arrows" },
                { label: "Split states", note: "one copy per incoming output" },
                { label: "Moore M′", note: "letter moves onto the state" },
                { label: "Moore M", note: "output on states" },
                { label: "Move letter to arrows", note: "each arrow prints target's letter" },
                { label: "Mealy M′", note: "same states, same behaviour" },
              ],
            },
            callout: {
              type: "tip",
              title: "Direction matters",
              body: "Moore → Mealy is cheap (relabel arrows, drop state outputs); Mealy → Moore is expensive (split states by incoming outputs). Always state which direction the question asks for before drawing — students often lose marks by inverting the construction.",
            },
            keyTerms: [
              { term: "State splitting", definition: "Mealy-to-Moore conversion copies a state once per distinct output letter on its incoming arrows." },
              { term: "|Q| x |Delta| bound", definition: "The maximum number of states of the Moore machine obtained from a Mealy machine." },
              { term: "Leading symbol", definition: "The extra first output a Moore machine prints before reading anything; the conversions agree up to it." },
              { term: "Arrow relabelling", definition: "Moore-to-Mealy conversion prints each state's letter on every arrow entering that state." },
            ],
            bullets: [
              "Mealy -> Moore: split each state into copies, one per distinct incoming output letter.",
              "The resulting Moore machine has at most |Q| x |Delta| states.",
              "Add a dummy start (with any output) if the start state has no incoming arrow; discard its extra symbol.",
              "Moore -> Mealy: print the target state's letter on every incoming arrow; drop the state output function lambda.",
              "States and input behaviour are unchanged in the Moore -> Mealy direction.",
              "Both conversions preserve the translation up to the leading Moore symbol - hence 'equivalent'.",
              "Worked split: a Mealy state q with incoming outputs 1 (from p) and 0 (from r) becomes q1 and q0, with outgoing arrows duplicated.",
            ],
            examQuestions: [
              {
                q: "Explain the conversion of a Mealy machine into a Moore machine using the state-splitting technique, stating the bound on the number of states. Illustrate on a small example.",
                marks: 7,
                outline: [
                  "State the obstacle: a Moore state prints one fixed letter, but a Mealy state may leave on arrows with different outputs.",
                  "Split rule: one copy of q per distinct output on q's incoming arrows.",
                  "Rewire transitions to the copy matching the printed letter.",
                  "Handle the start state with a dummy (its extra symbol is discarded).",
                  "State the |Q| x |Delta| bound.",
                  "Worked example: q with incoming outputs 1 and 0 splits into q1 and q0; outgoing arrows duplicated.",
                  "Verify one input/output pair behaves identically.",
                ],
              },
              {
                q: "Which conversion direction (Mealy to Moore, or Moore to Mealy) can increase the number of states, and why?",
                marks: 2,
              },
              {
                q: "A Moore machine has q0 printing 0 and q1 printing 1 with the arrow q0 -a-> q1. Write the converted Mealy transition.",
                marks: 3,
                outline: [
                  "Label the arrow with the target's output: q0 -a/1-> q1.",
                  "Drop the state output function; output length becomes |input|.",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "The composite machine",
            body: [
              "Finite machines compose. When the output alphabet of one machine is the input alphabet of the next, the two can be connected in cascade (serial composition): machine M₁ reads the external input and its output stream feeds machine M₂, which produces the combined output. The cascade of two finite transducers is itself a finite transducer whose states are the pairs (state of M₁, state of M₂) — at most |Q₁| × |Q₂| of them — which is exactly how hardware designers chain counters, shift registers and decoders into one composite circuit. The idea generalizes to any chain M₁ → M₂ → M₃ …, and it is the mathematical skeleton behind the 'pipeline': each stage transforms its input language into the input of the next stage.",
              "Formally the cascade M = M₁ ∘ M₂ has states Q = Q₁ × Q₂, input alphabet Σ₁ (of M₁), output alphabet Δ₂ (of M₂), start state (q₀₁, q₀₂), and at each step the input symbol drives M₁ whose output drives M₂: if M₁ in p on input a outputs b and goes to p′, and M₂ in q on input b outputs c and goes to q′, then the cascade in (p, q) on input a outputs c and goes to (p′, q′). This product construction recurs throughout the subject — closure under intersection uses the same pairing idea, with both components reading the same input.",
              "Real hardware examples make the abstraction concrete. A serial adder is the cascade of a full-adder combinational block with a one-bit delay flip-flop: the flip-flop stores the carry-out for use in the next clock cycle. A BCD-to-seven-segment decoder is the cascade of a BCD counter (M₁) with a decoder map (M₂) that converts each BCD code into the seven-segment pattern. In each case the composite machine's behaviour is fully determined by the two components and the wiring between them — no extra state, no extra rules. Cascades are why finite-state design scales: build small verified machines and snap them together.",
            ],
            keyTerms: [
              { term: "Cascade composition", definition: "Serial composition of two transducers M₁ → M₂ where M₁'s output feeds M₂'s input." },
              { term: "Product state space Q₁ × Q₂", definition: "The state set of the cascade; one state per pair (state of M₁, state of M₂)." },
              { term: "Pipeline", definition: "A chain of machines each transforming the previous stage's output language into the next stage's input." },
              { term: "Serial adder", definition: "The textbook cascade — a full-adder block plus a carry-delay flip-flop." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Serial (cascade) composition",
              caption:
                "M₁'s output stream is M₂'s input; the pair behaves as a single finite machine on the product Q₁ × Q₂ of their states.",
              stages: [
                { label: "Input x over Σ" },
                { label: "Machine M₁", note: "maps Σ → Γ" },
                { label: "Machine M₂", note: "maps Γ → Δ" },
                { label: "Output z over Δ" },
              ],
            },
            bullets: [
              "Cascade (serial composition): M1's output stream feeds M2; the combined machine is M = M1 o M2.",
              "State space of the cascade: Q1 x Q2 - at most |Q1| x |Q2| pairs.",
              "Transition rule: on input a, M1 moves p -> p' emitting b; M2 consumes b moving q -> q' emitting c; the cascade emits c and moves to (p', q').",
              "Chains M1 -> M2 -> M3 ... generalize to any pipeline of finite machines.",
              "The product construction reappears in closure under union and intersection - pair the states and read in lockstep.",
              "Hardware examples: serial adder (full adder + carry flip-flop), BCD counter + seven-segment decoder.",
              "Design lesson: build small verified machines and compose - no extra state or rules are needed.",
            ],
            callout: {
              type: "tip",
              title: "Count the product states",
              body: "A favourite short question asks for the number of states of a cascade: it is |Q1| x |Q2|, not |Q1| + |Q2|. If the question then asks you to simulate, tabulate the pair states in a grid with M1's state as row and M2's state as column - every transition fills one cell.",
            },
            examQuestions: [
              {
                q: "Explain the serial (cascade) composition of two finite machines. Derive the transition rule of the composite machine on the product state space and describe the serial adder as a cascade.",
                marks: 7,
                outline: [
                  "Define cascade composition and when it applies (M1's output alphabet = M2's input alphabet).",
                  "Give the composite tuple: states Q1 x Q2, input Sigma1, output Delta2, start (q01, q02).",
                  "Derive the one-step rule with p, q, a, b, c.",
                  "Bound the state count by |Q1| x |Q2|.",
                  "Serial adder: a full-adder block plus a one-bit carry-delay flip-flop.",
                  "BCD-to-seven-segment example: a counter cascaded with a decoder.",
                  "Note the connection to the product construction used for closure properties.",
                ],
              },
              {
                q: "How many states can the cascade of machines with |Q1| and |Q2| states have?",
                marks: 2,
              },
              {
                q: "State the one-step transition rule of the cascade M1 o M2.",
                marks: 3,
                outline: [
                  "M1 in p on input a moves to p' emitting b.",
                  "M2 in q on b moves to q' emitting c; the cascade emits c and enters (p', q').",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Types of Finite Automata",
      summary:
        "Unit II is the heart of finite automata theory: nondeterminism, the algorithm that removes it, and the one that shrinks a machine to its smallest form. Then the algebra of regular expressions, Arden's theorem for solving language equations, closure properties of regular languages, and the two-way DFA that looks before it leaps.",
      chapter: {
        number: "02",
        title: "NDFA, DFA, Regex & Minimization",
        intro:
          "Unit II covers DFA and NDFA, subset construction, DFA minimization, regular expressions and Kleene's theorem, Arden's theorem, closure properties, and the two-way DFA.",
        inOneBreath:
          "NFAs and DFAs accept the same languages; subset construction converts NFA → DFA; partition refinement minimizes; regex, FA and right-linear grammars are three faces of the regular languages; Arden's theorem solves the equations; closure properties build new regular languages from old; and even a two-way head changes nothing.",
        sections: [
          {
            number: "2.1",
            title: "Deterministic finite automata (DFA)",
            body: [
              "A DFA is deterministic because at every step the next move is completely decided: the transition function δ maps each (state, symbol) pair to exactly one state, and there are no missing arrows — every state has one outgoing edge per alphabet symbol. Reading a string is therefore a single, forced walk from q₀ to exactly one final state; the string is accepted if that state belongs to F. This totality and unambiguity make the DFA the machine of choice for implementation: a table lookup per input symbol, constant memory, guaranteed linear time. Formally, a DFA is M = (Q, Σ, δ, q₀, F) with δ: Q × Σ → Q, extended to strings by δ(q, aw) = δ(δ(q, a), w).",
              "Worked design: build a DFA over {0,1} that accepts strings ending in '01'. The machine must remember the last two symbols seen — three situations suffice: q₀ (start, nothing useful seen), q₁ (last symbol was 0), q₂ (last two symbols were 01, accept). Transitions: q₀ on 0 → q₁, q₀ on 1 → q₀; q₁ on 0 → q₁ (still ends in 0), q₁ on 1 → q₂; q₂ on 0 → q₁, q₂ on 1 → q₀. Acceptance set F = {q₂}. Run '1101' on it: q₀ → q₀ → q₁ → q₂ → accepted. Each state's name describes what it remembers, which is the design discipline that turns guesswork into routine.",
              "Determinism has consequences beyond implementation. Because there is exactly one path for every string, we can ask whether two DFAs accept the same language by minimizing both and checking isomorphism of the results — a question that is decidable for DFAs but undecidable for general grammars. Determinism also makes complement trivial: swap final and non-final states to obtain a DFA for the complement language. The price of determinism is state count: the smallest DFA for a language can be exponentially larger than the smallest NFA, as the worst case of subset construction shows.",
            ],
            keyTerms: [
              { term: "Determinism", definition: "Every (state, symbol) pair maps to exactly one next state; no ambiguity, no missing arrows." },
              { term: "5-tuple M = (Q, Σ, δ, q₀, F)", definition: "The formal definition of a DFA." },
              { term: "Acceptance", definition: "A string w is accepted when δ(q₀, w) ∈ F." },
              { term: "Linear-time simulation", definition: "A DFA reads n symbols in n steps with constant memory." },
            ],
            diagram: {
              kind: "flow",
              title: "A small DFA",
              caption:
                "Determinism means: from each state, exactly one arrow per symbol — the reader can simulate it with a finger and never be confused.",
              steps: [
                { label: "start → p₀" },
                { label: "p₀", note: "reads a or b" },
                { label: "p₁", note: "second symbol" },
                { label: "p₂" },
                { label: "p₃", note: "accept state" },
              ],
            },
            bullets: [
              "DFA M = (Q, Sigma, delta, q0, F) with delta : Q x Sigma -> Q - total and single-valued.",
              "Every state has exactly one outgoing arrow per symbol; no epsilon moves.",
              "Acceptance: delta(q0, w) in F; there is exactly one path per string.",
              "Implementation: one table lookup per symbol, constant memory, guaranteed linear time.",
              "Worked design: strings ending in 01 - states q0, q1, q2 with F = {q2}; trace 1101 accepted.",
              "Complement is trivial: swap final and non-final states.",
              "Price of determinism: the minimal DFA can be exponentially larger than the smallest NFA.",
            ],
            callout: {
              type: "tip",
              title: "Name states by meaning",
              body: "In design questions, name each state after what it has seen so far (q_last0, q_seen01). The transitions then fall out mechanically, and the examiner can follow your design intent - a DFA with anonymous states q1..qn usually signals guesswork and loses method marks.",
            },
            codeExample: {
              language: "python",
              caption: "Simulating the DFA for strings over {0, 1} ending in '01'.",
              code: "delta = {\n    (\"q0\", \"0\"): \"q1\", (\"q0\", \"1\"): \"q0\",\n    (\"q1\", \"0\"): \"q1\", (\"q1\", \"1\"): \"q2\",\n    (\"q2\", \"0\"): \"q1\", (\"q2\", \"1\"): \"q0\",\n}\nfinals = {\"q2\"}\n\ndef accepts(w):\n    state = \"q0\"\n    for ch in w:\n        state = delta[(state, ch)]   # one table lookup per symbol\n    return state in finals\n\nprint(accepts(\"1101\"))  # True  (ends in 01)\nprint(accepts(\"110\"))   # False",
            },
            examQuestions: [
              {
                q: "Construct a DFA over {0, 1} that accepts exactly the strings ending in '01'. Give the formal tuple, the transition table, and trace the input 1101.",
                marks: 7,
                outline: [
                  "Intuition: remember the last two symbols seen.",
                  "States q0 (start), q1 (last symbol 0), q2 (last two symbols 01, final).",
                  "All six transitions, with F = {q2}.",
                  "Formal tuple M = (Q, Sigma, delta, q0, F).",
                  "Transition table with rows q0, q1, q2.",
                  "Trace 1101: q0 -> q0 -> q1 -> q2 - accepted.",
                ],
              },
              {
                q: "Define determinism of a DFA.",
                marks: 2,
              },
              {
                q: "Design a DFA over {a, b} accepting strings that begin with 'a'. Give the states and transitions.",
                marks: 3,
                outline: [
                  "States: q0 (start), q1 (seen leading a, final), dead (reject).",
                  "q0 on a -> q1; q0 on b -> dead; q1 loops on a and b.",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Nondeterministic finite automata (NDFA/NFA)",
            body: [
              "An NDFA relaxes both restrictions: δ maps a (state, symbol) pair to a set of states — possibly empty, possibly several — and ε-moves are allowed, which let the machine change state without consuming input. Reading a string is no longer one walk but a tree of parallel worlds: after each symbol the machine occupies a whole set of states at once, and the input is accepted if at least one path among all the possible paths ends in a final state. Think of nondeterminism as a machine that makes perfect guesses: it accepts if some sequence of lucky choices reaches acceptance. NFAs are far easier to design than DFAs — for 'the third symbol from the end is b' the NFA simply guesses when to start counting — and they are exactly as powerful as DFAs, which is the content of the next section.",
              "Formally an NFA is the 5-tuple (Q, Σ, δ, q₀, F) where δ: Q × (Σ ∪ {ε}) → 2^Q. The extended transition on a string is defined recursively using ε-closure: δ̂(q, ε) = ε-closure(q), and δ̂(q, aw) = ε-closure(⋃ δ̂(q, a) over states in δ̂(q, ε)). For an NFA without ε-moves the recursion simplifies to: from the current set of states, take the union of all arrows labelled a, and repeat for the next symbol. A string w is accepted when δ̂(q₀, w) ∩ F ≠ ∅ — at least one of the final possibilities lands in a final state.",
              "Worked design: build an NFA over {a, b} for strings whose third-from-last symbol is b. Guess when to start counting: state q₀ on a or b stays in q₀ (still searching); on b also branches to q₁ (start counting). Then q₁ on a or b → q₂; q₂ on a or b → q₃ (final). The NFA has four states and accepts exactly when some guess makes the last three symbols read 'b??'. The smallest DFA for the same language needs eight states (one per length-3 suffix) — the NFA is half the size, and the gap grows with the position. This is why NFAs are the design language and DFAs are the implementation language: design with the easy tool, then convert.",
            ],
            keyTerms: [
              { term: "Nondeterminism", definition: "A transition may lead to zero, one or several next states; acceptance survives if any path reaches F." },
              { term: "ε-move", definition: "A transition that changes state without consuming an input symbol." },
              { term: "ε-closure(q)", definition: "The set of all states reachable from q by following ε-moves alone (including q itself)." },
              { term: "Extended transition δ̂", definition: "The function on strings obtained by composing one-symbol moves; returns the set of possible current states." },
            ],
            table: {
              caption: "DFA vs NDFA.",
              headers: ["Aspect", "DFA", "NDFA"],
              rows: [
                ["Transition function", "δ: Q × Σ → Q", "δ: Q × Σ → 2^Q"],
                ["Arrows per (state, symbol)", "exactly one", "zero, one or many"],
                ["ε-moves", "not allowed", "allowed"],
                ["Reading a string", "one path", "many parallel paths; accept if any ends in F"],
                ["Ease of design", "harder, more states", "easier, usually fewer states"],
                ["Power", "exactly the same — the regular languages", "exactly the same — the regular languages"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The NFA acceptance decision",
              caption:
                "While reading, the NFA holds a set of possible states - one per surviving guess. At the end of the string only that set matters.",
              start: "The NFA has consumed the whole string w",
              branches: [
                { label: "Current state set intersects F", outcome: "some guessed path reached a final state - w is accepted", good: true },
                { label: "Current state set misses F", outcome: "every path died or ended outside F - w is rejected", good: false },
              ],
            },
            bullets: [
              "NFA: delta : Q x (Sigma union {epsilon}) -> 2^Q - zero, one or many moves; epsilon moves allowed.",
              "Reading a string yields a tree of parallel worlds, not a single walk.",
              "Acceptance: delta_hat(q0, w) intersect F is non-empty - some path accepts.",
              "epsilon-closure(q): all states reachable from q by epsilon moves alone (q included).",
              "Worked design: third symbol from the end is b - a 4-state NFA that guesses where the last three symbols start.",
              "The smallest DFA for that language needs 8 states - nondeterminism often halves the design.",
              "NFAs and DFAs accept exactly the same family: design with the NFA, implement with the DFA.",
            ],
            callout: {
              type: "warning",
              title: "'More powerful' is wrong",
              body: "Never say an NFA is more powerful than a DFA - both accept exactly the regular languages. What nondeterminism buys is smaller, easier designs, not new languages. Writing 'NFA is more powerful' on an answer sheet is a classic mark-losing sentence.",
            },
            examQuestions: [
              {
                q: "Define a nondeterministic finite automaton with epsilon moves. Construct an NFA over {a, b} accepting strings whose third symbol from the end is b, and compare its size with the equivalent DFA.",
                marks: 7,
                outline: [
                  "Formal tuple with delta : Q x (Sigma union {epsilon}) -> 2^Q.",
                  "Explain acceptance by any one path.",
                  "Design: q0 loops on a and b and also branches to q1 on b; q1 -> q2 -> q3 (final) on a or b.",
                  "Explain the guessing intuition for the last three symbols.",
                  "Draw the transition diagram.",
                  "Note that the equivalent DFA needs 8 states (one per length-3 suffix).",
                  "Conclude: same power, fewer states.",
                ],
              },
              {
                q: "Define the epsilon-closure of a state.",
                marks: 2,
              },
              {
                q: "State the acceptance condition of an NFA in terms of the extended transition function.",
                marks: 3,
                outline: [
                  "Compute the set delta_hat(q0, w) of possible current states.",
                  "Accept iff delta_hat(q0, w) intersect F is non-empty.",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Conversion of NDFA to DFA (subset construction)",
            body: [
              "Every NDFA can be converted into an equivalent DFA by a beautiful change of viewpoint: let each DFA state be the set of NDFA states that the machine could currently occupy. Step 1: the DFA start state is the ε-closure of the NDFA start state q₀ (q₀ plus every state reachable from it by ε-moves alone). Step 2: for any subset S and input symbol a, compute δ′(S, a) = the ε-closure of the set of all NDFA states reachable from some state of S by one a-move. Step 3: repeat step 2 for every new subset that appears, until no new subsets are born. Step 4: a DFA subset is final if it contains at least one NDFA final state. The DFA simulates all the NDFA's parallel worlds simultaneously.",
              "Worked micro-example: NDFA on Q = {q₀, q₁} with δ(q₀,a) = {q₀,q₁}, δ(q₁,b) = {q₁}, start q₀, finals {q₁}. Construction: DFA start A = {q₀}; on a, A → B = {q₀,q₁}; on b, A → ∅ (dead). From B: on a, B → B; on b, B → C = {q₁}. C on b stays C; on a, C → B. B and C contain q₁ so both are final. In the worst case an n-state NDFA blooms into a 2^n-state DFA — the power set returning with a vengeance — though in practice most subsets are unreachable and are never created.",
              "Track the running totals to keep the construction honest. At each step write the subset as a sorted list — {q₀, q₂} rather than {q₂, q₀} — so two computed subsets that are the same set are visibly the same on paper. Maintain a table whose rows are discovered DFA states and whose columns are alphabet symbols; mark new subsets as you find them. Stop when a full pass through the table introduces no new subsets. The dead state ∅ should be added explicitly when an arrow would otherwise point nowhere, because a DFA must have total transitions — every state has an arrow for every symbol.",
              "Why the construction is correct: the DFA subset at any moment is exactly the set of states the NFA could be in after the prefix read so far. Induct on the input length. Base: the empty string leaves the NFA in ε-closure(q₀), which is the DFA's start. Step: from a subset S, one more symbol a carries the NFA to the ε-closure of the union of all a-moves out of S — exactly what the construction computes. The DFA accepts iff this final set meets F, which is the NFA's acceptance condition. The construction preserves the language by induction; the cost in states is the price of running all the NFA's branches in parallel.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Subset construction as a pipeline",
              caption:
                "The DFA's states are sets of NDFA states — the 'cloud of possibilities' becomes one concrete state.",
              stages: [
                { label: "NDFA states", note: "{q₀, q₁, q₂}" },
                { label: "Start: ε-closure(q₀)", note: "first DFA state = a set" },
                { label: "Expand on each symbol", note: "new subset = all reachable" },
                { label: "Collect subsets", note: "each distinct set = one DFA state" },
                { label: "Mark finals", note: "any set touching F is final" },
              ],
            },
            callout: {
              type: "warning",
              title: "Always ε-closure",
              body: "Forgetting the ε-closure step is the most common subset-construction mistake. Each DFA state is a set of NFA states closed under ε-moves — not the raw set of states reachable by one symbol. Apply ε-closure to the start state and after every symbol move; skipping it silently changes the language.",
            },
            keyTerms: [
              { term: "Subset construction", definition: "The algorithm converting an NFA to a DFA whose states are sets of NFA states." },
              { term: "DFA start state", definition: "The epsilon-closure of the NFA start state q0." },
              { term: "Subset transition", definition: "delta'(S, a) = the epsilon-closure of all states reachable from S by one a-move." },
              { term: "Final subset", definition: "Any DFA subset containing at least one NFA final state." },
              { term: "Dead state", definition: "The empty subset, added explicitly so the DFA has total transitions." },
            ],
            bullets: [
              "Idea: one DFA state = the set of NFA states the machine could currently occupy.",
              "Step 1: the start subset is epsilon-closure(q0).",
              "Step 2: delta'(S, a) = epsilon-closure of the union of a-moves out of S.",
              "Step 3: repeat for every new subset until no new ones appear.",
              "Step 4: a subset is final iff it contains an NFA final state.",
              "Worst case: an n-state NFA yields 2^n DFA states; in practice most subsets are unreachable and never created.",
              "Worked micro-example: NFA with delta(q0, a) = {q0, q1}, delta(q1, b) = {q1} gives DFA states A = {q0}, B = {q0, q1}, C = {q1} with B and C final.",
              "Write subsets as sorted lists and tabulate as you go - the examiner must see the construction.",
            ],
            codeExample: {
              language: "python",
              caption: "Subset construction skeleton for an NFA without epsilon moves.",
              code: "nfa = {\n    (\"q0\", \"a\"): {\"q0\", \"q1\"}, (\"q0\", \"b\"): set(),\n    (\"q1\", \"a\"): set(),        (\"q1\", \"b\"): {\"q1\"},\n}\n\ndef step(S, a):                 # one subset-construction transition\n    out = set()\n    for q in S:\n        out |= nfa.get((q, a), set())\n    return frozenset(out)       # frozenset = hashable subset\n\nstart = frozenset({\"q0\"})\nseen, frontier = {start}, [start]\nwhile frontier:                 # explore until no new subsets appear\n    S = frontier.pop()\n    for a in \"ab\":\n        T = step(S, a)\n        if T and T not in seen:\n            seen.add(T)\n            frontier.append(T)\n\nprint([sorted(s) for s in seen])   # [['q0'], ['q0', 'q1'], ['q1']]",
            },
            examQuestions: [
              {
                q: "Explain the subset construction for converting an NFA into a DFA, and convert the NFA with delta(q0, a) = {q0, q1}, delta(q0, b) = empty, delta(q1, b) = {q1} (start q0, finals {q1}) into an equivalent DFA, giving its transition table.",
                marks: 7,
                outline: [
                  "Principle: a DFA state is the set of NFA states reachable on the prefix read so far.",
                  "Start subset A = {q0} (epsilon-closure of q0 if epsilon moves exist).",
                  "On a: A -> B = {q0, q1}; on b: A -> the dead state.",
                  "From B: on a -> B; on b -> C = {q1}.",
                  "From C: on b -> C; on a -> B.",
                  "Finals: B and C (both contain q1).",
                  "Present the 3-state table and note the 2^n worst-case bound.",
                ],
              },
              {
                q: "When is a subset produced by the subset construction marked as a final state?",
                marks: 2,
              },
              {
                q: "What is the worst-case number of DFA states produced from an n-state NFA, and why is it rarely reached?",
                marks: 3,
                outline: [
                  "2^n subsets in the worst case.",
                  "Most subsets are unreachable from the start subset and are never created.",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Minimization of DFA",
            body: [
              "A DFA is minimal when no smaller DFA accepts the same language. Minimization rests on the idea of indistinguishable states: two states p and q are equivalent if, for every input string, either both lead to acceptance or both lead to rejection. The classic algorithm repeatedly partitions the state set, splitting any group whose states disagree about where some symbol leads. Initialization: split Q into F and Q − F (a final and a non-final state can never be equivalent). Iteration: within each block, separate states whose arrow on some symbol a lands in different blocks; repeat until no block splits. Each surviving block becomes one state of the minimal machine; the result is unique up to renaming, which is why we may speak of the minimal DFA of a language.",
              "Practical exam recipe: (1) drop unreachable states; (2) draw the initial partition {F, Q−F}; (3) refine using each alphabet symbol until stable; (4) merge each block into one state and copy the arrows between blocks; (5) the start state is the block containing q₀, finals are blocks containing final states. Always finish by testing two or three strings from the original language on the minimized machine.",
              "Worked micro-example. DFA with Q = {q₀, q₁, q₂, q₃}, F = {q₃}, alphabet {a, b}; transitions q₀ —a→ q₁, q₀ —b→ q₂, q₁ —a→ q₃, q₁ —b→ q₂, q₂ —a→ q₃, q₂ —b→ q₂, q₃ —a→ q₃, q₃ —b→ q₃. Initial partition {q₃} | {q₀, q₁, q₂}. Refine on a: q₀ → q₁ (in non-final block), q₁ → q₃ (in final block), q₂ → q₃ (in final block) — so q₀ splits from {q₁, q₂}. New partition {q₃} | {q₁, q₂} | {q₀}. Refine {q₁, q₂} on b: q₁ → q₂ (in {q₁, q₂}), q₂ → q₂ (in {q₁, q₂}) — no split. Stable; minimal DFA has three states: {q₀}, {q₁, q₂}, {q₃}.",
              "Two facts make minimization valuable. First, the minimal DFA is unique up to renaming of states — two DFAs accepting the same language minimize to isomorphic machines, so equivalence of two DFAs reduces to minimizing both and comparing. Second, minimization is decidable in O(|Q|² · |Σ|) time by Hopcroft's partition-refinement algorithm, fast enough to run on every compiler's lexer DFA. The minimality theorem also bounds from below: if a language needs k pairwise distinguishable strings (each distinguishable from each other), every DFA for it needs at least k states. This is the standard way to prove a DFA is minimal in a written exam: exhibit k strings pairwise distinguishable, conclude k states are necessary.",
            ],
            keyTerms: [
              { term: "Indistinguishable states", definition: "Two states p, q such that for every input w, δ(p, w) ∈ F ⇔ δ(q, w) ∈ F." },
              { term: "Partition refinement", definition: "The iterative algorithm that splits a block whenever its states disagree on a symbol's target block." },
              { term: "Initial partition", definition: "{F, Q − F} — final states split off from non-final states immediately." },
              { term: "Minimal DFA", definition: "The unique (up to renaming) smallest DFA accepting the language." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Minimization by partition refinement",
              caption:
                "Split, refine, stop — each surviving block of indistinguishable states collapses into a single state.",
              stages: [
                { label: "Step 0: Q", note: "all states together" },
                { label: "Step 1: F | Q−F", note: "finals split off" },
                { label: "Step 2: Refine", note: "split on each symbol's target block" },
                { label: "Step k: Stable", note: "no block splits further" },
                { label: "Result: Minimal DFA", note: "one state per block" },
              ],
            },
            bullets: [
              "Equivalent states p, q: for every string w, both accept or both reject.",
              "Step 0: delete unreachable states before partitioning.",
              "Initial partition: {F, Q - F} - a final and a non-final state can never be equivalent.",
              "Refinement: split a block when two states send some symbol into different blocks.",
              "Stop when no block splits; each block becomes one state of the minimal DFA.",
              "The minimal DFA is unique up to renaming - two DFAs for a language minimize to isomorphic machines.",
              "Worked example: Q = {q0..q3}, F = {q3} refines to {q0}, {q1, q2}, {q3} - four states shrink to three.",
              "Lower-bound technique: exhibit k pairwise distinguishable strings to prove k states are necessary.",
            ],
            callout: {
              type: "exam",
              title: "Show every refinement row",
              body: "Minimization questions are marked step-wise: the initial partition, each refinement round with the splitting symbol named, and the final merged table. Collapsing the working into a final answer loses the method marks even when the minimal DFA is correct - and always drop unreachable states before partitioning.",
            },
            examQuestions: [
              {
                q: "Minimize the DFA with Q = {q0, q1, q2, q3}, F = {q3}, and transitions q0 -a-> q1, q0 -b-> q2, q1 -a-> q3, q1 -b-> q2, q2 -a-> q3, q2 -b-> q2, q3 -a-> q3, q3 -b-> q3, showing every partition refinement.",
                marks: 7,
                outline: [
                  "Check reachability; all four states are reachable here.",
                  "Initial partition {q3} | {q0, q1, q2}.",
                  "Refine on a: q0 goes to q1 (non-final block) but q1, q2 go to q3 (final block), so q0 splits off.",
                  "New partition {q0} | {q1, q2} | {q3}.",
                  "Test {q1, q2} on a and on b: targets land in the same blocks - no split; stable.",
                  "Merge q1 and q2; present the 3-state minimal DFA table.",
                ],
              },
              {
                q: "Define equivalent (indistinguishable) states of a DFA.",
                marks: 2,
              },
              {
                q: "What is the initial partition in DFA minimization and why?",
                marks: 3,
                outline: [
                  "{F, Q - F}.",
                  "The empty string separates finals from non-finals, so they can never be equivalent.",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Regular expressions",
            body: [
              "A regular expression (regex) is a compact algebraic formula for a regular language, built from ∅, ε and single symbols a ∈ Σ using three operators: union r + s (alternatives), concatenation rs (r followed by s), and the Kleene star r* (zero or more copies of r). Precedence runs star, then concatenation, then union, so ab + c* means (ab) + (c*). Parentheses override everything. The language of a regex is read structurally: (a+b)* is any string of a's and b's, a(a+b)*b is any string starting with a and ending with b, and (0+1)*11(0+1)* is any binary string containing 11 somewhere. Kleene's theorem closes the circle: a language is regular iff some finite automaton accepts it, iff some regex describes it — and there are constructive algorithms to pass among the three representations (state elimination turns an FA into a regex; Thompson's construction turns a regex into an NFA, which subset construction then determinizes).",
              "The operators obey algebraic laws reminiscent of arithmetic, with one twist. Union is commutative (r + s = s + r), associative and idempotent (r + r = r); concatenation is associative and distributes over union (r(s + t) = rs + rt and (s + t)r = sr + tr); but concatenation is not commutative (rs ≠ sr in general). The star satisfies (r*)* = r* and ε ∈ L(r*). These laws let us simplify regexes the way we simplify Boolean expressions: (a + b)*a(a + b)* (any string with at least one a) has no shorter form, but understanding that the language is 'strings containing an a' is half the design.",
              "Worked designs build intuition. Strings over {a, b} that contain exactly two a's: b*ab*ab* — freely chosen b's around two a's. Strings whose every run of a's has even length: (b*ab*ab*)* — pairs of a's separated by b's. Strings over {0, 1} divisible by 4 in their binary reading: (0 + 1)*00 — the last two bits must be zero. Each design begins with the question 'what must be true of every accepting string?' and works inward to the regex that enforces exactly that condition. Practise five of these before the exam and the design muscle becomes automatic.",
              "Three constructive bridges connect regexes, FAs and right-linear grammars. Regex → NFA: Thompson's construction builds a fragment per operator and ε-glues them; the resulting NFA has at most 2·|regex| states. NFA → regex: state-elimination or Arden's theorem (next section) solves the language equations of the automaton. Right-linear grammar ↔ FA: variables become states, productions become arrows. Kleene's theorem states these three representations are co-extensive — they describe exactly the regular languages, and the conversions are constructive, terminating algorithms. The theorem is the unifying result of Unit II.",
            ],
            keyTerms: [
              { term: "Regular expression", definition: "A formula built from ∅, ε, symbols, union (+), concatenation and star (*)." },
              { term: "Kleene's theorem", definition: "A language is regular iff some FA accepts it iff some regex describes it." },
              { term: "Thompson's construction", definition: "The algorithm that turns a regex into an ε-NFA with at most 2·|regex| states." },
              { term: "State elimination", definition: "The algorithm that turns an FA into a regex by repeatedly removing states and labelling arrows with sub-expressions." },
              { term: "Operator precedence", definition: "Star binds tightest, then concatenation, then union; parentheses override." },
            ],
            table: {
              caption: "Regex readings.",
              headers: ["Expression", "Language described", "Everyday reading"],
              rows: [
                ["a*", "ε, a, aa, aaa, …", "any number of a's"],
                ["(a+b)*", "all strings over {a, b}", "anything"],
                ["a(a+b)*b", "starts with a, ends with b", "edges fixed, middle free"],
                ["(0+1)*11(0+1)*", "contains 11 as a substring", "pattern search"],
                ["(aa)*", "ε, aa, aaaa, …", "even count of a's"],
              ],
            },
            callout: {
              type: "tip",
              title: "Applications",
              body: "Regular expressions are the working programmer's finite automata: grep and stream editors search files with them, lex and tokenizer generators build DFAs from them to produce compiler front ends, validation of emails, phone numbers and PANs is regex matching, and network intrusion-detection systems scan packets against regex signatures at line rate.",
            },
            diagram: {
              kind: "pipeline",
              title: "The three bridges of Kleene's theorem",
              caption:
                "Regex, NFA and DFA are inter-convertible by constructive algorithms - the pipeline behind every lexer generator.",
              stages: [
                { label: "Regular expression", note: "algebraic formula" },
                { label: "Thompson's construction", note: "regex -> epsilon-NFA (at most 2|regex| states)" },
                { label: "Subset construction", note: "NFA -> DFA" },
                { label: "Minimization", note: "the smallest DFA" },
                { label: "State elimination / Arden", note: "DFA -> regex" },
              ],
            },
            bullets: [
              "Regex is built from the empty set, epsilon and symbols using union (+), concatenation and star (*).",
              "Precedence: star, then concatenation, then union; parentheses override.",
              "Laws: union is commutative and idempotent; concatenation is associative and distributes over union; rs differs from sr in general.",
              "Readings: (a+b)* is anything; a(a+b)*b starts with a and ends with b; (0+1)*11(0+1)* contains 11.",
              "Worked designs: exactly two a's -> b*ab*ab*; even runs of a's -> (b + ab*ab*)*; divisible by 4 -> (0+1)*00.",
              "Kleene's theorem: regular iff some FA accepts it iff some regex describes it.",
              "Bridges: Thompson's construction (regex -> epsilon-NFA), state elimination / Arden (FA -> regex), right-linear grammar <-> FA.",
            ],
            codeExample: {
              language: "python",
              caption: "The same regular languages as Python regular expressions.",
              code: "import re\n\npatterns = {\n    \"contains 11\":     r\"(0|1)*11(0|1)*\",\n    \"exactly two a's\": r\"b*ab*ab*\",\n    \"starts a ends b\": r\"a(a|b)*b\",\n}\ntests = [\"0110\", \"aabba\", \"aba\"]\n\nfor name, pat in patterns.items():\n    print(name, \"->\", [t for t in tests if re.fullmatch(pat, t)])\n\n# contains 11 -> ['0110']\n# exactly two a's -> ['aba']\n# starts a ends b -> ['aba']",
            },
            examQuestions: [
              {
                q: "Define a regular expression with its operators and precedence. Write regular expressions over {a, b} for (i) strings containing exactly two a's, (ii) strings that start with 'a' and end with 'b', and (iii) strings in which every run of a's has even length.",
                marks: 7,
                outline: [
                  "Define the three operators and the base cases (empty set, epsilon, symbols).",
                  "State the precedence: star, then concatenation, then union.",
                  "(i) b*ab*ab*.",
                  "(ii) a(a+b)*b.",
                  "(iii) (b + ab*ab*)* - every maximal run of a's has even length.",
                  "Give one accepting and one rejecting string for each expression.",
                ],
              },
              {
                q: "State Kleene's theorem.",
                marks: 2,
              },
              {
                q: "Write a regular expression for binary strings ending in '11'.",
                marks: 3,
                outline: [
                  "(0 + 1)*11.",
                  "Explanation: arbitrary prefix, then the fixed suffix 11.",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Arden's theorem",
            body: [
              "Arden's theorem is the algebraic engine for turning equations over languages into closed-form regular expressions. Statement: if P and Q are languages over Σ, P does not contain ε, and R satisfies R = Q + RP, then the unique solution is R = QP*. Conversely QP* solves the equation. The condition ε ∉ P is essential — without it the equation R = Q + RP has many solutions and the theorem breaks.",
              "Arden's theorem is used to solve left- or right-linear language equations that arise directly from a finite automaton. Method: label each state qi with the language Ri it accepts; moving along a transition labelled a from qi to qj contributes a·Rj to Ri's equation; final states add ε. Solve the system by back-substitution, invoking Arden at each step. Worked example: R₁ = aR₂ + bR₁ + ε and R₂ = aR₂ + bR₁. The second solves to R₂ = bR₁a* (Arden, with Q = bR₁, P = a). Substituting: R₁ = abR₁a* + bR₁ + ε = R₁(aba* + b) + ε, so R₁ = ε(aba* + b)* = (aba* + b)*. Every string the machine accepts is now written as one regex — which is exactly how state-elimination automates FA-to-regex conversion.",
              "Step-by-step recipe. (1) Write one equation per state: R_q = a₁R_{q₁} + a₂R_{q₂} + … + (ε if q ∈ F). The coefficient of R_{q'} is the label of every arrow from q to q' (sum if multiple labels). (2) Identify a state whose equation has the form R = Q + RP (with ε ∉ P) — substitute R = QP*. (3) Substitute the solved form into every other equation that mentions R, then repeat. (4) The equation for R_{q₀} eventually becomes R_{q₀} = Q' + R_{q₀}P' — apply Arden once more to get R_{q₀} = Q'P'*. This is the regex for the whole language. (5) Sanity-check by listing two or three short strings in the language and verifying the regex matches them.",
              "Why the ε ∉ P condition matters. The equation R = Q + RP asks 'what language R consists of either a Q-string, or an R-string followed by a P-string?' Unrolling: R = Q + QP + QPP + QPPP + … = QP*. This infinite sum is exactly QP* and is the unique least solution. But if ε ∈ P, then QP + QPP + … all overlap and many languages R satisfy the equation (any superset of QP* that is closed under right-concatenation by P works), so uniqueness fails. The condition is also the formal reason left-recursion in grammars is troublesome — left-recursion produces exactly an R = Q + RP equation with ε ∈ P. Eliminate the recursion or rewrite the equation; otherwise the language is under-specified.",
            ],
            keyTerms: [
              { term: "Arden's theorem", definition: "If R = Q + RP and ε ∉ P, then R = QP* uniquely." },
              { term: "State equation R_q", definition: "An equation for the language accepted starting from state q, with one term per outgoing arrow plus ε if q is final." },
              { term: "Back-substitution", definition: "Solving the system by repeatedly applying Arden to one equation at a time and substituting." },
              { term: "ε ∉ P condition", definition: "The hypothesis that makes the solution unique; without it the theorem fails." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From FA to regex by Arden",
              caption:
                "Each state becomes an equation; Arden solves one equation at a time; back-substitution collapses the system into a single regex for the start state.",
              stages: [
                { label: "FA transitions", note: "arrows labelled with symbols" },
                { label: "State equations", note: "R_q = Σ a·R_{q'} + (ε if q∈F)" },
                { label: "Apply Arden", note: "R = QP* when ε ∉ P" },
                { label: "Back-substitute", note: "plug solutions into other equations" },
                { label: "Start-state regex", note: "R_{q₀} = the language L(M)" },
              ],
            },
            callout: {
              type: "warning",
              title: "State the ε ∉ P condition",
              body: "Always write 'since ε ∉ P, by Arden's theorem R = QP*' before applying the formula. Skipping this justification costs the proof mark even when the algebra is correct — examiners look for the hypothesis.",
            },
            bullets: [
              "Statement: if R = Q + RP and epsilon is not in P, then R = QP*, and the solution is unique.",
              "The condition epsilon not in P is essential - without it many languages R satisfy the equation.",
              "Use: one language equation per state; an arrow q -a-> q' contributes a.R(q'); final states add epsilon.",
              "Recipe: write the equations, apply Arden to each R = Q + RP form, back-substitute, solve for R(start).",
              "Worked system: R1 = aR2 + bR1 + epsilon, R2 = aR2 + bR1 gives R1 = (aba* + b)*.",
              "Unrolling argument: R = Q + QP + QP^2 + ... = QP*.",
              "Sanity-check the final regex on two or three short strings of the language.",
            ],
            examQuestions: [
              {
                q: "State Arden's theorem and prove it. Use it to solve the system R1 = aR2 + bR1 + epsilon and R2 = aR2 + bR1 for the regular expression of the language.",
                marks: 7,
                outline: [
                  "State the theorem with the condition epsilon not in P.",
                  "Prove by unrolling: R = Q + QP + QP^2 + ... = QP*, and argue uniqueness.",
                  "Write the two state equations of the automaton.",
                  "Solve R2 = bR1 a* by Arden (Q = bR1, P = a).",
                  "Substitute into R1 and collect terms: R1 = R1(aba* + b) + epsilon.",
                  "Apply Arden once more: R1 = epsilon (aba* + b)* = (aba* + b)*.",
                  "Verify one string of the language against the resulting regex.",
                ],
              },
              {
                q: "What condition must P satisfy in Arden's theorem, and what goes wrong without it?",
                marks: 2,
              },
              {
                q: "Solve the language equation R = bR + a using Arden's theorem.",
                marks: 3,
                outline: [
                  "Q = a, P = b, and epsilon is not in {b}.",
                  "R = ab*.",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Union, intersection, concatenation and closure",
            body: [
              "The regular languages are closed under the three regex operators and more — closure meaning: apply the operation to regular languages and the result is still regular. Union: given DFAs M₁ and M₂, run them in parallel on the same input using the product construction — states are pairs (p, q), and the product accepts if either component accepts (union) or both accept (intersection). Concatenation: string x from L₁ followed by string y from L₂; the clean proof uses ε-NFAs: chain M₁'s finals to M₂'s start with ε-arrows. Kleene closure: L* is accepted by adding ε-arrows from M's finals back to its start. Intersection is worth emphasizing because it cannot be expressed by regex union — the product machine with 'both must accept' is the standard construction. The family is also closed under complement (swap final and non-final states of a DFA) and difference (L₁ − L₂ = L₁ ∩ L₂′).",
              "Worked product construction for intersection. Let M₁ accept strings ending in 0 (states p₀, p₁) and M₂ accept strings ending in 1 (states q₀, q₁). The product machine has states (p₀, q₀), (p₀, q₁), (p₁, q₀), (p₁, q₁) — at most |Q₁| × |Q₂| of them. Each product transition on symbol a is ((p, q), a) → (δ₁(p, a), δ₂(q, a)). The intersection accepts in (p₁, q₁) — both components accepting — so the language is 'strings ending in 01' (M₁ sees the last 0, M₂ sees the last 1; the only string with both is one ending in 01). The construction runs both DFAs on the same input in lockstep and decides jointly.",
              "Complement is the cheapest closure property: given a DFA M for L, the DFA M′ with F swapped to Q − F accepts exactly Σ* − L. This works only for DFAs (NFAs need a detour through subset construction first, because 'some path rejects' is not 'no path accepts'). Complement is the key to intersection via De Morgan: L₁ ∩ L₂ = (L₁′ ∪ L₂′)′, so a regular-language library with union and complement already has intersection. Reversal is also closed: reverse every arrow, swap start and finals, determinize — L^R is regular whenever L is.",
              "Two non-closure results complete the picture and are frequent exam questions. The regular languages are NOT closed under intersection with context-free languages (intersection of a regular and a context-free language is context-free, but the intersection of two CFLs may be non-CFL). They are also not closed under infinite union: ⋃ₙ aⁿbⁿ is the union of finitely-many regular singletons, but the union over all n is {aⁿbⁿ}, which is not regular. Knowing what is and is not closed lets you refute proposed identities in seconds: 'is the family closed under infinite union?' — no, the singleton languages {aⁿbⁿ} are each regular but their union is not.",
            ],
            keyTerms: [
              { term: "Closure property", definition: "An operation that, applied to regular languages, yields a regular language." },
              { term: "Product construction", definition: "The pairing of two DFA states to accept union or intersection; states are pairs (p, q)." },
              { term: "Complement", definition: "Swap final and non-final states of a DFA to obtain the complement language Σ* − L." },
              { term: "Reversal L^R", definition: "The language of reversed strings; closed for regular languages by arrow-reversal." },
            ],
            diagram: {
              kind: "flow",
              title: "Closure constructions",
              caption:
                "One product machine answers both union and intersection — only the acceptance condition changes.",
              steps: [
                { label: "L₁ — DFA M₁" },
                { label: "L₂ — DFA M₂" },
                { label: "× Product machine", note: "states = pairs (p, q)" },
                { label: "L₁ ∪ L₂", note: "accept if either accepts" },
                { label: "L₁ ∩ L₂", note: "accept if both accept" },
              ],
            },
            bullets: [
              "Regular languages are closed under union, intersection, concatenation, Kleene star, complement and reversal.",
              "Union and intersection: product construction - states are pairs (p, q); accept if either (union) or both (intersection) accept.",
              "Concatenation: epsilon-arrows from M1's final states to M2's start state.",
              "Kleene star: epsilon-arrows from the final states back to the start state.",
              "Complement: swap final and non-final states - valid only for DFAs.",
              "Difference: L1 - L2 = L1 intersect (complement of L2).",
              "NOT closed under infinite union: each {a^n b^n} is regular, but their union over all n is not.",
              "Worked product example: 'ends in 0' intersect 'ends in 1' = strings ending in 01, computed on four pair-states.",
            ],
            callout: {
              type: "exam",
              title: "Complement needs a DFA",
              body: "Swapping final and non-final states complements a DFA, not an NFA - 'some path rejects' is not 'no path accepts'. If the question gives an NFA, first determinize it (subset construction), then complement. Mentioning this subtlety is exactly what separates a 7-mark answer from a 5-mark one.",
            },
            examQuestions: [
              {
                q: "Prove that the class of regular languages is closed under union and intersection using the product construction, illustrating with DFAs for 'strings ending in 0' and 'strings ending in 1'.",
                marks: 7,
                outline: [
                  "State the closure properties of the regular family.",
                  "Product construction: states (p, q), transition ((p, q), a) -> (delta1(p, a), delta2(q, a)).",
                  "Union accepts when either component is final; intersection when both are.",
                  "Build M1 (ends in 0: states p0, p1) and M2 (ends in 1: states q0, q1).",
                  "List the four pair-states and the accepting pair for intersection: (p1, q1).",
                  "Conclude that the intersection language is 'strings ending in 01'.",
                  "Mention complement via De Morgan as the alternative route to intersection.",
                ],
              },
              {
                q: "Are the regular languages closed under infinite union? Justify your answer.",
                marks: 2,
              },
              {
                q: "How do you obtain a DFA for the complement of a regular language L?",
                marks: 3,
                outline: [
                  "Take a DFA for L (determinize an NFA first if needed).",
                  "Swap final and non-final states; the accepted language becomes Sigma* - L.",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Two-way DFA (2DFA)",
            body: [
              "A two-way deterministic finite automaton reads its input on a tape bounded by end-markers, and its head may move left, right, or stay — the transition function is δ: Q × Σ → Q × {L, R, S}. The machine accepts if, scanning the left end-marker, it eventually enters a designated halt-accept state. Intuitively a 2DFA can re-read and compare: it can check that the first half of a string equals the second half by shuttling back and forth — something a one-way DFA cannot do. The surprise is that this extra freedom buys no new languages: crossing-sequence reasoning shows every 2DFA can be simulated by an ordinary one-way DFA (possibly with exponentially more states). The 2DFA therefore still accepts exactly the regular languages — a lovely example of 'more machine, same power.' It is also the natural stepping stone toward linear-bounded automata, the machine of context-sensitive languages in Unit III's hierarchy.",
              "Crossing-sequence argument sketch. For each tape boundary between cell i and cell i+1, record the sequence of states in which the 2DFA crosses that boundary during its entire run. Two crossing sequences that are equal force the rest of the computation to behave identically — so if the 2DFA accepts, a one-way DFA with one state per possible crossing sequence accepts the same language. There are finitely many crossing sequences (bounded by an exponential in the 2DFA's states), so the resulting one-way DFA is finite. The argument is non-constructive in form but yields an explicit (if exponential) DFA, which is why the languages stay regular.",
              "Real-world relatives. A 2DFA models a streaming algorithm with a bounded lookahead that may re-read its buffer; a Turing machine restricted to a tape of length c·n (linear-bounded automaton) is the natural generalization that accepts the context-sensitive languages. The 2DFA's importance is conceptual: it shows that two-way head motion is not the resource that lifts you out of the regular languages — only additional memory (a stack, a tape) does that. When asked 'why don't we use 2DFAs in practice?', the answer is state explosion: the equivalent one-way DFA may have exponentially many states, so simulation is expensive even when the 2DFA itself is small.",
            ],
            keyTerms: [
              { term: "Two-way DFA (2DFA)", definition: "A DFA whose head may move left, right, or stay on each transition." },
              { term: "End-markers", definition: "Special symbols that bound the tape and trigger halt decisions." },
              { term: "Crossing sequence", definition: "The sequence of states in which a 2DFA crosses a tape boundary during its entire run." },
              { term: "Crossing-sequence argument", definition: "The proof that every 2DFA can be simulated by a one-way DFA, possibly with exponentially more states." },
            ],
            diagram: {
              kind: "compare",
              title: "1DFA vs 2DFA",
              caption:
                "Both accept the regular languages — the extra head motion does not lift the language family, only the state count.",
              left: {
                heading: "One-way DFA",
                items: [
                  "Head moves right only, one symbol per step",
                  "δ: Q × Σ → Q",
                  "Linear-time, constant memory",
                  "Cannot re-read or compare distant symbols",
                ],
              },
              right: {
                heading: "Two-way DFA",
                items: [
                  "Head moves L, R or S on each step",
                  "δ: Q × Σ → Q × {L, R, S}",
                  "Can re-read and shuttle back and forth",
                  "Same languages; DFA may need exponentially more states",
                ],
              },
            },
            bullets: [
              "2DFA transition: delta : Q x Sigma -> Q x {L, R, S} - the head may move left, right or stay.",
              "Input is bounded by end-markers; the machine accepts by entering a designated halt-accept state.",
              "A 2DFA can shuttle back and forth, re-reading and comparing distant symbols.",
              "Crossing sequence: the ordered list of states in which the head crosses one tape boundary during the whole run.",
              "One-way DFA construction: one state per distinguishable crossing sequence - finite but possibly exponential.",
              "Result: two-way motion adds no languages - 2DFAs accept exactly the regular languages.",
              "Practical cost: state explosion; the equivalent one-way DFA may be exponentially larger.",
            ],
            callout: {
              type: "exam",
              title: "State the punchline explicitly",
              body: "The examiner wants one sentence above all: 'a two-way finite automaton accepts exactly the regular languages'. Give the crossing-sequence idea as the reason and the exponential blow-up in states as the price. Omitting the punchline and only describing the machine misses the theorem mark.",
            },
            table: {
              caption: "A 2DFA accepting strings over {a, b} whose first symbol equals the last symbol (fa = saw 'a', fb = saw 'b', ca/cb = check the last cell).",
              headers: ["State", "read a", "read b", "read right end-marker"],
              rows: [
                ["s (start)", "(fa, R)", "(fb, R)", "-"],
                ["fa (saw first a)", "(fa, R)", "(fa, R)", "(ca, L)"],
                ["fb (saw first b)", "(fb, R)", "(fb, R)", "(cb, L)"],
                ["ca (check last vs a)", "accept", "reject", "-"],
                ["cb (check last vs b)", "reject", "accept", "-"],
              ],
            },
            examQuestions: [
              {
                q: "Define a two-way finite automaton (2DFA). Explain the crossing-sequence argument that every 2DFA can be simulated by a one-way DFA, and state the consequence for the class of languages accepted.",
                marks: 7,
                outline: [
                  "Formal definition with delta : Q x Sigma -> Q x {L, R, S} and end-markers.",
                  "Example behaviour: re-reading and comparing the first and last symbols.",
                  "Define the crossing sequence of a tape boundary.",
                  "Equal crossing sequences force identical future behaviour.",
                  "One-way DFA: one state per possible crossing sequence; finitely many, possibly exponential.",
                  "Punchline: 2DFAs accept exactly the regular languages.",
                  "Note the practical cost: exponential state blow-up.",
                ],
              },
              {
                q: "Does allowing the head to move in both directions increase the power of a finite automaton?",
                marks: 2,
              },
              {
                q: "Write the transition function type of a 2DFA and explain the meaning of the L, R and S moves.",
                marks: 3,
                outline: [
                  "delta : Q x Sigma -> Q x {L, R, S}.",
                  "L = move one cell left, R = one cell right, S = stay.",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Grammars",
      summary:
        "Unit III moves from recognizing languages to generating them. Grammars are classified by the Chomsky hierarchy; derivation trees show how a grammar builds a string; ambiguity, simplification and the classic normal forms — Chomsky and Greibach — prepare context-free grammars for the algorithms that real parsers use.",
      chapter: {
        number: "03",
        title: "Grammars, Parse Trees & Normal Forms",
        intro:
          "Unit III covers grammar types and the Chomsky hierarchy, context-sensitive and context-free grammars, regular grammars, derivation trees, ambiguity, simplification, grammar–automata conversion, the Chomsky hierarchy, and CNF/GNF normal forms.",
        inOneBreath:
          "Regular is what a machine with no memory can do; context-free is what a stack buys; sensitive is what bounded tape buys; and everything else belongs to the Turing machine.",
        sections: [
          {
            number: "3.1",
            title: "Types of grammar",
            body: [
              "Where an automaton recognizes a language, a grammar generates it. A phrase-structure grammar G = (V, T, P, S) replaces strings of symbols with other strings: productions α → β say 'wherever α appears, you may rewrite it as β'. L(G) collects every string of pure terminals derivable from S. Noam Chomsky classified grammars into four types by restricting the form of α and β — and each type lands exactly on one machine family from Unit I's ladder. Type 0 places no restriction (recursively enumerable, Turing machines); Type 1 requires |α| ≤ |β| so strings never shrink (context-sensitive, linear-bounded automata); Type 2 requires α to be a single variable (context-free, pushdown automata); Type 3 allows only right- or left-linear shapes (regular, finite automata). Each restriction carves out a strictly smaller, better-behaved family.",
              "The four types nest strictly: Regular ⊂ Context-free ⊂ Context-sensitive ⊂ Recursively enumerable. Every containment is proper — witnessed by landmark languages. {aⁿbⁿ : n ≥ 0} is context-free but not regular (a DFA cannot match a's against b's without memory). {aⁿbⁿcⁿ : n ≥ 1} is context-sensitive but not context-free (a PDA cannot match three regions with one stack). The halting problem's semi-decidable set is recursively enumerable but not decidable. These three witnesses are the standard exam examples — write them alongside the hierarchy table to make the strictness visible.",
              "Two practical consequences of the classification. First, every grammar type has a parsing algorithm with bounded complexity: regular grammars parse in linear time (DFA simulation); context-free grammars parse in O(n³) by CYK (or O(n) for deterministic subclasses); context-sensitive membership is PSPACE-complete; recursively enumerable membership is undecidable. Second, every programming language is designed to lie on the lowest floor that supports its features: lexers use regular grammars (tokens), parsers use context-free grammars (syntax), type systems use richer forms (semantics). Choosing a higher type than necessary saddles you with slower or undecidable algorithms.",
              "The grammar–automaton correspondence is a theorem, not a definition. For each type, one can mechanically translate a grammar of that type into an accepting machine of the matching type, and vice versa. Type 3 grammars ↔ finite automata via the variable-as-state construction. Type 2 grammars ↔ pushdown automata via the leftmost-derivation-on-a-stack construction (Section 3.8). Type 1 grammars ↔ linear-bounded automata. Type 0 grammars ↔ Turing machines. Each translation is the subject of a constructive proof, and together they justify the table below: the Chomsky hierarchy is not a taxonomy of grammars but a deep equivalence between grammatical restriction and computational power.",
            ],
            keyTerms: [
              { term: "Phrase-structure grammar G = (V, T, P, S)", definition: "The general 4-tuple: variables, terminals, productions, start symbol." },
              { term: "Production α → β", definition: "A rewrite rule replacing the string α by the string β." },
              { term: "Type 0–3", definition: "Chomsky's four levels of grammatical restriction, each matching a machine family." },
              { term: "Chomsky hierarchy", definition: "The strict nesting Regular ⊂ Context-free ⊂ Context-sensitive ⊂ Recursively enumerable." },
              { term: "Derivation", definition: "A sequence of rewrites starting from S and ending at a terminal string." },
            ],
            table: {
              caption: "The Chomsky hierarchy.",
              headers: ["Type", "Name", "Form of productions", "Language family", "Machine"],
              rows: [
                ["0", "Unrestricted", "α → β, no restriction", "Recursively enumerable", "Turing machine"],
                ["1", "Context-sensitive", "αAβ → αγβ, γ ≠ ε", "Context-sensitive", "Linear-bounded automaton"],
                ["2", "Context-free", "A → β", "Context-free", "Pushdown automaton"],
                ["3", "Regular", "A → aB or A → a", "Regular", "Finite automaton"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The Chomsky pyramid - restriction narrows upward",
              caption:
                "The narrowest family (regular) sits on top; relaxing the production forms downward buys bigger families and stronger machines.",
              tiers: [
                { label: "Type 3 - Regular", note: "A -> aB | a - finite automaton" },
                { label: "Type 2 - Context-free", note: "A -> beta - pushdown automaton" },
                { label: "Type 1 - Context-sensitive", note: "|alpha| <= |beta| - linear-bounded automaton" },
                { label: "Type 0 - Unrestricted", note: "alpha -> beta - Turing machine" },
              ],
            },
            bullets: [
              "Phrase-structure grammar G = (V, T, P, S); productions alpha -> beta rewrite strings.",
              "Type 0: no restriction - recursively enumerable languages, recognized by Turing machines.",
              "Type 1: |alpha| <= |beta| (context-sensitive) - recognized by linear-bounded automata.",
              "Type 2: a single variable on the left (context-free) - recognized by pushdown automata.",
              "Type 3: right- or left-linear productions (regular) - recognized by finite automata.",
              "Strict nesting: Regular is a proper subset of Context-free of Context-sensitive of Recursively enumerable.",
              "Witnesses: a^n b^n (context-free, not regular), a^n b^n c^n (context-sensitive, not context-free), the halting set (r.e., not decidable).",
              "Engineering rule: use the lowest type that fits - higher types cost decidability and parsing speed.",
            ],
            callout: {
              type: "tip",
              title: "Pair every type with a witness",
              body: "Writing the four types alone earns half the marks. The other half comes from the strictness witnesses: a^n b^n separates Type 3 from Type 2, a^n b^n c^n separates Type 2 from Type 1, and the halting problem separates decidable from semi-decidable. Quote all three.",
            },
            examQuestions: [
              {
                q: "Explain the Chomsky classification of grammars. For each type give the form of productions, the name of the language family, the recognizing machine, and one example.",
                marks: 7,
                outline: [
                  "Define a phrase-structure grammar G = (V, T, P, S).",
                  "Type 0: alpha -> beta unrestricted; recursively enumerable; Turing machine.",
                  "Type 1: |alpha| <= |beta|; context-sensitive; linear-bounded automaton.",
                  "Type 2: A -> beta; context-free; pushdown automaton.",
                  "Type 3: A -> aB | a; regular; finite automaton.",
                  "Give one example grammar or language at each floor.",
                  "State the strict nesting with witness languages.",
                ],
              },
              {
                q: "What is the production form of a Type 2 grammar?",
                marks: 2,
              },
              {
                q: "Give the witness languages that show each containment in the Chomsky hierarchy is proper.",
                marks: 3,
                outline: [
                  "a^n b^n: context-free but not regular.",
                  "a^n b^n c^n: context-sensitive but not context-free.",
                  "The halting problem's yes-set: recursively enumerable but not decidable.",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Context-sensitive grammar (CSG)",
            body: [
              "A grammar is context-sensitive when productions never shrink the sentential form: every rule α → β satisfies |α| ≤ |β| (with the single conventional exception S → ε, provided S never appears on a right-hand side). The name comes from the canonical shape αAβ → αγβ: variable A may be rewritten to γ only in the context of α on its left and β on its right — neighbouring symbols matter. The classic CSG example is {aⁿbⁿcⁿ : n ≥ 1}, which is beyond context-free grammars: rules such as S → aSBC | aBC, CB → BC, aB → ab, bB → bb, bC → bc, cC → cc generate one a, one b and one c per n by carefully ferrying B's and C's into position. CSGs are recognized by linear-bounded automata — Turing machines whose tape is bounded by a constant multiple of the input length — and their membership question is decidable, though expensive.",
              "Trace the canonical CSG for {aⁿbⁿcⁿ} on n = 2. Start: S ⇒ aSBC ⇒ aaBCBC (apply S → aSBC, then S → aBC). Swap CB → BC repeatedly to ferry the B's and C's into the correct relative order: aaBCBC ⇒ aaBBCC. Convert B's to b's left to right: aaBBCC ⇒ aabBCC ⇒ aabbCC. Convert C's to c's left to right: aabbCC ⇒ aabbcC ⇒ aabbcc. The result is a²b²c². Each B and C variable is ferried into its target position by the CB → BC swap before being turned into its terminal. The grammar is context-sensitive because no production shortens the string: every step's right-hand side is at least as long as its left-hand side.",
              "Why {aⁿbⁿcⁿ} defeats a context-free grammar. The pumping lemma for CFLs says any sufficiently long string in a CFL can be pumped — split into uvwxy with |vwx| ≤ m, |vx| ≥ 1, such that uvⁱ wxⁱ y is in the language for all i ≥ 0. Take aⁿbⁿcⁿ with n large; any split puts v and x inside at most two of the three regions (because |vwx| is bounded), so pumping changes only those two regions and breaks the count equality — contradiction. The CSG escapes this barrier because each B and C variable tracks its own count, effectively giving the grammar three counters that must agree. The stack of a PDA can only track one such counter, which is why aⁿbⁿ is context-free but aⁿbⁿcⁿ is not.",
            ],
            keyTerms: [
              { term: "Context-sensitive grammar (CSG)", definition: "Every production α → β satisfies |α| ≤ |β|; the canonical shape is αAβ → αγβ." },
              { term: "Linear-bounded automaton (LBA)", definition: "A Turing machine on tape bounded by c·|input|; recognizes the context-sensitive languages." },
              { term: "Context", definition: "The neighbouring symbols α and β that constrain how a variable A may be rewritten." },
              { term: "Membership question", definition: "For a CSG, decidable (though PSPACE-complete in the worst case)." },
            ],
            diagram: {
              kind: "flow",
              title: "Deriving aabbcc from the CSG for a^n b^n c^n",
              caption:
                "No step ever shortens the string - the context-sensitive length condition holds at every arrow.",
              steps: [
                { label: "S", note: "start symbol" },
                { label: "aSBC", note: "S -> aSBC" },
                { label: "aaBCBC", note: "S -> aBC" },
                { label: "aaBBCC", note: "CB -> BC applied twice" },
                { label: "aabBCC -> aabbCC", note: "aB -> ab, then bB -> bb" },
                { label: "aabbcc", note: "bC -> bc, then cC -> cc" },
              ],
            },
            bullets: [
              "CSG: every production alpha -> beta satisfies |alpha| <= |beta| (single exception S -> epsilon when S never appears on a right side).",
              "Canonical shape alpha A beta -> alpha gamma beta: variable A is rewritten in the context of its neighbours.",
              "Recognized by linear-bounded automata - Turing machines on tape bounded by c x |input|.",
              "Membership is decidable, though PSPACE-complete in the worst case.",
              "Classic grammar for {a^n b^n c^n}: S -> aSBC | aBC, CB -> BC, aB -> ab, bB -> bb, bC -> bc, cC -> cc.",
              "Worked derivation for n = 2: S => aSBC => aaBCBC => aaBBCC => ... => aabbcc.",
              "Why a^n b^n c^n defeats CFGs: pumping changes at most two of the three regions; a stack tracks only one counter.",
            ],
            callout: {
              type: "exam",
              title: "Check lengths, not just letters",
              body: "After writing any CSG derivation, verify that no production shrinks the sentential form - that check is the definition mark. If your derivation of a^n b^n c^n ever uses a rule like CB -> epsilon or BC -> B, the grammar is not context-sensitive and the answer collapses.",
            },
            examQuestions: [
              {
                q: "Define a context-sensitive grammar. Write a CSG generating {a^n b^n c^n : n >= 1} and derive the string aabbcc, verifying the length condition at every step.",
                marks: 7,
                outline: [
                  "Definition with |alpha| <= |beta| and the conventional S -> epsilon exception.",
                  "Canonical shape alpha A beta -> alpha gamma beta.",
                  "Give the productions S -> aSBC | aBC, CB -> BC, aB -> ab, bB -> bb, bC -> bc, cC -> cc.",
                  "Derivation: S => aSBC => aaBCBC => aaBBCC => aaBBCC => ... => aabbcc.",
                  "Show the CB -> BC ferrying step explicitly.",
                  "Verify each production satisfies the length condition.",
                ],
              },
              {
                q: "State the length condition that every production of a context-sensitive grammar must satisfy.",
                marks: 2,
              },
              {
                q: "Which machine recognizes exactly the context-sensitive languages, and on what tape bound?",
                marks: 3,
                outline: [
                  "Linear-bounded automaton (LBA).",
                  "Tape bounded by c x |input| for a constant c.",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Context-free grammar (CFG)",
            body: [
              "A grammar is context-free when every production has a single variable on the left: A → β. The left side carries no context, so each variable can be expanded independently of its neighbours — which is exactly why CFGs model nested structure: balanced parentheses, nested arithmetic, block structure in programs. A defining example is S → aSb | ε, generating {aⁿbⁿ : n ≥ 0}: each application of the first rule wraps one more a on the left and one more b on the right, and ε closes the nest. A derivation is the sequence of rewriting steps from S to a terminal string; at each step we may pick any variable present and replace it. The strings of a derivation, read in order, are called sentential forms. CFGs are the grammar of programming-language syntax — every compiler's parser (and the XML DTDs of the web-technology course) is a CFG engine in disguise.",
              "Worked derivation for {aⁿbⁿ}. From S apply S → aSb to get aSb; apply again to get aaSbb; apply a third time to get aaaSbbb; finally apply S → ε to get aaabbb. The sentential forms S, aSb, aaSbb, aaaSbbb, aaabbb show the build-up. A leftmost derivation always expands the leftmost variable (here there is only one, so leftmost = rightmost); a more complex grammar would expose the difference. The yield of the corresponding derivation tree is aaabbb, the string of leaves read left to right. Two derivations may produce the same string through different intermediate forms — that is the source of ambiguity, addressed in Section 3.6.",
              "Formal definition restated. A CFG is G = (V, T, P, S) where V is a finite set of variables, T a finite set of terminals with V ∩ T = ∅, P a finite set of productions A → β with A ∈ V and β ∈ (V ∪ T)*, and S ∈ V the start symbol. The language L(G) = {w ∈ T* : S ⇒* w} where ⇒* is the reflexive-transitive closure of the rewrite relation ⇒ defined by the productions. Two grammars are equivalent if they generate the same language; a grammar is reduced if it has no useless symbols, ε-productions (other than possibly S → ε) or unit productions. The simplification pipeline of Section 3.7 cleans any CFG into this reduced form before normal-form conversion.",
              "CFGs model real syntax. The expression grammar E → E + T | T, T → T * F | F, F → (E) | id generates every well-parenthesized arithmetic expression on identifiers. Each variable corresponds to a syntactic category (expression, term, factor); each production to a constructor. Parsers built on this grammar — recursive-descent, LR, LL — implement the derivation directly: each call to a parsing function corresponds to expanding one variable. This is why every compiler textbook devotes a chapter to CFGs: they are the formal model of the syntax that compilers process, and their normal forms (Sections 3.10 and 3.11) are the input formats of the standard parsing algorithms.",
            ],
            keyTerms: [
              { term: "Context-free grammar (CFG)", definition: "A grammar where every production has a single variable on the left, A → β." },
              { term: "Derivation S ⇒* w", definition: "A sequence of rewrites leading from the start symbol to a terminal string." },
              { term: "Sentential form", definition: "Any string of variables and terminals appearing in a derivation." },
              { term: "Yield", definition: "The leaves of a derivation tree read left to right; equals the derived string." },
              { term: "Equivalent grammars", definition: "Grammars that generate the same language." },
            ],
            diagram: {
              kind: "flow",
              title: "Deriving aaabbb from S -> aSb | epsilon",
              caption:
                "Each application of S -> aSb wraps one more matching pair; S -> epsilon closes the nest.",
              steps: [
                { label: "S", note: "start symbol" },
                { label: "aSb", note: "S -> aSb" },
                { label: "aaSbb", note: "S -> aSb" },
                { label: "aaaSbbb", note: "S -> aSb" },
                { label: "aaabbb", note: "S -> epsilon" },
              ],
            },
            bullets: [
              "CFG: every production has a single variable on the left, A -> beta.",
              "Formal tuple G = (V, T, P, S) with V and T disjoint; L(G) = {w in T* : S =>* w}.",
              "Nested structure is natural: S -> aSb | epsilon generates {a^n b^n : n >= 0}.",
              "Derivation: S => aSb => aaSbb => aaaSbbb => aaabbb; intermediate strings are sentential forms.",
              "Expression grammar E -> E + T | T, T -> T * F | F, F -> (E) | id models arithmetic syntax.",
              "Compilers parse with CFGs: each parser call or LR action expands one variable.",
              "A reduced grammar has no useless symbols and no epsilon- or unit-productions (Section 3.7 pipeline).",
            ],
            callout: {
              type: "tip",
              title: "Show the sentential forms",
              body: "When asked for a derivation, write every intermediate sentential form and underline the variable you expand next. A bare final string earns almost nothing; the sequence S => aSb => aaSbb => ... is the answer, because it demonstrates control of the rewrite relation =>*.",
            },
            examQuestions: [
              {
                q: "Define a context-free grammar formally. Using the grammar S -> aSb | epsilon, derive aaabbb and identify the sentential forms. State why CFGs suit nested structures.",
                marks: 7,
                outline: [
                  "Give G = (V, T, P, S) with the production shape A -> beta.",
                  "Define the rewrite relation => and its reflexive-transitive closure =>*.",
                  "Derivation: S => aSb => aaSbb => aaaSbbb => aaabbb.",
                  "List the sentential forms; note the final one is the yield.",
                  "Explain nesting: each application wraps one more matching pair.",
                  "Mention the expression grammar as the compiler-facing example.",
                ],
              },
              {
                q: "Define a sentential form.",
                marks: 2,
              },
              {
                q: "Distinguish leftmost and rightmost derivations.",
                marks: 3,
                outline: [
                  "Leftmost: always expand the leftmost variable; rightmost: the rightmost.",
                  "In S -> aSb | epsilon both coincide since only one variable ever appears.",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Regular grammar",
            body: [
              "A regular grammar generates exactly the regular languages with productions of only two shapes: right-linear A → aB or A → a (possibly A → ε), and left-linear A → Ba or A → a. In a right-linear grammar the grammar 'moves right' through the string exactly the way an automaton moves through its states: variable A with rule A → aB means 'in state A, reading symbol a, go to state B'. The correspondence is constructive in both directions — from a DFA build a right-linear grammar whose variables are the states, and from a right-linear grammar build an NFA whose states are the variables — which proves the classic equivalence: regular grammars = finite automata = regular expressions. Mixing right-linear and left-linear rules in one grammar breaks the property and can generate non-regular languages, so keep a grammar pure.",
              "Worked DFA → right-linear grammar. Take a DFA with states q₀, q₁, finals {q₁}, alphabet {a, b}, and arrows q₀ —a→ q₁, q₀ —b→ q₀, q₁ —a→ q₁, q₁ —b→ q₀. The grammar has variables S₀, S₁ (one per state, S = S₀), terminals {a, b}, and productions S₀ → aS₁ | bS₀, S₁ → aS₁ | bS₀ | ε (the ε for S₁ because q₁ is final). A derivation of the string 'aa': S₀ ⇒ aS₁ ⇒ aaS₁ ⇒ aaε = aa — exactly the DFA's accepting path. Every arrow becomes a production; every final state gets an ε-production; the construction is mechanical and invertible.",
              "Worked right-linear grammar → NFA. Given grammar S → aA | bS | ε, A → aA | bB, B → aS | bS. Treat each variable as a state (S is start); each production A → aB becomes an arrow A —a→ B; each production A → ε marks A as final; each production A → a (no variable after the terminal) becomes an arrow A —a→ q_f where q_f is a fresh final state. The NFA's language is exactly the grammar's. The conversion runs in linear time and preserves the language, which is the constructive proof that right-linear grammars and finite automata recognize the same family — the regular languages. Kleene's theorem completes the triangle by adding regexes.",
            ],
            keyTerms: [
              { term: "Right-linear grammar", definition: "Productions of the form A → aB or A → a (possibly A → ε); generates the regular languages." },
              { term: "Left-linear grammar", definition: "Productions of the form A → Ba or A → a; equivalent to right-linear by reversal." },
              { term: "Regular grammar", definition: "A right- or left-linear grammar (kept pure — not mixed)." },
              { term: "DFA-to-grammar construction", definition: "Variables = states; productions = arrows; finals add ε." },
            ],
            callout: {
              type: "warning",
              title: "Don't mix directions",
              body: "A grammar with both A → aB (right-linear) and A → Ba (left-linear) productions is NOT a regular grammar, and may generate non-regular languages such as {ww^R}. Convert any mixed grammar to a single direction before claiming regularity.",
            },
            diagram: {
              kind: "compare",
              title: "Right-linear vs left-linear",
              caption:
                "Either direction alone generates exactly the regular languages; mixing both in one grammar can generate non-regular languages.",
              left: {
                heading: "Right-linear",
                items: [
                  "Rules A -> aB or A -> a (or A -> epsilon)",
                  "Variable sits at the right end - the string grows rightward",
                  "Mirrors a DFA: in state A on symbol a, move to state B",
                  "DFA to grammar: variables = states, finals get epsilon",
                ],
              },
              right: {
                heading: "Left-linear",
                items: [
                  "Rules A -> Ba or A -> a (or A -> epsilon)",
                  "Variable sits at the left end - the string grows leftward",
                  "Equivalent to right-linear by reversal of strings",
                  "Mixing directions breaks regularity (e.g. can yield ww^R)",
                ],
              },
            },
            bullets: [
              "Regular grammar: productions only A -> aB, A -> a, A -> epsilon (right-linear) or the mirrored left-linear forms.",
              "Right-linear grammar and DFA are interchangeable: variables are states, productions are arrows.",
              "DFA -> grammar: for each arrow q -a-> q' add q -> a q'; final states get q -> epsilon.",
              "Grammar -> NFA: each A -> aB becomes an arrow A -a-> B; A -> epsilon marks A final; A -> a needs a fresh final state.",
              "Worked derivation of 'aa': S0 => aS1 => aaS1 => aa (using S1 -> epsilon).",
              "The triple equivalence: regular grammars = finite automata = regular expressions (Kleene's theorem).",
              "Never mix left- and right-linear rules - the grammar may leave the regular family.",
            ],
            examQuestions: [
              {
                q: "Define a right-linear grammar. Convert the DFA with states q0, q1 (final q1) and transitions q0 -a-> q1, q0 -b-> q0, q1 -a-> q1, q1 -b-> q0 into an equivalent right-linear grammar, and derive the string 'aa'.",
                marks: 7,
                outline: [
                  "Definition of the right-linear production shapes.",
                  "Construction: one variable per state, start variable S0.",
                  "Productions S0 -> aS1 | bS0 and S1 -> aS1 | bS0 | epsilon.",
                  "Explain why the final state adds an epsilon production.",
                  "Derivation: S0 => aS1 => aaS1 => aa.",
                  "State the equivalence with finite automata.",
                ],
              },
              {
                q: "Write the two allowed shapes of productions in a right-linear grammar.",
                marks: 2,
              },
              {
                q: "Why must a regular grammar not mix left-linear and right-linear productions?",
                marks: 3,
                outline: [
                  "The mixture can generate non-regular languages (e.g. {w w^R}).",
                  "Regularity of the generated family rests on keeping a single direction.",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Derivation trees",
            body: [
              "A derivation tree (parse tree) draws a derivation as a picture: the start symbol at the root, one child level per production applied, variables as internal nodes, terminals at the leaves. Reading the leaves left to right yields the derived string — the tree's yield. Two derivation orders visit the same tree differently: a leftmost derivation always expands the leftmost variable next, a rightmost derivation the rightmost. For an unambiguous grammar, each string has exactly one parse tree, and its leftmost and rightmost derivations are two itineraries through that same tree — one string, one structure, two reading orders.",
              "Worked example with the grammar S → aSb | ε on the string aabb. Tree: root S has children a, S, b (production S → aSb); the inner S has children a, S, b again; the innermost S has child ε. Leaves left to right: a, a, ε, b, b — the yield, dropping ε, is aabb. The leftmost derivation S ⇒ aSb ⇒ aaSbb ⇒ aaεbb = aabb expands the leftmost (here only) variable at each step. The rightmost derivation does the same in this case because there is at most one variable. In a multi-variable grammar the two derivations produce the same tree but visit its nodes in different orders — the tree is the structure, the derivation is the path through it.",
              "Parse trees are the bridge between grammars and semantics. A compiler builds the parse tree of an expression and then walks it to compute the result: an in-order walk of (2 + 3) * 4 computes 5 * 4 = 20. The same string parsed by an ambiguous grammar yields two different trees, two different walks, two different results — the cause of the precedence and associativity errors that motivate ambiguity removal (Section 3.6). Every parser constructs or simulates a parse tree; every static-analysis tool walks one; the derivation tree is the data structure on which program understanding is built.",
            ],
            keyTerms: [
              { term: "Derivation tree (parse tree)", definition: "A rooted tree whose internal nodes are productions and whose leaves are terminals." },
              { term: "Yield", definition: "The leaves of a derivation tree read left to right; equals the derived string." },
              { term: "Leftmost derivation", definition: "At each step, expand the leftmost variable present." },
              { term: "Rightmost derivation", definition: "At each step, expand the rightmost variable present." },
            ],
            diagram: {
              kind: "layers",
              title: "A derivation tree grows downward",
              caption:
                "Every internal node is a production, every leaf a terminal, and the yield is the derived string.",
              layers: [
                { label: "E (root = start symbol)" },
                { label: "E → id  +  E" },
                { label: "E → E * E" },
                { label: "id    id    id", note: "Yield = leaves left to right" },
              ],
            },
            bullets: [
              "Parse tree: start symbol at the root, productions as internal nodes, terminals at the leaves.",
              "Yield: leaves read left to right - equals the derived string.",
              "Leftmost derivation expands the leftmost variable; rightmost expands the rightmost.",
              "Unambiguous grammar: one parse tree (hence one leftmost and one rightmost derivation) per string.",
              "Worked tree for aabb with S -> aSb | epsilon: nested S nodes, yield a a epsilon b b.",
              "Compilers walk parse trees to evaluate: an in-order walk of (2 + 3) * 4 computes 20.",
              "Two derivations of one string may share a tree - the tree is the structure, the derivation the route through it.",
            ],
            callout: {
              type: "exam",
              title: "Draw the tree, then the derivation",
              body: "Ambiguity and derivation questions want both artifacts: the parse tree (labelled nodes, correct shape) and the corresponding leftmost derivation listing every sentential form. The tree alone without the derivation, or vice versa, typically earns half marks.",
            },
            examQuestions: [
              {
                q: "For the grammar S -> aSb | epsilon, draw the derivation tree of the string aabb, give its yield, and write the corresponding leftmost derivation.",
                marks: 7,
                outline: [
                  "Root S with children a, S, b (rule S -> aSb).",
                  "The inner S again with children a, S, b.",
                  "The innermost S with the child epsilon.",
                  "Yield: leaves left to right give aabb.",
                  "Leftmost derivation: S => aSb => aaSbb => aa epsilon bb = aabb.",
                  "Note that here leftmost and rightmost coincide because only one variable appears.",
                ],
              },
              {
                q: "Define the yield of a parse tree.",
                marks: 2,
              },
              {
                q: "How do leftmost and rightmost derivations relate to the parse tree of an unambiguous grammar?",
                marks: 3,
                outline: [
                  "Both derivations trace the same unique tree.",
                  "They differ only in the order in which nodes are expanded.",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Ambiguity in grammar",
            body: [
              "A CFG is ambiguous if some string in its language has two or more distinct parse trees (equivalently, two different leftmost derivations). Ambiguity is a property of the grammar, not of the language: the same string may be structured one way that computes 2 + (3 × 4) = 14 and another that computes (2 + 3) × 4 = 20 — a compiler cannot tolerate that freedom. The arithmetic grammar E → E + E | E * E | (E) | id is the textbook ambiguous case for id + id * id: one tree adds first, the other multiplies first. The standard cure is to factor the grammar by precedence — introduce levels E → E + T | T, T → T * F | F, F → (E) | id — which forces multiplication to bind more tightly than addition and leaves exactly one tree per expression. Some languages are inherently ambiguous: every grammar for them is ambiguous, such as {aⁱbʲcᵏ : i = j or j = k}.",
              "Removing ambiguity by precedence and associativity. Rewrite E → E + E | E * E | (E) | id as E → E + T | T, T → T * F | F, F → (E) | id. The new grammar has three variables (expression, term, factor) encoding precedence levels: multiplication binds more tightly than addition because T sits lower in the tree. To enforce left-associativity (a + b + c parses as (a + b) + c) the production E → E + T is left-recursive; right-associativity would use E → T + E. The string id + id * id now has exactly one tree: the multiplication is forced below the addition by the grammar's structure, giving 14 unambiguously. This is the grammar that compilers actually use.",
              "Inherent ambiguity is a property of certain languages — every grammar for them is ambiguous. The classic witness is L = {aⁿbⁿcᵐ : n, m ≥ 1} ∪ {aⁿbᵐcᵐ : n, m ≥ 1}, the union of two CFLs whose intersection contains {aⁿbⁿcⁿ}. Any CFG for L must keep two derivation strategies (one for each half of the union), and on the strings where both apply — aⁿbⁿcⁿ — the two strategies yield two distinct trees. Proving inherent ambiguity requires the Ogden pumping lemma and is beyond the exam; what matters is the distinction: a grammar is ambiguous (fixable by rewriting), a language is inherently ambiguous (unfixable). State both clearly when asked.",
            ],
            keyTerms: [
              { term: "Ambiguous grammar", definition: "A CFG in which some string has two or more distinct parse trees (equivalently, two leftmost derivations)." },
              { term: "Inherent ambiguity", definition: "A property of certain languages — every grammar for them is ambiguous." },
              { term: "Precedence factoring", definition: "Rewriting E → E + E | E * E as E → E + T | T, T → T * F | F to force one tree per string." },
              { term: "Associativity", definition: "Left-recursive rules enforce left associativity; right-recursive rules enforce right." },
            ],
            diagram: {
              kind: "compare",
              title: "Ambiguity made visible",
              caption:
                "The same string 'id + id * id', two parse trees, two different answers — the reason operator-precedence grammars exist.",
              left: {
                heading: "Tree 1 — add first",
                items: [
                  "root: E + E",
                  "left E → id, right E → E * E",
                  "reads as id + (id * id)",
                  "multiplication wins → 14",
                ],
              },
              right: {
                heading: "Tree 2 — multiply first",
                items: [
                  "root: E * E",
                  "left E → E + E, right E → id",
                  "reads as (id + id) * id",
                  "addition wins → 20",
                ],
              },
            },
            bullets: [
              "Ambiguous grammar: some string has two distinct parse trees (equivalently, two leftmost derivations).",
              "Ambiguity is a property of the grammar, not of the language.",
              "Textbook case: E -> E + E | E * E | (E) | id on id + id * id - the two trees read as 14 and 20.",
              "Cure: precedence factoring into E -> E + T | T, T -> T * F | F, F -> (E) | id.",
              "Left-recursive rules (E -> E + T) enforce left associativity; right-recursive rules enforce right.",
              "Inherently ambiguous language: every grammar generating it is ambiguous, e.g. {a^i b^j c^k : i = j or j = k}.",
              "Compilers require unambiguous grammars - two trees would give two evaluation orders.",
            ],
            callout: {
              type: "exam",
              title: "Exhibit the two trees",
              body: "'Show that G is ambiguous' means draw two parse trees of the same string - words alone earn little. Label one tree 'add first' and the other 'multiply first', give the two different readings, and only then present the disambiguated grammar with its three precedence levels.",
            },
            examQuestions: [
              {
                q: "Show that the grammar E -> E + E | E * E | (E) | id is ambiguous for the string id + id * id by drawing two parse trees, and remove the ambiguity by rewriting the grammar.",
                marks: 7,
                outline: [
                  "Definition of ambiguity: two parse trees or two leftmost derivations for one string.",
                  "Tree 1: id + (id * id) - multiplication inside addition, value 14.",
                  "Tree 2: (id + id) * id - addition inside multiplication, value 20.",
                  "Conclusion: the grammar is ambiguous.",
                  "Rewrite with levels: E -> E + T | T, T -> T * F | F, F -> (E) | id.",
                  "Explain why the new grammar forces multiplication lower in the tree.",
                ],
              },
              {
                q: "Define an ambiguous grammar.",
                marks: 2,
              },
              {
                q: "What is inherent ambiguity? Give one example language.",
                marks: 3,
                outline: [
                  "A property of the language: every grammar generating it is ambiguous.",
                  "Example: {a^i b^j c^k : i = j or j = k}.",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Simplification of context-free grammars",
            body: [
              "Before running CFG algorithms (parsing, normal-form conversion), grammars are cleaned of three kinds of dead weight, always in this order. Step 1 — remove useless symbols: a symbol is generating if it can derive some terminal string, and reachable if it appears in some sentential form from S; keep only symbols that are both (first delete non-generating productions, then delete unreachable ones — the order matters). Step 2 — remove ε-productions: rules A → ε bloat derivations; the substitution method adds, for every production containing A on the right, all variants with that A deleted (so B → aAb yields B → ab as a partner), and finally drops A → ε, keeping S → ε only if ε ∈ L(G). Step 3 — remove unit productions: chains A → B → C that rename variables without doing work; compute the transitive closure of the unit relation and replace each chain by its endpoint's real productions. The result is a grammar with no ε- or unit-productions generating the same language (minus possibly ε).",
              "Worked useless-symbol removal. Take S → A | AB, A → a, B → bC, C → cD, D → ε. Generating symbols: terminals always; A (→ a), D (→ ε), then C (→ cD → c), then B (→ bC → bc). All variables are generating. Reachable from S: S, A, B, then C (via B), then D (via C). All reachable. Nothing to remove. Now swap the example: B → bCD with C non-generating — then B is non-generating too, and S → AB is replaced by S → A (delete the B). Order matters because removing non-generating symbols first may make other symbols unreachable, which the second pass then cleans up.",
              "Worked ε-production removal. Grammar S → AB, A → aA | ε, B → bB | ε generates strings of zero or more a's followed by zero or more b's, including ε. For A → ε, add variants of any production containing A on the right with A deleted: S → AB yields S → B (drop A); symmetric variants yield S → A (drop B) and S → ε (drop both, kept because ε ∈ L(G)). The cleaned grammar: S → AB | A | B | ε, A → aA | a, B → bB | b. Same language, no ε-productions except the start.",
              "Worked unit-production removal. Grammar S → A, A → B, B → a | b. The unit pairs are (S, A), (S, B), (A, B). For each unit pair (X, Y), copy Y's non-unit productions onto X: S gets a, b (transitively through A and B); A gets a, b (through B). The cleaned grammar: S → a | b, A → a | b, B → a | b — same language {a, b}, no chains. The cleaned grammar has at most |P| · |V| productions, linear in the original size. After all three steps the grammar is reduced: every symbol is useful, no ε-rules (except possibly S → ε), no unit rules — ready for CNF or GNF conversion.",
            ],
            keyTerms: [
              { term: "Useless symbol", definition: "A variable that is not generating (cannot derive terminals) or not reachable from S." },
              { term: "Generating symbol", definition: "A variable that derives some terminal string." },
              { term: "ε-production", definition: "A rule A → ε; removed by adding deletion variants of every production containing A." },
              { term: "Unit production", definition: "A rule A → B (single variable on both sides); removed by taking the transitive closure of the unit relation." },
              { term: "Reduced grammar", definition: "A CFG with no useless symbols, no ε-productions (except possibly S → ε), and no unit productions." },
            ],
            callout: {
              type: "exam",
              title: "Order is mandatory",
              body: "Always remove useless symbols BEFORE ε-productions BEFORE unit productions, in that order. Reversing the order produces a different (often larger) grammar and may re-introduce ε- or unit-rules. The pipeline diagram below fixes the sequence — memorize it.",
            },
            diagram: {
              kind: "pipeline",
              title: "The simplification pipeline",
              caption:
                "Useless symbols first, then ε-productions, then unit productions — the mandatory preprocessing before any normal form.",
              stages: [
                { label: "Raw CFG", note: "as written" },
                { label: "Drop useless", note: "non-generating, unreachable" },
                { label: "Drop ε-rules", note: "substitute variants" },
                { label: "Drop unit rules", note: "collapse A → B chains" },
                { label: "Clean CFG", note: "same language, no dead weight" },
              ],
            },
            bullets: [
              "Simplification order is mandatory: useless symbols first, then epsilon-productions, then unit productions.",
              "Useless symbol: not generating (derives no terminal string) or not reachable from S.",
              "epsilon-removal: add, for every production containing A on the right, the variant with that A deleted, then drop A -> epsilon (keep S -> epsilon only if epsilon is in the language).",
              "Unit-removal: take the transitive closure of the unit relation and copy each endpoint's non-unit productions.",
              "Worked epsilon case: S -> AB, A -> aA | epsilon, B -> bB | epsilon becomes S -> AB | A | B | epsilon, A -> aA | a, B -> bB | b.",
              "Worked unit case: S -> A, A -> B, B -> a | b collapses to S -> a | b, A -> a | b, B -> a | b.",
              "Output: a reduced grammar for the same language (minus possibly epsilon), ready for CNF or GNF conversion.",
            ],
            examQuestions: [
              {
                q: "Simplify the grammar S -> A | AB, A -> a, B -> bC, C -> cD, D -> epsilon, and state with justification the order in which useless symbols, epsilon-productions and unit-productions must be removed.",
                marks: 7,
                outline: [
                  "Compute the generating symbols (terminals first, then A, D, C, B in turn).",
                  "Compute the symbols reachable from S.",
                  "Delete non-generating productions first, then unreachable ones.",
                  "Remove epsilon-productions by substitution variants, keeping S -> epsilon only if epsilon is in the language.",
                  "Remove unit productions via the transitive closure of the unit relation.",
                  "Justify the order: earlier removals can create new useless or unit rules.",
                  "Present the final reduced grammar.",
                ],
              },
              {
                q: "Define generating and reachable symbols of a CFG.",
                marks: 2,
              },
              {
                q: "How is a unit production A -> B removed?",
                marks: 3,
                outline: [
                  "Find every variable reachable from A through a chain of unit productions.",
                  "Copy each endpoint's non-unit productions onto A and delete the unit rules.",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Conversion between grammars and automata",
            body: [
              "The grammar–automata dictionary runs across the whole hierarchy. Regular grammar ↔ finite automaton: variables become states, the production A → aB becomes an arrow labelled a from state A to state B, A → ε marks A final, and the start variable is the start state — the construction inverts too. CFG ↔ pushdown automaton: a PDA accepts a CFG's language by leftmost derivation: the stack holds the un-expanded tail of the sentential form; when the top of the stack is a variable, the PDA pops it and pushes one of its right-hand sides (a choice — the nondeterminism); when the top is a terminal, it must match the next input symbol, and it is popped; when the stack is empty the input has been fully generated and is accepted. Conversely, any PDA's behaviour can be read off as a CFG whose variables encode 'net stack effect' pairs.",
              "Worked CFG → PDA for S → aSb | ε. PDA has one state q, stack alphabet {S, a, b, Z₀} (Z₀ the bottom marker). Transitions: (q, ε, S) → (q, aSb) [expand S]; (q, ε, S) → (q, ε) [expand S to ε]; (q, a, a) → (q, ε) [match terminal a]; (q, b, b) → (q, ε) [match terminal b]. Run on aabb: stack S, expand to aSb → match a, stack Sb → expand S to aSb, stack aSbb → match a, stack Sbb → expand S to ε, stack bb → match b, stack b → match b, stack empty → accept. The PDA simulates the grammar's leftmost derivation step by step.",
              "Why the construction is correct. At every step the stack's top-to-bottom sequence is exactly the un-yielded suffix of the current sentential form: the part of the derivation still to be matched against input. Popping a variable and pushing a right-hand side performs one expansion (the nondeterministic guess). Matching a terminal consumes input. The PDA accepts with empty stack when the entire sentential form has been matched to the input — which is the definition of 'the input is in L(G)'. The converse, PDA → CFG, encodes the PDA's stack behaviour into grammar variables of the form [p, A, q] meaning 'from state p with A on the stack, reach state q having popped A'. This bijective correspondence is the proof that CFGs and PDAs accept the same family: the context-free languages.",
            ],
            keyTerms: [
              { term: "Grammar–automaton correspondence", definition: "The constructive translation between grammars of each Chomsky type and their matching machine." },
              { term: "Pushdown automaton (PDA)", definition: "A finite automaton with an unbounded LIFO stack; accepts the context-free languages." },
              { term: "Empty-stack acceptance", definition: "A PDA accepts by emptying its stack (alternative to final-state acceptance; equivalent in power)." },
              { term: "Leftmost derivation on a stack", definition: "The algorithm a PDA uses to simulate a CFG — variables are expanded, terminals are matched." },
            ],
            diagram: {
              kind: "pipeline",
              title: "PDA running a CFG's leftmost derivation",
              caption:
                "The stack holds the not-yet-expanded part of the sentential form.",
              stages: [
                { label: "Grammar", note: "generates by rewriting" },
                { label: "Variable on top?", note: "replace by a right-hand side (guess!)" },
                { label: "Terminal on top?", note: "must match next input symbol" },
                { label: "Stack empty", note: "input accepted" },
              ],
            },
            bullets: [
              "Regular grammar <-> FA: variables are states; A -> aB is the arrow A -a-> B; A -> epsilon marks a final state.",
              "CFG -> PDA (empty-stack acceptance): the stack holds the un-expanded tail of the sentential form.",
              "Variable on top: pop it and push a right-hand side - the nondeterministic guess.",
              "Terminal on top: it must match the next input symbol, then is popped.",
              "Empty stack: the whole sentential form matched the input - accept.",
              "Worked CFG -> PDA for S -> aSb | epsilon: one state, stack alphabet {S, a, b, Z0}; simulate 'aabb' step by step.",
              "PDA -> CFG: variables [p, A, q] encode 'from state p with A on the stack, reach state q having popped A'.",
              "The correspondence proves CFGs and PDAs accept exactly the context-free languages.",
            ],
            callout: {
              type: "tip",
              title: "Track the stack in words",
              body: "In CFG-to-PDA simulation answers, annotate every step with both the stack content and the remaining input. The examiner checks the invariant - stack equals the un-expanded suffix of the sentential form - so a column-formatted trace (input, stack, action) reads as a complete, confident answer.",
            },
            examQuestions: [
              {
                q: "Construct a pushdown automaton (empty-stack acceptance) for the grammar S -> aSb | epsilon and simulate it on the input aabb, showing the stack and remaining input at every step.",
                marks: 7,
                outline: [
                  "PDA components: one state q, stack alphabet {S, a, b, Z0} with Z0 the bottom marker.",
                  "Expand moves: (q, epsilon, S) -> (q, aSb) and (q, epsilon, S) -> (q, epsilon).",
                  "Match moves: (q, a, a) -> (q, epsilon) and (q, b, b) -> (q, epsilon).",
                  "Trace aabb: expand, match a, expand, match a, expand to epsilon, match b, match b - stack empty, accept.",
                  "Explain the invariant: the stack top is the next symbol to produce or match.",
                ],
              },
              {
                q: "What does the stack of the CFG-simulating PDA hold at any moment?",
                marks: 2,
              },
              {
                q: "Distinguish empty-stack acceptance from final-state acceptance of a PDA.",
                marks: 3,
                outline: [
                  "Empty stack: accept when the stack empties after reading the input.",
                  "Final state: accept when the input ends in a designated state; the two models are equivalent in power.",
                ],
              },
            ],
          },
          {
            number: "3.9",
            title: "The Chomsky hierarchy",
            body: [
              "The four grammar types nest strictly inside one another: Regular ⊂ Context-free ⊂ Context-sensitive ⊂ Recursively enumerable. Every containment is proper — witnessed by the landmark languages aⁿbⁿ (context-free but not regular), aⁿbⁿcⁿ (context-sensitive but not context-free), and the halting problem's semi-decidable set (recursively enumerable but not decidable). The hierarchy is the periodic table of computation: given any language, the first question is 'which floor does it live on?', because that determines which machine can process it and which algorithms terminate.",
              "Why the containments are proper — the witness argument. {aⁿbⁿ : n ≥ 0} is context-free (grammar S → aSb | ε), but a DFA cannot recognize it: any DFA for the language would, after seeing k a's, have to remember k to check the b count, but with finitely many states it cannot count arbitrarily high — the pigeonhole principle yields two prefixes aⁱ and aʲ (i ≠ j) sending the DFA to the same state, and then aⁱbⁱ and aʲbⁱ (one in the language, one not) cannot be distinguished. Similar pumping-lemma arguments show {aⁿbⁿcⁿ} is not context-free, and a diagonalization argument shows the halting problem is not decidable. Each witness is a single language that breaks the lower family.",
              "Practical consequences for tooling. Each floor comes with its own decidable questions and its own algorithms. Regular: membership, emptiness, equivalence, minimization — all decidable in polynomial time. Context-free: membership decidable in O(n³) by CYK; emptiness decidable; equivalence undecidable. Context-sensitive: membership decidable but PSPACE-complete; equivalence undecidable. Recursively enumerable: membership semi-decidable (a Turing machine halts on positive instances); emptiness and equivalence undecidable. Choose the lowest floor that fits the language and you inherit the strongest tools; choose too high a floor and even simple questions become undecidable. This is why programming-language syntax is engineered to be context-free: the parser algorithms and the decidability of well-formedness both depend on it.",
            ],
            keyTerms: [
              { term: "Chomsky hierarchy", definition: "The strict nesting Regular ⊂ Context-free ⊂ Context-sensitive ⊂ Recursively enumerable." },
              { term: "Pumping lemma", definition: "The standard tool for proving a language is not in a given family (regular or context-free)." },
              { term: "Witness language", definition: "A single language that proves a containment is proper (e.g. {aⁿbⁿ} for Regular ⊊ Context-free)." },
              { term: "Decidability", definition: "Whether an algorithm exists that always halts with a yes/no answer for every input." },
            ],
            diagram: {
              kind: "layers",
              title: "The Chomsky hierarchy as nested sets",
              caption:
                "Each inner family is strictly smaller, each outer machine strictly more powerful — memorize this drawing.",
              layers: [
                { label: "Type 0 — Recursively enumerable · Turing machine" },
                { label: "Type 1 — Context-sensitive · Linear-bounded automaton" },
                { label: "Type 2 — Context-free · Pushdown automaton" },
                { label: "Type 3 — Regular · Finite automaton", note: "smallest, most decidable" },
              ],
            },
            bullets: [
              "Strict nesting: Regular is a proper subset of Context-free, of Context-sensitive, of Recursively enumerable.",
              "Witness a^n b^n: context-free (S -> aSb | epsilon) but not regular - pigeonhole on DFA states.",
              "Witness a^n b^n c^n: context-sensitive but not context-free - CFL pumping argument.",
              "Witness: the halting problem's yes-set is recursively enumerable but not decidable.",
              "Each floor has its own algorithms: linear membership for regular, O(n^3) CYK for context-free, PSPACE-complete for context-sensitive.",
              "Equivalence is already undecidable for context-free grammars.",
              "Engineering rule: put a language on the lowest floor that fits to inherit the strongest tools.",
            ],
            callout: {
              type: "exam",
              title: "Hierarchy questions are witness questions",
              body: "'Explain the Chomsky hierarchy' is really 'prove the containments are proper'. For full marks every arrow must carry its witness language and a one-line reason (pigeonhole, pumping, diagonalization). A nesting diagram without witnesses reads as a definition, not an explanation.",
            },
            table: {
              caption: "Decidability across the hierarchy.",
              headers: ["Family", "Membership", "Emptiness", "Equivalence"],
              rows: [
                ["Regular", "decidable, linear time", "decidable", "decidable (minimize and compare)"],
                ["Context-free", "decidable, O(n^3) by CYK", "decidable", "undecidable"],
                ["Context-sensitive", "decidable, PSPACE-complete", "undecidable", "undecidable"],
                ["Recursively enumerable", "semi-decidable only", "undecidable", "undecidable"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Chomsky hierarchy of languages. For each proper containment give a witness language and a brief argument why it escapes the smaller family.",
                marks: 7,
                outline: [
                  "Draw the four nested families and name the machine for each.",
                  "a^n b^n is context-free (give the grammar) but not regular - pigeonhole on DFA states.",
                  "a^n b^n c^n is context-sensitive but not context-free - pumping lemma sketch.",
                  "The halting problem's yes-set is recursively enumerable but not decidable - diagonalization mention.",
                  "Relate each floor to its machine: FA, PDA, LBA, TM.",
                  "Conclude with which questions stay decidable on each floor.",
                ],
              },
              {
                q: "Which natural question about context-free grammars is undecidable?",
                marks: 2,
              },
              {
                q: "Give the witness language proving that context-free languages strictly contain the regular languages.",
                marks: 3,
                outline: [
                  "{a^n b^n : n >= 0}.",
                  "Generated by S -> aSb | epsilon; not regular because a DFA cannot match the two counts.",
                ],
              },
            ],
          },
          {
            number: "3.10",
            title: "Chomsky Normal Form (CNF)",
            body: [
              "A CFG is in Chomsky Normal Form when every production is of exactly one of two shapes: A → BC (two variables) or A → a (one terminal), optionally plus S → ε when the language contains the empty string. Any CFG can be converted: first simplify, then for each production longer than two symbols introduce fresh variables that chop it into binary pieces — A → BCDE becomes A → BX₁, X₁ → CX₂, X₂ → DE — and for terminals inside longer bodies, wrap them as A → a with a fresh variable. CNF's payoff is algorithmic: a CNF parse tree for a string of length n has exactly 2n − 1 nodes, so parsing by the CYK dynamic-programming algorithm runs in O(n³ · |G|) — a polynomial-time membership test that only works because every branch is binary. Worked example: S → ASA | aB, A → B | S, B → b | ε simplifies and re-chops into S → AX₁ | AY₁Y₂, X₁ → SA, Y₁ → SY₂, Y₂ → SA, A → a, B → b — same language, binary building blocks only.",
              "Step-by-step conversion recipe. (1) Simplify the grammar (useless symbols, ε-productions, unit productions — Section 3.7). (2) Wrap every terminal that appears in a body of length ≥ 2 as a fresh variable: production S → aSa becomes S → C_a S C_a with C_a → a. (3) For every production whose body has length ≥ 3, introduce fresh variables that binary-chop it: A → B₁B₂B₃B₄ becomes A → B₁X₁, X₁ → B₂X₂, X₂ → B₃B₄. (4) Re-add S → ε if ε was in the original language. The result is a CNF grammar generating the same language as the original (except possibly ε).",
              "Worked CNF conversion. Grammar S → ASA | aB, A → B | S, B → b | ε. (1) Simplify: B → b after removing B → ε (with substitution variants); A → S after removing A → B (unit); now S → ASA | aB | AB | aSA | a (variants from B → ε); clean further. (2) Wrap terminals in long bodies: introduce C_a → a, so S → aB becomes S → C_a B. (3) Binary-chop: S → ASA (length 3) becomes S → AX₁, X₁ → SA. (4) Final CNF: S → AX₁ | C_a B, X₁ → SA, A → a, C_a → a, B → b. Every production is now A → BC or A → a — binary tree, CYK-ready.",
              "CNF makes parsing polynomial. The CYK algorithm fills an n × n table whose cell (i, j) lists the variables that can derive the substring of length j starting at position i. Filling proceeds by length: length-1 substrings use A → a rules; longer substrings combine two shorter ones by A → BC, searching every split point. With CNF, every combination is a binary split, so the table has O(n²) cells, each filled in O(n) time, giving O(n³) total. Without CNF the parse tree could branch arbitrarily and the algorithm would not terminate in polynomial time. This is the algorithmic payoff of normal forms: structure enables efficiency.",
            ],
            keyTerms: [
              { term: "Chomsky Normal Form (CNF)", definition: "Every production is A → BC or A → a (optionally S → ε)." },
              { term: "Binary chopping", definition: "Splitting a long right-hand side A → B₁B₂…Bₖ into A → B₁X₁, X₁ → B₂X₂, …, X_{k-2} → B_{k-1}Bₖ." },
              { term: "Terminal wrapping", definition: "Introducing a fresh variable C_a → a for each terminal a that appears in a body of length ≥ 2." },
              { term: "CYK algorithm", definition: "A dynamic-programming parser that runs in O(n³ · |G|) on a CNF grammar." },
              { term: "Parse tree size", definition: "In CNF a string of length n has exactly 2n − 1 internal nodes." },
            ],
            diagram: {
              kind: "pipeline",
              title: "CNF conversion pipeline",
              caption:
                "Simplify first, then wrap terminals, then binary-chop long bodies — at the end every production is A → BC or A → a.",
              stages: [
                { label: "Raw CFG", note: "productions as written" },
                { label: "Simplify", note: "useless, ε, unit rules out" },
                { label: "Wrap terminals", note: "C_a → a for each terminal in long bodies" },
                { label: "Binary-chop", note: "A → B₁B₂B₃ ⇒ A → B₁X₁, X₁ → B₂B₃" },
                { label: "CNF grammar", note: "A → BC or A → a only" },
              ],
            },
            callout: {
              type: "tip",
              title: "CYK's secret",
              body: "CNF's real gift is the 2n − 1 tree size: every branch is binary, so the CYK dynamic program knows exactly which split points to try. If a grammar isn't in CNF, the parse tree may branch arbitrarily and CYK no longer runs in O(n³). Convert to CNF first, then parse.",
            },
            bullets: [
              "CNF: every production is A -> BC or A -> a (optionally S -> epsilon).",
              "Pipeline: simplify, wrap terminals appearing in long bodies as fresh variables, binary-chop bodies of length >= 3.",
              "Wrapping: S -> aSa becomes S -> Ca S Ca with Ca -> a.",
              "Chopping: A -> B1B2B3B4 becomes A -> B1X1, X1 -> B2X2, X2 -> B3B4.",
              "A CNF parse tree for a string of length n has exactly 2n - 1 nodes - the fact that makes CYK polynomial.",
              "Worked conversion: S -> ASA | aB, A -> B | S, B -> b | epsilon becomes S -> AX1 | Ca B, X1 -> SA, A -> a, Ca -> a, B -> b.",
              "CYK fills an O(n^2) table of variable sets, O(n) per cell - O(n^3) total.",
            ],
            examQuestions: [
              {
                q: "Convert the grammar S -> ASA | aB, A -> B | S, B -> b | epsilon into Chomsky Normal Form, showing the simplification, terminal-wrapping and binary-chopping stages.",
                marks: 7,
                outline: [
                  "Simplify: remove B -> epsilon with substitution variants; remove the unit production A -> B.",
                  "Present the intermediate grammar after simplification.",
                  "Wrap terminals in bodies of length >= 2: introduce Ca -> a, so S -> aB becomes S -> Ca B.",
                  "Binary-chop S -> ASA (length 3) into S -> AX1, X1 -> SA.",
                  "Final CNF: S -> AX1 | Ca B, X1 -> SA, A -> a, Ca -> a, B -> b.",
                  "Verify every production is A -> BC or A -> a.",
                ],
              },
              {
                q: "State the two production shapes allowed in Chomsky Normal Form.",
                marks: 2,
              },
              {
                q: "Why does the CYK algorithm require the grammar to be in CNF?",
                marks: 3,
                outline: [
                  "CYK combines two shorter substrings via a production A -> BC.",
                  "CNF guarantees binary branching (2n - 1 nodes), giving the O(n^3) bound.",
                ],
              },
            ],
          },
          {
            number: "3.11",
            title: "Greibach Normal Form (GNF)",
            body: [
              "A CFG is in Greibach Normal Form when every production has the shape A → aα: one terminal followed by zero or more variables — every rule begins by emitting a concrete symbol. Conversion after simplification and CNF-style wrapping: for each rule whose body starts with a variable A, substitute A's productions in place of it (possibly repeatedly, since left-recursion A ⇒ Aα must be eliminated by the standard trick A → βA′, A′ → αA′ | α), and wrap leading terminals as fresh variables. GNF's payoff is also algorithmic: a GNF derivation emits one terminal per production applied, so a pushdown automaton can consume the input strictly left-to-right without guessing — it is the form that makes top-down, leftmost parsing mechanical, and it proves every CFL is accepted by an empty-stack PDA reading each symbol once. Where CNF makes trees binary, GNF makes derivations left-to-right — two disciplines, two algorithms.",
              "Worked GNF conversion (small example). Grammar S → AS | a, A → SA | b. Left-recursion in S (S ⇒ AS ⇒ AAS ⇒ … if A begins with S); eliminate by substitution. First rewrite A → SA | b to remove its dependence on S: substitute S's productions into the leading S of A → SA, giving A → AS A | aS | b — still problematic. Use the standard left-recursion removal: introduce S′ with S → aS′ | a (emit a terminal first), S′ → SS′ | S (the residual recursion, now harmless because S starts with a terminal). Continue until every production begins with a terminal. The resulting grammar is in GNF.",
              "Step-by-step GNF recipe. (1) Simplify the grammar (same pipeline as CNF). (2) Eliminate left-recursion: for each variable A with rules A → Aα (left-recursive) and A → β (non-left-recursive), introduce A′ and rewrite as A → βA′, A′ → αA′ | α. (3) For each production whose body starts with a variable, substitute that variable's productions until every body starts with a terminal — process variables in a fixed order so substitutions terminate. (4) Wrap any terminals that appear after the leading terminal as fresh variables (so A → abB becomes A → aC_aB with C_a → b). The result is a GNF grammar with every production of the form A → aα.",
              "GNF's algorithmic payoff. Because every production emits exactly one terminal at its left edge, a one-step leftmost derivation consumes one input symbol — there is no guess-and-match like in the general CFG-PDA construction. The PDA built from a GNF grammar is deterministic-friendly: at each step it reads one input symbol, pops the top variable, and pushes the corresponding right-hand side's variables. This is the form that underpins top-down parsers (recursive descent, LL(k)) and the proof that every CFL is accepted by a one-state PDA that pushes nothing on ε. CNF and GNF are complementary disciplines: CNF for bottom-up CYK parsing, GNF for top-down LL parsing — together they cover the two algorithmic regimes compilers use.",
            ],
            keyTerms: [
              { term: "Greibach Normal Form (GNF)", definition: "Every production has the shape A → aα with a ∈ T and α ∈ V*." },
              { term: "Left recursion", definition: "A production A → Aα; must be eliminated before GNF conversion." },
              { term: "Left-recursion elimination", definition: "Rewrite A → Aα | β as A → βA′, A′ → αA′ | α." },
              { term: "Top-down parsing", definition: "A parsing regime that builds the parse tree from the root down, naturally supported by GNF." },
              { term: "One-symbol-per-step", definition: "The property of GNF derivations that makes the PDA consume input strictly left-to-right." },
            ],
            table: {
              caption: "CNF vs GNF.",
              headers: ["Property", "Chomsky Normal Form", "Greibach Normal Form"],
              rows: [
                ["Production shapes", "A → BC, A → a", "A → aα (α ∈ V*)"],
                ["Tree shape", "binary — 2n − 1 nodes", "left-leaning, emits terminals first"],
                ["Star algorithm", "CYK parsing, O(n³)", "top-down / LL parsing"],
                ["Eliminates", "long right-hand sides", "left recursion"],
                ["Preprocessing", "simplification first — useless symbols, ε- and unit-productions", "same"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "GNF-checking one production",
              caption:
                "Every production must end as A -> a alpha: one terminal first, then variables only.",
              start: "Take a production A -> beta of the simplified grammar",
              branches: [
                { label: "beta starts with a terminal", outcome: "already GNF-shaped; wrap any later terminals as fresh variables", good: true },
                { label: "beta starts with a variable B", outcome: "substitute B's productions for B and re-check the results", good: false },
                { label: "beta = A alpha (left-recursive)", outcome: "eliminate first: A -> beta A', A' -> alpha A' | alpha", good: false },
              ],
            },
            bullets: [
              "GNF: every production has the shape A -> a alpha - a terminal first, then zero or more variables.",
              "Pipeline: simplify, eliminate left recursion, substitute leading variables until terminals lead, wrap later terminals.",
              "Left-recursion removal: A -> A alpha | beta becomes A -> beta A', A' -> alpha A' | alpha.",
              "Each GNF production emits exactly one terminal - derivations proceed strictly left-to-right.",
              "Payoff: a PDA can consume input symbol by symbol with no match-guessing; top-down (LL) parsers become mechanical.",
              "CNF makes trees binary (bottom-up CYK); GNF makes derivations left-to-right (top-down LL) - complementary disciplines.",
              "The PDA built from a GNF grammar proves every CFL is accepted by an empty-stack PDA.",
            ],
            callout: {
              type: "warning",
              title: "Kill left recursion first",
              body: "Any attempt to convert a left-recursive grammar to GNF without first eliminating the recursion (A -> A alpha) loops forever - substituting A into itself never terminates. Always show the left-recursion elimination step explicitly; examiners look for the fresh variable A' with A' -> alpha A' | alpha.",
            },
            examQuestions: [
              {
                q: "Define Greibach Normal Form. Explain the elimination of left recursion and outline the complete procedure for converting a CFG into GNF.",
                marks: 7,
                outline: [
                  "Definition: every production A -> a alpha, with a a terminal and alpha a string of variables.",
                  "Why GNF matters: one terminal emitted per step enables strict left-to-right parsing.",
                  "Simplify the grammar first (useless symbols, epsilon- and unit-productions).",
                  "Left-recursion elimination with the A' trick: A -> beta A', A' -> alpha A' | alpha.",
                  "Substitute leading variables in a fixed order until every body starts with a terminal.",
                  "Wrap trailing terminals as fresh variables.",
                  "State the connection to top-down parsing and empty-stack PDAs.",
                ],
              },
              {
                q: "Write the general shape of a Greibach Normal Form production.",
                marks: 2,
              },
              {
                q: "Which parsing regime is naturally supported by GNF, and which by CNF?",
                marks: 3,
                outline: [
                  "GNF: top-down (LL) parsing - one terminal per step.",
                  "CNF: bottom-up CYK dynamic programming - binary trees.",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  studyPlan: [
    {
      id: "weightage",
      heading: "Exam weightage — where to spend the hours",
      body: [
        "RGPV papers typically distribute 70–80 marks across Unit II (finite automata and regex) and Unit III (grammars and normal forms), with Unit I providing the foundations that the other two build on. Allocate your revision time in roughly the same ratio.",
      ],
      weightedTopics: [
        { topic: "DFA / NDFA design and subset construction", weight: "≈ 12–14 marks", note: "Almost guaranteed; practise 6–8 machines before the exam." },
        { topic: "DFA minimization by partition refinement", weight: "≈ 8–10 marks", note: "Algorithmic — full marks if you show every refinement step." },
        { topic: "Regular expressions, Arden's theorem", weight: "≈ 8–10 marks", note: "Equation-solving flavour; one Arden question is common." },
        { topic: "Moore ↔ Mealy conversion", weight: "≈ 6–8 marks", note: "Small, clean, high-yield — do not skip." },
        { topic: "CFG, ambiguity, derivation trees", weight: "≈ 8–10 marks", note: "Draw the tree every time." },
        { topic: "Chomsky hierarchy and normal forms (CNF/GNF)", weight: "≈ 8–10 marks", note: "Definitions + one conversion is the usual ask." },
        { topic: "Closure properties, 2DFA, proofs", weight: "≈ 6–8 marks", note: "Short notes; one induction proof is realistic." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section in the syllabus twice — once for understanding, once for revision — and leaves the last week for full papers.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I foundations", tasks: ["Sets, proofs, induction", "Alphabets, strings, languages, Kleene star", "FA as acceptor and translator"] },
        { week: "Week 2", focus: "Transducers and composition", tasks: ["Moore and Mealy machines", "Both conversion directions with worked examples", "Cascade composition"] },
        { week: "Week 3", focus: "Unit II — automata", tasks: ["DFA and NDFA design", "Subset construction (5 examples)", "DFA minimization"] },
        { week: "Week 4", focus: "Unit II — algebra", tasks: ["Regular expressions and Thompson construction", "Arden's theorem (3 systems)", "Closure properties, 2DFA"] },
        { week: "Week 5", focus: "Unit III — grammars", tasks: ["Chomsky hierarchy, CSG, CFG, regular grammar", "Derivation trees, ambiguity removal", "Simplification pipeline"] },
        { week: "Week 6", focus: "Normal forms + revision", tasks: ["CNF conversion (2 examples)", "GNF conversion (1 example)", "Two full past papers under time"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Always write the formal 5-tuple (or 6-tuple for transducers) before drawing the diagram — it earns the definition marks even if the diagram slips.",
        "For subset construction, label each DFA state as a set {…} so the examiner sees the construction, not a guessed answer.",
        "In DFA minimization, show every partition refinement as a separate row — never collapse steps.",
        "For Arden's theorem, state the condition ε ∉ P explicitly before solving; losing the condition costs the proof mark.",
        "When asked for ambiguity, exhibit the two parse trees side by side — one labelled 'add first', one 'multiply first'.",
        "For CNF/GNF, write the simplified grammar first, then the chopped version — never present only the final result.",
        "Carry a few coloured pens: state diagrams and parse trees read better with finals in a different colour.",
        "Time-box: 1-mark questions ≤ 4 minutes, 5-mark questions ≤ 12 minutes, 10-mark questions ≤ 22 minutes.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Forgetting the ε-closure step in subset construction — DFA states must be ε-closures, not raw reachable sets.",
        "Minimizing without first removing unreachable states — you get extra 'minimal' states that should not exist.",
        "Saying NDFA is 'more powerful' than DFA — they accept exactly the same family.",
        "Confusing Moore output length (|w|+1) with Mealy output length (|w|).",
        "Calling a grammar ambiguous when only the language is inherently ambiguous — ambiguity is a property of the grammar, not the language.",
        "Mixing left-linear and right-linear rules in one regular grammar — that breaks regularity.",
        "Forgetting S → ε as the only allowed ε-production in CNF.",
      ],
    },
  ],
};
