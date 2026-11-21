import type { AcademicSubject } from "./types";

export const ad405: AcademicSubject = {
  id: "ad-405",
  code: "AD-405",
  title: "Operating Systems",
  semester: "IV Semester",
  program: "RGPV · Artificial Intelligence & Data Science",
  tagline:
    "The complete visual guide to the machine underneath your code: process scheduling with Gantt charts, semaphores and Banker's algorithm, paging and page replacement, and the file and disk systems that keep it all on metal.",
  description:
    "Five units walk from what an operating system is - its structures, services and system calls - through process management and the classic FCFS/SJF/RR scheduling runs, into synchronization, semaphores and deadlocks, then memory: partitioning, paging, segmentation and virtual memory with fault-count worked examples, and finally files, allocation methods and disk scheduling. Every section pairs the mechanism with a real-numbers worked example you can reproduce in the exam hall.",
  accentColor: "#c084fc",
  emoji: "OS",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction and Operating System Structures",
      summary:
        "What an operating system actually is and does: resource management and user services, the generations from batch to time sharing, the six flavours of OS, the monolithic/layered/microkernel/modular structure debate, system calls across the user-kernel boundary, system programs and shells, and virtual machines plus the boot process.",
      chapter: {
        number: "01",
        title: "The Machine Underneath: Roles, Types and Structures",
        intro:
          "Unit I defines the operating system as both a resource manager and a service provider, traces how batch systems evolved into multiprogrammed and time-shared systems, surveys the OS families you must name in a 7-mark 'types' question, compares the four structural designs, and closes with the two mechanisms every programmer touches: system calls and the boot sequence.",
        inOneBreath:
          "OS = resource manager + service provider; generations ran batch -> multiprogramming -> time sharing; types are batch, multiprogramming, time-sharing, distributed, real-time and embedded; structures are monolithic, layered, microkernel, modular and hybrid; a system call is a trap across the user-kernel boundary handled by a dispatch table; VMs run a guest OS on a hypervisor for isolation; boot = POST -> bootloader -> kernel -> init.",
        sections: [
          {
            number: "1.1",
            title: "What is an Operating System",
            body: [
              "An operating system is the program that manages all the resources of a computer - CPU, memory, I/O devices, files - and provides an environment in which application programs run. It sits between the raw hardware and the user, playing two simultaneous roles. As a resource allocator it decides who gets the CPU, how much memory, and which device, always arbitrating among competing programs. As a control program it supervises execution to prevent errors and improper use, enforcing protection so that no user program can scribble over the kernel or another user's data.",
              "The core functions map directly onto the rest of this subject. Process management creates, schedules and terminates processes and provides mechanisms for synchronization and communication. Memory management tracks which bytes are in use, allocates and deallocates them, and implements the illusion of large address spaces. File management creates directories, maps files onto physical storage, and enforces access control. I/O and device management hides the wild differences between a keyboard and an SSD behind a uniform device-driver interface, while a security and protection subsystem authenticates users and polices every access.",
              "The modern OS is the third generation of an evolution story. First-generation systems (1945-1955) had no OS: programmers loaded cards and the machine ran one job to completion. Second-generation batch systems (1955-1965) collected jobs on tape and ran them back-to-back, raising utilization but leaving the CPU idle whenever a job waited for I/O. Multiprogramming fixed that by keeping several jobs in memory so that when one blocks for I/O the CPU switches to another; time sharing then extended multiprogramming to people, switching among users' terminals fast enough that each feels the machine is dedicated to them.",
              "Worked example: consider a time-shared system with 20 active users and a scheduling quantum of 100 ms per user. Even in the worst case a user waits 19 other turns, so the worst-case response is 19 x 100 ms = 1900 ms, about 2 seconds, while the average response is roughly (100 + 1900) / 2 = 1000 ms. This simple arithmetic explains why time-sharing felt magical in the 1960s and why the quantum size remains a tuning knob today. When a system claims to support 100 concurrent users, you can immediately ask: what is the quantum, and what response time does that imply?",
              "Where the OS ends and the hardware begins is a design decision, not a law of nature. Some machines (the IBM 360 line) provided microprogrammed hardware assistance for the OS; others push everything into software. The RGPV answer to 'define OS' should name both roles - resource management and user services - give the four function areas, and close with one example of each: the scheduler allocating the CPU, the file system naming a file, a device driver buffering I/O, and a password check protecting an account.",
            ],
            bullets: [
              "OS definition: a program that manages hardware resources and provides services to application programs.",
              "Two roles: resource allocator (scheduler, memory manager, I/O arbiter) and control program (protection, error handling).",
              "Four function areas: process management, memory management, file management, I/O/device management - plus protection and networking services.",
              "Generation 1: no OS; Generation 2: batch; Generation 3: multiprogramming and time sharing; Generation 4: GUI and networked PCs.",
              "Multiprogramming keeps the CPU busy during I/O waits; time sharing gives each of many users interactive response.",
              "Degree of multiprogramming = number of processes resident in memory; raising it raises CPU utilization until thrashing begins.",
            ],
            table: {
              caption: "Generations of operating systems.",
              headers: ["Generation", "Era", "Key idea", "Limitation"],
              rows: [
                ["First", "1945-1955", "No OS; single job on card reader", "CPU idle during setup"],
                ["Second", "1955-1965", "Batch systems, spooling", "No interaction; long turnaround"],
                ["Third", "1965-1985", "Multiprogramming, time sharing, SPOOLing", "Complex OS, protection needed"],
                ["Fourth", "1985-now", "GUI, networking, mobile, cloud", "Scale, security, energy"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The abstract view of a computer system",
              caption:
                "Index 0 is the top layer. Every layer trusts the layer below it; the OS is the sole gatekeeper between programs and hardware.",
              layers: [
                { label: "Users (people, other machines)", note: "Who the services are ultimately for" },
                { label: "Application programs (compiler, browser, DBMS)", note: "Solve user problems" },
                { label: "System programs, shells and libraries", note: "Convenient wrappers around system calls" },
                { label: "Operating system (kernel)", note: "Resource management and protection" },
                { label: "Hardware (CPU, memory, devices)", note: "The physical resources being managed" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two-role definition earns full marks",
              body: "Whenever asked 'What is an operating system?', write the two-role definition (resource manager + control program), then list the four function areas with one example each. Examiners award one mark per function area named with its example.",
            },
            keyTerms: [
              { term: "Operating system", definition: "The system software that manages hardware resources and provides an execution environment for applications." },
              { term: "Multiprogramming", definition: "Keeping several jobs in memory so the CPU switches to another job whenever one waits for I/O." },
              { term: "Time sharing", definition: "Multiprogramming extended to interactive users by rapidly switching the CPU among terminals." },
              { term: "Degree of multiprogramming", definition: "The number of processes currently resident in main memory." },
              { term: "SPOOLing", definition: "Simultaneous Peripheral Operations On-Line: buffering I/O of slow devices (printers, card readers) on disk." },
            ],
            examQuestions: [
              {
                q: "Define an operating system and explain its major functions with one example of each.",
                marks: 7,
                outline: [
                  "Two-role definition: resource allocator and control program",
                  "Process management: creation, scheduling, synchronization (example: the scheduler)",
                  "Memory management: allocation, protection, virtual memory (example: page table)",
                  "File management: directories, access control (example: open/read/close)",
                  "I/O and device management: drivers, buffering (example: printer driver)",
                  "Protection and security: authentication, access rights",
                  "Close with the user-kernel distinction",
                ],
              },
              {
                q: "What is multiprogramming and how does it differ from time sharing?",
                marks: 2,
              },
              {
                q: "Explain SPOOLing with an example of a printer.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Types of Operating Systems",
            body: [
              "Batch operating systems group similar jobs together and run them without user interaction. Jobs are spooled onto disk, sorted, and executed back-to-back so the operator never intervenes. Worked example: three jobs with CPU times 10, 4 and 6 minutes and I/O waits of 2 minutes each - a pure batch system finishes in 22 minutes of CPU time plus I/O; the same jobs on a multiprogrammed system overlap I/O waits and often finish in under 20 minutes. The strengths are high throughput and no idle operator time; the weaknesses are zero interaction, difficult debugging, and long turnaround for a small job queued behind a big one.",
              "Multiprogramming and time-sharing systems are the general-purpose mainstream. Multiprogramming maximizes CPU utilization by overlapping computation of one job with I/O of another; time sharing adds rapid CPU switching among interactive terminals and requires protection (so users cannot read each other's memory), virtual memory (so programs can exceed physical RAM), and a responsive scheduler. Distributed operating systems knit several networked machines into one logical system, sharing a common file system and process migration, but depend on the network and need careful message-passing protocols.",
              "Real-time operating systems (RTOS) guarantee response within a deadline. In hard real-time systems (airbag controller, pacemaker, missile guidance) a missed deadline is a failure; in soft real-time systems (video streaming, online gaming) a late result merely degrades quality. Worked example: an anti-lock brake controller samples wheel speed every 5 ms and must compute a brake decision within 2 ms; an RTOS schedules this task with a fixed priority above everything else, and a general-purpose OS with 100 ms scheduling jitter would be unacceptable. Embedded and mobile OSes (Android, iOS, VxWorks, FreeRTOS) are specialized relatives tuned for limited memory, power and touch interaction.",
              "For a 7-mark answer, present the six types in a table - batch, multiprogramming, time-sharing, distributed, real-time (hard/soft), embedded/mobile - giving for each one defining property, one advantage, one limitation and one real system example. Then close with the selection logic: a payroll run suits batch; a bank counter suits time-sharing; a factory PLC needs hard real-time; a shared cluster needs a distributed OS. Showing that you can match workload to OS type is what distinguishes a 7-mark answer from a list.",
            ],
            bullets: [
              "Batch: no interaction, jobs spooled and run back-to-back; high throughput, poor debugging.",
              "Multiprogramming: several jobs in memory; CPU switches during I/O waits to raise utilization.",
              "Time sharing: rapid switching among terminals; needs protection, virtual memory, responsive scheduling.",
              "Distributed: many networked machines appear as one system; communication over the network, shared files.",
              "Real-time: deadline guarantees - hard (miss = failure) vs soft (miss = degraded quality).",
              "Embedded/mobile: constrained memory and power; examples FreeRTOS, Android, iOS.",
            ],
            table: {
              caption: "Comparison of operating system types.",
              headers: ["Type", "Defining property", "Strength", "Weakness", "Example"],
              rows: [
                ["Batch", "No interaction; queued jobs", "Throughput", "No debugging, high latency", "IBM mainframe batch"],
                ["Multiprogramming", "Many jobs resident, CPU overlaps I/O", "CPU utilization", "Needs memory protection", "Early UNIX servers"],
                ["Time sharing", "Interactive terminals, fast switching", "Response time", "Context-switch overhead", "Linux, Windows"],
                ["Distributed", "Networked machines as one OS", "Resource sharing", "Network dependence", "Amoeba, clusters"],
                ["Real-time", "Deadline guarantees", "Predictability", "Limited generality", "VxWorks, QNX"],
                ["Embedded/mobile", "Constrained devices", "Efficiency", "Limited flexibility", "FreeRTOS, Android"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing an OS type for a workload",
              caption:
                "The examiner's favourite follow-up: given a workload, which OS type fits and why? Each branch names the deciding property.",
              start: "A new workload arrives",
              branches: [
                { label: "No interaction, throughput-first", outcome: "Batch OS: spool, sort, run back-to-back", good: true },
                { label: "Interactive users at terminals", outcome: "Time-sharing OS: quantum scheduling + protection", good: true },
                { label: "Hard deadline per response", outcome: "Real-time OS: fixed-priority, deterministic kernel", good: true },
                { label: "Unknown / mixed desktop workload", outcome: "General-purpose time-sharing OS is the default", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Hard vs soft is about the consequence, not the speed",
              body: "Students often write 'hard real-time is faster'. Wrong. Hard and soft real-time differ in what a missed deadline means: failure versus degradation. Speed is a separate dimension.",
            },
            keyTerms: [
              { term: "Batch system", definition: "An OS that executes queued jobs without user interaction." },
              { term: "Hard real-time", definition: "A system in which missing a deadline constitutes total failure." },
              { term: "Soft real-time", definition: "A system in which a late response degrades quality but does not fail." },
              { term: "Distributed OS", definition: "An OS that manages several networked machines as a single system." },
              { term: "Embedded OS", definition: "A specialized OS for a dedicated device with constrained resources." },
            ],
            examQuestions: [
              {
                q: "Explain the various types of operating systems with their advantages and limitations.",
                marks: 7,
                outline: [
                  "Batch: definition, spooling, advantage throughput, limitation no interaction",
                  "Multiprogramming: overlap I/O with compute, needs memory protection",
                  "Time sharing: quantum switching, response time as the metric",
                  "Distributed: networked machines, one namespace, message passing",
                  "Real-time: hard vs soft, deadline as the defining property",
                  "Embedded/mobile: constrained resources, examples",
                  "Close with a one-line workload-to-type mapping",
                ],
              },
              {
                q: "Differentiate between hard and soft real-time systems.",
                marks: 2,
              },
              {
                q: "Why does a time-sharing system need memory protection? Explain briefly.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Operating System Structures",
            body: [
              "A monolithic structure puts every OS service - file system, device drivers, scheduler, memory manager - into one big kernel running in kernel mode. MS-DOS and the original UNIX are monolithic. The advantage is performance: every service is a direct function call, no crossing of boundaries. The disadvantage is reliability and maintainability: one buggy driver can corrupt the entire kernel, and the code base becomes a tangle where changing the file system may break the scheduler.",
              "The layered structure (THE system, MULTICS) organizes the OS as a strict hierarchy: hardware at layer 0, the scheduler at layer 1, memory management at layer 2, and so on up to the user interface. Each layer uses only services of lower layers, so errors can be debugged layer by layer and interfaces are clean. The cost is performance - every service request traverses the layer stack - and the difficulty of deciding layer boundaries, because I/O, memory and CPU operations interleave in real systems.",
              "The microkernel structure shrinks the kernel to the minimum: IPC, basic scheduling, and low-level memory management. File systems, device drivers and network protocols run as user-space servers communicating with clients by message passing. MINIX and QNX are microkernels. Worked example: in a monolithic kernel, read(fd, buf, n) is one trap and direct function calls - roughly microseconds of overhead; in a microkernel, the same call becomes: user -> file-server message -> file server calls block driver by message -> driver -> disk interrupt -> reply messages back - several extra context switches per operation, historically 2-5x slower IPC. The benefit is robustness: a crashing disk driver merely restarts as a new process and never brings down the kernel.",
              "Modern systems are hybrids. Linux is technically monolithic but modular: loadable kernel modules (lsmod, insmod) let drivers and file systems plug into a monolithic core at runtime without rebuilding the kernel. Windows NT uses a layered, modular executive inside a largely monolithic kernel. The exam answer: name all four structures, give the message-passing overhead of microkernels with the read() trace above as your worked example, and state that production systems choose modularity inside a monolithic kernel as the practical compromise - most of the speed, most of the robustness.",
            ],
            bullets: [
              "Monolithic: all services in one kernel; fastest calls, worst fault isolation (MS-DOS, classic UNIX).",
              "Layered: strict hierarchy, each layer only uses lower layers; debuggable but slow, boundaries hard to choose (THE, MULTICS).",
              "Microkernel: minimal kernel (IPC, scheduling, basic memory); drivers as user servers; robust but message-passing overhead (MINIX, QNX).",
              "Modular: loadable kernel modules in a monolithic core; runtime pluggability (Linux insmod).",
              "Hybrid is the norm: Windows NT layered+modular, macOS XNU = Mach microkernel + BSD monolithic parts.",
              "Evaluation axes: performance, fault isolation, extensibility, development difficulty.",
            ],
            table: {
              caption: "OS structures compared.",
              headers: ["Structure", "Kernel contains", "Communication", "Strength", "Weakness"],
              rows: [
                ["Monolithic", "Everything", "Function calls", "Speed", "One bug kills the kernel"],
                ["Layered", "Hierarchical subsystems", "Downward calls only", "Debuggability", "Overhead, layering is hard"],
                ["Microkernel", "IPC, scheduling, basic VM", "Message passing", "Isolation, extensibility", "IPC cost, many context switches"],
                ["Modular", "Core + loadable modules", "Module interfaces", "Runtime extensibility", "Module bugs still crash kernel"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Monolithic kernel vs microkernel",
              caption:
                "Where does the file system and the disk driver live? The answer determines both performance and what a driver crash costs you.",
              left: {
                heading: "Monolithic (Linux, classic UNIX)",
                items: [
                  "File system, drivers, network stack all in kernel space",
                  "Service request = direct function call",
                  "One trap into kernel per system call",
                  "A faulty driver can corrupt the whole kernel",
                  "Fastest path, hardest to isolate faults",
                ],
              },
              right: {
                heading: "Microkernel (MINIX, QNX)",
                items: [
                  "Kernel keeps only IPC, scheduling, basic memory",
                  "Drivers and file servers run in user space",
                  "Each request crosses several message boundaries",
                  "Driver crash restarts as a process; kernel survives",
                  "Robust, but IPC adds measurable latency",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Trace one call across both structures",
              body: "The highest-scoring way to compare structures is to trace read() in each: monolithic = one trap, then calls; microkernel = trap, message to file server, message to driver, interrupt, replies. Writing the two traces side by side shows understanding, not memorization.",
            },
            keyTerms: [
              { term: "Monolithic kernel", definition: "An OS design in which all services run inside one kernel address space." },
              { term: "Layered OS", definition: "An OS organized into hierarchical layers, each using only lower layers." },
              { term: "Microkernel", definition: "A minimal kernel providing only IPC, scheduling and basic memory management, with the rest in user space." },
              { term: "Loadable kernel module", definition: "A kernel component that can be inserted or removed at runtime (Linux)." },
              { term: "IPC", definition: "Interprocess communication; the message-passing backbone of microkernel designs." },
            ],
            examQuestions: [
              {
                q: "Compare monolithic, layered and microkernel operating system structures with advantages and disadvantages of each.",
                marks: 7,
                outline: [
                  "Monolithic: definition, example, speed advantage, fault-isolation weakness",
                  "Layered: definition (THE/MULTICS), debuggability, overhead problem",
                  "Microkernel: minimal kernel, user-space servers, robustness",
                  "Message-passing cost: trace read() across the boundaries",
                  "Modular approach as the practical hybrid (Linux modules)",
                  "Comparison table as the summary",
                ],
              },
              {
                q: "What runs inside a microkernel and what runs outside it?",
                marks: 2,
              },
              {
                q: "Explain loadable kernel modules and how Linux uses them.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "System Calls",
            body: [
              "A system call is the programmed interface through which a user process requests a service from the operating system kernel. User programs cannot execute privileged instructions (I/O, interrupt control, page-table changes), so they trap: the wrapper library places the call number and arguments in registers, executes a trap instruction that switches the CPU to kernel mode, the kernel dispatches through a system-call table to the handler, and on return switches back to user mode with the result. In Linux this wrapper layer is glibc; 'man 2 read' documents the calls.",
              "System calls fall into six standard categories. Process control: fork(), exec(), wait(), exit(). File management: open(), read(), write(), close(), lseek(). Device management: ioctl(), read(), write() on device files. Information maintenance: getpid(), alarm(), sleep(). Communications: pipe(), socket(), send(), recv(). Protection: chmod(), chown(), umask(). Knowing one example per category is exam currency; knowing how the category maps to a table entry in the dispatcher shows depth.",
              "Worked example: the fork/exec pattern. When a shell runs 'ls', it calls fork(), which duplicates the calling process - the call returns 0 in the child and the child's PID in the parent, and -1 on error. The child then calls exec(\"/bin/ls\"), which replaces its address space with the new program; the parent calls wait() to block until the child exits, collecting its exit status. A C snippet: pid_t pid = fork(); if (pid == 0) { exec(\"/bin/ls\", \"ls\", NULL); } else { wait(NULL); }. If exec succeeds it never returns; if fork fails there is no child and the parent sees -1.",
              "The cost of a system call is nontrivial: mode switch, save registers, dispatch, handler, restore - typically 1-5 microseconds on modern hardware, orders of magnitude above a function call. That is why batch I/O matters: reading one byte per read() call means one trap per byte, while a buffered read of 4 KB amortizes the trap over thousands of bytes. This is also why libc stdio buffers exist, and why a naive loop of fputc() can be 100x slower than fwrite() of the same data.",
            ],
            bullets: [
              "System call = trap from user mode to kernel mode with a call number and arguments.",
              "Wrapper library (glibc) hides the trap; programmers call read() not the raw instruction.",
              "Six categories: process control, file, device, information, communication, protection.",
              "fork() returns 0 in child, child PID in parent, -1 on error; exec() replaces the program; wait() collects status.",
              "Typical cost 1-5 us per call; buffering amortizes trap overhead.",
              "Passing parameters: registers, memory block addressed by a register, or push/pop on the stack.",
            ],
            table: {
              caption: "System call categories and representative calls.",
              headers: ["Category", "Purpose", "Linux examples"],
              rows: [
                ["Process control", "Create, terminate, wait", "fork(), exec(), wait(), exit()"],
                ["File management", "Create, read, write files", "open(), read(), write(), close()"],
                ["Device management", "Request and configure devices", "ioctl(), open() on /dev"],
                ["Information maintenance", "Query time, IDs, set alarms", "getpid(), time(), alarm()"],
                ["Communications", "Send data between processes/machines", "pipe(), socket(), send(), recv()"],
                ["Protection", "Control access rights", "chmod(), chown(), umask()"],
              ],
            },
            codeExample: {
              language: "c",
              caption: "fork, exec and wait: creating a child process that runs /bin/ls",
              code:
                "#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n\nint main(void) {\n    pid_t pid = fork();\n    if (pid < 0) {\n        /* fork failed: no child was created */\n        return 1;\n    } else if (pid == 0) {\n        /* child: replace image with ls */\n        execl(\"/bin/ls\", \"ls\", \"-l\", (char *)0);\n        return 2;  /* exec never returns on success */\n    } else {\n        /* parent: pid holds the child's PID */\n        wait(NULL);          /* collect exit status */\n        return 0;\n    }\n}",
            },
            diagram: {
              kind: "flow",
              title: "Anatomy of a system call",
              caption:
                "From the library wrapper to the handler and back: each arrow crosses the user-kernel boundary exactly once in each direction.",
              steps: [
                { label: "User program calls read(fd, buf, n)", note: "Wrapper in libc prepares call number and arguments" },
                { label: "Trap instruction executes", note: "CPU switches to kernel mode, saves user registers" },
                { label: "Dispatch via system-call table", note: "Call number indexes the handler address" },
                { label: "Kernel handler runs", note: "Validates arguments, performs the service" },
                { label: "Return to user mode", note: "Status in a register; resumes after the trap" },
              ],
            },
            callout: {
              type: "warning",
              title: "exec never returns on success",
              body: "A common slip is writing code after exec() and expecting it to run. On success exec() replaces the entire program image, so any statement after it executes only if exec failed. Treat the line after exec as the error path.",
            },
            keyTerms: [
              { term: "System call", definition: "The interface by which a user process requests a kernel service via a trap." },
              { term: "Trap / mode switch", definition: "Hardware transition from user mode to kernel mode on a system call or interrupt." },
              { term: "fork()", definition: "UNIX call that duplicates the calling process; returns 0 in the child, child PID in the parent." },
              { term: "exec()", definition: "Call that replaces the current process image with a new program." },
              { term: "System-call table", definition: "Kernel array indexed by call number, holding handler addresses." },
            ],
            examQuestions: [
              {
                q: "What is a system call? Explain its categories with examples and describe how parameters are passed to the kernel.",
                marks: 7,
                outline: [
                  "Definition: trap across user-kernel boundary",
                  "Mechanism: wrapper, trap, mode switch, dispatch table, return",
                  "Process control calls with fork/exec/wait example",
                  "File and device calls (open/read/write/ioctl)",
                  "Information, communication and protection calls",
                  "Parameter passing: registers vs block-in-memory vs stack",
                  "Cost note: 1-5 us per trap, buffering amortizes",
                ],
              },
              {
                q: "List the values returned by fork() and what each means.",
                marks: 2,
              },
              {
                q: "Differentiate between a system call and a normal function call.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Operating System Services",
            body: [
              "Beyond resource management, an operating system exposes a catalogue of services that make programming practical. Program execution loads a program into memory and runs it, possibly creating a process; I/O operations give user programs access to files and devices without knowing controller registers; file-system manipulation creates, reads, writes, searches and deletes files and directories, and manages permissions. Communication services let processes exchange data on the same machine (pipes, shared memory) or across machines (sockets); error detection watches every layer - CPU and memory hardware errors, device failures, application faults - and reports or reacts.",
              "Resource allocation and accounting are services aimed at fairness and billing. In a multiuser system the OS allocates CPU time, memory, files and I/O among users and logs usage - how much CPU time, how many pages, how many print jobs - which historically justified charging accounts and today powers cloud billing and quotas. Protection and security ensure that all access to resources is controlled: authentication (who are you), authorization (may you do this), and auditing (what did you do). The distinction matters: protection is internal mechanism (access rights, memory protection), security is defense against external attack (passwords, firewalls).",
              "The user interface itself is a service: command-line shells and graphical UIs are not part of the kernel but are the services users actually see. Worked example of services cooperating: when a user runs 'sort grades.txt', the shell (user interface) calls fork()/exec() (process execution), the program calls open()/read() on the file (file-system service), the file system calls the disk driver (I/O service), every access is checked against permissions (protection), and errors such as 'file not found' are surfaced by error-detection service. One simple command exercises essentially the whole service catalogue.",
              "A favourite exam question asks the difference between services and mechanisms, or between services and system calls. The clean mapping: services are the what (execute programs, do I/O, protect resources), system calls are the how - the API through which user programs request those services, and internal kernel mechanisms (schedulers, allocators) implement them. For a 7-mark answer list eight services - execution, I/O, file system, communication, error detection, resource allocation, accounting, protection/security - with one concrete example each.",
            ],
            bullets: [
              "Program execution and I/O: load and run programs; uniform access to devices.",
              "File-system manipulation: create/read/write/search/delete files and directories, permissions.",
              "Communication: pipes and shared memory locally; sockets across machines.",
              "Error detection: hardware, device and application errors monitored and reported.",
              "Resource allocation and accounting: fair sharing plus usage logging (quotas, billing).",
              "Protection vs security: internal access control vs defense against external attack.",
              "UI (shell/GUI) is a service layered above the kernel, not the kernel itself.",
            ],
            table: {
              caption: "OS services and the calls that realize them.",
              headers: ["Service", "What it provides", "Example call / component"],
              rows: [
                ["Program execution", "Load and run binaries", "exec(), loader"],
                ["I/O operations", "Read/write files and devices", "read(), write(), drivers"],
                ["File system", "Name, organize, protect files", "open(), mkdir(), chmod()"],
                ["Communication", "Inter-process and network data exchange", "pipe(), socket()"],
                ["Error detection", "Catch and report faults", "signals, errno"],
                ["Accounting", "Track resource usage per user", "usage logs, quotas"],
                ["Protection/security", "Control access, authenticate", "chmod(), login"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "One command exercising every OS service",
              caption:
                "Running 'sort grades.txt' travels the full service catalogue from shell to disk and back - a memorable trace for the exam.",
              stages: [
                { label: "Shell parses the command", note: "User-interface service" },
                { label: "fork() + exec('sort')", note: "Program-execution service" },
                { label: "open('grades.txt') + read()", note: "File-system and protection services" },
                { label: "Disk driver fetches blocks", note: "I/O and device service" },
                { label: "Results written; errors surfaced", note: "Error detection; wait() reaps the child" },
              ],
            },
            callout: {
              type: "tip",
              title: "Services vs mechanisms vs calls",
              body: "Keep three words straight: services are WHAT the OS offers (execute, I/O, protect), mechanisms are HOW inside the kernel (scheduler, page tables), and system calls are the API seam between user programs and both. Questions asking for 'any three' almost always want services with examples.",
            },
            keyTerms: [
              { term: "OS service", definition: "A capability the OS exposes to users or programs, e.g. file access or I/O." },
              { term: "Accounting", definition: "Recording per-user resource consumption for quotas or billing." },
              { term: "Protection", definition: "Mechanisms controlling access of processes to system resources." },
              { term: "Security", definition: "Defense of the system against external and internal attacks." },
              { term: "Command interpreter", definition: "The shell: reads user commands and executes them via system calls." },
            ],
            examQuestions: [
              {
                q: "List and explain the services provided by an operating system, distinguishing services from system calls.",
                marks: 7,
                outline: [
                  "Definition of a service; services vs calls vs mechanisms",
                  "Program execution with fork/exec example",
                  "I/O operations and uniform device interface",
                  "File-system manipulation with permissions",
                  "Communication: pipes and sockets",
                  "Error detection, resource allocation and accounting",
                  "Protection and security distinction",
                ],
              },
              {
                q: "Differentiate between protection and security.",
                marks: 2,
              },
              {
                q: "Explain how a shell uses OS services to execute a single command.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "System Programs, Shells and Command Interpreters",
            body: [
              "System programs are the utility layer between the kernel and applications: they are not part of the kernel, yet no operating system ships without them. Categories include file management (mv, cp, rm, mkdir), status information (ps, top, df, who), file modification (editors such as vi and nano), programming-language support (compilers, assemblers, linkers, debuggers), program loading and execution (loaders, dynamic linkers), and communications (ssh, mail, ftp). The kernel provides the mechanism; these programs package it into convenient tools.",
              "The command interpreter - the shell - is the special system program whose only job is to read a command line and execute it. Two designs exist. In one, the shell contains the code for most commands built in (early MS-DOS COMMAND.COM); in the other, the shell simply understands the command as a file name, searches the PATH for an executable, and runs it with fork/exec (UNIX bash, where 'rm' is just /bin/rm). The second design is more powerful: adding a new command means adding a file, not modifying the shell.",
              "Worked example: a pipeline 'cat report.txt | grep Error | wc -l' shows the shell at its most powerful. The shell creates three children via fork(), connects them with pipe() file descriptors so stdout of cat becomes stdin of grep, and stdout of grep becomes stdin of wc, then waits for all three. Three processes run concurrently sharing two kernel buffers; the shell itself never touches the data. Explaining this trace - fork, pipe, dup2, exec, wait - is a complete 7-mark answer on command interpreters.",
              "Other system programs fill in the picture. The loader maps an executable into memory, resolving dynamic libraries; the dynamic linker (ld.so) fixes up shared-library symbols at start time, which is why 100 programs can share one copy of libc. Log-in and authentication programs verify credentials and start the user's shell. For the exam: define system programs, list five categories with examples, explain the shell's search-and-execute design, and include the pipeline trace as your worked example.",
            ],
            bullets: [
              "System programs = utilities above the kernel: file, status, editing, language-support, loading, communication tools.",
              "Shell designs: built-in commands (MS-DOS style) vs PATH search + fork/exec (UNIX style).",
              "Pipelines connect processes with pipe()/dup2(); data flows through kernel buffers.",
              "Loader and dynamic linker map binaries and resolve shared libraries (ld.so, libc sharing).",
              "Adding a command in UNIX = adding an executable file; no shell modification needed.",
              "Log-in/authentication programs verify users and launch their shell.",
            ],
            table: {
              caption: "Categories of system programs with examples.",
              headers: ["Category", "Examples", "Role"],
              rows: [
                ["File management", "cp, mv, rm, mkdir", "Create, move, delete files and directories"],
                ["Status information", "ps, top, df, date, who", "Report system and process state"],
                ["File modification", "vi, nano, sed", "Create and edit file contents"],
                ["Language support", "gcc, as, ld, gdb", "Compile, link, debug programs"],
                ["Loading / execution", "exec, ld.so, loader", "Map programs into memory"],
                ["Communications", "ssh, mail, ftp", "Move data between users and machines"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Where system programs sit",
              caption:
                "Index 0 is the top tier. Each tier builds on the one below; only the bottom two run in kernel space.",
              tiers: [
                { label: "Application programs", note: "User code: compilers of data, browsers of pages" },
                { label: "Shells and command interpreters", note: "Parse commands, fork/exec children" },
                { label: "System programs and utilities", note: "cp, ps, gcc, loaders, linkers" },
                { label: "Operating system kernel", note: "System calls, scheduling, files, memory" },
                { label: "Hardware", note: "CPU, memory, disks, devices" },
              ],
            },
            callout: {
              type: "exam",
              title: "The pipeline trace is the 7-mark core",
              body: "'cat f | grep E | wc -l' via fork + pipe + dup2 + exec + wait demonstrates the shell, system calls, and concurrency in one example. Memorize this five-word trace: fork, pipe, dup2, exec, wait.",
            },
            keyTerms: [
              { term: "System program", definition: "A utility program above the kernel that packages OS services for users." },
              { term: "Shell", definition: "The command interpreter that reads commands and executes programs on the user's behalf." },
              { term: "PATH", definition: "The environment variable listing directories searched for executables." },
              { term: "Dynamic linker", definition: "The program (ld.so) that resolves shared-library symbols at process start." },
              { term: "Pipeline", definition: "A chain of processes connected by pipes so output of one is input of the next." },
            ],
            examQuestions: [
              {
                q: "What are system programs? Explain their categories and the role of the command interpreter, tracing a pipeline example.",
                marks: 7,
                outline: [
                  "Definition: utilities above the kernel, not part of it",
                  "Five categories with examples (file, status, edit, language, loading)",
                  "Shell design: built-in vs PATH-search-and-exec",
                  "fork/pipe/dup2/exec/wait trace for 'cat f | grep E | wc -l'",
                  "Loader and dynamic linker roles",
                  "Why adding a UNIX command needs no shell change",
                ],
              },
              {
                q: "How does the shell find and execute the command 'ls'?",
                marks: 2,
              },
              {
                q: "Explain the difference between static and dynamic linking.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.7",
            title: "Virtual Machines and the Boot Process",
            body: [
              "A virtual machine is a software illusion of a complete computer running on another computer: the guest OS believes it owns CPU, memory and disks, while a hypervisor (virtual machine monitor) mediates everything. Type 1 (bare-metal) hypervisors such as VMware ESXi, Xen and Hyper-V run directly on hardware and are what data centres use; Type 2 (hosted) hypervisors such as VirtualBox and VMware Workstation run as applications on a host OS. Implementing the illusion uses either trap-and-emulate (privileged instructions trap to the hypervisor, which emulates them) or hardware assistance (Intel VT-x, AMD-V add a CPU mode for guests).",
              "The benefits explain why every cloud runs on VMs: isolation (a guest crash or malware infection cannot cross the hypervisor boundary), multiplexing (one 64-core server hosts dozens of tenant VMs), snapshots and live migration (freeze a guest's memory image and resume it elsewhere), and development convenience (test on a clone, discard it). Worked example: an 8 GB host can host four VMs of 2 GB each - the hypervisor overcommits memory using the same paging mechanics Unit IV studies; a guest's 'disk' is just a file on the host, so cp of that file is a perfect backup. Language-level VMs (the Java Virtual Machine) offer a different illusion: not a machine OS but a portable instruction set with garbage collection.",
              "The boot (bootstrap) process is how the OS gets itself loaded when the machine starts with nothing in RAM. On power-on, the CPU begins executing firmware (BIOS/UEFI) in ROM, which runs POST (power-on self-test), then loads the first block of the boot disk. In BIOS/MBR systems that first 512-byte sector is the boot block containing the bootstrap loader, which locates and loads a larger second-stage loader (GRUB); GRUB finally loads the kernel image (vmlinuz) into memory and jumps to it. UEFI modernizes this with signed executables and GPT disks.",
              "The kernel then initializes: sets up interrupt vectors and page tables, starts the scheduler, mounts the root file system, and spawns the first user process - init (PID 1) in traditional UNIX, systemd in modern Linux - which starts daemons and offers the log-in prompt. The name 'bootstrap' is the joke that is also the explanation: the OS must pull itself up by its own bootstraps, using a tiny loader to load a bigger loader that loads the real kernel. For the exam: sequence = POST -> boot block -> second-stage loader -> kernel -> init -> log-in, plus type 1 vs type 2 hypervisors with two examples each.",
            ],
            bullets: [
              "VM = guest OS + virtual resources on a hypervisor; illusion of a dedicated machine.",
              "Type 1 hypervisor on bare metal (ESXi, Xen, Hyper-V); Type 2 hosted on an OS (VirtualBox, Workstation).",
              "Implementation: trap-and-emulate, or hardware assist (Intel VT-x / AMD-V guest mode).",
              "Benefits: isolation, multiplexing, snapshots, live migration; guest disk = a host file.",
              "JVM is a language VM: portable bytecode + runtime, not an OS illusion.",
              "Boot sequence: POST -> boot block (512 B MBR) -> GRUB -> kernel (vmlinuz) -> init/systemd (PID 1) -> log-in.",
              "UEFI replaces BIOS with signed loaders and GPT partitioning.",
            ],
            table: {
              caption: "Type 1 vs Type 2 hypervisors.",
              headers: ["Property", "Type 1 (bare-metal)", "Type 2 (hosted)"],
              rows: [
                ["Runs on", "Raw hardware", "Inside a host OS"],
                ["Examples", "ESXi, Xen, Hyper-V", "VirtualBox, VMware Workstation"],
                ["Overhead", "Lowest; direct hardware control", "Higher; host OS intervenes"],
                ["Use case", "Data centres, cloud tenancy", "Desktops, testing, education"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The boot cycle",
              caption:
                "Power-on to log-in prompt: each step hands control to the next, larger, stage - the bootstrap in action.",
              steps: [
                { label: "Power-on: firmware runs POST", note: "BIOS/UEFI checks hardware, picks boot device" },
                { label: "Boot block loaded", note: "First 512-byte sector (MBR) contains the bootstrap" },
                { label: "Second-stage loader (GRUB)", note: "Locates kernel image, may offer menu" },
                { label: "Kernel loads and initializes", note: "Interrupts, page tables, scheduler, root FS" },
                { label: "init/systemd starts (PID 1)", note: "Daemons up; log-in prompt shown" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the boot sequence as numbered arrows",
              body: "The safest presentation: numbered list power-on -> POST -> boot block -> GRUB -> kernel -> init -> login, with one line on what each stage loads. Mixing up the order of boot block and GRUB is the classic lost mark.",
            },
            keyTerms: [
              { term: "Hypervisor (VMM)", definition: "Software that creates and runs virtual machines, mediating guest access to hardware." },
              { term: "Type 1 hypervisor", definition: "A hypervisor that runs directly on hardware (ESXi, Xen)." },
              { term: "Trap-and-emulate", definition: "Guest privileged instructions trap to the hypervisor, which emulates them." },
              { term: "Bootstrap loader", definition: "The small program in the boot block that loads the main OS loader." },
              { term: "init / systemd", definition: "The first user process (PID 1) that starts all other system daemons." },
            ],
            examQuestions: [
              {
                q: "What is a virtual machine? Compare Type 1 and Type 2 hypervisors and explain the benefits of virtualization.",
                marks: 7,
                outline: [
                  "VM definition and the illusion of dedicated resources",
                  "Trap-and-emulate implementation; hardware assist mention",
                  "Type 1: bare metal, examples, cloud usage",
                  "Type 2: hosted, examples, desktop usage",
                  "Benefits: isolation, multiplexing, snapshots, migration",
                  "Worked example: 8 GB host with four 2 GB guests",
                  "JVM as a language-level VM contrast",
                ],
              },
              {
                q: "What is the boot block and what does it contain?",
                marks: 2,
              },
              {
                q: "Describe the steps from power-on to the log-in prompt in a Linux system.",
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
      title: "Process Management and CPU Scheduling",
      summary:
        "The process as a program in execution: states and PCB, fork/exec/wait operations, the three schedulers and their queues, scheduling criteria and metrics, and the four algorithms every RGPV paper demands - FCFS, SJF, Round Robin and priority - each traced on a Gantt chart with real average waiting times, closing with threads and interprocess communication.",
      chapter: {
        number: "02",
        title: "From Program to Process: States, Schedulers and Gantt Charts",
        intro:
          "Unit II converts a static program into a running process, follows it through the five-state model and the PCB, shows how UNIX creates processes with fork/exec/wait, and then drills the numerical core of the subject: computing turnaround and waiting times for FCFS, SJF, Round Robin and priority scheduling, with threads and IPC as the closing topics.",
        inOneBreath:
          "A process = program + counter + registers + stack + PCB; states new->ready->running->waiting->terminated; the PCB is the process's resume and the context switch saves/restores it; schedulers are long-term (admission), short-term (CPU dispatch), medium-term (swap); metrics are turnaround, waiting, response; FCFS suffers the convoy effect, SJF is optimal for waiting time but needs prediction, RR is fair with quantum effects, priority needs aging; threads share code/data/files but own stacks and registers; IPC = shared memory or message passing.",
        sections: [
          {
            number: "2.1",
            title: "Process Concept and Process States",
            body: [
              "A process is a program in execution - an active entity, as opposed to a program, which is a passive file on disk. A process consists of the text section (program code), data section (global variables), heap (dynamically allocated memory), stack (function frames, local variables, return addresses), the program counter and register contents, plus a unique process ID. Two processes can run the same program (two copies of a browser) and be entirely different processes; one process can run different programs over its life (a shell exec-ing commands).",
              "The five-state model is the standard lifecycle. New: the process is being created. Ready: it has everything it needs except the CPU, waiting in the ready queue. Running: its instructions are executing on a CPU. Waiting (blocked): it cannot proceed until some event completes - I/O finish, a semaphore, a message. Terminated: finished, awaiting removal. Transitions follow fixed rules: New->Ready on admission, Ready->Running on dispatch, Running->Ready when preempted (timer or higher priority), Running->Waiting on an I/O request or wait(), Waiting->Ready when the event completes, and Running->Terminated on exit.",
              "Worked example: trace process P1 with a 3-second burst that issues a disk read after 2 seconds. Timeline: P1 New->Ready at t=0; dispatch at t=0.5, Running 0.5-2.5; issues disk read at t=2.5, Running->Waiting; disk completes at t=4.0, Waiting->Ready (note: never Waiting->Running directly); dispatch again at t=4.6, runs 2.5-... wait, remaining burst 1 second, Running 4.6-5.6; exit, Terminated. The trace forces the two most-tested facts: a process never moves Waiting->Running directly (it must pass through Ready), and preemption always goes Running->Ready, not Running->Waiting.",
              "State models vary: a two-state model (running/not) suffices for single-program systems; a seven-state model adds ready-suspend and blocked-suspend for swapping to disk (Unit II's medium-term scheduler). The exam-safe presentation: draw the five-state diagram with all arrows labelled by the event that causes the transition, then list the three arrows students forget - Running->Ready (preemption), Waiting->Ready (I/O completion), and the prohibition of Waiting->Running.",
            ],
            bullets: [
              "Process = text + data + heap + stack + PC/registers + PCB; program is passive, process is active.",
              "Five states: New, Ready, Running, Waiting, Terminated.",
              "Transitions: admission New->Ready; dispatch Ready->Running; interrupt/preemption Running->Ready; I/O request Running->Waiting; I/O completion Waiting->Ready; exit ->Terminated.",
              "Never Waiting->Running directly: must re-enter the ready queue and be dispatched.",
              "Seven-state model adds suspended states for swapping.",
              "Processes differ even when running the same program: distinct address spaces and PCBs.",
            ],
            table: {
              caption: "State transitions and their causes.",
              headers: ["Transition", "Cause", "Queue left / joined"],
              rows: [
                ["New -> Ready", "Admitted by long-term scheduler", "Joins ready queue"],
                ["Ready -> Running", "Dispatched by short-term scheduler", "Leaves ready queue"],
                ["Running -> Ready", "Timer expires or preempted", "Rejoins ready queue"],
                ["Running -> Waiting", "Requests I/O or waits for event", "Joins device queue"],
                ["Waiting -> Ready", "I/O completes / event occurs", "Rejoins ready queue"],
                ["Running -> Terminated", "exit() or kill", "Removed after reaping"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The five-state process lifecycle",
              caption:
                "Read as a loop: processes repeatedly cycle Ready -> Running -> (Ready or Waiting) -> Ready until they terminate.",
              steps: [
                { label: "New", note: "Being created; PCB being filled" },
                { label: "Ready", note: "In the ready queue; waits only for the CPU" },
                { label: "Running", note: "Instructions executing on a core" },
                { label: "Waiting", note: "Blocked on I/O or an event; cannot use CPU" },
                { label: "Back to Ready (cycle)", note: "Event completes; re-queued for dispatch" },
              ],
            },
            callout: {
              type: "warning",
              title: "No direct arrow from Waiting to Running",
              body: "The most common error in drawn state diagrams is an arrow Waiting -> Running. It cannot happen: after its event completes, the process must first become Ready and wait for the scheduler to dispatch it.",
            },
            keyTerms: [
              { term: "Process", definition: "A program in execution with its counter, registers, stack and PCB." },
              { term: "Ready state", definition: "The process has all resources except the CPU and waits in the ready queue." },
              { term: "Waiting (blocked) state", definition: "The process cannot proceed until an external event completes." },
              { term: "Dispatch", definition: "The scheduler's action of giving the CPU to the head of the ready queue." },
              { term: "Preemption", definition: " forcibly removing a running process from the CPU, moving it back to Ready." },
            ],
            examQuestions: [
              {
                q: "Explain the process state diagram with all transitions and the events that cause them.",
                marks: 7,
                outline: [
                  "Define process vs program; list memory sections",
                  "Five states with one-line meaning each",
                  "All six transitions with causes",
                  "Emphasize no Waiting->Running arrow",
                  "Preemption goes Running->Ready",
                  "Trace one process through the states (disk-read example)",
                  "Mention 7-state suspended variant",
                ],
              },
              {
                q: "What is the difference between a program and a process?",
                marks: 2,
              },
              {
                q: "Can a waiting process be dispatched directly to the CPU? Justify.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Process Control Block and Context Switching",
            body: [
              "The Process Control Block (PCB, also called task control block) is the kernel's data structure that represents a process - its resume, everything the kernel must know to suspend and later resume it. Standard fields: process state (which of the five states), process ID and parent PID, program counter (address of the next instruction), CPU registers (general-purpose, stack pointer, condition codes), CPU-scheduling information (priority, queue pointers, scheduling parameters), memory-management information (base/limit or page-table pointer), accounting information (CPU time used, time limits, job number), and I/O status (open files, allocated devices, pending requests).",
              "A context switch is the act of stopping one process and starting another: the kernel saves the current CPU context (registers, program counter, state) into the old PCB, selects the next process by the scheduling policy, restores that process's context from its PCB, and resumes it. The switch is pure overhead - no useful user work happens during it - and its time is invisible to the user but very visible to throughput. Hardware-dependent state (FPUs, TLB) can dominate; switching address spaces also flushes TLB entries, which is why context switches cost more between processes than between threads of one process.",
              "Worked example: suppose a context switch takes 2 microseconds and Round Robin grants a 1 ms quantum. Each switch wastes 2 us out of 1000 us of useful time, an overhead of 0.2% - negligible. Now reduce the quantum to 0.05 ms (50 us): the overhead becomes 2 us per 50 us = 4%, still tolerable but 20x worse, and the TLB flush effects add more. This arithmetic is the entire quantum-size argument of section 2.7 in miniature: small quanta improve responsiveness at the cost of switch overhead.",
              "The PCB is also how the kernel implements everything else in this subject: the ready queue is a linked list of PCBs; wait() works by the parent scanning child PCBs for termination state; fork() copies the parent's PCB into a child. For the exam: list at least seven PCB fields with one-line purposes, define context switch, give the numbers worked above (2 us vs quantum), and state that switch time is overhead not charged to either process.",
            ],
            bullets: [
              "PCB fields: state, PID/PPID, program counter, CPU registers, scheduling info, memory info, accounting, I/O status.",
              "One PCB per process; the PCB is created at admission and freed at termination.",
              "Context switch = save current context to old PCB + pick next + restore from new PCB.",
              "Context-switch time is pure overhead; no user work occurs during it.",
              "Switch between threads of one process is cheaper than between processes (no address-space change, no TLB flush).",
              "Worked numbers: 2 us switch with 1 ms quantum = 0.2% overhead; with 50 us quantum = 4%.",
              "Queues (ready, device, job) are simply lists of PCBs.",
            ],
            table: {
              caption: "PCB fields and their purposes.",
              headers: ["Field", "Purpose"],
              rows: [
                ["Process state", "New/Ready/Running/Waiting/Terminated"],
                ["PID and PPID", "Unique identifier and parent link"],
                ["Program counter", "Address of next instruction to execute"],
                ["CPU registers", "Full register context for save/restore"],
                ["Scheduling information", "Priority, queue pointers, quantum"],
                ["Memory management info", "Base/limit or page-table pointer"],
                ["Accounting information", "CPU time used, limits, job number"],
                ["I/O status", "Open files, devices, pending requests"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Inside a context switch",
              caption:
                "Five steps of pure overhead between two bursts of useful work: save, choose, restore, resume.",
              steps: [
                { label: "Timer interrupt (or blocking call)", note: "Running process P1 suspended" },
                { label: "Save P1 context into its PCB", note: "PC, registers, state -> PCB" },
                { label: "Scheduler selects next process", note: "Policy applied to the ready queue" },
                { label: "Restore P2 context from its PCB", note: "Load registers, PC, switch address space" },
                { label: "Resume P2 in user mode", note: "No user work happened during steps 1-4" },
              ],
            },
            callout: {
              type: "exam",
              title: "Seven fields, one worked number",
              body: "For the PCB question, write seven fields with purposes and add the 0.2%-vs-4% context-switch arithmetic. Examiners reward the numerical insight; it shows you understand why quantum size matters.",
            },
            keyTerms: [
              { term: "PCB", definition: "Process Control Block: the kernel record holding all information about a process." },
              { term: "Context switch", definition: "Saving one process's CPU context into its PCB and loading another's." },
              { term: "Program counter", definition: "Register holding the address of the next instruction." },
              { term: "Ready queue", definition: "The linked list of PCBs of processes waiting for the CPU." },
              { term: "Device queue", definition: "The list of processes waiting for a particular I/O device." },
            ],
            examQuestions: [
              {
                q: "Describe the structure of a Process Control Block and explain the steps and cost of a context switch.",
                marks: 7,
                outline: [
                  "PCB definition: the process's record inside the kernel",
                  "Eight fields with one-line purposes",
                  "Context switch definition and why it is overhead",
                  "Steps: save, select, restore, resume",
                  "Worked arithmetic: 2 us switch, quantum trade-off (0.2% vs 4%)",
                  "Threads switch cheaper than processes (TLB point)",
                  "Queues as lists of PCBs",
                ],
              },
              {
                q: "List any four fields of a PCB.",
                marks: 2,
              },
              {
                q: "Why is a context switch between threads cheaper than between processes?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Process Operations: fork, exec, wait, exit",
            body: [
              "UNIX creates processes with fork(): the kernel duplicates the calling process, giving the child a copy of the parent's address space, open files and PCB - but a distinct PID and its own copy of the return value. The single call returns twice, once in each process: 0 in the child, the child's PID in the parent, and -1 on failure. This 'return twice' behavior is the signature exam fact. The child typically calls exec() to replace its copied image with a new program; the parent calls wait() to block until a child terminates and to collect its exit status, preventing the child from becoming a zombie.",
              "Worked example with numbers: suppose a program calls fork() then each process increments a shared-in-memory counter variable in its own address space. Because fork gives the child a copy, not a link, the parent's counter becomes 1 and the child's separately becomes 1 - total memory shows two independent counters, both 1. Contrast with threads (section 2.8), which share memory and would make the counter 2. This example answers the classic viva question 'does fork share memory?' - it shares a copy at the moment of creation, then the copies diverge (modern kernels actually implement copy-on-write: pages are shared read-only until either side writes, then duplicated).",
              "Process termination and the lifecycle bookkeeping matter for marks. exit() ends a process, releasing memory, closing files and reporting status to the kernel. If the parent is waiting, the status is delivered; if not, the process becomes a zombie - terminated but with a PCB retained to hold the exit status until reaped. If a parent dies first, children become orphans and are adopted by init (PID 1), which wait()s on them. A fork bomb is the pathological case: each process forks many children exponentially; ulimit caps a user's process count to prevent it.",
              "Related calls complete the toolkit: getpid()/getppid() fetch identities; exec comes in five flavours (execl, execv, execle, execve, execlp) differing in argument passing and PATH search; waitpid() targets one child; vfork() is an optimized fork for immediate exec. For the exam: draw the fork/exec/wait flowchart, write the three return values, explain zombie vs orphan with the reaping mechanism, and include a short C trace.",
            ],
            bullets: [
              "fork() duplicates the caller; returns 0 in child, child PID in parent, -1 on error.",
              "exec() replaces the process image; never returns on success.",
              "wait()/waitpid() blocks the parent and reaps the child's exit status.",
              "Copy-on-write: fork shares pages read-only until the first write duplicates them.",
              "Zombie: terminated child whose status awaits wait(); orphan: parent died, adopted by init.",
              "exit() releases resources and delivers status; kill() sends signals to terminate.",
              "Five exec flavours differ in argument form and PATH search (execl/execv/exec*p).",
            ],
            table: {
              caption: "Process-control calls at a glance.",
              headers: ["Call", "Returns / effect", "Typical use"],
              rows: [
                ["fork()", "0 in child; PID in parent; -1 error", "Create a child process"],
                ["exec(path, args)", "Replaces image; no return on success", "Run a new program"],
                ["wait(&status)", "Child PID; status filled", "Reap a terminated child"],
                ["exit(status)", "Never returns; releases resources", "Terminate self"],
                ["getpid()/getppid()", "Process / parent ID", "Identify self"],
                ["kill(pid, sig)", "0 or -1", "Signal another process"],
              ],
            },
            codeExample: {
              language: "c",
              caption: "fork, exec, wait: parent spawns and reaps a child",
              code:
                "#include <stdio.h>\n#include <unistd.h>\n#include <sys/wait.h>\n\nint main(void) {\n    pid_t pid = fork();\n    if (pid == 0) {                    /* child branch */\n        printf(\"child  pid=%d\\n\", getpid());\n        execl(\"/bin/echo\", \"echo\", \"hello from child\", (char *)0);\n    } else if (pid > 0) {              /* parent branch: pid = child PID */\n        int status;\n        wait(&status);                 /* reap the child */\n        printf(\"parent saw status=%d\\n\", status);\n    } else {\n        perror(\"fork failed\");         /* pid == -1 */\n    }\n    return 0;\n}",
            },
            diagram: {
              kind: "fork",
              title: "fork() returns three ways",
              caption:
                "One call, three outcomes. The value inspected in the code decides which process you are in.",
              start: "pid = fork() is called",
              branches: [
                { label: "pid == 0", outcome: "You are the child: usually call exec() to run a new program", good: true },
                { label: "pid > 0", outcome: "You are the parent: pid is the child's PID; call wait() to reap", good: true },
                { label: "pid == -1", outcome: "fork failed (no memory / process limit): no child exists", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Zombie vs orphan - do not swap them",
              body: "A zombie is a dead child whose parent has not yet called wait(). An orphan is a live child whose parent died first, so init adopts it. Mixing these two costs an easy mark every year.",
            },
            keyTerms: [
              { term: "fork()", definition: "UNIX call creating a duplicate child process; returns 0 in child, PID in parent." },
              { term: "exec()", definition: "Call replacing the current process image with a new program." },
              { term: "wait()", definition: "Parent call blocking until a child terminates and collecting its exit status." },
              { term: "Zombie process", definition: "A terminated child whose exit status has not been reaped by wait()." },
              { term: "Copy-on-write", definition: "Optimization where fork shares pages until the first write duplicates them." },
            ],
            examQuestions: [
              {
                q: "Explain process creation in UNIX using fork, exec and wait. Include the return values and the fate of zombies and orphans.",
                marks: 7,
                outline: [
                  "fork(): duplicate semantics, copy-on-write",
                  "Three return values and how code branches on them",
                  "exec(): image replacement, no return on success",
                  "wait(): reaping, exit status delivery",
                  "Zombie: definition and prevention by wait()",
                  "Orphan: init adoption",
                  "Short C trace as the worked example",
                ],
              },
              {
                q: "Define a zombie process and how it is prevented.",
                marks: 2,
              },
              {
                q: "Why does exec() never return on success? Explain briefly.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Schedulers and Scheduling Queues",
            body: [
              "Three schedulers cooperate to move a job from disk to CPU to completion. The long-term (job) scheduler selects processes from the job pool on disk and admits them into memory, controlling the degree of multiprogramming - it may run seconds apart and can afford to be choosy. The short-term (CPU) scheduler selects one ready process and dispatches it to the CPU, running every few milliseconds, so it must be fast. The medium-term scheduler swaps processes out of memory to disk and back in, temporarily reducing the degree of multiprogramming when memory pressure builds.",
              "The queues are lists of PCBs: the job queue holds all processes in the system, the ready queue holds those resident and waiting for CPU, and each device has a device queue of processes waiting for that I/O. Worked example of admission control: suppose memory holds 4 processes and the workload is 30% CPU-bound, 70% I/O-bound, with I/O-bound jobs using the CPU only 20% of their time. Four I/O-bound residents would leave the CPU idle 20% of the time; a long-term scheduler that admits a mix of one CPU-bound plus three I/O-bound processes keeps the CPU busy roughly 3 x 20% + 100% overlap = near 100%. Mixing the workload, not just counting processes, is the long-term scheduler's real job.",
              "The distinction between nonpreemptive and preemptive scheduling cuts across everything in this unit. Under nonpreemptive (cooperative) scheduling, a process keeps the CPU until it terminates or blocks; scheduling decisions happen only at those moments. Under preemptive scheduling, the kernel may take the CPU away - on timer expiry or when a higher-priority process becomes ready. Preemption costs more (context switches at arbitrary points) but enables responsiveness and fairness; almost every modern system is preemptive.",
              "Dispatcher vs scheduler is a classic short question: the scheduler decides WHICH process runs next; the dispatcher is the module that actually performs the switch - saving context, switching to user mode, jumping to the picked process. Dispatch latency is the time from the decision to the first instruction of the new process; real-time systems minimize it. For the exam: name the three schedulers with their frequencies and purposes, define the three queues, and give the admission-mix worked example.",
            ],
            bullets: [
              "Long-term scheduler: admits jobs from disk pool; controls degree of multiprogramming; runs rarely.",
              "Short-term scheduler (CPU scheduler): picks next ready process; runs every few ms; must be fast.",
              "Medium-term scheduler: swaps processes out/in to relieve memory pressure.",
              "Queues: job (all), ready (resident, awaiting CPU), device (awaiting specific I/O).",
              "Long-term scheduler balances CPU-bound vs I/O-bound mix to keep the CPU busy.",
              "Preemptive vs nonpreemptive: can the CPU be taken away at timer expiry or on arrival of a better process?",
              "Dispatcher performs the switch; dispatch latency = decision-to-execution delay.",
            ],
            table: {
              caption: "The three schedulers compared.",
              headers: ["Scheduler", "Frequency", "Decides", "Effect"],
              rows: [
                ["Long-term (job)", "Seconds / minutes", "Which jobs are admitted to memory", "Degree of multiprogramming, workload mix"],
                ["Short-term (CPU)", "Every few ms", "Which ready process gets the CPU", "Responsiveness, utilization"],
                ["Medium-term", "On memory pressure", "Which processes are swapped out/in", "Frees memory, adjusts degree"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A process travels the queues",
              caption:
                "From job pool to CPU to device and back: each stage names the scheduler or queue responsible.",
              stages: [
                { label: "Job pool (on disk)", note: "Long-term scheduler admits a mix of job types" },
                { label: "Ready queue (in memory)", note: "Short-term scheduler picks the next CPU user" },
                { label: "CPU", note: "Runs until preemption, exit, or an I/O request" },
                { label: "Device queue", note: "Blocked for that device's service" },
                { label: "Back to ready queue", note: "I/O complete; competes for CPU again" },
              ],
            },
            callout: {
              type: "tip",
              title: "Mix, don't just count",
              body: "The long-term scheduler's exam one-liner: it controls the degree of multiprogramming AND the CPU/I-O-bound mix. Writing only 'it admits jobs' loses the second half of the mark.",
            },
            keyTerms: [
              { term: "Long-term scheduler", definition: "Selects jobs from the pool and admits them to memory; sets degree of multiprogramming." },
              { term: "Short-term scheduler", definition: "Selects the next ready process to run; runs every few milliseconds." },
              { term: "Medium-term scheduler", definition: "Swaps processes out of and back into memory." },
              { term: "Dispatcher", definition: "Module that performs the context switch to the selected process." },
              { term: "Dispatch latency", definition: "Delay between the scheduling decision and the process starting execution." },
            ],
            examQuestions: [
              {
                q: "Explain long-term, short-term and medium-term schedulers with the queues they manage.",
                marks: 7,
                outline: [
                  "Long-term: admission, degree of multiprogramming, workload mix",
                  "Worked mix example: 1 CPU-bound + 3 I/O-bound keeps CPU busy",
                  "Short-term: dispatch frequency, speed requirement",
                  "Medium-term: swapping on memory pressure",
                  "Job / ready / device queues as PCB lists",
                  "Preemptive vs nonpreemptive scheduling",
                  "Dispatcher and dispatch latency",
                ],
              },
              {
                q: "Differentiate between scheduler and dispatcher.",
                marks: 2,
              },
              {
                q: "Why must the short-term scheduler be faster than the long-term scheduler?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Scheduling Criteria and Performance Metrics",
            body: [
              "Scheduling algorithms are judged on five CPU metrics. CPU utilization: the fraction of time the CPU is busy, ideally 40-90%. Throughput: completed processes per unit time. Turnaround time TAT = completion time - arrival time: the total time from submission to finish. Waiting time = TAT - burst time: the total time spent in the ready queue - the metric SJF optimizes. Response time = first CPU time - arrival time: how soon the process first reacts, the metric that matters interactively. In addition, fairness (no starvation) and predictability (low variance) are qualitative criteria.",
              "The formulas must be memorized with their relationships: TAT = exit time - arrival time; waiting = TAT - burst; response = first dispatch - arrival. Worked example: three jobs with bursts 24, 3, 3 arriving together at t=0, run FCFS in that order. Completion times: 24, 27, 30. TATs: 24, 27, 30; average TAT = 27. Waiting times: 0, 24, 27; average waiting = (0+24+27)/3 = 17. Reverse the order to 3, 3, 24 and the average waiting collapses to (21+24+0)/3 = 15... recompute: order 3,3,24 gives waits 0, 3, 6, average 3. The same jobs, reordered, cut average waiting from 17 to 3 - the entire motivation for SJF in one line of arithmetic.",
              "Workload character shapes which metric to optimize. CPU-bound processes (long bursts, little I/O - simulations, compilers) maximize throughput; I/O-bound processes (short bursts, frequent I/O - editors, shells) maximize utilization if kept moving. Interactive workloads optimize response time; batch workloads optimize throughput or TAT; real-time workloads optimize deadlines met. A scheduler that minimizes average waiting can still be unacceptable for interactive users if response time suffers - RR sacrifices some throughput for bounded response.",
              "Metric traps to avoid in numericals: burst time is the CPU time needed, not wall-clock; arrival times may differ, so FCFS order is by arrival, not by list order; waiting time accumulates across multiple queue entries (in RR a process re-queues several times - sum every waiting interval). For the exam: define all five metrics with formulas, present the 24-3-3 worked example with both orders, and state which workload type optimizes which metric.",
            ],
            bullets: [
              "CPU utilization: % of time the CPU is busy (target 40-90%).",
              "Throughput: processes completed per unit time.",
              "Turnaround TAT = exit - arrival; total time in system.",
              "Waiting time = TAT - burst; time spent in ready queues only.",
              "Response time = first dispatch - arrival; the interactive metric.",
              "Fairness/predictability: avoid starvation; keep variance low.",
              "Worked core: bursts 24,3,3 FCFS -> avg wait 17; order 3,3,24 -> avg wait 3.",
            ],
            table: {
              caption: "Metrics for jobs of 24, 3, 3 (all arrive at 0), FCFS two orders.",
              headers: ["Order", "Completion times", "Avg turnaround", "Avg waiting"],
              rows: [
                ["24, 3, 3", "24, 27, 30", "27.0", "17.0"],
                ["3, 3, 24", "3, 6, 30", "13.0", "3.0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "CPU-bound vs I/O-bound workloads",
              caption:
                "The two process personalities pull the scheduler in opposite directions; the long-term scheduler balances them.",
              left: {
                heading: "CPU-bound process",
                items: [
                  "Few, very long CPU bursts",
                  "Little I/O; rarely blocks",
                  "Wants maximum CPU share (throughput)",
                  "Example: compiler, simulation",
                  "Risk: starving interactive jobs if unmanaged",
                ],
              },
              right: {
                heading: "I/O-bound process",
                items: [
                  "Many short CPU bursts",
                  "Blocks frequently on I/O",
                  "Wants quick dispatch (response)",
                  "Example: shell, text editor",
                  "Keeps CPU utilized while others compute",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Waiting is not turnaround minus arrival",
              body: "The formula slip that fails numericals: waiting time = turnaround - burst, not turnaround - arrival. Keep TAT = exit - arrival and waiting = TAT - burst as two separate written lines in every solution.",
            },
            keyTerms: [
              { term: "Burst time", definition: "The CPU time a process needs before its next I/O or completion." },
              { term: "Turnaround time", definition: "Total time from arrival to completion: exit - arrival." },
              { term: "Waiting time", definition: "Total time spent in ready queues: turnaround minus burst." },
              { term: "Response time", definition: "Time from arrival until the first CPU dispatch." },
              { term: "Throughput", definition: "Number of processes completed per unit time." },
            ],
            examQuestions: [
              {
                q: "Define the scheduling criteria and show with bursts 24, 3, 3 how job order changes average waiting time.",
                marks: 7,
                outline: [
                  "Five metrics with formulas",
                  "Relationships: TAT = exit - arrival; waiting = TAT - burst",
                  "FCFS order 24,3,3: table, avg wait 17",
                  "Reordered 3,3,24: avg wait 3",
                  "Motivation for SJF stated from the numbers",
                  "Which metric interactive vs batch workloads need",
                  "Common traps: burst vs wall-clock, multiple queue entries",
                ],
              },
              {
                q: "Write the formulas for turnaround and waiting time.",
                marks: 2,
              },
              {
                q: "Why does response time matter more than turnaround for interactive systems?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.6",
            title: "FCFS and SJF Scheduling",
            body: [
              "First-Come First-Served (FCFS) is the simplest algorithm: a FIFO ready queue; the process at the head runs until completion or block. It is nonpreemptive, trivially fair in ordering, and easy to implement - but it suffers the convoy effect: one long CPU-bound process at the head forces every short process to wait behind it, destroying average waiting time (the 24-3-3 example of section 2.5 is exactly this). FCFS is also poor for interactive systems because response time is unbounded.",
              "Shortest Job First (SJF) assigns the CPU to the ready process with the smallest next CPU burst. It is provably optimal for average waiting time among nonpreemptive algorithms. Its practical problem: burst length is not known in advance, so it must be predicted, typically by exponential averaging of measured bursts: next = a * t_n + (1 - a) * tau_n, with a common choice a = 0.5. SJF can be nonpreemptive (wait for the running job to finish) or preemptive as Shortest Remaining Time First (SRTF), which switches to a newly arrived job if its remaining time is smaller.",
              "Worked example (nonpreemptive SJF): P1 burst 8 arrives 0; P2 burst 4 arrives 1; P3 burst 9 arrives 2; P4 burst 5 arrives 3. At t=0 only P1 is present, so it runs 0-8. At t=8 the ready set is P2(4), P3(9), P4(5): pick P2, runs 8-12; then P4 (5 < 9) runs 12-17; then P3 runs 17-26. Gantt: P1 | P2 | P4 | P3. Turnarounds: P1 = 8-0 = 8, P2 = 12-1 = 11, P3 = 26-2 = 24, P4 = 17-3 = 14. Waiting: P1 = 0, P2 = 11-4 = 7, P3 = 24-9 = 15, P4 = 14-5 = 9; average waiting = (0+7+15+9)/4 = 7.75. FCFS on the same data gives waits 0, 7, 10, 18, average 8.75 - SJF wins by 1.0 here and much more when a long job arrives first.",
              "SJF's weakness is starvation: a stream of short jobs can postpone a long one indefinitely (in the example, P3 with burst 9 ran last). FCFS has no starvation but bad averages. Neither needs preemption hardware, which is why both appear in embedded and batch settings. For the exam: draw the Gantt chart, show the four-column table of arrival, burst, completion, TAT, waiting, compute averages, and state the convoy effect and burst prediction formula - those two named facts turn a correct answer into a full-marks answer.",
            ],
            bullets: [
              "FCFS: FIFO queue, nonpreemptive, simple; convoy effect ruins waiting time.",
              "SJF: picks smallest next burst; optimal average waiting among nonpreemptive algorithms.",
              "Bursts predicted by exponential averaging: tau = a*t + (1-a)*tau_old.",
              "SRTF = preemptive SJF: switch if a new arrival's burst is shorter than the running job's remaining.",
              "SJF starves long jobs; FCFS never starves but averages poorly.",
              "Worked numbers: SJF avg wait 7.75 vs FCFS 8.75 on the same four jobs.",
            ],
            table: {
              caption: "SJF run: P1(8, arr 0), P2(4, arr 1), P3(9, arr 2), P4(5, arr 3).",
              headers: ["Process", "Arrival", "Burst", "Completion", "TAT", "Waiting"],
              rows: [
                ["P1", "0", "8", "8", "8", "0"],
                ["P2", "1", "4", "12", "11", "7"],
                ["P3", "2", "9", "26", "24", "15"],
                ["P4", "3", "5", "17", "14", "9"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "SJF Gantt chart (nonpreemptive)",
              caption:
                "P1 runs first by default arrival; after t=8 the shortest job always wins: P2(4), then P4(5), then P3(9).",
              stages: [
                { label: "P1 : 0 - 8", note: "Only process present at t=0" },
                { label: "P2 : 8 - 12", note: "Shortest of {4, 9, 5} ready at t=8" },
                { label: "P4 : 12 - 17", note: "5 < 9, so P4 beats P3" },
                { label: "P3 : 17 - 26", note: "Longest job runs last; TAT 24" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show the selection decision, not just the Gantt",
              body: "When SJF picks among ready jobs, write the comparison explicitly ('at t=8 ready bursts are 4, 9, 5; choose 4'). The comparison line is what examiners use to award method marks when the final number slips.",
            },
            keyTerms: [
              { term: "FCFS", definition: "First-Come First-Served: FIFO nonpreemptive scheduling; suffers the convoy effect." },
              { term: "Convoy effect", definition: "Short processes stuck behind one long process in a FIFO queue." },
              { term: "SJF", definition: "Shortest Job First: schedules the smallest next burst; optimal for average waiting." },
              { term: "SRTF", definition: "Shortest Remaining Time First: preemptive SJF." },
              { term: "Exponential averaging", definition: "Predicting the next burst as a weighted mix of the last burst and the running estimate." },
            ],
            examQuestions: [
              {
                q: "For P1(8, arr 0), P2(4, arr 1), P3(9, arr 2), P4(5, arr 3), compute average waiting time under FCFS and SJF and comment on the convoy effect.",
                marks: 7,
                outline: [
                  "FCFS Gantt 0-26 by arrival; waits 0,7,10,18; avg 8.75",
                  "SJF Gantt P1|P2|P4|P3",
                  "Completion and TAT table",
                  "Waits 0,7,15,9; avg 7.75",
                  "SJF optimality for waiting stated",
                  "Convoy effect explained via P3 last",
                  "Burst prediction formula for practical SJF",
                ],
              },
              {
                q: "State the convoy effect and which algorithm causes it.",
                marks: 2,
              },
              {
                q: "Why must SJF predict burst lengths? Give the exponential averaging formula.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.7",
            title: "Round Robin and Priority Scheduling",
            body: [
              "Round Robin (RR) is FCFS plus preemption by timer: each process gets the CPU for one time quantum; if it has not finished, it is preempted and re-queued at the tail. RR was designed for time sharing - with n ready processes and quantum q, no process waits more than (n-1)q time units for its next turn, giving bounded response. Worked example (q = 4): P1 burst 8 arr 0; P2 burst 4 arr 1; P3 burst 9 arr 2; P4 burst 5 arr 3. Gantt: P1 0-4 | P2 4-8 | P3 8-12 | P4 12-16 | P1 16-20 | P3 20-24 | P4 24-25 | P3 25-26. Completion: P1 20, P2 8, P3 26, P4 25. TATs: 20, 7, 24, 22. Waits: P1 = 20-8 = 12, P2 = 7-4 = 3, P3 = 24-9 = 15, P4 = 22-5 = 17; average waiting = (12+3+15+17)/4 = 11.75. Compare SJF's 7.75: RR buys bounded response with higher average waiting.",
              "Quantum size is RR's central trade-off. Too large (q >= largest burst) and RR degenerates into FCFS; too small and context-switch overhead dominates - with a 2 us switch, q = 50 us wastes 4% of every slice (section 2.2's arithmetic). Practical quanta are 10-100 ms, often chosen so that 80% of bursts finish within one quantum. Rule of thumb for answers: state both degeneration directions and the overhead formula waste = switch_time / q.",
              "Priority scheduling assigns the CPU to the ready process with the highest priority (small number = high, by convention). It can be preemptive or nonpreemptive; SJF is just priority scheduling with priority = next burst. Its disease is starvation (indefinite blocking): a low-priority process may never run. The cure is aging - gradually raise the priority of waiting processes (e.g., +1 every 15 minutes) until even the oldest low-priority job eventually runs. Worked example: P1 burst 10 priority 3, P2 burst 1 priority 1, P3 burst 4 priority 4, P4 burst 5 priority 2, all at t=0, nonpreemptive: order P2 (1 unit), P4 (5), P1 (10), P3 (4); waits: P2 0, P4 1, P1 6, P3 16; average = 23/4 = 5.75.",
              "Multilevel queues and MLFQ combine the ideas: classify processes into fixed queues (system, interactive, batch) each with its own algorithm, queues prioritized among themselves, optionally with time slicing between queues; multilevel feedback queues (MLFQ) let processes move between levels based on observed behaviour - new jobs start at high priority, CPU hogs sink to batch levels. Windows and Linux CFS-influenced schedulers embody these ideas. For the exam: RR trace with the full table, the two quantum degenerations, priority example with aging, and one line on MLFQ.",
            ],
            bullets: [
              "RR: quantum q, preempt on expiry, re-queue at tail; bounded response (n-1)q.",
              "Worked RR (q=4): avg waiting 11.75 vs SJF 7.75 on the same jobs.",
              "Quantum trade-off: too large -> FCFS; too small -> switch overhead waste = t_switch/q.",
              "Typical q 10-100 ms; choose so ~80% of bursts finish in one quantum.",
              "Priority scheduling: preemptive or not; SJF is priority with priority = burst.",
              "Starvation cured by aging: raise priority of waiting processes over time.",
              "MLFQ: multiple queues, priority among queues, feedback moves processes between levels.",
            ],
            table: {
              caption: "RR (q=4) run: P1(8,0), P2(4,1), P3(9,2), P4(5,3).",
              headers: ["Process", "Burst", "Completion", "TAT", "Waiting"],
              rows: [
                ["P1", "8", "20", "20", "12"],
                ["P2", "4", "8", "7", "3"],
                ["P3", "9", "26", "24", "15"],
                ["P4", "5", "25", "22", "17"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Round Robin vs Priority scheduling",
              caption:
                "Two different goals: RR spreads the CPU evenly to bound response; priority concentrates it on the most urgent job.",
              left: {
                heading: "Round Robin",
                items: [
                  "Fixed quantum; timer preemption",
                  "Bounded response: at most (n-1)q wait",
                  "Fair: no starvation possible",
                  "Higher average waiting than SJF",
                  "Quantum sets the fairness/overhead balance",
                ],
              },
              right: {
                heading: "Priority",
                items: [
                  "Highest priority always wins",
                  "SJF is a special case (priority = burst)",
                  "Starvation of low priorities without aging",
                  "Aging: +1 priority per waiting interval",
                  "Matches urgency, sacrifices fairness",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "RR waiting time = TAT - burst still works",
              body: "For RR you do NOT need to sum queue gaps by hand: waiting = TAT - burst is always valid. Compute completion times from the Gantt, then use the formula. Summing re-queue intervals manually is where arithmetic errors creep in.",
            },
            keyTerms: [
              { term: "Time quantum", definition: "The fixed CPU slice RR grants before preemption." },
              { term: "Round Robin", definition: "FCFS with timer preemption; re-queues unfinished processes at the tail." },
              { term: "Priority scheduling", definition: "Dispatches the highest-priority ready process; preemptive or not." },
              { term: "Aging", definition: "Gradually increasing the priority of long-waiting processes to prevent starvation." },
              { term: "Multilevel feedback queue", definition: "Several queues with priorities and movement of processes between them by behaviour." },
            ],
            examQuestions: [
              {
                q: "With q=4, schedule P1(8, arr 0), P2(4, arr 1), P3(9, arr 2), P4(5, arr 3) by Round Robin; draw the Gantt chart and compute average waiting time. Then explain the quantum trade-off.",
                marks: 7,
                outline: [
                  "Gantt: P1|P2|P3|P4|P1|P3|P4|P3 with times",
                  "Completion times 20, 8, 26, 25",
                  "TAT and waiting per process; avg 11.75",
                  "Formula waiting = TAT - burst",
                  "Quantum too large -> FCFS; too small -> overhead t_switch/q",
                  "Numerical overhead example from section 2.2",
                  "Typical 10-100 ms and the 80% rule",
                ],
              },
              {
                q: "What is aging and which problem does it solve?",
                marks: 2,
              },
              {
                q: "Explain multilevel feedback queue scheduling briefly.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.8",
            title: "Threads and Multithreading Models",
            body: [
              "A thread is a basic unit of CPU execution inside a process: it has its own program counter, register set and stack, but shares with its sibling threads the process's code section, data section, heap, and open files and signals. A traditional (single-threaded) process is therefore just a process with one thread. Multithreading keeps a program responsive - while one thread blocks on I/O another continues computing - and lets a multicore CPU run the threads truly in parallel.",
              "The benefits are four: responsiveness (a blocked thread does not freeze the whole application), resource sharing (threads share memory; no IPC machinery needed for common data), economy (creating and switching threads costs far less than processes - no new address space, no TLB flush), and scalability (utilization of multiprocessors). Worked example: a web server with 4 threads handling requests. Request A blocks for 200 ms of disk I/O; while A's thread waits, threads B, C, D serve three more requests - the server's throughput triples versus a single-threaded server that would have been idle 200 ms. This is precisely the responsiveness argument quantified.",
              "User-level threads vs kernel-level threads is the theory core. User threads are managed by a library with no kernel knowledge: fast to create and switch, but the kernel schedules the whole process, so one blocking system call blocks every thread in it (the classic problem), and only one user thread runs at a time on a uniprocessor. Kernel threads are scheduled individually by the kernel: blocking one leaves the others running, and they can exploit multiple CPUs, but each create/switch crosses into the kernel.",
              "The three mapping models connect the two worlds: many-to-one (all user threads map to one kernel thread - efficient but a single block stops everything); one-to-one (each user thread is a kernel thread - Linux and Windows use this; allows parallelism, costs kernel resources per thread); many-to-many (user threads multiplex onto a pool of kernel threads - flexible, avoids both limits, hard to implement). For the exam: define thread, list what is shared vs private, the four benefits with the web-server numbers, the three models with one defect each, and the blocking behaviour that distinguishes user from kernel threads.",
            ],
            bullets: [
              "Thread-private: PC, registers, stack, thread ID. Shared: code, data, heap, open files, signals.",
              "Benefits: responsiveness, resource sharing, economy, scalability on multicore.",
              "Worked example: 4-thread server stays productive while one thread does 200 ms of I/O.",
              "User threads: library-managed, fast; one blocking syscall blocks all threads in the process.",
              "Kernel threads: individually scheduled; blocking one is safe; can run on multiple cores.",
              "Models: many-to-one, one-to-one (Linux/Windows), many-to-many.",
              "Thread switch within a process is cheaper than process switch (same address space).",
            ],
            table: {
              caption: "The three multithreading models.",
              headers: ["Model", "Mapping", "Strength", "Defect"],
              rows: [
                ["Many-to-one", "N user -> 1 kernel thread", "Fast, portable", "One block stops all; no parallelism"],
                ["One-to-one", "1 user -> 1 kernel thread", "True parallelism, safe blocking", "Kernel cost per thread limits counts"],
                ["Many-to-many", "N user -> M kernel threads", "Flexible; avoids both defects", "Complex to implement well"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A thread blocks on I/O - what happens next?",
              caption:
                "The single decisive difference between user-level and kernel-level threads, in one fork diagram.",
              start: "Thread T calls a blocking read()",
              branches: [
                { label: "User-level threads", outcome: "Kernel blocks the whole process: every sibling thread stalls too", good: false },
                { label: "Kernel-level threads", outcome: "Kernel blocks only T; siblings keep running, other cores available", good: true },
                { label: "Async / nonblocking I/O", outcome: "T returns immediately and polls; process never blocks (library workaround)", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Shared vs private in two columns",
              body: "Write the thread answer as two columns - 'shared: code, data, heap, files' and 'private: PC, registers, stack' - before anything else. That table alone usually secures the definition marks, whatever else the question asks.",
            },
            keyTerms: [
              { term: "Thread", definition: "An execution unit with its own PC, registers and stack inside a process." },
              { term: "User-level thread", definition: "A thread managed by a library, invisible to the kernel." },
              { term: "Kernel-level thread", definition: "A thread scheduled individually by the kernel." },
              { term: "One-to-one model", definition: "Each user thread maps to one kernel thread (Linux, Windows)." },
              { term: "Many-to-many model", definition: "User threads multiplexed onto a smaller pool of kernel threads." },
            ],
            examQuestions: [
              {
                q: "Distinguish process from thread, list thread benefits, and explain the three multithreading models with defects.",
                marks: 7,
                outline: [
                  "Thread definition; shared vs private resources",
                  "Four benefits with the web-server worked example",
                  "User-level threads: speed + blocking defect",
                  "Kernel-level threads: parallelism + cost",
                  "Many-to-one, one-to-one, many-to-many",
                  "Why thread switches beat process switches",
                  "Which model Linux and Windows use",
                ],
              },
              {
                q: "What does a thread own privately?",
                marks: 2,
              },
              {
                q: "Why can a blocking system call freeze all user-level threads of a process?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.9",
            title: "Interprocess Communication (IPC)",
            body: [
              "Cooperating processes need to exchange data and synchronize; IPC provides both. Two families exist. Shared memory: the kernel sets up a common region (shmget/shmat in System V, shm_open/mmap in POSIX); after setup, processes read and write it at memory speed with no kernel involvement - the fastest IPC, used for large data. Message passing: the kernel itself carries the data via send/receive primitives (pipes, message queues, sockets); every transfer crosses the kernel, so it is slower but safe, works across machines, and needs no shared address space.",
              "Message passing needs a communication link design: direct (processes name each other: send(P, msg)) vs indirect (messages go to a mailbox/port that both open); synchronous (blocking send/receive, rendezvous) vs asynchronous (buffered); automatic vs explicit buffering with bounded (block when full) and unbounded (sender never blocks) capacities. Pipes are the UNIX classic: anonymous pipes are one-way byte streams between related processes (fork inheritance), named pipes (FIFOs) connect unrelated processes through a file-system name; sockets extend the same idea across networks.",
              "Worked example: the bounded-buffer producer-consumer over shared memory with 5 slots. Shared variables: buffer[0..4], in = 0, out = 0, counter = 0. Producer: while (counter == 5) ; buffer[in] = item; in = (in + 1) % 5; counter++. Consumer: while (counter == 0) ; item = buffer[out]; out = (out + 1) % 5; counter--. Trace: producer inserts A, B, C (counter 3); consumer removes A (counter 2, out = 1); producer inserts D, E (counter 4); buffer now [E, B, C, D, _] with in = 4, out = 1. The unguarded counter++ / counter-- is a race condition (Unit III fixes it with semaphores) - mentioning that here connects the units and earns the synthesis mark.",
              "Choosing between the families: shared memory wins for bulk data (image buffers, databases) after setup cost; message passing wins for control information, for protection boundaries (no shared address space to corrupt) and across machines, where shared memory is impossible. For the exam: define both families, give the four message-passing design choices, present the bounded-buffer trace with the race-condition remark, and compare pipes vs sockets in one line each.",
            ],
            bullets: [
              "Shared memory: kernel sets up region once; then kernel-free, memory-speed transfers; best for bulk data.",
              "Message passing: send/receive via kernel; safe, works across machines; slower per message.",
              "Link designs: direct vs indirect (mailbox); blocking vs nonblocking; bounded vs unbounded buffering.",
              "Pipes: anonymous one-way for related processes; named FIFOs for unrelated; sockets for networks.",
              "Bounded buffer: circular indices in/out mod N; counter updated by both sides.",
              "Unguarded shared counter is a race condition - the bridge to Unit III.",
              "POSIX: shm_open/mmap for shared memory; mq_open for message queues.",
            ],
            table: {
              caption: "Shared memory vs message passing.",
              headers: ["Property", "Shared memory", "Message passing"],
              rows: [
                ["Setup", "Kernel establishes region once", "Kernel involved per message"],
                ["Speed after setup", "Memory speed, no kernel entry", "Two kernel crossings per message"],
                ["Data volume", "Bulk data friendly", "Small control messages"],
                ["Machines", "Same machine only", "Works across network (sockets)"],
                ["Safety", "No protection inside the region", "Kernel validates each transfer"],
                ["UNIX forms", "shmget/shmat, mmap", "pipe(), FIFO, msgget, socket()"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Indirect message passing through a mailbox",
              caption:
                "Neither side names the other; both name the mailbox, which the kernel owns - the flexible, machine-transparent design.",
              steps: [
                { label: "Sender executes send(mailbox, msg)", note: "Kernel copies msg from sender space" },
                { label: "Kernel checks mailbox capacity", note: "Bounded: block if full; unbounded: queue" },
                { label: "Msg stored in mailbox queue", note: "Kernel-owned buffer between processes" },
                { label: "Receiver executes receive(mailbox)", note: "Kernel copies msg to receiver space" },
                { label: "Both sides block or poll by policy", note: "Synchronous rendezvous vs async" },
              ],
            },
            callout: {
              type: "tip",
              title: "Say who copies the data",
              body: "The one-line essence examiners look for: in shared memory the KERNEL copies nothing after setup; in message passing the kernel copies every message. All other differences follow from that sentence.",
            },
            keyTerms: [
              { term: "Shared memory", definition: "IPC via a kernel-established region both processes can read and write directly." },
              { term: "Message passing", definition: "IPC via kernel-mediated send/receive primitives." },
              { term: "Mailbox (port)", definition: "An indirect communication queue owned by the kernel." },
              { term: "Bounded buffer", definition: "A fixed-size circular buffer shared between producer and consumer." },
              { term: "Pipe / FIFO", definition: "One-way byte-stream IPC; anonymous for related processes, named for unrelated ones." },
            ],
            examQuestions: [
              {
                q: "Explain shared-memory and message-passing IPC with their designs and a bounded-buffer worked example.",
                marks: 7,
                outline: [
                  "Two families defined; who copies the data",
                  "Direct vs indirect links; blocking vs nonblocking",
                  "Bounded vs unbounded buffering",
                  "Bounded buffer: variables, in/out mod 5 trace",
                  "Race condition on counter noted",
                  "Pipes, FIFOs, sockets one line each",
                  "Selection guidance: bulk vs control vs network",
                ],
              },
              {
                q: "Differentiate direct and indirect communication.",
                marks: 2,
              },
              {
                q: "Why is shared memory faster than message passing after setup?",
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
      title: "Synchronization and Deadlocks",
      summary:
        "The coordination core of the subject: the critical-section problem and race conditions, Peterson's solution and hardware synchronization instructions, semaphores and their pseudocode, the classical problems (bounded buffer, readers-writers, dining philosophers), monitors, deadlock characterization with resource-allocation graphs, the Banker's algorithm with a full five-process safety check, and detection and recovery.",
      chapter: {
        number: "03",
        title: "Sharing Without Stepping on Each Other",
        intro:
          "Unit III formalizes what goes wrong when processes share data, builds the software and hardware tools that fix it - Peterson's algorithm, test-and-set, semaphores, monitors - applies them to the three classical problems, and then attacks deadlock: the four Coffman conditions, prevention, the Banker's avoidance algorithm with its Need matrix, and detection with recovery.",
        inOneBreath:
          "Race conditions corrupt shared data; a critical section needs mutual exclusion, progress, bounded waiting; Peterson uses flags + turn, hardware uses test-and-set/compare-and-swap; a semaphore is an integer with atomic wait(P)/signal(V), binary or counting; classical problems are bounded buffer, readers-writers, dining philosophers; a monitor bundles data + procedures + condition variables; deadlock requires mutual exclusion, hold-and-wait, no preemption, circular wait; prevention kills one condition, avoidance (Banker's) keeps the system in a safe state, detection finds cycles and recovers by abort/preempt.",
        sections: [
          {
            number: "3.1",
            title: "The Critical-Section Problem",
            body: [
              "A race condition occurs when several processes access and manipulate shared data concurrently and the final result depends on the timing order of their execution. The textbook example: two processes execute counter++ (count++ compiles into load, increment, store - three machine instructions). Interleave P1's load and P2's entire sequence between them and the final value is wrong: starting from 5, expected 7, actual 6. The race is not a bug in either process; it is a bug in the interleaving.",
              "The code that manipulates shared data is a critical section (CS). The critical-section problem asks for a protocol satisfying three requirements. Mutual exclusion: at most one process executes inside its CS at any time. Progress: if no process is in its CS, a process wishing to enter must be allowed to do so without indefinite delay - no process outside a CS may block others forever. Bounded waiting: once a process requests entry, there is a finite bound on how many times others may enter before it does - no starvation.",
              "Worked example of the race with real numbers: counter = 5. P1 executes S1: register1 = counter (register1 = 5), then is preempted. P2 runs completely: register2 = counter (5), register2 = register2 + 1, counter = register2 - counter = 6. P1 resumes: register1 = register1 + 1 (6), counter = register1 (6). Both incremented, counter rose by exactly 1 instead of 2. Draw the interleaving as a two-column trace - it is the single most convincing exhibit in a 7-mark answer and it shows you understand that the bug lives in instruction interleaving, not in the algorithm logic.",
              "A solution structure: do { entry section; critical section; exit section; remainder section } while (true). Software solutions (Peterson's, section 3.2) and hardware solutions (test-and-set, compare-and-swap) implement the entry/exit protocol; the OS-level tools (semaphores, monitors) package them for programmers. For the exam: define race condition, show the 5-6 counter interleaving trace, state the three requirements verbatim with one-line meanings, and sketch the do-while solution structure.",
            ],
            bullets: [
              "Race condition: result depends on interleaving timing of concurrent accesses.",
              "counter++ is three instructions: load, increment, store - each a preemption point.",
              "Critical section: code that touches shared data; only one process inside at a time.",
              "Requirement 1 mutual exclusion: at most one process in CS.",
              "Requirement 2 progress: free CS must admit a waiting process; outsiders cannot block forever.",
              "Requirement 3 bounded waiting: a finite bound on passes before a requester enters.",
              "Structure: entry -> critical -> exit -> remainder, looping.",
            ],
            table: {
              caption: "Interleaved trace: counter starts at 5, both P1 and P2 do counter++.",
              headers: ["Step", "P1 executes", "P2 executes", "counter"],
              rows: [
                ["1", "register1 = counter (5)", "-", "5"],
                ["2", "- (preempted)", "register2 = counter (5)", "5"],
                ["3", "-", "register2 = register2 + 1 (6)", "5"],
                ["4", "-", "counter = register2", "6"],
                ["5", "register1 = register1 + 1 (6)", "-", "6"],
                ["6", "counter = register1", "-", "6  (should be 7!)"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The critical-section protocol loop",
              caption:
                "Every process repeats this cycle forever; all the difficulty concentrates in the entry and exit sections.",
              steps: [
                { label: "Entry section", note: "Request permission; wait if CS occupied" },
                { label: "Critical section", note: "Mutually exclusive work on shared data" },
                { label: "Exit section", note: "Release permission; wake a waiter" },
                { label: "Remainder section", note: "Everything else; loop back to entry" },
              ],
            },
            callout: {
              type: "exam",
              title: "The three requirements, verbatim",
              body: "Mutual exclusion, progress, bounded waiting - write them as a numbered list with one-line explanations. Every synchronization question's marks begin with this list; omitting 'progress' or paraphrasing it vaguely is the most common silent mark loss.",
            },
            keyTerms: [
              { term: "Race condition", definition: "A situation where the result depends on the timing of concurrent accesses to shared data." },
              { term: "Critical section", definition: "Code that accesses shared resources and must not be executed by two processes at once." },
              { term: "Mutual exclusion", definition: "At most one process inside its critical section at any time." },
              { term: "Progress", definition: "A free critical section must be granted to a requester without indefinite delay." },
              { term: "Bounded waiting", definition: "A limit on how many times other processes may enter before a waiting one does." },
            ],
            examQuestions: [
              {
                q: "What is the critical-section problem? State the three requirements and demonstrate a race condition with an interleaving trace.",
                marks: 7,
                outline: [
                  "Race condition defined",
                  "counter++ as load/increment/store",
                  "Trace: counter 5, both increment, result 6",
                  "Critical section defined",
                  "Mutual exclusion with meaning",
                  "Progress with meaning",
                  "Bounded waiting with meaning; do-while structure",
                ],
              },
              {
                q: "State the three requirements of a critical-section solution.",
                marks: 2,
              },
              {
                q: "Why is counter++ not atomic? Explain in terms of machine instructions.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Peterson's Solution and Hardware Synchronization",
            body: [
              "Peterson's algorithm solves the two-process critical-section problem in software using one shared int turn and a shared boolean flag[2]. Process i: flag[i] = true; turn = j; while (flag[j] && turn == j) ; /* critical section */ flag[i] = false. The entry condition 'while the other wants in AND it is not my turn' is exactly what yields all three properties: mutual exclusion (both cannot pass, since turn holds one value), progress (if Pj does not want in, flag[j] is false and Pi enters immediately), and bounded waiting (after being blocked, Pj will enter on Pi's next turn handover - turn is reassigned every request).",
              "Worked trace: P0 and P1 both call entry simultaneously. P0: flag[0] = true, turn = 1. P1: flag[1] = true, turn = 0. Last writer wins turn: turn = 0, so P0's condition (flag[1] && turn == 1) is false - P0 enters; P1 spins on (flag[0] && turn == 0). P0 exits: flag[0] = false; P1's condition fails and it enters. Exactly one entered at every instant, and each waited at most one turn. Write this 4-step trace in the exam; it proves the algorithm rather than reciting it.",
              "Peterson's weakness on modern hardware: compilers and CPUs may reorder independent memory operations (without memory barriers / fences), breaking the algorithm in practice even though it is correct in the sequential model. Hence real kernels use hardware atomic instructions. test-and-set(TSL) atomically reads a lock's old value and sets it to true; compare-and-swap(T, expected, new) atomically replaces expected with new if the value still equals expected. Both are single uninterruptible instructions provided by the architecture, so the entry section 'while (test_and_set(lock)) ;' cannot be interleaved - mutual exclusion falls out of atomicity.",
              "Atomic spinlocks need a companion: busy waiting wastes CPU, so real implementations pair TSL with a wait queue (semaphores, section 3.3). Also note the spinlock trade-off: on a single CPU spinning is useless (the lock holder cannot run), on a multicore machine spinning briefly is cheaper than a context switch. For the exam: write Peterson's code, give the simultaneous-entry trace, name the memory-reordering caveat, then define TSL and CAS and show the while (test_and_set(lock)) loop - the contrast software-vs-hardware is the 7-mark skeleton.",
            ],
            bullets: [
              "Peterson uses flag[i] (I want in) and turn (whose turn it is); entry waits while flag[j] && turn == j.",
              "Simultaneous entry trace: turn = 0 wins, P0 enters, P1 spins; exit hands the turn over.",
              "Satisfies mutual exclusion, progress and bounded waiting.",
              "Modern caveat: instruction reordering needs memory barriers; Peterson is theoretical today.",
              "test-and-set: atomic read-and-set of a lock word; CAS: atomic compare-and-replace.",
              "Spinlock: while (TSL(lock)); correct but burns CPU; pairs with wait queues in practice.",
              "Multicore note: brief spinning beats a context switch; single-core spinning is pointless.",
            ],
            table: {
              caption: "Software vs hardware synchronization.",
              headers: ["Aspect", "Peterson (software)", "TSL / CAS (hardware)"],
              rows: [
                ["Primitive", "Shared flag + turn variables", "Atomic CPU instruction"],
                ["Processes", "Two only (straightforward)", "Any number"],
                ["Correctness risk", "Memory reordering on modern CPUs", "None - atomicity guaranteed"],
                ["Waiting style", "Busy wait (spin)", "Spin or block with wait queue"],
                ["Use today", "Teaching / proofs", "Real kernels (spinlocks, atomics)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Peterson vs test-and-set",
              caption:
                "Same goal, different foundations: shared variables and careful ordering versus one atomic instruction.",
              left: {
                heading: "Peterson's algorithm",
                items: [
                  "Pure software: flag[2], turn",
                  "Designed for exactly two processes",
                  "Elegant; provable three properties",
                  "Breaks if stores reorder without barriers",
                  "Bounded waiting built into turn handover",
                ],
              },
              right: {
                heading: "Hardware TSL / CAS",
                items: [
                  "One atomic instruction does read+write",
                  "Scales to any number of contenders",
                  "Immune to interleaving by construction",
                  "Needs care to avoid busy-wait waste",
                  "Foundation of real spinlocks and semaphores",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The simultaneous-entry trace is the proof",
              body: "Do not just quote Peterson's code. Write the 4-step trace where both processes race to set turn, the last writer loses, and exactly one enters. The trace converts a memorized algorithm into a demonstrated one.",
            },
            keyTerms: [
              { term: "Peterson's solution", definition: "A two-process software critical-section protocol using flag[] and turn." },
              { term: "Memory barrier", definition: "A hardware/compiler fence preventing reordering of memory operations across it." },
              { term: "test-and-set (TSL)", definition: "Atomic instruction that reads a word and sets it true in one step." },
              { term: "compare-and-swap (CAS)", definition: "Atomic instruction replacing expected with new value if current equals expected." },
              { term: "Spinlock", definition: "A lock whose holder waits by spinning on an atomic variable." },
            ],
            examQuestions: [
              {
                q: "Explain Peterson's solution with code, prove it via a simultaneous-entry trace, and compare it with hardware test-and-set.",
                marks: 7,
                outline: [
                  "Shared variables: flag[2], turn",
                  "Entry/exit code for process i",
                  "Trace: both enter together; last turn writer loses",
                  "Three requirements satisfied point by point",
                  "Reordering caveat and memory barriers",
                  "TSL and CAS definitions",
                  "while (test_and_set(lock)) spinlock and multicore note",
                ],
              },
              {
                q: "What does test-and-set guarantee in one instruction?",
                marks: 2,
              },
              {
                q: "Why is Peterson's solution unreliable on modern CPUs?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Semaphores",
            body: [
              "A semaphore is an integer variable S accessed only through two atomic operations. wait(S) (also P, from Dutch 'proberen'): S--; if (S < 0) block the caller on the semaphore's queue. signal(S) (also V, 'verhogen'): S++; if (S <= 0) wake one blocked process. The atomicity of wait/signal is the whole point - no interleaving can corrupt S. Two implementations exist: with busy waiting (spinlock semaphore, S spun on directly) and with blocking plus a wait queue (no busy loop; the value S < 0 records the number of waiting processes).",
              "Two kinds: a binary semaphore (mutex) takes values 0/1 and implements mutual exclusion - initialize S = 1; each process does wait(S) before the critical section and signal(S) after. A counting semaphore counts available resources - initialize S = N; each acquire does wait, each release does signal. Worked example: S = 2 (two printers) and three processes P1, P2, P3 arrive. P1: wait -> S = 1, proceeds. P2: wait -> S = 0, proceeds. P3: wait -> S = -1, blocks. P1 finishes: signal -> S = 0, wakes P3, which proceeds. At every instant at most 2 processes hold printers, and the negative value -1 told you exactly how many were waiting.",
              "Semaphores also implement synchronization patterns beyond mutual exclusion. Ordering: run A's section before B's - B begins with wait(flag) where flag starts 0 and A ends with signal(flag); B cannot proceed until A signals. Bounded buffer: mutex = 1 (binary), empty = N (counting), full = 0; producer does wait(empty), wait(mutex), insert, signal(mutex), signal(full); consumer mirrors with wait(full), wait(mutex), remove, signal(mutex), signal(empty). Worked numbers: N = 5; if the producer fills all 5 slots then empty = 0 and the next wait(empty) blocks it - back-pressure without lost data.",
              "The dangers: incorrect ordering of waits (wait(mutex) before wait(empty)) deadlocks the producer-consumer solution; a single misplaced signal breaks mutual exclusion. For the exam: write wait/signal pseudocode with blocking queues, classify binary vs counting, give the S = 2 three-process trace, show the bounded-buffer usage, and name ordering errors as the practical hazard.",
            ],
            bullets: [
              "Semaphore: integer S with atomic wait(S) and signal(S); negative S counts waiting processes.",
              "wait: S-- then block if S < 0; signal: S++ then wake one waiter if S <= 0.",
              "Binary semaphore (0/1) = mutex; counting semaphore = N available resources.",
              "Worked trace: S = 2, three processes -> third blocks, S = -1; wakes on first signal.",
              "Ordering pattern: flag initialized 0; A signals, B waits.",
              "Bounded buffer uses mutex(1), empty(N), full(0) - order of waits is critical.",
              "Implementation: spin (busy wait) vs block with wait queue; queue version preferred on single CPU.",
            ],
            table: {
              caption: "Semaphore S = 2, three contending processes.",
              headers: ["Event", "Operation", "S value", "Process state"],
              rows: [
                ["P1 arrives", "wait(S)", "1", "P1 proceeds (holds printer)"],
                ["P2 arrives", "wait(S)", "0", "P2 proceeds (holds printer)"],
                ["P3 arrives", "wait(S)", "-1", "P3 blocked on queue"],
                ["P1 finishes", "signal(S)", "0", "P3 woken and proceeds"],
              ],
            },
            codeExample: {
              language: "pseudo",
              caption: "Semaphore with a blocking wait queue (no busy waiting)",
              code:
                "wait(S):\n    S--;\n    if (S < 0) {\n        add this process to S.queue;\n        block();            /* sleep until signalled */\n    }\n\nsignal(S):\n    S++;\n    if (S <= 0) {\n        remove one process P from S.queue;\n        wakeup(P);          /* P re-enters ready queue */\n    }\n\n/* usage: mutual exclusion */\nsemaphore mutex = 1;\n\ndo {\n    wait(mutex);\n    /* critical section */\n    signal(mutex);\n    /* remainder section */\n} while (true);",
            },
            diagram: {
              kind: "fork",
              title: "wait(S) has two outcomes",
              caption:
                "The atomic decrement decides instantly: proceed or park on the queue. signal reverses the parked branch.",
              start: "A process calls wait(S)",
              branches: [
                { label: "S >= 0 after decrement", outcome: "Resource available: process enters and continues", good: true },
                { label: "S < 0 after decrement", outcome: "No resource: process blocks on S's wait queue", good: false },
                { label: "Later signal(S)", outcome: "One blocked process woken and re-queued as ready", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Order of waits is correctness",
              body: "In the bounded-buffer solution, wait(empty) must come before wait(mutex). Swapping them lets a producer holding the mutex block on a full buffer while the consumer cannot reach signal(empty) - deadlock. Check wait order in every semaphore question.",
            },
            keyTerms: [
              { term: "Semaphore", definition: "An integer variable manipulated only by atomic wait and signal operations." },
              { term: "wait / P", definition: "Atomic decrement; blocks the caller when the value goes negative." },
              { term: "signal / V", definition: "Atomic increment; wakes one blocked process when needed." },
              { term: "Binary semaphore", definition: "A semaphore restricted to values 0 and 1, used as a mutex." },
              { term: "Counting semaphore", definition: "A semaphore over range 0..N counting available identical resources." },
            ],
            examQuestions: [
              {
                q: "Define semaphores, write wait/signal with blocking queues, and trace three processes on S = 2. Explain binary vs counting use.",
                marks: 7,
                outline: [
                  "Definition and Dutch names P/V",
                  "wait pseudocode with block-on-queue",
                  "signal pseudocode with wakeup",
                  "Trace S=2: P1, P2 proceed; P3 blocks (S=-1)",
                  "Binary semaphore = mutual exclusion, S init 1",
                  "Counting semaphore = N resources, S init N",
                  "Bounded-buffer usage and wait-order hazard",
                ],
              },
              {
                q: "What does a negative semaphore value indicate?",
                marks: 2,
              },
              {
                q: "Write the producer-consumer semaphore solution with the three semaphores and their initial values.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Classical Synchronization Problems",
            body: [
              "The bounded-buffer (producer-consumer) problem: a producer fills a finite buffer while a consumer empties it; neither may overwrite an unconsumed item nor read an empty slot. The semaphore solution (section 3.3): mutex = 1, empty = N, full = 0, with the strict wait order wait(empty) -> wait(mutex) on the producer side and wait(full) -> wait(mutex) on the consumer side. Worked trace with N = 5: producer inserts items until 5 slots full (empty = 0), then blocks on wait(empty); consumer removes one (full = 4... wait, full was 5, consumer signals empty, empty = 1), producer wakes and continues. Invariant: empty + full + (items in transit) = N.",
              "The readers-writers problem: many readers may share a file concurrently, but a writer needs exclusive access. First solution: readcount (int, guarded by mutex = 1), wrt (semaphore = 1). Reader: wait(mutex); readcount++; if (readcount == 1) wait(wrt); signal(mutex); ... read ... ; wait(mutex); readcount--; if (readcount == 0) signal(wrt); signal(mutex). Writer: wait(wrt); write; signal(wrt). Worked numbers: three readers R1, R2, R3 enter: R1 sees readcount 0 -> takes wrt; R2, R3 read with it. Writer W arrives and blocks on wrt while readers hold it. Result: readers enjoy concurrency, but a first-reader lock can starve writers (the 'first reader waits wrt' bias); writer-priority variants use an extra wrt-waiters counter.",
              "The dining philosophers problem: five philosophers sit around a table with five chopsticks between plates; each needs both neighbours' chopsticks to eat. The naive solution - wait(chop[i]); wait(chop[(i+1) % 5]) - deadlocks when all five pick up their left chopstick simultaneously: every chopstick is held and every philosopher waits for the right one. Worked deadlock trace: P0 takes chop0, P1 takes chop1, ..., P4 takes chop4; all then request their right chopstick; circular wait forms; nothing progresses.",
              "Three fixes for the philosophers, each worth naming: (1) allow at most 4 philosophers to sit at the table simultaneously (a counting semaphore initialized to 4) - with only 4 seated, one can always get both sticks; (2) asymmetric grabbing - odd philosophers pick the right stick first, even the left, breaking the circular wait; (3) a monitor with condition variables where a philosopher tests both sticks atomically (pickup(i): if stick[i] and stick[(i+1)%5] free take both else wait). For the exam: present all three problems with their semaphore structures, the all-left-hands deadlock trace, and the three fixes.",
            ],
            bullets: [
              "Bounded buffer: mutex(1), empty(N), full(0); wait order prevents deadlock.",
              "Invariant: empty + full = N when nothing is in transit.",
              "Readers-writers: readcount + mutex + wrt; first reader locks wrt, last unlocks.",
              "Readers-writers bias: naive version starves writers; writer-priority adds a waiters count.",
              "Dining philosophers: 5 chopstick semaphores; all-pick-left = circular wait deadlock.",
              "Fix 1: cap diners at 4 (counting semaphore).",
              "Fix 2: odd/even asymmetric grabbing order.",
              "Fix 3: monitor with atomic pickup of both chopsticks.",
            ],
            table: {
              caption: "Three classical problems and their canonical tools.",
              headers: ["Problem", "Shared structure", "Key semaphores", "Classical hazard"],
              rows: [
                ["Bounded buffer", "Circular buffer of N slots", "mutex=1, empty=N, full=0", "Deadlock if wait order swapped"],
                ["Readers-writers", "readcount + file", "mutex=1, wrt=1", "Writer starvation (reader bias)"],
                ["Dining philosophers", "5 chopsticks", "chop[0..4]=1", "Circular-wait deadlock"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The four classical synchronization problems",
              caption:
                "A map of the standard problem set: know each one's tool and its characteristic failure.",
              axes: { x: "Resource sharing complexity", y: "Starvation risk" },
              quadrants: [
                { label: "Bounded buffer", note: "Two process classes, one buffer; deadlock risk if wait order slips" },
                { label: "Readers-writers", note: "Asymmetric access; writer starvation in reader-biased versions" },
                { label: "Dining philosophers", note: "Symmetric contenders; circular-wait deadlock" },
                { label: "Sleeping barber", note: "Customer/barber coordination; missed-wakeup bugs" },
              ],
            },
            callout: {
              type: "exam",
              title: "The all-left-chopsticks trace is mandatory",
              body: "Whenever the dining philosophers appear, write the deadlock trace: P0 holds chop0 wants chop1, ..., P4 holds chop4 wants chop0 - circular wait. Then give fix 2 (odd/even order) in one line. This pair of exhibits is the full answer.",
            },
            keyTerms: [
              { term: "Producer-consumer (bounded buffer)", definition: "Two processes sharing a finite buffer; empty/full semaphores prevent over/underrun." },
              { term: "Readers-writers", definition: "Concurrent readers vs exclusive writers sharing one resource." },
              { term: "Dining philosophers", definition: "Five processes each needing two of five shared resources; the deadlock teaching case." },
              { term: "readcount", definition: "Shared integer counting active readers, itself guarded by a mutex." },
              { term: "Writer starvation", definition: "The reader-biased solution's indefinite postponement of waiting writers." },
            ],
            examQuestions: [
              {
                q: "Explain the dining philosophers problem, demonstrate the deadlock, and give two correct solutions.",
                marks: 7,
                outline: [
                  "Setup: 5 philosophers, 5 chopsticks, need 2",
                  "Naive code: wait(left); wait(right)",
                  "Deadlock trace: all hold left, all want right",
                  "Why the 4 Coffman conditions hold here",
                  "Fix 1: counting semaphore = 4 diners",
                  "Fix 2: odd/even asymmetric order",
                  "Fix 3: monitor atomic pickup",
                ],
              },
              {
                q: "Write the reader entry/exit code for the readers-writers solution.",
                marks: 3,
              },
              {
                q: "Why can the bounded-buffer solution deadlock if wait(mutex) precedes wait(empty)?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Monitors and Condition Variables",
            body: [
              "A monitor is a high-level synchronization construct: an abstract data type whose internal variables are private and whose procedures are the only way to touch them - with the guarantee that only one process may be active inside the monitor at any time. Mutual exclusion is implicit and compiler-enforced, so the programmer cannot forget wait(mutex) or misplace signal(mutex); the errors that plague semaphore code disappear by construction. Java's synchronized methods and C++ mutex-guarded classes are monitor-flavoured reality.",
              "Inside a monitor, condition variables handle the waiting that mutual exclusion cannot express: a process too early calls x.wait() - it releases the monitor lock and parks on x's queue; another process later calls x.signal() to wake one waiter. Two signalling disciplines exist: signal-and-continue (Hoare vs Mesa: the woken process re-enters the queue and the signaller continues - used in Java, where wait/signal appear inside synchronized blocks) and signal-and-wait (signaller yields immediately). Because a woken process must recheck its condition, the idiom is while (!condition) x.wait(); not if.",
              "Worked example: the bounded buffer as a monitor. State: buffer[0..N-1], count, in, out; conditions notFull, notEmpty. Producer's insert(item): while (count == N) notFull.wait(); buffer[in] = item; in = (in+1) % N; count++; notEmpty.signal(). Consumer's remove(): while (count == 0) notEmpty.wait(); item = buffer[out]; out = (out+1) % N; count--; notFull.signal(). Trace with N = 5: producer fills slots 0-4 (count = 5); sixth insert waits on notFull; consumer removes buffer[0] (count = 4, out = 1) and signals notFull; producer resumes writing slot 5 % 5 = 0. No explicit semaphores appear; the monitor owns the locking.",
              "Monitor vs semaphore: the monitor packages data + exclusion + waiting into one compiler-checked construct, at the cost of language support (need the compiler to enforce entry exclusion); semaphores are raw, flexible and error-prone. The dining philosophers fix 3 is the canonical monitor application. For the exam: define monitor, explain implicit mutual exclusion, condition variables with wait/signal and the while-loop idiom, the bounded-buffer monitor code, and the Java synchronized connection.",
            ],
            bullets: [
              "Monitor: private data + public procedures + compiler-guaranteed single occupant.",
              "Mutual exclusion is implicit - programmer cannot forget it.",
              "Condition variables: x.wait() releases lock and parks; x.signal() wakes one waiter.",
              "Signal-and-continue (Mesa/Java) vs signal-and-wait (Hoare) disciplines.",
              "Idiom: while (!condition) x.wait(); - recheck after waking.",
              "Bounded-buffer monitor: notFull, notEmpty conditions; count/in/out state.",
              "Java: synchronized method = monitor entry; wait()/notify() = condition operations.",
            ],
            table: {
              caption: "Monitor vs semaphore.",
              headers: ["Aspect", "Monitor", "Semaphore"],
              rows: [
                ["Exclusion", "Implicit, compiler enforced", "Explicit wait/signal by programmer"],
                ["Error-proneness", "Low (cannot misorder waits)", "High (ordering bugs, missed signals)"],
                ["Waiting", "Condition variables with queues", "Semaphore's own wait queue"],
                ["Language support", "Required (Java, PascalMP)", "None (OS primitive)"],
                ["Expressiveness", "Structured, per-resource", "Fully general, raw"],
              ],
            },
            codeExample: {
              language: "pseudo",
              caption: "Bounded buffer written as a monitor",
              code:
                "monitor BoundedBuffer {\n    item buffer[N]; int count = 0, in = 0, out = 0;\n    condition notFull, notEmpty;\n\n    void insert(item x) {\n        while (count == N)\n            notFull.wait();          /* release lock, park */\n        buffer[in] = x;\n        in = (in + 1) % N;\n        count++;\n        notEmpty.signal();           /* wake a consumer */\n    }\n\n    item remove() {\n        while (count == 0)\n            notEmpty.wait();\n        item x = buffer[out];\n        out = (out + 1) % N;\n        count--;\n        notFull.signal();            /* wake a producer */\n        return x;\n    }\n}",
            },
            diagram: {
              kind: "layers",
              title: "Inside a monitor",
              caption:
                "Index 0 is the top. Entry is one-at-a-time; conditions queue the waiting; the data sits protected at the bottom.",
              layers: [
                { label: "Public procedures (the only interface)", note: "Calls enter one process at a time" },
                { label: "Entry queue", note: "Processes waiting for the monitor to empty" },
                { label: "Condition variables (notFull, notEmpty)", note: "wait() parks here, releasing the lock" },
                { label: "Private data (buffer, count, in, out)", note: "Never touched except by procedures" },
              ],
            },
            callout: {
              type: "tip",
              title: "while, not if",
              body: "In monitor condition waits (Mesa discipline) the woken process must recheck the predicate: write while (count == N) notFull.wait(); An if risks proceeding on a stale condition after a spurious or stolen wakeup - a favourite one-mark point.",
            },
            keyTerms: [
              { term: "Monitor", definition: "A construct bundling shared data with procedures under compiler-enforced mutual exclusion." },
              { term: "Condition variable", definition: "A queue inside a monitor where processes park via wait() until signalled." },
              { term: "Signal-and-continue", definition: "Mesa discipline: the signaller proceeds; the woken process re-queues (Java)." },
              { term: "Entry queue", definition: "The queue of processes waiting to enter the monitor." },
              { term: "synchronized (Java)", definition: "Method keyword making the object act as a monitor." },
            ],
            examQuestions: [
              {
                q: "What is a monitor? Explain condition variables and write the bounded buffer as a monitor.",
                marks: 7,
                outline: [
                  "Monitor definition; implicit mutual exclusion",
                  "Why programmer errors disappear",
                  "Condition variables: wait releases lock, signal wakes",
                  "Signal-and-continue vs signal-and-wait",
                  "while-loop idiom and stale wakeups",
                  "Bounded-buffer monitor code with N=5 trace",
                  "Java synchronized equivalence",
                ],
              },
              {
                q: "What happens to the monitor lock when a process executes x.wait()?",
                marks: 2,
              },
              {
                q: "Compare monitors and semaphores in three points.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Deadlock Characterization and Resource-Allocation Graphs",
            body: [
              "Deadlock: a set of processes, each holding resources and waiting for resources held by another member of the set - so none can ever proceed. A deadlock requires all four Coffman conditions simultaneously. Mutual exclusion: at least one resource is nonshareable. Hold-and-wait: a process holds at least one resource while waiting for more. No preemption: resources cannot be forcibly taken; only voluntary release. Circular wait: a cycle P0 -> P1 -> ... -> Pn -> P0 exists, each Pi waiting for a resource held by P(i+1). All four are necessary; together they are sufficient - a favourite exam line.",
              "The resource-allocation graph (RAG) formalizes the situation: vertices are processes (circles Pi) and resources (squares Rj, a dot inside for each instance); a request edge Pi -> Rj means Pi waits for Rj; an assignment edge Rj -> Pi means an instance of Rj is held by Pi. The key theorem: for single-instance resources, a cycle in the RAG is necessary and sufficient for deadlock; with multiple instances per resource, a cycle is necessary but not sufficient - you must run a detection algorithm (section 3.8).",
              "Worked example: R1 and R2 each have one instance. R1 assigned to P1; R2 assigned to P2; P1 requests R2; P2 requests R1. Edges: R1->P1, R2->P2, P1->R2, P2->R1. Cycle: P1 -> R2 -> P2 -> R1 -> P1. Both processes wait forever: deadlock. Modify one edge - suppose P2 releases R1 (no assignment edge R1->P2) - the cycle disappears and P1 proceeds: the same graph with one fewer edge is deadlock-free. This contrast exhibits exactly why the cycle matters.",
              "Deadlock prevention attacks one Coffman condition (this section's forward pointer to 3.7): deny mutual exclusion (make resources shareable - spooling a printer), deny hold-and-wait (request everything at once or release all before new requests), allow preemption (take resources from waiting processes), or break circular wait (global resource ordering: all processes request in increasing resource numbers). Each has costs - the ordering rule is the cheapest and most used. For the exam: state the four conditions with one-line meanings, draw the cycle RAG example, and note the single vs multiple instance theorem.",
            ],
            bullets: [
              "Deadlock: a cycle of processes each holding and waiting for the others' resources.",
              "Condition 1 mutual exclusion: resource not shareable.",
              "Condition 2 hold-and-wait: holding one while requesting more.",
              "Condition 3 no preemption: resources released only voluntarily.",
              "Condition 4 circular wait: P0->P1->...->Pn->P0 request cycle.",
              "All four necessary; together sufficient.",
              "RAG: request edge Pi->Rj, assignment edge Rj->Pi; cycle = deadlock iff single-instance.",
              "Prevention preview: break any one condition; ordering is the practical choice.",
            ],
            table: {
              caption: "The four Coffman conditions and how prevention attacks each.",
              headers: ["Condition", "Meaning", "Prevention strategy", "Cost"],
              rows: [
                ["Mutual exclusion", "Nonshareable resource", "Spooling / sharable devices", "Not always possible"],
                ["Hold-and-wait", "Hold while requesting", "Request all at start; release before new", "Low utilization, starvation risk"],
                ["No preemption", "No forced revoke", "Preempt resources of waiting procs", "State loss, rollbacks"],
                ["Circular wait", "Cyclic request chain", "Global ordering of resource numbers", "Programming discipline"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Deadlock as a circular wait",
              caption:
                "The deadlock cycle P1 -> R2 -> P2 -> R1 -> P1: every arrow is a wait, every reverse arrow is a hold. Nobody can move.",
              steps: [
                { label: "P1 holds R1", note: "Assignment edge R1 -> P1" },
                { label: "P1 requests R2", note: "Request edge P1 -> R2" },
                { label: "P2 holds R2", note: "Assignment edge R2 -> P2" },
                { label: "P2 requests R1", note: "Request edge P2 -> R1: the cycle closes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Necessary vs sufficient, precisely",
              body: "Write the exact sentence: 'All four conditions are necessary for deadlock, and together they are sufficient.' Then add the graph theorem: cycle in RAG = deadlock iff every resource has one instance. These two precise statements are worth a mark each.",
            },
            keyTerms: [
              { term: "Deadlock", definition: "A set of processes each waiting for a resource held by another member of the set." },
              { term: "Hold-and-wait", definition: "Holding at least one resource while waiting to acquire more." },
              { term: "Circular wait", definition: "A closed chain of processes, each waiting for a resource held by the next." },
              { term: "Resource-allocation graph", definition: "Directed graph of request (P->R) and assignment (R->P) edges." },
              { term: "Coffman conditions", definition: "The four necessary-and-jointly-sufficient conditions for deadlock." },
            ],
            examQuestions: [
              {
                q: "State and explain the four necessary conditions for deadlock. Draw the resource-allocation graph of a two-process deadlock.",
                marks: 7,
                outline: [
                  "Deadlock definition",
                  "Mutual exclusion with example resource",
                  "Hold-and-wait",
                  "No preemption",
                  "Circular wait with the chain P0->P1->P0",
                  "RAG edges and the two-process cycle drawing",
                  "Single vs multiple instance theorem; prevention preview",
                ],
              },
              {
                q: "Is a cycle in a resource-allocation graph always a deadlock? When?",
                marks: 2,
              },
              {
                q: "Explain how global resource ordering breaks circular wait.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.7",
            title: "Deadlock Prevention, Avoidance and the Banker's Algorithm",
            body: [
              "Prevention is static: design the system so one Coffman condition can never hold (section 3.6's table). Avoidance is dynamic: before granting each request, check that the system would remain in a safe state. Safe state: there exists an ordering of all processes (a safe sequence) in which each can obtain its maximum remaining need, finish, and release everything. Unsafe does not mean deadlocked - it means deadlock is possible and the system no longer controls its fate. Avoidance needs each process to declare its maximum resource demand in advance.",
              "The Banker's algorithm implements avoidance. Data per resource type: Available, and per process: Allocation, Max, Need = Max - Allocation. On a request from Pi: (1) if request <= Need, continue, else error; (2) if request <= Available, tentatively grant: Available -= request, Allocation[Pi] += request, Need[Pi] -= request; (3) run the safety algorithm: work = Available; find any unfinished Pi with Need[Pi] <= work; pretend Pi finishes: work += Allocation[Pi], mark done; repeat; if all processes finish, the state is safe and the grant stands, otherwise roll back and make Pi wait.",
              "Worked example (the classic): resource types A, B, C with total (10, 5, 7); Available = (3, 3, 2). Allocation and Max by process: P0 (0,1,0)/(7,5,3) -> Need (7,4,3); P1 (2,0,0)/(3,2,2) -> Need (1,2,2); P2 (3,0,2)/(9,0,2) -> Need (6,0,0); P3 (2,1,1)/(2,2,2) -> Need (0,1,1); P4 (0,0,2)/(4,3,3) -> Need (4,3,1). Safety run: work = (3,3,2). P1's Need (1,2,2) <= work -> finish: work = (5,3,2). P3's (0,1,1) <= work -> work = (7,4,3). P4's (4,3,1) <= work -> work = (7,4,5). P0's (7,4,3) <= work -> work = (7,5,5). P2's (6,0,0) <= work -> work = (10,5,7). All finished: safe sequence P1, P3, P4, P0, P2.",
              "Costs and limits: avoidance is conservative - processes must pre-declare maxima (rare in practice), and the safety check costs O(m x n) per request (m resource types, n processes). Prevention via resource ordering costs nothing at runtime but restricts programming. Hence real systems mostly ignore avoidance and use detection + recovery (section 3.8), relying on operator restarts. For the exam: write the full Need matrix, run the safety algorithm showing work after each grant, present the safe sequence, and state that unsafe != deadlocked.",
            ],
            bullets: [
              "Prevention: statically remove a Coffman condition (ordering rule most used).",
              "Avoidance: grant a request only if the result is a safe state.",
              "Safe state: a safe sequence exists where every process can finish with max needs.",
              "Unsafe state: deadlock possible - not the same as deadlock occurring.",
              "Banker's data: Available, Allocation, Max, Need = Max - Allocation.",
              "Safety algorithm: work = Available; find Need <= work; finish and release; repeat.",
              "Worked result: safe sequence P1, P3, P4, P0, P2 on the classic (10,5,7) example.",
              "Cost O(m x n) per request; needs pre-declared maxima.",
            ],
            table: {
              caption: "Banker's worked example: totals (10,5,7), Available (3,3,2).",
              headers: ["Process", "Allocation (A,B,C)", "Max (A,B,C)", "Need (A,B,C)"],
              rows: [
                ["P0", "0 1 0", "7 5 3", "7 4 3"],
                ["P1", "2 0 0", "3 2 2", "1 2 2"],
                ["P2", "3 0 2", "9 0 2", "6 0 0"],
                ["P3", "2 1 1", "2 2 2", "0 1 1"],
                ["P4", "0 0 2", "4 3 3", "4 3 1"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Banker's safety algorithm",
              caption:
                "Run this loop after each tentative grant; if every process can finish, the grant is safe; if any gets stuck, roll back.",
              steps: [
                { label: "work = Available; all unfinished", note: "Initialize the simulation" },
                { label: "Find Pi with Need <= work", note: "Pi can run to completion with what is free" },
                { label: "work += Allocation[Pi]; mark done", note: "Pi releases everything it holds" },
                { label: "Repeat until none qualifies", note: "Each pass grows work" },
                { label: "All done? safe : unsafe", note: "Safe sequence = the order you finished them" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show work after every grant",
              body: "In the safety check, write one line per selected process: 'Need(P1) = (1,2,2) <= work (3,3,2); work becomes (5,3,2)'. The running work column is what earns method marks; a bare 'safe sequence P1,P3,P4,P0,P2' does not prove you ran the algorithm.",
            },
            keyTerms: [
              { term: "Safe state", definition: "A state from which some ordering lets every process finish with its maximum needs." },
              { term: "Safe sequence", definition: "An ordering of processes that the safety algorithm can complete." },
              { term: "Need matrix", definition: "Need = Max - Allocation for each process and resource type." },
              { term: "Banker's algorithm", definition: "Deadlock avoidance granting requests only when the resulting state is safe." },
              { term: "Deadlock avoidance", definition: "Dynamic rejection/deferral of requests that would create an unsafe state." },
            ],
            examQuestions: [
              {
                q: "Explain the Banker's algorithm and verify safety for the standard 5-process example with Available (3,3,2), giving the safe sequence.",
                marks: 7,
                outline: [
                  "Avoidance vs prevention distinction",
                  "Safe state and safe sequence definitions",
                  "Need = Max - Allocation; full Need matrix",
                  "Safety loop: work after each grant (P1, P3, P4, P0, P2)",
                  "Final work (10,5,7); declare safe",
                  "Unsafe != deadlocked remark",
                  "Cost O(m x n) and pre-declaration limitation",
                ],
              },
              {
                q: "Differentiate deadlock prevention and deadlock avoidance.",
                marks: 2,
              },
              {
                q: "Why does an unsafe state not imply deadlock? Explain in three lines.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.8",
            title: "Deadlock Detection and Recovery",
            body: [
              "When neither prevention nor avoidance is used, the system runs freely and periodically checks for deadlock. Detection uses an algorithm structurally like Banker's safety check but without Max: given Available, Allocation and Request, find an unfinished Pi with Request[Pi] <= work; pretend it finishes and releases; repeat. If some processes can never finish, they are deadlocked. With single-instance resources the shortcut is the wait-for graph: collapse each resource into the process that holds it, and search for a cycle - a cycle is a deadlock.",
              "Worked example: single-instance R1, R2, R3; P1 holds R1 and requests R2; P2 holds R2 and requests R3; P3 holds R3 and requests R1. Wait-for edges: P1 -> P2 (waits for R2's holder), P2 -> P3, P3 -> P1. Cycle P1 -> P2 -> P3 -> P1: deadlock among all three. If instead P3 requests R1 but R1 is held by P4 which later finishes, the cycle opens and P1 unblocks - detection must be re-run when resources are released, since a recovered edge can end a previous deadlock.",
              "When to run detection is a policy trade-off: after every request/release (expensive, catches deadlock early), every k minutes (bounded damage, cheaper), or only when CPU utilization drops below a threshold (thrashing by deadlock often shows as low utilization). The detection frequency question is a standard short note: too frequent wastes cycles; too rare lets deadlock grow - more processes join the wait-for cycle over time.",
              "Recovery options, from brutal to surgical: abort all deadlocked processes (simple, expensive - work lost everywhere); abort one at a time until the cycle breaks (choose victims by least remaining CPU time, fewest resources held, lowest priority); resource preemption - forcibly take a resource from a victim and give it to a waiter, which requires the victim to be rolled back to a safe checkpoint and restarted later; the cost factors for victim selection are remaining execution time, resources already held, number of restarts so far, and process priority. For the exam: define detection algorithm vs wait-for graph, present the 3-cycle trace, list recovery options with victim-selection criteria, and state detection-frequency trade-offs.",
            ],
            bullets: [
              "Detection algorithm: like Banker's safety check but uses Request instead of Need.",
              "Wait-for graph: single-instance shortcut; cycle = deadlock.",
              "Worked trace: P1->P2->P3->P1 cycle from hold/request pattern on R1, R2, R3.",
              "Re-run detection after any recovery or release - cycles can appear or vanish.",
              "Frequency policy: every event vs periodic vs low-utilization trigger.",
              "Recovery: abort all; abort one-by-one; resource preemption with rollback.",
              "Victim selection: least CPU time left, fewest resources, lowest priority, fewest restarts.",
            ],
            table: {
              caption: "Recovery strategies compared.",
              headers: ["Strategy", "How", "Cost", "When preferred"],
              rows: [
                ["Abort all", "Kill every deadlocked process", "Maximum lost work", "Rare/first occurrence"],
                ["Abort one by one", "Kill chosen victims until cycle breaks", "Incremental work loss", "Deadlock is expensive to prevent"],
                ["Resource preemption", "Revoke + rollback victim's resources", "Checkpoint/rollback machinery", "Rollback state is cheap"],
                ["Operator restart", "Human reboots affected jobs", "Unpredictable", "Non-real-time systems"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Deadlock detected - choose a recovery path",
              caption:
                "The fork a system faces after the wait-for graph shows a cycle: kill, or rob.",
              start: "Detection finds a cycle",
              branches: [
                { label: "Abort all deadlocked processes", outcome: "Cycle gone instantly; all their work lost", good: false },
                { label: "Abort victims one at a time", outcome: "Re-run detection after each kill; minimal total loss", good: true },
                { label: "Preempt resources with rollback", outcome: "Victim restarts from checkpoint; needs checkpoint support", good: true },
                { label: "Do nothing and wait", outcome: "Cycle persists forever unless a process exits spontaneously", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Detection uses Request, not Need",
              body: "The exam distinction: the avoidance algorithm needs declared Maxima (Need = Max - Allocation); the detection algorithm uses only current Requests. Writing 'Need' in a detection answer signals you confused the two algorithms.",
            },
            keyTerms: [
              { term: "Deadlock detection", definition: "Periodic algorithm run to find processes that can never finish." },
              { term: "Wait-for graph", definition: "Reduced RAG, Pi -> Pj when Pi waits for a resource Pj holds; cycle = deadlock." },
              { term: "Victim selection", definition: "Choosing which process to abort or preempt based on cost factors." },
              { term: "Rollback", definition: "Restoring a preempted process to a checkpointed state before restart." },
              { term: "Recovery", definition: "Actions (abort/preempt) that break a detected deadlock cycle." },
            ],
            examQuestions: [
              {
                q: "Explain deadlock detection with the wait-for graph and detection algorithm, and describe recovery options with victim-selection criteria.",
                marks: 7,
                outline: [
                  "When detection is used (no avoidance)",
                  "Detection algorithm: Request <= work loop",
                  "Wait-for graph reduction; cycle = deadlock (single instance)",
                  "Worked 3-process cycle trace",
                  "Detection frequency trade-offs",
                  "Recovery: abort all / one-by-one / preemption + rollback",
                  "Victim criteria: CPU time, resources held, priority, restarts",
                ],
              },
              {
                q: "How does a wait-for graph differ from a resource-allocation graph?",
                marks: 2,
              },
              {
                q: "List four factors used to select a victim for rollback.",
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
      title: "Memory Management and Virtual Memory",
      summary:
        "From address binding and the MMU through contiguous allocation and fragmentation, paging with full address-translation arithmetic, page-table structures and the TLB, segmentation, virtual memory and demand paging with effective-access-time computations, page replacement algorithms with fault counts for FIFO, LRU and Optimal, and the closing trio of frame allocation, thrashing and the working set.",
      chapter: {
        number: "04",
        title: "From Addresses to Pages: Allocation, Paging and Virtual Memory",
        intro:
          "Unit IV explains how logical addresses become physical ones, why contiguous allocation fragments, how paging and segmentation reshape memory, and how virtual memory with demand paging and replacement algorithms lets a process exceed physical RAM - every mechanism backed by a numeric worked example, from the 5423 address translation to the 15/12/9 fault-count comparison.",
        inOneBreath:
          "Binding happens at compile, load or execute time; the MMU adds base or maps page->frame; contiguous allocation causes external fragmentation, fixed partitions internal; paging splits logical addresses into page+offset and translates via the page table with no external fragmentation; multi-level/inverted tables and the TLB cut lookup cost; segmentation gives base+limit per logical segment; demand paging faults pages in lazily, EMAT = (1-p)mem + p*fault; FIFO/LRU/Optimal give 15/12/9 faults on the classic string; thrashing = paging more than computing, managed by the working set.",
        sections: [
          {
            number: "4.1",
            title: "Address Binding and the Memory Management Unit",
            body: [
              "A program's symbols become addresses in stages, and the moment of binding decides flexibility. Compile-time binding: absolute code generated for fixed addresses (MS-DOS .COM); move the program and it must be recompiled. Load-time binding: the compiler emits relocatable code and the loader fixes addresses when the program is loaded (with a static relocation). Execution-time binding: addresses resolved at every memory access by hardware - the program can move mid-execution; this is what modern systems use and what makes swapping and paging possible.",
              "Logical (virtual) addresses are what the CPU generates; physical addresses are what the memory unit sees. The Memory Management Unit (MMU) translates one into the other on every access. The simplest MMU scheme is a relocation (base) register: physical = logical + base, with a limit register enforcing bounds. Worked example: base = 14000, limit = 4000; the program references logical address 346 -> physical 14346. A reference to logical 5000 exceeds the limit -> hardware trap -> memory-protection violation. Two registers, two comparisons, complete protection.",
              "Dynamic loading and dynamic linking extend flexibility further. Dynamic loading: a routine is loaded only when first called - a 5 MB program whose error-handler module (2 MB) never runs saves that 2 MB of memory every time. Dynamic linking postpones linking shared libraries to execution time: 100 processes can share one physical copy of libc, with a stub that locates the library on first call. Overlays are the historical alternative: a program too big for memory keeps only the currently needed code resident, swapping overlay pieces itself - programmer-managed virtual memory from the 1960s.",
              "For the exam: define the three binding times with what each fixes, state logical vs physical addresses, work the base-register example (14000 + 346 = 14346, and the limit-violation trap), and distinguish dynamic loading (per-routine, no linking change) from dynamic linking (per-library, shared copies).",
            ],
            bullets: [
              "Compile-time binding: absolute code, fixed addresses, no relocation.",
              "Load-time binding: relocatable code, loader patches addresses once.",
              "Execution-time binding: hardware maps every access; programs can move anytime.",
              "Logical address = CPU view; physical address = memory-unit view; MMU translates.",
              "Relocation register: physical = logical + base; limit register traps out-of-bounds.",
              "Worked example: base 14000, logical 346 -> 14346; logical 5000 with limit 4000 -> trap.",
              "Dynamic loading = load on first call; dynamic linking = share libraries at runtime.",
            ],
            table: {
              caption: "The three binding times.",
              headers: ["Binding time", "When addresses fix", "Flexibility", "Example"],
              rows: [
                ["Compile time", "Code generation", "None; must recompile to move", "MS-DOS .COM"],
                ["Load time", "Loader run", "Move between runs, not during", "Static relocation loaders"],
                ["Execution time", "Every access (hardware)", "Move/swap any time", "Paging, segmentation, modern OS"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Translation through a relocation register",
              caption:
                "Every memory reference passes the MMU; two comparisons give relocation plus protection in hardware.",
              steps: [
                { label: "CPU emits logical address 346", note: "User program sees only logical space" },
                { label: "MMU compares against limit", note: "346 > limit 4000? no -> continue" },
                { label: "Add base register 14000", note: "Physical = logical + relocation" },
                { label: "Physical address 14346 fetched", note: "Memory unit never sees logical values" },
                { label: "Out-of-range -> trap", note: "Logical 5000 with limit 4000 raises protection fault" },
              ],
            },
            callout: {
              type: "tip",
              title: "MMU is hardware, not software",
              body: "Say explicitly that the MMU is a hardware unit translating on every access. Answers that describe relocation as an OS software step lose the mechanism mark - the OS only sets the base/limit registers.",
            },
            keyTerms: [
              { term: "Address binding", definition: "Mapping program symbols to memory addresses at compile, load or execution time." },
              { term: "Logical address", definition: "The address generated by the CPU, visible to the user program." },
              { term: "Physical address", definition: "The actual memory-unit address after MMU translation." },
              { term: "MMU", definition: "Hardware unit translating logical to physical addresses at every access." },
              { term: "Relocation register", definition: "Base value added to every logical address; paired with a limit register for protection." },
            ],
            examQuestions: [
              {
                q: "Explain address binding times, logical vs physical addresses, and translation with a relocation register, with a worked example.",
                marks: 7,
                outline: [
                  "Three binding times and what each fixes",
                  "Why execution-time binding enables swapping",
                  "Logical vs physical address definitions",
                  "MMU as hardware on every access",
                  "Relocation + limit registers; protection check",
                  "Worked numbers: base 14000, logical 346 -> 14346; 5000 -> trap",
                  "Dynamic loading vs dynamic linking",
                ],
              },
              {
                q: "Differentiate logical and physical addresses.",
                marks: 2,
              },
              {
                q: "Compare dynamic loading and dynamic linking with examples.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Contiguous Allocation and Fragmentation",
            body: [
              "Contiguous allocation gives each process one unbroken memory region. Fixed (static) partitions divide memory into a preset number of pieces; a partition too small rejects the job, and one too large wastes the difference - internal fragmentation. Variable (dynamic) partitions carve memory on demand; when processes terminate, free holes of many sizes appear, and the allocator must pick one - external fragmentation: enough total free memory exists to satisfy a request, but not in one contiguous piece.",
              "The three hole-selection strategies decide which hole serves a request of size n. First fit: the first hole big enough - fastest search. Best fit: the smallest hole that fits - minimizes leftover, but leaves many tiny unusable slivers and requires scanning the whole list. Worst fit: the largest hole - leaves a large remainder usable by future requests. Worked example (classic): free holes 100K, 500K, 200K, 300K, 600K; request 212K. First fit takes 500K (leaves 288K). Best fit takes 300K (leaves 88K). Worst fit takes 600K (leaves 388K). First fit is generally fastest and, in simulation, among the best overall.",
              "Quantifying fragmentation: if the largest remaining hole is 200K and total free memory is 350K, a 250K job cannot start despite 350K free - that is external fragmentation in one sentence. Internal fragmentation example: page/fixed-partition systems waste, on average, half a partition per process; with 1 KB pages, a 10,000-byte process occupies 10 pages = 10,240 bytes, wasting 240 bytes internally (about 2.4%).",
              "Compaction is the cure for external fragmentation: shuffle resident processes to collect all free memory into one hole. Worked cost: moving each relocated process requires copying its memory and adjusting every address (only possible with execution-time binding); compaction is not always possible (I/O into fixed buffers pins processes) and is expensive. Alternatives: allow noncontiguous allocation - paging (section 4.3), which eliminates external fragmentation entirely at the price of page-table overhead. For the exam: define both fragmentations with numbers, run the 212K first/best/worst example, and state when compaction is possible.",
            ],
            bullets: [
              "Fixed partitions: internal fragmentation (wasted space inside a partition).",
              "Variable partitions: external fragmentation (total free memory scattered in holes).",
              "First fit: first adequate hole; fastest; usually good in practice.",
              "Best fit: smallest adequate hole; minimal leftover but many unusable slivers.",
              "Worst fit: largest hole; big remainders; simulation says poor overall.",
              "Worked example: holes 100/500/200/300/600K, request 212K -> first 500K, best 300K, worst 600K.",
              "Compaction merges holes; needs execution-time binding and movable processes.",
            ],
            table: {
              caption: "Fit strategies for request 212K against holes 100, 500, 200, 300, 600 K.",
              headers: ["Strategy", "Hole chosen", "Remainder", "Remark"],
              rows: [
                ["First fit", "500K", "288K", "Stops at first adequate hole"],
                ["Best fit", "300K", "88K", "Smallest adequate; sliver of 88K"],
                ["Worst fit", "600K", "388K", "Largest; remainder still useful"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Internal vs external fragmentation",
              caption:
                "Two different wastes with two different cures - the comparison examiners expect you to draw precisely.",
              left: {
                heading: "Internal fragmentation",
                items: [
                  "Waste INSIDE an allocated block",
                  "Cause: fixed-size allocations (pages, partitions)",
                  "Example: 10,000 B job in 1 KB pages wastes 240 B",
                  "Bounded: at most one page per allocation",
                  "Cure: smaller allocation units",
                ],
              },
              right: {
                heading: "External fragmentation",
                items: [
                  "Waste BETWEEN allocated blocks",
                  "Cause: variable-size allocation and frees",
                  "Example: 350K free but largest hole 200K; 250K job blocked",
                  "Grows unbounded over time",
                  "Cure: compaction or noncontiguous allocation (paging)",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Which fragmentation belongs to which scheme",
              body: "Fixed partitions and paging cause INTERNAL fragmentation; variable partitions cause EXTERNAL fragmentation. Saying 'paging causes external fragmentation' inverts the whole topic - paging's headline benefit is that it has none.",
            },
            keyTerms: [
              { term: "Internal fragmentation", definition: "Unused space inside an allocated block due to fixed-size allocation." },
              { term: "External fragmentation", definition: "Free memory scattered in holes too small to use individually." },
              { term: "First fit", definition: "Allocate the first hole large enough for the request." },
              { term: "Best fit", definition: "Allocate the smallest hole that satisfies the request." },
              { term: "Compaction", definition: "Relocating processes to merge all free memory into one contiguous hole." },
            ],
            examQuestions: [
              {
                q: "Explain contiguous allocation, first/best/worst fit with the 212K example, and internal vs external fragmentation with cures.",
                marks: 7,
                outline: [
                  "Fixed vs variable partitions",
                  "Internal vs external fragmentation definitions",
                  "Numeric examples: 240 B internal; 350K-free/200K-hole external",
                  "Fit strategies defined",
                  "Worked 100/500/200/300/600K, 212K trace",
                  "Compaction: requirement (execution-time binding), cost",
                  "Paging as the structural cure",
                ],
              },
              {
                q: "Which fragmentation does paging suffer from, and how much?",
                marks: 2,
              },
              {
                q: "Why does compaction require execution-time binding?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Paging",
            body: [
              "Paging removes external fragmentation by breaking both sides of memory into equal pieces: physical memory into frames, logical memory into pages of the same size (powers of two, typically 4 KB). Any page can go into any free frame, so free memory never becomes unusably scattered. The OS keeps a page table per process: entry p holds frame f(p), plus protection bits (read/write/execute) and valid/invalid bits.",
              "Address translation: a logical address splits into (page number, offset). With page size 2^k, the low k bits are the offset and the high bits the page number. Worked example: 16-bit logical addresses, page size 1 KB (1024 = 2^10), so the offset is the low 10 bits and the page number the high 6 bits (64 pages). Address 5423: 5423 / 1024 = 5 remainder 303, so page 5, offset 303. If page 5 resides in frame 9, the physical address = 9 * 1024 + 303 = 9216 + 303 = 9519. Write this division explicitly in the exam; the remainder is the offset, never a rounded value.",
              "Costs and bookkeeping: the page table itself is memory overhead (one entry per page - for 4 KB pages over a 4 GB space, a million entries), and every access becomes two memory accesses (page table + data) unless a TLB accelerates it (section 4.4). Paging has no external fragmentation: any free frame serves any page. It does have internal fragmentation: the last page is usually partly empty - on average half a page per process (about 2 KB waste with 4 KB pages). Free frames are tracked by a bitmap or free list.",
              "Hardware support: the page-table base register (PTBR) points to the table; a TLB caches recent translations. Protection is cheap: the valid/invalid bit marks pages not allocated (traps illegal references), and protection bits implement read-only pages. For the exam: define frames/pages/page table, work the 5423 -> page 5, offset 303 -> frame 9 -> 9519 example, list the two-access problem, and state internal (half page) vs external (none) fragmentation for paging.",
            ],
            bullets: [
              "Frames: physical memory blocks; pages: logical memory blocks; equal size (2^k, e.g. 4 KB).",
              "Page table per process: entry p -> frame f(p), plus valid/invalid and protection bits.",
              "Translation: page = address div 2^k; offset = address mod 2^k; physical = frame * 2^k + offset.",
              "Worked: 16-bit addresses, 1 KB pages; 5423 -> page 5, offset 303; frame 9 -> physical 9519.",
              "No external fragmentation - any free frame fits any page.",
              "Internal fragmentation: average half a page per process.",
              "PTBR points to the table; TLB caches translations; two accesses without a TLB.",
            ],
            table: {
              caption: "Translation of logical address 5423 (1 KB pages, page 5 in frame 9).",
              headers: ["Step", "Computation", "Result"],
              rows: [
                ["Page size", "1024 bytes (2^10)", "offset = low 10 bits"],
                ["Page number", "5423 div 1024", "5"],
                ["Offset", "5423 mod 1024", "303"],
                ["Frame lookup", "page table entry 5", "frame 9"],
                ["Physical address", "9 * 1024 + 303", "9519"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Paged address translation",
              caption:
                "Every reference flows through this pipeline; a TLB hit short-circuits the middle two stages.",
              stages: [
                { label: "Logical address (16 bits)", note: "5423 in the example" },
                { label: "Split: page p | offset d", note: "p = 5 (high 6 bits), d = 303 (low 10 bits)" },
                { label: "Index page table[p] -> frame f", note: "PTBR locates the table; f = 9" },
                { label: "Compose physical address", note: "f * 1024 + d = 9519" },
                { label: "Access memory + check bits", note: "Valid bit and protection checked during lookup" },
              ],
            },
            callout: {
              type: "exam",
              title: "Divide, never round",
              body: "The offset is the REMAINDER: 5423 = 5 * 1024 + 303. Writing page 5.3 or rounding the offset loses the arithmetic marks. Always show division and remainder as separate lines.",
            },
            keyTerms: [
              { term: "Frame", definition: "A fixed-size block of physical memory." },
              { term: "Page", definition: "A fixed-size block of logical address space, same size as a frame." },
              { term: "Page table", definition: "Per-process array mapping page numbers to frame numbers with protection bits." },
              { term: "PTBR", definition: "Page-Table Base Register pointing to the current process's page table." },
              { term: "Valid/invalid bit", definition: "Page-table bit marking whether a page is legally mapped." },
            ],
            examQuestions: [
              {
                q: "Explain paging and translate logical address 5423 with 1 KB pages where page 5 maps to frame 9.",
                marks: 7,
                outline: [
                  "Frames vs pages; equal sizes; powers of two",
                  "Page table role and protection bits",
                  "Split: page = div, offset = mod",
                  "5423 -> page 5, offset 303 (show division)",
                  "Frame lookup -> frame 9",
                  "Physical = 9*1024 + 303 = 9519",
                  "Fragmentation verdict: no external, half-page internal",
                ],
              },
              {
                q: "Why does paging have no external fragmentation?",
                marks: 2,
              },
              {
                q: "With 4 KB pages, what is the expected internal fragmentation per process?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Page-Table Structures and the TLB",
            body: [
              "The flat page table does not scale: a 32-bit address space with 4 KB pages needs 2^20 = 1,048,576 entries (4 MB at 4 bytes each) per process, and a 64-bit space would need astronomically more. Hierarchical (multi-level) page tables page the page table itself: a two-level scheme splits the address into p1 (outer index), p2 (inner index), offset; only the outer table is always resident, inner tables are allocated on demand - sparse address spaces waste nothing. The x86 two-level scheme uses 10 + 10 + 12 bit splits.",
              "Worked example: 32-bit address, 4 KB pages, two-level table with 10-bit outer and 10-bit inner indexes. Address 0x00403004: p1 = 0x001 = 1, p2 = 0x003 = 3, offset = 0x004 = 4. Lookup: outer[1] gives the address of inner table 1 (allocated because some page in that 4 MB region is used); inner[3] gives frame f; physical = f * 4096 + 4. Two memory accesses minimum even on TLB hit misses - the multi-level scheme trades lookup time for space.",
              "Inverted page tables invert the mapping: one global table entry per FRAME, keyed by (process-id, page-number), searched (often hashed) for the physical frame. Memory overhead falls from one entry per page per process to one entry per frame globally - but the table is shared, translation needs a search, and per-process reverse mapping for swapping becomes hard. Hashed page tables hash the virtual page number to a chain of entries, suiting sparse 64-bit spaces.",
              "The TLB (translation lookaside buffer) is the performance answer: a small associative cache of recent (page, frame) pairs, checked in parallel before the page table. Effective access time: TLB hit ratio h, TLB lookup t, memory access m. EAT = h*(t + m) + (1-h)*(t + 2m). Worked example: h = 0.80, t = 20 ns, m = 100 ns: EAT = 0.80 * 120 + 0.20 * 220 = 96 + 44 = 140 ns - a 40% slowdown vs the ideal 100 ns; at h = 0.98, EAT = 0.98*120 + 0.02*220 = 117.6 + 4.4 = 122 ns. For the exam: the space problem, two-level worked lookup, inverted-table trade-offs, and the EAT formula with both numbers.",
            ],
            bullets: [
              "Flat table cost: 32-bit/4 KB pages = 2^20 entries = 4 MB per process.",
              "Two-level table: address = p1 | p2 | offset; inner tables allocated on demand.",
              "Worked: 0x00403004 -> p1 = 1, p2 = 3, offset = 4; two lookups then compose.",
              "Inverted page table: one entry per frame keyed by (pid, page); small but searchable.",
              "Hashed page tables: hash page number, chain entries; suits sparse 64-bit spaces.",
              "TLB: associative cache of translations; hit avoids the table walk.",
              "EAT = h(t+m) + (1-h)(t+2m); 80% hit with 20/100 ns gives 140 ns.",
            ],
            table: {
              caption: "Effective access time as the TLB hit ratio changes (t = 20 ns, m = 100 ns).",
              headers: ["Hit ratio h", "EAT computation", "EAT"],
              rows: [
                ["0.80", "0.80*120 + 0.20*220", "140 ns"],
                ["0.90", "0.90*120 + 0.10*220", "130 ns"],
                ["0.98", "0.98*120 + 0.02*220", "122 ns"],
                ["1.00", "120", "120 ns (lower bound with TLB)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The translation hierarchy for large address spaces",
              caption:
                "Index 0 is the top: the fastest, smallest structure is consulted first; each lower level trades speed for coverage.",
              layers: [
                { label: "TLB (associative cache)", note: "Dozens of entries; parallel check; nanoseconds" },
                { label: "Level-1 page table (always resident)", note: "Outer index p1 selects an inner table" },
                { label: "Level-2 tables (on demand)", note: "Inner index p2 -> frame; sparse spaces allocate few" },
                { label: "Inverted / hashed table", note: "Alternative for 64-bit spaces: one entry per frame, searched" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the EAT formula before substituting",
              body: "EAT = h(t + m) + (1 - h)(t + 2m). State it symbolically first, then substitute h = 0.80, t = 20, m = 100 to get 140 ns. Examiners award the formula mark even when the arithmetic slips; the reverse never holds.",
            },
            keyTerms: [
              { term: "TLB", definition: "Translation lookaside buffer: associative cache of recent page-to-frame translations." },
              { term: "Two-level page table", definition: "Page table of page tables; outer and inner indexes with on-demand inner tables." },
              { term: "Inverted page table", definition: "One entry per physical frame keyed by (process, page) pair." },
              { term: "Effective access time", definition: "Average memory access time including TLB and page-table overheads." },
              { term: "Associative memory", definition: "Parallel-search memory that matches a key across all entries at once." },
            ],
            examQuestions: [
              {
                q: "Why do large address spaces need multi-level or inverted page tables? Explain both and compute EAT for a TLB with 80% hit ratio, 20 ns lookup, 100 ns memory.",
                marks: 7,
                outline: [
                  "Flat-table cost: 2^20 entries, 4 MB",
                  "Two-level scheme: p1|p2|offset, worked lookup",
                  "Space saved by on-demand inner tables",
                  "Inverted table: per-frame entries, search cost",
                  "Hashed variant for 64-bit spaces",
                  "TLB role and EAT formula",
                  "Numeric: 140 ns; and 122 ns at 98% hit",
                ],
              },
              {
                q: "What is stored in a TLB entry?",
                marks: 2,
              },
              {
                q: "Compare hierarchical and inverted page tables in three points.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Segmentation",
            body: [
              "Segmentation supports the programmer's and compiler's view of memory: a program is naturally a set of logical units - code segment, data segment, stack, heap, maybe a symbol table - each a linear block of varying size. A logical address becomes a pair (segment number s, offset d). The segment table has one entry per segment with two fields: base (physical start) and limit (length). Translation: physical = base[s] + d, with a hardware check d < limit[s] that traps on violation - protection comes free per segment.",
              "Worked example: segment table - segment 0 (code): base 1400, limit 1000; segment 1 (data): base 6300, limit 400; segment 2 (stack): base 4300, limit 1100. Reference (0, 300): physical = 1400 + 300 = 1700, inside limit. Reference (1, 852): 852 >= limit 400 -> trap: protection violation (trying to read beyond the data segment). Reference (2, 500): 4300 + 500 = 4800. Each segment independently relocatable and protectable - share a read-only code segment between processes by pointing their segment entries at the same base.",
              "Segmentation vs paging is the guaranteed comparison question. Paging is invisible to the programmer, fixed-size, and exists to solve external fragmentation; segmentation is visible, variable-size, and exists to match logical structure - programs and libraries are naturally segment-shaped. Paging suffers internal fragmentation (half a page average); segmentation suffers external fragmentation (variable holes appear as segments come and go) and needs compaction or allocation strategies. Sharing and protection are finer-grained in segmentation (per logical unit) than in paging (per 4 KB block).",
              "Modern systems combine both: x86-64 uses segmentation minimally (flat segments) with paging doing the heavy lifting; historically Intel x86 used segment:offset with per-segment descriptors. For the exam: define the segment table with base/limit, work the three references above including the trap, produce the paging-vs-segmentation comparison table, and note that combined systems use paging for allocation and segmentation for protection.",
            ],
            bullets: [
              "Logical address = (segment s, offset d); segment table entry = base + limit.",
              "Translation: physical = base[s] + d; hardware checks d < limit[s].",
              "Worked: (0,300) -> 1700; (1,852) -> trap (limit 400); (2,500) -> 4800.",
              "Segments match logical units: code, data, stack, heap, symbol table.",
              "Sharing: point two processes' entries at the same read-only segment base.",
              "Segmentation has external fragmentation (variable sizes); paging has internal.",
              "x86-64 uses flat segments + paging; older x86 used real segment:offset.",
            ],
            table: {
              caption: "Segment table of the worked example.",
              headers: ["Segment", "Base", "Limit", "Contents"],
              rows: [
                ["0", "1400", "1000", "Code (read/execute)"],
                ["1", "6300", "400", "Data (read/write)"],
                ["2", "4300", "1100", "Stack"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Paging vs segmentation",
              caption:
                "Same memory, opposite philosophies: fixed invisible blocks versus visible logical units.",
              left: {
                heading: "Paging",
                items: [
                  "Fixed-size pages and frames",
                  "Invisible to the programmer",
                  "Goal: no external fragmentation",
                  "Internal fragmentation: half a page on average",
                  "Protection per 4 KB page, not per unit",
                ],
              },
              right: {
                heading: "Segmentation",
                items: [
                  "Variable-size logical segments",
                  "Visible: code, data, stack, heap",
                  "Goal: match program structure",
                  "External fragmentation; may need compaction",
                  "Per-segment base/limit sharing and protection",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The trap is part of the answer",
              body: "Segmentation questions love the out-of-range reference. Always include one: (1, 852) with limit 400 traps. The limit-check line shows you know protection is built into the translation, not bolted on by software.",
            },
            keyTerms: [
              { term: "Segment", definition: "A variable-size logical unit of a program such as code, data or stack." },
              { term: "Segment table", definition: "Per-process table of base and limit for each segment." },
              { term: "Base / limit", definition: "Physical start and length of a segment; limit enforces protection." },
              { term: "Segmentation fault", definition: "The trap raised by an offset exceeding the segment limit." },
              { term: "Segment sharing", definition: "Multiple processes mapping the same segment base for shared code or libraries." },
            ],
            examQuestions: [
              {
                q: "Explain segmentation with the segment table, work three address translations including a protection trap, and compare segmentation with paging.",
                marks: 7,
                outline: [
                  "Logical view: segments as program units",
                  "Segment table: base + limit entries",
                  "Translation: base[s] + d with limit check",
                  "Worked: (0,300)->1700; (1,852)->trap; (2,500)->4800",
                  "Sharing via common base",
                  "Paging vs segmentation comparison table",
                  "Combined modern use: paging allocates, segmentation protects",
                ],
              },
              {
                q: "What two fields does each segment-table entry hold?",
                marks: 2,
              },
              {
                q: "Why does segmentation suffer external fragmentation while paging does not?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Virtual Memory and Demand Paging",
            body: [
              "Virtual memory decouples the logical address space from physical memory: a process may reference pages not currently resident, and the OS brings them in only when touched - demand paging. The valid/invalid bit starts as invalid for every page; on the first reference the MMU traps to the OS (page fault), which locates the page on disk, reads it into a free frame, updates the page table to valid, and restarts the faulting instruction. The program's total footprint can exceed RAM; only the working portion needs to be resident.",
              "The economics work because of locality of reference: programs cluster accesses in small regions of code and data for long intervals, so a modest resident set serves most references. Formal cost: effective access time = (1 - p) * memory_time + p * pagefault_time, where p is the fault rate. Worked example: memory access 100 ns, page-fault service 8 ms = 8,000,000 ns. At p = 0.001 (one fault per 1000 accesses): EAT = 0.999 * 100 + 0.001 * 8,000,000 = 99.9 + 8000 = 8099.9 ns ~ 8.1 microseconds - an 81-fold slowdown. Even a 1-in-a-million fault rate gives EAT ~ 100 + 8 = 108 ns: fault service is ~80,000x a memory access, so every reduction in p matters enormously.",
              "The page-fault handling sequence, step by step: (1) reference to invalid PTE traps; (2) OS checks the reference is legal (else terminate - a genuine segfault); (3) find a free frame, or run replacement (section 4.7) if none; (4) schedule a disk read of the page; (5) while waiting, the process blocks and the CPU runs others; (6) disk interrupt marks the page table valid; (7) restart the faulting instruction. Optimizations: only pages written need disk writeback on eviction (dirty/modified bit), and copy-on-write makes fork cheap - parent and child share pages read-only until the first write duplicates just that page.",
              "For the exam: define virtual memory and demand paging, walk the seven fault-handling steps, present the EAT computation with p = 0.001 -> 8.1 us (and note the 1-in-a-million case), and name dirty bit and copy-on-write as the two refinements. The EAT numbers convert a descriptive answer into a quantitative one.",
            ],
            bullets: [
              "Virtual memory: logical space larger than RAM; pages load on demand.",
              "Demand paging: valid/invalid bit; first touch faults the page in.",
              "Locality of reference justifies keeping only the working set resident.",
              "EAT = (1-p)*t_mem + p*t_fault; fault service ~8 ms dominates.",
              "Worked: p = 0.001 -> EAT = 8099.9 ns (81x slowdown); p = 1e-6 -> 108 ns.",
              "Fault handling: trap -> legality -> frame -> disk read -> update PTE -> restart.",
              "Dirty bit avoids writeback of clean pages; copy-on-write makes fork cheap.",
            ],
            table: {
              caption: "Effective access time vs fault rate (memory 100 ns, fault service 8 ms).",
              headers: ["Fault rate p", "EAT", "Slowdown vs 100 ns"],
              rows: [
                ["0 (no faults)", "100 ns", "1x"],
                ["0.000001", "108 ns", "1.08x"],
                ["0.0001", "900 ns", "9x"],
                ["0.001", "8099.9 ns (~8.1 us)", "81x"],
                ["0.01", "80099.9 ns (~80 us)", "801x"],
              ],
            },
            codeExample: {
              language: "pseudo",
              caption: "Page-fault handler (kernel side)",
              code:
                "on page fault(vaddr):\n    p = page_number(vaddr)\n    if not legal_reference(current_process, p):\n        terminate(current_process)        /* genuine segfault */\n    frame = get_free_frame()\n    if frame == NONE:\n        frame = replace_page()            /* section 4.7 */\n        if dirty(page[frame]):\n            write_frame_to_disk(frame)    /* dirty bit saves clean pages */\n    schedule_disk_read(p, frame)\n    block(current_process)                /* CPU runs others meanwhile */\n    /* disk interrupt: */\n    set_page_table_entry(p, frame, valid=true, dirty=false)\n    restart(current_process)              /* re-execute faulting instruction */",
            },
            diagram: {
              kind: "flow",
              title: "Life of a page fault",
              caption:
                "Seven steps from trap to restart; the process sleeps through the disk read while others use the CPU.",
              steps: [
                { label: "Reference to invalid page", note: "MMU raises the page-fault trap" },
                { label: "OS validates the reference", note: "Illegal -> segfault terminate" },
                { label: "Allocate frame", note: "Free list, or replacement if memory full" },
                { label: "Disk read of the page", note: "Process blocks; scheduler runs others" },
                { label: "PTE set valid; instruction restarted", note: "The very instruction re-executes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always compute, never just describe",
              body: "Demand-paging questions reward the EAT line: (0.999)(100) + (0.001)(8,000,000) = 8099.9 ns. One fault per thousand accesses slows the machine 81-fold - that single number proves demand paging lives or dies by the fault rate.",
            },
            keyTerms: [
              { term: "Virtual memory", definition: "The technique of running processes whose logical size exceeds physical memory." },
              { term: "Demand paging", definition: "Loading a page from disk only when it is first referenced." },
              { term: "Page fault", definition: "The trap raised when a referenced page is not resident." },
              { term: "Dirty bit", definition: "Page-table bit set on write; clean pages need no disk writeback." },
              { term: "Copy-on-write", definition: "Share pages read-only after fork; duplicate on the first write." },
            ],
            examQuestions: [
              {
                q: "Explain demand paging and page-fault handling, and compute EAT for fault rate 0.001 with 100 ns memory and 8 ms fault service.",
                marks: 7,
                outline: [
                  "Virtual memory concept; exceeds physical RAM",
                  "Valid/invalid bit and the fault trap",
                  "Seven handling steps with restart semantics",
                  "Locality justification",
                  "EAT formula and substitution: 8099.9 ns",
                  "Sensitivity: 1e-6 fault rate -> 108 ns",
                  "Dirty bit and copy-on-write refinements",
                ],
              },
              {
                q: "What does the valid/invalid bit in a page-table entry mean?",
                marks: 2,
              },
              {
                q: "Why does copy-on-write make fork() cheap?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.7",
            title: "Page Replacement Algorithms",
            body: [
              "When a fault strikes with no free frame, a resident page must be chosen as the victim. FIFO replaces the page loaded earliest - trivial to implement with a queue, but ignores usage: a heavily used old page can be evicted. Optimal (OPT, Belady's algorithm) replaces the page not referenced for the longest future time - provably minimal faults, but requires future knowledge, so it serves as the benchmark. LRU approximates optimality by replacing the page unused for the longest past time, exploiting locality; implementations use counters (timestamp each access) or a reference-bit stack.",
              "Worked example - the classic reference string 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1 with 3 frames: FIFO produces 15 page faults; LRU produces 12; Optimal produces 9. The ordering matters: FIFO does worse than LRU because it evicts by age not use, and both trail Optimal, which never evicts a soon-needed page. Approximations of LRU used in real kernels: the second-chance (clock) algorithm gives each frame a reference bit; on eviction, clear the bit and skip the page once if set - cheap LRU-like behavior without timestamps.",
              "Belady's anomaly is FIFO's signature pathology: for the reference string 1,2,3,4,1,2,5,1,2,3,4,5, FIFO yields 9 faults with 3 frames but 10 faults with 4 frames - adding memory makes faults worse. It cannot happen to stack algorithms (LRU, Optimal): with more frames, a stack algorithm's n-frame set is always a subset of its (n+1)-frame set, so faults never increase. Mentioning this theorem is what separates a 7-mark answer from a list of algorithms.",
              "LRU's cost problem: exact timestamps on every access are expensive, hence the reference-bit approximations (second chance, enhanced second chance using (referenced, modified) pairs). For the exam: run the classic string and report 15/12/9, show at least FIFO's frame trace for the first several references, state the Belady example with 9-vs-10 faults, and name second-chance/clock as the practical LRU approximation.",
            ],
            bullets: [
              "Victim selection needed when a fault occurs with no free frame.",
              "FIFO: evict oldest-loaded page; simple; ignores usage.",
              "Optimal: evict the page not needed for the longest future; benchmark only.",
              "LRU: evict least recently used; locality-based approximation of optimal.",
              "Classic string, 3 frames: FIFO 15, LRU 12, Optimal 9 faults.",
              "Belady's anomaly: FIFO 1,2,3,4,1,2,5,1,2,3,4,5 gives 9 faults at 3 frames, 10 at 4.",
              "Stack algorithms (LRU, OPT) are immune to Belady's anomaly.",
              "Second chance / clock: reference-bit approximation of LRU in real kernels.",
            ],
            table: {
              caption: "Fault counts on the classic 20-reference string with 3 frames.",
              headers: ["Algorithm", "Policy", "Page faults", "Practical status"],
              rows: [
                ["FIFO", "Oldest loaded evicted", "15", "Trivial; anomaly-prone"],
                ["LRU", "Least recently used evicted", "12", "Standard approximation"],
                ["Optimal", "Longest future gap evicted", "9", "Benchmark; needs future knowledge"],
                ["Second chance", "Reference bit + circular scan", "~12-14", "Real kernel default"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Evaluating a replacement algorithm on a reference string",
              caption:
                "The exam procedure for every replacement numerical: walk the string, and count only the loads.",
              steps: [
                { label: "Take next reference r", note: "Walk the string left to right" },
                { label: "Is r resident?", note: "Hit: no fault, update LRU info" },
                { label: "Fault: frames full?", note: "Free frame: just load it" },
                { label: "Choose victim by policy", note: "FIFO age / LRU recency / OPT future" },
                { label: "Load r into victim frame; count++", note: "The fault counter increments here only" },
              ],
            },
            callout: {
              type: "exam",
              title: "15, 12, 9 - the numbers to memorize",
              body: "For the classic string with 3 frames: FIFO 15, LRU 12, Optimal 9. Reproduce FIFO's trace for the first six references in your answer (7, 0, 1 load; 2 evicts 7; 0, 3 hit-then-evict-0...). Even a partial trace proves you can run the algorithm.",
            },
            keyTerms: [
              { term: "Page replacement", definition: "Choosing a resident page to evict when a fault needs a frame." },
              { term: "FIFO", definition: "Replaces the page that has been resident longest." },
              { term: "LRU", definition: "Replaces the page unused for the longest time." },
              { term: "Optimal (Belady)", definition: "Replaces the page with the longest future reference gap; minimal faults." },
              { term: "Belady's anomaly", definition: "FIFO fault count increasing when frames are added." },
            ],
            examQuestions: [
              {
                q: "Compare FIFO, LRU and Optimal on the reference string 7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1 with 3 frames; explain Belady's anomaly.",
                marks: 7,
                outline: [
                  "Frame-trace procedure for one algorithm (FIFO shown)",
                  "Fault counts: FIFO 15, LRU 12, OPT 9",
                  "Why FIFO trails LRU (age vs use)",
                  "LRU as optimal's practical approximation",
                  "Belady example: 9 faults at 3 frames, 10 at 4",
                  "Stack-algorithm theorem as the explanation",
                  "Second chance / clock as real-world LRU",
                ],
              },
              {
                q: "State Belady's anomaly and which algorithms suffer it.",
                marks: 2,
              },
              {
                q: "How does the second-chance (clock) algorithm approximate LRU?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.8",
            title: "Frame Allocation, Thrashing and the Working Set",
            body: [
              "With multiple processes sharing frames, allocation policy matters. Equal allocation divides frames evenly; proportional allocation gives each process frames in proportion to its size (or its priority). Global replacement lets a faulting process steal any frame system-wide; local replacement restricts it to its own pool. Global uses memory better but lets one process degrade others; local isolates but can strand frames in idle processes.",
              "Thrashing: a process is busy swapping pages in and out rather than computing - its resident set is smaller than its working set. The system-level spiral: CPU utilization falls because processes wait on paging; the scheduler sees low utilization and raises the degree of multiprogramming; new processes take frames from running ones, deepening faults; utilization falls further. Worked example: physical memory 40 frames, two processes each with a working set of 25 frames; both resident means 50 frames demanded of 40 - each is 15 frames short and faults continuously. Utilization approaches zero while paging traffic saturates the disk.",
              "The working set model defines the set of pages touched in the last Delta references (Delta ~ 10,000; the working-set window). A process needs D = sum of working-set sizes; if D > total frames m, the OS suspends (swaps out) processes until D <= m. Worked numbers: three processes with working sets 12, 15 and 10 pages and 35 frames available: D = 37 > 35, so suspend the smallest or least-active process (its 10 or 15 frames free up) and thrashing stops. Page-fault frequency (PFF) control is the operational alternative: if the fault rate exceeds an upper bound, grant more frames; below a lower bound, take frames away.",
              "For the exam: define thrashing with the CPU-utilization spiral, present the 40-frames/two-25-working-set arithmetic, define the working set and window, show the D = 12 + 15 + 10 = 37 vs 35 suspension decision, and give global vs local replacement in one line each.",
            ],
            bullets: [
              "Allocation schemes: equal, proportional (by size or priority).",
              "Global replacement: steal any frame; local: steal only from own pool.",
              "Thrashing: resident set < working set; process pages more than it computes.",
              "Spiral: low CPU utilization -> more processes admitted -> fewer frames each -> more faults.",
              "Worked: 40 frames, two processes needing 25 each -> both starve.",
              "Working set: pages referenced in the last Delta references (Delta ~ 10,000).",
              "D = sum of working sets; if D > m, suspend processes until it fits (37 vs 35 example).",
              "PFF control: fault-rate upper/lower bounds adjust each process's frames.",
            ],
            table: {
              caption: "Working-set admission check: m = 35 frames.",
              headers: ["Process", "Working set size", "Running total D", "Decision"],
              rows: [
                ["P1", "12", "12", "Admit"],
                ["P2", "15", "27", "Admit"],
                ["P3", "10", "37 > 35", "Suspend P3 until frames free"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The thrashing spiral",
              caption:
                "The vicious loop that turns memory shortage into total collapse; every arrow makes the next one worse.",
              steps: [
                { label: "Resident sets below working sets", note: "Fault rates climb" },
                { label: "CPU utilization drops", note: "Processes queue on the paging disk" },
                { label: "Scheduler raises multiprogramming", note: "Misreads paging as idleness" },
                { label: "New processes take frames", note: "Existing processes shrink further" },
                { label: "Faults deepen: back to step 2", note: "Break the loop by suspending processes" },
              ],
            },
            callout: {
              type: "warning",
              title: "Low CPU utilization is the wrong signal",
              body: "The scheduler's mistake that causes thrashing: it interprets paging-blocked processes as 'CPU free' and admits more jobs. State this explicitly - the fix (working set / suspend) is worth no marks unless the misdiagnosis is named.",
            },
            keyTerms: [
              { term: "Thrashing", definition: "A state where processes spend more time paging than executing." },
              { term: "Working set", definition: "The set of pages referenced in the most recent Delta references." },
              { term: "Working-set window", definition: "The Delta-sized observation interval defining the working set." },
              { term: "Global replacement", definition: "A faulting process may take any frame in the system." },
              { term: "Page-fault frequency control", definition: "Adjusting a process's frames from its measured fault rate." },
            ],
            examQuestions: [
              {
                q: "What is thrashing? Explain the utilization spiral and how the working-set model prevents it, with the 40-frame and D = 37 examples.",
                marks: 7,
                outline: [
                  "Thrashing definition: paging dominates computing",
                  "Spiral: low utilization -> more jobs -> fewer frames -> more faults",
                  "Worked: 40 frames, two 25-frame working sets",
                  "Working set and Delta window defined",
                  "Admission check: D = 12 + 15 + 10 = 37 vs m = 35",
                  "Suspension decision",
                  "PFF as the operational alternative; global vs local replacement",
                ],
              },
              {
                q: "Define the working set of a process.",
                marks: 2,
              },
              {
                q: "Differentiate global and local page replacement.",
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
      title: "File and I/O Systems",
      summary:
        "The storage half of the subject: the file concept and its operations, access methods, directory structures from single-level to general graphs, allocation methods (contiguous, linked, indexed) with access-cost arithmetic, free-space management, protection with access matrices and ACLs, and disk scheduling - FCFS, SSTF, SCAN, C-SCAN and C-LOOK on the classic 53-head queue, plus RAID levels.",
      chapter: {
        number: "05",
        title: "Files, Directories and Disks",
        intro:
          "Unit V covers everything between an open() call and the spinning platter: what a file is and how it is accessed, how directories are organized, the three allocation methods and their access costs, how free space is tracked, how access is protected, and how the disk arm is scheduled - with the classic FCFS/SSTF/SCAN/C-LOOK head-movement totals computed.",
        inOneBreath:
          "A file = named collection with attributes, manipulated via open/read/write/close; access is sequential or direct; directories climb from single-level to tree to acyclic graph with links; allocation is contiguous (fast, grows badly), linked (no external frag, slow random) or indexed (block table, fast random, index overhead); free space is bitmap or linked list; protection uses access matrix realized as ACLs or capability lists; disk scheduling minimizes seek: FCFS 640, SSTF 236, SCAN 236, C-SCAN 359, C-LOOK 299 on the classic queue; RAID trades capacity for reliability and speed.",
        sections: [
          {
            number: "5.1",
            title: "File Concept, Attributes and Operations",
            body: [
              "A file is a named collection of related information recorded on secondary storage - the smallest unit of logical storage the user can control. Files have attributes: name (human-readable, the only attribute kept in human form), type (extension or magic number), location (pointer to the device and place), size, protection (access-control bits), and timestamps/user ID (creation, modification, last access). Internally, the file system pairs each file with a FCB (file control block, the inode in UNIX) holding the metadata; directories map names to FCBs.",
              "Operations are the syscall surface: create, delete, open, close, read, write, reposition (lseek), truncate, and attributes calls (stat, chmod). Open is the efficiency mechanism: open() searches the directory once, copies the FCB into the in-memory open-file table, and returns an index (file descriptor); subsequent read/write use the descriptor with no directory searches. The open-file table tracks a per-process pointer (current position) and an open-count per file; when the last process closes it, the metadata is written back and the entry removed.",
              "Worked example: a program opens 'data.txt' (open: directory search -> FCB to open-file table -> descriptor 3 returned), reads 4 KB (read(3, buf, 4096): uses the FCB position pointer, advances it by 4096), repositions (lseek(3, 8192, SEEK_SET): pointer jumps to byte 8192 without reading the skipped bytes), reads again, closes. Five syscalls, exactly one directory search - the whole point of open/close design. If two processes open the same file, the open-count reaches 2 and the file system maintains separate position pointers per process but shared metadata.",
              "File types and structures matter for the exam: most systems support byte sequences (UNIX's philosophy - every file is bytes; interpretation is the application's job) while also recognizing executables, archives and device files; extensions (.c, .txt, .exe) are conventions, not enforcement. For a 7-mark answer: define file with six attributes, list the operations, explain the open-file table with the descriptor trace above, and state the byte-sequence philosophy.",
            ],
            bullets: [
              "File: named collection of related data on secondary storage; smallest user-managed unit.",
              "Attributes: name, type, location, size, protection, timestamps/owner.",
              "FCB/inode: on-disk metadata record paired with each file.",
              "Operations: create, open, read, write, lseek, truncate, close, delete, stat.",
              "open() caches the FCB in an open-file table; read/write use descriptors, no directory search.",
              "Per-process position pointer; shared metadata; open-count determines teardown.",
              "UNIX philosophy: all files are byte sequences; extensions are conventions.",
            ],
            table: {
              caption: "The open/close cycle for 'data.txt'.",
              headers: ["Call", "Kernel action", "Return"],
              rows: [
                ["open('data.txt', R)", "Directory search; FCB -> open-file table; count = 1", "Descriptor 3"],
                ["read(3, buf, 4096)", "Read at position 0; position -> 4096", "4096 bytes"],
                ["lseek(3, 8192, SET)", "Position -> 8192, no I/O", "8192"],
                ["read(3, buf, 4096)", "Read at 8192; position -> 12288", "4096 bytes"],
                ["close(3)", "Count = 0: write back metadata, free entry", "0"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The file lifecycle",
              caption:
                "Every file passes through this loop; open and close are the bookkeeping hinges around the read/write work.",
              steps: [
                { label: "create", note: "Directory entry + FCB allocated" },
                { label: "open", note: "FCB copied to open-file table; descriptor issued" },
                { label: "read / write / lseek", note: "Position pointer advances or jumps" },
                { label: "close", note: "Metadata written back; entry freed when count hits 0" },
                { label: "delete", note: "Directory entry removed; blocks returned to free list" },
              ],
            },
            callout: {
              type: "exam",
              title: "Open once, search once",
              body: "The design insight worth a mark: the entire purpose of open() is to pay the directory-search cost once and amortize it over every subsequent read. State that sentence in any file-operations answer.",
            },
            keyTerms: [
              { term: "File", definition: "A named collection of related information on secondary storage." },
              { term: "FCB / inode", definition: "The metadata record (size, location, protection, timestamps) for a file." },
              { term: "Open-file table", definition: "In-memory table of currently open files, per-process position and open-counts." },
              { term: "File descriptor", definition: "The small integer index a process uses to reference an open file." },
              { term: "lseek", definition: "Reposition the file pointer without transferring data." },
            ],
            examQuestions: [
              {
                q: "Define a file with its attributes, list file operations, and explain the open-file table with an open/read/lseek/close trace.",
                marks: 7,
                outline: [
                  "File definition; six attributes",
                  "FCB/inode as metadata holder",
                  "Operation list (create..delete)",
                  "open(): directory search once, descriptor issued",
                  "Trace: open, read 4 KB, lseek 8192, read, close",
                  "Per-process position vs shared metadata; open-count",
                  "Byte-sequence philosophy and extensions",
                ],
              },
              {
                q: "What is a file control block and what does it contain?",
                marks: 2,
              },
              {
                q: "Why does lseek not perform any disk I/O?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "File Access Methods",
            body: [
              "Sequential access models a tape: records are read one after another; a read pointer advances, and 'backing up' means rewinding N records. It is the natural method for streaming data - logs, tapes, source compilation pipelines. Operations: read next, write next (append), reset, skip n. Direct (relative/random) access models a deck of numbered cards: the file is a sequence of fixed-size logical blocks and any block can be read or written immediately: read(n), write(n) - built on lseek + read.",
              "Indexed access layers another structure on top: an index file of (key, pointer) pairs points into the data file; queries search the small index first, then jump to the record - the design behind ISAM and, in spirit, database B-trees. Large files use multi-level indexes. Worked example: a file of 10,000 customer records of 200 bytes each, stored as fixed 200-byte blocks. Direct access to customer 5,000: block = 5,000, seek cost = one disk access (after index lookup). Sequential access: 5,000 record reads on average 2,500... precisely, average scan depth 5,000 records - two orders of magnitude more I/O. This arithmetic is why databases never scan when they can index.",
              "Choosing a method is workload-driven. Sequential: batch processing, log files, tape archives - minimum overhead, no random jumps needed. Direct: airline reservations (look up flight 42 immediately), databases, media players (seek to minute 34). Indexed: record-oriented files with nonuniform keys. The same file can support both - UNIX lseek makes any file direct-access since blocks are addressable; legacy systems (CP/M, DOS) offered explicit record structures.",
              "For the exam: define sequential and direct access with their operations, present the 10,000-record arithmetic (direct = 1 access, sequential = ~5,000), describe indexed access with the ISAM sketch, and match methods to workloads in one line each.",
            ],
            bullets: [
              "Sequential: read next / write next / reset / skip n; pointer-based, tape model.",
              "Direct: read(n)/write(n) on fixed-size blocks; lseek + read in UNIX.",
              "Indexed: (key, pointer) index searched first, then one data access; ISAM/B-tree lineage.",
              "Worked: 10,000 records x 200 B; direct = 1 access, sequential averages ~5,000.",
              "Sequential suits logs, batch, tapes; direct suits reservations and media seek.",
              "Multi-level indexes extend indexed access to very large files.",
              "UNIX exposes both methods on the same byte-sequence file via lseek.",
            ],
            table: {
              caption: "Access to record 5,000 of a 10,000-record file (200 B records).",
              headers: ["Method", "Path taken", "Data accesses"],
              rows: [
                ["Sequential", "Scan records 1..5000", "~5000"],
                ["Direct", "lseek to block 5000, read", "1"],
                ["Indexed (key known)", "Search index (~13 levels of B-tree), then read", "2 (index + data)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Sequential vs direct access",
              caption:
                "Two mental models of the same bytes: a tape you wind through, or a deck you jump into.",
              left: {
                heading: "Sequential access",
                items: [
                  "Tape model; pointer moves one record at a time",
                  "Operations: read next, write next, skip n",
                  "Cheap for full scans and appends",
                  "Terrible for random lookups (linear scan)",
                  "Natural for logs and batch jobs",
                ],
              },
              right: {
                heading: "Direct access",
                items: [
                  "Card-deck model; blocks addressable by number",
                  "Operations: read(n), write(n)",
                  "One access to any record",
                  "Needs fixed-size logical blocks",
                  "Natural for databases and media",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Put the 5000-vs-1 number in the answer",
              body: "Access-method questions are qualitative until you add the arithmetic: reaching record 5,000 sequentially costs about 5,000 accesses; directly, 1. That single comparison demonstrates you understand what the methods actually cost.",
            },
            keyTerms: [
              { term: "Sequential access", definition: "Reading/writing records in order via a moving pointer." },
              { term: "Direct access", definition: "Reading/writing any fixed-size block by number." },
              { term: "Indexed access", definition: "Searching a (key, pointer) index to reach a record in one data access." },
              { term: "ISAM", definition: "Indexed Sequential Access Method: the classic indexed file organization." },
              { term: "Logical block", definition: "The fixed-size addressable unit of a file used by direct access." },
            ],
            examQuestions: [
              {
                q: "Explain sequential, direct and indexed access methods with operations, and compare their cost for record 5000 of a 10,000-record file.",
                marks: 7,
                outline: [
                  "Sequential: pointer model, operations",
                  "Direct: block model, read(n)/write(n)",
                  "Indexed: key index then one data access",
                  "Cost arithmetic: ~5000 vs 1 vs 2 accesses",
                  "ISAM / B-tree mention",
                  "Workload mapping: logs, reservations, databases",
                  "UNIX lseek unifying both on byte files",
                ],
              },
              {
                q: "Which access method suits an airline reservation lookup and why?",
                marks: 2,
              },
              {
                q: "How does UNIX support direct access on ordinary files?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Directory Structures",
            body: [
              "A directory maps file names to their FCBs; the directory structure determines how names are organized and shared. Single-level: one directory for the whole system - simple, but names collide (two users cannot both have 'notes.txt') and it scales badly. Two-level: one directory per user (master file directory -> user directories); collisions across users end, but users cannot share files and cannot organize their own files into groups.",
              "Tree-structured directories allow arbitrary nesting: a root, directories branching downward, every file reached by a pathname. Each process has a current working directory; pathnames are absolute (/home/ada/report.tex) or relative (report.tex from the working directory). Search, create, delete, list, rename and traverse are the directory operations. Trees end sharing: the same file in two places requires two copies.",
              "Acyclic graph directories add links: a shared file appears in multiple directories without duplication. A hard link is a real second directory entry pointing at the same inode; the inode keeps a reference count, and the file is deleted only when the count reaches zero. A soft (symbolic) link is a small file containing a pathname - resolution follows it at access time, and deleting the target leaves a dangling link. Cycles (general graph) complicate everything: garbage collection and the 'never traverse the same node twice' rule exist because a cyclic graph can loop forever.",
              "Worked example: file 'report.tex' at inode 4021. /home/ada/report.tex hard-links it (refcount 1 -> 2); /home/ben/shared/report.tex hard-links it again (refcount 3). Ada deletes her name: refcount 2, file still fully accessible via the other two names. Ben deletes: refcount 1. Last delete: refcount 0 -> blocks freed. With a symlink instead, deleting /home/ada/report.tex leaves /home/ben/shared/report.tex dangling - access fails until the target is recreated. For the exam: five structure types in order, hard vs soft links with the refcount trace, and why cycles need special traversal rules.",
            ],
            bullets: [
              "Single-level: one global directory; name collisions; unusable multi-user.",
              "Two-level: MFD + per-user UFDs; no cross-user collisions; no sharing.",
              "Tree: nested directories, absolute vs relative paths, working directory.",
              "Acyclic graph: hard links (refcount on inode) and soft links (pathname file).",
              "Hard link deletion rule: file dies only when refcount reaches 0.",
              "Soft link can dangle when its target is deleted; hard links cannot.",
              "General graph with cycles: needs never-revisit traversal or garbage collection.",
            ],
            table: {
              caption: "Hard link vs symbolic link for inode 4021.",
              headers: ["Event", "Hard link (refcount)", "Symbolic link"],
              rows: [
                ["Two more names created", "refcount 3", "Two separate pathname files"],
                ["Original name deleted", "refcount 2: file intact", "Symlink still resolves via other path"],
                ["All hard names deleted", "refcount 0: blocks freed", "Dangling symlink: access fails"],
                ["Storage cost", "One directory entry each", "One small file per link"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Directory structures, simplest at top",
              caption:
                "Index 0 is the top tier. Each level down adds a capability: sharing, then cycles to worry about.",
              tiers: [
                { label: "Single-level", note: "One directory; collisions; toy systems" },
                { label: "Two-level", note: "MFD + per-user UFDs; isolation, no sharing" },
                { label: "Tree", note: "Nested paths; absolute/relative names" },
                { label: "Acyclic graph", note: "Hard/soft links; refcounted sharing" },
                { label: "General graph", note: "Cycles; needs traversal discipline" },
              ],
            },
            callout: {
              type: "warning",
              title: "Refcount, not magic",
              body: "The mark-winning sentence for hard links: 'the file is deleted only when its last hard link disappears (inode refcount reaches 0)'. Students who say 'deleting any name deletes the file' are describing symlinks half-wrong - hard links and symlinks behave oppositely here.",
            },
            keyTerms: [
              { term: "Directory", definition: "A mapping from file names to file control blocks." },
              { term: "Acyclic graph directory", definition: "Tree directories plus links allowing shared files without duplication." },
              { term: "Hard link", definition: "A second directory entry pointing at the same inode; refcounted." },
              { term: "Symbolic link", definition: "A file containing a pathname, resolved at access time; can dangle." },
              { term: "Working directory", definition: "The directory relative to which pathnames are resolved." },
            ],
            examQuestions: [
              {
                q: "Explain single-level, two-level, tree and acyclic-graph directory structures with advantages, and differentiate hard and symbolic links.",
                marks: 7,
                outline: [
                  "Single-level: collisions, simplicity",
                  "Two-level: per-user UFDs, no sharing",
                  "Tree: paths, working directory, operations",
                  "Acyclic graph: links enable sharing",
                  "Hard link refcount trace on inode 4021",
                  "Symlink dangling behavior",
                  "Cycles: traversal and garbage collection",
                ],
              },
              {
                q: "What happens when the last hard link to a file is deleted?",
                marks: 2,
              },
              {
                q: "Why can a symbolic link become dangling but a hard link cannot?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "File Allocation Methods",
            body: [
              "Contiguous allocation stores each file in consecutive disk blocks: the directory holds (start block, length). The advantage is raw speed - reading block i needs only start + i (direct access in one seek, excellent for sequential too). The disadvantages: finding space for a growing file is external fragmentation all over again; files cannot easily extend (the next blocks may be taken); and compaction or extent-based workarounds are needed. Worked example: a 25-block file starting at block 100 occupies 100-124; block 110 = start 100 + 10.",
              "Linked allocation chains blocks: the directory holds the first block; each block contains a pointer to the next; the file ends with a nil pointer. No external fragmentation, files grow freely - but direct access is terrible: reaching block i of a file means traversing i-1 blocks (i disk reads with seeks between), and the pointer costs a few bytes per block, breaking the neat 512/4 KB power-of-two sizes. The FAT (file allocation table) variant moves the chain into one table in memory: FAT[i] gives the next block of the file occupying block i - random access becomes a memory-speed table walk and the disk blocks stay clean.",
              "Indexed allocation gathers all pointers into an index block per file: directory points to the index; the index's i-th entry points to the file's i-th data block. Direct access is instant (read index, jump), files grow by appending index entries, and data blocks stay free of pointers. Costs: one extra disk read for the index; small files waste most of an index block; large files need linked, multi-level or combined (UNIX inode) index schemes. Worked numbers: 4 KB blocks, 4-byte pointers -> 1024 pointers per index block -> max file 1024 * 4 KB = 4 MB with a single index; UNIX's inode combines 12 direct + singly/doubly/triply indirect pointers to reach terabytes.",
              "Comparison arithmetic to quote: to read block 20 of a 25-block file - contiguous: 1 access (start + 20); linked: 21 accesses; indexed: 2 accesses (index + data). For the exam: all three methods with directory-entry contents, the block-20 arithmetic, the 4 MB index-block calculation, and UNIX's combined inode scheme as the practical resolution.",
            ],
            bullets: [
              "Contiguous: (start, length) in directory; 1-access direct; external fragmentation + growth pain.",
              "Linked: next-pointer per block; no external fragmentation; block i costs i reads; pointer overhead.",
              "FAT: chain kept in one in-memory table; memory-speed traversal; used by MS-DOS/USB.",
              "Indexed: per-file index block; direct access in 2 reads; 4 KB block + 4 B pointer = 1024 entries = 4 MB max.",
              "Large-file remedies: linked index, multi-level index, UNIX combined inode (12 direct + indirects).",
              "Block 20 of 25: contiguous 1, linked 21, indexed 2 accesses.",
              "Choice depends on access pattern: sequential-heavy vs random-heavy workloads.",
            ],
            table: {
              caption: "Reading block 20 of a 25-block file under each allocation method.",
              headers: ["Method", "Directory stores", "Accesses for block 20", "Main weakness"],
              rows: [
                ["Contiguous", "start=100, length=25", "1 (block 120)", "External fragmentation; growth"],
                ["Linked", "first block; pointers in blocks", "21 (walk the chain)", "Random access; pointer overhead"],
                ["Indexed", "index block pointer", "2 (index + block)", "Index overhead for small files"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Creating a 25-block file - three allocation fates",
              caption:
                "The same file request meets three allocation schemes; each outcome names the trade-off examiners want articulated.",
              start: "File of 25 blocks created on disk",
              branches: [
                { label: "Contiguous allocation", outcome: "One run of 25 blocks: fastest reads, but growth and fragmentation bite later", good: true },
                { label: "Linked allocation", outcome: "Any 25 free blocks chained: fits anywhere, random reads crawl the chain", good: true },
                { label: "Indexed allocation", outcome: "Any 25 blocks + one index block: fast random access at 1-block overhead", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "1, 21, 2 - the three numbers",
              body: "Block-20 access costs: contiguous 1, linked 21, indexed 2. Memorize this triple; it answers half of every allocation-method numerical and instantly shows the trade-off triangle.",
            },
            keyTerms: [
              { term: "Contiguous allocation", definition: "File stored in consecutive blocks; directory records start and length." },
              { term: "Linked allocation", definition: "Blocks chained by per-block next-pointers; directory stores the first block." },
              { term: "FAT", definition: "File Allocation Table: in-memory table holding the next-block chain for all files." },
              { term: "Index block", definition: "Per-file block whose entries point to all the file's data blocks." },
              { term: "UNIX inode", definition: "Combined direct + indirect pointer scheme scaling from tiny to huge files." },
            ],
            examQuestions: [
              {
                q: "Explain contiguous, linked and indexed allocation; compute accesses to block 20 of a 25-block file under each, and state the max file size for a 4 KB index block.",
                marks: 7,
                outline: [
                  "Contiguous: (start, length); pros/cons",
                  "Linked: chain; FAT variant",
                  "Indexed: index block; 2-access direct",
                  "Block-20 arithmetic: 1, 21, 2",
                  "Index capacity: 4 KB / 4 B = 1024 entries -> 4 MB",
                  "Multi-level and UNIX inode remedy",
                  "Workload-based choice summary",
                ],
              },
              {
                q: "What does the directory store under contiguous allocation?",
                marks: 2,
              },
              {
                q: "Why does the FAT make linked allocation practical?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Free-Space Management",
            body: [
              "The file system must track which disk blocks are free. Bit vector (bitmap): one bit per block, 1 = free (or 1 = used, by convention); finding n contiguous free blocks means scanning for a run of n ones - machine words make this fast (find first nonzero word). Bitmaps are simple and quick for contiguity searches but cost space proportional to disk size.",
              "Worked example: a 1 TB disk with 4 KB blocks has 1 TB / 4 KB = 2^40 / 2^12 = 2^28 = 268,435,456 blocks. At 1 bit per block the bitmap is 2^28 bits = 32 MB - comfortably RAM-resident today, which is why modern file systems (ext4, NTFS) use bitmaps. The same arithmetic shows the design pressure: at 1 KB blocks the count doubles to 2^29 bits = 64 MB, one reason block size is a tuning trade-off (small blocks cut internal fragmentation, enlarge metadata).",
              "Linked free list: each free block holds a pointer to the next free block; the directory of free space is just a head pointer. No space proportional to disk size is wasted, but contiguity is hard to find (walking the list is disk-speed) and a corrupted pointer loses free blocks. Grouping stores n free-block addresses in the first free block, the last of which points to another group of n - enlisting free blocks to hold their own index. Counting compression exploits the fact that frees are usually contiguous runs: store (first block, run length) pairs instead of individual blocks - entries collapse from thousands to a handful when a file is deleted in one piece.",
              "For the exam: bitmap with the 32 MB calculation, linked list with the corruption risk, grouping and counting in one line each, and the closing observation that bitmap + free-run knowledge dominates modern systems because RAM can hold it.",
            ],
            bullets: [
              "Bitmap: 1 bit per block; fast contiguity search; space = blocks/8 bytes.",
              "Worked: 1 TB at 4 KB blocks = 2^28 blocks -> 32 MB bitmap.",
              "Linked list: next-pointer in each free block; no fixed cost; slow contiguity; fragile.",
              "Grouping: first free block indexes n more; recursive groups.",
              "Counting: (start, run-length) entries; deletion of contiguous files collapses to one entry.",
              "Small blocks reduce internal fragmentation but double bitmap size (32 MB -> 64 MB at 1 KB).",
              "Modern file systems keep the bitmap in RAM; ext4 uses block groups with local bitmaps.",
            ],
            table: {
              caption: "Free-space structures on a 1 TB disk with 4 KB blocks (2^28 blocks).",
              headers: ["Structure", "Space cost", "Find n contiguous blocks", "Weakness"],
              rows: [
                ["Bitmap", "32 MB fixed", "Fast word scan", "Grows with disk size"],
                ["Linked list", "0 fixed (pointers in free blocks)", "Slow: walk at disk speed", "Pointer corruption loses space"],
                ["Grouping", "Nearly 0", "Moderate: chain of groups", "Indirection depth"],
                ["Counting", "Tiny (run list)", "Good if runs match", "Fragmented free space explodes entries"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Bitmap vs linked free list",
              caption:
                "The two structures every exam answer must contrast; the 32 MB number decides which modern systems pick.",
              left: {
                heading: "Bitmap",
                items: [
                  "Fixed space: bits for every block",
                  "32 MB for 1 TB at 4 KB blocks",
                  "Contiguous runs found by word scan",
                  "RAM-resident; indexed by block number",
                  "Used by ext4, NTFS, many modern FS",
                ],
              },
              right: {
                heading: "Linked free list",
                items: [
                  "No fixed overhead; pointers live in free blocks",
                  "Allocation = take head; free = insert at head",
                  "Finding contiguous runs requires disk-speed walk",
                  "One corrupted pointer strands blocks",
                  "Historic; superseded when RAM grew",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Do the 2^28 arithmetic on paper",
              body: "1 TB = 2^40 bytes; 4 KB = 2^12; blocks = 2^28; bits = 2^28 = 32 MB after dividing by 8 (2^3). Writing this chain of powers of two cleanly is worth more than naming all four structures.",
            },
            keyTerms: [
              { term: "Bit vector (bitmap)", definition: "One bit per disk block recording free/used status." },
              { term: "Linked free list", definition: "Free blocks chained by pointers stored in the blocks themselves." },
              { term: "Grouping", definition: "A free block stores addresses of n other free blocks, the last pointing onward." },
              { term: "Counting free space", definition: "Storing (first block, run length) pairs instead of individual blocks." },
              { term: "Block group", definition: "ext4 construct clustering a bitmap, inodes and data blocks locally." },
            ],
            examQuestions: [
              {
                q: "Explain free-space management methods and compute the bitmap size for a 1 TB disk with 4 KB blocks.",
                marks: 7,
                outline: [
                  "Bitmap definition and contiguity search",
                  "2^40 / 2^12 = 2^28 blocks; /8 -> 32 MB",
                  "Linked list mechanics and corruption risk",
                  "Grouping structure",
                  "Counting structure with deletion runs",
                  "Comparison table",
                  "Why modern FS choose RAM-resident bitmaps",
                ],
              },
              {
                q: "Which free-space structure makes finding contiguous blocks fastest?",
                marks: 2,
              },
              {
                q: "How does the counting method exploit contiguous deletions?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Protection and Access Control",
            body: [
              "Protection is the set of mechanisms controlling which processes may access which resources and how. For files, the access rights are the standard set: read, write, execute, append, delete, list (for directories), plus ownership rights to change protection itself. The conceptual model is the access matrix: rows are domains (users/processes), columns are objects (files, devices), and each cell lists the rights of that domain on that object. The matrix is a model, not an implementation - real systems factor it because it is mostly empty.",
              "Two factoring directions realize the matrix. Access control lists (ACLs): store per OBJECT the nonempty column - file X holds (ada: rwx, ben: r, guests: none); checking access means looking up the requester in the file's ACL. Capability lists: store per DOMAIN the nonempty row - process/ada holds (fileX: rwx, fileY: r); checking means scanning the process's capabilities, which are typically unforgeable tokens. UNIX implements a compact hybrid: owner/group/other each get rwx bits (9 bits), supplemented by extended ACLs on modern systems.",
              "Worked example: UNIX permissions rwxr-x---: owner reads/writes/executes, group members read/execute, others nothing. The file mode 0750 encodes exactly this. A chmod 644 converts to rw-r--r--: owner reads/writes, group and others read only. Directory execute (x) means traverse - without x on /home/ada, others cannot reach files inside regardless of file permissions. This nested-check subtlety is a favourite viva question.",
              "Additional protection ideas: protection is principle-of-least-fidelity - grant the minimum rights needed; ownership transfer and revocation (ACLs revoke instantly by editing the list; capabilities are harder to revoke - regenerate the object); and auditing (log every access to sensitive objects). For the exam: access matrix definition with a small matrix drawn, ACL vs capability lists as its column/row decompositions, the UNIX 0750 decoding, and the traversal permission point.",
            ],
            bullets: [
              "Access matrix: domains x objects; cell = rights (read, write, execute, ...).",
              "ACL = column decomposition: rights stored with each object.",
              "Capability list = row decomposition: rights carried by each domain.",
              "ACL check: look up requester in object's list; capability check: present unforgeable token.",
              "UNIX: 9-bit owner/group/other rwx; mode 0750 = rwxr-x---.",
              "Directory x = traversal permission; without it, inner files unreachable.",
              "Revocation: ACLs trivial; capabilities need regeneration or indirection.",
            ],
            table: {
              caption: "Access matrix for two users and two files.",
              headers: ["Domain \\ Object", "report.tex", "lab1.sh"],
              rows: [
                ["ada (owner)", "read, write, execute", "read, write, execute, own"],
                ["ben (group)", "read, execute", "read, execute"],
                ["guest (other)", "-", "read"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The access matrix as a 2x2 grid",
              caption:
                "Axes are the model's dimensions: who (domains) against what (objects); every cell is a rights set.",
              axes: { x: "Objects (files, devices)", y: "Domains (users, processes)" },
              quadrants: [
                { label: "Domain1 / Object1", note: "read, write, execute (owner rights)" },
                { label: "Domain1 / Object2", note: "read only (group rights)" },
                { label: "Domain2 / Object1", note: "read, execute" },
                { label: "Domain2 / Object2", note: "no access (-)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Columns vs rows is the whole question",
              body: "ACLs are columns of the access matrix (per object); capabilities are rows (per domain). Write that mapping sentence first - every follow-up mark depends on it.",
            },
            keyTerms: [
              { term: "Access matrix", definition: "Conceptual table of rights for each domain-object pair." },
              { term: "ACL", definition: "Access control list: per-object list of domains and their rights." },
              { term: "Capability list", definition: "Per-domain list of objects and rights, as unforgeable tokens." },
              { term: "Mode bits (0750)", definition: "UNIX owner/group/other rwx encoding." },
              { term: "Traversal permission", definition: "Directory execute bit required to reach files beneath it." },
            ],
            examQuestions: [
              {
                q: "Explain the access matrix model and its realization as ACLs and capability lists, decoding UNIX mode 0750 as an example.",
                marks: 7,
                outline: [
                  "Protection goals; rights vocabulary",
                  "Access matrix: rows domains, columns objects",
                  "ACL as column decomposition with lookup flow",
                  "Capability as row decomposition with token flow",
                  "UNIX 9-bit scheme; 0750 -> rwxr-x---",
                  "Directory traversal bit subtlety",
                  "Revocation comparison",
                ],
              },
              {
                q: "What rights does mode 0644 grant and to whom?",
                marks: 2,
              },
              {
                q: "Why are ACLs easier to revoke than capabilities?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.7",
            title: "Disk Scheduling",
            body: [
              "Disk service time decomposes into seek time (move the head to the cylinder - dominant, milliseconds), rotational latency (wait for the sector, average half a rotation) and transfer time. Since seeks dominate, scheduling the pending request queue to minimize head movement is the performance lever. The classic queue: 98, 183, 37, 122, 14, 124, 65, 67 with the head at cylinder 53, disk spanning 0-199.",
              "The algorithms. FCFS: serve arrival order: 53->98->183->37->122->14->124->65->67; total head movement = 45+85+146+85+108+110+59+2 = 640 cylinders - fair but absurdly zigzag. SSTF (shortest seek time first): always serve the nearest request: 53->65(12)->67(2)->37(30)->14(23)->98(84)->122(24)->124(2)->183(59) = 236; great throughput but distant requests can starve. SCAN (elevator): the head sweeps in one direction servicing everything, then reverses: moving toward 0: 53->37(16)->14(23)->0(14) then 0->65(65)->67(2)->98(31)->122(24)->124(2)->183(59): total = 53 + 183 = 236; bounded waiting, but middle cylinders get the best service.",
              "C-SCAN and C-LOOK impose one-way discipline: C-SCAN sweeps to the disk end, jumps to 0, sweeps again - 53->183 (130), 183->199 (16), 199->0 (199), 0->14 (14): total 359, with uniform wait times. C-LOOK is the practical version: sweep to the last request (183), jump to the lowest request (14), sweep again: 130 + (183-37=146) + (37-14=23) = 299. Worked table below gives all five totals: 640, 236, 236, 359, 299 - the numbers to memorize.",
              "For the exam: name seek/latency/transfer decomposition, run SSTF and one sweep algorithm in full with every distance written, present the five totals, and state the starvation note (SSTF) and the uniform-wait note (C-SCAN). Always state the sweep direction for SCAN-family answers - half the marks live in that sentence.",
            ],
            bullets: [
              "Disk time = seek + rotational latency + transfer; seek dominates scheduling.",
              "Classic instance: queue 98,183,37,122,14,124,65,67; head 53; disk 0-199.",
              "FCFS: 640 cylinders; fair, pathological zigzag.",
              "SSTF: 236; nearest-first; starvation of far requests.",
              "SCAN (toward 0): 236; elevator; direction must be stated.",
              "C-SCAN: 359 (includes 199->0 return); uniform wait distribution.",
              "C-LOOK: 299; jumps only between extreme requests; practical favourite.",
            ],
            table: {
              caption: "All five algorithms on queue 98,183,37,122,14,124,65,67, head 53.",
              headers: ["Algorithm", "Head path (summarized)", "Total movement", "Property"],
              rows: [
                ["FCFS", "53->98->183->37->122->14->124->65->67", "640", "Arrival order, fair"],
                ["SSTF", "65,67,37,14,98,122,124,183", "236", "Nearest first; may starve"],
                ["SCAN (down)", "37,14,0 then 65,67,98,122,124,183", "236", "Elevator sweep"],
                ["C-SCAN (up)", "65..183, jump 199->0, then 14", "359", "Uniform waits"],
                ["C-LOOK (up)", "65..183, jump 183->14, then 37", "299", "Uniform, no full-span jump"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "SSTF run from head 53",
              caption:
                "Each stage is one serviced request with its seek distance; the running total reaches 236.",
              stages: [
                { label: "53 -> 65 (12)", note: "Nearest request first" },
                { label: "65 -> 67 (2)", note: "Total 14 so far" },
                { label: "67 -> 37 -> 14 (30 + 23)", note: "Sweep inward; total 67" },
                { label: "14 -> 98 -> 122 -> 124 -> 183 (84+24+2+59)", note: "Long climb out; total 236" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the direction or lose the marks",
              body: "For SCAN, C-SCAN, LOOK and C-LOOK the answer is undefined without a direction ('SCAN moving toward 0' or 'toward 199'). Write the direction in the first line of the solution; two examiners' rubrics explicitly check for it.",
            },
            keyTerms: [
              { term: "Seek time", definition: "Time to move the head to the target cylinder; the dominant disk cost." },
              { term: "SSTF", definition: "Serves the request nearest the current head position; may starve far requests." },
              { term: "SCAN", definition: "Elevator: sweep one direction to the disk end, then reverse." },
              { term: "C-LOOK", definition: "Sweep to the last request, jump to the lowest request, sweep again." },
              { term: "Rotational latency", definition: "Average half-rotation wait for the sector to pass under the head." },
            ],
            examQuestions: [
              {
                q: "For the queue 98,183,37,122,14,124,65,67 with head at 53, compute total head movement for FCFS, SSTF, SCAN and C-LOOK, and compare their starvation and fairness properties.",
                marks: 7,
                outline: [
                  "Seek/latency/transfer decomposition",
                  "FCFS path and total 640",
                  "SSTF path with distances; total 236",
                  "SCAN with direction stated; total 236",
                  "C-LOOK path; total 299",
                  "SSTF starvation vs SCAN bounded wait",
                  "C-SCAN uniform-wait remark (359)",
                ],
              },
              {
                q: "Why does SSTF risk starvation?",
                marks: 2,
              },
              {
                q: "How does C-LOOK differ from C-SCAN?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.8",
            title: "Disk Management and RAID",
            body: [
              "Before a disk stores files it is formatted: low-level (physical) formatting divides sectors with headers, ECC and gaps; partitioning slices the disk; high-level formatting writes the file-system structures - boot block, free-space bitmap, root directory, empty FAT/inode region. The boot block occupies the first sector (the MBR in section 1.7's boot story). Bad blocks are handled two ways: the controller maintains spare sectors and remaps transparently, or the file system maintains a bad-block list and never allocates them.",
              "RAID (redundant array of inexpensive disks) combines several physical disks to gain performance, capacity or reliability. RAID 0 stripes data across disks: capacity N, faster large I/O, but one disk failure destroys everything (no redundancy). RAID 1 mirrors: half the capacity, double the read throughput, survives one disk per mirror pair. RAID 5 stripes data plus distributed parity: each stripe's parity block rotates across disks; survives any single failure at capacity N-1. RAID 6 adds a second independent parity: survives two simultaneous failures at capacity N-2. RAID 10 (1+0) mirrors then stripes: fast and safe, half capacity.",
              "Worked example: four 1 TB disks. RAID 0: 4 TB usable, zero fault tolerance. RAID 1 (two pairs): 2 TB usable, any one disk per pair can fail. RAID 5: 3 TB usable (one disk's worth of parity), any single disk can fail. RAID 6: 2 TB usable, any two can fail. RAID 10: 2 TB usable, one disk per mirror survives. The parity math: RAID 5 rebuild uses XOR - with data blocks D1, D2, D3 and parity P = D1 XOR D2 XOR D3, losing D2 lets the array compute D2 = P XOR D1 XOR D3: that is why parity must only equal one disk's worth of information.",
              "The reliability incentive is quantitative: with 4 disks each having annual failure probability p, RAID 0's array fails with probability roughly 1 - (1-p)^4 ~ 4p, while RAID 5 tolerates any one failure - a large reliability jump for one disk of capacity. For the exam: format levels and boot block, RAID 0/1/5/6/10 with capacities from the 4x1 TB example, the XOR rebuild argument, and the stripe/mirror/parity vocabulary.",
            ],
            bullets: [
              "Formatting: low-level (sectors/ECC), partitioning, high-level (FS structures).",
              "Boot block in the first sector; bad blocks remapped by controller or listed by FS.",
              "RAID 0 striping: full capacity, no redundancy.",
              "RAID 1 mirroring: half capacity, one failure tolerated per pair.",
              "RAID 5: rotating parity, capacity N-1, survives one failure.",
              "RAID 6: double parity, capacity N-2, survives two failures.",
              "RAID 10: mirror + stripe, half capacity, fast and fault-tolerant.",
              "Worked: 4x1 TB -> RAID0 4 TB, RAID5 3 TB, RAID6 2 TB, RAID1/10 2 TB.",
            ],
            table: {
              caption: "RAID levels on four 1 TB disks.",
              headers: ["Level", "Technique", "Usable capacity", "Tolerates"],
              rows: [
                ["RAID 0", "Striping", "4 TB", "No failures"],
                ["RAID 1", "Mirroring (2 pairs)", "2 TB", "1 disk per mirror pair"],
                ["RAID 5", "Distributed parity", "3 TB", "Any 1 disk failure"],
                ["RAID 6", "Dual parity", "2 TB", "Any 2 disk failures"],
                ["RAID 10", "Mirror + stripe", "2 TB", "1 disk per mirror"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "RAID levels as increasing protection",
              caption:
                "Index 0 is the top tier: from no redundancy at the top to double parity and combined schemes at the bottom.",
              layers: [
                { label: "RAID 0: striping", note: "Speed and full capacity; zero tolerance" },
                { label: "RAID 1: mirroring", note: "Full copies; half capacity" },
                { label: "RAID 5: rotating parity", note: "One parity block per stripe; N-1 capacity" },
                { label: "RAID 6: dual parity", note: "Two independent parities; N-2 capacity" },
                { label: "RAID 10: mirror + stripe", note: "Combines speed and redundancy; half capacity" },
              ],
            },
            callout: {
              type: "exam",
              title: "XOR is why parity costs one disk",
              body: "The deepest RAID line: with P = D1 XOR D2 XOR D3, any lost block is recoverable as the XOR of the survivors including P. That is why RAID 5 spends exactly one disk on redundancy regardless of array width.",
            },
            keyTerms: [
              { term: "Low-level formatting", definition: "Dividing the disk into sectors with headers, ECC and gaps." },
              { term: "RAID", definition: "Redundant array of independent disks combining several drives for performance and reliability." },
              { term: "Striping (RAID 0)", definition: "Spreading blocks across disks in rotation for parallel throughput." },
              { term: "Parity (RAID 5)", definition: "XOR-based redundancy block rotating across the array's disks." },
              { term: "Hot spare", definition: "An idle standby disk automatically substituted for a failed member." },
            ],
            examQuestions: [
              {
                q: "Explain disk formatting steps and compare RAID 0, 1, 5, 6 and 10 with capacities for four 1 TB disks.",
                marks: 7,
                outline: [
                  "Low-level vs high-level formatting; boot block",
                  "Bad-block handling: remap vs list",
                  "RAID 0 striping; RAID 1 mirroring",
                  "RAID 5 rotating parity; RAID 6 dual",
                  "RAID 10 combined",
                  "Capacity table: 4, 2, 3, 2, 2 TB",
                  "XOR rebuild argument",
                ],
              },
              {
                q: "How much usable capacity does RAID 5 give on four 1 TB disks?",
                marks: 2,
              },
              {
                q: "Why can RAID 5 rebuild a lost disk from the remaining members?",
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
        "RGPV OS papers lean heavily on numericals: Gantt charts, Banker's safety checks, page-fault counts and disk-arm totals are worth more marks than any definition. Budget revision time so that every numerical family gets hand-solved practice, and treat the short-note topics (types of OS, system calls, threads, file attributes) as cheap guaranteed marks.",
      ],
      weightedTopics: [
        { topic: "CPU scheduling numericals (FCFS, SJF, RR, priority with Gantt + averages)", weight: "~ 10-12 marks", note: "Almost guaranteed; practise 8-10 full traces until waiting = TAT - burst is reflex." },
        { topic: "Banker's algorithm and safety sequence", weight: "~ 8-10 marks", note: "Write the Need matrix and the running work column every time." },
        { topic: "Page replacement numericals (FIFO, LRU, Optimal)", weight: "~ 8-10 marks", note: "Classic string gives 15/12/9; also know Belady's 9-vs-10 anomaly." },
        { topic: "Semaphores and classical sync problems", weight: "~ 7-8 marks", note: "Producer-consumer wait order and the dining-philosophers deadlock trace." },
        { topic: "Disk scheduling numericals (FCFS, SSTF, SCAN, C-LOOK)", weight: "~ 6-8 marks", note: "Head 53 queue gives 640/236/236/299; state the sweep direction." },
        { topic: "Paging translation and demand paging EAT", weight: "~ 6-8 marks", note: "5423 -> page 5, offset 303; EAT = (1-p)100 + p*8ms arithmetic." },
        { topic: "Deadlock conditions, RAG, prevention/avoidance/detection", weight: "~ 6 marks", note: "Four Coffman conditions verbatim + cycle = deadlock for single instances." },
        { topic: "Short notes: OS types, system calls, threads, PCB, file attributes, RAID", weight: "~ 10-12 marks total", note: "Cheap marks; one clean paragraph + example each." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section twice - once for understanding, once for numerical drilling - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations", tasks: ["OS roles, generations, types with table", "Structures: monolithic vs microkernel read() trace", "System calls, services, shells; fork/pipe pipeline", "Boot sequence and VM types"] },
        { week: "Week 2", focus: "Unit II - process mechanics", tasks: ["Five-state diagram, PCB fields, context-switch arithmetic", "fork/exec/wait code and zombie/orphan", "Three schedulers and queues", "Scheduling criteria; the 24-3-3 reordering example"] },
        { week: "Week 3", focus: "Unit II - scheduling drills", tasks: ["FCFS/SJF: four-job worked example twice", "RR q=4 trace and quantum trade-off", "Priority + aging; MLFQ sketch", "Threads: shared/private columns; IPC bounded-buffer trace"] },
        { week: "Week 4", focus: "Unit III - sync and deadlock", tasks: ["Race trace, three CS requirements", "Peterson trace; TSL/CAS", "Semaphores: S=2 trace, bounded buffer order", "Classical problems; monitors", "Coffman conditions, RAG cycle, Banker's full safety run"] },
        { week: "Week 5", focus: "Unit IV - memory", tasks: ["Binding, MMU base/limit example", "Fit strategies: 212K example", "Paging 5423 translation; TLB EAT table", "Segmentation with trap; demand paging EAT", "Replacement 15/12/9; thrashing and working set"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["File operations, allocation 1/21/2 arithmetic", "Directories: hard vs soft links", "Free space 32 MB bitmap; access matrix", "Disk scheduling: all five totals twice", "RAID capacities; two full papers under time"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every scheduling answer starts with the Gantt chart and the notation (arrival, burst per process) - the diagram earns the method marks even if arithmetic slips later.",
        "Use waiting = TAT - burst mechanically; never re-derive waiting by summing queue gaps in RR.",
        "For Banker's, write the Need matrix first, then one line per safety step: Need(Pi) <= work; work becomes ... The running work column is the proof.",
        "For page replacement, walk the reference string in a three-column frame table; count a fault only when a page loads.",
        "State the sweep direction in the first line of any SCAN/C-SCAN/LOOK/C-LOOK disk answer.",
        "Always convert units before substituting: 8 ms = 8,000,000 ns in the demand-paging EAT.",
        "Show the Coffman conditions as a numbered list verbatim - mutual exclusion, hold-and-wait, no preemption, circular wait - before any prevention discussion.",
        "In semaphore solutions, order the waits (empty before mutex) and say why; examiners check the order explicitly.",
        "Time-box: 2/3-mark shorts <= 5 minutes each; 7-mark numericals <= 15 minutes including the diagram.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Adding an arrow Waiting -> Running in the state diagram - the process must pass through Ready.",
        "Using burst time as turnaround time: TAT = exit - arrival, waiting = TAT - burst.",
        "Forgetting arrival times in SJF/RR numericals - FCFS order is by arrival, not by list order.",
        "Swapping wait(empty) and wait(mutex) in the producer - that order deadlocks.",
        "Writing Need instead of Request in the deadlock detection algorithm (detection uses Request).",
        "Claiming unsafe state equals deadlock - unsafe only means deadlock is possible.",
        "Reporting paging as having external fragmentation - paging has none; it has half-page internal waste.",
        "Counting internal and external fragmentation into the wrong allocation scheme (fixed partitions = internal).",
        "Skipping the direction statement for SCAN-family disk algorithms.",
        "Saying FIFO can show Belady's anomaly for LRU too - only non-stack algorithms (FIFO) can.",
        "Mixing up zombie (dead child, unwaited) and orphan (live child, parent dead).",
      ],
    },
  ],
};
