/**
 * Academics - RGPV B.Tech VIII Semester AIML subject: AL-802(D) Quantum Computing.
 *
 * Structure mirrors the other academic subjects: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a diagram,
 * key terms, a callout, a code sample or table, and three exam-style questions
 * (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const al802d: AcademicSubject = {
  id: "al-802-d",
  code: "AL-802(D)",
  title: "Quantum Computing",
  semester: "VIII Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-802(D): quantum foundations, math toolkit, gates and circuits, quantum algorithms, programming and landscape - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk from the why of quantum computing - the limits of classical scaling and the qubit's richer information content - through the linear-algebra toolkit of amplitudes, vector states, tensor products and unitary evolution, into the gate and circuit model with worked matrices for X, H, CNOT and friends, then through the landmark algorithms of Deutsch-Jozsa, Bernstein-Vazirani, Grover and Shor, and finally out into the Qiskit workflow, NISQ-era hardware, error correction, BB84 quantum cryptography and the post-quantum outlook. Every section pairs the formal statement with ASCII state-vector math, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#c084fc",
  emoji: "QC",
  unitCount: 5,
  totalSections: 30,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Why Quantum Computing",
      summary:
        "Unit I explains why anyone bothers with quantum computing at all. The classical scaling that drove fifty years of progress has hit atomic-scale and thermodynamic walls, and simulating quantum systems on classical hardware costs an exponential 2^n in amplitudes. A qubit carries information differently from a bit, and pairs of qubits can be entangled into correlations no classical distribution reproduces. The unit closes by correcting the 'quantum parallelism' myth and surveying the history, application domains and current state of the hardware.",
      chapter: {
        number: "01",
        title: "Why Quantum Computing",
        intro:
          "Unit I sets the stage. Moore's law is slowing as transistors approach atomic sizes; classical simulation of quantum systems is exponentially expensive because the state space grows as 2^n. A bit holds one of two values; a qubit is a normalized two-dimensional complex vector that can be in a superposition of |0> and |1>, but measurement collapses it to one classical outcome. Entanglement is a non-classical correlation: measuring one qubit of an entangled pair instantly determines the other. 'Quantum parallelism' is a myth - algorithms gain advantage from interference, not parallel branches. A brief history from Feynman to today's superconducting devices locates the field.",
        inOneBreath:
          "Moore's law slowed as transistors approached atomic sizes and Dennard scaling ended around 2004, capping clock rates near 3-4 GHz. Simulating n interacting quantum particles costs 2^n amplitudes, so 50 qubits already need 10^15 numbers and 100 qubits exceed all classical storage. A bit holds one of two values; a qubit is a normalized complex vector a|0> + b|1> with |a|^2 + |b|^2 = 1, and measurement collapses it to one outcome. Entanglement is a non-classical correlation where measuring one qubit of a Bell pair instantly fixes the other. 'Quantum parallelism' is a myth - algorithms gain advantage from interference, not from running branches in parallel. Feynman proposed the idea in 1981, Shor demonstrated factoring in 1994, and today's IBM and Google devices sit in the NISQ era with 50-1000 noisy qubits targeting cryptography, chemistry, optimization and sampling applications.",
        sections: [
          {
            number: "1.1",
            title: "Classical scaling and Moore's law - the three walls",
            body: [
              "Moore's law doubled transistor counts every two years from 1971 to roughly 2012, while Dennard scaling - the matching drop in power per transistor - ended around 2004. Subsequent chips still shrink, but clock rates stalled near 3-4 GHz because the thermal wall prevents faster switching. As transistor dimensions fall below a few nanometres, quantum tunnelling lets electrons leak across gates, so the binary distinction between 0 and 1 blurs. The classical recipe of 'smaller, faster, cheaper' has run into physics, and architects now extend performance through more cores, specialized accelerators and domain-specific architectures rather than faster single threads.",
              "Even if classical chips kept doubling, some problems remain intractable. Simulating n interacting spin-1/2 particles needs a state vector of length 2^n: 50 particles need 2^50 about 10^15 complex numbers, far beyond main memory; 100 particles exceed every hard drive on earth. Feynman's 1981 observation was that a computer built from quantum ingredients might simulate quantum systems naturally, because its own state space grows the same way. The simulation wall is the deep motivation for the field - not a general-purpose speed-up, but a structural advantage for one broad class of problems.",
              "Quantum computing does not accelerate arbitrary classical workloads. It offers structured speed-ups for specific tasks - factoring, unstructured search, Hamiltonian simulation, linear algebra - by exploiting amplitudes and interference, while leaving most programs at classical speeds. The exam-correct framing is that quantum computers extend rather than displace classical ones: even with a mature quantum accelerator, a laptop's web browser still runs on silicon. Three walls frame the motivation - the physical wall of atomic transistors, the thermodynamic wall of heat, and the simulation wall of 2^n amplitudes - and the rest of the syllabus answers the third by building a machine whose state space grows as 2^n.",
            ],
            bullets: [
              "Moore's law: transistor count doubled every ~2 years from 1971 to ~2012; Dennard scaling ended around 2004.",
              "Thermal wall: clock rates capped near 3-4 GHz because power density would melt the die.",
              "Atomic wall: at few-nanometre nodes, quantum tunnelling leaks charge across gates, blurring 0 and 1.",
              "Simulation wall: n qubits need a state vector of 2^n amplitudes; 100 qubits outclass all classical storage.",
              "Feynman 1981: proposed a quantum-mechanical computer to simulate quantum systems efficiently.",
              "Quantum speed-ups are problem-specific - not a uniform accelerator for all classical workloads.",
              "Three walls: physical (atoms), thermodynamic (heat), simulation (2^n amplitudes).",
            ],
            table: {
              caption: "Classical scaling milestones and the walls they hit.",
              headers: ["Era", "Feature size", "Clock speed", "Wall encountered"],
              rows: [
                ["1971 Intel 4004", "10 um", "750 kHz", "none yet"],
                ["2003 Pentium 4", "90 nm", "3.0 GHz", "thermal (Dennard ends)"],
                ["2015 Skylake", "14 nm", "~3.5 GHz turbo", "atomic leakage rising"],
                ["2023 production node", "3 nm", "~4 GHz", "tunnelling dominates"],
                ["100-qubit simulation", "n/a", "n/a", "2^100 amplitudes"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Three walls that ended easy classical scaling",
              caption: "Each wall forced a different response - the simulation wall motivates quantum computing.",
              steps: [
                { label: "Dennard ends (~2004)", note: "thermal wall caps clock" },
                { label: "Atomic-scale leakage (~2012+)", note: "physical wall" },
                { label: "Exponential quantum simulation cost", note: "simulation wall" },
                { label: "Feynman 1981: build a quantum computer", note: "match the 2^n growth" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam framing",
              body: "RGPV questions on 'why quantum computing' want the three walls - Dennard, atomic, simulation - and the 2^n state-space argument with a concrete number: 50 qubits need about 10^15 amplitudes, 100 qubits exceed global storage. End with Feynman 1981 and the caveat that quantum speed-ups are problem-specific, not a universal accelerator.",
            },
            keyTerms: [
              { term: "Moore's law", definition: "The empirical observation that transistor count per die doubled roughly every two years, slowing after 2012." },
              { term: "Dennard scaling", definition: "The rule that power density stays constant as transistors shrink; it ended around 2004, capping clock rates near 3-4 GHz." },
              { term: "Simulation wall", definition: "The exponential cost 2^n of classically simulating n quantum particles; the core motivation for quantum computing." },
              { term: "Quantum tunnelling", definition: "Leakage of charge across a barrier that classical physics forbids; it sets the lower bound on transistor size." },
            ],
            examQuestions: [
              {
                q: "Explain why classical computing is approaching fundamental physical limits and how this motivates quantum computing. Support your answer with the 2^n state-space argument and at least one quantitative example.",
                marks: 7,
                outline: [
                  "Define Moore's law and Dennard scaling; state that Dennard scaling ended around 2004.",
                  "Describe the thermal wall: clock rates cap at 3-4 GHz to avoid melting.",
                  "Describe the atomic wall: at few-nm nodes, quantum tunnelling causes charge leakage.",
                  "Describe the simulation wall: a state of n qubits needs 2^n complex amplitudes.",
                  "Give the quantitative example: 50 qubits need about 10^15 amplitudes; 100 qubits exceed all classical storage.",
                  "Cite Feynman 1981: simulate quantum systems with a quantum computer.",
                  "Conclude that quantum speed-ups are problem-specific, not a replacement for classical computing.",
                ],
              },
              {
                q: "Estimate the memory required to store the full state vector of a 30-qubit system, assuming 16 bytes per complex amplitude.",
                marks: 3,
              },
              {
                q: "Name the three walls that ended easy classical scaling.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "The qubit - information content vs the classical bit",
            body: [
              "A classical bit is a deterministic binary variable that takes one of two values, 0 or 1, and n bits store exactly n bits of information. A qubit is mathematically a unit vector in a two-dimensional complex vector space, written |psi> = a|0> + b|1> where a and b are complex amplitudes satisfying |a|^2 + |b|^2 = 1. The two basis states |0> and |1> correspond to the classical bit values, but the qubit can also occupy any normalized superposition of the two. Geometrically, every pure qubit state maps to a point on the Bloch sphere with polar angle theta and azimuthal angle phi.",
              "Measurement is the bridge back to the classical world. When a qubit in state a|0> + b|1> is measured in the computational basis, the result is 0 with probability |a|^2 and 1 with probability |b|^2; the post-measurement state collapses to whichever outcome was observed. So although the qubit carries two complex amplitudes, a single measurement yields only one classical bit. Recovering the amplitudes reliably requires many copies of the same state and many measurements - the basis of quantum state tomography, which is exponentially expensive in the number of qubits.",
              "The information content of n qubits is subtle. The state space has dimension 2^n, so 2^n - 1 complex numbers specify a pure state - yet only n classical bits can be extracted by a single measurement. The gap between state-space size and accessible output is the engine of quantum algorithms: the amplitudes can interfere during evolution, but the algorithm must be cleverly designed so that constructive interference amplifies the desired answer's amplitude before measurement. A bare superposition that is simply measured yields a random bit; the algorithm's job is to bend that randomness toward a useful answer.",
            ],
            bullets: [
              "Bit: 0 or 1; n bits store n bits of information.",
              "Qubit: a|0> + b|1> with |a|^2 + |b|^2 = 1; a unit vector in C^2.",
              "Bloch sphere: every pure single-qubit state is a point (theta, phi) on the unit sphere.",
              "Measurement: result 0 with probability |a|^2, 1 with probability |b|^2; state collapses to the outcome.",
              "n qubits need 2^n amplitudes to specify, but a single measurement yields only n bits.",
              "No-cloning: a qubit cannot be copied (Unit III); tomography needs exponentially many copies.",
              "The 2^n amplitude space is a workspace for interference, not a parallel computer.",
            ],
            table: {
              caption: "Bits vs qubits - the information content contrast.",
              headers: ["Aspect", "Classical bit", "Qubit"],
              rows: [
                ["State values", "0 or 1", "a|0> + b|1>, with |a|^2 + |b|^2 = 1"],
                ["Storage of n units", "n bits", "2^n complex amplitudes"],
                ["Single readout", "the stored value", "one bit, with probability |a|^2 or |b|^2"],
                ["Copy", "trivial (x = y)", "forbidden by no-cloning theorem"],
                ["Determine state", "read it", "tomography: exponentially many copies"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Classical bit vs quantum bit",
              caption: "Same two basis values, but the qubit lives on the surface of a sphere and yields one bit per measurement.",
              left: {
                heading: "Classical bit",
                items: [
                  "Two values: 0 or 1",
                  "n bits hold n bits of information",
                  "Read returns the stored value",
                  "Copy is trivial: x = y",
                  "State known by inspection",
                ],
              },
              right: {
                heading: "Qubit",
                items: [
                  "Two basis values plus any normalized superposition",
                  "n qubits need 2^n amplitudes to describe",
                  "Measurement collapses to 0 with prob |a|^2 or 1 with prob |b|^2",
                  "Copy is forbidden by no-cloning",
                  "Recovering state needs tomography",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Surviving the parallelism temptation",
              body: "Always pair the line 'n qubits need 2^n amplitudes' with 'but one measurement yields n bits'. Examiners reward students who flag this gap explicitly. The 2^n amplitude space is a workspace for interference, not a parallel computer.",
            },
            keyTerms: [
              { term: "Qubit", definition: "A unit vector in a two-dimensional complex Hilbert space, written a|0> + b|1> with |a|^2 + |b|^2 = 1." },
              { term: "Computational basis", definition: "The orthonormal basis {|0>, |1>} corresponding to the classical bit values." },
              { term: "Bloch sphere", definition: "A geometric representation of a single-qubit pure state as a point on the unit sphere with angles theta and phi." },
              { term: "Measurement collapse", definition: "The projection of a qubit onto |0> or |1> with probabilities |a|^2 and |b|^2 respectively." },
              { term: "Tomography", definition: "The process of reconstructing an unknown quantum state from many repeated measurements on identical copies." },
            ],
            examQuestions: [
              {
                q: "Define a qubit as a mathematical object and contrast it with a classical bit on storage, readout, copying and state determination. Use the formula |a|^2 + |b|^2 = 1 and explain why n qubits need 2^n amplitudes yet yield only n bits per measurement.",
                marks: 7,
                outline: [
                  "Define a bit: 0 or 1, n bits store n bits of information.",
                  "Define a qubit as a|0> + b|1> with complex amplitudes and |a|^2 + |b|^2 = 1.",
                  "State the Bloch sphere representation with angles theta and phi.",
                  "Describe measurement: result 0 with probability |a|^2, 1 with probability |b|^2; collapse.",
                  "Explain that n qubits need 2^n amplitudes but a single measurement gives only n bits.",
                  "Note no-cloning forbids copying; tomography needs exponentially many copies.",
                  "Conclude: the 2^n space is a workspace for interference, not parallel computation.",
                ],
              },
              {
                q: "A qubit is in state (1/2)|0> + (sqrt(3)/2)|1>. Give the probabilities of measuring 0 and 1.",
                marks: 3,
              },
              {
                q: "Sketch the Bloch sphere and mark the points corresponding to |0>, |1> and |+>.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Superposition intuition with worked examples",
            body: [
              "Superposition is the linear combination of basis states with complex amplitudes. The canonical two examples are the Hadamard basis states |+> = (1/sqrt(2))(|0> + |1>) and |-> = (1/sqrt(2))(|0> - |1>), both normalized because |1/sqrt(2)|^2 + |1/sqrt(2)|^2 = 1. Measuring |+> in the computational basis yields 0 or 1 with equal probability 1/2; measuring |-> yields the same distribution because |(-1)/sqrt(2)|^2 = 1/2. So |+> and |-> are indistinguishable by a single computational-basis measurement, yet they are distinct states that the Hadamard gate converts into |0> and |1> respectively.",
              "Two-qubit superpositions generalize the same idea. The uniform superposition over four basis states is (1/2)(|00> + |01> + |10> + |11>), produced by applying H to both qubits of |00>. Each outcome has probability 1/4. A superposition need not be uniform: |psi> = sqrt(1/2)|00> + sqrt(1/3)|01> + sqrt(1/6)|11> is valid if the squared amplitudes sum to 1 - here 1/2 + 1/3 + 1/6 = 1. Worked check: 0.500 + 0.333 + 0.167 = 1.000, so the state is normalized; measurement returns 00 with probability 0.5, 01 with 0.333, 11 with 0.167, and never 10.",
              "Superposition alone does not deliver speed-up. A uniform superposition of n qubits, prepared by H tensor n applied to |0> tensor n, gives an equal-amplitude state over 2^n basis values - but measuring it returns a uniformly random value, no better than a classical coin flip. The power comes from evolving this superposition through gates whose amplitudes interfere constructively at the answer and destructively elsewhere, then measuring. The exam-correct statement is: superposition expands the state space; interference patterns the amplitudes; measurement reads one outcome.",
            ],
            bullets: [
              "Superposition: a|0> + b|1> with complex a, b and |a|^2 + |b|^2 = 1.",
              "Hadamard basis: |+> = (|0>+|1>)/sqrt(2), |-> = (|0>-|1>)/sqrt(2); both normalized.",
              "|+> and |-> give identical measurement distributions but are distinct (distinguishable via H).",
              "Two-qubit uniform: (1/2)(|00> + |01> + |10> + |11>) from H tensor H on |00>.",
              "Non-uniform example: sqrt(1/2)|00> + sqrt(1/3)|01> + sqrt(1/6)|11>; verify sum of squares = 1.",
              "Uniform n-qubit state: amplitudes 1/sqrt(2^n) on each of 2^n basis states.",
              "Superposition alone gives random measurement; interference is the actual speed-up source.",
            ],
            codeExample: {
              language: "python",
              caption: "Build and measure the |+> state in Qiskit-style pseudo-code.",
              code: `
# Build a 1-qubit superposition |+> = (|0> + |1>) / sqrt(2)
qc = QuantumCircuit(1, 1)
qc.h(0)              # Hadamard on |0> produces |+>
qc.measure(0, 0)     # collapse to 0 or 1 with prob 1/2 each
counts = run(qc, shots=1000)
# Expected: {'0': ~500, '1': ~500} - quantum randomness in action
print(counts)
`,
            },
            diagram: {
              kind: "layers",
              title: "From bit to qubit to superposition",
              caption: "Each layer adds degrees of freedom - and measurement peels them back.",
              layers: [
                { label: "Classical bit", note: "{0, 1}" },
                { label: "Basis qubit", note: "|0> or |1>" },
                { label: "Single-qubit superposition", note: "a|0> + b|1>" },
                { label: "Two-qubit superposition", note: "sum over |00>, |01>, |10>, |11>" },
                { label: "n-qubit superposition", note: "2^n amplitudes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Probability check before you finish",
              body: "Before writing any superposition answer, verify |a_0|^2 + |a_1|^2 + ... = 1. Examiners deduct marks for unnormalized states. For |+> the check is 1/2 + 1/2 = 1; for an n-qubit uniform state, 2^n times (1/2^n) = 1.",
            },
            keyTerms: [
              { term: "Superposition", definition: "A linear combination a|0> + b|1> of basis states with complex coefficients satisfying the normalization constraint." },
              { term: "Hadamard basis", definition: "The orthonormal pair {|+>, |->} where |+> = (|0> + |1>)/sqrt(2) and |-> = (|0> - |1>)/sqrt(2)." },
              { term: "Uniform superposition", definition: "A state with all amplitudes equal in magnitude, typically 1/sqrt(2^n) for n qubits." },
              { term: "Interference", definition: "The additive combination of complex amplitudes that lets constructive terms grow the answer's probability and destructive terms shrink wrong answers." },
            ],
            examQuestions: [
              {
                q: "Explain superposition with worked examples for one and two qubits. Show that |+> and |-> yield the same measurement distribution in the computational basis yet are distinct states, and state why superposition alone does not give a quantum speed-up.",
                marks: 7,
                outline: [
                  "Define superposition as a|0> + b|1> with |a|^2 + |b|^2 = 1.",
                  "Derive |+> = (|0> + |1>)/sqrt(2) and |-> = (|0> - |1>)/sqrt(2); show both normalize.",
                  "Show |+> and |-> give the same measurement distribution (1/2, 1/2).",
                  "Explain they are distinct because the Hadamard gate maps |+> to |0> and |-> to |1>.",
                  "Generalize to two qubits: (1/2)(|00> + |01> + |10> + |11>) from H tensor H on |00>.",
                  "Work a non-uniform example: sqrt(1/2)|00> + sqrt(1/3)|01> + sqrt(1/6)|11>; verify sum of squares = 1.",
                  "Conclude: superposition expands the state space, but speed-up needs interference to amplify the answer.",
                ],
              },
              {
                q: "Normalize the state 3|0> + 4|1> and give the probability of measuring 1.",
                marks: 3,
              },
              {
                q: "Write the two-qubit uniform superposition produced by applying H to both qubits of |00>.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Entanglement intuition - Bell states and correlations",
            body: [
              "Entanglement is a non-classical correlation between qubits whose joint state cannot be written as a tensor product of individual qubit states. The canonical example is the Bell state |Phi+> = (1/sqrt(2))(|00> + |11>): the amplitudes on |00> and |11> are non-zero, but |01> and |10> are absent, so the state cannot be factored as (a|0> + b|1>) tensor (c|0> + d|1>). Measuring the first qubit yields 0 or 1 with probability 1/2 each; whichever outcome appears, the second qubit is guaranteed to give the same outcome when measured in the same basis.",
              "The correlation is stronger than any classical distribution can reproduce. A classical source could send correlated pairs (00 or 11) with probability 1/2 each, but to do so it must pre-decide which pair to send - a hidden variable. Bell's theorem shows that no such pre-shared strategy can match the quantum correlations when measurements are taken in multiple bases, an inequality experimentally violated to many standard deviations since Aspect's 1982 tests. The violation confirms the correlations arise from the entangled state, not from pre-existing classical information.",
              "Entanglement is prepared by gates. Starting from |00>, apply H to the first qubit to obtain |+>|0> = (1/sqrt(2))(|00> + |10>), then apply CNOT with the first qubit as control and the second as target. CNOT flips the target only when the control is 1, turning |10> into |11> and leaving |00> untouched; the result is (1/sqrt(2))(|00> + |11>) = |Phi+>. Two qubits that were independent now share a state that cannot be described separately - the operational signature of entanglement.",
            ],
            bullets: [
              "Entanglement: a multi-qubit state that cannot be factored as a tensor product of single-qubit states.",
              "Bell state |Phi+> = (|00> + |11>)/sqrt(2); canonical maximally entangled pair.",
              "Measuring one qubit of |Phi+> fixes the other: outcomes always match.",
              "Bell's theorem: no local hidden-variable theory reproduces quantum correlations.",
              "Aspect 1982 and later experiments violate Bell inequalities to many standard deviations.",
              "Preparation circuit: H on qubit 0 of |00>, then CNOT(0, 1) yields |Phi+>.",
              "No-communication theorem: entanglement alone cannot transmit information; a classical channel is required.",
            ],
            codeExample: {
              language: "python",
              caption: "Prepare a Bell state in Qiskit-style pseudo-code.",
              code: `
# Build |Phi+> = (|00> + |11>) / sqrt(2) from |00>
qc = QuantumCircuit(2, 2)
qc.h(0)            # |00> -> (|00> + |10>) / sqrt(2)
qc.cx(0, 1)        # CNOT: |10> -> |11>, |00> unchanged
qc.measure([0, 1], [0, 1])
counts = run(qc, shots=1000)
# Expected: {'00': ~500, '11': ~500}; '01' and '10' never appear
print(counts)
`,
            },
            diagram: {
              kind: "fork",
              title: "Measuring one qubit of a Bell pair",
              caption: "The first measurement result fixes the second - no signal travels, but the correlation is guaranteed.",
              start: "Bell state |Phi+> = (|00> + |11>) / sqrt(2)",
              branches: [
                { label: "Alice measures 0", outcome: "Bob will measure 0 with probability 1", good: true },
                { label: "Alice measures 1", outcome: "Bob will measure 1 with probability 1", good: true },
                { label: "Alice measures in Hadamard basis", outcome: "Correlation extends to |+> / |-> basis too", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "No faster-than-light signalling",
              body: "Entanglement does not transmit information. Although Bob's outcome is correlated with Alice's, Bob's local measurement looks uniformly random until Alice tells him her result over a classical channel. The no-communication theorem preserves special relativity; any answer claiming instantaneous signalling loses all marks.",
            },
            keyTerms: [
              { term: "Entanglement", definition: "A multi-qubit state that cannot be written as a tensor product of individual qubit states, exhibiting correlations stronger than any classical distribution." },
              { term: "Bell state", definition: "One of four maximally entangled two-qubit states; |Phi+> = (|00> + |11>)/sqrt(2) is the canonical example." },
              { term: "Bell's theorem", definition: "No local hidden-variable theory can reproduce the correlations predicted by quantum mechanics; experimentally confirmed since Aspect 1982." },
              { term: "No-communication theorem", definition: "Entanglement alone cannot transmit information between separated observers; a classical channel is required." },
            ],
            examQuestions: [
              {
                q: "Define entanglement and prove that the Bell state |Phi+> = (1/sqrt(2))(|00> + |11>) cannot be written as a tensor product of two single-qubit states. Outline the circuit that prepares it and explain why the correlations violate any local hidden-variable model.",
                marks: 7,
                outline: [
                  "Define entanglement as a non-factorable multi-qubit state.",
                  "Assume |Phi+> = (a|0> + b|1>) tensor (c|0> + d|1>); expand to ac|00> + ad|01> + bc|10> + bd|11>.",
                  "Match coefficients with (|00> + |11>)/sqrt(2): ad = 0 and bc = 0 force a contradiction.",
                  "Conclude |Phi+> is entangled.",
                  "Outline the circuit: H on qubit 0 of |00>, then CNOT(0, 1).",
                  "Show H produces (|00> + |10>)/sqrt(2) and CNOT converts |10> to |11>.",
                  "Cite Bell's theorem: the measured correlations exceed any local hidden-variable bound; Aspect 1982 confirmed it experimentally.",
                ],
              },
              {
                q: "Apply CNOT(0, 1) to the state |+>|0> and give the resulting state.",
                marks: 3,
              },
              {
                q: "State the no-communication theorem in one sentence.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "The quantum parallelism myth corrected",
            body: [
              "The most persistent popular myth about quantum computing is that a quantum computer evaluates a function f on every input simultaneously and so achieves exponential parallelism. The accurate statement is narrower. A unitary oracle U_f acting on a uniform superposition produces (1/sqrt(2^n)) sum over x of |x>|f(x)> in one application - so the amplitudes for all 2^n inputs are indeed present. But measurement collapses the register to a single x and a single f(x), yielding one of 2^n outcomes with equal probability 1/2^n. Without further structure, this is no better than classical random sampling.",
              "Quantum algorithms earn their advantage from interference, not parallel branches. After the oracle, additional gates arrange amplitudes so that constructive interference piles probability onto the desired answer and destructive interference cancels wrong answers. Deutsch-Jozsa (Unit IV) uses a Hadamard on the control register after the oracle so that constant and balanced functions leave distinguishable patterns. Grover rotates the state vector toward the marked item by a small angle each iteration. Shor uses the quantum Fourier transform to convert a periodic amplitude pattern into spikes at the period.",
              "The operational lesson is that quantum speed-up requires a clever arrangement of interference. A quantum algorithm is a unitary circuit whose final amplitudes encode the answer with high probability; the algorithm designer's job is to choose gates so that the answer's amplitude grows and the rest cancel. Quantum parallelism as a marketing phrase obscures this design discipline; the exam-correct phrase is 'amplitude evaluation followed by interference followed by measurement'. Without all three steps, the exponential state space is wasted.",
            ],
            bullets: [
              "Quantum parallelism: misleading phrase; amplitudes for all inputs are present but only one outcome is observed.",
              "Oracle on uniform superposition writes 2^n amplitudes in one step - but measurement yields one outcome.",
              "Interference: constructive on the answer, destructive on wrong answers - the actual source of speed-up.",
              "Deutsch-Jozsa: Hadamard after oracle distinguishes constant from balanced.",
              "Grover: diffusion operator rotates amplitude toward the marked item.",
              "Shor: quantum Fourier transform converts periodic amplitudes to spikes at the period.",
              "Three-step framing: superposition, interference, measurement - all three are required.",
            ],
            table: {
              caption: "The quantum parallelism claim vs the algorithmic reality.",
              headers: ["Step", "Myth", "Reality"],
              rows: [
                ["Oracle application", "evaluates f on all inputs in parallel", "writes 2^n amplitudes into one state, but only one is observable"],
                ["After oracle", "answer is somehow there", "amplitudes are uniform unless structured"],
                ["Interference", "not mentioned", "the actual source of speed-up - amplifies answer, cancels noise"],
                ["Measurement", "gives all answers", "gives one outcome; probability of answer is high only after interference"],
                ["Repeated runs", "no role", "tomography or amplification across many shots is normal"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "How a quantum algorithm actually extracts an answer",
              caption: "Five stages; skip any one and the exponential state space is wasted.",
              stages: [
                { label: "Prepare uniform superposition", note: "H tensor n on |0>" },
                { label: "Apply unitary oracle", note: "writes f(x) amplitudes" },
                { label: "Interfere", note: "Hadamard, QFT, Grover diffusion" },
                { label: "Amplify the answer's amplitude", note: "constructive on target, destructive elsewhere" },
                { label: "Measure", note: "one outcome, high probability on the answer" },
              ],
            },
            callout: {
              type: "warning",
              title: "Avoid the parallelism trap",
              body: "If your answer says 'the quantum computer tries all inputs at once', you have lost the marks. Replace that line with 'the amplitudes for all inputs are present, but interference must be arranged so the answer's amplitude grows before measurement.' Three-step framing: superposition, interference, measurement.",
            },
            keyTerms: [
              { term: "Quantum parallelism", definition: "The popular but misleading phrase for the fact that a unitary oracle writes amplitudes for all inputs at once; only one outcome is observed." },
              { term: "Interference", definition: "The constructive or destructive addition of complex amplitudes that lets a quantum algorithm concentrate probability on the correct answer." },
              { term: "Amplitude amplification", definition: "A family of techniques, including Grover's diffusion operator, that rotates the state vector toward the target amplitude." },
              { term: "Born rule", definition: "The rule that measurement outcome k occurs with probability |<k|psi>|^2, the squared magnitude of the corresponding amplitude." },
            ],
            examQuestions: [
              {
                q: "Critically evaluate the statement that 'a quantum computer achieves exponential speed-up by evaluating a function on all inputs simultaneously'. Explain what is actually happening, name the role of interference, and give one algorithmic example where interference produces the answer.",
                marks: 7,
                outline: [
                  "Acknowledge the partial truth: a unitary oracle on a uniform superposition writes 2^n amplitudes in one step.",
                  "Explain why measurement yields only one outcome, so 'parallel evaluation' alone gives no speed-up.",
                  "Define interference: constructive addition amplifies the answer's amplitude; destructive addition cancels wrong answers.",
                  "Name the three-step framing: superposition, interference, measurement.",
                  "Give the Deutsch-Jozsa example: Hadamard after the oracle makes constant vs balanced distinguishable.",
                  "Mention Grover's diffusion and Shor's QFT as further interference techniques.",
                  "Conclude that algorithm design is the art of arranging interference, not running parallel branches.",
                ],
              },
              {
                q: "Describe in two sentences what happens when a uniform superposition (1/sqrt(2^n)) sum_x |x> is measured without any prior interference.",
                marks: 3,
              },
              {
                q: "Name the three stages of a typical quantum algorithm.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.6",
            title: "History, applications and state of hardware",
            body: [
              "Quantum computing has a forty-year arc. Richard Feynman's 1981 lecture at MIT proposed that a computer built from quantum ingredients could simulate physics efficiently, since a classical machine pays 2^n for n particles. David Deutsch formalized the universal quantum Turing machine in 1985. Peter Shor's 1994 factoring algorithm made the field strategic: an exponential speed-up on a problem whose hardness underwrites RSA encryption. Lov Grover's 1996 search algorithm added a quadratic but provably optimal speed-up. By the 2010s, superconducting and trapped-ion hardware had crossed the 50-qubit mark, and Google's 2019 Sycamore experiment claimed quantum advantage on a sampling task.",
              "Application domains follow the speed-up structure. Cryptography: Shor's algorithm breaks RSA and elliptic-curve cryptography at scale, motivating post-quantum standards. Chemistry and materials: simulating molecular Hamiltonians classically costs 2^n, but a quantum computer represents the state natively - drug discovery and catalyst design are the long-term targets. Optimization: QAOA and variational eigensolvers attack combinatorial problems, with mixed empirical success. Sampling: random circuit sampling underpins the first advantage claims. Machine learning: quantum kernels and variational circuits are active research, with no proven practical advantage yet.",
              "Current hardware lives in the NISQ era - Noisy Intermediate-Scale Quantum. Devices from IBM, Google, IonQ, Quantinuum and Rigetti have between 50 and 1000 physical qubits, with single-qubit gate error rates near 10^-3 to 10^-4 and two-qubit errors typically 1-2 orders of magnitude worse. Decoherence times (T1 and T2) range from microseconds for superconducting devices to seconds for trapped ions. No device yet implements full quantum error correction at scale; the field's near-term goal is to demonstrate a logical qubit with error rates below the physical rate, then scale to fault-tolerant machines capable of running Shor on cryptographically relevant inputs.",
            ],
            bullets: [
              "Feynman 1981: simulate physics with a quantum computer.",
              "Deutsch 1985: universal quantum Turing machine; theoretical foundation.",
              "Shor 1994: polynomial-time factoring; strategic impact on RSA.",
              "Grover 1996: quadratic but optimal speed-up for unstructured search.",
              "Google Sycamore 2019: first claimed quantum advantage on random circuit sampling.",
              "Application domains: cryptography, chemistry, optimization, sampling, machine learning.",
              "NISQ era: 50-1000 qubits, error rates 10^-3 to 10^-4, no error correction yet.",
            ],
            table: {
              caption: "A timeline of quantum computing milestones.",
              headers: ["Year", "Event", "Significance"],
              rows: [
                ["1981", "Feynman's MIT lecture", "First proposal: simulate physics with a quantum computer"],
                ["1985", "Deutsch's universal quantum Turing machine", "Theoretical foundation"],
                ["1994", "Shor's factoring algorithm", "Exponential speed-up; strategic impact on RSA"],
                ["1996", "Grover's search algorithm", "Quadratic but optimal speed-up for unstructured search"],
                ["2019", "Google Sycamore quantum advantage claim", "First sampling task infeasible classically in 200 s"],
                ["2020s", "IBM 127-, 433-, 1121-qubit devices", "NISQ scaling roadmap, no error correction yet"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Maturity ladder of quantum applications",
              caption: "Each tier rests on the one below; only the bottom is reliably deployed.",
              tiers: [
                { label: "Fault-tolerant Shor", note: "millions of physical qubits - not yet" },
                { label: "Useful chemistry simulation", note: "research target" },
                { label: "NISQ variational heuristics", note: "QAOA, VQE - mixed results" },
                { label: "Random circuit sampling", note: "demonstrated advantage, no utility" },
                { label: "Toy algorithms and education", note: "where every student starts" },
              ],
            },
            callout: {
              type: "exam",
              title: "What to memorize for the history question",
              body: "Four names with years and one-line contributions: Feynman 1981 (simulate physics), Deutsch 1985 (universal quantum Turing machine), Shor 1994 (factoring), Grover 1996 (search). Add Google Sycamore 2019 for the advantage claim. Avoid claiming any production deployment of Shor; current hardware cannot run it at RSA scale.",
            },
            keyTerms: [
              { term: "NISQ era", definition: "Noisy Intermediate-Scale Quantum - the current era of 50-1000 qubit devices without error correction." },
              { term: "Quantum advantage", definition: "A demonstration that a quantum device solves a task infeasible for classical hardware in comparable time." },
              { term: "Variational algorithm", definition: "A hybrid quantum-classical algorithm (e.g. VQE, QAOA) where a classical optimizer tunes quantum circuit parameters." },
              { term: "Decoherence time", definition: "The characteristic time T1 (energy relaxation) or T2 (phase coherence) over which a qubit loses its quantum state." },
              { term: "Fault-tolerant quantum computing", definition: "The regime in which logical qubits built from many physical qubits achieve error rates low enough for deep circuits like Shor's." },
            ],
            examQuestions: [
              {
                q: "Trace the historical development of quantum computing from Feynman to the present day. Name the key contributors and algorithms, and describe the current state of hardware including qubit counts, error rates and the NISQ label.",
                marks: 7,
                outline: [
                  "Feynman 1981: propose a quantum computer to simulate physics; the 2^n motivation.",
                  "Deutsch 1985: universal quantum Turing machine; theoretical foundation.",
                  "Shor 1994: polynomial-time factoring algorithm; strategic impact on RSA cryptography.",
                  "Grover 1996: quadratic but optimal speed-up for unstructured search.",
                  "Cite Google's 2019 Sycamore experiment as the first claimed quantum advantage on random circuit sampling.",
                  "Describe current hardware: 50-1000 qubits, single-qubit gate error 10^-3 to 10^-4, two-qubit error higher.",
                  "Define the NISQ era and note that no device yet implements full fault-tolerant error correction at scale.",
                ],
              },
              {
                q: "List three application domains of quantum computing and the speed-up type each offers.",
                marks: 3,
              },
              {
                q: "What does NISQ stand for and what limitation does it imply for current algorithms?",
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
      title: "Mathematical Toolkit",
      summary:
        "Unit II builds the linear algebra that the rest of the subject depends on. Complex numbers serve as amplitudes; vector spaces and bases hold the state; inner products and the Dirac bra-ket notation make calculations compact. The qubit becomes a 2D unit vector; multi-qubit systems are tensor products of these vectors; evolution is multiplication by unitary matrices; measurement is projection under the Born rule. The unit closes by separating the observable relative phase from the unobservable global phase.",
      chapter: {
        number: "02",
        title: "Mathematical Toolkit",
        intro:
          "Unit II builds the linear algebra that the rest of the subject depends on. Complex numbers serve as amplitudes; vector spaces and bases hold the state; inner products and the Dirac bra-ket notation make calculations compact. The qubit becomes a 2D unit vector; multi-qubit systems are tensor products of these vectors; evolution is multiplication by unitary matrices; measurement is projection under the Born rule. The unit closes by separating the observable relative phase from the unobservable global phase - a distinction the algorithms of Unit IV depend on.",
        inOneBreath:
          "A complex amplitude z = a + bi has magnitude |z| = sqrt(a^2 + b^2) and argument arg(z); amplitudes combine by vector addition and probability is the squared magnitude |z|^2. A quantum state is a unit vector in a complex Hilbert space; the computational basis {|0>, |1>} spans the single-qubit space, {|00>, |01>, |10>, |11>} spans two qubits, and n qubits span a 2^n-dimensional space. Dirac notation writes kets |psi>, bras <phi|, inner products <phi|psi>, and outer products |psi><phi|. Tensor products join single-qubit spaces: |01> = |0> tensor |1>. Evolution is multiplication by a unitary matrix U with U^dagger U = I, which preserves the norm. Measurement in basis {|k>} yields outcome k with probability |<k|psi>|^2 (the Born rule) and collapses the state to |k>. Global phase e^(i theta) is unobservable; relative phase between |0> and |1> in a|0> + b|1> is observable and matters for interference.",
        sections: [
          {
            number: "2.1",
            title: "Complex numbers and amplitudes",
            body: [
              "A complex number z = a + bi has real part a, imaginary part b and the imaginary unit i with i^2 = -1. Its magnitude |z| = sqrt(a^2 + b^2) is the length of the vector (a, b) in the complex plane, and its argument arg(z) = atan2(b, a) is the angle from the positive real axis. The polar form rewrites z = |z| e^(i arg(z)), which makes multiplication geometric: multiplying two complex numbers multiplies their magnitudes and adds their arguments. The complex conjugate of z is z* = a - bi, and z multiplied by its conjugate gives |z|^2: (a + bi)(a - bi) = a^2 + b^2.",
              "Amplitudes in quantum mechanics are complex numbers, and probabilities are squared magnitudes. If a basis state has amplitude z, the probability of observing it on measurement is |z|^2 = z z*. A pair of amplitudes z_1 and z_2 with the same magnitude but different arguments (phases) yield the same single-measurement probability, yet they interfere differently with other amplitudes: z_1 + z_2 = r_1 e^(i theta_1) + r_2 e^(i theta_2), and the squared magnitude is r_1^2 + r_2^2 + 2 r_1 r_2 cos(theta_1 - theta_2). The cross-term is the interference signature; classical probabilities never produce it.",
              "Normalization uses the conjugate. A single-qubit state a|0> + b|1> is normalized when |a|^2 + |b|^2 = a* a + b* b = 1. For a worked example, take a = 1/2 and b = i sqrt(3)/2; then |a|^2 = 1/4, |b|^2 = (i sqrt(3)/2)(-i sqrt(3)/2) = 3/4, and the sum is 1. The polar form makes the geometry visible: amplitude a = (1/2) e^(i 0), amplitude b = (sqrt(3)/2) e^(i pi/2), so the qubit sits at polar angle theta = 2 atan(|b|/|a|) = 2 atan(sqrt(3)) = 2 pi/3 on the Bloch sphere. Every complex amplitude pair maps to a point on the Bloch sphere.",
            ],
            bullets: [
              "Complex number z = a + bi with i^2 = -1; real part a, imaginary part b.",
              "Magnitude |z| = sqrt(a^2 + b^2); argument arg(z) = atan2(b, a).",
              "Conjugate z* = a - bi; product z z* = a^2 + b^2 = |z|^2.",
              "Polar form z = |z| e^(i arg(z)); multiplication adds arguments.",
              "Amplitudes combine by complex addition; probability is the squared magnitude.",
              "Interference cross-term: 2 r_1 r_2 cos(theta_1 - theta_2); absent in classical probability.",
              "Normalization: |a|^2 + |b|^2 = a* a + b* b = 1.",
            ],
            table: {
              caption: "Complex arithmetic rules used in amplitude calculations.",
              headers: ["Operation", "Formula", "Quantum use"],
              rows: [
                ["Magnitude", "|z| = sqrt(a^2 + b^2)", "amplitude length; sqrt(probability)"],
                ["Conjugate", "z* = a - bi", "computing |z|^2 = z z*"],
                ["Squared magnitude", "|z|^2 = a^2 + b^2", "probability of outcome"],
                ["Polar form", "z = |z| e^(i arg(z))", "phase-and-magnitude view"],
                ["Multiplication", "z_1 z_2 = r_1 r_2 e^(i (theta_1 + theta_2))", "phase accumulation by gates"],
                ["Addition", "z_1 + z_2 then |.|^2", "interference cross-term appears"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a complex amplitude",
              caption: "Each layer is a view of the same number; probability lives one floor down from amplitude.",
              layers: [
                { label: "Polar form r e^(i theta)", note: "magnitude r and argument theta" },
                { label: "Cartesian a + bi", note: "real and imaginary parts" },
                { label: "Conjugate a - bi", note: "used to compute magnitude squared" },
                { label: "Squared magnitude |z|^2 = a^2 + b^2", note: "the probability of the outcome" },
              ],
            },
            callout: {
              type: "tip",
              title: "Phase arithmetic shortcut",
              body: "When adding two amplitudes of equal magnitude r and phases theta_1, theta_2, the result has magnitude 2r cos((theta_1 - theta_2)/2). Use this to spot constructive interference (theta_1 = theta_2 gives 2r) and destructive interference (theta_1 - theta_2 = pi gives 0) without expanding into real and imaginary parts.",
            },
            keyTerms: [
              { term: "Complex amplitude", definition: "A complex number z = a + bi that weights a basis state in a superposition; its squared magnitude is the measurement probability." },
              { term: "Magnitude |z|", definition: "The length sqrt(a^2 + b^2) of the complex number as a vector in the plane; the square root of the probability." },
              { term: "Argument (phase)", definition: "The angle arg(z) = atan2(b, a) of z in the complex plane; determines interference with other amplitudes." },
              { term: "Complex conjugate", definition: "The number z* = a - bi; multiplying z by its conjugate yields the real number |z|^2." },
              { term: "Polar form", definition: "The representation z = |z| e^(i arg(z)), which turns multiplication into magnitude multiplication and argument addition." },
            ],
            examQuestions: [
              {
                q: "Define complex numbers and their magnitude, conjugate and polar form. Show that the probability of an outcome is the squared magnitude of its amplitude, and derive the interference term for the sum of two amplitudes r_1 e^(i theta_1) + r_2 e^(i theta_2).",
                marks: 7,
                outline: [
                  "Define z = a + bi with i^2 = -1; state real part a, imaginary part b.",
                  "Define magnitude |z| = sqrt(a^2 + b^2) and conjugate z* = a - bi; show |z|^2 = z z* = a^2 + b^2.",
                  "State the Born rule: probability of an outcome equals |amplitude|^2.",
                  "Write polar form z = |z| e^(i arg(z)); note that multiplication adds arguments.",
                  "Add two amplitudes r_1 e^(i theta_1) + r_2 e^(i theta_2) and compute |.|^2.",
                  "Expand to r_1^2 + r_2^2 + 2 r_1 r_2 cos(theta_1 - theta_2); identify the cross-term as interference.",
                  "Contrast with classical probabilities p_1 + p_2, which never produce the cross-term.",
                ],
              },
              {
                q: "Compute |z|^2 for z = (1 + i)/sqrt(2). What probability does this amplitude give?",
                marks: 3,
              },
              {
                q: "Convert z = sqrt(3) + i to polar form r e^(i theta).",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Vector spaces and bases",
            body: [
              "A complex vector space is a set closed under addition and under multiplication by complex scalars. Quantum states live in a Hilbert space - a complex vector space with an inner product and complete in the norm. For a single qubit the space is C^2: vectors of two complex components. The computational basis {|0>, |1>} is orthonormal: <0|0> = 1, <1|1> = 1, <0|1> = 0. Every pure qubit state is a linear combination a|0> + b|1> with a, b complex, and normalization forces |a|^2 + |b|^2 = 1.",
              "Two qubits live in C^4, spanned by the four basis vectors |00>, |01>, |10>, |11>. Three qubits span C^8, and n qubits span C^(2^n). The exponential growth of dimension with qubit count is the substrate of quantum computing - the reason a quantum computer can hold a state that no classical register of n bits could. But the same growth is why classical simulation is intractable: writing the state of n qubits requires 2^n complex amplitudes.",
              "Bases are not unique. The computational basis {|0>, |1>} is one orthonormal basis for C^2; the Hadamard basis {|+>, |->} is another. A state written as (1/sqrt(2))(|0> + |1>) in the computational basis is simply |+> in the Hadamard basis, with coordinates (1, 0). The choice of basis is the choice of measurement: measuring in the computational basis tells you whether the state is more |0> or |1>; measuring in the Hadamard basis tells you whether it is more |+> or |->. The same state can have very different coordinate representations in different bases, and the algebra of changing bases is central to algorithm design.",
            ],
            bullets: [
              "Hilbert space: complex vector space with inner product, complete in norm.",
              "Computational basis {|0>, |1>} is orthonormal: <0|0> = <1|1> = 1, <0|1> = 0.",
              "C^2 for one qubit; C^4 for two qubits; C^8 for three; C^(2^n) for n.",
              "Hadamard basis {|+>, |->} is another orthonormal basis of C^2.",
              "Choice of basis = choice of measurement axis.",
              "Same state, different coordinates in different bases - change of basis is fundamental.",
              "Exponential dimension growth is both the substrate of speed-up and the simulation wall.",
            ],
            codeExample: {
              language: "python",
              caption: "Enumerate the 2^n computational basis states as bitstrings.",
              code: `
# Enumerate the 2^n basis states for n qubits as binary strings
def basis_states(n):
    states = []
    for k in range(2 ** n):
        bits = format(k, "0" + str(n) + "b")  # n=3, k=5 -> "101"
        states.append("|" + bits + ">")
    return states

# For n = 2 we get the 4 basis vectors of C^4
print(basis_states(2))
# ['|00>', '|01>', '|10>', '|11>']
# For n = 3 we get 8 basis vectors of C^8
print(basis_states(3))
`,
            },
            diagram: {
              kind: "pyramid",
              title: "State space grows as 2^n with qubit count",
              caption: "Each tier adds one qubit and doubles the dimension; this is the simulation wall.",
              tiers: [
                { label: "5 qubits: dim 32", note: "fits in any laptop" },
                { label: "10 qubits: dim 1024", note: "small simulator" },
                { label: "20 qubits: dim ~10^6", note: "large simulator" },
                { label: "50 qubits: dim ~10^15", note: "edge of classical simulation" },
                { label: "100 qubits: dim ~10^30", note: "beyond classical storage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Dimension-doubling argument",
              body: "When asked 'why does simulating n qubits cost 2^n', answer in two lines: (i) n qubits live in C^(2^n) because each qubit doubles the space (tensor product of C^2 with itself n times); (ii) storing a state vector needs 2^n complex amplitudes. The argument is the same as the simulation wall in Unit I - link them.",
            },
            keyTerms: [
              { term: "Hilbert space", definition: "A complete complex vector space with an inner product; the arena in which quantum states live." },
              { term: "Computational basis", definition: "The orthonormal basis of bitstrings {|0>, |1>} for one qubit, {|00>, |01>, |10>, |11>} for two, and so on." },
              { term: "Orthonormal basis", definition: "A set of basis vectors that are mutually orthogonal (<i|j> = 0 for i != j) and individually normalized (<i|i> = 1)." },
              { term: "Change of basis", definition: "Rewriting a state's coordinates relative to a different orthonormal basis; corresponds to choosing a different measurement." },
            ],
            examQuestions: [
              {
                q: "Define a complex vector space and an orthonormal basis. Show that the state space of n qubits has dimension 2^n, and explain how the computational basis and the Hadamard basis both span the single-qubit space.",
                marks: 7,
                outline: [
                  "Define complex vector space: closed under addition and complex scalar multiplication.",
                  "Define orthonormal basis: mutually orthogonal, individually normalized vectors spanning the space.",
                  "Single-qubit computational basis {|0>, |1>} spans C^2.",
                  "Show tensor product doubles dimension: C^2 tensor C^2 = C^4 for two qubits.",
                  "Induction: n qubits span C^(2^n); writing a state needs 2^n complex amplitudes.",
                  "Hadamard basis {|+>, |->} is another orthonormal basis of C^2; |+> = (|0>+|1>)/sqrt(2), |-> = (|0>-|1>)/sqrt(2).",
                  "Note that choice of basis equals choice of measurement.",
                ],
              },
              {
                q: "List the eight basis vectors of the computational basis for three qubits.",
                marks: 3,
              },
              {
                q: "Express |+> in the computational basis and |0> in the Hadamard basis.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Inner products, norms and Dirac notation",
            body: [
              "Dirac notation condenses vector calculations into compact symbols. A ket |psi> is a column vector; a bra <phi| is a row vector equal to the conjugate transpose of |phi>. The inner product <phi|psi> is a complex number obtained by componentwise multiply-and-sum: if |psi> = (a, b) and |phi> = (c, d), then <phi|psi> = c* a + d* b. The norm of |psi> is ||psi|| = sqrt(<psi|psi>) = sqrt(|a|^2 + |b|^2). A state is normalized when ||psi|| = 1.",
              "The outer product |psi><phi| is a matrix: for |psi> = (a, b) and |phi> = (c, d), it equals the 2x2 matrix [[a c*, a d*], [b c*, b d*]]. Outer products build projectors: P_k = |k><k| projects onto basis state |k>. The completeness relation sum_k |k><k| = I expresses that the basis spans the space - summing all projectors reconstructs the identity. A measurement in basis {|k>} applies projector P_k with probability <psi|P_k|psi> = |<k|psi>|^2, leaving the state |k>.",
              "Worked calculations: for |0> = (1, 0) and |1> = (0, 1), the inner product <0|1> = 0 confirms orthogonality, and <0|0> = 1 confirms normalization. For |+> = (1/sqrt(2), 1/sqrt(2)), <+|+> = 1/2 + 1/2 = 1, so |+> is normalized; <+|-> = 1/2 - 1/2 = 0, so |+> and |-> are orthogonal. The projector |0><0| = [[1, 0], [0, 0]] applied to |+> gives (1/sqrt(2))|0>; the squared magnitude 1/2 is the probability of measuring 0. These three calculations - normalization, orthogonality, projection - cover most Dirac-notation exam questions, and rehearsing them with explicit numerical coordinates is the fastest way to internalize bra-ket algebra for Units III and IV.",
            ],
            bullets: [
              "Ket |psi>: column vector; bra <phi|: conjugate transpose row vector.",
              "Inner product <phi|psi> = sum_i (phi_i)* psi_i: complex scalar.",
              "Norm ||psi|| = sqrt(<psi|psi>); normalized means ||psi|| = 1.",
              "Outer product |psi><phi| is a matrix; projector |k><k| projects onto |k>.",
              "Completeness relation: sum_k |k><k| = I for any orthonormal basis.",
              "Born rule via projectors: p(k) = <psi|k><k|psi> = |<k|psi>|^2.",
              "Worked: <0|1> = 0, <+|+> = 1, <+|-> = 0; |0><0| = [[1, 0], [0, 0]].",
            ],
            table: {
              caption: "Dirac notation at a glance.",
              headers: ["Symbol", "Object", "Example", "Use"],
              rows: [
                ["|psi>", "ket (column vector)", "|0> = (1, 0)", "state"],
                ["<phi|", "bra (row vector, conj transpose)", "<0| = (1, 0)", "dual"],
                ["<phi|psi>", "inner product (complex number)", "<0|0> = 1", "overlap, probability amplitude"],
                ["|psi><phi|", "outer product (matrix)", "|0><0| = [[1, 0], [0, 0]]", "projectors, operators"],
                ["<psi|psi>", "squared norm", "<+|+> = 1", "normalization check"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Ket, bra, inner product, outer product",
              caption: "Four faces of the same object - keeping them straight is half of Unit II.",
              left: {
                heading: "Vector forms",
                items: [
                  "Ket |psi> is a column vector",
                  "Bra <phi| is the conjugate transpose of |phi>",
                  "Inner product <phi|psi> is a complex scalar",
                  "Outer product |psi><phi| is a matrix",
                  "Norm ||psi|| = sqrt(<psi|psi>)",
                ],
              },
              right: {
                heading: "Worked values",
                items: [
                  "|0> = (1, 0); |1> = (0, 1)",
                  "<0| = (1, 0); <1| = (0, 1)",
                  "<0|0> = 1; <0|1> = 0; <+|+> = 1",
                  "|0><0| = [[1, 0], [0, 0]]",
                  "|1><1| = [[0, 0], [0, 1]]",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Three calculations, three marks",
              body: "When asked to 'verify' a state, run the three standard checks: normalization <psi|psi> = 1; orthogonality <phi|psi> = 0 for distinct basis states; projection |<k|psi>|^2 giving the probability of outcome k. These three cover the vast majority of Dirac-notation exam questions.",
            },
            keyTerms: [
              { term: "Ket |psi>", definition: "A column vector representing a quantum state in Dirac notation." },
              { term: "Bra <phi|", definition: "The conjugate transpose of |phi>, written as a row vector." },
              { term: "Inner product <phi|psi>", definition: "The complex scalar obtained by componentwise multiply-and-sum of <phi| and |psi>; its squared magnitude is a probability." },
              { term: "Outer product |psi><phi|", definition: "A matrix formed by multiplying a ket by a bra; projectors |k><k| are special cases." },
              { term: "Completeness relation", definition: "The identity sum_k |k><k| = I, which holds for any orthonormal basis and decomposes the identity into projectors." },
            ],
            examQuestions: [
              {
                q: "Define Dirac bra-ket notation. Compute the inner products <0|0>, <0|1>, <+|+> and <+|->, and use the outer product to construct the projectors |0><0| and |1><1|. Show that |0><0| + |1><1| equals the identity.",
                marks: 7,
                outline: [
                  "Define ket |psi> as a column vector and bra <phi| as its conjugate transpose.",
                  "Define inner product <phi|psi> as the complex scalar sum_i (phi_i)* psi_i.",
                  "Compute <0|0> = 1, <0|1> = 0; note these confirm normalization and orthogonality.",
                  "Compute <+|+> = 1/2 + 1/2 = 1 (normalized) and <+|-> = 1/2 - 1/2 = 0 (orthogonal).",
                  "Construct |0><0| = [[1, 0], [0, 0]] and |1><1| = [[0, 0], [0, 1]].",
                  "Add: |0><0| + |1><1| = [[1, 0], [0, 1]] = I.",
                  "State the completeness relation sum_k |k><k| = I as the general version.",
                ],
              },
              {
                q: "Write the projector onto |+> and apply it to |0>.",
                marks: 3,
              },
              {
                q: "State the completeness relation for the computational basis of two qubits.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "The qubit as a 2D unit vector",
            body: [
              "The computational basis vectors are |0> = [1; 0] and |1> = [0; 1], the column vectors of length two. A general pure qubit state is |psi> = a|0> + b|1> = [a; b], with complex a and b satisfying |a|^2 + |b|^2 = 1. The polar parameterization is |psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1>, where theta is the polar angle on the Bloch sphere (0 to pi) and phi is the azimuthal angle (0 to 2 pi). Every pure single-qubit state corresponds to a unique point on the Bloch sphere.",
              "Worked example: take |psi> = (1/2)|0> + (sqrt(3)/2)|1>. Verify normalization: |1/2|^2 + |sqrt(3)/2|^2 = 1/4 + 3/4 = 1. To read off Bloch angles, match cos(theta/2) = 1/2, so theta/2 = pi/3 and theta = 2 pi/3; the relative phase phi = 0 because both amplitudes are real and positive. Measurement probabilities: P(0) = |a|^2 = 1/4, P(1) = |b|^2 = 3/4. So if you measure 1000 copies, you expect about 250 zeros and 750 ones - the empirical signature of the state.",
              "Bloch sphere points include the poles |0> at theta = 0 and |1> at theta = pi; the equator at theta = pi/2 hosts |+> = (|0> + |1>)/sqrt(2) at phi = 0, |-> = (|0> - |1>)/sqrt(2) at phi = pi, and the imaginary-axis states |+i> = (|0> + i|1>)/sqrt(2) at phi = pi/2 and |-i> = (|0> - i|1>)/sqrt(2) at phi = 3 pi/2. Single-qubit gates correspond to rotations of the Bloch sphere: X is a pi rotation about the x-axis, Z is a pi rotation about the z-axis, H maps |0> to |+> and |1> to |->. The Bloch sphere is the right mental picture for single-qubit evolution.",
            ],
            bullets: [
              "|0> = [1; 0], |1> = [0; 1]; qubit |psi> = [a; b] with |a|^2 + |b|^2 = 1.",
              "Polar form: |psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1>.",
              "theta in [0, pi] (polar), phi in [0, 2 pi) (azimuthal).",
              "Worked: a=1/2, b=sqrt(3)/2 gives theta = 2 pi/3, phi = 0.",
              "Measurement probabilities: P(0) = |a|^2 = 1/4, P(1) = |b|^2 = 3/4.",
              "Equator (theta=pi/2): |+>, |->, |+i>, |-i> at phi = 0, pi, pi/2, 3 pi/2.",
              "Single-qubit gates are Bloch rotations: X about x, Z about z, H about (x+z)/sqrt(2).",
            ],
            codeExample: {
              language: "python",
              caption: "Construct a single-qubit state vector in NumPy-style pseudo-code.",
              code: `
import numpy as np

# Computational basis
ket0 = np.array([1, 0], dtype=complex)
ket1 = np.array([0, 1], dtype=complex)

# |psi> = (1/2)|0> + (sqrt(3)/2)|1>
psi = 0.5 * ket0 + (np.sqrt(3) / 2) * ket1

# Normalization check: <psi|psi> should equal 1
norm_sq = np.vdot(psi, psi)        # vdot does conjugate transpose
print(norm_sq)                     # 1.0

# Measurement probabilities
p0 = abs(psi[0]) ** 2              # 0.25
p1 = abs(psi[1]) ** 2              # 0.75
print(p0, p1)
`,
            },
            diagram: {
              kind: "matrix",
              title: "Bloch sphere landmarks vs state vectors",
              caption: "Quadrants of the Bloch sphere mapped to canonical state vectors and angles.",
              axes: { x: "Polar angle theta (north to south)", y: "Azimuthal angle phi" },
              quadrants: [
                { label: "|0>: theta = 0", note: "north pole" },
                { label: "|+>: theta = pi/2, phi = 0", note: "equator, +x" },
                { label: "|1>: theta = pi", note: "south pole" },
                { label: "|->: theta = pi/2, phi = pi", note: "equator, -x" },
              ],
            },
            callout: {
              type: "exam",
              title: "Bloch angles from coordinates",
              body: "Given a|0> + b|1>, set cos(theta/2) = |a|, sin(theta/2) = |b|, and phi = arg(b) - arg(a). Worked: a = 1/2, b = sqrt(3)/2 gives theta = 2 pi/3 and phi = 0. State this recipe once and reuse it - it is the standard three-mark calculation.",
            },
            keyTerms: [
              { term: "Bloch sphere", definition: "The unit sphere in R^3 whose points parameterize pure single-qubit states via theta and phi." },
              { term: "Polar angle theta", definition: "The angle from the |0> pole on the Bloch sphere; cos(theta/2) gives the magnitude of the |0> amplitude." },
              { term: "Azimuthal angle phi", definition: "The relative phase between |0> and |1> amplitudes; the longitude on the Bloch equator." },
              { term: "Computational basis states", definition: "The orthonormal pair |0> = [1; 0] and |1> = [0; 1] spanning the single-qubit space." },
            ],
            examQuestions: [
              {
                q: "Parameterize a pure single-qubit state on the Bloch sphere and show that every normalized vector a|0> + b|1> with |a|^2 + |b|^2 = 1 corresponds to a unique point (theta, phi). Verify the parameterization for the state |psi> = (1/2)|0> + (sqrt(3)/2)|1>.",
                marks: 7,
                outline: [
                  "Write |psi> = cos(theta/2)|0> + e^(i phi) sin(theta/2)|1> with theta in [0, pi], phi in [0, 2 pi).",
                  "Match magnitudes: cos(theta/2) = |a|, sin(theta/2) = |b|.",
                  "Verify normalization: cos^2(theta/2) + sin^2(theta/2) = 1 for any theta.",
                  "Extract relative phase: phi = arg(b) - arg(a).",
                  "Apply to |psi> = (1/2)|0> + (sqrt(3)/2)|1>: cos(theta/2) = 1/2 implies theta/2 = pi/3, so theta = 2 pi/3.",
                  "Both amplitudes real and positive, so phi = 0.",
                  "State measurement probabilities P(0) = 1/4, P(1) = 3/4.",
                ],
              },
              {
                q: "Identify the Bloch angles of |+> = (|0> + |1>)/sqrt(2).",
                marks: 3,
              },
              {
                q: "Where do |0>, |1>, |+> and |-> lie on the Bloch sphere?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Tensor products and multi-qubit states",
            body: [
              "The tensor product joins vector spaces. For two qubits the joint space is C^2 tensor C^2 = C^4, with basis vectors |00> = |0> tensor |0>, |01> = |0> tensor |1>, |10> = |1> tensor |0>, |11> = |1> tensor |1>. Concretely, if |a> = (a_0, a_1) and |b> = (b_0, b_1), their tensor product is the length-4 vector (a_0 b_0, a_0 b_1, a_1 b_0, a_1 b_1). Worked: |0> tensor |1> = (1, 0) tensor (0, 1) = (1*0, 1*1, 0*0, 0*1) = (0, 1, 0, 0), which is the coordinate representation of |01>. Three qubits live in C^8; n qubits in C^(2^n).",
              "A product state is one that can be written as a tensor product of single-qubit states: |a> tensor |b>. Worked: |+> tensor |+> = (1/sqrt(2))(|0> + |1>) tensor (1/sqrt(2))(|0> + |1>) = (1/2)(|00> + |01> + |10> + |11>), a uniform superposition. An entangled state cannot be factored this way; the Bell state (1/sqrt(2))(|00> + |11>) is the canonical example. To check whether a state is entangled, try to write it as (a|0> + b|1>) tensor (c|0> + d|1>) and expand: you get ac|00> + ad|01> + bc|10> + bd|11>. Matching coefficients to a target state either succeeds (product) or forces a contradiction (entangled).",
              "For the Bell state |Phi+> = (1/sqrt(2))(|00> + |11>), matching requires ad = 0 (no |01>) and bc = 0 (no |10>) while ac = 1/sqrt(2) and bd = 1/sqrt(2). If a is non-zero, d must be zero from ad = 0, but then bd = 0, contradicting bd = 1/sqrt(2). So no factorization exists - the state is entangled. The same argument applies to all four Bell states and to GHZ states (|000> + |111>)/sqrt(2). The tensor product is the algebraic home of entanglement: factorable means product state, non-factorable means entangled.",
            ],
            bullets: [
              "Tensor product: C^m tensor C^n = C^(mn); each qubit doubles the dimension.",
              "|0> tensor |1> = (0, 1, 0, 0) = |01> in coordinate form.",
              "Product state: factorizes as |a> tensor |b>.",
              "Entangled state: cannot be factored; e.g. Bell state (|00> + |11>)/sqrt(2).",
              "Factorization test: try (a|0>+b|1>) tensor (c|0>+d|1>) = ac|00>+ad|01>+bc|10>+bd|11>.",
              "Determinant test (two qubits): alpha*delta - beta*gamma != 0 implies entanglement.",
              "n qubits: 2^n amplitudes; tensor product is the algebra of multi-qubit space.",
            ],
            codeExample: {
              language: "python",
              caption: "Tensor product of two single-qubit states in NumPy-style pseudo-code.",
              code: `
import numpy as np

ket0 = np.array([1, 0], dtype=complex)
ket1 = np.array([0, 1], dtype=complex)

# |01> = |0> tensor |1> = (0, 1, 0, 0)
ket01 = np.kron(ket0, ket1)
print(ket01)               # [0.+0.j, 1.+0.j, 0.+0.j, 0.+0.j]

# Bell state |Phi+> = (|00> + |11>) / sqrt(2)
bell = (np.kron(ket0, ket0) + np.kron(ket1, ket1)) / np.sqrt(2)
print(bell)
# [0.707+0.j, 0.+0.j, 0.+0.j, 0.707+0.j]

# Norm check
print(np.vdot(bell, bell)) # 1.0
`,
            },
            diagram: {
              kind: "flow",
              title: "Tensor product builds the multi-qubit basis",
              caption: "Each step doubles the dimension; the symbol |ab> is shorthand for |a> tensor |b>.",
              steps: [
                { label: "One qubit: C^2", note: "basis {|0>, |1>}, dim 2" },
                { label: "Two qubits: C^2 tensor C^2 = C^4", note: "basis {|00>, |01>, |10>, |11>}, dim 4" },
                { label: "Three qubits: C^4 tensor C^2 = C^8", note: "8 basis states" },
                { label: "n qubits: C^(2^n)", note: "exponential growth - the simulation wall" },
              ],
            },
            callout: {
              type: "exam",
              title: "Entanglement test recipe",
              body: "To test whether a two-qubit state alpha|00> + beta|01> + gamma|10> + delta|11> is entangled, try to factor it as (a|0> + b|1>) tensor (c|0> + d|1>) = ac|00> + ad|01> + bc|10> + bd|11>. Match coefficients: if the product alpha*delta - beta*gamma is non-zero, the state is entangled. This is the determinant test for two qubits.",
            },
            keyTerms: [
              { term: "Tensor product", definition: "The operation joining vector spaces: C^m tensor C^n = C^(mn); for qubits, each factor doubles the dimension." },
              { term: "Product state", definition: "A multi-qubit state that factorizes as a tensor product of single-qubit states; equivalent to no entanglement." },
              { term: "Entangled state", definition: "A multi-qubit state that cannot be written as a tensor product of single-qubit states." },
              { term: "Bell state", definition: "A maximally entangled two-qubit state; |Phi+> = (|00> + |11>)/sqrt(2) is the canonical example." },
            ],
            examQuestions: [
              {
                q: "Define the tensor product of two single-qubit states and compute |0> tensor |1>, |+> tensor |+>, and the Bell state |Phi+> = (1/sqrt(2))(|00> + |11>). Show that |Phi+> is entangled by attempting to factor it as (a|0> + b|1>) tensor (c|0> + d|1>).",
                marks: 7,
                outline: [
                  "Define tensor product for length-2 vectors: (a_0, a_1) tensor (b_0, b_1) = (a_0 b_0, a_0 b_1, a_1 b_0, a_1 b_1).",
                  "Compute |0> tensor |1> = (1, 0) tensor (0, 1) = (0, 1, 0, 0) = |01>.",
                  "Compute |+> tensor |+> = (1/2)(|00> + |01> + |10> + |11>), a uniform superposition.",
                  "Compute |Phi+> = (|00> + |11>)/sqrt(2) = (1/sqrt(2), 0, 0, 1/sqrt(2)).",
                  "Assume |Phi+> = (a|0> + b|1>) tensor (c|0> + d|1>) = ac|00> + ad|01> + bc|10> + bd|11>.",
                  "Match coefficients: ad = 0 and bc = 0, but ac = 1/sqrt(2) and bd = 1/sqrt(2).",
                  "Derive contradiction: if a != 0 then d = 0, so bd = 0, contradicting bd = 1/sqrt(2). Conclude the state is entangled.",
                ],
              },
              {
                q: "Compute the tensor product |1> tensor |+> as a length-4 vector.",
                marks: 3,
              },
              {
                q: "State the determinant test alpha*delta - beta*gamma for entanglement of alpha|00> + beta|01> + gamma|10> + delta|11>.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "Unitary matrices, measurement and the Born rule",
            body: [
              "Quantum evolution is unitary: a closed quantum system evolves by multiplication with a unitary matrix U, where U is unitary means U^dagger U = U U^dagger = I. Equivalently, U^dagger = U^(-1), the conjugate transpose equals the inverse. The unitary condition preserves inner products and norms: if |psi'> = U|psi>, then <psi'|psi'> = <psi|U^dagger U|psi> = <psi|psi>. So normalization is preserved - a normalized state remains normalized under any unitary evolution. This is why quantum gates are reversible: every unitary has an inverse, so evolution can always be undone.",
              "The Born rule governs measurement. Given a state |psi> and an orthonormal basis {|k>}, the probability of outcome k is p(k) = |<k|psi>|^2, the squared magnitude of the amplitude on |k>. Worked: for |psi> = (1/2)|0> + (sqrt(3)/2)|1>, p(0) = |<0|psi>|^2 = |1/2|^2 = 1/4 and p(1) = |<1|psi>|^2 = |sqrt(3)/2|^2 = 3/4. After measurement, the state collapses to |k> if k was observed; subsequent measurements in the same basis reproduce k with probability 1. The Born rule is the bridge from amplitudes to probabilities and is postulated, not derived.",
              "Phase separates into global and relative. A global phase multiplies the whole state: |psi> -> e^(i theta)|psi>. The new state is observationally indistinguishable from the original because every measurement probability is the squared magnitude of an amplitude, and |e^(i theta) a|^2 = |a|^2. A relative phase between amplitudes within a superposition is observable. The states |+> = (1/sqrt(2))(|0> + |1>) and |-> = (1/sqrt(2))(|0> - |1>) differ only by a relative phase of pi on the |1> amplitude, yet they are orthogonal: <+|-> = 0. This orthogonality is exploitable: the Hadamard gate maps |+> to |0> and |-> to |1>, distinguishing them by interference.",
            ],
            bullets: [
              "Unitary: U^dagger U = U U^dagger = I; equivalently U^(-1) = U^dagger.",
              "Norm preservation: <psi'|psi'> = <psi|U^dagger U|psi> = <psi|psi>.",
              "Reversibility: every unitary has an inverse, so quantum gates are reversible.",
              "Born rule: p(k) = |<k|psi>|^2, the squared magnitude of the amplitude.",
              "Collapse: after measuring k, state becomes |k>; repeat measurement gives k with prob 1.",
              "Global phase e^(i theta) on |psi>: unobservable (cancels in |.|^2).",
              "Relative phase: observable via interference; |+> vs |-> differ by relative phase pi.",
            ],
            table: {
              caption: "Global phase vs relative phase.",
              headers: ["Aspect", "Global phase", "Relative phase"],
              rows: [
                ["Form", "e^(i theta) |psi>", "a|0> + e^(i phi) b|1>"],
                ["Observable?", "no", "yes"],
                ["Effect on probabilities", "none", "changes interference pattern"],
                ["Example", "|0> vs e^(i pi)|0>", "|+> vs |->"],
                ["Distinguishable by measurement?", "never", "yes, via interference (e.g. H gate)"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The unitary-measure loop",
              caption: "Evolution is unitary and reversible; measurement is projective and irreversible - together they form the algorithm loop.",
              steps: [
                { label: "Prepare state |psi>", note: "normalized" },
                { label: "Apply unitary U", note: "preserves norm, reversible" },
                { label: "Measure in basis {|k>}", note: "Born rule: p(k) = |<k|psi>|^2" },
                { label: "Collapse to |k>", note: "irreversible" },
                { label: "Repeat for statistics", note: "many shots reconstruct probabilities" },
              ],
            },
            callout: {
              type: "warning",
              title: "Don't forget U^dagger = U^(-1)",
              body: "When checking whether a matrix is unitary, compute U^dagger U and verify it equals I. Common mistake: checking only that U preserves one specific state. The condition must hold for all states, which is exactly U^dagger U = I. For X = [[0, 1], [1, 0]], we have X^dagger = X and XX = I, so X is unitary (and also its own inverse).",
            },
            keyTerms: [
              { term: "Unitary matrix", definition: "A square matrix U with U^dagger U = U U^dagger = I; equivalent to U^(-1) = U^dagger." },
              { term: "Born rule", definition: "The postulate that measurement outcome k occurs with probability |<k|psi>|^2, the squared magnitude of the amplitude." },
              { term: "Projective measurement", definition: "Measurement described by projectors {|k><k|} that collapses the state to the observed basis vector." },
              { term: "Global phase", definition: "An overall factor e^(i theta) multiplying the entire state; unobservable because it cancels in any |.|^2." },
              { term: "Relative phase", definition: "A phase difference between amplitudes within a superposition; observable through interference." },
            ],
            examQuestions: [
              {
                q: "Define a unitary matrix and prove that unitary evolution preserves the norm of a state. State the Born rule with a worked probability calculation, and explain the distinction between global and relative phase using the states |+> and |->.",
                marks: 7,
                outline: [
                  "Define unitary: U^dagger U = U U^dagger = I, equivalently U^(-1) = U^dagger.",
                  "Let |psi'> = U|psi>; compute <psi'|psi'> = <psi|U^dagger U|psi> = <psi|I|psi> = <psi|psi>.",
                  "Conclude norm preservation: ||psi'|| = ||psi||, so a normalized state remains normalized.",
                  "State the Born rule: p(k) = |<k|psi>|^2.",
                  "Worked example: |psi> = (1/2)|0> + (sqrt(3)/2)|1> gives p(0) = 1/4, p(1) = 3/4.",
                  "Define global phase e^(i theta)|psi>; show it cancels in |<k|psi>|^2 and is unobservable.",
                  "Contrast |+> = (|0> + |1>)/sqrt(2) and |-> = (|0> - |1>)/sqrt(2): relative phase pi, orthogonal under <+|-> = 0.",
                ],
              },
              {
                q: "Verify that the Pauli X matrix [[0, 1], [1, 0]] is unitary.",
                marks: 3,
              },
              {
                q: "Distinguish global phase from relative phase in one sentence each.",
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
      title: "Quantum Gates and Circuits",
      summary:
        "Unit III builds the gate and circuit model. Single-qubit gates are 2x2 unitary matrices that rotate the Bloch sphere; two-qubit gates like CNOT entangle; multi-qubit gates like Toffoli compose classical reversible logic. Circuit diagrams visualize sequences of gates, and a small universal set - H, T and CNOT - suffices to approximate any unitary to arbitrary accuracy. The unit closes with two no-go results (no-cloning, decoherence) and two communication protocols (teleportation, superdense coding).",
      chapter: {
        number: "03",
        title: "Quantum Gates and Circuits",
        intro:
          "Unit III builds the gate and circuit model. Single-qubit gates are 2x2 unitary matrices that rotate the Bloch sphere; two-qubit gates like CNOT entangle; multi-qubit gates like Toffoli compose classical reversible logic. Circuit diagrams visualize sequences of gates, and a small universal set - H, T and CNOT - suffices to approximate any unitary to arbitrary accuracy. The unit closes with two no-go results (no-cloning, decoherence) and two communication protocols (teleportation, superdense coding).",
        inOneBreath:
          "Single-qubit gates are 2x2 unitaries: X flips |0> to |1>, Z flips the phase of |1>, H sends |0> to |+> and |1> to |->, S adds phase i to |1>, T adds phase e^(i pi/4). The CNOT gate flips the target when the control is 1, with matrix [[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]]; applied to |+>|0> it produces the Bell state (|00>+|11>)/sqrt(2). SWAP exchanges two qubits; Toffoli (CCNOT) is universal for classical reversible logic. ASCII circuit diagrams read left-to-right with one wire per qubit. The set {H, T, CNOT} is universal for quantum computation: any unitary can be approximated to arbitrary accuracy by a circuit over this set. The no-cloning theorem forbids a unitary that copies an arbitrary unknown state, proven by contradiction from linearity. Decoherence times T1 and T2 set the circuit depth budget; NISQ error rates near 10^-3 limit reliable circuits to a few hundred gates. Teleportation transmits a qubit using a Bell pair and two classical bits; superdense coding sends two classical bits using one Bell-shared qubit.",
        sections: [
          {
            number: "3.1",
            title: "Single-qubit gates X, Y, Z, H, S, T",
            body: [
              "The Pauli gates are 2x2 unitaries that act as rotations by pi about the Bloch axes. X = [[0, 1], [1, 0]] is the quantum NOT gate: X|0> = |1> and X|1> = |0>. Y = [[0, -i], [i, 0]] maps Y|0> = i|1> and Y|1> = -i|0>; the global phases i are unobservable, but the relative phase matters in superpositions. Z = [[1, 0], [0, -1]] is the phase-flip gate: Z|0> = |0> and Z|1> = -|1>, flipping the sign of the |1> amplitude. All three are involutions: X^2 = Y^2 = Z^2 = I.",
              "The Hadamard gate H = (1/sqrt(2))[[1, 1], [1, -1]] creates superposition. H|0> = (|0> + |1>)/sqrt(2) = |+> and H|1> = (|0> - |1>)/sqrt(2) = |->. Applied twice, H^2 = I, so H is its own inverse. The phase gates S = [[1, 0], [0, i]] and T = [[1, 0], [0, e^(i pi/4)]] add phases to |1>: S|1> = i|1>, T|1> = e^(i pi/4)|1>. S = T^2 because (e^(i pi/4))^2 = e^(i pi/2) = i; Z = S^2 because i^2 = -1. The T gate is fundamental because {H, T, CNOT} is a universal gate set - T supplies the irrational phase needed to approximate arbitrary single-qubit rotations.",
              "Worked action on |0>: H|0> = [1/sqrt(2); 1/sqrt(2)] = |+>; then Z|+> = [1/sqrt(2); -1/sqrt(2)] = |->; then H|-> = [0; 1] = |1>. So the sequence H-Z-H on |0> yields |1>, the same as a single X. This equivalence HZH = X is the X-rotation decomposition: a pi rotation about the x-axis can be implemented as two Hadamards wrapping a Z. Each gate has a Bloch-sphere interpretation: X is a pi rotation about x, Y about y, Z about z, H is a pi rotation about the diagonal axis (x+z)/sqrt(2), S is a pi/2 rotation about z, T is a pi/4 rotation about z.",
            ],
            bullets: [
              "X = [[0, 1], [1, 0]]: bit flip; X|0> = |1>, X|1> = |0>.",
              "Y = [[0, -i], [i, 0]]: Y|0> = i|1>, Y|1> = -i|0>.",
              "Z = [[1, 0], [0, -1]]: phase flip; Z|0> = |0>, Z|1> = -|1>.",
              "H = (1/sqrt(2))[[1, 1], [1, -1]]: H|0> = |+>, H|1> = |->; H^2 = I.",
              "S = [[1, 0], [0, i]]: S|1> = i|1>; T = [[1, 0], [0, e^(i pi/4)]]: T|1> = e^(i pi/4)|1>.",
              "Gate identities: S^2 = Z, T^2 = S, HZH = X, H X H = Z.",
              "Bloch rotations: X pi about x, Z pi about z, S pi/2 about z, T pi/4 about z.",
            ],
            table: {
              caption: "Single-qubit gate matrices and their actions.",
              headers: ["Gate", "Matrix", "Action on |0>", "Action on |1>"],
              rows: [
                ["X", "[[0, 1], [1, 0]]", "|1>", "|0>"],
                ["Y", "[[0, -i], [i, 0]]", "i|1>", "-i|0>"],
                ["Z", "[[1, 0], [0, -1]]", "|0>", "-|1>"],
                ["H", "(1/sqrt(2))[[1, 1], [1, -1]]", "|+>", "|->"],
                ["S", "[[1, 0], [0, i]]", "|0>", "i|1>"],
                ["T", "[[1, 0], [0, e^(i pi/4)]]", "|0>", "e^(i pi/4)|1>"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Bloch sphere rotations of single-qubit gates",
              caption: "Each gate is a rotation; the axes and angles matter when composing circuits.",
              axes: { x: "Real phase (x-axis)", y: "Imaginary phase (y-axis)" },
              quadrants: [
                { label: "X: pi about x", note: "bit flip" },
                { label: "Z: pi about z", note: "phase flip" },
                { label: "S: pi/2 about z", note: "quadrant phase" },
                { label: "T: pi/4 about z", note: "eighth phase, irrational" },
              ],
            },
            callout: {
              type: "exam",
              title: "Gate identities worth memorizing",
              body: "Three identities save circuit-design marks: HZH = X (pi rotation about x), H X H = Z (conjugation by H swaps x and z), and S^2 = Z (the S gate is the square root of Z). Also T^2 = S and T^4 = Z. These let you rewrite circuits into the universal {H, T, CNOT} basis.",
            },
            keyTerms: [
              { term: "Pauli gates", definition: "The three 2x2 involutions X, Y, Z corresponding to pi rotations about the Bloch x, y, z axes." },
              { term: "Hadamard gate H", definition: "The unitary (1/sqrt(2))[[1, 1], [1, -1]] that creates equal superpositions and is its own inverse." },
              { term: "Phase gates S, T", definition: "Diagonal unitaries [[1, 0], [0, i]] and [[1, 0], [0, e^(i pi/4)]]; T supplies the irrational phase needed for universality." },
              { term: "Involution", definition: "A gate G with G^2 = I, so applying it twice is the identity; X, Y, Z and H are all involutions." },
              { term: "Bloch rotation", definition: "Interpretation of a single-qubit unitary as a rotation of the Bloch sphere by some angle about some axis." },
            ],
            examQuestions: [
              {
                q: "Write the matrices of the Pauli gates X, Y, Z and the Hadamard gate H. Compute their actions on |0> and |1>, and prove the identity HZH = X by direct matrix multiplication.",
                marks: 7,
                outline: [
                  "Write X = [[0, 1], [1, 0]], Y = [[0, -i], [i, 0]], Z = [[1, 0], [0, -1]].",
                  "Write H = (1/sqrt(2))[[1, 1], [1, -1]].",
                  "Compute X|0> = |1>, X|1> = |0>; Y|0> = i|1>, Y|1> = -i|0>; Z|0> = |0>, Z|1> = -|1>.",
                  "Compute H|0> = |+>, H|1> = |->.",
                  "Form the product HZH = (1/2)[[1, 1], [1, -1]] [[1, 0], [0, -1]] [[1, 1], [1, -1]].",
                  "Multiply step by step: HZ = (1/sqrt(2))[[1, -1], [1, 1]], then (HZ)H = [[0, 1], [1, 0]] = X.",
                  "Interpret: HZH is a pi rotation about the x-axis, equivalent to X.",
                ],
              },
              {
                q: "Compute S|+> and T|+>, where S = [[1, 0], [0, i]] and T = [[1, 0], [0, e^(i pi/4)]].",
                marks: 3,
              },
              {
                q: "State the relationships S^2 = Z and T^2 = S.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Hadamard superposition and the CNOT gate",
            body: [
              "The Hadamard gate turns a classical bit into a uniform superposition. H|0> = (1/sqrt(2))(|0> + |1>) = |+> gives equal amplitudes on |0> and |1>; measuring |+> yields 0 or 1 with probability 1/2 each. Applied to n qubits in |0> tensor n, the gate H tensor n produces the uniform superposition (1/sqrt(2^n)) sum over x in {0, 1}^n of |x>, the input state for Grover, Deutsch-Jozsa, Bernstein-Vazirani and Simon algorithms. The Hadamard's role as a superposition-preparer and a basis-changer (mapping between computational and Hadamard bases) makes it the most-used single gate.",
              "CNOT is the workhorse two-qubit gate. With control qubit c and target t, CNOT flips the target if and only if the control is |1>: CNOT|00> = |00>, CNOT|01> = |01>, CNOT|10> = |11>, CNOT|11> = |10>. The matrix in the basis {|00>, |01>, |10>, |11>} is [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], which swaps the last two basis vectors. CNOT is its own inverse: applying it twice returns the original state. It is the canonical entangling gate.",
              "Worked entangling circuit. Start from |00>; apply H to qubit 0 to get |+>|0> = (1/sqrt(2))(|00> + |10>); apply CNOT(0, 1) which maps |10> to |11> and leaves |00> unchanged, yielding (1/sqrt(2))(|00> + |11>) = |Phi+>. The two qubits are now entangled - measuring qubit 0 gives 0 or 1 with probability 1/2, and qubit 1 is guaranteed to match. Before the CNOT, the state was a product |+>|0>; after, it is non-factorable. The CNOT is therefore the engine of entanglement, and any two-qubit entangling gate together with single-qubit rotations forms a universal set.",
            ],
            bullets: [
              "H|0> = |+> = (|0> + |1>)/sqrt(2); H|1> = |-> = (|0> - |1>)/sqrt(2).",
              "H tensor n on |0> tensor n: uniform superposition (1/sqrt(2^n)) sum_x |x>.",
              "CNOT(c, t): flips target iff control = 1.",
              "CNOT matrix: [[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]] - swaps |10> and |11>.",
              "CNOT is self-inverse: applying twice returns the original state.",
              "H + CNOT on |00> yields Bell state |Phi+> = (|00> + |11>)/sqrt(2).",
              "CNOT plus single-qubit rotations form a universal gate set.",
            ],
            codeExample: {
              language: "python",
              caption: "Build a Bell state with H then CNOT in Qiskit-style pseudo-code.",
              code: `
# Start from |00>; H on qubit 0, then CNOT(0, 1) -> Bell state |Phi+>
qc = QuantumCircuit(2, 2)
qc.h(0)            # |00> -> (|00> + |10>) / sqrt(2)
qc.cx(0, 1)        # flip target if control = 1: |10> -> |11>
qc.measure([0, 1], [0, 1])
counts = run(qc, shots=1000)
# Expected: {'00': ~500, '11': ~500}; never '01' or '10'
print(counts)
`,
            },
            diagram: {
              kind: "flow",
              title: "Entangling |00> into a Bell state",
              caption: "Two gates, one entangled pair - the canonical preparation circuit.",
              steps: [
                { label: "Start |00>", note: "product state" },
                { label: "H on qubit 0", note: "|00> -> (|00> + |10>)/sqrt(2)" },
                { label: "CNOT(0, 1)", note: "|10> -> |11>; result (|00> + |11>)/sqrt(2)" },
                { label: "Measure", note: "outcomes 00 or 11 with prob 1/2 each" },
              ],
            },
            callout: {
              type: "exam",
              title: "CNOT matrix memorization",
              body: "The 4x4 CNOT matrix is the identity with the bottom-right 2x2 block replaced by [[0, 1], [1, 0]] (an X). Equivalently: [[I, 0], [0, X]] in 2x2 block form. Memorize this once - it is the matrix examiners expect on any CNOT question.",
            },
            keyTerms: [
              { term: "Hadamard gate H", definition: "The 2x2 unitary (1/sqrt(2))[[1, 1], [1, -1]] that produces uniform superpositions and interchanges the computational and Hadamard bases." },
              { term: "CNOT gate", definition: "Two-qubit gate that flips the target iff the control is |1>; matrix [[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]]." },
              { term: "Control-target notation", definition: "CNOT(c, t) means qubit c controls, qubit t is flipped; order matters in the circuit diagram." },
              { term: "Entangling gate", definition: "A two-qubit gate that can produce states not factorizable as a tensor product; CNOT is the canonical example." },
            ],
            examQuestions: [
              {
                q: "Describe the Hadamard gate and the CNOT gate with their matrices. Show step-by-step how applying H on qubit 0 followed by CNOT(0, 1) to the state |00> produces the Bell state |Phi+> = (|00> + |11>)/sqrt(2).",
                marks: 7,
                outline: [
                  "Write H = (1/sqrt(2))[[1, 1], [1, -1]] and note H|0> = |+> = (|0> + |1>)/sqrt(2).",
                  "Write CNOT matrix [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]] and explain control-target action.",
                  "Apply H to qubit 0 of |00>: yields (|0> + |1>)/sqrt(2) tensor |0> = (|00> + |10>)/sqrt(2).",
                  "Apply CNOT(0, 1): basis vector |00> is unchanged (control = 0); |10> maps to |11> (control = 1, target flips).",
                  "Result: (|00> + |11>)/sqrt(2) = |Phi+>.",
                  "Note that the resulting state is non-factorable (entangled) - see section 2.5 proof.",
                  "Conclude: H + CNOT is the standard Bell-state preparation circuit.",
                ],
              },
              {
                q: "Give the CNOT truth table on the four basis states |00>, |01>, |10>, |11>.",
                marks: 3,
              },
              {
                q: "What is H tensor H applied to |00>?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "SWAP, Toffoli and entangling |+> states",
            body: [
              "The SWAP gate exchanges two qubits: SWAP|01> = |10>, SWAP|10> = |01>, and SWAP|00> = |00>, SWAP|11> = |11>. Its 4x4 matrix is [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]], which swaps the middle two basis vectors. SWAP is its own inverse and is implemented in hardware as three CNOTs: SWAP(a, b) = CNOT(a, b) CNOT(b, a) CNOT(a, b). SWAP is not entangling when applied to product states, but it appears in routing circuits to bring distant qubits adjacent for a CNOT.",
              "The Toffoli gate, also called CCNOT, is a three-qubit gate with two controls and one target; it flips the target iff both controls are |1>. Toffoli is universal for classical reversible computation: any Boolean function can be implemented as a Toffoli circuit with ancilla bits, which is the bridge from classical logic to reversible computing. The Toffoli matrix is 8x8: it permutes basis vectors by swapping |110> with |111> and leaving the other six unchanged. Toffoli is also implementable as a quantum circuit using six CNOTs, several H gates and T/T^dagger gates - the standard decomposition.",
              "The CNOT's action on Hadamard-basis inputs reveals its diagonal structure. Apply CNOT(0, 1) to |+>|+> = (1/2)(|00> + |01> + |10> + |11>): the |10> component flips the target from 0 to 1, giving |11>, and the |11> component flips the target from 1 to 0, giving |10>; the |00> and |01> components have control 0 and are unchanged. Sum: (1/2)(|00> + |01> + |11> + |10>) = |+>|+> again. So |+>|+> is an eigenstate of CNOT with eigenvalue +1, while |->|-> is also an eigenstate with eigenvalue +1, and |+>|->, |->|+> swap under CNOT. This stabilizer structure underlies teleportation and superdense coding.",
            ],
            bullets: [
              "SWAP: 2-qubit gate exchanging qubits; matrix [[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]].",
              "SWAP implemented as three CNOTs: CNOT(a,b) CNOT(b,a) CNOT(a,b).",
              "Toffoli (CCNOT): 3-qubit gate, flips target iff both controls = 1.",
              "Toffoli is universal for classical reversible computation.",
              "Toffoli decomposes into 6 CNOTs plus single-qubit T and H gates.",
              "CNOT on |+>|+> returns |+>|+> (eigenstate, eigenvalue +1).",
              "Stabilizer structure of |+>, |-> under CNOT underlies teleportation.",
            ],
            table: {
              caption: "Multi-qubit gates: matrix size and action.",
              headers: ["Gate", "Qubits", "Action", "Universal?"],
              rows: [
                ["CNOT", "2", "flips target if control = 1", "with single-qubit rotations, yes"],
                ["SWAP", "2", "exchanges two qubits", "no (routing only)"],
                ["CZ (controlled-Z)", "2", "phases target if control = 1", "equivalent to CNOT up to H"],
                ["Toffoli (CCNOT)", "3", "flips target if both controls = 1", "universal for classical reversible"],
                ["Fredkin (CSWAP)", "3", "swaps targets if control = 1", "universal for classical reversible"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "CNOT, SWAP and Toffoli at a glance",
              caption: "Three multi-qubit gates, three roles - entangle, route, compute reversibly.",
              left: {
                heading: "CNOT",
                items: [
                  "2-qubit gate, matrix 4x4",
                  "Flips target iff control = 1",
                  "Self-inverse",
                  "Entangling; universal with single-qubit rotations",
                  "Foundation of Bell-state preparation",
                ],
              },
              right: {
                heading: "SWAP and Toffoli",
                items: [
                  "SWAP: 2-qubit, exchanges qubits",
                  "SWAP: implemented as 3 CNOTs",
                  "Toffoli: 3-qubit, matrix 8x8",
                  "Toffoli: flips target iff both controls = 1",
                  "Toffoli: universal for reversible classical logic",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "SWAP as three CNOTs",
              body: "Hardware often lacks a native SWAP, so the compiler implements it as CNOT(a, b) CNOT(b, a) CNOT(a, b). Verify: each step copies and flips, and after three steps the values are exchanged. Memorize this decomposition - it earns easy marks on routing questions.",
            },
            keyTerms: [
              { term: "SWAP gate", definition: "Two-qubit gate that exchanges the states of its inputs; matrix [[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]]." },
              { term: "Toffoli gate", definition: "Three-qubit controlled-controlled-NOT that flips the target iff both controls are |1>; universal for reversible classical computation." },
              { term: "Fredkin gate", definition: "Three-qubit controlled-SWAP that exchanges the two target qubits iff the control is |1>." },
              { term: "Controlled-Z (CZ)", definition: "Two-qubit gate that applies Z to the target iff the control is |1>; equivalent to CNOT up to Hadamard conjugation." },
              { term: "Reversible computation", definition: "Computation in which every gate is bijective; required for quantum computation because unitaries are invertible." },
            ],
            examQuestions: [
              {
                q: "Define the SWAP and Toffoli gates with their matrices or truth tables. Show that SWAP can be implemented as three CNOTs, and state the role of Toffoli in reversible classical computation.",
                marks: 7,
                outline: [
                  "Write the SWAP truth table: |00> -> |00>, |01> -> |10>, |10> -> |01>, |11> -> |11>.",
                  "Write the SWAP matrix [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]].",
                  "Define the Toffoli gate: flips target iff both controls = 1; matrix is 8x8 permuting |110> and |111>.",
                  "State Toffoli universality for reversible classical logic: any Boolean function can be built from Toffoli and ancilla.",
                  "Decompose SWAP(a, b) = CNOT(a, b) CNOT(b, a) CNOT(a, b); track values step by step.",
                  "Verify: after first CNOT, b holds a XOR b; after second, a holds original b; after third, b holds original a.",
                  "Conclude: any reversible circuit can be implemented in the {Toffoli} basis, but quantum hardware prefers CNOT-based decompositions.",
                ],
              },
              {
                q: "Write the truth table of the Toffoli gate on the eight three-qubit basis states.",
                marks: 3,
              },
              {
                q: "Give the matrix of the SWAP gate.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Circuit diagrams and universality",
            body: [
              "Quantum circuits are drawn left-to-right with one horizontal wire per qubit. Each gate is a labeled box on the wire(s) it acts on; single-qubit gates sit on one wire, two-qubit gates like CNOT connect two wires with a dot on the control and a circled-plus on the target. Measurement is a meter symbol feeding a classical wire. An ASCII Bell-state circuit reads: q0: --H--*--, with q1: -----+-- below it, where the * is the CNOT control on q0 and the + is the target on q1. Time flows left to right: prepare |00>, apply H to q0, apply CNOT(0, 1), measure.",
              "Universality asks which gate sets can approximate any unitary to arbitrary accuracy. The single-qubit rotations together with CNOT form a universal set: any n-qubit unitary can be decomposed into a sequence of one-qubit rotations and CNOTs. A discrete universal set is {H, T, CNOT}: the T gate supplies an irrational phase e^(i pi/4) whose powers are dense in the unit circle, so combinations of H and T approximate any single-qubit rotation to within any desired epsilon; combined with CNOT for entanglement, the set is universal for all of quantum computation. This is why hardware vendors implement H, T (or equivalent), and CNOT as native gates.",
              "Approximation accuracy costs gates. The Solovay-Kitaev theorem guarantees that any single-qubit unitary can be approximated to epsilon accuracy using O(log^c(1/epsilon)) gates from {H, T}, with constant c around 3. For multi-qubit unitaries, the decomposition cost grows exponentially with qubit count in the worst case - a generic n-qubit unitary needs O(4^n) gates - but useful unitaries (sparse, structured, low-depth) are far cheaper. The practical lesson for circuit design is to keep circuits shallow: every gate adds noise, so the budget is set by the device's error rate and coherence time.",
            ],
            bullets: [
              "Circuit diagrams: one wire per qubit, time left to right.",
              "Single-qubit gate: box on a wire; CNOT: dot on control, circled-plus on target.",
              "Measurement: meter symbol; classical wires drawn as double lines.",
              "Universal gate set: any unitary approximable to arbitrary accuracy.",
              "Single-qubit rotations + CNOT: continuous universal set.",
              "{H, T, CNOT}: discrete universal set; T supplies irrational phase.",
              "Solovay-Kitaev: O(log^c(1/epsilon)) gates approximate any single-qubit unitary.",
            ],
            codeExample: {
              language: "python",
              caption: "A three-gate circuit in Qiskit-style pseudo-code.",
              code: `
# Circuit: H on q0, CNOT(0, 1), measure both qubits
qc = QuantumCircuit(2, 2)
qc.h(0)              # superposition on q0
qc.cx(0, 1)          # entangle
qc.measure([0, 1], [0, 1])
# ASCII schematic this code produces:
#   q0: --H--*--M
#            |
#   q1: -----+--M
counts = run(qc, shots=1000)
print(counts)        # {'00': ~500, '11': ~500}
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Universal gate set decomposition",
              caption: "From an abstract unitary to a hardware-executable circuit - the compiler pipeline.",
              stages: [
                { label: "Target unitary U", note: "any n-qubit unitary" },
                { label: "Two-level decomposition", note: "into one- and two-qubit blocks" },
                { label: "Single-qubit rotation + CNOT", note: "continuous universal set" },
                { label: "Solovay-Kitaev approximation", note: "H, T approximate any rotation" },
                { label: "Hardware-native gates", note: "{H, T, CNOT} or vendor equivalents" },
              ],
            },
            callout: {
              type: "exam",
              title: "Universal sets to remember",
              body: "Three universal sets to name in any universality question: (1) all single-qubit rotations plus CNOT; (2) {H, T, CNOT} - the standard discrete universal set; (3) Toffoli alone is universal for classical reversible computation, but not for quantum. The irrationality of T's phase is what makes the second set work.",
            },
            keyTerms: [
              { term: "Quantum circuit", definition: "A directed acyclic graph of gates on qubit wires, drawn left-to-right with time flowing horizontally." },
              { term: "Universal gate set", definition: "A set of gates whose circuits can approximate any unitary to arbitrary accuracy; {H, T, CNOT} is the standard example." },
              { term: "Solovay-Kitaev theorem", definition: "Guarantees that any single-qubit unitary can be approximated to epsilon accuracy using O(log^c(1/epsilon)) gates from a discrete universal set." },
              { term: "Circuit depth", definition: "The number of time steps in a circuit, equal to the longest path through the gate graph; depth is limited by coherence time." },
            ],
            examQuestions: [
              {
                q: "Draw the quantum circuit that prepares a Bell state from |00>, label every element, and state why the gate set {H, T, CNOT} is universal for quantum computation.",
                marks: 7,
                outline: [
                  "Draw two horizontal wires labeled q0 and q1, time flowing left to right.",
                  "Place an H box on q0; place a CNOT with control dot on q0 and target circled-plus on q1.",
                  "Place measurement meters on both wires leading to classical output lines.",
                  "Trace the state: |00> -> H -> (|00> + |10>)/sqrt(2) -> CNOT -> (|00> + |11>)/sqrt(2).",
                  "State universality: single-qubit rotations + CNOT can express any n-qubit unitary.",
                  "Show {H, T} approximate any single-qubit rotation because T's phase e^(i pi/4) is irrational on the unit circle; combined with CNOT the set is universal.",
                  "Cite the Solovay-Kitaev theorem: O(log^c(1/epsilon)) gates suffice for epsilon accuracy.",
                ],
              },
              {
                q: "State the Solovay-Kitaev theorem and explain why T's phase being irrational matters.",
                marks: 3,
              },
              {
                q: "Draw the ASCII circuit for H on q0 followed by CNOT(0, 1).",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "No-cloning theorem and decoherence",
            body: [
              "The no-cloning theorem forbids a unitary that copies an arbitrary unknown quantum state. Formally, suppose there exists a unitary U and a blank state |0> such that U|psi>|0> = |psi>|psi> for every |psi>. Then for two states |psi> and |phi>, U(|psi>|0>) = |psi>|psi> and U(|phi>|0>) = |phi>|phi>. Taking inner products: <psi|phi><0|0> = <psi|phi><psi|phi>, that is <psi|phi> = <psi|phi|^2. Since inner products are complex numbers in [0, 1] magnitude, the equation z = z^2 holds only when z = 0 or z = 1 - so cloning works only for orthogonal states. No unitary can clone arbitrary unknown states.",
              "The theorem is a direct consequence of linearity. A unitary acts linearly, but cloning acts quadratically on superpositions: cloning (|0> + |1>)/sqrt(2) would require producing (|0> + |1>) tensor 2 / 2 = (|00> + |01> + |10> + |11>)/2, which is a uniform superposition, not the entangled (|00> + |11>)/sqrt(2) that a true 'clone' of the superposition would demand. The linearity of unitary evolution forces the output to be the tensor product, not the entangled clone. No-cloning is the structural reason quantum key distribution works: an eavesdropper cannot copy qubits in transit without disturbing them.",
              "Decoherence is the loss of quantum information to the environment. Two characteristic timescales: T1 (energy relaxation, |1> decays to |0>) and T2 (phase coherence, superposition dephases). For superconducting qubits T1 and T2 are tens to hundreds of microseconds; for trapped ions they reach seconds. Gate error rates compound the picture: single-qubit gates achieve 10^-4 to 10^-3 error, two-qubit gates 10^-3 to 10^-2, and measurement errors 10^-3. A circuit deeper than about 1/error_rate produces noise-dominated output. NISQ algorithms therefore target short-depth ansatze and accept noisy outputs that are classically post-processed.",
            ],
            bullets: [
              "No-cloning: no unitary U with U|psi>|0> = |psi>|psi> for all |psi>.",
              "Proof: <psi|phi> = <psi|phi|^2 forces z = z^2, solvable only for z=0 or z=1.",
              "Linearity view: cloning is non-linear in amplitudes, but unitaries are linear.",
              "Consequence for cryptography: eavesdroppers cannot copy qubits undisturbed.",
              "T1: energy relaxation time (|1> -> |0>); T2: dephasing time.",
              "Superconducting T1, T2: tens to hundreds of microseconds; trapped ion: seconds.",
              "Error rates: single-qubit 10^-4 to 10^-3; two-qubit 10^-3 to 10^-2; measurement 10^-3.",
            ],
            codeExample: {
              language: "python",
              caption: "Attempting to clone in Qiskit-style pseudo-code - the result is entanglement, not a copy.",
              code: `
# Try to clone |+> by CNOT(0, 1) on |+>|0>
qc = QuantumCircuit(2, 2)
qc.h(0)              # q0 -> |+>
qc.cx(0, 1)          # attempt to clone
qc.measure([0, 1], [0, 1])
counts = run(qc, shots=1000)
# Outcomes: {'00': ~500, '11': ~500}
# A true clone of |+> would give independent 50/50 outcomes
# on each qubit - including '01' and '10'.
# Their absence proves this is entanglement, not cloning.
print(counts)
`,
            },
            diagram: {
              kind: "fork",
              title: "Can we clone an unknown state?",
              caption: "The no-cloning theorem permits cloning only for orthogonal inputs - any other attempt fails.",
              start: "Unknown qubit |psi>",
              branches: [
                { label: "|psi> is |0> or |1> (orthogonal)", outcome: "X gate copies bit value; trivial", good: true },
                { label: "|psi> is |+> or |->", outcome: "Cannot clone; CNOT produces entanglement, not a copy", good: false },
                { label: "|psi> is arbitrary", outcome: "No unitary exists; theorem forbids it", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Don't write 'copy the qubit'",
              body: "Quantum algorithms never copy unknown states. The teleportation protocol (next section) transfers a state by consuming entanglement and classical communication, not by copying. Quantum error correction encodes information redundantly but only into known basis states, not by cloning arbitrary inputs. If your answer says 'copy', check whether you mean 'measure then prepare' (works for known states only) or 'teleport' (works for unknown states but destroys the original).",
            },
            keyTerms: [
              { term: "No-cloning theorem", definition: "The result that no unitary can copy an arbitrary unknown quantum state, proven from linearity of unitary evolution." },
              { term: "T1 (relaxation time)", definition: "The characteristic time for a qubit in |1> to decay to |0> via energy loss to the environment." },
              { term: "T2 (dephasing time)", definition: "The characteristic time over which a qubit's phase coherence is lost; superpositions degrade to classical mixtures." },
              { term: "Decoherence", definition: "The loss of quantum information from a system to its environment, parameterized by T1 and T2." },
              { term: "NISQ", definition: "Noisy Intermediate-Scale Quantum; the current era of 50-1000 qubit devices without error correction." },
            ],
            examQuestions: [
              {
                q: "State and prove the no-cloning theorem. Explain how the proof follows from the linearity of unitary evolution, and give one consequence for quantum cryptography.",
                marks: 7,
                outline: [
                  "State the theorem: no unitary U exists such that U|psi>|0> = |psi>|psi> for all |psi>.",
                  "Assume such U exists; apply it to |psi> and |phi>: U|psi>|0> = |psi>|psi>, U|phi>|0> = |phi>|phi>.",
                  "Take inner product of both equations: <psi|phi><0|0> = <psi|phi><psi|phi>, so <psi|phi> = <psi|phi|^2.",
                  "Solve z = z^2 for complex z: holds only when z = 0 (orthogonal states) or z = 1 (identical states).",
                  "Conclude cloning is impossible for non-orthogonal states.",
                  "Explain the linearity view: cloning (a|0> + b|1>) tensor 2 is non-linear in a, b, but unitaries are linear.",
                  "Consequence for cryptography: BB84 security relies on the eavesdropper's inability to copy qubits; any measurement disturbs them.",
                ],
              },
              {
                q: "Define T1 and T2 and give their typical orders of magnitude for superconducting qubits.",
                marks: 3,
              },
              {
                q: "Why does CNOT(0, 1) on |+>|0> not produce a clone of |+>?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.6",
            title: "Quantum teleportation and superdense coding",
            body: [
              "Quantum teleportation transfers an unknown qubit from Alice to Bob using a shared Bell pair and two classical bits. The protocol: Alice and Bob share |Phi+> = (|00> + |11>)/sqrt(2) (qubits A and B). Alice holds the unknown |psi> = a|0> + b|1> on qubit A'. The total state is |psi> tensor |Phi+>. Alice applies CNOT(A', A) then H on A', then measures A' and A in the computational basis, obtaining two classical bits (m1, m2). She sends these bits to Bob over a classical channel.",
              "Bob applies a correction based on the two bits: if (m1, m2) = (0, 0), the state is already |psi>; if (0, 1), apply X; if (1, 0), apply Z; if (1, 1), apply ZX. After the correction, Bob's qubit B holds |psi>. The classical bits carry no information about |psi> itself - they are uniformly random - so the protocol does not transmit information faster than light; the classical communication is essential. Teleportation transfers the quantum state by consuming entanglement and classical bits, exactly the resource trade.",
              "Superdense coding is the dual protocol: it sends two classical bits using one qubit, provided Alice and Bob pre-share a Bell pair. Starting from |Phi+> shared between Alice (qubit A) and Bob (qubit B), Alice applies one of {I, X, Z, ZX} to her qubit to encode two bits: 00 -> I, 01 -> X, 10 -> Z, 11 -> ZX. She sends her single qubit to Bob over a quantum channel. Bob applies CNOT(A, B) then H on A, then measures both, recovering the two bits. The Bell pair's entanglement doubles the classical capacity of the qubit channel. Together teleportation and superdense coding illustrate the resource interconversion: entanglement plus classical bits equals quantum communication, and entanglement plus quantum communication equals two classical bits.",
            ],
            bullets: [
              "Teleportation: transfer an unknown qubit using 1 Bell pair + 2 classical bits.",
              "Alice's Bell measurement yields two uniformly random bits - reveal nothing about |psi>.",
              "Bob's corrections: (0,0)->I, (0,1)->X, (1,0)->Z, (1,1)->ZX.",
              "Original |psi> is destroyed by Alice's measurement - no-cloning preserved.",
              "No faster-than-light: Bob's qubit looks random until classical bits arrive.",
              "Superdense coding: 2 classical bits via 1 qubit + 1 shared Bell pair.",
              "Resource equations: 1 ebit + 2 cbits = 1 qubit; 1 ebit + 1 qubit = 2 cbits.",
            ],
            codeExample: {
              language: "python",
              caption: "Teleportation circuit in Qiskit-style pseudo-code.",
              code: `
# Teleport |psi> on q0 to q2 using Bell pair shared on q1, q2
qc = QuantumCircuit(3, 3)
# Prepare |psi> on q0 (arbitrary single-qubit state)
qc.ry(1.2, 0)
# Distribute Bell pair |Phi+> on q1 (Alice) and q2 (Bob)
qc.h(1)
qc.cx(1, 2)
# Alice's Bell measurement on q0, q1
qc.cx(0, 1)
qc.h(0)
qc.measure([0, 1], [0, 1])
# Bob's conditional corrections on q2
qc.cx(1, 2)    # apply X if Alice's bit 1 is set
qc.cz(0, 2)    # apply Z if Alice's bit 0 is set
# Verify q2 holds |psi> by measuring
qc.measure(2, 2)
print(run(qc, shots=1000))
`,
            },
            diagram: {
              kind: "flow",
              title: "Teleportation protocol in five steps",
              caption: "Entanglement + 2 classical bits = 1 unknown qubit transferred.",
              steps: [
                { label: "Share Bell pair |Phi+> between Alice (A) and Bob (B)", note: "pre-distributed entanglement" },
                { label: "Alice applies CNOT(psi, A) then H on psi", note: "Bell-basis measurement on her two qubits" },
                { label: "Alice measures, gets 2 classical bits (m1, m2)", note: "uniformly random - reveal nothing about |psi>" },
                { label: "Alice sends (m1, m2) to Bob classically", note: "no faster-than-light signalling" },
                { label: "Bob applies I/X/Z/ZX based on (m1, m2)", note: "recovers |psi> on his qubit" },
              ],
            },
            callout: {
              type: "exam",
              title: "Resource accounting",
              body: "Teleportation does not violate no-cloning: Alice's original |psi> is destroyed by her measurement. The resource equation is: 1 ebit (shared Bell pair) + 2 classical bits = 1 qubit transferred. Superdense coding is the dual: 1 ebit + 1 qubit sent = 2 classical bits. Memorize both equations.",
            },
            keyTerms: [
              { term: "Quantum teleportation", definition: "Protocol transferring an unknown qubit using a shared Bell pair and two classical bits; the original is destroyed." },
              { term: "Superdense coding", definition: "Protocol sending two classical bits using one qubit and a pre-shared Bell pair; the dual of teleportation." },
              { term: "Ebit", definition: "One unit of shared entanglement, typically a Bell pair; the resource consumed by teleportation and superdense coding." },
              { term: "Bell measurement", definition: "A projective measurement in the Bell basis {|Phi+>, |Phi->, |Psi+>, |Psi->}, distinguishing the four maximally entangled two-qubit states." },
              { term: "Conditional correction", definition: "A Pauli operator (I, X, Z, or ZX) applied by Bob depending on Alice's classical measurement outcome in teleportation." },
            ],
            examQuestions: [
              {
                q: "Describe the quantum teleportation protocol step by step. Identify the resources consumed and explain why the protocol does not violate the no-cloning theorem or the no-communication theorem.",
                marks: 7,
                outline: [
                  "Set up: Alice holds |psi> on q0; Alice and Bob share |Phi+> on q1 (Alice) and q2 (Bob).",
                  "Alice applies CNOT(q0, q1) then H on q0 - this performs a Bell-basis measurement on her two qubits.",
                  "Alice measures q0 and q1, obtaining two classical bits (m1, m2) uniformly at random.",
                  "Alice sends (m1, m2) to Bob over a classical channel.",
                  "Bob applies I (00), X (01), Z (10), or ZX (11) to q2; the result is |psi>.",
                  "Resource: 1 ebit + 2 classical bits = 1 qubit transferred; original destroyed so no-cloning holds.",
                  "No faster-than-light: Bob's qubit looks random until Alice's bits arrive classically.",
                ],
              },
              {
                q: "Describe the superdense coding protocol and state what is sent over the quantum channel.",
                marks: 3,
              },
              {
                q: "Name the four Bell states.",
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
      title: "Quantum Algorithms",
      summary:
        "Unit IV puts the toolkit to work. Deutsch-Jozsa distinguishes constant from balanced functions in one oracle query; Bernstein-Vazirani recovers a hidden string in one query; Grover searches an unstructured database in O(sqrt(N)) iterations; Simon and Shor exploit period-finding via the quantum Fourier transform. Each algorithm follows the same three-step skeleton - superposition, interference, measurement - and the worked ASCII math shows how the amplitudes pile onto the answer. The unit closes with caveats: speed-ups are problem-specific, and Shor requires fault-tolerant hardware not yet available.",
      chapter: {
        number: "04",
        title: "Quantum Algorithms",
        intro:
          "Unit IV puts the toolkit to work. Deutsch-Jozsa distinguishes constant from balanced functions in one oracle query; Bernstein-Vazirani recovers a hidden string in one query; Grover searches an unstructured database in O(sqrt(N)) iterations; Simon and Shor exploit period-finding via the quantum Fourier transform. Each algorithm follows the same three-step skeleton - superposition, interference, measurement - and the worked ASCII math shows how the amplitudes pile onto the answer. The unit closes with caveats: speed-ups are problem-specific, and Shor requires fault-tolerant hardware not yet available.",
        inOneBreath:
          "Deutsch-Jozsa decides if f: {0,1}^n -> {0,1} is constant or balanced in one oracle query, exploiting the Hadamard-transformed phase pattern: constant gives uniform amplitude on |0>^n, balanced gives zero. Bernstein-Vazirani recovers a hidden bit string s with f(x) = s.x mod 2 in one oracle query by reading the computational-basis outcome after Hadamard. Grover's algorithm searches N items in O(sqrt(N)) iterations, each consisting of an oracle (flips amplitude of marked) and a diffusion operator (reflects about the mean); for N=4 one iteration amplifies the marked item to probability 1. Amplitude amplification generalizes Grover to any initial superposition and any number of marked items. Simon's algorithm finds a hidden period s with f(x) = f(y) iff y = x XOR s in O(n) queries; it is the period-finding precursor to Shor. Shor's algorithm factors an N-bit integer in polynomial time by reducing factoring to period-finding of f(x) = a^x mod N and using the quantum Fourier transform to extract the period; this breaks RSA because factoring is the hardness assumption. Caveats: Shor requires millions of physical qubits with error correction, far beyond current NISQ hardware.",
        sections: [
          {
            number: "4.1",
            title: "Deutsch-Jozsa - constant vs balanced in one query",
            body: [
              "The Deutsch-Jozsa problem: given a function f: {0, 1}^n -> {0, 1} promised to be either constant (same output for all inputs) or balanced (output 0 for half the inputs and 1 for the other half), decide which with the minimum number of oracle queries. Classically, a deterministic answer needs up to 2^(n-1) + 1 queries in the worst case: until you see two different outputs you cannot rule out constant, and you might need to check half the inputs plus one. A probabilistic classical algorithm needs O(1) queries for high confidence but never certainty. The quantum algorithm decides with certainty in one query.",
              "The algorithm prepares |0>^n|1>, applies H tensor (n+1) to get (1/sqrt(2^n)) sum_x |x> tensor |->, where |-> = (|0> - |1>)/sqrt(2). The oracle U_f acts as |x>|y> -> |x>|y XOR f(x)>; on the |-> auxiliary this applies a phase (-1)^f(x), giving (1/sqrt(2^n)) sum_x (-1)^f(x) |x> tensor |->. Then H tensor n on the control register: the amplitude on |0>^n becomes (1/2^n) sum_x (-1)^f(x). If f is constant, all terms agree and the sum is +/- 1; if f is balanced, half the terms are +1 and half are -1, so the sum is 0. Measuring the control register: outcome 0^n means constant; any other outcome means balanced.",
              "The n=1 case is the original Deutsch algorithm. With one input bit, f: {0, 1} -> {0, 1} is constant (00 or 11) or balanced (01 or 10, i.e. identity or NOT). The algorithm prepares |01>, applies H tensor H to get |+>|->, applies U_f (phase kickback gives +/-|x> depending on f(x)), applies H to the first qubit, and measures. The measurement distinguishes constant (outcome 0) from balanced (outcome 1) in a single oracle call - a clean exponential separation over the worst-case classical 2 queries for n=1 (the gap grows as 2^(n-1)+1 vs 1).",
            ],
            bullets: [
              "DJ problem: f promised constant or balanced; decide which.",
              "Classical deterministic worst case: 2^(n-1) + 1 queries.",
              "Quantum algorithm: 1 query, deterministic answer.",
              "Circuit: prepare |0>^n|1>, H tensor (n+1), oracle, H tensor n on control, measure.",
              "Phase kickback: |x>|-> goes to (-1)^f(x) |x>|->.",
              "After final Hadamard: amplitude on |0>^n is (1/2^n) sum_x (-1)^f(x).",
              "Constant -> +/-1 (measure 0^n); balanced -> 0 (never measure 0^n).",
            ],
            codeExample: {
              language: "python",
              caption: "Deutsch-Jozsa circuit skeleton in Qiskit-style pseudo-code.",
              code: `
# Decide constant vs balanced for f: {0,1}^n -> {0,1} with one query
n = 3
qc = QuantumCircuit(n + 1, n)
# Prepare |0>^n |1>
qc.x(n)
# Apply H to all qubits
for q in range(n + 1):
    qc.h(q)
# Apply the oracle U_f (phase kickback on auxiliary |->)
apply_oracle(qc)        # implements U_f|x>|y> = |x>|y XOR f(x)>
# Apply H to control register
for q in range(n):
    qc.h(q)
# Measure control register
qc.measure(range(n), range(n))
counts = run(qc, shots=100)
# '000' -> constant; anything else -> balanced
print(counts)
`,
            },
            diagram: {
              kind: "flow",
              title: "Deutsch-Jozsa circuit, top to bottom",
              caption: "Five stages; one oracle call distinguishes constant from balanced with certainty.",
              steps: [
                { label: "Prepare |0>^n |1>", note: "control + auxiliary" },
                { label: "H tensor (n+1)", note: "uniform superposition + |->" },
                { label: "Oracle U_f", note: "phase kickback (-1)^f(x)" },
                { label: "H tensor n on control", note: "interference: amplitude on 0^n" },
                { label: "Measure control register", note: "0^n => constant; else => balanced" },
              ],
            },
            callout: {
              type: "exam",
              title: "Phase kickback is the trick",
              body: "The auxiliary qubit in |-> = (|0> - |1>)/sqrt(2) lets the oracle's XOR operation manifest as a phase (-1)^f(x) on the control register. This is phase kickback - the auxiliary 'kicks back' a phase that depends on f(x) without measuring it. Memorize the construction: |x>|-> goes to (-1)^f(x) |x>|->.",
            },
            keyTerms: [
              { term: "Deutsch-Jozsa problem", definition: "Decide whether a function f: {0,1}^n -> {0,1} promised constant or balanced is which, with minimum oracle queries." },
              { term: "Phase kickback", definition: "When an oracle |x>|y> -> |x>|y XOR f(x)> acts on |x> tensor |->, the result is (-1)^f(x) |x> tensor |->; the phase appears on the control." },
              { term: "Constant function", definition: "A function with the same output for every input; in Deutsch-Jozsa, the case where measurement yields |0>^n." },
              { term: "Balanced function", definition: "A function whose output is 0 on exactly half the inputs and 1 on the other half; in Deutsch-Jozsa, the case where measurement never yields |0>^n." },
            ],
            examQuestions: [
              {
                q: "Describe the Deutsch-Jozsa algorithm step by step. Show how a single oracle query distinguishes a constant function from a balanced function, and contrast the quantum query complexity with the deterministic classical complexity.",
                marks: 7,
                outline: [
                  "State the problem: f: {0, 1}^n -> {0, 1} promised constant or balanced; decide which.",
                  "Prepare |0>^n|1>; apply H tensor (n+1) to obtain (1/sqrt(2^n)) sum_x |x> tensor |->.",
                  "Apply oracle U_f: |x>|y> -> |x>|y XOR f(x)>; on |-> auxiliary this yields (-1)^f(x) |x>|->.",
                  "Apply H tensor n to the control register: amplitude on |0>^n becomes (1/2^n) sum_x (-1)^f(x).",
                  "If f is constant, all signs agree, sum is +/-1, so measurement gives |0>^n with probability 1.",
                  "If f is balanced, half signs are +1 and half -1, sum is 0, so measurement never gives |0>^n.",
                  "Contrast: deterministic classical worst case is 2^(n-1) + 1 queries; quantum uses 1.",
                ],
              },
              {
                q: "Describe the n=1 Deutsch algorithm and what is measured.",
                marks: 3,
              },
              {
                q: "Define phase kickback in one sentence.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Bernstein-Vazirani - hidden string in one query",
            body: [
              "The Bernstein-Vazirani problem: given a function f: {0, 1}^n -> {0, 1} of the form f(x) = s.x mod 2 for some unknown bit string s in {0, 1}^n, find s with minimum oracle queries. Classically, finding each bit of s requires a separate query (query with input e_i to extract s_i), so n queries are needed. The quantum algorithm finds the whole string s in one query, an n-to-1 separation.",
              "The circuit is structurally identical to Deutsch-Jozsa: prepare |0>^n|1>, apply H tensor (n+1) to get the uniform superposition over |x> tensor |->, apply the oracle U_f which kicks back phase (-1)^(s.x), apply H tensor n to the control register, and measure. After the second Hadamard, the control register collapses to |s> with certainty: the amplitude on basis state |y> is (1/2^n) sum_x (-1)^(s.x + y.x) = (1/2^n) sum_x (-1)^((s XOR y).x), which equals 1 if y = s and 0 otherwise by the orthogonality of binary characters.",
              "Worked example with n=2 and s = 10. The function is f(x1, x0) = x1 (s dotted with x). The four values: f(00) = 0, f(01) = 0, f(10) = 1, f(11) = 1. After the algorithm, the measurement deterministically yields 10, the string s. The bit x1 controls f, while x0 does not - the algorithm identifies exactly which bits are in the linear combination. Bernstein-Vazirani is a precursor to Shor: it shows that quantum algorithms can extract global structure (the entire string s) from a single oracle call where classically each bit requires its own query.",
            ],
            bullets: [
              "BV problem: f(x) = s.x mod 2 for unknown s; recover s.",
              "Classical lower bound: n queries (one per bit).",
              "Quantum algorithm: 1 query, deterministic answer.",
              "Same circuit shape as Deutsch-Jozsa: prepare, H, oracle, H, measure.",
              "Amplitude on |y> after final H: (1/2^n) sum_x (-1)^((s XOR y).x).",
              "Orthogonality of binary characters: sum is 1 if y = s, 0 otherwise.",
              "Worked n=2, s=10: f(00)=0, f(01)=0, f(10)=1, f(11)=1; algorithm yields 10.",
            ],
            codeExample: {
              language: "python",
              caption: "Bernstein-Vazirani circuit skeleton in Qiskit-style pseudo-code.",
              code: `
# Recover hidden string s in {0,1}^n from f(x) = s . x mod 2 with one query
n = 4
hidden = "1011"           # the s we want to recover
qc = QuantumCircuit(n + 1, n)
qc.x(n)                   # auxiliary in |1>
for q in range(n + 1):
    qc.h(q)
apply_bv_oracle(qc, hidden)   # phase kickback (-1)^(s . x)
for q in range(n):
    qc.h(q)
qc.measure(range(n), range(n))
counts = run(qc, shots=10)
# Counts are deterministically {'1011': 10} - the hidden string
print(counts)
`,
            },
            diagram: {
              kind: "flow",
              title: "Bernstein-Vazirani recovers s in one query",
              caption: "Same circuit shape as Deutsch-Jozsa; the structure of f makes the answer deterministic.",
              steps: [
                { label: "Prepare |0>^n |1>, apply H tensor (n+1)", note: "uniform superposition + |->" },
                { label: "Oracle U_f with f(x) = s.x mod 2", note: "phase (-1)^(s.x)" },
                { label: "Apply H tensor n to control", note: "amplitude piles onto |s>" },
                { label: "Measure control register", note: "outcome is s, deterministically" },
              ],
            },
            callout: {
              type: "tip",
              title: "BV vs DJ",
              body: "Bernstein-Vazirani uses the same circuit shape as Deutsch-Jozsa - prepare, oracle, Hadamard, measure - but the promise on f is different. DJ promises constant or balanced; BV promises linear f(x) = s.x. The Hadamard output that gives 0/1 in DJ gives the string s in BV. Memorize the circuit once, then both algorithms are free marks.",
            },
            keyTerms: [
              { term: "Bernstein-Vazirani problem", definition: "Given f(x) = s.x mod 2 for unknown s in {0, 1}^n, find s with minimum oracle queries." },
              { term: "Inner product mod 2", definition: "s.x = sum_i s_i x_i mod 2; the linear Boolean function used in the Bernstein-Vazirani promise." },
              { term: "Binary character", definition: "The function x -> (-1)^(s.x); distinct s give orthogonal characters, the property that lets the Hadamard extract s." },
              { term: "Query complexity", definition: "The number of oracle calls an algorithm makes; the standard complexity measure for black-box problems like Deutsch-Jozsa, Bernstein-Vazirani and Grover." },
            ],
            examQuestions: [
              {
                q: "Describe the Bernstein-Vazirani algorithm and prove that it recovers the hidden string s in a single oracle query. Contrast with the classical n-query lower bound.",
                marks: 7,
                outline: [
                  "State the problem: f(x) = s.x mod 2 for unknown s; recover s.",
                  "Prepare |0>^n|1>; apply H tensor (n+1) to get uniform superposition on |x> and |-> on the auxiliary.",
                  "Apply oracle U_f: phase kickback gives (-1)^(s.x) |x>|->.",
                  "Apply H tensor n: amplitude on |y> is (1/2^n) sum_x (-1)^((s XOR y).x).",
                  "By orthogonality of binary characters, this sum is 1 if y = s, 0 otherwise.",
                  "Measurement deterministically yields s in one query.",
                  "Classical lower bound: n queries (one per bit); quantum achieves 1, an n-to-1 separation.",
                ],
              },
              {
                q: "For s = 101 and f(x) = s.x mod 2, list f(000), f(001), f(010), f(011), f(100), f(101), f(110), f(111).",
                marks: 3,
              },
              {
                q: "Why does the same circuit shape work for both Deutsch-Jozsa and Bernstein-Vazirani?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Grover's search - oracle, diffusion, sqrt(N)",
            body: [
              "Grover's algorithm searches an unstructured database of N items, given a marking oracle that recognizes the target. Classically, finding the marked item takes O(N) queries on average. Grover achieves O(sqrt(N)) queries, a quadratic speed-up that is provably optimal: no quantum algorithm can do better than O(sqrt(N)) for unstructured search. For N = 10^6, classical search averages 500,000 queries; Grover needs about 1000.",
              "The algorithm has two ingredients per iteration. The oracle O marks the target |w> by flipping its amplitude: O|x> = (-1)^[x = w] |x>, equivalently O = I - 2|w><w|. The diffusion operator D reflects the state about the uniform superposition |s> = (1/sqrt(N)) sum_x |x>: D = 2|s><s| - I. One Grover iteration is D times O; it rotates the state vector by an angle 2 theta toward |w>, where sin(theta) = 1/sqrt(N). After k iterations the amplitude on |w> is sin((2k+1) theta), maximized at k = pi/(4 theta) - 1/2, approximately pi sqrt(N)/4 iterations.",
              "Worked for N = 4, one marked item. The initial uniform state has amplitude 1/sqrt(4) = 1/2 on every basis state, so sin(theta) = 1/2 where sin(theta) = <w|s>, giving theta = pi/6. After k iterations the amplitude on the marked item is sin((2k+1) theta). For k=1: sin(3 pi/6) = sin(pi/2) = 1, so one iteration finds the marked item with certainty. For k=0: sin(pi/6) = 1/2, the initial amplitude. The optimal iteration count k_opt = pi/(4 theta) - 1/2 evaluates to 6/4 - 1/2 = 1, confirming one iteration. The scaling k_opt approximately pi sqrt(N)/4 - 1/2 holds for large N.",
            ],
            bullets: [
              "Grover: search N items, O(sqrt(N)) queries; classical O(N) average.",
              "Oracle O = I - 2|w><w| flips the amplitude of the marked item |w>.",
              "Diffusion D = 2|s><s| - I reflects about the uniform superposition |s>.",
              "One Grover iteration = D times O; rotates state by 2 theta toward |w>.",
              "sin(theta) = <w|s> = 1/sqrt(N); after k iterations amplitude on |w> = sin((2k+1) theta).",
              "Optimal iterations: k_opt = pi/(4 theta) - 1/2 approx pi sqrt(N)/4.",
              "For N=4: sin(theta) = 1/2, theta = pi/6; k=1 gives amplitude sin(pi/2) = 1.",
            ],
            codeExample: {
              language: "python",
              caption: "Grover circuit for N = 4, one marked item, in Qiskit-style pseudo-code.",
              code: `
# Grover for N=4 with marked item |11>
qc = QuantumCircuit(2, 2)
# Step 1: prepare uniform superposition |s>
qc.h([0, 1])
# Step 2: oracle - flips amplitude of |11>
qc.cz(0, 1)         # controlled-Z marks |11> with phase -1
# Step 3: diffusion operator D = 2|s><s| - I
qc.h([0, 1])
qc.z([0, 1])
qc.cz(0, 1)
qc.h([0, 1])
# Step 4: measure
qc.measure([0, 1], [0, 1])
counts = run(qc, shots=100)
# Expected: {'11': 100} - one iteration amplifies to probability 1
print(counts)
`,
            },
            diagram: {
              kind: "cycle",
              title: "One Grover iteration = oracle + diffusion",
              caption: "Repeat the cycle k_opt times, then measure - amplitude piles onto the marked item.",
              steps: [
                { label: "Prepare uniform superposition |s>", note: "H tensor n on |0>" },
                { label: "Apply oracle O", note: "O = I - 2|w><w|; flips marked amplitude" },
                { label: "Apply diffusion D", note: "D = 2|s><s| - I; reflects about |s>" },
                { label: "Iterate k_opt = pi sqrt(N)/4 times", note: "each step rotates 2 theta toward |w>" },
                { label: "Measure", note: "outcome is the marked item with high probability" },
              ],
            },
            callout: {
              type: "exam",
              title: "Iteration count",
              body: "Optimal Grover iterations: k_opt = pi/(4 theta) - 1/2 where sin(theta) = 1/sqrt(N). For large N this is approximately pi sqrt(N)/4. Over-iterating past k_opt rotates the state past the marked item and reduces success probability - the algorithm overshoots. Always state the count rather than 'a few iterations'.",
            },
            keyTerms: [
              { term: "Grover iteration", definition: "The composition of an oracle call and a diffusion operator; each iteration rotates the state vector by 2 theta toward the marked item." },
              { term: "Marking oracle O", definition: "The unitary O = I - 2|w><w| that flips the amplitude of the marked state |w> and leaves others unchanged." },
              { term: "Diffusion operator D", definition: "The reflection D = 2|s><s| - I about the uniform superposition |s>; the second half of a Grover iteration." },
              { term: "Grover angle theta", definition: "The angle defined by sin(theta) = <w|s> = 1/sqrt(N); each iteration rotates the state by 2 theta." },
              { term: "Quadratic speed-up", definition: "The O(sqrt(N)) vs O(N) advantage of Grover over classical unstructured search; provably optimal for quantum." },
            ],
            examQuestions: [
              {
                q: "Describe Grover's algorithm. Define the oracle and diffusion operators, give the iteration count, and work through the case N = 4 with one marked item to show that one iteration finds the target with certainty.",
                marks: 7,
                outline: [
                  "State the problem: search N items, marked by oracle O = I - 2|w><w|.",
                  "Prepare uniform superposition |s> = (1/sqrt(N)) sum_x |x> via H tensor n.",
                  "Define diffusion D = 2|s><s| - I; one Grover iteration is D O.",
                  "Each iteration rotates state by 2 theta where sin(theta) = <w|s> = 1/sqrt(N).",
                  "After k iterations, amplitude on |w> is sin((2k+1) theta); optimum at k = pi/(4 theta) - 1/2 approx pi sqrt(N)/4.",
                  "For N=4: sin(theta) = 1/2, theta = pi/6; k=1 gives sin(pi/2) = 1 - target found with certainty.",
                  "Contrast with classical O(N) average; Grover's O(sqrt(N)) is provably optimal.",
                ],
              },
              {
                q: "Give the matrix forms of the oracle O = I - 2|w><w| and diffusion D = 2|s><s| - I.",
                marks: 3,
              },
              {
                q: "How many Grover iterations are optimal for N = 1024?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Amplitude amplification and the worked N=4 case",
            body: [
              "Amplitude amplification is the generalization of Grover: any algorithm that prepares an initial state |s> with non-zero overlap on the answer can be amplified. Given an initial unitary A with A|0> = |s> and a marking projector P_w = |w><w|, the amplification operator is Q = -A (I - 2|0><0|) A^dagger (I - 2 P_w), which rotates by 2 theta where sin^2(theta) = <w|s|s|w> = success probability of A. Grover is the special case A = H tensor n. The generalization lets quantum algorithms amplify the success probability of any subroutine, not just uniform search.",
              "Worked N = 4, marked item |11>. Initial state |s> = (1/2)(|00> + |01> + |10> + |11>). Oracle O = I - 2|11><11| flips the amplitude of |11>: |s'> = (1/2)(|00> + |01> + |10> - |11>). The diffusion D = 2|s><s| - I reflects |s'> about |s>. The mean amplitude of |s'> is (1/2 + 1/2 + 1/2 - 1/2)/4 = 1/4. Reflection about the mean sends each amplitude a to 2*(1/4) - a = 1/2 - a: |00> amplitude 1/2 -> 0, |01> 1/2 -> 0, |10> 1/2 -> 0, |11> -1/2 -> 1. So after one Grover iteration the state is |11> with amplitude 1 - the marked item is found with certainty. Verify: sum of amplitudes 0 + 0 + 0 + 1 = 1, norm preserved.",
              "The geometry of amplification. View the state as a 2D vector in the plane spanned by |w> and |s_perp> (the uniform superposition on non-marked items). The oracle reflects the state about |s_perp>, flipping the |w> component. The diffusion reflects about |s>. Two reflections compose to a rotation by 2 theta, where theta is the angle between |s> and |s_perp>. After k iterations the state has rotated by 2k theta from its initial position. The optimal stopping point is when the state vector points along |w>, that is, when (2k+1) theta = pi/2. For N = 4, theta = pi/6, so 2k+1 = 3, k = 1.",
            ],
            bullets: [
              "Amplitude amplification generalizes Grover to any initial state and projector.",
              "Operator Q = -A (I - 2|0><0|) A^dagger (I - 2 P_w); rotates by 2 theta.",
              "Grover is the special case A = H tensor n.",
              "Inversion about the mean: each amplitude a -> 2m - a where m is the mean.",
              "N=4 oracle: amplitude on |11> flips from 1/2 to -1/2.",
              "N=4 diffusion: mean m = 1/4; new amplitudes 0, 0, 0, 1 - target found.",
              "Geometric view: two reflections compose to a rotation by 2 theta.",
            ],
            table: {
              caption: "Grover iterations needed for various N (one marked item).",
              headers: ["N", "theta", "k_opt exact", "k_opt approx", "Success prob after k_opt"],
              rows: [
                ["4", "pi/6", "1", "1", "1.000"],
                ["16", "asin(1/4)", "approx 2", "3", "approx 0.96"],
                ["256", "asin(1/16)", "approx 12", "12", "approx 0.999"],
                ["1024", "asin(1/32)", "approx 25", "25", "approx 0.999"],
                ["10^6", "approx 0.001", "approx 785", "785", "approx 1.000"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Amplitude amplification generalizes Grover",
              caption: "Each tier lifts a more general setting; Grover is the bottom.",
              tiers: [
                { label: "Amplitude amplification", note: "any initial state, any projector" },
                { label: "Grover with multiple marked items", note: "k_opt scales with sqrt(N/M)" },
                { label: "Grover with one marked item", note: "k_opt approx pi sqrt(N)/4" },
                { label: "N = 4 case", note: "k = 1 finds target with probability 1" },
              ],
            },
            callout: {
              type: "exam",
              title: "Mean-reflection arithmetic",
              body: "To compute the diffusion's action without matrices: (1) compute the mean amplitude m of all N components, (2) replace each amplitude a with 2m - a. This 'inversion about the mean' is the diffusion in intuitive form. For N=4 after the oracle, m = 1/4 and the marked item's amplitude goes from -1/2 to 1 - the target.",
            },
            keyTerms: [
              { term: "Amplitude amplification", definition: "The generalization of Grover to arbitrary initial states and projectors; rotates the state toward the success subspace." },
              { term: "Inversion about the mean", definition: "The intuitive form of the diffusion operator: each amplitude a is replaced by 2m - a where m is the mean amplitude." },
              { term: "Success probability", definition: "The squared magnitude of the amplitude on the marked subspace after a given number of iterations." },
              { term: "Optimal iteration count", definition: "k_opt = pi/(4 theta) - 1/2 where sin(theta) = <w|s>; maximizes the success probability." },
            ],
            examQuestions: [
              {
                q: "Work through Grover's algorithm for N = 4 with marked item |11>. Show the amplitude on |11> after the oracle and after the diffusion, and verify that one iteration finds the target with probability 1.",
                marks: 7,
                outline: [
                  "Initial state: |s> = (1/2)(|00> + |01> + |10> + |11>), amplitude 1/2 everywhere.",
                  "Apply oracle O = I - 2|11><11|: amplitude on |11> flips to -1/2, others unchanged.",
                  "Result: |s'> = (1/2)(|00> + |01> + |10> - |11>).",
                  "Compute mean amplitude: m = (1/2 + 1/2 + 1/2 - 1/2)/4 = 1/4.",
                  "Apply diffusion D = 2|s><s| - I as inversion about the mean: each amplitude a -> 2m - a = 1/2 - a.",
                  "New amplitudes: |00> -> 0, |01> -> 0, |10> -> 0, |11> -> 1.",
                  "Verify normalization: 0 + 0 + 0 + 1 = 1. Measuring yields |11> with probability 1.",
                ],
              },
              {
                q: "Define amplitude amplification and explain how Grover is a special case.",
                marks: 3,
              },
              {
                q: "What is the geometric interpretation of one Grover iteration?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Simon's algorithm - hidden period",
            body: [
              "Simon's problem: given a function f: {0, 1}^n -> {0, 1}^n promised to be two-to-one with hidden period s, meaning f(x) = f(y) iff y = x XOR s for some non-zero s in {0, 1}^n, find s with minimum queries. Classically, finding s requires O(2^(n/2)) queries by the birthday paradox - find a collision. Simon's quantum algorithm finds s with O(n) queries, an exponential speed-up.",
              "The algorithm. Prepare |0>^n|0>^n; apply H tensor n on the input register to get (1/sqrt(2^n)) sum_x |x>|0>; apply the oracle U_f to get (1/sqrt(2^n)) sum_x |x>|f(x)>; because f(x) = f(x XOR s), the second register's value collapses the first to a superposition (|x> + |x XOR s>)/sqrt(2) for each x. Measure the second register, leaving the first in (|x> + |x XOR s>)/sqrt(2). Apply H tensor n to the first register and measure: the outcome y satisfies y.s = 0 mod 2 (the inner product of y and s is even). Repeating O(n) times gives n independent equations y_i.s = 0; solving the linear system over GF(2) yields s.",
              "Simon's algorithm is the structural precursor to Shor. Both reduce a problem (collision finding / factoring) to period finding, extract the period via a quantum Fourier-style transform, then solve a classical linear-algebra problem. Simon uses the Hadamard transform over (Z_2)^n; Shor uses the quantum Fourier transform over Z_N. The two-query structure is identical: prepare superposition, query oracle, transform, measure, solve. The generalization from the Boolean group (Z_2)^n to the cyclic group Z_N is what enables Shor's factoring speed-up. Simon's algorithm is therefore both an exponential speed-up in its own right and the conceptual stepping stone to Shor.",
            ],
            bullets: [
              "Simon: f two-to-one with f(x) = f(y) iff y = x XOR s; find s.",
              "Classical lower bound: O(2^(n/2)) queries (birthday paradox).",
              "Quantum: O(n) queries, exponential speed-up.",
              "Circuit: prepare, H on input, oracle, measure output, H on input, measure, solve.",
              "After measuring output register, input collapses to (|x> + |x XOR s>)/sqrt(2).",
              "Hadamard on input yields y with y.s = 0 mod 2.",
              "Repeat O(n) times; solve linear system over GF(2) by Gaussian elimination.",
            ],
            codeExample: {
              language: "python",
              caption: "Simon's algorithm skeleton in Qiskit-style pseudo-code.",
              code: `
# Find hidden period s with f(x) = f(y) iff y = x XOR s, in O(n) queries
n = 4
qc = QuantumCircuit(2 * n, n)
# Step 1: H on input register
for q in range(n):
    qc.h(q)
# Step 2: query oracle U_f: |x>|0> -> |x>|f(x)>
apply_simon_oracle(qc)
# Step 3: measure output register (collapses input to (|x> + |x XOR s>)/sqrt(2))
qc.measure(range(n, 2 * n), range(n))
# Step 4: H on input register, then measure
for q in range(n):
    qc.h(q)
qc.measure(range(n), range(n))
# Repeat n times to collect n equations y_i . s = 0 mod 2
# Solve the linear system over GF(2) to recover s.
print(run(qc, shots=n))
`,
            },
            diagram: {
              kind: "flow",
              title: "Simon's algorithm at a glance",
              caption: "Hadamard, oracle, measure, Hadamard, measure, solve - the same skeleton Shor generalizes.",
              steps: [
                { label: "Prepare |0>^n |0>^n, H on input", note: "uniform superposition on x" },
                { label: "Oracle U_f", note: "(1/sqrt(2^n)) sum_x |x>|f(x)>" },
                { label: "Measure output register", note: "input collapses to (|x> + |x XOR s>)/sqrt(2)" },
                { label: "H on input, then measure", note: "y satisfies y.s = 0 mod 2" },
                { label: "Repeat O(n) times and solve linear system", note: "Gaussian elimination over GF(2)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Linear-algebra post-processing",
              body: "After collecting n random y_i values, solve the system y_i . s = 0 mod 2 over GF(2) by Gaussian elimination. The system has rank n-1 (s is in the null space), so n-1 independent equations determine s up to scaling; since s != 0, the answer is unique. Simon's algorithm is as much a classical linear-algebra routine as it is a quantum circuit.",
            },
            keyTerms: [
              { term: "Simon's problem", definition: "Given f two-to-one with f(x) = f(y) iff y = x XOR s, find the hidden period s." },
              { term: "Two-to-one function", definition: "A function that maps exactly two inputs to each output; the structure promised in Simon's problem." },
              { term: "GF(2) linear system", definition: "A system of linear equations over the field with two elements; solved by Gaussian elimination to recover Simon's period s." },
              { term: "Birthday paradox", definition: "The classical O(2^(n/2)) collision-finding bound that Simon's algorithm exponentially improves upon." },
            ],
            examQuestions: [
              {
                q: "Describe Simon's algorithm and explain how it finds the hidden period s in O(n) oracle queries. Contrast with the classical O(2^(n/2)) birthday-bound lower bound.",
                marks: 7,
                outline: [
                  "State the problem: f two-to-one with f(x) = f(y) iff y = x XOR s for non-zero s.",
                  "Prepare |0>^n |0>^n; apply H tensor n on input register to get uniform superposition over x.",
                  "Apply oracle U_f: state becomes (1/sqrt(2^n)) sum_x |x>|f(x)>.",
                  "Measure output register: input collapses to (|x> + |x XOR s>)/sqrt(2).",
                  "Apply H tensor n on input; measure to get y with y.s = 0 mod 2.",
                  "Repeat O(n) times to collect n equations; solve by Gaussian elimination over GF(2).",
                  "Contrast classical O(2^(n/2)) birthday bound; Simon achieves O(n), exponential speed-up.",
                ],
              },
              {
                q: "Why does the post-measurement state (|x> + |x XOR s>)/sqrt(2) yield y.s = 0 after a Hadamard?",
                marks: 3,
              },
              {
                q: "Name the group structure used in Simon (Z_2)^n and in Shor Z_N.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.6",
            title: "Shor's algorithm - factoring via period finding",
            body: [
              "Shor's algorithm factors an N-bit integer in polynomial time, where N is the integer to factor (not its bit length). The best known classical algorithm, the general number field sieve, runs in sub-exponential time exp(O(N^(1/3) (log N)^(2/3))); Shor runs in O(N^3) quantum gates. The exponential speed-up is the strategic significance: RSA encryption relies on the hardness of factoring, so a sufficiently large quantum computer breaks RSA.",
              "The reduction. To factor N, pick a random a with 1 < a < N coprime to N; consider the function f(x) = a^x mod N, which is periodic with period r. If r is even and a^(r/2) is not +/-1 mod N, then gcd(a^(r/2) +/- 1, N) yields a non-trivial factor of N. So factoring reduces to finding the period r of f(x) = a^x mod N. Classically, period finding requires evaluating f at many points; quantumly, the quantum Fourier transform extracts r in polynomial time.",
              "The quantum subroutine. Prepare (1/sqrt(Q)) sum_{x=0}^{Q-1} |x>|0> for Q a power of 2 with N^2 <= Q < 2 N^2; apply the oracle to get (1/sqrt(Q)) sum_x |x>|f(x)>; measure the second register to collapse the first to a superposition over x = x_0 + k r for integer k; apply the quantum Fourier transform QFT over Z_Q to the first register; measure; the outcome is close to j Q / r for some j, and continued-fraction extraction recovers r. Repeat O(log log N) times for high confidence. The QFT is the heart of Shor: it concentrates the periodic amplitude pattern into measurable spikes at frequencies j Q / r.",
            ],
            bullets: [
              "Shor: factors N-bit integer in O(N^3) gates; classical GNFS is sub-exponential.",
              "Reduction: factoring N -> period finding of f(x) = a^x mod N.",
              "If period r even and a^(r/2) not +/-1 mod N, gcd(a^(r/2) +/- 1, N) factors N.",
              "Quantum subroutine: Hadamard, oracle, measure, QFT, measure, continued fractions.",
              "QFT over Z_Q concentrates periodic amplitudes into spikes at j Q / r.",
              "Repeat O(log log N) times for high confidence.",
              "RSA-2048 needs millions of physical qubits with error correction.",
            ],
            table: {
              caption: "Shor's algorithm vs the best classical factoring algorithm.",
              headers: ["Aspect", "Classical (GNFS)", "Shor"],
              rows: [
                ["Time complexity", "exp(O(N^(1/3) (log N)^(2/3)))", "O(N^3) gates"],
                ["Hardware needed", "classical supercomputer", "fault-tolerant quantum computer"],
                ["Qubits required", "n/a", "millions of physical qubits for RSA-2048"],
                ["Status (2024)", "deployed at scale", "small demonstrations only (N = 15, 21)"],
                ["Impact on RSA-2048", "infeasible", "broken in principle once hardware scales"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Shor's algorithm pipeline",
              caption: "Five stages from a random integer a to the factors of N.",
              stages: [
                { label: "Pick random a coprime to N", note: "uses Euclidean algorithm" },
                { label: "Reduce factoring to period finding of f(x) = a^x mod N", note: "classical reduction" },
                { label: "Run quantum period-finding subroutine", note: "Hadamard, oracle, QFT, measure" },
                { label: "Extract r via continued fractions", note: "classical post-processing" },
                { label: "Compute gcd(a^(r/2) +/- 1, N)", note: "yields a non-trivial factor with prob > 1/2" },
              ],
            },
            callout: {
              type: "warning",
              title: "Hardware caveat",
              body: "Current devices have factored only tiny integers (15 = 3 x 5, 21 = 3 x 7) using heavily optimized circuits. Breaking RSA-2048 needs approximately 20 million noisy physical qubits or thousands of logical qubits with full error correction - decades away. RGPV answers should state the algorithm's potential but flag the hardware gap honestly.",
            },
            keyTerms: [
              { term: "Shor's algorithm", definition: "A polynomial-time quantum algorithm for integer factoring via reduction to period finding and the quantum Fourier transform." },
              { term: "Modular exponentiation", definition: "The function f(x) = a^x mod N whose period r is the target of Shor's algorithm." },
              { term: "Quantum Fourier transform (QFT)", definition: "The unitary DFT over Z_Q; concentrates periodic amplitude patterns into measurable spikes at j Q / r." },
              { term: "Continued fraction extraction", definition: "The classical post-processing that recovers the period r from the QFT measurement outcome j Q / r." },
              { term: "General number field sieve", definition: "The best known classical factoring algorithm; runs in sub-exponential time, the basis for RSA's classical hardness." },
            ],
            examQuestions: [
              {
                q: "Outline Shor's algorithm for integer factoring. Identify the classical reduction from factoring to period finding, the role of the quantum Fourier transform, and the post-processing that yields the factors. State the complexity and the hardware requirements.",
                marks: 7,
                outline: [
                  "Pick random a coprime to N; consider f(x) = a^x mod N with period r.",
                  "If r is even and a^(r/2) is not +/-1 mod N, then gcd(a^(r/2) +/- 1, N) gives a non-trivial factor.",
                  "Quantum subroutine: prepare (1/sqrt(Q)) sum_x |x>|0>, apply oracle to get sum_x |x>|f(x)>.",
                  "Measure second register; first collapses to a superposition over x = x_0 + k r.",
                  "Apply QFT over Z_Q to the first register; amplitudes concentrate at j Q / r.",
                  "Measure; classical continued-fraction extraction recovers r.",
                  "Compute gcd(a^(r/2) +/- 1, N) to get factors; complexity O(N^3) gates, but requires millions of physical qubits for RSA-2048.",
                ],
              },
              {
                q: "Define the quantum Fourier transform and state how it concentrates periodic amplitudes.",
                marks: 3,
              },
              {
                q: "What does it mean to say factoring reduces to period finding?",
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
      title: "Quantum Programming and the Landscape",
      summary:
        "Unit V moves from theory to practice. The Qiskit workflow - build a circuit, run on a simulator or hardware, retrieve counts - is the entry point for every student. Other SDKs (Cirq, Braket) offer similar abstractions across hardware modalities (superconducting, trapped ion, photonic). The NISQ era imposes noise constraints; error correction via repetition and surface codes is the path to fault tolerance. Quantum cryptography (BB84) provides the deployed application, and post-quantum cryptography prepares classical systems for the eventual fault-tolerant quantum computer. The unit closes with the QML outlook and the career landscape.",
      chapter: {
        number: "05",
        title: "Quantum Programming and the Landscape",
        intro:
          "Unit V moves from theory to practice. The Qiskit workflow - build a circuit, run on a simulator or hardware, retrieve counts - is the entry point for every student. Other SDKs (Cirq, Braket) offer similar abstractions across hardware modalities (superconducting, trapped ion, photonic). The NISQ era imposes noise constraints; error correction via repetition and surface codes is the path to fault tolerance. Quantum cryptography (BB84) provides the deployed application, and post-quantum cryptography prepares classical systems for the eventual fault-tolerant quantum computer. The unit closes with the QML outlook and the career landscape.",
        inOneBreath:
          "The Qiskit workflow builds a QuantumCircuit, runs it on a simulator or backend, and returns counts over measurement outcomes; a Bell-state circuit uses H, CNOT, and measure. Cirq (Google) and Braket (Amazon) provide similar abstractions across vendors. Hardware modalities include superconducting (IBM, Google), trapped ion (IonQ, Quantinuum), and photonic (Xanadu) systems, each with different qubit counts, gate speeds, coherence times and connectivity. The NISQ era has 50-1000 noisy qubits with no error correction; noise sources include gate errors, decoherence and measurement errors, mitigated by zero-noise extrapolation and other techniques. Quantum error correction encodes a logical qubit into many physical qubits using repetition codes for bit flips and surface codes for general errors; the threshold theorem guarantees that below a physical error rate of about 10^-3, logical error can be made arbitrarily small. The BB84 protocol distributes a secret key by sending non-orthogonal states (|0>, |1>, |+>, |->); any eavesdropping introduces detectable errors. Post-quantum cryptography (lattice-based, hash-based) is being standardized by NIST to defend classical systems against future quantum computers. Quantum machine learning uses variational circuits and QAOA-style ansatze but has no proven practical advantage yet. Careers span research, algorithm design, hardware engineering and quantum software engineering.",
        sections: [
          {
            number: "5.1",
            title: "The Qiskit workflow - circuits, simulators, counts",
            body: [
              "The Qiskit workflow has four stages: build a QuantumCircuit object by adding gates to qubits and classical bits; choose a backend (a statevector simulator, a density-matrix simulator, or a real device); run the circuit with a specified number of shots; retrieve a counts dictionary mapping bitstring outcomes to frequencies. A Bell-state circuit illustrates the full pipeline: two qubits, two classical bits, an H on qubit 0, a CNOT(0, 1), and a measure of both qubits; running 1000 shots on a simulator returns approximately {'00': 500, '11': 500}, confirming the entangled Bell state.",
              "Simulators and hardware differ in important ways. A statevector simulator returns the exact amplitudes of the final state, allowing direct inspection of the wavefunction - useful for debugging but exponential in memory. A density-matrix simulator handles mixed states and noise models, at the cost of squaring the memory. Real hardware samples from the final distribution and is subject to noise: gate errors, decoherence, measurement errors, and limited connectivity that requires SWAP insertion. The transition from simulator to hardware is the moment when noise becomes the dominant concern.",
              "Counts are statistics. Each shot is a single run of the circuit ending in measurement; 1000 shots produce 1000 classical bitstrings, summarized as a histogram. To recover probability p of an outcome, divide its count by the number of shots. For rare outcomes, statistical error scales as 1/sqrt(shots): 1000 shots give roughly 3% error on a probability near 0.1; 1 million shots reduce this to 0.1%. Quantum algorithms are designed so the answer is the most probable outcome; the algorithm is run many times and the most frequent outcome is reported.",
            ],
            bullets: [
              "Qiskit workflow: build circuit, choose backend, run with shots, retrieve counts.",
              "QuantumCircuit object holds qubits, classical bits, and a sequence of gates.",
              "Statevector simulator: exact amplitudes; exponential in memory.",
              "Density-matrix simulator: handles noise and mixed states; squares memory.",
              "Real hardware: samples from distribution; subject to noise.",
              "Counts are statistics; probability = count / shots.",
              "Statistical error scales as 1/sqrt(shots); 1000 shots ~ 3% error.",
            ],
            codeExample: {
              language: "python",
              caption: "A complete Qiskit workflow for a Bell state.",
              code: `
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# 1. Build: two qubits, two classical bits, Bell-state circuit
qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])

# 2. Choose backend
backend = AerSimulator()

# 3. Run with 1000 shots
job = backend.run(qc, shots=1000)
result = job.result()

# 4. Retrieve counts
counts = result.get_counts()
print(counts)
# Expected: {'00': ~500, '11': ~500}
`,
            },
            diagram: {
              kind: "pipeline",
              title: "The Qiskit workflow in four stages",
              caption: "From a QuantumCircuit object to a counts dictionary.",
              stages: [
                { label: "Build circuit", note: "QuantumCircuit object with gates and measurements" },
                { label: "Choose backend", note: "statevector sim, density-matrix sim, or real device" },
                { label: "Run with shots", note: "execute the circuit many times" },
                { label: "Retrieve counts", note: "histogram of bitstring outcomes" },
              ],
            },
            callout: {
              type: "tip",
              title: "Statistical noise vs quantum noise",
              body: "Simulator counts have only statistical (shot) noise - scaling as 1/sqrt(shots). Hardware counts have both statistical noise and physical noise (gate errors, decoherence). When debugging, first verify on a statevector simulator (exact amplitudes), then on a sampling simulator (statistical), then on hardware (statistical + physical).",
            },
            keyTerms: [
              { term: "QuantumCircuit", definition: "The Qiskit object representing a quantum circuit; holds qubits, classical bits, and a sequence of gates." },
              { term: "Backend", definition: "The execution target - a statevector simulator, density-matrix simulator, or a real quantum device." },
              { term: "Shots", definition: "The number of repetitions of a circuit; more shots reduce statistical error as 1/sqrt(shots)." },
              { term: "Counts dictionary", definition: "A map from bitstring outcomes to their frequencies, returned by a Qiskit run." },
            ],
            examQuestions: [
              {
                q: "Describe the Qiskit workflow from circuit construction to measurement statistics. Use the Bell-state preparation circuit as a worked example and explain the role of shots in estimating probabilities.",
                marks: 7,
                outline: [
                  "Build: create QuantumCircuit(2, 2); add H on qubit 0, CNOT(0, 1), measure both.",
                  "Choose backend: AerSimulator (sampling), statevector simulator, or real device.",
                  "Run with N shots: each shot executes the circuit once and records one outcome bitstring.",
                  "Retrieve counts: dictionary mapping each bitstring to its frequency across shots.",
                  "Expected Bell-state output: counts {'00': ~N/2, '11': ~N/2}; '01' and '10' absent.",
                  "Estimate probability: divide count by shots; statistical error scales as 1/sqrt(shots).",
                  "Note that hardware counts also include gate, decoherence and measurement noise beyond statistics.",
                ],
              },
              {
                q: "Why does a statevector simulator not scale beyond about 30 qubits on a classical machine?",
                marks: 3,
              },
              {
                q: "What does the counts dictionary for a Bell-state circuit on 1000 shots typically look like?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Other SDKs and hardware modalities",
            body: [
              "Beyond Qiskit, the major SDKs are Google's Cirq, Amazon's Braket, Microsoft's Q# and Quantinuum's TKET. Cirq emphasizes low-level circuit construction and Google's superconducting devices; Braket provides a unified API across multiple hardware vendors; Q# is a high-level language integrated with the .NET ecosystem; TKET focuses on compilation and optimization. All four expose the same abstraction: a circuit object, gates, measurement, and a backend selection. Porting between SDKs is mostly syntactic; the underlying quantum operations are identical.",
              "Hardware modalities differ in physical qubit implementation. Superconducting qubits (IBM, Google, Rigetti) use Josephson junction circuits at millikelvin temperatures; gate times are tens of nanoseconds, coherence times tens to hundreds of microseconds, and scaling to thousands of qubits is engineering-plausible. Trapped-ion qubits (IonQ, Quantinuum) use individual ions held in electromagnetic traps; gate times are slower (microseconds) but coherence times reach seconds, and all-to-all connectivity simplifies circuit routing. Photonic qubits (Xanadu, PsiQuantum) use light in optical circuits; they operate at room temperature but probabilistic gates and photon loss are challenges.",
              "Each modality has a distinct sweet spot. Superconducting devices lead in qubit count and gate speed, making them the default for NISQ experiments; trapped-ion devices lead in coherence and gate fidelity, making them strong candidates for fault tolerance; photonic devices promise room-temperature operation and networking, useful for distributed quantum computing. Neutral-atom arrays (Atom Computing, QuEra) are a newer modality using optical tweezers to arrange individual atoms, with high coherence and reconfigurable connectivity. No modality has won; the field is parallel-tracking several approaches to find which scales to fault tolerance.",
            ],
            bullets: [
              "Cirq (Google): low-level circuit construction, superconducting focus.",
              "Braket (Amazon): unified API across multiple hardware vendors.",
              "Q# (Microsoft): high-level language integrated with .NET.",
              "TKET (Quantinuum): compilation and optimization.",
              "Superconducting: IBM, Google, Rigetti; fast gates (~50 ns), short coherence (~100 us).",
              "Trapped ion: IonQ, Quantinuum; slower gates (~10 us), long coherence (seconds).",
              "Photonic: Xanadu, PsiQuantum; room temperature, networking, probabilistic gates.",
            ],
            table: {
              caption: "Hardware modalities compared.",
              headers: ["Modality", "Vendors", "Coherence", "Gate time", "Connectivity"],
              rows: [
                ["Superconducting", "IBM, Google, Rigetti", "tens-hundreds of us", "tens of ns", "nearest-neighbor"],
                ["Trapped ion", "IonQ, Quantinuum", "seconds", "microseconds", "all-to-all"],
                ["Photonic", "Xanadu, PsiQuantum", "depends", "depends", "linear optics"],
                ["Neutral atom", "QuEra, Atom Computing", "seconds", "microseconds", "reconfigurable"],
                ["Spin qubit (silicon)", "Intel, Diraq", "ms", "ns", "nearest-neighbor"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Superconducting vs trapped-ion vs photonic",
              caption: "Three modalities, three engineering trade-offs; no clear winner yet.",
              left: {
                heading: "Superconducting",
                items: [
                  "Vendors: IBM, Google, Rigetti",
                  "Gate time ~50 ns (fastest)",
                  "Coherence ~100 us (short)",
                  "Nearest-neighbor connectivity",
                  "Scales via chip fabrication",
                ],
              },
              right: {
                heading: "Trapped ion / photonic",
                items: [
                  "Vendors: IonQ, Quantinuum, Xanadu",
                  "Gate time ~10 us (slower)",
                  "Coherence seconds (long)",
                  "All-to-all or reconfigurable",
                  "Photonic: room temperature",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "What to memorize for hardware",
              body: "Three vendors and three modalities get you through the hardware question: IBM/Google (superconducting, fast gates, short coherence), IonQ/Quantinuum (trapped ion, slow gates, long coherence), Xanadu (photonic, room temperature). Add neutral-atom (QuEra) as a fourth if time permits. The exam does not require circuit-level detail.",
            },
            keyTerms: [
              { term: "Cirq", definition: "Google's quantum SDK emphasizing low-level circuit construction and Google's superconducting devices." },
              { term: "Braket", definition: "Amazon's quantum SDK providing a unified API across multiple hardware vendors." },
              { term: "Superconducting qubit", definition: "Qubit implemented as a Josephson junction circuit operated at millikelvin temperatures; fast gates, short coherence." },
              { term: "Trapped-ion qubit", definition: "Qubit implemented as electronic states of individual ions held in electromagnetic traps; slower gates, long coherence." },
            ],
            examQuestions: [
              {
                q: "Compare superconducting, trapped-ion and photonic quantum hardware. For each, name a vendor and describe gate time, coherence time and connectivity, and state the engineering trade-off.",
                marks: 7,
                outline: [
                  "Superconducting: vendors IBM, Google, Rigetti; gate time ~50 ns (fast).",
                  "Coherence ~100 us (short); nearest-neighbor connectivity requires SWAPs.",
                  "Trade-off: speed and scalability via chip fabrication vs short coherence.",
                  "Trapped ion: vendors IonQ, Quantinuum; gate time ~10 us (slower).",
                  "Coherence seconds (long); all-to-all connectivity simplifies routing.",
                  "Trade-off: coherence and connectivity vs slower gates and harder scaling.",
                  "Photonic: vendor Xanadu; room temperature, networking; probabilistic gates and photon loss are challenges.",
                ],
              },
              {
                q: "Name three quantum SDKs besides Qiskit and one distinguishing feature of each.",
                marks: 3,
              },
              {
                q: "What is the typical coherence time of a trapped-ion qubit vs a superconducting qubit?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "NISQ era and noise",
            body: [
              "NISQ stands for Noisy Intermediate-Scale Quantum, John Preskill's 2018 label for the current era: devices with 50-1000 physical qubits and no error correction. The 'noisy' qualifier is essential: single-qubit gate errors are 10^-4 to 10^-3, two-qubit errors 10^-3 to 10^-2, measurement errors 10^-3, and coherence times limit circuit depth to roughly 100-1000 gates. NISQ algorithms must therefore be shallow and tolerant of noise; they typically output noisy distributions that are post-processed classically.",
              "Noise sources. Gate errors arise from imperfect microwave pulses or laser interactions, miscalibration, and crosstalk between qubits. Decoherence (T1 and T2, defined in Unit III) erases quantum information over time; the deeper the circuit, the more decoherence accumulates. Measurement errors include state-preparation errors and readout bit flips. Together these produce an output distribution that is a noisy version of the ideal: the answer's probability is suppressed, and spurious outcomes appear. A circuit that should output {'11': 1000} on hardware might output {'11': 870, '01': 65, '10': 50, '00': 15}.",
              "Noise mitigation techniques partially recover the ideal distribution. Readout error mitigation calibrates a confusion matrix and inverts it. Zero-noise extrapolation (ZNE) runs the circuit at multiple effective noise levels (by folding gates) and extrapolates to the zero-noise limit. Probabilistic error cancellation (PEC) characterizes the noise channel and probabilistically applies inverse operations, at the cost of many shots. These techniques extend the useful range of NISQ hardware but do not enable fault-tolerant computation; they trade shots and classical post-processing for reduced bias on shallow circuits, and they cannot replace the logical-qubit error correction covered in the next section.",
            ],
            bullets: [
              "NISQ: Noisy Intermediate-Scale Quantum (Preskill 2018); 50-1000 qubits, no error correction.",
              "Single-qubit gate errors 10^-4 to 10^-3; two-qubit 10^-3 to 10^-2; measurement 10^-3.",
              "Circuit depth limited to ~100-1000 gates by coherence time.",
              "Gate noise sources: pulse imperfection, miscalibration, crosstalk.",
              "Decoherence: T1 (energy relaxation) and T2 (dephasing) accumulate with depth.",
              "Readout errors: state preparation and measurement bit flips.",
              "Mitigation: readout calibration, ZNE, PEC - reduce bias but no fault tolerance.",
            ],
            codeExample: {
              language: "python",
              caption: "Adding a noise model to a Qiskit simulation.",
              code: `
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit_aer.noise import NoiseModel, depolarizing_error

# Build a Bell-state circuit
qc = QuantumCircuit(2, 2)
qc.h(0); qc.cx(0, 1); qc.measure([0, 1], [0, 1])

# Build a simple noise model: 1% depolarizing on H and CNOT
noise = NoiseModel()
noise.add_all_qubit_quantum_error(depolarizing_error(0.01, 1), ["h"])
noise.add_all_qubit_quantum_error(depolarizing_error(0.02, 2), ["cx"])

# Run with noise
backend = AerSimulator(noise_model=noise)
counts = backend.run(qc, shots=1000).result().get_counts()
print(counts)
# Expected: {'11': ~480, '00': ~480, '01': ~20, '10': ~20}
# The spurious '01' and '10' outcomes are noise.
`,
            },
            diagram: {
              kind: "layers",
              title: "The NISQ stack",
              caption: "Each layer adds a source of error; mitigation works layer by layer.",
              layers: [
                { label: "Algorithm output", note: "what the user sees" },
                { label: "Readout error mitigation", note: "calibration matrix inversion" },
                { label: "Zero-noise extrapolation", note: "fold gates, extrapolate" },
                { label: "Native gate compilation + routing", note: "SWAPs add depth and noise" },
                { label: "Physical qubits and gates", note: "T1, T2, gate errors" },
              ],
            },
            callout: {
              type: "warning",
              title: "NISQ is not fault-tolerant",
              body: "NISQ devices cannot run Shor at cryptographically relevant scale, period. Claims that current hardware 'breaks RSA' are false. The NISQ era's value is heuristic algorithms (VQE, QAOA) on small problems, with the goal of demonstrating useful applications before full error correction arrives. Be explicit about this distinction in any answer.",
            },
            keyTerms: [
              { term: "NISQ", definition: "Noisy Intermediate-Scale Quantum; the current era of 50-1000 qubit devices without error correction." },
              { term: "Gate error", definition: "The probability that a gate produces an output different from the ideal unitary; typically 10^-4 to 10^-3 for single-qubit gates." },
              { term: "Readout error", definition: "The probability of measuring the wrong classical bit value due to imperfect state preparation and measurement." },
              { term: "Zero-noise extrapolation", definition: "A mitigation technique that runs the circuit at multiple effective noise levels and extrapolates to the zero-noise limit." },
              { term: "Depolarizing noise", definition: "A simple noise model in which a qubit state is replaced by the maximally mixed state with a given probability." },
            ],
            examQuestions: [
              {
                q: "Define the NISQ era. List the dominant noise sources in NISQ hardware, give typical error rates, and describe two mitigation techniques.",
                marks: 7,
                outline: [
                  "Define NISQ: Noisy Intermediate-Scale Quantum; 50-1000 qubits, no error correction (Preskill 2018).",
                  "Gate errors: single-qubit 10^-4 to 10^-3; two-qubit 10^-3 to 10^-2; measurement 10^-3.",
                  "Decoherence: T1 and T2 limit circuit depth to ~100-1000 gates on superconducting devices.",
                  "Crosstalk and miscalibration further degrade multi-qubit circuits.",
                  "Mitigation 1: readout error mitigation via confusion matrix inversion.",
                  "Mitigation 2: zero-noise extrapolation - run at multiple effective noise levels, extrapolate to zero.",
                  "Note that mitigation reduces bias but does not enable fault tolerance; NISQ cannot run Shor at scale.",
                ],
              },
              {
                q: "Distinguish noise mitigation from quantum error correction.",
                marks: 3,
              },
              {
                q: "Give typical single-qubit and two-qubit gate error rates on current NISQ hardware.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Error correction - repetition and surface codes",
            body: [
              "Quantum error correction encodes one logical qubit into many physical qubits so that errors on a small fraction of physical qubits can be detected and corrected without measuring the logical state. The repetition code is the simplest example: encode |0_L> = |000> and |1_L> = |111>, then detect bit flips by parity checks (measure Z_1 Z_2 and Z_2 Z_3). A single bit flip changes one parity and is corrected by a feedback X. The repetition code handles only X errors; for Z errors, the dual code (repetition in the Hadamard basis) is needed, and together they form the Shor code using 9 physical qubits per logical qubit.",
              "The surface code is the leading candidate for large-scale fault tolerance. It arranges physical qubits on a 2D lattice with nearest-neighbor parity checks (stabilizers) of two types: X-type measuring Z errors and Z-type measuring X errors. A distance-d surface code uses d^2 physical qubits per logical qubit and corrects up to floor((d-1)/2) errors. The threshold theorem is the key result: if the physical error rate is below a threshold (around 10^-3 for the surface code), the logical error rate can be made arbitrarily small by increasing d. Above the threshold, error correction fails.",
              "The cost is steep. A logical qubit with error rate 10^-12 (suitable for Shor on RSA-2048) requires a distance-25 surface code, using roughly 1000 physical qubits per logical qubit. Shor's algorithm on RSA-2048 needs about 4000 logical qubits, hence 4 million physical qubits - far beyond any current device. The roadmap from NISQ to fault tolerance passes through demonstrated logical qubits (one physical-qubit error rate suppressed below the surface code threshold), then small logical circuits, then scaling. IBM, Google and Quantinuum have demonstrated the building blocks; scaling to millions of physical qubits remains a multi-decade engineering challenge.",
            ],
            bullets: [
              "Logical qubit: encoded across many physical qubits, with suppressed error rate.",
              "Repetition code: |0_L>=|000>, |1_L>=|111>; parity checks detect bit flips.",
              "Repetition handles only X errors; dual code handles Z; Shor code combines both (9 qubits).",
              "Surface code: 2D lattice, X and Z stabilizers; distance d uses d^2 physical per logical.",
              "Threshold theorem: if physical error < ~10^-3, logical error -> 0 as d grows.",
              "Distance-25 surface code: ~1000 physical per logical, error 10^-12.",
              "RSA-2048 Shor needs ~4000 logical qubits, ~4 million physical qubits.",
            ],
            table: {
              caption: "Logical vs physical qubits across the maturity path.",
              headers: ["Stage", "Physical qubits per logical", "Logical error rate", "Status"],
              rows: [
                ["Unencoded physical", "1", "10^-3", "current NISQ"],
                ["Distance-3 surface code", "9-17", "10^-4 to 10^-5", "demonstrated"],
                ["Distance-10 surface code", "~100", "10^-9", "near-term target"],
                ["Distance-25 surface code", "~1000", "10^-12", "needed for Shor RSA-2048"],
                ["Full fault-tolerant Shor", "~10^7 total", "arbitrary", "decades away"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The error-correction maturity ladder",
              caption: "Each tier multiplies the physical qubit count to suppress the logical error rate.",
              tiers: [
                { label: "Logical algorithms (Shor)", note: "needs distance ~25, ~10^7 qubits" },
                { label: "Distance-10 surface code", note: "~100 phys per logical, target 10^-9" },
                { label: "Distance-3 surface code", note: "demonstrated, ~10 phys per logical" },
                { label: "Unencoded physical qubits", note: "current NISQ, 10^-3 error" },
              ],
            },
            callout: {
              type: "exam",
              title: "Threshold theorem",
              body: "The threshold theorem is the central result: if physical error rate p is below the threshold p_th (about 1% for the surface code), then increasing the code distance d drives the logical error rate p_L exponentially toward zero - roughly p_L ~ (p / p_th)^((d+1)/2). Below threshold, error correction works; above, it fails. State this whenever asked about surface code scalability.",
            },
            keyTerms: [
              { term: "Logical qubit", definition: "A qubit encoded across many physical qubits via an error-correcting code, with suppressed error rate." },
              { term: "Physical qubit", definition: "An actual hardware qubit; many physical qubits encode one logical qubit in fault-tolerant computation." },
              { term: "Surface code", definition: "A 2D-lattice topological code with nearest-neighbor parity checks; the leading candidate for large-scale fault tolerance." },
              { term: "Code distance", definition: "The minimum number of physical errors that can produce a logical error; a distance-d code corrects floor((d-1)/2) errors." },
              { term: "Threshold theorem", definition: "If the physical error rate is below a code-specific threshold (~10^-3 for surface codes), the logical error rate can be made arbitrarily small by increasing code distance." },
            ],
            examQuestions: [
              {
                q: "Describe the repetition code and the surface code for quantum error correction. State the threshold theorem and explain why factoring RSA-2048 requires millions of physical qubits.",
                marks: 7,
                outline: [
                  "Repetition code: encode |0_L> = |000>, |1_L> = |111>; parity checks detect bit flips.",
                  "Single X flip changes one parity and is corrected; the code handles only X errors.",
                  "Dual repetition in the Hadamard basis handles Z errors; Shor code combines both in 9 qubits.",
                  "Surface code: 2D lattice, nearest-neighbor stabilizers of X and Z type; distance d uses d^2 physical per logical.",
                  "Threshold theorem: if physical error p < p_th ~ 10^-3, logical error p_L ~ (p/p_th)^((d+1)/2) -> 0 as d grows.",
                  "RSA-2048 needs ~4000 logical qubits with logical error 10^-12; distance-25 surface code uses ~1000 physical per logical, so ~4 million physical qubits total.",
                  "Current NISQ hardware is 50-1000 physical qubits; full fault tolerance is decades away.",
                ],
              },
              {
                q: "Distinguish a logical qubit from a physical qubit.",
                marks: 3,
              },
              {
                q: "State the threshold theorem in one sentence.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Quantum cryptography - BB84",
            body: [
              "BB84, proposed by Bennett and Brassard in 1984, is the first quantum key distribution protocol. Alice wants to send a secret key to Bob over a channel that may have an eavesdropper Eve. Alice generates random bits and for each bit randomly chooses a basis: computational (|0>, |1>) or Hadamard (|+>, |->). She sends the corresponding qubit to Bob. Bob measures each qubit in a randomly chosen basis (computational or Hadamard). After transmission, Alice and Bob publicly compare which bases they used, keeping only the bits where their bases agreed - roughly half the transmissions.",
              "The kept bits form a shared raw key. To detect eavesdropping, Alice and Bob publicly compare a random subset of the raw key; if the error rate exceeds a threshold (typically 11%), they conclude Eve was listening and discard the key. The security argument: if Eve measures a qubit in transit, she must choose a basis, and with probability 1/2 she picks the wrong one. A wrong-basis measurement disturbs the state - for example, measuring |+> in the computational basis collapses it to |0> or |1>, so when Bob measures in the Hadamard basis, he gets a random outcome uncorrelated with Alice's bit. Eve's disturbance introduces detectable errors.",
              "BB84 is tamper-evident, not tamper-proof: Eve can always measure and disturb, but she cannot avoid detection. The no-cloning theorem (Unit III) is the structural guarantee - Eve cannot copy the qubits and forward them undisturbed, so any information gain comes at the cost of detectable disturbance. After error checking, Alice and Bob perform privacy amplification - hashing the raw key through a universal hash function to reduce Eve's potential information to negligible levels. BB84 is deployed in commercial systems (ID Quantique, Toshiba) and in the Beijing-Shanghai quantum communication link.",
            ],
            bullets: [
              "BB84 (Bennett and Brassard 1984): first quantum key distribution protocol.",
              "Alice picks random bit + random basis (Z or X); sends |0>, |1>, |+>, or |->.",
              "Bob measures each qubit in a random basis (Z or X).",
              "Sifting: keep only bits where bases matched (~50% of transmissions).",
              "Eavesdropping detection: compare subset of raw key; error rate > 11% -> abort.",
              "Security: no-cloning forbids copying; measurement disturbance introduces errors.",
              "Privacy amplification: hash raw key to reduce Eve's information to negligible.",
            ],
            codeExample: {
              language: "python",
              caption: "BB84 simulation in Python-style pseudo-code.",
              code: `
import random

# Alice generates bits and random bases
alice_bits = [random.randint(0, 1) for _ in range(100)]
alice_bases = [random.choice(["Z", "X"]) for _ in range(100)]

# Alice sends qubits: bit 0 -> |0> or |+>; bit 1 -> |1> or |->
# Bob measures each qubit in a random basis
bob_bases = [random.choice(["Z", "X"]) for _ in range(100)]
bob_bits = []
for a_bit, a_basis, b_basis in zip(alice_bits, alice_bases, bob_bases):
    if b_basis == a_basis:
        bob_bits.append(a_bit)             # same basis: correlated
    else:
        bob_bits.append(random.randint(0, 1))  # wrong basis: random

# Sift: keep only bits where bases matched
sifted = [(a, b) for a, b, ab, bb in zip(alice_bits, bob_bits, alice_bases, bob_bases) if ab == bb]
print("Sifted key length:", len(sifted))   # about 50 of 100
`,
            },
            diagram: {
              kind: "cycle",
              title: "The BB84 quantum key distribution cycle",
              caption: "Five steps from Alice's random bits to a shared secret key.",
              steps: [
                { label: "Alice picks random bit + basis, sends qubit", note: "Z basis: |0>, |1>; X basis: |+>, |->" },
                { label: "Bob measures in random basis", note: "Z or X, 50/50" },
                { label: "Alice and Bob publicly compare bases", note: "keep only matching-basis bits" },
                { label: "Compare subset of key, estimate error rate", note: "if error > 11%, abort" },
                { label: "Privacy amplification: hash the raw key", note: "Eve's information -> negligible" },
              ],
            },
            callout: {
              type: "exam",
              title: "Why BB84 is secure",
              body: "Two theorems underlie BB84 security: (1) no-cloning forbids Eve from copying the qubits; (2) measurement disturbance means any information Eve gains introduces errors Alice and Bob detect. The protocol is tamper-evident: Eve can read, but cannot hide. Privacy amplification reduces any residual information to negligible levels. State both theorems by name in any BB84 question.",
            },
            keyTerms: [
              { term: "BB84 protocol", definition: "The first quantum key distribution protocol (Bennett and Brassard 1984); distributes a secret key using non-orthogonal qubit states." },
              { term: "Quantum key distribution (QKD)", definition: "The task of distributing a shared secret key between two parties using quantum communication, with security guaranteed by quantum mechanics." },
              { term: "Sifting", definition: "The BB84 step where Alice and Bob publicly compare their basis choices and keep only the bits where their bases matched." },
              { term: "Privacy amplification", definition: "The post-processing step that hashes the raw key to reduce an eavesdropper's information to negligible levels." },
              { term: "Tamper-evident", definition: "Property of BB84 that any eavesdropping introduces detectable errors; Eve cannot avoid detection." },
            ],
            examQuestions: [
              {
                q: "Describe the BB84 quantum key distribution protocol step by step. Explain how the no-cloning theorem and measurement disturbance together guarantee security against an eavesdropper.",
                marks: 7,
                outline: [
                  "Alice picks random bits and random bases (Z or X); sends qubits (|0>, |1>, |+>, |->).",
                  "Bob measures each qubit in a random basis (Z or X).",
                  "Alice and Bob publicly compare bases; keep only bits where bases matched (sifting).",
                  "They publicly compare a random subset of the sifted key; if error rate exceeds threshold (e.g. 11%), abort.",
                  "Eve measuring in transit picks the wrong basis with prob 1/2; her measurement disturbs the state.",
                  "No-cloning theorem: Eve cannot copy the qubits and forward them undisturbed; information gain implies disturbance.",
                  "Privacy amplification hashes the raw key, reducing any residual Eve information to negligible.",
                ],
              },
              {
                q: "Why is BB84 called tamper-evident rather than tamper-proof?",
                marks: 3,
              },
              {
                q: "Name the two theorems that underlie BB84 security.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.6",
            title: "Post-quantum crypto, QML and the career landscape",
            body: [
              "Post-quantum cryptography (PQC) prepares classical systems for the eventual fault-tolerant quantum computer. NIST launched a standardization process in 2016 and selected first standards in 2024: ML-KEM (Kyber) for key encapsulation, ML-DSA (Dilithium) for digital signatures, and SLH-DSA (SPHINCS+) as a hash-based fallback. The hardness assumptions are lattice problems (learning-with-errors, short-integer-solution), hash collision resistance, and code-based decoding - none known to be efficiently solvable by quantum computers. Migration is non-trivial: keys and signatures are larger, and protocols must be redesigned, but the field is moving from research to deployment.",
              "Quantum machine learning (QML) is an active research area with no proven practical advantage yet. Variational quantum circuits (VQE, QAOA) parameterize a circuit and train its parameters with a classical optimizer; they target chemistry ground states and combinatorial optimization. Quantum kernels compute inner products in an exponentially large feature space, potentially accelerating some learning tasks. Quantum neural networks replace classical neurons with parameterized gates. Caveats: noise limits circuit depth, barren plateaus plague parameter optimization for large qubit counts, and classical baselines are often stronger than claimed. QML's value awaits hardware that can outperform classical ML on real data.",
              "The career landscape spans research, algorithm design, hardware engineering and software engineering. Quantum software engineers build SDKs (Qiskit at IBM, Cirq at Google), error-correction compilers, and application libraries; algorithm designers work at startups and research labs on Grover-style speed-ups for industry problems; hardware engineers design qubits, control electronics, and cryogenic systems; research physicists explore new modalities and error-correcting codes. Industry players include IBM, Google, Microsoft, Amazon, IonQ, Quantinuum, Rigetti, Xanadu, PsiQuantum and Atom Computing. Skills in demand: linear algebra, quantum mechanics basics, Python, a quantum SDK, classical ML, and domain expertise (chemistry, optimization, cryptography).",
            ],
            bullets: [
              "Post-quantum cryptography (PQC): classical schemes secure against quantum attackers.",
              "NIST PQC standards (2024): ML-KEM (Kyber), ML-DSA (Dilithium), SLH-DSA (SPHINCS+).",
              "Hardness: lattice problems (LWE, SIS), hash collision resistance, code-based decoding.",
              "QML: variational circuits (VQE, QAOA), quantum kernels, quantum neural networks.",
              "QML caveats: noise, barren plateaus, strong classical baselines - no proven advantage yet.",
              "Industry: IBM, Google, Microsoft, Amazon, IonQ, Quantinuum, Rigetti, Xanadu, PsiQuantum.",
              "Careers: software engineering, algorithm research, hardware engineering, theory.",
            ],
            table: {
              caption: "Career paths in quantum computing.",
              headers: ["Role", "Skill focus", "Typical employer"],
              rows: [
                ["Quantum software engineer", "Python, SDKs, compilers", "IBM, Google, Amazon"],
                ["Algorithm researcher", "linear algebra, algorithms", "startup or national lab"],
                ["Hardware engineer", "physics, cryogenics, electronics", "IonQ, Rigetti, Xanadu"],
                ["Error-correction theorist", "coding theory, fault tolerance", "Quantinuum, Google"],
                ["Quantum ML researcher", "ML, variational circuits", "startup or university"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Quantum technology opportunities",
              caption: "Quadrants by impact (niche to broad) and time horizon (near to far).",
              axes: { x: "Impact (niche to broad)", y: "Time horizon (near to far)" },
              quadrants: [
                { label: "NISQ heuristics", note: "near term, niche impact" },
                { label: "QKD networks", note: "near term, broad (gov, finance)" },
                { label: "Quantum ML", note: "far term, niche (research)" },
                { label: "Fault-tolerant Shor", note: "far term, broad (breaks RSA)" },
              ],
            },
            callout: {
              type: "exam",
              title: "What's actually deployed",
              body: "Two things are deployed today: QKD networks (Beijing-Shanghai, Tokyo) and post-quantum cryptography (NIST's ML-KEM standardized in 2024). Everything else - Shor at scale, useful Grover, useful QML - is research. State the deployed list explicitly; examiners reward students who distinguish deployment from speculation.",
            },
            keyTerms: [
              { term: "Post-quantum cryptography (PQC)", definition: "Classical cryptographic schemes believed secure against quantum attackers; standardized by NIST (ML-KEM, ML-DSA, SLH-DSA)." },
              { term: "Lattice-based cryptography", definition: "PQC family based on the hardness of lattice problems like learning-with-errors; underlies ML-KEM and ML-DSA." },
              { term: "Variational quantum circuit", definition: "A parameterized quantum circuit trained by a classical optimizer; used in VQE and QAOA." },
              { term: "Barren plateau", definition: "The phenomenon where the gradient of a variational circuit's cost vanishes exponentially with qubit count, blocking training." },
              { term: "Quantum machine learning (QML)", definition: "The application of quantum circuits to learning tasks; an active research area with no proven practical advantage yet." },
            ],
            examQuestions: [
              {
                q: "Describe the NIST post-quantum cryptography standardization effort, naming at least two selected algorithms and their hardness assumptions. Contrast post-quantum cryptography with quantum key distribution.",
                marks: 7,
                outline: [
                  "NIST launched PQC standardization in 2016; first standards selected in 2024.",
                  "ML-KEM (Kyber): key encapsulation based on module learning-with-errors (lattice).",
                  "ML-DSA (Dilithium): digital signatures based on module short-integer-solution (lattice).",
                  "SLH-DSA (SPHINCS+): hash-based signatures; conservative fallback relying on hash collision resistance.",
                  "Hardness assumptions: lattice problems, hash collision resistance, code-based decoding - none known to be quantum-solvable in polynomial time.",
                  "PQC replaces classical primitives with quantum-resistant ones; deployed on classical hardware, no quantum computer needed.",
                  "Contrast with QKD (BB84): QKD uses quantum communication to distribute keys; PQC is purely classical and relies on computational hardness.",
                ],
              },
              {
                q: "Describe one quantum machine learning approach and one caveat to its practical use.",
                marks: 3,
              },
              {
                q: "Name three career paths in quantum computing.",
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
        "RGPV AL-802(D) papers typically spread marks across state-vector calculations, gate matrices, Bell-state preparation, Grover's algorithm, and Shor's outline, with definitions of superposition, entanglement and the Born rule supplying the definitional short questions. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Qubit, superposition, entanglement, Bloch sphere (Unit I-II)", weight: "10-14 marks", note: "Definitions and worked state-vector examples are almost guaranteed short-answer material." },
        { topic: "Single-qubit gates X, Y, Z, H, S, T and matrices (Unit III)", weight: "8-12 marks", note: "Matrix form and worked action on |0>, |1> required; memorize the 2x2 ASCII matrices." },
        { topic: "CNOT, Bell-state preparation, entangling circuits (Unit III)", weight: "8-12 marks", note: "Trace |00> through H + CNOT step by step; the standard 7-mark." },
        { topic: "Tensor products, multi-qubit state vectors (Unit II)", weight: "6-10 marks", note: "Compute |0> tensor |1> and Bell state explicitly; check normalization." },
        { topic: "Deutsch-Jozsa and Bernstein-Vazirani (Unit IV)", weight: "8-12 marks", note: "Circuit shape + Hadamard-after-oracle interference; one of the two is highly likely." },
        { topic: "Grover's algorithm (Unit IV)", weight: "10-14 marks", note: "Oracle + diffusion, sqrt(N) iterations, N=4 worked example." },
        { topic: "Shor's algorithm outline (Unit IV)", weight: "6-10 marks", note: "Factoring -> period finding -> QFT; state complexity but not full derivation." },
        { topic: "No-cloning theorem and teleportation (Unit III)", weight: "6-8 marks", note: "Proof by inner-product argument and the five-step teleportation protocol." },
        { topic: "Qiskit workflow and NISQ (Unit V)", weight: "4-6 marks", note: "Bell-state snippet and three noise sources; mitigation concepts." },
        { topic: "BB84 and post-quantum cryptography (Unit V)", weight: "6-8 marks", note: "Five-step protocol and NIST standards (ML-KEM, ML-DSA)." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I-II foundations", tasks: ["Why quantum computing: three walls and the 2^n argument", "Qubit as 2D unit vector, Bloch sphere, worked states |psi> = (1/2)|0> + (sqrt(3)/2)|1>", "Complex numbers, amplitudes, Dirac notation, inner/outer products", "Tensor products and entanglement proof"] },
        { week: "Week 2", focus: "Unit III gates and circuits", tasks: ["Single-qubit gate matrices X, Y, Z, H, S, T and their actions", "CNOT truth table, matrix, Bell-state preparation circuit", "SWAP, Toffoli, universality of {H, T, CNOT}", "No-cloning theorem proof and decoherence (T1, T2)"] },
        { week: "Week 3", focus: "Unit III protocols and Unit IV DJ/BV", tasks: ["Quantum teleportation protocol step-by-step", "Superdense coding and the ebit resource equation", "Deutsch-Jozsa: one-query separation, worked n=1 and n=2 cases", "Bernstein-Vazirani: hidden string recovery in one query"] },
        { week: "Week 4", focus: "Unit IV Grover and Simon", tasks: ["Grover oracle and diffusion operator; N=4 worked to probability 1", "Amplitude amplification generalization and optimal iteration count", "Simon's algorithm: O(n) queries vs classical O(2^(n/2))", "QFT intuition: periodic amplitudes -> measurable spikes"] },
        { week: "Week 5", focus: "Unit IV Shor and Unit V programming", tasks: ["Shor outline: factoring -> period finding -> QFT -> continued fractions", "Qiskit workflow: build, run, counts; Bell-state snippet", "Other SDKs and hardware modalities compared", "NISQ noise sources and mitigation (ZNE, readout mitigation)"] },
        { week: "Week 6", focus: "Unit V Landscape + full revision", tasks: ["Error correction: repetition, surface code, threshold theorem", "BB84 protocol: five steps, tamper-evidence, no-cloning role", "Post-quantum cryptography: NIST standards (ML-KEM, ML-DSA)", "Two full practice papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Memorize the ASCII matrices for X, Y, Z, H, S, T and CNOT cold; gate-matrix questions are guaranteed 3-7 marks.",
        "Rehearse the Bell-state preparation circuit H + CNOT(0, 1) and trace the state through each step: |00> -> |+>|0> -> |Phi+>.",
        "Write out the Deutsch-Jozsa algorithm in five lines: prepare, H, oracle, H, measure - and state the constant vs balanced outcomes.",
        "State Grover's sqrt(N) iteration count and the N=4 worked example with amplitudes 1/2 -> -1/2 -> 1.",
        "Recall the no-cloning proof: take inner products, get z = z^2, conclude only orthogonal states clone.",
        "List the teleportation resources: 1 ebit + 2 classical bits = 1 qubit; original destroyed.",
        "Cite Feynman 1981, Shor 1994, Grover 1996, Sycamore 2019 by year and one-line contribution.",
        "Distinguish deployed tech (QKD, PQC) from research (Shor at scale, useful QML).",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Write the matrix in ASCII rows: [[1, 0], [0, -1]] for Z - never prose-only answers.",
        "When asked for a state after gates, write each step on its own line with the arrow -> between them.",
        "Verify normalization <psi|psi> = 1 after computing any state; one line earns one mark.",
        "Cite theorems by name: Born rule, no-cloning, threshold theorem, Solovay-Kitaev - named steps earn method marks.",
        "For algorithm questions, structure as: prepare superposition, apply oracle, interfere, measure - the four-step skeleton.",
        "For hardware questions, give numbers: ~50 ns gate time (superconducting), ~seconds coherence (trapped ion), 10^-3 error rate (NISQ).",
        "Time-box: 2/3-mark questions in 4-6 minutes, 7-mark questions in 14-18 minutes, last 10 minutes for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Claiming 'quantum parallelism' gives exponential speed-up - the correct framing is superposition + interference + measurement.",
        "Forgetting to normalize a qubit state - always check |a|^2 + |b|^2 = 1 before finishing.",
        "Treating |+> and |-> as the same state because they have the same measurement distribution - they differ by relative phase and are orthogonal.",
        "Writing CNOT as a 2x2 matrix - it acts on two qubits, so it is 4x4.",
        "Stating Shor breaks RSA on current hardware - current NISQ devices have factored only N=15; RSA-2048 needs millions of physical qubits.",
        "Confusing global phase (unobservable) with relative phase (observable) - only relative phase matters for interference.",
        "Forgetting the auxiliary |-> in Deutsch-Jozsa - phase kickback requires the (|0>-|1>)/sqrt(2) input on the last qubit.",
        "Reporting the raw counts instead of normalized probabilities in a Qiskit-style question.",
      ],
    },
  ],
};
