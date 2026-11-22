import type { AcademicSubject } from "./types";

export const ec601: AcademicSubject = {
  id: "ec-601",
  code: "EC-601",
  title: "Digital Signal Processing",
  semester: "VI Semester",
  program: "RGPV · Electronics and Communication Engineering",
  tagline:
    "Every topic of the syllabus as one connected story: how sequences and systems behave, how the convolution sum carries a signal through an LTI system, how difference equations compute it, how the z-transform and the DFT analyse it, how the FFT computes the DFT fast, and how IIR and FIR design techniques turn specifications into working filters.",
  description:
    "Five units walk from discrete-time signals, LTI systems, difference equations and the DTFT, through the z-transform with its regions of convergence, inversion and system analysis in the z-domain including block diagrams, signal flow graphs and matrix representation, into the DFS, DFT, circular convolution and the two-dimensional DFT, then the efficient computation of the DFT with decimation-in-time and decimation-in-frequency FFTs and composite-N decomposition, ending with IIR and FIR filter design by impulse invariance, the bilinear transformation and windowing.",
  accentColor: "#ec4899",
  emoji: "DP",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Discrete-Time Signals and Systems",
      summary:
        "Unit I builds the vocabulary the whole subject runs on: discrete-time signals and the basic sequences, the classification of discrete-time systems, the convolution sum that defines an LTI system, difference equations as the computational recipe, their complete solution, the implementation structures that realize them, and stability, causality and the frequency-domain representation through the DTFT.",
      chapter: {
        number: "01",
        title: "Sequences, Systems and Convolution",
        intro:
          "Unit I covers discrete-time signals and basic sequences, the classification of discrete-time systems, analysis of LTI systems through the convolution sum, systems described by difference equations and their solution, implementation of discrete-time systems, stability and causality, and the frequency-domain representation of signals and systems.",
        inOneBreath:
          "A discrete-time signal is a sequence x[n] indexed by integers; five basic sequences (unit sample, unit step, ramp, exponential, sinusoid) build everything else. A system is fully characterized by its impulse response h[n] only when it is linear and shift-invariant, and then the output is the convolution sum y[n] = sum of x[k]h[n - k]. Recursive systems are written as difference equations and solved as homogeneous plus particular parts. BIBO stability means the impulse response is absolutely summable; causality means h[n] = 0 for n < 0; and the DTFT X(e^jw) = sum of x[n]e^(-jwn) turns convolution into multiplication.",
        sections: [
          {
            number: "1.1",
            title: "Discrete-time signals: sequences and basic operations",
            body: [
              "A discrete-time signal is a function of an integer index: x[n] is defined only for integer n, and between samples the signal is undefined - not zero, simply not part of the model. In practice most sequences arise by sampling a continuous waveform x(t) every T seconds, giving x[n] = xa(nT). For the 8 kHz speech codec of telephony, T = 125 microseconds, and a 1 kHz tone becomes x[n] = sin(2pi·1000·n/8000) = sin(0.25pi·n): the digital frequency is 0.25pi radians per sample. This is the first exam distinction - analog frequency f in Hz versus digital frequency w in radians per sample, linked by w = 2pi·f/fs. The same sequence sin(0.25pi·n) is a 1 kHz tone at fs = 8 kHz but a 4 kHz tone at fs = 32 kHz; only the pair (w, fs) has physical meaning.",
              "Sequences are classified as energy or power signals with numbers the examiner expects. The energy is E = sum of |x[n]|^2 over all n; the power is P = lim as N grows of (1/(2N+1))·sum over -N..N of |x[n]|^2. The decaying exponential x[n] = (0.5)^n·u[n] has finite energy E = 1/(1 - 0.25) = 4/3 = 1.33 J and zero average power; the cosine x[n] = 3cos(0.25pi·n) has infinite energy but finite power P = 9/2 = 4.5 W; the ramp x[n] = n·u[n] has neither and is neither an energy nor a power signal. A periodic sequence with period N satisfies x[n + N] = x[n] for all n; sin(0.25pi·n) has period 8 because 8·0.25pi = 2pi.",
              "Five basic sequences are the alphabet of DSP: the unit sample delta[n] (1 at n = 0, 0 elsewhere - the identity of convolution), the unit step u[n] (1 for n >= 0), the ramp n·u[n], the real exponential a^n·u[n] (decaying for |a| < 1, growing for |a| > 1), and the sinusoid cos(w0·n + phase). Any signal decomposes as a weighted sum of shifted deltas - x[n] = sum of x[k]·delta[n - k] - which is exactly why the impulse response will turn out to characterize an LTI system completely. The basic operations shift the index (x[n - n0] delays by n0 samples), fold the index (x[-n] reverses time), scale the amplitude, add two sequences sample by sample, and multiply two sequences sample by sample; combinations of these produce every practical waveform-processing step.",
              "The exam pattern for this section is fixed: define the sequence family, classify given signals as energy/power/neither with the sums evaluated, and compute a digital frequency from an analog one. Practise the three worked numbers above - 4/3 J, 4.5 W, period 8 - because they recur across papers in slightly different clothes, and always state the units of w (radians per sample) and the Nyquist link w = 2pi·f/fs explicitly.",
            ],
            keyTerms: [
              { term: "Sequence x[n]", definition: "A discrete-time signal defined for integer n only; the index has no units." },
              { term: "Digital frequency w", definition: "Frequency in radians per sample, w = 2pi·f/fs; dimensionless until fs is known." },
              { term: "Unit sample delta[n]", definition: "1 at n = 0 and 0 elsewhere; any sequence is a sum of scaled, shifted deltas." },
              { term: "Energy signal", definition: "Finite total energy E = sum |x[n]|^2 and zero average power." },
              { term: "Power signal", definition: "Infinite energy but finite average power, e.g. any periodic sinusoid." },
            ],
            table: {
              caption: "The five basic sequences and what each is for.",
              headers: ["Sequence", "Definition", "Role in DSP"],
              rows: [
                ["Unit sample", "delta[n]: 1 at n = 0, else 0", "Identity of convolution; probes a system"],
                ["Unit step", "u[n]: 1 for n >= 0, else 0", "Input for step response; builds causal signals"],
                ["Ramp", "n·u[n]", "Integral of the step; boundary cases"],
                ["Exponential", "a^n·u[n]", "Natural mode of every recursive system"],
                ["Sinusoid", "cos(w0·n + theta)", "Steady-state test input; DFT building block"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Analog waveform versus processed sequence",
              caption: "Sampling turns a continuous signal into a sequence; the index is dimensionless until fs is declared.",
              left: {
                heading: "Continuous-time x(t)",
                items: [
                  "Defined for every real t",
                  "Frequency f in Hz, period T0 = 1/f",
                  "sin(2pi·1000·t) means 1 kHz, always",
                  "Operations: differentiation, integration",
                ],
              },
              right: {
                heading: "Discrete-time x[n]",
                items: [
                  "Defined only for integer n",
                  "Frequency w in rad/sample, period N",
                  "sin(0.25pi·n): 1 kHz at fs = 8 kHz, 4 kHz at fs = 32 kHz",
                  "Operations: shifting, folding, scaling",
                ],
              },
            },
            bullets: [
              "x[n] is defined on integers only; sampling gives x[n] = xa(nT).",
              "Digital frequency w = 2pi·f/fs in rad/sample; the pair (w, fs) carries the physical meaning.",
              "Energy E = sum |x[n]|^2; power P = long-run average of |x[n]|^2.",
              "(0.5)^n·u[n] is an energy signal with E = 4/3; 3cos(0.25pi·n) is a power signal with P = 4.5 W.",
              "Period N exists when one cycle spans exactly N samples: sin(0.25pi·n) has N = 8.",
              "Basic operations: shift, fold, amplitude scale, sample-wise add, sample-wise multiply.",
            ],
            callout: {
              type: "tip",
              title: "Always attach fs to w",
              body: "Examiners award the first mark for writing w = 2pi·f/fs before any computation. A bare '0.25pi' means nothing physically; '0.25pi rad/sample at fs = 8 kHz' means 1 kHz. Make this a reflex in every frequency answer.",
            },
            examQuestions: [
              {
                q: "Define a discrete-time signal and distinguish it from a continuous-time signal. Describe the five basic sequences and the elementary operations on sequences, and compute the digital frequency of a 1 kHz sinusoid sampled at 8 kHz.",
                marks: 14,
                outline: [
                  "x[n] defined on integers only; sampling x[n] = xa(nT); undefined between samples",
                  "Analog f in Hz versus digital w in rad/sample; w = 2pi·f/fs",
                  "Unit sample delta[n], unit step u[n], ramp n·u[n], exponential a^n·u[n], sinusoid",
                  "delta[n] is the identity: any x[n] = sum of x[k]·delta[n - k]",
                  "Operations: shift (delay n0), fold (time reversal), scale, add, multiply",
                  "1 kHz at fs = 8 kHz: w = 2pi·1000/8000 = 0.25pi rad/sample, period N = 8",
                  "Classification: energy vs power with one example each",
                ],
              },
              {
                q: "Classify the following as energy, power, or neither: x[n] = (0.5)^n·u[n], x[n] = 3cos(0.25pi·n), x[n] = n·u[n]. Evaluate the energy or power numerically where finite.",
                marks: 7,
                outline: [
                  "Energy E = sum |x[n]|^2 over all n; power P = time-average of |x[n]|^2",
                  "Geometric series: (0.5)^n·u[n] gives E = 1/(1 - 0.25) = 4/3 J, P = 0",
                  "Cosine has infinite energy, finite average power P = 9/2 = 4.5 W",
                  "Ramp has E = infinity and P = infinity: neither",
                  "Periodicity note: 3cos(0.25pi·n) has period N = 8",
                ],
              },
              {
                q: "A periodic discrete-time sinusoid has digital frequency w0 = 0.3pi rad/sample. Does it have a fundamental period? If yes, find it; if not, explain why.",
                marks: 7,
                outline: [
                  "Period N exists when w0·N = 2pi·k for some integer k",
                  "0.3pi·N = 2pi·k -> N = 2k/0.3 = 20k/3; smallest integer at k = 3",
                  "N = 20 samples is the fundamental period",
                  "Contrast: w0 = 1 rad/sample never satisfies the condition (1/pi irrational)",
                  "Conclusion: discrete-time sinusoids are periodic only for rational 2pi/w0",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Discrete-time systems and their classification",
            body: [
              "A discrete-time system is a rule that maps an input sequence x[n] to an output sequence y[n], written y[n] = T{x[n]}. The syllabus's classification tests five properties, and each has a mechanical procedure. Linearity: superposition holds - T{a·x1[n] + b·x2[n]} = a·T{x1[n]} + b·T{x2[n]}. Shift-invariance: delaying the input delays the output equally - T{x[n - n0]} = y[n - n0]. Causality: the output at n depends only on present and past inputs. Stability (BIBO): every bounded input produces a bounded output. Memory: the output depends on past or future samples (with memory) or only on the present sample (memoryless). Every property question is answered by constructing one counterexample or one verification, never by assertion.",
              "The worked tests on standard examples are the exam's bread and butter. The squarer y[n] = x[n]^2 fails linearity: T{2x[n]} = 4x[n]^2 while 2·T{x[n]} = 2x[n]^2 - a factor of 2 discrepancy. The downsampler y[n] = x[2n] is shift-varying: shifting the input by one gives T{x[n - 1]} = x[2n - 1], but shifting the output gives y[n - 1] = x[2n - 2]; the two disagree, so time scaling destroys shift-invariance. The reflector y[n] = x[-n] is non-causal: y[0] = x[0], y[1] = x[-1]... wait, y[1] = x[-1] is a past sample, but y[-1] = x[1] needs a future sample - so the system needs the future. The accumulator y[n] = sum of x[k] for k = -infinity to n has memory and is causal, and it is unstable because a bounded unit step drives the output to infinity.",
              "The accumulator also shows why stability needs care rather than intuition. Its impulse response is h[n] = u[n], and the sum of |h[n]| diverges - the formal criterion of section 1.7. By contrast the moving average y[n] = (1/3)(x[n] + x[n - 1] + x[n - 2]) is linear, shift-invariant, causal, stable, and has memory of exactly two samples. Note what memory means here: the system's output is computed from stored past inputs, which in implementation language means registers or delay elements. Memory, causality and stability jointly decide whether a system can be built and safely run - a non-causal smoother is fine offline (it can look ahead), a causal stable filter is what runs in a hearing aid.",
              "For the exam, present each property test in a fixed two-line format: state the definition, then apply it to the given y[n] with one concrete number or symbol manipulation. A 14-mark classification question typically gives three or four systems (mix in a squarer, a downsampler, an accumulator and a reflection) and wants a verdict on each of the five properties; half the marks live in the counterexamples, so carry two or three ready-made ones into the hall.",
            ],
            keyTerms: [
              { term: "Linearity", definition: "T{a·x1 + b·x2} = a·T{x1} + b·T{x2} - superposition of scaled responses." },
              { term: "Shift-invariance", definition: "T{x[n - n0]} = y[n - n0]: delaying the input delays the output identically." },
              { term: "Causality", definition: "y[n0] depends only on x[n] for n <= n0; no future samples." },
              { term: "BIBO stability", definition: "Every bounded input x with |x[n]| <= B gives bounded output |y[n]| <= B·S for finite S." },
              { term: "Memory", definition: "The system stores past (or future) samples; memoryless systems map x[n] to y[n] directly." },
            ],
            diagram: {
              kind: "fork",
              title: "Classifying a given y[n]",
              caption: "Run the five tests in order; one counterexample settles each property.",
              start: "System y[n] = T{x[n]}",
              branches: [
                { label: "Superposition fails?", outcome: "T{x^2} type - nonlinear; stop, the LTI toolkit does not apply", good: false },
                { label: "Time-scaling inside?", outcome: "x[2n], x[-n] type - shift-varying or non-causal", good: false },
                { label: "Future index n + k?", outcome: "non-causal - fine offline, impossible in real time", good: false },
                { label: "Output unbounded sum of past inputs?", outcome: "accumulator type - unstable (BIBO violated)", good: false },
                { label: "All five tests pass", outcome: "LTI, causal, stable - fully described by h[n]; use convolution", good: true },
              ],
            },
            bullets: [
              "Linearity test: scale and superpose; squarers and clamps fail it.",
              "Shift-invariance test: compare T{x[n - n0]} with y[n - n0]; time scalers fail it.",
              "Causality test: hunt for x[n + k] with k > 0; time reflection x[-n] always needs the future.",
              "Stability test: bounded input, bounded output; accumulators and pure integrators fail it.",
              "Memory test: y[n] depending on x[n] alone is memoryless; accumulators and averages have memory.",
              "The moving average y[n] = (x[n] + x[n - 1] + x[n - 2])/3 passes all five tests.",
            ],
            callout: {
              type: "exam",
              title: "Counterexamples carry the marks",
              body: "For every property, write the definition in one line and a one-line counterexample or verification with concrete values: T{2x} = 4x^2 vs 2T{x} = 2x^2 kills linearity; x[2n - 1] vs x[2n - 2] kills shift-invariance. Vague prose earns nothing; the constructed numbers earn everything.",
            },
            table: {
              caption: "Standard systems and their five verdicts.",
              headers: ["System", "Linear?", "Shift-invariant?", "Causal?", "Stable?", "Memory?"],
              rows: [
                ["y[n] = x[n]^2", "No", "Yes", "Yes", "Yes", "No"],
                ["y[n] = x[2n]", "Yes", "No", "No", "Yes", "Yes"],
                ["y[n] = x[-n]", "Yes", "Yes", "No", "Yes", "Yes"],
                ["y[n] = sum x[k] (k <= n)", "Yes", "Yes", "Yes", "No", "Yes"],
                ["y[n] = (x[n] + x[n - 1] + x[n - 2])/3", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ],
            },
            examQuestions: [
              {
                q: "Define linearity, shift-invariance, causality, stability and memory for a discrete-time system, and classify y1[n] = x[n]^2, y2[n] = x[2n] and y3[n] = sum of x[k] for k <= n against each property with proofs or counterexamples.",
                marks: 14,
                outline: [
                  "Definitions of all five properties, one line each",
                  "y1: nonlinear - T{2x} = 4x^2 not 2x^2; other four properties hold",
                  "y2: shift-varying - T{x[n - 1]} = x[2n - 1] vs y[n - 1] = x[2n - 2]",
                  "y2 also non-causal: needs future samples of x",
                  "y3: linear (sum of sums), shift-invariant, causal, but unstable",
                  "Stability counterexample for y3: bounded u[n] input gives unbounded output",
                  "Summary table of the three systems across the five properties",
                ],
              },
              {
                q: "Show that the downsampler y[n] = x[2n] is not shift-invariant, and explain why such a system cannot be characterized by an impulse response.",
                marks: 7,
                outline: [
                  "Shift input by 1: T{x[n - 1]} = x[2n - 1] - keeps odd samples of the delayed signal",
                  "Shift output by 1: y[n - 1] = x[2n - 2] - different sequence",
                  "The two disagree, so superposition of delays fails",
                  "Impulse response characterization requires shift-invariance",
                  "One delta shifted by one gives a different output than delta shifted by zero",
                ],
              },
              {
                q: "Is the system y[n] = x[-n] causal? Is it shift-invariant? Justify both answers.",
                marks: 7,
                outline: [
                  "Non-causal: y[n] = x[-n] needs x[1] to produce y[-1] - the future",
                  "Shift-invariant: T{x[n - n0]} = x[-n - n0] = y[n + n0], not y[n - n0]",
                  "Subtle point: the reflection makes a delay act as an advance",
                  "Verdict: acausal but shift-invariant",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Analysis of LTI systems: the convolution sum",
            body: [
              "When a system is both linear and shift-invariant, one measurement characterizes it forever: the impulse response h[n] = T{delta[n]}. Because any input is a sum of scaled shifted deltas, x[n] = sum of x[k]·delta[n - k], linearity and shift-invariance carry the system's action inside the sum: y[n] = sum over k of x[k]·h[n - k]. This is the convolution sum - the central formula of Unit I. It says: to compute y[n], take the input, flip it, slide it to position n, multiply sample by sample and add. The notation y[n] = x[n] * h[n] formalizes it, and the operation is commutative (x * h = h * x), so the filter and the signal play symmetric roles.",
              "A worked example fixes the mechanics. Let x[n] = {1, 2, 3} and h[n] = {1, 1} (a two-sample moving average without the division). The output length is L = N1 + N2 - 1 = 4 samples. y[0] = x[0]h[0] = 1. y[1] = x[0]h[1] + x[1]h[0] = 1 + 2 = 3. y[2] = x[1]h[1] + x[2]h[0] = 2 + 3 = 5. y[3] = x[2]h[1] = 3. So y[n] = {1, 3, 5, 3} - each input sample paints a two-sample smear of itself, and the overlapping smears add. The step-by-step table (flip, slide, multiply, add) is exactly what the examiner wants to see in a 7-mark numerical, and the length formula L = N1 + N2 - 1 is the check that catches most slips.",
              "Convolution's algebra organizes system interconnection, and these two results are guaranteed exam material. Cascade: two LTI systems in series have impulse response h[n] = h1[n] * h2[n], because the first system's output is the second system's input and associativity of convolution does the work. Parallel: systems feeding a common adder have h[n] = h1[n] + h2[n], by linearity. The practical consequence: an order-200 filter can be built as a cascade of short sections, and the analysis remains exact because convolution composes. One more property earns marks - if x[n] has width N1 and h[n] has width N2, y[n] has width N1 + N2 - 1, which is why cascading filters keeps growing the output length.",
              "The convolution sum is also the bridge to everything later in the subject: the z-transform (Unit II) turns it into polynomial multiplication, and the DFT (Unit III) turns it into sample-wise multiplication - both are just fast ways to do the sum of this section. When a paper asks 'why is the impulse response a complete description?', the answer is the two-line derivation above: delta expansion + linearity + shift-invariance. Write it in full, not as a summary; the derivation is the answer.",
            ],
            keyTerms: [
              { term: "Impulse response h[n]", definition: "The system's output to delta[n]; complete description of any LTI system." },
              { term: "Convolution sum", definition: "y[n] = sum over k of x[k]·h[n - k]: flip, slide, multiply, add." },
              { term: "Cascade", definition: "Series connection; impulse responses multiply as h[n] = h1[n] * h2[n]." },
              { term: "Parallel", definition: "Outputs added; impulse responses add as h[n] = h1[n] + h2[n]." },
              { term: "Output length", definition: "L = N1 + N2 - 1 samples for finite inputs of lengths N1 and N2." },
            ],
            diagram: {
              kind: "flow",
              title: "Computing one output sample by convolution",
              caption: "Flip the impulse response, slide it to n, multiply sample by sample, add.",
              steps: [
                { label: "Write h[n]", note: "the measured impulse response" },
                { label: "Flip", note: "h[-k] runs the index backwards" },
                { label: "Slide to n", note: "h[n - k] places the flipped template at n" },
                { label: "Multiply", note: "x[k]·h[n - k] term by term" },
                { label: "Add over k", note: "the single number y[n]" },
                { label: "Repeat for every n", note: "L = N1 + N2 - 1 outputs" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "conv_demo.py - the sum, checked with numpy",
              code: `import numpy as np

x = np.array([1, 2, 3])   # input
h = np.array([1, 1])      # impulse response

# manual convolution: flip, slide, multiply, add
y = np.zeros(len(x) + len(h) - 1, dtype=int)
for n in range(len(y)):
    for k in range(len(x)):
        if 0 <= n - k < len(h):
            y[n] += x[k] * h[n - k]
print(y)                    # [1 3 5 3]
print(np.convolve(x, h))    # [1 3 5 3] - identical`,
            },
            bullets: [
              "LTI systems are completely described by h[n] = T{delta[n]}.",
              "Convolution sum: y[n] = sum of x[k]·h[n - k]; commutative and associative.",
              "Worked example: {1, 2, 3} * {1, 1} = {1, 3, 5, 3}; length 3 + 2 - 1 = 4.",
              "Cascade: h = h1 * h2; parallel: h = h1 + h2.",
              "Each sample of x paints a length-N2 smear; overlaps add - that is the output.",
              "Unit II and III both just re-implement this sum faster (polynomials, then FFT).",
            ],
            callout: {
              type: "tip",
              title: "The length check",
              body: "After any hand convolution, verify the output length equals N1 + N2 - 1. In the {1,2,3}*{1,1} example that is 4 samples: y[0] = 1, y[1] = 3, y[2] = 5, y[3] = 3. Losing a tail sample is the most common convolution slip in RGPV papers.",
            },
            examQuestions: [
              {
                q: "Prove that the output of an LTI system is the convolution of the input with the impulse response, and compute y[n] for x[n] = {1, 2, 3} and h[n] = {1, 1} using the convolution sum.",
                marks: 14,
                outline: [
                  "Delta expansion: x[n] = sum of x[k]·delta[n - k]",
                  "Linearity: response is sum of x[k]·T{delta[n - k]}",
                  "Shift-invariance: T{delta[n - k]} = h[n - k]",
                  "Therefore y[n] = sum of x[k]·h[n - k] - the convolution sum",
                  "Numerical: y[0] = 1, y[1] = 1 + 2 = 3, y[2] = 2 + 3 = 5, y[3] = 3",
                  "Length check: 3 + 2 - 1 = 4 samples",
                  "Interpretation: each sample paints a two-sample smear; smears add",
                ],
              },
              {
                q: "Two LTI systems with impulse responses h1[n] = {1, 1} and h2[n] = {1, 2, 1} are connected in cascade. Find the overall impulse response and state the length of the result.",
                marks: 7,
                outline: [
                  "Cascade: h[n] = h1[n] * h2[n]",
                  "h = {1, 1} * {1, 2, 1}: y[0] = 1, y[1] = 3, y[2] = 3, y[3] = 1",
                  "So h[n] = {1, 3, 3, 1}",
                  "Length: 2 + 3 - 1 = 4 samples",
                  "Associativity confirms the order of connection does not matter",
                ],
              },
              {
                q: "State the commutativity of convolution and explain its practical meaning for 'input through filter'.",
                marks: 7,
                outline: [
                  "x[n] * h[n] = h[n] * x[n] - reindex k -> n - k",
                  "Input and impulse response play symmetric roles in the sum",
                  "Practically: filtering a signal equals convolving its impulse response with the signal",
                  "Also enables associative cascade analysis: h = h1 * h2 computed in either order",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Discrete-time systems described by difference equations",
            body: [
              "A linear constant-coefficient difference equation (LCCDE) is the computational recipe of a recursive system: y[n] = - sum of a[k]·y[n - k] for k = 1..N plus sum of b[k]·x[n - k] for k = 0..M. Past outputs feed back into the computation of the present output - that is what 'recursive' means - while a non-recursive system computes y[n] from inputs alone. The equation is a program: N feedback coefficients a[k], M + 1 feedforward coefficients b[k], and an update order (compute new output, shift the registers). Every IIR filter of Unit V is written in exactly this form.",
              "The canonical example is the first-order accumulator-filter hybrid y[n] = a·y[n - 1] + x[n], the discrete cousin of the RC low-pass. With a = 0.9 and an impulse input, the response is h[n] = (0.9)^n·u[n]: each sample keeps 90% of the previous one and adds nothing new - an exponentially decaying echo. Its frequency behaviour, previewed here and proved in 1.7, passes low frequencies and rejects high ones: at w = 0 the gain is 1/(1 - 0.9) = 10; at w = pi the gain is 1/(1 + 0.9) = 0.526. The single coefficient a sets the time constant (roughly 1/(1 - a) = 10 samples) and the bandwidth together - the exam's favourite way to ask 'what does this equation do?'",
              "The moving average y[n] = (1/3)(x[n] + x[n - 1] + x[n - 2]) is the non-recursive counterpart: no feedback, finite memory, impulse response {1/3, 1/3, 1/3} that simply ends. The contrast is structural. Recursive equations can produce infinitely long responses from finitely many coefficients - enormous efficiency, with the price that the feedback loop can run away (instability) and that the output depends on initial conditions y[-1], y[-2], .... Non-recursive equations are always stable and forget the past after M samples, but need many coefficients for a sharp frequency response. Unit V's IIR-versus-FIR tradeoff is exactly this contrast restated in the frequency domain.",
              "Initial conditions matter and the exam knows it. The same equation y[n] = 0.9·y[n - 1] + x[n] gives two different outputs for the same input if y[-1] differs: with y[-1] = 0 (the relaxed system) the step response starts at 1 and rises to 10; with y[-1] = 5 the response starts at 5.5 and converges to the same 10. Section 1.5 formalizes this as zero-input plus zero-state components. In implementation language: the registers must be known before the loop starts, and a practical startup transient is nothing more than the zero-input component decaying away.",
            ],
            keyTerms: [
              { term: "LCCDE", definition: "Linear constant-coefficient difference equation relating y[n], past outputs and past inputs." },
              { term: "Recursive", definition: "Past outputs feed the computation of y[n]; enables infinite impulse responses." },
              { term: "Non-recursive", definition: "y[n] computed from inputs only; impulse response is finite in length." },
              { term: "Relaxed system", definition: "All initial conditions zero; output then depends only on the input." },
              { term: "Initial conditions", definition: "y[-1], y[-2], ... - the stored state that adds a zero-input component." },
            ],
            diagram: {
              kind: "cycle",
              title: "The recursive update loop",
              caption: "One register, one multiplier, one adder - the whole first-order system runs on this wheel.",
              steps: [
                { label: "Read state y[n - 1]", note: "the stored register value" },
                { label: "Scale by a", note: "a = 0.9 keeps 90 percent" },
                { label: "Add input x[n]", note: "the fresh sample" },
                { label: "Store as y[n]", note: "output and next state coincide" },
                { label: "Shift the register", note: "y[n] becomes y[n - 1]" },
                { label: "Next sample", note: "the wheel turns at fs" },
              ],
            },
            bullets: [
              "General LCCDE: y[n] = -sum a[k]y[n - k] + sum b[k]x[n - k].",
              "Recursive systems can have infinite impulse responses; non-recursive ones cannot.",
              "y[n] = 0.9y[n - 1] + x[n]: gain 10 at w = 0, 0.526 at w = pi, time constant ~10 samples.",
              "Moving average is the non-recursive twin: h[n] = {1/3, 1/3, 1/3}, finite memory.",
              "Different initial conditions give different outputs from the same equation and input.",
              "Efficiency of recursion costs stability risk and startup transients.",
            ],
            callout: {
              type: "warning",
              title: "A difference equation alone does not define a system",
              body: "The equation y[n] = 0.9y[n - 1] + x[n] plus initial conditions y[-1], y[-2], ... together define the system. Two papers differ only in initial conditions and produce different answers - always state 'assuming the system is relaxed (y[-1] = 0)' before solving. Omitting that assumption forfeits the assumption mark.",
            },
            table: {
              caption: "Recursive versus non-recursive descriptions.",
              headers: ["Aspect", "Recursive (feedback)", "Non-recursive (feedforward only)"],
              rows: [
                ["General form", "y[n] = -sum a[k]y[n - k] + sum b[k]x[n - k]", "y[n] = sum b[k]x[n - k]"],
                ["Impulse response", "potentially infinite length (IIR)", "finite length (FIR)"],
                ["Stability", "must be checked; feedback can diverge", "guaranteed (finite sum of bounded terms)"],
                ["Efficiency", "very few coefficients for sharp responses", "many coefficients for the same response"],
                ["Initial conditions", "required to define the output", "irrelevant"],
              ],
            },
            examQuestions: [
              {
                q: "What is a linear constant-coefficient difference equation? Distinguish recursive from non-recursive systems with one example of each, and discuss the role of initial conditions.",
                marks: 14,
                outline: [
                  "General LCCDE with feedback terms a[k]y[n - k] and feedforward terms b[k]x[n - k]",
                  "Recursive: y[n] = 0.9y[n - 1] + x[n]; h[n] = (0.9)^n·u[n] - infinite response",
                  "Non-recursive: y[n] = (x[n] + x[n - 1] + x[n - 2])/3; h[n] = {1/3, 1/3, 1/3}",
                  "Recursive systems risk instability; non-recursive are always stable",
                  "Initial conditions y[-1] add a zero-input component to the output",
                  "Relaxed system assumption: y[-1] = 0 makes output depend on input alone",
                  "Frequency gains: 10 at w = 0 versus 0.526 at w = pi for the recursive example",
                ],
              },
              {
                q: "A system is described by y[n] = 0.9y[n - 1] + x[n] with x[n] = u[n] and y[-1] = 0. Compute y[0], y[1] and y[2], and state the value y[n] approaches.",
                marks: 7,
                outline: [
                  "y[0] = 0.9·0 + 1 = 1",
                  "y[1] = 0.9·1 + 1 = 1.9",
                  "y[2] = 0.9·1.9 + 1 = 2.71",
                  "Steady state: y(inf) = 1/(1 - 0.9) = 10 (final-value check)",
                  "The response is 10·(1 - (0.9)^(n+1)) - a charging curve",
                ],
              },
              {
                q: "Show that the moving-average system y[n] = (1/3)(x[n] + x[n - 1] + x[n - 2]) has a finite impulse response and find it.",
                marks: 7,
                outline: [
                  "Set x[n] = delta[n]: h[n] = (delta[n] + delta[n - 1] + delta[n - 2])/3",
                  "h[n] = {1/3, 1/3, 1/3} for n = 0, 1, 2; zero elsewhere",
                  "Length 3 = memory of two past samples",
                  "No feedback term appears, so nothing propagates beyond n = 2",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Solution of difference equations",
            body: [
              "The complete solution of an LCCDE is the sum of two parts, and naming them earns the first marks: the zero-input response y_zi[n] (what the stored initial conditions do with no input) and the zero-state response y_zs[n] (what the input does with a relaxed system). Linearity guarantees the split: superpose 'no input' and 'no initial energy'. Each part is itself found as homogeneous plus particular. The homogeneous solution solves the equation with the right side zeroed: assume y_h[n] = lambda^n, which turns the equation into the characteristic polynomial sum a[k]·lambda^(N - k) = 0. Its roots lambda_i - the natural modes - give y_h[n] = sum of C_i·lambda_i^n (with the familiar n·lambda^n repetitions for double roots).",
              "The particular solution matches the input's form: for a step input try a constant y_p = A, for a sinusoid try a sinusoid of the same frequency, for an exponential try B·z^n. Then the constants C_i are fixed by the initial conditions - but only after adding the particular part, because the ICs constrain the total, not the homogeneous piece alone. Skipping that ordering is the classic slip that examiners build traps around.",
              "A complete worked example: solve y[n] - 0.5·y[n - 1] = x[n] with x[n] = u[n] and the system relaxed (y[-1] = 0). Characteristic equation: 1 - 0.5·lambda^-1 = 0, so lambda = 0.5 and y_h[n] = C·(0.5)^n. For the particular solution try y_p = A: A - 0.5A = 1 gives A = 2. Total: y[n] = C·(0.5)^n + 2. Apply the recursion at n = 0: y[0] = 0.5·y[-1] + 1 = 1, so C·1 + 2 = 1 and C = -1. Therefore y[n] = 2 - (0.5)^n for n >= 0. Verify iteratively: y[0] = 1, y[1] = 0.5·1 + 1 = 1.5, y[2] = 1.75 - all matching 2 - (0.5)^n. The transient (0.5)^n dies with a time constant of 2 samples and the steady state settles at 2.",
              "The same equation with an initial condition shows the split cleanly. Let y[-1] = 2 and x[n] = 0: then y_zi[n] = 2·(0.5)^(n+1) (the stored energy decaying) and y_zs[n] = 0. Adding the input case back shows total = y_zi + y_zs - exactly the decomposition the theory promised. For the exam, the routine is fixed: characteristic roots, particular guess, total form, apply ICs to the total, verify the first two samples iteratively. That final verification costs thirty seconds and catches every sign error; examiners award the method marks even when the constant goes wrong, but only if the method is visible.",
            ],
            keyTerms: [
              { term: "Zero-input response", definition: "Output caused by initial conditions alone, with x[n] = 0." },
              { term: "Zero-state response", definition: "Output caused by the input alone, with all initial conditions zero." },
              { term: "Natural modes", definition: "The lambda_i^n terms from the characteristic equation roots." },
              { term: "Particular solution", definition: "A guess shaped like the input: constant for a step, sinusoid for a sinusoid." },
              { term: "Transient", definition: "The decaying part of the response; steady state is what remains as n grows." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Solving an LCCDE in five moves",
              caption: "Characteristic roots, particular guess, total form, initial conditions, iterative check.",
              stages: [
                { label: "Characteristic equation", note: "sum a[k]·lambda^(N-k) = 0 -> roots lambda_i" },
                { label: "Homogeneous part", note: "y_h[n] = sum C_i·lambda_i^n" },
                { label: "Particular part", note: "guess shaped like the input; solve for its constant" },
                { label: "Total + ICs", note: "apply y[-1], y[-2] to the total, not to y_h alone" },
                { label: "Iterative check", note: "recompute y[0], y[1] directly from the equation" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "lccde_check.py - closed form versus iteration",
              code: `# y[n] - 0.5*y[n-1] = u[n], relaxed: closed form 2 - (0.5)**n
N = 6
y = [0.0] * N
for n in range(N):
    y[n] = 0.5 * (y[n - 1] if n > 0 else 0) + 1   # recursion

closed = [2 - 0.5**n for n in range(N)]
print(y)       # [1.0, 1.5, 1.75, 1.875, 1.9375, 1.96875]
print(closed)  # identical - the closed form is verified`,
            },
            bullets: [
              "Complete solution = zero-input + zero-state; linearity justifies the split.",
              "Homogeneous: assume lambda^n; roots of the characteristic polynomial are the modes.",
              "Particular: constant for a step, same-frequency sinusoid for a sinusoid, B·z^n for an exponential.",
              "Apply initial conditions to the TOTAL solution - the classic ordering slip.",
              "Worked result: y[n] - 0.5y[n - 1] = u[n] relaxed gives y[n] = 2 - (0.5)^n.",
              "Verify the first two samples iteratively; the check catches sign errors in C.",
            ],
            callout: {
              type: "exam",
              title: "The two questions examiners ask",
              body: "Either 'find the complete solution' (all five moves above, marks on each move) or 'find the zero-input and zero-state components separately' (solve twice: once with x = 0, once relaxed, then add). Read the question for the word 'components' - answering with only the total forfeits half the marks.",
            },
            examQuestions: [
              {
                q: "Solve y[n] - 0.5·y[n - 1] = u[n] for a relaxed system. Give the homogeneous and particular parts, the constants, and verify your answer for n = 0 and n = 1.",
                marks: 14,
                outline: [
                  "Characteristic equation: lambda = 0.5; y_h[n] = C·(0.5)^n",
                  "Particular guess y_p = A: A - 0.5A = 1 -> A = 2",
                  "Total: y[n] = C·(0.5)^n + 2",
                  "y[0] = 0.5·0 + 1 = 1 -> C = -1",
                  "Closed form: y[n] = 2 - (0.5)^n, n >= 0",
                  "Check: y[1] = 0.5·1 + 1 = 1.5 matches 2 - 0.5",
                  "Steady state 2, transient (0.5)^n decays with time constant 2 samples",
                ],
              },
              {
                q: "For the system y[n] = 0.9·y[n - 1] + x[n] with y[-1] = 4 and x[n] = 0, find the zero-input response and state its physical meaning.",
                marks: 7,
                outline: [
                  "With x = 0 the equation is homogeneous: y_zi[n] = C·(0.9)^n",
                  "Anchor with y[-1] = 4: C·(0.9)^(-1) = 4 -> C = 3.6",
                  "y_zi[n] = 3.6·(0.9)^n for n >= 0 (or 4·(0.9)^(n+1) equivalently)",
                  "Meaning: stored register energy decays 10 percent per sample",
                  "At n = 0 the output is 3.6, decaying toward 0 - no input needed",
                ],
              },
              {
                q: "The characteristic polynomial of a second-order system has a double root lambda = 0.8. Write the form of the homogeneous solution and explain why the extra n·(0.8)^n term is needed.",
                marks: 7,
                outline: [
                  "y_h[n] = (C1 + C2·n)·(0.8)^n",
                  "A repeated root makes the simple solution linearly dependent",
                  "n·lambda^n is the independent second solution for multiplicity 2",
                  "Same pattern as repeated roots in continuous-time differential equations",
                  "Three identical roots would need (C1 + C2 n + C3 n^2)·lambda^n",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Implementation of discrete-time systems",
            body: [
              "A difference equation is a specification; an implementation structure is the wiring diagram of adders, multipliers and delay registers that computes it. Direct form I implements the LCCDE literally: a chain of M delays on the input feeding the b[k] multipliers, a chain of N delays on the output feeding the a[k] multipliers, and one adder collecting all products. A second-order section in direct form I needs four delay registers - two for the input history, two for the output history. It is the textbook translation of the equation, and the starting point of every structure question.",
              "Direct form II (the canonical form) merges the two delay chains, because the input-side chain and the output-side chain of a second-order section store overlapping information. The result needs only two delays for the same second-order transfer function - half the memory. The saved state variables are called w[n] in the textbook derivation: compute w[n] = x[n] - a1·w[n - 1] - a2·w[n - 2], then y[n] = b0·w[n] + b1·w[n - 1] + b2·w[n - 2]. The transposed direct form II reverses the signal flow through the same diagram and produces the same transfer function with the registers repositioned - it is preferred in fixed-point hardware because the adders sit between registers, limiting word growth.",
              "For higher orders, the honest engineering answer is never one big direct form. Cascade structure: factor H(z) into second-order sections (biquads) in series - a fourth-order filter becomes two biquads. Parallel structure: expand H(z) in partial fractions into biquads feeding a common adder. The reason is coefficient sensitivity: in a long direct form, a 1 percent error in one coefficient perturbs the entire pole polynomial and can move a pole near the unit circle; in a cascade, each coefficient perturbs only its own biquad's pair of poles. Practical DSP chips and MATLAB's filter design tools output cascaded biquads for exactly this reason - a 2-3 sentence justification that earns the marks whenever 'compare structures' is asked.",
              "The exam typically asks for the structure diagram of a given second-order system with the multiplier values filled in, plus the direct-I versus direct-II delay count. Draw boxes labelled 'z^-1' for delays, circles or triangles for multipliers, and nodes for adders; label every branch with its coefficient. A worked favourite: y[n] = 0.8·y[n - 1] - 0.15·y[n - 2] + x[n] + 2·x[n - 1] has a1 = -0.8 (sign convention: H(z) denominator 1 + 0.8z^-1... careful) - write H(z) first, match coefficients to the standard form, and only then draw; drawing from the raw equation is where sign slips are born.",
            ],
            keyTerms: [
              { term: "Direct form I", definition: "Literal implementation with separate input and output delay chains; 2N delays for order N." },
              { term: "Direct form II", definition: "Canonical form sharing one delay chain; N delays for order N - minimum memory." },
              { term: "Cascade structure", definition: "Series of second-order sections (biquads); best coefficient sensitivity." },
              { term: "Parallel structure", definition: "Partial-fraction biquads summed; independent sections, easy fixed-point scaling." },
              { term: "Transposed form", definition: "Signal-flow reversal of a structure; same transfer function, adders between registers." },
            ],
            diagram: {
              kind: "layers",
              title: "Structure choices, stacked by purpose",
              caption: "From the literal translation of the equation to the factory-standard cascade of biquads.",
              layers: [
                { label: "Direct form I", note: "literal LCCDE wiring; 2N delays, simplest to derive" },
                { label: "Direct form II (canonical)", note: "shared delays, N total - minimum memory" },
                { label: "Transposed direct form II", note: "same H(z), adders between registers - fixed-point friendly" },
                { label: "Cascade of biquads", note: "order N as N/2 second-order sections; local sensitivity" },
                { label: "Parallel biquads", note: "partial fractions summed; independent sections" },
              ],
            },
            table: {
              caption: "Second-order structures at a glance.",
              headers: ["Structure", "Delays (order 2)", "Strength", "Weakness"],
              rows: [
                ["Direct form I", "4", "directly mirrors the equation", "twice the memory"],
                ["Direct form II", "2", "minimum delay registers", "sensitive at high orders"],
                ["Transposed II", "2", "adder word growth contained", "less intuitive wiring"],
                ["Cascade", "2 per section", "coefficient errors stay local", "section ordering matters"],
                ["Parallel", "2 per section", "independent sections, simple scaling", "zeros less directly controlled"],
              ],
            },
            bullets: [
              "Direct form I: two delay chains - input history and output history.",
              "Direct form II: one shared chain; order-N system needs only N delays.",
              "Transposed II: reverse every branch of direct II; identical H(z).",
              "Cascade and parallel decompose H(z) into second-order sections.",
              "Coefficient sensitivity, not delay count, decides high-order practice.",
              "Real DSP implementations ship cascaded biquads with quantized coefficients.",
            ],
            callout: {
              type: "tip",
              title: "Write H(z) before drawing",
              body: "Convert the difference equation to H(z) = (b0 + b1 z^-1 + b2 z^-2)/(1 + a1 z^-1 + a2 z^-2) first, then read a1, a2, b0, b1, b2 off the standard form and drop them into the structure diagram. Drawing directly from the raw equation mixes sign conventions - the most common error in structure diagrams.",
            },
            examQuestions: [
              {
                q: "Draw the direct form I and direct form II structures for H(z) = (1 + 2z^-1)/(1 - 0.8z^-1 + 0.15z^-2), label all coefficients, and state the delay count of each.",
                marks: 14,
                outline: [
                  "Standard form: a1 = -0.8, a2 = 0.15, b0 = 1, b1 = 2, b2 = 0",
                  "Direct I: input chain of 2 delays + output chain of 2 delays = 4 total",
                  "Direct I branches: x, x[n-1] through b0, b1; y[n-1], y[n-2] through 0.8, -0.15 into the adder",
                  "Direct II: intermediate w[n] = x[n] + 0.8w[n-1] - 0.15w[n-2]",
                  "y[n] = w[n] + 2w[n-1] (b2 = 0 drops the third multiplier)",
                  "Direct II delay count: 2 - the memory-saving argument",
                  "Both realize the same transfer function",
                ],
              },
              {
                q: "Why do practical high-order IIR filters use a cascade of second-order sections rather than one direct form? Explain coefficient sensitivity with a short argument.",
                marks: 7,
                outline: [
                  "Direct form: every coefficient enters one long pole polynomial",
                  "Small coefficient quantization perturbs ALL poles at once",
                  "A pole near the unit circle can cross it - stability lost",
                  "Cascade: each biquad owns two poles; errors stay local",
                  "Ordering and pairing of sections minimizes worst-case sensitivity",
                ],
              },
              {
                q: "What is the transposed direct form II and why is it preferred in fixed-point hardware?",
                marks: 7,
                outline: [
                  "Reverse every branch and swap nodes/adders of direct form II",
                  "Same transfer function by flow-graph reversal",
                  "Registers sit immediately after adders",
                  "Each adder's word growth is captured by one register",
                  "Limits overflow and rounding accumulation in fixed point",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Stability, causality and the frequency-domain representation",
            body: [
              "Two theorems close Unit I and they are stated in one line each. BIBO stability: an LTI system is stable if and only if its impulse response is absolutely summable, sum of |h[n]| < infinity. Causality: an LTI system is causal if and only if h[n] = 0 for all n < 0. The accumulator fails the first (h[n] = u[n], sum diverges); the moving average passes both; the one-sample advance h[n] = delta[n + 1] fails causality because it looks one sample into the future. In the z-domain language of Unit II these become ROC statements - the ROC includes the unit circle for stability and extends outward from the origin for causality - but the time-domain forms are what Unit I demands.",
              "The frequency-domain representation of a sequence is the discrete-time Fourier transform: X(e^jw) = sum over n of x[n]·e^(-jwn). It is always periodic in w with period 2pi - because e^(-j(w + 2pi)n) = e^(-jwn) - and for absolutely summable x[n] it converges absolutely. For the system version, H(e^jw) = DTFT of h[n] is the frequency response: |H(e^jw)| is the gain at each frequency and angle H(e^jw) the phase shift. The decisive property: convolution in time becomes multiplication in frequency, y[n] = x[n] * h[n] if and only if Y(e^jw) = X(e^jw)·H(e^jw). Filtering is therefore just spectral shaping - multiply the input spectrum by the response.",
              "A worked example fixes all three ideas at once: the system y[n] = 0.5·y[n - 1] + x[n] has h[n] = (0.5)^n·u[n]. Stability: sum of (0.5)^n = 2 < infinity - stable. Causality: h[n] = 0 for n < 0 - causal. Frequency response: H(e^jw) = 1/(1 - 0.5·e^(-jw)) (derived formally in Unit II). Magnitude at w = 0: 1/(1 - 0.5) = 2. At w = pi: 1/(1 + 0.5) = 0.667. The gain falls smoothly from 2 to 0.667 across the band - a low-pass characteristic with DC gain 2. Feed x[n] = cos(0.25pi·n) through it and the output is a cosine of the same frequency, amplitude 2/|1 - 0.5e^(-j0.25pi)| = 2/0.765 = 2.61, phase-shifted by the response angle - the sinusoidal steady-state theorem in action.",
              "The DTFT of the basic sequences also belongs in this section's toolkit: delta[n] transforms to 1 (flat spectrum); u[n] to pi·delta(w) + 1/(1 - e^(-jw)) terms handled with distributions; a^n·u[n] to 1/(1 - a·e^(-jw)); a real even sequence transforms to a real even function of w. Symmetry rules earn quick marks: for real x[n], X(e^jw) is conjugate-symmetric (magnitude even, phase odd). The exam pairs these with the convolution property - 'find the output spectrum of X through H' - and with stability checks of the sum-of-|h| type. One habit seals this unit: sketch |H(e^jw)| from w = 0 to pi only, because for real systems the 0-to-2pi picture is mirror-symmetric about pi.",
            ],
            keyTerms: [
              { term: "BIBO stability criterion", definition: "LTI system is stable iff sum |h[n]| < infinity." },
              { term: "Causality criterion", definition: "LTI system is causal iff h[n] = 0 for n < 0." },
              { term: "DTFT", definition: "X(e^jw) = sum x[n]e^(-jwn); periodic in w with period 2pi." },
              { term: "Frequency response", definition: "H(e^jw) = DTFT of h[n]; gain and phase applied to each frequency." },
              { term: "Convolution-multiplication duality", definition: "x * h in time equals X·H in DTFT frequency." },
            ],
            diagram: {
              kind: "compare",
              title: "The two views of an LTI system",
              caption: "Time domain convolves; frequency domain multiplies. Choose the cheaper view for the question asked.",
              left: {
                heading: "Time domain",
                items: [
                  "Description: h[n] (impulse response)",
                  "Operation: convolution sum x * h",
                  "Stability: sum |h[n]| < infinity",
                  "Causality: h[n] = 0 for n < 0",
                  "Cost: O(N1 x N2) multiply-adds",
                ],
              },
              right: {
                heading: "Frequency domain (DTFT)",
                items: [
                  "Description: H(e^jw) (gain + phase vs w)",
                  "Operation: pointwise product Y = X·H",
                  "Stability: H(e^jw) exists and is finite for every w",
                  "Filtering = spectral shaping",
                  "Cost: transforms + O(N) multiply - cheap via FFT (Unit IV)",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "dtft_mag.py - magnitude of H(e^jw) for a = 0.5",
              code: `import numpy as np

w = np.linspace(0, np.pi, 512)          # 0 .. pi is enough for real h
H = 1 / (1 - 0.5 * np.exp(-1j * w))     # DTFT of (0.5)^n u[n]

print(abs(H[0]))       # 2.0     - DC gain
print(abs(H[-1]))      # 0.6667  - gain at w = pi
# low-pass shape: falls smoothly from 2 to 0.667 across the band`,
            },
            bullets: [
              "BIBO stable iff sum |h[n]| < infinity; causal iff h[n] = 0 for n < 0.",
              "Accumulator h[n] = u[n]: causal but unstable; advance delta[n + 1]: stable but acausal.",
              "DTFT X(e^jw) = sum x[n]e^(-jwn), periodic in w with period 2pi.",
              "H(e^jw) = DTFT of h[n]: |H| is gain, angle is phase shift at each w.",
              "Convolution in time becomes multiplication in DTFT frequency.",
              "Worked system 0.5y[n-1] + x[n]: stable, causal, DC gain 2, gain 0.667 at pi.",
              "For real x[n]: magnitude even in w, phase odd - sketch 0..pi only.",
            ],
            callout: {
              type: "exam",
              title: "State the criterion, then apply it",
              body: "Stability answers earn marks in exactly two lines: the criterion (sum |h[n]| < infinity) and its evaluation (sum (0.5)^n = 2, stable). A 'it looks stable' verdict without the geometric sum scores zero. Same discipline for causality: quote h[n] = 0 for n < 0, then point at the sequence.",
            },
            examQuestions: [
              {
                q: "State the time-domain criteria for BIBO stability and causality of LTI systems. Test the system y[n] = 0.5y[n - 1] + x[n] against both, and compute its frequency response magnitude at w = 0 and w = pi.",
                marks: 14,
                outline: [
                  "Stability criterion: sum |h[n]| < infinity; causality: h[n] = 0 for n < 0",
                  "Impulse response: h[n] = (0.5)^n·u[n] by iteration",
                  "Stability: geometric sum = 1/(1 - 0.5) = 2 < infinity - stable",
                  "Causality: no negative-index terms - causal",
                  "H(e^jw) = 1/(1 - 0.5e^(-jw))",
                  "At w = 0: |H| = 2; at w = pi: |H| = 1/1.5 = 0.667",
                  "Interpretation: low-pass characteristic with DC gain 2",
                ],
              },
              {
                q: "Show that convolution of time-domain signals corresponds to multiplication of their DTFTs, and explain why this makes frequency-domain filtering attractive.",
                marks: 7,
                outline: [
                  "Y(e^jw) = sum y[n]e^(-jwn) with y[n] = sum x[k]h[n - k]",
                  "Substitute and reindex: sum h[m]e^(-jwm) · sum x[k]e^(-jwk)",
                  "So Y(e^jw) = X(e^jw)·H(e^jw)",
                  "Filtering becomes spectral multiplication: shape X by H",
                  "With the FFT (Unit IV) the whole chain is O(N log N), beating direct convolution",
                ],
              },
              {
                q: "The input cos(0.25pi·n) is applied to the system with H(e^jw) = 1/(1 - 0.5e^(-jw)). Describe the output using the sinusoidal steady-state property.",
                marks: 7,
                outline: [
                  "A sinusoid input yields a sinusoid output of the same w",
                  "Amplitude multiplied by |H| at w = 0.25pi",
                  "|1 - 0.5e^(-j0.25pi)| = sqrt(1 + 0.25 - cos(0.25pi)) = sqrt(1.25 - 0.707) = 0.765",
                  "Output amplitude = 2/0.765 = 2.61",
                  "Phase shifted by angle H(e^j0.25pi) = atan2(0.5·sin(0.25pi), 1 - 0.5cos(0.25pi))",
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
      title: "The z-Transform",
      summary:
        "Unit II generalizes the DTFT into the z-transform: the direct transform and the region of convergence, the properties that make z-domain algebra efficient, rational transforms with their poles and zeros, the three inversion techniques, analysis of LTI systems through the transfer function, and the structural views - block diagrams, signal flow graphs and matrix (state-space) representation.",
      chapter: {
        number: "02",
        title: "The z-Domain",
        intro:
          "Unit II covers the direct z-transform, properties of the z-transform, rational z-transforms and pole-zero analysis, inversion by partial fractions, long division and residues, analysis of LTI systems in the z-domain, block diagram and signal flow graph representation of digital networks, and matrix representation.",
        inOneBreath:
          "X(z) = sum of x[n]z^-n exists only on a region of convergence, and the ROC - bounded by poles, containing the unit circle for stability - is half the answer. Properties turn shifts into z^-n0 factors and convolutions into products. Rational H(z) = B(z)/A(z) is described by its poles and zeros; causal stability means every pole strictly inside the unit circle. Inversion uses partial fractions, long division or residues; the transfer function, block diagrams, signal flow graphs and the state-space matrix (zI - A) view all describe the same network.",
        sections: [
          {
            number: "2.1",
            title: "The direct z-transform and the region of convergence",
            body: [
              "The z-transform of a sequence x[n] is X(z) = sum over n of x[n]·z^-n, where z is a complex variable; writing z = r·e^jw shows the unit circle r = 1 as the DTFT recovered (X(e^jw) = X(z) on r = 1). The transform is a power series in z^-1, and like every power series it converges only on a set of z values - the region of convergence (ROC). The ROC is not decoration: it is part of the answer, because the same algebraic expression corresponds to different sequences for different ROCs. Examiners deduct a full mark for a missing ROC; always write it.",
              "The canonical demonstration is the pair of sequences that share one formula. The causal exponential x[n] = a^n·u[n] gives X(z) = 1/(1 - a·z^-1) with ROC |z| > |a| - a geometric series in a/z that converges outside the radius a. The anti-causal exponential x[n] = -a^n·u[-n - 1] gives exactly X(z) = 1/(1 - a·z^-1) but with ROC |z| < |a| - the same series now summed over negative n and converging inside. With a = 0.5 the first sequence starts at n = 0 and decays; the second lives on n <= -1 and grows backward in time. One formula, two signals, and only the ROC tells them apart: this example is the single most-asked question of Unit II.",
              "Three structural facts about ROCs cover every exam situation. First, the ROC contains no poles (a power series diverges at its poles), so it is always an annulus bounded by poles: for a causal system it extends outward from the outermost pole; for an anti-causal one inward from the innermost; for two-sided sequences it is a ring between two poles. Second, a finite-length sequence has ROC the whole z-plane except possibly 0 and infinity - no poles means almost no restriction. Third, the ROC determines causality and stability together: a causal, stable system has an ROC that extends outward from the outermost pole AND contains the unit circle - which forces every pole strictly inside |z| = 1. That sentence is the stability criterion of the z-domain, worth a full mark whenever any pole question appears.",
              "The basic transform pairs are the working vocabulary: delta[n] <-> 1 (ROC all z); u[n] <-> 1/(1 - z^-1), |z| > 1; a^n·u[n] <-> 1/(1 - a·z^-1), |z| > |a|; n·a^n·u[n] <-> a·z^-1/(1 - a·z^-1)^2; cos(w0·n)·u[n] <-> (1 - cos(w0)·z^-1)/(1 - 2cos(w0)·z^-1 + z^-2). Deriving each pair once - by expanding the geometric series - is the exercise that makes the table permanent, and the table is what makes the rest of the unit fast.",
            ],
            keyTerms: [
              { term: "z-transform", definition: "X(z) = sum x[n]z^-n; a Laurent series in z^-1 that needs a region of convergence." },
              { term: "ROC", definition: "The set of z where the series converges; annular, pole-free, and part of the answer." },
              { term: "Unit circle", definition: "|z| = 1; X(z) on it is the DTFT X(e^jw)." },
              { term: "Causal ROC", definition: "Extends outward from the outermost pole: |z| > |p|max." },
              { term: "Stable + causal", definition: "ROC contains the unit circle and extends outward: all poles strictly inside." },
            ],
            table: {
              caption: "Basic z-transform pairs with their ROCs.",
              headers: ["Sequence", "X(z)", "ROC"],
              rows: [
                ["delta[n]", "1", "all z"],
                ["u[n]", "1/(1 - z^-1)", "|z| > 1"],
                ["a^n·u[n]", "1/(1 - a·z^-1)", "|z| > |a|"],
                ["-a^n·u[-n - 1]", "1/(1 - a·z^-1)", "|z| < |a|"],
                ["n·a^n·u[n]", "a·z^-1/(1 - a·z^-1)^2", "|z| > |a|"],
                ["cos(w0·n)·u[n]", "(1 - cos(w0)z^-1)/(1 - 2cos(w0)z^-1 + z^-2)", "|z| > 1"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "One formula, two sequences",
              caption: "X(z) = 1/(1 - a·z^-1) is a pair of different signals; the ROC is the identity card.",
              left: {
                heading: "Causal: a^n·u[n]",
                items: [
                  "Exists for n >= 0, decays when |a| < 1",
                  "ROC: |z| > |a| - outside radius a",
                  "Geometric series in (a/z)",
                  "Contains the unit circle when |a| < 1: stable",
                ],
              },
              right: {
                heading: "Anti-causal: -a^n·u[-n - 1]",
                items: [
                  "Exists for n <= -1, grows toward the past",
                  "ROC: |z| < |a| - inside radius a",
                  "Geometric series in (z/a)",
                  "Same formula, different signal - ROC decides",
                ],
              },
            },
            bullets: [
              "X(z) = sum x[n]z^-n; a power series that converges only on its ROC.",
              "The ROC never contains poles; it is bounded by them.",
              "Same expression, different ROC, different sequence - always state the ROC.",
              "Finite-length sequences: ROC is the whole plane except possibly 0 and infinity.",
              "Causal + stable iff ROC extends outward and contains |z| = 1: all poles inside.",
              "u[n] <-> 1/(1 - z^-1) with |z| > 1; a^n·u[n] <-> 1/(1 - a·z^-1) with |z| > |a|.",
            ],
            callout: {
              type: "exam",
              title: "The ROC earns a dedicated mark",
              body: "RGPV papers routinely give X(z) and ask for x[n] - the answer is incomplete without the ROC. Write 'ROC: |z| > 0.9 (causal)' as a labelled line under every transform. If the question supplies the ROC (e.g. 0.5 < |z| < 2), use it to pick the one-sided inverse for each pole; never default to causal silently.",
            },
            examQuestions: [
              {
                q: "Define the z-transform and the region of convergence. Show that the causal sequence a^n·u[n] and the anti-causal sequence -a^n·u[-n - 1] share the same z-transform but different ROCs, and state the significance of the ROC for uniqueness.",
                marks: 14,
                outline: [
                  "X(z) = sum x[n]z^-n; ROC = set of z where the series converges",
                  "Causal case: geometric series in a/z converges for |z| > |a|",
                  "Anti-causal case: geometric series in z/a converges for |z| < |a|",
                  "Both give X(z) = 1/(1 - a·z^-1)",
                  "Same X(z), different sequences - X(z) alone is not unique",
                  "X(z) + ROC together determine a unique sequence",
                  "Unit circle in the ROC means the DTFT exists",
                ],
              },
              {
                q: "Find the z-transform of x[n] = (0.5)^n·u[n] + 3·(2)^n·u[-n - 1] and state its ROC.",
                marks: 7,
                outline: [
                  "First term: 1/(1 - 0.5z^-1), ROC |z| > 0.5",
                  "Second term: 3·(2)^n·u[-n-1] = anti-causal -> 3/(1 - 2z^-1)... with ROC |z| < 2",
                  "Sum: X(z) = 1/(1 - 0.5z^-1) + 3/(1 - 2z^-1)",
                  "Linearity ROC: intersection 0.5 < |z| < 2 - an annulus",
                  "Poles at 0.5 and 2 bound the ring; unit circle inside - DTFT exists",
                ],
              },
              {
                q: "State the ROC of a finite-duration sequence and explain why such a sequence can never be unstable.",
                marks: 7,
                outline: [
                  "X(z) is a finite Laurent polynomial in z^-1 and z",
                  "ROC: entire z-plane except possibly z = 0 and z = infinity",
                  "No denominator, no poles away from 0",
                  "h[n] has finite support, so sum |h[n]| is a finite sum - always stable",
                  "Causal finite sequence: ROC excludes only infinity (highest negative power)",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Properties of the z-transform",
            body: [
              "The properties of the z-transform are its working levers, and each one has a one-line use. Linearity: transforms of sums are sums, with ROC the intersection of the individual ROCs - the property that assembles composite signals from table pairs. Time shift: x[n - n0] <-> z^-n0·X(z) with the ROC unchanged; a delay of n0 samples is literally multiplication by z^-n0, which is why registers are labelled z^-1 in structure diagrams and why the delay count of a structure (section 1.6) equals the highest combined power of z^-1. Scaling in the z-domain: a^n·x[n] <-> X(z/a) with the ROC scaled by |a| - moving every pole radius by the factor a.",
              "The convolution property is the engine of Unit II: x[n] * h[n] <-> X(z)·H(z). Convolution - the O(N1·N2) sum of section 1.3 - becomes polynomial multiplication. The time-reversal property x[-n] <-> X(1/z) with ROC 1/(ROC) handles anti-causal pieces. Differentiation in z: n·x[n] <-> -z·dX(z)/dz - the property that generates the n·a^n pair from the a^n pair without any new series. Worked one-liner: from X(z) = 1/(1 - 0.5·z^-1) for (0.5)^n·u[n], differentiation gives the transform of n·(0.5)^n·u[n] as 0.5·z^-1/(1 - 0.5·z^-1)^2 - check it against the pair table of 2.1 and see the two agree.",
              "The initial-value and final-value theorems answer limit questions without inversion, and they are guaranteed short-answer material. For a causal x[n]: x[0] = limit of X(z) as z -> infinity (plug in the highest powers of z^-1). The final-value theorem: if all poles of X(z) are inside the unit circle, lim as n -> infinity of x[n] = limit of (1 - z^-1)·X(z) as z -> 1. The step response of y[n] = 0.9y[n - 1] + x[n] has H(z)·(1/(1 - z^-1)) = ((1 + ... )/...) - for H(z) = 1/(1 - 0.9z^-1), the final value is (1 - z^-1)/((1 - z^-1)(1 - 0.9z^-1)) at z = 1 = 1/(1 - 0.9) = 10 - matching the iterative result of section 1.4 exactly. The theorem's fine print (all poles inside the unit circle) is the part examiners test: a pole outside makes the limit meaningless and quoting the theorem there forfeits the mark.",
              "Strategy for the exam: transform the problem, manipulate polynomials, invert - never grind the defining sums. Shift questions are z^-n0 factors; multiply-by-a^n questions are ROC scalings; convolution questions are products; accumulation (sum of x[k] up to n) is division by (1 - z^-1). Keep the property table - it is the whole section compressed to six lines - and the 7-mark 'state and prove property' questions become two-line exercises: write both defining sums, reindex, done.",
            ],
            keyTerms: [
              { term: "Time shift", definition: "x[n - n0] <-> z^-n0·X(z); delays are powers of z^-1." },
              { term: "Convolution property", definition: "x * h <-> X(z)·H(z); the z-domain turns convolution into multiplication." },
              { term: "z-domain scaling", definition: "a^n·x[n] <-> X(z/a); pole radii scale by |a|." },
              { term: "Differentiation in z", definition: "n·x[n] <-> -z·dX/dz; generates n-weighted pairs." },
              { term: "Final-value theorem", definition: "All poles inside |z| < 1: lim x[n] = lim (1 - z^-1)X(z) at z = 1." },
            ],
            table: {
              caption: "The property table - six levers and their uses.",
              headers: ["Property", "Statement", "Exam use"],
              rows: [
                ["Linearity", "a·x1 + b·x2 <-> a·X1(z) + b·X2(z)", "assemble signals from pairs"],
                ["Time shift", "x[n - n0] <-> z^-n0·X(z)", "delays; structure diagrams"],
                ["Scaling in z", "a^n·x[n] <-> X(z/a)", "pole radii move by |a|"],
                ["Time reversal", "x[-n] <-> X(1/z)", "anti-causal pieces"],
                ["Convolution", "x * h <-> X·H", "cascade systems; filtering"],
                ["Differentiation", "n·x[n] <-> -z·dX/dz", "n·a^n pairs; mean-slope questions"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The z-domain strategy",
              caption: "Transform once, do the hard work in polynomials, invert once.",
              steps: [
                { label: "Recognize the question type", note: "shift? scaling? convolution? accumulation?" },
                { label: "Transform inputs", note: "use the pair table + properties" },
                { label: "Manipulate in z", note: "algebra on polynomials - cheap and exact" },
                { label: "Apply the property needed", note: "e.g. multiply by z^-n0 for the delay" },
                { label: "Invert", note: "partial fractions or table - with the ROC" },
              ],
            },
            bullets: [
              "Delay by n0 samples = multiply by z^-n0; ROC unchanged.",
              "a^n·x[n] scales the whole pole-zero picture radially by |a|.",
              "Convolution in time = multiplication in z: X(z)·H(z).",
              "n·x[n] comes from -z·dX/dz; worked pair: n·(0.5)^n·u[n] <-> 0.5z^-1/(1 - 0.5z^-1)^2.",
              "Initial value (causal): x[0] = lim X(z) as z -> infinity.",
              "Final value valid only when all poles are inside the unit circle.",
              "Accumulation = division by (1 - z^-1); differentiation = multiplication by n.",
            ],
            callout: {
              type: "tip",
              title: "Prove properties by reindexing",
              body: "A 'state and prove' question wants the defining sum written twice. For the shift property: write the transform of x[n - n0], substitute m = n - n0, and watch z^-n0 fall out. Two lines, full marks. Do not paraphrase the property without the sum - the reindexing IS the proof.",
            },
            examQuestions: [
              {
                q: "State and prove the time-shift and convolution properties of the z-transform, and use the convolution property to find the output of the system h[n] = (0.5)^n·u[n] to the input x[n] = u[n] in the z-domain.",
                marks: 14,
                outline: [
                  "Shift proof: X1(z) = sum x[n - n0]z^-n; substitute m = n - n0 -> z^-n0·X(z)",
                  "Convolution proof: Y(z) = sum (sum x[k]h[n - k])z^-n; reindex -> X(z)H(z)",
                  "X(z) = 1/(1 - z^-1), ROC |z| > 1; H(z) = 1/(1 - 0.5z^-1), ROC |z| > 0.5",
                  "Y(z) = 1/((1 - z^-1)(1 - 0.5z^-1)), ROC |z| > 1",
                  "Partial fractions: Y(z) = 2/(1 - z^-1) - 1/(1 - 0.5z^-1)",
                  "Inverse: y[n] = (2 - (0.5)^n)·u[n] - the section 1.5 result recovered",
                  "ROC of the product: intersection of the two ROCs",
                ],
              },
              {
                q: "Using the differentiation property, find the z-transform of x[n] = n·(0.5)^n·u[n].",
                marks: 7,
                outline: [
                  "Known pair: (0.5)^n·u[n] <-> 1/(1 - 0.5z^-1)",
                  "Property: n·x[n] <-> -z·dX/dz",
                  "dX/dz = d/dz (1/(1 - 0.5z^-1)) = -0.5z^-2/(1 - 0.5z^-1)^2·(sign care)",
                  "Result: X2(z) = 0.5·z^-1/(1 - 0.5z^-1)^2",
                  "ROC unchanged: |z| > 0.5",
                ],
              },
              {
                q: "For a causal sequence with X(z) = 1/(1 - 0.9z^-1), find x[0] and, stating the conditions, lim n->infinity x[n].",
                marks: 7,
                outline: [
                  "Initial value: x[0] = lim X(z) as z -> infinity = 1",
                  "Check directly: h[0] = 1 for the (0.9)^n sequence",
                  "Final-value conditions: all poles inside the unit circle - pole at 0.9 qualifies",
                  "lim (1 - z^-1)X(z) at z = 1 = 1/(1 - 0.9) = 10",
                  "Cross-check: the step response of 1.4 converges to 10",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Rational z-transforms: poles, zeros and the ROC",
            body: [
              "Almost every transform in practice is rational: X(z) = B(z)/A(z), a ratio of polynomials in z^-1 (or z). The roots of B(z) are the zeros - frequencies the transform kills - and the roots of A(z) are the poles - frequencies where the transform blows up. The pole-zero plot on the z-plane is the skeleton of the system: each pole contributes a mode p^n to the response, each zero a notch in the frequency response, and the ROC is the annulus bounded by the pole radii. Factoring A(z) and B(z) - by hand for quadratics, with a machine for higher orders - is the first step of any z-domain analysis.",
              "A worked example ties the three objects together. Let H(z) = (1 - 0.36·z^-2)/((1 - 0.9·z^-1)(1 + 0.6·z^-1)). The numerator 1 - 0.36z^-2 factors as (1 - 0.6z^-1)(1 + 0.6z^-1), so zeros sit at z = 0.6 and z = -0.6. The denominator gives poles at z = 0.9 and z = -0.6. The zero at -0.6 cancels the pole at -0.6 - a removable singularity that shortens the system - leaving one zero (0.6) and one pole (0.9). For a causal realization the ROC is |z| > 0.9; the unit circle lies outside 0.9, so the DTFT exists and the system is stable: every pole strictly inside |z| = 1.",
              "Pole radius dictates mode decay, and that is the physics to quote. A pole at radius 0.9 contributes a mode (0.9)^n that decays to 1 percent in about 44 samples (0.9^44 = 0.009) - a slow, resonant tail. A pole at 0.5 decays in about 7 samples (0.5^7 = 0.008) - a tight response. A pole at 1.1 grows without bound - unstable. The pole ANGLE sets the oscillation frequency: poles at angle ±w0 ring at w0 per sample. This is why high-Q resonators place poles close to the unit circle at the desired angle, and why the exam's 'sketch the response' questions reduce to reading radii and angles off the pole-zero plot.",
              "Multiple-order poles follow the same logic with polynomial mode factors: a double pole at p contributes both p^n and n·p^n (the repeated-root pattern of section 1.5). Pole-zero cancellation deserves one careful sentence: canceling a factor shortens the system algebraically, but an unstable canceled pole is still forbidden in any realizable implementation - numerical noise re-excites canceled unstable modes, which is why cancellation-based stability 'fixes' are rejected in practical filter design. The exam's standard 7-marker: factor a given rational H(z), plot poles and zeros, state the causal ROC, and decide stability - four parts, one mark each, plus a part for the reasoning sentence.",
            ],
            keyTerms: [
              { term: "Rational transform", definition: "X(z) = B(z)/A(z); roots of B are zeros, roots of A are poles." },
              { term: "Pole-zero plot", definition: "Skeleton on the z-plane: pole radii set decay, angles set oscillation frequency." },
              { term: "Mode p^n", definition: "Each simple pole at p contributes a p^n term to the time response." },
              { term: "Pole-zero cancellation", definition: "Common factor removal that shortens H(z); never used to hide unstable poles." },
              { term: "Resonator", definition: "Poles close to the unit circle at angle ±w0: high gain near w0, long ring." },
            ],
            diagram: {
              kind: "fork",
              title: "Reading a pole's radius",
              caption: "Pole position decides mode behaviour; angle decides the frequency it rings at.",
              start: "Pole at radius r, angle theta",
              branches: [
                { label: "r < 1", outcome: "mode p^n decays - stable contribution", good: true },
                { label: "r = 1", outcome: "mode persists forever - marginally stable at best", good: false },
                { label: "r > 1", outcome: "mode grows - BIBO unstable", good: false },
                { label: "theta = 0 or pi", outcome: "pure exponential ring (DC or Nyquist)", good: true },
                { label: "0 < theta < pi", outcome: "oscillates at w = theta per sample", good: true },
              ],
            },
            bullets: [
              "Rational H(z) = B(z)/A(z): zeros from B, poles from A.",
              "Worked example: zeros at ±0.6, poles at 0.9 and -0.6; the -0.6 pair cancels.",
              "ROC is the annulus between bounding pole radii; causal means outside the outermost.",
              "Stable iff all poles strictly inside the unit circle (for causal systems).",
              "Radius sets decay time: 0.5^7 = 0.008 (fast), 0.9^44 = 0.009 (slow).",
              "Angle sets oscillation: pole at angle ±w0 rings at w0.",
              "Double poles add n·p^n modes, matching repeated roots of section 1.5.",
            ],
            callout: {
              type: "warning",
              title: "Cancellation is not a stability fix",
              body: "Algebraically canceling an unstable pole-zero pair 'stabilizes' the transfer function on paper, but finite-precision hardware cannot cancel exactly - rounding noise re-excites the hidden unstable mode. State this sentence whenever a question offers cancellation: it converts a lost mark into an earned one.",
            },
            codeExample: {
              language: "python",
              caption: "polezero.py - the worked example, factored and checked",
              code: `import numpy as np

# H(z) = (1 - 0.36 z^-2) / ((1 - 0.9 z^-1)(1 + 0.6 z^-1))
b = np.array([1.0, 0.0, -0.36])
a = np.convolve([1.0, -0.9], [1.0, 0.6])   # (1 - 0.9z^-1)(1 + 0.6z^-1)

zeros = np.roots(b)
poles = np.roots(a)
print(zeros)            # [ 0.6 -0.6 ]
print(poles)            # [ 0.9 -0.6 ]
print(np.abs(poles))    # [0.9 0.6] - both inside: stable

# cancellation check: common factor?
common = np.polydiv(b, [1.0, 0.6])         # divide by (1 + 0.6z^-1)
print(np.round(common[0], 6), common[1])   # remainder ~ 0: factor cancels`,
            },
            examQuestions: [
              {
                q: "For H(z) = (1 - 0.36z^-2)/((1 - 0.9z^-1)(1 + 0.6z^-1)): factor the numerator, plot poles and zeros, state the causal ROC, and decide stability with justification.",
                marks: 14,
                outline: [
                  "Numerator: 1 - 0.36z^-2 = (1 - 0.6z^-1)(1 + 0.6z^-1) -> zeros at 0.6 and -0.6",
                  "Denominator: poles at 0.9 and -0.6",
                  "The factor (1 + 0.6z^-1) cancels: one pole (0.9), one zero (0.6) remain",
                  "Causal ROC: |z| > 0.9",
                  "Stability: pole 0.9 strictly inside the unit circle -> stable",
                  "Mode: (0.9)^n decays slowly - about 44 samples to 1 percent",
                  "Frequency response exists: unit circle in the ROC",
                ],
              },
              {
                q: "Explain how pole positions determine the time-domain behaviour of a digital system. Illustrate with poles at 0.5, 0.9 and 1.1 (all real, angle 0).",
                marks: 7,
                outline: [
                  "Each pole p contributes a mode p^n",
                  "p = 0.5: decays to 0.8 percent in 7 samples - fast transient",
                  "p = 0.9: decays slowly - long tail, about 44 samples to 1 percent",
                  "p = 1.1: grows without bound - unstable",
                  "Complex poles add angle: oscillation at w = angle",
                ],
              },
              {
                q: "A system has a double pole at z = 0.8. Write the time-domain contribution of this pole and the corresponding factor of the denominator polynomial.",
                marks: 7,
                outline: [
                  "Denominator contains (1 - 0.8z^-1)^2",
                  "Time modes: (0.8)^n and n·(0.8)^n",
                  "Both terms needed because the root has multiplicity two",
                  "In partial fractions: A/(1 - 0.8z^-1) + B/(1 - 0.8z^-1)^2",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Inversion of the z-transform",
            body: [
              "Inverting X(z) recovers x[n], and the syllabus names three techniques - each suited to a different shape of problem. Partial fraction expansion: for rational X(z) with distinct poles, write X(z) = sum of A_i/(1 - p_i·z^-1) and read each term off the pair table. The worked example of the unit: X(z) = 1/((1 - 0.5z^-1)(1 - 2z^-1)) with ROC 0.5 < |z| < 2. Cover-up factors give A = 1/(1 - 2z^-1) at z = 0.5 -> 1/(1 - 4) = -1/3, and B = 1/(1 - 0.5z^-1) at z = 2 -> 1/(1 - 0.25) = 4/3. The pole at 0.5 has the unit circle OUTSIDE its ROC boundary (0.5 < |z| means the ROC is outside 0.5) - so that pole is one-sided causal: -(1/3)(0.5)^n·u[n]. The pole at 2 lies OUTSIDE the ROC (|z| < 2), so its inverse is anti-causal: (4/3)(2)^n·u[-n - 1]. Answer: x[n] = -(1/3)(0.5)^n·u[n] + (4/3)(2)^n·u[-n - 1].",
              "That example demonstrates the rule that examiners test hardest: the ROC assigns each pole its one-sided direction. If the ROC is outside a pole's radius, that pole's term is causal (u[n] side); if inside, anti-causal (u[-n - 1] side). For repeated poles the expansion gains B/(1 - p·z^-1)^2 terms whose inverse is n·p^n·u[n] (causal case). Repeated-pole cover-up needs differentiation: A_i = (1/(m-1)!)·d^(m-1)/dz^-1^(m-1) of [(z - p_i)^m·X(z)/z] - or, more practically, subtract the simple-pole terms and divide once.",
              "Long division (the power-series method) divides numerator by denominator to produce the series X(z) = x[0] + x[1]z^-1 + x[2]z^-2 + ..., reading the coefficients off the quotient. It is the fastest route when only the FIRST few samples are asked - 'find x[0], x[1], x[2]' is a two-division exercise - and it assumes a causal sequence (expansion in z^-1). Running the same example causally: 1/((1 - 0.5z^-1)(1 - 2z^-1)) = 1/(1 - 2.5z^-1 + z^-2) -> dividing gives 1 + 2.5z^-1 + 5.25z^-2 + ..., so x[0] = 1, x[1] = 2.5, x[2] = 5.25 - the causal sequence (2^n - (1/3)(0.5)^n) growing without bound, consistent with the pole outside the circle. The residue (contour integral) method evaluates x[n] = (1/2pi)·contour of X(z)z^(n-1) dz as the sum of residues at poles inside the contour - the formal backbone that partial fractions shortcut.",
              "Choosing the method is itself a markable decision. Partial fractions: rational X(z), complete sequence wanted. Long division: first few samples wanted, or a non-rational ratio. Residues: theory questions ('prove the inversion integral'). The classic trap: expanding in partial fractions WITHOUT noting the ROC, then writing every term causal - which silently replaces the annular-ROC answer with the wrong one. The safe ritual: factor, cover-up, THEN check each pole against the ROC before writing u[n] or u[-n - 1].",
            ],
            keyTerms: [
              { term: "Partial fractions", definition: "X(z) = sum A_i/(1 - p_i z^-1); invert each term from the pair table." },
              { term: "Long division", definition: "Divide out a power series in z^-1; read coefficients as x[0], x[1], ...." },
              { term: "Residue method", definition: "x[n] = sum of residues of X(z)z^(n-1) at enclosed poles." },
              { term: "ROC direction rule", definition: "ROC outside a pole -> causal inverse; inside -> anti-causal inverse." },
              { term: "Cover-up factors", definition: "A_i = (1 - p_i z^-1)X(z) evaluated at z = p_i." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing an inversion method",
              caption: "Match the technique to what the question asks for.",
              start: "Invert X(z)",
              branches: [
                { label: "Rational, full sequence", outcome: "partial fractions + pair table; ROC assigns each pole its side", good: true },
                { label: "First few samples only", outcome: "long division in z^-1; read the quotient coefficients", good: true },
                { label: "Repeated poles present", outcome: "extra B/(1 - pz^-1)^2 terms; inverse n·p^n·u[n]", good: true },
                { label: "Theory/proof question", outcome: "residue (contour integral) method", good: true },
                { label: "No ROC stated", outcome: "STOP - the answer is not unique; state the ROC yourself or all cases", good: false },
              ],
            },
            table: {
              caption: "The three inversion techniques compared.",
              headers: ["Method", "Best for", "Gives", "Watch for"],
              rows: [
                ["Partial fractions", "rational X(z), full x[n]", "closed form per pole", "ROC direction of each pole"],
                ["Long division", "first N samples, causal X", "series coefficients", "valid only for the causal choice"],
                ["Residues", "proofs, non-standard shapes", "contour integral result", "poles inside the contour only"],
              ],
            },
            bullets: [
              "Partial fractions turn rational X(z) into a sum of table pairs.",
              "Worked example: ROC 0.5 < |z| < 2 gives x[n] = -(1/3)(0.5)^n·u[n] + (4/3)(2)^n·u[-n - 1].",
              "ROC outside a pole = causal term; inside = anti-causal term.",
              "Long division reads x[0], x[1], x[2] straight off the quotient - ideal for 'first few samples'.",
              "Same X(z) with causal ROC instead: x[n] = ((2)^n - (1/3)(0.5)^n)·u[n] - grows unboundedly.",
              "Repeated poles: divide once more, invert with n·p^n.",
              "Residue method: sum residues of X(z)z^(n-1) at poles inside the contour.",
            ],
            callout: {
              type: "exam",
              title: "The annular-ROC question",
              body: "When the ROC is a ring (p1 < |z| < p2), the inner pole gives a causal term and the outer pole an anti-causal term. Write a small table - pole, radius vs ROC, u[n] or u[-n-1] - before inverting. This one organizational line is exactly what separates full-mark inversion answers from half-mark ones.",
            },
            examQuestions: [
              {
                q: "Invert X(z) = 1/((1 - 0.5z^-1)(1 - 2z^-1)) for the ROC 0.5 < |z| < 2, and state what the answer would be if the ROC were |z| > 2 instead.",
                marks: 14,
                outline: [
                  "Cover-up: A = -1/3 (pole 0.5), B = 4/3 (pole 2)",
                  "ROC 0.5 < |z| < 2: pole 0.5 inside boundary -> causal; pole 2 outside -> anti-causal",
                  "x[n] = -(1/3)(0.5)^n·u[n] + (4/3)(2)^n·u[-n - 1]",
                  "Check n = 0: x[0] = -1/3 - 4/3·0? (2)^0·u[-1] = 0 -> x[0] = -1/3",
                  "Alternative ROC |z| > 2: both poles causal",
                  "Causal answer: x[n] = ((2)^n - (1/3)(0.5)^n)·u[n]",
                  "Same X(z), two ROCs, two different sequences - uniqueness needs the ROC",
                ],
              },
              {
                q: "Use long division to find the first four samples of the causal sequence with X(z) = (1 + 0.5z^-1)/(1 - 0.6z^-1).",
                marks: 7,
                outline: [
                  "Divide (1 + 0.5z^-1) by (1 - 0.6z^-1)",
                  "Quotient: 1 + 1.1z^-1 + 0.66z^-2 + 0.396z^-3 + ...",
                  "x[0] = 1, x[1] = 1.1, x[2] = 0.66, x[3] = 0.396",
                  "Cross-check closed form: x[n] = 0.6^n·u[n] + 0.5·(0.6)^(n-1)·u[n-1]... matches",
                  "Division is fastest when only leading samples are wanted",
                ],
              },
              {
                q: "State the residue formula for z-transform inversion and explain its relation to partial fraction expansion.",
                marks: 7,
                outline: [
                  "x[n] = (1/2pi·j) contour integral of X(z)z^(n-1) dz",
                  "Evaluated as the sum of residues at poles inside the contour",
                  "For simple poles: residue = limit (z - p)X(z)z^(n-1) at z = p",
                  "Partial fractions are the algebraic shortcut to the same residues",
                  "Contour radius is chosen inside the ROC",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Analysis of LTI systems in the z-domain",
            body: [
              "In the z-domain an LTI system is its transfer function H(z) = Y(z)/X(z) = Z{h[n]}, and analysis becomes algebra. The output transform is the product Y(z) = X(z)·H(z) - the convolution theorem at work - so a system's action on a given input is: transform the input, multiply, invert. The transfer function also encodes structure: coefficients a[k] of the difference equation become the denominator (feedback), b[k] the numerator (feedforward). Converting between difference equation, block diagram, and H(z) is the routine skill Unit II exists to teach.",
              "System properties read directly off H(z). Causality: the ROC extends outward from the outermost pole (equivalently, the impulse response has no negative-index terms). Stability: the ROC contains the unit circle; for causal systems this collapses to the practical criterion - every pole strictly inside |z| = 1. Worked example: H(z) = (1 + 0.8z^-1)/(1 - 1.2z^-1 + 0.45z^-2). The denominator roots: z = (1.2 ± sqrt(1.44 - 1.8))/2 = 0.6 ± j0.3. Radius: sqrt(0.36 + 0.09) = sqrt(0.45) = 0.671 < 1 - stable, causal, with a decaying oscillatory mode at angle atan(0.3/0.6) = 0.464 rad per sample. DC gain: H(1) = (1 + 0.8)/(1 - 1.2 + 0.45) = 1.8/0.25 = 7.2 - so a constant input eventually settles at 7.2 times its value.",
              "Transient versus steady state has a clean z-domain story. The output poles are the system poles plus the input poles: the system-pole terms decay (transient, if stable) while the input-pole terms persist (steady state). For a step input the input pole at z = 1 contributes the constant final value - computable by the final-value theorem as lim (1 - z^-1)Y(z) at z = 1 = H(1) - and the system poles contribute the decaying startup. This decomposition is the z-domain twin of section 1.5's homogeneous/particular split, and the exam explicitly asks for both descriptions: 'find the step response and identify the transient and steady-state parts'.",
              "A short catalogue of z-domain tasks covers the exam surface: (a) find H(z) from a difference equation; (b) test stability by pole radius or by the ROC; (c) compute the response to u[n], delta[n], or a^n·u[n] by polynomial multiplication and partial fractions; (d) cascade two systems by multiplying their H(z); (e) read DC gain, resonance frequency, and decay time off the pole-zero plot. Every one of these is two or three lines of algebra once the pair table and the properties are internalized - which is the whole argument for the z-transform: it replaces the infinite convolution sum of Unit I with finite polynomial arithmetic.",
            ],
            keyTerms: [
              { term: "Transfer function", definition: "H(z) = Y(z)/X(z) = Z{h[n]}; the z-domain identity of the system." },
              { term: "Causal stability", definition: "All poles strictly inside the unit circle; ROC extends outward past |z| = 1." },
              { term: "Transient", definition: "Output terms from the system's own poles; decay away for stable systems." },
              { term: "Steady state", definition: "Output terms from the input's poles; persist as long as the input does." },
              { term: "DC gain", definition: "H(1), the response to a constant input in steady state." },
            ],
            diagram: {
              kind: "matrix",
              title: "Pole location on the z-plane and system behaviour",
              caption: "Radius decides stability; angle decides the ringing frequency.",
              axes: { x: "Pole radius (0 -> 1 -> beyond)", y: "Mode behaviour (decay -> oscillation)" },
              quadrants: [
                { label: "Stable, smooth", note: "real pole inside, small radius - fast decay, no oscillation" },
                { label: "Stable, ringing", note: "complex poles inside at ±theta - decaying oscillation at theta" },
                { label: "Marginally stable", note: "poles ON the unit circle - sustained oscillation, no decay" },
                { label: "Unstable", note: "any pole outside the circle - exponentially growing mode" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "zdomain_check.py - poles, radius, stability, DC gain",
              code: `import numpy as np

# H(z) = (1 + 0.8 z^-1) / (1 - 1.2 z^-1 + 0.45 z^-2)
b = np.array([1.0, 0.8])       # numerator coefficients
a = np.array([1.0, -1.2, 0.45])# denominator coefficients

poles = np.roots(a)
print(poles)                   # [0.6+0.3j  0.6-0.3j]
print(np.abs(poles))           # [0.6708  0.6708] -> stable (both < 1)

H_dc = np.polyval(b, 1) / np.polyval(a, 1)
print(H_dc)                    # 7.2 - steady-state gain for a step input`,
            },
            bullets: [
              "H(z) = Y(z)/X(z): the z-domain identity of any LTI system.",
              "Causal iff ROC extends outward from the outermost pole.",
              "Stable (causal case) iff every pole strictly inside |z| = 1.",
              "Worked example: poles 0.6 ± j0.3, radius 0.671 - stable, ringing at 0.464 rad/sample.",
              "DC gain H(1) = 7.2 in the worked example: step input settles at 7.2.",
              "Output poles = system poles + input poles; the split is transient vs steady state.",
              "Cascade of systems: multiply the transfer functions.",
            ],
            callout: {
              type: "exam",
              title: "The four-part stability answer",
              body: "Stability questions want: (1) the criterion sentence (poles strictly inside the unit circle for causal systems), (2) the factorization or quadratic-formula roots, (3) the radius computation, (4) the verdict word. Writing only 'stable' earns nothing; the four-part chain earns all marks even if an arithmetic slip lands a wrong radius.",
            },
            examQuestions: [
              {
                q: "A system has H(z) = (1 + 0.8z^-1)/(1 - 1.2z^-1 + 0.45z^-2). Find its poles, decide stability, compute the DC gain, and describe the transient behaviour.",
                marks: 14,
                outline: [
                  "Denominator roots: z = 0.6 ± j0.3 (discriminant 1.44 - 1.8 < 0)",
                  "Radius sqrt(0.36 + 0.09) = 0.671 < 1 -> stable and causal",
                  "Angle atan(0.3/0.6) = 0.464 rad/sample: decaying oscillation",
                  "DC gain H(1) = 1.8/0.25 = 7.2",
                  "Step input: steady state 7.2, transient ring from the pole pair",
                  "Decay: 0.671^n - about 17 samples to 0.1 percent",
                  "Zero at z = -0.8 shapes the frequency response between the poles",
                ],
              },
              {
                q: "Derive the z-domain condition for BIBO stability of a causal LTI system from the time-domain criterion sum |h[n]| < infinity.",
                marks: 7,
                outline: [
                  "Time-domain criterion: sum |h[n]| < infinity",
                  "Absolute summability means the DTFT exists -> unit circle in the ROC",
                  "Causality means the ROC extends outward from the outermost pole",
                  "Both together: ROC includes |z| = 1 and lies outside |p|max",
                  "Hence every pole strictly inside the unit circle",
                  "Conversely, poles inside imply a decaying h[n] - absolutely summable",
                ],
              },
              {
                q: "Two stable systems with H1(z) = 1/(1 - 0.5z^-1) and H2(z) = 1/(1 + 0.5z^-1) are cascaded. Find H(z), the poles, and the impulse response.",
                marks: 7,
                outline: [
                  "Cascade: H(z) = H1·H2 = 1/((1 - 0.5z^-1)(1 + 0.5z^-1))",
                  "Poles at 0.5 and -0.5 - both inside, cascade stable",
                  "Partial fractions: 1/(1 - 0.25z^-2) = 0.5/(1 - 0.5z^-1) + 0.5/(1 + 0.5z^-1)... solve constants",
                  "h[n] = A(0.5)^n·u[n] + B(-0.5)^n·u[n] with A = B = 1",
                  "Result: h[n] = ((0.5)^n + (-0.5)^n)·u[n] - decaying alternation",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Block diagrams and signal flow graph representation",
            body: [
              "A digital network is drawn with three primitives: the adder (sums two or more signals), the multiplier (scales by a coefficient), and the unit delay (outputs the signal one sample earlier, written z^-1). A block diagram shows these as boxes and arrows; a signal flow graph (SFG) compresses the same information - nodes carry signal values, directed branches carry transmittances (coefficients or z^-1), and each node's value is the sum of all incoming branch contributions. The two representations are exactly equivalent, and the exam expects fluency in both directions: equation to diagram, diagram to equation.",
              "The translation rules are mechanical. From the LCCDE, one delay per past-output term and one per past-input term gives direct form I; sharing the merged state gives direct form II. From an SFG, write one equation per node (each node = sum of incoming transmittances times their source values), then eliminate the internal variables - Mason's gain formula automates this: gain = (sum of forward path gains x (1 - non-touching loop corrections)) / (1 - sum of loop gains + sum of products of non-touching loop gains). For the small networks of this course, direct node equations are faster than Mason, but stating Mason's formula correctly is itself a 7-mark question.",
              "A worked example closes the loop with numbers. The canonical second-order section y[n] = 0.8y[n - 1] - 0.15y[n - 2] + x[n] + 2x[n - 1] (from H(z) = (1 + 2z^-1)/(1 - 0.8z^-1 + 0.15z^-2), poles 0.3 and 0.5) has SFG nodes w[n] (the shared state) with w[n] = x[n] + 0.8w[n - 1] - 0.15w[n - 2] and y[n] = w[n] + 2w[n - 1]. Two delays realize the whole section. Cascading two such sections gives a fourth-order filter drawn as two copies in series - and the SFG view makes the cascade's overall H(z) a simple product of the section polynomials. Signal flow graphs also expose structures invisible in block diagrams: transposition (reversing all branches, swapping sources and sinks) preserves the transfer function - the origin of the transposed direct form II of section 1.6.",
              "Why the syllabus wants three representations for one object: each answers a different question. The difference equation is the specification (what to compute); the block diagram is the hardware plan (how many adders, multipliers, registers); the SFG is the analysis tool (node equations, Mason, transposition). A 14-mark 'represent the system' question wants all three, connected: derive H(z), draw the diagram, convert to SFG, verify by re-deriving H(z) from the graph. The verification loop - different representation, same H(z) - is the proof of correctness examiners look for.",
            ],
            keyTerms: [
              { term: "Adder / multiplier / delay", definition: "The three primitives of digital network diagrams." },
              { term: "Signal flow graph", definition: "Nodes carry signals; branches carry transmittances; nodes sum incoming branches." },
              { term: "Mason's gain formula", definition: "Overall gain from forward paths and loop gains, with non-touching corrections." },
              { term: "Transposition", definition: "Reverse every branch, swap input and output; transfer function unchanged." },
              { term: "Canonical section", definition: "Second-order direct form II: two delays - the biquad building block." },
            ],
            diagram: {
              kind: "flow",
              title: "Between the three representations",
              caption: "Every arrow is a mechanical translation; verify by returning to H(z).",
              steps: [
                { label: "LCCDE", note: "the specification: y[n] in terms of past y, x" },
                { label: "Transform", note: "z^-1 factors give H(z) = B(z)/A(z)" },
                { label: "Block diagram", note: "adders, multipliers, z^-1 registers" },
                { label: "Signal flow graph", note: "nodes + transmittances; node equations" },
                { label: "Verify", note: "re-derive H(z) from the graph - must match" },
              ],
            },
            table: {
              caption: "Reading the three representations.",
              headers: ["Representation", "Answers", "Rules to remember"],
              rows: [
                ["Difference equation", "what to compute each sample", "feedback = denominator coefficients"],
                ["Block diagram", "hardware cost: adders, multipliers, registers", "z^-1 box = one register"],
                ["Signal flow graph", "analysis: node equations, Mason, transpose", "node value = sum of incoming branches"],
                ["H(z)", "pole-zero picture, stability, gain", "denominator from feedback, numerator from feedforward"],
              ],
            },
            bullets: [
              "Three primitives: adder, multiplier, delay z^-1.",
              "SFG node = sum of all incoming branch transmittances.",
              "Mason's gain formula computes overall gain from paths and loops.",
              "Direct form II is the canonical biquad: two delays per second-order section.",
              "Transposing an SFG (reversing branches) preserves H(z).",
              "Verification loop: equation -> diagram -> graph -> back to H(z) unchanged.",
            ],
            callout: {
              type: "tip",
              title: "Label every branch",
              body: "An unlabelled branch in a structure diagram is an assumed gain of 1 - examiners mark it as an error, not a shorthand. Put coefficients on every multiplier branch, z^-1 on every register, and + signs at every adder input. Clean labels are also how YOU re-derive H(z) to verify.",
            },
            examQuestions: [
              {
                q: "Represent the system y[n] = 0.8y[n - 1] - 0.15y[n - 2] + x[n] + 2x[n - 1] as (a) a transfer function, (b) a direct form II block diagram, and (c) a signal flow graph with node equations.",
                marks: 14,
                outline: [
                  "H(z) = (1 + 2z^-1)/(1 - 0.8z^-1 + 0.15z^-2)",
                  "Poles 0.3 and 0.5 - stable biquad",
                  "Direct II: w[n] = x[n] + 0.8w[n - 1] - 0.15w[n - 2]; y[n] = w[n] + 2w[n - 1]",
                  "Two z^-1 registers, three multipliers (0.8, -0.15, 2), two adders",
                  "SFG: nodes x, w, w·z^-1, w·z^-2, y with branch transmittances 1, 0.8, -0.15, 2",
                  "Node equations match the two lines above",
                  "Verify: from the graph, H(z) comes back unchanged",
                ],
              },
              {
                q: "State Mason's gain formula and explain the terms forward path, loop, and non-touching loops.",
                marks: 7,
                outline: [
                  "Gain = sum over paths of (path gain x (1 - non-touching corrections)) / (1 - sum loops + sum products non-touching pairs - ...)",
                  "Forward path: from input to output without repeating a node",
                  "Loop: closed path back to its start node",
                  "Non-touching: loops sharing no node",
                  "For the small DSP networks, one or two loops - the formula collapses quickly",
                ],
              },
              {
                q: "Show that transposing a signal flow graph preserves the transfer function.",
                marks: 7,
                outline: [
                  "Reverse the direction of every branch; swap the input and output nodes",
                  "Each node equation keeps the same set of terms, re-indexed",
                  "Transposed direct II realizes the same H(z) with registers repositioned",
                  "Practical value: adders between registers - fixed-point word growth contained",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Matrix representation of digital networks",
            body: [
              "The matrix (state-space) representation describes a network by its internal state instead of its input-output ratio. Choose state variables w1[n], ..., wN[n] - one per delay register - and write the update w[n + 1] = A·w[n] + B·x[n] and the output y[n] = C·w[n] + D·x[n]. A is the N x N state matrix, B the input vector, C the output vector, D the direct feedthrough. The state vector is the memory of the system: knowing w[n] and x[n] suffices to compute the entire future - nothing else about the past matters. This is the representation simulation software and control theory actually use.",
              "The standard construction for a transfer function is the controllable canonical form. For H(z) = (b1·z + b0)/(z^2 - 0.8z + 0.15) (poles 0.3 and 0.5, the section 2.6 example restated): A = [[0, 1], [-0.15, 0.8]], B = [0, 1]^T, C = [1, 2], D = 0. Verification by the formula H(z) = C·(zI - A)^-1·B + D: (zI - A)^-1·B = [1, z]^T/(z^2 - 0.8z + 0.15) (computed by cofactors), so C·(zI - A)^-1·B = (1 + 2z)/(z^2 - 0.8z + 0.15) - exactly the transfer function we started with. The eigenvalues of A are the poles: det(zI - A) = z^2 - 0.8z + 0.15 = (z - 0.3)(z - 0.5). Stability, transient modes, everything from sections 2.3-2.5 is present - A packages the whole pole story into one matrix.",
              "The time-domain loop is the payoff: each sample, compute w[n + 1] = A·w[n] + B·x[n], emit y[n] = C·w[n] + D·x[n], shift. Running the worked example with x[n] = delta[n] and w[-1] = [0, 0]: w[0] = [0, 1], y[0] = 0; w[1] = [1, 0.8], y[1] = 1; w[2] = [0.8, 0.64], y[2] = 2.08... The same numbers emerge from the difference equation - two views, one system. State-space is the natural form for multi-input multi-output networks, for time-varying coefficients (A can change with n), and for numerical simulation, because it stores exactly the register contents a real DSP chip would hold.",
              "For the exam: know the construction (transfer function to A, B, C, D in controllable canonical form), the verification formula H(z) = C(zI - A)^-1B + D, and the eigenvalue-pole correspondence det(zI - A) = denominator polynomial. A typical 7-marker asks for the state matrices of a given second-order H(z); a 14-marker adds a simulation of the first three samples and the stability check via eigenvalues. The one conceptual sentence to include: the state representation is unique up to a similarity transform - many (A, B, C) triples describe the same H(z), exactly as many structures realize the same transfer function.",
            ],
            keyTerms: [
              { term: "State vector w[n]", definition: "Contents of the delay registers; complete memory of the system." },
              { term: "State equations", definition: "w[n+1] = Aw[n] + Bx[n]; y[n] = Cw[n] + Dx[n]." },
              { term: "Controllable canonical form", definition: "Standard companion-matrix construction from a transfer function." },
              { term: "Eigenvalues of A", definition: "Roots of det(zI - A) - exactly the poles of H(z)." },
              { term: "Similarity transform", definition: "Change of state basis; same H(z), different A, B, C." },
            ],
            diagram: {
              kind: "pipeline",
              title: "One sample through the state-space machine",
              caption: "State update, output emission, shift - the register contents are the state.",
              stages: [
                { label: "Input x[n] arrives", note: "one new sample" },
                { label: "Emit output", note: "y[n] = C·w[n] + D·x[n]" },
                { label: "Update state", note: "w[n+1] = A·w[n] + B·x[n]" },
                { label: "Shift", note: "w[n+1] becomes the new w[n]" },
                { label: "Next sample", note: "loop at the sample rate" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "state_space.py - construction and simulation",
              code: `import numpy as np
from scipy.signal import tf2ss

# H(z) = (2 z + 1) / (z^2 - 0.8 z + 0.15)  ->  in z^-1 form:
b = np.array([0.0, 2.0, 1.0])   # numerator, highest power first
a = np.array([1.0, -0.8, 0.15]) # denominator

A, B, C, D = tf2ss(b, a)
print(A)                        # [[ 0.   1. ]
                                #  [-0.15 0.8 ]]
w = np.zeros((2, 1))            # initial state: relaxed
for n in range(3):
    x = 1.0 if n == 0 else 0.0  # impulse input
    y = float(C @ w + D * x)
    w = A @ w + B * x
    print(n, y)                 # matches the difference equation exactly`,
            },
            bullets: [
              "State = contents of the delay registers; N states for an order-N system.",
              "Update law w[n+1] = Aw[n] + Bx[n]; output y[n] = Cw[n] + Dx[n].",
              "H(z) = C(zI - A)^-1B + D - the matrix route back to the transfer function.",
              "Eigenvalues of A = poles of H(z): det(zI - A) is the denominator.",
              "Worked example: A = [[0,1],[-0.15,0.8]], B = [0,1], C = [1,2] realizes poles 0.3, 0.5.",
              "State-space handles MIMO, time-varying and simulated systems naturally.",
              "Many (A, B, C) triples give the same H(z) - similarity transforms.",
            ],
            callout: {
              type: "tip",
              title: "Verify by eigenvalues",
              body: "After building A, B, C, D, compute det(zI - A). If it does not reproduce the denominator polynomial, the construction has a sign slip - fix it before simulating. One determinant check replaces a page of hunting for the error later.",
            },
            examQuestions: [
              {
                q: "Explain the state-space representation of a digital filter. Construct the controllable canonical form for H(z) = (2z + 1)/(z^2 - 0.8z + 0.15) and verify by computing det(zI - A).",
                marks: 14,
                outline: [
                  "State vector = delay register contents; update and output equations",
                  "Controllable canonical: A = [[0,1],[-0.15,0.8]], B = [0,1]^T, C = [1,2], D = 0",
                  "Verification: H(z) = C(zI - A)^-1B + D = (1 + 2z)/(z^2 - 0.8z + 0.15)",
                  "det(zI - A) = z^2 - 0.8z + 0.15 = (z - 0.3)(z - 0.5) - eigenvalues are the poles",
                  "Both poles inside the unit circle: stable",
                  "State-space = the register contents of the direct form II structure",
                ],
              },
              {
                q: "Simulate the first three outputs of the system w[n+1] = Aw[n] + Bx[n], y[n] = Cw[n] with A = [[0,1],[-0.15,0.8]], B = [0,1]^T, C = [1,2], for an impulse input with relaxed initial state.",
                marks: 7,
                outline: [
                  "n = 0: x = 1; y[0] = C·w[-1]... w starts [0,0] -> y[0] = 0; w[0] = [0,1]",
                  "n = 1: x = 0; y[1] = C·[0,1] = 2; w[1] = [1, 0.8]",
                  "n = 2: y[2] = C·[1, 0.8] = 1 + 1.6 = 2.6; w[2] = [0.8, 0.64]",
                  "Matches the impulse response of H(z) computed by long division",
                  "State carries the memory; output is a projection of it",
                ],
              },
              {
                q: "Why does the same transfer function admit many state-space representations? Name the transform that relates them.",
                marks: 7,
                outline: [
                  "State variables are an internal choice, not an observable",
                  "Any invertible T change of basis: w' = T·w gives A' = T A T^-1 etc.",
                  "Transfer function invariant: C(zI - A)^-1B unchanged by similarity",
                  "Same freedom as choosing among direct/cascade/parallel structures",
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
      title: "Frequency Analysis of Discrete-Time Signals",
      summary:
        "Unit III moves from transforms of systems to transforms of signals: the discrete Fourier series for periodic sequences, its properties, the discrete Fourier transform as the finite-sequence workhorse, the properties of the DFT, circular convolution and its relation to linear convolution, and the two-dimensional DFT for arrays and images.",
      chapter: {
        number: "03",
        title: "From Samples to Spectra",
        intro:
          "Unit III covers the discrete Fourier series and its properties, the discrete Fourier transform and its properties, the two-dimensional DFT, and circular convolution including its relation to linear convolution and the zero-padding fix.",
        inOneBreath:
          "Periodic sequences have a DFS with N coefficients, periodic in both domains. The DFT is the DFS of a finite sequence treated as one period: N samples of the DTFT at w = 2pi·k/N, spaced fs/N Hz apart. Its properties are circular versions of the familiar ones - shift is circular, convolution is circular - and linear convolution needs zero-padding to L >= N1 + N2 - 1 to avoid wrap-around. The 2D DFT is separable: transform rows, then columns.",
        sections: [
          {
            number: "3.1",
            title: "The discrete Fourier series (DFS)",
            body: [
              "A periodic discrete-time sequence x~[n] with period N - x~[n + N] = x~[n] for all n - is completely described by N numbers, and the discrete Fourier series extracts them: X~[k] = sum over n = 0..N-1 of x~[n]·e^(-j(2pi/N)·k·n), for k = 0..N-1, with the synthesis sum x~[n] = (1/N)·sum over k of X~[k]·e^(j(2pi/N)·k·n). Unlike the continuous-time Fourier series, which counts infinitely many harmonics, the DFS has exactly N coefficients - a discrete-time periodic signal has only N harmonics because its frequency axis is periodic: harmonics k and k + N are the same frequency, e^(-j(2pi/N)(k+N)n) = e^(-j(2pi/N)kn). Both domains are periodic with period N, and the analysis sum and synthesis sum are inverses by the orthogonality of the complex exponentials.",
              "A fully worked 4-point example anchors the section: x~[n] = {1, 2, 3, 4} periodic with N = 4. X~[0] = 1 + 2 + 3 + 4 = 10 (the DC or average, x4). X~[1] = 1 + 2·e^(-jpi/2) + 3·e^(-jpi) + 4·e^(-j3pi/2) = 1 - 2j - 3 + 4j = -2 + 2j. X~[2] = 1 - 2 + 3 - 4 = -2 (the Nyquist bin, alternating sum). X~[3] = conjugate of X~[1] = -2 - 2j (guaranteed for real sequences - conjugate symmetry). The synthesis sum returns {1, 2, 3, 4}: verify at n = 0: (1/4)(10 + (-2 + 2j) + (-2) + (-2 - 2j)) = (1/4)(4) = 1. Every DFT numerical in this course is this example with N changed.",
              "The DFS coefficients have direct meaning. X~[0]/N is the average value (DC). X~[1]/N is the complex amplitude of the fundamental - the component rotating once per N samples. For the 4-point example the average is 2.5, and the fundamental amplitude is |X~[1]|/4 = sqrt(8)/4 = 0.707. Even and odd k carry symmetric and antisymmetric structure: for real x~[n], X~[N - k] = conj(X~[k]), so magnitude is even in k and phase odd - the same symmetry pattern the DTFT shows in w. These readings turn 'compute the DFS' into 'interpret the spectrum', which is how the 14-mark questions phrase it.",
              "The DFS is the conceptual bridge of Unit III: it is periodic and discrete in BOTH domains - the only transform pair of the four (CTFT, DTFT, DFS, DFT) with that symmetry - and every property it obeys (shift, modulation, periodic convolution, Parseval) is inherited by the DFT because the DFT is the DFS restricted to one period. That is why Unit III first defines the DFS and then defines the DFT as 'the DFS of a finite sequence': the periodicity makes the shift and convolution properties CIRCULAR, and the circularity is the single most examined subtlety of the unit.",
            ],
            keyTerms: [
              { term: "Period N", definition: "Smallest positive integer with x[n + N] = x[n] for all n." },
              { term: "DFS coefficients", definition: "X~[k] = sum of x~[n]e^(-j(2pi/N)kn) for k = 0..N-1." },
              { term: "Orthogonality", definition: "Sum over n of e^(j(2pi/N)(k-m)n) = N·delta[k - m] - what makes the pair invert." },
              { term: "Conjugate symmetry", definition: "Real x~[n] gives X~[N - k] = conj(X~[k]): even magnitude, odd phase." },
              { term: "Harmonic structure", definition: "Only N distinct harmonics exist; k and k + N are the same frequency." },
            ],
            diagram: {
              kind: "cycle",
              title: "The DFS: periodic in both domains",
              caption: "N samples -> N coefficients -> N samples; the wheel closes every N steps.",
              steps: [
                { label: "Periodic x~[n]", note: "N samples per period" },
                { label: "Analysis sum", note: "X~[k] = sum x~[n]e^(-j(2pi/N)kn)" },
                { label: "N coefficients", note: "X~[0] DC ... X~[N-1]" },
                { label: "Periodic in k too", note: "X~[k + N] = X~[k]" },
                { label: "Synthesis sum", note: "(1/N)·sum X~[k]e^(j(2pi/N)kn) -> x~[n] back" },
              ],
            },
            table: {
              caption: "DFS versus continuous-time Fourier series.",
              headers: ["Aspect", "CT Fourier series", "Discrete Fourier series"],
              rows: [
                ["Signal", "continuous, periodic T0", "discrete, periodic N"],
                ["Harmonics", "infinitely many (k = 0..inf)", "exactly N"],
                ["Coefficients", "decay with k (Riemann-Lebesgue)", "finite; spectrum itself periodic"],
                ["Synthesis", "integral-free infinite sum", "finite sum of N terms"],
                ["Symmetry (real x)", "even magnitude, odd phase", "same, periodic with N"],
              ],
            },
            bullets: [
              "DFS pair: X~[k] = sum x~[n]e^(-j(2pi/N)kn); x~[n] = (1/N)sum X~[k]e^(j(2pi/N)kn).",
              "Both x~[n] and X~[k] are periodic with period N.",
              "Worked example: {1, 2, 3, 4} -> {10, -2 + 2j, -2, -2 - 2j}.",
              "X~[0]/N is the DC average; |X~[1]|/N the fundamental amplitude.",
              "Real sequences: conjugate symmetry X~[N - k] = conj(X~[k]).",
              "DFS is the only transform pair periodic and discrete in both domains.",
            ],
            callout: {
              type: "exam",
              title: "Compute with the twiddle table",
              body: "For N = 4 the twiddles are 1, -j, -1, j - memorize them and the 4-point DFS becomes four short sums. For N = 8 add e^(-jpi/4) = 0.707(1 - j). A small handwritten twiddle table halves the arithmetic time in the hall and removes the sign slips that lose method marks.",
            },
            examQuestions: [
              {
                q: "Define the discrete Fourier series pair for a periodic sequence with period N. Compute the DFS of x~[n] = {1, 2, 3, 4} and verify the synthesis sum at n = 0.",
                marks: 14,
                outline: [
                  "Analysis: X~[k] = sum x~[n]e^(-j(2pi/N)kn); synthesis with 1/N",
                  "X~[0] = 10 (DC), X~[1] = -2 + 2j, X~[2] = -2, X~[3] = -2 - 2j",
                  "Twiddles for N = 4: 1, -j, -1, j",
                  "Conjugate symmetry visible: X~[3] = conj(X~[1])",
                  "Synthesis at n = 0: (1/4)(10 - 2 + 2j - 2 - 2 - 2j) = 1",
                  "Both domains periodic with N - the DFS signature",
                ],
              },
              {
                q: "Why does a periodic discrete-time sequence have exactly N spectral components while a continuous-time periodic signal has infinitely many?",
                marks: 7,
                outline: [
                  "Discrete-time frequencies are periodic: w and w + 2pi are the same frequency",
                  "Harmonic k and k + N give identical exponentials",
                  "Only N distinct harmonics fit in one 2pi period",
                  "Continuous time has an unbounded frequency axis - no such collapse",
                  "Consequence: the DFS spectrum is itself periodic",
                ],
              },
              {
                q: "For the 4-point periodic sequence of the worked example, state the DC value, the fundamental amplitude and the Nyquist-bin value.",
                marks: 7,
                outline: [
                  "DC: X~[0]/N = 10/4 = 2.5 - the mean of the samples",
                  "Fundamental amplitude: |X~[1]|/N = sqrt(8)/4 = 0.707",
                  "Fundamental phase: angle(-2 + 2j) = 3pi/4",
                  "Nyquist bin: X~[2]/N = -0.5 - the alternating component",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Properties of the DFS",
            body: [
              "The DFS properties are the DFT properties in periodic clothing, and every one of them is CIRCULAR because the domains are periodic. Linearity: a·x~[n] + b·y~[n] <-> a·X~[k] + b·Y~[k] (same N required). Periodic shift: x~[n - m] <-> X~[k]·e^(-j(2pi/N)km) - shifting the sequence by m rotates every coefficient's phase by (2pi/N)km; magnitude unchanged. Worked check on the 4-point example: shifting {1, 2, 3, 4} to {4, 1, 2, 3} (a shift by m = 1) multiplies X~[1] = -2 + 2j by e^(-jpi/2) = -j, giving (-2 + 2j)(-j) = 2 + 2j - same magnitude sqrt(8), new phase. Modulation is the dual: multiplying x~[n] by e^(j(2pi/N)mn) shifts the coefficients to X~[k - m].",
              "Time-domain multiplication becomes PERIODIC convolution in frequency and vice versa: the product of two periodic sequences transforms to (1/N)·periodic convolution of their DFS coefficients, and convolution of periodic sequences x~[n] (o) h~[n] = sum over m of x~[m]·h~[(n - m) mod N] transforms to the plain product X~[k]·H~[k]. The 'mod N' inside the sum is the whole point - the convolution wraps around the period, which is why the property is called circular convolution and why Unit III's central numerical (section 3.5) is a wrap-around computation. Parseval's identity holds in periodic form: sum over n of |x~[n]|^2 = (1/N)·sum over k of |X~[k]|^2 - energy (per period) is preserved between domains.",
              "Symmetry properties for real sequences mirror the DTFT's: X~[N - k] = conj(X~[k]); equivalently X~[-k] = conj(X~[k]) under periodic indexing. Decompositions follow: any real sequence splits into even and odd parts whose transforms are purely real and purely imaginary respectively. For the 4-point example, the even part {2.5, 1, 0.5, 1} (x~[n] + x~[N - n])/2 has a real DFS and the odd part has an imaginary one - a decomposition that shows up whenever an exam asks 'prove the symmetry properties for real periodic sequences'.",
              "The properties are also the proof toolkit: 'show that the DFS of a real even sequence is real' is two lines (conjugate symmetry + evenness kills the sine terms); 'show the shift property' is a reindexing exactly like the z-domain shift proof of section 2.2. Exam strategy: write the property as a labelled equation line, prove by substitution, then demonstrate on the standing 4-point example with actual numbers. The number-checked proof is the form RGPV examiners reward - it shows the property working, not just stated.",
            ],
            keyTerms: [
              { term: "Periodic shift", definition: "x~[n - m] <-> X~[k]e^(-j(2pi/N)km): magnitude preserved, phase rotated." },
              { term: "Modulation", definition: "e^(j(2pi/N)mn)·x~[n] <-> X~[k - m]: multiplication shifts the spectrum." },
              { term: "Periodic convolution", definition: "sum of x~[m]h~[(n - m) mod N]; transforms to X~[k]H~[k]." },
              { term: "Parseval (periodic)", definition: "sum |x~[n]|^2 = (1/N)sum |X~[k]|^2 per period." },
              { term: "Even/odd decomposition", definition: "Real-even part -> real DFS; real-odd part -> imaginary DFS." },
            ],
            table: {
              caption: "DFS properties at a glance (N = period).",
              headers: ["Property", "Time domain", "Frequency domain"],
              rows: [
                ["Linearity", "a·x~ + b·y~", "a·X~[k] + b·Y~[k]"],
                ["Periodic shift", "x~[n - m]", "X~[k]·e^(-j(2pi/N)km)"],
                ["Modulation", "e^(j(2pi/N)mn)·x~[n]", "X~[k - m]"],
                ["Time conv.", "x~ (o) h~ (mod N)", "X~[k]·H~[k]"],
                ["Freq conv.", "x~[n]·h~[n]", "(1/N)·X~ (o) H~"],
                ["Parseval", "sum |x~[n]|^2", "(1/N)·sum |X~[k]|^2"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Proving a DFS property in three moves",
              caption: "State, substitute, verify on the standing example.",
              steps: [
                { label: "Write the property", note: "as a labelled transform-pair line" },
                { label: "Substitute the definition", note: "reindex the double sum; orthogonality collapses it" },
                { label: "Verify numerically", note: "shift {1,2,3,4} -> phase rotation of X~[1]" },
              ],
            },
            bullets: [
              "All DFS properties are circular - the periodic index does the wrapping.",
              "Shift by m: phase rotation e^(-j(2pi/N)km), magnitudes untouched.",
              "Worked check: {1,2,3,4} shifted to {4,1,2,3} sends X~[1] = -2 + 2j to 2 + 2j.",
              "Time multiplication -> (1/N)·periodic convolution of coefficients.",
              "Periodic convolution (mod-N sum) -> plain product X~[k]H~[k].",
              "Parseval per period: sum |x~[n]|^2 = (1/N)sum |X~[k]|^2.",
              "Real sequences: X~[N - k] = conj(X~[k]); even part real, odd part imaginary.",
            ],
            callout: {
              type: "exam",
              title: "Magnitude survives shifts",
              body: "A favourite trick question: 'a sequence is shifted by m samples; what happens to its DFS magnitudes?' Answer: nothing - only phases rotate by (2pi/N)km. State it, prove it in one line, and demonstrate on the 4-point example where |X~[1]| = sqrt(8) both before and after the shift.",
            },
            examQuestions: [
              {
                q: "State and prove the periodic shift property of the DFS, and demonstrate it by shifting x~[n] = {1, 2, 3, 4} by one sample.",
                marks: 14,
                outline: [
                  "Property: x~[n - m] <-> X~[k]·e^(-j(2pi/N)km)",
                  "Proof: substitute into the analysis sum, reindex n' = n - m",
                  "The e^(-j(2pi/N)km) factor is independent of n and comes out",
                  "Shifted sequence: {4, 1, 2, 3}",
                  "X~'[1] = (-2 + 2j)·e^(-jpi/2) = (-2 + 2j)(-j) = 2 + 2j",
                  "Magnitude |X~'[1]| = sqrt(8) = |X~[1]| - unchanged",
                  "X~'[0] = 10 unchanged - DC insensitive to circular shifts",
                ],
              },
              {
                q: "Prove Parseval's identity for the DFS and verify it numerically on x~[n] = {1, 2, 3, 4}.",
                marks: 7,
                outline: [
                  "sum |x~[n]|^2 = sum x~[n]·conj(x~[n]); substitute the synthesis sum",
                  "Orthogonality collapses the double sum to (1/N)sum |X~[k]|^2",
                  "Left side: 1 + 4 + 9 + 16 = 30",
                  "Right side: (1/4)(100 + 8 + 4 + 8) = 120/4 = 30",
                  "Energy per period conserved between domains",
                ],
              },
              {
                q: "Show that the DFS of a real even periodic sequence is purely real.",
                marks: 7,
                outline: [
                  "Real x~: X~[N - k] = conj(X~[k]) - conjugate symmetry",
                  "Even x~: x~[n] = x~[N - n]",
                  "Combine: X~[k] = conj(X~[k]) -> imaginary part zero",
                  "All coefficients real; odd part gives purely imaginary coefficients",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "The discrete Fourier transform (DFT)",
            body: [
              "The DFT applies the DFS machinery to a FINITE sequence: take the N samples x[0..N-1], declare them one period of a periodic extension, compute the N coefficients X[k] = sum over n = 0..N-1 of x[n]·e^(-j(2pi/N)kn), and return x[n] = (1/N)·sum over k of X[k]·e^(j(2pi/N)kn). The DFT is thus the only transform whose time and frequency variables are both discrete AND finite - exactly what a computer can hold. Numerically it is the DFS of the worked example unchanged: the 4-point DFT of {1, 2, 3, 4} is {10, -2 + 2j, -2, -2 - 2j}.",
              "The DFT's relationship to the DTFT is the concept the examiner probes: X[k] are SAMPLES of the DTFT X(e^jw) on the grid w = 2pi·k/N, k = 0..N-1. Zero-padding the sequence to a longer N' (appending zeros) does not change the underlying DTFT but samples it on a denser grid - 2N points, 4N points, as many as wanted. This is worth internalizing with numbers: the 4-point DFT of {1, 2, 3, 4} gives 4 samples spaced pi/2 apart in w; the 8-point zero-padded DFT gives 8 samples spaced pi/4 apart; the spectral SHAPE is identical, only the sampling density changes. Zero-padding is interpolation, never new information - a sentence that earns marks whenever 'does zero-padding improve resolution?' appears (answer: no - resolution needs longer DATA, not more zeros).",
              "Frequency spacing in physical units: adjacent bins are fs/N apart. At fs = 8 kHz with N = 1024, bins are 7.8125 Hz apart, running from DC (k = 0) to just under fs/2 = 4 kHz (k = 511, since for real signals bins N/2..N-1 mirror 1..N/2). A 1 kHz tone lands at bin k = 1000/7.8125 = 128 exactly; a 1.05 kHz tone lands at k = 134.4 - between bins, and its energy smears into neighbours (spectral leakage, tamed by windowing in Unit V). Bin-centred tones are clean; off-bin tones leak - the distinction behind half the 'interpret the DFT plot' questions.",
              "Computationally the DFT pair is symmetric: the analysis sum and synthesis sum differ only by the sign of the exponent and the 1/N factor, so one fast algorithm (Unit IV's FFT) computes both directions. The exam surface of this section: compute a small DFT by hand (4-point or 8-point), state the DTFT-sampling relation, compute bin spacing, and answer the zero-padding conceptual question. A 14-marker typically asks for the 4-point DFT of a given sequence plus the DTFT relation plus the fs/N spacing calculation - three parts, each worth its share of marks.",
            ],
            keyTerms: [
              { term: "N-point DFT", definition: "X[k] = sum of x[n]e^(-j(2pi/N)kn), k = 0..N-1; DFS of one period." },
              { term: "Bin spacing", definition: "fs/N Hz between adjacent DFT bins; w-spacing 2pi/N rad/sample." },
              { term: "Zero-padding", definition: "Appending zeros to sample the same DTFT on a denser grid; adds no information." },
              { term: "Spectral leakage", definition: "Off-bin tones smear energy into neighbouring bins; windows control it." },
              { term: "DC bin", definition: "X[0] = sum of all samples = N times the average." },
            ],
            diagram: {
              kind: "compare",
              title: "DTFT versus DFT",
              caption: "The DTFT is a continuous function of w; the DFT samples it at N points.",
              left: {
                heading: "DTFT X(e^jw)",
                items: [
                  "Continuous in w over one 2pi period",
                  "Defined for every sequence (with convergence care)",
                  "Infinite sum - no computer can hold it",
                  "The true spectral shape",
                ],
              },
              right: {
                heading: "DFT X[k]",
                items: [
                  "N samples at w = 2pi·k/N",
                  "Finite: N inputs, N outputs",
                  "Exactly computable (Unit IV makes it fast)",
                  "Shape = DTFT shape, sampled",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "dft_basics.py - the 4-point DFT and zero-padding",
              code: `import numpy as np

x = np.array([1, 2, 3, 4])
X = np.fft.fft(x)
print(X)        # [10+0j -2+2j -2+0j -2-2j] - matches the hand computation

X8 = np.fft.fft(x, 8)   # zero-pad to 8 points
print(np.round(X8, 3))  # same spectral shape, denser grid (pi/4 spacing)`,
            },
            bullets: [
              "DFT = DFS of the finite sequence treated as one period.",
              "X[k] samples the DTFT at w = 2pi·k/N; bin spacing fs/N Hz.",
              "Worked example: 4-point DFT of {1,2,3,4} = {10, -2+2j, -2, -2-2j}.",
              "fs = 8 kHz, N = 1024: 7.8125 Hz per bin; 1 kHz lands exactly at bin 128.",
              "Off-bin tones leak into neighbours; bin-centred tones stay clean.",
              "Zero-padding densifies the DTFT grid but adds no resolution.",
              "Analysis and synthesis differ only in exponent sign and the 1/N factor.",
            ],
            callout: {
              type: "exam",
              title: "Resolution versus density",
              body: "Zero-padding computes more points OF the same spectrum; a longer data record computes a better spectrum. 'Does zero-padding improve frequency resolution?' - answer NO and give the bin-spacing argument (fs/N with the same fs needs larger N of REAL data). This conceptual trap appears in nearly every DSP paper.",
            },
            examQuestions: [
              {
                q: "Define the N-point DFT and IDFT. Compute the 4-point DFT of x[n] = {1, 2, 3, 4} and explain how the DFT relates to the DTFT.",
                marks: 14,
                outline: [
                  "X[k] = sum x[n]e^(-j(2pi/N)kn); inverse with 1/N and positive exponent",
                  "Twiddles for N = 4: 1, -j, -1, j",
                  "X[0] = 10; X[1] = -2 + 2j; X[2] = -2; X[3] = -2 - 2j",
                  "Relation: X[k] = X(e^jw) evaluated at w = 2pi·k/N",
                  "DFT = sampled DTFT; DFS = periodic version",
                  "Inverse verified at n = 0 in 3.1",
                ],
              },
              {
                q: "An 8 kHz system uses a 1024-point DFT. Compute the bin spacing, the bin index of a 1 kHz tone, and the highest frequency represented without aliasing of the spectrum.",
                marks: 7,
                outline: [
                  "Bin spacing: 8000/1024 = 7.8125 Hz",
                  "1 kHz tone: k = 1000/7.8125 = 128 exactly",
                  "Bins 0..511 cover 0..4 kHz; bins 512..1023 mirror them",
                  "Highest useful bin: k = 511 -> 3992 Hz (just under fs/2)",
                  "Off-bin example: 1.05 kHz at k = 134.4 - leaks into 134 and 135",
                ],
              },
              {
                q: "What does zero-padding a sequence before computing its DFT change, and what does it not change?",
                marks: 7,
                outline: [
                  "Changes: number of DTFT samples, bin spacing fs/N (denser grid)",
                  "Does not change: the underlying DTFT shape, spectral content, resolution",
                  "Padding adds zeros - no new data, no new information",
                  "Resolution improves only with longer real data records",
                  "Practical use: display interpolation; power-of-2 lengths for the FFT",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Properties of the DFT",
            body: [
              "The DFT inherits the DFS properties with one systematic change: 'periodic' becomes 'circular'. The circular shift x[((n - m)) mod N] (double brackets = modulo indexing) transforms to X[k]·e^(-j(2pi/N)km) - shift the samples around a ring, rotate the phases, magnitudes fixed. Linearity holds for equal-length DFTs. Conjugation: conj(x[n]) <-> conj(X[((-k)) mod N]) - flip the frequency index. For real x[n] this yields the workhorse symmetries: X[N - k] = conj(X[k]), so |X[k]| is even and angle X[k] odd about k = 0 and k = N/2, and the second half of the DFT array is redundant data for real inputs.",
              "Parseval's theorem - sum over n of |x[n]|^2 = (1/N)·sum over k of |X[k]|^2 - is the property the exam loves to verify numerically. On the standing example {1, 2, 3, 4}: left side 1 + 4 + 9 + 16 = 30; right side (1/4)(|10|^2 + |-2 + 2j|^2 + |-2|^2 + |-2 - 2j|^2) = (1/4)(100 + 8 + 4 + 8) = 30. Energy is conserved between the time and frequency domains, scaled by N. The duality property is elegant and quotable: the DFT of X[n] (treating coefficients as samples) is N·x[((-k)) mod N] - time and frequency swap with an N scaling and a flip.",
              "Circular convolution and its theorem belong to this section formally: x[n] (N) h[n] = sum over m of x[m]·h[((n - m)) mod N] <-> X[k]·H[k]. The theorem is the bridge to section 3.5's numericals and to section 3.6's filtering method - it is WHY multiplying DFTs convolves sequences. A worked demonstration of circularity's bite: shifting {1, 2, 3, 4} right by one circularly gives {4, 1, 2, 3} - sample 4 re-enters from the left; a linear shift would give {0, 1, 2, 3}. The two disagree precisely because the DFT world is periodic; every DFT property question is secretly asking whether you remember this.",
              "The symmetry table is the practical takeaway for real signals: X[0] and X[N/2] (for even N) are always real; X[N - k] = conj(X[k]) pairs the halves; the spectrum from k = 0 to N/2 fully describes a real sequence. Exploiting it halves storage and computation in real-data FFT work - and the exam asks for it as 'the symmetry properties of the DFT of a real sequence', worth 7 marks for the four lines: conjugate symmetry, even magnitude, odd phase, real DC and Nyquist bins.",
            ],
            keyTerms: [
              { term: "Circular shift", definition: "x[((n - m)) mod N] <-> X[k]e^(-j(2pi/N)km); the ring closes on itself." },
              { term: "Parseval", definition: "sum |x[n]|^2 = (1/N)sum |X[k]|^2 - energy conserved, scaled by N." },
              { term: "Duality", definition: "DFT of the coefficient array X[n] is N·x[((-k)) mod N]." },
              { term: "Conjugate symmetry", definition: "Real x[n]: X[N - k] = conj(X[k]); magnitudes even, phases odd." },
              { term: "Real bins", definition: "X[0] and X[N/2] (even N) are always real for real input." },
            ],
            diagram: {
              kind: "matrix",
              title: "Symmetry of the DFT for real sequences",
              caption: "Read any coefficient's neighbours from its position and conjugate.",
              axes: { x: "Index k (0 -> N/2 -> N-1)", y: "Coefficient nature (real -> complex)" },
              quadrants: [
                { label: "X[0], X[N/2]: real", note: "DC and Nyquist bins carry no phase" },
                { label: "Paired half: X[N - k] = conj(X[k])", note: "upper half mirrors the lower half" },
                { label: "Even magnitude about k = 0", note: "|X[k]| = |X[N - k]|" },
                { label: "Odd phase about k = 0", note: "angle X[N - k] = -angle X[k]" },
              ],
            },
            table: {
              caption: "DFT properties (N-point, circular indexing).",
              headers: ["Property", "Time domain", "Frequency domain"],
              rows: [
                ["Linearity", "a·x + b·y", "a·X[k] + b·Y[k]"],
                ["Circular shift", "x[((n - m)) mod N]", "X[k]·e^(-j(2pi/N)km)"],
                ["Conjugation", "conj(x[n])", "conj(X[((-k)) mod N])"],
                ["Circular conv.", "x (N) h", "X[k]·H[k]"],
                ["Multiplication", "x[n]·h[n]", "(1/N)·X (N) H"],
                ["Parseval", "sum |x[n]|^2", "(1/N)·sum |X[k]|^2"],
                ["Duality", "X[n] as input", "N·x[((-k)) mod N]"],
              ],
            },
            bullets: [
              "Every DFS property reappears as a circular DFT property.",
              "Circular shift of {1,2,3,4} by 1 gives {4,1,2,3} - wrap-around, not zero-fill.",
              "Parseval verified: 30 = (1/4)(100 + 8 + 4 + 8).",
              "Real x[n]: X[N - k] = conj(X[k]); |X| even, phase odd; X[0], X[N/2] real.",
              "Conjugation flips the frequency index; duality swaps domains with factor N.",
              "Circular convolution theorem: (N) in time <-> product in frequency.",
              "Half the DFT array of a real signal is redundant - exploit it in implementations.",
            ],
            callout: {
              type: "warning",
              title: "Circular means wrap-around",
              body: "The most common DFT-property error: treating a shift as linear (zero-fill). Under the DFT, x[n - m] is x[((n - m)) mod N] - samples fall off one end and re-enter the other. If a question says 'shifted sequence' without 'circular', state both versions and their difference; that sentence is the mark.",
            },
            examQuestions: [
              {
                q: "State and prove Parseval's theorem for the DFT, and verify it numerically for x[n] = {1, 2, 3, 4} whose DFT is {10, -2 + 2j, -2, -2 - 2j}.",
                marks: 14,
                outline: [
                  "Statement: sum |x[n]|^2 = (1/N)sum |X[k]|^2",
                  "Proof: substitute the synthesis sum into sum x·conj(x), apply orthogonality",
                  "Left: 1 + 4 + 9 + 16 = 30",
                  "|10|^2 = 100, |-2 + 2j|^2 = 8, |-2|^2 = 4, |-2 - 2j|^2 = 8",
                  "Right: (1/4)(120) = 30 - verified",
                  "Meaning: energy conserved between domains, scaled by N",
                ],
              },
              {
                q: "Explain circular shift of a sequence. Compute the 4-point circular shift of {1, 2, 3, 4} by two samples and state the effect on the DFT magnitudes.",
                marks: 7,
                outline: [
                  "Circular shift wraps samples around the N-ring",
                  "Shift by 2: {3, 4, 1, 2}",
                  "DFT effect: X[k] multiplied by e^(-j(2pi/N)·2k) = e^(-jpi·k)",
                  "Magnitudes unchanged; DC bin unchanged; phases flip alternately",
                  "Contrast linear shift: {0, 0, 1, 2} - different sequence, different DFT",
                ],
              },
              {
                q: "List the symmetry properties of the DFT of a real sequence and state their practical use.",
                marks: 7,
                outline: [
                  "X[N - k] = conj(X[k])",
                  "|X[k]| even about k = 0; phase odd",
                  "X[0] real (DC); X[N/2] real (Nyquist) for even N",
                  "Use: store and compute only k = 0..N/2; halves FFT work for real data",
                  "Use: sanity check - a real-input DFT must show paired conjugates",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Circular convolution",
            body: [
              "Circular convolution is the convolution native to the DFT's periodic world: y[n] = x[n] (N) h[n] = sum over m = 0..N-1 of x[m]·h[((n - m)) mod N]. The index (n - m) mod N wraps: when the flipped template slides off one end of the array, it re-enters at the other end - exactly what periodicity demands. The circular convolution theorem makes it the operational heart of Unit III: circular convolution in time corresponds to pointwise multiplication of DFTs, X[k]·H[k]. Every 'multiply spectra' operation - filtering, correlation, system identification - is secretly a circular convolution.",
              "A fully worked N = 4 numerical is the section's anchor: x[n] = {1, 2, 3, 4}, h[n] = {1, 1, 0, 0}. y[0] = x[0]h[0] + x[1]h[3] + x[2]h[2] + x[3]h[1] = 1 + 0 + 0 + 4 = 5. y[1] = x[0]h[1] + x[1]h[0] + x[2]h[3] + x[3]h[2] = 1 + 2 = 3. y[2] = x[1]h[1] + x[2]h[0] = 2 + 3 = 5. y[3] = x[2]h[1] + x[3]h[0] = 3 + 4 = 7. So y = {5, 3, 5, 7}. Now compare the LINEAR convolution of the same sequences: {1, 3, 5, 7, 4} - five samples, with a tail of 4. The circular result wrapped that tail back: y[0] = 1 (linear) + 4 (wrapped tail) = 5. Time-aliasing, visibly happening.",
              "The wrap-around is a bug or a feature depending on the goal. For spectral multiplication that must emulate LINEAR filtering, the fix is zero-padding: extend both sequences to L >= N1 + N2 - 1 (here 3 + 2 - 1 = 4... for this pair 4 suffices; in general L must cover the full linear length), perform the L-point circular convolution, and the wrapped tail lands in legitimately-zero territory - the result equals the linear convolution exactly. For genuinely periodic signals (a periodic template matched against a periodic stream), circular convolution is the CORRECT operation with no padding needed. Stating which of the two situations a question describes is the first sentence of any model answer.",
              "The exam numerical is almost always: 'compute the N-point circular convolution of two given sequences and compare with their linear convolution'. The safe procedure: write the wrap-around sum for each n (modular indices shown explicitly), collect terms, list the result; then compute the linear convolution and show which samples wrapped. Marks live in the modular index bookkeeping - a small table of (n - m) mod N values for each n keeps the arithmetic honest and shows the examiner the method, which is worth more than the answer alone.",
            ],
            keyTerms: [
              { term: "Circular convolution", definition: "y[n] = sum of x[m]h[((n - m)) mod N]; indices wrap on the N-ring." },
              { term: "Circular convolution theorem", definition: "x (N) h <-> X[k]·H[k] - pointwise DFT multiplication." },
              { term: "Time-aliasing", definition: "The wrapped linear-convolution tail contaminating early samples when N is too small." },
              { term: "Zero-padding fix", definition: "L >= N1 + N2 - 1 makes circular equal linear." },
              { term: "Periodic signals case", definition: "For truly periodic streams, circular convolution is correct as-is." },
            ],
            diagram: {
              kind: "cycle",
              title: "The wrap-around index",
              caption: "On the N-ring, index (n - m) mod N re-enters samples that slid off the end.",
              steps: [
                { label: "Fix output index n", note: "position of the template centre" },
                { label: "Flip h", note: "h[(n - m) mod N] runs backwards" },
                { label: "Multiply x[m]", note: "term by term on the ring" },
                { label: "Sum over m", note: "one output sample" },
                { label: "Wrap", note: "off-the-end samples re-enter from the other side" },
                { label: "Advance n", note: "repeat; after N outputs the ring closes" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "circ_conv.py - modular indexing and the FFT route",
              code: `import numpy as np

x = np.array([1, 2, 3, 4])
h = np.array([1, 1, 0, 0])
N = 4

# direct circular convolution: (n - m) mod N indexing
y = np.zeros(N, dtype=int)
for n in range(N):
    for m in range(N):
        y[n] += x[m] * h[(n - m) % N]
print(y)                        # [5 3 5 7]

# FFT route: multiply spectra, inverse transform
print(np.round(np.fft.ifft(np.fft.fft(x) * np.fft.fft(h)).real))  # [5 3 5 7]

# linear convolution for comparison: tail of 4 gets wrapped above
print(np.convolve(x, h))        # [1 3 5 7 4]`,
            },
            bullets: [
              "Definition: y[n] = sum of x[m]·h[((n - m)) mod N] - modular indexing.",
              "Worked example: {1,2,3,4} (4) {1,1,0,0} = {5,3,5,7}.",
              "Linear conv of the same pair: {1,3,5,7,4} - the tail 4 wrapped into y[0].",
              "Theorem: circular convolution <-> pointwise DFT multiplication.",
              "Zero-pad to L >= N1 + N2 - 1 to make circular behave linearly.",
              "For periodic signals, circular convolution is the natural, correct operation.",
              "Show the modular-index table in exams - the method carries the marks.",
            ],
            callout: {
              type: "exam",
              title: "Always show the wrap",
              body: "In circular convolution numericals, write the (n - m) mod N value under each product term - e.g. for y[0]: indices 0, 3, 2, 1. The visible modular bookkeeping earns the method marks even if one product slips, and it makes the tail-wrapping comparison with linear convolution trivial to state.",
            },
            examQuestions: [
              {
                q: "Define circular convolution and compute the 4-point circular convolution of x[n] = {1, 2, 3, 4} and h[n] = {1, 1, 0, 0}. Compare with the linear convolution and explain any difference.",
                marks: 14,
                outline: [
                  "Definition with (n - m) mod N indexing",
                  "y[0]: terms at indices 0, 3, 2, 1 -> 1 + 0 + 0 + 4 = 5",
                  "y[1]: 1 + 2 = 3; y[2]: 2 + 3 = 5; y[3]: 3 + 4 = 7",
                  "Result {5, 3, 5, 7}",
                  "Linear: {1, 3, 5, 7, 4} - length 5",
                  "The tail 4 wrapped: y[0] = 1 + 4 = 5 - time-aliasing",
                  "Zero-padding to L >= 4+... (here N1 + N2 - 1 = 4 with padding) removes the wrap",
                ],
              },
              {
                q: "State the circular convolution theorem and use it to compute the 4-point circular convolution of {1, 2, 3, 4} with {1, 1, 0, 0} via DFTs.",
                marks: 7,
                outline: [
                  "Theorem: x (N) h <-> X[k]·H[k]",
                  "X = {10, -2 + 2j, -2, -2 - 2j}; H = {2, 1 - j, 0, 1 + j}",
                  "Y[0] = 10·2 = 20; Y[1] = (-2 + 2j)(1 - j) = 4j; Y[2] = 0; Y[3] = (-2 - 2j)(1 + j) = -4j",
                  "Y = {20, 4j, 0, -4j}",
                  "IDFT: y[1] = (1/4)(20 + 4j·j - 4j·(-j)) = (1/4)(12) = 3; full result {5, 3, 5, 7}",
                  "Matches the direct modular computation - theorem verified",
                ],
              },
              {
                q: "A 3-sample impulse response filters a 4-sample signal by a 4-point circular convolution. How many output samples are corrupted by time-aliasing, and what length removes it?",
                marks: 7,
                outline: [
                  "Linear length: 4 + 3 - 1 = 6 samples",
                  "4-point circular keeps 4, wraps 2 tail samples into the first 2 outputs",
                  "Corrupted outputs: y[0] and y[1]",
                  "Fix: L >= 6 (zero-pad both sequences to 6, or next FFT-friendly 8)",
                  "Rule: L >= N1 + N2 - 1 makes circular equal linear",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Linear convolution via the DFT: fast filtering",
            body: [
              "The DFT becomes an engineering tool when it performs linear convolution: zero-pad both sequences to length L >= N1 + N2 - 1, transform each (FFT of Unit IV), multiply pointwise, inverse-transform. The result is EXACTLY the linear convolution - the padding gives the wrapped tail zero-filled ground to land on. The payoff is speed: direct convolution costs N1·N2 multiply-adds, while the FFT route costs about 3 FFTs of length L plus L multiplications, i.e. O(L·log L) - and for long sequences the gap is enormous.",
              "A costed worked example makes the engineering case. Filter a stream of 1,048,576 samples (2^20) with a 64-tap FIR filter. Direct: 64 x 1,048,576 = 6.7 x 10^7 multiply-adds. FFT route with 1024-point blocks: per block, two forward FFTs (input block + stored filter, the filter's FFT computed once) and one inverse - 3 x (1024/2 x 10) = 15,360 complex multiplies, plus 1024 pointwise multiplies; about 10^5 real multiply-adds per 961 output samples (block minus overlap) - roughly 1.1 x 10^5 per block x 1091 blocks = 1.2 x 10^8... but counting complex multiplies properly (4 real mults each) the honest comparison is: direct 6.7 x 10^7 real mults versus FFT ~4.4 x 10^7 - comparable at 64 taps, and decisively better as the filter grows: at 256 taps direct costs 2.7 x 10^8 while the FFT route barely moves. The lesson: the crossover sits near a few dozen taps; beyond it, FFT filtering wins and the gap widens without bound.",
              "Streaming data does not arrive as one convenient block, so two partitioning methods extend the idea. Overlap-add: cut the input into blocks of length L - M + 1 (M = filter length), convolve each block with the filter (linear, via padded FFTs of length L), and ADD the overlapping M - 1 sample tails of consecutive blocks. Overlap-save: keep blocks overlapping by M - 1, perform the full L-point CIRCULAR convolution, and DISCARD the first M - 1 (aliased) samples of each block - the kept portion equals the linear convolution. Both process arbitrarily long streams in fixed memory; the difference is only where the overlap is handled (added at the output vs discarded at the input).",
              "The exam treats this section as method + comparison. Typical questions: 'explain how the DFT computes linear convolution' (the four-step pipeline plus the L >= N1 + N2 - 1 condition), 'compare overlap-add and overlap-save' (a labelled table), and the cost-analysis numerical ('when does FFT filtering beat direct?'). The one sentence to include in every answer: multiplication of DFTs is circular convolution, so ALL of fast filtering is the management of circularity - padding, blocking, and overlap are just bookkeeping for the wrap.",
            ],
            keyTerms: [
              { term: "Fast convolution", definition: "Zero-pad -> FFT -> pointwise multiply -> IFFT; exact linear convolution." },
              { term: "Required length L", definition: "L >= N1 + N2 - 1 so the circular wrap lands on zeros." },
              { term: "Overlap-add", definition: "Block-filter then add M - 1 sample overlaps of consecutive outputs." },
              { term: "Overlap-save", definition: "Circularly convolve overlapping blocks; discard the first M - 1 aliased samples." },
              { term: "Complexity crossover", definition: "FFT filtering wins once the filter length grows past a few dozen taps." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Fast convolution in four stages",
              caption: "The padding makes circular behave linear; the FFT makes it fast.",
              stages: [
                { label: "Zero-pad", note: "both sequences to L >= N1 + N2 - 1" },
                { label: "Forward FFTs", note: "X[k] and H[k], length L" },
                { label: "Pointwise product", note: "Y[k] = X[k]·H[k]" },
                { label: "Inverse FFT", note: "y[n] = linear convolution, exactly" },
              ],
            },
            table: {
              caption: "Overlap-add versus overlap-save for streaming input.",
              headers: ["Aspect", "Overlap-add", "Overlap-save"],
              rows: [
                ["Block content", "fresh samples, length L - M + 1", "overlapping input, length L"],
                ["Convolution type", "linear per block (padded FFT)", "circular per block"],
                ["Overlap handling", "ADD tail of previous output", "DISCARD first M - 1 outputs"],
                ["FFT length", "L (power of 2 preferred)", "L (power of 2 preferred)"],
                ["Output validity", "all samples valid", "first M - 1 discarded as aliased"],
              ],
            },
            bullets: [
              "DFT multiplication is circular convolution; padding converts it to linear.",
              "Pipeline: pad to L >= N1 + N2 - 1, FFT, multiply, IFFT.",
              "Worked cost: 2^20 samples x 64-tap filter = 6.7 x 10^7 direct mults; FFT route comparable at 64 taps, dominant beyond ~128 taps.",
              "Overlap-add: fresh blocks of L - M + 1, add the M - 1 sample tails.",
              "Overlap-save: overlapping blocks, circular convolve, discard the first M - 1.",
              "Both stream arbitrary lengths in fixed memory.",
              "The whole subject of fast filtering is managing circularity.",
            ],
            callout: {
              type: "tip",
              title: "State the condition, then the cost",
              body: "Every fast-convolution answer needs two numbers: the length condition (L >= N1 + N2 - 1) and the complexity comparison (N1·N2 versus O(L log L)). Write both as labelled lines before any block-diagram drawing - they are the marks the examiner scans for.",
            },
            examQuestions: [
              {
                q: "Explain how linear convolution is performed using the DFT. State the required transform length and compare the computational cost with direct convolution for a 256-tap filter applied to 2^20 samples.",
                marks: 14,
                outline: [
                  "Zero-pad both sequences to L >= N1 + N2 - 1",
                  "FFT both, multiply pointwise, inverse FFT - exact linear convolution",
                  "Why padding: DFT multiplication is CIRCULAR; zeros give the tail room",
                  "Direct cost: 256 x 2^20 = 2.7 x 10^8 multiply-adds",
                  "FFT route: ~3 x (L/2)log2L complex mults per block of ~L outputs",
                  "For L = 4096: ~3 x 2048 x 12 = 7.4 x 10^4 complex mults per 3841 outputs -> ~2 x 10^8 real mults total... plus pointwise - comparable to better",
                  "Crossover near tens of taps; advantage grows with filter length",
                ],
              },
              {
                q: "Compare overlap-add and overlap-save methods for FFT-based filtering of a long stream. Include block sizes and where the overlap is handled.",
                marks: 7,
                outline: [
                  "Overlap-add: fresh blocks of L - M + 1; linear (padded) convolution per block",
                  "Add the M - 1 sample overlap of consecutive outputs",
                  "Overlap-save: blocks overlap by M - 1; circular convolution per block",
                  "Discard the first M - 1 (aliased) samples of each block",
                  "Both deliver the exact linear convolution of the full stream",
                  "Choice: overlap-add adds in time domain; overlap-save discards - equal validity",
                ],
              },
              {
                q: "Why does multiplying DFTs of two length-4 sequences NOT generally give their linear convolution? Demonstrate with {1,2,3,4} and {1,1,0,0}.",
                marks: 7,
                outline: [
                  "DFT multiplication implements CIRCULAR convolution",
                  "4-point circular result: {5, 3, 5, 7}",
                  "Linear result: {1, 3, 5, 7, 4} - the tail 4 wrapped into y[0]",
                  "Difference exactly one sample here; more when lengths grow",
                  "Padding to L >= 6 (or 8 for the FFT) removes the wrap",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "The two-dimensional DFT",
            body: [
              "Images and sensor arrays are two-dimensional arrays, and their transform is the 2D DFT: X[k, l] = sum over m = 0..M-1, n = 0..N-1 of x[m, n]·e^(-j2pi(km/M + ln/N)), an M x N array of coefficients with the matching inverse. The k index measures variation down the rows, the l index across the columns; X[0, 0] is the total sum (the DC of the whole image), and the low-k, low-l corner holds the smooth (low-frequency) content while high indices near the edges hold fine detail and edges.",
              "The structural property that makes 2D tractable is SEPARABILITY: the double sum factors into a 1D DFT along one dimension followed by a 1D DFT along the other. Computationally: transform every row (M transforms of length N), then transform every column of the result (N transforms of length M). The cost drops from O(M^2·N^2) for the naive double sum to O(M·N·(M + N)) - for a 1024 x 1024 image, from about 10^12 operations to about 2 x 10^7 with FFTs: a factor of tens of thousands. Separability is the reason image processing pipelines are built entirely from 1D FFT machinery.",
              "A tiny worked example fixes the mechanics: the 2 x 2 image x = [[1, 2], [3, 4]]. Since e^(-jpi·k) = (-1)^k, each transform is a signed sum. X[0, 0] = 1 + 2 + 3 + 4 = 10. X[0, 1] = (1 - 2) + (3 - 4) = -2 (row-wise alternating, then summed down). X[1, 0] = (1 + 2) - (3 + 4) = -4 (column-wise alternating). X[1, 1] = (1 - 2) - (3 - 4) = -1 + 1 = 0. So X = [[10, -2], [-4, 0]] - real here because the image is real and 2 x 2 is its own conjugate grid. The DC 10, one vertical-gradient component (-4), one horizontal-gradient component (-2), and a zero diagonal component. Four coefficients, four orthogonal spatial patterns - the 2D DFT in miniature.",
              "Applications justify the syllabus slot. Image filtering: multiply the 2D DFT by a transfer mask (low-pass blur, high-pass edge enhance, notch removes periodic interference like power-line hum in scanned documents). Compression relatives: JPEG uses the 2D DCT, a cosine cousin of the 2D DFT chosen for its energy compaction. Phase correlation and motion estimation use the phase of the 2D DFT. The exam's 14-marker is typically: define the 2D DFT, prove separability, compute a 2 x 2 or 2 x 3 example, and state one application with its mask - four parts with clean marks, provided the row-then-column order is stated explicitly.",
            ],
            keyTerms: [
              { term: "2D DFT", definition: "X[k, l] = double sum of x[m, n]e^(-j2pi(km/M + ln/N)); an M x N coefficient array." },
              { term: "Separability", definition: "2D DFT = 1D DFT on rows followed by 1D DFT on columns." },
              { term: "DC coefficient", definition: "X[0, 0] = sum of all pixels." },
              { term: "Frequency mask", definition: "2D transfer function multiplied in the 2D DFT domain to filter an image." },
              { term: "2D DCT", definition: "Cosine-based separable cousin used by JPEG for energy compaction." },
            ],
            diagram: {
              kind: "layers",
              title: "Separability: two 1D passes build the 2D DFT",
              caption: "Transform every row, then every column - the double sum factors.",
              layers: [
                { label: "Image x[m, n]", note: "M x N samples" },
                { label: "Row transforms", note: "M DFTs of length N along columns index" },
                { label: "Column transforms", note: "N DFTs of length M along row index" },
                { label: "2D DFT X[k, l]", note: "M x N coefficients; DC at [0, 0]" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "dft2_check.py - the 2 x 2 example and an image spectrum",
              code: `import numpy as np

x = np.array([[1, 2],
              [3, 4]])
X = np.fft.fft2(x)
print(np.round(X.real))       # [[10 -2]
                              #  [-4  0]] - matches the hand computation

# separability check: rows then columns
rows = np.fft.fft(x, axis=1)
cols = np.fft.fft(rows, axis=0)
print(np.allclose(cols, X))   # True`,
            },
            bullets: [
              "2D DFT: X[k, l] = double sum with e^(-j2pi(km/M + ln/N)).",
              "Separable: rows first, then columns (or vice versa) - order irrelevant.",
              "Worked example: [[1, 2], [3, 4]] -> [[10, -2], [-4, 0]].",
              "X[0, 0] = total sum; low indices = smooth content; edges live at high indices.",
              "Cost: naive O(M^2 N^2) vs separable + FFT O(MN(M + N)) - orders of magnitude faster.",
              "Applications: image low/high-pass masks, JPEG's 2D DCT, phase correlation.",
              "For real images, the 2D spectrum has conjugate symmetry in both axes.",
            ],
            callout: {
              type: "tip",
              title: "Say 'rows then columns'",
              body: "The separability proof is two lines, but examiners also want the ORDER stated: apply the 1D DFT along one index for every value of the other, then swap. Write 'row transforms then column transforms (equivalently columns then rows)' - the parenthetical shows you know the order does not matter, which is the actual content of separability.",
            },
            examQuestions: [
              {
                q: "Define the 2D DFT of an M x N array. Prove separability and compute the 2D DFT of x = [[1, 2], [3, 4]].",
                marks: 14,
                outline: [
                  "X[k, l] = sum_m sum_n x[m, n]e^(-j2pi km/M)e^(-j2pi ln/N)",
                  "The exponential factors: e^(-j2pi km/M)·e^(-j2pi ln/N)",
                  "Rearrange the double sum: inner 1D DFT along n, outer along m",
                  "So: row DFTs then column DFTs (order interchangeable)",
                  "Example: X[0,0] = 10; X[0,1] = -2; X[1,0] = -4; X[1,1] = 0",
                  "X = [[10, -2], [-4, 0]] - all real for this tiny real image",
                  "Cost argument: O(MN(M+N)) with FFTs vs O(M^2N^2) naive",
                ],
              },
              {
                q: "Explain how a 2D low-pass filter removes high-frequency noise from an image, and what artifact appears when the mask has a hard cutoff.",
                marks: 7,
                outline: [
                  "2D FFT of the image; multiply by a mask keeping the low-index corner",
                  "Inverse 2D FFT - smooth image, fine detail suppressed",
                  "Hard (rectangular) mask = 2D rectangular window in frequency",
                  "Convolution with a wide spatial sinc - ringing (Gibbs) around edges",
                  "Soft (Gaussian/Butterworth) masks avoid ringing",
                ],
              },
              {
                q: "State the DC coefficient of the 2D DFT and its physical meaning for an image.",
                marks: 7,
                outline: [
                  "X[0, 0] = sum of every pixel value",
                  "Meaning: the image's total brightness (DC level)",
                  "All other coefficients have zero mean contribution",
                  "Practical: subtracting the mean zeroes X[0, 0] - common preprocessing",
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
      title: "Efficient Computation of the DFT (FFT)",
      summary:
        "Unit IV is about speed: why the direct DFT costs O(N^2), how the decimation-in-time FFT halves the problem recursively, the butterfly and bit-reversed ordering that make it run in place, the dual decimation-in-frequency algorithm, the comparison and ordering details of the two, the decomposition of composite N beyond powers of two, and the FFT's two great applications - fast convolution and spectral analysis.",
      chapter: {
        number: "04",
        title: "The FFT",
        intro:
          "Unit IV covers the computational cost of the direct DFT, the radix-2 decimation-in-time FFT, butterfly computation and bit reversal, the decimation-in-frequency FFT, ordering and in-place issues, decomposition for composite N, and the FFT applications in fast convolution and spectrum estimation.",
        inOneBreath:
          "Direct DFT costs N^2 complex multiplies; the radix-2 FFT costs (N/2)·log2(N) by splitting even/odd samples (DIT) or output halves (DIF), stage by stage through log2(N) stages of N/2 butterflies - one complex multiply and two adds each. DIT wants bit-reversed input and yields natural output; DIF is the mirror. Composite N decomposes the same way (radix-4 saves 25 percent); fast convolution and spectral analysis (bin spacing fs/N) are the payoffs.",
        sections: [
          {
            number: "4.1",
            title: "Why the direct DFT is expensive",
            body: [
              "The direct DFT computes each of the N outputs as an N-term sum: X[k] = sum over n of x[n]·e^(-j(2pi/N)kn). Each output needs N complex multiplications and N - 1 complex additions, so the full transform costs N^2 complex multiplications and N(N - 1) complex additions. One complex multiplication is 4 real multiplications and 2 real additions, so the real-operation count is 4N^2 multiplications - the quadratic wall. For N = 1024 that is 1,048,576 complex multiplies for ONE transform; for the 2D image transform of a 1024 x 1024 picture it is 10^12 - prohibitive on any serial processor.",
              "Symmetry tricks trim the constant but not the exponent. For real x[n], conjugate symmetry (section 3.4) halves the work: only k = 0..N/2 need computing, and the n-sum can exploit even/odd decomposition. Even/odd decomposition alone reduces an N-point DFT to two N/2-point DFTs plus N/2 twiddle multiplies - roughly halving the cost. Applied ONCE that is a 2x saving; applied RECURSIVELY, until every DFT is a trivial 2-point, it is the FFT: cost (N/2)·log2(N) complex multiplications and N·log2(N) complex additions. For N = 1024: 5,120 multiplies against 1,048,576 - a 205-fold speedup, and the ratio keeps growing as log2(N)/2 for larger N.",
              "The numbers deserve a table because they ARE the answer to 'why FFT?'. N = 8: 64 versus 12 multiplies (5.3x). N = 64: 4,096 versus 192 (21x). N = 1024: 1,048,576 versus 5,120 (205x). N = 4096: 16.8 million versus 49,152 (341x). The FFT's cost grows nearly linearly - each doubling of N adds only N more butterflies' worth of work - while the direct DFT's cost quadruples. Real-time context seals the argument: a 1024-point transform at fs = 8 kHz must finish within 128 ms to keep pace; at 100 M multiplies/s the direct DFT needs 10.5 ms per transform (feasible only for a few channels), while the FFT needs 51 microseconds - leaving the processor free for everything else.",
              "The exam question is standard and deserves a standard answer: state the direct cost with the formula, state the FFT cost with its formula, tabulate for one or two N values, and close with the reason - the FFT reuses the periodicity and symmetry of the twiddle factors W_N^kn so that no product is computed twice. The phrase 'divide and conquer' belongs in the first line; the numbers belong in the table; the twiddle-reuse sentence earns the last mark.",
            ],
            keyTerms: [
              { term: "Direct DFT cost", definition: "N^2 complex multiplications and N(N - 1) complex additions." },
              { term: "FFT cost", definition: "(N/2)·log2(N) complex multiplications, N·log2(N) additions for radix-2." },
              { term: "Twiddle factor", definition: "W_N^k = e^(-j2pi·k/N); the FFT reuses them instead of recomputing." },
              { term: "Divide and conquer", definition: "Split the DFT into smaller DFTs, combine linearly, recurse to 2-point DFTs." },
              { term: "Speedup", definition: "N^2 / ((N/2)log2N) = 2N/log2N: 205x at N = 1024." },
            ],
            diagram: {
              kind: "compare",
              title: "Direct DFT versus FFT",
              caption: "Same exact result, wildly different operation counts.",
              left: {
                heading: "Direct DFT",
                items: [
                  "N outputs x N-term sums",
                  "N^2 complex multiplications",
                  "Grows quadratically: 4x cost per doubling of N",
                  "N = 1024: 1,048,576 complex mults",
                  "Twiddle factors recomputed for every (k, n) pair",
                ],
              },
              right: {
                heading: "Radix-2 FFT",
                items: [
                  "log2(N) stages of N/2 butterflies",
                  "(N/2)·log2(N) complex multiplications",
                  "Grows nearly linearly: 2x + a little per doubling",
                  "N = 1024: 5,120 complex mults - 205x faster",
                  "Twiddles reused across stages; N/2 stored values",
                ],
              },
            },
            table: {
              caption: "Complex multiplication counts as N grows.",
              headers: ["N", "Direct: N^2", "FFT: (N/2)log2(N)", "Speedup"],
              rows: [
                ["8", "64", "12", "5.3x"],
                ["64", "4,096", "192", "21x"],
                ["1024", "1,048,576", "5,120", "205x"],
                ["4096", "16,777,216", "49,152", "341x"],
              ],
            },
            bullets: [
              "Direct DFT: N^2 complex multiplies - the quadratic wall.",
              "One complex multiply = 4 real multiplies + 2 real adds.",
              "FFT: (N/2)·log2(N) complex multiplies via recursive halving.",
              "N = 1024: 5,120 vs 1,048,576 - a 205-fold speedup.",
              "Real-time: 1024-point FFT at fs = 8 kHz takes ~51 microseconds at 100 M mult/s.",
              "The gain comes from reusing twiddle factors and symmetry.",
              "Speedup 2N/log2(N) grows without bound as N increases.",
            ],
            callout: {
              type: "exam",
              title: "Quote both formulas, then one number",
              body: "The cost question is answered in three lines: direct N^2, FFT (N/2)·log2(N), one concrete comparison (1024 -> 205x). Adding the reason (twiddle reuse, divide and conquer) completes it. Skipping the concrete number is the common way to lose half the marks - always tabulate at least one N.",
            },
            examQuestions: [
              {
                q: "Derive the computational complexity of the direct DFT and of the radix-2 FFT. Compare the two for N = 1024 in complex multiplications and comment on real-time feasibility.",
                marks: 14,
                outline: [
                  "Direct: each X[k] needs N complex mults; N outputs -> N^2",
                  "Complex additions: N(N - 1)",
                  "FFT: log2(N) stages x N/2 butterflies; 1 complex mult per butterfly",
                  "Total (N/2)·log2(N) = 512 x 10 = 5,120 complex mults at N = 1024",
                  "Direct at N = 1024: 1,048,576 - speedup 204.8x",
                  "Real-time: 51 microseconds vs 10.5 milliseconds at 100 M mult/s",
                  "Reason: twiddle factor reuse + recursive symmetry",
                ],
              },
              {
                q: "Explain why the FFT is called a divide-and-conquer algorithm and what is gained by reusing twiddle factors.",
                marks: 7,
                outline: [
                  "N-point DFT split into two N/2-point DFTs (even/odd samples)",
                  "Each half is split again - recursion until 2-point DFTs",
                  "Combine stage: butterflies using W_N^k",
                  "Twiddle periodicity W_N^(k+N/2) = -W_N^k halves the multiplies",
                  "Same twiddles serve many butterfly positions - compute once, store N/2",
                ],
              },
              {
                q: "Compute the FFT speedup factor for N = 4096 and state how it scales with N.",
                marks: 7,
                outline: [
                  "Direct: 4096^2 = 16,777,216 complex mults",
                  "FFT: (4096/2)·12 = 49,152",
                  "Speedup: 16,777,216/49,152 = 341x",
                  "Scaling: 2N/log2(N) - doubles N and speedup roughly doubles",
                  "The FFT cost is nearly linear in N; the direct cost is quadratic",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Radix-2 decimation-in-time FFT",
            body: [
              "Decimation-in-time (DIT) splits the INPUT: separate x[n] into even-indexed samples x[0], x[2], x[4], ... and odd-indexed samples x[1], x[3], x[5], .... The N-point DFT becomes X[k] = E[k] + W_N^k·O[k] for k = 0..N/2 - 1 and X[k + N/2] = E[k] - W_N^k·O[k], where E is the N/2-point DFT of the even samples, O the N/2-point DFT of the odd samples, and W_N^k = e^(-j2pi·k/N) the twiddle factor. The algebra rests on two facts: W_N^(2kn) = W_(N/2)^kn (the even part needs only N/2-point twiddles) and W_N^(k + N/2) = -W_N^k (the sign flip that pairs the outputs).",
              "Recursion does the rest: each N/2-point DFT splits again into N/4-point DFTs, until every transform is a 2-point DFT (two adds, no multiplies). For N = 8 that is log2(8) = 3 stages: stage 1 computes four 2-point DFTs on the pairs (x[0], x[4]), (x[1], x[5]), (x[2], x[6]), (x[3], x[7]) - note the bit-reversed pairing; stage 2 combines pairs into two 4-point DFTs with twiddles W8^0 = 1 and W8^2 = -j; stage 3 combines into the full 8-point DFT with twiddles W8^0 = 1, W8^1 = 0.707 - 0.707j, W8^2 = -j, W8^3 = -0.707 - 0.707j. Each stage's butterflies write their two outputs back into the same two locations they read from - the in-place property that makes the FFT fit in N memory cells.",
              "The butterfly is the atom of the algorithm: given inputs P and Q, outputs are P + W·Q and P - W·Q - one complex multiplication, one addition, one subtraction. Total: N/2 butterflies per stage, log2(N) stages, (N/2)·log2(N) butterflies overall. The twiddle factors per stage are powers of W_(2^s) with s the stage number, and every stage reuses the same small set - at most N/2 distinct values, most of them trivial (1 and -j). This reuse is why implementations precompute a twiddle table once.",
              "Drawing the signal flow graph for N = 8 is a guaranteed exam task, and the method matters: draw the input column in BIT-REVERSED order (x[0], x[4], x[2], x[6], x[1], x[5], x[3], x[7]), draw three columns of butterflies, connect stage-to-stage with the crossing pattern (upper-lower pairing per half), and label every twiddle branch. The output column emerges in natural order. The same graph read right-to-left, with the twiddles inverted, is the inverse FFT - one more economy of the DIT structure.",
            ],
            keyTerms: [
              { term: "Decimation in time", definition: "Split the input into even and odd samples; combine half-size DFTs with twiddles." },
              { term: "DIT butterfly", definition: "Outputs P + W·Q and P - W·Q; one complex multiply, two adds." },
              { term: "Stage", definition: "One column of N/2 butterflies; log2(N) stages for radix-2." },
              { term: "In-place", definition: "Butterfly outputs overwrite their inputs; N memory cells suffice." },
              { term: "W_N^k", definition: "Twiddle factor e^(-j2pi·k/N); W_N^(k+N/2) = -W_N^k drives the output pairing." },
            ],
            diagram: {
              kind: "pipeline",
              title: "8-point DIT: three stages from bit-reversed input to natural output",
              caption: "Stage 1: four 2-point DFTs. Stage 2: two 4-point. Stage 3: one 8-point.",
              stages: [
                { label: "Bit-reverse input", note: "x[0], x[4], x[2], x[6], x[1], x[5], x[3], x[7]" },
                { label: "Stage 1", note: "four 2-point DFTs; twiddle 1 only" },
                { label: "Stage 2", note: "two 4-point DFTs; twiddles 1, -j" },
                { label: "Stage 3", note: "one 8-point DFT; twiddles 1, 0.707 - 0.707j, -j, -0.707 - 0.707j" },
                { label: "Natural-order output", note: "X[0]..X[7]" },
              ],
            },
            table: {
              caption: "Stage-by-stage twiddle factors for N = 8 DIT.",
              headers: ["Stage", "Transform size", "Twiddles used", "Butterflies"],
              rows: [
                ["1", "2-point x 4", "W2^0 = 1", "4"],
                ["2", "4-point x 2", "W4^0 = 1, W4^1 = -j", "4"],
                ["3", "8-point x 1", "W8^0, W8^1, W8^2, W8^3", "4"],
                ["Total", "-", "5 non-trivial values", "12 = (8/2)·3"],
              ],
            },
            bullets: [
              "DIT splits the input: even samples -> E[k], odd samples -> O[k].",
              "Combine: X[k] = E[k] + W_N^k·O[k]; X[k + N/2] = E[k] - W_N^k·O[k].",
              "Butterfly: 1 complex multiply + 1 add + 1 subtract, in place.",
              "N = 8: 3 stages, 4 butterflies each, 12 butterflies total.",
              "Stage twiddles for N = 8: {1}, {1, -j}, {1, 0.707 - 0.707j, -j, -0.707 - 0.707j}.",
              "Input in bit-reversed order; output in natural order.",
              "Reading the flow graph backwards with W^-1 gives the inverse FFT.",
            ],
            callout: {
              type: "tip",
              title: "Draw N = 8, not N = 16",
              body: "When asked to draw the FFT signal flow graph, choose N = 8: three stages fit on the answer sheet, all twiddles are simple, and the bit-reversal is visible. An N = 16 drawing doubles the clutter without adding any concept the examiner can reward.",
            },
            examQuestions: [
              {
                q: "Derive the decimation-in-time FFT decomposition for N = 8, draw its signal flow graph with all twiddle factors labelled, and count the complex multiplications saved compared with the direct DFT.",
                marks: 14,
                outline: [
                  "Split x[n] into even {x0, x2, x4, x6} and odd {x1, x3, x5, x7}",
                  "X[k] = E[k] + W8^k·O[k]; X[k + 4] = E[k] - W8^k·O[k], k = 0..3",
                  "Recurse: 4-point DFTs split into 2-point DFTs",
                  "Graph: bit-reversed input column, 3 stages of 4 butterflies, natural output",
                  "Stage twiddles: {1}; {1, -j}; {1, 0.707 - 0.707j, -j, -0.707 - 0.707j}",
                  "Total butterflies 12 -> 12 complex mults vs 64 direct",
                  "Savings: 52 multiplies (5.3x) at N = 8",
                ],
              },
              {
                q: "Show that the DIT decomposition of an N-point DFT requires exactly two N/2-point DFTs plus N/2 twiddle multiplications, and explain the role of W_N^(k + N/2) = -W_N^k.",
                marks: 7,
                outline: [
                  "X[k] = sum even x[2r]W_N^(2rk) + sum odd x[2r + 1]W_N^((2r + 1)k)",
                  "W_N^(2rk) = W_(N/2)^(rk): even sum is an N/2-point DFT (E[k])",
                  "Odd sum: W_N^k · (N/2-point DFT of odd samples) = W_N^k·O[k]",
                  "Second half: substitute k + N/2; W_N^(k + N/2) = -W_N^k flips the sign",
                  "So one pair of butterflies serves two outputs - the efficiency source",
                ],
              },
              {
                q: "What does 'in-place computation' mean in the FFT context and why does the DIT butterfly have this property?",
                marks: 7,
                outline: [
                  "Each butterfly writes its two outputs into its own two input locations",
                  "Memory need: exactly N cells (plus N/2 twiddle storage)",
                  "Outputs of stage s are the inputs of stage s + 1 at the same positions",
                  "After log2(N) stages the array holds the DFT",
                  "Hardware benefit: no extra buffers - vital on DSP chips",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "The butterfly and bit-reversed ordering",
            body: [
              "The radix-2 butterfly deserves its own section because it is where all the arithmetic - and all the exam's numerical marks - live. Inputs P and Q with twiddle W: outputs P + W·Q (upper) and P - W·Q (lower). In complex arithmetic that is 4 real multiplies, 2 real adds, 2 real subtracts (6 real additions total with the multiply's 2 adds). The special twiddles are free: W = 1 costs no multiply at all (stages use it N/2 times each), W = -j is two swaps and sign changes. Exploiting trivial twiddles cuts the effective multiplication count by roughly a third in real implementations.",
              "Bit-reversed ordering is the DIT input arrangement, and it is mechanical: write each index in binary with log2(N) bits, reverse the bits, read the new index. For N = 8 (3 bits): 0 (000) -> 0, 1 (001) -> 4, 2 (010) -> 2, 3 (011) -> 6, 4 (100) -> 1, 5 (101) -> 5, 6 (110) -> 3, 7 (111) -> 7. So the DIT input column is x[0], x[4], x[2], x[6], x[1], x[5], x[3], x[7]. Why it appears: each decimation step separates even/odd indices by looking at one more bit from the LEAST significant end; after log2(N) steps the original index has been read backwards. The output emerges in natural order - and the decimation-in-frequency algorithm is exactly the mirror image (natural in, bit-reversed out).",
              "The full N = 8 walk-through with real numbers proves the machinery end to end. Take the constant sequence x[n] = {1, 1, 1, 1, 1, 1, 1, 1}, whose DFT must be X[0] = 8 and X[k] = 0 for k = 1..7 - a built-in answer key. Bit-reversed input is unchanged (all ones). Stage 1: four (1, 1) butterflies give {2, 0} four times - array {2, 0, 2, 0, 2, 0, 2, 0}. Stage 2 (twiddles 1, -j): in each half, the (2, 2) butterfly with W = 1 gives 4 and 0; the (0, 0) butterfly with W = -j gives 0 and 0 - array {4, 0, 0, 0, 4, 0, 0, 0}. Stage 3 (twiddles 1, 0.707 - 0.707j, -j, -0.707 - 0.707j): the (4, 4) butterfly with W = 1 gives 8 and 0; every other butterfly operates on zeros - final array {8, 0, 0, 0, 0, 0, 0, 0}. The hand check (DC = sum of samples = 8; a constant has no other harmonics) confirms the graph. Running one full 8-point FFT by hand in the exam - with the butterfly table - is exactly what a 14-mark question looks like.",
              "Implementation notes that earn viva and numerical marks: twiddle factors are computed once (W_N^k = cos(2pi·k/N) - j·sin(2pi·k/N)) and stored; the butterflies of one stage are independent, which is what makes FFTs parallelize across a DSP's MAC units; and the same in-place butterfly with conjugated twiddles performs the inverse DFT (with the 1/N scaling applied at the end). The code below shows the whole radix-2 DIT in a dozen lines - reading it once makes the graph unforgettable.",
            ],
            keyTerms: [
              { term: "Butterfly", definition: "P + W·Q and P - W·Q from inputs P, Q: the FFT's single arithmetic atom." },
              { term: "Bit reversal", definition: "DIT input order: reverse the log2(N) binary digits of each index." },
              { term: "Trivial twiddles", definition: "W = 1 and W = -j butterflies need no multiplication - free parallelism." },
              { term: "Twiddle table", definition: "Precomputed W_N^k = cos(2pi k/N) - j sin(2pi k/N), N/2 values." },
              { term: "Inverse via FFT", definition: "Same butterflies with conjugated twiddles and final 1/N scaling." },
            ],
            diagram: {
              kind: "flow",
              title: "One DIT butterfly, end to end",
              caption: "Two inputs, one twiddle, two outputs - written back in place.",
              steps: [
                { label: "Read P", note: "upper input of the butterfly" },
                { label: "Read Q", note: "lower input of the butterfly" },
                { label: "Multiply Q by W", note: "4 real mults; skip if W = 1 or -j" },
                { label: "Add and subtract", note: "upper = P + WQ, lower = P - WQ" },
                { label: "Write back", note: "same two cells - in place" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "radix2_dit.py - the whole algorithm in-place",
              code: `import numpy as np, math

def fft_dit(x):
    n = len(x)
    X = x.astype(complex)
    # bit-reverse permutation
    j = 0
    for i in range(1, n):
        bit = n >> 1
        while j & bit: j ^= bit; bit >>= 1
        j |= bit
        if i < j: X[i], X[j] = X[j], X[i]
    # stages of butterflies
    size = 2
    while size <= n:
        w_step = np.exp(-2j * np.pi / size)
        for start in range(0, n, size):
            w = 1.0 + 0j
            for k in range(size // 2):
                t = w * X[start + k + size // 2]
                X[start + k + size // 2] = X[start + k] - t
                X[start + k] = X[start + k] + t
                w *= w_step
        size *= 2
    return X

print(np.round(fft_dit(np.ones(8)), 3))
# [8, 0, 0, 0, 0, 0, 0, 0] - matches np.fft.fft(np.ones(8))`,
            },
            bullets: [
              "Butterfly arithmetic: upper = P + W·Q, lower = P - W·Q.",
              "W = 1 butterflies are pure adds; implementations skip the multiply.",
              "Bit reversal (N = 8): 0, 4, 2, 6, 1, 5, 3, 7 - read binary indices backwards.",
              "DIT: bit-reversed in, natural out. DIF: natural in, bit-reversed out.",
              "Worked check: constant {1 x 8} -> X[0] = 8, all other bins 0.",
              "Stage butterflies are independent - FFTs parallelize naturally.",
              "Conjugated twiddles + 1/N give the inverse DFT with the same hardware.",
            ],
            callout: {
              type: "exam",
              title: "The constant-sequence answer check",
              body: "Two known 8-point results verify any hand-drawn graph: the constant {1,1,...,1} gives X[0] = 8 and all other bins 0; the impulse {1,0,...,0} gives all bins equal to 1. Trace both through your graph before submitting - thirty seconds that catch every crossing error.",
            },
            examQuestions: [
              {
                q: "Explain the radix-2 butterfly operation with its real-operation count. Write the bit-reversed input order for an 8-point DIT FFT and justify why it arises.",
                marks: 14,
                outline: [
                  "Butterfly: P + W·Q and P - W·Q; 1 complex mult = 4 real mults, 6 real adds",
                  "Trivial twiddles W = 1, -j need no multiplication",
                  "Bit reversal: reverse the 3-bit binary of each index",
                  "Order: x[0], x[4], x[2], x[6], x[1], x[5], x[3], x[7]",
                  "Reason: three successive even/odd decimations read index bits LSB-first",
                  "Output appears in natural order 0..7",
                ],
              },
              {
                q: "Compute the 8-point DFT of the constant sequence x[n] = {1, 1, 1, 1, 1, 1, 1, 1} using the DIT butterfly stages, showing the intermediate arrays.",
                marks: 14,
                outline: [
                  "Bit-reversed input: unchanged - all ones",
                  "Stage 1: four (1, 1) butterflies -> {2, 0} each: array {2, 0, 2, 0, 2, 0, 2, 0}",
                  "Stage 2 (W = 1, -j): (2, 2) -> 4 and 0; (0, 0) -> 0, 0: array {4, 0, 0, 0, 4, 0, 0, 0}",
                  "Stage 3: (4, 4) with W = 1 -> 8 and 0; all-zero butterflies stay zero",
                  "Final: X[0] = 8, X[k] = 0 for k = 1..7",
                  "Check: DC bin = sum of samples = 8; a constant has only DC",
                ],
              },
              {
                q: "How is the inverse DFT computed with the same FFT hardware?",
                marks: 7,
                outline: [
                  "IDFT differs by exponent sign and the 1/N factor",
                  "Use conjugated twiddles W^-1 in the same butterflies",
                  "Scale the final array by 1/N (or 1/N^2 for the two-conjugation trick)",
                  "Alternative: conjugate input, forward FFT, conjugate output",
                  "Same in-place memory and butterfly count",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Decimation-in-frequency FFT",
            body: [
              "Decimation-in-frequency (DIF) is DIT's mirror image: it decimates the OUTPUT instead of the input. Split X[k] into the first half (k = 0..N/2 - 1) and second half (k = N/2..N - 1); after the algebra with W_N^(k + N/2) = -W_N^k, the first half X[k] for k < N/2 equals the N/2-point DFT of g[n] = x[n] + x[n + N/2] (sums of paired samples), and the second half equals the N/2-point DFT of h[n] = (x[n] - x[n + N/2])·W_N^n (differences times twiddles). The input butterfly is therefore: compute the sum pair (upper output) and the difference-times-twiddle pair (lower output), then recurse on each half independently.",
              "The DIF butterfly from inputs P = x[n] and Q = x[n + N/2] outputs P + Q (upper) and (P - Q)·W_N^n (lower) - the multiplication happens AFTER the subtraction, exactly reversed from DIT where it happens before. Consequences: the input enters in natural order (no pre-shuffle), the output emerges in bit-reversed order (post-shuffle needed), and the total work is identical - (N/2)·log2(N) butterflies, log2(N) stages. For N = 8: stage 1 pairs (x0, x4), (x1, x5), (x2, x6), (x3, x7) in natural order with twiddles W8^0..W8^3; stage 2 works on each 4-sample half with W4 twiddles; stage 3 computes 2-point DFTs with W = 1 only.",
              "Which algorithm is 'better'? Neither - the counts are identical, and the choice is logistical. DIT suits hardware that can pre-shuffle input memory (bit-reversal done once at acquisition) and needs natural-order output for immediate filtering; DIF suits pipelines where input arrives naturally (ADC stream) and the consumer can absorb a bit-reversed spectrum (e.g. power-spectrum displays, where only |X[k]|^2 matters and the ordering is irrelevant since magnitude is unchanged by permutation). Real DSP libraries ship both; the classic textbook FFT (and most teaching) uses DIT because its butterflies mirror the convolution-structure diagrams of Unit II.",
              "The exam contrast question is predictable: 'compare DIT and DIF with a table'. The rows that earn full marks: where the decimation happens (input vs output), where the twiddle multiply sits in the butterfly (before vs after the subtract), input/output ordering (bit-reversed/natural vs natural/bit-reversed), computational count (identical), in-place property (both), and typical use. Add the sentence 'they compute the same transform, differing only in the order operations are sequenced' and the answer is complete. A 14-marker usually adds 'draw the DIF flow graph for N = 8' - same drawing discipline as 4.2, mirrored.",
            ],
            keyTerms: [
              { term: "Decimation in frequency", definition: "Split the output spectrum into halves; recurse on input sums and differences." },
              { term: "DIF butterfly", definition: "Upper = P + Q; lower = (P - Q)·W - multiply after the subtract." },
              { term: "Natural input, bit-reversed output", definition: "DIF's ordering signature - the mirror of DIT." },
              { term: "Power spectrum use", definition: "|X[k]|^2 is permutation-invariant, so DIF's scrambled output costs nothing there." },
              { term: "Equal cost", definition: "DIF and DIT both cost (N/2)·log2(N) butterflies." },
            ],
            diagram: {
              kind: "fork",
              title: "Where do we decimate?",
              caption: "The two FFT families differ only in which side is split first.",
              start: "Choose the FFT structure",
              branches: [
                { label: "Split the input (even/odd)", outcome: "DIT: bit-reversed input, natural output; multiply before subtract", good: true },
                { label: "Split the output (first/second half)", outcome: "DIF: natural input, bit-reversed output; multiply after subtract", good: true },
                { label: "Output consumed as |X|^2", outcome: "either works - magnitude ignores ordering", good: true },
                { label: "Same hardware for both", outcome: "identical (N/2)log2N butterflies; choice is logistical", good: true },
              ],
            },
            table: {
              caption: "DIT versus DIF, row by row.",
              headers: ["Aspect", "Decimation-in-time", "Decimation-in-frequency"],
              rows: [
                ["Decimates", "input (even/odd samples)", "output (first/second half of X[k])"],
                ["Butterfly", "P ± W·Q (multiply first)", "(P ± Q)·W (multiply last)"],
                ["Input order", "bit-reversed", "natural"],
                ["Output order", "natural", "bit-reversed"],
                ["Complex multiplies", "(N/2)·log2(N)", "(N/2)·log2(N) - identical"],
                ["In-place", "yes", "yes"],
                ["Typical use", "teaching; filtering chains", "spectrum analyzers; ADC-fed pipelines"],
              ],
            },
            bullets: [
              "DIF recurses on g[n] = x[n] + x[n + N/2] and h[n] = (x[n] - x[n + N/2])W_N^n.",
              "DIF butterfly: upper = P + Q, lower = (P - Q)·W - multiply after subtract.",
              "Natural input, bit-reversed output - DIT's mirror.",
              "Cost identical to DIT: log2(N) stages, N/2 butterflies each.",
              "For N = 8: stage 1 uses W8^0..W8^3 on natural pairs; last stage is W = 1 only.",
              "Power-spectrum applications are immune to the bit-reversed output.",
              "Both run in place on N memory cells.",
            ],
            callout: {
              type: "warning",
              title: "The ordering trap",
              body: "Exam questions love to hand you a DIF graph and ask for the output order, or vice versa. Memorize the pair: DIT = scrambled in, natural out; DIF = natural in, scrambled out. Writing 'the input is in natural order' for a DIT graph - or reading a DIF output column as natural - is the classic lost mark.",
            },
            examQuestions: [
              {
                q: "Derive the decimation-in-frequency decomposition and draw the 8-point DIF signal flow graph, labelling butterfly operations and twiddle factors.",
                marks: 14,
                outline: [
                  "Split X[k]: first half from g[n] = x[n] + x[n + N/2]; second half from h[n] = (x[n] - x[n + N/2])·W_N^n",
                  "DIF butterfly: upper = P + Q, lower = (P - Q)·W",
                  "Graph: natural input column x[0..7]; stage 1 twiddles W8^0..W8^3",
                  "Stage 2: two 4-sample halves with W4 twiddles",
                  "Stage 3: 2-point DFTs with W = 1",
                  "Output column bit-reversed: X[0], X[4], X[2], X[6], X[1], X[5], X[3], X[7]",
                  "Count: 12 butterflies - same as DIT",
                ],
              },
              {
                q: "Compare DIT and DIF FFTs in a tabular form covering decimation side, butterfly operation, ordering, and computational cost.",
                marks: 7,
                outline: [
                  "DIT decimates input; DIF decimates output",
                  "DIT multiplies before the subtract; DIF after",
                  "DIT: bit-reversed in / natural out; DIF: natural in / bit-reversed out",
                  "Both (N/2)·log2(N) butterflies, both in place",
                  "Choice is logistical: pre-shuffled memory vs natural ADC stream",
                ],
              },
              {
                q: "Why does a power-spectrum display not care whether its FFT is DIT or DIF?",
                marks: 7,
                outline: [
                  "Display shows |X[k]|^2",
                  "Bit reversal is a permutation of bin order",
                  "Permutation does not change the multiset of magnitudes",
                  "So DIF's scrambled output plots the same spectrum",
                  "Only bin LABELS need remapping if exact frequencies are reported",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Ordering, index maps and in-place operation",
            body: [
              "Ordering is the FFT's bookkeeping skeleton, and three facts organize it. First, the bit-reversal permutation is an involution: reversing the bits twice returns the original index, so the same permutation unscrambles output as scrambled input. Second, the permutation can be applied on either side (DIT applies it at input, DIF at output) but never both. Third, an alternative 'natural-order' FFT exists that avoids bit reversal entirely at the cost of either doubled memory (buffered transforms) or more complex index arithmetic (constant-geometry algorithms) - which is why the in-place, bit-reversed radix-2 remains the embedded standard.",
              "The index map for general (composite) N makes this precise: for N = N1·N2, write n = N2·n1 + n2 and k = k2 + N1·k1... (the Cooley-Tukey map); the N-point DFT becomes N2 DFTs of length N1 followed by twiddle multiplications and N1 DFTs of length N2. Specializing N1 = 2 gives the DIT stages; specializing N1 = 4 gives radix-4. The map is also the clean way to state MEMORY: in-place radix-2 needs N complex cells plus N/2 twiddle cells; the buffered natural-order variant needs 2N cells. An exam numerical: 'state the memory and index order for a 1024-point in-place FFT' - answer: 1024 complex cells, bit-reversed input, natural output, 512 stored twiddles, 10 stages of 512 butterflies.",
              "In-place operation is the property that made the FFT an embedded staple: every butterfly reads its two inputs from cells i and j and writes its two outputs back to the same cells, so the array is transformed progressively in its own footprint. Two practical consequences: (a) the data and twiddle tables must not overlap - reserve N + N/2 complex cells; (b) overwriting destroys the input, so applications needing both domains (overlap-add filtering of section 3.6) must copy the block first. On DSP chips the butterfly also maps to one MAC instruction pair - multiply-accumulate and multiply-subtract - which is why FFT benchmarks are quoted in butterflies per cycle.",
              "The exam asks this section as short numericals and state-verification: 'how many stages, butterflies, twiddles and memory cells for N = 256?' (8 stages, 128 butterflies/stage, 1024 butterflies, 128 twiddles, 256 + 128 cells); 'trace the bit-reversal of index 13 for N = 16' (13 = 1101 -> 1011 = 11); 'why must the input buffer be copied before an in-place FFT in an overlap-add filter?' (the butterfly overwrites the block; the filter needs original samples in the next stage). Small questions, but each one is a full mark for a one-line answer - the cheapest marks on the paper.",
            ],
            keyTerms: [
              { term: "Bit-reversal involution", definition: "The permutation is its own inverse - same map scrambles and unscrambles." },
              { term: "Index map", definition: "For N = N1·N2: n = N2·n1 + n2 splits the transform into smaller DFTs." },
              { term: "In-place", definition: "Butterflies overwrite their own inputs: N cells transform the whole array." },
              { term: "Buffered FFT", definition: "Natural-order variant using 2N cells to avoid bit reversal." },
              { term: "Memory budget", definition: "In-place radix-2: N data cells + N/2 twiddle cells." },
            ],
            diagram: {
              kind: "matrix",
              title: "Input and output ordering combinations",
              caption: "Where the permutation sits decides the algorithm family.",
              axes: { x: "Input order (natural -> bit-reversed)", y: "Output order (natural -> bit-reversed)" },
              quadrants: [
                { label: "Natural in, natural out", note: "needs extra shuffling passes or 2N memory (buffered FFT)" },
                { label: "Bit-reversed in, natural out", note: "DIT - the classic radix-2" },
                { label: "Natural in, bit-reversed out", note: "DIF - the mirror algorithm" },
                { label: "Bit-reversed in, bit-reversed out", note: "equivalent to DIT/DIF with a reversed stage order" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "bitrev.py - the permutation and the memory count",
              code: `import numpy as np

def bit_reverse(i, log2n):
    r = 0
    for _ in range(log2n):
        r = (r << 1) | (i & 1)
        i >>= 1
    return r

print([bit_reverse(i, 3) for i in range(8)])
# [0, 4, 2, 6, 1, 5, 3, 7] - the DIT input order for N = 8

N = 256
print(f"stages: {int(np.log2(N))}, butterflies/stage: {N // 2}",
      f"total: {(N // 2) * int(np.log2(N))}, twiddles: {N // 2}",
      f"memory: {N} data + {N // 2} twiddle cells")
# stages: 8, butterflies/stage: 128, total: 1024, twiddles: 128, memory: 256 + 128`,
            },
            bullets: [
              "Bit reversal is an involution - apply it on input (DIT) or output (DIF), never both.",
              "Cooley-Tukey index map generalizes the split to N = N1·N2.",
              "In-place radix-2: N complex data cells + N/2 twiddle cells.",
              "N = 256: 8 stages, 1024 butterflies, 128 twiddles, 384 cells.",
              "Bit-reversal example (N = 16): index 13 (1101) -> 11 (1011).",
              "In-place overwrites the input - copy the block before overlap-add filtering.",
              "Butterflies are independent within a stage: natural DSP parallelism.",
            ],
            callout: {
              type: "tip",
              title: "Count, then verify",
              body: "FFT bookkeeping questions answer themselves with one formula chain: stages = log2(N); butterflies total (N/2)·log2(N); twiddles N/2; memory N + N/2. Compute the chain, then sanity-check against N = 8 (3 stages, 12 butterflies, 4 twiddles, 12 cells) before writing.",
            },
            examQuestions: [
              {
                q: "For a 256-point in-place radix-2 FFT, state the number of stages, total butterflies, stored twiddle factors and memory cells; trace the bit-reversal of index 13 for a 16-point FFT.",
                marks: 14,
                outline: [
                  "Stages: log2(256) = 8",
                  "Butterflies per stage: 128; total 8 x 128 = 1024",
                  "Complex multiplies: 1024 (one per butterfly)",
                  "Stored twiddles: 128 (W_256^0 .. W_256^127)",
                  "Memory: 256 complex data cells + 128 twiddle cells",
                  "Bit reversal, 4 bits: 13 = 1101 -> 1011 = 11",
                  "Output in natural order (DIT assumed)",
                ],
              },
              {
                q: "Explain why an in-place FFT cannot be used directly inside an overlap-add fast-convolution loop without copying the input block.",
                marks: 7,
                outline: [
                  "In-place butterflies overwrite the input array",
                  "Overlap-add needs the ORIGINAL block samples again",
                  "The block contributes to the current output AND the next block's overlap",
                  "Fix: copy the block (or restructure to buffered FFT)",
                  "Cost: one extra N-cell buffer per channel",
                ],
              },
              {
                q: "What is the Cooley-Tukey index map for N = N1·N2 and what does it specialize to for N1 = 2?",
                marks: 7,
                outline: [
                  "n = N2·n1 + n2; k = k2 + N1·k1 (with ranges n1 < N1, n2 < N2)",
                  "Double sum factors into N2 length-N1 DFTs, twiddles, N1 length-N2 DFTs",
                  "N1 = 2: the even/odd split of decimation-in-time",
                  "N1 = 4: radix-4 stages",
                  "The map is the general form of every FFT stage",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Decomposition for composite N",
            body: [
              "Radix-2 requires N = 2^v, but practical record lengths are often composite: N = 60, 120, 1000. The Cooley-Tukey map handles any factorization N = N1·N2 recursively: an N-point DFT becomes N2 transforms of length N1 (or N1 of length N2), twiddle multiplications, and the dual set of transforms - the same divide-and-conquer, generalized. When every factor is the same radix r, the algorithm is radix-r; mixed factors give mixed-radix; the choices interact with butterfly cost.",
              "Butterfly economics decide the radix. A radix-2 butterfly costs 1 complex multiply (with one trivial W). A radix-4 butterfly combines four inputs and costs 3 complex multiplies (its twiddles are W4^k for k = 0..3, one of which is trivial) but handles twice the data per stage - so radix-4 needs log4(N) stages of (3N/4) butterflies: total (3N/4)·log4(N) multiplies. For N = 4096: radix-2 gives (4096/2)·12 = 24,576; radix-4 gives (3·4096/4)·6 = 18,432 - a 25 percent saving. Split-radix goes further by mixing a radix-2 and two radix-3... in structure: one radix-2 sub-transform plus two radix-4 sub-transforms per stage, achieving about 4N·log2(N) real operations - the practical minimum for powers of two.",
              "Arbitrary composite N decomposes into its prime factors: N = 60 = 4·3·5 runs as a radix-4 stage, a radix-3 stage, and a radix-5 stage (each butterfly larger but the total still O(N·sum of factors)). Prime-length N = 2, 3, 5, 7 butterflies are small dedicated blocks. For large PRIME N (no useful factors - e.g. N = 4093), Cooley-Tukey fails and the standard fix is Bluestein's chirp-z transform, which converts the DFT into a convolution computed by (of all things) a power-of-two FFT - one more layer of the same idea. The exam's scope is the factorable case: derive the N1·N2 split, count radix-4 savings, and name mixed-radix and chirp-z for completeness.",
              "A concrete mixed-radix walk-through fixes the method: N = 12 = 3·4. Write n = 4·n1 + n2 (n1 = 0..2, n2 = 0..3) and k = k2 + 3·k1; the 12-point DFT becomes three 4-point DFTs (one per n1), then 12 twiddle multiplies W12^(n2·k2)... then four 3-point DFTs. Total multiplies: three 4-point DFTs via radix-2 cost 3 x 4 = 12; four 3-point DFTs cost 4 x 2 = 8 (small-prime butterflies); twiddles 12 - about 32 multiplies against 144 for the direct DFT. Every composite-N question is this arithmetic with different factors.",
            ],
            keyTerms: [
              { term: "Composite N", definition: "N with useful factors (e.g. 12 = 3·4); decomposable by Cooley-Tukey." },
              { term: "Radix-4 butterfly", definition: "4-in/4-out, 3 complex multiplies; handles 2x the data of radix-2 per stage." },
              { term: "Mixed-radix", definition: "Different radices per stage, following the prime factorization of N." },
              { term: "Split-radix", definition: "One radix-2 + two radix-4 sub-transforms per stage; near-optimal for powers of two." },
              { term: "Chirp-z / Bluestein", definition: "Converts prime-N DFTs into convolutions computable by power-of-two FFTs." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Composite-N decomposition tree",
              caption: "Each tier multiplies the count of smaller transforms; the base is trivial butterflies.",
              tiers: [
                { label: "N-point DFT", note: "the original problem" },
                { label: "N1 sub-transforms of N2 points", note: "first factorization N = N1·N2" },
                { label: "Further factored sub-transforms", note: "recurse on each factor" },
                { label: "Twiddle corrections", note: "W_N^(...) between tiers" },
                { label: "Small-prime butterflies", note: "2-, 3-, 5-point base cases" },
              ],
            },
            table: {
              caption: "Radix-2 versus radix-4 at N = 4096.",
              headers: ["Algorithm", "Stages", "Butterflies/stage", "Multiplies", "vs radix-2"],
              rows: [
                ["Radix-2", "12", "2048 (1 mult each)", "24,576", "-"],
                ["Radix-4", "6", "3072 (3 mults each)", "18,432", "25 percent fewer"],
                ["Split-radix", "-", "mixed 2/4 structure", "~16,000 equivalent", "~35 percent fewer"],
                ["Direct DFT", "-", "-", "16,777,216", "683x slower than radix-2"],
              ],
            },
            bullets: [
              "Cooley-Tukey works for ANY factorization N = N1·N2, recursively.",
              "Radix-4: 3 multiplies per butterfly, log4(N) stages - 25 percent cheaper than radix-2 at N = 4096.",
              "Split-radix mixes one radix-2 and two radix-4 sub-transforms per stage.",
              "Mixed-radix follows the prime factorization: 60 = 4·3·5.",
              "Worked N = 12 = 3·4: about 32 multiplies vs 144 direct.",
              "Large prime N needs Bluestein's chirp-z (DFT as a convolution).",
              "More factors of small primes = cheaper FFT; zero-pad to a smooth length when possible.",
            ],
            callout: {
              type: "tip",
              title: "Zero-pad to a smooth length",
              body: "When N is awkward (e.g. 1000 = 2^3·5^3), padding to a smoother nearby length (1024) usually computes faster than a mixed-radix 1000-point FFT - and the padding is free spectral interpolation (section 3.3). State this tradeoff when a question offers an awkward N.",
            },
            examQuestions: [
              {
                q: "Explain the Cooley-Tukey decomposition for composite N = N1·N2. Compare radix-2 and radix-4 FFTs at N = 4096 in complex multiplication count.",
                marks: 14,
                outline: [
                  "Index map n = N2·n1 + n2, k = k2 + N1·k1",
                  "N-point DFT = N2 DFTs of N1 + twiddles + N1 DFTs of N2",
                  "Recursion continues until small-prime base cases",
                  "Radix-2 at 4096: (4096/2)·log2(4096) = 2048·12 = 24,576 multiplies",
                  "Radix-4: (3·4096/4)·log4(4096) = 3072·6 = 18,432",
                  "Saving: 6,144 multiplies = 25 percent",
                  "Reason: radix-4 butterfly amortizes twiddles over 4 inputs",
                ],
              },
              {
                q: "Decompose a 12-point DFT as N = 3·4 and estimate its multiplication count against the direct DFT.",
                marks: 7,
                outline: [
                  "n = 4·n1 + n2; k = k2 + 3·k1",
                  "Three 4-point DFTs: 3 x 4 = 12 multiplies (radix-2 inside)",
                  "Twiddle stage: 12 multiplies",
                  "Four 3-point DFTs: 4 x 2 = 8 multiplies",
                  "Total ~32 vs direct 144 - a 4.5x saving at tiny N",
                ],
              },
              {
                q: "What happens when N is a large prime, and how does the chirp-z (Bluestein) approach recover FFT speed?",
                marks: 7,
                outline: [
                  "No useful factors: Cooley-Tukey cannot split",
                  "Direct DFT remains O(N^2)",
                  "Bluestein: W^(nk) = W^(n^2/2 + k^2/2 - (k - n)^2/2) - a convolution",
                  "Compute the convolution by a power-of-two FFT",
                  "Total cost O(N log N) even for prime N",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "FFT applications: fast convolution and spectral analysis",
            body: [
              "Two applications justify the FFT's existence, and both are direct consequences of Unit III. Fast convolution (sections 3.5-3.6): zero-pad, transform, multiply, inverse-transform - filtering a long stream through an M-tap FIR at O(L log L) per block instead of O(M·L) direct. The FFT of the filter is computed once and reused; blocks of 1024 at 64+ taps give order-of-magnitude savings, and overlap-add or overlap-save handles streaming. Every modern audio, radar and communications equalizer runs on exactly this loop.",
              "Spectral analysis is the other payoff: the FFT estimates the spectrum of a recorded signal. The governing numbers are the bin spacing df = fs/N and the record length T = N/fs - resolution is 1/T, set by REAL data duration, never by zero-padding. A worked example: two tones at 100 Hz and 125 Hz sampled at fs = 1 kHz. With N = 256 (T = 0.256 s), df = 3.906 Hz - the 25 Hz separation spans 6.4 bins: cleanly resolved. With N = 32 (T = 0.032 s), df = 31.25 Hz - the tones fall in adjacent bins and merge. Zero-padding the 32-sample record to 256 makes the plot smoother but cannot separate the tones: only 32 REAL samples carry the information. The exam's conceptual trap, restated with numbers.",
              "Leakage and windows complete the story: a finite record multiplies the true signal by a rectangular window, whose spectrum (the sinc of section 5.6) convolves the true spectrum - energy smears into sidelobes at -13 dB. Off-bin tones (like 1.05 kHz at fs/N = 7.8125 Hz spacing, landing at bin 134.4) leak visibly; windowing with Hann or Hamming (Unit V) trades wider main lobes for far lower sidelobes. The practical recipe the exam wants: choose N from resolution (1/T), choose the window from dynamic range, zero-pad for display, and average periodograms (Welch) to reduce variance - each clause a mark.",
              "A final integration question - 'how do Units I-IV combine to filter a signal?' - has the canonical answer: design the filter (Unit V), transform it once, stream the data in blocks, FFT each (Unit IV), multiply by the filter spectrum (Unit III's theorem), inverse FFT, overlap-add (Unit III's bookkeeping), all built on sequences and LTI systems (Unit I) with the z-transform (Unit II) as the design language. Seeing the five units as one pipeline is exactly the synoptic understanding the last question of a DSP paper probes.",
            ],
            keyTerms: [
              { term: "Fast convolution", definition: "FFT-multiply-IFFT filtering with overlap-add/save for streams." },
              { term: "Bin spacing df", definition: "fs/N Hz between FFT bins; resolution 1/T with T = N/fs." },
              { term: "Leakage", definition: "Rectangular-window sidelobes (-13 dB) smearing off-bin tones." },
              { term: "Welch averaging", definition: "Average windowed periodograms of overlapping segments to cut variance." },
              { term: "Resolution vs density", definition: "Longer real data improves resolution; zero-padding only smooths the display." },
            ],
            diagram: {
              kind: "flow",
              title: "Overlap-add fast filtering loop",
              caption: "The FFT makes each block cheap; the overlap bookkeeping keeps the result exactly linear.",
              steps: [
                { label: "Design filter h[n]", note: "M taps; compute H[k] once (padded to L)" },
                { label: "Block the stream", note: "fresh samples of length L - M + 1" },
                { label: "FFT the block", note: "zero-padded to L points" },
                { label: "Multiply by H[k]", note: "pointwise, L values" },
                { label: "Inverse FFT", note: "linear convolution of the block" },
                { label: "Overlap-add", note: "add M - 1 tail to the next block's output" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "spectrum.py - two tones, resolution and leakage",
              code: `import numpy as np

fs = 1000.0
t = np.arange(256) / fs
x = np.sin(2 * np.pi * 100 * t) + 0.5 * np.sin(2 * np.pi * 125 * t)

X = np.abs(np.fft.fft(x))
df = fs / 256                  # 3.906 Hz per bin
print(df)                      # tones at bins 25.6 and 32.0 -> resolved

short = np.abs(np.fft.fft(x[:32]))
print(fs / 32)                 # 31.25 Hz per bin - tones merge

# zero-padding the short record: smoother plot, SAME resolution
padded = np.abs(np.fft.fft(x[:32], 256))   # still unresolvable`,
            },
            bullets: [
              "Fast convolution: pad, FFT, multiply, IFFT; overlap-add/save for streams.",
              "Filter's FFT computed once and reused across all blocks.",
              "Spectral analysis: df = fs/N; true resolution 1/T with T = N/fs of real data.",
              "Worked: 100 + 125 Hz at fs = 1 kHz resolve with N = 256 (df = 3.9 Hz), merge with N = 32 (df = 31 Hz).",
              "Zero-padding smooths the display, never improves resolution.",
              "Rectangular window leaks at -13 dB; Hann/Hamming trade main-lobe width for sidelobes.",
              "Welch averaging reduces periodogram variance.",
              "The five units form one pipeline: design -> transform -> multiply -> overlap-add.",
            ],
            callout: {
              type: "exam",
              title: "The two-number answer",
              body: "Spectral-analysis questions want exactly two numbers first: bin spacing fs/N and record duration N/fs (resolution 1/T). Compute them before discussing windows or padding - examiners scan for those two lines, and every later mark depends on them being right.",
            },
            examQuestions: [
              {
                q: "Explain FFT-based fast convolution with the overlap-add method, including the transform length condition and where the speed advantage comes from.",
                marks: 14,
                outline: [
                  "Pad filter and block to L >= block + M - 1 (power of 2)",
                  "Per block: FFT, multiply by precomputed H[k], IFFT",
                  "Overlap-add the M - 1 sample tails of consecutive blocks",
                  "Condition L >= N1 + N2 - 1 makes circular equal linear",
                  "Cost: O(L log L) per block vs O(M·L) direct",
                  "Advantage grows with filter length M; crossover near tens of taps",
                  "Filter FFT computed once for the whole stream",
                ],
              },
              {
                q: "Two tones at 100 Hz and 125 Hz are sampled at 1 kHz. For N = 256 and N = 32, compute the bin spacing and state whether the tones are resolved. What does zero-padding the 32-sample record to 256 change?",
                marks: 14,
                outline: [
                  "N = 256: df = 1000/256 = 3.906 Hz; separation 25 Hz = 6.4 bins - resolved",
                  "N = 32: df = 31.25 Hz; separation < one bin - merged",
                  "Resolution = 1/T: 0.256 s vs 0.032 s - data duration decides",
                  "Zero-padding to 256: denser grid, smoother plot",
                  "Same underlying DTFT - still unresolvable",
                  "Conclusion: longer real records, not padding, improve resolution",
                ],
              },
              {
                q: "Why does spectral leakage occur in FFT-based spectrum estimation, and how do windows and averaging mitigate it?",
                marks: 7,
                outline: [
                  "Finite record = signal x rectangular window",
                  "Frequency domain: true spectrum convolved with the window spectrum",
                  "Rectangular window: -13 dB sidelobes smear energy across bins",
                  "Hann/Hamming windows: lower sidelobes (-31/-41 dB), wider main lobe",
                  "Welch averaging of segment periodograms reduces variance",
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
      title: "Digital Filter Design Techniques",
      summary:
        "Unit V turns specifications into filters: the specification vocabulary, the IIR-versus-FIR design philosophies, the impulse-invariant and bilinear transformations that map analog designs to digital, the analog prototype (Butterworth) that feeds them, and FIR design by windowing - the rectangular window's Gibbs phenomenon and the family of better windows from Bartlett through Kaiser.",
      chapter: {
        number: "05",
        title: "Designing Digital Filters",
        intro:
          "Unit V covers the design of IIR and FIR digital filters, the impulse-invariant and bilinear transformations, analog prototype design (Butterworth), and the windowing technique for FIR filters - rectangular and other windows, with worked design examples.",
        inOneBreath:
          "Specs (fp, fst, Ap, As) drive two philosophies: IIR maps an analog prototype via impulse invariance (fast, aliasing-prone) or the bilinear transform s = (2/T)(1 - z^-1)/(1 + z^-1) (no aliasing, warped axis, prewarp to fix it). FIR windows truncate the ideal sinc: rectangular leaks at -13 dB; Hann/Hamming/Blackman trade main-lobe width for sidelobes; Kaiser tunes beta to hit any stopband. Linear phase comes free with symmetric FIR taps.",
        sections: [
          {
            number: "5.1",
            title: "The filter design problem and specifications",
            body: [
              "Filter design is a contract between an application and a transfer function. The contract is written in specification language: passband edge fp (frequencies to keep, gain within Ap dB of unity), stopband edge fst (frequencies to reject, gain below -As dB), and the transition band fst - fp between them where behaviour is unspecified. In digital terms edges are normalized to wp = 2pi·fp/fs and ws = 2pi·fst/fs radians per sample, with ripples expressed as delta_p = 1 - 10^(-Ap/20) and delta_s = 10^(-As/20). Design = choosing coefficients of H(z) meeting the contract, then realizing the structure (Unit II) with finite-precision arithmetic.",
              "A concrete spec anchors every numerical in this unit: a low-pass for 8 kHz telephony keeping 0 - 1 kHz with 1 dB ripple and rejecting above 2 kHz with 40 dB stopband. Converted: wp = 2pi·1000/8000 = 0.25pi, ws = 2pi·2000/8000 = 0.5pi, delta_p = 1 - 10^(-0.05) = 1 - 0.891 = 0.109, delta_s = 10^(-2) = 0.01. Two numbers - the transition ratio ws/wp = 2 and the attenuation demand As = 40 dB - will determine the required filter order under every method that follows; computing them first is the habit that organizes the whole unit.",
              "The design flow has four stages, and naming them earns the structure marks: (1) specification - the numbers above; (2) approximation - choose a rational H(z) (IIR) or a polynomial h[n] (FIR) meeting the spec with minimum order; (3) realization - a structure (direct, cascade, parallel); (4) finite-word-length effects - coefficient quantization and arithmetic rounding, which is why cascade biquads are the practical realization. The unit spends its sections on stage 2, the approximation problem, split by philosophy: IIR designs solve it by transforming a solved analog problem; FIR designs solve it directly by windowing or optimization.",
              "The exam's opening 7-marker is always 'define the specification parameters and convert a given set' - exactly the worked numbers above. The conceptual follow-up asks why the transition band exists at all: an ideal brick wall (Ap = As = 0, no transition) needs an infinitely long impulse response (the sinc of section 5.6 is the ideal low-pass's response and it never decays), so EVERY real filter trades transition width against ripple against order. Writing that sentence - 'specifications compete; order buys all three' - converts a definition answer into a design answer.",
            ],
            keyTerms: [
              { term: "Passband edge fp", definition: "Highest frequency kept with gain within Ap dB of unity." },
              { term: "Stopband edge fst", definition: "Lowest frequency rejected with at least As dB attenuation." },
              { term: "Transition band", definition: "fst - fp: unspecified gap; every real filter needs one." },
              { term: "Ripples delta_p, delta_s", definition: "Linear-scale passband error 1 - 10^(-Ap/20) and stopband level 10^(-As/20)." },
              { term: "Approximation problem", definition: "Finding minimum-order H(z) or h[n] meeting the spec." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The four-stage design flow",
              caption: "Specification, approximation, realization, word-length effects - in that order.",
              stages: [
                { label: "Specification", note: "fp, fst, Ap, As -> wp, ws, delta_p, delta_s" },
                { label: "Approximation", note: "minimum-order H(z) (IIR) or h[n] (FIR)" },
                { label: "Realization", note: "direct / cascade / parallel structure" },
                { label: "Word-length design", note: "coefficient quantization, rounding - cascade biquads" },
              ],
            },
            table: {
              caption: "Specification vocabulary of the worked telephony example.",
              headers: ["Parameter", "Symbol", "Value in example", "Digital form"],
              rows: [
                ["Passband edge", "fp", "1 kHz", "wp = 0.25pi rad/sample"],
                ["Stopband edge", "fst", "2 kHz", "ws = 0.5pi rad/sample"],
                ["Passband ripple", "Ap", "1 dB", "delta_p = 0.109"],
                ["Stopband atten.", "As", "40 dB", "delta_s = 0.01"],
                ["Sampling rate", "fs", "8 kHz", "-"],
                ["Transition ratio", "ws/wp", "2", "drives the order formulas"],
              ],
            },
            bullets: [
              "Specs: passband edge, stopband edge, passband ripple Ap, stopband attenuation As.",
              "Digital edges: wp = 2pi·fp/fs, ws = 2pi·fst/fs rad/sample.",
              "Ripples: delta_p = 1 - 10^(-Ap/20) = 0.109 and delta_s = 10^(-As/20) = 0.01 for the worked spec.",
              "Design flow: specify -> approximate -> realize -> quantize.",
              "No transition band means an infinitely long impulse response - a physical impossibility.",
              "Order is the currency: it buys ripple, attenuation and transition width together.",
            ],
            callout: {
              type: "exam",
              title: "Convert before you design",
              body: "Every design numerical starts with the conversion lines: wp = 2pi·fp/fs, ws = 2pi·fst/fs, delta_p, delta_s. Write all four before choosing any method - the conversions are themselves worth 2-3 marks and every later formula consumes them.",
            },
            examQuestions: [
              {
                q: "Explain the specification of a digital low-pass filter. Convert the following to digital form: fp = 1 kHz, fst = 2 kHz, Ap = 1 dB, As = 40 dB at fs = 8 kHz, and explain why a transition band is unavoidable.",
                marks: 14,
                outline: [
                  "Spec vocabulary: passband, stopband, transition, ripples",
                  "wp = 2pi·1000/8000 = 0.25pi; ws = 2pi·2000/8000 = 0.5pi",
                  "delta_p = 1 - 10^(-1/20) = 0.109; delta_s = 10^(-40/20) = 0.01",
                  "Ideal brick wall requires an infinitely long (sinc) impulse response",
                  "Finite filters must trade transition width against ripple and order",
                  "Design flow: specification -> approximation -> realization -> word-length effects",
                ],
              },
              {
                q: "A high-pass filter must reject below 500 Hz with 50 dB attenuation and pass above 1 kHz with 0.5 dB ripple, at fs = 4 kHz. Give the digital specification.",
                marks: 7,
                outline: [
                  "wp = 2pi·1000/4000 = 0.5pi rad/sample (passband edge)",
                  "ws = 2pi·500/4000 = 0.25pi rad/sample (stopband edge)",
                  "delta_s = 10^(-50/20) = 0.00316",
                  "delta_p = 1 - 10^(-0.5/20) = 1 - 0.944 = 0.056",
                  "High-pass: roles of the bands swap but the formulas are identical",
                ],
              },
              {
                q: "Why is filter order called the currency of design? Illustrate with the transition-ratio and attenuation demands of a spec.",
                marks: 7,
                outline: [
                  "Sharper transition (smaller ws/wp) demands higher order",
                  "Deeper stopband (larger As) demands higher order",
                  "Flatter passband (smaller Ap) demands higher order",
                  "All three demands are paid from the same budget: order",
                  "Worked spec: ws/wp = 2 and As = 40 dB fix the minimum order later in the unit",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "IIR versus FIR design philosophies",
            body: [
              "Two philosophies attack the approximation problem. The IIR philosophy: the analog world solved filter design a century ago (Butterworth, Chebyshev, elliptic), so map a solved analog prototype Ha(s) into a digital H(z) with a transformation - impulse invariance (section 5.3) or the bilinear transform (section 5.4). The FIR philosophy: design the impulse response directly - truncate the ideal response through a window (sections 5.6-5.7), sample a desired frequency response, or optimize with the Parks-McClellan algorithm. The choice between them is the first design decision, and it is structural, not stylistic.",
              "The tradeoffs are a table the examiner can dictate from memory, so learn it as a table. Stability: IIR inherits poles and can go unstable (a bilinear map of a stable analog design is always stable - but impulse invariance with aliasing needs care); FIR with no feedback is unconditionally stable. Phase: IIR phase is inherently nonlinear around the passband edge; FIR with symmetric coefficients delivers EXACTLY linear phase - essential for data transmission and imaging where waveform shape must survive. Efficiency: for the same magnitude spec, IIR needs far lower order - the worked contrast below finds order 6 IIR versus 27 taps FIR for the SAME 40 dB spec. Implementation: FIR needs no feedback loop, suits fixed-point hardware and adaptive applications; IIR suits tight-resource real-time channels.",
              "The worked contrast makes the efficiency claim concrete. Target: the 5.1 spec (wp = 0.25pi, ws = 0.5pi, Ap = 1 dB, As = 40 dB). IIR route: transform the edges through the bilinear warp (section 5.5 gives the formula) and evaluate the Butterworth order - N = 6 sections suffice. FIR route by windowing with the Hamming window: transition width 6.6pi/N must fit 0.25pi, so N >= 6.6pi/0.25pi = 26.4, rounding to 27 taps (odd, for Type-I linear phase). Six second-order sections versus 27 multiply-accumulate taps: the IIR is roughly 4x cheaper in multiplies per sample (6 biquads = 18-30 mults... versus 27), while the FIR buys linear phase and unconditional stability with the same 27-tap cost. Neither wins absolutely - the application's phase and stability requirements decide.",
              "For the exam: draw the two-column comparison (stability, phase, order/efficiency, design method, structure, sensitivity), attach the worked order contrast (6 versus 27), and close with the selection rule - linear phase or adaptive operation demands FIR; minimal computation for a fixed magnitude response favours IIR. When the question says 'justify your choice', the phase sentence is the decisive one: nonlinear IIR phase distorts pulse shapes (group-delay variation), which is disqualifying for data modems and image processing regardless of its efficiency.",
            ],
            keyTerms: [
              { term: "IIR design", definition: "Map a solved analog prototype Ha(s) into H(z) by a transformation." },
              { term: "FIR design", definition: "Compute taps directly - windowing, frequency sampling, or Parks-McClellan optimization." },
              { term: "Linear phase", definition: "Constant group delay; symmetric FIR taps deliver it exactly." },
              { term: "Unconditional stability", definition: "FIR has no feedback - no poles outside the origin, cannot diverge." },
              { term: "Order contrast", definition: "Same spec met by order-6 Butterworth IIR or 27-tap Hamming FIR." },
            ],
            diagram: {
              kind: "compare",
              title: "IIR versus FIR at a glance",
              caption: "Efficiency versus phase fidelity - the structural tradeoff.",
              left: {
                heading: "IIR (from analog prototypes)",
                items: [
                  "Low order: order 6 meets the worked spec",
                  "Nonlinear phase - distorts pulse shapes",
                  "Stability must be verified (poles inside unit circle)",
                  "Designed via impulse invariance or bilinear transform",
                  "Sensitive to coefficient quantization - use cascaded biquads",
                ],
              },
              right: {
                heading: "FIR (windowing and optimization)",
                items: [
                  "Higher order: 27 Hamming taps for the same spec",
                  "Exactly linear phase with symmetric taps",
                  "Unconditionally stable - no feedback",
                  "Designed by windowing, frequency sampling, Parks-McClellan",
                  "Robust in fixed point; natural for adaptive filters",
                ],
              },
            },
            table: {
              caption: "The full IIR-FIR comparison.",
              headers: ["Property", "IIR", "FIR"],
              rows: [
                ["Impulse response", "infinite (feedback)", "finite (M + 1 taps)"],
                ["Stability", "must check poles", "guaranteed"],
                ["Phase", "nonlinear", "exactly linear if taps symmetric"],
                ["Order for same magnitude spec", "low (6 in worked example)", "high (27 taps)"],
                ["Design method", "analog prototype + transformation", "windowing / optimization"],
                ["Fixed-point sensitivity", "high - cascade biquads", "low"],
                ["Adaptive filtering", "difficult", "standard (LMS)"],
              ],
            },
            bullets: [
              "IIR: transform a solved analog design (Butterworth, Chebyshev, elliptic).",
              "FIR: design taps directly by windowing or optimization.",
              "IIR wins efficiency: order 6 vs 27 taps for the 40 dB worked spec.",
              "FIR wins phase: symmetric taps give exactly linear phase.",
              "FIR is unconditionally stable; IIR stability must be verified per design.",
              "Data modems and imaging demand FIR (linear phase); tight DSP budgets favour IIR.",
              "Quantization sensitivity: IIR needs cascaded biquads; FIR tolerates fixed point.",
            ],
            callout: {
              type: "exam",
              title: "The decisive sentence",
              body: "Every 'compare and choose' answer ends with the selection rule: 'if waveform shape must be preserved (data, imaging, seismology), linear phase is mandatory and FIR wins despite higher order; if only magnitude matters under tight compute, IIR wins.' Write the sentence - it is the mark that separates a table-reciter from a designer.",
            },
            examQuestions: [
              {
                q: "Compare IIR and FIR digital filters under stability, phase characteristics, order requirements and design methods. For the spec wp = 0.25pi, ws = 0.5pi, Ap = 1 dB, As = 40 dB, estimate the Hamming-window FIR length and contrast it with an order-6 IIR.",
                marks: 14,
                outline: [
                  "Stability: FIR unconditional; IIR must place poles inside the circle",
                  "Phase: FIR symmetric taps -> exactly linear; IIR nonlinear",
                  "FIR length: transition 0.25pi / (6.6pi/N) -> N >= 26.4 -> 27 taps",
                  "IIR: order 6 Butterworth meets the same spec (section 5.5)",
                  "Efficiency: IIR roughly 4x fewer multiplies per sample",
                  "Selection rule: linear phase -> FIR; minimal compute -> IIR",
                ],
              },
              {
                q: "Why is exactly linear phase important in data transmission and image processing, and which filter family provides it?",
                marks: 7,
                outline: [
                  "Nonlinear phase = frequency-dependent group delay",
                  "Pulse shapes spread - intersymbol interference in data links",
                  "Images: phase distortion smears edges more than magnitude errors",
                  "Symmetric FIR taps: h[n] = h[M - n] -> constant group delay M/2",
                  "IIR cannot deliver exact linear phase in the passband",
                ],
              },
              {
                q: "State two situations where an IIR filter is the right choice despite its nonlinear phase.",
                marks: 7,
                outline: [
                  "Magnitude-only specs: audio tone rejection, DC removal, anti-alias pre-filter",
                  "Tight real-time budgets: hearing aids, low-power DSP where order 6 vs 27 matters",
                  "Phase distortion tolerable when the ear/eye is magnitude-sensitive",
                  "Fixed-coefficient channels: the IIR is tuned once and never adapted",
                  "Cascaded biquad implementation keeps the low order robust in fixed point",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "The impulse-invariant transformation",
            body: [
              "Impulse invariance makes the digital filter's impulse response a sampled copy of the analog prototype's: h[n] = T·ha(nT), with the factor T keeping the gain independent of the sampling rate for narrowband designs. The procedure: expand Ha(s) in partial fractions Ha(s) = sum of A_k/(s - s_k); each analog pole s_k maps to a digital pole e^(s_k·T), giving H(z) = sum of A_k·T/(1 - e^(s_k·T)·z^-1). Zeros do NOT map directly - the transformation is defined on poles and residues, which is why the frequency response is preserved only where aliasing does not corrupt it.",
              "A worked example fixes the arithmetic. Prototype: the first-order low-pass Ha(s) = 2/(s + 2) (DC gain 1, 3 dB point at 2 rad/s). Partial fractions: single term A = 2 at s = -2. Sampled at T = 0.1 s (fs = 10 Hz): h[n] = 0.1·2·e^(-2·0.1·n)·u[n] = 0.2·(0.8187)^n·u[n]. Digital filter: H(z) = 0.2/(1 - 0.8187·z^-1). Pole radius e^(-0.2) = 0.8187 < 1 - stable, as promised: stable analog poles (Re s < 0) always map inside the unit circle. DC gain check: H(e^j0) = 0.2/(1 - 0.8187) = 1.05 - approximately the analog DC gain of 1, with the 5 percent excess being aliasing's fingerprint.",
              "Aliasing is the method's structural flaw and the exam's conceptual centrepiece. Sampling ha(t) replicates its spectrum every fs Hz; where the analog response has not died out by fs/2, the replicas fold in and the digital response deviates. The error bound: aliasing error < sum of |Ha(jw)| for |w| > pi/T. For low-pass and band-pass prototypes with fast rolloff and high fs, the overlap is small (the 5 percent above); for high-pass prototypes it is fatal - a high-pass analog response is LARGE near fs/2, so its replicas fold directly onto the passband. Hence the rule: impulse invariance suits low-pass and band-pass designs only, and never high-pass or band-stop.",
              "The exam numerical is always the same shape: given Ha(s) (typically 1 to 3 poles), T, find h[n], H(z), and comment on aliasing. Method marks: partial fractions (state them even if factored), the mapping s_k -> e^(s_k·T) with the T factor, the stability sentence (Re s_k < 0 implies |e^(s_k·T)| < 1), and the aliasing caveat naming the suitable filter classes. A 14-marker adds a second pole or asks for the frequency-response comparison at a specific frequency - compute both |Ha(jw)| and |H(e^jw)| at w and show the deviation is the folded tail.",
            ],
            keyTerms: [
              { term: "Impulse invariance", definition: "h[n] = T·ha(nT); digital response mimics the sampled analog response." },
              { term: "Pole mapping", definition: "s_k -> e^(s_k·T); analog left half-plane maps inside the unit circle." },
              { term: "Aliasing error", definition: "Deviation bounded by the analog response above pi/T, folded back." },
              { term: "Suitable classes", definition: "Low-pass and band-pass only; never high-pass or band-stop." },
              { term: "Gain factor T", definition: "Keeps narrowband gain independent of the sampling interval." },
            ],
            diagram: {
              kind: "flow",
              title: "Impulse-invariant design in four steps",
              caption: "Prototype -> partial fractions -> pole mapping -> z-domain sum.",
              steps: [
                { label: "Analog prototype", note: "Ha(s) with poles s_k" },
                { label: "Partial fractions", note: "Ha(s) = sum A_k/(s - s_k)" },
                { label: "Map each pole", note: "s_k -> e^(s_k T); residue A_k·T" },
                { label: "Assemble H(z)", note: "sum A_k·T/(1 - e^(s_k T)·z^-1)" },
                { label: "Check aliasing", note: "compare |Ha| and |H| near fs/2" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "impinvar_check.py - the worked first-order example",
              code: `import numpy as np

T = 0.1                       # fs = 10 Hz
a = 2.0                       # Ha(s) = 2/(s + 2)

pole_z = np.exp(-a * T)       # e^(-0.2) = 0.8187
b = np.array([a * T])         # residue x T = 0.2
A = np.array([1.0, -pole_z])  # H(z) = 0.2/(1 - 0.8187 z^-1)

w = np.linspace(0, np.pi, 256)
H = np.abs(np.polyval(b, np.exp(-1j * w)) / np.polyval(A, np.exp(-1j * w)))
print(H[0])                   # 1.05 vs analog DC gain 1.0 - aliasing excess
print(pole_z)                 # stable: radius < 1`,
            },
            bullets: [
              "Definition: h[n] = T·ha(nT); transform then sample the response.",
              "Mapping: each analog pole s_k -> digital pole e^(s_k·T); residues carry over as A_k·T.",
              "Worked example: Ha = 2/(s + 2), T = 0.1 -> H(z) = 0.2/(1 - 0.8187z^-1).",
              "Stability is automatic: Re(s) < 0 maps to |z| = e^(Re(s)·T) < 1.",
              "Aliasing: replicas of Ha(jw) fold in wherever the prototype is not dead by fs/2.",
              "Suitable for low-pass and band-pass; forbidden for high-pass and band-stop.",
              "Zeros do not map directly - only poles and residues transfer.",
            ],
            callout: {
              type: "warning",
              title: "Never say 'zeros map too'",
              body: "Impulse invariance transfers POLES and residues only. A common answer claims the whole s-plane maps to the z-plane like the bilinear transform - wrong. The s-plane strips (Re s constant) collapse onto circles: the mapping is many-to-one vertically, which is precisely why aliasing exists.",
            },
            examQuestions: [
              {
                q: "Explain the impulse-invariant transformation. Design the digital filter for Ha(s) = 2/(s + 2) with T = 0.1 s and discuss the stability and aliasing behaviour of the result.",
                marks: 14,
                outline: [
                  "Principle: h[n] = T·ha(nT) - sampled impulse response",
                  "Ha(s) = 2/(s + 2): pole at s = -2, residue 2",
                  "Map: e^(-2·0.1) = 0.8187; H(z) = 0.2/(1 - 0.8187z^-1)",
                  "h[n] = 0.2·(0.8187)^n·u[n]",
                  "Stability: pole radius 0.8187 < 1 - stable automatically",
                  "DC gain 0.2/0.1813 = 1.05 vs analog 1.0 - small aliasing excess",
                  "Aliasing: folded analog tail above fs/2 = 5 Hz; suitable classes low-pass/band-pass",
                ],
              },
              {
                q: "Why can the impulse-invariant method not be used for high-pass filters? Explain with the spectral-replication argument.",
                marks: 7,
                outline: [
                  "Sampling replicates Ha(jw) every fs Hz",
                  "High-pass response is LARGE at fs/2 and beyond",
                  "The replicas fold directly onto the digital passband",
                  "Digital response becomes the sum of many large replicas - useless",
                  "Low-pass prototypes decay before fs/2, so their overlap is small",
                ],
              },
              {
                q: "A second-order prototype has poles at s = -1 ± j2. Find the digital pole locations for T = 0.05 and comment on the resulting mode.",
                marks: 7,
                outline: [
                  "e^(sT) = e^(-0.05)·e^(±j0.1) = 0.951·e^(±j0.1)",
                  "Digital poles: radius 0.951, angle ±0.1 rad/sample",
                  "Complex analog pair -> complex digital pair (conjugates)",
                  "Mode: slowly decaying oscillation at 0.1 rad/sample",
                  "Stable - radius below 1",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "The bilinear transformation",
            body: [
              "The bilinear transformation maps the whole s-plane into the z-plane with the algebraic substitution s = (2/T)·(1 - z^-1)/(1 + z^-1). Its magic is structural: the entire analog left half-plane maps to the interior of the unit circle, the jw axis maps onto the unit circle, and stability transfers EXACTLY - a stable analog design always yields a stable digital filter, with no aliasing anywhere because the mapping is one-to-one, compressing the infinite analog axis onto the finite digital one.",
              "The price of no aliasing is frequency-axis WARPING: s = jOmega maps to z = e^jw with Omega = (2/T)·tan(w/2). Analog frequencies compress nonlinearly - equal analog steps become shrinking digital steps as w approaches pi. Design therefore uses PREWARPING: convert each critical digital frequency to its analog counterpart with Omega = (2/T)·tan(w/2), design the analog prototype at the prewarped edges, and transform back. The worked numbers: for the telephony spec at fs = 8 kHz, fp = 1 kHz gives wp = pi/4 and the prewarped analog edge Omega_p = (2/T)·tan(pi/8) = 16000·0.4142 = 6627 rad/s = 1055 Hz - the analog design runs at 1055 Hz, not 1000, so that after warping it lands exactly on 1 kHz.",
              "A worked design shows the whole loop: H_a(s) = 1/(1 + s/Omega_c) first-order low-pass with Omega_c = 6627 rad/s. Substitute the bilinear map: H(z) = 1/(1 + (2/T)(1 - z^-1)/(Omega_c(1 + z^-1))). With (2/T)/Omega_c = 16000/6627 = 2.414: H(z) = (1 + z^-1)/(1 + z^-1 + 2.414(1 - z^-1)) = (1 + z^-1)/(3.414 - 1.414·z^-1). Normalize: H(z) = 0.293·(1 + z^-1)/(1 - 0.4142·z^-1). One pole at z = 0.4142 (radius < 1 - stable), one zero at z = -1 (the response dies at Nyquist - the bilinear signature: every digital zero set includes z = -1 because the analog response at infinite frequency maps there). Verify at w = pi/4: |H(e^j0.25pi)| = 0.293·|1 + e^-j0.25pi|/|1 - 0.4142e^-j0.25pi| = 0.293·1.848/0.914 = 0.593 = -4.45 dB... at the band edge with a 3 dB-corner design; the 1 dB spec refinement is exactly what section 5.5's order formula handles.",
              "The exam contrast with impulse invariance is a guaranteed 7-marker: aliasing (none vs present), frequency mapping (nonlinear tan warp vs linear), high-pass suitability (yes vs no), gain preservation (needs no T-factor bookkeeping vs T factor), phase (more nonlinear vs less). The prewarping calculation is the numerical heart: convert wp and ws to Omega_p, Omega_s with the tan formula, design in analog, transform back. Write the warping formula Omega = (2/T)tan(w/2) as a labelled line FIRST in every bilinear answer - every later number depends on it.",
            ],
            keyTerms: [
              { term: "Bilinear transform", definition: "s = (2/T)(1 - z^-1)/(1 + z^-1); maps LHP to unit-disk interior one-to-one." },
              { term: "Frequency warping", definition: "Omega = (2/T)tan(w/2): infinite analog axis compressed onto 0..pi." },
              { term: "Prewarping", definition: "Design edges moved to Omega = (2/T)tan(w/2) so warped results land on spec." },
              { term: "Nyquist zero", definition: "Every bilinear H(z) has z = -1 in its zero set - response dies at w = pi." },
              { term: "Exact stability transfer", definition: "Stable analog pole -> stable digital pole, no exceptions." },
            ],
            diagram: {
              kind: "compare",
              title: "Impulse invariance versus bilinear transformation",
              caption: "Aliasing versus warping - pick the flaw you can manage.",
              left: {
                heading: "Impulse invariance",
                items: [
                  "h[n] = T·ha(nT) - sampled prototype",
                  "Linear frequency mapping, but ALIASED above fs/2",
                  "Fails for high-pass and band-stop",
                  "Many-to-one s -> z mapping (strips collapse)",
                  "Gain needs the T factor",
                ],
              },
              right: {
                heading: "Bilinear transformation",
                items: [
                  "s = (2/T)(1 - z^-1)/(1 + z^-1)",
                  "No aliasing - one-to-one onto the unit circle",
                  "Works for ALL filter classes (HP included)",
                  "Nonlinear tan-warped axis - prewarp the edges",
                  "Stability transfers exactly; zero at z = -1 guaranteed",
                ],
              },
            },
            table: {
              caption: "Prewarping table for fs = 8 kHz (Omega = 16000·tan(w/2)).",
              headers: ["Digital edge w", "Digital f (Hz)", "Prewarped Omega (rad/s)", "Prewarped f (Hz)"],
              rows: [
                ["pi/8", "500", "3183", "506"],
                ["pi/4", "1000", "6627", "1055"],
                ["3pi/8", "1500", "12910", "2054"],
                ["pi/2", "2000", "16000", "2546"],
              ],
            },
            bullets: [
              "Substitution: s = (2/T)·(1 - z^-1)/(1 + z^-1); LHP -> inside unit circle.",
              "No aliasing: the mapping is one-to-one; the axis warps as Omega = (2/T)tan(w/2).",
              "Prewarp every edge: 1 kHz at fs = 8 kHz designs at 1055 Hz (Omega_c = 6627 rad/s).",
              "Worked first-order result: H(z) = 0.293(1 + z^-1)/(1 - 0.4142z^-1).",
              "Stable analog poles always give stable digital poles - the key guarantee.",
              "z = -1 zero appears in every bilinear design: gain vanishes at Nyquist.",
              "High-pass and band-stop designs are safe with the bilinear map.",
            ],
            callout: {
              type: "exam",
              title: "Prewarp first, design second",
              body: "Bilinear numericals go wrong when designers skip prewarping. The safe ritual, written as labelled lines: (1) w = 2pi·f/fs; (2) Omega = (2/T)tan(w/2); (3) analog design at Omega edges; (4) substitute the bilinear map; (5) verify the response at the ORIGINAL w edges. Five lines, no surprises.",
            },
            examQuestions: [
              {
                q: "Derive the frequency-warping relation of the bilinear transformation and design a first-order digital low-pass with 3 dB point at 1 kHz (fs = 8 kHz) using the bilinear transform with prewarping.",
                marks: 14,
                outline: [
                  "s = jOmega -> z = (1 + sT/2)/(1 - sT/2) = e^jw on the axis",
                  "Solve: Omega = (2/T)tan(w/2) - the warping formula",
                  "Prewarp: wp = pi/4 -> Omega_c = 16000·tan(pi/8) = 6627 rad/s (1055 Hz)",
                  "Analog design: Ha(s) = 1/(1 + s/6627)",
                  "Substitute: H(z) = 0.293(1 + z^-1)/(1 - 0.4142z^-1)",
                  "Pole at 0.4142 - stable; zero at z = -1",
                  "Verify |H| at w = pi/4 lands at the designed corner",
                ],
              },
              {
                q: "Compare the impulse-invariant and bilinear transformations under aliasing, frequency mapping, filter-class suitability and stability transfer.",
                marks: 7,
                outline: [
                  "Impulse invariance aliases above fs/2; bilinear never aliases",
                  "Impulse invariance: linear mapping; bilinear: tan-warped axis",
                  "High-pass/band-stop: forbidden for impulse invariance, safe for bilinear",
                  "Stability: both preserve stability (LHP -> disk)",
                  "Impulse invariance is many-to-one (strips); bilinear one-to-one",
                ],
              },
              {
                q: "Show that every bilinear-designed H(z) has a zero at z = -1 and explain its physical meaning.",
                marks: 7,
                outline: [
                  "s -> infinity corresponds to z = (1 + sT/2)/(1 - sT/2) -> -1",
                  "Analog response vanishing at infinite frequency maps to z = -1",
                  "z = -1 is w = pi: digital gain dies at Nyquist",
                  "Practical: bilinear low-passes always reach true zero at Nyquist",
                  "Extra numerator taps are free: they come from the transformation itself",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Analog prototypes: the Butterworth design",
            body: [
              "Both transformations start from an analog prototype, and the syllabus's workhorse is the Butterworth low-pass - the maximally flat magnitude: |Ha(jOmega)|^2 = 1/(1 + (Omega/Omega_c)^(2N)). Its N poles sit on a circle of radius Omega_c in the left half-plane, spaced by pi/N radians, at angles (2k + N - 1)·pi/(2N) from the negative real axis. Monotonic everywhere: no passband ripple, no stopband ripple - smoothness is its entire personality, and its order formula quantifies the cost of that smoothness.",
              "The order formula turns specs into N: N >= log10[(10^(As/10) - 1)/(10^(Ap/10) - 1)] / (2·log10(Omega_s/Omega_p)). Worked with the telephony spec, prewarped for the bilinear transform: Omega_p = 6627 rad/s (from 1 kHz), Omega_s from 2 kHz = 16000·tan(pi/4) = 16000 rad/s (2546 Hz). Ratio Omega_s/Omega_p = 2.414. Numerator: 10^4 - 1 = 9999; denominator: 10^0.1 - 1 = 0.2589; ratio 38,620; log10 = 4.587. Divide by 2·log10(2.414) = 2·0.3828 = 0.7656: N >= 5.99 - so N = 6, the order quoted in section 5.2. Then Omega_c sits between the edges - for a 1 dB corner, Omega_c = Omega_p·(10^(0.1) - 1)^(-1/12) = 6627·0.2589^(-1/12) = 6627·1.109 = 7349 rad/s.",
              "Completing the design: place 6 poles on the circle of radius 7349 at angles 90°±15°, 90°±45°, 90°±75° from the negative real axis - that is s_k = 7349·e^(j(105°, 75°, 135°, 45°, 165°, 15°)) with the left-half-plane ones kept: poles at angles 105°, 135°, 165° (and conjugates 255°, 225°, 195°). Partial fractions give the residues; the bilinear transform maps each s_k to z-plane poles; the cascade of three biquads realizes the order-6 filter. Verification: |H| at the prewarped stopband edge gives exactly -As or better, and the passband corner sits at -1 dB - the spec is met with margin only where rounding helped.",
              "Chebyshev (equiripple passband, sharper stopband for the same order) and elliptic (equiripple both bands, minimum order of all) belong to the comparison one-liner the exam expects: at fixed specs, elliptic needs the lowest order, Chebyshev is between, Butterworth the highest - but Butterworth's monotonic, ripple-free response is preferred when group-delay smoothness matters. The exam's 14-marker: derive the order, compute Omega_c, place the poles, and hand off to the transformation of sections 5.3-5.4. The order formula derivation (from the squared-magnitude condition at the edges) is the 7-marker variant - two logarithm lines long.",
            ],
            keyTerms: [
              { term: "Butterworth response", definition: "|Ha|^2 = 1/(1 + (Omega/Omega_c)^(2N)) - maximally flat, monotonic." },
              { term: "Order formula", definition: "N >= log10[(10^(As/10) - 1)/(10^(Ap/10) - 1)]/(2 log10(Omega_s/Omega_p))." },
              { term: "Pole circle", definition: "N poles on radius Omega_c, LHP, spaced pi/N." },
              { term: "Chebyshev", definition: "Equiripple passband (or stopband); lower order than Butterworth at same specs." },
              { term: "Elliptic", definition: "Equiripple in both bands; minimum order, sharpest transition." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the analog prototype",
              caption: "Order versus smoothness - the prototype family decision.",
              start: "Analog prototype for the spec",
              branches: [
                { label: "Smoothness matters (delay flat)", outcome: "Butterworth: monotonic, no ripple, highest order", good: true },
                { label: "Passband ripple allowed", outcome: "Chebyshev-I: equiripple passband, sharper stop", good: true },
                { label: "Stopband ripple allowed instead", outcome: "Chebyshev-II: flat passband, equiripple stop", good: true },
                { label: "Minimum order is everything", outcome: "Elliptic: equiripple both bands - lowest order", good: true },
                { label: "Aliasing-sensitive design", outcome: "avoid equiripple stopbands - their skirts fold in (impulse invariance)", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "butter6.py - order 6 from the spec, verified",
              code: `import numpy as np
from scipy import signal

fs = 8000.0
wp = 2 * np.pi * 1000 / fs          # 0.25pi digital edge
ws = 2 * np.pi * 2000 / fs          # 0.5pi digital edge

# prewarp (T = 1/fs): Omega = (2/T) tan(w/2)
Wp = 2 * fs * np.tan(wp / 2)        # 6627 rad/s
Ws = 2 * fs * np.tan(ws / 2)        # 16000 rad/s

N, Wc = signal.buttord(Wp, Ws, 1.0, 40.0)
print(N)                            # 6 - matches the hand formula

b, a = signal.butter(N, Wc, btype="low", analog=True, output="ba")
zd, pd, kd = signal.bilinear_zpk(b, [0], 1, Wc, fs)  # via bilinear
print(np.abs(pd))                   # all radii < 1: stable`,
            },
            bullets: [
              "Butterworth: |Ha|^2 = 1/(1 + (Omega/Omega_c)^(2N)) - maximally flat.",
              "Order formula: N >= log10[(10^(As/10) - 1)/(10^(Ap/10) - 1)]/(2 log10(Omega_s/Omega_p)).",
              "Worked spec (prewarped): Omega_s/Omega_p = 2.414 gives N >= 5.99 -> N = 6.",
              "Omega_c = 7349 rad/s for the 1 dB corner; poles on that circle, LHP, pi/N apart.",
              "Pole angles for N = 6: 75°, 105°, 135°, 165°, 195°, 225°.",
              "Elliptic < Chebyshev < Butterworth in order; Butterworth wins on delay smoothness.",
              "Design hand-off: poles -> partial fractions -> transformation -> biquad cascade.",
            ],
            callout: {
              type: "tip",
              title: "Prewarp before the order formula",
              body: "The Butterworth order formula consumes ANALOG edge frequencies. With the bilinear transform, compute Omega_p and Omega_s from tan-warping FIRST (6627 and 16000 rad/s in the worked spec), then apply the formula. Feeding digital w values straight into the formula underestimates N - the most common design-flow error.",
            },
            examQuestions: [
              {
                q: "Starting from the digital spec wp = 0.25pi, ws = 0.5pi, Ap = 1 dB, As = 40 dB (fs = 8 kHz), design the Butterworth prototype: prewarp the edges, compute the order, find Omega_c, and state the pole locations.",
                marks: 14,
                outline: [
                  "Prewarp: Omega_p = 16000·tan(pi/8) = 6627 rad/s; Omega_s = 16000·tan(pi/4) = 16000 rad/s",
                  "Ratio Omega_s/Omega_p = 2.414",
                  "Order: N >= log10(9999/0.2589)/(2 log10 2.414) = 4.587/0.7656 = 5.99 -> N = 6",
                  "Omega_c = Omega_p·(10^0.1 - 1)^(-1/12) = 6627·1.109 = 7349 rad/s",
                  "Poles: radius 7349, angles 75°, 105°, 135°, 165° + conjugates, LHP",
                  "Hand-off: partial fractions -> bilinear map -> three biquads",
                ],
              },
              {
                q: "Derive the Butterworth order formula from the specification conditions at the band edges.",
                marks: 7,
                outline: [
                  "Passband condition: 1/(1 + (Omega_p/Omega_c)^(2N)) >= 10^(-Ap/10)",
                  "Stopband condition: 1/(1 + (Omega_s/Omega_c)^(2N)) <= 10^(-As/10)",
                  "Eliminate (Omega/Omega_c)^(2N) between the two",
                  "(Omega_s/Omega_p)^(2N) >= (10^(As/10) - 1)/(10^(Ap/10) - 1)",
                  "Take log10 twice: N >= log10[(10^(As/10) - 1)/(10^(Ap/10) - 1)]/(2 log10(Omega_s/Omega_p))",
                ],
              },
              {
                q: "Compare Butterworth, Chebyshev and elliptic prototypes at fixed specifications.",
                marks: 7,
                outline: [
                  "Elliptic: lowest order - equiripple in both bands",
                  "Chebyshev: intermediate order - one band equiripple",
                  "Butterworth: highest order - maximally flat, monotonic",
                  "Tradeoff: ripple sharpness buys order savings",
                  "Delay smoothness favours Butterworth for pulse applications",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "FIR design by windowing: the rectangular window",
            body: [
              "The ideal low-pass has a known, infinitely long impulse response - the sinc: hd[n] = sin(wc(n - alpha))/(pi(n - alpha)), linear phase centred at alpha = (N - 1)/2. Windowing design TRUNCATES it: multiply by a length-N window w[n], h[n] = hd[n]·w[n]. Multiplication in time is convolution in frequency: the filter's response becomes the ideal brick wall smeared by the window's spectrum - main lobe widens the transition, sidelobes ripple the bands. Every window-design fact follows from that one convolution picture.",
              "The rectangular window w[n] = 1 for |n| <= alpha is the baseline and the cautionary tale. Its spectrum is the Dirichlet kernel: main lobe width 4pi/N (transition width in the filter), sidelobes only -13 dB below the peak - which caps the filter's stopband at about 21 dB REGARDLESS of N. The worked design: cut-off wc = pi/2 with N = 21 taps (alpha = 10). Tap values: h[10] = wc/pi = 0.5 (the sinc limit at n = alpha); h[9] = sin(pi/2·(9 - 10))/(pi(9 - 10))... hd[9] = sin(0.5pi·1)/(pi·1) = 1/pi = 0.3183; h[8] = sin(0.5pi·2)/(pi·2) = 0/2pi = 0 - the sinc crosses zero exactly at n = 8 and n = 12. Taps are symmetric (h[n] = h[20 - n]) - linear phase of delay alpha = 10 samples, free of charge.",
              "Length arithmetic completes the method: want a narrower transition? Increase N - the main lobe is 4pi/N wide, so halving the transition doubles the taps. Want a deeper stopband? The rectangular window cannot help - more taps narrow the transition but the -13 dB sidelobe structure stays, Gibbs-phenomenon style: the ripple AMPLITUDE is fixed, only its rate increases. This is the punchline the exam wants: the rectangular window delivers linear phase and maximum energy concentration, but its 21 dB stopband ceiling disqualifies it from real filter specs (which start at 40 dB) - hence the better windows of section 5.7.",
              "The exam numerical: given wc and N, compute the first three or four taps of the truncated sinc, verify symmetry, state the delay alpha = (N - 1)/2, and give the transition width and stopband numbers (4pi/N and ~21 dB). A 14-marker adds the Gibbs discussion: overshoot ~9 percent of the discontinuity, persisting as N grows - truncation redistributes error, never eliminates it. Draw the |H(e^jw)| sketch: flat passband, transition of width 4pi/N centred on wc, sidelobe ripple in both bands with peaks about -21 dB (stopband side).",
            ],
            keyTerms: [
              { term: "Ideal low-pass response", definition: "hd[n] = sin(wc(n - alpha))/(pi(n - alpha)); infinitely long sinc." },
              { term: "Window method", definition: "h[n] = hd[n]·w[n]: truncate to length N with a shaped window." },
              { term: "Rectangular window", definition: "w[n] = 1 for |n| <= alpha; main lobe 4pi/N, sidelobes -13 dB." },
              { term: "Gibbs phenomenon", definition: "Fixed ~9 percent overshoot at every discontinuity, regardless of N." },
              { term: "Stopband ceiling", definition: "Rectangular truncation reaches only ~21 dB - useless for real specs." },
            ],
            diagram: {
              kind: "flow",
              title: "Window design procedure",
              caption: "Ideal response -> window -> check the four numbers.",
              steps: [
                { label: "Ideal response hd[n]", note: "sinc for low-pass; shift by alpha = (N - 1)/2" },
                { label: "Choose window", note: "rectangular here; better ones in 5.7" },
                { label: "Multiply taps", note: "h[n] = hd[n]·w[n] - symmetric, linear phase" },
                { label: "Predict performance", note: "transition ~ main-lobe width; stopband ~ sidelobe level" },
                { label: "Verify", note: "evaluate |H(e^jw)| at the spec edges" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "rect_fir.py - the 21-tap rectangular design",
              code: `import numpy as np
from scipy import signal

N, wc = 21, np.pi / 2
alpha = (N - 1) / 2
n = np.arange(N)
hd = np.sinc(wc * (n - alpha) / np.pi)   # numpy sinc is sin(pi x)/(pi x)
h = hd                                    # rectangular window = no scaling
print(np.round(h[8:13], 4))   # [0, 0.3183, 0.5, 0.3183, 0]
print(h[0], h[N - 1])         # symmetric: h[0] == h[20] -> linear phase

w, H = signal.freqz(h, worN=512)
stop = np.abs(H[w > ws])      # worst stopband gain ~ 10^(-21/20)`,
            },
            bullets: [
              "Method: h[n] = hd[n]·w[n]; truncation convolves the ideal response with the window spectrum.",
              "Ideal low-pass taps: hd[n] = sin(wc(n - alpha))/(pi(n - alpha)), alpha = (N - 1)/2.",
              "Worked design (wc = pi/2, N = 21): h[10] = 0.5, h[9] = 0.3183, h[8] = 0.",
              "Symmetric taps -> exactly linear phase, delay alpha = 10 samples.",
              "Rectangular: transition 4pi/N; sidelobes -13 dB; stopband ceiling ~21 dB.",
              "Gibbs: ~9 percent overshoot fixed - length cannot remove it.",
              "Rectangular is the baseline that motivates tapered windows.",
            ],
            callout: {
              type: "warning",
              title: "More taps do not deepen the stopband",
              body: "The most common window-method misconception: 'increase N until the stopband is met.' With the rectangular window, N narrows the transition (4pi/N) but the sidelobe level stays -13 dB (stopband ~21 dB) forever. Stopband depth comes from the window SHAPE (section 5.7), not length. Write this sentence whenever a rectangular design fails a spec.",
            },
            examQuestions: [
              {
                q: "Explain FIR design by windowing. Design a 21-tap linear-phase low-pass with wc = pi/2 using the rectangular window: compute the taps h[8] to h[12], state the delay and the symmetry property, and give the transition width and approximate stopband attenuation.",
                marks: 14,
                outline: [
                  "hd[n] = sin(wc(n - alpha))/(pi(n - alpha)) with alpha = 10",
                  "h[10] = wc/pi = 0.5 (sinc limit)",
                  "h[9] = sin(0.5pi)/(pi) = 0.3183; h[11] same by symmetry",
                  "h[8] = sin(pi)/(2pi) = 0; h[12] = 0",
                  "Symmetry h[n] = h[20 - n] -> exactly linear phase, delay 10 samples",
                  "Transition ~ 4pi/21 = 0.19pi; stopband ~21 dB (Gibbs-limited)",
                ],
              },
              {
                q: "Explain the Gibbs phenomenon in rectangular-window FIR design and why increasing N does not remove it.",
                marks: 7,
                outline: [
                  "Truncation convolves the ideal wall with the Dirichlet kernel",
                  "Ripple peaks stay at a fixed fraction (~9 percent) of the jump",
                  "Increasing N compresses ripple spatially, not in amplitude",
                  "The -13 dB sidelobe level is a property of the window, not the length",
                  "Fix: taper the window (Hann/Hamming) instead",
                ],
              },
              {
                q: "Why do window-designed FIR filters automatically have linear phase?",
                marks: 7,
                outline: [
                  "hd[n] is symmetric about alpha = (N - 1)/2",
                  "Practical windows (rectangular, Hann, ...) are also symmetric",
                  "Product of symmetric sequences is symmetric",
                  "Symmetric h[n] -> H(e^jw) = e^(-jw·alpha)·A(w), A real",
                  "Phase is exactly -alpha·w: constant group delay alpha",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Other windows and worked FIR designs",
            body: [
              "Tapered windows trade main-lobe width for sidelobe depth, and the family is a ladder the examiner recites from a table. Bartlett (triangular): -25 dB sidelobes, transition ~6.1pi/N. Hann (raised cosine, a0 = 0.5): -31 dB, ~6.2pi/N, stopband ~44 dB. Hamming (a0 = 0.54): -41 dB, ~6.6pi/N, stopband ~53 dB - the everyday default. Blackman (two cosine terms): -57 dB, ~11pi/N, stopband ~74 dB. The pattern: each successive window tapers harder at the edges, pushing sidelobes down while widening the main lobe - transition width is the price of stopband depth.",
              "The Kaiser window ends the ladder with a dial: a adjustable parameter beta sets the sidelobe level continuously, and closed-form formulas size everything. Design recipe: from the spec, attenuation A = max needed stopband (dB) sets beta = 0.1102(A - 8.7) for A > 50 (a softer formula 0.5842(A - 21)^0.4 + 0.07886(A - 21) for 21 <= A <= 50); the transition width dw sets the length N >= (A - 7.95)/(2.285·dw). Worked design against the standing spec (As = 40 dB, transition 0.25pi): beta = 0.5842·(19)^0.4 + 0.07886·19 = 0.5842·3.248 + 1.498 = 3.396; N >= (40 - 7.95)/(2.285·0.25pi) = 32.05/1.796 = 17.8 -> 19 taps (odd). The Kaiser route needs 19 taps where Hamming needed 27 - the optimization saving the table's fixed shapes cannot reach.",
              "The Hamming version of the standing design for comparison: transition 0.25pi with 6.6pi/N -> N = 26.4 -> 27 taps, all set by one table row. The general design procedure, four steps, works for any window: (1) window choice from the stopband requirement (table lookup, or Kaiser beta formula); (2) length from the transition requirement (window's width constant over dw); (3) taps hd[n]·w[n] with alpha = (N - 1)/2; (4) verify |H(e^jw)| at wp and ws. The verification step catches the classic slip - forgetting that the transition constant approximations are just that, so the true response may miss the spec by a fraction of a dB and N must grow by 2.",
              "The exam pattern: a 14-marker gives a full spec and asks for a complete design (window, beta if Kaiser, N, first taps, predicted performance); a 7-marker asks to reproduce the window table or derive the Kaiser formulas' use. The table IS the answer to half of these - memorize the five rows (rect/Bartlett/Hann/Hamming/Blackman: -13/-25/-31/-41/-57 dB sidelobes; 4/6.1/6.2/6.6/11 over pi/N transitions) plus the two Kaiser formulas. One extra sentence earns respect: windows trade energy in the main lobe against energy in the sidelobes - there is no free taper.",
            ],
            keyTerms: [
              { term: "Hann window", definition: "w = 0.5(1 - cos(2pi·n/(N-1))); -31 dB sidelobes, ~6.2pi/N transition." },
              { term: "Hamming window", definition: "w = 0.54 - 0.46cos(...); -41 dB sidelobes, ~6.6pi/N, ~53 dB stopband." },
              { term: "Blackman window", definition: "Two cosine terms; -57 dB sidelobes, ~11pi/N transition." },
              { term: "Kaiser beta", definition: "beta = 0.1102(A - 8.7) for A > 50; softer formula for 21-50 dB." },
              { term: "Kaiser length", definition: "N >= (A - 7.95)/(2.285·dw) - closed-form design from any spec." },
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing a window from the spec",
              caption: "Stopband demand sets the window; transition budget sets N.",
              axes: { x: "Transition budget (wide -> narrow)", y: "Stopband needed (low -> high)" },
              quadrants: [
                { label: "Rectangular OK", note: "low stopband, wide transition allowed - spectral estimation" },
                { label: "Kaiser dial", note: "high stopband AND narrow transition - tune beta, N from formula" },
                { label: "Hann - the default", note: "moderate stopband, moderate transition" },
                { label: "Blackman / Hamming", note: "deep stopband, accept wide transition, longer N" },
              ],
            },
            table: {
              caption: "The window table (the exam's most-quoted numbers).",
              headers: ["Window", "Peak sidelobe", "Transition width", "Approx stopband"],
              rows: [
                ["Rectangular", "-13 dB", "4pi/N", "21 dB"],
                ["Bartlett", "-25 dB", "6.1pi/N", "25 dB"],
                ["Hann", "-31 dB", "6.2pi/N", "44 dB"],
                ["Hamming", "-41 dB", "6.6pi/N", "53 dB"],
                ["Blackman", "-57 dB", "11pi/N", "74 dB"],
                ["Kaiser (beta)", "-A dB (tunable)", "set by N >= (A - 7.95)/(2.285 dw)", "A dB by design"],
              ],
            },
            bullets: [
              "Tapering trades main-lobe width for sidelobe depth - no free window.",
              "Ladder: Rect -13, Bartlett -25, Hann -31, Hamming -41, Blackman -57 dB.",
              "Transitions: 4, 6.1, 6.2, 6.6, 11 over pi/N respectively.",
              "Kaiser: beta = 0.5842(A - 21)^0.4 + 0.07886(A - 21) for 21 <= A <= 50.",
              "Kaiser length: N >= (A - 7.95)/(2.285·dw).",
              "Standing spec (40 dB, 0.25pi): Kaiser beta = 3.40, N = 19; Hamming N = 27.",
              "Procedure: window from stopband, N from transition, taps hd·w, verify edges.",
            ],
            callout: {
              type: "exam",
              title: "Odd N for linear phase",
              body: "After any length formula, round UP to the nearest ODD number (19, 27, 59...). Odd N gives Type-I filters with h[n] = h[N - 1 - n] and a whole-sample delay (N - 1)/2 - the cleanest linear-phase case. Handing in an even N without comment forfeits the phase-property mark.",
            },
            examQuestions: [
              {
                q: "Design a linear-phase FIR low-pass meeting As = 40 dB with transition width 0.25pi, using (a) the Hamming window and (b) the Kaiser window. Give N, beta (if Kaiser), and the design taps' centre value for wc = pi/2.",
                marks: 14,
                outline: [
                  "(a) Hamming: 6.6pi/N <= 0.25pi -> N >= 26.4 -> N = 27",
                  "(b) Kaiser: beta = 0.5842(40 - 21)^0.4 + 0.07886·19 = 3.40",
                  "N >= (40 - 7.95)/(2.285·0.25pi) = 17.8 -> N = 19",
                  "Taps: hd[n] = sin(wc(n - alpha))/(pi(n - alpha)), alpha = 9 (Kaiser case)",
                  "Centre tap h[9] = wc/pi = 0.5, windowed by w[9] = 1 (peak of both windows)",
                  "Kaiser saves 8 taps by tuning beta to exactly the spec",
                ],
              },
              {
                q: "Reproduce the window comparison table (rectangular through Blackman) and explain the engineering tradeoff it encodes.",
                marks: 7,
                outline: [
                  "Rect -13 dB, 4pi/N, ~21 dB stopband",
                  "Bartlett -25 dB, 6.1pi/N; Hann -31 dB, 6.2pi/N",
                  "Hamming -41 dB, 6.6pi/N; Blackman -57 dB, 11pi/N",
                  "Tradeoff: deeper sidelobes cost wider main lobe (longer N)",
                  "Energy argument: tapering moves main-lobe energy into the skirt shape",
                ],
              },
              {
                q: "A spec demands 60 dB stopband with transition 0.05pi. Which window meets it and how many taps are needed?",
                marks: 7,
                outline: [
                  "Blackman tops out at ~74 dB - meets 60 dB; transition 11pi/N <= 0.05pi -> N >= 220",
                  "Kaiser: beta = 0.1102(60 - 8.7) = 5.65",
                  "N >= (60 - 7.95)/(2.285·0.05pi) = 52.05/0.359 = 145 -> 147 taps",
                  "Kaiser wins: 147 vs 220+ taps",
                  "Hamming (-41 dB peak) cannot reach 60 dB",
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
      weightedTopics: [
        { topic: "FFT: DIT/DIF butterflies, bit reversal, cost counts", weight: "≈ 12–15 marks", note: "The guaranteed 14-marker: draw N = 8, count butterflies, quote (N/2)log2N." },
        { topic: "DFT properties, circular convolution, zero-padding", weight: "≈ 10–14 marks", note: "One circular-convolution numerical with the linear comparison is near-certain." },
        { topic: "z-transform: ROC, inversion, pole-zero stability", weight: "≈ 10–14 marks", note: "Inversion with an annular ROC separates full-mark answers from partial ones." },
        { topic: "IIR design: impulse invariance and bilinear with prewarping", weight: "≈ 10–14 marks", note: "Bilinear + prewarping numbers (1055 Hz at fs = 8 kHz) repeat across papers." },
        { topic: "Windowing: rectangular taps, Gibbs, the window table, Kaiser", weight: "≈ 8–12 marks", note: "Design numericals: beta 3.40 and N = 19 for the 40 dB/0.25pi spec." },
        { topic: "Convolution sum and LTI analysis", weight: "≈ 8–10 marks", note: "Hand convolution {1,2,3}*{1,1} with the length check — quick marks." },
        { topic: "Difference equations: solution, stability, causality", weight: "≈ 8–10 marks", note: "y[n] = 2 - (0.5)^n style complete solutions with iterative verification." },
        { topic: "Structures, SFG, state-space, 2D DFT", weight: "≈ 6–8 marks", note: "Direct II diagrams, Mason, tf2ss, the 2x2 2D-DFT example." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, weekends for past papers. Every unit ends with one hand-computed numerical checked against numpy — the muscle memory catches sign slips in the hall.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — signals, systems, convolution", tasks: ["Energy/power classifications with numbers", "Five-property classification of standard systems", "Convolution {1,2,3}*{1,1} by hand + numpy check", "Difference-equation solution: y[n] - 0.5y[n-1] = u[n]", "DTFT of a^n u[n]: gains at w = 0 and pi"] },
        { week: "Week 2", focus: "Unit II — the z-transform", tasks: ["ROC rules; the a^n u[n] vs -a^n u[-n-1] pair", "Property table: shift, scaling, convolution, differentiation", "Inversion: partial fractions with an annular ROC", "Pole-zero stability: radius of 0.6 ± j0.3", "State-space: tf2ss construction and eigenvalue check"] },
        { week: "Week 3", focus: "Unit III — DFS, DFT, circular convolution", tasks: ["4-point DFT of {1,2,3,4} by hand, both directions", "Parseval check: 30 = (1/4)·120", "Circular convolution {5,3,5,7} vs linear {1,3,5,7,4}", "Zero-padding: resolution vs density argument", "2D DFT of [[1,2],[3,4]] and separability proof"] },
        { week: "Week 4", focus: "Unit IV — the FFT", tasks: ["Cost table: N^2 vs (N/2)log2N at 8/64/1024/4096", "Draw the 8-point DIT graph with all twiddles", "Constant-sequence walk-through: {1 x 8} -> {8, 0...}", "DIF mirror: butterfly order and output scrambling", "Composite N: radix-4 saving at 4096; Bluestein mention"] },
        { week: "Week 5", focus: "Unit V — filter design", tasks: ["Spec conversions: wp, ws, delta_p, delta_s", "Impulse invariance: 2/(s+2) at T = 0.1", "Bilinear: prewarp 1 kHz -> 6627 rad/s; first-order design", "Butterworth order: N = 6 from the prewarped spec", "Windowing: 21-tap rectangular; Kaiser beta 3.40, N = 19"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Redraw all anchor diagrams from memory", "Two full past papers under time", "Re-run the numerical drills list (last-day card)", "Compare-table practice: IIR vs FIR, DIT vs DIF, windows"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Always pair a structure or algorithm with its diagram: direct form II, the 8-point FFT graph, the bilinear mapping — the diagram earns half the marks.",
        "For z-inversion, write the ROC as a labelled line and assign each pole its u[n]/u[-n-1] side before inverting.",
        "Circular convolution numericals: show the (n - m) mod N index table, then compare with the linear result and name the wrapped tail.",
        "FFT answers quote both cost formulas (N^2 and (N/2)log2N) plus one concrete speedup (205x at N = 1024).",
        "State assumptions before solving: relaxed system (y[-1] = 0), T = 1/fs, prewarped edges — one line each.",
        "DFT questions lead with bin spacing fs/N and record duration N/fs; resolution = 1/T of REAL data, never zero-padding.",
        "Bilinear design: write Omega = (2/T)tan(w/2) first, prewarp every edge, then design analog.",
        "Attach fs to every digital frequency: 0.25pi rad/sample means nothing until fs = 8 kHz makes it 1 kHz.",
        "Time-box: 7 marks in 12 minutes, 14 in 22; leave 10 minutes to redraw the FFT graph and check the butterfly arithmetic.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: redraw the seven anchor diagrams (8-point DIT graph, butterfly, direct form II, bilinear mapping circle, Butterworth pole circle, window convolution picture, state-space loop), re-derive the four formulas (convolution sum, N/2·log2N cost, tan prewarp, Kaiser N), and re-run the five numerical drills (4-point DFT, circular convolution, bilinear first-order, Butterworth N = 6, Kaiser 19 taps). No new material tonight - consolidation wins this subject.",
      ],
      bullets: [
        "Omitting the ROC after X(z) - the transform is not unique without it.",
        "Inverting with all-causal terms when the ROC is annular - write the pole-vs-ROC table first.",
        "Applying initial conditions to the homogeneous part instead of the TOTAL solution.",
        "Treating a DFT shift as linear (zero-fill) instead of circular (wrap-around).",
        "Claiming zero-padding improves frequency resolution - it only densifies the grid.",
        "Writing X[1..7] = -4 for the ramp {1..8} - the ramp spectrum is not flat; use the constant-sequence check instead.",
        "Quoting the final-value theorem with a pole outside the unit circle - state the condition.",
        "Bilinear design without prewarping - the edges land off-spec by the tan factor.",
        "Increasing rectangular-window N to fix the stopband - sidelobes stay at -13 dB.",
        "Even tap counts for 'linear phase' - round up to odd N for Type-I symmetry.",
        "Forgetting the T factor in impulse invariance - h[n] = T·ha(nT), not just samples.",
        "Calling impulse invariance usable for high-pass - its replicas fold straight into the passband.",
      ],
    },
  ],
};

