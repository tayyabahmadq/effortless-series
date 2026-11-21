/**
 * Academics - RGPV AI/ML 4th-semester subject: AL-401
 * Introduction to Discrete Structure & Linear Algebra.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const al401: AcademicSubject = {
  id: "al-401",
  code: "AL-401",
  title: "Introduction to Discrete Structure & Linear Algebra",
  semester: "IV Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-401: sets and relations, counting and recurrences, graphs and trees, matrices and linear systems, vector spaces and eigenvalues - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units trace one continuous line from discrete objects to the linear algebra behind machine learning. Unit I builds the language of sets, relations, orders and lattices; Unit II turns that language into counting, the binomial theorem, pigeonhole, inclusion-exclusion and recurrence relations solved by characteristic equations and generating functions. Unit III crosses into graph theory - handshaking, Euler and Hamiltonian circuits, trees, Prim and Kruskal, colouring. Unit IV makes everything numeric with matrices, rank, row reduction, determinants, Cramer and LU. Unit V closes with vector spaces, Gram-Schmidt, eigenvalues, diagonalization, Cayley-Hamilton and the applications - Markov chains, PageRank and PCA - that an AI curriculum is built on.",
  accentColor: "#a78bfa",
  emoji: "DX",
  unitCount: 5,
  totalSections: 32,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Sets, Relations, Functions and Lattices",
      summary:
        "The vocabulary every later unit borrows: set operations and the Cartesian product, relations with their four defining properties, equivalence relations that carve sets into partitions, partial orders drawn as Hasse diagrams, lattices with meet and join, and functions classified by injectivity and surjectivity with the growth rates that rank algorithms.",
      chapter: {
        number: "01",
        title: "Sets, Relations, Functions and Lattices",
        intro:
          "Unit I builds the substrate of the whole subject. It starts with sets, their operations and the Cartesian product that turns sets into coordinates, moves to relations and the four properties that sort them, then to equivalence relations whose classes form partitions, to partial orders that Hasse diagrams draw in two dimensions, to lattices where every pair of elements has a meet and a join, and finally to functions - injective, surjective, bijective - together with the growth-of-functions hierarchy that ranks algorithms.",
        inOneBreath:
          "A set is an unordered collection of distinct elements; a set with n elements has 2^n subsets; union, intersection, difference and complement obey distributive and De Morgan laws; the Cartesian product A cross B has |A| x |B| ordered pairs; a relation is a subset of that product, tested for reflexive, symmetric, antisymmetric and transitive; an equivalence relation (reflexive + symmetric + transitive) partitions its set into disjoint classes, e.g. congruence mod 3 splits the integers into [0], [1], [2]; a partial order (reflexive + antisymmetric + transitive) such as divisibility is drawn as a Hasse diagram covering only adjacent comparabilities; a lattice guarantees every pair a least upper bound and greatest lower bound; and functions are injective when distinct inputs give distinct outputs, surjective when every output is hit, bijective when both - the only case with an inverse - with growth ordered log n < n < n log n < n^2 < 2^n.",
        sections: [
          {
            number: "1.1",
            title: "Sets, set operations and the Cartesian product",
            body: [
              "A set is an unordered collection of distinct objects called elements; we write A = {1, 2, 3} and membership with 'in'. Order and repetition never matter, so {3, 2, 1} and {1, 1, 2, 3} name the same set as A. A is a subset of B when every element of A lies in B, and a proper subset additionally requires A not equal to B. The power set of A is the set of all subsets: for A = {a, b, c} it has 2^3 = 8 members, because each element independently chooses to be in or out. The empty set is a subset of every set, and the cardinality |A| counts elements.",
              "Four operations build new sets from old. Union collects elements in either set, intersection keeps only elements in both, difference A - B holds elements of A missing from B, and complement A' is everything in the universe U outside A. These obey an algebra as rigid as arithmetic: union and intersection are commutative, associative and idempotent, each distributes over the other, and De Morgan's laws swap one into the other under complement: (A union B)' = A' intersect B'. Worked identity: (A union B) intersect (A union B') = A union (B intersect B') = A union (empty set) = A, by distributing A over the pair and using B intersect B' = (empty set).",
              "The Cartesian product A cross B is the set of all ordered pairs (a, b) with a in A and b in B. Order matters here - (1, x) and (x, 1) are different objects - and the size multiplies: |A cross B| = |A| x |B|. For A = {1, 2} and B = {x, y}, the product is {(1,x), (1,y), (2,x), (2,y)}, four pairs. Products extend to A cross B cross C and beyond; R^2 and R^3, the planes and spaces of geometry, are Cartesian powers of the real line. The product is exactly where the next section's relations live: a relation from A to B is nothing more than a chosen subset of A cross B.",
              "Sets are the running substrate of computer science and machine learning. A dataset is a set of records; a feature's domain is a set of values; the vocabulary of a language model is a set of tokens, and top-k sampling literally computes set unions and intersections of candidate sets. Query engines rewrite conditions with the same distributive and De Morgan laws proved above to find cheaper plans. Every relation, function, matrix row and vector space in the remaining units is defined on some set, so precision here - especially the 2^n power-set count and the |A x B| = |A| x |B| product rule - is repaid in every later chapter.",
            ],
            bullets: [
              "Set: unordered, no duplicates; {1, 2, 2} = {1, 2}; the empty set is a subset of every set.",
              "Power set: all subsets of A, exactly 2^|A| of them; {a, b, c} gives 8 subsets.",
              "Four operations: union, intersection, difference A - B, and complement A' relative to a universe U.",
              "De Morgan's laws: (A union B)' = A' intersect B' and (A intersect B)' = A' union B'.",
              "Distributive law: A union (B intersect C) = (A union B) intersect (A union C), and the dual.",
              "Worked identity: (A union B) intersect (A union B') = A, since B intersect B' = empty set.",
              "Cartesian product: A cross B = all ordered pairs; |A cross B| = |A| x |B|; {1,2} x {x,y} has 4 pairs.",
            ],
            table: {
              caption: "Set operations on A = {1, 2, 3, 4} and B = {3, 4, 5} with U = {1, 2, 3, 4, 5, 6}.",
              headers: ["Operation", "Definition", "Result", "Size"],
              rows: [
                ["A union B", "in A or in B", "{1, 2, 3, 4, 5}", "5"],
                ["A intersect B", "in both", "{3, 4}", "2"],
                ["A - B", "in A, not in B", "{1, 2}", "2"],
                ["A' (complement)", "in U, not in A", "{5, 6}", "2"],
                ["A cross B", "all ordered pairs", "20 pairs (4 x 5)", "20"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Proving a set identity by the element method",
              caption:
                "Each arrow cites one law - exactly the discipline an exam proof needs.",
              steps: [
                { label: "Take arbitrary x in (A union B) intersect (A union B')" },
                { label: "x in A union B and x in A union B'", note: "definition of intersection" },
                { label: "x in A, or x in both B and B'", note: "case split" },
                { label: "B intersect B' is empty", note: "complement law" },
                { label: "x in A; reverse the steps", note: "equality of sets established" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the law at every step",
              body: "RGPV examiners mark the cited law, not just the final line. When simplifying an identity, write the name beside each rewrite - distributive law, complement law, identity law. A one-line answer with no named steps typically earns half the marks even when the result is correct.",
            },
            keyTerms: [
              { term: "Set", definition: "An unordered collection of distinct elements, e.g. A = {1, 2, 3}." },
              { term: "Power set", definition: "The set of all subsets of A; it has exactly 2^|A| elements." },
              { term: "Cartesian product", definition: "A cross B, the set of ordered pairs (a, b) with a in A, b in B; size |A| x |B|." },
              { term: "Universe U", definition: "The ambient set from which complements are taken." },
              { term: "Cardinality |A|", definition: "The number of elements of A." },
            ],
            examQuestions: [
              {
                q: "State and prove the distributive law A union (B intersect C) = (A union B) intersect (A union C) and De Morgan's laws. Then simplify (A union B) intersect (A union B') and compute the size of the Cartesian product of A = {1, 2, 3} and B = {a, b}.",
                marks: 7,
                outline: [
                  "Define union, intersection and complement with notation.",
                  "Prove the distributive law by the element method: take x in the left side, derive x in the right side, and reverse.",
                  "Prove (A union B)' = A' intersect B' by element argument or Venn diagram shading.",
                  "Give the dual De Morgan law (A intersect B)' = A' union B'.",
                  "Simplify (A union B) intersect (A union B') = A union (B intersect B') by distribution.",
                  "Use B intersect B' = empty set and A union empty = A to conclude the answer is A.",
                  "Compute |A cross B| = 3 x 2 = 6 and list the six ordered pairs.",
                ],
              },
              {
                q: "If A = {1, 2, 3, 4} and B = {3, 4, 5}, find A union B, A intersect B and A - B.",
                marks: 2,
              },
              {
                q: "How many subsets does a set with 5 elements have? How many of them contain the element 1?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Relations and their properties",
            body: [
              "A relation R from A to B is any subset of the Cartesian product A cross B; when A = B we simply say a relation on A. We write a R b for (a, b) in R. On a set with n elements there are n^2 ordered pairs, and since a relation chooses to include or exclude each pair, there are 2^(n^2) relations in total - for A = {1, 2, 3} that is 2^9 = 512 possible relations. A relation may also be given by a rule, such as 'a divides b' on the positive integers, or by a 0-1 matrix whose entry m[i][j] is 1 exactly when a_i R a_j.",
              "Four properties sort all relations. R is reflexive when (a, a) is in R for every a in A; symmetric when (a, b) in R forces (b, a) in R; antisymmetric when (a, b) and (b, a) both in R force a = b; transitive when (a, b) and (b, c) in R force (a, c) in R. Worked check: R = {(1,1), (1,2), (2,2), (2,3), (3,3)} on {1, 2, 3} is reflexive (all three diagonal pairs present), transitive (the only chain 1->2->3 lacks (1,3), so actually NOT transitive - adding (1,3) would fix it), antisymmetric (no reversed pair exists), and not symmetric ((1,2) is present but (2,1) is not). Every exam answer should test each property against the actual pairs, not by impression.",
              "Counting argument for the exam: to build a reflexive relation on n elements, the n diagonal pairs are forced, leaving n^2 - n free choices, so there are 2^(n^2 - n) reflexive relations. For n = 3 that is 2^6 = 64 of the 512 total. Symmetric relations need only choose one side of each off-diagonal pair plus the diagonal: 2^(n(n+1)/2) of them, again 64 for n = 3. These closed counts are standard 2-3 mark questions and follow directly from the power-set rule of section 1.1.",
              "Relation properties decide how software behaves. The 'is reachable from' relation on web pages is transitive - that is why PageRank propagates through chains of links; 'is equal to' is symmetric and transitive; 'is a prerequisite of' is antisymmetric, preventing circular course dependencies. Matrix representation makes properties checkable by code: reflexivity scans the diagonal, symmetry compares the matrix with its transpose, and transitivity can be tested by Boolean matrix multiplication, the same operation that computes path existence in Unit III.",
            ],
            bullets: [
              "Relation: a subset of A cross B; writing a R b means (a, b) belongs to the subset.",
              "Total count: a relation on n elements is one of 2^(n^2) possibilities.",
              "Reflexive: every (a, a) present; count of reflexive relations is 2^(n^2 - n).",
              "Symmetric: (a, b) implies (b, a); count is 2^(n(n+1)/2) - choose the diagonal plus one side of each pair.",
              "Antisymmetric: (a, b) and (b, a) together force a = b; no reversed duplicates allowed.",
              "Transitive: chains close - a R b and b R c force a R c; the usual exam slip is missing one chain.",
              "Worked: R = {(1,1), (1,2), (2,2), (2,3), (3,3)} is reflexive, antisymmetric, not symmetric, not transitive ((1,3) missing).",
            ],
            table: {
              caption: "Property checklist for R = {(1,1), (1,2), (2,2), (2,3), (3,3)} on {1, 2, 3}.",
              headers: ["Property", "Test", "Verdict", "Evidence"],
              rows: [
                ["Reflexive", "all (a, a) present", "yes", "(1,1), (2,2), (3,3) all in R"],
                ["Symmetric", "reversed pairs present", "no", "(1,2) in R but (2,1) not in R"],
                ["Antisymmetric", "no mirrored distinct pair", "yes", "no pair (a,b) and (b,a) with a != b"],
                ["Transitive", "chains close", "no", "1 R 2 and 2 R 3 but not 1 R 3"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Testing a relation: which property is in question?",
              caption:
                "Each branch names the exact evidence the examiner expects to see.",
              start: "Given relation R on set A",
              branches: [
                { label: "Check diagonal", outcome: "reflexive: every (a, a) in R; one missing diagonal pair fails it", good: true },
                { label: "Mirror every pair", outcome: "symmetric: (b, a) must follow (a, b); antisymmetric forbids mirrors for distinct a, b", good: true },
                { label: "Follow every chain", outcome: "transitive: close a R b, b R c with a R c; enumerate all two-step chains", good: true },
                { label: "Combine all four", outcome: "equivalence (refl + sym + trans) or partial order (refl + anti + trans) - Unit 1.3 and 1.4", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "One counterexample is enough to fail a property",
              body: "A property is destroyed by a single violating pair, but established only by checking every pair. In exams, write the verdict and the witness: 'not symmetric because (1,2) in R but (2,1) not in R'. A bare yes/no with no witness earns almost nothing.",
            },
            keyTerms: [
              { term: "Relation", definition: "A subset of A cross B; a binary relation on A is a subset of A cross A." },
              { term: "Reflexive", definition: "(a, a) in R for every a in A." },
              { term: "Antisymmetric", definition: "If (a, b) and (b, a) are both in R, then a = b." },
              { term: "Transitive", definition: "If (a, b) and (b, c) are in R, then (a, c) is in R." },
              { term: "Relation matrix", definition: "A 0-1 matrix with m[i][j] = 1 exactly when a_i R a_j; symmetry is comparison with the transpose." },
            ],
            examQuestions: [
              {
                q: "Define reflexive, symmetric, antisymmetric and transitive relations. Check all four properties for R = {(1,1), (1,2), (2,1), (2,2), (3,3)} on A = {1, 2, 3} and for the divides relation on {1, 2, 3, 4}. How many reflexive and how many symmetric relations exist on a 3-element set?",
                marks: 7,
                outline: [
                  "State all four definitions precisely.",
                  "For the first R: reflexive (diagonal complete), symmetric ((1,2)/(2,1) mirrored), not antisymmetric (1 != 2 yet both directions), transitive (verify all chains close).",
                  "For divides on {1, 2, 3, 4}: reflexive, antisymmetric, transitive, not symmetric (1 divides 2 but 2 does not divide 1).",
                  "Explain the counting of reflexive relations: diagonal forced, 2^(n^2 - n) free choices.",
                  "Compute for n = 3: 2^6 = 64 reflexive relations.",
                  "Count symmetric relations via diagonal plus half the off-diagonal: 2^(n(n+1)/2) = 2^6 = 64.",
                  "Conclude with the observation that both counts coincide for n = 3 but differ for larger n.",
                ],
              },
              {
                q: "Give the relation matrix of R = {(1,1), (1,2), (2,3)} on {1, 2, 3} and state which properties it lacks.",
                marks: 3,
              },
              {
                q: "How many relations are there on a set with 4 elements?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Equivalence relations and partitions",
            body: [
              "An equivalence relation is a relation that is reflexive, symmetric and transitive all at once - the exact algebraic fingerprint of 'sameness'. Equality itself is the prototype, but far richer examples exist: congruence mod n on the integers, 'has the same remainder' and 'has the same birthday month' on a class of students, 'is connected to' on the nodes of an undirected graph. Each captures a useful notion of being interchangeable for some purpose, which is why equivalence relations appear wherever programs quotient data into groups.",
              "The central theorem: an equivalence relation on A partitions A into equivalence classes, where the class of a is [a] = {x in A : x R a}. Different classes are disjoint, every element belongs to exactly one class, and the union of all classes is A. Proof sketch: classes are nonempty by reflexivity; if x is in [a] then symmetry gives a R x, and transitivity shows [x] = [a], so two classes that touch are identical. For R = congruence mod 3 on the integers, the classes are [0] = {..., -6, -3, 0, 3, 6, ...}, [1] and [2]: three disjoint classes covering everything, and [0] + [1] = [1], [2] + [2] = [1] - the arithmetic of Z_3.",
              "Conversely, every partition induces an equivalence relation: declare x R y exactly when x and y lie in the same block. Reflexivity, symmetry and transitivity are immediate because 'same block' behaves like equality. So equivalence relations and partitions are two views of one structure - a bijective correspondence. On a 4-element set, the partition {{1,2}, {3,4}} generates the relation containing the four diagonal pairs plus (1,2), (2,1), (3,4), (4,3): eight pairs total, and counting all such relations counts all partitions (the Bell numbers: 1, 2, 5, 15 for n = 1 to 4).",
              "The partition viewpoint powers real systems. Hash buckets partition keys, and 'same bucket' is an equivalence relation; connected components of a graph are the equivalence classes of reachability - Union-Find data structures maintain exactly these classes under merging; in machine learning, clustering outputs a partition of the dataset, and 'same cluster' is the induced equivalence relation. Exam questions love the mod-n example: be ready to list the classes of mod 4 on the integers, add and multiply two classes, and explain why well-definedness of the result depends on the choice of representative.",
            ],
            bullets: [
              "Equivalence relation: reflexive + symmetric + transitive - the formal shape of 'same as'.",
              "Equivalence class: [a] = {x : x R a}; any element of a class is a representative of it.",
              "Fundamental theorem: equivalence classes form a partition - disjoint, nonempty, covering.",
              "Converse: every partition defines an equivalence relation by 'in the same block'.",
              "Mod 3 example: classes [0], [1], [2]; [2] + [2] = [4] = [1] - arithmetic on classes is well-defined.",
              "Bell numbers count partitions of an n-set: 1, 2, 5, 15, 52 for n = 1, 2, 3, 4, 5.",
              "Applications: hash buckets, connected components via Union-Find, clusters in ML datasets.",
            ],
            table: {
              caption: "Congruence mod 4 on the integers: the four equivalence classes.",
              headers: ["Class", "Representatives", "Addition behaviour", "Example"],
              rows: [
                ["[0]", "0, 4, -4, 8, ...", "[0] + anything = anything", "[0] + [2] = [2]"],
                ["[1]", "1, 5, -3, 9, ...", "acts as identity shifted", "[1] + [3] = [4] = [0]"],
                ["[2]", "2, 6, -2, 10, ...", "doubles to a multiple of 4", "[2] + [2] = [0]"],
                ["[3]", "3, 7, -1, 11, ...", "[3] + [3] = [6] = [2]", "[3] * [3] = [9] = [1]"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "One relation, one partition - the same structure twice",
              caption:
                "Layer 0 is the relation view; the layers below refine it into classes.",
              layers: [
                { label: "Equivalence relation R on A", note: "reflexive + symmetric + transitive" },
                { label: "Equivalence classes [a]", note: "[a] = {x : x R a}; overlapping classes coincide" },
                { label: "Partition of A into disjoint blocks", note: "every element in exactly one class" },
                { label: "Quotient set A / R", note: "the set of classes; e.g. Z mod 3 = {[0], [1], [2]}" },
              ],
            },
            callout: {
              type: "tip",
              title: "Well-defined means representative-independent",
              body: "When computing on classes like [2] + [2], an examiner may ask why the answer [0] is legitimate even though 2, 6, -2 are all representatives. Answer: if x R x' and y R y', then x + y R x' + y' by transitivity of congruence - the result does not depend on which representatives you picked. One sentence, full marks.",
            },
            keyTerms: [
              { term: "Equivalence relation", definition: "A relation that is reflexive, symmetric and transitive." },
              { term: "Equivalence class", definition: "[a] = {x in A : x R a}; the block of all elements equivalent to a." },
              { term: "Partition", definition: "A collection of disjoint nonempty subsets whose union is A." },
              { term: "Quotient set", definition: "A / R, the set of all equivalence classes of R." },
              { term: "Congruence mod n", definition: "a R b when n divides a - b; the running example with classes [0] ... [n-1]." },
            ],
            examQuestions: [
              {
                q: "Define an equivalence relation and prove that the equivalence classes of any equivalence relation form a partition of the underlying set. Illustrate with congruence mod 3 on the integers, listing the classes and computing [2] + [2] and [2] * [2].",
                marks: 7,
                outline: [
                  "Define equivalence relation with its three properties.",
                  "Define equivalence class [a] and note it is nonempty since a R a.",
                  "Show two classes are equal or disjoint: if x in [a] intersect [b], transitivity forces [a] = [b].",
                  "Conclude the classes partition A - disjoint, nonempty, union is A.",
                  "List mod 3 classes: [0], [1], [2] with representative sets.",
                  "Compute [2] + [2] = [4] = [1] and [2] * [2] = [4] = [1].",
                  "Argue well-definedness: any representatives give the same class.",
                ],
              },
              {
                q: "List the equivalence classes of congruence mod 5 on the integers and give two representatives of each.",
                marks: 3,
              },
              {
                q: "How many equivalence relations are there on a set with 3 elements?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Partial orders, posets and Hasse diagrams",
            body: [
              "A partial order is a relation that is reflexive, antisymmetric and transitive - the formal shape of 'precedes or equals'. A set equipped with one is a poset. Running examples: less-than-or-equal on the reals; divisibility on the positive integers (1 divides everything, 2 divides 4, 4 does not divide 2); subset on the power set of any set, where smaller sets sit below supersets. The word partial is the warning that incomparability is allowed: in the divisibility poset on {2, 3, 5}, no one of the three divides another, so none is comparable - a linear (total) order like 'less than or equal' forbids exactly this.",
              "Hasse diagrams draw posets compactly. From the directed graph of the relation, delete every reflexive loop, delete every edge implied by transitivity, and arrange comparable elements bottom-to-top; what remains are the cover relations - pairs a < b with nothing strictly between them. For the divisibility poset on {1, 2, 3, 4, 6, 12}: 1 sits at the bottom with edges up to 2 and 3; 2 covers up to 4 and 6; 3 covers to 6; 4 and 6 cover up to 12. The transitive edges (1 to 4, 1 to 6, 1 to 12, 2 to 12, 3 to 12) are all invisible - yet the relation they encode is recoverable by following paths upward.",
              "Poset vocabulary is examined directly. A maximal element has nothing above it (12 in the example), a minimal element nothing below (1); a greatest element is above everything (12, because it is a multiple of all others), a least element below everything (1). A chain is a set of pairwise comparable elements such as 1 < 2 < 4 < 12; an antichain is a set with no comparable pair, such as {2, 3, 5}. Chains and antichains obey a beautiful counting theorem - a poset with n elements guarantees either a chain of length at least sqrt(n) or an antichain of that size - the seed of Dilworth's theorem used in scheduling.",
              "Posets run task schedulers and build systems: 'task A must finish before B' is a partial order, and any topological sort reads a Hasse-compatible order left to right; version-control ancestry and package dependencies are posets where maximal elements are the latest versions. Exam discipline: when asked to draw a Hasse diagram for divisibility on a set such as {1, 2, 3, 4, 6, 8, 12, 24}, first compute all cover pairs (a divides b, b/a has no divisor in the set strictly between), then place numbers so every cover edge climbs upward - mis-drawn transitive edges are the single most common lost mark.",
            ],
            bullets: [
              "Partial order: reflexive + antisymmetric + transitive; a set with one is a poset.",
              "Comparable vs incomparable: in the divisibility poset, 2 and 3 are incomparable - hence 'partial'.",
              "Cover relation: a < b with no c strictly between; Hasse diagrams draw only covers.",
              "Hasse construction: delete reflexive loops, delete transitive edges, draw upward.",
              "Maximal/minimal: nothing above/below; greatest/least: above/below everything - they differ.",
              "Chain: pairwise comparable subset, e.g. 1 < 2 < 4 < 12; antichain: no comparable pair, e.g. {2, 3, 5}.",
              "Worked Hasse: divisibility on {1, 2, 3, 4, 6, 12} - 1 below 2 and 3; 2 below 4 and 6; 3 below 6; 4 and 6 below 12.",
            ],
            table: {
              caption: "Poset vocabulary on the divisibility poset of {1, 2, 3, 4, 6, 12}.",
              headers: ["Term", "Definition", "In this poset", "Check"],
              rows: [
                ["Minimal", "nothing strictly below", "1", "1 divides everything"],
                ["Maximal", "nothing strictly above", "12", "nothing in the set is a multiple of 12"],
                ["Greatest", "above every element", "12", "every element divides 12"],
                ["Least", "below every element", "1", "1 divides every element"],
                ["Longest chain", "all comparable", "1 < 2 < 4 < 12 (or 1 < 2 < 6 < 12)", "length 4"],
                ["Antichain", "no comparable pair", "{3, 4}", "3 does not divide 4 and 4 does not divide 3"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building a Hasse diagram in four moves",
              caption:
                "Follow the moves in order; skipping the transitive-edge deletion is the classic error.",
              steps: [
                { label: "List all ordered pairs of the relation", note: "divisibility pairs, for instance" },
                { label: "Delete every loop (a, a)", note: "reflexivity is assumed, never drawn" },
                { label: "Delete edges implied by longer paths", note: "keep only covers" },
                { label: "Place lesser elements lower", note: "edges always climb; crossings optional" },
                { label: "Read maximal/minimal from the picture", note: "top row = maximal, bottom row = minimal" },
              ],
            },
            callout: {
              type: "exam",
              title: "Greatest is not maximal",
              body: "Every greatest element is maximal, but not conversely: the subset poset on {a, b} has two maximal elements {a} and {b} (nothing above either) yet no greatest element at all. State both definitions and give this two-element counterexample - it is a favourite 2-mark trap.",
            },
            keyTerms: [
              { term: "Poset", definition: "A set with a partial order: reflexive, antisymmetric, transitive." },
              { term: "Cover relation", definition: "a covers b upward when a < b and no element lies strictly between them." },
              { term: "Hasse diagram", definition: "A drawing of a poset showing only cover relations, upward, without loops." },
              { term: "Maximal element", definition: "An element with no other element strictly above it." },
              { term: "Antichain", definition: "A subset whose elements are pairwise incomparable." },
            ],
            examQuestions: [
              {
                q: "Define a partially ordered set. Draw the Hasse diagram of the divisibility relation on {1, 2, 3, 4, 6, 12}, identify all maximal, minimal, greatest and least elements, and exhibit a longest chain and an antichain of size 2.",
                marks: 7,
                outline: [
                  "Define partial order with the three properties and an example.",
                  "Compute cover pairs: 1<2, 1<3, 2<4, 2<6, 3<6, 4<12, 6<12.",
                  "Draw the diagram: 1 at the bottom; 2 and 3 above it; 4 and 6 next; 12 on top.",
                  "Maximal and greatest: 12; minimal and least: 1.",
                  "Longest chain: 1 < 2 < 4 < 12 (length 4).",
                  "Antichain of size 2: {3, 4} - neither divides the other.",
                  "Verify no transitive edges remain in the drawing.",
                ],
              },
              {
                q: "Draw the Hasse diagram of the subset poset on the power set of {a, b}.",
                marks: 3,
              },
              {
                q: "In a poset, distinguish maximal element from greatest element with one example.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Lattices: meet, join and special lattices",
            body: [
              "A lattice is a poset in which every pair of elements a, b has both a least upper bound (the join, written a join b or a + b) and a greatest lower bound (the meet, written a meet b or a * b). Not every poset qualifies: the poset shaped like an inverted V with two minimal elements u, v and one common upper element w has a join for u and v (namely w) but no meet - nothing lies below both u and v except nothing at all, and the empty lower bound is not an element. Spotting the missing meet or join is the standard exam disproof.",
              "The prototype lattices: the power set of any set under subset, where meet is intersection and join is union; and divisibility on the positive integers, where meet is gcd and join is lcm. Check the divisibility lattice on {1, 2, 3, 4, 6, 12}: meet(4, 6) = gcd(4, 6) = 2 and join(4, 6) = lcm(4, 6) = 12, both present in the set; but the same divisibility relation restricted to {2, 3, 4, 12} fails to be a lattice because meet(2, 3) = 1 is missing from the set. A lattice must be closed under meet and join - subsetting a lattice carelessly destroys it.",
              "Lattices earn their name from algebraic laws. Meet and join are commutative, associative, idempotent (a meet a = a) and satisfy the absorption laws a meet (a join b) = a and a join (a meet b) = a. A bounded lattice has a least element 0 and greatest element 1; the power set lattice of a 3-element set has bounds (empty set) and the full set, with the middle layer {a}, {b}, {c}. A lattice is distributive when a meet (b join c) = (a meet b) join (a meet c); it is complemented when every a has a complement a' with a meet a' = 0 and a join a' = 1. A bounded distributive complemented lattice is a Boolean algebra - the structure Unit II's set algebra and digital logic secretly use.",
              "The classic non-distributive lattice is the diamond M3 (five elements: 0, three incomparable middles, 1) and the pentagon N5; both show that distributivity is a genuine restriction. In computer science, lattices structure abstract interpretation (data-flow facts join and meet as analysis proceeds), concept lattices in knowledge representation, and access-control hierarchies where meet computes common privileges. Exam favourites: prove the absorption law from the order definition, decide whether a given Hasse diagram is a lattice by checking every pair, and verify the distributive law on the power set lattice with concrete sets.",
            ],
            bullets: [
              "Lattice: every pair (a, b) has a least upper bound (join) and greatest lower bound (meet).",
              "Power set lattice: meet = intersection, join = union, bounds = empty set and full set.",
              "Divisibility lattice: meet = gcd, join = lcm; on {1, 2, 3, 4, 6, 12}: meet(4, 6) = 2, join(4, 6) = 12.",
              "Subsets can break lattices: divisibility on {2, 3, 4, 12} is not a lattice - gcd(2, 3) = 1 is missing.",
              "Laws: commutative, associative, idempotent, absorption a meet (a join b) = a.",
              "Bounded lattice has 0 and 1; distributive + complemented + bounded = Boolean algebra.",
              "Counterexamples: the diamond M3 and pentagon N5 are non-distributive lattices.",
            ],
            table: {
              caption: "Meet and join in the two prototype lattices.",
              headers: ["Lattice", "Order", "Meet (glb)", "Join (lub)", "Bounds"],
              rows: [
                ["Power set of {a, b, c}", "subset", "intersection", "union", "empty set, full set"],
                ["Divisibility on {1, 2, 3, 4, 6, 12}", "divides", "gcd", "lcm", "1, 12"],
                ["Example pair (4, 6)", "divides", "gcd(4,6) = 2", "lcm(4,6) = 12", "present"],
                ["Failed subset {2, 3, 4, 12}", "divides", "gcd(2,3) = 1 missing", "lcm(2,3) = 6 missing", "not a lattice"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The power set lattice of {a, b, c}",
              caption:
                "Each tier is a rank; meet descends, join ascends, bounds sit at the tips.",
              tiers: [
                { label: "Full set {a, b, c}", note: "greatest element 1" },
                { label: "{a, b}, {a, c}, {b, c}", note: "size-2 subsets" },
                { label: "{a}, {b}, {c}", note: "size-1 subsets" },
                { label: "Empty set", note: "least element 0" },
              ],
            },
            callout: {
              type: "warning",
              title: "Check every pair before calling it a lattice",
              body: "A Hasse diagram looks lattice-like whenever it is connected, but a lattice needs a meet AND a join for every pair. In the pentagon-shaped poset, the two incomparable middle elements have a join but no meet. In the exam, test the two or three incomparable pairs explicitly and name the missing glb or lub.",
            },
            keyTerms: [
              { term: "Lattice", definition: "A poset where every pair has both a least upper bound and a greatest lower bound." },
              { term: "Meet and join", definition: "glb written a meet b (or a * b) and lub written a join b (or a + b)." },
              { term: "Bounded lattice", definition: "A lattice with a least element 0 and greatest element 1." },
              { term: "Distributive lattice", definition: "One where meet distributes over join (and dually); M3 and N5 violate it." },
              { term: "Complement", definition: "a' with a meet a' = 0 and a join a' = 1; exists for every element in a Boolean algebra." },
            ],
            examQuestions: [
              {
                q: "Define a lattice. Show that the divisibility poset on {1, 2, 3, 4, 6, 12} is a lattice by computing meet and join for every incomparable pair, and explain why the divisibility poset on {2, 3, 4, 12} fails to be a lattice. State the absorption laws.",
                marks: 7,
                outline: [
                  "Define lattice: every pair has glb (meet) and lub (join).",
                  "Identify incomparable pairs: (2, 3), (2, 12)? No - 2 divides 12; pairs (2, 3), (4, 3), (4, 6).",
                  "Compute meet(2, 3) = 1, join(2, 3) = 6; meet(3, 4) = 1, join(3, 4) = 12; meet(4, 6) = 2, join(4, 6) = 12.",
                  "All results lie in the set, so the poset is a lattice.",
                  "For {2, 3, 4, 12}: meet(2, 3) = gcd(2, 3) = 1 is not in the set.",
                  "Conclude closure under meet fails, so it is not a lattice.",
                  "State absorption: a meet (a join b) = a and a join (a meet b) = a.",
                ],
              },
              {
                q: "Prove the idempotent law a join a = a from the definition of least upper bound.",
                marks: 3,
              },
              {
                q: "State the bounds and the complement of {a} in the power set lattice of {a, b, c}.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.6",
            title: "Functions: injective, surjective, bijective and growth",
            body: [
              "A function f from A to B assigns exactly one element f(a) of B to each a in A - totality (defined on all of A) and uniqueness (never two values) are the two requirements that separate functions from general relations. Classification uses three adjectives. f is injective (one-to-one) when distinct inputs give distinct outputs: f(a1) = f(a2) forces a1 = a2. f is surjective (onto) when every element of B is hit by some input. f is bijective when both hold, and exactly then the inverse function f inverse exists, with f inverse(f(a)) = a and f(f inverse(b)) = b.",
              "Counting constraints decide existence. For f from A to B with |A| = n and |B| = m: injectivity demands n <= m (pigeonhole forbids it otherwise), surjectivity demands n >= m, bijectivity demands n = m. Worked example on A = {1, 2, 3}, B = {a, b}: no injection exists (3 inputs, 2 outputs), but the map 1 -> a, 2 -> a, 3 -> b is surjective. The number of injections A -> B is P(m, n) = m!/(m-n)!, the number of surjections involves inclusion-exclusion (Unit II), and the number of bijections on an n-set is n! - the factorial that Unit II builds on.",
              "Composition chains functions: (g composed with f)(x) = g(f(x)), defined whenever the range of f sits inside the domain of g. Composition is associative but not commutative - for f(x) = x + 1 and g(x) = x^2, g(f(2)) = 9 while f(g(2)) = 5. Inverses compose away: if f is bijective then f inverse composed with f = identity, and (g composed f) inverse = f inverse composed g inverse - the reversal rule that also governs matrix inverses in Unit IV. Every bijection between a finite set and itself is a permutation, the object Unit II counts.",
              "Growth of functions ranks algorithms: f is O(g) when f(n) <= c * g(n) eventually. The hierarchy every student must recite: constant < log n < n < n log n < n^2 < n^3 < 2^n < n!. Concrete witnesses: log2(1000) is about 10, 2^20 is about one million, and 100^2 = 10000 while 2^100 dwarfs any polynomial - exponential beats any fixed power eventually, which is why brute force on 2^n state spaces dies long before polynomial-time algorithms do. Machine learning inherits this vocabulary: training cost per epoch is O(n * d) for n samples and d features, a product rule from Unit II made concrete.",
            ],
            bullets: [
              "Function: total and single-valued assignment from A to B; a special relation.",
              "Injective: f(a1) = f(a2) forces a1 = a2; needs |A| <= |B|.",
              "Surjective: every b in B is hit; needs |A| >= |B|; bijections need |A| = |B|.",
              "Inverse exists exactly for bijections; f inverse undoes f on both sides.",
              "Composition: (g o f)(x) = g(f(x)); associative, not commutative; (g o f) inverse = f inverse o g inverse.",
              "Bijection on a finite set to itself = permutation; there are n! of them.",
              "Growth hierarchy: 1 < log n < n < n log n < n^2 < n^3 < 2^n < n!; witnesses log2(1000) = 10, 2^20 = 10^6.",
            ],
            table: {
              caption: "Classification of functions on small sets.",
              headers: ["Function", "Injective?", "Surjective?", "Bijective?", "Why"],
              rows: [
                ["f: {1,2} -> {a,b}, 1->a, 2->b", "yes", "yes", "yes", "perfect pairing; inverse exists"],
                ["f: {1,2,3} -> {a,b}, 3->b", "no", "yes", "no", "3 inputs, 2 outputs: pigeonhole"],
                ["f: {1,2} -> {a,b,c}, both->a? No: 1->a, 2->b", "yes", "no", "no", "c is never hit"],
                ["f: Z -> Z, f(x) = 2x", "yes", "no", "no", "odd numbers unhit"],
                ["f: R -> R, f(x) = x^3", "yes", "yes", "yes", "strictly increasing, unbounded"],
                ["f: R -> R, f(x) = x^2", "no", "no", "no", "f(1) = f(-1); negatives unhit"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Does the inverse function exist?",
              caption:
                "Bijectivity is the single gate to invertibility - check both directions.",
              start: "Function f from A to B",
              branches: [
                { label: "|A| != |B|", outcome: "no bijection possible; inverse function does not exist", good: false },
                { label: "|A| = |B|, no duplicate outputs", outcome: "injective on finite equal-size sets, hence surjective: bijective; f inverse exists", good: true },
                { label: "duplicate outputs found", outcome: "not injective; f undoes ambiguously - no inverse", good: false },
                { label: "some target missed", outcome: "not surjective; f inverse undefined on missed targets", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "On finite sets, injective implies surjective",
              body: "When |A| = |B| = n and f is injective, the image has n distinct elements inside an n-element set, so it must be all of B. Quote this one-liner to shortcut half of every classification question, but only for finite sets - f(x) = 2x on the integers is injective yet far from surjective.",
            },
            keyTerms: [
              { term: "Injective", definition: "Distinct inputs give distinct outputs; f(a1) = f(a2) implies a1 = a2." },
              { term: "Surjective", definition: "Every element of the codomain is the image of some input." },
              { term: "Bijective", definition: "Both injective and surjective; exactly the invertible functions." },
              { term: "Composition", definition: "(g o f)(x) = g(f(x)); associative but not commutative." },
              { term: "Big-O", definition: "f is O(g) when f(n) <= c g(n) for large n; ranks growth rates of algorithms." },
            ],
            examQuestions: [
              {
                q: "Define injective, surjective and bijective functions. Classify f(x) = 2x + 1 from Z to Z and g(x) = x^2 from R to R, giving inverses where they exist. State the growth hierarchy of the functions 1, log n, n, n log n, n^2, 2^n with one concrete numeric witness for the extremes.",
                marks: 7,
                outline: [
                  "State the three definitions with notation.",
                  "f(x) = 2x + 1: injective (2a + 1 = 2b + 1 forces a = b); not surjective on Z (even values unhit); no inverse on Z.",
                  "f from Z to the odd integers is bijective with inverse (y - 1)/2 - note the codomain change.",
                  "g(x) = x^2: not injective (g(1) = g(-1)), not surjective (negatives unhit); restrict to nonnegative reals for inverse sqrt.",
                  "Growth hierarchy: 1 < log n < n < n log n < n^2 < 2^n.",
                  "Witnesses: log2(1000) is about 10; 2^20 is about 10^6; 2^100 dwarfs 100^k for any fixed k.",
                  "Conclude: exponentials beat polynomials eventually - the reason brute force fails.",
                ],
              },
              {
                q: "How many injective functions exist from a 3-element set to a 5-element set?",
                marks: 3,
              },
              {
                q: "Give f(x) = x + 1 and g(x) = x^2; compute (g o f)(2) and (f o g)(2).",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Combinatorics and Counting",
      summary:
        "The machinery of counting without listing: sum and product rules, permutations and combinations with the binomial theorem, pigeonhole arguments that force coincidences, inclusion-exclusion that counts unions exactly, and recurrence relations solved by characteristic equations and generating functions.",
      chapter: {
        number: "02",
        title: "Combinatorics and Counting",
        intro:
          "Unit II converts the set language of Unit I into a counting engine. The sum and product rules structure every counting problem; permutations and combinations and the binomial theorem give closed formulas; the pigeonhole principle extracts surprising certainties; inclusion-exclusion counts overlapping unions; and recurrence relations - solved through characteristic equations, repeated roots and generating functions - capture processes that reference their own past, from compound interest to the Tower of Hanoi.",
        inOneBreath:
          "Product rule multiplies independent stage counts; sum rule adds disjoint alternatives; permutations are ordered arrangements P(n, r) = n!/(n-r)!; combinations are selections C(n, r) = n!/(r!(n-r)!); the binomial theorem expands (a + b)^n with coefficients C(n, k) satisfying C(n, k) = C(n-1, k-1) + C(n-1, k) and sum C(n, k) = 2^n; pigeonhole puts N items in k boxes so some box holds at least ceil(N/k); inclusion-exclusion alternates signs: |A union B| = |A| + |B| - |A intersect B|; a homogeneous linear recurrence a_n = c1 a_{n-1} + c2 a_{n-2} is solved by the characteristic equation r^2 = c1 r + c2 - distinct roots give a_n = A r1^n + B r2^n, repeated roots add n r^n blocks; generating functions G(x) = sum a_k x^k turn recurrences into algebra - Fibonacci's G(x) = x/(1 - x - x^2).",
        sections: [
          {
            number: "2.1",
            title: "The sum rule and the product rule",
            body: [
              "Two rules generate nearly every counting answer. The product rule: if a procedure has k independent stages with n1, n2, ..., nk choices respectively, the total number of outcomes is n1 x n2 x ... x nk. The sum rule: if a choice can be made in one of several disjoint ways - alternative A in n1 ways, alternative B in n2 ways, and no outcome belongs to both - the total is n1 + n2. A PIN of 4 digits has 10^4 = 10000 possibilities by the product rule; choosing one student from either of two disjoint sections of 40 and 35 has 75 possibilities by the sum rule.",
              "Real problems interleave both rules through case analysis. Count 3-character strings made of letters or digits with no repetition allowed: either all letters (26 x 25 x 24 = 15600), all digits (10 x 9 x 8 = 720), or mixed cases - two letters one digit in any of 3 position patterns: 3 x 26 x 25 x 10 = 19500. Summing disjoint cases: 15600 + 720 + 19500 = 35820. The discipline that earns marks: split into mutually exclusive cases, count each case with the product rule, verify the cases really are disjoint (no string counted twice), then add.",
              "Watch for hidden dependencies that break naive multiplication. Counting 2-digit strings with distinct digits as 10 x 9 = 90 is correct; but counting pairs of students from a class of 30 as 30 x 30 = 900 counts (A, B) and (B, A) twice - division by 2 repairs it to 435, foreshadowing combinations in the next section. Similarly, 'at least one' questions collapse under the complement rule: the number of 4-digit PINs containing at least one 7 equals 10000 - 9^4 = 3439, because PINs with no 7 use only 9 digits per position.",
              "These rules scale to everything measurable in computing. Password policies count key spaces with products (a 12-character password over 94 printable characters has 94^12 keyspace); database query planners estimate result sizes as products of selectivities; branch coverage in testing sums the cases of a decision tree; and the search space of a chess position is a product over moves per ply - the reason alpha-beta pruning exists. In exams, write the rule name beside each multiplication or addition: 'product rule since stages are independent' and 'sum rule since cases are disjoint' are sentences that convert arithmetic into method marks.",
            ],
            bullets: [
              "Product rule: k independent stages multiply - n1 x n2 x ... x nk outcomes.",
              "Sum rule: disjoint alternatives add - n1 + n2 + ... outcomes, no overlap allowed.",
              "Case analysis: split into disjoint cases, count each by products, then sum.",
              "Worked: letters-or-digits 3-strings without repetition: 15600 + 720 + 19500 = 35820.",
              "Complement trick: 'at least one 7' in a 4-digit PIN = 10^4 - 9^4 = 3439.",
              "Order correction: unordered pairs from 30 students are 30 x 29 / 2 = 435, not 900.",
              "Key space: 12 characters over 94 symbols gives 94^12 possibilities - why long passwords beat complex ones.",
            ],
            table: {
              caption: "Choosing the right rule: four worked mini-cases.",
              headers: ["Problem", "Structure", "Rule", "Count"],
              rows: [
                ["4-digit PIN, repetitions allowed", "4 independent digits", "product", "10^4 = 10000"],
                ["One student from section A (40) or B (35)", "disjoint alternatives", "sum", "75"],
                ["3-letter strings, no repeated letter", "dependent stages", "product with shrinking factors", "26 x 25 x 24 = 15600"],
                ["Number with no digit 7 (4 digits)", "complement of 'has a 7'", "complement rule", "9^4 = 6561"],
                ["Pairs of students from 30", "unordered halves", "product then divide", "435"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which rule applies to this counting problem?",
              caption:
                "The diagnosis question decides the formula before any arithmetic.",
              start: "A counting question arrives",
              branches: [
                { label: "Sequential independent stages", outcome: "product rule: multiply the per-stage counts", good: true },
                { label: "Mutually exclusive alternatives", outcome: "sum rule: add the per-case counts", good: true },
                { label: "Cases overlap", outcome: "do not add raw counts - inclusion-exclusion (section 2.5) corrects the double counting", good: false },
                { label: "Order irrelevant", outcome: "product rule overcounts by the arrangement count - divide to get combinations (section 2.2)", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Disjoint is a hypothesis, not a formality",
              body: "The sum rule fails silently when cases overlap. Counting numbers from 1 to 100 divisible by 2 OR by 3 as 50 + 33 = 83 double-counts multiples of 6; the true answer is 83 - 16 = 67. Always ask 'can an outcome appear in two cases?' before adding - the overlap repair is precisely inclusion-exclusion.",
            },
            keyTerms: [
              { term: "Product rule", definition: "Independent stages multiply: n1 x n2 x ... x nk total outcomes." },
              { term: "Sum rule", definition: "Disjoint alternatives add: n1 + n2 + ... total outcomes." },
              { term: "Case analysis", definition: "Splitting a problem into mutually exclusive subproblems, each counted separately." },
              { term: "Complement rule", definition: "Count 'at least one' as total minus 'none'." },
              { term: "Key space", definition: "The product-rule count of all possible secrets; measures password strength." },
            ],
            examQuestions: [
              {
                q: "State the sum rule and the product rule. Count the number of 4-character strings over uppercase letters and digits that contain at least one digit, and the number of 4-digit PINs containing at least one 7. Explain where each rule is used.",
                marks: 7,
                outline: [
                  "State both rules with their hypotheses (independence, disjointness).",
                  "Total strings over 36 characters: 36^4 = 1679610 by the product rule.",
                  "Strings with no digit: 26^4 = 456976.",
                  "At least one digit: 36^4 - 26^4 = 1222634 by the complement rule.",
                  "PINs with at least one 7: 10^4 - 9^4 = 10000 - 6561 = 3439.",
                  "Note both use 'total minus none' built on the product rule.",
                  "Justify disjointness where the sum rule would be misused.",
                ],
              },
              {
                q: "How many 3-letter strings have no repeated letter? How many 2-digit numbers have distinct digits?",
                marks: 3,
              },
              {
                q: "A menu offers 4 starters and 6 mains; how many two-course meals? State the rule.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Permutations and combinations",
            body: [
              "Permutations count ordered arrangements. The number of r-length arrangements from n distinct objects is P(n, r) = n!/(n-r)! = n x (n-1) x ... x (n-r+1): the product rule with shrinking stages. Rearranging all n objects gives n! - six orders of {a, b, c}. Permutations with repetition allowed give n^r. Circular permutations divide by rotations: seating n people around a round table gives (n-1)! arrangements, since n linear arrangements correspond to each circle. If some objects are identical, divide by the internal orderings: the word LEVEL has letters L and E repeated twice each, giving 5!/(2! x 2!) = 30 distinct arrangements.",
              "Combinations count selections where order does not matter. Choosing r objects from n is C(n, r) = n!/(r! (n-r)!), read 'n choose r'; each unordered selection corresponds to r! ordered arrangements, so P(n, r) = r! x C(n, r). Worked values: C(5, 2) = 10 committee pairs from 5 people; C(52, 5) = 2598960 poker hands; C(n, 0) = C(n, n) = 1. Selections with repetition allowed (multisets) use the stars-and-bars formula C(n + r - 1, r): choosing 4 scoops from 3 flavours gives C(6, 4) = 15.",
              "Mixed problems combine both, and the exam version is a story. From 8 men and 6 women, form a committee of 5 with exactly 2 women: choose the women C(6, 2) = 15, the men C(8, 3) = 56, multiply for 840 committees - product rule across independent slots. Distribute 10 distinct books into 3 distinct shelves with order on each shelf: a permutation-flavoured product, 10 x 9 x ... compressed by the shelf assignment trick. The skill is decomposition: identify slots, decide order-matters or not per slot, apply the right formula per slot, then multiply or add per the rules of section 2.1.",
              "Combinations are the language of subsets - there are C(n, r) r-element subsets - and therefore the language of machine learning: choosing k features from d is C(d, k); the number of possible decision-tree splits at a node with n samples is roughly C(n, 2); bootstrap resampling and cross-validation folds both lean on combination counts. Two identities to memorise for quick marks: C(n, r) = C(n, n-r) (choosing equals rejecting) and C(n, r) = C(n-1, r-1) + C(n-1, r) (Pascal's rule), the second of which builds the entire Pascal triangle one row at a time.",
            ],
            bullets: [
              "Permutations (order matters): P(n, r) = n!/(n-r)!; full rearrangements: n!.",
              "Circular permutations: (n-1)! around a round table; rotations identified.",
              "Identical objects: n!/(n1! n2! ... nk!) - the multinomial count; LEVEL gives 30.",
              "Combinations (order ignored): C(n, r) = n!/(r!(n-r)!); C(5, 2) = 10, C(52, 5) = 2598960.",
              "Repetition allowed (multisets): C(n + r - 1, r); 4 scoops from 3 flavours: C(6, 4) = 15.",
              "Committee pattern: C(6, 2) x C(8, 3) = 15 x 56 = 840 - multiply independent slot choices.",
              "Identities: C(n, r) = C(n, n-r) and Pascal's rule C(n, r) = C(n-1, r-1) + C(n-1, r).",
            ],
            table: {
              caption: "The counting formulas at a glance, with worked values.",
              headers: ["Situation", "Order matters?", "Repetition?", "Formula", "Worked value"],
              rows: [
                ["Arrange r of n", "yes", "no", "P(n, r) = n!/(n-r)!", "P(5, 2) = 20"],
                ["Arrange r of n", "yes", "yes", "n^r", "5^2 = 25"],
                ["Select r of n", "no", "no", "C(n, r)", "C(5, 2) = 10"],
                ["Select r of n", "no", "yes", "C(n + r - 1, r)", "C(6, 4) = 15"],
                ["Circle seating of n", "yes (rotations equal)", "no", "(n-1)!", "4! = 24 for 5 people"],
                ["Arrangements with duplicates", "yes", "duplicates only", "n!/(n1! n2! ...)", "LEVEL: 30"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Permutation versus combination - one question decides",
              caption:
                "Does rearranging the chosen items produce a different outcome?",
              left: {
                heading: "Permutation - order matters",
                items: [
                  "Podium of gold, silver, bronze from 8 runners: P(8, 3) = 336",
                  "Password characters: order defines the string",
                  "P(n, r) = n!/(n-r)!",
                  "Divides by fewer duplicates - larger counts",
                  "Committee with designated posts: multiply by r!",
                ],
              },
              right: {
                heading: "Combination - order irrelevant",
                items: [
                  "Team of 3 from 8 runners: C(8, 3) = 56",
                  "Hand of cards: order of the deal means nothing",
                  "C(n, r) = n!/(r!(n-r)!)",
                  "Divides by r! - smaller counts",
                  "Poker hands C(52, 5) = 2598960",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The posts test",
              body: "If the problem names distinguishable posts - president, treasurer - you are counting permutations of people into slots; if it names only membership, combinations. A committee with a president from n people: first pick the group C(n, r), then the president r ways - the same count as P(n, r). Saying this equivalence aloud in the answer earns the method mark.",
            },
            keyTerms: [
              { term: "Permutation", definition: "An ordered arrangement of r objects from n; P(n, r) = n!/(n-r)!." },
              { term: "Combination", definition: "An unordered selection of r objects from n; C(n, r) = n!/(r!(n-r)!)." },
              { term: "Pascal's rule", definition: "C(n, r) = C(n-1, r-1) + C(n-1, r); builds Pascal's triangle." },
              { term: "Multiset selection", definition: "Choosing r from n with repetition: C(n + r - 1, r) by stars and bars." },
              { term: "Circular permutation", definition: "Arrangement around a cycle; n rotations count as one, giving (n-1)!." },
            ],
            examQuestions: [
              {
                q: "State the formulas for permutations and combinations and prove the relation P(n, r) = r! C(n, r). From 8 men and 6 women, in how many ways can a committee of 5 with exactly 2 women be formed? In how many ways can the letters of LEVEL be arranged?",
                marks: 7,
                outline: [
                  "Define permutation P(n, r) and combination C(n, r).",
                  "Prove the bridge: each r-selection can be internally ordered r! ways, so P(n, r) = r! C(n, r).",
                  "Committee: choose women C(6, 2) = 15 by combination.",
                  "Choose men C(8, 3) = 56.",
                  "Multiply (product rule, independent slots): 15 x 56 = 840.",
                  "LEVEL has letters L, E twice and V once: 5!/(2! x 2!) = 120/4 = 30.",
                  "Verify the division argument: identical letters make internal swaps invisible.",
                ],
              },
              {
                q: "How many poker hands (5 cards) contain exactly 3 aces? (A deck has 4 aces.)",
                marks: 3,
              },
              {
                q: "Compute C(10, 7) using the identity C(n, r) = C(n, n-r).",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "The binomial theorem and Pascal's triangle",
            body: [
              "The binomial theorem expands powers of a sum: (a + b)^n = sum over k of C(n, k) a^(n-k) b^k for k = 0 to n. The coefficient of a^(n-k) b^k counts the ways to pick k of the n factors to contribute b - a combination count hiding inside algebra. Worked expansion: (x + 2)^4 = C(4,0) x^4 + C(4,1) x^3 * 2 + C(4,2) x^2 * 4 + C(4,3) x * 8 + C(4,4) * 16 = x^4 + 8x^3 + 24x^2 + 32x + 16. A specific term question - 'find the term in x^3 of (x + 2)^5' - needs only k: since 5 - k = 3, k = 2, giving C(5, 2) x^3 * 2^2 = 40 x^3.",
              "The coefficients form Pascal's triangle: row n holds C(n, 0) through C(n, n), and each interior entry is the sum of the two above it - Pascal's rule C(n, r) = C(n-1, r-1) + C(n-1, r). The combinatorial proof is a classic two-case argument: to choose r of n people, either person 1 is chosen (C(n-1, r-1) ways) or not (C(n-1, r) ways), and the cases are disjoint - sum rule. Row sums give the identity sum over k of C(n, k) = 2^n, proved by substituting a = b = 1 into the theorem: (1 + 1)^n counts all subsets.",
              "Further standard identities flow from the same trick. Alternating sum C(n, 0) - C(n, 1) + C(n, 2) - ... = 0 for n >= 1 (substitute a = 1, b = -1). The hockey-stick identity sum over j of C(j, r) = C(n+1, r+1) follows from repeated Pascal's rule and is used in summation problems. Symmetry C(n, r) = C(n, n-r) reads the triangle right-to-left. These four identities - row sum, alternating sum, hockey stick, symmetry - answer nearly every 'state and prove a binomial identity' question in the paper.",
              "Beyond two terms, the multinomial theorem expands (a + b + c)^n with coefficients n!/(i! j! k!) for i + j + k = n - the count of arrangements with repeated letters from section 2.2. In machine learning, binomial coefficients count hypothesis subsets and ensembles, and (1 + p)^n underlies the binomial probability distribution used everywhere from A/B testing to dropout regularisation. Exam discipline: write the general term formula C(n, k) a^(n-k) b^k first, solve for k from the requested power, then substitute - jumping straight to the full expansion wastes time on 7-mark questions that only ask for one term.",
            ],
            bullets: [
              "Binomial theorem: (a + b)^n = sum of C(n, k) a^(n-k) b^k, k = 0..n.",
              "Coefficient meaning: C(n, k) counts which k of n factors contribute b.",
              "Worked: (x + 2)^4 = x^4 + 8x^3 + 24x^2 + 32x + 16.",
              "Pascal's rule: C(n, r) = C(n-1, r-1) + C(n-1, r) - choose-with-person-1 or without.",
              "Row sum identity: C(n, 0) + ... + C(n, n) = 2^n (set a = b = 1).",
              "Alternating sum: C(n, 0) - C(n, 1) + ... = 0 (set b = -1); hockey stick: sum C(j, r) = C(n+1, r+1).",
              "General term for term questions: T(k+1) = C(n, k) a^(n-k) b^k; x^3 term of (x+2)^5 is 40x^3.",
            ],
            table: {
              caption: "Pascal's triangle rows 0 through 5, built by Pascal's rule.",
              headers: ["Row n", "Coefficients", "Row sum", "Check"],
              rows: [
                ["0", "1", "1", "2^0 = 1"],
                ["1", "1  1", "2", "2^1 = 2"],
                ["2", "1  2  1", "4", "2^2 = 4"],
                ["3", "1  3  3  1", "8", "2^3 = 8"],
                ["4", "1  4  6  4  1", "16", "2^4 = 16"],
                ["5", "1  5  10  10  5  1", "32", "2^5 = 32"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Answering a specific-term binomial question",
              caption:
                "Solve for k first - the full expansion is rarely needed.",
              stages: [
                { label: "Write the general term", note: "T(k+1) = C(n, k) a^(n-k) b^k" },
                { label: "Match the requested power", note: "set a-exponent equal to the target" },
                { label: "Solve for k", note: "e.g. x^3 in (x+2)^5 gives k = 2" },
                { label: "Substitute and evaluate", note: "C(5,2) x^3 * 4 = 40x^3" },
                { label: "Sanity check", note: "0 <= k <= n and coefficient symmetric" },
              ],
            },
            callout: {
              type: "exam",
              title: "Prove identities by substitution, not expansion",
              body: "For 'prove sum C(n, k) = 2^n', expand (1 + 1)^n by the binomial theorem and equate - two lines. Substituting special values of a and b into the theorem is the standard proof pattern; expanding both sides laboriously earns sympathy but few marks.",
            },
            keyTerms: [
              { term: "Binomial theorem", definition: "The expansion (a + b)^n = sum C(n, k) a^(n-k) b^k." },
              { term: "Pascal's triangle", definition: "The triangular array of binomial coefficients; each entry sums the two above." },
              { term: "General term", definition: "T(k+1) = C(n, k) a^(n-k) b^k; the tool for specific-term questions." },
              { term: "Hockey-stick identity", definition: "Sum of C(j, r) for j = r..n equals C(n+1, r+1)." },
              { term: "Multinomial coefficient", definition: "n!/(i! j! k!) counts arrangements with repeated classes; expands three-term powers." },
            ],
            examQuestions: [
              {
                q: "State the binomial theorem. Expand (x + 2)^4 fully, find the coefficient of x^3 in (x + 2)^5, and prove the row-sum identity C(n, 0) + C(n, 1) + ... + C(n, n) = 2^n.",
                marks: 7,
                outline: [
                  "State the theorem with the summation formula.",
                  "Expand term by term using C(4, k): 1, 4, 6, 4, 1.",
                  "Collect: x^4 + 8x^3 + 24x^2 + 32x + 16.",
                  "General term of (x + 2)^5: C(5, k) x^(5-k) 2^k; set 5 - k = 3, so k = 2.",
                  "Compute C(5, 2) * 2^2 = 10 * 4 = 40, so the requested term is 40x^3.",
                  "Prove row sum: substitute a = b = 1 into the theorem, so 2^n = sum of coefficients.",
                  "Conclude with the combinatorial reading: 2^n subsets split by size C(n, k).",
                ],
              },
              {
                q: "Write the 6th row of Pascal's triangle and state the identity it verifies.",
                marks: 3,
              },
              {
                q: "Find the coefficient of a^2 b^3 in (a + b)^5.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "The pigeonhole principle and its classic applications",
            body: [
              "The pigeonhole principle is counting reduced to one sentence: if N items go into k boxes and N > k, some box holds at least two items. It guarantees existence without constructing anything - a logic of forced coincidences. The generalised form sharpens the guarantee: with N items in k boxes, some box holds at least ceil(N/k) items. Both directions are proved by contradiction: if every box held at most one (or at most floor(N/k)), the total would be at most k (or k * floor(N/k) < N), contradicting N.",
              "Classic applications are the exam's bread and butter. Among 13 people, two share a birth month (13 people, 12 months). Among any 367 people, two share an exact birthday (365 days plus leap consideration). Among 27 English words of length up to 26? The sharper classic: from any 5 points inside a unit square, two lie within distance sqrt(2)/2 - divide the square into four half-squares; two points fall in one half-square of diagonal sqrt(2)/2. And the number-theory favourite: among any n + 1 integers chosen from 1 to 2n, two are such that one divides the other - write each as (odd part) x 2^k; there are only n odd parts, so two numbers share one, and the one with the smaller power of 2 divides the other.",
              "Ramsey-flavoured variants strengthen the principle with pairs. Among any 6 people, three mutually know each other or three mutually do not: pick one person; of the other 5, at least 3 are acquaintances or at least 3 are strangers (ceil(5/2) = 3); among those 3, any mutual acquaintance completes a triangle of acquaintances, and if none do, those 3 are mutual strangers. This is the two-colour triangle result on K6 - the smallest graph forcing a monochromatic triangle, and the standard proof to reproduce in a 7-mark answer.",
              "Pigeonhole arguments power real systems precisely because they need no structure. Hash tables rely on the birthday-style guarantee that collisions must occur before the load factor reaches 1 - with 365 possible hash days, 23 users give a 50 percent collision chance; compression guarantees some inputs must collide because there are fewer compressed strings than originals (a counting proof that lossless compression cannot shrink every file); in ML, among any large batch of embeddings in a bounded space, some pair is necessarily close. Exam discipline: name the pigeons, name the holes, compute the ceiling - three explicit sentences, then the conclusion.",
            ],
            bullets: [
              "Basic form: N items in k boxes with N > k forces some box to hold at least 2.",
              "Generalised form: some box holds at least ceil(N/k) items; proved by contradiction.",
              "Months example: 13 people force a shared birth month; 367 people force a shared birthday.",
              "Geometry: 5 points in a unit square force two within sqrt(2)/2 (four half-squares).",
              "Divisibility: any n + 1 of {1, ..., 2n} contain a pair where one divides the other (odd parts as holes).",
              "Party theorem: among 6 people, 3 mutual acquaintances or 3 mutual strangers always exist.",
              "Hashing: collisions are forced once items exceed bucket count - the guarantee behind birthday attacks.",
            ],
            table: {
              caption: "Pigeonhole arguments: pigeons, holes and the forced conclusion.",
              headers: ["Scenario", "Pigeons", "Holes", "Guarantee"],
              rows: [
                ["13 people, birth months", "13 people", "12 months", "two share a month"],
                ["23 users, 365 hash buckets", "23 hashes", "365 buckets", "collision chance 50% by birthday bound"],
                ["5 points in unit square", "5 points", "4 half-squares", "two within sqrt(2)/2"],
                ["n + 1 integers from 1..2n", "n + 1 integers", "n odd parts", "one divides another"],
                ["6 people, knows / knows not", "6 people", "2 relations", "3 mutual acquaintances or 3 mutual strangers"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Writing a pigeonhole proof in four sentences",
              caption:
                "Name the boxes, name the balls, compute the ceiling, conclude.",
              steps: [
                { label: "Identify the pigeons", note: "the N objects: people, integers, points" },
                { label: "Identify the holes", note: "the k categories: months, odd parts, half-squares" },
                { label: "Apply the ceiling bound", note: "some hole holds ceil(N/k) pigeons" },
                { label: "Extract the forced structure", note: "e.g. shared odd part implies divisibility" },
                { label: "State the conclusion", note: "existence asserted, construction not required" },
              ],
            },
            callout: {
              type: "exam",
              title: "Existence, never construction",
              body: "Pigeonhole proves that something exists without saying which. If an examiner asks 'which two people share the month?', the correct reply is that the principle does not identify them - only guarantees a pair. Losing sight of this distinction leads to invented 'examples' that cost credibility marks.",
            },
            keyTerms: [
              { term: "Pigeonhole principle", definition: "More items than boxes force some box to hold at least two items." },
              { term: "Generalised pigeonhole", definition: "N items in k boxes force some box to hold at least ceil(N/k) items." },
              { term: "Ramsey-type result", definition: "A structure forced by sheer size, e.g. the monochromatic triangle in any 2-coloured K6." },
              { term: "Birthday bound", definition: "The collision probability curve explaining why sqrt of the space of hash values suffices." },
            ],
            examQuestions: [
              {
                q: "State the pigeonhole principle and its generalised form. Prove that among any n + 1 integers chosen from {1, 2, ..., 2n}, two exist such that one divides the other. Also prove that among 6 people there are 3 mutual acquaintances or 3 mutual strangers.",
                marks: 7,
                outline: [
                  "State both forms; note the proof by contradiction.",
                  "Divisibility setup: write each chosen integer as (odd part) x 2^k.",
                  "There are exactly n odd parts in 1..2n; n + 1 integers force a shared odd part by pigeonhole.",
                  "The two sharing an odd part differ only in powers of 2; the smaller divides the larger.",
                  "Party setup: fix person A; partition the other 5 into acquaintances and strangers.",
                  "By ceiling, one group has at least 3 people.",
                  "If 3 acquaintances: any pair knowing each other completes a triangle; otherwise those 3 are mutual strangers.",
                ],
              },
              {
                q: "Show that among 13 people, two share a birth month, and state the generalised bound used.",
                marks: 3,
              },
              {
                q: "How many cards must be drawn from a standard deck to guarantee two of the same suit?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "The inclusion-exclusion principle",
            body: [
              "When counting a union of overlapping sets, the sum rule double-counts the overlaps. Inclusion-exclusion repairs it with alternating corrections. For two sets: |A union B| = |A| + |B| - |A intersect B|, because elements in both were counted twice. For three sets, the corrections have two layers: |A union B union C| = |A| + |B| + |C| - |A B| - |B C| - |A C| + |A B C| - subtract each pairwise overlap, then add back the triple, since members of all three were subtracted once too often. In general the signs alternate over intersections of 1, 2, 3, ... sets.",
              "Worked exam example: how many integers from 1 to 500 are divisible by 2, 3 or 7? Singles: floor(500/2) + floor(500/3) + floor(500/7) = 250 + 166 + 71 = 487. Pairs, using lcm: by 6: floor(500/6) = 83; by 14: 35; by 21: 23 - subtract 141. Triple, lcm(2, 3, 7) = 42: floor(500/42) = 11 - add back. Union = 487 - 141 + 11 = 357, so 500 - 357 = 143 numbers are divisible by none. Two details earn marks: use lcm (not the product) for pair and triple terms, and use floor division throughout.",
              "The same machine counts structural objects. Euler's phi function: phi(n) counts integers up to n coprime to n, and for n = 12 with primes 2 and 3, phi(12) = 12 - 12/2 - 12/3 + 12/6 = 12 - 6 - 4 + 2 = 4, matching {1, 5, 7, 11}. Derangements D_n (permutations with no fixed point) come from inclusion-exclusion over the events 'i stays in place', giving D_n = n! (1 - 1/1! + 1/2! - ... + (-1)^n/n!); values D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44, and D_n/n! approaches 1/e. The number of surjections from an r-set onto an n-set is likewise n! S(r, n) built by alternating sums.",
              "Inclusion-exclusion is the counting engine of 'at least one' queries everywhere: documents matching any of several search terms (with overlap correction), records violating any of several constraints, and coverage analysis in software testing. A good exam habit: before touching numbers, write the signed expansion symbolically with labelled intersection terms; then substitute. Forgetting the final add-back term is the most common error - the triple intersection members were subtracted -1 too many times net, so the last sign must be plus.",
            ],
            bullets: [
              "Two sets: |A union B| = |A| + |B| - |A intersect B| - remove the double count.",
              "Three sets: add singles, subtract pairwise overlaps, add back the triple intersection.",
              "General principle: alternate signs over all intersections; last sign is plus when counting all layers.",
              "Worked: 1..500 divisible by 2, 3 or 7: 487 - 141 + 11 = 357; none: 143.",
              "Pair terms use lcm(a, b), not a * b; triple terms use lcm(a, b, c).",
              "phi(12) = 12 - 6 - 4 + 2 = 4; derangements D_n = n! sum (-1)^k / k!, D_4 = 9.",
              "Complement route: 'divisible by none' = total minus the union - usually the final exam twist.",
            ],
            table: {
              caption: "Layer-by-layer bookkeeping for 1..500 divisible by 2, 3 or 7.",
              headers: ["Layer", "Terms", "Signed total", "Running count"],
              rows: [
                ["Singles", "500/2 + 500/3 + 500/7 (floors)", "250 + 166 + 71 = 487", "487"],
                ["Pairs (lcm)", "by 6, 14, 21", "83 + 35 + 23 = 141, subtracted", "346"],
                ["Triple (lcm 42)", "500/42", "11, added back", "357"],
                ["Complement", "500 - 357", "divisible by none", "143"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The inclusion-exclusion loop of corrections",
              caption:
                "Each pass corrects the previous over- or under-count until signs settle.",
              steps: [
                { label: "Add singles", note: "each element counted once per containing set" },
                { label: "Subtract pairwise", note: "double-counted members repaired" },
                { label: "Add triple", note: "members of all three were over-subtracted" },
                { label: "Continue alternating", note: "4-set terms subtract, 5-set add, and so on" },
                { label: "Stop at full intersection", note: "n sets give 2^n - 1 terms" },
                { label: "Complement if needed", note: "'none of them' = total minus the union" },
              ],
            },
            callout: {
              type: "warning",
              title: "lcm, not product, in the overlap terms",
              body: "For 'divisible by 2 and 3', the overlap is divisible by 6, which happens to equal 2 x 3. But for 'divisible by 4 and 6', the overlap is divisible by lcm(4, 6) = 12, not 24 - counting by 24 misses 24, 36, 48. Always reduce pair and triple terms to the least common multiple before taking floors.",
            },
            keyTerms: [
              { term: "Inclusion-exclusion", definition: "The alternating-sign formula counting unions of overlapping sets exactly." },
              { term: "Derangement", definition: "A permutation with no fixed point; D_n = n! sum over k of (-1)^k / k!." },
              { term: "Euler phi", definition: "phi(n): count of integers up to n coprime to n, computed by inclusion-exclusion over prime divisors." },
              { term: "Surjection count", definition: "The number of onto functions from an r-set to an n-set, an alternating sum over subsets." },
            ],
            examQuestions: [
              {
                q: "State the inclusion-exclusion principle for three sets. Find how many integers from 1 to 500 are divisible by 2, 3 or 7, and how many by none. Then compute phi(12) by inclusion-exclusion over its prime divisors.",
                marks: 7,
                outline: [
                  "State the three-set alternating formula.",
                  "Singles with floors: 250 + 166 + 71 = 487.",
                  "Pair terms with lcms 6, 14, 21: 83 + 35 + 23 = 141, subtract.",
                  "Triple term with lcm 42: 11, add back; union = 357.",
                  "Complement: 500 - 357 = 143 divisible by none.",
                  "phi(12): primes 2, 3; 12 - 12/2 - 12/3 + 12/6 = 4.",
                  "Verify phi(12) = 4 by listing {1, 5, 7, 11}.",
                ],
              },
              {
                q: "How many integers from 1 to 100 are divisible by 2 or by 5? Show the overlap correction.",
                marks: 3,
              },
              {
                q: "Compute D_3, the number of derangements of 3 items, by listing or formula.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "Recurrence relations and the characteristic equation",
            body: [
              "A recurrence relation defines a_n from earlier terms plus initial conditions - a sequence with a rule and a starting point. Linear homogeneous recurrences with constant coefficients have the form a_n = c1 a_{n-1} + ... + ck a_{n-k}: each term is a fixed linear combination of the past, with no n-dependent forcing term and no products of a's. Modelling examples: Tower of Hanoi H_n = 2 H_{n-1} + 1 (nonhomogeneous) with H_1 = 1 giving 2^n - 1; Fibonacci F_n = F_{n-1} + F_{n-2} with F_1 = F_2 = 1; compound deposits a_n = 1.05 a_{n-1} + 1000.",
              "The solving machine: guess a_n = r^n, substitute into a_n = c1 a_{n-1} + c2 a_{n-2}, and divide by r^(n-2) to obtain the characteristic equation r^2 = c1 r + c2. Every root contributes an exponential block, and by linearity the general solution is a combination of blocks. Worked distinct-roots example: a_n = 5 a_{n-1} - 6 a_{n-2}, a_0 = 1, a_1 = 5. Characteristic equation r^2 - 5r + 6 = 0 factors as (r - 2)(r - 3), roots 2 and 3. General solution a_n = A 2^n + B 3^n. Initial conditions: A + B = 1 and 2A + 3B = 5, giving A = -2, B = 3, so a_n = 3 * 3^n - 2 * 2^n = 3^(n+1) - 2^(n+1). Verify a_2: from the recurrence 5*5 - 6*1 = 19; from the formula 27 - 8 = 19.",
              "Repeated roots need extra freedom. When the characteristic polynomial has a root r of multiplicity m, that root contributes blocks r^n, n r^n, ..., n^(m-1) r^n - without them there are too few coefficients to satisfy the initial conditions. Worked example: a_n = 4 a_{n-1} - 4 a_{n-2}, a_0 = 1, a_1 = 4. Characteristic equation (r - 2)^2 = 0, double root 2, so guess a_n = (A + Bn) 2^n. Then A = 1 and (1 + B) * 2 = 4 gives B = 1: a_n = (1 + n) 2^n. Check a_2: recurrence gives 4*4 - 4*1 = 12; formula gives 3 * 4 = 12. For nonhomogeneous recurrences, add one particular solution matching the forcing term f(n) - and if f(n) itself looks like a root (say a_n = 2 a_{n-1} + 2^n), multiply the guess by n to avoid duplication.",
              "The five-move procedure is invariant across exam questions: write the characteristic polynomial, find all roots with multiplicities, assemble the general solution with n-powers on repeated roots, solve the coefficient system from initial conditions, verify one extra term. Complex conjugate roots contribute oscillating cosine/sine components rather than growing blocks. In computer science, divide-and-conquer recurrences such as merge sort's T(n) = 2 T(n/2) + cn solve to n log n by the same structural idea - the Master Theorem is this chapter's theorem in algorithmic clothing.",
            ],
            bullets: [
              "Linear homogeneous recurrence: a_n = c1 a_{n-1} + ... + ck a_{n-k} with constant coefficients.",
              "Characteristic equation: substitute a_n = r^n; for order 2, r^2 = c1 r + c2.",
              "Distinct roots r1, r2: general solution A r1^n + B r2^n; coefficients from initial conditions.",
              "Worked: a_n = 5 a_{n-1} - 6 a_{n-2} gives a_n = 3^(n+1) - 2^(n+1); verify a_2 = 19 both ways.",
              "Repeated root of multiplicity m: blocks r^n, n r^n, ..., n^(m-1) r^n.",
              "Worked double root: a_n = 4 a_{n-1} - 4 a_{n-2} gives a_n = (1 + n) 2^n.",
              "Nonhomogeneous: add a particular solution; if the forcing term matches a root, multiply the guess by n.",
            ],
            table: {
              caption: "Solving a_n = 5 a_{n-1} - 6 a_{n-2}, a_0 = 1, a_1 = 5, step by step.",
              headers: ["Step", "Work", "Result"],
              rows: [
                ["Characteristic equation", "r^2 - 5r + 6 = 0", "(r - 2)(r - 3) = 0; roots 2, 3"],
                ["General solution", "distinct roots", "a_n = A 2^n + B 3^n"],
                ["Apply a_0 = 1", "A + B = 1", "first equation"],
                ["Apply a_1 = 5", "2A + 3B = 5", "second equation"],
                ["Solve", "A = -2, B = 3", "a_n = 3^(n+1) - 2^(n+1)"],
                ["Verify a_2", "5(5) - 6(1) = 19; formula: 27 - 8 = 19", "confirmed"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Characteristic equation: branch on the root structure",
              caption:
                "The root types decide the shape of the general solution.",
              start: "Characteristic polynomial of the recurrence",
              branches: [
                { label: "Distinct real roots r1, ..., rk", outcome: "a_n = A1 r1^n + ... + Ak rk^n; initial conditions fix the coefficients", good: true },
                { label: "Root repeated m times", outcome: "add blocks n^0 r^n up to n^(m-1) r^n for that root", good: true },
                { label: "Complex conjugate pair", outcome: "oscillating cosine/sine components with a modulus", good: false },
                { label: "Forcing term f(n) present", outcome: "nonhomogeneous: add a particular solution; multiply by n if f matches a root", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Repeated roots demand the n factor",
              body: "For (r - 2)^2 the classic error is a_n = A 2^n + B 2^n, which collapses into one block and leaves the initial-condition system inconsistent. A double root must give a_n = (A + Bn) 2^n - two genuinely different blocks for two initial conditions. State the multiplicity rule before solving, and the marks follow.",
            },
            keyTerms: [
              { term: "Recurrence relation", definition: "An equation defining a_n from earlier terms plus initial conditions." },
              { term: "Characteristic equation", definition: "The polynomial obtained by substituting a_n = r^n; its roots build the solution." },
              { term: "Multiplicity", definition: "The number of times a root repeats; forces n-power blocks in the solution." },
              { term: "Homogeneous", definition: "No extra n-dependent forcing term in the recurrence." },
              { term: "Particular solution", definition: "One solution of a nonhomogeneous recurrence added to the homogeneous general solution." },
            ],
            examQuestions: [
              {
                q: "Solve the recurrence a_n = 5 a_{n-1} - 6 a_{n-2} with a_0 = 1, a_1 = 5 using the characteristic equation method, verifying your answer for n = 2. Then solve a_n = 4 a_{n-1} - 4 a_{n-2} with a_0 = 1, a_1 = 4, explaining why the repeated root changes the form of the solution.",
                marks: 7,
                outline: [
                  "Write the characteristic equation r^2 - 5r + 6 = 0 and factor (r - 2)(r - 3).",
                  "General solution a_n = A 2^n + B 3^n for distinct roots.",
                  "Apply a_0: A + B = 1; apply a_1: 2A + 3B = 5; solve A = -2, B = 3.",
                  "Answer a_n = 3^(n+1) - 2^(n+1); verify a_2 = 27 - 8 = 19 = 5(5) - 6(1).",
                  "Second recurrence: r^2 - 4r + 4 = (r - 2)^2, double root 2.",
                  "Explain the multiplicity rule: blocks 2^n and n 2^n are needed for two initial conditions.",
                  "Apply a_0 = 1, a_1 = 4 to get a_n = (1 + n) 2^n and verify a_2 = 12.",
                ],
              },
              {
                q: "Write the characteristic equation of F_n = F_{n-1} + F_{n-2} and give its roots to 3 decimal places.",
                marks: 3,
              },
              {
                q: "Generate the first five terms of H_n = 2 H_{n-1} + 1, H_1 = 1, and state the closed form.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.7",
            title: "Generating functions: sequences as polynomials",
            body: [
              "A generating function packages a sequence into a single polynomial: G(x) = a_0 + a_1 x + a_2 x^2 + ... = sum a_k x^k. The variable x is a bookkeeping device - the coefficient of x^k stores a_k, so algebra on polynomials is simultaneously arithmetic on whole sequences. The geometric series is the cornerstone: sum x^k = 1/(1 - x) for the all-ones sequence, and more generally sum a^k x^k = 1/(1 - a x). Shifts multiply by x: x G(x) has coefficients a_(k-1), and scalings, additions and convolutions all have clean coefficient meanings.",
              "The payoff: recurrences become algebra. Solve Fibonacci F_n = F_{n-1} + F_{n-2}, F_0 = 0, F_1 = 1. Let F(x) = sum F_k x^k. Multiply the recurrence by x^n and sum for n >= 2: F(x) - x = x F(x) + x^2 F(x), since the shifted series contribute x F(x) and x^2 F(x). So F(x) (1 - x - x^2) = x and F(x) = x/(1 - x - x^2). Partial fractions with roots phi = (1 + root 5)/2 and psi = (1 - root 5)/2 give F_n = (phi^n - psi^n)/root 5 - Binet's formula, matching the characteristic-equation answer of section 2.6. Same theorem, second engine.",
              "Generating functions also count directly by coefficient extraction. The generating function for choosing scoops from 3 flavours with unlimited repetition is 1/(1-x)^3; the coefficient of x^4 equals the number of 4-scoop multisets, which is C(4 + 3 - 1, 4) = 15 - the stars-and-bars answer re-derived. Coin-change counting multiplies one factor (1 + x^c + x^(2c) + ...) per coin denomination and reads the coefficient of the target amount. The identity sum C(n, k) = 2^n reappears instantly: (1 + x)^n expanded has exactly those coefficients.",
              "The method generalises to systems: ordinary generating functions for counting problems, exponential generating functions (divide by k!) for labelled structures such as permutations. In computer science, generating functions analyse algorithm average cases and decode recursions in one symbolic step; in machine learning, moment-generating functions characterise distributions - the same coefficient-reading discipline. Exam workflow: name the sequence, write G(x), translate the recurrence into an equation for G, solve algebraically, and extract coefficients - stating the geometric series you use at each step.",
            ],
            bullets: [
              "Generating function: G(x) = sum a_k x^k; the coefficient of x^k stores a_k.",
              "Cornerstone series: 1/(1 - x) = 1 + x + x^2 + ...; 1/(1 - a x) = sum a^k x^k.",
              "Shifts: x G(x) shifts coefficients down by one; convolution of sequences is product of functions.",
              "Fibonacci: F(x) = x/(1 - x - x^2) leading to Binet's formula F_n = (phi^n - psi^n)/root 5.",
              "Coefficient extraction counts: x^4 coefficient of 1/(1-x)^3 is C(6, 4) = 15 multisets.",
              "Coin change: multiply one geometric factor per denomination; read the coefficient of the amount.",
              "Workflow: sequence -> G(x) -> algebraic equation -> solve -> extract coefficients.",
            ],
            table: {
              caption: "Small dictionary of sequences and their ordinary generating functions.",
              headers: ["Sequence", "Closed form G(x)", "Source series"],
              rows: [
                ["1, 1, 1, 1, ...", "1/(1 - x)", "geometric, ratio 1"],
                ["1, 2, 4, 8, ...", "1/(1 - 2x)", "geometric, ratio 2"],
                ["0, 1, 1, 2, 3, 5, ... (Fibonacci)", "x/(1 - x - x^2)", "from the recurrence"],
                ["1, 2, 3, 4, ...", "1/(1 - x)^2", "derivative of 1/(1-x)"],
                ["C(n, 0), ..., C(n, n)", "(1 + x)^n", "binomial theorem"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The generating-function solution pipeline",
              caption:
                "Recurrence in, closed form out - algebra does the solving.",
              stages: [
                { label: "Define G(x) = sum a_n x^n", note: "one series for the whole sequence" },
                { label: "Translate the recurrence", note: "multiply by x^n, sum over n; shifts become x and x^2 factors" },
                { label: "Solve for G(x)", note: "an algebraic equation in one unknown" },
                { label: "Expand by partial fractions or series", note: "use 1/(1 - a x) blocks" },
                { label: "Read off coefficients", note: "closed form a_n recovered" },
              ],
            },
            callout: {
              type: "tip",
              title: "Verification is free",
              body: "After extracting a closed form, expand G(x) to the x^2 term and compare with the sequence computed by hand from the recurrence - three numbers, ten seconds. If Binet's formula fails this check, the algebra slip is almost always a sign error in the partial fractions.",
            },
            keyTerms: [
              { term: "Generating function", definition: "G(x) = sum a_k x^k, a polynomial whose coefficients encode the sequence." },
              { term: "Geometric series", definition: "1/(1 - a x) = sum a^k x^k; the building block of every expansion." },
              { term: "Coefficient extraction", definition: "Reading a count as the coefficient of a target power of x." },
              { term: "Partial fractions", definition: "Splitting a rational function into 1/(1 - a x) pieces to expose coefficients." },
              { term: "Ordinary vs exponential", definition: "OGF for unlabelled counting; EGF divides by k! for labelled structures." },
            ],
            examQuestions: [
              {
                q: "Define the ordinary generating function of a sequence. Use generating functions to solve F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}, deriving Binet's formula. State the generating function of the constant sequence 1, 1, 1, ... and of the binomial coefficients of row n.",
                marks: 7,
                outline: [
                  "Define G(x) = sum a_n x^n and explain the coefficient encoding.",
                  "Write F(x) = sum F_k x^k and sum the recurrence for n >= 2.",
                  "Obtain F(x) - x = x F(x) + x^2 F(x), so F(x) = x/(1 - x - x^2).",
                  "Factor 1 - x - x^2 = (1 - phi x)(1 - psi x) with phi, psi the golden-ratio roots.",
                  "Partial fractions give F_n = (phi^n - psi^n)/root 5 - Binet's formula.",
                  "Verify F_2 = (phi^2 - psi^2)/root 5 = phi + psi = 1.",
                  "State the two requested series: 1/(1 - x) and (1 + x)^n.",
                ],
              },
              {
                q: "Use 1/(1-x)^3 to confirm that the number of 3-scoop multisets from 3 flavours is C(5, 3) = 10.",
                marks: 3,
              },
              {
                q: "Write the generating function of the sequence 2, 4, 8, 16, ...",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Graphs and Trees",
      summary:
        "Vertices and edges as a universal language for networks: degree sequences and the handshaking theorem, walks and connectivity, Euler and Hamiltonian circuits, isomorphism testing, trees and rooted trees, minimum spanning trees by Prim and Kruskal, and graph colouring applied to scheduling and register allocation.",
      chapter: {
        number: "03",
        title: "Graphs and Trees",
        intro:
          "Unit III turns relationships into pictures. Graph terminology and the handshaking theorem constrain every drawing; walks, paths and connectivity classify reachability; Euler circuits trace every edge once while Hamiltonian circuits visit every vertex once; isomorphism asks when two drawings are the same graph; trees give the minimally connected backbone, Prim and Kruskal find the cheapest one, and colouring partitions vertices so that conflicting tasks never share a resource.",
        inOneBreath:
          "Handshaking: sum of degrees = 2|E|, so the number of odd-degree vertices is even; K_n has n(n-1)/2 edges and degree sequence (n-1)^n; a walk repeats edges freely, a path never repeats vertices; a graph is connected when every pair has a path; Euler circuit iff connected and every degree even (Koenigsberg's seven bridges fail on 4 odd degrees); Euler path iff exactly 0 or 2 odd vertices; Hamiltonian has no clean criterion - Dirac's deg >= n/2 and Ore's deg(u) + deg(v) >= n are sufficient only; isomorphism preserves degree sequence, cycle lengths and connectivity, but a shared degree sequence is not proof; a tree is connected and acyclic with n - 1 edges and at least two leaves; Kruskal sorts edges and skips cycle-makers; Prim grows from a start vertex - both give an MST of weight the sum of the n - 1 cheapest safe edges; chromatic number chi(G): bipartite graphs need 2, planar graphs need at most 4, and exams colour timetables and registers.",
        sections: [
          {
            number: "3.1",
            title: "Graph terminology, degree sequences and the handshaking theorem",
            body: [
              "A graph G = (V, E) is a set of vertices and a set of edges, each an unordered pair of vertices for undirected graphs or an ordered pair for directed ones. Key counts: an undirected simple graph on n vertices has at most C(n, 2) = n(n-1)/2 edges, so K_5 (the complete graph on 5 vertices) has 10 edges. The degree deg(v) counts edges touching v; in a directed graph it splits into indegree and outdegree with sum equal over the whole graph, since every edge leaves one vertex and enters another. A walk v0 e1 v1 ... ek vk may repeat; a trail repeats no edge; a path repeats no vertex; a cycle is a closed path of length at least 3.",
              "The handshaking theorem is the most-cited fact in graph theory: the sum of all degrees equals twice the number of edges, sum deg(v) = 2|E|, because each edge contributes one to each of its two endpoints. Immediate corollaries: the number of odd-degree vertices is even (2|E| is even); no graph has exactly one vertex of odd degree; a graph with 7 vertices all of degree 3 cannot exist, since 7 x 3 = 21 is odd while 2|E| must be even. Average degree = 2|E|/n. These one-line checks answer many 2-mark questions and reject impossible degree sequences instantly.",
              "A degree sequence lists degrees in nonincreasing order, e.g. K_4 has (3, 3, 3, 3). Not every sequence is graphical: (3, 3, 3, 1) fails - the three degree-3 vertices would each need to connect to all others, forcing the fourth vertex's degree to be 3, contradicting 1. The Havel-Hakimi test decides graphically: take the largest degree d, remove it, subtract 1 from the next d degrees, repeat; a negative entry or an all-zero finish settles the question. Running it on (3, 3, 3, 1): remove a 3, subtract 1 from the next three: (2, 2, 0, 1), re-sorted as (2, 2, 1, 0); remove a 2, subtract 1 from the next two: (1, 0, 0); remove the 1: (0, 0) minus one more gives (0, -1), a negative entry - not graphical.",
              "Graphs model everything networked: road maps (vertices = junctions), the web (vertices = pages, directed edges = links), social networks (vertices = users), neural network layers and dependency graphs of packages. Degree sequences appear concretely as Erdos numbers, airport connection counts and power-grid load profiles. For the exam, memorise the standard edge counts: K_n has n(n-1)/2, C_n (cycle) has n, K_{m,n} (complete bipartite) has m x n, and the Petersen graph has 10 vertices of degree 3 - a counterexample machine for planarity and Hamiltonicity questions later in this unit.",
            ],
            bullets: [
              "Simple undirected graph: at most n(n-1)/2 edges; K_n achieves it and every vertex has degree n - 1.",
              "Handshaking theorem: sum of degrees = 2|E|; hence the count of odd-degree vertices is even.",
              "Average degree is 2|E|/n; a directed graph satisfies sum of indegrees = sum of outdegrees = |E|.",
              "Degree sequence test: (3, 3, 3, 1) is not graphical - the sum 10 is even but Havel-Hakimi fails.",
              "Havel-Hakimi: remove the largest degree d, subtract 1 from the next d entries, repeat; negatives or a bad finish reject.",
              "Walk vs trail vs path: edges may repeat, edges unique, vertices unique; cycles are closed paths.",
              "Standard graphs: C_n has n edges, K_{m,n} has m x n edges, Petersen graph: 10 vertices all of degree 3.",
            ],
            table: {
              caption: "Named graphs with their edge counts and degree sequences.",
              headers: ["Graph", "Vertices", "Edges", "Degree sequence"],
              rows: [
                ["K_5 (complete)", "5", "10", "(4, 4, 4, 4, 4)"],
                ["C_6 (cycle)", "6", "6", "(2, 2, 2, 2, 2, 2)"],
                ["K_{3,3} (bipartite)", "6", "9", "(3, 3, 3, 3, 3, 3)"],
                ["Petersen graph", "10", "15", "(3 x 10)"],
                ["Star K_{1,4}", "5", "4", "(4, 1, 1, 1, 1)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Testing a degree sequence with Havel-Hakimi",
              caption:
                "One subtraction sweep per step; a negative entry rejects the sequence.",
              steps: [
                { label: "Sort degrees descending", note: "(3, 3, 3, 1)" },
                { label: "Remove the first degree d", note: "d = 3; drop it" },
                { label: "Subtract 1 from the next d entries", note: "(2, 2, 0) then re-sort: (2, 2, 1, 0)" },
                { label: "Repeat", note: "remove 2: (1, 0, 0); remove 1: (0, 0)" },
                { label: "All zeros = graphical", note: "negatives or an early stop = impossible" },
              ],
            },
            callout: {
              type: "tip",
              title: "Parity checks before Havel-Hakimi",
              body: "Two free checks reject many sequences in five seconds: the sum of degrees must be even (2|E|), and an odd number of odd-degree entries is impossible. Only if both pass should you run Havel-Hakimi - and only on the sorted sequence, or the subtractions go wrong.",
            },
            keyTerms: [
              { term: "Degree", definition: "The number of edges incident to a vertex; split into indegree and outdegree in directed graphs." },
              { term: "Handshaking theorem", definition: "The sum of all degrees equals 2|E|, twice the edge count." },
              { term: "Degree sequence", definition: "The degrees of all vertices in nonincreasing order; a graph invariant." },
              { term: "Havel-Hakimi", definition: "The iterative reduction test deciding whether a degree sequence is graphical." },
              { term: "Complete graph K_n", definition: "Every pair of the n vertices joined; n(n-1)/2 edges, all degrees n - 1." },
            ],
            examQuestions: [
              {
                q: "State and prove the handshaking theorem. Show that no graph has exactly one vertex of odd degree, test whether the degree sequence (3, 3, 3, 1) is graphical, and compute the number of edges of K_6.",
                marks: 7,
                outline: [
                  "State: sum of degrees = 2|E|; prove by counting edge-endpoints, each edge adds 2.",
                  "Corollary: the number of odd-degree vertices is even, so exactly one odd vertex is impossible.",
                  "Sequence check: sum = 10 is even, so parity does not reject.",
                  "Havel-Hakimi: (3, 3, 3, 1) -> remove 3, subtract: (2, 2, 0, 1) -> sort (2, 2, 1, 0).",
                  "Remove 2, subtract: (1, 0, 0); remove 1, subtract: (0, -1) - negative entry rejects.",
                  "Conclude (3, 3, 3, 1) is not graphical, with the direct reason: the three degree-3 vertices force the fourth to degree 3.",
                  "K_6 has C(6, 2) = 15 edges, degrees all 5.",
                ],
              },
              {
                q: "A graph has 21 edges and every vertex has degree 3. How many vertices does it have?",
                marks: 3,
              },
              {
                q: "Give the degree sequence of K_{2,3} and its edge count.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Walks, paths and connectivity",
            body: [
              "A walk of length k from u to v is a sequence u = v0, v1, ..., vk = v where each consecutive pair is joined by an edge; walks may repeat vertices and edges. A trail repeats no edge, a path repeats no vertex, and a circuit/cycle closes back to its start. The distance d(u, v) is the length of a shortest path - well-defined only when some path exists. The adjacency matrix A encodes the graph, and its powers are the counting tool: the (i, j) entry of A^k equals the number of walks of length exactly k from i to j, a fact examined almost every year.",
              "Connectivity comes in grades. An undirected graph is connected when every pair of vertices has a walk between them; otherwise it splits into connected components, the maximal connected pieces, and each vertex belongs to exactly one. For directed graphs, strongly connected means every ordered pair has a directed path both ways; weakly connected means the underlying undirected graph is connected. Removing a cut vertex (articulation point) increases the component count; removing a bridge (cut edge) does the same. A tree, previewed in section 3.5, is precisely a graph where every pair of vertices is joined by a unique path.",
              "Worked matrix example. For the path graph 1 - 2 - 3, the adjacency matrix A has 1s at (1,2), (2,1), (2,3), (3,2). Then A^2 counts 2-step walks: (A^2)[1][1] = A[1][2] A[2][1] + A[1][3] A[3][1] = 1 x 1 + 0 x 0 = 1, the walk 1-2-1, and (A^2)[1][3] = A[1][2] A[2][3] = 1, the walk 1-2-3. So A^2 shows 1 and 3 are joined by a 2-walk but not adjacent; A^3 = 0 tells us no 3-walk exists at all - the graph is too short. This is exactly how reachability is computed.",
              "Connectivity is the graph-theoretic heart of network reliability. Airline hubs, bridge routers and PowerGrid substations are cut vertices whose failure partitions the network; the Internet's robustness is measured by how many vertices must fail to disconnect it (vertex connectivity). In ML pipelines, computation graphs are checked for connectivity before training, since a disconnected component receives no gradient. Algorithms: breadth-first search computes distances and components in O(V + E); the transitive closure - which pairs are connected at all - comes from Warshall's algorithm or repeated Boolean matrix multiplication, the same operation that tests relation transitivity in Unit I.",
            ],
            bullets: [
              "Walk: edges and vertices repeatable; trail: edges unique; path: vertices unique; cycle: closed path.",
              "Distance d(u, v) = length of a shortest path; defined only inside a component.",
              "(A^k)[i][j] counts walks of length exactly k - the standard exam computation.",
              "Connected graph: every pair joined by a walk; components partition the vertex set.",
              "Directed graphs: strongly connected (both directions) vs weakly connected (underlying undirected).",
              "Cut vertex / bridge: removal disconnects the graph; trees consist entirely of bridges.",
              "BFS computes distances and components in O(V + E); Warshall computes transitive closure.",
            ],
            table: {
              caption: "Walk powers of the path graph 1 - 2 - 3 (adjacency matrix A).",
              headers: ["Matrix", "Meaning", "Entries", "Reading"],
              rows: [
                ["A", "walks of length 1", "A[1][2] = A[2][3] = 1", "the two edges"],
                ["A^2", "walks of length 2", "(A^2)[1][1] = 1, (A^2)[1][3] = 1, (A^2)[2][2] = 2", "1-2-1, 1-2-3, 2-1-2, 2-3-2"],
                ["A^3", "walks of length 3", "all zero", "no 3-walk exists"],
                ["Sum A + A^2", "reachability up to 2 steps", "rows of 1 and 3 cover all columns", "everything reachable"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Four strengths of connectivity",
              caption:
                "Axes: strictness of direction requirement vs strictness of path requirement.",
              axes: { x: "path: one direction -> every pair", y: "ignores direction -> respects direction" },
              quadrants: [
                { label: "Weakly connected", note: "underlying undirected graph connected; arrows may not allow travel both ways" },
                { label: "Strongly connected", note: "directed path from every vertex to every other" },
                { label: "Disconnected", note: "underlying graph splits into components" },
                { label: "Unilaterally connected", note: "for every pair at least one directed path exists" },
              ],
            },
            callout: {
              type: "exam",
              title: "Count walks with matrix powers, not by drawing",
              body: "When asked how many walks of length 3 join two vertices, compute A^3 and quote the entry - showing the matrix multiplication earns the marks, while eyeballing the drawing routinely misses walks that revisit vertices. State the theorem '(A^k)[i][j] = number of walks of length k' before computing.",
            },
            keyTerms: [
              { term: "Walk", definition: "An alternating vertex-edge sequence; repetitions of edges and vertices are allowed." },
              { term: "Path", definition: "A walk with no repeated vertices." },
              { term: "Connected component", definition: "A maximal set of vertices mutually joined by walks." },
              { term: "Cut vertex", definition: "A vertex whose removal increases the number of components." },
              { term: "Adjacency matrix power", definition: "(A^k)[i][j] counts walks of length exactly k from i to j." },
            ],
            examQuestions: [
              {
                q: "Define walk, trail, path and cycle. For the graph with edges 1-2, 2-3, 3-1, 3-4, compute the adjacency matrix A and A^2, state the meaning of the (1,4) entry of A^2, and determine whether the graph is connected.",
                marks: 7,
                outline: [
                  "Give the four definitions with one example each.",
                  "Write A: ones at (1,2), (2,1), (2,3), (3,2), (3,1), (1,3), (3,4), (4,3).",
                  "Compute A^2 by summing A[i][k] A[k][j] over k.",
                  "Entry (A^2)[1][4] = A[1][3] A[3][4] = 1: exactly one 2-walk 1-3-4.",
                  "Also note (A^2)[1][2] = A[1][3] A[3][2] = 1: the walk 1-3-2.",
                  "Connectivity: every vertex reaches every other via walks (1-2-3-4 etc.), so connected.",
                  "Remark: connectivity could be read from A + A^2 + A^3 having all positive off-diagonal entries.",
                ],
              },
              {
                q: "How many walks of length 2 join the two endpoints of the path 1 - 2 - 3 - 4?",
                marks: 3,
              },
              {
                q: "Define cut vertex and give a 4-vertex example.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Euler and Hamiltonian circuits",
            body: [
              "An Euler circuit traverses every edge exactly once and returns to the start; an Euler path traverses every edge exactly once without returning. Euler's theorem settles existence completely: a connected graph has an Euler circuit if and only if every vertex has even degree, and an Euler path if and only if exactly 0 or 2 vertices have odd degree. The Koenigsberg bridge problem - four land masses joined by seven bridges, each land mass touching an odd number of bridges (degrees 3, 3, 3, 5) - fails the even-degree test, proving no walk crosses each bridge exactly once: the problem that founded graph theory in 1736.",
              "Proof idea worth reproducing: in an Euler circuit every visit to a vertex uses an entry edge and an exit edge, pairing up edges at each vertex, so all degrees must be even. Conversely, with all degrees even, Hierholzer's algorithm constructs the circuit: follow unused edges from any start until stuck (you must end at the start, since degrees are even), then splice any remaining unused-edge loops into the tour. Worked example: the house graph (square with a roof triangle) has degrees 3, 3, 4, 4, 2 - two odd vertices, so an Euler path exists from one odd vertex to the other but no Euler circuit.",
              "Hamiltonian circuits visit every vertex exactly once and return - a much harder condition with no known clean criterion. Sufficient theorems carry the exam: Dirac's theorem - if every vertex has degree at least n/2, the graph is Hamiltonian (K_n trivially qualifies); Ore's theorem - if deg(u) + deg(v) >= n for every nonadjacent pair u, v, the graph is Hamiltonian. Both are sufficient, not necessary: the cycle C_6 is Hamiltonian with degree only 2 < 3. Necessary counting conditions also fail forwards: a Hamiltonian graph must be connected and cannot have cut vertices, but satisfying these does not promise a tour.",
              "The two circuits solve different logistics: Euler is about sweeping every connection - street cleaning, snow ploughing, DNA sequence assembly reading every fragment edge, network testing of every link; Hamiltonian is about visiting every place once - delivery rounds, PCB drilling (the travelling salesman problem adds weights to Hamiltonian cycles) and seating arrangements. Exam discipline: for Euler, count odd degrees; for Hamiltonian, try to build a cycle, and only cite Dirac/Ore when their hypotheses genuinely hold. Confusing the two conditions - claiming Euler from a Hamiltonian cycle or vice versa - is the most penalised slip in this unit.",
            ],
            bullets: [
              "Euler circuit iff connected and all degrees even; Euler path iff exactly 0 or 2 odd-degree vertices.",
              "Koenigsberg: degrees 3, 3, 3, 5 - four odd vertices, so no Euler path: seven-bridge crossing impossible.",
              "Reason: every intermediate visit pairs an entering edge with an exiting edge.",
              "Hamiltonian: visit each vertex once; no simple criterion - NP-complete in general.",
              "Dirac: all degrees >= n/2 forces Hamiltonian; Ore: deg(u) + deg(v) >= n for nonadjacent pairs.",
              "Conditions are sufficient only: C_6 is Hamiltonian with degree 2; the Petersen graph is non-Hamiltonian despite degrees 3.",
              "Applications: Euler for link sweeping and DNA assembly; Hamiltonian for routing and the travelling salesman problem.",
            ],
            table: {
              caption: "Euler versus Hamiltonian: conditions and verdicts on standard graphs.",
              headers: ["Graph", "Odd-degree count", "Euler verdict", "Hamiltonian verdict"],
              rows: [
                ["K_5", "0 (all degree 4)", "circuit exists", "yes - any ordering of all 5 vertices"],
                ["K_{3,3}", "0 (all degree 3)", "circuit exists", "yes - alternate the two parts around the 6-cycle"],
                ["House graph", "2 (degree 3 tops)", "path only, between the two odd vertices", "no - the roof vertex is a cut vertex"],
                ["C_6", "0", "circuit exists", "yes - the cycle itself"],
                ["Koenigsberg multigraph", "4", "no path at all", "not applicable"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which circuit does the question want?",
              caption:
                "Euler is an edge question; Hamiltonian is a vertex question.",
              start: "Circuit existence question on graph G",
              branches: [
                { label: "Every edge exactly once", outcome: "count odd-degree vertices: 0 gives a circuit, 2 gives a path, more gives nothing", good: true },
                { label: "Every vertex exactly once", outcome: "try to draw a cycle; cite Dirac (deg >= n/2) or Ore only when hypotheses hold", good: true },
                { label: "Weighted version", outcome: "Hamiltonian cycle of least weight = travelling salesman problem; solve small cases by enumeration", good: false },
                { label: "Connectedness not yet checked", outcome: "both theorems require connectivity first - always verify it", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Sufficient is not necessary",
              body: "Dirac's condition failing does not prove a graph non-Hamiltonian - C_6 has degree 2 < 3 yet is Hamiltonian. Write 'Dirac does not apply' rather than 'not Hamiltonian'. Conversely, for Euler the criterion is exact: even degrees plus connectivity settles it both ways. The asymmetry is the exam's favourite trap.",
            },
            keyTerms: [
              { term: "Euler circuit", definition: "A closed walk using every edge exactly once; exists iff connected with all degrees even." },
              { term: "Euler path", definition: "A walk using every edge exactly once; exists iff exactly 0 or 2 odd-degree vertices." },
              { term: "Hamiltonian cycle", definition: "A cycle visiting every vertex exactly once." },
              { term: "Dirac's theorem", definition: "Minimum degree at least n/2 guarantees a Hamiltonian cycle." },
              { term: "Ore's theorem", definition: "deg(u) + deg(v) >= n for every nonadjacent pair guarantees a Hamiltonian cycle." },
            ],
            examQuestions: [
              {
                q: "State Euler's theorem for circuits and paths. Model the Koenigsberg bridge problem as a graph, compute the degrees, and conclude whether a seven-bridge crossing exists. Determine whether the graph with edges 12, 23, 34, 41, 13 has an Euler circuit, path or neither, and justify with degrees.",
                marks: 7,
                outline: [
                  "State both parts of Euler's theorem with the odd-degree criterion.",
                  "Koenigsberg model: 4 vertices (banks, islands), 7 edges (bridges).",
                  "Degrees 3, 3, 3, 5 - four odd vertices, so neither circuit nor path exists.",
                  "Second graph: degrees d(1) = 3 (edges 12, 41, 13), d(2) = 2, d(3) = 3, d(4) = 2.",
                  "Two odd vertices (1 and 3): Euler path exists from 1 to 3, e.g. 1-2-3-4-1-3.",
                  "No Euler circuit since odd vertices exist.",
                  "State the pairing argument: each visit consumes an entry and an exit edge.",
                ],
              },
              {
                q: "Does K_6 satisfy Dirac's condition? Does the Petersen graph satisfy it?",
                marks: 3,
              },
              {
                q: "Give one application each of Euler circuits and Hamiltonian cycles.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Graph isomorphism basics",
            body: [
              "Two graphs G and H are isomorphic when a bijection f from V(G) to V(H) preserves adjacency in both directions: u and v adjacent in G exactly when f(u) and f(v) are adjacent in H. Isomorphism says the two drawings are the same graph with relabelled vertices - structure, not names, defines a graph. The definition is existential; verifying it means exhibiting the bijection and checking all adjacency pairs, which is why exams give small graphs of 4 to 6 vertices and expect a labelled vertex mapping plus a verification table.",
              "Invariants give quick rejections. Any isomorphism preserves: the number of vertices and edges; the sorted degree sequence; the number of connected components; the length spectrum of cycles; bipartiteness; and connectivity. If any invariant differs, the graphs are not isomorphic - no bijection can exist. Worked rejection: C_6 (one 6-cycle) and the disjoint union of two triangles both have 6 vertices, 6 edges and degree sequence (2, 2, 2, 2, 2, 2), yet C_6 is connected and the union is not - the component count separates them immediately.",
              "The deeper warning: matching invariants does not prove isomorphism. The easy case is C_6 versus two triangles, separated by component count; the hard canonical pair is K_{3,3} versus the triangular prism (two triangles joined by matching edges) - both 3-regular on 6 vertices with 9 edges, both connected and bipartite - yet K_{3,3} has no triangle while the prism has two, so the cycle-length spectrum separates them. Lesson: no fixed list of invariants is complete; when invariants all match, search for the bijection directly.",
              "Isomorphism testing is one of computer science's famous in-between problems: no polynomial algorithm is known, yet it is not believed NP-complete; practical tools (nauty, VF2) handle thousands of vertices using refined invariants called certificates. Applications: chemical informatics matches molecular graphs against databases to identify compounds; circuit verification checks netlist equivalence; in ML, graph neural networks are designed to produce embeddings invariant under isomorphism - two drawings of the same molecule must yield the same prediction. Exam discipline: compute the cheap invariants first (edge count, degree sequence, components, cycle spectrum); only if all match, attempt the bijection.",
            ],
            bullets: [
              "Isomorphism: a vertex bijection preserving adjacency both ways - same structure, different labels.",
              "Rejection invariants: vertex/edge counts, degree sequence, components, cycle spectrum, bipartiteness.",
              "Worked reject: C_6 vs two triangles - same degrees and edges, different component count.",
              "Harder reject: K_{3,3} vs the triangular prism - same degree sequence and bipartite, but prism has triangles.",
              "Matching invariants never proves isomorphism; exhibit the bijection and verify adjacency.",
              "Complexity: no known polynomial test, not believed NP-complete; nauty/VF2 are practical tools.",
              "Applications: molecule matching, netlist equivalence, isomorphism-invariant graph neural networks.",
            ],
            table: {
              caption: "Invariants that distinguish the standard nonisomorphic pairs.",
              headers: ["Pair", "Shared invariants", "Separating invariant", "Verdict"],
              rows: [
                ["C_6 vs two triangles", "6 vertices, 6 edges, degrees all 2", "components: 1 vs 2", "not isomorphic"],
                ["K_{3,3} vs triangular prism", "6 vertices, 9 edges, all degree 3, connected", "triangle count: 0 vs 2", "not isomorphic"],
                ["C_4 vs K_{2,2}", "4 vertices, 4 edges, all degree 2, one 4-cycle", "none - they are the same graph", "isomorphic"],
                ["Petersen vs (3-regular 10-vertex rivals)", "degrees, edge count", "girth 5 vs smaller", "not isomorphic"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Isomorphism decision procedure for exam-sized graphs",
              caption:
                "Cheap invariants first; the bijection only when everything matches.",
              stages: [
                { label: "Compare vertex and edge counts", note: "a mismatch ends the question" },
                { label: "Compare sorted degree sequences", note: "next cheapest structural fingerprint" },
                { label: "Compare components and cycle spectrum", note: "connectedness, triangle counts, girth" },
                { label: "Attempt a bijection", note: "map high-degree vertices to high-degree vertices" },
                { label: "Verify every adjacency pair", note: "both directions; then conclude isomorphic" },
              ],
            },
            callout: {
              type: "tip",
              title: "Anchor the bijection on distinctive vertices",
              body: "When constructing an isomorphism, start from vertices with unique degrees or unique local structures - a vertex adjacent to all others, the only degree-2 vertex - and propagate outward. Random mappings fail; anchored mappings succeed in one pass and read clearly in an exam answer.",
            },
            keyTerms: [
              { term: "Isomorphism", definition: "A bijection between vertex sets that preserves adjacency in both directions." },
              { term: "Graph invariant", definition: "A quantity unchanged by isomorphism: degree sequence, cycle spectrum, connectivity." },
              { term: "Girth", definition: "The length of the shortest cycle; an isomorphism invariant used to separate regular graphs." },
              { term: "Self-complementary", definition: "A graph isomorphic to its complement; forces n(n-1)/4 edges to be an integer." },
            ],
            examQuestions: [
              {
                q: "Define graph isomorphism. Show that C_6 and the disjoint union of two triangles are not isomorphic despite sharing their degree sequence, and prove that C_4 is isomorphic to K_{2,2} by exhibiting an explicit bijection.",
                marks: 7,
                outline: [
                  "State the definition: bijection preserving adjacency both ways.",
                  "Compute shared invariants: both have 6 vertices, 6 edges, degree sequence (2 x 6).",
                  "Separating invariant: C_6 is connected (1 component), two triangles have 2 components.",
                  "Conclude not isomorphic - connectivity is preserved by any isomorphism.",
                  "For C_4 vs K_{2,2}: label C_4 as 1-2-3-4-1 and bipartition K_{2,2} as {a, b}, {c, d}.",
                  "Exhibit f(1) = a, f(2) = c, f(3) = b, f(4) = d.",
                  "Verify all four adjacency pairs of C_4 map to edges of K_{2,2} and conversely.",
                ],
              },
              {
                q: "Two graphs have the same degree sequence. Does that prove they are isomorphic? Justify in two sentences.",
                marks: 3,
              },
              {
                q: "State two isomorphism invariants other than the degree sequence.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Trees and rooted trees",
            body: [
              "A tree is a connected graph with no cycles - the minimal possible backbone. Four characterisations are equivalent and interchangeably quotable in exams: (1) connected and acyclic; (2) connected with exactly n - 1 edges; (3) acyclic with exactly n - 1 edges; (4) every pair of vertices joined by a unique path. Adding any edge to a tree creates exactly one cycle; deleting any edge disconnects it - every edge of a tree is a bridge. Every tree with at least 2 vertices has at least two leaves (degree-1 vertices), proved by walking along the graph until stuck.",
              "Counting facts make trees computable. A forest (acyclic graph) with n vertices and c components has n - c edges. A full m-ary tree - every internal vertex has exactly m children - with i internal vertices has n = m i + 1 vertices, so i = (n - 1)/(m - 1) and the number of leaves l = i (m - 1) + 1. Height bounds: a rooted m-ary tree of height h has at most m^h leaves, and conversely at least ceiling(log_m l) height is needed to hold l leaves - the logarithmic depth that makes binary search trees and B-trees fast.",
              "Rooted trees add direction and family vocabulary: the root at level 0, its children at level 1, and so on; the height is the maximum level. Parent, child, sibling, ancestor, descendant and subtree are defined relative to the root; leaves are childless vertices and internal vertices are parents. Binary trees restrict m = 2 with left and right children; expression trees store arithmetic - leaves are operands, internal nodes are operators, and the three traversals (preorder gives prefix notation, inorder gives infix, postorder gives postfix, the form stack machines evaluate) are standard exam questions. For the expression (a + b) * c: root is *, left subtree stores + with leaves a, b, right leaf is c.",
              "Trees are the data structures and hierarchies of computing: file systems, DOM trees, organisational charts, XML documents, decision trees in ML, and random forests that average hundreds of decision trees. Spanning trees of general graphs - the tree-shaped subgraphs touching every vertex - are section 3.6's subject and the reason MST algorithms exist. Exam discipline: quote characterisation (2) to count edges, use i = (n - 1)/(m - 1) for full m-ary questions, and draw the expression tree before answering traversal questions - the picture makes preorder and postorder mechanical.",
            ],
            bullets: [
              "Tree = connected + acyclic; equivalently n - 1 edges, or unique paths between all pairs.",
              "Adding an edge to a tree makes exactly one cycle; deleting any edge disconnects it.",
              "Every tree with n >= 2 vertices has at least two leaves; a forest with c components has n - c edges.",
              "Full m-ary tree: n = m i + 1, so i = (n - 1)/(m - 1) internal vertices and l = i(m - 1) + 1 leaves.",
              "Height bound: an m-ary tree of height h has at most m^h leaves; holding l leaves needs height >= ceiling(log_m l).",
              "Rooted tree: root at level 0; height = deepest level; children, leaves, internal vertices defined by the root.",
              "Expression tree traversals: preorder = prefix, inorder = infix, postorder = postfix (stack-evaluable).",
            ],
            table: {
              caption: "Full m-ary tree formulas with worked binary cases.",
              headers: ["Quantity", "Formula", "Binary example (m = 2)"],
              rows: [
                ["Total vertices n", "m i + 1", "i = 4 internal gives n = 9"],
                ["Internal vertices i", "(n - 1)/(m - 1)", "n = 9 gives i = 4"],
                ["Leaves l", "i (m - 1) + 1", "i = 4 gives l = 5"],
                ["Max leaves at height h", "m^h", "h = 3 gives at most 8 leaves"],
                ["Min height for l leaves", "ceiling(log_m l)", "l = 8 needs h = 3"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "A rooted binary tree of height 2, read top to bottom",
              caption:
                "Level 0 root, level 1 children, level 2 leaves - height is the deepest level.",
              tiers: [
                { label: "Root r", note: "level 0" },
                { label: "a, b", note: "level 1; internal vertices" },
                { label: "c, d, e, f", note: "level 2; leaves - at most 2^2 = 4, attained here" },
              ],
            },
            callout: {
              type: "exam",
              title: "n - 1 answers most tree questions",
              body: "Asked how many edges a tree on 12 vertices has, answer 11 instantly by characterisation (2). Asked whether a connected graph with 12 vertices and 12 edges is a tree, answer no - a tree on 12 vertices has exactly 11 edges; the extra edge creates a cycle. These two moves resolve most one-line tree questions.",
            },
            keyTerms: [
              { term: "Tree", definition: "A connected acyclic graph; equivalently a connected graph with n - 1 edges." },
              { term: "Forest", definition: "An acyclic graph; with c components it has n - c edges." },
              { term: "Rooted tree", definition: "A tree with a designated root defining levels, parents and children." },
              { term: "Full m-ary tree", definition: "Every internal vertex has exactly m children; i = (n - 1)/(m - 1)." },
              { term: "Expression tree", definition: "A binary tree storing an expression; postorder yields postfix notation." },
            ],
            examQuestions: [
              {
                q: "Give three equivalent characterisations of a tree. Prove that every tree with at least two vertices has at least two leaves. A full binary tree has 15 vertices: find its internal vertices and leaves, and state the minimum possible height.",
                marks: 7,
                outline: [
                  "State: connected + acyclic; connected with n - 1 edges; unique path between every pair.",
                  "Leaf-walk proof: start at any vertex and keep moving to unvisited neighbours; the walk ends at a degree-1 vertex.",
                  "Run the walk from a leaf: it ends at another leaf, so at least two exist.",
                  "Full binary: n = 2i + 1, so 15 = 2i + 1 gives i = 7 internal vertices.",
                  "Leaves l = i(m - 1) + 1 = 7 + 1 = 8.",
                  "Minimum height: at most 2^h leaves needed to hold 8, so 2^h >= 8, h = 3.",
                  "Check: a perfect binary tree of height 3 has 15 vertices - consistent.",
                ],
              },
              {
                q: "A tree has 10 vertices. How many edges? What is its average degree?",
                marks: 3,
              },
              {
                q: "Draw the expression tree for (a + b) * c and give its postorder traversal.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.6",
            title: "Spanning trees: Prim's and Kruskal's algorithms",
            body: [
              "A spanning tree of a connected graph G is a subgraph that is a tree and touches every vertex - n vertices, n - 1 edges, no cycles. Any connected graph has one (delete cycle edges one at a time), and a weighted graph's minimum spanning tree (MST) is the spanning tree of least total weight. The two classical algorithms rest on the cut property: for any partition of the vertices, the lightest edge crossing the cut belongs to some MST - the licence for greedy choices that never need backtracking.",
              "Kruskal's algorithm sorts all edges by weight and adds them in order, skipping any edge that would close a cycle (detected with a Union-Find structure); it stops after n - 1 acceptances. Worked trace on vertices {A, B, C, D, E} with edges AB = 1, BC = 3, AC = 4, CD = 2, DE = 5, BD = 6: sorted order AB(1), CD(2), BC(3), AC(4), DE(5), BD(6). Accept AB, accept CD, accept BC (after AB and CD the components are {A, B} and {C, D}; BC merges them without creating a cycle), reject AC (it would close the cycle A-B-C-A), accept DE. Total weight 1 + 2 + 3 + 5 = 11 with 4 edges on 5 vertices.",
              "Prim's algorithm grows one tree from a start vertex, always adding the cheapest edge from the tree to a new vertex. Trace on the same graph starting at A: cheapest edge from {A} is AB(1); from {A, B} the frontier offers BC(3), AC(4), BD(6) - take BC(3); from {A, B, C} take CD(2); finally DE(5). Same MST, weight 11 - MSTs need not be unique, but all MSTs share the same multiset of weights. Prim runs in O(E log V) with a heap and suits dense graphs; Kruskal sorts once in O(E log E) and suits sparse graphs; both produce a valid MST by the cut property.",
              "Real systems live on MSTs: network cabling that connects all offices with minimum wire, clustering (single-linkage hierarchical clustering is exactly Kruskal stopped early), image segmentation and approximate solutions to the travelling salesman problem (MST-based 2-approximation). Exam discipline: for Kruskal, present the sorted edge list with an accept/reject column and the reason for each rejection ('would form cycle A-B-C'); for Prim, present the frontier at each step with the chosen cheapest edge. An unsorted Kruskal or a Prim trace that jumps between components loses the method marks even when the final tree is right.",
            ],
            bullets: [
              "Spanning tree: touches all n vertices with n - 1 edges and no cycles; MST minimises total weight.",
              "Cut property: the lightest edge across any vertex partition belongs to some MST - the greedy licence.",
              "Kruskal: sort edges, accept unless it closes a cycle; Union-Find detects cycles in near-constant time.",
              "Worked Kruskal: accept AB(1), CD(2), BC(3), reject AC(4, cycle A-B-C-A), accept DE(5); weight 11.",
              "Prim: grow from a start vertex, always take the cheapest tree-to-outside edge; same example gives the same weight.",
              "Complexities: Kruskal O(E log E), Prim O(E log V) with a binary heap.",
              "Applications: cabling, single-linkage clustering, image segmentation, TSP 2-approximation via MST doubling.",
            ],
            table: {
              caption: "Kruskal trace on A, B, C, D, E with the given weights.",
              headers: ["Edge (weight)", "Decision", "Reason", "Components after"],
              rows: [
                ["AB (1)", "accept", "first edge, no cycle", "{A, B}, {C}, {D}, {E}"],
                ["CD (2)", "accept", "no cycle", "{A, B}, {C, D}, {E}"],
                ["BC (3)", "accept", "merges two components", "{A, B, C, D}, {E}"],
                ["AC (4)", "reject", "would close cycle A-B-C-A", "unchanged"],
                ["DE (5)", "accept", "fourth edge of five vertices - done", "single component"],
                ["BD (6)", "never reached", "n - 1 = 4 edges accepted", "MST weight 11"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Prim versus Kruskal - two greedy routes to the same theorem",
              caption:
                "Both are justified by the cut property; they differ only in bookkeeping.",
              left: {
                heading: "Prim - grow one tree",
                items: [
                  "Maintains a single connected tree from a start vertex",
                  "Chooses cheapest tree-to-outside edge each step",
                  "Needs a priority queue of frontier edges",
                  "O(E log V) with a heap",
                  "Natural on dense graphs and adjacency matrices",
                ],
              },
              right: {
                heading: "Kruskal - merge forests",
                items: [
                  "Starts with n singletons, merges components",
                  "Considers edges in global weight order",
                  "Needs Union-Find for cycle detection",
                  "O(E log E) dominated by the sort",
                  "Natural on sparse edge lists",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Show the reject reasons",
              body: "In Kruskal traces, the rejected edges carry the marks: write 'AC rejected - cycle A-B-C-A already spanned'. Examiners award the method mark for the cycle-detection reasoning, not just the final edge set; a bare accepted list reads like a guess.",
            },
            keyTerms: [
              { term: "Spanning tree", definition: "A tree-shaped subgraph containing every vertex; n - 1 edges." },
              { term: "Minimum spanning tree", definition: "A spanning tree of least total edge weight." },
              { term: "Cut property", definition: "The lightest edge crossing any partition of the vertices belongs to some MST." },
              { term: "Union-Find", definition: "The disjoint-set data structure Kruskal uses to detect cycles in near-constant time." },
              { term: "Single-linkage clustering", definition: "Hierarchical clustering obtained by running Kruskal and stopping at a chosen cluster count." },
            ],
            examQuestions: [
              {
                q: "Define a spanning tree and state the cut property. Using Kruskal's algorithm, find the MST of the graph with edges AB = 1, AC = 4, BC = 3, BD = 6, CD = 2, DE = 5, showing every accept/reject decision with reasons, and give the total weight. State Prim's algorithm and verify it gives the same weight starting from E.",
                marks: 7,
                outline: [
                  "Define spanning tree (all vertices, n - 1 edges, acyclic) and MST.",
                  "State the cut property as the correctness licence.",
                  "Sort: AB(1), CD(2), BC(3), AC(4), DE(5), BD(6).",
                  "Accept AB, CD, BC; reject AC because A-B-C-A would be a cycle.",
                  "Accept DE: four edges on five vertices, stop; weight 1 + 2 + 3 + 5 = 11.",
                  "Prim from E: cheapest frontier edge DE(5), then CD(2), then BC(3), then AB(1) - weight 11 again.",
                  "Note both algorithms are greedy and correct by the cut property.",
                ],
              },
              {
                q: "A connected graph has 8 vertices. How many edges does any spanning tree have? What is removed from a cycle edge count when a spanning tree is built?",
                marks: 3,
              },
              {
                q: "Give one real application of MSTs and name the algorithm it resembles.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.7",
            title: "Graph colouring and its applications",
            body: [
              "A colouring assigns colours to vertices so that adjacent vertices never share one; the chromatic number chi(G) is the minimum number of colours. The clique number omega(G) - the size of the largest complete subgraph - is a lower bound, chi(G) >= omega(G), and the maximum degree plus one, Delta + 1, is a universal upper bound by greedy colouring. The gap can be huge: bipartite graphs have chi = 2 yet may contain no clique larger than 2; Mycielski's construction builds triangle-free graphs with arbitrarily large chromatic number.",
              "Exact results the exam expects. chi(K_n) = n; chi(C_n) = 2 for even cycles and 3 for odd cycles; every tree has chi = 2 (2-colour by levels from any root); bipartite iff 2-colourable iff no odd cycle - the single most reused equivalence. The four colour theorem: every planar graph is 4-colourable (proved 1976 by computer-assisted case analysis); the greedy bound tightens for planar graphs to 5-colourable by an induction removing a degree-at-most-5 vertex. The Welsh-Powell / greedy heuristic: order vertices by decreasing degree and colour each with the smallest available colour - optimal on many exam-sized graphs though not in general.",
              "Worked example: colour the wheel graph W_5 (a 5-cycle plus a hub joined to all). The hub touches every rim vertex, so it takes colour 1 alone; the rim is an odd cycle needing 3 colours; total chi(W_5) = 4. Timetabling translation: subjects sharing students are adjacent vertices, colours are exam slots - a graph with chi = 4 needs at least 4 sessions, and greedy colouring constructs the actual timetable. Register allocation in compilers: variables live simultaneously are adjacent, colours are CPU registers; if chi exceeds the register count, some variables spill to memory - the compiler's most consequential graph computation.",
              "Colouring also guards frequency assignment (adjacent radio towers need different bands), Sudoku (a 9 x 9 pre-coloured graph colouring) and map drawing - the original four-colour problem. For exams: state the bounds chi >= omega and chi <= Delta + 1, quote the bipartite/odd-cycle equivalence, run greedy with a stated vertex order, and name the application when the question phrases one in disguise ('schedule exams so no student has two papers at once' is a pure colouring sentence). Showing the colour classes explicitly - {v1, v4}, {v2, v5}, {v3} - is the required final step.",
            ],
            bullets: [
              "Proper colouring: adjacent vertices get different colours; chi(G) = minimum number of colours.",
              "Bounds: omega(G) <= chi(G) <= Delta + 1; greedy colouring in decreasing-degree order realises the upper side.",
              "Exact values: chi(K_n) = n; chi(C_n) = 2 if n even, 3 if n odd; every tree and every bipartite graph: chi = 2.",
              "Bipartite iff no odd cycle iff 2-colourable - the most reused equivalence in the unit.",
              "Four colour theorem: every planar graph is 4-colourable; planar graphs are 5-colourable by induction.",
              "Worked: wheel W_5 needs 4 colours - hub alone in colour 1, odd rim cycle takes 3.",
              "Applications: exam timetabling, CPU register allocation, frequency assignment, Sudoku.",
            ],
            table: {
              caption: "Chromatic numbers and bounds for standard graphs.",
              headers: ["Graph", "omega (clique)", "chi", "Delta + 1", "Comment"],
              rows: [
                ["K_n", "n", "n", "n", "all bounds tight"],
                ["C_6 (even cycle)", "2", "2", "3", "bipartite"],
                ["C_5 (odd cycle)", "2", "3", "3", "needs the third colour"],
                ["Any tree on n vertices", "2", "2", "varies with Delta", "2-colour by BFS levels"],
                ["Wheel W_5", "3", "4", "6", "hub forces the extra colour"],
                ["Petersen graph", "2", "3", "4", "triangle-free yet not bipartite"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From conflict list to colour classes",
              caption:
                "The timetabling pipeline - the same four steps colour registers and towers.",
              steps: [
                { label: "List the conflicts", note: "subjects sharing students -> graph edges" },
                { label: "Order vertices by decreasing degree", note: "hard vertices first" },
                { label: "Greedy colour each vertex", note: "smallest colour not used by its neighbours" },
                { label: "Report the colour classes", note: "each class is one exam slot / one register set" },
                { label: "Compare chi with the resource count", note: "chi > registers means spills to memory" },
              ],
            },
            callout: {
              type: "exam",
              title: "Lower bound before upper bound",
              body: "Any colouring claim needs both directions: exhibit a colouring with k colours (upper bound) and exhibit a clique, an odd cycle or an argument that k - 1 colours fail (lower bound). Writing only the colouring earns at most half the marks for a 'find chi(G)' question.",
            },
            keyTerms: [
              { term: "Chromatic number", definition: "chi(G): the minimum number of colours in a proper vertex colouring." },
              { term: "Clique number", definition: "omega(G): the size of the largest complete subgraph; a lower bound on chi." },
              { term: "Bipartite", definition: "2-colourable; equivalently, contains no odd cycle." },
              { term: "Four colour theorem", definition: "Every planar graph is vertex-colourable with 4 colours." },
              { term: "Register allocation", definition: "Compiler phase colouring interference graphs; chi above the register count forces spills." },
            ],
            examQuestions: [
              {
                q: "Define graph colouring and the chromatic number. Find chi of the wheel graph W_5 (a 5-cycle with a hub adjacent to every rim vertex), justifying both the colouring and the lower bound. Explain how exam timetabling reduces to graph colouring.",
                marks: 7,
                outline: [
                  "Define proper colouring, chi(G), and the bounds omega <= chi <= Delta + 1.",
                  "Model W_5: hub degree 5, five rim vertices of degree 3.",
                  "Hub must differ from every rim vertex: give the hub colour 1.",
                  "Rim is C_5, an odd cycle needing 3 colours: colours 2 and 3 alternate around the rim, but odd length forces the fifth rim vertex to take colour 4.",
                  "Exhibit the explicit 4-colouring and the classes.",
                  "Lower bound: hub + any rim edge forms a triangle, omega = 3; odd rim cycle cannot be 2-coloured, so 3 colours cannot work once the hub is separated - argue chi = 4.",
                  "Timetabling: subjects sharing students are adjacent; slots are colours; chi is the minimum number of sessions.",
                ],
              },
              {
                q: "Prove that every tree is 2-colourable.",
                marks: 3,
              },
              {
                q: "State the bound relating chi(G) and Delta, the maximum degree.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Matrices and Linear Systems",
      summary:
        "The computational engine of the subject: matrix algebra, rank through echelon forms, consistency of linear systems by row reduction, inverses by Gauss-Jordan, determinants with cofactor expansion and properties, Cramer's rule, LU decomposition, and the linear independence that ties rank to everything.",
      chapter: {
        number: "04",
        title: "Matrices and Linear Systems",
        intro:
          "Unit IV makes the discrete structure numeric. Matrix algebra defines the objects and their operations; echelon forms expose rank; row reduction decides whether a linear system has none, one or infinitely many solutions; Gauss-Jordan inverts matrices; determinants compress a square matrix into one number with expansion and properties; Cramer's rule solves small systems by ratios of determinants; LU decomposition factors and speeds repeated solving; and linear independence links every one of these to rank.",
        inOneBreath:
          "Matrix multiplication is rows-times-columns and only defined when inner dimensions match (m x n)(n x p) = m x p; AB not equal BA in general; echelon form: leading entries march right and zero rows sink; rank = number of nonzero rows in echelon form = dimension of column space; system Ax = b is consistent iff rank(A) = rank([A | b]), unique iff that common rank = n; Gauss-Jordan: augment with I and row-reduce until the left block is I - the right block is A inverse; determinant via cofactor expansion along a row or column, with properties: swapping rows flips sign, duplicate rows give 0, triangular determinant = product of diagonal; Cramer: x_i = det(A_i)/det(A) for invertible A only; LU: A = L (unit lower triangular) U (echelon), solving needs one forward and one back substitution; columns of A are linearly independent iff det(A) != 0 iff rank = n iff null space is {0}.",
        sections: [
          {
            number: "4.1",
            title: "Matrix algebra: operations that matter",
            body: [
              "A matrix is a rectangular array with m rows and n columns; A = [a_ij]. Equality, addition and scalar multiplication are entrywise, and addition is commutative and associative with the zero matrix as identity. Multiplication is the star operation: (AB)[i][j] = sum over k of A[i][k] B[k][j], the dot product of row i of A with column j of B. It is defined only when A has as many columns as B has rows - (2 x 3)(3 x 4) is fine and gives 2 x 4, but (3 x 4)(2 x 3) is undefined. Worked: [[1, 2], [3, 0]] times [[0, 1], [4, 5]] = [[1*0 + 2*4, 1*1 + 2*5], [3*0 + 0*4, 3*1 + 0*5]] = [[8, 11], [0, 3]].",
              "Multiplication is associative, distributes over addition, and has the identity I with 1s on the diagonal - but it is not commutative: the example above reversed gives [[0, 1], [4, 5]] [[1, 2], [3, 0]] = [[3, 0], [19, 8]], a different matrix. Consequently AB = 0 does not imply A = 0 or B = 0 (take A = [[0, 1], [0, 0]], B = [[1, 0], [0, 0]]), and cancellation fails: AB = AC with A invertible does give B = C, but without invertibility it does not. The transpose swaps rows and columns: (AB)^T = B^T A^T - the reversal rule that also holds for inverses and is examined nearly every year.",
              "Special matrices structure everything: diagonal matrices scale coordinates, triangular matrices multiply entrywise along one side and their products stay triangular, symmetric matrices satisfy A^T = A, and orthogonal matrices satisfy Q^T Q = I. Powers are easy for diagonal matrices - just power the diagonal entries - which is exactly why Unit V diagonalizes matrices before raising them to high powers. Trace, the sum of diagonal entries, is defined only for square matrices and satisfies trace(AB) = trace(BA) - a small identity with big consequences in eigenvalue theory.",
              "In machine learning, a dataset with n samples and d features is an n x d matrix X, a linear layer computes W x + b for a weight matrix W, and attention multiplies query, key and value matrices - matrix multiplication is the dominant cost of every transformer forward pass, which is why fast matrix multiplication is an active research area. For the exam: dimension checks before computing, one fully worked product, the three non-properties (no commutativity, no zero-product, no unconditional cancellation), and (AB)^T = B^T A^T. Writing the shapes beside each factor catches most arithmetic slips before they happen.",
            ],
            bullets: [
              "Multiplication: (AB)[i][j] = dot product of row i of A and column j of B; shapes must match (m x n)(n x p).",
              "Worked: [[1, 2], [3, 0]] [[0, 1], [4, 5]] = [[8, 11], [0, 3]].",
              "Not commutative: the reversed product gives [[3, 0], [19, 8]] - different matrix.",
              "AB = 0 possible with A, B both nonzero: [[0, 1], [0, 0]] [[1, 0], [0, 0]] = 0.",
              "Transpose rules: (AB)^T = B^T A^T; (A^T)^T = A; (A + B)^T = A^T + B^T.",
              "Diagonal matrices power entrywise: D^k = diag(d_i^k) - the reason Unit V diagonalizes first.",
              "Identity I: AI = IA = A for square A; trace(AB) = trace(BA) for square A, B.",
            ],
            table: {
              caption: "Matrix operations: defined when, and the laws that hold.",
              headers: ["Operation", "Condition", "Law status", "Example result"],
              rows: [
                ["A + B", "same shape", "commutative, associative", "entrywise sum"],
                ["cA", "any shape", "scales every entry", "doubles all entries for c = 2"],
                ["AB", "columns of A = rows of B", "associative; NOT commutative", "m x p product"],
                ["A^T", "any shape", "(AB)^T = B^T A^T", "shape n x m"],
                ["A inverse", "square and det != 0", "(AB)^(-1) = B^(-1) A^(-1)", "2 x 2 example in 4.4"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Computing one entry of a matrix product",
              caption:
                "Row times column - slide the row of A down the columns of B.",
              steps: [
                { label: "Check shapes: (m x n)(n x p)", note: "inner numbers must agree" },
                { label: "Pick row i of A", note: "a horizontal vector of length n" },
                { label: "Pick column j of B", note: "a vertical vector of length n" },
                { label: "Multiply pairwise and add", note: "(AB)[i][j] = sum of a_ik b_kj" },
                { label: "Repeat for every (i, j)", note: "m x p entries fill the product" },
              ],
            },
            callout: {
              type: "tip",
              title: "Write shapes above every factor",
              body: "Before multiplying, write (2 x 3)(3 x 4) = (2 x 4) above the expression. If the inner numbers disagree the product is undefined - and exam questions often test exactly that recognition, which takes five seconds and earns marks without any arithmetic at all.",
            },
            keyTerms: [
              { term: "Matrix multiplication", definition: "Rows of A dotted with columns of B; defined when inner dimensions match." },
              { term: "Transpose", definition: "Rows and columns swapped; reverses order under multiplication." },
              { term: "Identity matrix I", definition: "1s on the diagonal, 0s elsewhere; multiplicative identity for square matrices." },
              { term: "Symmetric matrix", definition: "A^T = A; the matrix of every quadratic form in Unit V." },
              { term: "Trace", definition: "Sum of diagonal entries of a square matrix; trace(AB) = trace(BA)." },
            ],
            examQuestions: [
              {
                q: "Given A = [[1, 2], [3, 0]] and B = [[0, 1], [4, 5]], compute AB and BA, and state which algebraic properties of matrix multiplication the two results demonstrate. State and verify the rule for (AB)^T using these matrices.",
                marks: 7,
                outline: [
                  "Compute AB: [[1*0 + 2*4, 1*1 + 2*5], [3*0 + 0*4, 3*1 + 0*5]] = [[8, 11], [0, 3]].",
                  "Compute BA: [[3, 0], [19, 8]] - different from AB, demonstrating non-commutativity.",
                  "Note both products are defined (both 2 x 2) yet unequal - the sharpest form of the non-commutativity witness.",
                  "Transpose AB to get [[8, 0], [11, 3]].",
                  "Compute B^T A^T = [[0, 4], [1, 5]] [[1, 3], [2, 0]] = [[8, 0], [11, 3]].",
                  "Conclude (AB)^T = B^T A^T - the reversal rule.",
                  "Remark that associativity still holds: (AB)C = A(BC) for any C of compatible shape.",
                ],
              },
              {
                q: "Is the product (2 x 3)(3 x 3)(3 x 5) defined? What is the shape of the result?",
                marks: 3,
              },
              {
                q: "Give a 2 x 2 example where AB = 0 but A != 0 and B != 0.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Echelon forms and rank",
            body: [
              "Elementary row operations reshape any matrix: swap two rows, multiply a row by a nonzero scalar, add a multiple of one row to another. Row-echelon form demands: all-zero rows sit at the bottom, and each leading (first nonzero) entry of a row lies strictly to the right of the leading entry above it. Reduced row-echelon form (RREF) adds: every leading entry is 1 and is the only nonzero entry in its column. For example, [[1, 2, 3], [2, 4, 7]] row-reduces to [[1, 2, 3], [0, 0, 1]] in echelon form and to [[1, 2, 0], [0, 0, 1]] in RREF.",
              "The rank of A is the number of nonzero rows in any echelon form - row operations never change it, which is why the answer is independent of the reduction path. Rank is simultaneously three numbers: the number of pivots, the dimension of the column space (how many genuinely independent columns) and the dimension of the row space. The rank theorem: rank(A) + nullity(A) = n, the number of columns - free variables in a solution are exactly the non-pivot columns. Worked: the 2 x 3 matrix above has rank 2 and nullity 1.",
              "Worked reduction with full bookkeeping. A = [[1, 2, -1], [2, 4, 1], [3, 6, 0]]. R2 -> R2 - 2 R1 and R3 -> R3 - 3 R1 give [[1, 2, -1], [0, 0, 3], [0, 0, 3]]; R3 -> R3 - R2 gives [[1, 2, -1], [0, 0, 3], [0, 0, 0]] - echelon with 2 pivots, so rank(A) = 2 despite three rows: the rows were dependent all along. R2 -> R2/3 then clearing above gives RREF with pivots in columns 1 and 3, so x2 is the free variable.",
              "Rank decides everything downstream in Unit IV: consistency (section 4.3 compares rank(A) with rank of the augmented matrix), invertibility (rank = n iff invertible), and linear independence of columns (independent iff rank = number of columns). In machine learning, rank of the data matrix X measures how many real degrees of freedom the features carry - duplicated or linearly dependent features collapse the rank and destabilise regression, which is why multicollinearity diagnostics are rank computations. Exam discipline: one row operation per line with its label (R2 -> R2 - 2 R1), echelon form clearly boxed, then the rank read off. Mixing several operations into one line is where sign errors breed.",
            ],
            bullets: [
              "Row operations: swap rows, scale a row by nonzero c, add a multiple of one row to another.",
              "Echelon form: zero rows at bottom, leading entries marching strictly right.",
              "RREF: leading entries are 1 and are the only nonzero entry in their column.",
              "Rank = number of pivots = dim(column space) = dim(row space), independent of reduction path.",
              "Rank-nullity: rank(A) + nullity(A) = number of columns; non-pivot columns give free variables.",
              "Worked: [[1, 2, -1], [2, 4, 1], [3, 6, 0]] has rank 2 - three dependent rows collapse to two pivots.",
              "Columns independent iff rank = n columns; matrix invertible iff rank = n.",
            ],
            table: {
              caption: "Row reduction of A = [[1, 2, -1], [2, 4, 1], [3, 6, 0]], step by step.",
              headers: ["Step", "Operation", "Matrix", "Note"],
              rows: [
                ["Start", "-", "[[1,2,-1],[2,4,1],[3,6,0]]", "rank unknown"],
                ["1", "R2 -> R2 - 2 R1", "[[1,2,-1],[0,0,3],[3,6,0]]", "kill first column below pivot"],
                ["2", "R3 -> R3 - 3 R1", "[[1,2,-1],[0,0,3],[0,0,3]]", "rows 2 and 3 now identical"],
                ["3", "R3 -> R3 - R2", "[[1,2,-1],[0,0,3],[0,0,0]]", "echelon form reached"],
                ["Read rank", "count nonzero rows", "rank = 2", "row 3 was dependent"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From matrix to rank in four row operations",
              caption:
                "One labelled operation per line - the format examiners expect.",
              steps: [
                { label: "Eliminate below pivot 1", note: "R_i -> R_i - c R_1" },
                { label: "Move to the next pivot column", note: "skip columns that became all zero" },
                { label: "Eliminate below pivot 2", note: "repeat until bottom row handled" },
                { label: "Reach echelon form", note: "leading entries march right" },
                { label: "Count nonzero rows", note: "that count is the rank" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never scale by zero",
              body: "Row operations must be reversible - multiplying a row by 0 destroys information and can invent rank. Scaling a row by 7 is legal only because dividing by 7 undoes it; multiplying by 0 cannot be undone. Every proof that rank is invariant depends on this reversibility.",
            },
            keyTerms: [
              { term: "Echelon form", definition: "Zero rows at the bottom, leading entries strictly staggered right." },
              { term: "Reduced row-echelon form", definition: "Echelon form with leading 1s that are the sole nonzero entry of their column." },
              { term: "Rank", definition: "The number of nonzero rows in echelon form; also dim of column and row spaces." },
              { term: "Pivot", definition: "A leading 1 in RREF; its columns are the independent ones." },
              { term: "Rank-nullity theorem", definition: "rank(A) + nullity(A) equals the number of columns of A." },
            ],
            examQuestions: [
              {
                q: "Define row-echelon and reduced row-echelon forms. Reduce A = [[1, 2, -1], [2, 4, 1], [3, 6, 0]] to echelon form, state its rank, and identify the free variable of Ax = 0. Verify the rank-nullity theorem for this matrix.",
                marks: 7,
                outline: [
                  "Define both forms precisely.",
                  "R2 -> R2 - 2 R1: row 2 becomes (0, 0, 3).",
                  "R3 -> R3 - 3 R1: row 3 becomes (0, 0, 3).",
                  "R3 -> R3 - R2: zero row; echelon form [[1, 2, -1], [0, 0, 3], [0, 0, 0]].",
                  "Rank = 2 nonzero rows; pivot columns 1 and 3.",
                  "Free variable: x2 (non-pivot column); nullity = 1.",
                  "Verify rank + nullity = 2 + 1 = 3 = number of columns.",
                ],
              },
              {
                q: "Compute the rank of [[2, 4], [1, 2], [0, 0]].",
                marks: 3,
              },
              {
                q: "Can a 3 x 5 matrix have rank 4? Justify in one sentence.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Consistency of linear systems by row reduction",
            body: [
              "A linear system is written as the matrix equation Ax = b. Gaussian elimination row-reduces the augmented matrix [A | b]; each elimination step mirrors an algebraic manipulation of the equations, so nothing is lost. The classification theorem: the system is consistent (has at least one solution) iff rank(A) = rank([A | b]); it has a unique solution iff additionally rank(A) = n, the number of unknowns; otherwise the consistent system has infinitely many solutions parameterised by n - rank(A) free variables. An inconsistent system shows the signature row (0 0 ... 0 | c) with c != 0 - the equation 0 = c.",
              "Worked classification. System: x + 2y - z = 3, 2x + 4y + z = 7, 3x + 6y = 10. Augmented matrix [[1, 2, -1, 3], [2, 4, 1, 7], [3, 6, 0, 10]]. R2 -> R2 - 2R1 gives (0, 0, 3, 1); R3 -> R3 - 3R1 gives (0, 0, 3, 1); R3 -> R3 - R2 gives (0, 0, 0, 0). Echelon form has rank 2 for both A and [A | b]: consistent. n = 3 unknowns, rank 2, so infinitely many solutions with 3 - 2 = 1 free variable. Back-substitution: z = 1/3, x = 3 - 2y + z = 10/3 - 2y, y free: solutions (10/3 - 2t, t, 1/3) for any real t.",
              "Contrast run. Same first two equations but the third changed to 3x + 6y = 9: after the same elimination the last row becomes (0, 0, 0, -1) - the contradiction 0 = -1. rank(A) = 2 but rank([A | b]) = 3: inconsistent, no solution. And a square independent system x + y = 3, x - y = 1 row-reduces to rank 2 = n = 2: the unique solution x = 2, y = 1. Three systems, three verdicts - no solution, infinitely many, exactly one - decided purely by comparing ranks and reading free variables.",
              "The same machinery drives real computation: circuit analysis (Kirchhoff's laws are linear systems), least-squares regression forms the normal equations X^T X w = X^T y and solves them by these very reductions, and the backslash operator in numerical libraries is a refined Gaussian elimination with pivoting. Exam discipline: always work on the augmented matrix so b travels with A; label every operation; read the verdict from ranks, never from vibes. When infinitely many solutions are found, present the parametric form with the free variable named - a bare 'infinite solutions' loses the solution-set marks.",
            ],
            bullets: [
              "Gaussian elimination acts on the augmented matrix [A | b]; operations mirror valid equation algebra.",
              "Consistent iff rank(A) = rank([A | b]); the signature of inconsistency is a row (0 ... 0 | c), c != 0.",
              "Unique solution iff consistent and rank(A) = n; otherwise infinitely many with n - rank(A) free variables.",
              "Worked consistent underdetermined: z = 1/3, y free, x = 10/3 - 2y.",
              "Worked inconsistent: third equation 3x + 6y = 9 produces the row (0, 0, 0, -1) - the lie 0 = -1.",
              "Worked unique: x + y = 3, x - y = 1 gives exactly x = 2, y = 1.",
              "Applications: Kirchhoff circuit equations, least squares normal equations, numerical linear algebra backslash.",
            ],
            table: {
              caption: "One coefficient matrix, three right-hand sides, three verdicts.",
              headers: ["System", "rank(A)", "rank([A|b])", "Verdict", "Solution"],
              rows: [
                ["b = (3, 7, 10)", "2", "2", "consistent, underdetermined", "(10/3 - 2t, t, 1/3)"],
                ["b = (3, 7, 9)", "2", "3", "inconsistent", "none - row 0 = -1"],
                ["third equation changed to x + y + z = 4", "3", "3", "consistent, unique", "one (x, y, z) by back-substitution"],
                ["x + y = 3, x - y = 1", "2", "2", "consistent, unique", "x = 2, y = 1"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Classify the system after row reduction",
              caption:
                "Two rank comparisons settle everything; count free variables for the solution set.",
              start: "Row-reduced augmented matrix [A | b]",
              branches: [
                { label: "A zero row with nonzero right side", outcome: "inconsistent: 0 = c with c != 0; no solution exists", good: false },
                { label: "ranks equal, rank = n", outcome: "exactly one solution; read it by back-substitution", good: true },
                { label: "ranks equal, rank < n", outcome: "infinitely many solutions with n - rank free variables; write the parametric form", good: true },
                { label: "rank(A) < rank([A|b]) without the signature row", outcome: "recheck the arithmetic - the contradiction row is hiding somewhere", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the free variable in the final answer",
              body: "For infinitely many solutions, examiners want the parametric set: 'let y = t; then x = 10/3 - 2t, z = 1/3'. Stopping at 'infinitely many solutions' forfeits the marks the parameterisation carries. Circle the non-pivot columns in the RREF - they are the free variables, in order.",
            },
            keyTerms: [
              { term: "Augmented matrix", definition: "[A | b]: the coefficient matrix with the right-hand side appended." },
              { term: "Consistent system", definition: "One possessing at least one solution; equivalent to equal ranks of A and [A | b]." },
              { term: "Free variable", definition: "A variable whose column has no pivot; it parameterises the solution set." },
              { term: "Gaussian elimination", definition: "Row reduction to echelon form followed by back-substitution." },
              { term: "Normal equations", definition: "X^T X w = X^T y; the least-squares system solved by the same reductions." },
            ],
            examQuestions: [
              {
                q: "State the criterion for consistency of Ax = b in terms of ranks. Solve the system x + 2y - z = 3, 2x + 4y + z = 7, 3x + 6y = 10, showing all row operations, and classify the solution set. Then change the third equation to 3x + 6y = 9 and show the system becomes inconsistent.",
                marks: 7,
                outline: [
                  "State: consistent iff rank(A) = rank([A | b]); unique iff that rank equals n.",
                  "Augmented matrix and R2 -> R2 - 2R1 giving (0, 0, 3, 1).",
                  "R3 -> R3 - 3R1 giving (0, 0, 3, 1), then R3 -> R3 - R2 giving zero row.",
                  "rank(A) = rank([A | b]) = 2 < n = 3: infinitely many solutions, 1 free variable.",
                  "Back-substitute: z = 1/3; x = 10/3 - 2y with y = t free.",
                  "Present the parametric family (10/3 - 2t, t, 1/3).",
                  "With b = 9: last row becomes (0, 0, 0, -1), ranks 2 vs 3, inconsistent - no solution.",
                ],
              },
              {
                q: "Solve x + y = 3, x - y = 1 and state the rank of the augmented matrix.",
                marks: 3,
              },
              {
                q: "What does a row (0, 0, 0 | 5) in a reduced augmented matrix signify?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Inverting a matrix by Gauss-Jordan",
            body: [
              "A square matrix A is invertible when some A^(-1) satisfies A A^(-1) = A^(-1) A = I; invertibility requires det(A) != 0 (section 4.5) and equivalently rank(A) = n. The Gauss-Jordan method finds the inverse in one pass: write [A | I], row-reduce the left block to I, and the right block becomes A^(-1) - because every operation applied to A is simultaneously applied to I, so the product of the operations, which turns A into I, is precisely A^(-1). No separate algebraic solving is needed.",
              "Worked 2 x 2 example. A = [[2, 1], [5, 3]], det(A) = 6 - 5 = 1 != 0, so invertible. Start [A | I] = [[2, 1, 1, 0], [5, 3, 0, 1]]. R1 -> R1/2: [[1, 0.5, 0.5, 0], [5, 3, 0, 1]]. R2 -> R2 - 5 R1: [[1, 0.5, 0.5, 0], [0, 0.5, -2.5, 1]]. R2 -> R2 x 2: [[1, 0.5, 0.5, 0], [0, 1, -5, 2]]. R1 -> R1 - 0.5 R2: [[1, 0, 3, -1], [0, 1, -5, 2]]. So A^(-1) = [[3, -1], [-5, 2]]. Verify: [[2, 1], [5, 3]] [[3, -1], [-5, 2]] = [[6 - 5, -2 + 2], [15 - 15, -5 + 6]] = [[1, 0], [0, 1]] - confirmed.",
              "The 2 x 2 shortcut deserves memorisation: for A = [[a, b], [c, d]], A^(-1) = 1/(ad - bc) [[d, -b], [-c, a]] - swap the diagonal, negate the off-diagonal, divide by the determinant. It fails exactly when ad - bc = 0, e.g. [[1, 2], [2, 4]] has det 0 and no inverse: its rows are proportional, its columns dependent, its rank 1. A useful inversion law: (AB)^(-1) = B^(-1) A^(-1) - the reversal rule, the transpose twin of section 4.1 - and (A^(-1))^T = (A^T)^(-1).",
              "Inverses power solve-and-resolve workflows: in Kalman filters and least squares, the same matrix is inverted once and reused for every right-hand side, which is why Gauss-Jordan beats repeated elimination. Numerical libraries rarely invert explicitly (they factor instead - section 4.6), but conceptually x = A^(-1) b is the definition of the solution. Exam discipline: attempt the 2 x 2 shortcut when legal; for 3 x 3, run [A | I] with one labelled operation per line; and always verify by multiplying A A^(-1) back to I - the verification is often a marked step worth one full mark.",
            ],
            bullets: [
              "Invertible: A A^(-1) = A^(-1) A = I; requires det(A) != 0, equivalently rank(A) = n.",
              "Gauss-Jordan: row-reduce [A | I] until the left block is I; the right block is A^(-1).",
              "Worked: A = [[2, 1], [5, 3]] gives A^(-1) = [[3, -1], [-5, 2]], verified by multiplying back to I.",
              "2 x 2 shortcut: 1/(ad - bc) [[d, -b], [-c, a]] - swap, negate, divide.",
              "Singular example: [[1, 2], [2, 4]] has det 0 - proportional rows, no inverse.",
              "Reversal rules: (AB)^(-1) = B^(-1) A^(-1) and (A^T)^(-1) = (A^(-1))^T.",
              "Applications: Kalman filters, reused right-hand sides, conceptual definition x = A^(-1) b.",
            ],
            table: {
              caption: "Gauss-Jordan trace for A = [[2, 1], [5, 3]].",
              headers: ["Step", "Operation", "[A | I] state", "Purpose"],
              rows: [
                ["Start", "-", "[[2, 1, 1, 0], [5, 3, 0, 1]]", "left = A, right = I"],
                ["1", "R1 -> R1 / 2", "[[1, 0.5, 0.5, 0], [5, 3, 0, 1]]", "pivot to 1"],
                ["2", "R2 -> R2 - 5 R1", "[[1, 0.5, 0.5, 0], [0, 0.5, -2.5, 1]]", "clear column 1"],
                ["3", "R2 -> 2 R2", "[[1, 0.5, 0.5, 0], [0, 1, -5, 2]]", "second pivot to 1"],
                ["4", "R1 -> R1 - 0.5 R2", "[[1, 0, 3, -1], [0, 1, -5, 2]]", "clear column 2 above"],
                ["Read", "left is I", "A^(-1) = [[3, -1], [-5, 2]]", "verify A A^(-1) = I"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Gauss-Jordan inversion as a symmetry trick",
              caption:
                "Whatever turns A into I is exactly A inverse - so apply it to I at the same time.",
              stages: [
                { label: "Augment: [A | I]", note: "two blocks, one destiny" },
                { label: "Pivot the left block column by column", note: "scale rows to make leading 1s" },
                { label: "Clear below and above each pivot", note: "elementary row operations only" },
                { label: "Left block reaches I", note: "the operations composed equal A^(-1)" },
                { label: "Read the right block", note: "it now holds A^(-1); verify by multiplying back" },
              ],
            },
            callout: {
              type: "warning",
              title: "Zero determinant stops everything",
              body: "If reduction produces a zero row on the left side of [A | I], the matrix is singular - stop and say so rather than pushing on. Inventing an inverse for [[1, 2], [2, 4]] is impossible; its columns are dependent and no amount of row work changes that. Quote det(A) = 0 as the reason.",
            },
            keyTerms: [
              { term: "Inverse matrix", definition: "A^(-1) with A A^(-1) = A^(-1) A = I; exists iff det(A) != 0." },
              { term: "Gauss-Jordan elimination", definition: "Row-reducing [A | I] so the left block becomes I and the right block A^(-1)." },
              { term: "Singular matrix", definition: "A square matrix with det = 0: no inverse, dependent columns." },
              { term: "Reversal rule", definition: "(AB)^(-1) = B^(-1) A^(-1) - inverses undo in opposite order." },
              { term: "2 x 2 inverse formula", definition: "1/(ad - bc) times [[d, -b], [-c, a]]." },
            ],
            examQuestions: [
              {
                q: "State the condition for A to be invertible. Find A^(-1) for A = [[2, 1], [5, 3]] by the Gauss-Jordan method, showing every row operation, and verify your answer. Then compute the inverse of [[4, 7], [2, 6]] using the 2 x 2 shortcut.",
                marks: 7,
                outline: [
                  "Condition: square with det(A) != 0, equivalently rank n.",
                  "Set up [A | I] = [[2, 1, 1, 0], [5, 3, 0, 1]].",
                  "R1 -> R1/2; R2 -> R2 - 5R1; R2 -> 2R2; R1 -> R1 - 0.5R2.",
                  "Result: [[1, 0, 3, -1], [0, 1, -5, 2]], so A^(-1) = [[3, -1], [-5, 2]].",
                  "Verify A A^(-1) = [[6 - 5, -2 + 2], [15 - 15, -5 + 6]] = I.",
                  "Shortcut for [[4, 7], [2, 6]]: det = 4*6 - 7*2 = 10; inverse = (1/10) [[6, -7], [-2, 4]].",
                  "Note both routes agree in structure: swap, negate, divide by determinant.",
                ],
              },
              {
                q: "Is [[1, 2], [2, 4]] invertible? Justify with the determinant.",
                marks: 3,
              },
              {
                q: "State the rule for (AB)^(-1) in terms of A^(-1) and B^(-1).",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Determinants: expansion and properties",
            body: [
              "The determinant compresses a square matrix into one number that measures how the matrix scales area (2 x 2) or volume (3 x 3): det = 0 means the matrix collapses space and is singular. Cofactor expansion computes it recursively: det(A) = sum over j of (-1)^(i+j) a_ij M_ij along row i, where M_ij is the minor - the determinant of the matrix with row i and column j deleted. For 2 x 2, det([[a, b], [c, d]]) = ad - bc directly. Worked 3 x 3: det([[1, 2, 3], [0, 4, 5], [1, 0, 6]]) expanding along row 1 = 1(4*6 - 5*0) - 2(0*6 - 5*1) + 3(0*0 - 4*1) = 24 + 10 - 12 = 22.",
              "Expansion is slow (n! terms recursively), so the smart route is row reduction with the properties: swapping two rows multiplies the determinant by -1; adding a multiple of one row to another leaves it unchanged; scaling a row by c scales the determinant by c; a zero row or two proportional rows force det = 0; and for triangular matrices det = product of the diagonal. Worked via reduction: det([[1, 2, 3], [2, 4, 7], [1, 0, 6]]) - R2 -> R2 - 2R1 gives (0, 0, 1), R3 -> R3 - R1 gives (0, -2, 3); swapping rows 2 and 3 to bring pivots in order changes sign: det = -det([[1, 2, 3], [0, -2, 3], [0, 0, 1]]) = -(1 * (-2) * 1) = 2.",
              "The properties are the proof toolkit. det(A^T) = det(A); det(AB) = det(A) det(B) - the multiplicativity that makes determinant a homomorphism and explains why AB invertible forces both factors invertible; det(A^(-1)) = 1/det(A); det(cA) = c^n det(A) for an n x n matrix (the exponent n is the classic slip - scaling a 3 x 3 matrix by 2 multiplies the determinant by 8, not 2). Cramer's rule follows from multiplicativity: replacing column i of A by b gives A_i with det(A_i) = det(A) * x_i, hence x_i = det(A_i)/det(A).",
              "Determinants decide invertibility, eigenvalue existence (Unit V: det(A - lambda I) = 0 defines eigenvalues), orientation in graphics (negative determinant mirrors space), and the Jacobian factor in multivariable calculus and probability densities. In ML, the multivariate Gaussian density contains det(Sigma)^(1/2) in its normaliser - singular covariance matrices are exactly the multicollinear features of section 4.2. Exam discipline: for 3 x 3 either expand along a row containing zeros or reduce to triangular while tracking the sign; state the property used at every step; and remember det is defined only for square matrices.",
            ],
            bullets: [
              "Cofactor expansion: det(A) = sum (-1)^(i+j) a_ij M_ij; expand along the row or column with most zeros.",
              "2 x 2: ad - bc; 2 x 2 inverse divides by this number.",
              "Row-swap flips sign; row-add leaves it unchanged; row-scale by c multiplies by c.",
              "Zero row or proportional rows force det = 0; triangular det = product of diagonal entries.",
              "Multiplicativity: det(AB) = det(A) det(B); det(A^(-1)) = 1/det(A); det(cA) = c^n det(A).",
              "Worked: det([[1,2,3],[0,4,5],[1,0,6]]) = 24 + 10 - 12 = 22 by expansion along row 1.",
              "Cramer's rule: x_i = det(A_i)/det(A), justified by det(A_i) = det(A) x_i.",
            ],
            table: {
              caption: "Determinant properties with instant examples.",
              headers: ["Property", "Statement", "Micro-example"],
              rows: [
                ["Swap rows", "det changes sign", "swap rows of [[1,2],[3,4]]: det 4 -> -4"],
                ["Proportional rows", "det = 0", "[[1, 2], [2, 4]]: 1*4 - 2*2 = 0"],
                ["Triangular", "product of diagonal", "[[2, 9], [0, 5]]: det = 10"],
                ["Transpose", "det(A^T) = det(A)", "row vs column reduction give the same value"],
                ["Product", "det(AB) = det(A)det(B)", "det I = 1 forces det(A^(-1)) = 1/det(A)"],
                ["Scalar multiple", "det(cA) = c^n det(A)", "c = 2 on 3 x 3 multiplies by 8"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Computing a determinant: which route is fastest?",
              caption:
                "Pick the route with the least arithmetic; all routes agree.",
              start: "Determinant of an n x n matrix",
              branches: [
                { label: "Triangular or diagonal already", outcome: "multiply the diagonal entries - done in one line", good: true },
                { label: "A row or column full of zeros", outcome: "cofactor expansion along it; each zero contributes nothing", good: true },
                { label: "Dense small matrix (2 x 2, 3 x 3)", outcome: "direct formula or one cofactor expansion", good: true },
                { label: "Dense 4 x 4 or larger", outcome: "reduce to triangular with tracked swaps and scales, then multiply the diagonal", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Track the sign through every swap",
              body: "When reducing to triangular form, each row interchange multiplies the determinant by -1 and each row scale by c multiplies it by c. Two swaps cancel; forgetting one gives the negative of the true answer. Write the running multiplier beside the matrix - a habit that recovers marks on 4 x 4 determinants.",
            },
            keyTerms: [
              { term: "Determinant", definition: "The signed scale factor of a square matrix; zero exactly when singular." },
              { term: "Minor", definition: "The determinant remaining after deleting row i and column j." },
              { term: "Cofactor expansion", definition: "The alternating-sign sum of entries times minors along any row or column." },
              { term: "Multiplicativity", definition: "det(AB) = det(A) det(B); the determinant respects products." },
              { term: "Triangular determinant", definition: "The product of diagonal entries; the reward for row reduction." },
            ],
            examQuestions: [
              {
                q: "State the properties of determinants used in row reduction. Evaluate det([[1, 2, 3], [2, 4, 7], [1, 0, 6]]) by reduction to triangular form, tracking sign changes, and confirm the answer by cofactor expansion along the first column.",
                marks: 7,
                outline: [
                  "List properties: swap flips sign, add-multiple unchanged, scale multiplies, triangular = diagonal product.",
                  "R2 -> R2 - 2R1: row (0, 0, 1); R3 -> R3 - R1: row (0, -2, 3).",
                  "Swap rows 2 and 3 for staircase pivots - multiply by -1.",
                  "Triangular matrix [[1, 2, 3], [0, -2, 3], [0, 0, 1]]: product 1 * (-2) * 1 = -2.",
                  "Apply the tracked sign: det = -(-2) = 2.",
                  "Expansion along column 1 with signs +, -, +: 1 * det([[4, 7], [0, 6]]) - 2 * det([[2, 3], [0, 6]]) + 1 * det([[2, 3], [4, 7]]).",
                  "Compute: 1 * 24 - 2 * 12 + 1 * 2 = 24 - 24 + 2 = 2 - both routes agree, confirming the answer.",
                ],
              },
              {
                q: "Compute det([[2, 9], [0, 5]]) and det([[3, 1], [6, 2]]).",
                marks: 3,
              },
              {
                q: "State the value of det(cA) for an n x n matrix A.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.6",
            title: "Cramer's rule, LU decomposition and linear independence",
            body: [
              "Cramer's rule solves an n x n system Ax = b with det(A) != 0 by ratios: x_i = det(A_i)/det(A), where A_i is A with column i replaced by b. Worked 2 x 2: x + 2y = 5, 3x + 4y = 11. det(A) = 1*4 - 2*3 = -2; A_1 = [[5, 2], [11, 4]] with det 20 - 22 = -2, so x = -2/-2 = 1; A_2 = [[1, 5], [3, 11]] with det 11 - 15 = -4, so y = -4/-2 = 2. Check in the first equation: 1 + 4 = 5. The rule is elegant and exam-friendly at n = 2, 3, but O(n!) expensive - never used for large systems.",
              "LU decomposition factors A = L U with L unit lower triangular (1s on the diagonal) and U upper triangular - exactly the multipliers and echelon result of Gaussian elimination, stored. Solving Ax = b splits into Ly = b (forward substitution, top to bottom) and Ux = y (back substitution, bottom to top), each O(n^2) instead of redoing O(n^3) elimination. Worked: A = [[2, 1], [4, 3]]: eliminating gives U = [[2, 1], [0, 1]] and multiplier 2, so L = [[1, 0], [2, 1]]. For b = (3, 8): forward gives y1 = 3, y2 = 8 - 2*3 = 2; back gives x2 = 2, x1 = (3 - 1*2)/2 = 0.5. Check: 2(0.5) + 1(2) = 3 and 4(0.5) + 3(2) = 8 - both hold.",
              "Linear independence is the concept knitting the unit together. Vectors v1, ..., vk are linearly independent when c1 v1 + ... + ck vk = 0 forces all c_i = 0; otherwise some vector is a combination of the others and the set is dependent. Decisions: two nonzero vectors are dependent iff one is a scalar multiple; any set containing 0 is dependent; n vectors in R^n are independent iff det of the matrix they form is nonzero; in general, put them as columns and row-reduce - independent iff rank = number of vectors. Worked: (1, 2), (2, 4) are dependent (double); (1, 2), (2, 5) are independent since det = 5 - 4 = 1 != 0.",
              "The connections are the exam's synthesis questions: columns independent iff rank = n iff det != 0 iff null space = {0} iff Ax = 0 has only the trivial solution iff A invertible - six formulations of one fact, all expected on demand. In machine learning, feature columns of the data matrix must be independent (multicollinearity inflates variance), and PCA of Unit V exists precisely to replace dependent features with independent principal components. Exam discipline: state the definition of independence before any test, choose the cheapest test (multiple? determinant? rank?), and connect Cramer and LU to the invertibility condition det(A) != 0 that licenses both.",
            ],
            bullets: [
              "Cramer: x_i = det(A_i)/det(A); worked system gives x = 1, y = 2 via determinants -2 and -4.",
              "Cramer is exact but O(n!) - fine for n = 2, 3 exams, useless for large systems.",
              "LU: A = L U with unit lower and upper triangular factors; solve by forward then back substitution, O(n^2) per new b.",
              "Worked LU: A = [[2, 1], [4, 3]] = [[1, 0], [2, 1]] [[2, 1], [0, 1]]; b = (3, 8) gives x = (0.5, 2).",
              "Independence: c1 v1 + ... + ck vk = 0 forces all c_i = 0; any set with 0 is dependent.",
              "Tests: scalar multiple for two vectors; det != 0 for n vectors in R^n; rank = k generally.",
              "Equivalence chain: columns independent iff rank n iff det != 0 iff null space {0} iff invertible.",
            ],
            table: {
              caption: "Three routes through the same 2 x 2 system: x + 2y = 5, 3x + 4y = 11.",
              headers: ["Method", "Key computation", "Result", "Cost"],
              rows: [
                ["Cramer's rule", "det(A) = -2, det(A_1) = -2, det(A_2) = -4", "x = 1, y = 2", "O(n!) - tiny n only"],
                ["Gauss-Jordan", "[A | b] -> [I | x]", "x = 1, y = 2", "O(n^3) per right-hand side"],
                ["LU then substitutions", "L = [[1, 0], [3, 1]], U = [[1, 2], [0, -2]]", "x = 1, y = 2", "O(n^2) per extra b"],
                ["Inverse route", "A^(-1) = (1/-2)[[4, -2], [-3, 1]]", "x = A^(-1) b = (1, 2)", "O(n^3) once, then O(n^2)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "One fact, six formulations",
              caption:
                "Every layer is equivalent for a square matrix A - quote whichever the question names.",
              layers: [
                { label: "Columns of A are linearly independent", note: "the definition from vectors" },
                { label: "rank(A) = n", note: "echelon form has n pivots" },
                { label: "det(A) != 0", note: "nonzero determinant" },
                { label: "Null space of A is {0}", note: "Ax = 0 only trivial solution" },
                { label: "A is invertible", note: "Gauss-Jordan succeeds; Cramer and LU apply" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pick the independence test that matches the shape",
              body: "Two vectors: eyeball scalar multiples. n vectors in R^n: one determinant. More vectors than dimensions or a tall matrix: row-reduce and count pivots. Choosing the expensive test when a cheap one answers is the classic time-waster - the determinant of a 4 x 4 is five minutes; the scalar-multiple check is five seconds.",
            },
            keyTerms: [
              { term: "Cramer's rule", definition: "x_i = det(A_i)/det(A) for invertible square systems." },
              { term: "LU decomposition", definition: "A = L U with unit lower-triangular L and upper-triangular U from elimination." },
              { term: "Forward / back substitution", definition: "Solving Ly = b downward and Ux = y upward, each O(n^2)." },
              { term: "Linear independence", definition: "No nontrivial combination gives zero; tested by rank, determinant or multiples." },
              { term: "Multicollinearity", definition: "Dependent or nearly dependent feature columns; destabilises regression, fixed by PCA." },
            ],
            examQuestions: [
              {
                q: "State Cramer's rule and solve x + 2y = 5, 3x + 4y = 11 with it. Then factor A = [[2, 1], [4, 3]] as L U and solve the same-type system with b = (3, 8) by forward and back substitution. Define linear independence and decide whether (1, 2, 1), (2, 4, 2) are independent.",
                marks: 7,
                outline: [
                  "State x_i = det(A_i)/det(A) with A_i = A with column i replaced by b.",
                  "det(A) = -2; det(A_1) = 20 - 22 = -2; det(A_2) = 11 - 15 = -4.",
                  "x = 1, y = 2; verify in both equations.",
                  "LU: eliminate R2 -> R2 - 2R1: U = [[2, 1], [0, 1]], L = [[1, 0], [2, 1]].",
                  "Forward substitution Ly = b: y = (3, 2).",
                  "Back substitution Ux = y: x2 = 2, x1 = 0.5; verify 2(0.5) + 2 = 3, 4(0.5) + 6 = 8.",
                  "Independence: (2, 4, 2) = 2 (1, 2, 1), a scalar multiple, so dependent - rank 1.",
                ],
              },
              {
                q: "Are the vectors (1, 2) and (2, 5) linearly independent? Justify by a determinant.",
                marks: 3,
              },
              {
                q: "State the two triangular shapes of L and U in an LU decomposition.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Vector Spaces, Eigenvalues and Applications",
      summary:
        "The summit of the subject: vector spaces with bases and dimension, linear transformations, orthogonality and Gram-Schmidt, eigenvalues and diagonalization, the Cayley-Hamilton theorem, quadratic forms and their signatures, and the applications an AI syllabus is built on - Markov chains, PageRank and PCA.",
      chapter: {
        number: "05",
        title: "Vector Spaces, Eigenvalues and Applications",
        intro:
          "Unit V abstracts and then applies. Vector spaces generalise R^n with axioms, subspaces, bases and dimension; linear transformations are the structure-preserving maps with matrix representations; inner products bring lengths and angles, with Gram-Schmidt building orthonormal bases; eigenvalues and eigenvectors expose the directions a matrix merely scales, enabling diagonalization; Cayley-Hamilton lets a matrix satisfy its own characteristic polynomial; quadratic forms are classified by eigenvalue signs; and Markov chains, PageRank and PCA turn it all into machine learning.",
        inOneBreath:
          "A vector space is a set closed under addition and scalar multiplication satisfying ten axioms; a subspace needs only closure under both and the zero vector; a basis is an independent spanning set and all bases have the same size, the dimension; a linear transformation satisfies T(u + v) = T(u) + T(v) and T(cv) = cT(v), with matrix columns T(e_i) and rank = dim of image; inner product <u, v> = u1 v1 + ... + un vn gives norms, angles, and orthogonality when <u, v> = 0; Gram-Schmidt repeatedly subtracts projections q_k = v_k - sum of <v_k, q_j> q_j and normalises; eigenvalues solve det(A - lambda I) = 0 - for A = [[2, 1], [1, 2]] the polynomial lambda^2 - 4 lambda + 3 = 0 gives lambda = 1, 3 with eigenvectors (1, -1), (1, 1); A is diagonalizable when it has n independent eigenvectors, P^(-1) A P = D; Cayley-Hamilton: every matrix satisfies its own characteristic polynomial, so A^2 - 4A + 3I = 0 above; quadratic form x^T A x is positive definite when all eigenvalues > 0; Markov chains have column-stochastic transition matrices whose dominant eigenvalue is 1, PageRank is its stationary vector, and PCA is eigenvectors of the covariance matrix.",
        sections: [
          {
            number: "5.1",
            title: "Vector spaces, subspaces, basis and dimension",
            body: [
              "A vector space over the reals is a set V with addition and scalar multiplication satisfying ten axioms: closure, commutativity and associativity of addition, a zero vector, additive inverses, distributivity of scalar over vector and field addition, compatibility of scalars c d (c v) = (cd) v, and 1 v = v. R^n is the prototype, but so are m x n matrices, polynomials of degree at most n, and functions - the axioms are deliberately abstract. A subspace W of V is a subset that is itself a vector space; testing needs only three sentences: W contains 0, and W is closed under addition and scalar multiplication. The line y = 2x in R^2 is a subspace; the set of vectors with x = 1 is not (no zero vector, not closed).",
              "Linear combinations and independence carry over from Unit IV: vectors v1, ..., vk span V when every element of V is a combination c1 v1 + ... + ck vk, and they are independent when that representation is unique. A basis is an independent spanning set - simultaneously minimal and maximal. Standard examples: (e1, e2) for R^2; (1, x, x^2) for polynomials up to degree 2; (1, 0), (0, 1) style bases everywhere. The fundamental theorem: all bases of a finite-dimensional space have the same number of elements, and that number is the dimension dim(V). R^n has dimension n; polynomials of degree at most n have dimension n + 1; 2 x 2 matrices have dimension 4.",
              "Basis tests and exchanges are standard exam moves. To check whether (1, 1), (1, -1) form a basis of R^2: compute det [[1, 1], [1, -1]] = -2 != 0, so independent, and two independent vectors in a 2-dimensional space automatically span - basis confirmed. To extend an independent set to a basis, add standard basis vectors until the determinant stops vanishing; to trim a spanning set to a basis, row-reduce and keep pivot rows or pivot columns. The dimension theorem for subspaces of R^n: dim(W) <= n with equality only for W = R^n itself, and any independent set in W of size dim(W) is automatically a basis.",
              "Why the abstraction matters: the same theorems govern data embeddings, function spaces in Fourier analysis, and the feature spaces of kernel methods - an AI student quietly works inside high-dimensional vector spaces daily. Row space, column space and null space of a matrix (from Unit IV) are all subspaces with dimensions rank and nullity, tying this section back to echelon forms. Exam discipline: to prove subspace, write the three checks explicitly; to prove basis, prove independence and dimension match, or span and dimension match - two of the three certificates, never just one.",
            ],
            bullets: [
              "Vector space: closure, eight algebra axioms, zero vector, additive inverses - applies to matrices, polynomials, functions.",
              "Subspace test: contains 0, closed under addition, closed under scalar multiplication - three sentences, no axioms.",
              "Non-example: {(x, y) : x = 1} is not a subspace - missing 0 and not closed.",
              "Basis = independent + spanning; dimension = number of basis vectors, same for every basis.",
              "Basis check shortcut: n independent vectors in an n-dimensional space automatically span.",
              "Worked: (1, 1), (1, -1) is a basis of R^2 since det [[1, 1], [1, -1]] = -2 != 0.",
              "Dimensions: R^n has n; degree-n polynomials have n + 1; 2 x 2 matrices have 4.",
            ],
            table: {
              caption: "Vector spaces and their standard bases.",
              headers: ["Space", "Elements", "Standard basis", "Dimension"],
              rows: [
                ["R^2", "pairs (x, y)", "(1, 0), (0, 1)", "2"],
                ["R^n", "n-tuples", "e1, ..., en", "n"],
                ["Polynomials deg <= 2", "a + b x + c x^2", "1, x, x^2", "3"],
                ["2 x 2 matrices", "four entries", "E11, E12, E21, E22", "4"],
                ["Solutions of x + y + z = 0", "planes through 0", "(1, -1, 0), (1, 0, -1)", "2"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The subspace ladder inside R^3",
              caption:
                "Dimensions 0, 1, 2, 3 - each layer closed under addition and scaling.",
              layers: [
                { label: "{0} - the trivial subspace", note: "dimension 0" },
                { label: "Lines through the origin", note: "dimension 1: span of one nonzero vector" },
                { label: "Planes through the origin", note: "dimension 2: e.g. x + y + z = 0" },
                { label: "R^3 itself", note: "dimension 3; any 3 independent vectors span it" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two certificates for a basis, three for a subspace",
              body: "To certify a subspace, write the three checks (0 present, closed under +, closed under scalar) - each is one line. To certify a basis, either show independence and count equals dimension, or show spanning and count equals dimension. Half-proofs - independence without span, or span without independence - earn half the marks at best.",
            },
            keyTerms: [
              { term: "Vector space", definition: "A set with addition and scalar multiplication satisfying the ten axioms." },
              { term: "Subspace", definition: "A subset containing 0 and closed under both operations." },
              { term: "Basis", definition: "A linearly independent set that spans the space." },
              { term: "Dimension", definition: "The number of vectors in any basis; all bases share it." },
              { term: "Null space", definition: "All solutions of Ax = 0; a subspace of dimension n - rank(A)." },
            ],
            examQuestions: [
              {
                q: "State the axioms of a vector space and the subspace test. Show that the set W of all vectors (x, y, z) with x + y + z = 0 is a subspace of R^3, find a basis for W, and state dim(W). Verify that (1, 1, 1) is not in W and explain why adding it to your basis gives a basis of R^3.",
                marks: 7,
                outline: [
                  "List the ten axioms briefly and state the three-line subspace test.",
                  "W contains (0, 0, 0) since 0 + 0 + 0 = 0.",
                  "Closure: sums and scalings of vectors with coordinate sum 0 still have coordinate sum 0.",
                  "Solve x + y + z = 0: z = -x - y, so vectors are (x, y, -x - y) = x(1, 0, -1) + y(0, 1, -1).",
                  "Basis (1, 0, -1), (0, 1, -1): independent (not multiples) and spans by the parametrisation.",
                  "dim(W) = 2 - a plane through the origin.",
                  "(1, 1, 1) has coordinate sum 3 != 0; with it, three independent vectors in R^3 span R^3 - basis.",
                ],
              },
              {
                q: "Is (2, 4) a basis vector for a subspace of R^2 of dimension 1? Name that subspace.",
                marks: 3,
              },
              {
                q: "State the dimension of the space of polynomials of degree at most 3.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Linear transformations and their matrices",
            body: [
              "A transformation T from V to W is linear when it respects the two operations: T(u + v) = T(u) + T(v) and T(c v) = c T(v) for all vectors and scalars - equivalently T(c1 v1 + ... + ck vk) = c1 T(v1) + ... + ck T(vk). Linearity is checked by the two equations, nothing more. Examples: T(x, y) = (x + y, x - y) is linear; T(x, y) = (x + 1, y) is not (the +1 breaks T(0) = 0, itself a quick necessary test); T(x, y) = (x^2, y) is not (squaring is not additive). Rotations, reflections, projections and scalings of the plane are all linear - geometry is linear algebra with pictures.",
              "Every linear transformation on finite-dimensional spaces is a matrix. The columns of the representing matrix A are the images of the standard basis vectors: column j = T(e_j). Worked: T(x, y) = (x + y, x - y) sends e1 = (1, 0) to (1, 1) and e2 = (0, 1) to (1, -1), so A = [[1, 1], [1, -1]], and T(v) = A v for every v. Conversely every matrix defines a linear transformation, so matrices and linear maps are two languages for one object. Composition of transformations corresponds to matrix multiplication: the matrix of T followed by S is the product of the two matrices in the same order - the deepest reason the multiplication rule is what it is.",
              "The four fundamental subspaces describe any m x n matrix A. The image (column space) has dimension rank(A); the null space has dimension n - rank(A); the row space and left null space complete the picture. The rank-nullity theorem from Unit IV is exactly this section's statement. For T(x, y) = (x + y, x - y), rank is 2 (det != 0), so T is bijective with inverse matrix A^(-1); a projection onto the x-axis has matrix [[1, 0], [0, 0]] with rank 1 and nullity 1 - one dimension kept, one collapsed, the geometry of rank.",
              "Linear transformations structure all of machine learning: every neural layer is an affine map W x + b (linear part plus shift), attention heads are learned linear maps, and convolutions are linear operators with structured sparse matrices. In graphics, rotation matrices like [[cos t, -sin t], [sin t, cos t]] are the workhorses - check their columns are orthonormal, foreshadowing orthogonal matrices in section 5.3. Exam discipline: verify linearity with the two equations (or the T(0) = 0 refutation), build the matrix from the images of basis vectors, and quote rank-nullity when a question asks how much information a transformation destroys.",
            ],
            bullets: [
              "Linearity: T(u + v) = T(u) + T(v) and T(c v) = c T(v); combined form for arbitrary combinations.",
              "Quick refutation: T(0) != 0 proves nonlinearity - T(x, y) = (x + 1, y) fails immediately.",
              "Matrix of T: columns are T(e_j); T(x, y) = (x + y, x - y) gives [[1, 1], [1, -1]].",
              "Composition matches multiplication: matrix of (T then S) = matrix product in order.",
              "Rank = dim(image), nullity = dim(null space), rank + nullity = dim of domain.",
              "Projection [[1, 0], [0, 0]]: rank 1, nullity 1 - one direction kept, one erased.",
              "ML connection: every neural layer is an affine map W x + b; rotations have orthonormal columns.",
            ],
            table: {
              caption: "Standard linear maps of the plane and their matrices.",
              headers: ["Transformation", "Matrix", "Effect", "Rank"],
              rows: [
                ["Rotation by t", "[[cos t, -sin t], [sin t, cos t]]", "rigid turn about origin", "2"],
                ["Reflection in x-axis", "[[1, 0], [0, -1]]", "flips y sign", "2"],
                ["Projection to x-axis", "[[1, 0], [0, 0]]", "erases y", "1"],
                ["Scaling by (2, 3)", "[[2, 0], [0, 3]]", "stretches axes differently", "2"],
                ["Shear (x, y) -> (x + y, y)", "[[1, 1], [0, 1]]", "slides rows sideways", "2"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building the matrix of a transformation",
              caption:
                "Basis images become columns - the recipe works in any dimension.",
              steps: [
                { label: "Verify linearity", note: "two equations, or T(0) = 0 check" },
                { label: "Apply T to each basis vector", note: "e1, e2, ..., en in order" },
                { label: "Write each image as a column", note: "column j = T(e_j)" },
                { label: "Assemble A", note: "T(v) = A v for all v" },
                { label: "Read rank and nullity", note: "rank from det or echelon; nullity = n - rank" },
              ],
            },
            callout: {
              type: "warning",
              title: "T(0v) = 0 forces T(0) = 0",
              body: "Any linear transformation must send the zero vector to the zero vector, because T(0) = T(0 * v) = 0 * T(v) = 0. This one-line test instantly refutes maps with constants inside - T(x, y) = (x + 1, y), translation - and saves minutes on 'is T linear?' questions. Translations become linear only after embedding in homogeneous coordinates.",
            },
            keyTerms: [
              { term: "Linear transformation", definition: "A map preserving addition and scalar multiplication." },
              { term: "Standard matrix", definition: "The matrix whose columns are the images of the standard basis vectors." },
              { term: "Image (column space)", definition: "The set of all outputs T(v); a subspace of dimension rank(A)." },
              { term: "Kernel (null space)", definition: "All inputs mapping to 0; a subspace of dimension n - rank(A)." },
              { term: "Affine map", definition: "x -> W x + b; linear plus a shift, the shape of every neural layer." },
            ],
            examQuestions: [
              {
                q: "Define a linear transformation. Determine whether T(x, y) = (x + 2y, 3x) and S(x, y) = (x + 2y, 3x + 1) are linear, giving reasons. For the linear one, find its standard matrix, its rank, and its null space.",
                marks: 7,
                outline: [
                  "State the two defining equations of linearity.",
                  "T: verify T(u + v) = T(u) + T(v) and T(c v) = c T(v) by entrywise computation.",
                  "S: T(0, 0) = (0, 1) != (0, 0), so S is not linear - the constant +1 breaks it.",
                  "Standard matrix of T: T(e1) = (1, 3), T(e2) = (2, 0), so A = [[1, 2], [3, 0]].",
                  "det(A) = -6 != 0, so rank 2, T is bijective.",
                  "Null space: Ax = 0 has only x = 0 - nullity 0, consistent with rank 2.",
                  "Note A^(-1) exists and recovers inputs - invertible transformations lose no information.",
                ],
              },
              {
                q: "Write the standard matrix of the projection of R^3 onto the xy-plane and state its rank and nullity.",
                marks: 3,
              },
              {
                q: "Is T(x) = 3x on R linear? Justify in one line.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Inner products, orthogonality and Gram-Schmidt",
            body: [
              "The standard inner product (dot product) of u = (u1, ..., un) and v = (v1, ..., vn) is <u, v> = u1 v1 + ... + un vn. It induces the length <v, v>^0.5 = ||v||, the angle cos t = <u, v>/(||u|| ||v||), and orthogonality: u and v are perpendicular exactly when <u, v> = 0. Worked: (1, 2, 2) has length sqrt(1 + 4 + 4) = 3; (1, 0, -1) and (1, 2, 1) have dot product 1 + 0 - 1 = 0, so they are orthogonal. The Pythagorean theorem generalises: for orthogonal u, v, ||u + v||^2 = ||u||^2 + ||v||^2.",
              "Orthonormal sets - orthogonal unit vectors - are the gold standard of bases: coordinates are read by dot products alone, q_j = <v, q_i> per axis, with no matrix inversion. A matrix Q with orthonormal columns is orthogonal: Q^T Q = I, so Q^T = Q^(-1), lengths are preserved (||Q v|| = ||v||), and angles too - rotations in disguise. Every finite-dimensional inner product space admits an orthonormal basis, and the Gram-Schmidt process constructs one from any basis: subtract from each vector its projections onto the previous orthonormalised vectors, then normalise.",
              "Worked Gram-Schmidt on v1 = (1, 1, 0), v2 = (1, 0, 1), v3 = (0, 1, 1). q1 = v1/||v1|| = (1, 1, 0)/sqrt(2). Projection of v2 onto q1: (v2 . q1) q1 = (1/sqrt(2)) q1 = (0.5, 0.5, 0); residual w2 = v2 - that = (0.5, -0.5, 1); q2 = w2/||w2|| with ||w2|| = sqrt(1.5) = sqrt(6)/2, so q2 = (1, -1, 2)/sqrt(6). Projection of v3 onto q1 and q2: (v3 . q1) = 1/sqrt(2) giving (0.5, 0.5, 0), and (v3 . q2) = 1/sqrt(6) giving (1/6, -1/6, 1/3); residual w3 = (0, 1, 1) - (0.5, 0.5, 0) - (1/6, -1/6, 1/3) = (-2/3, 2/3, 2/3); q3 = (-1, 1, 1)/sqrt(3). Check pairwise dot products: q1 . q2 = 0, q1 . q3 = 0, q2 . q3 = 0 - orthonormal basis confirmed.",
              "Orthogonality is the efficiency secret of numerical linear algebra and ML: QR decomposition (exactly Gram-Schmidt, stored as Q and R) stabilises least squares better than normal equations; orthogonal matrices keep floating-point error from exploding, which is why QR and SVD underpin production solvers; in ML, orthonormal initialisations, whitening and attention normalisations all trade on <u, v> = 0 meaning independence of directions. Exam discipline: compute lengths by <v, v>, test orthogonality by a single dot product, and in Gram-Schmidt carry exact fractions - decimal rounding before the final normalise is the standard source of lost accuracy marks.",
            ],
            bullets: [
              "Inner product: <u, v> = sum u_i v_i; length ||v|| = sqrt(<v, v>); cos of angle from the normalised dot product.",
              "Orthogonal iff <u, v> = 0; worked: (1, 0, -1) and (1, 2, 1) have dot product 0.",
              "Orthogonal sets satisfy Pythagoras: ||u + v||^2 = ||u||^2 + ||v||^2.",
              "Orthogonal matrix: Q^T Q = I, so Q^T = Q^(-1); preserves lengths and angles.",
              "Gram-Schmidt: q_k = normalise(v_k minus projections onto previous q's).",
              "Worked: (1,1,0), (1,0,1), (0,1,1) orthonormalise to (1,1,0)/sqrt2, (1,-1,2)/sqrt6, (-1,1,1)/sqrt3.",
              "Applications: QR decomposition, stable least squares, whitening and orthonormal initialisation in ML.",
            ],
            table: {
              caption: "Gram-Schmidt trace for v1 = (1, 1, 0), v2 = (1, 0, 1), v3 = (0, 1, 1).",
              headers: ["Step", "Subtraction", "Residual", "Normalised"],
              rows: [
                ["q1", "nothing to subtract", "(1, 1, 0)", "(1, 1, 0)/sqrt(2)"],
                ["w2", "v2 - (v2 . q1) q1 = v2 - (0.5, 0.5, 0)", "(0.5, -0.5, 1)", "(1, -1, 2)/sqrt(6)"],
                ["w3", "v3 - (0.5, 0.5, 0) - (1/6, -1/6, 1/3)", "(-2/3, 2/3, 2/3)", "(-1, 1, 1)/sqrt(3)"],
                ["Check", "pairwise dot products", "all zero", "orthonormal basis of R^3"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The Gram-Schmidt loop",
              caption:
                "One pass per vector: subtract what the previous vectors already explain, then normalise.",
              steps: [
                { label: "Take the next raw vector v_k", note: "in the given order" },
                { label: "Project onto every previous q_j", note: "coefficients v_k . q_j" },
                { label: "Subtract all projections", note: "residual is orthogonal to all previous" },
                { label: "Normalise the residual", note: "divide by its length" },
                { label: "Append q_k to the basis", note: "loop until the basis is exhausted" },
                { label: "Verify pairwise dot products", note: "all should be 0; norms all 1" },
              ],
            },
            callout: {
              type: "tip",
              title: "Keep fractions until the last line",
              body: "Rounding residuals early contaminates every later subtraction - Gram-Schmidt errors compound. Carry sqrt(2), sqrt(6) and exact fractions through the whole computation, normalising only at the end, and quote the orthonormal set with surds. Examiners accept sqrt(6)/2 denominators; they penalise drifted decimals.",
            },
            keyTerms: [
              { term: "Inner product", definition: "The dot product sum u_i v_i, inducing length and angle." },
              { term: "Orthogonal", definition: "Vectors with zero inner product - perpendicular directions." },
              { term: "Orthonormal", definition: "Orthogonal unit vectors; coordinates read off by dot products." },
              { term: "Orthogonal matrix", definition: "Square Q with Q^T Q = I; inverse equals transpose, preserves geometry." },
              { term: "Gram-Schmidt", definition: "The projection-subtract-normalise loop building an orthonormal basis from any basis." },
            ],
            examQuestions: [
              {
                q: "Define inner product, length and orthogonality. Apply the Gram-Schmidt process to v1 = (1, 1, 0), v2 = (1, 0, 1), v3 = (0, 1, 1), showing every projection and residual, and verify the resulting basis is orthonormal.",
                marks: 7,
                outline: [
                  "Give the three definitions with the angle formula.",
                  "q1 = (1, 1, 0)/sqrt(2) - first vector normalised.",
                  "Coefficient of v2 on q1: v2 . q1 = 1/sqrt(2); subtract (0.5, 0.5, 0) to get w2 = (0.5, -0.5, 1).",
                  "q2 = w2/||w2|| = (1, -1, 2)/sqrt(6).",
                  "Coefficients of v3: on q1 gives (0.5, 0.5, 0); on q2 gives (1/6, -1/6, 1/3).",
                  "Residual w3 = (-2/3, 2/3, 2/3); q3 = (-1, 1, 1)/sqrt(3).",
                  "Verification: q1 . q2 = q1 . q3 = q2 . q3 = 0 and all lengths 1.",
                ],
              },
              {
                q: "Show that (1, 0, -1) and (1, 2, 1) are orthogonal and compute the length of (1, 2, 2).",
                marks: 3,
              },
              {
                q: "State the defining property of an orthogonal matrix and one consequence.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Eigenvalues, eigenvectors and diagonalization",
            body: [
              "An eigenvector of a square matrix A is a nonzero v with A v = lambda v: the matrix merely stretches v by the scalar lambda, the eigenvalue. Eigenvectors are the directions a transformation does not rotate - the private axes of A. Finding them: solve det(A - lambda I) = 0, the characteristic polynomial, then (A - lambda I) v = 0 for each root. Worked 2 x 2: A = [[2, 1], [1, 2]]. det([[2 - lambda, 1], [1, 2 - lambda]]) = (2 - lambda)^2 - 1 = lambda^2 - 4 lambda + 3 = 0, giving lambda = 1 and lambda = 3.",
              "Eigenvectors by substitution. For lambda = 3: (A - 3 I) = [[-1, 1], [1, -1]], and the system -x + y = 0 gives v = (1, 1) up to scale. For lambda = 1: (A - I) = [[1, 1], [1, 1]], giving v = (1, -1). Check: A (1, 1) = (3, 3) = 3 (1, 1) and A (1, -1) = (1, -1) - both eigen-pairs verified. Sanity checks worth quoting: the trace equals the sum of eigenvalues (2 + 2 = 1 + 3) and the determinant equals their product (3 = 1 * 3); for a triangular matrix the diagonal entries are already the eigenvalues.",
              "Diagonalization. A is diagonalizable when it has n linearly independent eigenvectors: assemble P with those eigenvectors as columns, and P^(-1) A P = D, diagonal with the eigenvalues. For the example, P = [[1, 1], [1, -1]], D = diag(3, 1), and powers become trivial: A^k = P D^k P^(-1) - the whole point, since D^k just powers the diagonal. Not every matrix qualifies: [[0, 1], [0, 0]] has characteristic polynomial lambda^2 = 0, a single eigenvalue 0 with only one independent eigenvector - defective, not diagonalizable. Symmetric matrices are always diagonalizable, with orthogonal eigenvectors for distinct eigenvalues - the fact PCA relies on.",
              "Complex and repeated eigenvalues complete the picture: complex conjugate pairs give rotation-like behaviour; repeated roots need geometric multiplicity equal to algebraic multiplicity for diagonalization. Applications dominate: powers of transition matrices (Markov chains, section 5.6), solving linear differential equations, vibration modes, and in ML the covariance eigendecomposition behind PCA. Exam discipline: write the characteristic polynomial with det(A - lambda I), factor it, solve for eigenvectors per eigenvalue with free parameters, verify one eigen-pair, and only then claim P and D - quoting trace and determinant checks adds a cheap verification mark.",
            ],
            bullets: [
              "Eigen-pair: A v = lambda v with v != 0; lambda from det(A - lambda I) = 0.",
              "Worked: A = [[2, 1], [1, 2]] has lambda^2 - 4 lambda + 3 = 0, eigenvalues 1 and 3.",
              "Eigenvectors: lambda = 3 gives (1, 1); lambda = 1 gives (1, -1); verify A (1, 1) = (3, 3).",
              "Checks: trace = sum of eigenvalues, det = product; triangular matrices read eigenvalues off the diagonal.",
              "Diagonalization: P of independent eigenvectors gives P^(-1) A P = D; powers via A^k = P D^k P^(-1).",
              "Defective example: [[0, 1], [0, 0]] has one eigenvalue 0 but only one eigenvector - not diagonalizable.",
              "Symmetric matrices: always diagonalizable with orthogonal eigenvectors - the PCA licence.",
            ],
            table: {
              caption: "Eigen-worked ledger for A = [[2, 1], [1, 2]].",
              headers: ["Eigenvalue", "A - lambda I", "Eigenvector", "Verification"],
              rows: [
                ["3", "[[-1, 1], [1, -1]]", "(1, 1) up to scale", "A (1, 1) = (3, 3) = 3 (1, 1)"],
                ["1", "[[1, 1], [1, 1]]", "(1, -1) up to scale", "A (1, -1) = (1, -1)"],
                ["trace check", "2 + 2 = 4", "1 + 3 = 4", "matches"],
                ["det check", "det(A) = 3", "1 * 3 = 3", "matches"],
                ["D and P", "-", "P = [[1, 1], [1, -1]]", "P^(-1) A P = diag(3, 1)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Does diagonalization succeed?",
              caption:
                "Count independent eigenvectors; the answer decides everything downstream.",
              start: "Square matrix A with its eigenvalues found",
              branches: [
                { label: "n distinct eigenvalues", outcome: "automatically n independent eigenvectors - diagonalizable", good: true },
                { label: "repeated root, enough eigenvectors", outcome: "geometric multiplicity = algebraic multiplicity - still diagonalizable", good: true },
                { label: "repeated root, too few eigenvectors", outcome: "defective - no diagonalization; Jordan form territory", good: false },
                { label: "A symmetric", outcome: "always diagonalizable, and P can be chosen orthogonal", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Distinct eigenvalues guarantee, repeats do not",
              body: "Distinct eigenvalues make diagonalization automatic; repeated eigenvalues make it conditional - count the independent eigenvectors before claiming D. The classic failure is [[0, 1], [0, 0]]: the characteristic polynomial lambda^2 collapses to one eigenvector, so no P exists. Write the multiplicity check in every repeated-root answer.",
            },
            keyTerms: [
              { term: "Eigenvalue", definition: "Scalar lambda with A v = lambda v for some nonzero v." },
              { term: "Characteristic polynomial", definition: "det(A - lambda I) = 0; its roots are the eigenvalues." },
              { term: "Eigenvector", definition: "A direction the matrix only scales; found from (A - lambda I) v = 0." },
              { term: "Diagonalization", definition: "P^(-1) A P = D with P of independent eigenvectors; powers become trivial." },
              { term: "Defective matrix", definition: "Lacking enough independent eigenvectors to diagonalize." },
            ],
            examQuestions: [
              {
                q: "Define eigenvalues and eigenvectors. For A = [[2, 1], [1, 2]], find the characteristic polynomial, both eigenvalues, one eigenvector for each, and verify both eigen-pairs. Determine P and D such that P^(-1) A P = D, and state what A^5 becomes in terms of P, D and P^(-1).",
                marks: 7,
                outline: [
                  "Define eigen-pair with the stretching interpretation.",
                  "Characteristic polynomial: (2 - lambda)^2 - 1 = lambda^2 - 4 lambda + 3.",
                  "Roots: lambda = 1 and lambda = 3.",
                  "For lambda = 3, solve (A - 3I) v = 0: v = (1, 1); for lambda = 1: v = (1, -1).",
                  "Verify: A (1, 1) = (3, 3) and A (1, -1) = (1, -1).",
                  "P = [[1, 1], [1, -1]], D = diag(3, 1); note det(P) = -2 != 0 so P invertible.",
                  "A^5 = P D^5 P^(-1) with D^5 = diag(243, 1) - powers of D are entrywise.",
                ],
              },
              {
                q: "Find the eigenvalues of the triangular matrix [[3, 1], [0, -2]] without computing a determinant.",
                marks: 3,
              },
              {
                q: "State the trace and determinant checks relating them to eigenvalues.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Cayley-Hamilton theorem and quadratic forms",
            body: [
              "The Cayley-Hamilton theorem states that every square matrix satisfies its own characteristic equation: if p(lambda) = det(A - lambda I) = 0 is the characteristic polynomial, then p(A) = 0 with lambda replaced by the matrix A. It sounds mystical and computes beautifully. For A = [[2, 1], [1, 2]], the characteristic polynomial lambda^2 - 4 lambda + 3 gives A^2 - 4 A + 3 I = 0. Verify: A^2 = [[5, 4], [4, 5]], 4 A = [[8, 4], [4, 8]], 3 I = [[3, 0], [0, 3]], and [[5, 4], [4, 5]] - [[8, 4], [4, 8]] + [[3, 0], [0, 3]] = [[0, 0], [0, 0]] - the theorem holds, checked in four lines.",
              "The theorem's computational payoff is high powers and inverses without eigenvectors. From A^2 = 4 A - 3 I, multiply repeatedly: A^3 = A A^2 = 4 A^2 - 3 A = 4(4 A - 3 I) - 3 A = 13 A - 12 I; A^4 = 47 A - 36 I - every power reduces to a linear combination of A and I. Rearranging gives 4 A - A^2 = 3 I, so A (4 I - A) = 3 I and A^(-1) = (4 I - A)/3 = [[2, -1], [-1, 2]]/3 - the inverse from the polynomial, no Gauss-Jordan needed. For 3 x 3 matrices the same recipe uses A^2 and I: express A^(-1) as a quadratic polynomial in A.",
              "Quadratic forms are homogeneous degree-2 polynomials Q(x) = x^T A x with A symmetric - the energy functions of physics and the loss surfaces of ML. The eigenvalue signs classify them completely: positive definite when all eigenvalues > 0 (Q > 0 for x != 0), negative definite when all < 0, indefinite when signs mix, positive semi-definite when eigenvalues >= 0 with some zero. Sylvester's criterion avoids eigenvectors: a symmetric matrix is positive definite iff all leading principal minors are positive. Worked: Q = 2x^2 + 2xy + 2y^2 has A = [[2, 1], [1, 2]] with eigenvalues 1, 3 - both positive, so positive definite; Q = x^2 - y^2 has eigenvalues 1, -1 - indefinite, a saddle.",
              "Definiteness decides optimisation behaviour: at a critical point of a multivariable function, the Hessian positive definite means a local minimum, negative definite a maximum, indefinite a saddle - the second-derivative test generalised, and exactly how gradient descent diagnostics reason about loss curvature. Multivariate Gaussians need positive definite covariance matrices for their densities to integrate; regularisation terms like lambda ||w||^2 are precisely positive definite quadratic forms. Exam discipline: state Cayley-Hamilton before using it, verify p(A) = 0 in one small example, and classify forms by eigenvalues or Sylvester minors - naming the class and quoting one witness vector x.",
            ],
            bullets: [
              "Cayley-Hamilton: every matrix satisfies its own characteristic equation p(A) = 0.",
              "Worked: A = [[2, 1], [1, 2]] satisfies A^2 - 4A + 3I = 0, verified entrywise.",
              "Power reduction: A^3 = 13A - 12I, A^4 = 47A - 36I - no eigenvectors needed.",
              "Inverse from the polynomial: A^(-1) = (4I - A)/3 for the example.",
              "Quadratic form: Q(x) = x^T A x with A symmetric; classified by eigenvalue signs.",
              "Classes: positive definite (all > 0), negative definite (all < 0), indefinite (mixed), semi-definite (some 0).",
              "Sylvester's criterion: positive definite iff all leading principal minors positive; ties to Hessian-based optimisation.",
            ],
            table: {
              caption: "Classifying quadratic forms by eigenvalue signs.",
              headers: ["Eigenvalue signs", "Class", "Example form", "Geometry"],
              rows: [
                ["+, + (1, 3)", "positive definite", "2x^2 + 2xy + 2y^2", "bowl - unique minimum at 0"],
                ["-, -", "negative definite", "-x^2 - 2y^2", "dome - maximum at 0"],
                ["+ and - (1, -1)", "indefinite", "x^2 - y^2", "saddle"],
                ["+, 0", "positive semi-definite", "x^2", "valley - flat direction"],
                ["all zero", "zero form", "0", "flat plane"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The Hessian sign map at a critical point",
              caption:
                "Eigenvalue signs of the Hessian decide what kind of stationary point you stand on.",
              axes: { x: "second eigenvalue: negative -> positive", y: "first eigenvalue: negative -> positive" },
              quadrants: [
                { label: "Negative definite", note: "local maximum - dome" },
                { label: "Saddle (mixed)", note: "rise in one direction, fall in another" },
                { label: "Saddle (mixed)", note: "same signs reversed - still indefinite" },
                { label: "Positive definite", note: "local minimum - bowl; what optimisers chase" },
              ],
            },
            callout: {
              type: "exam",
              title: "Verify p(A) = 0 before exploiting it",
              body: "Cayley-Hamilton questions are marked in two halves: the verification that p(A) = 0 and the application (power reduction or inverse). Skipping the verification loses half the marks even when the final A^(-1) is right. The verification is four matrix entries - do it.",
            },
            keyTerms: [
              { term: "Cayley-Hamilton theorem", definition: "Every square matrix satisfies its own characteristic polynomial." },
              { term: "Power reduction", definition: "Rewriting A^k as a combination of lower powers using p(A) = 0." },
              { term: "Quadratic form", definition: "Q(x) = x^T A x with A symmetric; homogeneous degree-2 polynomial." },
              { term: "Positive definite", definition: "All eigenvalues positive; Q(x) > 0 for every x != 0." },
              { term: "Sylvester's criterion", definition: "Positive definiteness tested by positivity of all leading principal minors." },
            ],
            examQuestions: [
              {
                q: "State the Cayley-Hamilton theorem. Verify it for A = [[2, 1], [1, 2]] and use it to express A^3 in the form c1 A + c2 I and to compute A^(-1) without row reduction. Classify the quadratic form Q(x, y) = 2x^2 + 2xy + 2y^2.",
                marks: 7,
                outline: [
                  "State the theorem: p(A) = 0 where p(lambda) = det(A - lambda I).",
                  "Characteristic polynomial lambda^2 - 4 lambda + 3.",
                  "Compute A^2 = [[5, 4], [4, 5]] and verify A^2 - 4A + 3I = 0 entrywise.",
                  "A^3 = A A^2 = 4 A^2 - 3 A = 4(4A - 3I) - 3A = 13 A - 12 I.",
                  "Rearrange: A(4I - A) = 3I, so A^(-1) = (4I - A)/3 = [[2, -1], [-1, 2]]/3.",
                  "Q has A = [[2, 1], [1, 2]] with eigenvalues 1 and 3, both positive.",
                  "Q is positive definite - a bowl; confirm by completing the square: 2(x + y/2)^2 + (3/2) y^2.",
                ],
              },
              {
                q: "Classify Q(x, y) = x^2 - y^2 by eigenvalues and describe its surface.",
                marks: 3,
              },
              {
                q: "State Sylvester's criterion for a 2 x 2 symmetric matrix.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.6",
            title: "Applications: Markov chains, PageRank and PCA",
            body: [
              "A Markov chain models a system hopping between states with fixed transition probabilities: the state vector x_k and a transition matrix P with columns summing to 1 (column-stochastic), so the next state is x_(k+1) = P x_k. Worked 2-state weather chain: sunny/rainy with P = [[0.9, 0.4], [0.1, 0.6]] (column 1: stay sunny 0.9, turn rainy 0.1; column 2: clear up 0.4, stay rainy 0.6). Columns sum to 1: 0.9 + 0.1 = 1, 0.4 + 0.6 = 1. Starting from all-sunny (1, 0): day 1 gives (0.9, 0.1), day 2 gives (0.85, 0.15), day 3 gives (0.825, 0.175) - converging toward the stationary vector.",
              "The stationary distribution is the eigenvector for eigenvalue 1: P x = x with entries summing to 1. For the weather chain: (P - I) gives rows 0.9 - 1 = -0.1 and 0.4, so -0.1 s + 0.4 r = 0 and s + r = 1; solving, r = 0.2, s = 0.8 - long-run 80 percent sunny. Eigenvalue 1 is guaranteed: column-stochastic P has det(P - I) = 0 and all other eigenvalues have modulus <= 1, so x_k = P^k x_0 converges to the stationary vector whenever the chain is regular - powers of P converge to a matrix with identical columns.",
              "PageRank is exactly this theorem at web scale: pages are states, hyperlinks define transition probabilities (each page splits its weight equally among outgoing links, with a damping teleport of probability 0.15 to any page), and the ranking is the stationary distribution - the dominant eigenvector of the (modified) transition matrix. A page is important if important pages point to it, recursively - the definition is self-referential and the eigenvector resolves it. Power iteration - repeatedly multiply x -> P x / max(x) - converges to the dominant eigenvector and is how Google-scale eigenvectors are actually computed; the same iteration estimates leading eigenvalues in PCA and spectral clustering.",
              "PCA closes the unit with ML's most-used eigendecomposition: centre the data matrix X (n samples, d features), compute the covariance C = X^T X / n, and take its eigenvectors. Because C is symmetric, the eigenvectors are orthogonal and the eigenvalues are variances - the top-k eigenvectors give the k directions capturing most variance, and projecting X onto them is dimensionality reduction with minimal information loss. A 3-feature dataset with covariance eigenvalues 4, 1, 0.1 keeps 4/5.1 = 78 percent of variance in the first two components. Exam discipline: verify columns sum to 1 before any Markov computation, find the stationary vector by solving (P - I) x = 0 with a normalisation equation, and for PCA state 'symmetric covariance, orthogonal eigenvectors, eigenvalues = variances'.",
            ],
            bullets: [
              "Markov chain: x_(k+1) = P x_k with column-stochastic P (columns sum to 1).",
              "Worked weather chain P = [[0.9, 0.4], [0.1, 0.6]] converges to 80 percent sunny, 20 percent rainy.",
              "Stationary distribution: eigenvector of P for eigenvalue 1, normalised to sum 1.",
              "Column-stochastic matrices always have eigenvalue 1; regular chains converge x_k -> stationary.",
              "PageRank: stationary vector of the damped link matrix; computed by power iteration x -> P x.",
              "PCA: eigenvectors of the symmetric covariance X^T X / n; eigenvalues are variances along those axes.",
              "Worked PCA: covariance eigenvalues 4, 1, 0.1 - top two components keep 78 percent of variance.",
            ],
            table: {
              caption: "One eigenvector, three applications.",
              headers: ["Application", "Matrix", "Dominant eigenvector means", "Computation"],
              rows: [
                ["Markov chain", "column-stochastic transition P", "long-run state distribution", "solve (P - I) x = 0 with sum = 1"],
                ["PageRank", "damped hyperlink matrix", "page importance scores", "power iteration on P"],
                ["PCA", "symmetric covariance X^T X / n", "principal variance directions", "eigendecomposition of C"],
                ["Vibration analysis", "stiffness/dynamics matrix", "natural modes", "generalised eigenproblem"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From data to principal components",
              caption:
                "PCA in five stages - every stage is a section of this unit.",
              stages: [
                { label: "Centre the data", note: "subtract column means from X" },
                { label: "Form the covariance", note: "C = X^T X / n; symmetric by construction" },
                { label: "Eigen-decompose C", note: "orthogonal eigenvectors, eigenvalues = variances" },
                { label: "Order and select top k", note: "largest eigenvalues keep the most variance" },
                { label: "Project X onto those axes", note: "reduced features; variance fraction = sum of kept eigenvalues / total" },
              ],
            },
            callout: {
              type: "exam",
              title: "Columns, not rows, sum to 1 - state your convention",
              body: "Textbooks disagree on whether Markov transition matrices are row- or column-stochastic. Write your convention first ('columns sum to 1, so x_(k+1) = P x_k'), verify the columns, and stay consistent. Examiners accept either convention; they do not accept silent switching between them mid-solution.",
            },
            keyTerms: [
              { term: "Markov chain", definition: "A sequence x_(k+1) = P x_k with fixed transition probabilities." },
              { term: "Stationary distribution", definition: "The eigenvector of P for eigenvalue 1, scaled to sum 1; the long-run state mix." },
              { term: "Column-stochastic", definition: "Every column of P sums to 1; guarantees eigenvalue 1." },
              { term: "Power iteration", definition: "Repeatedly multiplying by P and normalising to reach the dominant eigenvector." },
              { term: "PCA", definition: "Eigendecomposition of the covariance matrix; top eigenvectors give maximal-variance projections." },
            ],
            examQuestions: [
              {
                q: "Define a Markov chain with a column-stochastic transition matrix. For P = [[0.9, 0.4], [0.1, 0.6]] with states sunny/rainy, compute three steps from the all-sunny start, find the stationary distribution by solving P x = x, and explain why the dominant eigenvalue is 1. Then explain in four sentences how PageRank uses the same eigenvector.",
                marks: 7,
                outline: [
                  "Verify columns: 0.9 + 0.1 = 1 and 0.4 + 0.6 = 1 - column-stochastic.",
                  "Iterate: (1, 0) -> (0.9, 0.1) -> (0.85, 0.15) -> (0.825, 0.175).",
                  "Solve (P - I) x = 0: -0.1 s + 0.4 r = 0 plus normalisation s + r = 1.",
                  "Stationary vector (0.8, 0.2): 80 percent sunny in the long run.",
                  "Reason for eigenvalue 1: P has columns summing to 1, so P^T has rows summing to 1 and (P^T - I) sends the all-ones vector to 0, forcing det(P - I) = 0.",
                  "PageRank: pages as states, link splits plus damping as probabilities.",
                  "Ranking = stationary distribution, computed at scale by power iteration.",
                ],
              },
              {
                q: "A covariance matrix has eigenvalues 9, 3, 3. What fraction of variance do the top two principal components retain?",
                marks: 3,
              },
              {
                q: "State why the covariance matrix is symmetric and what that implies about its eigenvectors.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
  ],
  studyPlan: [
    {
      id: "weights",
      heading: "Exam weight map",
      body: [
        "RGPV AL-401 papers spread roughly 70 percent of the marks over recurrence relations, linear systems with determinants, and eigenvalue questions, while sets-relations and counting feed the definitional short questions that anchor every section. Allocate revision in the same ratio and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Solving linear recurrences: characteristic equation, distinct and repeated roots", weight: "10-14 marks", note: "Almost guaranteed; practise 6-8 full solves including one double root and verification." },
        { topic: "Linear systems: row reduction, consistency ranks, Gauss-Jordan inverse", weight: "10-12 marks", note: "Show every labelled row operation; the rank comparison is the marked line." },
        { topic: "Determinants, Cramer's rule and LU decomposition", weight: "8-10 marks", note: "Track swap signs; one Cramer solve and one LU factorisation per practice set." },
        { topic: "Eigenvalues, eigenvectors, diagonalization, Cayley-Hamilton", weight: "8-10 marks", note: "Quote trace and determinant checks; verify p(A) = 0 before power reduction." },
        { topic: "Graph theory: handshaking, Euler/Hamiltonian criteria, Prim and Kruskal traces", weight: "8-10 marks", note: "Present sorted edge lists with reject reasons; count odd degrees for Euler." },
        { topic: "Relations, equivalence classes, posets and Hasse diagrams, lattices", weight: "6-8 marks", note: "List the witness pairs for each property; Hasse diagrams draw only covers." },
        { topic: "Counting: permutations, combinations, pigeonhole, inclusion-exclusion", weight: "6-8 marks", note: "State the rule before computing; lcm in every inclusion-exclusion overlap." },
        { topic: "Vector spaces, basis/dimension, Gram-Schmidt", weight: "4-6 marks", note: "Three-line subspace proofs; carry fractions through Gram-Schmidt." },
        { topic: "Markov chains, stationary distributions and PCA", weight: "4-6 marks", note: "Verify columns sum to 1; state the symmetric-covariance property." },
        { topic: "Binomial theorem and Pascal identities", weight: "3-5 marks", note: "Prove row sums by substituting a = b = 1, never by expanding twice." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming a five-day week at two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing with a numpy/sympy verification session each weekend.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - sets, relations, orders, lattices", tasks: ["Set identities and power-set counts; property checks on 4 relations", "Equivalence classes of mod n; one Hasse diagram and lattice check daily", "Function classification and growth hierarchy; one Bell-number count"] },
        { week: "Week 2", focus: "Unit II - counting and recurrences", tasks: ["Sum/product, permutations vs combinations (committee problems)", "Pigeonhole proofs: divisibility and party theorem, written out", "4 recurrence solves (2 distinct roots, 1 repeated, 1 Fibonacci by generating functions)"] },
        { week: "Week 3", focus: "Unit III - graphs and trees", tasks: ["Handshaking and Havel-Hakimi on 5 sequences", "Euler/Hamiltonian verdicts on 6 graphs; one isomorphism proof", "Kruskal and Prim traces (3 each) with reject reasons; one colouring with bounds"] },
        { week: "Week 4", focus: "Unit IV - matrices and systems", tasks: ["Row-reduce 6 matrices to RREF; classify 4 systems by ranks", "Two Gauss-Jordan inverses verified by multiplication", "Determinants both routes; one Cramer solve and one LU with substitutions"] },
        { week: "Week 5", focus: "Unit V - spaces, eigenvalues, applications", tasks: ["Subspace proofs and basis checks (5 examples)", "Gram-Schmidt twice in exact fractions; 4 eigen-solves with P, D", "Cayley-Hamilton power reduction; one Markov stationary vector and one PCA variance split"] },
        { week: "Week 6", focus: "Full revision and timed papers", tasks: ["Two full papers under 3-hour timing", "Re-solve every recurrence and eigenvalue question from weeks 2 and 5", "Verify all matrix answers with numpy (np.linalg.eig, solve) and fix every arithmetic slip"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Recite the five formula clusters from memory: P(n, r)/C(n, r) family, characteristic equation recipe, rank-consistency table, eigenvalue pipeline, Gram-Schmidt loop.",
        "Redraw one Hasse diagram, one Pascal triangle row set, and one 2 x 2 eigen-worked ledger from scratch without notes.",
        "Re-derive the three verdicts of linear systems (none, one, infinite) from the rank criterion alone.",
        "Run one complete recurrence solve and one complete Gauss-Jordan inverse as speed drills - under 8 minutes each.",
        "Read the application summaries only: Koenigsberg degrees, PageRank as stationary vector, PCA as covariance eigenvectors.",
        "Verify yesterday's answers with numpy: np.linalg.eig, np.linalg.solve, np.linalg.det - mismatches teach more than new problems.",
        "Sleep on schedule: this paper rewards calm arithmetic over last-minute breadth.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Write definitions verbatim before any example - definition lines carry separate marks from the working.",
        "Label every row operation, every case split and every law cited; named steps earn method marks even when arithmetic later slips.",
        "For recurrences: characteristic equation, general solution, initial conditions, verification - four labelled stages, never fewer.",
        "For matrices: shapes above factors first; then one operation per line; verify inverses by multiplying back.",
        "For graph questions: draw the graph before testing criteria; for Kruskal show reject reasons beside rejected edges.",
        "For eigenvalue questions: quote the trace and determinant checks after finding roots - two free verification marks.",
        "Time-box: 2-3 mark questions in 4-6 minutes, 7-mark questions in 14-18 minutes, last 10 minutes for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Repeated-root recurrences without n-power blocks: (r - 2)^2 needs (A + Bn) 2^n, not A 2^n + B 2^n.",
        "Forgetting the sign flip after a row swap in determinant reduction - two swaps cancel, one does not.",
        "Using det(cA) = c det(A) instead of c^n det(A) - scaling a 3 x 3 by 2 multiplies the determinant by 8.",
        "Claiming non-Hamiltonian from Dirac failing - the theorem is sufficient only; C_6 has degree 2 yet is Hamiltonian.",
        "Hasse diagram edges for comparable but non-covering pairs, e.g. 1 to 12 in the divisibility poset.",
        "Adding raw counts in inclusion-exclusion with overlapping cases and skipping the lcm reduction of overlap terms.",
        "Switching between row- and column-stochastic conventions inside one Markov solution.",
        "Rounding during Gram-Schmidt before the final normalisation, then reporting drifted orthonormal vectors.",
      ],
    },
  ],
};
