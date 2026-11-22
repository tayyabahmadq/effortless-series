import type { AcademicSubject } from "./types";

export const it404: AcademicSubject = {
  id: "it-404",
  code: "IT-404",
  title: "Analog & Digital Communication",
  semester: "IV Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Five units walk from the signals-and-systems toolkit, through amplitude and angle modulation of a carrier, into sampling, PCM and delta coding, and finish with the digital keying schemes — ASK, FSK, PSK and QAM — that move bits over a channel.",
  description:
    "IT-404 opens with the language every later unit speaks: signal classification, standard test signals, system properties, Fourier transforms and convolution. Units II and III load a message onto a carrier — first by amplitude (DSB-FC and its modulation index, the suppressed-carrier family DSB-SC/SSB-SC/VSB-SC, modulators, detectors, transmitters and receivers), then by angle (FM, PM, deviation ratio, Carson bandwidth, discriminators, pre-emphasis). Unit IV converts waves into numbers — sampling theorems, PAM, TDM, quantization, PCM numericals, companding, DPCM and delta modulation. Unit V keys bits onto carriers — ASK, BFSK, BPSK, DPSK, QPSK/OQPSK, M-ary PSK and QAM — closing with bandwidth efficiency and Shannon capacity. Every section pairs a worked engineering example, carrying real numbers and waveforms, with the actual RGPV questions asked on that topic: numericals transcribed from the Jun 2022 through Jun 2026 papers anchor the practice.",
  accentColor: "#f59e0b",
  emoji: "AN",
  unitCount: 5,
  totalSections: 36,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Signals and Systems",
      summary:
        "Unit I builds the vocabulary the whole subject borrows: the block diagram of a communication system, the taxonomy of signals, the standard test signals, energy versus power, the classification of systems, and the Fourier transform and convolution machinery that turns time-domain waves into spectra.",
      chapter: {
        number: "01",
        title: "Signals, Systems and the Fourier Lens",
        intro:
          "Unit I covers the communication system block diagram, continuous/discrete and analog/digital signals, deterministic and random signals, the standard signals (DC, sinusoidal, step, ramp, signum, rectangular pulse, impulse), energy and power signals, linear/non-linear and causal/stable system classification, the Fourier transform with its properties and standard pairs, and the time and frequency convolution theorems.",
        inOneBreath:
          "A communication system is source → transmitter → noisy channel → receiver → destination; signals are classified by time axis, amplitude axis, predictability, repetition and energy content. Standard signals (impulse, step, ramp, signum, gate, sinusoid) are the test inputs whose transforms fill the FT table. Systems are judged by superposition (linearity), delay behaviour (time invariance), causality and BIBO stability — and only LTI systems reward you with the convolution integral and the frequency response H(ω).",
        sections: [
          {
            number: "1.1",
            title: "The communication system block diagram",
            body: [
              "A communication system is the chain of functional blocks that moves information from a source to a destination through a physical channel. The canonical diagram: information source → input transducer → transmitter (modulator plus power amplifier) → channel → receiver (demodulator plus amplifier) → output transducer → destination. The transmitter's job is to bind the low-frequency message to a high-frequency carrier so it can propagate; the channel — wire, fibre, free space — is modelled as the point where noise and distortion enter; the receiver undoes the modulation and hands the recovered signal to the transducer. Every unit of this course is the detailed design of one block or one modulation choice inside this diagram.",
              "A worked walk-through fixes the blocks in memory. In a 1 MHz AM broadcast link, the voice (300–3400 Hz) hits the microphone transducer and becomes an electrical signal; the transmitter's modulator multiplies it onto a 1 MHz carrier and the power amplifier feeds a quarter-wavelength antenna about 75 m long; the channel adds atmospheric and man-made noise on the way; the superheterodyne receiver down-converts everything to a fixed 455 kHz intermediate frequency, amplifies it with selective stages, and the envelope detector recovers the original 300–3400 Hz audio for the loudspeaker. Each block earns its place by transforming exactly one thing.",
              "The exam asks for the diagram by name — 'draw and label the basic components' was set verbatim in Nov 2023, Dec 2024 and Jun 2026. The full-mark answer draws the chain, writes one function line under each block, and closes with two remarks examiners look for: noise is added in the channel (not at the transmitter), and the transducers at the two ends convert between the physical world and the electrical world. Three sessions, same diagram, same marks.",
            ],
            keyTerms: [
              { term: "Transducer", definition: "A device converting a physical quantity (pressure, light) into an electrical signal, or back — microphone and loudspeaker are the classic pair." },
              { term: "Modulator", definition: "The transmitter block that varies a high-frequency carrier parameter in step with the message signal." },
              { term: "Channel", definition: "The physical transmission medium, modelled in analysis as the point where noise and distortion are added." },
              { term: "Demodulator", definition: "The receiver block that recovers the original message from the modulated carrier." },
            ],
            diagram: {
              kind: "flow",
              title: "The communication system",
              caption: "The five-block chain every later unit zooms into — noise enters at the channel, nowhere else.",
              steps: [
                { label: "Information source", note: "voice · data · video" },
                { label: "Transmitter", note: "modulate + amplify onto carrier" },
                { label: "Channel", note: "free space / cable — noise added here" },
                { label: "Receiver", note: "demodulate + filter" },
                { label: "Destination", note: "transducer back to physical form" },
              ],
            },
            bullets: [
              "Chain: source -> transducer -> transmitter -> channel -> receiver -> transducer -> destination.",
              "Transmitter binds a low-frequency message to a high-frequency carrier for propagation.",
              "Noise is modelled as entering the channel; the transmitter side is assumed ideal.",
              "Worked link: 300-3400 Hz voice -> 1 MHz AM carrier -> noisy channel -> 455 kHz IF -> envelope detector -> audio.",
              "The same diagram was demanded verbatim in Nov 2023, Dec 2024 and Jun 2026.",
            ],
            table: {
              caption: "Block · function · example.",
              headers: ["Block", "Function", "Example"],
              rows: [
                ["Input transducer", "physical quantity -> electrical signal", "microphone, camera"],
                ["Transmitter", "modulation + power amplification", "AM modulator at 1 MHz"],
                ["Channel", "carries the signal, adds noise", "free space, coaxial cable"],
                ["Receiver", "amplification + demodulation", "superheterodyne receiver"],
                ["Output transducer", "electrical signal -> physical form", "loudspeaker, display"],
              ],
            },
            callout: {
              type: "tip",
              title: "Say where the noise enters",
              body: "Answers that draw the blocks but omit 'noise added in the channel' routinely lose a mark. Write the noise arrow into the channel block explicitly — it shows the examiner you know the noise analysis of Units II–V applies at the channel, not at the source.",
            },
            examQuestions: [
              {
                q: "Draw and label the basic components of a communication system and explain the function of each block in detail.",
                marks: 7,
                appearances: ["Nov 2023", "Dec 2024", "Jun 2026"],
                outline: [
                  "Draw: source -> transducer -> transmitter -> channel -> receiver -> transducer -> destination",
                  "Transducer: converts physical quantity to electrical and back (mic, speaker)",
                  "Transmitter: modulator binds message to carrier, power amplifier feeds the antenna",
                  "Channel: medium of propagation — noise and distortion are added here",
                  "Receiver: selective amplification, demodulation, filtering",
                  "Close: recovered message matches the source; noise enters only at the channel",
                ],
              },
              {
                q: "Draw the block diagram of a communication system and describe the function of each block.",
                marks: 7,
                appearances: ["Jun 2026"],
              },
              {
                q: "Trace a 300–3400 Hz voice signal through every block of an AM broadcast system, naming the transformation each block performs.",
                marks: 7,
                outline: [
                  "Microphone: acoustic pressure -> electrical 300-3400 Hz",
                  "Modulator: multiply onto 1 MHz carrier -> AM wave with 5 kHz bandwidth",
                  "Power amplifier + 75 m quarter-wave antenna: radiation at 1 MHz",
                  "Channel: 1 MHz wave + atmospheric noise",
                  "Receiver: RF tuning, mixer to 455 kHz IF, IF gain, envelope detection",
                  "Loudspeaker: electrical audio -> acoustic pressure",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Signals and their classification",
            body: [
              "A signal is a function of one or more independent variables — here almost always time — carrying information. The syllabus's classification axes are five, and each is a pair: continuous-time versus discrete-time (is the time axis unbroken or sampled?), analog versus digital (is the amplitude a continuum or quantized levels?), deterministic versus non-deterministic (is a future value exactly predictable from a formula or only statistically?), periodic versus non-periodic (does x(t + T) = x(t) hold for a fundamental period T?), and energy versus power (treated fully in section 1.4). Two axes can combine freely: a staircase waveform is discrete-time and digital; a sampled sine is discrete-time and analog.",
              "A worked trace through a real transmitter shows the labels moving. A microphone output is continuous-time and analog — every instant, every amplitude is present. Sampling that voice at 8 kHz produces discrete-time, still-analog samples whose amplitudes are unquantized — that is PAM (Unit IV). Passing the samples through a quantizer and an 8-bit encoder produces discrete-time digital data — that is PCM. On the channel the digital bits key a carrier (Unit V), and the demodulated waveform at the receiver is again analog. One message, four classifications, in the order the units of this course visit them.",
              "The exam angle: Jun 2023 asked to 'classify the signals and explain each with suitable waveform diagrams and their expressions', Dec 2024 asked how to determine whether a signal is analog or digital and the key differences, and Nov 2023 folded signal types into the block-diagram question. The expected answer draws one small waveform per class, gives the defining expression — x(t + T) = x(t) for periodic, x(t) = m(t) known for all t for deterministic — and states one practical consequence per pair (analog degrades gradually, digital regenerates cleanly).",
            ],
            keyTerms: [
              { term: "Continuous-time signal", definition: "Defined at every instant of t; the time axis is unbroken." },
              { term: "Discrete-time signal", definition: "Defined only at sampled instants, usually nT; written x[n]." },
              { term: "Analog signal", definition: "Amplitude takes any value in a continuum — a sine wave, a voice voltage." },
              { term: "Digital signal", definition: "Amplitude restricted to a finite set of quantized levels, encoded as symbols." },
              { term: "Deterministic signal", definition: "Expressible as an explicit function of time, so future values are exactly known — contrast random noise." },
            ],
            diagram: {
              kind: "compare",
              title: "Analog vs digital signals",
              caption: "The amplitude axis decides the label — and the regeneration story that follows from it.",
              left: {
                heading: "Analog",
                items: [
                  "Amplitude is a continuum of values",
                  "Voice voltage, sine wave, PAM samples",
                  "Noise adds permanently — no clean regeneration",
                  "Simple hardware, degraded by distance",
                ],
              },
              right: {
                heading: "Digital",
                items: [
                  "Amplitude restricted to quantized levels",
                  "PCM bit stream, keyed carrier",
                  "Noise up to a margin is removed by regeneration",
                  "Needs quantization and synchronization hardware",
                ],
              },
            },
            bullets: [
              "Five axes: continuous/discrete (time), analog/digital (amplitude), deterministic/random, periodic/aperiodic, energy/power.",
              "The axes combine: a sampled unquantized sine is discrete-time analog; its quantized version is digital.",
              "Periodic means x(t + T) = x(t) for a fundamental period T.",
              "Journey trace: voice (analog) -> PAM (discrete analog) -> PCM (digital) -> keyed carrier (Unit V).",
              "Analog degrades gradually with noise; digital regenerates cleanly up to the noise margin.",
            ],
            table: {
              caption: "Classification pairs and one example each.",
              headers: ["Pair", "Discriminator", "Example"],
              rows: [
                ["Continuous vs discrete", "time axis: every t, or sampled instants nT", "sine wave vs PAM samples"],
                ["Analog vs digital", "amplitude: continuum vs quantized levels", "voice voltage vs PCM bits"],
                ["Deterministic vs random", "future value: exact formula vs statistics only", "cos ωt vs thermal noise"],
                ["Periodic vs aperiodic", "x(t + T) = x(t)?", "square wave vs single pulse"],
                ["Energy vs power", "finite energy, or finite average power", "gate pulse vs sinusoid"],
              ],
            },
            callout: {
              type: "exam",
              title: "Classify with waveforms, not words",
              body: "Jun 2023 set 'classify the signals and explain each with suitable waveform diagrams and their expressions' and Dec 2024 asked the analog-vs-digital differences. Draw one labelled waveform per class — a bare list of names scores half. The energy/power axis is asked separately (Jun 2025, Jun 2026) and is covered in section 1.4.",
            },
            examQuestions: [
              {
                q: "Classify the signals and explain each type with suitable waveform diagrams and their expressions.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Continuous-time vs discrete-time: draw a sine and its stem plot",
                  "Analog vs digital: continuum of amplitudes vs quantized levels",
                  "Deterministic vs non-deterministic: cos ωt known for all t; noise only statistical",
                  "Periodic vs non-periodic: x(t + T) = x(t) — square wave vs single pulse",
                  "Energy vs power signals: one line each (details in the energy section)",
                  "Close: the axes combine — a quantized sampled sine is discrete-time digital",
                ],
              },
              {
                q: "What do you understand by a signal? How do you determine whether a signal is analog or digital, and what are the key differences between them?",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Signal: a function of time (or space) carrying information",
                  "Analog: amplitude continuous; digital: amplitude quantized to levels",
                  "Test: count the amplitude values the signal may take",
                  "Noise: analog accumulates, digital regenerates up to a margin",
                  "Hardware: analog simple, digital needs quantizer + clock",
                  "Example: microphone output vs PCM encoder output",
                ],
              },
              {
                q: "A voice signal is sampled at 8 kHz, quantized to 256 levels and transmitted. Classify the signal before sampling, after sampling and after quantization.",
                marks: 7,
                outline: [
                  "Before sampling: continuous-time, analog",
                  "After sampling (PAM): discrete-time, analog — amplitudes unquantized",
                  "After quantization + encoding (PCM): discrete-time, digital, 8 bits per sample",
                  "256 levels = 2^8 -> 8-bit words; bit rate 64 kbps at 8 kHz",
                  "Each stage corresponds to one Unit IV block",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "The standard signals",
            body: [
              "The standard signals are a small cast of functions used as test inputs and building blocks for every other signal: DC (a constant A), the sinusoid A cos(ωt + φ), the unit step u(t) (0 for t < 0, 1 for t ≥ 0), the ramp r(t) = t·u(t), the signum sgn(t) (−1 for t < 0, +1 for t > 0), the rectangular pulse (gate) g(t) = u(t + τ/2) − u(t − τ/2) of width τ, and the unit impulse δ(t) — zero everywhere except t = 0, infinite height, unit area. Their importance is structural: the step is 'switch on at t = 0', the gate is 'a finite observation window', and the impulse is the probe whose response reveals a system completely.",
              "Two worked traces show the algebra style the paper demands. The sifting (sampling) property ∫ δ(t − t₀) f(t) dt = f(t₀) turns Jun 2023's integral into one line: ∫₀³ δ(t) sin 2πt dt = sin 2π·0 = 0. And composing steps gives windows: x(t) = u(t) − u(t − 1) is a one-second gate from 0 to 1, so y(t) = x(2t + 3) is non-zero where 0 ≤ 2t + 3 ≤ 1, i.e. for −1.5 ≤ t ≤ −1 — the Jun 2022 answer is a gate of width 0.5 sitting between t = −1.5 and t = −1.",
              "The exam angle is 'define and sketch': Jun 2022 asked for signum, impulse and unit step sketches; Jun 2023 asked for rectangular pulse, triangular pulse and signum with expressions and waveforms; Jun 2026 asked to sketch step, ramp, signum and impulse alongside the energy/power classification. Each sketch must show the discontinuity honestly — u(t) drawn with value 1/2 at the origin is the convention examiners accept — and each expression must be written beside the waveform.",
            ],
            keyTerms: [
              { term: "Unit step u(t)", definition: "0 for t < 0 and 1 for t ≥ 0 — the mathematical 'switch on at t = 0'." },
              { term: "Ramp r(t)", definition: "t·u(t) — the running integral of the unit step." },
              { term: "Signum sgn(t)", definition: "−1 for negative t, +1 for positive t; equal to 2u(t) − 1." },
              { term: "Rectangular pulse (gate)", definition: "u(t + τ/2) − u(t − τ/2): unity over a window of width τ, zero outside." },
              { term: "Unit impulse δ(t)", definition: "Zero except at t = 0, unit area; its sifting property picks out f(t₀) from an integral." },
            ],
            diagram: {
              kind: "layers",
              title: "The standard signals stack",
              caption: "Each layer is built from the one below — the impulse is the atom, sinusoids are the Fourier currency.",
              layers: [
                { label: "Impulse δ(t)", note: "the atom — unit area at one instant" },
                { label: "Step u(t) and ramp r(t)", note: "running integrals of the impulse and step" },
                { label: "Gate, signum, triangular", note: "composed by adding and shifting steps" },
                { label: "DC and sinusoids", note: "the Fourier building blocks of every spectrum" },
              ],
            },
            bullets: [
              "Cast: DC, sinusoid, u(t), r(t) = t·u(t), sgn(t) = 2u(t) − 1, gate of width τ, impulse δ(t).",
              "Gate = u(t + τ/2) − u(t − τ/2); triangular pulse = integral of a pair of gates.",
              "Sifting property: ∫ δ(t − t0) f(t) dt = f(t0) — the fastest marks on the paper.",
              "Jun 2023 integral: ∫₀³ δ(t) sin 2πt dt = sin 0 = 0.",
              "Jun 2022 trace: x(t) = u(t) − u(t − 1) -> x(2t + 3) is a gate of width 0.5 on t ∈ [−1.5, −1].",
              "Sketch each waveform beside its expression — bare definitions score half.",
            ],
            codeExample: {
              language: "python",
              caption: "standard_signals.py — sketching the cast",
              code: `import numpy as np

t = np.linspace(-2, 4, 1000)
step   = np.where(t >= 0, 1.0, 0.0)                 # u(t)
ramp   = np.where(t >= 0, t, 0.0)                   # r(t) = t*u(t)
signum = np.sign(t)                                  # sgn(t) = 2u(t) - 1
gate   = np.where((t >= 0) & (t <= 1), 1.0, 0.0)     # u(t) - u(t-1)

# the impulse as the limit of narrower, taller pulses (area stays 1):
for width in [0.5, 0.2, 0.05]:
    pulse = np.where(np.abs(t) <= width / 2, 1 / width, 0.0)
    print(width, pulse.max())       # height 2, 5, 20 — area still 1`,
            },
            callout: {
              type: "exam",
              title: "Impulse integrals are free marks",
              body: "Jun 2023 asked to 'write down the function of the unit impulse and evaluate ∫₀³ δ(t) sin 2πt dt'. Answer in one line with the sifting property: the impulse picks out the integrand at t = 0, so the value is sin 0 = 0. State the property, substitute, done — this is the cheapest 7-mark half on the paper.",
            },
            examQuestions: [
              {
                q: "Define and sketch the following signals: signum function, impulse function, unit step function.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "u(t): 0 for t < 0, 1 for t > 0 — sketch with the t = 0 convention noted",
                  "sgn(t) = 2u(t) − 1: −1 below, +1 above, 0 at origin",
                  "δ(t): zero except t = 0, infinite height, unit area — draw as an arrow of area 1",
                  "Relations: u(t) = ∫₋∞ᵗ δ(τ)dτ; δ(t) = du/dt",
                  "Sketch each waveform beside its expression",
                ],
              },
              {
                q: "Write down the function of the unit impulse and evaluate x(t) = ∫₀³ δ(t) sin 2πt dt.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Sifting property: ∫ δ(t − t0) f(t) dt = f(t0)",
                  "The impulse lies at t = 0, inside [0, 3]",
                  "Value = sin(2π·0) = 0",
                  "Also state the impulse's defining roles: unit area, derivative of u(t)",
                  "Note: had the impulse sat outside the limits the integral would be 0 — mention it",
                ],
              },
              {
                q: "If x(t) = u(t) − u(t − 1), plot y(t) = x(2t + 3).",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "x(t) is a gate of unit amplitude from t = 0 to t = 1",
                  "x(2t + 3) is non-zero where 0 ≤ 2t + 3 ≤ 1",
                  "Solve: −1.5 ≤ t ≤ −1",
                  "Time-scaling by 2 halves the width; shifting by 3/2 moves it left",
                  "Result: a gate of width 0.5 s between t = −1.5 and t = −1",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Energy and power signals",
            body: [
              "Two normalizations divide all signals. The energy of x(t) is E = ∫₋∞∞ |x(t)|² dt; a signal with 0 < E < ∞ is an energy signal — its average power P = lim(T→∞) (1/2T)∫|x|²dt over any long window is zero. A signal with finite nonzero average power is a power signal — its total energy is infinite. Every practical finite-duration waveform (a gate pulse, a decaying exponential, a single bit) is an energy signal; every periodic or everlasting waveform (a sinusoid, DC, a periodic square wave) is a power signal. A few signals are neither: the ramp t·u(t) has infinite energy and infinite power.",
              "The worked numbers are one-line integrals and they repeat in papers. A rectangular pulse of amplitude A and width τ: E = A²τ — finite, so energy signal (Jun 2025 and Jun 2026 both asked exactly this determination). A sinusoid of amplitude A: E = ∞ but P = A²/2 — the classic power signal. The unit step: E = ∞, but P = lim (1/2T)·T = 1/2 — a power signal with half a watt into one ohm, the answer most students get wrong. A decaying exponential e^(−2t)u(t): E = ∫₀∞ e^(−4t) dt = 1/4 — energy signal.",
              "The exam angle: the question arrives as 'differentiate between energy and power signals, determine whether a rectangular pulse of finite amplitude is energy or power' (Jun 2025) or as the sketch-and-classify combo of Jun 2026. Full marks need three things: both definitions written as integrals, the rect-pulse computation A²τ, and one example each way — sinusoid for power, exponential for energy. The trap is declaring DC or u(t) an energy signal: they are power signals, because energy integrates to infinity while power stays finite.",
            ],
            keyTerms: [
              { term: "Energy E", definition: "E = ∫ |x(t)|² dt over all time; finite and nonzero for an energy signal." },
              { term: "Average power P", definition: "P = lim(T→∞) (1/2T) ∫|x(t)|² dt over a window of width 2T." },
              { term: "Energy signal", definition: "Finite energy, zero average power — any finite-duration finite-amplitude waveform." },
              { term: "Power signal", definition: "Finite average power, infinite energy — periodic and everlasting signals." },
            ],
            diagram: {
              kind: "compare",
              title: "Energy signal vs power signal",
              caption: "One integral decides the label: total area of |x|², or its long-window average.",
              left: {
                heading: "Energy signal",
                items: [
                  "E finite, P = 0",
                  "Exists over a finite duration",
                  "Rect pulse: E = A²τ",
                  "e^(−2t)u(t): E = 1/4 into 1 Ω",
                ],
              },
              right: {
                heading: "Power signal",
                items: [
                  "E = ∞, P finite and nonzero",
                  "Everlasting or periodic",
                  "Sinusoid: P = A²/2 into 1 Ω",
                  "u(t) and DC: P finite — the classic trap",
                ],
              },
            },
            bullets: [
              "E = ∫|x|² dt; P = lim (1/2T) ∫|x|² dt over 2T.",
              "Energy signal: 0 < E < ∞, P = 0 — gates, single pulses, decaying exponentials.",
              "Power signal: E = ∞, P finite — sinusoids (P = A²/2), DC, u(t) (P = 1/2).",
              "Rect pulse of amplitude A, width τ: E = A²τ — the asked determination (Jun 2025, Jun 2026).",
              "Ramp t·u(t) is neither: E = ∞ and P = ∞.",
              "Write both integrals before classifying — the integrals are the marks.",
            ],
            table: {
              caption: "Classify the usual suspects.",
              headers: ["Signal", "Energy E", "Power P", "Class"],
              rows: [
                ["Rect pulse A, width τ", "A²τ", "0", "Energy"],
                ["e^(−2t)u(t)", "1/4 (into 1 Ω)", "0", "Energy"],
                ["Sinusoid A cos ωt", "∞", "A²/2", "Power"],
                ["Unit step u(t)", "∞", "1/2", "Power"],
                ["Ramp t·u(t)", "∞", "∞", "Neither"],
              ],
            },
            callout: {
              type: "warning",
              title: "u(t) is a power signal, not energy",
              body: "Students mark the unit step and DC as energy signals because they look 'finite'. But E = ∫₁^∞ 1² dt diverges while the long-window average stays 1/2 — power signal. The same slip loses marks in Jun 2025- and Jun 2026-style answers. Compute both integrals every time.",
            },
            examQuestions: [
              {
                q: "Differentiate between energy and power signals. Determine whether a rectangular pulse of finite amplitude is an energy or power signal.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "E = ∫|x|² dt; P = lim (1/2T)∫|x|² dt",
                  "Energy signal: finite E, zero P; power signal: finite P, infinite E",
                  "Rect pulse amplitude A width τ: E = A²τ — finite",
                  "Therefore energy signal; its average power tends to 0",
                  "Contrast: sinusoid is a power signal with P = A²/2",
                  "Neither-class example: the ramp",
                ],
              },
              {
                q: "Classify signals as energy and power signals. Sketch the standard signals: unit step, ramp, signum and impulse.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "Definitions of E and P as integrals",
                  "Energy class: gates, single pulses, decaying exponentials",
                  "Power class: sinusoid P = A²/2, DC, u(t) with P = 1/2",
                  "Sketch u(t), r(t) = t·u(t), sgn(t) = 2u(t) − 1, δ(t) as unit-area arrow",
                  "Note u(t) is a power signal — the common slip",
                ],
              },
              {
                q: "Show that the unit step u(t) is a power signal and compute its average power into 1 Ω.",
                marks: 7,
                outline: [
                  "E = ∫₀^∞ 1 dt = ∞ — not an energy signal",
                  "P = lim(T→∞) (1/2T) ∫₀^T 1 dt = lim T/2T = 1/2",
                  "Finite nonzero power -> power signal",
                  "Same argument gives DC of amplitude A: P = A²",
                  "Contrast: e^(−2t)u(t) has finite energy 1/4 — an energy signal",
                  "Moral: compute both integrals before classifying",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Systems and their classification",
            body: [
              "A system is a mapping from an input signal x(t) to an output signal y(t) — written y(t) = T[x(t)] — and the syllabus classifies systems along four axes. Linear: superposition holds, T[a·x₁ + b·x₂] = a·T[x₁] + b·T[x₂]; otherwise non-linear. Time-invariant: a delay of the input delays the output identically, T[x(t − t₀)] = y(t − t₀); otherwise time-variant. Causal: the output at time t depends only on present and past inputs — no anticipation; otherwise non-causal. Stable (BIBO): every bounded input produces a bounded output; for LTI systems the test is ∫₋∞∞ |h(t)| dt < ∞.",
              "Worked checks are the expected currency. y(t) = x(t²) is non-causal (output at t = 1 needs x(1) and also x at negative argument) and time-variant (delaying x does not shift t²). y(t) = 2x(t) + 3 is non-linear despite looking innocent — an input scaled by a does not scale the output by a, because of the +3 offset; y(t) = 2x(t) is linear. The Nov 2023 paper worked a causal LTI system with impulse response h(t) = e^(−2t)u(t): ∫₀∞ e^(−2t) dt = 1/2 < ∞, so it is BIBO stable, and its Fourier transform H(ω) = 1/(2 + jω) is a low-pass response with |H| falling from 0.5 at DC.",
              "The exam angle: this block of theory is the subject's most repeated question — Jun 2022 asked linear vs non-linear with examples, Jun 2025 asked to classify systems as linear/non-linear, time-variant/invariant, causal/non-causal and stable/unstable with examples, and Jun 2026 asked the same four definitions with one example each. The full-mark pattern: define each property in one line, then verify one concrete system per property by applying the test — not just naming the class.",
            ],
            keyTerms: [
              { term: "Linearity", definition: "Superposition: T[a x₁ + b x₂] = a T[x₁] + b T[x₂] for all scalars a, b." },
              { term: "Time invariance", definition: "T[x(t − t₀)] = y(t − t₀) — the system behaves the same at every clock reading." },
              { term: "Causality", definition: "Output at time t depends only on input at t and earlier — no future peeking." },
              { term: "BIBO stability", definition: "Every bounded input yields a bounded output; for LTI systems, ∫|h(t)| dt < ∞." },
              { term: "Impulse response h(t)", definition: "The output when the input is δ(t); it characterizes an LTI system completely." },
            ],
            diagram: {
              kind: "compare",
              title: "The LTI world vs everything else",
              caption: "Only linear time-invariant systems grant the convolution integral and the frequency response — the tools of Unit I.",
              left: {
                heading: "Linear time-invariant (LTI)",
                items: [
                  "Superposition and delay symmetry hold",
                  "Output = convolution y(t) = x(t) * h(t)",
                  "Frequency response H(ω) fully describes it",
                  "h(t) = e^(−2t)u(t): stable, low-pass",
                ],
              },
              right: {
                heading: "Non-linear or time-variant",
                items: [
                  "Superposition fails (offsets, squaring, saturation)",
                  "No single impulse response",
                  "Spectral analysis needs linearization",
                  "y(t) = x(t²) or y(t) = 2x(t) + 3: the paper's counterexamples",
                ],
              },
            },
            bullets: [
              "Four axes: linear/non-linear, time-invariant/variant, causal/non-causal, stable/unstable.",
              "Linearity test: apply superposition with scalars; the +3 offset kills it (y = 2x + 3 is non-linear).",
              "Time-invariance test: delay input, compare; y(t) = x(t²) fails because t² mixes delays.",
              "Causality test: does the output need future x? x(t²) at negative t does — non-causal.",
              "Stability for LTI: ∫|h(t)| dt < ∞ — e^(−2t)u(t) gives 1/2, stable.",
              "Frequency response: H(ω) = FT of h(t); for h = e^(−2t)u(t), H(ω) = 1/(2 + jω) (Nov 2023).",
            ],
            codeExample: {
              language: "python",
              caption: "lti_check.py — the Nov 2023 system's frequency response",
              code: `import numpy as np

# causal LTI system: h(t) = e^(-2t) u(t)     (Nov 2023 paper)
# H(w) = FT of h(t) = 1 / (2 + jw);  stability: integral of h = 1/2 < inf
w = np.array([0, 1, 2, 5, 10, 50], dtype=float)
H = 1 / (2 + 1j * w)
print(np.round(np.abs(H), 3))               # 0.5 0.447 0.354 0.186 0.098 0.02
print(np.round(np.degrees(np.angle(H)), 1)) # 0 -> -87.7 deg: low-pass roll-off`,
            },
            callout: {
              type: "exam",
              title: "Three sessions, four properties",
              body: "System classification is the most repeated Unit I question: Jun 2022 (linear vs non-linear), Jun 2025 (all four pairs with examples) and Jun 2026 (define linear, time-invariant, causal, stable with one example each). Memorize one verified example per axis: y = 2x (linear), y = x² (non-linear), y = x(t − 2) (time-invariant), y = x(t²) (non-causal), h = e^(−2t)u(t) (stable).",
            },
            examQuestions: [
              {
                q: "Classify systems as linear/non-linear, time-variant/invariant, causal/non-causal and stable/unstable with examples.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Linearity: superposition; y = 2x linear, y = 2x + 3 non-linear (offset)",
                  "Time invariance: delayed input -> delayed output; y = x(t − 2) invariant, y = x(t²) variant",
                  "Causality: no dependence on future input; y = x(t²) non-causal for t < 0",
                  "Stability: bounded input -> bounded output; check ∫|h| dt",
                  "h(t) = e^(−2t)u(t): integral 1/2, stable LTI with H(ω) = 1/(2 + jω)",
                ],
              },
              {
                q: "Define linear, time-invariant, causal and stable systems with one example each.",
                marks: 7,
                appearances: ["Jun 2026"],
              },
              {
                q: "A causal LTI system has impulse response h(t) = e^(−2t)u(t). Determine and sketch its frequency response H(ω).",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "H(ω) = ∫₀^∞ e^(−2t) e^(−jωt) dt = 1/(2 + jω)",
                  "Magnitude |H| = 1/√(4 + ω²): 0.5 at DC, 0.354 at ω = 2, falls as 1/ω",
                  "Phase φ = −arctan(ω/2): 0° to −90°",
                  "Low-pass behaviour with 3 dB point at ω = 2 rad/s",
                  "Stability: ∫|h| = 1/2 < ∞",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "The Fourier transform and its properties",
            body: [
              "The Fourier transform converts a time-domain signal into its frequency-domain portrait: X(ω) = ∫₋∞∞ x(t) e^(−jωt) dt, with the inverse x(t) = (1/2π)∫ X(ω) e^(jωt) dω returning it. Existence conditions: sufficient that x(t) be absolutely integrable (∫|x| dt < ∞), with the Dirichlet conditions (finite extrema in any finite interval, finite number of finite discontinuities) as the classical statement — relaxed for power signals by allowing impulses in the spectrum. The transform is the subject's central lens: every modulation result in Units II–V is stated as a spectrum, and every receiver filter is judged by H(ω).",
              "The standard pairs carry the marks. Gate of width τ: τ·sinc(ωτ/2) — the sinc that later shapes every sampled spectrum (Unit IV). Constant A: 2πA·δ(ω) — DC lives at one frequency line. δ(t): 1 — flat spectrum, all frequencies equally. Unit step: πδ(ω) + 1/(jω) — an impulse at DC plus a 1/ω roll-off. One-sided exponential e^(−at)u(t): 1/(a + jω) — the Nov 2023 low-pass. Cosine: π[δ(ω − ω₀) + δ(ω + ω₀)] — two lines at ±ω₀. Properties: linearity, time shift (e^(−jωt₀)), frequency shift (the modulation theorem that Units II–V live on), time scaling, duality, convolution, multiplication, and Parseval's energy theorem.",
              "The exam angle: transform computation is a guaranteed block of marks. Dec 2024 asked for the FT of gate, unit step and delta; Jun 2025 asked unit step and gate; Jun 2026 asked to state the properties and find the FT of the unit impulse and a constant; and Jun 2022 asked to state and prove the time-scaling property (F{x(at)} = (1/|a|)X(ω/a)) — proof by substituting u = at in the defining integral and splitting a > 0 and a < 0. Practice writing the scaling proof: it is the one property proof the paper has already set.",
            ],
            keyTerms: [
              { term: "Fourier transform X(ω)", definition: "X(ω) = ∫ x(t) e^(−jωt) dt — the signal's frequency-domain portrait." },
              { term: "Sifting pair δ(t) ↔ 1", definition: "An impulse has a flat spectrum; a constant's spectrum is an impulse at ω = 0." },
              { term: "Modulation (frequency-shift) property", definition: "F{x(t)e^(jωc t)} = X(ω − ωc) — the mathematical heart of every modulator." },
              { term: "Time-scaling property", definition: "F{x(at)} = (1/|a|) X(ω/a) — compressing time stretches the spectrum." },
              { term: "Parseval's theorem", definition: "Energy computed in time equals energy computed in frequency: ∫|x|² dt = (1/2π)∫|X|² dω." },
            ],
            diagram: {
              kind: "flow",
              title: "One signal, two portraits",
              caption: "Analysis and synthesis are the same integral with opposite signs — properties let you skip the integration.",
              steps: [
                { label: "Time signal x(t)", note: "waveform as drawn on an oscilloscope" },
                { label: "Analyze", note: "X(ω) = ∫ x(t) e^(-jωt) dt" },
                { label: "Spectrum X(ω)", note: "lines, lobes, roll-offs" },
                { label: "Synthesize", note: "x(t) = (1/2π) ∫ X(ω) e^(jωt) dω" },
              ],
            },
            bullets: [
              "Pair table is the exam: gate -> τ sinc(ωτ/2); A -> 2πAδ(ω); δ(t) -> 1; u(t) -> πδ(ω) + 1/(jω).",
              "e^(−at)u(t) -> 1/(a + jω); cos ω₀t -> π[δ(ω − ω₀) + δ(ω + ω₀)].",
              "Existence: absolute integrability is sufficient; Dirichlet conditions are the classical statement.",
              "Time-scaling proof (Jun 2022): substitute u = at; result F{x(at)} = (1/|a|)X(ω/a).",
              "Frequency shift F{x e^(jωct)} = X(ω − ωc) — quote it in every modulation derivation.",
              "Gate's sinc is the pre-echo of Unit IV's sampling spectra.",
            ],
            table: {
              caption: "The pairs the paper asks for.",
              headers: ["Time signal", "Fourier transform", "Shape"],
              rows: [
                ["Gate, width τ", "τ·sinc(ωτ/2)", "main lobe + side lobes"],
                ["Constant A", "2πA·δ(ω)", "one line at DC"],
                ["Impulse δ(t)", "1", "flat — all frequencies"],
                ["Unit step u(t)", "πδ(ω) + 1/(jω)", "DC line + 1/ω tail"],
                ["e^(−at)u(t), a > 0", "1/(a + jω)", "low-pass roll-off"],
                ["cos ω₀t", "π[δ(ω−ω₀) + δ(ω+ω₀)]", "two lines at ±ω₀"],
              ],
            },
            callout: {
              type: "exam",
              title: "FT pairs: three sessions in a row",
              body: "Transform computation appeared in Dec 2024 (gate, step, delta), Jun 2025 (step, gate) and Jun 2026 (properties + impulse + constant), with the time-scaling proof set back in Jun 2022. Memorize the six-pair table cold — the marks are for writing the pair correctly and stating the property used, not for re-deriving the integral.",
            },
            examQuestions: [
              {
                q: "Find the Fourier Transform of the following functions: (i) Gate (ii) Unit Step (iii) Delta.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Gate width τ: X(ω) = ∫₋τ/2^τ/2 e^(−jωt) dt = τ sinc(ωτ/2)",
                  "Unit step: πδ(ω) + 1/(jω) — DC line plus 1/ω decay",
                  "Delta: X(ω) = 1 — flat spectrum",
                  "Sketch the sinc main lobe and the flat spectrum",
                  "State the existence condition used for each (absolute integrability; Dirichlet)",
                ],
              },
              {
                q: "Find the Fourier Transform of the following signals: (i) unit step (ii) gate function.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "State the properties of the Fourier transform and find the Fourier transform of a unit impulse and a constant.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "Properties: linearity, time shift, frequency shift, scaling, duality, convolution, Parseval",
                  "δ(t): X(ω) = 1 by the sifting property",
                  "Constant A: X(ω) = 2πA δ(ω) — via duality with the impulse pair",
                  "One-line interpretation: flat spectrum vs single DC line",
                  "Close with the pair used most in this course: the frequency-shift (modulation) property",
                ],
              },
              {
                q: "State and prove the time-scaling property of the Fourier transform.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "Claim: F{x(at)} = (1/|a|) X(ω/a)",
                  "Substitute u = at in ∫ x(at) e^(−jωt) dt",
                  "For a > 0: (1/a) ∫ x(u) e^(−j(ω/a)u) du = (1/a) X(ω/a)",
                  "For a < 0 the limits flip, giving 1/|a|",
                  "Interpretation: compressing time stretches the spectrum by |a|",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Convolution and the convolution theorems",
            body: [
              "Convolution is the operation an LTI system performs: the output is y(t) = x(t) * h(t) = ∫₋∞∞ x(τ) h(t − τ) dτ — the input's present and past, each weighted by the impulse response read backwards. The graphical recipe has four moves: fold h about the vertical axis (h(−τ)), shift it to t, multiply the overlapping curves, integrate the product area. Convolution is commutative and associative, and for causal systems the integral starts at τ = 0 because h(τ) vanishes for negative argument.",
              "A worked trace with the paper's own signals: input x(t) the one-second gate u(t) − u(t − 1), system h(t) = e^(−2t)u(t). For 0 ≤ t ≤ 1, y(t) = ∫₀ᵗ e^(−2(t−τ)) dτ = (1 − e^(−2t))/2 — the classic charging curve, reaching (1 − e^(−1))/2 ≈ 0.316 at t = 0.5. For t ≥ 1 the gate has ended and y(t) = e^(−2t)(e² − 1)/2 — a pure decay. The output is a rounded, delayed version of the gate: exactly what a low-pass filter does to a rectangular burst.",
              "The theorems convert convolution into multiplication and are the bridge to Unit II. Time convolution theorem: F{x₁ * x₂} = X₁(ω)·X₂(ω) — hence output spectra multiply: Y(ω) = X(ω)H(ω), the frequency-response picture. Frequency convolution theorem: F{x₁(t)·x₂(t)} = (1/2π) X₁(ω) * X₂(ω) — multiplication in time convolves in frequency, and it is precisely this theorem that puts sidebands around the carrier when a message multiplies it in Unit II. Dec 2024 set both theorems as a short note; prove one and state the other.",
            ],
            keyTerms: [
              { term: "Convolution integral", definition: "y(t) = ∫ x(τ) h(t − τ) dτ — the LTI input-output relation." },
              { term: "Fold-shift-multiply-integrate", definition: "The four graphical steps for evaluating a convolution by hand." },
              { term: "Time convolution theorem", definition: "F{x * h} = X(ω)H(ω) — convolution in time is multiplication in frequency." },
              { term: "Frequency convolution theorem", definition: "F{x₁·x₂} = (1/2π) X₁ * X₂ — multiplication in time is convolution in frequency." },
            ],
            diagram: {
              kind: "flow",
              title: "Graphical convolution in four moves",
              caption: "Repeat the cycle for each value of t; the output is the area under each product curve.",
              steps: [
                { label: "Fold", note: "reflect h(τ) to h(−τ)" },
                { label: "Shift", note: "slide to h(t − τ)" },
                { label: "Multiply", note: "overlap x(τ)·h(t − τ)" },
                { label: "Integrate", note: "area under the product = y(t)" },
              ],
            },
            bullets: [
              "LTI output: y(t) = x(t) * h(t); causal systems integrate from τ = 0.",
              "Graphical order: fold, shift, multiply, integrate — one pass per t.",
              "Worked trace: gate through e^(−2t)u(t) gives (1 − e^(−2t))/2 then a decay.",
              "Time convolution theorem: X * H — spectra multiply, filters get H(ω).",
              "Frequency convolution theorem: (1/2π) X * H — the origin of modulation sidebands.",
              "Dec 2024 set both theorems as a short note — prove one, state the other.",
            ],
            codeExample: {
              language: "python",
              caption: "convolve.py — the gate through e^(-2t)u(t)",
              code: `import numpy as np

t = np.arange(0, 4, 0.001)
x = np.where((t >= 0) & (t <= 1), 1.0, 0.0)   # the 1-second gate
h = np.exp(-2 * t) * (t >= 0)                  # h(t) = e^(-2t) u(t)

y = np.convolve(x, h)[: len(t)] * 0.001        # y(t) = (x * h)(t)
print(y[500], y[2000])    # 0.316, 0.0585 -> (1-e^-2t)/2 and e^-2t(e^2-1)/2`,
            },
            callout: {
              type: "tip",
              title: "Which theorem does the job?",
              body: "Ask one question: did I multiply or convolve in time? Multiplied (message times carrier) — reach for the frequency convolution theorem to see sidebands. Convolved (signal through a filter) — reach for the time convolution theorem to see Y(ω) = X(ω)H(ω). The two theorems are duals; mixing them up is the standard error.",
            },
            examQuestions: [
              {
                q: "Write short notes on the Time and Frequency Convolution Theorems.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Time convolution: F{x1 * x2} = X1(ω)X2(ω); proof sketch via double integral",
                  "Consequence: LTI output spectrum Y = X·H",
                  "Frequency convolution: F{x1·x2} = (1/2π) X1 * X2",
                  "Consequence: multiplying by cos ωc t shifts the spectrum — modulation",
                  "One application line for each theorem",
                ],
              },
              {
                q: "Evaluate y(t) = x(t) * h(t) for x(t) = u(t) − u(t − 1) and h(t) = e^(−2t)u(t), and sketch the result.",
                marks: 7,
                outline: [
                  "For 0 ≤ t ≤ 1: y = ∫₀ᵗ e^(−2(t−τ)) dτ = (1 − e^(−2t))/2",
                  "At t = 0.5: (1 − e^(−1))/2 ≈ 0.316",
                  "For t ≥ 1: y = e^(−2t)(e² − 1)/2 — pure exponential decay",
                  "Peak value check: y(1) = (1 − e^(−2))/2 ≈ 0.432",
                  "Sketch: rounded rise to ≈ 0.43, then decay — low-pass filtering of the gate",
                  "Mention the four graphical moves used: fold, shift, multiply, integrate",
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
      title: "Amplitude Modulation",
      summary:
        "Unit II loads a message onto a carrier's amplitude: the DSB-FC wave with its modulation index and power budget, the square-law and switching modulators that generate it, the suppressed-carrier family DSB-SC/SSB-SC/VSB-SC that saves that power, the detectors that recover the message, and the transmitters and receivers — TRF and superheterodyne — that carry it.",
      chapter: {
        number: "02",
        title: "Riding the Message on a Carrier's Amplitude",
        intro:
          "Unit II covers the need for modulation and frequency translation, the AM (DSB-FC) wave with modulation index and spectrum, power relations and transmission efficiency, square-law and switching modulators, the suppressed-carrier systems DSB-SC, SSB-SC and VSB-SC with their comparison, envelope and synchronous demodulation, low- and high-power AM transmitters, and TRF and superheterodyne receivers with sensitivity, selectivity and fidelity.",
        inOneBreath:
          "Modulation exists for antennas, multiplexing and noise; multiplying m(t) by cos ωct translates the spectrum to ±ωc. The AM wave carries a wasted carrier plus two sidebands: m = (Amax − Amin)/(Amax + Amin), Pt = Pc(1 + m²/2), efficiency η = m²/(2 + m²) peaking at 33.3%. Suppressed-carrier systems trade receiver complexity for power and bandwidth: DSB-SC keeps both sidebands, SSB keeps one (BW = fm), VSB keeps a vestige for TV. Envelope detection needs m ≤ 1 and 1/fc << RC << 1/fm; the superheterodyne fixes gain and selectivity at a 455 kHz IF at the cost of an image frequency fs + 2·IF.",
        sections: [
          {
            number: "2.1",
            title: "Why modulate — need and frequency translation",
            body: [
              "Modulation is the systematic variation of a high-frequency carrier's amplitude, frequency or phase in step with a low-frequency message. Four needs justify it. Antenna size: a quarter-wave antenna for a 3 kHz voice would be 25 km tall, but at 1 MHz it is 75 m — only a translated signal radiates. Multiplexing: distinct carriers let many messages share one medium without interference (FDM). Performance: choosing the modulation family and operating band trades noise immunity against bandwidth. Regulation: spectrum is licensed channel by channel, so every transmitter must sit exactly where its licence says.",
              "The mathematics behind all of it is the frequency-translation (modulation) theorem: F{m(t) cos ωc t} = ½[M(ω − ωc) + M(ω + ωc)] — multiplying by the carrier shifts the message spectrum symmetrically about ±ωc without changing its shape. Frequency-division multiplexing exploits this: each user is translated onto its own subcarrier, the sum goes down the cable or the air, and band-pass filters at the far end separate the users before demodulation. Jun 2022 set 'frequency translation and FDM' as a short note — the one-line theorem plus the FDM block diagram is the expected answer.",
              "The map of techniques frames the rest of the course: continuous-wave analog modulation splits into amplitude modulation (this unit) and angle modulation (Unit III); pulse modulation samples first (Units III–IV); digital modulation keys the carrier with bits (Unit V). The exam angle is conceptual — 'why modulate' earns marks by pairing each need with its number, especially the antenna arithmetic: λ/4 at 3 kHz is 25 km, at 1 MHz it is 75 m.",
            ],
            keyTerms: [
              { term: "Modulation", definition: "Varying a carrier's amplitude, frequency or phase in step with the message signal." },
              { term: "Carrier", definition: "The high-frequency sinusoid that carries the message; chosen for propagation and channel allocation." },
              { term: "Frequency translation theorem", definition: "F{m(t) cos ωct} = ½[M(ω − ωc) + M(ω + ωc)] — multiplication shifts the spectrum to ±ωc." },
              { term: "FDM", definition: "Frequency-division multiplexing — users translated to disjoint subcarrier bands, summed, then filtered apart." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Four reasons to modulate",
              caption: "From the antenna arithmetic upward: each tier is a reason the carrier exists.",
              tiers: [
                { label: "Radiation efficiency", note: "λ/4 antenna: 25 km at 3 kHz vs 75 m at 1 MHz" },
                { label: "Multiplexing (FDM)", note: "one medium, many disjoint carrier bands" },
                { label: "Noise and performance shaping", note: "wideband FM trades bandwidth for SNR" },
                { label: "Regulatory channel allocation", note: "licensed slots keep transmitters apart" },
              ],
            },
            bullets: [
              "Modulation = systematic carrier-parameter variation; four needs: antennas, FDM, noise shaping, licensing.",
              "λ/4 arithmetic: 3 kHz -> 25 km antenna; 1 MHz -> 75 m; 100 MHz -> 0.75 m.",
              "Frequency translation: F{m(t) cos ωct} = ½[M(ω − ωc) + M(ω + ωc)].",
              "FDM: per-user subcarriers + band-pass filters at the receiver; each band disjoint.",
              "Technique map: AM (Unit II), angle (III), pulse (III–IV), digital keying (V).",
            ],
            table: {
              caption: "Need -> consequence, with the numbers.",
              headers: ["Need", "Consequence", "Number"],
              rows: [
                ["Antenna practicality", "message must ride a high carrier", "λ/4 = 75 m at 1 MHz vs 25 km at 3 kHz"],
                ["Multiplexing", "many messages, one channel", "FDM subcarrier spacing = message BW"],
                ["Noise immunity", "choose wideband angle modulation", "FM: bandwidth buys SNR (Unit III)"],
                ["Spectrum regulation", "transmit only inside licensed band", "channel width = 2·fm for AM"],
              ],
            },
            callout: {
              type: "tip",
              title: "Lead with the antenna number",
              body: "'Why modulation?' answers that open with the λ/4 antenna arithmetic (25 km vs 75 m) immediately signal command. Then give frequency translation as the one-line theorem and close with the FDM diagram — that order matches how the Jun 2022 short note was phrased.",
            },
            examQuestions: [
              {
                q: "Write short notes on frequency translation and FDM.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "Translation theorem: F{m(t) cos ωct} = ½[M(ω − ωc) + M(ω + ωc)]",
                  "Multiplication by the carrier shifts, does not distort, the message spectrum",
                  "FDM block: N messages -> N subcarrier modulators -> sum -> channel",
                  "Receiver: band-pass filters isolate each band, then demodulate",
                  "Example: telephony carrier systems stacking 4 kHz channels",
                ],
              },
              {
                q: "Explain the need for modulation with the antenna-size arithmetic, and name the four families of modulation techniques.",
                marks: 7,
                outline: [
                  "λ/4 at 3 kHz = 25 km — impossible to build",
                  "λ/4 at 1 MHz = 75 m — practical tower height",
                  "FDM: carriers separate users in frequency",
                  "Noise: angle modulation trades bandwidth for SNR",
                  "Families: amplitude, angle, pulse, digital keying",
                  "Map each family to its unit of this course",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "The AM wave — expression, index and spectrum",
            body: [
              "Amplitude modulation (DSB-FC, double-sideband full carrier) makes the carrier's peak amplitude follow the message: s(t) = Ac[1 + m·cos ωm t]·cos ωc t, where m = Am/Ac is the modulation index. Expanding gives three spectral components: the carrier at fc with amplitude Ac, the lower sideband at fc − fm and the upper sideband at fc + fm, each of amplitude m·Ac/2. The bandwidth is 2·fm — twice the message bandwidth, symmetric about the carrier. For a complex message with highest frequency fm, the same arithmetic holds band-for-band: sidebands fill the strips fc ± fm.",
              "The numericals are the exam's bread and butter and one formula family solves them all. Modulation index from an oscilloscope trace: m = (Amax − Amin)/(Amax + Amin) — Jun 2023 gave a carrier swinging between 4 V and 1 V, so m = 3/5 = 0.6. Dec 2024's version: audio 10 sin(2π·500 t) modulating a 50 sin(2π·10⁵ t) carrier gives m = 10/50 = 0.2, sidebands at 99.5 kHz and 100.5 kHz, bandwidth 1 kHz, and total power into 600 Ω of Pc(1 + m²/2) = 2.08 × 1.02 ≈ 2.13 W. State the formula, substitute, and always name the units.",
              "The linear/over-modulation divide decides whether an envelope detector can work. For m ≤ 1 the envelope 1 + m·cos ωm t stays positive and follows the message exactly — linear modulation. For m > 1 the envelope crosses zero and inverts phase between crossings — over-modulation; the envelope no longer resembles the message, an envelope detector recovers garbage, and the transmitted spectrum widens beyond 2·fm. Jun 2026 asked for the index definition plus the DSB-FC spectrum drawing, Nov 2023 asked for the index derivation with linear/over discussion — three-part answers (definition, spectrum sketch, over-modulation remark) are the safe template.",
            ],
            keyTerms: [
              { term: "Modulation index m", definition: "m = Am/Ac = (Amax − Amin)/(Amax + Amin); depth of amplitude modulation." },
              { term: "Sidebands", definition: "Components at fc ± fm of amplitude m·Ac/2 each; they carry the information." },
              { term: "DSB-FC", definition: "Double-sideband full-carrier AM — the conventional broadcast wave, bandwidth 2·fm." },
              { term: "Over-modulation", definition: "m > 1: envelope crosses zero and inverts phase; envelope detection fails." },
            ],
            diagram: {
              kind: "compare",
              title: "Linear vs over modulation",
              caption: "The envelope's sign is the boundary: detectors only read positive envelopes.",
              left: {
                heading: "m ≤ 1 (linear)",
                items: [
                  "Envelope 1 + m·cos ωm t stays positive",
                  "Envelope mirrors the message exactly",
                  "Bandwidth exactly 2·fm",
                  "Envelope detector works cleanly",
                ],
              },
              right: {
                heading: "m > 1 (over-modulation)",
                items: [
                  "Envelope crosses zero — phase inverts",
                  "Envelope no longer matches the message",
                  "Spectrum spreads beyond 2·fm",
                  "Envelope detector output is distorted garbage",
                ],
              },
            },
            bullets: [
              "s(t) = Ac[1 + m cos ωm t]cos ωc t; carrier + LSB + USB, each sideband m·Ac/2.",
              "m = (Amax − Amin)/(Amax + Amin); Jun 2023's 4 V/1 V swing gives m = 0.6.",
              "Dec 2024 numbers: m = 0.2, sidebands 99.5/100.5 kHz, BW = 1 kHz, Pt ≈ 2.13 W into 600 Ω.",
              "BW of AM = 2·fm — the price of carrying the carrier.",
              "m ≤ 1: envelope follows message; m > 1: envelope inversion, detector failure.",
              "Sketch the three-line spectrum with amplitudes labelled Ac and m·Ac/2.",
            ],
            codeExample: {
              language: "python",
              caption: "am_spectrum.py — the Dec 2024 numerical, simulated",
              code: `import numpy as np

fs = 1e6; T = 0.01; t = np.arange(0, T, 1/fs)
Ac, Am, fc, fm = 50, 10, 1e5, 500        # the Dec 2024 paper's numbers
m = Am / Ac                               # modulation index = 0.2
s = Ac * (1 + m * np.cos(2*np.pi*fm*t)) * np.cos(2*np.pi*fc*t)

S = np.abs(np.fft.rfft(s)); f = np.fft.rfftfreq(len(t), 1/fs)
peaks = sorted(f[np.argsort(S)[-3:]])
print(m, peaks)     # 0.2  [99500.0, 100000.0, 100500.0] -> carrier + 2 sidebands`,
            },
            callout: {
              type: "exam",
              title: "The index numerical is near-certain",
              body: "Modulation-index questions appeared in Jun 2022, Jun 2023, Nov 2023, Dec 2024 and Jun 2026 — the most repeated numerical of Unit II. Memorize m = (Amax − Amin)/(Amax + Amin) and the three-line spectrum; every session wraps them in different numbers but the skeleton is identical.",
            },
            examQuestions: [
              {
                q: "Explain modulation index of amplitude modulated waveform. Calculate the modulation index if the carrier varies between 4 V and 1 V after the amplitude modulated signal.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Definition: m = Am/Ac — depth of modulation",
                  "Trace formula: m = (Amax − Amin)/(Amax + Amin)",
                  "Amax = 4 V, Amin = 1 V -> m = 3/5 = 0.6",
                  "0.6 < 1: linear modulation, envelope detector safe",
                  "Sideband amplitude each = m·Ac/2",
                ],
              },
              {
                q: "Derive the expression for the modulation index in AM. Explain how it affects the amplitude and frequency spectrum of an AM wave, and discuss linear and over modulation.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "s(t) = Ac[1 + m cos ωm t]cos ωc t; expand -> three components",
                  "m = Am/Ac; from a trace m = (Amax − Amin)/(Amax + Amin)",
                  "Spectrum: carrier Ac at fc, sidebands m·Ac/2 at fc ± fm; BW = 2fm",
                  "m ≤ 1: envelope follows message (linear)",
                  "m > 1: envelope inversion, detector distortion, spectral spreading",
                ],
              },
              {
                q: "An audio frequency signal 10 sin(2π·500 t) amplitude-modulates a carrier 50 sin(2π·10⁵ t). Calculate the modulation index, sideband frequencies, bandwidth, and the total power delivered to a 600 Ω load.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "m = Am/Ac = 10/50 = 0.2",
                  "Sidebands: fc ± fm = 99.5 kHz and 100.5 kHz",
                  "BW = 2fm = 1 kHz",
                  "Pc = Ac²/2R = 50²/1200 ≈ 2.08 W",
                  "Pt = Pc(1 + m²/2) = 2.08 × 1.02 ≈ 2.13 W",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Power relations and transmission efficiency",
            body: [
              "The AM wave's three components divide the transmitter's power. Carrier power Pc = Ac²/2R. Each sideband carries m²Pc/4, so both together carry m²Pc/2, and the total is Pt = Pc(1 + m²/2). Transmission efficiency — the fraction of power that actually carries information — is η = (m²Pc/2)/Pt = m²/(2 + m²), which peaks at 1/3 ≈ 33.3% for m = 1 and collapses as m falls: at m = 0.5 only 11.1% of the transmitted power is useful. The carrier is pure overhead — it carries no information yet consumes most of the power.",
              "The two standard numericals show the arithmetic at full depth. Jun 2022: a 400 W, 1 MHz carrier modulated to depth 75% by a 2.5 kHz tone — sidebands at 997.5 kHz and 1002.5 kHz, bandwidth 5 kHz, sideband power m²Pc/2 = 0.28125 × 400 = 112.5 W (56.25 W each), total 512.5 W. Jun 2026: a 100 V (peak) carrier modulated to 50% into 50 Ω — Pc = 100²/100 = 100 W, Pt = 100(1 + 0.125) = 112.5 W, efficiency η = 0.25/2.25 = 11.1%. Both answers are three formulas: Pc, Pt, η — plus the sideband frequencies from fc ± fm.",
              "The exam angle: Nov 2023 asked the power relation plus how transmission efficiency can be improved — the expected answer names the levers: raise m toward 1 (never beyond), or move to the suppressed-carrier systems of section 2.5, which spend nothing on the carrier (SSB reaches 100% useful power for the transmitted sideband). Efficiency is the motivating number for the entire suppressed-carrier family, and stating that connection is what lifts a 7-mark answer from arithmetic to explanation.",
            ],
            keyTerms: [
              { term: "Carrier power Pc", definition: "Pc = Ac²/2R — the unmodulated carrier's power into resistance R." },
              { term: "Sideband power", definition: "Each sideband carries m²Pc/4; both together m²Pc/2 — all of the information." },
              { term: "Total power Pt", definition: "Pt = Pc(1 + m²/2) — carrier plus both sidebands." },
              { term: "Transmission efficiency η", definition: "η = m²/(2 + m²); 33.3% at m = 1, 11.1% at m = 0.5." },
            ],
            diagram: {
              kind: "flow",
              title: "From carrier power to efficiency",
              caption: "Four lines of arithmetic answer any AM power numerical.",
              steps: [
                { label: "Pc", note: "Ac²/2R from the carrier amplitude" },
                { label: "Sidebands", note: "m²Pc/4 each — the useful power" },
                { label: "Total Pt", note: "Pc(1 + m²/2)" },
                { label: "Efficiency η", note: "m²/(2 + m²) — useful share" },
              ],
            },
            bullets: [
              "Pc = Ac²/2R; each sideband m²Pc/4; Pt = Pc(1 + m²/2).",
              "η = m²/(2 + m²): 33.3% at m = 1, 11.1% at m = 0.5, 0% as m -> 0.",
              "Jun 2022 trace: 400 W, m = 0.75 -> sidebands 112.5 W, total 512.5 W.",
              "Jun 2026 trace: 100 V peak into 50 Ω, m = 0.5 -> Pt = 112.5 W, η = 11.1%.",
              "The carrier is overhead — the motivation for DSB-SC/SSB (section 2.5).",
              "Improving η: push m toward 1 (not beyond), or suppress the carrier.",
            ],
            table: {
              caption: "Power budget vs modulation index (Pc = 100 W).",
              headers: ["m", "Each sideband", "Total Pt", "Efficiency η"],
              rows: [
                ["0.5", "6.25 W", "112.5 W", "11.1%"],
                ["0.75", "14.06 W", "128.1 W", "22.0%"],
                ["1.0", "25 W", "150 W", "33.3%"],
                ["1.5 (over-mod)", "56.25 W", "212.5 W", "detector fails"],
              ],
            },
            callout: {
              type: "exam",
              title: "Three power numericals in six papers",
              body: "Power calculations appeared as the 400 W/75% problem (Jun 2022), the power-relation discussion (Nov 2023) and the 100 V/50% problem (Jun 2026). Practice the trio Pc -> Pt -> η until each is a reflex; the sideband-frequency line (fc ± fm) usually rides along for a bonus mark.",
            },
            examQuestions: [
              {
                q: "Discuss the power relation in AM and calculate the power efficiency of an AM system. Explain the concept of transmission efficiency and how it can be improved.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Pt = Pc(1 + m²/2); sidebands carry m²Pc/2 total",
                  "η = m²/(2 + m²) — at most 33.3% at m = 1",
                  "Carrier carries no information — pure overhead",
                  "Improvement: raise m toward 1 without over-modulating",
                  "Improvement: suppress the carrier — DSB-SC/SSB systems",
                ],
              },
              {
                q: "A carrier of 100 V (peak) is amplitude modulated to a depth of 50%. Calculate the total power delivered to a 50 Ω load and the transmission efficiency.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "Pc = Vc²/2R = 100²/(2·50) = 100 W",
                  "Pt = Pc(1 + m²/2) = 100 × 1.125 = 112.5 W",
                  "η = m²/(2 + m²) = 0.25/2.25 = 11.1%",
                  "Sidebands together: 12.5 W — the useful share",
                  "Remark: even at 100% depth η would only reach 33.3% — the carrier dominates",
                ],
              },
              {
                q: "A 400 W, 1 MHz carrier is amplitude-modulated with a sinusoidal signal of 2500 Hz to a depth of 75%. Calculate the sideband frequencies, bandwidth, and the power in the sidebands and the total power.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "Sidebands: 1 MHz ± 2.5 kHz = 997.5 kHz, 1002.5 kHz",
                  "BW = 2fm = 5 kHz",
                  "Sideband power total = m²Pc/2 = 0.5625/2 × 400 = 112.5 W",
                  "Each sideband 56.25 W",
                  "Pt = 400(1 + 0.28125) = 512.5 W",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "AM modulators — square law and switching",
            body: [
              "A modulator is the circuit that multiplies message and carrier without an expensive analog multiplier. The square-law modulator uses a non-linear device — a diode or transistor biased so its transfer is i = a₁v + a₂v² — driven by the sum x(t) = m(t) + Ac cos ωc t. The quadratic term creates 2m(t)·Ac cos ωc t plus (Ac cos ωc t)²; the first is exactly the AM form, the second sits at 2fc. A band-pass filter tuned to fc ± fm discards DC, the message baseband and the 2fc term, leaving the AM wave. The achievable index is set by the ratio a₂/a₁ and the bias point.",
              "The switching modulator replaces quadratic non-linearity with hard chopping. A diode driven by a large carrier (Ac >> message) conducts only on positive carrier peaks — effectively multiplying the message by a square wave at fc. Expanding the square wave into its Fourier series, the fundamental term m(t)·(4/π)cos ωc t is the AM component; a band-pass filter extracts it, and the carrier amplitude inside the filter band sets the index. It needs no precise operating point — just a big carrier and a clean filter — which is why discrete designs favour it.",
              "The exam angle: the paper asks for circuits and waveforms, three times in three different decades of paper — Jun 2022 (square-law generation), Jun 2025 (both square-law and switching with circuit diagrams and waveforms) and Jun 2026 ('with a neat diagram, describe the working of a square law modulator'). Draw: message + carrier entering the non-linear element, the messy rich output waveform, and the filter passing the three-line AM spectrum. Label the filter's passband — the sketch that forgets the BPF loses its final mark.",
            ],
            keyTerms: [
              { term: "Square-law modulator", definition: "Non-linear device with i = a₁v + a₂v² plus a band-pass filter — the quadratic term produces the AM product." },
              { term: "Switching modulator", definition: "Diode chopped by a large carrier; the square-wave fundamental carries m(t)·cos ωc t to the filter." },
              { term: "Band-pass filter (BPF)", definition: "Tuned to fc ± fm; converts the rich non-linear output into a clean three-line AM spectrum." },
            ],
            diagram: {
              kind: "compare",
              title: "Square-law vs switching modulator",
              caption: "Two ways to synthesize the product without a multiplier IC.",
              left: {
                heading: "Square-law",
                items: [
                  "Device biased in its quadratic region",
                  "i = a₁v + a₂v² creates 2a₂Ac·m(t)cos ωct",
                  "Index set by bias and a₂/a₁",
                  "Small-signal, linear-amplifier friendly",
                ],
              },
              right: {
                heading: "Switching",
                items: [
                  "Carrier drives the diode hard (Ac >> m)",
                  "Diode = chopper; output ∝ m(t)·square wave",
                  "Fundamental term (4/π)m(t)cos ωct survives the BPF",
                  "Needs no precise operating point",
                ],
              },
            },
            bullets: [
              "Both modulators end the same way: BPF centred on fc passes carrier + sidebands.",
              "Square law: drive with m(t) + Ac cos ωct; quadratic term makes the product.",
              "Unwanted square-law terms: baseband message, DC, and a component at 2fc — all filtered out.",
              "Switching: large carrier turns the diode into a chopper; Fourier fundamental does the work.",
              "Waveforms to draw: input sum, chopped/quadratic output, filtered AM wave.",
              "Index control: bias point (square law) or carrier-to-filter ratio (switching).",
            ],
            table: {
              caption: "The two modulators side by side.",
              headers: ["Aspect", "Square-law", "Switching"],
              rows: [
                ["Active region", "quadratic bias point", "hard on/off (chopper)"],
                ["Key term created", "2a₂Ac·m(t)cos ωct", "(4/π)·m(t)cos ωct"],
                ["Filtering needed", "BPF at fc ± fm", "BPF at fc ± fm"],
                ["Index set by", "bias and a₂/a₁", "carrier amplitude in filter band"],
                ["Best for", "low-level linear modulation", "simple discrete designs"],
              ],
            },
            callout: {
              type: "exam",
              title: "Circuit + waveform is the expected pairing",
              body: "All three appearances — Jun 2022, Jun 2025 and Jun 2026 — demand the schematic and waveforms together. The common lost mark: forgetting the band-pass filter that turns the rich non-linear output into the clean three-line AM spectrum. Draw it, label its centre frequency fc, then draw the filtered wave.",
            },
            examQuestions: [
              {
                q: "Explain the generation of AM signals using a square-law modulator.",
                marks: 7,
                appearances: ["Jun 2022", "Jun 2025", "Jun 2026"],
                outline: [
                  "Circuit: adder -> non-linear element (i = a₁v + a₂v²) -> BPF",
                  "Drive v = m(t) + Ac cos ωc t",
                  "Expand v²: 2m(t)Ac cos ωct is the AM term; (Ac cos ωct)² sits at 2fc",
                  "BPF tuned to fc ± fm passes carrier + sidebands, removes baseband and 2fc",
                  "Index set by a₂/a₁ and bias",
                  "Draw input, unfiltered and filtered waveforms",
                ],
              },
              {
                q: "Discuss square-law and switching modulators for AM generation with circuit diagrams and waveforms.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Square law: quadratic bias, expansion, BPF; index from bias",
                  "Switching: large carrier chops the diode; square-wave expansion",
                  "Fundamental term (4/π)m(t)cos ωct; BPF extracts AM",
                  "Compare: operating point precision vs carrier-drive size",
                  "Waveform pair for each: raw output vs filtered AM",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Suppressed-carrier systems — DSB-SC, SSB-SC and VSB-SC",
            body: [
              "Suppressed-carrier systems attack AM's efficiency problem directly: if the carrier carries no information, stop transmitting it. DSB-SC transmits s(t) = m(t)·cos ωc t — both sidebands, no carrier — generated by a balanced modulator whose two diode/transistor paths cancel the carrier term. Bandwidth stays 2·fm, but every transmitted watt is sideband. The price: the receiver must regenerate the exact carrier and multiply (synchronous detection), because the envelope of DSB-SC no longer follows m(t).",
              "SSB-SC goes further and transmits one sideband only, by filtering (a crystal or mechanical filter after the balanced modulator) or by the phase-shift method (two balanced modulators in quadrature). Bandwidth halves to fm and power concentrates in that one band — the standard for amateur radio and long-haul telephony. VSB-SC is the compromise for signals with significant DC and very low frequencies (television video, 0–5 MHz): one sideband plus a vestige of the other (about 1.25 MHz in broadcast TV), which an ordinary envelope-plus-clipper receiver can demodulate and which keeps phase distortion at the band edge tolerable. Jun 2026 asked for exactly this three-way comparison on bandwidth and power.",
              "The exam angle: Dec 2024 asked DSB-SC's advantages and disadvantages versus conventional AM (saves carrier power and lets all power inform; needs synchronous detection and more complex receivers), Jun 2025 asked for DSB-SC and SSB-SC systems with block diagrams, and the VSB short note rides in Jun 2025's any-two. The template answer pairs each system with its bandwidth number (2fm, fm, fm + vestige) and its detection requirement (synchronous for DSB/SSB, envelope-compatible for VSB).",
            ],
            keyTerms: [
              { term: "DSB-SC", definition: "Double-sideband suppressed carrier, s = m(t)cos ωct; all power in sidebands, BW 2fm, synchronous detection required." },
              { term: "Balanced modulator", definition: "Two matched nonlinear paths arranged so the carrier cancels — the DSB-SC generator." },
              { term: "SSB-SC", definition: "One sideband only via filtering or phase-shift method; BW = fm, best power economy." },
              { term: "VSB-SC", definition: "One sideband plus a vestige (≈ 0.1–1.25 MHz) — the TV-video compromise for DC-bearing signals." },
            ],
            diagram: {
              kind: "flow",
              title: "DSB-SC generation and synchronous demodulation",
              caption: "The carrier vanishes in the balanced modulator and must be reborn in the receiver.",
              steps: [
                { label: "m(t) + carrier", note: "message and cos ωct enter" },
                { label: "Balanced modulator", note: "carrier cancels; product remains" },
                { label: "DSB-SC out", note: "sidebands only, BW 2fm" },
                { label: "Receiver: multiply by cos ωct", note: "local carrier, phase-locked" },
                { label: "LPF", note: "2fc terms removed; m(t) recovered" },
              ],
            },
            bullets: [
              "DSB-SC: s = m(t)cos ωct; BW 2fm; all power useful; envelope unreadable.",
              "SSB-SC: filter or phase-shift method; BW fm; best efficiency; hardest carrier recovery.",
              "VSB-SC: one sideband + vestige (TV uses ≈ 1.25 MHz); envelope-compatible, DC-friendly.",
              "DSB-SC vs AM: saves carrier power; costs a synchronous receiver.",
              "Comparison numbers (Jun 2026): BW 2fm / fm / fm + vestige; carrier power 1 / 0 / vestige only.",
              "SSB generation: filter method needs razor-sharp filters; phase-shift method needs −90° networks.",
            ],
            table: {
              caption: "The amplitude-modulation family compared.",
              headers: ["System", "Bandwidth", "Carrier power", "Detection"],
              rows: [
                ["AM (DSB-FC)", "2fm", "full carrier sent", "envelope detector"],
                ["DSB-SC", "2fm", "none", "synchronous (coherent)"],
                ["SSB-SC", "fm", "none", "synchronous (coherent)"],
                ["VSB-SC", "fm + vestige", "vestige only", "envelope + clipper (TV)"],
              ],
            },
            callout: {
              type: "exam",
              title: "The three-way comparison table",
              body: "Jun 2026 asked to compare DSB-SC, SSB-SC and VSB-SC on bandwidth and power requirement; Dec 2024 asked DSB-SC versus conventional AM; Jun 2025 asked both block diagrams and a VSB short note. Reproduce the four-row table with bandwidth and carrier-power columns — it answers every one of those phrasings at once.",
            },
            examQuestions: [
              {
                q: "Explain the concept of double-sideband suppressed carrier (DSB-SC) modulation. What are its advantages and disadvantages compared to conventional AM?",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "s(t) = m(t)cos ωct — carrier cancelled by the balanced modulator",
                  "Advantage: no carrier power; all transmitted power is information",
                  "Advantage: same 2fm bandwidth, no wasted spectrum",
                  "Disadvantage: envelope does not follow m(t) — envelope detector useless",
                  "Disadvantage: needs synchronous detection and a phase-locked local carrier",
                  "Block diagram: balanced modulator out, product demodulator + LPF in",
                ],
              },
              {
                q: "Describe DSB-SC and SSB-SC systems with block diagrams.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "DSB-SC: balanced modulator (two matched paths cancel carrier)",
                  "DSB-SC receiver: product modulator with recovered carrier + LPF",
                  "SSB-SC: balanced modulator + sharp sideband filter (filter method)",
                  "SSB-SC: or two balanced modulators in quadrature (phase-shift method)",
                  "Bandwidths: 2fm vs fm; power all-sideband vs one-sideband",
                ],
              },
              {
                q: "Write a short note on VSB-SC systems.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Motivation: video signals have DC to 5 MHz — SSB filter unrealizable at band edge",
                  "Transmit one sideband + a vestige (≈ 1.25 MHz in TV)",
                  "Bandwidth: fm + vestige — between SSB and DSB",
                  "Envelope-compatible detection with a clipper; simple receivers",
                  "Application: broadcast television video",
                ],
              },
              {
                q: "Compare DSB-SC, SSB-SC and VSB-SC systems on the basis of bandwidth and power requirement.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "DSB-SC: BW 2fm; power = both sidebands; synchronous detection",
                  "SSB-SC: BW fm; power = one sideband — the minimum possible",
                  "VSB-SC: BW fm + vestige; power = sideband + vestige",
                  "Detection: DSB/SSB coherent; VSB envelope-compatible",
                  "Application lines: stereo, telephony, TV video",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Demodulation — envelope detector and synchronous detection",
            body: [
              "Demodulation extracts m(t) from the received AM wave. The envelope detector — a diode feeding a parallel RC — is the standard receiver circuit for DSB-FC: on each positive carrier peak the diode conducts and C charges to the peak; between peaks the diode cuts off and C discharges through R, so the capacitor voltage rides the envelope's peaks. Design condition: 1/fc << RC << 1/fm — fast enough to track the message, slow enough to ignore the carrier. Square-law detection is the small-signal alternative: a non-linear device's quadratic term reconstructs the message from the AM wave's square.",
              "Worked numbers make the RC window concrete. For fc = 1 MHz and fm = 5 kHz: 1/ωc ≈ 0.16 µs (RC must sit well above) and 1/ωm ≈ 31.8 µs (RC must stay below). The diagonal-clipping bound tightens it: RC ≤ √(1 − m²)/(ωm·m) — for m = 0.8 and fm = 5 kHz that is 23.9 µs. An RC of 10 µs (10 kΩ × 1 nF) satisfies every bound. The second failure mode, negative-peak clipping, appears when RC is too large and the detector cannot discharge fast enough to follow the envelope down — both distortions belong in the answer as 'choose RC inside the window'.",
              "Synchronous (coherent) detection is the DSB-SC/SSB route: multiply the received wave by a locally regenerated carrier identical in frequency and phase, and the product contains m(t)/2 plus 2fc terms that a low-pass filter removes. The exam angle: Jun 2023 asked for the AM detector with circuit diagram and waveforms — draw the diode-RC circuit, the input AM wave, and the sawtooth-rippled output following the envelope. Add the RC design window and the two clipping failure modes; that combination is what the examiner's rubric lists.",
            ],
            keyTerms: [
              { term: "Envelope detector", definition: "Diode + RC that charges to each carrier peak and discharges between peaks — output follows the envelope." },
              { term: "RC design window", definition: "1/fc << RC << 1/fm — track the message, reject the carrier." },
              { term: "Diagonal clipping", definition: "Distortion when RC is too large: the discharge cannot follow a fast-falling envelope (bounds RC ≤ √(1 − m²)/ωm·m)." },
              { term: "Synchronous detection", definition: "Multiply by a phase-locked local carrier and low-pass — mandatory for DSB-SC and SSB." },
            ],
            diagram: {
              kind: "cycle",
              title: "One envelope-detector cycle",
              caption: "Charge on the peak, discharge through R, repeat at every carrier crest — the output rides the message.",
              steps: [
                { label: "Carrier peak rises", note: "diode forward-biased" },
                { label: "Capacitor charges", note: "to the peak, time constant ≈ diode's r·C" },
                { label: "Carrier falls", note: "diode reverse-biased, cut off" },
                { label: "Capacitor discharges", note: "slowly through R toward the envelope" },
                { label: "Next peak", note: "cycle repeats at fc rate" },
              ],
            },
            bullets: [
              "Envelope detector = diode + parallel RC; output follows positive peaks.",
              "Design window: 1/fc << RC << 1/fm — for 1 MHz/5 kHz that is 1/ωc ≈ 0.16 µs << RC << 31.8 µs.",
              "Diagonal clipping bound: RC ≤ √(1 − m²)/(ωm·m) = 23.9 µs at m = 0.8, fm = 5 kHz.",
              "Negative-peak clipping: RC too large — envelope falls faster than the discharge.",
              "Square-law detector: small-signal alternative using the quadratic term.",
              "Synchronous detection: multiply by coherent carrier + LPF — required for DSB-SC/SSB.",
            ],
            codeExample: {
              language: "python",
              caption: "detector.py — the RC window for the worked numbers",
              code: `import numpy as np

fc, fm, m = 1e6, 5e3, 0.8
lo = 1 / (2 * np.pi * fc)                            # 1/wc = 0.16 us — RC well above
hi = 1 / (2 * np.pi * fm)                            # 1/wm = 31.8 us — RC below
rc_diag = np.sqrt(1 - m**2) / (2 * np.pi * fm * m)   # diagonal-clip bound
print(lo, hi, rc_diag)     # 1.59e-07, 3.18e-05, 2.39e-05
print("choose RC = 10 us (10 kOhm x 1 nF): above lo, below both upper bounds")`,
            },
            callout: {
              type: "warning",
              title: "RC too large is the subtle failure",
              body: "Students quote 'RC << 1/fm' and stop. The sharper constraint is diagonal clipping: RC ≤ √(1 − m²)/(ωm·m), which tightens as m grows — deep modulation demands a smaller RC. A detector that works at m = 0.5 can distort at m = 0.9 with the same RC.",
            },
            examQuestions: [
              {
                q: "Explain AM detector with the help of its circuit diagram and waveforms.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Circuit: series diode + parallel R, C across the output",
                  "Charge on carrier peaks through the diode; discharge through R between peaks",
                  "Design window: 1/fc << RC << 1/fm",
                  "Draw input AM wave and sawtooth-rippled output following the envelope",
                  "Failure modes: diagonal clipping (RC large), negative-peak clipping",
                ],
              },
              {
                q: "Derive the condition RC ≤ √(1 − m²)/(ωm·m) for an envelope detector and explain diagonal clipping.",
                marks: 7,
                outline: [
                  "During discharge Vc = Vp·e^(−t/RC); envelope slope = −m·ωm·sin ωm t",
                  "Detector fails when the envelope falls faster than the discharge",
                  "Worst case at the steepest envelope slope",
                  "Bound: RC ≤ √(1 − m²)/(ωm·m)",
                  "Deeper m tightens the bound — the non-obvious punchline",
                ],
              },
              {
                q: "Explain synchronous detection of AM. Why can it demodulate DSB-SC while an envelope detector cannot?",
                marks: 7,
                outline: [
                  "Multiply received wave by local carrier cos(ωc t + φ), then LPF",
                  "Product contains ½m(t) + 2fc terms; LPF keeps ½m(t)",
                  "Phase error φ reduces output by cos φ — needs carrier recovery",
                  "DSB-SC envelope crosses zero and inverts — envelope unreadable",
                  "Synchronous route is the only one for suppressed-carrier systems",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Low- and high-power AM transmitters",
            body: [
              "An AM transmitter modulates at one of two points in its chain. In a low-power (low-level) system the modulation happens early, at milliwatt carrier levels: master oscillator → buffer → modulated stage → a chain of linear (Class A/B) RF amplifiers raises the already-modulated signal to the antenna. The audio chain is small and cheap, but every RF stage after the modulator must be linear — Class C amplification would distort the envelope — and linear stages are inefficient.",
              "In a high-power (high-level) system the RF chain is pure Class C — efficient, non-linear — and modulation happens at the final stage: the collector (or plate) of the last power amplifier is modulated by a large audio power amplifier through a modulation transformer. The audio amplifier must supply exactly the sideband power m²Pc/2: for a 50 kW broadcast carrier at m = 0.5 that is 6.25 kW of audio — the reason high-level transmitters carry heavy audio sections and enormous modulation transformers. Efficiency is high because the RF stages run Class C throughout.",
              "The trade-off is the exam's point: low-level = small audio, linear RF (wasteful); high-level = big audio, efficient Class C RF. No paper in the archive set this as a direct question, but it is syllabus text ('low and high power AM transmitters') and it slots naturally after the power relations of section 2.3 — the audio power required is literally the sideband power computed there. Pair the two block diagrams and one efficiency sentence each and the topic is covered for both 7-mark and short-note formats.",
            ],
            keyTerms: [
              { term: "Low-level modulation", definition: "Modulate at low carrier power, then amplify linearly — small audio chain, inefficient RF stages." },
              { term: "High-level modulation", definition: "Modulate the final Class-C stage's collector with a large audio amplifier — efficient RF, heavy audio chain." },
              { term: "Modulation transformer", definition: "The audio-coupling transformer that superimposes the message voltage on the final amplifier's supply." },
              { term: "Class-C amplifier", definition: "Conduction-angle < 180°; highest RF efficiency, but destroys amplitude information — usable only before modulation." },
            ],
            diagram: {
              kind: "compare",
              title: "Low-level vs high-level modulation",
              caption: "Where in the chain the message joins the carrier decides which chain is heavy.",
              left: {
                heading: "Low-power (low-level)",
                items: [
                  "Oscillator -> buffer -> modulator -> linear RF chain",
                  "Audio amplifier is small (milliwatts)",
                  "Every RF stage must be linear (Class A/B)",
                  "Suits low-power and experimental transmitters",
                ],
              },
              right: {
                heading: "High-power (high-level)",
                items: [
                  "Class-C RF chain up to the final PA",
                  "Modulation transformer drives the final collector",
                  "Audio amplifier supplies m²Pc/2 — kilowatts for broadcast",
                  "Standard for medium-wave broadcast stations",
                ],
              },
            },
            bullets: [
              "Low-level: modulate early, amplify linearly; audio cheap, RF inefficient.",
              "High-level: modulate the final Class-C collector; RF efficient, audio heavy.",
              "Audio power required = sideband power = m²Pc/2 (50 kW at m = 0.5 -> 6.25 kW audio).",
              "Class-C stages cannot follow modulation — they must precede a high-level modulator.",
              "Modulation transformer couples the audio into the final amplifier's supply rail.",
              "Pair this section with 2.3's efficiency numbers for the complete exam story.",
            ],
            table: {
              caption: "The two transmitter architectures.",
              headers: ["Aspect", "Low-level", "High-level"],
              rows: [
                ["Modulation point", "early, low-power stage", "final Class-C collector"],
                ["Audio amplifier size", "milliwatts to watts", "m²Pc/2 — kilowatts in broadcast"],
                ["RF stage class", "linear A/B throughout", "Class C throughout"],
                ["RF efficiency", "low (linear stages)", "high (Class C)"],
                ["Typical use", "low-power, lab transmitters", "medium-wave broadcast"],
              ],
            },
            callout: {
              type: "tip",
              title: "Audio power = sideband power",
              body: "The one sentence that connects sections 2.3 and 2.7: a high-level modulator's audio amplifier must deliver exactly the sideband power m²Pc/2, because in a high-level transmitter that audio is the only source of sideband energy. Quote it with the 50 kW/6.25 kW example and the architecture choice explains itself.",
            },
            examQuestions: [
              {
                q: "Compare low-power and high-power AM transmitters with block diagrams, and state where each places the modulator.",
                marks: 7,
                outline: [
                  "Low-level: oscillator -> buffer -> modulator -> linear RF chain -> antenna",
                  "High-level: Class-C chain -> final PA with modulation transformer -> antenna",
                  "Audio power: small in low-level; m²Pc/2 (6.25 kW per 50 kW at m = 0.5) in high-level",
                  "RF efficiency: linear stages waste power; Class C is efficient",
                  "Applications: low-power/experimental vs broadcast",
                ],
              },
              {
                q: "Explain why the audio amplifier of a high-level AM transmitter must supply m²Pc/2 watts, with a 50 kW, m = 0.5 example.",
                marks: 7,
                outline: [
                  "In high-level modulation the final stage is unmodulated Class C",
                  "All sideband power must come from the audio chain via the modulation transformer",
                  "Sideband power = m²Pc/2 = 0.125 × 50 kW = 6.25 kW",
                  "Carrier power comes from the DC supply; sidebands from audio",
                  "This sizes the audio amplifier and transformer",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "AM receivers — TRF, superheterodyne and the figures of merit",
            body: [
              "The tuned-radio-frequency (TRF) receiver amplifies and filters entirely at the signal frequency: several ganged-tuned RF stages feed an envelope detector and audio amplifier. Its weaknesses are structural: gain and stability fall as tuning frequency rises; selectivity (BW = fr/Q) varies across the band — wide at the top of the band, narrow at the bottom; and every stage needs its own tracking capacitor. The superheterodyne fixes all three by translating: the mixer + local oscillator convert every incoming station to a fixed 455 kHz intermediate frequency, where fixed, stable, high-selectivity IF stages do the gain work. The receiver is 'tuned' only in its pre-selector and its LO.",
              "The worked numbers anchor the design. To receive 1.6 MHz with a 455 kHz IF, the LO runs at 1.6 + 0.455 = 2.055 MHz; the image frequency is fs + 2·IF = 2.51 MHz — a station there leaks through the pre-selector and is converted to the same IF, hence the RF stage's job is image rejection. Sensitivity is the weakest signal the receiver can demodulate usefully (microvolts, set by noise and gain); selectivity is the ability to reject adjacent-channel and image frequencies (set by IF filters and the pre-selector); fidelity is the faithfulness with which the audio chain reproduces the original modulating band (flat gain 300–3400 Hz).",
              "The exam angle is the hottest block in Unit II: the superheterodyne block diagram with sensitivity and selectivity was asked in Jun 2023; TRF working in Dec 2024; TRF design plus its limitations versus the superheterodyne in Jun 2025; the block diagram again and the three-figure definitions in Jun 2026; and a sensitivity/selectivity/fidelity short note in Jun 2025's any-two. Draw the six-block chain, quote the 455 kHz IF, compute one image frequency, and define the three figures of merit in one line each — that combination answers every phrasing seen so far.",
            ],
            keyTerms: [
              { term: "TRF receiver", definition: "All RF stages tuned to the incoming frequency; simple but variable selectivity and unstable gain." },
              { term: "Superheterodyne receiver", definition: "Mixer + LO convert every station to a fixed 455 kHz IF where gain and selectivity concentrate." },
              { term: "Image frequency", definition: "fs + 2·IF — the unwanted station that mixes to the same IF; rejected by the RF pre-selector." },
              { term: "Sensitivity", definition: "The minimum input signal the receiver can demodulate acceptably (µV) — set by gain and noise." },
              { term: "Selectivity", definition: "The ability to discriminate against adjacent and image channels — set by filter Q and IF bandwidth." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The superheterodyne chain",
              caption: "Everything after the mixer runs at a fixed 455 kHz — the design trick that made radio cheap.",
              stages: [
                { label: "RF pre-selector", note: "tuned to fs; rejects the image" },
                { label: "Mixer + LO", note: "LO = fs + 455 kHz; output at fixed IF" },
                { label: "IF amplifiers", note: "455 kHz — fixed, stable, selective" },
                { label: "Envelope detector", note: "recovers the audio envelope" },
                { label: "AF amplifier", note: "audio power to the speaker" },
              ],
            },
            bullets: [
              "TRF: ganged RF stages; selectivity varies (BW = fr/Q), gain unstable at high frequency.",
              "Superhet: mixer + LO -> fixed 455 kHz IF -> detector; one set of IF filters serves the whole band.",
              "LO = fs + IF; image = fs + 2·IF: 1.6 MHz received -> 2.51 MHz image.",
              "Sensitivity: minimum usable input in µV; selectivity: adjacent/image rejection; fidelity: audio-band faithfulness.",
              "Advantage order: stability, uniform selectivity, cheap fixed filters, better tracking.",
              "The block diagram alone was asked twice (Jun 2023, Jun 2026) — draw it fast and well.",
            ],
            table: {
              caption: "TRF vs superheterodyne, and the three figures of merit.",
              headers: ["Aspect", "TRF", "Superheterodyne"],
              rows: [
                ["Selectivity", "varies with tuning (fr/Q)", "fixed at IF — uniform across band"],
                ["Stability", "falls as fr rises", "fixed IF stages — stable"],
                ["Tracking", "many ganged capacitors", "pre-selector + LO only"],
                ["Image frequency", "not applicable", "fs + 2·IF; rejected by pre-selector"],
                ["Sensitivity/selectivity/fidelity", "figure of merit for both", "defined in one line each"],
              ],
            },
            callout: {
              type: "exam",
              title: "Four sessions on the receiver block",
              body: "The receiver is Unit II's hottest exam block: Jun 2023 (superhet + sensitivity/selectivity), Dec 2024 (TRF working), Jun 2025 (TRF vs superhet, plus the three-figure short note) and Jun 2026 (block diagram again + figure definitions). Rehearse the six-block diagram, the 455 kHz number and the image-frequency line until each takes under a minute.",
            },
            examQuestions: [
              {
                q: "Explain the block diagram of a superheterodyne receiver. Also define sensitivity and selectivity of receivers.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Chain: RF -> mixer + LO -> 455 kHz IF -> detector -> AF -> speaker",
                  "LO = fs + 455 kHz; all stations convert to one IF",
                  "IF stages provide fixed, stable gain and selectivity",
                  "Sensitivity: weakest usable input (µV) — gain and noise limited",
                  "Selectivity: adjacent-channel and image rejection — filter Q limited",
                ],
              },
              {
                q: "With the help of a block diagram explain the working of the TRF receiver.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Two or three ganged-tuned RF amplifiers at fs",
                  "Envelope detector -> AF amplifier -> speaker",
                  "Selectivity = fr/Q — varies across the band",
                  "Instability at high fr; tracking burden of many capacitors",
                  "Contrast line: superhet fixes both by translating to 455 kHz",
                ],
              },
              {
                q: "Explain the design and operation of a TRF receiver. What are its limitations compared to a superheterodyne receiver?",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Design: N tuned RF stages + detector + audio",
                  "Operates entirely at the signal frequency",
                  "Limitation 1: selectivity varies with tuning frequency",
                  "Limitation 2: gain and stability degrade at high fr",
                  "Limitation 3: many ganged capacitors must track",
                  "Superhet solves all three via fixed 455 kHz IF",
                ],
              },
              {
                q: "Define sensitivity, selectivity and fidelity of a radio receiver.",
                marks: 7,
                appearances: ["Jun 2025", "Jun 2026"],
                outline: [
                  "Sensitivity: minimum input signal for acceptable output (µV)",
                  "Selectivity: discrimination against adjacent/image channels",
                  "Fidelity: faithful reproduction of the original modulating band",
                  "One driving factor each: gain/noise, filter Q, audio-chain flatness",
                  "Applications: sensitivity quoted in µV; selectivity in dB of adjacent rejection",
                  "In the superhet, selectivity concentrates at the 455 kHz IF stages",
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
      title: "Angle Modulation",
      summary:
        "Unit III moves the message into the carrier's angle: FM and PM with their instantaneous-frequency definitions, frequency deviation, modulation index and Carson's bandwidth, narrowband versus wideband FM, direct and indirect (Armstrong and PLL) generation, the discriminator family that demodulates, pre-emphasis and de-emphasis, and the bridge into pulse modulation.",
      chapter: {
        number: "03",
        title: "When the Angle Carries the Message",
        intro:
          "Unit III covers the two angle-modulation types and their expressions, frequency deviation, modulation index and deviation ratio, Carson's bandwidth rule, NBFM versus WBFM, direct (varactor/reactance) and indirect (Armstrong, PLL) FM generation, the slope, balanced-slope, Foster-Seeley and ratio detectors, pre-emphasis and de-emphasis in FM systems, and the introduction to pulse modulation systems.",
        inOneBreath:
          "Angle modulation holds amplitude constant and varies the angle: FM puts kf·∫m(t)dt into the phase, PM puts kp·m(t) there — so PM is FM of the derivative. Deviation Δf = kf·Am, index β = Δf/fm, deviation ratio δ = Δf/fm, and Carson's rule BW = 2(Δf + fm) covers both narrowband (β < 1, BW ≈ 2fm) and wideband cases. Direct generation (varactor) buys deviation at the cost of drift; Armstrong's indirect route buys crystal stability at the cost of multiplication chains; discriminators convert frequency to amplitude for the envelope detector, with the ratio detector adding built-in AM rejection; pre/de-emphasis trades a 75 µs corner for several dB of audio SNR.",
        sections: [
          {
            number: "3.1",
            title: "Angle modulation — FM and PM",
            body: [
              "Angle modulation keeps the carrier amplitude constant and encodes the message in the instantaneous angle: s(t) = Ac cos(ωc t + θ(t)). Phase modulation puts the message directly in the angle, θ(t) = kp·m(t); frequency modulation puts the integral there, θ(t) = 2πkf∫m(τ)dτ, so the instantaneous frequency is ωi = ωc + 2πkf·m(t) — the frequency deviates in step with the message while the amplitude never changes. The constant Amplitude is the whole point: angle modulation is immune to the amplitude-noise that plagues AM, which is why FM broadcast sounds clean.",
              "The two are one family with a derivative between them. Modulating with m(t) in PM equals FM with dm/dt; modulating with m(t) in FM equals PM with ∫m dτ. For a single tone m(t) = Am cos ωm t, the FM wave is s(t) = Ac cos(ωc t + β sin ωm t) with β = kf·Am/ωm = Δf/fm — the Jun 2022 derivation — and the PM wave is Ac cos(ωc t + kp·Am cos ωm t). The message spectrum in FM is not a three-line affair like AM: it spreads into an infinite Bessel-weighted line comb around fc, symmetric about fc and spaced by fm.",
              "The exam angle: Jun 2023 asked for frequency and phase modulation with proper expressions and waveform diagrams; Nov 2023 asked to discuss angle modulation, its significance and its types; Jun 2026's FM numerical ended with 'also state the difference between FM and PM'. The compare table (parameter varied, index definition, noise behaviour, equipment) plus one waveform pair — constant-amplitude FM against AM's breathing envelope — is the expected visual.",
            ],
            keyTerms: [
              { term: "Angle modulation", definition: "s(t) = Ac cos(ωc t + θ(t)) — constant amplitude, message in the angle." },
              { term: "Frequency modulation (FM)", definition: "Instantaneous frequency ωc + 2πkf·m(t); phase carries kf∫m dτ." },
              { term: "Phase modulation (PM)", definition: "Phase carries kp·m(t) directly; FM of the message's derivative." },
              { term: "Deviation Δf", definition: "The peak frequency swing kf·Am away from fc — FM's amplitude knob." },
            ],
            diagram: {
              kind: "compare",
              title: "FM vs PM",
              caption: "Same family, one derivative apart — the table rows are the exam answer.",
              left: {
                heading: "FM",
                items: [
                  "Frequency deviates with m(t): ωi = ωc + 2πkf·m(t)",
                  "Index β = Δf/fm — varies inversely with fm",
                  "s = Ac cos(ωc t + β sin ωm t) for a tone",
                  "De-emphasis applicable; broadcast standard",
                ],
              },
              right: {
                heading: "PM",
                items: [
                  "Phase deviates with m(t): θ = kp·m(t)",
                  "Index kp·Am — independent of fm",
                  "s = Ac cos(ωc t + kp·Am cos ωm t) for a tone",
                  "FM of the message derivative; used as indirect-FM building block",
                ],
              },
            },
            bullets: [
              "Angle family: s(t) = Ac cos(ωc t + θ(t)); amplitude constant by design.",
              "FM: θ = 2πkf∫m dτ; PM: θ = kp·m(t) — PM is FM of dm/dt.",
              "Single-tone FM: s = Ac cos(ωc t + β sin ωm t), β = Δf/fm (Jun 2022 derivation).",
              "Instantaneous frequency of PM: ωi = ωc + kp·dm/dt.",
              "FM spectrum: Bessel-weighted comb around fc spaced by fm — not AM's three lines.",
              "Angle modulation's gift: constant envelope defeats amplitude noise.",
            ],
            table: {
              caption: "FM and PM compared.",
              headers: ["Aspect", "FM", "PM"],
              rows: [
                ["Parameter varied", "instantaneous frequency", "phase"],
                ["Single-tone index", "β = Δf/fm (falls as fm rises)", "kp·Am (constant in fm)"],
                ["Relation", "FM of ∫m = PM of m", "PM of dm/dt = FM of m"],
                ["Noise behaviour", "constant amplitude — amplitude noise rejected", "same envelope property"],
                ["Typical use", "broadcast, mobile radio", "intermediate step in Armstrong FM"],
              ],
            },
            callout: {
              type: "tip",
              title: "PM is FM of the derivative",
              body: "One sentence — 'a PM system driven by m(t) behaves exactly like an FM system driven by dm/dt' — answers half of every FM-vs-PM comparison. It also explains why Armstrong's indirect FM generator starts by generating NBFM from a PM path with an integrator inserted before it.",
            },
            examQuestions: [
              {
                q: "Explain frequency and phase modulation with proper expressions and waveform diagrams.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Angle form s(t) = Ac cos(ωc t + θ(t))",
                  "FM: θ = 2πkf∫m dτ; instantaneous frequency ωc + 2πkf·m(t)",
                  "PM: θ = kp·m(t); instantaneous frequency ωc + kp·dm/dt",
                  "Single-tone results with β = Δf/fm and kp·Am",
                  "Waveform pair: FM constant amplitude, PM same envelope, message mapping shown",
                  "PM = FM of derivative — the connecting sentence",
                ],
              },
              {
                q: "Discuss angle modulation and explain its significance in communication systems. Discuss the types of angle modulation techniques.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Angle modulation: message in the angle, amplitude fixed",
                  "Significance: constant envelope defeats amplitude noise; bandwidth-for-SNR trade",
                  "Type 1: FM — deviation proportional to message",
                  "Type 2: PM — phase proportional to message",
                  "Relation: one derivative apart; both share Bessel spectra and Carson bandwidth",
                ],
              },
              {
                q: "Derive the expression for a single-tone frequency modulated signal and identify its modulation index.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "m(t) = Am cos ωm t; instantaneous frequency fi = fc + kf·Am cos ωm t",
                  "θ(t) = 2π∫fi dt = ωc t + (kf·Am/ωm) sin ωm t",
                  "s(t) = Ac cos(ωc t + β sin ωm t)",
                  "β = Δf/fm = kf·Am/fm — the modulation index",
                  "Spectrum: Bessel comb at fc ± n·fm",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Deviation, modulation index and Carson's bandwidth",
            body: [
              "Three parameters size every FM link. Frequency deviation Δf = kf·Am is the peak swing of instantaneous frequency away from fc. Modulation index β = Δf/fm compares that swing to the modulating frequency — the FM analogue of AM's m, but it grows as fm shrinks. The deviation ratio δ = Δf/fm evaluated at the maximum message frequency is the design value of β (for a single tone the two coincide — the distinction Nov 2023 and Jun 2026 both probe). Percent modulation scales Δf against the licensed maximum deviation, 75 kHz for FM broadcast.",
              "Bandwidth is where FM surprises AM-trained students: the spectrum is an infinite Bessel comb, but sidebands beyond |n| > β + 1 carry little power. Carson's rule captures that: BW ≈ 2(Δf + fm) = 2·fm(β + 1). Worked numbers from the papers: Jun 2026 — carrier 100 MHz, deviation 75 kHz, modulating frequency 10 kHz gives β = 7.5 and BW = 2(85) = 170 kHz. Nov 2023 — deviation 10 kHz with modulating frequency 5 kHz gives deviation ratio 2 and BW = 30 kHz. FM broadcast: Δf = 75 kHz, fm = 15 kHz gives β = 5, Carson BW 180 kHz inside a 200 kHz channel.",
              "The exam angle: the definition quartet (deviation, percent modulation, phase deviation, index) was set in Dec 2024; the definitions alone in Jun 2026; the deviation-ratio numerical in Nov 2023 and again inside Jun 2026's numerical. The safe template: define all four parameters with formulas, compute β and Carson BW for the given numbers, and remark that β < 1 means narrowband (two significant sidebands) while β >> 1 means wideband (Carson sidebands) — that last sentence connects to section 3.3.",
            ],
            keyTerms: [
              { term: "Frequency deviation Δf", definition: "Peak swing of instantaneous frequency from fc: Δf = kf·Am." },
              { term: "Modulation index β", definition: "β = Δf/fm — ratio of deviation to modulating frequency; sizes the spectrum." },
              { term: "Deviation ratio δ", definition: "δ = Δf/fm at maximum message frequency — the system's design β." },
              { term: "Carson's rule", definition: "BW ≈ 2(Δf + fm) = 2fm(β + 1) — 98%-power bandwidth of an FM wave." },
            ],
            diagram: {
              kind: "flow",
              title: "From deviation to bandwidth",
              caption: "Four steps turn any FM numerical into a bandwidth.",
              steps: [
                { label: "Find Δf", note: "kf·Am, or the licensed maximum" },
                { label: "Compute β", note: "β = Δf/fm at the given tone" },
                { label: "Apply Carson", note: "BW = 2(Δf + fm)" },
                { label: "Classify", note: "β < 1 narrowband; β >> 1 wideband" },
              ],
            },
            bullets: [
              "Δf = kf·Am; β = Δf/fm; deviation ratio δ = Δf/fm at fm(max); percent modulation = Δf/Δf(max).",
              "Carson: BW ≈ 2(Δf + fm) = 2fm(β + 1).",
              "Jun 2026 numbers: 100 MHz carrier, Δf = 75 kHz, fm = 10 kHz -> β = 7.5, BW = 170 kHz.",
              "Nov 2023 numbers: Δf = 10 kHz, fm = 5 kHz -> δ = 2, BW = 30 kHz.",
              "FM broadcast design point: Δf = 75 kHz, fm = 15 kHz -> β = 5, BW 180 kHz in a 200 kHz channel.",
              "β < 1: only two significant sidebands; β >> 1: wideband with 2(β + 1) of them.",
            ],
            codeExample: {
              language: "python",
              caption: "carson.py — the two paper numericals",
              code: `import numpy as np

def fm_params(df, fm):
    beta = df / fm
    return beta, 2 * (df + fm)

# Jun 2026: fc = 100 MHz, deviation 75 kHz, modulating tone 10 kHz
beta, bw = fm_params(75e3, 10e3)
print(beta, bw)          # 7.5  170000 -> 170 kHz

# Nov 2023: deviation 10 kHz, modulating 5 kHz -> deviation ratio
print(fm_params(10e3, 5e3))   # (2.0, 30000) -> delta ratio 2, BW 30 kHz`,
            },
            callout: {
              type: "exam",
              title: "Deviation ratio numerical: two sessions",
              body: "Nov 2023 (Δf = 10 kHz, fm = 5 kHz) and Jun 2026 (Δf = 75 kHz, fm = 10 kHz plus the FM/PM difference) are the same question with different numbers. Do not confuse deviation ratio δ with percent modulation — δ compares deviation to fm; percent modulation compares it to the licensed maximum (75 kHz).",
            },
            examQuestions: [
              {
                q: "Explain the concept of deviation ratio and its significance in FM systems. In FM, the frequency deviation is 10 kHz and the maximum modulating frequency is 5 kHz — determine the deviation ratio.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Deviation ratio δ = Δf/fm at maximum message frequency",
                  "Significance: the system's design modulation index — sizes BW via Carson",
                  "δ = 10/5 = 2",
                  "Carson BW = 2(10 + 5) = 30 kHz",
                  "δ > 1: wideband FM behaviour",
                ],
              },
              {
                q: "In angle modulation, explain frequency deviation, percent modulation, phase deviation and modulation index with a suitable example.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Frequency deviation Δf = kf·Am — peak frequency swing",
                  "Percent modulation = (Δf / Δf_max) × 100, Δf_max = 75 kHz broadcast",
                  "Phase deviation = kp·Am — peak phase swing (PM analogue)",
                  "Modulation index β = Δf/fm",
                  "Example: Δf = 75 kHz, fm = 15 kHz -> β = 5, 100% modulation",
                ],
              },
              {
                q: "Define frequency deviation, modulation index and deviation ratio of an FM wave.",
                marks: 7,
                appearances: ["Jun 2026"],
              },
              {
                q: "An FM wave has a carrier of 100 MHz, frequency deviation 75 kHz and modulating frequency 10 kHz. Calculate the modulation index and bandwidth, and state the difference between FM and PM.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "β = Δf/fm = 75/10 = 7.5",
                  "Carson BW = 2(75 + 10) = 170 kHz",
                  "FM: frequency deviates with m(t); PM: phase deviates with m(t)",
                  "PM index kp·Am is independent of fm; FM β falls as fm rises",
                  "PM = FM of the message derivative",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Types of FM — narrowband and wideband",
            body: [
              "FM splits into two operating regimes by modulation index. Narrowband FM (NBFM, β < 1): the bandwidth is still about 2fm — Carson gives 2fm(1 + β) ≈ 2fm — and the spectrum looks deceptively like AM: a carrier plus two first-order sidebands. The difference is in the phases: NBFM's lower sideband carries a sign flip that makes the sidebands in phase quadrature with the carrier, so the envelope is not perfectly constant and the wave is not AM. NBFM is the intermediate product of Armstrong's indirect generator, and deviation is small (hundreds of hertz to a few kilohertz).",
              "Wideband FM (WBFM, β >> 1) is the broadcast regime: deviation is large (75 kHz), the index is set by design (β = 5 for FM broadcast with fm = 15 kHz), and Carson's bandwidth — 2(Δf + fm) = 180 kHz inside the licensed 200 kHz channel — is filled with Bessel-weighted sidebands. The noise trade works here: wideband FM exchanges generous bandwidth for a large post-detection SNR improvement, which is exactly the performance shaping promised in Unit II's need-for-modulation list. Communication-quality audio (fm = 3–15 kHz) and mobile radio sit in this regime.",
              "The exam angle: no paper in the archive has asked 'types of FM' directly yet, but the syllabus lists it and the definition quartet of Dec 2024/Jun 2026 skirts it. The safe answer is the comparison table — bandwidth formula, index range, sideband structure, application — plus the one non-obvious line that earns the definition mark: NBFM is not AM despite its AM-like spectrum, because its sidebands are in quadrature.",
            ],
            keyTerms: [
              { term: "NBFM", definition: "Narrowband FM, β < 1; BW ≈ 2fm; carrier + two quadrature sidebands; Armstrong's intermediate product." },
              { term: "WBFM", definition: "Wideband FM, β >> 1; BW by Carson 2(Δf + fm); broadcast regime with large SNR gain." },
              { term: "Quadrature sidebands", definition: "NBFM's sidebands are 90° out of phase with the carrier — the visible difference from AM." },
            ],
            diagram: {
              kind: "compare",
              title: "Narrowband vs wideband FM",
              caption: "Same mathematics, two regimes — the index decides which world you are in.",
              left: {
                heading: "NBFM (β < 1)",
                items: [
                  "BW ≈ 2fm — Carson: 2fm(1 + β)",
                  "Carrier + two significant sidebands",
                  "Sidebands in quadrature — not AM",
                  "Deviation: hundreds of Hz; Armstrong's raw product",
                ],
              },
              right: {
                heading: "WBFM (β >> 1)",
                items: [
                  "BW = 2(Δf + fm) — 180 kHz for broadcast",
                  "Bessel comb of many sidebands",
                  "Deviation 75 kHz, β = 5 design point",
                  "Bandwidth-for-SNR trade pays off",
                ],
              },
            },
            bullets: [
              "NBFM: β < 1, BW ≈ 2fm, two significant sidebands in quadrature with the carrier.",
              "WBFM: β >> 1, BW = 2(Δf + fm); broadcast β = 5 with Δf = 75 kHz, fm = 15 kHz.",
              "NBFM is not AM: the lower sideband's sign flip puts sidebands 90° from the carrier.",
              "Armstrong generates NBFM first, then multiplies deviation to reach WBFM.",
              "Carson's rule bridges the regimes: BW = 2fm(β + 1).",
              "Wideband's payoff: post-detection SNR improvement over AM for the same carrier power.",
            ],
            table: {
              caption: "NBFM vs WBFM.",
              headers: ["Aspect", "NBFM", "WBFM"],
              rows: [
                ["Modulation index", "β < 1", "β >> 1 (broadcast β = 5)"],
                ["Bandwidth", "≈ 2fm", "2(Δf + fm) by Carson"],
                ["Sidebands", "carrier + first pair only", "Bessel comb, 2(β + 1) significant"],
                ["Deviation", "small (Hz–kHz)", "large (75 kHz broadcast)"],
                ["Application", "Armstrong intermediate product, short links", "FM broadcast, mobile radio"],
              ],
            },
            callout: {
              type: "tip",
              title: "The not-AM line",
              body: "When a question offers NBFM and AM side by side, the definition mark goes to whoever writes: 'NBFM's spectrum resembles AM's, but its lower sideband is inverted, placing both sidebands in phase quadrature with the carrier — so the envelope is not perfectly constant and a conventional envelope detector distorts.' That single sentence separates NBFM from AM forever.",
            },
            examQuestions: [
              {
                q: "Explain the types of FM — narrowband and wideband — with bandwidth and spectrum sketches for each.",
                marks: 7,
                outline: [
                  "NBFM: β < 1; Carson BW ≈ 2fm; carrier + two quadrature sidebands",
                  "NBFM spectrum sketch: three lines, lower one phase-inverted",
                  "WBFM: β >> 1; BW = 2(Δf + fm); Bessel comb sketch",
                  "Broadcast numbers: Δf = 75 kHz, fm = 15 kHz, β = 5, BW 180 kHz",
                  "Regime sentence: NBFM feeds Armstrong generation; WBFM pays bandwidth for SNR",
                ],
              },
              {
                q: "Show that the spectrum of narrowband FM resembles AM but is not AM.",
                marks: 7,
                outline: [
                  "Expand cos(ωc t + β sin ωm t) for small β: cos ωc t − β sin ωm t sin ωc t",
                  "sin ωm t sin ωc t = ½[cos(ωc−ωm)t − cos(ωc+ωm)t]",
                  "Lower sideband carries a minus sign -> quadrature sidebands",
                  "AM expansion has equal-sign sidebands — in phase with each other",
                  "Consequence: NBFM envelope varies slightly; envelope detector distorts",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Generating FM — direct, indirect and the PLL",
            body: [
              "Direct FM generation lets the message move the oscillator's own frequency: a varactor diode (voltage-dependent capacitance) or a reactance modulator (a tube/transistor presenting a controllable reactance) sits in the tank circuit of an LC oscillator, so the message swings the instantaneous frequency directly. Deviations of ±75 kHz are easy — this is how broadcast transmitters reach wideband — but an LC oscillator's centre frequency drifts with temperature and supply, so automatic frequency control (AFC) comparing the output with a crystal reference is mandatory.",
              "Indirect (Armstrong) generation buys stability instead: a crystal oscillator feeds a phase modulator preceded by an integrator, producing stable NBFM with tiny deviation (tens of hertz); frequency multipliers then multiply deviation and carrier together, and mixers reposition the centre frequency between multiplier chains. The arithmetic is linear: multiplying frequency by N multiplies Δf by N. Reaching ±75 kHz from ±25 Hz needs a total multiplication of 3000, split into chains with mixers keeping the final carrier on frequency. The result is crystal-accurate centre frequency with wide deviation — at the cost of hardware. Nov 2023's PLL question is the modern variant: a phase-locked loop locks a VCO to a reference crystal, and the message modulates the VCO within the loop bandwidth, merging both advantages.",
              "The exam angle: direct-and-indirect was asked in Nov 2023, Dec 2024 (advantages/disadvantages comparison) and Jun 2025 — three sessions — plus the PLL variant in Nov 2023. The full-mark answer carries the fork diagram (direct with AFC vs indirect with multiplication), the stability-versus-deviation trade in one sentence each, and the ×N deviation-multiplication arithmetic with the 25 Hz → 75 kHz example.",
            ],
            keyTerms: [
              { term: "Varactor modulator", definition: "Voltage-dependent capacitance in the oscillator tank swings frequency with the message — direct FM." },
              { term: "Reactance modulator", definition: "An active device presenting a message-controlled reactance across the oscillator tank — direct FM." },
              { term: "Armstrong (indirect) method", definition: "Crystal-stable NBFM, then frequency multiplication (×N multiplies Δf by N) and mixing to WBFM." },
              { term: "AFC", definition: "Automatic frequency control — compares the direct modulator's output with a crystal reference and corrects drift." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing an FM generator",
              caption: "Two good routes and one bad shortcut — the drift is the hazard.",
              start: "Generate WBFM",
              branches: [
                { label: "Direct: varactor/reactance + AFC", outcome: "wide ±75 kHz deviation; AFC holds centre frequency", good: true },
                { label: "Indirect: Armstrong (NBFM + ×N chains)", outcome: "crystal-stable centre; deviation built by multiplication", good: true },
                { label: "PLL synthesis", outcome: "loop-locked VCO merges stability and modulation", good: true },
                { label: "Direct without AFC", outcome: "centre frequency drifts off the licensed channel", good: false },
              ],
            },
            bullets: [
              "Direct: varactor or reactance modulator in the oscillator tank; wide deviation, drifts — needs AFC.",
              "Indirect (Armstrong): crystal + integrator + phase modulator -> NBFM; multipliers grow deviation.",
              "Multiplication arithmetic: ×N multiplies fc and Δf by N; mixers re-position the centre.",
              "Worked chain: ±25 Hz NBFM × 3000 -> ±75 kHz broadcast deviation.",
              "PLL variant (Nov 2023): reference-locked VCO modulated within loop bandwidth.",
              "Trade in one line: direct buys deviation and pays with AFC; indirect buys stability and pays with hardware.",
            ],
            table: {
              caption: "Direct vs indirect FM generation.",
              headers: ["Aspect", "Direct (varactor/reactance)", "Indirect (Armstrong)"],
              rows: [
                ["Carrier stability", "LC oscillator — drifts, needs AFC", "crystal reference — drift-free"],
                ["Achievable deviation", "wide, ±75 kHz directly", "tiny NBFM start (±25 Hz), grown by ×N"],
                ["Hardware", "simple oscillator + AFC", "multiplier chains + mixers"],
                ["Distortion risk", "varactor non-linearity", "multiplier/filter chain"],
                ["PLL variant", "—", "loop-locked VCO (modern indirect)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Three sessions on generation",
              body: "Direct-and-indirect FM generation was set in Nov 2023, Dec 2024 (advantages and disadvantages) and Jun 2025, with the PLL variant added in Nov 2023. The answer skeleton: two block diagrams, the ×N arithmetic with the 25 Hz → 75 kHz trace, and one advantage/disadvantage line each — rehearse it as a unit.",
            },
            examQuestions: [
              {
                q: "Discuss the direct and indirect methods of frequency modulation generation. Explain the working principle and advantages of each method.",
                marks: 7,
                appearances: ["Nov 2023", "Jun 2025"],
                outline: [
                  "Direct: varactor/reactance in the LC tank; message swings fi directly",
                  "Advantage: wide deviation immediately; disadvantage: drift -> AFC needed",
                  "Indirect: crystal oscillator + integrator + phase modulator -> NBFM",
                  "Frequency multipliers multiply deviation; mixers hold the centre",
                  "Advantage: crystal stability; disadvantage: hardware complexity",
                  "×3000 arithmetic: ±25 Hz -> ±75 kHz",
                ],
              },
              {
                q: "Discuss the advantages and disadvantages of the direct method compared to the indirect method of FM generation.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Direct advantages: simple hardware, wide deviation, cheap",
                  "Direct disadvantages: LC drift, needs AFC, varactor non-linearity distorts",
                  "Indirect advantages: crystal-accurate centre, stable long-term",
                  "Indirect disadvantages: complex chains, small starting deviation must be multiplied",
                  "Concluding line: broadcast uses indirect for stability or direct + AFC for economy",
                ],
              },
              {
                q: "Explain the concept of indirect frequency synthesis using a Phase Locked Loop. Discuss the working principle of PLL in FM generation.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "PLL: phase detector + loop filter + VCO locked to a crystal reference",
                  "Within loop bandwidth the VCO follows the reference — stability inherited",
                  "Message modulates the VCO; loop corrects slowly, deviation survives",
                  "Loop bandwidth separates reference tracking from message modulation",
                  "Result: stable centre frequency with usable deviation",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "FM demodulators — slope, Foster-Seeley and ratio detectors",
            body: [
              "An FM demodulator converts frequency deviation back into amplitude. The slope detector is the simplest: a tuned circuit deliberately detuned so fc sits on the sloped skirt of its response; deviation then moves the output amplitude up and down the slope, and an envelope detector reads it. Linearity is poor over wide deviations, so the balanced slope detector uses two tanks detuned symmetrically above and below fc, connected in push-pull — one rises while the other falls, cancelling even-order distortion and doubling the linear range.",
              "The Foster-Seeley discriminator is the engineering refinement: a phase-shift network (primary tuned to fc, capacitively coupled secondary with centre tap) converts frequency deviation into phase shift between primary and secondary voltages; two diodes rectify the phase-dependent voltages and their difference — zero at fc, positive above, negative below — is the audio. It is sensitive and linear but responds to amplitude changes, so a limiter stage must precede it. The ratio detector re-wires the Foster-Seeley with one diode reversed and a large stabilizing capacitor across the output; the circuit divides (hence 'ratio') rather than subtracts, and the big capacitor holds the sum constant — built-in AM rejection that removes the need for a separate limiter, at the cost of somewhat lower sensitivity.",
              "The exam angle is the hottest block of Unit III: Foster-Seeley with schematic and phase diagrams (Jun 2023), balanced slope detector (Jun 2023), Foster-Seeley as FM demodulator (Dec 2024) and the ratio detector with circuit diagram (Jun 2025). Draw each schematic with its characteristic S-curve, and close with the discriminator's signature: output zero at centre frequency, linear through ±Δf, and — the ratio detector's differentiator — inherent amplitude limiting.",
            ],
            keyTerms: [
              { term: "Slope detector", definition: "Detuned tank on whose response skirt deviation becomes amplitude; envelope-detected afterwards." },
              { term: "Balanced slope detector", definition: "Two symmetrically detuned tanks in push-pull — linearized, wider-range slope detection." },
              { term: "Foster-Seeley discriminator", definition: "Phase-shift network + two diodes; frequency -> phase -> amplitude difference; needs a limiter." },
              { term: "Ratio detector", definition: "Foster-Seeley variant with reversed diode and stabilizing capacitor — built-in AM rejection, no limiter needed." },
            ],
            diagram: {
              kind: "compare",
              title: "Foster-Seeley vs ratio detector",
              caption: "The classic exam contrast: same core, one wiring change buys the limiting.",
              left: {
                heading: "Foster-Seeley discriminator",
                items: [
                  "Frequency -> phase -> amplitude difference of two diode outputs",
                  "Zero output at fc; linear S-curve through ±Δf",
                  "Responds to AM — requires a limiter stage before it",
                  "Higher sensitivity of the two",
                ],
              },
              right: {
                heading: "Ratio detector",
                items: [
                  "One diode reversed; output is a ratio, not a difference",
                  "Large capacitor holds the voltage sum constant",
                  "Inherent AM rejection — no separate limiter",
                  "Slightly lower sensitivity; standard in receivers",
                ],
              },
            },
            bullets: [
              "Slope detector: fc on the skirt of one tank — simple, narrow, non-linear.",
              "Balanced slope: two detuned tanks push-pull — wider linear range, still skirt-limited.",
              "Foster-Seeley: tuned transformer + capacitive coupling turns Δf into Δphase, then ΔV.",
              "Foster-Seeley characteristic: S-curve through zero at fc; needs a limiter ahead.",
              "Ratio detector: reversed diode + big capacitor = built-in limiting; receiver favourite.",
              "All four end at an audio output proportional to instantaneous frequency error.",
            ],
            table: {
              caption: "The detector family.",
              headers: ["Detector", "Principle", "AM rejection", "Linearity"],
              rows: [
                ["Slope", "single detuned tank skirt", "none", "poor over wide deviation"],
                ["Balanced slope", "two tanks, push-pull", "none", "better, symmetric"],
                ["Foster-Seeley", "phase-shift network + diode pair", "none — limiter required", "good"],
                ["Ratio detector", "reversed diode + stabilizing C", "built-in", "good"],
              ],
            },
            callout: {
              type: "exam",
              title: "Four detector questions in three sessions",
              body: "Unit III's most repeated block: Foster-Seeley and balanced slope in Jun 2023, Foster-Seeley again in Dec 2024, ratio detector in Jun 2025. The one-line differentiator that scores: the ratio detector needs no limiter because its large stabilizing capacitor rejects AM inherently — the Foster-Seeley does not.",
            },
            examQuestions: [
              {
                q: "Explain the Foster-Seeley discriminator with schematic diagram and phase diagrams.",
                marks: 7,
                appearances: ["Jun 2023", "Dec 2024"],
                outline: [
                  "Circuit: tuned primary, centre-tapped secondary, capacitive coupling, two diodes",
                  "At fc: secondary current lags 90° — diode voltages equal, output zero",
                  "Above fc: phase relation shifts -> positive output",
                  "Below fc: opposite phase -> negative output",
                  "Characteristic S-curve linear over ±Δf",
                  "Needs a limiter before it — responds to AM",
                ],
              },
              {
                q: "Explain the balanced slope detector with the help of schematic and characteristic diagrams.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Two tanks detuned to fc − Δ and fc + Δ",
                  "Push-pull connection: one rises as the other falls",
                  "Combined characteristic: wider, more linear S-curve",
                  "Envelope-detected outputs subtract to give audio",
                  "Limitation: still skirt-based; range set by tank Q",
                ],
              },
              {
                q: "Explain the function of a ratio detector with circuit diagram.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Foster-Seeley wiring with one diode reversed",
                  "Large stabilizing capacitor across the output holds the sum constant",
                  "Output is the ratio of the two diode voltages — AM cancels",
                  "No limiter stage required — the differentiator vs Foster-Seeley",
                  "Slightly lower sensitivity; used in FM receivers",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Pre-emphasis and de-emphasis",
            body: [
              "FM's noise output is not flat: the discriminator's noise power spectrum rises with the square of frequency, so the high end of the audio band arrives buried in hiss — while speech and music put most of their energy at the low end. Pre-emphasis exploits the mismatch: before modulation, a boost circuit lifts frequencies above a corner frequency (f₁ = 1/2πτ with τ = 75 µs gives ≈ 2.12 kHz) at 6 dB/octave. De-emphasis at the receiver applies the inverse — a 6 dB/octave cut above the same corner. The message is restored flat, but the noise, boosted before the channel and cut after it, comes out attenuated.",
              "The transfer functions are one RC network each and Jun 2025 asked to derive them. Pre-emphasis: a resistor in series with a capacitor across the audio path gives H_pre(s) = 1 + sτ (magnitude √(1 + (ωτ)²)); de-emphasis is the dual, H_de(s) = 1/(1 + sτ), and their product is unity — the message passes unchanged. Worked numbers: at 2.12 kHz the boost is √2 (3 dB); at 10 kHz, ωτ = 4.71, the boost is 4.8 (≈ 13.7 dB) and the de-emphasis cuts noise there by the same 13.7 dB. Net SNR improvement over the audio band is typically several dB — roughly 5 dB for speech programming.",
              "The exam angle: Jun 2025 is the only direct setting so far ('explain the phenomenon… derive transfer functions for both'), but the topic is a listed lab experiment (pre-emphasis and de-emphasis) and a standard short-note candidate. The full-mark answer: the noise-spectrum mismatch, both transfer functions with the 75 µs corner, the ωτ table at two or three frequencies, and the sentence 'the product of the two transfer functions is unity, so the message is restored while the noise is suppressed'.",
            ],
            keyTerms: [
              { term: "Pre-emphasis", definition: "Boosting audio above ≈ 2.12 kHz (τ = 75 µs) before FM modulation — H(s) = 1 + sτ." },
              { term: "De-emphasis", definition: "The inverse cut after demodulation — H(s) = 1/(1 + sτ); product with pre-emphasis is unity." },
              { term: "Parabolic noise spectrum", definition: "FM discriminator noise power rises as ω² — the reason high-frequency hiss dominates." },
              { term: "75 µs time constant", definition: "The broadcast pre/de-emphasis corner constant; corner frequency 1/2πτ ≈ 2.12 kHz." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Boost, transmit, cut",
              caption: "The message rides the round trip unchanged; the noise, boosted then cut, loses.",
              stages: [
                { label: "Audio in", note: "energy concentrated below 2.1 kHz" },
                { label: "Pre-emphasis", note: "+6 dB/octave above 2.12 kHz" },
                { label: "FM channel", note: "parabolic noise joins the signal" },
                { label: "De-emphasis", note: "−6 dB/octave — message restored, noise cut" },
                { label: "Audio out", note: "flat signal, attenuated hiss" },
              ],
            },
            bullets: [
              "Why: FM noise power rises as ω²; message energy falls — the top of the band drowns first.",
              "Pre-emphasis H(s) = 1 + sτ; corner f = 1/2πτ ≈ 2.12 kHz at τ = 75 µs.",
              "De-emphasis H(s) = 1/(1 + sτ); H_pre × H_de = 1 — message unaffected.",
              "Numbers: +3 dB at 2.12 kHz, ≈ +13.7 dB boost/cut at 10 kHz.",
              "Net gain: several dB of audio SNR (≈ 5 dB typical for speech).",
              "Both networks are single-RC — draw them; Jun 2025 asked for the derivation.",
            ],
            codeExample: {
              language: "python",
              caption: "emphasis.py — the 75 µs corner in numbers",
              code: `import numpy as np

tau = 75e-6                                  # broadcast time constant
f = np.array([500, 1000, 2122, 5000, 10000], dtype=float)
w = 2 * np.pi * f
pre = np.sqrt(1 + (w * tau) ** 2)            # |H_pre|  = sqrt(1 + (w tau)^2)
de  = 1 / pre                                # |H_de|   = 1/|H_pre|
print(np.round(pre, 2))   # [1.03 1.11 1.41 2.56 4.82] -> +3 dB at the corner
print(np.round(de, 2))    # [0.97 0.9  0.71 0.39 0.21] -> -13.7 dB at 10 kHz`,
            },
            callout: {
              type: "tip",
              title: "Unity product is the punchline",
              body: "After deriving both transfer functions, write 'H_pre(ω)·H_de(ω) = 1, so the message is restored exactly while the channel noise — which passes through the channel but not through the complementary pair — is cut at high frequencies.' The unity-product sentence is what turns a network description into an explanation.",
            },
            examQuestions: [
              {
                q: "Explain the phenomenon of pre-emphasis and de-emphasis in FM systems. Derive transfer functions for both.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "FM noise PSD rises as ω² — high audio frequencies suffer most",
                  "Pre-emphasis: series R + shunt C -> H(s) = 1 + sτ",
                  "Corner: f = 1/2πτ ≈ 2.12 kHz for τ = 75 µs; +6 dB/octave above",
                  "De-emphasis: H(s) = 1/(1 + sτ) after demodulation",
                  "Product = 1: message flat, high-frequency noise suppressed",
                  "Net SNR gain of several dB across the audio band",
                ],
              },
              {
                q: "Write a short note on pre-emphasis and de-emphasis, including the 75 µs time constant and the SNR improvement mechanism.",
                marks: 7,
                outline: [
                  "Noise mismatch: discriminator noise ∝ ω²; speech energy low-frequency",
                  "Boost above 2.12 kHz before modulation (75 µs)",
                  "Cut above 2.12 kHz after demodulation",
                  "Message restored; noise attenuated by the boost factor",
                  "Typical gain ≈ 5 dB for speech programming",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Introduction to pulse modulation systems",
            body: [
              "Pulse modulation leaves continuous-wave modulation behind: the message is sampled first, and the sample values travel as parameters of pulses. PAM (pulse amplitude modulation) encodes each sample as a pulse height — the simplest, but it inherits AM's weakness, because amplitude noise corrupts the sample directly. PWM/PDM (pulse width/duration modulation) encodes each sample as a pulse's width with the amplitude fixed; PPM (pulse position modulation) encodes it as a pulse's time shift within a slot with both amplitude and width fixed — moving the information into the time axis, where amplitude noise cannot reach it.",
              "Worked numbers frame the family. For a 4 kHz voice sampled at 8 kHz, PAM pulses arrive every 125 µs; within a PWM frame of 10 µs, widths sweep from 1 µs to 9 µs proportionally to the sample; PPM shifts each narrow pulse ±4 µs about its nominal slot position. The bandwidth price climbs down the list: PAM needs the least, PWM more (pulses get short), PPM most — the time-domain echo of the bandwidth-for-noise trade that wideband FM made in frequency. Unit IV develops PAM and TDM properly and hands PWM/PPM their own sections.",
              "The exam angle: Jun 2023 asked to 'explain various pulse modulation techniques such as PAM, PWM and PPM with suitable waveforms' and Jun 2022 asked to 'draw and explain PPM, PAM and PWM schemes' — the same waveform trio twice. Draw one message, then three pulse trains beside it: heights varying (PAM), widths varying (PWM), positions varying (PPM), and annotate which parameter carries the sample in each.",
            ],
            keyTerms: [
              { term: "PAM", definition: "Pulse amplitude modulation — sample value becomes pulse height; simplest, amplitude-noise-sensitive." },
              { term: "PWM (PDM)", definition: "Pulse width/duration modulation — sample value becomes pulse width; amplitude fixed." },
              { term: "PPM", definition: "Pulse position modulation — sample value becomes a time shift; most noise-immune analog pulse scheme." },
              { term: "Sampling instant", definition: "The instant at which the message is measured; pulse parameter is proportional to that value." },
            ],
            diagram: {
              kind: "flow",
              title: "From wave to pulses",
              caption: "Sample, then let the sample set one pulse parameter — height, width, or position.",
              steps: [
                { label: "Message m(t)", note: "continuous waveform" },
                { label: "Sampler", note: "measure at fs = 2fm or faster" },
                { label: "Pulse modulator", note: "assign height / width / position" },
                { label: "Pulse train out", note: "PAM | PWM | PPM" },
                { label: "Channel + demod", note: "recover the sample values" },
              ],
            },
            bullets: [
              "PAM: sample -> pulse height; needs least bandwidth; amplitude noise corrupts it.",
              "PWM: sample -> pulse width; amplitude fixed, information in duration.",
              "PPM: sample -> pulse position within a slot; most immune to amplitude noise.",
              "Numbers: 4 kHz voice at 8 kHz -> 125 µs PAM interval; PWM widths 1–9 µs in a 10 µs frame.",
              "Bandwidth climbs as noise immunity improves: PAM < PWM < PPM.",
              "PPM is PWM differentiated — one circuit step converts between them.",
            ],
            table: {
              caption: "The analog pulse family.",
              headers: ["Scheme", "Parameter varied", "Noise immunity", "Bandwidth need"],
              rows: [
                ["PAM", "pulse amplitude", "low (amplitude noise)", "lowest"],
                ["PWM/PDM", "pulse width", "medium", "medium–high"],
                ["PPM", "pulse position", "high (info in time axis)", "highest"],
              ],
            },
            callout: {
              type: "exam",
              title: "The waveform trio, twice",
              body: "Jun 2022 ('draw and explain PPM, PAM and PWM schemes') and Jun 2023 ('explain PAM, PWM and PPM with suitable waveforms') are the same drawing exercise. Practise one message with three pulse trains beneath it, each annotated with the parameter carrying the sample — the annotation is the mark.",
            },
            examQuestions: [
              {
                q: "Explain various pulse modulation techniques such as PAM, PWM and PPM with suitable waveforms.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "PAM: pulse height ∝ sample; sketch heights tracking m(t)",
                  "PWM: pulse width ∝ sample; sketch wide/narrow pulses at fixed amplitude",
                  "PPM: pulse position ∝ sample; sketch shifted narrow pulses in slots",
                  "Annotate which parameter carries each sample",
                  "Noise-immunity and bandwidth ranking across the three",
                ],
              },
              {
                q: "Compare PAM, PWM and PPM on noise immunity and bandwidth, and state how PPM is derived from PWM.",
                marks: 7,
                outline: [
                  "PAM: information in amplitude — amplitude noise hits directly",
                  "PWM: information in duration — regeneration possible at fixed amplitude",
                  "PPM: information in position — amplitude/width noise irrelevant",
                  "Bandwidth grows PAM -> PWM -> PPM",
                  "PPM from PWM: differentiate PWM and trigger a monostable on the edges",
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
      title: "Sampling and Pulse Code Modulation",
      summary:
        "Unit IV turns waves into numbers: the sampling theorem for low-pass and band-pass signals with aliasing and the three sampling styles, PAM and time-division multiplexing with their channel bandwidth, PWM and PPM, quantization and its error, the complete PCM system with SQNR, data rate and companding, and the bandwidth-saving descendants DPCM, DM and adaptive DM.",
      chapter: {
        number: "04",
        title: "From Samples to Bits: PAM, TDM and PCM",
        intro:
          "Unit IV covers sampling of low-pass and band-pass signals and the sampling theorem, instantaneous/natural/flat-top sampling with the aperture effect, PAM and TDM with channel bandwidth, PPM and PWM, quantization and quantization error, PCM with signal-to-noise ratio and companding, data rate and baud rate, multiplexed PCM, and DPCM, delta modulation and adaptive delta modulation with their comparison.",
        inOneBreath:
          "A signal band-limited to fm is recoverable from samples taken at fs ≥ 2fm — under-sample and spectral replicas overlap as aliasing (a 5 kHz tone sampled at 8 kHz reappears at 3 kHz). PAM sends sample heights; TDM interleaves N channels' samples into one frame (BW ≥ N·fm); flat-top sampling's sinc roll-off is the aperture effect. PCM = sample, quantize (error ≤ Δ/2), encode; full-scale sine SQNR = 6.02n + 1.76 dB, bit rate = fs·n per channel, companding evens out the error. DPCM codes the predicted difference; DM is one-bit DPCM with granular noise and slope overload — adaptive DM adjusts Δ and fixes both.",
        sections: [
          {
            number: "4.1",
            title: "The sampling theorem, Nyquist rate and aliasing",
            body: [
              "The sampling theorem is the licence for all of digital communication: a signal band-limited to fm is completely determined by, and recoverable from, samples taken at a rate fs ≥ 2fm — the Nyquist rate. The proof is spectral: sampling multiplies x(t) by a unit-impulse train, and multiplication in time convolves in frequency, so X(ω) replicates at every multiple of ωs. If ωs > 2ωm the replicas stand apart and an ideal low-pass filter of gain T·ωs/2 (interpolation) recovers x(t) exactly; if ωs < 2ωm the replicas overlap and no filter can undo the damage — that overlap is aliasing.",
              "The worked number that recurs in papers: a 5 kHz tone sampled at 8 kHz — the replica centred at 8 kHz folds the tone down to |8 − 5| = 3 kHz, and the digitized 'signal' is a 3 kHz tone that was never transmitted. Undersampling creates phantom frequencies, not noise; Nov 2023 asked for exactly the Nyquist criterion and the conditions to avoid aliasing (band-limit the input with an anti-aliasing filter, then sample above twice that limit), and Jun 2025's theorem statement came with 'discuss the consequences of undersampling (aliasing)'. Sampling at exactly 2fm is legal on paper but impractical — the reconstruction filter would need infinite roll-off, so practice leaves a guard band and samples well above the rate.",
              "The exam angle: 'state and prove the sampling theorem' is a standing question — Dec 2024, Jun 2025 and Jun 2026 all opened with it; Nov 2023 set the Nyquist criterion and aliasing conditions. The full-mark proof has four moves: write the sampled signal as x(τ)·Σδ(t − nT), FT it to get the replica sum, impose ωs ≥ 2ωm for non-overlap, and describe the LPF reconstruction. Then the aliasing example with folded frequency |fs − fm|.",
            ],
            keyTerms: [
              { term: "Nyquist rate", definition: "The minimum sampling rate 2fm for a signal band-limited to fm." },
              { term: "Aliasing", definition: "Overlapping of spectral replicas when fs < 2fm — high frequencies masquerade as low ones, irrecoverably." },
              { term: "Anti-aliasing filter", definition: "A low-pass filter band-limiting the input to fm before sampling." },
              { term: "Spectral replication", definition: "Sampling convolves the spectrum with an impulse comb — X(ω) repeats at every multiple of ωs." },
            ],
            diagram: {
              kind: "fork",
              title: "Sampling rate verdict",
              caption: "One comparison — fs against 2fm — decides everything.",
              start: "Sample the signal",
              branches: [
                { label: "fs > 2fm", outcome: "replicas separated by a guard band — LPF recovers x(t) exactly", good: true },
                { label: "fs = 2fm", outcome: "replicas touch — legal but needs an ideal filter; add margin in practice", good: true },
                { label: "fs < 2fm", outcome: "replicas overlap — aliasing; a 5 kHz tone at fs = 8 kHz returns as 3 kHz", good: false },
              ],
            },
            bullets: [
              "Statement: band-limited to fm -> recoverable from fs ≥ 2fm samples.",
              "Proof skeleton: impulse-train multiplication -> frequency convolution -> replicas at n·ωs.",
              "Aliasing when replicas overlap: sampled 5 kHz tone at 8 kHz appears at 3 kHz.",
              "Defences: anti-alias LPF before sampling; sample above the Nyquist rate with a guard band.",
              "fs = 2fm exactly needs an ideal reconstruction filter — never practical.",
              "Proof asked in Dec 2024, Jun 2025 and Jun 2026; Nyquist/aliasing in Nov 2023.",
            ],
            table: {
              caption: "Sampling-rate cases and their outcomes.",
              headers: ["fm", "fs", "Visible output", "Recoverable?"],
              rows: [
                ["5 kHz", "12 kHz (> 2fm)", "true 5 kHz tone", "yes — guard band present"],
                ["5 kHz", "10 kHz (= 2fm)", "true 5 kHz tone", "only with ideal LPF"],
                ["5 kHz", "8 kHz (< 2fm)", "aliased 3 kHz tone", "no — replicas overlap"],
                ["3.4 kHz (speech)", "8 kHz (telephony)", "true 3.4 kHz", "yes — 1.2 kHz guard band"],
              ],
            },
            callout: {
              type: "exam",
              title: "State-and-prove: three straight sessions",
              body: "The sampling theorem was set in Dec 2024, Jun 2025 and Jun 2026, with the Nyquist criterion and aliasing added in Nov 2023. Rehearse the four-move proof (multiply by impulse train, FT, non-overlap condition, LPF recovery) plus the folded-frequency example — it is Unit IV's most bankable answer.",
            },
            examQuestions: [
              {
                q: "State and prove the sampling theorem.",
                marks: 7,
                appearances: ["Dec 2024", "Jun 2025", "Jun 2026"],
                outline: [
                  "Statement: x(t) band-limited to fm is determined by samples at fs ≥ 2fm",
                  "Sampled signal: xs(t) = x(t)·Σδ(t − nTs)",
                  "FT: Xs(ω) = (1/Ts)ΣX(ω − nωs) — replicas at multiples of ωs",
                  "Non-overlap condition: ωs ≥ 2ωm",
                  "Reconstruction: ideal LPF of gain Ts recovers x(t)",
                  "Alias consequence if the condition fails",
                ],
              },
              {
                q: "Explain the Nyquist criterion in sampling and the condition required to avoid aliasing in sampled signals.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Criterion: fs ≥ 2fm for a signal band-limited to fm",
                  "Spectral replicas at n·fs must not overlap",
                  "Anti-aliasing filter: band-limit input before the sampler",
                  "Guard band: sample above 2fm so real filters suffice",
                  "Folded-frequency example: 5 kHz tone at fs = 8 kHz -> 3 kHz phantom",
                ],
              },
              {
                q: "State and prove the sampling theorem for low-pass signals and discuss the consequences of undersampling (aliasing).",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Statement for low-pass signals with the proof sketch",
                  "Replica picture with and without overlap",
                  "Aliasing = irreversible spectral folding",
                  "Worked fold: |fs − fm| gives the phantom frequency",
                  "Practical defences: anti-alias filter + margin above 2fm",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Band-pass sampling and the three sampling styles",
            body: [
              "Band-pass signals do not always need 2·fH. A signal occupying fL to fH (bandwidth B = fH − fL) can be recovered from samples at fs = 2·fH/k for suitable integer k (with k = floor(fH/B) and no spectral overlap), because the replicas can interleave between the bands instead of needing clear headroom above fH. Worked example: a 3–4 MHz band-pass signal (B = 1 MHz) with k = 4 needs fs = 2·4/4 = 2 MHz — a quarter of the naive 8 MHz — which is why software radios undersample high IF bands deliberately. The theory mirrors the low-pass theorem, and Jun 2023 asked to differentiate the two statements side by side.",
              "The sampler itself comes in three styles. Instantaneous (ideal) sampling multiplies the signal by a zero-width impulse train — the mathematical model whose spectrum is the pure replica sum. Natural sampling holds each pulse's top proportional to the signal during a finite-width aperture — the spectrum keeps the sinc envelope but the samples carry full information. Flat-top sampling uses a sample-and-hold: the sample value is captured and held for the pulse width, so each pulse is a rectangle — and the rectangle's transform, sinc(πfτ), multiplies the whole spectrum, rolling off the high end. That attenuation is the aperture effect: high-frequency message components shrink as τ grows, and an equalizer with a 1/sinc(f) response restores them.",
              "The exam angle: Jun 2026 asked the low-pass theorem plus 'distinguish between natural and flat top sampling'; Jun 2023 asked low-pass versus band-pass; the aperture effect is syllabus text no paper has named yet — making it the ideal warning-callout topic. The full-mark contrast: natural sampling's tops follow the waveform (amplitude modulation of the pulse train), flat-top's tops are held constant (PAM with sinc weighting), and only flat-top needs aperture correction.",
            ],
            keyTerms: [
              { term: "Band-pass sampling", definition: "Sampling a band-pass signal at fs = 2fH/k — well below 2fH — by letting replicas interleave." },
              { term: "Instantaneous sampling", definition: "Ideal impulse-train sampling of zero width — the mathematical model." },
              { term: "Natural sampling", definition: "Pulse tops follow the signal during the aperture; spectrum keeps full information under a sinc envelope." },
              { term: "Flat-top sampling", definition: "Sample-and-hold rectangles; sinc(πfτ) weighting attenuates high frequencies — the aperture effect." },
              { term: "Aperture effect", definition: "The sinc roll-off flat-top sampling imposes on the message spectrum, correctable with a 1/sinc equalizer." },
            ],
            diagram: {
              kind: "compare",
              title: "Natural vs flat-top sampling",
              caption: "Whether the pulse top follows the waveform or holds still decides the spectrum's fate.",
              left: {
                heading: "Natural sampling",
                items: [
                  "Pulse top tracks m(t) across the aperture",
                  "Pulse-train AM — spectrum keeps full information",
                  "Sinc envelope from finite pulse width, mild",
                  "Hardware: gated sampler",
                ],
              },
              right: {
                heading: "Flat-top sampling",
                items: [
                  "Sample-and-hold — top held at the sampled value",
                  "sinc(πfτ) multiplies the whole message spectrum",
                  "Aperture effect: highs attenuate as τ grows",
                  "Corrected by a 1/sinc equalizer before demodulation",
                ],
              },
            },
            bullets: [
              "Low-pass: fs ≥ 2fm. Band-pass: fs = 2fH/k with k = floor(fH/B).",
              "Worked: 3–4 MHz band, B = 1 MHz, k = 4 -> fs = 2 MHz (vs naive 8 MHz).",
              "Instantaneous sampling = ideal impulses; natural = tops follow; flat-top = sample-and-hold.",
              "Flat-top multiplies the spectrum by sinc(πfτ) — the aperture effect.",
              "Equalizer with 1/sinc(f) response restores the highs; keep τ short to limit the damage.",
              "Contrast asked Jun 2023 (low vs band-pass) and Jun 2026 (natural vs flat-top).",
            ],
            table: {
              caption: "Three sampling styles.",
              headers: ["Style", "Pulse shape", "Spectrum effect", "Hardware"],
              rows: [
                ["Instantaneous", "impulse of area x(nT)", "pure replicas", "mathematical model"],
                ["Natural", "tops follow m(t)", "mild sinc envelope", "gated switch"],
                ["Flat-top", "held rectangle of x(nT)", "sinc(πfτ) roll-off — aperture effect", "sample-and-hold + equalizer"],
              ],
            },
            callout: {
              type: "warning",
              title: "The aperture effect is the unnamed hazard",
              body: "No paper has yet asked for the aperture effect by name, which makes it a prime examiner's surprise: flat-top sampling's sinc(πfτ) weighting attenuates the message's high frequencies proportionally to hold-time τ. If a question offers 'flat-top sampling and its drawbacks', answer 'aperture effect, corrected by a 1/sinc equalizer' — it is on the syllabus and distinct from aliasing.",
            },
            examQuestions: [
              {
                q: "Differentiate the sampling theorems used for low-pass and band-pass signals.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Low-pass: fs ≥ 2fm — replicas need headroom above fH",
                  "Band-pass: fs = 2fH/k, k = floor(fH/B) — replicas interleave",
                  "Worked: 3–4 MHz band -> fs = 2 MHz, not 8 MHz",
                  "Both require band-limiting and non-overlapping replicas",
                  "Band-pass undersampling is the software-radio trick",
                ],
              },
              {
                q: "State the sampling theorem for low-pass signals. Distinguish between natural and flat-top sampling.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "Theorem statement with Nyquist rate",
                  "Natural: tops follow m(t); spectrum = message under a mild sinc envelope",
                  "Flat-top: sample-and-hold; sinc(πfτ) multiplies the message spectrum",
                  "Aperture effect: high-frequency attenuation, 1/sinc equalizer correction",
                  "Practical receivers use flat-top for easy A/D interfacing",
                ],
              },
              {
                q: "A band-pass signal occupies 3–4 MHz. Show that it can be sampled at 2 MHz without aliasing, and explain the choice of k.",
                marks: 7,
                outline: [
                  "B = 1 MHz; fH = 4 MHz; k = floor(fH/B) = 4",
                  "fs = 2fH/k = 8/4 = 2 MHz",
                  "Replicas at 2, 4, 6 MHz interleave with the 3–4 MHz band without overlap",
                  "Compare with the naive 8 MHz low-pass requirement",
                  "Constraint: band edges must not straddle a replica",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "PAM and time-division multiplexing",
            body: [
              "Pulse amplitude modulation transmits each sample as the height of a pulse in a train of period Ts = 1/fs — the analog bridge between continuous waves and full digital systems. Because the pulses are short and gaps sit between them, the idle time of one channel can carry others: time-division multiplexing interleaves N channels' PAM samples into one repeating frame, using a commutator (a rotating or electronic switch) at the transmitter and a synchronized decommutator at the receiver. Each frame carries one sample per channel plus a synchronizing marker; guard times between slots keep adjacent channels from bleeding into each other.",
              "The numbers run cleanly. Four 4 kHz voice channels sampled at 8 kHz produce a frame period of 125 µs and slot width 125/4 = 31.25 µs. The minimum channel bandwidth follows from Nyquist applied to the multiplexed pulse train: B ≥ N·fs/2 = N·fm for ideal raised-cosine-shaped pulses — so the four-channel system needs B ≥ 16 kHz, and practical rectangular pulses demand more. TDM's weakness is synchronization: if the decommutator drifts, channel 1's samples land in channel 2's slots — hence the frame sync pulse and guard times, and hence applications from telephony carrier systems to digital telephone exchanges (T1's 24-channel PCM frames descend directly from this PAM-TDM picture).",
              "The exam angle: Jun 2023 asked for TDM with block diagrams and applications; Dec 2024 offered TDM as a short note. The answer skeleton: commutator → multiplexed PAM frame → channel → decommutator → per-channel LPFs; the 125 µs/31.25 µs arithmetic; B ≥ N·fm; and two applications (telephony, telemetry). Draw the frame as four labelled slots — the drawing is the diagram mark.",
            ],
            keyTerms: [
              { term: "PAM", definition: "Sample values carried as pulse heights in a train of period 1/fs." },
              { term: "TDM", definition: "Interleaving N channels' samples into one frame via a commutator/decommutator pair." },
              { term: "Frame", definition: "One complete rotation of slots — one sample from every channel, plus sync." },
              { term: "Guard time", definition: "Dead time between slots preventing inter-channel bleed from timing error." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A four-channel PAM-TDM link",
              caption: "Slots rotate; each channel always reads its own position.",
              stages: [
                { label: "Channels 1–4", note: "4 kHz voice each, LPF'd to band-limit" },
                { label: "Commutator", note: "samples each channel once per frame" },
                { label: "TDM frame", note: "125 µs — four 31.25 µs slots + sync" },
                { label: "Channel", note: "BW ≥ N·fm = 16 kHz" },
                { label: "Decommutator", note: "synchronized slot routing" },
                { label: "Per-channel LPFs", note: "smooth each channel's samples" },
              ],
            },
            bullets: [
              "PAM: sample heights at fs ≥ 2fm; 4 kHz voice -> 8 kHz -> 125 µs spacing.",
              "TDM frame: N slots + sync marker; 4 channels -> 31.25 µs slots in 125 µs.",
              "Channel bandwidth: B ≥ N·fs/2 = N·fm — 16 kHz for the four-channel example.",
              "Guard times between slots absorb commutator timing error.",
              "Weakness: synchronization — a drifted decommutator swaps channels' samples.",
              "Applications: telephony carrier systems, telemetry, ancestor of T1 PCM frames.",
            ],
            table: {
              caption: "One 125 µs frame, four voice channels.",
              headers: ["Slot", "Content", "Interval (µs)", "Role"],
              rows: [
                ["Sync", "frame marker", "0 – 6.25", "decommutator alignment"],
                ["1", "channel 1 PAM sample", "6.25 – 37.5", "voice 1"],
                ["2", "channel 2 PAM sample", "37.5 – 68.75", "voice 2"],
                ["3–4", "channels 3–4 samples", "68.75 – 125", "voice 3, 4"],
              ],
            },
            callout: {
              type: "tip",
              title: "B ≥ N·fm is the derived line",
              body: "Most answers quote the frame arithmetic and stop. The bandwidth line — the minimum channel bandwidth for a PAM-TDM signal is N·fs/2 = N·fm (Nyquist on the interleaved pulse train) — is the syllabus's 'channel bandwidth for PAM-TDM signal' item, and it converts a description into an engineering answer.",
            },
            examQuestions: [
              {
                q: "Explain time division multiplexing with suitable block diagrams and state its applications.",
                marks: 7,
                appearances: ["Jun 2023", "Dec 2024"],
                outline: [
                  "Transmitter: N channels -> commutator -> PAM-TDM frame",
                  "Frame: N slots + sync; 4 × 8 kHz -> 125 µs frame, 31.25 µs slots",
                  "Receiver: synchronized decommutator -> per-channel LPFs",
                  "Bandwidth: B ≥ N·fs/2 = N·fm",
                  "Applications: telephony carrier systems, telemetry, digital exchanges",
                  "Weakness: strict synchronization between commutator and decommutator",
                ],
              },
              {
                q: "A PAM-TDM system multiplexes four 4 kHz voice channels. Determine the frame period, slot width and minimum channel bandwidth.",
                marks: 7,
                outline: [
                  "fs = 2 × 4 kHz = 8 kHz per channel",
                  "Frame period = 1/fs = 125 µs",
                  "Slot width = 125/4 = 31.25 µs (ignoring sync overhead)",
                  "Minimum BW = N·fs/2 = 16 kHz",
                  "Practical pulses need more — quote the ideal value as the floor",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "PWM and PPM — width and position keying",
            body: [
              "PWM (pulse duration modulation) holds every pulse's amplitude constant and encodes the sample in its width: within a frame of period T, the pulse stretches from a minimum near 0 toward the full frame in proportion to the sample value. PPM (pulse position modulation) compresses further: every pulse is narrow and fixed-width, and the sample moves the pulse's position ±Δ within its slot. Both move the information out of the amplitude axis, which is where channel noise lives — a fading or attenuating channel corrupts PAM's heights but cannot change when a pulse occurs, only whether it is detected at all.",
              "The conversion chain is the exam's favourite detail: PWM is generated by comparing the message with a sawtooth (or ramp) synchronized to the frame clock — the crossing instant sets each width; PPM follows by differentiating PWM and triggering a monostable on each edge, producing constant-width pulses displaced by the sample. Worked numbers: in a 10 µs frame, PWM widths sweep 1–9 µs linearly with the sample; PPM then shifts a 1 µs pulse ±4 µs about the slot centre. The bandwidth bill: PPM's narrow pulses need the widest channel of the analog pulse family, the price of its noise immunity.",
              "The exam angle: Jun 2022's 'draw and explain PPM, PAM and PWM schemes' covers this section and section 3.7 together — the waveform trio drawn once, annotated twice. No paper has yet asked for the PWM→PPM conversion circuit, which makes it a strong examiner-style candidate; the differentiator-plus-monostable line and the noise-immunity ranking (PAM < PWM < PPM) are the two points that lift the answer.",
            ],
            keyTerms: [
              { term: "PWM (PDM)", definition: "Fixed-amplitude pulses whose width is proportional to the sample value." },
              { term: "PPM", definition: "Fixed-width pulses displaced within the slot in proportion to the sample value." },
              { term: "Sawtooth comparison", definition: "PWM generation: the crossing of message and frame ramp sets each pulse width." },
              { term: "Differentiator + monostable", definition: "PWM→PPM conversion: edges trigger fixed-width pulses at shifted positions." },
            ],
            diagram: {
              kind: "compare",
              title: "PWM vs PPM",
              caption: "Same sample, two carriers of information — duration or position.",
              left: {
                heading: "PWM (width keying)",
                items: [
                  "Width sweeps with the sample (1–9 µs in a 10 µs frame)",
                  "Amplitude constant — height noise harmless",
                  "Power varies with width (wide pulses burn more)",
                  "Generated by message-vs-ramp comparison",
                ],
              },
              right: {
                heading: "PPM (position keying)",
                items: [
                  "Fixed narrow pulse shifted ±Δ by the sample",
                  "Constant amplitude and width — power constant",
                  "Most noise-immune analog pulse scheme",
                  "From PWM: differentiate + monostable on edges",
                ],
              },
            },
            bullets: [
              "PWM: width ∝ sample; constant amplitude; power varies with width.",
              "PPM: position ∝ sample; constant width and power; best noise immunity of the trio.",
              "PWM generator: message compared against a frame-synchronized ramp.",
              "PPM generator: differentiate PWM, trigger a monostable per edge.",
              "Worked: 10 µs frame, PWM 1–9 µs, PPM shifts ±4 µs about centre.",
              "Bandwidth ranking unchanged: PAM < PWM < PPM.",
            ],
            codeExample: {
              language: "python",
              caption: "pwm_ppm.py — width and position from one message",
              code: `import numpy as np

fs = 100e3; T = 1/fs
t = np.arange(0, 5 * T, 1/fs)
frame = (t * fs) % 1.0                      # ramp 0 -> 1 every frame
msg  = 0.5 + 0.4 * np.sin(2 * np.pi * 50 * t)   # message in [0.1, 0.9]

pwm = (msg > frame).astype(int)             # width carries the sample
edges = np.flatnonzero(np.diff(pwm) == 1)   # rising edges
ppm_times = edges / fs                      # positions carry the sample
print("PWM widths (samples):", np.diff(np.flatnonzero(np.diff(pwm) != 1))[:5])
print("PPM positions (s):", ppm_times[:5])`,
            },
            callout: {
              type: "tip",
              title: "Position beats width on power",
              body: "A subtle comparison line examiners reward: PWM's average transmitted power varies with the signal (wide pulses deliver more energy), while PPM's is constant — one more reason PPM is preferred in power-sensitive links. It also explains why PPM needs the widest bandwidth: its pulses are the shortest.",
            },
            examQuestions: [
              {
                q: "Draw and explain PPM, PAM and PWM schemes.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "One message m(t), three pulse trains beneath it",
                  "PAM: heights track the sample",
                  "PWM: widths track the sample, amplitude fixed",
                  "PPM: positions shift with the sample, width fixed",
                  "Annotate the information-carrying parameter in each",
                  "Rank noise immunity and bandwidth: PAM < PWM < PPM",
                ],
              },
              {
                q: "Explain the generation of PWM and its conversion to PPM, with the noise-immunity argument for position keying.",
                marks: 7,
                outline: [
                  "PWM: compare message with frame ramp; crossing sets width",
                  "Conversion: differentiate PWM, monostable per edge -> fixed-width displaced pulses",
                  "Worked: 10 µs frame, widths 1–9 µs, PPM shift ±4 µs",
                  "Noise: position information survives amplitude/width corruption",
                  "Cost: narrowest pulses -> widest channel of the analog family",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Quantization and the PCM system",
            body: [
              "Pulse code modulation completes the digitization: the PAM samples are quantized — mapped to the nearest of L = 2ⁿ permitted levels — and each level is encoded as an n-bit word. The quantizer divides the full range into steps of size Δ = Vpp/L (mid-tread convention for bipolar signals); the quantization error e = sample − quantized value is bounded |e| ≤ Δ/2 for in-range samples, and behaves like additive noise of rms value Δ/√12. Quantization error is the deliberate, controlled distortion bought in exchange for regeneration — unlike overload error, which occurs when the signal exceeds the quantizer's range and clips without bound.",
              "The numbers are standard and the papers use them: an 8-bit quantizer spans 256 levels, so a full-scale sine of amplitude A riding a quantizer with step Δ has signal-to-quantization-noise power ratio 6A²/Δ² — expressed for a full-scale sinusoid as SQNR(dB) = 6.02n + 1.76: 49.9 dB at 8 bits, 43.9 dB at 7 bits, 6.02 dB per added bit. The complete system chain: anti-alias LPF → sampler → quantizer → parallel-to-serial encoder → regenerative repeaters on the channel → decoder → reconstruction LPF; Jun 2025 asked for exactly this block diagram with the quantization-error definition, and Nov 2023 asked for PCM and the quantization process itself.",
              "The exam angle: two sessions set the PCM definition/block diagram (Nov 2023, Jun 2025), and the numericals that go with it live in section 4.6. The distinction worth a mark: quantization error is bounded (≤ Δ/2) and predictable; overload error is unbounded clipping — state both, then note that companding (section 4.6) redistributes Δ so weak passages of speech get finer steps.",
            ],
            keyTerms: [
              { term: "Quantization", definition: "Mapping each sample to the nearest of L = 2ⁿ permitted levels." },
              { term: "Quantization error", definition: "Sample minus quantized value; |e| ≤ Δ/2, rms Δ/√12 — bounded and controlled." },
              { term: "Step size Δ", definition: "Vpp/L — the quantizer's resolution; smaller Δ means finer levels and less error." },
              { term: "PCM encoder", definition: "Converts each quantized level to an n-bit word and serializes the bits." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The PCM chain",
              caption: "Sample, quantize, encode — then the channel regenerates instead of amplifying.",
              stages: [
                { label: "Anti-alias LPF", note: "band-limit to fm" },
                { label: "Sampler", note: "fs ≥ 2fm (8 kHz speech)" },
                { label: "Quantizer", note: "L = 2ⁿ levels; error ≤ Δ/2" },
                { label: "Encoder", note: "n-bit word per sample, serialized" },
                { label: "Regenerative channel", note: "repeaters rebuild clean bits" },
                { label: "Decoder + LPF", note: "levels -> pulses -> smooth waveform" },
              ],
            },
            bullets: [
              "PCM = sampler + quantizer + encoder; L = 2ⁿ levels, step Δ = Vpp/L.",
              "Quantization error |e| ≤ Δ/2; rms value Δ/√12.",
              "SQNR (full-scale sine): 6.02n + 1.76 dB — 49.9 dB at 8 bits, +6.02 dB per bit.",
              "Overload error is different: out-of-range clipping, unbounded — keep A within range.",
              "Block diagram: LPF -> sampler -> quantizer -> encoder -> regenerative channel -> decoder -> LPF.",
              "Companding (next section) shrinks Δ for weak signals to even out the error.",
            ],
            table: {
              caption: "Bits vs quantizer performance (4 V peak-to-peak, bipolar).",
              headers: ["Bits n", "Levels L", "Step Δ (mV)", "SQNR (dB)"],
              rows: [
                ["4", "16", "250", "25.8"],
                ["6", "64", "62.5", "37.9"],
                ["8", "256", "15.6", "49.9"],
                ["12", "4096", "0.98", "74.0"],
              ],
            },
            callout: {
              type: "warning",
              title: "Two errors, one name",
              body: "Papers ask for 'quantization error' and expect the bounded Δ/2 value — but a full-marks answer distinguishes it from overload error, which clips unboundedly when the signal exceeds the quantizer range. Write both: 'quantization error ≤ Δ/2 for in-range samples; exceeding the range causes overload distortion instead.'",
            },
            examQuestions: [
              {
                q: "Define Pulse Code Modulation and discuss the quantization process and quantization error.",
                marks: 7,
                appearances: ["Nov 2023", "Jun 2025"],
                outline: [
                  "PCM: sample -> quantize -> encode into n-bit words",
                  "Quantization: map to nearest of L = 2ⁿ levels, step Δ = Vpp/L",
                  "Error bounded |e| ≤ Δ/2; rms = Δ/√12",
                  "SQNR = 6.02n + 1.76 dB for a full-scale sine",
                  "Contrast with unbounded overload error",
                ],
              },
              {
                q: "Explain the working of a PCM system with block diagram. What is quantization error and how is it reduced?",
                marks: 7,
                outline: [
                  "Chain: LPF -> sampler -> quantizer -> encoder -> channel -> decoder -> LPF",
                  "Regeneration: repeaters rebuild clean bits — the PCM advantage",
                  "Quantization error ≤ Δ/2, rms Δ/√12",
                  "Reduce by: more bits (each bit: +6.02 dB) or smaller Δ via companding",
                  "Trade: more bits -> higher bit rate fs·n",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "PCM numbers — SQNR, bit rate, companding and multiplexed PCM",
            body: [
              "Three formulas run every PCM numerical. Bit rate: Rb = fs·n bits per second for one channel (fs·n·N for N multiplexed channels). Signal-to-quantization-noise ratio for a full-scale sine: SQNR = 6.02n + 1.76 dB; for a signal of arbitrary amplitude A on a quantizer of step Δ, the power ratio is 6A²/Δ². Dynamic range demanded by the link fixes n: DR = 6.02n + 1.76, so n = (DR − 1.76)/6.02, rounded up. Companding then refines the design: before quantizing, a logarithmic compressor (µ-law with µ = 255 in North America, A-law in Europe) squeezes large amplitudes and expands small ones, so weak speech passages get finer steps and the SQNR evens out across the level range; the expander at the receiver inverts it.",
              "The three-paper numerical set, solved: Nov 2023 — step 0.1 V, signal amplitude 2 V: rms quantization noise = Δ/√12 = 28.9 mV, SQNR = 6A²/Δ² = 6·4/0.01 = 2400 = 33.8 dB. Dec 2024 — maximum analog input 4 kHz, decoded range ±2.55 V, dynamic range 46 dB: minimum sampling rate 8 kHz; n = (46 − 1.76)/6.02 = 7.35 → 8 bits; resolution Δ = 5.1/255 = 0.02 V; quantization error 0.01 V. Jun 2026 — 3.4 kHz signal sampled at 8 kHz with 8 bits: bit rate = 8 k × 8 = 64 kbps and SQNR = 6.02·8 + 1.76 = 49.9 dB. One template absorbs all three: Nyquist first, bits from the dynamic range, then resolution and error from the levels.",
              "The exam angle: the PCM numerical appeared in Nov 2023, Dec 2024 and Jun 2026 — three of the six papers. Data rate vs baud rate deserves its line here too: bit rate counts bits per second; baud counts symbols per second (they coincide for binary, and Rb = baud·log2 M generally — the bridge to Unit V). Multiplexed PCM closes the section: T1 frames 24 channels × 8 bits + 1 framing bit = 193 bits per 125 µs frame → 1.544 Mbps, the PAM-TDM frame of section 4.3 with quantized, encoded slots.",
            ],
            keyTerms: [
              { term: "Bit rate Rb", definition: "fs·n per channel (fs·n·N multiplexed) — bits per second." },
              { term: "SQNR formula", definition: "6.02n + 1.76 dB for a full-scale sine; 6A²/Δ² as a power ratio for amplitude A." },
              { term: "Companding", definition: "Compress–expand: logarithmic compression before quantization evens the SQNR across levels (µ-law, A-law)." },
              { term: "Baud rate", definition: "Symbols per second; Rb = baud × log2 M — equal to bit rate only for binary." },
            ],
            diagram: {
              kind: "flow",
              title: "Solving any PCM numerical",
              caption: "Three formulas in a fixed order — Nyquist, bits, resolution.",
              steps: [
                { label: "Read the given pair", note: "fm & fs, or DR & Vmax, or Δ & A" },
                { label: "Sampling", note: "fs ≥ 2fm — quote the guard band" },
                { label: "Bits", note: "n = (DR − 1.76)/6.02, round up" },
                { label: "Resolution & error", note: "Δ = Vpp/(2ⁿ − 1); error ≤ Δ/2" },
                { label: "Rate & SQNR", note: "Rb = fs·n; SQNR = 6.02n + 1.76 dB" },
              ],
            },
            bullets: [
              "Rb = fs·n per channel; N channels multiply — T1: 24 × 8 + 1 = 193 bits/125 µs = 1.544 Mbps.",
              "SQNR (full-scale sine) = 6.02n + 1.76 dB; +6.02 dB per added bit.",
              "Nov 2023: Δ = 0.1 V, A = 2 V -> rms noise 28.9 mV, SQNR = 2400 = 33.8 dB.",
              "Dec 2024: 4 kHz, ±2.55 V, 46 dB -> fs = 8 kHz, n = 8, Δ = 0.02 V, error 0.01 V.",
              "Jun 2026: 3.4 kHz at 8 kHz, 8 bits -> 64 kbps, SQNR = 49.9 dB.",
              "Companding (µ = 255 µ-law / A-law) redistributes Δ to protect weak passages.",
            ],
            codeExample: {
              language: "python",
              caption: "pcm_numbers.py — the three paper numericals",
              code: `import math

def sqnr_db(n_bits):                       # full-scale sine
    return 6.02 * n_bits + 1.76

# Jun 2026: 3.4 kHz band-limited, sampled 8 kHz, 8 bits
print(8e3 * 8, sqnr_db(8))                 # 64000.0, 49.92 dB

# Dec 2024: DR = 46 dB, decoded range +/-2.55 V
n = math.ceil((46 - 1.76) / 6.02)          # 8 bits
print(n, 5.1 / (2**n - 1), 5.1 / (2**n - 1) / 2)   # 8, 0.02 V, 0.01 V

# Nov 2023: step 0.1 V, amplitude 2 V
A, d = 2.0, 0.1
sq = 6 * A**2 / d**2
print(sq, round(10 * math.log10(sq), 1))   # 2400.0, 33.8 dB`,
            },
            callout: {
              type: "exam",
              title: "A numerical in half the papers",
              body: "PCM numericals appeared in Nov 2023, Dec 2024 and Jun 2026 with three different givens (Δ & A; fm, Vmax & DR; fm, fs & n). Memorize the trio Rb = fs·n, SQNR = 6.02n + 1.76 dB, n = (DR − 1.76)/6.02 and the resolution Δ = Vpp/(2ⁿ − 1) — every phrasing folds into them.",
            },
            examQuestions: [
              {
                q: "A PCM system operates with a quantization step of 0.1 V. If the signal being quantized has a maximum amplitude of 2 V, calculate the quantization error and determine the signal-to-quantization-noise ratio.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Peak quantization error = Δ/2 = 0.05 V; rms = Δ/√12 = 28.9 mV",
                  "Signal-to-quantization-noise power = 6A²/Δ² = 6 × 4/0.01 = 2400",
                  "SQNR = 10·log(2400) ≈ 33.8 dB",
                  "Equivalent full-scale-bit framing: fewer than 8 bits in use",
                  "Note the amplitude is not full-scale — the 6.02n + 1.76 form does not apply directly",
                ],
              },
              {
                q: "For a PCM system with maximum analog input 4 kHz, maximum decoded voltage ±2.55 V and minimum dynamic range 46 dB, determine the minimum sampling rate, minimum number of bits, resolution and quantization error.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Sampling: fs ≥ 2 × 4 kHz = 8 kHz",
                  "Bits: n = (46 − 1.76)/6.02 = 7.35 -> 8 bits",
                  "Resolution: Δ = 5.1 V/(2⁸ − 1) = 0.02 V",
                  "Quantization error: Δ/2 = 0.01 V",
                  "Bit rate: 8 kHz × 8 = 64 kbps",
                ],
              },
              {
                q: "In a PCM system a signal band-limited to 3.4 kHz is sampled at 8 kHz and encoded with 8 bits per sample. Determine the bit rate and the signal-to-quantization-noise ratio in dB.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "fs = 8 kHz ≥ 2 × 3.4 kHz — Nyquist satisfied",
                  "Bit rate = fs·n = 8 k × 8 = 64 kbps",
                  "SQNR = 6.02 × 8 + 1.76 = 49.92 dB",
                  "Telephony-style guard band: 8 kHz vs 6.8 kHz minimum",
                  "Comment: this is the standard PCM speech channel of digital telephony",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "DPCM, Delta Modulation and Adaptive Delta Modulation",
            body: [
              "PCM wastes bits on redundancy: consecutive speech samples barely differ. Differential PCM exploits that — the transmitter predicts each sample from previous ones and quantizes only the prediction error e(n) = x(n) − x̂(n), whose range is far smaller, so fewer bits per sample carry the same quality; the receiver runs the same predictor on the reconstructed values. Delta modulation is DPCM pushed to the limit: one bit per sample, outputting only the sign of the difference, so the staircase output moves up or down a fixed step Δ every sample period and tracks the waveform's slope.",
              "DM's one-bit economy creates two signature errors, and naming them precisely is the exam's core demand. Granular noise: when the signal varies slowly, the staircase hunts back and forth around it — the fixed Δ is too coarse for small changes. Slope overload: when the signal rises faster than the staircase's maximum slope Δ·fs, the output falls behind and flattens; for a tone the bound is A·2πfm ≤ Δ·fs. Worked numbers: Δ = 100 mV at fs = 32 kHz tracks slopes up to 3200 V/s, so a 3 kHz sine stays tracked only below amplitude Δ·fs/(2πfm) ≈ 0.17 V. Adaptive DM resolves the dilemma: consecutive like bits enlarge the step, alternating bits shrink it — Δ grows exactly when the slope demands.",
              "The exam angle: DM-and-ADM is Unit IV's most repeated block — Jun 2022 ('explain Delta Modulation and Adaptive Delta Modulation in detail'), Nov 2023 (ADM principles and its advantage over conventional DM), Dec 2024 (ADM block diagram and waveform, advantages over DM) and Jun 2025 (DM and ADM with merits and demerits). The template: two error names with the slope bound Δ·fs, the ADM adaptation rule, and the comparison table across PCM, DPCM, DM, ADM.",
            ],
            keyTerms: [
              { term: "DPCM", definition: "Quantizes the prediction error x(n) − x̂(n) instead of the sample — fewer bits for correlated sources." },
              { term: "Delta modulation", definition: "One-bit DPCM: the staircase moves ±Δ each sample to track the waveform's slope." },
              { term: "Granular noise", definition: "Staircase hunting around a slowly varying signal — Δ too coarse relative to small changes." },
              { term: "Slope overload", definition: "Signal slope exceeding the staircase maximum Δ·fs — output falls behind and flattens." },
              { term: "Adaptive DM", definition: "Step Δ grows on consecutive like bits (overload risk) and shrinks on alternation (granularity)." },
            ],
            diagram: {
              kind: "fork",
              title: "The step-size dilemma",
              caption: "One fixed Δ cannot serve both slopes — adaptivity is the resolution.",
              start: "Choose the DM step Δ",
              branches: [
                { label: "Δ too small for steep slopes", outcome: "slope overload — staircase lags the signal", good: false },
                { label: "Δ too large for slow variation", outcome: "granular noise — staircase hunts around the signal", good: false },
                { label: "Adaptive Δ (ADM)", outcome: "grow on like-bit runs, shrink on alternation — both errors suppressed", good: true },
              ],
            },
            bullets: [
              "DPCM: quantize the prediction error; fewer bits for correlated speech samples.",
              "DM: 1 bit/sample; staircase ±Δ tracks slope; max trackable slope = Δ·fs.",
              "Granular noise: slow signal, staircase hunts — Δ too coarse.",
              "Slope overload: fast signal outruns Δ·fs — Δ too small; tone bound A ≤ Δ·fs/(2πfm).",
              "ADM: enlarge Δ on runs of identical bits, shrink on alternation — fixes both.",
              "Papers: Jun 2022, Nov 2023, Dec 2024 and Jun 2025 all set DM/ADM — the unit's hottest topic.",
            ],
            table: {
              caption: "The differential family compared.",
              headers: ["System", "Bits/sample", "Error type", "Complexity"],
              rows: [
                ["PCM", "n (typically 8)", "granular ≤ Δ/2, bounded", "full quantizer"],
                ["DPCM", "n − 1 or fewer", "bounded prediction error", "predictor at both ends"],
                ["DM", "1", "granular + slope overload", "integrator + comparator"],
                ["ADM", "1", "both suppressed by adaptive Δ", "DM + step logic"],
              ],
            },
            callout: {
              type: "exam",
              title: "Four sessions on DM and ADM",
              body: "Jun 2022, Nov 2023, Dec 2024 and Jun 2025 all set delta modulation — always with the advantage question attached. The two sentences that carry the marks: 'slope overload occurs when the signal slope exceeds Δ·fs' and 'ADM enlarges Δ on consecutive identical bits and shrinks it on alternation, suppressing both granular noise and slope overload.'",
            },
            examQuestions: [
              {
                q: "Explain Delta Modulation and Adaptive Delta Modulation in detail.",
                marks: 7,
                appearances: ["Jun 2022", "Jun 2025"],
                outline: [
                  "DM: comparator + 1-bit quantizer + integrator; staircase tracks m(t)",
                  "Max slope tracked = Δ·fs; tone bound A ≤ Δ·fs/(2πfm)",
                  "Granular noise (Δ coarse) and slope overload (Δ small) — the trade",
                  "ADM: step grows on runs of like bits, shrinks on alternation",
                  "Merits/demerits: 1-bit simplicity vs the two error mechanisms",
                ],
              },
              {
                q: "Describe the principles of Adaptive Delta Modulation and discuss its advantages over conventional delta modulation.",
                marks: 7,
                appearances: ["Nov 2023", "Dec 2024"],
                outline: [
                  "ADM block diagram: DM plus step-size logic on the output bit stream",
                  "Rule: consecutive identical bits -> enlarge Δ; alternating bits -> shrink Δ",
                  "Suppresses slope overload on steep segments",
                  "Suppresses granular noise on flat segments",
                  "Better dynamic range at the same bit rate",
                  "Sketch the staircase tracking a steep then a flat waveform",
                ],
              },
              {
                q: "Compare PCM, DPCM, DM and ADM on bits per sample, error mechanisms and complexity.",
                marks: 7,
                outline: [
                  "PCM: 8 bits, bounded error ≤ Δ/2, no prediction",
                  "DPCM: fewer bits via prediction error; needs identical predictors at both ends",
                  "DM: 1 bit; granular + slope overload from the fixed step",
                  "ADM: 1 bit with adaptive step — both errors managed",
                  "Bit-rate ordering: PCM > DPCM > DM/ADM for similar quality on speech",
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
      title: "Digital Modulation Techniques",
      summary:
        "Unit V keys bits onto the carrier: ASK and its coherent/non-coherent detection, BFSK with orthogonality and bandwidth, BPSK with its equation and coherent receiver, DPSK that removes the carrier-recovery burden, QPSK/OQPSK and M-ary PSK constellations, QAM's amplitude-phase hybrid, and the bandwidth-efficiency and Shannon-capacity limits that rank every scheme.",
      chapter: {
        number: "05",
        title: "Keying Bits onto a Carrier",
        intro:
          "Unit V covers the generation, detection, equations and bandwidth of ASK, BPSK, DPSK, offset and non-offset QPSK, M-ary PSK, BFSK, M-ary FSK and QAM, closing with bandwidth efficiency and the Shannon-Hartley capacity bound.",
        inOneBreath:
          "Binary schemes move one bit per symbol: ASK keys amplitude (BW ≈ 2Rb, weakest noise immunity), BFSK keys between two tones (orthogonal separation ≥ Rb/2), BPSK keys phase 0/π (BW = 2Rb, best binary BER, needs coherent recovery), DPSK encodes transitions so the receiver compares consecutive symbols — no carrier loop. QPSK packs two bits per symbol into four phases (BW = Rb) with OQPSK's half-symbol delay removing 180° jumps; M-ary PSK trades distance for bits; QAM stacks amplitude and phase (16-QAM = 4 bits/symbol, baud = Rb/4). Channel capacity is capped by Shannon-Hartley C = B·log₂(1 + S/N).",
        sections: [
          {
            number: "5.1",
            title: "Amplitude shift keying (ASK)",
            body: [
              "Amplitude shift keying encodes bits in the carrier's amplitude: s(t) = A·b(t)·cos ωc t, where b(t) is the baseband bit stream — and when the off state is truly zero the scheme is on-off keying (OOK). Generation is a product modulator or a keyed oscillator; the spectrum is the baseband sinc spectrum translated to fc, giving a main-lobe (null-to-null) bandwidth of about 2Rb. Detection runs two routes: coherent (multiply by a synchronized carrier, integrate over the symbol, threshold) or non-coherent (envelope detector plus threshold — simple, because the information is already in the amplitude).",
              "The worked details are thresholds and waveforms. For equal-probability OOK with peak amplitude A in noise of variance σ², the optimal threshold sits near A/2 (exactly at A/2 + σ²/4A), and every dB of amplitude fade moves the decision point dangerously — the root of ASK's worst-in-class error performance. Drawing the data 1011 (Jun 2026's request): bursts of carrier for each 1, silence for each 0, symbol length Ts = 1/Rb. At Rb = 10 kbps that is 100 µs per burst and a 20 kHz main lobe — the numbers a bandwidth comparison leans on.",
              "The exam angle: Jun 2022 asked for the operations of non-coherent and coherent ASK modulators/detectors; Jun 2026 asked for the ASK/BPSK/BFSK waveform trio on data 1011; the bandwidth comparison lands in section 5.7. The full-mark answer pairs the two detection block diagrams with the threshold discussion and one line on why OOK is simple but fragile — amplitude fades hit it directly.",
            ],
            keyTerms: [
              { term: "ASK/OOK", definition: "Carrier amplitude keyed between two levels; OOK switches fully off for 0." },
              { term: "Coherent detection", definition: "Multiply by a synchronized carrier, integrate, threshold — best error performance, needs carrier recovery." },
              { term: "Non-coherent detection", definition: "Envelope detection plus threshold — simple hardware, slightly worse BER." },
              { term: "Decision threshold", definition: "Near A/2 for OOK; fades shift the level and cause errors." },
            ],
            diagram: {
              kind: "fork",
              title: "Detecting the keyed amplitude",
              caption: "Two receivers, one fragile threshold.",
              start: "Received OOK burst",
              branches: [
                { label: "Coherent: multiply + integrate + threshold", outcome: "best BER; needs synchronized local carrier", good: true },
                { label: "Envelope detector + threshold", outcome: "simple, no sync; threshold near A/2", good: true },
                { label: "Fixed threshold without AGC", outcome: "fades move A — decisions flip; errors spike", good: false },
              ],
            },
            bullets: [
              "s(t) = A·b(t)cos ωc t; OOK: carrier present for 1, absent for 0.",
              "Main-lobe bandwidth ≈ 2Rb — 20 kHz for Rb = 10 kbps.",
              "Coherent route: product demodulator + integrator + threshold (Jun 2022).",
              "Non-coherent route: envelope detector + threshold — cheap, robust hardware.",
              "Threshold near A/2; amplitude fade shifts it — OOK's fragility.",
              "Waveforms for 1011: 100 µs bursts (Rb = 10 kbps) separated by silence.",
            ],
            table: {
              caption: "OOK parameters at a glance.",
              headers: ["Parameter", "Value", "Note"],
              rows: [
                ["Symbol carries", "1 bit", "binary"],
                ["Bandwidth (main lobe)", "≈ 2Rb", "sinc side lobes beyond"],
                ["Detection", "coherent or envelope", "envelope is the cheap one"],
                ["Threshold", "≈ A/2", "fades break it"],
                ["Noise immunity", "worst of the binary family", "info sits on the amplitude axis"],
              ],
            },
            callout: {
              type: "tip",
              title: "Why OOK survives anyway",
              body: "OOK is the worst binary scheme on noise, yet it dominates optical fibre and cheap RFID — because on those channels the amplitude axis is quiet and hardware cost rules. Quote that context line when comparing schemes: 'worst BER, cheapest transmitter, and still the right choice where amplitude noise is absent.'",
            },
            examQuestions: [
              {
                q: "Draw and explain the operations of non-coherent and coherent ASK modulators.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "Generation: bit stream × carrier (product modulator) or keyed oscillator",
                  "Coherent receiver: multiplier with synchronized carrier -> integrator -> threshold",
                  "Non-coherent receiver: band-pass -> envelope detector -> threshold",
                  "Threshold ≈ A/2 for OOK; fade sensitivity",
                  "Block diagrams for both routes",
                ],
              },
              {
                q: "Draw the waveforms of ASK, BPSK and BFSK for the data 1011.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "Time axis divided into four symbol slots",
                  "ASK: carrier burst for 1, gap for 0",
                  "BPSK: continuous carrier, 180° phase flip per bit",
                  "BFSK: f1 tone for 0, f2 tone for 1",
                  "Label Ts and the phase reversals precisely",
                ],
              },
              {
                q: "Compare binary ASK and OOK on bandwidth, detection hardware and noise immunity, with one application each.",
                marks: 7,
                outline: [
                  "Bandwidth: both ≈ 2Rb main lobe",
                  "ASK (two levels) allows coherent thresholding between levels",
                  "OOK: simplest transmitter; envelope receiver",
                  "Noise immunity: ASK slightly better with balanced levels; OOK worst of the family",
                  "Applications: OOK in optical/RFID; two-level ASK in legacy data links",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Binary frequency shift keying (BFSK)",
            body: [
              "Frequency shift keying encodes bits in the carrier's frequency: s(t) = A cos(2πf₁t) for one bit and A cos(2πf₂t) for the other. Generation switches between two oscillators (or drives a VCO with the bit stream); detection is coherent (two correlators at f₁ and f₂, decide by the larger output) or non-coherent (two band-pass filters + envelope detectors, decide the larger). The constant-amplitude envelope gives FSK its practical virtue: amplitude fades and non-linear amplifiers leave the frequency untouched — the same immunity wideband FM enjoys, bought at binary scale.",
              "The spectral bookkeeping has two standard results. Orthogonality: the two tones are orthogonal over a symbol if their separation satisfies (f₂ − f₁) = k·Rb/2, so the minimum orthogonal spacing is Rb/2 — and Jun 2022's numerical follows directly: tones of 10 kHz and 25 kHz give a minimum bit interval Tb = 1/(2(f₂ − f₁)) = 1/30 kHz ≈ 33.3 µs (a 30 kbps ceiling for that pair). Bandwidth: treating FSK as two ASK spectra centred at f₁ and f₂, the Carson-style main-lobe width is BW = 2(Δf + Rb/2), with Δf = |f₂ − fc| — for the Jun 2022 pair centred at fc = 17.5 kHz, Δf = 7.5 kHz and BW ≈ 2(7.5 + 15) = 45 kHz.",
              "The exam angle: Jun 2022 set both the spectrum-and-bandwidth short note and the bit-interval numerical, and Jun 2026 asked for the BFSK waveform on data 1011 — alternate f₁ and f₂ tones with continuous phase preferred. The full-mark answer names the orthogonality condition, computes the bit interval from the tone pair, and draws two interleaved tone trains labelled f₁/f₂.",
            ],
            keyTerms: [
              { term: "BFSK", definition: "Two carrier tones f₁/f₂ keyed by the bit stream; constant amplitude." },
              { term: "Orthogonality", definition: "(f₂ − f₁) = k·Rb/2 — minimum tone spacing for independent coherent detection." },
              { term: "FSK bandwidth", definition: "BW ≈ 2(Δf + Rb/2) — two translated sinc main lobes side by side." },
              { term: "Non-coherent FSK receiver", definition: "Two band-pass filters + envelope detectors; decide the larger output." },
            ],
            diagram: {
              kind: "flow",
              title: "BFSK end to end",
              caption: "Bits choose the tone; the receiver listens on both and keeps the louder.",
              steps: [
                { label: "Bit stream", note: "1 -> f2, 0 -> f1" },
                { label: "Tone switch / VCO", note: "constant amplitude out" },
                { label: "Channel", note: "fades cannot move the frequency" },
                { label: "Two correlators/BPFs", note: "measure energy at f1 and f2" },
                { label: "Comparator", note: "larger output wins the bit" },
              ],
            },
            bullets: [
              "s(t) = A cos 2πf₁t (0) or A cos 2πf₂t (1); amplitude constant.",
              "Orthogonality: (f₂ − f₁) ≥ Rb/2; Jun 2022 pair 10/25 kHz -> Tb ≥ 33.3 µs.",
              "BW ≈ 2(Δf + Rb/2); Jun 2022 pair: fc = 17.5 kHz, Δf = 7.5 kHz -> 45 kHz.",
              "Coherent detection: two correlators, larger output wins.",
              "Non-coherent detection: two BPFs + envelope detectors — the common cheap receiver.",
              "Immunity: amplitude fades and amplifier non-linearity leave frequency intact.",
            ],
            codeExample: {
              language: "python",
              caption: "bfsk.py — data 1011 on the Jun 2022 tone pair",
              code: `import numpy as np

fs, Rb = 200e3, 30e3                     # the orthogonality-limited rate
bits = [1, 0, 1, 1]                      # the Jun 2026 data pattern
f1, f2 = 10e3, 25e3                      # Jun 2022 tones
tb = int(fs / Rb)

s = np.concatenate([
    np.cos(2 * np.pi * (f2 if b else f1) * np.arange(tb) / fs)
    for b in bits
])

print("min orthogonal bit interval:", 1 / (2 * (f2 - f1)))   # 3.33e-05 s
print("centre fc:", (f1 + f2) / 2, " dev df:", (f2 - f1) / 2) # 17.5k, 7.5k
print("Carson-style BW:", 2 * ((f2 - f1) / 2 + Rb / 2))       # 45000 Hz`,
            },
            callout: {
              type: "exam",
              title: "FSK took two halves of one paper",
              body: "In Jun 2022 FSK owned both halves of Q7 and half of Q8: the 10/25 kHz bit-interval numerical, the PPM/PAM/PWM drawing, and the spectrum-and-bandwidth note. Jun 2026 asked for the 1011 waveforms again. The orthogonality line (separation ≥ Rb/2) is the point that converts a drawing answer into a numerical one.",
            },
            examQuestions: [
              {
                q: "Write short notes on the spectrum and bandwidth of FSK, and explain FSK modulation.",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "FSK = two ASK spectra centred at f1 and f2",
                  "Main-lobe width: 2(Δf + Rb/2) with Δf = |f2 − fc|",
                  "Orthogonality condition: separation ≥ Rb/2",
                  "Generation: two oscillators switched, or VCO driven by bits",
                  "Constant amplitude -> immunity to amplitude fades",
                ],
              },
              {
                q: "In a digital communication system employing FSK, the 0 and 1 bits are represented by sine waves of 10 kHz and 25 kHz. What is the bit interval of these waveforms?",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "Orthogonality: (f2 − f1)·Tb ≥ 1/2",
                  "Tb_min = 1/(2(f2 − f1)) = 1/30 kHz ≈ 33.3 µs",
                  "Corresponding maximum orthogonal bit rate: 30 kbps",
                  "Centre fc = 17.5 kHz, deviation 7.5 kHz -> BW ≈ 45 kHz",
                  "Remark: tighter spacing sacrifices orthogonality and corrupts coherent detection",
                ],
              },
              {
                q: "Generate and detect binary FSK: give the block diagrams for coherent and non-coherent receivers and the bandwidth for Rb = 10 kbps with 5 kHz deviation.",
                marks: 7,
                outline: [
                  "Coherent: two correlators at f1/f2, comparator",
                  "Non-coherent: two BPFs + envelope detectors, comparator",
                  "BW = 2(Δf + Rb/2) = 2(5 + 5) = 20 kHz",
                  "Constant envelope through the channel",
                  "Non-coherent chosen when carrier recovery is impractical",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Binary phase shift keying (BPSK)",
            body: [
              "Binary phase shift keying encodes the bit in the carrier's phase: s(t) = Ac cos(ωc t + π·b) = ±Ac cos ωc t, with bit 0 mapping to 0° and bit 1 to 180° (or the Gray-coded equivalent). Written as a product, s(t) = A·d(t)·cos ωc t where d(t) ∈ {+1, −1} is the bipolar NRZ stream — BPSK is DSB-SC with the message replaced by bits. The constellation is two antipodal points on the I axis separated by 2√Eb, the largest distance two binary symbols can have, which is why BPSK holds the best error probability of all binary schemes: Pe = Q(√(2Eb/N₀)).",
              "Generation and detection are the same product structure. The transmitter multiplies the bipolar NRZ stream by the carrier (a balanced modulator); the coherent receiver multiplies the received signal by a locally recovered carrier, integrates over each symbol period Ts = 1/Rb, and thresholds at zero — no amplitude threshold to fade-break, unlike OOK. The bandwidth is the NRZ sinc spectrum translated to fc: main-lobe (null-to-null) width 2Rb. Worked numbers from Nov 2023: a 1 MHz carrier carrying 100 kbps — the phase shift used is 180°, the symbol rate is 100 kbaud, and the bandwidth is 2 × 100 k = 200 kHz.",
              "The exam angle: Nov 2023 set the technique-derivation-detection question and the numerical; Dec 2024 asked for the BPSK transmitter/receiver with diagrams. The full-mark pattern: the equation with the ± expansion, the two-point constellation, the coherent receiver chain with its integrator, Pe = Q(√(2Eb/N₀)), and the bandwidth line 2Rb — then the honest caveat that the receiver's carrier recovery suffers a 180° phase ambiguity, which section 5.4's DPSK exists to remove.",
            ],
            keyTerms: [
              { term: "BPSK", definition: "s(t) = ±Ac cos ωc t — phase keyed 0/π; two antipodal constellation points." },
              { term: "Coherent BPSK receiver", definition: "Multiply by recovered carrier, integrate over Ts, threshold at zero." },
              { term: "Pe for BPSK", definition: "Q(√(2Eb/N₀)) — the best binary error rate." },
              { term: "Phase ambiguity", definition: "Carrier-recovery loops lock to 0° or 180° arbitrarily — the motive for DPSK." },
            ],
            diagram: {
              kind: "pipeline",
              title: "BPSK transmitter to receiver",
              caption: "The same product structure at both ends — modulation is demodulation run backwards.",
              stages: [
                { label: "Bits -> NRZ", note: "bipolar d(t) ∈ {+1, −1}" },
                { label: "Balanced modulator", note: "d(t) × cos ωct = BPSK" },
                { label: "Channel", note: "noise added; envelope constant" },
                { label: "Coherent multiplier", note: "× recovered cos ωct" },
                { label: "Integrator (Ts)", note: "symbol-energy correlation" },
                { label: "Zero threshold", note: "sign decides the bit" },
              ],
            },
            bullets: [
              "s(t) = Ac cos(ωc t + π·b) = ±Ac cos ωc t — DSB-SC carrying bits.",
              "Constellation: two antipodal points, distance 2√Eb — maximum binary separation.",
              "Pe = Q(√(2Eb/N₀)) — best binary error performance.",
              "Coherent receiver: multiplier + integrate-and-dump + zero threshold.",
              "Bandwidth: 2Rb main lobe; Nov 2023's 100 kbps -> 200 kHz at 1 MHz carrier.",
              "Caveat: carrier recovery has a 180° ambiguity — DPSK removes it.",
            ],
            table: {
              caption: "BPSK mapping and numbers.",
              headers: ["Bit", "Phase", "Symbol value", "Energy"],
              rows: [
                ["0", "0°", "+Ac cos ωc t", "Eb"],
                ["1", "180°", "−Ac cos ωc t", "Eb"],
                ["Symbol rate", "Rb baud", "1 bit/symbol", "—"],
                ["Main-lobe BW", "2Rb", "200 kHz at 100 kbps", "—"],
              ],
            },
            callout: {
              type: "warning",
              title: "The 180° ambiguity is BPSK's bill",
              body: "A Costas or squaring loop can lock to the carrier's negative — every recovered bit then inverts. State it explicitly after the coherent receiver: 'the recovered carrier may be phase-reversed by 180°, so a pilot or differential encoding (DPSK) is needed.' It sets up section 5.4 and is the detail examiners reward.",
            },
            examQuestions: [
              {
                q: "Describe the Binary Phase Shift Keying modulation technique. Derive the equation for BPSK and discuss its bandwidth. Explain coherent detection of BPSK.",
                marks: 7,
                appearances: ["Nov 2023", "Dec 2024"],
                outline: [
                  "s(t) = Ac cos(ωc t + πb) = ±Ac cos ωc t",
                  "Equivalent product form with bipolar NRZ d(t)",
                  "Constellation: two antipodal points, distance 2√Eb",
                  "Bandwidth: 2Rb main lobe",
                  "Coherent detection: multiply, integrate over Ts, zero threshold",
                  "Pe = Q(√(2Eb/N₀)); phase-ambiguity caveat",
                ],
              },
              {
                q: "A BPSK system has a carrier frequency of 1 MHz and a bit rate of 100 kbps. Determine the phase shift used for modulation and calculate the bandwidth required.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Binary PSK uses a 180° phase shift between symbols",
                  "Symbol rate = bit rate = 100 kbaud",
                  "Main-lobe (null-to-null) BW = 2Rb = 200 kHz",
                  "Carrier 1 MHz: sidebands at 900 kHz and 1.1 MHz",
                  "Compare: QPSK at the same bit rate would need only 100 kHz",
                ],
              },
              {
                q: "Explain the working of a BPSK transmitter and receiver with necessary diagrams, including the decision device.",
                marks: 7,
                outline: [
                  "Transmitter: NRZ encoder -> balanced modulator with cos ωct",
                  "Constellation drawing: two antipodal points",
                  "Receiver: carrier-recovery loop -> multiplier -> integrate-and-dump",
                  "Threshold at zero — no amplitude threshold to fade-break",
                  "Pe = Q(√(2Eb/N₀)) and the 180° ambiguity note",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "DPSK — phase keying without a phase reference",
            body: [
              "Differential phase shift keying removes BPSK's carrier-recovery burden by encoding differences. The transmitter encodes each data bit into a phase transition: d_k = b_k ⊕ d_{k−1} (XOR with the previously transmitted differential bit), so a data 1 produces a phase change and a data 0 keeps the phase. The receiver multiplies the current symbol period by the previous one — correlating the signal with its own delayed self — and the sign of that product reads the transition directly: no local oscillator, no Costas loop, no phase ambiguity, because an overall 180° reversal cancels in the difference.",
              "The worked trace makes the encoding tangible. Data 1011 with reference bit 1: differential bits d = [1, 0, 0, 1, 0] → transmitted phases [0°, 180°, 180°, 0°, 180°]. The receiver compares consecutive phases — change means 1, no change means 0 — recovering 1, 0, 1, 1 exactly. The price is noise tolerance: the delayed-symbol correlation uses a noisy previous symbol as its reference, so DPSK sits roughly 1–2 dB below coherent BPSK in Eb/N₀ for the same error rate; Jun 2023's phrasing ('why the DBPSK signal is more reliable') is answered by exactly this robustness — a phase slip or recovered-carrier reversal destroys coherent BPSK's output but leaves DPSK decoding intact.",
              "The exam angle: Jun 2023 asked why DBPSK is more reliable plus how the receiver decodes symbols into bits; Jun 2025 asked the concept, the working and how DPSK differs from BPSK in synchronization. The template: the XOR encoder with a 4-bit trace table, the delayed-symbol multiplier receiver, the 1–2 dB BER penalty, and the synchronization comparison — BPSK needs an exact coherent reference, DPSK needs only symbol-timing alignment.",
            ],
            keyTerms: [
              { term: "DPSK", definition: "Phase-shift keying of differences: data 1 flips the phase, data 0 holds it." },
              { term: "Differential encoder", definition: "d_k = b_k ⊕ d_{k−1} — the XOR chain that converts data to transitions." },
              { term: "Delayed-symbol detection", definition: "Receiver correlates each symbol period with the previous one; sign of the product reads the bit." },
              { term: "BER penalty", definition: "DPSK runs ≈ 1–2 dB below coherent BPSK — the cost of a noisy reference." },
            ],
            diagram: {
              kind: "compare",
              title: "BPSK vs DPSK synchronization",
              caption: "Where the reference comes from decides the receiver's complexity.",
              left: {
                heading: "BPSK (coherent)",
                items: [
                  "Needs a recovered carrier of exact phase",
                  "Carrier-recovery loop with 180° ambiguity",
                  "Best BER: Q(√(2Eb/N₀))",
                  "Ambiguity destroys the output until corrected",
                ],
              },
              right: {
                heading: "DPSK (differential)",
                items: [
                  "Reference = the previous symbol itself",
                  "Delayed-symbol multiplier — no loop, no ambiguity",
                  "BER ≈ 1–2 dB worse than coherent BPSK",
                  "Only symbol timing must hold",
                ],
              },
            },
            bullets: [
              "Encoder: d_k = b_k ⊕ d_{k−1}; phase change = 1, no change = 0.",
              "Trace for 1011: d = [1, 0, 0, 1, 0] -> phases [0°, 180°, 180°, 0°, 180°].",
              "Receiver: multiply by the previous symbol period; sign of product = bit.",
              "No carrier-recovery loop — a 180° reversal cancels in the difference (Jun 2023's 'more reliable').",
              "Cost: ≈ 1–2 dB Eb/N₀ penalty — the noisy previous symbol is the reference.",
              "Jun 2025's contrast: DPSK needs symbol timing; BPSK needs full phase synchronization.",
            ],
            table: {
              caption: "DPSK encode–decode trace for data 1011.",
              headers: ["Step", "Data b -> d", "Transmitted phase", "Decoded bit"],
              rows: [
                ["ref", "— -> 1", "0°", "—"],
                ["k1", "1 -> 0", "180°", "1 (change)"],
                ["k2", "0 -> 0", "180°", "0 (no change)"],
                ["k3", "1 -> 1", "0°", "1 (change)"],
                ["k4", "1 -> 0", "180°", "1 (change)"],
              ],
            },
            callout: {
              type: "tip",
              title: "The reliability sentence",
              body: "Jun 2023 asks 'why is the DBPSK signal more reliable?' — answer with the cancellation line: 'any constant phase error, including a 180° carrier-reversal lock, cancels in the difference between consecutive symbols, so a phase slip that would invert the whole coherent BPSK output leaves DPSK decoding untouched.' Then quote the 1–2 dB price.",
            },
            examQuestions: [
              {
                q: "Explain why the DBPSK signal is more reliable with a suitable example. Also explain the decoding of the incoming symbols into binary bits with a DBPSK receiver.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Encoding: d_k = b_k XOR d_{k-1}; trace for 1011",
                  "Receiver: delayed-symbol correlation; sign of product decodes",
                  "Constant phase errors cancel in the difference — no ambiguity",
                  "Coherent BPSK's 180° lock reversal inverts everything; DPSK survives",
                  "Price: 1–2 dB Eb/N₀ penalty",
                ],
              },
              {
                q: "Describe the concept and working of DPSK. How does it differ from BPSK in terms of synchronization?",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Differential encoder XOR chain with a worked trace",
                  "Transmitted phases carry transitions, not absolute values",
                  "Receiver: multiplier with one-symbol delay + decision device",
                  "BPSK: exact coherent carrier required, ambiguity risk",
                  "DPSK: symbol timing only — synchronization burden drops",
                ],
              },
              {
                q: "Encode the data sequence 1101 with DPSK (reference bit 1) and show the transmitted phases.",
                marks: 7,
                outline: [
                  "Rule: d_k = b_k ⊕ d_{k−1}; start d0 = 1 (phase 0°)",
                  "d1 = 1⊕1 = 0; d2 = 1⊕0 = 1; d3 = 0⊕1 = 1; d4 = 1⊕1 = 0",
                  "Differential stream: 1 0 1 1 0",
                  "Phases (1 -> 0°, 0 -> 180°): 0°, 180°, 0°, 0°, 180°",
                  "Decode by consecutive-phase comparison to recover 1 1 0 1",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "QPSK, offset QPSK and M-ary PSK",
            body: [
              "QPSK packs two bits into each symbol: the bit stream splits into even (I) and odd (Q) halves, each DSB-SC-modulating a carrier in quadrature, and the sum occupies one of four phases — ±45° and ±135°, Gray-mapped 00/01/11/10. The symbol rate is half the bit rate, so the main-lobe bandwidth halves to Rb for the same Rb — double BPSK's spectral efficiency — while the per-bit error rate stays exactly BPSK's, Q(√(2Eb/N₀)), because the I and Q channels are independent BPSK systems. The constellation's four points sit at maximum mutual distance for four symbols, which is why QPSK is the world's default 2-bit scheme.",
              "The offset variant delays the Q stream by half a symbol (Tb). The effect is on transitions: ordinary QPSK can jump 180° in one step when both bits change (00 → 11), and after band-limiting those jumps collapse the envelope through the origin — exactly where a saturated power amplifier distorts and errors breed. OQPSK's delay forbids 180° jumps: only ±90° maximum, the envelope never crosses zero, and the amplified signal stays clean. That is the mechanism behind Jun 2023's question on higher error probability in QPSK and minimum in offset QPSK. M-ary PSK generalizes the alphabet: M phases at 2πk/M carry log2M bits, but adjacent-point distance shrinks as 2√Es·sin(π/M) — moving from QPSK to 8-PSK buys a third bit per symbol at a 20·log(1.414/0.765) ≈ 5.3 dB distance penalty.",
              "The exam angle: Jun 2023 set the QPSK/OQPSK error-probability contrast, Jun 2022 set the data-rate numerical (QPSK, roll-off 0.2, 36 MHz transponder → Rb = 2B/(1 + α) = 60 Mbps), and Jun 2025 offered M-ary PSK as a short note. The template: the constellation matrix, the bits-per-symbol and bandwidth table, the 180°-jump envelope argument, and the distance-based penalty arithmetic.",
            ],
            keyTerms: [
              { term: "QPSK", definition: "Four phases ±45°/±135° carrying 2 bits/symbol; bandwidth Rb, per-bit BER equal to BPSK's." },
              { term: "OQPSK", definition: "Q-stream delayed by Tb — 180° transitions impossible; envelope never crosses zero." },
              { term: "M-ary PSK", definition: "M phases at 2πk/M carrying log2M bits; adjacent distance 2√Es·sin(π/M)." },
              { term: "Roll-off α", definition: "Raised-cosine excess bandwidth: B = Rb(1 + α)/log2M for M-PSK." },
            ],
            diagram: {
              kind: "matrix",
              title: "The QPSK constellation",
              caption: "Four phases, two bits each — Gray coding puts neighbouring points one bit apart.",
              axes: { x: "In-phase carrier (cos)", y: "Quadrature carrier (sin)" },
              quadrants: [
                { label: "45° — bits 01", note: "+I, +Q branch" },
                { label: "135° — bits 00", note: "−I, +Q branch" },
                { label: "315° — bits 11", note: "+I, −Q branch" },
                { label: "225° — bits 10", note: "−I, −Q branch" },
              ],
            },
            bullets: [
              "QPSK: 2 bits/symbol, phases ±45°/±135°, BW = Rb — half of BPSK for the same rate.",
              "Per-bit BER unchanged from BPSK: I and Q are independent binary channels.",
              "OQPSK: delay Q by Tb -> no 180° jumps -> envelope never crosses zero.",
              "Jun 2023's mechanism: 180° jumps through the origin + saturated PA = errors; OQPSK caps jumps at 90°.",
              "M-PSK: log2M bits/symbol; distance 2√Es·sin(π/M); QPSK -> 8-PSK costs ≈ 5.3 dB.",
              "Jun 2022 numerical: Rb = 2B/(1 + α) = 2 × 36/1.2 = 60 Mbps.",
            ],
            table: {
              caption: "The PSK ladder.",
              headers: ["Scheme", "Bits/symbol", "BW (main lobe)", "Relative distance"],
              rows: [
                ["BPSK", "1", "2Rb", "2√Eb — reference"],
                ["QPSK", "2", "Rb", "same per-bit BER as BPSK"],
                ["8-PSK", "3", "2Rb/3", "≈ 5.3 dB penalty"],
                ["16-PSK", "4", "Rb/2", "≈ 10 dB penalty — rarely used"],
              ],
            },
            callout: {
              type: "exam",
              title: "Three sessions on the PSK family",
              body: "Jun 2022 (60 Mbps numerical), Jun 2023 (QPSK vs OQPSK error reasons) and Jun 2025 (M-ary PSK note) cover the family from three angles. The 180°-jump envelope story is the non-obvious point — rehearse 'both bits change -> 180° jump -> envelope through origin -> saturated PA distortion' in one breath.",
            },
            examQuestions: [
              {
                q: "Outline the possible reasons for higher probability of errors in QPSK and the minimum probability of error in offset QPSK.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "QPSK: simultaneous I and Q changes -> 180° phase jumps",
                  "Band-limited 180° jumps collapse the envelope through the origin",
                  "Saturated/nonlinear PAs distort near-zero envelopes -> symbol errors",
                  "OQPSK delays Q by Tb -> jumps capped at ±90°",
                  "Envelope never crosses zero -> cleaner amplification, minimum errors",
                ],
              },
              {
                q: "What is the maximum data rate that can be transmitted using QPSK with a roll-off factor of 0.2 for a 36 MHz transponder?",
                marks: 7,
                appearances: ["Jun 2022"],
                outline: [
                  "QPSK: 2 bits/symbol; raised-cosine BW = Rb(1 + α)/2",
                  "Rb = 2B/(1 + α) = 2 × 36/1.2",
                  "Rb = 60 Mbps",
                  "Cross-check: 30 Mbaud × 2 bits = 60 Mbps",
                  "Remark: with α = 0 the same transponder would carry 72 Mbps",
                ],
              },
              {
                q: "Write a short note on M-ary PSK.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "M phases at 2πk/M carry log2M bits/symbol",
                  "BW efficiency rises: Rb/log2M Hz per bit stream",
                  "Adjacent distance 2√Es·sin(π/M) shrinks -> BER worsens",
                  "QPSK -> 8-PSK ≈ 5.3 dB penalty; 16-PSK ≈ 10 dB",
                  "Practical ceiling: 8-PSK; beyond that QAM wins",
                ],
              },
              {
                q: "Explain QPSK generation with block diagram and constellation, and show that its bandwidth is half of BPSK's for the same bit rate.",
                marks: 7,
                outline: [
                  "Split bits into I (even) and Q (odd) streams",
                  "Two balanced modulators with cos and sin carriers; sum outputs",
                  "Constellation: four points at ±45°, ±135°, Gray-coded",
                  "Symbol rate Rb/2 -> main-lobe BW Rb vs BPSK's 2Rb",
                  "Per-bit BER identical to BPSK",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Quadrature amplitude modulation (QAM)",
            body: [
              "QAM is the amplitude-phase hybrid that PSK alone cannot match: two independent n-level baseband streams modulate two carriers in quadrature, s(t) = I(t)·cos ωc t − Q(t)·sin ωc t, and the constellation becomes a square lattice of M = 2^k points — 16-QAM carries 4 bits/symbol, 64-QAM carries 6, 256-QAM carries 8. Generation is two balanced modulators summed; detection is coherent quadrature demodulation — two multipliers with recovered cos and sin, two thresholds sets. The constellation diagram is the exam's visual currency: each point is one symbol, the number of points M relates to bits by k = log2M, and decision boundaries run midway between points.",
              "The worked numerical from Dec 2024 shows the payoff arithmetic: a 16-QAM modulator with 10 Mbps input at 70 MHz — bits per symbol k = 4, so the baud (symbol) rate is 10/4 = 2.5 Mbaud, and the minimum double-sided Nyquist bandwidth equals the symbol rate, 2.5 MHz (against BPSK's 10 MHz for the same data). The bill is noise margin: halving the distance between constellation points costs SNR, so 64-QAM demands several dB more than 16-QAM, which demands several more than QPSK — the classic throughput-versus-robustness dial that modern Wi-Fi and cable modems turn dynamically.",
              "The exam angle: QAM is Unit V's most-set topic — Jun 2023 (modulation and demodulation with waveforms and block diagrams), Nov 2023 (concept combining amplitude and phase; generation/detection and the bits-vs-constellation-size relation), Dec 2024 (the 16-QAM numerical and a QAM short note) and Jun 2025 (generation/detection with the comparison against QPSK). The template: the I/Q block diagram, the constellation with k = log2M, the baud arithmetic, and the QAM-vs-QPSK sentence — QPSK varies phase only; QAM varies both amplitude and phase to pack more bits per symbol at higher SNR demand.",
            ],
            keyTerms: [
              { term: "QAM", definition: "s(t) = I(t)cos ωc t − Q(t)sin ωc t — independent amplitude levels on quadrature carriers." },
              { term: "Constellation diagram", definition: "The I/Q plane showing M = 2^k symbol points; bits per symbol k = log2M." },
              { term: "Baud rate", definition: "Symbol rate Rb/log2M — 2.5 Mbaud for 10 Mbps on 16-QAM." },
              { term: "Coherent quadrature demodulator", definition: "Two multipliers with recovered cos/sin carriers and per-axis threshold decisions." },
            ],
            diagram: {
              kind: "compare",
              title: "QPSK vs 16-QAM",
              caption: "Same quadrature hardware; QAM adds amplitude levels to the four phases.",
              left: {
                heading: "QPSK",
                items: [
                  "4 points, all on the unit circle",
                  "2 bits/symbol; BW = Rb/2 of BPSK",
                  "Constant envelope — power amplifier friendly",
                  "Best for low-SNR links",
                ],
              },
              right: {
                heading: "16-QAM",
                items: [
                  "16 points on a 4 × 4 lattice — amplitude AND phase vary",
                  "4 bits/symbol; baud = Rb/4",
                  "2.5 MHz for 10 Mbps vs BPSK's 10 MHz",
                  "Needs several dB more SNR; envelope fluctuates",
                ],
              },
            },
            bullets: [
              "s(t) = I(t)cos ωc t − Q(t)sin ωc t; two balanced modulators summed.",
              "Constellation: M = 2^k points; k = log2M bits/symbol (16-QAM -> 4 bits).",
              "Dec 2024 numerical: 10 Mbps, 16-QAM -> 2.5 Mbaud, min double-sided BW 2.5 MHz.",
              "Detection: coherent quadrature demodulation with two threshold sets.",
              "Trade: each doubling of M needs more SNR (points crowd together).",
              "QAM vs QPSK (Jun 2025): QAM varies amplitude + phase; QPSK phase only.",
            ],
            table: {
              caption: "The QAM ladder at 10 Mbps.",
              headers: ["Order", "Bits/symbol", "Baud", "Min double-sided BW"],
              rows: [
                ["16-QAM", "4", "2.5 Mbaud", "2.5 MHz"],
                ["64-QAM", "6", "1.67 Mbaud", "1.67 MHz"],
                ["256-QAM", "8", "1.25 Mbaud", "1.25 MHz"],
                ["QPSK (reference)", "2", "5 Mbaud", "5 MHz"],
              ],
            },
            callout: {
              type: "exam",
              title: "QAM in four consecutive papers",
              body: "Jun 2023 (waveforms + block diagrams), Nov 2023 (concept + constellation/bits relation), Dec 2024 (16-QAM numerical + short note) and Jun 2025 (generation/detection + QPSK comparison) — QAM is the most-set Unit V topic. Rehearse the I/Q block diagram and the k = log2M relation until both are reflexive.",
            },
            examQuestions: [
              {
                q: "Explain QAM modulation and demodulation with the help of suitable waveforms and block diagrams.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "Transmitter: I/Q split -> two balanced modulators (cos, sin) -> sum",
                  "Constellation sketch: square lattice of M = 2^k points",
                  "Receiver: recovered carriers -> two coherent multipliers",
                  "Per-axis threshold decisions -> I and Q bit streams -> parallel-to-serial",
                  "Waveforms: amplitude-and-phase steps on the carrier",
                ],
              },
              {
                q: "Discuss the generation and detection of QAM signals. Explain the constellation diagram and the relationship between the number of bits and constellation size in QAM.",
                marks: 7,
                appearances: ["Nov 2023"],
                outline: [
                  "Generation: two quadrature balanced modulators summed",
                  "Detection: coherent I/Q demodulation with thresholds",
                  "Constellation: M points on the I/Q plane; k = log2M bits/symbol",
                  "Examples: 16 -> 4 bits, 64 -> 6 bits, 256 -> 8 bits",
                  "Distance shrinks as M grows -> higher SNR demand",
                ],
              },
              {
                q: "For a 16-QAM modulator with an input data rate of 10 Mbps and a carrier of 70 MHz, find the minimum double-sided Nyquist frequency and the baud.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "k = log2(16) = 4 bits/symbol",
                  "Baud = Rb/k = 10/4 = 2.5 Mbaud",
                  "Minimum double-sided Nyquist BW = symbol rate = 2.5 MHz",
                  "Sidebands centred at 70 MHz ± 1.25 MHz",
                  "Compare: BPSK would need 10 MHz — QAM's fourfold spectral gain",
                ],
              },
              {
                q: "With block diagrams, explain the generation and detection of QAM. Compare it with QPSK.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Same quadrature generation hardware as QPSK",
                  "QAM adds multiple amplitude levels on I and Q",
                  "Constellation: lattice vs QPSK's circle",
                  "Efficiency: 16-QAM doubles QPSK's bits/symbol",
                  "Cost: higher SNR and envelope fluctuation",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Choosing a scheme — bandwidth efficiency, BER and Shannon capacity",
            body: [
              "The schemes of this unit line up on two axes. Bandwidth efficiency η = Rb/B: OOK and BPSK carry 0.5 bit/s/Hz of main lobe, QPSK 1, 8-PSK 1.5, 16-QAM 2, 256-QAM 4 — each step up the ladder buys bits per hertz at the price of SNR. Error performance at fixed Eb/N₀ runs roughly: BPSK/QPSK best (Q(√(2Eb/N₀))), then DPSK (1–2 dB behind), coherent FSK, non-coherent FSK, and OOK worst — while M-ary schemes need their distance penalties. The generation/recovery methods asked in Jun 2023 (ASK, FSK, PSK) map to these rows: product modulators, tone switching and phase reversing respectively, with coherent or envelope detection on the receive side.",
              "Capacity sets the ceiling none of them can pass. Shannon-Hartley: C = B·log2(1 + S/N) — with B = 3 kHz and SNR = 30 dB (ratio 1000), Jun 2026's numerical gives C = 3000 × log2(1001) ≈ 29.9 kbps; any scheme promising more than C over that channel must either widen B or raise S/N. The companion source-side quantities are information and entropy: the information in a message of probability p is −log2 p bits, and the entropy H = −Σ p·log2 p bounds how much a source can be compressed — the theoretical bookends of every modulation choice above.",
              "The exam angle: Jun 2023 asked to compare bandwidth requirements of binary ASK, FSK and PSK plus their generation/recovery methods; Jun 2026 asked for information, entropy and the Shannon-Hartley numerical. The full-mark comparison is the table below plus one sentence per row on generation; the capacity answer is the formula, the 30 dB → 1000 conversion, and the log2 arithmetic — 3000 × 9.97 ≈ 29.9 kbps — with the closing remark that real schemes must operate below C.",
            ],
            keyTerms: [
              { term: "Bandwidth efficiency η", definition: "Rb/B in bit/s/Hz — 0.5 for BPSK, 1 for QPSK, 2 for 16-QAM, 4 for 256-QAM." },
              { term: "Shannon-Hartley theorem", definition: "C = B·log2(1 + S/N) — the maximum error-free rate a bandwidth-B, SNR-limited channel supports." },
              { term: "Information", definition: "I = −log2 p bits for an event of probability p — rarer messages carry more." },
              { term: "Entropy H", definition: "−Σ p·log2 p — the source's average information per symbol, bounding compression." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Robustness vs efficiency",
              caption: "Climb for bits per hertz; each tier demands more SNR.",
              tiers: [
                { label: "BPSK / QPSK", note: "best BER; 0.5–1 bit/s/Hz" },
                { label: "DPSK / BFSK", note: "no carrier loop; ~1 dB cost" },
                { label: "8-PSK / 16-QAM", note: "1.5–2 bit/s/Hz; several dB more SNR" },
                { label: "256-QAM", note: "4 bit/s/Hz; clean channels only" },
                { label: "OOK / ASK", note: "cheapest; worst BER" },
              ],
            },
            bullets: [
              "η = Rb/B: BPSK 0.5, QPSK 1, 8-PSK 1.5, 16-QAM 2, 256-QAM 4 bit/s/Hz.",
              "BER ladder at fixed Eb/N0: BPSK/QPSK > DPSK > coherent FSK > non-coherent FSK > OOK.",
              "Shannon-Hartley: C = B·log2(1 + S/N); 3 kHz + 30 dB -> ≈ 29.9 kbps (Jun 2026).",
              "Information I = −log2 p; entropy H = −Σ p log2 p bounds compression.",
              "Generation recap: ASK = amplitude keying, FSK = tone switching, PSK = phase reversing (Jun 2023).",
              "Every real scheme must operate below C — quote it as the closing line.",
            ],
            table: {
              caption: "The binary and M-ary comparison.",
              headers: ["Scheme", "Main-lobe BW", "Bit/s/Hz", "Detection"],
              rows: [
                ["OOK/ASK", "≈ 2Rb", "0.5", "envelope or coherent"],
                ["BFSK", "2(Δf + Rb/2)", "≈ 0.5", "envelope pair or coherent pair"],
                ["BPSK", "2Rb", "0.5", "coherent only"],
                ["QPSK", "Rb", "1", "coherent quadrature"],
                ["16-QAM", "Rb/2", "2", "coherent quadrature + thresholds"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "shannon.py — the Jun 2026 capacity numerical",
              code: `import math

def shannon(bandwidth_hz, snr_db):
    snr = 10 ** (snr_db / 10)
    return bandwidth_hz * math.log2(1 + snr)

# Jun 2026: 3 kHz bandwidth, 30 dB SNR
print(round(shannon(3000, 30), 1))    # 29903.4 -> ~29.9 kbps ceiling
print(round(shannon(3000, 10), 1))    # 9965.8  -> 10 dB SNR cuts it to ~10 kbps`,
            },
            callout: {
              type: "exam",
              title: "Two paper angles, one table",
              body: "Jun 2023 wanted the ASK/FSK/PSK bandwidth comparison with generation and recovery; Jun 2026 wanted information, entropy and the Shannon-Hartley calculation. The comparison table answers the first; C = B·log2(1 + S/N) with the 30 dB → 1000 conversion answers the second. Keep both in the same revision pass — they are one section apart in the paper.",
            },
            examQuestions: [
              {
                q: "Compare and contrast the bandwidth requirements of binary ASK, FSK and PSK signals. Also explain the generation and recovery methods of the ASK, FSK and PSK modulated signals.",
                marks: 7,
                appearances: ["Jun 2023"],
                outline: [
                  "ASK/OOK: BW ≈ 2Rb (sinc main lobe)",
                  "FSK: BW = 2(Δf + Rb/2) — widest if separation exceeds Rb/2",
                  "PSK: BW = 2Rb with the best BER",
                  "Generation: amplitude keying / tone switching / phase reversing",
                  "Recovery: envelope (ASK, FSK) vs coherent (PSK mandatory)",
                  "Ranking line: PSK best BER, ASK worst, FSK between",
                ],
              },
              {
                q: "Define information and entropy. Calculate the channel capacity of a channel with 3 kHz bandwidth and SNR of 30 dB using the Shannon-Hartley theorem.",
                marks: 7,
                appearances: ["Jun 2026"],
                outline: [
                  "Information: I = −log2 p bits for probability p",
                  "Entropy: H = −Σ p log2 p — average information per symbol",
                  "Shannon-Hartley: C = B·log2(1 + S/N)",
                  "30 dB -> S/N = 1000; log2(1001) ≈ 9.97",
                  "C = 3000 × 9.97 ≈ 29.9 kbps — the error-free ceiling",
                ],
              },
              {
                q: "Rank the schemes of Unit V by bandwidth efficiency and by noise immunity, justifying each position.",
                marks: 7,
                outline: [
                  "Efficiency: OOK/BPSK 0.5 -> QPSK 1 -> 8-PSK 1.5 -> 16-QAM 2 -> 256-QAM 4",
                  "Immunity: BPSK/QPSK best (largest binary distance)",
                  "DPSK 1–2 dB behind BPSK; FSK next; OOK worst",
                  "M-ary steps trade distance (SNR) for bits",
                  "Shannon ceiling binds every entry",
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
        { topic: "Digital modulation: BPSK, DPSK, QPSK/OQPSK and QAM", weight: "≈ 14 marks", note: "Both halves of one question almost every paper — Jun 2022, Jun 2023, Nov 2023, Dec 2024, Jun 2025 and Jun 2026 all set it." },
        { topic: "AM modulation index and power/efficiency numericals", weight: "≈ 14 marks", note: "Five sessions: Jun 2022 (400 W/75%), Jun 2023 (4 V/1 V), Nov 2023, Dec 2024 (audio numerical) and Jun 2026 (100 V/50%)." },
        { topic: "Signals and systems: standard signals, classifications, FT pairs", weight: "≈ 14 marks", note: "Question 1 in five papers — Jun 2022, Jun 2023, Dec 2024, Jun 2025 and Jun 2026; impulse sifting and FT pairs are the core marks." },
        { topic: "Sampling theorem, Nyquist criterion and aliasing", weight: "≈ 7–14 marks", note: "Nov 2023 (Nyquist/aliasing), then state-and-prove in Dec 2024, Jun 2025 and Jun 2026 — the most bankable proof on the paper." },
        { topic: "FM: definitions, Carson bandwidth, generation, discriminators", weight: "≈ 14 marks", note: "Deviation-ratio numericals in Nov 2023 and Jun 2026; direct/indirect generation in Nov 2023, Dec 2024, Jun 2025; Foster-Seeley/ratio detector in Jun 2023, Dec 2024, Jun 2025." },
        { topic: "Receivers: TRF, superheterodyne, sensitivity/selectivity/fidelity", weight: "≈ 14 marks", note: "Jun 2023, Dec 2024, Jun 2025 and Jun 2026 — the block diagram plus the three figures of merit answers every phrasing." },
        { topic: "Delta, adaptive delta and DPCM", weight: "≈ 7 marks", note: "Four sessions — Jun 2022, Nov 2023, Dec 2024, Jun 2025; the slope-overload vs granular-noise pair is the scored distinction." },
        { topic: "PAM, TDM, PWM and PPM waveforms", weight: "≈ 7 marks", note: "Jun 2022 and Jun 2023 waveform trios, TDM in Jun 2023 and Dec 2024 — quick marks from one practised drawing." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for the six archived papers. Every numerical in this subject is a formula plus substitution — solve each paper numerical on paper twice, once learning and once timed, because the same skeleton returns with new numbers.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — signals, systems and the Fourier lens", tasks: ["Sketch the standard signals and the communication-system block diagram", "Energy/power classifications: rect pulse, sinusoid, u(t)", "System property checks: linearity, time invariance, causality, BIBO", "FT pairs table + time-scaling proof; convolution of a gate with e^(-2t)u(t)"] },
        { week: "Week 2", focus: "Unit II — the AM wave and its power", tasks: ["AM expression, three-line spectrum, m = (Amax − Amin)/(Amax + Amin)", "Solve all three power numericals: 400 W/75%, 4 V/1 V, 100 V/50%", "Square-law and switching modulators with circuits and waveforms", "Envelope detector RC window + diagonal-clipping bound"] },
        { week: "Week 3", focus: "Unit II end + Unit III open", tasks: ["DSB-SC/SSB-SC/VSB-SC comparison table and block diagrams", "TRF vs superheterodyne; image frequency fs + 2·IF; three figures of merit", "FM vs PM expressions; deviation, index, deviation ratio", "Carson's rule on both paper numericals (75/10 and 10/5 kHz)"] },
        { week: "Week 4", focus: "Unit III — generation, detection, pulse modulation", tasks: ["Armstrong chain arithmetic: ±25 Hz × 3000 -> ±75 kHz", "Foster-Seeley vs ratio detector schematics + S-curves", "Pre/de-emphasis transfer functions with the 75 µs corner", "PAM/PWM/PPM waveform trio on one message"] },
        { week: "Week 5", focus: "Unit IV — sampling to PCM", tasks: ["State-and-prove the sampling theorem; alias fold |fs − fm|", "Band-pass sampling example; natural vs flat-top + aperture effect", "PAM-TDM frame arithmetic (125 µs, 31.25 µs, B ≥ N·fm)", "All three PCM numericals; DM errors + ADM adaptation rule"] },
        { week: "Week 6", focus: "Unit V + past papers", tasks: ["ASK/BFSK/BPSK waveforms for 1011; orthogonality numerical", "DPSK XOR trace; QPSK constellation and the 60 Mbps numerical", "16-QAM: 2.5 Mbaud/2.5 MHz; Shannon-Hartley 3 kHz/30 dB", "Two full papers timed (Jun 2025, Jun 2026), any five questions"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the formula before substituting — in every AM, PCM and FM numerical the formula line carries marks even if the arithmetic slips.",
        "AM power numericals in fixed order: Pc = Ac²/2R -> Pt = Pc(1 + m²/2) -> η = m²/(2 + m²); quote sideband frequencies fc ± fm alongside.",
        "Draw spectra with the carrier line taller than the sidebands and every amplitude labelled — unlabelled spectra lose the sketch marks.",
        "For the sampling theorem, run the four-move proof (impulse-train multiply -> FT replicas -> ωs ≥ 2ωm -> LPF recovery) and finish with the alias fold |fs − fm|.",
        "Block-diagram questions: one function line under each block, and route the noise arrow into the channel block.",
        "Detector questions pair the schematic with the S-curve — then the differentiator: Foster-Seeley needs a limiter, the ratio detector rejects AM inherently.",
        "QAM and PSK questions fall to the constellation plus k = log2M arithmetic: bits per symbol, baud = Rb/k, minimum double-sided BW = baud.",
        "Time-box to the paper's structure: eight questions of 7 + 7, attempt any five — about 12 minutes per 7-mark half, leaving 20 minutes to choose and check.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "Morning of the exam, do one pass of artifacts, not chapters: the communication-system chain, the AM three-line spectrum, the superheterodyne pipeline, the Foster-Seeley and ratio detector S-curves, the sampling-replica picture, the PCM chain, the QPSK and 16-QAM constellations. Each drawing unlocks a 7-mark half. Then re-solve the six anchor numericals cold — modulation index (4 V/1 V), power (400 W/75% and 100 V/50%), deviation ratio (75/10 kHz), PCM trio (0.1 V/2 V; 4 kHz/46 dB; 64 kbps/49.9 dB), the FSK bit interval (33.3 µs) and Shannon (29.9 kbps). End by reading the common slips below once, slowly.",
      ],
      bullets: [
        "Writing m = (Amax − Amin)/2 — the denominator is (Amax + Amin); Jun 2023's 4 V/1 V gives 0.6, not 1.5.",
        "Claiming AM efficiency above 33.3% — η = m²/(2 + m²) peaks at one-third; over-modulation rows have no valid η because the detector fails.",
        "Confusing deviation ratio (Δf/fm) with percent modulation (Δf/75 kHz) — Nov 2023 and Dec 2024 probed exactly this pair.",
        "Quoting Carson's rule as 2Δf — the +fm term is where the marks are: 2(Δf + fm).",
        "Sampling at exactly 2fm without the guard-band sentence — the ideal-filter caveat is worth its own line.",
        "PCM resolution with 2ⁿ instead of 2ⁿ − 1 — Dec 2024's ±2.55 V/46 dB answer is Δ = 5.1/255 = 0.02 V.",
        "Applying SQNR = 6.02n + 1.76 dB to a non-full-scale signal — Nov 2023's Δ = 0.1 V/A = 2 V case wants 6A²/Δ² = 2400 = 33.8 dB.",
        "Writing image frequency as fs + IF — it is fs + 2·IF (1.6 MHz with 455 kHz IF has its image at 2.51 MHz).",
        "Swapping the DM error names: granular noise is the staircase hunting on slow signals; slope overload is falling behind when the signal outruns Δ·fs.",
        "QPSK bandwidth written as 2Rb — it is Rb; and 16-QAM baud is Rb/4, not Rb/16 (Dec 2024: 2.5 Mbaud, not 625 kbaud).",
        "Forgetting the '180° phase shift' answer in the BPSK numerical — Nov 2023 asked it explicitly alongside the 200 kHz bandwidth.",
        "Omitting the orthogonality condition in the FSK bit-interval numerical — Tb = 1/(2(f₂ − f₁)) is the derivation, not a lookup.",
      ],
    },
  ],
};
