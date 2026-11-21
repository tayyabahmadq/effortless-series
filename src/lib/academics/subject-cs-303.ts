/**
 * CS-303 Data Structure — RGPV CSE Semester III.
 *
 * Five units, one chapter each: arrays and strings, linked lists / stacks /
 * queues, recursion and trees, searching and sorting, graphs and hashing.
 * Every section carries the "7-mark guarantee": body paragraphs, key points,
 * one diagram, key terms, a callout, a code sample or table, and three exam
 * questions with an outline for the 7-mark ask.
 */

import type { AcademicSubject } from "./types";

export const cs303: AcademicSubject = {
  id: "cs-303",
  code: "CS-303",
  title: "Data Structure",
  semester: "III Semester",
  program: "RGPV · Computer Science & Engineering",
  tagline:
    "The complete visual guide to CS-303: arrays and strings, linked lists, stacks and queues, recursion and trees, searching and sorting, graphs and hashing - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk the classic RGPV path: from arrays, sparse matrices and string matching, through dynamic linked lists and the LIFO/FIFO families, into recursion and binary trees, across every major sorting and searching algorithm with its complexity, and finally to graph traversal, spanning trees, shortest paths and hashing. Every section pairs the mechanism with real data, a complexity analysis, and a diagram simple enough to redraw under exam pressure.",
  accentColor: "#10b981",
  emoji: "{:}",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Arrays, Strings and Abstract Data Types",
      summary:
        "Data types versus abstract data types, one- and two-dimensional arrays with exact address arithmetic, sparse matrix storage, and strings from memory layout to pattern matching. This unit fixes the addressing formulas that reappear in every later unit.",
      chapter: {
        number: "01",
        title: "Data Types, Arrays and Strings",
        intro:
          "Unit I builds the physical base of the subject: how data types and ADTs are specified, how arrays of any dimension are laid out in memory with closed-form address formulas, how sparse matrices avoid storing zeros, and how strings are represented, manipulated and searched. Master the address calculations here - they are asked directly and used silently everywhere else.",
        inOneBreath:
          "An ADT is a specification (values plus operations); a data structure is one implementation of it. One-dimensional arrays address as Base + (i - LB) * w. Two-dimensional arrays follow row-major (i * N + j) or column-major (j * M + i) order. A sparse matrix keeps only non-zero triples plus a header entry. Strings are character arrays terminated by '\\0' in C, and naive pattern matching is O((n-m+1) * m) while KMP uses a prefix table to reach O(n + m).",
        sections: [
          {
            number: "1.1",
            title: "Data types and abstract data types",
            body: [
              "A data type is a set of values together with the operations allowed on them - 'int' in C is the values in a fixed bit range plus addition, subtraction and so on. An abstract data type (ADT) goes one step further: it is a mathematical specification of a set of values and a set of operations, written without any commitment to how the values are stored. The list ADT, for example, is specified as 'a sequence of elements supporting insert(i, x), delete(i), get(i) and length()' - nothing in the specification says whether the elements sit in an array or in linked nodes.",
              "The separation between specification and implementation is the whole point. One ADT can have many data-structure implementations with different costs: the list ADT is implemented by an array (O(1) access by index, O(n) insertion at the front) or by a linked list (O(n) access, O(1) insertion at the front once the position is known). The client program is written against the operations, so the implementation can be swapped without touching client code. This idea - interface in front, representation hidden behind it - is called encapsulation, and it is why the rest of this course is organised as ADT first, implementation second.",
              "Work through the stack ADT as the canonical example. Its specification says: a finite sequence where push adds an element at one end, pop removes the most recently added element, and peek reports it. The specification already implies behaviour - last in, first out - without mentioning arrays or pointers. Implementation A uses an array plus a top index; implementation B uses a singly linked list with the head as the top. Both satisfy the specification; they differ in overflow behaviour (A can fill up) and allocation cost (B pays per node). When an examiner asks 'define stack as an ADT', they want exactly this: values, operations, preconditions and postconditions - never the C code.",
              "ADTs pay off in three currencies. Correctness: reasoning about a program is easier when the stack is 'a LIFO sequence' than when it is 'array S with top index t'. Complexity: each implementation carries its own cost table, and the ADT view lets you compare costs before committing. Reuse: the same queue ADT backs printer spoolers, BFS frontiers and keyboard buffers. In the exam, a full-mark ADT answer has four parts: the value set, the operation signatures, the axioms or rules of behaviour (pop(push(S, x)) = S), and one line naming at least two possible implementations.",
            ],
            bullets: [
              "Data type = values + allowed operations; an ADT adds the discipline of specifying without deciding storage.",
              "ADT = specification (what operations mean); data structure = implementation (how they are achieved).",
              "One ADT, many implementations: list as array vs list as linked list, with different cost profiles.",
              "Encapsulation: client code calls insert(i, x); it neither knows nor cares about the underlying representation.",
              "A full ADT definition states the value set, the operation signatures, and behavioural axioms such as pop(push(S, x)) = S.",
              "Stacks, queues, lists, trees and graphs in later units are all introduced as ADTs before any code.",
              "Choosing an implementation is a complexity decision: array wins on indexed access, linked list wins on mid-sequence insertion.",
            ],
            codeExample: {
              language: "c",
              caption: "A stack ADT: specification (header) separated from implementation",
              code: `/* stack.h - the ADT specification: operations only, no representation */
typedef struct Stack Stack;
Stack   *stack_create(int capacity);
void     stack_push(Stack *s, int x);   /* add on top            */
int      stack_pop(Stack *s);           /* remove top element    */
int      stack_peek(const Stack *s);    /* report top element    */
int      stack_isEmpty(const Stack *s);

/* stack.c - one possible implementation: array + top index */
struct Stack { int *a; int top; int cap; };
void stack_push(Stack *s, int x) {
    if (s->top == s->cap - 1) return;  /* overflow guard */
    s->a[++(s->top)] = x;
}`,
            },
            keyTerms: [
              { term: "Abstract data type (ADT)", definition: "A specification of a set of values and the operations on them, independent of any storage representation." },
              { term: "Data structure", definition: "A concrete implementation of an ADT: the chosen layout in memory plus the coded operations." },
              { term: "Encapsulation", definition: "Hiding the representation behind an interface so clients depend only on the declared operations." },
              { term: "Axiom", definition: "A behavioural rule of an ADT, e.g. pop(push(S, x)) = S for stacks." },
            ],
            callout: {
              type: "exam",
              title: "The 4-part ADT answer",
              body: "Whenever a question says 'define X as an ADT', write: (1) value set, (2) operation signatures, (3) one or two axioms of behaviour, (4) at least two candidate implementations. Students who jump straight to code lose the definition marks; the ADT question is about specification, not implementation.",
            },
            diagram: {
              kind: "flow",
              title: "From ADT specification to working data structure",
              caption:
                "The four-step discipline every unit of this course follows - specify before you implement.",
              steps: [
                { label: "Specify the ADT", note: "values + operations + axioms" },
                { label: "Choose a representation", note: "array, linked nodes, struct layout" },
                { label: "Implement each operation", note: "respect preconditions" },
                { label: "Analyse complexity", note: "cost per operation, worst case" },
                { label: "Swap if the profile is wrong", note: "clients unchanged" },
              ],
            },
            examQuestions: [
              {
                q: "What is an abstract data type? Taking the stack as an example, give its full ADT specification and explain how an array implementation and a linked implementation both satisfy it.",
                marks: 7,
                outline: [
                  "Define data type as values plus operations.",
                  "Define ADT: specification of values and operations independent of representation.",
                  "Stack ADT: value set (finite sequence), operations push, pop, peek, isEmpty.",
                  "State the axioms, e.g. pop(push(S, x)) = S and peek(push(S, x)) = x.",
                  "Implementation A: array with top index; note overflow possibility.",
                  "Implementation B: singly linked list with head as top; note per-node allocation.",
                  "Conclude: client code is identical for both - that is encapsulation.",
                ],
              },
              {
                q: "Differentiate between a data type and an abstract data type with one example of each.",
                marks: 3,
                outline: [
                  "Data type: concrete values + operations, e.g. int in C.",
                  "ADT: abstract specification, no storage decided, e.g. stack ADT.",
                  "ADT may have several data structures implementing it.",
                ],
              },
              {
                q: "Name any two ADTs and two operations of each.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "One-dimensional arrays: representation and address calculation",
            body: [
              "An array is a finite, ordered collection of homogeneous elements stored in consecutive memory locations, identified by an index. Because the elements are identical in size and contiguous in memory, the compiler can compute the address of any element directly from its index - no searching, no pointer chasing. This is what makes A[i] an O(1) operation and is the single most important property of arrays: random access in constant time, bought at the price of a fixed size decided at creation.",
              "The address formula is the exam workhorse. Let Base be the address of the first element, w the size of one element in bytes, and LB the lower bound of the index. For a one-dimensional array declared as A[LB .. UB], the address of A[i] is: Loc(A[i]) = Base + w * (i - LB). With zero-based indexing (LB = 0) this shrinks to Base + w * i. Worked example: A[0 .. 19] of integers (w = 4 bytes) starts at address 2000; the address of A[7] is 2000 + 4 * 7 = 2028. If instead A is declared A[5 .. 24] at base 2000, then A[7] sits at 2000 + 4 * (7 - 5) = 2008.",
              "The formula also exposes the trade-offs. The upper bound UB only matters for bounds checking; the address computation never needs it. Total space is w * (UB - LB + 1) bytes. Insertion or deletion in the middle requires shifting up to n elements, which is O(n) - the cost that linked lists later remove. Overflow is impossible to detect inside the array itself in C; writing past the end corrupts neighbouring memory, which is why disciplined code carries the capacity alongside the array.",
              "Two- and three-dimensional arrays are just nested applications of the same idea, handled in section 1.3, but even higher dimensions follow one pattern: the address is Base plus w times a linear combination of the indices with precomputed strides. Whenever an RGPV question gives 'base address, element size and index range', it expects this closed-form arithmetic, not a drawing of memory. Practise until the conversion between logical index and physical address takes you under thirty seconds.",
            ],
            bullets: [
              "Array: finite, ordered, homogeneous elements in consecutive locations; access by index is O(1).",
              "Address formula: Loc(A[i]) = Base + w * (i - LB); zero-based indexing makes LB = 0.",
              "Worked example: base 2000, w = 4, A[7] -> 2000 + 4 * 7 = 2028.",
              "Non-zero lower bound only shifts the formula: subtract LB before multiplying.",
              "Storage need = w * (UB - LB + 1) bytes, fixed at creation - no growth in place.",
              "Mid-array insertion/deletion costs O(n) because elements must shift.",
              "The upper bound plays no role in the address computation - it is a bounds-checking device.",
            ],
            table: {
              caption: "One-dimensional array at a glance (base 2000, integers, w = 4).",
              headers: ["Index i", "Formula", "Address", "Notes"],
              rows: [
                ["0 (LB)", "2000 + 4 * (0 - 0)", "2000", "first element"],
                ["3", "2000 + 4 * 3", "2012", "random access, no scan"],
                ["7", "2000 + 4 * 7", "2028", "typical exam value"],
                ["19 (UB)", "2000 + 4 * 19", "2076", "last element; block ends at 2079"],
                ["i beyond UB", "formula still computes", "undefined", "C does not stop you - bounds are your job"],
              ],
            },
            keyTerms: [
              { term: "Base address", definition: "The memory address of the first element of the array; the anchor of every address formula." },
              { term: "Element width w", definition: "The number of bytes one element occupies, e.g. 1 for char, 4 for int, 8 for double." },
              { term: "Lower bound LB", definition: "The smallest legal index; the formula subtracts it so any index range works." },
              { term: "Random access", definition: "Reaching any element in O(1) time by arithmetic rather than by traversal." },
            ],
            callout: {
              type: "warning",
              title: "Lower-bound slips",
              body: "The most common lost mark in address questions is forgetting to subtract the lower bound. If the array is declared A[5..30], computing Base + w * i instead of Base + w * (i - 5) gives an address 5 * w bytes too high. Check the declaration before you touch the formula - if it starts at [0], the subtraction is trivially zero and safe to skip; otherwise it is not.",
            },
            diagram: {
              kind: "pipeline",
              title: "Computing the address of A[i] in four stages",
              caption: "Given base, width and bounds, the address is pure arithmetic - no traversal.",
              stages: [
                { label: "Read the declaration", note: "extract LB, element type" },
                { label: "Find element width w", note: "char 1, int 4, double 8" },
                { label: "Shift the index", note: "k = i - LB" },
                { label: "Scale and add", note: "address = Base + w * k" },
              ],
            },
            examQuestions: [
              {
                q: "Explain how a one-dimensional array is stored in memory and derive the address of A[i]. An integer array A[10..50] is stored at base address 3000 and each integer occupies 4 bytes. Find the address of A[25] and the total bytes occupied by the array.",
                marks: 7,
                outline: [
                  "Define array: homogeneous elements in consecutive locations.",
                  "Explain why contiguity gives O(1) access by arithmetic.",
                  "Derive Loc(A[i]) = Base + w * (i - LB) step by step.",
                  "Substitute: 3000 + 4 * (25 - 10) = 3000 + 60 = 3060.",
                  "Count elements: 50 - 10 + 1 = 41.",
                  "Total bytes: 41 * 4 = 164.",
                  "Note the upper bound never enters the address formula.",
                ],
              },
              {
                q: "An array of 15 doubles (8 bytes each) starts at address 5000. What is the address of the 9th element (zero-based index 8)?",
                marks: 2,
                outline: ["Loc = 5000 + 8 * 8", "= 5000 + 64 = 5064."],
              },
              {
                q: "Why does array access take O(1) time while insertion at an arbitrary position takes O(n)?",
                marks: 3,
                outline: [
                  "Access: one multiplication and addition - no dependence on n.",
                  "Insertion: elements to the right must shift one place.",
                  "Worst case shift is n elements, so O(n).",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Two-dimensional arrays: row-major and column-major order",
            body: [
              "A two-dimensional array is stored in one linear stretch of memory, so the language must fix an order in which rows or columns are flattened. Row-major order stores the entire first row, then the second row, and so on - C, Pascal and most modern languages. Column-major order stores column by column - Fortran and MATLAB. The choice is invisible to the programmer's syntax (A[i][j] looks identical either way) but completely changes the address arithmetic underneath.",
              "Row-major formula. For A[LR..UR][LC..UC] with M = UR - LR + 1 rows and N = UC - LC + 1 columns, the address of element A[i][j] is: Loc = Base + w * ((i - LR) * N + (j - LC)). The (i - LR) * N term skips the i - LR complete rows above, each of width N; the (j - LC) term then walks within the row. Worked example: A[1..3][1..4] of ints (w = 4) at base 1000. Address of A[2][3]: rows above = 2 - 1 = 1, so skip 1 * 4 = 4 elements; within-row offset = 3 - 1 = 2; total element offset 6; address = 1000 + 4 * 6 = 1024.",
              "Column-major formula. The same array in column-major order is: Loc = Base + w * ((j - LC) * M + (i - LR)), where M is the number of rows. For the example above, A[2][3] in column-major: complete columns above = 3 - 1 = 2, each of height M = 3, giving 6; plus row offset 2 - 1 = 1; total 7 elements; address = 1000 + 4 * 7 = 1028. Same logical element, four bytes further along - the storage order is a property of the compiler, not of the array.",
              "The order matters for performance too, and exam questions love this fact. In row-major storage, scanning a row touches consecutive addresses (cache-friendly), while walking down a column jumps M * w bytes every step. Hence the folklore rule: in C (row-major), loop with the row index outer and the column index inner; in Fortran (column-major), reverse the loops. The general n-dimensional case is the same recursion applied repeatedly - each dimension contributes its index times the product of the sizes of all lower dimensions - but the RGPV syllabus only demands the two-dimensional formulas, so drill those two until they are reflexive.",
            ],
            bullets: [
              "Memory is linear, so a matrix must be flattened in a fixed order - row-major (C) or column-major (Fortran).",
              "Row-major: Loc = Base + w * ((i - LR) * N + (j - LC)), N = number of columns.",
              "Column-major: Loc = Base + w * ((j - LC) * M + (i - LR)), M = number of rows.",
              "Worked example: A[1..3][1..4], w = 4, base 1000; A[2][3] = 1024 row-major, 1028 column-major.",
              "The first index counts whole rows (row-major) or the second counts whole columns (column-major).",
              "Row-wise scanning is cache-friendly in row-major storage - loop order affects real speed.",
              "Both formulas give O(1) access; only the coefficient pattern differs.",
            ],
            table: {
              caption: "A[1..3][1..4] flattened, base 1000, w = 4 - the two orders side by side.",
              headers: ["Element", "Row-major address", "Column-major address"],
              rows: [
                ["A[1][1]", "1000", "1000"],
                ["A[1][2]", "1004", "1012"],
                ["A[2][1]", "1016", "1004"],
                ["A[2][3]", "1024", "1028"],
                ["A[3][4]", "1048", "1044"],
              ],
            },
            keyTerms: [
              { term: "Row-major order", definition: "Storage of a matrix row after row; used by C and most modern languages." },
              { term: "Column-major order", definition: "Storage of a matrix column after column; used by Fortran and MATLAB." },
              { term: "Stride", definition: "The fixed number of elements skipped when one index changes, e.g. N in row-major row steps." },
            ],
            callout: {
              type: "tip",
              title: "Which number is N?",
              body: "In the row-major formula the multiplier of (i - LR) is the number of COLUMNS, not rows - a classic mix-up. Anchor it with a phrase: 'to skip whole rows you must know how wide a row is', and a row is N elements wide. Column-major mirrors it: to skip whole columns you need M, the column height.",
            },
            diagram: {
              kind: "matrix",
              title: "The two flattening orders of a 2 x 3 array",
              caption: "Top row: row-major memory order; bottom row: column-major memory order - same matrix, different layout.",
              axes: { x: "row-major layout", y: "column-major layout" },
              quadrants: [
                { label: "Row-major groups", note: "a11 a12 a13 | a21 a22 a23 - rows contiguous" },
                { label: "Same elements, same syntax", note: "A[i][j] works identically in both orders" },
                { label: "Column-major groups", note: "a11 a21 | a12 a22 | a13 a23 - columns contiguous" },
                { label: "Formulas differ", note: "row-major: (i * N + j); column-major: (j * M + i)" },
              ],
            },
            examQuestions: [
              {
                q: "Derive the address formula for A[i][j] in row-major and column-major order. An array A[1..5][1..6] of integers (4 bytes each) is stored at base 2000 in row-major order. Compute the address of A[3][5] and of A[5][2].",
                marks: 7,
                outline: [
                  "Explain why 2-D data must be flattened to linear memory.",
                  "Row-major derivation: skip (i - LR) full rows of N elements, then (j - LC).",
                  "Formula: Base + w * ((i - LR) * N + (j - LC)).",
                  "A[3][5]: 2000 + 4 * ((3-1) * 6 + (5-1)) = 2000 + 4 * 16 = 2064.",
                  "A[5][2]: 2000 + 4 * (4 * 6 + 1) = 2000 + 104 = 2104.",
                  "State the column-major formula for completeness.",
                  "Note the address never depends on the row upper bound alone - both bounds fix N.",
                ],
              },
              {
                q: "For a 3 x 3 matrix stored in column-major order, list the storage sequence of the elements.",
                marks: 2,
                outline: ["a11 a21 a31 a12 a22 a32 a13 a23 a33.", "One full column before the next starts."],
              },
              {
                q: "In C, why is the loop 'for i: for j: sum += A[i][j]' faster than the nested loops in the opposite order?",
                marks: 3,
                outline: [
                  "C stores arrays row-major.",
                  "Inner loop over j walks consecutive addresses.",
                  "Reversed order jumps N * w bytes per step - poor cache use.",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Array operations: traversal, insertion and deletion",
            body: [
              "The array ADT exposes four core operations, and their costs define when an array is the right structure. Traversal visits every element once in index order - a single loop from LB to UB, O(n) time, and the natural setting for aggregation (sum, max, average). Searching for a value without order information is a linear scan, also O(n); if the array is kept sorted, binary search (Unit IV) cuts that to O(log n). Access by known index is O(1), the array's signature advantage.",
              "Insertion at position pos requires making room. Every element currently at pos or to its right must move one place up, scanning from the end backwards to avoid overwriting: for i from n-1 down to pos: A[i+1] = A[i]; then A[pos] = x; n = n+1. The best case (append at the end) touches nothing and costs O(1); the worst case (insert at index 0) shifts all n elements and costs O(n); the average over all positions is about n/2 shifts, so O(n). Deletion mirrors this: A[pos] is overwritten by shifting the right side one place down, for i from pos to n-2: A[i] = A[i+1]; then n = n-1, again O(n) worst case.",
              "Worked example on A = [10, 20, 30, 40, 50], n = 5. Insert 25 at index 2: shift 50 to index 5, 40 to 4, 30 to 3 - array becomes [10, 20, 30, 30, 40, 50] mid-way - then write 25 at index 2: [10, 20, 25, 30, 40, 50]. Delete index 0 from the result: 20 covers index 0, 25 covers 1, 30 covers 2, 40 covers 3, 50 covers 4 - four moves - leaving [20, 25, 30, 40, 50] with n = 4. Notice deletion does not erase the vacated slot; it just decrements n, so the old value remains in memory until overwritten - a favourite trick question about 'what happens to A[4] after deletion'.",
              "The cost table explains the rest of the course. Arrays win access and are unbeatable for read-heavy workloads; they lose any workload that inserts or deletes in the middle, which is precisely the gap linked lists fill in Unit II. Fixed capacity is a further constraint: C arrays cannot grow, so production code either over-allocates and tracks n separately (a dynamic array, like Python's list or C++ vector, which doubles capacity when full to keep amortized appends O(1)), or moves to linked storage. When an exam question asks 'justify your choice of data structure', this operation-cost table is the expected justification.",
            ],
            bullets: [
              "Traversal: one pass LB to UB, O(n); access by index: O(1).",
              "Insertion at pos: shift elements pos..n-1 one place right, back-to-front to avoid overwrite.",
              "Insertion cost: O(1) at the end, O(n) at the front, O(n) on average (about n/2 shifts).",
              "Deletion at pos: shift elements pos+1..n-1 one place left; decrement n; O(n) worst case.",
              "Deleted slot keeps its stale byte pattern - only n shrinks, memory is not cleared.",
              "Worked insert on [10,20,30,40,50] at index 2 with 25 gives [10,20,25,30,40,50].",
              "Dynamic arrays over-allocate and double capacity to keep appends amortized O(1).",
              "Cost table (access O(1), insert O(n), delete O(n)) is the standard justification for choosing lists instead.",
            ],
            codeExample: {
              language: "c",
              caption: "Insertion and deletion in an array, back-to-front and front-to-back",
              code: `#define CAP 100
int insert(int A[], int *n, int pos, int x) {
    if (*n >= CAP || pos < 0 || pos > *n) return 0;
    for (int i = *n - 1; i >= pos; i--)
        A[i + 1] = A[i];          /* shift right, end first */
    A[pos] = x;  (*n)++;
    return 1;
}
int del(int A[], int *n, int pos) {
    if (pos < 0 || pos >= *n) return 0;
    for (int i = pos; i < *n - 1; i++)
        A[i] = A[i + 1];          /* shift left, front first */
    (*n)--;
    return 1;
}`,
            },
            keyTerms: [
              { term: "Shifting", definition: "Moving a block of elements one index over to open or close a gap; the source of the O(n) cost." },
              { term: "Traversal", definition: "Visiting every element of the array once, in index order, in O(n)." },
              { term: "Amortized O(1)", definition: "Average cost per operation over a sequence, as when doubling capacity makes appends O(1) on average." },
            ],
            callout: {
              type: "warning",
              title: "Shift direction is not cosmetic",
              body: "Insertion must copy from the END backwards; if you loop forwards you overwrite unread elements with their left neighbours and corrupt the data. Deletion is the mirror image - front to back. Draw five boxes, insert at index 2, and trace both loop directions once; the exam almost always includes a trace question where the wrong direction fails visibly.",
            },
            diagram: {
              kind: "flow",
              title: "Inserting x at index 2 of [10, 20, 30, 40, 50]",
              caption: "Open the gap from the right edge, then write - the only safe order.",
              steps: [
                { label: "Check capacity and pos", note: "0 <= pos <= n" },
                { label: "A[5] = 50, A[4] = 40", note: "shift from the end" },
                { label: "A[3] = 30", note: "gap open at index 2" },
                { label: "A[2] = 25", note: "write the new element" },
                { label: "n = 6", note: "result: [10,20,25,30,40,50]" },
              ],
            },
            examQuestions: [
              {
                q: "Write algorithms (or C functions) to insert an element at a given position and to delete an element from a given position in an array. Analyse the time complexity of each in best and worst case.",
                marks: 7,
                outline: [
                  "Insert: validate pos (0 <= pos <= n) and capacity.",
                  "Loop i from n-1 down to pos: A[i+1] = A[i].",
                  "Write A[pos] = x; increment n.",
                  "Delete: validate pos (0 <= pos < n).",
                  "Loop i from pos to n-2: A[i] = A[i+1]; decrement n.",
                  "Best case: insert/delete at the end - O(1).",
                  "Worst case: position 0 - O(n); average about n/2 shifts, still O(n).",
                ],
              },
              {
                q: "Array A = [5, 15, 25, 35] with n = 4. Show the array after inserting 20 at index 2 and then deleting index 0.",
                marks: 3,
                outline: ["After insert: [5, 15, 20, 25, 35], n = 5.", "After delete of index 0: [15, 20, 25, 35], n = 4.", "Two then three shift steps respectively."],
              },
              {
                q: "What is the difference between the logical length n of an array and its physical capacity?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Sparse matrices: representation and storage",
            body: [
              "A sparse matrix is a matrix in which the great majority of elements are zero - conventionally, when non-zero entries are well under a third of m * n. Storing it as a plain two-dimensional array wastes both memory and scan time on zeros: a 1000 x 1000 matrix with 50 non-zero values would burn a million integer cells to remember 50 facts. Sparse representation stores only the non-zero entries plus enough metadata to reconstruct the matrix exactly.",
              "The standard triple (or triplet) representation keeps a one-dimensional array of records (row, column, value), ordered row by row. Its element 0 is a header carrying the matrix dimensions and the count of non-zero entries: (m, n, t). Worked example: the 4 x 4 matrix with non-zero entries A[0][1] = 5, A[1][3] = 8, A[3][2] = 6 is stored as four triples: (4, 4, 3) then (0, 1, 5), (1, 3, 8), (3, 2, 6). Space falls from 16 cells to 4 triples; for a 1000 x 1000 matrix with 50 non-zeros, from 1,000,000 cells to 51.",
              "Operations adapt to the representation. Transposition swaps each triple's row and column and then re-sorts by row - the classic algorithm scans the triples column-count-first using auxiliary arrays to place each triple directly, running in O(n + t) instead of O(m * n). Addition of two sparse matrices merges their triple lists in row-major order, adding values only where row and column match, O(t1 + t2). Multiplication can skip every zero-product pair. Each is a direct exam question: 'write an algorithm to transpose a sparse matrix using triplet representation' appears regularly, and the full-mark answer walks the merge/re-place logic rather than transposing the dense matrix.",
              "When is the triplet form worth it? Compare storage: dense needs m * n cells; sparse needs 3 * (t + 1) cells (row, column, value per triple plus the header). It wins when 3t + 3 < m * n, i.e. roughly when fewer than a third of the entries are non-zero. Below that threshold the metadata overhead loses to a plain array. Beyond triples, linked representations (each non-zero as a node with row and column links) and compressed row storage serve matrix libraries; the syllabus expects the triplet form and its transpose/add algorithms as the examinable core.",
            ],
            bullets: [
              "Sparse matrix: the fraction of non-zero entries is small enough that storing zeros wastes memory.",
              "Triplet form: array of (row, col, value) records in row-major order.",
              "Header triple (0): (m, n, t) - dimensions and non-zero count.",
              "Worked example: 4 x 4 with entries (0,1,5), (1,3,8), (3,2,6) stores as 4 triples.",
              "Storage comparison: dense m * n vs sparse 3 * (t + 1); sparse wins when t is small.",
              "Transpose: swap row and column in each triple, then reorder; O(n + t) with counting arrays.",
              "Addition: merge two ordered triple lists, matching (row, col) pairs; O(t1 + t2).",
            ],
            table: {
              caption: "Triplet storage of the 4 x 4 example matrix.",
              headers: ["Index", "Row", "Col", "Value", "Meaning"],
              rows: [
                ["0", "4", "4", "3", "header: 4 rows, 4 cols, 3 non-zero"],
                ["1", "0", "1", "5", "A[0][1] = 5"],
                ["2", "1", "3", "8", "A[1][3] = 8"],
                ["3", "3", "2", "6", "A[3][2] = 6"],
              ],
            },
            keyTerms: [
              { term: "Sparse matrix", definition: "A matrix whose non-zero entries are a small fraction of m * n, stored compactly." },
              { term: "Triplet representation", definition: "Ordered array of (row, column, value) records with a header triple holding m, n and t." },
              { term: "Transpose of a sparse matrix", definition: "Swapping row and column in every triple and restoring row-major order, done in O(n + t)." },
            ],
            callout: {
              type: "exam",
              title: "Always store the header",
              body: "Examiners deduct for triplet answers missing the (m, n, t) header element - without it the matrix cannot be reconstructed. Write the header first, keep triples sorted by row (then column), and state the space comparison 3(t+1) vs m*n; that comparison is frequently a separate 2-mark sub-question.",
            },
            diagram: {
              kind: "layers",
              title: "Triplet storage, layer by layer",
              caption: "The dense matrix collapses to three layers of bookkeeping - dimensions, count, then ordered non-zero triples.",
              layers: [
                { label: "Dense view: 4 x 4 grid", note: "16 cells, 13 of them zero" },
                { label: "Header triple (4, 4, 3)", note: "rows, cols, non-zero count" },
                { label: "Ordered triples", note: "(0,1,5) (1,3,8) (3,2,6)" },
                { label: "Reconstruction", note: "start empty, scatter each triple - matrix restored" },
              ],
            },
            examQuestions: [
              {
                q: "What is a sparse matrix? Represent the matrix [[0,5,0,0],[0,0,0,8],[0,0,0,0],[0,0,6,0]] in triplet form and explain how to transpose it.",
                marks: 7,
                outline: [
                  "Define sparse matrix and the waste of dense storage.",
                  "Header triple: (4, 4, 3).",
                  "Triples in row-major order: (0,1,5), (1,3,8), (3,2,6).",
                  "Transpose idea: swap row and column in each triple.",
                  "After swap, triples are column-ordered - must be re-sorted by row.",
                  "Mention the O(n + t) counting-based method: count per column, compute start positions, place triples.",
                  "Give the transposed triplet list: (4,4,3), (1,0,5), (3,1,8), (2,3,6).",
                ],
              },
              {
                q: "When does triplet representation use less memory than a dense 2-D array? Give the inequality.",
                marks: 2,
                outline: ["Dense: m * n cells.", "Triplet: 3 * (t + 1) cells.", "Wins when 3(t + 1) < m * n."],
              },
              {
                q: "Write the triple (header + entries) for a 3 x 3 identity matrix.",
                marks: 3,
                outline: ["Header: (3, 3, 3).", "Entries: (0,0,1), (1,1,1), (2,2,1)."],
              },
            ],
          },
          {
            number: "1.6",
            title: "Strings: representation and storage in memory",
            body: [
              "A string is a finite sequence of characters treated as a single data value. Physically, every language must answer two questions: where do the characters live, and where does the string end? C answers with a character array plus a sentinel: the string 'hello' occupies six bytes, 'h e l l o \\0', with the null terminator marking the end. Length is therefore not stored anywhere - strlen walks the array until it hits '\\0', costing O(n). This design makes strings cheap and dangerous: forgetting the terminator, or overwriting it, sends every string routine past the buffer's end.",
              "Other languages made different choices. Pascal prefixes each string with its length byte (up to 255 characters in classic Pascal) so length is O(1) but the maximum length is capped. Modern object languages (Java, Python, C#) store a length field and often a hash alongside the character data in a managed object, giving O(1) length with no cap, at the cost of a small header per string. The syllabus is C-centric, so the null-terminated model is the examinable default - but a comparison sentence about length-prefixed storage earns the extra mark.",
              "Declaring and initialising in C ties the model together. char s[6] = \"abc\"; places 'a', 'b', 'c', '\\0' in a 6-byte buffer, leaving room to grow to 5 characters. String literals in code are anonymous constant arrays, so char *p = \"abc\"; points at read-only memory while char s[] = \"abc\"; creates a writable copy - assigning to p[0] crashes, assigning to s[0] works. Reading a string uses scanf with %s or fgets(buf, size, stdin); fgets is preferred because it bounds the input and keeps the '\\0' guarantee, whereas unchecked scanf is the classic buffer-overflow teaching moment.",
              "Because strings are arrays, all array costs apply: indexing s[i] is O(1); computing length, copying, or concatenating is O(n) in the string size; comparing two strings is O(min(len)) since a mismatch ends the scan early. These costs are worth memorising as a table - they are exactly what a 3-mark question asks, and they are the base case for the pattern-matching complexities of section 1.8, where the string length n and pattern length m combine into O(n * m) for the naive matcher.",
            ],
            bullets: [
              "String: a sequence of characters; in C, a char array terminated by the sentinel '\\0'.",
              "Length is not stored in C - strlen scans to the terminator, O(n).",
              "Pascal stores a length byte (O(1) length, capped size); Java/Python store length fields in a header.",
              "char s[] = \"abc\"; is a writable 4-byte array; char *p = \"abc\"; points to read-only memory.",
              "fgets(buf, size, stdin) bounds input and preserves the terminator; unchecked scanf can overflow.",
              "Index s[i] is O(1); copy, concat and length are O(n); compare is O(min length) with early exit.",
              "Buffer for a string of L characters needs at least L + 1 bytes for the terminator.",
            ],
            table: {
              caption: "String storage strategies compared.",
              headers: ["Model", "Length cost", "Max length", "Cost / risk"],
              rows: [
                ["C: null-terminated", "O(n) - scan to '\\0'", "bounded by buffer", "no header; overflow risk if '\\0' lost"],
                ["Pascal: length prefix", "O(1)", "255 (classic)", "1 extra byte; no overflow"],
                ["Java / Python object", "O(1)", "memory-bound", "header + hash per string; managed"],
              ],
            },
            keyTerms: [
              { term: "Null terminator '\\0'", definition: "The zero byte that ends a C string; every string routine relies on finding it." },
              { term: "Sentinel", definition: "A reserved value marking the end of data so no separate length is stored." },
              { term: "Buffer overflow", definition: "Writing past the end of a character array - the classic consequence of unbounded string input." },
              { term: "String literal", definition: "A quoted constant stored in read-only memory; char s[] copies it, char *p merely points at it." },
            ],
            callout: {
              type: "warning",
              title: "The missing byte",
              body: "The single most-failed string question: 'how many bytes does char s[] = \"abc\" occupy?' Answer: 4, not 3 - the terminator takes one. The mirror failure is declaring char s[3] for three characters and losing the '\\0', which makes strlen and printf read past the buffer. Always budget length + 1.",
            },
            diagram: {
              kind: "compare",
              title: "Null-terminated vs length-prefixed storage",
              caption: "The same string 'abc' under the two classic storage models.",
              left: {
                heading: "C: sentinel model",
                items: [
                  "bytes: 'a' 'b' 'c' '\\0'",
                  "length not stored - strlen is O(n)",
                  "no size cap",
                  "risk: lost terminator means overrun",
                  "char s[4] = \"abc\" is exactly full",
                ],
              },
              right: {
                heading: "Pascal-style: length prefix",
                items: [
                  "bytes: 3 'a' 'b' 'c'",
                  "length stored - O(1) answer",
                  "capped by prefix width",
                  "no sentinel to lose",
                  "cost: one byte of overhead",
                ],
              },
            },
            examQuestions: [
              {
                q: "How are strings represented and stored in memory in C? Explain the role of the null terminator and compare this scheme with length-prefixed storage.",
                marks: 7,
                outline: [
                  "String = sequence of characters; C stores it as a char array.",
                  "Sentinel '\\0' marks the end; show bytes of 'abc' as 'a b c \\0'.",
                  "Consequences: strlen O(n); buffer must be length + 1 bytes.",
                  "Declaration forms: char s[] copies, char *p points to read-only literal.",
                  "Safe input with fgets vs overflow with unchecked scanf.",
                  "Pascal model: length byte, O(1) length, cap of 255.",
                  "Conclude with cost table: index O(1), length O(n) vs O(1), compare O(min len).",
                ],
              },
              {
                q: "How many bytes does char s[] = \"structure\" occupy, and what does s[9] hold?",
                marks: 2,
                outline: ["9 characters + terminator = 10 bytes.", "s[9] is the '\\0' terminator."],
              },
              {
                q: "Why does assigning to p[0] crash when char *p = \"abc\"; but work when char s[] = \"abc\";?",
                marks: 3,
                outline: [
                  "The literal lives in read-only memory.",
                  "p points at that literal; writing to it faults.",
                  "s is a fresh writable array initialised from the literal.",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "String operations and their algorithms",
            body: [
              "The standard string library is a set of array algorithms in disguise. strlen(s) counts characters until '\\0' - a loop of length n, O(n). strcpy(dst, src) copies bytes from src to dst including the terminator; it trusts dst to be big enough, which is why the bounded variant strncpy(dst, src, k) exists. strcat(dst, src) finds dst's terminator (O(len dst)) and then copies src there (O(len src)), so concatenation costs O(m + n) overall. strcmp(s1, s2) compares character by character and returns negative, zero or positive at the first mismatch or the terminators - lexicographic order, the order dictionaries and sorted word lists use.",
              "Building blocks compose. Substring extraction s[i..j] is a bounded copy of j - i + 1 characters plus a terminator. Reversal swaps s[i] with s[n-1-i] for i up to the midpoint, O(n) with O(1) extra space. Character classification (isdigit, isalpha, toupper) inspects single characters and is the glue inside tokenisers: a word is a maximal run of isalpha characters, a number a maximal run of isdigit ones. Each of these is small enough to write from scratch in an exam - and RGPV papers regularly ask exactly that: 'write a C function to reverse a string in place' or 'compute the length without using strlen'.",
              "Worked example, reverse in place on \"structure\" (n = 9): swap s[0]/s[8] gives 'e' first, swap s[1]/s[7] gives the final 't' into slot 1, then s[2]/s[6], s[3]/s[5], and s[4] - the middle character - stays. Five swaps, one extra variable, result \"erutcurts\". Worked comparison: strcmp(\"data\", \"date\") walks d-a-t equal, then 'a' (97) vs 'e' (101), so it returns a negative value - \"data\" sorts before \"date\". These traces are what the examiner wants to see, not just the function name.",
              "Cost discipline rounds the unit out. Every operation that touches each character once is O(n); operations that may rescan (strcat locating the terminator, repeated concatenation in a loop) can quietly become O(n^2) - the reason real code accumulates into a buffer or uses a string-builder. A frequent exam follow-up asks for the complexity of each library call; answer as a table: strlen O(n), strcpy O(n), strcat O(m + n) after an O(m) scan, strcmp O(min(n, m)), substring extraction O(k). 'k' conventionally denotes the extracted length.",
            ],
            bullets: [
              "strlen: scan to '\\0', O(n). strcpy: bounded copy including terminator, O(n), trusts dst size.",
              "strcat: locate dst terminator then copy src - O(m + n) total.",
              "strcmp: first-mismatch lexicographic compare, returns < 0, 0, > 0.",
              "Substring s[i..j]: copy j - i + 1 characters plus '\\0', O(j - i + 1).",
              "Reverse in place: swap s[i] with s[n-1-i] for i < n/2 - O(n) time, O(1) space.",
              "Worked reverse of \"structure\" -> \"erutcurts\" with 5 swaps.",
              "Repeated concat in a loop degrades to O(n^2) - accumulate in a buffer instead.",
              "Character-class functions (isalpha, isdigit) power tokenisers for words and numbers.",
            ],
            codeExample: {
              language: "c",
              caption: "Length, reversal and comparison written from scratch",
              code: `int my_strlen(const char *s) {
    int n = 0;
    while (s[n] != '\\0') n++;
    return n;
}
void my_reverse(char *s) {
    int i = 0, j = my_strlen(s) - 1;
    while (i < j) {                 /* swap ends inward */
        char t = s[i]; s[i] = s[j]; s[j] = t;
        i++; j--;
    }
}
int my_strcmp(const char *a, const char *b) {
    while (*a && *a == *b) { a++; b++; }
    return (unsigned char)*a - (unsigned char)*b;
}`,
            },
            keyTerms: [
              { term: "Lexicographic order", definition: "Dictionary ordering: compare character codes position by position; the first difference decides." },
              { term: "In-place algorithm", definition: "One that rearranges the data inside the original buffer using O(1) extra memory." },
              { term: "Bounded copy", definition: "A copy that never writes more than k characters, preventing overflow of the destination buffer." },
            ],
            callout: {
              type: "tip",
              title: "Write the loop, not the library",
              body: "When a question says 'write a function to ...', reimplementing strlen or strcmp from loops earns full marks; calling the library function earns almost none. The examiner is testing the array algorithm, so show the while-loop, the terminator test, and the swap or copy logic explicitly.",
            },
            diagram: {
              kind: "cycle",
              title: "The character-by-character compare loop",
              caption: "strcmp in four repeated moves - stop at the first difference or the terminator.",
              steps: [
                { label: "Read s1[i] and s2[i]", note: "current pair" },
                { label: "Equal?", note: "difference -> return s1[i] - s2[i]" },
                { label: "Both '\\0'?", note: "yes -> return 0, strings equal" },
                { label: "Advance i", note: "next pair; loop repeats" },
                { label: "Terminator on one side", note: "shorter string sorts first" },
              ],
            },
            examQuestions: [
              {
                q: "Write C functions to (a) compute the length of a string without strlen, (b) reverse a string in place, and (c) compare two strings lexicographically. Trace your reversal on the string \"structure\".",
                marks: 7,
                outline: [
                  "(a) while (s[n] != '\\0') n++; - O(n).",
                  "(b) i = 0, j = n - 1; swap while i < j - O(n) time, O(1) space.",
                  "(c) advance while both characters equal and non-zero; return difference at mismatch.",
                  "Trace on \"structure\": swaps (s,e), (t,t) - note equal pair, (r,c), (u,u) equal, (t,r).",
                  "Result \"erutcurts\" after 5 swaps.",
                  "Middle character of an odd-length string never moves.",
                  "State complexities: all three O(n).",
                ],
              },
              {
                q: "What does strcat(dst, src) return and what is its total time complexity in terms of the two lengths?",
                marks: 2,
                outline: ["Returns dst (the concatenated buffer).", "O(len dst) to find the terminator + O(len src) to copy = O(m + n)."],
              },
              {
                q: "Given strcmp(\"data\", \"date\"), which string sorts first and why?",
                marks: 3,
                outline: [
                  "Common prefix 'dat'; then 'a' vs 'e'.",
                  "ASCII: 97 < 101, so a negative result.",
                  "\"data\" sorts before \"date\".",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Pattern matching: naive string matcher and the idea of KMP",
            body: [
              "Pattern matching asks: at which positions does a pattern P of length m occur inside a text T of length n? The naive (brute-force) matcher slides P over every possible alignment and compares character by character: for s from 0 to n - m: test T[s..s+m-1] against P[0..m-1]; report s on a full match. The comparisons for one alignment stop at the first mismatch, so the worst case - pattern 'aaa', text 'aaaa...a' - performs about (n - m + 1) * m comparisons, i.e. O(n * m).",
              "Worked trace, T = \"abababcab\", P = \"ababc\" (n = 9, m = 5). Shift s = 0: a-b-a-b match, T[4] = 'a' vs P[4] = 'c' - mismatch after 4 comparisons. s = 1: T[1] = 'b' vs 'a' - mismatch after 1. s = 2: a-b-a-b-c - full match at position 2 after 5 comparisons. Total comparisons: 4 + 1 + 5 plus the failures at s = 3..4 - far less than the 25 worst-case, but the guarantee is still O(n * m), and adversarial inputs reach it.",
              "The KMP (Knuth-Morris-Pratt) insight: after a mismatch we know exactly which characters of the pattern have just been compared, so we can precompute, for every prefix of P, its longest proper prefix that is also a suffix. This prefix function pi is computed once in O(m) and stored in a table. During the scan, on a mismatch the pattern does not restart at shift + 1; it re-aligns to pi[matched - 1] and the text pointer never moves backwards. The result is O(m) preprocessing plus O(n) matching, hence O(n + m) total, independent of how repetitive the text is.",
              "For P = \"ababc\" the prefix table is pi = [0, 0, 1, 2, 0]: the prefix 'aba' has longest border 'a' (length 1), 'abab' has 'ab' (length 2). On the trace above, mismatch at s = 0 after 4 matches sends us to pi[3] = 2 - the next alignment starts comparing P[2], skipping redundant work. The exam syllabus asks for the naive algorithm in full and usually KMP as a concept with the table; being able to compute pi for a short pattern by hand is a reliably appearing 3-4 mark item.",
            ],
            bullets: [
              "Pattern matching: find all positions where pattern P (length m) occurs in text T (length n).",
              "Naive matcher: try every shift s in 0..n-m; compare until first mismatch.",
              "Worst case about (n - m + 1) * m comparisons - O(n * m), e.g. T = 'aaaa', P = 'aaa'.",
              "Worked trace: T = 'abababcab', P = 'ababc' matches at shift 2 after 10 total comparisons.",
              "KMP precomputes the prefix function pi: longest proper prefix of P[0..i] that is also a suffix.",
              "pi for 'ababc' = [0, 0, 1, 2, 0].",
              "KMP never moves the text pointer backwards: O(m) preprocess + O(n) scan = O(n + m).",
              "Boyer-Moore and Rabin-Karp exist beyond the syllabus; know their names as alternatives.",
            ],
            table: {
              caption: "Prefix function pi for P = 'ababc' (pattern indices 0..4).",
              headers: ["i", "P[0..i]", "Longest border", "pi[i]"],
              rows: [
                ["0", "a", "-", "0"],
                ["1", "ab", "-", "0"],
                ["2", "aba", "a", "1"],
                ["3", "abab", "ab", "2"],
                ["4", "ababc", "-", "0"],
              ],
            },
            keyTerms: [
              { term: "Alignment / shift", definition: "A starting position s in the text under which the pattern is tested." },
              { term: "Prefix function pi", definition: "For each pattern prefix, the length of its longest proper prefix that is also a suffix - KMP's skip table." },
              { term: "Border", definition: "A string that is both a proper prefix and a suffix of another string, e.g. 'ab' in 'abab'." },
            ],
            callout: {
              type: "exam",
              title: "Naive first, KMP with the table",
              body: "A 7-mark question typically splits: derive and trace the naive matcher (4 marks), then state how KMP improves it with the prefix table (3 marks). Even if you cannot derive pi's construction algorithm, computing pi for the given pattern and explaining 'the text pointer never moves backwards' recovers the marks.",
            },
            diagram: {
              kind: "fork",
              title: "Mismatch during a naive comparison - what happens next",
              caption: "The naive matcher pays full restart cost; KMP consults the prefix table instead.",
              start: "Compare T[s + k] with P[k]",
              branches: [
                { label: "Characters equal", outcome: "advance k; match grows toward m", good: true },
                { label: "Mismatch, naive", outcome: "shift s by 1, restart k at 0 - O(n*m) worst case", good: false },
                { label: "Mismatch, KMP", outcome: "re-align pattern to pi[k-1]; text pointer stays - O(n+m)", good: true },
                { label: "k reaches m", outcome: "full match reported at shift s", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Explain the naive string-matching algorithm with a trace on T = \"abababcab\", P = \"ababc\". Derive its worst-case complexity and describe how KMP reduces it to O(n + m).",
                marks: 7,
                outline: [
                  "Naive: for each shift s in 0..n-m, compare T[s..s+m-1] with P.",
                  "Trace s = 0: match 'abab', mismatch 'a' vs 'c' after 4 comparisons.",
                  "Trace s = 1: mismatch after 1; s = 2: full match after 5.",
                  "Worst case: (n - m + 1) * m comparisons, e.g. all-'a' text and pattern - O(n * m).",
                  "KMP idea: mismatch reveals which prefix was matched.",
                  "Define prefix function pi and give pi = [0,0,1,2,0] for this pattern.",
                  "On mismatch re-align to pi[k-1]; text pointer never retreats - O(n) scan + O(m) preprocess.",
                ],
              },
              {
                q: "Compute the prefix function pi for the pattern \"aabaaab\".",
                marks: 3,
                outline: ["pi = [0, 1, 0, 1, 2, 2, 0] (check each border by hand).", "e.g. prefix 'aabaa' has border 'aa' of length 2."],
              },
              {
                q: "Why can KMP move the pattern forward without moving the text pointer backwards?",
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
      title: "Linked Lists, Stacks and Queues",
      summary:
        "Dynamic storage: singly, doubly and circular linked lists with their operation algorithms, then the two great sequential ADTs - stacks (LIFO) and queues (FIFO) - with array and linked implementations, infix-to-postfix conversion, postfix evaluation and the circular-queue trick.",
      chapter: {
        number: "02",
        title: "Lists in Chains and the LIFO / FIFO Families",
        intro:
          "Unit II trades the array's O(n) mid-sequence operations for pointer-based lists that insert and delete in O(1) once the position is known, then builds stacks and queues - the two ADTs whose discipline (last-in-first-out, first-in-first-out) powers everything from expression evaluation to OS schedulers.",
        inOneBreath:
          "A linked node = data + next pointer; singly lists insert/delete in O(1) given the position but access in O(n); doubly lists add a prev pointer and delete-at-node in O(1); circular lists let the last node point back and solve Josephus cleanly. Stack = LIFO with push/pop/peek, used for reversal, parentheses, infix-to-postfix and recursion simulation. Queue = FIFO with enqueue/dequeue; the circular array reuses freed cells via (rear + 1) % size; deques add both ends, priority queues order by key.",
        sections: [
          {
            number: "2.1",
            title: "Linked lists: concept, nodes and dynamic memory",
            body: [
              "A linked list is a linear collection of elements called nodes, where each node stores a data field and a pointer (link) to the next node in the sequence. The list is reached through a head pointer; the last node's next is NULL, marking the end. Unlike an array, nodes are scattered anywhere in memory - the pointer, not physical adjacency, supplies the order. This is dynamic storage: in C, each node is allocated with malloc at run time and released with free, so the list grows and shrinks exactly as the data demands.",
              "The defining node type in C is: struct Node { int data; struct Node *next; };. Worked picture of the list holding 10, 20, 30: head -> [10|next] -> [20|next] -> [30|NULL]. To find the third element you must follow two pointers - access by position is O(n), the direct opposite of the array's O(1). But insertion after a known node p costs three pointer assignments and no shifting: O(1). Every exam question about 'why linked lists' is answered by this trade: pay O(n) access and per-node pointer overhead (8 bytes per node on 64-bit machines) to gain O(1) insert/delete at a known position and no need for a pre-declared capacity.",
              "The self-referential structure is the conceptual heart: struct Node contains a pointer to its own type. This works because the pointer is a fixed-size address, not the whole node - the compiler only needs the type's name, not its size, to declare a pointer to it. The same trick later builds trees (each node holds two child pointers) and graphs (adjacency lists of nodes). Allocation discipline matters too: every malloc must eventually pair with free, or the program leaks memory; and a node freed while another pointer still references it creates a dangling pointer - the two classic pointer bugs examiners probe with 'what is a memory leak / dangling pointer'.",
              "Variants of the basic chain preview the unit: the doubly linked list adds a prev pointer for two-way traversal; the circular list connects the last node back to the first so no NULL exists; the header (dummy) node version keeps a permanent placeholder at the front so every insertion - including the first - is 'insert after some node', eliminating special cases. When asked to 'explain the representation of linked lists', a full-mark answer draws the node structure, states head and NULL conventions, contrasts O(1) insert/delete with O(n) access against the array, and mentions the variants.",
            ],
            bullets: [
              "Node = data field(s) + next pointer; the list is reached via head; last node's next is NULL.",
              "struct Node { int data; struct Node *next; }; - a self-referential structure.",
              "Nodes are allocated at run time with malloc and released with free - size adapts to the data.",
              "Access by position is O(n) (pointer walking); insert/delete at a known position is O(1).",
              "Worked picture: head -> [10|next] -> [20|next] -> [30|NULL].",
              "Overhead: one pointer (8 bytes on 64-bit) per node plus per-allocation cost.",
              "Classic pointer bugs: memory leak (missing free) and dangling pointer (use after free).",
              "Variants: doubly linked (prev pointer), circular (no NULL), header node (removes first-node special case).",
            ],
            codeExample: {
              language: "c",
              caption: "Node type, creation and a three-node list built by hand",
              code: `#include <stdlib.h>
struct Node {
    int data;
    struct Node *next;
};
struct Node *make_node(int v) {
    struct Node *p = (struct Node *)malloc(sizeof *p);
    p->data = v;
    p->next = NULL;
    return p;
}
/* head -> 10 -> 20 -> 30 -> NULL */
struct Node *build(void) {
    struct Node *head = make_node(10);
    head->next = make_node(20);
    head->next->next = make_node(30);
    return head;
}`,
            },
            keyTerms: [
              { term: "Node", definition: "One element of a linked list: data plus a pointer to the next node." },
              { term: "Head pointer", definition: "The external pointer referencing the first node; losing it loses the whole list." },
              { term: "Self-referential structure", definition: "A struct containing a pointer to its own type - the legal basis of lists and trees." },
              { term: "Memory leak", definition: "Allocated memory never freed because no pointer references it anymore." },
            ],
            callout: {
              type: "exam",
              title: "Draw pointers as arrows, never as rows",
              body: "Linked-list answers are graded on the diagram. Draw boxes with two cells (data | next), arrows leaving the next cell, and a crossed box or slash for NULL. A diagram showing head, three nodes and NULL earns the representation marks even if your code has a typo; code without a diagram rarely does.",
            },
            diagram: {
              kind: "compare",
              title: "Array vs singly linked list",
              caption: "The trade every implementation choice in this unit rests on.",
              left: {
                heading: "Array",
                items: [
                  "contiguous memory, one block",
                  "access A[i] in O(1)",
                  "insert/delete mid-way: O(n) shift",
                  "fixed capacity, no per-node overhead",
                  "size decided before the data exists",
                ],
              },
              right: {
                heading: "Singly linked list",
                items: [
                  "scattered nodes joined by pointers",
                  "access position i in O(n)",
                  "insert/delete at known node: O(1)",
                  "grows and shrinks at run time",
                  "8-byte pointer overhead per node",
                ],
              },
            },
            examQuestions: [
              {
                q: "What is a linked list? Explain its node structure with a diagram, compare its operations with those of an array, and name two situations where a linked list is the better choice.",
                marks: 7,
                outline: [
                  "Define: nodes with data + next, reached via head, ended by NULL.",
                  "Draw head -> [10|next] -> [20|next] -> [30|NULL].",
                  "C node declaration as a self-referential struct.",
                  "Dynamic allocation with malloc/free - size adapts at run time.",
                  "Compare: array O(1) access vs list O(n); array O(n) mid-insert vs list O(1) at known node.",
                  "Overhead: pointer per node; risk: leaks and dangling pointers.",
                  "Better choice: unknown size, frequent mid-sequence insert/delete (e.g. polynomial terms, undo chains).",
                ],
              },
              {
                q: "Define a self-referential structure for a node holding a float and explain why a pointer inside its own type is legal.",
                marks: 2,
                outline: ["struct Node { float data; struct Node *next; };", "A pointer is a fixed-size address, not the whole struct."],
              },
              {
                q: "What are a memory leak and a dangling pointer? Give one cause of each.",
                marks: 3,
                outline: [
                  "Leak: malloc'd node loses all references before free - memory unreachable.",
                  "Cause: overwriting head without freeing the old chain.",
                  "Dangling: using a pointer after its node was freed.",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Singly linked list operations: insertion, deletion and traversal",
            body: [
              "Traversal is the base routine: start at head, follow next until NULL, doing work at each node. It is the pattern inside search, count, print and reverse, always O(n). Searching for a value v walks the chain comparing data; the loop 'while (p != NULL && p->data != v) p = p->next;' returns the node or NULL. Every later operation is a traversal to some position plus a constant number of pointer moves - which is why the position's cost, not the moves, dominates.",
              "Insertion has three cases. Insert at front: newNode->next = head; head = newNode - two assignments, O(1). Insert at end: traverse to the last node (O(n)) then last->next = newNode. Insert after node p: newNode->next = p->next; p->next = newNode - O(1) once p is known. The order of the two assignments is the classic trap: copying p->next into newNode->next BEFORE redirecting p->next, otherwise the remainder of the list is orphaned. Worked trace on 10 -> 20 -> 30, inserting 25 after the first node: 25->next = 20-node, then 10-node->next = 25-node, giving 10 -> 25 -> 20 -> 30.",
              "Deletion mirrors insertion with one extra worry: the node being removed must be freed. Delete at front: temp = head; head = head->next; free(temp). Delete after node p (or delete the node with value v, found by traversal): keep a trailing pointer prev so prev->next can bypass the victim: prev->next = victim->next; free(victim). On 10 -> 25 -> 20 -> 30, deleting the node 25: prev is the 10-node, bypass sets 10-node->next to the 20-node, then free(25-node). Deletion of the first node changes head itself, which is why functions that may delete the front return the new head - or why a header (dummy) node is introduced to make head permanent.",
              "Reversal is the standard 'hard' question: iterate with three pointers prev, curr, next; at each step save curr->next, point curr->next back at prev, then slide prev = curr, curr = next. Trace on 10 -> 20 -> 30: step 1 makes 10 point to NULL (prev = 10, curr = 20); step 2 makes 20 point to 10; step 3 makes 30 point to 20; curr is NULL so head = prev = the 30-node. One pass, O(n) time, O(1) space. The complete operation set - insert (3 places), delete (2 patterns), traverse, search, reverse - with correct assignment order and free discipline is the heart of this section and of most 7-mark linked-list questions.",
            ],
            bullets: [
              "Traversal: p = head; while (p) { visit(p); p = p->next; } - O(n), the base of every routine.",
              "Insert at front: newNode->next = head; head = newNode - O(1).",
              "Insert after p: FIRST newNode->next = p->next, THEN p->next = newNode - order is everything.",
              "Insert at end: traverse to last node, last->next = newNode - O(n) for a plain singly list.",
              "Delete node after prev: prev->next = victim->next; free(victim) - keep a trailing pointer.",
              "Deleting the front changes head, so functions return the new head (or use a dummy header).",
              "Reverse with prev / curr / next three-pointer walk - one pass, O(n) time, O(1) space.",
              "Trace: 10 -> 20 -> 30 reversed becomes 30 -> 20 -> 10 with head = old last node.",
            ],
            codeExample: {
              language: "c",
              caption: "Insert at front, insert after a node, and delete by value",
              code: `struct Node *insert_front(struct Node *head, int v) {
    struct Node *n = make_node(v);
    n->next = head;              /* two lines, this order */
    return n;
}
void insert_after(struct Node *p, int v) {
    struct Node *n = make_node(v);
    n->next = p->next;           /* before redirecting p */
    p->next = n;
}
struct Node *delete_val(struct Node *head, int v) {
    struct Node *p = head, *prev = NULL;
    while (p && p->data != v) { prev = p; p = p->next; }
    if (!p) return head;              /* not found */
    if (!prev) head = p->next;        /* deleting first node */
    else prev->next = p->next;
    free(p);
    return head;
}`,
            },
            keyTerms: [
              { term: "Trailing pointer (prev)", definition: "A pointer one node behind the working pointer, needed to bypass a deleted node." },
              { term: "Orphaned chain", definition: "The sublist lost when p->next is redirected before saving it - the classic insertion bug." },
              { term: "Three-pointer reversal", definition: "The prev/curr/next walk that reverses a list in one pass with O(1) extra space." },
            ],
            callout: {
              type: "warning",
              title: "Assignment order and free discipline",
              body: "Two marks hide in two lines. Insertion: n->next = p->next must precede p->next = n, or the tail is orphaned. Deletion: free(victim) must come after the bypass, never before - freeing first leaves prev->next pointing at freed memory. Examiners specifically plant these two orderings in trace questions.",
            },
            diagram: {
              kind: "flow",
              title: "Inserting 25 after the first node of 10 -> 20 -> 30",
              caption: "Two pointer writes in the only safe order.",
              steps: [
                { label: "Allocate node for 25", note: "25's next is NULL" },
                { label: "25->next = 20-node", note: "save the tail first" },
                { label: "10-node->next = 25-node", note: "now redirect p" },
                { label: "List: 10 -> 25 -> 20 -> 30", note: "O(1), no shifting" },
              ],
            },
            examQuestions: [
              {
                q: "Write algorithms (or C functions) to insert a node at the beginning, at the end, and after a given node of a singly linked list, and to delete a node with a given value. Explain the importance of assignment order in each.",
                marks: 7,
                outline: [
                  "Insert front: newNode->next = head; head = newNode - O(1).",
                  "Insert end: traverse to last (while p->next), then last->next = newNode - O(n).",
                  "Insert after p: newNode->next = p->next before p->next = newNode.",
                  "Delete by value: walk with prev and p until p->data == v.",
                  "Bypass: prev->next = p->next; special case p == head updates head.",
                  "free(p) after the bypass - never before.",
                  "Order matters: wrong sequence orphans the tail or frees a live node.",
                ],
              },
              {
                q: "Show the list 4 -> 8 -> 15 -> 16 after each step of inserting 23 after the node 15 and then deleting the first node.",
                marks: 3,
                outline: ["After insert: 4 -> 8 -> 15 -> 23 -> 16.", "23->next takes the 16-node first.", "After delete: head moves to 8; list 8 -> 15 -> 23 -> 16."],
              },
              {
                q: "Outline the three-pointer method to reverse a singly linked list and state its complexity.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Doubly linked lists",
            body: [
              "A doubly linked list (DLL) adds a second pointer to each node: struct Node { int data; struct Node *prev, *next; };. Each node now knows its predecessor and its successor, and the list can be traversed in both directions from any point. The head's prev is NULL and the tail's next is NULL; some implementations also keep an external tail pointer for O(1) append and O(1) access to both ends.",
              "The payoff is deletion. In a singly list, deleting node p requires a traversal to find its predecessor (O(n)); in a DLL, p->prev is already there, so deletion at p is: p->prev->next = p->next; p->next->prev = p->prev; free(p) - O(1) given the node, no traversal, no trailing pointer. Worked trace on 10 <-> 20 <-> 30 deleting the middle node: 20->prev->next (the 10-node's next) is set to the 30-node, and 20->next->prev (the 30-node's prev) is set to the 10-node, restoring 10 <-> 30. Insertion similarly updates four pointers: inserting x after p sets x->prev = p, x->next = p->next, p->next->prev = x, p->next = x - again in an order that never drops a live pointer.",
              "The cost is memory and complexity of bookkeeping: two pointers per node instead of one (16 bytes of link overhead per node on 64-bit machines) and four pointer updates per structural change instead of two. The classic guard cases are the boundary nodes: deleting the first node must also set the new head's prev to NULL; deleting the last must set the new tail's next to NULL; a one-node list must reset head (and tail) to NULL. Missing these boundary writes is where DLL exam answers lose marks - always draw the boundary before coding.",
              "Where DLLs earn their keep in real systems: the LRU cache moves a node to the front on every access - O(1) removal from the middle is the enabling trick, impossible in a singly list; text editors and playlists step forward and backward through items; browser history and undo stacks need predecessor access. Java's LinkedList, C++ std::list and the Linux kernel's list_head are all doubly linked. For the exam, the ask is standard: define the DLL node, write insert-at-front and delete-by-node with all four pointer updates, trace on a three-node list, and compare with the singly list in a table - pointer count, traversal direction, delete-at-node cost and memory.",
            ],
            bullets: [
              "DLL node: data + prev + next; head->prev = NULL, tail->next = NULL.",
              "Bidirectional traversal from any node - singly lists can only go forward.",
              "Delete node p in O(1): p->prev->next = p->next; p->next->prev = p->prev; free(p).",
              "Insert after p updates four pointers: x->prev = p, x->next = p->next, p->next->prev = x, p->next = x.",
              "Boundary cases: new head's prev = NULL; new tail's next = NULL; one-node list resets head/tail.",
              "Overhead: 16 bytes of links per node on 64-bit - double the singly list.",
              "Killer application: LRU cache needs O(1) delete-in-middle plus O(1) move-to-front.",
              "Worked delete on 10 <-> 20 <-> 30 restores 10 <-> 30 with two writes.",
            ],
            table: {
              caption: "Singly vs doubly linked list.",
              headers: ["Property", "Singly linked", "Doubly linked"],
              rows: [
                ["Pointers per node", "1 (next)", "2 (prev, next)"],
                ["Traversal", "forward only", "both directions"],
                ["Delete given node p", "O(n) - find predecessor", "O(1) via p->prev"],
                ["Insert after p", "2 pointer updates", "4 pointer updates"],
                ["Memory overhead", "8 bytes per node (64-bit)", "16 bytes per node"],
                ["Typical use", "stacks, simple lists", "LRU cache, editors, deques"],
              ],
            },
            keyTerms: [
              { term: "prev pointer", definition: "The backward link in a DLL node, giving O(1) access to the predecessor." },
              { term: "Boundary node", definition: "The head or tail of a DLL, whose prev/next must be reset to NULL on structural change." },
              { term: "LRU cache", definition: "Least-recently-used cache built on a DLL + hash map; relies on O(1) middle deletion." },
            ],
            callout: {
              type: "tip",
              title: "Four writes, one rhythm",
              body: "Memorise DLL insertion as a rhyme: 'new points both ways, neighbours point to new'. Concretely: x->prev = p; x->next = p->next; then p->next->prev = x; p->next = x. Doing the two x-writes first guarantees p->next is still the old successor when you set its prev - the order that keeps every pointer alive.",
            },
            diagram: {
              kind: "flow",
              title: "Deleting node 20 from 10 <-> 20 <-> 30",
              caption: "Four writes total, two shown per step - the O(1) delete that singly lists cannot do.",
              steps: [
                { label: "Locate node 20", note: "given p, no traversal" },
                { label: "p->prev->next = p->next", note: "10-node now points to 30-node" },
                { label: "p->next->prev = p->prev", note: "30-node now points back to 10-node" },
                { label: "free(p)", note: "result: 10 <-> 30" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the structure of a doubly linked list. Write the algorithms to insert a node after a given node and to delete a given node, showing all pointer updates, and compare the DLL with a singly linked list.",
                marks: 7,
                outline: [
                  "Node: data + prev + next; head->prev and tail->next are NULL.",
                  "Draw 10 <-> 20 <-> 30 with two-way arrows.",
                  "Insert after p: x->prev = p; x->next = p->next; p->next->prev = x; p->next = x.",
                  "Delete p: p->prev->next = p->next; p->next->prev = p->prev; free(p).",
                  "Boundary cases: head/tail updates and NULL resets.",
                  "Comparison table: 1 vs 2 pointers, forward vs bidirectional, delete O(n) vs O(1).",
                  "Mention LRU cache as the motivating application.",
                ],
              },
              {
                q: "How many pointer fields does a DLL node have, and what is the total link memory for 1000 integer nodes on a 64-bit machine?",
                marks: 2,
                outline: ["Two pointers per node.", "1000 * (2 * 8) = 16000 bytes of links."],
              },
              {
                q: "Why does deleting a given node take O(1) in a DLL but O(n) in a singly linked list?",
                marks: 3,
                outline: [
                  "Deletion needs the predecessor to redirect its next.",
                  "Singly: predecessor found only by traversal from head.",
                  "DLL: p->prev already references it.",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Circular linked lists and the Josephus problem",
            body: [
              "A circular linked list closes the chain: the last node's next points back to the first, so no pointer is NULL and traversal never 'ends' - it must stop by counting or by recognising the starting node. Two common conventions exist: a linear head pointing at the first node (last node's next = head), or the more useful circular list with only a tail pointer, where tail->next is the first node - giving O(1) access to both ends (head = tail->next, append after tail). Applications: round-robin scheduling, where the OS cycles through processes forever; buffering streams that wrap around; and any model where 'after the last comes the first'.",
              "Traversal changes shape: instead of while (p != NULL), the loop runs do { visit(p); p = p->next; } while (p != head); - a do-while, because the terminating condition (back at the start) is only meaningful after at least one step. The empty list is still head/tail = NULL, and a single node is the special case where the node points to itself. Insertion into a tail-only circular list: newNode->next = tail->next; tail->next = newNode; then optionally tail = newNode - three writes that either insert at the front (keep tail) or append (advance tail).",
              "The Josephus problem is the canonical exercise: n people stand in a circle; counting starts at person 1 and every k-th person is eliminated; the count resumes from the next person; find the elimination order or the survivor. The circular list is the natural data structure: set current to head, then repeatedly advance k - 1 steps (the current person is counted as 1), remove that node, continue from the removed node's successor, until one remains. Worked example, n = 5, k = 2 with people 1..5: eliminate 2, then 4, then 1, then 5 - survivor 3. Each elimination is a walk of k steps plus an O(1) bypass, so the whole simulation is O(n * k).",
              "Round-robin scheduling shows the practical form: the scheduler keeps a circular list of ready processes, serves the node under the current pointer for one time slice, then advances the pointer - no re-building of the queue, no NULL checks. Deletion from a circular list needs the same trailing-pointer care as the linear case, with one extra trap: when deleting the node that the external pointer references, the pointer must be re-seated (for example to the victim's successor), or the list's entry point is lost. Exams ask for the node structure, the do-while traversal, the three-write insertion, and the Josephus simulation with a small trace - all four appear in past-pattern questions on circular lists.",
            ],
            bullets: [
              "Circular list: last node's next points to the first; no NULL anywhere.",
              "Tail-only variant: tail->next is the front - O(1) access to both ends.",
              "Traversal uses do-while and stops when back at the start node.",
              "Insert into tail-only list: newNode->next = tail->next; tail->next = newNode (advance tail to append).",
              "Single node points to itself; empty list is NULL - the two degenerate cases.",
              "Josephus n = 5, k = 2: eliminate 2, 4, 1, 5 - survivor 3; total cost O(n * k).",
              "Applications: round-robin CPU scheduling, circular buffers, multiplayer turn rotation.",
              "Trap: if you delete the node an external pointer references, re-seat that pointer first.",
            ],
            codeExample: {
              language: "c",
              caption: "Josephus survivor with a circular list of n = 5, k = 2",
              code: `struct Node *josephus(struct Node *tail, int k) {
    /* tail->next is person 1; nodes hold ids 1..n */
    struct Node *prev = tail, *p = tail->next;
    while (p->next != p) {            /* more than one left */
        for (int c = 1; c < k; c++) { /* advance k-1 steps */
            prev = p; p = p->next;
        }
        prev->next = p->next;         /* eliminate p */
        if (p == tail) tail = prev;
        free(p);
        p = prev->next;               /* resume from successor */
    }
    return p;                         /* the survivor */
}`,
            },
            keyTerms: [
              { term: "Circular linked list", definition: "A list whose last node links back to the first, so traversal is a closed loop." },
              { term: "Tail-only representation", definition: "Keeping only a pointer to the last node; tail->next gives the front in O(1)." },
              { term: "Josephus problem", definition: "Elimination around a circle every k-th person; the standard circular-list exercise." },
              { term: "Round-robin scheduling", definition: "Serving each ready process one time slice in circular order, cycling forever." },
            ],
            callout: {
              type: "exam",
              title: "Count carefully in Josephus",
              body: "The usual lost marks in Josephus traces come from off-by-one counting: if the current person is counted as 1, you advance only k - 1 links before eliminating. State the convention explicitly ('the person at the current pointer is count 1'), then trace n = 5, k = 2 -> survivor 3. A clearly stated convention plus a correct trace beats an unexplained answer every time.",
            },
            diagram: {
              kind: "cycle",
              title: "Josephus, n = 5, k = 2 - the elimination loop",
              caption: "Count 1 on the current node, advance one link, eliminate; resume from the successor.",
              steps: [
                { label: "Start at 1, count 1", note: "advance k-1 = 1 link" },
                { label: "Eliminate 2", note: "circle: 1 3 4 5" },
                { label: "Resume at 3, eliminate 4", note: "circle: 1 3 5" },
                { label: "Eliminate 1", note: "circle: 3 5" },
                { label: "Eliminate 5", note: "survivor: 3" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the representation and traversal of a circular linked list. Using it, simulate the Josephus problem for n = 5 people and k = 2 and give the elimination order and the survivor.",
                marks: 7,
                outline: [
                  "Definition: last->next = head; no NULL; do-while traversal.",
                  "Node structure and the tail-only convention.",
                  "Insertion writes: newNode->next = tail->next; tail->next = newNode.",
                  "Josephus setup: circular list of persons 1..5, count k = 2.",
                  "Trace: eliminate 2, 4, 1, 5 in order.",
                  "Survivor: person 3.",
                  "Complexity: O(n * k); note round-robin scheduling as the application.",
                ],
              },
              {
                q: "Why does traversal of a circular list use a do-while loop instead of while?",
                marks: 2,
                outline: ["Termination condition is 'back at start', meaningful only after one step.", "A while-loop would test before visiting anything."],
              },
              {
                q: "Write the three pointer updates that append a node to a tail-only circular list.",
                marks: 3,
                outline: ["newNode->next = tail->next (front).", "tail->next = newNode.", "tail = newNode."],
              },
            ],
          },
          {
            number: "2.5",
            title: "Stacks: definition, array and linked implementation",
            body: [
              "A stack is a linear ADT whose insertions and deletions happen at one end only, called the top: push adds an element, pop removes the most recently added one, peek (top) reports it without removing. The discipline is LIFO - last in, first out - like a stack of plates: you may only add to or take from the top. The specification carries two error states: overflow (push on a full stack) and underflow (pop or peek on an empty stack), and both must be checked before touching the data.",
              "Array implementation: keep the elements in A[0..cap-1] and an integer top, initialised to -1 for empty. Push: if top == cap-1 overflow, else A[++top] = x. Pop: if top == -1 underflow, else return A[top--]. Peek: return A[top] with no change. Both core operations are O(1) - the entire cost is the index arithmetic. The fixed capacity is the price: a stack declared for 100 elements cannot hold the 101st, and the exam answer must mention that overflow check, not just the assignment.",
              "Linked implementation: the head of a singly linked list is the top. Push inserts at front (two pointer writes, O(1)); pop removes at front and frees the node (O(1)); empty is head == NULL, so underflow is natural and overflow only occurs when malloc fails. The comparison is the standard implementation-choice table: array gives cache-friendly O(1) with a hard cap; linked gives unbounded growth with per-node pointer overhead and malloc cost. Worked trace of an array stack, capacity 4: push 5 (top 0, [5]), push 3 (top 1, [5 3]), push 8 (top 2, [5 3 8]), pop returns 8 (top 1), peek returns 3, push 1 (top 2, [5 3 1]).",
              "Why the stack is everywhere: function calls themselves are pushed on the run-time call stack (activation records: parameters, locals, return address); expression evaluation needs it for operators and operands (sections 2.6 and 2.7); undo history in editors, the DFS frontier in Unit V, backtracking in the Tower of Hanoi and maze solvers in Unit III - all are LIFO processes. The exam skeleton for 'implement stack as an ADT': define the ADT (push/pop/peek/isEmpty/isFull), give both implementations, state O(1) for all three operations, and show the overflow/underflow checks in code. That structure alone covers the marks.",
            ],
            bullets: [
              "Stack ADT: insertions and deletions at one end (top); discipline LIFO.",
              "Operations: push, pop, peek (top), isEmpty, isFull - all O(1).",
              "Array version: A[0..cap-1] + integer top (-1 = empty); push A[++top] = x; pop returns A[top--].",
              "Overflow: push when top == cap - 1. Underflow: pop or peek when top == -1 - both must be checked.",
              "Linked version: head of a singly list is the top; push/pop = front insert/delete, O(1).",
              "Worked array trace: push 5, 3, 8 -> pop returns 8 -> peek returns 3.",
              "Array: fast and cache-friendly but capped; linked: unbounded but pointer + malloc overhead.",
              "Applications: call stack, expression evaluation and conversion, undo, DFS, backtracking.",
            ],
            codeExample: {
              language: "c",
              caption: "Array stack with overflow and underflow guards",
              code: `#define CAP 100
int A[CAP], top = -1;                 /* -1 means empty */
int isFull(void)  { return top == CAP - 1; }
int isEmpty(void) { return top == -1; }
void push(int x) {
    if (isFull()) { /* overflow */ return; }
    A[++top] = x;
}
int pop(void) {
    if (isEmpty()) { /* underflow */ return -1; }
    return A[top--];
}
int peek(void) { return isEmpty() ? -1 : A[top]; }`,
            },
            keyTerms: [
              { term: "LIFO", definition: "Last in, first out - the stack discipline: the newest element is the next removed." },
              { term: "Overflow / underflow", definition: "Push on a full stack / pop or peek on an empty stack - the two guard conditions." },
              { term: "Top", definition: "The index (array) or head pointer (linked) marking the only accessible end of the stack." },
              { term: "Call stack", definition: "The run-time stack of activation records that makes function calls and recursion work." },
            ],
            callout: {
              type: "exam",
              title: "Guard clauses earn marks",
              body: "Stack code without the isEmpty/isFull checks typically loses 1-2 marks even when correct. Write the guards first, name the error (overflow / underflow), and mention that peek differs from pop - peek reads without removing. These are the exact phrases examiners scan for.",
            },
            diagram: {
              kind: "layers",
              title: "A stack is read from the top layer down",
              caption: "Array state after push 5, 3, 8 then pop - the top layer is the only door.",
              layers: [
                { label: "top index 1: 3", note: "current top - next pop returns 3" },
                { label: "index 0: 5", note: "bottom - removed last" },
                { label: "(empty slots below)", note: "capacity 4, top started at -1" },
                { label: "8 was popped", note: "last pushed, first removed - LIFO" },
              ],
            },
            examQuestions: [
              {
                q: "Define the stack as an ADT. Implement it using (a) an array and (b) a linked list, stating the complexity of push, pop and peek in each, and explain how overflow and underflow are detected.",
                marks: 7,
                outline: [
                  "ADT: LIFO sequence; operations push, pop, peek, isEmpty, isFull.",
                  "Array: A[0..CAP-1] plus top, empty at top = -1.",
                  "Push: check top == CAP-1 (overflow), else A[++top] = x - O(1).",
                  "Pop: check top == -1 (underflow), else return A[top--] - O(1).",
                  "Linked: head is the top; push = insert at front, pop = delete at front - both O(1).",
                  "Linked overflow only on malloc failure; underflow is head == NULL.",
                  "Compare: array capped and cache-friendly; linked unbounded with pointer overhead.",
                ],
              },
              {
                q: "Starting from an empty array stack of capacity 3, trace: push 2, push 7, pop, push 4, push 9. What happens at the last step?",
                marks: 2,
                outline: ["After pushes/pops: [2, 4], top = 1.", "push 9: top becomes 2 = CAP-1... capacity 3 so it fits.", "State final array [2, 4, 9], top = 2."],
              },
              {
                q: "Give three real applications of the stack ADT and say which property each exploits.",
                marks: 3,
                outline: [
                  "Function calls / recursion - LIFO order of returns.",
                  "Balanced parentheses / expression evaluation - most recent opener matches first.",
                  "Undo - most recent action reversed first.",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Stack application: infix to postfix conversion",
            body: [
              "Infix notation puts the operator between operands (A + B) - natural to read, ambiguous to evaluate without parentheses because precedence and associativity must be consulted at run time. Postfix (reverse Polish) notation places the operator after its operands (A B +) - unambiguous with no parentheses at all, and directly evaluable left-to-right with a stack (section 2.7). Converting infix to postfix with a stack is therefore the bridge between human notation and machine evaluation, and one of the most reliably asked 7-mark questions in this course.",
              "The algorithm scans the infix expression left to right. Operands (identifiers, digits) go straight to the output. An operator is pushed onto a stack of pending operators - but first, while the stack top has precedence greater than or equal to the incoming operator (equal only for left-associative operators like +, -, *, /), pop it to the output. A left parenthesis '(' is pushed; on a right parenthesis ')', pop to the output until '(' appears, then discard both parentheses. At the end of input, pop all remaining operators. Precedence: '^' (right-associative) above '*' and '/' above '+' and '-'.",
              "Worked trace, infix A + B * C - D. Output/steps: A out; '+' pushed (stack: +); B out; '*' arrives - top '+' has lower precedence, so push (stack: + *); C out; '-' arrives - '*' >= '-', pop '*' out, '+' >= '-', pop '+' out, push '-' (stack: -); D out; end: pop '-'. Output: A B C * + D -. Second worked trace with parentheses, (A + B) * (C - D): '(' pushed; A, '+' pushed, B out; ')' pops '+' -> output A B +; '*' pushed; '(' pushed; C out; '-' pushed; D out; ')' pops '-'; end pops '*'. Output: A B + C D - *. Both traces should be reproducible step by step - that is the exam ask.",
              "Why it works: the stack holds exactly the operators whose right operand has not yet been fully read; popping on a lower-precedence arrival emits operators whose operands are complete, respecting precedence automatically. The complexity is O(n) - each symbol is pushed and popped at most once. Common errors to check in your own trace: forgetting the >= for left-associative operators (A - B + C must become A B - C +, not A B C + -), mishandling '^' as left-associative (it is right-associative: 2 ^ 3 ^ 2 = 2 ^ (3 ^ 2)), and dropping the parentheses discard step. The exam gives one trace question and one 'why is postfix preferred' - answer the latter with: no parentheses, no precedence lookup at run time, one-pass evaluation.",
            ],
            bullets: [
              "Infix: operator between operands, needs precedence + parentheses; postfix: operator after operands, none needed.",
              "Scan left to right: operands -> output; operators -> stack after popping higher-or-equal precedence tops.",
              "Left-associative operators pop on equal precedence; '^' is right-associative and does not.",
              "'(' is pushed; ')' pops until '(' and both parentheses are discarded.",
              "End of input: pop every remaining operator to the output.",
              "Worked: A + B * C - D -> A B C * + D -.",
              "Worked: (A + B) * (C - D) -> A B + C D - *.",
              "Cost: O(n) - each symbol pushed and popped once; stack size bounded by nesting depth.",
            ],
            codeExample: {
              language: "c",
              caption: "Infix to postfix - operator stack, precedence, parentheses",
              code: `int prec(char c) {   /* '^' highest, '(' lowest */
    return c == '^' ? 3 : (c == '*' || c == '/') ? 2
         : (c == '+' || c == '-') ? 1 : 0;
}
void infix_to_postfix(const char *e) { char st[100]; int top = -1;
    for (int i = 0; e[i]; i++) {
        char c = e[i];
        if (isalnum((unsigned char)c)) putchar(c);   /* operand out */
        else if (c == '(') st[++top] = c;
        else if (c == ')') {
            while (st[top] != '(') putchar(st[top--]);
            top--;                             /* discard '(' */
        } else {
            while (top >= 0 && prec(st[top]) >= prec(c) && st[top] != '(')
                putchar(st[top--]);            /* pop >= precedence */
            st[++top] = c;
        }
    }
    while (top >= 0) putchar(st[top--]);
}`,
            },
            keyTerms: [
              { term: "Infix notation", definition: "Operators between operands; evaluation needs precedence rules and parentheses." },
              { term: "Postfix (reverse Polish)", definition: "Operators after operands; unambiguous, evaluable in one left-to-right pass." },
              { term: "Operator stack", definition: "The stack of pending operators during conversion; its top is the next to be emitted." },
              { term: "Precedence / associativity", definition: "Ranking of operators (^ > *, / > +, -) and their left-to-right or right-to-left grouping." },
            ],
            callout: {
              type: "exam",
              title: "Show the stack at every symbol",
              body: "A conversion answer graded full requires the step table: for each input symbol, the stack contents and the output so far. Do at least the two classics - A + B * C - D and (A + B) * (C - D) - in your preparation; papers overwhelmingly recycle them. And remember: '-' pops the stack on arrival because '*' and '+' both have greater-or-equal precedence.",
            },
            diagram: {
              kind: "flow",
              title: "Converting A + B * C - D, symbol by symbol",
              caption: "The stack of pending operators dictates when each operator is emitted.",
              steps: [
                { label: "A -> output", note: "output: A" },
                { label: "+ pushed, B -> output", note: "stack: +" },
                { label: "* pushed, C -> output", note: "stack: + *" },
                { label: "- arrives: pop *, pop +", note: "output: A B C * +" },
                { label: "- pushed, D out, end pops -", note: "output: A B C * + D -" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the stack-based algorithm for converting an infix expression to postfix, and convert (A + B) * (C - D) showing the stack and output at each step.",
                marks: 7,
                outline: [
                  "State precedences: ^ (3, right-assoc), * / (2), + - (1).",
                  "Rules: operands out; operator pops >= precedence tops; '(' pushed; ')' pops to '('.",
                  "Step '(' -> push. A out. '+' push. B out.",
                  "')' pops '+' -> output A B +; discard parentheses.",
                  "'*' push. '(' push. C out. '-' push. D out. ')' pops '-'.",
                  "End pops '*': final output A B + C D - *.",
                  "Complexity O(n); each symbol handled once.",
                ],
              },
              {
                q: "Convert A + B * C - D to postfix.",
                marks: 2,
                outline: ["A B C * + D -.", "'-' pops * and + on arrival."],
              },
              {
                q: "Why is postfix notation preferred for machine evaluation?",
                marks: 3,
                outline: [
                  "No parentheses needed - grouping is implicit.",
                  "No precedence consultation during evaluation.",
                  "One left-to-right pass with a stack.",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Stack applications: postfix evaluation and balanced parentheses",
            body: [
              "Postfix evaluation is the mirror of conversion: scan the expression left to right with one operand stack. Push operands. On an operator, pop the top two values - the FIRST pop is the RIGHT operand, the second pop the left - apply the operator, push the result. At the end, the stack must hold exactly one value: the answer. Worked trace of A B C * + D - with A = 5, B = 2, C = 4, D = 1: push 5, 2, 4; '*' pops 4 and 2 -> 8, push; '+' pops 8 and 2... carefully: pops give 8 then 2, so 2 + 8 = 10, push; push 1; '-' pops 1 then 10 -> 10 - 1 = 9. Final stack: [9]. The order discipline (second pop is the left operand) is the one place students go wrong - subtraction and division are not commutative.",
              "Worked trace two: postfix 6 2 3 + - 3 8 2 / + *. Push 6, 2, 3; '+' pops 3, 2 -> 5, push (stack 6 5); '-' pops 5, 6 -> 6 - 5 = 1, push; push 3, 8, 2; '/' pops 2, 8 -> 4, push (stack 1 3 4); '+' pops 4, 3 -> 7, push (stack 1 7); '*' pops 7, 1 -> 7, push. Answer 7, stack holds exactly one value. Complexity: O(n) time - one pass, each token pushed/popped once - and O(n) space for the worst-case stack of operands. Error detection comes free: an operator arriving with fewer than two operands, or leftovers on the stack at the end, both mean the expression was malformed.",
              "Balanced parentheses is the second classic. Scan the string with a stack of open brackets: on '(', '[', '{' push the character; on a closing bracket, if the stack is empty the string is unbalanced (a closer with no opener); otherwise pop and check the popped opener MATCHES the closer type ('(' with ')', '[' with ']', '{' with '}'); a mismatch is unbalanced. At the end, balanced if and only if the stack is empty - a leftover '(' means unmatched openers. Traces: \"{[()]}\" balanced (push { [ (, then (, [, } in reverse); \"([)]\" unbalanced at the ')' - top of stack is '[', mismatch; \"(((\" unbalanced at end - stack not empty.",
              "Both algorithms are the same pattern: the stack remembers pending items whose partners arrive later - LIFO is exactly the parenthesis-matching order and exactly the operand-ordering of postfix. Complexity O(n) for both, single pass, and both are standard 3-5 mark questions plus favourite interview material. The exam variant to prepare: given a prefix expression, convert to postfix (reverse the string, swap brackets, convert to 'infix' then re-reverse - or evaluate prefix directly right-to-left), and given a nested bracket string, decide balanced or not with a trace.",
            ],
            bullets: [
              "Postfix evaluation: one operand stack; operands pushed; operator pops two, applies, pushes result.",
              "FIRST pop is the RIGHT operand - matters for '-' and '/'.",
              "Worked: 5 2 4 * + 1 - = 9; 6 2 3 + - 3 8 2 / + * = 7.",
              "End condition: exactly one value left, else the expression is malformed.",
              "Balanced parentheses: push openers; on a closer pop and verify the type matches.",
              "Unbalanced cases: closer with empty stack, type mismatch, non-empty stack at the end.",
              "Traces: \"{[()]}\" balanced; \"([)]\" fails at ')'; \"(((\" fails at end.",
              "Both algorithms: O(n) time, one pass; the stack holds pending partners - pure LIFO.",
            ],
            codeExample: {
              language: "c",
              caption: "Postfix evaluation with an integer operand stack",
              code: `int eval_postfix(const char *e) {   /* single-digit operands */
    int st[100], top = -1;
    for (int i = 0; e[i]; i++) {
        char c = e[i];
        if (c >= '0' && c <= '9') st[++top] = c - '0';
        else {
            int r = st[top--];        /* first pop: RIGHT operand */
            int l = st[top--];        /* second pop: LEFT operand */
            switch (c) {
                case '+': st[++top] = l + r; break;
                case '-': st[++top] = l - r; break;
                case '*': st[++top] = l * r; break;
                case '/': st[++top] = l / r; break;
            }
        }
    }
    return st[top];                   /* the single result */
}`,
            },
            keyTerms: [
              { term: "Operand stack", definition: "The stack of intermediate values during postfix evaluation." },
              { term: "Operand order", definition: "First pop = right operand, second pop = left operand - crucial for non-commutative operators." },
              { term: "Balanced parentheses", definition: "Every closer matches the most recent unmatched opener - verified by push/pop type checking." },
            ],
            callout: {
              type: "warning",
              title: "Pop order flips subtraction",
              body: "In evaluation traces, writing 4 - 2 when the expression means 2 - 4 is the single most common arithmetic slip. Say it aloud in the exam margin: first pop is the right operand. Then evaluate '-' and '/' with that order. The same check applies to the trace table - the examiner looks at your intermediate values.",
            },
            diagram: {
              kind: "fork",
              title: "Reading the next postfix / bracket token",
              caption: "One scanning loop, three decisions - the whole evaluation and matching logic.",
              start: "Next token from input",
              branches: [
                { label: "Operand / opener", outcome: "push onto the stack", good: true },
                { label: "Operator", outcome: "pop two (right then left), apply, push result", good: true },
                { label: "Closer", outcome: "pop one opener; types must match, else unbalanced", good: true },
                { label: "End of input", outcome: "one value / empty stack = valid, otherwise malformed", good: false },
              ],
            },
            examQuestions: [
              {
                q: "Explain how a stack evaluates a postfix expression. Evaluate the postfix expression 6 2 3 + - 3 8 2 / + * showing the stack after each token, and state the algorithm's complexity.",
                marks: 7,
                outline: [
                  "Algorithm: operands push; operator pops right then left, applies, pushes.",
                  "Push 6, 2, 3.",
                  "'+' -> 2 + 3 = 5; stack: 6 5.",
                  "'-' -> 6 - 5 = 1; stack: 1. Push 3, 8, 2.",
                  "'/' -> 8 / 2 = 4; '+' -> 3 + 4 = 7; stack: 1 7.",
                  "'*' -> 1 * 7 = 7; stack: 7 - the answer.",
                  "O(n) time, one pass; malformed input detected by stack size checks.",
                ],
              },
              {
                q: "Is the bracket string {[()]} balanced? Show the stack at each step.",
                marks: 2,
                outline: ["Push {, [, (.", "Pops: ( matches ), [ matches ], { matches }.", "Stack empty at end - balanced."],
              },
              {
                q: "Why is ([)] unbalanced even though counts of each bracket type match?",
                marks: 3,
                outline: [
                  "When ')' arrives, the top opener is '['.",
                  "Types must match in LIFO order, not just in count.",
                  "Stack remembers order - that is the point of using it.",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Queues: simple, circular, deque and priority queues",
            body: [
              "A queue is a linear ADT with insertion at one end (rear) and deletion at the other (front): first in, first out. Operations: enqueue (insert at rear), dequeue (delete from front), peek/first, isEmpty, isFull. Applications are processes that must preserve arrival order - printer spooling, keyboard buffers, BFS frontiers (Unit V), call-centre hold lines, and OS job scheduling. The plain array implementation keeps front and rear indices; enqueue does A[++rear] = x, dequeue returns A[front++].",
              "The linear array queue has a flaw that motivates the whole section: the usable region drifts rightward forever. After a few enqueues and dequeues, front climbs toward the physical end while cells 0..front-1 sit empty - 'queue full' is reported although most of the array is free. Worked illustration, capacity 5: enqueue 10, 20, 30 (front 0, rear 2); dequeue twice (front 2, values 10 and 20 gone); enqueue 40, 50 (rear 4 = full); enqueue 60 - rejected, yet cells 0 and 1 are empty. The fix: treat the array as a circle with modulo arithmetic.",
              "Circular queue: enqueue: rear = (rear + 1) % cap; A[rear] = x. Dequeue: x = A[front]; front = (front + 1) % cap. The subtlety is distinguishing full from empty, since both can have front == rear. Standard solutions: (a) keep a count variable - empty when count == 0, full when count == cap; (b) sacrifice one slot - empty when front == rear, full when (rear + 1) % cap == front. With the count method, capacity-5 trace: enqueue 10, 20, 30, dequeue, dequeue (count 1), enqueue 40, 50, 60, 70 - rear wraps to index 1 and all five cells hold 30..70 - the waste is gone.",
              "Two richer variants complete the unit. A deque (double-ended queue) allows insertion and deletion at BOTH ends - push_front, push_back, pop_front, pop_back - and powers sliding-window algorithms and undo-redo pairs. A priority queue dequeues not the oldest element but the one with the highest (or lowest) priority key - used in OS schedulers, Dijkstra's algorithm (Unit V) and event simulation; the efficient implementations are heaps (Unit IV), while a naive version keeps the array sorted or scans for the best key. The exam pattern is fixed: define the queue ADT, show why the linear array drifts, derive the circular queue with modulo and the full/empty test, and name the variants with one application each.",
            ],
            bullets: [
              "Queue ADT: enqueue at rear, dequeue at front - FIFO; all operations O(1).",
              "Linear array flaw: front/rear drift right; 'full' is reported while earlier cells are empty.",
              "Circular queue: rear = (rear + 1) % cap and front = (front + 1) % cap reuse freed cells.",
              "Full vs empty ambiguity (front == rear) resolved by a count, or by sacrificing one slot.",
              "Count method: empty count == 0, full count == cap; slot method: full when (rear + 1) % cap == front.",
              "Worked capacity-5 circular trace fills all 5 cells after two dequeues - no waste.",
              "Deque: both ends usable (push/pop front and back); sliding windows, undo-redo.",
              "Priority queue: dequeue by key, not by age; heaps give O(log n); used by schedulers and Dijkstra.",
            ],
            codeExample: {
              language: "c",
              caption: "Circular queue with a count-based full/empty test",
              code: `#define CAP 5
int Q[CAP], front = 0, rear = -1, count = 0;
int isFull(void)  { return count == CAP; }
int isEmpty(void) { return count == 0; }
void enqueue(int x) {
    if (isFull()) return;
    rear = (rear + 1) % CAP;   /* wrap around */
    Q[rear] = x;  count++;
}
int dequeue(void) {
    if (isEmpty()) return -1;
    int x = Q[front];
    front = (front + 1) % CAP; /* wrap around */
    count--;
    return x;
}`,
            },
            keyTerms: [
              { term: "FIFO", definition: "First in, first out - the queue discipline: the oldest element leaves first." },
              { term: "Circular queue", definition: "Array queue using modulo index arithmetic so freed cells are reused." },
              { term: "Deque", definition: "Double-ended queue: insertion and deletion allowed at both front and rear." },
              { term: "Priority queue", definition: "Queue ordered by priority key rather than arrival time; efficiently realised by a heap." },
            ],
            callout: {
              type: "exam",
              title: "Name your full/empty convention",
              body: "Circular-queue answers must state which convention you use - count variable or sacrificed slot - before writing any condition. Mixing the two ('full when (rear+1) % cap == front AND count == CAP') is internally inconsistent and examiners mark it down. Pick one, declare it, use it everywhere.",
            },
            diagram: {
              kind: "compare",
              title: "Linear array queue vs circular queue",
              caption: "The drift problem and its modulo fix, in one picture.",
              left: {
                heading: "Linear array queue",
                items: [
                  "front and rear only move right",
                  "dequeue leaves permanent holes",
                  "'full' while cells 0..front-1 idle",
                  "capacity wasted after churn",
                  "needs periodic compaction",
                ],
              },
              right: {
                heading: "Circular queue",
                items: [
                  "indices wrap: (rear + 1) % cap",
                  "freed cells are reused immediately",
                  "full/empty needs count or one spare slot",
                  "all capacity stays usable",
                  "still O(1) per operation",
                ],
              },
            },
            examQuestions: [
              {
                q: "Define the queue ADT. Explain why a simple array implementation wastes space, derive the circular queue with modulo arithmetic, and write enqueue/dequeue with a full/empty test of your choice.",
                marks: 7,
                outline: [
                  "ADT: FIFO; enqueue at rear, dequeue at front; peek, isEmpty, isFull.",
                  "Linear array: front/rear drift right, cells before front unusable.",
                  "Worked drift example on capacity 5.",
                  "Circular fix: rear = (rear + 1) % CAP; front = (front + 1) % CAP.",
                  "Full/empty ambiguity when front == rear; choose count-based test.",
                  "Code: enqueue checks count == CAP; dequeue checks count == 0.",
                  "Both operations O(1); mention deque and priority queue as variants.",
                ],
              },
              {
                q: "In a circular queue of capacity 4 with front = 2, rear = 1 (count convention), is it full, empty, or neither?",
                marks: 2,
                outline: ["(rear + 1) % 4 = 2 = front.", "With a count variable the front==rear case is ambiguous - decide by count.", "If count == 4 it is full; if count == 0 empty; otherwise neither."],
              },
              {
                q: "Differentiate a deque from a priority queue with one application of each.",
                marks: 3,
                outline: [
                  "Deque: both ends open; order by position - sliding window maximum.",
                  "Priority queue: order by key; Dijkstra / OS scheduler.",
                  "Deque is positional, priority queue is key-ordered.",
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
      title: "Recursion and Trees",
      summary:
        "Recursive thinking and the call stack, tail recursion, Tower of Hanoi, then the tree family: terminology, binary tree properties, the three traversals and their reconstruction power, binary search trees with full insert/search/delete, and expression trees.",
      chapter: {
        number: "03",
        title: "Self-Reference: Recursive Functions and Hierarchical Trees",
        intro:
          "Unit III pairs the two ideas that define each other: recursion (a function calling itself, made possible by the run-time call stack) and trees (naturally recursive structures, processed by recursive traversals). Tower of Hanoi is the bridge; binary search trees are the payoff, giving O(log n) search when balanced.",
        inOneBreath:
          "Recursion = base case + recursive case; each call pushes an activation record on the call stack. Tail recursion (recursive call is the last action) converts to a loop. Tower of Hanoi moves 2^n - 1 disks via move(n-1, from, to... aux). A binary tree has at most 2 children; level i holds up to 2^i nodes, n nodes need ceil(log2(n+1)) minimum levels. Inorder of a BST gives sorted order; insert/search walk O(h); deletion has 0/1/2-child cases. Expression trees encode expressions with leaves = operands, internal nodes = operators; postorder gives the postfix form.",
        sections: [
          {
            number: "3.1",
            title: "Recursion: mechanism, base cases and the call stack",
            body: [
              "A recursive function is one that calls itself on a smaller instance of the same problem. Every correct recursive solution has two parts: a base case - an instance small enough to answer directly without recursing - and a recursive case that reduces the problem and combines the results. Miss the base case and the recursion is infinite; make the reduction not actually smaller and it diverges. The mental model is mathematical induction turned into code: the base case is P(0), the recursive case is the inductive step, and 'trust the recursion' is the inductive hypothesis.",
              "The mechanism that makes this possible is the run-time call stack. Each call creates an activation record holding the parameters, local variables and the return address; records stack up as calls nest and unwind in reverse as calls return. Worked trace, fact(4): main calls fact(4) which calls fact(3) ... down to fact(1) or fact(0) - the base case - returning 1; then fact(2) computes 2 * 1 = 2, fact(3) gives 6, fact(4) gives 24. Five activation records existed simultaneously at the deepest point, so space complexity is O(n) - recursion is never free; it buys clarity with stack space, and stack overflow is what happens when n outgrows the stack.",
              "Fibonacci shows the dark side of naive recursion. fib(n) = fib(n-1) + fib(n-2) with base cases fib(0) = 0, fib(1) = 1 is correct but recomputes massively: fib(5) computes fib(3) twice and fib(2) three times, and the total number of calls grows like the golden-ratio power - T(n) = O(2^n) roughly, exponential. Two standard fixes: memoisation (cache every computed value; then each fib(k) is computed once, O(n) time, O(n) space) or bottom-up iteration (build a table from fib(0), fib(1) upward). The exam loves the question 'draw the recursion tree of fib(5) and count duplicate calls' - the answer shows 15 calls with 2 and 3 recomputed.",
              "Designing a recursive algorithm follows a fixed checklist that examiners reward: (1) state the base case(s) precisely; (2) argue the recursive case works on a strictly smaller input; (3) say how results combine; (4) give the recurrence for time, e.g. T(n) = T(n-1) + O(1) -> O(n) for factorial, T(n) = 2T(n/2) + O(n) -> O(n log n) for merge sort. When asked to 'convert recursion to iteration', you are being asked to replace the implicit call stack with an explicit one - the topics of this unit and Unit II meeting deliberately.",
            ],
            bullets: [
              "Recursive solution = base case (answer directly) + recursive case (smaller input, combine results).",
              "Each call pushes an activation record (parameters, locals, return address) on the call stack.",
              "fact(4) trace: fact(4) -> fact(3) -> fact(2) -> fact(1) -> unwinds 1, 2, 6, 24; depth O(n).",
              "Stack overflow: recursion deeper than the stack - the price of unbounded depth.",
              "Naive fib(5) makes 15 calls; duplicates grow exponentially - roughly O(2^n).",
              "Fix exponential blow-up with memoisation (cache results) or bottom-up iteration - both O(n).",
              "Recurrence to memorise: T(n) = T(n-1) + O(1) is O(n); T(n) = 2T(n/2) + O(n) is O(n log n).",
              "Recursion to iteration = replace the implicit call stack with an explicit stack data structure.",
            ],
            codeExample: {
              language: "c",
              caption: "Factorial and Fibonacci - the clean case and the exponential case",
              code: `long fact(int n) {              /* T(n) = T(n-1) + O(1) -> O(n) */
    if (n <= 1) return 1;       /* base case */
    return n * fact(n - 1);     /* strictly smaller input */
}
int fib_naive(int n) {          /* O(2^n) calls - recomputes */
    if (n <= 1) return n;
    return fib_naive(n - 1) + fib_naive(n - 2);
}
int fib_memo(int n, int memo[]) {   /* each k computed once */
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    return memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
}`,
            },
            keyTerms: [
              { term: "Base case", definition: "The smallest instance answered directly; its absence means infinite recursion." },
              { term: "Activation record", definition: "The stack frame holding a call's parameters, locals and return address." },
              { term: "Recursion tree", definition: "The tree of calls that visualises work duplication, e.g. fib(n) branching into two." },
              { term: "Memoisation", definition: "Caching the result of each subproblem so it is computed once - turns exponential into linear." },
            ],
            callout: {
              type: "exam",
              title: "Recite the recurrence",
              body: "After any recursive algorithm, write its recurrence and solve it in one line. Examiners allocate a mark for the complexity that students omit. The three to memorise: T(n) = T(n-1) + O(1) -> O(n); T(n) = T(n-1) + O(n) -> O(n^2); T(n) = 2T(n/2) + O(n) -> O(n log n).",
            },
            diagram: {
              kind: "fork",
              title: "Every recursive call makes one decision",
              caption: "The base case stops the descent; the recursive case shrinks the problem.",
              start: "Call with input n",
              branches: [
                { label: "n is a base case", outcome: "return directly - no further calls", good: true },
                { label: "n is not a base case", outcome: "call self on a strictly smaller input", good: true },
                { label: "input never gets smaller", outcome: "infinite recursion -> stack overflow", good: false },
              ],
            },
            examQuestions: [
              {
                q: "What is recursion? Explain how the call stack supports it, trace fact(4) showing the activation records, and explain why naive Fibonacci is exponential while memoised Fibonacci is linear.",
                marks: 7,
                outline: [
                  "Definition: function calling itself on a smaller instance.",
                  "Two required parts: base case and strictly shrinking recursive case.",
                  "Call stack: activation records pushed on call, popped on return.",
                  "Trace fact(4): pushes 4, 3, 2, 1; base returns 1; unwinds 2, 6, 24.",
                  "Space = maximum depth = O(n); overflow risk for large n.",
                  "fib recursion tree: fib(5) = 15 calls, fib(3) twice, fib(2) three times - exponential.",
                  "Memoisation caches results: each fib(k) once - O(n) time, O(n) space.",
                ],
              },
              {
                q: "Solve the recurrence T(n) = 2T(n/2) + n and name an algorithm with this recurrence.",
                marks: 3,
                outline: ["Expand two levels: n + 2(n/2) + 4(n/4) + ... = n log n + n.", "Result O(n log n).", "Merge sort (and quick sort's best case)."],
              },
              {
                q: "What is a base case and what happens if a recursive function lacks one?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Tail recursion and recursion versus iteration",
            body: [
              "A call is tail recursive when the recursive call is the LAST action of the function - nothing remains to be done after it returns. Contrast fact(n) = n * fact(n-1), where the multiplication happens after the call returns (not tail recursive), with a helper form fact_acc(n, acc) = fact_acc(n-1, n*acc), where the result is carried in the accumulator parameter and returned untouched (tail recursive). The distinction matters because a tail call needs no saved context: the caller has nothing left to do, so the compiler can reuse the current activation record instead of pushing a new one.",
              "Tail-call optimisation (TCO) turns a tail-recursive function into a loop behind the scenes: constant stack space, no overflow, same clarity. C and C++ compilers apply it when optimisation is on; Python deliberately does not (Guido's decision - traces are more valuable than TCO); functional languages guarantee it. Consequence for the exam: a tail-recursive factorial runs in O(1) space with TCO but O(n) without it; and the general conversion pattern is mechanical - replace parameters with accumulator arguments, or replace the call with a while-loop updating the same variables.",
              "The general recursion-to-iteration conversion replaces the implicit call stack with an explicit one. Any recursion can be converted this way (push arguments, loop, pop), but only tail recursion converts with NO stack at all - just variable updates in a loop. Worked conversion, tail factorial: acc = 1; while (n > 1) { acc = acc * n; n = n-1; } return acc; - identical result, zero stack growth. Non-tail recursion like tree traversals can still be iterative but needs an explicit stack (or, for BST inorder, the clever Morris threading - beyond the syllabus). Knowing WHICH recursions convert cheaply is the marks-bearing insight.",
              "Recursion vs iteration is a trade, not a contest. Recursion wins when the data is recursive (trees, nested lists, divide-and-conquer) - the code mirrors the structure and is dramatically shorter: recursive quicksort partition is ten lines; its iterative version with an explicit stack is thirty. Iteration wins on flat data with simple accumulation - summing an array needs no stack. Space: recursion O(depth), iteration O(1) for flat loops. The exam question 'compare recursion and iteration' wants exactly this table: clarity, stack space, overflow risk, suitability for recursive data, and the note that every iteration can be written as tail recursion and every recursion as iteration with an explicit stack.",
            ],
            bullets: [
              "Tail recursion: the recursive call is the last action; no work after it returns.",
              "fact(n) = n * fact(n-1) is NOT tail recursive; fact_acc(n-1, n*acc) is.",
              "TCO reuses the activation record -> constant stack space; C/C++ do it with optimisation, Python does not.",
              "Tail recursion converts to a loop with no stack: while (n > 1) { acc *= n; n--; }.",
              "Non-tail recursion still converts iteratively but needs an explicit stack.",
              "Recursion shines on recursive data (trees, divide-and-conquer); iteration on flat accumulation.",
              "Space: recursion O(depth) vs iteration O(1) for flat loops.",
              "Every iteration is expressible as tail recursion; every recursion as iteration with an explicit stack.",
            ],
            table: {
              caption: "Recursion vs iteration - the comparison table examiners expect.",
              headers: ["Aspect", "Recursion", "Iteration"],
              rows: [
                ["Clarity on recursive data", "mirrors the structure - short code", "often bulky with explicit stacks"],
                ["Stack space", "O(depth) activation records", "O(1) for flat loops"],
                ["Overflow risk", "yes, for deep recursion", "none"],
                ["Speed overhead", "call/return per level", "loop overhead only"],
                ["Converts to the other", "always (explicit stack)", "always (accumulator)"],
                ["Best use", "trees, divide-and-conquer, backtracking", "arrays, counting, accumulation"],
              ],
            },
            keyTerms: [
              { term: "Tail call", definition: "A recursive call that is the final action of the function, needing no saved context." },
              { term: "Tail-call optimisation", definition: "Compiler transformation reusing the stack frame for tail calls, making them loops in disguise." },
              { term: "Accumulator", definition: "A parameter carrying the partial result so the recursive call can be made last." },
            ],
            callout: {
              type: "tip",
              title: "Spot the tail call in one glance",
              body: "Ask: 'is there an operation wrapping the recursive call?' In n * fact(n-1) the multiplication wraps it - not tail. In fact_acc(n-1, n*acc) the call stands alone - tail. For the conversion question, show the while-loop version with the accumulator and state that stack space drops from O(n) to O(1).",
            },
            diagram: {
              kind: "compare",
              title: "Ordinary recursion vs tail recursion",
              caption: "The presence of work AFTER the call decides whether the stack can be freed.",
              left: {
                heading: "Non-tail: n * fact(n-1)",
                items: [
                  "multiplication waits for the return",
                  "every level keeps its activation record",
                  "stack depth O(n)",
                  "overflow for large n",
                  "needs TCO-unfriendly code shape",
                ],
              },
              right: {
                heading: "Tail: fact_acc(n-1, n*acc)",
                items: [
                  "call is the last action",
                  "frame can be reused (TCO)",
                  "stack depth O(1) with TCO",
                  "mechanical loop conversion",
                  "acc carries the partial answer",
                ],
              },
            },
            examQuestions: [
              {
                q: "Define tail recursion. Rewrite factorial as a tail-recursive function, explain how a compiler can optimise it, and convert it to an iterative loop. Compare recursion and iteration in a table.",
                marks: 7,
                outline: [
                  "Definition: recursive call is the last operation - nothing after it.",
                  "fact(n) = n * fact(n-1) is non-tail (work after the call).",
                  "Tail version: fact_acc(n, acc): if n <= 1 return acc; else fact_acc(n-1, n*acc); call fact_acc(n, 1).",
                  "TCO: caller has no pending work, so the frame is reused - O(1) stack.",
                  "Loop conversion: while (n > 1) { acc = acc * n; n--; } return acc.",
                  "Table: clarity vs stack space vs overflow vs best data shape.",
                  "Note: any recursion -> iteration via an explicit stack.",
                ],
              },
              {
                q: "Is the following tail recursive? Justify: int sum(int n) { if (n == 0) return 0; return n + sum(n-1); }",
                marks: 2,
                outline: ["No - the addition happens after the call returns.", "Tail form: sum_acc(n, acc) with return sum_acc(n-1, n + acc)."],
              },
              {
                q: "Why does Python not perform tail-call optimisation, and what is the practical consequence?",
                marks: 3,
                outline: [
                  "Design choice: preserve stack traces for debugging.",
                  "Consequence: deep recursion in Python overflows regardless of tail shape.",
                  "Use iteration or raise the recursion limit carefully.",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Tower of Hanoi",
            body: [
              "The Tower of Hanoi: n disks of distinct sizes on a source peg, must all move to a target peg via an auxiliary peg, moving one disk at a time and never placing a larger disk on a smaller one. The puzzle is the classic demonstration that recursion can solve a problem whose iterative description is awkward, and that a tiny recursive specification can hide exponential work.",
              "The recursive insight: to move n disks from source to target, first move the top n-1 disks from source to AUXILIARY (recursive call), then move the single largest disk from source to target (one direct move), then move the n-1 disks from auxiliary to target (second recursive call). The base case n = 1 (or n = 0) is a single move. Notice the roles of the pegs rotate between calls - the auxiliary of the outer call becomes the target of the inner call - which is why the function takes (from, to, via) parameters and passes them permuted.",
              "Worked trace, n = 3, pegs A (source), B (auxiliary), C (target): move disk 1 A->C; disk 2 A->B; disk 1 C->B; disk 3 A->C; disk 1 B->A; disk 2 B->C; disk 1 A->C. Seven moves, and the pattern is the recursion tree: hanoi(3) spawns hanoi(2) twice around one direct move. Count of moves: M(n) = 2 * M(n-1) + 1 with M(1) = 1, giving M(n) = 2^n - 1 - so n = 64 needs 2^64 - 1 moves, the legend's 'end of the world' number. Time complexity O(2^n) is intrinsic (the answer really is that long); space is O(n) for the call stack depth.",
              "Exam presentation matters. The 7-mark version asks: state the problem, give the recursive algorithm in pseudocode, trace hanoi(3) listing every move, and derive the move count recurrence to 2^n - 1. Two bonus points hide in the details: the number of moves of disk k is 2^(n-k) (disk 1 moves every other step - 2^(n-1) times), and an iterative solution exists using the binary counter pattern or an explicit stack, which links back to Unit II. Neither is required, but mentioning the recurrence M(n) = 2M(n-1) + 1 -> 2^n - 1 explicitly is the difference between a good and a complete answer.",
            ],
            bullets: [
              "Rules: move one disk at a time; never place a larger disk on a smaller; all disks must reach the target.",
              "Strategy: move n-1 disks source -> auxiliary; move disk n source -> target; move n-1 disks auxiliary -> target.",
              "Base case: n = 1 is one direct move.",
              "Trace n = 3 (A source, B aux, C target): 1 A->C, 2 A->B, 1 C->B, 3 A->C, 1 B->A, 2 B->C, 1 A->C - 7 moves.",
              "Recurrence M(n) = 2 * M(n-1) + 1, M(1) = 1 -> M(n) = 2^n - 1.",
              "Time O(2^n) - intrinsic, not avoidable; space O(n) for the call stack.",
              "Disk k moves 2^(n-k) times; the smallest disk moves every other step.",
              "Iterative alternatives: explicit stack simulation or binary-counter pattern.",
            ],
            codeExample: {
              language: "c",
              caption: "Tower of Hanoi - four lines of recursion",
              code: `void hanoi(int n, char from, char to, char via) {
    if (n == 0) return;                 /* nothing to move */
    hanoi(n - 1, from, via, to);        /* park n-1 disks aside */
    printf("move disk %d: %c -> %c\\n", n, from, to);
    hanoi(n - 1, via, to, from);        /* bring them onto disk n */
}
/* hanoi(3, 'A', 'C', 'B') prints the 7-move trace;
   total moves = 2^n - 1 (recurrence M(n) = 2M(n-1) + 1) */`,
            },
            keyTerms: [
              { term: "Auxiliary peg", definition: "The spare peg used to park disks during transfer; its role rotates between recursive calls." },
              { term: "Move recurrence", definition: "M(n) = 2M(n-1) + 1 with M(1) = 1, solving to 2^n - 1 total moves." },
              { term: "Intrinsic exponential cost", definition: "A lower bound: the puzzle genuinely requires 2^n - 1 moves, so no algorithm does better." },
            ],
            callout: {
              type: "exam",
              title: "Trace hanoi(3), never hanoi(4)",
              body: "The standard ask is the n = 3 trace - seven moves, table format: move number, disk, from, to. Practise writing it in under two minutes with the peg roles rotating correctly. Attempting n = 4 (15 moves) in the exam wastes time and invites errors; n = 3 plus the recurrence earns every mark.",
            },
            diagram: {
              kind: "flow",
              title: "The 7 moves of Tower of Hanoi, n = 3",
              caption: "A -> source, B -> auxiliary, C -> target; note how disk 3 moves at the centre.",
              steps: [
                { label: "disk 1: A -> C", note: "clear the way" },
                { label: "disk 2: A -> B", note: "park on aux" },
                { label: "disk 1: C -> B", note: "cover disk 2" },
                { label: "disk 3: A -> C", note: "the one direct move" },
                { label: "disk 1: B -> A, disk 2: B -> C", note: "rebuild" },
                { label: "disk 1: A -> C", note: "7 moves = 2^3 - 1" },
              ],
            },
            examQuestions: [
              {
                q: "State the Tower of Hanoi problem and its rules. Give the recursive algorithm, trace it for n = 3, and derive the total number of moves as 2^n - 1.",
                marks: 7,
                outline: [
                  "Problem: move n disks source -> target via auxiliary; one disk per move; larger never on smaller.",
                  "Algorithm: hanoi(n-1, from, via, to); print move of disk n; hanoi(n-1, via, to, from).",
                  "Base case n = 1: single move.",
                  "Trace n = 3: 1 A->C, 2 A->B, 1 C->B, 3 A->C, 1 B->A, 2 B->C, 1 A->C.",
                  "Recurrence M(n) = 2M(n-1) + 1, M(1) = 1.",
                  "Solve by substitution: M(n) = 2^n - 1.",
                  "Complexities: time O(2^n) intrinsic; space O(n) stack depth.",
                ],
              },
              {
                q: "How many moves does Tower of Hanoi need for n = 10 disks, and how many times does the smallest disk move?",
                marks: 2,
                outline: ["2^10 - 1 = 1023 moves.", "Disk 1 moves 2^9 = 512 times."],
              },
              {
                q: "Why is the exponential time of Tower of Hanoi unavoidable?",
                marks: 3,
                outline: [
                  "M(n) = 2M(n-1) + 1 counts the true minimum.",
                  "The n-1 stack must be moved twice per solution.",
                  "So any algorithm performs at least 2^n - 1 moves.",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Trees: terminology and representation",
            body: [
              "A tree is a finite set of nodes with a distinguished root, such that every other node is connected by exactly one path from the root - hierarchically, no cycles, one parent per node. Terminology to master precisely: root (top node, no parent); leaf/external node (no children); internal node (at least one child); parent and child; siblings (children of the same parent); ancestors and descendants; edge (parent-child link); degree of a node (number of children); degree of a tree (maximum node degree); level (root at level 0 or 1 - declare your convention); height (longest root-to-leaf path, in edges); depth of a node (path length from root); subtree (a node plus all its descendants); forest (a collection of disjoint trees).",
              "Worked vocabulary on a concrete tree: root A with children B, C, D; B's children E, F; C's child G. Leaves are E, F, G, D. Internal nodes: A, B, C. Node B has degree 2; node C has degree 1. Height (edges) is 2. Level of E is 2 (root at level 0). E's ancestors are B and A; A's descendants are all seven nodes... six others. Every one of these terms is fair game as a 2-mark definition, and mixing up height (edges) with level (nodes) is the classic slip - state your convention in the first line of the answer.",
              "Representation. In memory, a general tree is usually stored as (a) a linked structure with a variable number of child pointers (array of pointers per node - wasteful when degrees vary), or (b) the standard first-child / next-sibling (left-child right-sibling) encoding: each node holds two pointers, one to its first child and one to its next sibling - turning ANY tree into a binary-shaped structure, which is why it is the representation of choice. (c) Parent array representation: store for each node the index of its parent (root = -1) - O(1) parent queries, terrible child queries; used in union-find. The exam asks you to draw the first-child/next-sibling version of a given general tree.",
              "Why trees matter in this course: they are the natural shape of hierarchies (file systems, DOM, org charts) and the backbone of every efficient search structure to come - BSTs (3.7), heaps (Unit IV) and the Huffman trees of compression all live on the vocabulary fixed here. The full-mark terminology answer is systematic: define each term in one line, then label all of them on a drawn example tree - the picture proves you know which node is which, and the definitions prove you know why.",
            ],
            bullets: [
              "Tree: hierarchical structure with one root; every non-root node has exactly one parent; no cycles.",
              "Leaf = no children; internal node = at least one child; siblings share a parent.",
              "Degree of node = number of children; degree of tree = maximum over nodes.",
              "Height = longest root-to-leaf path in EDGES; depth of node = path from root in edges.",
              "Level: root at level 0 (declare the convention); level i has up to 2^i nodes in a binary tree.",
              "Worked example: A(B(E,F), C(G), D) - leaves E, F, G, D; height 2.",
              "Representations: child-pointer arrays, first-child/next-sibling, parent array (union-find style).",
              "First-child/next-sibling encodes any general tree as a binary-shaped structure.",
            ],
            table: {
              caption: "Terminology applied to the tree A(B(E, F), C(G), D).",
              headers: ["Term", "Value in the example"],
              rows: [
                ["Root", "A"],
                ["Leaves", "E, F, G, D"],
                ["Internal nodes", "A, B, C"],
                ["Degree of B / of the tree", "2 / 2"],
                ["Height (edges)", "2"],
                ["Ancestors of E", "B, A"],
                ["Descendants of C", "G"],
                ["Forest after deleting A's subtree root role", "three trees rooted at B, C, D"],
              ],
            },
            keyTerms: [
              { term: "Root", definition: "The unique node with no parent; the entry point of every tree traversal." },
              { term: "Height of a tree", definition: "The number of edges on the longest root-to-leaf path." },
              { term: "First-child / next-sibling", definition: "Two-pointer representation of a general tree: node points to its first child and its next sibling." },
              { term: "Forest", definition: "A disjoint collection of trees; deleting the root of a tree leaves a forest." },
            ],
            callout: {
              type: "exam",
              title: "Declare your level convention",
              body: "Some books count the root as level 1, others level 0. Both are acceptable - silently mixing them is not. Write 'root at level 0' (or 1) in the first line of any tree-definition answer, and keep height in edges while level counts nodes. This one sentence prevents the most common terminology deduction.",
            },
            diagram: {
              kind: "pyramid",
              title: "Levels of the tree A(B(E,F), C(G), D)",
              caption: "Index 0 is the top level - root at level 0, its children at level 1, grandchildren at level 2.",
              tiers: [
                { label: "Level 0: A (root)", note: "no parent" },
                { label: "Level 1: B, C, D", note: "siblings; children of A" },
                { label: "Level 2: E, F, G", note: "leaves; height of tree = 2 edges" },
              ],
            },
            examQuestions: [
              {
                q: "Define the following tree terms with reference to a labelled example: root, leaf, internal node, sibling, degree, level, height, depth, subtree and forest. Represent a general tree using the first-child / next-sibling scheme.",
                marks: 7,
                outline: [
                  "Draw example A(B(E,F), C(G), D).",
                  "Root A - no parent; leaves E, F, G, D; internal A, B, C.",
                  "Siblings: B, C, D; then E, F.",
                  "Degree of B = 2; tree degree = 2.",
                  "Level (root at 0), height = 2 edges, depth of G = 2.",
                  "Subtree rooted at B; deleting A gives a forest of 3 trees.",
                  "First-child/next-sibling: each node stores firstChild and nextSibling pointers; draw the encoding.",
                ],
              },
              {
                q: "A tree has 10 nodes each with degree at most 2 and height 3 (edges). Can level 3 be full? Give the node count of a full level 3.",
                marks: 2,
                outline: ["Binary level i holds up to 2^i nodes.", "Level 3 full = 8 nodes.", "10 total nodes makes that possible."],
              },
              {
                q: "Why does the first-child/next-sibling representation suit trees of varying degree?",
                marks: 3,
                outline: [
                  "Variable-degree child-pointer arrays waste slots.",
                  "Two fixed pointers per node suffice for any degree.",
                  "Siblings form a linked chain along nextSibling.",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Binary trees: properties and types",
            body: [
              "A binary tree is a tree in which every node has at most two children, distinguished as the left child and the right child - order matters, so (left = A, right = B) is a different tree from (left = B, right = A). The recursive definition is elegant: a binary tree is either empty or a root with a left binary subtree and a right binary subtree - and this definition IS the traversal code of section 3.6.",
              "Counting properties, stated with the root at level 0: level i holds at most 2^i nodes; a tree of height h (edges) holds at most 2^(h+1) - 1 nodes; a tree with n nodes has height at least ceil(log2(n + 1)) - 1, i.e. a perfectly balanced shape, and at most n - 1 (the degenerate skew). A useful identity: in any non-empty binary tree, the number of leaf nodes n0 equals the number of degree-2 nodes n2 plus one: n0 = n2 + 1. Worked check on A(B(E,F), C(G), D) drawn as binary: leaves E, F, G, D (n0 = 4), degree-2 nodes A, B (n2 = 2), and 4 = 2 + 1. This identity is a recurring 2-mark derivation via edge counting.",
              "The family of named shapes: a FULL (strict) binary tree has every node with 0 or 2 children; a COMPLETE binary tree has all levels full except possibly the last, which fills left to right (the shape heaps use - array storage with no gaps); a PERFECT binary tree has all levels completely full (n = 2^(h+1) - 1); a BALANCED tree keeps every node's two subtree heights within 1 (AVL's condition); a SKEWED tree is a chain of single children - worst case for everything, effectively a linked list; a DEGENERATE tree is the same idea. Knowing the exact definitions matters: 'complete' and 'full' are swapped in casual speech but have precise exam meanings.",
              "Representation in memory: the linked node struct Node { data; *left; *right; } is standard, with a root pointer; the NULL children mark leaves. The alternative - array representation for complete trees - stores the root at index 0 (or 1) and computes children as 2i+1 and 2i+2 (or 2i and 2i+1 in 1-based), parent as floor((i-1)/2) - no pointers at all, which is exactly how heaps are implemented in Unit IV and why complete shape matters there. Exam favourites: prove n0 = n2 + 1, count nodes of a perfect tree of height 4 (31), and classify a given drawn tree as full / complete / skewed.",
            ],
            bullets: [
              "Binary tree: every node has at most 2 children, named left and right - order is significant.",
              "Recursive definition: empty, or root + left subtree + right subtree.",
              "Level i (root at 0) holds up to 2^i nodes; height h gives at most 2^(h+1) - 1 total.",
              "n nodes need at least ceil(log2(n+1)) - 1 height (balanced) and at most n - 1 (skewed chain).",
              "Identity n0 = n2 + 1: leaves = degree-2 nodes + 1; proof by edge counting.",
              "Full (strict): every node has 0 or 2 children. Complete: last level fills left to right.",
              "Perfect: all levels full; balanced: subtree heights differ by at most 1; skewed: a chain.",
              "Array representation (complete trees): children of i at 2i+1, 2i+2 (0-based) - the heap trick.",
            ],
            table: {
              caption: "Node bounds for a binary tree of height h (root at level 0).",
              headers: ["Quantity", "Bound", "Reason"],
              rows: [
                ["Nodes on level i", "at most 2^i", "each node doubles the count"],
                ["Total nodes, height h", "at most 2^(h+1) - 1", "sum of 2^i for i = 0..h"],
                ["Minimum height for n nodes", "ceil(log2(n+1)) - 1", "must fit the packing bound"],
                ["Maximum height for n nodes", "n - 1", "skewed chain"],
                ["Leaves vs degree-2 nodes", "n0 = n2 + 1", "edge-counting identity"],
              ],
            },
            keyTerms: [
              { term: "Full (strict) binary tree", definition: "Every node has exactly 0 or 2 children." },
              { term: "Complete binary tree", definition: "All levels full except possibly the last, filled left to right - the heap shape." },
              { term: "Perfect binary tree", definition: "Every level completely full: n = 2^(h+1) - 1." },
              { term: "Skewed tree", definition: "Every node has a single child - height n - 1, the worst case of all tree operations." },
            ],
            callout: {
              type: "warning",
              title: "Full vs complete - do not swap them",
              body: "Casual usage blurs these, exams do not. FULL = every node has 0 or 2 children (shape of children, nothing about levels). COMPLETE = levels full except the last, which packs left to right (about positions, heap-relevant). A full tree can be incomplete (two siblings, one leaf hanging deep alone); a complete tree need not be full. Quote both definitions side by side to bank the marks.",
            },
            diagram: {
              kind: "matrix",
              title: "The binary tree family on two axes",
              caption: "Horizontal: how loosely packed the levels are. Vertical: how many children nodes may take.",
              axes: { x: "packed levels -> sparse levels", y: "0-or-2 children -> any children count" },
              quadrants: [
                { label: "Perfect tree", note: "0-or-2 children AND every level full: n = 2^(h+1) - 1" },
                { label: "General binary tree", note: "any mix of 0, 1, 2 children; gaps allowed" },
                { label: "Complete tree", note: "levels packed left-to-right; children still <= 2" },
                { label: "Skewed tree", note: "single-child chain: height n - 1, all operations degrade" },
              ],
            },
            examQuestions: [
              {
                q: "Define a binary tree and distinguish full, complete, perfect, balanced and skewed binary trees. Prove that in any binary tree the number of leaves equals the number of degree-2 nodes plus one.",
                marks: 7,
                outline: [
                  "Definition with ordered left/right children; recursive form.",
                  "Full: 0 or 2 children. Complete: last level left-packed. Perfect: all levels full.",
                  "Balanced: subtree heights differ <= 1. Skewed: single-child chain.",
                  "Proof setup: n = n0 + n1 + n2 (nodes by degree).",
                  "Edge count: n - 1 edges total; each node contributes 1 edge from its parent: n0*0 + n1*1 + n2*2 = n - 1.",
                  "Substitute n = n0 + n1 + n2 into the edge equation.",
                  "Cancel to get n0 = n2 + 1. Verify on an example.",
                ],
              },
              {
                q: "How many nodes can a binary tree of height 4 hold at most, and what is the minimum height of a binary tree with 20 nodes?",
                marks: 2,
                outline: ["Max: 2^5 - 1 = 31.", "Min height: ceil(log2(21)) - 1 = 5 - 1 = 4."],
              },
              {
                q: "In the 0-based array representation of a complete binary tree, where are the children and parent of node i?",
                marks: 3,
                outline: ["Left child 2i + 1, right child 2i + 2.", "Parent floor((i - 1) / 2).", "Root at index 0; this is how heaps store nodes."],
              },
            ],
          },
          {
            number: "3.6",
            title: "Binary tree traversals: preorder, inorder, postorder, level order",
            body: [
              "A traversal visits every node exactly once in a defined order - the fundamental way to turn a tree into a sequence. The three depth-first orders differ only in WHEN the root is visited relative to its subtrees: preorder = root, left subtree, right subtree (NLR); inorder = left subtree, root, right subtree (LNR); postorder = left subtree, right subtree, root (LRN). All three are two-line recursive functions differing in the position of one print statement, all O(n) time (each node once) and O(h) space (stack depth). Level-order (breadth-first) visits level by level using a QUEUE instead of recursion - the one traversal that needs explicit auxiliary storage of up to a full level.",
              "Worked example tree: root A, left child B, right child C, B's children D (left) and E (right), C's right child F. Preorder: A B D E C F (root first at every level). Inorder: D B E A C F (leftmost deep node first). Postorder: D E B F C A (children before parents). Level order: A B C D E F. Trace each by hand once - the exam WILL include 'give the preorder, inorder and postorder of the following tree' and the full-mark answer also names the convention (root at level 0, NLR order).",
              "The power move: inorder + any one of the other two reconstructs the UNIQUE original tree. Algorithm: the first element of preorder (or last of postorder) is the root; find it in the inorder sequence - everything left of it is the left subtree, everything right the right subtree; recurse on the two corresponding sub-arrays. Worked reconstruction from preorder A B D E C F and inorder D B E A C F: root A; inorder splits into left part D B E and right part C F; preorder next elements B, D, E belong to the left subtree, C, F to the right; recurse to recover exactly the example tree. Note carefully: preorder + postorder alone does NOT uniquely determine a tree with single-child nodes - the missing inorder loses the left/right distinction.",
              "Applications make the orders memorable. Preorder copies/serialises a tree and expresses prefix notation. Inorder of a BINARY SEARCH TREE yields the keys in sorted order - the single most quoted tree fact in exams. Postorder evaluates expression trees and computes sizes bottom-up (children before parent) and is the order of deleting a tree safely (free children before the parent). Level order prints hierarchies and is BFS on trees (Unit V generalises it to graphs). Each order plus its application in one line is the shape of a complete 7-mark traversal answer, together with the queue-vs-recursion note for level order.",
            ],
            bullets: [
              "Preorder NLR: root first - used for copying trees and prefix expressions.",
              "Inorder LNR: leftmost first - of a BST gives sorted keys.",
              "Postorder LRN: root last - evaluates expression trees, frees a tree bottom-up.",
              "All three DFS orders: recursive, O(n) time, O(h) stack space.",
              "Level order: queue-based BFS, O(n) time, O(w) space for the widest level.",
              "Worked tree A(B(D,E), C(-,F)): preorder A B D E C F, inorder D B E A C F, postorder D E B F C A.",
              "Reconstruction: inorder + preorder (or + postorder) is unique; inorder + postorder is not.",
              "Reconstruction algorithm: root from preorder[0], split inorder at the root, recurse.",
            ],
            codeExample: {
              language: "c",
              caption: "The three depth-first traversals - one line differs",
              code: `void preorder(struct Node *r) {
    if (r == NULL) return;
    printf("%d ", r->data);   /* N */
    preorder(r->left);        /* L */
    preorder(r->right);       /* R */
}
void inorder(struct Node *r) {
    if (r == NULL) return;
    inorder(r->left);         /* L */
    printf("%d ", r->data);   /* N */
    inorder(r->right);        /* R */
}
void postorder(struct Node *r) {
    if (r == NULL) return;
    postorder(r->left);       /* L */
    postorder(r->right);      /* R */
    printf("%d ", r->data);   /* N */
}`,
            },
            keyTerms: [
              { term: "Traversal", definition: "Visiting every node of a tree exactly once in a specified order." },
              { term: "DFS orders (NLR, LNR, LRN)", definition: "Depth-first orders named by when the node (N) is visited relative to left (L) and right (R) subtrees." },
              { term: "Level-order traversal", definition: "Breadth-first visitation level by level using a queue." },
              { term: "Tree reconstruction", definition: "Rebuilding the unique tree from inorder plus preorder or postorder." },
            ],
            callout: {
              type: "exam",
              title: "Label your output with the convention",
              body: "Write the traversal answer as: 'preorder (NLR): A B D E C F' - naming the order prevents ambiguity disputes and reminds you to check yourself. Then verify with the invariant: preorder starts with the root, postorder ends with the root, and inorder places the root between the left and right subtree outputs.",
            },
            diagram: {
              kind: "pipeline",
              title: "Inorder traversal as a three-stage pipeline",
              caption: "LNR - the same shape with the root visit moved gives preorder and postorder.",
              stages: [
                { label: "Drain the left subtree", note: "recurse until a NULL child" },
                { label: "Visit the node", note: "print / process root data" },
                { label: "Drain the right subtree", note: "then unwind and continue" },
                { label: "Output: D B E A C F", note: "BST version would be sorted" },
              ],
            },
            examQuestions: [
              {
                q: "Define preorder, inorder and postorder traversals. For the tree with root A, left subtree B(D, E) and right subtree C(-, F), give all three orders plus level order, and explain how to reconstruct the tree from its preorder and inorder sequences.",
                marks: 7,
                outline: [
                  "Define NLR, LNR, LRN; note all are O(n).",
                  "Preorder: A B D E C F.",
                  "Inorder: D B E A C F.",
                  "Postorder: D E B F C A; level order: A B C D E F.",
                  "Reconstruction: preorder[0] = A is the root.",
                  "Locate A in inorder: left part D B E, right part C F.",
                  "Recurse: B is next root with left D, right E; C with right F - unique tree.",
                ],
              },
              {
                q: "Which single traversal output is sorted when applied to a binary search tree?",
                marks: 2,
                outline: ["Inorder (LNR).", "Because left < root < right recursively."],
              },
              {
                q: "Why does preorder plus postorder fail to reconstruct a tree that has a node with only one child?",
                marks: 3,
                outline: [
                  "Both orders list the single child on the same side pattern.",
                  "Without inorder, left-child vs right-child is undecidable.",
                  "Inorder supplies the left/right split that disambiguates.",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Binary search trees: search, insert and delete",
            body: [
              "A binary search tree (BST) is a binary tree with the ordering invariant: for every node, all keys in its left subtree are less than the node's key and all keys in its right subtree are greater (duplicates excluded or parked consistently). The invariant is global, not just local, and its consequence is the most quoted fact in this course: an INORDER traversal of a BST prints the keys in ascending order. Search, insert and delete all follow the invariant down a single path, costing O(h) where h is the height - O(log n) for a balanced tree, O(n) for a skewed one.",
              "Search: compare the key with the root - equal, found; smaller, go left; larger, go right; NULL means absent. Each comparison discards one subtree, halving the search space in a balanced tree: binary search on a dynamic structure. Insert: search for the key; when the walk falls off the tree at a NULL child, attach the new node there. Worked insertions building from 50: insert 30, 70, 20, 40, 60, 80 gives 50 at the root, 30/70 children, 20/40 and 60/80 grandchildren - and the SAME keys inserted in a different order (say sorted order 20, 30, 40, 50...) produce a skewed chain with O(n) operations. Insertion order, not key order, decides shape - the BST's central weakness.",
              "Deletion has three cases, and this is where exam marks concentrate. Case 0 - leaf: remove it, parent's pointer becomes NULL. Case 1 - one child: bypass the node, parent's pointer adopts the child. Case 2 - two children: find the node's INORDER SUCCESSOR (smallest key in the right subtree - go right once, then leftmost) or predecessor (largest in the left subtree); copy its key into the doomed node; delete the successor, which by construction has at most one (right) child, reducing to case 0 or 1. Worked: delete 50 from the tree above - successor is 60 (right subtree's leftmost); copy 60 into the root; delete the leaf 60 from the right subtree. Tree stays a valid BST.",
              "Complexities: search/insert/delete are O(h); h is O(log n) when insertion order is friendly and O(n) when adversarial (sorted input). Average case over random insertion orders is about O(log n) with a small constant. The fix for the worst case is self-balancing - AVL trees rotate to keep the balance factor of every node in {-1, 0, 1}, and red-black trees relax it - both beyond this syllabus but worth one sentence in any 'limitations' answer. The exam package: define the invariant, write search and insert code, enumerate the three deletion cases with a drawn example, and state that inorder gives sorted output - those four items are the 7 marks.",
            ],
            bullets: [
              "BST invariant: left subtree keys < node key < right subtree keys, recursively everywhere.",
              "Inorder traversal of a BST yields ascending keys - the defining property.",
              "Search: compare and descend one path; equal -> found, NULL -> absent.",
              "Insert: search for the key; attach at the NULL where the walk falls off.",
              "Deletion case 0 (leaf): unlink. Case 1 (one child): parent adopts the child.",
              "Deletion case 2 (two children): copy the inorder successor (leftmost of right subtree), then delete it (0 or 1 child).",
              "Worked build from 50: 30, 70, 20, 40, 60, 80 -> balanced shape; sorted insertion order -> skewed chain.",
              "All operations O(h): O(log n) balanced, O(n) skewed; AVL/red-black trees fix the worst case.",
            ],
            codeExample: {
              language: "c",
              caption: "BST search and the three-case delete (insert = search for the NULL, attach)",
              code: `struct Node *search(struct Node *r, int k) {
    while (r && r->data != k)
        r = (k < r->data) ? r->left : r->right;   /* discard a subtree */
    return r;
}
struct Node *del(struct Node *r, int k) {  /* the three delete cases */
    if (!r) return NULL;
    if (k < r->data)      r->left  = del(r->left,  k);
    else if (k > r->data) r->right = del(r->right, k);
    else if (!r->left || !r->right) {  /* case 0/1: bypass node */
        struct Node *t = r->left ? r->left : r->right; free(r); return t;
    } else {                           /* case 2: two children */
        struct Node *s = r->right;     /* inorder successor */
        while (s->left) s = s->left;
        r->data = s->data;
        r->right = del(r->right, s->data);
    }
    return r;
}`,
            },
            keyTerms: [
              { term: "BST invariant", definition: "Left subtree < node < right subtree, holding recursively at every node." },
              { term: "Inorder successor", definition: "The smallest key greater than a node's key: one step right, then leftmost - used in two-child deletion." },
              { term: "Skewed BST", definition: "A BST built from sorted insertions: height n - 1, all operations O(n)." },
              { term: "Balance factor", definition: "height(left) - height(right); AVL trees keep it in {-1, 0, 1} via rotations." },
            ],
            callout: {
              type: "exam",
              title: "The three delete cases are the marks",
              body: "A delete answer with only the leaf and one-child cases caps at half marks. Always present the two-children case with the successor rule, DRAW the successor (one right, all the way left), and finish by noting the successor has at most one child - so it deletes by case 0 or 1. The reduction is the examiner's checklist item.",
            },
            diagram: {
              kind: "fork",
              title: "BST search and deletion decisions",
              caption: "One path down; deletion branches on how many children the doomed node has.",
              start: "Compare key with current node",
              branches: [
                { label: "key < node", outcome: "descend left subtree", good: true },
                { label: "key > node", outcome: "descend right subtree", good: true },
                { label: "key == node, 0-1 children", outcome: "unlink or bypass the node", good: true },
                { label: "key == node, 2 children", outcome: "copy successor's key, delete successor instead", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Define a BST. Write algorithms for search, insertion and deletion (all three cases), and show the tree after inserting 50, 30, 70, 20, 40, 60, 80 and then deleting 50.",
                marks: 7,
                outline: [
                  "Invariant: left < node < right, recursive; inorder gives sorted order.",
                  "Search: compare and descend; O(h).",
                  "Insert: descend to the NULL child; attach there.",
                  "Built tree: 50 root; 30/70; 20/40; 60/80.",
                  "Delete 50: two-children case.",
                  "Successor = leftmost of right subtree = 60; copy 60 to root.",
                  "Delete leaf 60; final root 60 with 30, 70, 20, 40, 80.",
                ],
              },
              {
                q: "Insert 10, 20, 30, 40 into an empty BST. What shape results and what is the height?",
                marks: 2,
                outline: ["Right-skewed chain 10-20-30-40.", "Height 3 = n - 1; operations O(n)."],
              },
              {
                q: "Prove or explain why the inorder traversal of a BST is sorted.",
                marks: 3,
                outline: [
                  "Induction on the invariant.",
                  "Inorder = left keys, then root, then right keys.",
                  "Left < root < right, so concatenation is ascending.",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Expression trees",
            body: [
              "An expression tree is a binary tree that encodes an arithmetic expression: leaves hold operands (variables or constants), internal nodes hold operators, and the subtree structure carries the precedence and associativity - parentheses are never stored because the tree shape already decides grouping. Evaluating the tree is postorder by definition: to evaluate a node, evaluate its left subtree, evaluate its right subtree, then apply the node's operator to the two results - children before parent, exactly LRN.",
              "Construction from infix follows section 2.6: convert infix to postfix with the operator stack, then build the tree from the postfix string with an operand stack - scan postfix; on an operand push a leaf node; on an operator pop two nodes (first pop = RIGHT child, second = LEFT), make the operator their parent, push the combined subtree. Worked example, infix (A + B) * C - D: postfix A B + C * D -; build: A, B leaves; '+' combines them; C leaf; '*' takes (A+B) as LEFT child and C as RIGHT; D leaf; '-' takes the '*' subtree as left and D as right. Root is '-', left child '*', whose left is '+'.",
              "Worked evaluation with values A = 2, B = 3, C = 4, D = 5: '+' node gives 2 + 3 = 5; '*' node gives 5 * 4 = 20; '-' node gives 20 - 5 = 15. The three notations of the expression are the three traversals of the tree: preorder gives PREFIX (- * + A B C D), inorder gives the INFIX form (A + B * C - D once parentheses are reinserted), postorder gives the POSTFIX (A B + C * D -) - which is literally the string we built from. This triple identity is the standard 3-mark question: 'write the prefix, infix and postfix forms of the given expression tree'.",
              "Complexities: building from a postfix string is O(n) with the operand stack; evaluating the finished tree is O(n) (each node once, O(h) stack). Compiler connection worth one exam sentence: expression trees (abstract syntax trees) are what compilers actually manipulate - constant folding, common-subexpression elimination and register allocation all rewrite this tree, and Huffman coding trees in data compression share the same 'internal node = operation' pattern. For the exam: draw the tree from a given infix or postfix expression, evaluate it with given values, and produce all three traversals - three sub-questions, one skill.",
            ],
            bullets: [
              "Expression tree: leaves = operands, internal nodes = operators; shape encodes precedence.",
              "Evaluation is postorder (LRN): evaluate children, then apply the operator.",
              "Build from postfix with an operand stack: operand -> leaf; operator -> pop two (right first), parent them.",
              "Worked: (A + B) * C - D -> postfix A B + C * D - -> root '-' over '*' over '+'.",
              "Evaluation with A=2, B=3, C=4, D=5: 2+3=5, 5*4=20, 20-5=15.",
              "Traversal triple: preorder = prefix, inorder = infix (parentheses implied), postorder = postfix.",
              "Build and evaluate are O(n); operand stack size bounded by expression length.",
              "Compilers manipulate expression trees (ASTs) for optimisation passes.",
            ],
            table: {
              caption: "One tree, three notations - expression (A + B) * C - D.",
              headers: ["Traversal", "Notation", "Output"],
              rows: [
                ["Preorder (NLR)", "prefix (Polish)", "- * + A B C D"],
                ["Inorder (LNR)", "infix (with parentheses)", "(A + B) * C - D"],
                ["Postorder (LRN)", "postfix (reverse Polish)", "A B + C * D -"],
              ],
            },
            keyTerms: [
              { term: "Expression tree", definition: "Binary tree with operands at leaves and operators at internal nodes; shape encodes grouping." },
              { term: "Prefix / postfix notation", definition: "Operator-before / operator-after forms, obtained as preorder / postorder of the expression tree." },
              { term: "Abstract syntax tree (AST)", definition: "The compiler's version of an expression tree, rewritten by optimisation passes." },
            ],
            callout: {
              type: "tip",
              title: "Pop order again - right child first",
              body: "Building the tree from postfix, the FIRST pop becomes the RIGHT child. Getting this wrong produces subtly wrong trees that evaluate wrongly for '-' and '/' - the same trap as postfix evaluation. Write 'first pop = right' in the margin of your trace and the examiner sees the discipline.",
            },
            diagram: {
              kind: "flow",
              title: "Building the tree for (A + B) * C - D",
              caption: "Postfix A B + C * D - consumed left to right with an operand stack.",
              steps: [
                { label: "A, B -> leaf nodes", note: "stack: A, B" },
                { label: "+ -> pop B, pop A; parent them", note: "stack: (A+B)" },
                { label: "C -> leaf; * -> parent (A+B) and C", note: "first pop C is right child" },
                { label: "D -> leaf; - -> parent subtree and D", note: "root = '-'" },
                { label: "Evaluate postorder", note: "2+3=5, 5*4=20, 20-5=15" },
              ],
            },
            examQuestions: [
              {
                q: "What is an expression tree? Construct the expression tree for (A + B) * C - D from its postfix form, evaluate it for A=2, B=3, C=4, D=5, and write the prefix, infix and postfix forms from the tree.",
                marks: 7,
                outline: [
                  "Definition: leaves = operands, internal = operators; shape = precedence.",
                  "Postfix via infix-to-postfix: A B + C * D -.",
                  "Build with operand stack; first pop = right child.",
                  "Tree: root '-', left '*', right D; '*': left '+', right C.",
                  "Postorder evaluation: 2+3=5; 5*4=20; 20-5=15.",
                  "Preorder -> prefix: - * + A B C D.",
                  "Inorder -> infix with parentheses; postorder -> the postfix string.",
                ],
              },
              {
                q: "Draw the expression tree for A + B * C and state which subtree evaluates first.",
                marks: 2,
                outline: ["Root '+', left leaf A, right subtree '*'(B, C).", "'*' subtree (right) evaluates first - precedence."],
              },
              {
                q: "Why are parentheses unnecessary inside an expression tree?",
                marks: 3,
                outline: [
                  "Grouping is fully determined by which nodes are children of which.",
                  "A deeper subtree binds tighter by construction.",
                  "Traversal recovers the grouped form.",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Searching and Sorting",
      summary:
        "Linear and binary search; bubble, selection, insertion, merge, quick, heap and radix sort - each with its mechanism, worked trace and exact complexity, closing with the master comparison table that decides which sort to cite in any exam answer.",
      chapter: {
        number: "04",
        title: "Finding Things and Putting Them in Order",
        intro:
          "Unit IV is the algorithmic core of the paper. Searching contrasts O(n) scanning with O(log n) halving; sorting walks the whole spectrum from the O(n^2) classroom trio (bubble, selection, insertion) through the O(n log n) industrial trio (merge, quick, heap) to the linear-time radix sort - and the master comparison table is the most reusable page in this book.",
        inOneBreath:
          "Linear search O(n) works anywhere; binary search O(log n) needs sorted data (mid = (low + high) / 2). Bubble: adjacent swaps, best O(n) with flag, stable. Selection: n-1 minimum swaps, always O(n^2), unstable. Insertion: shifts into a sorted prefix, best O(n), stable, ideal for nearly-sorted data. Merge: divide, sort halves, merge - O(n log n) always, stable, O(n) extra. Quick: partition around a pivot - O(n log n) average, O(n^2) worst, in-place, unstable. Heap: build-heap O(n), extract-max n times - O(n log n) guaranteed, in-place, unstable. Radix: digit by digit with a stable sub-sort - O(d * (n + k)).",
        sections: [
          {
            number: "4.1",
            title: "Sequential (linear) search",
            body: [
              "Sequential search examines the elements of a collection one by one, from the first to the last or until the target appears: for i = 0 to n-1: if A[i] == key return i; return -1 (not found). It is the only search that makes no assumptions about the data - no sorting, no structure, no indexing - which is simultaneously its strength (works on anything: arrays, linked lists, unsorted files) and its weakness (nothing is skipped, so the whole list may be scanned).",
              "Complexity, counted in comparisons: best case the key sits at index 0 - one comparison, O(1); worst case the key is last or absent - n comparisons, O(n); average over all n+1 outcomes (found at each position or absent) is (n + 1)/2 comparisons, so O(n). Space is O(1). Worked trace on A = [23, 7, 45, 12, 89], key = 45: compare 23 (no), 7 (no), 45 (yes) - return index 2 after 3 comparisons. Key = 100: all five compared, return -1 after 5. Both traces fit in a 3-mark answer.",
              "Two practical refinements show algorithmic thinking. The sentinel variant appends the key at position n before scanning, so the loop needs no end-of-array test - one comparison saved per element, the classic micro-optimisation. Self-organising lists move a found element one step toward the front (transpose) or all the way to the front (move-to-front), exploiting the empirical fact that accesses are skewed: frequently searched items migrate to the front, and the average cost drops toward O(1) for hot keys - this is exactly how caches and splay-like structures reason about locality.",
              "Where linear search is the RIGHT choice, not just the fallback: small n (under ~30 elements, where the sort needed to enable binary search costs more than the scan saves); unsorted data searched once or twice; linked lists (no random access to exploit); and as the inner step of algorithms like radix/bucket distribution. The exam question 'compare linear and binary search' expects: precondition (none vs sorted), complexity (O(n) vs O(log n)), access pattern (sequential vs random access), and applicability (any list vs sorted arrays only). For n = 1,000,000 the difference is a million versus twenty comparisons - the number that makes the point memorably.",
            ],
            bullets: [
              "Algorithm: scan i = 0..n-1, return the index of the first match, or -1.",
              "Best O(1) (first element), worst O(n) (last or absent), average (n+1)/2 comparisons.",
              "Space O(1); no precondition on the data - works on unsorted arrays and linked lists.",
              "Worked: [23, 7, 45, 12, 89], key 45 -> found at index 2 in 3 comparisons.",
              "Sentinel trick: append the key to skip the bounds test per iteration.",
              "Self-organising variants: move-to-front and transpose improve average cost for skewed accesses.",
              "Right choice for small n, one-off searches, or structures without random access.",
              "Comparison headline: n = 1,000,000 needs up to 1,000,000 comparisons vs ~20 for binary search.",
            ],
            codeExample: {
              language: "c",
              caption: "Linear search with a sentinel - no bounds test in the loop",
              code: `int linear_search(int A[], int n, int key) {
    for (int i = 0; i < n; i++)
        if (A[i] == key) return i;
    return -1;
}
int sentinel_search(int A[], int n, int key) {
    A[n] = key;                 /* temporary sentinel */
    int i = 0;
    while (A[i] != key) i++;    /* guaranteed to stop */
    return (i < n) ? i : -1;    /* real match or the sentinel */
}`,
            },
            keyTerms: [
              { term: "Sequential search", definition: "Element-by-element scan until the target is found or the list ends." },
              { term: "Sentinel", definition: "A copy of the key placed at the end so the loop cannot run past - removes one test per element." },
              { term: "Self-organising list", definition: "A list that reorders itself by access frequency (move-to-front, transpose) to lower average search cost." },
            ],
            callout: {
              type: "exam",
              title: "Give all three complexities",
              body: "Linear-search answers routinely state only O(n). The full 3-mark version names best O(1), worst O(n) AND average (n+1)/2 comparisons with the reasoning (n found-positions plus the absent case). Write the average formula explicitly - it is the one mark most students never collect.",
            },
            diagram: {
              kind: "flow",
              title: "Linear search for key = 45 in [23, 7, 45, 12, 89]",
              caption: "One comparison per element until the match - nothing is skipped.",
              steps: [
                { label: "A[0] = 23 vs 45", note: "no match" },
                { label: "A[1] = 7 vs 45", note: "no match" },
                { label: "A[2] = 45 vs 45", note: "match - return 2" },
                { label: "Had key been absent", note: "all 5 compared, return -1" },
              ],
            },
            examQuestions: [
              {
                q: "Explain sequential search with its algorithm and trace on a 5-element array. Derive the best, worst and average case complexities and state two situations where linear search is preferable to binary search.",
                marks: 7,
                outline: [
                  "Algorithm: scan from index 0, compare each element with the key.",
                  "Trace [23, 7, 45, 12, 89], key 45: match at index 2 after 3 comparisons.",
                  "Absent key: n comparisons, return -1.",
                  "Best O(1): key at index 0.",
                  "Worst O(n): key last or absent.",
                  "Average (n+1)/2 = O(n): n found-positions plus absent, uniformly.",
                  "Preferable when: data unsorted and searched rarely; n small; no random access (linked list).",
                ],
              },
              {
                q: "What is a sentinel in sequential search and what does it save?",
                marks: 2,
                outline: ["Key copied to A[n] before scanning.", "Loop needs no end-of-array test - one comparison per element saved."],
              },
              {
                q: "A sorted array of 1,000,000 elements: how many comparisons at most for linear vs binary search?",
                marks: 3,
                outline: ["Linear: up to 1,000,000 (O(n)).", "Binary: about log2(10^6) = 20 (O(log n)).", "The 50,000x gap is the motivation for sorting first."],
              },
            ],
          },
          {
            number: "4.2",
            title: "Binary search",
            body: [
              "Binary search finds a key in a SORTED array by repeatedly halving the search interval: compute mid = (low + high) / 2; compare A[mid] with the key; if equal, done; if the key is smaller, the answer can only lie left of mid (high = mid - 1); if larger, only right (low = mid + 1); an empty interval (low > high) means absent. Each comparison throws away half the remaining candidates, so the number of comparisons is at most floor(log2 n) + 1 - twenty comparisons cover a million elements.",
              "Worked trace, A = [5, 11, 18, 26, 34, 41, 53, 68] (n = 8, indices 0..7), key = 41. Step 1: low 0, high 7, mid 3, A[3] = 26 < 41 -> low = 4. Step 2: low 4, high 7, mid 5, A[5] = 41 - found at index 5 after 2 comparisons. Trace for absent key = 30: mid 3 (26 < 30) -> low 4; mid 5 (41 > 30) -> high = 4; mid 4 (34 > 30) -> high = 3; now low 4 > high 3 - not found after 3 comparisons. Ceiling check: log2(8) = 3, and indeed no search on 8 elements exceeds 3-4 comparisons.",
              "Complexities: best O(1) (key at the first mid), worst and average O(log n); space O(1) for the iterative version, O(log n) for the recursive one (call stack). The precondition is absolute: the array must be sorted, and maintaining sortedness costs O(n) per insertion - which is exactly the tension that binary search trees resolve (search cost O(log n) with O(log n) insertion). The classic implementation bugs, beloved by examiners and by real-world bugs alike: mid overflow in languages with fixed ints (write mid = low + (high - low) / 2), off-by-one on the interval update (high = mid - 1, never high = mid, with the low > high termination), and binary search on an unsorted array where it silently returns wrong answers.",
              "Variants extend the basic idea and appear as 3-mark follow-ups: first/last occurrence (on equality keep going left or right - needed for counting occurrences in O(log n)), lower_bound/upper_bound (the insertion point keeping sortedness), binary search on the ANSWER space (monotonic predicates - 'find the smallest capacity that works'), and rotated-array search. The exam package for the 7-mark version: state the precondition, give iterative pseudocode, trace on a concrete array (both a hit and a miss), and derive log2 n from the halving argument. The derivation sentence to memorise: after k comparisons at most n / 2^k elements remain, so n / 2^k = 1 gives k = log2 n.",
            ],
            bullets: [
              "Precondition: the array is sorted; the algorithm halves the interval each comparison.",
              "Loop: mid = low + (high - low) / 2; smaller -> high = mid - 1; larger -> low = mid + 1.",
              "Termination: low > high means the key is absent.",
              "Worked hit: [5, 11, 18, 26, 34, 41, 53, 68], key 41 -> mids 3, 5; found at index 5 in 2 comparisons.",
              "Worked miss: key 30 -> mids 3, 5, 4; interval empties - absent in 3 comparisons.",
              "Complexity: best O(1), worst and average O(log n); at most floor(log2 n) + 1 comparisons.",
              "Space: O(1) iterative, O(log n) recursive.",
              "Implementation traps: mid overflow (use low + (high-low)/2), high = mid - 1 not mid, sorted precondition.",
            ],
            table: {
              caption: "Binary search trace, key = 30 (absent), on the 8-element example.",
              headers: ["Step", "low", "high", "mid", "A[mid]", "Action"],
              rows: [
                ["1", "0", "7", "3", "26", "26 < 30 -> low = 4"],
                ["2", "4", "7", "5", "41", "41 > 30 -> high = 4"],
                ["3", "4", "4", "4", "34", "34 > 30 -> high = 3"],
                ["4", "4 > high 3", "-", "-", "-", "absent - 3 comparisons"],
              ],
            },
            keyTerms: [
              { term: "Search interval", definition: "The inclusive range [low, high] still containing candidates; halved every comparison." },
              { term: "Lower bound", definition: "The first index where the key could be inserted keeping sorted order - a binary-search variant." },
              { term: "First occurrence", definition: "Leftmost index of a duplicated key, found by continuing left on equality." },
            ],
            callout: {
              type: "warning",
              title: "Two silent killers",
              body: "Writing mid = (low + high) / 2 can overflow for large indices - the correct form is mid = low + (high - low) / 2; and updating with high = mid (instead of mid - 1) can loop forever on a two-element interval. State both in code comments during the exam; interviewers and examiners both plant them deliberately.",
            },
            diagram: {
              kind: "pipeline",
              title: "Binary search stages for key = 41",
              caption: "Each stage halves the candidate range - three comparisons would exhaust any 8-element array.",
              stages: [
                { label: "Interval [0, 7], mid 3", note: "A[3] = 26 < 41 -> go right" },
                { label: "Interval [4, 7], mid 5", note: "A[5] = 41 - match" },
                { label: "Return index 5", note: "2 comparisons for n = 8" },
                { label: "General bound", note: "floor(log2 n) + 1 comparisons max" },
              ],
            },
            examQuestions: [
              {
                q: "Explain binary search with its precondition. Give the iterative algorithm, trace it for a successful and an unsuccessful search on a sorted 8-element array, and derive the worst-case comparison count.",
                marks: 7,
                outline: [
                  "Precondition: array sorted; interval halving.",
                  "Pseudocode: mid = low + (high - low) / 2; branch three ways.",
                  "Success trace: key 41 -> mids 3, 5 -> index 5.",
                  "Failure trace: key 30 -> mids 3, 5, 4 -> low > high, absent.",
                  "Halving argument: after k steps n / 2^k candidates remain.",
                  "n / 2^k = 1 -> k = log2 n: worst O(log n), best O(1).",
                  "Space O(1) iterative; note mid-overflow and off-by-one traps.",
                ],
              },
              {
                q: "How many comparisons does binary search need at most on an array of 1000 elements?",
                marks: 2,
                outline: ["floor(log2 1000) + 1 = 9 + 1 = 10.", "2^10 = 1024 >= 1000."],
              },
              {
                q: "Why must binary search never be applied to an unsorted array, and what does it return in that case?",
                marks: 3,
                outline: [
                  "Halving assumes discarded half has no candidate.",
                  "Unsorted data breaks that assumption.",
                  "It returns a wrong index or false 'absent' - silently, no error.",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Bubble sort and selection sort",
            body: [
              "Bubble sort repeatedly scans the array comparing ADJACENT pairs and swapping any out-of-order pair; each full pass bubbles the largest remaining element to the end, so after pass k the last k elements are in final position. Worked trace on [5, 3, 8, 1]: pass 1 -> compare (5,3) swap -> [3, 5, 8, 1], (5,8) ok, (8,1) swap -> [3, 5, 1, 8]; pass 2 -> [3, 1, 5, 8]... carefully: (3,5) ok, (5,1) swap, (5,8) ok -> [3, 1, 5, 8]; pass 3 -> (3,1) swap -> [1, 3, 5, 8] sorted. Passes needed shrink: n-1, n-2, ... comparisons total n(n-1)/2 in the unguarded version.",
              "The early-exit optimisation is the examinable detail: if a full pass performs NO swap, the array is sorted - stop. With this flag, bubble sort's BEST case (already sorted input) is one pass of n-1 comparisons: O(n). Worst and average remain O(n^2) because every inversion must be removed by a swap, and there can be up to n(n-1)/2 of them. Space O(1) - in place. Stability: equal elements are never jumped over by an adjacent swap, so bubble sort is STABLE - a property it shares with insertion and merge sort.",
              "Selection sort takes the opposite philosophy: find the MINIMUM of the unsorted region (linear scan with index tracking), swap it into the boundary position, grow the sorted prefix by one. Worked trace on [5, 3, 8, 1]: select min 1 (index 3), swap with index 0 -> [1, 3, 8, 5]; select min 3, already in place -> [1, 3, 8, 5]; select min 5, swap with index 2 -> [1, 3, 5, 8]. It always performs exactly n-1 swaps - the FEWEST of any elementary sort - and always n(n-1)/2 comparisons regardless of input, so its best case is also O(n^2): it never notices sorted data.",
              "The comparison is the exam question. Bubble: many swaps, best O(n) with flag, stable, mostly pedagogical. Selection: minimum swaps (n-1), unconditionally O(n^2), NOT stable (the swap can jump a later equal element over an earlier one - trace [2a, 2b, 1]: min 1 swaps with 2a, putting 1 before 2b... giving [1, 2b, 2a] - relative order of the two 2s destroyed). Selection's virtue is write-minimality, valuable when writes are expensive (flash memory). Both are O(n^2) classroom sorts - fine for n up to a few thousand, never the production choice, and the exam answer should say exactly that: correct, simple, quadratic.",
            ],
            bullets: [
              "Bubble: compare adjacent pairs, swap if out of order; largest element bubbles to the end each pass.",
              "Trace [5, 3, 8, 1]: pass 1 -> [3, 5, 1, 8]; pass 2 -> [3, 1, 5, 8]; pass 3 -> [1, 3, 5, 8].",
              "Early-exit flag: a swap-free pass proves sortedness -> best case O(n) for sorted input.",
              "Bubble worst/average O(n^2), space O(1), STABLE (adjacent swaps preserve equal order).",
              "Selection: find min of unsorted region, swap into the boundary; sorted prefix grows by one.",
              "Selection always n(n-1)/2 comparisons and exactly n-1 swaps - fewest writes of the elementary sorts.",
              "Selection best case is still O(n^2) (never detects sorted input) and it is NOT stable.",
              "Unstable trace: [2a, 2b, 1] -> [1, 2b, 2a]: the swap jumps 2b over 2a.",
            ],
            table: {
              caption: "Bubble vs selection - the two elementary sorts side by side.",
              headers: ["Property", "Bubble sort", "Selection sort"],
              rows: [
                ["Mechanism", "adjacent compare-and-swap", "select min, swap to boundary"],
                ["Comparisons", "up to n(n-1)/2", "always n(n-1)/2"],
                ["Swaps", "up to n(n-1)/2", "exactly n-1"],
                ["Best case", "O(n) with early-exit flag", "O(n^2) - input-blind"],
                ["Stable", "yes", "no"],
                ["In place", "yes, O(1) space", "yes, O(1) space"],
              ],
            },
            keyTerms: [
              { term: "Inversion", definition: "A pair of elements in the wrong relative order; every adjacent swap fixes exactly one." },
              { term: "Stable sort", definition: "Preserves the relative order of equal keys - essential when sorting records by multiple fields." },
              { term: "Early exit", definition: "Bubble's swap-free pass test, cutting best-case time to O(n)." },
            ],
            callout: {
              type: "exam",
              title: "Show every pass",
              body: "Sorting traces are marked pass by pass. For a 4-element array, write pass 1, 2, 3 with the full array state after each - a final answer alone loses the method marks. And when asked about stability, give the [2a, 2b, 1] selection counter-example; naming the property without the demonstration is only half the credit.",
            },
            diagram: {
              kind: "compare",
              title: "Bubble sort vs selection sort",
              caption: "Adjacent bubbling versus global minimum hunting - same O(n^2), different personalities.",
              left: {
                heading: "Bubble sort",
                items: [
                  "compares and swaps adjacent pairs",
                  "largest element lands at the end each pass",
                  "best O(n) with the swap-free flag",
                  "stable - adjacent swaps only",
                  "up to n(n-1)/2 swaps",
                ],
              },
              right: {
                heading: "Selection sort",
                items: [
                  "scans for the minimum of the unsorted tail",
                  "one swap per pass - exactly n-1 total",
                  "O(n^2) regardless of input order",
                  "not stable - swaps jump equal keys",
                  "choosen when writes are expensive",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain bubble sort with the early-exit optimisation and selection sort. Trace both on [5, 3, 8, 1], state all complexities, and discuss stability with an example.",
                marks: 7,
                outline: [
                  "Bubble: adjacent swaps; largest bubbles to the end per pass.",
                  "Trace: pass 1 [3, 5, 1, 8]; pass 2 [3, 1, 5, 8]; pass 3 [1, 3, 5, 8].",
                  "Swap-free pass -> stop; best O(n), worst O(n^2).",
                  "Selection: select min, swap to front of unsorted region.",
                  "Trace: [1, 3, 8, 5] -> [1, 3, 8, 5] -> [1, 3, 5, 8]; n-1 swaps.",
                  "Always O(n^2) comparisons - input-blind.",
                  "Bubble stable; selection unstable - show [2a, 2b, 1] swap destroying order.",
                ],
              },
              {
                q: "How many swaps does selection sort perform on n elements, and why is that a virtue?",
                marks: 2,
                outline: ["Exactly n-1.", "Fewest writes - good when memory writes are costly."],
              },
              {
                q: "Why does the early-exit flag not help selection sort?",
                marks: 3,
                outline: [
                  "Selection never compares adjacent pairs - no signal of sortedness.",
                  "It scans the whole unsorted tail for the minimum every pass.",
                  "So even sorted input costs n(n-1)/2 comparisons.",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Insertion sort",
            body: [
              "Insertion sort maintains a sorted prefix A[0..i-1] and grows it one element at a time: take the key A[i], shift every larger element of the prefix one place right, drop the key into the gap. It is the algorithm humans use to sort playing cards in their hand - pick a card, slide it into place among the already-sorted cards. The mechanism is shifting, not swapping: one write per moved element, half the writes of a swap-based sort.",
              "Worked trace on [5, 3, 8, 1]: i = 1, key 3: 5 shifts right -> [3, 5, 8, 1]. i = 2, key 8: 5 not larger, no shift -> unchanged. i = 3, key 1: 8, 5, 3 all shift -> [1, 3, 5, 8]. Comparison counts: pass i performs at most i comparisons and shifts; total worst case sum i = n(n-1)/2 -> O(n^2). Best case - already sorted - each key is compared once against its left neighbour and stops: n - 1 comparisons, O(n). The average is about n^2/4: insertion sort does HALF the work of bubble on random data and quits early on nearly-sorted data.",
              "This sensitivity to existing order is the property that keeps insertion sort alive in real systems: it is the standard finisher inside industrial sorts (quicksort switches to insertion sort below ~16 elements; Python's Timsort is a merge of runs detected and extended with binary insertion). It is STABLE (equal keys are never jumped - shifting stops at the first non-larger element), IN PLACE (O(1) space), and ONLINE (it can absorb elements as they arrive - the prefix is always genuinely sorted, unlike selection's prefix which is final-position but may still grow). Binary insertion sort finds the gap in O(log i) by binary search but still pays O(i) to shift, so asymptotics stay quadratic - a favourite nuance question.",
              "The exam question is predictable and formulaic: algorithm, trace on 4-5 elements, all three complexities with the reason (shifts), stability and the 'nearly sorted data' advantage. The one mark students lose is confusing insertion with selection: insertion PICKS THE NEXT ELEMENT (A[i], position known in advance) and searches for WHERE to put it; selection SEARCHES FOR WHICH ELEMENT (the minimum) and its position is known. Insertion's cost depends on the data's existing order; selection's does not. State that sentence and the distinction is banked.",
            ],
            bullets: [
              "Grow a sorted prefix: take key A[i], shift larger prefix elements right, insert into the gap.",
              "Trace [5, 3, 8, 1]: key 3 -> [3, 5, 8, 1]; key 8 -> unchanged; key 1 -> [1, 3, 5, 8].",
              "Worst O(n^2) (reverse sorted: every key shifts the whole prefix), best O(n) (sorted: one comparison per key).",
              "Average about n^2/4 comparisons - half of bubble's work on random data.",
              "Space O(1), in place; shifting (one write per move) halves the writes of swapping.",
              "STABLE: shifting stops at the first element not greater than the key.",
              "ONLINE: the prefix is always sorted, so new elements can arrive mid-sort.",
              "Production role: Timsort and quicksort use insertion sort for small or nearly-sorted runs.",
            ],
            codeExample: {
              language: "c",
              caption: "Insertion sort - shift, then drop the key",
              code: `void insertion_sort(int A[], int n) {
    for (int i = 1; i < n; i++) {
        int key = A[i];          /* next element to place */
        int j = i - 1;
        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j];     /* shift larger element right */
            j--;
        }
        A[j + 1] = key;          /* drop into the gap */
    }
}
/* best O(n) on sorted input; worst O(n^2); stable */`,
            },
            keyTerms: [
              { term: "Sorted prefix", definition: "A[0..i-1], already ordered at every stage of insertion sort." },
              { term: "Key", definition: "The element A[i] currently being inserted into the prefix." },
              { term: "Online algorithm", definition: "One that produces valid results as input arrives incrementally - insertion sort qualifies." },
            ],
            callout: {
              type: "tip",
              title: "Insertion vs selection in one sentence",
              body: "Insertion knows WHERE (position i) and searches for WHICH slot; selection searches for WHICH element (the minimum) and knows the slot. From that one sentence, every difference follows: insertion is order-sensitive and stable, selection is input-blind and not. Quote it in the comparison question.",
            },
            diagram: {
              kind: "flow",
              title: "Insertion sort pass i = 3 on [3, 5, 8, 1]",
              caption: "Key 1 walks left past 8, 5, 3 - three shifts, one final write.",
              steps: [
                { label: "key = A[3] = 1", note: "saved aside" },
                { label: "8 > 1: shift right", note: "[3, 5, _, 8]" },
                { label: "5 > 1: shift right", note: "[3, _, 5, 8]" },
                { label: "3 > 1: shift right", note: "[_, 3, 5, 8]" },
                { label: "A[0] = 1", note: "result [1, 3, 5, 8]" },
              ],
            },
            examQuestions: [
              {
                q: "Explain insertion sort with its algorithm. Trace it on [5, 3, 8, 1], derive best, worst and average complexities, and explain why it is stable and why it excels on nearly-sorted data.",
                marks: 7,
                outline: [
                  "Mechanism: sorted prefix + shift-and-insert of key A[i].",
                  "Trace: key 3 -> [3,5,8,1]; key 8 no shift; key 1 -> [1,3,5,8].",
                  "Worst: reverse order, each key shifts i elements -> sum = n(n-1)/2, O(n^2).",
                  "Best: sorted input, one comparison per key -> n-1 comparisons, O(n).",
                  "Average about n^2/4.",
                  "Stable: shift stops at the first non-greater element - equal keys keep order.",
                  "Nearly-sorted: few shifts per key -> near-linear; used inside Timsort/quicksort.",
                ],
              },
              {
                q: "Sort [4, 2, 7, 2] with insertion sort - is the result affected by the duplicate 2s?",
                marks: 2,
                outline: ["Result [2, 2, 4, 7] - stable, first 2 stays before the second.", "Shift stops at a non-greater element."],
              },
              {
                q: "Binary insertion sort finds each gap in O(log i) - why is the overall sort still O(n^2)?",
                marks: 3,
                outline: [
                  "Search for the gap drops to logarithmic.",
                  "Shifting the elements to open the gap is still O(i).",
                  "Total shifts remain quadratic - movement, not search, dominates.",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Merge sort",
            body: [
              "Merge sort is the cleanest divide-and-conquer sort: divide the array into two halves, recursively sort each half, then MERGE the two sorted halves into one sorted array. The recursion bottoms out at single elements (trivially sorted); all the real work is in the merge, which walks two sorted runs simultaneously, always emitting the smaller front element. The recurrence T(n) = 2T(n/2) + O(n) solves to O(n log n) - and it holds for best, average AND worst case: merge sort is input-blind in the best possible way.",
              "The merge, step by step on runs [3, 8] and [1, 5]: fronts 3 and 1 -> emit 1; fronts 3 and 5 -> emit 3; fronts 8 and 5 -> emit 5; left run exhausted -> emit remaining 8. Result [1, 3, 5, 8] - n comparisons at most, O(n) time, O(n) auxiliary space. Worked full sort of [38, 27, 43, 3, 9, 82, 10]: split [38, 27, 43, 3] and [9, 82, 10]; recurse to sorted [3, 27, 38, 43] and [9, 10, 82]; merge -> [3, 9, 10, 27, 38, 43, 82]. The recursion tree has log2 n levels, each doing O(n) merge work - hence n log n, and the pyramid diagram below is the standard way to show it.",
              "Properties: merge sort is STABLE (on ties, take from the left run - one tie-break rule preserves original order), which makes it the sort of choice for multi-key sorting (sort by secondary key, then stably by primary). Its costs: O(n) auxiliary array (the price of the merge - unacceptable in tight memory contexts) and O(log n) stack for the recursion. It never degrades: no O(n^2) case, no adversarial input - quicksort trades that guarantee for in-place operation, heapsort keeps the guarantee in place but loses stability and cache-friendliness.",
              "Two refinements worth one exam sentence each: bottom-up merge sort iterates over widths 1, 2, 4, 8 ... merging pairs of runs, eliminating the recursion entirely (O(1) stack); and external merge sort is how disk-scale data is sorted - sort chunks that fit in memory, then merge the sorted chunks with multi-way merging, which is why merge sort (not quicksort) governs database and file-system sorting. The exam package: algorithm, the [38, 27, 43, 3, 9, 82, 10] trace with the split/merge pyramid, recurrence solution to n log n, and the stable-plus-O(n)-space comparison against quicksort.",
            ],
            bullets: [
              "Divide into halves, sort each recursively, merge the two sorted runs.",
              "Merge: walk both runs, emit the smaller front; ties from the left run keep it stable.",
              "Worked: [38, 27, 43, 3] and [9, 82, 10] -> [3, 27, 38, 43] + [9, 10, 82] -> [3, 9, 10, 27, 38, 43, 82].",
              "Recurrence T(n) = 2T(n/2) + O(n) -> O(n log n) in best, average and worst case.",
              "log2 n recursion levels, each doing O(n) merge work.",
              "STABLE - enables multi-key sorting; O(n) auxiliary space is the cost.",
              "Bottom-up variant removes recursion (widths 1, 2, 4, ...); external merge sort handles disk-scale data.",
              "Contrast: quicksort in-place but O(n^2) worst; heapsort in-place O(n log n) but unstable.",
            ],
            codeExample: {
              language: "c",
              caption: "Merge sort - the merge does the real work",
              code: `void merge(int A[], int lo, int mid, int hi, int tmp[]) {
    int i = lo, j = mid + 1, k = lo;
    while (i <= mid && j <= hi)
        tmp[k++] = (A[i] <= A[j]) ? A[i++] : A[j++]; /* <= keeps stability */
    while (i <= mid) tmp[k++] = A[i++];
    while (j <= hi)  tmp[k++] = A[j++];
    for (k = lo; k <= hi; k++) A[k] = tmp[k];
}
void msort(int A[], int lo, int hi, int tmp[]) {
    if (lo >= hi) return;              /* base: 0 or 1 element */
    int mid = lo + (hi - lo) / 2;
    msort(A, lo, mid, tmp);
    msort(A, mid + 1, hi, tmp);
    merge(A, lo, mid, hi, tmp);
}`,
            },
            keyTerms: [
              { term: "Merge", definition: "Linear combination of two sorted runs into one sorted run by emitting the smaller front." },
              { term: "Divide and conquer", definition: "Split into independent subproblems, solve recursively, combine - the merge-sort template." },
              { term: "External sorting", definition: "Sorting data larger than memory by sorting chunks and multi-way merging them - merge sort's industrial role." },
            ],
            callout: {
              type: "exam",
              title: "Draw the split/merge pyramid",
              body: "The trace diagram examiners expect is a two-sided pyramid: top the unsorted array, middle the split levels, bottom the sorted singles, then the merge levels back up to the sorted array. Redraw it for every merge-sort question - it communicates the recurrence (log n levels, O(n) per level) visually and earns the derivation marks.",
            },
            diagram: {
              kind: "pyramid",
              title: "Merge sort on [38, 27, 43, 3] - split down, merge up",
              caption: "Each level halves the runs and doubles their count; log n levels, O(n) work per level.",
              tiers: [
                { label: "Level 0: [38, 27, 43, 3]", note: "one unsorted run of n" },
                { label: "Split: [38, 27] [43, 3]", note: "two halves" },
                { label: "Split to singles: [38][27][43][3]", note: "each trivially sorted" },
                { label: "Merge up: [27, 38] [3, 43]", note: "O(n) per level" },
                { label: "Final: [3, 27, 38, 43]", note: "T(n) = 2T(n/2) + O(n) -> O(n log n)" },
              ],
            },
            examQuestions: [
              {
                q: "Explain merge sort. Trace it on [38, 27, 43, 3, 9, 82, 10], write the merge procedure, and derive the O(n log n) complexity from the recurrence. Discuss stability and space requirements.",
                marks: 7,
                outline: [
                  "Divide into halves, sort recursively, merge the sorted runs.",
                  "Splits: [38, 27, 43, 3] / [9, 82, 10] -> ... -> singles.",
                  "Merges: [3, 27, 38, 43] and [9, 10, 82].",
                  "Final: [3, 9, 10, 27, 38, 43, 82].",
                  "Merge pseudocode: emit smaller front; ties from left run.",
                  "Recurrence T(n) = 2T(n/2) + O(n); log n levels * O(n) -> O(n log n) all cases.",
                  "Stable (left-run tie rule) but O(n) auxiliary space; mention external sorting.",
                ],
              },
              {
                q: "Merge the sorted runs [2, 9, 15] and [1, 10, 12] showing each emission.",
                marks: 2,
                outline: ["1, 2, 9, 10, 12, 15.", "Six comparisons at most."],
              },
              {
                q: "Why do databases use external merge sort rather than quicksort for huge files?",
                marks: 3,
                outline: [
                  "Data exceeds memory - random in-place swaps are impossible on disk.",
                  "Sequential chunk sort + sequential multi-way merge suits disk access patterns.",
                  "Quicksort's in-place partitioning needs random access.",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Quick sort",
            body: [
              "Quick sort picks a PIVOT element and PARTITIONS the array so that every element smaller than the pivot precedes it and every larger element follows it - the pivot lands in its final sorted position. Then it recurses on the two sides independently. The divide step does the work (unlike merge sort, whose work is in the combine); no merging is needed because the partition already orders across the boundary.",
              "The Lomuto partition (textbook form): choose A[high] as pivot; keep index i marking the boundary of the < pivot region; scan j from low to high-1, and whenever A[j] < pivot, swap A[j] with A[i] and advance i; finally swap the pivot into position i. Worked partition of [7, 2, 9, 4, 3] with pivot 3: j over 7 (no), 2 (swap with 7 -> [2, 7, 9, 4, 3], i = 1), 9 (no), 4 (no); final swap pivot with A[1] -> [2, 3, 9, 4, 7], pivot returned at index 1. Everything left of 3 is smaller, everything right larger - recurse on [2] and [9, 4, 7].",
              "Complexity: each partition is O(k) for a segment of size k. When the pivot splits evenly, the recurrence T(n) = 2T(n/2) + O(n) gives O(n log n) - the AVERAGE case, with good constants and in-place operation (O(log n) stack, O(1) extra array space). When the pivot is always the extreme element - sorted or reverse-sorted input with a first/last pivot - the partition is (n-1) vs 0 and T(n) = T(n-1) + O(n) gives O(n^2): the WORST case that makes naive quicksort the wrong tool for nearly-sorted data. Defences: random pivot, median-of-three, or introsort's switch to heapsort at excessive depth (the real std::sort fix).",
              "Properties and the exam comparison: quick sort is UNSTABLE (long-distance swaps reorder equal keys), in place (its decisive advantage over merge sort), and typically the fastest general-purpose comparison sort in practice due to cache-friendly sequential partition scans. The 7-mark package: state the idea, give the partition algorithm, trace a partition AND the full recursion on 5 elements, derive both recurrences (even split -> n log n, degenerate -> n^2), and compare against merge sort on space, stability and worst-case guarantee. One sentence closes every good answer: quicksort's average excellence is bought with a worst case that pivot randomisation makes astronomically unlikely but never impossible.",
            ],
            bullets: [
              "Pick a pivot; partition so smaller elements precede it, larger follow; the pivot reaches its final position.",
              "Lomuto partition: boundary index i, scan j, swap A[j] < pivot into the small region, pivot swaps to i.",
              "Worked: partition [7, 2, 9, 4, 3] with pivot 3 -> [2, 3, 9, 4, 7], pivot at index 1.",
              "Even splits: T(n) = 2T(n/2) + O(n) -> O(n log n) average; partition itself O(k).",
              "Worst case: extreme pivots on sorted input -> T(n) = T(n-1) + O(n) -> O(n^2).",
              "Defences: randomised pivot, median-of-three, introsort fallback to heapsort.",
              "UNSTABLE (long swaps), in place (O(1) array space, O(log n) stack), cache-friendly in practice.",
              "Quicksort vs merge sort: in-place and faster on average, but no worst-case guarantee and unstable.",
            ],
            codeExample: {
              language: "c",
              caption: "Quick sort with Lomuto partition",
              code: `int partition(int A[], int lo, int hi) {
    int pivot = A[hi];            /* last element as pivot */
    int i = lo - 1;               /* end of the < pivot region */
    for (int j = lo; j < hi; j++)
        if (A[j] < pivot) {
            i++;
            int t = A[i]; A[i] = A[j]; A[j] = t;
        }
    int t = A[i + 1]; A[i + 1] = A[hi]; A[hi] = t;
    return i + 1;                 /* pivot's final index */
}
void qsort_(int A[], int lo, int hi) {
    if (lo >= hi) return;
    int p = partition(A, lo, hi);
    qsort_(A, lo, p - 1);         /* recurse on both sides */
    qsort_(A, p + 1, hi);
}`,
            },
            keyTerms: [
              { term: "Pivot", definition: "The element around which the partition splits; ends in its final sorted position after partitioning." },
              { term: "Lomuto partition", definition: "Single-scan partition keeping a boundary index for the < pivot region; pivot taken from the end." },
              { term: "Median-of-three", definition: "Pivot chosen as the median of first, middle and last elements - defeats sorted-input degeneration." },
              { term: "Introsort", definition: "Quicksort that switches to heapsort when recursion depth exceeds c * log n - real-world worst-case insurance." },
            ],
            callout: {
              type: "exam",
              title: "Two recurrences, two answers",
              body: "Quicksort questions are really recurrence questions. Write BOTH lines: even split T(n) = 2T(n/2) + n -> O(n log n); degenerate split T(n) = T(n-1) + n -> O(n^2). Then name when each happens (balanced pivot vs sorted input with first/last pivot). Presenting both recurrences is what separates a 7-mark answer from a 4-mark one.",
            },
            diagram: {
              kind: "fork",
              title: "One partition, two futures",
              caption: "The pivot quality decides whether quicksort runs in n log n or n^2.",
              start: "Partition around the pivot",
              branches: [
                { label: "Balanced pivot", outcome: "halves of similar size -> T(n) = 2T(n/2) + n -> O(n log n)", good: true },
                { label: "Extreme pivot (sorted input, end pivot)", outcome: "split (n-1) vs 0 -> T(n) = T(n-1) + n -> O(n^2)", good: false },
                { label: "Randomised pivot", outcome: "expected balanced splits - O(n log n) with high probability", good: true },
                { label: "Depth guard (introsort)", outcome: "switch to heapsort when depth > c log n - guaranteed bound", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Explain quick sort's partition step. Trace the partition of [7, 2, 9, 4, 3] with pivot 3 and the full recursion to sorted order. Derive the average and worst-case complexities and compare quick sort with merge sort.",
                marks: 7,
                outline: [
                  "Idea: pivot to final position via partition, recurse on both sides.",
                  "Lomuto: boundary i, scan j, swap smaller elements left, pivot to i+1.",
                  "Trace: [7, 2, 9, 4, 3] -> [2, 3, 9, 4, 7], pivot index 1.",
                  "Recursions resolve to [1? no] -> final [2, 3, 4, 7, 9].",
                  "Balanced recurrence -> O(n log n) average; degenerate T(n) = T(n-1) + n -> O(n^2) worst.",
                  "Worst input: already sorted with end pivot; fixes: random pivot, median-of-three.",
                  "Comparison: in-place and fast vs merge sort's stability and guaranteed n log n.",
                ],
              },
              {
                q: "Why is quick sort unstable? Give a one-step example.",
                marks: 2,
                outline: ["Partition swaps elements across long distances.", "Equal keys can leapfrog, e.g. 2a swapped behind 2b.", "Order of equal keys not preserved."],
              },
              {
                q: "What is median-of-three pivot selection and which bad case does it prevent?",
                marks: 3,
                outline: [
                  "Pivot = median of A[lo], A[mid], A[hi].",
                  "Sorted or reverse-sorted inputs give good splits.",
                  "Prevents the O(n^2) degenerate partition (does not remove the worst case entirely).",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Heaps and heap sort",
            body: [
              "A binary heap is a COMPLETE binary tree stored in an array (no pointers needed: children of i at 2i+1 and 2i+2, parent at floor((i-1)/2)) satisfying the heap property: in a MAX-heap every parent is >= its children, so the maximum sits at the root; a MIN-heap reverses the comparison. Completeness is what makes the array trick work - no gaps means index arithmetic replaces pointers - and the property is local (parent vs children only), which is what makes repair cheap.",
              "The one fundamental operation is SIFT-DOWN (heapify): a node violates the property, so swap it with its LARGER child and continue downward until it dominates both children - O(h) = O(log n) work. SIFT-UP repairs upward symmetrically, used after inserting at the end. BUILD-HEAP constructs a heap from an arbitrary array in O(n) - not O(n log n): start from the last parent (index n/2 - 1) and sift down each node right-to-left; the linear bound comes from the fact that most nodes sit near the leaves where sift-down is short. Build-heap's O(n) is a favourite derivation question.",
              "Heap sort: build a max-heap over the array (O(n)), then n-1 times swap the root (the current maximum) with the last unsorted element, shrink the heap by one, and sift the new root down (O(log n) each). Worked on [4, 10, 3, 5, 1]: build-heap gives [10, 5, 3, 4, 1]; swap 10 with 1 -> [1, 5, 3, 4, | 10], sift -> [5, 4, 3, 1, | 10]; swap 5 with 1 -> [1, 4, 3, | 5, 10], sift -> [4, 1, 3, | 5, 10]; swap 4 with 3 -> [3, 1, | 4, 5, 10], sift -> [3, 1, ...]; swap 3 with 1 -> [1, | 3, 4, 5, 10] - sorted. Total: O(n) build + (n-1) O(log n) extractions = O(n log n) in EVERY case, with O(1) extra space.",
              "Priority-queue role: the heap is THE priority queue - insert O(log n) (append + sift-up), extract-max O(log n) (root swap + sift-down), peek O(1) (the root). That is what Dijkstra (Unit V), OS schedulers and event simulations actually use. The exam comparison: heap sort is O(n log n) guaranteed and in place, but UNSTABLE (root swaps jump equal keys) and less cache-friendly than quicksort (scans jump 2i apart). The 7-mark package: heap property and array indexing, build-heap algorithm with the O(n) argument, the full sort trace, and the comparison row against merge/quick sorts.",
            ],
            bullets: [
              "Max-heap: complete binary tree, every parent >= children; maximum at the root.",
              "Array storage: children 2i+1 / 2i+2, parent floor((i-1)/2) - completeness makes it gap-free.",
              "SIFT-DOWN: swap with the larger child until the property holds - O(log n).",
              "BUILD-HEAP: sift down every node from index n/2 - 1 to 0 -> O(n) total, not O(n log n).",
              "Heap sort: build-heap, then repeatedly swap root with the last unsorted element and sift down.",
              "Worked [4, 10, 3, 5, 1] -> heap [10, 5, 3, 4, 1] -> extractions yield [1, 3, 4, 5, 10].",
              "Complexity O(n log n) in best, average and worst case; O(1) extra space; UNSTABLE.",
              "The heap is the standard priority queue: insert / extract-max O(log n), peek O(1) - powers Dijkstra and schedulers.",
            ],
            table: {
              caption: "The O(n log n) trio compared.",
              headers: ["Property", "Merge sort", "Quick sort", "Heap sort"],
              rows: [
                ["Worst case", "O(n log n)", "O(n^2)", "O(n log n)"],
                ["Average", "O(n log n)", "O(n log n)", "O(n log n)"],
                ["Extra space", "O(n)", "O(log n) stack", "O(1)"],
                ["Stable", "yes", "no", "no"],
                ["Cache behaviour", "good (sequential)", "excellent (sequential)", "poor (jumps by 2i)"],
                ["In place", "no", "yes", "yes"],
              ],
            },
            keyTerms: [
              { term: "Heap property", definition: "Parent >= children (max-heap) or parent <= children (min-heap), at every node." },
              { term: "Sift-down / sift-up", definition: "Repair operations moving a node down past its larger child or up past its smaller parent - O(log n) each." },
              { term: "Priority queue", definition: "ADT dequeueing by key priority; implemented by a heap with O(log n) insert and extract." },
            ],
            callout: {
              type: "exam",
              title: "Build-heap is O(n), and you must say why",
              body: "The classic derivation: nodes at height h are at most ceil(n / 2^(h+1)), and each costs O(h) to sift; the sum sum h * n / 2^h converges to O(n). Even stating 'most nodes are near the leaves, where sift-down is short' recovers the mark. Writing O(n log n) for build-heap is the most common wrong answer in this section.",
            },
            diagram: {
              kind: "layers",
              title: "Max-heap [10, 5, 3, 4, 1] - array and levels",
              caption: "Index 0 is the top layer; children sit one level down at 2i+1 and 2i+2.",
              layers: [
                { label: "index 0: 10 (root, max)", note: "extracted first in heap sort" },
                { label: "index 1: 5, index 2: 3", note: "children of 10 at 2i+1, 2i+2" },
                { label: "index 3: 4, index 4: 1", note: "children of 5; parent of 4 is floor(2/2) = 1" },
                { label: "Property check", note: "10 >= 5, 3; 5 >= 4, 1 - valid max-heap" },
              ],
            },
            examQuestions: [
              {
                q: "Define a max-heap and its array representation. Explain build-heap and derive its O(n) complexity, then trace heap sort on [4, 10, 3, 5, 1] and give its overall complexity and stability.",
                marks: 7,
                outline: [
                  "Heap property: parent >= children; complete tree; children 2i+1 / 2i+2.",
                  "Build-heap: sift down nodes n/2 - 1 .. 0.",
                  "O(n) argument: most nodes near leaves, short sifts; sum h * n / 2^h = O(n).",
                  "Sort trace: heap [10, 5, 3, 4, 1]; swap root 10 with last, sift; repeat.",
                  "Sequence of extracted maxima: 10, 5, 4, 3, 1.",
                  "n-1 extractions * O(log n) + O(n) build = O(n log n) all cases.",
                  "In place O(1) extra; UNSTABLE due to root swaps.",
                ],
              },
              {
                q: "In the array heap representation, where are the children and parent of node i, and why does the representation need a complete tree?",
                marks: 2,
                outline: ["Children 2i+1 and 2i+2; parent floor((i-1)/2).", "Completeness leaves no gaps, so indices are dense."],
              },
              {
                q: "Insert 12 into the max-heap [10, 5, 3, 4, 1] and show the result.",
                marks: 3,
                outline: ["Append at index 5.", "Sift-up: 12 > 5 swap, 12 > 10 swap.", "Result [12, 10, 3, 4, 1, 5]."],
              },
            ],
          },
          {
            number: "4.8",
            title: "Radix sort and the comparison of sorting methods",
            body: [
              "Radix sort abandons comparison entirely: it sorts by DIGITS. Take the maximum key to learn the number of digits d; then for each digit position from least significant to most significant, perform a STABLE sort of the whole array by that digit (counting sort with 10 buckets works perfectly). After the final pass the array is sorted. Stability is not optional - it is the theorem: the order set by earlier (less significant) digits must survive later passes, which is exactly what a stable sub-sort guarantees.",
              "Worked trace on [170, 45, 75, 90, 802, 24, 2, 66] (d = 3). Pass 1 (units): buckets by last digit -> [170, 90, 802, 2, 24, 45, 75, 66]. Pass 2 (tens): -> [802, 2, 24, 45, 66, 170, 75, 90]. Pass 3 (hundreds): -> [2, 24, 45, 66, 75, 90, 170, 802] - sorted. Each pass is O(n + k) with k = 10 buckets, so the total is O(d * (n + k)): linear in n when d is a small constant - strictly better asymptotically than any comparison sort's O(n log n) floor, because it extracts more information than a yes/no comparison.",
              "The cost model matters and is a favourite nuance question: d, the digit count, grows with the key magnitude (d = log_k of the max), so for unbounded integers radix sort is O(d * n) and comparison sorts catch up; the linear claim holds when keys fit in a machine word with fixed base. Counting sort (the pass engine) itself needs O(n + k) space and is only sensible for small k; radix generalises it to large key spaces at the cost of d passes. Radix sort is STABLE end to end (stable passes) and is genuinely used for sorting integers, fixed-length strings and card sorters of history.",
              "The master comparison table is the section's real exam currency - 'compare any four sorting algorithms on complexity, stability and space' is one of the most repeated questions in this course. Know these rows cold: bubble O(n^2)/stable/O(1); selection O(n^2)/unstable/O(1)/n-1 swaps; insertion O(n^2), best O(n)/stable/O(1); merge O(n log n) all cases/stable/O(n) space; quick O(n log n) average, O(n^2) worst/unstable/O(1) space; heap O(n log n) all cases/unstable/O(1); counting O(n + k)/stable/O(k); radix O(d(n + k))/stable/O(n + k). The decision heuristic worth quoting: default quicksort (introsort), stability or linked data -> merge sort, guaranteed bound in place -> heap sort, small integer keys -> radix/counting sort.",
            ],
            bullets: [
              "Radix sort: sort digit by digit, LSD to MSD, each pass a STABLE counting sort.",
              "Worked [170, 45, 75, 90, 802, 24, 2, 66]: units pass -> tens pass -> hundreds pass -> sorted.",
              "Stability of the sub-sort is what preserves earlier digit order - the theorem of the algorithm.",
              "Complexity O(d * (n + k)): linear in n for fixed d, beats the comparison-sort floor of O(n log n).",
              "Cost model nuance: d = log_k(max key), so unbounded keys erode the linear claim.",
              "Counting sort: O(n + k) time and space, needs a small key range k.",
              "Master table: bubble/selection/insertion O(n^2); merge guaranteed n log n but O(n) space; quick average champion; heap guaranteed n log n in place; counting/radix linear for small keys.",
              "Heuristic: quicksort default; merge for stability; heap for in-place guarantee; radix for integer keys.",
            ],
            table: {
              caption: "The master comparison - know every row for the exam.",
              headers: ["Algorithm", "Best", "Average", "Worst", "Space", "Stable"],
              rows: [
                ["Bubble (with flag)", "O(n)", "O(n^2)", "O(n^2)", "O(1)", "yes"],
                ["Selection", "O(n^2)", "O(n^2)", "O(n^2)", "O(1)", "no"],
                ["Insertion", "O(n)", "O(n^2)", "O(n^2)", "O(1)", "yes"],
                ["Merge", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "yes"],
                ["Quick", "O(n log n)", "O(n log n)", "O(n^2)", "O(log n) stack", "no"],
                ["Heap", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "no"],
                ["Counting", "O(n + k)", "O(n + k)", "O(n + k)", "O(n + k)", "yes"],
                ["Radix", "O(d(n + k))", "O(d(n + k))", "O(d(n + k))", "O(n + k)", "yes"],
              ],
            },
            keyTerms: [
              { term: "Radix sort", definition: "Non-comparative sort processing keys digit by digit with a stable sub-sort." },
              { term: "Counting sort", definition: "O(n + k) tally-based sort of keys in a small range; the engine inside each radix pass." },
              { term: "LSD / MSD radix", definition: "Least-significant-digit (classic, stable passes) vs most-significant-digit (bucket recursion) variants." },
              { term: "Comparison-sort lower bound", definition: "Any comparison sort needs O(n log n) comparisons in the worst case - radix evades it by not comparing." },
            ],
            callout: {
              type: "exam",
              title: "Stability is the theorem",
              body: "If asked WHY radix sort needs a stable inner sort: after the tens pass, keys equal in the tens digit must stay in the order the units pass established. An unstable inner sort would scramble earlier digit work and the final result would be wrong. One sentence, one mark - and it is the most-skipped mark in radix answers.",
            },
            diagram: {
              kind: "cycle",
              title: "One radix pass - bucket, collect, repeat",
              caption: "Each pass processes one digit position; repeat d times, LSD first.",
              steps: [
                { label: "Pick digit position", note: "units first, then tens, then hundreds" },
                { label: "Distribute into 10 buckets", note: "stable - keep arrival order" },
                { label: "Concatenate buckets 0..9", note: "back into one array" },
                { label: "Next digit position", note: "repeat until MSD done" },
                { label: "After last pass", note: "array fully sorted" },
              ],
            },
            examQuestions: [
              {
                q: "Explain radix sort. Trace it completely on [170, 45, 75, 90, 802, 24, 2, 66] and derive its complexity. Why must each pass be stable? Then compare any four sorting algorithms in a table on best/average/worst case, space and stability.",
                marks: 7,
                outline: [
                  "Method: d stable counting-sort passes, LSD to MSD.",
                  "Pass 1 (units): [170, 90, 802, 2, 24, 45, 75, 66].",
                  "Pass 2 (tens): [802, 2, 24, 45, 66, 170, 75, 90].",
                  "Pass 3 (hundreds): [2, 24, 45, 66, 75, 90, 170, 802].",
                  "Complexity: each pass O(n + k); total O(d * (n + k)).",
                  "Stability: preserves the order set by lower-digit passes - else the result scrambles.",
                  "Table: e.g. merge (n log n, O(n), stable) vs quick (n log n avg, O(1), unstable) vs heap (n log n, O(1), unstable) vs insertion (n^2, O(1), stable).",
                ],
              },
              {
                q: "Why does radix sort beat the O(n log n) comparison-sort lower bound?",
                marks: 2,
                outline: ["It never compares keys - it indexes digits.", "Information comes from the key's structure, not yes/no comparisons.", "O(d(n + k)) with constant d is linear in n."],
              },
              {
                q: "Which sort would you choose for (a) a nearly-sorted array, (b) guaranteed O(n log n) with no extra memory, (c) a million 4-digit integers?",
                marks: 3,
                outline: ["(a) Insertion sort - best O(n) on nearly sorted.", "(b) Heap sort - in place, guaranteed n log n.", "(c) Radix sort - d = 4 fixed passes, linear time."],
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Graphs and Hashing",
      summary:
        "Graph terminology and representations, BFS and DFS, the spanning-tree algorithms (Prim and Kruskal), Dijkstra's shortest paths, and hashing: hash functions, collision resolution by chaining and open addressing, and the load factor that decides everything.",
      chapter: {
        number: "05",
        title: "Networks and Direct Addressing",
        intro:
          "Unit V closes the course with the two structures that map the non-linear world: graphs (nodes plus arbitrary connections, explored by BFS/DFS and optimised by Prim, Kruskal and Dijkstra) and hashing (O(1) average lookup by computing a storage index directly, with collisions resolved by chaining or probing).",
        inOneBreath:
          "G = (V, E); directed vs undirected, weighted vs unweighted; adjacency matrix O(1) edge test but O(V^2) space, adjacency list O(V + E) space - the sparse-graph choice. BFS uses a queue and gives shortest paths in unweighted graphs; DFS uses a stack/recursion and detects cycles. Prim grows a tree from a vertex (best for dense graphs); Kruskal sorts edges and unions acyclically (sparse). Dijkstra relaxes with a priority queue - no negative edges. Hash: index = h(key); load factor alpha = n/m; chaining uses lists per bucket; open addressing probes linearly, quadratically or by double hashing.",
        sections: [
          {
            number: "5.1",
            title: "Graph terminology and types",
            body: [
              "A graph G = (V, E) is a set of vertices V and a set of edges E, each edge connecting a pair of vertices. Where trees impose hierarchy (one parent, no cycles), graphs are free: cycles allowed, any vertex may connect to any other, and there need not even be a path between two given vertices. The syllabus vocabulary: ADJACENT vertices share an edge; the DEGREE of a vertex counts its incident edges (in-degree and out-degree for directed graphs); a PATH is a sequence of distinct vertices joined by edges, with PATH LENGTH its edge count; a CYCLE is a path that returns to its start; a graph is CONNECTED when every pair of vertices has a path between them.",
              "Types by edge direction: an UNDIRECTED graph's edges are two-way (a road between cities); a DIRECTED graph's edges are one-way arcs (u -> v does not imply v -> u; the web's hyperlinks, task dependencies). Special directed shapes: a DAG (directed acyclic graph) underlies topological sorting and dependency resolution. Types by weighting: UNWEIGHTED edges are all equal (BFS shortest paths apply); WEIGHTED edges carry costs (distances, capacities - Dijkstra, Prim, Kruskal apply). One more dual worth knowing: the COMPLEMENT graph has exactly the edges the original lacks.",
              "Counting formulas anchor the definitions: a complete undirected graph K_n has n(n-1)/2 edges (every pair connected); a directed complete graph has n(n-1) arcs; a simple graph has no self-loops and no parallel edges. A graph with |V| vertices and |E| edges is SPARSE when |E| is close to |V| (few edges per vertex - road maps, social sparsity) and DENSE when |E| approaches V^2. The sparse/dense distinction decides the representation (section 5.2) and the algorithm choice (Kruskal for sparse, Prim for dense) - it is the classification that pays off three sections later.",
              "Applications make every term concrete: a road network is a weighted undirected graph (two-way streets, distances); the internet's router graph is weighted and directed; course prerequisites form a DAG; a state machine is a directed graph with labelled arcs; social networks are huge sparse undirected graphs whose neighbourhood structure BFS exploits. The exam question 'define graph and its terms with an example' is answered by drawing a labelled 4-5 vertex graph and annotating: adjacent pair, degree of each vertex, one path, one cycle, connected or not, sparse or dense - the drawing converts vocabulary into marks.",
            ],
            bullets: [
              "Graph G = (V, E): vertices plus edge pairs; unlike trees, cycles and disconnection are allowed.",
              "Adjacent vertices share an edge; degree = incident edge count (in/out for directed).",
              "Path = distinct vertices joined by edges; cycle = closed path; connected = all pairs reachable.",
              "Undirected (two-way) vs directed (arcs u -> v); DAG = directed with no cycles.",
              "Unweighted vs weighted: costs on edges enable Prim, Kruskal, Dijkstra.",
              "Complete graph K_n: n(n-1)/2 undirected edges; simple graph: no loops, no parallel edges.",
              "Sparse (|E| ~ |V|) vs dense (|E| ~ V^2) decides representation and algorithm choice.",
              "Examples: roads (weighted undirected), web hyperlinks (directed), prerequisites (DAG), social networks (sparse undirected).",
            ],
            table: {
              caption: "Graph vocabulary with a worked reference graph A-B, B-C, C-A, C-D.",
              headers: ["Term", "Value in the example"],
              rows: [
                ["Vertices / edges", "V = {A, B, C, D}; E = {AB, BC, CA, CD}"],
                ["Degree of C", "3 (edges to A, B, D); A and B have degree 2; D has degree 1"],
                ["Adjacent to A", "B and C"],
                ["Path A to D", "A - C - D, length 2"],
                ["Cycle", "A - B - C - A"],
                ["Connected?", "yes - every pair reachable"],
                ["Sparse or dense", "sparse - 4 edges vs max 6 for K_4"],
              ],
            },
            keyTerms: [
              { term: "Vertex / edge", definition: "The node and the connection between two nodes; G = (V, E) is the standard notation." },
              { term: "Degree", definition: "The number of edges incident to a vertex; in directed graphs split into in-degree and out-degree." },
              { term: "DAG", definition: "Directed acyclic graph - no directed cycles; the structure of dependencies and topological order." },
              { term: "Sparse / dense graph", definition: "Edges near V (sparse) or near V^2 (dense); drives representation and algorithm choice." },
            ],
            callout: {
              type: "exam",
              title: "Draw first, define second",
              body: "Terminology answers are graded faster and kinder when a labelled drawing anchors every definition. Sketch a 4-vertex graph with one cycle, then annotate degrees, a path, a cycle, connectivity. The picture takes thirty seconds and converts a list of definitions into a demonstrated understanding.",
            },
            diagram: {
              kind: "matrix",
              title: "The four graph families on two axes",
              caption: "Direction and weight - the two properties that select the algorithm.",
              axes: { x: "unweighted -> weighted", y: "undirected -> directed" },
              quadrants: [
                { label: "Undirected + weighted", note: "road networks; MST by Prim / Kruskal" },
                { label: "Directed + weighted", note: "router maps; shortest paths by Dijkstra (no negative edges)" },
                { label: "Undirected + unweighted", note: "social hops; BFS gives fewest edges" },
                { label: "Directed + unweighted", note: "task dependencies; DAG -> topological sort" },
              ],
            },
            examQuestions: [
              {
                q: "Define graph and explain the terms vertex, edge, degree, path, cycle, connected, sparse and dense, using a labelled example. Distinguish directed from undirected and weighted from unweighted graphs with one application of each.",
                marks: 7,
                outline: [
                  "G = (V, E) definition; contrast with trees (cycles allowed).",
                  "Draw example A-B, B-C, C-A, C-D.",
                  "Degrees: C has 3; D has 1.",
                  "Path A to D = A-C-D; cycle A-B-C-A; graph connected.",
                  "Sparse: 4 edges vs 6 max for K_4.",
                  "Directed vs undirected: arcs vs two-way; example web links vs roads.",
                  "Weighted vs unweighted: costs enable Dijkstra/Prim; BFS for unweighted.",
                ],
              },
              {
                q: "How many edges does the complete undirected graph K_6 contain? What about the directed complete graph on 6 vertices?",
                marks: 2,
                outline: ["Undirected: 6 * 5 / 2 = 15.", "Directed: 6 * 5 = 30 arcs."],
              },
              {
                q: "Why is a course-prerequisite structure a DAG rather than a general directed graph?",
                marks: 3,
                outline: [
                  "Prerequisites form a partial order.",
                  "A directed cycle would mean circular requirements - impossible to schedule.",
                  "Hence acyclic; topological order gives a valid study sequence.",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Graph representations: adjacency matrix and adjacency list",
            body: [
              "Two structures dominate. The ADJACENCY MATRIX is a V x V array where A[i][j] = 1 if an edge connects i and j (0 otherwise); weighted graphs store the weight (or 0/infinity for absence), undirected graphs are symmetric (A[i][j] = A[j][i]). Worked example, graph with edges 0-1, 0-2, 1-3: row 0 has 1s at columns 1 and 2; row 3 has a single 1 at column 1. The virtues: O(1) edge test ('is there an edge i-j?') and O(1) edge insertion/deletion. The vice: V^2 space ALWAYS - a 10,000-vertex road map with 30,000 edges burns 100 million cells to store 30,000 facts.",
              "The ADJACENCY LIST is an array of V linked lists, one per vertex, each holding its neighbours. The same example: list[0] = 1 -> 2; list[1] = 0 -> 3; list[2] = 0; list[3] = 1. Space is O(V + E) - proportional to what actually exists - which makes lists the default for sparse graphs (most real graphs). The trade: checking a specific edge takes O(degree of i) instead of O(1), and enumerating the neighbours of i costs O(degree i) - exactly what BFS, DFS, Prim and Dijkstra need, so the list is their natural home.",
              "The decision rule follows from the numbers: DENSE graph (E close to V^2) or repeated edge-membership queries -> adjacency matrix; SPARSE graph (E near V) or neighbour iteration -> adjacency list. Worked comparison for V = 1000, E = 5000: matrix 1,000,000 cells vs list about 6,000 nodes - a 166x memory gap, while for a dense graph with E = 400,000 the list's 401,000 nodes with pointer overhead roughly match the matrix, which then wins on the O(1) edge test. Also note directed graphs store each arc once; undirected store both directions (or use the symmetry trick).",
              "Both representations are exam staples. The matrix question: 'represent the given graph as an adjacency matrix' - draw the grid, mark symmetry for undirected, and quote V^2 space. The list question: 'represent it as adjacency lists' - draw V rows of linked chains, quote O(V + E), and state the edge-test trade-off. The 7-mark version asks for BOTH plus the complexity comparison table and the sparse/dense decision rule; the strongest answers close with the application sentence: matrix for graph algorithms dense in edge queries (Floyd-Warshall, transitive closure), list for traversal-driven algorithms.",
            ],
            bullets: [
              "Adjacency matrix: V x V grid, A[i][j] = 1 (or weight) for an edge; undirected graphs are symmetric.",
              "Worked edges 0-1, 0-2, 1-3: row 0 = [0, 1, 1, 0], row 3 = [0, 1, 0, 0].",
              "Matrix costs: O(1) edge test and update; O(V^2) space ALWAYS - independent of E.",
              "Adjacency list: array of V linked lists of neighbours.",
              "Same example: list[0] = 1 -> 2; list[1] = 0 -> 3; list[2] = 0; list[3] = 1.",
              "List costs: O(V + E) space; edge test O(degree); neighbour scan O(degree) - ideal for BFS/DFS.",
              "Decision: dense or edge-query-heavy -> matrix; sparse or traversal-heavy -> list.",
              "V = 1000, E = 5000: 1,000,000 matrix cells vs about 6,000 list nodes - the sparse case is a rout.",
            ],
            table: {
              caption: "Adjacency matrix for edges 0-1, 0-2, 1-3 (undirected).",
              headers: ["From \\ To", "0", "1", "2", "3"],
              rows: [
                ["0", "0", "1", "1", "0"],
                ["1", "1", "0", "0", "1"],
                ["2", "1", "0", "0", "0"],
                ["3", "0", "1", "0", "0"],
              ],
            },
            keyTerms: [
              { term: "Adjacency matrix", definition: "V x V boolean (or weight) array with O(1) edge tests and V^2 space." },
              { term: "Adjacency list", definition: "Array of per-vertex neighbour lists with O(V + E) space - the sparse-graph default." },
              { term: "Symmetric matrix", definition: "An undirected graph's matrix satisfies A[i][j] = A[j][i]." },
            ],
            callout: {
              type: "tip",
              title: "Answer with the numbers",
              body: "Representation questions want the space arithmetic, not just names. Write both formulas - V^2 and V + E - and instantiate them once (V = 1000, E = 5000). The concrete 166x gap is the argument that earns the comparison marks; abstract sentences earn half.",
            },
            diagram: {
              kind: "compare",
              title: "Adjacency matrix vs adjacency list",
              caption: "The O(1) edge test against O(V + E) space - pick per graph shape.",
              left: {
                heading: "Adjacency matrix",
                items: [
                  "V x V grid of 0/1 or weights",
                  "edge test in O(1)",
                  "space O(V^2) regardless of edges",
                  "symmetric for undirected graphs",
                  "best for dense graphs and Floyd-Warshall",
                ],
              },
              right: {
                heading: "Adjacency list",
                items: [
                  "array of per-vertex neighbour chains",
                  "edge test O(degree of vertex)",
                  "space O(V + E)",
                  "neighbour iteration is natural",
                  "best for sparse graphs, BFS / DFS / Dijkstra",
                ],
              },
            },
            examQuestions: [
              {
                q: "Represent the graph with vertices 0..3 and edges 0-1, 0-2, 1-3 as (a) an adjacency matrix and (b) adjacency lists. Compare the two on space and edge-query complexity, and state when each is preferred.",
                marks: 7,
                outline: [
                  "Matrix grid: rows [0,1,1,0], [1,0,0,1], [1,0,0,0], [0,1,0,0].",
                  "Symmetric - undirected graph.",
                  "Lists: 0 -> 1 -> 2; 1 -> 0 -> 3; 2 -> 0; 3 -> 1.",
                  "Matrix space O(V^2) = 16 cells here; edge test O(1).",
                  "List space O(V + E) = 7 + 4 heads; edge test O(degree).",
                  "Instantiate V = 1000, E = 5000: 10^6 vs ~6 * 10^3 cells.",
                  "Dense / query-heavy -> matrix; sparse / traversal -> list.",
                ],
              },
              {
                q: "What changes in each representation for a DIRECTED graph?",
                marks: 2,
                outline: ["Matrix loses symmetry - arc u->v sets only A[u][v].", "Lists store the arc only in the source's list."],
              },
              {
                q: "Why do BFS and DFS prefer adjacency lists even when the graph is dense?",
                marks: 3,
                outline: [
                  "Both algorithms scan every neighbour list exactly once.",
                  "Total scan time is O(V + E) with lists.",
                  "With a matrix each vertex's scan costs O(V), giving O(V^2) even for few edges.",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Graph traversal: breadth-first search and depth-first search",
            body: [
              "BFS explores a graph in RINGS around the source: visit the source, then all vertices at distance 1, then distance 2, and so on. Mechanism: a QUEUE holds the frontier - dequeue a vertex, enqueue its unvisited neighbours, mark them visited AT ENQUEUE TIME (the guard against duplicates). Worked trace, graph 0-1, 0-2, 1-3, 2-3, 3-4, source 0: visit 0, enqueue 1, 2; dequeue 1 -> enqueue 3; dequeue 2 -> 3 already visited; dequeue 3 -> enqueue 4; dequeue 4 - order 0, 1, 2, 3, 4. The queue guarantees vertices are processed in nondecreasing distance from the source.",
              "That ring property is BFS's theorem: in an UNWEIGHTED graph, BFS computes the shortest path (fewest edges) from the source to every vertex - parent pointers recorded at enqueue time reconstruct the path. Complexity O(V + E) with adjacency lists (every vertex enqueued once, every edge examined a constant number of times) and O(V) queue space in the worst case (the last ring). Applications: shortest unweighted paths, level structure, connectivity checks, and - on trees - exactly the level-order traversal of section 3.6.",
              "DFS goes DEEP before wide: from the current vertex, recursively (or via an explicit stack) walk to one unvisited neighbour, and only when a dead end is reached backtrack to the most recent vertex with unexplored options. Worked trace on the same graph from 0: 0 -> 1 -> 3 -> 2 (3's first unvisited neighbour is 2; 2's neighbour 0 is visited) -> back to 3 -> 4. Order 0, 1, 3, 2, 4 - deeper earlier than BFS. Mark-on-VISIT is the DFS guard; complexity also O(V + E) with O(h) stack space (up to V on a path graph).",
              "DFS's payoff is structural, not metric: it discovers BACK EDGES, and a back edge to an ancestor is exactly a cycle - so DFS is the cycle detector, the engine of topological sorting on DAGs (finish order reversed), of connected-component identification, and of maze solving. The comparison in one line: BFS = queue, ring order, shortest unweighted paths; DFS = stack/recursion, deep order, cycle and structure detection. Both O(V + E) time. The exam 7-marker: give both algorithms, trace both on the same 5-vertex graph from the same source, tabulate queue-vs-stack and the distance/order difference, and state complexities - the shared-source trace makes the contrast visible.",
            ],
            bullets: [
              "BFS: queue-driven ring expansion; mark neighbours visited when enqueued.",
              "Trace from 0 on graph 0-1, 0-2, 1-3, 2-3, 3-4: order 0, 1, 2, 3, 4.",
              "BFS theorem: on unweighted graphs it yields shortest paths; parent pointers rebuild them.",
              "DFS: stack / recursion; go deep, backtrack at dead ends; mark on visit.",
              "Trace from 0 on the same graph: order 0, 1, 3, 2, 4.",
              "DFS finds back edges -> cycle detection, topological sort (reverse finish order), components.",
              "Both O(V + E) with adjacency lists; BFS worst-case queue O(V), DFS stack O(h) up to O(V).",
              "One-line contrast: BFS = shortest rings (queue); DFS = structural depth (stack).",
            ],
            codeExample: {
              language: "c",
              caption: "BFS with an explicit queue over adjacency lists",
              code: `void bfs(struct Node *adj[], int V, int src) {
    int visited[100] = {0}, queue[100], front = 0, rear = -1;
    visited[src] = 1;
    queue[++rear] = src;             /* mark at enqueue time */
    while (front <= rear) {
        int u = queue[front++];      /* dequeue - FIFO ring order */
        printf("%d ", u);
        for (struct Node *p = adj[u]; p; p = p->next)
            if (!visited[p->data]) {
                visited[p->data] = 1;
                queue[++rear] = p->data;
            }
    }
}
/* O(V + E) time; also the shortest-path algorithm for unweighted graphs */`,
            },
            keyTerms: [
              { term: "Frontier", definition: "The set of discovered-but-unexplored vertices; BFS keeps it in a queue, DFS in a stack." },
              { term: "Back edge", definition: "A DFS edge to an ancestor still on the recursion stack - its presence signals a cycle." },
              { term: "Level / distance", definition: "The number of edges from the source; BFS visits levels in increasing order." },
            ],
            callout: {
              type: "exam",
              title: "Trace both from the SAME source",
              body: "The comparison question is answered best by tracing BFS and DFS from the same vertex on the same graph - the differing visit orders then demonstrate the queue-vs-stack effect without any abstract talk. Also state the marking discipline: BFS marks at enqueue, DFS marks at visit; mixing them creates duplicate-enqueue bugs examiners watch for.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing the frontier container decides the traversal",
              caption: "Same graph, same source - the data structure alone changes the visit order and the guarantees.",
              start: "Take the next frontier vertex",
              branches: [
                { label: "Queue (FIFO)", outcome: "ring order by distance -> shortest unweighted paths (BFS)", good: true },
                { label: "Stack / recursion (LIFO)", outcome: "deep-first order -> cycle detection, topological sort (DFS)", good: true },
                { label: "Visited check missing", outcome: "infinite loop on any cycle - the classic traversal bug", good: false },
              ],
            },
            examQuestions: [
              {
                q: "Explain BFS and DFS. Trace both from vertex 0 on the graph with edges 0-1, 0-2, 1-3, 2-3, 3-4, give the complexities, and state which one finds shortest paths in an unweighted graph and why.",
                marks: 7,
                outline: [
                  "BFS: queue, mark at enqueue, ring order.",
                  "Trace BFS: 0, 1, 2, 3, 4.",
                  "DFS: stack/recursion, mark at visit, deep first with backtracking.",
                  "Trace DFS: 0, 1, 3, 2, 4.",
                  "Both O(V + E) time with adjacency lists.",
                  "BFS queue space O(V); DFS stack O(h) up to O(V).",
                  "BFS gives shortest unweighted paths because vertices leave the queue in nondecreasing distance order.",
                ],
              },
              {
                q: "How does DFS detect a cycle in a directed graph?",
                marks: 2,
                outline: ["A back edge to a vertex still on the recursion stack.", "Encountering a grey (in-progress) vertex means a cycle."],
              },
              {
                q: "Why must BFS mark vertices at enqueue time rather than dequeue time?",
                marks: 3,
                outline: [
                  "A vertex can be reachable from several frontier vertices.",
                  "Dequeue-time marking enqueues it multiple times.",
                  "Enqueue-time marking keeps each vertex once - correct and linear.",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Minimum spanning tree: Prim's algorithm",
            body: [
              "A spanning tree of a connected undirected graph is a subgraph with exactly V - 1 edges that connects all vertices (no cycles); a MINIMUM spanning tree (MST) is the spanning tree of least total edge weight. MSTs answer the cheapest-network question: laying cable, roads or pipes connecting all sites at minimum cost. Two facts drive the algorithms: cutting a graph into two parts always has a minimum-weight crossing edge that some MST uses (the cut property), and MSTs are unique when edge weights are distinct.",
              "Prim's algorithm GROWS one tree from a start vertex: at every step, add the minimum-weight edge that connects the tree to a vertex OUTSIDE it; the newcomer joins the tree; repeat until V - 1 edges are absorbed. It is greedy, justified by the cut property - the chosen crossing edge is always safe. Implementation options: naive scan of all crossing edges is O(V^2) total (fine for dense graphs); a priority queue keyed by each outside vertex's cheapest connection gives O(E log V) (better for sparse).",
              "Worked trace. Graph: vertices A..E; edges AB = 2, AC = 3, BC = 1, BD = 4, CD = 5, CE = 6, DE = 7. Start at A (tree {A}). Cheapest crossing edge: AB = 2 -> tree {A, B}. Crossing edges now AC = 3, BC = 1, BD = 4: pick BC = 1 -> tree {A, B, C}. Crossing: AC out (both inside), BD = 4, CD = 5, CE = 6: pick BD = 4 -> tree {A, B, C, D}. Crossing: CE = 6, DE = 7: pick CE = 6 -> tree {A, B, C, D, E}. MST edges: AB(2), BC(1), BD(4), CE(6); total weight 13. Every step's table (tree set, candidate crossing edges, chosen edge) is the exam presentation.",
              "Complexity and comparison: Prim with a binary heap is O(E log V); the O(V^2) array version is the classic dense-graph choice because it needs no heap. Prim builds ONE connected tree throughout - it always yields a tree at every intermediate stage - and it handles dense graphs gracefully. Its rival Kruskal (next section) sorts all edges instead and works forest-first. The exam 7-marker: define spanning tree and MST, state the cut property as the correctness argument, present Prim's steps, run the table trace above, and give O(V^2) / O(E log V) complexities with the dense-vs-sparse comment.",
            ],
            bullets: [
              "Spanning tree: V - 1 edges connecting all vertices, no cycles; MST minimises total weight.",
              "Cut property: the minimum-weight edge crossing any cut belongs to some MST - Prim's licence to be greedy.",
              "Prim: start anywhere; repeatedly add the cheapest edge from the tree to an outside vertex.",
              "Trace: start A; AB(2); BC(1); BD(4); CE(6) - MST weight 13 over edges AB, BC, BD, CE.",
              "Intermediate stages are always one connected tree (vs Kruskal's forest until the end).",
              "Complexity: O(V^2) with array scan (dense graphs); O(E log V) with a priority queue (sparse).",
              "Greedy correctness: every addition is the safe crossing edge, so no later repair is needed.",
              "Prim handles connected undirected weighted graphs; disconnection means no spanning tree exists.",
            ],
            table: {
              caption: "Prim trace on the A..E example, started at A.",
              headers: ["Step", "Tree vertices", "Cheapest crossing edge", "Weight"],
              rows: [
                ["1", "A", "A-B", "2"],
                ["2", "A, B", "B-C", "1"],
                ["3", "A, B, C", "B-D", "4"],
                ["4", "A, B, C, D", "C-E", "6"],
                ["done", "A..E", "MST = AB, BC, BD, CE", "13"],
              ],
            },
            keyTerms: [
              { term: "Spanning tree", definition: "A V-1-edge acyclic subgraph touching every vertex of a connected graph." },
              { term: "Cut property", definition: "The lightest edge crossing any partition of the vertices is in some MST - justifies greedy choices." },
              { term: "Greedy algorithm", definition: "Makes the locally optimal choice each step; valid here because each crossing minimum is provably safe." },
            ],
            callout: {
              type: "exam",
              title: "Show the crossing-edge candidates",
              body: "Prim answers lose marks when only the chosen edges are listed. The table must show, at each step, the CANDIDATE crossing edges and their weights - that is what proves you ran Prim rather than guessed an MST. Four rows of candidates plus the final weight sum is the complete answer.",
            },
            diagram: {
              kind: "flow",
              title: "Prim's growth loop on the A..E graph",
              caption: "One tree, one cheapest crossing edge at a time - weight 13 at the end.",
              steps: [
                { label: "Start at A", note: "tree = {A}" },
                { label: "Add AB (2)", note: "tree = {A, B}" },
                { label: "Add BC (1)", note: "tree = {A, B, C}" },
                { label: "Add BD (4)", note: "tree = {A, B, C, D}" },
                { label: "Add CE (6)", note: "all 5 vertices; total 13" },
              ],
            },
            examQuestions: [
              {
                q: "Define spanning tree and MST. State the cut property. Run Prim's algorithm from vertex A on the graph with edges AB=2, AC=3, BC=1, BD=4, CD=5, CE=6, DE=7, showing candidates at each step, and give the algorithm's complexities.",
                marks: 7,
                outline: [
                  "Spanning tree: V-1 edges, connected, acyclic; MST = minimum total weight.",
                  "Cut property: lightest edge across any cut is safe - greedy justification.",
                  "Step 1: tree {A}, pick AB = 2.",
                  "Step 2: tree {A, B}, candidates AC 3, BC 1, BD 4 -> BC = 1.",
                  "Step 3: candidates BD 4, CD 5, CE 6 -> BD = 4.",
                  "Step 4: candidates CE 6, DE 7 -> CE = 6; total 13.",
                  "Complexities: O(V^2) array scan for dense, O(E log V) with heap for sparse.",
                ],
              },
              {
                q: "Does Prim's algorithm require the graph to be connected? What if it is not?",
                marks: 2,
                outline: ["Yes - a spanning tree exists only for connected graphs.", "On a disconnected graph Prim yields a spanning tree of one component only."],
              },
              {
                q: "Why is Prim preferred over Kruskal for dense graphs?",
                marks: 3,
                outline: [
                  "Kruskal must sort all E edges: O(E log E).",
                  "Prim's array version is O(V^2), independent of E.",
                  "Dense E ~ V^2 makes V^2 the smaller bound.",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Minimum spanning tree: Kruskal's algorithm and cycle detection",
            body: [
              "Kruskal takes the opposite route to Prim: instead of growing one tree, it considers ALL edges globally sorted by weight and builds a forest. Algorithm: sort the E edges ascending; scan them in order; accept an edge if and only if it does NOT create a cycle with the edges already accepted; stop after V - 1 acceptances. The greedy licence is again the cut property - when an edge joins two different components, taking the lightest such edge is safe.",
              "Worked trace on the same graph (AB = 2, AC = 3, BC = 1, BD = 4, CD = 5, CE = 6, DE = 7). Sorted: BC 1, AB 2, AC 3, BD 4, CD 5, CE 6, DE 7. BC: no cycle -> accept. AB: no cycle -> accept. AC: A and C are already connected (A-B-C) -> REJECT (cycle). BD: connects D -> accept. CD: both connected -> reject. CE: connects E -> accept. Four acceptances for five vertices - done. MST = {BC, AB, BD, CE}, weight 13: identical to Prim's answer, as MST theory guarantees when weights allow a unique tree.",
              "Cycle detection is the implementation question and the Union-Find (disjoint set) ADT is the answer: maintain components as sets; an edge (u, v) creates a cycle exactly when u and v are already in the SAME set; accepting the edge UNIONS the two sets. FIND(x) returns a component representative; UNION(x, y) merges components. With union-by-rank and path compression both operations run in nearly constant amortized time (inverse-Ackermann), giving Kruskal a total of O(E log E) - dominated by the initial sort, since the E union-find operations are effectively linear.",
              "The Prim-Kruskal decision: Kruskal sorts all edges first - O(E log E) - and shines on SPARSE graphs (E close to V, so the sort is cheap) and when edges arrive in a stream; Prim grows locally and shines on DENSE graphs with the O(V^2) array version. The exam 7-marker: state the algorithm, trace the sorted scan with explicit accept/reject reasoning per edge (the reject reasons - 'A and C already connected via A-B-C' - are the graded content), present union-find with find/union, and give O(E log E) complexity plus the dense/sparse comparison against Prim. The one-line summary: Prim grows a tree, Kruskal merges a forest.",
            ],
            bullets: [
              "Kruskal: sort all edges by weight; accept an edge iff it joins two different components; stop at V - 1 edges.",
              "Trace: sorted BC 1, AB 2, AC 3, BD 4, CD 5, CE 6, DE 7.",
              "Accept BC, AB; REJECT AC (A and C already connected through A-B-C); accept BD; reject CD; accept CE.",
              "MST = BC, AB, BD, CE, weight 13 - same tree Prim produced.",
              "Cycle test via Union-Find: edge creates a cycle iff find(u) == find(v).",
              "UNION merges the two components; union-by-rank + path compression make find/union near-constant amortized.",
              "Complexity O(E log E) for the sort - union-find work is effectively linear.",
              "Sparse graphs and streamed edges -> Kruskal; dense graphs -> Prim's O(V^2). Summary: Prim grows a tree, Kruskal merges a forest.",
            ],
            codeExample: {
              language: "c",
              caption: "Union-Find with path compression - the cycle oracle",
              code: `int parent[100];
int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];   /* path compression */
        x = parent[x];
    }
    return x;
}
void unite(int a, int b) {
    parent[find(a)] = find(b);          /* merge components */
}
/* Kruskal loop: sort edges; for each edge (u, v, w):
   if (find(u) != find(v)) { accept edge; unite(u, v); } */`,
            },
            keyTerms: [
              { term: "Union-Find (disjoint set)", definition: "ADT maintaining component sets with find (representative query) and union (merge) - Kruskal's cycle detector." },
              { term: "Path compression", definition: "find() re-parents visited nodes directly to the representative, flattening the trees." },
              { term: "Accept / reject scan", definition: "Kruskal's single sorted pass over edges, keeping each edge only if it joins distinct components." },
            ],
            callout: {
              type: "exam",
              title: "Rejects are the marks",
              body: "Kruskal traces are graded on the REJECTED edges. For every rejected edge write WHY: 'AC rejected - A and C already connected via A-B-C'. An answer that only lists the accepted edges proves nothing about the algorithm. Also state the termination condition: V - 1 accepted edges, not 'the list is exhausted'.",
            },
            diagram: {
              kind: "pipeline",
              title: "Kruskal's pipeline on the A..E graph",
              caption: "Sort once, scan once, union-find guards every acceptance.",
              stages: [
                { label: "Sort edges by weight", note: "BC 1, AB 2, AC 3, BD 4, ..." },
                { label: "Scan in order", note: "accept if components differ" },
                { label: "Cycle check", note: "find(u) == find(v) -> reject (AC, CD)" },
                { label: "Union on accept", note: "BC, AB, BD, CE accepted" },
                { label: "Stop at V - 1 = 4 edges", note: "MST weight 13" },
              ],
            },
            examQuestions: [
              {
                q: "Explain Kruskal's algorithm. Trace it on the graph with edges AB=2, AC=3, BC=1, BD=4, CD=5, CE=6, DE=7 showing every accept/reject decision, describe the Union-Find structure used for cycle detection, and derive the complexity.",
                marks: 7,
                outline: [
                  "Sort edges ascending: BC 1, AB 2, AC 3, BD 4, CD 5, CE 6, DE 7.",
                  "Accept BC; accept AB.",
                  "Reject AC - A, C already connected through A-B-C.",
                  "Accept BD; reject CD; accept CE -> 4 edges = V - 1, stop.",
                  "MST = BC, AB, BD, CE with weight 13.",
                  "Union-Find: find returns the component representative; cycle iff find(u) == find(v); union merges.",
                  "O(E log E) sort dominates; union-find with rank + path compression near-linear.",
                ],
              },
              {
                q: "When an edge (u, v) is scanned, what is the exact cycle condition in union-find terms?",
                marks: 2,
                outline: ["find(u) == find(v) means u and v share a component.", "Adding the edge would close a cycle - reject."],
              },
              {
                q: "Why do Prim and Kruskal always return the same total weight?",
                marks: 3,
                outline: [
                  "Both are correct greedy algorithms for the same optimisation problem.",
                  "The cut property guarantees each greedy step stays extendable to an MST.",
                  "With distinct weights the MST is unique; with ties, weights still match.",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Shortest paths: Dijkstra's algorithm",
            body: [
              "Dijkstra computes the shortest path from a single SOURCE to every other vertex in a weighted graph with NON-NEGATIVE edge weights. It maintains an estimate dist[v] for each vertex (infinity except the source at 0) and repeatedly finalises the closest unfinalised vertex: extract u with minimum dist, mark it final - its distance is now provably correct - and RELAX its outgoing edges: for each neighbour v, if dist[u] + w(u, v) < dist[v], update dist[v] and record u as v's parent. A priority queue (min-heap) over unfinished vertices makes each extraction O(log V).",
              "Why non-negative weights matter is the theorem: when u is extracted with the smallest tentative distance, no future path can be shorter - any path to u through a not-yet-final vertex would already cost more (it passes through a vertex with dist >= dist[u] and then adds more non-negative edges). Negative edges break exactly this argument, which is why Bellman-Ford (O(V * E), tolerates negatives) exists beyond the syllabus. The exam question 'why does Dijkstra fail on negative edges' wants this two-sentence argument with a tiny counter-example sketch.",
              "Worked trace. Graph: A->B = 4, A->C = 2, C->B = 1, B->D = 5, C->D = 8, source A. Init dist: A 0, others inf. Extract A: relax B -> 4 (parent A), C -> 2 (parent A). Extract C (2): relax B -> min(4, 2 + 1) = 3 (parent C); relax D -> 10. Extract B (3): relax D -> min(10, 3 + 5) = 8 (parent B). Extract D (8): no outgoing. Final: A 0, C 2, B 3, D 8; path to D: D <- B <- C <- A = A-C-B-D with cost 2 + 1 + 5 = 8. Note the instructive moment: A->B direct (4) was beaten by the two-hop A-C-B (3) - greedy extraction, not greedy edges.",
              "Complexity: O((V + E) log V) with a binary-heap priority queue; O(V^2) with the simple array scan (fine for dense graphs); BFS is the unweighted special case (all weights 1, a plain queue suffices). Applications: navigation and routing, network latency maps, game pathfinding. The exam package: state the algorithm and the non-negativity requirement, run the table trace (per step: extracted vertex, updated dists, parents), give the complexity variants, and reconstruct one path via parent pointers. The relaxation step written as an if-condition is the code-level detail examiners look for.",
            ],
            bullets: [
              "Single-source shortest paths on weighted graphs WITHOUT negative edges.",
              "State: dist[] estimates (source 0, rest infinity) + parent[] pointers + finalised set.",
              "Loop: extract the minimum-dist unfinished vertex, finalise it, relax its outgoing edges.",
              "Relaxation: if dist[u] + w(u, v) < dist[v] then dist[v] = dist[u] + w(u, v); parent[v] = u.",
              "Trace (source A): extract A -> B 4, C 2; extract C -> B 3, D 10; extract B -> D 8; final dists 0, 3, 2, 8.",
              "Path reconstruction via parents: D <- B <- C <- A; cost 2 + 1 + 5 = 8.",
              "Correctness: at extraction no cheaper path can exist - requires non-negative weights.",
              "Complexity O((V + E) log V) with a heap, O(V^2) with array scan; unweighted case = BFS.",
            ],
            table: {
              caption: "Dijkstra trace, source A, on A->B=4, A->C=2, C->B=1, B->D=5, C->D=8.",
              headers: ["Extracted", "dist A", "dist B", "dist C", "dist D", "Updates"],
              rows: [
                ["A (0)", "0", "4", "2", "inf", "B and C relaxed from A"],
                ["C (2)", "0", "3", "2", "10", "B improved 4 -> 3 via C; D set 10"],
                ["B (3)", "0", "3", "2", "8", "D improved 10 -> 8 via B"],
                ["D (8)", "0", "3", "2", "8", "done - parents: B<-C, C<-A, D<-B"],
              ],
            },
            keyTerms: [
              { term: "Relaxation", definition: "Testing whether going through u shortens the estimate of v; the core update of all shortest-path algorithms." },
              { term: "Finalised vertex", definition: "A vertex whose dist is provably minimal; Dijkstra finalises exactly one vertex per extraction." },
              { term: "Non-negative weights", definition: "The precondition of Dijkstra's greedy correctness; negative edges require Bellman-Ford." },
            ],
            callout: {
              type: "exam",
              title: "The negative-edge trap",
              body: "If a paper gives Dijkstra a graph with a negative edge, the expected answer is to SAY SO: the algorithm's finalisation argument collapses (a later vertex might cheapen an 'already-final' dist) and the trace becomes untrustworthy. State the violation, sketch why, and mention Bellman-Ford as the correct tool - that is the full-mark response, not a doomed trace.",
            },
            diagram: {
              kind: "cycle",
              title: "Dijkstra's loop, one finalisation per iteration",
              caption: "Extract the closest, finalise it, relax its edges - repeat until all vertices are final.",
              steps: [
                { label: "Extract min-dist vertex", note: "from the priority queue" },
                { label: "Finalise it", note: "dist now provably minimal" },
                { label: "Relax outgoing edges", note: "dist[v] = min(dist[v], dist[u] + w)" },
                { label: "Update parents", note: "for path reconstruction" },
                { label: "Repeat", note: "until every vertex is finalised" },
              ],
            },
            examQuestions: [
              {
                q: "Explain Dijkstra's algorithm. Trace it from source A on the graph A->B=4, A->C=2, C->B=1, B->D=5, C->D=8, reconstruct the shortest path to D, and explain why negative edge weights break the algorithm.",
                marks: 7,
                outline: [
                  "State: dist[], parent[], priority queue of unfinished vertices.",
                  "Extract A: dist B = 4, C = 2.",
                  "Extract C: B improves 4 -> 3 via C; D = 10.",
                  "Extract B: D improves 10 -> 8; extract D: done.",
                  "Dists: A 0, C 2, B 3, D 8.",
                  "Path to D: A -> C -> B -> D, cost 2 + 1 + 5 = 8.",
                  "Negative edge breaks finalisation: a longer path through an unfinalised vertex could still get cheaper.",
                ],
              },
              {
                q: "Which data structure gives Dijkstra its O((V + E) log V) bound, and what does the simple version cost?",
                marks: 2,
                outline: ["Min-heap priority queue.", "Array-scan version: O(V^2) - preferable on dense graphs."],
              },
              {
                q: "Why is BFS the special case of Dijkstra for unweighted graphs?",
                marks: 3,
                outline: [
                  "All weights equal (say 1): the tentative distances are exactly ring levels.",
                  "Every extraction picks the shallowest frontier vertex.",
                  "A FIFO queue implements that ordering - BFS is Dijkstra with a queue.",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Hashing: hash functions and the hash table",
            body: [
              "Hashing trades search for ARITHMETIC: instead of comparing keys against stored items, compute the storage index directly from the key. A hash table is an array of m buckets plus a hash function h(key) mapping keys to bucket indices; inserting stores the item at A[h(key)], searching goes straight to A[h(key)] - O(1) average, independent of how many items are stored. This is the asymptotic leap that every dictionary, symbol table, cache index and database hash join is built on.",
              "Standard hash functions for integer keys. Division method: h(k) = k mod m - simplest, best when m is PRIME and unrelated to key patterns (m = 10 is terrible: last-digit keys cluster; m = 7 or a prime near the table size distributes well). Multiplication method: h(k) = floor(m * (k * C mod 1)) with a golden-ratio-ish constant C - mixes digits so consecutive keys scatter. Mid-square: square the key, take middle digits. For strings: polynomial rolling hash, h = (h * 31 + char) mod m, where 31 is the classic multiplier - 'hash of hash of...' over the characters. The exam question 'properties of a good hash function' expects: uniform distribution over the table, deterministic, fast to compute, minimises clustering, and maps equal keys to equal indices while spreading similar keys apart.",
              "The inevitable problem is the PIGEONHOLE: with more possible keys than m buckets, distinct keys can map to the same index - a COLLISION. Collisions are not a bug but a certainty (birthday paradox: even a half-full table collides frequently), so the design question is not 'avoid collisions' but 'resolve them cheaply' - chaining and open addressing, the subject of section 5.8. What a good hash function CAN control is the collision RATE: uniformity keeps bucket occupancies balanced, so the expected chain (or probe run) stays short.",
              "The metric that governs everything is the LOAD FACTOR alpha = n / m (items stored / bucket count). With chaining, average search cost is about 1 + alpha; with open addressing it degrades sharply past alpha = 0.7. Practical rule: keep alpha under about 0.75 and RESIZE (rehash everything into a bigger table, typically doubling m) when exceeded - one expensive O(n) rehash buys the next epoch of O(1) operations, amortized. Worked example: keys 12, 25, 33 into m = 7 with h(k) = k mod 7: 12 -> 5, 25 -> 4, 33 -> 5 - collision at index 5, which section 5.8 resolves. The exam package: define hashing, list hash functions with the m-prime rule, prove collisions unavoidable, define alpha and the resize policy.",
            ],
            bullets: [
              "Hash table: array of m buckets + function h(key) -> index; lookup by computation, O(1) average.",
              "Division method h(k) = k mod m - m should be PRIME and unrelated to key patterns.",
              "Multiplication method: h(k) = floor(m * (k * C mod 1)); mid-square as an alternative.",
              "String hashing: polynomial rolling hash h = (h * 31 + char) mod m.",
              "Good hash function: deterministic, fast, uniform spread, minimises clustering.",
              "Collisions are unavoidable - more keys than buckets (pigeonhole principle).",
              "Worked: keys 12, 25, 33 with h(k) = k mod 7 -> 5, 4, 5: collision at index 5.",
              "Load factor alpha = n / m governs cost; keep <= 0.75 and rehash (double m) when exceeded.",
            ],
            table: {
              caption: "Hash functions at a glance.",
              headers: ["Method", "Formula", "Best when"],
              rows: [
                ["Division", "h(k) = k mod m", "m prime, keys integers"],
                ["Multiplication", "h(k) = floor(m * (k * C mod 1))", "key patterns present; C ~ golden ratio"],
                ["Mid-square", "square k, take middle digits", "keys uniformly distributed"],
                ["Polynomial rolling", "h = (h * 31 + c) mod m per character", "string keys"],
              ],
            },
            keyTerms: [
              { term: "Hash function", definition: "Deterministic map from keys to bucket indices, designed for speed and uniform spread." },
              { term: "Collision", definition: "Two distinct keys hashing to the same bucket - unavoidable by the pigeonhole principle." },
              { term: "Load factor alpha", definition: "n / m - items per bucket; the parameter controlling expected lookup cost and the resize trigger." },
              { term: "Rehashing", definition: "Rebuilding the table with a larger m and re-inserting every item - amortized O(1) per operation." },
            ],
            callout: {
              type: "exam",
              title: "m mod 10 is the planted trap",
              body: "Papers love h(k) = k mod 10 with keys sharing last digits. The expected observation: a power-of-ten modulus ignores all but the last digit, so keys 12, 22, 32, 42 all collide at 2 - clustering. Say 'choose m prime (or at least coprime to key patterns)' and you have the analysis mark, not just the trace.",
            },
            diagram: {
              kind: "compare",
              title: "Good hash function vs bad hash function",
              caption: "Uniformity is the entire game - the table below shows what clustering costs.",
              left: {
                heading: "Good: h(k) = k mod 7",
                items: [
                  "prime modulus, all digits matter",
                  "keys 12, 25, 33 -> 5, 4, 5",
                  "buckets near-evenly loaded",
                  "alpha stays meaningful as m grows",
                  "search ~ 1 + alpha comparisons",
                ],
              },
              right: {
                heading: "Bad: h(k) = k mod 10",
                items: [
                  "only the last digit matters",
                  "12, 22, 32, 42 all -> 2",
                  "long chains on some buckets",
                  "others empty - wasted space",
                  "search degrades toward O(n)",
                ],
              },
            },
            examQuestions: [
              {
                q: "What is hashing? Explain the hash table structure, discuss three hash functions with their formulas, prove that collisions are unavoidable, and define the load factor with the resize policy.",
                marks: 7,
                outline: [
                  "Hashing: compute the storage index from the key - O(1) average lookup.",
                  "Table = array of m buckets; item stored at index h(key).",
                  "Division h(k) = k mod m (m prime); multiplication with constant C; rolling hash for strings.",
                  "Properties of a good h: deterministic, fast, uniform, anti-clustering.",
                  "Pigeonhole argument: key space >> m, so distinct keys can share a bucket.",
                  "Worked: 12, 25, 33 with mod 7 -> 5, 4, 5 (collision at 5).",
                  "alpha = n / m; keep <= 0.75; rehash into a doubled table - amortized O(1).",
                ],
              },
              {
                q: "Compute h(k) = k mod 7 for keys 18, 55, 71, 7 and list the occupied indices.",
                marks: 2,
                outline: ["18 -> 4, 55 -> 6, 71 -> 1, 7 -> 0.", "No collisions here."],
              },
              {
                q: "Why should the modulus m be prime in the division method?",
                marks: 3,
                outline: [
                  "Composite m lets key patterns alias (e.g. mod 10 reads one digit).",
                  "Prime m mixes all key bits into the remainder.",
                  "Result: uniform spread, short chains.",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Collision resolution: chaining and open addressing",
            body: [
              "SEPARATE CHAINING makes each bucket a linked list: colliding keys simply join the bucket's chain - insert at the head (O(1)), search walks the chain comparing keys, delete unlinks a node. Worked example with m = 7, h(k) = k mod 7, insert 12, 25, 33, 5, 19: 12 -> bucket 5; 25 -> 4; 33 -> 5 (chain 12 -> 33); 5 -> 5 (chain 5 -> 33... head insert gives 5 -> 12 -> 33 depending on order); 19 -> 5. Bucket 5 holds four items; searching 33 walks until the key matches. Chains never overflow the table - alpha can exceed 1 - and deletion is trivial, the two structural advantages.",
              "OPEN ADDRESSING keeps all items INSIDE the array: on collision, probe alternative slots by a rule. LINEAR PROBING: try h(k), h(k)+1, h(k)+2, ... (mod m) until an empty slot. Worked with m = 7: insert 12 (slot 5), 25 (slot 4), 33 (slot 5 taken -> 6), 5 (slot 5, 6 taken -> 0), 19 (5, 6, 0 taken -> 1). The flaw is PRIMARY CLUSTERING: contiguous occupied runs grow and every key hashing into the run must walk its entire length - clusters compound. QUADRATIC PROBING (h + 1^2, h + 2^2, ...) breaks the runs but can waste slots when the table is more than half full; DOUBLE HASHING (probe stride from a second hash h2(k), coprime with m) eliminates both clusters and is the textbook best of the family.",
              "Open addressing's hidden cost is DELETION: removing an item from a probe chain breaks the chain - searches for keys placed after it would stop early at the hole. The fix is a TOMBSTONE: mark the slot DELETED rather than empty; searches skip tombstones but keep probing through them; insertions may reuse them. This is the classic trick question - 'why can't open addressing just set the slot to empty on delete?' - and the answer is exactly the broken probe chain. Chaining has no such problem; deleting a list node is safe by construction.",
              "The comparison closes the unit. Chaining: alpha can exceed 1, deletion trivial, worse cache behaviour (pointer chasing), extra pointer memory. Open addressing: everything in one array (cache-friendly, no pointers), alpha must stay well below 1 (0.7 rule), deletion needs tombstones, clustering is the constant threat. Search costs: chaining ~ 1 + alpha; linear probing ~ (1 + 1/(1 - alpha)) / 2 for successful search - exploding as alpha -> 1, hence the resize discipline. The 7-mark package: both mechanisms with worked insert traces, the clustering discussion, tombstones, and the alpha-based cost comparison - all four items appear in standard questions.",
            ],
            bullets: [
              "Chaining: each bucket is a linked list; collisions append to the chain; alpha can exceed 1.",
              "Worked chaining m = 7: 12, 25, 33, 5, 19 all hash to buckets 5, 4, 5, 5, 5 - bucket 5 grows to length 4.",
              "Open addressing: probe within the array; linear probing tries h + 1, h + 2, ...",
              "Worked linear probing m = 7: 12->5, 25->4, 33->6, 5->0, 19->1 as earlier slots fill.",
              "Primary clustering: contiguous runs force long probe walks; quadratic probing breaks runs; double hashing removes both.",
              "Deletion in open addressing needs TOMBSTONES - an empty slot would break probe chains.",
              "Costs: chaining ~ 1 + alpha; linear probing degrades sharply as alpha -> 1; resize at alpha ~ 0.7-0.75.",
              "Chaining: trivial deletion, pointer overhead; open addressing: cache-friendly array, tight alpha discipline.",
            ],
            table: {
              caption: "Chaining vs open addressing.",
              headers: ["Property", "Separate chaining", "Open addressing"],
              rows: [
                ["Storage", "linked lists per bucket", "all items inside the array"],
                ["Load factor", "can exceed 1", "must stay < 1 (keep ~ 0.7)"],
                ["Clustering", "none (chains independent)", "primary (linear) / secondary (quadratic)"],
                ["Deletion", "unlink a node - trivial", "tombstone required"],
                ["Cache behaviour", "pointer chasing", "sequential, cache-friendly"],
                ["Search cost (avg)", "about 1 + alpha", "about 1 / (1 - alpha) probing"],
              ],
            },
            keyTerms: [
              { term: "Separate chaining", definition: "Collision resolution by linked lists hanging off each bucket." },
              { term: "Linear probing", definition: "Open-addressing scheme trying successive slots h + i mod m; suffers primary clustering." },
              { term: "Double hashing", definition: "Probe stride from a second hash h2(k), coprime with m - the clustering-free scheme." },
              { term: "Tombstone", definition: "A deleted-marker in an open-addressed slot so probe chains survive deletion." },
            ],
            callout: {
              type: "warning",
              title: "The tombstone question",
              body: "Why can't deletion in open addressing simply empty the slot? Because a probe chain RUNNING THROUGH that slot ends there - keys placed after it become unfindable. Mark the slot DELETED instead, let searches pass through, and let insertions reuse tombstones. Draw the three-slot chain A -> B placed by probing, delete the middle, and search for the third: the empty hole stops the search - the demonstration that earns the mark.",
            },
            diagram: {
              kind: "fork",
              title: "A collision at bucket b - three resolution paths",
              caption: "The hash function got two keys to the same slot; the strategy decides where the loser lives.",
              start: "h(k) points to an occupied slot",
              branches: [
                { label: "Chaining", outcome: "append to the bucket's linked list; alpha may exceed 1", good: true },
                { label: "Linear probing", outcome: "scan h+1, h+2 ...; risk of primary clustering", good: false },
                { label: "Double hashing", outcome: "stride h2(k) - no clusters, best probing scheme", good: true },
                { label: "Give up (alpha too high)", outcome: "rehash into a larger table - restore O(1)", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Explain collision resolution by chaining and by open addressing (linear probing). Insert 12, 25, 33, 5, 19 into a table of size 7 with h(k) = k mod 7 under both schemes, discuss clustering, and compare the two on deletion and load factor.",
                marks: 7,
                outline: [
                  "Chaining: bucket 5 chain grows as 12, 33, 5, 19 arrive; bucket 4 holds 25.",
                  "Linear probing: 12->5, 25->4, 33->6, 5->0, 19->1.",
                  "Show each probe step for the colliding keys.",
                  "Primary clustering: occupied runs lengthen; later keys walk them all.",
                  "Mention quadratic probing / double hashing as remedies.",
                  "Deletion: chaining trivial; open addressing needs tombstones (broken probe chains).",
                  "Load factor: chaining allows alpha > 1; open addressing must stay ~ 0.7 - rehash beyond.",
                ],
              },
              {
                q: "In linear probing with m = 11 and h(k) = k mod 11, where do keys 22, 33, 44 land?",
                marks: 2,
                outline: ["All hash to 0 (22, 33, 44 mod 11 = 0).", "22 -> slot 0; 33 -> slot 1; 44 -> slot 2.", "A three-key cluster forms."],
              },
              {
                q: "Why must the load factor stay low for open addressing but may exceed 1 for chaining?",
                marks: 3,
                outline: [
                  "Open addressing stores at most one item per slot - full table = nowhere to probe.",
                  "Probe lengths blow up as alpha -> 1 (formula 1 / (1 - alpha)).",
                  "Chaining just appends list nodes - capacity is unbounded, cost grows linearly with alpha.",
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV CS-303 papers distribute marks fairly evenly across the five units, but WITHIN units the yield is lopsided: address calculation, the stack conversions, tree traversals, sorting complexity and the graph algorithms carry the 7-mark questions. Allocate revision time by topic weight, not by unit size.",
      ],
      weightedTopics: [
        { topic: "Array address calculation (1-D, 2-D row/column-major)", weight: "about 7-9 marks", note: "Pure formula work - drill until it takes under 30 seconds per address." },
        { topic: "Sparse matrix triplet representation and transpose", weight: "about 7 marks", note: "One standard algorithm; show the header triple." },
        { topic: "Linked list operations and variants", weight: "about 7-10 marks", note: "Insert/delete traces with correct assignment order and free discipline." },
        { topic: "Stacks: infix to postfix + postfix evaluation", weight: "about 7-10 marks", note: "Almost guaranteed - practise both classic traces until reflexive." },
        { topic: "Recursion, Tower of Hanoi trace", weight: "about 7 marks", note: "n = 3 trace plus the 2^n - 1 recurrence." },
        { topic: "BST insert/search/delete + traversals", weight: "about 7-10 marks", note: "The three deletion cases carry the marks; inorder = sorted." },
        { topic: "Sorting algorithms and complexity comparison", weight: "about 10-12 marks", note: "One trace question + the master table; know every row." },
        { topic: "Graphs: BFS/DFS trace, Prim/Kruskal, Dijkstra", weight: "about 7-10 marks", note: "Table traces with candidate/reject reasoning." },
        { topic: "Hashing: functions, collisions, load factor", weight: "about 7 marks", note: "Mod-arithmetic traces and the tombstone question." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week at two hours a day, this schedule covers every section twice - once for understanding, once for speed - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - arrays and strings", tasks: ["ADT definitions (4-part answer format)", "1-D and 2-D address calculation drills (10 problems)", "Sparse matrix triplet + transpose; string operations; naive pattern matching trace"] },
        { week: "Week 2", focus: "Unit II - linked lists, stacks, queues", tasks: ["Singly/doubly/circular list operations with traces", "Infix-to-postfix and postfix evaluation (5 expressions each)", "Circular queue with both full/empty conventions"] },
        { week: "Week 3", focus: "Unit III - recursion and trees", tasks: ["Call-stack traces; tail recursion conversion", "Tower of Hanoi n = 3 trace + recurrence", "Tree traversals and reconstruction; BST insert/delete (all 3 cases)"] },
        { week: "Week 4", focus: "Unit IV - searching and sorting", tasks: ["Linear + binary search traces (hit and miss)", "All seven sorts traced on one 5-element array each", "Master comparison table memorised; heap build-heap O(n) argument"] },
        { week: "Week 5", focus: "Unit V - graphs and hashing", tasks: ["BFS/DFS from the same source; adjacency matrix vs list", "Prim and Kruskal table traces with rejects", "Dijkstra trace; hash functions, chaining vs open addressing, tombstones"] },
        { week: "Week 6", focus: "Full-paper revision", tasks: ["Two full past-pattern papers under 3-hour timing", "Redo every failed trace from weeks 1-5", "Recite the complexity master table and the diagram conventions cold"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "For every algorithm question, write the method in 2-3 lines BEFORE the trace - method marks survive even if an arithmetic slip corrupts the trace.",
        "Address-calculation answers: extract base, w, LB first, then substitute - never skip writing the general formula before plugging numbers.",
        "Linked-list and tree answers earn the diagram marks: draw boxes and arrows, mark NULLs, and label head/root.",
        "Infix-to-postfix: show the STACK contents at every symbol - an output-only answer is half credit.",
        "BST deletion: name the case (0, 1 or 2 children) before executing it; two-children needs the successor stated explicitly.",
        "Sorting traces: one line per pass with the full array state; add the pass-invariant comment ('largest k elements final').",
        "Complexity questions: state best, worst AND average when asked for 'the complexity' - the average formula ((n+1)/2 for linear search) is the skipped mark.",
        "Graph algorithms: use tables - columns for step, candidates, decision - and justify every rejected edge.",
        "Time-box: 2-mark questions <= 4 minutes, 7-mark questions <= 15 minutes; the master table is your fastest 10 marks.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Forgetting the lower bound in address formulas when the array is declared A[5..30] instead of A[0..19].",
        "Using the number of rows where the row-major formula needs the number of columns (and vice versa in column-major).",
        "Missing the (m, n, t) header triple in sparse matrix representations.",
        "Counting 'abc' as 3 bytes instead of 4 - the null terminator is always one extra byte.",
        "Inserting into a linked list with the assignments in the wrong order, orphaning the tail of the list.",
        "Popping the RIGHT operand second in postfix evaluation - subtraction and division flip the result.",
        "Writing hanoi(4) traces in the exam - n = 3 with the 2^n - 1 recurrence is what the question wants.",
        "Calling a tree 'full' when it is 'complete' (or vice versa) - quote both definitions when asked.",
        "Stating build-heap as O(n log n) - it is O(n) because most nodes sit near the leaves.",
        "Forgetting that quick sort's worst case is O(n^2) and that merge sort needs O(n) auxiliary space.",
        "Rejecting Kruskal edges without saying WHY (which existing connection creates the cycle).",
        "Deleting from an open-addressed table by emptying the slot - tombstones exist because probe chains break.",
      ],
    },
  ],
};
