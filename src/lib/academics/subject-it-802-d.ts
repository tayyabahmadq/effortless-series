import type { AcademicSubject } from "./types";

export const it802d: AcademicSubject = {
  id: "it-802-d",
  code: "IT-802(D)",
  title: "Quantum Computing",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: why quantum computing exists, the linear algebra beneath the qubits, the gates and circuits that transform states, the programming model and its four core techniques, and the algorithms and open-source toolkits that turn it all into working programs.",
  description:
    "Five units walk from motivation, the industry's major players and the founding concepts (qubits, bra-ket, Bloch sphere, superposition, entanglement), through the matrix algebra of Hilbert space, on to the building blocks - platform layers, valid superpositions, Bell states, measurement and the gate zoo - then the programming model with amplitude amplification, the QFT, phase kick-back, phase estimation and quantum walks, ending with Deutsch, Deutsch-Jozsa, Grover and Shor plus IBM Qiskit, Microsoft Q# and Rigetti PyQuil.",
  accentColor: "#8b5cf6",
  emoji: "QC",
  unitCount: 5,
  totalSections: 36,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Motivation and Major Concepts",
      summary:
        "Unit I motivates the whole subject: why classical computing needs help, where quantum computing came from, who is building it today, and the five founding concepts - qubits and multi-qubit states, bra-ket notation, the Bloch sphere, superposition and entanglement - that every later unit builds on.",
      chapter: {
        number: "01",
        title: "The Qubit Idea",
        intro:
          "Unit I covers the motivation for quantum computing, its origin from Feynman to the cloud era, the industry's major players, and the opening toolkit: qubits, multi-qubit state vectors, Dirac's bra-ket notation, the Bloch sphere, quantum superposition and quantum entanglement.",
        inOneBreath:
          "A qubit is a normalized complex two-dimensional state; n qubits carry 2^n amplitudes. Bra-ket notation and the Bloch sphere give the state algebra and geometry; superposition stores many possibilities at once; entanglement binds qubits into correlations no classical state can copy - and interference, not raw parallelism, is what algorithms later harvest.",
        sections: [
          {
            number: "1.1",
            title: "Why quantum computing? The motivation",
            body: [
              "Quantum computing is computing built on quantum mechanics instead of classical logic: information lives in qubits that can hold superpositions of 0 and 1, evolve reversibly under unitary gates, and interfere like waves. It is not a faster classical computer - for spreadsheets and web servers it is useless - it is a different machine for a narrow class of problems: factoring large integers, searching unstructured databases, and simulating quantum systems such as molecules and materials. The motivation for studying it is precisely that narrowness: those problems anchor cryptography, optimization and chemistry, and no classical roadmap touches them.",
              "Richard Feynman supplied the founding argument in 1981-82: simulating a quantum system on a classical computer costs memory that grows exponentially with the number of particles, because the quantum state is a superposition over all configurations at once. Nature is quantum, so a computer built from quantum parts should simulate it with resources growing only polynomially - a quantum simulator. David Deutsch made the idea rigorous in 1985 with the universal quantum computer, a single machine that can simulate any physical process - the quantum analogue of Turing's universal machine. Everything in this syllabus descends from those two papers.",
              "The power and the catch both show in one number. n classical bits hold n numbers; n qubits hold 2^n complex amplitudes - 300 qubits hold about 2^300, or 10^90, amplitudes, more than the atoms in the observable universe. Yet a measurement returns only n classical bits, one sample from the amplitude distribution. Quantum algorithm design is therefore the art of arranging interference so that wrong-answer amplitudes cancel and right-answer amplitudes reinforce before that single measurement happens - the theme of Units IV and V.",
              "Exam framing: 'why study quantum computing' and 'motivation for quantum computing' are standard opening questions. The full answer has four layers: the exponential state space of qubits, Feynman's simulation argument, the proven speedups of Shor and Grover, and the honest limit - a quantum computer is not a faster CPU, it is a different machine whose advantage is problem-specific. A comparison table plus that limit sentence is a complete 14-mark answer.",
            ],
            keyTerms: [
              { term: "Feynman's argument", definition: "Simulating n quantum particles classically costs exponential memory; a quantum machine does it with polynomial resources." },
              { term: "Exponential state space", definition: "n qubits span a 2^n-dimensional complex vector space - the resource algorithms spend." },
              { term: "Interference", definition: "Amplitudes add and cancel like waves; algorithms engineer cancellation of wrong answers." },
              { term: "Quantum simulation", definition: "Using a controllable quantum system to model another - the original motivation for the field." },
              { term: "Speedup", definition: "A proven gap between quantum and classical cost - exponential (Shor) or quadratic (Grover)." },
            ],
            callout: {
              type: "tip",
              title: "Parallelism is the wrong slogan",
              body: "A quantum computer does not 'try all answers at once and pick the best'. The 2^n amplitudes are present, but measurement returns one random sample; speedups come from interference - making wrong-answer amplitudes cancel - not from raw parallelism. Examiners award the precision; slogans lose it.",
            },
            bullets: [
              "A qubit: alpha|0> + beta|1> with |alpha|^2 + |beta|^2 = 1 - normalized complex amplitudes.",
              "n qubits hold 2^n amplitudes; 300 qubits exceed the atom count of the observable universe.",
              "Measurement returns only n bits - one sample - so algorithms must interfere amplitudes first.",
              "Feynman 1981-82: simulate nature with quantum parts; Deutsch 1985: the universal quantum computer.",
              "Shor (1994) and Grover (1996) proved real speedups; cloud hardware arrived from 2016.",
              "Quantum computing is a different machine, not a faster CPU - the advantage is problem-specific.",
            ],
            diagram: {
              kind: "flow",
              title: "From physics to computing in five moves",
              caption: "Each step kept the previous insight and removed one obstacle.",
              steps: [
                { label: "Classical walls", note: "factoring and quantum simulation resist any classical roadmap" },
                { label: "Feynman 1981-82", note: "simulate nature with quantum parts" },
                { label: "Deutsch 1985", note: "the universal quantum computer" },
                { label: "Shor 1994 / Grover 1996", note: "exponential and quadratic speedups proven" },
                { label: "Cloud era 2016-", note: "programmable processors anyone can run" },
              ],
            },
            table: {
              caption: "Classical vs quantum information at a glance.",
              headers: ["Aspect", "Classical", "Quantum"],
              rows: [
                ["Unit of information", "bit: 0 or 1", "qubit: alpha|0> + beta|1>, normalized"],
                ["n-unit state", "n numbers", "2^n complex amplitudes"],
                ["Reading results", "copy any data freely", "measurement samples; no-cloning forbids copying"],
                ["Evolution", "irreversible gates allowed (AND erases)", "unitary only - reversible by law"],
                ["Sweet spot", "general-purpose computing", "factoring, search, quantum simulation"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the motivation for studying quantum computing. Contrast classical and quantum information in a table, and state the classes of problems for which quantum computers promise speedups, with one example each.",
                marks: 14,
                outline: [
                  "Qubit state alpha|0> + beta|1>, normalized; n qubits hold 2^n complex amplitudes",
                  "300 qubits ~ 2^300 ~ 10^90 amplitudes - beyond any classical description",
                  "Measurement returns n bits per shot - interference must concentrate amplitude first",
                  "Feynman 1981-82: exponential classical cost of quantum simulation -> quantum simulator",
                  "Deutsch 1985: universal quantum computer, the quantum Turing machine",
                  "Speedups: factoring (Shor, exponential), unstructured search (Grover, quadratic), chemistry simulation",
                  "Honest limit: not a faster CPU - the advantage is problem-specific",
                ],
              },
              {
                q: "Why can 300 qubits not be described by 300 numbers, and why does that not automatically make quantum computers faster?",
                marks: 7,
                outline: [
                  "The joint state lives in a 2^300-dimensional Hilbert space of amplitudes",
                  "A classical description needs every amplitude - about 10^90 complex numbers",
                  "Measurement yields one sample of n bits, not the amplitude vector",
                  "Without interference, amplitudes are a hidden resource that measures as noise",
                  "Algorithms (Units IV-V) arrange the interference; hardware alone gives nothing",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Origins and the major players",
            body: [
              "The origin story has three acts. Act one, 1981-1985: Feynman argues that simulating physics needs a quantum machine, and Deutsch defines the universal quantum computer - the field exists on paper. Act two, 1994-1996: Peter Shor factors integers in polynomial time, an exponential speedup that threatens RSA and moves quantum computing from curiosity to cryptographic threat; Lov Grover searches unstructured databases quadratically faster. Act three, 1996-2016: quantum error correction and the threshold theorem show noisy hardware can be made reliable in principle, and in May 2016 IBM connects a five-qubit processor to the cloud - anyone with a browser can run a quantum circuit.",
              "The industry map splits by technology. IBM builds superconducting transmon processors and publishes its roadmap: Eagle with 127 qubits (2021), Osprey with 433 (2022), Condor with 1,121 (2023), all programmed through the open-source Qiskit SDK. Google demonstrated random-circuit sampling on the 53-qubit Sycamore chip in 2019, the first 'quantum supremacy' claim. Microsoft invests in topological qubits and ships the Q# language with Azure Quantum. Rigetti builds superconducting chips with the Forest stack - PyQuil and Quil - and D-Wave ships quantum annealers with thousands of qubits (Advantage: 5,000+) aimed at optimization problems.",
              "The one distinction that organizes every comparison: gate-model computers (IBM, Google, Rigetti, Microsoft's long-term bet) apply discrete unitary gates to qubits and measure at the end - the model of Units III-V. Quantum annealers (D-Wave) evolve qubits slowly toward the minimum of an energy landscape and solve optimization problems, not Shor or Grover. Announcing thousands of qubits means little without gate fidelity: qubit count, coherence time and error rate are the three numbers to quote for any platform.",
              "Exam framing: 'origin of quantum computing' and 'major players in the industry' are list questions - the marks are in dates, technologies and one distinguishing number per player, plus the gate-model-versus-annealing contrast. Name at least four players with platform, flagship and software stack, and flag D-Wave as annealing, not gate model. A compact table reads better than prose and is faster to grade, so structure the comparison rather than narrating it - and close with the three-metric rule: qubit count, coherence time and error rate, never count alone.",
            ],
            keyTerms: [
              { term: "Gate model", definition: "Computing by applying discrete unitary gates to qubits, measuring at the end - the model of this course." },
              { term: "Quantum annealing", definition: "Slowly evolving toward the minimum of an energy landscape; optimization only (D-Wave)." },
              { term: "Transmon", definition: "The superconducting circuit used as a qubit by IBM, Google and Rigetti." },
              { term: "Coherence time", definition: "How long a qubit keeps its quantum state (T1/T2) - roughly 100 microseconds on superconducting chips." },
              { term: "Threshold theorem", definition: "Below a hardware error threshold, error correction makes arbitrarily long quantum computation possible." },
            ],
            callout: {
              type: "warning",
              title: "Annealing is not the gate model",
              body: "D-Wave's thousands of qubits sound impressive, but an annealer cannot run Shor or Grover - it minimizes energy landscapes. Comparing qubit counts across gate-model and annealing machines is a category error; state the model before quoting any number. Mixing them up loses the structure of the whole comparison answer.",
            },
            bullets: [
              "Origin: Feynman 1981-82 (simulation) -> Deutsch 1985 (universal QC) -> Shor 1994 / Grover 1996 (speedups) -> 2016 cloud era.",
              "IBM: superconducting transmons; Eagle 127 (2021), Osprey 433 (2022), Condor 1121 (2023); Qiskit.",
              "Google: 53-qubit Sycamore, 2019 random-circuit sampling supremacy claim.",
              "Microsoft: Q# + Azure Quantum now; topological qubits as the long-term hardware bet.",
              "Rigetti: Forest stack - PyQuil, Quil, QPU/QVM; D-Wave: annealing (Advantage, 5,000+ qubits).",
              "Judge platforms by qubit count AND coherence time AND gate error - never by count alone.",
            ],
            diagram: {
              kind: "fork",
              title: "Four players, four bets",
              caption: "Same science, different hardware philosophies and software stacks.",
              start: "Pick a quantum platform",
              branches: [
                { label: "IBM", outcome: "superconducting gate model - Eagle/Osprey/Condor roadmap, Qiskit, free cloud access", good: true },
                { label: "Microsoft", outcome: "Q# + Azure Quantum today, topological qubits as the long-term hardware bet", good: true },
                { label: "Rigetti", outcome: "superconducting gate model with the Forest stack - PyQuil, Quil, QPU and QVM", good: true },
                { label: "D-Wave", outcome: "quantum annealing for optimization - thousands of qubits, but not a gate-model machine", good: true },
              ],
            },
            table: {
              caption: "Player · approach · flagship · software stack.",
              headers: ["Player", "Approach", "Flagship hardware", "Software stack"],
              rows: [
                ["IBM", "superconducting transmons, gate model", "Condor 1121 qubits (2023); Eagle 127 (2021)", "Qiskit, IBM Quantum Experience cloud"],
                ["Google", "superconducting, gate model", "Sycamore 53 qubits - 2019 supremacy claim", "Cirq"],
                ["Microsoft", "ecosystem + topological research", "Q# language, QDK, Azure Quantum", "Q#, VS Code / Visual Studio"],
                ["Rigetti", "superconducting, gate model", "Ankaa-class multi-chip QPUs", "PyQuil, Quil, QVM/QPU (Forest)"],
                ["D-Wave", "quantum annealing (not gate model)", "Advantage - 5,000+ qubits (2020)", "Ocean toolchain, QUBO models"],
              ],
            },
            examQuestions: [
              {
                q: "Trace the origin of quantum computing from Feynman to the cloud era, then compare the major industry players - IBM, Microsoft, Rigetti and D-Wave - by hardware approach, flagship systems and software stacks.",
                marks: 14,
                outline: [
                  "Feynman 1981-82: simulating quantum physics classically is exponential - build quantum machines",
                  "Deutsch 1985: universal quantum computer makes the model rigorous",
                  "Shor 1994: polynomial-time factoring, exponential speedup, cryptographic impact",
                  "Grover 1996: quadratic speedup for unstructured search",
                  "IBM: superconducting transmons, Eagle 127 / Osprey 433 / Condor 1121, Qiskit cloud",
                  "Microsoft: Q# + QDK + Azure Quantum, topological research; Rigetti: PyQuil/Quil, QPU/QVM",
                  "D-Wave: quantum annealing for optimization - not a gate-model machine; state the contrast",
                ],
              },
              {
                q: "Distinguish gate-model quantum computing from quantum annealing, and classify IBM, Google, Rigetti and D-Wave accordingly.",
                marks: 7,
                outline: [
                  "Gate model: discrete unitary gates, measurement at the end - runs Shor, Grover, phase estimation",
                  "Annealing: continuous evolution to an energy minimum - optimization problems (QUBO/Ising)",
                  "IBM, Google, Rigetti: gate model with superconducting qubits",
                  "D-Wave: annealing - thousands of qubits but no universal gate set",
                  "Comparison metric: fidelity and coherence, not raw qubit count",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Qubits and multi-qubit states",
            body: [
              "A qubit is the quantum generalization of a bit: a two-dimensional complex vector |psi> = alpha|0> + beta|1> with alpha and beta complex and |alpha|^2 + |beta|^2 = 1. The amplitudes are not probabilities - they may be negative or complex - but measurement returns 0 with probability |alpha|^2 and 1 with probability |beta|^2 (the Born rule). The basis states |0> = (1, 0)^T and |1> = (0, 1)^T form the computational basis; every qubit state is a point between them, as section 1.5 maps geometrically.",
              "Multi-qubit states are tensor products. The joint state of two qubits is written |ab> = |a> ⊗ |b> and represented by the Kronecker product of the two vectors: |01> = (0, 0, 1, 0)^T. In general a two-qubit state is sum c_ij |ij> with four complex amplitudes; n qubits need 2^n. Adding one qubit doubles the vector dimension - the exponential state space of section 1.1 in concrete arithmetic.",
              "Worked example - the uniform two-qubit superposition. Apply H ⊗ H to |00> = (1, 0, 0, 0)^T: each Hadamard splits its qubit into (|0> + |1>)/sqrt(2), so the joint state becomes (1/2)(|00> + |01> + |10> + |11>) with amplitudes (1/2, 1/2, 1/2, 1/2). Normalization check: four amplitudes of modulus 1/2 give 4 × 1/4 = 1 - valid. Measuring both qubits yields 00, 01, 10, 11 with probability 1/4 each.",
              "Exam framing: 'write the state vector of |01>', 'how many amplitudes does a 3-qubit system need' and 'verify the given state is normalized' are one-line numericals worth sure marks: 3 qubits -> 8 amplitudes, 10 qubits -> 1024, and always show the sum-of-squares check. Pair every written vector with its probabilities - one Born-rule line turns a bare vector into an interpretation - and quoting the growth (300 qubits hold about 10^90 amplitudes) ties the numerical back to Unit I's motivation.",
            ],
            keyTerms: [
              { term: "Qubit", definition: "A normalized two-dimensional complex vector alpha|0> + beta|1>; measurement gives 0 with |alpha|^2." },
              { term: "State vector", definition: "The full list of complex amplitudes - 2^n of them for n qubits." },
              { term: "Tensor product", definition: "The Kronecker product combining single-qubit vectors into joint states; |01> = |0> ⊗ |1>." },
              { term: "Born rule", definition: "Probability of outcome i equals the squared modulus of its amplitude." },
              { term: "Normalization", definition: "Sum of squared amplitude moduli must equal 1 - the validity check for every state." },
            ],
            callout: {
              type: "exam",
              title: "Write the check, get the mark",
              body: "Whenever a question asks for a state vector, end with the normalization check: sum |c_i|^2 = 1. It is one line, it is explicitly scanned for, and it is the difference between a computed answer and a verified one.",
            },
            bullets: [
              "|0> = (1, 0)^T and |1> = (0, 1)^T - the computational basis of C^2.",
              "|psi> = alpha|0> + beta|1> with |alpha|^2 + |beta|^2 = 1; the Born rule gives probabilities.",
              "Joint states are Kronecker products: |01> = (0, 0, 1, 0)^T.",
              "n qubits -> 2^n amplitudes: 3 -> 8, 10 -> 1024, 50 -> about 10^15.",
              "H ⊗ H on |00> gives (1/2)(|00> + |01> + |10> + |11>) - each outcome with probability 1/4.",
              "Amplitudes are complex; probabilities are their squared moduli.",
            ],
            diagram: {
              kind: "layers",
              title: "One qubit at a time: the state-space ladder",
              caption: "Each added qubit doubles the vector dimension - the source of both power and simulation difficulty.",
              layers: [
                { label: "1 qubit: C^2", note: "2 amplitudes - alpha and beta" },
                { label: "2 qubits: C^4", note: "4 amplitudes - c00, c01, c10, c11" },
                { label: "3 qubits: C^8", note: "8 amplitudes - the GHZ state needs all of them" },
                { label: "n qubits: C^(2^n)", note: "2^n amplitudes - 50 qubits is about 10^15 numbers" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "qubits.py - state vectors and the tensor product",
              code: `import numpy as np

ket0 = np.array([1, 0]);  ket1 = np.array([0, 1])
ket01 = np.kron(ket0, ket1)          # |01> = |0> (x) |1>
print(ket01)                          # [0 0 1 0]

uniform = np.ones(4) / 2              # H (x) H |00>
print(np.vdot(uniform, uniform).real) # 1.0 - normalized
print(np.abs(uniform) ** 2)           # [0.25 0.25 0.25 0.25]`,
            },
            examQuestions: [
              {
                q: "Define a qubit and its state vector. Show how multi-qubit states are constructed with the tensor product, write the state vectors of |00>, |01> and the uniform two-qubit superposition, and verify normalization for each.",
                marks: 14,
                outline: [
                  "Qubit: alpha|0> + beta|1>, alpha/beta complex, |alpha|^2 + |beta|^2 = 1",
                  "Basis vectors |0> = (1, 0)^T and |1> = (0, 1)^T",
                  "Tensor product builds joint states: |ab> = |a> ⊗ |b> (Kronecker product)",
                  "|00> = (1, 0, 0, 0)^T; |01> = (0, 0, 1, 0)^T - product states with four amplitudes",
                  "H ⊗ H |00> = (1/2)(|00> + |01> + |10> + |11>) - the uniform superposition",
                  "Normalization checks: 1/4 + 3/4 = 1 for one qubit; 4 × 1/4 = 1 for the pair",
                  "n qubits need 2^n amplitudes - the exponential state space",
                ],
              },
              {
                q: "How many complex amplitudes describe a 3-qubit and a 10-qubit register? Compute the measurement probabilities of the state (1/2)|00> + (1/2)|11> and state what property it has that |00> lacks.",
                marks: 7,
                outline: [
                  "3 qubits -> 8 amplitudes; 10 qubits -> 1024",
                  "Amplitudes (1/2, 0, 0, 1/2): P(00) = 1/4, P(11) = 1/4, P(01) = P(10) = 0",
                  "Normalization: 1/4 + 1/4 = 1 - a valid state",
                  "c00·c11 = 1/4 but c01·c10 = 0 - the factorization test of section 1.7 fails",
                  "It is entangled - neither qubit has a state of its own",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Bra-ket (Dirac) notation",
            body: [
              "Dirac's bra-ket notation packages quantum bookkeeping into three symbols. A ket |psi> is a column vector - the state itself. A bra <psi| is its conjugate transpose - a row vector whose entries are the complex conjugates. The inner product <phi|psi> = sum (phi_i)* psi_i is a complex number: the overlap of the two states. For normalized states <psi|psi> = 1, and two states are orthogonal when their inner product is 0.",
              "The computational basis makes the algebra concrete: <0|0> = 1, <1|1> = 1, <0|1> = 0 - orthonormal. Orthonormality is what lets amplitudes be read back from a state: if |psi> = alpha|0> + beta|1>, then <0|psi> = alpha and <1|psi> = beta, because the cross terms vanish. Coefficients are inner products - that working rule is used everywhere from measurement (Unit III) to phase estimation (Unit IV).",
              "Worked example. |psi> = (1/2)|0> + (sqrt(3)/2)|1> and |+> = (1/sqrt(2))(|0> + |1>). The overlap is <+|psi> = (1/sqrt(2))(1/2) + (1/sqrt(2))(sqrt(3)/2) = (1 + sqrt(3))/(2 sqrt(2)) ≈ 0.966. Squared, it is ≈ 0.933 - so measuring |psi> in the X basis (section 3.5) yields + with probability 93.3%. The conjugate matters: <psi|+> = <+|psi>* - the same modulus, the conjugate phase.",
              "Exam framing: every written answer uses this notation, so notation marks are free marks - ket = column, bra = conjugate row, inner product conjugates the bra side. Deriving amplitudes as <i|psi> and quoting orthonormality <0|1> = 0 shows command of the machinery, not just the symbols. One overlap computed twice - with and without the conjugation on the bra - is the fastest proof of the rule inside an answer, because the two results differ and only the conjugated one is correct.",
            ],
            keyTerms: [
              { term: "Ket", definition: "A column vector representing the quantum state." },
              { term: "Bra", definition: "The conjugate transpose of a ket - a row vector used to form inner products." },
              { term: "Inner product", definition: "<phi|psi> = sum (phi_i)* psi_i - the complex overlap of two states." },
              { term: "Orthonormal basis", definition: "Unit-length, mutually orthogonal vectors - the computational basis is the default." },
              { term: "Conjugate transpose", definition: "The dagger operation - transpose plus complex conjugation; written U^dagger for matrices." },
            ],
            callout: {
              type: "tip",
              title: "Order and conjugation",
              body: "<phi|psi> = <psi|phi>* - swapping bra and ket complex-conjugates the number. Forgetting the conjugation is the classic one-mark slip in overlap calculations; and writing |a><b| (outer product, a matrix) where <a|b> (inner product, a scalar) is wanted loses more.",
            },
            bullets: [
              "Ket |psi>: column vector; bra <psi|: its conjugate-transpose row.",
              "<phi|psi> = sum (phi_i)* psi_i - complex; <psi|psi> = 1 for normalized states.",
              "Orthonormality: <0|0> = <1|1> = 1 and <0|1> = <1|0> = 0.",
              "Amplitudes are read by inner product: alpha = <0|psi>, beta = <1|psi>.",
              "Worked overlap: <+|psi> = (1 + sqrt(3))/(2 sqrt(2)) ≈ 0.966, so P(+ in X basis) ≈ 0.933.",
              "Outer product |u><v| is a matrix; inner product <u|v> is a scalar - never confuse them.",
            ],
            diagram: {
              kind: "compare",
              title: "Ket versus bra",
              caption: "The two halves of Dirac notation - and the conjugation that hides in the bra.",
              left: {
                heading: "Ket |psi>",
                items: [
                  "A column vector - the state itself",
                  "|0> = (1, 0)^T, |1> = (0, 1)^T",
                  "Coefficients: |psi> = alpha|0> + beta|1>",
                  "Operators act from the left: X|psi>",
                ],
              },
              right: {
                heading: "Bra <psi|",
                items: [
                  "The conjugate transpose - a row vector",
                  "Entries are complex conjugates of the ket",
                  "Inner product: <phi|psi> = bra phi times ket psi",
                  "<phi|psi> = <psi|phi>* - swapping order conjugates",
                ],
              },
            },
            table: {
              caption: "Object · symbol · shape · example.",
              headers: ["Object", "Symbol", "Shape", "Example"],
              rows: [
                ["Ket", "|psi>", "column vector (2^n × 1)", "|0> = (1, 0)^T"],
                ["Bra", "<psi|", "row vector (1 × 2^n)", "<0| = (1, 0)"],
                ["Inner product", "<phi|psi>", "scalar", "<0|1> = 0, <0|0> = 1"],
                ["Outer product", "|u><v|", "matrix (2^n × 2^n)", "|0><1| = [[0, 1], [0, 0]]"],
              ],
            },
            examQuestions: [
              {
                q: "Explain bra-ket notation: kets, bras, inner products and outer products. Using |psi> = (1/2)|0> + (sqrt(3)/2)|1> and |+> = (1/sqrt(2))(|0> + |1>), compute <psi|psi>, <+|psi> and <+|+>, and interpret |<+|psi>|^2 as a probability.",
                marks: 14,
                outline: [
                  "Ket: column vector; bra: conjugate-transpose row",
                  "Inner product <phi|psi> = sum (phi_i)* psi_i - conjugation on the bra side",
                  "Outer product |u><v| is a matrix - the raw material of operators (Unit II)",
                  "<psi|psi> = 1/4 + 3/4 = 1 - normalized",
                  "<+|psi> = (1/sqrt(2))(1/2) + (1/sqrt(2))(sqrt(3)/2) = (1 + sqrt(3))/(2 sqrt(2)) ≈ 0.966",
                  "<+|+> = 1; <0|1> = 0 shows the basis is orthonormal",
                  "|<+|psi>|^2 ≈ 0.933 - probability of outcome + when measuring in the X basis",
                ],
              },
              {
                q: "Show that the amplitudes of |psi> = alpha|0> + beta|1> can be recovered as alpha = <0|psi> and beta = <1|psi>. Why does this fail if the basis vectors are not orthogonal?",
                marks: 7,
                outline: [
                  "<0|psi> = <0|(alpha|0> + beta|1>) = alpha<0|0> + beta<0|1> = alpha",
                  "Similarly <1|psi> = beta",
                  "The cross terms vanish because <0|1> = 0 - orthogonality does the work",
                  "For a non-orthogonal basis the cross terms survive and coefficients are not simple inner products",
                  "Orthonormal bases are therefore the standard measurement settings",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "The Bloch sphere representation",
            body: [
              "The Bloch sphere is the geometric map of a single qubit. Every pure state can be written |psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1>, where theta (0 to pi) is the polar angle measured from the north pole and phi (0 to 2pi) is the azimuthal phase around the equator. |0> sits at the north pole, |1> at the south pole; the equator holds the equal superpositions, with longitude encoding the relative phase between the two components.",
              "The canonical equator states: |+> = (|0> + |1>)/sqrt(2) at phi = 0, |-> = (|0> - |1>)/sqrt(2) at phi = pi, |+i> = (|0> + i|1>)/sqrt(2) at phi = pi/2 and |-i> at phi = 3pi/2. One subtlety the sphere makes visible: multiplying |psi> by a global phase e^(i gamma) moves nothing on the sphere - the two states are physically identical. Only the relative phase phi between the components is real, which is why phi is a coordinate and gamma is not.",
              "Worked example - both directions. From amplitudes to angles: |psi> = (1/2)|0> + e^(i pi/4)(sqrt(3)/2)|1> has cos(theta/2) = 1/2, so theta/2 = pi/3 and theta = 2pi/3; the phase factor gives phi = pi/4. From angles to amplitudes: theta = pi/2, phi = 0 gives cos(pi/4)|0> + sin(pi/4)|1> = |+>. Gates are rotations on this sphere: X rotates by pi about the x-axis (north pole to south), Z rotates by pi about the z-axis (a phase flip), and H maps poles to equator points.",
              "Exam framing: convert a given state to Bloch form and back, identify theta and phi, and state the global-phase rule. Do one conversion in each direction inside the answer - amplitudes to angles, then angles to amplitudes - because the examiner wants the trigonometry run, not asserted. Naming X, Z and H as Bloch rotations (about the x-axis, the z-axis, and pole-to-equator) connects this section to every gate in Unit III.",
            ],
            keyTerms: [
              { term: "Bloch sphere", definition: "The unit sphere mapping every single-qubit pure state to a point via theta and phi." },
              { term: "Polar angle theta", definition: "Latitude - 0 at |0>, pi at |1>, pi/2 on the equator." },
              { term: "Azimuthal phase phi", definition: "Longitude - the relative phase between the |0> and |1> components." },
              { term: "Global phase", definition: "The factor e^(i gamma) common to all amplitudes - physically invisible, no coordinate on the sphere." },
              { term: "Relative phase", definition: "The phase difference between components - physical and measurable in the right basis." },
            ],
            callout: {
              type: "tip",
              title: "Global versus relative phase",
              body: "e^(i gamma)|psi> and |psi> are the same state - the sphere cannot tell them apart and no measurement can. But replacing |+> with |-> changes phi by pi and is measurable in the X basis. Exam answers that cite this distinction read as genuinely quantum-mechanical.",
            },
            bullets: [
              "|psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1> - every pure qubit state.",
              "|0> is the north pole (theta = 0), |1> the south pole (theta = pi), equal superpositions the equator.",
              "|+>, |->, |+i>, |-i> sit at phi = 0, pi, pi/2, 3pi/2 - longitude is relative phase.",
              "Global phase e^(i gamma) has no coordinate - it is physically meaningless.",
              "Worked conversion: (1/2)|0> + e^(i pi/4)(sqrt(3)/2)|1> -> theta = 2pi/3, phi = pi/4.",
              "Gates are rotations: X = pi about the x-axis, Z = pi about the z-axis, H maps pole to equator.",
            ],
            diagram: {
              kind: "matrix",
              title: "Four landmark states on the Bloch sphere",
              caption: "Theta sets the latitude (pole to pole), phi the longitude (relative phase).",
              axes: { x: "azimuth phi - relative phase (0 -> 2pi)", y: "polar theta - 0 at the |0> pole to pi at the |1> pole" },
              quadrants: [
                { label: "|0> - north pole", note: "theta = 0; phi undefined" },
                { label: "|1> - south pole", note: "theta = pi; phi undefined" },
                { label: "|+> - equator, phi = 0", note: "(|0> + |1>)/sqrt(2)" },
                { label: "|+i> - equator, phi = pi/2", note: "(|0> + i|1>)/sqrt(2)" },
              ],
            },
            table: {
              caption: "Canonical states · Bloch coordinates · amplitude form.",
              headers: ["State", "theta", "phi", "Amplitude form"],
              rows: [
                ["|0>", "0", "-", "1·|0> + 0·|1>"],
                ["|1>", "pi", "-", "0·|0> + 1·|1>"],
                ["|+>", "pi/2", "0", "(|0> + |1>)/sqrt(2)"],
                ["|->", "pi/2", "pi", "(|0> - |1>)/sqrt(2)"],
                ["|+i>", "pi/2", "pi/2", "(|0> + i|1>)/sqrt(2)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Bloch sphere representation of a qubit. Write the general state in terms of theta and phi, locate |0>, |1>, |+> and |+i> on the sphere, convert (1/2)|0> + e^(i pi/4)(sqrt(3)/2)|1> to Bloch form, and explain why the global phase is not represented.",
                marks: 14,
                outline: [
                  "General form |psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1>",
                  "|0>: north pole (theta = 0); |1>: south pole (theta = pi)",
                  "Equator at theta = pi/2: |+> (phi = 0), |-> (phi = pi), |+i> (phi = pi/2)",
                  "Conversion: cos(theta/2) = 1/2 -> theta = 2pi/3; the phase factor gives phi = pi/4",
                  "Back-conversion: theta = pi/2, phi = 0 gives |+>",
                  "Global phase e^(i gamma) scales all amplitudes equally - all |amplitudes|^2 unchanged",
                  "Hence no measurement distinguishes e^(i gamma)|psi> from |psi>; phi is measurable, gamma is not",
                ],
              },
              {
                q: "Show that |-> = (|0> - |1>)/sqrt(2) and |+> differ only in relative phase, and describe a measurement that distinguishes them.",
                marks: 7,
                outline: [
                  "Both have equal moduli 1/sqrt(2) - identical Z-basis statistics (50/50)",
                  "They differ by phi: 0 versus pi - relative phase only",
                  "Measuring in the Z basis returns 0 or 1 with p = 1/2 for either state",
                  "Apply H first (an X-basis measurement): |+> -> |0> with certainty, |-> -> |1> with certainty",
                  "A basis change converts relative phase into a readable outcome",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Quantum superposition",
            body: [
              "Quantum superposition is the principle that a qubit may occupy a linear combination of basis states at once: |psi> = alpha|0> + beta|1> is simultaneously partly 0 and partly 1, with complex amplitudes carrying 'how much' and 'which phase'. Superposition is not vagueness - the state is an exact vector - and it is not 50/50 by definition: any normalized pair (alpha, beta) is legal, for example (3/5, 4/5). Measurement resolves the ambiguity stochastically: outcome i occurs with probability |amplitude|^2 - the Born rule.",
              "Worked example. |psi> = (3/5)|0> + (4/5)|1>: P(0) = 9/25 = 36% and P(1) = 16/25 = 64% - an unequal superposition. Now interfere: apply H. H|psi> has |0>-amplitude (3 + 4)/(5 sqrt(2)) ≈ 0.99 and |1>-amplitude (3 - 4)/(5 sqrt(2)) ≈ -0.14, so the probabilities are ≈ 98% and 2%. The two 0-amplitudes (3/5 and 4/5) pointed the same way and added; the two 1-amplitudes partly cancelled. That arithmetic - amplitudes adding or cancelling - is interference, the engine of every algorithm in Unit V.",
              "Phases are the hidden half of superposition. |+> and (3/5)|0> + (4/5)|1> look different in the Z basis, but |+> and |-> - equal weights, opposite phase - are indistinguishable in the Z basis and perfectly distinguishable in the X basis (apply H, then measure). A superposition's observable description depends on the measurement basis; algorithms hide information in phases and reveal it by recombining (interfering) amplitudes before the final measurement.",
              "Exam framing: convert amplitudes to probabilities, demonstrate interference with a two-gate trace, and state that amplitudes - unlike probabilities - can cancel. Those three moves answer every superposition question this syllabus asks. Work one numeric example - the (3/5, 4/5) state through H - rather than describing the arithmetic in words, and close with the corrected slogan: quantum computers do not try all answers at once, they arrange cancellation. That final sentence turns a description into an argument.",
            ],
            keyTerms: [
              { term: "Superposition", definition: "A linear combination of basis states - the qubit's exact vector state before measurement." },
              { term: "Born rule", definition: "P(i) = |amplitude_i|^2; probabilities are squared moduli of complex amplitudes." },
              { term: "Interference", definition: "Amplitudes adding (constructive) or cancelling (destructive); the mechanism that concentrates probability." },
              { term: "Relative phase", definition: "The phase difference between amplitudes - invisible in one basis, visible in another." },
              { term: "Collapse", definition: "Measurement replaces the superposition with the measured eigenstate." },
            ],
            callout: {
              type: "warning",
              title: "Amplitudes cancel; probabilities cannot",
              body: "Probabilities are positive numbers that only add. Amplitudes are complex and carry signs - 1/sqrt(2) and -1/sqrt(2) combine to 0. Any algorithm answer that adds probabilities instead of amplitudes has missed the entire subject: write |a + b|^2, not |a|^2 + |b|^2.",
            },
            bullets: [
              "Superposition: alpha|0> + beta|1> with any normalized complex (alpha, beta) - not necessarily 50/50.",
              "Born rule: P(0) = |alpha|^2, P(1) = |beta|^2; (3/5, 4/5) gives 36% / 64%.",
              "Interference: H applied to (0.6, 0.8) yields probabilities 98% / 2% - amplitudes added and cancelled.",
              "|+> and |-> are identical in the Z basis, opposite in the X basis - phase needs the right basis.",
              "Algorithms hide information in phases, then recombine amplitudes before measuring.",
              "Measurement collapses the superposition to the observed eigenstate.",
            ],
            diagram: {
              kind: "flow",
              title: "From amplitudes to outcomes",
              caption: "Prepare, rotate phase, interfere, measure - the loop every quantum algorithm runs.",
              steps: [
                { label: "Prepare", note: "|0> or a chosen basis state" },
                { label: "Superpose (H)", note: "equal amplitudes, relative phase 0" },
                { label: "Phase rotate (S, T)", note: "encode information in the relative phase" },
                { label: "Interfere (H again)", note: "amplitudes add or cancel" },
                { label: "Measure", note: "probabilities = |amplitude|^2" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "superposition.py - watch interference move the probabilities",
              code: `import numpy as np

H = np.array([[1, 1], [1, -1]]) / np.sqrt(2)

psi = np.array([0.6, 0.8])             # 36% / 64% superposition
out = H @ psi                           # interfere the amplitudes
print(np.abs(out) ** 2)                 # [0.98 0.02] - near-cancellation

ket_minus = np.array([1, -1]) / np.sqrt(2)    # |->
print(np.abs(H @ ket_minus) ** 2)       # [0. 1.] - perfect X-basis separation`,
            },
            examQuestions: [
              {
                q: "Define quantum superposition and the Born rule. For |psi> = (3/5)|0> + (4/5)|1>, compute the measurement probabilities, then compute the state and probabilities after applying H, identifying the constructive and destructive interference. Explain why |+> and |-> are indistinguishable in the Z basis but distinguishable in the X basis.",
                marks: 14,
                outline: [
                  "Superposition: a normalized linear combination; Born rule P(i) = |amplitude|^2",
                  "P(0) = 9/25 and P(1) = 16/25 - unequal superpositions are legal",
                  "H|psi> has amplitudes 7/(5 sqrt(2)) and -1/(5 sqrt(2)) - probabilities about 0.98 and 0.02",
                  "0-amplitudes aligned: constructive; 1-amplitudes opposed: destructive",
                  "|+> and |->: same moduli, relative phase differs by pi",
                  "Z-basis measurement: 50/50 for both - the phase is invisible",
                  "X-basis (H first): |+> -> |0> and |-> -> |1> with certainty - the phase is revealed",
                ],
              },
              {
                q: "Why are amplitudes called the 'hidden half' of superposition? Give one example where ignoring the sign of an amplitude produces a wrong prediction.",
                marks: 7,
                outline: [
                  "Amplitudes carry magnitude and phase; measurement shows only |amplitude|^2",
                  "Z|+> = |-> - the |1> amplitude flips sign, invisible to a Z-measurement",
                  "After H, the sign decides: H|-> = |1>, not |0>",
                  "Ignoring the minus sign would predict outcome 0 - wrong",
                  "Interference is the resource; probabilities alone can never cancel",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Quantum entanglement",
            body: [
              "Quantum entanglement is the property of a multi-qubit state that cannot be written as a tensor product of single-qubit states. The canonical example is the Bell state Phi+ = (|00> + |11>)/sqrt(2): neither qubit has a state of its own - the pair has one shared state. Entanglement is the strongest correlation physics allows: measuring one qubit instantaneously determines the other's outcome, even though each outcome is individually random.",
              "Worked example - the factorization test. Suppose Phi+ = (alpha|0> + beta|1>) ⊗ (gamma|0> + delta|1>) = alpha·gamma|00> + alpha·delta|01> + beta·gamma|10> + beta·delta|11>. Matching amplitudes: alpha·gamma = 1/sqrt(2), beta·delta = 1/sqrt(2), alpha·delta = 0 and beta·gamma = 0. From alpha·delta = 0, alpha = 0 or delta = 0; either choice kills one of the two 1/sqrt(2) products - a contradiction. No factorization exists: the state is entangled. The one-line version: product states satisfy c00·c11 = c01·c10, and here (1/sqrt(2))² ≠ 0².",
              "Correlations in detail: measuring the first qubit of Phi+ gives 0 or 1 with probability 1/2 each, and the second qubit then equals it with certainty - outcomes correlated, values random. Before measurement neither qubit carries a definite value, so nothing travels between them; the local randomness prevents faster-than-light signalling (each local record is 50/50 noise until the parties compare notes classically). Entanglement is also a spendable resource: teleportation, superdense coding and the oracle speedups of Unit V all consume it.",
              "Exam framing: define entanglement, run the factorization test on a given state, exhibit the Bell pair's correlations, and name one use. Four moves, all quotable, cover the standard 14-mark question. The proof must be the inequality, not the adjective - write c00·c11 = 1/2 ≠ 0 = c01·c10 and conclude. Then give the correlation behaviour in one line (A = 0 forces B = 0, A = 1 forces B = 1, each with probability 1/2) and name teleportation or superdense coding as the use.",
            ],
            keyTerms: [
              { term: "Entanglement", definition: "A joint state not decomposable into single-qubit states - the pair has one shared state." },
              { term: "Bell state", definition: "One of four maximally entangled two-qubit states, e.g. (|00> + |11>)/sqrt(2)." },
              { term: "Factorization test", definition: "For two qubits, product iff c00·c11 = c01·c10; Bell states fail it." },
              { term: "Perfect correlation", definition: "Outcomes of the two qubits match (or anti-match) with certainty although each is random." },
              { term: "Entanglement as a resource", definition: "Spent in teleportation, superdense coding and the oracle speedups of Unit V." },
            ],
            callout: {
              type: "exam",
              title: "The two-line proof",
              body: "Write c00·c11 = c01·c10 as the product-state condition, plug in the amplitudes (1/sqrt(2), 0, 0, 1/sqrt(2)), and conclude 1/2 ≠ 0 - entangled. Examiners accept that as the full proof; essays without the inequality do not.",
            },
            bullets: [
              "Entanglement: no factorization (alpha|0> + beta|1>) ⊗ (gamma|0> + delta|1>) reproduces the state.",
              "Bell state Phi+ = (|00> + |11>)/sqrt(2) - the maximally entangled two-qubit state.",
              "Factorization test: product iff c00·c11 = c01·c10; the Bell pair gives 1/2 ≠ 0.",
              "Measuring qubit A: 0 or 1 with p = 1/2; qubit B then equals it with certainty.",
              "Local values are random - no faster-than-light signalling is possible.",
              "Uses: teleportation, superdense coding, and the Unit V oracle algorithms.",
            ],
            diagram: {
              kind: "fork",
              title: "Measuring one qubit of a Bell pair",
              caption: "Each outcome is random; each outcome also fixes the partner - correlation without communication.",
              start: "Measure qubit A of Phi+ = (|00> + |11>)/sqrt(2)",
              branches: [
                { label: "Outcome 0 (p = 1/2)", outcome: "qubit B collapses to |0> - B is 0 with certainty", good: true },
                { label: "Outcome 1 (p = 1/2)", outcome: "qubit B collapses to |1> - B is 1 with certainty", good: true },
                { label: "Product state instead", outcome: "outcomes independent - B stays 50/50 either way; no resource", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "entangle.py - the factorization test in four amplitudes",
              code: `import numpy as np

phi_plus = np.array([1, 0, 0, 1]) / np.sqrt(2)
c00, c01, c10, c11 = phi_plus
print(np.isclose(c00 * c11, c01 * c10))   # False -> entangled

ket01 = np.kron([1, 0], [0, 1])            # product state |01>
c00, c01, c10, c11 = ket01
print(np.isclose(c00 * c11, c01 * c10))   # True -> factorizable`,
            },
            examQuestions: [
              {
                q: "Define quantum entanglement. Prove that Phi+ = (|00> + |11>)/sqrt(2) cannot be written as a tensor product of single-qubit states, describe the measurement correlations, and explain why entanglement does not enable faster-than-light communication.",
                marks: 14,
                outline: [
                  "Definition: a joint state with no product decomposition",
                  "Assume factorization (alpha|0> + beta|1>) ⊗ (gamma|0> + delta|1>)",
                  "Matching amplitudes: alpha·gamma = beta·delta = 1/sqrt(2); alpha·delta = beta·gamma = 0",
                  "alpha·delta = 0 forces alpha = 0 or delta = 0, killing a 1/sqrt(2) term - contradiction",
                  "One-line test: product iff c00·c11 = c01·c10; here 1/2 ≠ 0",
                  "Correlations: qubit A gives 0/1 with p = 1/2; qubit B matches A with certainty",
                  "No-signalling: each local record is 50/50 noise - the correlation shows only after classical comparison",
                ],
              },
              {
                q: "Is the state (1/2)(|00> + |01> + |10> + |11>) entangled? Justify with the factorization test and identify each qubit's individual state.",
                marks: 7,
                outline: [
                  "Amplitudes (1/2, 1/2, 1/2, 1/2): c00·c11 = 1/4 = c01·c10 - the test passes",
                  "It factorizes as (1/sqrt(2))(|0> + |1>) ⊗ (1/sqrt(2))(|0> + |1>)",
                  "Each qubit is |+> = (|0> + |1>)/sqrt(2)",
                  "The joint state is |+> ⊗ |+> = H ⊗ H applied to |00>",
                  "Not entangled - product states never are, whatever their amplitudes",
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
      title: "Math Foundation for Quantum Computing",
      summary:
        "Unit II builds the linear algebra the qubits live on: basis vectors and orthogonality, inner products and Hilbert spaces, matrices and tensor (Kronecker) products, unitary operators, projectors and the Born rule, Dirac notation as working shorthand, and the eigenvalues and eigenvectors that make gates and measurement computable.",
      chapter: {
        number: "02",
        title: "The Algebra Beneath the Qubits",
        intro:
          "Unit II covers basis vectors and orthogonality, inner products and Hilbert spaces, matrices and tensor products, unitary operators, projectors and measurement, Dirac notation as working shorthand, and eigenvalues and eigenvectors of quantum operators.",
        inOneBreath:
          "States are vectors in a Hilbert space with an orthonormal basis; operators are matrices; composite systems use Kronecker products; legal evolution is unitary - norm-preserving and reversible; measurement uses projectors with the Born rule; eigenvectors name the states a gate or observable leaves unchanged, and eigenvalues are the phases or readouts that later techniques harvest.",
        sections: [
          {
            number: "2.1",
            title: "Basis vectors and orthogonality",
            body: [
              "A basis is a minimal set of vectors from which every state can be built by linear combination. The computational basis of a qubit is |0> = (1, 0)^T and |1> = (0, 1)^T, and it is orthonormal: each vector has unit length (<0|0> = <1|1> = 1) and the two are mutually perpendicular (<0|1> = 0). Orthonormality matters because measurement probabilities are read in a basis: only in an orthonormal basis do the squared amplitudes sum to exactly 1, which is what a probability distribution requires.",
              "Completeness is the other half of the definition: |0><0| + |1><1| = I, meaning nothing is missed - any state |psi> = alpha|0> + beta|1> exhausts the space. The same state has different coordinates in different bases: |+> reads (1/sqrt(2), 1/sqrt(2)) in the computational basis but (1, 0) in the {|+>, |->} basis. The state never changes; the description does. Choosing a basis is choosing a measurement (Unit III) - a Z-measurement reads computational-basis coordinates, an X-measurement reads the diagonal basis.",
              "Worked example. Express |-> = (|0> - |1>)/sqrt(2) in the computational basis: coefficients (1/sqrt(2), -1/sqrt(2)); norm check 1/2 + 1/2 = 1. In the {|+>, |->} basis it is simply 1·|-> + 0·|+>. The inner products <+|-> = 0 and <-|-> = 1 verify that the new pair is also orthonormal - a legal basis. The coordinates changed; the state did not.",
              "Exam framing: write the basis vectors, verify the three orthonormality relations, expand a given state, and check normalization - the four moves of every basis question, and the algebra reused in every later unit. Do the relations explicitly - three inner products written out - because 'obviously orthonormal' earns nothing. Close by pointing forward: the same expansion turns amplitudes into measurement probabilities in Unit III, and the same basis-change idea reappears as the QFT in Unit IV.",
            ],
            keyTerms: [
              { term: "Basis", definition: "A minimal set of vectors spanning the space, with exactly one expansion per state." },
              { term: "Orthonormality", definition: "Unit norms plus pairwise zero inner products - the legal setting for measurement." },
              { term: "Completeness", definition: "|0><0| + |1><1| = I - the basis misses nothing." },
              { term: "Basis change", definition: "The same state with new coordinates; geometrically, a rotation of the description." },
              { term: "Computational basis", definition: "{|0>, |1>} - the default basis for states, gates and measurement." },
            ],
            callout: {
              type: "tip",
              title: "Coordinates follow the basis",
              body: "|+> is (1/sqrt(2), 1/sqrt(2)) in the computational basis and (1, 0) in the diagonal basis. Both are correct; the mistake is mixing coordinates from different bases in one calculation. State the basis before writing any vector - it is the first thing an examiner checks.",
            },
            bullets: [
              "Basis: minimal spanning set; the computational basis is |0> = (1, 0)^T, |1> = (0, 1)^T.",
              "Orthonormality: <0|0> = <1|1> = 1 and <0|1> = 0 - unit length, mutual perpendicularity.",
              "Completeness: |0><0| + |1><1| = I; every state is alpha|0> + beta|1>.",
              "|+> and |-> form the diagonal basis: <+|-> = 0 - also orthonormal.",
              "Coordinates depend on the basis: |+> reads (1/sqrt(2), 1/sqrt(2)) or (1, 0).",
              "Choosing a basis is choosing a measurement - Z reads one, X reads the other.",
            ],
            diagram: {
              kind: "flow",
              title: "Reading a state in a chosen basis",
              caption: "Coordinates are inner products; the norm check closes the loop.",
              steps: [
                { label: "Choose the basis", note: "computational {|0>, |1>} or diagonal {|+>, |->}" },
                { label: "Inner products", note: "a_i = <i|psi> for each basis ket" },
                { label: "Assemble", note: "|psi> = sum a_i |i>" },
                { label: "Norm check", note: "sum |a_i|^2 = 1 - validity" },
                { label: "Interpret", note: "|a_i|^2 are the probabilities in that basis" },
              ],
            },
            table: {
              caption: "Basis vector · column · key inner products.",
              headers: ["Basis vector", "Column", "Key inner products"],
              rows: [
                ["|0>", "(1, 0)^T", "<0|0> = 1, <0|1> = 0"],
                ["|1>", "(0, 1)^T", "<1|1> = 1, <1|0> = 0"],
                ["|+>", "(1/sqrt(2), 1/sqrt(2))^T", "<+|-> = 0, <+|+> = 1"],
                ["|->", "(1/sqrt(2), -1/sqrt(2))^T", "<-|+> = 0, <-|-> = 1"],
              ],
            },
            examQuestions: [
              {
                q: "Define basis vectors and orthogonality for a qubit. Verify that {|0>, |1>} and {|+>, |->} are both orthonormal bases, express |-> in each, and explain what the norm condition guarantees for measurement.",
                marks: 14,
                outline: [
                  "Basis: minimal spanning set; every state is a unique linear combination",
                  "Computational basis: <0|0> = <1|1> = 1 and <0|1> = <1|0> = 0",
                  "Diagonal basis: |+> = (|0> + |1>)/sqrt(2), |-> = (|0> - |1>)/sqrt(2)",
                  "<+|+> = <-|-> = 1 and <+|-> = (1/2)(1 - 1) = 0 - also orthonormal",
                  "|-> in the computational basis: (1/sqrt(2), -1/sqrt(2)); in the diagonal basis: (0, 1)",
                  "Norm check: 1/2 + 1/2 = 1 for the computational-basis expression",
                  "Guarantee: probabilities |a_i|^2 in an orthonormal basis sum to exactly 1",
                ],
              },
              {
                q: "Why must a measurement basis be orthonormal? What breaks if two basis states have overlap <a|b> ≠ 0?",
                marks: 7,
                outline: [
                  "The Born rule assigns P(i) = |a_i|^2 with a_i = <i|psi>",
                  "For a non-orthogonal basis the cross terms survive, so |a_1|^2 + |a_2|^2 ≠ 1",
                  "Probabilities would not sum to 1 - outcomes get double-counted",
                  "Non-orthogonal states are not perfectly distinguishable, so outcomes are ambiguous",
                  "Orthonormality makes measurement outcomes exclusive and exhaustive",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Inner products and Hilbert spaces",
            body: [
              "The inner product <a|b> = sum (a_i)* b_i assigns a complex number to a pair of vectors: conjugate the first, multiply component-wise, sum. It generalizes the dot product to complex space and defines the geometry: the norm |a| = sqrt(<a|a>), the angle between states, and orthogonality (<a|b> = 0). A finite-dimensional Hilbert space is a complex vector space with an inner product - the arena every quantum state lives in.",
              "Qubits live in the Hilbert space C^2; n qubits live in the tensor-product space (C^2)^{⊗n}, which is C^(2^n). The physical reading of the inner product is the Born rule before the Born rule: |<psi|phi>|^2 is the probability of finding outcome psi when a system prepared in phi is measured in the psi basis. Orthogonal states are perfectly distinguishable - which is exactly why measurement bases are orthonormal sets.",
              "Worked example. |psi> = (1/2)|0> + (sqrt(3)/2)|1> and |+> = (1/sqrt(2))(|0> + |1>). The overlap: <+|psi> = (1/sqrt(2))(1/2) + (1/sqrt(2))(sqrt(3)/2) = (1 + sqrt(3))/(2 sqrt(2)) ≈ 0.966. Squared, ≈ 0.933 - measuring |psi> in the X basis yields + with 93.3% probability. Cauchy-Schwarz sanity check: |<+|psi>| ≤ 1 holds (0.966 < 1), as it must for any two normalized vectors.",
              "Exam framing: define the inner product with its three properties (conjugate symmetry, linearity, positive definiteness), connect |<psi|phi>|^2 to measurement, and compute one overlap numerically - definition, property, number is the full structure of the answer. Keep the number concrete: the (1/2, sqrt(3)/2) versus |+> overlap is 0.966, squared 0.933, and the sentence 'measuring in the X basis yields + with 93.3%' is the physical punchline examiners look for at the end.",
            ],
            keyTerms: [
              { term: "Inner product", definition: "<a|b> = sum (a_i)* b_i - conjugate the first argument, multiply, sum." },
              { term: "Hilbert space", definition: "A complex vector space with an inner product; the qubit's is C^2." },
              { term: "Norm", definition: "|a| = sqrt(<a|a>) - must equal 1 for states." },
              { term: "Overlap probability", definition: "|<psi|phi>|^2 - the chance of the psi-outcome when measuring phi in that basis." },
              { term: "Cauchy-Schwarz", definition: "|<a|b>| ≤ |a| |b| - overlaps of normalized states never exceed 1." },
            ],
            callout: {
              type: "tip",
              title: "vdot conjugates the first argument",
              body: "numpy's vdot conjugates argument one, matching <a|b> = sum (a_i)* b_i exactly. In hand calculations the conjugation lives on the bra; for complex states <psi|+> and <+|psi> differ - the modulus is the same, the phase is not. Quote the conjugate-symmetry rule <phi|psi> = <psi|phi>* to earn the property mark.",
            },
            bullets: [
              "Inner product: <a|b> = sum (a_i)* b_i - conjugation belongs to the bra side.",
              "Norm |a| = sqrt(<a|a>); normalized states have |a| = 1.",
              "Hilbert space: complex inner-product space; n qubits live in C^(2^n).",
              "|<psi|phi>|^2 = probability of the psi-outcome when measuring phi in the psi basis.",
              "Orthogonal states (<psi|phi> = 0) are perfectly distinguishable.",
              "Worked overlap: <+|psi> ≈ 0.966, squared ≈ 0.933 - inside the Cauchy-Schwarz bound.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Hilbert spaces grow by tensoring",
              caption: "Each added qubit raises the dimension by a factor of two.",
              tiers: [
                { label: "1 qubit: C^2", note: "2 amplitudes - the base space" },
                { label: "2 qubits: C^4", note: "(C^2) ⊗ (C^2) - 4 amplitudes" },
                { label: "n qubits: C^(2^n)", note: "(C^2)⊗n - the exponential arena" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "inner.py - overlaps with conjugation handled by vdot",
              code: `import numpy as np

psi = np.array([0.5, np.sqrt(3) / 2])
plus = np.array([1, 1]) / np.sqrt(2)

overlap = np.vdot(plus, psi)      # conjugates the FIRST argument
print(overlap)                     # 0.9659... (real here)
print(abs(overlap) ** 2)           # 0.9330 - P(+ in X basis)
print(np.vdot(psi, psi).real)      # 1.0 - normalized`,
            },
            examQuestions: [
              {
                q: "Define the inner product and a Hilbert space, state the three defining properties of the inner product, and compute <psi|psi> and <+|psi> for |psi> = (1/2)|0> + (sqrt(3)/2)|1>. Interpret |<+|psi>|^2 physically.",
                marks: 14,
                outline: [
                  "Inner product: <a|b> = sum (a_i)* b_i",
                  "Properties: conjugate symmetry <a|b> = <b|a>*; linearity in the second argument; positive definiteness <a|a> >= 0",
                  "Hilbert space: a complete complex inner-product space; the qubit's is C^2",
                  "<psi|psi> = 1/4 + 3/4 = 1 - normalized",
                  "<+|psi> = (1/sqrt(2))(1/2) + (1/sqrt(2))(sqrt(3)/2) ≈ 0.966",
                  "|<+|psi>|^2 ≈ 0.933",
                  "Interpretation: measuring |psi> in the X basis yields + with 93.3% probability",
                ],
              },
              {
                q: "State the Cauchy-Schwarz inequality and its quantum meaning. What does |<psi|phi>| = 1 tell you about two normalized states?",
                marks: 7,
                outline: [
                  "|<a|b>| ≤ |a| |b|; for normalized states the overlap is at most 1",
                  "Quantum meaning: outcome probabilities never exceed 1",
                  "|<psi|phi>| = 1 means the states are identical up to a global phase",
                  "= 0 means orthogonal - perfectly distinguishable",
                  "Between 0 and 1: partially overlapping states - probabilistic distinguishability",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Matrices and tensor (Kronecker) products",
            body: [
              "Operators are matrices acting on state vectors: an n-qubit gate is a 2^n × 2^n complex matrix. Composite-system operators come from the tensor (Kronecker) product: if A acts on qubit 1 and B on qubit 2, the joint operator is A ⊗ B, the block matrix [[a11·B, a12·B], [a21·B, a22·B]] - a 4×4 matrix for two qubits. Kronecker order encodes which qubit is which: X ⊗ I flips the first qubit, I ⊗ X the second.",
              "Worked example. X ⊗ I = [[0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0]]. Applied to |01> = (0, 0, 1, 0)^T the result is (1, 0, 0, 0)^T = |10> - the first qubit flipped, the second untouched, exactly as the operator's name promises. Multi-qubit gates that mix qubits, such as CNOT, are not Kronecker products - they are the genuinely two-qubit operators that create entanglement (Unit III).",
              "Two more matrix constructions appear constantly. The outer product |u><v| turns a pair of vectors into a matrix - the raw material of projectors (section 2.5) and of the ket-bra form of gates (section 2.7). And operator powers: U^2 means apply U twice - the basis of the controlled-U^(2^j) operations in phase estimation (Unit IV). Dimension discipline prevents most errors: 2×2 for one qubit, 4×4 for two, and never mix them in one product.",
              "Exam framing: compute a Kronecker product by hand, apply it to a basis vector, and state which factor acts on which qubit. Quoting the dimension rule (2^n × 2^n) at the start signals competence immediately. Then name the exception that matters: CNOT-style gates are not Kronecker products, and that non-separability is exactly the entangling power Unit III exploits. One worked product, one dimension check, one exception - that combination is the complete answer.",
            ],
            keyTerms: [
              { term: "Kronecker product", definition: "A ⊗ B - the block matrix combining per-qubit operators into a composite operator." },
              { term: "Composite operator", definition: "An n-qubit gate: a 2^n × 2^n matrix acting on the joint state vector." },
              { term: "Outer product", definition: "|u><v| - a matrix built from two vectors; the building block of projectors." },
              { term: "Operator power", definition: "U^2 = U·U - applying the gate twice; used as U^(2^j) in phase estimation." },
              { term: "CNOT", definition: "A two-qubit gate that is NOT a Kronecker product - it mixes qubits and creates entanglement." },
            ],
            callout: {
              type: "warning",
              title: "Factor order is qubit identity",
              body: "X ⊗ I flips qubit 1; I ⊗ X flips qubit 2. They are different matrices and give different outputs from the same input (|01> -> |10> versus |11>). Writing factors in the wrong order is the most common error when translating a circuit diagram into matrices.",
            },
            bullets: [
              "Operators are matrices; n qubits need 2^n × 2^n matrices.",
              "Kronecker product: A ⊗ B = [[a11 B, a12 B], [a21 B, a22 B]] - block construction.",
              "Worked: (X ⊗ I)|01> = |10> - first qubit flipped, second untouched.",
              "X ⊗ I ≠ I ⊗ X - factor order encodes which qubit each matrix acts on.",
              "Outer product |u><v| builds matrices from vectors (projectors, ket-bra gate forms).",
              "Gates that mix qubits (CNOT) are not Kronecker products - that is how entanglement is made.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Building a two-qubit operator",
              caption: "Pick the per-qubit actions, Kronecker them, apply - order encodes qubit identity.",
              stages: [
                { label: "Choose actions", note: "A on qubit 1, B on qubit 2" },
                { label: "Kronecker product", note: "A ⊗ B as a block matrix" },
                { label: "Check size", note: "2×2 blocks -> 4×4 matrix" },
                { label: "Apply to state", note: "4-amplitude column vector" },
                { label: "Read result", note: "which amplitudes moved" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "kron.py - X on qubit 1, identity on qubit 2",
              code: `import numpy as np

X = np.array([[0, 1], [1, 0]])
I2 = np.eye(2)
op = np.kron(X, I2)                    # 4x4 operator
ket01 = np.array([0, 0, 1, 0])
print(op @ ket01)                      # [1 0 0 0] -> |10>
print(np.kron(I2, X) @ ket01)          # [0 0 0 1] -> |11>: second qubit flips`,
            },
            examQuestions: [
              {
                q: "Explain the tensor (Kronecker) product for quantum operators. Construct X ⊗ I and I ⊗ X explicitly, apply both to |01> = (0, 0, 1, 0)^T, and explain why CNOT cannot be written as a Kronecker product of 2×2 matrices.",
                marks: 14,
                outline: [
                  "Kronecker definition: A ⊗ B = [[a11 B, a12 B], [a21 B, a22 B]]",
                  "X ⊗ I = [[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0]]",
                  "I ⊗ X = [[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]]",
                  "(X ⊗ I)|01> = |10>; (I ⊗ X)|01> = |11> - different qubits targeted",
                  "Factor order = qubit identity; mixing the order changes the circuit",
                  "CNOT maps |10> -> |11> and |11> -> |10> - it cannot be block-separated",
                  "Non-separable two-qubit action is exactly what creates entanglement",
                ],
              },
              {
                q: "Compute (H ⊗ H)|00> and verify the result is normalized. Which single-qubit state does each qubit end in?",
                marks: 7,
                outline: [
                  "H ⊗ H |00> = (1/2)(|00> + |01> + |10> + |11>)",
                  "Amplitudes (1/2, 1/2, 1/2, 1/2)",
                  "Norm: 4 × 1/4 = 1 - a valid state",
                  "It factorizes as |+> ⊗ |+> - a product state",
                  "Each qubit is in |+>, the +1 eigenstate of X",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Unitary operators",
            body: [
              "A unitary operator U satisfies U^dagger U = U U^dagger = I - its inverse is its conjugate transpose. Unitarity is the law of quantum motion: it preserves inner products (<U psi | U phi> = <psi|phi>) and hence norms, so total probability never leaks. It also makes evolution reversible - running U backwards (apply U^dagger) recovers the input exactly, which is why quantum circuits have no irreversible fan-in or erase steps.",
              "Two structural consequences: every eigenvalue of a unitary has modulus 1 - they are pure phases e^(i theta), the very thing phase estimation reads (Unit IV); and the composition of unitaries is unitary, so an entire circuit is one unitary matrix. Every gate in Unit III - X, Y, Z, H, S, T, CNOT - passes the test. Non-unitary maps are exactly what quantum mechanics forbids as evolution: scaling a state (norm changes), clipping values, or classical erasure.",
              "Worked verifications. X: X^dagger = X (real symmetric) and X^2 = I - unitary. H: H^dagger = H and H^2 = I - unitary. S = diag(1, i): S^dagger = diag(1, -i), so S^dagger S = diag(1, 1) = I; det S = i has modulus 1. Counter-example: M = diag(1, 2) scales the |1> component by 2 - M^dagger M = diag(1, 4) ≠ I; it would inflate probability and cannot be a gate.",
              "Exam framing: 'show that the given matrix is unitary' is a standard 7-marker - compute U^dagger U, compare with I, and conclude. Adding the eigenvalue remark (all phases, modulus 1) converts a mechanical answer into a structural one. Include one deliberate counter-example - diag(1, 2) inflates the norm - to show unitarity is a constraint, not a formality, and one forward link: the phase eigenvalues are exactly what phase estimation reads in Unit IV.",
            ],
            keyTerms: [
              { term: "Unitary", definition: "U^dagger U = U U^dagger = I - norm-preserving, reversible evolution; the only legal gate form." },
              { term: "Conjugate transpose", definition: "The dagger: transpose plus element-wise conjugation; for real matrices, the plain transpose." },
              { term: "Reversibility", definition: "U^dagger undoes U - quantum evolution forgets nothing." },
              { term: "Phase eigenvalue", definition: "Unitary eigenvalues have |lambda| = 1; they are phases e^(i theta)." },
              { term: "Circuit as one unitary", definition: "A sequence of gates multiplies into a single unitary matrix." },
            ],
            callout: {
              type: "exam",
              title: "Prove, do not assert",
              body: "The exam answer is the multiplication U^dagger U = I written out - 'it is a rotation, therefore unitary' earns nothing. For H, show H^2 = I in two lines; for S, multiply diag(1, -i)·diag(1, i). Mechanics first, structure sentence second.",
            },
            bullets: [
              "Unitary: U^dagger U = U U^dagger = I - inverse equals conjugate transpose.",
              "Preserves inner products and norms: total probability is conserved.",
              "Reversible: apply U^dagger to undo - no erasure in quantum evolution.",
              "Eigenvalues are phases e^(i theta) (modulus 1) - the hook for phase estimation.",
              "Verifications: X^2 = I; H^2 = I; S^dagger S = I; counter-example diag(1, 2) fails.",
              "A whole circuit is one unitary - the product of its gates.",
            ],
            diagram: {
              kind: "compare",
              title: "Unitary evolution vs measurement",
              caption: "The two things a quantum system can do - only one of them is a matrix you can invert.",
              left: {
                heading: "Unitary gates",
                items: [
                  "Matrix multiplication - deterministic",
                  "Norm and inner products preserved",
                  "Reversible: inverse is U^dagger",
                  "Eigenvalues are pure phases e^(i theta)",
                ],
              },
              right: {
                heading: "Measurement",
                items: [
                  "Probabilistic - outcome sampled by the Born rule",
                  "Collapses the state to an eigenstate",
                  "Not reversible - the pre-measurement state is gone",
                  "Not a unitary matrix at all",
                ],
              },
            },
            table: {
              caption: "Gate · matrix · U^dagger U check · eigenvalues.",
              headers: ["Gate", "Matrix", "Unitarity check", "Eigenvalues"],
              rows: [
                ["X", "[[0, 1], [1, 0]]", "X^2 = I (self-inverse)", "+1, -1"],
                ["H", "(1/sqrt(2))[[1, 1], [1, -1]]", "H^2 = I", "+1, -1"],
                ["S", "diag(1, i)", "diag(1, -i)·diag(1, i) = I", "+1, i"],
                ["Z", "diag(1, -1)", "Z^2 = I", "+1, -1"],
              ],
            },
            examQuestions: [
              {
                q: "Define a unitary operator and state its consequences for probability, reversibility and eigenvalues. Verify that X, H and S are unitary by explicit computation, and explain why diag(1, 2) cannot be a quantum gate.",
                marks: 14,
                outline: [
                  "Definition: U^dagger U = U U^dagger = I",
                  "Probability: <U psi | U psi> = <psi|psi> - the norm is conserved",
                  "Reversibility: U^dagger undoes U exactly",
                  "Eigenvalues: |lambda| = 1 - pure phases (feeds phase estimation in Unit IV)",
                  "X: real symmetric and X^2 = I",
                  "H: H^2 = I by direct multiplication of (1/sqrt(2))[[1,1],[1,-1]]",
                  "S: S^dagger S = diag(1,-i)·diag(1,i) = I; diag(1,2) gives diag(1,4) ≠ I - inflates norm, forbidden",
                ],
              },
              {
                q: "Why is every quantum circuit reversible while classical circuits need not be? Name one classical gate that has no direct quantum analogue and say why.",
                marks: 7,
                outline: [
                  "Every gate is unitary; U^dagger inverts the whole chain",
                  "A product of unitaries is unitary - the circuit has an inverse",
                  "Classical AND erases one bit - two input patterns map to one output",
                  "Erasure is non-unitary: information is lost and cannot be inverted",
                  "The quantum substitute: Toffoli computes AND reversibly using an ancilla target",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Projectors and the Born rule",
            body: [
              "A projector is the operator P = |psi><psi| - the outer product of a normalized state with itself. It is idempotent (P^2 = P) and Hermitian (P^dagger = P). For measurement in the computational basis the two projectors are P0 = |0><0| = [[1, 0], [0, 0]] and P1 = |1><1| = [[0, 0], [0, 1]]; they are disjoint (P0·P1 = 0) and complete (P0 + P1 = I) - a resolution of the identity, the algebraic statement that every outcome lands somewhere.",
              "The Born rule becomes algebra: the probability of outcome i is p_i = <psi|P_i|psi>, and the post-measurement state is P_i|psi>/sqrt(p_i) - projection followed by renormalization. These two lines are the entire measurement calculus of this course, reused unchanged for Bell measurements, phase-estimation readout and the oracle algorithms of Unit V. Notice what the algebra buys: probability and collapse become computations on matrices rather than two separate stories to memorize.",
              "Worked example. |psi> = (1/2)|0> + (sqrt(3)/2)|1>. p0 = <psi|P0|psi> = (1/2)^2 = 1/4 and p1 = 3/4. The post-measurement state after outcome 0: P0|psi>/sqrt(1/4) = (1/2 |0>)/(1/2) = |0> - collapse lands exactly on the eigenvector, as section 2.6 promises. After outcome 1 the state is |1>. Either way the probabilities sum to 1, and re-measuring returns the same answer deterministically.",
              "Exam framing: write P = |psi><psi|, verify P^2 = P, compute one probability with <psi|P|psi>, and give the collapsed state with the sqrt(p) renormalization. The renormalization step is the line most often dropped - do not drop it. Also verify completeness (P0 + P1 = I) and disjointness (P0·P1 = 0) in one line each - two relations, two meanings: outcomes are exclusive and exhaustive. That closes the loop between the projector algebra and the measurement story.",
            ],
            keyTerms: [
              { term: "Projector", definition: "P = |psi><psi|; idempotent (P^2 = P) and Hermitian." },
              { term: "Resolution of the identity", definition: "Complete, disjoint projectors summing to I - one per measurement outcome." },
              { term: "Born rule", definition: "p_i = <psi|P_i|psi> - probability as an expectation value." },
              { term: "Collapse", definition: "The post-measurement state P_i|psi>/sqrt(p_i) - projection plus renormalization." },
              { term: "Idempotent", definition: "P^2 = P - projecting twice changes nothing." },
            ],
            callout: {
              type: "warning",
              title: "Divide by sqrt(p)",
              body: "The collapsed state is P_i|psi>/sqrt(p_i). Omitting the division leaves an unnormalized vector of length sqrt(p_i), and every later probability computed from it is wrong. In the worked example, P0|psi> = (1/2)|0> must become |0>.",
            },
            bullets: [
              "Projector P = |psi><psi|: an outer product; P^2 = P and P^dagger = P.",
              "P0 = [[1, 0], [0, 0]], P1 = [[0, 0], [0, 1]]; P0 + P1 = I and P0·P1 = 0.",
              "Born rule as algebra: p_i = <psi|P_i|psi>.",
              "Collapse: the post-measurement state is P_i|psi>/sqrt(p_i) - never skip the renormalization.",
              "Worked: p0 = 1/4 with collapsed state |0>; p1 = 3/4 with collapsed state |1>.",
              "Re-measurement is deterministic - collapse has already selected the eigenstate.",
            ],
            diagram: {
              kind: "flow",
              title: "One projective measurement",
              caption: "Project, read the probability, renormalize - then repeat the experiment for statistics.",
              steps: [
                { label: "State |psi>", note: "normalized input" },
                { label: "Projector P_i = |i><i|", note: "one per outcome" },
                { label: "Probability", note: "p_i = <psi|P_i|psi>" },
                { label: "Collapse", note: "P_i|psi> / sqrt(p_i)" },
                { label: "Repeat shots", note: "frequencies converge to the p_i" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "born.py - probability and collapse with projectors",
              code: `import numpy as np

P0 = np.array([[1, 0], [0, 0]])
psi = np.array([0.5, np.sqrt(3) / 2])

p0 = (psi.conj() @ P0 @ psi).real     # Born rule
collapsed = P0 @ psi / np.sqrt(p0)    # renormalized collapse
print(p0, collapsed)                  # 0.25 [1. 0.] -> |0>`,
            },
            examQuestions: [
              {
                q: "Define a projector and its properties. For |psi> = (1/2)|0> + (sqrt(3)/2)|1>, compute p0 and p1 using <psi|P|psi>, give the post-measurement states for both outcomes, and verify that the projector algebra reproduces the Born rule probabilities.",
                marks: 14,
                outline: [
                  "Projector P = |psi><psi| with P^2 = P and P^dagger = P",
                  "P0 = [[1,0],[0,0]], P1 = [[0,0],[0,1]]; P0 + P1 = I and P0·P1 = 0",
                  "p0 = <psi|P0|psi> = |1/2|^2 = 1/4",
                  "p1 = |sqrt(3)/2|^2 = 3/4; the sum is 1 - completeness at work",
                  "Collapse after outcome 0: P0|psi>/sqrt(p0) = |0>",
                  "Collapse after outcome 1: P1|psi>/sqrt(p1) = |1>",
                  "Re-measurement repeats the outcome - collapse is irreversible",
                ],
              },
              {
                q: "Show algebraically that P0·P1 = 0 and P0 + P1 = I for the computational basis, and explain what each relation means for measurement outcomes.",
                marks: 7,
                outline: [
                  "P0 = |0><0| and P1 = |1><1| with <0|1> = 0",
                  "P0·P1 = |0><0|1><1| = |0>·0·<1| = 0 - outcomes are mutually exclusive",
                  "P0 + P1 = |0><0| + |1><1| = I - completeness: some outcome always occurs",
                  "Disjointness: observing one outcome excludes the other",
                  "Completeness: the outcome probabilities sum to 1",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Eigenvalues and eigenvectors",
            body: [
              "An eigenvector of an operator A is a non-zero vector v with A v = lambda v - the operator only scales it, by the eigenvalue lambda. For unitary gates every eigenvalue has modulus 1 (pure phases); for Hermitian observables every eigenvalue is real (they are the measured values). Quantum operators are typically both - the Paulis are unitary and Hermitian at once - which is why the same object can act as a gate and as a measurement.",
              "Worked example - the Pauli Z. Z = diag(1, -1). The characteristic equation det(Z - lambda I) = (1 - lambda)(-1 - lambda) = 0 gives lambda = +1 and lambda = -1. Eigenvectors: Z|0> = +1|0> and Z|1> = -1|1> - the computational basis, whose eigenvalues are exactly the measurement readouts. The Pauli X has eigenvectors |+> (+1) and |-> (-1) - a different basis with the same spectrum; Y's eigenvectors are (|0> ± i|1>)/sqrt(2). Three bases, the same spectrum ±1: measuring 'the Pauli' means measuring in its eigenbasis.",
              "Why it matters downstream: a Z-basis measurement is projection onto Z's eigenvectors with the eigenvalue as the readout (section 2.5). Phase kick-back (section 4.4) works because a controlled-U acting on an eigenstate writes the eigenvalue phase e^(i theta) onto the control. And phase estimation (section 4.5) is a machine for reading eigenvalue phases to t bits. Eigenstructure is the interface between gates and measurements.",
              "Exam framing: find eigenvalues via det(A - lambda I) = 0, then eigenvectors by substitution; identify the eigenbasis as a measurement basis; state the unitary-phase and Hermitian-real rules. That sequence is the complete eigenvalue question. Run the characteristic equation for one gate on paper - the quadratic for Z takes two lines - and substitute both eigenvalues back to recover the eigenvectors. Ending with 'the eigenbasis is the measurement basis' earns the conceptual mark behind the computation.",
            ],
            keyTerms: [
              { term: "Eigenvalue / eigenvector", definition: "A v = lambda v: the operator scales v by lambda without rotating it." },
              { term: "Hermitian", definition: "A^dagger = A; eigenvalues are real - the algebraic form of an observable." },
              { term: "Unitary spectrum", definition: "All eigenvalues on the unit circle - phases e^(i theta)." },
              { term: "Eigenbasis", definition: "The orthonormal set of eigenvectors - the measurement basis of that observable." },
              { term: "Characteristic equation", definition: "det(A - lambda I) = 0 - how eigenvalues are found in exams." },
            ],
            callout: {
              type: "tip",
              title: "Z is both gate and observable",
              body: "Z is unitary (Z^2 = I) and Hermitian (real diagonal) at once. As a gate it flips phase; as an observable its eigenvalues ±1 are the bits a Z-measurement returns. The one-line claim 'Paulis are both' earns the conceptual mark behind three different questions.",
            },
            bullets: [
              "Eigen equation: A v = lambda v; eigenvalues come from det(A - lambda I) = 0.",
              "Unitary gates: |lambda| = 1 (phases); Hermitian observables: real eigenvalues.",
              "Z: eigenvectors |0> and |1> with eigenvalues +1 and -1 - the Z-basis readouts.",
              "X: eigenvectors |+> and |-> (+1, -1); Y: (|0> ± i|1>)/sqrt(2).",
              "Paulis are unitary AND Hermitian - gates and observables in one matrix.",
              "Downstream: kick-back writes eigenvalue phases; QPE reads them (Unit IV).",
            ],
            diagram: {
              kind: "fork",
              title: "Eigenvectors of the three Paulis",
              caption: "Same spectrum (+1, -1), three different eigenbases - each is a measurement basis.",
              start: "Whose eigenvectors do you need?",
              branches: [
                { label: "Z = diag(1, -1)", outcome: "|0> (+1) and |1> (-1) - the computational basis", good: true },
                { label: "X = the bit flip", outcome: "|+> (+1) and |-> (-1) - the diagonal basis", good: true },
                { label: "Y = [[0, -i], [i, 0]]", outcome: "(|0> ± i|1>)/sqrt(2) with eigenvalues +1, -1", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "eigen.py - numpy confirms the Pauli spectra",
              code: `import numpy as np

Z = np.diag([1, -1])
X = np.array([[0, 1], [1, 0]])
for name, M in [("Z", Z), ("X", X)]:
    vals, vecs = np.linalg.eig(M)
    print(name, np.round(vals, 2))
print(np.round(vecs, 2))   # last print: X eigenvectors ~ |+>, |->`,
            },
            examQuestions: [
              {
                q: "Define eigenvalues and eigenvectors. Find the eigenvalues and eigenvectors of Z and X via the characteristic equation, and explain how the eigenvectors define measurement bases and how the eigenvalue phases are exploited by phase kick-back and phase estimation.",
                marks: 14,
                outline: [
                  "Definition: A v = lambda v; solve det(A - lambda I) = 0",
                  "Z: (1 - lambda)(-1 - lambda) = 0 gives lambda = +1, -1",
                  "Z eigenvectors: |0> (+1) and |1> (-1)",
                  "X: lambda = ±1 with eigenvectors |+> and |->",
                  "Eigenbasis = measurement basis: a Z-measurement projects onto |0>, |1> with readouts ±1",
                  "Kick-back: controlled-U on eigenstate |u> writes e^(i theta) onto the control (section 4.4)",
                  "QPE reads eigenphases to t bits - the quantum core of Shor (Unit V)",
                ],
              },
              {
                q: "Why are the eigenvalues of a unitary operator always of modulus 1, and what does that imply for the eigenvalues of a gate like S?",
                marks: 7,
                outline: [
                  "A unitary U preserves norm: |U v| = |v|",
                  "If A v = lambda v then |lambda| |v| = |v|, so |lambda| = 1",
                  "Eigenvalues are pure phases e^(i theta)",
                  "S = diag(1, i): eigenvalues +1 and i - a pi/2 phase",
                  "The phases are invisible to a Z-measurement but readable via kick-back and QPE",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Dirac notation at work",
            body: [
              "Dirac notation earns its keep by writing operators as sums of outer products. Completeness gives the grammar: any 2×2 operator is A = sum c_ij |i><j|. The Paulis become readable at a glance: X = |0><1| + |1><0| ('swap the amplitudes'), Z = |0><0| - |1><1| ('keep |0>, negate |1>'), and the identity I = |0><0| + |1><1| is completeness itself.",
              "Worked example - gate action without matrix multiplication. X|1> = (|0><1| + |1><0|)|1> = |0><1|1> + |1><0|1> = |0>·1 + |1>·0 = |0>. Each ket-bra eats its bra-side match (<1|1> = 1, <0|1> = 0) and deposits the ket. Similarly Z|+> = (|0><0| - |1><1|)(|0> + |1>)/sqrt(2) = (|0> - |1>)/sqrt(2) = |-> - the phase flip visible directly in the notation.",
              "Three algebra rules complete the toolkit. Adjoint: (AB)^dagger = B^dagger A^dagger, and <psi|U|phi> = <U^dagger psi | phi> - the bra 'sees' the adjoint. Conjugate symmetry: <phi|psi> = <psi|phi>*. And inserting the identity: <psi|U|phi> = sum_ij <psi|i><i|U|j><j|phi> - decomposing any matrix element into basis coefficients, the move that underlies change-of-basis calculations and the QFT's matrix elements. With these three rules, most notation questions reduce to one-line manipulations.",
              "Exam framing: convert a matrix to ket-bra form, derive one gate action from it, and state the adjoint rule. It reads as fluency - exactly what notation questions are designed to test. Pick X for the derivation because the matching is visible: <1|1> = 1 keeps the term, <0|1> = 0 kills it. Add the circuit meaning of the adjoint - invert a circuit by running it backwards with each gate daggered - and the answer covers both notation and consequence.",
            ],
            keyTerms: [
              { term: "Outer-product form", definition: "Writing an operator as sum c_ij |i><j| - Dirac notation's operator grammar." },
              { term: "Completeness relation", definition: "|0><0| + |1><1| = I - insertable between any two factors." },
              { term: "Adjoint rule", definition: "(AB)^dagger = B^dagger A^dagger - reverse the order and dagger each factor." },
              { term: "Ket-bra action", definition: "|i><j| moves amplitude from |j> to |i>, scaled by <j|psi>." },
              { term: "Change of basis", definition: "Decomposing matrix elements via sum_i |i><i| - the QFT's underlying move." },
            ],
            callout: {
              type: "exam",
              title: "Derive, do not quote",
              body: "'Using outer products, show X|1> = |0>' is a common 7-marker. The derivation is two lines of ket-bra matching; quoting the matrix product instead answers a different question. Practice writing both forms of X, Z and H until conversion is automatic.",
            },
            bullets: [
              "Every operator: A = sum c_ij |i><j|; the Paulis read at a glance in this form.",
              "X = |0><1| + |1><0|; Z = |0><0| - |1><1|; I = the completeness relation.",
              "Worked: X|1> = |0><1|1> + |1><0|1> = |0> - no matrix multiplication needed.",
              "Z|+> = |-> - the phase flip is visible directly in ket-bra form.",
              "Rules: (AB)^dagger = B^dagger A^dagger; <psi|U|phi> = <U^dagger psi | phi>; <phi|psi> = <psi|phi>*.",
              "Inserting completeness decomposes any matrix element - the basis-change workhorse.",
            ],
            diagram: {
              kind: "compare",
              title: "Two forms of the same operator",
              caption: "The ket-bra sum and the matrix are one object in two notations - pick per task.",
              left: {
                heading: "Ket-bra (outer product) form",
                items: [
                  "X = |0><1| + |1><0|",
                  "Action readable term by term",
                  "Basis-explicit - shows which amplitudes move",
                  "Ideal for one-line derivations",
                ],
              },
              right: {
                heading: "Matrix form",
                items: [
                  "X = [[0, 1], [1, 0]]",
                  "Compact and ready for multiplication",
                  "Needed for eigenvalues, circuits and code",
                  "Hides which basis it is written in",
                ],
              },
            },
            table: {
              caption: "Identity · statement · typical use.",
              headers: ["Identity", "Statement", "Typical use"],
              rows: [
                ["Completeness", "|0><0| + |1><1| = I", "expand states and operators"],
                ["Outer-product expansion", "A = sum c_ij |i><j|", "matrix <-> ket-bra conversion"],
                ["Adjoint of a product", "(AB)^dagger = B^dagger A^dagger", "reversing circuits"],
                ["Bra sees the adjoint", "<psi|U|phi> = <U^dagger psi | phi>", "expectation values"],
                ["Conjugate symmetry", "<phi|psi> = <psi|phi>*", "overlap bookkeeping"],
              ],
            },
            examQuestions: [
              {
                q: "Write X, Z and I in outer-product (ket-bra) form. Using the outer-product form only, derive X|1> = |0> and Z|+> = |->. State the adjoint rule (AB)^dagger = B^dagger A^dagger and explain its circuit meaning.",
                marks: 14,
                outline: [
                  "X = |0><1| + |1><0|; Z = |0><0| - |1><1|; I = |0><0| + |1><1|",
                  "X|1>: <1|1> = 1 keeps the |0><1| term and <0|1> = 0 kills the other -> |0>",
                  "Z|+>: the |0> and |1> terms split, |1> is negated -> (|0> - |1>)/sqrt(2) = |->",
                  "Adjoint rule: (AB)^dagger = B^dagger A^dagger",
                  "Proof sketch: <psi|AB|phi> = <A^dagger psi | B phi> = <B^dagger A^dagger psi | phi>",
                  "Hence the pairing - order reversal with daggers",
                  "Circuit meaning: to invert a gate sequence, run it backwards with each gate daggered",
                ],
              },
              {
                q: "Convert H = (1/sqrt(2))[[1, 1], [1, -1]] to ket-bra form and use it to compute H|0> without matrices.",
                marks: 7,
                outline: [
                  "H = (1/sqrt(2))(|0><0| + |0><1| + |1><0| - |1><1|)",
                  "H|0>: keep the terms whose bra is <0|",
                  "= (1/sqrt(2))(|0><0|0> + |1><0|0>) = (1/sqrt(2))(|0> + |1>)",
                  "= |+> - superposition created",
                  "Consistency: applying H again returns |0> (H^2 = I)",
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
      title: "Building Blocks for Quantum Programs",
      summary:
        "Unit III descends from platform architecture to the qubit register itself: how information is represented on the Bloch sphere and in multi-qubit state vectors, what makes a superposition valid, how Bell states and other useful states are built, how measurement works, and how the gate zoo - Pauli, Hadamard, phase shift, controlled, Ising, Deutsch, SWAP - is wired into circuits.",
      chapter: {
        number: "03",
        title: "Gates, Circuits and Bell States",
        intro:
          "Unit III covers the layered architecture of a quantum computing platform, qubit information representation with valid and invalid superpositions, multi-qubit states and entanglement, the Bell states, measurement, and the logic gates - Pauli, Hadamard, phase shift, controlled, Ising, Deutsch and SWAP - wired into circuits.",
        inOneBreath:
          "A platform is four stacked planes from classical host down to the quantum data plane; legal qubit states are normalized complex vectors, and the useful ones include the four Bell states; measurement reads amplitudes as probabilities and collapses the state; gates are unitary matrices - Pauli flips, Hadamard superposes, phase gates rotate, CNOT entangles, SWAP permutes - and a small universal set builds every circuit.",
        sections: [
          {
            number: "3.1",
            title: "Architecture of a quantum computing platform",
            body: [
              "A quantum computing platform is four stacked planes. The host processor is the classical computer running the user's program, the operating system and the network interface. The control processor plane converts the program into a scheduled sequence of quantum instructions - timing, error mitigation, feedback decisions. The control and measurement plane generates the analog signals that drive the qubits (microwave pulses for superconducting chips, laser pulses for ions) and digitizes the readout signals. The quantum data plane is the qubits themselves, their couplers and wiring - the only plane where quantum information actually lives.",
              "Worked numbers for a superconducting platform: the chip sits in a dilution refrigerator at 10-15 millikelvin - colder than deep space's 2.7 K background; qubits are driven by microwave pulses in the 4-7 GHz band; coherence times T1/T2 are of order 100 microseconds; each gate takes tens of nanoseconds; and gate error rates are around 10^-3. That error rate is why error correction dominates the field's roadmap - and why the control planes exist at all: every classical layer exists to squeeze a coherent computation through a noisy physical layer.",
              "The program's journey: Qiskit or PyQuil code -> transpiled gate list -> scheduled pulse sequence -> pulses hit the chip -> qubits evolve -> readout -> classical bits -> post-processing and statistics. The boundary between classical and quantum runs at the control plane; everything below it must preserve coherence, and everything above it is ordinary computing. Moving data across that boundary is the programming model of Unit IV.",
              "Exam framing: 'architecture of a quantum computing platform' is a diagram question - draw the four layers in order (host processor, control processor, control and measurement, quantum data plane), one function line each, then quote two or three hardware numbers to prove you know what the layers cost. The numbers are the differentiator - 10-15 millikelvin, about 100 microseconds of coherence, 10^-3 gate error - because they show the isolation is a physical necessity, not an engineering preference. A sketch plus those figures is the full 14-mark structure.",
            ],
            keyTerms: [
              { term: "Quantum data plane", definition: "The qubits, couplers and wiring - the only layer holding quantum information." },
              { term: "Control and measurement plane", definition: "Generates the pulses that drive qubits and digitizes their readout signals." },
              { term: "Control processor", definition: "Turns the compiled program into scheduled instructions; handles feedback and mitigation." },
              { term: "Host processor", definition: "The classical computer, operating system and interface the user programs." },
              { term: "Coherence time", definition: "How long qubits keep their state - the budget every circuit must fit inside." },
            ],
            callout: {
              type: "tip",
              title: "Stack order earns the marks",
              body: "Draw the stack top-to-bottom as host processor -> control processor -> control and measurement plane -> quantum data plane, with one function per layer. Examiners scan for that order and for one number (millikelvin temperature, microseconds of coherence, 10^-3 gate error) - the diagram plus numbers is the full answer.",
            },
            bullets: [
              "Four layers, top to bottom: host processor, control processor, control and measurement, quantum data plane.",
              "Only the bottom layer is quantum - everything above is classical computing.",
              "Superconducting chips run at 10-15 mK; qubit pulses are 4-7 GHz microwaves.",
              "Coherence ~100 microseconds; gates ~tens of nanoseconds; errors ~10^-3 per gate.",
              "A program flows: code -> transpiled gates -> scheduled pulses -> chip -> readout -> classical bits.",
              "The classical/quantum boundary sits at the control plane - Unit IV's programming model starts there.",
            ],
            diagram: {
              kind: "layers",
              title: "The four planes of a quantum platform",
              caption: "Instructions flow down; measurement bits flow back up. Only the bottom layer is quantum.",
              layers: [
                { label: "Host processor", note: "classical computer, OS, user program, network" },
                { label: "Control processor", note: "instruction scheduling, error mitigation, feedback" },
                { label: "Control and measurement plane", note: "pulse generation, digitized readout" },
                { label: "Quantum data plane", note: "qubits, couplers, wiring - 10-15 mK" },
              ],
            },
            table: {
              caption: "Layer · function · example technology.",
              headers: ["Layer", "Function", "Example technology"],
              rows: [
                ["Host processor", "run algorithms, manage jobs, visualize results", "classical server / workstation"],
                ["Control processor", "compile, schedule, error-mitigate, feed back", "FPGA / ASIC control electronics"],
                ["Control and measurement", "drive qubits, digitize readout", "microwave synthesizers, AWG, parametric amplifiers"],
                ["Quantum data plane", "store and transform quantum states", "superconducting transmon chip in a dilution refrigerator"],
              ],
            },
            examQuestions: [
              {
                q: "With a neat diagram, explain the architecture of a quantum computing platform. Describe the function of each layer and state where the classical/quantum boundary lies, quoting typical hardware numbers for a superconducting platform.",
                marks: 14,
                outline: [
                  "Four layers: host processor, control processor, control and measurement, quantum data plane",
                  "Host processor: classical computer, OS, user program, networking",
                  "Control processor: scheduling, error mitigation, feedback decisions",
                  "Control and measurement plane: pulse generation and digitized readout",
                  "Quantum data plane: qubits and couplers - the only quantum layer",
                  "Boundary: at the control plane - above it classical, below it coherent",
                  "Numbers: 10-15 mK, 4-7 GHz pulses, ~100 microseconds coherence, ~10^-3 gate error",
                ],
              },
              {
                q: "Why must the quantum data plane be isolated from the higher layers, and what physical measures does isolation require?",
                marks: 7,
                outline: [
                  "Quantum states decohere on contact with the environment",
                  "Thermal noise destroys superpositions - hence 10-15 mK dilution refrigeration",
                  "Electromagnetic interference flips qubits - hence shielding and filtering",
                  "Control signals must be precisely timed microwave pulses, not logic voltages",
                  "Every interaction with higher layers is a one-way, destructive readout",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Qubit information representation: valid and invalid superposition",
            body: [
              "Information is encoded in a qubit's complex amplitudes. A valid n-qubit state is any normalized complex vector: sum of |c_i|^2 over all 2^n amplitudes equals exactly 1. An invalid superposition fails that check: (1/2)|0> + (1/2)|1> has |c_0|^2 + |c_1|^2 = 1/2, so it describes no physical state - probabilities would not sum to 1. Every quantum algorithm starts from valid states and preserves validity: unitary gates conserve the norm, so a valid input stays valid (section 2.4).",
              "Repairing an invalid vector is legal and mechanical: divide by its length. (1/2, 1/2) has length sqrt(1/2), so renormalizing gives (1/sqrt(2), 1/sqrt(2)) - the valid state |+>. One equivalence class is legal too: multiplying the whole vector by a global phase e^(i gamma) changes nothing physical (section 1.5). What is never free is the relative phase - |+> and |-> are different states, distinguishable in the X basis even though both look 50/50 in the Z basis.",
              "Worked example - deciding validity. Candidate A: (2, 0) - sum of squares 4, invalid; renormalized it is |0>. Candidate B: (i/sqrt(2), 1/sqrt(2)) - sum of squares 1/2 + 1/2 = 1, valid; its relative phase pi/2 makes it |+i>, not |+>. Candidate C: (1/2, 1/2) - sum 1/2, invalid; renormalizes to |+>. The check is one line per candidate, and it should appear in every written answer.",
              "Exam framing: given a vector, decide valid or invalid, repair it by normalization, and explain why global phase is free but relative phase is physical. Three short moves, all mechanical, that appear on nearly every paper. Run the check on all three candidate vectors from the table and repair the two invalid ones - showing the division, not just the verdict. The global-versus-relative sentence should cite the X-basis measurement, since that is where relative phase actually becomes visible.",
            ],
            keyTerms: [
              { term: "Valid superposition", definition: "A normalized vector: the squared amplitude moduli sum to exactly 1." },
              { term: "Invalid superposition", definition: "Any vector whose squared moduli sum to something other than 1 - not a physical state." },
              { term: "Renormalization", definition: "Dividing an invalid vector by its length to make it a legal state." },
              { term: "Global phase", definition: "A common factor e^(i gamma) on all amplitudes - physically invisible." },
              { term: "Relative phase", definition: "A phase difference between components - physical, measurable in another basis." },
            ],
            callout: {
              type: "warning",
              title: "(1/2)|0> + (1/2)|1> is not |+>",
              body: "Its squared amplitudes sum to 1/2, not 1 - no measurement of it is even defined. Normalize first: dividing by sqrt(1/2) gives (1/sqrt(2), 1/sqrt(2)) = |+>. Writing an unnormalized vector as if it were a state is the single most common qubit-representation slip.",
            },
            bullets: [
              "Valid state: sum |c_i|^2 = 1 over all 2^n amplitudes - check it every time.",
              "Invalid example: (1/2, 1/2) sums to 1/2 - repair by dividing by sqrt(1/2) to get |+>.",
              "(2, 0) renormalizes to |0>; (i/sqrt(2), 1/sqrt(2)) is valid and equals |+i>.",
              "Global phase e^(i gamma) is free - two vectors differing only by it are the same state.",
              "Relative phase is physical: |+> and |-> differ only in phase but split in the X basis.",
              "Unitary gates preserve normalization - validity, once established, survives every circuit.",
            ],
            diagram: {
              kind: "fork",
              title: "Is this vector a legal qubit state?",
              caption: "One normalization check, one global-phase equivalence, one relative-phase distinction.",
              start: "Given a candidate qubit vector",
              branches: [
                { label: "Sum |c_i|^2 = 1", outcome: "valid state - proceed to use it", good: true },
                { label: "Sum |c_i|^2 ≠ 1", outcome: "invalid - renormalize by dividing by the vector's length", good: false },
                { label: "Differs from another state only by e^(i gamma)", outcome: "same physical state - global phase is invisible", good: true },
                { label: "Differs in relative phase between components", outcome: "a different state - measurable in another basis", good: true },
              ],
            },
            table: {
              caption: "Candidate vector · sum of |c|^2 · verdict.",
              headers: ["Candidate (c_0, c_1)", "Sum |c_i|^2", "Verdict"],
              rows: [
                ["(1/sqrt(2), 1/sqrt(2))", "1", "valid - this is |+>"],
                ["(1/2, 1/2)", "1/2", "invalid - renormalizes to |+>"],
                ["(2, 0)", "4", "invalid - renormalizes to |0>"],
                ["(i/sqrt(2), 1/sqrt(2))", "1", "valid - |+i>, distinct from |+> by relative phase"],
              ],
            },
            examQuestions: [
              {
                q: "What makes a superposition valid? Test the vectors (1/2)|0> + (1/2)|1>, (2)|0>, and (i/sqrt(2))|0> + (1/sqrt(2))|1> for validity, repair any invalid one, and explain why global phase is free while relative phase is physical.",
                marks: 14,
                outline: [
                  "Validity: sum |c_i|^2 = 1 - the squared moduli must form a probability distribution",
                  "(1/2, 1/2): sum 1/2 - invalid; renormalized by sqrt(1/2) -> |+>",
                  "(2, 0): sum 4 - invalid; renormalized -> |0>",
                  "(i/sqrt(2), 1/sqrt(2)): sum 1 - valid; the i is a relative phase of pi/2 -> |+i>",
                  "Global phase e^(i gamma): all probabilities |c_i|^2 unchanged - physically invisible",
                  "Relative phase changes interference: |+> and |-> separate perfectly in the X basis",
                  "Unitary gates conserve the norm, so validity persists through every circuit",
                ],
              },
              {
                q: "Explain why unitary evolution can never turn a valid state into an invalid one, and what operation can.",
                marks: 7,
                outline: [
                  "Unitary U preserves norms: |U psi| = |psi| (section 2.4)",
                  "So sum |c_i|^2 stays 1 through any gate sequence",
                  "Measurement is the exception - it collapses to an eigenstate",
                  "The collapsed state is renormalized by construction: P|psi>/sqrt(p)",
                  "Erasure or scaling (non-unitary maps) would break validity - they are forbidden as gates",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Multi-qubit states and entanglement: the vector view",
            body: [
              "An n-qubit register is a vector of 2^n complex amplitudes. Product states are Kronecker products of single-qubit vectors; entangled states are everything else. For two qubits there is a one-line test: a state (c00, c01, c10, c11) is a product state exactly when c00·c11 = c01·c10. The test is the vector-view twin of section 1.7's algebraic proof, and it classifies any given two-qubit state in one line.",
              "Worked example - three classifications. |01> = (0, 0, 1, 0)^T: c00·c11 = 0 = c01·c10 - product, each qubit has its own state (|0> and |1>). Phi+ = (1/sqrt(2))(1, 0, 0, 1)^T: c00·c11 = 1/2 ≠ 0 = c01·c10 - entangled, no per-qubit state exists. The uniform state H ⊗ H|00> = (1/2)(1, 1, 1, 1)^T: c00·c11 = 1/4 = c01·c10 - product again; each qubit is still just |+>. High amplitudes everywhere do not imply entanglement - the test decides, not the spread. The arithmetic is exact and quick: two multiplications and one comparison per state, which is why examiners expect it written out rather than described.",
              "Consequences follow immediately. Three qubits need 8 amplitudes; the GHZ state (|000> + |111>)/sqrt(2) is the three-qubit Bell analogue, maximally entangled across all three. And the state space is why classical simulation is hard: describing 50 qubits exactly needs about 10^15 amplitudes - the memory wall that makes real quantum hardware interesting (section 1.1). Counting amplitudes is therefore the first cost estimate of any quantum idea.",
              "Exam framing: classify given states as product or entangled using c00·c11 = c01·c10, write the state vectors explicitly, and connect the 2^n count to classical simulation difficulty. The test plus one worked vector per class is the full answer. Include the surprising case - the uniform state with all amplitudes 1/2 is a product state - because it kills the intuition that 'spread out' means entangled. Then one sentence on the memory wall: 50 qubits need about 10^15 amplitudes, which is why real hardware matters.",
            ],
            keyTerms: [
              { term: "Multi-qubit state vector", definition: "2^n complex amplitudes describing the whole register." },
              { term: "Product state", definition: "A joint state equal to a Kronecker product of single-qubit states." },
              { term: "Factorization test", definition: "Two qubits are a product state iff c00·c11 = c01·c10." },
              { term: "GHZ state", definition: "(|000> + |111>)/sqrt(2) - the three-qubit maximally entangled analogue of a Bell state." },
              { term: "Memory wall", definition: "Classically describing n qubits needs 2^n amplitudes - simulation dies around 50 qubits." },
            ],
            callout: {
              type: "exam",
              title: "The four-amplitude test",
              body: "c00·c11 = c01·c10 classifies any two-qubit state in one line. Uniform-looking states can be product (H ⊗ H|00> passes) and sparse-looking states can be entangled (Phi+ fails). Compute the two products; never argue from how 'spread out' the amplitudes look.",
            },
            bullets: [
              "n qubits = 2^n amplitudes; product states are Kronecker products of the parts.",
              "Factorization test: product iff c00·c11 = c01·c10.",
              "|01> = (0, 0, 1, 0)^T passes (0 = 0) - product of |0> and |1>.",
              "Phi+ = (1/sqrt(2))(1, 0, 0, 1)^T fails (1/2 ≠ 0) - entangled.",
              "H ⊗ H|00> = (1/2)(1, 1, 1, 1)^T passes (1/4 = 1/4) - product; each qubit is |+>.",
              "GHZ = (|000> + |111>)/sqrt(2) - three-qubit entanglement across all registers.",
            ],
            diagram: {
              kind: "compare",
              title: "Product state vs entangled state",
              caption: "The test is arithmetic, not appearance - spread-out amplitudes can still factorize.",
              left: {
                heading: "Product state",
                items: [
                  "c00·c11 = c01·c10 holds",
                  "Each qubit has its own state vector",
                  "Built by the Kronecker product |a> ⊗ |b>",
                  "Example: |01>, and H ⊗ H|00>",
                ],
              },
              right: {
                heading: "Entangled state",
                items: [
                  "c00·c11 = c01·c10 fails",
                  "No per-qubit state exists - one shared state",
                  "Created only by an interaction such as CNOT",
                  "Example: Phi+ = (|00> + |11>)/sqrt(2)",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "classify.py - the factorization test on three states",
              code: `import numpy as np

states = {
    "|01>":   np.array([0, 0, 1, 0]),
    "Phi+":   np.array([1, 0, 0, 1]) / np.sqrt(2),
    "H@H|00>": np.ones(4) / 2,
}
for name, v in states.items():
    is_product = np.isclose(v[0] * v[3], v[1] * v[2])
    print(f"{name:8} product? {is_product}")   # True / False / True`,
            },
            examQuestions: [
              {
                q: "Explain how n-qubit states are represented as vectors. State the factorization test for two-qubit product states and apply it to |01>, Phi+ = (|00> + |11>)/sqrt(2) and the uniform state (1/2)(|00> + |01> + |10> + |11>). What does the 2^n amplitude count imply for classical simulation?",
                marks: 14,
                outline: [
                  "n qubits: a vector of 2^n complex, normalized amplitudes",
                  "Test: product iff c00·c11 = c01·c10",
                  "|01> = (0,0,1,0)^T: 0 = 0 - product of |0> and |1>",
                  "Phi+: (1/sqrt(2))^2 = 1/2 ≠ 0 - entangled, no per-qubit state",
                  "Uniform: (1/2)^2 = 1/4 = (1/2)^2 - product; each qubit is |+>",
                  "GHZ (|000> + |111>)/sqrt(2) extends entanglement to three qubits",
                  "2^n amplitudes: 50 qubits need ~10^15 numbers - classical simulation hits a memory wall",
                ],
              },
              {
                q: "Why is a state with all four amplitudes non-zero not automatically entangled? Give one product-state example with all amplitudes non-zero.",
                marks: 7,
                outline: [
                  "Entanglement is about factorizability, not amplitude spread",
                  "The test c00·c11 = c01·c10 decides",
                  "H ⊗ H|00> has all amplitudes 1/2 and satisfies the test",
                  "It factors as |+> ⊗ |+>",
                  "Only when the test fails (like Phi+) is the state entangled",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Useful states: the Bell states",
            body: [
              "The four Bell states are the maximally entangled two-qubit states: Phi± = (|00> ± |11>)/sqrt(2) and Psi± = (|01> ± |10>)/sqrt(2). They are the quantum register's most useful raw material - teleportation, superdense coding and the oracle algorithms all consume Bell pairs - and they are the canonical worked example for circuit tracing, because their creation circuit is only two gates long.",
              "Worked trace - building Phi+. Start |00> = (1, 0, 0, 0)^T. Apply H to the first qubit: the state becomes (|00> + |10>)/sqrt(2) - the first qubit is |+>, the second still |0>. Apply CNOT with the first qubit as control: the |10> term's target flips, giving (|00> + |11>)/sqrt(2) = Phi+. Both gates are necessary: H alone leaves a product state; the CNOT converts the first qubit's superposition into correlation between the pair.",
              "Measurement signatures distinguish the four. Phi+ measures 00 or 11 with probability 1/2 each (Z-correlated); Phi- also gives 00/11 in Z but anti-correlates in the X basis; Psi+ gives 01/10 with equal probability; Psi- gives 01/10 in Z and is the singlet, invariant under any joint rotation. A Bell measurement - CNOT, then H on the control, then measure - maps the four states onto the four two-bit outcomes and is the decoding step of teleportation.",
              "Exam framing: 'construct a Bell state with a quantum circuit and verify by measurement' is a guaranteed circuit question - draw the two-gate circuit, trace the state vector after each gate, and give the measurement table with probabilities. Trace both gates explicitly - the H splits the control's amplitude, the CNOT copies the correlation to the target - and finish with the correlations sentence: 00 and 11 with probability 1/2 each, never 01 or 10. Wrong gate order is the planted trap; the trace exposes it.",
            ],
            keyTerms: [
              { term: "Bell states", definition: "Phi± = (|00> ± |11>)/sqrt(2) and Psi± = (|01> ± |10>)/sqrt(2) - the four maximally entangled pairs." },
              { term: "Maximally entangled", definition: "Reducing either qubit alone gives a fully mixed state - maximum possible correlation." },
              { term: "Bell measurement", definition: "CNOT + H + measurement, distinguishing the four Bell states - teleportation's decoder." },
              { term: "Superdense coding", definition: "Sending two classical bits by transmitting one qubit of a shared Bell pair." },
              { term: "Quantum teleportation", definition: "Moving a qubit's state using a Bell pair, a Bell measurement and two classical bits." },
            ],
            callout: {
              type: "exam",
              title: "Order is the answer",
              body: "H must act on the control qubit before the CNOT. Drawing the gates in the wrong order (CNOT then H) leaves a product state - trace it and see. In Bell-state questions the gate order and the per-gate state trace are where the marks live.",
            },
            bullets: [
              "Four Bell states: Phi± = (|00> ± |11>)/sqrt(2), Psi± = (|01> ± |10>)/sqrt(2).",
              "Creation of Phi+: H on qubit 0, then CNOT q0 -> q1, starting from |00>.",
              "Trace: |00> -> (|00> + |10>)/sqrt(2) -> (|00> + |11>)/sqrt(2) = Phi+.",
              "Phi+ measures 00 or 11 with p = 1/2 each - never 01 or 10.",
              "Psi+ measures 01 or 10; Psi- is the anti-correlated singlet.",
              "Bell measurement (CNOT + H + measure) distinguishes all four - the heart of teleportation.",
            ],
            diagram: {
              kind: "flow",
              title: "Building Phi+ in two gates",
              caption: "H spreads the control's amplitude; CNOT writes the correlation into the target.",
              steps: [
                { label: "Start |00>", note: "both qubits at |0>" },
                { label: "H on qubit 0", note: "(|00> + |10>)/sqrt(2)" },
                { label: "CNOT q0 -> q1", note: "the |10> term flips to |11>" },
                { label: "Result Phi+", note: "(|00> + |11>)/sqrt(2) - maximally entangled" },
                { label: "Measure both", note: "00 or 11, each with p = 1/2" },
              ],
            },
            table: {
              caption: "Bell state · formula · Z-basis outcomes.",
              headers: ["Bell state", "Formula", "Z-basis outcomes (p = 1/2 each)"],
              rows: [
                ["Phi+", "(|00> + |11>)/sqrt(2)", "00, 11 - correlated"],
                ["Phi-", "(|00> - |11>)/sqrt(2)", "00, 11 - correlated in Z, anti-correlated in X"],
                ["Psi+", "(|01> + |10>)/sqrt(2)", "01, 10 - anti-correlated"],
                ["Psi-", "(|01> - |10>)/sqrt(2)", "01, 10 - the singlet, rotation-invariant"],
              ],
            },
            examQuestions: [
              {
                q: "Write the four Bell states. Give the circuit that prepares Phi+ from |00>, trace the state vector after each gate, and tabulate the Z-basis measurement outcomes with probabilities for all four Bell states.",
                marks: 14,
                outline: [
                  "Phi± = (|00> ± |11>)/sqrt(2); Psi± = (|01> ± |10>)/sqrt(2)",
                  "Circuit: H on qubit 0, then CNOT with q0 as control, starting from |00>",
                  "After H: (|00> + |10>)/sqrt(2) - still a product state",
                  "After CNOT: (|00> + |11>)/sqrt(2) = Phi+ - entangled",
                  "Phi+ and Phi-: outcomes 00/11 with p = 1/2 each in Z",
                  "Psi+ and Psi-: outcomes 01/10 with p = 1/2 each in Z",
                  "Bell measurement (CNOT, H, measure) distinguishes all four - teleportation's decoder",
                ],
              },
              {
                q: "What goes wrong if you apply CNOT first and H afterwards when building a Bell state from |00>? Trace the state to prove it.",
                marks: 7,
                outline: [
                  "CNOT on |00> does nothing - the control is 0, so the state stays |00>",
                  "H on qubit 0 then gives (|00> + |10>)/sqrt(2)",
                  "That is |+> ⊗ |0> - a product state, not entangled",
                  "The factorization test confirms it: c00·c11 = 0 = c01·c10",
                  "Gate order matters: H must precede CNOT for the correlation to form",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Measuring qubits",
            body: [
              "Measurement is the bridge from amplitudes to data. A projective measurement in the computational basis asks each qubit '0 or 1?', returns i with probability p_i = <psi|P_i|psi> (the Born rule of section 2.5), and collapses the state to P_i|psi>/sqrt(p_i) - the observed eigenstate. After collapse, re-measuring returns the same outcome deterministically: the randomness happens once, at the collapse. That determinism is both the experimenter's reassurance and the proof that collapse really occurred.",
              "Measuring in a different basis is the standard trick: apply the inverse basis-change gate, then measure in Z. To measure in the X basis, apply H and measure in Z - because H maps |+>, |-> to |0>, |1>. Worked example: |psi> = (1/2)|0> + (sqrt(3)/2)|1> has <+|psi> ≈ 0.966 (section 2.2), so an X-basis measurement yields + with probability 93.3% and - with 6.7%. The Y basis is reached by an S^dagger-then-H sandwich. Basis choice decides which question the qubit answers.",
              "Shots and statistics: one shot is one sample; circuits are repeated hundreds or thousands of times and the frequencies converge to the underlying probabilities. Two consequences matter for programs: measuring part of an entangled register collapses the whole joint state, and measurement destroys superposition - so it belongs at the end of the circuit, the deferred-measurement principle that keeps Unit IV's interference intact.",
              "Exam framing: compute an outcome distribution for a given state, explain the basis-change trick, and state the shots-and-collapse story. Numerical probabilities plus the H-then-Z rule is the standard full answer. Do the Z-basis numbers (1/4, 3/4) and the X-basis numbers (93.3%, 6.7%) for the same state - the contrast shows the basis decides what a qubit reveals. Close with the deferred-measurement line: measuring early collapses the superposition that the algorithms of Unit IV need.",
            ],
            keyTerms: [
              { term: "Projective measurement", definition: "Outcomes i with probabilities <psi|P_i|psi>; the state collapses to P_i|psi>/sqrt(p_i)." },
              { term: "Basis change", definition: "Measure in X by applying H before the Z measurement - the same trick generalizes to any basis." },
              { term: "Shot", definition: "One execution of the circuit ending in one classical sample." },
              { term: "Collapse", definition: "The post-measurement replacement of the state by the observed eigenstate." },
              { term: "Deferred measurement", definition: "Keep all measurements at the end of the circuit - measurement before interference destroys the algorithm." },
            ],
            callout: {
              type: "tip",
              title: "The H-then-Z rule",
              body: "To measure in the X basis, apply H and then measure in the Z basis - H maps |+> -> |0> and |-> -> |1>. Stating that rule and using it on one example is what separates a measurement answer from a Born-rule-only answer; most students never mention the basis at all.",
            },
            bullets: [
              "Projective measurement: outcome i with p_i = <psi|P_i|psi>; collapse to P_i|psi>/sqrt(p_i).",
              "Worked: |psi> = (1/2)|0> + (sqrt(3)/2)|1> gives P(0) = 1/4, P(1) = 3/4 in Z.",
              "X-basis measurement: apply H first - |+> reads 0 with certainty, |-> reads 1.",
              "For the worked state, the X-basis outcome is + with 93.3% (from the overlap of section 2.2).",
              "One shot is one sample; frequencies converge to probabilities over many shots.",
              "Measure at the end - early measurement collapses superposition and kills interference.",
            ],
            diagram: {
              kind: "cycle",
              title: "The measurement loop",
              caption: "Quantum data becomes statistics by repeating the same circuit and histogramming the outcomes.",
              steps: [
                { label: "Prepare the state", note: "reset to |0> and run the circuit" },
                { label: "Basis change if needed", note: "e.g. H before a Z measurement" },
                { label: "Measure (one shot)", note: "one classical sample" },
                { label: "Record the bits", note: "the state has collapsed" },
                { label: "Repeat many shots", note: "100-1000 executions" },
                { label: "Histogram", note: "frequencies converge to the Born probabilities" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "shots.py - sampling the Born distribution",
              code: `import numpy as np

p0, p1 = 0.25, 0.75              # from |psi> = (1/2)|0> + (sqrt(3)/2)|1>
rng = np.random.default_rng(42)
shots = rng.random(1000) < p1    # simulate 1000 Z-basis shots
ones = int(shots.sum())
print(ones / 1000)               # ~0.75 - converging to p1`,
            },
            examQuestions: [
              {
                q: "Explain projective measurement of qubits with the Born rule and collapse. Compute the Z-basis and X-basis outcome distributions for |psi> = (1/2)|0> + (sqrt(3)/2)|1>, and explain why circuits repeat over many shots.",
                marks: 14,
                outline: [
                  "Born rule: p_i = <psi|P_i|psi>; collapse to P_i|psi>/sqrt(p_i)",
                  "Z-basis: P(0) = |1/2|^2 = 1/4, P(1) = 3/4",
                  "X-basis: apply H first; <+|psi> = (1 + sqrt(3))/(2 sqrt(2)) ≈ 0.966",
                  "So P(+) ≈ 0.933 and P(-) ≈ 0.067 in the X basis",
                  "Basis choice decides what the qubit reveals - the H-then-Z trick",
                  "One shot is one sample; circuits repeat 100-1000 times",
                  "Frequencies converge to probabilities; re-measuring after collapse is deterministic",
                ],
              },
              {
                q: "State the deferred-measurement principle and explain why an early measurement can destroy a quantum algorithm's advantage.",
                marks: 7,
                outline: [
                  "Measurement collapses the state - superposition is lost",
                  "Algorithms (Unit IV) rely on amplitudes interfering before the readout",
                  "An early measurement samples one branch and discards the rest",
                  "Phase information in the remaining branches is destroyed",
                  "Therefore: measure once, at the very end of the circuit",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Single-qubit gates I: the Pauli family",
            body: [
              "The Pauli gates are the three fundamental single-qubit flips. X = [[0, 1], [1, 0]] is the bit flip: X|0> = |1> and X|1> = |0> - the quantum NOT. Z = diag(1, -1) is the phase flip: Z|0> = |0>, Z|1> = -|1> - invisible in the Z basis, decisive under later interference. Y = [[0, -i], [i, 0]] does both: Y|0> = i|1> and Y|1> = -i|0>, a bit flip with phases attached. All three are 180-degree rotations about the x, y and z axes of the Bloch sphere.",
              "Worked example. X applied to |psi> = (1/2)|0> + (sqrt(3)/2)|1> swaps the amplitudes: (sqrt(3)/2)|0> + (1/2)|1> - probabilities move from 25%/75% to 75%/25%. Z applied to |+> = (|0> + |1>)/sqrt(2) gives (|0> - |1>)/sqrt(2) = |-> - the Z-basis statistics are unchanged (still 50/50) but the relative phase flipped, which the next H will expose as a certain outcome (section 1.6). Phases are invisible now and decisive later - the Pauli Z is the cheapest phase oracle.",
              "Structure of the family: each Pauli squares to the identity (X^2 = Y^2 = Z^2 = I), any two distinct Paulis anti-commute (XY = -YX), and the four matrices including I form the Pauli group. Continuous rotations are built from them: R_x(theta) = e^(-i theta X/2) rotates the Bloch sphere by theta about the x-axis - the Paulis are the generators of all single-qubit motion.",
              "Exam framing: write the three matrices, state each gate's action on |0> and |1>, verify one square-to-identity, and note the anti-commutation. Adding '180-degree Bloch rotations' ties the answer to section 1.5's geometry. The Y action is where precision pays - write i|1> and -i|0> with the phases explicit, since probabilities alone hide them. One Bloch sentence closes the loop: three axes, three flips, and the identity as the fourth member of the Pauli group.",
            ],
            keyTerms: [
              { term: "Bit flip (X)", definition: "X|0> = |1>, X|1> = |0> - the quantum NOT gate." },
              { term: "Phase flip (Z)", definition: "Z|1> = -|1>, Z|0> = |0> - negates the |1> amplitude only." },
              { term: "Y gate", definition: "Y|0> = i|1>, Y|1> = -i|0> - bit and phase flip combined." },
              { term: "Anti-commutation", definition: "XY = -YX for distinct Paulis - they cannot be applied in both orders with the same result." },
              { term: "Bloch rotation", definition: "Each Pauli is a 180-degree rotation about one axis; R_x(theta) etc. generalize to any angle." },
            ],
            callout: {
              type: "warning",
              title: "Y carries phases",
              body: "Y|0> = i|1>, not |1> - dropping the i is the classic one-mark slip. X is the pure bit flip; Y is bit flip plus phases. When an exam asks for the action of Y on basis states, write the i explicitly and note that measurement probabilities are unaffected (|i|^2 = 1) while later interference is not.",
            },
            bullets: [
              "X = [[0, 1], [1, 0]]: X|0> = |1>, X|1> = |0> - the quantum NOT.",
              "Z = diag(1, -1): Z|0> = |0>, Z|1> = -|1> - the phase flip.",
              "Y = [[0, -i], [i, 0]]: Y|0> = i|1>, Y|1> = -i|0> - bit + phase flip.",
              "Worked: X(1/2|0> + sqrt(3)/2|1>) = sqrt(3)/2|0> + 1/2|1> - amplitudes swap.",
              "Z|+> = |-> - statistics unchanged in Z, decisive after the next H.",
              "Structure: X^2 = Y^2 = Z^2 = I; XY = -YX; each is a 180-degree Bloch rotation.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the Pauli gate",
              caption: "Three flips and one no-op - the whole single-qubit Pauli family.",
              start: "What needs to happen to the qubit?",
              branches: [
                { label: "Flip the bit", outcome: "X: |0> <-> |1> - 180-degree rotation about the x-axis", good: true },
                { label: "Flip the phase", outcome: "Z: |1> -> -|1>, |0> unchanged - rotation about the z-axis", good: true },
                { label: "Flip both", outcome: "Y: |0> -> i|1>, |1> -> -i|0> - rotation about the y-axis", good: true },
                { label: "Change nothing", outcome: "I - the identity, fourth member of the Pauli group", good: true },
              ],
            },
            table: {
              caption: "Pauli gate · matrix · action · Bloch meaning.",
              headers: ["Gate", "Matrix", "Action on basis states", "Bloch meaning"],
              rows: [
                ["X", "[[0, 1], [1, 0]]", "X|0> = |1>, X|1> = |0>", "180° rotation about x"],
                ["Y", "[[0, -i], [i, 0]]", "Y|0> = i|1>, Y|1> = -i|0>", "180° rotation about y"],
                ["Z", "diag(1, -1)", "Z|0> = |0>, Z|1> = -|1>", "180° rotation about z"],
                ["I", "diag(1, 1)", "leaves every state unchanged", "no rotation"],
              ],
            },
            examQuestions: [
              {
                q: "Write the matrices of the Pauli gates X, Y and Z, state their action on |0> and |1>, verify that X^2 = I and that X and Y anti-commute, and explain why the Paulis are called 180-degree Bloch rotations.",
                marks: 14,
                outline: [
                  "X = [[0,1],[1,0]], Y = [[0,-i],[i,0]], Z = diag(1,-1)",
                  "Actions: X|0> = |1>; Y|0> = i|1>; Z|1> = -|1> (and cyclically)",
                  "X^2 = [[1,0],[0,1]] = I by direct multiplication",
                  "XY = [[i,0],[0,-i]] and YX = [[-i,0],[0,i]] - XY = -YX, anti-commuting",
                  "Each Pauli is unitary and Hermitian - gate and observable at once (section 2.6)",
                  "Bloch reading: X, Y, Z rotate the sphere by pi about their axes",
                  "Generators: R_x(theta) = e^(-i theta X/2) extends the flips to any angle",
                ],
              },
              {
                q: "Apply X and then Z to |psi> = (1/2)|0> + (sqrt(3)/2)|1> and give the final state and its Z-basis probabilities.",
                marks: 7,
                outline: [
                  "X first: amplitudes swap -> (sqrt(3)/2)|0> + (1/2)|1>",
                  "Z then negates the |1> amplitude -> (sqrt(3)/2)|0> - (1/2)|1>",
                  "P(0) = 3/4, P(1) = 1/4 - probabilities unaffected by Z",
                  "The relative phase is now pi - invisible in Z, visible in X",
                  "The order matters: XZ ≠ ZX (they anti-commute up to sign)",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Single-qubit gates II: Hadamard and phase gates",
            body: [
              "The Hadamard gate H = (1/sqrt(2))[[1, 1], [1, -1]] is the superposition-maker and the basis-changer. H|0> = (|0> + |1>)/sqrt(2) = |+> and H|1> = (|0> - |1>)/sqrt(2) = |->; applying H twice returns the original state (H^2 = I). Geometrically it rotates the Bloch sphere so that the x-axis becomes the z-axis: H converts Z-basis information into X-basis information and back - which is exactly why the X-basis measurement trick of section 3.5 works.",
              "Phase gates rotate the equator. S = diag(1, i) adds a pi/2 phase to |1>; T = diag(1, e^(i pi/4)) adds pi/4; the general phase-shift gate R_phi = diag(1, e^(i phi)) adds any phi. Neither affects basis states' probabilities - diag gates leave |0> alone and only phase-rotate |1> - so their work stays invisible until the amplitudes are recombined. Worked ladder: |0> -> H -> |+> -> S -> |+i> -> T -> (|0> + i·e^(i pi/4)|1>)/sqrt(2), a state at relative phase 3pi/4 - each phase gate has rotated the equatorial point.",
              "Why T matters so much: the set {H, T, CNOT} is universal - any unitary whatsoever can be approximated to any accuracy using only these gates (the Solovay-Kitaev theorem bounds the overhead). S is T squared; H plus T generate arbitrary single-qubit rotations. Hardware compiles everything down to a small native set - typically {rz, sx, x, cx} on IBM machines - and T's pi/4 is the finest rotation the universal set needs.",
              "Exam framing: write H, verify H^2 = I, state S and T as diag gates with their phases, and explain why phase gates show no effect until recombination. The phase ladder trace is the worked example examiners expect. Run the ladder to its final H so the accumulated phase becomes a measurable outcome shift - that last step is what proves the phases were physical. Naming the universal set {H, T, CNOT} and the relation S = T^2 finishes the structural part.",
            ],
            keyTerms: [
              { term: "Hadamard (H)", definition: "(1/sqrt(2))[[1,1],[1,-1]] - creates superposition; swaps the Z and X bases; H^2 = I." },
              { term: "Phase gate S", definition: "diag(1, i) - adds a pi/2 phase to |1>; S = T^2." },
              { term: "T gate", definition: "diag(1, e^(i pi/4)) - adds a pi/4 phase; the accuracy workhorse of the universal set." },
              { term: "Phase-shift gate R_phi", definition: "diag(1, e^(i phi)) - arbitrary phase rotation of the |1> component." },
              { term: "Universal gate set", definition: "{H, T, CNOT} approximates any unitary to any accuracy." },
            ],
            callout: {
              type: "tip",
              title: "Phase gates hide, then decide",
              body: "S and T change no Z-basis probability - |0> and |1> alone are untouched. Their effect appears only when amplitudes are recombined (another H, or interference in an algorithm). That hide-then-decide behaviour is why oracles are phase gates, and why the phase ladder example ends with an H.",
            },
            bullets: [
              "H = (1/sqrt(2))[[1, 1], [1, -1]]: H|0> = |+>, H|1> = |->, H^2 = I.",
              "H swaps the Z and X bases - the reason X-basis measurement is H-then-Z.",
              "S = diag(1, i) (pi/2), T = diag(1, e^(i pi/4)) (pi/4), R_phi = diag(1, e^(i phi)).",
              "Phase ladder: |0> -> H -> |+> -> S -> |+i> -> T -> relative phase 3pi/4.",
              "Phase gates change no Z-basis probability - effects appear only on recombination.",
              "{H, T, CNOT} is universal; S = T^2; hardware compiles to a small native set.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The phase ladder from |0>",
              caption: "H creates the superposition; each phase gate rotates the equatorial point one step further.",
              stages: [
                { label: "|0>", note: "north pole" },
                { label: "H", note: "|+> - equator, phase 0" },
                { label: "S", note: "|+i> - phase pi/2" },
                { label: "T", note: "phase pi/4 further - total 3pi/4" },
                { label: "H (to read)", note: "phase becomes a measurable outcome" },
              ],
            },
            table: {
              caption: "Gate · matrix · action · role.",
              headers: ["Gate", "Matrix", "Action", "Role"],
              rows: [
                ["H", "(1/sqrt(2))[[1,1],[1,-1]]", "H|0> = |+>, H|1> = |->", "superposition / basis change"],
                ["S", "diag(1, i)", "phase +pi/2 on |1>", "quarter-turn; S = T^2"],
                ["T", "diag(1, e^(i pi/4))", "phase +pi/4 on |1>", "universality's fine rotation"],
                ["R_phi", "diag(1, e^(i phi))", "phase +phi on |1>", "arbitrary phase shift"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Hadamard and phase gates. Write H, S and T as matrices, verify H^2 = I, trace the state through |0> -> H -> S -> T -> H, and explain why {H, T, CNOT} forms a universal gate set.",
                marks: 14,
                outline: [
                  "H = (1/sqrt(2))[[1,1],[1,-1]]; H|0> = |+>, H|1> = |->",
                  "H^2 = (1/2)[[2,0],[0,2]] = I - verified by multiplication",
                  "S = diag(1, i): phase pi/2; T = diag(1, e^(i pi/4)): phase pi/4",
                  "Trace: |0> -> |+> -> |+i> -> phase 3pi/4 -> final H converts phase to outcome",
                  "The last H shows probabilities split by the accumulated phase",
                  "Phase gates alone change no Z-basis probability - recombination reveals them",
                  "Universality: H + T approximate any single-qubit rotation; CNOT adds entanglement - any unitary follows",
                ],
              },
              {
                q: "Why does the T gate have no observable effect on the basis state |0>, and when does its effect become visible?",
                marks: 7,
                outline: [
                  "T = diag(1, e^(i pi/4)) scales |0> by 1 - nothing changes",
                  "On |1> it adds a pi/4 phase - still invisible to a Z-measurement",
                  "Global-vs-relative phase: on |1> alone the phase is global, hence physical-free",
                  "Superpose first: T on |+> gives (|0> + e^(i pi/4)|1>)/sqrt(2) - a real relative phase",
                  "A following H converts that phase into shifted measurement probabilities",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Controlled gates, SWAP, Ising and the Deutsch gate",
            body: [
              "Two-qubit gates are where qubits start talking to each other. The CNOT (controlled-NOT) flips the target qubit if the control is 1: CNOT|10> = |11>, CNOT|11> = |10>, and it leaves |00>, |01> alone; its 4×4 matrix reorders only the last two basis states. The controlled-Z, CZ = diag(1, 1, 1, -1), applies a phase flip only to |11> - diagonal, symmetric in its two qubits, and equivalent to CNOT up to Hadamards on the target. A general controlled-U applies U to the target conditioned on the control; it is the construction that powers phase kick-back (section 4.4).",
              "SWAP exchanges two qubits' states: SWAP|01> = |10>; it is built from three CNOTs with control-target roles alternating. The Ising (XX) gate exp(-i theta X ⊗ X / 2) entangles through a simultaneous rotation of both qubits - a native gate on several hardware platforms, and reducible to CNOTs with single-qubit rotations. The Deutsch gate (Deutsch, 1989) is the three-qubit gate that settled universality: a controlled-controlled phase rotation that, alone, can approximate any quantum computation - the quantum answer to the classical Toffoli gate.",
              "Worked example - the CNOT matrix in action. CNOT = [[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]]. Applied to |10> = (0, 0, 1, 0)^T it returns (0, 0, 0, 1)^T = |11>: control 1, so the target flipped. Applied to Phi+'s ingredients it is what created the entanglement of section 3.4 - CNOT is the only gate in the standard set that can turn product states into entangled ones.",
              "Exam framing: write the CNOT and CZ matrices, apply CNOT to two basis states, state the SWAP = 3 CNOT decomposition, and name the universal sets. The 'which gate entangles' point - only non-Kronecker gates do - is the conceptual line examiners look for. Demonstrate it concretely: CNOT acting on |+>|0> produces Phi+, the Bell state, while SWAP merely permutes amplitudes. That single comparison separates the two families of two-qubit gates better than any definition.",
            ],
            keyTerms: [
              { term: "CNOT", definition: "Flips the target when the control is 1; the standard entangling two-qubit gate." },
              { term: "Controlled-U", definition: "Applies U to the target conditioned on the control being 1 - the kick-back mechanism." },
              { term: "SWAP", definition: "Exchanges two qubits' states; decomposes into three CNOTs." },
              { term: "Ising (XX) gate", definition: "exp(-i theta X ⊗ X / 2) - a simultaneous two-qubit rotation, native on some hardware." },
              { term: "Deutsch gate", definition: "A three-qubit controlled-controlled phase rotation proven universal (Deutsch, 1989)." },
            ],
            callout: {
              type: "tip",
              title: "SWAP is three CNOTs",
              body: "SWAP(a, b) = CNOT(a,b) · CNOT(b,a) · CNOT(a,b) - the control/target direction alternates. Quoting the decomposition answers the 'how is it built' half instantly, and the same three-CNOT pattern reappears whenever hardware lacks native SWAPs (moving data between qubits, Unit IV).",
            },
            bullets: [
              "CNOT: flips the target if the control is 1 - CNOT|10> = |11>, CNOT|11> = |10>.",
              "CZ = diag(1, 1, 1, -1) - diagonal, symmetric, CNOT-equivalent via Hadamards.",
              "Controlled-U: apply U to the target conditioned on the control - the basis of kick-back.",
              "SWAP|01> = |10>; built from three CNOTs with alternating directions.",
              "Ising XX = exp(-i theta X ⊗ X / 2) - a native entangler on several platforms.",
              "Deutsch gate: three-qubit, universal (1989) - the quantum Toffoli; {H, T, CNOT} is the standard universal set.",
            ],
            diagram: {
              kind: "matrix",
              title: "The gate zoo, sorted",
              caption: "One axis counts qubits, the other entangling power - only the non-separable gates create entanglement.",
              axes: { x: "qubits touched (1 -> 2+)", y: "entangling power (none -> creates entanglement)" },
              quadrants: [
                { label: "X, H, S, T", note: "1 qubit, no entanglement" },
                { label: "CNOT, CZ, Ising XX", note: "2 qubits, entangling - the workhorses" },
                { label: "Z-rotations alone", note: "1 qubit, phase only" },
                { label: "SWAP", note: "2 qubits, moves states but never entangles" },
              ],
            },
            table: {
              caption: "Gate · size · action · note.",
              headers: ["Gate", "Size", "Action", "Note"],
              rows: [
                ["CNOT", "2 qubits", "target flips if control = 1", "the standard entangler"],
                ["CZ", "2 qubits", "phase -1 on |11>", "diagonal and symmetric"],
                ["SWAP", "2 qubits", "SWAP|01> = |10>", "three CNOTs"],
                ["Ising XX", "2 qubits", "exp(-i theta XX/2)", "native on some hardware"],
                ["Deutsch gate", "3 qubits", "controlled-controlled phase rotation", "universal alone (1989)"],
                ["Toffoli", "3 qubits", "reversible AND (classical analogue)", "classical computation inside quantum"],
              ],
            },
            examQuestions: [
              {
                q: "Explain CNOT, CZ and SWAP with their matrices. Apply CNOT to |10> and |11>, show that SWAP decomposes into three CNOTs, and explain why only non-Kronecker two-qubit gates can create entanglement.",
                marks: 14,
                outline: [
                  "CNOT = [[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]] - flips target when control = 1",
                  "CNOT|10> = |11>; CNOT|11> = |10>",
                  "CZ = diag(1,1,1,-1) - diagonal, symmetric, CNOT-equivalent via Hadamards",
                  "SWAP = CNOT(a,b)·CNOT(b,a)·CNOT(a,b) - three CNOTs, directions alternating",
                  "SWAP|01> = |10> but entanglement is unchanged - SWAP never entangles",
                  "Kronecker products (X ⊗ I style) act independently per qubit - no correlation created",
                  "CNOT mixes basis states non-separably - it turns |+>|0> into Phi+, the Bell state",
                ],
              },
              {
                q: "What is the Deutsch gate and why is it historically significant? Relate it to the classical Toffoli gate.",
                marks: 7,
                outline: [
                  "A three-qubit controlled-controlled phase rotation (Deutsch, 1989)",
                  "Deutsch proved it alone is universal - any quantum computation can be built from it",
                  "It is the quantum analogue of the classical Toffoli (CC-NOT) gate",
                  "Toffoli alone is universal for classical reversible computation; Deutsch gate for quantum",
                  "Modern practice uses smaller universal sets ({H, T, CNOT}), but the theorem settled feasibility",
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
      title: "The Programming Model and Core Techniques",
      summary:
        "Unit IV defines how a quantum program actually runs - the classical steps, the quantum steps, and the traffic of data between bits and qubits - then develops the four techniques every major algorithm exploits: amplitude amplification, the quantum Fourier transform, phase kick-back with quantum phase estimation, and quantum walks.",
      chapter: {
        number: "04",
        title: "The Programming Model and Its Techniques",
        intro:
          "Unit IV covers the programming model (steps on the classical computer, steps on the quantum computer, moving data between bits and qubits), amplitude amplification, the quantum Fourier transform, phase kick-back, quantum phase estimation and quantum walks.",
        inOneBreath:
          "A quantum program is classical pre-processing, state preparation from bits, a coherent gate sequence, measurement back to bits - repeated in shots; beneath every algorithm sit four primitives: amplify amplitudes (Grover's engine), transform phases with the QFT, kick eigenvalue phases back onto controls, and walk in superposition across a graph.",
        sections: [
          {
            number: "4.1",
            title: "The programming model: classical steps, quantum steps, moving data",
            body: [
              "The classical computer does the surrounding work. Its steps: write the program (a circuit description of gates and measurements), compile and transpile it to the hardware's native gate set and coupling map, schedule the instructions, submit the job, receive the raw counts, and post-process - computing statistics, applying error mitigation, and deciding whether to run a refined circuit. Nothing here is quantum: it is a compiler pipeline wrapped around a very unusual coprocessor.",
              "The quantum computer's steps are short and strict. Initialize the register to |0...0>; apply the gate sequence coherently - one unitary evolution, no interruption; measure all qubits, producing one classical bit string per shot; repeat for many shots. There is no mid-circuit peeking without collapse (section 3.5), no copying of unknown states, and no output except that sampled bit string. Everything else - interpretation, verification, iteration - belongs to the classical side.",
              "Moving data across the boundary has exactly two directions. Bits to qubits: state preparation - a basis state |x> is loaded by applying X gates where the bits are 1 (preparing |101> from three |0> qubits means X on qubits 0 and 2); dense classical vectors can be amplitude-encoded into the 2^n amplitudes, at the cost of a deep preparation circuit. Qubits to bits: measurement readout - one sample per shot. And one law constrains everything: the no-cloning theorem forbids copying an unknown qubit state, so quantum data cannot be duplicated or cached mid-circuit the way classical data is.",
              "Exam framing: enumerate the classical steps and the quantum steps in order, then give the two data directions with the no-cloning caveat. A pipeline diagram plus the |101> preparation example is the complete answer. Keep the two step-lists in order - compilers cannot repair an incoherent circuit, and hardware cannot return anything but samples. The |101> example (X on qubits 0 and 2) shows state preparation concretely, and the no-cloning line explains why copying is never on the menu.",
            ],
            keyTerms: [
              { term: "Transpilation", definition: "Rewriting a circuit into the hardware's native gate set and coupling map." },
              { term: "Shot", definition: "One full execution of the circuit ending in one classical bit string." },
              { term: "State preparation", definition: "Loading classical data into qubits - basis states via X gates, dense vectors via amplitude encoding." },
              { term: "Readout", definition: "Measurement of the register producing classical bits - one sample per shot." },
              { term: "No-cloning theorem", definition: "An unknown quantum state cannot be copied; quantum data cannot be duplicated mid-circuit." },
            ],
            callout: {
              type: "warning",
              title: "You cannot copy a qubit",
              body: "'Load the data into the qubits' never means duplicate an unknown state - the no-cloning theorem forbids it. Loading means prepare |x> (X gates) or encode amplitudes once, up front. Any exam answer that copies a qubit mid-circuit has broken the rules of the model.",
            },
            bullets: [
              "Classical steps: write -> transpile -> schedule -> submit -> collect counts -> post-process.",
              "Quantum steps: initialize |0...0> -> apply gates coherently -> measure all qubits -> repeat shots.",
              "Bits to qubits: state preparation - |101> from |000> via X on qubits 0 and 2.",
              "Amplitude encoding loads 2^n-dimensional vectors into n qubits - powerful, circuit-deep.",
              "Qubits to bits: measurement readout, one bit string per shot; statistics live classically.",
              "No-cloning: unknown states cannot be copied - no caching, no mid-circuit duplication.",
            ],
            diagram: {
              kind: "pipeline",
              title: "One quantum program, end to end",
              caption: "Classical stages sandwich the coherent quantum execution; the register crosses the boundary twice.",
              stages: [
                { label: "Classical program", note: "circuit description in Qiskit / Q# / PyQuil" },
                { label: "Transpile + schedule", note: "native gates, coupling map, timing" },
                { label: "Prepare qubits", note: "bits -> qubits (X gates or amplitude encoding)" },
                { label: "Quantum circuit runs", note: "one coherent unitary evolution" },
                { label: "Measure", note: "qubits -> bits, one sample per shot" },
                { label: "Post-process", note: "histogram, mitigation, decide next run" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "prep.py - loading the classical string 101 into qubits",
              code: `import numpy as np

ket0 = np.array([1, 0]); ket1 = np.array([0, 1])
X = np.array([[0, 1], [1, 0]]); I2 = np.eye(2)

psi = np.kron(np.kron(ket0, ket0), ket0)          # |000>
prep = np.kron(np.kron(X, I2), X)                  # X on qubits 0 and 2
psi = prep @ psi                                   # -> |101>
print(psi)                                         # [0 0 0 0 0 1 0 0]
print(np.abs(psi) ** 2)                            # P(measure '101') = 1`,
            },
            examQuestions: [
              {
                q: "Describe the programming model of a quantum computing program: the steps performed on the classical computer, the steps performed on the quantum computer, and how data moves between bits and qubits. Include the no-cloning constraint.",
                marks: 14,
                outline: [
                  "Classical steps: write circuit -> transpile to native gates -> schedule -> submit -> collect counts -> post-process",
                  "Quantum steps: initialize |0...0> -> coherent gate sequence -> measure all qubits -> repeat shots",
                  "Bits to qubits: state preparation - |x> loaded with X gates where bits are 1",
                  "Example: |101> prepared from |000> by X on qubits 0 and 2",
                  "Amplitude encoding: dense vectors into 2^n amplitudes - deep but expressive",
                  "Qubits to bits: measurement readout, one sample per shot; statistics computed classically",
                  "No-cloning: unknown states cannot be copied - no mid-circuit duplication or caching",
                ],
              },
              {
                q: "Why does a quantum computer return a distribution rather than an answer, and how does the classical side turn that distribution into a decision?",
                marks: 7,
                outline: [
                  "The final measurement samples the Born distribution - one string per shot",
                  "The amplitudes themselves are never directly readable",
                  "Many shots build a histogram approximating the probabilities",
                  "The classical side reads the histogram: dominant outcome, threshold, or verification",
                  "Algorithms are designed so the correct answer's probability is boosted before this step",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Amplitude amplification",
            body: [
              "Amplitude amplification is the general engine behind Grover's search: a procedure that rotates the state vector toward the marked items by an angle 2theta per iteration, where sin(theta) = sqrt(M/N) with M marked items among N. Each iteration has two reflections: the oracle flips the sign of the marked amplitudes, and the diffusion operator 2|s><s| - I reflects every amplitude about the mean - together a rotation of the whole state in the plane spanned by marked and unmarked subspaces.",
              "Worked example - N = 4, M = 1. Uniform start: amplitudes (1/2, 1/2, 1/2, 1/2). Oracle flips the target: (-1/2, 1/2, 1/2, 1/2). Mean = 1/4. Diffusion maps each amplitude a to 2·(1/4) - a: the target becomes 2/4 - (-1/2) = 1 and the others become 2/4 - 1/2 = 0. The final state is exactly the marked item - success probability 1 after ONE iteration. Geometrically theta = arcsin(1/2) = 30 degrees, and one iteration rotates by 2theta = 60 degrees, landing the state precisely on the target axis.",
              "The general rule: k* ≈ (pi/4)·sqrt(N/M) iterations maximizes the success probability, giving the quadratic speedup over the classical average of N/2 queries. The same rotation logic warns about over-iteration: past the optimum the state keeps rotating and the success probability falls again - for N = 4 a second iteration drops it from certainty back to 1/4. Amplitude amplification is also the unifier: Grover is its N = 2^n instance, and its reflections are themselves a quantum walk (section 4.6).",
              "Exam framing: do the amplitude bookkeeping for N = 4 (table of amplitudes per iteration), state the iteration formula, and explain the rotation picture. The bookkeeping is the marks; the formula is the generalization. Show the arithmetic at every step - oracle flip, mean, reflection - because the numbers are what convince. Then connect: theta = arcsin(1/2) = 30 degrees makes the one-iteration result exact, and the same rotation logic produces the (pi/4) sqrt(N) formula for general N.",
            ],
            keyTerms: [
              { term: "Amplitude amplification", definition: "Rotating the state toward marked items by 2theta per iteration; sin(theta) = sqrt(M/N)." },
              { term: "Oracle", definition: "The unitary that flips the sign of marked amplitudes - phase marking." },
              { term: "Diffusion operator", definition: "2|s><s| - I: reflection of every amplitude about the mean." },
              { term: "Quadratic speedup", definition: "O(sqrt(N)) queries instead of O(N) - proven optimal for unstructured search." },
              { term: "Over-rotation", definition: "Iterating past k* rotates past the target and lowers the success probability." },
            ],
            callout: {
              type: "exam",
              title: "For N = 4 the answer is exactly one iteration",
              body: "One iteration takes the uniform state to the marked state with certainty (amplitude bookkeeping above). A second iteration rotates past it and success drops back to 1/4. The formula k ≈ (pi/4) sqrt(N/M) exists precisely to stop at the optimum - quote it, then show the N = 4 case hits it exactly.",
            },
            bullets: [
              "Two reflections per iteration: oracle (flip marked amplitudes) + diffusion (reflect about the mean).",
              "Rotation by 2theta per iteration with sin(theta) = sqrt(M/N).",
              "N = 4, M = 1: (-1/2, 1/2, 1/2, 1/2) -> mean 1/4 -> target amplitude 1, others 0.",
              "theta = 30 degrees; one iteration of 60 degrees lands exactly on the target.",
              "General optimum: k* ≈ (pi/4) sqrt(N/M) - the quadratic speedup.",
              "Over-iteration rotates past the target: N = 4, two iterations -> success falls to 1/4.",
            ],
            diagram: {
              kind: "cycle",
              title: "The amplification loop",
              caption: "Mark, reflect about the mean, repeat - each pass rotates the state 2theta toward the answer.",
              steps: [
                { label: "Prepare uniform |s>", note: "equal amplitudes everywhere" },
                { label: "Oracle O_f", note: "flip the marked amplitude's sign" },
                { label: "Diffusion D", note: "reflect all amplitudes about the mean" },
                { label: "Repeat k ≈ (pi/4) sqrt(N/M)", note: "each pass rotates 2theta" },
                { label: "Measure", note: "marked item with high probability" },
                { label: "Verify classically", note: "check; restart if it failed" },
              ],
            },
            table: {
              caption: "Amplitude bookkeeping for N = 4, one marked item.",
              headers: ["Iteration", "Marked amplitude", "Other amplitudes", "Success probability"],
              rows: [
                ["0 (uniform)", "1/2", "1/2", "1/4"],
                ["1 (optimum)", "1", "0", "1"],
                ["2 (over-iterated)", "+1/2", "-1/2 each", "1/4"],
              ],
            },
            examQuestions: [
              {
                q: "Explain amplitude amplification. For N = 4 with one marked item, track the amplitudes through the oracle and diffusion steps and show that one iteration finds the item with certainty. State the general iteration count and explain the danger of iterating too many times.",
                marks: 14,
                outline: [
                  "Two reflections per iteration: oracle flips marked amplitudes; diffusion reflects about the mean",
                  "Start: (1/2, 1/2, 1/2, 1/2)",
                  "Oracle: (-1/2, 1/2, 1/2, 1/2)",
                  "Mean = 1/4; diffusion maps a -> 2(1/4) - a",
                  "Result: (1, 0, 0, 0) - the marked state with certainty after one iteration",
                  "Geometry: theta = arcsin(1/2) = 30 degrees; each iteration rotates 2theta = 60 degrees",
                  "General k* ≈ (pi/4) sqrt(N/M); over-iterating rotates past the target - N = 4 second pass drops success to 1/4",
                ],
              },
              {
                q: "Derive the diffusion operator's effect on a uniform state with one flipped amplitude, and explain why 'reflection about the mean' amplifies the marked item.",
                marks: 7,
                outline: [
                  "Diffusion D = 2|s><s| - I maps each amplitude a to 2·mean - a",
                  "Mean after the oracle: (sum of amplitudes)/N = 1/4",
                  "Marked amplitude -1/2 is below the mean -> reflected above it: 2(1/4) - (-1/2) = 1",
                  "Unmarked 1/2 is above the mean -> reflected below: 2(1/4) - 1/2 = 0",
                  "The mean acts as the pivot - inversion about it converts marking into concentration",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "The Quantum Fourier Transform",
            body: [
              "The Quantum Fourier Transform maps each basis state to a uniform superposition with computable phases: |x> -> (1/sqrt(N)) sum_y e^(2 pi i x y / N) |y>. It is the DFT matrix applied to a quantum state - unitary, linear, and invertible (the inverse QFT undoes it). For n qubits N = 2^n, and the transform's output encodes the number x as relative phases spread across the register rather than as a classical integer.",
              "Worked example - N = 4. The QFT matrix is (1/2)[[1, 1, 1, 1], [1, i, -1, -i], [1, -1, 1, -1], [1, -i, -1, i]]. Column x = 2 (the state |10>) reads (1, -1, 1, -1)/2, so QFT|10> = (|00> - |01> + |10> - |11>)/2: the number 2 has become a phase pattern of alternating signs. The product form shows the structure: each output qubit ends in (|0> + e^(2 pi i 0.x...)|1>)/sqrt(2) - x is stored as one phase per qubit, most significant phase on the top wire.",
              "Cost and use: a quantum circuit implements the QFT with O(n^2) gates - Hadamards plus controlled phase rotations plus final swaps - against the classical FFT's O(N log N) = O(n·2^n). That exponential asymptotic gap is real but conditional: the QFT's output is amplitudes, not classical numbers, so it cannot be read out directly. Its power is released only inside algorithms - quantum phase estimation (section 4.5) and Shor's period finding (section 5.4) - where the phases feed an inverse QFT and interference turns them back into measurable structure.",
              "Exam framing: write the definition, give the 2-qubit matrix, transform one basis state by hand, and state the gate-count comparison with the 'phases not numbers' caveat. The caveat sentence is what distinguishes a full-marks answer from a naive one. Transform |10> explicitly - column two of the matrix, signs alternating - so the examiner sees the mechanics rather than a quoted result. Then the caveat with its consequence: the QFT is a subroutine whose output must pass through an inverse QFT or interference before anything is measurable.",
            ],
            keyTerms: [
              { term: "QFT", definition: "|x> -> (1/sqrt(N)) sum_y e^(2 pi i x y / N)|y> - the DFT applied to quantum amplitudes." },
              { term: "Phase encoding", definition: "The QFT stores x as one relative phase per output qubit." },
              { term: "Controlled phase rotation", definition: "The circuit's workhorse gate R_k, applying e^(2 pi i / 2^k) conditioned on a control." },
              { term: "Inverse QFT", definition: "The conjugate (reverse) circuit - converts phase patterns back into basis states." },
              { term: "Gate complexity O(n^2)", definition: "n Hadamards + O(n^2) controlled rotations + swaps, versus classical FFT's O(N log N)." },
            ],
            callout: {
              type: "warning",
              title: "Phases, not numbers",
              body: "After the QFT you cannot read y off the register - the information lives in amplitudes' phases, invisible to a Z-measurement. Every practical QFT use ends with an inverse QFT or an interference step that converts phases back into a measurable basis state. Saying this in the exam shows you understand why the QFT is a subroutine, not a stand-alone speedup.",
            },
            bullets: [
              "Definition: |x> -> (1/sqrt(N)) sum_y e^(2 pi i x y / N)|y>; unitary and invertible.",
              "N = 4 matrix: (1/2)[[1,1,1,1],[1,i,-1,-i],[1,-1,1,-1],[1,-i,-1,i]].",
              "QFT|10> = (|00> - |01> + |10> - |11>)/2 - the number 2 became a phase pattern.",
              "Product form: one phase e^(2 pi i 0.x...) per output qubit.",
              "Circuit: H on each qubit + controlled phase rotations + swaps - O(n^2) gates total.",
              "Classical FFT costs O(N log N) - the gap is exponential, but the output is phases, not numbers.",
            ],
            diagram: {
              kind: "flow",
              title: "The QFT circuit in four moves",
              caption: "Hadamards create superpositions; controlled rotations write the phases; swaps fix the bit order.",
              steps: [
                { label: "Input |x>", note: "a computational basis state" },
                { label: "H on each qubit", note: "creates the phase-carrying superpositions" },
                { label: "Controlled rotations R_k", note: "each qubit picks up phases from the qubits below it" },
                { label: "Reverse the order (swaps)", note: "most-significant phase to the top wire" },
                { label: "Output", note: "x encoded as relative phases - read only after an inverse QFT" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "qft.py - the 2-qubit transform, computed",
              code: `import numpy as np

N = 4
QFT = np.array([[np.exp(2j * np.pi * y * x / N) for x in range(N)]
                for y in range(N)]) / 2
ket10 = np.array([0, 0, 1, 0])
out = QFT @ ket10
print(np.round(np.abs(out), 2))        # all 0.5 - uniform magnitudes
print(np.round(out, 2))                # phases: [0.5, -0.5, 0.5, -0.5]`,
            },
            examQuestions: [
              {
                q: "Define the Quantum Fourier Transform. Write its matrix for N = 4, compute QFT|10>, and explain the product (phase-encoding) form of the output. Compare the gate complexity with the classical FFT and state the caveat about reading the result.",
                marks: 14,
                outline: [
                  "Definition: |x> -> (1/sqrt(N)) sum_y e^(2 pi i x y / N)|y>",
                  "N = 4 matrix: (1/2)[[1,1,1,1],[1,i,-1,-i],[1,-1,1,-1],[1,-i,-1,i]]",
                  "QFT|10> = column x = 2 = (1, -1, 1, -1)/2 over |00>...|11>",
                  "Interpretation: the number 2 is stored as alternating phases, not as bits",
                  "Product form: (1/2)(|0> + |1>)(|0> - |1>) up to qubit ordering - one phase per wire",
                  "Circuit cost O(n^2) gates vs classical FFT O(N log N) - exponential asymptotic gap",
                  "Caveat: output is phase information in amplitudes - readable only after an inverse QFT or interference",
                ],
              },
              {
                q: "Why is the QFT called a subroutine rather than a stand-alone algorithm? Name its two major algorithmic consumers.",
                marks: 7,
                outline: [
                  "Its output is phases in amplitudes - not classical numbers",
                  "A Z-measurement after the QFT yields a uniform random string - no information",
                  "The phases must be converted by an inverse QFT plus interference",
                  "Consumer 1: quantum phase estimation (section 4.5)",
                  "Consumer 2: Shor's period finding (section 5.4) - the core of the factoring speedup",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Phase kick-back",
            body: [
              "Phase kick-back is the trick that makes oracles work. Let U have eigenstate |u> with U|u> = e^(i theta)|u>. Feed the target register exactly |u> and run controlled-U: the target is unchanged - it already is an eigenvector - and the control's amplitude picks up the eigenvalue: (a|0> + b|1>)|u> -> (a|0> + b·e^(i theta)|1>)|u>. The phase 'kicks back' from the target onto the control; the target acts as a phase reservoir and the control carries the information onward.",
              "Worked example - CZ. Take control in |+> = (|0> + |1>)/sqrt(2) (after an H) and target in |1>. CZ applies -1 only to |11>: (|0>|1> + |1>|1>)/sqrt(2) -> (|0>|1> - |1>|1>)/sqrt(2) = |->|1>. The eigenvalue -1 of Z has landed on the control. A final H on the control turns |-> into |1> - a deterministic readout - so measuring the control reveals theta = pi with certainty. Replace CZ by controlled-S (eigenvalue i, theta = pi/2) and the control becomes |+i>, whose H-measurement statistics encode theta.",
              "Why it matters: phase oracles are kick-backs. In Deutsch, Deutsch-Jozsa and Grover the target qubit is prepared in |-> = (|0> - |1>)/sqrt(2); since U_f|->|x> = (-1)^f(x)|->|x>, the oracle writes (-1)^f(x) straight onto the input register's amplitudes - no entanglement left behind. And phase estimation (section 4.5) is industrialized kick-back: the powers U^(2^j) write successive binary digits of theta onto a bank of counting qubits.",
              "Exam framing: show the kick-back algebra for a controlled-U on an eigenstate, trace the CZ example to a deterministic measurement, and connect to the |-> oracle trick. Those three moves answer every kick-back question. Write the algebra first - (a|0> + b|1>)|u> -> (a|0> + b e^(i theta)|1>)|u> - because the phase movement is visible in it. The CZ trace then grounds the algebra in gates, and the |-> sentence generalizes it to every oracle in Unit V.",
            ],
            keyTerms: [
              { term: "Phase kick-back", definition: "Controlled-U on an eigenstate target writes the eigenvalue e^(i theta) onto the control." },
              { term: "Eigenstate target", definition: "The reservoir: a state with U|u> = e^(i theta)|u>, unchanged by the operation." },
              { term: "Phase oracle", definition: "U_f|x> = (-1)^f(x)|x> - marking by phase, achieved via the |-> ancilla." },
              { term: "Controlled-U", definition: "The two-qubit gate applying U conditioned on the control (section 3.8)." },
              { term: "Counting qubit", definition: "A control qubit that collects one kicked-back phase digit (used in QPE)." },
            ],
            callout: {
              type: "exam",
              title: "Prepare the target in |->",
              body: "The sentence that answers every oracle question: prepare the ancilla in |-> and U_f becomes a phase (-1)^f(x) on the control - no entanglement, pure phase marking. Without that preparation the oracle entangles input and ancilla instead, and the algorithms of Unit V collapse.",
            },
            bullets: [
              "If U|u> = e^(i theta)|u>, controlled-U leaves |u> intact and writes e^(i theta) onto the control.",
              "CZ example: control |+>, target |1> -> control |->; H then reads it deterministically as 1.",
              "The eigenvalue phase theta became a measurable property of the control.",
              "Oracle trick: target in |-> makes U_f a phase (-1)^f(x) - the Deutsch/DJ/Grover engine.",
              "No entanglement remains - the phase lands on the control, the target stays clean.",
              "QPE is kick-back at scale: U^(2^j) powers write theta's binary digits onto counting qubits.",
            ],
            diagram: {
              kind: "fork",
              title: "What does controlled-U leave behind?",
              caption: "The target's preparation decides everything - eigenstate gives clean kick-back, anything else gives entanglement.",
              start: "Controlled-U with the target prepared in some state",
              branches: [
                { label: "Target in eigenstate |u>", outcome: "clean kick-back: control carries e^(i theta), target unchanged", good: true },
                { label: "Target in |-> with oracle U_f", outcome: "phase (-1)^f(x) kicks back - the Deutsch/DJ/Grover engine", good: true },
                { label: "Target not an eigenstate", outcome: "control and target entangle - no clean phase to read", good: false },
              ],
            },
            table: {
              caption: "Controlled-U · eigenstate · eigenvalue · control after kick-back.",
              headers: ["Gate U", "Eigenstate", "Eigenvalue", "Control |+> becomes"],
              rows: [
                ["Z (via CZ)", "|1>", "-1", "|-> = (|0> - |1>)/sqrt(2)"],
                ["S (via CS)", "|1>", "i", "|+i> = (|0> + i|1>)/sqrt(2)"],
                ["T (via CT)", "|1>", "e^(i pi/4)", "relative phase pi/4"],
              ],
            },
            examQuestions: [
              {
                q: "Explain phase kick-back. Show algebraically that a controlled-U acting on an eigenstate target writes e^(i theta) onto the control, trace the CZ example with control |+> and target |1> to a deterministic measurement, and explain why oracle circuits prepare their ancilla in |->.",
                marks: 14,
                outline: [
                  "Setting: U|u> = e^(i theta)|u>; input (a|0> + b|1>)|u>",
                  "Controlled-U: (a|0> + b e^(i theta)|1>)|u> - the eigenvalue lands on the control",
                  "CZ example: (|0> + |1>)/sqrt(2) ⊗ |1> -> (|0> - |1>)/sqrt(2) ⊗ |1> = |->|1>",
                  "The eigenvalue -1 (theta = pi) now lives on the control",
                  "Final H: |-> -> |1> - a deterministic readout reveals theta",
                  "Oracle circuits: target in |-> gives U_f|x>|-> = (-1)^f(x)|x>|-> - phase marking",
                  "No entanglement remains; the phase rides the control into the next operation",
                ],
              },
              {
                q: "What happens if the target of a controlled-U is not in an eigenstate of U?",
                marks: 7,
                outline: [
                  "U|t> is some superposition of eigenstates, not a pure phase",
                  "Control and target become entangled - the joint state does not factorize",
                  "The control ends in a mixed phase state rather than a clean e^(i theta)",
                  "No well-defined phase is available for the next operation",
                  "This is why oracle and QPE circuits always prepare known eigenstates first",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Quantum phase estimation (QPE)",
            body: [
              "Quantum phase estimation reads an eigenvalue. Given U and an eigenstate |u> with U|u> = e^(2 pi i phi)|u>, QPE estimates the phase phi to t bits of precision. The circuit: a counting register of t qubits plus the eigenstate register; Hadamards on the counting register; controlled-U^(2^j) for j = 0..t-1 - each power kick-backs one binary digit of phi onto one counting qubit (section 4.4); then the inverse QFT (section 4.3) on the counting register; then measurement, which yields an integer s with s/2^t ≈ phi.",
              "Worked example - reading a T gate exactly. Let U = T = diag(1, e^(i pi/4)) with eigenstate |1>, so phi = 1/8. Take t = 3 counting qubits. After the controlled powers, the counting register holds (1/sqrt(8)) sum_y e^(2 pi i y / 8)|y> - a uniform superposition with a precise phase gradient. The inverse QFT converts that gradient into a single spike: the register measures |001> with certainty. Reading: s = 1, so phi = s/2^t = 1/8, and the eigenvalue is e^(2 pi i phi) = e^(i pi/4) - exactly T's eigenvalue on |1>.",
              "Precision and cost: t qubits give phi to 2^-t; to succeed with probability at least 1 - epsilon even when phi is not a neat binary fraction, add extra counting qubits - t = p + ceiling(log2(2 + 1/(2 epsilon))) for p bits of precision with success probability 1 - epsilon. QPE is the quantum core of Shor's algorithm (period finding is QPE on modular multiplication, section 5.4) and of quantum chemistry's ground-state-energy estimates - it is the standard way quantum computers read eigenvalues.",
              "Exam framing: draw the three-stage circuit (Hadamards, controlled powers, inverse QFT), trace the T-gate example to the readout 001, and state the conversion s/2^t -> phi -> eigenvalue. The conversion step is where marks are lost - write it explicitly. Say what each stage contributes: the Hadamards create the trial phases, the controlled powers write phi's binary digits by kick-back, and the inverse QFT concentrates them into one spike. Ending at '|001 was measured' without the conversion leaves the answer uninterpreted.",
            ],
            keyTerms: [
              { term: "Quantum phase estimation", definition: "Estimates the eigenvalue phase phi of U|u> = e^(2 pi i phi)|u> to t bits." },
              { term: "Counting register", definition: "The t qubits that collect kick-back phases and feed the inverse QFT." },
              { term: "Controlled-U^(2^j)", definition: "The j-th power of U applied conditionally - writes binary digit j of phi." },
              { term: "Inverse QFT", definition: "Converts the counting register's phase gradient into a spike at s ≈ phi·2^t." },
              { term: "Precision bits", definition: "t counting qubits give 2^-t resolution; extra qubits buy success probability." },
            ],
            callout: {
              type: "exam",
              title: "Convert the readout explicitly",
              body: "The reading ritual: measured integer s -> phi = s/2^t -> eigenvalue e^(2 pi i phi). For the T-gate example: s = 1, t = 3, phi = 1/8, eigenvalue e^(i pi/4). Answers that stop at '|001 was measured' without the conversion lose the interpretive marks every time.",
            },
            bullets: [
              "Input: U and eigenstate |u> with U|u> = e^(2 pi i phi)|u>; output: phi to t bits.",
              "Circuit: H on t counting qubits -> controlled-U^(2^j) -> inverse QFT -> measure.",
              "Each controlled power kick-backs one binary digit of phi onto one counting qubit.",
              "Worked: U = T, |u> = |1>, phi = 1/8, t = 3 -> counting register reads |001> exactly.",
              "Reading: s = 1 -> phi = 1/8 -> eigenvalue e^(2 pi i /8) = e^(i pi/4).",
              "t = p + ceiling(log2(2 + 1/(2 epsilon))) counting qubits give p bits with success 1 - epsilon.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Phase estimation in five stages",
              caption: "Kick-back writes the phase; the inverse QFT un-scatters it into one measurable integer.",
              stages: [
                { label: "Prepare |u>", note: "an eigenstate of U" },
                { label: "H on t counting qubits", note: "uniform superposition over 2^t values" },
                { label: "Controlled-U^(2^j)", note: "kick-back writes phi's binary digits" },
                { label: "Inverse QFT", note: "phase gradient -> single spike" },
                { label: "Measure counting register", note: "integer s; phi ≈ s/2^t" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "qpe.py - exact QPE for the T gate on |1>, t = 3",
              code: `import numpy as np

t, N = 3, 8
phi = 1 / 8                                  # T|1> = e^{i pi/4}|1> -> phi = 1/8
counting = np.array([np.exp(2j * np.pi * phi * y) for y in range(N)]) / np.sqrt(N)

QFT = np.array([[np.exp(2j * np.pi * y * x / N) for x in range(N)]
                for y in range(N)]) / np.sqrt(N)
iqft = QFT.conj().T                          # inverse QFT
out = iqft @ counting
print(np.abs(out).round(2))                  # spike at index 1 -> '001'
print(int(np.argmax(np.abs(out))))           # 1  ->  phi = 1/8`,
            },
            examQuestions: [
              {
                q: "Explain quantum phase estimation: the registers, the role of each stage, and how the inverse QFT converts phases into a measurable integer. Trace QPE for U = T on |1> with three counting qubits and convert the readout to the eigenvalue.",
                marks: 14,
                outline: [
                  "Goal: read phi from U|u> = e^(2 pi i phi)|u> to t bits",
                  "Stage 1: H on the counting register - uniform superposition over 2^t values",
                  "Stage 2: controlled-U^(2^j) - kick-back writes binary digit j of phi per qubit",
                  "Stage 3: inverse QFT - the phase gradient collapses to a spike",
                  "T-gate trace: phi = 1/8; counting state (1/sqrt(8)) sum e^(2 pi i y/8)|y>",
                  "Inverse QFT -> |001> with certainty; s = 1",
                  "Conversion: phi = s/2^t = 1/8 -> eigenvalue e^(2 pi i phi) = e^(i pi/4) - T's eigenvalue on |1>",
                ],
              },
              {
                q: "How many counting qubits does QPE need, and what does each additional qubit buy?",
                marks: 7,
                outline: [
                  "t qubits resolve phi to 2^-t - t bits of precision",
                  "When phi is not an exact binary fraction, the spike leaks to neighbours",
                  "Extra qubits concentrate the probability on the best t-bit approximation",
                  "Standard bound: t = p + ceiling(log2(2 + 1/(2 epsilon))) for p bits with success >= 1 - epsilon",
                  "Precision and confidence are bought with register width, not with gate quality",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Quantum walks",
            body: [
              "A quantum walk is the quantum analogue of a random walk: instead of a probability distribution hopping from node to node, a quantum amplitude distribution does, and it interferes as it spreads. Two flavours exist. Continuous-time walks evolve the state under the graph's Hamiltonian, |psi(t)> = e^(-i H t)|psi(0)>. Discrete-time (coin) walks alternate a coin unitary - deciding directions in superposition - with a conditional shift along the graph's edges.",
              "The signature difference is spread speed. A classical random walk's variance grows linearly in t, so distance grows as sqrt(t) - diffusive spreading. A quantum walk's variance grows as t^2 - distance grows linearly in t - ballistic spreading, powered by constructive interference at the frontier and destructive interference behind it. The walker is not 'trying all paths at once' in a useful sense until the interference concentrates amplitude where it matters; that is the same lesson as section 1.1.",
              "Worked facts to quote. On the hypercube of dimension n, a continuous-time quantum walk reaches the opposite corner in time O(n) - an exponential hitting-time speedup over the classical walk. Childs and Goldstone showed a continuous-time walk on the hypercube solves unstructured search in O(sqrt(N)) - a quantum walk implementing Grover. Ambainis's element-distinctness algorithm runs in O(N^(2/3)) quantum-walk queries, beating the classical O(N) - the best-known quantum-walk speedup. And Grover's own diffusion step is exactly a quantum walk on the complete graph: the field's algorithms are one family.",
              "Exam framing: define both flavours, contrast classical and quantum spread (sqrt(t) versus t), and quote one speedup fact plus the Grover-as-a-walk unifier. A comparison table carries most of the marks. Choose one speedup fact and state it with numbers - the hypercube hitting time (O(n) versus exponential) or Ambainis's element distinctness (O(N^(2/3)) versus O(N)). Close with the unifier: Grover's diffusion is a walk step on the complete graph, which ties sections 4.2 and 4.6 into one family.",
            ],
            keyTerms: [
              { term: "Quantum walk", definition: "A quantum-mechanical walk on a graph - amplitudes spread and interfere instead of probabilities diffusing." },
              { term: "Continuous-time walk", definition: "Evolution under the graph Hamiltonian: e^(-i H t)." },
              { term: "Coin (discrete) walk", definition: "Alternating a coin unitary and a conditional shift along edges." },
              { term: "Ballistic spread", definition: "Quantum variance grows as t^2 - distance t, versus classical distance sqrt(t)." },
              { term: "Element distinctness", definition: "Ambainis's O(N^(2/3)) quantum-walk algorithm for finding equal elements in a list." },
            ],
            callout: {
              type: "tip",
              title: "Grover is a quantum walk",
              body: "Grover's search is a quantum walk on the complete graph: the diffusion operator reflects amplitude about the mean exactly as a walk step redistributes it. Saying this unifies sections 4.2 and 4.6 into one family and reads as genuine understanding rather than list-learning.",
            },
            bullets: [
              "Two flavours: continuous-time (e^(-i H t)) and discrete-time coin walks.",
              "Classical spread: variance ~ t, distance ~ sqrt(t) - diffusive.",
              "Quantum spread: variance ~ t^2, distance ~ t - ballistic, interference-powered.",
              "Hypercube: continuous-time walk hits the opposite corner in O(n) - exponential classical hitting time.",
              "Childs-Goldstone: walk on the hypercube searches in O(sqrt(N)); Ambainis: element distinctness in O(N^(2/3)).",
              "Grover's diffusion = a walk on the complete graph - one family, many names.",
            ],
            diagram: {
              kind: "compare",
              title: "Classical random walk vs quantum walk",
              caption: "Same graph, different currency - probabilities diffuse, amplitudes interfere.",
              left: {
                heading: "Classical random walk",
                items: [
                  "Probability spreads flat and smooth",
                  "Variance grows ~ t; distance ~ sqrt(t)",
                  "No cancellation - every path adds",
                  "Mixes slowly; sampling-based algorithms",
                ],
              },
              right: {
                heading: "Quantum walk",
                items: [
                  "Amplitudes add and cancel along paths",
                  "Variance grows ~ t^2; distance ~ t",
                  "Interference concentrates the frontier",
                  "Powers search, element distinctness, graph problems",
                ],
              },
            },
            table: {
              caption: "Property · classical walk · quantum walk.",
              headers: ["Property", "Classical walk", "Quantum walk"],
              rows: [
                ["State", "probability distribution", "amplitude vector (superposition)"],
                ["Spread", "variance ~ t, distance ~ sqrt(t)", "variance ~ t^2, distance ~ t"],
                ["Mechanism", "diffusion only", "interference + diffusion"],
                ["Hypercube hitting", "exponential hitting time", "O(n) - exponential speedup"],
                ["Flagship use", "Monte Carlo sampling", "search (Grover), element distinctness"],
              ],
            },
            examQuestions: [
              {
                q: "What is a quantum walk? Distinguish continuous-time and coin (discrete-time) walks, compare the spreading behaviour with a classical random walk, and quote one concrete speedup result achieved by quantum walks.",
                marks: 14,
                outline: [
                  "Definition: quantum amplitudes walk on a graph and interfere",
                  "Continuous-time: evolve under e^(-i H t) with the graph's Hamiltonian",
                  "Coin walk: coin unitary decides directions, conditional shift moves along edges",
                  "Classical: variance ~ t, distance ~ sqrt(t) - diffusive",
                  "Quantum: variance ~ t^2, distance ~ t - ballistic via interference",
                  "Speedup: hypercube hitting in O(n) vs exponential classical; Childs-Goldstone search in O(sqrt(N))",
                  "Ambainis: element distinctness in O(N^(2/3)) queries - the flagship quantum-walk algorithm",
                ],
              },
              {
                q: "Explain the statement 'Grover's algorithm is a quantum walk on the complete graph'.",
                marks: 7,
                outline: [
                  "Grover's state space is the complete graph of N basis states",
                  "The oracle marks one vertex (phase flip) - a walk step conditioned on location",
                  "The diffusion 2|s><s| - I redistributes amplitude about the mean - a walk mixing step",
                  "Alternating mark and mix steps is exactly a coined walk's coin-then-shift structure",
                  "The analogy unifies amplitude amplification (4.2) and quantum walks (4.6)",
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
      title: "Major Algorithms and OSS Toolkits",
      summary:
        "Unit V cashes the earlier units in: Deutsch's and Deutsch-Jozsa's oracle speedups, Grover's quadratic search, Shor's exponential factoring through order finding, and the open-source toolkits - IBM Quantum Experience with Qiskit, Microsoft Q# and Rigetti PyQuil on QPU and QVM - that put the algorithms on real hardware.",
      chapter: {
        number: "05",
        title: "Algorithms and the Toolkits That Run Them",
        intro:
          "Unit V covers Deutsch's algorithm, the Deutsch-Jozsa algorithm, Grover's algorithm and Shor's algorithm, plus the open-source toolkits for implementing quantum programs: IBM Quantum Experience, Microsoft Q# and Rigetti PyQuil (QPU/QVM).",
        inOneBreath:
          "Deutsch decides one bit of f with one query; Deutsch-Jozsa stretches that to n bits against 2^(n-1) + 1 classical queries; Grover searches in O(sqrt(N)) iterations of oracle-plus-diffusion; Shor factors by turning factoring into period finding and reading the period with QPE; IBM Qiskit, Microsoft Q# and Rigetti PyQuil are the three toolkits you must be able to write a Bell circuit in.",
        sections: [
          {
            number: "5.1",
            title: "Deutsch's algorithm",
            body: [
              "Deutsch's problem: an oracle computes f: {0, 1} -> {0, 1}, and f is promised to be either constant (f(0) = f(1)) or balanced (f(0) ≠ f(1)). Decide which. Classically this needs two evaluations - you must look at both inputs. Deutsch's algorithm (1985) decides with ONE evaluation of the oracle: the first quantum algorithm to show a quantum advantage, and the template for everything in this unit.",
              "The circuit and its trace. Prepare |0>|1> and apply H ⊗ H: the control becomes |+> and the target becomes |->. Now evaluate the oracle once. Because the target is |->, the oracle acts as a phase: U_f|x>|-> = (-1)^f(x)|x>|-> (phase kick-back, section 4.4). If f is constant, the control's state acquires only a global sign - still |+>; if f is balanced, the two branches acquire opposite phases and the control becomes |->. A final H on the control converts |+> -> |0> and |-> -> |1>: measuring 0 means constant, 1 means balanced - deterministically, with one query.",
              "Worked trace for the balanced oracle f(x) = x ⊕ 1. Start |0>|1> -> H ⊗ H -> |+>|->. The oracle applies (-1)^(x⊕1) = -(−1)^x: the control becomes (-|0> + |1>)/sqrt(2) = |-> (up to a global sign). Final H: |-> -> |1>. Measured bit: 1 = balanced - correct. For a constant oracle (say f = 1) the control keeps the phase (−1) as a global factor, stays |+>, and measures 0. The entire two-case distinction fits in one oracle call because the phase comparison happens in superposition.",
              "Exam framing: draw the circuit (H, oracle, H), trace both the constant and balanced cases to their measurement outcomes, and state the query comparison 1 versus 2. The |-> ancilla and the kick-back sentence are the conceptual marks. Trace both cases to the measured bit - 0 for constant, 1 for balanced - so the examiner sees the decision, not just the circuit. The mechanism sentence is one line: quantum parallelism evaluates both inputs, and interference converts the phase pattern into that bit.",
            ],
            keyTerms: [
              { term: "Deutsch's problem", definition: "Decide constant vs balanced for f: {0,1} -> {0,1} - one quantum query versus two classical." },
              { term: "Constant vs balanced", definition: "Constant: f(0) = f(1). Balanced: f(0) ≠ f(1) - the promise that makes the problem well-defined." },
              { term: "Quantum parallelism", definition: "Evaluating f(0) and f(1) in superposition within one oracle call." },
              { term: "Phase oracle", definition: "The |-> ancilla converts U_f into the phase (-1)^f(x) - kick-back at work." },
              { term: "Query complexity", definition: "The number of oracle calls - the currency in which the speedup is counted." },
            ],
            callout: {
              type: "tip",
              title: "The |-> ancilla is the whole trick",
              body: "Without preparing the target qubit in |->, U_f entangles input and ancilla and nothing measurable remains. With it, the oracle becomes a pure phase (-1)^f(x) on the control. State that sentence early in the answer - it is the conceptual heart of Deutsch, Deutsch-Jozsa and Grover alike.",
            },
            bullets: [
              "Promise: f is constant (f(0) = f(1)) or balanced (f(0) ≠ f(1)).",
              "Classical cost: 2 evaluations; Deutsch: 1 - the first proven quantum advantage.",
              "Circuit: |0>|1> -> H ⊗ H -> oracle U_f -> H on control -> measure.",
              "Balanced trace (f = x⊕1): control becomes |-> -> measures 1.",
              "Constant trace (f = 1): control stays |+> (global phase only) -> measures 0.",
              "Mechanism: the |-> target turns the oracle into a phase (-1)^f(x) - kick-back, section 4.4.",
            ],
            diagram: {
              kind: "flow",
              title: "Deutsch's circuit, five steps",
              caption: "One oracle call, one interference step, one deterministic bit.",
              steps: [
                { label: "Prepare |0>|1>", note: "control at 0, ancilla at 1" },
                { label: "H on both", note: "control |+>, target |->" },
                { label: "Oracle U_f", note: "phase (-1)^f(x) kicks back to the control" },
                { label: "H on control", note: "|+> -> |0>, |-> -> |1>" },
                { label: "Measure control", note: "0 = constant, 1 = balanced" },
              ],
            },
            table: {
              caption: "Oracle f · type · phase pattern · measured bit.",
              headers: ["Oracle f", "Type", "Phase pattern (-1)^f(x)", "Measured bit"],
              rows: [
                ["f(x) = 0", "constant", "(+1, +1)", "0"],
                ["f(x) = 1", "constant", "(-1, -1) - global phase", "0"],
                ["f(x) = x", "balanced", "(+1, -1)", "1"],
                ["f(x) = x ⊕ 1", "balanced", "(-1, +1)", "1"],
              ],
            },
            examQuestions: [
              {
                q: "State Deutsch's problem and explain his algorithm with a circuit diagram. Trace the algorithm for a balanced oracle (f(x) = x ⊕ 1) and for a constant oracle (f = 1), and compare the number of oracle queries with the classical approach.",
                marks: 14,
                outline: [
                  "Promise: f constant or balanced; decide which - classically needs 2 evaluations",
                  "Circuit: |0>|1> -> H ⊗ H -> U_f -> H on control -> measure",
                  "H ⊗ H gives |+>|->; the |-> target makes U_f a phase (-1)^f(x)",
                  "Balanced trace: opposite phases -> control |-> -> final H gives |1> -> measured 1",
                  "Constant trace: uniform phase is global -> control stays |+> -> |0> -> measured 0",
                  "One oracle call decides - versus two classical evaluations",
                  "Mechanism sentence: quantum parallelism + interference + kick-back",
                ],
              },
              {
                q: "Why does Deutsch's algorithm need the ancilla prepared in |1> before the Hadamards?",
                marks: 7,
                outline: [
                  "H|1> = |-> - the ancilla must end in the X-basis minus state",
                  "Only in |-> does U_f act as a phase: (-1)^f(x) per input branch",
                  "Starting from |0> the ancilla would become |+> and entangle instead",
                  "Entanglement destroys the clean phase comparison on the control",
                  "The final H then converts the control's phase into the deterministic bit",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "The Deutsch-Jozsa algorithm",
            body: [
              "Deutsch-Jozsa scales the promise up: f maps n-bit strings to {0, 1} and is promised constant or balanced (exactly half the inputs give 1). Decide which. Classically the worst case needs 2^(n-1) + 1 evaluations - you must keep sampling until one side of the promise wins. The quantum algorithm answers with ONE evaluation of the oracle, for any n.",
              "The circuit: n input qubits in |0> plus one ancilla in |1>; apply H to all n + 1 qubits (the ancilla becomes |->, so the oracle acts by kick-back as (-1)^f(x)); evaluate the oracle once; apply H to the n input qubits; measure them all. The signature is clean: all zeros means constant; any other string means balanced. The final Hadamards are the interference step - they compare all 2^n phase branches simultaneously.",
              "Worked trace - n = 2, f(x) = x1 ⊕ x2 (balanced). After the oracle the input register holds (1/2) sum_x (-1)^f(x)|x> = (|00> - |01> - |10> + |11>)/2. This factorizes as |-> ⊗ |-> - the phases carry the XOR structure. The final H ⊗ H maps it to |11>: the measured string is '11' ≠ '00', so balanced - decided with one query where the classical worst case for n = 2 is 3 evaluations, and for general n is 2^(n-1) + 1.",
              "Exam framing: draw the layered circuit, state the all-zeros signature, trace the 2-bit balanced example, and give the query comparison 1 versus 2^(n-1) + 1. The factorization of the traced state is the elegant half of the marks. Show it explicitly - (|00> - |01> - |10> + |11>)/2 = |-> ⊗ |-> - because it explains why the final Hadamards produce a sharp |11> instead of a spread. Then the comparison line: one query against 2^(n-1) + 1, a gap that grows exponentially in n.",
            ],
            keyTerms: [
              { term: "Deutsch-Jozsa problem", definition: "f: {0,1}^n -> {0,1} promised constant or balanced; one quantum query decides." },
              { term: "All-zeros signature", definition: "Measure 0...0 -> constant; any other string -> balanced." },
              { term: "Classical worst case", definition: "2^(n-1) + 1 evaluations needed to confirm either promise." },
              { term: "Interference layer", definition: "The final H^N comparing all 2^n phase branches in one step." },
              { term: "Promise problem", definition: "A guarantee restricting the inputs - constant or balanced, nothing in between." },
            ],
            callout: {
              type: "exam",
              title: "All zeros or not - that is the whole output",
              body: "The measurement has two meanings and no third: 0...0 = constant, anything else = balanced. Also remember the ancilla starts in |1>, not |0> - forgetting that breaks the phase oracle and is the most common circuit error in DJ answers.",
            },
            bullets: [
              "Promise: f on n bits is constant or balanced; decide with ONE oracle query.",
              "Classical worst case: 2^(n-1) + 1 evaluations - exponential in n.",
              "Circuit: |0>^n|1> -> H^(n+1) -> oracle -> H^n -> measure the n input qubits.",
              "Ancilla in |1> -> |-> -> the oracle acts as (-1)^f(x) (kick-back).",
              "n = 2 balanced trace: (|00> - |01> - |10> + |11>)/2 = |-> ⊗ |-> -> measures 11.",
              "Signature: all zeros = constant; anything else = balanced.",
            ],
            diagram: {
              kind: "layers",
              title: "The Deutsch-Jozsa circuit as four layers",
              caption: "Prepare, query once, interfere, read - the all-zeros string is the constant signature.",
              layers: [
                { label: "Layer 1 - prepare", note: "|0>^n for inputs, |1> for the ancilla, then H on all" },
                { label: "Layer 2 - the oracle", note: "one query; phases (-1)^f(x) land on the input register" },
                { label: "Layer 3 - interference", note: "H on all input qubits compares the 2^n phase branches" },
                { label: "Layer 4 - readout", note: "measure n bits: all zeros = constant, else balanced" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "dj.py - Deutsch-Jozsa for n = 2 with the XOR oracle",
              code: `import numpy as np

H = np.array([[1, 1], [1, -1]]) / np.sqrt(2)
H2 = np.kron(H, H)

# phase-oracle view: amplitudes (-1)^f(x) for f(x) = x1 XOR x2
phases = np.array([(-1) ** (bin(x).count("1") % 2) for x in range(4)])
state = H2 @ (phases / 2)              # after oracle, before final H
out = H2 @ state                       # final interference layer
print(np.round(np.abs(out) ** 2, 2))   # [0 0 0 1] -> measured '11': balanced`,
            },
            examQuestions: [
              {
                q: "Explain the Deutsch-Jozsa algorithm: the promise, the circuit layers, and the all-zeros signature. Trace the algorithm for n = 2 with the balanced oracle f(x) = x1 ⊕ x2, and state the classical query cost the algorithm beats.",
                marks: 14,
                outline: [
                  "Promise: f constant or balanced on n bits; one quantum query decides",
                  "Circuit: |0>^n|1> -> H^(n+1) -> oracle -> H^n -> measure inputs",
                  "Ancilla |1> -> |-> makes the oracle act as (-1)^f(x) via kick-back",
                  "Balanced n = 2 trace: (|00> - |01> - |10> + |11>)/2 = |-> ⊗ |->",
                  "Final H ⊗ H -> |11>: measured string 11 ≠ 00 -> balanced",
                  "Signature: 0...0 means constant; any other string means balanced",
                  "Classical worst case 2^(n-1) + 1 evaluations - an exponential query gap for one query",
                ],
              },
              {
                q: "Why is Deutsch-Jozsa called a promise problem, and what would happen if f were neither constant nor balanced?",
                marks: 7,
                outline: [
                  "The guarantee excludes functions between the two classes - that is the promise",
                  "The one-query decision is only valid inside the promise",
                  "For an arbitrary f the measured string is probabilistic - no clean signature",
                  "The algorithm would not decide anything; it would sample a distribution",
                  "General functions need the machinery of Grover (section 5.3) instead",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Grover's algorithm",
            body: [
              "Grover's problem is unstructured search: among N = 2^n items, one is marked (the oracle recognizes it), and the task is to find it. Classically this takes N/2 oracle calls on average - the items have no structure to exploit. Grover's algorithm finds the marked item in O(sqrt(N)) oracle calls, a quadratic speedup that is provably optimal: no quantum algorithm can do better than Omega(sqrt(N)) for this problem.",
              "The algorithm is amplitude amplification instantiated (section 4.2). Prepare the uniform superposition |s> = (1/sqrt(N)) sum_x |x>; repeat: the oracle O_f flips the marked amplitude's sign, then the diffusion D = 2|s><s| - I reflects all amplitudes about the mean; after k ≈ (pi/4) sqrt(N) iterations the marked amplitude dominates and measurement succeeds with high probability. Each iteration rotates the state 2theta toward the marked axis, sin(theta) = 1/sqrt(N).",
              "Worked example - N = 4, target |11>. Uniform amplitudes (1/2, 1/2, 1/2, 1/2). Oracle: (1/2, 1/2, 1/2, -1/2). Mean 1/4; diffusion maps a -> 2(1/4) - a: (0, 0, 0, 1). Measuring gives |11> with certainty after exactly one iteration - theta = arcsin(1/2) = 30 degrees and one 60-degree rotation lands on the target. For scale: N = 1024 (10 qubits) needs about 25 iterations against the classical average of 512 queries.",
              "Exam framing: give the three-part structure (prepare, oracle, diffusion), do the N = 4 amplitude trace, state the iteration formula and the optimality remark. The bookkeeping table plus the over-rotation warning is the complete answer. For the trace, show all three stages of arithmetic - flip, mean, reflect - so the (0, 0, 0, 1) endpoint is earned, not asserted. Then scale the point: about 25 iterations for 1024 items against 512 classical queries, and Omega(sqrt(N)) proves nothing better exists.",
            ],
            keyTerms: [
              { term: "Unstructured search", definition: "Find the marked item among N with only an oracle to test candidates." },
              { term: "Grover iteration", definition: "Oracle (phase flip on the marked item) followed by diffusion 2|s><s| - I." },
              { term: "Diffusion operator", definition: "Reflection about the mean amplitude - the interference step." },
              { term: "sqrt(N) speedup", definition: "O(sqrt(N)) oracle calls versus O(N) classically - proven optimal." },
              { term: "Over-rotation", definition: "Iterating past (pi/4) sqrt(N) rotates past the target and lowers success." },
            ],
            callout: {
              type: "warning",
              title: "One iteration is exact for N = 4",
              body: "With four items, a single Grover iteration turns the uniform state into the marked state with certainty - and a second iteration rotates past it, dropping success back to 1/4. The formula k ≈ (pi/4) sqrt(N) exists to stop at the optimum; quoting it without the over-rotation caveat loses the interpretive mark.",
            },
            bullets: [
              "Problem: find the marked item among N = 2^n using only oracle tests.",
              "Structure: prepare uniform |s> -> repeat [oracle, diffusion] -> measure.",
              "Oracle: flips the marked amplitude's sign (phase marking via |->, section 4.4).",
              "Diffusion D = 2|s><s| - I: reflect every amplitude about the mean.",
              "N = 4 trace: (1/2 x4) -> (-1/2, 1/2, 1/2, 1/2) -> (0, 0, 0, 1) - certain success in one iteration.",
              "General k ≈ (pi/4) sqrt(N): N = 1024 needs ~25 iterations vs ~512 classical queries - optimal.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Grover's algorithm in five stages",
              caption: "Spread the amplitudes, mark the answer, amplify it - then measure.",
              stages: [
                { label: "Prepare |s>", note: "uniform superposition over all N items" },
                { label: "Oracle O_f", note: "flip the marked amplitude's sign" },
                { label: "Diffusion D", note: "2|s><s| - I - reflect about the mean" },
                { label: "Repeat k ≈ (pi/4) sqrt(N)", note: "each pass rotates 2theta toward the target" },
                { label: "Measure", note: "the marked item with high probability" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "grover.py - one Grover iteration on two qubits, target |11>",
              code: `import numpy as np

s = np.ones(4) / 2                        # uniform superposition
oracle = np.diag([1, 1, 1, -1])           # flips the sign of |11>
marked = oracle @ s                       # phase-marked amplitudes
diffused = 2 * marked.mean() - marked     # reflect about the mean
print(np.round(diffused, 2))              # [0 0 0 1] -> measure |11> surely`,
            },
            examQuestions: [
              {
                q: "Explain Grover's algorithm: the oracle, the diffusion operator, and the iteration count. Perform the full amplitude trace for N = 4 with the marked item |11>, and discuss why the O(sqrt(N)) query complexity is optimal and what happens with too many iterations.",
                marks: 14,
                outline: [
                  "Prepare |s> = (1/sqrt(N)) sum |x>",
                  "Oracle O_f: sign flip on the marked amplitude (phase marking)",
                  "Diffusion D = 2|s><s| - I: reflection about the mean",
                  "N = 4 trace: (1/2,1/2,1/2,1/2) -> (-1/2,1/2,1/2,1/2) -> (0,0,0,1)",
                  "Measuring after one iteration yields |11> with certainty",
                  "General k ≈ (pi/4) sqrt(N) iterations - quadratic speedup, proven optimal",
                  "Over-iteration rotates past the target: a second pass on N = 4 drops success to 1/4",
                ],
              },
              {
                q: "How does Grover's oracle avoid entangling the input register with the ancilla?",
                marks: 7,
                outline: [
                  "The ancilla is prepared in |-> = (|0> - |1>)/sqrt(2)",
                  "U_f|x>|-> = (-1)^f(x)|x>|-> - pure phase per branch (kick-back, section 4.4)",
                  "The marked branch acquires -1; the ancilla is unchanged",
                  "No input-ancilla entanglement remains after the oracle call",
                  "The phase marks are what the diffusion step then amplifies",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Shor's algorithm",
            body: [
              "Shor's algorithm factors an N-bit composite number in polynomial time - an exponential speedup over the best known classical methods, and the reason post-quantum cryptography exists. The insight is a reduction: factoring N = p·q reduces to order finding. Pick a random a coprime to N and find the order r - the smallest positive integer with a^r ≡ 1 (mod N). When r is even, a^(r/2) is a square root of 1 modulo N, and the factors emerge from ordinary gcd arithmetic: gcd(a^(r/2) - 1, N) and gcd(a^(r/2) + 1, N).",
              "The quantum part is period finding by phase estimation (sections 4.4-4.5). Build the modular-multiplication unitary U_a|x> = |a·x mod N>; the state |1> is a superposition-over-periods eigenstate whose eigenphase encodes s/r for some s. QPE on U_a with t ≈ 2n counting qubits returns s/2^t; continued fractions on that ratio recover the denominator r. The expensive circuit piece is modular exponentiation - controlled multiplications by a, a^2, a^4, ... - which is where most of Shor's qubits and gates live.",
              "Worked example - N = 15, a = 7. Powers: 7^1 = 7, 7^2 = 49 ≡ 4, 7^3 = 28 ≡ 13, 7^4 = 91 ≡ 1 (mod 15) - so r = 4. QPE would return phases 0, 1/4 or 3/4 (the fractions s/r with s = 0, 1, 3); continued fractions turn 1/4 into r = 4. Then a^(r/2) = 7^2 = 49, and gcd(49 - 1, 15) = gcd(48, 15) = 3 while gcd(49 + 1, 15) = gcd(50, 15) = 5 - the factors 3 and 5, as promised. If r had been odd, or a^(r/2) ≡ -1 (mod N), retry with a different a.",
              "Exam framing: state the reduction (factoring -> order finding), sketch the QPE circuit for U_a, run the N = 15, a = 7 example end to end, and note the retry conditions. Attributing the gcd step to the quantum computer is the classic misattribution - the quantum part finds r; the factors come from classical arithmetic. Keep that boundary visible in the answer's structure: quantum means period finding, classical means everything else.",
            ],
            keyTerms: [
              { term: "Order finding", definition: "The smallest r with a^r ≡ 1 (mod N) - the periodicity QPE reads." },
              { term: "Continued fractions", definition: "The classical post-processing that recovers r from the measured ratio s/2^t." },
              { term: "Modular exponentiation", definition: "Controlled multiplications implementing U_a|x> = |a·x mod N> - Shor's circuit bulk." },
              { term: "Exponential speedup", definition: "Polynomial-time quantum factoring versus super-polynomial best classical methods." },
              { term: "RSA impact", definition: "Shor breaks RSA and related schemes - the driver of post-quantum cryptography." },
            ],
            callout: {
              type: "exam",
              title: "The quantum part finds r, not the factors",
              body: "Shor's quantum core is order finding: QPE returns the phase s/r and continued fractions recover r. The factors come afterwards from classical gcd(a^(r/2) ± 1, N). Answers that say 'the quantum computer computes gcd' have misattributed the pipeline - keep the quantum/classical boundary explicit.",
            },
            bullets: [
              "Reduction: factoring N -> order finding: find r with a^r ≡ 1 (mod N).",
              "Quantum core: QPE on U_a|x> = |a·x mod N> returns the phase s/r.",
              "Classical finish: continued fractions recover r; gcd(a^(r/2) - 1, N) and gcd(a^(r/2) + 1, N) give factors.",
              "Worked N = 15, a = 7: 7, 4, 13, 1 (mod 15) -> r = 4.",
              "Then 7^2 = 49: gcd(48, 15) = 3 and gcd(50, 15) = 5 - factored.",
              "Retry conditions: r odd, or a^(r/2) ≡ -1 (mod N) - pick another a.",
            ],
            diagram: {
              kind: "fork",
              title: "After QPE returns the phase s/r",
              caption: "The measured fraction either yields the order or sends you back to choose another a.",
              start: "QPE measured phase s/r for N = 15, a = 7",
              branches: [
                { label: "s/r = 1/4", outcome: "r = 4; 7^2 = 49; gcd(48, 15) = 3, gcd(50, 15) = 5 - factored", good: true },
                { label: "s/r = 3/4", outcome: "same reduced fraction - r = 4 again; the factors repeat", good: true },
                { label: "r odd", outcome: "a^(r/2) undefined as an integer power - retry with another a", good: false },
                { label: "a^(r/2) ≡ -1 (mod N)", outcome: "both gcds would equal N - retry with another a", good: false },
              ],
            },
            table: {
              caption: "Powers of a = 7 modulo 15.",
              headers: ["x", "7^x", "7^x mod 15"],
              rows: [
                ["1", "7", "7"],
                ["2", "49", "4"],
                ["3", "343", "13"],
                ["4", "2401", "1  <- order r = 4"],
              ],
            },
            examQuestions: [
              {
                q: "Explain Shor's algorithm: the reduction from factoring to order finding, the role of phase estimation and continued fractions, and the classical finishing step. Run the algorithm for N = 15 with a = 7 and give the factors.",
                marks: 14,
                outline: [
                  "Factoring N reduces to finding r with a^r ≡ 1 (mod N)",
                  "Quantum core: QPE on U_a|x> = |a·x mod N> returns phase s/r",
                  "Modular exponentiation (controlled multiplications) is the circuit bulk",
                  "Continued fractions on s/2^t recover the denominator r",
                  "N = 15, a = 7: powers 7, 4, 13, 1 -> r = 4",
                  "a^(r/2) = 49; gcd(49 - 1, 15) = 3 and gcd(49 + 1, 15) = 5",
                  "Retry if r is odd or a^(r/2) ≡ -1 (mod N); the quantum part finds r, gcds are classical",
                ],
              },
              {
                q: "Why does Shor's algorithm threaten RSA, and what does the threat actually depend on?",
                marks: 7,
                outline: [
                  "RSA's security rests on the hardness of factoring large semiprimes",
                  "Shor factors in polynomial time - an exponential speedup",
                  "The threat needs a fault-tolerant machine with millions of physical qubits",
                  "Today's noisy devices cannot run full Shor for cryptographic key sizes",
                  "Hence the migration to post-quantum (lattice-based) cryptography already under way",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "The oracle model and the speedup ladder",
            body: [
              "Deutsch, Deutsch-Jozsa and Grover are oracle problems: the function f arrives as a black-box unitary U_f, and the cost being counted is the number of oracle queries. The model's virtue is cleanliness - it separates what the quantum computer saves (queries) from how the oracle is built (a compile-time question) - and it is the setting in which the speedups of this unit are proven statements rather than empirical impressions.",
              "The ladder, from top to bottom. Shor: exponential - polynomial-time factoring against super-polynomial best classical methods, with real cryptographic consequences because the oracle (modular multiplication) is efficiently implementable. Grover: quadratic - O(sqrt(N)) against O(N), proven optimal, useful for any searchable predicate. Deutsch-Jozsa: exponential query gap (1 versus 2^(n-1) + 1) but on a promise problem that rarely arises naturally. Deutsch: a constant-factor win - 1 query versus 2 - valuable as the first proof that quantum queries can beat classical ones at all.",
              "The honest caveat that completes the comparison: an oracle speedup matters only if the oracle itself is efficiently implementable. For Grover's search the oracle is cheap (a predicate check in superposition), but the quadratic speedup may or may not survive the overhead in practice; for Shor the oracle's structure (periodicity) is exactly what the QFT exploits, which is why the exponential class needs structure while the quadratic class needs none. BQP - the class of problems solvable efficiently quantumly - sits between the classical classes, and this ladder is the syllabus's window into it.",
              "Exam framing: rank the four algorithms by query complexity in one table (problem, classical cost, quantum cost, speedup class), then add the oracle-implementability caveat. The comparative structure is what the examiner rewards. The table forces the honest ranking - Deutsch, Deutsch-Jozsa, Grover, Shor in increasing significance - and the caveat keeps it credible: a speedup over a black box counts only when the box is buildable. One closing sentence on BQP positions the whole ladder.",
            ],
            keyTerms: [
              { term: "Oracle / query model", definition: "Cost is counted as calls to a black-box unitary U_f." },
              { term: "Query complexity", definition: "The number of oracle calls - Deutsch 1 vs 2; DJ 1 vs 2^(n-1)+1; Grover sqrt(N) vs N." },
              { term: "Promise problem", definition: "A guarantee (constant/balanced) restricting the input space." },
              { term: "BQP", definition: "The class of problems efficiently solvable by quantum computers with bounded error." },
              { term: "Oracle implementability", definition: "A speedup counts only if U_f itself is efficiently constructible." },
            ],
            callout: {
              type: "tip",
              title: "Rank in a table, then add the caveat",
              body: "Four rows - Deutsch, Deutsch-Jozsa, Grover, Shor - with columns problem, classical queries, quantum queries, speedup class. Then one caveat line: oracle speedups are real only when the oracle is efficiently implementable. That two-part structure answers the comparison question completely.",
            },
            bullets: [
              "Deutsch: 1 query vs 2 - the constant-factor proof of principle.",
              "Deutsch-Jozsa: 1 vs 2^(n-1) + 1 - exponential gap on a promise problem.",
              "Grover: O(sqrt(N)) vs O(N) - quadratic, proven optimal, structure-free.",
              "Shor: polynomial vs super-polynomial - exponential, needs periodic structure.",
              "Caveat: an oracle speedup counts only if U_f is efficiently implementable.",
              "BQP is the quantum analogue of BPP - the ladder sketches where it beats the classical classes.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The speedup ladder",
              caption: "From proof-of-principle to cryptographic impact - narrower classes of problem buy bigger speedups.",
              tiers: [
                { label: "Exponential - Shor", note: "poly vs super-poly; periodic structure + QFT" },
                { label: "Quadratic - Grover", note: "sqrt(N) vs N; optimal, no structure needed" },
                { label: "Constant factor - Deutsch", note: "1 query vs 2; the first advantage proven" },
                { label: "Framework value - Deutsch-Jozsa", note: "teaches the oracle pattern the others reuse" },
              ],
            },
            table: {
              caption: "Algorithm · problem · classical cost · quantum cost · speedup.",
              headers: ["Algorithm", "Problem", "Classical cost", "Quantum cost", "Speedup"],
              rows: [
                ["Deutsch", "constant vs balanced (1 bit)", "2 evaluations", "1", "constant factor"],
                ["Deutsch-Jozsa", "constant vs balanced (n bits)", "2^(n-1) + 1", "1", "exponential (promise problem)"],
                ["Grover", "unstructured search of N items", "N/2 average", "O(sqrt(N))", "quadratic, optimal"],
                ["Shor", "factoring / order finding", "super-polynomial best known", "polynomial", "exponential, real impact"],
              ],
            },
            examQuestions: [
              {
                q: "Compare Deutsch's, Deutsch-Jozsa's, Grover's and Shor's algorithms in the oracle model: state each problem, the classical and quantum query costs, and the speedup class. Explain why oracle implementability matters for the speedups to be real.",
                marks: 14,
                outline: [
                  "Oracle model: cost counted as calls to the black-box U_f",
                  "Deutsch: 1 query vs 2 - constant-factor proof of principle",
                  "Deutsch-Jozsa: 1 vs 2^(n-1) + 1 - exponential gap on a promise problem",
                  "Grover: O(sqrt(N)) vs O(N) - quadratic and proven optimal",
                  "Shor: polynomial vs super-polynomial - exponential with cryptographic impact",
                  "Caveat: speedups count only if the oracle is efficiently implementable",
                  "Structure note: exponential speedups need exploitable structure (periodicity); quadratic ones need none",
                ],
              },
              {
                q: "Why is Deutsch-Jozsa's exponential query gap considered less significant than Grover's quadratic one?",
                marks: 7,
                outline: [
                  "DJ applies only to functions satisfying the constant/balanced promise",
                  "Real inputs rarely satisfy such promises - the problem class is artificial",
                  "Grover works for any verifiable predicate - universally applicable",
                  "Grover's cost model (oracle = a predicate check) matches realistic search",
                  "Significance tracks applicability, not just the size of the gap",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "IBM Quantum Experience and Qiskit",
            body: [
              "IBM Quantum Experience opened in May 2016 as the first cloud-accessed quantum computer: a five-qubit superconducting processor anyone could program from a browser, with the Composer - a drag-and-drop circuit editor - as its face. Today the platform is the Qiskit ecosystem: an open-source Python SDK with circuit construction, transpilation, simulators and free access to real backends, including 100+-qubit Eagle-class devices on an open plan.",
              "The working loop is the same as Unit IV's programming model. Build a QuantumCircuit, add gates (h, cx, measure), transpile to the backend's native basis (typically rz, sx, x, cx) and coupling map, then run - on a simulator for free iteration or on a QPU for real, noisy statistics. Results return as a counts dictionary over classical bit strings, built from the requested number of shots. Qiskit Runtime adds managed primitives - Sampler for distributions and Estimator for expectation values - with error mitigation applied server-side.",
              "Worked example - the Bell experiment. Two qubits, H on qubit 0, CNOT(0, 1), measure both, 1024 shots. On the statevector simulator the counts are '00' and '11' in roughly equal halves and '01'/'10' essentially never - the section 3.4 correlation, now as data. On a real backend the same circuit shows small leaks into '01'/'10' from readout and gate error, which is exactly why mitigation and many shots exist.",
              "Exam framing: write the Bell-state Qiskit snippet, explain shots and counts, and mention transpilation and the Composer. Quoting expected counts ('00' ≈ '11' ≈ 512, others ≈ 0) shows you connect code to physics. Add the one-line interpretation: only '00' and '11' appear because the Bell pair is correlated, and the equal split is the 50/50 randomness of section 3.4. Mentioning the small '01'/'10' leaks on real hardware shows you know noise when you see it.",
            ],
            keyTerms: [
              { term: "IBM Quantum Experience", definition: "The 2016 cloud service that put a real quantum processor behind a browser." },
              { term: "Composer", definition: "The drag-and-drop circuit editor of the original Quantum Experience." },
              { term: "Qiskit", definition: "IBM's open-source Python SDK - circuits, transpilation, simulators, real backends." },
              { term: "Transpilation", definition: "Rewriting circuits into the backend's native gates and coupling map." },
              { term: "Counts", definition: "The shots-histogram of measured bit strings a job returns." },
            ],
            callout: {
              type: "tip",
              title: "Read the counts like a physicist",
              body: "For the Bell circuit say: '00' and '11' about half each over 1024 shots, '01' and '10' essentially never - that sentence connects the code to the entanglement of section 3.4. On real hardware, small '01'/'10' counts are gate and readout error, which is precisely what error mitigation addresses.",
            },
            bullets: [
              "IBM Quantum Experience (May 2016): first cloud quantum computer; the Composer UI.",
              "Qiskit today: open-source Python SDK with simulator and real-backend access.",
              "Loop: build circuit -> transpile to native basis (rz, sx, x, cx) + coupling map -> run -> counts.",
              "Bell circuit: h(0); cx(0,1); measure_all; 1024 shots -> '00' and '11' about half each.",
              "Qiskit Runtime primitives: Sampler (distributions) and Estimator (expectation values).",
              "Open plan grants free access to 100+-qubit Eagle-class devices.",
            ],
            diagram: {
              kind: "layers",
              title: "The IBM/Qiskit stack",
              caption: "From browser notebook to dilution refrigerator - the platform mirrors Unit III's architecture.",
              layers: [
                { label: "Composer / Jupyter", note: "write circuits - drag-and-drop or Qiskit Python" },
                { label: "Qiskit transpiler", note: "native gate basis + device coupling map" },
                { label: "Cloud runtime", note: "job scheduling, Sampler/Estimator primitives, mitigation" },
                { label: "Backend", note: "simulator or superconducting QPU (Eagle/Osprey class)" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "bell_ibm.py - a Bell pair in Qiskit",
              code: `from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator

qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])

sim = AerSimulator()
counts = sim.run(transpile(qc, sim), shots=1024).result().get_counts()
print(counts)   # ~ {'00': 512, '11': 512} - never '01' or '10'`,
            },
            examQuestions: [
              {
                q: "Describe the IBM Quantum Experience and the Qiskit ecosystem. Write the Qiskit code for a Bell-state circuit with measurement, state the expected counts for 1024 shots, and explain the roles of transpilation and the Composer.",
                marks: 14,
                outline: [
                  "Quantum Experience: May 2016, first cloud quantum computer, five qubits",
                  "Composer: the drag-and-drop circuit editor - programming without code",
                  "Qiskit: open-source Python SDK - circuits, transpiler, simulators, real backends",
                  "Bell code: QuantumCircuit(2, 2); h(0); cx(0, 1); measure",
                  "Expected counts over 1024 shots: '00' ≈ '11' ≈ 512; '01', '10' ≈ 0",
                  "Transpilation: rewrite to native gates (rz, sx, x, cx) and the device coupling map",
                  "Real backends add noise - small '01'/'10' leaks, addressed by mitigation and shots",
                ],
              },
              {
                q: "What do Qiskit's Sampler and Estimator primitives do, and why were they introduced?",
                marks: 7,
                outline: [
                  "Sampler: returns quasi-probability distributions over measurement outcomes",
                  "Estimator: returns expectation values of observables with error bars",
                  "Both run inside Qiskit Runtime with server-side error mitigation",
                  "They separate 'what to compute' from 'how to mitigate noise'",
                  "Users write physics-level programs; the runtime handles device-level detail",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Microsoft Q# and the QDK",
            body: [
              "Q# is Microsoft's domain-specific language for quantum programming, shipped with the Quantum Development Kit (QDK). Its design point: quantum operations are first-class citizens of a strongly typed classical language. Qubits are managed resources allocated in use blocks and automatically released; measurements return a Result type with exactly two values, Zero and One; and the compiler enforces qubit lifetime rules that make resource errors compile-time errors rather than silent bugs.",
              "A minimal Bell pair in Q#: operation PrepareBell() : (Result, Result) { use (q0, q1) = (Qubit(), Qubit()); H(q0); CNOT(q0, q1); return (M(q0), M(q1)); }. Reading it: the use statement allocates two qubits in |0>; H and CNOT entangle them (section 3.4's circuit, verbatim); M measures each qubit, returning correlated Results. The same operation runs unchanged against different targets - the full-state simulator, the open-systems (noisy) simulator, the resource estimator, or Azure Quantum hardware.",
              "The QDK's distinguishing tools: the resource estimator counts gates, qubit width and depth before any hardware exists - essential for algorithms like Shor whose cost is the whole question; the simulators cover pure states, noise and tracing; and the language integrates with .NET, Python and Jupyter so classical pre/post-processing (Unit IV's model) lives in the same project. Azure Quantum is the cloud front door, submitting Q# programs to Microsoft and partner hardware.",
              "Exam framing: write the Q# Bell snippet (use block, H, CNOT, M), name the QDK's simulators and the resource estimator, and state the design point - qubits as managed resources with Result-typed measurements. The snippet is short enough to write verbatim from memory, and the use block is the line graders scan for. Close with the targets sentence: the same operation runs on the simulators, the resource estimator or Azure Quantum hardware, unchanged.",
            ],
            keyTerms: [
              { term: "Q#", definition: "Microsoft's typed quantum programming language, part of the QDK." },
              { term: "QDK", definition: "The Quantum Development Kit - compiler, simulators, resource estimator." },
              { term: "Result (Zero/One)", definition: "Q#'s measurement outcome type - the only values M returns." },
              { term: "Resource estimator", definition: "Counts gates, qubits and depth for a program before hardware exists." },
              { term: "Azure Quantum", definition: "Microsoft's cloud service submitting Q# programs to real and simulated targets." },
            ],
            callout: {
              type: "warning",
              title: "use blocks are not optional",
              body: "Q# qubits live inside use blocks and are returned to the pool at the end - a bare Qubit() outside use is a compile error, and a qubit used after its block ends is too. Writing the use statement correctly in exam snippets is free syntax marks; forgetting it costs the whole code section.",
            },
            bullets: [
              "Q# + QDK: a typed language where quantum operations are first-class.",
              "Qubits are managed resources: allocated in use blocks, auto-released.",
              "M(q) returns Result Zero or One - measurement outcomes are typed values.",
              "Bell snippet: use (q0, q1) = (Qubit(), Qubit()); H(q0); CNOT(q0, q1); return (M(q0), M(q1)).",
              "Same code runs on full-state/noisy simulators, the resource estimator, or Azure Quantum.",
              "The resource estimator counts qubits and gates before hardware exists - Shor-scale planning.",
            ],
            diagram: {
              kind: "flow",
              title: "A Q# program's journey",
              caption: "One operation, four interchangeable targets - the compiler keeps hardware behind the interface.",
              steps: [
                { label: "Write the operation", note: "use blocks, gates, M measurements" },
                { label: "QDK compiles", note: "type-checks qubit lifetimes and Result flow" },
                { label: "Simulate", note: "full-state, noisy, or trace simulator" },
                { label: "Estimate resources", note: "gate count, qubit width, depth" },
                { label: "Submit to Azure Quantum", note: "run on provider hardware" },
              ],
            },
            codeExample: {
              language: "qsharp",
              caption: "Bell.qs - a correlated pair in Q#",
              code: `namespace Demo {
    open Microsoft.Quantum.Intrinsic;

    operation PrepareBell() : (Result, Result) {
        use (q0, q1) = (Qubit(), Qubit());   // both start in |0>
        H(q0);                                // superpose the control
        CNOT(q0, q1);                         // entangle the pair
        return (M(q0), M(q1));                // correlated Zero/One results
    }
}`,
            },
            examQuestions: [
              {
                q: "Describe Microsoft's Q# language and the Quantum Development Kit. Write a Q# operation that prepares a Bell pair and measures both qubits, and explain the role of use blocks, the Result type and the resource estimator.",
                marks: 14,
                outline: [
                  "Q#: a strongly typed quantum language; QDK: compiler + simulators + estimator",
                  "Qubits are managed resources - allocated in use blocks, auto-released after",
                  "M(q) returns Result Zero or One - measurements are typed values",
                  "Snippet: use (q0, q1) = (Qubit(), Qubit()); H(q0); CNOT(q0, q1); return (M(q0), M(q1))",
                  "The results are perfectly correlated - the section 3.4 Bell statistics",
                  "Resource estimator: counts gates/qubits/depth before hardware exists",
                  "Targets are interchangeable: simulators (pure/noisy) or Azure Quantum hardware",
                ],
              },
              {
                q: "Why does Q# make qubit lifetime a compile-time constraint rather than a runtime convention?",
                marks: 7,
                outline: [
                  "Qubits are expensive, physical resources - leaks waste real hardware",
                  "Runtime conventions catch leaks only when the program is already running",
                  "Compile-time use blocks make leaks impossible to compile",
                  "The type system also channels measurements through Result - no raw bits",
                  "The design point: quantum code as a first-class part of a classical program",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Rigetti PyQuil and the QPU/QVM",
            body: [
              "Rigetti's Forest stack runs quantum programs through four pieces: PyQuil, the Python client; Quil, the quantum instruction language that serves as the portable intermediate representation; quilc, the compiler; and two execution targets - the QVM (Quantum Virtual Machine, a cloud simulator) and the QPU (the real superconducting chip). One Quil program runs identically on either target; the only difference between development and hardware is the connection string.",
              "A minimal program: from pyquil import Program; from pyquil.gates import H, CNOT, MEASURE; prog = Program(); prog += H(0); prog += CNOT(0, 1); prog += MEASURE(0, 0); prog += MEASURE(1, 1); then qc = get_qc('2q-qvm') and qc.run(prog, trials=100). The results are 100 trials of two correlated bits - the Bell statistics again, this time through Quil. Switching get_qc('2q-qvm') to a QPU address sends the same compiled Quil to physical qubits, where gate and readout noise appear in the histogram.",
              "Why the QPU/QVM split matters: development happens on the QVM - free, fast, exactly reproducible - and hardware time is spent only on circuits already debugged. Because Quil is an explicit instruction language (every gate is a line of text), programs are portable, inspectable and easy to version; because the compiler (quilc) targets Rigetti's native gates, the same portability holds across chip generations. The design lesson for the exam: simulator-first development with a hardware-agnostic IR is the pattern all three toolkits converge on.",
              "Exam framing: name the Forest components (PyQuil, Quil, quilc, QVM/QPU), write the PyQuil Bell program with trials, and contrast QVM and QPU. The 'same program, both targets' sentence is the design point examiners want. Write the four program lines and the trials argument - the correlated counts are the physics half of the answer. Then the design sentence in full: one Quil program, two targets, and the only difference on hardware is noise, which is why mitigation and shots exist.",
            ],
            keyTerms: [
              { term: "PyQuil", definition: "Rigetti's Python client for building and running quantum programs." },
              { term: "Quil", definition: "The quantum instruction language - the portable IR of the Forest stack." },
              { term: "QVM", definition: "The Quantum Virtual Machine - Rigetti's cloud simulator." },
              { term: "QPU", definition: "Rigetti's physical superconducting processor." },
              { term: "Forest", definition: "The full Rigetti stack: PyQuil, Quil, quilc compiler, QVM and QPU." },
            ],
            callout: {
              type: "tip",
              title: "Develop on QVM, deploy on QPU",
              body: "The exam-ready formulation: one Quil program, two targets - debug free on the QVM, then swap the connection string to run on the QPU, where noise appears. The portability comes from Quil being an explicit instruction-level IR. Name that design point and the toolkit question is answered conceptually as well as syntactically.",
            },
            bullets: [
              "Forest stack: PyQuil (Python), Quil (IR), quilc (compiler), QVM (simulator), QPU (hardware).",
              "Bell program: Program(); H(0); CNOT(0, 1); MEASURE(0, 0); MEASURE(1, 1).",
              "Execution: get_qc('2q-qvm').run(prog, trials=100) - 100 correlated bit pairs.",
              "QVM: free, fast, exactly reproducible development; QPU: real noise and readout error.",
              "Same Quil runs on both - the connection string is the only change.",
              "quilc compiles to Rigetti's native gates, keeping programs portable across chip generations.",
            ],
            diagram: {
              kind: "compare",
              title: "QVM vs QPU - same program, different physics",
              caption: "Development and deployment split cleanly because Quil is a portable instruction language.",
              left: {
                heading: "QVM (virtual machine)",
                items: [
                  "Cloud simulator - exact or noise-modelled",
                  "Free and fast - iterate without queues",
                  "Deterministic seeds for reproducibility",
                  "Where every circuit is debugged first",
                ],
              },
              right: {
                heading: "QPU (physical chip)",
                items: [
                  "Real superconducting qubits",
                  "Gate and readout noise visible in the histogram",
                  "Queue time and reservation windows",
                  "Research-grade results with mitigation",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "bell_rigetti.py - a Bell pair in PyQuil",
              code: `from pyquil import Program, get_qc
from pyquil.gates import H, CNOT, MEASURE

prog = Program()
prog += H(0)              # superpose qubit 0
prog += CNOT(0, 1)        # entangle the pair
prog += MEASURE(0, 0)     # read qubit 0 into register 0
prog += MEASURE(1, 1)     # read qubit 1 into register 1

qc = get_qc("2q-qvm")     # swap the address for a QPU - same program
results = qc.run(prog, trials=100)
print(results.readout_counts)   # 00 and 11 dominate`,
            },
            examQuestions: [
              {
                q: "Describe Rigetti's Forest stack and the roles of PyQuil, Quil, the QVM and the QPU. Write a PyQuil program that prepares and measures a Bell pair, and explain what changes (and what does not) when moving from QVM to QPU.",
                marks: 14,
                outline: [
                  "Forest: PyQuil client + Quil IR + quilc compiler + QVM/QPU targets",
                  "PyQuil: Python API building Quil programs",
                  "Quil: explicit instruction language - portable and versionable",
                  "Bell program: H(0); CNOT(0, 1); MEASURE(0, 0); MEASURE(1, 1)",
                  "Run: get_qc('2q-qvm').run(prog, trials=100) - correlated outcomes",
                  "QVM -> QPU: only the connection string changes; the Quil is identical",
                  "On the QPU the histogram gains gate/readout noise - mitigation and shots apply",
                ],
              },
              {
                q: "Why does Rigetti route all programs through an intermediate language (Quil) instead of compiling Python directly to hardware?",
                marks: 7,
                outline: [
                  "An IR decouples user code from hardware specifics",
                  "quilc can retarget new chip generations without touching user programs",
                  "Explicit instruction text is inspectable, diffable and versionable",
                  "The same program runs on QVM (development) and QPU (deployment)",
                  "Simulator-first development with portable IR is the pattern all toolkits converge on",
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
        { topic: "Bell states, circuits and the gate zoo (H, S, T, CNOT, SWAP)", weight: "12-14 marks", note: "Draw the circuit, trace the state after each gate, tabulate the measurement outcomes." },
        { topic: "Qubit states, bra-ket notation, Bloch sphere, superposition, entanglement", weight: "8-10 marks", note: "Definitions plus one worked state each - and the normalization check every time." },
        { topic: "Matrix algebra: unitarity, Kronecker products, projectors, eigenvalues", weight: "8-10 marks", note: "Prove U^dagger U = I for a given gate; compute one Kronecker product; one eigensystem." },
        { topic: "Phase kick-back and quantum phase estimation", weight: "8-10 marks", note: "The T-gate trace reads 001; convert explicitly s/2^t -> phi -> e^(2 pi i phi)." },
        { topic: "Deutsch and Deutsch-Jozsa", weight: "7-8 marks", note: "One circuit, two traces, the all-zeros signature - the |-> ancilla is the trick." },
        { topic: "Grover's algorithm with the 2-qubit amplitude trace", weight: "7-10 marks", note: "1/2 -> -1/2 -> 1 in one iteration; k ≈ (pi/4) sqrt(N); quote the over-rotation caveat." },
        { topic: "Shor's algorithm and order finding", weight: "7-8 marks", note: "N = 15, a = 7 end to end: r = 4, gcd(48, 15) = 3, gcd(50, 15) = 5." },
        { topic: "Platform architecture, programming model and the three toolkits", weight: "6-8 marks", note: "The four-layer stack plus one Bell snippet each in Qiskit, Q# and PyQuil." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for circuit tracing. Every algorithm in this subject is short enough to run by hand - Deutsch's two gates, Grover's single iteration, QPE's three counting qubits - and hand-tracing the state vectors is exactly what the mark scheme pays for.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - motivation, players and the qubit toolkit", tasks: ["Motivation: exponential state space, Feynman/Deutsch arguments, speedup classes", "Players table: IBM, Google, Microsoft, Rigetti, D-Wave - gate model vs annealing", "Qubit and multi-qubit state vectors; the normalization check every time", "Bra-ket notation and Bloch-sphere conversions in both directions", "Superposition interference trace; the entanglement factorization test on three states"] },
        { week: "Week 2", focus: "Unit II - the linear algebra beneath the qubits", tasks: ["Basis vectors and orthonormality; express one state in two bases", "Inner products, Hilbert spaces, Cauchy-Schwarz with one numeric overlap", "Kronecker products by hand: X ⊗ I and I ⊗ X applied to |01>", "Unitarity proofs: X^2 = I, H^2 = I, S^dagger S = I", "Projectors + Born rule; eigenvectors of X and Z; ket-bra derivations of gate actions"] },
        { week: "Week 3", focus: "Unit III part 1 - representation, measurement, Bell states", tasks: ["Platform layer stack with one hardware number per layer", "Valid vs invalid superpositions; repair by renormalization", "The factorization test on |01>, Phi+ and the uniform state", "Bell-state creation trace: |00> -> H -> CNOT -> Phi+", "Measurement: Born probabilities, the H-then-Z trick, shots and collapse"] },
        { week: "Week 4", focus: "Unit III part 2 + Unit IV opening - gates and the programming model", tasks: ["Pauli actions including Y|0> = i|1>; verify X^2 = Y^2 = Z^2 = I", "Phase ladder trace: |0> -> H -> S -> T -> H", "CNOT/CZ matrices; SWAP = three CNOTs; the Deutsch gate one-liner", "Programming model: classical steps, quantum steps, moving data, no-cloning", "Amplitude amplification bookkeeping for N = 4, M = 1"] },
        { week: "Week 5", focus: "Unit IV - the four core techniques", tasks: ["QFT matrix for N = 4; transform |10> by hand; the O(n^2) gate count", "Phase kick-back: CZ on |+>|1> traced to a deterministic readout", "QPE for the T gate: counting register reads 001; convert s/2^t -> phi", "Precision rule: t = p + ceiling(log2(2 + 1/(2 eps))) counting qubits", "Quantum walks: the two flavours, spread comparison, one speedup fact"] },
        { week: "Week 6", focus: "Unit V - algorithms and toolkits + full revision", tasks: ["Deutsch's circuit traced for both oracle classes", "Deutsch-Jozsa n = 2 traced to the '11' outcome", "Grover: the one-iteration trace + iteration formula + optimality remark", "Shor: N = 15, a = 7 end to end (r = 4; gcds give 3 and 5)", "One Bell snippet in each toolkit - Qiskit, Q#, PyQuil - then two full model papers"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every algorithm with a circuit diagram and a state-vector trace - the trace is half the marks.",
        "Write the normalization check sum |c_i|^2 = 1 after every state vector you produce.",
        "Use the one-line factorization test c00·c11 = c01·c10 to classify any two-qubit state.",
        "For gate questions, write the matrix and multiply one basis state - never just assert the action.",
        "Trace circuits step by step (state after each gate), not only the final state.",
        "For QPE answers, convert explicitly: measured integer s -> phi = s/2^t -> eigenvalue e^(2 pi i phi).",
        "In toolkit questions give runnable syntax - h(0); cx(0,1) in Qiskit, H(q0); CNOT(q0,q1) in Q#, H(0); CNOT(0,1) in PyQuil - rather than prose.",
        "Time-box: 7-mark questions under 12 minutes, 14-mark under 25 - and attempt every unit before polishing any.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "The last day is for re-tracing the six core circuits by hand on blank sheets: Bell-state creation, Deutsch's circuit, the Deutsch-Jozsa n = 2 case, Grover's one-iteration bookkeeping, QPE for the T gate, and the N = 15 order-finding table. Each takes under ten minutes once learned, and together they anchor most of the paper's marks. After that, skim every diagram in these notes once - the platform stack, the Bloch-sphere landmarks, the amplification loop, the QPE pipeline - because diagram marks are the cheapest marks on the paper.",
        "Then close the book and restate the five one-liners the subject reduces to: states are normalized complex vectors and only relative phase is physical; evolution is unitary and reversible; measurement is Born rule plus renormalized collapse; oracles work because the |-> ancilla turns functions into phases; and every speedup is interference - wrong answers cancel. If those sentences come out cleanly, the framework of every answer is already in place and the remaining hours are better spent sleeping than cramming.",
      ],
      bullets: [
        "Writing (1/2)|0> + (1/2)|1> as a valid state - the squared amplitudes sum to 1/2; normalize first.",
        "Confusing global phase (invisible, e^(i gamma)) with relative phase (physical, measurable in another basis).",
        "Dropping the i in Y|0> = i|1> - X is the pure bit flip; Y carries phases.",
        "Drawing CNOT before H when building Bell states - the order that entangles is H then CNOT.",
        "Starting the Deutsch/DJ ancilla in |0> instead of |1> - the oracle must see |-> after the Hadamards.",
        "Quoting log2(N) Grover iterations - the count is (pi/4) sqrt(N), and for N = 4 it is exactly one.",
        "Saying Shor's quantum part computes the factors - it finds the order r; the gcds are classical.",
        "Reading QPE output as an angle directly - convert s/2^t to phi, then to e^(2 pi i phi).",
        "Calling D-Wave a gate-model machine - it is quantum annealing for optimization.",
      ],
    },
  ],
};
