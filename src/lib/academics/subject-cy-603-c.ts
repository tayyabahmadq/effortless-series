import type { AcademicSubject } from "./types";

export const cy603c: AcademicSubject = {
  id: "cy-603-c",
  code: "CY-603(C)",
  title: "Automata & Compiler Design",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: the compiler's phases and data structures, lexical analysis with LEX, parsing from recursive descent to LALR, syntax-directed translation, type checking and runtime environments, intermediate code and code generation with DAGs, and the optimization families from peephole to global data flow.",
  description:
    "Five units walk from compiler introduction, data structures, front and back ends and the analysis-synthesis model, through lexical analysis with input buffering, token specification and LEX; parsing with CFGs, top-down and bottom-up strategies, LR families and syntax-directed definitions; type checking and runtime environments; intermediate code, backpatching, basic blocks, flow graphs, DAGs and peephole optimization; ending with the sources of optimization, loop transformations, dead code elimination and global data flow analysis.",
  accentColor: "#22c55e",
  emoji: "AU",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Compiling and Lexical Analysis",
      summary:
        "Unit I opens the subject: what a compiler is and its types, the major data structures, the front-end/back-end split and the analysis-synthesis model, the six phases traced on one example, input buffering's two-buffer scheme, the specification and recognition of tokens with regular expressions and transition diagrams, and LEX - the lexical analyzer generator.",
      chapter: {
        number: "01",
        title: "The Compiler's Anatomy",
        intro:
          "Unit I covers the introduction of compilers, major data structures in a compiler, types of compilers, front-end and back-end, the analysis-synthesis model of compilation, the various phases of a compiler, lexical analysis with input buffering, specification and recognition of tokens, and the design of a lexical analyzer generator with LEX.",
        inOneBreath:
          "A compiler translates source to target through six phases - lexical, syntax, semantic, intermediate code, optimization, code generation - with symbol table and error handler serving all of them, split into an analysis front end and a synthesis back end. The lexical analyzer turns characters into tokens using regular-expression specifications and transition diagrams, buffered in blocks with sentinels, and LEX generates the whole scanner from a table of regular expressions and actions.",
        sections: [
          {
            number: "1.1",
            title: "The compiler and its types",
            body: [
              "A compiler is a program that translates a source language into a target language while analyzing it for errors - typically high-level source to machine code or assembly, in one pass that sees the whole program before emitting output. The contrast program is the interpreter: it executes the source line by line without producing a target program. The exam's distinction: a compiler translates once and runs fast thereafter; an interpreter translates repeatedly and starts instantly - compiled code buys runtime speed at compile-time cost, interpreted code buys immediacy at runtime cost.",
              "The types of compilers organize the landscape. Single-pass compilers emit code as they parse (fast, limited optimization); multi-pass compilers analyze first and generate later (optimization possible, slower compile); cross-compilers produce code for a machine other than the one they run on (embedded development); source-to-source compilers (transpilers) translate between high-level languages (TypeScript to JavaScript); and bytecode compilers produce an intermediate form for a VM (Java, Python). Each type trades compile time, optimization opportunity and target flexibility.",
              "A worked contrast fixes the distinction on one program: x = x + 1 in a loop. A compiler translates the statement once into machine code (say one INC instruction with loop registers), and the million iterations execute at machine speed; an interpreter re-reads, re-parses and re-executes the statement a million times, paying parse cost every iteration. The compiler's advantage compounds with iteration count; the interpreter's advantage (no compile wait, dynamic behaviour) compounds with change frequency - which is why REPLs interpret and games compile.",
              "Exam framing: expect 'define compiler and distinguish it from an interpreter' or 'list compiler types'. Give the definition, the compiler-vs-interpreter contrast table, run the loop statement trace, and close with the type list - single/multi-pass, cross, source-to-source, bytecode. The loop-statement trace is the contrast's worked heart - one compiled instruction versus a million re-parses. The REPL example completes the choice logic - interpreted immediacy for exploration, compiled speed for shipping.",
            ],
            keyTerms: [
              { term: "Compiler", definition: "Translates source to target once, with error analysis - speed bought at compile time." },
              { term: "Interpreter", definition: "Executes source directly, statement by statement - immediacy bought at runtime cost." },
              { term: "Cross-compiler", definition: "Runs on machine A and produces code for machine B." },
              { term: "Bytecode compiler", definition: "Produces intermediate code for a virtual machine (Java, Python)." },
            ],
            table: {
              caption: "Compiler vs interpreter - the guaranteed contrast.",
              headers: ["Aspect", "Compiler", "Interpreter"],
              rows: [
                ["Output", "Target program (machine/bytecode)", "No target - executes directly"],
                ["Translation", "Once, whole program", "Repeatedly, per statement"],
                ["Runtime speed", "Fast (machine code)", "Slower (interpretation overhead)"],
                ["Error reporting", "At compile time, all at once", "At runtime, one at a time"],
                ["Best for", "Performance-critical programs", "Scripting, REPLs, dynamic behaviour"],
              ],
            },
            bullets: [
              "Compiler: translate once, analyze errors, emit target - speed at compile-time cost.",
              "Interpreter: execute directly - immediacy at runtime cost.",
              "Types: single-pass, multi-pass, cross-compiler, source-to-source, bytecode.",
              "Multi-pass enables optimization; single-pass trades it for speed.",
              "Worked trace: one compiled INC per iteration vs million re-parses interpreted.",
              "Choice rule: iteration-heavy -> compile; change-heavy -> interpret.",
            ],
            diagram: {
              kind: "compare",
              title: "Compiler vs interpreter",
              caption: "Who pays, and when - compile once and run fast, or run now and pay forever.",
              left: {
                heading: "Compiler",
                items: [
                  "Translates the whole program once",
                  "Target code runs at machine speed",
                  "Errors reported before execution",
                  "Cost: compile wait on every change",
                ],
              },
              right: {
                heading: "Interpreter",
                items: [
                  "Executes statements as they are read",
                  "No target program produced",
                  "Errors surface one at a time at runtime",
                  "Cost: re-translation every iteration",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The loop statement decides",
              body: "When asked to contrast, trace one statement inside a loop: compiled code executes a machine instruction per iteration; interpreted code re-parses every time. One concrete trace turns the definition-table answer into an understanding answer.",
            },
            examQuestions: [
              {
                q: "Define a compiler and distinguish it from an interpreter, trace the difference on a statement inside a loop, and list the types of compilers with one use case each.",
                marks: 14,
                outline: [
                  "Compiler: translates source to target once with error analysis",
                  "Interpreter: executes source directly, no target program",
                  "Loop trace: compiled INC per iteration vs million re-parses",
                  "Speed vs immediacy trade",
                  "Single-pass: fast compile, limited optimization",
                  "Multi-pass: analysis then generation, optimization possible",
                  "Cross-compiler, source-to-source, bytecode types with uses",
                ],
              },
              {
                q: "What is a cross-compiler and when is it essential?",
                marks: 7,
                outline: [

                  "Runs on host machine A, emits code for target machine B",

                  "Essential for embedded targets that cannot host a compiler",

                  "Example: desktop toolchain building firmware for a microcontroller",

                  "Targets lack the memory and OS a compiler needs",

                  "Host and target word sizes may differ entirely",

                ],              },
            ],
          },
          {
            number: "1.2",
            title: "Major data structures in a compiler",
            body: [
              "A compiler is a set of algorithms over shared data, and the syllabus names the structures. The symbol table: the identifier registry - names, types, scopes, storage offsets - written by every phase and read by all of them (lexical analysis records first occurrences; semantic analysis attaches types; code generation attaches addresses). The literal/constant table: values encountered (numbers, strings) stored once and referenced - deduplicating constants and enabling folding. The token and intermediate-code streams: the hand-off formats between phases (token list from scanner to parser; three-address code from IR builder to optimizer).",
              "The cross-cutting services complete the set: the error handler - the phase-independent reporter that records file, line, column, error class and continues scanning (recovery, not just abort); and the hash tables that make symbol lookup fast - the symbol table is usually a hashed dictionary with scope chains, because a large program performs millions of lookups. A worked interaction trace shows the structures cooperating: scanner encounters 'rate' -> records it in the symbol table with a token type; parser builds a node referencing that entry; semantic analysis attaches type 'float' to the entry; code generation assigns offset 8 in the activation record. Four phases, one table row - the table is the compiler's long-term memory.",
              "The design notes worth quoting: the symbol table's operations are insert, lookup, and scope enter/exit (a stack of scopes or scope links); the literal table enables constant folding by tracking known values; and error records must survive to the end for a complete diagnostic report. The exam's framing sentence: phases are stateless workers; the data structures are the state they share.",
              "Exam framing: expect 'describe the major data structures of a compiler'. List the symbol table (with its operations and per-phase growth), the literal table, the token/IR streams, and the error handler; run the 'rate' interaction trace across four phases; and close with the state sentence. Trace one identifier through four phases - the table row is the compiler's long-term memory.",
            ],
            keyTerms: [
              { term: "Symbol table", definition: "The identifier registry: names, types, scopes, offsets - shared by every phase." },
              { term: "Literal table", definition: "Stores constant values once; enables deduplication and folding." },
              { term: "Error handler", definition: "Phase-independent reporter recording location, class and recovery." },
              { term: "Scope chain", definition: "Symbol table organization tracking nested scopes as a stack or links." },
            ],
            table: {
              caption: "The data structure inventory.",
              headers: ["Structure", "Contents", "Primary users"],
              rows: [
                ["Symbol table", "Identifiers: type, scope, offset", "All six phases"],
                ["Literal table", "Constants: numbers, strings", "Scanner, optimizer"],
                ["Token stream", "Classified lexemes", "Scanner -> parser"],
                ["IR stream", "Three-address code", "Parser -> optimizer -> generator"],
                ["Error records", "Line, column, class, message", "Every phase -> report"],
              ],
            },
            bullets: [
              "Symbol table: insert, lookup, enter/exit scope - the compiler's long-term memory.",
              "One row grows through the phases: name -> token -> type -> offset.",
              "Literal table deduplicates constants and supports constant folding.",
              "Token and IR streams are the hand-off formats between phases.",
              "Error handler records location and class, and keeps scanning - recovery over abort.",
              "Phases are stateless workers; the shared structures are the state.",
            ],
            diagram: {
              kind: "layers",
              title: "The shared data structures",
              caption: "Four layers beneath the six phases - every phase reads and writes these.",
              layers: [
                { label: "Error handler", note: "cross-phase diagnostics and recovery" },
                { label: "Token / IR streams", note: "hand-off formats between phases" },
                { label: "Literal table", note: "constants stored once, folded where possible" },
                { label: "Symbol table", note: "names, types, scopes, offsets - the memory" },
              ],
            },
            callout: {
              type: "exam",
              title: "Trace one identifier through four phases",
              body: "The 'rate' trace is the section's mark-earner: scanner registers it, parser references it, semantic analysis types it, code generation offsets it. One identifier moving through one table row demonstrates every data structure's role at once.",
            },
            examQuestions: [
              {
                q: "Describe the major data structures of a compiler - symbol table, literal table, token and IR streams, error handler - with their contents and users, and trace one identifier's growth through the phases.",
                marks: 14,
                outline: [
                  "Symbol table: names, types, scopes, offsets; insert/lookup/enter/exit",
                  "Literal table: constants stored once; deduplication and folding",
                  "Token stream: scanner -> parser hand-off",
                  "IR stream: parser -> optimizer -> generator hand-off",
                  "Error handler: location, class, recovery - phase-independent",
                  "Trace: 'rate' registered -> parsed -> typed float -> offset 8",
                  "Framing: phases are stateless; the structures hold the state",
                ],
              },
              {
                q: "Why is the symbol table usually implemented as a hash table?",
                marks: 7,
                outline: [

                  "Millions of lookups on large programs",

                  "Hashed lookup is average O(1) versus list O(n)",

                  "Scope chains stack on top for nested scoping",

                  "Hash collisions resolved by chaining keep lookups near-constant",

                  "Rehashing on growth keeps load factors bounded",

                ],              },
            ],
          },
          {
            number: "1.3",
            title: "Front end, back end and the analysis-synthesis model",
            body: [
              "The analysis-synthesis model splits compilation into two halves: analysis (front end) - breaking the source into parts, checking legality, building an intermediate representation - and synthesis (back end) - constructing the target program from the IR. The front end is source-language-specific and target-independent (lexical, syntax, semantic analysis, IR generation); the back end is target-specific and language-independent (optimization, instruction selection, register allocation). The division's purpose is portability arithmetic: M languages x N machines needs M front ends + N back ends instead of M x N complete compilers.",
              "A worked arithmetic makes the model's value concrete: C, Java and Rust on x86, ARM and RISC-V. Monolithic compilers: 9 full compilers to write and maintain. With the model: 3 front ends producing one IR (say LLVM bitcode) + 3 back ends consuming it - 6 components, and every (language, machine) pair works. This is exactly the LLVM architecture's pitch, and the exam sentence: the IR is the interface that makes the matrix factor from M x N to M + N.",
              "The boundary details are examinable: what crosses the interface is the IR (three-address code or its equivalent), plus symbol-table information; passes are grouped accordingly (front-end passes depend only on the source; back-end passes only on the machine); and error recovery sits in the front end while optimization and register pressure sit in the back. The 'retargetable compiler' concept - one language front end, many machine back ends - is the model's industrial proof.",
              "Exam framing: expect 'explain the analysis-synthesis model' or 'front end vs back end'. Define the two halves with their pass lists, run the M + N arithmetic on three languages and three machines, and close with the IR-as-interface sentence. M x N becomes M + N - the portability arithmetic justifies the whole model. The 9-versus-6 arithmetic is the worked proof - three front ends, three back ends, every pair served.",
            ],
            keyTerms: [
              { term: "Analysis (front end)", definition: "Source-specific half: lexical, syntax, semantic analysis, IR generation." },
              { term: "Synthesis (back end)", definition: "Target-specific half: optimization, instruction selection, register allocation." },
              { term: "Intermediate representation", definition: "The interface language between front and back ends." },
              { term: "Retargetable compiler", definition: "One front end with many machine back ends." },
            ],
            table: {
              caption: "The halves and their passes.",
              headers: ["Half", "Passes", "Depends on"],
              rows: [
                ["Front end (analysis)", "Lexical, syntax, semantic, IR generation", "Source language only"],
                ["Back end (synthesis)", "Optimization, code selection, registers", "Target machine only"],
                ["Interface", "IR + symbol table info", "Neither - the contract"],
              ],
            },
            bullets: [
              "Analysis: understand the source, check legality, build the IR.",
              "Synthesis: shape the IR into efficient target code.",
              "Front end is source-specific, target-independent; back end the reverse.",
              "M x N monolithic compilers become M + N pieces with one IR.",
              "Worked arithmetic: 3 languages x 3 machines = 9 compilers vs 6 components.",
              "LLVM is the model's industrial proof - IR as the universal interface.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The analysis-synthesis pipeline",
              caption: "Source in, target out - the IR is the only thing both halves share.",
              stages: [
                { label: "Source", note: "high-level language" },
                { label: "Analysis", note: "lexical -> syntax -> semantic" },
                { label: "IR", note: "three-address code - the interface" },
                { label: "Synthesis", note: "optimize -> select -> allocate" },
                { label: "Target", note: "machine or assembly code" },
              ],
            },
            callout: {
              type: "tip",
              title: "M x N becomes M + N",
              body: "The one-line justification of the whole model: 'with a shared IR, M source languages and N target machines need M front ends plus N back ends, not M x N compilers.' The 9-to-6 worked arithmetic makes it visible - deploy it whenever the model is asked.",
            },
            examQuestions: [
              {
                q: "Explain the analysis-synthesis model of compilation: the two halves with their passes, what crosses the interface, and the portability arithmetic on three languages and three machines.",
                marks: 14,
                outline: [
                  "Analysis: lexical, syntax, semantic, IR - source-specific",
                  "Synthesis: optimization, selection, allocation - target-specific",
                  "Interface: intermediate representation plus symbol-table info",
                  "Monolithic: 3 x 3 = 9 full compilers",
                  "Model: 3 front ends + 3 back ends = 6 components",
                  "Error recovery front; register pressure back",
                  "LLVM/retargetable compilers as industrial proof",
                ],
              },
              {
                q: "Why must the front end know nothing about the target machine?",
                marks: 7,
                outline: [

                  "Portability: one front end serves every back end",

                  "Language rules are machine-independent by nature",

                  "Machine concerns (registers, addressing) belong to synthesis",

                  "Registers and addressing vary per machine - the front end never sees them",

                  "The IR is the only shared vocabulary",

                ],              },
            ],
          },
          {
            number: "1.4",
            title: "The phases of a compiler - one example through all six",
            body: [
              "The six phases process the source in sequence: lexical analysis (characters -> tokens), syntax analysis (tokens -> parse tree), semantic analysis (types and checks -> annotated tree), intermediate code generation (tree -> three-address code), code optimization (IR -> better IR), code generation (IR -> target code) - with symbol table and error handling as cross-cutting services. The canonical worked example runs 'position = initial + rate * 60' through all six, and the exam's version of the question is exactly that trace.",
              "The worked trace, phase by phase. Lexical: position -> id(1), = -> assign, initial -> id(2), + -> plus, rate -> id(3), * -> multiply, 60 -> num(60). Syntax: parse tree with stmt -> id(1) assign expr; expr -> id(2) + id(3) * num. Semantic: int_to_float conversion inserted - id(3) * num(60) types float, id(2) is int, so a conversion node appears. Intermediate code: t1 = inttofloat(60); t2 = id(3) * t1; t3 = id(2) + t2; id(1) = t3. Optimization: 60 folded to 60.0, temporaries compressed: t1 = id(3) * 60.0; id(1) = id(2) + t1. Code generation: LDF id(2), R1; LDF id(3), R2; MULF #60.0, R2; ADDF R1, R2; STF R2, id(1) - five instructions with registers allocated.",
              "The reading of the trace matters as much as its content: each phase produces a representation the next consumes (characters -> tokens -> tree -> IR -> IR -> machine code), each phase reports errors in its own vocabulary (lexical: illegal character; syntax: unexpected token; semantic: type mismatch), and the symbol table persists across all six. The exam's structure sentence: the phases are a pipeline of representations, and 'position = initial + rate * 60' is the standard artifact that proves it.",
              "Exam framing: expect 'explain the phases of a compiler with an example'. Draw the six-phase pipeline, run the complete trace with all six outputs, and note the cross-cutting services - closing with the pipeline-of-representations sentence. Memorize position = initial + rate * 60 - six phases, six representations, one trace. Write the trace in full - tokens, tree, conversion node, quadruples, folded IR, five instructions.",
            ],
            keyTerms: [
              { term: "Lexical analysis", definition: "Characters -> tokens: identifiers, operators, numbers, punctuation." },
              { term: "Syntax analysis", definition: "Tokens -> parse tree by the grammar." },
              { term: "Semantic analysis", definition: "Type checking and coercion insertion on the tree." },
              { term: "Intermediate code", definition: "Machine-independent three-address instructions - the optimizer's medium." },
            ],
            table: {
              caption: "The six phases and their products.",
              headers: ["Phase", "Input -> output", "Error class"],
              rows: [
                ["Lexical", "Characters -> tokens", "Illegal characters"],
                ["Syntax", "Tokens -> parse tree", "Grammar violations"],
                ["Semantic", "Tree -> annotated tree", "Type mismatches"],
                ["Intermediate code", "Tree -> three-address code", "-"],
                ["Optimization", "IR -> better IR", "-"],
                ["Code generation", "IR -> target code", "-"],
              ],
            },
            bullets: [
              "Six phases: lexical, syntax, semantic, intermediate code, optimization, generation.",
              "Symbol table and error handler serve all phases.",
              "Worked trace: 'position = initial + rate * 60' from characters to five instructions.",
              "Semantic phase inserts inttofloat(60) - the type system's visible act.",
              "Optimization folds the constant and compresses temporaries.",
              "Each phase consumes the previous representation - a pipeline, not a monolith.",
            ],
            diagram: {
              kind: "flow",
              title: "The six-phase pipeline",
              caption: "One statement, six representations - the standard trace of this subject.",
              steps: [
                { label: "Lexical", note: "id(1) = id(2) + id(3) * num(60)" },
                { label: "Syntax", note: "assignment tree with * over +" },
                { label: "Semantic", note: "inttofloat(60) inserted" },
                { label: "Intermediate", note: "t1..t3 three-address code" },
                { label: "Optimize", note: "fold 60.0; compress temporaries" },
                { label: "Generate", note: "LDF/MULF/ADDF/STF with registers" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorize the one statement",
              body: "'position = initial + rate * 60' is this subject's worked example of record - six phases, six representations, one trace. Practise writing all six outputs from memory; the phase question is near-certain and the statement is the standard answer.",
            },
            examQuestions: [
              {
                q: "Explain the six phases of a compiler, tracing 'position = initial + rate * 60' through all of them - tokens, tree, semantic annotation, three-address code, optimized IR and target code - with the cross-cutting services noted.",
                marks: 14,
                outline: [
                  "Lexical: id(1), =, id(2), +, id(3), *, num(60)",
                  "Syntax: assignment tree; multiplication binds tighter",
                  "Semantic: int-to-float conversion inserted for 60",
                  "IR: t1 = inttofloat(60); t2 = id(3) * t1; t3 = id(2) + t2; id(1) = t3",
                  "Optimization: fold constant, compress temporaries",
                  "Code generation: LDF/LDF/MULF/ADDF/STF with register assignment",
                  "Symbol table and error handler serve every phase",
                ],
              },
              {
                q: "Why is intermediate code generation its own phase rather than going straight to machine code?",
                marks: 7,
                outline: [

                  "Machine-independent IR enables retargeting",

                  "Optimization operates best on IR, not machine code",

                  "Front/back-end split (1.3) requires the interface",

                  "Optimizations written once serve every target",

                  "IR-level analysis guides machine-level choices",

                ],              },
            ],
          },
          {
            number: "1.5",
            title: "Input buffering",
            body: [
              "The lexical analyzer reads characters one at a time, but disk and OS deliver them in blocks - input buffering reconciles the two. The two-buffer scheme: allocate two N-character buffers (N often one disk block); load a block into each; process from one while refilling the other; alternate. The scheme's cost concern: the lookahead a scanner needs can be unbounded (RE matches of arbitrary length), and a token might straddle the buffer boundary - the two-buffer scheme handles alternation, sentinels handle the rest.",
              "The sentinel trick removes per-character boundary checks: each buffer holds N characters plus one sentinel position at the end holding eof; the scanner reads until it sees eof, then checks whether that eof is the real end of file or just the buffer marker (if the pointer is at the buffer's end, refill and continue). Per character, the test collapses from two comparisons (end-of-buffer AND end-of-file) to one. A worked scan: matching 'rate' with a keyword table: forward pointer advances through r, a, t, e; on the next character (non-letter), retract; lexeme 'rate' spans positions 12-15 and does not cross a boundary here - but if it did, the sentinel eof triggers refill before the scanner even notices.",
              "The design notes complete the section: the lexeme-begin pointer and forward pointer define the current token; retract moves the forward pointer back for the longest-match rule; and tokens spanning buffer boundaries are safe because the sentinel pauses the scan until both halves of the lexeme are in memory. The framing sentence: buffering is the scanner's I/O discipline - block reads outside, single-character semantics inside.",
              "Exam framing: expect 'explain input buffering in lexical analysis'. Give the two-buffer scheme with alternation, the sentinel eof trick with its per-character saving, the begin/forward pointer mechanics with one worked scan, and close with the I/O-discipline sentence. Two boundary tests become one - the sentinel's saving multiplied over a million characters. The scan of 'rate' is the worked example - begin pointer, forward pointer, sentinel pause, delivery.",
            ],
            keyTerms: [
              { term: "Two-buffer scheme", definition: "Two N-char buffers alternated - process one while refilling the other." },
              { term: "Sentinel", definition: "An eof marker in each buffer's last slot - collapses two boundary checks to one." },
              { term: "Forward pointer", definition: "Reads ahead to find the longest token match." },
              { term: "Retract", definition: "Moves the forward pointer back - the longest-match correction." },
            ],
            table: {
              caption: "Buffering bookkeeping.",
              headers: ["Element", "Role", "Cost"],
              rows: [
                ["Buffer pair", "Block I/O with alternation", "One refill while the other serves"],
                ["Sentinel eof", "Marks buffer end", "One test per character"],
                ["Lexeme-begin pointer", "Start of current token", "Set on each token start"],
                ["Forward pointer", "Scan ahead", "Advanced/retracted per match"],
              ],
            },
            bullets: [
              "Disk delivers blocks; the scanner wants characters - buffering bridges.",
              "Two buffers alternate: read from one, refill the other.",
              "Sentinel eof in each buffer's last slot: one boundary test per character.",
              "Real end-of-file vs buffer marker distinguished by pointer position.",
              "Begin/forward pointers delimit the token; retract implements longest match.",
              "Boundary-spanning tokens pause safely at the sentinel.",
            ],
            diagram: {
              kind: "flow",
              title: "The buffered scan",
              caption: "From disk blocks to single characters without per-char overhead.",
              steps: [
                { label: "Load", note: "fill buffer A from the block device" },
                { label: "Scan", note: "forward pointer walks with one eof test per char" },
                { label: "Hit sentinel", note: "buffer end or real EOF?" },
                { label: "Refill", note: "if buffer end: swap in buffer B" },
                { label: "Deliver", note: "lexeme delivered; begin pointer reset" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two tests become one",
              body: "The sentinel's value in one sentence: without it, every character requires 'am I at the buffer end AND at the file end?'; with it, every character requires only 'am I at eof?', and the rare sentinel hit pays the real check once per buffer. A per-character saving multiplied over a million characters.",
            },
            examQuestions: [
              {
                q: "Explain input buffering: the two-buffer scheme, the sentinel eof trick and its per-character saving, and the begin/forward pointer mechanics with a worked token scan.",
                marks: 14,
                outline: [
                  "Two N-char buffers alternate: scan one, refill the other",
                  "Sentinel eof occupies each buffer's last slot",
                  "One eof test per character instead of two",
                  "Real EOF distinguished from buffer end by pointer position",
                  "Begin pointer marks token start; forward scans ahead",
                  "Retract implements longest match on lookahead failure",
                  "Boundary-spanning lexemes pause safely at sentinels",
                ],
              },
              {
                q: "Why can a lexical analyzer need unbounded lookahead?",
                marks: 7,
                outline: [

                  "Regular-expression matches have no fixed maximum length",

                  "The scanner must read until the pattern's longest match is certain",

                  "Sentinels plus refills make unbounded lookahead safe",

                  "Backtracking to shorter matches is the retract rule",

                  "Buffer refills make arbitrary lookahead safe",

                ],              },
            ],
          },
          {
            number: "1.6",
            title: "Specification and recognition of tokens",
            body: [
              "Tokens are specified as patterns, and the pattern language is regular expressions: | (alternation), concatenation, * (zero or more), + (one or more), ? (optional), and parentheses for grouping. The syllabus's token set with its REs: identifiers (letter (letter | digit)*), numbers (digit+ (\. digit+)? (E (+|-)? digit+)?), operators and punctuation as literal strings, keywords as fixed strings checked against the identifier table, and whitespace ((space | tab | newline)+ skipped or counted). One RE per token class; the scanner's job is longest-match classification.",
              "Recognition is a finite automaton in action: each RE compiles to an NFA and thence a DFA (Thompson construction to NFA, subset construction to DFA), and the scanner runs the DFA over input characters. Transition diagrams are the hand-drawn form: states as circles, edges labeled by characters, double circles for accepting states with the token type and a return. A worked trace: input 'rate60' - DFA starts in state 0, r -> state 1, a -> 2, t -> 3, e -> 4 (identifier-so-far), 6 -> 5, 0 -> 5; end of input at 5: longest match is 'rate60' as an identifier - the whole string, because identifier RE includes digits after the first letter.",
              "The practical rules complete the recognition story: longest match wins (retract if a longer pattern continues); keywords are matched first (table lookup on identifier-shaped lexemes disambiguates 'if' from id); white space is skipped but counted (line numbers for errors); and the scanner returns (token class, attribute) pairs - attribute pointing into the symbol table for ids, the numeric value for numbers. The exam's structure sentence: specification by RE, recognition by DFA, disambiguation by longest match and keyword table.",
              "Exam framing: expect 'specify tokens with regular expressions' or 'explain recognition via transition diagram'. Give the operator table and token REs, run the 'rate60' DFA trace, and close with the disambiguation rules - longest match, keyword precedence, attribute pairs. The 'rate60' trace shows longest match delivering one identifier - RE plus rule is the complete answer. The keyword-table rule is the disambiguator - identifier-shaped lexemes resolve by lookup first.",
            ],
            keyTerms: [
              { term: "Regular expression", definition: "The pattern language for tokens: union, concatenation, Kleene star, plus, optional." },
              { term: "Longest match", definition: "When several patterns match, the scanner takes the longest - retracting if needed." },
              { term: "Transition diagram", definition: "States and labeled edges implementing one pattern's recognition." },
              { term: "Attribute", definition: "The token's second field - symbol-table pointer for ids, value for numbers." },
            ],
            table: {
              caption: "Token specifications.",
              headers: ["Token", "Regular expression", "Attribute"],
              rows: [
                ["Identifier", "letter (letter | digit)*", "Symbol-table pointer"],
                ["Number", "digit+ (. digit+)? (E (+|-)? digit+)?", "Numeric value"],
                ["Keyword", "if | then | else | while", "None (class suffices)"],
                ["Operators", "+ | - | * | / | = | <=", "None"],
                ["Whitespace", "(space | tab | newline)+", "Skipped; line count kept"],
              ],
            },
            bullets: [
              "RE operators: | union, concatenation, * zero-plus, + one-plus, ? optional.",
              "Identifier RE: letter (letter | digit)* - one letter leads, digits allowed after.",
              "Number RE handles decimals and exponents in one pattern.",
              "Keywords: match identifier-shaped lexemes against the keyword table first.",
              "Recognition: RE -> NFA -> DFA; the scanner runs the DFA on characters.",
              "Trace 'rate60': states 0->1->2->3->4->5; longest match returns id with pointer.",
            ],
            diagram: {
              kind: "flow",
              title: "Recognizing 'rate60'",
              caption: "A DFA walk with longest-match delivery.",
              steps: [
                { label: "State 0", note: "start; read 'r'" },
                { label: "States 1-4", note: "r, a, t, e - identifier prefix" },
                { label: "State 5", note: "'6', '0' - digits after letter stay in id" },
                { label: "End of input", note: "longest match = 'rate60'" },
                { label: "Return", note: "(id, pointer to symbol table)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Why 'rate60' is one token",
              body: "The classic probe: is 'rate60' an identifier followed by a number, or one identifier? The identifier RE letter (letter | digit)* matches the whole string, and longest match delivers 'rate60' as a single id. Answer with the RE plus the longest-match rule - that combination is the full mark.",
            },
            examQuestions: [
              {
                q: "Specify the principal token classes with regular expressions, explain recognition via finite automata and transition diagrams, and trace the scan of 'rate60' including the longest-match decision.",
                marks: 14,
                outline: [
                  "RE operators: |, concatenation, *, +, ?",
                  "Identifier: letter (letter | digit)*; number with decimals and exponents",
                  "Keywords: fixed strings checked before identifier acceptance",
                  "Whitespace: skipped, line-counted",
                  "RE -> NFA -> DFA; scanner executes the DFA",
                  "Trace 'rate60': r,a,t,e then digits remain within the identifier RE",
                  "Longest match returns (id, symbol-table pointer) for the whole lexeme",
                ],
              },
              {
                q: "How does the scanner distinguish the keyword 'if' from an identifier?",
                marks: 7,
                outline: [

                  "Both match the identifier RE initially",

                  "Identifier-shaped lexemes are looked up in the keyword table",

                  "Table hit returns the keyword token; miss returns id",

                  "The table is checked only for identifier-shaped lexemes",

                  "Case conventions decide table entries per language",

                ],              },
            ],
          },
          {
            number: "1.7",
            title: "LEX - the lexical analyzer generator",
            body: [
              "LEX (and flex, its modern form) generates a scanner from a specification file: a section of C declarations, a section of regular-expression rules (pattern -> action), and a section of user subroutines. The workflow: lex reads the .l file, builds the NFA/DFA from the rules, and emits lex.yy.c - a C function yylex() that is the compiled scanner; the host compiler builds it, and the linker combines it with the parser (yacc/bison output calls yylex() for each token).",
              "A worked .l file fixes the pattern: definitions (%{ C prolog %}, RE macros like digit [0-9]), rules in priority order ({digit}+ { return NUM; } | if|then|else { return keyword(yyleng); } | {letter}({letter}|{digit})* { install(); return ID; } | [ \t\n] { /* skip */ } | . { return yytext[0]; }), and subroutines. Two rules are examinable: LEX resolves conflicts by longest match first, then by first-rule priority (which is why the keyword rule precedes the identifier rule); and actions are C code - install() inserts yytext into the symbol table and returns its index.",
              "The design of the generator itself is the syllabus's deeper ask: LEX compiles the union of all pattern REs into one DFA (Thompson + subset construction), annotates accepting states with their rules and actions, resolves ties by rule order, and emits the DFA as tables driven by yylex(). The generated scanner is faster than hand-written loops for complex token sets and is the standard front half of the parser-generator toolchain (LEX + YACC) - the syllabus's named pairing.",
              "Exam framing: expect 'explain the design of a lexical analyzer generator' or 'write a LEX specification'. Give the three-section file structure, the workflow to lex.yy.c and yylex(), a worked rules block with priority/longest-match notes, and close with the generator internals - union RE, single DFA, rule-order ties. Priority disambiguates where longest match ties - keywords listed before identifiers does the work.",
            ],
            keyTerms: [
              { term: "LEX / flex", definition: "Generates a C scanner (yylex in lex.yy.c) from a RE-rules specification." },
              { term: "yylex()", definition: "The generated scanner function - called by the parser for each token." },
              { term: "Rule priority", definition: "Conflicts resolved by longest match, then by earliest rule order." },
              { term: "yytext", definition: "The matched lexeme string - what actions inspect and install." },
            ],
            bullets: [
              "Three sections: C declarations, RE rules with actions, user subroutines.",
              "lex compiles all pattern REs into one DFA with annotated accepting states.",
              "Conflict resolution: longest match, then first-listed rule wins.",
              "Keyword rules precede the identifier rule - priority does the disambiguation.",
              "Actions are C code: return token codes, install ids with install().",
              "Toolchain pairing: LEX's yylex feeds YACC's yyparse - the classic front end.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From LEX specification to running scanner",
              caption: "Four stages - specification in, token stream out.",
              stages: [
                { label: "scanner.l", note: "RE rules + C actions" },
                { label: "lex generator", note: "union RE -> NFA -> DFA; emit tables" },
                { label: "lex.yy.c", note: "yylex() scanner in C" },
                { label: "Compiler + linker", note: "built and linked with the parser" },
                { label: "Token stream", note: "yylex() returns (class, attribute) pairs" },
              ],
            },
            callout: {
              type: "exam",
              title: "Priority is the disambiguator",
              body: "The LEX question examiners love: how are 'if' and identifiers distinguished? Answer with the mechanism: longest match ties them, so first-rule priority decides - the keyword rule is listed before the identifier rule. One sentence with both resolution rules is the complete answer.",
            },
            examQuestions: [
              {
                q: "Explain the design of a lexical analyzer generator: the LEX file's three sections, the workflow to a linked scanner, a worked rules block, and the internals - RE union, single DFA, conflict resolution.",
                marks: 14,
                outline: [
                  "Sections: declarations, pattern-action rules, subroutines",
                  "lex compiles the union of REs via Thompson + subset construction",
                  "One DFA; accepting states annotated with rules and actions",
                  "Conflicts: longest match first, then earliest rule priority",
                  "Keywords listed before identifiers - priority disambiguates",
                  "Actions: return codes; install() adds ids to the symbol table",
                  "Workflow: scanner.l -> lex -> lex.yy.c -> cc -> linked with yyparse",
                ],
              },
              {
                q: "Why does the generated scanner use a single DFA for all token patterns?",
                marks: 7,
                outline: [

                  "One automaton shares scanning work across patterns",

                  "Accepting states carry the rule choice - no separate passes",

                  "Efficiency: one table-driven loop replaces per-pattern attempts",

                  "Separate automata would re-scan for each pattern",

                  "The merged DFA minimizes states across the pattern set",

                ],              },
            ],
            codeExample: {
              language: "c",
              caption: "A LEX specification - tokens for a small language",
              code: `%{
#include "parser.h"      /* token codes from yacc */
int install();           /* symbol-table insert, returns index */
%}
digit      [0-9]
letter     [A-Za-z]
%%
{digit}+                                  { return NUM; }
if|then|else|while                        { return yytext[0]; /* keyword code */ }
{letter}({letter}|{digit})*               { yylval = install(); return ID; }
[ \t\n]                                   { /* skip whitespace */ }
.                                         { return yytext[0]; }
%%
int yywrap() { return 1; }`,
            },
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Syntax Analysis and Syntax-Directed Translation",
      summary:
        "Unit II parses: context-free grammars and derivations, top-down parsing by brute force and recursive descent, grammar transformations into LL(1) predictive parsing, bottom-up shift-reduce and operator-precedence parsing, the LR family with SLR, LR and LALR and parser generation, then syntax-directed definitions - syntax tree construction, S-attributed bottom-up evaluation and L-attributed translation with inherited attributes.",
      chapter: {
        number: "02",
        title: "Parsing and Syntax-Directed Translation",
        intro:
          "Unit II covers CFGs, top-down parsing with brute force and recursive descent, grammar transformations and predictive parsing, bottom-up parsing with operator precedence, LR parsers (SLR, LALR, LR) and parser generation, syntax-directed definitions with syntax tree construction, S-attributed definitions evaluated bottom-up, L-attributed definitions, and evaluation of inherited attributes.",
        inOneBreath:
          "Grammars derive strings; parsers recover those derivations. Top-down parsers predict productions left to right (recursive descent, LL(1) after left-recursion removal and left factoring); bottom-up parsers build the tree from the leaves (shift-reduce, operator precedence, LR(1) items compressed into SLR/LALR tables). Syntax-directed definitions attach attributes to grammar symbols - synthesized flow upward (S-attributed, bottom-up), inherited flow down or across (L-attributed, top-down) - and the evaluation order follows the derivation direction.",
        sections: [
          {
            number: "2.1",
            title: "Context-free grammars and derivations",
            body: [
              "A CFG is the quadruple (V, T, P, S): variables (nonterminals), terminals, productions and a start symbol. Productions rewrite variables - the expression grammar E -> E + T | T, T -> T * F | F, F -> ( E ) | id encodes precedence structurally (multiplication sits deeper, so it binds tighter) and associativity through left recursion (E -> E + T makes + left-associative). Parsing is exactly the inverse of derivation: the grammar derives strings (S =>* w); the parser finds that derivation given w - recovering the parse tree that proves membership.",
              "Derivations come in two standard flavours, and the distinction drives parsing strategy. Leftmost derivation: rewrite the leftmost variable at every step - the top-down parsers' goal (they predict productions for the leftmost variable first). Rightmost derivation: rewrite the rightmost variable - the bottom-up parsers' goal in reverse (a shift-reduce parse is a rightmost derivation read backwards). A worked leftmost derivation of id + id * id: E => E + T => T + T => F + T => id + T => id + T * F => id + F * F => id + id * F => id + id * id - nine steps, each expanding the leftmost variable.",
              "The ambiguity question completes the section: a grammar is ambiguous if some string has two distinct parse trees - the classic E -> E + E | E * E | id gives id + id * id both an (id + id) * id tree and an id + (id * id) tree. Ambiguity breaks parsers (which tree?), so it is resolved by precedence/associativity declarations (in yacc) or by restructuring the grammar into the E/T/F layered form - where precedence is structural and ambiguity is gone. The exam's causality: layered grammars encode precedence so parsers need not guess.",
              "Exam framing: expect 'define CFG and derivations' or 'show a leftmost derivation'. Give the quadruple, the expression grammar with its precedence/associativity reading, the nine-step leftmost trace, and the ambiguity discussion with the layered-grammar fix. Precedence lives in the grammar - depth encodes binding power without any precedence table. The nine-step derivation is the trace - count the steps and the tree follows.",
            ],
            keyTerms: [
              { term: "CFG", definition: "(V, T, P, S) - variables, terminals, productions, start symbol." },
              { term: "Leftmost derivation", definition: "Always rewrite the leftmost variable - the top-down parser's target." },
              { term: "Rightmost derivation", definition: "Always rewrite the rightmost variable - shift-reduce parses it in reverse." },
              { term: "Ambiguous grammar", definition: "Some string has two distinct parse trees - resolved by layering or precedence rules." },
            ],
            table: {
              caption: "The layered expression grammar.",
              headers: ["Production", "Reading", "Encodes"],
              rows: [
                ["E -> E + T | T", "expressions are sums of terms", "lowest precedence, left-assoc"],
                ["T -> T * F | F", "terms are products of factors", "middle precedence, left-assoc"],
                ["F -> ( E ) | id", "factors are ids or parenthesized", "highest precedence"],
              ],
            },
            bullets: [
              "CFG = variables + terminals + productions + start symbol.",
              "Grammar structure encodes semantics: depth = precedence, left recursion = left associativity.",
              "Leftmost derivation: expand leftmost variable - top-down parsers predict these.",
              "Rightmost derivation in reverse: what shift-reduce parsers construct.",
              "Worked trace: id + id * id derived in nine leftmost steps.",
              "Ambiguity: two trees for one string; layering (E/T/F) removes it.",
            ],
            diagram: {
              kind: "compare",
              title: "Leftmost vs rightmost derivation",
              caption: "The two directions parsers chase - prediction forward, reduction backward.",
              left: {
                heading: "Leftmost (top-down's goal)",
                items: [
                  "Rewrite the leftmost variable each step",
                  "Predict productions left to right",
                  "Matches recursive descent / LL(1)",
                  "Traces: E => E + T => T + T => ...",
                ],
              },
              right: {
                heading: "Rightmost (bottom-up's reverse)",
                items: [
                  "Rewrite the rightmost variable each step",
                  "Shift-reduce parse = rightmost derivation backwards",
                  "Matches LR family",
                  "Reduce actions reverse the derivation steps",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Precedence lives in the grammar",
              body: "The sentence that earns the grammar-design mark: 'in the layered E/T/F grammar, precedence is structural - * sits deeper than +, so it binds tighter without any precedence table.' Ambiguous grammars need tables; layered grammars encode the table into shape.",
            },
            examQuestions: [
              {
                q: "Define CFG, show the leftmost derivation of id + id * id with the layered expression grammar, explain how the grammar encodes precedence and associativity, and discuss ambiguity with its resolution.",
                marks: 14,
                outline: [
                  "CFG quadruple: variables, terminals, productions, start",
                  "Grammar: E -> E + T | T; T -> T * F | F; F -> ( E ) | id",
                  "Leftmost trace: nine steps from E to id + id * id",
                  "Precedence structural: * deeper than +",
                  "Left recursion E -> E + T gives left associativity",
                  "Ambiguity: E -> E + E | E * E yields two trees for id + id * id",
                  "Fix: layer the grammar or declare precedence/associativity",
                ],
              },
              {
                q: "Why does the bottom-up parser correspond to a rightmost derivation?",
                marks: 7,
                outline: [

                  "Shift-reduce actions reconstruct the tree from leaves upward",

                  "Reading the reduce sequence backwards gives the rightmost derivation",

                  "LR parsing is 'rightmost derivation in reverse' by definition",

                  "Each reduce prints one derivation step from the end",

                  "The handle is the right side of the next rightmost step",

                ],              },
            ],
          },
          {
            number: "2.2",
            title: "Top-down parsing - brute force and recursive descent",
            body: [
              "Top-down parsers build the parse tree from the root downward, predicting productions for the leftmost variable - leftmost derivations in action. Brute-force top-down: try each production for the current variable and backtrack on failure - correct but exponential in the worst case (the S -> S a problem: attempting S -> S a loops forever on left recursion). The practical alternatives eliminate backtracking by making the grammar predictive: no ambiguity about which production to choose at each point.",
              "Recursive descent is the practical top-down parser: one procedure per variable, tokens matched at terminals. A worked grammar with procedures: E -> T E'; E' -> + T E' | epsilon; T -> F T'; T' -> * F T' | epsilon; F -> (E) | id - each symbol becomes a function: parseE calls parseT then parseE'; parseE' peeks the next token (plus? expand; else? return - the epsilon choice); parseF matches id or recurses into parentheses. The parse of id + id * id walks: E -> T E' -> F T' E' -> id + T E' -> id + F T' E' -> id + id * F T' E' -> done.",
              "The limitations are the section's design lessons: left recursion kills top-down parsing (S -> S a never terminates - E -> E + T recurses infinitely), and common prefixes force backtracking (A -> a b | a c - which 'a'? both productions start identically). Both have mechanical fixes (next section: left-recursion elimination and left factoring), and with them applied, the grammar becomes LL(1) - one token of lookahead suffices to pick the production deterministically.",
              "Exam framing: expect 'explain top-down parsing' or 'write a recursive descent parser'. Give the brute-force/backtracking problem, the one-procedure-per-variable scheme with the parse trace of id + id * id, and the two failure modes - left recursion and common prefixes - as the bridge to LL(1). Peek is the whole parser - one token peek per branch, one match per terminal.",
            ],
            keyTerms: [
              { term: "Top-down parsing", definition: "Build the tree root-down; predict productions for the leftmost variable." },
              { term: "Recursive descent", definition: "One procedure per variable; token peek selects the production branch." },
              { term: "Backtracking", definition: "Try a production, undo on failure - brute-force top-down's cost." },
              { term: "epsilon production", definition: "The empty expansion - chosen when lookahead matches none of the siblings." },
            ],
            table: {
              caption: "Recursive descent procedures for the layered grammar.",
              headers: ["Symbol", "Procedure logic", "Lookahead decision"],
              rows: [
                ["E", "parseT; parseE'", "None needed"],
                ["E'", "if next = + then match, parseT, parseE'; else return", "peek: '+'"],
                ["T", "parseF; parseT'", "None needed"],
                ["T'", "if next = * then match, parseF, parseT'; else return", "peek: '*'"],
                ["F", "if next = id match; else match '(' parseE ')' ", "peek: 'id' or '('"],
              ],
            },
            bullets: [
              "Top-down = leftmost derivation as execution: predict, match, descend.",
              "Brute force backtracks - exponential worst case, and loops on left recursion.",
              "Recursive descent: procedure per variable; peek chooses the branch.",
              "Worked trace: id + id * id descends E -> T E' -> ... one call per symbol.",
              "Failure mode 1: left recursion (E -> E + T) never terminates top-down.",
              "Failure mode 2: common prefixes (A -> ab | ac) force backtracking without factoring.",
            ],
            diagram: {
              kind: "flow",
              title: "A recursive descent parse",
              caption: "Call stack mirrors the leftmost derivation - every call is one grammar step.",
              steps: [
                { label: "parseE", note: "expect expression; call parseT" },
                { label: "parseT", note: "call parseF; id matched" },
                { label: "parseE'", note: "peek '+': match, recurse parseT" },
                { label: "parseT", note: "id; parseT' peeks '*' and recurses" },
                { label: "Unwind", note: "epsilon choices return; parse accepted" },
              ],
            },
            callout: {
              type: "exam",
              title: "Peek is the whole parser",
              body: "The insight sentence for recursive descent: 'the entire parser is lookahead-driven procedure calls - every branch decision is one token peek, every terminal is one match, every epsilon is one return.' Writing the E'/T' procedures with their peeks demonstrates it concretely.",
            },
            examQuestions: [
              {
                q: "Explain top-down parsing: brute-force backtracking and its costs, recursive descent with procedures for the layered grammar, and a worked parse of id + id * id - ending with the two failure modes that motivate LL(1).",
                marks: 14,
                outline: [
                  "Top-down predicts productions for the leftmost variable",
                  "Brute force: try productions, backtrack - exponential; loops on left recursion",
                  "Recursive descent: one procedure per variable, one branch per production",
                  "E' peeks '+': match, recurse; else epsilon-return",
                  "Trace: id + id * id descends via E -> T E' -> F T' E' -> ...",
                  "Failure 1: left recursion never terminates (E -> E + T)",
                  "Failure 2: common prefixes (ab | ac) force backtracking without factoring",
                ],
              },
              {
                q: "Why does left recursion make top-down parsing impossible?",
                marks: 7,
                outline: [

                  "E -> E + T expands E to E again before consuming input",

                  "The procedure calls itself without progress - infinite recursion",

                  "Fix: eliminate left recursion (E -> T E'; E' -> + T E')",

                  "Stack-based loops grow without consuming input",

                  "Every left-recursive cycle starves the parser",

                ],              },
            ],
          },
          {
            number: "2.3",
            title: "Grammar transformations and LL(1) predictive parsing",
            body: [
              "Two mechanical transformations make a grammar top-down-ready. Left-recursion elimination: A -> A alpha | beta becomes A -> beta A'; A' -> alpha A' | epsilon - the recursion is folded into a loop (E -> E + T | T becomes E -> T E'; E' -> + T E' | epsilon). Left factoring: A -> alpha beta | alpha gamma becomes A -> alpha A'; A' -> beta | gamma - the common prefix is matched once, then the divergence is decided (S -> i E t S | i E t S e S becomes S -> i E t S S'; S' -> e S | epsilon).",
              "The LL(1) parser is a table-driven non-backtracking top-down parser: FIRST sets (terminals that can begin strings from a symbol) and FOLLOW sets (terminals that can follow a symbol) fill a parse table M[A, a]; the driver holds a stack of symbols and repeats - on variable A with lookahead a, pop A and push M[A, a]'s right side (reversed); on terminal matching a, pop and advance; on the table's blank, error. The grammar is LL(1) exactly when every table cell holds at most one production - one token of lookahead, one choice.",
              "A worked table fixes the mechanics. Grammar (post-transformation): E -> T E'; E' -> + T E' | epsilon; T -> F T'; T' -> * F T' | epsilon; F -> ( E ) | id. FIRST(F) = {id, (}; FIRST(T) = {id, (}; FIRST(E) = {id, (}; FOLLOW(E) = {), $}; FOLLOW(E') = FOLLOW(E); FOLLOW(T) = FIRST(E') minus epsilon plus FOLLOW(E') = {+, ), $}; FOLLOW(T') = FOLLOW(T). Table entries: M[E', +] = + T E'; M[E', )] = M[E', $] = epsilon; M[T', *] = * F T'; M[T', +)] = epsilon - every cell single-entry, LL(1) confirmed.",
              "Exam framing: expect 'transform a grammar to LL(1)' or 'construct the LL(1) parse table'. Give both transformations with worked grammars, the FIRST/FOLLOW computation rules, the table with the driver's actions, and close with the LL(1) condition - one entry per cell. Blank cells are syntax errors - panic recovery skips to FOLLOW-set tokens from exactly there. The FIRST/FOLLOW computation is the table's engine - two sets per symbol, one entry per cell.",
            ],
            keyTerms: [
              { term: "Left-recursion elimination", definition: "A -> A alpha | beta becomes A -> beta A'; A' -> alpha A' | epsilon." },
              { term: "Left factoring", definition: "Common prefixes extracted: A -> alpha A'; A' -> beta | gamma." },
              { term: "FIRST / FOLLOW", definition: "Terminal sets for beginnings and follow-positions - they fill the parse table." },
              { term: "LL(1)", definition: "Left-to-right scan, leftmost derivation, one lookahead - table with single entries." },
            ],
            table: {
              caption: "The LL(1) parse table (partial).",
              headers: ["Cell", "Entry", "Decision"],
              rows: [
                ["M[E, id] and M[E, (]", "T E'", "expand expression"],
                ["M[E', +]", "+ T E'", "consume the plus"],
                ["M[E', )] = M[E', $]", "epsilon", "end the sum"],
                ["M[T', *]", "* F T'", "consume the star"],
                ["M[F, id]", "id", "match the identifier"],
                ["M[F, (]", "( E )", "recurse into parentheses"],
              ],
            },
            bullets: [
              "Transformations: eliminate left recursion; factor common prefixes.",
              "E -> E + T | T becomes E -> T E'; E' -> + T E' | epsilon.",
              "FIRST: terminals that can begin; FOLLOW: terminals that can follow.",
              "FOLLOW(E') = FOLLOW(E); FOLLOW(T) includes FIRST(E') \\ epsilon.",
              "Driver: stack + lookahead; expand via M[A, a], match terminals, error on blanks.",
              "LL(1) condition: every M[A, a] cell holds at most one production.",
            ],
            diagram: {
              kind: "fork",
              title: "The LL(1) driver's dispatch",
              caption: "Stack top and lookahead decide every move - one table lookup per step.",
              start: "Stack top X, lookahead a",
              branches: [
                { label: "X is terminal = a", outcome: "match: pop, advance input", good: true },
                { label: "X is variable", outcome: "expand: pop X, push M[X, a] reversed", good: true },
                { label: "X terminal mismatch or blank cell", outcome: "error: report position, invoke recovery", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The blank cell is the error",
              body: "The LL(1) error story in one sentence: 'a blank table cell means no production is viable for this lookahead - the parser reports a syntax error exactly there.' Then recovery (panic mode: skip to a FOLLOW-set symbol) is the next expected clause.",
            },
            examQuestions: [
              {
                q: "Apply left-recursion elimination and left factoring to a non-LL(1) grammar, compute FIRST and FOLLOW for the layered grammar, construct the LL(1) parse table, and state the LL(1) condition.",
                marks: 14,
                outline: [
                  "E -> E + T | T -> E -> T E'; E' -> + T E' | epsilon",
                  "Left factoring: iEtS vs iEtSeS -> S -> iEtSS'; S' -> eS | epsilon",
                  "FIRST(E) = FIRST(T) = FIRST(F) = {id, (}",
                  "FOLLOW(E) = {), $}; FOLLOW(E') = FOLLOW(E)",
                  "FOLLOW(T) = {+, ), $}; FOLLOW(T') = FOLLOW(T)",
                  "Table: M[E',+] = +TE'; M[E',)] = epsilon; M[T',*] = *FT'",
                  "LL(1): every cell at most one production - blanks are syntax errors",
                ],
              },
              {
                q: "Why does the epsilon production go in M[A, a] for every a in FOLLOW(A)?",
                marks: 7,
                outline: [

                  "Choosing epsilon is viable exactly where A can legally end",

                  "FOLLOW(A) lists the terminals that can appear after A",

                  "Entering epsilon there lets the parser continue correctly",

                  "Choosing epsilon elsewhere would desynchronize the stack",

                  "FOLLOW is computed from all of A's occurrence contexts",

                ],              },
            ],
          },
          {
            number: "2.4",
            title: "Bottom-up parsing - shift-reduce and operator precedence",
            body: [
              "Bottom-up parsing builds the tree from leaves to root: shift tokens onto a stack until a handle (the right side of a production matching the stack top) appears, then reduce - pop the handle, push the left-side variable. The parse of id + id * id under the layered grammar: shift id, reduce F -> id, reduce T -> F, shift +, shift id, reduce F -> id, reduce T -> F, shift *, shift id, reduce F -> id, reduce T -> F, reduce T -> T * F, reduce E -> T + ... - twelve actions constructing the rightmost derivation in reverse.",
              "The stack notation is the exam's standard form: four columns (stack, input, action, output). A worked row pair: stack 'id $', input '+ id * id $', action 'reduce F -> id' - the top matches the production's right side, so reduce and print. The conflict questions follow: a shift-reduce conflict (the stack matches a handle but shifting also looks plausible - the dangling-else case) and a reduce-reduce conflict (two handles compete) - LR parsers (next section) resolve both with lookahead; operator-precedence parsing sidesteps them entirely with a precedence matrix.",
              "Operator-precedence parsing assigns relations (<·, =·, ·>) between terminal pairs and parses by comparing: stack top <· input means shift; ·> means reduce to the nearest enclosing precedence level. Worked comparison for 'id + id * id': + <· * (multiplication binds tighter), so id's reduce to F and the * subtree forms before + sees any reduction - the precedence table encodes arithmetic exactly. Simple to implement (tiny table, one-pass), weak in power (no grammar-level control, so it survives mainly as history and as the conceptual bridge to LR).",
              "Exam framing: expect 'explain shift-reduce parsing' or 'operator precedence parsing'. Give the handle/shift/reduce mechanics with the stack-notation trace of id + id * id, the two conflict types, and the precedence-matrix method with the + <· * comparison - closing with its power limitations. Rightmost derivation read backwards is the shift-reduce parse - the identity sentence justifies the technique. The stack-notation trace is the standard form - four columns, one reduce per handle.",
            ],
            keyTerms: [
              { term: "Handle", definition: "The right side of a production matching the stack top - what reduce pops." },
              { term: "Shift-reduce", definition: "Push input until a handle appears, reduce to the left side - repeat." },
              { term: "Shift-reduce conflict", definition: "Stack matches a handle while shifting also seems right - dangling else." },
              { term: "Operator precedence relations", definition: "<·, =·, ·> between terminals driving shift/reduce decisions." },
            ],
            table: {
              caption: "Shift-reduce trace of id + id * id (key rows).",
              headers: ["Stack", "Input", "Action"],
              rows: [
                ["$ id", "+ id * id $", "reduce F -> id"],
                ["$ F", "+ id * id $", "reduce T -> F"],
                ["$ T + id", "* id $", "reduce F -> id"],
                ["$ T + T * T", "id $", "reduce T -> T * F"],
                ["$ T + T", "$", "reduce E -> T + E-side ..."],
              ],
            },
            bullets: [
              "Bottom-up: leaves to root; shift tokens, reduce handles.",
              "Handle = production right side on stack top; reduce prints the production.",
              "Trace: id + id * id needs shifts and reductions through F, T, then T * F.",
              "Conflicts: shift-reduce (dangling else) and reduce-reduce (two handles).",
              "Operator precedence: <· shift, ·> reduce via a terminal-pair matrix.",
              "+ <· * makes the multiplication reduce before the addition - precedence encoded.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The shift-reduce cycle",
              caption: "One loop - shift until a handle, reduce it, repeat to accept.",
              stages: [
                { label: "Shift", note: "push the next input token" },
                { label: "Probe", note: "does the stack top match a handle?" },
                { label: "Reduce", note: "pop handle, push left side, print production" },
                { label: "Repeat", note: "until stack = S and input empty" },
                { label: "Accept", note: "parse complete; tree recovered" },
              ],
            },
            callout: {
              type: "exam",
              title: "Rightmost in reverse",
              body: "The identity sentence for bottom-up parsing: 'a shift-reduce parse of w is the rightmost derivation of w read backwards - each reduce prints one derivation step from the end.' Writing it once justifies the whole technique's correctness in one move.",
            },
            examQuestions: [
              {
                q: "Explain bottom-up parsing: handles, shift and reduce actions, a stack-notation trace of id + id * id, the two conflict types, and operator-precedence parsing with its matrix and limitations.",
                marks: 14,
                outline: [
                  "Bottom-up builds leaves to root; shift pushes tokens",
                  "Handle: production right side on stack top; reduce replaces it",
                  "Trace: reduce F -> id, T -> F, then T * F after the '*' shifts",
                  "Stack notation: four columns with printed productions",
                  "Conflicts: shift-reduce (dangling else); reduce-reduce (two handles)",
                  "Operator precedence: <·, =·, ·> matrix drives decisions",
                  "+ <· * ensures multiplication reduces first; weak power overall",
                ],
              },
              {
                q: "What is the dangling-else conflict and how is it resolved?",
                marks: 7,
                outline: [

                  "S -> iEtSS' with S' -> eS | epsilon: on 'else', shift or epsilon?",

                  "Shift-reduce conflict: both actions look viable",

                  "Resolution: prefer shift (bind else to nearest if) - LR parsers encode it",

                  "Convention matches programmer intent in nested ifs",

                  "LR tables encode the shift preference explicitly",

                ],              },
            ],
          },
          {
            number: "2.5",
            title: "LR parsers - SLR, canonical LR and LALR",
            body: [
              "The LR family is bottom-up parsing made deterministic: LR(k) - left-to-right scan, rightmost derivation in reverse, k lookahead tokens. The machinery: LR(0) items (productions with dots marking progress: E -> T · E'), item sets as DFA states built by closure and goto, and a table with ACTION (shift/reduce/accept) and GOTO entries. The driver is the shift-reduce engine with states: on state s and token a, ACTION[s, a] says shift (push new state) or reduce (pop handle, GOTO on the left side) or accept/error.",
              "The three tiers differ in how reduce entries get their lookahead. SLR(1): reduce A -> alpha on terminal a only when a is in FOLLOW(A) - cheap table, modest power (FOLLOW is context-free of the item's actual context). Canonical LR(1): items carry their own exact lookahead sets ([A -> alpha ·, a]) computed by closure - maximal power, large tables (one state per lookahead-distinct context). LALR(1): LR(1) item sets merged when their cores (productions with dots) are identical, lookaheads unioned - the industrial compromise: near-LR power at SLR-sized tables; yacc/bison generate LALR. The merge introduces reduce-reduce conflicts only where LR(1) distinguished contexts the union now confuses - rare in real grammars.",
              "A worked item-set fragment fixes the machinery. State I0 = closure({S' -> · E}): adds E -> · E + T, E -> · T, T -> · T * F, T -> · F, F -> · ( E ), F -> · id. On goto: I0 with id reaches I1 = {F -> id ·} - a reduce entry on FOLLOW... no, on the item's lookahead: SLR uses FOLLOW(F) = {+, *, ), $}, so ACTION[I1, +] = reduce F -> id. The fragment shows closure, goto, and one ACTION entry - the exam's minimum viable LR demonstration.",
              "Exam framing: expect 'compare SLR, LR and LALR' or 'explain LR parsing'. Give items/closure/goto and the driver, the three tiers with their lookahead mechanisms and table sizes, the worked item-set fragment, and close with the practical verdict - LALR is what yacc generates and why. The merge is the LALR story - near-LR power at SLR-sized tables. The item-set fragment is the minimum demonstration - closure, goto, one ACTION entry.",
            ],
            keyTerms: [
              { term: "LR(0) item", definition: "A production with a dot - progress marker; closure/goto build item sets." },
              { term: "SLR(1)", definition: "Reduce on FOLLOW(A) lookahead - cheap, moderate power." },
              { term: "Canonical LR(1)", definition: "Per-item exact lookaheads - maximal power, largest tables." },
              { term: "LALR(1)", definition: "LR(1) sets merged on equal cores - yacc's choice, industrial standard." },
            ],
            table: {
              caption: "The three LR tiers.",
              headers: ["Tier", "Reduce lookahead", "Table size", "Power"],
              rows: [
                ["SLR(1)", "FOLLOW(A) - context-free", "Smallest", "Moderate"],
                ["LALR(1)", "Merged per-core lookaheads", "SLR-sized", "Near-LR"],
                ["Canonical LR(1)", "Exact per-item contexts", "Largest", "Maximal"],
              ],
            },
            bullets: [
              "Items: productions with dots; closure adds completions, goto advances.",
              "Driver: ACTION (shift/reduce/accept) and GOTO over states and tokens.",
              "SLR: reduce on FOLLOW - quick to build, misses some grammars.",
              "LR(1): exact per-item lookahead - strongest, biggest tables.",
              "LALR: merge equal cores, union lookaheads - yacc/bison's LALR output.",
              "Worked fragment: I1 = {F -> id ·}; ACTION[I1, +] = reduce F -> id.",
            ],
            diagram: {
              kind: "compare",
              title: "SLR vs LR vs LALR",
              caption: "Three tiers of lookahead precision - and the industrial compromise.",
              left: {
                heading: "SLR(1)",
                items: [
                  "Reduce on FOLLOW(A) for every A-item",
                  "Simplest tables",
                  "FOLLOW ignores item context - weaker",
                  "Good teaching baseline",
                ],
              },
              right: {
                heading: "LALR(1) and LR(1)",
                items: [
                  "LR(1): exact per-item lookahead - maximal power, big tables",
                  "LALR: merge equal cores, union lookaheads",
                  "Near-LR power at SLR table size",
                  "yacc/bison generate LALR - the practical standard",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The merge is the exam's LALR story",
              body: "The one-sentence LALR definition: 'merge LR(1) item sets with identical cores, union their lookahead sets - power nearly LR, tables nearly SLR.' Then the cost: merging can create reduce-reduce conflicts LR(1) would not have, but real programming grammars rarely trip it.",
            },
            examQuestions: [
              {
                q: "Explain LR parsing machinery - items, closure, goto, ACTION/GOTO tables - and compare SLR, canonical LR(1) and LALR with a worked item-set fragment and an ACTION entry.",
                marks: 14,
                outline: [
                  "Items: productions with progress dots",
                  "Closure: add productions for dots before variables; goto advances dots",
                  "Driver: ACTION shift/reduce/accept; GOTO after reduces",
                  "SLR: reduce on FOLLOW(A) - cheap, moderate power",
                  "LR(1): exact per-item lookahead - maximal, largest tables",
                  "LALR: merge equal cores, union lookaheads - yacc's compromise",
                  "Fragment: I0 closure; goto on id -> I1 = {F -> id .}; ACTION[I1, +] reduce",
                ],
              },
              {
                q: "Why does yacc generate LALR rather than canonical LR?",
                marks: 7,
                outline: [

                  "LR(1) tables are prohibitively large for real grammars",

                  "LALR merging collapses same-core states - SLR-sized tables",

                  "Power loss (new reduce-reduce conflicts) is negligible in practice",

                  "LALR tables match SLR in size for most grammars",

                  "Reduce-reduce conflicts from merging are rare and fixable",

                ],              },
            ],
          },
          {
            number: "2.6",
            title: "Syntax-directed definitions and syntax tree construction",
            body: [
              "Syntax-directed definitions (SDDs) attach attributes to grammar symbols and semantic rules to productions: each production carries rules computing its attributes - E.val = E1.val + T.val on E -> E1 + T, for example. Synthesized attributes flow upward (a node's value computed from its children); inherited attributes flow down or sideways (from parents or siblings). The evaluation order is not arbitrary - dependency graphs must be acyclic and an evaluation order must respect every edge (attributes feed attributes).",
              "S-attributed definitions use only synthesized attributes: every rule's right side references only children's attributes, so evaluation is a bottom-up pass. The classic worked SDD: F.val = lexval on F -> id; T.val = T1.val * F.val on T -> T1 * F; T.val = T1.val on T -> T1; E.val = E1.val + T.val; E.val = T.val. Parsing id + id * id with values attached: reduce F -> id sets F.val = 60 for the literal; T -> T * F computes 3 * 60 = 180; E -> E + T computes 2 + 180 = 182 - the parse tree becomes an annotated (decorated) tree, and the printer at the root emits the value.",
              "Syntax tree construction is the SDD's other job: instead of storing values, rules build nodes - E.node = mknode('+', E1.node, T.node) - producing the abstract syntax tree the later phases consume (1.4's IR builder). The desk calculator (evaluate) and the tree builder differ only in what the rules emit: numbers or nodes. The exam's structure sentence: SDDs are grammar-attached computation; the evaluation order follows the attribute flow, and S-attributed flow matches bottom-up parsing exactly.",
              "Exam framing: expect 'explain syntax-directed definitions' or 'annotate a parse with an SDD'. Give the attribute/rule model with the dependency-graph condition, the classic desk-calculator SDD, the id + id * id evaluation trace (182), and the tree-construction variant - closing with the flow-matches-parsing sentence. 182 at the root proves the desk calculator executed - a number the examiner verifies in one line.",
            ],
            keyTerms: [
              { term: "SDD", definition: "Attributes on grammar symbols + semantic rules on productions." },
              { term: "Synthesized attribute", definition: "Computed from children - flows up the tree." },
              { term: "S-attributed", definition: "Synthesized only - evaluates bottom-up, inline with LR reduces." },
              { term: "Decorated tree", definition: "A parse tree with all attribute values computed." },
            ],
            table: {
              caption: "The desk-calculator SDD.",
              headers: ["Production", "Semantic rule", "Effect"],
              rows: [
                ["F -> id", "F.val = lexval", "literal value in"],
                ["T -> T1 * F", "T.val = T1.val * F.val", "multiplication"],
                ["T -> T1", "T.val = T1.val", "pass-through"],
                ["E -> E1 + T", "E.val = E1.val + T.val", "addition"],
                ["E -> T", "E.val = T.val", "pass-through"],
              ],
            },
            bullets: [
              "SDD = attributes on symbols + rules on productions.",
              "Synthesized: children -> parent (upward); inherited: parent/sibling -> downward.",
              "Dependency graph must be acyclic; evaluation order respects edges.",
              "S-attributed SDDs evaluate during LR reduces - the desk calculator pattern.",
              "Worked trace: F.val = 60; T = 3 * 60 = 180; E = 2 + 180 = 182.",
              "Tree-building variant: rules emit mknode('+', ...) - the AST builder.",
            ],
            diagram: {
              kind: "flow",
              title: "S-attributed evaluation",
              caption: "Values bubble upward - one computation per reduce.",
              steps: [
                { label: "Reduce F -> id", note: "F.val = lexval (60)" },
                { label: "Reduce T -> T * F", note: "T.val = T1.val * F.val" },
                { label: "Reduce T -> T", note: "pass-through" },
                { label: "Reduce E -> E + T", note: "E.val = E1.val + T.val = 182" },
                { label: "Accept", note: "root attribute printed or node returned" },
              ],
            },
            callout: {
              type: "exam",
              title: "182 is the expected number",
              body: "The desk-calculator trace has a checkable answer: id(2) + id(3) * id(60) with values 2, 3, 60 evaluates to 182. Writing 182 at the root proves the whole SDD executed correctly - a number the examiner can verify in one line.",
            },
            examQuestions: [
              {
                q: "Explain syntax-directed definitions: attributes, semantic rules, synthesized vs inherited flow, the dependency-graph condition, and the S-attributed desk calculator evaluating id + id * id with the tree-construction variant noted.",
                marks: 14,
                outline: [
                  "SDD: attributes on symbols, rules on productions",
                  "Synthesized upward; inherited downward/sideways",
                  "Dependency graph acyclic; evaluation respects every edge",
                  "S-attributed = synthesized only - fits LR reduce actions",
                  "Rules: F.val = lexval; T.val = T1 * F; E.val = E1 + T",
                  "Trace: 60 -> 3*60 = 180 -> 2+180 = 182",
                  "Tree variant: mknode rules build the AST instead of values",
                ],
              },
              {
                q: "Why are S-attributed definitions ideal for bottom-up parsing?",
                marks: 7,
                outline: [

                  "Synthesized attributes need only children's values",

                  "LR reduce actions execute exactly when children are complete",

                  "No extra passes - evaluation rides the parse",

                  "The parse stack holds children's values at reduce time",

                  "Attributes ride the existing LR machinery",

                ],              },
            ],
          },
          {
            number: "2.7",
            title: "L-attributed definitions and inherited attributes",
            body: [
              "Inherited attributes carry context downward or across: a declaration's type flows to every declared name (D -> T L with L.in = T.type), an environment flows into blocks, a left context flows into right siblings. L-attributed definitions constrain the flow so evaluation stays single-pass top-down: each rule may use the parent's inherited attributes, the left siblings' attributes, and its own children's synthesized ones - never the right siblings' or (in the strict form) the parent's synthesized values. The L is for left: information flows left-to-right through the tree, matching top-down parsing's traversal order.",
              "A worked inherited-attribute SDD fixes the pattern. Declarations D -> T L; T -> int {T.type = integer}; T -> real {T.type = real}; L -> L1 , id {L1.in = L.in; addtype(id.entry, L.in)}; L -> id {addtype(id.entry, L.in)}; with D's rule L.in = T.type seeding the flow. Parsing 'real x, y': T.type = real flows down into L.in; the comma rule passes L1.in = L.in leftward and records addtype(x, real); the base rule records y. Two declarations, one flow - the type annotation is inherited, not synthesized.",
              "The evaluation orders complete the section: top-down translation evaluates L-attributed SDDs during LL(1) expansion (each procedure computes inherited attributes before descending - the natural call order); bottom-up evaluation of inherited attributes needs tricks (a marker production M -> epsilon copies L.in onto the stack so a later reduce can read it) - the syllabus's named technique. Recursive evaluation (cyclic dependency graphs) exists for the general case but is rarely needed once definitions stay L-attributed. The exam's comparison sentence: S-attributed rides bottom-up reduces; L-attributed rides top-down expansions - the two pass structures the rest of the compiler inherits.",
              "Exam framing: expect 'explain inherited attributes and L-attributed definitions' or 'translate declarations'. Give the L-condition, the declaration-translation SDD with the real x, y trace, the marker-production trick for bottom-up evaluation, and the comparison sentence. Left-to-right flow is the constraint - it is why L-attributed translation rides LL(1) expansions. The marker production is the bottom-up trick - M copies the stack value for the later reduce.",
            ],
            keyTerms: [
              { term: "Inherited attribute", definition: "Value passed from parent or left sibling - context flowing down/across." },
              { term: "L-attributed", definition: "Rules use parent's inherited, left siblings', own children's - left-to-right flow." },
              { term: "Marker production", definition: "M -> epsilon inserted to copy stack values for bottom-up inherited evaluation." },
              { term: "addtype", definition: "The semantic action recording (entry, type) into the symbol table." },
            ],
            table: {
              caption: "The declaration-translation SDD.",
              headers: ["Production", "Semantic rule", "Flow direction"],
              rows: [
                ["D -> T L", "L.in = T.type", "seed downward"],
                ["T -> int", "T.type = integer", "synthesized"],
                ["T -> real", "T.type = real", "synthesized"],
                ["L -> L1 , id", "L1.in = L.in; addtype(id.entry, L.in)", "leftward + record"],
                ["L -> id", "addtype(id.entry, L.in)", "record"],
              ],
            },
            bullets: [
              "Inherited attributes carry context: declaration types, environments, left contexts.",
              "L-condition: parent inherited + left siblings + own children only.",
              "Worked trace: 'real x, y' - T.type = real flows to both addtype calls.",
              "Top-down: evaluate inherited attributes before descending - natural in LL(1) procedures.",
              "Bottom-up: marker productions copy stack values for later reduces.",
              "S-attributed rides reduces; L-attributed rides expansions - the pass-structure pairing.",
            ],
            diagram: {
              kind: "compare",
              title: "S-attributed vs L-attributed",
              caption: "Two flow disciplines, two parsing partners.",
              left: {
                heading: "S-attributed",
                items: [
                  "Synthesized attributes only",
                  "Children -> parent, upward",
                  "Evaluates during LR reduce actions",
                  "Example: desk calculator values",
                ],
              },
              right: {
                heading: "L-attributed",
                items: [
                  "Synthesized + constrained inherited",
                  "Parent/left-sibling -> down/across",
                  "Evaluates during LL(1) expansion",
                  "Example: declaration type flow (real x, y)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Left-to-right is the constraint",
              body: "The L-condition in one sentence: 'information may flow leftward and downward - never from right siblings or from parents' synthesized values.' It is exactly the order a top-down parse visits nodes, which is why L-attributed translation integrates into LL(1) expansions without extra passes.",
            },
            examQuestions: [
              {
                q: "Explain inherited attributes and the L-attributed condition, translate 'real x, y' with the declaration SDD showing the type flow, describe bottom-up evaluation with marker productions, and compare S-attributed with L-attributed evaluation orders.",
                marks: 14,
                outline: [
                  "Inherited: context from parents/left siblings - types, environments",
                  "L-condition: parent inherited + left siblings + own children only",
                  "SDD: D -> T L with L.in = T.type; L -> L1 , id passes left and records",
                  "Trace 'real x, y': T.type = real -> L.in -> addtype(x), addtype(y)",
                  "Bottom-up: marker M -> epsilon copies stack values between reduces",
                  "Top-down: inherited attributes computed before descent - natural call order",
                  "Pairing: S-attributed with LR reduces; L-attributed with LL(1) expansions",
                ],
              },
              {
                q: "Why can an L-attributed rule not reference a right sibling's attributes?",
                marks: 7,
                outline: [

                  "Top-down translation visits left to right - right siblings not yet computed",

                  "Referencing them would require a second pass or lookahead beyond one token",

                  "The constraint keeps translation single-pass",

                  "Referencing them would force a second pass",

                  "Left-to-right information flow matches the traversal",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Type Checking and Run Time Environment",
      summary:
        "Unit III checks and organizes: type systems and the specification of a simple type checker, type equivalence and conversion, overloading and polymorphic functions with unification, runtime storage organization and activation records, the static/stack/heap allocation strategies, parameter passing mechanisms, and symbol tables with error detection and recovery.",
      chapter: {
        number: "03",
        title: "Types and Runtime",
        intro:
          "Unit III covers type systems, specification of a simple type checker, equivalence of expression and types, type conversion, overloading of functions and operations, polymorphic functions; runtime storage organization, storage allocation strategies, parameter passing, dynamic storage allocation, symbol tables, and error detection and recovery with ad-hoc and systematic methods.",
        inOneBreath:
          "A type system assigns expressions to types and judges assignments legal by inference rules; equivalence is by structure or by name, and conversions coerce where types differ. Runtime storage divides into static (compile-time addresses), stack (activation records on calls) and heap (dynamic allocation); parameter passing chooses between copies, references and thunks; symbol tables organize scopes; and error recovery - ad-hoc or systematic - keeps the compiler alive after bad input.",
        sections: [
          {
            number: "3.1",
            title: "Type systems and the specification of a simple type checker",
            body: [
              "A type system is a set of types plus rules for assigning types to expressions and judging assignments legal: int + int is int; int + float needs a coercion; id = expr requires type agreement (or a defined conversion). The specification mechanism is inference rules - premises above the line, conclusion below: 'E1.type = int, E2.type = int => E.type = int' for plus. The compiler's type checker implements these rules as synthesized attributes (2.6's machinery): each expression node computes .type from its children, and a mismatch either coerces or errors.",
              "A worked checker specification on the arithmetic grammar: E -> E1 + T { if (E1.type = int AND T.type = int) E.type = int; else if either is float then E.type = float (with a conversion node); else error }; T -> T1 * F similarly; F -> ( E ) {F.type = E.type}; F -> id {F.type = lookup(id.entry)}; F -> num {F.type = int}. The trace of id + id * num with id: int, num: int - all int, no coercion, expression type int. Replace num's value with 3.5 (float): the multiplication yields float, the addition inserts a conversion node - 1.4's semantic phase reappears with rules behind it.",
              "The design decisions a checker embodies: when to coerce (implicit conversion ladders: int -> float -> double), when to error (strictness), where checks happen (compile-time static checking vs runtime dynamic tagging), and what the environment holds (the symbol table's type fields, entered by declarations). The exam's framing sentence: the type checker is the semantic phase operationalized - inference rules as attribute equations, environment as symbol table, coercion as inserted nodes.",
              "Exam framing: expect 'explain type systems' or 'specify a simple type checker'. Give the inference-rule format, the worked arithmetic-checker rules, the trace with and without coercion, and close with the design-decision list - coercion ladders, strictness, static vs dynamic. Rules are attributes - the checker is the desk calculator recomputed to judge rather than evaluate. The design-decision list is the checklist - coercion ladder, strictness, static versus dynamic checking.",
            ],
            keyTerms: [
              { term: "Type system", definition: "Types + inference rules assigning and judging type-correctness." },
              { term: "Inference rule", definition: "Premises over conclusion - the checker's specification language." },
              { term: "Coercion", definition: "Implicit conversion inserted where types differ (int -> float)." },
              { term: "Static checking", definition: "Type errors caught at compile time by attribute evaluation." },
            ],
            table: {
              caption: "Checker rules for arithmetic.",
              headers: ["Production", "Rule", "Failure mode"],
              rows: [
                ["E -> E1 + T", "both int -> int; any float -> float (coerce)", "mismatch: error"],
                ["T -> T1 * F", "same ladder as +", "mismatch: error"],
                ["F -> ( E )", "F.type = E.type", "-"],
                ["F -> id", "F.type = lookup(id.entry)", "undeclared: error"],
                ["F -> num", "F.type = int (or float for 3.5)", "-"],
              ],
            },
            bullets: [
              "Type system = types + inference rules + a checking algorithm.",
              "Rules as attribute equations: E.type computed from children.",
              "Environment: the symbol table's type fields from declarations.",
              "Worked trace: int + int * int = int; a float literal inserts conversion nodes.",
              "Coercion ladder: int -> float -> double - one direction per language.",
              "Static (compile-time) checking vs dynamic (runtime) tagging.",
            ],
            diagram: {
              kind: "flow",
              title: "Synthesized type checking",
              caption: "Types bubble up like S-attributed values - coercion inserted where they clash.",
              steps: [
                { label: "Leaves", note: "F.type = lookup(id) or literal type" },
                { label: "Factors/terms", note: "operators combine child types" },
                { label: "Match?", note: "same type: propagate; different: coerce or error" },
                { label: "Coercion node", note: "inttofloat inserted (1.4's semantic act)" },
                { label: "Root type", note: "expression type reported to declarations/assignments" },
              ],
            },
            callout: {
              type: "exam",
              title: "Rules are attributes",
              body: "The unifying sentence: 'a type checker is an S-attributed SDD whose values are types - the desk calculator of Unit 2.6 recomputed to judge rather than evaluate.' Connecting sections is exactly what distinguishes a 7-mark answer from a full one.",
            },
            examQuestions: [
              {
                q: "Explain type systems and specify a simple type checker for the arithmetic grammar with inference rules, trace 'id + id * num' with int and float operands, and state the checker's design decisions.",
                marks: 14,
                outline: [
                  "Type system: types + inference rules + checking algorithm",
                  "Rule format: premises => conclusion (E1.type = int, T.type = int => int)",
                  "Checker as attribute equations on the parse tree",
                  "F.type = lookup(id.entry) - environment from symbol table",
                  "Trace int case: all int, type propagates",
                  "Trace float case: conversion nodes inserted (inttofloat)",
                  "Design: coercion ladder, strictness, static vs dynamic checking",
                ],
              },
              {
                q: "What does 'static type checking' buy over runtime checks?",
                marks: 7,
                outline: [

                  "Errors caught before execution - no production crashes",

                  "No runtime type tags - faster code",

                  "Cost: compile-time strictness and explicit conversions",

                  "Optimization benefits from type certainty",

                  "Interfaces become machine-checked contracts",

                ],              },
            ],
          },
          {
            number: "3.2",
            title: "Type equivalence and type conversion",
            body: [
              "When are two types the same? Two answers define two languages. Name equivalence: each declaration creates a distinct type - two records with identical fields are different types because they have different names (Pascal, Ada lean here). Structural equivalence: types are the same if their structure unfolds identically - same fields, same types, recursively (C's loose behaviour, C's typedefs being transparent). A worked contrast: 'type Meters = int' then 'Meters x; int y; x = y;' - name equivalence rejects (Meters is a new type); structural equivalence accepts (both unfold to int).",
              "The equivalence choice drives conversion policy: name equivalence makes type discipline strong (units, currencies as distinct types), structural makes it convenient (aliases interchangeable). Where types differ legally, conversion bridges them - coercion (implicit, inserted by the checker per the ladder) and casts (explicit, programmer-directed: (float) i). The conversion rules worth knowing: widening conversions are safe and implicit (int -> float loses nothing); narrowing conversions lose information and require casts (float -> int truncates); and mixed arithmetic widens the smaller operand before the operation.",
              "A worked mixed-expression trace fixes the rules. 'x = i + f * d' with i: int, f: float, d: double: f * d widens f to double (multiply in double); i + result widens i to double (add in double); assignment converts double to x's type (a cast or a checked narrowing). The expression's type propagates upward after each widening - the checker of 3.1 with a conversion ladder driving node insertion. The exam's sentence: equivalence defines 'same'; the ladder defines 'compatible'; conversion nodes implement both decisions.",
              "Exam framing: expect 'distinguish name and structural equivalence' or 'explain type conversion'. Give both equivalence models with the Meters example, the coercion-vs-cast distinction, the widening/narrowing ladder, and the mixed-expression trace - closing with the equivalence-drives-policy sentence. Equivalence decides same; the ladder decides compatible - answer the equivalence question first. The Meters example settles the model - name rejects the assignment, structure accepts it.",
            ],
            keyTerms: [
              { term: "Name equivalence", definition: "Distinct declarations are distinct types - strong discipline (Ada, Pascal)." },
              { term: "Structural equivalence", definition: "Types equal if structure unfolds identically - C-style convenience." },
              { term: "Widening conversion", definition: "Safe implicit promotion (int -> float); no information loss." },
              { term: "Narrowing conversion", definition: "Lossy conversion requiring an explicit cast (float -> int)." },
            ],
            table: {
              caption: "Equivalence models contrasted.",
              headers: ["Aspect", "Name equivalence", "Structural equivalence"],
              rows: [
                ["Test", "Same declared name/type origin", "Same unfolded structure"],
                ["type Meters = int vs int", "Different types", "Same type"],
                ["Discipline", "Strong - units stay distinct", "Loose - aliases interchangeable"],
                ["Typical languages", "Pascal, Ada, Java-ish", "C (mostly), older languages"],
              ],
            },
            bullets: [
              "Equivalence: name-based (declaration identity) vs structure-based (unfolded shape).",
              "Meters example: name rejects x = y; structure accepts.",
              "Coercion: implicit, ladder-driven, checker-inserted nodes.",
              "Casts: explicit programmer direction, possibly narrowing.",
              "Widening safe; narrowing lossy - the ladder only widens implicitly.",
              "Mixed expression: i + f * d widens through the largest type (double).",
            ],
            diagram: {
              kind: "compare",
              title: "Name vs structural equivalence",
              caption: "One declaration decides, or one unfolding decides - the language's type philosophy.",
              left: {
                heading: "Name equivalence",
                items: [
                  "Each declaration mints a new type",
                  "Meters and int are unrelated",
                  "x = y rejected without cast",
                  "Units and currencies stay honest",
                ],
              },
              right: {
                heading: "Structural equivalence",
                items: [
                  "Same structure = same type",
                  "Meters unfolds to int",
                  "x = y accepted silently",
                  "Convenience over discipline",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Equivalence decides everything downstream",
              body: "The cause-effect sentence: 'the equivalence model decides what counts as same; the conversion ladder decides what counts as compatible; coercion nodes implement both.' Answer the equivalence question first - the conversion rules follow from it.",
            },
            examQuestions: [
              {
                q: "Distinguish name and structural type equivalence with a worked example, explain coercion versus casts, the widening/narrowing ladder, and trace 'x = i + f * d' with mixed operand types.",
                marks: 14,
                outline: [
                  "Name equivalence: declaration identity - Meters distinct from int",
                  "Structural: unfolded shape - Meters equals int",
                  "Discipline consequence: units stay distinct vs aliases interchangeable",
                  "Coercion implicit (checker-inserted); casts explicit",
                  "Widening safe and implicit; narrowing lossy and cast-required",
                  "Trace: f * d in double; i widened; assignment narrows or casts",
                  "Sentence: equivalence defines same, ladder defines compatible",
                ],
              },
              {
                q: "Why do languages restrict implicit narrowing conversions?",
                marks: 7,
                outline: [

                  "Narrowing loses information silently - truncation, overflow",

                  "Silent loss is a bug source; casts make the loss visible",

                  "Hence implicit ladders widen only",

                  "Range checks cannot recover dropped high bits",

                  "Explicit casts document programmer intent",

                ],              },
            ],
          },
          {
            number: "3.3",
            title: "Overloading and polymorphic functions",
            body: [
              "Overloading gives one name several meanings, resolved by argument types: '+' is int-addition, float-addition, pointer-advance; max(int, int) and max(float, float) coexist. Resolution is an algorithm, and the exam's version: collect candidates with the name; filter by arity; score each by argument matching - exact type match best, then promotions per the widening ladder, then user conversions; ambiguity error if two score equally. A worked resolution: max(3, 4.5) with max(int,int) and max(float,float) - int candidate needs 4.5 narrowed (not allowed implicitly), float candidate promotes 3 -> float (allowed): the float overload wins, no ambiguity.",
              "Polymorphic functions are a deeper mechanism: one function body working over many types, with type variables in its signature. length(t) where t is a list of anything: the type scheme forall a. [a] -> int. The checker's tool is unification - solving equations between type expressions: applying length to [int] equates the type variable a with int; unification walks two type expressions, binding variables to match structures, failing on clashes (int vs bool). Hindley-Milner style checking: infer the function body's type with variables, unify at each use site, generalize at definitions.",
              "A worked unification trace fixes the mechanics. Signature: reverse :: forall a. [a] -> [a]. Call: reverse([1, 2]). Unify argument [1,2]'s type [int] with [a]: a = int (structure matches, leaf equation binds). Result type: [a] with a = int -> [int]. Second call reverse([true]) in the same scope: a fresh instance of the scheme rebinds a = bool - generalization at the definition, instantiation at each use. The contrast sentence: overloading picks among fixed types by matching; polymorphism binds type variables by unification.",
              "Exam framing: expect 'explain overloading resolution' or 'polymorphic functions with unification'. Give the resolution scoring with the max trace, the type-variable model, the unification algorithm with the reverse trace, and the closing contrast - matching picks, unification binds. Unification is equation solving - walk two type expressions, bind at leaves, fail at clashes. The max(3, 4.5) trace is the resolution - narrowing rejected, promotion accepted, float wins.",
            ],
            keyTerms: [
              { term: "Overloading", definition: "One name, several fixed meanings - resolved by argument matching." },
              { term: "Polymorphic function", definition: "One body over many types via type variables (forall a. [a] -> int)." },
              { term: "Unification", definition: "Solving type equations by binding variables to make expressions match." },
              { term: "Instantiation", definition: "Fresh variable bindings per use of a generalized scheme." },
            ],
            table: {
              caption: "Overload resolution scoring.",
              headers: ["Rank", "Match type", "Example"],
              rows: [
                ["1 (best)", "Exact type match", "max(int, int) with (3, 4)"],
                ["2", "Widening promotion", "max(float, float) with (3, 4.5)"],
                ["3", "User-defined conversion", "Custom operator overloads"],
                ["Fail", "Narrowing required implicitly", "int candidate with 4.5 - rejected"],
              ],
            },
            bullets: [
              "Overloading: candidates filtered by arity, scored by argument match.",
              "Ranking: exact > promotion > user conversion; ties are ambiguity errors.",
              "Worked: max(3, 4.5) resolves to the float overload by promotion.",
              "Polymorphism: type variables in signatures - length :: forall a. [a] -> int.",
              "Unification binds variables: [a] unified with [int] sets a = int.",
              "Contrast: matching picks among fixed types; unification binds variables.",
            ],
            diagram: {
              kind: "fork",
              title: "Resolving an overloaded call",
              caption: "Three viable outcomes - and one error - from the scoring ladder.",
              start: "Call f(args)",
              branches: [
                { label: "One exact match", outcome: "resolve immediately - best rank wins", good: true },
                { label: "Promotions differ", outcome: "resolve to the best promotion - widening ladder applied", good: true },
                { label: "Two equal scorers", outcome: "ambiguous call - compile error reported", good: false },
                { label: "No viable candidate", outcome: "no matching overload - compile error", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Unification is equation solving",
              body: "The mental model sentence: 'unification treats type checking as equation solving - walk two type expressions together, bind variables at leaves, fail at structural clashes.' The reverse([1,2]) trace (a = int) is the minimum demonstration to carry into the exam.",
            },
            examQuestions: [
              {
                q: "Explain overloading resolution with a worked max(3, 4.5) trace, define polymorphic functions with type variables, and demonstrate unification on reverse([1,2]) - closing with the matching-versus-binding contrast.",
                marks: 14,
                outline: [
                  "Overloading: candidates by name, filter arity, score arguments",
                  "Ranks: exact > promotion > user conversion; ties ambiguous",
                  "max(3, 4.5): int overload needs narrowing - rejected; float wins",
                  "Polymorphic: length :: forall a. [a] -> int",
                  "Unification: [a] vs [int] binds a = int; result [int]",
                  "Generalize at definition, instantiate per call (fresh a each use)",
                  "Contrast: matching picks fixed types; unification binds variables",
                ],
              },
              {
                q: "When does unification fail?",
                marks: 7,
                outline: [

                  "Structural clash: [int] vs [bool] at corresponding positions",

                  "Variable already bound to an incompatible value (occurs check)",

                  "Arity or constructor mismatch between the two expressions",

                  "The occurs check blocks infinite types (a in [a])",

                  "Failure is reported at the earliest mismatching position",

                ],              },
            ],
          },
          {
            number: "3.4",
            title: "Runtime storage organization and activation records",
            body: [
              "Runtime memory divides into regions: code (instructions), static data (globals whose addresses are compile-time fixed), stack (activation records - one per procedure call), heap (dynamic allocation, managed by the allocator or a garbage collector). The stack's activation record (AR) is the section's structure: a template of fields laid out per call - actual parameters (the caller places), return address (where to resume), saved machine status (old registers/frame pointer), local data (the procedure's variables), temporaries (expression evaluation), and outgoing parameters (for calls this procedure makes).",
              "A worked AR layout fixes the field order and the two pointers. Calling convention: caller evaluates arguments, pushes/registers them, executes call (pushes return address); callee saves the old frame pointer, sets the frame pointer to the new record base, advances the stack pointer for locals. The two pointers navigate: FP (frame pointer) anchors the record - locals at FP - 8, FP - 4 ...; SP (stack pointer) marks the stack top. Access links (for nested scopes: pointing to the enclosing procedure's AR) and display tables (an indexed array of enclosing scopes) are the syllabus's named mechanisms for non-local access - the choice between them is a classic comparison question.",
              "A worked call trace assembles it. main calls compute(3, 4): caller stores 3, 4 as actuals, call pushes return address; callee saves FP, sets FP = new AR base, allocates locals and temporaries; compute's code reads parameters at fixed FP offsets; on return, callee restores FP and status, returns; caller resumes and reads the result register. The record's lifetime exactly brackets the call - stack discipline is call discipline.",
              "Exam framing: expect 'draw the activation record' or 'explain runtime storage organization'. List the memory regions, produce the AR field layout with caller/callee duties, the FP/SP navigation, the access-link vs display comparison, and close with the lifetime sentence. FP offsets are the whole point - locals live at fixed negative offsets from the frame pointer. The AR-offset sentence ties layout to code - locals addressed without runtime searching.",
            ],
            keyTerms: [
              { term: "Activation record (AR)", definition: "Per-call stack frame: parameters, return address, saved status, locals, temporaries." },
              { term: "Frame pointer (FP)", definition: "Anchors the current AR - fixed offsets address locals and parameters." },
              { term: "Access link", definition: "Pointer to the enclosing scope's AR - non-local access for nested procedures." },
              { term: "Display", definition: "Indexed table of enclosing-scope AR pointers - O(1) non-local access." },
            ],
            table: {
              caption: "Activation record fields, in order.",
              headers: ["Field", "Placed by", "Purpose"],
              rows: [
                ["Actual parameters", "Caller", "Argument values"],
                ["Return address", "Caller (via call)", "Resume point"],
                ["Saved machine status", "Callee", "Old FP, registers"],
                ["Local data", "Callee", "Variables at FP offsets"],
                ["Temporaries", "Callee", "Expression evaluation"],
                ["Outgoing parameters", "Callee", "For this procedure's own calls"],
              ],
            },
            bullets: [
              "Regions: code, static data, stack (ARs), heap (dynamic).",
              "AR fields: actuals, return address, saved status, locals, temporaries, outgoing params.",
              "Caller places actuals and the return address; callee saves FP and allocates locals.",
              "FP anchors the record (locals at fixed negative offsets); SP marks the top.",
              "Access links chain enclosing scopes; displays index them for O(1) access.",
              "AR lifetime brackets the call exactly - stack discipline is call discipline.",
            ],
            diagram: {
              kind: "layers",
              title: "An activation record",
              caption: "Caller-placed at the bottom, callee-built above - FP anchors, SP moves.",
              layers: [
                { label: "Outgoing parameters", note: "for this procedure's own calls" },
                { label: "Temporaries", note: "expression evaluation scratch" },
                { label: "Local data", note: "variables at FP - offset addressing" },
                { label: "Saved status + FP", note: "old frame pointer, registers" },
                { label: "Return address", note: "where the callee returns" },
                { label: "Actual parameters", note: "placed by the caller before call" },
              ],
            },
            callout: {
              type: "tip",
              title: "FP offsets are the whole point",
              body: "The reason the frame pointer exists: every local has a fixed negative offset from FP (known at compile time), while SP moves with every push. 'Locals at FP - k' is how compiled code addresses variables without runtime searching - the sentence that ties layout to code generation.",
            },
            examQuestions: [
              {
                q: "Explain runtime storage organization and draw the activation record layout with caller and callee duties, FP/SP navigation, and compare access links with displays for non-local access.",
                marks: 14,
                outline: [
                  "Regions: code, static, stack, heap",
                  "AR fields: actuals, return address, saved status, locals, temporaries, outgoing",
                  "Caller: actuals + return address; callee: saves FP, allocates locals",
                  "FP anchors fixed offsets; SP tracks the top",
                  "Access links: chain to enclosing ARs per nesting level",
                  "Display: indexed array - O(1) access to any enclosing scope",
                  "AR lifetime brackets each call exactly",
                ],
              },
              {
                q: "When does a display outperform access links?",
                marks: 7,
                outline: [

                  "Deeply nested scopes: links need a chain walk per level",

                  "Display indexes directly to any enclosing AR in one step",

                  "Cost: display maintenance on every call/return",

                  "Each level up costs one link traversal - O(depth)",

                  "Displays pay O(1) at the price of update work",

                ],              },
            ],
          },
          {
            number: "3.5",
            title: "Storage allocation strategies - static, stack and heap",
            body: [
              "Three allocation strategies match three kinds of data lifetime. Static allocation: addresses fixed at compile time - globals, and (in old FORTRAN) everything; calls need no stack because each procedure's variables live at one address (recursion impossible - re-entering a procedure overwrites itself). Stack allocation: activation records pushed per call, popped per return - locals are FP-offset addresses; supports recursion and re-entrancy; dies with the call. Heap allocation: explicit requests (malloc/new) and releases (free/GC) - lifetime controlled by the programmer or collector, fragments over time.",
              "The heap's two management styles are the syllabus's implementation notes: manual management (malloc/free - fast, error-prone: dangling pointers after premature free, leaks after forgotten free) versus garbage collection (trace reachability from roots, reclaim unreachable - safe, costs pause time; mark-sweep, mark-compact, generational variants assume an older generation survives). A worked allocation trace: 'p = malloc(n); q = p; free(p); *q' - manual style leaves q dangling (use-after-free); GC style keeps p alive while reachable and reclaims after the last reference dies. Same code, opposite failure modes - the style trade in two lines.",
              "The selection logic ties the three strategies to 3.4's record structure: locals and temporaries belong on the stack (lifetime = call); globals and constants belong static (lifetime = program); programmer-constructed data (linked lists, objects) belongs heap (lifetime = reachability). The exam's cause-effect sentence: data lifetime decides the strategy, and the strategy decides the addressing - static = fixed addresses, stack = FP offsets, heap = pointers.",
              "Exam framing: expect 'compare static, stack and heap allocation'. Give each strategy's data class, addressing, and capability (recursion!), the heap's manual-vs-GC styles with the dangling-pointer trace, and close with the lifetime-decides sentence. swap(a, a) is the aliasing probe - reference semantics corrupt it, value-result avoids it. The f(x) trace table is the comparison - four mechanisms, four outcomes, one callee body.",
            ],
            keyTerms: [
              { term: "Static allocation", definition: "Compile-time fixed addresses; no recursion possible." },
              { term: "Stack allocation", definition: "ARs per call; FP-offset addressing; recursion natural." },
              { term: "Heap allocation", definition: "Explicit dynamic allocation; pointer addressing; GC or manual reclamation." },
              { term: "Dangling pointer", definition: "A pointer to freed storage - manual management's classic hazard." },
            ],
            table: {
              caption: "The three strategies.",
              headers: ["Strategy", "Data class", "Addressing", "Capabilities"],
              rows: [
                ["Static", "Globals, constants", "Compile-time fixed", "No recursion; fast, simple"],
                ["Stack", "Locals, temporaries, ARs", "FP offsets", "Recursion; dies with call"],
                ["Heap", "Constructed data", "Pointers", "Any lifetime; fragmentation; GC cost"],
              ],
            },
            bullets: [
              "Static: globals at compile-time addresses - recursion impossible.",
              "Stack: ARs per call; locals at FP offsets; supports recursion.",
              "Heap: malloc/new with free/GC; lifetime = reachability, not scope.",
              "Manual heap: fast but dangling pointers and leaks.",
              "GC: mark-sweep/compact/generational - safe at pause cost.",
              "Trace: q = p; free(p) dangles under manual; GC reclaims at last reference.",
            ],
            diagram: {
              kind: "compare",
              title: "Static vs stack vs heap",
              caption: "Three strategies, three lifetimes, three addressing modes.",
              left: {
                heading: "Static + stack",
                items: [
                  "Static: globals, fixed addresses, no recursion",
                  "Stack: per-call ARs, FP-offset locals",
                  "Lifetime decided by structure (program or call)",
                  "Fast, predictable, no runtime manager",
                ],
              },
              right: {
                heading: "Heap",
                items: [
                  "Programmer-constructed data at pointers",
                  "Lifetime = reachability (GC) or explicit free",
                  "Flexible but fragmented and slower",
                  "Failure modes: leak (forgotten) or dangle (premature)",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Recursion needs the stack",
              body: "The historical mark: static allocation cannot support recursion because re-entering a procedure reuses its one set of addresses - each recursive call overwrites the previous frame's locals. The stack's per-call records are precisely the fix; any 'why the stack?' question ends with recursion.",
            },
            examQuestions: [
              {
                q: "Compare static, stack and heap allocation - data classes, addressing, recursion capability - and discuss heap management styles with the dangling-pointer trace.",
                marks: 14,
                outline: [
                  "Static: compile-time addresses; globals; no recursion",
                  "Stack: per-call ARs; FP-offset locals; recursion natural",
                  "Heap: pointers; lifetime = reachability or explicit free",
                  "Manual: malloc/free - fast, dangling and leak hazards",
                  "GC: mark-sweep, compact, generational - safe, pauses",
                  "Trace: q = p; free(p) dangles manually; GC reclaims at last reference",
                  "Sentence: lifetime decides strategy; strategy decides addressing",
                ],
              },
              {
                q: "Why can stack allocation not leak memory the way the heap does?",
                marks: 7,
                outline: [

                  "ARs pop exactly at return - lifetime is syntactically bounded",

                  "No free call to forget; no references outliving the frame",

                  "Escape to the heap is what moves data out of that discipline",

                  "Side effects in the argument multiply per evaluation",

                  "Algol's surprises made call-by-value the default successor",

                ],              },
            ],
          },
          {
            number: "3.6",
            title: "Parameter passing mechanisms",
            body: [
              "The syllabus's mechanisms, each with a distinct callee contract. Call by value: the callee receives a copy - assignments affect only the copy (C's default; Java's objects pass references by value, so field mutations escape but reassignment does not). Call by reference: the callee receives the caller's variable's address - assignments mutate the original (C++'s &, FORTRAN's classic). Call by value-result (copy-in copy-out): copy in at entry, copy back at exit - reference-like effect without aliasing hazards. Call by name: the argument is re-evaluated as text at each use (Algol's thunk mechanism) - famously surprising in Jensen's device.",
              "A worked difference trace fixes all four on one callee: 'f(x) { x = x + 1 }' called as f(a) with a = 5. Value: copy 5, increments the copy, a stays 5. Reference: a's address, a becomes 6. Value-result: copy in 5, increments to 6, copies back - a = 6 (same result as reference here, differing when the parameter aliases other data). Name: the expression passed is re-evaluated at each use - pass f(a[i]) with i changing inside f and each use reads a different element. Four mechanisms, four outcomes, one callee body.",
              "The aliasing hazard is the section's security-grade point: reference parameters let two names reach one storage - 'swap(a, a)' with reference semantics corrupts the swap (both references are the same variable: temp = a; a = a; a = temp - nothing swaps, or worse, zeroing occurs in some formulations). Value-result avoids aliasing but breaks when the two copies are supposed to alias. The exam's framing sentence: the mechanism is a contract about who may write what - and every mechanism except pure value opens an aliasing or evaluation-order surprise worth naming.",
              "Exam framing: expect 'compare parameter passing mechanisms'. Give the four mechanisms with their contracts, run the f(x) = x + 1 trace across all four, name Jensen's device and the swap-aliasing hazard, and close with the contract sentence. One missing semicolon must not yield forty errors - the synchronizer collapses the cascade. The 'int x 5;' trace is the worked recovery - one report, one sync, no cascade.",
            ],
            keyTerms: [
              { term: "Call by value", definition: "Callee gets a copy - original untouched." },
              { term: "Call by reference", definition: "Callee gets the caller's address - original mutable, aliasing possible." },
              { term: "Value-result", definition: "Copy in, copy out - reference-like effect without aliasing." },
              { term: "Call by name (thunk)", definition: "Argument text re-evaluated at each use - Algol's surprise machine." },
            ],
            table: {
              caption: "Four mechanisms on 'x = x + 1' with a = 5.",
              headers: ["Mechanism", "Callee receives", "a after the call"],
              rows: [
                ["Value", "Copy of 5", "5 (unchanged)"],
                ["Reference", "Address of a", "6"],
                ["Value-result", "Copy in, copy back", "6"],
                ["Name", "Thunk re-evaluating a", "6 (a re-evaluated each use)"],
              ],
            },
            bullets: [
              "Value: copies - safe, costs copying large structures.",
              "Reference: addresses - fast, mutates originals, aliasing hazard.",
              "Value-result: copy-in/copy-out - reference effect, no aliasing, but breaks real aliasing.",
              "Name: thunks re-evaluate argument text per use - Jensen's device.",
              "Worked trace: f(x){x = x + 1} on a = 5 gives 5, 6, 6, 6 across the four.",
              "Hazard: swap(a, a) corrupts under reference semantics.",
            ],
            diagram: {
              kind: "fork",
              title: "What the callee may write",
              caption: "The mechanism is a write-permission contract.",
              start: "Callee assigns to parameter x",
              branches: [
                { label: "By value", outcome: "writes its own copy - caller's data untouched", good: true },
                { label: "By reference", outcome: "writes the caller's variable through its address", good: false },
                { label: "By value-result", outcome: "writes its copy, copies back at return - no aliasing", good: true },
                { label: "By name", outcome: "re-evaluates the argument expression at each write", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "swap(a, a) is the aliasing probe",
              body: "The exam's favourite hazard: under call-by-reference, swap(a, a) has both parameters addressing one variable - the classic temp sequence zeroes or no-ops it. Value-result avoids the corruption but cannot express intentional aliasing. Naming this probe demonstrates the mechanisms' real difference.",
            },
            examQuestions: [
              {
                q: "Compare call by value, reference, value-result and name - contracts, the f(x){x = x + 1} trace with a = 5, Jensen's device, and the swap(a, a) aliasing hazard.",
                marks: 14,
                outline: [
                  "Value: copy; a stays 5 - safe, copies cost",
                  "Reference: address; a becomes 6 - fast, aliasing possible",
                  "Value-result: copy-in/copy-out; a = 6 - no aliasing, breaks real aliasing",
                  "Name: thunk re-evaluates per use - Jensen's device changes i mid-call",
                  "Trace table: 5, 6, 6, 6 across the four mechanisms",
                  "Hazard: swap(a, a) corrupts with reference parameters",
                  "Contract sentence: mechanism = who may write what",
                ],
              },
              {
                q: "Why does Java's 'everything by value' still allow object mutation?",
                marks: 7,
                outline: [

                  "References to objects are passed by value - the reference is copied",

                  "Reassigning the parameter does not touch the caller's variable",

                  "Mutating through the copied reference reaches the shared object",

                  "Copy-back order depends on the parameter list",

                  "The mechanisms agree only in alias-free calls",

                ],              },
            ],
          },
          {
            number: "3.7",
            title: "Symbol tables, error detection and recovery",
            body: [
              "The symbol table (1.2's structure, now operational): a hash-organized registry with scope handling - enter scope (push a new chain or scope id), insert (name + attributes), lookup (search current scope, then enclosing), exit scope (pop). Two implementation styles: a single global table with scope markers (reclaim entries on pop) versus one table per scope chained to parents. Lookup semantics follow the language: innermost declaration wins; C's block scoping shadows outer names; Ada's open scoping allows multi-scope references.",
              "Error detection and recovery is the compiler's resilience layer - the syllabus's ad-hoc vs systematic distinction. Ad-hoc methods: per-site decisions (skip a token, insert a missing semicolon, delete a stray brace) - fast to build, unprincipled. Systematic methods: panic-mode recovery (discard input until a synchronizing token from the FOLLOW set - cheap, may skip too much), phrase-level recovery (local correction on known error classes), error productions (grammar rules for common mistakes: A -> error B catches and reports precisely), and global correction (choose the minimal-cost correction over the whole input - theoretically ideal, practically expensive).",
              "A worked recovery trace fixes the panic-mode pattern. Input 'int x 5;' - the parser at statement level expects ';' or ',' after x, sees 5 (error at line 1). Panic-mode: report 'missing , or ;', scan forward until a token in the FOLLOW set of the declaration context (';' qualifies), resume parsing from there - one error reported, no cascade. The cascade problem is the reason recovery matters: without synchronizers, one missing semicolon generates a wall of spurious errors (each subsequent token a new 'unexpected'), and the student's real mistake drowns. The exam's sentence: recovery's purpose is one error, one message - the diagnostic signal-to-noise ratio is the design goal.",
              "Exam framing: expect 'explain error recovery strategies' or 'symbol table operations'. Give the table operations with scope handling, the four systematic methods with the panic-mode trace on 'int x 5;', and close with the signal-to-noise sentence. The signal-to-noise ratio is recovery's success metric - one genuine mistake, one diagnostic. The signal-to-noise sentence is the evaluation criterion - the cascade is the failure it prevents.",
            ],
            keyTerms: [
              { term: "Enter/exit scope", definition: "Push/pop scope chains - innermost declaration wins lookup." },
              { term: "Panic mode", definition: "Discard tokens until a FOLLOW-set synchronizer - cheap, coarse recovery." },
              { term: "Error productions", definition: "Grammar rules for known mistakes - precise, localized diagnosis." },
              { term: "Global correction", definition: "Minimal-cost repair over the whole input - ideal but expensive." },
            ],
            table: {
              caption: "The recovery strategy card.",
              headers: ["Strategy", "Mechanism", "Trade-off"],
              rows: [
                ["Panic mode", "Skip to FOLLOW-set synchronizer", "Cheap; may skip valid code"],
                ["Phrase-level", "Local fixes on known error classes", "Targeted; needs per-site work"],
                ["Error productions", "Grammar rules for common mistakes", "Precise; grammar grows"],
                ["Global correction", "Minimal-cost whole-input repair", "Best messages; heavy computation"],
              ],
            },
            bullets: [
              "Symbol table ops: enter scope, insert, lookup, exit scope - hash-organized.",
              "Lookup: innermost first, then enclosing scopes - shadowing semantics.",
              "Ad-hoc recovery: per-site skips and inserts - unprincipled but common.",
              "Panic mode: discard to FOLLOW-set tokens - one report per region.",
              "Error productions: A -> error B catches known mistakes precisely.",
              "Goal: one error, one message - the cascade kills the diagnostic signal.",
            ],
            diagram: {
              kind: "cycle",
              title: "The detect-report-recover loop",
              caption: "Recovery keeps the compiler alive - and the error list readable.",
              steps: [
                { label: "Detect", note: "unexpected token or type mismatch" },
                { label: "Report", note: "file, line, column, class - one clear message" },
                { label: "Recover", note: "panic skip / phrase fix / error production" },
                { label: "Continue", note: "parsing resumes at a synchronizer" },
                { label: "Aggregate", note: "all errors collected for the final report" },
              ],
            },
            callout: {
              type: "exam",
              title: "One missing semicolon must not yield forty errors",
              body: "The recovery question's real evaluation criterion: does one genuine mistake produce one diagnostic? A missing ';' without recovery cascades into dozens of 'unexpected token' messages; a FOLLOW-set synchronizer collapses the cascade to one. Write the 'int x 5;' trace to demonstrate.",
            },
            examQuestions: [
              {
                q: "Explain symbol table operations with scope handling, and the systematic error recovery strategies - panic mode, phrase-level, error productions, global correction - with a worked panic-mode trace on 'int x 5;'.",
                marks: 14,
                outline: [
                  "Table ops: enter, insert, lookup, exit - hash with scope chains",
                  "Lookup semantics: innermost declaration wins (shadowing)",
                  "Ad-hoc per-site fixes are unprincipled; panic mode discards to FOLLOW synchronizers",
                  "Trace 'int x 5;': report missing separator; sync on ';'; resume",
                  "Error productions: A -> error B for known mistakes",
                  "Global correction: minimal-cost repair - ideal, expensive",
                  "Goal: one error, one message - signal over cascade",
                ],
              },
              {
                q: "Why are FOLLOW-set tokens chosen as panic-mode synchronizers?",
                marks: 7,
                outline: [

                  "FOLLOW(A) lists tokens that can legally follow the current context",

                  "Resuming there lets the parser continue in a viable state",

                  "Other choices risk discarding into unrecoverable positions",

                  "Statement boundaries are natural FOLLOW-set tokens",

                  "Recovery quality is measured by skipped-code volume",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Intermediate Code Generation and Code Generation",
      summary:
        "Unit IV bridges front end and machine: three-address code for declarations and assignments, boolean expressions and control-flow translation with backpatching, case statements and procedure calls, the issues in code generator design, basic blocks and flow graphs, register allocation and assignment, and DAG representations with peephole optimization and code from DAGs.",
      chapter: {
        number: "04",
        title: "Intermediate Code and Code Generation",
        intro:
          "Unit IV covers intermediate code generation - declarations, assignment statements, boolean expressions, case statements, backpatching, procedure calls - and code generation: design issues, basic blocks and flow graphs, register allocation and assignment, DAG representation of basic blocks, peephole optimization, and generating code from DAGs.",
        inOneBreath:
          "Three-address code (x = y op z) is the compiler's universal middle language - statements, booleans with short-circuit jumps, case dispatch, and procedure calls all translate into it, with backpatching filling jump targets in one pass. The code generator's concerns (selection, registers, order) work on basic blocks and flow graphs; DAGs expose common subexpressions and dead code; peephole windows polish the target; and registers are allocated by coloring the interference graph.",
        sections: [
          {
            number: "4.1",
            title: "Three-address code - declarations and assignments",
            body: [
              "Three-address code (TAC) is the intermediate language: at most one operator per instruction, so every statement has the shape x = y op z, x = op y, x = y, or a jump (goto L, if x relop y goto L). At most three addresses - two operands, one result - makes every instruction trivially translatable and optimizable. The forms the syllabus names: binary assignment x = y + z, unary x = -y, copy x = y, unconditional jumps, conditional jumps, indexed x = y[i], and the address/dereference pair x = &y, x = *y.",
              "A worked translation fixes the discipline. Source: 'position = initial + rate * 60' becomes t1 = inttofloat(60); t2 = id3 * t1; t3 = id2 + t2; position = t3 (1.4's trace, now as a language). Declarations translate to symbol-table entries plus type information (integer x -> x's entry typed int, possibly a storage reservation); arrays 'a[i] = b[j - 2]' expands: t1 = j - 2; t2 = b[t1]; a[i] = t2 - one operator per line, temporaries introduced freely. The naming convention (t1, t2, ...) is a discipline: temporaries are the IR's registers-to-be, and their lifetime analysis feeds register allocation (4.6).",
              "The IR-choice context completes the section: alternatives include syntax trees, postfix notation, quadruples (op, arg1, arg2, result - four fields, table-friendly), triples (index-referenced, no result field) and indirect triples (a list of pointers to triples). Quadruples are the exam's default form: t1 = inttofloat(60) is (inttofloat, 60, -, t1). The comparison point: quadruples cost memory and are easy to reorder (optimizer-friendly); triples save space but reordering breaks index references. The exam's framing sentence: TAC is the interface language 1.3 promised - universal, machine-independent, one operator at a time.",
              "Exam framing: expect 'what is three-address code' or 'translate to TAC/quadruples'. Give the instruction forms, run the position/rate/60 translation into quadruples, expand an array assignment, and compare quadruples with triples - closing with the interface sentence. One operator per line is the law - expanding sub-expressions is the translator's job, collapsing is the optimizer's. The array-expansion trace is the second illustration - one operator per line throughout.",
            ],
            keyTerms: [
              { term: "Three-address code", definition: "One operator per instruction: x = y op z, jumps, indexed access." },
              { term: "Quadruple", definition: "(op, arg1, arg2, result) - the table-friendly TAC encoding." },
              { term: "Triple", definition: "Two-field TAC referencing itself by index - space-saving, reorder-hostile." },
              { term: "Temporary", definition: "t1, t2 ... - compiler-created values whose lifetimes feed register allocation." },
            ],
            bullets: [
              "TAC: at most one operator and three addresses per instruction.",
              "Forms: binary, unary, copy, conditional/unconditional jumps, indexed, address/deref.",
              "Worked: position = initial + rate * 60 -> four TAC lines with temporaries.",
              "Array assignment expands through temporaries: t1 = j - 2; t2 = b[t1].",
              "Quadruple (op, arg1, arg2, result) - reorderable, optimizer-friendly.",
              "Triples save the result field but break under reordering.",
            ],
            diagram: {
              kind: "flow",
              title: "From source to TAC to target",
              caption: "The IR is the universal middle - every front end lands here, every back end lifts from here.",
              steps: [
                { label: "AST", note: "annotated syntax tree from 1.4" },
                { label: "TAC emission", note: "one operator per line; temporaries introduced" },
                { label: "Quadruples", note: "(op, arg1, arg2, result) table" },
                { label: "Optimizer", note: "transforms the table (Unit V)" },
                { label: "Code generator", note: "selects instructions from TAC" },
              ],
            },
            callout: {
              type: "exam",
              title: "One operator per line is the law",
              body: "The TAC discipline's test: 'rate * 60' may never appear inside a larger instruction - it becomes its own line with a temporary. When asked to translate, expanding every sub-expression into temporaries is the mechanical rule; collapsing them is the optimizer's job, not the translator's.",
            },
            examQuestions: [
              {
                q: "Define three-address code and its instruction forms, translate 'position = initial + rate * 60' into quadruples, expand an array assignment, and compare quadruples with triples.",
                marks: 14,
                outline: [
                  "TAC: one operator per instruction; x = y op z; jumps; indexed",
                  "Quadruples: (op, arg1, arg2, result) encoding",
                  "Translation: t1 = inttofloat(60); t2 = id3 * t1; t3 = id2 + t2; position = t3",
                  "Array: a[i] = b[j-2] -> t1 = j - 2; t2 = b[t1]; a[i] = t2",
                  "Declarations: symbol-table entries with types and storage",
                  "Quadruples reorderable; triples index-referenced and fragile",
                  "TAC = the front/back-end interface language",
                ],
              },
              {
                q: "Why are temporaries given sequential names t1, t2 ...?",
                marks: 7,
                outline: [

                  "Deterministic naming aids debugging and phase hand-off",

                  "Lifetimes of temporaries drive register allocation later",

                  "Optimizer compresses them once live ranges are known",

                  "Optimizations written once serve every target language",

                  "The IR carries types the transformations consume",

                ],              },
            ],
            codeExample: {
              language: "text",
              caption: "Source -> quadruples -> target for one statement",
              code: `-- source
position = initial + rate * 60

-- quadruples (op, arg1, arg2, result)
(inttofloat, 60,    -,   t1)
(*,          id3,   t1,  t2)
(+,          id2,   t2,  t3)
(=,          t3,    -,   position)

-- target (after code generation)
LDF  id2, R1
LDF  id3, R2
MULF #60.0, R2
ADDF R1, R2
STF  R2, position`,
            },
          },
          {
            number: "4.2",
            title: "Boolean expressions and control-flow translation",
            body: [
              "Boolean expressions translate two ways: value code (compute 0/1 into a temporary - simple, wasteful) and control-flow code (jump to the target directly on truth or falsehood - the short-circuit form, which is both an efficiency win and a semantics requirement: 'if (p && p->valid)' must not dereference p when p is false). The translation scheme for E1 and E2 emits E1.true-jump guarded, then E2's tests; E1 or E2 short-circuits the other way. The inherited attributes E.true and E.false name the labels to jump to - inherited attributes from 2.7 doing real work.",
              "A worked translation fixes the pattern. Source: if (a < b or c < d) x = 1. Control flow: t1: if a < b goto Ltrue; goto L1; L1: if c < d goto Ltrue; goto Lfalse; Ltrue: x = 1; goto Lnext; Lfalse: (next statement). With short-circuit or: the first test jumping true skips evaluating c < d entirely - the semantics guarantees it. Relational operators translate as: a < b evaluates via subtraction/compare plus a conditional jump - 'if a < b goto ...' is itself sugar for compare-and-jump code.",
              "Backpatching is the one-pass technique that makes this efficient: emit jumps with unfilled targets, remember the lists of pending jumps (truelist, falselist), and patch them when the target labels become known. The scheme runs markers (M -> epsilon actions) that record the next-instruction index; merging lists and backpatching (fill all pending jumps to a known index) complete translation without a second pass. The exam's structure sentence: boolean translation is jump-threaded code; backpatching is how one pass builds it.",
              "Exam framing: expect 'translate boolean expressions' or 'explain backpatching'. Give the value-vs-control-flow choice with the short-circuit necessity, the if (a < b or c < d) trace, the backpatching lists and markers, and close with the semantics sentence - short-circuiting is correctness, not just speed. Short-circuiting is a correctness clause - the second operand may be undefined when the first decides.",
            ],
            keyTerms: [
              { term: "Short-circuit", definition: "and/or skip evaluation when the answer is decided - a semantic requirement." },
              { term: "E.true / E.false", definition: "Inherited attributes naming where to jump on truth/falsehood." },
              { term: "Backpatching", definition: "Emit jumps with blanks; fill targets from truelist/falselist when known." },
              { term: "Marker (M -> epsilon)", definition: "Records the next instruction index - the anchor for list merges." },
            ],
            table: {
              caption: "Control-flow translation for a < b or c < d.",
              headers: ["Index", "Instruction", "Note"],
              rows: [
                ["100", "if a < b goto _", "true-jump, target patched later"],
                ["101", "goto _", "false-chain begins"],
                ["102", "if c < d goto _", "second test (skipped if 100 jumps)"],
                ["103", "goto _", "fall-through false"],
                ["...", "backpatch: 100 and 102 -> Ltrue; 101 and 103 -> Lfalse", "one pass, lists filled"],
              ],
            },
            bullets: [
              "Two translation styles: value code (0/1 temp) vs control-flow (direct jumps).",
              "Short-circuit is semantic: p && p->valid must not dereference on false.",
              "E.true/E.false inherited attributes name the jump targets.",
              "or: first-true jumps; and: first-false jumps - merging lists at each operator.",
              "Backpatching: emit blanks, remember truelist/falselist, patch at labels.",
              "Marker productions record next-instruction indices for one-pass translation.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Backpatched boolean translation",
              caption: "Emit, remember, merge, patch - one pass from boolean to jump code.",
              stages: [
                { label: "Emit test", note: "if a < b goto _ (target blank)" },
                { label: "Record lists", note: "truelist/falselist remember pending jumps" },
                { label: "Merge", note: "at or/and, combine children's lists" },
                { label: "Marker anchor", note: "M -> epsilon notes the next index" },
                { label: "Backpatch", note: "fill all pending targets when labels known" },
              ],
            },
            callout: {
              type: "exam",
              title: "Short-circuit is a correctness clause",
              body: "The sentence examiners look for: 'the jump-translation is not merely efficient - the language definition requires it, because the second operand may be undefined when the first decides.' Efficiency and semantics agree here; say both.",
            },
            examQuestions: [
              {
                q: "Explain the two translation styles for boolean expressions, translate 'if (a < b or c < d) x = 1' with short-circuit jumps, and describe backpatching with truelist/falselist and markers.",
                marks: 14,
                outline: [
                  "Value code: compute 0/1 temp - simple but evaluates everything",
                  "Control-flow code: direct jumps - required for short-circuit semantics",
                  "p && p->valid example: second operand must not evaluate on false",
                  "Trace: if a < b goto Ltrue; else test c < d",
                  "E.true/E.false inherited attributes; or merges lists",
                  "Backpatching: emit blanks; truelist/falselist; markers record indices",
                  "Patch all pending jumps once targets are known - one pass",
                ],
              },
              {
                q: "Why do truelist and falselist hold jump indices rather than labels?",
                marks: 7,
                outline: [

                  "In one pass, targets are not yet known when jumps are emitted",

                  "Indices let the scheme patch every pending jump at once",

                  "Backpatching fills the blanks when the label's position becomes known",

                  "Short-circuiting is semantic, not merely efficient",

                  "The second operand may be undefined when the first decides",

                ],              },
            ],
          },
          {
            number: "4.3",
            title: "Case statements, procedure calls and backpatching applied",
            body: [
              "The switch/case statement translates as a dispatch: switch (expr) evaluates expr into a temporary, then compares against each case constant with conditional jumps to case bodies, with a default jump when nothing matches. Two implementations at target level: the test chain (linear compares - fine for few cases) and the jump table (index into an address array - O(1) for dense cases). A worked chain for switch (x) case 1: a; case 2: b; default: c: t = x; if t = 1 goto La; if t = 2 goto Lb; goto Lc - the IR is a compare chain; the code generator may replace it with a bounds-checked indexed jump.",
              "Procedure calls translate through a fixed protocol (3.4's convention in IR form): evaluate parameters (param t1, param t2), execute call p, n (n parameters), then on return bind the result (x = call value). The callee-side translation mirrors it: the prologue (save FP, set FP, advance SP) and epilogue (restore, return) bracket the body - and the AR layout from 3.4 is what those instructions implement. A worked pair: caller emits param x; param y; call compute, 2; z = ret-val; callee's prologue/epilogue frame the body. Nested calls simply stack - the IR's param/call discipline is the AR template in motion.",
              "Backpatching completes its syllabus role beyond booleans: any forward jump (loop exits, case dispatch, break statements) emits blanks and patches later. The technique's generality is the section's closing point: one mechanism (emit-blank, remember-list, patch-later) serves booleans, case chains, loop structures and procedure-boundary checks - and its cost is careful list bookkeeping, which is why two-pass alternatives (re-parse for labels) trade pass count for simplicity.",
              "Exam framing: expect 'translate a switch statement' or 'describe procedure call translation'. Give the compare-chain and jump-table options, the param/call protocol with prologue/epilogue, and backpatching's general role - closing with the one-mechanism sentence. Dense cases earn a jump table - sparse cases keep the compare chain. The bounds-check note is the table's guard - density and safety conditions together.",
            ],
            keyTerms: [
              { term: "Jump table", definition: "Dense-case dispatch: index an address array instead of a compare chain." },
              { term: "param / call", definition: "The IR protocol: parameters pushed, call with count, result bound." },
              { term: "Prologue / epilogue", definition: "Callee's frame setup and teardown bracketing the body." },
              { term: "Dispatch", definition: "Routing expr's value to the matching case body." },
            ],
            table: {
              caption: "Switch translation (compare chain) for cases 1, 2, default.",
              headers: ["Step", "IR", "Note"],
              rows: [
                ["Evaluate", "t = x", "switch expression into a temp"],
                ["Case 1", "if t = 1 goto La", "compare chain"],
                ["Case 2", "if t = 2 goto Lb", "next comparison"],
                ["Default", "goto Lc", "fall-through default"],
                ["Optimization", "bounds check + jump table", "O(1) when cases are dense"],
              ],
            },
            bullets: [
              "Switch: evaluate expr, compare-chain against case constants, default fall-through.",
              "Jump table: dense cases become an indexed address array - O(1) dispatch.",
              "Calls: param instructions, call p n, result binding on return.",
              "Prologue/epilogue implement the AR template (save FP, set FP, restore).",
              "Nested calls stack naturally - the protocol is re-entrant.",
              "Backpatching serves booleans, cases, loops - one emit-blank/patch-later mechanism.",
            ],
            diagram: {
              kind: "flow",
              title: "A call, end to end",
              caption: "Caller's params, callee's frame, return - the AR discipline in IR form.",
              steps: [
                { label: "Evaluate params", note: "param t1; param t2" },
                { label: "Call", note: "call compute, 2" },
                { label: "Callee prologue", note: "save FP; set FP; advance SP" },
                { label: "Body", note: "executes; result in the agreed register" },
                { label: "Epilogue + return", note: "restore; caller binds result" },
              ],
            },
            callout: {
              type: "tip",
              title: "Dense cases earn a table",
              body: "The code generator's choice rule: a compare chain costs O(k) comparisons for k cases; a jump table costs one bounds check plus one indexed load - when case constants are dense (1..k), the table wins. Sparse cases keep the chain. Name both conditions in switch answers.",
            },
            examQuestions: [
              {
                q: "Translate a switch statement in both compare-chain and jump-table forms, describe procedure call translation with param/call and prologue/epilogue, and state backpatching's general role.",
                marks: 14,
                outline: [
                  "Switch IR: t = x; if t = 1 goto La; if t = 2 goto Lb; goto Lc",
                  "Jump table: bounds check + indexed address array for dense cases",
                  "Call protocol: param t1; param t2; call p, 2; result binding",
                  "Prologue: save FP, set FP, advance SP; epilogue mirrors it",
                  "Nested calls stack naturally - re-entrant protocol",
                  "Backpatching: forward jumps emitted blank, patched when labels known",
                  "One mechanism serves booleans, cases, loops and break",
                ],
              },
              {
                q: "When is a compare chain preferable to a jump table?",
                marks: 7,
                outline: [

                  "Sparse case values - a table would be huge and mostly empty",

                  "Few cases - the chain's linear cost is trivial",

                  "Table needs density and bounds checks to be safe",

                  "Jump-table dispatch is O(1) for dense cases",

                  "The bounds check guards table safety",

                ],              },
            ],
          },
          {
            number: "4.4",
            title: "Issues in the design of a code generator",
            body: [
              "The code generator consumes IR and emits target code, and its design issues are the syllabus's named four-plus. Instruction selection: mapping IR operations to machine instructions - a naive one-to-one mapping (each TAC line to an instruction) is simple but poor ('a = a + 1' becomes load/add/store instead of one INC); pattern-matching selection (tree patterns covering IR fragments, as in retargetable compilers) picks better sequences. The worked example: t1 = a + b; t2 = t1 + c; a = t2 optimizes by hand into ADD c after ADD b in one register - naive selection uses five instructions for what three do.",
              "Register allocation and assignment: variables and temporaries live in registers where possible; the two problems are allocation (which values live in registers over which ranges) and assignment (which physical register each gets) - handled fully in 4.6. Evaluation order: the order of computation affects register pressure - computing the cheaper or shorter-lived side first often frees a register sooner; the DAG (4.7) provides the ordering analysis. Memory management of the target: choosing addressing modes, handling spills (registers exhausted -> memory), and keeping code size sensible.",
              "The cross-cutting concerns complete the syllabus list: the generator must be correct above all (every IR program translates to semantics-preserving code - the invariant all optimizations respect), efficient to compile with (generator speed matters for development builds), and retargetable where possible (machine descriptions as data - 1.3's back-end arithmetic). The exam's structure sentence: the generator's four dials - selection, allocation, order, memory - all tune one invariant: semantics preserved, cost minimized.",
              "Exam framing: expect 'discuss the issues in code generator design'. Give the four issues with the naive-vs-pattern selection example, the register/order/memory notes, and the correctness invariant - closing with the four-dials sentence. The INC example is selection's embarrassment - three instructions where one suffices. The four-issue table is the answer's skeleton - one question and one technique per row.",
            ],
            keyTerms: [
              { term: "Instruction selection", definition: "Mapping IR fragments to target instructions - naive vs pattern-matched." },
              { term: "Register allocation", definition: "Deciding which values reside in registers over which ranges." },
              { term: "Evaluation order", definition: "Computation sequencing that minimizes register pressure." },
              { term: "Spill", definition: "Register exhaustion forcing a value back to memory." },
            ],
            table: {
              caption: "The four design issues.",
              headers: ["Issue", "Question", "Technique"],
              rows: [
                ["Selection", "Which instructions realize each IR op?", "Naive mapping vs tree-pattern matching"],
                ["Allocation", "Which values stay in registers?", "Liveness + graph coloring (4.6)"],
                ["Order", "What sequence minimizes pressure?", "DAG-driven ordering"],
                ["Memory", "Which addressing modes and spills?", "Cost models, spill heuristics"],
              ],
            },
            bullets: [
              "Naive selection: one TAC line -> one instruction; correct but wasteful.",
              "Pattern matching: tree patterns cover multi-op IR fragments - better code.",
              "Worked: a + b + c into one register chain - three instructions, not five.",
              "Allocation and assignment split: which values, which registers.",
              "Evaluation order from the DAG minimizes live values.",
              "Invariant: all choices preserve semantics - optimization is constrained correctness.",
            ],
            diagram: {
              kind: "layers",
              title: "The code generator's concerns",
              caption: "Four layers under one invariant - semantics preserved, cost minimized.",
              layers: [
                { label: "Memory and addressing", note: "modes, spills, code size" },
                { label: "Evaluation order", note: "DAG-driven sequencing" },
                { label: "Register allocation", note: "liveness, coloring, assignment" },
                { label: "Instruction selection", note: "IR patterns -> machine instructions" },
              ],
            },
            callout: {
              type: "exam",
              title: "The INC example",
              body: "The one-line naive-selection embarrassment worth quoting: 'a = a + 1' naively becomes LOAD a; ADD #1; STORE a - three instructions and two memory trips - where the machine's INC a does it in one. It demonstrates why selection quality matters more than any other generator choice.",
            },
            examQuestions: [
              {
                q: "Discuss the issues in code generator design - instruction selection (naive vs pattern), register allocation and assignment, evaluation order and memory management - with the a = a + 1 example and the semantics-preservation invariant.",
                marks: 14,
                outline: [
                  "Selection: naive one-to-one mapping vs tree-pattern matching",
                  "Example: a = a + 1 as LOAD/ADD/STORE vs single INC",
                  "Allocation decides residency; assignment names registers",
                  "Evaluation order minimizes live values (DAG, 4.7)",
                  "Memory: addressing modes, spill handling, code size",
                  "Retargetability: machine descriptions as data",
                  "Invariant: every choice preserves semantics at lower cost",
                ],
              },
              {
                q: "Why does evaluation order affect register pressure?",
                marks: 7,
                outline: [

                  "Every computed-but-unconsumed value occupies a register",

                  "Computing short-lived operands first frees registers sooner",

                  "DAG ordering finds the pressure-minimizing sequence",

                  "Selection quality dominates code cost",

                  "The INC example shows three instructions collapsing to one",

                ],              },
            ],
          },
          {
            number: "4.5",
            title: "Basic blocks and flow graphs",
            body: [
              "A basic block is a maximal sequence of consecutive instructions with one entry (the first) and one exit (the last) - control enters only at the top and leaves only at the bottom, which makes within-block analysis simple and powerful. Block partitioning finds leaders (block-start instructions) by three rules: the first instruction; any target of a jump; any instruction immediately following a jump. Everything from one leader to just before the next is a block.",
              "A worked partition fixes the rules. Code: (1) i = 1; (2) t1 = 4*i; (3) a[t1] = 0; (4) if i > 10 goto (8); (5) i = i + 1; (6) goto (2); (7) t2 = a[i]; (8) halt. Leaders: (1) by rule one; (2) - target of goto (6); (4) - target of the conditional? No: (4) follows no jump and is no target - not a leader... by the conditional at (4), instruction (5) is a leader (follows a jump), and (7) is a leader (target of goto (8)? and follows the jump at (6)), (8) is a leader (target). Blocks: B1 = (1)-(3); B2 = (4); B3 = (5)-(6); B4 = (7); B5 = (8).",
              "The flow graph connects blocks with edges: B -> C when control can pass from B's last instruction to C's first - fall-through edges and jump edges. The example's graph: B1 -> B2 (fall-through), B2 -> B3 and B2 -> B5 (conditional), B3 -> B2 (the loop's back edge), B4 -> B5. The graph is the analysis substrate: dominators, loops (5.3), live ranges (4.6) and data-flow (5.6) all live on it. The exam's sentence: blocks are the atoms of optimization; the flow graph is their molecule.",
              "Exam framing: expect 'define basic blocks and construct a flow graph'. Give the three leader rules, partition a worked example, draw the resulting graph with its edges, and close with the substrate sentence. Post-jump instructions are leaders, not the jumps themselves - misplacing the boundary shifts the graph. The leader rules come first - partition only after all three are stated.",
            ],
            keyTerms: [
              { term: "Basic block", definition: "One-entry, one-exit instruction sequence - the optimization atom." },
              { term: "Leader", definition: "A block start: first instruction, jump target, or post-jump instruction." },
              { term: "Flow graph", definition: "Blocks as nodes; fall-through and jump edges as control flow." },
              { term: "Back edge", definition: "An edge returning to an earlier block - the loop marker." },
            ],
            table: {
              caption: "The worked partition.",
              headers: ["Block", "Instructions", "Reason for leaders"],
              rows: [
                ["B1", "(1) i = 1; (2) t1 = 4*i; (3) a[t1] = 0", "(1) first instruction"],
                ["B2", "(4) if i > 10 goto (8)", "fall-through from B1"],
                ["B3", "(5) i = i + 1; (6) goto (2)", "(5) follows conditional jump"],
                ["B4", "(7) t2 = a[i]", "(7) follows unconditional jump"],
                ["B5", "(8) halt", "(8) jump target"],
              ],
            },
            bullets: [
              "Basic block: one entry, one exit - within-block analysis is exact.",
              "Leader rules: first instruction; jump targets; post-jump instructions.",
              "Partition: leaders delimit blocks; everything between belongs to one block.",
              "Flow graph: nodes = blocks; edges = fall-through + jumps.",
              "Worked graph: B1 -> B2 -> {B3, B5}; B3 -> B2 back edge (the loop).",
              "Blocks are the atoms; the graph is the analysis substrate (5.3, 5.6).",
            ],
            diagram: {
              kind: "flow",
              title: "The worked flow graph",
              caption: "Five blocks, one loop - B3's edge back to B2 is the optimization target.",
              steps: [
                { label: "B1", note: "init i and a[i] - entry block" },
                { label: "B2", note: "test i > 10 - two-way branch" },
                { label: "B3", note: "i = i + 1; goto B2 - loop back edge" },
                { label: "B4", note: "post-loop body" },
                { label: "B5", note: "halt - exit block" },
              ],
            },
            callout: {
              type: "exam",
              title: "Post-jump is a leader, not the jump itself",
              body: "The partition trap: instruction (5) after the conditional at (4) is a leader because it follows a jump - the jump instruction itself stays in B2. Misplacing the boundary changes the graph's edges. Quote all three leader rules before partitioning.",
            },
            examQuestions: [
              {
                q: "Define basic blocks with the three leader rules, partition the eight-instruction worked example into blocks, and construct its flow graph with labelled edges.",
                marks: 14,
                outline: [
                  "Block: one entry, one exit - exact intra-block analysis",
                  "Leaders: first instruction; jump targets; post-jump instructions",
                  "Worked: leaders at (1), (4)? no - (5), (7), (8)",
                  "Blocks: B1 (1)-(3), B2 (4), B3 (5)-(6), B4 (7), B5 (8)",
                  "Edges: B1->B2 fall-through; B2->{B3, B5} conditional",
                  "B3->B2 is the loop's back edge; B4->B5 exits",
                  "Blocks = atoms; flow graph = the analysis substrate",
                ],
              },
              {
                q: "Why does the one-entry/one-exit property enable exact analysis?",
                marks: 7,
                outline: [

                  "Within a block, control is strictly linear - no alternatives",

                  "Def-use relationships are direct: last use determines liveness",

                  "Optimizations (common subexpression, dead code) become local decisions",

                  "Within-block analysis is exact - no alternatives",

                  "Leader placement mistakes shift every edge",

                ],              },
            ],
          },
          {
            number: "4.6",
            title: "Register allocation and assignment",
            body: [
              "Registers are the fastest storage, and there are never enough. Allocation decides which values reside in registers over which program ranges; assignment decides which physical register each gets. The tooling: live ranges (from a value's first definition to its last use), the interference graph (a node per live range, an edge when two ranges overlap - they cannot share a register), and graph coloring: color the graph with k = number of registers so no edge joins two nodes of one color; each color is a register.",
              "A worked coloring fixes the mechanics. Four live ranges a, b, c, d in a block; interference edges: a-b, a-c, b-d, c-d; a and d never overlap. With k = 2 registers: color a = R1; b (adjacent to a) = R2; c (adjacent to a, not b... check edges: a-c yes, c-d yes) = R2 is illegal only if c-b is an edge - it is not, so c = R2; d (adjacent to b, c; not a) = R1. Coloring succeeds - a and d time-share R1, b and c time-share R2. If coloring fails (a node's neighbors cover all k colors), spill: choose the spill victim by cost, store to memory, and retry.",
              "The algorithm's shape is the syllabus's named loop: build live ranges from liveness analysis (5.6's data flow), build the interference graph, attempt k-coloring, spill-and-retry on failure. The optimizations around it: coalescing (merging move-related ranges - copy elimination), live-range splitting (spilling only part of a long range), and loop-aware priority (values live across loop iterations get register priority - spilling a loop counter costs a load per iteration). The exam's sentence: allocation is coloring a graph whose edges say 'cannot share' - spills are what failure costs.",
              "Exam framing: expect 'explain register allocation by graph coloring'. Give live ranges and the interference graph, work the four-range two-register coloring, describe spilling and its cost heuristic, and close with the loop-priority note. Spilling a loop counter is the worst spill - one reload per iteration is the cost formula's lesson. The coloring table is the worked proof - four ranges, two registers, no edge monochrome.",
            ],
            keyTerms: [
              { term: "Live range", definition: "From first definition to last use of a value." },
              { term: "Interference graph", definition: "Nodes = live ranges; edges = overlapping (cannot share a register)." },
              { term: "Graph coloring", definition: "k-color the interference graph - each color is a physical register." },
              { term: "Spill", definition: "Coloring failure: store a value to memory by cost-weighted choice." },
            ],
            table: {
              caption: "The worked coloring.",
              headers: ["Range", "Interferes with", "Register"],
              rows: [
                ["a", "b, c", "R1"],
                ["b", "a, d", "R2"],
                ["c", "a, d", "R2 (c-b not an edge)"],
                ["d", "b, c", "R1 (d-a not an edge)"],
              ],
            },
            bullets: [
              "Allocation: which values live in registers; assignment: which register.",
              "Live range: first definition to last use; liveness analysis computes them.",
              "Interference graph: edges between overlapping ranges.",
              "k-coloring: k registers; success = every range gets a color none of its neighbors holds.",
              "Worked: a=R1, b=R2, c=R2, d=R1 - pairs time-share.",
              "Spill on failure: cost = frequency x loop depth; split ranges to spill partially.",
            ],
            diagram: {
              kind: "cycle",
              title: "The allocation loop",
              caption: "Build, color, spill, retry - until the graph fits the register file.",
              steps: [
                { label: "Liveness analysis", note: "compute live ranges (5.6 data flow)" },
                { label: "Build graph", note: "edge for every overlap" },
                { label: "Color with k", note: "assign k registers without edge clashes" },
                { label: "Success?", note: "yes -> emit; no -> spill cheapest" },
                { label: "Retry", note: "re-color with the spilled range in memory" },
              ],
            },
            callout: {
              type: "exam",
              title: "Spilling a loop counter is the worst spill",
              body: "The cost heuristic's showcase: a value live across a loop back edge is reloaded every iteration - spilling it costs one memory access per trip. That is why loop depth multiplies use frequency in the spill-cost formula, and why induction variables get register priority. Quote the loop-counter case in allocation answers.",
            },
            examQuestions: [
              {
                q: "Explain register allocation by graph coloring: live ranges, the interference graph, a worked four-range two-register coloring, spilling and its cost heuristic, and loop-aware priority.",
                marks: 14,
                outline: [
                  "Allocation vs assignment: residency vs naming",
                  "Live range: first definition to last use",
                  "Interference graph: edges for overlapping ranges",
                  "k-coloring: colors = registers; no edge monochrome",
                  "Worked: a=R1, b=R2, c=R2, d=R1 - legal since c-b and d-a are not edges",
                  "Spill: cost-weighted victim; split ranges for partial spills",
                  "Loop priority: back-edge-live values (counters) never spill cheaply",
                ],
              },
              {
                q: "What does coalescing achieve before coloring?",
                marks: 7,
                outline: [

                  "Merges move-related live ranges (x = y copies)",

                  "The copy disappears - one range, one register",

                  "Constraint: coalescing must not create uncolorable high-degree nodes",

                  "Coalescing merges move-related ranges first",

                  "Splitting spills only part of a long range",

                ],              },
            ],
          },
          {
            number: "4.7",
            title: "DAG representation and peephole optimization",
            body: [
              "A DAG (directed acyclic graph) of a basic block shares common subexpressions: each distinct computation gets one node, references point to it - the block's structure with duplication removed. Construction: process instructions in order; for each x = y op z, find-or-create nodes for y and z, find-or-create the op node, attach x as its label (a redefinition of x detaches it from its old node). The DAG exposes what the flat instruction list hides.",
              "A worked DAG read fixes the value. Block: (1) t1 = 4 * i; (2) t2 = a[t1]; (3) t3 = 4 * i; (4) t4 = b[t3]; (5) t5 = t2 + t4. Linear code computes 4 * i twice; the DAG has one node for 4*i - instruction (3) becomes t3 = t1 (a copy). Optimizations fall out: common subexpression elimination (the copy), dead-code elimination (temporaries with no references below), and reordering (leaves first, then interior nodes - the order that minimizes register pressure, 4.4's order issue). Code from the DAG: t1 = 4*i; t2 = a[t1]; t4 = b[t1]; t5 = t2 + t4 - five instructions to four, one array index saved.",
              "Peephole optimization is the target-level polish: a sliding window over generated code applying local rewrites - redundant load/store elimination (LOAD a; ADD; STORE a; LOAD a -> drop the second LOAD), algebraic simplification (x * 2 -> shift; x + 0 -> x; x * 0 -> 0), strength reduction (multiplication by powers of two -> shifts), flow-of-control simplification (jump to jump -> direct jump), and reduction in strength of address arithmetic (induction variables). The two techniques meet: DAGs optimize the IR; peephole optimizes the emitted code - one pass each, different levels.",
              "Exam framing: expect 'explain DAGs with an example' or 'peephole optimizations'. Give the construction rules, work the 4*i duplication example into optimized code, list the peephole rewrite classes with one instance each, and close with the two-level sentence. The DAG finds what the list hides - common subexpressions collapse and dead temporaries simply vanish. The peephole classes are the catalogue - one rewrite instance per class suffices.",
            ],
            keyTerms: [
              { term: "DAG", definition: "Block-level graph sharing common subexpressions - duplication made visible." },
              { term: "Common subexpression elimination", definition: "One node per computation; later references become copies." },
              { term: "Peephole optimization", definition: "Sliding-window local rewrites on target code." },
              { term: "Strength reduction", definition: "Replace costly ops with cheaper ones: x*2 -> shift; induction multiply -> add." },
            ],
            table: {
              caption: "Peephole rewrite classes.",
              headers: ["Class", "Pattern -> rewrite", "Effect"],
              rows: [
                ["Redundant loads", "LOAD a ... STORE a; LOAD a -> drop", "fewer memory trips"],
                ["Algebraic", "x + 0 -> x; x * 1 -> x", "dead arithmetic removed"],
                ["Strength reduction", "x * 2^k -> shift left k", "cheaper operation"],
                ["Control simplification", "JMP L1; L1: JMP L2 -> JMP L2", "jump chains collapsed"],
                ["Dead stores", "STORE x never reloaded -> drop", "eliminated writes"],
              ],
            },
            bullets: [
              "DAG: one node per distinct computation; x's redefinition detaches it.",
              "Worked: 4*i computed twice linearly -> one DAG node -> t3 = t1 copy.",
              "DAG yields CSE, dead-code elimination and a register-friendly order.",
              "Code from DAG: t1 = 4*i; t2 = a[t1]; t4 = b[t1]; t5 = t2 + t4.",
              "Peephole: sliding window on target code - loads, algebra, jumps, strength.",
              "Two levels: DAG optimizes IR; peephole polishes emitted code.",
            ],
            diagram: {
              kind: "compare",
              title: "Linear code vs DAG-derived code",
              caption: "The same block, once duplicated and once shared.",
              left: {
                heading: "Linear (as emitted)",
                items: [
                  "t1 = 4 * i; t2 = a[t1]",
                  "t3 = 4 * i - recomputed",
                  "t4 = b[t3]; t5 = t2 + t4",
                  "Five instructions, one redundant multiply and index",
                ],
              },
              right: {
                heading: "DAG-derived (optimized)",
                items: [
                  "t1 = 4 * i - the single node",
                  "t2 = a[t1]; t4 = b[t1]",
                  "t5 = t2 + t4",
                  "Four instructions; t3 became a copy; ordering minimized registers",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The DAG finds what the list hides",
              body: "The insight sentence: 'the DAG is the block's true shape - common subexpressions collapse to single nodes and dead temporaries simply have no references.' Reading optimizations off the DAG (CSE, DCE, order) is easier than finding them in the flat list; that is the representation's whole point.",
            },
            examQuestions: [
              {
                q: "Explain DAG construction for basic blocks, work the 4*i duplication example into optimized code, list peephole optimization classes with instances, and relate the DAG to evaluation order.",
                marks: 14,
                outline: [
                  "DAG: find-or-create nodes; redefinition detaches labels",
                  "Block with t1 = 4*i and t3 = 4*i: one shared node",
                  "CSE: t3 = t1 (copy); DCE: unreferenced temporaries die",
                  "Code from DAG: t1, a[t1], b[t1], t2 + t4 - four instructions",
                  "Peephole: redundant loads, algebraic identities, strength reduction",
                  "Control simplification: jump-to-jump collapsed",
                  "DAG ordering minimizes register pressure (4.4's order issue)",
                ],
              },
              {
                q: "Why must a DAG remain acyclic?",
                marks: 7,
                outline: [

                  "Cycles would mean a value depends on itself - unorderable",

                  "Acyclicity guarantees a topological order for evaluation",

                  "Self-referencing assignments are handled by detaching old labels",

                  "The DAG's true shape hides in flat lists",

                  "Topological emission order minimizes register pressure",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Code Optimization",
      summary:
        "Unit V improves what the generator produced: the sources of optimization, transformations over basic blocks, loops in flow graphs with dominators and natural loops, the loop-optimization family, dead code elimination, global data flow analysis over structured flow graphs, and symbolic debugging of optimized code.",
      chapter: {
        number: "05",
        title: "Code Optimization",
        intro:
          "Unit V covers the introduction to code optimization and its sources, optimization of basic blocks, loops in flow graphs, dead code elimination, loop optimization, global data flow analysis, code-improving transformations, data flow analysis of structured flow graphs, and symbolic debugging of optimized code.",
        inOneBreath:
          "Optimization removes waste: local transformations clean basic blocks, dominators and back edges find natural loops, code motion lifts invariant computations, induction variables and strength reduction cheapen loops, dead code falls to liveness, and global data flow - reaching definitions and live variables over the flow graph - certifies every transformation's safety. Debugging the result needs debug info that survives the transformations.",
        sections: [
          {
            number: "5.1",
            title: "Sources of optimization - the principal transformations",
            body: [
              "The sources of optimization are the redundancies code routinely contains, and the transformations that remove them are a fixed catalogue. Compile-time evaluation: constant folding (2 * 3 -> 6) and constant propagation (x = 5; y = x * 2 -> y = 10). Common subexpression elimination: compute once, reference thereafter (4.7's DAG view). Dead code elimination: computations whose results nobody uses (5.5). Code motion: invariant computations lifted out of loops (5.4). Strength reduction: expensive operations replaced by cheap ones (x * 8 -> shift; loop multiply -> add). Copy propagation: x = y copies inlined so CSE and DCE see through them.",
              "The scope taxonomy organizes the catalogue by reach: peephole, local (within one basic block - exact analysis), loop (natural loops, the highest-yield scope because code there executes most often), global (across blocks, certified by data flow), and interprocedural. A worked cascade shows them stacking: source 'for (i = 0; i < n; i++) { x = 4 * i; a[x] = b + 8 * 4; }' -> folding kills 8 * 4 -> 32; motion lifts b + 32 (loop-invariant) before the loop; strength reduction turns 4*i into an accumulator adding 4 per iteration; induction-variable elimination may delete i entirely if only x uses it. Four transformations, one loop, roughly half the executed instructions gone.",
              "The safety frame completes the section: every transformation must preserve semantics for all inputs - the observable behaviour (values, order of side effects) unchanged. Optimizations differ by proof burden: local transformations are provable by inspection; loop and global ones need data-flow certificates (5.6). The exam's sentence: optimization is the systematic removal of redundancy, scoped from peephole to global, with semantics preservation as the invariant that bounds it.",
              "Exam framing: expect 'explain the sources of optimization'. Give the catalogue with one example each, the scope taxonomy, the for-loop cascade as the worked trace, and close with the semantics-preservation invariant. One loop, four transformations - fold, hoist, reduce, eliminate, each named as it applies. The cascade trace is the demonstration - four transformations, one loop, half the executed instructions.",
            ],
            keyTerms: [
              { term: "Constant folding", definition: "Evaluate constant expressions at compile time (2 * 3 -> 6)." },
              { term: "Code motion", definition: "Lift loop-invariant computations out of loops." },
              { term: "Strength reduction", definition: "Replace costly operations with cheaper equivalents (multiply -> shift/add)." },
              { term: "Semantics preservation", definition: "All inputs, same observable behaviour - the invariant bounding every optimization." },
            ],
            table: {
              caption: "The transformation catalogue.",
              headers: ["Transformation", "Pattern", "Example"],
              rows: [
                ["Constant folding", "constants evaluated", "8 * 4 -> 32"],
                ["Constant propagation", "known values inlined", "x = 5; y = x * 2 -> y = 10"],
                ["CSE", "repeated computation shared", "4 * i computed once"],
                ["Code motion", "invariants leave loops", "b + 32 hoisted"],
                ["Strength reduction", "ops cheapened", "4*i -> accumulate 4"],
                ["Copy propagation", "copies inlined", "x = y; use x -> use y"],
              ],
            },
            bullets: [
              "Sources: redundancy of every kind - fold, share, hoist, cheapen, delete.",
              "Scopes: peephole -> local -> loop -> global -> interprocedural.",
              "Loop scope pays most: code there executes n times.",
              "Worked cascade: folding, motion, strength reduction, induction elimination on one loop.",
              "Safety invariant: observable behaviour identical for all inputs.",
              "Proof burden grows with scope - global needs data-flow certificates.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The optimization scope pyramid",
              caption: "Narrow at the top, powerful at the base - each level needs more analysis.",
              tiers: [
                { label: "Global", note: "across blocks - needs data-flow certificates" },
                { label: "Loop", note: "natural loops - motion, strength reduction, induction vars" },
                { label: "Local", note: "within a basic block - exact analysis" },
                { label: "Peephole", note: "few instructions on target code" },
              ],
            },
            callout: {
              type: "exam",
              title: "One loop, four transformations",
              body: "The cascade trace is the section's mark-earner: folding 8*4, hoisting b + 32, reducing 4*i to an accumulator, deleting the induction variable. Name each transformation as it applies - the catalogue is being demonstrated, not just listed.",
            },
            examQuestions: [
              {
                q: "Explain the sources of optimization - folding, propagation, CSE, motion, strength reduction, copy propagation - with the scope taxonomy, and run the four-transformation cascade on a small for loop.",
                marks: 14,
                outline: [
                  "Folding: 8 * 4 -> 32 at compile time",
                  "Propagation: x = 5 inlines into uses",
                  "CSE: shared computations reference one node (DAG view)",
                  "Motion: loop-invariant b + 32 hoisted before the loop",
                  "Strength reduction: 4*i -> accumulator adding 4",
                  "Induction elimination: i deleted if unused",
                  "Scopes: peephole -> local -> loop -> global; semantics invariant",
                ],
              },
              {
                q: "Why does loop scope yield the most benefit per transformation?",
                marks: 7,
                outline: [

                  "Loop bodies execute n times - one saved instruction saves n",

                  "Invariant hoisting, strength reduction all multiply their win",

                  "Risk also multiplies: correctness proofs need care",

                  "Loop scope pays most - body code executes n times",

                  "Proof burden grows with the optimization's reach",

                ],              },
            ],
          },
          {
            number: "5.2",
            title: "Optimizing basic blocks with DAGs",
            body: [
              "Within a basic block, analysis is exact - no control alternatives, so transformations are provable by inspection. The DAG (4.7) is the working representation: build it from the block's instructions, read the optimizations off it. The transformation set: common subexpression elimination (shared nodes become copies), dead-code elimination (unreferenced node labels deleted), copy propagation (copies through x = y chains), and reordering (topological order that minimizes live temporaries).",
              "A worked block fixes the method. Block: (1) a = b + c; (2) d = b + c; (3) e = a * d; (4) b = d; (5) f = a + e. DAG build: one node for b + c labeled a then d (both); a * d node labeled e; after (4), b detaches from the old b node and labels the b + c node too; f references a and e. Reads: CSE - d = a (copy); copy propagation - e = a * a; reordering - compute b + c once, then a * d, then f. Result: three computations where five instructions were, each provably identical in value for this block.",
              "The limits complete the section: local optimization cannot see across blocks (a computation repeated in two blocks stays duplicated - global CSE needs data flow 5.6), and array/pointer aliasing caps certainty (a[t] writes can touch any element - optimizers must be conservative: 'may' analysis says possible alias, so the transformation is skipped unless provably safe). The exam's sentence: local optimization is exact where it looks and blind where it does not - the flow graph's other blocks are the blind spot global analysis opens.",
              "Exam framing: expect 'explain optimization of basic blocks'. Give the DAG method, work the five-instruction block to its optimized form, name the four transformations read off the DAG, and close with the local-limits sentence - aliasing and cross-block blindness. Detachment is the subtle rule - redefinition moves the label, the node survives if referenced. The five-instruction block is the worked read - three computations where five lines stood.",
            ],
            keyTerms: [
              { term: "Local optimization", definition: "Transformations provable within one basic block's exact control." },
              { term: "Copy propagation", definition: "Inline x = y chains so later analysis sees real operands." },
              { term: "Aliasing conservatism", definition: "Possible pointer/array aliases block unsafe transformations." },
              { term: "Topological order", definition: "Leaves before interiors - the register-friendly emission order." },
            ],
            table: {
              caption: "The worked block and its reads.",
              headers: ["Instruction", "DAG effect", "Optimization"],
              rows: [
                ["(1) a = b + c", "node N1 labeled a", "-"],
                ["(2) d = b + c", "N1 also labeled d", "CSE: d = a"],
                ["(3) e = a * d", "N2 = a * d", "copy prop: a * a"],
                ["(4) b = d", "b relabels N1", "copy: b = a"],
                ["(5) f = a + e", "N3 = a + e", "order: leaves first"],
              ],
            },
            bullets: [
              "Blocks are exact: one entry, one exit - transformations provable by inspection.",
              "DAG method: build, then read CSE, DCE, copy propagation, ordering.",
              "Worked: five instructions to three computations (b + c once, a * d, a + e).",
              "Redefinition detaches labels - b's old node survives if others reference it.",
              "Limits: cross-block duplication invisible locally; aliasing forces conservatism.",
              "Sentence: local is exact where it looks, blind across the flow graph.",
            ],
            diagram: {
              kind: "flow",
              title: "The DAG-driven local pass",
              caption: "Build once, read four optimizations, emit reordered code.",
              steps: [
                { label: "Build DAG", note: "one node per distinct computation" },
                { label: "CSE", note: "shared nodes -> copies (d = a)" },
                { label: "Propagate copies", note: "e = a * a; b = a" },
                { label: "Kill dead labels", note: "unreferenced nodes deleted" },
                { label: "Emit in topo order", note: "leaves first - registers minimized" },
              ],
            },
            callout: {
              type: "exam",
              title: "Detachment is the subtle rule",
              body: "The DAG construction detail examiners probe: when instruction (4) reassigns b, b's label moves off its old node - but the old node survives if anything still references it. Saying 'redefinition detaches, does not delete' distinguishes a careful answer from a hand-wavy one.",
            },
            examQuestions: [
              {
                q: "Explain local optimization via DAGs: construction, the four reads (CSE, DCE, copy propagation, reordering), a worked five-instruction block, and the limits of local analysis.",
                marks: 14,
                outline: [
                  "Blocks exact: one entry, one exit",
                  "DAG: one node per distinct computation; redefinition detaches labels",
                  "CSE: b + c computed once; d = a copy",
                  "Copy propagation: e = a * a; b = a",
                  "DCE: unreferenced labels deleted",
                  "Emission: topological order minimizes registers",
                  "Limits: cross-block blindness; array/pointer aliasing conservative",
                ],
              },
              {
                q: "Why does a[t] = x block local CSE on b[t] = y?",
                marks: 7,
                outline: [

                  "Array writes may alias any element read elsewhere",

                  "The optimizer cannot prove the two accesses distinct without more analysis",

                  "Conservatism skips the transformation rather than risk wrong code",

                  "Redefinition detaches labels without deleting nodes",

                  "Dead temporaries simply lose all references",

                ],              },
            ],
          },
          {
            number: "5.3",
            title: "Loops in flow graphs - dominators and natural loops",
            body: [
              "Loops matter because that is where execution time lives, and the flow graph finds them formally. Dominators: d dominates n if every path from entry to n passes through d - the immediate dominator (idom) is the closest such node, and the idom tree structures the graph. Back edges: an edge a -> h where h dominates a - the structural signature of a loop. Natural loop of a back edge a -> h: h plus all nodes that can reach a without passing through h - the minimal looping region.",
              "A worked identification fixes the machinery. The 4.5 graph (B1 -> B2 -> {B3, B5}; B3 -> B2): dominators - B1 dominates everything; B2 dominates B3 and B5; idom(B3) = B2, idom(B5) = B2. Back edge: B3 -> B2 (B2 dominates B3 - yes). Natural loop of B3 -> B2: {B2, B3} - the loop body. Nested loops appear as back edges to inner headers; reducible flow graphs (structured code's shape) have natural loops that are either disjoint or properly nested - the property optimization algorithms rely on.",
              "The loop bookkeeping completes the section: preheaders (a new block before the header holding invariant computations hoisted there - code motion's landing pad), loop-invariant detection (computation whose operands are all defined outside the loop or by prior invariants), and the depth measure (how many loops enclose a block - weighting spill costs 4.6 and scheduling inlining). The exam's sentence: dominators name the headers, back edges name the loops, natural loops name the bodies - and the preheader is where optimized code lands.",
              "Exam framing: expect 'explain dominators and natural loops' or 'how does the compiler find loops'. Give the definitions, work the identification on the 4.5 graph, describe preheaders and invariants, and close with the reducibility note. The back edge needs the dominator test - backwards is not enough. The dominator computation is the worked identification - idoms, back edge, natural loop, in order.",
            ],
            keyTerms: [
              { term: "Dominates", definition: "d dominates n if every entry-to-n path passes through d." },
              { term: "Back edge", definition: "a -> h where h dominates a - the loop's structural signature." },
              { term: "Natural loop", definition: "Header h plus all nodes reaching a without passing h." },
              { term: "Preheader", definition: "A synthesized block before the header - code motion's landing site." },
            ],
            table: {
              caption: "Loop finding on the worked graph.",
              headers: ["Question", "Computation", "Answer"],
              rows: [
                ["Dominators", "paths from B1", "B1 dom all; B2 dom B3, B5"],
                ["Immediate dominators", "closest dominator", "idom(B3) = idom(B5) = B2"],
                ["Back edges", "a -> h with h dom a", "B3 -> B2"],
                ["Natural loop", "h + nodes reaching a", "{B2, B3}"],
                ["Preheader", "synthesized block", "before B2, holds hoisted code"],
              ],
            },
            bullets: [
              "Dominators: every entry-path passes through them - the idom tree structures control.",
              "Back edge: target dominates source - the loop signature.",
              "Natural loop: header plus all nodes reaching the back-edge source.",
              "Worked: B3 -> B2 back edge; natural loop {B2, B3}.",
              "Preheaders: synthesized landing pads for hoisted invariants.",
              "Reducible graphs: natural loops disjoint or nested - structured code's property.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From flow graph to optimized loop",
              caption: "Five steps from raw CFG to a preheader full of hoisted code.",
              stages: [
                { label: "Compute dominators", note: "idom tree over the CFG" },
                { label: "Find back edges", note: "a -> h with h dom a" },
                { label: "Collect natural loops", note: "header + reaching nodes" },
                { label: "Detect invariants", note: "operands defined outside the loop" },
                { label: "Insert preheader", note: "hoist invariants; optimize body" },
              ],
            },
            callout: {
              type: "exam",
              title: "The back edge needs the dominator test",
              body: "The precision mark: any edge to an earlier block is not a loop - B4 -> B5 goes backwards numerically but B5 does not dominate B4, so it is not a back edge. Only a -> h with h dominating a counts. Quote the test, not the intuition.",
            },
            examQuestions: [
              {
                q: "Explain dominators, immediate dominators, back edges and natural loops, identify the loop in the worked five-block graph, and describe preheaders and loop-invariant detection.",
                marks: 14,
                outline: [
                  "Dominates: all entry-to-n paths pass through d",
                  "idom: closest dominator - the idom tree",
                  "Back edge: a -> h where h dominates a",
                  "Natural loop: header + all nodes reaching a without passing h",
                  "Worked: B3 -> B2 back edge; loop {B2, B3}",
                  "Preheader: synthesized block holding hoisted invariants",
                  "Reducible graphs: loops disjoint or properly nested",
                ],
              },
              {
                q: "Why is the natural loop defined via reachability without passing the header?",
                marks: 7,
                outline: [

                  "It collects exactly the nodes that can iterate with a",

                  "Passing the header means leaving and re-entering - outside the loop",

                  "The definition gives the minimal looping region",

                  "Back edges need the dominator test, not backwardness",

                  "Preheaders land the hoisted invariants",

                ],              },
            ],
          },
          {
            number: "5.4",
            title: "Loop optimization - motion, strength reduction, induction variables",
            body: [
              "The loop-optimization family applies the catalogue where it pays. Code motion (hoisting): a loop-invariant computation (operands defined outside the loop or by earlier invariants, and no redefinition inside) moves to the preheader - computed once instead of n times. A worked hoist: 'for i in 1..n { x = a * b + c[i] }' - a * b is invariant (a, b unchanged inside), so it hoists: t = a * b; for i ... { x = t + c[i] } - one multiplication for the whole loop instead of n.",
              "Strength reduction and induction variables: an induction variable takes a linear sequence each iteration (i, i + 1, ...); derived induction variables compute linearly from it (t = 4 * i). Strength reduction replaces their multiplication with addition: t += 4 per iteration instead of 4 * i per iteration. Induction-variable elimination goes further: if only t is used, i itself becomes unnecessary - deleted entirely (with test adjustment). The worked cascade: 'for i in 0..n: a[4*i] = 0' -> t starts 0, t += 4 per iteration (strength reduction) -> if i exists only to compute t and the bound, replace the test with t < 4*n and delete i (elimination) - the loop body becomes a single store.",
              "The safety notes bound the family: hoisting requires proven invariance (aliasing may hide a redefinition - conservative analysis decides); strength reduction preserves the arithmetic exactly (the accumulator sequence is identical); elimination requires proving the variable's every use is covered by a survivor. Unrolling and jam are the size-vs-speed trade: fewer branch tests per element, larger code. The exam's sentence: loop optimization trades one-time analysis for per-iteration savings, and every trade is certified before it is taken.",
              "Exam framing: expect 'explain loop optimizations'. Give hoisting with the a * b trace, strength reduction and induction elimination with the a[4*i] cascade, the safety conditions, and close with the trade sentence. The a[4*i] cascade demonstrates reduction and elimination in three lines - write it labelled. Label each transformation in the cascade - the catalogue names are the marks.",
            ],
            keyTerms: [
              { term: "Loop-invariant", definition: "Computation whose operands never change inside the loop - hoistable." },
              { term: "Induction variable", definition: "A variable with a linear sequence per iteration (i, i + 1, ...)." },
              { term: "Derived induction variable", definition: "Computed linearly from another: t = 4 * i." },
              { term: "Unrolling", definition: "Replicate the body to cut branch overhead - code size for speed." },
            ],
            table: {
              caption: "The a[4*i] = 0 cascade.",
              headers: ["Stage", "Loop body", "What changed"],
              rows: [
                ["Original", "a[4*i] = 0 with i++", "multiply per iteration"],
                ["Strength reduction", "t += 4; a[t] = 0", "add replaces multiply"],
                ["Induction elimination", "a[t] = 0; t += 4 (test: t < 4*n)", "i deleted entirely"],
                ["Unrolling (optional)", "two stores per iteration", "half the branch tests"],
              ],
            },
            bullets: [
              "Hoisting: invariant computations move to the preheader - once, not n times.",
              "Worked hoist: a * b lifted from 'x = a * b + c[i]'.",
              "Strength reduction: multiply per iteration becomes an add.",
              "Induction elimination: delete i when only derived variables use it.",
              "Worked cascade: a[4*i] = 0 -> a[t] = 0 with t += 4 - i gone.",
              "Safety: proven invariance, exact arithmetic, covered uses - certified trades.",
            ],
            diagram: {
              kind: "fork",
              title: "Which loop transformation applies?",
              caption: "The loop's structure decides - each branch has its certification condition.",
              start: "Analyze the loop body",
              branches: [
                { label: "Invariant computation", outcome: "hoist to preheader - operands never change inside", good: true },
                { label: "Derived induction variable", outcome: "strength-reduce the multiply to an add", good: true },
                { label: "Induction variable unused", outcome: "eliminate it and adjust the test", good: true },
                { label: "Branch overhead dominant", outcome: "unroll the body - size for speed", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "The cascade trace is the answer",
              body: "The three-line cascade (a[4*i] = 0 -> a[t] = 0 with t += 4 -> i deleted, test t < 4*n) demonstrates strength reduction AND elimination in one example. It is the unit's most quotable worked trace - write it with each stage labelled.",
            },
            examQuestions: [
              {
                q: "Explain code motion with a worked hoist, strength reduction and induction-variable elimination with the a[4*i] = 0 cascade, the safety conditions for each, and the unrolling trade-off.",
                marks: 14,
                outline: [
                  "Hoisting: invariant a * b to the preheader - once per loop",
                  "Invariance condition: operands outside or earlier invariants, no redefinition",
                  "Strength reduction: t = 4*i becomes t += 4 per iteration",
                  "Elimination: i deleted when only derived variables use it",
                  "Cascade: a[4*i] = 0 -> t += 4; a[t] = 0; test t < 4*n",
                  "Safety: proven invariance; exact arithmetic; covered uses",
                  "Unrolling: fewer branch tests, larger code - size-speed trade",
                ],
              },
              {
                q: "Why can aliasing invalidate a hoisting decision?",
                marks: 7,
                outline: [

                  "A store through a pointer or array may redefine the 'invariant' operand",

                  "Hoisting then freezes a stale value into the preheader",

                  "Conservative analysis hoists only provable invariants",

                  "Hoisting needs proven invariance - aliasing hides redefinitions",

                  "Elimination requires every use covered by a survivor",

                ],              },
            ],
          },
          {
            number: "5.5",
            title: "Dead code elimination",
            body: [
              "Dead code computes values nobody observes - and deleting it is pure profit: smaller, faster, more analyzable. The categories: unused assignments (x computed, never read), unreachable code (after an unconditional return/goto; branches of constant conditions), and dead stores (written but never re-read before being overwritten). The detection tool is liveness: a variable is live at a point if its current value may be read later - the backward data-flow analysis (5.6's machinery) whose fixed point labels every definition dead or live.",
              "A worked elimination fixes the method. Block: (1) a = b + c; (2) d = a + 1; (3) return e; (4) print d. Liveness: d is live at (4) but (3) returns first - (2) is dead (its value never read on any path); (4) is unreachable after return; (1) feeds only (2), so it dies with it. Deleting (2) and (4) leaves (1) as a candidate - re-run liveness: a now dead, delete (1). The cascade matters: DCE enables DCE, so optimizers iterate to a fixed point - each deletion may orphan another computation.",
              "The subtleties bound the deletion: side effects block it (a call may print, throw, or update global state - dead-looking code with side effects stays); volatile variables and memory-mapped I/O must not be optimized away (each access observable); and debugging builds suppress DCE deliberately (variables must exist to be inspectable - 5.7's connection). The exam's sentence: dead is defined by observability, not by syntax - a value nobody can ever observe is dead; a value that could be observed is live no matter how unlikely.",
              "Exam framing: expect 'explain dead code elimination'. Give the three categories, the liveness method, the worked cascade with its fixed point, and the side-effect/volatile boundary - closing with the observability sentence. Infinite loops are not dead code - termination is observable behaviour. The cascade is the worked trace - delete, delete, orphan, fixed point in four steps.",
            ],
            keyTerms: [
              { term: "Dead code", definition: "Computation whose results can never be observed." },
              { term: "Liveness", definition: "Variable live if its value may be read later - DCE's detector." },
              { term: "Dead store", definition: "A write never re-read before overwriting." },
              { term: "Fixed point", definition: "DCE enables DCE - iterate until no more deletions." },
            ],
            table: {
              caption: "The worked cascade.",
              headers: ["Step", "Action", "Reason"],
              rows: [
                ["(2) d = a + 1", "delete", "return at (3) precedes use at (4)"],
                ["(4) print d", "delete", "unreachable after return"],
                ["(1) a = b + c", "delete", "a's only reader died with (2)"],
                ["Iterate", "re-run liveness", "deletions orphan further code"],
              ],
            },
            bullets: [
              "Three categories: unused assignments, unreachable code, dead stores.",
              "Liveness: backward data flow - may the value be read later?",
              "Worked cascade: (2), (4), then (1) - DCE enables DCE to a fixed point.",
              "Side effects block deletion: calls, prints, throws stay.",
              "volatile and memory-mapped I/O: every access observable - never delete.",
              "Definition: dead = unobservable, not merely unlikely.",
            ],
            diagram: {
              kind: "compare",
              title: "Live vs dead - the observability test",
              caption: "The detector is liveness, the criterion is observability.",
              left: {
                heading: "Live code (stays)",
                items: [
                  "Value reachable by some execution path",
                  "Side effects: calls, stores to volatile",
                  "Debug-visible variables in debug builds",
                  "Unlikely != dead - possibility suffices",
                ],
              },
              right: {
                heading: "Dead code (deleted)",
                items: [
                  "Value never read on any path",
                  "Unreachable: after return/goto",
                  "Constant-false branches",
                  "Stores overwritten before any read",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Infinite loops are not dead code",
              body: "The classic probe: 'while (true) {}' computes nothing - is it dead? No: termination is an observable behaviour, and removing a non-terminating loop changes semantics (the program hangs versus finishes). DCE deletes values, not control flow that can affect termination - the distinction examiners test.",
            },
            examQuestions: [
              {
                q: "Explain dead code elimination - categories, liveness detection, the worked cascade with its fixed point - and the side-effect, volatile and termination boundaries that limit deletion.",
                marks: 14,
                outline: [
                  "Categories: unused assignments, unreachable code, dead stores",
                  "Liveness: may the value be read later? - backward data flow",
                  "Cascade: (2) dead before return, (4) unreachable, (1) orphaned",
                  "Iterate to fixed point - deletions enable deletions",
                  "Side effects block: calls may print or throw",
                  "volatile/memory-mapped: every access observable",
                  "Boundary: termination is observable - infinite loops are not dead",
                ],
              },
              {
                q: "Why do debugging builds disable dead code elimination?",
                marks: 7,
                outline: [

                  "Inspectors must see every declared variable",

                  "Deleted computations leave no breakpoints or values",

                  "Debug info maps optimized code - suppressing DCE keeps it faithful",

                  "Side-effecting stores survive deletion",

                  "volatile and memory-mapped accesses are observable",

                ],              },
            ],
          },
          {
            number: "5.6",
            title: "Global data flow analysis",
            body: [
              "Global data flow analysis computes facts that hold at each program point across the whole flow graph - the certificates for every global transformation. The framework's vocabulary: a lattice of facts per point (for reaching definitions: each definition in or out), transfer functions (how a statement changes facts: a definition of x kills other defs of x and generates its own), meet operators (how facts merge at joins: union for reaching definitions, intersection for available expressions), and a solver (worklist or iterative) that computes the fixed point.",
              "The two canonical problems and their directions: reaching definitions - forward (facts flow with control), may-analysis (union at joins: which definitions can reach here?) - feeds copy propagation and DCE. Live variables - backward (facts flow against control), may-analysis (union: which variables may be read later?) - feeds register allocation and dead code. Available expressions - forward, must-analysis (intersection: which expressions are certainly already computed?) - feeds global CSE. The table of problems is the syllabus's 'data flow analysis of structured flow graphs': direction, join, and use named per problem.",
              "A worked reaching-definitions iteration fixes the mechanics. Graph: B1 defines x; B2 defines x; B1 -> B2 -> B3, B1 -> B3. Fact at B3's entry = union of exits: from B1's exit {x@d1} and B2's exit {x@d2, x@d1 (d1 reaches B2 too)} -> B3 sees {d1, d2} - both definitions reach, so a use of x in B3 cannot assume either value (copy propagation blocked; DCE of d2 blocked). Iteration: initialize all in-facts empty, propagate along edges, re-meet at joins, repeat until nothing changes - two passes typically suffice on this small graph. The exam's sentence: data flow is equations over the graph solved to a fixed point; direction and join operator define each problem.",
              "Exam framing: expect 'explain global data flow analysis' or 'reaching definitions / live variables'. Give the framework vocabulary, the problem table (direction, join, use), the worked reaching-definitions iteration, and close with the fixed-point sentence. Direction and join define the problem - reaching definitions is forward-union, live variables backward-union. The problem table is the answer's spine - direction, join and use per row.",
            ],
            keyTerms: [
              { term: "Reaching definitions", definition: "Forward may-analysis: which definitions can reach each point - union join." },
              { term: "Live variables", definition: "Backward may-analysis: which variables may be read later - register allocation's input." },
              { term: "Available expressions", definition: "Forward must-analysis: which expressions are certainly computed - global CSE's input." },
              { term: "Fixed point", definition: "Iterate transfer + meet until no fact changes - the analysis's answer." },
            ],
            table: {
              caption: "The data-flow problem table.",
              headers: ["Problem", "Direction", "Join", "Feeds"],
              rows: [
                ["Reaching definitions", "Forward", "Union (may)", "Copy prop, DCE"],
                ["Live variables", "Backward", "Union (may)", "Registers, DCE"],
                ["Available expressions", "Forward", "Intersection (must)", "Global CSE"],
                ["Very busy expressions", "Backward", "Intersection (must)", "Code hoisting"],
              ],
            },
            bullets: [
              "Framework: lattices, transfer functions, meet operators, worklist solver.",
              "Forward = with control; backward = against it.",
              "May (union) = possibility; must (intersection) = certainty - the semantics split.",
              "Reaching definitions: kill/gen per definition; union at joins.",
              "Worked: both x-definitions reach B3 - transformations blocked accordingly.",
              "Fixed point: iterate until no fact changes; small graphs converge in passes.",
            ],
            diagram: {
              kind: "layers",
              title: "The data-flow framework",
              caption: "Four layers of machinery - each problem instantiates them differently.",
              layers: [
                { label: "Solver", note: "worklist/iteration to the fixed point" },
                { label: "Meet operator", note: "union (may) or intersection (must) at joins" },
                { label: "Transfer functions", note: "gen/kill per statement" },
                { label: "Fact lattice", note: "the values each point carries (in/out sets)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Direction and join define the problem",
              body: "The identification sentence: 'a data-flow problem is fully specified by its direction (forward/backward) and its join operator (union/intersection) - reaching definitions is forward-union, live variables backward-union, available expressions forward-intersection.' Memorize the four-row table; most exam questions are rows of it.",
            },
            examQuestions: [
              {
                q: "Explain global data flow analysis - lattices, transfer functions, meet operators, the worklist solver - present the problem table (reaching definitions, live variables, available expressions), and work a small reaching-definitions iteration.",
                marks: 14,
                outline: [
                  "Facts as lattices at each program point",
                  "Transfer: gen/kill per statement (def of x kills other x-defs)",
                  "Meet: union for may, intersection for must",
                  "Forward: reaching definitions, available expressions",
                  "Backward: live variables, very busy expressions",
                  "Worked: {d1, d2} both reach B3 - copy prop and DCE blocked",
                  "Fixed point: iterate until no fact changes",
                ],
              },
              {
                q: "Why is available expressions a must-analysis while reaching definitions is a may-analysis?",
                marks: 7,
                outline: [

                  "CSE must be certain the expression is already computed - intersection",

                  "Reaching asks possibility - any path's definition counts - union",

                  "The join operator encodes the safety requirement of the transformation",

                  "May analyses use union; must analyses use intersection",

                  "The join operator encodes the transformation's safety need",

                ],              },
            ],
          },
          {
            number: "5.7",
            title: "Symbolic debugging of optimized code",
            body: [
              "Optimized code is hard to debug - the debugger's promises (break on this line, inspect this variable, single-step the source) assume a source-to-machine correspondence that optimization deliberately breaks: instructions reordered, variables promoted to registers or deleted, computations folded, code moved across blocks. Symbolic debugging is the machinery that restores those promises where possible and reports honestly where not - via debug information emitted at compile time.",
              "The debug-information model: each machine instruction carries mappings (line tables: instruction -> source line; variable tables: variable -> location, possibly several locations over its lifetime as it moves register/memory). A worked correspondence: source 'x = a + b; y = x * 2; print x' optimized to one register chain - the line table maps the fused instructions back to lines 1-2; the variable table says x lives in R3 from instruction 2 to the print, and y never exists as storage (folded) - the debugger reports y as 'optimized out' rather than lying. The honesty clause is the design principle: show the true state of optimized variables, never fake one.",
              "The compiler-side choices complete the section: optimization levels trade debuggability (O0 fully debuggable, O2/O3 with debug info and holes), optimizations may be constrained in debug builds (no DCE on user variables, no cross-block fusion of observable statements), and -g with -O2 is the standard industrial combination - debug info present, optimizations honest about their effects. The exam's sentence: symbolic debugging is the contract between optimizer and debugger - the optimizer transforms code and reports what it did; the debugger presents the truth, including the gaps.",
              "Exam framing: expect 'explain symbolic debugging of optimized code'. Give the broken-correspondence problem, the debug-information model with the worked variable example, the optimized-out honesty clause, and the optimization-level trade - closing with the contract sentence. Optimized out is a feature - honesty about deletions is the debugger's design principle. The correspondence example is the worked case - x in R3, y optimized out.",
            ],
            keyTerms: [
              { term: "Debug information", definition: "Line and variable tables mapping machine code back to source." },
              { term: "Line table", definition: "Instruction -> source line mapping - breakpoints land correctly." },
              { term: "Variable location table", definition: "Variable -> location per lifetime phase (register then memory)." },
              { term: "Optimized out", definition: "The debugger's honest report for a variable the optimizer removed." },
            ],
            table: {
              caption: "What optimization breaks and how debugging copes.",
              headers: ["Optimization", "Breaks", "Debug answer"],
              rows: [
                ["Register promotion", "Variable has no memory slot", "Location table: R3 for this range"],
                ["Code motion/fusion", "Lines execute out of order", "Line table maps per instruction"],
                ["Folding", "y never exists", "Report 'optimized out' honestly"],
                ["DCE", "Variables deleted", "Suppress in debug builds"],
              ],
            },
            bullets: [
              "Breaks: reordering, promotion, folding, deletion - all deliberate.",
              "Debug info: line tables (breakpoints) + variable tables (inspection).",
              "Worked: x in R3 over its range; y folded - reported as optimized out.",
              "Honesty clause: never fake a variable's value - show the gap.",
              "Levels: O0 debuggable; O2 + debug info is the industrial combination.",
              "Contract: optimizer reports its changes; debugger presents the truth.",
            ],
            diagram: {
              kind: "flow",
              title: "Debugging an optimized build",
              caption: "From break-on-line to honest inspection - the debug-info machinery in four steps.",
              steps: [
                { label: "Set breakpoint", note: "line table finds the instruction(s)" },
                { label: "Stop", note: "may stop at a fused/reordered representation" },
                { label: "Inspect", note: "variable table gives current location (R3 or slot)" },
                { label: "Report gaps", note: "optimized-out values shown honestly" },
              ],
            },
            callout: {
              type: "exam",
              title: "Optimized out is a feature",
              body: "The counter-intuitive sentence examiners reward: 'a good debugger says optimized out rather than inventing a value - honesty about the optimizer's deletions is the design principle of symbolic debugging.' Then note the practical compromise: -g -O2 with suppressed variable-DCE.",
            },
            examQuestions: [
              {
                q: "Explain symbolic debugging of optimized code - the broken source correspondence, the debug-information model with line and variable tables, a worked variable-promotion example, and the optimization-level trade.",
                marks: 14,
                outline: [
                  "Optimization breaks the source-machine correspondence deliberately",
                  "Line tables: instruction -> source line for correct breakpoints",
                  "Variable tables: location per lifetime phase (register then memory)",
                  "Worked: x promoted to R3; y folded - 'optimized out' reported",
                  "Honesty clause: never fake values; show the gaps",
                  "O0 fully debuggable; O2 + debug info is the industrial mix",
                  "Debug builds may suppress DCE on user variables",
                ],
              },
              {
                q: "Why is reporting a fabricated value for a deleted variable worse than reporting optimized out?",
                marks: 7,
                outline: [

                  "The value no longer exists - any number is a lie",

                  "Debugging decisions made on fabricated data are wrong",

                  "Honest gaps let the developer recompile or reason correctly",

                  "Debug builds suppress variable DCE deliberately",

                  "Line tables keep breakpoints landing correctly",

                ],              },
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
      weightedTopics: [
        { topic: "Parsing: LL(1) and LR family", weight: "about 12-14 marks", note: "FIRST/FOLLOW tables, transformations, SLR/LALR comparison - the subject's biggest unit." },
        { topic: "Phases of a compiler + TAC", weight: "about 10-12 marks", note: "The position/initial/rate*60 trace appears somewhere in most papers." },
        { topic: "Code optimization family", weight: "about 10-12 marks", note: "Loop cascade, DAG reads, data-flow problem table." },
        { topic: "Lexical analysis and LEX", weight: "about 8-10 marks", note: "RE specs, buffering, the generator pipeline." },
        { topic: "Type checking and runtime", weight: "about 8-10 marks", note: "Checker rules, parameter passing, activation records." },
        { topic: "Basic blocks, flow graphs, DAGs", weight: "about 8-10 marks", note: "Leader rules + partition + coloring - one numerical guaranteed." },
        { topic: "SDD evaluation (S/L-attributed)", weight: "about 6-8 marks", note: "Desk-calculator 182 trace and the declaration flow." },
        { topic: "Symbol tables and error recovery", weight: "about 4-6 marks", note: "Short notes: operations, panic mode, strategies." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; every parsing and optimization exercise by hand. This subject is trace-examined: practise writing derivations, tables, partitions and cascades on paper - the hand-run trace is the entire exam skill.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - compiler anatomy and lexing", tasks: ["Compiler vs interpreter + types", "Data structures + 'rate' trace", "Analysis-synthesis + M+N arithmetic", "Six phases on position=initial+rate*60", "Two-buffer + sentinel scheme", "RE specs + 'rate60' DFA trace", "LEX file + workflow + priority rules"] },
        { week: "Week 2", focus: "Unit II - parsing (part 1)", tasks: ["CFG quadruple + leftmost trace", "Ambiguity and layering", "Recursive descent procedures", "Left recursion + factoring fixes", "LL(1) table build + driver"] },
        { week: "Week 3", focus: "Unit II - parsing (part 2) + SDD", tasks: ["Shift-reduce trace + conflicts", "Operator precedence matrix", "LR items + SLR/LR/LALR compare", "Desk-calculator SDD -> 182", "Declaration SDD + marker trick"] },
        { week: "Week 4", focus: "Unit III - types and runtime", tasks: ["Checker rules + coercion traces", "Equivalence models + ladder", "Overload resolution + unification", "AR layout + FP/SP", "Static/stack/heap + parameter passing", "Symbol tables + panic-mode trace"] },
        { week: "Week 5", focus: "Units IV and V - codegen and optimization", tasks: ["TAC/quadruple translation", "Boolean translation + backpatching", "Switch + call protocols", "Leader partition + flow graph", "Coloring + spill heuristics", "DAG reads + peephole classes", "Loop cascade + data-flow table"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Rebuild LL(1) table from memory", "Re-run the six-phase trace", "Partition + coloring by hand", "Two full past papers under time"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "This subject is trace-examined: every big answer is a hand-run trace - derivation, table, partition, or cascade. Start drawing immediately.",
        "Keep the canonical example warm: position = initial + rate * 60 answers phase, TAC and code-generation questions in one preparation.",
        "For LL(1) questions, write FIRST/FOLLOW first - the table falls out mechanically and half the marks are the sets.",
        "For LR questions, name the tier (SLR/LALR/LR) and its lookahead mechanism before any item set - the comparison is worth as much as the machinery.",
        "For optimization questions, label each transformation as it applies (fold, hoist, reduce, eliminate) - the catalogue names are the marks.",
        "For data-flow questions, state direction and join first - the problem is identified before any computation.",
        "Draw the diagram every time: flow graph, DAG, activation record, AR layout - structure earns half the marks.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to verify traces against the grammar.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: rebuild the LL(1) table for the expression grammar, re-run the six-phase trace and the a[4*i] cascade, and re-partition the eight-instruction block - by hand, once each. No new material tonight.",
      ],
      bullets: [
        "Leaving left recursion in a grammar for top-down parsing - infinite recursion.",
        "Putting FOLLOW(A) entries for epsilon productions in the wrong columns.",
        "Calling any backwards edge a back edge - it must be to a dominator.",
        "Treating the jump instruction as its own block - the post-jump instruction is the leader.",
        "Folding constant propagation into constant folding - one inlines, one evaluates.",
        "Confusing S-attributed (up, LR) with L-attributed (left-down, LL) flow.",
        "Mixing may and must joins - union vs intersection changes the answer.",
        "Coloring with an edge missing - check every pair for overlap before assigning.",
        "Using one operator per line incorrectly - collapsing sub-expressions is the optimizer's job.",
        "Deleting a side-effecting 'dead' store - calls and volatile writes stay.",
        "Forgetting the inttofloat node in the semantic phase trace.",
        "Saying LEX resolves by rule order only - longest match decides first.",
      ],
    },
  ],
};
