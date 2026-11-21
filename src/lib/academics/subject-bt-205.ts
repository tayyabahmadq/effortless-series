/**
 * Academics - RGPV first-year common subject: BT-205 Basic Computer.
 *
 * Five units walk every B.Tech first-year student through the foundations of
 * computing: computer fundamentals and generations; number systems and digital
 * logic; operating systems and software; programming and problem solving in C;
 * and networking, the internet and office tools. Each section carries body
 * paragraphs, bullets, a diagram, key terms, a callout, a table or code sample,
 * and three exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const bt205: AcademicSubject = {
  id: "bt-205",
  code: "BT-205",
  title: "Basic Computer",
  semester: "II Semester",
  program: "RGPV · First Year Common (all B.Tech branches)",
  tagline:
    "The complete first-year guide to computers: fundamentals and generations, number systems and digital logic, operating systems and software, programming in C, and networking, internet and office tools.",
  description:
    "Five units cover the entire RGPV Basic Computer syllabus for first-year B.Tech students across all branches. Unit I builds the vocabulary of hardware, generations and software types. Unit II works through number systems, complements, codes and logic gates. Unit III explains operating systems, process and file management, deadlocks and software licensing. Unit IV introduces algorithms, flowcharts, control structures, arrays and simple C programs. Unit V closes with networks, transmission media, the internet, cybersecurity and office productivity tools. Every section pairs the concept with a redrawable diagram, a worked table or code sample, and the exam questions RGPV actually asks.",
  accentColor: "#60a5fa",
  emoji: "CS",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Computer Fundamentals",
      summary:
        "Definition, characteristics and generations of computers; classification into super, mainframe, mini and micro; internal components of CPU, memory and I/O; the memory hierarchy from registers to secondary storage; and the distinction between system and application software with the basic functions of an operating system.",
      chapter: {
        number: "01",
        title: "Computer Fundamentals",
        intro:
          "Unit I builds the vocabulary every later unit borrows: what a computer is and how it is classified by size and power, what sits inside the box from the CPU to the bus, how memory is layered from fast expensive registers down to slow cheap disks, and what software actually is, including the role of the operating system that ties hardware and programs together.",
        inOneBreath:
          "A computer is an electronic device performing the input-process-output-storage-control cycle; its characteristics are speed, accuracy, diligence, versatility, memory and reliability; five generations moved from vacuum tubes to transistors to ICs to microprocessors to AI; computers classify as super, mainframe, mini and micro by size, speed and cost; a CPU contains ALU, CU and registers; memory is layered as registers, cache, RAM, ROM and secondary storage; and software splits into system software (OS, compilers, utilities) and application software (browsers, editors, games).",
        sections: [
          {
            number: "1.1",
            title: "Definition, characteristics and generations of computers",
            body: [
              "A computer is an electronic device that accepts data as input, processes it according to a set of instructions called a program, stores both the data and the program in its memory, produces output, and controls the whole operation through its central processing unit. The input-process-output-storage cycle, often written as IPO, captures the essential activity of every computer from a microcontroller in a washing machine to a supercomputer forecasting weather. Its defining feature is general-purpose operation: the same hardware runs different programs, so one device can compute a payroll, play a video and simulate a bridge.",
              "The classical characteristics that distinguish a computer from earlier calculators are speed, accuracy, diligence, versatility, memory and reliability. Speed is measured in millions of instructions per second; accuracy is total because errors come from data or program, never the machine - the GIGO principle; diligence means no fatigue across hours of identical work; versatility means one machine handles text, images, sound and numbers alike; storage ranges from kilobytes in embedded systems to petabytes in data centres; and reliability comes from solid-state electronics with no moving parts in the processor itself.",
              "Computer generations are classified by the core hardware technology. The first generation (about 1945 to 1955) used vacuum tubes, was huge and hot, and was programmed in machine language; ENIAC and UNIVAC are landmarks. The second generation (1955 to 1964) replaced tubes with transistors, shrinking size and cost. The third generation (1964 to 1971) introduced integrated circuits. The fourth generation (1971 onwards) used microprocessors, putting a CPU on one chip and producing personal computers. The fifth generation, ongoing, emphasises artificial intelligence, parallelism and natural interfaces such as voice and gesture.",
            ],
            bullets: [
              "Computer: an electronic device performing input, process, output, storage and control - the IPO cycle.",
              "Six characteristics: speed (MIPS), accuracy, diligence, versatility, storage and reliability.",
              "GIGO principle: Garbage In Garbage Out - wrong input or program yields wrong output, never a hardware fault.",
              "Five generations: vacuum tube, transistor, IC, microprocessor and AI - each smaller, cheaper and faster.",
              "General-purpose hardware running stored programs is what makes a computer unlike a fixed calculator.",
            ],
            table: {
              caption: "Five generations of computers at a glance.",
              headers: ["Generation", "Period", "Technology", "Examples"],
              rows: [
                ["First", "1945-1955", "Vacuum tubes", "ENIAC, UNIVAC"],
                ["Second", "1955-1964", "Transistors", "IBM 7094"],
                ["Third", "1964-1971", "Integrated circuits", "IBM 360"],
                ["Fourth", "1971-present", "Microprocessors", "Intel 8086, PCs"],
                ["Fifth", "present onwards", "AI and parallelism", "IBM Watson"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Five generations of computers",
              caption:
                "Each arrow marks a hardware breakthrough that shrank size, cost and power while raising speed.",
              steps: [
                { label: "Gen 1: vacuum tubes (1945-55)", note: "ENIAC, UNIVAC; machine language" },
                { label: "Gen 2: transistors (1955-64)", note: "smaller, cooler, cheaper" },
                { label: "Gen 3: ICs (1964-71)", note: "many transistors per chip" },
                { label: "Gen 4: microprocessors (1971+)", note: "CPU on a chip; PCs arrived" },
                { label: "Gen 5: AI and parallelism", note: "ongoing; natural interfaces" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The 7-mark 'define a computer, its characteristics and the five generations' question appears almost every session. Memorise the generation table cold and back each characteristic with a one-line example so the answer does not look like a bare list.",
            },
            keyTerms: [
              { term: "Computer", definition: "An electronic device that accepts data as input, processes it under program control, stores it and produces output." },
              { term: "IPO cycle", definition: "The input, process, output sequence, with storage and control, that summarises every computing activity." },
              { term: "Computer generation", definition: "A class of computers defined by the core hardware technology used in their construction." },
            ],
            examQuestions: [
              {
                q: "Define a computer. Explain its important characteristics and discuss the five generations of computers with their key technologies and examples.",
                marks: 7,
                outline: [
                  "Define a computer as an electronic device performing IPO with storage and control.",
                  "List the six characteristics: speed, accuracy, diligence, versatility, memory, reliability - with one example each.",
                  "Mention GIGO: errors come from data or program, not the machine.",
                  "Tabulate the five generations with technology, period and example for each.",
                  "Conclude that each generation reduced size, cost and power while raising speed, reliability and ease of use.",
                ],
              },
              {
                q: "Name any four characteristics of a computer.",
                marks: 2,
              },
              {
                q: "List the five generations of computers with one identifying technology each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Classification of computers: super, mainframe, mini and micro",
            body: [
              "Computers are classified by size, speed, cost and the number of users they serve. A supercomputer is the largest and fastest class, costing tens of millions of rupees and executing quadrillions of floating-point operations per second; it is built from thousands of processors working in parallel and is used for weather prediction, nuclear simulation, drug discovery and aerospace modelling. India's PARAM series and the American Cray and Frontier systems are landmarks; speed is ranked by the TOP500 list published twice a year.",
              "A mainframe is a large, high-reliability machine designed to process huge databases for thousands of simultaneous users; banks, airlines, insurance firms and government tax departments still depend on IBM mainframes because they handle transaction volumes that distributed servers struggle to match. A minicomputer, popular from the 1960s to the 1980s, was a mid-range machine used by small organisations for engineering and data processing; the Digital PDP-11 and VAX are classics. Today minis have largely been absorbed by powerful rack servers, though their multi-user role lives on in departmental systems.",
              "A microcomputer is built around a single-chip microprocessor and is what most users actually see: the personal computer, laptop, tablet and smartphone. Microcomputers are cheap, small and single-user (or a few users), yet their CPUs are now powerful enough to do work once reserved for supercomputers. The classification is therefore relative - a 2024 smartphone outperforms a 1990 supercomputer on most workloads - but the categories remain useful because they describe the role a machine plays in an organisation, not just its raw speed.",
            ],
            bullets: [
              "Supercomputer: fastest class, thousands of parallel processors, used for simulation and modelling.",
              "Mainframe: large, high-reliability machine serving thousands of users, used by banks and airlines.",
              "Minicomputer: mid-range multi-user machine, now mostly replaced by powerful servers.",
              "Microcomputer: built on a microprocessor, includes PCs, laptops, tablets and smartphones.",
              "Classification is by size, cost, speed and user count - a modern phone beats a 1990 supercomputer.",
            ],
            table: {
              caption: "Classification of computers by size and role.",
              headers: ["Type", "Size", "Speed", "Typical use"],
              rows: [
                ["Supercomputer", "very large", "petaflops", "weather, defence, research"],
                ["Mainframe", "large", "high MIPS", "banking, airline bookings"],
                ["Minicomputer", "medium", "medium", "departmental data processing"],
                ["Microcomputer", "small", "low to medium", "personal and office use"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Where each computer class sits on cost and user count",
              caption:
                "Cost on the x-axis, number of simultaneous users on the y-axis - the four classes occupy distinct quadrants.",
              axes: { x: "cost (low to high)", y: "users (one to millions)" },
              quadrants: [
                { label: "Microcomputer", note: "low cost, single user" },
                { label: "Workstation server", note: "medium cost, small team" },
                { label: "Minicomputer", note: "medium cost, department" },
                { label: "Supercomputer / mainframe", note: "high cost, thousands of users" },
              ],
            },
            callout: {
              type: "tip",
              title: "Answer the classification question with a table",
              body: "A neat four-row table with type, size, speed and use earns full marks. Add one example per row - PARAM, IBM Z, PDP-11, PC - and one line on why a smartphone still counts as a microcomputer even though it is very fast.",
            },
            keyTerms: [
              { term: "Supercomputer", definition: "The fastest class of computer, built from thousands of parallel processors for simulation and modelling." },
              { term: "Mainframe", definition: "A large, high-reliability computer serving thousands of simultaneous users in transaction processing." },
              { term: "Microcomputer", definition: "A computer built around a single microprocessor, including PCs, laptops and smartphones." },
            ],
            examQuestions: [
              {
                q: "Classify computers on the basis of size and capacity. Describe super, mainframe, mini and micro computers with one example each.",
                marks: 7,
                outline: [
                  "State that classification is by size, speed, cost and number of users.",
                  "Supercomputer: fastest, parallel processors, used for weather and defence; example PARAM or Cray.",
                  "Mainframe: large, high-reliability, thousands of users; example IBM Z series, used by banks.",
                  "Minicomputer: mid-range multi-user; example Digital PDP-11; now mostly replaced by servers.",
                  "Microcomputer: built on a microprocessor; example PC, laptop, smartphone; conclude that classification is relative to era.",
                ],
              },
              {
                q: "Which class of computer is used for weather forecasting and why?",
                marks: 2,
              },
              {
                q: "Give one example each of a supercomputer, a mainframe and a microcomputer.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Components of a computer: CPU, memory and I/O",
            body: [
              "Every computer is built from three functional groups: the central processing unit, the memory, and the input-output subsystem, all tied together by a system bus that carries address, data and control signals. The CPU is the brain: it fetches an instruction from memory, decodes it, executes it, and writes back any result, then repeats - the fetch-decode-execute cycle. Inside the CPU sit the arithmetic logic unit that performs calculations and logical decisions, the control unit that sequences operations, and a small set of fast registers including the program counter, the instruction register and the accumulator.",
              "Memory holds both the program being run and the data it works on. Main memory, also called primary or RAM, is volatile - its contents vanish when power is cut - and is directly addressable by the CPU. Read-only memory (ROM) holds the firmware, such as the BIOS or UEFI, that boots the machine. Secondary storage - hard disks, SSDs, USB drives and optical discs - is non-volatile, much larger and cheaper than RAM, but far slower because it is not directly addressable; the CPU must load a block into RAM before using it.",
              "Input devices feed data and commands into the system; the keyboard, mouse, scanner, microphone and touchscreen are the common ones. Output devices present results to the user; the monitor, printer, speaker and plotter are the common ones. Some devices, such as touchscreens and modems, are both input and output. The system bus is the highway that links everything: the address bus carries the memory location, the data bus carries the actual bytes, and the control bus carries timing and command signals. The wider and faster the buses, the more data the machine can move per second.",
            ],
            bullets: [
              "CPU: the brain, containing ALU, control unit and registers, running the fetch-decode-execute cycle.",
              "ALU performs arithmetic and logic; the control unit sequences operations and drives the bus.",
              "Registers include program counter, instruction register and accumulator - fast CPU-local storage.",
              "Primary memory (RAM) is volatile and directly addressable; ROM holds firmware; secondary storage is non-volatile.",
              "System bus = address bus + data bus + control bus; wider buses move more data per cycle.",
            ],
            table: {
              caption: "Functional components of a computer and their roles.",
              headers: ["Component", "Sub-parts", "Role"],
              rows: [
                ["CPU", "ALU, control unit, registers", "fetches, decodes and executes instructions"],
                ["Primary memory", "RAM, ROM, cache", "holds running program and data"],
                ["Secondary storage", "HDD, SSD, USB", "permanent storage of files"],
                ["Input devices", "keyboard, mouse, scanner", "feed data and commands into the system"],
                ["Output devices", "monitor, printer, speaker", "present results to the user"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Inside the computer: how the components stack",
              caption:
                "Top layer is the CPU; below it sits memory, then the bus, then I/O devices.",
              layers: [
                { label: "CPU (ALU + CU + registers)", note: "fetch, decode, execute" },
                { label: "Primary memory (RAM, ROM, cache)", note: "directly addressable" },
                { label: "System bus (address, data, control)", note: "links CPU, memory, I/O" },
                { label: "I/O devices and secondary storage", note: "keyboard, disk, monitor" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not confuse RAM and ROM roles",
              body: "A frequent slip is to say 'ROM is faster than RAM so the CPU uses it first'. RAM is the working memory the CPU reads and writes constantly; ROM only holds the boot firmware. Speed is not the criterion - volatility and writability are.",
            },
            keyTerms: [
              { term: "CPU", definition: "The central processing unit; contains the ALU, control unit and registers, and runs the fetch-decode-execute cycle." },
              { term: "System bus", definition: "The shared highway of address, data and control lines linking CPU, memory and I/O." },
              { term: "ALU", definition: "The arithmetic logic unit inside the CPU that performs mathematical and logical operations." },
            ],
            examQuestions: [
              {
                q: "Explain the functional components of a computer. Describe the CPU with its sub-units, the memory types and the role of input-output devices and the system bus.",
                marks: 7,
                outline: [
                  "List the three groups: CPU, memory, I/O, tied by the system bus.",
                  "Describe the CPU: ALU for arithmetic and logic, control unit for sequencing, registers (PC, IR, accumulator).",
                  "Explain memory: RAM (volatile, working), ROM (firmware), secondary storage (non-volatile).",
                  "Describe input devices (keyboard, mouse) and output devices (monitor, printer) with one example each.",
                  "Explain the system bus: address bus for location, data bus for bytes, control bus for timing.",
                ],
              },
              {
                q: "What is the fetch-decode-execute cycle?",
                marks: 2,
              },
              {
                q: "Distinguish between RAM and ROM in two points.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Memory hierarchy: registers, cache, RAM and secondary storage",
            body: [
              "No single memory technology is both fast, large and cheap, so designers stack several into a hierarchy. At the top sit the CPU registers - a handful of words accessible in one clock cycle but tiny in capacity. Below them is the cache, a small fast SRAM memory that holds copies of the most-used data from RAM; modern CPUs have L1, L2 and sometimes L3 cache levels, each larger and slower than the one above. Below the cache sits main memory or RAM, built from DRAM, much larger than cache but slower and volatile.",
              "Below RAM comes secondary storage: hard disk drives with spinning platters, solid-state drives with flash memory, USB pen drives, CDs and DVDs, magnetic tape for archival, and cloud storage accessed over a network. Secondary storage is non-volatile, very large and cheap per gigabyte, but it is orders of magnitude slower than RAM. The hierarchy works because of locality of reference: a program that just used an address will soon use nearby addresses (spatial locality) and will probably reuse the same address (temporal locality), so caches pre-load neighbouring blocks and hit on most accesses.",
              "The trade-off is captured by cost per byte versus access time. Registers cost the most per byte and are fastest - under a nanosecond; cache is next; RAM is in the tens of nanoseconds; an SSD takes microseconds; an HDD takes milliseconds; and network storage takes tens of milliseconds. The pyramid of capacity runs the opposite way: registers hold kilobytes, cache holds megabytes, RAM holds gigabytes and disks hold terabytes. Moving down the pyramid the cost per byte drops by roughly an order of magnitude at each step, which is why the hierarchy exists at all - no machine could afford a terabyte of register-speed memory.",
            ],
            bullets: [
              "Memory hierarchy stacks registers, cache (L1/L2/L3), RAM and secondary storage by speed and cost.",
              "Registers: fastest, smallest, inside the CPU; cache: SRAM, holds hot data from RAM.",
              "RAM: DRAM, volatile, directly addressable; secondary storage: non-volatile, large, slow.",
              "Locality of reference (spatial and temporal) is why caches pre-load and hit on most accesses.",
              "Cost per byte rises up the pyramid; access time and capacity fall - the trade-off is unavoidable.",
            ],
            table: {
              caption: "Memory hierarchy trade-offs.",
              headers: ["Level", "Technology", "Access time", "Typical capacity"],
              rows: [
                ["Registers", "flip-flops in CPU", "< 1 ns", "bytes to KB"],
                ["Cache", "SRAM (L1, L2, L3)", "1 to 10 ns", "MB"],
                ["Main memory", "DRAM (RAM)", "50 to 100 ns", "GB"],
                ["Secondary", "SSD, HDD, USB", "us to ms", "TB"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The memory hierarchy pyramid",
              caption:
                "Top tier is fastest, smallest and costliest per byte; bottom tier is slowest, largest and cheapest.",
              tiers: [
                { label: "Registers", note: "fastest, smallest" },
                { label: "Cache (L1, L2, L3)", note: "SRAM, holds hot data" },
                { label: "Main memory (RAM)", note: "DRAM, volatile" },
                { label: "Secondary storage", note: "SSD, HDD - large and cheap" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always pair the pyramid with a cost-speed table",
              body: "RGPV examiners reward a drawn pyramid plus a four-row table showing level, technology, access time and capacity. State the locality principle in one line - it is the single sentence that explains why the hierarchy actually works.",
            },
            keyTerms: [
              { term: "Memory hierarchy", definition: "The stacking of registers, cache, RAM and secondary storage to balance speed, size and cost." },
              { term: "Cache", definition: "A small fast SRAM memory that holds copies of frequently used data from RAM to reduce average access time." },
              { term: "Locality of reference", definition: "The tendency of programs to reuse the same address (temporal) and nearby addresses (spatial), which caches exploit." },
            ],
            examQuestions: [
              {
                q: "Explain the memory hierarchy of a computer. Discuss registers, cache, RAM and secondary storage with their technologies, access times and capacities, and state the principle that makes the hierarchy effective.",
                marks: 7,
                outline: [
                  "Define the memory hierarchy as a stack balancing speed, size and cost.",
                  "Registers: fastest, inside CPU, bytes to KB; cache: SRAM L1/L2/L3, MB.",
                  "RAM: DRAM, GB, volatile, 50 to 100 ns; secondary: SSD/HDD, TB, non-volatile.",
                  "Draw the pyramid: top is fast and costly per byte, bottom is slow and cheap.",
                  "State locality of reference (spatial and temporal) as the reason caches pre-load and hit.",
                ],
              },
              {
                q: "What is cache memory and why is it needed?",
                marks: 2,
              },
              {
                q: "Arrange registers, cache, RAM and hard disk in increasing order of access time.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Software types: system and application; operating system functions",
            body: [
              "Software is the set of programs and associated data that tells the hardware what to do. It is broadly divided into system software and application software. System software manages and coordinates the hardware and provides a platform on which applications run; it includes the operating system, device drivers, firmware, language translators such as compilers and interpreters, and utility programs like file managers and disk checkers. Application software, by contrast, performs specific end-user tasks - a web browser, a word processor, a spreadsheet, an image editor or a game - and cannot run without the system software underneath.",
              "The operating system is the most important piece of system software. It acts as an interface between the user and the hardware, hiding the complexity of disks, memory and devices behind a clean set of services. Its core functions are process management, deciding which program runs when; memory management, allocating RAM to processes and tracking free space; file management, organising data into named files and directories on storage; device management, driving printers, keyboards and networks through drivers; and user interface, providing a command line or a graphical desktop.",
              "Other system software supports the OS. Device drivers are small programs that translate generic OS commands into the specific control sequences a piece of hardware needs; without the right driver, a printer or a graphics card is unusable. Compilers translate a high-level language like C into machine code once, producing a fast executable; interpreters such as the Python runtime translate and execute line by line, slower but easier to debug. Utility programs handle housekeeping: defragmenting disks, compressing files, scanning for viruses, backing up data. Together, system software turns a pile of circuits into a usable machine.",
            ],
            bullets: [
              "Software = system software + application software; system software manages hardware, applications serve users.",
              "System software includes the OS, device drivers, firmware, compilers, interpreters and utilities.",
              "OS functions: process, memory, file, device and security management plus a user interface.",
              "Compilers translate a high-level program to machine code once; interpreters translate line by line.",
              "Application software includes browsers, word processors, spreadsheets, editors and games.",
            ],
            table: {
              caption: "System software versus application software.",
              headers: ["Aspect", "System software", "Application software"],
              rows: [
                ["Purpose", "manage hardware", "perform user tasks"],
                ["Examples", "OS, drivers, compiler", "browser, word processor"],
                ["Dependency", "runs on bare hardware", "needs system software"],
                ["User", "system and developers", "end users"],
                ["Written in", "C, C++, assembly", "any high-level language"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two families of software side by side",
              caption:
                "System software sits between hardware and applications; application software sits on top, serving the user.",
              left: {
                heading: "System software",
                items: [
                  "Operating system (Windows, Linux)",
                  "Device drivers (printer, GPU)",
                  "Language translators (C compiler)",
                  "Utility programs (defrag, backup)",
                  "Firmware (BIOS, UEFI)",
                ],
              },
              right: {
                heading: "Application software",
                items: [
                  "Web browser (Chrome, Firefox)",
                  "Word processor (MS Word)",
                  "Spreadsheet (MS Excel)",
                  "Image editor (Photoshop)",
                  "Games and media players",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Borderline cases to mention",
              body: "A compiler is system software even though it produces application programs, and a database like MySQL can be either. Mentioning these edge cases in the exam shows understanding beyond a bare list and picks up an extra mark.",
            },
            keyTerms: [
              { term: "System software", definition: "Programs that manage and coordinate hardware and provide a platform for applications, including the OS, drivers and compilers." },
              { term: "Application software", definition: "Programs that perform specific end-user tasks such as browsing, writing or editing images." },
              { term: "Operating system", definition: "System software that manages hardware and software resources and provides common services to applications." },
            ],
            examQuestions: [
              {
                q: "Differentiate between system software and application software with examples. Explain any five important functions of an operating system.",
                marks: 7,
                outline: [
                  "Define software and split it into system and application.",
                  "Contrast the two in a table: purpose, examples, dependency, user, language.",
                  "Define the operating system as the interface between user and hardware.",
                  "List five OS functions: process management, memory management, file management, device management, user interface.",
                  "Give one example of system software (Linux) and one of application software (MS Word) to close.",
                ],
              },
              {
                q: "Is a compiler system software or application software? Justify.",
                marks: 2,
              },
              {
                q: "List any three functions of an operating system.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Number Systems and Digital Logic",
      summary:
        "Binary, octal and hexadecimal number systems with conversions and arithmetic; one's and two's complement representation; BCD, ASCII and Gray codes; logic gates with truth tables and the universal gates NAND and NOR; and an introduction to combinational circuits such as half and full adders, multiplexers and flip-flops.",
      chapter: {
        number: "02",
        title: "Number Systems and Digital Logic",
        intro:
          "Unit II is the bridge from the human decimal world to the machine's binary world. It covers the four standard number systems and the conversions between them, signed-number representation using complements, the codes that wrap characters and decimals into bit patterns, the logic gates from which every processor is built, and the first combinational and sequential circuits that combine those gates into useful blocks.",
        inOneBreath:
          "Computers use binary because a transistor is a two-state switch; octal groups three bits and hex groups four bits to make binary readable; decimal-to-binary conversion uses repeated division by 2; the one's complement of a binary number flips every bit, the two's complement adds 1 and gives the signed representation computers actually use; BCD encodes each decimal digit in four bits; ASCII maps characters to seven-bit codes; Gray code changes only one bit between successive values; AND, OR, NOT, NAND, NOR, XOR and XNOR are the seven basic gates with truth tables; NAND and NOR are universal because they alone can build any function; a half adder adds two bits producing sum and carry, a full adder adds three bits, a multiplexer selects one of many inputs, and a flip-flop stores one bit and is the building block of memory.",
        sections: [
          {
            number: "2.1",
            title: "Number systems: binary, octal, hexadecimal and conversions",
            body: [
              "A number system is defined by its base or radix, the count of distinct digits it uses. The decimal system has base 10 and digits 0 to 9; binary has base 2 and digits 0 and 1; octal has base 8 and digits 0 to 7; hexadecimal has base 16 with digits 0 to 9 and A to F (where A is 10, F is 15). The value of a digit in a number equals its face value times the base raised to its position from the right, starting at zero. So decimal 245 means 2 times 10 squared plus 4 times 10 plus 5.",
              "Converting from any base to decimal uses the place-value expansion. Binary 1101 equals 1 times 2 cubed plus 1 times 2 squared plus 0 times 2 plus 1, which is 8 plus 4 plus 0 plus 1 = 13 in decimal. Octal 157 equals 1 times 64 plus 5 times 8 plus 7 = 111. Hex 2F equals 2 times 16 plus 15 = 47. Converting decimal to another base uses repeated division: to get binary, divide by 2 and read the remainders bottom-up; 13 decimal gives remainders 1, 0, 1, 1, so 13 = 1101 binary, exactly the reverse of the earlier expansion.",
              "Binary arithmetic follows the same rules as decimal but with only two digits. Addition: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (write 0, carry 1), and 1+1+1=11 (write 1, carry 1). Subtraction borrows as in decimal. Multiplication is just shifts and adds - the multiplier's bits select shifted copies of the multiplicand. Hexadecimal and octal are not used by the hardware but by humans to read binary compactly: one hex digit stands for four bits and one octal digit for three bits, so a 16-bit value is four hex digits or six octal digits (with leading zeros).",
            ],
            bullets: [
              "Base or radix = count of digits used; decimal 10, binary 2, octal 8, hexadecimal 16.",
              "Place-value expansion converts any base to decimal: digit times base raised to its position.",
              "Decimal to binary uses repeated division by 2; read remainders bottom-up.",
              "Binary addition: 1+1 = 10 (carry 1); 1+1+1 = 11 (carry 1); subtraction borrows as in decimal.",
              "Hex groups four bits per digit, octal groups three bits - both make long binary strings readable.",
            ],
            table: {
              caption: "Conversion of decimal 13 to other bases.",
              headers: ["System", "Method", "Result"],
              rows: [
                ["Binary (base 2)", "divide by 2, read remainders up", "1101"],
                ["Octal (base 8)", "13 = 1*8 + 5", "15"],
                ["Hexadecimal (base 16)", "13 is below 16", "D"],
                ["BCD", "encode each decimal digit in 4 bits", "0001 0011"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Converting decimal 25 to binary",
              caption:
                "Repeated division by 2 - read the remainders from bottom to top.",
              steps: [
                { label: "25 / 2 = 12 remainder 1", note: "least significant bit" },
                { label: "12 / 2 = 6 remainder 0", note: "next bit" },
                { label: "6 / 2 = 3 remainder 0", note: "next bit" },
                { label: "3 / 2 = 1 remainder 1", note: "next bit" },
                { label: "1 / 2 = 0 remainder 1", note: "most significant bit" },
                { label: "Read up: 11001", note: "decimal 25 = binary 11001" },
              ],
            },
            callout: {
              type: "tip",
              title: "Group bits to convert between bases instantly",
              body: "To turn binary into hex, group the bits into fours from the right and look up each group: 11001 becomes 0001 1001 = 0x19. For octal, group into threes. This shortcut earns a free mark in any conversion question.",
            },
            keyTerms: [
              { term: "Radix", definition: "The base of a number system; the count of distinct digits it uses, such as 2 for binary and 16 for hexadecimal." },
              { term: "Place-value expansion", definition: "Computing a number's decimal value as the sum of each digit times its base raised to its position." },
              { term: "Hexadecimal", definition: "Base-16 system with digits 0 to 9 and A to F, used to write binary compactly at four bits per digit." },
            ],
            examQuestions: [
              {
                q: "Explain binary, octal and hexadecimal number systems. Convert decimal 25 to binary and binary 11011 to decimal, and show the steps of binary addition 1011 + 110.",
                marks: 7,
                outline: [
                  "Define radix and state the digits of base 2, 8 and 16.",
                  "Convert 25 to binary by repeated division: remainders 1,0,0,1,1 read up = 11001.",
                  "Convert 11011 binary to decimal: 16+8+0+2+1 = 27.",
                  "Add 1011 + 110 column by column with carry: result 10001.",
                  "Mention hex grouping of four bits and octal grouping of three bits for readability.",
                ],
              },
              {
                q: "Convert hexadecimal 2F to decimal.",
                marks: 2,
              },
              {
                q: "Add binary numbers 1010 and 0011 and write the result.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "One's and two's complement representation",
            body: [
              "Computers must represent signed integers, both positive and negative, using only the two states of a binary digit. The simplest scheme is sign-magnitude: the leftmost bit is the sign (0 for positive, 1 for negative) and the rest hold the magnitude, so +5 in 8 bits is 00000101 and -5 is 10000101. Sign-magnitude is rarely used because it has two representations of zero (+0 and -0), which complicates testing, and because addition and subtraction need separate circuitry for signs.",
              "The one's complement of a binary number flips every bit: 00000101 becomes 11111010, and that pattern represents -5 in an 8-bit one's complement system. One's complement still suffers from two zeroes (00000000 and 11111111), but it lets addition use the same circuitry for signed and unsigned numbers, with an end-around carry that wraps any carry out of the most significant bit back into the least significant. The two's complement removes the double-zero problem: it is the one's complement plus one, so -5 in 8 bits is 11111010 + 1 = 11111011.",
              "Two's complement is the scheme virtually every modern CPU uses. Its key property is that addition, subtraction and multiplication work identically for signed and unsigned numbers - the CPU does not even need to know which is which. To negate a number, flip all bits and add one; to subtract, negate the second operand and add. The range of an n-bit two's complement integer is from -2^(n-1) to 2^(n-1) - 1, so an 8-bit cell holds -128 to +127. Overflow occurs when a result falls outside this range; detecting it is easy - if the carry into the sign bit and the carry out of it differ, an overflow happened.",
            ],
            bullets: [
              "Sign-magnitude: left bit is sign, rest is magnitude; suffers from two zeroes and separate sign logic.",
              "One's complement: flip every bit; still has +0 and -0; uses end-around carry for addition.",
              "Two's complement: one's complement plus one; only one zero and identical adder for signed/unsigned.",
              "Range of n-bit two's complement: -2^(n-1) to 2^(n-1) - 1; 8-bit gives -128 to +127.",
              "Overflow rule: carry into sign bit differs from carry out of sign bit.",
            ],
            table: {
              caption: "Representations of +5 and -5 in 8 bits.",
              headers: ["Scheme", "+5", "-5", "Notes"],
              rows: [
                ["Sign-magnitude", "00000101", "10000101", "two zeroes"],
                ["One's complement", "00000101", "11111010", "two zeroes, end-around carry"],
                ["Two's complement", "00000101", "11111011", "single zero, standard"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Building -5 in 8-bit two's complement",
              caption:
                "Start from +5, flip every bit, add one - the standard negation procedure.",
              stages: [
                { label: "Start: +5 = 00000101", note: "8-bit positive value" },
                { label: "One's complement: 11111010", note: "flip every bit" },
                { label: "Add 1: 11111011", note: "two's complement = -5" },
                { label: "Verify: 11111011 = -128+64+32+16+8+0+2+1 = -5", note: "decimal check" },
              ],
            },
            callout: {
              type: "warning",
              title: "Sign extension matters when widening",
              body: "Copying an 8-bit signed value into 16 bits is not just padding with zeros. The sign bit must be copied into every new upper bit: -5 = 11111011 becomes 1111111111111011, not 0000000011111011. Forgetting this is the classic bug in mixed-width signed arithmetic.",
            },
            keyTerms: [
              { term: "One's complement", definition: "A signed-number representation obtained by flipping every bit of the binary number." },
              { term: "Two's complement", definition: "The one's complement plus one; the standard signed representation in modern CPUs with a single zero." },
              { term: "Overflow", definition: "A condition where an arithmetic result exceeds the representable range of the cell, detected when carries into and out of the sign bit differ." },
            ],
            examQuestions: [
              {
                q: "Explain one's and two's complement representation of signed binary numbers. Represent -5 and -12 in 8-bit two's complement and explain why two's complement is preferred over sign-magnitude.",
                marks: 7,
                outline: [
                  "Define sign-magnitude, one's complement and two's complement.",
                  "Compute -5 in 8-bit two's complement: 00000101 -> 11111010 -> 11111011.",
                  "Compute -12: 00001100 -> 11110011 -> 11110100.",
                  "State advantages of two's complement: single zero, unified adder, simple negation by flip-and-add-one.",
                  "Give the range of an 8-bit two's complement cell as -128 to +127 and mention the overflow rule.",
                ],
              },
              {
                q: "Find the one's complement of binary 0110.",
                marks: 2,
              },
              {
                q: "Express -7 in 8-bit two's complement and verify by decimal addition.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Codes: BCD, ASCII and Gray code",
            body: [
              "Binary codes wrap information into bit patterns the machine can manipulate. The Binary Coded Decimal (BCD) code represents each decimal digit separately in four bits: 0 is 0000, 1 is 0001, ... 9 is 1001; the six patterns 1010 to 1111 are unused. Decimal 245 in BCD is 0010 0100 0101, never the pure binary 11110101. BCD is wasteful - four bits could hold 0 to 15 but only store 0 to 9 - but it suits calculators, digital clocks and financial systems where exact decimal rounding matters more than storage efficiency.",
              "ASCII, the American Standard Code for Information Interchange, maps characters to seven-bit codes, so it represents 128 symbols: the digits 0 to 9, the uppercase and lowercase English letters, punctuation, and 32 control codes such as line feed and carriage return. The digit '0' is 48 (0x30), 'A' is 65 (0x41) and 'a' is 97 (0x61); the 32-gap between uppercase and lowercase lets a program convert case by adding or subtracting 32. Extended ASCII uses the eighth bit to add another 128 symbols for accented letters and box-drawing characters; Unicode (UTF-8) extends ASCII to cover virtually every script in the world.",
              "Gray code, named after Frank Gray, is a binary code in which two successive values differ in exactly one bit. Counting from 0 to 7 in Gray gives 000, 001, 011, 010, 110, 111, 101, 100 - each step flips just one bit. This property is invaluable in hardware where multiple bits changing at once can produce transient wrong values: rotary shaft encoders, Karnaugh-map adjacency and error correction all use Gray code. To convert binary to Gray, write the most significant bit unchanged and then XOR each bit with the bit to its left; the reverse is an unfolding XOR from the most significant bit down.",
            ],
            bullets: [
              "BCD: each decimal digit in 4 bits; 6 patterns (1010-1111) unused; ideal for calculators.",
              "ASCII: 7-bit code for 128 symbols; '0' = 48, 'A' = 65, 'a' = 97; case conversion by +/- 32.",
              "Extended ASCII uses the eighth bit for 128 more symbols; UTF-8 extends ASCII to all scripts.",
              "Gray code: successive values differ in exactly one bit; used in encoders and Karnaugh maps.",
              "Binary to Gray: keep MSB, XOR each bit with its left neighbour; reverse is unfolding XOR.",
            ],
            table: {
              caption: "Decimal 245 and character 'A' under each code.",
              headers: ["Code", "Decimal 245", "Character 'A'"],
              rows: [
                ["Pure binary", "11110101", "not applicable"],
                ["BCD", "0010 0100 0101", "not applicable"],
                ["ASCII", "not applicable", "1000001 (decimal 65)"],
                ["Gray", "11101111", "not applicable"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Three codes, three purposes",
              caption:
                "BCD preserves decimal digits, ASCII wraps characters, Gray code makes single-bit transitions.",
              left: {
                heading: "BCD",
                items: [
                  "4 bits per decimal digit",
                  "6 of 16 patterns unused",
                  "245 = 0010 0100 0101",
                  "Used in calculators",
                  "Easy decimal display",
                ],
              },
              right: {
                heading: "ASCII",
                items: [
                  "7 bits per character",
                  "128 symbols total",
                  "'A' = 65, '0' = 48",
                  "Used in text and code",
                  "UTF-8 extends to all scripts",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Memorise the three anchor ASCII values",
              body: "Knowing '0' = 48, 'A' = 65 and 'a' = 97 lets you derive every other value: digits run 48 to 57, uppercase 65 to 90, lowercase 97 to 122. This earns full marks on any ASCII question without rote-learning the whole table.",
            },
            keyTerms: [
              { term: "BCD", definition: "Binary Coded Decimal; represents each decimal digit separately in four bits, leaving six patterns unused." },
              { term: "ASCII", definition: "A 7-bit code mapping 128 characters and control symbols to numeric values; the foundation of all modern text encodings." },
              { term: "Gray code", definition: "A binary code in which successive values differ in exactly one bit, used in encoders and Karnaugh maps." },
            ],
            examQuestions: [
              {
                q: "Explain BCD, ASCII and Gray codes with examples. Encode decimal 59 in BCD, find the ASCII code of 'B', and write the first four Gray code values.",
                marks: 7,
                outline: [
                  "Define BCD: each decimal digit in 4 bits; 59 = 0101 1001.",
                  "Define ASCII: 7-bit code; 'A' is 65 so 'B' is 66 = 1000010.",
                  "Define Gray code: successive values differ by one bit; list 000, 001, 011, 010.",
                  "State BCD's role in calculators and Gray's role in shaft encoders.",
                  "Mention that ASCII extends to UTF-8 for full Unicode coverage.",
                ],
              },
              {
                q: "Write the ASCII value of digit '5'.",
                marks: 2,
              },
              {
                q: "Convert binary 1011 to Gray code.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Logic gates, truth tables and universal gates",
            body: [
              "A logic gate is an electronic circuit that performs a Boolean operation on one or more binary inputs to produce a single binary output. The seven basic gates are AND, OR, NOT, NAND, NOR, XOR and XNOR. AND outputs 1 only when all inputs are 1; OR outputs 1 when at least one input is 1; NOT (also called inverter) flips a single input. NAND is AND followed by NOT, NOR is OR followed by NOT, XOR outputs 1 when inputs differ, and XNOR outputs 1 when inputs match. Each gate is summarised by a truth table listing the output for every input combination.",
              "NAND and NOR are called universal gates because any Boolean function, however complex, can be built using only NAND gates or only NOR gates. This matters because NAND and NOR are cheaper and faster to fabricate in integrated circuits than AND and OR - the inversion comes for free from the transistor structure. To build a NOT from NAND, tie both inputs together; to build an AND from NAND, follow one NAND with a NOT (itself a NAND); to build an OR from NAND, invert each input with a NAND and feed both into a third NAND. De Morgan's laws justify each rewrite: (A AND B)' = A' OR B', and (A OR B)' = A' AND B'.",
              "The XOR gate has a special role in arithmetic and cryptography. Its key property is that A XOR A = 0, A XOR 0 = A and A XOR B XOR B = A, which makes it self-inverse - the same operation encrypts and decrypts a one-time pad. A half adder is just XOR for the sum bit and AND for the carry bit; a full adder uses two XORs, two ANDs and an OR to add three input bits. Parity generators and checkers, comparators and address decoders all lean on XOR. Truth tables remain the unambiguous reference: every gate's behaviour is fully specified by listing its output for every input combination, two rows for a one-input gate, four for two inputs, eight for three.",
            ],
            bullets: [
              "Seven basic gates: AND, OR, NOT, NAND, NOR, XOR, XNOR - each defined by a truth table.",
              "AND outputs 1 only if all inputs are 1; OR outputs 1 if any input is 1; NOT flips its single input.",
              "NAND and NOR are universal: any Boolean function can be built from either alone.",
              "De Morgan's laws: (A AND B)' = A' OR B' and (A OR B)' = A' AND B' justify universal-gate rewrites.",
              "XOR self-inverse: A XOR A = 0 and A XOR B XOR B = A; the basis of half adders and one-time pads.",
            ],
            table: {
              caption: "Truth tables for the two-input basic gates.",
              headers: ["A", "B", "AND", "OR", "NAND", "NOR", "XOR"],
              rows: [
                ["0", "0", "0", "0", "1", "1", "0"],
                ["0", "1", "0", "1", "1", "0", "1"],
                ["1", "0", "0", "1", "1", "0", "1"],
                ["1", "1", "1", "1", "0", "0", "0"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Where each gate fits on output and universality",
              caption:
                "X-axis: whether the gate outputs 1 for more inputs; Y-axis: whether the gate is universal.",
              axes: { x: "outputs 1 often?", y: "universal?" },
              quadrants: [
                { label: "AND", note: "rare 1, not universal" },
                { label: "OR", note: "frequent 1, not universal" },
                { label: "NAND", note: "rare 0, universal" },
                { label: "NOR", note: "frequent 0, universal" },
              ],
            },
            callout: {
              type: "tip",
              title: "Build any gate from NAND in three moves",
              body: "On being asked 'show NAND is universal', demonstrate NOT (tie inputs), AND (NAND then NOT), and OR (invert each input then NAND). Three small circuits, full marks - and De Morgan's laws are the proof backbone.",
            },
            keyTerms: [
              { term: "Logic gate", definition: "An electronic circuit performing a Boolean operation on one or more binary inputs to give a single binary output." },
              { term: "Universal gate", definition: "A gate (NAND or NOR) from which any Boolean function can be constructed using that gate alone." },
              { term: "Truth table", definition: "A table listing the output of a gate or circuit for every possible combination of inputs." },
            ],
            examQuestions: [
              {
                q: "Define a logic gate. Draw the symbols and truth tables of AND, OR, NOT, NAND, NOR and XOR gates, and explain why NAND is called a universal gate.",
                marks: 7,
                outline: [
                  "Define a logic gate and state that its behaviour is captured by a truth table.",
                  "Give truth tables for AND, OR, NOT, NAND, NOR, XOR with two inputs each.",
                  "Define a universal gate as one from which any Boolean function can be built.",
                  "Show NOT, AND and OR built from NAND alone with circuit sketches.",
                  "Justify the rewrites with De Morgan's laws and conclude NAND is universal.",
                ],
              },
              {
                q: "Write the truth table of a two-input XOR gate.",
                marks: 2,
              },
              {
                q: "Realise a NOT gate using only NAND gates.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Combinational circuits and flip-flop introduction",
            body: [
              "A combinational circuit is a digital circuit whose output at any moment depends only on the present inputs - it has no memory. It is built from logic gates with no feedback loops, so the same input always produces the same output. The half adder is the simplest: it adds two single bits A and B and produces a sum bit S = A XOR B and a carry bit C = A AND B. The full adder adds three bits - A, B and a carry-in - producing sum = A XOR B XOR Cin and carry-out = (A AND B) OR (Cin AND (A XOR B)). Cascading n full adders gives an n-bit ripple-carry adder, the heart of every ALU.",
              "A multiplexer, or MUX, is a data selector: it has 2^n data inputs, n select lines and one output, and routes the input chosen by the select bits to the output. A 4-to-1 multiplexer has four data inputs D0 to D3 and two select lines S1 S0; when S1 S0 = 10 the output equals D2. Multiplexers implement any Boolean function by feeding the function's truth-table outputs as the data inputs and the variables as the select lines. A demultiplexer does the reverse - it routes one input to one of many outputs. Encoders, decoders and comparators are other common combinational blocks built from gates.",
              "A flip-flop is the simplest sequential circuit - a circuit whose output depends on both present inputs and past state, i.e. it has memory. The SR (set-reset) flip-flop has two inputs S and R: S=1 sets output Q to 1, R=1 resets it to 0, and S=R=1 is forbidden. The clocked SR, D and JK flip-flops add a clock input so the output changes only on a clock edge, giving synchronised behaviour. The D flip-flop simply passes its D input to Q at the clock edge, holding it between edges - the one-bit memory cell at the heart of registers and RAM. Cascading flip-flops produces counters and shift registers, bridging Unit II into the sequential world.",
            ],
            bullets: [
              "Combinational circuit: output depends only on present inputs; no memory, no feedback loops.",
              "Half adder: S = A XOR B, C = A AND B; full adder adds three bits with carry-in and carry-out.",
              "n full adders cascaded give an n-bit ripple-carry adder - the core of every ALU.",
              "Multiplexer: 2^n data inputs, n select lines, one output; routes the chosen input to the output.",
              "Flip-flop: simplest sequential circuit with memory; SR, D and JK types triggered on clock edges.",
            ],
            table: {
              caption: "Half adder and full adder behaviour.",
              headers: ["Inputs", "Sum", "Carry", "Circuit"],
              rows: [
                ["A=0 B=0", "0", "0", "half adder"],
                ["A=1 B=1", "0", "1", "half adder"],
                ["A=1 B=0 Cin=1", "0", "1", "full adder"],
                ["A=1 B=1 Cin=1", "1", "1", "full adder"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "From gates to sequential circuits",
              caption:
                "Gates combine into combinational blocks; combinational blocks plus feedback give flip-flops; flip-flops cascade into registers.",
              layers: [
                { label: "Logic gates (AND, OR, XOR, NAND)", note: "primitive components" },
                { label: "Combinational circuits (half adder, MUX)", note: "no memory" },
                { label: "Flip-flops (SR, D, JK)", note: "one-bit memory" },
                { label: "Registers and counters", note: "cascaded flip-flops" },
              ],
            },
            callout: {
              type: "warning",
              title: "Forbidden input of the SR flip-flop",
              body: "When both S and R of an SR flip-flop are 1, both Q and Q' try to become 0 - an invalid state. If both inputs then drop to 0 simultaneously, the next state is unpredictable. Always mention this forbidden combination in the exam answer; the JK flip-flop is the safe upgrade that removes it.",
            },
            keyTerms: [
              { term: "Combinational circuit", definition: "A digital circuit whose output depends only on the present inputs, with no memory and no feedback." },
              { term: "Multiplexer", definition: "A combinational circuit that selects one of 2^n data inputs and routes it to a single output using n select lines." },
              { term: "Flip-flop", definition: "A sequential circuit with one bit of memory whose output changes on a clock edge; types include SR, D and JK." },
            ],
            examQuestions: [
              {
                q: "Differentiate combinational and sequential circuits. Explain a half adder and a full adder with truth tables, and describe a 4-to-1 multiplexer and an SR flip-flop.",
                marks: 7,
                outline: [
                  "Define combinational (no memory) vs sequential (has memory) circuits.",
                  "Give the half adder equations S = A XOR B, C = A AND B with its truth table.",
                  "Give the full adder equations with carry-in and a four-row truth table.",
                  "Describe the 4-to-1 multiplexer: four data inputs, two select lines, one output.",
                  "Describe the SR flip-flop with its truth table and mention the forbidden S=R=1 case.",
                ],
              },
              {
                q: "What is a multiplexer? Give one application.",
                marks: 2,
              },
              {
                q: "Draw the truth table of a half adder.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Operating Systems and Software",
      summary:
        "The five core functions of an operating system; process states and the basics of CPU scheduling; the deadlock problem, its conditions and handling strategies; the structure and role of file systems; and a comparison of popular operating systems including Windows, Linux and Android, with notes on utilities, malware, antivirus and software licensing.",
      chapter: {
        number: "03",
        title: "Operating Systems and Software",
        intro:
          "Unit III looks at the software that manages every other program: the operating system. It covers what an OS actually does for processes, memory, files and devices, how it schedules processes and avoids deadlock, how it organises data into files and directories, and how the popular desktop and mobile operating systems compare - with a closing note on utilities, malware, antivirus and the open-source versus proprietary debate.",
        inOneBreath:
          "An operating system manages processes, memory, files, devices and security, and provides a user interface; a process moves through the new, ready, running, waiting and terminated states while a scheduler picks the next one using FCFS, SJF, round-robin or priority policies; a deadlock arises when four conditions hold simultaneously - mutual exclusion, hold and wait, no preemption and circular wait - and is handled by prevention, avoidance (Banker's algorithm), detection or ignorance; a file system organises storage into files and directories with FAT, NTFS and ext4 as common examples; Windows, Linux and Android differ in kernel type, licensing and target device; utilities such as compressors and disk checkers support the OS; malware includes viruses, worms, Trojans and spyware; antivirus software scans signatures and behaviour; and software is licensed as proprietary (closed source), open source (free to modify) or freeware.",
        sections: [
          {
            number: "3.1",
            title: "Operating system functions: process, memory, file, I/O and security management",
            body: [
              "An operating system is the system software that manages computer hardware and software resources and provides common services to application programs. Its five core functions cover everything the hardware needs done for the user. Process management decides which program runs on the CPU at any moment, creates and terminates processes, and supports inter-process communication and synchronisation. Memory management allocates RAM to processes, tracks free and used regions, and moves data between RAM and disk by swapping or paging so that the CPU always has the next instructions ready.",
              "File management organises data into named files and directories on storage media, providing operations to create, read, write, delete and rename files, and enforcing access permissions so one user cannot read another's private data. Device management, also called I/O management, drives every peripheral through its device driver: it receives requests from processes, queues them, hands them to the driver, and returns results, hiding the differences between a printer, a keyboard and a network card behind a uniform interface. Security and protection management authenticates users, enforces file permissions, and defends against unauthorised access and malicious programs.",
              "These functions sit on top of a system call interface that lets applications request services such as 'open file', 'fork process' or 'read socket'. The kernel is the heart of the OS, the part that runs in privileged mode with full hardware access; everything else - shells, libraries, daemons - runs in user mode and calls into the kernel when it needs hardware. Modern OS kernels are large and feature-rich: Linux has tens of millions of lines of code, yet the user sees only the desktop and the command shell. The layered architecture - hardware, kernel, system calls, libraries, applications - is what makes a complex machine manageable.",
            ],
            bullets: [
              "OS five functions: process, memory, file, device and security management plus user interface.",
              "Process management: create, schedule, terminate, synchronise and communicate between processes.",
              "Memory management: allocate RAM, track free space, swap or page to disk so the CPU always has code ready.",
              "File management: organise files and directories, enforce permissions, support create/read/write/delete.",
              "Device management: drive peripherals through drivers, hide hardware differences behind uniform I/O calls.",
            ],
            table: {
              caption: "Core OS functions and their responsibilities.",
              headers: ["Function", "Manages", "Key service"],
              rows: [
                ["Process", "CPU and processes", "scheduling, IPC"],
                ["Memory", "RAM and swap", "allocation, paging"],
                ["File", "secondary storage", "files, directories, permissions"],
                ["Device (I/O)", "peripherals", "drivers, buffering"],
                ["Security", "users and data", "authentication, permissions"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "An application request travels through the OS",
              caption:
                "Each arrow shows one OS function in action - the chain is what 'system software' really means.",
              steps: [
                { label: "App calls open('report.txt')", note: "system call" },
                { label: "File manager checks permissions", note: "security management" },
                { label: "Memory manager allocates a buffer", note: "memory management" },
                { label: "Device driver reads disk block", note: "device management" },
                { label: "Process unblocks and continues", note: "process management" },
              ],
            },
            callout: {
              type: "tip",
              title: "Anchor each function with a real example",
              body: "A bare list of five functions looks shallow. Pair each with one example - process: round-robin scheduler; memory: paging; file: NTFS; device: printer driver; security: login password. Five examples, five extra marks.",
            },
            keyTerms: [
              { term: "Operating system", definition: "System software that manages hardware and software resources and provides common services to applications." },
              { term: "Kernel", definition: "The privileged core of an OS that has full hardware access and provides system calls to user-space programs." },
              { term: "Process management", definition: "The OS function that creates, schedules, terminates and synchronises processes and handles inter-process communication." },
            ],
            examQuestions: [
              {
                q: "Define an operating system. Explain its five major functions - process, memory, file, device and security management - with one example each.",
                marks: 7,
                outline: [
                  "Define an operating system as the system software managing hardware and software resources.",
                  "Process management: scheduling, IPC; example round-robin scheduler.",
                  "Memory management: allocation, paging, swapping; example virtual memory.",
                  "File management: files, directories, permissions; example NTFS file system.",
                  "Device and security management: drivers and authentication; example printer driver and login password.",
                ],
              },
              {
                q: "What is the kernel of an operating system?",
                marks: 2,
              },
              {
                q: "List any three functions of an operating system with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Process states and CPU scheduling introduction",
            body: [
              "A process is a program in execution - more than just the code, it includes the program counter, the CPU registers, the stack, the heap and the open files. From the moment a process is created to the moment it terminates, it moves through a series of states. The classical five-state model is: new (being created), ready (waiting for the CPU), running (executing on the CPU), waiting or blocked (waiting for an I/O operation or event), and terminated (finished execution). Only one process per CPU core can be in the running state at a time; many can be ready or waiting.",
              "The scheduler is the OS component that decides which ready process runs next. A context switch saves the running process's register state into its process control block and loads the next process's state, so execution appears seamless. Scheduling policies differ in their goals. First-come, first-served (FCFS) runs processes in arrival order and is fair but suffers from the convoy effect when a long job blocks short ones. Shortest job first (SJF) runs the shortest next burst first and gives the optimal average waiting time, but needs the burst length in advance.",
              "Round-robin gives each process a fixed time quantum and rotates through the ready queue, ensuring no process waits too long - the favourite for interactive systems. Priority scheduling runs the highest-priority process first; without ageing, low-priority processes can starve indefinitely, so the OS raises their priority over time. Multilevel feedback queues combine these: processes move between queues of different quantum lengths based on their behaviour, mixing responsiveness with throughput. Performance metrics include average waiting time, turnaround time, response time and CPU utilisation, all of which an RGPV question typically asks you to compute for a small workload.",
            ],
            bullets: [
              "Five process states: new, ready, running, waiting (blocked) and terminated.",
              "Only one process per CPU core runs at a time; many can be ready or waiting.",
              "Context switch saves one process's registers and loads another's via the process control block.",
              "Scheduling policies: FCFS, SJF, round-robin, priority; each trades fairness, response time and throughput.",
              "Metrics: average waiting time, turnaround time, response time, CPU utilisation.",
            ],
            table: {
              caption: "Common CPU scheduling policies.",
              headers: ["Policy", "Basis", "Strength", "Weakness"],
              rows: [
                ["FCFS", "arrival order", "simple, fair", "convoy effect"],
                ["SJF", "shortest burst", "optimal wait time", "needs burst length"],
                ["Round-robin", "time quantum", "responsive", "overhead at small quantum"],
                ["Priority", "priority value", "important jobs first", "starvation without ageing"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The five-state process life cycle",
              caption:
                "A process moves clockwise: ready, running, waiting, back to ready - with new and terminated at the ends.",
              steps: [
                { label: "New: process created", note: "PCB allocated" },
                { label: "Ready: waiting for CPU", note: "in ready queue" },
                { label: "Running: on CPU", note: "one per core" },
                { label: "Waiting: blocked for I/O", note: "in wait queue" },
                { label: "Terminated: finished", note: "PCB freed" },
              ],
            },
            callout: {
              type: "exam",
              title: "Practice Gantt charts for FCFS, SJF and RR",
              body: "Almost every scheduling question in RGPV papers gives three or four processes with arrival and burst times and asks for the average waiting time. Draw the Gantt chart, read off each process's waiting time, and average them - the chart is where the marks live.",
            },
            keyTerms: [
              { term: "Process", definition: "A program in execution, including its code, program counter, registers, stack, heap and open files." },
              { term: "Context switch", definition: "The operation of saving one process's register state and loading another's so the CPU can switch between them." },
              { term: "Scheduling", definition: "The OS function that decides which ready process runs on the CPU next, according to a chosen policy." },
            ],
            examQuestions: [
              {
                q: "Explain the five states of a process with a state transition diagram. Describe FCFS, SJF and round-robin scheduling policies and compute the average waiting time for P1=5, P2=3, P3=8 bursts arriving at time 0 under FCFS.",
                marks: 7,
                outline: [
                  "Draw the five-state diagram: new, ready, running, waiting, terminated with arrows.",
                  "Define FCFS, SJF and round-robin with one strength and one weakness each.",
                  "Build the FCFS Gantt chart: P1 (0-5), P2 (5-8), P3 (8-16).",
                  "Waiting times: P1=0, P2=5, P3=8; average = (0+5+8)/3 = 4.33 ms.",
                  "Mention context switch and that SJF would give a lower average of (0+5+8)/3 reordered.",
                ],
              },
              {
                q: "What is a context switch?",
                marks: 2,
              },
              {
                q: "List any three CPU scheduling policies.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Deadlocks: conditions, prevention and handling",
            body: [
              "In a multiprogramming system, processes compete for resources such as the CPU, memory, files, printers and database locks. A deadlock occurs when a set of processes is blocked because each process holds a resource and waits for another resource held by a different process in the set. None can proceed, none can release, and the system appears frozen on those processes. The classical picture is a circular wait: P1 holds R1 and wants R2, while P2 holds R2 and wants R1 - neither moves.",
              "Coffman identified four conditions that must all hold simultaneously for a deadlock to arise: mutual exclusion (a resource cannot be shared), hold and wait (a process holds a resource while waiting for another), no preemption (a resource can only be released voluntarily by the process holding it), and circular wait (a closed chain of processes each waiting for a resource held by the next). Breaking any one of the four prevents deadlocks entirely; this is the basis of deadlock prevention. For example, ordering all resource types and requiring processes to request them only in increasing order breaks circular wait.",
              "Four strategies handle deadlocks. Prevention ensures at least one Coffman condition cannot hold - simple but often inefficient because it restricts resource use. Avoidance lets the system grant resources only when the resulting state is safe; Dijkstra's Banker's algorithm is the classic, requiring each process to declare its maximum resource needs in advance. Detection and recovery lets deadlocks happen, periodically runs a detection algorithm, and breaks the deadlock by aborting or rolling back a process. Finally, ignorance - the ostrich algorithm - simply ignores deadlocks because they are rare in well-tuned systems and the cost of prevention is higher than the cost of an occasional reboot; this is what most desktop and mobile operating systems actually do.",
            ],
            bullets: [
              "Deadlock: a set of processes each hold a resource and wait for another in the set - none can proceed.",
              "Coffman four conditions: mutual exclusion, hold and wait, no preemption, circular wait - all needed.",
              "Break any one condition to prevent deadlocks; ordering resource requests breaks circular wait.",
              "Banker's algorithm avoids deadlocks by granting resources only when the result is a safe state.",
              "Detection plus recovery aborts a process; ignorance (ostrich) is what most desktop OSes actually do.",
            ],
            table: {
              caption: "Deadlock handling strategies.",
              headers: ["Strategy", "Idea", "Cost"],
              rows: [
                ["Prevention", "break a Coffman condition", "low resource utilisation"],
                ["Avoidance", "grant only safe states (Banker)", "needs max needs upfront"],
                ["Detection", "let it happen, then recover", "abort or rollback a process"],
                ["Ignorance", "ostrich algorithm", "rare reboot accepted"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a deadlock handling strategy",
              caption:
                "From a resource-allocation problem, the system picks one of four responses.",
              start: "Processes request shared resources",
              branches: [
                { label: "Restrict requests to break a condition", outcome: "Prevention - simple but wasteful", good: true },
                { label: "Check safe state before granting", outcome: "Avoidance via Banker's algorithm", good: true },
                { label: "Detect and abort a victim", outcome: "Detection and recovery", good: true },
                { label: "Do nothing, reboot if needed", outcome: "Ostrich algorithm - used by desktop OSes", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "All four Coffman conditions must hold",
              body: "Students often state the four conditions but forget to say 'simultaneously'. A deadlock requires all four at once; if the system breaks even one - say, by allowing resource preemption - no deadlock can ever form. The word 'simultaneously' is worth a mark.",
            },
            keyTerms: [
              { term: "Deadlock", definition: "A situation in which a set of processes is permanently blocked because each holds a resource and waits for another held by a process in the set." },
              { term: "Coffman conditions", definition: "The four conditions (mutual exclusion, hold and wait, no preemption, circular wait) that must all hold for a deadlock." },
              { term: "Banker's algorithm", definition: "A deadlock avoidance algorithm that grants resources only when the resulting state is safe, given each process's declared maximum needs." },
            ],
            examQuestions: [
              {
                q: "What is a deadlock? State the four necessary conditions for deadlock and explain prevention, avoidance, detection and ignorance as handling strategies.",
                marks: 7,
                outline: [
                  "Define deadlock with a simple two-process circular wait example.",
                  "State the four Coffman conditions: mutual exclusion, hold and wait, no preemption, circular wait - all must hold.",
                  "Prevention: break one condition; example ordering resource types breaks circular wait.",
                  "Avoidance: Banker's algorithm grants only safe states using declared maxima.",
                  "Detection and recovery: detect periodically and abort a victim; ignorance: ostrich algorithm.",
                ],
              },
              {
                q: "Name the four Coffman conditions.",
                marks: 2,
              },
              {
                q: "How does ordering resource types prevent deadlock?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "File systems: files, directories and access methods",
            body: [
              "A file system is the OS component that organises data on secondary storage into named units called files and groups those files into directories, also called folders. Each file has a name, an extension hinting at its type, a size, a creation date, and access permissions. The file system maintains a table that maps a file's name to the disk blocks holding its content; FAT uses a linked list of clusters, NTFS and ext3/ext4 use a B-tree of extents indexed by an inode, and these choices govern how fast files grow, how large they can be and how fragmentation is handled.",
              "Directories form a tree rooted at a single top - the root directory. A path names a file by listing the directories from the root down, separated by a delimiter (forward slash on Linux, backslash on Windows). Absolute paths begin at the root (/home/user/report.txt); relative paths begin at the current directory (./report.txt). The file system resolves a path by walking the directory tree, reading one directory block at a time. Hard and soft links let one file appear under multiple names, but their semantics differ: a hard link shares the inode, a soft link is a path stored as a file.",
              "Access methods describe how a program reads a file. Sequential access reads bytes one after another - the natural model for text and audio streams. Direct or random access jumps to a known byte offset, essential for databases and indexed lookups. The file system caches recently read blocks in RAM, prefetches the next few blocks based on locality, and writes modified blocks back lazily so that a crash might lose only the last few seconds of work - hence the journaling used by NTFS and ext4 to recover a consistent state quickly after a power cut. Permissions such as read, write and execute on Unix control who can open, modify or run each file.",
            ],
            bullets: [
              "File system: organises data into files and directories on secondary storage with metadata.",
              "Common file systems: FAT (linked clusters), NTFS and ext4 (B-tree of extents indexed by inode).",
              "Directories form a tree; absolute paths begin at root, relative paths at the current directory.",
              "Access methods: sequential for streams, direct (random) for indexed lookups; permissions are read/write/execute.",
              "Journaling (NTFS, ext4) logs changes so a crash recovers a consistent state in seconds.",
            ],
            table: {
              caption: "Common file systems and their traits.",
              headers: ["File system", "OS", "Indexing", "Journaling"],
              rows: [
                ["FAT32", "Windows, USB", "linked clusters", "no"],
                ["NTFS", "Windows", "B-tree of extents", "yes"],
                ["ext4", "Linux", "inodes + extents", "yes"],
                ["exFAT", "Windows, SD cards", "linked clusters", "no"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "File system hierarchy on a Linux disk",
              caption:
                "Top is the root directory; each lower tier is a subdirectory of the one above.",
              tiers: [
                { label: "/  (root)", note: "top of the tree" },
                { label: "/home  /etc  /usr", note: "system directories" },
                { label: "/home/alice", note: "user's home directory" },
                { label: "/home/alice/report.txt", note: "a single file" },
              ],
            },
            callout: {
              type: "tip",
              title: "Map a familiar path to the hierarchy",
              body: "When asked to draw a file system hierarchy, map a path you actually use - /home/you/cs-notes/unit3.docx - and show root at the top, then home, then your directory, then the file. Examiners reward a concrete example over an abstract tree.",
            },
            keyTerms: [
              { term: "File system", definition: "The OS component that organises data on secondary storage into named files grouped in directories, with metadata and access control." },
              { term: "Inode", definition: "A data structure in Unix-style file systems that stores a file's metadata and the locations of its data blocks." },
              { term: "Path", definition: "A string that names a file by listing the directories from the root or current directory down to the file." },
            ],
            examQuestions: [
              {
                q: "Define a file system. Explain files, directories, absolute and relative paths, and sequential versus direct access methods. Name two common file systems.",
                marks: 7,
                outline: [
                  "Define a file system as the OS component organising data into files and directories.",
                  "Describe file metadata: name, type, size, permissions, timestamps.",
                  "Describe the directory tree, absolute and relative paths with an example each.",
                  "Contrast sequential and direct access; mention caching and journaling.",
                  "Name FAT32, NTFS and ext4 with one trait each.",
                ],
              },
              {
                q: "What is the difference between an absolute path and a relative path?",
                marks: 2,
              },
              {
                q: "List any three file metadata attributes.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Popular OSes, utilities, malware and software licensing",
            body: [
              "Three operating systems dominate everyday computing. Microsoft Windows is the leading desktop OS, closed-source and proprietary, with a graphical interface, broad hardware support and the NTFS file system; Windows 10 and 11 are the current versions. Linux is open-source, free to modify and distribute, and built on the Linux kernel; distributions such as Ubuntu, Fedora and Debian package the kernel with tools, and Linux dominates servers, supercomputers and Android phones. Android, built on the Linux kernel, is the leading mobile OS, designed for touch devices with a sandboxed app model and the Google Play store.",
              "Utility software supports the OS without performing end-user tasks: file compressors (zip, tar), disk defragmenters and checkers, backup tools, system monitors and terminal emulators. Malware is software that harms the user or system; viruses attach to programs and spread when run, worms spread themselves over networks, Trojans hide malicious code inside useful-looking programs, spyware collects user data secretly, and ransomware encrypts files and demands payment. Antivirus software defends by scanning files for known signatures, watching program behaviour for suspicious patterns, and quarantining or removing threats.",
              "Software licensing governs how a program may be used, copied and modified. Proprietary software such as Windows, Microsoft Office and Photoshop is closed-source, sold under a licence that forbids modification and redistribution; the user buys a right to use, not the code. Open-source software such as Linux, Firefox and LibreOffice ships with source code under licences like the GPL or MIT that allow inspection, modification and redistribution, usually free of charge. Freeware is free to use but not open-source (Skype, Adobe Reader); shareware is free for a trial period then paid. Understanding these categories matters for legal compliance and for choosing tools in a project.",
            ],
            bullets: [
              "Windows: proprietary desktop OS; Linux: open-source kernel driving servers and Android; Android: mobile OS.",
              "Utility software: compressors, defragmenters, backup tools, monitors - they support the OS, not the user.",
              "Malware types: virus, worm, Trojan, spyware, ransomware - differ in how they spread and what they do.",
              "Antivirus: scans signatures and behaviour, quarantines threats; keep definitions updated.",
              "Licences: proprietary (closed, paid), open-source (free, modifiable), freeware (free, closed), shareware (trial).",
            ],
            table: {
              caption: "Popular operating systems and their traits.",
              headers: ["OS", "Source", "Target", "File system"],
              rows: [
                ["Windows 11", "proprietary", "desktop, laptop", "NTFS"],
                ["Ubuntu Linux", "open-source", "desktop, server", "ext4"],
                ["Android 14", "open-source (kernel)", "phones, tablets", "ext4, F2FS"],
                ["macOS", "proprietary", "Apple hardware", "APFS"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Proprietary versus open-source software",
              caption:
                "The licence decides whether the user may read, modify and redistribute the source code.",
              left: {
                heading: "Proprietary",
                items: [
                  "Closed source, paid licence",
                  "No modification allowed",
                  "Examples: Windows, Photoshop",
                  "Vendor fixes bugs",
                  "Warranty and support included",
                ],
              },
              right: {
                heading: "Open-source",
                items: [
                  "Source code available",
                  "Free to modify and redistribute",
                  "Examples: Linux, Firefox, LibreOffice",
                  "Community fixes bugs",
                  "Support often paid separately",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Free of charge is not the same as open source",
              body: "Freeware such as Skype or Adobe Reader is free to use but the source is closed - you cannot modify or redistribute it. Open source is about the licence on the code, not the price. Mixing the two is a frequent exam slip and a real-world legal risk.",
            },
            keyTerms: [
              { term: "Malware", definition: "Software designed to harm a user or system, including viruses, worms, Trojans, spyware and ransomware." },
              { term: "Open-source software", definition: "Software whose source code is available under a licence that permits inspection, modification and redistribution." },
              { term: "Proprietary software", definition: "Closed-source software sold under a licence that forbids modification and redistribution; the user buys a right to use." },
            ],
            examQuestions: [
              {
                q: "Compare Windows, Linux and Android operating systems. Explain utility software and malware types, and distinguish between proprietary and open-source software with examples.",
                marks: 7,
                outline: [
                  "Compare Windows (proprietary, desktop), Linux (open-source, server) and Android (mobile, Linux kernel).",
                  "List utility software: compressors, defragmenters, backup tools, system monitors.",
                  "List malware types: virus, worm, Trojan, spyware, ransomware with one trait each.",
                  "Describe antivirus: signature scan plus behaviour watch, quarantine threats.",
                  "Contrast proprietary (closed, paid, Windows) with open-source (free, modifiable, Linux) software.",
                ],
              },
              {
                q: "Name any three types of malware.",
                marks: 2,
              },
              {
                q: "Differentiate between freeware and open-source software.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Programming and Problem Solving",
      summary:
        "Algorithms and flowcharts as problem-solving tools; pseudocode with variables and data types; control structures including decisions and loops, and the use of functions; one-dimensional arrays and their processing; simple C programs for sum, factorial and largest-of-three with debugging and good coding practices.",
      chapter: {
        number: "04",
        title: "Programming and Problem Solving",
        intro:
          "Unit IV is the first taste of programming. It teaches how to express a solution as an algorithm and a flowchart, how to write pseudocode with proper variables and data types, how to control execution with decisions and loops and how to package reusable steps into functions, how to collect data into arrays, and how to write, debug and maintain simple C programs.",
        inOneBreath:
          "An algorithm is a finite step-by-step procedure that transforms input into output and must be clear, terminating and effective; a flowchart is its diagram using oval (start/end), parallelogram (input/output), rectangle (process) and diamond (decision) symbols; pseudocode is a language-neutral outline of the algorithm; variables are named storage locations with data types int, float, char and double; control structures are sequence, selection (if, if-else, switch) and iteration (for, while, do-while); functions package reusable steps, communicate by parameters and return values, and follow a declaration-definition-call pattern; arrays hold a fixed number of elements of the same type accessed by zero-based index; the basic C program skeleton is #include <stdio.h>, int main(void) with scanf and printf, and return 0; debugging is the process of finding and fixing errors - syntax, logical and runtime - and good practice means meaningful names, comments, indentation and modular code.",
        sections: [
          {
            number: "4.1",
            title: "Algorithm and flowchart",
            body: [
              "An algorithm is a finite, ordered sequence of steps that transforms an input into a desired output. To qualify, it must satisfy four properties: it must be definite (each step is unambiguous), finite (it terminates after a bounded number of steps), effective (each step is doable) and have zero or more inputs and one or more outputs. Writing an algorithm before code is the cheapest bug-repeller: a wrong step on paper costs seconds, a wrong line in code costs hours of debugging. Algorithms are expressed in plain English, pseudocode, or as a flowchart.",
              "A flowchart is a graphical representation of an algorithm using standard symbols connected by arrows. An oval marks the start and the end; a parallelogram marks input or output; a rectangle marks a process such as a calculation or an assignment; a diamond marks a decision with one entry and two exits (yes and no); and a small circle marks a connector when the diagram spans pages. Arrows show the flow of control. A well-drawn flowchart makes the algorithm's logic visible at a glance: the decisions branch, the loops circle back, and the order of operations is unambiguous.",
              "Consider the algorithm to find the largest of three numbers. Step 1: read three numbers a, b, c. Step 2: assume largest = a. Step 3: if b is greater than largest, set largest = b. Step 4: if c is greater than largest, set largest = c. Step 5: print largest. Step 6: stop. The flowchart mirrors this exactly: an oval 'start', a parallelogram 'read a, b, c', a rectangle 'largest = a', two diamonds comparing b and c with branches back into the largest variable, an output parallelogram 'print largest', and an oval 'stop'. The discipline of drawing the chart first turns the code into a mechanical translation.",
            ],
            bullets: [
              "Algorithm: finite, ordered, unambiguous steps transforming input to output.",
              "Four properties: definite, finite, effective, with inputs and at least one output.",
              "Flowchart symbols: oval (start/end), parallelogram (I/O), rectangle (process), diamond (decision).",
              "Arrows show control flow; a small circle is a connector when the diagram spans pages.",
              "Writing the algorithm before code is the cheapest way to catch logic errors early.",
            ],
            table: {
              caption: "Standard flowchart symbols.",
              headers: ["Symbol", "Shape", "Meaning"],
              rows: [
                ["Terminator", "oval", "start or end"],
                ["Input/Output", "parallelogram", "read or print data"],
                ["Process", "rectangle", "calculation or assignment"],
                ["Decision", "diamond", "yes/no question"],
                ["Connector", "small circle", "join on another page"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Algorithm to find the largest of three numbers",
              caption:
                "Each step is one flowchart symbol - draw this before writing any C code.",
              steps: [
                { label: "Start", note: "oval" },
                { label: "Read a, b, c", note: "parallelogram - input" },
                { label: "largest = a", note: "rectangle - process" },
                { label: "if b > largest then largest = b", note: "diamond - decision" },
                { label: "if c > largest then largest = c", note: "diamond - decision" },
                { label: "Print largest; Stop", note: "output then oval" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write algorithm, flowchart and code in that order",
              body: "When a question asks 'write an algorithm and draw the flowchart', do the algorithm first (4 to 6 numbered steps), then the flowchart using the standard symbols, then the C program. The three together earn full marks; skipping the flowchart loses half.",
            },
            keyTerms: [
              { term: "Algorithm", definition: "A finite, ordered, unambiguous sequence of steps that transforms input into a desired output." },
              { term: "Flowchart", definition: "A graphical representation of an algorithm using standard symbols such as ovals, rectangles and diamonds connected by arrows." },
              { term: "Decision symbol", definition: "A diamond-shaped flowchart symbol representing a yes/no question with one entry and two exits." },
            ],
            examQuestions: [
              {
                q: "Define an algorithm and state its properties. Draw a flowchart to find the largest of three numbers and write the corresponding algorithm.",
                marks: 7,
                outline: [
                  "Define an algorithm and list the four properties: definite, finite, effective, input/output.",
                  "List the standard flowchart symbols with their meanings.",
                  "Write the algorithm in 5 to 6 numbered steps: read a, b, c; set largest = a; compare b; compare c; print.",
                  "Draw the flowchart using oval, parallelogram, rectangle and diamond symbols.",
                  "Mention that the flowchart makes the decision branches visible before coding.",
                ],
              },
              {
                q: "What is the use of the diamond symbol in a flowchart?",
                marks: 2,
              },
              {
                q: "List any three properties of an algorithm.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Pseudocode, variables and data types",
            body: [
              "Pseudocode is a language-neutral outline of an algorithm written in a structured English-like notation. It uses control keywords such as IF, ELSE, WHILE, FOR and REPEAT to organise the steps, but avoids the syntax details of any specific programming language - no semicolons, no curly braces, no type declarations. Pseudocode is the bridge between an algorithm drafted in plain English and a program in C, Java or Python; a reader fluent in any language can follow it, and translating it into code becomes a mechanical task.",
              "A variable is a named storage location in memory whose value can change during execution. Each variable has a name (an identifier), a type that decides what kind of values it can hold, a value, and an address in memory. In C the primitive data types are int for whole numbers (typically 4 bytes, range about -2 billion to +2 billion), float for single-precision real numbers (4 bytes, about 7 significant digits), double for double-precision real numbers (8 bytes, about 15 digits), and char for a single character (1 byte). Modifiers such as short, long, signed and unsigned adjust storage and range.",
              "Variables must be declared before use so the compiler can allocate memory and check type compatibility. A declaration pairs a type with a name: int age; or float salary = 55000.50;. Constants are values that do not change; the const keyword or a #define macro fixes them, as in const float PI = 3.14159f; or #define PI 3.14159. Naming conventions matter for readability: identifiers must start with a letter or underscore, can contain letters, digits and underscores, cannot be a keyword, and should be meaningful - studentCount beats x. Type mismatch errors, such as assigning a float to an int without a cast, are among the most common beginner bugs.",
            ],
            bullets: [
              "Pseudocode: structured English-like outline using IF, ELSE, WHILE, FOR - no language-specific syntax.",
              "Variable: named memory location with a type, a value and an address; value can change during execution.",
              "C primitive types: int (4 B), float (4 B, 7 digits), double (8 B, 15 digits), char (1 B).",
              "Modifiers: short, long, signed, unsigned adjust storage size and range.",
              "Naming rules: start with letter or underscore, no keywords, choose meaningful identifiers.",
            ],
            table: {
              caption: "C primitive data types and typical sizes.",
              headers: ["Type", "Size", "Range", "Use"],
              rows: [
                ["char", "1 byte", "-128 to 127", "single character"],
                ["int", "4 bytes", "about +/- 2 billion", "whole numbers"],
                ["float", "4 bytes", "7 digits", "real numbers"],
                ["double", "8 bytes", "15 digits", "precise real numbers"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a data type by value kind and size",
              caption:
                "X-axis: is the value a whole number or real; Y-axis: is the needed precision low or high.",
              axes: { x: "whole vs real", y: "precision" },
              quadrants: [
                { label: "char", note: "small whole number, low precision" },
                { label: "float", note: "real, low precision" },
                { label: "int / long", note: "large whole number" },
                { label: "double", note: "real, high precision" },
              ],
            },
            callout: {
              type: "tip",
              title: "Use float for graphics, double for money and physics",
              body: "A classic beginner bug is to use float for currency and lose pennies to rounding. Use double whenever the value matters financially or scientifically; reserve float for graphics and large arrays where memory dominates. State this rule in the exam to show practical judgement.",
            },
            keyTerms: [
              { term: "Pseudocode", definition: "A language-neutral, structured English-like outline of an algorithm using control keywords such as IF, ELSE and WHILE." },
              { term: "Variable", definition: "A named storage location in memory whose value can change during execution; declared with a type and an identifier." },
              { term: "Data type", definition: "A classification of values that determines the size, range and operations allowed on a variable, such as int, float or char." },
            ],
            examQuestions: [
              {
                q: "What is pseudocode? Explain variables and data types in C with examples, listing the size and range of int, float, double and char.",
                marks: 7,
                outline: [
                  "Define pseudocode and state that it is language-neutral and uses IF, ELSE, WHILE.",
                  "Define a variable as a named memory location with type, value and address.",
                  "List int (4 B, +/- 2 billion), float (4 B, 7 digits), double (8 B, 15 digits), char (1 B).",
                  "Give a declaration example: int age = 21; and a constant: const float PI = 3.14f;.",
                  "State the naming rules: start with letter or underscore, no keywords, meaningful names.",
                ],
              },
              {
                q: "What is a variable in C?",
                marks: 2,
              },
              {
                q: "List any three primitive data types of C with their sizes.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Control structures: decisions, loops and functions",
            body: [
              "Control structures direct the flow of execution through a program. There are three families. Sequence executes statements one after another, top to bottom. Selection chooses between alternatives: the if statement runs a block when a condition is true; if-else adds an alternative; else-if chains handle multiple cases; and the switch statement dispatches on a single integer or character value. Iteration repeats a block: the for loop runs a known number of times, the while loop runs while a condition holds (testing before each iteration), and the do-while loop tests after each iteration so it runs at least once.",
              "Loops often need fine control. The break statement exits the enclosing loop immediately; the continue statement skips the rest of the current iteration and moves to the next; nested loops combine an outer and an inner loop, useful for processing tables and matrices. Common pitfalls include the off-by-one error (using < instead of <=), the infinite loop (forgetting to update the loop variable), and confusing = (assignment) with == (comparison). Loops should be designed so the termination condition is reachable in every path - a small invariant check prevents hours of debugging.",
              "A function packages a reusable sequence of statements under a name, accepts inputs through parameters, and returns a result through a return value. Functions are declared with a prototype, defined with a body, and called by name with arguments. The general form is return-type name(parameter-list) { body }. Functions reduce code duplication, make programs easier to test, and enable recursion - a function calling itself to solve a smaller instance of the same problem, as in factorial(n) = n times factorial(n-1). The C standard library ships hundreds of functions such as printf, scanf, sqrt and strlen; including the right header brings them in.",
            ],
            bullets: [
              "Three control families: sequence, selection (if, if-else, switch) and iteration (for, while, do-while).",
              "break exits the enclosing loop; continue skips to the next iteration.",
              "Common pitfalls: off-by-one ( < vs <= ), infinite loops, and confusing = with ==.",
              "Function: reusable block with parameters, return value, prototype, definition and call.",
              "Recursion: a function calls itself on a smaller instance - factorial(n) = n * factorial(n-1).",
            ],
            codeExample: {
              language: "c",
              caption: "A C program using if-else, a for loop and a function.",
              code: [
                "#include <stdio.h>",
                "int max(int a, int b) {",
                "    return (a > b) ? a : b;",
                "}",
                "int main(void) {",
                "    int i, n, sum = 0;",
                "    scanf(\"%d\", &n);",
                "    for (i = 1; i <= n; i++) sum += i;",
                "    printf(\"sum=%d max=%d\\n\", sum, max(3, 7));",
                "    return 0;",
                "}"
              ].join("\n"),
            },
            diagram: {
              kind: "cycle",
              title: "How a for loop runs",
              caption:
                "Initialise once, test, body, update, test again - until the test fails.",
              steps: [
                { label: "Initialise (i = 1)", note: "once" },
                { label: "Test (i <= n)", note: "if false, exit" },
                { label: "Execute body", note: "the loop body" },
                { label: "Update (i++)", note: "then back to test" },
              ],
            },
            callout: {
              type: "warning",
              title: "Beware = versus ==",
              body: "Writing if (x = 5) instead of if (x == 5) assigns 5 to x and is always true in C, so the branch always runs. Modern compilers warn, but the warning is easy to ignore. Always read equality as 'equals-equals' when reviewing your code.",
            },
            keyTerms: [
              { term: "Control structure", definition: "A statement that directs the flow of execution: sequence, selection (if, switch) or iteration (for, while, do-while)." },
              { term: "Loop", definition: "A control structure that repeats a block while a condition holds; for, while and do-while are the three C forms." },
              { term: "Function", definition: "A named, reusable block of code that accepts parameters, performs a task and returns a value; declared with a prototype and defined with a body." },
            ],
            examQuestions: [
              {
                q: "Explain the three types of control structures in C with syntax and one example each. Write a function max(a, b) and a program that uses a for loop to sum 1 to n.",
                marks: 7,
                outline: [
                  "Define sequence, selection and iteration as the three control families.",
                  "Give syntax of if-else and switch; syntax of for, while and do-while with one example.",
                  "Explain break and continue; warn about = vs ==.",
                  "Write the max(int a, int b) function returning the larger value.",
                  "Write the main program that reads n, sums 1..n with a for loop, and prints sum and max(3,7).",
                ],
              },
              {
                q: "Differentiate between while and do-while loops.",
                marks: 2,
              },
              {
                q: "Write the syntax of a function definition in C.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Arrays: declaration, indexing and processing",
            body: [
              "An array is a collection of variables of the same type stored contiguously in memory and accessed by a single name plus an index. It is the natural way to handle a list of related values such as the marks of 60 students, the daily temperatures of a month, or the pixels of an image. In C a one-dimensional array is declared as type name[size]; for example int marks[60]; reserves 60 integers. The index runs from 0 to size-1, so marks[0] is the first element and marks[59] the last; the compiler does not check bounds, so reading marks[60] is undefined behaviour.",
              "Array elements are accessed as name[i] where i is an integer expression, and processed in a loop. To read 60 marks: for (i = 0; i < 60; i++) scanf(\"%d\", &marks[i]);. To find the total: for (i = 0; i < 60; i++) total += marks[i];. To find the largest: assume largest = marks[0]; then for each i from 1 to 59, if marks[i] > largest, update largest. To search for a value x: walk the array comparing each element, and either report its index or stop at the end with 'not found'. These four patterns - read, sum, max and search - cover most beginner array questions.",
              "Two-dimensional arrays model tables and matrices. Declared as type name[rows][cols]; int matrix[3][4]; reserves 12 integers in 3 rows of 4. Access uses two indices, matrix[i][j], and processing uses nested loops: an outer loop over rows and an inner loop over columns. Multi-dimensional arrays extend the idea to three or more indices, though beyond two dimensions memory grows quickly. Character arrays, also called strings in C, are one-dimensional arrays of char terminated by a null character '\\0'; the string \"Hello\" occupies 6 bytes including the terminator. The string.h library provides strlen, strcpy, strcat and strcmp for the common operations.",
            ],
            bullets: [
              "Array: same-type elements stored contiguously, accessed by name and zero-based index.",
              "Declare int marks[60]; index 0 to 59; the compiler does not check bounds.",
              "Four processing patterns: read, sum, find max, linear search.",
              "2D array int m[3][4] is a table; processed with nested loops over rows and columns.",
              "C strings are char arrays terminated by '\\0'; string.h gives strlen, strcpy, strcat, strcmp.",
            ],
            codeExample: {
              language: "c",
              caption: "Finding the largest element in an int array.",
              code: [
                "#include <stdio.h>",
                "int main(void) {",
                "    int a[5] = {10, 25, 7, 42, 13};",
                "    int i, largest = a[0];",
                "    for (i = 1; i < 5; i++)",
                "        if (a[i] > largest) largest = a[i];",
                "    printf(\"largest = %d\\n\", largest);",
                "    return 0;",
                "}"
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "Array storage in memory",
              caption:
                "Each element sits next to the previous one; the index is just an offset from the start.",
              layers: [
                { label: "a[0] = 10", note: "offset 0" },
                { label: "a[1] = 25", note: "offset 4 bytes (int)" },
                { label: "a[2] = 7", note: "offset 8 bytes" },
                { label: "a[3] = 42", note: "offset 12 bytes - largest" },
                { label: "a[4] = 13", note: "offset 16 bytes" },
              ],
            },
            callout: {
              type: "warning",
              title: "C does not check array bounds",
              body: "Reading or writing a[5] in a five-element array is undefined behaviour - it may appear to work, return garbage, or crash. Always size your loops as i < n, never i <= n, and validate user-supplied indices before using them.",
            },
            keyTerms: [
              { term: "Array", definition: "A collection of variables of the same type stored contiguously in memory and accessed by a single name and a zero-based index." },
              { term: "Index", definition: "An integer offset from the start of an array used to access an element; runs from 0 to size-1 in C." },
              { term: "Two-dimensional array", definition: "An array of arrays modelling a table or matrix, accessed with two indices as in matrix[i][j]." },
            ],
            examQuestions: [
              {
                q: "Define an array. Explain declaration, indexing and processing of a one-dimensional array in C, and write a program to find the largest of five numbers stored in an array.",
                marks: 7,
                outline: [
                  "Define an array as same-type contiguous elements accessed by name and index.",
                  "Give the syntax int a[5]; explain zero-based indexing and the lack of bounds checking.",
                  "List the four processing patterns: read, sum, find max, linear search.",
                  "Write the program: declare a[5], initialise, loop with largest = a[0] updating on each step.",
                  "Trace the loop for {10, 25, 7, 42, 13} showing largest becomes 42 and print the result.",
                ],
              },
              {
                q: "How is a two-dimensional array declared in C?",
                marks: 2,
              },
              {
                q: "Write a loop to read 10 integers into an array a.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Simple C programs, debugging and good coding practices",
            body: [
              "Three classic C programs cover most RGPV short-answer questions. The sum of n natural numbers uses a for loop: read n, then sum = 0; for (i = 1; i <= n; i++) sum += i; print sum. The factorial of n uses a long accumulator because factorials grow fast: read n, set fact = 1; for (i = 1; i <= n; i++) fact *= i; print fact. The largest of three numbers uses an if-else chain: read a, b, c; if (a >= b && a >= c) largest = a; else if (b >= c) largest = b; else largest = c. Each program follows the skeleton #include <stdio.h>, int main(void), input, process, output, return 0.",
              "Debugging is the process of finding and fixing errors in a program. Errors come in three kinds. Syntax errors violate the grammar of C, such as a missing semicolon or an unmatched brace; the compiler catches them and refuses to produce an executable. Runtime errors occur during execution, such as division by zero, null pointer dereference or array out of bounds; the program crashes or behaves wrongly. Logical errors produce wrong output despite correct syntax and successful execution - the program runs but does not do what was intended, such as using < instead of <=.",
              "Good coding practices make programs readable, testable and maintainable. Choose meaningful names: studentCount beats x. Add comments explaining why, not what. Indent consistently to show block structure. Keep functions short - one function, one task. Initialise variables before use. Check inputs and avoid magic numbers by using named constants. Test with normal, boundary and invalid inputs. Use a debugger or printf statements to trace execution when something goes wrong. Following these habits from the first program builds the discipline that industry expects of every engineer, and pays off in every later course.",
            ],
            bullets: [
              "Three classic programs: sum of 1..n, factorial of n, and largest of three numbers.",
              "Syntax errors are caught by the compiler; runtime errors crash the program; logical errors give wrong output.",
              "Use long for factorial because values grow quickly past 12.",
              "Good practice: meaningful names, comments on intent, consistent indentation, short functions.",
              "Test with normal, boundary and invalid inputs; use a debugger or printf to trace execution.",
            ],
            codeExample: {
              language: "c",
              caption: "C program to compute the factorial of a number.",
              code: [
                "#include <stdio.h>",
                "int main(void) {",
                "    int n, i;",
                "    long fact = 1;",
                "    scanf(\"%d\", &n);",
                "    for (i = 1; i <= n; i++) fact *= i;",
                "    printf(\"Factorial of %d = %ld\\n\", n, fact);",
                "    return 0;",
                "}"
              ].join("\n"),
            },
            diagram: {
              kind: "fork",
              title: "Classifying a program error",
              caption:
                "From the symptom, decide which kind of error you are hunting.",
              start: "Program does not work correctly",
              branches: [
                { label: "Compiler refuses to build", outcome: "Syntax error - fix the grammar", good: true },
                { label: "Program crashes while running", outcome: "Runtime error - check inputs and pointers", good: true },
                { label: "Program runs but output is wrong", outcome: "Logical error - trace the algorithm", good: true },
                { label: "Output flickers between runs", outcome: "Uninitialised variable - initialise before use", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Trace factorial step by step in the exam",
              body: "When asked to 'write a program to find the factorial of n', also trace it for n = 5: fact goes 1, 1, 2, 6, 24, 120. The trace earns an extra mark and proves the code works - examiners reward a concrete run over a bare listing.",
            },
            keyTerms: [
              { term: "Debugging", definition: "The process of finding and fixing errors in a program; errors are classified as syntax, runtime or logical." },
              { term: "Syntax error", definition: "A violation of the language's grammar, such as a missing semicolon, caught by the compiler at build time." },
              { term: "Logical error", definition: "An error in which the program runs and produces output, but the output is wrong because the algorithm or its implementation is incorrect." },
            ],
            examQuestions: [
              {
                q: "Write a C program to find the factorial of a number. Explain the three kinds of program errors and list five good coding practices.",
                marks: 7,
                outline: [
                  "Write the program: read n, set fact = 1, loop i=1..n multiplying fact, print fact.",
                  "Use long for fact; mention that factorial grows fast and overflows int past n=12.",
                  "Define syntax, runtime and logical errors with one example each.",
                  "List five practices: meaningful names, comments on intent, indentation, short functions, testing.",
                  "Mention tracing with printf or a debugger to locate logical errors.",
                ],
              },
              {
                q: "Differentiate between syntax error and logical error.",
                marks: 2,
              },
              {
                q: "Write a C program to find the largest of three numbers.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Networking, Internet and Office Tools",
      summary:
        "Network types from LAN to WAN and the common topologies; transmission media and the basics of IP addressing; internet services such as the World Wide Web, email and DNS with web browsers; cybersecurity basics including phishing, passwords and two-factor authentication; and office productivity tools - Word, Excel and PowerPoint - with their formulas and an overview of digital India applications.",
      chapter: {
        number: "05",
        title: "Networking, Internet and Office Tools",
        intro:
          "Unit V closes the subject with the network that ties computers together and the software people use every day. It covers how networks are classified by reach and shaped by topology, how bits travel over media and how IP addressing routes them, the services that make up the internet, the basics of cybersecurity that every user must practise, and the office productivity tools - Word, Excel, PowerPoint - that students and professionals live in, with a closing note on digital India applications.",
        inOneBreath:
          "Networks classify by reach as LAN (office), MAN (city) and WAN (country) and by topology as bus, star, ring, mesh or tree; transmission media are guided (twisted pair, coaxial, fibre) or unguided (radio, microwave, satellite); an IPv4 address is 32 bits written as four octets, with classes A to E and a subnet mask splitting network and host parts; the internet offers the WWW (HTTP over TCP/IP), email (SMTP, POP3, IMAP), DNS (names to IPs), FTP and search engines, accessed through browsers that render HTML and run JavaScript; cybersecurity risks include phishing, malware, weak passwords and unsecured Wi-Fi, defended by strong passwords, two-factor authentication, HTTPS, antivirus and regular updates; office tools include Word (documents), Excel (spreadsheets with formulas such as SUM, AVERAGE, IF) and PowerPoint (slides); and digital India applications include Aadhaar, UPI, DigiLocker, e-Hospital, BHIM and the UMANG portal.",
        sections: [
          {
            number: "5.1",
            title: "Network types (LAN, MAN, WAN) and topologies",
            body: [
              "A computer network is a collection of computers and other devices connected so they can share data and resources such as printers and internet connections. Networks are classified by their geographical reach. A Local Area Network (LAN) spans a small area such as an office, a lab or a building, typically within a kilometre, and offers high speed (100 Mbps to 10 Gbps) and low error rates. A Metropolitan Area Network (MAN) covers a city, such as a cable TV network or a city-wide Wi-Fi service. A Wide Area Network (WAN) spans a country or the world; the internet is the largest WAN.",
              "Topology is the physical or logical layout of a network. In a bus topology all devices share a single backbone cable; it is cheap but a single break disables the network. In a star topology every device connects to a central hub or switch; it is easy to manage and a faulty cable affects only one device, but the hub is a single point of failure. In a ring topology each device connects to two neighbours, forming a circle; data travels in one direction and a break can disable the ring unless a dual ring is used. In a mesh topology every device connects to every other; it is robust and fast but expensive in cabling.",
              "A tree topology is a hierarchy of stars, common in large campuses. The choice of topology depends on cost, reliability and the need for growth. A small office picks star for simplicity; a bank's backbone may use mesh for redundancy. Beyond topology, networks are also classified by architecture: client-server networks have dedicated servers offering services such as file storage or authentication, while peer-to-peer networks let every machine act as both client and server, as in BitTorrent. The physical medium and the protocol together determine a network's actual performance and reliability.",
            ],
            bullets: [
              "LAN spans a building (high speed, low error); MAN spans a city; WAN spans a country or the world.",
              "Bus: shared cable, cheap but one break kills all; star: central hub, easy to manage, hub is single point of failure.",
              "Ring: each device to two neighbours, data flows one way; mesh: every device to every other, robust but costly.",
              "Tree topology is a hierarchy of stars, common in large campuses.",
              "Client-server vs peer-to-peer: dedicated servers versus every machine both client and server.",
            ],
            table: {
              caption: "Network types by geographical reach.",
              headers: ["Type", "Reach", "Speed", "Example"],
              rows: [
                ["LAN", "building, campus", "100 Mbps to 10 Gbps", "office Ethernet"],
                ["MAN", "city", "10 to 100 Mbps", "cable TV network"],
                ["WAN", "country, world", "varies", "the internet"],
                ["PAN", "a few metres", "low", "Bluetooth phone-to-headset"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a topology by cost and reliability",
              caption:
                "X-axis: cost of cabling; Y-axis: tolerance to a single break.",
              axes: { x: "cost (low to high)", y: "reliability" },
              quadrants: [
                { label: "Bus", note: "cheap, fragile" },
                { label: "Star", note: "moderate cost, hub failure" },
                { label: "Ring", note: "moderate, single break hurts" },
                { label: "Mesh", note: "expensive, very robust" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the topology, do not just describe it",
              body: "Topology questions reward a neat sketch of the layout (a circle for ring, a hub with spokes for star, a central line for bus). Pair each sketch with one strength and one weakness in a two-column table, and you have full marks inside three minutes.",
            },
            keyTerms: [
              { term: "LAN", definition: "A Local Area Network covering a small area such as a building or campus, with high speed and low error rates." },
              { term: "Network topology", definition: "The physical or logical layout of a network, including bus, star, ring, mesh and tree arrangements." },
              { term: "WAN", definition: "A Wide Area Network spanning a country or the world; the internet is the largest WAN." },
            ],
            examQuestions: [
              {
                q: "Classify computer networks by geographical reach. Explain any three network topologies with their advantages and disadvantages.",
                marks: 7,
                outline: [
                  "Classify networks as LAN, MAN, WAN and PAN with reach and example.",
                  "Describe bus topology: shared cable, cheap, one break disables all.",
                  "Describe star topology: central hub, easy to manage, hub is single point of failure.",
                  "Describe ring or mesh: ring data flows one way; mesh every device to every other, robust but costly.",
                  "Conclude with a one-line guide: small office picks star, redundancy-critical backbone picks mesh.",
                ],
              },
              {
                q: "What is the difference between LAN and WAN?",
                marks: 2,
              },
              {
                q: "List any three network topologies.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Transmission media and IP addressing basics",
            body: [
              "Transmission media carry the signals that represent data across a network. They divide into two families. Guided media confine the signal to a physical path: twisted pair cable (two insulated copper wires twisted to reduce interference, used in telephone and Ethernet), coaxial cable (a central conductor surrounded by shielding, used for cable TV and older Ethernet), and optical fibre (a glass core carrying light pulses, offering huge bandwidth and immunity to electromagnetic interference over tens of kilometres). Unguided media radiate signals through free space: radio waves for Wi-Fi and cellular, microwaves for line-of-sight links, infrared for short-range remote controls, and satellite for global coverage.",
              "Each medium is chosen by bandwidth, distance, cost and noise immunity. Twisted pair is cheap and easy to install but limited to about 100 metres per segment; coaxial offers higher bandwidth over longer runs; fibre is the choice for backbone links because it carries gigabits per second over kilometres without interference. Among unguided media, Wi-Fi gives convenient short-range access at the cost of security and interference; microwave links connect towers within line of sight; satellites bridge continents but add latency because the signal travels up to the satellite and back. The medium is invisible to the user but sets the ceiling on the network's performance.",
              "Every device on an IP network needs an address. IPv4 addresses are 32 bits long, written as four decimal octets separated by dots such as 192.168.1.10. Addresses are split into a network part and a host part by a subnet mask; the classful scheme classes addresses as A (large networks, mask 255.0.0.0), B (medium, 255.255.0.0), C (small, 255.255.255.0), D (multicast) and E (reserved). Private ranges such as 192.168.0.0/16 are not routed on the internet and are used inside homes and offices, with NAT translating them to a public address. IPv6, with 128 bits, was introduced because the IPv4 address space is exhausted; it is written as eight groups of hexadecimal digits.",
            ],
            bullets: [
              "Guided media: twisted pair, coaxial cable, optical fibre - signal confined to a path.",
              "Unguided media: radio (Wi-Fi, cellular), microwave, infrared, satellite - signal radiates through space.",
              "Fibre offers the highest bandwidth and longest reach; twisted pair is cheap and easy to install.",
              "IPv4 address is 32 bits, four octets; classes A to E split network and host parts.",
              "IPv6 is 128 bits, introduced because IPv4 addresses are exhausted; private ranges use NAT.",
            ],
            table: {
              caption: "IPv4 address classes at a glance.",
              headers: ["Class", "Leading bits", "Mask", "Range (first octet)"],
              rows: [
                ["A", "0", "255.0.0.0", "1 to 126"],
                ["B", "10", "255.255.0.0", "128 to 191"],
                ["C", "110", "255.255.255.0", "192 to 223"],
                ["D", "1110", "multicast", "224 to 239"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "How a packet travels from sender to receiver",
              caption:
                "Each stage moves the data through one layer of the transmission medium.",
              stages: [
                { label: "Sender application", note: "produces data" },
                { label: "Network interface", note: "wraps in a frame" },
                { label: "Transmission medium", note: "twisted pair, fibre or radio" },
                { label: "Router hops", note: "IP routing across networks" },
                { label: "Receiver application", note: "data delivered" },
              ],
            },
            callout: {
              type: "warning",
              title: "Class A starts at 1, not 0",
              body: "A common mistake is to write Class A as 0 to 126. The first octet 0 is reserved, so Class A actually runs from 1 to 126; 127 is reserved for loopback. Memorising 1-126, 128-191, 192-223, 224-239 saves a slip in every IP-addressing question.",
            },
            keyTerms: [
              { term: "Transmission media", definition: "The physical or wireless pathways that carry data signals across a network, divided into guided (cable, fibre) and unguided (radio, satellite)." },
              { term: "IPv4 address", definition: "A 32-bit network address written as four decimal octets, split into network and host parts by a subnet mask and organised into classes A to E." },
              { term: "Subnet mask", definition: "A 32-bit value that distinguishes the network part from the host part of an IPv4 address, such as 255.255.255.0 for a Class C network." },
            ],
            examQuestions: [
              {
                q: "Explain guided and unguided transmission media with examples. Describe the structure of an IPv4 address and list the address classes with their ranges.",
                marks: 7,
                outline: [
                  "Define guided media: twisted pair, coaxial, optical fibre with one trait each.",
                  "Define unguided media: radio, microwave, infrared, satellite with one use each.",
                  "Explain IPv4: 32 bits, four octets, network and host parts split by subnet mask.",
                  "List classes A (1-126), B (128-191), C (192-223), D (multicast) with masks.",
                  "Mention IPv6 (128 bits) and private ranges with NAT as the path to the public internet.",
                ],
              },
              {
                q: "Name any three guided transmission media.",
                marks: 2,
              },
              {
                q: "Write the subnet mask of a Class C network.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Internet services: WWW, email, DNS and browsers",
            body: [
              "The internet is a global network of networks using the TCP/IP protocol suite to connect billions of devices. Its most visible service is the World Wide Web, a system of interlinked documents called web pages, identified by Uniform Resource Locators (URLs) such as https://example.com/page.html, and transferred using the HyperText Transfer Protocol (HTTP or HTTPS for the encrypted version). Web pages are written in HTML, styled by CSS, and given interactivity by JavaScript; a web browser such as Chrome, Firefox or Edge fetches the page from a server and renders it for the user.",
              "Electronic mail is another core internet service. A mail client such as Outlook or Gmail composes a message and sends it via the Simple Mail Transfer Protocol (SMTP) to the sender's mail server, which routes it across the internet to the recipient's mail server. The recipient retrieves it using the Post Office Protocol version 3 (POP3) or the Internet Message Access Protocol (IMAP); IMAP keeps messages on the server so multiple devices stay in sync, while POP3 downloads and deletes. Each email address has the form user@domain, such as alice@example.com, where the domain is resolved by the Domain Name System.",
              "The Domain Name System (DNS) translates human-readable domain names such as www.rgpv.ac.in into the numeric IP addresses that routers actually use. It is a distributed, hierarchical database: root servers point to top-level domain servers (.in, .com), which point to authoritative servers for the second-level domain (rgpv.ac.in), which give the IP of www.rgpv.ac.in. Other internet services include FTP for file transfer, Telnet and SSH for remote login, and search engines such as Google that index billions of pages and answer keyword queries. Together these services make the internet the universal platform for communication, learning and commerce that every engineer uses daily.",
            ],
            bullets: [
              "Internet: global network of networks running TCP/IP; WWW is its most visible service.",
              "Web pages are HTML styled by CSS and scripted by JavaScript; HTTP/HTTPS transfers them; URLs identify them.",
              "Email uses SMTP to send, POP3 or IMAP to retrieve; addresses have the form user@domain.",
              "DNS translates domain names to IP addresses via a distributed hierarchy of root, TLD and authoritative servers.",
              "Other services: FTP (file transfer), SSH (remote login), search engines (indexed keyword lookup).",
            ],
            table: {
              caption: "Common internet services and their protocols.",
              headers: ["Service", "Protocol", "Port", "Use"],
              rows: [
                ["Web", "HTTP, HTTPS", "80, 443", "fetching web pages"],
                ["Email send", "SMTP", "25", "sending mail"],
                ["Email receive", "POP3, IMAP", "110, 143", "retrieving mail"],
                ["File transfer", "FTP, SFTP", "21, 22", "uploading and downloading files"],
                ["Name resolution", "DNS", "53", "domain name to IP address"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Resolving www.rgpv.ac.in through DNS",
              caption:
                "Each step asks a higher-level server until the IP address is found.",
              steps: [
                { label: "Browser asks resolver for www.rgpv.ac.in", note: "local DNS cache" },
                { label: "Resolver asks root server", note: "points to .in TLD" },
                { label: "TLD server points to ac.in authoritative", note: "second-level" },
                { label: "rgpv.ac.in authoritative gives IP", note: "the answer" },
                { label: "Browser fetches the page over HTTPS", note: "connection established" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the protocol-port pairs",
              body: "Five pairs earn easy marks in any internet-services question: HTTP 80, HTTPS 443, SMTP 25, POP3 110, FTP 21. Pair each protocol with one sentence on what it does and you have the short-answer part of the question done.",
            },
            keyTerms: [
              { term: "World Wide Web", definition: "An internet service of interlinked HTML documents identified by URLs and transferred using HTTP or HTTPS." },
              { term: "DNS", definition: "The Domain Name System, a distributed hierarchical database that translates domain names into IP addresses." },
              { term: "URL", definition: "A Uniform Resource Locator that identifies a web resource by its scheme, host and path, such as https://example.com/page.html." },
            ],
            examQuestions: [
              {
                q: "Explain the World Wide Web, electronic mail and the Domain Name System with their protocols. Describe the role of a web browser and list any three common internet services.",
                marks: 7,
                outline: [
                  "Define the internet as a global TCP/IP network and the WWW as interlinked HTML pages.",
                  "Describe HTTP/HTTPS, URLs and the role of a browser in fetching and rendering pages.",
                  "Explain email: SMTP to send, POP3 or IMAP to retrieve; address format user@domain.",
                  "Explain DNS: hierarchical resolution from root to TLD to authoritative server.",
                  "List three more services: FTP, SSH, search engines, with one use each.",
                ],
              },
              {
                q: "What is DNS used for?",
                marks: 2,
              },
              {
                q: "Name any three protocols used on the internet.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Cybersecurity basics: phishing, passwords and two-factor authentication",
            body: [
              "Cybersecurity is the practice of protecting computers, networks and data from unauthorised access, theft or damage. Common threats include phishing, in which an attacker sends a fraudulent email or message pretending to be a bank or a service to trick the victim into revealing credentials; malware such as viruses, worms and ransomware that damage or hold data hostage; weak passwords that can be guessed or cracked by brute force; and unsecured Wi-Fi networks that let attackers intercept traffic. The human user is the weakest link in most breaches - clicking a wrong link is all it takes.",
              "Strong passwords are the first line of defence. A strong password is at least twelve characters long, mixes uppercase and lowercase letters, digits and symbols, and is not a dictionary word or a personal detail such as a birth date. A password manager generates and stores a unique strong password for every site, so one breach does not expose every account. Two-factor authentication (2FA) adds a second proof beyond the password - a one-time code from an authenticator app or SMS, a fingerprint, or a hardware key - so that a stolen password alone cannot log the attacker in. 2FA should be enabled on every account that supports it.",
              "Beyond passwords, basic security hygiene means keeping the operating system and applications patched so known vulnerabilities are closed, running reputable antivirus software, using HTTPS rather than HTTP for sensitive transactions, avoiding public Wi-Fi for banking or using a VPN if unavoidable, and backing up important data regularly so ransomware cannot hold it permanently. Recognising phishing signs - urgent tone, mismatched sender address, links that do not match the brand, requests for passwords - prevents most attacks. In India the Information Technology Act 2000 (amended in 2008) criminalises unauthorised access and data theft, and the CERT-In national team coordinates incident response.",
            ],
            bullets: [
              "Cybersecurity protects computers, networks and data from unauthorised access, theft and damage.",
              "Phishing: fraudulent emails trick the victim into revealing passwords or card details.",
              "Strong passwords: 12+ characters, mixed case, digits, symbols, unique per site, stored in a manager.",
              "Two-factor authentication adds a second proof (authenticator code, biometric, hardware key).",
              "Hygiene: patch OS and apps, run antivirus, use HTTPS, avoid public Wi-Fi for banking, back up data.",
            ],
            table: {
              caption: "Common cyber threats and defences.",
              headers: ["Threat", "How it works", "Defence"],
              rows: [
                ["Phishing", "fake email asks for password", "check sender, enable 2FA"],
                ["Weak password", "guessed or brute-forced", "use a password manager"],
                ["Malware", "virus or ransomware from a download", "antivirus, patch OS"],
                ["Unsecured Wi-Fi", "attacker intercepts traffic", "use HTTPS or a VPN"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Responding to a suspicious email",
              caption:
                "From a suspicious message, decide which branch to take - speed matters.",
              start: "Email asks for password or urgent action",
              branches: [
                { label: "Verify sender domain and link target", outcome: "If mismatched - delete and report", good: true },
                { label: "Do not click any link", outcome: "Open the site by typing the URL directly", good: true },
                { label: "Reply with credentials", outcome: "Account compromised - phishing succeeds", good: false },
                { label: "Forward to IT or report phishing", outcome: "Helps protect other users", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "2FA via SMS is weaker than an app",
              body: "SMS-based 2FA can be intercepted by SIM-swap attacks. An authenticator app such as Google Authenticator or a hardware key is far safer. Mention this distinction in the exam - it shows you understand modern threats, not just textbook definitions.",
            },
            keyTerms: [
              { term: "Phishing", definition: "A cyber attack in which a fraudulent email or message impersonates a trusted entity to trick the victim into revealing passwords or financial details." },
              { term: "Two-factor authentication", definition: "A security mechanism requiring a second proof of identity beyond the password, such as an authenticator code, biometric scan or hardware key." },
              { term: "Strong password", definition: "A password at least twelve characters long mixing uppercase, lowercase, digits and symbols, unique per site and stored in a password manager." },
            ],
            examQuestions: [
              {
                q: "Explain phishing and weak passwords as cyber threats. Describe strong passwords and two-factor authentication, and list four practices of basic cyber hygiene.",
                marks: 7,
                outline: [
                  "Define cybersecurity and identify the human user as the weakest link.",
                  "Describe phishing: fraudulent email impersonating a bank; mismatched sender and urgent tone.",
                  "Explain weak passwords: short, dictionary, reused; defence is a strong unique password per site.",
                  "Define 2FA as a second proof - authenticator app, biometric, hardware key.",
                  "List four hygiene practices: patch OS, run antivirus, use HTTPS, back up data.",
                ],
              },
              {
                q: "What is two-factor authentication?",
                marks: 2,
              },
              {
                q: "List any three signs of a phishing email.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Office productivity tools and digital India applications",
            body: [
              "Office productivity tools are the application software that students and professionals use daily to create, analyse and present information. Microsoft Word is a word processor for documents such as letters, reports and resumes; it supports text formatting, headings, styles, tables, images, spelling and grammar checks, mail merge and export to PDF. Microsoft PowerPoint creates slide-based presentations with text, images, animations, transitions and speaker notes; it is the standard tool for academic and project presentations. Google Docs, Google Slides and LibreOffice Writer and Impress are popular free or collaborative alternatives.",
              "Microsoft Excel is a spreadsheet program that organises data into rows and columns of cells, each holding a number, text or formula. A formula begins with an equals sign and can use built-in functions: SUM(A1:A10) adds a range, AVERAGE(B1:B10) averages it, MAX and MIN find extremes, IF(condition, then, else) makes a decision, and COUNT counts numeric entries. Cell references may be relative (A1, which shifts when copied) or absolute ($A$1, which does not). Charts turn ranges into bar, line or pie visualisations. Excel is used for marksheets, budgets, lab data and any tabular calculation - mastering the basic functions is essential for every engineer.",
              "India's Digital India programme has produced a range of applications that every student should know. Aadhaar is the 12-digit unique identity issued by UIDAI, used as proof of identity across services. UPI (Unified Payments Interface) and apps such as BHIM, Google Pay and PhonePe enable instant bank-to-bank payments using just a mobile number or a virtual ID. DigiLocker stores government-issued documents such as marksheets, driving licences and vehicle registration certificates in the cloud, signed and verified. e-Hospital and the UMANG mobile app provide access to hundreds of central and state government services in one place. Together these tools make everyday transactions digital, transparent and faster.",
            ],
            bullets: [
              "MS Word: word processor for letters, reports and resumes with styles, tables and mail merge.",
              "MS PowerPoint: slide presentations with text, images, animations and speaker notes.",
              "MS Excel: spreadsheet with formulas SUM, AVERAGE, IF, MAX, MIN; relative and absolute cell references.",
              "Aadhaar: 12-digit unique identity; UPI and BHIM: instant bank payments via mobile.",
              "DigiLocker: cloud-verified government documents; UMANG: one app for hundreds of services.",
            ],
            table: {
              caption: "Common Excel functions and their uses.",
              headers: ["Function", "Syntax", "Purpose"],
              rows: [
                ["SUM", "=SUM(A1:A10)", "add a range of cells"],
                ["AVERAGE", "=AVERAGE(B1:B10)", "arithmetic mean of a range"],
                ["MAX", "=MAX(C1:C10)", "largest value in a range"],
                ["IF", "=IF(A1>=40, \"Pass\", \"Fail\")", "decide based on a condition"],
                ["COUNT", "=COUNT(D1:D10)", "count numeric cells"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Three office tools, three jobs",
              caption:
                "Word handles text, Excel handles numbers, PowerPoint handles slides - each is irreplaceable.",
              left: {
                heading: "Word and PowerPoint",
                items: [
                  "Word: letters, reports, resumes",
                  "PowerPoint: slides with animations",
                  "Text formatting and styles",
                  "Images, tables and charts",
                  "Export to PDF for sharing",
                ],
              },
              right: {
                heading: "Excel",
                items: [
                  "Cells arranged in rows and columns",
                  "Formulas with SUM, AVERAGE, IF",
                  "Relative and absolute references",
                  "Charts: bar, line, pie",
                  "Used for marksheets and budgets",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Master five Excel functions for any branch",
              body: "SUM, AVERAGE, MAX, MIN and IF cover almost every student need - marksheet totals, averages, highest and lowest, and pass-fail decisions. Practise them with relative and absolute references on a five-row sheet; the skill transfers to every later lab and project.",
            },
            keyTerms: [
              { term: "Spreadsheet", definition: "An application such as Microsoft Excel that organises data into rows and columns of cells, each holding a number, text or formula." },
              { term: "Excel formula", definition: "An expression beginning with an equals sign that uses functions such as SUM, AVERAGE or IF to compute a value from cell contents." },
              { term: "UPI", definition: "The Unified Payments Interface, an Indian real-time payment system enabling instant bank-to-bank transfers using a mobile number or virtual ID." },
            ],
            examQuestions: [
              {
                q: "Explain the use of Microsoft Word, Excel and PowerPoint. Write the syntax and purpose of any four Excel functions and describe three Digital India applications.",
                marks: 7,
                outline: [
                  "Describe Word: word processor for documents, with styles, tables, mail merge.",
                  "Describe PowerPoint: slide-based presentations with animations and speaker notes.",
                  "Describe Excel: cells in rows and columns, formulas beginning with =.",
                  "Give four Excel functions: SUM(A1:A10), AVERAGE, MAX, IF(condition, then, else).",
                  "Describe three Digital India applications: Aadhaar, UPI/BHIM, DigiLocker or UMANG.",
                ],
              },
              {
                q: "What is the purpose of the IF function in Excel?",
                marks: 2,
              },
              {
                q: "Name any three Digital India applications.",
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
      id: "weights",
      heading: "Exam weight map",
      weightedTopics: [
        { topic: "Number system conversions and complements", weight: "high", note: "Almost every paper has a 7-mark conversion or 2's complement question." },
        { topic: "Logic gates and universal gates", weight: "high", note: "Truth tables and NAND/NOR universality are recurring 7-mark favourites." },
        { topic: "OS functions and process scheduling", weight: "high", note: "Gantt chart computation is a frequent 7-mark question." },
        { topic: "Deadlock conditions and Banker's algorithm", weight: "high", note: "Coffman conditions appear in most sessions." },
        { topic: "C programs: factorial, largest of three, sum", weight: "high", note: "Write the program and trace for a small input." },
        { topic: "Algorithm and flowchart", weight: "medium", note: "Draw the chart - skipping it loses half the marks." },
        { topic: "Memory hierarchy and locality", weight: "medium", note: "Pyramid plus the locality principle." },
        { topic: "Network types and topologies", weight: "medium", note: "Sketch the topology with strengths and weaknesses." },
        { topic: "IP addressing and classes", weight: "medium", note: "Class A to E ranges and subnet masks." },
        { topic: "Office tools and Excel functions", weight: "medium", note: "SUM, AVERAGE, IF syntax plus Digital India apps." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Unit I - Computer Fundamentals", tasks: ["Read definitions, characteristics and the five generations; draw the generation table.", "Memorise the memory hierarchy pyramid with access times.", "Compare system vs application software with three examples each."] },
        { week: "Week 2", focus: "Unit II - Number Systems", tasks: ["Practise 20 decimal-binary-hex conversions until fluent.", "Master 2's complement by negating -5, -12, -20.", "Draw truth tables for all seven gates; build NOT and AND from NAND."] },
        { week: "Week 3", focus: "Unit II circuits and Unit III OS", tasks: ["Draw half and full adder truth tables and circuits.", "List the five OS functions with one example each.", "Sketch the five-state process life cycle and practise FCFS Gantt charts."] },
        { week: "Week 4", focus: "Unit III - Deadlocks and files", tasks: ["Memorise the four Coffman conditions and four handling strategies.", "Compare FAT, NTFS and ext4 in a table.", "Contrast Windows, Linux and Android; revise licensing types."] },
        { week: "Week 5", focus: "Unit IV - Programming", tasks: ["Write and hand-trace factorial, sum and largest-of-three C programs.", "Practise algorithm-to-flowchart for five problems.", "Revise data types, control structures and the three error kinds."] },
        { week: "Week 6", focus: "Unit V and full revision", tasks: ["Memorise LAN/MAN/WAN, topologies and IPv4 classes.", "List internet services with protocols and ports.", "Practise Excel functions and revise Digital India applications; take one full mock paper."] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Revise only the high-weight topics: conversions, gates, OS functions, scheduling, deadlocks, C programs.",
        "Redraw every diagram once on paper - generations, memory pyramid, gates truth table, process cycle, topologies.",
        "Memorise the five Excel functions SUM, AVERAGE, MAX, MIN, IF and three Digital India apps.",
        "Re-read your C program skeletons for factorial, sum and largest of three - syntax matters.",
        "Skim the four Coffman conditions and the four handling strategies in one table.",
        "Sleep seven hours; a tired brain slips arithmetic in the Gantt chart and conversion questions.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Attempt the 7-mark questions first - they carry the most marks and are usually straightforward.",
        "Draw the diagram before writing the prose; the chart often prompts the explanation.",
        "Back every definition with one example: 'gate - AND, outputs 1 only if all inputs are 1'.",
        "Show every step in arithmetic: conversion remainders, complement flips, Gantt blocks.",
        "Leave the last 10 minutes to check C syntax - missing semicolons and unbalanced braces lose easy marks.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Forgetting that 2's complement = 1's complement plus one - students often stop at the bit flip.",
        "Writing Class A as 0-126 instead of 1-126; octet 0 is reserved and 127 is loopback.",
        "Confusing proprietary (closed source) with freeware (free of charge but closed).",
        "Skipping the flowchart when both algorithm and flowchart are asked - half the marks gone.",
        "Using = instead of == in C conditions, causing an infinite loop or always-true branch.",
        "Saying 'ROM is faster than RAM' - the criterion is volatility, not speed.",
      ],
    },
  ],
};
