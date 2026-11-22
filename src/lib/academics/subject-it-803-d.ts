import type { AcademicSubject } from "./types";

export const it803d: AcademicSubject = {
  id: "it-803-d",
  code: "IT-803(D)",
  title: "Parallel Computing",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: why single cores hit the power wall, how caches and coherence protocols scale to dozens of cores, how the GPU trades latency for throughput, how patterns give parallel programs their grammar, and how MPI, Pthreads, OpenMP and CUDA put all of it on real hardware.",
  description:
    "Five units walk from the need for parallelism and Flynn's taxonomy, through large cache design with snooping and directory coherence, NUCA and transactional memory, the GPU as a throughput machine, the parallel programming patterns from map and reduce to fork-join and pipeline, ending with the four programming systems the syllabus names: MPI, Pthreads, OpenMP and CUDA.",
  accentColor: "#3b82f6",
  emoji: "PC",
  unitCount: 5,
  totalSections: 36,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction",
      summary:
        "Unit I builds the ground floor: why clock scaling ended and parallelism became the only path forward, Flynn's four classes of parallelism, Moore's law and the multi-core turn, the anatomy and communication architecture of parallel computers, the message passing family, the data parallel, dataflow and systolic alternatives, and the performance issues that judge every one of these designs.",
      chapter: {
        number: "01",
        title: "Why Machines Went Parallel",
        intro:
          "Unit I covers the need for parallelism, the four Flynn forms (SISD, SIMD, MISD, MIMD), Moore's law and multi-cores, the fundamentals of parallel computers and their communication architecture, message passing, data parallel, dataflow and systolic architectures, and the performance issues of speedup, efficiency and scalability.",
        inOneBreath:
          "Clocks stopped at the power wall, so Moore's transistor budget went into cores instead of frequency; Flynn splits every machine by its instruction and data streams; shared memory and message passing are the two communication abstractions, with dataflow and systolic trading control for locality; Amdahl caps speedup at the serial fraction while efficiency measures the price each core pays.",
        sections: [
          {
            number: "1.1",
            title: "The need for parallelism",
            body: [
              "Parallel computing is the simultaneous use of multiple processing elements to solve one problem faster than any single element could. It became mandatory, not optional, through a trio of walls. The power wall: dynamic power grows as P = C·V²·f, and once supply voltage stopped scaling (the end of Dennard scaling, around 2005), higher frequency meant unsustainable watts per square millimetre. The memory wall: DRAM latency of roughly 100 ns against sub-nanosecond CPU cycles means a miss costs hundreds of cycles. The ILP wall: out-of-order execution, branch prediction and superscalar issue extracted the instruction-level parallelism hardware could find, and returns flattened.",
              "The numbers tell the story cleanly. The Pentium 4 of 2004 reached 3.8 GHz at about 115 W and could go no further; twenty years later server and desktop clocks sit at the same 3-5 GHz, while transistor counts per Moore's law kept doubling. The industry answered by spending the new transistors on replicas of the core: two cores in 2005, four by 2007, dozens today, plus accelerators with thousands of simple cores. Software followed - threads, processes, distributed nodes - because the only remaining route to performance is concurrency, at every level from bit-parallel ALUs to datacenter clusters.",
              "In the exam, 'why do we need parallel computing?' is answered by naming the three walls in order and closing with the multi-core turn. The marks sit in the causal chain: transistors kept shrinking but voltage stopped dropping, so power per mm² would have exploded at higher clocks; hence frequency plateaued; hence the budget bought cores; hence software must expose parallelism or the extra silicon idles. A one-line answer that skips the power wall reads as memorized, not understood.",
            ],
            keyTerms: [
              { term: "Power wall", definition: "The limit reached when dynamic power P = C·V²·f could no longer be contained once voltage stopped scaling - clocks froze near 3-4 GHz." },
              { term: "Memory wall", definition: "The growing gap between fast CPU cycles and slow DRAM latency (about 100 ns), bridged by caches rather than by faster processors." },
              { term: "ILP wall", definition: "Diminishing returns from instruction-level parallelism techniques - pipelining, superscalar issue, speculation - within one instruction stream." },
              { term: "Dennard scaling", definition: "The scaling rule that kept power density constant as transistors shrank; its end around 2005 triggered the multi-core turn." },
              { term: "Multi-core", definition: "A chip with several complete processor cores sharing one die - the industry's answer to the walls." },
            ],
            diagram: {
              kind: "flow",
              title: "Why clocks stopped climbing",
              caption: "Each step forced the next - parallelism was the only exit left on the right.",
              steps: [
                { label: "Moore's law", note: "transistors double roughly every 2 years" },
                { label: "Higher clocks", note: "budget spent on frequency and pipelines" },
                { label: "Power wall", note: "P = C·V²·f - watts per mm² explode" },
                { label: "Dennard scaling breaks", note: "voltage stops dropping (~2005)" },
                { label: "Multi-core era", note: "budget buys cores, software must parallelize" },
              ],
            },
            table: {
              caption: "Where the performance went, decade by decade.",
              headers: ["Era", "Typical chip", "Clock", "Source of gains"],
              rows: [
                ["1990s", "1 core, deep pipeline", "60-500 MHz", "frequency + ILP"],
                ["2004", "Pentium 4, 31-stage pipe", "3.8 GHz, ~115 W", "end of the line - power wall"],
                ["2006-2012", "2-8 cores per die", "3-4 GHz", "core replication"],
                ["Today", "8-64 cores + GPU (1000s of ALUs)", "3-5 GHz", "parallelism at every level"],
              ],
            },
            bullets: [
              "Dynamic power P = C·V²·f; when voltage stopped scaling, clocks had to stop too.",
              "Memory wall: ~100 ns DRAM latency vs sub-ns CPU cycles - caches carry the gap.",
              "ILP, branch prediction and speculation hit diminishing returns in one stream.",
              "Moore's law continued - the transistor budget moved from frequency to cores.",
              "Parallelism exists at many levels: bit, instruction, loop, thread, process, cluster.",
              "Software that does not parallelize leaves the extra silicon idle.",
            ],
            callout: {
              type: "tip",
              title: "Quote the power equation",
              body: "The non-obvious point examiners reward: it was volts, not transistors, that ran out. P = C·V²·f meant power grew with the square of frequency once V could not shrink - so the 3.8 GHz Pentium 4 at 115 W was a physical ceiling, not an engineering shortfall. Write the equation and the causality writes itself.",
            },
            examQuestions: [
              {
                q: "Explain why parallel computing became a necessity rather than an option. Discuss the power wall, the memory wall and the ILP wall, and describe how Moore's law was redirected after 2005.",
                marks: 14,
                outline: [
                  "Define parallel computing: multiple processing elements cooperating on one problem",
                  "Power wall: P = C·V²·f; Dennard scaling ended ~2005; 3.8 GHz at 115 W as the ceiling",
                  "Memory wall: ~100 ns DRAM vs sub-ns cycles; caches bridge but do not close it",
                  "ILP wall: superscalar, speculation and branch prediction flattened in returns",
                  "Moore's law continued: transistor budget redirected from clock to cores",
                  "Multi-core turn: 2 cores in 2005 -> dozens today plus GPU accelerators",
                  "Conclusion: software must expose parallelism or extra silicon idles",
                ],
              },
              {
                q: "Distinguish the power wall from the memory wall with one number for each.",
                marks: 7,
                outline: [
                  "Power wall: on-chip limit from P = C·V²·f once voltage stopped scaling",
                  "Consequence: clock frozen near 3-4 GHz since ~2005",
                  "Memory wall: CPU-DRAM latency gap, ~100 ns DRAM vs sub-ns cycle",
                  "Consequence: misses cost hundreds of cycles; caches and prefetch hide it",
                  "One is a heat limit, the other a data-supply limit - different cures",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Forms of parallelism: Flynn's taxonomy",
            body: [
              "Flynn's taxonomy classifies every computer by two streams: instructions (what the control unit executes) and data (what it operates on). SISD - single instruction, single data - is the classic uniprocessor: one fetch-decode-execute pipeline over one data path. SIMD - single instruction, multiple data - executes one instruction across many lanes simultaneously: vector units, multimedia extensions and the lockstep lanes of a GPU. MISD - multiple instructions on one data stream - is rare in practice; its honest examples are systolic arrays and fault-tolerant flight computers running redundant processors over the same inputs. MIMD - multiple instructions, multiple data - is the general case today: multicore processors, SMP servers and clusters, each core following its own control flow.",
              "A worked contrast fixes the classes. Adding two N-element arrays on a SIMD machine is one vector instruction driving N ALUs in lockstep - beautiful when every lane does the same work, wasteful when branches make lanes diverge. The same addition on MIMD is N threads each executing a loop body independently - flexible, but paying for fetch, control and coordination per thread. SISD does it as a plain sequential loop. A modern GPU is best described as SIMT: hardware that looks SIMD at the warp level (32 lanes sharing one instruction) but gives each lane its own register state, program counter and condition code, so divergent branches serialize rather than break.",
              "The exam frame: draw the 2×2 grid, give two real machines per class, and add the two nuances that separate strong answers - SPMD is a programming style (one program, many processes with private data) that runs on MIMD hardware, and SIMT is SIMD plus per-lane divergence handling. Mislabelling a GPU as pure SIMD is the classic lost mark, and both nuances cost nothing to memorize while appearing in almost every taxonomy question.",
            ],
            keyTerms: [
              { term: "Flynn's taxonomy", definition: "Classification by instruction stream and data stream: SISD, SIMD, MISD, MIMD." },
              { term: "SIMD", definition: "One instruction applied to many data lanes in lockstep - vector units, AVX, GPU warps." },
              { term: "MISD", definition: "Multiple instructions on one data stream - systolic arrays and redundant fault-tolerant computers." },
              { term: "MIMD", definition: "Independent instruction streams on independent data - multicore, SMP, clusters; the most general class." },
              { term: "SIMT", definition: "Single-instruction multiple-thread - SIMD lanes plus per-lane program counters and register state (the GPU model)." },
            ],
            diagram: {
              kind: "matrix",
              title: "The Flynn 2×2",
              caption: "Two axes, four classes - real machines fill every cell except that MISD stays rare.",
              axes: { x: "Data streams (single -> multiple)", y: "Instruction streams (single -> multiple)" },
              quadrants: [
                { label: "MISD", note: "multiple instructions, one data stream - systolic arrays, redundant flight computers" },
                { label: "MIMD", note: "multicore SMP, clusters - each core its own control flow" },
                { label: "SISD", note: "the classic uniprocessor - one pipeline, one data path" },
                { label: "SIMD", note: "vector units, AVX, GPU warps - one instruction, many lanes" },
              ],
            },
            table: {
              caption: "Flynn classes with real machines.",
              headers: ["Class", "Streams", "Real example", "Typical workload"],
              rows: [
                ["SISD", "1 instruction, 1 data", "classic uniprocessor", "sequential code"],
                ["SIMD", "1 instruction, many data", "AVX vector unit, GPU warp", "uniform array math, media"],
                ["MISD", "many instructions, 1 data", "systolic array, triple-redundant avionics", "signal flow, safety voting"],
                ["MIMD", "many instructions, many data", "multicore CPU, MPI cluster", "general parallel programs"],
              ],
            },
            bullets: [
              "Flynn classifies hardware by two streams: instructions and data.",
              "SISD = uniprocessor; MIMD = multicore and clusters - the general case.",
              "SIMD shines when lanes agree; divergent branches waste lanes.",
              "MISD's honest homes: systolic arrays and fault-tolerant redundant control.",
              "SPMD is a programming style on MIMD hardware, not a fourth hardware class.",
              "A modern GPU is SIMT: SIMD lanes plus per-lane program counters and state.",
            ],
            callout: {
              type: "exam",
              title: "SIMT is SIMD with an escape hatch",
              body: "The two-mark nuance: in pure SIMD every lane is forced to the same instruction; in SIMT each lane carries its own program counter, so a divergent branch is handled by masking and serializing instead of failing. Saying 'GPU = SIMD' loses the mark; 'GPU = SIMT, SIMD plus per-lane divergence' earns it.",
            },
            examQuestions: [
              {
                q: "Explain Flynn's classification of parallel computers with a neat diagram. Give two real machines for each class and state which class dominates modern hardware and why.",
                marks: 14,
                outline: [
                  "Two axes: instruction stream and data stream",
                  "SISD: single/single - the classic uniprocessor",
                  "SIMD: one instruction, many lanes - AVX, GPU warp",
                  "MISD: many instructions, one data - systolic, redundant avionics",
                  "MIMD: independent streams - multicore SMP, clusters",
                  "MIMD dominates: general-purpose workloads need independent control flow",
                  "Nuances: SPMD is a programming style; GPU is SIMT, not pure SIMD",
                ],
              },
              {
                q: "Why is a modern GPU described as SIMT rather than pure SIMD?",
                marks: 7,
                outline: [
                  "SIMD forces every lane through the same instruction",
                  "SIMT gives each lane its own program counter and register state",
                  "Divergent branches are masked and serialized, not fatal",
                  "Warps of 32 lanes share one instruction when paths agree",
                  "Result: SIMD efficiency plus MIMD-like flexibility",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Moore's law and the multi-core turn",
            body: [
              "Moore's law is an economic observation, not a speed guarantee: the number of transistors on a cost-optimal chip doubles roughly every two years. For four decades the industry spent that budget on making one instruction stream faster - wider superscalar issue, deeper pipelines, bigger caches, higher clocks. Around 2005 the spend changed direction: Dennard scaling ended, frequency plateaued at the power wall, and the doubling transistors were spent on replicas - more cores, bigger shared caches, and integrated accelerators. Understanding Moore's law as a budget, and asking 'where did this year's doubling go?', explains the entire shape of modern hardware.",
              "The worked numbers make the turn visible. The 1993 Pentium carried 3.1 million transistors at 60 MHz; the 2004 Prescott carried 125 million at 3.8 GHz - most of the growth still went to pipeline depth and clock. The 2010 Intel Westmere crossed a billion transistors with 6 cores at 3.3 GHz; today's server dies exceed tens of billions of transistors in 32-128 cores whose clocks are unchanged from 2004. The clock stopped; the count did not. The residual gap between transistor count and usable parallelism is dark silicon - area that could be powered but is not, which pushes designs toward heterogeneous cores and domain accelerators.",
              "Exam answers fail here in one specific way: equating Moore's law with 'computers get faster'. The law says denser, not faster - speed now comes only from exposing parallelism to a growing core count. Structure the answer as three eras (spend on frequency, spend on ILP, spend on cores), quote one transistor/clock pair from each, and close with dark silicon as the pressure behind accelerators like the GPU of Unit III.",
            ],
            keyTerms: [
              { term: "Moore's law", definition: "Transistor count per chip doubles roughly every two years - a density trend, not a speed promise." },
              { term: "Multi-core turn", definition: "The post-2005 redirection of the transistor budget from frequency and ILP into replicated cores." },
              { term: "Dark silicon", definition: "Transistor area that exists but cannot be powered simultaneously - the budget-performance gap." },
              { term: "Heterogeneous computing", definition: "Combining general cores with specialized accelerators (GPU, DSP, AI units) on one system." },
            ],
            diagram: {
              kind: "compare",
              title: "Where the transistor budget went",
              caption: "Same doubling, two destinations - the split year is the end of Dennard scaling.",
              left: {
                heading: "Before 2005: spend on one stream",
                items: [
                  "Deeper pipelines (20 -> 31 stages)",
                  "Wider superscalar issue and speculation",
                  "Higher clocks: 60 MHz -> 3.8 GHz",
                  "Pentium 4: 125M transistors, 1 core, 115 W",
                ],
              },
              right: {
                heading: "After 2005: spend on replicas",
                items: [
                  "More cores per die: 2 -> 8 -> 64+",
                  "Bigger shared caches (L2/L3 slices)",
                  "Clocks frozen at 3-5 GHz",
                  "Leftovers become accelerators and dark silicon",
                ],
              },
            },
            table: {
              caption: "Three eras of spending the doubling.",
              headers: ["Era", "Landmark chip", "Transistors", "Clock", "Budget spent on"],
              rows: [
                ["1993", "Pentium", "3.1 M", "60 MHz", "pipelining"],
                ["2004", "Pentium 4 Prescott", "125 M", "3.8 GHz", "deep ILP - power wall hit"],
                ["2010", "Westmere", "~1.2 B", "3.3 GHz", "6 cores + big L3"],
                ["2020s", "server SoC", "tens of B", "3-5 GHz", "32-128 cores, accelerators"],
              ],
            },
            bullets: [
              "Moore's law: transistor count doubles ~every 2 years - density, not speed.",
              "Pre-2005 budget went to clock and ILP; post-2005 it went to core replication.",
              "Clocks have been flat at 3-5 GHz for two decades while counts grow 100x.",
              "Dark silicon: area that cannot be powered at once - drives specialization.",
              "Heterogeneous chips (CPU + GPU + AI units) are the budget's newest destination.",
              "Parallel software is how the extra transistors turn into performance.",
            ],
            callout: {
              type: "warning",
              title: "Moore's law is not a speed law",
              body: "The most common slip in this unit: writing 'Moore's law means computers double in speed every two years'. It says transistor count doubles - roughly, and only density. Since 2005 count doubled while single-thread speed barely moved. Keep the two claims separate and the answer stays honest.",
            },
            examQuestions: [
              {
                q: "What is Moore's law? Explain how the industry's use of the doubling changed after 2005 and what role dark silicon and heterogeneous architectures play today.",
                marks: 14,
                outline: [
                  "Definition: transistor count doubles ~every 2 years - density trend",
                  "Era 1: budget on frequency - 60 MHz (1993) to 3.8 GHz (2004)",
                  "Era 2: budget on ILP - deeper pipelines, wider issue; power wall ends it",
                  "Era 3: budget on cores - 2 (2005) -> 8 (2010) -> 64+ (today), clocks flat",
                  "Dark silicon: unpowerable area between count and usable parallelism",
                  "Heterogeneity: accelerators spend dark silicon on domain speedups",
                  "Conclusion: performance now requires parallel software on parallel hardware",
                ],
              },
              {
                q: "Did Moore's law stop being a performance law in 2005? Justify with numbers.",
                marks: 7,
                outline: [
                  "Law concerns transistor density, never single-thread speed",
                  "Pre-2005: density growth coincided with clock growth, masking the difference",
                  "Post-2005: 100x transistors vs flat 3-5 GHz clocks",
                  "Performance growth continued only through parallelism",
                  "Hence parallel programming became mandatory, not optional",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Fundamentals of parallel computers and communication architecture",
            body: [
              "Strip a parallel computer to its skeleton and three parts remain: processing elements, an interconnection network, and memory organized as shared (one address space - uniform UMA or non-uniform NUMA) or distributed (private address spaces). The communication architecture is the programmer-visible contract on top: what operations move data (load/store into shared memory, or explicit send/receive), what the network guarantees (topology, routing, flow control), and what latency and bandwidth the abstraction promises. Shared memory hides data movement behind loads and stores but must then solve coherence (Unit II); message passing exposes the movement but scales cleanly because nothing is shared.",
              "The theoretical reference model is PRAM - Parallel Random Access Machine: p processors, one shared memory, unit-time access, one instruction per step. PRAM variants differ only in concurrent access rules: EREW forbids two processors reading the same cell in one step, CREW allows concurrent reads, CRCW allows concurrent writes (with common, arbitrary or priority resolution). Worked steps: summing n = 8 numbers on a CREW PRAM takes 3 steps - step 1 pairs (a0+a1)(a2+a3)(a4+a5)(a6+a7) with 4 adders reading concurrently, step 2 makes 2 sums, step 3 the total - log₂ n steps using n/2 processors, versus 7 sequential additions. PRAM proves bounds; real machines add memory hierarchy and communication costs on top.",
              "The exam wants three things: the anatomy diagram (nodes, network, memory model), the shared-versus-distributed contrast with the coherence trade named, and a PRAM trace showing the EREW/CREW/CRCW distinction in action. A common lost mark: describing PRAM as a design blueprint - it is a cost model for proving what is achievable, not a machine anyone builds; real hardware adds memory hierarchy and communication costs on top of every PRAM bound you quote.",
            ],
            keyTerms: [
              { term: "UMA", definition: "Uniform Memory Access - every processor reaches every memory location in the same time (classic SMP)." },
              { term: "NUMA", definition: "Non-Uniform Memory Access - some memory is nearer (faster) than the rest; latency depends on placement." },
              { term: "Communication architecture", definition: "The programmer-visible interface: operations that move data plus the network's topology, routing and guarantees." },
              { term: "PRAM", definition: "Parallel Random Access Machine - p processors, shared memory, unit-time access; the theory model for algorithm bounds." },
              { term: "EREW / CREW / CRCW", definition: "PRAM access rules: exclusive or concurrent reads, exclusive or concurrent writes (common/arbitrary/priority)." },
            ],
            diagram: {
              kind: "layers",
              title: "A parallel computer as a stack",
              caption: "Each layer is the abstraction the one below must honour - the contract line is the communication architecture.",
              layers: [
                { label: "Application / algorithm", note: "exposes the parallelism" },
                { label: "Programming model", note: "shared memory (OpenMP) or message passing (MPI)" },
                { label: "Communication abstraction", note: "PRAM bounds; loads/stores or send/recv" },
                { label: "Interconnection network", note: "topology, routing, flow control" },
                { label: "Nodes + memory", note: "cores, caches, shared or private memory" },
              ],
            },
            table: {
              caption: "Interconnection networks at a glance.",
              headers: ["Topology", "Degree", "Diameter", "Cost", "Where used"],
              rows: [
                ["Bus", "1 shared link", "1", "cheapest", "2-8 cores, snooping (Unit II)"],
                ["Crossbar", "n ports", "1", "O(n²) switches", "small centralized SMP"],
                ["2D mesh / torus", "4-6 links/node", "O(√n)", "scales linearly", "many-core chips, GPU NoC"],
                ["Hypercube", "log n", "log n", "moderate", "classic MPP machines"],
                ["Tree", "1-3 links/node", "O(log n)", "low", "reduction/broadcast fabrics"],
              ],
            },
            bullets: [
              "Skeleton: processing elements + interconnect + memory (shared UMA/NUMA or distributed).",
              "Communication architecture = the data-movement contract visible to the programmer.",
              "Shared memory hides movement but owes coherence; message passing exposes movement but scales.",
              "PRAM: unit-time shared memory; EREW/CREW/CRCW differ in concurrent access rules.",
              "Sum of n numbers: log₂ n CREW steps with n/2 adders vs n - 1 sequential steps.",
              "Topology choice trades degree, diameter and cost: bus cheap, crossbar uniform, mesh scalable.",
            ],
            callout: {
              type: "tip",
              title: "PRAM proves, machines pay",
              body: "Treat PRAM as a thought experiment with a purpose: it certifies that a log-depth algorithm exists before you fight real caches and network hops. Real machines add the costs PRAM ignores - memory latency, contention, communication - so quote the PRAM bound, then immediately say what the hardware adds.",
            },
            examQuestions: [
              {
                q: "Describe the fundamental organization of a parallel computer - processing elements, memory organization and interconnection network. Explain the communication architecture as a programmer-visible contract, and compare the bus, crossbar and mesh topologies.",
                marks: 14,
                outline: [
                  "Skeleton: PEs + interconnect + memory; shared (UMA/NUMA) vs distributed",
                  "Shared memory: loads/stores hide movement; coherence is the price",
                  "Message passing: send/recv exposes movement; scaling is the prize",
                  "Communication architecture: topology, routing, flow control, guarantees",
                  "Bus: cheapest, single shared link, few cores only",
                  "Crossbar: unit diameter, O(n²) cost, small centralized machines",
                  "Mesh: linear cost, O(√n) diameter, the many-core choice",
                ],
              },
              {
                q: "Sum 8 numbers on a CREW PRAM. Show the three steps, state the processors used, and contrast EREW, CREW and CRCW.",
                marks: 7,
                outline: [
                  "Step 1: four adders form (a0+a1)(a2+a3)(a4+a5)(a6+a7) - concurrent reads allowed",
                  "Step 2: two adders pair the four sums",
                  "Step 3: one adder forms the total - log₂ 8 = 3 steps",
                  "Processors: n/2 = 4 adders vs n - 1 = 7 sequential additions",
                  "EREW: no two processors may read the same cell in one step",
                  "CREW: concurrent reads, exclusive writes",
                  "CRCW: concurrent writes with common/arbitrary/priority resolution",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Message passing architecture",
            body: [
              "A message passing architecture gives every processing element private memory and no shared address space: all cooperation happens through explicit send and receive over the interconnect. A message matches its receiver by source, tag and datatype; sends and receives may block until matched or complete asynchronously. The model's virtues scale beautifully - no shared state means no coherence problem, and clusters of thousands of nodes run MPI (Unit V) on exactly this contract. Its price is the programmer's: data must be partitioned deliberately, communication is visible in the source code, and every remote access costs a message round trip rather than a load instruction.",
              "The cost model turns the architecture into arithmetic: a message of m bytes costs roughly T = t_s + m·t_w, where t_s is the startup latency (about 1-2 µs) and t_w the per-byte transfer time (about 1 ns/byte on 1 GB/s links). Sending 1 MB therefore costs about 1 µs + 1 ms - bandwidth-dominated; sending 64 bytes costs about 1 µs + 64 ns - latency-dominated, where the startup term is everything. This is why message passing code bundles work into large messages: 1000 small sends cost ~1000 µs, one bulk send of the same data ~1 ms; same bytes, 1000× fewer startups.",
              "Exam framing: define the model, draw the matched send-receive round, present the two-term cost model with one number for a latency-bound and a bandwidth-bound case, and close with the deadlock hazard - two ranks both sending first with blocking calls wait forever, so protocols fix an ordering or use non-blocking operations. Unit V's MPI programs are this section made executable.",
            ],
            keyTerms: [
              { term: "Send/receive", definition: "The explicit operations that move data between private address spaces over the network." },
              { term: "Tag matching", definition: "A receive matches exactly one send by source, tag and datatype - the mechanism that orders asynchronous traffic." },
              { term: "Blocking vs non-blocking", definition: "Blocking calls wait until matched/complete; non-blocking post the operation and let computation overlap the transfer." },
              { term: "Startup cost (t_s)", definition: "Fixed per-message latency (~1-2 µs) - dominates short messages and punishes many small sends." },
              { term: "Bandwidth cost (t_w)", definition: "Per-byte transfer time (~1 ns/byte on 1 GB/s links) - dominates bulk messages." },
            ],
            diagram: {
              kind: "cycle",
              title: "A matched send-receive round",
              caption: "The tag is the rendezvous token - no match, no delivery, and a misordered pair is a deadlock.",
              steps: [
                { label: "P0 packs buffer", note: "bytes + datatype + tag = 11" },
                { label: "send(tag 11)", note: "handed to the network" },
                { label: "Network transit", note: "t_s + m·t_w" },
                { label: "P1 recv(tag 11)", note: "matches source + tag" },
                { label: "Deliver / ack", note: "receive completes, reply may follow" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "exchange.c - one matched message pair (pseudocode)",
              code: `/* P0 and P1 exchange one buffer through the network */
send(dest = 1, buffer, count, DOUBLE, tag = 11);   /* P0: post and go    */
recv(src  = 0, buffer, count, DOUBLE, tag = 11);   /* P1: match src+tag  */

/* blocking both-ways: if P0 and P1 BOTH send first, they wait forever  */
/* fix 1: agree on order (rank 0 sends, rank 1 receives first)          */
/* fix 2: non-blocking - post send and recv, then wait on both          */`,
            },
            bullets: [
              "Private memories + explicit send/receive - the contract MPI implements.",
              "Matching by source, tag and datatype turns async traffic into ordered delivery.",
              "Message cost T = t_s + m·t_w: 1 MB is bandwidth-bound (~1 ms), 64 B is latency-bound (~1 µs).",
              "Bundle work: one bulk send replaces a thousand startups for the same bytes.",
              "No shared state -> no coherence problem -> clean scaling to thousands of nodes.",
              "Hazards: mismatched order deadlocks blocking calls; use ordering or non-blocking.",
            ],
            callout: {
              type: "warning",
              title: "The both-send-first deadlock",
              body: "Two ranks, both executing blocking send before blocking recv, deadlock by construction: each send needs its receiver's matching recv, and each rank is stuck in send. Every MPI course drills the cure - fixed ordering by rank, or non-blocking (post send + recv, then wait). Mentioning the hazard unprompted is what turns a definition answer into a design answer.",
            },
            examQuestions: [
              {
                q: "Explain the message passing architecture: private address spaces, matched send/receive, and the model's strengths and weaknesses versus shared memory. Include the two-term cost model with a worked number.",
                marks: 14,
                outline: [
                  "Every PE has private memory; cooperation is explicit send/receive",
                  "Matching by source + tag + datatype orders asynchronous messages",
                  "Blocking vs non-blocking semantics",
                  "Cost model T = t_s + m·t_w; t_s ~1-2 µs, t_w ~1 ns/byte",
                  "1 MB message: ~1 ms - bandwidth-dominated; bundle small sends",
                  "Strength: no coherence problem, scales to thousands of nodes",
                  "Weakness: visible communication, manual partitioning, round-trip remote access",
                ],
              },
              {
                q: "Why do 1000 small messages cost far more than one bulk message of the same bytes?",
                marks: 7,
                outline: [
                  "Every message pays the startup t_s (~1-2 µs) regardless of size",
                  "1000 sends: ~1000 × t_s ≈ 1-2 ms of pure overhead",
                  "One bulk send pays t_s once; the bytes ride at t_w each",
                  "Rule: aggregate communication - message coalescing",
                  "Same arithmetic motivates vectorized/bulk collective operations",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Data parallel, dataflow and systolic architectures",
            body: [
              "Beyond the MIMD mainstream sit three architectural families the syllabus names explicitly. Data parallel architecture applies one operation to many data elements at once - SIMD/vector lanes and GPU warps - and thrives when the workload is a regular map over arrays. Dataflow architecture abandons the program counter: an instruction fires the moment its operands arrive, as data tokens flow through a dataflow graph; parallelism is exploited at the finest grain, limited historically by tag-matching hardware and lost locality. Systolic architecture arranges simple processing elements in a nearest-neighbour mesh that pumps data rhythmically, systole-like, so each datum is reused by every PE it passes - trading memory bandwidth for compute.",
              "The canonical systolic result earns the numbers: multiplying two n×n matrices on a banded systolic array uses about n² processing elements, needs only O(n) operands fetched per cycle (each element of A and B enters the array once and is reused by a whole row or column of PEs), and completes in roughly 3n - 1 cycles. For n = 1000: a million PEs, three thousand cycles, and about two million operand fetches instead of two billion memory reads. Dataflow's counterpart example: a dataflow graph for (a+b)·(c+d) computes both products' inputs concurrently the instant both arrive - no sequencing beyond true dependency.",
              "Exam framing: define each family with its control story (lockstep lanes, token-driven firing, rhythmic pumping), give the systolic matrix-multiply accounting, and map workloads to architectures - regular array math to data parallel, signal/stream neighbourhood computation to systolic, control-dependent fine-grain graphs to dataflow - noting why dataflow lost commercially: matching tags and scheduling in hardware cost more than caches saved. One line per family plus the numbers is a complete 14-mark skeleton.",
            ],
            keyTerms: [
              { term: "Data parallel architecture", definition: "Many lanes execute the same operation on different elements - SIMD, vector units, GPU warps." },
              { term: "Dataflow architecture", definition: "Execution driven by data availability - instructions fire when operands arrive; no program counter." },
              { term: "Token", definition: "The (value + tag) packet carrying an operand to its waiting instruction in a dataflow machine." },
              { term: "Systolic array", definition: "A nearest-neighbour mesh of simple PEs that pumps data rhythmically so each element is reused many times." },
              { term: "Processing element (PE)", definition: "A small compute cell - multiply-accumulate plus registers - the building block of systolic arrays." },
            ],
            diagram: {
              kind: "fork",
              title: "Which architecture fits which workload?",
              caption: "Match the machine to the data's shape - and know the two mismatches that waste hardware.",
              start: "Characterize the application",
              branches: [
                { label: "Regular, uniform work over arrays", outcome: "data parallel / SIMD - vector units and GPU warps scale perfectly", good: true },
                { label: "Streaming neighbourhood computation", outcome: "systolic array - local links, each datum reused by every PE it passes", good: true },
                { label: "Irregular branchy control on SIMD", outcome: "lane divergence wastes lanes - move to MIMD threads instead", good: false },
                { label: "Global data sharing on a bus systolic", outcome: "no - systolic lives on locality; global traffic collapses the mesh", good: false },
              ],
            },
            table: {
              caption: "Three architectures, three control stories.",
              headers: ["Architecture", "Control", "Data movement", "Best workload", "Example"],
              rows: [
                ["Data parallel", "one instruction, lockstep lanes", "broadcast operands to lanes", "uniform array math", "AVX, GPU warp"],
                ["Dataflow", "fires on operand arrival, no PC", "tokens along graph edges", "fine-grain data-dependent graphs", "experimental dataflow machines"],
                ["Systolic", "rhythmic, synchronized steps", "nearest-neighbour pulses", "matrix multiply, convolution, DSP", "banded multiplier arrays, TPU-style systoles"],
              ],
            },
            bullets: [
              "Data parallel: one operation, many elements - perfect when lanes agree.",
              "Dataflow: no program counter; instructions fire when operands arrive as tokens.",
              "Dataflow's cost: tag matching and scheduling in hardware beat caches for few workloads.",
              "Systolic: nearest-neighbour PEs pump data so each element is reused en route.",
              "Systolic matrix multiply: ~n² PEs, ~3n - 1 cycles, O(n) operands per cycle.",
              "Workload mapping: arrays -> data parallel, streams -> systolic, control-dependent graphs -> dataflow.",
            ],
            callout: {
              type: "exam",
              title: "MISD's real-world home is systolic",
              body: "The connecting insight examiners like: a systolic array is the standard example of MISD - multiple PEs apply different operations to the same flowing data stream. Pairing the two syllabus phrases ('MISD is rare' and 'systolic architecture') into one sentence shows the taxonomy and the architecture chapter were read together.",
            },
            examQuestions: [
              {
                q: "Explain data parallel, dataflow and systolic architectures with diagrams. Illustrate the systolic array for matrix multiplication with its cycle and operand counts, and match each architecture to a suitable workload.",
                marks: 14,
                outline: [
                  "Data parallel: one instruction across many lanes (SIMD/vector/GPU)",
                  "Dataflow: token-driven firing, no program counter, finest-grain parallelism",
                  "Dataflow drawbacks: tag-matching hardware, lost locality, commercial failure",
                  "Systolic: nearest-neighbour PEs, rhythmic pumping, extreme reuse",
                  "Matrix multiply: ~n² PEs, ~3n - 1 cycles, O(n) operands fetched per cycle",
                  "For n = 1000: 2M fetches vs 2B memory reads - bandwidth is the saving",
                  "Workload mapping: arrays -> data parallel, streams -> systolic, data-dependent -> dataflow",
                ],
              },
              {
                q: "Why does a systolic array reduce memory bandwidth so dramatically for matrix multiplication?",
                marks: 7,
                outline: [
                  "Each A element travels a row of PEs, each B element a column",
                  "Every datum is reused by n processing elements en route",
                  "Fetches drop from O(n³) memory reads to O(n²) operands entering once",
                  "Compute is pipelined: partial sums accumulate as data flows",
                  "Constraint: the workload must be local and rhythmic - global sharing kills it",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Performance issues: Amdahl, Gustafson and the cost of coordination",
            body: [
              "Parallel performance is measured by a small kit of ratios. Speedup S_p = T_1 / T_p - sequential time divided by p-processor time; efficiency E_p = S_p / p - the fraction of each processor's capability actually used; cost = p·T_p, cost-optimal when it equals T_1. The governing law is Amdahl's: with serial fraction f, S_p = 1 / (f + (1 - f)/p), so speedup is bounded above by 1/f no matter how many processors join. Gustafson's rebuttal changes the experiment: scale the problem with the machine, and S = f + p·(1 - f) - scaled speedup grows nearly linearly because real workloads grow the parallel part, not the serial part.",
              "Worked numbers fix intuition. f = 0.05 (five percent serial) on p = 128: Amdahl gives S = 1 / (0.05 + 0.95/128) = 1 / 0.0574 ≈ 17.4 - efficiency 17.4/128 ≈ 13.6 percent, and the ceiling 1/f = 20 means 108 of the 128 processors are effectively decoration. Gustafson on the same machine: S = 0.05 + 128 × 0.95 = 121.65 - because the parallel section grew to fill the hardware. Add the overhead line every real system pays: T_p = W/p + communication + synchronization + load imbalance, which is why measured speedup undershoots both laws.",
              "Exam framing: state and derive both formulas, run the f = 0.05 / p = 128 calculation, contrast the fixed-problem and scaled-problem viewpoints, and finish with scalability - a program is scalable if efficiency holds as p and problem size grow together (isoefficiency measures how much the problem must grow per added processor). The 14-mark version asks for a derivation plus a numerical; the 7-mark version asks for the contrast.",
            ],
            keyTerms: [
              { term: "Speedup S_p", definition: "T_1 / T_p - how many times faster p processors finish than one." },
              { term: "Efficiency E_p", definition: "S_p / p - the used fraction of total machine capability; falls as overhead grows." },
              { term: "Amdahl's law", definition: "S_p = 1/(f + (1-f)/p); serial fraction f caps speedup at 1/f for any p." },
              { term: "Gustafson's law", definition: "Scaled speedup S = f + p(1-f); the problem grows with the machine, so speedup stays near-linear." },
              { term: "Isoefficiency", definition: "The growth in problem size needed per added processor to keep efficiency constant - a scalability metric." },
            ],
            diagram: {
              kind: "compare",
              title: "Amdahl vs Gustafson - two experiments",
              caption: "Same machine, different question: how fast is this problem, vs how big can this machine go.",
              left: {
                heading: "Amdahl - fixed problem",
                items: [
                  "Sequential time T_1 is fixed, add processors",
                  "S_p = 1/(f + (1-f)/p)",
                  "f = 0.05, p = 128 -> S ≈ 17.4 (ceiling 20)",
                  "Reads as: parallelism hits a wall",
                ],
              },
              right: {
                heading: "Gustafson - scaled problem",
                items: [
                  "Problem size grows with p, time fixed",
                  "S = f + p(1 - f)",
                  "f = 0.05, p = 128 -> S ≈ 121.7",
                  "Reads as: bigger science per run",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "amdahl.py - the two laws, computed",
              code: `def amdahl(f, p):
    return 1 / (f + (1 - f) / p)

def gustafson(f, p):
    return f + p * (1 - f)

p, f = 128, 0.05
print(round(amdahl(f, p), 2))        # 17.42 - capped by the serial 5%
print(round(amdahl(f, p) / p, 3))    # 0.136 - efficiency collapses
print(round(gustafson(f, p), 2))     # 121.65 - scaled problem fills the machine
print(1 / f)                         # 20 - no Amdahl speedup ever exceeds this`,
            },
            bullets: [
              "Speedup S_p = T_1/T_p; efficiency E_p = S_p/p; cost = p·T_p.",
              "Amdahl: S_p = 1/(f + (1-f)/p) - the serial fraction caps everything at 1/f.",
              "Worked: f = 0.05, p = 128 -> S ≈ 17.4, E ≈ 13.6%, ceiling 20.",
              "Gustafson: S = f + p(1-f) = 121.65 - scaled problems keep cores busy.",
              "Real speedup pays overheads: communication, synchronization, imbalance.",
              "Scalability: efficiency held as p grows; isoefficiency quantifies the required problem growth.",
            ],
            callout: {
              type: "exam",
              title: "Amdahl is about the program, not the machine",
              body: "The non-obvious line: Amdahl's ceiling 1/f depends only on the serial fraction - buy more processors and the ceiling does not move. So the engineering lever is shrinking f (better algorithms, overlapped I/O), not adding hardware. Quote 'S can never exceed 1/f' with the 0.05 -> 20 example and the derivation marks follow.",
            },
            examQuestions: [
              {
                q: "State and derive Amdahl's law. For a program with a 5% serial fraction on 128 processors, compute the speedup and efficiency, explain why the speedup cannot exceed 20, and contrast with Gustafson's scaled speedup.",
                marks: 14,
                outline: [
                  "Definitions: S_p = T_1/T_p, E_p = S_p/p",
                  "Derivation: T_p = f·T_1 + (1-f)·T_1/p -> S_p = 1/(f + (1-f)/p)",
                  "Substitute f = 0.05, p = 128: S = 1/0.0574 ≈ 17.4",
                  "Efficiency = 17.4/128 ≈ 13.6%",
                  "As p -> infinity, S -> 1/f = 20 - the serial fraction is the ceiling",
                  "Gustafson: scaled problem, S = f + p(1-f) = 121.65",
                  "Real runs add communication + synchronization + imbalance on top",
                ],
              },
              {
                q: "Distinguish Amdahl's fixed-problem speedup from Gustafson's scaled speedup. When is each the right model?",
                marks: 7,
                outline: [
                  "Amdahl: fixed workload, add processors - asks how fast THIS problem runs",
                  "Gustafson: fixed time budget, grow the workload - asks how big THIS machine can go",
                  "Amdahl pessimistic for large p; Gustafson near-linear because f is small",
                  "Amdahl fits batch jobs with a fixed size; Gustafson fits simulation/scaling studies",
                  "Both agree the serial fraction is the enemy - shrink f first",
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
      title: "Large Cache Design",
      summary:
        "Unit II climbs the cache hierarchy to many-core scale: shared versus private caches, centralized versus distributed shared caches, snooping-based and directory-based coherence, uniform and non-uniform cache access with S-NUCA and D-NUCA, inclusion and exclusion policies, and the transactional memory escape from locks with STM and HTM.",
      chapter: {
        number: "02",
        title: "Caches That Scale to Many Cores",
        intro:
          "Unit II covers shared vs private caches, centralized vs distributed shared caches, snooping-based and directory-based cache coherence protocols, uniform and non-uniform cache access (UCA, NUCA, D-NUCA, S-NUCA), inclusion and exclusion, the difference between transactions and transactional memory, and STM vs HTM.",
        inOneBreath:
          "Private caches are fast but create the coherence problem that snooping solves on a bus and directories solve by point-to-point messages; centralized caches scale to a handful of cores before wire delay forces NUCA banks with static or dynamic placement; inclusion policies decide what each level may hold and whether the last level filters coherence traffic; transactional memory replaces lock bookkeeping with speculative execution in software (STM) or hardware (HTM).",
        sections: [
          {
            number: "2.1",
            title: "Shared versus private caches",
            body: [
              "The first large-cache decision is ownership: does each core own a private cache, or do cores share one? A private cache sits one hop from its core - lowest access latency, no port contention, but every copy of shared data must be kept consistent across caches (the coherence problem Unit II spends two sections on) and popular shared lines get duplicated, wasting capacity. A shared cache holds one copy - no inter-cache consistency issue among its sharers, full capacity utilization for shared data - but every access crosses the interconnect, ports contend, and a single cache must serve all cores' misses.",
              "A worked contrast shows both sides. Two threads scan the same 1 MB lookup table on two cores with private L1s: each L1 duplicates the hot lines, halving effective capacity, and if both threads write neighbouring counters, coherence traffic ping-pongs the line between L1s. On a shared 2 MB L2, the table exists once, both threads hit, and no coherence traffic exists between them - but each access pays the shared-cache latency and the ports serialize when both threads miss simultaneously. Real hierarchies hedge: private L1s for latency, optionally private L2s, and a shared L3 (often sliced, next section) for capacity and as the coherence point.",
              "Exam framing: present both designs with two strengths and two weaknesses each, run the duplicate-table example, and close with the default hierarchy - private L1 for latency, optional private L2, shared sliced L3 for capacity and as the coherence anchor. The non-obvious mark worth a sentence: coherence is a problem created by private caches alone - a shared cache needs no coherence among its own sharers, which is why Unit II's protocols exist.",
            ],
            keyTerms: [
              { term: "Private cache", definition: "A cache owned by one core - lowest latency, but duplicates shared data and requires coherence." },
              { term: "Shared cache", definition: "One cache serving multiple cores - single copy, no inter-sharer coherence, but contention and longer access." },
              { term: "Coherence", definition: "The guarantee that all cores observe a consistent value for each memory location - made necessary by replication in private caches." },
              { term: "Cache hierarchy", definition: "The L1/L2/L3 ladder combining private levels for speed with shared levels for capacity." },
            ],
            diagram: {
              kind: "compare",
              title: "Private vs shared caches",
              caption: "Speed against single-copy truth - the hierarchy buys both by using each where it wins.",
              left: {
                heading: "Private per-core caches",
                items: [
                  "One-hop latency, private ports",
                  "Duplicated shared lines waste capacity",
                  "Coherence traffic on every shared write",
                  "The L1 design: latency is non-negotiable",
                ],
              },
              right: {
                heading: "Shared caches",
                items: [
                  "One copy - no inter-sharer coherence",
                  "Capacity used once, not n times",
                  "Cross-interconnect access + port contention",
                  "The L3 design: capacity and the coherence anchor",
                ],
              },
            },
            table: {
              caption: "The ownership trade-off.",
              headers: ["Aspect", "Private cache", "Shared cache"],
              rows: [
                ["Access latency", "lowest (one hop)", "higher (interconnect crossing)"],
                ["Shared data", "duplicated per core", "single copy"],
                ["Coherence", "required between caches", "not needed among sharers"],
                ["Port pressure", "none (private)", "all cores contend"],
                ["Typical role", "L1 (and often L2)", "L3 / last-level cache"],
              ],
            },
            bullets: [
              "Private caches: fastest access, duplicated shared lines, coherence required.",
              "Shared caches: one copy, no coherence among sharers, contention at the ports.",
              "Two threads scanning one table: private L1s duplicate it; shared L2 holds it once.",
              "Writes to neighbouring counters ping-pong lines only when caches are private.",
              "Default hierarchy: private L1, optional private L2, shared sliced L3.",
              "Coherence is a self-inflicted problem - it exists because caches are private.",
            ],
            callout: {
              type: "tip",
              title: "Coherence is private caches' bill",
              body: "The non-obvious framing that earns the insight mark: a fully shared cache never needs coherence among its users because there is only one copy. All of Unit II's protocol machinery - snooping, directories, invalidations - exists to reconcile the copies that private caches create. Say this and the unit's structure becomes one causal story.",
            },
            examQuestions: [
              {
                q: "Compare shared and private cache organizations in a multicore processor with their advantages and disadvantages. Illustrate with a two-thread example and state the default L1/L3 hierarchy.",
                marks: 14,
                outline: [
                  "Private: one-hop latency, private ports, no contention",
                  "Private costs: duplicated shared lines, coherence traffic on writes",
                  "Shared: single copy, full capacity use, no inter-sharer coherence",
                  "Shared costs: interconnect latency, port contention on simultaneous misses",
                  "Example: 1 MB table scanned by two threads - duplication vs single copy",
                  "Counter writes ping-pong only between private caches",
                  "Default: private L1 (latency) + shared sliced L3 (capacity, coherence anchor)",
                ],
              },
              {
                q: "Why does a shared cache need no coherence protocol among the cores that use it?",
                marks: 7,
                outline: [
                  "There is exactly one copy of every line in the shared cache",
                  "All cores read and write the same physical location - no second copy to reconcile",
                  "Coherence becomes necessary only when private caches replicate lines",
                  "The shared cache still honours one-writer-at-a-time via its own port serialization",
                  "Hence L3 slices coordinate coherence, L1s create the need for it",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Centralized versus distributed shared caches",
            body: [
              "Given a shared cache, the next scaling decision is placement: one centralized cache, or many distributed banks (slices)? A centralized cache behind a crossbar gives uniform latency and simple replacement, but two forces cap it near 4-8 cores: port contention at the single structure, and wire delay - a signal's flight time across the die grows with die size and does not improve with transistor scaling, so a 'bigger centralized cache' also becomes a 'farther centralized cache'. A distributed cache splits capacity into banks placed around the mesh, each owning a slice of the address space; capacity and bandwidth scale linearly with cores, at the price of distance-dependent latency and a routing decision on every access.",
              "The worked numbers show why the corner is impossible. A 16-core chip with one centralized 8 MB cache: sixteen ports contending, and edge-to-edge wire flight of roughly 10-20 cycles - which worsens as the die grows. The same capacity as 16 slices of 512 KB on a 4×4 mesh: local hits take 2-3 cycles, remote hits cross an average of 2-3 hops at ~2-3 cycles per hop - more average latency, but bandwidth that scales with every added core and no single point of contention. Uniform latency at 64 cores is not an engineering challenge but a physics impossibility: the wires will not cooperate.",
              "Exam framing: define both placements, give the crossbar-versus-mesh numbers, and land the punchline - centralized scales to a few cores, distributed scales to many, and the 'many cores with uniform latency' quadrant of the design space is empty because wire delay is physical. This section sets up NUCA (2.5), which adds the policy layer on top of the banking decision.",
            ],
            keyTerms: [
              { term: "Centralized shared cache", definition: "One monolithic cache behind a crossbar - uniform latency, contention-limited, 4-8 cores at most." },
              { term: "Distributed cache banks", definition: "Capacity split into slices placed around an on-chip network - linear bandwidth scaling, distance-dependent latency." },
              { term: "Wire delay", definition: "Signal flight time across the die, which grows with die size and resists transistor scaling - the physics behind NUCA." },
              { term: "Cache slice / bank", definition: "One bank of a distributed cache owning a hashed portion of the address space." },
            ],
            diagram: {
              kind: "matrix",
              title: "The cache placement design space",
              caption: "Three corners exist; the fourth is forbidden by wire delay - that emptiness is why NUCA exists.",
              axes: { x: "Core count (2-8 -> 16-128)", y: "Latency (uniform -> distance-dependent)" },
              quadrants: [
                { label: "Directory + private L2s", note: "few cores, owner-dependent latency - the cluster-style corner" },
                { label: "Distributed shared slices (NUCA)", note: "many cores, distance-dependent latency - the scalable answer" },
                { label: "Centralized cache + bus/crossbar", note: "few cores, uniform latency - the classic SMP" },
                { label: "The impossible corner", note: "many cores AND uniform latency - wire delay forbids it" },
              ],
            },
            table: {
              caption: "Centralized vs distributed shared cache.",
              headers: ["Aspect", "Centralized", "Distributed (banked)"],
              rows: [
                ["Latency", "uniform for all cores", "depends on core-bank distance"],
                ["Bandwidth", "capped by one structure's ports", "scales with every added bank"],
                ["Scaling limit", "~4-8 cores (ports + wire delay)", "hundreds of cores"],
                ["Interconnect", "bus or crossbar", "mesh / NoC between banks"],
                ["Replacement policy", "one global policy", "per-bank policies"],
              ],
            },
            bullets: [
              "Centralized: uniform latency, one replacement policy - but ports and wires cap it.",
              "Wire delay grows with die size and ignores transistor scaling - the hard physics.",
              "Distributed slices: linear bandwidth and capacity scaling, distance-dependent latency.",
              "16 cores centralized: 16-port contention, 10-20 cycle wire flight.",
              "16 slices on a mesh: 2-3 cycle local hits, ~6-10 cycle remote hits, scalable bandwidth.",
              "Uniform latency at many cores is impossible - not difficult, impossible.",
            ],
            callout: {
              type: "warning",
              title: "Wires did not shrink",
              body: "The trap: assuming 'smaller transistors make everything faster'. Transistor switching improved for decades, but RC wire delay across a die did not - a signal crossing a 400 mm² chip takes the same tens of cycles it took twenty years ago. Every many-core cache design is ultimately a negotiation with wire delay, which is exactly why NUCA exists.",
            },
            examQuestions: [
              {
                q: "Compare centralized and distributed shared cache designs. Explain why wire delay makes a centralized cache unscalable and how distributed banks trade uniform latency for scalability, with representative cycle numbers.",
                marks: 14,
                outline: [
                  "Centralized: one cache + crossbar, uniform latency, simple policy",
                  "Limits: port contention + wire flight (~10-20 cycles edge to edge)",
                  "Wire delay grows with die size and resists transistor scaling",
                  "Distributed: capacity in banks around a mesh, address hashed to a bank",
                  "Numbers: local hit 2-3 cycles; remote 2-3 hops × 2-3 cycles",
                  "Bandwidth scales with cores; latency becomes placement-dependent",
                  "The impossible corner: many cores with uniform latency cannot exist",
                ],
              },
              {
                q: "State two reasons a single centralized shared cache fails beyond about eight cores.",
                marks: 7,
                outline: [
                  "Port contention: every core's miss and access competes at one structure",
                  "Wire delay: access latency grows with die size, not with transistor speed",
                  "Bandwidth stops scaling while core count keeps growing",
                  "A single point of contention also concentrates thermal and reliability load",
                  "Both failures motivate banking the cache and routing between banks",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Snooping-based cache coherence",
            body: [
              "Snooping coherence keeps every cache watching a shared broadcast medium (usually the memory bus). When a cache misses, it broadcasts the request; every other cache snoops the transaction and responds - supplying the data if it holds a modified copy, or invalidating its copy on a write. The dominant protocol family is MESI: each line sits in Modified (dirty, exclusive, must be written back), Exclusive (clean, only copy - can be written silently), Shared (clean, possibly in several caches) or Invalid. Writes use invalidation: the writer broadcasts an invalidate, other copies drop, and the writer proceeds exclusively (write-update variants instead broadcast the new value to all sharers).",
              "A three-step trace fixes the protocol. Step 1: core A reads x - ReadMiss on the bus, memory supplies, A holds x in S, core B's snoop records nothing (it has no copy). Step 2: A writes x - since A holds only an S copy it must Upgrade: broadcast invalidate, B's snoop drops its copy (none here), A moves to M. Step 3: B reads x - ReadMiss snooped by A; A, holding M, asserts the bus and supplies the data cache-to-cache (memory never sees the write-back yet), both caches end in S. Three transactions, one broadcast medium, no directory.",
              "Exam framing: draw the MESI state machine, run the trace, and evaluate scalability - snooping's cost is the broadcast: every transaction reaches every cache, so the bus saturates near 8-16 cores. The mark-winning nuance: the E state exists precisely to let a write hit avoid the bus entirely (silent E -> M upgrade), and a cache-to-cache transfer (the M-owner supplying a miss) is how snoop traffic saves a memory round trip.",
            ],
            keyTerms: [
              { term: "Snooping", definition: "Every cache watches the shared bus and reacts to other caches' memory transactions." },
              { term: "MESI states", definition: "Modified (dirty exclusive), Exclusive (clean exclusive), Shared (clean, multiple copies), Invalid." },
              { term: "Write-invalidate", definition: "On write, broadcast an invalidate so other copies drop and the writer owns the line exclusively." },
              { term: "Write-update", definition: "On write, broadcast the new value to all sharers - keeps copies valid at the cost of bus traffic." },
              { term: "Cache-to-cache transfer", definition: "A snooping cache holding the modified line supplies data directly to a requester, bypassing memory." },
            ],
            diagram: {
              kind: "flow",
              title: "One write-invalidate sequence under MESI",
              caption: "Three bus transactions - read, invalidate, supply - and memory is bypassed at the crucial step.",
              steps: [
                { label: "A reads x", note: "ReadMiss -> memory supplies -> A:S" },
                { label: "A writes x", note: "Upgrade: invalidate broadcast -> A:M" },
                { label: "B reads x", note: "ReadMiss snooped by A" },
                { label: "A supplies data", note: "cache-to-cache -> A:S, B:S" },
                { label: "Memory untouched", note: "write-back deferred until eviction" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "mesi.c - the trace as bus transactions",
              code: `/* write-invalidate snooping, MESI flavour */
A: read(x)   -> bus ReadMiss;  memory replies;          A:S
A: write(x)  -> bus Upgrade;   broadcast invalidate;    A:M  (no data move)
B: read(x)   -> bus ReadMiss;  snooped by A -> A supplies data cache-to-cache
                                                   ->  A:S, B:S
/* silent upgrade: if A had held x in E, the write needed NO bus at all */
/* every transaction reaches every cache -> the bus saturates ~8-16 cores */`,
            },
            bullets: [
              "Snooping: all caches watch one broadcast medium and react to transactions.",
              "MESI: Modified, Exclusive, Shared, Invalid - one state per line per cache.",
              "Write-invalidate is the default; write-update keeps copies valid at bus cost.",
              "Trace: read (S) -> write (invalidate, M) -> other's read (cache-to-cache, S).",
              "E state's purpose: write hits on exclusive lines skip the bus entirely.",
              "Scalability: broadcast reaches everyone - the bus saturates near 8-16 cores.",
            ],
            callout: {
              type: "exam",
              title: "Why E exists",
              body: "The subtle mark: Exclusive is not decoration. A clean line held by exactly one cache can be written with zero bus traffic (silent E -> M upgrade) because the writer is provably the only copy holder. Without E, every write - even to unshared data - would need an invalidation broadcast, doubling bus traffic for purely private variables.",
            },
            examQuestions: [
              {
                q: "Explain the snooping-based cache coherence protocol. Draw the MESI state machine, trace a read-write-read sequence between two cores showing every bus transaction, and discuss why snooping stops scaling beyond 8-16 cores.",
                marks: 14,
                outline: [
                  "Mechanism: shared broadcast medium, every cache snoops every transaction",
                  "MESI states: M dirty-exclusive, E clean-exclusive, S shared, I invalid",
                  "Trace step 1: A reads x -> ReadMiss, memory supplies, A:S",
                  "Trace step 2: A writes x -> invalidate broadcast, A:M",
                  "Trace step 3: B reads x -> A supplies cache-to-cache, both S",
                  "Silent upgrade: E -> M write needs no bus transaction",
                  "Scaling limit: every transaction is a broadcast - bus saturates at 8-16 cores",
                ],
              },
              {
                q: "Compare write-invalidate and write-update snooping policies.",
                marks: 7,
                outline: [
                  "Invalidate: writer broadcasts invalidate; sharers drop; writer exclusive",
                  "Best when one writer writes repeatedly before sharing (common case)",
                  "Update: writer broadcasts the new value to every sharer",
                  "Keeps all copies valid - good for true sharing patterns",
                  "Costs: update traffic on every write; invalidate pays once per acquisition",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Directory-based cache coherence",
            body: [
              "Directory coherence replaces broadcast with bookkeeping: a directory structure tracks, for every memory block, which caches currently hold copies (the sharer set) and which one owns the dirty copy (the dirty bit). On a miss, the requester contacts the block's home node; the directory consults its entry and sends point-to-point messages - data to the requester, invalidations to the sharers it names, a fetch from the dirty owner. No transaction reaches a cache that does not care, so the protocol's traffic grows with the number of actual sharers rather than with the number of cores, and the shared bus disappears in favour of the on-chip network.",
              "A two-writer trace on a 4-node machine shows the machinery. Node P1 read-misses block B: message to home H; H's directory entry is empty, so H returns data and sets presence[P1] = 1. Node P2 write-misses B: H sees P1 in the presence vector, sends Invalidate to P1, waits for the ack, then returns data to P2 and sets dirty[P2]. Two invalidation-class messages, one data reply - and node P3, holding nothing, saw nothing. Contrast snooping on the same event: every cache on the bus processed both requests. The cost paid: directory storage (one entry per block), one extra hop through the home node, and lookup latency.",
              "Exam framing: explain the directory entry (presence bits, dirty bit), trace the read-miss and write-miss flows as message sequences, and compare with snooping - snooping wins on small machines (broadcast is cheap, no indirection), directories win past ~16 cores because traffic scales with sharers, not cores, and the directory itself can be distributed with the memory. Sharer-set encoding (full bit-vector vs coarse pointers) is the extension mark.",
            ],
            keyTerms: [
              { term: "Directory", definition: "Per-block metadata recording sharers (presence bits) and the dirty owner; routes coherence messages point-to-point." },
              { term: "Home node", definition: "The node/bank owning a block's directory entry - every request for that block stops there first." },
              { term: "Presence vector", definition: "The bit per cache marking 'holds a copy' - full vectors scale as cores × blocks; coarse vectors compress them." },
              { term: "Write miss flow", definition: "Home sends invalidations to all sharers, collects acks, then supplies data and marks the requester dirty." },
              { term: "Coarse sharer set", definition: "Pointers to groups of sharers instead of individual bits - bounded directory size at slightly extra messages." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A write miss through the directory",
              caption: "Five staged messages - and the third node, holding nothing, never hears about it.",
              stages: [
                { label: "P2 write miss", note: "request to home node H" },
                { label: "H consults entry", note: "presence = {P1}, dirty = 0" },
                { label: "H -> P1: Invalidate", note: "point-to-point, P3 untouched" },
                { label: "P1 -> H: Ack", note: "copy dropped" },
                { label: "H -> P2: Data + dirty", note: "P2 is now the exclusive owner" },
              ],
            },
            table: {
              caption: "Directory message flows.",
              headers: ["Event", "Directory action", "Messages"],
              rows: [
                ["Read miss, no sharers", "supply data, set presence bit", "data reply"],
                ["Read miss, dirty owner elsewhere", "fetch from owner, forward to requester", "fetch + forward"],
                ["Write miss, clean sharers", "invalidate each sharer, wait acks, supply", "n invalidates + n acks + data"],
                ["Write miss, dirty owner exists", "owner writes back/forwards, then exclusive grant", "fetch + forward + grant"],
                ["Eviction of a clean copy", "clear presence bit (silent drop)", "none or one"],
              ],
            },
            bullets: [
              "Directory = per-block metadata: presence bits + dirty bit.",
              "Requests stop at the home node; messages go only to caches that hold copies.",
              "Traffic scales with the number of sharers, not with core count.",
              "Trace: read miss fills + sets presence; write miss invalidates P1, grants P2 dirty.",
              "Costs: directory storage, home-node indirection, slightly higher latency than snooping.",
              "Scaling: past ~16 cores directories beat snooping; directory itself is distributed with memory.",
            ],
            callout: {
              type: "exam",
              title: "The crossover number",
              body: "The comparison question is really 'when does the extra indirection pay?'. Answer with the crossover: below roughly 8-16 cores, snooping's broadcast is cheap and directory indirection is pure latency overhead; beyond it, broadcast traffic grows with cores while directory traffic grows with sharers, and the directory wins decisively. Quote both sides of the crossover and the comparison writes itself.",
            },
            examQuestions: [
              {
                q: "Explain directory-based cache coherence. Describe the directory entry format, trace read-miss and write-miss message flows on a 4-node system, and compare the approach with snooping-based protocols.",
                marks: 14,
                outline: [
                  "Directory entry: presence bits per sharer + dirty bit, kept at the home node",
                  "Read miss, no sharers: home supplies data, sets presence bit",
                  "Write miss with sharers: home invalidates each, collects acks, grants exclusive",
                  "Dirty owner case: home fetches from owner, forwards to requester",
                  "Point-to-point traffic: non-sharers see nothing (contrast broadcast)",
                  "Snooping: cheap on small machines; directory wins past ~16 cores",
                  "Extensions: distributed directories, coarse sharer sets for storage scaling",
                ],
              },
              {
                q: "Why does directory coherence scale better than snooping as core counts grow?",
                marks: 7,
                outline: [
                  "Snooping broadcasts every transaction to every cache",
                  "Directory sends only to the caches named in the presence vector",
                  "Traffic grows with sharers (usually small) instead of cores",
                  "No shared bus to saturate - the on-chip network carries point-to-point flows",
                  "Price: directory storage, home indirection, slightly higher miss latency",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Uniform and non-uniform cache access: UCA, NUCA, S-NUCA and D-NUCA",
            body: [
              "Uniform Cache Access (UCA) is the classical shared cache: one structure, every core's access takes the same time regardless of address. Once banking + distribution (section 2.2) becomes mandatory, the machine is Non-Uniform Cache Access (NUCA): the cache is a network of banks and access latency depends on which bank holds the line and how far it sits from the requesting core. NUCA is a fact of banked designs; the design question is placement policy, with two families. Static NUCA (S-NUCA) fixes the mapping: a line's address hashes to exactly one bank for its whole residency - simple lookup (one bank to try), no data movement, but a core far from its hot lines pays the long wire every access.",
              "Dynamic NUCA (D-NUCA) lets lines move: copies migrate or replicate toward the cores that use them, and a lookup must consult several candidate banks (or a small tag directory) because the line's location is a policy, not a function of its address. The payoff is placement-aware latency: a hot line pulled next to its requesting core is hit at local-bank latency (2-3 cycles) instead of far-bank (10+ cycles); the price is lookup complexity, migration traffic on the mesh, and a promotion/prediction policy deciding which lines deserve to move. Worked numbers: on a 4×4 bank mesh, S-NUCA averages ~4-6 hops (~10-15 cycles); D-NUCA keeps hot lines within 1 hop (~3-5 cycles) at the cost of migration bandwidth.",
              "Exam framing: define UCA and NUCA, then contrast S-NUCA and D-NUCA on exactly three axes - where a line may live, how a lookup proceeds, and what traffic the policy adds. The marks sit in the trade: S-NUCA buys simplicity and predictability, D-NUCA buys locality for hot lines and pays in complexity; both exist because uniform access died with wire delay.",
            ],
            keyTerms: [
              { term: "UCA", definition: "Uniform Cache Access - single shared structure, identical latency for every core and address." },
              { term: "NUCA", definition: "Non-Uniform Cache Access - banked cache on an interconnect where latency depends on core-bank distance." },
              { term: "S-NUCA", definition: "Static NUCA - address-to-bank mapping fixed by hashing; one-bank lookup, no migration." },
              { term: "D-NUCA", definition: "Dynamic NUCA - lines migrate/replicate toward requesters; multi-bank lookup, promotion policies." },
              { term: "Bank / slice", definition: "One tile of a NUCA cache with its own tags, data array and router." },
            ],
            diagram: {
              kind: "compare",
              title: "S-NUCA vs D-NUCA",
              caption: "Fixed addresses against migrating lines - predictability against locality.",
              left: {
                heading: "S-NUCA (static placement)",
                items: [
                  "Address hash fixes the bank forever",
                  "Lookup: try exactly one bank",
                  "No migration traffic, no policy state",
                  "Far cores pay long wires on every hot access",
                ],
              },
              right: {
                heading: "D-NUCA (dynamic placement)",
                items: [
                  "Lines migrate/replicate toward requesters",
                  "Lookup: several candidate banks or tag lookup",
                  "Hot lines hit at local-bank latency (2-3 cycles)",
                  "Costs: migration traffic, promotion policy, complexity",
                ],
              },
            },
            table: {
              caption: "The two NUCA policies on three axes.",
              headers: ["Axis", "S-NUCA", "D-NUCA"],
              rows: [
                ["Line placement", "hash(address) - fixed", "dynamic, toward requesters"],
                ["Lookup", "one bank, deterministic", "multi-bank search or tag directory"],
                ["Extra traffic", "none", "migration/replication on the mesh"],
                ["Hot-line latency", "distance-dependent every time", "local (2-3 cycles) after promotion"],
                ["Complexity", "lowest", "highest - policy + lookup + coherence interactions"],
              ],
            },
            bullets: [
              "UCA: one cache, uniform latency - dies with wire delay beyond a few cores.",
              "NUCA: banked cache on a network; latency = f(core, bank) distance.",
              "S-NUCA: address hash picks the bank; single-bank lookup; zero migration.",
              "D-NUCA: lines move toward use; lookup checks candidates or a tag directory.",
              "Numbers: 4×4 mesh S-NUCA averages ~10-15 cycles; D-NUCA hot lines ~3-5.",
              "D-NUCA's bill: migration bandwidth, promotion policy, harder coherence.",
            ],
            callout: {
              type: "tip",
              title: "D-NUCA's hidden lookup tax",
              body: "The subtle cost students miss: because a D-NUCA line's location is dynamic, the cache must find it - checking several candidate banks or consulting a tag lookup before data access. That search adds latency to every miss, partially eating the locality wins. S-NUCA's single fixed bank is why simple designs choose static despite the long-wire hits.",
            },
            examQuestions: [
              {
                q: "Explain uniform and non-uniform cache access. Why is NUCA unavoidable in large many-core caches, and compare S-NUCA and D-NUCA placement, lookup and traffic.",
                marks: 14,
                outline: [
                  "UCA: single structure, identical latency - limited by ports and wire delay",
                  "Banking + distribution makes latency distance-dependent = NUCA",
                  "S-NUCA: hash(address) fixes the bank; one-bank lookup; no migration",
                  "S-NUCA cost: far cores pay long wires on every access to their lines",
                  "D-NUCA: lines migrate/replicate toward requesters; multi-bank lookup",
                  "D-NUCA payoff: hot lines at 2-3 local cycles vs 10-15 far-bank cycles",
                  "D-NUCA costs: migration traffic, promotion policy, lookup tax",
                ],
              },
              {
                q: "What extra complexity does dynamic placement add over static placement in a NUCA cache?",
                marks: 7,
                outline: [
                  "Lookup cannot be a hash: must search candidate banks or keep a tag structure",
                  "A promotion/prediction policy decides which lines migrate",
                  "Migration and replication consume interconnect bandwidth",
                  "Coherence interacts: multiple copies must respect the protocol",
                  "Replacement accounting across banks becomes non-trivial",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Inclusion, exclusion and non-inclusive hierarchies",
            body: [
              "Inclusion policy governs what each cache level may contain relative to the level below. An inclusive hierarchy requires every L1 line to also be present in L2, and every L2 line in L3 - supersets as you go down. The payoff is coherence filtering: if a line is not in L3 it cannot be in any L1, and evictions cascade as back-invalidations (an L3 eviction purges the line from L2 and L1). An exclusive hierarchy forbids duplication: a line lives in exactly one level, so total effective capacity is the sum of all levels, but a miss must probe every level since none can vouch for another. Non-inclusive (NINE) sits between: not required to include, allowed to sometimes.",
              "The arithmetic shows the stakes. A 32 KB L1 + 1 MB L2 + 32 MB L3: inclusive gives the coherence anchor but caps hot data at the smallest level's filter - a line evicted from L2 is dragged out of L1 too, and L3's 32 MB can be polluted by L2's churn. Exclusive turns 33 MB of silicon into 33 MB of distinct data (inclusive effectively holds min(L1, L2, L3) copies of the overlapping set), which matters enormously for capacity-bound workloads; its price is probing all levels on every miss and more complex bookkeeping when lines move between levels.",
              "Exam framing: define the three policies with the containment rule each enforces, run the 32 KB / 1 MB / 32 MB capacity arithmetic, and attach the system consequence - inclusion buys cheap coherence via back-invalidations, exclusion buys maximum capacity via single copies, NINE hedges between the two. The applied closing point: Intel shifted from inclusive to non-inclusive L3 as core counts made back-invalidations expensive - vendor practice confirming the trade-off.",
            ],
            keyTerms: [
              { term: "Inclusive cache", definition: "A level's contents are a superset of the closer level's - enables coherence filtering and back-invalidations." },
              { term: "Exclusive cache", definition: "A line resides in exactly one level - maximum total capacity, but misses must probe every level." },
              { term: "Non-inclusive (NINE)", definition: "No containment requirement and no prohibition - a hedge between the two policies." },
              { term: "Back-invalidation", definition: "An eviction at an outer level that forcibly removes the line from inner levels (inclusive hierarchies)." },
              { term: "Coherence filtering", definition: "Checking only the last-level cache suffices to know whether any core holds the line - inclusion's protocol gift." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The inclusive hierarchy",
              caption: "Each tier is a superset of the one above - so the bottom tier answers for everyone.",
              tiers: [
                { label: "L1 - 32 KB per core", note: "subset of L2; fastest, filtered from below" },
                { label: "L2 - 1 MB", note: "superset of L1, subset of L3" },
                { label: "L3 - 32 MB shared", note: "superset of all - the coherence anchor" },
              ],
            },
            table: {
              caption: "The three containment policies.",
              headers: ["Policy", "Rule", "Benefit", "Cost"],
              rows: [
                ["Inclusive", "L1 ⊆ L2 ⊆ L3", "coherence filtering via L3; simple protocol", "capacity overlap; back-invalidations on eviction"],
                ["Exclusive", "levels disjoint", "total capacity = sum of all levels", "probe all levels on miss; complex moves"],
                ["Non-inclusive", "no containment rule", "flexible; scales without forced invalidations", "no filtering guarantee; all levels may need checks"],
              ],
            },
            bullets: [
              "Inclusive: every L1 line also lives in L2 and L3 - supersets downward.",
              "Inclusion's gift: coherence filtering - L3 answers for all cores.",
              "Inclusion's bill: back-invalidations - outer evictions purge inner copies.",
              "Exclusive: one copy anywhere - capacity sums (32+1+32 = 33 MB distinct data).",
              "Exclusive's bill: every miss probes all levels; lines migrate between levels.",
              "NINE: no rule either way - the modern hedge when back-invalidations get expensive.",
            ],
            callout: {
              type: "exam",
              title: "Inclusion is a coherence decision, not a capacity one",
              body: "The non-obvious link: inclusion looks like a capacity policy but its real customer is the coherence protocol - because L3 is a superset, a directory at L3 can find every sharer without asking any L1/L2. Exclusive maximizes capacity but forfeits that filter, so its coherence must probe everywhere. Tie the policy to the protocol and the answer rises a grade.",
            },
            examQuestions: [
              {
                q: "Define inclusive, exclusive and non-inclusive cache hierarchies. For a 32 KB L1, 1 MB L2 and 32 MB L3, compare effective capacity, miss handling and coherence consequences of each policy.",
                marks: 14,
                outline: [
                  "Inclusive: L1 ⊆ L2 ⊆ L3; contents are supersets downward",
                  "Inclusive coherence: L3 filtering suffices; evictions back-invalidate inner levels",
                  "Inclusive cost: overlapping capacity wasted; outer churn pollutes hot inner data",
                  "Exclusive: disjoint levels; capacity sums to ~33 MB distinct data",
                  "Exclusive cost: probe all levels on miss; bookkeeping for moving lines",
                  "NINE: no containment rule; flexible middle ground",
                  "Applied note: vendors moved toward non-inclusive L3 as cores multiplied",
                ],
              },
              {
                q: "What is a back-invalidation and why does it exist only in inclusive hierarchies?",
                marks: 7,
                outline: [
                  "An outer-level eviction that must also purge the line from inner levels",
                  "Existence reason: inclusion guarantees inner copies are subsets of outer",
                  "If L3 evicts a line, no L1/L2 may keep it - consistency of the superset rule",
                  "Exclusive hierarchies never need it - the line lives in exactly one level",
                  "Cost: hot lines can be evicted from L1 by unrelated L3 churn",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Transactions, transactional memory, STM and HTM",
            body: [
              "A transaction is a sequence of memory operations that must appear to execute atomically and in isolation: either every operation takes effect as if no other thread ran concurrently, or none do - all-or-nothing, with intermediate states never visible. Transactional memory (TM) is the mechanism that executes such critical sections speculatively instead of locking: the thread records its read set and write set, runs optimistically, and at the end validates that no concurrent thread touched what it read; success commits the writes, conflict aborts the transaction and retries from scratch. Locks order access by mutual exclusion whether or not there is conflict; TM pays for conflict detection to gain concurrency when there is none.",
              "The difference is visible in a two-account transfer. With locks, thread 1 locks A then B while thread 2 locks B then A - deadlock when both hold one lock. With TM, both run speculatively; thread 2 detects its read of B was written by thread 1, aborts, and retries - no ordering discipline required. Software TM (STM) implements read/write sets in a library or runtime with versioned memory - composable and flexible, but heavy: every access pays bookkeeping. Hardware TM (HTM) tracks sets in cache coherence machinery (transactional line state, Intel TSX-style best-effort) - near-zero overhead, but capacity-limited (sets larger than L1 abort) and never guaranteed to commit, so a lock fallback path is mandatory.",
              "Exam framing: define the transaction (atomicity plus isolation) distinctly from transactional memory (the mechanism executing it), then build the STM-versus-HTM table on three axes - overhead, capacity, composability - and close with the deadlock-free transfer example. The subtle mark: 'transaction' is a correctness concept borrowed from databases, while 'transactional memory' is the parallel programming mechanism implementing it in shared memory - the question usually wants both definitions before any comparison.",
            ],
            keyTerms: [
              { term: "Transaction", definition: "A sequence of operations with atomicity and isolation - all effects visible or none." },
              { term: "Transactional memory (TM)", definition: "Executing critical sections speculatively with conflict detection at commit instead of mutual exclusion at entry." },
              { term: "STM", definition: "Software TM - read/write sets and versioning in a library/runtime; composable but slow per access." },
              { term: "HTM", definition: "Hardware TM - conflict tracking in caches/coherence; near-zero overhead but capacity-limited and best-effort." },
              { term: "Read set / write set", definition: "The addresses a transaction read (validated at commit) and wrote (installed atomically at commit)." },
            ],
            diagram: {
              kind: "cycle",
              title: "The transactional life cycle",
              caption: "Optimistic execution, validation, and the retry loop - locks gate the door, transactions arbitrate the exit.",
              steps: [
                { label: "Begin", note: "mark transaction start, empty read/write sets" },
                { label: "Execute speculatively", note: "reads tracked, writes buffered or tagged" },
                { label: "Validate", note: "read set unchanged since first read?" },
                { label: "Commit", note: "install write set atomically" },
                { label: "Conflict -> abort", note: "discard effects, retry from Begin" },
              ],
            },
            codeExample: {
              language: "cpp",
              caption: "transfer.cpp - STM-style atomic block vs two locks",
              code: `// transactional: deadlock is impossible - conflicts abort and retry
atomic {                       // begin: start tracking
  int a = account[A];          // read set += A
  account[A] = a - 100;        // write set += A
  account[B] += 100;           // read+write set += B
}                              // commit: validate, install, done

// lock-based equivalent needs a GLOBAL ORDER (A before B) or risks deadlock
lock(&mA); lock(&mB); ... unlock(&mB); unlock(&mA);   // every thread must obey`,
            },
            bullets: [
              "Transaction = atomicity + isolation; TM = the speculative mechanism providing it.",
              "Execute optimistically; validate the read set at commit; conflict aborts and retries.",
              "Locks exclude whether or not threads conflict; TM pays detection to gain concurrency.",
              "Two-account transfer: ordered locking avoids deadlock; TM avoids it by construction.",
              "STM: library/runtime, versioned memory - composable, heavy per-access overhead.",
              "HTM: cache-coherence tracking - fast, capacity-limited (sets > L1 abort), needs lock fallback.",
            ],
            callout: {
              type: "warning",
              title: "HTM is best-effort, never guaranteed",
              body: "The production-critical subtlety: hardware transactions may abort for non-logical reasons - capacity (working set exceeds L1), interrupts, system calls, other threads' evictions. Correct code therefore always wraps the HTM path in a fallback lock: try the transaction a bounded number of times, then take the lock. Presenting HTM as a lock replacement rather than a fast path is the classic design-answer error.",
            },
            examQuestions: [
              {
                q: "Differentiate between a transaction and transactional memory. Explain the transactional execution model (read set, write set, validation, commit, abort) and compare STM with HTM.",
                marks: 14,
                outline: [
                  "Transaction: atomic + isolated operation sequence (database concept)",
                  "Transactional memory: the mechanism executing such sections speculatively",
                  "Model: begin, track reads/writes, validate read set, commit or abort-retry",
                  "Locks exclude unconditionally; TM detects conflicts and lets non-conflicting work proceed",
                  "STM: library/runtime versioning - composable, high per-access overhead",
                  "HTM: cache-coherence tracking - near-zero overhead, capacity-limited, best-effort",
                  "HTM requires a lock fallback for non-logical aborts (capacity, interrupts)",
                ],
              },
              {
                q: "Show why a two-account transfer deadlocks under naive locking but not under transactional memory.",
                marks: 7,
                outline: [
                  "T1 locks A then B; T2 locks B then A - circular wait, classic deadlock",
                  "Lock fix: global lock order discipline imposed on all programmers",
                  "TM: both threads run speculatively with tracked sets",
                  "T2's validation detects T1 wrote B; T2 aborts and retries",
                  "No ordering rule needed - conflict resolution is built into commit",
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
      title: "Graphics Processing Unit",
      summary:
        "Unit III turns to the throughput machine: GPUs as parallel computers, the architecture of a modern GPU from GPCs and SMs down to warps, the evolution of the graphics pipeline from fixed function to tensor cores, GPGPU computing and scalable multi-GPU systems, the architectural characteristics of future systems with their implications for users, vector addition as the canonical CUDA example, and the application landscape.",
      chapter: {
        number: "03",
        title: "The Throughput Machine",
        intro:
          "Unit III covers GPUs as parallel computers, modern GPU architecture (GPCs, SMs, warps, memory hierarchy), the evolution of graphics pipelines, GPGPUs and scalable GPUs, future systems and their implications for users, vector addition, and GPU applications.",
        inOneBreath:
          "A CPU optimizes one thread's latency with caches and prediction while a GPU optimizes aggregate throughput with thousands of simple latency-hiding threads; the pipeline evolved from fixed-function stages through programmable shaders to the unified G80 architecture that made CUDA possible; the grid-block-warp-thread hierarchy maps work onto SIMT lanes; the offload model, coalescing and vector addition show the programming contract in action.",
        sections: [
          {
            number: "3.1",
            title: "GPUs as parallel computers",
            body: [
              "A GPU is a parallel computer organized around a different objective than a CPU. A CPU is a latency machine: a handful of complex cores with deep speculation, big caches and branch predictors, all devoted to finishing one instruction stream as fast as possible. A GPU is a throughput machine: thousands of simple cores running tens of thousands of threads, designed to maximize total work completed per second. The GPU does not make any single thread fast - it makes latency irrelevant by having so many threads resident that while some wait on memory, others compute: latency hiding by oversubscription instead of latency removal by caching.",
              "The numbers make the contrast concrete. A modern CPU: 8-64 out-of-order cores, 3-5 GHz, megabytes of private cache per core, optimized for branchy, serial, unpredictable code. A modern GPU: 100+ streaming multiprocessors, tens of thousands of parallel thread lanes at 1-2 GHz, tens of megabytes of shared cache, memory bandwidth 1-3 TB/s, and a programming model that hands the hardware millions of independent threads. A workload of a million independent element updates - hopeless to accelerate with one CPU core - is the GPU's home ground; a workload of dependent branchy decisions is the CPU's.",
              "Exam framing: the comparison table is the answer skeleton - design goal (latency vs throughput), core design (complex vs simple), threading (few heavy threads vs massive lightweight), memory (big caches vs bandwidth + multithreading), best workload (serial/branchy vs data-parallel). The insight mark: the GPU does not hide latency with caches alone - it hides latency with an overabundance of threads, which is why occupancy matters in Unit V's CUDA section.",
            ],
            keyTerms: [
              { term: "Latency-oriented design", definition: "The CPU philosophy: caches, speculation and prediction to make one thread finish fast." },
              { term: "Throughput-oriented design", definition: "The GPU philosophy: thousands of threads so memory stalls of some are filled by compute of others." },
              { term: "Latency hiding", definition: "Keeping enough threads resident that stalling warps are replaced by ready warps - the GPU's substitute for big caches." },
              { term: "SIMT execution", definition: "Warps of 32 lanes executing one instruction with per-lane state - the GPU's execution model." },
              { term: "Occupancy", definition: "The fraction of a multiprocessor's thread slots actually filled - the dial that controls latency hiding." },
            ],
            diagram: {
              kind: "compare",
              title: "CPU vs GPU as parallel computers",
              caption: "Two answers to the same silicon budget: make one stream fast, or make total work fast.",
              left: {
                heading: "CPU - latency machine",
                items: [
                  "8-64 complex out-of-order cores",
                  "Deep speculation + branch prediction",
                  "Large private caches per core",
                  "Built for serial, branchy, unpredictable code",
                ],
              },
              right: {
                heading: "GPU - throughput machine",
                items: [
                  "100+ SMs, thousands of simple lanes",
                  "Massive lightweight threads (SIMT warps)",
                  "Bandwidth 1-3 TB/s, modest caches",
                  "Built for data-parallel, independent work",
                ],
              },
            },
            table: {
              caption: "The design contrast at a glance.",
              headers: ["Aspect", "CPU", "GPU"],
              rows: [
                ["Goal", "minimize single-thread latency", "maximize aggregate throughput"],
                ["Cores", "few, complex, out-of-order", "many, simple, in-order lanes"],
                ["Threads", "1-2 per core, heavyweight", "thousands resident, lightweight"],
                ["Latency strategy", "cache + predict + speculate", "oversubscribe with threads"],
                ["Memory", "large multi-level caches", "wide buses, coalescing, shared memory"],
                ["Sweet spot", "branchy serial logic", "independent data-parallel work"],
              ],
            },
            bullets: [
              "CPU: latency-oriented - caches, prediction, speculation serve one stream.",
              "GPU: throughput-oriented - thousands of threads hide memory latency.",
              "A stalled warp is replaced by a ready warp: latency hidden by oversubscription.",
              "GPU memory bandwidth (1-3 TB/s) dwarfs CPU buses - data-parallel feeds it.",
              "Branchy dependent code starves SIMT lanes; it belongs on the CPU.",
              "Occupancy - resident threads per SM - is the throughput machine's throttle.",
            ],
            callout: {
              type: "exam",
              title: "The GPU hides latency with threads, not caches",
              body: "The one-sentence insight examiners look for: a CPU attacks memory latency by making it shorter (caches, prefetch); a GPU attacks it by making it invisible (enough resident threads that stalls overlap with work). Every GPU design answer - occupancy, coalescing, shared memory - is a corollary of this single sentence.",
            },
            examQuestions: [
              {
                q: "Explain GPUs as parallel computers. Contrast the CPU's latency-oriented design with the GPU's throughput-oriented design across core complexity, threading, memory system and suitable workloads.",
                marks: 14,
                outline: [
                  "CPU: few complex out-of-order cores; goal is one stream's latency",
                  "CPU tools: multi-level caches, branch prediction, speculation",
                  "GPU: 100+ SMs of simple in-order lanes; goal is aggregate throughput",
                  "SIMT warps of 32 lanes; thousands of resident lightweight threads",
                  "Latency hiding: stalled warps replaced by ready warps",
                  "Memory: 1-3 TB/s bandwidth, coalescing, shared memory per block",
                  "Workload split: branchy/dependent -> CPU; independent/data-parallel -> GPU",
                ],
              },
              {
                q: "Why is a million independent element updates the GPU's home ground and the CPU's weak spot?",
                marks: 7,
                outline: [
                  "Independence: no thread waits on another - perfect for massive threading",
                  "CPU: one core executes serially; 64 cores still serialize setup overheads",
                  "GPU: millions of threads fill every SM lane; memory stalls overlap compute",
                  "Uniform work per element -> near-perfect load balance",
                  "Coalesced consecutive addresses saturate the wide memory bus",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Architecture of a modern GPU",
            body: [
              "A modern GPU is organized as a containment hierarchy the programmer must speak fluently. The chip contains several Graphics Processing Clusters (GPCs); each GPC holds multiple Streaming Multiprocessors (SMs) - the GPU's equivalent of a CPU core, with 64-128 FP32 lanes, 4 warp schedulers, a 64 K-entry register file, and a slice of unified L1/shared memory. Threads are grouped into warps of 32 executing one instruction in SIMT lockstep; warps are grouped into thread blocks scheduled wholly onto one SM (so they share that SM's shared memory and synchronize internally); blocks are grouped into a grid spanning the whole problem. Memory mirrors the hierarchy: per-thread registers, per-block shared memory, chip-wide L2, and off-chip GDDR/HBM.",
              "Worked sizing shows how work maps to hardware. Launching 1,048,576 threads as blocks of 256: each block = 8 warps; an SM hosting up to 2048 resident threads holds 64 warps, so 8 such blocks fit per SM at full occupancy; 4096 blocks distribute over ~108 SMs. Each thread computes one output using the index formula i = blockIdx.x·blockDim.x + threadIdx.x. Memory-wise, consecutive threads touching consecutive floats coalesce into full 32-byte transactions - the difference between a kernel running at 5 percent and 90 percent of peak bandwidth is usually just this access pattern.",
              "Exam framing: draw the hierarchy pyramid (grid -> block -> warp -> thread) and the memory counterpart (registers -> shared -> L2 -> DRAM), state warp size 32 and its SIMT consequence, and give the worked launch arithmetic. The insight mark: blocks cannot migrate between SMs (they own a piece of one SM's shared memory), so the SM is the scheduling unit and occupancy is per-SM.",
            ],
            keyTerms: [
              { term: "Streaming Multiprocessor (SM)", definition: "The GPU's core-equivalent: 64-128 FP32 lanes, 4 warp schedulers, register file, unified L1/shared memory." },
              { term: "Warp", definition: "A group of 32 threads executing one instruction in SIMT lockstep - the GPU's scheduling and divergence unit." },
              { term: "Thread block", definition: "A group of threads scheduled wholly onto one SM; may use that SM's shared memory and synchronize with __syncthreads()." },
              { term: "Grid", definition: "The full set of blocks launched by one kernel - the device-side image of the whole problem." },
              { term: "Shared memory", definition: "Per-block on-chip SRAM (~48-164 KB/SM) - programmer-managed scratchpad with near-register latency." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The CUDA execution hierarchy",
              caption: "Each tier maps onto hardware one level down - the grid is the problem, the thread is the lane.",
              tiers: [
                { label: "Grid", note: "all blocks - the whole kernel launch" },
                { label: "Block", note: "256 threads scheduled onto ONE SM, shared memory scope" },
                { label: "Warp", note: "32 lanes, one instruction, SIMT lockstep" },
                { label: "Thread", note: "one lane with private registers and index i" },
              ],
            },
            table: {
              caption: "Modern GPU numbers (Ampere-class, representative).",
              headers: ["Resource", "Per SM", "Per chip (108 SMs)"],
              rows: [
                ["FP32 lanes", "128", "~13,800"],
                ["Warp schedulers", "4", "432"],
                ["Resident threads", "2048 (64 warps)", "~221,000"],
                ["Registers", "64 K × 32-bit", "~7 M"],
                ["L1 / shared memory", "192 KB unified", "~20 MB"],
                ["L2 cache", "-", "40-50 MB"],
                ["Memory bandwidth", "-", "1-2 TB/s (GDDR6X/HBM)"],
              ],
            },
            bullets: [
              "Grid -> block -> warp (32 lanes) -> thread: the programmer's nesting of the machine.",
              "A block lives wholly on one SM: shared memory and __syncthreads() are block-scoped.",
              "Blocks of 256 threads = 8 warps; 2048-thread SM capacity = 8 blocks at full occupancy.",
              "Index formula: i = blockIdx.x * blockDim.x + threadIdx.x.",
              "Consecutive threads on consecutive addresses coalesce into full memory transactions.",
              "Memory ladder: registers -> shared memory -> L2 -> GDDR/HBM.",
            ],
            callout: {
              type: "tip",
              title: "Blocks do not migrate",
              body: "The scheduling subtlety: once a block is placed on an SM it stays there for its whole life, because it owns a slice of that SM's shared memory and register file. That is why occupancy, __syncthreads() scope and shared-memory sizing are all per-block decisions - and why a kernel that asks for too much shared memory per block silently caps the SM's occupancy.",
            },
            examQuestions: [
              {
                q: "Describe the architecture of a modern GPU: GPCs, SMs, warps, thread blocks and the memory hierarchy. Show how 1,048,576 threads in blocks of 256 map onto SMs, and explain coalescing.",
                marks: 14,
                outline: [
                  "Chip -> GPCs -> SMs: the SM as the GPU's core-equivalent (lanes, schedulers, registers)",
                  "Warp = 32 lanes executing one instruction (SIMT)",
                  "Block = scheduled wholly onto one SM; shared memory + __syncthreads() scope",
                  "Grid = all blocks of one kernel launch",
                  "Arithmetic: 256 threads = 8 warps; 2048-thread SM = 8 blocks full occupancy",
                  "4096 blocks over ~108 SMs; i = blockIdx.x*blockDim.x + threadIdx.x",
                  "Coalescing: consecutive threads, consecutive floats, full transactions",
                ],
              },
              {
                q: "Why can a thread block not move to a different SM after launch?",
                marks: 7,
                outline: [
                  "The block owns registers and shared memory carved from that SM",
                  "__syncthreads() and shared-memory data assume one SM's resources",
                  "Moving would require migrating live state - no hardware support",
                  "Hence the SM is the scheduling unit; blocks queue per SM",
                  "Design consequence: size blocks and shared memory for the target SM",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Evolution of the graphics pipeline",
            body: [
              "The GPU's ancestor is the graphics pipeline - a fixed sequence of stages turning 3D scene data into pixels: application/geometry setup feeding vertex transformation, then rasterization converting triangles into fragments, then texture mapping and fragment shading colouring those fragments, and finally ROP (raster operations) blending and writing pixels to the framebuffer. Through the 1990s every stage was fixed function - dedicated silicon doing one transformation - which meant spectacular pixel throughput and zero flexibility: lighting models were whatever the hardware chose.",
              "The evolution runs in five named eras. Fixed function (to 2000): specialized stage hardware, GeForce 256 (1999) marketed as the first 'GPU' with hardware transform and lighting. Programmable shaders (2001-2005): vertex and pixel stages became programmable - small programs (shaders) replaced fixed transforms, first on GeForce 3. Unified shaders (2006): the G80 (GeForce 8800) replaced separate vertex/pixel units with one pool of unified, general-purpose cores executing a common instruction set - the moment the GPU became a general parallel machine. GPGPU era (2007+): CUDA exposed the unified cores directly, with Fermi (2010) adding real caches and ECC. Throughput era (2017+): tensor cores and RT cores added domain-specific matrix and ray-tracing units beside the FP32 lanes.",
              "Exam framing: draw the five pipeline stages in order, then compress the five eras into one line each with their landmark chips. The mark-winning connection: programmable shaders (era 2) taught programmers to write per-vertex/per-pixel programs, and the unified architecture (era 3) made those programs runnable on general cores - GPGPU is the direct child of graphics evolution, not a separate invention.",
            ],
            keyTerms: [
              { term: "Graphics pipeline", definition: "The staged path from scene data to pixels: geometry -> vertex -> rasterization -> fragment/texture -> ROP." },
              { term: "Fixed function", definition: "Pre-2001 hardware stages with no programmability - fast but frozen algorithms." },
              { term: "Shader", definition: "A user program executing per-vertex or per-fragment - the programmability that unlocked GPGPU." },
              { term: "Unified shader architecture", definition: "One pool of general cores serving all pipeline stages (G80, 2006) - the birth of the modern GPU." },
              { term: "Tensor core", definition: "A domain unit executing small matrix multiply-accumulates - the throughput era's specialization." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From scene to pixels - the classic pipeline",
              caption: "Five stages, left to right - each one programmable today, fixed function before 2001.",
              stages: [
                { label: "Application", note: "scene, camera, draw calls" },
                { label: "Vertex / geometry", note: "transform + shade each vertex" },
                { label: "Rasterization", note: "triangles -> fragments" },
                { label: "Texture / fragment", note: "colour + sample each fragment" },
                { label: "ROP / display", note: "blend, depth test, framebuffer" },
              ],
            },
            table: {
              caption: "Five eras of GPU evolution.",
              headers: ["Era", "Years", "Landmark", "What changed"],
              rows: [
                ["Fixed function", "-2000", "GeForce 256 (1999)", "dedicated stage hardware, hardware T&L"],
                ["Programmable shaders", "2001-2005", "GeForce 3 / FX", "vertex + pixel programs replace fixed stages"],
                ["Unified shaders", "2006", "G80 / 8800 GTX", "one general core pool for all stages"],
                ["GPGPU / CUDA", "2007-2016", "CUDA (2007), Fermi (2010)", "C-like API, real caches, ECC"],
                ["Throughput era", "2017+", "Volta, Ampere", "tensor cores, RT cores beside FP32"],
              ],
            },
            bullets: [
              "Classic pipeline: application -> vertex -> rasterization -> fragment/texture -> ROP.",
              "Fixed function era: frozen algorithms, spectacular pixel rates, zero flexibility.",
              "2001: programmable vertex/pixel shaders - programs per vertex and per fragment.",
              "2006: G80 unifies all stages into one general core pool - the modern GPU is born.",
              "2007: CUDA exposes the unified cores - C-like general computing; 2017+: tensor and RT cores.",
              "GPGPU is a child of pipeline evolution, not a separate invention.",
            ],
            callout: {
              type: "exam",
              title: "The 2006 moment that enabled CUDA",
              body: "The causal chain worth writing: programmable shaders taught the industry to write small per-element programs; the unified shader architecture gave every element the same general core; CUDA (2007) simply removed the graphics-specific vocabulary from the programming interface. One sentence tying G80 to CUDA shows you know why general-purpose GPU computing became possible exactly when it did.",
            },
            examQuestions: [
              {
                q: "Draw and explain the classic graphics pipeline stages. Trace the evolution of GPU architecture from fixed function through programmable shaders and the unified architecture to CUDA-era and tensor-core designs, naming landmark chips.",
                marks: 14,
                outline: [
                  "Pipeline: application -> vertex/geometry -> rasterization -> texture/fragment -> ROP",
                  "Fixed function (-2000): dedicated stage silicon, hardware T&L (GeForce 256)",
                  "Programmable shaders (2001): vertex + pixel programs (GeForce 3)",
                  "Unified architecture (2006): one general core pool for all stages (G80)",
                  "CUDA era (2007+): C-like general computing; Fermi adds caches + ECC",
                  "Throughput era (2017+): tensor cores, RT cores specialization",
                  "Causal link: shaders -> unified cores -> CUDA - GPGPU's lineage",
                ],
              },
              {
                q: "Why did the unified shader architecture matter more for computing than for graphics?",
                marks: 7,
                outline: [
                  "Separate vertex/pixel units idled whenever the workload skewed to one type",
                  "Unification made all cores general-purpose with one instruction set",
                  "Graphics workloads benefit from load balancing; compute workloads need generality",
                  "The same cores now run arbitrary kernels, not just shading programs",
                  "CUDA followed within a year - the architecture was already a parallel machine",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "GPGPUs and scalable GPUs",
            body: [
              "GPGPU - general-purpose computing on GPUs - is the practice of using the graphics processor's parallel lanes for non-graphics computation. The first generation (early 2000s) smuggled computation through graphics APIs: data packed into textures, algorithms written as pixel shaders, results read back from the framebuffer - powerful but hostile. CUDA (2007) and later OpenCL made the contract honest: C-like kernels, explicit device memory, and an offload model where the host CPU orchestrates and the device computes. The canonical offload sequence: allocate device buffers, copy input host-to-device, launch the kernel as a grid of blocks, copy results device-to-host, free. Everything the programmer writes in Unit V's CUDA section is this loop decorated with optimization.",
              "The worked number that dominates GPGPU thinking is the transfer: PCIe 4.0 moves about 16-32 GB/s, so copying 100 MB takes roughly 3-6 ms - while the kernel computing on those 100 MB (a million elements) runs in ~10 µs. The transfer, not the compute, is the bottleneck, which produces the two standing rules: batch work into large launches, and overlap transfers with computation using streams (Unit V). Scalable GPUs extend the same model across chips: multiple GPUs in one node connected by NVLink (peer bandwidth ~10× PCIe) or switched fabrics, each GPU owning its memory partition, with libraries (NCCL-style collectives) synchronizing across devices - the GPU cluster is Unit I's message passing architecture wearing a new costume.",
              "Exam framing: define GPGPU and its shader-era history, write the five-step offload sequence, quantify the PCIe-versus-kernel imbalance with the 100 MB / 10 µs numbers, and describe multi-GPU scaling through NVLink, per-device memory partitions and collective synchronization. The insight mark: memory locality rules everything - the fastest kernel cannot save a program that shuttles data across PCIe every iteration, so batching and overlap are the first optimizations, not kernel tuning.",
            ],
            keyTerms: [
              { term: "GPGPU", definition: "Using GPU lanes for general computation - originally via graphics APIs, now via CUDA/OpenCL." },
              { term: "Offload model", definition: "Host orchestrates, device computes: allocate -> copy-in -> launch -> copy-out -> free." },
              { term: "PCIe transfer overhead", definition: "Host-device copies at ~16-32 GB/s - usually the true bottleneck of naive GPGPU programs." },
              { term: "NVLink", definition: "GPU-to-GPU interconnect with ~10× PCIe peer bandwidth enabling multi-GPU scaling." },
              { term: "GPU partition", definition: "Each device's private memory in a multi-GPU system - data must be explicitly placed and synchronized." },
            ],
            diagram: {
              kind: "flow",
              title: "The GPGPU offload loop",
              caption: "Five steps every CUDA program shares - and step 2 or 4 is usually where the time goes.",
              steps: [
                { label: "Allocate", note: "cudaMalloc device buffers" },
                { label: "Copy in (H2D)", note: "PCIe ~16-32 GB/s - 100 MB ≈ 3-6 ms" },
                { label: "Launch kernel", note: "grid of blocks on SMs - ~10 µs for 1M elements" },
                { label: "Copy out (D2H)", note: "results return over the same bus" },
                { label: "Free / repeat", note: "batch and overlap with streams" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "offload.c - the canonical host sequence",
              code: `float *x, *y, *z;                          /* host arrays */
cudaMalloc((void**)&d_x, n * sizeof(float));   /* device buffers */
cudaMalloc((void**)&d_y, n * sizeof(float));
cudaMalloc((void**)&d_z, n * sizeof(float));

cudaMemcpy(d_x, x, n * 4, cudaMemcpyHostToDevice);   /* copy in  */
cudaMemcpy(d_y, y, n * 4, cudaMemcpyHostToDevice);
vecAdd<<<(n + 255) / 256, 256>>>(d_x, d_y, d_z, n);  /* compute  */
cudaMemcpy(z, d_z, n * 4, cudaMemcpyDeviceToHost);   /* copy out */

cudaFree(d_x);  /* free; in production: streams overlap steps 2 and 3 */`,
            },
            bullets: [
              "GPGPU: shader-era tricks -> CUDA/OpenCL honest C-like kernels.",
              "Offload loop: allocate -> copy-in -> launch -> copy-out -> free.",
              "PCIe ~16-32 GB/s: 100 MB copy ≈ 3-6 ms vs ~10 µs kernel - transfers dominate.",
              "Standing rules: batch launches large; overlap copies with compute via streams.",
              "Scalable GPUs: NVLink peer links (~10× PCIe), per-device memory partitions.",
              "Multi-GPU programming is message passing again - explicit placement + collectives.",
            ],
            callout: {
              type: "warning",
              title: "The bus eats naive kernels",
              body: "The measured trap: a perfectly written kernel on a million elements takes ~10 µs, but copying its inputs over PCIe takes milliseconds. A program that copies data in and out every iteration runs 100× slower than its kernel speed suggests. Batch iterations between transfers, and overlap the unavoidable ones with streams - GPGPU performance engineering starts at the bus, not the SMs.",
            },
            examQuestions: [
              {
                q: "Explain GPGPU computing: the shader-era origins, the CUDA offload model with its five steps, and why PCIe transfers dominate naive programs. Quantify with 100 MB of data and a million-element kernel.",
                marks: 14,
                outline: [
                  "GPGPU definition; era 1 hid computation in textures and pixel shaders",
                  "CUDA (2007): honest C-like kernels, explicit device memory",
                  "Offload steps: allocate -> copy-in -> launch grid -> copy-out -> free",
                  "PCIe 4.0 ≈ 16-32 GB/s: 100 MB ≈ 3-6 ms per direction",
                  "Kernel on 1M elements ≈ 10 µs - transfer is 300× the compute",
                  "Consequences: batch launches; overlap copies and kernels with streams",
                  "Rule: minimize host-device traffic - data locality governs GPGPU speed",
                ],
              },
              {
                q: "How do multi-GPU systems scale beyond a single device?",
                marks: 7,
                outline: [
                  "Each GPU owns a private memory partition - explicit data placement",
                  "NVLink provides ~10× PCIe peer-to-peer bandwidth between devices",
                  "Work partitioned per device; partial results synchronized by collectives",
                  "Programming model reverts to message passing across devices",
                  "Node- and cluster-level scaling follows the same pattern (Unit V's MPI)",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Future systems and the implications for users",
            body: [
              "The syllabus's forward-looking section asks what architectural trends mean for the people writing code. The trends: convergence (CPU and GPU sharing address spaces and packages, coherent interconnects like CXL), memory bandwidth growth (HBM stacks) struggling to keep pace with compute growth, specialization proliferating (tensor, RT, AI units beside general lanes), and chiplets replacing monolithic dies. Together they push systems further toward the throughput end and make data movement - not arithmetic - the first-order cost: an operation that reads its operands from DRAM costs more in energy and time than the arithmetic itself, often by an order of magnitude.",
              "The design implications sort into a 2×2 by parallelism and data movement. Low-parallelism, low-movement workloads stay CPU territory: branchy logic, cache-friendly pointer chasing. High-parallelism, low-movement workloads are the GPU sweet spot: dense linear algebra, image processing, neural networks - data reused in place, coalesced access. Low-parallelism, high-movement workloads are streaming problems: overlap transfers with compute, prefetch, batch. The danger quadrant - high parallelism with scattered data movement (random gathers, hash joins on cold data) - is communication-bound on any machine and demands algorithmic change (tiling, layout change, compression), not a faster chip.",
              "Exam framing: name three trends (convergence, bandwidth-vs-compute gap, specialization), state the 'data movement is the new bottleneck' principle with its energy arithmetic, and map the four workload quadrants to their architectural answers. The insight mark: as systems evolve, the user's job shifts from optimizing arithmetic to optimizing where bytes live - layout, batching and reuse decide performance before instruction counts do.",
            ],
            keyTerms: [
              { term: "CPU-GPU convergence", definition: "Shared address spaces and coherent interconnects (CXL-style) blurring the host-device boundary." },
              { term: "Bandwidth-compute gap", definition: "Compute grows faster than memory bandwidth - arithmetic gets cheaper than moving data." },
              { term: "Domain specialization", definition: "Fixed-function units (tensor, RT, video) beside general lanes - spending dark silicon on efficiency." },
              { term: "Data movement dominance", definition: "Reading operands from DRAM costs more energy/time than the arithmetic on them - layout beats instruction count." },
              { term: "Chiplet integration", definition: "Composing processors from multiple dies on one package - scaling yield and mix instead of die size." },
            ],
            diagram: {
              kind: "matrix",
              title: "Which architecture for which workload?",
              caption: "Plot by parallelism and data movement - three quadrants have owners; the fourth demands redesign.",
              axes: { x: "Parallelism in the workload (low -> high)", y: "Data movement per operation (low -> high)" },
              quadrants: [
                { label: "Streaming sequential", note: "low parallelism, high movement - batch, prefetch, overlap copies" },
                { label: "The danger zone", note: "high parallelism, scattered movement - communication-bound anywhere; re-tile the algorithm" },
                { label: "CPU territory", note: "low parallelism, low movement - branchy, cache-friendly logic" },
                { label: "GPU sweet spot", note: "high parallelism, data reused in place - dense math, coalesced" },
              ],
            },
            table: {
              caption: "Trends and their user implications.",
              headers: ["Trend", "Implication for users"],
              rows: [
                ["Convergence (shared address space)", "less explicit copying; coherence-aware placement still matters"],
                ["Bandwidth-compute gap", "optimize data layout and reuse before arithmetic"],
                ["Specialization (tensor/RT units)", "pick libraries matched to units; generic code wastes them"],
                ["Chiplets + more cores", "expose more parallelism; per-die locality becomes NUMA-like"],
                ["Dark silicon pressure", "domain accelerators win only for their exact workload shape"],
              ],
            },
            bullets: [
              "Trend 1: CPU-GPU convergence - shared address spaces, coherent links (CXL).",
              "Trend 2: compute outgrows bandwidth - moving data costs more than computing on it.",
              "Trend 3: specialization everywhere - tensor/RT/video units beside general lanes.",
              "Trend 4: chiplets - scaling by composition, with NUMA-like locality inside packages.",
              "User rule: layout, batching and reuse decide performance before instruction counts.",
              "Danger quadrant: parallel + scattered access - fix the algorithm, not the hardware.",
            ],
            callout: {
              type: "warning",
              title: "The danger zone is a design failure, not a hardware one",
              body: "The quadrant students misread: a workload with massive parallelism but random, scattered data movement is slow on every machine - GPU, CPU, future accelerator alike - because it is bound by memory traffic, not compute. The cure is never 'wait for better hardware'; it is restructuring: tiling for locality, changing layout (structure-of-arrays), compressing indices. Recognizing an algorithmic problem as architectural is the mature answer.",
            },
            examQuestions: [
              {
                q: "Discuss the architectural characteristics of future parallel systems - CPU-GPU convergence, the bandwidth-compute gap, specialization and chiplets - and their implications for application designers.",
                marks: 14,
                outline: [
                  "Convergence: shared address spaces, coherent interconnects reduce explicit copies",
                  "Bandwidth-compute gap: moving data costs more energy/time than arithmetic",
                  "Implication: layout, batching and reuse dominate performance engineering",
                  "Specialization: tensor/RT units reward library-matched code",
                  "Chiplets: composition scaling with NUMA-like on-package locality",
                  "Dark silicon: accelerators win only for matching workload shapes",
                  "Design rule: expose parallelism and minimize data movement first",
                ],
              },
              {
                q: "Classify workloads by parallelism and data movement and give the right architectural answer for each quadrant.",
                marks: 7,
                outline: [
                  "Low parallelism + low movement: CPU - branchy cache-friendly logic",
                  "High parallelism + low movement: GPU sweet spot - dense math, coalesced",
                  "Low parallelism + high movement: streaming - batch, prefetch, overlap",
                  "High parallelism + high movement: danger zone - communication-bound everywhere",
                  "Danger-zone cure: algorithmic restructuring (tiling, layout), not faster hardware",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Vector addition: the CUDA hello world",
            body: [
              "Vector addition - z[i] = x[i] + y[i] for a million elements - is the syllabus's canonical example because it isolates every layer of the GPU contract with nothing else to distract. The kernel is one line of arithmetic; everything around it is architecture. The host allocates three device buffers and copies the inputs in; the launch configuration grids the problem: 1,048,576 elements at 256 threads per block = 4,096 blocks; each thread computes its global index i = blockIdx.x·blockDim.x + threadIdx.x, checks i < n, loads two floats, stores one. One thread, one element - the map pattern of Unit IV in CUDA clothing.",
              "Where the bytes live decides the speed. Each thread's i and the two loaded floats live in registers (fastest, per-thread); nothing needs shared memory here because threads share nothing; the three arrays stream through L2 from device DRAM. Because consecutive threads read consecutive addresses, each warp's 32 loads coalesce into full 128-byte transactions - the kernel is purely bandwidth-bound and runs at most of the DRAM's 1-2 TB/s, finishing a million adds in ~10 µs. Deliberately misalign the access (stride 32 floats per thread) and the same kernel drops toward 5 percent of peak: same arithmetic, same instruction count, twenty times slower.",
              "Exam framing: write the kernel and the launch line verbatim - examiners grade the index formula and the bounds check specifically - then explain coalescing and the memory ladder with the ~10 µs number. The two lost marks in the wild: forgetting the i < n guard (out-of-bounds writes when n is not a multiple of 256), and launching exactly n/256 blocks without the ceiling division.",
            ],
            keyTerms: [
              { term: "Kernel", definition: "The __global__ function executed by every thread of the grid - here one add per thread." },
              { term: "Launch configuration", definition: "<<<blocks, threads>>> - how the grid is tiled; (n + 255)/256 blocks of 256 threads covers any n." },
              { term: "Global index formula", definition: "i = blockIdx.x * blockDim.x + threadIdx.x - maps a 1-D thread to its element." },
              { term: "Coalescing", definition: "Consecutive threads accessing consecutive addresses merge into full memory transactions - bandwidth's first commandment." },
              { term: "Bounds check", definition: "if (i < n) - the guard that keeps the last partial block from writing past the array." },
            ],
            diagram: {
              kind: "layers",
              title: "Where the vector's bytes live during the kernel",
              caption: "Top is fastest and smallest - vector addition needs only the top rung plus streaming through the bottom.",
              layers: [
                { label: "Registers (per thread)", note: "index i, the two loaded floats - zero traffic" },
                { label: "Shared memory (per block)", note: "unused here - no inter-thread sharing" },
                { label: "L2 cache (chip-wide)", note: "streams the three arrays" },
                { label: "Device DRAM (GDDR/HBM)", note: "the real bandwidth limit: 1-2 TB/s" },
              ],
            },
            codeExample: {
              language: "cuda",
              caption: "vecadd.cu - the complete device side",
              code: `__global__ void vecAdd(const float* x, const float* y, float* z, int n) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;  // global thread index
    if (i < n) z[i] = x[i] + y[i];                  // bounds check: last block
}

/* host side: n = 1048576, 256 threads per block */
int blocks = (n + 255) / 256;          // ceiling division -> 4096 blocks
vecAdd<<<blocks, 256>>>(d_x, d_y, d_z, n);
/* consecutive threads -> consecutive floats -> fully coalesced, ~10 us */`,
            },
            bullets: [
              "One thread computes one element - map in CUDA clothing.",
              "Index formula: i = blockIdx.x * blockDim.x + threadIdx.x; guard with if (i < n).",
              "Launch: (n + 255)/256 blocks of 256 threads = 4096 blocks for n = 2^20.",
              "Operands live in registers; the arrays stream L2 <-> DRAM.",
              "Consecutive addressing coalesces warp loads into full transactions.",
              "Bandwidth-bound: ~10 µs for a million adds; strided access drops to ~5% of peak.",
            ],
            callout: {
              type: "exam",
              title: "Grade the formula and the guard",
              body: "Examiners grade two tokens specifically: the index formula and the i < n bounds check. Write both even in a definition answer - the formula proves you know how the grid maps to data, the guard proves you know the last block is partial whenever n is not a multiple of the block size. The ceiling division (n + 255)/256 completes the picture.",
            },
            examQuestions: [
              {
                q: "Write the CUDA kernel for vector addition of two million-element arrays. Explain the launch configuration, the global index formula, why the bounds check is necessary, and how coalescing determines the kernel's performance.",
                marks: 14,
                outline: [
                  "Kernel: __global__ vecAdd; z[i] = x[i] + y[i] guarded by if (i < n)",
                  "Index formula: i = blockIdx.x * blockDim.x + threadIdx.x",
                  "Launch: (n + 255)/256 = 7813 blocks (n = 2M), 256 threads each",
                  "Bounds check: the final block is partial when n % 256 != 0",
                  "Memory: operands in registers; arrays stream through L2 from DRAM",
                  "Coalescing: consecutive threads, consecutive floats, full transactions",
                  "Performance: bandwidth-bound ~10 µs; strided access falls to ~5% of peak",
                ],
              },
              {
                q: "Why does a stride-32 access pattern slow the same vector-add kernel by twenty times?",
                marks: 7,
                outline: [
                  "A warp's 32 loads now touch 32 distant cache lines instead of one",
                  "Each load becomes its own memory transaction - 32× the request count",
                  "Effective bandwidth collapses toward a fraction of peak",
                  "Coalescing exists because DRAM delivers full lines per transaction",
                  "Rule: layout the data so thread id maps to consecutive addresses",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Applications of GPUs",
            body: [
              "GPU applications are the workloads whose shapes fit the throughput machine - and the fit is judgeable by three tests: is the work data-parallel (millions of independent elements), does each element do enough arithmetic to amortize its loads, and can the data layout be made coalesced? Deep learning tops the list: training a network is repeated matrix multiply-accumulate over millions of weights - exactly the tensor core's operation - which is why GPU availability created the modern AI era. High-performance computing follows: CFD solvers, molecular dynamics, weather models - stencil and sparse kernels over regular grids. Graphics remains the native workload: rasterization and ray tracing are per-pixel/per-ray parallel by construction.",
              "The broader list shows the pattern's reach: video encode/decode (per-block parallel transforms), medical imaging (per-voxel reconstruction), computational finance (Monte Carlo paths - millions of independent walks), bioinformatics (sequence alignment scored per cell), database analytics (column-wise scans and aggregations), cryptography (per-block hashing). Each succeeds by the same recipe the vector-add section demonstrated: partition the domain into independent elements, coalesce their memory access, launch enough threads to hide latency. Applications that fail the three tests - branch-heavy transaction processing, pointer-chasing graph analytics on cold data - remain CPU territory or demand restructuring.",
              "Exam framing: organize the answer by domain with one workload characteristic each (ML: matrix multiply-accumulate; HPC: stencils; graphics: per-pixel/per-ray; Monte Carlo: independent paths), then close with the three-test checklist that explains why some applications thrive and others do not. The insight mark: GPUs succeed where the problem already looks like a map over regular data - where it does not, the programmer's job is to make it look like one.",
            ],
            keyTerms: [
              { term: "Data-parallel workload", definition: "Millions of independent similar operations - the shape every GPU application shares." },
              { term: "Tensor core workload", definition: "Dense matrix multiply-accumulate - the arithmetic core of deep learning training and inference." },
              { term: "Stencil computation", definition: "Each output reads a fixed neighbourhood of inputs - the shape of CFD, weather and imaging kernels." },
              { term: "Monte Carlo simulation", definition: "Millions of independent random walks - embarrassingly parallel, GPU-native." },
              { term: "Compute suitability test", definition: "Data-parallel? Enough arithmetic per byte loaded? Coalescible layout? All three or the CPU wins." },
            ],
            diagram: {
              kind: "fork",
              title: "Which application lands on the GPU?",
              caption: "Three tests decide - pass them and the GPU multiplies your throughput; fail one and rethink.",
              start: "A candidate application",
              branches: [
                { label: "Independent elements, dense math", outcome: "GPU-native - deep learning, dense linear algebra, image processing", good: true },
                { label: "Independent elements, light math", outcome: "bandwidth-bound but still GPU-friendly - video codecs, Monte Carlo, scans", good: true },
                { label: "Regular neighbourhood compute", outcome: "GPU-friendly with tiling - stencils: CFD, weather, medical imaging", good: true },
                { label: "Branchy, dependent, scattered access", outcome: "CPU territory - transaction processing, pointer-chasing graphs", good: false },
              ],
            },
            table: {
              caption: "GPU applications by domain.",
              headers: ["Domain", "Workload", "Why it fits"],
              rows: [
                ["Deep learning", "matrix multiply-accumulate", "tensor cores + massive parallelism"],
                ["HPC / simulation", "stencils over grids", "regular access, tiled shared memory"],
                ["Graphics / ray tracing", "per-pixel, per-ray shading", "parallel by construction"],
                ["Video processing", "per-block transforms", "independent blocks, coalesced"],
                ["Computational finance", "Monte Carlo paths", "millions of independent walks"],
                ["Bioinformatics", "sequence alignment", "per-cell scoring, batched queries"],
                ["Database analytics", "column scans, aggregation", "linear reads, reductions"],
              ],
            },
            bullets: [
              "Deep learning: repeated GEMM - tensor cores exist for exactly this shape.",
              "HPC: stencil kernels over regular grids tile beautifully into shared memory.",
              "Graphics stays native: per-pixel and per-ray work is parallel by construction.",
              "Monte Carlo and codecs: independent light-weight elements - bandwidth-bound but parallel.",
              "Fails the tests: branchy transactions, pointer-chasing graphs - stay on CPUs.",
              "The recipe is always vector-add's: partition, coalesce, oversubscribe.",
            ],
            callout: {
              type: "tip",
              title: "Make the problem look like a map",
              body: "The transferable insight: GPU success stories are mostly applications that were restructured, not rewritten - graph algorithms re-ordered into frontier batches, sparse math re-laid-out for coalescing, Monte Carlo re-batched. When an application 'doesn't suit GPUs', the precise meaning is usually that its data movement pattern doesn't - and movement patterns are designable.",
            },
            examQuestions: [
              {
                q: "Discuss the major application areas of GPU computing - deep learning, scientific simulation, graphics, media, finance and data analytics - describing for each why the workload suits the GPU's architecture.",
                marks: 14,
                outline: [
                  "Deep learning: matrix multiply-accumulate - tensor cores, millions of weights",
                  "HPC/simulation: stencil computations over regular grids - tiling-friendly",
                  "Graphics/ray tracing: per-pixel and per-ray work, parallel by construction",
                  "Video/media: per-block transforms, independent and coalesced",
                  "Finance: Monte Carlo - millions of independent random walks",
                  "Analytics: column scans and reductions - linear coalesced reads",
                  "Unifying test: data-parallel + arithmetic-dense + coalescible layout",
                ],
              },
              {
                q: "Why does online transaction processing remain a poor GPU application?",
                marks: 7,
                outline: [
                  "Transactions are branchy and control-dependent - SIMT divergence wastes lanes",
                  "Access is scattered small records - no coalescing, random latency",
                  "Threads within a warp take different paths - throughput collapses",
                  "Dependencies between operations prevent massive oversubscription",
                  "CPU's caches, prediction and per-thread independence are the right tools",
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
      title: "Introduction to Parallel Programming",
      summary:
        "Unit IV teaches the grammar of parallel programs: decomposition strategies and implementation mechanisms, performance theory with work and span, the nesting pattern that composes everything else, the parallel control patterns, parallel data management, and the named patterns - map (scaled vector, Mandelbrot), reduce and scan with their fused forms, gather, scatter, pack, stencil and recurrence, fork-join and pipeline.",
      chapter: {
        number: "04",
        title: "Patterns for Parallel Programs",
        intro:
          "Unit IV covers parallel programming strategies and mechanisms, performance theory, the nesting pattern, parallel control patterns, parallel data management, map (scaled vector, Mandelbrot), reduce and fusing map with reduce, scan and fusing map with scan, gather, scatter, pack, stencil, recurrence, fork-join and pipeline.",
        inOneBreath:
          "Decompose into independent work first, then choose mechanisms; work W over span S bounds speedup at W/S; every pattern nests inside every other; map is embarrassingly parallel, reduce folds with a tree, scan computes all prefixes; gather and scatter move data by index with scatter's write conflicts needing atomics; fork-join recursively divides while pipeline streams stages.",
        sections: [
          {
            number: "4.1",
            title: "Strategies and mechanisms",
            body: [
              "Parallel programming separates strategy (what to decompose and how to assign it) from mechanism (what runtime constructs express it). The strategy sequence: decompose the problem into tasks that can run concurrently - by data (each task owns a chunk: rows of a matrix, frames of a video), by tasks (each task is a different operation: read, parse, transform), or recursively (divide and conquer); then assign tasks to workers - statically (predictable uniform work), dynamically (a shared queue of chunks), or by work-stealing (idle workers take from busy workers' deques); finally map onto the machine's memory model. A decomposition whose tasks share mutable state is a race generator no mechanism can fix.",
              "Mechanisms are the vocabulary the strategy is written in: threads with shared memory and synchronization (Pthreads, OpenMP - Unit V), tasks with channels/message passing (MPI, task runtimes), and nested compositions of both. The same matrix multiply can be a data-parallel map (rows to threads), a fork-join recursion (block-recursive multiply), or a pipeline (staged by operation) - the mechanisms differ, the decomposition is the decision that sets the performance ceiling. Worked contrast: multiplying an n×n matrix by a vector - row-decomposition gives n independent tasks with zero communication and perfect scaling; column-decomposition makes every task read the whole vector, multiplying communication by p; the choice of chunk (row vs column) decided everything before any code was written.",
              "Exam framing: define strategy versus mechanism, walk decompose-assign-map in order, and give the row-versus-column matrix-vector example as the worked case with its communication arithmetic. The mark-winning principle: correctness mechanisms - locks, atomics - come last; if the decomposition shares mutable state across tasks, the program is wrong at the design level, and synchronization merely makes the race deterministic-looking while capping speedup at Amdahl's serial fraction.",
            ],
            keyTerms: [
              { term: "Decomposition", definition: "Splitting the problem into concurrently executable tasks - by data, by task, or recursively." },
              { term: "Assignment", definition: "Mapping tasks to workers - static for uniform work, dynamic queue for irregular, work-stealing for adaptive." },
              { term: "Data decomposition", definition: "Each worker owns a partition of the data - the default strategy for array-heavy science code." },
              { term: "Task decomposition", definition: "Each worker performs a different operation - pipelining by stage is its canonical form." },
              { term: "Mechanism", definition: "The runtime vocabulary expressing the strategy: threads + locks, tasks + channels, or directive-based models." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a decomposition strategy",
              caption: "The decomposition sets the ceiling - mechanisms only decide whether you reach it.",
              start: "Decompose the problem",
              branches: [
                { label: "Independent data chunks", outcome: "data parallel (map) - rows, tiles, frames: zero-sync scaling", good: true },
                { label: "Independent operations", outcome: "task parallel (pipeline) - stages flow through workers", good: true },
                { label: "Self-similar subproblems", outcome: "recursive divide and conquer - fork-join with work stealing", good: true },
                { label: "Tasks sharing mutable state", outcome: "race by design - no mechanism repairs a bad decomposition", good: false },
              ],
            },
            table: {
              caption: "Assignment strategies.",
              headers: ["Strategy", "When it wins", "Cost"],
              rows: [
                ["Static (equal chunks)", "uniform, predictable per-task work", "imbalance if work varies"],
                ["Dynamic queue", "irregular per-task work", "queue contention at fine chunk sizes"],
                ["Work stealing", "recursive/unpredictable structure", "steal overhead; deques per worker"],
                ["Owner-computes (by data layout)", "NUMA/GPU locality matters", "layout constrains the algorithm"],
              ],
            },
            bullets: [
              "Strategy = decompose, assign, map; mechanism = threads/locks, tasks/channels, directives.",
              "Data decomposition: chunks of data to workers - matrix rows, image tiles, video frames.",
              "Task decomposition: stages of work to workers - the pipeline pattern's home.",
              "Assignment: static for uniform work, dynamic for irregular, stealing for recursion.",
              "Row-wise mat-vec: n independent tasks, zero communication; column-wise reads the whole vector - communication × p.",
              "Synchronization repairs nothing: shared mutable state in the decomposition is the bug.",
            ],
            callout: {
              type: "tip",
              title: "Decomposition is the design decision",
              body: "The ordering students invert: they pick a mechanism first (threads! OpenMP!) and hunt for a decomposition to fit. Invert it: find the decomposition with maximal independence and minimal communication first - the row-vs-column matrix example shows the choice determines the speedup ceiling before a single pragma exists. Mechanisms are vocabulary; decomposition is the sentence.",
            },
            examQuestions: [
              {
                q: "Explain parallel programming strategies and mechanisms. Describe decomposition (data, task, recursive), assignment (static, dynamic, work-stealing) and mapping, and illustrate with the row-versus-column decomposition of matrix-vector multiplication.",
                marks: 14,
                outline: [
                  "Strategy vs mechanism: design decisions vs runtime vocabulary",
                  "Data decomposition: independent chunks - rows, tiles, frames",
                  "Task decomposition: independent operations - pipeline stages",
                  "Recursive decomposition: self-similar subproblems - fork-join",
                  "Assignment: static (uniform), dynamic queue (irregular), work stealing (recursive)",
                  "Row-wise mat-vec: n independent tasks, zero communication, scales to p = n",
                  "Column-wise: full-vector reads per task - communication multiplies by p",
                ],
              },
              {
                q: "Why can synchronization mechanisms not fix a bad decomposition?",
                marks: 7,
                outline: [
                  "Locks/atomics only serialize access - they do not remove shared state",
                  "Shared mutable state across tasks means the algorithm itself is sequential at heart",
                  "Over-serialization converts the parallel program back into a sequential one",
                  "Correct order: decompose for independence, then minimize remaining synchronization",
                  "Amdahl: every forced serialization is the serial fraction f that caps speedup",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Performance theory: work, span and the parallelism ceiling",
            body: [
              "The work-span model gives parallel programs their own Amdahl's law, computed from the computation's structure rather than guessed from the machine. Work W is the total number of primitive operations - the time one processor needs (T₁). Span S is the length of the longest dependency chain in the computation's DAG - the time an infinite number of processors needs (T∞), because it is the critical path no parallelism can shorten. Parallelism is the ratio W/S - the maximum speedup any machine can deliver on this computation, and Brent's theorem bounds every real run: T_p ≤ W/p + S, so the best possible speedup on p processors is at least W / (W/p + S).",
              "Worked numbers: summing n = 1024 numbers with a balanced tree - W = 1023 additions (every element contributes one), S = 10 (log₂ 1024 tree levels), so parallelism = 102.3: no machine on earth exceeds ~102× speedup on this computation no matter how many cores it has. On p = 64 cores, Brent bounds T₆₄ ≤ 1023/64 + 10 = 26, guaranteeing speedup ≥ 1023/26 ≈ 39.3. Note the two regimes: below the parallelism limit, speedup is hardware-limited (W/p dominates); above it, span dominates and extra processors buy nothing - the sequential-dependence structure, not the core count, is the wall.",
              "Exam framing: define W, S and parallelism = W/S; compute the 1024-element sum example including the Brent bound; and connect back to Unit I - Amdahl's serial fraction f is span-measuring in disguise (the un-parallelizable chain), so work-span theory is Amdahl made constructive. The design corollary: to raise speedup, either raise W (bigger work per span step: blocking) or lower S (shallower dependency chains).",
            ],
            keyTerms: [
              { term: "Work (W)", definition: "Total operations in the computation - T₁, the one-processor running time." },
              { term: "Span (S)", definition: "Longest dependency chain in the computation DAG - T∞, the unbounded-processor time." },
              { term: "Parallelism (W/S)", definition: "The maximum possible speedup of the computation - a property of the algorithm, not the machine." },
              { term: "Brent's theorem", definition: "T_p ≤ W/p + S - the scheduling bound relating work and span to p-processor time." },
              { term: "Critical path", definition: "The chain of dependent operations setting the span - nothing can parallelize across it." },
            ],
            diagram: {
              kind: "flow",
              title: "Analyzing a parallel algorithm with work and span",
              caption: "Four steps from source code to a speedup ceiling you can state before running anything.",
              steps: [
                { label: "Decompose into tasks", note: "identify independent operations" },
                { label: "Build the DAG", note: "edges = data dependencies" },
                { label: "Compute W and S", note: "total ops; longest chain" },
                { label: "Parallelism = W/S", note: "the speedup ceiling" },
                { label: "Apply Brent", note: "T_p <= W/p + S on real machines" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "workspan.py - the 1024-element sum, bounded",
              code: `n = 1024
W = n - 1                 # work: every addition (T1 = 1023 ops)
S = 10                    # span: log2(n) tree levels (T-infinity)
print(W / S)              # 102.3 - the parallelism ceiling

p = 64
T_p = W / p + S           # Brent's upper bound
print(T_p)                # 26.0
print(W / T_p)            # 39.3 - guaranteed speedup on 64 cores
print(min(p, W / S))      # 64 - hardware is below the ceiling here`,
            },
            bullets: [
              "Work W = total operations = T₁; span S = longest dependency chain = T∞.",
              "Parallelism = W/S - the algorithm's own speedup ceiling.",
              "Sum of 1024: W = 1023, S = 10, ceiling ≈ 102×.",
              "Brent: T_p ≤ W/p + S; on 64 cores T₆₄ ≤ 26, speedup ≥ 39.3.",
              "Below the ceiling hardware limits; above it the critical path limits.",
              "Amdahl's serial fraction is span thinking in disguise; raise speedup by blocking (more work per span step) or shallower chains.",
            ],
            callout: {
              type: "exam",
              title: "Parallelism is a property of the algorithm",
              body: "The sentence that separates theory marks from guesswork: W/S belongs to the computation, not the machine - a 1024-element tree sum cannot exceed ~102× speedup on any hardware ever built. When a program refuses to scale on more cores, compute its span: the critical path, not the core count, is usually the wall.",
            },
            examQuestions: [
              {
                q: "Define work, span and parallelism in the work-span model. State Brent's theorem and analyze summing 1024 numbers with a balanced tree: compute W, S, the parallelism ceiling, and the guaranteed speedup on 64 processors.",
                marks: 14,
                outline: [
                  "W = total primitive operations = T₁ (sequential time)",
                  "S = longest dependency chain in the DAG = T∞ (unbounded time)",
                  "Parallelism = W/S - the maximum speedup of the computation itself",
                  "Brent: T_p ≤ W/p + S",
                  "Sum example: W = 1023, S = log₂1024 = 10, parallelism = 102.3",
                  "p = 64: T₆₄ ≤ 1023/64 + 10 = 26; speedup ≥ 1023/26 ≈ 39.3",
                  "Below the ceiling hardware limits; above it the critical path does",
                ],
              },
              {
                q: "How does the work-span model relate to Amdahl's law?",
                marks: 7,
                outline: [
                  "Amdahl's serial fraction f measures time un-parallelizable by structure",
                  "Span measures exactly that: the dependency chain no core can shorten",
                  "As p grows, T_p -> S, so speedup -> W/S - Amdahl's ceiling in structural form",
                  "Difference: span is computable from the algorithm; f must be measured",
                  "Both conclude: shrink the critical path first, then add processors",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Nesting and the parallel control patterns",
            body: [
              "The nesting pattern is the structural secret of the whole unit: parallel patterns are components that compose - a map whose element function is itself a fork-join reduction, a pipeline stage implemented as a stencil, a reduce whose leaves are maps. Nesting is what keeps large parallel programs tractable: each pattern has a contract (inputs, outputs, synchronization discipline) and composition preserves the contracts, so correctness reasoning stays local while concurrency compounds. Every large parallel program in this syllabus - the MPI trapezoid, the CUDA kernel, the OpenMP loop - is a nested composition of the patterns catalogued here.",
              "The parallel control patterns are the composition's verbs: fork-join (recursive divide and conquer with synchronization at the join), map (apply one function to every element independently), reduce (fold many elements into one with an associative combiner), scan (compute all prefix combinations), and pipeline (stages connected by queues). Parallel data management names the noun side - how elements find their data: gather (indexed reads), scatter (indexed writes), pack (compaction of survivors), stencil (fixed neighbourhoods), recurrence (element depends on its own previous output). The table of verbs and nouns is the pattern vocabulary; fluency means matching a given computation to its pattern in one line.",
              "Exam framing: define nesting with one composed example (map of reductions), list the control patterns with their contract in one phrase each, and connect data management as the access-shape side of the same catalogue. The mark-winning observation: the patterns are independent of mechanism - the same map is an OpenMP parallel for, a CUDA grid, or an MPI scatter - which is exactly why they compose across Unit V's four languages.",
            ],
            keyTerms: [
              { term: "Nesting", definition: "Patterns composing inside one another - a map whose element function is itself parallel - with contracts preserved." },
              { term: "Fork-join", definition: "Spawn concurrent subtasks and synchronize at the join - recursive divide and conquer's pattern." },
              { term: "Reduce", definition: "Fold a collection into one value with an associative combiner - the tree-shaped aggregation pattern." },
              { term: "Scan (prefix sum)", definition: "Compute all running combinations - every output is the combination of all inputs before it." },
              { term: "Data management patterns", definition: "The access shapes: gather, scatter, pack, stencil, recurrence - how elements find their data." },
            ],
            diagram: {
              kind: "layers",
              title: "The pattern stack",
              caption: "Each layer composes out of the one below - nesting is what keeps contracts local as programs grow.",
              layers: [
                { label: "Applications", note: "composed from nested patterns" },
                { label: "Nesting", note: "patterns as components: map of fork-joins, pipeline of stencils" },
                { label: "Control patterns", note: "fork-join, map, reduce, scan, pipeline" },
                { label: "Data management", note: "gather, scatter, pack, stencil, recurrence" },
                { label: "Mechanisms", note: "threads, tasks, CUDA blocks, MPI ranks (Unit V)" },
              ],
            },
            table: {
              caption: "The control pattern catalogue.",
              headers: ["Pattern", "Contract", "Typical use"],
              rows: [
                ["Map", "one independent output per input", "element-wise math, filters"],
                ["Reduce", "many -> one, associative combiner", "sums, maxima, histograms' final pass"],
                ["Scan", "all prefixes out", "running totals, compaction offsets"],
                ["Fork-join", "recursive split, sync at join", "divide and conquer, quicksort"],
                ["Pipeline", "stages + bounded queues", "streaming: decode -> process -> encode"],
              ],
            },
            bullets: [
              "Nesting: patterns compose with contracts intact - the unit's structural principle.",
              "Map: independent element-wise work - the embarrassingly parallel default.",
              "Reduce: associative fold into one value; scan: every prefix as output.",
              "Pipeline: stages + queues - task decomposition's canonical pattern.",
              "Data management: gather/scatter/pack/stencil/recurrence - the access-shape catalogue.",
              "Patterns are mechanism-independent: one map, four languages (Unit V).",
            ],
            callout: {
              type: "tip",
              title: "Compose contracts, not threads",
              body: "The design discipline nesting enables: never reason about raw threads in a large program - reason about pattern contracts (map: independent; reduce: associative; pipeline: FIFO). When every composition preserves contracts, races become impossible by construction and the only synchronization left is the patterns' own join points. That is why the syllabus teaches patterns rather than threading recipes.",
            },
            examQuestions: [
              {
                q: "Explain the nesting pattern in parallel programming and catalogue the parallel control patterns (fork-join, map, reduce, scan, pipeline) with the contract of each. Give one composed example of nesting.",
                marks: 14,
                outline: [
                  "Nesting: patterns as components composing inside one another",
                  "Contracts preserved: map independent, reduce associative, pipeline FIFO",
                  "Fork-join: recursive split + synchronization at the join",
                  "Map: one independent output per input element",
                  "Reduce: many -> one via associative combiner",
                  "Scan: all prefix combinations as outputs",
                  "Composed example: map whose element function is a local reduction (per-tile sums)",
                ],
              },
              {
                q: "Why are parallel patterns described as mechanism-independent?",
                marks: 7,
                outline: [
                  "A pattern's contract says nothing about threads, ranks or blocks",
                  "The same map is OpenMP parallel for, CUDA grid, or MPI scatter",
                  "Mechanisms implement scheduling; patterns express structure",
                  "Portability: restructure code by swapping mechanisms, keeping patterns",
                  "This is why Unit V's four systems re-use Unit IV's vocabulary",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Map: scaled vector and Mandelbrot",
            body: [
              "Map is the simplest and most important control pattern: apply one function independently to every element of a collection, producing one output per input. The syllabus's two examples bracket the pattern's range. The scaled vector add (saxpy, y[i] = a·x[i] + y[i]) is map with perfectly uniform work: every element does one multiply-add, no element touches another, and p processors split the array any way they like - ideal speedup up to memory bandwidth. Mandelbrot is map with irregular work: every pixel c iterates z ← z² + c until |z| > 2 or an iteration cap, so pixels near the set's boundary run hundreds of iterations while interior pixels run one - same pattern, wildly uneven per-element cost.",
              "Mandelbrot's irregularity is the teaching point. Static equal-chunk assignment gives rows with many boundary pixels to some workers and easy rows to others - the last worker's pixels set the finishing time (the load-balance tail). The fixes are assignment-level, not pattern-level: finer chunks (tiles of 16×16 pixels mix boundary and interior), dynamic scheduling (workers grab the next tile when free), or work stealing - all of Unit IV's assignment machinery exists precisely because map's work can be irregular. The pattern itself never changes: outputs stay independent, correctness stays trivial, only throughput is at stake.",
              "Exam framing: define map, write saxpy's one-liner, describe Mandelbrot's iteration rule, and explain the load imbalance through the boundary-pixel observation with its three cures - fine tiles, dynamic scheduling, work stealing. The insight mark: map's correctness is unconditional because outputs are independent, but map's performance is entirely an assignment question - which is exactly why OpenMP's scheduling clauses exist in Unit V.",
            ],
            keyTerms: [
              { term: "Map", definition: "Apply one function independently to every element - one output per input, no inter-element dependencies." },
              { term: "Saxpy", definition: "y[i] = a·x[i] + y[i] - the scaled vector add, map with uniform per-element work." },
              { term: "Mandelbrot iteration", definition: "z ← z² + c until |z| > 2 or cap; per-pixel iteration counts vary enormously." },
              { term: "Load imbalance", definition: "Uneven per-element work making the last finisher set the parallel time - map's only performance hazard." },
              { term: "Tile (chunk)", definition: "A small group of elements assigned together - mixing heavy and light elements to smooth imbalance." },
            ],
            diagram: {
              kind: "fork",
              title: "What can go wrong in a map",
              caption: "Independence makes map correct by construction - only assignment choices can spoil its speed.",
              start: "Map over N elements",
              branches: [
                { label: "Uniform work (saxpy)", outcome: "any assignment scales - static equal chunks are perfect", good: true },
                { label: "Irregular work (Mandelbrot)", outcome: "tile finely or schedule dynamically - mix boundary and interior pixels", good: true },
                { label: "Outputs written to shared indices", outcome: "no longer a map - write conflicts need atomics or a scatter redesign", good: false },
                { label: "Elements reading a mutable shared input", outcome: "no longer independent - races; freeze the input first", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "maps.py - saxpy and Mandelbrot as maps",
              code: `import numpy as np

# saxpy: uniform map - one multiply-add per element
a, x = 2.0, np.arange(1024, dtype=float)
y = np.zeros(1024)
y = a * x + y                      # the whole map, one expression

# Mandelbrot: irregular map - iteration count varies per pixel
xs = np.linspace(-2, 2, 1000); ys = np.linspace(-1.5, 1.5, 1000)
c = xs[:, None] + 1j * ys[None, :]
z = np.zeros_like(c); it = np.zeros(c.shape, dtype=int)
for _ in range(256):               # every pixel walks its own distance
    m = np.abs(z) <= 2
    z[m] = z[m] ** 2 + c[m]
    it += m                        # escape-time count = the element's work`,
            },
            bullets: [
              "Map: one independent output per input - correctness is automatic.",
              "Saxpy y[i] = a·x[i] + y[i]: uniform work, perfect static scaling.",
              "Mandelbrot: z ← z² + c until |z| > 2 - per-pixel work varies 1 to 256 iterations.",
              "Boundary pixels are heavy; static equal rows leave workers idle at the tail.",
              "Cures: fine tiles, dynamic scheduling, work stealing - assignment, not pattern.",
              "Map breaks only if outputs collide or inputs mutate - then it is not a map.",
            ],
            callout: {
              type: "warning",
              title: "Mandelbrot's tail sets the time",
              body: "The performance subtlety worth marks: with static row assignment, total time equals the slowest worker's rows - and boundary-dense rows can take 50× an interior row. Finer tiles fix it without touching the kernel, because they mix heavy and light pixels in every chunk. Load imbalance is an assignment disease; the map pattern itself is innocent.",
            },
            examQuestions: [
              {
                q: "Explain the map pattern. Describe the scaled vector add and Mandelbrot as maps, contrast their per-element work distributions, and explain three assignment strategies that cure Mandelbrot's load imbalance.",
                marks: 14,
                outline: [
                  "Map: one function applied independently to every element; one output per input",
                  "Saxpy: y[i] = a·x[i] + y[i] - uniform one multiply-add per element",
                  "Mandelbrot: iterate z ← z² + c until |z| > 2 or 256 - irregular per pixel",
                  "Boundary pixels: hundreds of iterations; interior: one",
                  "Static equal rows: slowest worker's boundary rows set the finish time",
                  "Cure 1: fine tiles mixing heavy/light; cure 2: dynamic queue; cure 3: stealing",
                  "Pattern unchanged - only the assignment changed",
                ],
              },
              {
                q: "Why is map called embarrassingly parallel, and when does that praise fail?",
                marks: 7,
                outline: [
                  "No inter-element dependencies: correctness needs zero synchronization",
                  "Any assignment of elements to processors is semantically valid",
                  "Praise fails on irregular work: independence does not equalize cost",
                  "Praise fails on shared output indices: writes collide (that is scatter)",
                  "Performance then becomes a scheduling problem, not a correctness one",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Reduce, fusing map and reduce, and scan",
            body: [
              "Reduce folds a collection into one value with an associative combiner - sum, max, logical-or. Sequentially it is one loop; in parallel it is a tree: pairs combine in level 1, pair-results in level 2, until one value survives after log₂ n levels. Associativity is the pattern's contract (floating-point addition is associative only up to rounding - parallel trees change low-order bits, so reproducibility needs fixed shapes). Fusing map and reduce means computing the map's output inside the reduction's leaves without materializing the intermediate array - sum of squares fuses when squaring happens at each leaf instead of writing a squared array to memory; the saving is that array's full memory round trip.",
              "Scan is reduce's sibling that outputs every prefix instead of one total: out[i] = x[0] ⊕ ... ⊕ x[i]. Two classical algorithms divide the field. Hillis-Steele does log₂ n passes of shifting pairwise combines - simple, GPU-friendly, but ~n·log₂ n total work. Blelloch is work-efficient: an up-sweep builds the tree (n - 1 combines) and a down-sweep pushes prefixes back down (n - 1 combines) - 2(n - 1) work and 2·log₂ n span; for n = 1024, Hillis-Steele does ~10,230 combines while Blelloch does 2,046, both in 10-20 levels. Fusing map with scan similarly folds element-wise computation into the scan's leaves (scaled prefix sums without a materialized scaled array).",
              "Exam framing: define reduce and scan with their output shapes (one value vs all prefixes), draw the tree reduction, compare Hillis-Steele and Blelloch with the n = 1024 numbers, and define both fusions as intermediate-array elimination. The mark-winning distinction: reduce needs associativity; scan needs it too but must also invert enough to push prefixes down the tree - which is why Blelloch carries an exclusive-scan convention.",
            ],
            keyTerms: [
              { term: "Reduce", definition: "Fold n elements into one value with an associative combiner via a balanced tree - log n span." },
              { term: "Scan (prefix sum)", definition: "Compute every prefix combination out[i] = x[0] ⊕ ... ⊕ x[i] - reduce's all-outputs sibling." },
              { term: "Hillis-Steele scan", definition: "log n passes of shifted pairwise combines - simple, ~n·log n work." },
              { term: "Blelloch scan", definition: "Up-sweep + down-sweep tree - work-efficient at 2(n-1) combines, span 2·log n." },
              { term: "Fusing", definition: "Computing map outputs inside reduce/scan leaves, eliminating the intermediate array's memory round trip." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Tree reduction of eight numbers",
              caption: "Combine upward to one value; the scan variant then pushes prefixes back down the same tree.",
              tiers: [
                { label: "Total: 1 value", note: "level 3 - the reduce's single output" },
                { label: "4 partial sums", note: "level 2 - pairwise results" },
                { label: "8 leaves", note: "level 1 - original elements (or fused map outputs)" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "scan.py - Blelloch up-sweep and down-sweep",
              code: `def scan(a):                       # exclusive prefix sum, work-efficient
    n = len(a); a = list(a); step = 1
    while step < n:                # up-sweep: build the reduction tree
        for i in range(n - 1, step - 1, -2 * step):
            a[i] += a[i - step]
        step *= 2
    a[n - 1] = 0
    while step > 1:                # down-sweep: push prefixes downward
        step //= 2
        for i in range(step, n, 2 * step):
            t = a[i]; a[i] = a[i - step]; a[i - step] += t
    return a

print(scan([3, 1, 4, 1, 5, 9, 2, 6]))   # [0, 3, 4, 8, 9, 14, 23, 25]
# n = 1024: 2*(1024-1) = 2046 combines, 20 levels - vs Hillis-Steele's ~10230`,
            },
            bullets: [
              "Reduce: associative fold into one value via a balanced tree - span log₂ n.",
              "Float addition: associative only up to rounding - parallel sums differ in low bits.",
              "Scan: every prefix as output; one total becomes n outputs.",
              "Hillis-Steele: log₂ n passes, ~n·log₂ n work - n = 1024 gives ~10,230 combines.",
              "Blelloch: up-sweep + down-sweep, 2(n - 1) = 2,046 combines, span 2·log₂ n.",
              "Fusing: map computed at reduce/scan leaves - the intermediate array never materializes.",
            ],
            callout: {
              type: "exam",
              title: "Output shape is the distinction",
              body: "The fastest two marks: reduce produces one value; scan produces n values (every prefix). Everything else - the trees, the two algorithms, the fusions - follows from that shape difference. If asked to compare them, draw one tree with only the root filled (reduce) and the same tree with every node filled (scan) and the answer half-writes itself.",
            },
            examQuestions: [
              {
                q: "Explain the reduce and scan patterns. Draw the tree reduction of 8 elements, compare Hillis-Steele and Blelloch scans with work and span for n = 1024, and define fusing map with reduce and with scan.",
                marks: 14,
                outline: [
                  "Reduce: associative combiner, tree to one value, span log₂ n",
                  "Scan: every prefix as output - n results instead of one",
                  "Tree of 8: 4 + 2 + 1 = 7 combines over 3 levels",
                  "Hillis-Steele: log₂ n passes; n = 1024 -> ~10·1024 ≈ 10,230 combines",
                  "Blelloch: up-sweep + down-sweep = 2(n-1) = 2,046 combines, span 20",
                  "Associativity contract; floating-point rounding changes low-order bits",
                  "Fusing: map computed at tree leaves - no intermediate array written",
                ],
              },
              {
                q: "Why does fusing map into reduce improve performance even though the operation count is unchanged?",
                marks: 7,
                outline: [
                  "Unfused: write n intermediate values, then read them back - 2n memory trips",
                  "Fused: intermediate values live in registers inside the reduction's leaves",
                  "Operation count identical; memory traffic drops by the intermediate array",
                  "On bandwidth-bound machines this is the whole difference",
                  "Same logic for map+scan fusion (scaled prefix sums)",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Data reorganization: gather, scatter, pack, stencil and recurrence",
            body: [
              "Data management patterns describe how parallel elements find and place their data - the access shapes underneath every algorithm. Gather: each output reads inputs chosen by an index - out[i] = in[index[i]] - irregular reads but safe writes; table lookups and permutations. Scatter: each input writes to an index destination - out[index[i]] = in[i] - the write-driven inverse, and the dangerous one: two inputs with the same index collide, needing atomics or privatized buffers. Pack: keep only flagged elements, compacted - a gather whose destinations come from a scan of the flags. Stencil: each output reads a fixed neighbourhood - out[i] = (in[i-1] + 2·in[i] + in[i+1])/4 - regular, cache-friendly, the shape of every grid simulation.",
              "Recurrence is the pattern where out[i] depends on out[i-1] - a sequential dependency chain that looks unparallelizable. Two escapes exist. Recognize the recurrence as a scan: a running sum, product or max is exactly a prefix computation, and the scan machinery of 4.5 parallelizes it. When it is not a scan, use cyclic reduction: eliminate odd elements algebraically to halve the chain, recurse, then back-substitute - log n passes replacing a length-n chain. Worked instance: the Fibonacci-style recurrence out[i] = a·out[i-1] + b·out[i-2] is a linear recurrence solvable by parallel prefix on 2×2 matrices - the dependency chain becomes a scan on matrix values.",
              "Exam framing: define each pattern with its one-line signature (out[i] = in[index[i]], etc.), rank them by hazard - gather and stencil safe, pack needs a scan, scatter needs atomics, recurrence needs restructuring - and give the two recurrence escapes. The mark-winning detail: scatter's conflict rule (same destination index) is what separates it from gather, and the standard fix is privatization followed by a reduction pass.",
            ],
            keyTerms: [
              { term: "Gather", definition: "out[i] = in[index[i]] - output-driven indexed reads; irregular but race-free." },
              { term: "Scatter", definition: "out[index[i]] = in[i] - input-driven indexed writes; conflicts on shared destinations need atomics or privatization." },
              { term: "Pack", definition: "Compaction of flagged elements - a gather whose destinations come from a scan of the flags." },
              { term: "Stencil", definition: "Each output reads a fixed neighbourhood of inputs - regular, coalescible, the grid-simulation shape." },
              { term: "Cyclic reduction", definition: "Parallel solver for recurrences - eliminate half the chain per pass, recurse, back-substitute; log n passes." },
            ],
            diagram: {
              kind: "matrix",
              title: "The access-shape quadrants",
              caption: "Two axes sort all five patterns - hazard grows with irregular writes, safety with regular reads.",
              axes: { x: "Data movement: reads pull in -> writes push out", y: "Addresses: regular -> irregular" },
              quadrants: [
                { label: "Scatter", note: "irregular writes - collisions need atomics or privatized buffers" },
                { label: "Stencil", note: "regular neighbourhood reads and writes - cache's best friend" },
                { label: "Gather", note: "irregular reads, safe writes - lookups, permutations" },
                { label: "Map and scan", note: "fully regular streams - perfectly coalesced" },
              ],
            },
            table: {
              caption: "The five data management patterns.",
              headers: ["Pattern", "Signature", "Hazard", "Standard fix"],
              rows: [
                ["Gather", "out[i] = in[index[i]]", "irregular read latency", "batching, prefetch"],
                ["Scatter", "out[index[i]] = in[i]", "write conflicts on shared index", "atomics; privatize + reduce; sort-then-reduce"],
                ["Pack", "keep flagged elements compact", "destinations unknown per element", "scan the flags for destinations"],
                ["Stencil", "out[i] = f(in[i-1..i+1])", "halo/boundary reads between tiles", "tiling with shared-memory halos"],
                ["Recurrence", "out[i] = f(out[i-1], ...)", "sequential dependency chain", "recognize as scan; or cyclic reduction"],
              ],
            },
            bullets: [
              "Gather: indexed reads - irregular latency, zero write hazard.",
              "Scatter: indexed writes - the one pattern with real conflicts; atomics or privatize.",
              "Pack: compaction = gather whose destinations come from a flag scan.",
              "Stencil: fixed neighbourhood - regular and coalescible; halo reads at tile edges.",
              "Recurrence: out[i] depends on out[i-1] - a chain, until recognized as a scan.",
              "Recurrence escapes: prefix-scan reformulation, or cyclic reduction (log n passes).",
            ],
            callout: {
              type: "exam",
              title: "Scatter is the dangerous one",
              body: "The ranking examiners expect: gather and stencil are safe (reads never race; stencil's writes are disjoint), pack needs one scan, scatter needs conflict policy - atomics for rare collisions, privatized per-thread buffers plus a final reduce for hot ones - and recurrence is not parallel until restructured. Saying 'scatter needs atomics' without the privatization alternative loses the design mark.",
            },
            examQuestions: [
              {
                q: "Explain the data reorganization patterns gather, scatter, pack, stencil and recurrence with one-line signatures. Rank their parallelization hazards and give the standard remedy for each.",
                marks: 14,
                outline: [
                  "Gather: out[i] = in[index[i]] - irregular reads, safe; batch/prefetch",
                  "Scatter: out[index[i]] = in[i] - write conflicts on shared destinations",
                  "Scatter remedies: atomics, privatized buffers + reduce, sort-then-reduce",
                  "Pack: compaction of flagged elements - destinations from a flag scan",
                  "Stencil: fixed neighbourhood reads - regular; halo handling at tile edges",
                  "Recurrence: out[i] = f(out[i-1]) - sequential chain",
                  "Recurrence escapes: scan reformulation; cyclic reduction in log n passes",
                ],
              },
              {
                q: "How can the Fibonacci-style recurrence out[i] = a·out[i-1] + b·out[i-2] be parallelized?",
                marks: 7,
                outline: [
                  "Linear recurrences compose: represent the step as a 2×2 matrix",
                  "out[i] is then a prefix product of matrices - a scan on matrix values",
                  "Any associative scan algorithm (Blelloch) parallelizes the chain",
                  "Span drops from n steps to 2·log₂ n",
                  "Non-linear recurrences: cyclic reduction - eliminate half the chain per pass",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Fork-join and pipeline",
            body: [
              "Fork-join is recursion made concurrent: at each node, fork subproblems to run concurrently, solve them (recursively or directly), and join - synchronizing before combining results. Quicksort and mergesort are the canonical cases: partition, fork the two halves, join, merge. Its performance machinery is work-stealing: each worker owns a deque of tasks, takes from one end, and steals from the busy workers' other end when idle - the steal policy converts recursive unevenness into balance automatically, which is why fork-join frameworks (Cilk-style spawn/sync, task runtimes) built stealing in. The theory tie-in: fork-join computation's speedup ceiling is exactly the work-span ratio of section 4.2, with span set by the recursion's deepest chain.",
              "Pipeline is task decomposition: a stream of items flows through stages, each stage served by dedicated workers reading the previous stage's bounded queue and writing the next's. The governing arithmetic: throughput = 1 / (slowest stage's time) no matter how fast the others are - balance the stages first; latency = the sum of all stage times, since pipelining never shortens any item's journey; and bounded queues provide the backpressure that keeps a fast producer from outrunning a slow consumer. Worked instance: decode -> transform -> encode video needs all stages under 33 ms for 30 fps; a 25 ms transform hides a 10 ms decode and 20 ms encode - the transform sets the 40 fps ceiling alone.",
              "Exam framing: define both patterns, give quicksort for fork-join (with the steal-deque explanation) and the video stages for pipeline (with the 1/slowest-stage law), and close with the selection rule: recursive self-similar problems fork-join; streaming sequences pipeline. The subtle mark: fork-join's join points bound its parallelism (span), while pipeline's parallelism is bounded by stage count - two different ceilings for two different shapes of work.",
            ],
            keyTerms: [
              { term: "Fork-join", definition: "Fork subtasks recursively, synchronize at the join, combine - divide and conquer's parallel form." },
              { term: "Work stealing", definition: "Idle workers take tasks from busy workers' deque tails - the scheduler that balances recursive workloads." },
              { term: "Spawn/sync", definition: "The fork-join language primitives (Cilk-style): spawn posts a child task; sync waits for all children." },
              { term: "Pipeline stage", definition: "One operation in the stream with its worker(s) and bounded input queue - the throughput unit of task parallelism." },
              { term: "Throughput law", definition: "Pipeline throughput = 1 / (slowest stage time) - balance stages or waste the fast ones." },
            ],
            diagram: {
              kind: "compare",
              title: "Fork-join vs pipeline",
              caption: "Recursive breadth against staged depth - the workload's shape picks the pattern.",
              left: {
                heading: "Fork-join",
                items: [
                  "Recursive self-similar subproblems",
                  "Parallel breadth grows with depth",
                  "Join points synchronize; span bounds speedup",
                  "Work-stealing deques balance uneven trees",
                  "Example: parallel quicksort, mergesort",
                ],
              },
              right: {
                heading: "Pipeline",
                items: [
                  "Streaming items through stages",
                  "Parallelism bounded by stage count",
                  "Throughput = 1 / slowest stage",
                  "Bounded queues give backpressure",
                  "Example: decode -> transform -> encode",
                ],
              },
            },
            codeExample: {
              language: "c",
              caption: "forkjoin.c - spawn/sync recursion (Cilk-style)",
              code: `int par_sum(int* a, int lo, int hi) {
    if (hi - lo < 4096) return seq_sum(a, lo, hi);   // small: sequential base
    int mid = (lo + hi) / 2;
    int x = spawn par_sum(a, lo, mid);   // child task - stealable when idle
    int y =      par_sum(a, mid, hi);    // parent computes the other half
    sync;                                // join: wait for the spawned child
    return x + y;
}
/* the recursion tree's depth is the span; total adds are the work */
/* steal policy: idle worker takes from the busiest worker's deque tail  */`,
            },
            bullets: [
              "Fork-join: fork subproblems, sync at the join, combine - recursion made concurrent.",
              "Work stealing: take from your deque, steal from busy workers' tails - balance for free.",
              "Fork-join's ceiling: the work/span ratio; span = deepest recursion chain.",
              "Pipeline: stages + bounded queues; parallelism bounded by the stage count.",
              "Throughput = 1/slowest stage; latency = sum of stages; queues give backpressure.",
              "Selection rule: recursive self-similar work forks; streaming sequences pipeline.",
            ],
            callout: {
              type: "tip",
              title: "Two ceilings, two shapes",
              body: "The contrast worth memorizing: fork-join's parallelism ceiling is the work/span ratio (structure of the recursion), while pipeline's ceiling is the stage count (shape of the stream). So a fork-join program scales with problem size until span bites, but a pipeline never scales past its stages - adding workers to a 3-stage pipeline does nothing; adding stages does.",
            },
            examQuestions: [
              {
                q: "Explain the fork-join and pipeline patterns. Describe quicksort under fork-join with work stealing, and the three-stage video pipeline with its throughput law. State the ceiling that bounds each pattern's parallelism.",
                marks: 14,
                outline: [
                  "Fork-join: recursive fork, sync at join, combine results",
                  "Quicksort: partition, fork two halves, join; uneven splits balanced by stealing",
                  "Work stealing: private deque, take one end, steal the other",
                  "Fork-join ceiling: work/span ratio - deepest chain bounds speedup",
                  "Pipeline: items flow through stages connected by bounded queues",
                  "Throughput = 1/slowest stage; latency = sum of stage times",
                  "Pipeline ceiling: stage count - more workers on 3 stages changes nothing",
                ],
              },
              {
                q: "Why do bounded queues matter in a pipeline?",
                marks: 7,
                outline: [
                  "They decouple stage speeds - fast stages run ahead without unbounded buffering",
                  "Backpressure: a full queue blocks the producer at the natural rate",
                  "Memory safety: no stage can outrun the whole by more than queue capacity",
                  "Sizing: small queues add latency resilience; huge queues hide imbalance",
                  "Without bounds, a 10x faster producer would OOM the consumer's stage",
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
      title: "Parallel Programming Languages",
      summary:
        "Unit V puts the patterns on real systems: distributed memory programming with MPI (the trapezoidal rule, I/O handling, derived datatypes, collective communication), shared memory programming with Pthreads (condition variables, read-write locks, cache handling), OpenMP (parallel for directives, loop scheduling, thread safety), and CUDA (parallel programming in CUDA C, thread management, constant memory and events, graphics interoperability, atomics, streams).",
      chapter: {
        number: "05",
        title: "MPI, Pthreads, OpenMP and CUDA",
        intro:
          "Unit V covers distributed memory programming with MPI (trapezoidal rule, I/O handling, derived datatypes, collective communication), shared memory programming with Pthreads (condition variables, read-write locks, cache handling), OpenMP (parallel for, scheduling loops, thread safety), and CUDA C (thread management, constant memory and events, graphics interoperability, atomics, streams).",
        inOneBreath:
          "MPI ranks exchange messages with collectives doing the heavy lifting; Pthreads share memory under mutexes with condition variables for events; OpenMP adds directives that turn loops parallel with schedule clauses balancing the load; CUDA floods the device with grid-block-warp-thread work, guided by constant memory, events, atomics and streams.",
        sections: [
          {
            number: "5.1",
            title: "Distributed memory programming with MPI",
            body: [
              "MPI (Message Passing Interface) is the standard for distributed memory programming: a fixed set of processes (ranks) in a communicator, each with private memory, cooperating through explicit message passing. The SPMD pattern rules: every rank runs the same program, taking different roles by its rank number. The skeleton is six calls: MPI_Init to start, MPI_Comm_size/MPI_Comm_rank to learn the world, the computation with MPI_Send/MPI_Recv point-to-point or collectives, MPI_Finalize to stop. Unit I's cost model is the reality here - every communication costs startup plus bytes, so MPI code is designed around minimizing message count and size.",
              "The shared-versus-distributed contrast frames everything. Shared memory (Pthreads, OpenMP): one address space, data read directly, races managed by locks - simple to program on one node, capped by one machine's cores and memory. Distributed memory (MPI): explicit sends of packed data, no shared state to race on, scaling across nodes of a cluster - more setup work per program, unlimited scale. Hybrid reality: production HPC code is MPI between nodes and OpenMP/CUDA within a node - one rank per node, threads inside. Worked sizing: a 1024-element array on 4 ranks means rank r owns elements [256r, 256r + 256) - partitioning is the programmer's explicit job, not the runtime's.",
              "Exam framing: define MPI and the SPMD model, write the six-call skeleton, contrast the two memory models with the hybrid closing point, and show the explicit partitioning arithmetic for a concrete size. The mark-winning habit: always name the communicator (MPI_COMM_WORLD) in each call, and remember that rank 0 is conventionally the coordinator and sole I/O rank - the trapezoidal program of the next section builds exactly on that convention.",
            ],
            keyTerms: [
              { term: "MPI rank", definition: "A process's number inside a communicator - the SPMD program's identity and branching variable." },
              { term: "Communicator", definition: "The ordered group of ranks a call applies to - MPI_COMM_WORLD is the default containing all processes." },
              { term: "SPMD", definition: "Single Program Multiple Data - every rank executes the same program, differentiating by rank." },
              { term: "Point-to-point", definition: "MPI_Send/MPI_Recv pairs between two ranks - matched by source, tag and datatype." },
              { term: "Hybrid programming", definition: "MPI between nodes + OpenMP/CUDA within a node - the production HPC structure." },
            ],
            diagram: {
              kind: "compare",
              title: "Shared memory vs distributed memory programming",
              caption: "One address space against explicit messages - convenience against unlimited scale.",
              left: {
                heading: "Shared memory (Pthreads, OpenMP)",
                items: [
                  "One address space - direct loads and stores",
                  "Races managed by locks/atomics",
                  "One node's cores and memory cap it",
                  "Data partitioning optional",
                ],
              },
              right: {
                heading: "Distributed memory (MPI)",
                items: [
                  "Private memories - explicit send/recv",
                  "No shared state, no data races by construction",
                  "Scales across cluster nodes",
                  "Partitioning is the programmer's job",
                ],
              },
            },
            table: {
              caption: "The MPI skeleton.",
              headers: ["Call", "Purpose", "Typical use"],
              rows: [
                ["MPI_Init / MPI_Finalize", "start / stop the MPI runtime", "once, first and last"],
                ["MPI_Comm_size", "how many ranks exist", "compute partition sizes"],
                ["MPI_Comm_rank", "this process's number", "branch into roles"],
                ["MPI_Send / MPI_Recv", "point-to-point messages", "custom exchanges"],
                ["MPI_Bcast / MPI_Reduce", "collectives (5.3)", "distribution + aggregation"],
                ["MPI_Wtime", "wall-clock timer", "measuring parallel sections"],
              ],
            },
            bullets: [
              "MPI: processes (ranks) with private memory + explicit messages - the cluster standard.",
              "SPMD: same program everywhere; rank number decides each rank's role.",
              "Skeleton: Init -> size/rank -> compute/communicate -> Finalize.",
              "Partitioning is explicit: 1024 elements on 4 ranks -> rank r owns [256r, 256r+256).",
              "Shared memory: direct access + locks, one machine; MPI: messages, unlimited scale.",
              "Production style: hybrid - MPI between nodes, OpenMP/CUDA inside each node.",
            ],
            callout: {
              type: "warning",
              title: "Partitioning is not automatic",
              body: "The beginner shock: MPI never divides your data. Every array's split - which rank owns which indices, and how boundary elements get exchanged - is hand-written. The three-line habit that fixes it: compute n/ranks as the base chunk, give the remainder to the first ranks, and let every rank derive its own interval from its rank number. Unit V's trapezoid code is this habit in action.",
            },
            examQuestions: [
              {
                q: "Explain distributed memory programming with MPI: the SPMD model, the six-call program skeleton, and how data partitioning is expressed. Contrast shared and distributed memory programming models.",
                marks: 14,
                outline: [
                  "MPI: ranks with private memory cooperating via messages",
                  "SPMD: one program, roles chosen by MPI_Comm_rank",
                  "Skeleton: Init, Comm_size, Comm_rank, compute+communicate, Finalize",
                  "Explicit partitioning: n elements / p ranks -> rank r owns [rn/p, (r+1)n/p)",
                  "Shared memory: direct loads/stores, locks for races, single node",
                  "Distributed: explicit messages, no races, cluster-scale",
                  "Hybrid: MPI between nodes, OpenMP/CUDA within nodes",
                ],
              },
              {
                q: "Why does MPI scale to thousands of nodes while pure shared-memory programming does not?",
                marks: 7,
                outline: [
                  "Shared memory presumes one physical address space - one machine's limit",
                  "Cache coherence across nodes would need unbounded traffic",
                  "MPI needs only a network plus the two-sided message contract",
                  "No global state to keep coherent - locality is the programmer's design",
                  "Cost: explicit partitioning and communication in every algorithm",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "The trapezoidal rule in MPI",
            body: [
              "The trapezoidal rule approximates a definite integral by summing trapezoid areas: with n intervals of width h = (b - a)/n over [a, b], T = h·(f(a)/2 + Σ f(x_i) + f(b)/2). The MPI version is the syllabus's canonical data-decomposition program and the template for every 'embarrassingly parallel reduce' you will write: partition the n trapezoids across p ranks (each rank integrates its own subinterval with n/p local trapezoids), compute local sums independently - zero communication during compute - then combine with MPI_Reduce using MPI_SUM into rank 0, which prints. The pattern chain is exactly Unit IV's map (local trapezoid sums) + reduce (global total) wearing MPI syntax.",
              "Worked numbers: ∫₀¹ x² dx with n = 1024 on 4 ranks. h = 1/1024 ≈ 0.000977; each rank computes 256 local trapezoids on its quarter interval; local sums reduce to T ≈ 0.3333335 against the exact 1/3 - error ≈ 1.6×10⁻⁷, matching the rule's error bound |E| ≤ (b - a)·h²·max|f''|/12 = 2·(1/1024)²/12. The parallel arithmetic: the only communication is one reduce of one double per rank - p messages, ~p·t_s microseconds - against the sequential program's 1024-iteration loop; speedup on 4 ranks is essentially perfect because communication is one-thousandth of the work.",
              "Exam framing: state the rule, derive the decomposition (which rank owns which interval), write the program - Init, rank, local Trap call, MPI_Reduce, rank-0 print, Finalize - and analyze the communication cost with the numbers above. The two classic errors: calling MPI_Reduce on every rank expecting different results (only the root receives), and dividing intervals by rank count but forgetting each rank's own a_local and b_local endpoints.",
            ],
            keyTerms: [
              { term: "Trapezoidal rule", definition: "T = h·(f(a)/2 + Σ f(x_i) + f(b)/2) with h = (b-a)/n - the integral approximation being parallelized." },
              { term: "Local subinterval", definition: "Rank r integrates [a + r·(b-a)/p, a + (r+1)·(b-a)/p] with n/p trapezoids." },
              { term: "MPI_Reduce", definition: "Combines every rank's local value with an operation (MPI_SUM) into one root rank's buffer." },
              { term: "Embarrassingly parallel reduce", definition: "Independent local computation + one combining collective - the trapezoid's pattern shape." },
              { term: "Error bound", definition: "|E| ≤ (b-a)·h²·max|f''|/12 - halving h quarters the error." },
            ],
            diagram: {
              kind: "flow",
              title: "The MPI trapezoid program's flow",
              caption: "Independent local maps, one collective reduce, one print - the whole pattern in six steps.",
              steps: [
                { label: "MPI_Init + rank", note: "every rank learns its number" },
                { label: "Compute local interval", note: "rank r owns [a + r·w, a + (r+1)·w)" },
                { label: "Local Trap()", note: "n/p trapezoids, zero communication" },
                { label: "MPI_Reduce(SUM, root 0)", note: "one double per rank -> total" },
                { label: "Rank 0 prints", note: "T ≈ 0.3333335 for x² on [0,1]" },
                { label: "MPI_Finalize", note: "tear down the runtime" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "trap.c - the canonical MPI program",
              code: `#include <mpi.h>
#include <stdio.h>

double f(double x) { return x * x; }

double Trap(double a, double b, int n) {        /* local trapezoids */
    double h = (b - a) / n, sum = 0.5 * (f(a) + f(b));
    for (int i = 1; i < n; i++) sum += f(a + i * h);
    return h * sum;
}

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);
    int rank; MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    double w = 1.0 / 4;                          /* interval per rank */
    double local = Trap(rank * w, (rank + 1) * w, 256);
    double total;
    MPI_Reduce(&local, &total, 1, MPI_DOUBLE, MPI_SUM, 0, MPI_COMM_WORLD);
    if (rank == 0) printf("T = %f\\n", total);    /* 0.333334 */
    MPI_Finalize();
}`,
            },
            bullets: [
              "Rule: T = h(f(a)/2 + Σf(x_i) + f(b)/2), h = (b - a)/n.",
              "Decomposition: rank r integrates [a + r·(b-a)/p, a + (r+1)·(b-a)/p) with n/p trapezoids.",
              "Zero communication during compute; one MPI_Reduce(MPI_SUM) at the end.",
              "Worked: x² on [0,1], n = 1024, 4 ranks -> T ≈ 0.3333335, error ~1.6e-7.",
              "Communication cost: one double per rank - a thousandth of the compute.",
              "Only rank 0 (the root) receives the reduced total.",
            ],
            callout: {
              type: "exam",
              title: "The root-only result",
              body: "The trap in the trap: MPI_Reduce delivers the total ONLY into rank 0's buffer - every other rank's total stays undefined. Half of all wrong MPI answers come from printing the total on a non-root rank or assuming all ranks share it. If every rank needs the value, follow with MPI_Bcast (which is also the natural next exam question).",
            },
            examQuestions: [
              {
                q: "Write an MPI program implementing the trapezoidal rule for ∫ x² dx over [0,1] on 4 processes. Explain the interval decomposition, the role of MPI_Reduce, and analyze the communication cost with n = 1024 trapezoids.",
                marks: 14,
                outline: [
                  "Rule: T = h(f(a)/2 + Σf(x_i) + f(b)/2), h = (b-a)/n",
                  "Decomposition: rank r owns [r/4, (r+1)/4] with 256 local trapezoids",
                  "Program: Init, Comm_rank, local Trap, MPI_Reduce(SUM, root 0), rank-0 print, Finalize",
                  "Result: T ≈ 0.3333335 vs exact 1/3 - error ~1.6e-7",
                  "Error bound: (b-a)h²·max|f''|/12 = 2(1/1024)²/12",
                  "Communication: one double per rank through MPI_Reduce - ~p·t_s",
                  "Pattern: map (local sums) + reduce (total) - Unit IV in MPI syntax",
                ],
              },
              {
                q: "After MPI_Reduce, why does rank 2's total variable not hold the sum? What call fixes it?",
                marks: 7,
                outline: [
                  "MPI_Reduce combines all ranks' inputs into the ROOT rank's buffer only",
                  "Non-root ranks' receive buffers are untouched/undefined",
                  "Fix: MPI_Bcast(&total, 1, MPI_DOUBLE, 0, MPI_COMM_WORLD)",
                  "Or use MPI_Allreduce - reduce + broadcast in one collective",
                  "Rule of thumb: reduce when one rank consumes; allreduce when all do",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "MPI I/O handling, derived datatypes and collective communication",
            body: [
              "Three supporting pillars complete MPI literacy. I/O handling: files are a shared resource ranks must not fight over - the simple pattern has rank 0 read the input and MPI_Bcast/MPI_Scatter it, and rank 0 (or MPI_Gather) collect outputs for writing; the scalable pattern is MPI-IO (MPI_File_open with MPI_COMM_WORLD, collective read_at_all/write_at_all) letting the library stripe file regions across ranks. Derived datatypes describe non-contiguous memory layouts - a matrix column (regular stride), a triangle of a matrix (indexed), a struct (heterogeneous fields) - so one send can move a strided pattern without packing buffers by hand: MPI_Type_vector(count, blocklength, stride, oldtype) then MPI_Type_commit.",
              "Collective communication is the heavy machinery: one call, all ranks of the communicator participate. The catalogue: MPI_Bcast (one rank's data to all), MPI_Scatter (root deals distinct chunks), MPI_Gather (ranks return chunks to root), MPI_Allgather (everyone gets everything), MPI_Reduce (combine to root), MPI_Allreduce (combine to everyone - the workhorse of iterative solvers), MPI_Alltoall (every rank sends distinct data to every other), MPI_Barrier (synchronize). Collectives beat hand-written send/receive loops on three counts: they are optimized per topology by the MPI library, they avoid the deadlock-ordering traps of matched point-to-point, and they express intent - the trapezoid's reduce says 'combine', not 'rank 3 sends to 0 then...'.",
              "Exam framing: present the two I/O patterns, write the derived-datatype example - one matrix column via MPI_Type_vector with its count, blocklength and stride arguments - and catalogue the collectives with one-line semantics each. The mark-winning note: collective calls are roster-synchronous - every rank in the communicator must issue them, so a collective inside a conditional branch is a guaranteed deadlock; guard the work, never the call.",
            ],
            keyTerms: [
              { term: "Derived datatype", definition: "An MPI datatype describing non-contiguous layout (vector/struct/indexed) so one call moves strided data." },
              { term: "MPI_Type_vector", definition: "count blocks of blocklength elements at fixed stride - the column-of-matrix datatype constructor." },
              { term: "MPI_Bcast / MPI_Scatter", definition: "Root fans one buffer to all / deals distinct chunks to each rank." },
              { term: "MPI_Reduce / MPI_Allreduce", definition: "Combine ranks' values into root / into every rank - the iterative-solver workhorse." },
              { term: "MPI-IO", definition: "Collective file operations (MPI_File_open, read_at_all) letting the library parallelize I/O across ranks." },
            ],
            diagram: {
              kind: "fork",
              title: "Which collective moves the data?",
              caption: "Name the direction and the destination - one line picks the call.",
              start: "Data to move across ranks",
              branches: [
                { label: "Same buffer to everyone", outcome: "MPI_Bcast - trapezoid parameters, configuration", good: true },
                { label: "Distinct chunks dealt out", outcome: "MPI_Scatter - rows of a matrix, subinterval bounds", good: true },
                { label: "Combine local results to one", outcome: "MPI_Reduce (root) or MPI_Allreduce (everyone) - the trapezoid total", good: true },
                { label: "Every rank sends distinct to every other", outcome: "MPI_Alltoall - transposes, all-pairs exchange", good: true },
              ],
            },
            codeExample: {
              language: "c",
              caption: "datatype.c - a matrix column as a derived datatype",
              code: `MPI_Datatype col;
/* 100 blocks of 1 double, stride 100 = column 5 of a 100x100 matrix */
MPI_Type_vector(100, 1, 100, MPI_DOUBLE, &col);
MPI_Type_commit(&col);

MPI_Send(&A[0][5], 1, col, 1, 0, MPI_COMM_WORLD);   /* one strided send */

/* collectives: parameter broadcast + result combine */
MPI_Bcast(&n, 1, MPI_INT, 0, MPI_COMM_WORLD);
MPI_Allreduce(&local, &total, 1, MPI_DOUBLE, MPI_SUM, MPI_COMM_WORLD);
/* roster rule: EVERY rank calls each collective - conditionals deadlock */`,
            },
            bullets: [
              "I/O pattern 1: rank 0 reads -> Bcast/Scatter in; Gather out -> rank 0 writes.",
              "I/O pattern 2: MPI-IO collective reads/writes - the library stripes the file.",
              "Derived datatypes: vector (strided), indexed (triangles), struct (fields) - Type_vector(100, 1, 100, MPI_DOUBLE) sends a matrix column.",
              "Collectives: Bcast, Scatter, Gather, Allgather, Reduce, Allreduce, Alltoall, Barrier.",
              "Collectives beat send loops: library-optimized, deadlock-free, intent-revealing.",
              "Roster rule: all ranks must call each collective - a conditional call deadlocks.",
            ],
            callout: {
              type: "tip",
              title: "Datatypes are layout documentation",
              body: "The underused insight: a derived datatype is not just convenience - it documents the memory layout at the type level. MPI_Type_vector(100, 1, 100, ...) literally says '100 strided singles' where hand-packing code would say 'a loop you must trust'. Write datatypes for strided/indexed data and both the packing bugs and the reader's doubt disappear.",
            },
            examQuestions: [
              {
                q: "Explain MPI I/O handling strategies, derived datatypes with the MPI_Type_vector example for a matrix column, and catalogue the collective communication routines with their semantics.",
                marks: 14,
                outline: [
                  "I/O pattern 1: rank 0 reads, Bcast/Scatter distributes; Gather collects for writing",
                  "I/O pattern 2: MPI-IO collective file operations striped across ranks",
                  "Derived datatypes describe non-contiguous layouts for single-call transfer",
                  "MPI_Type_vector(count, blocklength, stride, oldtype) + Type_commit",
                  "Column example: (100, 1, 100) sends one column of a 100×100 matrix",
                  "Collectives: Bcast, Scatter, Gather, Allgather, Reduce, Allreduce, Alltoall, Barrier",
                  "Roster rule: every rank calls every collective - conditionals deadlock",
                ],
              },
              {
                q: "Why are collectives preferred to hand-written send/receive loops?",
                marks: 7,
                outline: [
                  "Libraries optimize each collective for the actual interconnect topology",
                  "No matched-order deadlock traps - the call's semantics guarantee progress",
                  "Intent-revealing code: MPI_Allreduce says 'combine everywhere' in one line",
                  "Tuned algorithms: tree reductions, pipeline broadcasts chosen per size",
                  "Hand loops reimplement all of that badly, rank by rank",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Pthreads: condition variables and read-write locks",
            body: [
              "Pthreads is POSIX shared-memory threading: threads created with pthread_create share the process's address space, coordinate with mutexes (pthread_mutex_lock/unlock) for mutual exclusion, and join with pthread_join. The syllabus's two extensions answer mutex's two blind spots. Condition variables (pthread_cond_wait/signal/broadcast) let threads sleep until an arbitrary predicate becomes true - the producer-consumer pattern: a consumer finding an empty buffer does not busy-wait but cond_waits on the condition while atomically releasing its mutex; the producer appends, signals, and the consumer wakes, relocks, rechecks. Read-write locks (pthread_rwlock_rdlock/wrlock) refine mutual exclusion for read-mostly data: many readers may hold the lock simultaneously, writers take it exclusively - a read-heavy cache or lookup table serves concurrent readers at full parallelism.",
              "The condition-variable trace carries the marks. Consumer: lock; while (count == 0) pthread_cond_wait(&cv, &m); consume; count--; unlock. Producer: lock; produce; count++; pthread_cond_signal(&cv); unlock. Three details decide correctness: the while (not if) re-check handles spurious wakeups and multi-consumer races (another consumer may drain the buffer between signal and wake); cond_wait atomically releases the mutex and re-acquires it before returning (missing this is the classic deadlock); and signal wakes one waiter while broadcast wakes all - choose per semantics, prefer signal when one unit of work was added.",
              "Exam framing: define the pthread primitives, trace producer-consumer step by step, explain the while-loop re-check and the atomic release-in-wait, and present read-write locks with the reader-count arithmetic (8 readers + 1 writer: rwlock serves 8 concurrent readers where a mutex serves 1). The mark-winning warning: cond_wait without a predicate loop is the most common pthreads bug in real code. The trace plus the warning is the full answer.",
            ],
            keyTerms: [
              { term: "pthread_mutex", definition: "The basic mutual-exclusion lock - lock/unlock around each critical section." },
              { term: "Condition variable", definition: "Sleep-until-predicate primitive: wait atomically releases the mutex and blocks; signal/broadcast wake waiters." },
              { term: "Spurious wakeup", definition: "A wait may return without its signal - the predicate must be re-checked in a while loop." },
              { term: "pthread_rwlock", definition: "Read-write lock: concurrent readers OR one exclusive writer - for read-mostly shared data." },
              { term: "Producer-consumer", definition: "The canonical condvar pattern: bounded buffer, consumers wait on emptiness, producers signal on append." },
            ],
            diagram: {
              kind: "cycle",
              title: "Producer-consumer with a condition variable",
              caption: "The lock-sleep-relock cycle is the whole trick - the mutex never stays held while sleeping.",
              steps: [
                { label: "Consumer locks", note: "mutex acquired" },
                { label: "while (count == 0)", note: "predicate check - loop, not if" },
                { label: "cond_wait", note: "atomically unlock + sleep" },
                { label: "Producer signals", note: "append under mutex, signal one waiter" },
                { label: "Consumer wakes", note: "re-locks mutex, re-checks, consumes" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "prodcons.c - the condvar dance, verbatim",
              code: `/* consumer */
pthread_mutex_lock(&m);
while (count == 0)                    /* while: spurious wakeups + races */
    pthread_cond_wait(&cv, &m);       /* atomically unlock + sleep + relock */
consume();  count--;
pthread_mutex_unlock(&m);

/* producer */
pthread_mutex_lock(&m);
produce();  count++;
pthread_cond_signal(&cv);             /* wake ONE waiter; broadcast wakes all */
pthread_mutex_unlock(&m);

/* read-mostly data: many readers or one writer */
pthread_rwlock_rdlock(&rw);  read();  pthread_rwlock_unlock(&rw);
pthread_rwlock_wrlock(&rw);  write(); pthread_rwlock_unlock(&rw);`,
            },
            bullets: [
              "Pthreads: shared address space + mutexes for exclusion + join for lifecycle.",
              "Condition variables: sleep until predicate; wait atomically releases the mutex.",
              "Producer-consumer: wait on empty, signal on append - bounded buffer standard.",
              "The while-loop re-check handles spurious wakeups and multi-consumer races.",
              "signal wakes one waiter; broadcast wakes all - match to the predicate's change.",
              "Read-write locks: concurrent readers or one writer - 8 readers + 1 writer means 8-way concurrency where a mutex gives 1.",
            ],
            callout: {
              type: "warning",
              title: "wait must re-check in a while loop",
              body: "The bug that survives code review: replacing while (count == 0) with if. Three separate failure paths make the if wrong - spurious wakeups (POSIX allows wait to return unasked), stolen wakeups (another consumer consumed between signal and wake), and broadcast thundering herds. The loop costs nothing and is the difference between a textbook answer and a working program.",
            },
            examQuestions: [
              {
                q: "Explain condition variables in Pthreads. Trace the producer-consumer pattern step by step, explaining why the predicate must be re-checked in a while loop and what atomicity cond_wait provides. Contrast with a pure mutex solution.",
                marks: 14,
                outline: [
                  "condvar = sleep-until-predicate; mutex = exclusion around the predicate state",
                  "Consumer: lock; while(count==0) cond_wait(cv, m); consume; unlock",
                  "cond_wait atomically unlocks + sleeps, re-locks before returning",
                  "Producer: lock; append; count++; signal; unlock",
                  "Spurious wakeups + stolen wakeups force the while-loop re-check",
                  "Pure mutex: consumer would poll or deadlock holding the lock while waiting",
                  "signal vs broadcast: one unit added -> signal; state reset -> broadcast",
                ],
              },
              {
                q: "When does a read-write lock outperform a mutex, and by how much?",
                marks: 7,
                outline: [
                  "Read-mostly data: lookups dominate, writes are rare",
                  "rwlock allows all concurrent readers; a mutex allows one thread at a time",
                  "R readers + rare writes: up to R-fold concurrency on reads",
                  "Cost: reader-count bookkeeping; writer starvation needs policy",
                  "Write-heavy data: no advantage - mutex is simpler and faster",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Cache handling in shared memory programs",
            body: [
              "Shared-memory programmers inherit the cache hierarchy as a silent co-processor - and can silently defeat it. False sharing is the signature disease: two threads write different variables that happen to sit on the same 64-byte cache line; the coherence protocol (Unit II's MESI) knows nothing of variables, only lines, so each write invalidates the other core's copy and the line ping-pongs between caches - every increment becomes a cross-core transaction though no data is shared. The cure is layout: pad or align hot per-thread variables to separate cache lines (64-byte alignment), or restructure to per-thread accumulators reduced at the end (Unit IV's reduce pattern doing double duty as a coherence fix).",
              "The worked numbers show the stakes: two threads incrementing adjacent counters run the loop ~10× slower than the same two threads incrementing 64-byte-separated counters - identical algorithm, identical instruction count, layout alone decides. The constructive side matters equally: true sharing of read-only data is free (S-state copies in every cache), and locality-aware decomposition - each thread owns a contiguous chunk so its working set maps to its cache - turns the hierarchy into an accelerator. Array-of-structures vs structure-of-arrays is the recurring layout decision: AoS packs hot field + cold fields per element (false sharing risk), SoA separates fields so each thread's hot field is contiguous (coalesced, cache-friendly).",
              "Exam framing: define false sharing with the 64-byte line, give the padded-counter fix with the 10× number, and extend to locality-aware decomposition and AoS/SoA. The mark-winning link: false sharing is Unit II's coherence protocol behaving correctly - the hardware is doing its job on the wrong granularity; the fix belongs to the programmer's data layout, not to synchronization. Diagnosing a 'coherence bug' and answering with a lock is the classic wrong turn.",
            ],
            keyTerms: [
              { term: "False sharing", definition: "Independent variables on one cache line - coherence traffic between cores though nothing is shared." },
              { term: "Cache line", definition: "The coherence unit (64 bytes typically) - the hardware's only granularity for sharing decisions." },
              { term: "Padding / alignment", definition: "Spacing per-thread hot data to separate cache lines - the layout fix for false sharing." },
              { term: "AoS vs SoA", definition: "Array-of-structures packs fields per element; structure-of-arrays keeps each field contiguous - the layout decision of parallel code." },
              { term: "Locality-aware decomposition", definition: "Giving each thread a contiguous chunk so its working set maps to its own cache." },
            ],
            diagram: {
              kind: "matrix",
              title: "Threads, variables and cache lines",
              caption: "One quadrant races, one ping-pongs, one is impossible, one scales - layout decides which you live in.",
              axes: { x: "Variables written (one shared -> one per thread)", y: "Cache lines (one shared line -> private lines)" },
              quadrants: [
                { label: "Impossible corner", note: "same variable on two lines cannot happen" },
                { label: "Clean parallelism", note: "per-thread variables on private lines - linear scaling" },
                { label: "True data race", note: "two threads, one variable, one line - atomic/critical/reduction" },
                { label: "False sharing", note: "different variables, same 64 B line - pad, align, or re-layout" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "falseshare.c - layout as performance",
              code: `/* BAD: two hot counters share one 64-byte line */
struct counters { long t0; long t1; } c;         /* t0 and t1 co-resident   */
/* thread 0: c.t0++   thread 1: c.t1++  -> line ping-pongs, ~10x slower   */

/* GOOD: each counter owns its line */
struct padded {
    long t0; char pad0[56];       /* 8 + 56 = 64 bytes  */
    long t1; char pad1[56];
} __attribute__((aligned(64))) c2;
/* thread 0: c2.t0++   thread 1: c2.t1++  -> private lines, full speed    */
/* even better: per-thread local counters, reduced once at the end        */`,
            },
            bullets: [
              "Coherence works on 64-byte lines, not variables - layout is a correctness of speed.",
              "False sharing: different variables, one line - MESI ping-pong with zero real sharing.",
              "Fix: pad/align hot per-thread data to separate lines (56-byte pads for longs).",
              "Better: per-thread accumulators + one final reduce - no sharing at all.",
              "Read-only sharing is free: S-state copies in every cache, no traffic.",
              "AoS vs SoA: separate hot fields for coalescing; AoS risks false sharing.",
            ],
            callout: {
              type: "warning",
              title: "The hardware is right, the layout is wrong",
              body: "The conceptual unlock: false sharing is not a hardware bug - MESI is behaving exactly correctly, protecting a line two cores genuinely write. The granularity mismatch (variables vs lines) is the programmer's to bridge. Diagnosing 'coherence problem' and answering 'add a lock' is backwards: the fix is padding, alignment, or accumulator restructuring - synchronization would only serialize what layout can parallelize.",
            },
            examQuestions: [
              {
                q: "Explain false sharing in shared-memory programs. Show why two threads incrementing adjacent counters run ten times slower than padded ones, and give the layout remedies including per-thread accumulation.",
                marks: 14,
                outline: [
                  "Cache coherence operates on 64-byte lines, not variables",
                  "Adjacent counters t0/t1 in one line: each write invalidates the other core's copy",
                  "Line ping-pongs between L1s - every increment becomes a cross-core transaction",
                  "No data is shared, yet MESI traffic is full-rate - hence ~10× slowdown",
                  "Fix 1: pad/align to 64-byte boundaries so counters own private lines",
                  "Fix 2: per-thread local accumulators reduced once at the end",
                  "Extension: SoA layout keeps hot fields contiguous per thread",
                ],
              },
              {
                q: "Why is read-only sharing free while read-write sharing is expensive?",
                marks: 7,
                outline: [
                  "Read-only lines settle into Shared state in every cache",
                  "No invalidations: reads generate zero coherence traffic",
                  "Writes require exclusive ownership - invalidations + ownership transfer",
                  "Repeated cross-core writes ping-pong the line (true or false sharing)",
                  "Design rule: broadcast immutable data; privatize mutable data",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "OpenMP: parallel for directives and scheduling loops",
            body: [
              "OpenMP is directive-based shared-memory programming: annotations on otherwise-sequential code tell the compiler to parallelize. The workhorse is the parallel for: #pragma omp parallel for partitions a loop's iterations across a thread team - y[i] = a·x[i] + y[i] over a million elements becomes parallel with one line, each thread taking a contiguous span by default. Clauses configure the run: num_threads(8) fixes the team, private(x) gives each thread its own copy of a variable, shared(y) declares the common result, reduction(+:sum) creates per-thread partials combined at the end, schedule(...) chooses iteration assignment, collapse(2) fuses nested loops into one iteration space.",
              "Scheduling loops is where map's load-imbalance lesson (4.4) becomes syntax. schedule(static): equal contiguous chunks assigned once - zero overhead, perfect for uniform per-iteration work (saxpy). schedule(dynamic, chunk): threads pull the next chunk from a shared queue when free - pays synchronization per grab, wins when per-iteration cost varies (Mandelbrot rows, sparse rows). schedule(guided): chunk sizes start large and shrink toward the minimum - dynamic's balance with falling overhead as the loop drains. schedule(runtime) defers to the OMP_SCHEDULE environment variable - one binary, many policies. Worked choice: saxpy -> static; Mandelbrot -> dynamic(16) or guided; the wrong pairing costs 2-5×: dynamic on a uniform loop is pure overhead, static on an irregular loop leaves workers idle at the heavy tail.",
              "Exam framing: write the parallel-for pragma with its core clauses - num_threads, private/shared, reduction, schedule - then match each schedule clause to a workload with the cost reasoning above, and close with the wrong-pairing penalty numbers. The mark-winning detail: static's chunking is deterministic and reproducible, which matters for floating-point accumulation and regression tests, while dynamic's is not - reproducibility is sometimes the tie-breaker between two schedules.",
            ],
            keyTerms: [
              { term: "parallel for", definition: "The OpenMP directive partitioning one loop's iterations across the thread team." },
              { term: "reduction clause", definition: "Per-thread partial results combined with an operator (+, *, min) at the region's end - race-free accumulation." },
              { term: "schedule(static)", definition: "One-time equal chunking - zero overhead, ideal for uniform per-iteration work." },
              { term: "schedule(dynamic, k)", definition: "Threads grab k iterations from a shared queue when free - balance for irregular work, sync cost per grab." },
              { term: "schedule(guided)", definition: "Shrinking chunk sizes - dynamic's balance with declining overhead as the loop drains." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the schedule clause",
              caption: "Uniformity of per-iteration cost is the only question - the wrong clause costs real time.",
              start: "What does one iteration cost?",
              branches: [
                { label: "Uniform, predictable (saxpy)", outcome: "schedule(static) - one assignment, zero overhead, deterministic", good: true },
                { label: "Irregular (Mandelbrot, sparse rows)", outcome: "schedule(dynamic, k) - workers pull chunks as they free up", good: true },
                { label: "Irregular but overhead-sensitive", outcome: "schedule(guided) - big chunks early, small late", good: true },
                { label: "Dynamic on a uniform loop", outcome: "queue synchronization for nothing - 2-5x slower than static", good: false },
              ],
            },
            codeExample: {
              language: "c",
              caption: "omp_loops.c - the directive in three moods",
              code: `/* uniform work: static, deterministic chunks */
#pragma omp parallel for schedule(static)
for (int i = 0; i < N; i++) y[i] = a * x[i] + y[i];

/* irregular work: dynamic grabs */
#pragma omp parallel for schedule(dynamic, 16)
for (int r = 0; r < rows; r++) solve_row(r);      /* cost varies per row  */

/* shrinking chunks: guided */
#pragma omp parallel for schedule(guided)
for (int i = 0; i < N; i++) simulate_cell(i);

/* race-free accumulation is a clause, not a lock */
double sum = 0;
#pragma omp parallel for reduction(+:sum)
for (int i = 0; i < N; i++) sum += x[i] * x[i];`,
            },
            bullets: [
              "#pragma omp parallel for partitions iterations across the thread team.",
              "Clauses: num_threads, private/shared, reduction, schedule, collapse.",
              "static: equal chunks once - uniform work, zero overhead, reproducible.",
              "dynamic(k): queue grabs - irregular work, sync cost per chunk.",
              "guided: shrinking chunks - balance with falling overhead.",
              "runtime: OMP_SCHEDULE decides - one binary, many policies.",
            ],
            callout: {
              type: "exam",
              title: "The clause IS the load balancer",
              body: "The connection that earns design marks: Unit IV said Mandelbrot's imbalance is an assignment problem - OpenMP's schedule clause is that assignment in syntax. Static/dynamic/guided are not trivia to recite; they are the three assignment strategies (equal chunks, queue, shrinking chunks) pre-built into the compiler. Answer schedule questions by naming the per-iteration cost, and the clause follows logically.",
            },
            examQuestions: [
              {
                q: "Explain OpenMP's parallel for directive with its principal clauses. Compare static, dynamic and guided scheduling - when each wins, what each costs - and match each to saxpy and Mandelbrot workloads.",
                marks: 14,
                outline: [
                  "parallel for: iterations partitioned across the thread team",
                  "Clauses: num_threads, private/shared, reduction, schedule, collapse",
                  "static: one-time equal chunks - zero overhead, deterministic, uniform work",
                  "dynamic(k): queue grabs - balance for irregular work, sync per grab",
                  "guided: shrinking chunks - dynamic balance, declining overhead",
                  "runtime: OMP_SCHEDULE env var selects the policy",
                  "saxpy -> static; Mandelbrot/sparse rows -> dynamic or guided; wrong pairing costs 2-5x",
                ],
              },
              {
                q: "Why is schedule(static) sometimes required even when dynamic is faster?",
                marks: 7,
                outline: [
                  "Static assigns deterministic chunk-to-thread mappings",
                  "Floating-point accumulation order is then reproducible run to run",
                  "Dynamic queues reorder chunks nondeterministically",
                  "Regression tests and numerical audits need reproducibility",
                  "Trade: measured speed vs bitwise-identical results",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Thread safety in OpenMP",
            body: [
              "A parallel for that writes shared state is a data race: two threads, one variable, no ordering - the result depends on timing. OpenMP's thread-safety kit layers by cost and scope. Privatize first: variables declared private give each thread its own copy - no sharing, no protection needed; the loop index is private by default. The reduction clause is privatization plus a combining rule: reduction(+:sum) folds per-thread partials at region end - race-free at near-zero cost, the right answer for every associative accumulation. atomic applies to one memory operation (count++, flag = 1) - hardware-supported, cheap, single statements only. critical guards an arbitrary block - always correct, fully serializing, the most expensive; last resort.",
              "The worked decision sequence shows the discipline. Counting matches in an array: reduction(+:count) - privatized partials, combined once. Updating one shared maximum: reduction(max:m). Incrementing a global request counter inside a conditional: atomic - one op. Appending two related values to a shared log: critical - the pair must be indivisible. The failure mode to internalize: reaching for critical first converts the whole region back to sequential execution (Amdahl's serial fraction f grows with every critical section), while the same code with reduction or atomic stays parallel - the choice between them is frequently the difference between scaling and not.",
              "Exam framing: define the race condition, present the four-tier kit in cost order (private -> reduction -> atomic -> critical), and run the worked sequence assigning each case its tool. The mark-winning principle: privatize first, synchronize last - every variable you can make thread-local removes both a race and a slowdown; synchronization is what remains after privatization, not a substitute for it.",
            ],
            keyTerms: [
              { term: "Data race", definition: "Two threads access one memory location concurrently with at least one write and no ordering - undefined behaviour." },
              { term: "private clause", definition: "Each thread gets its own uninitialized copy of the variable - the first line of race defence." },
              { term: "reduction clause", definition: "Per-thread partials combined by an associative operator at region end - race-free accumulation." },
              { term: "atomic", definition: "Hardware-level indivisibility for one memory read-modify-write - cheap, single-statement scope." },
              { term: "critical", definition: "A mutual-exclusion region around arbitrary code - always correct, fully serialized, most expensive." },
            ],
            diagram: {
              kind: "flow",
              title: "Choosing the thread-safety tool",
              caption: "Privatize first, synchronize last - each step down costs more and parallelizes less.",
              steps: [
                { label: "Can it be private?", note: "thread-local copy - zero cost, zero race" },
                { label: "Associative accumulation?", note: "reduction(+,*,max) - partials + one combine" },
                { label: "Single memory operation?", note: "atomic - hardware indivisibility" },
                { label: "Multi-statement block?", note: "critical - serialized, the last resort" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "safety.c - the four tiers in one file",
              code: `double sum = 0;  int count = 0;  double m = -1e300;

#pragma omp parallel for reduction(+:sum)          /* tier: reduction  */
for (int i = 0; i < N; i++) sum += x[i] * x[i];

#pragma omp parallel for reduction(max:m)          /* associative max  */
for (int i = 0; i < N; i++) if (x[i] > m) m = x[i];

#pragma omp atomic                                  /* tier: atomic     */
count++;                                            /* one op only      */

#pragma omp critical                                 /* tier: critical   */
{ log_pair(x[i], y[i]); table_update(); }            /* indivisible block */`,
            },
            bullets: [
              "Tier 1: private - thread-local copies eliminate the race entirely.",
              "Tier 2: reduction(+:sum) - per-thread partials combined at region end.",
              "Tier 3: atomic - one memory operation, hardware-supported, cheap.",
              "Tier 4: critical - arbitrary blocks, fully serialized, the last resort.",
              "Every critical section is Amdahl's serial fraction in the flesh.",
              "Discipline: privatize first, synchronize last.",
            ],
            callout: {
              type: "tip",
              title: "critical is the serial fraction you chose",
              body: "The performance framing that changes behaviour: a critical section is not 'safe code' - it is code you demoted to sequential. If 20% of a loop's body sits in critical, Amdahl caps your speedup at 5 no matter how many threads join. Reduction and atomic exist precisely to keep accumulations out of that bucket; reach for critical only when the block genuinely cannot be made indivisible any other way.",
            },
            examQuestions: [
              {
                q: "Explain data races in OpenMP programs and the thread-safety toolkit - private, reduction, atomic, critical - with the cost and scope of each. Assign the correct tool to: array sum, shared maximum, counter increment, and a two-statement log append.",
                marks: 14,
                outline: [
                  "Race: concurrent access with a write and no ordering - undefined behaviour",
                  "private: thread-local copies - removes sharing, zero cost",
                  "reduction(op:var): per-thread partials combined associatively at region end",
                  "atomic: one indivisible memory operation - hardware support, cheap",
                  "critical: arbitrary block, mutual exclusion, fully serialized - last resort",
                  "Assignments: sum -> reduction(+:sum); max -> reduction(max:m)",
                  "counter++ -> atomic; two-statement append -> critical",
                ],
              },
              {
                q: "Why is overusing critical sections a performance bug rather than a safety feature?",
                marks: 7,
                outline: [
                  "critical serializes its block across all threads - pure sequential fraction",
                  "Amdahl: 20% critical body caps speedup at 5 regardless of thread count",
                  "Accumulations belong in reduction; single ops in atomic",
                  "Privatization removes races without any serialization at all",
                  "Discipline: privatize first, synchronize last - critical is the remainder",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "CUDA: thread management, constant memory, events, atomics and streams",
            body: [
              "CUDA thread management is Unit III's hierarchy in programmer syntax: kernels launch as <<<blocks, threads>>> grids; each thread computes its indices (i = blockIdx.x·blockDim.x + threadIdx.x, with 2-D variants multiplying y-rows); warps of 32 execute SIMT with divergence serializing branches; __syncthreads() coordinates within a block (barrier over its shared memory), never across blocks. Thread management's practical core is occupancy arithmetic: a block of 256 threads with 48 KB shared memory caps how many blocks fit per SM - sizing these per kernel is the throughput dial. Atomics (atomicAdd and friends) make read-modify-write indivisible on the GPU: histogram bins and scattered accumulation (Unit IV's scatter pattern) work without locks because the hardware serializes on the address.",
              "Constant memory is a 64 KB __constant__ window cached for broadcast: when every thread in a warp reads the same address (filter weights, simulation parameters), the read is served once and broadcast - no traffic per lane; divergent addresses serialize, so constant memory is for uniform reads only. Events (cudaEventRecord, cudaEventElapsedTime) time kernel and copy stages on the device's own clock, even under overlap. Streams are ordered queues of async work: two streams let the device-to-host copy of batch k overlap the kernel of batch k+1 - the copy-compute overlap that section 3.4's PCIe numbers demand. Graphics interoperability closes the loop to Unit III: one buffer shared via cudaGraphicsGLRegisterBuffer lets kernels write what OpenGL draws - zero host copies.",
              "Exam framing: cover the six topics in one pass each - indexing and __syncthreads scope, occupancy arithmetic, atomicAdd for the histogram, constant memory's broadcast rule, event timing, stream overlap - and write code fragments for the ones the question stresses. The mark-winning synthesis: streams + events + async copies are one mechanism (asynchronous throughput engineering); constant memory + atomics are two memory answers (broadcast reads, conflicting writes).",
            ],
            keyTerms: [
              { term: "__syncthreads()", definition: "Block-level barrier - all of the block's threads arrive before any proceeds; scoped to one block, never across blocks." },
              { term: "atomicAdd", definition: "Indivisible GPU read-modify-write - lock-free scatter accumulation (histograms, counters)." },
              { term: "Constant memory", definition: "64 KB __constant__ space cached for warp-wide broadcast - uniform reads only; divergent reads serialize." },
              { term: "Stream + events", definition: "Ordered async queues overlapping transfer with compute; events (cudaEventElapsedTime) time stages on the device clock." },
              { term: "Graphics interoperability", definition: "CUDA kernels write into OpenGL/DirectX buffers directly - zero-copy simulation-to-render." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Overlapping copy and compute with streams",
              caption: "Two streams interleave: batch k+1 uploads while batch k computes - PCIe time vanishes under kernel time.",
              stages: [
                { label: "Stream A: copy H2D", note: "batch k uploads asynchronously" },
                { label: "Stream A: kernel", note: "batch k computes on the SMs" },
                { label: "Stream B: copy H2D", note: "batch k+1 uploads during batch k's kernel" },
                { label: "Stream A: copy D2H", note: "results return while B computes" },
                { label: "Events time it", note: "cudaEventElapsedTime per stage" },
              ],
            },
            codeExample: {
              language: "cuda",
              caption: "advanced.cu - the six features in fragments",
              code: `__constant__ float filter[25];                 /* 64 KB broadcast cache */
cudaMemcpyToSymbol(filter, h_filter, 25 * 4);  /* weights every thread reads */

__global__ void hist(int* px, int* bins) {
    __shared__ int local[256];                 /* block-private scratch */
    if (threadIdx.x == 0) memset_block(local);
    __syncthreads();                            /* block barrier only    */
    atomicAdd(&local[px[blockIdx.x * blockDim.x + threadIdx.x] & 255], 1);
    __syncthreads();
    if (threadIdx.x == 0)
        for (int b = 0; b < 256; b++) atomicAdd(&bins[b], local[b]);
}

cudaStream_t s1, s2;  cudaStreamCreate(&s1);  cudaStreamCreate(&s2);
cudaMemcpyAsync(d_a, h_a, n, cudaMemcpyHostToDevice, s1);
kernel<<<grid, block, 0, s1>>>(d_a, d_b);      /* overlap with s2's copy */
cudaEvent_t t0, t1;  cudaEventCreate(&t0);  cudaEventCreate(&t1);
cudaEventRecord(t0, s1);  /* ... */  cudaEventRecord(t1, s1);
cudaEventElapsedTime(&ms, t0, t1);             /* device-clock timing */
/* graphics interop: cudaGraphicsGLRegisterBuffer shares one VBO */`,
            },
            bullets: [
              "Launch: <<<blocks, threads>>>, index i = blockIdx.x*blockDim.x + threadIdx.x; __syncthreads is block-scoped - never across blocks.",
              "Occupancy arithmetic: threads/block and shared memory/block cap blocks per SM.",
              "atomicAdd: indivisible RMW - histograms and scatter without locks.",
              "Constant memory: 64 KB, warp-broadcast reads - uniform access only.",
              "Streams + events: async queues overlapping copy with compute, timed by cudaEventElapsedTime.",
              "Graphics interop: CUDA writes OpenGL buffers directly - zero-copy.",
            ],
            callout: {
              type: "tip",
              title: "Streams are copy-compute pipelining",
              body: "The synthesis that ties the section together: streams implement Unit IV's pipeline pattern on the PCIe bus - stages become 'upload batch k+1' and 'compute batch k' running in parallel on different streams. That is why section 3.4's 100 MB / 6 ms transfer number stops mattering: overlapped transfers hide under kernel time. Events are simply the instrumentation that proves the overlap happened.",
            },
            examQuestions: [
              {
                q: "Explain CUDA thread management (grid/block/warp indexing, __syncthreads, occupancy) and thread-safe accumulation with atomics. Write the histogram kernel using shared memory and atomicAdd.",
                marks: 14,
                outline: [
                  "Launch geometry: <<<blocks, threads>>>; global index formula",
                  "Warps of 32: SIMT execution, divergence serializes branches",
                  "__syncthreads: barrier within a block only; blocks never migrate",
                  "Occupancy: threads/block + shared memory/block determine blocks per SM",
                  "atomicAdd: indivisible read-modify-write on global or shared addresses",
                  "Histogram: block-local bins in shared memory + atomicAdd, then reduce to global",
                  "Two-level atomics cut global contention by the block count factor",
                ],
              },
              {
                q: "When is constant memory the right choice, and when does it hurt? How do streams and events overlap transfers with computation?",
                marks: 7,
                outline: [
                  "Constant memory: 64 KB, cached, warp-broadcast on uniform addresses",
                  "Right: filter weights, parameters - every thread reads the same value",
                  "Hurts: divergent addresses within a warp - reads serialize",
                  "Streams: ordered async queues; two streams overlap copy and kernel",
                  "Events timestamp stages - cudaEventElapsedTime proves the overlap",
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
        { topic: "Flynn's taxonomy, need for parallelism, Moore's law", weight: "8-10 marks", note: "Guaranteed short questions - draw the 2x2 grid and the three walls." },
        { topic: "Amdahl's law and performance measures", weight: "8-12 marks", note: "A numerical is near-certain: formula, substitute, state the 1/f ceiling." },
        { topic: "Snooping vs directory coherence", weight: "10-12 marks", note: "The unit's big question - MESI trace + message flows + the crossover." },
        { topic: "NUCA (S/D), inclusion/exclusion, transactional memory", weight: "6-8 marks", note: "Short notes and contrasts: S-NUCA vs D-NUCA on three axes; STM vs HTM table." },
        { topic: "GPU architecture and evolution", weight: "10-12 marks", note: "Grid/block/warp diagram + CPU vs GPU table + five pipeline eras." },
        { topic: "Parallel patterns and work/span theory", weight: "10-12 marks", note: "Map/reduce/scan catalog + the 1024-element W/S numerical." },
        { topic: "MPI: trapezoidal rule, collectives, derived datatypes", weight: "8-10 marks", note: "Write the trap.c program verbatim; name all eight collectives." },
        { topic: "Pthreads, OpenMP and CUDA programming", weight: "10-12 marks", note: "Code fragments earn marks: condvar loop, schedule clauses, vecAdd kernel." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for writing programs by hand. Every architecture answer in this subject is a diagram plus numbers - practise drawing the MESI machine, the pipeline stages and the CUDA hierarchy from memory until each takes under two minutes.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - why parallel and how fast", tasks: ["Power/memory/ILP walls with the P = CV²f chain", "Flynn 2x2 with two machines per class", "Moore's law redirection + dark silicon", "PRAM sum trace (EREW/CREW/CRCW)", "Amdahl + Gustafson numericals (f = 0.05, p = 128)"] },
        { week: "Week 2", focus: "Unit II - caches at scale", tasks: ["Shared vs private + centralized vs distributed with the impossible quadrant", "MESI state machine + the 3-step snoop trace", "Directory read/write-miss message flows", "S-NUCA vs D-NUCA; inclusion vs exclusion arithmetic", "Transaction lifecycle + STM vs HTM table"] },
        { week: "Week 3", focus: "Unit III - the GPU", tasks: ["CPU vs GPU design contrast table", "Grid/block/warp/thread pyramid + occupancy arithmetic", "Five pipeline eras with landmark chips", "GPGPU offload loop + PCIe numbers", "vecAdd kernel written from memory, twice"] },
        { week: "Week 4", focus: "Unit IV - patterns and theory", tasks: ["Decomposition strategies + row-vs-column mat-vec", "Work/span/Brent numerical on 1024 elements", "Pattern catalogue: map, reduce, scan, fork-join, pipeline", "Hillis-Steele vs Blelloch numbers; scatter hazards", "Fork-join quicksort + pipeline throughput law"] },
        { week: "Week 5", focus: "Unit V (part 1) - MPI + Pthreads", tasks: ["MPI skeleton + trap.c written by hand", "All eight collectives with one-line semantics", "MPI_Type_vector column example", "Producer-consumer condvar trace with the while-loop rule", "False sharing 2x2 + padded-struct fix"] },
        { week: "Week 6", focus: "Unit V (part 2) + revision", tasks: ["OpenMP clauses + schedule matching drills", "Thread-safety four tiers with the worked assignments", "CUDA fragments: constant memory, atomics, streams, events", "Full revision of diagrams: one page per unit", "Two timed papers, 7-mark answers in 10 minutes"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every architecture answer is a diagram first: Flynn grid, MESI machine, NUCA mesh, GPU pyramid, pattern stack. The diagram earns half the marks before prose starts.",
        "Amdahl numericals: write S = 1/(f + (1 - f)/p), substitute, compute, then state the ceiling 1/f - four independent marking points in four lines.",
        "Coherence questions: trace with named bus transactions or directory messages (ReadMiss, Invalidate, Ack) - a state table per step reads as mastery.",
        "Always run a two-core or two-rank worked trace when asked to explain a protocol; abstract descriptions cap at half marks.",
        "GPU answers: the index formula i = blockIdx.x * blockDim.x + threadIdx.x and the i < n guard are graded tokens - write them even in definition answers.",
        "OpenMP and pthreads answers: code fragments beat paragraphs - one correct pragma or condvar loop is worth a paragraph of prose.",
        "Compare questions with tables: rows = designs, columns = latency / traffic / scaling / complexity - the marker's eye finds completeness instantly.",
        "State the crossover or threshold numbers: 8-16 cores for snooping, 64-byte lines for false sharing, 64 KB constant memory, warp size 32.",
        "Time-box: 7 marks in 10-12 minutes, 14 marks in 22-25; diagrams and formulas first, prose to connect them after.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "Morning of the exam, spend ninety minutes on formulas and diagrams only: Amdahl and Gustafson, W/S and Brent, the trapezoid rule with its error bound, the MPI skeleton, the CUDA index formula, and one redrawn diagram per unit - Flynn grid, MESI machine, GPU pyramid, pattern stack, pipeline stages. These are the marking-point skeletons; every answer you write tomorrow hangs on one of them.",
        "Midday, read only your own one-page summaries of the four comparison tables the subject runs on: snooping vs directory, S-NUCA vs D-NUCA, inclusive vs exclusive, STM vs HTM - plus CPU vs GPU and Hillis-Steele vs Blelloch. Comparisons are the most repeated question shape in this syllabus, and a table with a closing crossover number (8-16 cores, or the impossible NUCA corner) reads as a complete answer.",
        "Evening, stop learning and start verifying: run through the five traces you must be able to write cold - the 3-step snoop trace, the directory write-miss flow, the 1024-element W/S calculation, the producer-consumer condvar loop, and vecAdd with launch arithmetic. Then sleep; a rested retrieval beats a crammed margin.",
      ],
      bullets: [
        "Calling Moore's law a speed law - it is transistor density; clocks have been flat since 2005.",
        "Saying the GPU is pure SIMD - it is SIMT: per-lane program counters, divergence handled by masking.",
        "Swapping S-NUCA and D-NUCA - static fixes placement by address hash; dynamic migrates toward requesters.",
        "Claiming directories broadcast - snooping broadcasts; directories send point-to-point to the presence vector only.",
        "Forgetting the E state's purpose in MESI - silent E -> M upgrade saves a bus transaction on private writes.",
        "Confusing reduce and scan - one value versus every prefix; draw the tree to keep them straight.",
        "Reversing gather and scatter - gather reads by index (safe), scatter writes by index (conflicts need atomics).",
        "Writing cond_wait inside an if - spurious wakeups make the while-loop re-check mandatory.",
        "Choosing schedule(dynamic) for uniform loops or schedule(static) for Mandelbrot - the clause is the load balancer.",
        "Omitting the bounds check or ceiling division in CUDA launches - the last partial block writes out of bounds otherwise.",
        "Reaching for critical before reduction/atomic - every critical section is Amdahl's serial fraction you volunteered for.",
        "Printing MPI_Reduce results on a non-root rank - only the root's buffer receives the total; follow with Bcast or use Allreduce.",
      ],
    },
  ],
};
