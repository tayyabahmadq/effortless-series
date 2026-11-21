/**
 * Academics - RGPV CSE 3rd-semester subject: CS-302 Discrete Structure.
 *
 * Structure mirrors subject-ad-501.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const cs302: AcademicSubject = {
  id: "cs-302",
  code: "CS-302",
  title: "Discrete Structure",
  semester: "III Semester",
  program: "RGPV · Computer Science & Engineering",
  tagline:
    "The complete visual guide to discrete mathematics for CSE: sets and relations, logic and proofs, counting and recurrences, graph theory, and the algebraic structures behind lattices and Boolean algebra.",
  description:
    "Five units walk from the language of all of computer science - sets, relations and functions - through propositional and predicate logic with formal proofs, into counting techniques and recurrence relations solved with generating functions, then across graph theory from Euler circuits to colouring, and finally into groups, rings, lattices and Boolean algebra. Every section pairs the formal statement with a worked example, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#818cf8",
  emoji: "DS",
  unitCount: 5,
  totalSections: 38,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Set Theory, Relations and Functions",
      summary:
        "The substrate of the whole subject: sets and their algebra, Venn diagrams and identities, cardinality with inclusion-exclusion, Cartesian products, relations and their properties, equivalence relations and partitions, closures, and functions of every type.",
      chapter: {
        number: "01",
        title: "Sets, Relations and Functions",
        intro:
          "Unit I builds the vocabulary every later unit borrows: sets and set operations, Venn diagrams and algebraic identities, power sets and inclusion-exclusion counting, relations as sets of ordered pairs with their four defining properties, equivalence relations that partition, closure operations on relations, and finally functions classified as injective, surjective and bijective.",
        inOneBreath:
          "A set is an unordered collection of distinct elements; union, intersection, difference and complement obey De Morgan's and distributive laws; power sets have 2^n members; counting unions needs inclusion-exclusion; a relation is a subset of the Cartesian product; the big four properties are reflexive, symmetric, antisymmetric and transitive; an equivalence relation partitions its set into disjoint classes; closures are the smallest supersets fixing a property; and a function is a many-to-one total assignment classified by injectivity and surjectivity.",
        sections: [
          {
            number: "1.1",
            title: "Sets and set operations",
            body: [
              "A set is an unordered collection of distinct objects called its elements or members. We write sets with braces: A = {1, 2, 3}; membership is written with the Greek letter epsilon, so 2 is a member of A is true and 5 is not. Order and repetition do not matter, so {1,2,3}, {3,2,1} and {1,1,2,3} all name the same set. The empty set contains nothing and is a subset of every set. A set may be given in roster form by listing elements, or in set-builder form by a rule such as {x : x is an integer and x > 0}.",
              "A is a subset of B when every element of A also lies in B; a proper subset additionally requires A and B to be different. The power set of A is the set of all subsets of A: for A = {1, 2} the power set is { {}, {1}, {2}, {1,2} }, and in general a set with n elements has exactly 2^n subsets. The Cartesian product A cross B is the set of all ordered pairs (a, b) with a in A and b in B, and the cardinality of A is the number of elements it contains.",
              "Four operations build new sets from old. The union of A and B collects everything in either set; the intersection keeps only what is in both; the difference A minus B holds elements of A that are not in B; the complement of A, taken relative to a fixed universe U, is everything outside A. These operations obey algebraic laws as crisp as arithmetic: union and intersection distribute over each other, complement swaps them via De Morgan's laws, and union and intersection are associative, commutative and idempotent (A union A = A).",
              "A worked identity makes the laws concrete. To simplify (A intersect B) union (A intersect B complement), factor A out using the distributive law to get A intersect (B union B complement). Since B union B complement equals the universe U, the expression collapses to A intersect U, which is just A - every element of A regardless of whether it lies in B. Verifying by elements: take any x in A; whether x is in B or not, it lands in one of the two unioned pieces, and no element outside A can appear in either piece.",
              "Sets are the running substrate of computer science. A database table is a set of tuples; a type in a programming language denotes a set of values; the states of any finite machine form a finite set; a search index is a set of keywords. When a query asks for records matching A or B, a database engine computes a set union and often rewrites it using the same laws above to pick a cheaper execution plan. Mastering this vocabulary pays back in every theorem of Units II through V.",
            ],
            bullets: [
              "Set: an unordered collection of distinct elements; order and repetition are irrelevant, so {1,2,2} equals {1,2}.",
              "Subset vs proper subset: A is a subset of B when every element of A lies in B; proper subset adds A not equal to B.",
              "Power set: all subsets of A; |power set of A| = 2^|A| - the same power set that later powers nondeterminism conversions.",
              "Four operations: union, intersection, difference, and complement relative to a universe U.",
              "De Morgan's laws: (A union B) complement = A complement intersect B complement, and the dual with union and intersection swapped.",
              "Distributive laws: A union (B intersect C) = (A union B) intersect (A union C), and the dual with union and intersection swapped.",
              "Idempotent law: A union A = A and A intersect A = A - repeated conditions in a query add nothing.",
              "Worked identity: (A intersect B) union (A intersect B complement) = A intersect (B union B complement) = A intersect U = A.",
            ],
            table: {
              caption: "Set operations on A = {1, 2, 3, 4} and B = {3, 4, 5}.",
              headers: ["Operation", "Definition", "Result", "Size"],
              rows: [
                ["A union B", "elements in A or B", "{1, 2, 3, 4, 5}", "5"],
                ["A intersect B", "elements in both", "{3, 4}", "2"],
                ["A - B", "in A but not in B", "{1, 2}", "2"],
                ["B - A", "in B but not in A", "{5}", "1"],
                ["A complement (U = {1..6})", "in U but not in A", "{5, 6}", "2"],
              ],
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
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Learn the two distributive laws and De Morgan's laws cold: A union (B intersect C) = (A union B) intersect (A union C), and (A union B)' = A' intersect B'. They are the most frequently asked set identities in RGPV papers, usually as 'state and prove with a Venn diagram'.",
            },
            keyTerms: [
              { term: "Set", definition: "An unordered collection of distinct elements written inside braces, e.g. A = {1, 2, 3}." },
              { term: "Power set", definition: "The set of all subsets of A; it has exactly 2^|A| elements." },
              { term: "Universe U", definition: "The ambient set from which complements are drawn; every set under discussion lives inside U." },
              { term: "Cardinality |A|", definition: "The number of elements of A." },
              { term: "Disjoint sets", definition: "Sets whose intersection is empty." },
            ],
            examQuestions: [
              {
                q: "State and prove the distributive laws for sets and De Morgan's laws, and use them to simplify (A intersect B) union (A intersect B').",
                marks: 7,
                outline: [
                  "Define union, intersection and complement with notation.",
                  "State both distributive laws and both De Morgan's laws.",
                  "Prove A union (B intersect C) = (A union B) intersect (A union C) by the element method: take x in the left side, show it is in the right side, then the converse.",
                  "Prove De Morgan's law (A union B)' = A' intersect B' by element argument or by Venn diagram shading.",
                  "Simplify (A intersect B) union (A intersect B'): distribute to A intersect (B union B').",
                  "Apply the complement law B union B' = U, then the identity law A intersect U = A.",
                  "Conclude the expression equals A and verify with a concrete example, e.g. A = {1,2}, B = {2,3} over U = {1,2,3}.",
                ],
              },
              {
                q: "If A = {1, 2, 3, 4} and B = {3, 4, 5}, find A union B, A intersect B, A - B and B - A.",
                marks: 2,
              },
              {
                q: "How many subsets does a set with 4 elements have? List its subsets of size 2.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Venn diagrams and the algebra of sets",
            body: [
              "A Venn diagram draws the universe U as a rectangle and each set as a circle inside it; shading the region corresponding to an expression gives an instant picture of what it contains. With two sets there are four basic regions - elements in A only, in B only, in both, and in neither - and with three sets there are eight. Venn diagrams are a proof aid, not a proof: they verify identities for small configurations and suggest which algebraic laws to apply, but a complete exam answer pairs the picture with an element-wise argument.",
              "The algebra of sets is an algebra of two binary operations (union, intersection), one unary operation (complement) and two constants (U and the empty set). Because union and intersection are each commutative, associative and idempotent, and each distributes over the other, set expressions can be manipulated exactly like Boolean expressions - indeed this algebra is a Boolean algebra, the structure Unit V studies formally. De Morgan's laws are the pivot of the algebra: complement turns union into intersection and vice versa, so every identity has a dual obtained by swapping union with intersection and U with the empty set.",
              "A worked proof shows the method. Claim: A - (B union C) = (A - B) intersect (A - C). Element argument: x is in A - (B union C) means x is in A and x is not in (B union C); by De Morgan's law, not in (B union C) is the same as not in B and not in C; so x is in A, not in B, and not in C, which is exactly membership in (A - B) intersect (A - C). Every step reverses, so the two sets are equal. A Venn diagram confirms it: both expressions shade the region inside A but outside both B and C.",
              "The same algebra powers everyday software. A condition like 'not (logged in and verified)' simplifies by De Morgan to 'not logged in or not verified' - the rewrite a compiler or linter performs automatically. Symmetric difference, defined as (A union B) - (A intersect B), captures 'elements changed between two snapshots' and is the core of incremental backup and version-control diffing. Set algebra is therefore not just exam material but the exact calculus of feature flags, database joins and access-control lists.",
            ],
            bullets: [
              "Venn diagram: rectangle for U, circles for sets; shading verifies identities visually before proving them algebraically.",
              "Two sets give four regions; three sets give eight - label regions when counting with Venn diagrams.",
              "Dual of an identity: swap union with intersection and U with the empty set; every law has a dual.",
              "De Morgan's laws are the pivot: complement exchanges union and intersection.",
              "A - B equals A intersect B complement - difference is definable from intersection and complement.",
              "Symmetric difference A xor B = (A union B) - (A intersect B): elements in exactly one of the two sets.",
              "Worked identity: A - (B union C) = (A - B) intersect (A - C), proved by De Morgan's law.",
            ],
            table: {
              caption: "Region census for A = {1,2,3}, B = {3,4} over U = {1,2,3,4,5}.",
              headers: ["Region", "Condition", "Elements"],
              rows: [
                ["A only", "in A, not in B", "{1, 2}"],
                ["B only", "in B, not in A", "{4}"],
                ["A and B", "in both", "{3}"],
                ["Neither", "in U, in no circle", "{5}"],
                ["A xor B", "exactly one of A, B", "{1, 2, 4}"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The two families of set laws are duals",
              caption:
                "Swap union with intersection and U with the empty set to get the dual of any law.",
              left: {
                heading: "Union family",
                items: [
                  "A union A = A (idempotent)",
                  "A union U = U (domination)",
                  "A union (empty set) = A (identity)",
                  "A union A' = U (complement)",
                  "Distributes over intersection",
                ],
              },
              right: {
                heading: "Intersection family",
                items: [
                  "A intersect A = A (idempotent)",
                  "A intersect (empty set) = empty set (domination)",
                  "A intersect U = A (identity)",
                  "A intersect A' = empty set (complement)",
                  "Distributes over union",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Diagrams support, never replace, proofs",
              body: "RGPV examiners award proof marks for the element argument, not the picture. Always write: 'let x belong to the left-hand side ... therefore x belongs to the right-hand side', then note that the steps reverse. Attach the Venn diagram as confirmation worth one extra mark.",
            },
            keyTerms: [
              { term: "Venn diagram", definition: "A pictorial representation of sets as overlapping circles inside a rectangle representing U." },
              { term: "Duality", definition: "The principle that every set identity remains valid after swapping union/intersection and U/empty set." },
              { term: "Symmetric difference", definition: "(A union B) - (A intersect B): elements belonging to exactly one of the two sets." },
              { term: "Set difference", definition: "A - B = A intersect B complement: elements of A that are not in B." },
            ],
            examQuestions: [
              {
                q: "Prove using set algebra and Venn diagrams that A - (B union C) = (A - B) intersect (A - C). State the duality principle and give the dual of De Morgan's laws.",
                marks: 7,
                outline: [
                  "Define set difference as A intersect B complement.",
                  "Rewrite the left side: A - (B union C) = A intersect (B union C) complement.",
                  "Apply De Morgan's law: (B union C) complement = B complement intersect C complement.",
                  "Conclude A intersect B complement intersect C complement = (A - B) intersect (A - C).",
                  "Draw a three-set Venn diagram and shade both sides to confirm they coincide.",
                  "State the duality principle: swapping union/intersection and U/empty preserves truth.",
                  "Give the duals: (A intersect B) complement = A complement union B complement.",
                ],
              },
              {
                q: "Simplify (A union B) intersect (A union B') using the laws of set algebra.",
                marks: 3,
              },
              {
                q: "Express A xor B (symmetric difference) using union, intersection and complement, and evaluate it for A = {1,2}, B = {2,3}.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Cardinality, power sets and inclusion-exclusion",
            body: [
              "The cardinality of a finite set is simply the number of its elements, but combining cardinalities needs care because overlapping sets are counted twice. For two sets, |A union B| = |A| + |B| - |A intersect B|. For three sets the correction has two layers: |A union B union C| = |A| + |B| + |C| - |A intersect B| - |B intersect C| - |A intersect C| + |A intersect B intersect C|. This is the inclusion-exclusion principle: add the singletons, subtract the pairwise overlaps, add back the triple overlap. Each subtraction overshoots for elements in all three sets, so the final addition repairs the count.",
              "A worked example shows why both correction layers matter. In a class of 60 students, 35 study C, 30 study Java and 20 study Python; 12 study C and Java, 8 study Java and Python, 10 study C and Python, and 5 study all three. Students studying at least one language = 35 + 30 + 20 - 12 - 8 - 10 + 5 = 60. So every student studies some language, and the number studying none is 0. If the class had 65 students, 5 would study none - a typical exam twist obtained by subtraction from the total.",
              "The power set connects cardinality to combinatorics. A set with n elements has 2^n subsets because building a subset is n independent yes/no decisions, one per element. A useful refinement: the number of subsets with exactly k elements is 'n choose k' = n! / (k! (n-k)!), and summing over all k gives n choose 0 + n choose 1 + ... + n choose n = 2^n, the binomial theorem at k = 1. For A = {a, b, c, d}, subsets of size 2 number 4 choose 2 = 6: {a,b}, {a,c}, {a,d}, {b,c}, {b,d}, {c,d}.",
              "Inclusion-exclusion is the engine behind counting problems everywhere in computer science: counting the strings accepted by at least one of several patterns, the keys hit by a set of cache invalidations, or the pages matching any term of a search query. It also underlies the derangement formula of Unit III and the surjection-counting formula used when hashing. Whenever a problem says 'at least one of', the safe first move is to write the inclusion-exclusion expansion before touching numbers.",
            ],
            bullets: [
              "Two sets: |A union B| = |A| + |B| - |A intersect B| - subtracting removes the double count.",
              "Three sets: add singles, subtract pairwise intersections, add back the triple intersection.",
              "General principle: alternate signs over all intersections of 1, 2, 3, ... sets.",
              "Power set size: 2^n subsets, since each element is independently included or excluded.",
              "Binomial connection: sum of 'n choose k' for k = 0..n equals 2^n.",
              "Number of k-element subsets: n choose k = n! / (k! (n-k)!).",
              "Worked example: 35 + 30 + 20 - 12 - 8 - 10 + 5 = 60 students study at least one language.",
              "Complement trick: 'number with none' = total minus 'number with at least one'.",
            ],
            table: {
              caption: "Inclusion-exclusion bookkeeping for the 60-student class.",
              headers: ["Layer", "Sets counted", "Signed value", "Running total"],
              rows: [
                ["Add singles", "C, Java, Python", "+35 +30 +20 = +85", "85"],
                ["Subtract pairs", "C&Java, Java&Python, C&Python", "-12 -8 -10 = -30", "55"],
                ["Add triple", "C&Java&Python", "+5", "60"],
                ["Answer", "at least one language", "60 of 60 students", "0 study none"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Applying inclusion-exclusion to three sets",
              caption:
                "Each stage corrects the previous count - never skip a layer in the exam.",
              stages: [
                { label: "List |A|, |B|, |C|", note: "add all three" },
                { label: "Subtract pairwise intersections", note: "A&B, B&C, A&C" },
                { label: "Add back triple intersection", note: "A&B&C counted -1 too many times" },
                { label: "Compare with total", note: "total minus union = 'none of them'" },
              ],
            },
            callout: {
              type: "tip",
              title: "The 'at least one' trigger phrase",
              body: "Whenever an RGPV counting question says 'at least one of', 'some language', or 'any of', write the inclusion-exclusion formula first and fill numbers second. Marks are given for the correct signed expansion even when arithmetic slips.",
            },
            keyTerms: [
              { term: "Inclusion-exclusion principle", definition: "Alternating-sign formula counting the union of overlapping finite sets exactly." },
              { term: "Power set", definition: "The set of all subsets; size 2^n for an n-element set." },
              { term: "n choose k", definition: "The number of k-element subsets of an n-element set, n! / (k! (n-k)!)." },
              { term: "Cardinality", definition: "The number of elements of a set." },
            ],
            examQuestions: [
              {
                q: "State and prove the inclusion-exclusion principle for two and three sets, and solve: in a survey of 100 students, 45 like DBMS, 38 like OS, 40 like DS; 12 like DBMS and OS, 9 like OS and DS, 11 like DBMS and DS, and 4 like all three. How many like at least one subject, and how many like none?",
                marks: 7,
                outline: [
                  "State |A union B| = |A| + |B| - |A intersect B| with a two-circle Venn proof.",
                  "Extend to three sets with the full alternating-sign formula.",
                  "Justify the sign of each term: pairwise subtractions double-correct, the triple term repairs.",
                  "Substitute: 45 + 38 + 40 - 12 - 9 - 11 + 4 = 95.",
                  "Conclude 95 students like at least one subject.",
                  "Compute 'none' as 100 - 95 = 5 students.",
                  "Cross-check with a region-by-region Venn census (e.g. only DBMS = 45 - 12 - 11 + 4 = 26).",
                ],
              },
              {
                q: "How many subsets does a set of 5 elements have? How many of them have exactly 3 elements?",
                marks: 3,
              },
              {
                q: "If |A| = 20, |B| = 15 and |A intersect B| = 6, find |A union B| and |A - B|.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Cartesian products and binary relations",
            body: [
              "The Cartesian product A cross B is the set of all ordered pairs (a, b) with a in A and b in B. Order matters: (1, 2) and (2, 1) are different pairs, so A cross B and B cross A are generally different sets. If |A| = m and |B| = n then |A cross B| = m * n, since each of the m choices of first coordinate pairs with each of the n choices of second. For A = {1, 2} and B = {x, y, z}, A cross B has 6 pairs: (1,x), (1,y), (1,z), (2,x), (2,y), (2,z).",
              "A (binary) relation from A to B is any subset of A cross B; a relation on A is a subset of A cross A. Written R = {(a, b) : a is related to b}, it turns the vague word 'related' into an exact object. Example: on A = {1, 2, 3, 4}, the relation 'divides' is R = {(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)}. The domain of R is the set of first coordinates that actually occur, and the range is the set of second coordinates that occur.",
              "The standard way to see a relation on a small set at a glance is its matrix. Rows index the first coordinate, columns the second, and entry M[i][j] = 1 exactly when (a_i, a_j) is in R. The matrix of the divides relation on {1,2,3,4} has row 1 = (1,1,1,1) because 1 divides everything, and the diagonal is all 1s because every number divides itself - the matrix makes properties like reflexivity and symmetry visually checkable in seconds, and matrix multiplication computes relation composition.",
              "Relations generalise naturally: an n-ary relation is a subset of the product of n sets, and this is precisely the relational database model - a table is an n-ary relation, its attributes are the coordinate sets, and a join is a filtered Cartesian product. Foreign keys, composite keys and SQL's cross join all live inside the definition you just learned. In compiler work, the 'calls' relation between procedures and the 'depends on' relation between modules drive reachability analyses and build ordering.",
            ],
            bullets: [
              "Cartesian product A cross B: all ordered pairs; |A cross B| = |A| * |B|; order matters.",
              "A cross B and B cross A differ unless A = B or both are empty.",
              "Relation from A to B: any subset of A cross B; on A: any subset of A cross A.",
              "Domain = first coordinates used; range = second coordinates used.",
              "Relation matrix M[i][j] = 1 when (a_i, a_j) in R; the identity pattern on the diagonal shows reflexivity.",
              "Symmetry shows in the matrix as mirror symmetry about the main diagonal.",
              "Worked relation: 'divides' on {1,2,3,4} has 8 pairs, including (1,4) and (2,4) but not (4,1).",
              "Relational databases: a table is an n-ary relation; a join is a filtered Cartesian product.",
            ],
            table: {
              caption: "Relation matrix of 'divides' on A = {1, 2, 3, 4} (rows = first, columns = second).",
              headers: ["", "1", "2", "3", "4"],
              rows: [
                ["1", "1", "1", "1", "1"],
                ["2", "0", "1", "0", "1"],
                ["3", "0", "0", "1", "0"],
                ["4", "0", "0", "0", "1"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From sets to a relation and its matrix",
              caption:
                "Every arrow is one definitional step - reproduce this chain when asked to 'define a relation formally'.",
              steps: [
                { label: "Sets A and B", note: "e.g. A = B = {1,2,3,4}" },
                { label: "Cartesian product A cross B", note: "16 ordered pairs for 4x4" },
                { label: "Select subset R", note: "a rule such as 'a divides b'" },
                { label: "Relation matrix", note: "M[i][j] = 1 iff (a_i, a_j) in R" },
                { label: "Read properties off M", note: "diagonal, symmetry, transitivity" },
              ],
            },
            callout: {
              type: "tip",
              title: "Counting relations",
              body: "A favourite 3-mark question: 'How many relations are there on a set with n elements?' A relation on A is any subset of A cross A, which has n^2 pairs, so the answer is 2^(n^2). For n = 3 that is 2^9 = 512 relations.",
            },
            keyTerms: [
              { term: "Cartesian product", definition: "A cross B = {(a, b) : a in A, b in B}; ordered pairs, size |A| * |B|." },
              { term: "Binary relation", definition: "Any subset of A cross B; a rule (possibly arbitrary) pairing elements of A with elements of B." },
              { term: "Relation matrix", definition: "A 0/1 matrix with M[i][j] = 1 exactly when (a_i, a_j) belongs to the relation." },
              { term: "Domain and range", definition: "The set of first coordinates and the set of second coordinates that actually occur in R." },
            ],
            examQuestions: [
              {
                q: "Define the Cartesian product and a binary relation. For A = {1, 2, 3, 4}, construct the relation 'a divides b', write its relation matrix, and state its domain and range. How many relations exist on A in total?",
                marks: 7,
                outline: [
                  "Define A cross B with ordered pairs and note (1,2) differs from (2,1).",
                  "Define a relation as a subset of A cross B.",
                  "List R = 'divides': (1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4).",
                  "Draw the 4x4 0/1 matrix with row 1 all ones and an all-ones diagonal.",
                  "Domain = {1, 2, 3, 4}, range = {1, 2, 3, 4}.",
                  "Count: A cross A has n^2 = 16 pairs, so relations number 2^16 = 65536.",
                  "Optionally note the matrix diagonal proves reflexivity at a glance.",
                ],
              },
              {
                q: "If |A| = 3 and |B| = 4, find |A cross B| and |B cross A|. Are they equal as sets?",
                marks: 2,
              },
              {
                q: "Define domain and range of a relation R = {(1,2), (2,3), (3,3)} and state both.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Properties of relations: reflexive, symmetric, antisymmetric, transitive",
            body: [
              "Four properties classify relations, and every exam question about a relation starts by testing them. A relation R on A is reflexive when (a, a) is in R for every a in A - the matrix diagonal is all 1s. R is symmetric when (a, b) in R implies (b, a) in R - the matrix is mirror-symmetric about its diagonal. R is antisymmetric when (a, b) in R and (b, a) in R together force a = b - no off-diagonal 1/1 mirror pair exists. R is transitive when (a, b) in R and (b, c) in R imply (a, c) in R - shortcuts always exist.",
              "A worked classification: R = 'divides' on {1, 2, 3, 4} = {(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)}. Reflexive: yes, every (a, a) present. Symmetric: no, (1,2) is present but (2,1) is not. Antisymmetric: yes, the only mirrored pairs are the diagonal ones. Transitive: yes - check the chain (1,2) and (2,4): indeed (1,4) is present; every such chain closes. So 'divides' is reflexive, antisymmetric and transitive: a partial order, the kind of relation Unit V builds lattices on.",
              "Contrast with 'a + b is even' on {1, 2, 3, 4}: (a, a) holds since a + a = 2a is even, so reflexive; (a, b) and (b, a) have the same sum, so symmetric; antisymmetric fails because (1, 3) and (3, 1) both hold with 1 different from 3; transitive holds because even + even = even. So this relation is reflexive, symmetric and transitive - an equivalence relation, the kind that partitions a set. The two worked examples are the archetypes: order relations are antisymmetric, equivalence relations are symmetric, and neither is both.",
              "Transitivity is the property students mis-test, because it demands checking all chains, not just visible ones. Systematic method: for each pair (a, b) with a different from b in R, scan R again for pairs starting at b, and confirm (a, c) is present for every continuation (b, c). The matrix version is faster: compute M squared by Boolean matrix multiplication; R is transitive exactly when M squared has a 1 only where M already has a 1. In software, transitivity is what makes dependency graphs dangerous when cyclic - 'A needs B, B needs C' silently implies 'A needs C'.",
            ],
            bullets: [
              "Reflexive: every (a, a) in R; matrix diagonal all 1s. Test n pairs.",
              "Symmetric: (a, b) in R implies (b, a) in R; matrix mirror-symmetric.",
              "Antisymmetric: mirrored off-diagonal pairs are forbidden; a relation can be both non-symmetric and non-antisymmetric.",
              "Transitive: (a, b) and (b, c) in R force (a, c) in R; check every chain, not a sample.",
              "Matrix test for transitivity: Boolean square of M must not exceed M.",
              "Reflexive + antisymmetric + transitive = partial order (e.g. 'divides', 'subset of', 'less or equal').",
              "Reflexive + symmetric + transitive = equivalence relation (e.g. 'same parity', 'congruent mod n').",
              "Worked: 'divides' on {1,2,3,4} is a partial order; 'same parity' is an equivalence relation.",
            ],
            table: {
              caption: "Classifying two relations on A = {1, 2, 3, 4}.",
              headers: ["Property", "a divides b", "a + b is even"],
              rows: [
                ["Reflexive", "yes (diagonal present)", "yes (a + a = 2a)"],
                ["Symmetric", "no - (1,2) in R, (2,1) not", "yes (same sum)"],
                ["Antisymmetric", "yes (only diagonal mirrors)", "no - (1,3) and (3,1) both hold"],
                ["Transitive", "yes - all chains close", "yes - even + even = even"],
                ["Type", "partial order", "equivalence relation"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Where a relation lands after property testing",
              caption:
                "Test reflexive, symmetric/antisymmetric, transitive - then name the relation type.",
              start: "Relation R on set A",
              branches: [
                { label: "reflexive + symmetric + transitive", outcome: "equivalence relation - induces a partition into classes", good: true },
                { label: "reflexive + antisymmetric + transitive", outcome: "partial order - supports Hasse diagrams and lattices", good: true },
                { label: "fails transitivity (or reflexivity)", outcome: "neither - just a general relation; closures may repair it", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The empty relation is vacuously transitive",
              body: "On a nonempty set, the empty relation is not reflexive but is symmetric, antisymmetric and transitive (there is no chain to violate). Examiners love this corner case - state the 'no counterexample exists' argument explicitly.",
            },
            keyTerms: [
              { term: "Reflexive", definition: "(a, a) is in R for every a in A." },
              { term: "Antisymmetric", definition: "(a, b) and (b, a) in R together imply a = b." },
              { term: "Transitive", definition: "(a, b) and (b, c) in R imply (a, c) in R." },
              { term: "Partial order", definition: "A relation that is reflexive, antisymmetric and transitive." },
              { term: "Equivalence relation", definition: "A relation that is reflexive, symmetric and transitive." },
            ],
            examQuestions: [
              {
                q: "Define reflexive, symmetric, antisymmetric and transitive relations. For A = {1, 2, 3, 4} classify R = {(1,1), (1,2), (1,4), (2,2), (2,4), (3,3), (4,4)} and S = {(a, b) : a + b is even} with justification for each property.",
                marks: 7,
                outline: [
                  "Give the four definitions in matrix-friendly language.",
                  "Test R for reflexivity: diagonal (1,1), (2,2), (3,3), (4,4) all present - yes.",
                  "Test symmetry: (1,2) present but (2,1) absent - not symmetric; no off-diagonal mirrors - antisymmetric.",
                  "Test transitivity of R: chain (1,2) then (2,4) needs (1,4), which is present; all other chains close - transitive.",
                  "Conclude R is a partial order (in fact 'divides').",
                  "Test S: reflexive (a + a = 2a even), symmetric (same sum), transitive (even + even = even) - equivalence relation.",
                  "Note S is not antisymmetric: (1,3) and (3,1) both hold with 1 not equal to 3.",
                ],
              },
              {
                q: "Give an example of a relation on {a, b, c} that is symmetric but not antisymmetric, with justification.",
                marks: 3,
              },
              {
                q: "Is the empty relation on a nonempty set transitive? Why?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.6",
            title: "Equivalence relations and partitions",
            body: [
              "An equivalence relation is a relation that is reflexive, symmetric and transitive - the exact algebra of 'sameness'. Its fundamental theorem: an equivalence relation on a set A partitions A into disjoint, nonempty equivalence classes whose union is A. For an element a, the class [a] = { x in A : (a, x) in R } is the set of everything equivalent to a. Two classes are either identical or disjoint - never partially overlapping - because transitivity glues any element shared by two classes into both.",
              "A worked example: on A = {1, 2, 3, 4, 5, 6, 7}, take R = 'a and b leave the same remainder on division by 3' (congruence mod 3). Then [1] = {1, 4, 7}, [2] = {2, 5}, [3] = {3, 6}. Reflexive: a has the same remainder as itself. Symmetric: if a and b share a remainder, so do b and a. Transitive: if a and b share a remainder and b and c share one, a and c share it too. The three classes are disjoint and their union is all of A - a genuine partition, and these classes are exactly the residue classes used in hashing and modular arithmetic.",
              "The correspondence runs both ways, and the reverse direction is the exam favourite: every partition of A induces an equivalence relation by 'x and y lie in the same block'. If A is split into blocks {1, 4, 7}, {2, 5}, {3, 6}, the relation 'same block' is automatically reflexive (a is in its own block), symmetric (sharing a block is mutual) and transitive (two elements in the same block as a third are in the same block as each other). So equivalence relations and partitions are two views of one structure - the quotient set A/R = { [1], [2], [3] } is the set of blocks.",
              "Partitions are how software manages equivalence at scale. Union-Find (disjoint set union) maintains a dynamic partition and answers 'are x and y in the same class?' in near-constant time - the backbone of Kruskal's minimum spanning tree algorithm in Unit IV. Compiler type inference groups expressions into equivalence classes of types; network analysis groups users into connected communities; Java's equals/hashCode contract is precisely the requirement that equality be an equivalence relation so objects partition into hash buckets cleanly.",
            ],
            bullets: [
              "Equivalence relation = reflexive + symmetric + transitive: the algebra of 'sameness'.",
              "Equivalence class [a] = { x : (a, x) in R }; a always belongs to its own class.",
              "Fundamental theorem: the classes form a partition - disjoint, nonempty, union equals A.",
              "Two classes are either equal or disjoint; overlap forces equality by transitivity.",
              "Reverse direction: every partition induces the relation 'same block', which is an equivalence relation.",
              "Quotient set A/R = set of all classes; for mod 3 on {1..7} it is { {1,4,7}, {2,5}, {3,6} }.",
              "Worked classes: [1] = {1, 4, 7}, [2] = {2, 5}, [3] = {3, 6} - residue classes of 3.",
              "Applications: union-find, hashing buckets, type inference, equals/hashCode contracts.",
            ],
            table: {
              caption: "Equivalence classes of 'congruent mod 3' on A = {1..7}.",
              headers: ["Class", "Members", "Remainder mod 3"],
              rows: [
                ["[1]", "{1, 4, 7}", "1"],
                ["[2]", "{2, 5}", "2"],
                ["[3]", "{3, 6}", "0"],
                ["Check", "classes disjoint, union = A", "partition verified"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "One equivalence relation, one partition",
              caption:
                "Top layer is the whole set; each lower layer is one equivalence class.",
              layers: [
                { label: "A = {1, 2, 3, 4, 5, 6, 7}", note: "the whole universe, one equivalence relation R" },
                { label: "Class [1] = {1, 4, 7}", note: "remainder 1 mod 3" },
                { label: "Class [2] = {2, 5}", note: "remainder 2 mod 3" },
                { label: "Class [3] = {3, 6}", note: "remainder 0 mod 3" },
              ],
            },
            callout: {
              type: "exam",
              title: "Prove 'identical or disjoint' in two lines",
              body: "If classes [a] and [b] share an element x, then (a, x) and (b, x) are in R; symmetry gives (x, b), and transitivity gives (a, b), so [a] = [b]. Write this two-line argument whenever a question asks why equivalence classes form a partition - it is the single most reused proof in Unit I.",
            },
            keyTerms: [
              { term: "Equivalence class", definition: "[a] = { x in A : (a, x) in R }, the family of all elements equivalent to a." },
              { term: "Partition", definition: "A collection of disjoint nonempty blocks whose union is the whole set." },
              { term: "Quotient set A/R", definition: "The set of all equivalence classes of R on A." },
              { term: "Congruence mod n", definition: "The equivalence relation 'a and b leave the same remainder on division by n'." },
            ],
            examQuestions: [
              {
                q: "Define an equivalence relation. Show that congruence modulo 4 is an equivalence relation on the integers, find all equivalence classes on {1, 2, ..., 10}, and prove that any two equivalence classes are either identical or disjoint.",
                marks: 7,
                outline: [
                  "Define equivalence relation (reflexive, symmetric, transitive).",
                  "Verify reflexivity: a mod 4 = a mod 4.",
                  "Verify symmetry: equal remainders commute.",
                  "Verify transitivity: a = b and b = c mod 4 imply a = c mod 4 (chained equalities).",
                  "List classes on {1..10}: {1,5,9}, {2,6,10}, {3,7}, {4,8} - remainders 1, 2, 3, 0.",
                  "Prove the identical-or-disjoint lemma via symmetry plus transitivity in two lines.",
                  "Conclude the four classes form a partition of {1..10}; note the quotient set has 4 elements.",
                ],
              },
              {
                q: "On A = {a, b, c}, write the smallest equivalence relation containing (a, b) and list all equivalence classes.",
                marks: 3,
              },
              {
                q: "How many equivalence relations exist on a 2-element set? Justify by listing partitions.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.7",
            title: "Closures of relations and Warshall's algorithm",
            body: [
              "A closure of a relation R is the smallest superset of R that has a wanted property. Three closures matter: the reflexive closure adds every missing diagonal pair, R union Delta; the symmetric closure adds every missing mirror pair, R union R inverse; the transitive closure adds every pair (a, c) connected by a chain of R-pairs - 'a can reach c in one or more steps'. The word 'smallest' is doing the work: we are not allowed to throw anything away, only to add the minimum that makes the property true.",
              "Worked example on A = {1, 2, 3} with R = {(1,2), (2,3), (3,1)}. Reflexive closure: add (1,1), (2,2), (3,3). Symmetric closure: add (2,1), (3,2), (1,3). Transitive closure: from the chain 1 -> 2 -> 3 we need (1,3); from 2 -> 3 -> 1 we need (2,1); from 3 -> 1 -> 2 we need (3,2); and now longer chains appear - (1,2) plus the new (2,1) needs (1,1), and so on until every pair is present. This R is a single directed cycle, so its transitive closure is the complete relation A cross A - a satisfying check that iteration was done correctly.",
              "The systematic tool is Warshall's algorithm, which computes the transitive closure from the relation matrix in three nested loops. At stage k it asks: may the path from i to j now pass through vertex k? and updates M[i][j] = M[i][j] or (M[i][k] and M[k][j]). After running k over all vertices, M is the transitive closure. On our 3-cycle the algorithm fills the matrix to all 1s in three passes. Warshall runs in O(n^3) time with O(n^2) memory - the same complexity as matrix multiplication, and the Boolean-or/and operations replace multiply/add.",
              "Closures are everywhere in computing. The transitive closure of the 'calls' graph finds all procedures a function can indirectly reach - the basis of call-graph analysis and interprocedural dataflow. Database recursion (SQL recursive CTEs, Datalog fixpoint evaluation) literally computes transitive closures of stored relations: 'all components of a part' from a bills-of-materials table. In compilers, the reflexive-transitive closure describes zero or more derivation steps, and in Unit II this idea reappears as the Kleene star of formal language theory.",
            ],
            bullets: [
              "Closure = smallest superset of R with a property; never remove pairs, only add the minimum.",
              "Reflexive closure: R union {(a, a) : a in A} - fill the matrix diagonal.",
              "Symmetric closure: R union R inverse - mirror every off-diagonal 1.",
              "Transitive closure: all (a, c) with a path a -> ... -> c; matrix becomes 'reachability'.",
              "Warshall's algorithm: M[i][j] = M[i][j] or (M[i][k] and M[k][j]) for k = 1..n; O(n^3).",
              "Worked: R = {(1,2), (2,3), (3,1)} is a cycle, so its transitive closure is all 9 pairs.",
              "Row shortcut: transitive closure row i = union of matrix rows reachable from row i.",
              "Applications: call graphs, SQL recursive queries, bills-of-materials explosion, fixpoint computation.",
            ],
            table: {
              caption: "Warshall's algorithm on the 3-cycle R = {(1,2), (2,3), (3,1)}.",
              headers: ["Stage", "Test", "Matrix change"],
              rows: [
                ["k = 1", "via vertex 1: (3,1)&(1,2) -> (3,2)", "add (3,2)"],
                ["k = 2", "via vertex 2: (1,2)&(2,3) -> (1,3); (3,2)&(2,3) -> (3,3)", "add (1,3), (3,3)"],
                ["k = 3", "via vertex 3: fills (1,1), (2,1), (2,2), (2,3) kept", "matrix all 1s"],
                ["Result", "transitive closure = A cross A", "9 pairs, complete relation"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Computing closures of R in exam order",
              caption:
                "Reflexive and symmetric closures are one-line unions; transitive closure needs iteration.",
              stages: [
                { label: "Start with R", note: "list the given pairs" },
                { label: "Reflexive closure", note: "add missing (a, a) pairs" },
                { label: "Symmetric closure", note: "add missing mirrored pairs" },
                { label: "Transitive closure", note: "Warshall: route through each k in turn" },
                { label: "Verify smallestness", note: "no added pair can be removed without breaking the property" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the digraph before Warshall",
              body: "Sketch R as arrows between vertices, run Warshall layer by layer, and re-draw after each pass. Examiners award method marks for each completed pass, and the picture catches transcription slips that a naked matrix computation hides.",
            },
            keyTerms: [
              { term: "Reflexive closure", definition: "R union {(a, a)}: the smallest reflexive relation containing R." },
              { term: "Transitive closure", definition: "The smallest transitive superset of R: pair (a, c) belongs exactly when a reaches c through one or more R steps." },
              { term: "Warshall's algorithm", definition: "O(n^3) dynamic program computing the transitive closure by allowing each vertex k as an intermediate stop." },
              { term: "Converse (inverse) relation", definition: "R inverse = {(b, a) : (a, b) in R}; used to build the symmetric closure." },
            ],
            examQuestions: [
              {
                q: "Define the reflexive, symmetric and transitive closures of a relation. For R = {(1,2), (2,3), (3,1)} on A = {1, 2, 3}, find all three closures and verify the transitive closure using Warshall's algorithm, showing each pass.",
                marks: 7,
                outline: [
                  "Define closure as the smallest superset with the property.",
                  "Reflexive closure = R union {(1,1), (2,2), (3,3)}.",
                  "Symmetric closure = R union {(2,1), (3,2), (1,3)}.",
                  "Set up the 3x3 0/1 matrix of R and explain Warshall's update M[i][j] = M[i][j] or (M[i][k] and M[k][j]).",
                  "Pass k = 1: add (3,2).",
                  "Pass k = 2: add (1,3) and (3,3).",
                  "Pass k = 3: fill remaining entries; conclude closure is A cross A and sanity-check with the cycle structure.",
                ],
              },
              {
                q: "Find the symmetric closure of R = {(a, b), (b, c)} on {a, b, c}.",
                marks: 2,
              },
              {
                q: "State the Warshall update formula and its time complexity.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.8",
            title: "Functions: injective, surjective and bijective",
            body: [
              "A function f from A to B is a relation in which every element of A is related to exactly one element of B: no element of A is left out (totality) and none is sent to two places (well-definedness). We write f: A -> B, call A the domain and B the codomain; the range is the set of values actually hit. This 'many-to-one total assignment' is stricter than an arbitrary relation, and that strictness is exactly what makes functions computable - a program with one entry and one output per input.",
              "Three classifications exhaust all functions. f is injective (one-to-one) when different inputs give different outputs: f(a1) = f(a2) forces a1 = a2. f is surjective (onto) when every element of the codomain is hit: for each b there is an a with f(a) = b, so range = codomain. f is bijective when both hold - a perfect matching between domain and codomain, which is the only situation where an inverse function f inverse exists with f inverse(f(a)) = a. A bijection between finite sets also proves |A| = |B|, the trick behind all of combinatorics.",
              "Worked examples on A = {1, 2, 3}, B = {a, b, c, d}. f(1) = a, f(2) = b, f(3) = c: injective (no repeat images) but not surjective (d is never hit). g(1) = a, g(2) = a, g(3) = b: not injective (1 and 2 collide) and not surjective (c, d unhit). No function from A to B here is surjective... unless B shrinks to {a, b, c}, where f becomes bijective and f inverse = {a -> 1, b -> 2, c -> 3}. The pigeonhole principle explains the pattern: 3 pigeons into 4 holes cannot cover all holes; 4 pigeons into 3 holes must collide.",
              "Function composition chains functions: (g after f)(x) = g(f(x)), defined when the range of f sits inside the domain of g. Composition is associative but not commutative - order matters. Key facts used constantly: the composition of injective functions is injective, of surjective functions is surjective, and of bijections is a bijection. Bijections are the formal device behind counting ('n choose k' arguments in Unit III), behind cryptography (a permutation of the alphabet is a bijection), and behind hash tables when a perfect hash exists. Checking whether a piece of code implements a total, well-defined function is the same test whether the language is Python or mathematics.",
            ],
            bullets: [
              "Function: total (every domain element used) and well-defined (exactly one image per input).",
              "Injective: f(a1) = f(a2) implies a1 = a2; no two inputs share an output.",
              "Surjective: range equals codomain; every target value is hit.",
              "Bijective: both at once; the inverse function exists and is unique.",
              "Finite sets: a bijection exists between A and B iff |A| = |B| - the counting principle of Unit III.",
              "Pigeonhole corollary: if |A| > |B| no function A -> B is injective; if |A| < |B| none is surjective.",
              "Composition (g after f)(x) = g(f(x)): associative, not commutative; preserves injectivity, surjectivity, bijectivity.",
              "Worked: f(1)=a, f(2)=b, f(3)=c into {a,b,c,d} is injective but not surjective.",
            ],
            table: {
              caption: "Classification of sample functions from A = {1, 2, 3} to B = {a, b, c, d}.",
              headers: ["Function", "Pairs", "Injective?", "Surjective?"],
              rows: [
                ["f", "(1,a), (2,b), (3,c)", "yes - distinct images", "no - d never hit"],
                ["g", "(1,a), (2,a), (3,b)", "no - 1 and 2 collide", "no - c, d unhit"],
                ["f restricted to codomain {a,b,c}", "(1,a), (2,b), (3,c)", "yes", "yes - bijective"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The four function types at a glance",
              caption:
                "Axes: injective or not (horizontal), surjective or not (vertical).",
              axes: { x: "Injective -> Not injective", y: "Surjective -> Not surjective" },
              quadrants: [
                { label: "Injective + surjective = bijective", note: "inverse exists; possible only when |A| <= |B| and range = codomain" },
                { label: "Injective but not surjective", note: "embedding; needs |A| <= |B|; e.g. f above" },
                { label: "Surjective but not injective", note: "needs |A| >= |B|; many-to-one covering" },
                { label: "Neither", note: "collisions and misses; e.g. g above" },
              ],
            },
            callout: {
              type: "warning",
              title: "Surjectivity depends on the codomain, not the rule",
              body: "The rule f(n) = n + 1 is surjective onto the integers but not onto the naturals. When an exam question asks 'is f onto?', always check against the codomain actually stated - changing the codomain changes the answer without changing the rule.",
            },
            keyTerms: [
              { term: "Injective (one-to-one)", definition: "Distinct inputs always give distinct outputs." },
              { term: "Surjective (onto)", definition: "Every element of the codomain is the image of some input; range = codomain." },
              { term: "Bijective", definition: "Injective and surjective; admits an inverse function." },
              { term: "Composition", definition: "(g after f)(x) = g(f(x)); associative but not commutative." },
              { term: "Codomain vs range", definition: "Codomain is the declared target set; range is the subset actually hit." },
            ],
            examQuestions: [
              {
                q: "Define injective, surjective and bijective functions with examples. Let A = {1, 2, 3, 4} and B = {a, b, c, d}; construct (i) a bijection, (ii) a function that is injective but not surjective on a codomain of five symbols, and (iii) a surjective but not injective function to B = {a, b}. State when f inverse exists.",
                marks: 7,
                outline: [
                  "Define the three types plus the inverse condition.",
                  "(i) Bijection: (1,a), (2,b), (3,c), (4,d) - perfect matching.",
                  "(ii) Into {a,b,c,d,e}: (1,a), (2,b), (3,c), (4,d) - injective, e unhit.",
                  "(iii) Into {a, b}: (1,a), (2,b), (3,a), (4,b) - onto, collision 1/3.",
                  "Justify with the pigeonhole bound: |A| = |B| for bijection, |A| > |B| forbids injective, |A| < |B| forbids surjective.",
                  "State f inverse exists iff f is bijective, with f(f inverse(b)) = b.",
                  "Note composition of bijections is a bijection.",
                ],
              },
              {
                q: "For f(x) = 2x + 1 on the integers, prove f is a bijection and find f inverse.",
                marks: 3,
              },
              {
                q: "If |A| = 5 and |B| = 3, can a function from A to B be injective? Why?",
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
      title: "Mathematical Logic and Proof Techniques",
      summary:
        "Propositional logic with truth tables, tautologies and normal forms; predicate logic with quantifiers; the rules of inference that turn premises into conclusions; and the three proof methods - direct, contrapositive, contradiction - crowned by mathematical induction.",
      chapter: {
        number: "02",
        title: "Propositions, Predicates, Inference and Induction",
        intro:
          "Unit II formalises reasoning itself. Propositions and connectives build truth tables; tautology and equivalence organise them; DNF and CNF give every statement a standard shape; quantifiers let us speak about whole collections; inference rules chain true premises into guaranteed conclusions; and direct proof, contraposition, contradiction and induction are the four workhorses of every later proof in the syllabus.",
        inOneBreath:
          "A proposition is a statement that is true or false; connectives are and, or, not, implies, iff; tautologies are always true and give logical equivalences; every formula has DNF and CNF forms built from minterms; predicates plus for-all and there-exists quantifiers handle variables, with negation flipping the quantifier; modus ponens and friends convert premises into conclusions soundly; proofs come in direct, contrapositive, contradiction and induction flavours; induction = base case + inductive step, and it proves infinitely many statements at once.",
        sections: [
          {
            number: "2.1",
            title: "Propositions, connectives and truth tables",
            body: [
              "A proposition is a declarative sentence that is definitively true or false - never both, never neither. '5 is a prime number' is a proposition with truth value true; 'x + 2 = 7' is not a proposition until x is given a value, because its truth depends on the variable. Commands ('close the door'), questions ('is it raining?') and paradoxes ('this sentence is false') are not propositions. Propositional logic is the study of how new propositions are built from old ones using logical connectives, and of how the truth of the compound statement depends on the truth of its parts.",
              "Five connectives do all the work: negation (not p, true when p is false), conjunction (p and q, true only when both are true), disjunction (p or q, true when at least one is true - the inclusive or), implication (p implies q, false only when p is true and q is false), and biconditional (p if and only if q, true when both sides match). The implication row surprises everyone: a false antecedent makes the implication vacuously true, so 'if the moon is cheese then 2 + 2 = 4' is a true statement in logic. This convention keeps inference sound - from false premises nothing can be derived.",
              "A truth table enumerates every assignment of truth values to the atomic propositions and computes the compound value column by column. For n atomic propositions there are 2^n rows, so three atoms need 8 rows. Build compound columns from the inside out: first the negations, then the inner conjunctions and disjunctions, then the outer connective. The final column is the identity card of the formula - two formulas are logically equivalent exactly when their final columns agree in every row, which is how the equivalence laws of the next section are verified.",
              "Worked example: tabulate (p and q) implies p. Rows: (T,T) gives (T and T)=T, T implies T is T; (T,F) gives (T and F)=F, F implies T is T; (F,T) gives F, F implies T is T; (F,F) gives F, F implies F is T. The final column is all true - a tautology, confirming the intuition that a conjunction always implies its own conjuncts. In computer science this entire machinery is the semantics of Boolean expressions: short-circuit evaluation, bitwise operators on flags, and the correctness conditions of digital circuits are all truth tables in disguise, and query optimizers use the very equivalences the tables reveal.",
            ],
            bullets: [
              "Proposition: declarative sentence with a definite truth value; open formulas with variables do not qualify.",
              "Negation flips truth; conjunction true only on TT; disjunction true unless FF.",
              "Implication p -> q is false only in the single row T,F; vacuously true when p is false.",
              "Biconditional p <-> q is true exactly when p and q match.",
              "Truth table size: 2^n rows for n atomic propositions; build columns inside-out.",
              "Logically equivalent: identical final columns over all rows.",
              "Worked tautology: (p and q) -> p is true in all four rows.",
              "CS connection: Boolean expressions, short-circuit evaluation and circuit design are truth tables in action.",
            ],
            table: {
              caption: "Full truth table for (p and q) implies p.",
              headers: ["p", "q", "p and q", "(p and q) -> p"],
              rows: [
                ["T", "T", "T", "T"],
                ["T", "F", "F", "T"],
                ["F", "T", "F", "T"],
                ["F", "F", "F", "T"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building a truth table correctly",
              caption:
                "One systematic pass per column - this is the exact order examiners expect to see.",
              steps: [
                { label: "Count atoms, list 2^n rows", note: "p, q -> 4 rows; p,q,r -> 8 rows" },
                { label: "Fill atom columns", note: "use the standard T/F halving pattern" },
                { label: "Inner subexpressions first", note: "negations, then conjunctions/disjunctions" },
                { label: "Outer connective last", note: "final column decides the formula's type" },
                { label: "Compare final columns", note: "same column on two formulas = equivalence" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise the implication's only false row",
              body: "p -> q is false only when p is T and q is F. Every implication question - contrapositive, converse, proof by contradiction - pivots on this single row. Also remember: the converse q -> p and the contrapositive (not q) -> (not p) are different statements; only the contrapositive is equivalent to the original.",
            },
            keyTerms: [
              { term: "Proposition", definition: "A declarative sentence that is either true or false, but not both." },
              { term: "Truth table", definition: "A table enumerating all 2^n assignments of truth values and the resulting value of a compound formula." },
              { term: "Inclusive or", definition: "Disjunction p or q, true when at least one of p, q is true." },
              { term: "Vacuous truth", definition: "An implication with a false antecedent is automatically true." },
              { term: "Logical equivalence", definition: "Two formulas whose truth tables agree row for row." },
            ],
            examQuestions: [
              {
                q: "Define a proposition and the five logical connectives. Construct the truth table of (p or q) -> (p and q) and state clearly under which assignments the formula is false. Is the formula a tautology?",
                marks: 7,
                outline: [
                  "Define proposition; give one example and one non-example.",
                  "Define not, and, or, implies, iff with their truth conditions.",
                  "Set up 4 rows for atoms p and q.",
                  "Compute the p or q column: T, T, T, F.",
                  "Compute the p and q column: T, F, F, F.",
                  "Apply the implication rule row by row: F only where (p or q) is T and (p and q) is F - rows 2 and 3.",
                  "Conclude the formula is false when exactly one of p, q holds; hence not a tautology (it is a contingency).",
                ],
              },
              {
                q: "Construct the truth table of p xor q (exclusive or) using only not, and, or.",
                marks: 3,
              },
              {
                q: "Under what condition is the statement 'if 2 is odd then 3 is even' evaluated in logic? Give its truth value.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Tautology, contradiction, contingency and logical equivalences",
            body: [
              "A tautology is a formula true in every row of its truth table; a contradiction is false in every row; a contingency is true in some rows and false in others. Tautologies matter because each one is a reusable reasoning licence: p or (not p) is the law of excluded middle, (p and (p -> q)) -> q is modus ponens, and (p -> q) and (q -> r) implies (p -> r) is hypothetical syllogism. Contradictions matter equally: showing that an assumption produces a contradiction is the engine of proof by contradiction in section 2.6.",
              "The equivalence laws are the algebra of logic, and each is verified by matching truth-table columns. The big ones: double negation (not not p equals p); De Morgan's laws (not (p and q) equals not p or not q, and not (p or q) equals not p and not q); distributive laws (p and (q or r) equals (p and q) or (p and r) and the dual); implication rewrite (p -> q equals not p or q); contrapositive (p -> q equals (not q) -> (not p)); absorption (p or (p and q) equals p); and idempotence (p and p equals p). Master these eight and almost every simplification an exam asks for falls out in two or three steps.",
              "A worked simplification: show (p and q) or (p and not q) equals p. Distribute: (p and q) or (p and not q) equals p and (q or not q). Excluded middle: q or not q is T. Identity: p and T equals p. Done - and the shape is exactly the set-identity proof of section 1.1, because logic and set algebra are the same structure. A second one: not (p -> q) equals not (not p or q) by the implication rewrite, which by De Morgan equals p and not q - the fact that 'an implication fails' means 'antecedent true, consequent false'.",
              "These laws are executable, not decorative. Compilers simplify conditions with them before code generation; circuit synthesizers minimise gates using algebraic rewrites; database optimizers rewrite WHERE clauses; and program verifiers discharge proof obligations that are literally tautology checks. The SAT problem - deciding whether a formula is satisfiable (true in at least one row) - sits at the heart of complexity theory and is solved daily by industrial tools scheduling chips, trains and cloud workloads. Tautology, contradiction and satisfiability are the three fates of a formula: always true, always false, or true somewhere.",
            ],
            bullets: [
              "Tautology: all rows true; contradiction: all rows false; contingency: mixed.",
              "Excluded middle: p or (not p); law of non-contradiction: not (p and not p).",
              "De Morgan's laws: not (p and q) = (not p) or (not q); not (p or q) = (not p) and (not q).",
              "Implication rewrite: p -> q = (not p) or q - the bridge to normal forms.",
              "Contrapositive law: p -> q = (not q) -> (not p); the converse q -> p is NOT equivalent.",
              "Distributive, absorption and idempotence laws mirror set algebra exactly.",
              "Worked: (p and q) or (p and not q) = p and (q or not q) = p and T = p.",
              "Worked: not (p -> q) = p and (not q) - 'implication fails' means 'antecedent true, consequent false'.",
            ],
            table: {
              caption: "Verifying De Morgan's first law by truth table.",
              headers: ["p", "q", "p and q", "not (p and q)", "(not p) or (not q)"],
              rows: [
                ["T", "T", "T", "F", "F"],
                ["T", "F", "F", "T", "T"],
                ["F", "T", "F", "T", "T"],
                ["F", "F", "F", "T", "T"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Tautology vs contradiction",
              caption:
                "Both extremes are useful: tautologies are inference licences, contradictions kill assumptions.",
              left: {
                heading: "Tautology (all rows T)",
                items: [
                  "p or (not p) - excluded middle",
                  "(p and (p -> q)) -> q - modus ponens",
                  "p -> p - identity of implication",
                  "Use: justifies every inference rule",
                  "Use: proof by cases and by exhaustion",
                ],
              },
              right: {
                heading: "Contradiction (all rows F)",
                items: [
                  "p and (not p) - the impossible pair",
                  "(p -> q) and (p -> (not q)) - inconsistent premises",
                  "Use: proof by contradiction method",
                  "Use: showing a system of constraints is infeasible",
                  "Detect via: final column all F",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The three-line simplification template",
              body: "Most 'show the equivalence' questions need: (1) rewrite implications as not-p or q; (2) apply De Morgan or distribution; (3) collapse with a complement law (q or not q = T). Announce each law by name while applying it - named steps earn method marks even if arithmetic later slips.",
            },
            keyTerms: [
              { term: "Tautology", definition: "A formula true under every truth assignment." },
              { term: "Contradiction", definition: "A formula false under every truth assignment." },
              { term: "Contingency", definition: "A formula true under at least one assignment and false under at least one." },
              { term: "De Morgan's laws", definition: "Negation distributes over and/or by flipping it to the other connective." },
              { term: "Contrapositive", definition: "(not q) -> (not p), logically equivalent to p -> q." },
            ],
            examQuestions: [
              {
                q: "Define tautology, contradiction and contingency. Using truth tables and named laws, prove that (p -> q) equals (not p) or q, and that the negation of (p -> q) equals p and (not q). Show the full working with law names.",
                marks: 7,
                outline: [
                  "Give the three definitions with one example each.",
                  "Truth-table proof of p -> q = (not p) or q: build columns for not p, (not p) or q, p -> q; show they match.",
                  "Name the law used: implication rewrite.",
                  "Negate: not (p -> q) = not ((not p) or q).",
                  "Apply De Morgan: = p and (not q).",
                  "Confirm with a truth table: the negation column is T only on the row T, F.",
                  "Interpret: an implication fails exactly when antecedent is true and consequent is false.",
                ],
              },
              {
                q: "Simplify (p and q) or (p and (not q)) using the laws of logic, naming each law.",
                marks: 3,
              },
              {
                q: "Show that p <-> (not (not p)) is a tautology by truth table.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Normal forms: DNF, CNF and the switching function view",
            body: [
              "Every propositional formula, however tangled, can be mechanically rewritten into one of two standard shapes. Disjunctive normal form (DNF) is an OR of ANDs: a disjunction of terms, each term a conjunction of literals (a literal is an atom or its negation), each term mentioning every variable at most once. Conjunctive normal form (CNF) is the mirror image: an AND of ORs. DNF reads naturally as 'list the rows where the formula is true'; CNF reads as 'list the constraints that must all hold'.",
              "The recipe for DNF: build the truth table, select every row whose final column is true, write one minterm per such row - a conjunction that is true exactly on that row (variable if T, negated variable if F) - and OR the minterms together. For CNF, select the false rows, write one maxterm per row (variable if F, negated if T, so the maxterm is false exactly there), and AND them. The two constructions are duals; either yields a formula equivalent to the original, and both always exist. A formula true in no rows gets the DNF of a single impossible minterm pattern; a formula true in all rows is an empty conjunction, taken as T.",
              "Worked example: f(p, q) true on rows (T,F) and (F,T) - that is exclusive or. Minterms: p and (not q) for the first row; (not p) and q for the second. DNF: (p and (not q)) or ((not p) and q). For CNF, false rows are (T,T) and (F,F): maxterms (not p) or (not q) and p or q. CNF: ((not p) or (not q)) and (p or q). Check one row: at (T,T) the first maxterm is F, so the conjunction is F - matching the table. This mechanical translation is a guaranteed full-marks method whenever a question says 'express in DNF/CNF'.",
              "Normal forms are not exam trivia - they run the digital world. DNF is a two-level circuit: one AND layer feeding one OR gate, the shape of a sum-of-products PLA. CNF is the input format of every SAT solver (DIMACS format is literally CNF) and the constraint language of verification tools. Karnaugh maps in digital electronics are a graphic minimiser for DNF; Quine-McCluskey automates the same reduction. When you express a circuit's specification in DNF and then minimise, you are doing the exact skill this section teaches.",
            ],
            bullets: [
              "Literal: a variable or its negation; minterm: conjunction of literals true on exactly one row.",
              "DNF = OR of minterms from the true rows of the truth table.",
              "CNF = AND of maxterms from the false rows; maxterm is a disjunction false on exactly one row.",
              "Minterm encoding: variable as-is when T, negated when F; maxterm encoding is the reverse.",
              "Both normal forms always exist and are equivalent to the original formula.",
              "Worked: XOR = (p and (not q)) or ((not p) and q) in DNF; = ((not p) or (not q)) and (p or q) in CNF.",
              "DNF simplifies by combining minterms differing in one literal: p q r or p q (not r) collapses to p q.",
              "CS link: sum-of-products circuits, SAT solvers and K-maps all consume normal forms.",
            ],
            table: {
              caption: "Truth table of XOR with minterm/maxterm annotations.",
              headers: ["p", "q", "f = p xor q", "Minterm (true rows)", "Maxterm (false rows)"],
              rows: [
                ["T", "T", "F", "-", "(not p) or (not q)"],
                ["T", "F", "T", "p and (not q)", "-"],
                ["F", "T", "T", "(not p) and q", "-"],
                ["F", "F", "F", "-", "p or q"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From truth table to normal form",
              caption:
                "A mechanical five-stage recipe - follow it verbatim in the exam for guaranteed marks.",
              stages: [
                { label: "Build the full truth table", note: "2^n rows, final column of f" },
                { label: "Split rows by final value", note: "true rows for DNF, false rows for CNF" },
                { label: "Write one term per row", note: "minterm: T = plain, F = negated; maxterm reversed" },
                { label: "Join terms", note: "OR the minterms (DNF) or AND the maxterms (CNF)" },
                { label: "Simplify by absorption", note: "optional; combine terms differing in one literal" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not mix encodings",
              body: "The most common DNF slip: negating the variable when the row value is T. Remember: in a minterm the literal matches the row (T -> plain, F -> negated); in a maxterm it is the opposite (F -> plain, T -> negated). Write the rule in the margin before you start.",
            },
            keyTerms: [
              { term: "Literal", definition: "A propositional variable or its negation." },
              { term: "Minterm", definition: "A conjunction of literals that is true for exactly one assignment." },
              { term: "Maxterm", definition: "A disjunction of literals that is false for exactly one assignment." },
              { term: "DNF", definition: "Disjunctive normal form: an OR of minterms; also the sum-of-products form of circuits." },
              { term: "CNF", definition: "Conjunctive normal form: an AND of maxterms; the standard SAT-solver input." },
            ],
            examQuestions: [
              {
                q: "Define DNF and CNF. For f(p, q, r) = (p and q) or r, construct the truth table and derive both the DNF and the CNF, simplifying where possible.",
                marks: 7,
                outline: [
                  "Define literal, minterm, maxterm, DNF, CNF.",
                  "Build the 8-row truth table; f is true when r is true or when both p and q are true.",
                  "True rows: all with r = T (4 rows) plus (T, T, F) - 5 minterms.",
                  "Write DNF: r or (p and q and (not r)) - absorb the r = T minterms into bare r.",
                  "False rows: r = F and not both p, q - three maxterms: (not r or not p) ... systematically.",
                  "Assemble CNF: (r or p) and (r or q); verify each false row kills one conjunction factor.",
                  "Conclude DNF = r or (p and q and not r), CNF = (p or r) and (q or r).",
                ],
              },
              {
                q: "Express p xor q in DNF and in CNF.",
                marks: 3,
              },
              {
                q: "What is a literal? How many minterms does a formula on 3 variables have at most?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Predicate logic: quantifiers and negation",
            body: [
              "Propositional logic cannot look inside a sentence: 'every student passed' and 'some student failed' are just atoms p and q, with no way to express that one is the negation of the other. Predicate logic fixes this by splitting a sentence into a predicate - a property with holes in it, like Passed(x) - and variables filled by a domain of discourse. Filling every hole with a concrete name yields a proposition: Passed(alia) is true or false flat out. This is the exact structure of database queries and of every 'for all records r in table T' loop in software.",
              "Two quantifiers range over the domain. Universal quantification: for all x, P(x) - true when P holds for every element, false as soon as one counterexample appears. Existential quantification: there exists x, P(x) - true when at least one witness exists, false when P holds for nobody. Order matters when both appear: 'for all y there exists x such that x > y' is true over the integers (choose x = y + 1), but 'there exists x such that for all y, x > y' is false (no greatest integer). Swapping quantifier order can change truth - a classic exam trap.",
              "Negation follows the quantifier duality: not (for all x, P(x)) equals there exists x such that not P(x), and not (there exists x, P(x)) equals for all x, not P(x). Intuition: to falsify 'every student passed' you need one failing student; to falsify 'some student failed' every student must have passed. With limits: not (for all x, there exists y, P(x, y)) equals there exists x such that for all y, not P(x, y) - the negation walks inward, flipping each quantifier as it passes. Always end at the predicate level, never with a bare 'not' in front of a quantifier.",
              "Worked example over the domain of natural numbers. Statement S: for all x, there exists y, x + y = 10. Negation: there exists x such that for all y, x + y differs from 10 - true, witness x = 11. A true one: for all x, there exists y, y > x (take y = x + 1). In CS terms, the statement 'for every request there exists a thread that handles it' failing means 'there is some request no thread handles' - the quantifier duality is exactly how testers generate counterexamples, and how SQL's NOT EXISTS and universal queries are formalised in relational calculus.",
            ],
            bullets: [
              "Predicate: a property with variable slots, e.g. P(x) = 'x is prime'; needs a domain of discourse.",
              "For all x, P(x): true iff P holds on every element; one counterexample kills it.",
              "There exists x, P(x): true iff P holds on at least one element; needs a witness.",
              "Quantifier order is significant: for-all then exists is weaker than exists then for-all.",
              "Negation duality: not for-all = exists not; not exists = for-all not - flip every quantifier inward.",
              "Worked: not (for all x, there exists y, x + y = 10) = there exists x, for all y, x + y is not 10; witness x = 11.",
              "Bounded quantifiers appear constantly: for all x > 0, P(x) restricts the domain explicitly.",
              "CS link: SQL NOT EXISTS, universal properties in testing, specification languages use quantifiers directly.",
            ],
            table: {
              caption: "Negating quantified statements.",
              headers: ["Statement", "Negation", "Reading of the negation"],
              rows: [
                ["For all x, P(x)", "There exists x, not P(x)", "some counterexample exists"],
                ["There exists x, P(x)", "For all x, not P(x)", "P holds for nobody"],
                ["For all x, There exists y, P(x,y)", "There exists x, For all y, not P(x,y)", "some x pairs with no y"],
                ["There exists x, For all y, P(x,y)", "For all x, There exists y, not P(x,y)", "every x fails on some y"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Negating a quantified statement",
              caption:
                "Walk the negation inward, flipping each quantifier; stop only at the predicate.",
              start: "not ( ... ) around a quantified formula",
              branches: [
                { label: "negation meets 'for all x'", outcome: "flip to 'there exists x' and push the negation inside", good: true },
                { label: "negation meets 'there exists x'", outcome: "flip to 'for all x' and push the negation inside", good: true },
                { label: "negation meets a bare predicate", outcome: "apply it directly: not P(x) - done", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Always name the domain",
              body: "'For all x, x >= x' is true over the naturals but meaningless or false elsewhere. Every RGPV quantifier question expects the domain to be stated first - write 'over the domain D = ...' as the first line of your answer; it also pins down which witnesses are legal.",
            },
            keyTerms: [
              { term: "Predicate", definition: "A statement containing variables that becomes a proposition once the variables are given domain values." },
              { term: "Universal quantifier", definition: "For all x, P(x): P must hold for every domain element." },
              { term: "Existential quantifier", definition: "There exists x, P(x): P must hold for at least one domain element." },
              { term: "Domain of discourse", definition: "The set over which the quantified variables range." },
              { term: "Quantifier duality", definition: "Negating swaps for-all with there-exists and negates the body." },
            ],
            examQuestions: [
              {
                q: "Define predicate, universal and existential quantifiers. Write the negations of (i) 'for all x, there exists y, x + y = 0' and (ii) 'there exists x, for all y, x * y = y' over the integers, determine the truth value of each original and each negation with witnesses.",
                marks: 7,
                outline: [
                  "Define predicate with an example and the two quantifiers.",
                  "(i) Original: for every x choose y = -x, so true.",
                  "Negate (i): there exists x, for all y, x + y differs from 0.",
                  "Evaluate negation (i): false - every x has the witness y = -x.",
                  "(ii) Original: need x with x*y = y for all y; x = 1 works (and x = 0 fails at y = 1... check: 0*y = 0 = y only for y = 0) - true with witness x = 1.",
                  "Negate (ii): for all x, there exists y, x*y differs from y.",
                  "Evaluate: true for every x (pick y = 1 when x differs from 1, and y = 2 when x = 1); note the negation's witnesses depend on x.",
                ],
              },
              {
                q: "Express 'every even integer greater than 2 is a sum of two primes' with predicates and quantifiers.",
                marks: 3,
              },
              {
                q: "State the negation of 'there exists x, P(x)' and explain it in one sentence.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Inference theory: rules of inference for propositional logic",
            body: [
              "An argument is a chain from premises to conclusion; it is valid when the conclusion is true in every row where all premises are true - truth of premises guarantees truth of the conclusion. Validity is a property of the shape, not the content: 'if p then q; p; therefore q' is valid regardless of what p and q say. Rules of inference are named, pre-verified valid shapes; using them turns a proof into a sequence of small, unimpeachable steps, each annotated with the rule and the premises it consumed.",
              "The core rules: modus ponens (p -> q, p, therefore q), modus tollens (p -> q, not q, therefore not p), hypothetical syllogism (p -> q, q -> r, therefore p -> r), disjunctive syllogism (p or q, not p, therefore q), addition (p, therefore p or q), simplification (p and q, therefore p), conjunction (p, q, therefore p and q), and resolution ((p or q), ((not p) or r), therefore (q or r)) - the single rule on which all modern automated theorem provers are built. Each is a mini-tautology; the truth tables of sections 2.1-2.2 are their certificates.",
              "A worked derivation. Premises: (1) if the program compiles then the tests run (C -> T); (2) if the tests run then the release ships (T -> S); (3) the tests do not run (not T). Goal: conclude the release does not ship and the program does not compile. Step 1: C -> T and not T, by modus tollens, give not C. Step 2: T -> S and not T, by modus tollens, give not S. Step 3: conjunction of the two results gives (not C) and (not S). Every line cites a rule and line numbers - exactly the format RGPV expects in 'show that the following argument is valid' questions.",
              "The dual skill is detecting invalidity: exhibit one truth assignment where premises hold and the conclusion fails. The classic fallacies: affirming the consequent (p -> q, q, therefore p - invalid; q may have another cause) and denying the antecedent (p -> q, not p, therefore not q - invalid; q may hold anyway). In CS, inference rules are the semantics of logic programming (Prolog's resolution), of type-checking judgments, and of forward/backward chaining in rule engines: a production system fires modus ponens across thousands of rules per second, and its soundness is precisely the validity of these tiny argument shapes.",
            ],
            bullets: [
              "Valid argument: conclusion true whenever all premises are true; validity is about form.",
              "Modus ponens: p -> q, p, hence q - the workhorse of every derivation.",
              "Modus tollens: p -> q, not q, hence not p - reasoning backward from failure.",
              "Hypothetical syllogism chains implications; disjunctive syllogism eliminates a disjunct.",
              "Resolution: from (p or q) and ((not p) or r) infer (q or r); basis of automated proving.",
              "Addition, simplification and conjunction handle building and dismantling compound premises.",
              "Fallacy 1 - affirming the consequent: p -> q, q does not give p.",
              "Fallacy 2 - denying the antecedent: p -> q, not p does not give not q.",
            ],
            table: {
              caption: "The eight standard inference rules at a glance.",
              headers: ["Rule", "Premises", "Conclusion"],
              rows: [
                ["Modus ponens", "p -> q ; p", "q"],
                ["Modus tollens", "p -> q ; not q", "not p"],
                ["Hypothetical syllogism", "p -> q ; q -> r", "p -> r"],
                ["Disjunctive syllogism", "p or q ; not p", "q"],
                ["Addition", "p", "p or q"],
                ["Simplification", "p and q", "p"],
                ["Conjunction", "p ; q", "p and q"],
                ["Resolution", "p or q ; (not p) or r", "q or r"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Format of a formal derivation",
              caption:
                "Number every line and cite the rule - missing citations are the top mark-loser in inference questions.",
              steps: [
                { label: "List premises, numbered", note: "state them exactly as given" },
                { label: "Scan for applicable rules", note: "match shapes: implication + antecedent? implication + not consequent?" },
                { label: "Apply one rule per line", note: "write rule name + premise line numbers" },
                { label: "Repeat until goal appears", note: "keep intermediate results for reuse" },
                { label: "Conclude with the goal line", note: "quote it as the required result" },
              ],
            },
            callout: {
              type: "exam",
              title: "Invalidity needs one counterexample row",
              body: "To show an argument invalid, do not argue in words - give one truth assignment making every premise T and the conclusion F. For affirming the consequent: p = F, q = T makes p -> q = T and q = T but p = F. One row, full marks.",
            },
            keyTerms: [
              { term: "Valid argument", definition: "An argument whose conclusion is true in every truth assignment satisfying all premises." },
              { term: "Modus ponens", definition: "From p -> q and p, infer q." },
              { term: "Modus tollens", definition: "From p -> q and not q, infer not p." },
              { term: "Resolution", definition: "From (p or q) and ((not p) or r), infer (q or r); the core rule of automated theorem proving." },
              { term: "Fallacy", definition: "An argument form that looks valid but admits a counterexample row, e.g. affirming the consequent." },
            ],
            examQuestions: [
              {
                q: "State modus ponens, modus tollens, hypothetical syllogism and disjunctive syllogism. Show that the premises 'C -> T', 'T -> S', 'not T' derive 'not C and not S', giving a rule citation for every line.",
                marks: 7,
                outline: [
                  "Write the four rules as premise/conclusion pairs.",
                  "Number the premises: (1) C -> T, (2) T -> S, (3) not T.",
                  "Line 4: from (1) and (3) by modus tollens, not C.",
                  "Line 5: from (2) and (3) by modus tollens, not S.",
                  "Line 6: from (4) and (5) by conjunction, not C and not S.",
                  "Verify validity once by truth-table spot check: any row with all premises true has not T true, killing C and S.",
                  "Contrast: why 'not T, therefore not C' without the implication would be denying the antecedent (invalid).",
                ],
              },
              {
                q: "Show by counterexample that 'p -> q, q, therefore p' is invalid.",
                marks: 3,
              },
              {
                q: "Name the rule: from 'it rains or it snows' and 'it does not snow' conclude 'it rains'.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "Methods of proof: direct, contrapositive and contradiction",
            body: [
              "A direct proof of 'if p then q' assumes p and derives q through valid steps. Example: 'if n is odd then n squared is odd'. Assume n = 2k + 1 for some integer k; then n squared = 4k squared + 4k + 1 = 2(2k squared + 2k) + 1, which is twice an integer plus one - odd. Definition-driven manipulation is the whole game: expand with the definition of odd, regroup into the target definition, conclude. Direct proof is the first method to try, and it works whenever the definitions compose smoothly.",
              "Proof by contraposition uses the equivalence p -> q = (not q) -> (not p): instead of assuming p, assume not q and derive not p. Example: 'if n squared is even then n is even'. Squaring preserves little about parity directly, so flip it: suppose n is odd, so n = 2k + 1; then n squared = 2(2k squared + 2k) + 1 is odd - contradicting evenness, so n cannot be odd, hence n is even. Contraposition shines when the negated consequent is easier to work with than the consequent itself.",
              "Proof by contradiction assumes p and not q together and derives anything false - the contradiction then shows the pair cannot coexist, so q must follow from p. The classic: 'the square root of 2 is irrational'. Suppose root 2 = a/b in lowest terms; then a squared = 2 b squared, so a is even (its square is even, by the contraposition result above); write a = 2c, get 2 c squared = b squared, so b is even too; but then a and b share the factor 2, contradicting lowest terms - hence no such fraction exists. Notice the method's freedom: once you have any contradiction, the assumption set dies.",
              "Choosing the method is a skill the examiner rewards: a statement about positivity or bounds ('there are infinitely many primes') suits contradiction; a statement whose negation is concrete ('n squared even implies n even') suits contraposition; anything algebraically transparent suits direct proof. A proof of an 'if and only if' statement needs both directions proved separately, each by whichever method fits. In CS these methods prove program correctness: a loop invariant is maintained by a direct proof; termination is often proved by contradiction with a decreasing measure; and lower bounds ('comparison sorting needs n log n comparisons') are contradiction arguments about information loss.",
            ],
            bullets: [
              "Direct proof: assume p, chain definitions and algebra to q.",
              "Contraposition: prove (not q) -> (not p) instead - equivalent to p -> q.",
              "Contradiction: assume p and not q, derive any false statement; the pair is impossible.",
              "Contraposition vs contradiction: contraposition targets a specific negated conclusion; contradiction may target anything false.",
              "Worked direct: odd n gives odd n squared via n = 2k + 1.",
              "Worked contraposition: n squared even gives n even by assuming n odd.",
              "Worked contradiction: root 2 irrational via lowest-terms fraction a/b and forced shared factor 2.",
              "Iff statements: prove both directions separately; CS uses these to prove algorithm correctness and lower bounds.",
            ],
            table: {
              caption: "Choosing a proof method.",
              headers: ["Method", "Assume", "Aim to derive", "Best for"],
              rows: [
                ["Direct", "p", "q", "definitions compose smoothly"],
                ["Contraposition", "not q", "not p", "negated consequent is concrete"],
                ["Contradiction", "p and not q", "any falsehood", "nonexistence / infinity claims"],
                ["Iff proof", "p, then not q", "q, then not p", "equivalences; two subproofs"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The proof-method ladder",
              caption:
                "Try the bottom rung first; climb only when definitions resist.",
              tiers: [
                { label: "Contradiction", note: "most powerful - assume the impossible and break it" },
                { label: "Contraposition", note: "flip the implication; prove the easier direction" },
                { label: "Direct proof", note: "default method - assume p, derive q" },
              ],
            },
            callout: {
              type: "tip",
              title: "Say which method you are using",
              body: "Open every proof with 'Proof by contraposition:' or 'Proof (by contradiction):'. The declaration tells the examiner the scaffold of your argument and earns structure marks even if a later algebra step wobbles.",
            },
            keyTerms: [
              { term: "Direct proof", definition: "Assume the antecedent and derive the consequent by valid steps." },
              { term: "Proof by contraposition", definition: "Prove (not q) -> (not p) instead of p -> q; logically equivalent." },
              { term: "Proof by contradiction", definition: "Assume p and not q, derive a falsehood; hence p -> q." },
              { term: "Parity argument", definition: "Writing n = 2k or 2k + 1 to reason about even/odd - the standard machinery of elementary number proofs." },
            ],
            examQuestions: [
              {
                q: "Prove that the square root of 2 is irrational, stating the method used and every parity step. Also prove by contraposition that if n cubed is even then n is even.",
                marks: 7,
                outline: [
                  "Declare method: contradiction for part 1.",
                  "Assume root 2 = a/b, a and b coprime.",
                  "Square: a squared = 2 b squared, so a squared even, so a even (justify: odd squared is odd).",
                  "Write a = 2c; substitute: 2 c squared = b squared, so b squared even, so b even.",
                  "Both even contradicts coprimality; conclude root 2 irrational.",
                  "Part 2 declare contraposition: assume n odd, n = 2k + 1.",
                  "n cubed = 2(4k cubed + 6k squared + 6k) + 1 is odd; hence n cubed even forces n even.",
                ],
              },
              {
                q: "Prove directly: the sum of two even integers is even.",
                marks: 3,
              },
              {
                q: "State the contrapositive of 'if 3n + 2 is odd then n is odd'.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.7",
            title: "Mathematical induction: weak and strong",
            body: [
              "Mathematical induction proves a statement P(n) for every natural number n by exploiting the well-ordering of the naturals. The weak form has two steps: the base case verifies P(1) (or P(0)); the inductive step assumes P(k) - the inductive hypothesis - and derives P(k + 1). The principle then hands you P(n) for all n at once: the base case lights the first domino and the inductive step guarantees each domino topples the next. Induction is not circular: proving P(k) -> P(k+1) is a single conditional claim, not an assumption that P(k) is true.",
              "Worked example, the classic: prove 1 + 2 + ... + n = n(n+1)/2. Base: n = 1 gives left side 1, right side 1 times 2 over 2 = 1. Inductive hypothesis: assume 1 + 2 + ... + k = k(k+1)/2 for some k >= 1. Inductive step: add k + 1 to both sides, giving 1 + ... + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k/2 + 1) = (k+1)(k+2)/2 - exactly the formula with n replaced by k+1. Conclusion: by induction the identity holds for every positive n. The four labelled stages - base, hypothesis, step, conclusion - are the mandatory exam format.",
              "Strong (complete) induction replaces the single hypothesis P(k) with 'P(1), P(2), ..., P(k) all hold'. It is no more powerful than weak induction in principle, but it is dramatically more convenient when the next case depends on several earlier ones. The canonical example: every integer n >= 2 is a product of primes. Base: 2 is prime. Step: if n is prime, done; otherwise n = a * b with 1 < a, b < n, and by the strong hypothesis both a and b are products of primes, so n is. Weak induction cannot reach this because the factors a and b are not exactly the previous case n - 1.",
              "Induction is the proof engine of computer science. Correctness of loops is proved by induction on iterations, with the loop invariant playing the inductive hypothesis; correctness of recursive algorithms (merge sort, quicksort, the Master Theorem of Unit III) is induction on input size; and the runtime recurrences of Unit III are solved and then verified by induction. Structural induction - induction over trees, lists and parse trees rather than numbers - is the same principle re-indexed, and it is how type safety of programming languages is formally proved. Whenever you see 'for all n' in a theorem statement, your hand should reach for induction.",
            ],
            bullets: [
              "Weak induction = base case + inductive step P(k) -> P(k+1).",
              "The inductive hypothesis is an assumption made inside the step, not a circular claim.",
              "Always label four stages: base, hypothesis, inductive step, conclusion.",
              "Strong induction: assume P(1)..P(k); needed when the next case splits into smaller, non-adjacent pieces.",
              "Worked identity: sum 1..n = n(n+1)/2, proved by adding (k+1) to the hypothesis.",
              "Worked strong induction: every integer >= 2 factors into primes via n = a * b.",
              "Common bases: P(0) or P(1); pick the smallest value the statement claims.",
              "CS link: loop invariants, recursive algorithm correctness, Master Theorem, structural induction on trees.",
            ],
            table: {
              caption: "The induction proof of sum 1..n = n(n+1)/2, stage by stage.",
              headers: ["Stage", "Claim", "Justification"],
              rows: [
                ["Base (n = 1)", "1 = 1(2)/2", "arithmetic"],
                ["Hypothesis", "1 + ... + k = k(k+1)/2", "assumed for some k >= 1"],
                ["Step", "add (k+1): k(k+1)/2 + (k+1) = (k+1)(k+2)/2", "algebra on the hypothesis"],
                ["Conclusion", "holds for all n >= 1", "principle of induction"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The induction loop",
              caption:
                "Each pass certifies one more value of n - the domino image made precise.",
              steps: [
                { label: "Base case P(1)", note: "verify by direct computation" },
                { label: "Inductive hypothesis P(k)", note: "assume for arbitrary k" },
                { label: "Inductive step P(k+1)", note: "derive using the hypothesis" },
                { label: "Conclusion for all n", note: "well-ordering of naturals closes the loop" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never skip the base case",
              body: "The inductive step alone proves nothing: 'n = n + 1' satisfies P(k) -> P(k+1) vacuously (no k makes P(k) true) yet is false for all n. In every induction answer, write and verify the base case explicitly - the marks are separately allotted.",
            },
            keyTerms: [
              { term: "Inductive hypothesis", definition: "The temporary assumption P(k) (or P(1)..P(k)) used inside the inductive step." },
              { term: "Base case", definition: "The smallest instance of P(n), verified directly to start the induction." },
              { term: "Strong induction", definition: "Induction assuming all earlier cases P(1) through P(k) hold." },
              { term: "Loop invariant", definition: "A property true before and after every loop iteration; the runtime analogue of the inductive hypothesis." },
              { term: "Well-ordering principle", definition: "Every nonempty set of naturals has a least element; the foundation under induction." },
            ],
            examQuestions: [
              {
                q: "State the principle of mathematical induction. Prove by induction that 1 + 3 + 5 + ... + (2n - 1) = n squared, verifying the base case and naming every stage. Then explain when strong induction is required, with the prime-factorisation example.",
                marks: 7,
                outline: [
                  "State weak induction: base P(1) plus step P(k) -> P(k+1).",
                  "Base: sum of the first 1 odd number is 1 = 1 squared.",
                  "Hypothesis: assume 1 + 3 + ... + (2k - 1) = k squared.",
                  "Step: add (2k + 1): k squared + 2k + 1 = (k + 1) squared.",
                  "Conclude by induction for all n >= 1.",
                  "Define strong induction and contrast the hypothesis sets.",
                  "Prime factorisation: n = a * b with smaller factors needs P(a), P(b), not just P(n - 1).",
                ],
              },
              {
                q: "Prove by induction that 2^n > n for all n >= 1.",
                marks: 3,
              },
              {
                q: "Write the inductive step you would need to prove that 2^n > n squared for n >= 5. (No full proof required.)",
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
      title: "Counting, Recurrence Relations and Generating Functions",
      summary:
        "The arithmetic of computer science: sum and product rules, permutations and combinations, pigeonhole, inclusion-exclusion, then recurrence relations - how they are modelled, solved by characteristic equations and particular solutions, and cracked with generating functions.",
      chapter: {
        number: "03",
        title: "Counting Principles and Recurrence Relations",
        intro:
          "Unit III turns the database of earlier units into a calculator. Counting rules size every data structure and algorithm; permutations and combinations enumerate choices; pigeonhole forces collisions; inclusion-exclusion counts unions of events. Recurrence relations then describe divide-and-conquer algorithms and self-similar structures, and two systematic machines - characteristic equations and generating functions - solve them exactly.",
        inOneBreath:
          "Sum rule for disjoint choices, product rule for independent stages; n choose r = n!/(r!(n-r)!); n+1 pigeons in n holes force a collision; inclusion-exclusion counts unions with alternating signs; recurrences encode recursive processes with base cases; homogeneous linear recurrences solve via the characteristic equation (distinct or repeated roots); nonhomogeneous ones add a guessed particular solution; generating functions encode a sequence as a power series, turn the recurrence into algebra, and read coefficients back out.",
        sections: [
          {
            number: "3.1",
            title: "Basic counting: the sum and product rules",
            body: [
              "The product rule: if a task decomposes into independent stages performed in sequence, with n1 ways for stage 1, n2 for stage 2 and so on, the task has n1 * n2 * ... * nk ways in total. Choosing a PIN of 4 digits has 10 * 10 * 10 * 10 = 10000 possibilities; choosing a username from 8 alphabets followed by 3 digits has 8 * 10 * 10 * 10 = 8000. The rule is the Cartesian product of section 1.4 in counting form: |A cross B| = |A| * |B|. Independence between stages is the load-bearing assumption - if one choice restricts another, the rule must be adjusted.",
              "The sum rule: if a task can be done in one of several mutually exclusive ways - one branch, not all branches - the total is the sum of the branch counts. To travel from Bhopal to Indore by bus (12 services) or train (6 trains) or flight (3 flights), the options total 12 + 6 + 3 = 21. Mutual exclusivity matters: if some bus also counted as a train, naive addition double-counts it - exactly the overlap problem inclusion-exclusion fixes. Mixed problems decompose by 'which case are we in' (sum over cases) and then 'within this case, how many ways' (product over stages).",
              "Worked example. How many 3-character licence codes are there using digits and letters, with repetition allowed, that (a) contain no repeated character, (b) must start with a letter and end with a digit? Take 26 letters and 10 digits. (a) no repeats: 36 * 35 * 34 = 42840 by the product rule with shrinking options. (b) starts with letter, ends with digit, middle anything: 26 * 36 * 10 = 9360. Notice how case analysis plus the product rule handles both: identify the stages, multiply within a case, add across disjoint cases.",
              "These two rules are the substrate of complexity analysis and security estimation. Keyspace sizes ('how many passwords of length 8 from 70 symbols?' = 70^8, roughly 5.8 * 10^14) decide whether brute force is feasible; address spaces (2^32 IPv4 addresses) come from the product rule over 32 binary stages; and the state count of a digital circuit is 2^k for k flip-flops. Whenever an exam question says 'how many', the first sentence of your answer should name the rule being used and the cases being summed - examiners grade the reasoning, not just the number.",
            ],
            bullets: [
              "Product rule: independent sequential stages multiply: n1 * n2 * ... * nk total ways.",
              "Sum rule: mutually exclusive branches add: n1 + n2 + ... total ways.",
              "Product rule is the counting form of the Cartesian product; sum rule is the counting form of disjoint union.",
              "Repetition allowed multiplies constant options; repetition banned shrinks each stage by one.",
              "Case decomposition: sum across cases, product across stages within each case.",
              "Worked: 3-char codes, no repetition: 36 * 35 * 34 = 42840; letter-digit-digit pattern: 26 * 36 * 10 = 9360.",
              "Keyspace estimation: 8-char passwords over 70 symbols give 70^8 possibilities - brute-force feasibility math.",
              "State counts: k binary flip-flops give 2^k states - product rule inside hardware design.",
            ],
            table: {
              caption: "Worked counts for 3-character codes over 26 letters + 10 digits.",
              headers: ["Pattern", "Stages", "Count"],
              rows: [
                ["Any 3 chars, repetition allowed", "36 * 36 * 36", "46656"],
                ["Any 3 chars, no repetition", "36 * 35 * 34", "42840"],
                ["Letter, digit, digit", "26 * 10 * 10", "2600"],
                ["Starts letter, ends digit", "26 * 36 * 10", "9360"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which counting rule applies?",
              caption:
                "Ask one question first: are the choices staged or alternative?",
              start: "Counting problem",
              branches: [
                { label: "stages in sequence, independent", outcome: "product rule: multiply the per-stage counts", good: true },
                { label: "alternative branches, mutually exclusive", outcome: "sum rule: add the branch counts", good: true },
                { label: "branches overlap", outcome: "naive sum double-counts - use inclusion-exclusion (section 3.4)", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the rule, then compute",
              body: "Write 'By the product rule ...' or 'By the sum rule over cases ...' as the first line. Half the marks in RGPV counting questions are for identifying the correct rule; the arithmetic is the cheap half.",
            },
            keyTerms: [
              { term: "Product rule", definition: "Total ways for independent sequential stages equal the product of the stage counts." },
              { term: "Sum rule", definition: "Total ways for mutually exclusive alternatives equal the sum of the branch counts." },
              { term: "Keyspace", definition: "The number of possible keys or passwords - a direct product-rule computation." },
              { term: "Mutual exclusivity", definition: "The condition that no outcome is counted in two different branches." },
            ],
            examQuestions: [
              {
                q: "State the sum and product rules. How many 4-digit even numbers have no repeated digit? Decompose by the units digit and show every case.",
                marks: 7,
                outline: [
                  "State both rules with one-line justifications.",
                  "Evenness forces the units digit in {0, 2, 4, 6, 8}; split into cases.",
                  "Case units = 0: 9 * 8 * 7 = 504 ways for the first three digits.",
                  "Case units in {2,4,6,8}: first digit cannot be 0 or the units digit: 8 choices, then 8, then 7: 8 * 8 * 7 = 448 each.",
                  "Sum over the four nonzero units digits: 4 * 448 = 1792.",
                  "Total = 504 + 1792 = 2296.",
                  "Note explicitly that cases are mutually exclusive, licensing the sum rule.",
                ],
              },
              {
                q: "How many 5-letter strings from 26 letters have repetition allowed? How many without?",
                marks: 3,
              },
              {
                q: "A menu offers 4 starters, 6 mains, 3 desserts. How many full meals?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Permutations and combinations",
            body: [
              "A permutation is an ordered arrangement of distinct objects. The number of permutations of n objects is n! = n * (n-1) * ... * 1, and the number of ways to arrange r of them is P(n, r) = n! / (n - r)!: the first slot has n choices, the second n - 1, and so on down r slots - the product rule again. A combination ignores order: the number of r-element subsets of an n-set is C(n, r) = n! / (r! (n - r)!), read 'n choose r'. The link between them: each unordered subset of size r can be ordered r! ways, so P(n, r) = C(n, r) * r!.",
              "Worked example. A committee of 3 must be chosen from 5 men and 4 women. Total committees: C(9, 3) = 84. Committees with exactly 2 women: choose the women C(4, 2) = 6, choose the man C(5, 1) = 5, multiply (independent stages): 30. Committees with at least one woman: complement counting - total minus all-male = 84 - C(5, 3) = 84 - 10 = 74. Complement counting ('at least' problems are easiest counted backwards) is a recurring exam technique worth naming explicitly.",
              "Distinguish the four cases before computing: order matters or not, repetition allowed or not. Permutations without repetition: P(n, r). Combinations without repetition: C(n, r). Permutations with repetition: n^r (each slot independent). Combinations with repetition ('multisets', the stars-and-bars formula): C(n + r - 1, r) - buying 6 sweets from n = 4 types is C(4 + 6 - 1, 6) = C(9, 6) = 84. A quick litmus test: if swapping two chosen items creates a different outcome, order matters; if the same item can be picked twice, repetition is allowed.",
              "Combinations count the bases of everything discrete: binary strings of weight r are C(n, r) (choose which r positions hold 1s - the Hamming weight of codewords); hands of cards, routes in a grid (C(a + b, a) movements), and the binomial coefficients of (x + y)^n are all C(n, r). In CS, C(n, 2) = n(n-1)/2 counts the edges of a complete graph and the comparisons of bubble sort - the same number under two names. Factorials explode fast, so always cancel before computing: C(10, 3) = 10 * 9 * 8 / 3! = 120, no giant factorials needed.",
            ],
            bullets: [
              "Permutations: order matters; P(n, r) = n!/(n-r)! = n * (n-1) * ... * (n-r+1).",
              "Combinations: order irrelevant; C(n, r) = n!/(r!(n-r)!).",
              "Bridge identity: P(n, r) = C(n, r) * r! - each subset orders r! ways.",
              "Repetition permitted: strings n^r; multisets C(n + r - 1, r) (stars and bars).",
              "Complement counting for 'at least': total minus the forbidden case.",
              "Worked: committees from 5 men, 4 women: total C(9,3) = 84; exactly 2 women = 6 * 5 = 30; at least 1 woman = 84 - 10 = 74.",
              "Symmetry shortcut: C(n, r) = C(n, n - r); e.g. C(9, 6) = C(9, 3) = 84.",
              "C(n, 2) = n(n-1)/2 counts complete-graph edges and pairwise comparisons alike.",
            ],
            table: {
              caption: "The four selection scenarios (choose r items from n types).",
              headers: ["Order?", "Repetition?", "Formula", "Example (n=4 types, r=6 picks)"],
              rows: [
                ["Yes", "No", "P(n, r)", "P(4, 2) = 12 ordered pairs"],
                ["Yes", "Yes", "n^r", "4^6 = 4096 strings"],
                ["No", "No", "C(n, r)", "C(4, 2) = 6 subsets of size 2"],
                ["No", "Yes", "C(n + r - 1, r)", "C(9, 6) = 84 multisets"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing r from n: the four formulas",
              caption:
                "Decide two questions - order and repetition - and the quadrant picks your formula.",
              axes: { x: "Order matters -> Order ignored", y: "Repetition allowed -> No repetition" },
              quadrants: [
                { label: "Order + repetition: n^r", note: "each slot independently any of n" },
                { label: "Order, no repetition: P(n, r)", note: "shrink-a-slot product rule" },
                { label: "No order, repetition: C(n+r-1, r)", note: "stars and bars multiset count" },
                { label: "No order, no repetition: C(n, r)", note: "divide P(n, r) by r!" },
              ],
            },
            callout: {
              type: "exam",
              title: "'At least' means count backwards",
              body: "For 'at least one woman', never enumerate cases one by one if you can help it: compute the total C(9, 3) = 84 and subtract the complement C(5, 3) = 10. One subtraction replaces four case computations and eliminates the classic mistake of double-counting overlapping cases.",
            },
            keyTerms: [
              { term: "Permutation P(n, r)", definition: "An ordered selection of r distinct objects from n; n!/(n-r)!." },
              { term: "Combination C(n, r)", definition: "An unordered selection (subset) of r objects from n; n!/(r!(n-r)!)." },
              { term: "Stars and bars", definition: "The multiset formula C(n + r - 1, r) counting selections with repetition." },
              { term: "Complement counting", definition: "Counting 'at least' as total minus 'none'." },
              { term: "Factorial n!", definition: "The number of orderings of n distinct objects; n! = n * (n-1) * ... * 1, with 0! = 1." },
            ],
            examQuestions: [
              {
                q: "Define permutation and combination and derive the relation P(n, r) = C(n, r) * r!. From 6 boys and 4 girls, a committee of 4 is formed: find (i) total committees, (ii) committees with exactly 2 girls, (iii) committees with at least 2 girls.",
                marks: 7,
                outline: [
                  "Define both with notation.",
                  "Derive: order the members of a chosen subset r! ways, so P(n, r) = C(n, r) * r!.",
                  "(i) C(10, 4) = 210.",
                  "(ii) exactly 2 girls: C(4, 2) * C(6, 2) = 6 * 15 = 90.",
                  "(iii) at least 2 girls = exactly 2 + exactly 3 + exactly 4.",
                  "exactly 3: C(4,3) * C(6,1) = 4 * 6 = 24; exactly 4: C(4,4) * C(6,0) = 1.",
                  "Sum: 90 + 24 + 1 = 115 (cross-check by complement: 210 - 90 - 5 = 115).",
                ],
              },
              {
                q: "How many 7-digit phone numbers start with 9 and use no repeated digits?",
                marks: 3,
              },
              {
                q: "Evaluate C(10, 3) and C(10, 7) without large factorials. What do you notice?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "The pigeonhole principle",
            body: [
              "The pigeonhole principle is the simplest non-obvious counting theorem in mathematics: if n + 1 or more pigeons occupy n holes, some hole holds at least two pigeons. The generalised form scales the conclusion: if N pigeons occupy n holes, some hole holds at least ceiling(N / n) pigeons. The proof is a one-line contradiction - if every hole held at most one (respectively at most ceiling(N/n) - 1) pigeons, the total would be at most n (respectively N - 1), less than N - impossible. Nothing about which hole or which pigeons is guaranteed; the theorem is pure existence.",
              "Worked examples show the art of choosing pigeons and holes. Among 13 people, two share a birth month (pigeons = people, holes = 12 months, 13 > 12). Among any 5 points in a unit square, two are within distance root(2)/2 or less: cut the square into four quarter-squares of diagonal root(2)/2 - five points into four cells force two into one cell. Among 70 integers, at least 10 leave the same remainder mod 7: 70 = 10 * 7 holes, so ceiling(70/7) = 10. Every solution names its pigeons, names its holes, and counts - the three-line ritual.",
              "The generalised form gives quantitative answers, and exam questions love it. How many students are needed to guarantee 6 share a birth month? With 12 holes, need ceiling(N/12) >= 6, so N = 5 * 12 + 1 = 61. How many cards from a standard 52-card deck guarantee two of the same rank? The holes here are ranks: the worst case draws one card of each of the 13 ranks, so 14 cards guarantee a pair. Distinguish 'holes' from 'worst-case sequence': the answer is the largest obstruction-free draw plus one.",
              "Pigeonhole is the workhorse of CS impossibility arguments. Hash tables: n + 1 keys into n buckets guarantee a collision - the reason chaining and probing exist. Birthday-paradox reasoning: 23 people already give a 50 percent chance of a shared birthday, an overlap calculation used to attack cryptographic hash functions. The sorting lower bound (comparison sorting needs at least log2(n!) comparisons) is a pigeonhole count of possible orderings. Whenever a system maps a large space into a small one - keys to buckets, documents to shingles, users to IP addresses - collisions are not a bug possibility, they are a theorem.",
            ],
            bullets: [
              "Simple form: n + 1 pigeons in n holes force some hole to hold at least 2.",
              "Generalised form: N pigeons in n holes force some hole to hold at least ceiling(N / n).",
              "Proof: contradiction against the ceiling bound - totals cannot exceed N - 1.",
              "Method ritual: identify pigeons, identify holes, compute the ceiling.",
              "Worked: 13 people, 12 months -> two share a month; 70 numbers mod 7 -> ten share a remainder.",
              "Reverse question: to guarantee k in some hole, need N = (k - 1) * n + 1 pigeons; e.g. k = 6 months need 61 people.",
              "Worked cards: 14 cards from a 52-card deck force two of the same rank (13 rank-holes).",
              "CS link: hash collisions, birthday attack on hash functions, sorting lower bounds.",
            ],
            table: {
              caption: "Pigeonhole computations at a glance.",
              headers: ["Pigeons N", "Holes n", "Guaranteed occupancy", "Instance"],
              rows: [
                ["13 people", "12 months", "ceiling(13/12) = 2", "two share a birth month"],
                ["70 integers", "7 remainders", "ceiling(70/7) = 10", "ten share a residue mod 7"],
                ["61 people", "12 months", "ceiling(61/12) = 6", "six share a month (reverse use)"],
                ["14 cards", "13 ranks", "ceiling(14/13) = 2", "two cards of one rank"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The layered pigeonhole argument",
              caption:
                "Every correct pigeonhole answer has exactly these layers - write them in order.",
              layers: [
                { label: "Layer 1: identify pigeons", note: "what is being distributed (people, numbers, points)" },
                { label: "Layer 2: identify holes", note: "the small space (months, remainders, cells)" },
                { label: "Layer 3: apply the bound", note: "ceiling(N/n) >= 2, or the reverse count (k-1)*n + 1" },
                { label: "Layer 4: state the conclusion", note: "existence only - never claim which hole" },
              ],
            },
            callout: {
              type: "warning",
              title: "Existence, not identification",
              body: "Pigeonhole proves some hole is crowded; it never says which one or who is in it. Answers like 'persons 5 and 9 share a month' overclaim and lose marks. Write 'there exist at least two people with the same birth month' and stop.",
            },
            keyTerms: [
              { term: "Pigeonhole principle", definition: "If n + 1 or more objects go into n boxes, some box holds at least two." },
              { term: "Generalised pigeonhole", definition: "N objects in n boxes force some box to hold at least ceiling(N/n) objects." },
              { term: "Birthday paradox", definition: "The overlap phenomenon: 23 people already give a 50 percent chance of a shared birthday." },
              { term: "Collision", definition: "Two distinct inputs mapping to the same bucket in a hash system - guaranteed by pigeonhole when inputs exceed buckets." },
            ],
            examQuestions: [
              {
                q: "State the simple and generalised pigeonhole principles and prove the generalised form. Use it to show: (i) among 40 students, at least 4 share a birth month; (ii) how many students guarantee 8 share a birth month?",
                marks: 7,
                outline: [
                  "State both forms.",
                  "Prove the generalised form by contradiction: if every hole held at most ceiling(N/n) - 1, the total would be at most N - 1.",
                  "(i) 40 pigeons, 12 holes: ceiling(40/12) = 4, so some month has at least 4 birthdays.",
                  "(ii) reverse: need (8 - 1) * 12 + 1 = 85 students.",
                  "Check: with 84 students, 7 per month is achievable, so 84 does not suffice and 85 is tight.",
                  "Emphasise that the conclusion is existential - 'there exists a month'.",
                  "Optionally mention the hash-table collision corollary as a CS application.",
                ],
              },
              {
                q: "How many people are needed to guarantee that at least 3 share a birth month?",
                marks: 3,
              },
              {
                q: "Why must a hash table with 11 buckets and 12 keys have a collision?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Inclusion-exclusion and derangements",
            body: [
              "Section 1.3 introduced inclusion-exclusion for counting unions of sets; here it becomes a systematic counting engine. For two sets: |A union B| = |A| + |B| - |A intersect B|. For three sets the alternating expansion adds back the triple intersection. The pattern for k sets: sum all singletons, subtract all pairwise intersections, add all triple intersections, and so on, alternating signs - the sign of a term covering t sets is (-1)^(t+1). The principle is the counting shadow of De Morgan's laws: counting the complement 'none of the properties hold' is often far easier, since |union| = total - |intersection of complements|.",
              "Worked example - divisibility counting, the Euler phi style. How many integers from 1 to 400 are divisible by 2, 3 or 5? Let A, B, C be the sets divisible by 2, 3, 5 respectively. Singles: 200 + 133 + 80 = 413. Pairs: divisible by 6: 66; by 10: 40; by 15: 26 - subtract 132. Triple: divisible by 30: 13 - add back. Union = 413 - 132 + 13 = 294. Numbers divisible by none of the three: 400 - 294 = 106 - and this 'none' count is exactly how Euler's phi function is computed: phi(n) counts integers coprime to n by inclusion-exclusion over the prime divisors.",
              "Derangements: permutations with no fixed point - nobody gets their own hat. Count them by inclusion-exclusion on the events F_i = 'permutation fixes item i'. Total permutations n!. Subtract permutations fixing item i: (n-1)! each, n of them. Add back double-fixed: (n-2)! each, C(n, 2) of them. Alternating to the end gives D_n = n! * (1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!). Check n = 3: 6 * (1 - 1 + 1/2 - 1/6) = 2 - the two derangements of {1,2,3} are (2,3,1) and (3,1,2). The recurrence D_n = (n-1)(D_{n-1} + D_{n-2}) with D_1 = 0, D_2 = 1 gives the same sequence: 0, 1, 2, 9, 44, 265.",
              "Inclusion-exclusion is the counting core of search engines (document unions with term-overlap correction), reliability engineering (probability at least one component works), and survey analysis (section 1.3's language counts). Derangements count seating charts where nobody sits at their assigned seat, password reshuffle checks, and scheduling matches with fixed assignments banned. The proportion of permutations that are derangements converges to 1/e, roughly 36.8 percent - worth quoting for the extra mark. Both formulas reward one habit: enumerate the events, write the signed expansion, then substitute numbers last.",
            ],
            bullets: [
              "Two sets: add singles, subtract the intersection; the overlap is counted exactly once.",
              "Three sets: add singles, subtract pairs, add the triple - signs alternate as (-1)^(t+1).",
              "Complement route: 'none of the properties' = total minus 'at least one'; often easier.",
              "Worked: numbers 1..400 divisible by 2, 3 or 5: 200 + 133 + 80 - 66 - 40 - 26 + 13 = 294; none: 106.",
              "Euler phi: phi(n) via inclusion-exclusion over the prime divisors of n; phi(12) = 4.",
              "Derangement formula: D_n = n! * sum over k of (-1)^k / k!, k = 0..n.",
              "Derangement values: D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44.",
              "Recurrence D_n = (n - 1)(D_{n-1} + D_{n-2}); proportion D_n / n! tends to 1/e.",
            ],
            table: {
              caption: "Derangement numbers by the inclusion-exclusion formula.",
              headers: ["n", "n!", "D_n", "D_n / n!"],
              rows: [
                ["1", "1", "0", "0"],
                ["2", "2", "1", "0.5"],
                ["3", "6", "2", "0.333"],
                ["4", "24", "9", "0.375"],
                ["5", "120", "44", "0.3667"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Counting derangements of n items",
              caption:
                "Inclusion-exclusion over the fixed-point events F_i - alternate signs until the last layer.",
              steps: [
                { label: "Start with n! permutations" },
                { label: "Subtract single fixings", note: "n events F_i, each (n-1)! permutations" },
                { label: "Add double fixings", note: "C(n,2) pairs, each (n-2)!" },
                { label: "Continue alternating", note: "triple fixings subtract, and so on" },
                { label: "Collect", note: "D_n = n! (1 - 1/1! + 1/2! - ... + (-1)^n/n!)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sieve divisibility questions are inclusion-exclusion in disguise",
              body: "'How many integers from 1 to N are divisible by a, b or c?' is the same question as section 1.3's student survey. Compute N/a, N/b, N/c by floor division; pairwise terms use lcm(a,b), lcm(b,c), lcm(a,c); the triple term uses lcm(a,b,c). Use floors, never rounding.",
            },
            keyTerms: [
              { term: "Inclusion-exclusion", definition: "The alternating-sign formula that counts the union of overlapping sets exactly." },
              { term: "Derangement", definition: "A permutation with no fixed point: no element stays in its original position." },
              { term: "Euler phi function", definition: "phi(n): the count of integers in 1..n coprime to n, computed by inclusion-exclusion over prime divisors." },
              { term: "Fixed point", definition: "A position i with permutation value i - the event derangements exclude." },
            ],
            examQuestions: [
              {
                q: "State the inclusion-exclusion principle for three sets. Find how many integers between 1 and 500 are divisible by 2, 3 or 7, and how many are divisible by none of them. Then derive the derangement formula and compute D_4.",
                marks: 7,
                outline: [
                  "State the three-set alternating formula.",
                  "Singles: floor(500/2) + floor(500/3) + floor(500/7) = 250 + 166 + 71 = 487.",
                  "Pairs: by 6: 83; by 14: 35; by 21: 23 - subtract 141.",
                  "Triple: by 42: 11 - add back.",
                  "Union = 487 - 141 + 11 = 357; none = 500 - 357 = 143.",
                  "Derive derangements: inclusion-exclusion over fixed-point events F_i of sizes (n-k)!.",
                  "Compute D_4 = 24 * (1 - 1 + 1/2 - 1/6 + 1/24) = 24 - 24 + 12 - 4 + 1 = 9.",
                ],
              },
              {
                q: "Compute phi(12) by listing or by inclusion-exclusion over the primes 2 and 3.",
                marks: 3,
              },
              {
                q: "In how many ways can 3 letters be placed in 3 envelopes so that no letter reaches its own envelope?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Recurrence relations: modelling recursive processes",
            body: [
              "A recurrence relation defines each term of a sequence through earlier terms together with initial conditions: the sequence has a starting point and a rule for continuing. The simplest models are a_n = a_{n-1} + d (arithmetic growth) and a_n = r * a_{n-1} (geometric growth), but the interesting ones combine: a_n = c1 * a_{n-1} + c2 * a_{n-2} + f(n), a second-order linear recurrence. A recurrence without initial conditions has infinitely many solutions - the initial values select the unique one, exactly as boundary conditions pin down a differential equation.",
              "Modelling is the exam skill: translate a story into a recurrence. Tower of Hanoi: to move n disks, move n - 1 disks aside (H_{n-1} moves), shift the largest disk (1 move), move the n - 1 stack back on top (H_{n-1} moves); so H_n = 2 H_{n-1} + 1 with H_1 = 1 - generating 1, 3, 7, 15, 31, i.e. 2^n - 1. Rabbit-style population growth gives Fibonacci: F_n = F_{n-1} + F_{n-2} with F_1 = F_2 = 1. Compound interest with annual deposit gives a_n = 1.05 a_{n-1} + 1000. Each model needs a base case, a recurrence, and a question: closed form or value at a specific n.",
              "Worked derivation for compound interest. A person deposits 1000 rupees each year into an account paying 5 percent, starting from zero: a_n = 1.05 a_{n-1} + 1000, a_0 = 0. Iterating: a_1 = 1000, a_2 = 2050, a_3 = 3152.5. The balance is a geometric-series sum, hinting at the closed form a_n = 20000 * (1.05^n - 1) - a result the machinery of section 3.7 will derive rather than guess. The lesson: recurrences capture processes that reference their own past, and their solutions reveal long-run behaviour - here exponential growth of savings.",
              "In computer science, recurrences ARE algorithms. Merge sort on n elements splits into two halves and merges in linear time: T(n) = 2 T(n/2) + c n with T(1) = c, solving to c n (log2 n + 1) - the n log n behaviour that beats quadratic sorts. Binary search: T(n) = T(n/2) + c, giving log2 n. Dynamic programming is the art of writing the recurrence first (Fibonacci, longest common subsequence, knapsack) and evaluating it bottom-up. Reading a divide-and-conquer algorithm and writing its recurrence within seconds is the single most transferable skill of this unit.",
            ],
            bullets: [
              "Recurrence + initial conditions = a uniquely determined sequence.",
              "Order of a recurrence: how many previous terms it references; linear means no products or powers of a_i.",
              "Tower of Hanoi: H_n = 2 H_{n-1} + 1, H_1 = 1, solving to H_n = 2^n - 1.",
              "Fibonacci: F_n = F_{n-1} + F_{n-2}, F_1 = F_2 = 1 - the model of population-style growth.",
              "Compound deposit: a_n = 1.05 a_{n-1} + 1000, a_0 = 0; values 1000, 2050, 3152.5.",
              "Merge sort: T(n) = 2 T(n/2) + c n with T(1) = c; solution c n (log2 n + 1).",
              "Binary search: T(n) = T(n/2) + c; solution log2 n - halving recurrences give logarithms.",
              "Method: identify how a size-n problem uses smaller instances, write the equality, anchor with the smallest instance.",
            ],
            table: {
              caption: "Standard algorithm recurrences and their closed forms.",
              headers: ["Algorithm", "Recurrence", "Initial condition", "Closed form"],
              rows: [
                ["Tower of Hanoi", "H_n = 2 H_{n-1} + 1", "H_1 = 1", "2^n - 1"],
                ["Merge sort", "T(n) = 2 T(n/2) + c n", "T(1) = c", "c n (log2 n + 1)"],
                ["Binary search", "T(n) = T(n/2) + c", "T(1) = c", "c log2 n + c"],
                ["Fibonacci", "F_n = F_{n-1} + F_{n-2}", "F_1 = F_2 = 1", "(phi^n - psi^n)/root 5"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From story to recurrence to answer",
              caption:
                "The four-stage modelling discipline every recurrence question follows.",
              stages: [
                { label: "Identify smaller instances", note: "how does size n use sizes n-1 or n/2?" },
                { label: "Write the recurrence", note: "e.g. H_n = 2 H_{n-1} + 1" },
                { label: "Fix initial conditions", note: "smallest instance, e.g. H_1 = 1" },
                { label: "Solve and verify", note: "closed form checked against the first few terms" },
              ],
            },
            callout: {
              type: "tip",
              title: "Verify against the first terms",
              body: "After solving any recurrence, plug n = 1, 2, 3 into your closed form and compare with the sequence generated directly from the recurrence. Ten seconds of checking catches the sign slips that cost the whole solution mark.",
            },
            keyTerms: [
              { term: "Recurrence relation", definition: "An equation defining a_n from earlier terms a_{n-1}, a_{n-2}, ... together with initial conditions." },
              { term: "Initial conditions", definition: "The base values that select the unique solution of a recurrence." },
              { term: "Linear recurrence", definition: "Each term is a fixed linear combination of previous terms (plus possibly a function of n)." },
              { term: "Order", definition: "The number of previous terms referenced; a_n = 3 a_{n-1} + 2 a_{n-2} has order 2." },
              { term: "Closed form", definition: "A formula for a_n involving n but no earlier terms." },
            ],
            examQuestions: [
              {
                q: "Define a recurrence relation. Derive the recurrence for the Tower of Hanoi problem with initial condition, generate the first five values, and state the closed form with verification.",
                marks: 7,
                outline: [
                  "Define recurrence and initial conditions.",
                  "Explain the three-phase move: n-1 aside, largest disk across, n-1 back.",
                  "Write H_n = 2 H_{n-1} + 1 with H_1 = 1.",
                  "Generate values: 1, 3, 7, 15, 31.",
                  "Claim the closed form H_n = 2^n - 1.",
                  "Verify the base: n = 1 gives 2 - 1 = 1.",
                  "Verify inductively: 2(2^(n-1) - 1) + 1 = 2^n - 1.",
                ],
              },
              {
                q: "Write the recurrence (with initial conditions) for merge sort and for binary search.",
                marks: 3,
              },
              {
                q: "Give the first six Fibonacci numbers from F_1 = F_2 = 1.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.6",
            title: "Solving homogeneous linear recurrences with constant coefficients",
            body: [
              "A k-th order linear homogeneous recurrence with constant coefficients is a_n = c1 a_{n-1} + ... + ck a_{n-k} with no extra term depending on n. The solving machine is the characteristic equation: guess solutions of the form a_n = r^n, substitute, divide by r^(n-k), and obtain c1 r^(k-1) + ... + ck = 0 - a polynomial in r. Every root of this polynomial contributes exponential building blocks, and the general solution is a linear combination of them; the initial conditions then fix the coefficients. Linearity is what makes superposition work: sums of solutions are solutions.",
              "Distinct-roots case. Fibonacci's characteristic equation r squared = r + 1 becomes r squared - r - 1 = 0 with roots phi = (1 + root 5)/2 and psi = (1 - root 5)/2. General solution: F_n = A phi^n + B psi^n. Initial conditions F_0 = 0, F_1 = 1 give A + B = 0 and A phi + B psi = 1, so A = 1/root 5, B = -1/root 5: F_n = (phi^n - psi^n)/root 5 - Binet's formula, showing Fibonacci grows like phi^n with phi about 1.618. Verify n = 2: (phi squared - psi squared)/root 5 = (phi + psi) = 1, using phi + psi = 1.",
              "Repeated-roots case. When the characteristic polynomial has a root r of multiplicity m, the naive r^n blocks are not enough - there are not enough degrees of freedom. The fix: multiply by powers of n. A root of multiplicity m contributes r^n, n r^n, n^2 r^n, ..., n^(m-1) r^n. Example: a_n = 6 a_{n-1} - 9 a_{n-2}, a_0 = 1, a_1 = 6. Characteristic equation r squared - 6 r + 9 = 0 is (r - 3) squared, a double root. Solution form a_n = (A + B n) 3^n; initial conditions give A = 1 and 3(A + B) = 6, so B = 1: a_n = (1 + n) 3^n. Check n = 2: (1 + 2) * 9 = 27 = 6 * 6 - 9 * 1.",
              "The procedure is always the same five moves, and complex roots extend it: a complex conjugate pair contributes cosine and sine components, e.g. the recurrence a_n = 2 a_{n-1} - 2 a_{n-2} has roots 1 plus or minus i, giving oscillating solutions. For the exam, memorise the checklist: write the characteristic polynomial, find all roots with multiplicities, write the general solution with n-powers on repeated roots, apply initial conditions one by one, verify one extra term. This machinery is exactly how the Master Theorem's cases are derived and how growth rates of recursive programs are computed.",
            ],
            bullets: [
              "Machine: guess a_n = r^n, substitute, divide by r^(n-k), get the characteristic polynomial.",
              "General solution: linear combination of r^n blocks; linearity permits superposition.",
              "Distinct roots r1, ..., rk: a_n = A1 r1^n + ... + Ak rk^n.",
              "Repeated root of multiplicity m: contribute r^n, n r^n, ..., n^(m-1) r^n.",
              "Initial conditions applied one at a time give a linear system for the coefficients.",
              "Fibonacci: roots (1 plus or minus root 5)/2; Binet's formula F_n = (phi^n - psi^n)/root 5.",
              "Worked double root: a_n = 6 a_{n-1} - 9 a_{n-2} gives a_n = (1 + n) 3^n.",
              "Complex conjugate roots give oscillating components; always verify one extra term at the end.",
            ],
            table: {
              caption: "Solving a_n = 6 a_{n-1} - 9 a_{n-2}, a_0 = 1, a_1 = 6.",
              headers: ["Step", "Work", "Result"],
              rows: [
                ["Characteristic equation", "r^2 - 6r + 9 = 0", "(r - 3)^2 = 0, double root 3"],
                ["General solution", "root 3 of multiplicity 2", "a_n = (A + B n) 3^n"],
                ["Use a_0", "(A + 0) * 1 = 1", "A = 1"],
                ["Use a_1", "(1 + B) * 3 = 6", "B = 1"],
                ["Answer + check", "a_2 = (1 + 2) * 9 = 27", "matches 6*6 - 9*1 = 27"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Characteristic equation: branch by root structure",
              caption:
                "The root types decide the shape of the general solution.",
              start: "Characteristic polynomial of the recurrence",
              branches: [
                { label: "k distinct real roots", outcome: "a_n = A1 r1^n + ... + Ak rk^n; coefficients from initial conditions", good: true },
                { label: "root r repeated m times", outcome: "add blocks r^n, n r^n, ..., n^(m-1) r^n for that root", good: true },
                { label: "complex conjugate pair", outcome: "convert to cosine/sine components with modulus and angle", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Repeated roots need the n factor",
              body: "The classic error: for (r - 3)^2 writing a_n = A 3^n + B 3^n, which collapses to one block with no freedom left. A multiplicity-m root must contribute n^0 r^n through n^(m-1) r^n - distinct blocks, m coefficients, matching the m initial conditions.",
            },
            keyTerms: [
              { term: "Characteristic equation", definition: "The polynomial obtained by substituting a_n = r^n into the recurrence; its roots build the solution." },
              { term: "Homogeneous", definition: "No extra term depending on n; the recurrence is a pure linear combination of earlier terms." },
              { term: "Multiplicity", definition: "The number of times a root repeats in the characteristic polynomial; determines the n-power blocks." },
              { term: "Binet's formula", definition: "F_n = (phi^n - psi^n)/root 5, the closed form of Fibonacci from distinct characteristic roots." },
            ],
            examQuestions: [
              {
                q: "Explain the characteristic-equation method for solving homogeneous linear recurrences. Solve a_n = 5 a_{n-1} - 6 a_{n-2} with a_0 = 1, a_1 = 0, verifying your answer against a_2 and a_3.",
                marks: 7,
                outline: [
                  "Describe the guess a_n = r^n and the resulting characteristic polynomial.",
                  "Write r^2 - 5 r + 6 = 0 = (r - 2)(r - 3); distinct roots 2 and 3.",
                  "General solution: a_n = A 2^n + B 3^n.",
                  "Apply a_0 = 1: A + B = 1.",
                  "Apply a_1 = 0: 2A + 3B = 0.",
                  "Solve: B = -2, A = 3; so a_n = 3 * 2^n - 2 * 3^n.",
                  "Verify: a_2 = 12 - 18 = -6 = 5*0 - 6*1; a_3 = 24 - 54 = -30 = 5*(-6) - 6*0.",
                ],
              },
              {
                q: "Write the general solution form of a_n = 4 a_{n-1} - 4 a_{n-2} before applying initial conditions.",
                marks: 3,
              },
              {
                q: "State the characteristic equation of the Fibonacci recurrence.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.7",
            title: "Nonhomogeneous recurrences: particular solutions",
            body: [
              "A nonhomogeneous linear recurrence adds a driving term: a_n = c1 a_{n-1} + ... + ck a_{n-k} + f(n). Superposition splits the problem in two: the homogeneous solution (set f = 0, solve by characteristic roots as in section 3.6) plus one particular solution - any single sequence satisfying the full recurrence. The general solution is their sum: a_n = a_n homogeneous + a_n particular, and the initial conditions then pin the remaining free constants. This mirrors the complementary-function-plus-particular-integral structure of differential equations.",
              "Guessing rules for common driving terms. If f(n) is a polynomial of degree d in n, try a polynomial of degree d as the particular solution. If f(n) is C * s^n for constant s, try P * s^n. If f(n) is an exponential times a polynomial, match both shapes. Worked example: a_n = 3 a_{n-1} + 2n, a_0 = 1. Homogeneous part: r - 3 = 0, giving A 3^n. Particular guess: p n + q. Substitute: p n + q = 3(p(n-1) + q) + 2n = (3p + 2) n + (3q - 3p). Match coefficients: p = 3p + 2 gives p = -1; constants: q = 3q - 3p = 3q + 3 gives q = -1.5. Particular solution: -n - 1.5. General: a_n = A 3^n - n - 1.5; a_0 = 1 forces A = 2.5. Answer: a_n = 2.5 * 3^n - n - 1.5; check n = 1: 7.5 - 2.5 = 5 = 3*1 + 2 - verified.",
              "Resonance: when the driving term's shape collides with a homogeneous block, the naive guess fails - the substituted equation becomes unsolvable - and the guess must be multiplied by n (or by a higher power for higher-order collisions). Example: a_n = 2 a_{n-1} + 2^n. The homogeneous root is exactly 2 and f(n) = 2^n - resonance. Guess n * P * 2^n. Substituting: n P 2^n = 2 (n-1) P 2^(n-1) + 2^n = (n-1) P 2^n + 2^n, so n P = (n-1) P + 1, giving P = 1. Solution: a_n = A 2^n + n 2^n. The moral: always solve the homogeneous part first, then check whether f(n) lives inside it before guessing.",
              "Nonhomogeneous recurrences model real systems with input: interest-bearing accounts with deposits (a_n = 1.05 a_{n-1} + 1000), servers with arrival rates, and amortised analysis where the driving term is the per-operation work. The split-and-guess discipline is also exactly how control engineers analyse linear systems and how the Master Theorem's additive f(n) term is handled in divide-and-conquer recurrences. In exams, the marks live in three places: the correct homogeneous solve, the correctly shaped guess (with the resonance factor if needed), and one verified extra term at the end.",
            ],
            bullets: [
              "Split: general solution = homogeneous solution + one particular solution.",
              "Homogeneous part: solve with f = 0 by characteristic roots (section 3.6).",
              "Polynomial f(n) of degree d: try a degree-d polynomial particular solution.",
              "Exponential f(n) = C s^n: try P s^n; exponential times polynomial: match both shapes.",
              "Resonance rule: if s^n is already a homogeneous block (root s of multiplicity m), multiply the guess by n^m.",
              "Worked: a_n = 3 a_{n-1} + 2n, a_0 = 1 gives a_n = 2.5 * 3^n - n - 1.5; check n = 1 gives 5.",
              "Worked resonance: a_n = 2 a_{n-1} + 2^n needs guess n P 2^n, giving a_n = A 2^n + n 2^n.",
              "Always verify the final closed form against one extra term generated directly.",
            ],
            table: {
              caption: "Solving a_n = 3 a_{n-1} + 2n, a_0 = 1.",
              headers: ["Stage", "Work", "Result"],
              rows: [
                ["Homogeneous", "r - 3 = 0", "A 3^n"],
                ["Particular guess", "p n + q (degree matches f)", "substitute"],
                ["Match n coefficients", "p = 3p + 2", "p = -1"],
                ["Match constants", "q = 3q - 3p = 3q + 3", "q = -1.5"],
                ["General + initial", "A 3^n - n - 1.5 with a_0 = 1", "A = 2.5"],
                ["Verify n = 1", "2.5*3 - 1 - 1.5 = 5", "equals 3*1 + 2"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Solving a nonhomogeneous recurrence",
              caption:
                "Two independent solves, one addition, one resonance check before guessing.",
              steps: [
                { label: "Solve homogeneous part", note: "set f = 0; characteristic roots" },
                { label: "Check resonance", note: "does f(n) have the shape of a homogeneous block?" },
                { label: "Guess particular solution", note: "polynomial or exponential; multiply by n^m if resonant" },
                { label: "Substitute and match", note: "equate coefficients to fix the particular constants" },
                { label: "Add and apply initial conditions", note: "fix the homogeneous constants; verify one extra term" },
              ],
            },
            callout: {
              type: "tip",
              title: "Announce the split in your answer",
              body: "Write 'Homogeneous solution: ...' and 'Particular solution: ...' as two labelled blocks before adding them. Examiners mark the blocks separately - a correct homogeneous solve earns marks even if the particular guess fails, and vice versa.",
            },
            keyTerms: [
              { term: "Nonhomogeneous recurrence", definition: "A linear recurrence with an extra driving term f(n) not involving a_i." },
              { term: "Particular solution", definition: "Any single sequence satisfying the full nonhomogeneous recurrence." },
              { term: "Homogeneous (complementary) solution", definition: "The general solution of the recurrence with f = 0." },
              { term: "Resonance", definition: "The driving term matching a homogeneous block, forcing the guess to be multiplied by a power of n." },
            ],
            examQuestions: [
              {
                q: "Explain the homogeneous-plus-particular method. Solve a_n = 2 a_{n-1} + 3^n with a_0 = 1, handling any resonance correctly, and verify your solution for n = 1 and n = 2.",
                marks: 7,
                outline: [
                  "State the split into complementary and particular parts.",
                  "Homogeneous: r = 2, giving A 2^n.",
                  "Resonance check: f(n) = 3^n is not a homogeneous block, so guess P 3^n.",
                  "Substitute: P 3^n = 2 P 3^(n-1) + 3^n; divide by 3^(n-1): 3P = 2P + 3, so P = 3.",
                  "General: a_n = A 2^n + 3 * 3^n.",
                  "Apply a_0 = 1: A + 3 = 1, so A = -2; answer a_n = 3^(n+1) - 2^(n+1).",
                  "Verify: a_1 = 9 - 4 = 5 = 2*1 + 3; a_2 = 27 - 8 = 19 = 2*5 + 9.",
                ],
              },
              {
                q: "Solve a_n = 3 a_{n-1} + 2n, a_0 = 1 (particular solution of the form p n + q).",
                marks: 3,
              },
              {
                q: "In a_n = 2 a_{n-1} + 2^n, why is P 2^n not a valid particular guess?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.8",
            title: "Generating functions",
            body: [
              "A generating function packages an entire sequence a_0, a_1, a_2, ... into one series G(x) = a_0 + a_1 x + a_2 x^2 + ... - the coefficient of x^n is a_n. Nothing needs to converge; the series is a bookkeeping device. Ordinary generating functions suit counting sequences: the geometric series 1/(1 - x) = 1 + x + x^2 + ... encodes the all-ones sequence, and multiplying by x shifts the sequence one step. This one encoding turns recurrence-solving, combinatorial counting and probability computations into polynomial algebra.",
              "The algebra toolkit. Shifting: the coefficient of x^n in x G(x) is a_{n-1}. Differentiating multiplies the coefficient of x^n by n. Adding adds sequences pointwise. The master identities: 1/(1 - x) = sum x^n (all ones); 1/(1 - c x) = sum c^n x^n (geometric growth); (1 + x)^n = sum C(n, k) x^k (binomial); 1/(1 - x)^k = sum C(n + k - 1, k - 1) x^n (stars and bars). These four generate almost every sequence an exam asks about, and combinations of them - sums, products, derivatives - generate the rest.",
              "Solving a recurrence by generating functions, worked on Fibonacci. Let F(x) = sum F_n x^n with F_0 = 0, F_1 = 1. Multiply the recurrence F_n = F_{n-1} + F_{n-2} by x^n and sum over n >= 2: the left side is F(x) - F_1 x = F(x) - x; the first right term is x F(x); the second is x^2 F(x). So F(x) - x = x F(x) + x^2 F(x), giving F(x) = x / (1 - x - x^2). Factor 1 - x - x^2 = (1 - phi x)(1 - psi x) with phi = (1 + root 5)/2, psi = (1 - root 5)/2. Partial fractions give F(x) = (1/root 5) (1/(1 - phi x) - 1/(1 - psi x)); reading coefficients via the geometric identity reproduces Binet's formula. The recurrence became algebra; algebra became the closed form.",
              "Generating functions also count combinatorial objects directly. How many non-negative integer solutions does x1 + x2 + x3 = 7 have? Each variable contributes (1 + x + x^2 + ...) = 1/(1 - x); the product is 1/(1-x)^3, whose x^7 coefficient is C(7 + 3 - 1, 3 - 1) = C(9, 2) = 36 - stars and bars derived, not memorised. With upper bounds, truncate the factors: each xi <= 3 replaces 1/(1-x) by 1 + x + x^2 + x^3. This is precisely how dice-total probabilities, coin-change counting and subset-sum dynamic programs are analysed - the generating function is the mathematical blueprint of the DP table.",
            ],
            bullets: [
              "Generating function of a sequence: G(x) = sum a_n x^n; the coefficient of x^n is a_n.",
              "Key identities: 1/(1-x) = all ones; 1/(1 - c x) = c^n; (1+x)^n = C(n, k); 1/(1-x)^k = C(n+k-1, k-1).",
              "Shift by x: the coefficient of x^n in x G(x) is a_{n-1}; differentiation scales by n.",
              "Solving recurrences: multiply by x^n, sum over n, express everything via G(x), solve for G(x), expand back.",
              "Worked: Fibonacci gives F(x) = x/(1 - x - x^2) = Binet's formula by partial fractions.",
              "Counting: the number of solutions of x1 + ... + xk = N is the x^N coefficient of 1/(1-x)^k.",
              "Upper bounds: truncate factors; xi <= 3 replaces 1/(1-x) by 1 + x + x^2 + x^3.",
              "CS link: coin change, dice sums, subset-sum DP - coefficients are the DP table entries.",
            ],
            table: {
              caption: "The generating function toolkit.",
              headers: ["Closed form", "Series", "Sequence encoded"],
              rows: [
                ["1/(1 - x)", "1 + x + x^2 + ...", "a_n = 1"],
                ["1/(1 - c x)", "1 + c x + c^2 x^2 + ...", "a_n = c^n"],
                ["(1 + x)^n", "C(n,0) + C(n,1) x + ...", "binomial coefficients"],
                ["1/(1 - x)^k", "C(k-1, k-1) + C(k, k-1) x + ...", "C(n + k - 1, k - 1)"],
                ["x / (1 - x - x^2)", "x + x^2 + 2x^3 + 3x^4 + ...", "Fibonacci shifted"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Recurrence to closed form via generating function",
              caption:
                "Four stages - the recurrence dies in stage 2 and algebra takes over.",
              stages: [
                { label: "Define G(x)", note: "sum a_n x^n; list initial conditions" },
                { label: "Multiply recurrence by x^n and sum", note: "express shifts as x G(x), x^2 G(x)" },
                { label: "Solve for G(x)", note: "algebraic equation; factor the denominator" },
                { label: "Expand and read coefficients", note: "partial fractions + geometric series = a_n" },
              ],
            },
            callout: {
              type: "tip",
              title: "Coefficient extraction is the answer",
              body: "When a generating-function question ends, write the extraction step explicitly: 'the required count is the coefficient of x^7 in 1/(1-x)^3, which is C(9, 2) = 36'. The bracketed sentence is what the marker searches for; the algebra before it only earns partial credit.",
            },
            keyTerms: [
              { term: "Ordinary generating function", definition: "G(x) = sum a_n x^n; a bookkeeping series whose coefficients encode the sequence." },
              { term: "Geometric series identity", definition: "1/(1 - c x) = sum c^n x^n - the generating function of exponential sequences." },
              { term: "Partial fractions", definition: "Splitting a rational function into simple 1/(1 - r x) pieces whose coefficients are read directly." },
              { term: "Coefficient extraction", definition: "Reading the answer as the coefficient of x^N in a product of generating functions." },
            ],
            examQuestions: [
              {
                q: "Define the ordinary generating function of a sequence. Use generating functions to solve the Fibonacci recurrence F_n = F_{n-1} + F_{n-2}, F_0 = 0, F_1 = 1, and state the resulting closed form.",
                marks: 7,
                outline: [
                  "Define G(x) = sum F_n x^n.",
                  "Multiply the recurrence by x^n and sum for n >= 2.",
                  "Left: F(x) - x; shifts give x F(x) and x^2 F(x).",
                  "Equation: F(x) - x = x F(x) + x^2 F(x), so F(x) = x/(1 - x - x^2).",
                  "Factor the denominator: (1 - phi x)(1 - psi x).",
                  "Partial fractions: F(x) = (1/root 5)(1/(1 - phi x) - 1/(1 - psi x)).",
                  "Read coefficients: F_n = (phi^n - psi^n)/root 5 (Binet), consistent with F_0 = 0, F_1 = 1.",
                ],
              },
              {
                q: "Use generating functions to count non-negative solutions of x1 + x2 + x3 = 7.",
                marks: 3,
              },
              {
                q: "Write the generating function of the sequence a_n = 2^n and of a_n = 1 for all n.",
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
      title: "Graph Theory",
      summary:
        "Graphs from every angle: terminology and types, matrix representations, walks and connectivity, Euler and Hamiltonian circuits, trees and minimum spanning trees, planarity and Euler's formula, colouring, and directed graphs with shortest paths.",
      chapter: {
        number: "04",
        title: "Graphs, Trees, Planarity and Colouring",
        intro:
          "Unit IV studies the mathematics of connections. Vertices and edges model networks of every kind; matrices store them; Euler circuits trace every edge, Hamiltonian circuits visit every vertex; trees are the minimal connected skeletons with spanning-tree algorithms; planar graphs obey Euler's formula; colouring measures conflict; and directed graphs add direction, powering shortest-path computation.",
        inOneBreath:
          "A graph G = (V, E) is vertices plus edges; degree sum = 2|E| (handshaking); store as adjacency matrix, incidence matrix or lists; Euler circuit = connected + all even degrees; Hamiltonian circuit visits every vertex once (Dirac: degree >= n/2); a tree is connected and acyclic with n - 1 edges; MST by Kruskal (sort edges, union-find) or Prim (grow from a vertex); planar graphs satisfy v - e + f = 2 with e <= 3v - 6; chromatic number colours with no adjacent repeats (bipartite = 2, planar <= 4); Dijkstra computes shortest paths greedily with nonnegative weights.",
        sections: [
          {
            number: "4.1",
            title: "Graphs: terminology and types",
            body: [
              "A graph is a pair G = (V, E): a set V of vertices (nodes) and a set E of edges, each edge a pair of vertices. An undirected edge {u, v} connects both ways; a directed edge (u, v) runs from u to v only, giving a digraph. In a simple graph there is at most one edge between any pair and no edge from a vertex to itself; a multigraph allows parallel edges; a loop joins a vertex to itself. Weighted graphs attach a number (distance, cost, capacity) to each edge - the model behind maps, networks and scheduling.",
              "The degree of a vertex is the number of edges touching it (in a digraph, split into indegree and outdegree). The handshaking theorem: the sum of all degrees equals twice the number of edges, because every edge contributes exactly two endpoints - sum of degrees = 2|E|. A direct corollary: the number of odd-degree vertices in any graph is even. A vertex of degree 0 is isolated; degree 1 is pendant. For example, a graph on 5 vertices with degrees 4, 3, 3, 2, 2 has 14/2 = 7 edges.",
              "Special graphs recur in every exam. The complete graph K_n has all C(n, 2) = n(n-1)/2 possible edges - K_4 has 6 edges, K_5 has 10. The cycle C_n is a ring of n vertices, each of degree 2. The bipartite graph K_{m,n} splits vertices into two parts with all edges crossing between parts - m * n edges; K_{3,3} has 9. A bipartite graph contains no odd cycle - the test used to check whether a graph can model a two-sided matching. Subgraphs, induced subgraphs (take a vertex subset plus all edges between them) and isomorphism (same structure, relabelled vertices) complete the vocabulary.",
              "Graphs are the modelling language of computer science. The internet is a weighted digraph of routers; social networks are undirected graphs with degree = friend count; state machines in compilers are digraphs; the web itself is a digraph whose PageRank is built from the indegree structure; and bipartite graphs model job-to-candidate matching, the basis of stable matching and recommendation systems. The first step of every applied graph problem is the same as the first step of every exam problem: decide vertices, decide edges, decide whether direction and weight are needed.",
            ],
            bullets: [
              "Graph G = (V, E): vertices and edges; directed edges make a digraph.",
              "Simple graph: no parallel edges, no loops; multigraph allows both.",
              "Degree: number of incident edges; handshaking: sum of degrees = 2|E|.",
              "Corollary: the number of odd-degree vertices is always even.",
              "Complete graph K_n: C(n, 2) edges - K_5 has 10.",
              "Bipartite K_{m,n}: m * n edges; bipartite iff no odd cycle.",
              "Worked: degrees 4, 3, 3, 2, 2 sum to 14, so the graph has 7 edges.",
              "Applications: internet routing, social networks, state machines, PageRank, matching.",
            ],
            table: {
              caption: "Standard graph families and their edge counts.",
              headers: ["Graph", "Vertices", "Edges", "Degrees"],
              rows: [
                ["Complete K_n", "n", "n(n-1)/2", "all n - 1"],
                ["Cycle C_n", "n", "n", "all 2"],
                ["Bipartite K_{m,n}", "m + n", "m * n", "m side: n; n side: m"],
                ["Star K_{1,n}", "n + 1", "n", "center n; leaves 1"],
                ["Path P_n", "n", "n - 1", "2 internal, 1 at ends"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the right graph model",
              caption:
                "Three modelling decisions define the graph before any algorithm runs.",
              start: "Real-world system to model",
              branches: [
                { label: "connections are symmetric", outcome: "undirected graph: friendship, roads, circuits", good: true },
                { label: "connections have direction", outcome: "digraph: web links, dependencies, state transitions", good: true },
                { label: "multiple links or self-links needed", outcome: "multigraph or pseudograph: flight routes, electrical nets", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Handshaking solves degree puzzles instantly",
              body: "Whenever a question gives degrees and asks for edge count (or vice versa), use sum of degrees = 2|E|. And to check whether a degree sequence like (3, 3, 3, 3, 2) is even possible: the sum must be even (here 14, fine) and each degree must be below n = 5.",
            },
            keyTerms: [
              { term: "Degree of a vertex", definition: "The number of edges incident to it; in digraphs, split into indegree and outdegree." },
              { term: "Handshaking theorem", definition: "The sum of all vertex degrees equals twice the number of edges." },
              { term: "Simple graph", definition: "No parallel edges and no loops." },
              { term: "Bipartite graph", definition: "Vertices split into two parts with all edges crossing between parts; contains no odd cycle." },
              { term: "Isomorphic graphs", definition: "Graphs identical up to relabelling of vertices." },
            ],
            examQuestions: [
              {
                q: "Define graph, degree, simple graph and bipartite graph. State and prove the handshaking theorem, and use it to determine the number of edges of a graph with degree sequence (4, 3, 3, 2, 2). Can a graph have exactly one vertex of odd degree? Justify.",
                marks: 7,
                outline: [
                  "Give the four definitions with mini-examples.",
                  "Prove handshaking: every edge has exactly two endpoints, so summing degrees counts each edge twice.",
                  "Sum degrees: 4 + 3 + 3 + 2 + 2 = 14; edges = 14/2 = 7.",
                  "Odd-degree corollary: the number of odd-degree vertices is even.",
                  "Hence exactly one odd-degree vertex is impossible - the sum of degrees would be odd, contradicting 2|E|.",
                  "Draw a small example graph realising the degree sequence (5 vertices, 7 edges).",
                  "Optionally note K_5 has 10 edges as a completeness reference.",
                ],
              },
              {
                q: "How many edges does K_6 have? What is the degree of each vertex?",
                marks: 2,
              },
              {
                q: "Draw (or describe) the bipartite graph K_{2,3} and count its edges.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Representing graphs: adjacency and incidence structures",
            body: [
              "A graph on n vertices can be stored in three standard ways, and choosing among them is a performance decision. The adjacency matrix is an n x n 0/1 matrix A with A[i][j] = 1 when an edge joins vertex i and vertex j. Undirected graphs give symmetric matrices; digraphs generally do not. The degree of vertex i is the row sum. The matrix supports fast edge queries - O(1) per 'is (i, j) an edge?' - and matrix algebra answers reachability questions: the (i, j) entry of A^k counts walks of length k from i to j.",
              "The adjacency list stores, for each vertex, the list of its neighbours: total memory O(n + e) versus O(n^2) for the matrix. Sparse graphs (e much less than n^2 - road networks, the web) overwhelmingly prefer lists; dense graphs or tiny graphs may prefer matrices. The incidence matrix is n x e with entry 1 when vertex i touches edge j - useful in electrical network analysis and for computing cycle spaces, but rarely used for storage. Weighted graphs extend the adjacency matrix to store weights with a sentinel (infinity) for missing edges.",
              "Worked example. Graph: vertices 1..4, edges {1,2}, {1,3}, {2,4}, {3,4} (a 4-cycle 1-2-4-3-1). Adjacency matrix: row 1 = (0, 1, 1, 0); row 2 = (1, 0, 0, 1); row 3 = (1, 0, 0, 1); row 4 = (0, 1, 1, 0) - symmetric, as required, with row sums all 2 (each vertex has degree 2). Compute A^2 and the (1,1) entry becomes 2: exactly the two walks of length 2 from vertex 1 back to itself (1-2-1 and 1-3-1) - matrix multiplication literally counts walks.",
              "The choice of representation decides algorithm complexity. Depth-first and breadth-first search run in O(n + e) on lists but O(n^2) on matrices; edge-existence queries invert that trade-off. Floyd-Warshall's all-pairs shortest paths wants the matrix; Kruskal's MST wants a sorted edge list. In databases and social-network engines, adjacency lists are literally the friends-of-user table. For the exam, be ready to convert a drawn graph into all three representations and to state the memory and query costs of each - it is a guaranteed 3-mark question type.",
            ],
            bullets: [
              "Adjacency matrix A[i][j] = 1 iff edge (i, j); symmetric for undirected graphs.",
              "Row sum of A = degree of the vertex; diagonal of A^2 gives degrees too.",
              "Entry (i, j) of A^k counts walks of length k from i to j - matrix power = path counting.",
              "Adjacency list: neighbours per vertex; memory O(n + e), best for sparse graphs.",
              "Matrix: O(n^2) memory but O(1) edge query; best for dense graphs.",
              "Incidence matrix n x e: entry 1 where vertex meets edge; used in network analysis.",
              "Worked 4-cycle: rows (0,1,1,0), (1,0,0,1), (1,0,0,1), (0,1,1,0); A^2[1][1] = 2.",
              "Weighted variant: store weights, use a sentinel for 'no edge'.",
            ],
            table: {
              caption: "Adjacency matrix of the 4-cycle 1-2-4-3-1.",
              headers: ["", "1", "2", "3", "4"],
              rows: [
                ["1", "0", "1", "1", "0"],
                ["2", "1", "0", "0", "1"],
                ["3", "1", "0", "0", "1"],
                ["4", "0", "1", "1", "0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Adjacency matrix vs adjacency list",
              caption:
                "The storage trade-off every graph algorithm designer makes.",
              left: {
                heading: "Adjacency matrix",
                items: [
                  "Memory: O(n^2) always",
                  "Edge query: O(1) - direct array read",
                  "Enumerate neighbours: O(n) per vertex",
                  "Matrix powers count walks",
                  "Best: dense graphs, Floyd-Warshall, small n",
                ],
              },
              right: {
                heading: "Adjacency list",
                items: [
                  "Memory: O(n + e) - sparse-friendly",
                  "Edge query: O(degree) - scan the list",
                  "Enumerate neighbours: O(degree) - only real edges",
                  "DFS/BFS run in O(n + e)",
                  "Best: sparse graphs, web-scale data",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The A^k walk-counting fact earns marks",
              body: "Quote it whenever a matrix question appears: 'the (i, j) entry of A^k is the number of walks of length k from i to j'. Prove it by a one-line induction on walks through an intermediate vertex - it converts matrix multiplication into combinatorics and vice versa.",
            },
            keyTerms: [
              { term: "Adjacency matrix", definition: "n x n matrix with A[i][j] = 1 iff vertices i and j are joined by an edge." },
              { term: "Adjacency list", definition: "Per-vertex list of neighbours; total size O(n + e)." },
              { term: "Incidence matrix", definition: "n x e matrix with entry 1 where vertex i meets edge j." },
              { term: "Sparse graph", definition: "A graph with e much less than n^2 edges; lists beat matrices here." },
            ],
            examQuestions: [
              {
                q: "Define the adjacency matrix and adjacency list of a graph. For the graph with edges {1,2}, {1,3}, {1,4}, {2,4}, {3,4}, write the adjacency matrix, the degree of each vertex from row sums, and compute A^2 to count the walks of length 2 from vertex 1 to vertex 4.",
                marks: 7,
                outline: [
                  "Define both representations and the incidence matrix briefly.",
                  "Write the 4x4 matrix: row 1 = (0,1,1,1), row 2 = (1,0,0,1), row 3 = (1,0,0,1), row 4 = (1,1,1,0).",
                  "Degrees from row sums: 3, 2, 2, 3.",
                  "Compute A^2 row 1: entries (3, 1, 1, 2) - show the dot products.",
                  "A^2[1][4] = 2: walks 1-2-4 and 1-3-4.",
                  "Note symmetry of A and of A^2 diagonal entries equal degrees.",
                  "State memory/query trade-off: matrix O(n^2) vs list O(n + e).",
                ],
              },
              {
                q: "When is an adjacency matrix symmetric, and what does its diagonal tell you?",
                marks: 2,
              },
              {
                q: "A graph has n = 100 vertices and e = 300 edges. Which representation saves memory, and roughly by how much?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Walks, paths, connectivity and Euler circuits",
            body: [
              "A walk is any sequence of adjacent vertices v0, v1, ..., vk; a trail repeats no edge; a path repeats no vertex; a circuit (or cycle) is a closed trail. Connectivity: a graph is connected when every pair of vertices is joined by some walk; a maximal connected piece is a component. Distance between two vertices is the length of the shortest path, and the diameter of a graph is the largest such distance. These words must be used precisely - 'walk allows repetition, path forbids it' is a distinction RGPV questions test directly.",
              "The Euler story is about edges. An Euler circuit traverses every edge exactly once and returns to the start; an Euler path traverses every edge exactly once without returning. Euler's 1736 Konigsberg bridge problem - can you cross all seven bridges once? - founded graph theory: the answer is no, because all four land degrees are odd. The criterion is clean and provable: a connected graph has an Euler circuit iff every vertex has even degree (each visit uses two edges, so departures must match arrivals); it has an Euler path (not circuit) iff exactly two vertices have odd degree - those become the start and end.",
              "Worked application. A graph on vertices A, B, C, D with edges AB, AC, AD, BC, BD, CD: this is K_4, every vertex of degree 3 - three odd vertices, so no Euler path exists at all. Contrast a square with one diagonal: degrees 3, 2, 3, 2 - exactly two odd vertices (the two of degree 3), so an Euler path exists starting and ending at those vertices. To actually construct the circuit, use Hierholzer's method: keep walking any unused edges, and when stuck at the start vertex, splice in sub-tours from vertices with unused edges - the result covers every edge exactly once.",
              "Euler-type reasoning is used in real systems constantly: route inspection problems (snow ploughs and mail delivery want to traverse every street at least once, doubling odd-degree streets in the Chinese Postman solution), network testing (probe every link of a network exactly once), and DNA sequence assembly, where reads are edges of a de Bruijn graph and assembly is literally finding an Euler path - the technique behind modern genome sequencing. Note the boundary: Euler theory needs connectivity, so always check the graph is connected (ignoring isolated vertices) before applying the degree criterion.",
            ],
            bullets: [
              "Walk: any adjacent sequence; trail: no repeated edge; path: no repeated vertex; circuit: closed trail.",
              "Connected: every pair of vertices joined by a walk; components are maximal connected pieces.",
              "Euler circuit: every edge exactly once, closed; Euler path: every edge once, open.",
              "Euler circuit iff connected and all degrees even - each visit consumes edges in pairs.",
              "Euler path iff connected with exactly two odd-degree vertices (start and finish).",
              "Konigsberg bridges: four land masses all odd degree - no Euler path, founding result of graph theory.",
              "Worked: K_4 has four degree-3 vertices - no Euler path; square plus diagonal works.",
              "Applications: Chinese Postman route inspection, link probing, DNA assembly via de Bruijn graphs.",
            ],
            table: {
              caption: "Degree conditions for Euler traversals.",
              headers: ["Degree pattern", "Euler circuit?", "Euler path?"],
              rows: [
                ["all even", "yes (start = finish)", "yes"],
                ["exactly two odd", "no", "yes (between the two odd vertices)"],
                ["four or more odd", "no", "no"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Deciding Euler traversability in three checks",
              caption:
                "Count the odd-degree vertices - the whole decision lives there.",
              start: "Connected graph G",
              branches: [
                { label: "all degrees even", outcome: "Euler circuit exists - closed tour over every edge", good: true },
                { label: "exactly two odd degrees", outcome: "Euler path only - from one odd vertex to the other", good: true },
                { label: "4+ odd degrees", outcome: "no Euler traversal - edges cannot be paired at visits", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Connectivity first, degrees second",
              body: "The degree criterion silently assumes the graph is connected. A graph made of two separate even-degree cycles has all even degrees but no Euler circuit covering both. Always write 'G is connected' as step 1 - examiners deduct for the missing check.",
            },
            keyTerms: [
              { term: "Walk / trail / path", definition: "Sequences of adjacent vertices; trails repeat no edge, paths repeat no vertex." },
              { term: "Euler circuit", definition: "A closed traversal using every edge exactly once; exists iff connected with all degrees even." },
              { term: "Euler path", definition: "An open traversal using every edge exactly once; exists iff connected with exactly two odd degrees." },
              { term: "Konigsberg bridge problem", definition: "Euler's 1736 question whose negative answer founded graph theory." },
              { term: "Chinese Postman problem", definition: "Shortest closed tour covering every edge at least once; solved by duplicating edges to fix odd degrees." },
            ],
            examQuestions: [
              {
                q: "Define walk, path, circuit and Euler circuit. State and prove the criterion for the existence of an Euler circuit, and determine whether Euler circuits or paths exist for graphs with degree sequences (2, 2, 2, 2), (3, 3, 2, 2) and (3, 3, 3, 3).",
                marks: 7,
                outline: [
                  "Give the four definitions.",
                  "State: connected + all degrees even iff Euler circuit; exactly two odd degrees iff Euler path.",
                  "Prove necessity: entering and leaving a vertex pairs up incident edges, so mid-tour vertices need even degree; the closed tour gives the start the same pairing.",
                  "Sketch sufficiency via Hierholzer splicing of sub-tours.",
                  "(2, 2, 2, 2): the 4-cycle - Euler circuit exists.",
                  "(3, 3, 2, 2): two odd vertices - Euler path exists, e.g. square with a diagonal.",
                  "(3, 3, 3, 3): four odd vertices - neither exists (mention Konigsberg).",
                ],
              },
              {
                q: "A connected graph has exactly two vertices of odd degree. Describe its Euler path.",
                marks: 3,
              },
              {
                q: "Why did the Konigsberg bridge problem have no solution? Answer in one sentence with degrees.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Hamiltonian graphs and travelling salesman flavour",
            body: [
              "A Hamiltonian circuit visits every vertex exactly once and returns to the start; a Hamiltonian path visits every vertex exactly once without returning. Where Euler theory is about edges, Hamiltonian theory is about vertices - and where Euler has a clean criterion, Hamiltonian does not: deciding whether an arbitrary graph has a Hamiltonian circuit is NP-complete, one of the founding problems of complexity theory. What survives for the exam is a family of sufficient conditions: guarantees that a circuit exists, without an iff test.",
              "The two name-brand theorems. Dirac's theorem: a simple graph on n >= 3 vertices in which every vertex has degree at least n/2 has a Hamiltonian circuit. Ore's theorem (its generalisation): if for every pair of non-adjacent vertices u, v the degrees satisfy deg(u) + deg(v) >= n, the graph is Hamiltonian. Both are proved the same way - take a longest path, show its endpoints can be connected into a cycle, then extend the cycle to cover all vertices. Quick uses: K_5 (degree 4 >= 2.5) is Hamiltonian; the cycle C_n itself (degree 2 >= n/2 only when n <= 4) needs other arguments but is obviously Hamiltonian.",
              "Worked reasoning. Graph: 6 vertices, degrees (3, 3, 3, 3, 3, 3) - a cubic graph. Dirac needs degree >= 3: n/2 = 3, and every degree is 3, so Dirac applies and a Hamiltonian circuit exists - even though we never constructed it. Contrast the Petersen graph: 10 vertices, all degree 3, but famously non-Hamiltonian - proving that Dirac-style conditions are sufficient, not necessary, and that n/2 = 5 is far above degree 3 there. Another classic check: K_{3,3} is Hamiltonian (alternate parts around a 6-cycle) while K_{2,3} is not - a bipartite Hamiltonian circuit must alternate parts, so the parts must be equal in size.",
              "The practical face of Hamiltonian cycles is the Travelling Salesman Problem: visit every city once, minimise total distance - NP-complete, solved in practice by branch-and-bound, dynamic programming over subsets (Held-Karp, O(n^2 2^n)) and approximation algorithms (Christofides gives a 1.5-approximation on metric instances). TSP underlies vehicle routing, chip wafer sequencing (minimising lithography stage moves) and drilled-hole sequencing on circuit boards. In exams, expect: state Dirac/Ore, apply them to given degree sequences, explain the K_{2,3} bipartite obstruction, and describe TSP as the weighted optimisation version of the Hamiltonian cycle.",
            ],
            bullets: [
              "Hamiltonian circuit: every vertex exactly once, closed; path: same without returning.",
              "No clean iff criterion exists - the decision problem is NP-complete.",
              "Dirac: minimum degree >= n/2 (n >= 3) forces a Hamiltonian circuit.",
              "Ore: deg(u) + deg(v) >= n for every non-adjacent pair forces a Hamiltonian circuit.",
              "Worked: cubic graph on 6 vertices, all degrees 3 >= 6/2 - Dirac applies.",
              "Bipartite obstruction: a Hamiltonian circuit alternates parts, so K_{m,n} is Hamiltonian only when m = n >= 2; K_{2,3} fails.",
              "Petersen graph: 3-regular, non-Hamiltonian - sufficiency is not necessity.",
              "TSP: the weighted optimisation of Hamiltonian cycles; Held-Karp DP and Christofides approximation in practice.",
            ],
            table: {
              caption: "Applying Dirac and Ore to sample graphs.",
              headers: ["Graph", "n", "min degree", "Dirac verdict", "Hamiltonian?"],
              rows: [
                ["K_5", "5", "4", "4 >= 2.5, applies", "yes"],
                ["Cubic on 6 vertices", "6", "3", "3 >= 3, applies", "yes"],
                ["C_6", "6", "2", "2 < 3, silent", "yes (trivially)"],
                ["K_{2,3}", "5", "2", "2 < 2.5, silent", "no (bipartite imbalance)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Euler vs Hamiltonian",
              caption:
                "The twin traversal theories - memorise the contrast, it is a recurring short question.",
              left: {
                heading: "Euler (edges)",
                items: [
                  "Traverses every edge exactly once",
                  "Clean iff criterion: degree pattern",
                  "All even degrees give a closed tour",
                  "Polynomial-time decision",
                  "Konigsberg bridges origin",
                ],
              },
              right: {
                heading: "Hamiltonian (vertices)",
                items: [
                  "Visits every vertex exactly once",
                  "No iff criterion - NP-complete decision",
                  "Dirac / Ore give sufficient conditions",
                  "TSP is the weighted optimisation",
                  "Icosahedron game origin",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Sufficient is not necessary",
              body: "If Dirac's condition fails, do not conclude 'not Hamiltonian' - the theorem is silent, not negative. Write 'Dirac does not apply' and then reason directly (construct a cycle or cite an obstruction such as bipartite imbalance). Confusing 'condition fails' with 'circuit fails' is the standard mark-loss here.",
            },
            keyTerms: [
              { term: "Hamiltonian circuit", definition: "A closed traversal visiting every vertex exactly once." },
              { term: "Dirac's theorem", definition: "Minimum degree at least n/2 (n >= 3) guarantees a Hamiltonian circuit." },
              { term: "Ore's theorem", definition: "deg(u) + deg(v) >= n for every non-adjacent pair guarantees a Hamiltonian circuit." },
              { term: "Travelling Salesman Problem", definition: "The weighted Hamiltonian-cycle minimisation; NP-complete." },
            ],
            examQuestions: [
              {
                q: "Define Hamiltonian path and circuit. State Dirac's and Ore's theorems. Use them (or explain why they are silent) for K_5, C_6 and K_{2,3}, and explain why every bipartite Hamiltonian circuit alternates between the two parts.",
                marks: 7,
                outline: [
                  "Definitions of path and circuit variants.",
                  "Dirac: min degree >= n/2 with n >= 3; Ore: deg(u) + deg(v) >= n for non-adjacent pairs.",
                  "K_5: degree 4 >= 2.5 - Hamiltonian by Dirac; indeed any order of vertices works.",
                  "C_6: min degree 2 < 3, Dirac silent; but the cycle itself is Hamiltonian.",
                  "K_{2,3}: min degree 2 < 2.5, Dirac silent; parts unequal, so no circuit can alternate and close - not Hamiltonian.",
                  "Explain alternation: consecutive circuit vertices are adjacent; in a bipartite graph adjacency crosses parts, so the closed even-length tour needs equal part sizes.",
                  "Conclude with TSP as the weighted version and its NP-completeness.",
                ],
              },
              {
                q: "State Ore's condition and apply it to a graph on 6 vertices where every two non-adjacent vertices have degree sum 6.",
                marks: 3,
              },
              {
                q: "Give one application of Hamiltonian cycles in industry.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Trees, spanning trees and minimum spanning trees",
            body: [
              "A tree is a connected graph with no cycles - equivalently, a connected graph with n - 1 edges, or a graph in which every pair of vertices is joined by a unique path. All these definitions are equivalent and each is the fastest route in a different exam question. Removing any edge disconnects a tree; adding any edge creates exactly one cycle - the two operational facts behind spanning-tree algorithms. Every tree with at least two vertices has at least two leaves (degree-1 vertices); a rooted tree designates one vertex as the root and layers vertices by distance from it, giving parent-child structure - the shape of every file system and DOM tree.",
              "A spanning tree of a connected graph G is a subgraph that is a tree and touches every vertex - a minimal skeleton keeping the graph connected. Any connected graph has one (delete cycle edges until none remain); a complete graph K_n has n^(n-2) distinct spanning trees (Cayley's formula - K_4 has 16). When edges carry weights, the minimum spanning tree (MST) is the spanning tree of least total weight; it models the cheapest network connecting all sites - cabling, pipelines, road building.",
              "Kruskal's algorithm builds the MST greedily by edge choice: sort all edges by weight; scan them in order, adding an edge exactly when it joins two different components (use union-find to test this in near-constant time); stop after n - 1 edges. Worked example on 4 vertices A, B, C, D with edges AB = 1, BC = 2, CD = 3, AD = 4, AC = 5: sorted order is AB(1), BC(2), CD(3), AD(4), AC(5). Add AB, add BC, add CD - three edges, done. MST weight = 1 + 2 + 3 = 6; AD(4) and AC(5) would close cycles and are skipped. Ties are broken arbitrarily and different tie-breaks may give different but equal-weight MSTs.",
              "Prim's algorithm grows the tree from a vertex instead: start anywhere; repeatedly add the cheapest edge crossing from the current tree to an outside vertex. On the same graph from A: cross-edges are AB(1) and AD(4) - add AB; then BC(2) - add; then CD(3) - add. Same tree, different construction order. Kruskal suits sparse graphs and edge lists; Prim suits dense graphs with a heap. Proofs of both rest on the cut/cycle exchange property: the cheapest edge across any cut belongs to some MST. MSTs power network design, clustering (single-linkage), and approximations to TSP; union-find from section 1.6 is the data structure doing the heavy lifting inside Kruskal.",
            ],
            bullets: [
              "Tree: connected + acyclic = n - 1 edges = unique paths between vertices.",
              "Operational facts: remove any edge -> disconnected; add any edge -> exactly one cycle.",
              "Every tree with n >= 2 vertices has at least two leaves.",
              "Spanning tree: a tree subgraph touching all vertices; K_n has n^(n-2) of them (Cayley).",
              "MST: spanning tree of minimum total weight.",
              "Kruskal: sort edges ascending, add if it joins distinct components (union-find), stop at n - 1 edges.",
              "Prim: grow from a start vertex, always add the cheapest tree-to-outside edge.",
              "Worked: edges 1, 2, 3, 4, 5 on 4 vertices - MST picks 1, 2, 3 for weight 6; 4 and 5 close cycles.",
            ],
            table: {
              caption: "Kruskal trace on A, B, C, D with AB=1, BC=2, CD=3, AD=4, AC=5.",
              headers: ["Edge (weight)", "Decision", "Reason", "Tree so far"],
              rows: [
                ["AB (1)", "accept", "joins {A} and {B}", "{A-B}"],
                ["BC (2)", "accept", "joins {A,B} and {C}", "{A-B-C}"],
                ["CD (3)", "accept", "joins {A,B,C} and {D}; n-1 = 3 edges reached", "{A-B-C-D}, weight 6"],
                ["AD (4)", "reject", "A and D already connected - cycle", "-"],
                ["AC (5)", "reject", "cycle", "-"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Kruskal's algorithm end to end",
              caption:
                "Sort, test with union-find, stop at n - 1 edges - exactly the trace to reproduce in the exam.",
              steps: [
                { label: "Sort all edges by weight", note: "ascending; ties arbitrary" },
                { label: "Take smallest unused edge", note: "scan in order" },
                { label: "Endpoints in different components?", note: "union-find find(u) != find(v)" },
                { label: "Accept: union the components", note: "reject if it closes a cycle" },
                { label: "Stop after n - 1 accepts", note: "that is the MST" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show the component state at every step",
              body: "In MST questions, write the union-find components after each accept/reject (e.g. {A,B}, {C}, {D}). The trace is what earns the method marks, and it proves your rejects are genuine cycle-closers rather than guesses.",
            },
            keyTerms: [
              { term: "Tree", definition: "A connected acyclic graph; equivalently n vertices with n - 1 edges and unique paths." },
              { term: "Spanning tree", definition: "A tree subgraph containing every vertex of the graph." },
              { term: "Minimum spanning tree (MST)", definition: "The spanning tree with least total edge weight." },
              { term: "Kruskal's algorithm", definition: "MST by globally sorting edges and accepting those that join distinct components." },
              { term: "Prim's algorithm", definition: "MST by growing one tree outward, always taking the cheapest crossing edge." },
            ],
            examQuestions: [
              {
                q: "Give three equivalent definitions of a tree and prove that a tree on n vertices has exactly n - 1 edges. Then run Kruskal's algorithm on the weighted graph: edges AB=2, AC=3, BC=4, BD=5, CD=1, AD=6; show every accept/reject with components, and give the MST weight.",
                marks: 7,
                outline: [
                  "Definitions: connected + acyclic; n - 1 edges; unique paths.",
                  "Prove edge count by induction: adding the n-th vertex via one new edge keeps acyclicity; or peel a leaf.",
                  "Sort edges: CD(1), AB(2), AC(3), BC(4), BD(5), AD(6).",
                  "Accept CD: {C,D}.",
                  "Accept AB: {A,B}, {C,D}.",
                  "Accept AC: merge into {A,B,C,D} - three edges, stop (n - 1 = 3).",
                  "Reject BC, BD, AD (cycles). MST weight = 1 + 2 + 3 = 6.",
                ],
              },
              {
                q: "How many edges does a tree with 10 vertices have? How many leaves must it have at minimum?",
                marks: 2,
              },
              {
                q: "State Cayley's formula for the number of spanning trees of K_n and evaluate it for n = 4.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Planar graphs, Euler's formula and Kuratowski",
            body: [
              "A graph is planar when it can be drawn in the plane with edges as curves that cross only at shared endpoints - a planar embedding. Planarity is a property of the abstract graph, not of one unlucky drawing: the complete graph K_4 looks crossing-laden if drawn badly, but it is planar - one edge simply routes around the outside. The two regions created by an embedding are faces, including the unbounded exterior face. Planarity matters practically: printed circuit boards and single-layer chips cannot have crossings, so planarity testing decides whether a layout is possible at all.",
              "Euler's formula is the centrepiece: for a connected planar graph, v - e + f = 2, where v, e, f count vertices, edges and faces. Worked check on K_4: v = 4, e = 6; an embedding gives 4 faces (3 triangles plus the outside), so 4 - 6 + 4 = 2. The formula survives edge insertion: adding an edge inside a face splits the face (e + 1, f + 1 - balance preserved), and adding a pendant vertex grows v and e together. Consequences flow by algebra: in a simple connected planar graph every face is bounded by at least 3 edges and every edge borders 2 faces, so 3f <= 2e; combining with Euler gives e <= 3v - 6. K_5 has e = 10 > 3*5 - 6 = 9 - so K_5 is nonplanar, with no drawing at all needed.",
              "The bipartite sharpening: with no triangles, faces have at least 4 edges, so 4f <= 2e and Euler gives e <= 2v - 4. K_{3,3} has v = 6, e = 9 > 2*6 - 4 = 8 - nonplanar. Kuratowski's theorem crowns this: a graph is planar iff it contains no subgraph homeomorphic (subdivision-isomorphic) to K_5 or K_{3,3} - the two forbidden miniatures. Every nonplanarity proof in the syllabus is a hunt for one of them: subdivide edges to hide them, and the tester expands subdivisions back. Corollaries of the bound: every simple planar graph has a vertex of degree at most 5, and the famous four-colour conjecture (now theorem) lives on planar graphs.",
              "Planarity testing is polynomial-time (the Hopcroft-Tarjan algorithm, linear time), and planar embeddings drive VLSI layout, floorplanning, and graph drawing in visualisation tools. Euler's formula also explains the structure of polyhedra - cube: 8 - 12 + 6 = 2; tetrahedron: 4 - 6 + 4 = 2 - the same equation with the faces of a solid. For the exam, the canonical sequence is: state Euler's formula, derive e <= 3v - 6 (and e <= 2v - 4 for bipartite), apply to K_5 and K_{3,3}, then cite Kuratowski as the complete characterisation. That sequence is a ready-made 7-mark answer.",
            ],
            bullets: [
              "Planar graph: drawable with no edge crossings; embedding fixes the faces (including the outer face).",
              "Euler's formula: v - e + f = 2 for connected planar graphs; K_4: 4 - 6 + 4 = 2.",
              "Derivation of the edge bound: 3f <= 2e plus Euler gives e <= 3v - 6.",
              "K_5: 10 edges vs bound 9 - nonplanar.",
              "Bipartite bound: no triangles gives e <= 2v - 4; K_{3,3}: 9 vs 8 - nonplanar.",
              "Kuratowski's theorem: planar iff no subgraph homeomorphic to K_5 or K_{3,3}.",
              "Corollary: every simple planar graph has a vertex of degree at most 5.",
              "Applications: PCB and chip layout, graph drawing, polyhedra structure (cube: 8 - 12 + 6 = 2).",
            ],
            table: {
              caption: "Euler's formula checks and edge bounds.",
              headers: ["Graph", "v", "e", "f (planar)", "v - e + f", "Bound test"],
              rows: [
                ["K_4", "4", "6", "4", "2", "6 <= 3*4 - 6 = 6, tight"],
                ["Cube graph", "8", "12", "6", "2", "12 <= 18, fine"],
                ["K_5", "5", "10", "-", "-", "10 > 9, nonplanar"],
                ["K_{3,3}", "6", "9", "-", "-", "9 > 8, nonplanar (bipartite bound)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Proving a graph nonplanar by counting",
              caption:
                "The standard exam sequence - formulas first, Kuratowski as the finale.",
              stages: [
                { label: "State Euler's formula", note: "v - e + f = 2" },
                { label: "Derive face bound", note: "3f <= 2e (4f <= 2e if bipartite)" },
                { label: "Combine into edge bound", note: "e <= 3v - 6, or e <= 2v - 4" },
                { label: "Test the suspect graph", note: "K_5: 10 > 9 fails; K_{3,3}: 9 > 8 fails" },
                { label: "Cite Kuratowski", note: "complete characterisation via K_5 / K_{3,3} subdivisions" },
              ],
            },
            callout: {
              type: "exam",
              title: "The bounds need simplicity",
              body: "The inequality e <= 3v - 6 assumes a simple connected planar graph (and e <= 2v - 4 additionally assumes bipartite with v >= 3). State those assumptions in your derivation - the refinement marks live there, and they also flag why the test fails on multigraphs.",
            },
            keyTerms: [
              { term: "Planar embedding", definition: "A crossing-free drawing of the graph in the plane." },
              { term: "Face", definition: "A region of the plane cut out by the embedding, including the unbounded outer face." },
              { term: "Euler's formula", definition: "v - e + f = 2 for any connected planar graph." },
              { term: "Kuratowski's theorem", definition: "A graph is planar iff it contains no subdivision of K_5 or K_{3,3}." },
              { term: "Homeomorphic graphs", definition: "Graphs identical up to subdividing edges with new degree-2 vertices." },
            ],
            examQuestions: [
              {
                q: "State Euler's formula for connected planar graphs. Derive the bound e <= 3v - 6 and the bipartite bound e <= 2v - 4, and use them to prove that K_5 and K_{3,3} are nonplanar. State Kuratowski's theorem.",
                marks: 7,
                outline: [
                  "State v - e + f = 2 and verify on K_4 (4 - 6 + 4 = 2).",
                  "Every face in a simple planar graph has at least 3 edges; each edge borders 2 faces, so 3f <= 2e.",
                  "Eliminate f via Euler: f = 2 - v + e, so 3(2 - v + e) <= 2e, giving e <= 3v - 6.",
                  "K_5: v = 5, e = 10 > 9 - contradiction, nonplanar.",
                  "Bipartite case: faces have >= 4 edges, 4f <= 2e, giving e <= 2v - 4.",
                  "K_{3,3}: v = 6, e = 9 > 8 - nonplanar.",
                  "Kuratowski: planarity fails exactly when a K_5 or K_{3,3} subdivision lurks as a subgraph.",
                ],
              },
              {
                q: "Verify Euler's formula for the graph of the octahedron (6 vertices, 12 edges, 8 faces).",
                marks: 2,
              },
              {
                q: "Why does every simple planar graph have a vertex of degree at most 5?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.7",
            title: "Graph colouring and the chromatic number",
            body: [
              "A proper colouring assigns colours to vertices so that no edge joins two vertices of the same colour; the chromatic number chi(G) is the minimum number of colours needed. The canonical application is timetabling: subjects are vertices, clashes (shared students) are edges, and a colour is a time slot - chi is the minimum number of sessions the timetable needs. Register allocation in compilers is the same problem: variables sharing a live range conflict, colours are machine registers, and chi above the register count forces spills to memory.",
              "Worked examples calibrate the scale. An edgeless graph needs 1 colour. A bipartite graph (and only a bipartite graph) needs exactly 2 - colour the two sides; equivalently, chi(G) <= 2 iff G has no odd cycle. An odd cycle like C_5 needs 3 (2 fails around the ring). The complete graph K_n needs n colours - every vertex touches every other, so all colours must differ. The greedy heuristic - order vertices, give each the smallest colour unused by its neighbours - always produces a proper colouring, but its count depends on the order: colouring C_6 badly can use 3 where 2 suffice.",
              "Two structural facts organise the theory. The clique bound: chi(G) >= size of the largest complete subgraph, since a k-clique needs k colours. Brooks' theorem refines the ceiling: a connected graph that is neither an odd cycle nor complete satisfies chi <= maximum degree. And the crown jewel: the four-colour theorem - every planar graph needs at most 4 colours, proved in 1976 by Appel and Haken with computer assistance; the five-colour version is provable by hand with Kempe-chain induction and is the standard exam proof. Downward in difficulty: the Welsh-Powell / greedy bound chi <= max degree + 1 always holds.",
              "Beyond timetabling and registers, colouring powers frequency assignment in cellular networks (interfering transmitters need distinct channels), Sudoku (a pre-coloured 9-partite colouring puzzle), and scheduling exams with room constraints (colour = day, rooms = capacity per colour). Deciding whether chi(G) <= 3 is NP-complete, which is why greedy heuristics dominate practice. For the exam, memorise the landmark values: bipartite = 2, odd cycle = 3, K_n = n, planar <= 4 (<= 5 provable by hand), and always show the colouring you claim is minimal by exhibiting both a valid colouring and a subgraph forcing the lower bound.",
            ],
            bullets: [
              "Proper colouring: adjacent vertices differ; chi(G) = minimum number of colours.",
              "chi = 1 iff edgeless; chi <= 2 iff bipartite (no odd cycle); odd cycles need 3.",
              "K_n needs n colours - every pair adjacent; largest clique is a lower bound.",
              "Brooks: chi <= max degree except for complete graphs and odd cycles.",
              "Greedy heuristic: order vertices, take the smallest free colour; order-sensitive.",
              "Four-colour theorem: every planar graph has chi <= 4; five-colour version provable by Kempe chains.",
              "Worked: timetable with subjects S1..S5, clashes S1-S2, S1-S3, S2-S4, S3-S5, S4-S5 - chi = 3.",
              "Applications: exam scheduling, register allocation, frequency planning, Sudoku.",
            ],
            table: {
              caption: "Landmark chromatic numbers.",
              headers: ["Graph", "chi", "Why"],
              rows: [
                ["Edgeless on n vertices", "1", "no constraints"],
                ["Trees", "2", "bipartite"],
                ["Even cycle C_6", "2", "bipartite"],
                ["Odd cycle C_5", "3", "2 colours fail around the ring"],
                ["K_n", "n", "complete graph"],
                ["Any planar graph", "<= 4", "four-colour theorem"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The chromatic-number ladder",
              caption:
                "Structure climbs the ladder: each rung is a colouring class worth memorising.",
              layers: [
                { label: "chi = 1: edgeless graphs", note: "no edges, no conflicts" },
                { label: "chi = 2: bipartite graphs", note: "exactly the odd-cycle-free graphs" },
                { label: "chi = 3: odd cycles and beyond", note: "smallest non-bipartite class" },
                { label: "chi = n: complete graph K_n", note: "every vertex conflicts with every other" },
                { label: "chi <= 4: all planar graphs", note: "four-colour theorem caps the plane" },
              ],
            },
            callout: {
              type: "exam",
              title: "Prove minimality, not just validity",
              body: "A colouring alone earns half the marks. Always add the forcing argument: 'S1, S2, S3 form a triangle, so at least 3 colours are needed; the displayed 3-colouring achieves it, hence chi = 3.' Lower bound + matching upper bound = full marks.",
            },
            keyTerms: [
              { term: "Proper colouring", definition: "An assignment of colours to vertices with no edge joining equal colours." },
              { term: "Chromatic number chi(G)", definition: "The minimum number of colours in a proper colouring." },
              { term: "Clique bound", definition: "chi(G) >= the size of the largest complete subgraph." },
              { term: "Four-colour theorem", definition: "Every planar graph is colourable with at most 4 colours." },
              { term: "Register allocation", definition: "The compiler problem whose graph-colouring form decides variable-to-register assignment." },
            ],
            examQuestions: [
              {
                q: "Define proper colouring and chromatic number. Find the chromatic number of C_5, K_4 and K_{3,3}, justifying each with both a colouring and a lower-bound argument. Explain how exam timetabling reduces to graph colouring.",
                marks: 7,
                outline: [
                  "Definitions with notation.",
                  "C_5: 2 colours fail (odd ring), 3-colouring exists - chi = 3.",
                  "K_4: all pairs adjacent, so 4 colours forced - chi = 4.",
                  "K_{3,3}: two sides give a 2-colouring; an edge exists so 1 fails - chi = 2.",
                  "Timetabling model: subjects = vertices, shared students = edges, slots = colours.",
                  "chi = minimum number of time slots; each colour class is a clash-free session set.",
                  "Mention greedy scheduling as the practical heuristic and NP-completeness of the exact problem.",
                ],
              },
              {
                q: "Why does every bipartite graph have chromatic number at most 2?",
                marks: 3,
              },
              {
                q: "State the four-colour theorem.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.8",
            title: "Directed graphs and shortest paths: Dijkstra's algorithm",
            body: [
              "A directed graph (digraph) has edges with direction: each edge (u, v) runs from u to v, giving each vertex an indegree and outdegree. Special digraphs organise computation: the reachability digraph of a program (who calls whom), precedence digraphs for task scheduling (an edge means 'before'), and DAGs - directed acyclic graphs - which order dependencies without circularity. A digraph is strongly connected when every vertex reaches every other, weakly connected when the underlying undirected graph is connected. Topological ordering exists exactly for DAGs and is computed by repeatedly removing a vertex of indegree 0 - the scheduler's fundamental move.",
              "Weighted digraphs model transport, routing and cost: the single-source shortest path problem asks for the cheapest route from a source s to every other vertex. Dijkstra's algorithm solves it for nonnegative weights: keep a tentative distance d(v) for each vertex (infinity except d(s) = 0); repeatedly pick the unsettled vertex u with smallest d(u), settle it, and relax every outgoing edge (u, v): if d(u) + w(u, v) < d(v), improve d(v) and record u as its predecessor. With a heap it runs in O((n + e) log n); the greedy core is sound precisely because all weights are nonnegative - settled vertices can never be improved later.",
              "Worked example. Vertices S, A, B, C, D; edges S->A = 4, S->B = 2, B->A = 1, A->C = 5, B->C = 8, C->D = 3, A->D = 10. Start: d(S) = 0. Settle S: relax to A = 4, B = 2. Settle B (smallest, 2): A improves to min(4, 2 + 1) = 3; C = 2 + 8 = 10. Settle A (3): C improves to min(10, 3 + 5) = 8; D = 3 + 10 = 13. Settle C (8): D improves to min(13, 8 + 3) = 11. Settle D (11). Final distances: A = 3, B = 2, C = 8, D = 11; the shortest S->D path follows predecessors D <- C <- A <- B <- S: S, B, A, C, D. Note how the algorithm found the indirect route cheaper than the direct A->D edge.",
              "Dijkstra is OSPF routing inside the internet: routers run it over link-state maps to fill forwarding tables. Negative weights break Dijkstra's greedy core and need Bellman-Ford (handles negatives, detects negative cycles, O(n e)); all-pairs problems use Floyd-Warshall's dynamic program in O(n^3). In exams, reproduce the table: one row per iteration showing the settled vertex and the current d-values - the table is the answer. And connect the theory: shortest-path distances define a metric used in graph embedding, and the 'shortest path in a DAG' variant runs in linear time via topological order, no heap needed.",
            ],
            bullets: [
              "Digraph: directed edges; indegree and outdegree per vertex.",
              "Strong connectivity: every vertex reaches every other; DAGs have no directed cycles.",
              "Topological order: exists exactly for DAGs; peel indegree-0 vertices.",
              "Dijkstra: nonnegative weights; settle the closest unsettled vertex, relax its edges.",
              "Relaxation: d(v) = min(d(v), d(u) + w(u, v)); predecessors reconstruct paths.",
              "Worked: distances A = 3, B = 2, C = 8, D = 11 with path S-B-A-C-D beating direct edges.",
              "Complexity: O((n + e) log n) with a heap; OSPF internet routing is Dijkstra in production.",
              "Negative weights: use Bellman-Ford; all pairs: Floyd-Warshall O(n^3).",
            ],
            table: {
              caption: "Dijkstra trace for the worked example (source S).",
              headers: ["Step", "Settled", "d(A)", "d(B)", "d(C)", "d(D)"],
              rows: [
                ["init", "S = 0", "inf", "inf", "inf", "inf"],
                ["settle S", "S", "4", "2", "inf", "inf"],
                ["settle B", "B = 2", "3", "-", "10", "inf"],
                ["settle A", "A = 3", "-", "-", "8", "13"],
                ["settle C", "C = 8", "-", "-", "-", "11"],
                ["settle D", "D = 11", "-", "-", "-", "-"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "One Dijkstra iteration",
              caption:
                "Select, settle, relax - repeat until every vertex is settled.",
              steps: [
                { label: "Pick unsettled vertex u with smallest d(u)", note: "heap gives this in log time" },
                { label: "Settle u", note: "d(u) is final - nonnegative weights protect it" },
                { label: "Relax each edge (u, v)", note: "improve d(v) = d(u) + w(u,v) if smaller" },
                { label: "Update predecessors", note: "predecessor chains reconstruct paths" },
                { label: "Repeat until all settled", note: "table row per iteration" },
              ],
            },
            callout: {
              type: "warning",
              title: "Dijkstra dies on negative weights",
              body: "A single negative edge can make a settled vertex improvable later, breaking the greedy invariant. If a question's weights include negatives, say so and switch to Bellman-Ford - answering Dijkstra anyway is the classic trap and the marker is watching for the observation.",
            },
            keyTerms: [
              { term: "Digraph", definition: "A graph whose edges have direction; each vertex has an indegree and an outdegree." },
              { term: "DAG", definition: "Directed acyclic graph; admits a topological ordering." },
              { term: "Relaxation", definition: "The update d(v) = min(d(v), d(u) + w(u, v)) that improves tentative distances." },
              { term: "Dijkstra's algorithm", definition: "Greedy single-source shortest paths for nonnegative weights, in O((n + e) log n)." },
              { term: "Bellman-Ford", definition: "Shortest paths that tolerate negative edges and detect negative cycles." },
            ],
            examQuestions: [
              {
                q: "Define digraph, indegree, outdegree and strongly connected. Run Dijkstra's algorithm from source S on the edges S->A = 4, S->B = 2, B->A = 1, A->C = 5, B->C = 8, C->D = 3, A->D = 10; show the full table, final distances, and the shortest path to D. State the algorithm's precondition.",
                marks: 7,
                outline: [
                  "Definitions; note S->B->A gives indegree/outdegree reading direction.",
                  "Initialise d(S) = 0, others infinity.",
                  "Settle S: A = 4, B = 2.",
                  "Settle B: A = min(4, 3) = 3, C = 10.",
                  "Settle A: C = min(10, 8) = 8, D = 13.",
                  "Settle C: D = min(13, 11) = 11. Settle D.",
                  "Path to D via predecessors: S, B, A, C, D, cost 11; precondition: all weights nonnegative.",
                ],
              },
              {
                q: "Why does a DAG always admit a topological ordering?",
                marks: 3,
              },
              {
                q: "Give the time complexity of Dijkstra with a heap and of Floyd-Warshall.",
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
      title: "Algebraic Structures, Lattices and Boolean Algebra",
      summary:
        "The algebra of the syllabus: binary operations building semigroups and monoids, groups and Lagrange's theorem, rings and fields, posets and lattices, and finally Boolean algebra with its functions and minimisation - the mathematics inside every digital circuit.",
      chapter: {
        number: "05",
        title: "Groups, Rings, Lattices and Boolean Algebra",
        intro:
          "Unit V climbs the algebra tower. Binary operations with closure, associativity, identity and inverses build semigroups, monoids and groups; cosets partition groups via Lagrange's theorem; adding a second operation yields rings and fields. Posets generalise order; lattices add meets and joins; Boolean algebra is the two-element lattice with complements, and its functions are exactly the logic gates of Unit II - minimised by Karnaugh maps.",
        inOneBreath:
          "An algebraic structure is a set with operations satisfying axioms; closure + associativity = semigroup, + identity = monoid, + inverses = group; abelian adds commutativity; cosets of a subgroup partition G, so |H| divides |G| (Lagrange); two compatible operations give rings (integers) and fields (rationals, reals, integers mod prime p); posets order, lattices add meet and join; Boolean algebra is complemented distributive lattice {0, 1} with and/or/not; every Boolean function has DNF/CNF forms and a minimal SOP found by Karnaugh maps.",
        sections: [
          {
            number: "5.1",
            title: "Binary operations: semigroups and monoids",
            body: [
              "A binary operation on a set S is a rule assigning to every ordered pair (a, b) of elements of S an element a * b of S - the closure requirement is part of the definition: the result must stay in S. Addition on the naturals, multiplication on the integers, string concatenation on words over an alphabet, matrix multiplication on square matrices and composition of functions are all binary operations. Subtraction on the naturals is not - 2 - 5 leaves the set - and division on the reals is not - division by 0 has no result. Checking closure first is the exam's first mark.",
              "The axioms build a tower. Associativity: (a * b) * c = a * b * c for all a, b, c - the property that lets us write products without parentheses; without it, expressions are ambiguous. A semigroup is a set with an associative binary operation. An identity element e satisfies e * a = a * e = a for all a; identity is unique (if e and f are both identities, e = e * f = f). A monoid is a semigroup with identity. Inverses: a inverse satisfies a * a inverse = a inverse * a = e - but that axiom belongs to groups, the next rung.",
              "Worked classifications. (N, +): closure yes, associative yes, identity 0 - but 0 is not a natural under some conventions; with N including 0 it is a monoid. (Z, +): monoid with identity 0; every element has an inverse - a group (section 5.2). (Z, *): monoid, identity 1, but only 1 and -1 have inverses - not a group. (Strings over {a, b}, concatenation): monoid with identity the empty string; no string except the empty one has an inverse. (2 x 2 real matrices, multiplication): monoid with identity matrix; invertible matrices form a group. Composition of functions on a set: monoid, and bijections form a group - the symmetric group, the prototype of all group theory.",
              "Monoids are the algebra of computation: a state machine's configurations form a monoid under 'do nothing then act'; the monoid of list concatenation underlies map-reduce parallelism (associativity is exactly what makes parallel combination safe); and the free monoid of strings is what regular expressions denote languages inside. For the exam, the routine is fixed: name the set and operation, verify closure, verify associativity (usually inherited or obvious), find the identity or prove none exists, and state the resulting structure name. One caveat to remember: associativity must hold for all triples - a single counterexample kills it, as exponentiation a^b^c shows.",
            ],
            bullets: [
              "Binary operation on S: assigns a * b in S to every pair - closure is built in.",
              "Associativity: (a * b) * c = a * (b * c); allows unparenthesised products.",
              "Semigroup: closed + associative; e.g. (positive integers, +).",
              "Identity e: e * a = a * e = a; identity is unique when it exists.",
              "Monoid: semigroup + identity; e.g. (N, +) with 0, (Z, *), strings under concatenation.",
              "Worked: (Z, +) is a monoid (identity 0); (Z, *) is a monoid but not a group.",
              "Subtraction on N is not a binary operation (closure fails); exponentiation is not associative.",
              "CS link: list-concatenation monoids make map-reduce parallel combination safe.",
            ],
            table: {
              caption: "Classifying common structures.",
              headers: ["Set, operation", "Closed", "Associative", "Identity", "Structure"],
              rows: [
                ["(N, +)", "yes", "yes", "0 (if 0 in N)", "monoid"],
                ["(Z, +)", "yes", "yes", "0", "monoid (in fact group)"],
                ["(Z, *)", "yes", "yes", "1", "monoid"],
                ["(N, -)", "no: 2 - 5 not in N", "-", "-", "not an operation"],
                ["(strings, concat)", "yes", "yes", "empty string", "monoid"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The algebra tower",
              caption:
                "Each rung adds one axiom - name the rung, collect the marks.",
              tiers: [
                { label: "Group", note: "monoid + every element invertible" },
                { label: "Monoid", note: "semigroup + identity element" },
                { label: "Semigroup", note: "closed + associative operation" },
                { label: "Magma", note: "closed operation only - no axioms" },
              ],
            },
            callout: {
              type: "exam",
              title: "Prove uniqueness of the identity in two lines",
              body: "If e and f are both identities, then e = e * f (f is an identity) = f (e is an identity). Memorise this chain - 'uniqueness of identity/inverse' is a standard 3-mark proof and the template for all uniqueness arguments in Unit V.",
            },
            keyTerms: [
              { term: "Binary operation", definition: "A rule mapping every pair of elements of S back into S (closure included)." },
              { term: "Semigroup", definition: "A set with an associative binary operation." },
              { term: "Monoid", definition: "A semigroup possessing a two-sided identity element." },
              { term: "Associativity", definition: "(a * b) * c = a * (b * c) for all elements; makes products unambiguous." },
              { term: "Free monoid", definition: "All strings over an alphabet under concatenation, identity the empty string." },
            ],
            examQuestions: [
              {
                q: "Define binary operation, semigroup and monoid. Determine which of (N, +), (Z, *), (strings over {0,1}, concatenation) are semigroups and monoids, giving the identity in each monoid case and a counterexample where an axiom fails.",
                marks: 7,
                outline: [
                  "Give the three definitions with the closure requirement explicit.",
                  "(N, +): closed and associative; identity 0 belongs to N - monoid.",
                  "(Z, *): closed and associative; identity 1 - monoid; note inverses mostly missing.",
                  "Strings: concatenation closed and associative; empty string is identity - monoid.",
                  "Counterexample structure: (N, -) fails closure; exponentiation fails associativity: (2^3)^2 = 64 vs 2^(3^2) = 512.",
                  "State the tower: monoid = semigroup + identity.",
                  "Prove uniqueness of identity via e = e * f = f.",
                ],
              },
              {
                q: "Is (odd integers, *) where * is multiplication a semigroup? A monoid?",
                marks: 3,
              },
              {
                q: "State the identity element of matrix multiplication on 2x2 real matrices.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Groups and the group axioms",
            body: [
              "A group is a monoid in which every element has an inverse: a set G with a binary operation satisfying four axioms - closure (a * b in G), associativity ((a*b)*c = a*(b*c)), identity (some e with e*a = a*e = a), and inverses (for each a an a-inverse with a * a inverse = a inverse * a = e). If the operation is also commutative (a * b = b * a) the group is abelian. The axioms are exactly the licence for algebra as we know it: cancellation (a * b = a * c implies b = c), unique solutions of a * x = b, and the socks-shoes property (a*b) inverse = b inverse * a inverse.",
              "Worked verification on the canonical example: Z_6 = {0, 1, 2, 3, 4, 5} under addition mod 6. Closure: adding residues mod 6 stays in the set. Associativity: inherited from integer addition. Identity: 0. Inverses: inverse of a is 6 - a (0 is its own inverse; inverse of 2 is 4). So (Z_6, +_6) is an abelian group. Contrast multiplication mod 6: identity 1 works, but 2 has no inverse since 2 * b mod 6 is always even, never 1 - so ({1,...,5}, *_6) is not a group. The lesson: invertibility mod n is equivalent to gcd(a, n) = 1, the fact underlying RSA cryptography.",
              "Symmetries give the geometric groups. The symmetries of a square form the dihedral group D_4: four rotations (0, 90, 180, 270 degrees) and four reflections - 8 elements, closed under 'do one symmetry then another', non-abelian because a rotation followed by a reflection differs from the reverse order. The Klein four-group (rotations of a rectangle: identity, 180-degree rotation, horizontal flip, vertical flip) is the smallest non-cyclic group - it is abelian but no single element generates everything. Function composition on bijections of a set gives the symmetric group; permutations of 3 elements form S_3 with 6 elements, non-abelian.",
              "Groups are the algebra of symmetry, and symmetry is the algebra of invariants: cryptography (Diffie-Hellman works in the group of powers mod p; elliptic-curve groups secure TLS), error-correcting codes (linear codes are subspaces - groups under addition), hashing (permutation groups) and physics (Noether's theorem ties conservation laws to symmetry groups). The exam routine is fixed and worth rehearsing: write the four axioms, verify each against the concrete operation (tables help for small sets), note commutativity or produce the two elements that break it, then state the structure name. Group tables (Cayley tables) make closure and inverses visible at a glance - a Latin square where every row and column is a rearrangement.",
            ],
            bullets: [
              "Group axioms: closure, associativity, identity, inverses; abelian adds commutativity.",
              "Cancellation laws: a*b = a*c implies b = c; unique solution of a * x = b.",
              "Socks-shoes: (a*b) inverse = b inverse * a inverse - order reverses.",
              "Worked: (Z_6, +_6) is an abelian group; identity 0, inverse of a is 6 - a.",
              "Multiplication mod 6 is NOT a group: 2 has no inverse (gcd(2, 6) = 2).",
              "Inverses mod n exist iff gcd(a, n) = 1 - the RSA-relevant fact.",
              "Dihedral group D_4: 8 symmetries of the square, non-abelian; Klein four-group: smallest non-cyclic group.",
              "Cayley table: every row and column is a rearrangement (Latin square) - a visible certificate of closure and inverses.",
            ],
            table: {
              caption: "Cayley table of (Z_4, + mod 4) - a complete abelian group.",
              headers: ["+", "0", "1", "2", "3"],
              rows: [
                ["0", "0", "1", "2", "3"],
                ["1", "1", "2", "3", "0"],
                ["2", "2", "3", "0", "1"],
                ["3", "3", "0", "1", "2"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Proving (G, *) is a group: the four-stage check",
              caption:
                "Run the stages in order and quote the witness for each axiom.",
              stages: [
                { label: "Closure", note: "for all a, b: a * b stays in G; use a Cayley table or a formula" },
                { label: "Associativity", note: "usually inherited from a known operation - say so" },
                { label: "Identity", note: "exhibit e and check both sides" },
                { label: "Inverses", note: "exhibit a inverse for each a, or the general formula" },
              ],
            },
            callout: {
              type: "tip",
              title: "Failure analysis earns marks too",
              body: "When asked 'is X a group?', a single broken axiom with a concrete witness is a complete answer: 'not a group: 2 * b mod 6 is always even, so 2 has no inverse.' Precise failure beats vague affirmation - and the same template covers rings, fields and lattices later in the unit.",
            },
            keyTerms: [
              { term: "Group", definition: "A set with an associative operation, an identity, and an inverse for every element." },
              { term: "Abelian group", definition: "A group whose operation is commutative." },
              { term: "Cayley table", definition: "The operation table of a finite group; a Latin square certifying closure and inverses." },
              { term: "Dihedral group D_4", definition: "The 8 symmetries (rotations + reflections) of the square; the smallest showcase of non-abelian behaviour." },
              { term: "Z_n", definition: "The residues {0, ..., n-1} under addition mod n - an abelian group for every n." },
            ],
            examQuestions: [
              {
                q: "State the four group axioms. Prove that (Z_5, + mod 5) is an abelian group by verifying each axiom, and show that ({1, 2, 3, 4}, * mod 5) is also a group by exhibiting inverses. Why does ({0, 1, 2, 3, 4}, * mod 5) fail?",
                marks: 7,
                outline: [
                  "List closure, associativity, identity, inverses.",
                  "(Z_5, +): closed mod 5; associativity inherited; identity 0; inverse of a is 5 - a.",
                  "Commutativity obvious - abelian.",
                  "Multiplicative: identity 1; inverses: 1->1, 2->3 (2*3=6=1), 3->2, 4->4 (4*4=16=1).",
                  "All inverses exist because every nonzero element is coprime to the prime 5.",
                  "Adding 0 breaks it: 0 * b = 0 never equals 1, so 0 has no inverse - not a group.",
                  "Conclude: nonzero residues mod a prime form a group; mod composite n only the coprime residues do.",
                ],
              },
              {
                q: "Show that the Klein four-group is abelian but not cyclic.",
                marks: 3,
              },
              {
                q: "State the socks-shoes property and prove it in one line.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Subgroups, cosets and Lagrange's theorem",
            body: [
              "A subgroup H of a group G is a subset that is itself a group under the same operation: H must contain the identity, be closed, and contain inverses of its members. Examples: even integers form a subgroup of (Z, +); the rotations {0, 90, 180, 270} form a subgroup of D_4; {0, 2, 4} is a subgroup of Z_6. The one-step test: H is a subgroup iff for all a, b in H, a * b inverse is also in H - closure and inverses at once. Every group has the trivial subgroups {e} and G itself.",
              "Cosets translate a subgroup across the group. For H a subgroup of G and an element a, the left coset aH = {a * h : h in H}. Cosets either coincide or are disjoint, and every element of G lies in exactly one left coset - they partition G, exactly like equivalence classes (section 1.6: the relation a ~ b iff a inverse * b is in H is an equivalence relation). Worked example in Z_6 with subgroup H = {0, 3}: cosets are 0 + H = {0, 3}, 1 + H = {1, 4}, 2 + H = {2, 5} - three cosets of size 2 covering all six elements. In Z under H = even integers, cosets are H itself and 1 + H = the odd integers - parity is the coset structure.",
              "Lagrange's theorem falls straight out of the partition: all cosets have the same size as H (the map h -> a*h is a bijection), the cosets are disjoint and cover G, so |G| = |H| times (number of cosets). The number of cosets is the index [G : H] = |G| / |H|, and the headline corollary: the order of a subgroup divides the order of the group. In Z_6 (order 6) subgroups can only have orders 1, 2, 3, 6 - and indeed {0}, {0,3}, {0,2,4}, Z_6 are exactly the subgroups. There is no subgroup of order 4 in any group of order 6 - Lagrange forbids it instantly.",
              "The corollaries power the rest of algebra. Every element a generates a cyclic subgroup <a> of order equal to the smallest positive k with a^k = e - the order of a - and Lagrange forces the order of a to divide |G|. This gives Euler's little theorem as a special case: in the multiplicative group of residues mod prime p (order p - 1), every a satisfies a^(p-1) = 1 mod p - the engine of Fermat primality testing and a building block of RSA. Practical divisibility of group structure also explains why Z_4 is not the same group as the Klein four-group despite equal size: subgroup lattices differ. In the exam, expect: find all cosets of a given subgroup, verify the partition, and quote Lagrange to rule out impossible subgroup orders.",
            ],
            bullets: [
              "Subgroup: subset closed under the operation, containing e and all inverses.",
              "One-step test: a, b in H implies a * b inverse in H.",
              "Left coset aH = {a * h : h in H}; cosets partition G (equality or disjointness).",
              "Coset partition is the equivalence relation a ~ b iff a inverse * b in H - Unit I's classes in action.",
              "All cosets have size |H|; their count is the index |G|/|H|.",
              "Lagrange: |H| divides |G|; in Z_6 only subgroup orders 1, 2, 3, 6 are possible.",
              "Worked: H = {0, 3} in Z_6 gives cosets {0,3}, {1,4}, {2,5} - index 3.",
              "Corollary: the order of any element divides |G|; hence a^(p-1) = 1 mod p (Fermat's little theorem).",
            ],
            table: {
              caption: "Cosets of H = {0, 3} in Z_6 (addition mod 6).",
              headers: ["Coset", "Elements", "Intersection with others"],
              rows: [
                ["0 + H", "{0, 3}", "disjoint from the rest"],
                ["1 + H", "{1, 4}", "disjoint from the rest"],
                ["2 + H", "{2, 5}", "disjoint from the rest"],
                ["Check", "|G| = 3 * |H| = 3 * 2 = 6", "partition verified; index = 3"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Lagrange's theorem as a layered partition",
              caption:
                "The group splits into equal-sized coset layers - the divisibility is visible.",
              layers: [
                { label: "G of order 6 (e.g. Z_6)", note: "the whole group" },
                { label: "Coset 0 + H = {0, 3}", note: "the subgroup itself, size 2" },
                { label: "Coset 1 + H = {1, 4}", note: "same size, disjoint" },
                { label: "Coset 2 + H = {2, 5}", note: "index 3 layers, so 2 divides 6" },
              ],
            },
            callout: {
              type: "warning",
              title: "Lagrange is not a construction",
              body: "Lagrange says subgroup orders must divide |G|; it does not say every divisor occurs. The alternating group on 4 elements (order 12) has no subgroup of order 6 - so never write 'there exists a subgroup of order d' from divisibility alone. Rule things out with Lagrange; construct things explicitly.",
            },
            keyTerms: [
              { term: "Subgroup", definition: "A subset of a group that is a group under the same operation." },
              { term: "Coset aH", definition: "The translate {a * h : h in H}; left cosets partition G." },
              { term: "Index [G : H]", definition: "The number of distinct cosets, equal to |G| / |H|." },
              { term: "Lagrange's theorem", definition: "The order of any subgroup of a finite group divides the order of the group." },
              { term: "Order of an element", definition: "The smallest positive k with a^k = e; it divides |G| by Lagrange." },
            ],
            examQuestions: [
              {
                q: "Define subgroup and coset. Find all cosets of H = {0, 2, 4} in Z_6 and of H = {0, 2} in Z_4, verify the partitions, and state Lagrange's theorem with its proof sketch. Which subgroup orders are impossible in a group of order 12?",
                marks: 7,
                outline: [
                  "Definitions plus the one-step subgroup test.",
                  "H = {0, 2, 4} in Z_6: cosets {0, 2, 4} and {1, 3, 5} - two layers, index 2.",
                  "H = {0, 2} in Z_4: cosets {0, 2} and {1, 3} - index 2.",
                  "Show disjointness and coverage explicitly for one pair of cosets.",
                  "Prove sketch: cosets are equal-or-disjoint; each has size |H| via the bijection h -> a*h.",
                  "Conclude |G| = |H| * index, so |H| divides |G|.",
                  "Order-12 group: subgroup orders 5, 7, 8, 9, 10, 11 (non-divisors of 12) are impossible.",
                ],
              },
              {
                q: "List all subgroups of Z_6 and their orders.",
                marks: 3,
              },
              {
                q: "What does Lagrange say about the order of an element of a group of order 7?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Rings and fields: two operations at once",
            body: [
              "A ring is a set R with two operations, + and *, such that (R, +) is an abelian group (identity 0, every element negatable), * is associative, and * distributes over + (a * (b + c) = a*b + a*c and (b + c) * a = b*a + c*a). A ring with a multiplicative identity 1 is a ring with unity; it is commutative when * commutes. The prototypes: integers Z (commutative ring with unity, but no multiplicative inverses), polynomials with real coefficients, and n x n matrices (non-commutative). Zero divisors complicate rings: in Z_6, 2 * 3 = 0 mod 6 with neither factor zero - multiplication can destroy information.",
              "An integral domain is a commutative ring with unity, 1 differs from 0, and no zero divisors: a*b = 0 forces a = 0 or b = 0. The integers are the model; Z_6 fails (2 * 3 = 0) while Z_5 succeeds - and the pattern is exactly primality: Z_n is an integral domain iff n is prime. A field goes further: every nonzero element has a multiplicative inverse, making both (R, +) and (R - {0}, *) abelian groups. The rationals, reals and complex numbers are fields; every field is an integral domain; and the finite fields are precisely Z_p for prime p (and their extensions).",
              "Worked classifications. Z_5 = {0, 1, 2, 3, 4}: check the field property by inverses - 1 inverse 1, 2 inverse 3 (2*3 = 6 = 1), 3 inverse 2, 4 inverse 4 (16 = 1) - every nonzero element invertible, so Z_5 is a field. Z_6: zero divisors 2 * 3 = 0 kill the domain property, and 2 has no inverse - neither domain nor field. Z_7: inverses 1->1, 2->4 (8 = 1), 3->5 (15 = 1), 4->2, 5->3, 6->6 - field. The pattern 'prime modulus gives a field' is why modular arithmetic with primes saturates cryptography: every operation stays invertible, nothing loses information.",
              "Fields are the computational substrate of linear algebra and coding: Gaussian elimination divides by pivot elements - legal only over a field, which is why linear-system solvers work over the reals and over Z_p but not over the integers. Reed-Solomon codes in QR codes, DVDs and satellite links are built on the finite field with 256 elements; AES encryption does all its arithmetic in the finite field with 2^8 elements. Rings without inverses still matter - the integers support unique prime factorisation (the fundamental theorem of arithmetic), and polynomial rings support the CRC checksums in every network packet. For the exam: verify each ring axiom for a small system, exhibit zero divisors to deny domain status, exhibit inverses to earn field status.",
            ],
            bullets: [
              "Ring: (R, +) abelian group, * associative, * distributes over +.",
              "Ring with unity has multiplicative identity 1; commutative if * commutes.",
              "Zero divisors: nonzero a, b with a*b = 0; e.g. 2 * 3 = 0 mod 6.",
              "Integral domain: commutative ring with unity, no zero divisors; cancellation legal.",
              "Field: every nonzero element has a multiplicative inverse; every field is an integral domain.",
              "Z_n is an integral domain (in fact a field) iff n is prime.",
              "Worked: Z_5 is a field (inverses 1, 3, 2, 4); Z_6 is neither domain nor field.",
              "Applications: Gaussian elimination needs fields; AES works over the field with 2^8 elements; CRC lives in polynomial rings.",
            ],
            table: {
              caption: "Multiplicative inverses in Z_5 and Z_6 (mod arithmetic).",
              headers: ["a", "inverse in Z_5", "inverse in Z_6"],
              rows: [
                ["1", "1", "1"],
                ["2", "3 (2*3 = 6 = 1)", "none (2*b always even)"],
                ["3", "2", "none (3*b always divisible by 3)"],
                ["4", "4 (16 = 1)", "none (gcd(4, 6) = 2)"],
                ["5", "does not exist in Z_5", "5 (5*5 = 25 = 1 mod 6)"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The ring-to-field ladder",
              caption:
                "Each branch adds one property - classify the ring by climbing.",
              start: "Commutative ring with unity",
              branches: [
                { label: "has zero divisors", outcome: "stays a ring only - e.g. Z_6 (2*3 = 0)", good: false },
                { label: "no zero divisors", outcome: "integral domain - e.g. Z (integers), Z_5", good: true },
                { label: "every nonzero element invertible", outcome: "field - e.g. Q, R, Z_p for prime p", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Primality is the whole story mod n",
              body: "Memorise the trio: Z_n is a field iff n is prime; an integral domain iff n is prime; has zero divisors iff n is composite. One line each with a witness (2 * 3 = 0 in Z_6; 2 * 3 = 1 needs 5) settles any 'classify Z_n' question instantly.",
            },
            keyTerms: [
              { term: "Ring", definition: "A set with + (abelian group) and * (associative, distributing over +)." },
              { term: "Zero divisor", definition: "A nonzero element a with some nonzero b where a * b = 0." },
              { term: "Integral domain", definition: "A commutative ring with unity and no zero divisors." },
              { term: "Field", definition: "A commutative ring with unity in which every nonzero element has a multiplicative inverse." },
              { term: "Finite field Z_p", definition: "The residues mod a prime p under + and * - a field; composites never are." },
            ],
            examQuestions: [
              {
                q: "Define ring, integral domain and field. Classify Z_7 and Z_8 with full justification (invertibility tables or zero-divisor witnesses), and explain why every field is an integral domain.",
                marks: 7,
                outline: [
                  "Give the three definitions.",
                  "Z_7: prime; exhibit inverses 1, 4, 5, 2, 3, 6 for 1..6 - field.",
                  "Z_8: 2 * 4 = 0 mod 8 - zero divisors, not a domain; 2 has no inverse - not a field.",
                  "Field implies domain proof: if a*b = 0 and a differs from 0, multiply by a inverse: b = 0.",
                  "Note (R, +) abelian group part: identity 0, negation.",
                  "State the general rule: Z_n field iff n prime.",
                  "Mention the application: AES arithmetic over the field of 2^8 elements.",
                ],
              },
              {
                q: "Show that Z_6 has zero divisors and identify all of them.",
                marks: 3,
              },
              {
                q: "Give one reason linear algebra needs coefficients from a field rather than a ring.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Posets, Hasse diagrams and lattices",
            body: [
              "A partially ordered set (poset) is a set with a relation that is reflexive, antisymmetric and transitive - the partial order of section 1.5 promoted to a structure. Examples: divisibility on {1, 2, 3, 6, 12}; the subset relation on the power set of {1, 2}; less-or-equal on the reals. 'Partial' means some pairs may be incomparable: in divisibility on {2, 3, 5, 6}, neither 2 nor 3 divides the other. A total order (chain) leaves no pair incomparable; an antichain has no comparable pairs at all.",
              "Hasse diagrams draw posets efficiently: start from the directed graph of the order, delete all self-loops (reflexivity is assumed), delete edges implied by transitivity (keep only cover relations - a covers b when a > b with nothing between), and arrange vertices so covers point upward. For divisibility on {1, 2, 3, 4, 6, 12}: 1 at the bottom; 2 and 3 above 1; 4 above 2; 6 above 2 and 3; 12 above 4 and 6. The minimal elements (nothing below) and maximal elements (nothing above) are read directly off the picture; the bottom/top elements (comparable to everything) are 1 and 12 here.",
              "A lattice is a poset in which every pair of elements has a least upper bound (join, a join b) and a greatest lower bound (meet, a meet b). Divisibility on positive integers: meet = gcd, join = lcm - gcd(4, 6) = 2, lcm(4, 6) = 12. Power sets: meet = intersection, join = union. Some posets fail to be lattices: the V-shaped poset with elements {bottom, top1, top2} has no least upper bound for top1 and top2 - two incomparable maximal elements. A bounded lattice has a bottom 0 and top 1; a complemented lattice gives each element a complement x' with x meet x' = 0 and x join x' = 1; a distributive lattice satisfies a meet (b join c) = (a meet b) join (a meet c).",
              "Worked check: the power set of {1, 2} ordered by subset is a bounded distributive complemented lattice - meet is intersection, join is union, bottom is the empty set, top is {1, 2}, and the complement of {1} is {2}. That lattice has 4 elements arranged in a diamond - exactly the four-element Boolean algebra that section 5.6 generalises. Lattices model concept hierarchies in databases (formal concept analysis), type hierarchies in programming languages (the meet of two types is their greatest common subtype), and access-control hierarchies. In the exam: draw the Hasse diagram first - half the marks live there - then read off meets, joins, bounds and complements from the picture.",
            ],
            bullets: [
              "Poset: reflexive + antisymmetric + transitive relation; partial = incomparable pairs allowed.",
              "Cover relation: a covers b when a > b with nothing strictly between - the only edges in a Hasse diagram.",
              "Hasse construction: delete loops, delete transitive edges, draw upward.",
              "Minimal/maximal elements read off the diagram; least/greatest elements are global.",
              "Lattice: every pair has a meet (GLB) and join (LUB).",
              "Divisibility lattice: meet = gcd, join = lcm; power set lattice: meet = intersection, join = union.",
              "Bounded, complemented, distributive lattice: has 0 and 1, complements exist, distribution holds.",
              "Worked: power set of {1, 2} is the 4-element diamond - meet/ join/ complements all computable.",
            ],
            table: {
              caption: "Meet and join in the divisibility lattice on {1, 2, 3, 4, 6, 12}.",
              headers: ["Pair (a, b)", "Meet = gcd", "Join = lcm"],
              rows: [
                ["(4, 6)", "2", "12"],
                ["(2, 3)", "1", "6"],
                ["(3, 6)", "3", "6"],
                ["(1, anything)", "1", "the other element"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Building a Hasse diagram",
              caption:
                "Three deletions and one orientation - reproduce these stages on any poset question.",
              stages: [
                { label: "Draw the full order digraph", note: "edge for every comparable pair" },
                { label: "Delete self-loops", note: "reflexivity assumed" },
                { label: "Delete transitive edges", note: "keep only cover relations" },
                { label: "Orient upward", note: "smaller below, larger above; read off minima/maxima" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cover, not comparable",
              body: "Hasse diagrams show only cover relations: 1 divides 12 in the divisibility poset, but 12 does not cover 1 because 2 sits between. If you draw the 1-12 edge, the diagram is wrong and the meet/join readings built on it inherit the error.",
            },
            keyTerms: [
              { term: "Poset", definition: "A set with a reflexive, antisymmetric, transitive relation." },
              { term: "Cover relation", definition: "a covers b: a > b and no element lies strictly between them." },
              { term: "Lattice", definition: "A poset where every pair has a greatest lower bound (meet) and least upper bound (join)." },
              { term: "Bounded/complemented lattice", definition: "Having bottom 0 and top 1; complements x' with x meet x' = 0 and x join x' = 1." },
              { term: "Hasse diagram", definition: "The cover-graph drawing of a poset, oriented upward, with loops and transitive edges removed." },
            ],
            examQuestions: [
              {
                q: "Define poset, cover relation and lattice. Draw the Hasse diagram of divisibility on D = {1, 2, 3, 4, 6, 12}, identify minimal, maximal, least and greatest elements, and compute the meet and join of (4, 6) and (2, 3). Is D a lattice?",
                marks: 7,
                outline: [
                  "Give the three definitions.",
                  "Cover relations: 1-2, 1-3, 2-4, 2-6, 3-6, 4-12, 6-12.",
                  "Draw the diagram: 1 at bottom; 2, 3; 4, 6; 12 on top.",
                  "Minimal = least = 1; maximal = greatest = 12 (single elements).",
                  "meet(4, 6) = gcd = 2; join(4, 6) = lcm = 12.",
                  "meet(2, 3) = 1; join(2, 3) = 6.",
                  "Every pair has meet and join, so D is a lattice (bounded, with 0 = 1 and 1 = 12).",
                ],
              },
              {
                q: "Explain why a two-element antichain with a common upper bound added is not a lattice.",
                marks: 3,
              },
              {
                q: "State the meet and join operations of the power-set lattice of {1, 2}.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.6",
            title: "Boolean algebra",
            body: [
              "A Boolean algebra is a bounded distributive complemented lattice: a set B with two binary operations + (join/or) and * (meet/and), one unary operation ' (complement/not), and two constants 0 and 1, satisfying the Huntington axioms: closure; commutativity of + and *; identity elements (a + 0 = a, a * 1 = a); distribution of each operation over the other; complement laws (a + a' = 1, a * a' = 0); and the two bounds (a + 1 = 1, a * 0 = 0). De Morgan's laws (a + b)' = a' * b' and (a * b)' = a' + b' are theorems here, exactly as they were identities in set algebra (section 1.2) - set algebra over a universe is a Boolean algebra with union as join, intersection as meet, complement as complement.",
              "The smallest Boolean algebra is B = {0, 1} with the truth tables of logical and/or/not - and this two-element algebra is the entire hardware story: 0 and 1 are wire levels, + is the OR gate, * is the AND gate, ' is the NOT gate, and the axioms are the identities a circuit optimiser may use legally. The duality principle is the algebra's superpower: every theorem remains true after swapping + with * and 0 with 1 - so proving one identity delivers its dual for free. Worked derivations: a + a*b = a (absorption: if a is 1 the result is 1 either way; if a is 0 both sides are 0); a + a' * b = a + b (expand: (a + a') * (a + b) = 1 * (a + b) by distribution, then identity).",
              "Every finite Boolean algebra has 2^n elements and is isomorphic to the power-set algebra of an n-element set - so the n-variable switching functions live in the Boolean algebra with 2^(2^n) elements (each function is a map from 2^n inputs to 2 outputs). Precedence matters when evaluating: NOT binds tightest, then AND, then OR. Worked simplification chain: F = a*b + a*b' + a'*b = a*(b + b') + a'*b = a*1 + a'*b = a + a'*b = a + b - a four-axiom derivation that collapses a three-gate circuit into a two-input OR, verified by truth table (both formulas are 1 except when a = b = 0).",
              "Boolean algebra is the contract between mathematics and hardware. Circuit synthesis converts a specification (truth table) into a formula into gates; circuit minimisation applies the axioms to shrink gate count, which shrinks chip area, power and delay; verification checks that a rewritten circuit obeys the same axioms. The equivalence with set algebra and with propositional logic (Unit II) is itself examinable: p or q = a + b, p and q = a * b, not p = a' - three views of one structure. In the exam, derive identities by axiom name (absorption, distribution, De Morgan) rather than by truth table when asked for algebra, and reserve truth tables for verification.",
            ],
            bullets: [
              "Boolean algebra: bounded distributive complemented lattice with 0, 1, +, *, '.",
              "Huntington axioms: commutativity, identities, distribution each way, complements, bounds.",
              "Duality: swap + with * and 0 with 1 - every theorem's dual is also true.",
              "De Morgan: (a + b)' = a' * b' and (a * b)' = a' + b'.",
              "Absorption: a + a*b = a; the bridge identity: a + a'*b = a + b.",
              "Worked: a*b + a*b' + a'*b = a + b - collapses three gates into one OR.",
              "Set-algebra and logic correspondences: union/or = +, intersection/and = *, complement/not = '.",
              "Hardware link: OR, AND, NOT gates; axioms are the legal rewrites of circuit optimisers.",
            ],
            table: {
              caption: "Truth-table verification of a*b + a*b' + a'*b = a + b.",
              headers: ["a", "b", "a*b + a*b' + a'*b", "a + b"],
              rows: [
                ["0", "0", "0 + 0 + 0 = 0", "0"],
                ["0", "1", "0 + 0 + 1 = 1", "1"],
                ["1", "0", "1 + 0 + 0 = 1", "1"],
                ["1", "1", "1 + 0 + 0 = 1", "1"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Boolean algebra vs ordinary algebra",
              caption:
                "Where the two algebras agree and where they part ways.",
              left: {
                heading: "Boolean algebra",
                items: [
                  "Values: {0, 1} only",
                  "a + a = a (idempotent)",
                  "a + 1 = 1 (domination)",
                  "a * (b + c) = a*b + a*c AND (a + b)*c = a*c + b*c - both hold",
                  "Complement ' is a basic operation",
                ],
              },
              right: {
                heading: "Ordinary algebra",
                items: [
                  "Values: all reals",
                  "a + a = 2a",
                  "a + 1 = a + 1 (no collapse)",
                  "Only multiplication distributes over addition",
                  "No complement; negation is subtraction from 0",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Dual answers double your proof count",
              body: "After proving a + a'*b = a + b by distribution, write 'By duality, a * (a' + b) = a * b' - no extra work, one extra identity earned. State the duality principle once at the start of the answer to license all such pairs.",
            },
            keyTerms: [
              { term: "Boolean algebra", definition: "A bounded distributive complemented lattice; concretely {0, 1} with OR, AND, NOT." },
              { term: "Huntington axioms", definition: "The standard axiom set for Boolean algebra, including complement and distributivity laws." },
              { term: "Duality principle", definition: "Swapping + with * and 0 with 1 maps true identities to true identities." },
              { term: "Absorption law", definition: "a + a*b = a (and dually a * (a + b) = a)." },
              { term: "De Morgan's laws", definition: "(a + b)' = a' * b' and (a * b)' = a' + b'." },
            ],
            examQuestions: [
              {
                q: "State the Huntington axioms of Boolean algebra. Using the axioms (naming each), prove the absorption law a + a*b = a and the bridge identity a + a'*b = a + b. State the duality principle and give the dual of the bridge identity.",
                marks: 7,
                outline: [
                  "List closure, commutativity, associativity, identities, distributivity, complements, bounds.",
                  "Absorption: a + a*b = a*1 + a*b (identity) = a*(1 + b) (distribution) = a*1 (domination) = a.",
                  "Bridge: a + a'*b = (a + a')*(a + b) = 1*(a + b) = a + b.",
                  "Name each law as used: identity, distribution, complement, domination.",
                  "State duality: swap + with * and 0 with 1 preserves truth.",
                  "Dual of bridge: a * (a' + b) = a * b.",
                  "Verify one identity by truth table for confirmation.",
                ],
              },
              {
                q: "Simplify F = a*b + a*b' + a'*b using Boolean algebra, naming each step.",
                marks: 3,
              },
              {
                q: "State De Morgan's laws in Boolean algebra notation.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.7",
            title: "Boolean functions, Karnaugh maps and minimisation",
            body: [
              "A Boolean function of n variables is a map from {0, 1}^n to {0, 1}; there are 2^(2^n) of them - 16 functions of 2 variables, 256 of 3. Every Boolean function is representable as a sum of products (SOP): OR the minterms of its true rows, exactly the DNF of section 2.3 - the theorem that switches alone compute everything, the mathematical foundation of digital hardware. The canonical example is XOR: f = a*b' + a'*b. Product of sums (POS, from the false rows) is the dual representation, and every function has both.",
              "Minimisation asks for the cheapest SOP - fewest terms, fewest literals per term - because each literal is a wire and each term is a gate. The algebraic route combines minterms differing in one literal: a*b*c + a*b*c' = a*b*(c + c') = a*b. The Karnaugh map makes the same operation visual: an n-variable truth table rearranged into a grid where adjacent cells differ in exactly one variable (Gray-code ordering), so any two neighbouring 1-cells merge into one term with that variable eliminated. Groups must be rectangles of size 1, 2, 4, 8, ... wrapping around the edges; bigger groups kill more literals.",
              "Worked K-map. f(a, b, c) has 1s at minterms 1 (001), 3 (011), 5 (101), 7 (111) - c = 1 in all of them. Lay out rows ab = 00, 01, 11, 10 and columns c = 0, 1; the four 1s form the entire c = 1 column, a group of 4, which eliminates a and b and leaves simply f = c. Contrast the naive DNF a'b'c + a'bc + ab'c + abc: four 3-literal terms (12 literals) collapse to one literal - the K-map's whole point. A second pass: minterms 0 (000), 1 (001), 4 (100), 5 (101) form a group where b = 0 and c = 0, giving term b'c' - note how the group wraps around the row order 00, 01, 11, 10.",
              "Minimisation is the compiler backend of hardware: logic synthesis tools (espresso and its descendants) run Quine-McCluskey - the tabular, programmatic K-map - on functions too large for visual maps, trading exponential worst cases for industrial practicality. Don't-care conditions (inputs that can never occur) add freedom: treat them as 1 when they enlarge a group, 0 otherwise. The exam workflow is fixed: truth table or minterm list, K-map layout with Gray ordering, group the 1s in maximal power-of-two rectangles, read each group's surviving literals, write the SOP, verify against one or two input rows. Two-variable and three-variable K-maps are the exam standard; four variables wrap on both axes.",
            ],
            bullets: [
              "Boolean function: {0, 1}^n -> {0, 1}; count 2^(2^n); every one has an SOP and POS form.",
              "SOP = OR of minterms (DNF of Unit II); POS = AND of maxterms.",
              "Minimisation target: fewest terms and literals - fewer wires and gates in hardware.",
              "Combine minterms differing in one literal: a*b*c + a*b*c' = a*b.",
              "K-map: Gray-code grid where neighbours differ in one variable; groups are 1, 2, 4, 8-cell rectangles with wraparound.",
              "Worked: minterms 1, 3, 5, 7 all have c = 1 -> f = c; DNF of four terms collapses to one literal.",
              "Group where b = 0, c = 0 (minterms 0, 1, 4, 5) reads b'c' - wraparound groups count.",
              "Don't-cares join groups when helpful; Quine-McCluskey automates the map for synthesis tools.",
            ],
            table: {
              caption: "Karnaugh map for f with 1s at minterms 1, 3, 5, 7 (rows ab, columns c).",
              headers: ["ab \\ c", "0", "1"],
              rows: [
                ["00", "0", "1 (m1)"],
                ["01", "0", "1 (m3)"],
                ["11", "0", "1 (m7)"],
                ["10", "0", "1 (m5)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The minimisation workflow",
              caption:
                "Truth table to minimal circuit in five stages - the exact sequence examiners expect.",
              steps: [
                { label: "Truth table / minterm list", note: "from the specification" },
                { label: "Fill the K-map", note: "Gray-code row and column order" },
                { label: "Group 1s maximally", note: "power-of-two rectangles, wraparound allowed" },
                { label: "Read surviving literals per group", note: "variables constant in the group survive" },
                { label: "Write SOP and verify", note: "spot-check two input rows against the truth table" },
              ],
            },
            callout: {
              type: "tip",
              title: "Bigger groups, fewer literals",
              body: "A group of 2 removes 1 literal, 4 removes 2, 8 removes 3 - a group of 2^k removes k literals. Always overlap groups when it makes them larger (overlapping is legal and encouraged), and never leave a 1 ungrouped.",
            },
            keyTerms: [
              { term: "Sum of products (SOP)", definition: "OR of minterms; every Boolean function has one, inherited from DNF." },
              { term: "Karnaugh map", definition: "A Gray-code-ordered truth-table grid enabling visual minimisation by grouping adjacent 1s." },
              { term: "Quine-McCluskey", definition: "The tabular algorithmic version of K-map minimisation used in synthesis tools." },
              { term: "Don't-care condition", definition: "An input combination with unspecified output, free to be treated as 1 or 0 to enlarge groups." },
              { term: "Gray code ordering", definition: "Row/column order where consecutive entries differ in one bit - the property that makes adjacency meaningful." },
            ],
            examQuestions: [
              {
                q: "Define a Boolean function and its SOP form. For f(a, b, c) with 1s at minterms 0, 1, 4, 5, 6: construct the Karnaugh map, group all 1s maximally, derive the minimal SOP, and verify it against two rows of the truth table.",
                marks: 7,
                outline: [
                  "Define Boolean function, minterm, SOP.",
                  "Lay out the K-map with rows ab = 00, 01, 11, 10 and columns c = 0, 1.",
                  "Place 1s at 000, 001, 100, 101, 110.",
                  "Group 1: minterms 0, 1, 4, 5 (b = 0, c = 0 constant) -> term b'c'.",
                  "Group 2: minterms 4, 6 (a = 1, c = 0 constant) -> term ac'.",
                  "Minimal SOP: f = b'c' + ac'; note 6 is covered by group 2 and 1 by group 1.",
                  "Verify: input 010 gives f = 1*1 + 0 = 1? minterm 2 is 0 - check carefully: b'c' = 0*... compute b' = 0 so b'c' = 0, ac' = 0, total 0, matching truth table; input 110 gives ac' = 1 - matches.",
                ],
              },
              {
                q: "How many Boolean functions of 3 variables exist? How many of 2?",
                marks: 2,
              },
              {
                q: "Combine the minterms a*b*c + a*b*c' algebraically and state the resulting term.",
                marks: 3,
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV CS-302 papers typically spread 70-80 of the marks across recurrence relations, graph theory and Boolean algebra/lattices, with set theory and logic supplying the definitional short questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Solving linear recurrences (characteristic equation, repeated roots, nonhomogeneous)", weight: "10-14 marks", note: "Almost guaranteed; practise 6-8 full solves including a resonance case." },
        { topic: "Graph theory: Euler/Hamiltonian criteria, MST by Kruskal/Prim", weight: "10-12 marks", note: "Show every trace step; degree counts and edge-sorted tables earn method marks." },
        { topic: "Posets, Hasse diagrams, lattices, Boolean algebra laws", weight: "8-10 marks", note: "Draw the Hasse diagram first; name every Boolean axiom used." },
        { topic: "Propositional/predicate logic: truth tables, normal forms, inference", weight: "8-10 marks", note: "One DNF/CNF conversion and one inference derivation per paper is the norm." },
        { topic: "Set theory: identities, inclusion-exclusion, relation properties", weight: "6-8 marks", note: "Element-method proofs plus a Venn diagram is the full-marks format." },
        { topic: "Counting: permutations, combinations, pigeonhole, derangements", weight: "6-8 marks", note: "State the rule before computing; 'at least' questions want complement counting." },
        { topic: "Generating functions", weight: "4-6 marks", note: "Fibonacci via G(x) is the classic; also practised as coefficient-extraction counting." },
        { topic: "Planarity (Euler's formula) and graph colouring", weight: "4-6 marks", note: "Derive e <= 3v - 6 once and reuse it on K_5 / K_{3,3}." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - sets and relations", tasks: ["Set identities, inclusion-exclusion, power sets", "Relation properties, equivalence classes, closures", "Warshall's algorithm (2 traces) and function types"] },
        { week: "Week 2", focus: "Unit II - logic and proofs", tasks: ["Truth tables, tautologies, De Morgan and implication rewrites", "DNF/CNF conversions (3 examples)", "Inference derivations, contradiction/induction proofs (2 each)"] },
        { week: "Week 3", focus: "Unit III - counting", tasks: ["Sum/product rules, permutations, combinations", "Pigeonhole (generalised, both directions)", "Inclusion-exclusion and derangements (2 each)"] },
        { week: "Week 4", focus: "Unit III - recurrences and generating functions", tasks: ["Homogeneous solves: distinct and repeated roots (4 each)", "Nonhomogeneous with resonance (3)", "Fibonacci by generating functions; coefficient-extraction counting"] },
        { week: "Week 5", focus: "Unit IV - graphs", tasks: ["Handshaking, representations, Euler/Hamiltonian criteria", "Kruskal and Prim traces (3 each)", "Planarity proofs for K_5/K_{3,3}, colouring, Dijkstra table"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Groups, Lagrange, cosets; rings vs fields for Z_n", "Hasse diagrams, Boolean identities, K-map minimisation", "Two full past papers under time"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write definitions verbatim before any example - the definition lines are marked separately from the working.",
        "For recurrence questions, label the stages: characteristic equation, general solution, initial conditions, verification. Missing verification is the most common lost mark.",
        "For graph questions, draw the graph first even if the question gives only a degree sequence or edge list - the picture prevents wrong rejections in Kruskal and wrong degree counts.",
        "In logic questions, name every law you apply (De Morgan, distribution, absorption). Named steps earn method marks even if arithmetic later slips.",
        "For K-maps, write the Gray-code order (00, 01, 11, 10) before filling cells - a mis-ordered map invalidates every group.",
        "Quote theorems by name when using them: Lagrange, Dirac, Euler's formula, handshaking. Bare calculations get fewer marks than cited calculations.",
        "Counterexamples must be concrete: one truth assignment for an invalid argument, one factor pair for a composite modulus, one assignment row for a non-implication.",
        "Time-box: 2/3-mark questions in 4-6 minutes, 7-mark questions in 14-18 minutes, and keep the last 10 minutes for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Treating p -> q as equivalent to q -> p - only the contrapositive (not q) -> (not p) is equivalent.",
        "Writing DNF minterms with the wrong polarity (negating variables on T rows) - minterm literals match the row values; maxterm literals reverse them.",
        "Solving repeated-root recurrences without the n-power blocks - (r - 3)^2 needs a_n = (A + Bn) 3^n, not A 3^n + B 3^n.",
        "Forgetting the resonance factor when the driving term matches a characteristic root (a_n = 2 a_{n-1} + 2^n needs n P 2^n).",
        "Claiming an Euler circuit from even degrees alone without checking connectivity first.",
        "Reading 'Dirac's condition fails' as 'not Hamiltonian' - the theorems are sufficient, not necessary.",
        "Drawing Hasse diagram edges for comparable (but non-covering) pairs, e.g. 1 to 12 in the divisibility poset.",
        "Using Z_n as a field for composite n - 2 * 3 = 0 in Z_6 kills it; fields mod n need prime n.",
        "Counting 'at least' cases by enumeration and double-counting overlaps - use total minus complement.",
        "Leaving a 1 ungrouped or using non-power-of-two group sizes (3, 6) in a K-map.",
      ],
    },
  ],
};
