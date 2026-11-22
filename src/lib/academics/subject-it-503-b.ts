import type { AcademicSubject } from "./types";

export const it503b: AcademicSubject = {
  id: "it-503-b",
  code: "IT-503(B)",
  title: "Microprocessor and Interfacing",
  semester: "V Semester",
  program: "RGPV · Information Technology",
  tagline:
    "One connected story of the silicon under every screen: how the 8086 fetches and executes, how its instructions encode and set flags, how programs and interface chips wire it to switches, timers, interrupts and disks, and how memory from SRAM to virtual paging keeps it all fed.",
  description:
    "Five units walk the syllabus end to end. Unit I evolves the microprocessor from the 4-bit 4004 to the 80486 and dissects the 8086 itself: the BIU/EU split, the register file, the eight addressing modes, the arithmetic-logic core, program control with the stack, procedures and macros. Unit II opens the machine cycle and the bus timing, encodes raw instruction bytes, sets the status flags, contrasts assembly with high-level languages, builds stack frames and macros, and carries the story to the Pentium through Pentium 4. Unit III writes real programs — 8/16-bit addition and subtraction with carries — then partitions addresses, decodes memory chips, weighs polling against interrupt and DMA, configures the 8255, meets the 8051 microcontroller and the 8087 math coprocessor. Unit IV is the peripheral zoo: 8279 keyboard/display, 8254 timer, 8259A interrupt controller, 8237 DMA, 16550 and 8251 serial engines, CRT and floppy controllers, and the ISA-to-USB bus ladder. Unit V grounds it all in memory: SRAM and DRAM cells, the ROM family, semiconductor technology and shift registers, magnetic tape and disk, cache and virtual memory, and the 2^n arithmetic of addressing capacity. Every section pairs a worked example with one diagram, a table or code, a callout, key terms and examiner-style questions with full outlines.",
  accentColor: "#f43f5e",
  emoji: "MP",
  unitCount: 5,
  totalSections: 37,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Evolution of Microprocessors and the 8086 Family",
      summary:
        "Unit I tells the origin story and the anatomy: how the microprocessor evolved from the 4004 to the 80486, how single-chip microcomputers diverge from it, where microprocessors are applied, the two-unit 8086 architecture with its register file and prefetch queue, the eight addressing modes, the arithmetic and logic instruction families with their flags, program control through the stack with procedures and macros, and the system concepts the 80286, 80386 and 80486 added.",
      chapter: {
        number: "01",
        title: "From Evolution to the 8086 Family",
        intro:
          "Unit I covers the evolution of microprocessors and single-chip microcomputers, microprocessor application areas, the 8086 architecture and its registers, addressing modes, arithmetic and logic instructions, program control instructions with the stack plus procedures and macros, and the 80286/80386/80486 microprocessor system concepts.",
        inOneBreath:
          "A microprocessor is a CPU on one chip; the 8086 splits into a BIU that fetches and an EU that executes, joined by a 6-byte queue; physical address = segment x 10h + offset; every operand comes from the instruction, a register, or an effective address computed from BX/BP/SI/DI; arithmetic sets CF/OF/SF/ZF/AF/PF while logic clears CF and OF; CALL pushes a return address the LIFO stack keeps; 286 added protection, 386 added 32 bits and paging, 486 added on-chip cache and FPU.",
        sections: [
          {
            number: "1.1",
            title: "Evolution of microprocessors and single-chip microcomputers",
            body: [
              "A microprocessor is a complete CPU — control unit, ALU and registers — fabricated on a single silicon chip. The evolution is a steady widening of the data path: Intel's 4004 (1971) processed 4 bits with about 2300 transistors and powered calculators; the 8080 and 8085 (1974-1976) made 8-bit computing with a 64 KB address space practical; the 8086 (1978) doubled the path to 16 bits and mapped 1 MB through 20 address lines; the 80286, 80386 and 80486 then added memory protection, 32-bit processing and on-chip caching. Each generation preserved the instruction set of the last, which is why 8086 code written in 1980 still assembles today.",
              "The numbers make the ladder concrete. The 8086 runs at 5-10 MHz with 29000 transistors and addresses 2^20 = 1 MB; the 80486 integrates 1.2 million transistors, an 8 KB cache and the whole math coprocessor on one die, at 25-100 MHz. The single-chip microcomputer (microcontroller) diverges here: instead of a CPU alone, it puts CPU, ROM, RAM, parallel ports and timers on one package — the 8048 family, then the 8051 — trading address space for instant boot, few pins and one-part cost. A 4-bit calculator core and an 8051 washing-machine controller are the same idea at two scales.",
              "Exam questions on evolution ask for the ladder with data widths and address spaces, or for the microprocessor-versus-microcontroller contrast, so learn one number per chip. The data-width spine is 4 -> 8 -> 16 -> 32 bits; the address-space spine is 64 KB -> 1 MB -> 16 MB -> 4 GB; the transistor spine is 2300 -> 29000 -> 134000 -> 275000 -> 1.2 million. The table below is the whole 7-mark answer in six rows — redraw it from memory, attach the year column as garnish, and close with the microcontroller divergence in two sentences.",
            ],
            keyTerms: [
              { term: "Microprocessor", definition: "A complete CPU — control unit, ALU, registers — on a single chip." },
              { term: "Single-chip microcomputer", definition: "A microcontroller: CPU + ROM + RAM + I/O ports + timer integrated on one die." },
              { term: "8086", definition: "Intel's 16-bit CPU (1978): 29000 transistors, 20 address lines, 1 MB space, the x86 ancestor." },
              { term: "Address space", definition: "The memory a CPU can name, 2^(address lines): 64 KB, 1 MB, 16 MB, 4 GB up the ladder." },
              { term: "Backward compatibility", definition: "Each x86 generation executes its predecessor's instruction set — the family's binding rule." },
            ],
            bullets: [
              "Evolution: 4004 (4-bit, 1971) -> 8080/8085 (8-bit) -> 8086 (16-bit, 1 MB) -> 80286 (16 MB) -> 80386 (32-bit, 4 GB) -> 80486 (cache + FPU).",
              "Every generation preserved the earlier instruction set — x86 code is a 1978 artifact that still runs.",
              "Single-chip microcomputer = CPU + ROM + RAM + I/O ports + timer on one die.",
              "Microcontrollers trade address space for pin count, boot time and cost — the 8051 is the archetype.",
              "Two number-spines to memorize: data width (4/8/16/32 bits) and address space (64 KB/1 MB/16 MB/4 GB).",
              "The 8088 (1979) is the 8086 with an 8-bit external bus — the chip inside the IBM PC.",
            ],
            diagram: {
              kind: "flow",
              title: "From 4 bits to 32 bits",
              caption: "The Intel ladder — every step kept the last step's instructions.",
              steps: [
                { label: "4004 (1971)", note: "4-bit, ~2300 transistors — calculator brains" },
                { label: "8080 / 8085 (1974-76)", note: "8-bit, 64 KB space — hobby computing" },
                { label: "8086 / 8088 (1978-79)", note: "16-bit, 1 MB space — the PC's 8088 engine" },
                { label: "80286 (1982)", note: "16 MB, protected mode arrives" },
                { label: "80386 (1985)", note: "32-bit, 4 GB, paging" },
                { label: "80486 (1989)", note: "on-chip cache + FPU, pipelined" },
              ],
            },
            table: {
              caption: "The Intel x86 ladder.",
              headers: ["Chip", "Year", "Data bus", "Address bits", "Memory space", "Milestone"],
              rows: [
                ["4004", "1971", "4-bit", "12", "program + RAM mix", "first CPU on a chip"],
                ["8080 / 8085", "1974 / 1976", "8-bit", "16", "64 KB", "hobby computing, CP/M"],
                ["8086 / 8088", "1978 / 1979", "16 / 8-bit", "20", "1 MB", "the IBM PC's engine"],
                ["80286", "1982", "16-bit", "24", "16 MB", "protected mode"],
                ["80386", "1985", "32-bit", "32", "4 GB", "paging, virtual-8086 mode"],
                ["80486", "1989", "32-bit", "32", "4 GB", "cache + FPU on chip"],
              ],
            },
            callout: {
              type: "tip",
              title: "Two spines beat ten dates",
              body: "Examiners want the ladder, not trivia. Memorize the data-width spine (4 -> 8 -> 16 -> 32 bits) and the address-space spine (64 KB -> 1 MB -> 16 MB -> 4 GB); every chip name then has its place, and the year column is optional garnish.",
            },
            examQuestions: [
              {
                q: "Trace the evolution of Intel microprocessors from the 4004 to the 80486. For each generation give the year, data width, address space and the one capability that made it new.",
                marks: 7,
                outline: [
                  "4004 (1971): 4-bit, first CPU on a chip, calculator origin",
                  "8080/8085: 8-bit, 64 KB space, hobby computing era",
                  "8086: 16-bit, 20 address lines, 1 MB, 29000 transistors",
                  "80286: 16 MB, protected mode with descriptors",
                  "80386: 32-bit, 4 GB, paging and virtual-8086 mode",
                  "80486: on-chip 8 KB cache, integrated FPU, 5-stage pipeline",
                  "Close: each generation preserved the previous instruction set",
                ],
              },
              {
                q: "Differentiate a microprocessor from a single-chip microcomputer with block diagrams and one example of each. Why does a washing machine use the latter?",
                marks: 7,
                outline: [
                  "Microprocessor: CPU alone; memory and I/O are external chips",
                  "Microcontroller: CPU + ROM + RAM + ports + timer on one die",
                  "Microprocessor system example: 8086 + EPROM + RAM + 8255",
                  "Microcontroller example: 8051 with 4 KB ROM, 128 B RAM, 4 ports",
                  "Washing machine: one fixed program, few I/O lines, instant boot",
                  "Trade-off: address space and flexibility vs pins, cost and power",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Microprocessor applications",
            body: [
              "A microprocessor's application is any task that turns signals into decisions: the chip samples inputs, computes on them and drives outputs at speeds no wiring of gates could sustain. Four families dominate the syllabus's list: test and instrumentation (logic analysers, data loggers, multimeters), communication (modems, exchanges, protocol handlers), computing (PCs, servers, workstations) and control (industrial PLCs, CNC machines, automotive and appliance controllers). The control family is where single-chip microcomputers take over, because one fixed program and a handful of I/O lines are all the job needs.",
              "One example earns the marks: a data logger. An 8-bit microprocessor reads an ADC every 10 ms, stores readings in RAM, checks each against limits and pulses an alarm line — three of the four families appear at once, since the instrument samples, the log travels over a communication link and the limit check is control. Contrast the washing machine: an 8051 reads the door and pressure switches, runs the wash sequence from on-chip ROM and drives pump and motor ports; nothing is computed beyond thresholds, so a 4 KB controller replaces an entire microcomputer system board.",
              "The exam lists areas and asks for examples with reasons: answer area -> device -> what the processor does, one line each. The 2x2 below maps every area by computing load and real-time tightness — appliances sit bottom-right (hard timing, light compute) and industrial control top-right (both heavy), and naming a quadrant with its devices is the quickest complete answer to any 'list the applications' question.",
            ],
            keyTerms: [
              { term: "Application area", definition: "Instrumentation, communication, computing or control — the four canonical homes of the microprocessor." },
              { term: "Real-time", definition: "A deadline the system must meet for the result to be useful — hard in control, soft in computing." },
              { term: "Data logger", definition: "An instrument that samples a sensor periodically, stores and checks readings — one example spanning three application areas." },
              { term: "Embedded control", definition: "A processor buried inside a machine, running one fixed program as part of the machine's function." },
              { term: "PLC", definition: "Programmable Logic Controller — an industrial microprocessor system that sequences machinery from sensor inputs." },
            ],
            diagram: {
              kind: "matrix",
              title: "Where microprocessors earn their keep",
              caption: "Plot an application by computing load and timing tightness; each quadrant names its devices.",
              axes: { x: "Real-time tightness (soft -> hard)", y: "Computing load (light -> heavy)" },
              quadrants: [
                { label: "Workstations, PCs, servers", note: "heavy compute, soft timing — run whatever you load" },
                { label: "Industrial control, robots, avionics", note: "heavy compute, hard timing — PLCs, CNC, flight control" },
                { label: "Test instruments, modems", note: "light compute, soft timing — analysers, loggers" },
                { label: "Appliances, automotive control", note: "light compute, hard timing — washers, engine units" },
              ],
            },
            bullets: [
              "Test/instrumentation: sampling, measurement, display — analysers, loggers, meters.",
              "Communication: conversion, routing, error checking — modems, exchanges.",
              "Computing: operating systems and applications — PC, server, workstation.",
              "Control: sensing and actuating in real time — PLC, CNC, automotive, appliance.",
              "Control-heavy, compute-light jobs belong to microcontrollers; compute-heavy jobs to full microprocessor systems.",
              "A data-logger example touches three areas at once — a ready-made exam answer.",
            ],
            table: {
              caption: "Application areas with typical machines.",
              headers: ["Area", "Typical device", "What the processor does"],
              rows: [
                ["Test and instrumentation", "logic analyser, multimeter", "samples signals, computes and displays readings"],
                ["Communication", "modem, PBX exchange", "converts, routes and checks data streams"],
                ["Computing", "PC, server, workstation", "runs operating systems, compilers, applications"],
                ["Industrial control", "PLC, CNC machine", "reads sensors, drives motors in real time"],
                ["Consumer", "washer, TV remote", "runs one fixed control program forever"],
              ],
            },
            callout: {
              type: "exam",
              title: "Name the device, not the field",
              body: "An answer that stops at 'used in communication' scores half. Write the device (modem, PBX, analyser) and the processor's action (converts, routes, samples); the pairing area -> device -> action is what the mark scheme counts.",
            },
            examQuestions: [
              {
                q: "List the major application areas of microprocessors. Give two example devices for each area and state what the processor does in each.",
                marks: 7,
                outline: [
                  "Test and instrumentation: analyser, logger — samples and displays",
                  "Communication: modem, exchange — converts, routes, checks",
                  "Computing: PC, server — runs OS and applications",
                  "Industrial control: PLC, CNC — senses and actuates in real time",
                  "Consumer: washer, remote — one fixed control program",
                  "Close with the compute-load vs real-time quadrant mapping",
                ],
              },
              {
                q: "Contrast the microprocessor's role in a data logger with its role in a washing machine controller. Which uses a microcontroller and why?",
                marks: 7,
                outline: [
                  "Data logger: periodic ADC sampling, storage, limit checks, alarm output",
                  "It spans instrumentation, communication and control at once",
                  "Washing machine: switch reading, fixed sequence, pump/motor drive",
                  "Nothing computed beyond thresholds — a 4 KB 8051 suffices",
                  "Microcontroller wins on pins, boot time, cost and power",
                  "Full microprocessor system wins on memory space and flexibility",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Microprocessor and its architecture — inside the 8086",
            body: [
              "The 8086 divides into two cooperating units. The Bus Interface Unit (BIU) owns the buses: it computes 20-bit physical addresses from the segment registers, prefetches up to 6 instruction bytes into a queue, and feeds them to the Execution Unit (EU), which decodes and executes with its 16-bit ALU. The register file: four general registers AX, BX, CX, DX (each split into AH/AL-style halves), four pointer and index registers SP, BP, SI, DI, four segment registers CS, DS, ES, SS, the instruction pointer IP, and a 16-bit flag register holding CF, PF, AF, ZF, SF, TF, IF, DF and OF.",
              "Segmentation is the architecture's arithmetic heart: physical address = segment x 10h + offset. With CS = 2000h and IP = 01F0h the BIU computes 20000h + 01F0h = 201F0h — a 16-bit segment shifted left four bits plus a 16-bit offset, produced by a dedicated adder on every bus access. The queue overlaps fetch with execute: while the EU multiplies, the BIU is already reading the next 6 bytes, which is why any jump flushes the queue and pays a refill penalty in clocks.",
              "The architecture question — 'explain the internal architecture of the 8086 with a block diagram' — is the unit's guaranteed 14-mark item. Draw the two units, label every register with size and job, show the queue and the address adder, then narrate one instruction's journey from fetch to flags: bytes enter the queue, the EU decodes, operands come from registers or a computed EA, the ALU acts, flags latch. The layers diagram and the register table below are that answer's skeleton.",
            ],
            keyTerms: [
              { term: "BIU", definition: "Bus Interface Unit — segment registers, IP, address adder and 6-byte prefetch queue; owns all bus traffic." },
              { term: "EU", definition: "Execution Unit — general and pointer registers, 16-bit ALU and flags; decodes and executes." },
              { term: "Instruction pointer (IP)", definition: "16-bit offset of the next instruction inside the code segment CS." },
              { term: "Segment register", definition: "CS, DS, ES, SS — 16-bit bases shifted left 4 bits to build 20-bit physical addresses." },
              { term: "Prefetch queue", definition: "Six instruction bytes the BIU reads ahead; a jump or call flushes it." },
            ],
            diagram: {
              kind: "layers",
              title: "Inside the 8086",
              caption: "Two cooperating halves: the BIU feeds, the EU consumes.",
              layers: [
                { label: "Memory and I/O subsystem", note: "1 MB space reached through the 20-bit bus" },
                { label: "Bus Interface Unit (BIU)", note: "CS/DS/ES/SS, IP, address adder, 6-byte prefetch queue" },
                { label: "Execution Unit (EU)", note: "AX/BX/CX/DX, SP/BP/SI/DI, 16-bit ALU, flag register" },
              ],
            },
            bullets: [
              "BIU: segment registers + IP + address adder + 6-byte prefetch queue; owns all bus traffic.",
              "EU: AX/BX/CX/DX + SP/BP/SI/DI + 16-bit ALU + flags; executes what the queue delivers.",
              "Physical address = segment x 10h + offset; CS:IP, SS:SP, DS:SI are the working pairs.",
              "Registers are 16-bit with addressable halves: AX = AH:AL, CX = CH:CL.",
              "The queue makes execution overlap fetch; any jump discards its contents.",
              "Nine flags: CF PF AF ZF SF report results; TF IF DF steer stepping, interrupts, string direction.",
            ],
            table: {
              caption: "The 8086 register file.",
              headers: ["Register", "Size", "Job"],
              rows: [
                ["AX, BX, CX, DX", "16-bit (AH/AL halves)", "accumulators and counts; BX also serves as a base register"],
                ["SP, BP", "16-bit", "stack pointer and frame base — both default to SS"],
                ["SI, DI", "16-bit", "string source and destination indices"],
                ["CS, DS, ES, SS", "16-bit segment bases", "code, data, extra data and stack segments"],
                ["IP", "16-bit", "instruction pointer — offset inside CS"],
                ["FLAGS", "16-bit (9 used)", "CF PF AF ZF SF TF IF DF OF"],
              ],
            },
            callout: {
              type: "tip",
              title: "The adder is the point",
              body: "Draw the dedicated address adder inside the BIU. Examiners look for it: it is the piece that turns segment x 10h + offset into a 20-bit bus address on every access, and it is the most-missed box in student diagrams.",
            },
            examQuestions: [
              {
                q: "Draw the internal block diagram of the 8086 and explain the functions of the BIU, the EU, the register file and the prefetch queue. Compute the physical address for CS = 2000h, IP = 01F0h.",
                marks: 14,
                outline: [
                  "Two-unit split: BIU (bus side) and EU (execution side)",
                  "BIU: segment registers, IP, dedicated address adder, 6-byte queue",
                  "EU: AX/BX/CX/DX with AH/AL halves, SP/BP/SI/DI, ALU, flags",
                  "Physical address = segment x 10h + offset; 20000h + 01F0h = 201F0h",
                  "Queue overlaps fetch with execute; jumps flush it",
                  "Flag register: CF PF AF ZF SF (status) + TF IF DF (control)",
                ],
              },
              {
                q: "Explain the role of the segment registers and the instruction pointer. Why does a JMP instruction slow the processor even though it is short?",
                marks: 7,
                outline: [
                  "CS:IP pair names the next instruction's physical address",
                  "SS:SP and SS:BP serve the stack; DS serves data references",
                  "Segment x 10h + offset computed per bus access by the BIU adder",
                  "The queue holds 6 prefetched bytes of the old instruction stream",
                  "A JMP discards them — the pipeline refills from the new address",
                  "Refill cost shows up as extra clocks (JMP short = 15 clocks)",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Addressing modes of the 8086",
            body: [
              "An addressing mode is the rule that says where an instruction's operand lives. The 8086 offers eight: immediate (data in the instruction — MOV AX, 1234h), register (MOV AX, BX), direct (a 16-bit displacement — MOV AX, [1234h]), register indirect (MOV AX, [BX]), based (MOV AX, [BX+04h]), indexed (MOV AX, [SI+04h]), based-indexed (MOV AX, [BX+SI+10h]) and implied/string (MOVSB, whose operands DS:SI and ES:DI are fixed by the opcode). Immediate and register are fastest because no bus cycle is spent on the operand; every memory mode pays an effective-address (EA) computation on top of the memory access itself.",
              "EA arithmetic is the exam's favourite numeric. With DS = 1000h, BX = 0200h and SI = 0030h, the instruction MOV AX, [BX+SI+10h] computes EA = 0200h + 0030h + 0010h = 0240h, then physical address = DS x 10h + EA = 10000h + 0240h = 10240h, and the word from 10240h-10241h lands in AX (little-endian: low byte at 10240h, high byte at 10241h). One rule catches everyone: BX, SI and DI default to DS, but BP defaults to SS — MOV AX, [BP+04h] reads the stack frame, not the data segment.",
              "A 14-mark answer names all eight modes, gives a two-operand example of each, and computes one EA end to end with the segment default stated. A 7-mark version picks four modes and does the arithmetic. The fork below is the decision tree to redraw in the margin: ask where the operand lives, follow the branch, and the example writes itself.",
            ],
            keyTerms: [
              { term: "Effective address (EA)", definition: "The 16-bit offset within a segment: base + index + displacement, each optional." },
              { term: "Immediate addressing", definition: "The operand travels inside the instruction — MOV AX, 1234h." },
              { term: "Based-indexed addressing", definition: "EA = BX (or BP) + SI (or DI) + optional displacement — two-dimensional table access." },
              { term: "Default segment", definition: "BX/SI/DI references use DS; BP and SP use SS; instruction fetch uses CS." },
              { term: "Implied (string) addressing", definition: "Operands fixed by the opcode: DS:SI source, ES:DI destination." },
            ],
            diagram: {
              kind: "fork",
              title: "Where does the operand live?",
              caption: "Four branches cover all eight modes; memory branches pay the EA computation.",
              start: "Fetch an operand",
              branches: [
                { label: "Inside the instruction", outcome: "immediate — MOV AX, 1234h carries the data itself", good: true },
                { label: "In a register", outcome: "register — MOV AX, BX, 2 clocks, no memory visit", good: true },
                { label: "At a fixed address", outcome: "direct — MOV AX, [1234h]; EA is the displacement", good: true },
                { label: "EA computed from registers", outcome: "indirect / based / indexed / based-indexed — MOV AX, [BX+SI+10h]", good: true },
              ],
            },
            bullets: [
              "Immediate and register: operand inside the instruction or a register — no memory cycle.",
              "Direct: 16-bit displacement -> DS:disp; register indirect: [BX], [SI], [DI] (BP means SS).",
              "Based/indexed: register + displacement; based-indexed: BX+SI/DI (+ disp) for tables.",
              "String instructions carry no operand field: DS:SI -> ES:DI is implied.",
              "EA = base + index + displacement; physical = segment x 10h + EA.",
              "Default segments: BX/SI/DI -> DS, BP/SP -> SS, IP -> CS.",
            ],
            codeExample: {
              language: "asm",
              caption: "modes.asm — every addressing mode in one listing",
              code: `MOV AX, 1234h       ; immediate       - data inside the instruction
MOV AX, BX          ; register        - no memory touch, 2 clocks
MOV AX, [1234h]     ; direct          - physical = DS*10h + 1234h
MOV AX, [BX]        ; register indirect - physical = DS*10h + BX
MOV AX, [BX+04h]    ; based           - DS:BX+4 (BP would mean SS)
MOV AX, [SI+04h]    ; indexed         - DS:SI+4
MOV AX, [BX+SI+10h] ; based-indexed   - DS:BX+SI+10h
MOVSB               ; implied/string  - DS:SI -> ES:DI, no operand field`,
            },
            callout: {
              type: "warning",
              title: "BP is the trap",
              body: "MOV AX, [BP+04h] reads SS, not DS — BP exists to reach stack frames. Writing 'defaults to DS' for BP is the most common wrong line in addressing-mode answers; state the default segment for every memory operand you show.",
            },
            examQuestions: [
              {
                q: "Explain all eight addressing modes of the 8086 with one example each. Compute the physical address accessed by MOV AX, [BX+SI+10h] for DS = 1000h, BX = 0200h, SI = 0030h, stating every default used.",
                marks: 14,
                outline: [
                  "Immediate: MOV AX, 1234h — data rides in the instruction",
                  "Register: MOV AX, BX — fastest, no bus cycle",
                  "Direct: MOV AX, [1234h] — EA is the 16-bit displacement",
                  "Register indirect / based / indexed: [BX], [BX+04h], [SI+04h]",
                  "Based-indexed: [BX+SI+10h]; implied: MOVSB uses DS:SI, ES:DI",
                  "EA = 0200h + 0030h + 0010h = 0240h",
                  "Physical = 10000h + 0240h = 10240h; BX/SI default to DS",
                ],
              },
              {
                q: "Given DS = 4000h, SS = 5000h, BX = 0100h, BP = 0200h and DI = 0010h, compute the physical addresses reached by MOV AX, [BX+DI] and MOV AX, [BP+DI]. Why do the segments differ?",
                marks: 7,
                outline: [
                  "[BX+DI]: EA = 0100h + 0010h = 0110h, segment DS",
                  "Physical = 40000h + 0110h = 40110h",
                  "[BP+DI]: EA = 0200h + 0010h = 0210h, segment SS",
                  "Physical = 50000h + 0210h = 50210h",
                  "BP's default segment is SS because BP serves stack frames",
                  "BX and DI default to DS for data",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Arithmetic and logic instructions",
            body: [
              "Arithmetic instructions compute in the ALU and publish the verdict in flags: ADD and ADC add with and without carry, SUB and SBB subtract with and without borrow, INC and DEC step by one, NEG two's-complement negates, CMP subtracts and stores nothing (flags only), and MUL, IMUL, DIV, IDIV multiply and divide in unsigned or signed forms. Logic instructions manipulate bits: AND, OR, XOR, NOT and TEST (an AND that stores nothing), plus shifts SHL, SHR, SAR and rotates ROL, ROR, RCL, RCR, which move CF around the byte. After AND, OR, XOR or TEST the CF and OF are cleared; SF, ZF and PF reflect the byte produced.",
              "Two traces anchor the family. Sixteen-bit addition: 3B74h + 2C4Ah = 67BEh with no carry out of bit 15, so CF = 0, SF = 0, ZF = 0 — the JNC after the ADD falls through. Multiplication: MUL BL with AL = 05h and BL = 04h leaves AX = 0014h and CF = OF = 0, because the high half is zero; had AL been 30h, AX = 0960h and CF = OF = 1 would announce that the product spilled past 8 bits. INC and DEC are the curious pair — they change every flag except CF, which survives unchanged for multi-byte chains.",
              "Exams ask for the instruction set split by function with flag effects, or a small program annotated with register contents. The table below is the complete classification — quote one flag fact per row and the answer reads as mastery rather than recitation. The compare diagram is the second half: arithmetic publishes overflow and carry; logic clears them; both set SF, ZF and PF from the byte they produce.",
            ],
            keyTerms: [
              { term: "CMP", definition: "Subtract without storing — exists purely to set flags for a following conditional jump." },
              { term: "TEST", definition: "AND without storing — probes bits via ZF without touching the operand." },
              { term: "Multi-precision arithmetic", definition: "Chaining ADD into ADC and SUB into SBB to compute wider than 16 bits." },
              { term: "Rotate vs shift", definition: "Shifts push bits out through CF; rotates recycle them — no bit is lost." },
              { term: "Two's complement", definition: "The signed encoding NEG produces; OF signals when it overflows the range." },
            ],
            diagram: {
              kind: "compare",
              title: "Arithmetic vs logic instructions",
              caption: "Both families publish SF/ZF/PF; only arithmetic reports carry and overflow.",
              left: {
                heading: "Arithmetic — ADD ADC SUB SBB INC DEC NEG CMP MUL IMUL DIV IDIV",
                items: [
                  "CF and OF report unsigned and signed overflow",
                  "SF/ZF/PF/AF set from the result",
                  "MUL: AL x BL -> AX; DIV: AX / BL -> AL quotient, AH remainder",
                  "CMP subtracts but stores nothing — flags only",
                ],
              },
              right: {
                heading: "Logic — AND OR XOR NOT TEST SHL SHR SAR ROL ROR RCL RCR",
                items: [
                  "CF and OF cleared after AND/OR/XOR/TEST",
                  "SF/ZF/PF set from the byte produced",
                  "TEST is AND without storing — the flag probe",
                  "Shifts move bits through CF; rotates recycle them",
                ],
              },
            },
            bullets: [
              "ADD/ADC and SUB/SBB: the carry and borrow variants chain 16-bit operations into 32-bit math.",
              "CMP = SUB without storing; TEST = AND without storing — both exist for their flags only.",
              "MUL: AL x BL -> AX; CF = OF = 1 signals a non-zero high half.",
              "DIV: AX / BL -> AL quotient, AH remainder; divide-by-zero raises interrupt type 0.",
              "Logic ops clear CF/OF and set SF/ZF/PF; NOT touches no flags at all.",
              "INC/DEC leave CF unchanged — the exception that keeps multi-precision counting clean.",
            ],
            table: {
              caption: "Arithmetic and logic instructions and their flags.",
              headers: ["Instruction", "Action", "Flags of note"],
              rows: [
                ["ADD / ADC", "add with / without carry", "CF OF SF ZF AF PF all set from the result"],
                ["SUB / SBB / CMP", "subtract with / without borrow", "same as ADD; CMP stores nothing"],
                ["INC / DEC", "add / subtract one", "no CF change — the carry-preserved exception"],
                ["NEG", "two's-complement negate", "CF = 1 unless the operand was 0"],
                ["MUL / IMUL", "unsigned / signed multiply", "CF = OF = 1 when the high half is non-zero"],
                ["DIV / IDIV", "divide AX (or DX:AX)", "flags undefined; quotient overflow raises type 0"],
                ["AND / OR / XOR / TEST", "bitwise logic", "CF = OF = 0; SF ZF PF from the result"],
              ],
            },
            callout: {
              type: "exam",
              title: "Flags are the answer's currency",
              body: "For every arithmetic or logic instruction you quote, attach the flags it sets. 'CMP sets ZF when the operands are equal' is a marked sentence; an instruction listed bare earns half.",
            },
            examQuestions: [
              {
                q: "Classify the 8086's arithmetic and logic instructions with the flags each group affects. Trace AL = 05h, MUL BL with BL = 04h, showing every register and flag afterwards.",
                marks: 7,
                outline: [
                  "ADD/ADC, SUB/SBB/CMP: full flag set; INC/DEC spare CF",
                  "NEG: CF = 1 unless operand 0; MUL/DIV: overflow conventions",
                  "Logic: CF = OF = 0, SF/ZF/PF from result; NOT flag-silent",
                  "Shifts vs rotates: CF as exit vs recycled bit",
                  "MUL trace: AL = 05h, BL = 04h -> AX = 0014h",
                  "CF = OF = 0 because the high half AH = 0",
                ],
              },
              {
                q: "Write instruction sequences to add and to subtract two 16-bit numbers stored in memory, using ADC and SBB to report overflow. Explain why INC/DEC leaving CF unchanged matters here.",
                marks: 7,
                outline: [
                  "MOV AX, NUM1; ADD AX, NUM2; MOV SUM, AX",
                  "ADC DX, DX folds the carry bit into DX",
                  "SUB low word; MOV result; SBB high word chains the borrow",
                  "JC / JNC after the sequence reports unsigned overflow",
                  "INC/DEC leave CF intact, so they adjust pointers mid-chain",
                  "If INC cleared CF, the next ADC would read a corrupted carry",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Program control instructions, the stack, procedures and macros",
            body: [
              "Program control instructions rewrite the IP (and CS for far forms). JMP transfers unconditionally — short (within -128 to +127 bytes), near (same segment) or far (new CS:IP). Conditional jumps test flags: JZ/JNZ on ZF, JC/JNC on CF, JS/JNS on SF, JP/JNP on PF, JO/JNO on OF, and the comparison pairs JG/JL/JGE/JLE for signed operands and JA/JB/JAE/JBE for unsigned. LOOP decrements CX and jumps while CX is non-zero. CALL pushes a return address and RET pops it; INT n and IRET do the same through the interrupt vector table, with FLAGS pushed as well.",
              "The stack is the mechanism under it all: a LIFO region in SS pointed by SP, growing toward lower addresses. PUSH AX with SP = 2012h first decrements SP to 2010h, then writes AX at SS:2010h; POP reverses both steps. A near CALL with SP = 2010h costs two bytes: SP falls to 200Eh and the return IP is stored there, to be restored by RET. Procedures are called at run time (one copy in memory); macros are pasted by the assembler wherever invoked (fast, but code repeats). Microprogramming, the syllabus's other M-word, sits below the instruction set — the control-store code that implements each machine instruction — and is never visible to the programmer.",
              "Draw the stack before and after for any CALL answer; the two-byte movement of SP is the mark. Keep the trio distinct in one line each: procedure (CALL/RET at run time), macro (assembly-time inline expansion), microprogram (hardware level below the instruction set). Conditional-jump questions reward naming the flag each jump reads — pair every Jcc with its flag and the answer closes itself.",
            ],
            keyTerms: [
              { term: "Stack pointer (SP)", definition: "Offsets the stack top inside SS; PUSH decrements it by 2 first, POP increments after." },
              { term: "Near/far CALL", definition: "Near pushes IP only (2 bytes); far pushes CS then IP (4 bytes)." },
              { term: "LOOP instruction", definition: "CX <- CX - 1, jump while CX != 0; LOOPE/LOOPNE also test ZF." },
              { term: "Macro expansion", definition: "Assembler-pasted inline text wherever the macro is invoked — no call, no stack." },
              { term: "Microprogramming", definition: "Control-store code implementing each machine instruction — below the programmer's view." },
            ],
            diagram: {
              kind: "pipeline",
              title: "What a near CALL does to the stack",
              caption: "Two bytes of SP movement each step — the return address is the contract.",
              stages: [
                { label: "SP = 2010h", note: "stack top before the call" },
                { label: "SP <- SP - 2", note: "room made for the return address" },
                { label: "IP saved", note: "return offset written at SS:200Eh" },
                { label: "IP loaded", note: "procedure address begins executing" },
                { label: "RET pops", note: "IP restored, SP back to 2010h" },
              ],
            },
            bullets: [
              "JMP short/near/far: -128..+127 bytes, same segment, or a new CS:IP.",
              "Conditional jumps read flags only — they never set them.",
              "LOOP: CX <- CX - 1, jump while CX != 0 (LOOPE/LOOPNE also test ZF).",
              "near CALL pushes IP (2 bytes); far CALL pushes CS then IP (4 bytes); IRET also pops FLAGS.",
              "Stack grows downward: PUSH decrements SP by 2 first, then stores.",
              "Procedure = one copy called at run time; macro = expanded at assembly time; microprogram = the level below the instruction set.",
            ],
            codeExample: {
              language: "asm",
              caption: "stack.asm — the return address in action",
              code: `PUSHR   MACRO           ; macro: expanded inline where written
        PUSH AX
        PUSH BX
        ENDM
;
        PUSH AX          ; SP 2012h -> 2010h, [SS:2010h] = AX
        CALL NEAR PTR P  ; SP -> 200Eh, [SS:200Eh] = return IP
P:      PUSHR            ; two pushes appear here in the .OBJ
        RET              ; IP restored from [SS:200Eh]
        POP AX           ; SP back to 2012h`,
            },
            callout: {
              type: "warning",
              title: "RET n is not RET",
              body: "RET 4 pops the return address and adds 4 to SP, discarding two pushed parameters — the cleanup half of a stack-passed calling convention. Writing plain RET for such a procedure leaks the stack; the n is part of the convention, not decoration.",
            },
            examQuestions: [
              {
                q: "Explain the 8086 stack mechanism with PUSH, POP, CALL and RET. Trace SP and memory contents for PUSH AX (SP = 2012h) followed by a near CALL and its RET.",
                marks: 7,
                outline: [
                  "Stack = LIFO at SS:SP, growing downward",
                  "PUSH: SP <- SP - 2 first, then store the word",
                  "PUSH AX: SP 2012h -> 2010h, AX at SS:2010h",
                  "near CALL: SP -> 200Eh, return IP stored there",
                  "RET: IP loaded from SS:200Eh, SP back to 2010h",
                  "POP AX: SP -> 2012h — the pairing rule",
                ],
              },
              {
                q: "Differentiate procedures, macros and microprogramming with one example of each, and state when the code-size trade-off favours a macro.",
                marks: 7,
                outline: [
                  "Procedure: one memory copy, CALL/RET at run time",
                  "Macro: assembler expands inline wherever invoked",
                  "Microprogram: control-store level implementing machine instructions",
                  "Macro example: PUSHR expanding to PUSH AX / PUSH BX",
                  "Trade-off: macro wins when the body is tiny and speed matters",
                  "Procedure wins when the body is large or called from many sites",
                ],
              },
              {
                q: "After CMP AX, BX, which flags decide signed and unsigned comparisons? Name two jumps for each.",
                marks: 7,
                outline: [
                  "CMP subtracts and sets flags without storing",
                  "ZF = 1 means equal — JE/JNE work for both interpretations",
                  "Unsigned: CF = 1 means below — JB/JA/JBE/JAE",
                  "Signed: SF xor OF means less — JL/JG/JLE/JGE",
                  "The same CMP serves both; the jump chooses the interpretation",
                  "Mixing the pairs is the classic branch bug",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "80286, 80386 and 80486 system concepts",
            body: [
              "The 80286 (1982) widened the address bus to 24 bits — 16 MB — and introduced protected mode: memory references pass through descriptor tables (GDT and LDT) that carry base, limit and privilege, so one task cannot touch another's memory. The 80386 (1985) made everything 32-bit: 4 GB physical space, 32-bit registers and ALU, and a paging unit that maps 4 KB pages through two-level tables — plus virtual-8086 mode to run old real-mode programs inside protection. The 80486 (1989) integrated the math coprocessor and an 8 KB cache on the die, deepened the pipeline to five stages, and added burst transfers for filling that cache in fewer bus cycles.",
              "Capacity arithmetic: 2^20 = 1 MB (8086), 2^24 = 16 MB (80286), 2^32 = 4 GB (80386/80486). Feature arithmetic: a 33 MHz 486 with a 5-stage pipeline and an on-chip FPU runs the same floating-point code 10-100x faster than an 8086 plus 8087 pair, because no bus trip or WAIT cycle is needed per numeric instruction. The 286's flaw is worth one line: once in protected mode it cannot return to real mode except by processor reset — the 386's virtual-8086 mode is the fix that let DOS coexist with protection. Integration is the tier's real message: fewer chips outside the CPU means fewer bus trips, and the 486's burst cycle feeds its new cache four words per presented address.",
              "The comparison table is the whole answer; the pyramid gives the one-line capability story per tier. A 7-mark question typically asks to compare two adjacent generations — lead with address space and operating modes, follow with integration (cache, FPU, pipeline), and close with the 286's one-way door as the reason the 386 mattered. Name one number per tier — 16 MB, 4 GB, 8 KB cache — and the comparison reads as analysis rather than a list.",
            ],
            keyTerms: [
              { term: "Protected mode", definition: "The 286's mode where references pass through descriptors carrying base, limit and privilege." },
              { term: "Descriptor table", definition: "GDT/LDT — arrays of segment descriptors consulted in protected mode." },
              { term: "Paging", definition: "The 386's mapping of linear to physical addresses in 4 KB pages via two-level tables." },
              { term: "Virtual-8086 mode", definition: "386 mode running real-mode programs as protected tasks — the fix for the 286's one-way door." },
              { term: "On-chip cache", definition: "The 486's 8 KB SRAM holding recent code/data; filled by burst transfers." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Four generations stack capability",
              caption: "Each tier adds a mode or a subsystem the one below lacks.",
              tiers: [
                { label: "80486 — integration", note: "8 KB cache + FPU on chip, 5-stage pipeline" },
                { label: "80386 — 32-bit world", note: "4 GB space, paging, virtual-8086 mode" },
                { label: "80286 — protection", note: "16 MB, protected mode with descriptors" },
                { label: "8086 — the base", note: "16-bit, 1 MB, real mode only" },
              ],
            },
            bullets: [
              "80286: 24 address lines -> 16 MB; protected mode with GDT/LDT; no return to real mode without reset.",
              "80386: 32-bit registers and buses -> 4 GB; paging with 4 KB pages; virtual-8086 mode.",
              "80486: 8 KB on-chip cache + integrated FPU + 5-stage pipeline + burst bus.",
              "Protected mode adds privilege levels and per-task memory limits — the basis of all modern OSes.",
              "Address space doubles the exponent every generation: 2^20, 2^24, 2^32.",
              "486DX2 doubles the internal clock — integration beats raw pin speed.",
            ],
            table: {
              caption: "The x86 generations compared.",
              headers: ["Feature", "8086", "80286", "80386", "80486"],
              rows: [
                ["Data bus", "16-bit", "16-bit", "32-bit", "32-bit"],
                ["Address space", "1 MB", "16 MB", "4 GB", "4 GB"],
                ["Modes", "real only", "real + protected", "+ paging, V86", "+ virtual mode support"],
                ["On-chip cache", "none", "none", "none", "8 KB unified"],
                ["FPU", "8087 chip", "80287 chip", "80387 chip", "integrated"],
                ["Clocks", "5-10 MHz", "6-25 MHz", "16-40 MHz", "25-100 MHz"],
              ],
            },
            callout: {
              type: "tip",
              title: "286's one-way door",
              body: "The 80286 cannot leave protected mode except by processor reset — a famous design regret. The 80386 answers it with virtual-8086 mode: DOS programs run as protected tasks, so switching modes is software, not a reboot.",
            },
            examQuestions: [
              {
                q: "Compare the 80286, 80386 and 80486 in address space, operating modes and on-chip integration. Why is the 386 called the chip that made protected mode practical?",
                marks: 7,
                outline: [
                  "286: 16 MB, protected mode, descriptors, no real-mode return",
                  "386: 4 GB, 32-bit everything, 4 KB paging, V86 mode",
                  "486: same space plus on-chip 8 KB cache and FPU",
                  "V86 mode runs DOS programs as protected tasks",
                  "386's paging gives virtual memory per process",
                  "486's burst bus fills the cache in fewer cycles",
                ],
              },
              {
                q: "Explain protected mode in the 80286 with the role of descriptor tables, and state the 286's mode-switch limitation with the 386's remedy.",
                marks: 7,
                outline: [
                  "References pass through GDT/LDT descriptors, not raw segments",
                  "Descriptors carry base, limit and privilege level",
                  "A task cannot touch memory outside its limits — protection",
                  "Once in protected mode the 286 needs reset to return",
                  "The 386 adds virtual-8086 mode: real-mode code inside protection",
                  "Result: mode switching becomes software, not a reboot",
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
      title: "Microprocessor Cycle, Programming and the Pentium Family",
      summary:
        "Unit II opens the machine: the fetch-decode-execute cycle with the ALU and timing-control units, register data paths and the address bus, the 40-pin configuration with multiplexed buses and min/max modes, instruction encoding with opcode and operand fields and the word-size limitation, the complete 8086 instruction set with data formats, addressing modes and status flags, assembly versus high-level languages and their application areas, stacks and subroutines with macro versus microprogramming, the software-development cycle with debugging and modular, structured, top-down and bottom-up design, and the Pentium family from the first superscalar chip to the Pentium 4.",
      chapter: {
        number: "02",
        title: "The Machine Cycle and the Programmer's Craft",
        intro:
          "Unit II covers the microprocessor cycle with the ALU, timing and control units, register data and the address bus; 8086 pin configuration and bus timing; opcode and operand encoding with the word-size limitation; the 8086 instruction set with data formats, addressing modes, status flags and manual symbols; assembly versus high-level languages and their application areas; stacks, subroutines, macros and microprogramming; software development, debugging and design methodologies; and the Pentium through Pentium 4.",
        inOneBreath:
          "Every instruction cycles fetch-decode-execute with the BIU prefetching into the 6-byte queue; AD0-AD15 carry address in T1 and data in T3-T4, latched by ALE; an instruction is opcode byte + mod-reg-r/m + displacement + immediate; six instruction groups span data movement, arithmetic, bits, strings, control and processor state; assembly maps 1:1 to silicon while high-level languages trade control for portability; CALL builds stack frames, MACRO expands at assembly time, microprogramming implements instructions in control store; Pentium issues two per clock, P6 reorders, NetBurst deepens the pipe.",
        sections: [
          {
            number: "2.1",
            title: "Microprocessor cycle: ALU, timing and control unit, register data",
            body: [
              "The instruction cycle is the repeating triple: fetch (the BIU reads the byte at CS:IP and advances IP), decode (the EU's control logic identifies the operation and its operand sources), execute (the ALU computes or data moves, and flags latch). Inside the chip the ALU is the 16-bit combinational heart, the timing and control unit generates the sequence of internal and bus signals per state, and the register file supplies both operands and destinations. A machine cycle is one bus operation of four T-states; an instruction cycle may span several machine cycles — a memory-writing instruction is fetch plus read plus write.",
              "Clock arithmetic makes 'fast' concrete. MOV AX, BX costs 2 clocks (both operands inside); MOV AX, 1234h costs 4 (the immediate still rides the bus); MOV [2000h], AX costs about 9 + EA clocks (effective-address computation plus the write); MUL BL costs 70-77 — multiply is the family's slowpoke, which is exactly why compilers turn constant multiplies into shifts. At 5 MHz a 2-clock register move takes 400 ns; the same move on a 10 MHz part takes 200 ns. Quoting clocks per instruction is the standard way to justify 'register operations beat memory operations'.",
              "The exam asks for the cycle diagram with the processor's parts labelled, or for clock counts of a small sequence. Draw fetch-decode-execute as a loop, attach the queue note (prefetch overlaps execution; jumps flush it), and annotate two instructions with their clock costs. The table below carries the numbers; one comparison row — 2 clocks versus 70 — is the sentence that earns the analysis mark.",
            ],
            keyTerms: [
              { term: "Instruction cycle", definition: "Fetch -> decode -> execute, repeating for every instruction." },
              { term: "Machine cycle", definition: "One bus operation — four T-states (T1-T4) on the 8086." },
              { term: "T-state", definition: "One clock period of a bus cycle; states are numbered T1..T4." },
              { term: "Timing and control unit", definition: "Generates the internal sequencing and bus signals for each state." },
              { term: "ALU", definition: "The 16-bit combinational logic block that computes and publishes flags." },
            ],
            diagram: {
              kind: "cycle",
              title: "The instruction cycle",
              caption: "Fetch, decode, execute — then the IP points at the next byte and the wheel turns.",
              steps: [
                { label: "Fetch", note: "BIU reads opcode bytes into the queue" },
                { label: "Decode", note: "EU control identifies operation and sources" },
                { label: "Fetch operands", note: "register reads or memory EA computation" },
                { label: "Execute", note: "ALU computes or data moves" },
                { label: "Update", note: "flags latch, results write, IP advances" },
              ],
            },
            bullets: [
              "Instruction cycle = fetch -> decode -> execute; machine cycle = one bus operation of four T-states.",
              "ALU: 16-bit combinational logic; the timing/control unit sequences every state and bus signal.",
              "The 6-byte queue lets fetch overlap execute — jumps flush it and pay the refill.",
              "Register-to-register moves cost ~2-3 clocks; memory operands cost 9+EA clocks and more.",
              "MUL/DIV are the slow instructions (70+ clocks) — shifts replace constant multiplies.",
              "Clock period = 1/frequency: 5 MHz -> 200 ns, so 2 clocks = 400 ns.",
            ],
            table: {
              caption: "Approximate 8086 clock counts.",
              headers: ["Instruction", "Clocks", "Why"],
              rows: [
                ["MOV AX, BX", "2", "register to register, no bus visit"],
                ["MOV AX, 1234h", "4", "the immediate still rides the bus"],
                ["MOV [2000h], AX", "~9 + EA", "EA computation + memory write"],
                ["ADD AX, BX", "3", "the ALU path"],
                ["MUL BL", "70-77", "the multiply's iterative cost"],
                ["JMP short", "15", "queue flush dominates the refill"],
              ],
            },
            callout: {
              type: "tip",
              title: "Queue flush is the hidden cost",
              body: "Every jump, call or interrupt discards the prefetch queue — the next fetch starts cold. That is why JMP short costs 15 clocks for a 2-byte instruction: a few to execute, most to refill the pipe. Mention it and the timing answer is complete.",
            },
            examQuestions: [
              {
                q: "Explain the microprocessor's instruction cycle with the roles of the ALU, the timing and control unit, the register file and the prefetch queue. Illustrate with the journey of one ADD instruction.",
                marks: 7,
                outline: [
                  "Fetch: BIU reads bytes at CS:IP into the queue",
                  "Decode: EU identifies operation and operand sources",
                  "Operand fetch: registers, or EA computation for memory",
                  "Execute: ALU computes; data moves; results write",
                  "Flags latch and IP advances — the loop repeats",
                  "Queue overlaps the next fetch with this execution",
                ],
              },
              {
                q: "Given the clock counts for MOV AX, BX (2), MOV AX, 1234h (4), MOV [2000h], AX (9+EA) and MUL BL (70-77), rank them and justify the ranking. Why do compilers replace constant multiplies with shifts?",
                marks: 7,
                outline: [
                  "Register-only MOV is fastest: operands never leave the chip",
                  "Immediate MOV pays one operand fetch",
                  "Memory MOV pays EA computation plus a bus write",
                  "MUL iterates internally — an order of magnitude slower",
                  "A shift left is one clock; x2, x4, x8 become SHL",
                  "Hence 'shift instead of multiply' for constant factors",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Pin configuration and bus timing of the 8086",
            body: [
              "The 8086 sits in a 40-pin DIP and time-shares its pins to fit. AD0-AD15 carry the low 16 address bits during T1 and data during T3-T4; A16/S3-A19/S6 supply the top four address bits or bus status; ALE pulses in T1 to tell external latches to grab the address. Control pins: RD# and WR# with M/IO# select the operation and the space; DEN# and DT/R# steer the bus transceivers; READY inserts wait states for slow memory; INTR and NMI bring maskable and non-maskable interrupt requests; INTA# acknowledges; HOLD and HLDA arbitrate the bus with DMA; TEST, RESET, CLK and the MN/MX# mode pin complete the set.",
              "A read cycle narrated by T-state: T1 — M/IO# set, the 20-bit address driven, ALE = 1 latches AD0-AD19 into latches, DT/R# = 0; T2 — RD# goes low, DEN# enables the transceivers, the bus turns around; T3 — memory drives data and READY is sampled (a low stretches the cycle with wait states); T4 — data is sampled into the CPU and RD# is released. Minimum mode uses the chip's own control signals; maximum mode delegates them to an 8288 bus controller, freeing pins for multiprocessor cues (LOCK#, QS0-QS1, S0-S2).",
              "Pin-diagram questions want the groups, not the pin numbers: name the multiplexed address/data pins, the status pins, and one control pin per job. The bus-cycle pipeline is the second half of the answer — four stages with ALE at the top. Mention BHE# beside A0 for byte selection and the answer covers the byte-granularity question examiners attach as the follow-up.",
            ],
            keyTerms: [
              { term: "Multiplexed bus", definition: "AD0-AD15 carry address in T1 and data in T3-T4 — 32 functions on 16 pins." },
              { term: "ALE", definition: "Address Latch Enable — the T1 pulse that tells latches to capture the address." },
              { term: "Wait state", definition: "An extra T-state inserted when READY is low, stretching the cycle for slow memory." },
              { term: "Minimum/maximum mode", definition: "MN/MX# selects self-contained control (min) or 8288-controller signalling (max)." },
              { term: "BHE#", definition: "Bus High Enable — selects the odd (high) byte of a 16-bit word, pairing with A0." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A 8086 read bus cycle",
              caption: "Address first, control next, data last — four T-states.",
              stages: [
                { label: "T1", note: "ALE = 1: address on AD0-AD15 latched" },
                { label: "T2", note: "RD# = 0, DEN# = 0 — bus turns around" },
                { label: "T3", note: "memory drives data; READY sampled" },
                { label: "T4", note: "data sampled, RD# released — cycle closes" },
              ],
            },
            bullets: [
              "AD0-AD15: address in T1, data in T3-T4 — ALE latches the address or it is lost.",
              "A16/S3-A19/S6: top address bits or bus status, multiplexed like the rest.",
              "RD#/WR# + M/IO#: read, write, memory-or-port — the three-way operation selector.",
              "READY low inserts wait states so slow memory can keep up.",
              "HOLD/HLDA: DMA or another master borrows the buses; LOCK# forbids the borrow mid-instruction.",
              "MN/MX#: minimum mode = self-contained control; maximum mode = 8288 controller, multiprocessor cues.",
            ],
            table: {
              caption: "Pin groups of the 40-pin 8086.",
              headers: ["Pins", "Name", "Role"],
              rows: [
                ["AD0-AD15", "address/data", "time-multiplexed: address in T1, data in T3-T4"],
                ["A16/S3-A19/S6", "high address / status", "top four address bits or bus status"],
                ["33", "MN/MX#", "min = own control signals; max = 8288 bus controller"],
                ["31-30", "HOLD/HLDA", "bus arbitration with DMA and other masters"],
                ["18 / 17", "INTR / NMI", "maskable and non-maskable interrupt requests"],
                ["22 / 29", "READY / LOCK#", "wait-state insertion; bus lock during an instruction"],
              ],
            },
            callout: {
              type: "warning",
              title: "BHE# and A0 pick the byte",
              body: "A 16-bit bus touching one byte uses BHE# (high byte) and A0 (low byte): both low = whole word, one low = that byte. Forgetting BHE# is why student answers mis-decode odd addresses — quote the pair whenever byte access comes up.",
            },
            examQuestions: [
              {
                q: "Draw the 8086 pin diagram in minimum mode, group the pins by function, and narrate the read bus cycle through its T-states with ALE, RD#, DEN# and READY.",
                marks: 14,
                outline: [
                  "40-pin DIP; AD0-AD15 multiplexed address/data",
                  "A16/S3-A19/S6 carry the top address bits or status",
                  "Control: RD#, WR#, M/IO#, DEN#, DT/R#, ALE",
                  "Arbitration and interrupts: HOLD/HLDA, INTR/NMI/INTA#",
                  "T1: address + ALE latch; T2: RD# low, bus turnaround",
                  "T3: data driven, READY sampled for wait states",
                  "T4: data sampled, RD# released",
                ],
              },
              {
                q: "Why does the 8086 multiplex its address and data pins, and what hardware latches the address? Explain the role of READY and of MN/MX#.",
                marks: 7,
                outline: [
                  "40 pins cannot carry 20 address + 16 data + control separately",
                  "Time-sharing: address in T1, data in T3-T4 on the same lines",
                  "ALE pulses in T1; 74LS373-style latches hold the address",
                  "READY low stretches the cycle with wait states for slow memory",
                  "MN/MX# chooses min (on-chip control) or max (8288) signalling",
                  "Max mode frees pins for LOCK# and multiprocessor status",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Opcode encoding, operands and the word-size limitation",
            body: [
              "Every 8086 instruction is a byte stream: an opcode byte first, then an optional mod-reg-r/m byte, then displacement and immediate data. The opcode carries the operation plus two bookkeeping bits — w (byte or word) and d (which of the two register fields is the destination). The mod-reg-r/m byte packs three fields: mod (2 bits — register-to-register or which displacement class), reg (3 bits — one register) and r/m (3 bits — the other register or the memory-mode selector). The 6-bit opcode space limits the basic operation count, and the 16-bit word size limits the largest native operand — wider data must be built from word-sized steps.",
              "Encoding is arithmetic on three bits at a time. MOV AL, BL assembles to 88 D8: opcode 88h is 'MOV r/m8, r8' (d = 0, so reg is the source), and D8h = 11 011 000 — mod 11 (register-to-register), reg 011 (BL, the source), r/m 000 (AL, the destination). Swap operands and MOV BL, AL becomes 88 C3 — the same bytes with reg and r/m exchanged. Word form: MOV AX, BX = 89 D8; ADD AX, BX = 01 D8 (opcode 01, same codes). Two shortcut families exist for the accumulator: B8+r for immediate-to-register (MOV AX, 1234h = B8 34 12) and A0/A1 for accumulator-direct (MOV AL, [1234h] = A0 34 12).",
              "The exam gives an instruction and asks for its bytes, or the reverse. Practice the three-field split until reading 88 D8 feels like reading text; the layers diagram is the byte layout to draw, and the code block is the worked set to reproduce. State the w and d bits aloud for every byte you decode — the direction bit is where half the marks hide.",
            ],
            keyTerms: [
              { term: "Opcode", definition: "The first byte: 6-bit operation code plus w (width) and d (direction) bits." },
              { term: "mod-reg-r/m byte", definition: "2-3-3 split: addressing mode, one register, register-or-memory selector." },
              { term: "Displacement", definition: "0, 1 or 2 bytes of address offset appended per the mod field." },
              { term: "Word-size limitation", definition: "Native operands stop at 16 bits; 32-bit math is chained 16-bit steps." },
              { term: "Little-endian", definition: "Multi-byte values store low byte first — 1234h appears as 34 12." },
            ],
            diagram: {
              kind: "layers",
              title: "Anatomy of a 8086 instruction",
              caption: "Stacked byte fields, read from the top: opcode to immediate data.",
              layers: [
                { label: "Opcode byte", note: "operation code + w (width) + d (direction)" },
                { label: "mod reg r/m byte", note: "addressing mode, register, register-or-memory" },
                { label: "Displacement bytes", note: "0, 1 or 2 bytes of address offset" },
                { label: "Immediate data", note: "1 or 2 bytes of literal operand" },
              ],
            },
            bullets: [
              "Opcode byte: 6-bit operation + w (8/16-bit) + d (reg is destination when 1).",
              "mod-reg-r/m: mod (11 = registers, else memory + displacement size), reg, r/m.",
              "Word-size limitation: native operands stop at 16 bits; wider math chains words.",
              "Accumulator shortcuts: B8+r (immediate), A0/A1 and A2/A3 (direct) save a byte.",
              "MOV AL, BL = 88 D8; MOV BL, AL = 88 C3 — reg and r/m swap places with the operands.",
              "Displacement is 1 byte (mod 01) or 2 bytes (mod 10); mod 00 means none.",
            ],
            codeExample: {
              language: "asm",
              caption: "encode.txt — reading raw instruction bytes",
              code: `88 D8    MOV AL, BL
         ; 88 = MOV r/m8, r8 (d=0: reg is the source)
         ; D8 = 11 011 000 -> mod=11 reg=BL r/m=AL
89 D8    MOV AX, BX
         ; 89 = word form; same 3-bit codes, w=1
01 D8    ADD AX, BX
         ; 01 = ADD r/m16, r16; reg=BX, r/m=AX
B8 34 12 MOV AX, 1234h
         ; B8+r = immediate to 16-bit register, little-endian
A0 34 12 MOV AL, [1234h]
         ; A0 = accumulator-direct shortcut`,
            },
            callout: {
              type: "tip",
              title: "Three bits, three fields",
              body: "Split the second byte as 2-3-3 and name it: mod decides registers-vs-memory and the displacement size, reg is always a register, r/m is a register or a memory recipe. Any encoding question dissolves once the 2-3-3 split is automatic.",
            },
            examQuestions: [
              {
                q: "Explain the 8086 instruction encoding format. Encode MOV AL, BL, MOV AX, BX and MOV AX, 1234h, showing every field of every byte.",
                marks: 7,
                outline: [
                  "Opcode byte: operation + w + d",
                  "mod-reg-r/m byte: mod, reg, r/m in a 2-3-3 split",
                  "MOV AL, BL = 88 D8: d=0, mod=11, reg=011 (BL), r/m=000 (AL)",
                  "MOV AX, BX = 89 D8: word form, same codes",
                  "MOV AX, 1234h = B8 34 12: accumulator-immediate, little-endian",
                  "Displacement/immediate bytes follow when the fields demand",
                ],
              },
              {
                q: "Decode the machine bytes 88 C3 and A1 34 12 back to mnemonics, and explain the w, d and mod fields you used.",
                marks: 7,
                outline: [
                  "88 = MOV r/m8, r8 with d = 0 (reg is source)",
                  "C3 = 11 000 011: reg=000 (AL), r/m=011 (BL) -> MOV BL, AL",
                  "A1 = MOV AX, [disp16] — accumulator-direct word form",
                  "34 12 is little-endian for 1234h",
                  "mod 11 means register-to-register, no displacement",
                  "w bit picks byte vs word in both cases",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "The 8086 instruction set: data formats, status flags and manual symbols",
            body: [
              "The 8086 instruction set sorts into six groups. Data transfer (MOV, XCHG, LEA, IN, OUT, PUSH, POP) moves operands without touching flags. Arithmetic (ADD through DIV) computes and publishes flags. Bit manipulation (AND, OR, XOR, NOT, TEST, shifts, rotates) edits bits. String instructions (MOVS, CMPS, SCAS, LODS, STOS) repeat under REP and walk DS:SI and ES:DI automatically. Program transfer (Jcc, CALL, RET, LOOP, INT, IRET) rewrites the instruction pointer. Processor control (CLC, STC, CMC, CLI, STI, HLT, NOP, ESC, WAIT, LOCK) steers flags, interrupts and the bus. Data formats are byte and word; the manual's symbols (reg, mem, imm, port) abbreviate the operand classes.",
              "Status flags are the instruction set's report card. Trace SUB AL, 4Ch with AL = 4Ah: the result is FEh, so CF = 1 (borrow out of bit 7 — unsigned 74 < 76), SF = 1 (bit 7 set), ZF = 0, PF = 0 (FEh has seven ones — odd parity of the low byte), AF = 1 (borrow out of bit 3 — the BCD nibble), OF = 0 (signed 74 - 76 = -2 fits in a byte). One subtraction, six flags, each with a one-line story — that trace answers any 'explain the status flags' question with numbers instead of definitions.",
              "The 14-mark version: name the six groups with three instructions each, then draw the flag register with bit positions (CF D0, PF D2, AF D4, ZF D6, SF D7, TF D8, IF D9, DF D10, OF D11) and give the SUB trace. The table and the flow diagram together are that answer. Add the symbols line — reg/mem/imm/port — and the 'symbols and abbreviations' clause of the syllabus is covered in one sentence.",
            ],
            keyTerms: [
              { term: "REP prefix", definition: "Repeats a string instruction CX times; REPE/REPNE also stop on ZF." },
              { term: "Status flags", definition: "CF, PF, AF, ZF, SF, OF — set by arithmetic and logic to report results." },
              { term: "Control flags", definition: "TF, IF, DF — steer single-stepping, interrupt response and string direction." },
              { term: "Data format", definition: "Byte (8-bit) or word (16-bit) — chosen by the opcode's w bit." },
              { term: "Manual symbols", definition: "reg, mem, imm, port — the operand-class abbreviations in instruction descriptions." },
            ],
            diagram: {
              kind: "flow",
              title: "How one SUB sets six flags",
              caption: "4Ah - 4Ch = FEh: every flag tells part of the story.",
              steps: [
                { label: "Operands ready", note: "AL = 4Ah, subtract 4Ch" },
                { label: "ALU subtracts", note: "borrows out of bit 3 and bit 7" },
                { label: "Flags latch", note: "CF=1 SF=1 AF=1 PF=0 ZF=0 OF=0" },
                { label: "Branch reads them", note: "JB taken (CF=1); JL not taken (SF=OF)" },
              ],
            },
            bullets: [
              "Six groups: data transfer, arithmetic, bit manipulation, string, program transfer, processor control.",
              "Only arithmetic and logic set status flags; data transfer is flag-silent.",
              "String ops pair DS:SI with ES:DI; REP repeats CX times (REPE/REPNE also test ZF).",
              "Flags: CF PF AF ZF SF report results; TF IF DF steer stepping, interrupts and string direction.",
              "PF checks the low 8 bits only — even parity of ones; AF is the nibble carry for BCD.",
              "CMP and TEST exist purely for their flags — nothing is stored.",
            ],
            table: {
              caption: "The six instruction groups.",
              headers: ["Group", "Members", "Signature use"],
              rows: [
                ["Data transfer", "MOV XCHG LEA IN OUT PUSH POP", "move bytes without touching flags"],
                ["Arithmetic", "ADD ADC SUB SBB MUL DIV INC DEC NEG CMP", "compute; flags carry the verdict"],
                ["Bit manipulation", "AND OR XOR NOT TEST SHL SHR ROL RCR", "masks, merges and serial bits"],
                ["String", "MOVS CMPS SCAS LODS STOS + REP", "block moves up to 64 KB per instruction"],
                ["Program transfer", "Jcc CALL RET LOOP INT IRET", "change the IP (and CS if far)"],
                ["Processor control", "CLC STC CLI STI HLT NOP ESC WAIT LOCK", "steer flags, interrupts and the bus"],
              ],
            },
            callout: {
              type: "exam",
              title: "Draw FLAGS with bit numbers",
              body: "The flag register drawn with bit positions (CF D0 ... OF D11) plus the 4Ah - 4Ch trace is the highest-density answer in this unit: six flag stories from one subtraction, no filler.",
            },
            examQuestions: [
              {
                q: "Describe the six groups of the 8086 instruction set with three instructions each. Draw the flag register with bit positions and trace the flags after SUB AL, 4Ch with AL = 4Ah.",
                marks: 14,
                outline: [
                  "Data transfer: MOV XCHG LEA — flag-silent movement",
                  "Arithmetic: ADD SUB MUL DIV — full flag publishing",
                  "Bit manipulation: AND OR XOR TEST SHL — CF/OF cleared",
                  "String: MOVS CMPS SCAS with REP prefixes",
                  "Program transfer: Jcc CALL RET LOOP INT IRET",
                  "Processor control: CLC STC CLI STI HLT NOP ESC WAIT",
                  "FLAGS: CF D0, PF D2, AF D4, ZF D6, SF D7, TF D8, IF D9, DF D10, OF D11; trace FEh -> CF=SF=AF=1, PF=ZF=OF=0",
                ],
              },
              {
                q: "Explain the string instructions and their REP prefixes. Write a sequence to copy 100 bytes from one buffer to another.",
                marks: 7,
                outline: [
                  "MOVS moves DS:SI -> ES:DI and bumps both pointers",
                  "DF (via CLD/STD) chooses auto-increment or decrement",
                  "CMPS compares, SCAS scans, LODS/STOS load and store",
                  "REP repeats CX times; REPE/REPNE add the ZF test",
                  "Sequence: CLD; MOV CX, 0064h; REP MOVSB",
                  "SI/DI must be loaded with the buffer offsets first",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Assembly language and high-level languages: choice and application areas",
            body: [
              "Assembly language writes one mnemonic per machine instruction — ADD AX, BX assembles to exactly 01 D8 — so the programmer owns registers, memory layouts and cycle counts. High-level languages (C, Pascal, Fortran) compile one source line into many instructions, choosing registers and calling conventions for you. The trade is control against portability: assembly is tied to the silicon (8086 mnemonics mean nothing on a 68000), while a compiled C program re-targets by recompiling. The assembler translates; the linker joins modules and fixes external references; the loader places segments and starts CS:IP.",
              "The application split follows from the trade. Assembly earns its cost where hardware touch and cycle accuracy matter: device drivers, BIOS boot code, interrupt handlers, delay loops — a software delay of 1000 iterations is 2 instructions in assembly (DEC CX / JNZ) versus a compiler-emitted loop with spill and reload around every iteration. High-level languages earn theirs where logic volume and maintenance matter: operating system bodies, compilers, business applications. C is the classic middle — portable with enough pointer reach to write drivers — which is why mixed projects write the cycle-critical 5 percent in assembly and the rest in C.",
              "The exam asks for the contrast with areas of application of various languages: table it — area, language, reason — and close with the assembler/linker/loader chain. One sentence per column of the compare diagram plus one row of the table is a complete 7-mark answer; naming the toolchain's three tools and their outputs covers the remaining clause. Name each stage's output — .OBJ, then .EXE — as you name the tool; the extensions are the evidence.",
            ],
            keyTerms: [
              { term: "Mnemonic", definition: "The symbolic name of one machine instruction — ADD for opcode 01." },
              { term: "Assembler", definition: "Translates mnemonics to machine code, one line to one instruction." },
              { term: "Linker", definition: "Joins object modules and resolves EXTRN/PUBLIC references into one executable." },
              { term: "Loader", definition: "Places the executable's segments in memory and starts CS:IP." },
              { term: "Portability", definition: "Recompiling for a new processor — the property assembly lacks by design." },
            ],
            diagram: {
              kind: "compare",
              title: "Assembly language vs high-level language",
              caption: "Control and cycles against portability and productivity.",
              left: {
                heading: "Assembly (MASM)",
                items: [
                  "1:1 with machine code — full hardware control",
                  "Smallest, fastest loops; direct port and register access",
                  "Tied to one processor family — 8086 code is not portable",
                  "Home of drivers, boot code, ISRs, time-critical kernels",
                ],
              },
              right: {
                heading: "High-level (C, Pascal, Fortran)",
                items: [
                  "One source line compiles to many instructions",
                  "Portable across processors; safer to maintain",
                  "Compiler owns register allocation and conventions",
                  "Home of applications, kernels' bodies, numerical work",
                ],
              },
            },
            bullets: [
              "Assembly: 1:1 with machine code, full register/port control, minimum size and cycles.",
              "Assembly cost: tied to one processor family, slow to write, easy to break.",
              "HLL: portable, productive, self-documenting; the compiler owns register allocation.",
              "Areas for assembly: drivers, BIOS/boot, ISRs, time-critical loops, size-critical embedded code.",
              "Areas for HLL: OS kernels, applications, numerical and business software.",
              "Toolchain: assembler -> linker -> loader; the linker resolves EXTRN/PUBLIC across modules.",
            ],
            table: {
              caption: "Choosing the language per area.",
              headers: ["Area", "Best fit", "Reason"],
              rows: [
                ["Device drivers, BIOS boot", "assembly", "port and register access with no runtime underneath"],
                ["Real-time control loops", "assembly", "cycle-accurate delay and response"],
                ["OS kernels, compilers", "C", "portable with enough hardware reach"],
                ["Business applications", "C++, Pascal, Basic", "productivity and libraries"],
                ["Numerical/scientific", "Fortran, C", "math libraries and optimising compilers"],
              ],
            },
            callout: {
              type: "tip",
              title: "The mixed-project line",
              body: "State the industry rule in one sentence: 'write the cycle-critical 5 percent in assembly, the portable 95 percent in C.' It shows why both languages coexist rather than compete — exactly the nuance the 7-mark contrast wants.",
            },
            examQuestions: [
              {
                q: "Compare assembly language and high-level languages on control, code size, speed, portability and development time, and assign application areas to each.",
                marks: 7,
                outline: [
                  "Assembly: 1:1 with silicon; smallest and fastest loops",
                  "Assembly: tied to one CPU family; slow to write and maintain",
                  "HLL: portable, productive, self-documenting",
                  "HLL cost: larger code, compiler-chosen registers",
                  "Assembly areas: drivers, boot, ISRs, time-critical loops",
                  "HLL areas: applications, kernels' bodies, numerical work",
                ],
              },
              {
                q: "Explain the roles of the assembler, linker and loader in producing a running program, naming the output of each stage.",
                marks: 7,
                outline: [
                  "Assembler: PROG.ASM -> PROG.OBJ (+ listing)",
                  "Linker: joins modules, resolves EXTRN/PUBLIC -> PROG.EXE",
                  "Loader: places segments, sets CS:IP and SS:SP",
                  "EXTRN declares imports; PUBLIC exports symbols",
                  "Libraries link like any other module",
                  "DEBUG/U attach after loading for test and trace",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Stacks, subroutines and macro vs microprogramming",
            body: [
              "The stack is the runtime backbone of control: a LIFO region whose top is SS:SP, growing toward lower addresses. PUSH decrements SP by 2 then writes the word; POP reads then increments. CALL uses it for return addresses — near pushes IP, far pushes CS then IP — and nested calls stack returns in the right order. Subroutines receive parameters in registers, in memory, or on the stack, where BP indexes the frame (BP's SS default is the point). The macro is the assembly-time sibling: named text expanded inline by the assembler wherever invoked, trading code size for call overhead; microprogramming, below the machine level, is the control-store code that implements each instruction and never appears in source.",
              "One trace proves the mechanics. With SP = 2012h: PUSH AX -> SP = 2010h, [SS:2010h] = AX; CALL NEAR PTR P -> SP = 200Eh, [SS:200Eh] = return IP; inside P, PUSHR (a macro that expands to PUSH AX / PUSH BX) -> SP = 200Ah; RET -> IP restored from 200Eh, SP = 2010h; POP AX -> SP = 2012h. Every step is a two-byte SP move; the macro's two pushes appear in the .OBJ exactly where written, with no call and no stack frame — the whole procedure/macro contrast in eight SP values.",
              "Exams ask for stack structure with PUSH/POP mechanics, or procedure versus macro versus microprogram. Draw the stack, move SP, store the return address, then give the one-line trio distinction. Add the parameter-passing note — registers for speed, stack for generality, BP to reach the frame — and the answer covers the syllabus's 'stacks, subroutines, system software' clause in full. Note RET n as the stack-passed calling convention's cleanup half.",
            ],
            keyTerms: [
              { term: "LIFO", definition: "Last-in, first-out — the stack's discipline; the newest push is the next pop." },
              { term: "Stack frame", definition: "The parameter/local-storage region a subroutine reaches via BP." },
              { term: "Parameter passing", definition: "Registers (fast), memory (shared), or stack (general, frame-indexed by BP)." },
              { term: "Macro", definition: "Assembler-level inline expansion — no call overhead, larger code." },
              { term: "Control store", definition: "The microprogram memory that implements each machine instruction." },
            ],
            diagram: {
              kind: "fork",
              title: "Hand control to other code",
              caption: "Three mechanisms, three costs — near, far and assembly-time.",
              start: "Transfer control",
              branches: [
                { label: "near CALL", outcome: "pushes IP only — same segment, 2 bytes on the stack", good: true },
                { label: "far CALL", outcome: "pushes CS then IP — 4 bytes, the segment may change", good: true },
                { label: "MACRO", outcome: "expanded inline at assembly time — no stack, no jump", good: true },
              ],
            },
            bullets: [
              "Stack = LIFO at SS:SP; PUSH: SP <- SP - 2 then store; POP reverses — it grows downward.",
              "near CALL pushes IP (2 bytes); far CALL pushes CS, IP (4 bytes); IRET also pops FLAGS.",
              "Parameters by stack are reached through BP, whose default segment is SS.",
              "Macro: assembly-time inline expansion — zero call overhead, larger code.",
              "Procedure: one memory copy called at runtime — smaller code, call/return overhead.",
              "Microprogramming: control-store level below the instruction set — invisible to the programmer.",
            ],
            codeExample: {
              language: "asm",
              caption: "frames.asm — the stack trace and a macro",
              code: `PUSHR   MACRO           ; macro: expanded inline where written
        PUSH AX
        PUSH BX
        ENDM
;
        PUSH AX          ; SP 2012h -> 2010h, [SS:2010h] = AX
        CALL NEAR PTR P  ; SP -> 200Eh, [SS:200Eh] = return IP
P:      MOV  BP, SP      ; frame base = current stack top
        MOV  SI, [BP+4]  ; first stack parameter, via SS:BP
        PUSHR            ; SP -> 200Ah (macro's two pushes)
        RET              ; IP restored from [SS:200Eh]
        POP AX           ; SP back to 2012h`,
            },
            callout: {
              type: "warning",
              title: "Unbalanced stacks kill returns",
              body: "A PUSH without its POP, or a RET executed with SP moved by an odd count, sends execution to garbage — the classic crash whose debugger signature is a return into the middle of an instruction. Balance pushes in pairs and never RET with a shifted SP.",
            },
            examQuestions: [
              {
                q: "Explain the 8086 stack with PUSH, POP, CALL and RET. Trace SP and stack contents for PUSH AX (SP = 2012h), a near CALL, one nested PUSH and the matching returns.",
                marks: 7,
                outline: [
                  "LIFO at SS:SP; grows downward by 2 bytes per push",
                  "PUSH AX: SP 2012h -> 2010h, AX stored",
                  "near CALL: SP -> 200Eh, return IP stored",
                  "Nested PUSH: SP -> 200Ch; its POP returns SP to 200Eh",
                  "RET: IP restored from SS:200Eh",
                  "POP AX: SP back to 2012h — balance restored",
                ],
              },
              {
                q: "Differentiate macro and procedure, and state where microprogramming sits relative to both. Give the code-size and speed trade-off in one sentence each.",
                marks: 7,
                outline: [
                  "Procedure: one copy, CALL/RET at run time",
                  "Macro: text expanded inline at assembly time",
                  "Macro = faster (no call) but larger (repeat per use)",
                  "Procedure = smaller (one copy) but pays call overhead",
                  "Microprogramming implements machine instructions in control store",
                  "It is hardware level — invisible to both assembly and HLL code",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Software development, debugging and design methodologies",
            body: [
              "Software development is a pipeline: edit the source (PROG.ASM), assemble with MASM (PROG.OBJ plus a listing), link with LINK (PROG.EXE, external references resolved), load (the loader sets CS:IP and SS:SP), then test with DEBUG — R to inspect registers, D to dump memory, E to enter bytes, A to assemble in place, T to single-step, G to run to a breakpoint, U to unassembled back to mnemonics. Modular programming splits the program into files that declare EXTRN (imports) and PUBLIC (exports); the linker stitches them into one executable.",
              "Design methodologies order the decomposition. Top-down: start from the specification, refine into modules, code the leaves last — a sort program becomes READ -> SORT -> PRINT before anyone writes a swap routine. Bottom-up: build and test units (the swap, the compare) then integrate upward. Structured programming restricts every module to sequence, selection and iteration — no arbitrary jumps — which is what makes modules testable in isolation. Debugging tools map to hardware: DEBUG's T command sets the TF flag, so the CPU traps after every instruction and the monitor regains control — single-stepping is a flag, not magic.",
              "The exam asks for the development cycle with tools, or modular/structured/top-down/bottom-up in one answer. The pipeline diagram is the cycle; the DEBUG table is the tool section; the methodologies need one sentence and one example each. Name the .ASM -> .OBJ -> .EXE chain explicitly — the file extensions are the evidence that the pipeline was understood, not memorized. Quote the extensions in order — they are the pipeline made visible.",
            ],
            keyTerms: [
              { term: "Modular programming", definition: "Splitting the program into files joined by EXTRN/PUBLIC through the linker." },
              { term: "Structured programming", definition: "Sequence, selection and iteration only — no unstructured jumps." },
              { term: "Top-down design", definition: "Refine from the specification into modules; code the leaves last." },
              { term: "Bottom-up design", definition: "Build and test units first, then integrate upward." },
              { term: "Single-step (TF)", definition: "Trap flag set -> the CPU interrupts after each instruction — DEBUG's T." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From source to running program",
              caption: "Five stages, three file types — and a debugger at the end.",
              stages: [
                { label: "Edit", note: "PROG.ASM written in the editor" },
                { label: "Assemble", note: "MASM -> PROG.OBJ + LST listing" },
                { label: "Link", note: "LINK joins modules -> PROG.EXE" },
                { label: "Load", note: "loader sets CS:IP, SS:SP" },
                { label: "Debug", note: "DEBUG: R, T, G, D to inspect and step" },
              ],
            },
            bullets: [
              "Pipeline: edit -> assemble -> link -> load -> debug; outputs .ASM -> .OBJ -> .EXE.",
              "DEBUG verbs: R (registers), D (dump), E (enter), A (assemble), T (trace), G (go), U (unassemble).",
              "Modular: EXTRN/PUBLIC per module; the linker fixes addresses across files.",
              "Structured: sequence, selection, iteration only — no spaghetti jumps.",
              "Top-down refines from the spec; bottom-up builds tested units and integrates.",
              "Single-step = TF flag set: the CPU traps after each instruction into the monitor.",
            ],
            table: {
              caption: "The DEBUG workbench.",
              headers: ["Command", "Does"],
              rows: [
                ["R", "dump or set the registers"],
                ["D range", "dump memory bytes"],
                ["E addr", "enter bytes into memory"],
                ["A addr", "assemble mnemonics in place"],
                ["T", "single-step one instruction (sets TF)"],
                ["G addr", "run to a breakpoint"],
                ["U addr", "unassemble machine code back to mnemonics"],
              ],
            },
            callout: {
              type: "exam",
              title: "Methodology = order of decomposition",
              body: "The four design terms confuse students because they answer different questions. Top-down: decisions first, code last. Bottom-up: code first, integration decisions later. Structured: which control shapes are legal. Modular: how the files split. One sentence each closes the question.",
            },
            examQuestions: [
              {
                q: "Describe the microprocessor software development cycle, naming each tool, its input and its output. Include the DEBUG commands used in the test stage.",
                marks: 7,
                outline: [
                  "Edit: PROG.ASM written",
                  "Assemble: MASM -> PROG.OBJ + listing",
                  "Link: LINK resolves EXTRN/PUBLIC -> PROG.EXE",
                  "Load: segments placed, CS:IP and SS:SP set",
                  "Debug: R, D, E, A, T, G, U verbs",
                  "T single-steps via the TF trap flag",
                ],
              },
              {
                q: "Explain modular, structured, top-down and bottom-up program design with a small example of each approach.",
                marks: 7,
                outline: [
                  "Modular: files joined by EXTRN/PUBLIC at link time",
                  "Structured: sequence/selection/iteration only per module",
                  "Top-down: sort = READ -> SORT -> PRINT, refined downward",
                  "Bottom-up: test swap and compare first, integrate after",
                  "Example module: SORT.EXE built from SORT.OBJ + IO.OBJ",
                  "Methodologies compose: modular files, structured bodies",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "The Pentium family: Pentium, Pentium Pro, II, III and IV",
            body: [
              "The Pentium (1993) made the x86 superscalar: two integer pipelines (U and V) issue up to two instructions per clock, the data bus widens to 64 bits, separate 8 KB instruction and data caches sit on chip, and a branch target buffer predicts jumps so the pipes stay fed. The Pentium Pro (1995) rebuilt the core as P6: out-of-order execution via micro-op translation, an on-package L2 cache, and 36-bit physical addressing (PAE). Pentium II (1997) added MMX SIMD-integer instructions and moved to a cartridge; Pentium III (1999) added SSE — 128-bit SIMD floating point; Pentium 4 (2000) adopted the NetBurst architecture — a 20-stage pipeline tuned for clock speed, SSE2/SSE3, and later hyper-threading.",
              "Superscalar arithmetic: a 100 MHz Pentium issuing 2 instructions per clock peaks at 200 MIPS on integer code — double a non-superscalar chip at the same clock. Branch prediction arithmetic: the BTB turns an unpredictable if into a roughly 90 percent correct guess, keeping both pipes full; one mispredict flushes the deep pipeline, which is why NetBurst's 20 stages made branch cost the dominant hazard. Software changes rode along: real mode gave way to protected mode (286) and then flat 32-bit addresses (386); MMX and SSE added SIMD data types that compilers and media libraries must schedule.",
              "The generation table with one 'new capability' column is the standard answer; the chronology flow is its skeleton. Quote the superscalar number — 2 instructions per clock — because it is the feature that defines the Pentium against the 486, and pair it with branch prediction as the reason the second pipe stays busy instead of stalling, and name the BTB as the hardware that makes the prediction credible.",
            ],
            keyTerms: [
              { term: "Superscalar", definition: "Multiple pipelines issuing more than one instruction per clock — Pentium's U + V." },
              { term: "Branch prediction", definition: "The BTB guesses jump targets so the pipes stay full; mispredicts flush." },
              { term: "Out-of-order execution", definition: "P6 reorders micro-ops around stalls while preserving program semantics." },
              { term: "SIMD", definition: "One instruction operating on many values — MMX (integer) and SSE (128-bit float)." },
              { term: "Hyper-threading", definition: "Two logical CPUs sharing one physical core's resources (Pentium 4 era)." },
            ],
            diagram: {
              kind: "flow",
              title: "The Pentium line, 1993-2000",
              caption: "Each generation adds an execution idea, not just megahertz.",
              steps: [
                { label: "Pentium 1993", note: "superscalar U/V pipes, 64-bit bus, BTB" },
                { label: "Pentium Pro 1995", note: "P6: out-of-order, on-package L2, 36-bit PAE" },
                { label: "Pentium II 1997", note: "P6 + MMX, Slot 1 cartridge" },
                { label: "Pentium III 1999", note: "SSE: 128-bit SIMD for media" },
                { label: "Pentium 4 2000", note: "NetBurst: 20-stage pipe, SSE2/SSE3, hyper-threading" },
              ],
            },
            bullets: [
              "Pentium: superscalar U/V pipes, 64-bit data bus, split 8+8 KB caches, branch target buffer.",
              "Pentium Pro: P6 micro-ops, out-of-order execution, on-package L2, 36-bit PAE.",
              "Pentium II: MMX integer SIMD; Pentium III: SSE 128-bit floating SIMD.",
              "Pentium 4: NetBurst 20-stage pipeline, SSE2/SSE3, hyper-threading (two logical CPUs).",
              "Superscalar = issue more per clock, not a higher clock — 100 MHz x 2/clock = 200 MIPS peak.",
              "Software evolution: real -> protected -> flat 32-bit; MMX/SSE add SIMD types.",
            ],
            table: {
              caption: "The Pentium line at a glance.",
              headers: ["Chip", "Year", "Microarchitecture", "New capability"],
              rows: [
                ["Pentium", "1993", "superscalar U/V pipes", "2 instructions/clock, 64-bit data bus, branch prediction"],
                ["Pentium Pro", "1995", "P6", "out-of-order execution, on-package L2, 36-bit PAE"],
                ["Pentium II", "1997", "P6 + MMX", "SIMD integer multimedia, cartridge packaging"],
                ["Pentium III", "1999", "P6 + SSE", "128-bit SIMD floating point streaming"],
                ["Pentium 4", "2000", "NetBurst", "20-stage pipeline, SSE2/SSE3, hyper-threading"],
              ],
            },
            callout: {
              type: "tip",
              title: "Name the pipe count",
              body: "Every Pentium answer should name its issue width: 486 = 1 instruction per clock, Pentium = 2 (U + V). One number separates 'superscalar' as a word from superscalar as an understanding.",
            },
            examQuestions: [
              {
                q: "Trace the Pentium family from Pentium to Pentium 4, giving one architectural innovation for each generation and the software features that accompanied it.",
                marks: 7,
                outline: [
                  "Pentium 1993: superscalar U/V, 64-bit bus, BTB, split caches",
                  "Pentium Pro 1995: P6 out-of-order, on-package L2, PAE-36",
                  "Pentium II 1997: MMX integer SIMD, cartridge form",
                  "Pentium III 1999: SSE 128-bit floating SIMD",
                  "Pentium 4 2000: NetBurst 20-stage pipe, SSE2/SSE3",
                  "Hyper-threading: two logical CPUs on one core",
                ],
              },
              {
                q: "Explain superscalar execution and branch prediction. Why does deepening the pipeline (NetBurst's 20 stages) make branch prediction more important, not less?",
                marks: 7,
                outline: [
                  "Superscalar: two pipes (U/V) issue up to 2 instructions per clock",
                  "100 MHz x 2 = 200 MIPS peak on integer code",
                  "BTB predicts targets so both pipes stay fed",
                  "A mispredict flushes every fetched instruction",
                  "Deeper pipes flush more work per mispredict",
                  "Hence NetBurst leans on prediction accuracy even harder",
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
      title: "Assembly Programming, Memory and I/O Interfacing",
      summary:
        "Unit III makes it concrete: assembly programs that add and subtract 8- and 16-bit numbers with carries and borrows, address partitioning from segment:offset to physical, the memory interfacing craft of chip select and decoding, the three data-transfer schemes, I/O ports and the 8255 in its modes with the microcomputer development system, single-chip microcomputers from the 8048 through the 8051, 8096 and 2920, and the I/O and math coprocessors — UPI-41/42, the 8089 and the 8087/80287/80387 family.",
      chapter: {
        number: "03",
        title: "Programs, Ports and Coprocessors",
        intro:
          "Unit III covers assembly language programming with 8/16-bit addition and subtraction examples, address partitioning and the segmented memory model, types of addressing modes in practice, memory and I/O interfacing with the three data transfer schemes, I/O ports and basic I/O interfacing with the 8255 and the MDS, single-chip microcomputers (8048/8748, 8049, 8051, 8096, 2920), and I/O processors plus math coprocessors (UPI-41/42, 8089, 8087/80287/80387).",
        inOneBreath:
          "Multi-byte arithmetic chains ADD into ADC and SUB into SBB; physical address = segment x 10h + offset and many segment:offset pairs alias the same byte; memory chips take high lines into a decoder for CS# and low lines to select inside; data moves by polling, interrupt or DMA; the 8255's mode word (bit 7 = 1) programs ports A/B/C for input or output; microcontrollers integrate ROM, RAM, ports and timers — the 8051 is the exam's example; the 8087 rides the 8086's queue on ESC opcodes and returns 80-bit numerics.",
        sections: [
          {
            number: "3.1",
            title: "Assembly language programming: 8/16-bit addition and subtraction",
            body: [
              "An assembly program is data segment, code segment and a run: directives (SEGMENT/ENDS, ASSUME, DW/DB, END) declare memory, instructions do the work, INT 21h returns to DOS. The canonical examples are arithmetic: 16-bit addition reads two words, ADDs them, stores the sum and folds the carry; 8-bit subtraction borrows through SBB for multi-byte strings. The pattern generalizes to every program question: load pointer, load operand, operate, store, test flags, loop or exit.",
              "The full 16-bit addition: NUM1 = 3B74h, NUM2 = 2C4Ah. MOV AX, DATA / MOV DS, AX points the segment; MOV AX, NUM1 -> AX = 3B74h; ADD AX, NUM2 -> AX = 67BEh with CF = 0 (no carry out of bit 15); MOV SUM, AX stores it; ADC CX, CX folds the carry into CX (CX = 0 here; had the operands been bytes 97h + 7Ah = 111h, CF = 1 and a third byte would catch the overflow). Subtraction mirrors it: SUB for the low word, SBB for the high, JC/JNC reporting the borrow. Examiners mark the register trace beside each instruction — write the contents, not just the mnemonics.",
              "Program questions come as 'write a program' (give the listing with comments) or 'explain the output' (give the trace). Both want segment setup shown and flags used — a program that never tests CF, SF or ZF reads as incomplete. BCD work is the usual extension: DAA after ADD and DAS after SUB when the operands were packed decimal. With the carry folded in and the trace complete, the program question is fully answered.",
            ],
            keyTerms: [
              { term: "Directive", definition: "An assembler command (SEGMENT, DW, ASSUME, END) that shapes memory, not machine code." },
              { term: "ASSUME", definition: "Tells the assembler which segment register maps to which segment." },
              { term: "ADC chaining", definition: "ADD the low parts, ADC the high parts — carry propagates across words." },
              { term: "Register trace", definition: "The column of register contents written beside each instruction — the marked artifact." },
              { term: "DOS INT 21h", definition: "The DOS service gate; AH = 4Ch terminates the program." },
            ],
            diagram: {
              kind: "fork",
              title: "After SUB, which comparison applies?",
              caption: "Same subtraction, two interpretations — the jump chooses.",
              start: "Flags after SUB",
              branches: [
                { label: "Unsigned operands", outcome: "judge by CF — JB/JNB after SUB, JA/JBE after CMP", good: true },
                { label: "Signed operands", outcome: "judge by SF xor OF — JL/JG carry the sign story", good: true },
                { label: "Equality only", outcome: "ZF = 1 means equal regardless of signedness — JE/JNE", good: true },
              ],
            },
            bullets: [
              "Skeleton: DATA SEGMENT (operands) -> CODE SEGMENT (ASSUME, init DS, run) -> INT 21h.",
              "16-bit add: MOV AX, NUM1 / ADD AX, NUM2 / MOV SUM, AX / ADC folds the carry.",
              "8/16-bit subtract: SUB for the low word, SBB for the high — borrows chain like carries.",
              "Flags decide the exits: JNC (no carry), JZ (zero result), JS (negative in signed reading).",
              "DAA/DAS adjust BCD after ADD/SUB when decimal output is wanted.",
              "Always show the register contents after each instruction — the trace is marked.",
            ],
            codeExample: {
              language: "asm",
              caption: "add16.asm — two 16-bit numbers with the carry folded out",
              code: `DATA    SEGMENT
NUM1    DW  3B74h
NUM2    DW  2C4Ah
SUM     DW  ?
CARRY   DW  ?
DATA    ENDS
CODE    SEGMENT
        ASSUME CS:CODE, DS:DATA
START:  MOV  AX, DATA     ; load the data segment base
        MOV  DS, AX
        MOV  AX, NUM1     ; AX = 3B74h
        ADD  AX, NUM2     ; AX = 67BEh, CF = 0
        MOV  SUM, AX
        ADC  CX, CX       ; CX = carry bit (0 or 1)
        MOV  CARRY, CX
        MOV  AH, 4Ch      ; DOS terminate
        INT  21h
CODE    ENDS
        END  START`,
            },
            callout: {
              type: "exam",
              title: "The trace is the mark",
              body: "A bare listing earns the syntax marks; the register contents written beside each line earn the understanding marks. Two columns — instruction and register state — is the format the answer key reproduces.",
            },
            examQuestions: [
              {
                q: "Write an 8086 program to add two 16-bit numbers stored in memory, storing the sum and the carry. Show the register trace beside every instruction and state the final flags for NUM1 = 3B74h, NUM2 = 2C4Ah.",
                marks: 14,
                outline: [
                  "DATA SEGMENT: NUM1, NUM2, SUM, CARRY via DW",
                  "CODE SEGMENT with ASSUME and DS initialization",
                  "MOV AX, NUM1 -> AX = 3B74h",
                  "ADD AX, NUM2 -> AX = 67BEh, CF = 0, ZF = 0, SF = 0",
                  "MOV SUM, AX; ADC CX, CX folds the carry",
                  "MOV CARRY, CX; INT 21h/AH=4Ch terminates",
                  "Trace column beside every line",
                ],
              },
              {
                q: "Write or explain an 8-bit subtraction program for AL = 4Ah, BL = 4Ch, reporting the borrow, and state every flag afterwards.",
                marks: 7,
                outline: [
                  "MOV AL, 4Ah; MOV BL, 4Ch; SUB AL, BL",
                  "Result AL = FEh (two's complement of -2)",
                  "CF = 1: unsigned borrow (74 < 76)",
                  "SF = 1, ZF = 0, OF = 0 (signed result fits)",
                  "PF = 0 (FEh has seven ones), AF = 1 (nibble borrow)",
                  "JC taken to report the unsigned borrow",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Address partitioning and physical address generation",
            body: [
              "Address partitioning is the 8086's bargain: a 20-bit physical bus reached by two 16-bit halves. The segment register supplies the high half (times 10h, because the shift adds four zero bits); the offset supplies the low half; a dedicated adder joins them on every access. Any byte can therefore be named by many segment:offset pairs — the segment granularity is 16 bytes, so aliases exist at every paragraph boundary. The design's prize is relocatability: move a program to another segment and only the segment register changes; every offset stays valid.",
              "Compute 1234h:5678h: shift the segment — 1234h x 10h = 12340h — then add the offset: 12340h + 5678h = 179B8h. The same byte is 1000h:79B8h (10000h + 79B8h) and 179Bh:0008h (179B0h + 8): one physical address, many logical names. The working pairs are fixed by role: CS:IP fetches code, SS:SP and SS:BP touch the stack, DS:SI/DI/BX reach data, ES:DI serves string destinations. Segments overlap freely — CS = 2000h spans 20000h-2FFFFh, and DS = 2001h starts one byte later. The BIU's adder performs this shift-and-add on every access, which is why the pair is two 16-bit halves rather than one 20-bit register.",
              "Every memory question hides this arithmetic: address partitioning, memory maps, addressing modes. Write the shift, write the add, box the 20-bit result — three visible lines are the mark scheme's spine. Then name the role pair you used (CS:IP, SS:SP, DS:xx) — examiners check the default segment as carefully as the sum. One alias pair computed and explained is the follow-up that recovers the remaining marks.",
            ],
            keyTerms: [
              { term: "Segment", definition: "A 16-bit base selecting one 64 KB window of the 1 MB space, in 16-byte steps." },
              { term: "Offset", definition: "The 16-bit position within the segment's window." },
              { term: "Paragraph", definition: "16 bytes — the segment granularity; segments start every paragraph." },
              { term: "Relocatability", definition: "Code that runs at any segment because it references offsets only." },
              { term: "Alias address", definition: "A second segment:offset pair reaching the same physical byte." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Segment plus offset becomes a physical address",
              caption: "Shift, add, drive — the BIU's adder does this on every access.",
              stages: [
                { label: "Segment 1234h", note: "16-bit base from CS/DS/ES/SS" },
                { label: "Shift left 4", note: "1234h -> 12340h (x 10h)" },
                { label: "Add offset", note: "12340h + 5678h" },
                { label: "Physical 179B8h", note: "20-bit address driven on the bus" },
              ],
            },
            bullets: [
              "Physical = segment x 10h + offset: the x10h is a 4-bit left shift, not a multiply instruction.",
              "Segment granularity 16 bytes -> aliases: 1234h:5678h = 1000h:79B8h = 179Bh:0008h.",
              "Role pairs: CS:IP, SS:SP, SS:BP, DS:BX/SI/DI, ES:DI — defaults, not choices.",
              "Segments overlap freely; a 64 KB segment spans 20 bits of range from a 16-bit base.",
              "Relocatable code: change the segment register, keep every offset — the design's purpose.",
              "Max addressable = 1 MB (20 bits) although both halves are 16-bit registers.",
            ],
            table: {
              caption: "Segment:offset pairs reaching the same bytes.",
              headers: ["Segment", "Offset", "Physical", "Note"],
              rows: [
                ["1234h", "5678h", "179B8h", "12340h + 5678h"],
                ["1000h", "79B8h", "179B8h", "a second alias for the same byte"],
                ["179Bh", "0008h", "179B8h", "aliases exist every 16 bytes"],
                ["2000h", "01F0h", "201F0h", "the CS:IP example of section 1.3"],
              ],
            },
            callout: {
              type: "warning",
              title: "The shift, not the multiply",
              body: "Segment x 10h is a hardware shift of four bits. Writing 'multiply segment by 16 decimal' is fine; forgetting the shift and adding segment + offset directly produces an address 15/16 too small — the classic wrong-physical-address slip.",
            },
            examQuestions: [
              {
                q: "Explain address partitioning in the 8086. Compute the physical addresses of 1234h:5678h, 1000h:79B8h and 179Bh:0008h and explain why all three reach the same byte.",
                marks: 7,
                outline: [
                  "20-bit bus built from 16-bit segment + 16-bit offset",
                  "Physical = segment x 10h + offset (4-bit shift + add)",
                  "1234h x 10h = 12340h; + 5678h = 179B8h",
                  "10000h + 79B8h = 179B8h; 179B0h + 8h = 179B8h",
                  "Segment granularity is 16 bytes, so aliases abound",
                  "Relocatability is the design's purpose",
                ],
              },
              {
                q: "Why does segmentation make code relocatable? List the default segment:offset pairs for code fetch, stack operations, data access and string destinations.",
                marks: 7,
                outline: [
                  "Instructions reference offsets only",
                  "Moving the program changes one segment register",
                  "Every offset stays valid — no reassembly needed",
                  "Code fetch: CS:IP; stack: SS:SP and SS:BP",
                  "Data: DS:BX/SI/DI; string destination: ES:DI",
                  "Defaults are fixed by hardware, not chosen per instruction",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Memory interfacing and address decoding",
            body: [
              "A memory chip wakes only when its chip-select agrees with the address bus. The bus splits: high address lines go to a decoder (a 74LS138 taking three select inputs and producing eight active-low outputs, gated by the read/write strobes), whose chosen output drives CS#; low address lines go straight to the chip to select the byte inside. Full decoding uses every high line — one chip, one unique range; partial decoding ignores some lines, so the chip answers at several aliased ranges (fold-back or shadow addresses); linear selection drives CS# from a single line for tiny systems.",
              "Decode 8 KB of EPROM at F0000h. The chip needs A12-A0 for its 8192 bytes; the remaining lines A19-A13 must equal 1111000 (F0000h = 1111 0000 0000 0000 0000). The 74LS138 wired so that combination asserts one output gives the chip the range F0000h-F1FFFh — exactly 8 KB (2^13). Repeat for RAM at 00000h-3FFFFh (256 KB, A19-A18 = 00) and the map is complete: BIOS at the top of the space, RAM at the bottom, interrupt vectors at 00000h where RESET expects them. OE# and WE# are gated by the bus strobes, so the chip drives or accepts data only inside a read or write cycle.",
              "Memory-interfacing questions want the split drawn (which lines decode, which lines select), the range arithmetic, and the CS#/OE#/WE# wiring. The flow below is the whole answer in four boxes. Close by contrasting full and partial decoding in one line each — the shadow-address consequence is what separates the complete answer from the schematic-only one. Write the decoder equations in one line each — examiners grade them like formulas.",
            ],
            keyTerms: [
              { term: "Chip select (CS#)", definition: "The active-low enable a decoder drives; the chip ignores the bus without it." },
              { term: "74LS138", definition: "3-to-8 decoder with active-low outputs and enable gates — the classic chip-select part." },
              { term: "Full decoding", definition: "Every high address line participates — one chip, one unique range." },
              { term: "Fold-back (shadow)", definition: "Aliased ranges produced when decode lines are ignored." },
              { term: "Memory map", definition: "The table of address ranges and the devices occupying them." },
            ],
            diagram: {
              kind: "flow",
              title: "Decoding an 8 KB EPROM at F0000h",
              caption: "High lines decide where, low lines decide which byte.",
              steps: [
                { label: "A19-A13 = 1111000", note: "high lines fixed for the F0000h block" },
                { label: "74LS138 decodes", note: "the combination drives one active-low CS#" },
                { label: "A12-A0 select inside", note: "8192 byte cells on the chip" },
                { label: "RD# + data lines", note: "chip drives D0-D7 during the read" },
              ],
            },
            bullets: [
              "High lines -> decoder -> CS#; low lines -> chip internals: the universal split.",
              "74LS138: 3 select inputs, 8 active-low outputs, enable gates tie in RD#/WR# or M/IO#.",
              "Full decoding: every high line used — unique range, more gates.",
              "Partial decoding: lines ignored -> aliased shadow ranges at every ignored combination.",
              "8 KB chip: A12-A0 inside; decode A19-A13 = 1111000 -> F0000h-F1FFFh.",
              "OE# gates the read, WE# the write; both come strobed from the bus timing.",
            ],
            table: {
              caption: "A working PC-style memory map.",
              headers: ["Range", "Device", "Why there"],
              rows: [
                ["00000h-3FFFFh", "256 KB RAM", "interrupt vectors + DOS + program load area"],
                ["A0000h-BFFFFh", "video RAM", "display buffers map here"],
                ["C0000h-EFFFFh", "adapter ROM/RAM", "option ROMs and expansion windows"],
                ["F0000h-F1FFFh", "8 KB EPROM (decode example)", "firmware near the top of the map"],
                ["FFFF0h", "reset vector", "the CPU starts here after RESET"],
              ],
            },
            callout: {
              type: "warning",
              title: "Shadow addresses are real",
              body: "Ignore A14 in a decode and the same chip answers at two ranges 16 KB apart — writes go to both. Examiners ask 'what addresses does this chip respond to?' to catch exactly this: enumerate every combination of the ignored lines.",
            },
            examQuestions: [
              {
                q: "Interface an 8 KB EPROM and a 32 KB RAM to an 8086 system. Draw the address-bus split, derive the decoded ranges and distinguish full from partial decoding with the shadow-address consequence.",
                marks: 14,
                outline: [
                  "Split: high lines -> decoder -> CS#; low lines -> chip",
                  "EPROM 8 KB: A12-A0 inside; A19-A13 = 1111000 -> F0000h-F1FFFh",
                  "RAM 32 KB: A14-A0 inside; decode A19-A15 = 00000 -> 00000h-07FFFh",
                  "74LS138 outputs drive CS#; RD#/WR# strobe OE#/WE#",
                  "Full decoding = every line used, unique ranges",
                  "Partial decoding ignores lines -> shadow ranges 2^k fold",
                  "Memory map: vectors low, firmware high",
                ],
              },
              {
                q: "A decoder uses A19-A16 only for an 8 KB EPROM. List every range the chip responds to and explain the hazard.",
                marks: 7,
                outline: [
                  "8 KB chip uses A12-A0; A15-A13 are ignored by its decode",
                  "A19-A16 = 1111 gives a 128 KB window, 16 aliases of 8 KB",
                  "Ranges: F0000h, F2000h, F4000h, ... FFF00h... every 8 KB step",
                  "A write to any alias corrupts the same cells",
                  "Fix: full decoding of A19-A13",
                  "Hazard name: fold-back / shadow addressing",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Memory and I/O interfacing: the three data transfer schemes",
            body: [
              "Memory and I/O interfacing answer the same question — how does data move between the CPU and the outside? — with three schemes. Programmed I/O: the CPU polls a status port and moves each byte itself (IN AL, DX after testing a ready bit). Interrupt-driven I/O: the device raises a line when ready; the CPU serves it in an ISR, doing nothing meanwhile. DMA: a controller (the 8237 of Unit IV) takes the bus and moves whole blocks with zero CPU involvement per byte. The 8086 separates the two spaces with M/IO#: memory instructions for memory, IN/OUT for ports.",
              "One device, three answers: reading a 512 KB image from an ADC. Polling: loop 'test EOC bit; IN AL, DX; store' — the CPU spends all its cycles testing. Interrupt-driven: the ADC's EOC raises INTR per line; the ISR stores one byte — CPU overhead per byte, but the main program runs between lines. DMA: the 8237 counts 512 KB in one fly-by burst; the CPU initializes and waits. Rate decides: switches poll, keyboards and serial lines interrupt, disks and displays DMA. M/IO# keeps the two spaces apart throughout — MOV reaches memory, IN and OUT reach ports, and no device answers in the wrong space.",
              "State the trade in one line per scheme — CPU work per byte, top rate, hardware cost — and the comparison table completes the answer. The fork below is the decision: start from the device's data rate, not from preference, and the chosen scheme justifies itself. Quote the two orderings side by side — rate (DMA > interrupt > polling) and cost reversed — with one device per scheme, and the contrast is complete.",
            ],
            keyTerms: [
              { term: "Polling", definition: "Programmed I/O — the CPU tests a status port in a loop and moves every byte." },
              { term: "Interrupt-driven I/O", definition: "The device signals; an ISR serves each event between main-program work." },
              { term: "DMA", definition: "Direct Memory Access — a controller moves blocks on the bus without the CPU." },
              { term: "I/O port", definition: "A latched register window on the bus, addressed 0000h-FFFFh in the 8086's I/O space." },
              { term: "M/IO#", definition: "The status pin separating memory cycles from port cycles." },
            ],
            diagram: {
              kind: "fork",
              title: "How does data move between device and CPU?",
              caption: "Rate chooses the scheme — each costs a different mix of CPU time and hardware.",
              start: "Device wants to transfer",
              branches: [
                { label: "Low rate, simple device", outcome: "programmed I/O — CPU polls and moves every byte", good: true },
                { label: "Event-driven, moderate rate", outcome: "interrupt-driven — device signals, ISR serves per event", good: true },
                { label: "High rate, block transfer", outcome: "DMA — 8237 moves the block, CPU initializes only", good: true },
              ],
            },
            bullets: [
              "Programmed I/O: CPU tests status and moves every byte — simplest, slowest.",
              "Interrupt-driven: device signals; ISR serves per event — CPU free between events.",
              "DMA: controller owns the bus per block — fastest, needs 8237-style hardware.",
              "M/IO# splits the 1 MB memory space from the 64 KB I/O space.",
              "I/O ports are addressed 00h-FFh directly or 0000h-FFFFh via DX.",
              "Choose by rate: poll switches, interrupt serial/keyboard, DMA disk/display.",
            ],
            table: {
              caption: "Three data transfer schemes.",
              headers: ["Scheme", "CPU work per byte", "Top rate", "Typical use"],
              rows: [
                ["Programmed (polling)", "an IN plus a status test loop", "slowest", "switch panels, status lamps"],
                ["Interrupt-driven", "context save + ISR on each event", "moderate", "keyboard, serial lines"],
                ["DMA (8237)", "initialise once, then zero", "bus-limited", "disk, display refresh, sound"],
              ],
            },
            callout: {
              type: "tip",
              title: "Rate chooses the scheme",
              body: "Answer scheme questions by device rate, not by preference: polling wastes cycles at high rates, interrupts drown at very high rates, DMA costs hardware for low rates. One sentence per scheme naming its device class is a complete 7-mark contrast.",
            },
            examQuestions: [
              {
                q: "Compare programmed I/O, interrupt-driven I/O and DMA on CPU involvement, transfer rate, hardware cost and suitable devices. Give one example device for each.",
                marks: 7,
                outline: [
                  "Polling: CPU tests status and moves every byte — switches, lamps",
                  "Interrupt-driven: ISR per event; CPU free between — keyboard, serial",
                  "DMA: controller moves blocks; CPU initializes only — disk, display",
                  "Rate ordering: DMA > interrupt > polling",
                  "Hardware cost ordering: DMA > interrupt > polling",
                  "M/IO# separates the port space from memory space",
                ],
              },
              {
                q: "A 512 KB image must be read from an ADC. Explain how each transfer scheme would perform it and which you would choose, with justification.",
                marks: 7,
                outline: [
                  "Polling: CPU-loop per byte — 512 KB of cycles wasted on testing",
                  "Interrupt-driven: EOC raises INTR per line; ISR stores one byte",
                  "Still per-byte overhead across half a megabyte",
                  "DMA: 8237 counts the block in fly-by cycles",
                  "Choice: DMA — block size and rate justify the hardware",
                  "CPU only programs address/count and waits for EOP",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "I/O ports and basic interfacing: the 8255 PPI and the MDS",
            body: [
              "An I/O port is a latched window on the bus; the 8255 Programmable Peripheral Interface provides three of them (A, B, C — each 8 bits) behind one control register. A mode word (bit 7 = 1) sets operation: mode 0 is plain input/output per port, mode 1 adds handshaking via port C's strobe lines, mode 2 makes port A bidirectional. Bits D4 (port A direction), D3 (C upper), D1 (port B) and D0 (C lower) choose input (1) or output (0); bit 7 = 0 instead selects bit set/reset for single port C lines. The Microcomputer Development System (MDS) is the workbench that edits, assembles, links and emulates such designs.",
              "Configure switches on A, LEDs on B: the mode word is 1 00 1 1 0 0 1 = 99h — mode 0, A input, C-upper input, B output, C-lower output. OUT 83h, AL programs it once; then IN AL, 80h reads the switches and OUT 81h, AL drives the LEDs. In mode 1 the handshake automates the same flow: the peripheral pulses STB# to latch data, IBF rises, INTR asks the CPU, and the IN instruction clears IBF — the cycle below is the answer to any 'explain 8255 handshaking' question. The four addresses are 80h-83h: port A, port B, port C and the control register, so the base decode fixes all four at once.",
              "Control-word questions are bit-by-bit: write the 8 bits, label each, then give the hex. 99h for the switch/LED map and 80h for all-output are the two worth memorizing. Attach the MDS line — editor, assembler, linker, in-circuit emulator — because the syllabus names the development system beside the interfacing hardware. Sketch the four addresses (80h-83h) beneath the byte: the port map turns the control word into a working design, and the MDS line completes it.",
            ],
            keyTerms: [
              { term: "PPI (8255)", definition: "Programmable Peripheral Interface — three 8-bit ports plus one control register." },
              { term: "Mode 0/1/2", definition: "Basic I/O, strobed handshake, and bidirectional port A respectively." },
              { term: "Handshake lines", definition: "STB#, IBF, INTR — port C pins that pace mode 1 transfers." },
              { term: "Bit set/reset (BSR)", definition: "Control words with bit 7 = 0 set or clear single port C pins." },
              { term: "MDS", definition: "Microcomputer Development System — editor, assembler, linker, in-circuit emulator." },
            ],
            diagram: {
              kind: "cycle",
              title: "8255 mode 1 input handshake",
              caption: "Port A with strobe: the peripheral and the CPU take turns.",
              steps: [
                { label: "STB# low", note: "peripheral latches data into port A" },
                { label: "IBF rises", note: "input buffer full — port busy" },
                { label: "INTR asserts", note: "8255 asks the CPU to read" },
                { label: "IN AL, port", note: "CPU drains the latch; IBF falls" },
              ],
            },
            bullets: [
              "8255: ports A, B, C (8 bits each) + one control register — four addresses total.",
              "Mode word bit 7 = 1 selects mode set; bit 7 = 0 selects bit set/reset on port C.",
              "Mode 0: simple I/O; mode 1: handshake (STB#, IBF, INTR) on A or B; mode 2: bidirectional A.",
              "Direction bits: D4 = A, D3 = C upper, D1 = B, D0 = C lower; 1 = input, 0 = output.",
              "99h = A and C-upper in, B and C-lower out; 80h = all ports output.",
              "MDS = editor + assembler + linker + in-circuit emulator for developing such interfaces.",
            ],
            codeExample: {
              language: "asm",
              caption: "ppi8255.asm — ports configured and used",
              code: `PPICR   EQU  83h          ; control register address
PRA     EQU  80h          ; port A
PRB     EQU  81h          ; port B
        MOV  AL, 99h      ; 1 00 1 1 0 0 1 :
                          ; mode 0, A in, C-upper in, B out, C-lower out
        OUT  PPICR, AL
WAITIN: IN   AL, PRA      ; read switches wired to port A
        OR   AL, AL
        JZ   WAITIN       ; wait for any bit set
        NOT  AL
        OUT  PRB, AL      ; drive LEDs wired to port B`,
            },
            callout: {
              type: "exam",
              title: "Bit 7 is the mode gate",
              body: "The single most confused bit in the 8255: D7 = 1 means 'this byte is a mode word'; D7 = 0 means 'set or clear one pin of port C'. Examiners set a BSR byte (like 09h) and ask what happens — the answer is 'pin PC4 set, ports untouched'.",
            },
            examQuestions: [
              {
                q: "Describe the 8255 PPI's ports and operating modes. Derive the control word for port A input and port B output in mode 0, and explain the mode 1 input handshake.",
                marks: 14,
                outline: [
                  "Three 8-bit ports + control register; four addresses",
                  "Mode 0 basic I/O, mode 1 handshake, mode 2 bidirectional A",
                  "Control word bits: D7 mode gate, D6-D5 A mode, D4 A dir, D3 C-up, D2 B mode, D1 B dir, D0 C-low",
                  "A in, B out: 1 00 1 0 0 0 0 = 90h",
                  "Mode 1 input: STB# latches, IBF reports full, INTR requests",
                  "IN clears IBF and INTR — the cycle repeats",
                ],
              },
              {
                q: "Write the initialization and I/O sequence to read switches on port A and drive LEDs on port B of an 8255 at base address 80h.",
                marks: 7,
                outline: [
                  "Control register at 83h; ports at 80h/81h/82h",
                  "Mode word 99h: mode 0, A in, B out, C split as coded",
                  "OUT 83h, AL programs it once",
                  "IN AL, 80h reads the switches",
                  "Optional invert: NOT AL",
                  "OUT 81h, AL drives the LEDs",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Microcontrollers and single-chip microcomputers",
            body: [
              "A microcontroller is a computer shrunk to one chip: CPU, ROM, RAM, parallel ports, timers and often a UART, integrated to run one fixed program forever. Intel's ladder: the 8048/8748 (1 KB ROM, 64 B RAM, 27 I/O lines, one timer — the 8748 swaps ROM for UV EPROM), the 8049 with doubled store, the 8051 (4 KB ROM, 128 B RAM, four 8-bit ports, two 16-bit timers, a UART, five interrupt sources — the archetype), the 16-bit 8096 with high-speed I/O and an on-chip ADC, and the 2920, an analog signal processor with ADC and DAC on chip.",
              "The 8051 earns its exam slot by the numbers: 4 KB on-chip ROM holds the wash program; 128 B of RAM holds state; 32 port lines drive pumps, valves and the panel without a single external chip; two timers pace the cycles; the UART talks to a service tool. A microprocessor system doing the same job needs 8086 + EPROM + RAM + 8255 + 8254 + 8251 — six parts versus one, with slower boot and higher cost. The trade is flexibility: changing the wash program means reprogramming ROM, not swapping software.",
              "The exam contrasts microprocessor and microcontroller with examples, or lists the family features. The compare diagram is the contrast; the table is the list. Close with the naming rule — 87x means EPROM program store, 80x means mask ROM — because it is the one feature question examiners can ask about any chip in the family. The six-chips-versus-one count is the sentence that seals the contrast.",
            ],
            keyTerms: [
              { term: "Microcontroller", definition: "CPU + ROM + RAM + ports + timers integrated on one chip for dedicated control." },
              { term: "8051", definition: "The archetype 8-bit MCU: 4 KB ROM, 128 B RAM, 4 ports, 2 timers, UART." },
              { term: "8748", definition: "The 8048 with EPROM program store — field-programmable, UV-erasable." },
              { term: "High-speed I/O", definition: "The 8096's hardware capture/compare units that time events without software." },
              { term: "Analog signal processor", definition: "The 2920 — ADC, digital processing and DAC on one chip." },
            ],
            diagram: {
              kind: "compare",
              title: "Microprocessor system vs microcontroller",
              caption: "Six chips versus one — flexibility against integration.",
              left: {
                heading: "8086-based system",
                items: [
                  "CPU separate from memory and I/O chips",
                  "1 MB addressable, buses running across the board",
                  "General computing — flexible, upgradeable",
                  "Higher cost, larger board, more power",
                ],
              },
              right: {
                heading: "8051 single-chip",
                items: [
                  "CPU + 4 KB ROM + 128 B RAM on one die",
                  "4 ports, 2 timers, UART built in",
                  "Dedicated control — fixed program, instant boot",
                  "Fewer pins, lower cost, lower power",
                ],
              },
            },
            bullets: [
              "Single-chip microcomputer = CPU + ROM + RAM + ports + timers on one die.",
              "8048/8748: 1 KB ROM / 64 B RAM, 27 I/O lines, 1 timer; 8748 uses EPROM.",
              "8051: 4 KB ROM, 128 B RAM, 4 ports, 2 timers, UART, 5 interrupt sources.",
              "8096: 16-bit CPU, high-speed I/O, on-chip 10-bit ADC — motor and engine control.",
              "2920: analog signal processor — ADC, digital filter, DAC on one chip.",
              "Microcontroller wins on pins, boot and cost; microprocessor systems win on memory space and flexibility.",
            ],
            table: {
              caption: "Single-chip family features.",
              headers: ["Chip", "CPU width", "On-chip ROM/RAM", "Peripherals"],
              rows: [
                ["8048 / 8748", "8-bit", "1 KB ROM / 64 B RAM (8748: EPROM)", "27 I/O lines, 1 timer"],
                ["8049", "8-bit", "2 KB ROM / 128 B RAM", "as 8048 with more store"],
                ["8051", "8-bit", "4 KB ROM / 128 B RAM", "4 ports, 2 timers, UART, 5 interrupts"],
                ["8096", "16-bit", "8 KB ROM / 232 B register file", "high-speed I/O, 10-bit ADC"],
                ["2920", "signal processor", "program + coefficient store", "on-chip ADC/DAC for analog signals"],
              ],
            },
            callout: {
              type: "tip",
              title: "8748 vs 8048 is one letter",
              body: "The 87x prefix marks EPROM program store (UV-erasable, field-programmable); 80x is masked ROM programmed at the factory. Same die, same pins — the exam question is usually just this naming rule.",
            },
            examQuestions: [
              {
                q: "Contrast a microprocessor-based system with a microcontroller, using the 8051's resources as the example. State one application where each wins.",
                marks: 7,
                outline: [
                  "Microcontroller integrates CPU, ROM, RAM, ports, timers, UART",
                  "8051: 4 KB ROM, 128 B RAM, 4 x 8-bit ports, 2 timers",
                  "One chip replaces 8086 + EPROM + RAM + 8255 + 8254 + 8251",
                  "Wins: pins, boot time, cost, power",
                  "Microprocessor system wins on memory space and software flexibility",
                  "Applications: appliance control (MCU) vs general computing (MPU)",
                ],
              },
              {
                q: "List the features of the 8048/8748, 8049, 8051, 8096 and 2920, and name one application for each.",
                marks: 7,
                outline: [
                  "8048/8748: 1 KB ROM / 64 B RAM, 27 I/O lines, 1 timer — keyboard controller",
                  "8049: 2 KB ROM / 128 B RAM — same family, more store",
                  "8051: 4 KB ROM, 128 B RAM, 4 ports, 2 timers, UART — appliance/industrial control",
                  "8096: 16-bit, high-speed I/O, ADC — motor and engine control",
                  "2920: on-chip ADC/DAC — analog signal processing",
                  "8748 note: EPROM store, field-programmable",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "I/O processors and math coprocessors (8087/80287/80387)",
            body: [
              "Two coprocessor species share the 8086's bus. I/O processors offload input/output entirely: the 8089 has its own instruction set and two DMA channels, and the UPI-41/42 family (8041/8042) is a slave microcontroller with its own ROM, RAM and ports that runs keyboards and printers while the main CPU computes. Math coprocessors accelerate numerics: the 8087 holds eight 80-bit registers as a stack and executes FADD, FSUB, FMUL, FDIV, FSQRT and trigonometric instructions in hardware; the 80287 serves the 286, the 80387DX/SX the 386, and the 486 absorbed the whole unit onto the die.",
              "The 8087's trick is parallelism: its opcodes are 8086 ESC (escape) instructions, so both processors read the same instruction queue — the 8086 fetches and ignores, the 8087 captures and executes. Program flow: FINIT resets; FLD AREA1 pushes an operand; FADD AREA2 adds on the stack; FSQRT computes an 80-bit square root in hardware; FSTP RESULT stores and pops; FWAIT (WAIT) makes the CPU pause on TEST until BUSY# clears, so no one reads a half-finished result. Numeric work that took a hundred software steps runs in one instruction pair.",
              "The exam asks how the 8087 connects and synchronizes, or to compare the coprocessor family. Answer with the ESC/queue mechanism, the WAIT/TEST handshake and the register stack — the pipeline below is that answer. Add the family line (8087 for 8086, 80287 for 286, 80387DX/SX for 386, integrated in 486) and the 'math processor' clause of the syllabus closes with the family line: 8087, 80287, 80387DX/SX, integrated from the 486 on.",
            ],
            keyTerms: [
              { term: "Math coprocessor", definition: "A numeric accelerator — 8087/80287/80387 — executing floating-point in hardware." },
              { term: "ESC instruction", definition: "The escape opcode family the 8086 fetches but the 8087 executes." },
              { term: "Register stack", definition: "Eight 80-bit registers in the 8087, used LIFO for numeric operands." },
              { term: "BUSY#/TEST handshake", definition: "The 8087 asserts BUSY#; the CPU's FWAIT waits on the TEST pin." },
              { term: "I/O processor (8089)", definition: "A slave CPU with two DMA channels that runs I/O programs independently." },
            ],
            diagram: {
              kind: "pipeline",
              title: "8086 and 8087 work in parallel",
              caption: "One queue, two consumers — the CPU skips, the coprocessor executes.",
              stages: [
                { label: "ESC opcode fetched", note: "8086 reads the numeric instruction bytes" },
                { label: "8087 captures it", note: "same queue — coprocessor decodes in step" },
                { label: "8087 executes", note: "80-bit stack arithmetic proceeds" },
                { label: "WAIT/TEST sync", note: "CPU pauses on FWAIT until BUSY# drops" },
              ],
            },
            bullets: [
              "8089 I/O processor: own instruction set, two channels — I/O runs parallel to compute.",
              "UPI-41/42 (8041/8042): slave MCU with ROM/RAM/ports — keyboards, printers, front panels.",
              "8087: eight 80-bit stack registers, hardware add/subtract/multiply/divide/sqrt/trig.",
              "Opcodes shared as ESC: both CPUs watch the queue; the 8087 executes what the 8086 skips.",
              "FWAIT/TEST synchronizes: the CPU stalls while BUSY# is asserted.",
              "Family: 8087 (8086), 80287 (286), 80387DX/SX (386); the 486 integrates it as the FPU.",
            ],
            codeExample: {
              language: "asm",
              caption: "math87.asm — the 8087 computes while the CPU waits",
              code: `        FINIT             ; reset the 8087 stack
        FLD  AREA1        ; push first operand
        FADD AREA2        ; add, result on stack top
        FSQRT             ; 80-bit hardware square root
        FSTP RESULT       ; store and pop
        FWAIT             ; CPU waits until BUSY# clears`,
            },
            callout: {
              type: "warning",
              title: "FWAIT is not optional",
              body: "After an 8087 instruction, the 8086 has already moved on. Reading a result without FWAIT reads stale memory — the classic bug. Every mixed CPU/87 sequence ends in FWAIT before the result is touched.",
            },
            examQuestions: [
              {
                q: "Explain how the 8087 math coprocessor works with the 8086: the ESC opcode mechanism, the shared queue, the register stack and the FWAIT/TEST synchronization.",
                marks: 7,
                outline: [
                  "8087 opcodes are 8086 ESC instructions",
                  "Both processors monitor the same instruction queue",
                  "8086 fetches and ignores; 8087 captures and executes",
                  "Eight 80-bit registers used as a stack",
                  "FADD/FSUB/FMUL/FDIV/FSQRT run in hardware",
                  "FWAIT stalls the CPU on TEST until BUSY# clears",
                ],
              },
              {
                q: "Compare the 8089, UPI-41/42 and 8087 coprocessors by the work each offloads, with one example task for each.",
                marks: 7,
                outline: [
                  "8089: I/O processor — own instruction set, two DMA channels",
                  "Example: disk block transfer without CPU involvement",
                  "UPI-41/42 (8041/8042): slave MCU with ROM/RAM/ports",
                  "Example: keyboard scanning and encoding",
                  "8087: math coprocessor — 80-bit numeric stack",
                  "Example: hardware square root and trigonometrics",
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
      title: "Peripheral Chips, Buses and Video/Disk Systems",
      summary:
        "Unit IV wires the system to the world: the bus interface with I/O port addressing and decoding, the 8279 keyboard/display controller with its FIFO and scan clock, the 8254 interval timer and its six modes, the 16550 serial interface, the 8259A interrupt controller with ICWs and OCWs and vector math, the 8237 DMA controller and shared-bus operation, disk and video subsystems with the 8275 and 6845 CRT controllers and the 8272 floppy controller, and the bus ladder from ISA through EISA, VESA and PCI to AGP, USB and the parallel printer port.",
      chapter: {
        number: "04",
        title: "The Peripheral Chips and the Bus Family",
        intro:
          "Unit IV covers bus interface and I/O port addressing with decoding, the 8279 programmable keyboard/display interface, the 8254 internal timer, the 16550 programmable communication interface, the 8259A programmable interrupt controller, the 8237 DMA controller with shared bus operation, disk memory and video display systems, the ISA/EISA/VESA/PCI/AGP/USB/LPT bus family, the 8251 USART, the 8275/6845 CRT controllers, the 8272 floppy disk controller and the 8089 I/O processor.",
        inOneBreath:
          "Ports decode A0-A15 with M/IO# through a 74LS138; the 8279 scans 64 keys into a FIFO and refreshes the display on its own prescaled clock; the 8254's three 16-bit counters divide clocks in six modes (count = clock/target); the 8259A turns eight IR lines into vector types (base + IR, vector at type x 4) under ICW/OCW programming; the 8237 fly-by transfers a block after HOLD/HLDA takes the bus; the 16550 divides 1.8432 MHz by 16 x baud and frames bytes start-data-parity-stop; 8275/6845 refresh CRTs, 8272 reads floppies in three phases; ISA to USB is a bandwidth ladder.",
        sections: [
          {
            number: "4.1",
            title: "Bus interface and I/O port addressing and decoding",
            body: [
              "The 8086's I/O space is 64 KB wide, addressed by A15-A0 with M/IO# low. Two instruction forms reach it: IN AL, imm8 for ports 00h-FFh (a one-byte address inside the instruction) and IN AL, DX for any port 0000h-FFFFh (DX is the pointer). A 16-bit port is a pair — IN AX, DX reads the even and odd registers at once, the even port carrying the low byte. Decoding is the memory craft in miniature: high port lines into a 74LS138 (gated by M/IO#), low lines to the chip, and the RD#/WR# strobe timing the transfer.",
              "Decode the PC's timer block at ports 40h-43h. A7-A0 = 0100 00xx selects the 8254's four registers: A1-A0 pick counter 0/1/2/control, and A7-A5 = 010 into the 138's C-B-A inputs asserts the output that drives CS#, with A4-A2 = 000 tying the enable gates. IN AL, 41h then reads counter 1's count in one byte. The same gates carry M/IO#, so the block never answers memory reads — mixing the two spaces is the classic decode bug.",
              "Port questions ask for the decode equations and the IN/OUT sequence. Write 'M/IO# = 0 AND A7..A2 = 100000' before the byte — the equations are the marked half. Add the memory-mapped alternative in one line (devices living in memory space so every instruction reaches them) and the compare diagram's contrast is quoted without extra work. Pair one IN instruction with its port number — that pairing is the evidence the marker looks for.",
            ],
            keyTerms: [
              { term: "I/O port address", definition: "A 16-bit number in the 8086's separate 64 KB port space." },
              { term: "DX-indirect addressing", definition: "IN AL, DX — DX carries the port number for ports above FFh." },
              { term: "Port decoding", definition: "High port lines -> decoder -> CS#; low lines -> register select." },
              { term: "74LS138", definition: "3-to-8 decoder used to turn address combinations into chip selects." },
              { term: "Memory-mapped I/O", definition: "Devices placed in memory space so ordinary instructions address them." },
            ],
            diagram: {
              kind: "compare",
              title: "Isolated I/O vs memory-mapped I/O",
              caption: "A separate 64 KB port world, or devices living inside the memory map.",
              left: {
                heading: "Isolated I/O (8086 default)",
                items: [
                  "64 KB of port addresses, entered with M/IO# = 0",
                  "IN/OUT instructions only — no arithmetic on ports",
                  "The full 1 MB memory space stays free",
                  "Decoder driven from A0-A15 + M/IO#",
                ],
              },
              right: {
                heading: "Memory-mapped I/O",
                items: [
                  "Devices occupy memory addresses, M/IO# = 1",
                  "Every instruction works on device registers",
                  "Memory space shrinks by the mapped size",
                  "No dedicated I/O instructions — the decoder sees M/IO# = 1",
                ],
              },
            },
            bullets: [
              "I/O space: 64 KB on A15-A0, entered with M/IO# = 0; IN/OUT only.",
              "Direct form IN AL, imm8 covers 00h-FFh; DX-indirect covers all 64 KB.",
              "16-bit ports: IN AX reads even + odd registers in one cycle.",
              "Decode: high lines -> 74LS138 -> CS#; low lines -> register select; M/IO# in the enable gates.",
              "PC timer block: ports 40h-43h; A1-A0 pick the counter or control register.",
              "Memory-mapped alternative: devices live in memory space so every instruction reaches them.",
            ],
            codeExample: {
              language: "asm",
              caption: "ports.asm — isolated I/O in the two addressing forms",
              code: `        IN   AL, 41h      ; direct: 8-bit address, one-byte instruction
        MOV  DX, 0304h    ; ports above FFh need DX
        IN   AL, DX       ; indirect: the full 16-bit port space
        MOV  DX, 0080h
        OUT  DX, AL       ; drive the device register
        IN   AX, DX       ; 16-bit port: even + odd registers at once`,
            },
            callout: {
              type: "tip",
              title: "DX is the only door past FFh",
              body: "IN AL, 80h assembles the port into the opcode — 8 bits, no more. Every port above FFh must ride in DX; examiners ask 'how do you read port 300h?' precisely to see MOV DX, 0300h / IN AL, DX.",
            },
            examQuestions: [
              {
                q: "Explain isolated I/O addressing on the 8086 with the two IN/OUT forms, and decode the port range 40h-43h showing the decoder equations.",
                marks: 7,
                outline: [
                  "64 KB port space on A15-A0, M/IO# = 0",
                  "Direct: IN AL, imm8 for ports 00h-FFh",
                  "Indirect: IN AL, DX for any 16-bit port",
                  "16-bit access: IN AX, DX reads even + odd registers",
                  "40h-43h: A7-A5 = 010 -> 74LS138 output; A1-A0 pick register",
                  "M/IO# sits in the decoder's enable gates",
                ],
              },
              {
                q: "Contrast memory-mapped and isolated I/O with one advantage and one cost each, and state which instructions reach a memory-mapped device.",
                marks: 7,
                outline: [
                  "Isolated: separate 64 KB space; IN/OUT only; memory stays whole",
                  "Cost: dedicated instructions and decode logic",
                  "Memory-mapped: devices in memory space; M/IO# = 1",
                  "Advantage: every instruction — MOV, AND, INC — reaches the device",
                  "Cost: memory space shrinks; full address decode needed",
                  "Both decode from the same bus; only the M/IO# gate differs",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "The 8279 programmable keyboard/display interface",
            body: [
              "The 8279 pairs a 64-key keyboard interface with a 16-digit display, and runs both on its own clock. Eight command words program it: mode set (keyboard/display formats), clock (a 5-bit prescaler P that divides the input to about 100 kHz for scan and debounce), read FIFO, read display, write display, display blank/inhibit, clear, and interrupt/error mode. Key press: the scan lines SL0-3 walk the matrix, the return lines RL0-7 capture the column, the key code (CNTL, SHIFT, scan, return) enters an 8-byte FIFO and IRQ rises until the CPU drains it. The display RAM refreshes digit by digit automatically.",
              "Clock math first: input 2.5 MHz, want a 100 kHz scan -> prescaler P = 25, command 001 11001 = 39h. Mode set 00h chooses an 8-digit display, encoded scan, 2-key lockout. Read FIFO: 40h, then IN from the data port returns a code like 1Ah — CNTL = 0, SHIFT = 0, scan = 011, return = 010: row 3, column 2, no modifiers. Every keystroke repeats this loop while the display refresh proceeds untouched — which is the chip's whole selling point: the CPU never scans. The FIFO status byte reports how many codes wait and whether the queue overran, one more read the CPU makes when it chooses to.",
              "The exam wants the command set with one worked configuration and the key-code format. Compute the prescaler byte from a given clock — that arithmetic is the differentiate-between-students step. Close with the FIFO status byte (count and overrun bits) and the observation that IRQ auto-clears on read: two sentences that finish the chip's story. Show the prescaler division as a line — 2.5 MHz / 25 = 100 kHz — because that arithmetic is what gets graded.",
            ],
            keyTerms: [
              { term: "FIFO sensor RAM", definition: "The 8-byte buffer holding key codes until the CPU reads them." },
              { term: "Display RAM", definition: "16 bytes the 8279 refreshes to the digits automatically." },
              { term: "Scan lines (SL)", definition: "Outputs walking the keyboard matrix and display digits." },
              { term: "Return lines (RL)", definition: "Inputs capturing which column closed against the scanned row." },
              { term: "Prescaler", definition: "The clock command's 5-bit divisor, set to put the scan at ~100 kHz." },
            ],
            diagram: {
              kind: "cycle",
              title: "The 8279 service loop",
              caption: "Scanning and refreshing run on their own clock — the CPU only visits the FIFO.",
              steps: [
                { label: "Scan", note: "SL0-3 walk the keyboard rows and display digits" },
                { label: "Debounce + FIFO", note: "key code enters the FIFO; IRQ rises" },
                { label: "CPU reads FIFO", note: "read-FIFO command fetches the key code" },
                { label: "Display refresh", note: "display RAM streams out to the digits" },
                { label: "Repeat", note: "the scan clock keeps running meanwhile" },
              ],
            },
            bullets: [
              "8279: 64-key matrix + 16-digit display + 8-byte FIFO, all serviced by its own scan clock.",
              "Clock command 001 PPPPP: divide the input to ~100 kHz (2.5 MHz / 25 -> 39h).",
              "Key code = CNTL D7, SHIFT D6, scan D5-D3, return D2-D0.",
              "FIFO status gives count and overrun; IRQ auto-clears when the CPU reads the FIFO.",
              "Display RAM refresh is automatic — write the digits once, the chip keeps them lit.",
              "2-key lockout vs N-key rollover is the mode-set choice for key handling.",
            ],
            table: {
              caption: "The 8279 command set.",
              headers: ["Command byte", "Meaning", "Example"],
              rows: [
                ["000 D1 D0 K1 K0", "keyboard/display mode set", "00h: 8-digit display, encoded scan, 2-key lockout"],
                ["001 P P P P P", "program the clock prescaler", "39h: divide 2.5 MHz by 25 -> 100 kHz scan"],
                ["010 AI A A A A", "read FIFO / sensor RAM", "40h: read the FIFO"],
                ["011 AI A A A A", "read display RAM", "60h and up"],
                ["100 AI A A A A", "write display RAM", "80h and up"],
                ["111 CD CS CF CA", "clear display/FIFO", "D3h: clear all with 00 fill"],
              ],
            },
            callout: {
              type: "exam",
              title: "Prescaler first",
              body: "Every 8279 answer begins 'program the clock': divide the input to 100 kHz before any mode set — the scan and debounce times are defined at that rate. Quoting 39h with the division shown is the two marks most answers miss.",
            },
            examQuestions: [
              {
                q: "Describe the 8279's keyboard scanning and display refresh operation. List its command words and write a full initialization for a 2.5 MHz input clock with encoded scan and 2-key lockout.",
                marks: 7,
                outline: [
                  "SL0-3 scan rows; RL0-7 capture columns; debounce filters",
                  "Key code enters FIFO; IRQ rises until read",
                  "Display RAM refreshes digits automatically",
                  "Clock command: 2.5 MHz / 25 = 100 kHz -> 39h",
                  "Mode set 00h: 8-digit display, encoded scan, 2-key lockout",
                  "Read FIFO 40h; clear D3h as needed",
                ],
              },
              {
                q: "Decode the key code 1Ah read from the 8279's FIFO, and explain the FIFO status byte's role.",
                marks: 7,
                outline: [
                  "1Ah = 0001 1010: CNTL D7 = 0, SHIFT D6 = 0",
                  "Scan D5-D3 = 011 -> row 3",
                  "Return D2-D0 = 010 -> column 2",
                  "No modifiers held — a plain key",
                  "FIFO status: count of unread codes + overrun/error flags",
                  "IRQ auto-clears when the CPU reads the FIFO",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "The 8254/8253 programmable interval timer",
            body: [
              "The 8254 (and its 8253 ancestor) holds three independent 16-bit down-counters, each with CLK (input), GATE (enable) and OUT (result). A control word — SC1 SC0 (counter), RW1 RW0 (read/write length), M2 M1 M0 (mode), BCD — programs each counter once; counts load through the data port, LSB then MSB when RW = 11. Six modes: 0 interrupt on terminal count, 1 retriggerable one-shot, 2 rate generator, 3 square wave, 4 software-triggered strobe, 5 hardware-triggered strobe. Output frequency = input frequency / count; the PC runs counter 0 at 1.1931818 MHz with count 0 (= 65536) to make the 18.2 Hz tick.",
              "Make a 1 kHz square wave from a 1 MHz clock: count = 1 MHz / 1 kHz = 1000 = 03E8h. Control byte for counter 0, load LSB then MSB, mode 3, binary: 00 11 011 0 = 36h. Sequence: OUT 43h, 36h; OUT 40h, 0E8h (low); OUT 40h, 03h (high) — OUT0 then carries a 1 kHz square. Mode 2 with the same count gives a 1 us pulse every 1 ms instead; the mode nibble changes and the waveform changes shape, not rate. Reading the count back follows the same LSB-first order; the 8254's read-back latch is its one visible upgrade over the 8253. GATE low freezes the count in every mode except the hardware-strobe pair.",
              "Timer questions give a clock and a wanted frequency and ask for the program. Write count = fin/fout, the control byte bit-by-bit, then the three OUTs — the code below is that answer. State the LSB-then-MSB order explicitly and mention that count 0 means 65536: both are the detail lines examiners plant questions around. Name the two ports (43h, 40h) beside the bytes and give GATE its enable role for the closing mark.",
            ],
            keyTerms: [
              { term: "Down-counter", definition: "The 8254's counting element: decrements on CLK edges, fires OUT at terminal count." },
              { term: "Rate generator (mode 2)", definition: "OUT goes low for one clock every count cycles — a frequency divider." },
              { term: "Square-wave mode (mode 3)", definition: "OUT toggles at fin/(2 x count) — the symmetric divider." },
              { term: "Terminal count", definition: "The counter reaching zero — OUT changes state; reload follows per mode." },
              { term: "Count 0 = 65536", definition: "Loading 0000h counts 65536 steps — the PC's 18.2 Hz tick trick." },
            ],
            diagram: {
              kind: "pipeline",
              title: "One 8254 counter at work",
              caption: "Clock in, count down, waveform out — GATE is the hand on the tap.",
              stages: [
                { label: "CLK in", note: "clock edges arrive — 1.193 MHz in the PC" },
                { label: "CR -> CE", note: "count register loads the counting element" },
                { label: "Decrement", note: "CE counts down each edge if GATE allows" },
                { label: "OUT flips", note: "terminal count drives the output waveform" },
              ],
            },
            bullets: [
              "Three 16-bit counters; each = CLK in + GATE + OUT; counts decrement on CLK edges.",
              "Control word: counter (2) + read/write (2) + mode (3) + BCD (1).",
              "RW = 11: load LSB then MSB — order matters, and the count register is not the counter.",
              "Modes: 0 terminal-count interrupt, 1 one-shot, 2 rate generator, 3 square wave, 4/5 strobes.",
              "fout = fin / count; count 0000h means 65536 — the PC's 18.2 Hz tick.",
              "1 MHz -> 1 kHz square: control 36h, count 03E8h loaded as E8h then 03h.",
            ],
            codeExample: {
              language: "asm",
              caption: "timer8254.asm — counter 0 as a 1 kHz square wave",
              code: `TIMCTL  EQU  43h          ; control register
TIM0    EQU  40h          ; counter 0 data port
        MOV  AL, 36h      ; 00 11 011 0 : counter 0,
                          ; load LSB then MSB, mode 3, binary
        OUT  TIMCTL, AL
        MOV  AL, 0E8h     ; 1000 = 03E8h, low byte
        OUT  TIM0, AL
        MOV  AL, 03h      ; high byte
        OUT  TIM0, AL
        ; 1 MHz / 1000 = 1 kHz square wave on OUT0`,
            },
            callout: {
              type: "warning",
              title: "Count 0 is 65536",
              body: "A counter loaded with 0000h does not stop — it counts 65536 steps. The PC's 18.2 Hz tick (1.193 MHz / 65536) depends on exactly this quirk; answers that 'stop at zero' lose the mode-2/3 mark.",
            },
            examQuestions: [
              {
                q: "Describe the 8254's structure and its six operating modes. Write the control-word format field by field.",
                marks: 7,
                outline: [
                  "Three independent 16-bit counters: CLK, GATE, OUT each",
                  "Mode 0: interrupt on terminal count",
                  "Mode 1: retriggerable one-shot; mode 2: rate generator",
                  "Mode 3: square wave; modes 4/5: software/hardware strobe",
                  "Control word: SC1 SC0 | RW1 RW0 | M2 M1 M0 | BCD",
                  "RW = 11 loads LSB then MSB through the data port",
                ],
              },
              {
                q: "Program counter 0 of an 8254 to produce a 1 kHz square wave from a 1 MHz clock. Derive the count, the control byte and the loading sequence.",
                marks: 7,
                outline: [
                  "count = fin / fout = 1 MHz / 1 kHz = 1000 = 03E8h",
                  "Control: counter 0, LSB-then-MSB, mode 3, binary = 36h",
                  "OUT 43h, 36h (program the mode)",
                  "OUT 40h, 0E8h (low byte)",
                  "OUT 40h, 03h (high byte)",
                  "OUT0 toggles at 1 kHz; mode 2 would pulse instead",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "The 8259A programmable interrupt controller",
            body: [
              "The 8259A turns eight interrupt request lines (IR0-IR7) into one INTR, and manages the whole exchange: IRR latches requests, the priority resolver picks the highest unmasked, ISR marks the one being served, IMR masks lines via OCW1, and the cascade pins CAS0-2 (with SP#/EN#) stack up to 64 levels through slave 8259As. Initialization writes ICW1 (edge/level, single/cascade, IC4 follows), ICW2 (the vector base — the PC uses 08h, so IR0 delivers type 08h), ICW3 (the slave map) and ICW4 (8086 mode, auto or normal EOI); operation then flows through OCW1 (mask), OCW2 (EOI and priority rotation) and OCW3 (status reads).",
              "Vector arithmetic is the exam's favourite numeric: IR3 with base 08h delivers type 0Bh; the CPU multiplies by 4 to index the vector table — 0Bh x 4 = 002Ch — fetches the new IP from 002Ch-002Dh and the new CS from 002Eh-002Fh, then runs the handler. A full master initialization for the PC: OUT 20h, 11h (ICW1: edge, cascade, IC4); OUT 21h, 08h (ICW2 base); OUT 21h, 04h (ICW3: slave on IR2); OUT 21h, 01h (ICW4: 8086 mode, normal EOI); then OCW1 masks what is unused. Each interrupt ends with an EOI (OUT 20h, 20h) or the 8259A stops serving lower priorities.",
              "The 14-mark answer: block diagram (IRR/ISR/PR/IMR), the four ICWs in order, the OCWs, and the vector computation with the table addresses. The flow diagram plus the table below is that answer's skeleton. Close with the EOI discipline — without it the ISR bit stays set and lower-priority lines starve — because that sentence explains why hardware interrupts 'die' in badly written drivers.",
            ],
            keyTerms: [
              { term: "IRR/ISR/IMR", definition: "Request latch, in-service flag and mask register — the 8259A's three state banks." },
              { term: "ICW", definition: "Initialization Command Words 1-4, written in strict order at power-up." },
              { term: "OCW", definition: "Operation Command Words — mask (1), EOI/priority (2), status (3) during service." },
              { term: "End of interrupt (EOI)", definition: "OCW2's command clearing the ISR bit so lower priorities can fire." },
              { term: "Vector base", definition: "ICW2's T7-T3: IR0-IR7 deliver types base..base+7." },
            ],
            diagram: {
              kind: "flow",
              title: "One interrupt through the 8259A",
              caption: "Request to vector in five steps — the CPU sees only INTR and the type byte.",
              steps: [
                { label: "IR3 rises", note: "the device raises its request line" },
                { label: "IRR records", note: "priority resolver picks the highest unmasked" },
                { label: "INT to CPU", note: "8259A raises INTR; 8086 finishes the instruction" },
                { label: "INTA# cycles", note: "CPU acknowledges twice; ISR set, IRR cleared" },
                { label: "Type 0Bh driven", note: "D7-D0 carry the vector; CPU computes 0Bh x 4 = 2Ch" },
              ],
            },
            bullets: [
              "8 IR lines -> one INTR; cascade to 64 levels via CAS0-2 and slave ICW3 maps.",
              "ICW1-ICW4 in strict order; a non-cascaded system skips ICW3.",
              "ICW2 sets the vector base: PC uses 08h -> IR0-IR7 deliver types 08h-0Fh.",
              "Vector table math: type x 4 = IP address; +2 = CS address.",
              "OCW1 masks (1 = masked); OCW2 20h = non-specific EOI; OCW3 reads status.",
              "Without EOI the ISR bit stays set — lower-priority lines starve.",
            ],
            table: {
              caption: "8259A initialization and operation words.",
              headers: ["Word", "Written to", "Key bits"],
              rows: [
                ["ICW1", "20h (A0 = 0)", "edge/level trigger, cascade or single, IC4 needed"],
                ["ICW2", "21h", "vector base T7-T3 — 08h maps IR0 to type 08h"],
                ["ICW3", "21h", "slave map: 04h = a slave hangs on IR2"],
                ["ICW4", "21h", "8086 mode, AEOI or normal EOI, buffered mode"],
                ["OCW1", "21h", "interrupt mask — 1 masks that IR line"],
                ["OCW2", "20h", "EOI and priority: 20h = non-specific EOI"],
              ],
            },
            callout: {
              type: "warning",
              title: "Order is the initialization",
              body: "ICW1, then ICW2, then ICW3 only if cascaded, then ICW4 if ICW1 said so — the 8259A is a state machine that consumes them in sequence. One skipped or transposed word leaves the controller silent; the debug symptom is 'interrupts never arrive'.",
            },
            examQuestions: [
              {
                q: "Explain the 8259A's architecture (IRR, ISR, PR, IMR), its priority schemes and its initialization. Write the full ICW sequence for a PC master with base vector 08h and compute the vector table entries for IR3.",
                marks: 14,
                outline: [
                  "IRR latches, IMR masks, PR resolves, ISR marks in-service",
                  "Fully nested default: IR0 highest; rotation via OCW2",
                  "ICW1 = 11h: edge trigger, cascade, IC4 follows",
                  "ICW2 = 08h (base); ICW3 = 04h (slave on IR2)",
                  "ICW4 = 01h: 8086 mode, normal EOI",
                  "IR3 -> type 0Bh; 0Bh x 4 = 002Ch (IP), 002Eh (CS)",
                  "Every ISR ends with EOI (OUT 20h, 20h)",
                ],
              },
              {
                q: "Explain how eight 8259As cascade to 64 interrupt levels, and the roles of ICW3, CAS0-2 and SP#/EN# in that arrangement.",
                marks: 7,
                outline: [
                  "One master + up to 8 slaves; each slave owns 8 IR lines",
                  "Slave INT output feeds one master IR line",
                  "ICW3 in the master maps which lines carry slaves (04h = IR2)",
                  "ICW3 in the slave states its master line ID",
                  "CAS0-2 broadcast the winning slave's ID during INTA#",
                  "SP#/EN# (or the ICW4 buffered bits) decide master vs slave",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "The 8237 DMA controller and shared bus operation",
            body: [
              "The 8237 DMA controller moves data without the CPU: four channels, each with a 16-bit current address register, a 16-bit word-count register and a mode byte (transfer type, address increment, auto-initialize, and the mode itself — single, block, demand, cascade). A device raises DRQ; the 8237 drives HOLD to the CPU, receives HLDA, and performs a fly-by transfer — MEMR# + IOW# (read from memory to a device) or IOR# + MEMW# (the reverse) in one cycle, the address bus pointing at memory while DACK# points at the device. EOP# marks terminal count; auto-initialize reloads the registers for the next block.",
              "Program one block write of 1024 bytes into memory at 1000h on channel 1. Mask the channel (OUT 0Ah, 06h), clear the byte-pointer flip-flop (OUT 0Ch, 00h), write the address low then high (OUT 04h/05h, 00h then 10h), the count low then high (OUT 06h/07h, 0FFh then 03h — count = N - 1 = 03FFh), the mode byte (OUT 0Bh, 85h — block, increment, write, channel 1), then unmask (OUT 0Ah, 01h). The shared-bus story: the CPU is default master; the 8237 is a master only between HLDA and EOP, which is what 'shared bus operation' means.",
              "DMA questions want the register set, the handshake and one initialization with the N-1 count trick called out. The cycle diagram gives the handshake; the code gives the registers. Add the mode list in one line each — single re-arbitrates per byte, block bursts, demand follows DRQ, cascade daisy-chains other masters — and the answer covers the whole chip in a page.",
            ],
            keyTerms: [
              { term: "Fly-by transfer", definition: "One bus cycle performs memory read + I/O write (or reverse) — data never enters the CPU." },
              { term: "DRQ/DACK", definition: "The device's request line and the 8237's per-channel acknowledge." },
              { term: "HOLD/HLDA", definition: "The bus-arbitration pair by which the 8237 becomes bus master." },
              { term: "Word count (N-1)", definition: "The count register holds transfers-minus-one; 1024 bytes load as 03FFh." },
              { term: "Auto-initialize", definition: "On EOP, address and count reload from the base registers." },
            ],
            diagram: {
              kind: "cycle",
              title: "The DMA handshake round the bus",
              caption: "Request, grant, fly-by, release — the CPU sleeps while the block moves.",
              steps: [
                { label: "DRQ", note: "the device requests a channel" },
                { label: "HOLD -> HLDA", note: "8237 asks the CPU to float the buses" },
                { label: "Fly-by transfer", note: "address + MEMR#/IOW# or IOR#/MEMW# per cycle" },
                { label: "EOP#", note: "count exhausts; bus returns to the CPU" },
              ],
            },
            bullets: [
              "4 channels; per channel: current/base address (16-bit), word count (16-bit), mode byte.",
              "Handshake: DRQ -> HOLD -> HLDA -> fly-by transfer -> EOP#.",
              "Fly-by: one cycle does memory read + I/O write (or the reverse) — data never enters the CPU.",
              "Word count = N - 1: 1024 bytes load as 03FFh.",
              "Modes: single (re-arbitrate per byte), block (burst), demand (stop if DRQ drops), cascade.",
              "Auto-initialize reloads address and count on EOP — the refresh channel's trick.",
            ],
            codeExample: {
              language: "asm",
              caption: "dma8237.asm — one block channel set up",
              code: `        MOV  AL, 06h
        OUT  0Ah, AL       ; mask channel 1 while it is programmed
        MOV  AL, 00h
        OUT  0Ch, AL       ; clear the byte pointer flip-flop
        MOV  AL, 00h
        OUT  04h, AL       ; address low: channel 1 -> memory 1000h
        MOV  AL, 10h
        OUT  05h, AL       ; address high
        MOV  AL, 0FFh
        OUT  06h, AL       ; count low: 1024 bytes -> count 03FFh
        MOV  AL, 03h
        OUT  07h, AL       ; count high
        MOV  AL, 85h       ; mode: block, address+, write, channel 1
        OUT  0Bh, AL
        MOV  AL, 01h
        OUT  0Ah, AL       ; unmask — channel 1 is armed`,
            },
            callout: {
              type: "tip",
              title: "The N-1 register",
              body: "The 8237's count register holds transfers-minus-one — loading 0400h for 1024 bytes moves 1025. Every initialization question grades this: write 'count = N - 1 = 03FFh' explicitly before the OUTs.",
            },
            examQuestions: [
              {
                q: "Explain the 8237's register set, its four operating modes and the HOLD/HLDA handshake that implements shared bus operation.",
                marks: 7,
                outline: [
                  "Per channel: current/base address, word count, mode byte",
                  "Modes: single, block, demand, cascade",
                  "DRQ raises; 8237 drives HOLD; CPU answers HLDA",
                  "Fly-by cycles: MEMR#+IOW# or IOR#+MEMW#",
                  "EOP# at terminal count; auto-init reloads",
                  "CPU is default master; 8237 masters only HLDA->EOP",
                ],
              },
              {
                q: "Write the 8237 initialization to transfer 1 KB from an I/O device to memory at 1000h on channel 1, justifying every port write including the count value.",
                marks: 7,
                outline: [
                  "Mask ch1: OUT 0Ah, 06h — programming must not trigger",
                  "Clear byte pointer: OUT 0Ch, 00h",
                  "Address 1000h: OUT 04h/05h, 00h/10h",
                  "Count = N - 1 = 03FFh: OUT 06h/07h, 0FFh/03h",
                  "Mode 85h: block, increment, write (to memory), channel 1",
                  "Unmask: OUT 0Ah, 01h — channel armed",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Serial communication: the 16550 UART and the 8251 USART",
            body: [
              "Serial links send bits one wire at a time, framed in time: the line idles high, a start bit (low) announces the byte, 5-8 data bits follow LSB-first, an optional parity bit checks, and one or two stop bits (high) close the frame. The 16550 UART implements it for the PC: transmit and receive 16-byte FIFOs, a programmable baud generator, modem control and error flags — all through ports addressed by A2-A0 with the DLAB bit of the line-control register swapping in the divisor latch. The 8251 USART is the 8086-family companion, programmed by a mode instruction then a command instruction, with TxRDY/RxRDY handshakes.",
              "Baud arithmetic: the clock is 1.8432 MHz and the UART divides by 16 x divisor, so divisor = 1843200 / (16 x 9600) = 12. Initialization: OUT LCR, 80h (DLAB = 1); OUT DLL, 0Ch and DLM, 00h (divisor 12); OUT LCR, 03h (DLAB = 0, 8 data bits, no parity, 1 stop) — the line is ready. Status comes from LSR: bit 0 (data ready) says a byte arrived, bit 5 (THRE) says the transmitter is empty. Any baud from the table follows the same three writes — only the divisor changes.",
              "Serial questions ask for the frame format, the divisor computation, or a full init sequence. Compute the divisor first with the formula visible — that one line carries the mark. Then name the LSR bits you would poll and the DLAB rule, because the follow-up question is always 'why did the transmitter go silent?' and the answer is DLAB left set. Show the divisor division as a line — 1.8432 MHz / (16 x 9600) = 12 — because the arithmetic is what gets graded.",
            ],
            keyTerms: [
              { term: "UART/USART", definition: "Universal (Synchronous/Asynchronous) Receiver-Transmitter — the serial engine." },
              { term: "Baud rate", definition: "Bits per second on the wire; the 16550 divides 1.8432 MHz by 16 x divisor." },
              { term: "Divisor latch", definition: "DLL/DLM — the 16-bit baud divisor, exposed when DLAB = 1." },
              { term: "DLAB", definition: "LCR bit 7: 1 exposes the divisor latch; 0 restores the data registers." },
              { term: "THRE / DR", definition: "LSR bits 5 and 0 — transmitter empty and data ready, the two polled statuses." },
            ],
            diagram: {
              kind: "flow",
              title: "One asynchronous frame on TxD",
              caption: "The line idles high; every frame re-synchronizes on the falling start bit.",
              steps: [
                { label: "Idle", note: "line held at mark (1)" },
                { label: "Start bit", note: "space (0) for one bit time — receiver latches" },
                { label: "Data D0-D7", note: "5-8 data bits, LSB first" },
                { label: "Parity", note: "optional even/odd check bit" },
                { label: "Stop bit(s)", note: "1-2 mark bits; receiver waits for the next start" },
              ],
            },
            bullets: [
              "Frame: idle 1 -> start 0 -> D0-D7 (LSB first) -> optional parity -> 1-2 stop 1s.",
              "Baud = 1.8432 MHz / (16 x divisor): 9600 needs divisor 12 (DLL = 0Ch).",
              "DLAB (LCR bit 7) = 1 exposes the divisor latch; = 0 restores the data registers.",
              "16550: 16-byte TX/RX FIFOs reduce interrupt load versus the byte-at-a-time 8250.",
              "LSR: bit 0 = data ready (RX), bit 5 = transmitter holding empty (THRE).",
              "8251 USART: mode instruction (rate, length, parity, stop) then command instruction (enable, RTS/DTR).",
            ],
            table: {
              caption: "16550 divisor latch values (1.8432 MHz clock).",
              headers: ["Baud", "Divisor", "Register bytes"],
              rows: [
                ["9600", "12", "DLL = 0Ch, DLM = 00h"],
                ["4800", "24", "DLL = 18h, DLM = 00h"],
                ["2400", "48", "DLL = 30h, DLM = 00h"],
                ["1200", "96", "DLL = 60h, DLM = 00h"],
                ["110", "1047", "DLL = 17h, DLM = 04h"],
              ],
            },
            callout: {
              type: "warning",
              title: "Clear DLAB after the divisor",
              body: "Leave LCR bit 7 set and every subsequent write to port 0 goes into the divisor, not the transmitter — the UART then transmits nothing and 'the init failed'. The last LCR write (03h) exists precisely to clear DLAB; say so in the answer.",
            },
            examQuestions: [
              {
                q: "Explain asynchronous serial framing and initialize the 16550 for 9600 baud, 8 data bits, no parity, 1 stop bit — deriving the divisor.",
                marks: 7,
                outline: [
                  "Frame: idle 1, start 0, D0-D7 LSB first, parity, stop 1s",
                  "divisor = 1.8432 MHz / (16 x 9600) = 12",
                  "OUT LCR, 80h — DLAB = 1 exposes the latch",
                  "OUT DLL, 0Ch; OUT DLM, 00h",
                  "OUT LCR, 03h — DLAB cleared, 8-N-1 set",
                  "Poll LSR bit 5 (THRE) to send, bit 0 (DR) to receive",
                ],
              },
              {
                q: "Compare the 16550 UART and the 8251 USART programming models, and state where each fits.",
                marks: 7,
                outline: [
                  "16550: PC-style, divisor latch, FIFOs, LSR status polling",
                  "8251: mode instruction then command instruction after reset",
                  "8251 is synchronous-capable; the 16550 is async-only",
                  "Handshakes: TxRDY/RxRDY/TxE on the 8251; LSR bits on the 16550",
                  "16550 fits PC COM ports and modem links",
                  "8251 fits 8086-family bus designs and sync protocols",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Video and disk subsystems: 8275, 6845 and 8272",
            body: [
              "A CRT controller's job is relentless refresh: it must generate the memory addresses that walk the character RAM, the raster timing that synchronizes the monitor, and the blanking that hides retraces — all without CPU help. The 8275 is character-oriented: it DMA-fetches character rows at blanking intervals, feeds a character generator and supports up to 80 characters by 64 rows with special codes for cursors and attributes. The 6845 (MC6845) is the register-oriented controller inside MDA and CGA: 18 registers program horizontal and vertical timing, and its start-address register implements hardware scrolling by shifting where refresh begins.",
              "Disk storage shares the chapter's DMA discipline: the 8272 floppy disk controller reads and writes in FM or MFM, drives up to four disks, and works in three phases — command (the CPU writes the command and parameters), execution (the 8272 runs seek/read/write with DMA), result (the CPU reads status bytes). Capacity arithmetic: a 3.5-inch disk has 2 surfaces x 80 tracks x 18 sectors x 512 bytes = 1,474,560 bytes, the 1.44 MB figure; rotational latency at 300 rpm averages half a revolution = 100 ms, which is why floppies feel slow next to a 7200 rpm hard disk's 4.17 ms.",
              "Video/disk questions ask for the refresh pipeline or the controller phases. The pipeline diagram is the display answer; the three phases are the 8272 answer; quote the capacity formula with the numbers. Add the 6845's start-address line for scrolling and the FM/MFM distinction — encoding density is the one property that separates single- from double-density disks. Name the DMA role inside the execution phase — it ties the disk answer back to the 8237 of section 4.5.",
            ],
            keyTerms: [
              { term: "CRT controller", definition: "Generates refresh addresses, raster timing and blanking autonomously." },
              { term: "Character generator", definition: "ROM turning a character code into the dot rows the monitor paints." },
              { term: "Start address (scrolling)", definition: "The 6845 register that shifts where the refresh walk begins." },
              { term: "Command/execution/result phases", definition: "The 8272's three-stage discipline for every disk operation." },
              { term: "MFM recording", definition: "Modified Frequency Modulation — the double-density encoding of floppy data." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From character RAM to glowing phosphor",
              caption: "Five autonomous stages — the CPU only writes the codes.",
              stages: [
                { label: "CPU writes codes", note: "ASCII + attributes stored in character RAM" },
                { label: "CRTC addresses", note: "8275/6845 generates refresh addresses + raster timing" },
                { label: "DMA fetches", note: "character rows pulled at blanking intervals" },
                { label: "Serialize", note: "character generator -> shift register -> video" },
                { label: "Raster", note: "the monitor paints lines at 50-70 Hz" },
              ],
            },
            bullets: [
              "CRT controller = refresh address generation + raster timing + blanking, all autonomous.",
              "8275: character display up to 80 x 64, DMA-fetched rows, cursor/attribute codes.",
              "6845: 18 registers; start-address register gives hardware scrolling; heart of MDA/CGA.",
              "8272 FDC: FM/MFM, 4 drives, three phases — command, execution (DMA), result.",
              "Floppy capacity: 2 x 80 x 18 x 512 = 1,474,560 B = 1.44 MB.",
              "Rotational latency = half a revolution: 300 rpm -> 100 ms; 7200 rpm -> 4.17 ms.",
            ],
            table: {
              caption: "Video and disk controllers.",
              headers: ["Chip", "Job", "Notable detail"],
              rows: [
                ["8275 CRT controller", "character display refresh", "DMA fetches character rows; up to 80 columns x 64 rows"],
                ["6845 CRTC", "MDA/CGA raster timing", "18 registers; start address gives hardware scrolling"],
                ["8272 floppy disk controller", "FM/MFM disk read/write", "command -> execution -> result phases; 4 drives"],
              ],
            },
            callout: {
              type: "tip",
              title: "Start address = scroll",
              body: "Hardware scrolling in the 6845 is one register: write a new start address and the refresh walk begins elsewhere in character RAM — no data is copied. Citing this one register is the fastest complete answer to 'how does the 6845 scroll?'",
            },
            examQuestions: [
              {
                q: "Explain the CRT refresh pipeline from character RAM to raster, naming the roles of the 8275/6845, DMA and the character generator.",
                marks: 7,
                outline: [
                  "CPU writes ASCII codes + attributes into character RAM",
                  "CRTC generates refresh addresses and raster timing",
                  "8275 DMA-fetches rows at blanking intervals",
                  "Character generator turns codes into dot rows",
                  "Shift register serializes to the video signal",
                  "Monitor paints at 50-70 Hz; 6845 start address scrolls",
                ],
              },
              {
                q: "Describe the 8272 floppy disk controller's three operating phases and compute the 1.44 MB capacity from the disk's geometry.",
                marks: 7,
                outline: [
                  "Command phase: CPU writes command + parameters",
                  "Execution phase: seek/read/write runs with DMA",
                  "Result phase: CPU reads status bytes",
                  "FM vs MFM: single vs double density encoding",
                  "Capacity: 2 surfaces x 80 tracks x 18 sectors x 512 B",
                  "= 1,474,560 bytes = 1.44 MB",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "The PC bus family: ISA, EISA, VESA, PCI, AGP, USB and LPT",
            body: [
              "The PC bus is a history of bandwidth. ISA (Industry Standard Architecture) is the original 8/16-bit slot at 8.33 MHz — about 8 MB/s effective — and everything after it had to accept ISA cards. EISA widened it to 32 bits (33 MB/s) while staying pin-compatible; VESA local bus abandoned compatibility politics and hung devices directly on the CPU bus at 33-40 MHz; PCI made the bus processor-independent with its own 33/66 MHz clock, 32/64-bit width and plug-and-play enumeration — 133 MB/s at the base. AGP gave graphics a dedicated point-to-point port to memory (266-1066 MB/s effective); USB replaced the card slot entirely with a hot-pluggable serial tree of 127 devices; LPT remains the printer port in its SPP/EPP/ECP grades.",
              "Bandwidth arithmetic sorts the family: ISA 16-bit x 8.33 MHz = 16.6 MB/s theoretical (about 8 effective after protocol overhead); EISA doubles the width at the same clock = 33 MB/s; PCI 32-bit x 33 MHz = 133 MB/s; AGP 2x streams 533 MB/s to the frame buffer; USB 1.1's 12 Mb/s is 1.5 MB/s — slower than the 1993 ISA slot but self-configuring and hot-pluggable, which is why it won. The pattern: each tier decoupled more hardware from the CPU's own clock, ending with PCI's separate clock domain and enumeration.",
              "The comparison table with width, clock and throughput is the exam answer; the pyramid gives the ladder in one glance. Quote one bandwidth computation — it anchors every other number. Close with the compatibility rule (ISA cards everywhere until PCI) and the plug-and-play consequence of PCI's self-enumeration: two sentences that turn the table into analysis. One bandwidth computation quoted from the table anchors every other number you cite.",
            ],
            keyTerms: [
              { term: "ISA/EISA", definition: "The original 8/16-bit PC slot and its 32-bit compatible widening." },
              { term: "VESA local bus", definition: "32-bit devices hung directly on the CPU bus at 33-40 MHz." },
              { term: "PCI", definition: "Processor-independent 32/64-bit bus with its own clock and plug-and-play." },
              { term: "Plug and play", definition: "PCI's self-enumeration: cards report their needs; software assigns resources." },
              { term: "AGP/USB", definition: "A dedicated graphics port to memory, and the hot-pluggable serial device tree." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The bus ladder by bandwidth",
              caption: "Higher tiers move more data per second; compatibility flowed downward.",
              tiers: [
                { label: "AGP — 266-1066 MB/s", note: "dedicated graphics port, direct to memory" },
                { label: "PCI — 133-533 MB/s", note: "32/64-bit, own clock, plug-and-play" },
                { label: "EISA / VESA — 33-132 MB/s", note: "32-bit widenings of ISA and the CPU bus" },
                { label: "ISA — 8-16 MB/s", note: "16-bit, 8.33 MHz — the compatibility floor" },
                { label: "LPT / USB-1 — 0.15-1.5 MB/s", note: "parallel printer port and serial periphery" },
              ],
            },
            bullets: [
              "ISA: 8/16-bit at 8.33 MHz, ~8 MB/s effective — the compatibility floor.",
              "EISA: 32-bit, ISA-compatible, 33 MB/s; VESA: 32-bit local bus at 33-40 MHz.",
              "PCI: own clock domain, 32/64-bit, 133-533 MB/s, plug-and-play enumeration.",
              "AGP: dedicated graphics port, 266-1066 MB/s, direct access to the frame buffer.",
              "USB: serial tree up to 127 devices, hot-plug; 1.5 MB/s (1.1) to 60 MB/s (2.0).",
              "LPT: SPP/EPP/ECP parallel grades for printers and early scanners.",
            ],
            table: {
              caption: "The bus family, measured.",
              headers: ["Bus", "Width x clock", "Peak throughput", "Signature idea"],
              rows: [
                ["ISA", "16-bit x 8.33 MHz", "16.6 MB/s (~8 effective)", "the PC's original open slot"],
                ["EISA", "32-bit x 8.33 MHz", "33 MB/s", "ISA-compatible 32-bit burst"],
                ["VESA local bus", "32-bit x 33-40 MHz", "132-160 MB/s", "device hung straight on the CPU bus"],
                ["PCI", "32/64-bit x 33/66 MHz", "133-533 MB/s", "processor-independent, plug-and-play"],
                ["AGP", "32-bit x 66 MHz x 1-4", "266-1066 MB/s", "dedicated graphics pipe to memory"],
                ["USB 1.1 / 2.0", "serial", "1.5 / 60 MB/s", "hot-plug hubs, 127 devices per host"],
              ],
            },
            callout: {
              type: "tip",
              title: "One clock to rule them",
              body: "PCI's decisive idea is the separate clock: the bus runs at 33 MHz regardless of CPU speed, so cards outlive CPU generations — and because the bus enumerates itself, plug-and-play became possible. Name that decoupling and the PCI row of any comparison writes itself.",
            },
            examQuestions: [
              {
                q: "Compare ISA, EISA, VESA local bus, PCI, AGP and USB on width, clock and throughput, computing the theoretical rates for ISA and PCI.",
                marks: 7,
                outline: [
                  "ISA: 16-bit x 8.33 MHz -> 16.6 MB/s theoretical",
                  "EISA: 32-bit at the same clock -> 33 MB/s, ISA-compatible",
                  "VESA: 32-bit local bus at 33-40 MHz",
                  "PCI: 32-bit x 33 MHz -> 133 MB/s, own clock domain",
                  "AGP: dedicated graphics pipe, 266-1066 MB/s",
                  "USB: serial tree, 1.5-60 MB/s, hot-plug with 127 devices",
                ],
              },
              {
                q: "Explain PCI's processor-independence and plug-and-play enumeration, and why the two features belong together.",
                marks: 7,
                outline: [
                  "PCI runs on its own 33/66 MHz clock, not the CPU's",
                  "Cards survive CPU upgrades — the decoupling payoff",
                  "The bus enumerates devices at boot: IDs, bars, needs",
                  "Firmware/OS assign addresses and interrupts automatically",
                  "Self-description is possible only off the CPU's clock domain",
                  "Hence PnP is a consequence of the independent clock",
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
      title: "Memory Devices, Cache and Virtual Memory",
      summary:
        "Unit V descends into the memory world: what a memory unit is and how primary separates from secondary, the SRAM and DRAM cells with their refresh and multiplexing tricks, the ROM family from mask ROM through EPROM and EEPROM to nonvolatile RAM, the semiconductor technologies behind them and the shift register as serial memory, magnetic tape and disk with geometry and timing, cache memory with mapping schemes and the average-access formula, virtual memory with pages and page tables against real memory, and the closing arithmetic of buses, addressing capacity and processing speed.",
      chapter: {
        number: "05",
        title: "The Memory World",
        intro:
          "Unit V covers the memory unit and the RAM/ROM families — SRAM, DRAM, ROM, PROM, EPROM, EEPROM, nonvolatile RAM — the semiconductor technology behind them and shift registers, magnetic memory on tape and disk, main versus secondary memory, cache memory, program versus data memory, real and virtual memory, buses, and the memory addressing capacity and processing speed of the CPU.",
        inOneBreath:
          "Memory is a pyramid by speed and cost: registers and SRAM cache at nanoseconds, DRAM main memory at tens of nanoseconds refreshed every 2-4 ms, magnetic disk at milliseconds; ROM is programmed once — mask, fuse, UV (27xx parts number their bits: 2764 = 64 Kbit = 8 KB) or electrically (EEPROM, flash), NVRAM shadows it with a battery; cache trades on locality — Tavg = h x Tc + (1 - h) x (Tc + Tm); virtual memory maps logical pages through page tables with faults to disk; addressing capacity is 2^address-bits — 20 -> 1 MB, 24 -> 16 MB, 32 -> 4 GB.",
        sections: [
          {
            number: "5.1",
            title: "The memory unit and the memory hierarchy",
            body: [
              "The memory unit holds the program and its data; everything else about a computer's speed follows from where that unit sits. Primary memory (semiconductor) is byte-addressable by the CPU; secondary memory (magnetic, optical) is block-addressed through a controller. The systems split program memory from data memory — separate ROM and RAM spaces in microcontroller designs (a Harvard flavor), one shared space in von Neumann PCs. Because no single technology is simultaneously fast, large and cheap, real machines stack them: registers, SRAM cache, DRAM main memory, magnetic disk, tape — each level down bigger by orders of magnitude and slower by the same.",
              "The numbers justify the stack: registers respond in under a nanosecond and hold tens of bytes; SRAM cache answers in 1-10 ns and holds kilobytes to megabytes; DRAM main memory answers in 50-100 ns and holds gigabytes; magnetic disk answers in 5-10 ms and holds terabytes; tape answers in seconds and holds anything. Every ratio is roughly a thousand-to-one — 1000x the size, 1000x the wait. The hierarchy works only because programs spend most references near where they just were (locality), which section 5.6 exploits. Microcontrollers compress the extremes onto one die — the 8051's 4 KB ROM program space and 128 B RAM data space are the pyramid in two tiers.",
              "The exam draws the pyramid and asks which level serves which purpose. Answer with the four tiers, one technology and one latency each — the table has them all. Then add the primary/secondary and program/data distinctions in one line each, because the syllabus phrases those as separate clauses and the marker checks them separately. Draw the pyramid with four labels — speed, cost, size, volatility — and every 'why' question collapses into it.",
            ],
            keyTerms: [
              { term: "Primary vs secondary memory", definition: "Byte-addressable semiconductor the CPU addresses directly, vs block-addressed media behind a controller." },
              { term: "Program vs data memory", definition: "Separate code and data spaces (Harvard-style MCUs) vs one shared space (von Neumann)." },
              { term: "Memory hierarchy", definition: "Registers -> cache -> main memory -> disk -> tape, ordered by speed and cost." },
              { term: "Locality", definition: "References cluster in time (reuse) and space (neighbours) — what makes the stack work." },
              { term: "Volatility", definition: "RAM forgets at power-off; ROM and magnetic media remember." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The memory hierarchy",
              caption: "Fast and dear at the top, vast and slow at the bottom.",
              tiers: [
                { label: "Registers + cache", note: "sub-ns to ~10 ns access, kilobytes, SRAM" },
                { label: "Main memory (DRAM)", note: "50-100 ns, MB-GB, refreshed" },
                { label: "Magnetic disk", note: "5-10 ms, GB-TB, random block access" },
                { label: "Tape / archival", note: "seconds, TB+, sequential and cheap" },
              ],
            },
            bullets: [
              "Primary memory: byte-addressable, semiconductor, CPU-direct; secondary: block-addressed via controller.",
              "Program vs data memory: separate spaces in microcontrollers, one space in von Neumann PCs.",
              "Hierarchy: registers -> cache (SRAM) -> main (DRAM) -> disk -> tape.",
              "Each tier down: ~1000x larger, ~1000x slower, ~1000x cheaper per byte.",
              "Latency spine: <1 ns / 1-10 ns / 50-100 ns / 5-10 ms / seconds.",
              "The stack exists because locality lets a small fast level serve most references.",
            ],
            table: {
              caption: "Hierarchy numbers worth memorising.",
              headers: ["Level", "Typical access", "Typical size", "Technology"],
              rows: [
                ["Registers", "under 1 ns", "tens of bytes", "CPU flip-flops"],
                ["Cache", "1-10 ns", "8 KB - few MB", "SRAM"],
                ["Main memory", "50-100 ns", "MB-GB", "DRAM"],
                ["Disk", "5-10 ms", "GB-TB", "magnetic"],
                ["Tape", "seconds", "TB+", "magnetic, sequential"],
              ],
            },
            callout: {
              type: "tip",
              title: "One pyramid, four questions",
              body: "Speed, cost, size and volatility all improve in the same direction — up the pyramid. Draw it once with those four labels and it answers 'why cache?', 'why DRAM not SRAM for main memory?' and 'why disk for files?' in one stroke.",
            },
            examQuestions: [
              {
                q: "Explain the memory hierarchy with the technology, latency and role of each level, and state why no single memory technology can serve alone.",
                marks: 7,
                outline: [
                  "Registers: flip-flops, <1 ns, tens of bytes",
                  "Cache: SRAM, 1-10 ns, KB-MB — serves locality",
                  "Main memory: DRAM, 50-100 ns, MB-GB — the working set",
                  "Disk: magnetic, 5-10 ms, GB-TB — files",
                  "Tape: sequential, seconds — archive",
                  "Fast tech is small and dear; big tech is slow — hence the stack",
                ],
              },
              {
                q: "Distinguish primary from secondary memory and program memory from data memory, with one example system of each split.",
                marks: 7,
                outline: [
                  "Primary: byte-addressable semiconductor, CPU-direct (DRAM)",
                  "Secondary: block-addressed behind a controller (disk, tape)",
                  "Program/data split: Harvard-style MCUs keep separate ROM/RAM",
                  "Von Neumann PCs share one space for code and data",
                  "8051 example: 4 KB ROM program + 128 B RAM data",
                  "PC example: one 1 MB space holding both code and data",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "RAM: SRAM and DRAM",
            body: [
              "RAM stores and changes any byte at will; the two cell families split the work. SRAM builds each bit from a six-transistor flip-flop: it holds state while powered, needs no refresh, answers in 1-10 ns, and costs several times the silicon per bit — cache material. DRAM builds each bit from one transistor and one capacitor whose charge leaks: it must be refreshed every 2-4 ms (row-by-row RAS-only cycles), answers in 50-100 ns, and packs the most bits per wafer — main-memory material. DRAM also multiplexes its address pins: rows first (RAS), then columns (CAS), halving the pin count on large chips.",
              "Organization arithmetic: a 64K x 1 chip stores 65536 bits at one data pin and needs 16 address bits; with multiplexing that is 8 row lines (RAS) + 8 column lines (CAS). Build 64 KB of memory from them: 8 bits of word width need 8 such chips in parallel (each supplying one data line), all sharing the same decoded chip select. The same 64 KB in SRAM organized 64K x 4 takes 2 chips; in 16K x 4 takes 16 — density, not cleverness, is why DRAM owns main memory. Refresh keeps those banks alive: every row must be recharged within the interval, which is why the PC wires refresh to DMA channel 0 rather than trusting software.",
              "The exam contrasts SRAM and DRAM, or asks for the bank math. Answer cell technology -> speed -> refresh -> role, then one chip-count computation. Quote the refresh interval (2-4 ms) and the multiplexing pair (RAS/CAS) verbatim — those two facts are the follow-up question half the time. Show the bank math as a line — 8 chips x 1 bit = 8 bits of word width — and the chip count follows.",
            ],
            keyTerms: [
              { term: "SRAM", definition: "Six-transistor flip-flop cell — no refresh, 1-10 ns, cache material." },
              { term: "DRAM", definition: "One transistor + one capacitor — refreshed every 2-4 ms, dense, main memory." },
              { term: "Refresh", definition: "RAS-only cycles walking every row within 2-4 ms to restore leaked charge." },
              { term: "RAS/CAS", definition: "Row and column address strobes multiplexing one pin set over two phases." },
              { term: "Memory bank", definition: "Chips in parallel supplying the word width — 8 x 64K x 1 = 64 KB." },
            ],
            diagram: {
              kind: "compare",
              title: "SRAM vs DRAM",
              caption: "Speed against density — the cell decides everything.",
              left: {
                heading: "SRAM",
                items: [
                  "6-transistor flip-flop per bit — no refresh",
                  "1-10 ns access — cache territory",
                  "Low density, high cost per bit",
                  "Static power only while switching (CMOS)",
                ],
              },
              right: {
                heading: "DRAM",
                items: [
                  "1 transistor + 1 capacitor per bit",
                  "50-100 ns access, refresh every 2-4 ms",
                  "High density, cheapest per bit",
                  "RAS/CAS multiplexed addressing halves the pins",
                ],
              },
            },
            bullets: [
              "SRAM: 6-transistor flip-flop, no refresh, 1-10 ns, low density — cache.",
              "DRAM: 1T + 1C, refresh every 2-4 ms, 50-100 ns, high density — main memory.",
              "DRAM address multiplexing: RAS then CAS on the same pins — a 16-bit space from 8+8 pins.",
              "64K x 1 chip: 16 address bits, 1 data bit; 8 chips in parallel make 64 KB.",
              "Refresh walks rows with RAS-only cycles — lost refresh means silently lost bits.",
              "Variants: FPM/EDO shorten column cycles; SDRAM syncs to the bus clock.",
            ],
            table: {
              caption: "SRAM and DRAM side by side.",
              headers: ["Property", "SRAM", "DRAM"],
              rows: [
                ["Cell", "6-transistor flip-flop", "1 transistor + 1 capacitor"],
                ["Refresh", "none needed", "every 2-4 ms"],
                ["Access time", "1-10 ns", "50-100 ns"],
                ["Density/cost", "lower density, dearer per bit", "higher density, cheapest per bit"],
                ["Role", "cache, fast buffers", "main memory"],
              ],
            },
            callout: {
              type: "warning",
              title: "Refresh is invisible but vital",
              body: "A DRAM that misses its refresh interval loses rows silently — no error, just wrong bits. That is why refresh is wired into the DMA controller's channel 0 on the PC and why 'DRAM needs no refresh' is an instant-zero answer.",
            },
            examQuestions: [
              {
                q: "Compare SRAM and DRAM on cell structure, speed, density, refresh and role. Compute how many 64K x 1 DRAM chips are needed to build a 64 KB memory and explain the address multiplexing involved.",
                marks: 14,
                outline: [
                  "SRAM: 6T flip-flop, no refresh, 1-10 ns, cache",
                  "DRAM: 1T+1C, refresh 2-4 ms, 50-100 ns, main memory",
                  "64K x 1 chip: 65536 x 1 bit, needs 16 address bits",
                  "Multiplexing: 8 row lines via RAS + 8 column lines via CAS",
                  "64 KB needs 8 data bits -> 8 chips in parallel, one shared CS",
                  "Density is why DRAM, speed why SRAM",
                ],
              },
              {
                q: "Explain DRAM refresh: why it is needed, how RAS-only refresh works, and what happens when the interval is missed.",
                marks: 7,
                outline: [
                  "Capacitor charge leaks — state fades without intervention",
                  "Every row must be recharged within 2-4 ms",
                  "RAS-only cycle: row address strobed, CAS skipped",
                  "Refresh counters walk rows automatically",
                  "PC wires refresh to DMA channel 0",
                  "Missed rows lose data silently — no error signal",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "ROM, PROM, EPROM, EEPROM and nonvolatile RAM",
            body: [
              "ROM holds firmware — the code that survives power-off. Mask ROM is programmed by the factory's last metal layer and never changes; PROM carries fusible links the customer blows once; EPROM adds erasability — a quartz window and ultraviolet light erase the whole chip in about 20 minutes for reprogramming; EEPROM erases electrically by byte, in-circuit; flash is EEPROM that erases in large blocks and dominates USB sticks and SSDs. Nonvolatile RAM (NVRAM) is SRAM backed by a battery or an EEPROM shadow: it reads and writes at RAM speed yet remembers through power cuts — BIOS settings live there.",
              "The 27xx part number is a capacity spec in bits: 2764 = 64 Kbit = 8 KB, addressed by 13 lines (A0-A12); 27256 = 256 Kbit = 32 KB, 15 lines; 2716 = 16 Kbit = 2 KB, 11 lines. Read 27C256 as: 'C' marks CMOS, 256 Kbit = 32 KB. Programming needs the elevated VPP (12.5-25 V by generation) and a programmer's pulse sequence; erasing means 20 minutes under UV for the whole chip — one weak byte and the entire device re-erases, which is exactly the limitation EEPROM's byte-level electrical erase removes.",
              "The exam lists the ROM family with one property each and decodes a part number. The fork below is the family tree; the table is the 27xx ladder. Close with the bits-versus-bytes rule — '2764 is 8 KB, not 64 KB' — because that single conversion is where most marks leak on an otherwise easy question. Convert one part number on paper — bits, bytes, log2 — and the decode line writes itself.",
            ],
            keyTerms: [
              { term: "EPROM", definition: "UV-erasable programmable ROM — quartz window, whole-chip erase, 27xx family." },
              { term: "EEPROM", definition: "Electrically erasable PROM — byte-level erase in-circuit, no UV lamp." },
              { term: "Flash", definition: "Block-erasable EEPROM — the technology of USB sticks and SSDs." },
              { term: "NVRAM", definition: "SRAM with battery backup or EEPROM shadow — RAM speed, ROM persistence." },
              { term: "VPP", definition: "The elevated programming voltage (12.5-25 V) EPROMs need to write." },
            ],
            diagram: {
              kind: "fork",
              title: "How is the cell programmed and erased?",
              caption: "One tree covers the whole nonvolatile family.",
              start: "Nonvolatile memory",
              branches: [
                { label: "Mask ROM / PROM", outcome: "factory mask or blown fuse — one-time, never erased", good: true },
                { label: "EPROM (27xx)", outcome: "whole chip erased by UV through the quartz window", good: true },
                { label: "EEPROM / flash", outcome: "erased electrically — bytes (EEPROM) or blocks (flash)", good: true },
                { label: "NVRAM", outcome: "SRAM backed by battery or NV shadow — RAM speed, ROM persistence", good: true },
              ],
            },
            bullets: [
              "Mask ROM: programmed at fabrication; PROM: one-time fuse blow by the user.",
              "EPROM: UV erase through the quartz window — whole chip, ~20 minutes; 27xx family.",
              "EEPROM: electrical, byte-erasable, in-circuit; flash: block-erasable EEPROM.",
              "NVRAM: SRAM + battery or EEPROM shadow — RAM speed, ROM persistence.",
              "Part numbers count bits: 2764 = 64 Kbit = 8 KB (A0-A12); 27256 = 32 KB (A0-A14).",
              "Programming needs VPP; reading needs only the standard 5 V.",
            ],
            table: {
              caption: "The 27xx EPROM ladder.",
              headers: ["Part", "Capacity", "Address lines", "Notes"],
              rows: [
                ["2716", "16 Kbit = 2 KB", "A0-A10", "11 address lines, 25 V programming"],
                ["2732", "32 Kbit = 4 KB", "A0-A11", "12 address lines"],
                ["2764", "64 Kbit = 8 KB", "A0-A12", "the classic firmware chip"],
                ["27256", "256 Kbit = 32 KB", "A0-A14", "15 address lines"],
                ["28C64 (EEPROM)", "64 Kbit = 8 KB", "A0-A12", "electrical erase, no UV lamp"],
              ],
            },
            callout: {
              type: "tip",
              title: "Bits, not bytes",
              body: "The 27xx number is kilobits: 2764 is 8 KB, not 64 KB — the most common wrong line in memory answers. Convert by eight, then take log2 to get the address lines: 8 KB = 2^13, so A0-A12.",
            },
            examQuestions: [
              {
                q: "Explain ROM, PROM, EPROM, EEPROM and NVRAM with one distinguishing property each, and state which family a BIOS chip and a BIOS-settings store belong to.",
                marks: 7,
                outline: [
                  "Mask ROM: written at fabrication, never changed",
                  "PROM: one-time fusible links blown by the user",
                  "EPROM: UV erase, whole chip, quartz window, 27xx",
                  "EEPROM: electrical byte-erase in-circuit; flash erases in blocks",
                  "NVRAM: SRAM + battery or NV shadow",
                  "BIOS code = EPROM/flash; settings = NVRAM/EEPROM",
                ],
              },
              {
                q: "Decode the part numbers 2764 and 27256 into bytes and address lines, and describe the UV erase procedure for an EPROM.",
                marks: 7,
                outline: [
                  "2764: 64 Kbit = 8 KB -> 2^13 -> A0-A12",
                  "27256: 256 Kbit = 32 KB -> 2^15 -> A0-A14",
                  "The number counts bits, not bytes — convert by 8",
                  "UV through the quartz window erases every cell",
                  "Typical erase: ~20 minutes under a UV lamp",
                  "Reprogram with VPP and the programmer's pulse sequence",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Semiconductor technology for memory and shift registers",
            body: [
              "Semiconductor technology is the trade triangle: speed against density against power. Bipolar TTL and ECL cells switch in well under a nanosecond but burn power and occupy large areas — they built the fastest caches of the minicomputer era. NMOS packed densely and ran moderately fast but leaked statically; CMOS, with complementary transistors drawing near-zero static current, took the whole industry — highest density, lowest power, fast enough — and is the material of every modern RAM and of the battery-backed NVRAM that keeps BIOS settings alive.",
              "The shift register is semiconductor memory at its simplest: a chain of D flip-flops in which each clock edge moves every bit one stage down the line. Feed 1011 serially into a 4-bit SISO/SIPO register: after four clocks the pattern is resident and readable in parallel on Q3-Q0 — the serial-in/parallel-out conversion that UART receivers and LED drivers exploit in reverse (PISO). Recirculate the output into the input and the register becomes a serial memory of fixed length — the earliest electronic main-memory idea realized in silicon. Cost per bit is terrible; the pedagogy is the point: memory is just stored state.",
              "The exam asks for the technology comparison or the shift-register types (SISO, SIPO, PISO, PIPO). One table and one trace cover both. Tie the technologies back to the chips already met — CMOS is why the battery-backed NVRAM of section 5.3 survives for years on a coin cell — and the answer connects two syllabus clauses instead of reciting two lists.",
            ],
            keyTerms: [
              { term: "Bipolar memory", definition: "TTL/ECL cells — fastest switching, high power, low density." },
              { term: "CMOS", definition: "Complementary MOS — highest density, near-zero static power, all modern RAM." },
              { term: "Shift register", definition: "D flip-flops in series; each clock moves data one stage." },
              { term: "SIPO/PISO", definition: "Serial-in parallel-out and parallel-in serial-out — the converter forms." },
              { term: "Recirculating memory", definition: "Output looped to input — a fixed-length serial store." },
            ],
            diagram: {
              kind: "flow",
              title: "Data walking a shift register",
              caption: "One clock, one stage — four clocks, one nibble.",
              steps: [
                { label: "Din = 1", note: "first bit presented at the input" },
                { label: "Clock 1", note: "FF0 <= 1; FF1 <= FF0's old value" },
                { label: "Clocks 2-4", note: "each clock moves the pattern one stage right" },
                { label: "Parallel out", note: "after 4 clocks, 1011 is readable on Q3-Q0" },
              ],
            },
            bullets: [
              "Bipolar (TTL/ECL): fastest, power-hungry, low density — early fast caches.",
              "NMOS: dense, moderate speed, static leakage — the 8/16-bit era.",
              "CMOS: highest density, near-zero static power — all modern RAM; battery-backed NVRAM.",
              "Shift register: D flip-flops in series; each clock moves data one stage.",
              "Types by load/read: SISO, SIPO, PISO, PIPO — the UART's serializer is a PISO.",
              "Recirculating shift register = serial memory — historically the first electronic store.",
            ],
            table: {
              caption: "Semiconductor technologies compared.",
              headers: ["Technology", "Speed", "Density", "Power", "Where used"],
              rows: [
                ["Bipolar TTL/ECL", "fastest (sub-ns)", "low", "high", "fastest caches of the minicomputer era"],
                ["NMOS", "moderate", "high", "moderate (static leakage)", "classic 8/16-bit era memories"],
                ["CMOS", "moderate-fast", "highest", "near-zero static", "modern RAM, battery-backed NVRAM"],
              ],
            },
            callout: {
              type: "tip",
              title: "CMOS won on static power",
              body: "Bipolar cells burn current continuously; CMOS burns it only while switching. That single property — not raw speed — is why every memory chip you can buy today is CMOS, and why a coin cell can hold BIOS settings for years.",
            },
            examQuestions: [
              {
                q: "Compare bipolar, NMOS and CMOS memory technologies on speed, density and power, and state which technology battery-backed NVRAM uses and why.",
                marks: 7,
                outline: [
                  "Bipolar TTL/ECL: fastest, low density, high power",
                  "NMOS: dense, moderate, static leakage",
                  "CMOS: highest density, near-zero static power",
                  "NVRAM uses CMOS SRAM + battery",
                  "Near-zero static current -> years on a coin cell",
                  "Speed alone never justified bipolar for standby use",
                ],
              },
              {
                q: "Explain shift-register operation with the 1011 trace and name the four I/O types with one use each.",
                marks: 7,
                outline: [
                  "Chain of D flip-flops; one clock moves data one stage",
                  "Trace: 1011 serial-in; after 4 clocks Q3-Q0 = 1011",
                  "SISO: serial in, serial out — delay line",
                  "SIPO: serial in, parallel out — UART receiver",
                  "PISO: parallel in, serial out — UART transmitter",
                  "PIPO: parallel both ways — a plain register",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Magnetic memory: tape and disk",
            body: [
              "Magnetic memory writes by magnetizing: the head's coil flips tiny domains on the surface; reading senses the voltage a flux change induces. Tape stores it sequentially — fast and cheap for backup, hopeless for random access. Disk stores it in circles: platters, each with read/write heads, divided into concentric tracks, each track into sectors; the cylinder is the same track number across surfaces. Access to one sector costs seek (move the actuator) + rotational latency (wait for the sector) + transfer (read the bits) — the three numbers that rank drives.",
              "Capacity and latency arithmetic. Floppy: 2 surfaces x 80 tracks x 18 sectors x 512 bytes = 1,474,560 bytes — the 1.44 MB label. Latency: at 300 rpm one revolution is 200 ms, so the average wait is 100 ms; a 7200 rpm hard disk spins a revolution in 8.33 ms, so its average latency is 4.17 ms, and with a 5 ms seek a random sector arrives in about 9 ms — a thousand times faster than the floppy's 100 ms wait. The cylinder note matters for throughput: the next sector on the same cylinder costs no seek at all, which is why files are laid out cylinder-by-cylinder. That is secondary memory's speed story in two drives.",
              "Exams ask for disk organization terms (track, sector, cylinder, head) and the access-time decomposition. Give the capacity formula with one worked value and the three-part latency, then contrast tape's sequential access in one line. The pipeline below is the request's journey — five boxes that make the timing decomposition visible. Quote the latency formula (60 / rpm) / 2 before any number, and contrast tape's sequential access in one closing line.",
            ],
            keyTerms: [
              { term: "Track", definition: "One concentric circle of data on a disk surface." },
              { term: "Sector", definition: "The angular slice of a track — the unit of transfer (512 B traditionally)." },
              { term: "Cylinder", definition: "The same track number across all surfaces — reachable without moving the actuator." },
              { term: "Seek time", definition: "The actuator's travel time to the target track — the dominant cost." },
              { term: "Rotational latency", definition: "Half a revolution's wait for the sector to arrive under the head." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The life of one disk request",
              caption: "Seek, wait, read, move — every term in the timing formula is a stage.",
              stages: [
                { label: "Request queued", note: "controller receives track/sector" },
                { label: "Seek", note: "head actuator moves — the dominant cost" },
                { label: "Rotational wait", note: "sector rotates under the head" },
                { label: "Read/write", note: "flux changes streamed as bits" },
                { label: "Transfer", note: "block lands in the buffer, then RAM" },
              ],
            },
            bullets: [
              "Recording: write flips domains; read senses induced voltage at flux changes; MFM packs the bits.",
              "Tape: sequential access, cheapest per byte — backup and archive.",
              "Disk geometry: platters -> surfaces -> tracks -> sectors; cylinder = same track across surfaces.",
              "Access time = seek + rotational latency + transfer.",
              "Floppy 1.44 MB: 2 x 80 x 18 x 512; 300 rpm -> 100 ms average latency.",
              "7200 rpm HDD: 8.33 ms/rev -> 4.17 ms latency — the speed gap cache and paging must hide.",
            ],
            table: {
              caption: "One floppy, counted out.",
              headers: ["Factor", "Value"],
              rows: [
                ["Surfaces (heads)", "2"],
                ["Tracks per surface", "80"],
                ["Sectors per track", "18"],
                ["Bytes per sector", "512"],
                ["Total", "2 x 80 x 18 x 512 = 1,474,560 B = 1.44 MB"],
              ],
            },
            callout: {
              type: "warning",
              title: "Latency is half a revolution",
              body: "Rotational latency is the average half-turn, not a full turn: 300 rpm = 200 ms/rev = 100 ms average. Halving wrong doubles every timing answer; the formula is (60 / rpm) / 2 — write it before any number.",
            },
            examQuestions: [
              {
                q: "Explain magnetic recording and disk organization (platter, surface, track, sector, cylinder) and compute the 1.44 MB floppy capacity from its geometry.",
                marks: 7,
                outline: [
                  "Write flips domains; read senses induced flux-change voltage",
                  "Geometry: surfaces -> tracks -> sectors; cylinder across surfaces",
                  "Capacity = surfaces x tracks x sectors x bytes/sector",
                  "2 x 80 x 18 x 512 = 1,474,560 bytes",
                  "= 1.44 MB — the label's origin",
                  "Tape contrast: sequential access, backup role",
                ],
              },
              {
                q: "Decompose disk access time into seek, rotational latency and transfer. Compute average latency for 300 rpm and 7200 rpm drives.",
                marks: 7,
                outline: [
                  "Access = seek + rotational latency + transfer",
                  "Latency = (60 / rpm) / 2 — half a revolution",
                  "300 rpm: 200 ms/rev -> 100 ms average",
                  "7200 rpm: 8.33 ms/rev -> 4.17 ms average",
                  "Add ~5 ms seek -> ~9 ms for a random sector",
                  "The thousand-fold gap is what cache and paging hide",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Cache memory and virtual memory",
            body: [
              "Cache memory is a small SRAM level between CPU and DRAM that works because of locality: temporal (a just-used item is used again soon) and spatial (its neighbours are too). The cache holds lines (blocks of 16-64 bytes); mapping decides where a main-memory line may sit — direct mapped (one frame per line, cheap, clash-prone), fully associative (any frame, searched, costly), set associative (n frames per set — the 2-8 way compromise every modern CPU uses). Performance collapses to one formula: average access time Tavg = h x Tc + (1 - h) x (Tc + Tm), where h is the hit ratio.",
              "With h = 0.9, Tc = 10 ns and Tm = 100 ns: Tavg = 0.9 x 10 + 0.1 x 110 = 9 + 11 = 20 ns — a five-fold win over 100 ns despite a 10 percent miss rate. Virtual memory is the same idea one level down: programs use logical addresses; the MMU's page tables map 4 KB pages to frames, a TLB caches the translations, and a missing page faults to disk — the milliseconds of section 5.5. Real memory is what the address bus can name; virtual memory is what the process may believe it has — the 80386 delivered both with segmentation plus two-level paging (10 + 10 + 12 address split).",
              "The exam wants the formula with numbers, the mapping schemes, and real vs virtual in one line each. The fork gives the access story; the table gives the schemes. Show the miss term as (Tc + Tm), not Tm alone — that plus one computed Tavg is the difference between a formula recited and a formula understood. Compute the Tavg in three visible lines — substitution, sums, boxed result — and the formula question is complete.",
            ],
            keyTerms: [
              { term: "Hit ratio (h)", definition: "Fraction of accesses found in cache; drives the average-access formula." },
              { term: "Cache line", definition: "The transfer block (16-64 bytes) between cache and memory." },
              { term: "Set associativity", definition: "n frames per set searched in parallel — the practical mapping compromise." },
              { term: "Page fault", definition: "The referenced page is absent — the OS fetches it from disk." },
              { term: "TLB", definition: "Translation Lookaside Buffer — the cache of page-table translations." },
            ],
            diagram: {
              kind: "fork",
              title: "CPU issues an address",
              caption: "Three outcomes, three costs — nanoseconds, hundreds of nanoseconds, milliseconds.",
              start: "Memory access",
              branches: [
                { label: "Cache hit", outcome: "line present — data in ~10 ns, no memory visit", good: true },
                { label: "Cache miss", outcome: "line fetched from DRAM (~100 ns); block fills the cache", good: true },
                { label: "Page fault", outcome: "page absent — disk access in milliseconds; OS swaps in", good: false },
              ],
            },
            bullets: [
              "Locality: temporal (reuse soon) + spatial (neighbours) — the reason any cache works.",
              "Tavg = h x Tc + (1 - h) x (Tc + Tm); the miss path pays the cache time too.",
              "Mapping: direct (one frame), fully associative (any), set-associative (n-way — the standard).",
              "Virtual memory: logical pages -> page tables -> frames; TLB caches translations; faults go to disk.",
              "80386: segmentation then two-level paging, 4 KB pages, 10+10+12 address split.",
              "Real memory = address-bus reach; virtual memory = the process's address illusion.",
            ],
            table: {
              caption: "Cache mapping schemes.",
              headers: ["Scheme", "Rule", "Trade-off"],
              rows: [
                ["Direct mapped", "line maps to exactly one frame (address mod frames)", "cheapest hardware, clash misses"],
                ["Fully associative", "any line in any frame, searched", "no clash misses, costly comparators"],
                ["Set associative", "n frames per set, search within the set", "the practical compromise (2-8 way)"],
              ],
            },
            callout: {
              type: "exam",
              title: "The miss path pays Tc first",
              body: "In the formula the miss term is (Tc + Tm), not Tm: a miss costs the cache check AND the memory access. Answers using (1 - h) x Tm alone produce 19 ns instead of 20 — close, but the reasoning is wrong and the examiner marks the reasoning.",
            },
            examQuestions: [
              {
                q: "Explain cache operation with the average-access-time formula and compute Tavg for h = 0.9, Tc = 10 ns, Tm = 100 ns. State the locality principle that makes the hit ratio possible.",
                marks: 7,
                outline: [
                  "Cache = small SRAM level between CPU and DRAM",
                  "Locality: temporal (reuse) + spatial (neighbours)",
                  "Tavg = h x Tc + (1 - h) x (Tc + Tm)",
                  "Miss path pays Tc + Tm, not Tm alone",
                  "Compute: 0.9 x 10 + 0.1 x 110 = 20 ns",
                  "Five-fold speedup at a 90 percent hit ratio",
                ],
              },
              {
                q: "Distinguish real and virtual memory and describe 80386 paging with the page-fault path and the TLB's role.",
                marks: 7,
                outline: [
                  "Real memory: what the physical address bus can name",
                  "Virtual memory: the process's logical address illusion",
                  "MMU page tables map 4 KB pages to frames",
                  "80386: segmentation then two-level paging (10+10+12)",
                  "TLB caches recent translations — most walks never happen",
                  "Page absent -> fault -> OS swaps in from disk",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Buses, memory addressing capacity and processing speed",
            body: [
              "Two numbers describe what a CPU can reach and how fast: the address bus width and the clock. Addressing capacity is 2^(address lines): 16 lines give 64 KB (8085), 20 give 1 MB (8086), 24 give 16 MB (80286), 32 give 4 GB (80386/486), and 36-bit PAE gives 64 GB. The data bus width sets the bandwidth: 16 bits x 10 MHz = 20 MB/s peak. Processing speed then depends on clock, pipeline depth, cache hit ratio and wait states — a 33 MHz machine with a 10 percent cache hit rate can be slower than a 25 MHz one with 95 percent.",
              "The arithmetic is one line per claim. 2^20 = 1,048,576 = 1 MB — the 8086's ceiling and the reason DOS lives in segment arithmetic. 2^24 = 16,777,216 = 16 MB — the 286's reach, exactly 16 of the 8086's spaces. 2^32 = 4,294,967,296 = 4 GB. Bandwidth: 16-bit data at 10 MHz moves 2 bytes x 10^7 = 20 MB/s at best. And the wait-state tax: one wait state on a 100 ns access at 10 MHz turns 10 clocks into 11 — memory speed, not CPU speed, set the era's real throughput.",
              "The exam asks which CPU addresses how much, or what limits speed. The table is the first answer; the matrix is the second — quote one 2^n computation and one bandwidth line. Then state the bus trio (address, data, control) with one signal per group, because the syllabus's 'buses' clause wants the taxonomy, not just the widths. Compute one capacity and one bandwidth on paper, then name one control signal per bus group.",
            ],
            keyTerms: [
              { term: "Address bus width", definition: "The number of address lines; capacity = 2^n bytes." },
              { term: "Bandwidth", definition: "Data width x clock — bytes per second the bus can carry at peak." },
              { term: "Wait state", definition: "An extra clock inserted because memory is slower than the CPU." },
              { term: "MIPS", definition: "Millions of instructions per second — the headline speed metric." },
              { term: "Bus trio", definition: "Address (where), data (what), control (when) — every bus's three groups." },
            ],
            diagram: {
              kind: "matrix",
              title: "What makes a machine fast",
              caption: "Clock and memory reach trade against each other; the fast quadrant needs both.",
              axes: { x: "Clock and pipeline (slow -> fast)", y: "Memory reach (narrow -> wide)" },
              quadrants: [
                { label: "Vector/scientific machines", note: "wide memory, modest clock — bandwidth-first design" },
                { label: "Modern x86", note: "GHz clocks, 36-48-bit reach, deep pipelines" },
                { label: "Simple embedded cores", note: "low clock, 16-bit space — control-first design" },
                { label: "Overclocked narrow bus", note: "fast CPU starved by memory — wait states dominate" },
              ],
            },
            bullets: [
              "Capacity = 2^address lines: 16 -> 64 KB, 20 -> 1 MB, 24 -> 16 MB, 32 -> 4 GB.",
              "The bus trio: address (where), data (what), control (when: RD#/WR#/ALE...).",
              "Bandwidth = data width x clock: 16-bit x 10 MHz = 20 MB/s peak.",
              "Speed levers: clock, pipeline depth, superscalar issue, cache hit ratio, wait states.",
              "A slow memory starves a fast CPU — wait states are the visible tax.",
              "Pentium PAE: 36 address bits -> 64 GB physical, the ladder's last rung in this syllabus.",
            ],
            table: {
              caption: "Addressing capacity of the x86 line.",
              headers: ["CPU", "Address bits", "Space", "Formula"],
              rows: [
                ["8085", "16", "64 KB", "2^16"],
                ["8086", "20", "1 MB", "2^20"],
                ["80286", "24", "16 MB", "2^24"],
                ["80386/80486", "32", "4 GB", "2^32"],
                ["Pentium (PAE)", "36", "64 GB", "2^36"],
              ],
            },
            callout: {
              type: "warning",
              title: "2^n, not 2 x n",
              body: "Twenty address lines give 2^20 = 1 MB, not 20 KB or '2 x 20'. Also keep bytes and bits apart: the 27xx part numbers count bits, the address space counts bytes. One slip here corrupts every capacity answer on the paper.",
            },
            examQuestions: [
              {
                q: "Compute the memory addressing capacity of the 8085, 8086, 80286 and 80386 from their address bus widths, and explain the three bus groups of a microprocessor system.",
                marks: 7,
                outline: [
                  "Capacity = 2^(address lines)",
                  "8085: 2^16 = 64 KB; 8086: 2^20 = 1 MB",
                  "80286: 2^24 = 16 MB; 80386: 2^32 = 4 GB",
                  "Address bus: where — 20/24/32 lines",
                  "Data bus: what — 8/16/32 bits wide",
                  "Control bus: when — RD#, WR#, ALE, READY",
                ],
              },
              {
                q: "What limits a computer's processing speed? Explain with clock, pipeline depth, cache hit ratio and wait states, computing peak bandwidth for a 16-bit, 10 MHz system.",
                marks: 7,
                outline: [
                  "Clock sets the cycle: 10 MHz -> 100 ns",
                  "Pipeline depth and superscalar issue set instructions per clock",
                  "Cache hit ratio sets average memory latency",
                  "Wait states: memory slower than CPU inserts extra clocks",
                  "Bandwidth = width x clock = 2 bytes x 10 MHz = 20 MB/s",
                  "A memory-starved fast CPU loses to a balanced slower one",
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
        "RGPV papers for this subject follow the classic pattern: one long architecture or programming question per unit, with the peripheral chips of Unit IV carrying the heaviest single marks. The 8086 core (architecture, addressing modes, instruction set) and the peripheral-chip block (8255, 8254, 8259A, 8237) are together worth roughly half the paper. Memory interfacing arithmetic and the memory-device families supply reliable numerical questions; the evolution and Pentium material supplies short, quick marks. Allocate revision time in that ratio.",
      ],
      weightedTopics: [
        { topic: "8086 architecture, registers and addressing modes", weight: "≈ 12-14 marks", note: "Draw the BIU/EU block diagram and compute EAs — the guaranteed opener." },
        { topic: "Instruction set, encoding and flag effects", weight: "≈ 12-14 marks", note: "One program to write, one encoding or flag trace to explain." },
        { topic: "Peripheral chips: 8255, 8279, 8254, 8259A, 8237", weight: "≈ 12-15 marks", note: "One chip in depth with its control words — know all five." },
        { topic: "Assembly programs: 8/16-bit add/sub with carries", weight: "≈ 8-10 marks", note: "Write the listing with a register trace beside every line." },
        { topic: "Memory interfacing: decoding, maps, address partitioning", weight: "≈ 8-10 marks", note: "The A-line split and range math are the marks." },
        { topic: "Memory devices: SRAM/DRAM/ROM family, cache, virtual memory", weight: "≈ 8-10 marks", note: "Cell contrast plus the Tavg formula with numbers." },
        { topic: "Interrupts, vectors and data transfer schemes", weight: "≈ 6-8 marks", note: "Type x 4 vector math and the poll/interrupt/DMA contrast." },
        { topic: "Evolution, 286/386/486, Pentium family, buses", weight: "≈ 6-8 marks", note: "Tables and short notes — bank these fast." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week. Every week ends with one handwritten page of control words, address math or a program trace — the artifacts the paper actually marks.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — the 8086 itself", tasks: ["Evolution ladder + microprocessor vs microcontroller", "BIU/EU block diagram drawn twice from memory", "All eight addressing modes with EA computation", "Physical address math: five segment:offset pairs"] },
        { week: "Week 2", focus: "Unit I end + Unit II machine cycle", tasks: ["Arithmetic/logic instructions with flag effects", "Program control: CALL/RET stack traces", "Bus cycle T1-T4 with ALE and pin groups", "Instruction encoding: five byte strings decoded by hand"] },
        { week: "Week 3", focus: "Unit II end + Unit III programs", tasks: ["Six instruction groups + DEBUG commands", "Pentium through Pentium 4 feature table", "Write add/sub 8/16-bit programs with traces", "Address partitioning and relocatability answers"] },
        { week: "Week 4", focus: "Unit III interfacing + Unit IV chips 1", tasks: ["Memory decode: 8 KB EPROM range derivation", "8255 mode word (99h/80h) and mode 1 handshake", "Data transfer schemes + 8051 microcontroller table", "8087 ESC/FWAIT mechanism"] },
        { week: "Week 5", focus: "Unit IV chips 2 + Unit V", tasks: ["8279 prescaler math + command words", "8254 mode 3 program; 8259A ICWs + vector math", "8237 channel init with N-1; 16550 divisor derivation", "Memory devices: SRAM/DRAM/27xx tables"] },
        { week: "Week 6", focus: "Unit V end + full revision", tasks: ["Cache Tavg computation + mapping schemes", "Virtual memory + addressing capacity 2^n table", "Disk geometry and capacity formula", "Two timed full papers; rewrite all control words from memory"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every chip with its control word: 8255 mode word, 8254 control byte, 8259A ICW sequence, 16550 LCR/DLL. The byte is the answer's spine; the prose hangs on it.",
        "Draw before you write: the 8086 block diagram, the bus cycle, the interrupt vector lookup, the DMA handshake. A labelled diagram is half the marks on architecture questions.",
        "For every program, write the register contents beside each instruction — the trace is what the mark scheme reproduces.",
        "Physical address math: write segment x 10h + offset with the shift shown, then box the 20-bit result.",
        "Interrupt vectors: type x 4 = IP address, +2 = CS. Quote the two addresses for the given type.",
        "Timer and baud questions: state the formula first (fout = fin / count; divisor = clock / (16 x baud)), then substitute.",
        "State defaults unprompted: 'BP defaults to SS', 'count 0 means 65536', 'the miss path pays Tc too' — these one-liners are the answer key's own sentences.",
        "Time-box: a 7-mark half in 18-20 minutes, leaving 15 minutes at the end for the diagram labels and flag notes that recover easy marks.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: nothing new. Morning — one page of formulas and bytes: segment x 10h + offset, count = fin / fout and N - 1, divisor = clock / (16 x baud), type x 4 for vectors, the 8255 mode words (99h and 80h), the 8254 control byte (36h), the 8259A ICW sequence (11h, 08h, 04h, 01h). Afternoon — rewrite the five diagrams from memory: the 8086 BIU/EU block diagram, the bus cycle T1-T4, the 8259A interrupt flow, the DMA handshake and the memory pyramid. Evening — hand-trace two programs (16-bit add with carry, 8-bit subtract with borrow) and the cache Tavg computation; then sleep.",
        "The slips below are the ones the paper's questions are built to catch — BP's default segment, the N-1 count, DLAB left set, bits versus bytes in part numbers. Read them the night before; each one is a mark the examiner set aside.",
      ],
      bullets: [
        "Adding segment + offset directly without the x10h shift — the physical address lands 15/16 short.",
        "Using CF to compare signed numbers — signed comparison needs SF vs OF (JL/JG); CF is the unsigned flag.",
        "Encoding MOV AL, BL as 88 C3 — reg and r/m swap: it is 88 D8; C3 is MOV BL, AL.",
        "Loading the 8254 count as one byte or MSB-first — RW = 11 means LSB then MSB.",
        "Forgetting count = N - 1 in the 8237 — 0400h moves 1025 bytes.",
        "Leaving the 16550's DLAB set — the 'transmitter' port then writes the divisor.",
        "Treating the 8255 control word's bit 7 as a direction bit — 0 selects BSR, not a mode.",
        "Reading 2764 as 64 KB — the number is kilobits; it is 8 KB with A0-A12.",
        "Saying SRAM needs refresh or DRAM does not — backwards, and instantly zero.",
        "Claiming address capacity = 2 x lines or quoting bits as bytes — capacity is 2^n bytes.",
      ],
    },
  ],
};
