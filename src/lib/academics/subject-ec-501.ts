import type { AcademicSubject } from "./types";

export const ec501: AcademicSubject = {
  id: "ec-501",
  code: "EC-501",
  title: "Microprocessor and Its Applications",
  semester: "V Semester",
  program: "RGPV · Electronics and Communication Engineering",
  tagline:
    "Every topic of the syllabus as one connected story: how the 8086 grew out of the RISC-CISC divide, how its registers, buses and timings carry a program, how instructions and addressing modes build software, how peripheral chips glue the processor to keyboards, converters and memory, how timers, interrupts, DMA and serial links move data on its behalf, and how the 8051 shrinks the whole machine into an embedded system.",
  description:
    "Five units walk from advanced-processor features and the 8086 architecture (register organization, BIU/EU, signal description, minimum and maximum mode timings), through the 8086 instruction set, addressing modes and assembly programming, to the 8155 and 8255 interfacing chips with keyboards, LEDs, ADCs, DACs and memory, then the 8253/8254 timer, 8259A interrupt controller, 8257 DMA controller and 8251 USART, ending with the 8051 microcontroller and its role in embedded systems.",
  accentColor: "#f59e0b",
  emoji: "MA",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Advanced Microprocessors and the 8086",
      summary:
        "Unit I sets the stage: what makes a microprocessor advanced, the RISC-CISC divide, the evolution from the 8086 to the Pentium, and then the 8086 itself in full - register organization, BIU/EU architecture, signal description, and the minimum and maximum mode system timings.",
      chapter: {
        number: "01",
        title: "Inside the 8086",
        intro:
          "Unit I covers the salient features of advanced microprocessors, RISC vs CISC, the 8086-to-Pentium evolution, the 8086 register set, the BIU/EU architecture, the 40-pin signal description, and minimum and maximum mode system configurations with their bus timings.",
        inOneBreath:
          "A processor is judged by word size, clock, pipeline, cache and addressing capability; CISC packs rich instructions while RISC keeps a load/store discipline. The 8086 splits into a BIU that fetches and computes physical addresses (segment x 16 + offset = 20 bits over a 1 MB space) and an EU that executes from a 6-byte prefetch queue. Its 40 pins multiplex address and data, and MN/MX# decides whether the 8086 generates its own control signals (minimum mode, T1 to T4 timing) or delegates to an 8288 bus controller (maximum mode, multiprocessor capable).",
        sections: [
          {
            number: "1.1",
            title: "Salient features of advanced microprocessors: RISC and CISC",
            body: [
              "An advanced microprocessor is characterized by a fixed list of features: word size (16/32/64 bits), clock frequency, on-chip cache and memory management, instruction pipelining, address space, and the richness of its instruction and addressing-mode set. The 8086 of this syllabus is itself the baseline 'advanced' processor: 16-bit word, 5 MHz clock, 20-bit addressing for 1 MB of memory, and a prefetch queue - features every later Intel processor refines rather than discards. Knowing this feature list is the fastest way to answer 'compare processors' questions: compare feature by feature, not vaguely.",
              "The deepest architectural divide is CISC versus RISC. CISC (Complex Instruction Set Computer - the x86 line) packs many complex, variable-length instructions, allows memory operands in arithmetic, computes everything through microcoded control, and minimizes code size at the cost of irregular execution time. RISC (Reduced Instruction Set Computer - MIPS, ARM, SPARC) keeps a small set of fixed-length instructions that execute in one cycle, restricts arithmetic to register operands with LOAD/STORE touching memory, uses hardwired control, and relies on compilers and large register files for performance.",
              "A worked contrast makes the tradeoff concrete. Multiplying a memory operand by a register: the 8086 issues one instruction, MUL BX after a MOV, with microcode sequencing the steps internally; a RISC processor must issue LOAD r1, [addr]; MUL r2, r1, r3; STORE r2, [addr] - three instructions, but each a predictable single cycle. On a 5 MHz 8086, MUL takes 71 to 118 clock cycles (14.2 to 23.6 microsecond at 5 MHz); a RISC multiply at the same clock takes 200 ns flat. CISC wins on code density, RISC wins on predictable speed - which is why pipelining, caches and superscalar execution eventually hybridized the two camps.",
              "For the exam, hold the comparison table in mind: instruction set size, instruction length, addressing modes, memory access policy, control unit style, register file size, code density and cycles per instruction. Most RGPV questions ask for the table plus one example instruction sequence on each side - exactly the MUL contrast above.",
            ],
            keyTerms: [
              { term: "Word size", definition: "The width of data the ALU and buses handle in one operation - 16 bits for the 8086." },
              { term: "CISC", definition: "Complex Instruction Set Computer - many variable-length instructions, memory operands, microcoded control." },
              { term: "RISC", definition: "Reduced Instruction Set Computer - few fixed-length single-cycle instructions, load/store memory policy, hardwired control." },
              { term: "Prefetch queue", definition: "On-chip buffer holding instructions fetched ahead of execution - 6 bytes on the 8086." },
              { term: "Code density", definition: "Program size per task; CISC wins because one complex instruction replaces several simple ones." },
            ],
            diagram: {
              kind: "compare",
              title: "CISC vs RISC philosophy",
              caption: "One instruction that does everything, versus many instructions that each do one thing fast.",
              left: {
                heading: "CISC (8086, x86)",
                items: [
                  "Variable-length instructions, many addressing modes",
                  "Arithmetic directly on memory operands",
                  "Microcoded control, irregular cycle counts",
                  "MUL BX - one instruction, 71-118 cycles",
                ],
              },
              right: {
                heading: "RISC (ARM, MIPS)",
                items: [
                  "Fixed-length instructions, few addressing modes",
                  "LOAD/STORE only touch memory",
                  "Hardwired control, one cycle per instruction",
                  "LOAD, MUL, STORE - three instructions, 200 ns each",
                ],
              },
            },
            bullets: [
              "Salient features: word size, clock, cache/MMU, pipelining, address space, instruction richness.",
              "8086 baseline: 16-bit word, 5 MHz, 20-bit address = 1 MB, 6-byte prefetch queue.",
              "CISC: rich instructions, memory operands, microcode, dense but slow and irregular.",
              "RISC: simple fixed instructions, register-to-register, hardwired, fast and predictable.",
              "MUL at 5 MHz: 8086 takes 14.2-23.6 microsecond; a RISC single-cycle multiply 200 ns.",
              "Modern processors are hybrids: CISC instructions decoded into RISC-like micro-ops.",
            ],
            callout: {
              type: "exam",
              title: "The feature-list skeleton",
              body: "Any 'features of advanced microprocessors' question is answered by the list - word size, clock, pipeline, cache, address space, instruction set - each applied to the named processor. Do not write essays; write the list with one number per line.",
            },
            table: {
              caption: "The RISC-CISC scorecard examiners expect.",
              headers: ["Aspect", "CISC", "RISC"],
              rows: [
                ["Instruction set", "large, complex", "small, simple"],
                ["Instruction length", "variable", "fixed"],
                ["Memory access", "any instruction", "LOAD/STORE only"],
                ["Control unit", "microcoded", "hardwired"],
                ["Registers", "fewer", "large register file"],
                ["Cycles per instruction", "many, irregular", "one (ideal)"],
                ["Code density", "high", "lower"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the salient features of advanced microprocessors and differentiate RISC and CISC architectures with a worked instruction example.",
                marks: 14,
                outline: [
                  "Feature list: word size, clock frequency, pipelining, cache, MMU, address space",
                  "8086 numbers: 16-bit, 5 MHz, 20-bit addressing = 1 MB, 6-byte queue",
                  "CISC traits: variable-length instructions, memory operands, microcoded control",
                  "RISC traits: fixed length, load/store discipline, hardwired control, big register file",
                  "Worked contrast: MUL on memory = 1 CISC instruction (71-118 cycles) vs LOAD/MUL/STORE",
                  "Tradeoff: CISC code density vs RISC predictable single-cycle speed",
                  "Modern hybrid: CISC front ends decode into RISC-like micro-operations",
                ],
              },
              {
                q: "Why do RISC processors forbid arithmetic on memory operands?",
                marks: 7,
                outline: [
                  "Memory access is slow and variable-latency; registers are fast and uniform",
                  "Load/store discipline keeps every instruction single-cycle and pipeline-friendly",
                  "Hardwired control is only feasible with simple regular instruction formats",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Evolution of Intel processors: 8086 to Pentium",
            body: [
              "The Intel x86 line evolves by keeping software compatibility while widening every bottleneck. The 8086 (1978) is a 16-bit processor with a 20-bit address bus (1 MB), about 29,000 transistors at 5 MHz, in a 40-pin DIP; its cheaper sibling the 8088 has the same architecture but an 8-bit external data bus - the choice that put the IBM PC on the map in 1981. Every later processor runs 8086 code unchanged, which is why this syllabus still teaches the 8086 as the foundation.",
              "The 80186/80188 (1982) integrate the support chips onto the die - clock generator, DMA controller, interrupt controller, timers - turning the processor into a single-chip system ideal for embedded controllers. The 80286 (1982) adds a 24-bit address bus (16 MB) and introduces protected mode with hardware memory protection and virtual memory, though it cannot return to real mode without a reset. The 80386 (1985) goes fully 32-bit: 4 GB physical addressing, paged virtual memory, virtual-8086 mode that runs DOS programs alongside protected tasks - the first processor that feels modern.",
              "The 80486 (1989) integrates the floating-point unit on-chip, adds an 8 KB on-chip cache and a five-stage pipeline, and executes many instructions in fewer cycles (a register-to-register MOV in one clock instead of two). The Pentium (1993) becomes superscalar: two parallel integer pipelines (U and V) execute two instructions per clock, the data bus widens to 64 bits, and branch prediction appears. Each step widens the bus, deepens the pipeline, or moves a support function on-chip - the three recurring moves of microprocessor evolution.",
              "Read the evolution as an exam table with five columns - year, data bus, address bus, key new feature, clock - and fill it for 8086/8088, 80186, 80286, 80386, 80486 and Pentium. The pattern to state explicitly: word width doubles (16 to 32 to 64), address space grows (1 MB, 16 MB, 4 GB), and integration deepens (FPU, cache, multiple pipelines on chip).",
            ],
            keyTerms: [
              { term: "8088", definition: "8086 architecture with an 8-bit external data bus; the CPU of the original IBM PC." },
              { term: "Protected mode (80286)", definition: "24-bit addressing with hardware memory protection; the birth of virtual memory on x86." },
              { term: "Virtual-8086 mode (80386)", definition: "Runs multiple real-mode 8086 programs as tasks inside a 32-bit protected environment." },
              { term: "Superscalar (Pentium)", definition: "Two integer pipelines issuing two instructions per clock cycle." },
            ],
            diagram: {
              kind: "flow",
              title: "The x86 evolution line",
              caption: "Each step widens the bus, extends the address space, or integrates a subsystem on-chip.",
              steps: [
                { label: "8086/8088", note: "16-bit, 1 MB, 5 MHz" },
                { label: "80186/80188", note: "peripherals integrated on-chip" },
                { label: "80286", note: "24-bit, 16 MB, protected mode" },
                { label: "80386", note: "32-bit, 4 GB, paging, v86 mode" },
                { label: "80486", note: "FPU + 8 KB cache + pipeline" },
                { label: "Pentium", note: "superscalar, 64-bit data bus" },
              ],
            },
            bullets: [
              "8086: 16-bit data, 20-bit address (1 MB), 29,000 transistors, 40-pin DIP, 5 MHz.",
              "8088: same CPU, 8-bit data bus - IBM PC compatibility advantage.",
              "80186/80188: clock generator, DMA, interrupt controller and timers integrated.",
              "80286: 16 MB address space, protected mode with hardware memory protection.",
              "80386: 32-bit, 4 GB, paging, virtual-8086 mode - fully modern architecture.",
              "80486: on-chip FPU, 8 KB cache, 5-stage pipeline; Pentium: dual pipelines, 64-bit data bus.",
            ],
            callout: {
              type: "tip",
              title: "Compatibility is the plot",
              body: "Every later processor executes 8086 code unchanged - that single design decision is why the 8086 remains in the syllabus. State it explicitly in evolution answers; examiners look for the compatibility thread, not just a list of years.",
            },
            table: {
              caption: "Fill-in-the-numbers evolution table.",
              headers: ["Processor", "Year", "Data bus", "Address space", "Signature feature"],
              rows: [
                ["8086", "1978", "16 bit", "1 MB", "BIU/EU, prefetch queue"],
                ["8088", "1979", "8 bit", "1 MB", "IBM PC CPU"],
                ["80186", "1982", "16 bit", "1 MB", "integrated peripherals"],
                ["80286", "1982", "16 bit", "16 MB", "protected mode"],
                ["80386", "1985", "32 bit", "4 GB", "paging, v86 mode"],
                ["80486", "1989", "32 bit", "4 GB", "on-chip FPU + cache"],
                ["Pentium", "1993", "64 bit", "4 GB", "superscalar dual pipeline"],
              ],
            },
            examQuestions: [
              {
                q: "Trace the evolution of Intel microprocessors from 8086 to Pentium with the key features introduced at each step.",
                marks: 14,
                outline: [
                  "8086: 16-bit, 1 MB, 5 MHz, BIU/EU with 6-byte queue",
                  "8088: 8-bit external bus - IBM PC choice",
                  "80186/80188: clock gen, DMA, PIC, timers integrated on-chip",
                  "80286: 16 MB, protected mode, hardware memory protection",
                  "80386: 32-bit, 4 GB, paging, virtual-8086 mode",
                  "80486: on-chip FPU, 8 KB cache, pipelined execution",
                  "Pentium: superscalar U/V pipelines, 64-bit data bus, branch prediction",
                ],
              },
              {
                q: "What new capabilities did the 80286 and 80386 add over the 8086?",
                marks: 7,
                outline: [
                  "80286: 24-bit address bus (16 MB), protected mode, memory protection",
                  "80286 limitation: cannot re-enter real mode without reset",
                  "80386: 32-bit registers and buses, 4 GB, paged virtual memory",
                  "Virtual-8086 mode runs real-mode programs as protected tasks",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Register organization of the 8086",
            body: [
              "The 8086 exposes fourteen 16-bit registers in four functional groups. General-purpose data registers AX, BX, CX, DX each split into high and low halves (AH/AL, BH/BL, CH/CL, DH/DL) so 8-bit programs can work on half the width; each has a second job - AX is the implicit accumulator for MUL/DIV, BX the base for addressing, CX the implicit loop counter, DX the data port for IN/OUT. Pointer and index registers SP (stack pointer), BP (base pointer), SI and DI (source/destination index) hold offsets within segments and drive the string instructions.",
              "The segment registers CS, DS, SS and ES hold the base addresses of the code, data, stack and extra segments. Every memory reference is formed by pairing a segment register with an offset: CS:IP for instruction fetch, SS:SP for stack push/pop, DS:SI and ES:DI for string moves, DS:BX or SS:BP for general data. The offset register plus its default segment is an inviolable partnership - learning the defaults is half of 8086 addressing.",
              "The remaining pair - IP (instruction pointer) and FLAGS - live with the BIU and the EU respectively. FLAGS holds nine status and control bits: CF (carry), PF (parity), AF (auxiliary carry for BCD), ZF (zero), SF (sign), TF (trap - single-step debugging), IF (interrupt enable), DF (direction for string ops) and OF (overflow for signed arithmetic). A worked example ties registers to an instruction: MOV AX, 1234H puts 1234H in AX (AH = 12H, AL = 34H); MUL BX computes DX:AX = AX x BX, a 32-bit result split across two registers because 16 x 16 bits overflows one register.",
              "For the exam, draw the register file as four rows - data (AX-BX-CX-DX with AH/AL splits), pointers/indexes (SP, BP, SI, DI), segments (CS, DS, SS, ES), and control (IP, FLAGS) - then annotate each register with its hidden role. The hidden-role column (accumulator, base, counter, string pair, stack pair) is what distinguishes a 14-mark answer from a bare list.",
            ],
            keyTerms: [
              { term: "AX-AL/AH", definition: "Accumulator; AL for 8-bit arithmetic, AH for its upper half; MUL/DIV use AX implicitly." },
              { term: "Segment register", definition: "CS, DS, SS or ES - holds a 16-bit segment base shifted to a 20-bit paragraph boundary." },
              { term: "FLAGS", definition: "Nine status/control bits: CF, PF, AF, ZF, SF, TF, IF, DF, OF." },
              { term: "IP", definition: "Instruction pointer - offset of the next instruction within CS." },
              { term: "BP", definition: "Base pointer - offset into the stack segment used for procedure parameters." },
            ],
            diagram: {
              kind: "layers",
              title: "The 8086 register file, grouped",
              caption: "Four groups of fourteen 16-bit registers - each with a hidden second role the instruction set exploits.",
              layers: [
                { label: "Control: IP, FLAGS", note: "fetch offset; nine status/control flags" },
                { label: "Segment: CS, DS, SS, ES", note: "base of code, data, stack, extra segments" },
                { label: "Pointer/index: SP, BP, SI, DI", note: "stack and string offsets" },
                { label: "Data: AX, BX, CX, DX", note: "each splits AH/AL; accumulator, base, counter, port" },
              ],
            },
            bullets: [
              "Fourteen 16-bit registers: 4 data, 4 pointer/index, 4 segment, IP and FLAGS.",
              "AX/BX/CX/DX split into AH/AL halves for 8-bit work; each has an implicit role.",
              "SP pairs with SS for the stack; BP is the procedure's frame pointer.",
              "SI and DI are the string-instruction source and destination offsets.",
              "FLAGS: CF, PF, AF, ZF, SF, TF, IF, DF, OF - status set by arithmetic, control by software.",
              "MUL BX result lands in DX:AX - the 32-bit split across two registers.",
            ],
            callout: {
              type: "warning",
              title: "Default segments are exam bait",
              body: "Every offset register has a default segment: SP/BP default to SS, SI defaults to DS, DI defaults to ES (DS in string ops without a segment-override prefix). Naming the wrong default is the most common lost mark in register-organization answers.",
            },
            table: {
              caption: "Register - split - hidden role.",
              headers: ["Register", "8-bit halves", "Implicit role"],
              rows: [
                ["AX", "AH, AL", "accumulator: MUL, DIV, IN/OUT"],
                ["BX", "BH, BL", "base register: [BX] addressing"],
                ["CX", "CH, CL", "loop counter: LOOP, REP, shifts via CL"],
                ["DX", "DH, DL", "I/O port address; high half of MUL/DIV"],
                ["SP", "none", "stack pointer with SS"],
                ["BP", "none", "frame base with SS"],
                ["SI / DI", "none", "source / destination for strings"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the register organization of the 8086. Explain the role of each register group and the special duties hidden in the general-purpose registers.",
                marks: 14,
                outline: [
                  "14 registers in 4 groups: data, pointer/index, segment, control",
                  "AX-BX-CX-DX split into AH/AL halves; 8-bit access",
                  "Hidden roles: AX accumulator, BX base, CX counter, DX port/high-half",
                  "SP/BP with SS: stack and frames; SI/DI string offsets",
                  "CS:IP fetch, SS:SP stack, DS/ES data pairing",
                  "FLAGS nine bits: CF, PF, AF, ZF, SF, TF, IF, DF, OF",
                  "Worked: MUL BX places the 32-bit product in DX:AX",
                ],
              },
              {
                q: "Explain the nine flag bits of the 8086 FLAGS register and which instructions set them.",
                marks: 7,
                outline: [
                  "Status: CF carry out of MSB, PF even parity of low byte, AF BCD nibble carry",
                  "ZF result zero, SF copy of MSB, OF signed overflow",
                  "Control: TF single-step trap, IF interrupt enable, DF string direction",
                  "Arithmetic sets status flags; STI/CLI/STD/CLD set control flags",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Architecture of the 8086: BIU and EU",
            body: [
              "The 8086 divides internally into two cooperating units. The Bus Interface Unit (BIU) owns the buses and does four jobs: fetches instructions from memory into a 6-byte first-in-first-out prefetch queue, computes 20-bit physical addresses, performs all bus reads and writes, and handles bus control signals. Its address adder combines a 16-bit segment register shifted left four places with a 16-bit offset: physical = segment x 16 + offset - so CS = 1000H, IP = 0020H fetches from 10020H. The Execution Unit (EU) contains the general registers, the ALU, the FLAGS register and the control/decode circuitry; it pulls instructions from the queue and executes them without touching the buses directly.",
              "The two units run in parallel, and that parallelism is the 8086's one big speed trick. While the EU executes the current instruction, the BIU has already fetched the next ones into the queue - fetch and execute overlap like a two-stage pipeline. The queue holds up to six instruction bytes, which is why jump and call instructions force the BIU to flush the queue and refill it: the prefetched bytes past a branch are now useless. A worked timing: MOV AX, BX executes in 2 clocks because its bytes are already in the queue; a taken jump costs at least 10 clocks partly because of the queue flush.",
              "The segmentation arithmetic deserves one more worked line. Four segments of up to 64 KB each can coexist at once; segment values are paragraph-aligned (multiples of 16). CS = 2000H means code lives at physical 20000H-2FFFFH. Two different segment:offset pairs can name the same physical address (1000H:0020H and 1002H:0000H both equal 10020H) - the property that makes relocations and overlapping overlays possible.",
              "Draw the architecture for the exam: left block BIU with segment registers, IP, adder and queue; right block EU with registers, ALU and flags; arrows for the queue handoff and for the external address/data buses. Then state the division of labour in one sentence each - BIU fetches and addresses, EU decodes and executes - and the speed argument follows naturally.",
            ],
            keyTerms: [
              { term: "BIU", definition: "Bus Interface Unit - fetches instructions, computes physical addresses, performs all bus transfers." },
              { term: "EU", definition: "Execution Unit - decodes and executes instructions from the queue using registers, ALU and FLAGS." },
              { term: "Prefetch queue", definition: "6-byte FIFO between BIU and EU; flushed by any taken jump or call." },
              { term: "Physical address", definition: "segment x 16 + offset - a 20-bit address into the 1 MB space." },
            ],
            diagram: {
              kind: "pipeline",
              title: "BIU and EU as overlapped stages",
              caption: "Fetch never waits for execute - except when a branch empties the queue.",
              stages: [
                { label: "BIU fetch", note: "instruction bytes from CS:IP" },
                { label: "Queue (6 bytes)", note: "FIFO handoff" },
                { label: "EU decode", note: "control signals generated" },
                { label: "EU execute", note: "ALU, registers, FLAGS" },
              ],
            },
            bullets: [
              "BIU: segment registers, IP, address adder, 6-byte queue, all bus activity.",
              "EU: general registers, ALU, FLAGS, decode and control logic.",
              "Physical address = segment x 16 + offset; four segments of 64 KB live at once.",
              "Fetch and execute overlap - the 8086's two-stage pipeline effect.",
              "Any taken jump/call flushes the queue and refills it - branch cost.",
              "1000H:0020H = 1002H:0000H = 10020H: segment:offset is not unique.",
            ],
            callout: {
              type: "tip",
              title: "Why the queue is exactly 6 bytes",
              body: "The longest 8086 instructions are up to 6 bytes, so a full queue always contains the next complete instruction. This one-line justification turns a fact into an understanding argument - quote it in architecture answers.",
            },
            codeExample: {
              language: "assembly",
              caption: "Address arithmetic - segment x 16 + offset",
              code: `; CS = 1000H, IP = 0020H  ->  physical fetch address
;      1000H x 10H = 10000H   (segment shifted left 4 bits)
;      10000H + 0020H = 10020H
;
; same physical address, two views:
;   1000H:0020H  ->  10020H
;   1002H:0000H  ->  10020H`,
            },
            examQuestions: [
              {
                q: "Explain the architecture of the 8086 with the BIU and EU. How does the prefetch queue overlap fetch and execution, and what happens at a taken branch?",
                marks: 14,
                outline: [
                  "BIU jobs: fetch, 20-bit address computation, bus reads/writes, control signals",
                  "Physical address = segment x 16 + offset; worked: 1000H:0020H = 10020H",
                  "EU jobs: decode, execute with registers, ALU and FLAGS",
                  "6-byte queue overlaps fetch with execution - two-stage pipeline effect",
                  "Taken jump/call flushes the queue; branch costs extra clocks",
                  "Queue size 6 bytes because the longest instruction is 6 bytes",
                  "Draw: BIU left (segments, IP, adder, queue), EU right (regs, ALU, flags)",
                ],
              },
              {
                q: "Compute the physical address for CS = 2500H and IP = 011AH, and show a second segment:offset pair naming the same address.",
                marks: 7,
                outline: [
                  "2500H x 10H = 25000H (shift left four bits)",
                  "25000H + 011AH = 2511AH",
                  "Second pair: 2511H:0000H also equals 2511AH",
                  "Conclusion: segment:offset is not unique",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Signal description of the 8086",
            body: [
              "The 8086 is a 40-pin DIP whose pins are budgeted by multiplexing - there are not enough pins for 20 address lines and 16 data lines separately, so the pins do double duty. AD0-AD15 carry the low 16 address bits during T1 and the 16 data bits from T2 onward; A19/S6-A16/S3 carry the high four address bits during T1 and status bits S3-S6 afterwards; BHE#/S7 enables the high byte bank during T1. The address latch enable (ALE) pulse at T1 tells external 8282 latches to capture the address before the pins switch to data.",
              "The control group drives bus transactions and system state: RD# and WR# strobe reads and writes, M/IO# selects memory versus I/O space, DT/R# and DEN# steer the 8286 bus transceivers' direction and enable, READY lets slow memory stretch the cycle by inserting wait states, and INTR/NMI/INTA#/TEST carry interrupts. CLK needs a 33% duty-cycle clock from an 8284 generator; RESET restarts the processor at FFFF0H; MN/MX# selects the system mode (next section).",
              "The mode-dependent pins flip meaning between minimum and maximum mode: in minimum mode the 8086 itself generates ALE, DEN#, DT/R#, M/IO#, WR#, HOLD and HLDA; in maximum mode these pins become S0-S2 (status to the 8288 bus controller), LOCK (bus arbitration to coprocessors), and RQ#/GT0#/GT1# (request/grant for local bus masters). Reading a signal question is therefore always two questions: what the pin does in T-states, and what it becomes in the other mode.",
              "For the exam, group the 40 pins into five families - multiplexed address/data (AD0-15, A16/S3-A19/S6, BHE#/S7), control (RD#, WR#, M/IO#, ALE, DEN#, DT/R#, READY), interrupts and arbitration (INTR, NMI, INTA#, TEST, HOLD/HLDA or RQ#/GT#), mode and clock (MN/MX#, CLK, RESET, Vcc/GND) - and attach one sentence plus one timing role to each family. A full pin list memorized flat is worth less than five grouped families understood.",
            ],
            keyTerms: [
              { term: "AD0-AD15", definition: "Multiplexed pins: low address byte-word during T1, data during T2-T4." },
              { term: "ALE", definition: "Address Latch Enable - T1 pulse that latches the address in external 8282 latches." },
              { term: "READY", definition: "Input that, deasserted, inserts wait states (Tw) for slow memory or I/O." },
              { term: "BHE#", definition: "Bus High Enable - activates the odd (high) byte bank of 16-bit memory." },
              { term: "MN/MX#", definition: "Mode select: 1 = minimum mode (self-generated control), 0 = maximum mode (8288 bus controller)." },
            ],
            diagram: {
              kind: "fork",
              title: "The 40 pins, grouped by job",
              caption: "Five families cover the DIP: multiplexed buses, transaction control, interrupts, arbitration, and mode/clock.",
              start: "8086 pin functions",
              branches: [
                { label: "Multiplexed buses", outcome: "AD0-15 data/address, A16-S19 status/address, BHE# - latched by ALE", good: true },
                { label: "Transaction control", outcome: "RD#, WR#, M/IO#, DEN#, DT/R#, READY - steer each bus cycle", good: true },
                { label: "Interrupts", outcome: "INTR (maskable), NMI (non-maskable), INTA#, TEST", good: true },
                { label: "Mode/clock", outcome: "MN/MX#, CLK, RESET; HOLD/HLDA or S0-S2, LOCK, RQ#/GT# by mode", good: true },
              ],
            },
            bullets: [
              "AD0-AD15: address in T1, data in T2-T4 - the core multiplexing trick.",
              "A19/S6-A16/S3: high address bits in T1, status S3-S6 afterwards.",
              "ALE latches addresses; DT/R# and DEN# drive 8286 transceivers.",
              "READY low stretches the cycle with wait states for slow peripherals.",
              "INTR is maskable (gated by IF), NMI is edge-triggered and non-maskable.",
              "Mode-dependent pins: HOLD/HLDA/ALE/WR# (min) become S0-S2, LOCK, RQ#/GT# (max).",
            ],
            callout: {
              type: "exam",
              title: "Say the multiplexing reason",
              body: "Every pin question rewards the 'why': 40 pins cannot carry 20 address + 16 data + control simultaneously, so address and data share pins and ALE separates them in time. Write that sentence before listing signals - it signals understanding, not memorization.",
            },
            table: {
              caption: "Key signals and their timing role.",
              headers: ["Signal", "Direction", "Role in the bus cycle"],
              rows: [
                ["AD0-AD15", "bidirectional", "address (T1), data (T2-T4)"],
                ["A16/S3-A19/S6", "output", "high address (T1), status after"],
                ["ALE", "output", "latch address at T1"],
                ["RD# / WR#", "output", "read / write strobe (T2-T4)"],
                ["M/IO#", "output", "memory vs I/O space select"],
                ["DEN#, DT/R#", "output", "transceiver enable, direction"],
                ["READY", "input", "inserts Tw wait states when low"],
                ["INTR / NMI", "input", "maskable / non-maskable interrupt request"],
              ],
            },
            examQuestions: [
              {
                q: "Draw the pin diagram of the 8086 and explain the function of its major signal groups, including the multiplexed address/data pins and the mode-dependent pins.",
                marks: 14,
                outline: [
                  "40-pin DIP; multiplexing forced by pin budget",
                  "AD0-AD15: address at T1, data at T2-T4; ALE latches",
                  "A19/S6-A16/S3: high address then status; BHE#/S7 high-bank enable",
                  "Control: RD#, WR#, M/IO#, DEN#, DT/R#, READY",
                  "Interrupts: INTR (maskable via IF), NMI, INTA#, TEST",
                  "Minimum-mode pins ALE/DEN#/DT/R#/M-IO/WR#/HOLD-HLDA",
                  "Maximum-mode pins S0-S2, LOCK, RQ#/GT0#/GT1# for the 8288 and coprocessors",
                ],
              },
              {
                q: "Explain how the READY input and the ALE output cooperate in a bus cycle with slow memory.",
                marks: 7,
                outline: [
                  "ALE latches the address in 8282s at T1 - pins then free for data",
                  "Slow memory asserts READY low during T3",
                  "8086 inserts Tw wait states until READY returns high",
                  "Data transfer completes at T4 with the address still held in the latches",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Minimum mode 8086 system and timing",
            body: [
              "Minimum mode (MN/MX# tied high) is the single-processor configuration: the 8086 generates every bus control signal itself. The supporting cast is three chip types - an 8284 clock generator producing CLK, RESET and READY synchronization; two or three 8282 octal latches capturing A0-A19 plus BHE# on the ALE pulse; and one or two 8286 octal bus transceivers steering data under DT/R# and DEN#. The 8086 outputs ALE, DEN#, DT/R#, M/IO#, WR# and RD# directly, and responds to HOLD/HLDA for DMA masters.",
              "Every bus transaction unfolds across four clock states, T1 to T4. At 5 MHz each state is 200 ns, so a full cycle takes 800 ns. T1: ALE goes high and the 20-bit address plus BHE# appear on the multiplexed pins. T2: ALE drops, status replaces the high address bits, DEN# and DT/R# activate the transceivers, and RD# (or WR# with data driven out) asserts. T3: data becomes valid on the bus for a read (or is being absorbed for a write); if the memory deasserts READY, Tw wait states are inserted between T3 and T4. T4: the transfer completes and all strobes deactivate.",
              "A worked read timing: instruction MOV AL, [2000H] with DS = 0000H. T1 places 02000H on the pins (ALE latches it); T2 asserts RD# and M/IO# = memory; T3 waits for the memory's access time - if the memory responds in 350 ns, one Tw (200 ns) is inserted because 350 ns > T1+T2+T3 = 600 ns budget; T4 latches the data into AL as RD# deasserts. Write timing differs in one detail: the 8086 drives valid data from the start of T2 rather than the end, giving memory the whole cycle to capture it.",
              "In the exam answer, draw the timing diagram with CLK as the spine and rows for ALE, AD0-15, RD#/WR#, DEN# and READY, then narrate T1 to T4 in one line each. The narration - not the drawing alone - is what the mark scheme pays for, especially the READY/Tw insertion point between T3 and T4.",
            ],
            keyTerms: [
              { term: "Minimum mode", definition: "MN/MX# = 1: the 8086 generates all control signals for a single-processor system." },
              { term: "T-state", definition: "One clock period (200 ns at 5 MHz); a bus cycle is T1-T4." },
              { term: "Tw (wait state)", definition: "Extra state inserted when READY is low - one clock each." },
              { term: "8282 latch", definition: "Octal latch that captures the multiplexed address on ALE." },
              { term: "8286 transceiver", definition: "Octal bidirectional buffer steering data, enabled by DEN#, directed by DT/R#." },
            ],
            diagram: {
              kind: "cycle",
              title: "The four states of a bus cycle",
              caption: "T1 addresses, T2 commands, T3 waits for data, T4 completes - Tw loops for slow devices.",
              steps: [
                { label: "T1", note: "ALE high; address + BHE# on pins" },
                { label: "T2", note: "RD#/WR# and DEN#/DT-R# active; status out" },
                { label: "T3", note: "data valid; READY checked" },
                { label: "Tw", note: "wait states while READY low" },
                { label: "T4", note: "transfer completes; strobes drop" },
              ],
            },
            bullets: [
              "MN/MX# = 1: 8086 outputs ALE, DEN#, DT/R#, M/IO#, RD#, WR# itself.",
              "Support chips: 8284 clock generator, 8282 address latches, 8286 data transceivers.",
              "Bus cycle = T1 address, T2 strobes, T3 data/READY check, T4 completion.",
              "At 5 MHz each T-state is 200 ns; a cycle is 800 ns before wait states.",
              "READY low between T3 and T4 inserts Tw states, one clock each.",
              "Writes drive data out early in T2 so memory sees it all cycle.",
            ],
            callout: {
              type: "warning",
              title: "The Tw insertion point",
              body: "Wait states are checked at the END of T3, not T2 - a common diagram error. Draw READY sampled at the T3/T4 boundary and Tw states looping back to T3's data phase; READY sampled anywhere else loses the timing mark.",
            },
            table: {
              caption: "Minimum-mode timing at 5 MHz (200 ns per state).",
              headers: ["State", "Address/data pins", "Control pins", "Duration"],
              rows: [
                ["T1", "address + BHE# out", "ALE high", "200 ns"],
                ["T2", "address drops, status out", "RD# or WR# active; DEN#, DT/R# set", "200 ns"],
                ["T3", "data phase begins", "strobes held; READY sampled", "200 ns"],
                ["Tw", "held", "strobes held until READY high", "200 ns each"],
                ["T4", "data transferred", "strobes deassert", "200 ns"],
              ],
            },
            examQuestions: [
              {
                q: "Draw and explain the minimum-mode 8086 system configuration and the read bus cycle timing from T1 to T4, including the effect of READY.",
                marks: 14,
                outline: [
                  "MN/MX# = 1; 8086 generates all control signals",
                  "8284 clock/RESET/READY; 8282 latches on ALE; 8286 transceivers",
                  "T1: ALE high, 20-bit address + BHE# latched",
                  "T2: RD# + M/IO# assert; DEN#/DT-R# steer transceivers",
                  "T3: data valid; READY sampled - slow memory asserts it low",
                  "Tw inserted until READY high; T4 completes the transfer",
                  "Worked: MOV AL,[2000H] with 350 ns memory needs one Tw",
                ],
              },
              {
                q: "How does a write cycle differ from a read cycle in minimum mode?",
                marks: 7,
                outline: [
                  "WR# replaces RD#; M/IO# still selects space",
                  "8086 drives valid data from early T2 (read: memory drives by T3)",
                  "DT/R# = transmit for writes, receive for reads",
                  "Data held until T4 end so memory captures it reliably",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Maximum mode 8086 system and timing",
            body: [
              "Maximum mode (MN/MX# tied low) exists for multiprocessor systems - 8086 plus 8087 numeric coprocessor or 8089 I/O processor sharing one bus. The 8086 stops generating individual control signals and instead outputs the three-bit bus status S2-S0 each cycle; an external 8288 bus controller decodes S2-S0 into the full command set: MRDC#/MWTC# for memory, IORC#/IOWC# for I/O, AMWC#/AIOWC# advanced (early) write strobes, and INTA#. ALE, DEN# and DT/R# now come from the 8288, not the CPU.",
              "The timing changes shape but keeps the T1-T4 skeleton. S2-S0 become valid shortly before T1's start (during the previous T4) and hold through the cycle, so the 8288 can pipeline its command outputs. T1 still latches the address via ALE from the 8288; T2 asserts the decoded command; T3 checks READY exactly as in minimum mode; T4 completes. The distinction to write in answers: minimum mode timing shows CPU-generated RD#/WR#/M-IO; maximum mode timing shows 8288-generated MRDC/MWTC/IORC/IOWC derived from the status bits.",
              "Arbitration is the reason maximum mode exists. The LOCK prefix pins the bus to the current master for the next instruction (essential for atomic read-modify-write with a coprocessor), and the two RQ#/GT# pins are bidirectional request/grant lines: a coprocessor pulses RQ#, the 8086 grants with GT#, releases the bus, and recovers it with another pulse. A worked scenario: 8087 executes an ESC instruction and requests the bus to fetch operands - the 8086 grants at the next instruction boundary, the 8087 owns the bus for the transfer, then returns it.",
              "Structure the exam answer as: why maximum mode (multiprocessor), who generates what (8288 from S2-S0), the decoded command list, the timing skeleton with the same T1-T4 states, and arbitration via RQ#/GT# and LOCK. A compare table of minimum versus maximum mode closes it perfectly.",
            ],
            keyTerms: [
              { term: "Maximum mode", definition: "MN/MX# = 0: status S2-S0 output; an 8288 bus controller generates the commands." },
              { term: "8288 bus controller", definition: "Decodes S2-S0 into MRDC/MWTC/IORC/IOWC/INTA and drives ALE, DEN#, DT-R#." },
              { term: "RQ#/GT#", definition: "Bidirectional request/grant pins letting coprocessors take the local bus." },
              { term: "LOCK", definition: "Output pin (with LOCK prefix) that forbids bus handover during the next instruction." },
            ],
            diagram: {
              kind: "compare",
              title: "Minimum mode vs maximum mode",
              caption: "Same CPU, same T-states - the control-signal generator moves off-chip in maximum mode.",
              left: {
                heading: "Minimum mode (single master)",
                items: [
                  "MN/MX# = 1",
                  "CPU outputs ALE, DEN#, DT/R#, M/IO#, RD#, WR#",
                  "HOLD/HLDA for DMA",
                  "Simplest bus; one processor",
                ],
              },
              right: {
                heading: "Maximum mode (multiprocessor)",
                items: [
                  "MN/MX# = 0",
                  "S2-S0 to 8288; it outputs MRDC/MWTC/IORC/IOWC/INTA",
                  "RQ#/GT# for 8087/8089; LOCK pins the bus",
                  "Commands pipelined from status bits",
                ],
              },
            },
            bullets: [
              "MN/MX# = 0 selects maximum mode for 8087/8089 multiprocessor systems.",
              "S2-S0 status encodes the transaction type for the whole cycle.",
              "8288 decodes: memory read/write, I/O read/write, interrupt acknowledge, advanced strobes.",
              "ALE, DEN#, DT/R# now come from the 8288 - not the CPU.",
              "T1-T4 skeleton unchanged; commands are pipelined from the status bits.",
              "RQ#/GT# handshake and LOCK prefix provide bus arbitration.",
            ],
            callout: {
              type: "exam",
              title: "Decode the status bits",
              body: "One high-yield line: S2-S1-S0 = 000 interrupt acknowledge, 001 I/O read, 010 I/O write, 011 halt, 100 instruction fetch, 101 memory read, 110 memory write, 111 passive. Quoting three or four of these codes proves you know the 8288's job, not just its name.",
            },
            table: {
              caption: "Who generates what, mode by mode.",
              headers: ["Signal", "Minimum mode", "Maximum mode"],
              rows: [
                ["ALE, DEN#, DT/R#", "8086", "8288"],
                ["Read/write strobes", "RD#, WR#, M/IO#", "MRDC#, MWTC#, IORC#, IOWC# from S2-S0"],
                ["Multiprocessor support", "HOLD/HLDA only", "RQ#/GT#, LOCK, S2-S0"],
                ["Typical system", "single CPU + DMA", "8086 + 8087/8089 + 8288"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the maximum-mode 8086 system: the role of S2-S0, the 8288 bus controller, the command signals it generates, and bus arbitration via RQ#/GT#.",
                marks: 14,
                outline: [
                  "MN/MX# = 0 chosen for multiprocessor operation",
                  "8086 outputs 3-bit status S2-S0 instead of individual control signals",
                  "8288 decodes to MRDC#, MWTC#, IORC#, IOWC#, AMWC#, AIOWC#, INTA#",
                  "8288 also drives ALE, DEN#, DT/R#",
                  "Same T1-T4 skeleton; commands pipelined from status",
                  "RQ#/GT# request/grant handshake; LOCK prefix for atomic operations",
                  "Worked: 8087 ESC operand fetch requests and receives the bus",
                ],
              },
              {
                q: "Compare minimum and maximum mode configurations in a table and state when each is chosen.",
                marks: 7,
                outline: [
                  "MN/MX# level decides the mode",
                  "Control generation: CPU itself vs 8288 bus controller",
                  "Signals: ALE/DEN/DT-R/M-IO/WR vs MRDC/MWTC/IORC/IOWC",
                  "Arbitration: HOLD/HLDA vs RQ#/GT# + LOCK",
                  "Choice: single-processor simplicity vs coprocessor systems",
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
      title: "8086 Programming",
      summary:
        "Unit II turns the architecture into software: the full 8086 instruction set by groups, all addressing modes, the stack and procedures, and assembly language programming - directives, structure, and worked programs from block moves to arithmetic.",
      chapter: {
        number: "02",
        title: "Programming the 8086",
        intro:
          "Unit II covers the 8086 instruction set (data transfer, arithmetic, logic, string, branch, processor control), the complete addressing-mode set, stack operations and procedures, and assembly language programming with directives and worked examples.",
        inOneBreath:
          "Six instruction groups cover the 8086: move data, do arithmetic, twiddle bits, walk strings, jump and call, control the processor. Every operand is located by an addressing mode - from immediate and register through direct, indirect, based, indexed and based-indexed-with-displacement. The stack (SS:SP) backs procedures via CALL/RET, and assembly programs are organized with SEGMENT/ASSUME/DB-DW directives. Master one worked program per pattern - block transfer with MOVSB, largest-of-array with CMP, delay loops with CX - and Unit II is exam-ready.",
        sections: [
          {
            number: "2.1",
            title: "The 8086 instruction set: groups and formats",
            body: [
              "The 8086 implements about 133 instruction types organized into six functional groups. Data transfer: MOV, XCHG, LEA, PUSH, POP, IN, OUT, XLAT, LAHF/SAHF, LDS/LES. Arithmetic: ADD, ADC, SUB, SBB, CMP, INC, DEC, NEG, MUL, IMUL, DIV, IDIV, CBW, CWD, and the BCD correctors AAA, AAS, AAM, AAD, DAA, DAS. Logical/shift/rotate: AND, OR, XOR, NOT, TEST, SHL/SAL, SHR, SAR, ROL, ROR, RCL, RCR. String: MOVS, CMPS, SCAS, LODS, STOS with the REP/REPE/REPNE prefixes.",
              "Program transfer instructions move control: unconditional JMP (short 8-bit, near 16-bit, far segment+offset), the sixteen conditional jumps (JZ/JNZ, JC/JNC, JS/JNS, JO/JNO, JP/JNP, JA/JB JE-style unsigned, JG/JL-style signed), LOOP/LOOPE/LOOPNZ driven by CX, CALL/RET near and far, and INT n/INTO/IRET. Processor control: STC/CLC/CMC, STD/CLD, STI/CLI, HLT, WAIT, ESC, NOP, LOCK. Grouping is the memorization trick - six families, each with a one-line purpose.",
              "Instruction formats determine size and speed. An instruction is 1 to 6 bytes: opcode (1-2 bytes), optional mod-reg-r/m byte, optional displacement (8 or 16 bits), optional immediate data. A worked decode: MOV AL, [BX+SI+10H] is opcode 8AH plus mod-reg-r/m 50H plus displacement 10H = 3 bytes; MOV AX, 1234H is opcode B8H plus immediate 1234H = 3 bytes. Register-to-register MOV AX, BX is just 2 bytes (89H C3H) - the cheapest form, which is why optimizing assemblers prefer registers.",
              "In the exam, structure the instruction-set answer by the six groups with two representative instructions each, then one sentence on format encoding. When asked to explain one instruction deeply, give: syntax, operands allowed, flags affected, one example with numbers.",
            ],
            keyTerms: [
              { term: "Instruction groups", definition: "Six families: data transfer, arithmetic, logical, string, program transfer, processor control." },
              { term: "REP prefix", definition: "Repeats a string instruction CX times (REPE/REPNE also test ZF)." },
              { term: "mod-reg-r/m byte", definition: "The second instruction byte encoding addressing mode, register and memory operand." },
              { term: "CBW/CWD", definition: "Sign-extend AL into AX, or AX into DX:AX, before signed division." },
            ],
            diagram: {
              kind: "fork",
              title: "Six instruction families",
              caption: "Every 8086 instruction belongs to one of six groups - classify first, then recall.",
              start: "8086 instruction set",
              branches: [
                { label: "Data transfer", outcome: "MOV, XCHG, LEA, PUSH/POP, IN/OUT, XLAT", good: true },
                { label: "Arithmetic", outcome: "ADD/ADC, SUB/SBB, CMP, MUL/DIV, BCD adjusts", good: true },
                { label: "Logical + shifts", outcome: "AND/OR/XOR/NOT/TEST, SHL/SHR/SAR, ROL/ROR/RCL/RCR", good: true },
                { label: "String", outcome: "MOVS/CMPS/SCAS/LODS/STOS with REP prefixes", good: true },
                { label: "Program transfer", outcome: "JMP, conditional jumps, LOOP, CALL/RET, INT/IRET", good: true },
                { label: "Processor control", outcome: "STC/CLC/CMC, STD/CLD, STI/CLI, HLT, WAIT, NOP, LOCK", good: true },
              ],
            },
            bullets: [
              "Six groups: data transfer, arithmetic, logical, string, program transfer, processor control.",
              "String ops pair DS:SI with ES:DI and honor the DF direction flag.",
              "Conditional jumps come in unsigned (JA/JB) and signed (JG/JL) flavours - after CMP.",
              "LOOP/LOOPE/LOOPNZ decrement CX and branch while it (and a condition) holds.",
              "Formats: 1-6 bytes = opcode + mod-reg-r/m + displacement + immediate.",
              "MOV AX, BX costs 2 bytes; any memory operand costs a mod-reg-r/m plus displacement.",
            ],
            callout: {
              type: "tip",
              title: "Flags affected = free marks",
              body: "For any instruction question, list the flags affected: arithmetic sets CF/ZF/SF/OF/AF/PF, CMP behaves like SUB without storing, TEST behaves like AND without storing, and MOV affects no flags at all. That list is routinely worth a mark per line.",
            },
            table: {
              caption: "One representative instruction per group.",
              headers: ["Group", "Instruction", "Effect", "Flags"],
              rows: [
                ["Data transfer", "MOV AX, BX", "AX = BX", "none"],
                ["Arithmetic", "ADD AX, BX", "AX = AX + BX", "CF ZF SF OF AF PF"],
                ["Logical", "XOR AX, AX", "AX = 0", "CF=0 ZF=1 SF=0 OF=0"],
                ["String", "REP MOVSB", "copy CX bytes DS:SI -> ES:DI", "none (SI, DI advance)"],
                ["Program transfer", "LOOP 0100H", "CX--; jump if CX != 0", "none"],
                ["Processor control", "STI", "IF = 1 (enable INTR)", "IF set"],
              ],
            },
            examQuestions: [
              {
                q: "Classify the 8086 instruction set into its functional groups with example instructions, and explain the general instruction format with byte counts.",
                marks: 14,
                outline: [
                  "Six groups with two examples each",
                  "Data transfer: MOV, XCHG, LEA, PUSH/POP, IN/OUT",
                  "Arithmetic: ADD/ADC, SUB/SBB, MUL/DIV, BCD adjusts",
                  "Logical and shifts; string ops with REP prefixes",
                  "Program transfer: JMP forms, conditional jumps, LOOP, CALL/RET, INT",
                  "Processor control: flag ops, HLT, WAIT, ESC, NOP, LOCK",
                  "Format: opcode + mod-reg-r/m + displacement + immediate = 1-6 bytes; MOV AX,BX = 2 bytes",
                ],
              },
              {
                q: "Explain the string instructions of the 8086 and the role of the direction flag and REP prefixes.",
                marks: 7,
                outline: [
                  "MOVS copies, CMPS compares, SCAS scans, LODS loads, STOS stores",
                  "Source DS:SI, destination ES:DI - always",
                  "DF = 0 increments SI/DI; DF = 1 decrements (STD/CLD set it)",
                  "REP repeats CX times; REPE/REPNE stop early on ZF",
                  "Example: REP MOVSB with CX = 100 copies 100 bytes",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Data transfer and arithmetic instructions in detail",
            body: [
              "Data transfer instructions move operands without touching flags. MOV copies register-to-register, register-to/from-memory, immediate-to-register or memory; it never allows memory-to-memory in one instruction - that needs two MOVs through a register. LEA loads the offset (not the contents) of a memory operand - LEA BX, TABLE[SI] computes an address arithmetically, which is why programmers also abuse it for fast math (LEA AX, [BX+BX+4]). XCHG swaps two operands; PUSH/POP move words between registers and the stack; IN AL, DX and OUT DX, AL move data through ports (DX holds 16-bit port addresses, immediate constants only 8-bit).",
              "Arithmetic splits into integer families. Addition: ADD, ADC (add with carry for multi-precision), INC. Subtraction: SUB, SBB, DEC, NEG (two's complement negate), CMP (subtract without storing - the comparison engine). Multiplication: MUL is unsigned, producing DX:AX = AX x operand; IMUL is signed with the same placement. Division: DIV is unsigned, quotient in AL/AX, remainder in AH/DX; IDIV signed. CBW and CWD sign-extend before IDIV so 8-bit and 16-bit values become the dividend width the instruction expects.",
              "A worked multi-precision addition shows the carry discipline: adding 32-bit values in DX:CX pairs means ADD CX, [SI] then ADC DX, [SI+2] - the second instruction adds the stored carry, exactly as you would by hand. A worked MUL: AX = 1234H (4660) times BX = 0002H gives DX:AX = 0000H:2468H; but AX = FFFFH (65535) times 2 gives 0001FFFEH, so DX = 0001H - the high half is not always zero, which is precisely why MUL returns two registers.",
              "The exam formula: for each instruction give syntax, legal operands, flags affected and one numeric example. The most-tested trio is CMP + conditional jump (the comparison idiom), MUL/DIV register placement (DX:AX discipline), and ADC/SBB in multi-precision arithmetic.",
            ],
            keyTerms: [
              { term: "LEA", definition: "Loads the computed OFFSET of a memory operand into a register - not its contents." },
              { term: "ADC/SBB", definition: "Add/subtract with carry/borrow - the multi-precision arithmetic primitives." },
              { term: "CMP", definition: "Subtracts without storing; sets flags for the following conditional jump." },
              { term: "MUL/DIV placement", definition: "Unsigned product in DX:AX; quotient in AL (or AX), remainder in AH (or DX)." },
              { term: "CBW/CWD", definition: "Sign-extend AL->AX and AX->DX:AX before signed division." },
            ],
            diagram: {
              kind: "flow",
              title: "Anatomy of CMP + conditional jump",
              caption: "The comparison idiom: subtract, discard, branch on what the flags say.",
              steps: [
                { label: "CMP AX, BX", note: "AX - BX, result discarded" },
                { label: "Flags written", note: "CF ZF SF OF AF PF" },
                { label: "Pick signed or unsigned", note: "JG/JL vs JA/JB" },
                { label: "Jcc target", note: "branch taken per flags" },
              ],
            },
            bullets: [
              "MOV cannot do memory-to-memory - route through a register in two instructions.",
              "LEA computes addresses; IN/OUT use DX for 16-bit ports, immediate for 8-bit ones.",
              "ADC/SBB carry and borrow across limbs in multi-precision adds/subtracts.",
              "MUL: DX:AX = AX x operand (unsigned); IMUL signed; DIV quotient/remainder split.",
              "CBW/CWD sign-extend before IDIV to avoid quotient-overflow traps.",
              "CMP sets all arithmetic flags and stores nothing - always paired with Jcc.",
            ],
            callout: {
              type: "exam",
              title: "The DX:AX discipline",
              body: "MUL and DIV results have fixed homes - MUL: DX:AX; DIV: quotient AL/AX, remainder AH/DX. Quoting the wrong register is the most common Unit II numerical error; write the register map before computing.",
            },
            codeExample: {
              language: "assembly",
              caption: "Multi-precision add and a multiply, worked",
              code: `; 32-bit add: [SI] = A, [BX] = B, result to [DI]
    MOV  AX, [SI]      ; low word of A
    ADD  AX, [BX]      ; low words -> CF set if carry
    MOV  [DI], AX
    MOV  AX, [SI+2]    ; high word of A
    ADC  AX, [BX+2]    ; + high word of B + carry
    MOV  [DI+2], AX

; MUL: AX = 1234H, BX = 0002H
    MOV  AX, 1234H
    MOV  BX, 0002H
    MUL  BX            ; DX:AX = 0000:2468H (4660 x 2 = 9320)`,
            },
            examQuestions: [
              {
                q: "Explain the data transfer and arithmetic instruction groups. Show a 32-bit multi-precision addition using ADC, and state where MUL and DIV leave their results.",
                marks: 14,
                outline: [
                  "MOV/XCHG/LEA/PUSH/POP/IN/OUT semantics; no memory-to-memory MOV",
                  "ADD/ADC, SUB/SBB, INC/DEC/NEG/CMP roles",
                  "Multi-precision: ADD low words, ADC high words to consume carry",
                  "MUL: DX:AX = AX x operand; IMUL signed",
                  "DIV: quotient AL (AX), remainder AH (DX); CBW/CWD before IDIV",
                  "Worked: 1234H x 0002H = 0000:2468H in DX:AX",
                  "Flags: transfer group sets none; arithmetic sets all six status flags",
                ],
              },
              {
                q: "Why does CMP exist when SUB would set the same flags?",
                marks: 7,
                outline: [
                  "CMP discards the difference - operands stay intact for later use",
                  "Same flag side-effects as SUB, so Jcc after CMP tests the comparison",
                  "Idiom: CMP then JA/JB (unsigned) or JG/JL (signed)",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Logic, shifts, branches and processor control",
            body: [
              "The logical group - AND, OR, XOR, NOT, TEST - works bitwise and clears CF/OF while setting SF/ZF/PF from the result. Their masking idioms are the heart of bit manipulation: AND AL, 0FH keeps the low nibble, OR AL, 80H sets the MSB, XOR AX, AX zeroes a register faster than MOV, TEST AL, 01H samples the LSB without altering it. Shifts and rotates move bits: SHL/SHR shift through carry (SHL AX, 1 doubles AX in one clock), SAR preserves the sign bit for signed division by two, and the rotates ROL/ROR/RCL/RCR recycle bits through the carry flag without losing them.",
              "A worked shift-add multiplication connects shifts to arithmetic: multiplying AX = 0006H by 5 equals (AX << 2) + AX - SHL AX, 1 twice then ADD - because 5x = 4x + x. Likewise division by 8 is SHR AX, 1 three times for unsigned, SAR for signed. These idioms matter because the 8086 cannot shift by an immediate greater than 1: large shifts must be loaded into CL first (SHL AX, CL), a quirk every exam question about shifts expects you to mention.",
              "Program transfer splits into unconditional and conditional movement. JMP forms: short (-128 to +127 bytes), near (16-bit offset within segment), far (16-bit segment + 16-bit offset). Conditional jumps test flags - six signed (JG/JGE/JL/JLE...), six unsigned (JA/JAE/JB/JBE...), plus JZ/JNZ/JS/JS/JO/JNO/JP/JNP/JC/JNC - all short-range. LOOP decrements CX and jumps while CX is nonzero; JCXZ jumps only when CX is zero, guarding zero-iteration loops. CALL/RET come near and far; INT n/INTO/IRET handle interrupts; processor-control instructions manipulate flags (STC/CLC/CMC, STD/CLD, STI/CLI) or stall the machine (HLT, WAIT, NOP, ESC, LOCK).",
              "In answers, pair every group with its flags: logical ops clear CF/OF and set SF/ZF/PF; shifts load CF with the expelled bit; conditional jumps change no flags. The flag-effect table plus the shift-by-CL quirk plus one numeric idiom (5x via two SHLs and an ADD) is a complete 14-mark response.",
            ],
            keyTerms: [
              { term: "TEST", definition: "AND without storing - samples bits, sets SF/ZF/PF, clears CF/OF." },
              { term: "SAR vs SHR", definition: "SAR copies the sign bit down (signed divide); SHR shifts in zeros (unsigned)." },
              { term: "ROL/ROR/RCL/RCR", definition: "Rotates within the operand (ROL/ROR) or through the carry flag (RCL/RCR)." },
              { term: "Short/near/far JMP", definition: "8-bit relative, 16-bit in-segment, segment+offset forms." },
              { term: "JCXZ", definition: "Jump if CX = 0 - the guard for zero-iteration loops." },
            ],
            diagram: {
              kind: "matrix",
              title: "Shifts and rotates at a glance",
              caption: "Rows separate shift from rotate; columns separate direction and carry involvement.",
              axes: { x: "What feeds the vacated bit", y: "Direction" },
              quadrants: [
                { label: "SHL / SAL - zeros in from right", note: "CF gets the expelled MSB; doubles value" },
                { label: "SHR - zeros in from left", note: "CF gets expelled LSB; halves unsigned" },
                { label: "ROL / ROR - bit recycles", note: "no bit lost, no carry entry" },
                { label: "RCL / RCR - through CF", note: "9-bit rotation with carry flag" },
              ],
            },
            bullets: [
              "AND/OR/XOR/TEST clear CF and OF; SF/ZF/PF reflect the result.",
              "Masking idioms: AND keeps, OR sets, XOR toggles/zeroes, TEST samples.",
              "SHL x1 doubles; SHR x1 halves unsigned; SAR halves signed preserving sign.",
              "Immediate shift counts are only 0 or 1 - larger counts go through CL.",
              "Rotates preserve all bits; RCL/RCR rotate through the carry flag (9 bits).",
              "Conditional jumps are short-range only; LOOP/JCXZ manage CX-driven loops.",
            ],
            callout: {
              type: "warning",
              title: "Shift-by-CL is the trap",
              body: "SHL AX, 3 does not assemble on the 8086 - immediate counts above 1 are illegal. Write MOV CL, 3 then SHL AX, CL. Answers that quote SHL AX, 3 lose the mark every time this quirk is probed.",
            },
            table: {
              caption: "Flag effects of the logic/shift family.",
              headers: ["Instruction", "CF", "OF", "SF/ZF/PF"],
              rows: [
                ["AND/OR/XOR/TEST", "cleared", "cleared", "from result"],
                ["NOT", "unchanged", "unchanged", "unchanged"],
                ["SHL/SHR/SAR", "last bit out", "set only on count 1 overflow", "from result"],
                ["ROL/ROR", "bit rotated into CF copy", "unchanged", "unchanged"],
                ["RCL/RCR", "9-bit rotation", "unchanged", "unchanged"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the logical, shift and rotate instructions with their flag effects. Show how shifts implement multiplication by 5 and division by 8, and state the shift-count limitation.",
                marks: 14,
                outline: [
                  "AND/OR/XOR/TEST semantics and masking idioms",
                  "Flag rule: logical clear CF/OF; SF/ZF/PF from result",
                  "SHL doubles, SHR halves unsigned, SAR halves signed",
                  "5x = (x << 2) + x via two SHL and one ADD",
                  "x/8 = three SHR (unsigned) or SAR (signed)",
                  "Immediate counts only 0/1; larger via MOV CL, n + SHL AX, CL",
                  "Rotates preserve bits; RCL/RCR rotate through carry",
                ],
              },
              {
                q: "Differentiate near and far CALL/RET, and explain what the stack holds in each case.",
                marks: 7,
                outline: [
                  "Near CALL pushes only IP (return offset); RET pops it",
                  "Far CALL pushes CS then IP; RETF pops both",
                  "Range: near within segment, far across segments",
                  "Stack discipline: SS:SP, one word per push",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Addressing modes of the 8086",
            body: [
              "Addressing modes define where an instruction's operands live, and the 8086 offers a graded ladder from cheapest to richest. Immediate: the operand is inside the instruction (MOV AX, 1234H). Register: operand in a register (MOV AX, BX) - fastest, 2 bytes. Direct: a 16-bit displacement names the location (MOV AX, [1234H]). Register indirect: BX, SI or DI hold the address (MOV AX, [BX]). Based: BX (or BP) plus displacement (MOV AX, [BX+10H]); BP defaults to the stack segment.",
              "Indexed mode adds SI or DI to a displacement (MOV AX, TABLE[SI]) - the natural array-access mode with TABLE as base and SI as index. Based-indexed combines the two (MOV AX, [BX+SI]) and based-indexed-with-displacement adds a constant (MOV AX, [BX+SI+10H]) - the two-dimensional array mode, where BX selects the row and SI the column. String instructions implicitly use DS:SI and ES:DI; I/O instructions use an 8-bit immediate port or DX; relative addressing (used by JMP/Jcc/LOOP) adds a signed displacement to IP.",
              "A worked 2-D access makes the richest mode tangible. For a 4x5 word array with base 1000H: element [2][3] sits at 1000H + (2 x 5 + 3) x 2 = 1000H + 1AH = 101AH. Code: MOV BX, 1000H; MOV SI, 3 x 2 = 6; MOV AX, [BX+SI+ (2x5x2)=14H+06H=1AH] - in one instruction MOV AX, [BX+SI+1AH] with SI = 0. The displacement carries the row offset, SI the column offset, BX the array base - exactly the decomposition based-indexed-with-displacement was designed for.",
              "In the exam, present the modes as a table with example, effective-address formula and typical use, then show the segment-default pairing (BX/SI/DI with DS; BP with SS). The default-segment column is the differentiator between a 7-mark and a 14-mark answer.",
            ],
            keyTerms: [
              { term: "Effective address", definition: "The 16-bit offset computed from base/index/displacement components." },
              { term: "Based mode", definition: "BX + displacement (DS) or BP + displacement (SS)." },
              { term: "Indexed mode", definition: "SI or DI + displacement - the array mode." },
              { term: "Based-indexed", definition: "BX + SI (or BP + DI) plus optional displacement - 2-D arrays and records." },
              { term: "Segment default", definition: "BX/SI/DI default to DS; BP defaults to SS; override prefix changes it." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The addressing-mode ladder",
              caption: "Top modes are cheapest and fastest; bottom modes carry structure - base, index, displacement.",
              tiers: [
                { label: "Register / immediate", note: "operand on hand; 2-3 bytes, no memory access" },
                { label: "Direct / register indirect", note: "one memory access; [1234H] or [BX]" },
                { label: "Based / indexed", note: "base + displacement or index + displacement" },
                { label: "Based-indexed + displacement", note: "BX + SI + disp: rows x columns in one instruction" },
              ],
            },
            bullets: [
              "Immediate and register modes need no memory cycle - always fastest.",
              "Direct [1234H] and indirect [BX] give single-level addressing.",
              "Based [BX+disp] and indexed TABLE[SI] carry one structural component each.",
              "Based-indexed-with-displacement serves 2-D arrays: base + row + column.",
              "BP-based addressing defaults to SS - the stack-frame access mode.",
              "Relative addressing (JMP/Jcc/LOOP) is IP-relative and position-independent.",
            ],
            callout: {
              type: "exam",
              title: "Which registers may base and index",
              body: "The legal pairings are fixed: base = BX or BP, index = SI or DI, so [BX+DI+disp] and [BP+SI] assemble but [AX+SI] does not. Quoting the legal-pair rule answers half the trick questions on this topic.",
            },
            table: {
              caption: "Modes, formulas and defaults.",
              headers: ["Mode", "Example", "Effective address", "Default segment"],
              rows: [
                ["Immediate", "MOV AX, 1234H", "operand in instruction", "-"],
                ["Register", "MOV AX, BX", "operand in register", "-"],
                ["Direct", "MOV AX, [1234H]", "1234H", "DS"],
                ["Register indirect", "MOV AX, [BX]", "BX", "DS"],
                ["Based", "MOV AX, [BX+10H]", "BX + 10H", "DS (SS if BP)"],
                ["Indexed", "MOV AX, TAB[SI]", "TAB + SI", "DS"],
                ["Based-indexed+disp", "MOV AX, [BX+SI+10H]", "BX + SI + 10H", "DS"],
              ],
            },
            examQuestions: [
              {
                q: "Explain all addressing modes of the 8086 with one example each and the effective-address formula. Show how based-indexed-with-displacement accesses a 2-D array element.",
                marks: 14,
                outline: [
                  "Immediate, register, direct, register indirect",
                  "Based (BX/BP + disp) and indexed (SI/DI + disp)",
                  "Based-indexed and based-indexed-with-displacement",
                  "String (DS:SI, ES:DI), I/O (imm8 or DX), relative (IP + disp)",
                  "Effective address = base + index + displacement components",
                  "Worked 2-D: element [2][3] of a 4x5 word array = base + 1AH",
                  "Default segments: BX/SI/DI -> DS, BP -> SS; override prefixes",
                ],
              },
              {
                q: "Which addressing modes touch memory zero times, once, and twice - and why does it matter for speed?",
                marks: 7,
                outline: [
                  "Zero: immediate, register - operand on hand",
                  "Once: direct, indirect, based, indexed - one EA computation + access",
                  "Twice: none for data operands, but instructions themselves are fetched",
                  "Fewer memory touches = fewer bus cycles = faster execution",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "The stack, procedures and parameter passing",
            body: [
              "The 8086 stack lives in the segment pointed to by SS and grows downward - PUSH decrements SP by 2 then stores the word; POP retrieves then increments SP. It backs every CALL: near CALL pushes IP (return offset), far CALL pushes CS then IP; RET pops accordingly, RETF pops both words. The stack also serves as scratch space (PUSH AX to save a register), as temporary storage in expression evaluation, and as the parameter channel for procedures.",
              "A procedure is delimited by name PROC ... name ENDP, invoked by CALL, terminated by RET. Parameters can travel in registers (fast, few items), in memory (global buffers), or on the stack (the professional pattern): the caller pushes arguments, the callee establishes a frame with PUSH BP / MOV BP, SP, reads parameters at [BP+4], [BP+6] (above the saved BP and return address), restores SP with POP BP / RET n. RET n additionally pops n bytes of parameters - the callee cleans the stack, a convention C still follows on x86.",
              "A worked frame trace shows the arithmetic. Caller at CS:0100H executes CALL FAR PROC with three word parameters pushed. After CALL: stack holds [SP]=IP, [SP+2]=CS; after PUSH BP/MOV BP, SP: [BP]=old BP, [BP+2]=IP, [BP+4]=CS (far return), so the first parameter sits at [BP+6]. Accessing parameters purely through BP makes the frame independent of later pushes - the property that makes recursion possible.",
              "In the exam, draw the stack diagram after CALL, after PUSH BP, and after local-variable allocation (SUB SP, 4), labelling each cell with SS-relative addresses and content. Then state the two stack rules that trip everyone: SP always points to the last pushed word (not the next free slot), and PUSH/POP must pair symmetrically or the return address corrupts.",
            ],
            keyTerms: [
              { term: "SS:SP", definition: "Stack segment and pointer; grows downward, word-sized operations only." },
              { term: "Near/far CALL", definition: "Near pushes IP only; far pushes CS:IP; RET/RETF pop correspondingly." },
              { term: "Stack frame", definition: "PUSH BP / MOV BP, SP establishes a stable base for parameters and locals." },
              { term: "RET n", definition: "Return that also pops n bytes of caller-pushed parameters." },
            ],
            diagram: {
              kind: "flow",
              title: "Building a stack frame",
              caption: "Push parameters, CALL, save BP, claim locals - the four moves of every procedure prologue.",
              steps: [
                { label: "Caller pushes args", note: "right to left by convention" },
                { label: "CALL proc", note: "IP (and CS) pushed" },
                { label: "PUSH BP / MOV BP, SP", note: "frame base established" },
                { label: "SUB SP, n", note: "locals reserved" },
                { label: "...body uses [BP+...]...", note: "params above, locals below" },
                { label: "POP BP / RET n", note: "frame and args cleaned" },
              ],
            },
            bullets: [
              "Stack grows downward: PUSH pre-decrements SP, POP post-increments it.",
              "Near CALL saves IP; far CALL saves CS:IP - RET must match.",
              "Procedures: name PROC ... ENDP, invoked by CALL, exited by RET.",
              "Frame discipline: PUSH BP, MOV BP, SP; parameters at [BP+4] (near) or [BP+6] (far).",
              "RET n pops the parameters so caller and callee stay balanced.",
              "Unbalanced push/pop corrupts the return address - the classic crash cause.",
            ],
            callout: {
              type: "warning",
              title: "SP points at data, not at free space",
              body: "After PUSH AX, SP names the cell holding AX - not the next empty slot. Diagrams that draw SP below the top word lose the mark; every push/pop trace starts from that convention.",
            },
            codeExample: {
              language: "assembly",
              caption: "Procedure with stack parameters",
              code: `      PUSH WORD PTR 5    ; arg2
      PUSH WORD PTR 3    ; arg1
      CALL NEAR PTR SUM  ; sum = 3 + 5 -> AX
      ...
SUM   PROC NEAR
      PUSH BP
      MOV  BP, SP
      MOV  AX, [BP+4]    ; arg1 (saved IP at [BP+2], old BP at [BP])
      ADD  AX, [BP+6]    ; arg2
      POP  BP
      RET  4             ; return + pop 4 bytes of args
SUM   ENDP`,
            },
            examQuestions: [
              {
                q: "Explain the 8086 stack operations, near and far CALL/RET, and the stack-frame method of passing parameters with a labelled diagram of the frame.",
                marks: 14,
                outline: [
                  "SS:SP downward growth; PUSH/POP word discipline",
                  "Near CALL pushes IP; far pushes CS then IP",
                  "PROC/ENDP structure and RET n cleanup",
                  "Frame: PUSH BP, MOV BP, SP; [BP+4]/[BP+6] parameter slots",
                  "Locals via SUB SP, n below BP",
                  "Worked trace with addresses after CALL and PUSH BP",
                  "Balance rule: mismatched push/pop corrupts return",
                ],
              },
              {
                q: "Why is BP used for stack frames instead of BX or direct SP addressing?",
                marks: 7,
                outline: [
                  "BP defaults to SS - addressing the stack segment without prefixes",
                  "BP stays fixed while SP moves with later pushes",
                  "Stable frame offsets make parameters and locals position-stable (recursion)",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Assembly language programming: directives and structure",
            body: [
              "An 8086 assembly program is a set of segments plus directives that the assembler interprets. SEGMENT/ENDS declare logical segments; ASSUME ties them to CS/DS/SS/ES so the assembler knows which segment register reaches which segment; DB/DW/DD reserve bytes, words and doublewords; EQU defines constants; ORG sets the offset origin; END marks the file's end and (with a label) its entry point. The skeleton: declare a stack segment, a data segment with variables, a code segment starting with MOV AX, DATA / MOV DS, AX to load DS (the loader only initializes CS:IP automatically).",
              "Directives are not instructions - they produce no machine code; they shape it. The distinction is exam bait: MOV AX, 4C00H is code; DATA SEGMENT is a directive. Typical data section: NUM1 DW 1234H reserves a word; ARRAY DB 10 DUP(0) reserves ten bytes; MSG DB 'HELLO$' stores a DOS-printable string with the $ terminator; TABLE DW 1000H, 2000H, 3000H lays out word constants little-endian (low byte first in memory).",
              "A complete worked program ties the pieces together - adding two words and exiting through DOS: initialize DS, load both operands, ADD, store the sum, then INT 21H with AH = 4CH. Every exam program follows the same six-step skeleton: stack segment, data segment, ASSUME, MOV AX, DATA/MOV DS, AX, body, INT 21H exit. Deviating from the skeleton (forgetting to load DS is the classic error) costs real marks because the code then reads the wrong segment.",
              "In the exam, write programs in this order: skeleton first, data declarations second, body third, exit last - and comment every line with its register effect. Examiners award structure marks; an uncommented block of correct code still loses presentation marks.",
            ],
            keyTerms: [
              { term: "SEGMENT/ENDS", definition: "Declares a logical segment of code, data or stack." },
              { term: "ASSUME", definition: "Tells the assembler which segment register addresses each segment." },
              { term: "DB/DW/DD", definition: "Define byte, word (2 B), doubleword (4 B) data or reservations." },
              { term: "ORG", definition: "Sets the offset at which subsequent code/data is placed." },
              { term: "DUP", definition: "Repetition operator: 10 DUP(0) reserves ten zero bytes." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Assembly program skeleton",
              caption: "Every exam program is this pipeline with a different body.",
              stages: [
                { label: "Stack segment", note: "100h words reserved" },
                { label: "Data segment", note: "DB/DW declarations" },
                { label: "ASSUME", note: "bind segments to registers" },
                { label: "Init DS", note: "MOV AX, DATA / MOV DS, AX" },
                { label: "Body", note: "the actual algorithm" },
                { label: "Exit", note: "MOV AH, 4CH / INT 21H" },
              ],
            },
            bullets: [
              "Directives shape code; instructions execute - SEGMENT, ASSUME, DB/DW, EQU, ORG, END are directives.",
              "DS is not auto-initialized: MOV AX, DATA / MOV DS, AX is mandatory.",
              "DUP reserves and optionally fills repeated storage.",
              "Words store little-endian: DW 1234H lays out 34H then 12H.",
              "DOS exit: MOV AH, 4CH then INT 21H.",
              "Comment every line with register effects - structure marks are real marks.",
            ],
            callout: {
              type: "exam",
              title: "The forgotten DS load",
              body: "If a program reads garbage from its variables, the missing MOV AX, DATA / MOV DS, AX prologue is the diagnosis. State this explicitly when asked to 'explain the role of ASSUME and segment initialization' - it is the most probed fault in Unit II.",
            },
            codeExample: {
              language: "assembly",
              caption: "SUM.ASM - add two words, complete skeleton",
              code: `DATA  SEGMENT
NUM1  DW  1234H
NUM2  DW  0ABCDH
SUM   DW  ?
DATA  ENDS
STACK SEGMENT STACK
      DW  100H DUP(?)
STACK ENDS
CODE  SEGMENT
      ASSUME CS:CODE, DS:DATA, SS:STACK
START: MOV AX, DATA     ; load DS - loader sets only CS:IP
       MOV DS, AX
       MOV AX, NUM1     ; AX = 1234H
       ADD AX, NUM2     ; AX = 1234H + ABCDH = BE01H
       MOV SUM, AX      ; store result
       MOV AH, 4CH      ; DOS exit
       INT 21H
CODE  ENDS
       END START`,
            },
            examQuestions: [
              {
                q: "Write an 8086 assembly program to add two 16-bit numbers stored in memory and store the result, explaining every directive used.",
                marks: 14,
                outline: [
                  "DATA segment with NUM1, NUM2, SUM via DW",
                  "STACK segment with DUP reservation",
                  "ASSUME binds CS/DS/SS",
                  "MOV AX, DATA / MOV DS, AX initializes DS",
                  "MOV AX, NUM1; ADD AX, NUM2; MOV SUM, AX",
                  "Exit via MOV AH, 4CH / INT 21H",
                  "Directive roles: SEGMENT/ENDS, DW, DUP, ASSUME, END START",
                ],
              },
              {
                q: "Differentiate instructions from assembler directives with four examples of each.",
                marks: 7,
                outline: [
                  "Instructions execute at runtime: MOV, ADD, JMP, INT",
                  "Directives act at assembly time: SEGMENT, ASSUME, DB/DW, EQU, ORG, END",
                  "Directives generate no machine code",
                  "Both appear in the same source file but in different phases",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Worked programs: block moves, arrays, delays",
            body: [
              "Three program patterns cover most exam requests. Pattern 1 - block transfer: load SI with source, DI with destination, CX with count, clear DF, then REP MOVSB moves CX bytes in one instruction; the hardware version of a for-loop. Pattern 2 - largest/smallest in an array: load the first element as the current best, walk the rest with CMP and a conditional jump, updating the best in registers; the loop body is two instructions (CMP, JLE/JGE). Pattern 3 - software delay: load CX with a count and execute LOOP $ (jump to self) - each LOOP iteration costs about 17 clocks on an 8086 at 5 MHz, roughly 3.4 microsecond per iteration, so CX = 10000 gives about 34 ms.",
              "A fully worked 'largest of N words' program shows the pattern's shape: set up DS, point SI at the array, load CX with N-1, take the first word into AX as the incumbent, then LOOP: CMP AX, [SI]; JGE SKIP; MOV AX, [SI]; SKIP: ADD SI, 2; LOOP back. On exit AX holds the maximum. The signed/unsigned choice matters - JGE for signed data, JAE for unsigned - and misusing one for the other is the classic logic bug this question exists to catch.",
              "Delay loops chain for longer waits: an outer loop repeats an inner LOOP-based delay, multiplying the time - inner CX = 0xFFFF (about 223 ms at 5 MHz for a nested double loop) repeated 10 times in BX gives about 2.2 s. The exam favourite asks for the arithmetic: 17 clocks per LOOP iteration, 200 ns per clock, so one inner pass of 65535 iterations is 65535 x 17 x 200 ns = about 223 ms. Stating the clocks-per-iteration assumption explicitly is what the mark scheme rewards.",
              "Write each pattern as skeleton (segments + DS init), data, body, exit - and annotate the loop's register invariant (what SI/CX/AX mean each iteration). The invariant sentence - 'AX holds the best so far, CX the remaining count, SI the next element' - converts code into an explanation and earns the reasoning marks.",
            ],
            keyTerms: [
              { term: "REP MOVSB", definition: "Hardware block copy: CX bytes from DS:SI to ES:DI, direction by DF." },
              { term: "Loop invariant", definition: "The register meanings that hold every iteration - the explanation skeleton for any loop." },
              { term: "Software delay", definition: "LOOP $ self-loop; about 17 clocks (3.4 microsecond at 5 MHz) per iteration." },
              { term: "JGE vs JAE", definition: "Signed vs unsigned comparison branch - the array-pattern fork." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Three program patterns, smallest to largest",
              caption: "Block move, array scan, delay chain - compose these three and most Unit II programs assemble themselves.",
              tiers: [
                { label: "Delay chain", note: "nested LOOPs; 17 clocks/iteration arithmetic" },
                { label: "Array scan", note: "CMP + Jcc update; signed vs unsigned fork" },
                { label: "Block move", note: "SI/DI/CX setup + REP MOVSB" },
                { label: "Common skeleton", note: "segments + DS init + body + INT 21H exit" },
              ],
            },
            bullets: [
              "Block move: SI source, DI destination, CX count, CLD, REP MOVSB.",
              "Array scan: incumbent in AX, CMP then JGE (signed) or JAE (unsigned).",
              "Delay: LOOP $ costs ~17 clocks per pass = 3.4 microsecond at 5 MHz.",
              "Nested loops multiply delays: 65535-pass inner loop ~ 223 ms at 5 MHz.",
              "State the loop invariant - AX best-so-far, CX remaining, SI next - in answers.",
              "Signed data uses JG/JL family; unsigned uses JA/JB family.",
            ],
            callout: {
              type: "tip",
              title: "Quote the 17 clocks",
              body: "The LOOP instruction takes about 17 clocks per iteration on an 8086 (branch overhead included). Any delay-arithmetic answer that starts from this constant and multiplies by 200 ns per clock lands exactly where the mark scheme wants.",
            },
            codeExample: {
              language: "assembly",
              caption: "Largest word in an array, complete body",
              code: `    LEA  SI, ARRAY      ; point at first word
    MOV  CX, N-1        ; remaining comparisons
    MOV  AX, [SI]       ; incumbent = first element
NEXT: ADD  SI, 2         ; advance to next word
    CMP  AX, [SI]
    JGE  SKIP           ; signed: keep incumbent
    MOV  AX, [SI]       ; new maximum
SKIP: LOOP NEXT         ; CX--; repeat while CX != 0
    MOV  MAX, AX        ; store result`,
            },
            examQuestions: [
              {
                q: "Write an 8086 assembly program to find the largest number in an array of signed words, and explain the loop invariant you rely on.",
                marks: 14,
                outline: [
                  "Skeleton: segments, DS initialization",
                  "LEA SI, ARRAY; MOV CX, N-1; MOV AX, [SI]",
                  "Loop: ADD SI, 2; CMP AX, [SI]; JGE skip",
                  "On smaller incumbent: MOV AX, [SI]",
                  "LOOP NEXT until CX = 0",
                  "Invariant: AX = max so far, CX = remaining, SI = next element",
                  "Exit storing MAX; note JGE for signed data",
                ],
              },
              {
                q: "Estimate the delay produced by a nested loop with inner count FFFFH and outer count 0AH on a 5 MHz 8086.",
                marks: 7,
                outline: [
                  "LOOP iteration ~ 17 clocks; clock 200 ns",
                  "One inner pass: 65535 x 17 x 200 ns ~ 223 ms",
                  "Outer repeats 10 times: ~ 2.23 s",
                  "State the per-iteration assumption explicitly",
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
      title: "Peripheral Interfacing",
      summary:
        "Unit III wires the processor to the world: the 8155 companion chip, the 8255 PPI in all three modes, keyboard and display scanning, ADC and DAC conversion with programs, and memory interfacing with address decoding and wait states.",
      chapter: {
        number: "03",
        title: "Interfacing the Real World",
        intro:
          "Unit III covers the 8155 (RAM, I/O, timer), the 8255 PPI and its modes, matrix keyboard interfacing with debouncing, LED and seven-segment displays, ADC0808 and DAC0808 interfacing with conversion programs, and memory interfacing with decoding and READY-based wait states.",
        inOneBreath:
          "The 8155 bundles 256 bytes of RAM, 22 I/O lines and a timer onto one multiplexed-bus chip; the 8255 gives 24 lines in three ports with modes 0/1/2 selected by one control word. Keyboards scan a matrix and debounce for 10-20 ms; seven-segment displays decode BCD into segment codes; an ADC0808 conversation is select-channel, pulse SOC, wait EOC, assert OE, read; a DAC0808 turns a register value into current through an R-2R ladder. Memory attaches by decoding high address bits (a 74LS138) and stretching cycles with READY when access time exceeds the bus budget.",
        sections: [
          {
            number: "3.1",
            title: "The 8155: RAM, I/O and timer companion",
            body: [
              "The 8155 is a single-chip companion designed for minimum-component 8085/8086 systems: 256 bytes of static RAM, two 8-bit I/O ports (PA, PB), one 6-bit port (PC, also usable as control/handshake lines for PA/PB), and a 14-bit binary down-counter/timer - all behind a multiplexed AD0-AD7 bus that matches the processor's own. One ALE pulse separates address from data exactly as on the 8086, so the chip hangs directly off the multiplexed bus with no demultiplexing logic.",
              "Internally, a command/status register (at I/O address 00H) steers everything: each port's direction, the timer's enable, and interrupt enables; reading the same address returns status (port interrupt flags, timer status). Ports PA, PB, PC live at addresses 01H-03H; the timer counts from two registers (04H low, 05H high with mode bits). The IO/M# pin selects whether an access targets the 256-byte RAM (memory space) or the register file (I/O space), and CE# gates the whole chip.",
              "A worked setup: writing 07H to the command register (bits PAE = 1, PBE = 1, PCE = 1) makes all three ports output. Starting the timer with 0C0H in the high register sets the mode (square wave) with the top two bits, and loading 1000 decimal across the two registers with a 3 MHz clock input gives a 3 MHz/1000 = 3 kHz square wave at TIMER OUT - the same divide-by-N arithmetic the 8253 uses, in miniature.",
              "In the exam, present the 8155 as 'a minimum system in one chip': RAM size, port count and widths, timer width, multiplexed-bus advantage. The one-chip argument is why it appears alongside the 8085/8086 in small controllers and why the question 'compare 8155 with 8255' is really 'bundle versus dedicated port chip'.",
            ],
            keyTerms: [
              { term: "8155", definition: "Companion chip: 256 B RAM, PA/PB 8-bit + PC 6-bit ports, 14-bit timer, multiplexed bus." },
              { term: "IO/M#", definition: "8155 pin selecting register file (I/O) versus RAM (memory) access." },
              { term: "Command/status register", definition: "Address 00H: write configures ports and timer; read returns status flags." },
              { term: "Timer OUT", definition: "The 14-bit down-counter's output pin - square wave or pulse per mode bits." },
            ],
            diagram: {
              kind: "compare",
              title: "8155 bundle vs 8255 dedicated port chip",
              caption: "One chip that is half a computer, versus one chip that is only ports.",
              left: {
                heading: "8155",
                items: [
                  "256 bytes RAM on-chip",
                  "PA (8) + PB (8) + PC (6) I/O lines",
                  "14-bit timer included",
                  "Multiplexed AD0-AD7 bus - direct fit",
                ],
              },
              right: {
                heading: "8255 PPI",
                items: [
                  "No RAM, no timer",
                  "24 I/O lines in PA/PB/PC",
                  "Modes 0/1/2 handshake options",
                  "Demultiplexed address bus, one control word",
                ],
              },
            },
            bullets: [
              "8155 = 256 B SRAM + 22 I/O lines + 14-bit timer on one multiplexed-bus chip.",
              "Ports: PA (01H), PB (02H), PC (03H); command/status at 00H.",
              "IO/M# splits RAM access (memory space) from register access (I/O space).",
              "Timer: two registers, mode bits in the high byte; square-wave or pulse output.",
              "Worked: 3 MHz clock, count 1000 -> 3 kHz TIMER OUT.",
              "Ideal minimum-system partner for 8085/8086 - one chip, no glue logic.",
            ],
            callout: {
              type: "tip",
              title: "One address, two meanings",
              body: "The 8155's address 00H is the command register on writes and the status register on reads - the same trick the 8259A and 8251 use. Naming this write/read duality shows real device familiarity in any interfacing answer.",
            },
            table: {
              caption: "8155 I/O register map.",
              headers: ["I/O address", "Register", "Role"],
              rows: [
                ["00H", "Command/Status", "write: config; read: status flags"],
                ["01H", "Port A", "8-bit I/O"],
                ["02H", "Port B", "8-bit I/O"],
                ["03H", "Port C", "6-bit I/O or handshake/control"],
                ["04H", "Timer low", "low 8 bits of count"],
                ["05H", "Timer high", "high 6 bits + 2 mode bits"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the functional blocks of the 8155 and show how its timer divides a 3 MHz clock to produce a 3 kHz square wave.",
                marks: 7,
                outline: [
                  "Blocks: 256 B RAM, PA/PB/PC ports, 14-bit timer, command/status",
                  "Multiplexed AD0-AD7 + ALE direct-fit argument",
                  "IO/M# selects RAM vs registers",
                  "Load count 1000 with square-wave mode bits",
                  "3 MHz / 1000 = 3 kHz at TIMER OUT",
                  "Command word 07H makes all ports output",
                ],
              },
              {
                q: "Compare the 8155 and 8255 as interfacing companions.",
                marks: 7,
                outline: [
                  "8155: RAM + ports + timer bundled; multiplexed bus",
                  "8255: ports only; richer modes 0/1/2",
                  "8155 for minimum-component controllers; 8255 for general-purpose port expansion",
                  "Both programmed through a control register",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "The 8255 PPI: ports, modes and control word",
            body: [
              "The 8255 Programmable Peripheral Interface provides 24 I/O lines organized as Port A (PA0-PA7), Port B (PB0-PB7) and Port C (PC0-PC7), grouped into Group A (PA + PC upper) and Group B (PB + PC lower). Its three operating modes are set by one 8-bit control word: Mode 0 is simple unconditional I/O (each group independently input or output), Mode 1 is strobed I/O with handshaking (interrupt-driven transfers using PC lines as STB#, IBF, OBF#, INTR), and Mode 2 is bidirectional bus I/O on Port A only, with five PC lines handshaking both directions.",
              "The control word's bit 7 distinguishes the two command meanings: bit 7 = 1 selects I/O mode configuration - D6-D5 mode for group A, D4 PA direction, D3 PC-upper direction, D2 group-B mode, D1 PB direction, D0 PC-lower direction; bit 7 = 0 selects Bit Set/Reset for individual PC lines - D3-D1 pick the pin, D0 its new level, so a program can strobe handshake lines one bit at a time. Port addresses follow A1-A0: 00 = PA, 01 = PB, 10 = PC, 11 = control register.",
              "A worked initialization: control word 90H = 1001 0000 sets group A mode 0 with PA input (D4 = 1), PC-upper output, group B mode 0 with PB output, PC-lower output. Reading switch settings from PA and writing them to PB is then MOV DX, PA; IN AL, DX; MOV DX, PB; OUT DX, AL - two-port copy in four instructions. For Mode 1 input on PA: STB# latches data into the input latch, IBF rises, INTR requests the CPU, the CPU reads PA and IBF drops - the handshake that converts a sporadic peripheral into reliable programmed I/O.",
              "In the exam, always (a) draw the three ports, (b) decode a given control word bit by bit, (c) show the handshake signal roles in Mode 1/2. Decoding 90H bit-by-bit - writing each bit's meaning in a line - is the move that converts a bare answer into a mark-earning one.",
            ],
            keyTerms: [
              { term: "Mode 0", definition: "Simple unconditional I/O; each group independently input or output." },
              { term: "Mode 1", definition: "Strobed I/O with handshake (STB#, IBF, OBF#, INTR) on ports A and B via PC lines." },
              { term: "Mode 2", definition: "Bidirectional I/O on Port A with five PC handshake lines." },
              { term: "BSR mode", definition: "Control word bit 7 = 0: set/reset individual Port C bits." },
              { term: "Control word", definition: "8-bit configuration written to A1A0 = 11; bit 7 chooses mode-set vs BSR." },
            ],
            diagram: {
              kind: "matrix",
              title: "The 8255 mode map",
              caption: "Group A and Group B choose modes independently; Mode 2 exists only for Group A.",
              axes: { x: "Group A", y: "Group B" },
              quadrants: [
                { label: "A mode 0 + B mode 0", note: "simplest - all 24 lines plain I/O" },
                { label: "A mode 2 + B mode 0/1", note: "bidirectional A; B stays simple/strobed" },
                { label: "A mode 0/1 + B mode 0", note: "A plain or strobed; B plain" },
                { label: "A mode 1 + B mode 1", note: "both ports handshake; C mostly consumed" },
              ],
            },
            bullets: [
              "24 lines: PA, PB, PC; groups A (PA + PC-high) and B (PB + PC-low).",
              "Mode 0: plain I/O; Mode 1: strobed with handshake; Mode 2: bidirectional PA.",
              "Control word bit 7 = 1 configures modes; bit 7 = 0 sets/resets PC bits.",
              "90H = group A mode 0 PA input, group B mode 0 outputs.",
              "Addresses: A1A0 = 00 PA, 01 PB, 10 PC, 11 control.",
              "Mode 1 input handshake: STB# latches, IBF acknowledges, INTR requests CPU.",
            ],
            callout: {
              type: "exam",
              title: "Decode the control word aloud",
              body: "Given 90H, write: 1 (mode set), 00 (group A mode 0), 1 (PA input), 0 (PC-high output), 0 (group B mode 0), 0 (PB output), 0 (PC-low output). Seven short lines is a full 7-mark answer - and the same decoder works for any control word the paper invents.",
            },
            codeExample: {
              language: "assembly",
              caption: "8255: initialize 90H, copy PA switches to PB",
              code: `      MOV  DX, 0FFC6H    ; control register (A1A0 = 11)
      MOV  AL, 90H       ; group A mode0 PA in, group B mode0 out
      OUT  DX, AL
      MOV  DX, 0FFC0H    ; Port A
      IN   AL, DX        ; read switches
      MOV  DX, 0FFC2H    ; Port B
      OUT  DX, AL        ; drive LEDs`,
            },
            examQuestions: [
              {
                q: "Explain the operating modes of the 8255 PPI and decode the control word 90H bit by bit. How does Mode 1 input handshaking work?",
                marks: 14,
                outline: [
                  "24 lines in PA/PB/PC; groups A and B",
                  "Mode 0: simple I/O; Mode 1: strobed handshake; Mode 2: bidirectional PA",
                  "Control word bit 7 = 1 mode-set; = 0 BSR",
                  "Decode 90H: group A mode 0, PA input, PC-high out, group B mode 0, PB out, PC-low out",
                  "Mode 1 input: STB# latches data, IBF set, INTR raised",
                  "CPU reads PA; IBF clears, ready for next byte",
                  "Port addresses from A1A0 = 00/01/10/11",
                ],
              },
              {
                q: "Write the BSR-mode control words to pulse PC3 high then low.",
                marks: 7,
                outline: [
                  "BSR word: bit 7 = 0",
                  "D3-D1 = 011 selects PC3; D0 = 1 sets",
                  "Set word = 0000 0111 = 07H",
                  "Reset word = 0000 0110 = 06H",
                  "Sequence OUT 07H then OUT 06H to the control port",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Keyboard interfacing: scanning and debouncing",
            body: [
              "A matrix keyboard arranges N x M keys at the crossings of row and column lines - a 4x4 keypad uses 8 port lines instead of 16, the whole point of matrixing. Rows are driven as outputs, columns read as inputs (with pull-ups). Scanning works key-by-key: drive one row low, read the columns; a zero in any column means the key at that row-column crossing is pressed. Full-keyboard scan walks all rows in sequence; the two-chip 8279 (not in this unit) does it in hardware, but the syllabus wants the software loop.",
              "Debouncing is the electrical honesty step: mechanical contacts bounce for 5-20 ms, producing multiple edges per press. The software cure is confirm-and-wait: detect a low column, delay 10-20 ms, re-read; if still low, accept the key, wait for release (all columns high again), debounce the release the same way, then return the key code. Without debounce, one press counts as five - the bug every marker looks for in a program answer.",
              "A worked scan loop for a 4x4 keypad on an 8255: PA outputs rows, PB reads columns. Load 0FEH (row 0 low), OUT PA; IN PB; test each column bit; if PB0 = 0 the key code is row x 4 + 0 = 0; rotate the row mask and increment the row counter until a hit or four rows done. Key code = row x 4 + column - arithmetic the display routine consumes directly as a table index.",
              "In the exam, draw the 4x4 matrix with one diode or direct connection per crossing, then list the algorithm as numbered steps ending with the key-code formula and the debounce delays. Programs should show the row-mask rotation (ROL) and the release-wait loop; those two details separate a working design from a sketch.",
            ],
            keyTerms: [
              { term: "Matrix keyboard", definition: "Keys at row/column crossings; N+M lines serve N x M keys." },
              { term: "Key debouncing", definition: "10-20 ms confirm-and-recheck that collapses contact bounce into one event." },
              { term: "Key code", definition: "row x columns + column - the scan loop's returned index." },
              { term: "Release wait", definition: "Loop until all columns high again, debounced, so one press yields one code." },
            ],
            diagram: {
              kind: "cycle",
              title: "One key press, five steps",
              caption: "Detect, debounce, identify, wait for release, return the code - the loop that makes keys honest.",
              steps: [
                { label: "Scan row low", note: "drive one row, read columns" },
                { label: "Detect zero", note: "a low column marks the press" },
                { label: "Debounce", note: "10-20 ms, re-read to confirm" },
                { label: "Compute code", note: "row x 4 + column" },
                { label: "Wait release + debounce", note: "one press = one code" },
              ],
            },
            bullets: [
              "Matrix wiring: 4x4 keypad needs 8 lines, not 16.",
              "Rows driven low one at a time; columns read through pull-ups.",
              "Contact bounce lasts 5-20 ms - debounce by delayed re-read.",
              "Key code = row x 4 + column for a 4x4 pad.",
              "Wait for release before returning, else key-repeat floods the buffer.",
              "8255 mapping: PA rows out, PB columns in (mode 0).",
            ],
            callout: {
              type: "warning",
              title: "Debounce both edges",
              body: "Press and release both bounce. Programs that debounce only the press return phantom keys on release - the re-check after the release wait is the half most answers forget.",
            },
            codeExample: {
              language: "assembly",
              caption: "4x4 keyboard scan over 8255 (PA rows, PB columns)",
              code: `      MOV  AL, 90H      ; PA out?? -> use 80H: PA out, PB in
      MOV  AL, 80H
      OUT  CTRL, AL     ; PA output, PB input (mode 0)
      MOV  BL, 0FEH     ; row mask, row 0 low
      MOV  CH, 0        ; row counter
ROW:  MOV  AL, BL
      OUT  PORTA, AL    ; drive row low
      IN   AL, PORTB    ; read columns
      CMP  AL, 0FFH
      JNE  HIT          ; some column low
      ROL  BL, 1        ; next row
      INC  CH
      CMP  CH, 4
      JB   ROW
      JMP  DONE
HIT:  ; find low column, code = CH*4 + column
      ; debounce 20 ms, wait release, debounce again`,
            },
            examQuestions: [
              {
                q: "Explain the interfacing of a 4x4 matrix keyboard to the 8086 via the 8255, including scanning, debouncing and key-code computation, with the program flow.",
                marks: 14,
                outline: [
                  "Matrix rationale: 8 lines for 16 keys",
                  "PA rows output, PB columns input with pull-ups",
                  "Scan: drive one row low, read columns, test bits",
                  "Debounce: 10-20 ms delay + re-read on both press and release",
                  "Key code = row x 4 + column",
                  "Release wait prevents key-repeat",
                  "Program: row mask ROL, row counter, branch on column zero",
                ],
              },
              {
                q: "Why does a matrix keyboard need pull-up resistors on its column lines?",
                marks: 7,
                outline: [
                  "Open column floats when no key pressed - reads unpredictable",
                  "Pull-up guarantees a defined high for 'no press'",
                  "Pressed key pulls the column low through the closed contact",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "LED and seven-segment display interfacing",
            body: [
              "An LED needs a defined current - typically 10-20 mA - set by a series resistor: R = (Vsupply - Vled)/I, so with 5 V and a 1.8 V red LED at 15 mA, R = (5 - 1.8)/0.015 = about 220 ohm. Processors drive LEDs more comfortably by sinking current (output low lights the LED, since LS-TTL and MOS outputs sink more than they source), which inverts the logic: 0 = on. Multiplexing saves pins: eight digits share one segment bus, and only the active digit's common line is enabled at any instant - each digit refreshes at 1/8 duty, bright enough above 50 Hz full-frame refresh.",
              "A seven-segment display packs LEDs 'a' through 'g' (plus decimal point) to render digits 0-9. Common-cathode types light segments with a high; common-anode with a low - the code table is bitwise-complemented between the two. The standard BCD-to-segment codes for common cathode run 3FH, 06H, 5BH, 4FH, 66H, 6DH, 7DH, 07H, 7FH, 6FH for 0-9; a program indexes this table with the digit value and outputs the byte to the segment port.",
              "A worked multiplexed display: two digits on PA (segments) and two PC bits (digit commons, via transistors). The loop: output table[0] to PA, enable digit 0 for 1 ms, disable; output table[1], enable digit 1 for 1 ms; repeat forever - a 2 ms frame (500 Hz) with each digit at 50% duty. Between digit switches, blank the segments (output 00H) to prevent ghosting - the one-line fix for the smeared display every practical report mentions.",
              "In the exam: compute the series resistor with the numbers, give the segment-code table or the first four entries, and show the multiplexing loop with its refresh arithmetic. Ghosting - and its blanking fix - is the detail that signals hands-on understanding.",
            ],
            keyTerms: [
              { term: "Series resistor", definition: "R = (Vcc - Vf)/Iled; sets LED current, e.g. 220 ohm for 5 V/15 mA." },
              { term: "Sink drive", definition: "Processor output pulls low to light the LED - logic inverted, current capability higher." },
              { term: "Common anode/cathode", definition: "Segments share one anode (light with low) or cathode (light with high)." },
              { term: "Multiplexing", definition: "Digits share one segment bus; commons time-share with 1-2 ms per digit." },
              { term: "Ghosting", definition: "Segment smear between digit switches - cured by blanking before switching." },
            ],
            diagram: {
              kind: "flow",
              title: "Multiplexed two-digit refresh loop",
              caption: "Segments shared, commons time-shared - blank between digits to kill ghosting.",
              steps: [
                { label: "Blank segments", note: "PA = 00H" },
                { label: "Digit 0 pattern", note: "PA = table[d0]" },
                { label: "Enable digit 0", note: "PC0 low 1 ms" },
                { label: "Digit 1 pattern", note: "PA = table[d1]" },
                { label: "Enable digit 1", note: "PC1 low 1 ms" },
                { label: "Repeat", note: "500 Hz frame rate" },
              ],
            },
            bullets: [
              "LED current 10-20 mA; R = (5 - 1.8)/0.015 ~ 220 ohm.",
              "Sink drive preferred: output low lights the LED, logic inverted.",
              "Seven segments a-g; common-cathode codes 3FH..6FH for digits 0-9.",
              "Common anode = bitwise complement of the cathode table.",
              "Multiplexed N digits: one segment port + N commons; 1-2 ms per digit.",
              "Blank segments between digit switches to prevent ghosting.",
            ],
            callout: {
              type: "tip",
              title: "The complement trick",
              body: "Rather than memorizing two segment tables, memorize the common-cathode one and state 'common anode = NOT code'. Writing 3FH for 0 then C0H for the anode version demonstrates the electrical understanding the mark scheme asks for.",
            },
            table: {
              caption: "BCD to seven-segment codes (common cathode).",
              headers: ["Digit", "Segments lit", "Code (hex)"],
              rows: [
                ["0", "a b c d e f", "3FH"],
                ["1", "b c", "06H"],
                ["2", "a b d e g", "5BH"],
                ["3", "a b c d g", "4FH"],
                ["8", "all", "7FH"],
                ["9", "a b c d f g", "6FH"],
              ],
            },
            examQuestions: [
              {
                q: "Explain LED interfacing with the series-resistor calculation and describe a multiplexed two-digit seven-segment display driven from an 8255, including the ghosting problem.",
                marks: 14,
                outline: [
                  "R = (Vcc - Vf)/I; worked 220 ohm at 15 mA",
                  "Sink vs source drive; inverted logic when sinking",
                  "Seven segments a-g; common cathode vs anode complement",
                  "BCD codes 3FH, 06H, 5BH, 4FH...",
                  "Multiplexing: shared segments, time-shared commons, 1-2 ms per digit",
                  "Frame rate > 50 Hz to avoid flicker",
                  "Ghosting fixed by blanking PA before each digit switch",
                ],
              },
              {
                q: "Why do multiplexed displays appear dimmer than statically driven ones, and what limits the minimum per-digit on-time?",
                marks: 7,
                outline: [
                  "Duty cycle 1/N - average current per digit drops by N",
                  "Peak current can be raised within device limits to compensate",
                  "Below ~1 ms per digit, refresh overhead and blanking eat the frame",
                  "Frame rate must stay above ~50 Hz to avoid visible flicker",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "ADC interfacing: the SAR conversion dance",
            body: [
              "An analogue-to-digital converter maps a voltage to a number; the workhorse in this syllabus is the ADC0808/0809, an 8-bit, 8-channel successive-approximation converter with a built-in multiplexer. Its three control pins choreograph every conversion: ALE latches the 3-bit channel address on ADD A/B/C; SOC (start of conversion) is a positive pulse that launches the SAR sequence; EOC rises when the result is ready; OE (output enable) tristates the 8-bit result onto the data bus for the CPU to read. Conversion time is about 100 microsecond per channel at the rated clock.",
              "The interfacing recipe is fixed: select the channel (write 3 bits to the port feeding ADD A/B/C and pulse ALE), pulse SOC, wait for EOC to rise (poll the port or wire EOC to an interrupt), then assert OE and read the data port. A worked reading: input 2.5 V on a 5 V reference gives code = 2.5/5 x 255 = 127 (about 7FH); back-converting, 127 x 5/255 = 2.49 V - the quantization step is 5/255 = 19.6 mV, the resolution every answer should quote.",
              "Programmed over an 8255: PA reads the ADC data, PB0 drives SOC/ALE, PB1 reads EOC. The loop: OUT PB with 01H then 00H to latch channel and pulse SOC; poll PB1 until 1; OUT OE via PB2 = 1; IN PA; clear OE. Interrupt-driven versions wire EOC to an 8259A input and convert the poll into a service routine - the natural bridge to Unit IV's interrupt machinery.",
              "In the exam, name the ADC type, the four control signals with one line each, the conversion-time number, and the quantization arithmetic for a given input voltage. The worked 2.5 V -> 127 -> 2.49 V round trip is the standard numerical; practice it until it is reflexive.",
            ],
            keyTerms: [
              { term: "SAR ADC", definition: "Successive-approximation register converter - binary-searches the code in one conversion cycle." },
              { term: "SOC / EOC", definition: "Start-of-conversion pulse in; end-of-conversion status out." },
              { term: "OE", definition: "Output enable - places the result byte on the data bus." },
              { term: "Quantization step", definition: "Vref/255; 19.6 mV for a 5 V, 8-bit converter." },
            ],
            diagram: {
              kind: "pipeline",
              title: "One ADC0808 conversion",
              caption: "Channel in, pulse SOC, wait EOC, enable OE, read the byte - five moves, always in this order.",
              stages: [
                { label: "Latch channel", note: "ADD A/B/C + ALE" },
                { label: "Pulse SOC", note: "SAR sequence starts" },
                { label: "Wait EOC", note: "poll or interrupt; ~100 microsecond" },
                { label: "Assert OE", note: "result on data lines" },
                { label: "Read port", note: "IN AL, DATA" },
              ],
            },
            bullets: [
              "ADC0808/0809: 8-bit, 8-channel SAR with ~100 microsecond conversion.",
              "Pins: ADD A/B/C + ALE select channel; SOC starts; EOC reports; OE enables output.",
              "Code = Vin/Vref x 255; 2.5 V on 5 V ref gives 127 (7FH).",
              "Quantization step 5 V/255 = 19.6 mV - quote it in resolution arguments.",
              "Polling reads EOC through a port; interrupt versions feed EOC to the 8259A.",
              "8255 wiring: PA data in, PB0 SOC/ALE out, PB1 EOC in, PB2 OE out.",
            ],
            callout: {
              type: "exam",
              title: "Resolution is a ratio",
              body: "Whenever asked about ADC resolution, answer with the step size - Vref/(2^n - 1) - not just '8-bit'. A worked 19.6 mV step at 5 V reference is the line that turns a definition into a mark-earning answer.",
            },
            codeExample: {
              language: "assembly",
              caption: "Read channel 2 of an ADC0809 via 8255",
              code: `      MOV  AL, 02H      ; channel 2 (PB0... pattern)
      OUT  PORTB, AL    ; ALE + channel
      MOV  AL, 03H      ; SOC pulse (PB0=1, SOC=1)
      OUT  PORTB, AL
      MOV  AL, 02H
      OUT  PORTB, AL    ; SOC low again
WAIT: IN   AL, PORTB    ; poll EOC (PB1)
      TEST AL, 02H
      JZ   WAIT
      MOV  AL, 06H      ; OE = 1 (PB2)
      OUT  PORTB, AL
      IN   AL, PORTA    ; read 8-bit result
      MOV  BL, AL       ; e.g. 7FH for 2.5 V on 5 V ref`,
            },
            examQuestions: [
              {
                q: "Interface an ADC0809 to the 8086 through an 8255 and explain the conversion sequence. Compute the output code for a 2.5 V input with a 5 V reference.",
                marks: 14,
                outline: [
                  "8-bit 8-channel SAR; control pins ADD A/B/C, ALE, SOC, EOC, OE",
                  "8255 mapping: PA data, PB0 SOC/ALE, PB1 EOC, PB2 OE",
                  "Sequence: latch channel, pulse SOC, poll EOC, set OE, read PA",
                  "Conversion ~100 microsecond at rated clock",
                  "Code = Vin/Vref x 255 = 2.5/5 x 255 = 127 = 7FH",
                  "Back-check: 127 x 5/255 = 2.49 V; step = 19.6 mV",
                  "Polling vs interrupt option via 8259A",
                ],
              },
              {
                q: "What does the successive-approximation technique do internally during one conversion?",
                marks: 7,
                outline: [
                  "Binary search: MSB tried first, compare DAC output vs input",
                  "Keep or clear the bit, move to next, 8 comparisons for 8 bits",
                  "One clock per bit - why conversion time is fixed",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "DAC interfacing and waveform generation",
            body: [
              "A digital-to-analogue converter turns a number into a voltage or current; the DAC0800/0808 in this syllabus is an 8-bit multiplying current-output device whose R-2R ladder sums weighted currents: Iout = (D/256) x Iref, where D is the byte written. The current is converted to a voltage by an op-amp current-to-voltage converter - Vout = -(D/256) x Vref when the feedback resistor matches the ladder. The interfacing recipe is the simplest of Unit III: decode one I/O port, latch the byte (the DAC has no internal latch - a 74LS273 or an 8255 port holds the value stable between writes).",
              "Waveform generation is the DAC's exam application, and each waveform is a loop shape. Ramp: increment AL from 00H, OUT, until FFH, wrap - a sawtooth of period 256 x (loop time). Square wave: output 00H, delay, output FFH, delay, repeat - frequency = 1/(2 x delay). Triangle: ramp up then ramp down. Staircase: increment by more than 1 (e.g. ADD AL, 10H) for 16 coarse steps. With a 10 microsecond loop, the 256-step ramp takes 2.56 ms - about 390 Hz.",
              "A worked check: writing 80H (128) to a DAC with Vref = 5 V gives Vout = 128/256 x 5 = 2.5 V; writing FFH gives 4.98 V (255/256 x 5) - the DAC tops out one step short of the reference, the same quantization asymmetry as the ADC. Resolution is Vref/256 = 19.5 mV per LSB, the dual of Unit 3.5's ADC step.",
              "In the exam, give the current/voltage formula with one numeric conversion, then present one waveform program in full with its frequency arithmetic. The staircase variant (ADD AL, 10H) is the favourite follow-up - recognize that it halves the effective resolution to 4 bits while quartering the loop length.",
            ],
            keyTerms: [
              { term: "R-2R ladder", definition: "Resistor network summing binary-weighted currents; basis of the DAC0808." },
              { term: "Iout = D/256 x Iref", definition: "The multiplying DAC's transfer relation; voltage via an op-amp I-V converter." },
              { term: "External latch", definition: "74LS273 or 8255 port holding the DAC input stable between CPU writes." },
              { term: "Ramp/square/triangle", definition: "The three canonical waveform loops: increment, toggle, up-then-down." },
            ],
            diagram: {
              kind: "fork",
              title: "Waveform shapes from one DAC",
              caption: "The same output port, four loop shapes - each with its own frequency arithmetic.",
              start: "DAC waveform programs",
              branches: [
                { label: "Ramp (sawtooth)", outcome: "INC AL, OUT; period = 256 x loop time", good: true },
                { label: "Square", outcome: "toggle 00H/FFH with equal delays; f = 1/(2 x delay)", good: true },
                { label: "Triangle", outcome: "ramp up then ramp down; f = 1/(2 x ramp time)", good: true },
                { label: "Staircase", outcome: "ADD AL, 10H: 16 steps, 4-bit effective resolution", good: true },
              ],
            },
            bullets: [
              "DAC0800/0808: 8-bit multiplying current output through an R-2R ladder.",
              "Vout = -(D/256) x Vref with an op-amp I-V converter.",
              "No internal latch: hold the byte in a 74LS273 or 8255 port.",
              "80H with 5 V reference gives 2.5 V; FFH gives 4.98 V (one LSB short).",
              "Resolution Vref/256 = 19.5 mV/LSB at 5 V.",
              "Ramp at 10 microsecond/step = 2.56 ms period ~ 390 Hz.",
            ],
            callout: {
              type: "warning",
              title: "The latch is not optional",
              body: "Writing to a DAC through decoded I/O leaves the data bus valid for only microseconds - without a latch the output glitches on every unrelated bus activity. Name the 74LS273 (or the 8255 port) in every DAC interface answer; omitting it is the classic design mark lost.",
            },
            codeExample: {
              language: "assembly",
              caption: "Sawtooth and square wave on a latched DAC",
              code: `RAMP: MOV  AL, 00H
UP:   OUT  DACPORT, AL    ; 74LS273 latch holds value
      INC  AL
      JNZ  UP             ; 256-step ramp
      JMP  RAMP           ; period ~ 256 x 10 us = 2.56 ms

SQ:   MOV  AL, 00H
      OUT  DACPORT, AL
      CALL DELAY10MS      ; half period
      MOV  AL, 0FFH
      OUT  DACPORT, AL
      CALL DELAY10MS      ; f = 1/(2 x 10 ms) = 50 Hz
      JMP  SQ`,
            },
            examQuestions: [
              {
                q: "Interface an 8-bit DAC to the 8086 and write programs to generate a sawtooth and a square wave, computing their frequencies for a 10 microsecond loop.",
                marks: 14,
                outline: [
                  "DAC0808 R-2R current output; op-amp I-V converter",
                  "External latch (74LS273/8255) holds the byte",
                  "Vout = D/256 x Vref; 80H -> 2.5 V worked",
                  "Ramp: INC/OUT loop, 256 steps x 10 microsecond = 2.56 ms ~ 390 Hz",
                  "Square: toggle 00H/FFH with delay; f = 1/(2 x Tdelay)",
                  "10 ms delay gives 50 Hz square",
                  "Resolution 19.5 mV/LSB at 5 V",
                ],
              },
              {
                q: "Why is an external latch required when driving a DAC from decoded I/O?",
                marks: 7,
                outline: [
                  "Data bus is valid only during the write cycle",
                  "DAC has no storage - output follows the bus pins",
                  "Latch freezes the value until the next deliberate write",
                  "Without it, every bus activity glitches the analogue output",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Memory interfacing: decoding and wait states",
            body: [
              "Memory attaches to the 8086 through three concerns: capacity mapping, address decoding, and speed matching. Mapping assigns each device a slice of the 1 MB space - commonly EPROM at the top (FFFFFH down) because RESET fetches from FFFF0H, RAM at the bottom. Decoding uses the high address bits to pick the device: a 74LS138 3-to-8 decoder fed with A16-A18 (with A19 gating) produces eight chip selects, each covering a 64 KB block; A0-A15 reach the device itself. For 16-bit 8086 systems, memory splits into odd and even banks selected by A0 and BHE#.",
              "A worked decode: RAM 6116 (2 KB) mapped at 80000H. Address bits A19-A11 = 100 0000 000 (binary) must select it; feed A16, A17, A18 = 000 into the 74LS138 with A19 low enabling it, then NAND-combine A11-A15 high with the 138 output to gate the 6116's CE# - any address outside 80000H-807FFH leaves CE# high and the chip silent. The decoder equation, written explicitly, is the mark-earning core of every memory-interface answer.",
              "Speed matching uses the READY line (Unit 1.6's mechanism): the bus budget for a 5 MHz 8086 is T1+T2+T3 = about 400-600 ns of access time; a 450 ns EPROM fits, a 610 ns one does not - it asserts READY low through the memory's address-valid window, inserting Tw states until it is ready. The design rule: compare device access time against 2 clocks + decoder delay, then add one wait state per 200 ns of shortfall.",
              "In the exam, present: the memory map with reasons (EPROM top for reset vector), the decoder equation in terms of A19-A0, the bank organization for 16-bit systems, and the READY/wait-state arithmetic. Drawing the 74LS138 with its enable pins wired (not floating) is the detail that shows real decoding understanding.",
            ],
            keyTerms: [
              { term: "Address decoding", definition: "High address bits, via a 74LS138, generate chip selects per device block." },
              { term: "Memory map", definition: "The assignment of address ranges to ROM/RAM/IO devices." },
              { term: "Bank organization", definition: "16-bit 8086 memory splits into even (A0) and odd (BHE#) byte banks." },
              { term: "Wait state", definition: "Tw inserted via READY when device access time exceeds the bus budget." },
            ],
            diagram: {
              kind: "fork",
              title: "Three concerns of every memory interface",
              caption: "Map it, decode it, time it - fail any one and the system reads garbage or nothing.",
              start: "Memory interfacing",
              branches: [
                { label: "Mapping", outcome: "EPROM at top (reset vector FFFF0H), RAM at bottom", good: true },
                { label: "Decoding", outcome: "74LS138 on A16-A18; CE# equation from A19-A11", good: true },
                { label: "Speed", outcome: "READY low -> Tw states; one per 200 ns shortfall", good: true },
                { label: "Forgetting BHE#", outcome: "odd bytes never selected - 16-bit reads fail", good: false },
              ],
            },
            bullets: [
              "1 MB space: EPROM at top (reset at FFFF0H), RAM at bottom is the convention.",
              "74LS138 decodes A16-A18 into eight 64 KB chip selects.",
              "CE# = decode(A19-A11) ANDed with bus direction signals.",
              "8086 banks: even bank on A0, odd bank on BHE# - both for word access.",
              "Bus budget at 5 MHz allows roughly 400-600 ns access; compare with the datasheet.",
              "Each 200 ns of shortfall costs one Tw wait state via READY.",
            ],
            callout: {
              type: "exam",
              title: "Write the decoder equation",
              body: "Answers that state only 'a 74LS138 decodes the address' lose the design mark. Write the equation: for RAM at 80000H-807FFH, CE# active when A19=1, A18-A15=0, A14-A11=0 - then the decoder wiring follows mechanically.",
            },
            table: {
              caption: "Worked decode for 2 KB RAM at 80000H.",
              headers: ["Address bit", "Value required", "Role"],
              rows: [
                ["A19", "1", "upper block enable"],
                ["A18-A15", "0000", "74LS138 input/enable"],
                ["A14-A11", "0000", "within-block select (2 KB)"],
                ["A10-A0", "any", "byte/word offset inside 2 KB"],
                ["BHE#/A0", "per access", "odd/even bank select"],
              ],
            },
            examQuestions: [
              {
                q: "Design the interfacing of a 2 KB RAM at address 80000H to an 8086 system: memory map reasoning, address decoding with a 74LS138, and the chip-enable equation.",
                marks: 14,
                outline: [
                  "Convention: EPROM top for reset vector, RAM lower",
                  "Target range 80000H-807FFH (2 KB)",
                  "74LS138 inputs from A16-A18, enables gated by A19",
                  "CE# active when A19=1, A18-A15=0000, A14-A11=0000",
                  "A10-A0 reach the device; A0/BHE# bank selection",
                  "RD#/WR# gating to memory control pins",
                  "Decoder equation is the design core - write it explicitly",
                ],
              },
              {
                q: "A memory device has 610 ns access time on a 5 MHz 8086. How many wait states are needed and why?",
                marks: 7,
                outline: [
                  "Budget T1+T2+T3 ~ 600 ns at 5 MHz",
                  "Shortfall ~ 200 ns -> one Tw state",
                  "READY asserted low by the device until data valid",
                  "Each Tw = 200 ns; two would waste 200 ns of margin",
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
      title: "Timers, Interrupts, DMA and Serial I/O",
      summary:
        "Unit IV is the programmable-support roster: the 8253/8254 interval timer and its six modes, the 8259A interrupt controller with ICW/OCW programming, the 8257 DMA controller and its transfer cycle, serial I/O fundamentals, and the 8251 USART in asynchronous communication.",
      chapter: {
        number: "04",
        title: "Timers, Interrupts, DMA and Serial Links",
        intro:
          "Unit IV covers the 8253/8254 programmable interval timer (six modes, control word, worked divide-by-N), the 8259A programmable interrupt controller (architecture, ICWs and OCWs, priority and vectoring), the 8257 DMA controller (channels, transfer cycle), serial I/O fundamentals (framing, RS-232), and the 8251 USART.",
        inOneBreath:
          "Three 16-bit down-counters make the 8253 divide any clock into timed interrupts, one-shots, rate generators or square waves, selected by one control word. The 8259A turns eight interrupt lines into prioritized, vectored requests through ICW1-4 and OCW1-3. The 8257 steals bus cycles - DRQ in, HRQ to the CPU, HLDA back, DACK out - to move blocks without CPU cycles. The 8251 USART frames asynchronous characters with start/stop bits and manages the RS-232 handshake, mode word setting baud factor, length, parity and stop bits.",
        sections: [
          {
            number: "4.1",
            title: "The 8253/8254 programmable interval timer",
            body: [
              "The 8253 provides three independent 16-bit down-counters, each with its own CLK input, GATE control and OUT output; the 8254 is the faster (10 MHz vs 2.6 MHz) pin-compatible upgrade adding a read-back command. Each counter decrements on its CLK edge and signals completion on OUT - making the chip a frequency divider, a delay generator, a square-wave source, or a one-shot, depending on the mode programmed. Software writes a 16-bit count (1 to 65536, with 0 meaning 65536) and the hardware counts down to zero.",
              "The six operating modes define what OUT does at terminal count. Mode 0: interrupt on terminal count - OUT goes high once when the count reaches zero. Mode 1: programmable one-shot - GATE's rising edge triggers a single low pulse of count-length. Mode 2: rate generator - OUT pulses low for one CLK every N clocks (divide-by-N with automatic reload). Mode 3: square wave - OUT toggles at CLK/N with near-50% duty. Mode 4: software-triggered strobe - a single low pulse after N counts, restarted by reloading. Mode 5: hardware-triggered strobe - same, but armed by a GATE edge.",
              "A worked divide: feed counter 0 with CLK = 1 MHz and program mode 3, count 1000 - OUT is a 1 kHz square wave (1 MHz/1000), period 1 ms, duty 50%. Chain counters for big ratios: counter 0 divides 1 MHz to 1 kHz (count 1000), counter 1 divides 1 kHz to 1 Hz (count 1000) - a two-stage divider reaching 1 Hz from a 1 MHz crystal, the standard trick for real-time clocks.",
              "In the exam, memorize the mode table as OUT-behaviour one-liners and be ready to compute an output frequency from CLK and count. Mode 3 square wave and Mode 2 rate generator carry most of the numerical questions; Mode 0 carries the interrupt-drift questions.",
            ],
            keyTerms: [
              { term: "Counter", definition: "16-bit down-counter with CLK, GATE, OUT - three per 8253/8254." },
              { term: "Terminal count", definition: "The moment the counter reaches zero; OUT behaviour per mode follows." },
              { term: "Mode 3", definition: "Square-wave generator - OUT toggles at CLK/N with ~50% duty." },
              { term: "Mode 2", definition: "Rate generator - one CLK-wide low pulse every N clocks, auto-reloaded." },
              { term: "Read-back command", definition: "8254-only command that latches count/status without stopping the count." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Six modes by OUT behaviour",
              caption: "One-shot at the top, continuous waveforms below - each tier is what OUT does after terminal count.",
              tiers: [
                { label: "Mode 0", note: "interrupt on TC - OUT high once" },
                { label: "Modes 4/5", note: "single strobe pulse (software/hardware triggered)" },
                { label: "Mode 1", note: "one-shot pulse of count length per GATE edge" },
                { label: "Modes 2/3", note: "continuous: rate pulses / square wave, auto-reload" },
              ],
            },
            bullets: [
              "Three independent 16-bit down-counters; 8254 = faster 8253 + read-back.",
              "Mode 0 interrupt, Mode 1 one-shot, Mode 2 rate, Mode 3 square wave, Modes 4/5 strobes.",
              "Count 0 means 65536; BCD option in the control word.",
              "Worked: 1 MHz / count 1000 in mode 3 = 1 kHz square wave.",
              "Cascade counters to reach big ratios: 1 MHz -> 1 kHz -> 1 Hz.",
              "GATE arms (mode 1/5) or enables (mode 0/2/3/4) each counter.",
            ],
            callout: {
              type: "tip",
              title: "Count 0 is not zero",
              body: "Writing 0000H loads 65536 - the maximum count. Every divide-by-65536 answer and every maximum-delay computation hinges on this quirk; forgetting it caps answers at 65535 and loses the arithmetic mark.",
            },
            table: {
              caption: "8253/8254 operating modes.",
              headers: ["Mode", "Name", "OUT behaviour"],
              rows: [
                ["0", "Interrupt on TC", "low during count, high once at zero"],
                ["1", "Programmable one-shot", "low pulse of N clocks per GATE trigger"],
                ["2", "Rate generator", "one-clock low pulse every N clocks"],
                ["3", "Square wave", "toggles at CLK/N, ~50% duty"],
                ["4", "Software-triggered strobe", "one-clock low pulse after N counts (reload to repeat)"],
                ["5", "Hardware-triggered strobe", "same as 4 but armed by GATE edge"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the operating modes of the 8253/8254 timer and compute the output frequency when a 1 MHz clock drives a counter programmed for mode 3 with count 1000.",
                marks: 14,
                outline: [
                  "Three 16-bit down-counters; CLK/GATE/OUT each",
                  "Modes 0-5 with one-line OUT behaviour each",
                  "Control word: SC, RL, mode, BCD fields",
                  "Count 0 = 65536 quirk",
                  "Mode 3 square wave: f_out = CLK/N = 1 MHz/1000 = 1 kHz",
                  "Cascade example: two counters reach 1 Hz",
                  "8254 differences: 10 MHz clocking, read-back command",
                ],
              },
              {
                q: "How would you generate a 1-second interrupt from a 1.193 MHz clock using one 8253?",
                marks: 7,
                outline: [
                  "Needed count = 1,193,000 - exceeds 65536 in one counter",
                  "Cascade: counter 0 divides by 1193 -> 1 kHz",
                  "Counter 1 divides by 1000 -> 1 Hz",
                  "Mode 3 on both; wire OUT0 to CLK1",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Programming the 8253/8254",
            body: [
              "Each counter is programmed through one control register selected by A1A0 = 11; the control word packs five fields: SC1-SC0 pick the counter (00/01/10), RL1-RL0 set the read/load policy (01 = LSB only, 10 = MSB only, 11 = LSB then MSB), M2-M0 pick the mode, and BCD picks binary or BCD counting. After the control word, the count bytes follow in the same order - LSB then MSB when RL = 11 - and the counter starts on the next CLK edge (or GATE edge in modes 1 and 5).",
              "A worked initialization in the PC's spirit: divide 1.193 MHz by 1193 for a 1 kHz rate. Write control word 36H (00 11 011 0: counter 0, load LSB+MSB, mode 3, binary); write 89H (1193 = 04A9H: LSB A9H) then 04H (MSB); OUT0 now toggles at 1 kHz. The two-step byte order is the trap - writing MSB first with RL = 11 corrupts the count silently, since the chip assembles bytes in the order the control word promised.",
              "Reading a running counter needs a latch: the counter latch command (SC + RL = 00) freezes the current count into an internal register without disturbing the count, and the next read fetches it; the 8254's read-back command can latch count and status of several counters at once. Without latching, a read of an active counter mixes bytes from different moments - the subtle bug that read-back exists to cure.",
              "In the exam, write the control word in binary, decode it field by field, then list the byte sequence. Every numerical answer should end with the frequency or delay arithmetic - the control word proves configuration, the arithmetic proves understanding.",
            ],
            keyTerms: [
              { term: "Control word", definition: "SC (counter), RL (read/load), M (mode), BCD - one byte per configuration." },
              { term: "RL policy", definition: "LSB only, MSB only, or LSB-then-MSB; governs byte order after the control word." },
              { term: "Counter latch command", definition: "SC + RL = 00 freezes the count for reading without stopping it." },
              { term: "Read-back (8254)", definition: "Latches count and/or status of selected counters in one command." },
            ],
            diagram: {
              kind: "flow",
              title: "Programming one counter",
              caption: "Control word first, count bytes second, in the order RL promised.",
              steps: [
                { label: "Write control word", note: "to A1A0 = 11" },
                { label: "Decode fields", note: "SC, RL, M, BCD" },
                { label: "Load LSB", note: "if RL = 01 or 11" },
                { label: "Load MSB", note: "if RL = 10 or 11" },
                { label: "Counting starts", note: "next CLK (or GATE) edge" },
              ],
            },
            bullets: [
              "Control word fields: SC1-0, RL1-0, M2-0, BCD.",
              "Byte order after the control word follows RL: LSB then MSB by default (11).",
              "Worked: 36H configures counter 0, LSB+MSB, mode 3, binary.",
              "1193 = 04A9H: write A9H then 04H for the 1 kHz divide.",
              "Latch before reading a live counter; read-back on the 8254.",
              "Modes 1 and 5 wait for a GATE edge before counting down.",
            ],
            callout: {
              type: "warning",
              title: "Byte order is contractual",
              body: "The RL field is a promise about byte order. Load MSB first after promising LSB-then-MSB and the counter divides by a garbage value with no error signal - silent failure that exam questions love to probe.",
            },
            codeExample: {
              language: "assembly",
              caption: "Counter 0 -> 1 kHz square wave from 1.193 MHz",
              code: `      MOV  AL, 36H      ; 00 11 011 0: cnt0, LSB+MSB, mode3, binary
      OUT  43H, AL      ; control register
      MOV  AL, 0A9H     ; 1193 = 04A9H -> LSB
      OUT  40H, AL
      MOV  AL, 04H      ; MSB
      OUT  40H, AL      ; OUT0 = 1.193 MHz / 1193 = 1 kHz`,
            },
            examQuestions: [
              {
                q: "Write the control word and initialization sequence to program counter 0 of an 8253 as a mode 3 square-wave generator dividing 1.193 MHz to 1 kHz.",
                marks: 7,
                outline: [
                  "Count needed = 1,193,000/1000 = 1193 = 04A9H",
                  "Control word 36H: SC=00, RL=11, M=011, BCD=0",
                  "Write 36H to 43H",
                  "Write LSB A9H to 40H, then MSB 04H",
                  "OUT0 toggles at 1 kHz with ~50% duty",
                ],
              },
              {
                q: "Why must a running counter be latched before reading, and how does the 8254 improve on this?",
                marks: 7,
                outline: [
                  "Count changes every CLK - a raw read mixes bytes from different instants",
                  "Counter latch command freezes the value without stopping the count",
                  "8254 read-back latches count and status of multiple counters at once",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "The 8259A programmable interrupt controller",
            body: [
              "The 8259A manages eight prioritized interrupt request lines (IR0-IR7) and is cascadable to 64 through one master and up to eight slaves. Internally it keeps three registers: IRR (interrupt request register - lines currently requesting), ISR (in-service register - requests being serviced), and IMR (mask register - lines blocked by software). On an unmasked request it raises INT to the CPU, receives INTA# pulses, and places the interrupt vector byte on the data bus - the vector the CPU uses to index its interrupt table.",
              "Priority is the chip's judgement call. Fully nested mode (default) ranks IR0 highest; within it, a higher-priority request preempts a lower one in service, while equal-or-lower waits. Rotate modes (rotate on EOI, rotate on automatic EOI) level the ranking for round-robin fairness in systems where no device deserves permanent favour. Special mask mode lets software unmask lower-priority lines while a routine runs; polled mode turns the chip into a software-scanned priority encoder.",
              "The vectoring arithmetic is the exam's numerical core. ICW2 sets the base type number: with ICW2 = 08H, IR0-IR7 map to types 08H-0FH - the PC's convention. The 8259A composes the byte as base | IR-line, so an interrupt on IR3 delivers 0BH; the CPU multiplies by 4 (8086 vector table stride) to find the entry at 0002CH. Getting IR-line to type-number to vector-address in three lines is the calculation every 8259A question hides.",
              "In the exam: draw the block diagram (IRR, ISR, IMR, priority resolver, control logic, cascade buffer), explain the INT/INTA# handshake, list the register trio, and work one vector computation. The register trio - request, in-service, mask - is the conceptual heart; everything else hangs off it.",
            ],
            keyTerms: [
              { term: "IRR", definition: "Interrupt Request Register - lines currently raised." },
              { term: "ISR", definition: "In-Service Register - requests accepted and being serviced." },
              { term: "IMR", definition: "Mask Register - lines blocked by software (OCW1)." },
              { term: "Fully nested mode", definition: "Default priority: IR0 highest; higher lines preempt service." },
              { term: "ICW2", definition: "Sets the base interrupt type number; IR line ORs into it for the vector byte." },
            ],
            diagram: {
              kind: "layers",
              title: "Inside the 8259A",
              caption: "Three registers and a resolver sit between the request lines and the CPU's INT/INTA# handshake.",
              layers: [
                { label: "INT / INTA# handshake", note: "to CPU; vector byte returned" },
                { label: "Priority resolver", note: "fully nested or rotating rules" },
                { label: "IRR / ISR / IMR", note: "request, in-service, mask" },
                { label: "IR0-IR7 (+ cascade)", note: "device request lines; slaves below" },
              ],
            },
            bullets: [
              "Eight request lines, cascadable to 64 (one master + eight slaves).",
              "IRR: waiting requests; ISR: being serviced; IMR: software mask.",
              "INT raised to CPU; two INTA# pulses return the vector byte.",
              "Fully nested default; rotate modes for round-robin; special mask for nested service.",
              "ICW2 = 08H maps IR0-IR7 to types 08H-0FH (PC convention).",
              "Vector address = type x 4: IR3 with base 08H -> 0BH -> 002CH.",
            ],
            callout: {
              type: "exam",
              title: "Two INTA# pulses, one vector",
              body: "The 8086 issues two INTA# pulses; the 8259A places the vector byte on the data bus during the second. Saying 'INTA reads the vector' without the two-pulse detail is the half-answer markers notice immediately.",
            },
            table: {
              caption: "Vector arithmetic with ICW2 = 08H.",
              headers: ["Request line", "Type number", "Vector address (type x 4)"],
              rows: [
                ["IR0", "08H", "00020H"],
                ["IR3", "0BH", "0002CH"],
                ["IR7", "0FH", "0003CH"],
                ["IR5 (base 40H)", "45H", "00114H"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the architecture of the 8259A with IRR, ISR and IMR, the priority schemes, and how an interrupt on IR3 is vectored when ICW2 = 08H.",
                marks: 14,
                outline: [
                  "8 lines, cascade to 64; master/slave via CAS and SP#/EN#",
                  "IRR/ISR/IMR roles defined precisely",
                  "INT + two INTA# pulses; vector byte on the second",
                  "Fully nested default; rotate and special-mask modes",
                  "ICW2 = 08H: IR3 -> type 0BH",
                  "Vector address = 0BH x 4 = 002CH",
                  "EOI (OCW2) clears the ISR bit; AEOI alternative in ICW4",
                ],
              },
              {
                q: "Why does a fully nested system need an EOI at the end of every service routine?",
                marks: 7,
                outline: [
                  "ISR bit stays set until EOI - blocking equal/lower priorities",
                  "OCW2 sends non-specific or specific EOI",
                  "Without EOI, one missed routine permanently masks lower lines",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Programming the 8259A: ICWs and OCWs",
            body: [
              "The 8259A is programmed through two command families. Initialization Command Words (ICW1-ICW4) are written once at reset in strict sequence: ICW1 (A0 = 0, bit 4 = 1) selects edge/level triggering and cascade vs single; ICW2 (A0 = 1) sets the base type number; ICW3 (A0 = 1, only if cascaded) maps which IR lines carry slaves (master) or the slave's identity (slave); ICW4 (A0 = 1, if ICW1 requests it) selects 8086 mode, AEOI, buffered mode and special fully nested.",
              "Operation Command Words (OCWs) tune running behaviour, any time, in any order. OCW1 (A0 = 1) writes the IMR - masking or unmasking lines. OCW2 (A0 = 0, bits 7-5 = EOI pattern) sends end-of-interrupt (specific or non-specific), commands priority rotation, and selects the rotation mode. OCW3 (A0 = 0, bits 6-5 pattern) enables special mask, polled mode, or reads IRR/ISR status. The A0 pin and sentinel bits (bit 4, bits 3-4) tell the chip which family the byte belongs to - the decoding rules worth a diagram in any answer.",
              "A worked PC-style initialization: ICW1 = 11H (edge-triggered, cascade, ICW4 needed), ICW2 = 08H (types 08H-0FH), ICW3 = 04H on the master (IR2 carries the slave), ICW4 = 01H (8086 mode, manual EOI, non-buffered). Runtime: OCW1 = FDH masks everything but IR1 (keyboard), OCW2 = 20H sends non-specific EOI after each service. The masking trick - mask = complement of the allowed set - is the arithmetic most numerical sub-questions want.",
              "In the exam, present ICWs as a one-time ordered sequence and OCWs as unordered runtime tools, then decode each byte field by field. The sentinel-bit decoding (how the 8259A tells ICW/OCW bytes apart) is the detail that separates fluent answers from memorized ones.",
            ],
            keyTerms: [
              { term: "ICW1-ICW4", definition: "One-time initialization sequence: trigger mode, base vector, cascade map, CPU mode." },
              { term: "OCW1", definition: "Writes the mask register (IMR) - 1 masks the line." },
              { term: "OCW2", definition: "EOI commands and priority rotation control." },
              { term: "OCW3", definition: "Special mask, polled mode, and IRR/ISR read selection." },
              { term: "AEOI", definition: "Automatic end-of-interrupt (ICW4): ISR bit clears itself at INTA# end." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Initialization then operation",
              caption: "ICWs once, in order, right after reset; OCWs anytime after.",
              stages: [
                { label: "ICW1", note: "edge/level, cascade, ICW4 due?" },
                { label: "ICW2", note: "base type number" },
                { label: "ICW3", note: "cascade map (if cascaded)" },
                { label: "ICW4", note: "8086 mode, AEOI, buffer" },
                { label: "OCW1-3", note: "mask, EOI/rotate, status - anytime" },
              ],
            },
            bullets: [
              "ICW1: A0 = 0 with bit 4 = 1 - the sentinel that starts initialization.",
              "ICW2 sets the base type; IR line ORs in at interrupt time.",
              "ICW3 differs master (slave map) vs slave (identity code 0-7).",
              "ICW4: 8086 mode, AEOI, buffered/master-slave, special fully nested.",
              "OCW1 mask = complement of allowed lines: FDH allows only IR1.",
              "OCW2 = 20H non-specific EOI; 60H+n specific EOI; bits 7-6 command rotation.",
            ],
            callout: {
              type: "warning",
              title: "Initialization cannot be restarted halfway",
              body: "Once ICW1 is written, the 8259A demands ICW2-ICW4 in sequence - there is no abort. Answers that treat the ICWs as optional or reorderable lose the programming marks; the sequence is contractual.",
            },
            table: {
              caption: "PC-style initialization, byte by byte.",
              headers: ["Byte", "Value", "Decoded meaning"],
              rows: [
                ["ICW1", "11H", "edge-triggered, cascaded, ICW4 required"],
                ["ICW2", "08H", "types 08H-0FH"],
                ["ICW3 (master)", "04H", "IR2 carries the slave"],
                ["ICW4", "01H", "8086 mode, manual EOI, non-buffered"],
                ["OCW1", "FDH", "mask all but IR1"],
                ["OCW2", "20H", "non-specific EOI"],
              ],
            },
            examQuestions: [
              {
                q: "Explain ICW and OCW programming of the 8259A. Write the initialization for an edge-triggered, cascaded 8086 system with IR0 mapped to type 08H and manual EOI.",
                marks: 14,
                outline: [
                  "ICW1-4 sequence: trigger, base vector, cascade map, CPU mode",
                  "ICW1 = 11H decoded field by field",
                  "ICW2 = 08H -> IR0-IR7 = types 08H-0FH",
                  "ICW3 master = 04H (slave on IR2)",
                  "ICW4 = 01H: 8086 mode, manual EOI",
                  "OCW1 masks, OCW2 EOI = 20H, OCW3 reads IRR/ISR",
                  "Sentinel bits distinguish ICW/OCW families on the bus",
                ],
              },
              {
                q: "Compute the OCW1 value that allows only IR1 and IR6, and explain the mask polarity.",
                marks: 7,
                outline: [
                  "Mask bit 1 = line blocked",
                  "Allow IR1 and IR6 -> mask = 1011 1101 = BDH",
                  "OCW1 written with A0 = 1",
                  "Later OCW1 write changes masking anytime",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "The 8257 DMA controller",
            body: [
              "Direct Memory Access moves blocks of data without CPU cycles - essential for disks, networks and high-rate A/D streams. The 8257 offers four independent channels, each with a 16-bit address register and a 14-bit terminal-count register; the CPU programs channel address, count and mode (verify, write, read) through I/O ports, then arms the channel. When the device raises DRQn, the 8257 requests the bus with HRQ, waits for the CPU's HLDA, and then becomes bus master for the transfer.",
              "The transfer cycle is the exam's sequence question. Device asserts DRQn -> 8257 raises HRQ -> CPU floats its buses and returns HLDA -> 8257 asserts DACKn (selecting the device), drives the memory address from its register, and generates IOR#/MEMW# (write transfer) or MEMR#/IOW# (read transfer) - one byte moves per bus cycle in single mode, or a whole burst in burst mode. The terminal-count output fires when the count register reaches zero, telling the world the block is done.",
              "A worked configuration: stream 1 KB from an ADC into RAM at 3000H. Program channel 2: address register = 3000H, terminal count = 1024 - 1 = 3FFH (the 8257's count is the count-minus-one), mode = I/O-to-memory write; enable the channel and set rotating or fixed priority. At 1 MHz device rate the block drains in 1024 bus cycles - about 1 ms - during which the CPU does nothing but wait for HLDA to fall; at single-transfer mode it interleaves one DMA cycle per CPU cycle instead, keeping the CPU half-alive.",
              "In the exam, draw the DRQ-HRQ-HLDA-DACK sequence as a numbered flow with one line per step, explain count-minus-one, and contrast single vs burst (cycle-stealing) modes. The 'who drives which bus during the transfer' line - 8257 drives address and the paired strobes - is the architectural mark.",
            ],
            keyTerms: [
              { term: "DRQ / DACK", definition: "Device request in / device acknowledge out - the per-channel handshake." },
              { term: "HRQ / HLDA", definition: "Hold request to the CPU and hold acknowledge back - bus mastership transfer." },
              { term: "Terminal count", definition: "Count register reaching zero fires TC; 8257 programs count - 1." },
              { term: "Cycle stealing", definition: "Single-transfer mode: one DMA cycle interleaved per CPU cycle." },
            ],
            diagram: {
              kind: "flow",
              title: "One DMA transfer cycle",
              caption: "Request, hold, grant, transfer, count - the five beats of every block move.",
              steps: [
                { label: "DRQn raised", note: "device wants service" },
                { label: "HRQ out", note: "8257 asks the CPU" },
                { label: "HLDA back", note: "CPU floats buses" },
                { label: "DACKn + transfer", note: "address + strobes from 8257" },
                { label: "TC at count zero", note: "block complete" },
              ],
            },
            bullets: [
              "Four channels, each with 16-bit address and 14-bit count registers.",
              "Modes: verify (no data), I/O-to-memory write, memory-to-I/O read.",
              "Sequence: DRQ -> HRQ -> HLDA -> DACK -> transfer -> TC.",
              "Programmed count = block size - 1.",
              "Single mode steals one cycle per CPU cycle; burst mode holds the bus.",
              "During transfer the 8257 drives address and both strobes; CPU idles.",
            ],
            callout: {
              type: "exam",
              title: "Count minus one",
              body: "The 8257's terminal-count register stores block size - 1 (3FFH for 1 KB). Quoting 400H is the classic numerical slip; write the subtraction explicitly in every DMA configuration answer.",
            },
            table: {
              caption: "Channel programming example: 1 KB ADC stream to 3000H.",
              headers: ["Register", "Value", "Meaning"],
              rows: [
                ["Address (ch 2)", "3000H", "first RAM destination"],
                ["Terminal count", "03FFH", "1024 - 1 transfers"],
                ["Mode", "write (I/O -> memory)", "ADC to RAM"],
                ["Enable/priority", "ch 2 enabled", "fixed or rotating priority"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the 8257 DMA controller architecture and the complete transfer cycle from DRQ to terminal count, with a worked 1 KB configuration.",
                marks: 14,
                outline: [
                  "Four channels with address + count registers",
                  "Modes: verify, write, read",
                  "Sequence: DRQ -> HRQ -> HLDA -> DACK -> transfer -> TC",
                  "8257 drives address and IOR/MEMW or MEMR/IOW pairs",
                  "Count programmed as size - 1: 3FFH for 1 KB",
                  "Single (cycle-stealing) vs burst mode contrast",
                  "CPU idles during burst; interleaves in single mode",
                ],
              },
              {
                q: "Why does DMA outperform programmed I/O for block transfers?",
                marks: 7,
                outline: [
                  "Programmed I/O costs a loop of fetch-decode-execute per byte",
                  "DMA moves one byte per bus cycle with no CPU involvement",
                  "CPU is free (single mode) or fully parked (burst)",
                  "Essential above roughly 100 KB/s device rates",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Serial I/O fundamentals: framing and RS-232",
            body: [
              "Serial I/O sends one bit per clock over one wire - trading speed for distance and pin count. Two disciplines exist. Asynchronous: each character travels alone, wrapped in framing - a start bit (low), 5-8 data bits (LSB first), an optional parity bit, and 1/1.5/2 stop bits (high); the line idles high, and the receiver resynchronizes on every start edge, so no clock wire is needed. Synchronous: blocks travel under a shared clock with SYN characters or a dedicated line aligning the receiver; efficiency is higher but wiring is stricter.",
              "The numbers are all rate arithmetic. Baud rate is symbols per second; at NRZ one bit per symbol, bits per second equals baud. A 9600-baud asynchronous link with 1 start + 8 data + no parity + 1 stop = 10 bits per character delivers 960 characters per second. The receiver samples each bit at its centre (mid-bit), using the 16x baud clock of a USART to land within the bit's stable window - the reason baud-factor selection (1x/16x/64x) is a mode-word field.",
              "RS-232C is the electrical wrapper: logic 1 is -3 to -15 V, logic 0 is +3 to +15 V - inverted relative to TTL and far larger in swing, for noise immunity over cables. MC1488/MC1489 (or MAX232) converters bridge TTL and RS-232 levels. The control signals - DTR, DSR, RTS, CTS, DCD - form the modem handshake; null-modem cables cross them for direct device-to-device links. Distance limits: about 15 m at full rate, longer at lower baud.",
              "In the exam: contrast asynchronous vs synchronous in one table, work the 9600-baud characters-per-second line, and state the RS-232 level convention and its level-converter chips. The mid-bit sampling argument - why a 16x clock exists - is the conceptual mark.",
            ],
            keyTerms: [
              { term: "Start/stop framing", definition: "Asynchronous characters: idle high, start low, data LSB-first, parity optional, stop high." },
              { term: "Baud rate", definition: "Symbols per second; equals bits/s for NRZ serial links." },
              { term: "16x baud clock", definition: "Oversampling clock letting the receiver sample mid-bit reliably." },
              { term: "RS-232C levels", definition: "1 = -3 to -15 V, 0 = +3 to +15 V; inverted, noise-immune, ~15 m reach." },
              { term: "MC1488/1489", definition: "TTL-to-RS-232 driver and RS-232-to-TTL receiver pairs; MAX232 does both." },
            ],
            diagram: {
              kind: "compare",
              title: "Asynchronous vs synchronous serial",
              caption: "One character at a time with framing, or blocks under a shared clock.",
              left: {
                heading: "Asynchronous",
                items: [
                  "Each character framed: start, data, parity, stop",
                  "Resynchronizes per start edge",
                  "No clock wire; 10 bits per character overhead",
                  "9600 baud, 8N1 -> 960 characters/s",
                ],
              },
              right: {
                heading: "Synchronous",
                items: [
                  "Block framed by SYN characters",
                  "Shared clock or clock recovery",
                  "Small overhead per block",
                  "Needs stricter wiring and timing",
                ],
              },
            },
            bullets: [
              "Framing: idle high, start bit low, 5-8 data bits LSB first, parity, stop bits high.",
              "10-bit character at 9600 baud = 960 characters per second.",
              "Receiver samples mid-bit using a 16x (or 64x) oversampling clock.",
              "Parity: even or odd; flag errors, do not correct them.",
              "RS-232: 1 is negative, 0 is positive - inverted vs TTL; MC1488/1489 or MAX232 convert.",
              "Modem handshake: DTR/DSR/RTS/CTS/DCD; null modem crosses them.",
            ],
            callout: {
              type: "exam",
              title: "Bits-per-character arithmetic",
              body: "Any serial-rate question resolves to: bits per character (start + data + parity + stop) times characters per second equals baud. Work 9600 8N1 = 10 x 960 once and every variant - 7E1, 8N2 - becomes a one-line recomputation.",
            },
            table: {
              caption: "Throughput at 9600 baud by framing.",
              headers: ["Format", "Bits/char", "Characters/s"],
              rows: [
                ["8N1", "10", "960"],
                ["7E1", "10", "960"],
                ["8N2", "11", "872"],
                ["8E1", "11", "872"],
              ],
            },
            examQuestions: [
              {
                q: "Explain asynchronous serial framing and compute the characters-per-second throughput of a 9600-baud, 8-data-bit, no-parity, 1-stop-bit link.",
                marks: 7,
                outline: [
                  "Framing: start, 8 data LSB first, stop; idle high",
                  "Bits per character = 1 + 8 + 0 + 1 = 10",
                  "Throughput = 9600/10 = 960 characters/s",
                  "Mid-bit sampling via 16x clock",
                  "Parity and 2-stop variants change the divisor",
                ],
              },
              {
                q: "Explain RS-232C voltage conventions and why level converters are required between a USART and an RS-232 line.",
                marks: 7,
                outline: [
                  "Logic 1 = -3 to -15 V; logic 0 = +3 to +15 V",
                  "Inverted and amplified relative to TTL (0/5 V)",
                  "Noise immunity over cables; ~15 m at full rate",
                  "MC1488 driver / MC1489 receiver, or MAX232 single-chip",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "The 8251 USART and data communication",
            body: [
              "The 8251 Universal Synchronous/Asynchronous Receiver Transmitter serializes parallel bytes and deserializes them back, in either discipline. Its register file hangs on A0: A0 = 0 is data (transmit/receive buffer), A0 = 1 is control - where the mode word, command word and status word share an address, distinguished by order (mode word immediately after reset) and by a software-reset bit. Pins TXD/RXD carry the serial stream; TXRDY/RXRDY tell the CPU buffer status; DSR/DTR/RTS/CTS pass the modem handshake through.",
              "The mode word (asynchronous form) encodes: baud factor (1x/16x/64x), character length (5-8 bits), parity enable and sense, stop bits (1/1.5/2). The command word follows with transmit/receive enables, error reset, DTR/RTS asserts, break control, and the internal reset (IR) that lets software rewrite the mode word. The status word reports TXRDY, RXRDY, parity error (PE), overrun error (OE), framing error (FE) and modem pins - the three errors being the receiver's honesty report.",
              "A worked initialization for 9600-baud 8N1 with a 153.6 kHz input clock: baud factor 16x makes the baud = 153.6 kHz/16 = 9600. Mode word 4DH = 01 00 11 01: one stop bit, no parity, 8 data bits, 16x factor. Command word 27H enables transmit and receive with DTR and RTS. Transmitting is then: poll status TXRDY, write the byte to the data port; receiving: poll RXRDY (or wire it to an interrupt) and read.",
              "In the exam, decode a given mode word field by field (like 4DH above), give the initialization order (reset, mode word, command word), and list the three receive errors with one cause each. The 'one address, three meanings, order distinguishes' principle is the architectural insight the question rewards.",
            ],
            keyTerms: [
              { term: "USART", definition: "Universal Synchronous/Asynchronous Receiver Transmitter - the 8251's full name." },
              { term: "Mode word", definition: "First control write after reset: baud factor, length, parity, stop bits." },
              { term: "Command word", definition: "Second control write: enables, modem pins, error reset, internal reset." },
              { term: "PE / OE / FE", definition: "Parity, overrun and framing errors - the receiver's three reports." },
              { term: "TXRDY / RXRDY", definition: "Buffer-empty (transmit) and character-ready (receive) status pins." },
            ],
            diagram: {
              kind: "pipeline",
              title: "8251 bring-up sequence",
              caption: "Reset, mode word, command word - then data flows and the status word watches.",
              stages: [
                { label: "Hardware/software reset", note: "mode logic armed" },
                { label: "Mode word", note: "baud factor, length, parity, stops" },
                { label: "Command word", note: "TxEN, RxEN, DTR, RTS" },
                { label: "Data I/O", note: "poll TXRDY/RXRDY" },
                { label: "Status monitoring", note: "PE/OE/FE error report" },
              ],
            },
            bullets: [
              "A0 distinguishes data (0) from control (1); order distinguishes mode vs command.",
              "Mode word: 1x/16x/64x baud factor; 5-8 bits; parity; 1/1.5/2 stops.",
              "Worked: mode 4DH = 1 stop, no parity, 8 bits, 16x; 153.6 kHz/16 = 9600 baud.",
              "Command 27H: transmit + receive enabled, DTR and RTS asserted.",
              "Receive errors: PE (bad parity), OE (byte read too late), FE (bad stop framing).",
              "Internal reset bit (IR) in the command word reopens mode-word programming.",
            ],
            callout: {
              type: "warning",
              title: "Mode word must come first",
              body: "After reset the 8251 treats the first control write as the mode word - always. A program that sends the command word first configures garbage framing; the internal-reset trick (command word with IR = 1) is how software recovers, and naming it earns the recovery mark.",
            },
            codeExample: {
              language: "assembly",
              caption: "8251: 9600 baud 8N1 transmit loop",
              code: `      MOV  AL, 00H
      OUT  CNTRL, AL      ; dummy writes for reliable reset
      MOV  AL, 40H        ; command with IR = 1 (internal reset)
      OUT  CNTRL, AL
      MOV  AL, 4DH        ; mode: 1 stop, no parity, 8 bits, 16x
      OUT  CNTRL, AL      ; 153.6 kHz / 16 = 9600 baud
      MOV  AL, 27H        ; command: TxEN, RxEN, DTR, RTS
      OUT  CNTRL, AL
SEND: IN   AL, CNTRL      ; status word
      TEST AL, 01H        ; TXRDY?
      JZ   SEND
      MOV  AL, CL         ; byte to send
      OUT  DATA, AL`,
            },
            examQuestions: [
              {
                q: "Explain the 8251 USART registers and pins, and initialize it for 9600-baud, 8-data-bit, no-parity, 1-stop asynchronous operation with a 153.6 kHz clock.",
                marks: 14,
                outline: [
                  "A0 = 0 data, A0 = 1 control; mode/command/status share the control port",
                  "Order: reset, mode word, command word",
                  "Mode 4DH decoded: 1 stop, no parity, 8 bits, 16x factor",
                  "Baud = 153.6 kHz / 16 = 9600",
                  "Command 27H: TxEN, RxEN, DTR, RTS",
                  "Transmit: poll TXRDY, write data port",
                  "Receive errors PE/OE/FE with causes",
                ],
              },
              {
                q: "How does software reprogram the mode word of an already-running 8251?",
                marks: 7,
                outline: [
                  "Mode word is accepted only after reset",
                  "Command word with internal-reset bit (D6 = 1, value 40H) simulates reset",
                  "Then the new mode word, then a fresh command word",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "The 8051 Microcontroller and Embedded Systems",
      summary:
        "Unit V compresses the whole computer onto one chip: microprocessor vs microcontroller and the embedded-system idea, 8051 architecture and pins, ports and I/O behaviour, memory organization with SFRs, interrupts and addressing modes, the instruction set, and how microcontrollers become embedded products.",
      chapter: {
        number: "05",
        title: "From Microprocessor to Embedded System",
        intro:
          "Unit V covers the microprocessor vs microcontroller contrast and embedded-system concept, 8051 architecture and pin description, I/O port configuration, memory organization (internal RAM, SFRs, external memory), interrupts and addressing modes, an overview of the instruction set, and the use of microcontrollers in embedded systems.",
        inOneBreath:
          "A microcontroller is a computer-on-a-chip - CPU, RAM, ROM, ports, timers, UART - dedicated to one job with real-time constraints. The 8051 offers 128 B of internal RAM (register banks, bit-addressable area, stack), four quasi-bidirectional ports with alternate functions on P3, five interrupts with fixed vectors at 0003H-0023H, and 111 instructions across immediate/register/direct/indirect/indexed/bit addressing. Embedded design is budgeting: pick the chip by RAM/ROM/port/timer fit, write the firmware, debug it in-circuit.",
        sections: [
          {
            number: "5.1",
            title: "Microprocessor vs microcontroller and the embedded-system idea",
            body: [
              "A microprocessor is a CPU on a chip - RAM, ROM, ports and timers are external chips it must fetch from buses. A microcontroller integrates all of them on one die: CPU plus RAM plus program ROM plus I/O ports plus timers plus often a UART and ADC. The consequence is two different worlds: a microprocessor system scales (add memory, add peripherals) and runs arbitrary software; a microcontroller is fixed-capacity, single-chip, and dedicated to one control job - washing machines, mouse controllers, engine management.",
              "An embedded system is a computer hidden inside a product to control it: dedicated function, real-time response, tight power and cost budgets, and firmware rather than applications. The design consequences follow: code fits a fixed ROM, RAM is counted in bytes, interrupt latency matters (the washing machine cannot miss its spin cycle sensor), and reliability is non-negotiable because there is no user to reboot it. The 8051 family - with its small, predictable, register-rich instruction set - became the textbook embedded controller precisely for these properties.",
              "A worked contrast in numbers: a minimum 8086 system needs the CPU, an 8284 clock, two 8282 latches, one or two 8286 transceivers, EPROM, RAM, a decoder, and an 8255 - eight chips at least. An 8051 delivers the equivalent (CPU + 4 KB ROM + 128 B RAM + 32 I/O lines + 2 timers + UART) in one 40-pin chip; adding a crystal and reset button completes the system. The chip-count ratio is the whole microcontroller pitch.",
              "In the exam, structure the answer as definition, integration list, the embedded-system properties (dedicated, real-time, low power, firmware, reliable), and the worked chip-count contrast. 'General purpose vs dedicated' is the sentence examiners scan for.",
            ],
            keyTerms: [
              { term: "Microprocessor", definition: "CPU only on-chip; memory and peripherals external." },
              { term: "Microcontroller", definition: "CPU + RAM + ROM + I/O + timers on one chip, for dedicated control." },
              { term: "Embedded system", definition: "A computer inside a product - dedicated function, real-time, firmware-driven." },
              { term: "Firmware", definition: "Software stored in the device's own ROM/flash; the product's personality." },
            ],
            diagram: {
              kind: "compare",
              title: "Microprocessor system vs microcontroller",
              caption: "Scale versus integration - the two answers to 'put a computer here'.",
              left: {
                heading: "Microprocessor (8086) system",
                items: [
                  "CPU + external RAM/ROM/ports/timers",
                  "8+ chips minimum; buses carry everything",
                  "General-purpose software",
                  "Scales: add memory, add peripherals",
                ],
              },
              right: {
                heading: "Microcontroller (8051)",
                items: [
                  "CPU, RAM, ROM, ports, timers, UART on one die",
                  "One chip + crystal; 40 pins",
                  "Dedicated firmware, one job",
                  "Fixed capacity; lowest cost and power",
                ],
              },
            },
            bullets: [
              "Microprocessor: CPU only; everything else external on the buses.",
              "Microcontroller: complete small computer integrated on one die.",
              "Embedded system: dedicated function, real-time constraints, firmware in ROM.",
              "8051 package: CPU + 4 KB ROM + 128 B RAM + 32 I/O + 2 timers + UART.",
              "Minimum 8086 system ~ 8 chips; minimum 8051 system = 1 chip + crystal.",
              "Design budget: code fits ROM, data fits 128 B, latency bounded by interrupts.",
            ],
            callout: {
              type: "exam",
              title: "Dedicated vs general-purpose",
              body: "The one-line difference examiners want: a microprocessor is general-purpose computing with external resources; a microcontroller is a dedicated controller with everything integrated. Every compare question is a rephrase of that sentence with numbers attached.",
            },
            table: {
              caption: "Chip-count contrast, worked.",
              headers: ["Function", "8086 system", "8051 system"],
              rows: [
                ["CPU", "8086", "on-chip"],
                ["Clock", "8284", "crystal only"],
                ["Address latching", "2 x 8282", "on-chip (ALE internal)"],
                ["I/O", "8255 (24 lines)", "P0-P3 (32 lines)"],
                ["Timers", "8253", "2 x 16-bit on-chip"],
                ["Serial", "8251", "UART on-chip"],
                ["Chips total", "~8", "1"],
              ],
            },
            examQuestions: [
              {
                q: "Differentiate microprocessor and microcontroller, and explain the characteristic requirements of an embedded system with the 8051 as the example.",
                marks: 14,
                outline: [
                  "Microprocessor: CPU on chip, external everything",
                  "Microcontroller: CPU+RAM+ROM+IO+timers integrated",
                  "Embedded properties: dedicated function, real-time, low power, firmware",
                  "Worked chip-count contrast: ~8 chips vs 1 chip",
                  "8051 resources: 4 KB ROM, 128 B RAM, 32 I/O lines, 2 timers, UART",
                  "Budget consequences: code size, byte-counted RAM, bounded latency",
                  "Examples: appliances, instrumentation, automotive controllers",
                ],
              },
              {
                q: "Why do embedded systems favour predictable instruction timing?",
                marks: 7,
                outline: [
                  "Real-time deadlines require bounded worst-case latency",
                  "Predictable cycles make interrupt response computable",
                  "8051: 1/2/4 machine cycles per instruction - worst case known",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "8051 architecture and pin description",
            body: [
              "The 8051 integrates: an 8-bit CPU (ALU, ACC, B, PSW, SP, DPTR), 4 KB of on-chip ROM (8751 = EPROM, 8031 = ROM-less external-only), 128 bytes of RAM, four 8-bit bidirectional ports (P0-P3), two 16-bit timers (T0, T1) each with four modes, a full-duplex UART, five interrupt sources with two priority levels, and an oscillator driving a 12-clock machine cycle (1 microsecond at 12 MHz). The instruction set runs 111 instructions in 1, 2 or 4 machine cycles.",
              "The 40 pins divide into five groups. Power: Vcc, Vss, plus XTAL1/XTAL2 for the crystal. Port 0: open-drain, multiplexed as AD0-AD7 for external memory with ALE separating address from data - it needs external 10 kohm pull-ups when used as general I/O. Port 2: A8-A15 during external fetches, general I/O otherwise. Port 1: pure general I/O. Port 3: general I/O with alternate functions per pin - RXD (P3.0), TXD (P3.1), INT0# (P3.2), INT1# (P3.3), T0 (P3.4), T1 (P3.5), WR# (P3.6), RD# (P3.7).",
              "The control pins complete the picture. ALE/PROG pulses address-latch for external memory (at 1/6 the oscillator rate when idle). PSEN# strobes external program fetches - code space reads use PSEN#, data reads use RD#. EA#/VPP decides where code lives: tied high, the 8051 fetches from internal ROM until 0FFFH then continues external; tied low, all code comes from external memory. RST needs two machine cycles high to reset; the reset vector is 0000H and the stack pointer initializes to 07H.",
              "In the exam, draw the 40-pin diagram with the five groups labelled and quote the four signature numbers - 4 KB ROM, 128 B RAM, 12 clocks per machine cycle, 1 microsecond at 12 MHz. The P3 alternate-function table is the most-asked pin detail; carry it verbatim.",
            ],
            keyTerms: [
              { term: "PSEN#", definition: "Program strobe enable - reads external code memory." },
              { term: "ALE", definition: "Latches the low address byte from P0 during external accesses; 1/6 oscillator rate idle." },
              { term: "EA#", definition: "External access: high = internal ROM first; low = all code external." },
              { term: "Machine cycle", definition: "12 oscillator periods; 1 microsecond at 12 MHz." },
              { term: "Reset vector", definition: "Execution starts at 0000H after reset; SP starts at 07H." },
            ],
            diagram: {
              kind: "layers",
              title: "40 pins, five groups",
              caption: "Power, buses, pure I/O, multifunction I/O, and control - the pin budget of one small computer.",
              layers: [
                { label: "Control", note: "ALE, PSEN#, EA#, RST; Vcc/Vss, XTAL1/2" },
                { label: "Port 3", note: "RXD, TXD, INT0#/INT1#, T0/T1, WR#/RD# alternates" },
                { label: "Port 2", note: "A8-A15 for external memory" },
                { label: "Port 1", note: "general I/O only" },
                { label: "Port 0", note: "AD0-AD7 multiplexed; open-drain, pull-ups for I/O" },
              ],
            },
            bullets: [
              "On-chip: CPU, 4 KB ROM, 128 B RAM, 4 ports, 2 timers, UART, 5 interrupts.",
              "Machine cycle = 12 clocks: 1 microsecond at 12 MHz.",
              "P0 is open-drain and multiplexed (AD0-AD7); needs 10 kohm pull-ups as I/O.",
              "P2 drives A8-A15 in external memory mode.",
              "P3 alternates: RXD, TXD, INT0#, INT1#, T0, T1, WR#, RD#.",
              "EA# high = internal ROM first; EA# low = all-external code via PSEN#.",
            ],
            callout: {
              type: "warning",
              title: "PSEN# vs RD# is code vs data",
              body: "External program fetches assert PSEN#; external data reads assert RD#. Wiring an EPROM to RD# instead of PSEN# is the classic bring-up failure - and the conceptual line examiners probe: two separate address spaces, two separate strobes.",
            },
            table: {
              caption: "Port 3 alternate functions.",
              headers: ["Pin", "Alternate", "Role"],
              rows: [
                ["P3.0", "RXD", "UART receive"],
                ["P3.1", "TXD", "UART transmit"],
                ["P3.2 / P3.3", "INT0# / INT1#", "external interrupts"],
                ["P3.4 / P3.5", "T0 / T1", "timer/counter inputs"],
                ["P3.6 / P3.7", "WR# / RD#", "external data-memory strobes"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the architecture of the 8051 and explain its pin description, grouping the 40 pins by function and listing the Port 3 alternate functions.",
                marks: 14,
                outline: [
                  "Blocks: CPU, 4 KB ROM, 128 B RAM, P0-P3, 2 timers, UART, 5 interrupts",
                  "Machine cycle 12 clocks; 1 microsecond at 12 MHz",
                  "P0: AD0-AD7 multiplexed, open-drain, pull-ups",
                  "P2: A8-A15; P1: plain I/O",
                  "P3 alternates: RXD, TXD, INT0/1, T0/T1, WR/RD",
                  "Control: ALE, PSEN#, EA#, RST; reset vector 0000H, SP = 07H",
                  "EA# high/low code-source rule",
                ],
              },
              {
                q: "What happens on an 8051 reset, and how long must RST stay high?",
                marks: 7,
                outline: [
                  "RST high for 2 machine cycles (24 clocks)",
                  "PC -> 0000H; SP -> 07H; ports latch FFH",
                  "SFRs take reset values; interrupts disabled until IE set",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "8051 I/O ports and their behaviour",
            body: [
              "All four ports are quasi-bidirectional: each pin has an internal pull-up (absent on P0) and an output latch driving an n-channel pull-down. Writing 1 turns the pull-down off and lets the pin float high through the pull-up - so a pin can be read as input only after the latch holds 1. This 'write 1 before reading' discipline is the port behaviour every exam question probes; P0, being open-drain, additionally needs external 10 kohm pull-ups to reach a logic high at all.",
              "Reads come in two flavours that matter: reading the pins (MOV A, P1 reads the physical pin state) versus read-modify-write (ANL P1, A, JBC, SETB read the latch, modify it, write it back). The distinction bites when a load drags a pin low while the latch holds 1: the pin read returns 0, but the latch read returns 1 - and read-modify-write instructions deliberately use the latch so the software's own intent survives the external load.",
              "A worked configuration: use P1.0 as an input switch and P1.1 as an output LED. SETB P1.0 (latch high, enable input); the loop reads the pin (MOV C, P1.0), then drives the LED with CPL P1.1 or MOV P1.1, C. On P0, add the external pull-up network first, else the switch reads floating. Port 3 pins serving alternate functions (say INT0#) still latch 1 by default - the alternate function takes the pin only when its peripheral enables it.",
              "In the exam, explain the quasi-bidirectional mechanism with the write-1-to-read rule, distinguish pin-read from latch-read instructions, and work one switch+LED configuration. The read-modify-write list (ANL, ORL, XRL, JBC, CPL, INC/DEC on a port, SETB/CLR) is the concrete differentiator.",
            ],
            keyTerms: [
              { term: "Quasi-bidirectional", definition: "Internal pull-up + switched pull-down; input requires the latch to hold 1." },
              { term: "Open-drain (P0)", definition: "No internal pull-up - external 10 kohm resistors required for general I/O." },
              { term: "Pin read vs latch read", definition: "MOV A, P1 reads pins; ANL/JBC/CPL read-modify-write the latch." },
              { term: "Write-1-to-read", definition: "Set the port bit before using it as input." },
            ],
            diagram: {
              kind: "flow",
              title: "Using a port pin as input",
              caption: "Latch 1, release the pull-down, read the pin - three moves, in order.",
              steps: [
                { label: "Write 1 to the bit", note: "SETB P1.0" },
                { label: "Pull-down off", note: "pin pulled high internally" },
                { label: "External source decides", note: "switch pulls low or lets it float high" },
                { label: "Read the pin", note: "MOV C, P1.0" },
              ],
            },
            bullets: [
              "Ports P0-P3 are quasi-bidirectional; P0 is open-drain needing external pull-ups.",
              "A pin reads as input only after its latch is written 1.",
              "Pin reads: MOV A, P1. Latch reads: ANL, ORL, CPL, JBC, INC/DEC on ports.",
              "Read-modify-write uses the latch so software intent survives external loads.",
              "P2/P0 serve external memory automatically when EA#/PSEN# cycles run.",
              "Worked: SETB P1.0 then MOV C, P1.0 reads the switch; MOV P1.1, C drives the LED.",
            ],
            callout: {
              type: "exam",
              title: "Why JBC reads the latch",
              body: "JBC P1.0, label clears the bit only if it was 1 - reading the latch, not the pin, so an external load cannot fool the test. Explaining latch-vs-pin with JBC as the example is the standard 3-mark follow-up in port questions.",
            },
            table: {
              caption: "Pin-read vs latch-read (read-modify-write) instructions.",
              headers: ["Class", "Instructions", "Source read"],
              rows: [
                ["Pin read", "MOV A, P1; MOV C, P1.0", "physical pin"],
                ["Read-modify-write", "ANL/ORL/XRL P1, A", "latch"],
                ["Bit RMW", "SETB/CLR/CPL/JBC P1.x", "latch"],
                ["Byte RMW", "INC/DEC/DJNZ P1", "latch"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the quasi-bidirectional behaviour of 8051 ports, the difference between pin reads and read-modify-write latch reads, and the special requirements of Port 0.",
                marks: 14,
                outline: [
                  "Structure: internal pull-up + switched pull-down per pin",
                  "Write 1 before reading a pin as input",
                  "P0 open-drain: external 10 kohm pull-ups mandatory for I/O",
                  "Pin reads: MOV A, P1 returns physical state",
                  "RMW instructions (ANL, JBC, CPL, INC) read the latch",
                  "Why latch reads: software intent survives external loads",
                  "Worked switch/LED configuration on P1",
                ],
              },
              {
                q: "A program reads P1.1 as always 0 although the switch is open. Diagnose and fix.",
                marks: 7,
                outline: [
                  "Latch bit was 0 - pull-down held the pin low",
                  "Fix: SETB P1.1 before the read loop",
                  "P0 case: also add the external pull-up",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Memory organization: internal RAM, SFRs and external memory",
            body: [
              "The 8051 sees three address spaces. Internal data RAM: 128 bytes at 00H-7FH, partitioned into 32 bytes of register banks (00H-1FH - four banks of R0-R7, selected by RS1-RS0 in PSW), 16 bytes bit-addressable (20H-2FH - all 128 bits individually settable, bit addresses 00H-7FH), and 80 bytes of general scratch (30H-7FH, where the stack grows upward from SP = 07H unless moved). Special Function Registers occupy 80H-FFH in the same internal space, accessed by direct addressing only.",
              "The SFR map is the register file of the machine: ACC (E0H), B (F0H), PSW (D0H), SP (81H), DPTR = DPH (83H) + DPL (82H), the ports P0-P3 (80H/90H/A0H/B0H), timer registers TMOD (89H), TCON (88H), TH0/TL0 (8CH/8AH), TH1/TL1 (8DH/8BH), serial SCON (98H) and SBUF (99H), and interrupt IE (A8H) and IP (B8H). The bit-addressable SFRs (ports, ACC, PSW, TCON, SCON, IE, IP) respond to bit addresses 80H-FFH - SETB EA is really a bit write to A8H.",
              "External memory extends the machine. External data (64 KB) is reached by MOVX A, @DPTR or @Ri with RD#/WR# strobes and P0/P2 carrying the address; external code (64 KB) is read by MOVC A, @A+DPTR (or @A+PC) with PSEN#. The two MOVC/MOVX families are the exam shorthand for 'code space vs data space' - and the EA# pin decides whether low code addresses hit internal ROM or external EPROM.",
              "In the exam, draw the internal RAM map with its three partitions and bit-address boundaries, list the key SFRs with addresses, and state the MOVX/MOVC pairing with their strobes. The bit-addressability rule - bytes 20H-2FH and the bit-addressable SFRs, bits addressed 00H-FFH - is the detail most often probed.",
            ],
            keyTerms: [
              { term: "Register banks", definition: "Four sets of R0-R7 at 00H-1FH; RS1/RS0 in PSW select the active bank." },
              { term: "Bit-addressable area", definition: "20H-2FH - 128 individually addressable bits (00H-7FH)." },
              { term: "SFR", definition: "Special Function Registers at 80H-FFH; direct addressing only." },
              { term: "MOVX / MOVC", definition: "External data access (RD#/WR#) vs external code access (PSEN#)." },
              { term: "DPTR", definition: "16-bit data pointer (DPH:DPL) for MOVX and MOVC indirect addressing." },
            ],
            diagram: {
              kind: "layers",
              title: "Internal data memory, top to bottom",
              caption: "SFRs, scratch, bit-addressable bytes, register banks - one 256-byte space, four purposes.",
              layers: [
                { label: "80H-FFH: SFRs", note: "ACC, B, PSW, SP, DPTR, ports, timers, serial, IE/IP" },
                { label: "30H-7FH: scratch + stack", note: "general RAM; SP starts 07H" },
                { label: "20H-2FH: bit-addressable", note: "128 bits, addresses 00H-7FH" },
                { label: "00H-1FH: register banks", note: "4 banks x R0-R7; RS1/RS0 select" },
              ],
            },
            bullets: [
              "128 B internal RAM: banks 00-1FH, bit area 20-2FH, scratch 30-7FH.",
              "SFRs at 80H-FFH; direct addressing only; several are bit-addressable.",
              "PSW's RS1/RS0 switch register banks - fast context switch for ISRs.",
              "Bit addresses 00H-7FH map to 20H-2FH; 80H-FFH to bit-addressable SFRs.",
              "MOVX A, @DPTR: external data with RD#/WR#; MOVC A, @A+DPTR: code with PSEN#.",
              "EA# high: internal ROM below 1000H; EA# low: all code external.",
            ],
            callout: {
              type: "tip",
              title: "Bank switching is the fast context save",
              body: "An ISR can switch to register bank 1 with one instruction (SETB RS0 equivalent - MOV PSW trick) instead of pushing eight registers. Mentioning bank-switch-as-context-save in interrupt answers shows architectural fluency beyond memorization.",
            },
            table: {
              caption: "Essential SFR map.",
              headers: ["SFR", "Address", "Role"],
              rows: [
                ["ACC / B", "E0H / F0H", "accumulator / multiply-divide register"],
                ["PSW", "D0H", "flags + register-bank select"],
                ["SP", "81H", "stack pointer (reset 07H)"],
                ["DPH/DPL", "83H / 82H", "DPTR high/low"],
                ["TMOD/TCON", "89H / 88H", "timer mode / control"],
                ["SCON/SBUF", "98H / 99H", "serial control / buffer"],
                ["IE / IP", "A8H / B8H", "interrupt enable / priority"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the internal memory organization of the 8051 with the register banks, bit-addressable area, stack region and SFRs, and show how a bit in 25H.3 is addressed.",
                marks: 14,
                outline: [
                  "00H-1FH: four register banks, RS1/RS0 select",
                  "20H-2FH bit-addressable; bit address = (byte - 20H) x 8 + bit",
                  "25H.3 -> bit 2BH; SETB 2BH or SETB 25H.3",
                  "30H-7FH scratch; stack grows up from SP = 07H",
                  "SFRs 80H-FFH, direct addressing only; list key ones",
                  "Bit-addressable SFRs respond at 80H-FFH bit space",
                  "External: MOVX (data, RD#/WR#) vs MOVC (code, PSEN#)",
                ],
              },
              {
                q: "Differentiate MOVX and MOVC with their memory spaces and control strobes.",
                marks: 7,
                outline: [
                  "MOVX: external data memory, RD#/WR# strobes, @DPTR or @Ri",
                  "MOVC: external code memory, PSEN# strobe, @A+DPTR / @A+PC",
                  "EA# decides internal ROM vs external for low code addresses",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "8051 interrupts and addressing modes",
            body: [
              "Five interrupt sources exist: INT0# (external, vector 0003H), timer 0 overflow TF0 (000BH), INT1# (0013H), timer 1 overflow TF1 (001BH), and the serial interrupt RI/TI (0023H). The IE register enables each (and EA globally); IP assigns two priority levels. Vectors are fixed eight bytes apart - just enough for an LJMP to the real handler - and on entry the hardware pushes PC only; registers and PSW must be saved in software (or handled by register-bank switching).",
              "The addressing-mode set covers the whole machine. Immediate (#data, #data16 for DPTR); register (R0-R7 in the active bank); direct (an 8-bit internal address - the only way to touch SFRs); register indirect (@R0/@R1 for internal RAM, @DPTR for external via MOVX); indexed (MOVC A, @A+DPTR/@A+PC for code tables); and bit addressing (direct bit 00H-FFH, or bit-in-byte notation 25H.3). Each mode has one sweet spot: immediates for constants, registers for speed, direct for SFRs, indirect for buffers, indexed for lookup tables, bits for flags.",
              "A worked interrupt trace: TF0 overflows with IE.7 = EA, IE.1 = ET0 set and IP.1 set (high priority). The hardware clears TF0, pushes PC, jumps to 000BH; the handler executes LJMP TIMER0_ISR; the ISR switches to bank 1 (no register pushes needed), reloads TH0/TL0 for the next period, clears the flag source logic, and returns with RETI (not RET - RETI re-enables the interrupt logic). Forgetting RETI or failing to reload a mode-2 timer are the two classic bugs.",
              "In the exam, tabulate the five vectors, decode IE/IP bits, and classify instructions by addressing mode with one example each. The RETI-vs-RET distinction and the eight-byte vector spacing are the two details that always carry marks.",
            ],
            keyTerms: [
              { term: "Interrupt vectors", definition: "0003H, 000BH, 0013H, 001BH, 0023H - INT0, TF0, INT1, TF1, serial." },
              { term: "IE / IP", definition: "Interrupt enable (EA + five sources) and priority registers." },
              { term: "RETI", definition: "Return from interrupt - restores the interrupt logic, unlike RET." },
              { term: "Direct addressing", definition: "The only mode that reaches SFRs; operand is an 8-bit internal address." },
              { term: "Indexed addressing", definition: "MOVC A, @A+DPTR - lookup tables in code space." },
            ],
            diagram: {
              kind: "matrix",
              title: "Addressing modes by purpose",
              caption: "Each mode owns one job class - match the operand to the mode and the code writes itself.",
              axes: { x: "Where the operand lives", y: "Typical use" },
              quadrants: [
                { label: "Immediate #data", note: "constants: MOV A, #30H" },
                { label: "Register Rn / direct", note: "speed vs SFR access: MOV R0, A / MOV 90H, A" },
                { label: "Indirect @Ri, @DPTR", note: "buffers and external RAM" },
                { label: "Indexed + bit", note: "code tables MOVC; flag bits SETB 25H.3" },
              ],
            },
            bullets: [
              "Five sources with fixed vectors 0003H, 000BH, 0013H, 001BH, 0023H.",
              "IE enables (EA global); IP sets two priority levels.",
              "Hardware pushes PC only - software saves registers or switches banks.",
              "Vectors are 8 bytes apart: LJMP at the vector to reach the real handler.",
              "RETI must close ISRs - RET leaves the interrupt logic blocked.",
              "Addressing modes: immediate, register, direct, indirect, indexed, bit.",
            ],
            callout: {
              type: "warning",
              title: "RETI, not RET",
              body: "Ending an ISR with RET works once - then the interrupt system believes a routine is still running and blocks same/lower priorities forever. The RETI-vs-RET distinction is the most reliable trick question in Unit V; answer it cold.",
            },
            table: {
              caption: "8051 interrupt map.",
              headers: ["Source", "Vector", "Enable bit", "Priority bit"],
              rows: [
                ["INT0#", "0003H", "EX0 (IE.0)", "PX0 (IP.0)"],
                ["TF0", "000BH", "ET0 (IE.1)", "PT0 (IP.1)"],
                ["INT1#", "0013H", "EX1 (IE.2)", "PX1 (IP.2)"],
                ["TF1", "001BH", "ET1 (IE.3)", "PT1 (IP.3)"],
                ["Serial RI/TI", "0023H", "ES (IE.4)", "PS (IP.4)"],
              ],
            },
            examQuestions: [
              {
                q: "List the 8051 interrupt sources with their vector addresses, explain IE and IP programming, and describe the sequence inside a timer-0 ISR including register preservation.",
                marks: 14,
                outline: [
                  "Five sources: INT0, TF0, INT1, TF1, serial with vectors 0003H-0023H",
                  "IE: EA global + individual enables; IP: two priority levels",
                  "Hardware action: clear flag, push PC, jump to vector",
                  "LJMP from the 8-byte vector slot to the handler",
                  "Register save: push or register-bank switch",
                  "Reload timer (mode 2 auto-reload or TH/TL rewrite)",
                  "RETI closes the ISR - never RET",
                ],
              },
              {
                q: "Classify the 8051 addressing modes with one instruction example each, and state which mode alone can access SFRs.",
                marks: 7,
                outline: [
                  "Immediate: MOV A, #30H",
                  "Register: MOV A, R0",
                  "Direct: MOV 90H, A (only mode for SFRs)",
                  "Indirect: MOV A, @R0 / MOVX A, @DPTR",
                  "Indexed: MOVC A, @A+DPTR",
                  "Bit: SETB 25H.3",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Overview of the 8051 instruction set",
            body: [
              "The 8051 executes 111 instructions in six groups, mirroring the 8086's taxonomy at smaller scale. Data transfer: MOV (internal, immediate, register, direct), MOVX (external data), MOVC (code tables), PUSH/POP, XCHG/XCHD, and the port read-modify-writes. Arithmetic: ADD/ADDC, SUBB, INC/DEC, MUL AB (B:ACC = A x B), DIV AB (A = quotient, B = remainder), DA A (decimal adjust after BCD add), and the comparison CJNE family that also sets carry as a less-than flag.",
              "Logic and bit operations: ANL/ORL/XRL (byte and bit forms), CPL/CLR/SETB, the rotates RL/RR/RLC/RRC (one-bit only), SWAP (nibble exchange), and the JB/JNB/JBC/JC/JNC conditional-bit jumps. Program flow: LJMP/AJMP/SJMP, JMP @A+DPTR (the jump-table instruction), all conditional byte jumps (JZ/JNZ, DJNZ, CJNE), LCALL/ACALL/RET/RETI, and NOP. Timing is the design currency: most instructions take 1 machine cycle (1 microsecond at 12 MHz), MOVX/MOVC and MUL/DIV take 2 or 4 - the budget every delay and deadline calculation spends.",
              "A worked delay loop shows the arithmetic. DJNZ R2, $ costs 2 machine cycles per pass: with R2 = 250 the inner loop is 500 microseconds; wrapping it in a second DJNZ (outer count 4) gives 2 ms - the two-line delay generator every lab uses. The jump-table pattern for a 4-way command dispatch: MOV DPTR, #TABLE; RL A (double the index for 2-byte entries); JMP @A+DPTR dispatches without a single compare.",
              "In the exam, structure the answer by the six groups with two instructions each, quote the MUL/DIV register placement (B:ACC and A/B), and show one timing computation. DA A after BCD addition, CJNE's carry-as-less-than trick, and JMP @A+DPTR dispatch are the three connoisseur details that lift an answer.",
            ],
            keyTerms: [
              { term: "MUL AB", definition: "Unsigned multiply: B:ACC = A x B - 16-bit product across two registers." },
              { term: "DIV AB", definition: "Unsigned divide: A = quotient, B = remainder." },
              { term: "DA A", definition: "Decimal adjust after ADD/ADDC for packed BCD arithmetic." },
              { term: "CJNE", definition: "Compare and jump if not equal; carry set when the first operand is smaller." },
              { term: "JMP @A+DPTR", definition: "Indexed jump - the jump-table dispatch instruction." },
            ],
            diagram: {
              kind: "fork",
              title: "Six instruction groups of the 8051",
              caption: "The same taxonomy as the 8086, scaled to a chip - classify, then recall.",
              start: "8051 instruction set (111 instructions)",
              branches: [
                { label: "Data transfer", outcome: "MOV, MOVX, MOVC, PUSH/POP, XCHG", good: true },
                { label: "Arithmetic", outcome: "ADD/ADDC/SUBB, MUL AB, DIV AB, DA A, CJNE", good: true },
                { label: "Logic + bit", outcome: "ANL/ORL/XRL, CLR/SETB/CPL, rotates, SWAP", good: true },
                { label: "Program flow", outcome: "LJMP/SJMP, JZ/DJNZ/CJNE, LCALL/RET/RETI, JMP @A+DPTR", good: true },
                { label: "Boolean + control", outcome: "bit jumps JB/JNB/JBC/JC/JNC; NOP", good: true },
              ],
            },
            bullets: [
              "111 instructions; 1 machine cycle typical (1 microsecond at 12 MHz).",
              "MOVX/MOVC 2 cycles; MUL/DIV 4 cycles - quote in timing budgets.",
              "MUL AB leaves the 16-bit product in B:ACC; DIV AB leaves quotient/remainder in A/B.",
              "DA A fixes packed-BCD addition; use after every ADD of BCD data.",
              "CJNE sets carry as a less-than flag - a compare with a free branch.",
              "DJNZ R2, $ is the 2-cycle-per-pass delay primitive.",
            ],
            callout: {
              type: "tip",
              title: "DJNZ is the timing workhorse",
              body: "Every delay calculation in 8051 papers starts from DJNZ's 2 machine cycles per pass. R2 = 250 gives a 500 microsecond inner loop at 12 MHz - nest once for milliseconds, twice for tens of milliseconds.",
            },
            codeExample: {
              language: "assembly",
              caption: "Two-level delay and a jump-table dispatch",
              code: `; ~2 ms delay at 12 MHz
      MOV  R3, #4          ; outer
OUTER:
      MOV  R2, #250        ; inner
INNER: DJNZ R2, INNER      ; 2 us/pass -> 500 us
      DJNZ R3, OUTER       ; x4 -> 2 ms

; jump-table dispatch: A = 0..3
      MOV  DPTR, #TABLE
      RL   A               ; index x2 for 2-byte LJMPs
      JMP  @A+DPTR
TABLE: LJMP CMD0
       LJMP CMD1
       LJMP CMD2
       LJMP CMD3`,
            },
            examQuestions: [
              {
                q: "Give an overview of the 8051 instruction set by groups with example instructions, and compute the delay of a two-level DJNZ loop with inner count 250 and outer count 4 at 12 MHz.",
                marks: 14,
                outline: [
                  "Six groups with two examples each",
                  "MUL AB -> B:ACC; DIV AB -> A quotient, B remainder",
                  "DA A for BCD; CJNE carry-as-less-than",
                  "JMP @A+DPTR jump tables",
                  "DJNZ costs 2 machine cycles/pass",
                  "Inner: 250 x 2 us = 500 us; outer x4 = 2 ms",
                  "Timing classes: 1 cycle typical, 2 for MOVX/MOVC, 4 for MUL/DIV",
                ],
              },
              {
                q: "Write the instruction sequence to exchange the nibbles of ACC and multiply two BCD digits using MUL AB.",
                marks: 7,
                outline: [
                  "SWAP A exchanges nibbles of ACC",
                  "MOV B, #value; MUL AB",
                  "Result: B holds high byte, ACC low byte",
                  "DA A only after BCD addition, not multiplication",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Microcontrollers in embedded systems",
            body: [
              "An embedded design is a budgeting exercise followed by firmware. The flow: specify the job (inputs, outputs, timing deadlines), choose the variant (8051/8751/8031 by ROM needs; 8052 doubles RAM and adds timer 2), allocate resources (which port, which timer, which interrupt), write firmware (assembly for tight timing, C for structure), and debug in-circuit (emulator, monitor ROM, or serial printf-style traces). Power matters throughout: the 8051's idle mode (PCON.0) stops the CPU but keeps timers and interrupts alive; power-down (PCON.1) stops the oscillator entirely, waking only by reset.",
              "The canonical worked design - a temperature monitor: an ADC feeds P1 (data) and P3 control lines; timer 0 in mode 1 interrupts every 50 ms (reload 15536 = 3CB0H for 50 ms at 12 MHz); the ISR reads the ADC, filters (a running average in internal RAM), converts to BCD, and multiplexes the digits on P2/P0. Resources: one timer, one interrupt source, 32 I/O lines, roughly 60 bytes of RAM - all inside the 8051's native budget, which is exactly why the 8051 remains the teaching controller.",
              "Production considerations close the loop. Code lives in ROM/OTP/flash depending on volume; watchdog timers (external or 8052's timer-based) recover from firmware hangs; EMC and debouncing discipline come from Unit III's interfacing rules. The migration path matters too: 8031 (external ROM) for prototyping, 8751 (EPROM) for pilots, mask 8051 for volume - the economics every embedded-project question wants in its conclusion.",
              "In the exam, present the design flow as six named stages, work the timer-reload arithmetic for a stated period, and close with the variant selection and power modes. The reload computation - 65536 - period-in-microseconds, converted to hex - is the numerical core of every embedded-design question.",
            ],
            keyTerms: [
              { term: "Idle / power-down", definition: "PCON modes: CPU stopped (timers alive) vs oscillator stopped (reset wakes)." },
              { term: "Timer reload", definition: "Mode 1 count = 65536 - period-in-microseconds at 12 MHz." },
              { term: "Watchdog", definition: "Timer that resets the system when firmware stops kicking it." },
              { term: "In-circuit emulation", definition: "Debugging with a substitute chip driving the real socket." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Embedded design flow",
              caption: "Specify, choose, allocate, write, debug, produce - the six stages every project walks.",
              stages: [
                { label: "Specify", note: "I/O, deadlines, power budget" },
                { label: "Choose variant", note: "8051/8751/8031/8052" },
                { label: "Allocate resources", note: "ports, timers, interrupts" },
                { label: "Write firmware", note: "assembly or C" },
                { label: "Debug in-circuit", note: "emulator / monitor / traces" },
                { label: "Produce", note: "ROM economics; watchdog for field safety" },
              ],
            },
            bullets: [
              "Design flow: specify, choose variant, allocate, write, debug, produce.",
              "Variants: 8031 external ROM, 8751 EPROM, mask 8051 volume, 8052 more RAM + timer 2.",
              "Timer 0 mode 1 reload for 50 ms at 12 MHz: 65536 - 50000 = 15536 = 3CB0H.",
              "Idle mode (PCON.0) keeps timers running; power-down (PCON.1) stops the clock.",
              "Watchdog recovery is mandatory in fielded firmware.",
              "Worked monitor design: ADC on P1, timer ISR every 50 ms, display on P2/P0.",
            ],
            callout: {
              type: "exam",
              title: "The reload formula",
              body: "Mode 1 period arithmetic: count = 65536 - (period in microseconds) at 12 MHz, then split into TH/TL. Work 50 ms -> 15536 -> TH = 3CH, TL = B0H once, and every 'design an interrupt period' question becomes the same three lines.",
            },
            codeExample: {
              language: "assembly",
              caption: "Timer 0 ISR skeleton for a 50 ms tick",
              code: `ORG  000BH            ; TF0 vector
      LJMP T0ISR
      ...
T0ISR:
      CLR  TR0            ; stop while reloading
      MOV  TH0, #3CH      ; 15536 = 3CB0H -> 50 ms
      MOV  TL0, #0B0H
      SETB TR0
      ; read ADC, filter, update display...
      RETI`,
            },
            examQuestions: [
              {
                q: "Describe how a microcontroller such as the 8051 is used in an embedded system: the design flow, a worked timer-period calculation, and the role of power-saving modes.",
                marks: 14,
                outline: [
                  "Flow: specify, choose variant, allocate, write, debug, produce",
                  "Variant choice: 8031/8751/8051/8052 by ROM and RAM needs",
                  "Worked: timer 0 mode 1 for 50 ms -> reload 15536 = 3CB0H",
                  "ISR skeleton: stop, reload TH/TL, restart, work, RETI",
                  "Resource budget: ports, one timer, one interrupt, ~60 B RAM",
                  "Idle vs power-down via PCON and their wake paths",
                  "Watchdog for field reliability",
                ],
              },
              {
                q: "Compare idle mode and power-down mode of the 8051: what stops, what survives, and how does each wake?",
                marks: 7,
                outline: [
                  "Idle (PCON.0): CPU halted; timers, serial, interrupts alive",
                  "Wake: any enabled interrupt",
                  "Power-down (PCON.1): oscillator stopped; RAM content held",
                  "Wake: hardware reset only",
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
      weightedTopics: [
        { topic: "8086 architecture: BIU/EU, registers, addressing", weight: "≈ 10-14 marks", note: "Guaranteed; draw the architecture and compute segment:offset." },
        { topic: "Minimum/maximum mode signals and timing", weight: "≈ 8-10 marks", note: "T1-T4 narration plus the mode-compare table." },
        { topic: "Instruction set + addressing modes + programs", weight: "≈ 12-14 marks", note: "One full program (add/largest/block move) with skeleton." },
        { topic: "8255 modes and control-word decoding", weight: "≈ 10 marks", note: "Decode 90H-style words bit by bit; handshake lines." },
        { topic: "8253 modes + 8259A ICW/OCW + vector arithmetic", weight: "≈ 10-12 marks", note: "Numericals: divide-by-N and IR-to-vector computation." },
        { topic: "8257 DMA transfer cycle", weight: "≈ 6-8 marks", note: "DRQ->HRQ->HLDA->DACK sequence; count-minus-one." },
        { topic: "8051 architecture, ports, memory, interrupts", weight: "≈ 10-12 marks", note: "Pin groups, quasi-bidirectional ports, vector table, RETI." },
        { topic: "ADC/DAC interfacing with numbers", weight: "≈ 6-8 marks", note: "2.5 V -> 7FH round trip; waveform frequency arithmetic." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for writing programs and timing diagrams by hand. Every architecture fact should end up as a drawing - the 8086 blocks, the T1-T4 waveforms, the 8255 ports - because these papers reward diagrams more than prose.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the 8086 machine", tasks: ["RISC/CISC table + evolution table filled from memory", "Register file with hidden roles; segment:offset arithmetic drill", "Draw BIU/EU; work three physical-address computations", "Minimum-mode T1-T4 timing diagram; READY/Tw insertion"] },
        { week: "Week 2", focus: "Unit II - programming", tasks: ["Six instruction groups with flags affected", "Addressing-mode table with effective-address formulas", "Stack frame trace: CALL, PUSH BP, RET n", "Write SUM.ASM, largest-of-array, and a delay program by hand"] },
        { week: "Week 3", focus: "Unit III - interfacing", tasks: ["8155 blocks; 8255 control-word decode drills (90H, 80H, BSR words)", "Keyboard scan flow + debounce numbers", "ADC 2.5 V -> 7FH worked example; DAC waveform frequencies", "Memory decode equation for a given map + wait-state arithmetic"] },
        { week: "Week 4", focus: "Unit IV - support chips", tasks: ["8253 six modes table; 1.193 MHz -> 1 kHz worked control word", "8259A IRR/ISR/IMR; ICW1-4 sequence; IR3 -> 002CH vector math", "8257 DRQ->TC sequence; 1 KB config with 3FFH count", "8251 mode word 4DH decode; 9600-baud throughput arithmetic"] },
        { week: "Week 5", focus: "Unit V - the 8051", tasks: ["Pin groups + P3 alternate functions", "Internal RAM map; bit-address arithmetic (25H.3 -> 2BH)", "Interrupt vectors + IE/IP; RETI discipline", "DJNZ delay arithmetic; timer reload 50 ms -> 3CB0H"] },
        { week: "Week 6", focus: "Revision + papers", tasks: ["Redraw all anchor diagrams from memory", "Two full past-pattern papers under time", "Program skeletons: SUM, array scan, ADC read, 8253 init", "Slip list review; mode-word and control-word decode drills"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every architecture answer with its diagram: BIU/EU blocks, 8255 ports, 8259A registers, 8051 pin groups. The drawing earns half the marks.",
        "For timing questions, narrate T1-T4 in one line per state before drawing - examiners mark the narration.",
        "Always decode control/mode words field by field, one line per bit field - 90H for the 8255, 4DH for the 8251, 36H for the 8253.",
        "Attach numbers to everything: 200 ns per T-state, 100 microsecond ADC conversion, 19.6 mV steps, 17 clocks per LOOP, 2 clocks per DJNZ.",
        "State the segment-default table (BX/SI/DI -> DS, BP -> SS) in any addressing-mode answer.",
        "For interrupt questions, write the vector arithmetic chain: IR line -> type number -> address = type x 4.",
        "Programs follow the skeleton: segments, DS init, body with comments, DOS exit (or RETI in 8051 ISRs).",
        "Time-box: 7-mark questions get at most 12 minutes, 14-mark ones at most 22; leave 10 minutes to redraw diagrams cleanly.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: redraw the seven anchor diagrams (8086 architecture, minimum-mode timing, 8255 modes, 8253 mode table, 8259A registers, 8257 DMA cycle, 8051 pin/memory maps), re-decode the four signature words (8255 90H, 8253 36H, 8251 4DH, 8259A ICW1 11H), and re-run the four numerical drills (segment:offset, ADC 2.5 V, 8259A vector, 8051 timer reload). No new material tonight - consolidation wins this subject.",
      ],
      bullets: [
        "Quoting MUL results without the DX:AX placement - write the register map first.",
        "Drawing wait states inserted at T2 instead of the T3/T4 boundary - READY is sampled late in T3.",
        "Forgetting MOV AX, DATA / MOV DS, AX in programs - the classic silent failure.",
        "Using JGE for unsigned comparisons (or JAE for signed) in array scans.",
        "Writing 400H instead of 3FFH in the 8257 terminal-count register - count is size minus one.",
        "Ending an 8051 ISR with RET instead of RETI - the interrupt system stays blocked.",
        "Loading the 8253 MSB before the LSB after promising LSB-then-MSB in the control word.",
        "Saying the 8086 queue is 4 bytes - it is 6, sized to the longest instruction.",
        "Omitting the external latch in DAC interfaces - the output glitches on every bus cycle.",
        "Confusing PSEN# (code) with RD# (data) when wiring external 8051 memory.",
        "Claiming P0 needs no pull-ups - it is open-drain; 10 kohm external resistors are mandatory for I/O.",
        "Forgetting that count 0 in the 8253 means 65536 - the maximum-divide quirk.",
      ],
    },
  ],
};
