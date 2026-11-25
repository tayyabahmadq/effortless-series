/**
 * Academics - RGPV ME 5th-semester subject: ME-502 Mechanical Vibration.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries three body paragraphs, five
 * bullets, a diagram (all eight Effortless diagram kinds across the file),
 * key terms, a callout, a table or a Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me502: AcademicSubject = {
  id: "me-502",
  code: "ME-502",
  title: "Mechanical Vibration",
  semester: "V Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to mechanical vibration for RGPV: modelling and damping, free and forced response of SDOF systems, transmissibility, isolation and whirling, multi-DOF modal analysis, and continuous systems from strings to beams, closing with absorbers, balancing and field case studies.",
  description:
    "Five units walk the classical route: Unit I builds models - classification of vibration, damping types, equivalent stiffness and mass, and the energy method; Unit II solves free vibration - natural frequencies by Rayleigh and Dunkerley, the four damping regimes, logarithmic decrement and Coulomb decay; Unit III forces the oscillator - magnification factor, resonance and bandwidth, transmissibility, base excitation, isolator design and shaft whirling; Unit IV scales to multi-DOF - matrix equations, eigenvalues, mode shapes, orthogonality and modal superposition; Unit V goes continuous and practical - strings, bars, shafts and beams, accelerometers and FFT analysis, tuned absorbers and dampers, balancing and case studies. Every section pairs the theory with a worked example, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#a78bfa",
  emoji: "VB",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Fundamentals of Vibration",
      summary:
        "The language and the toolkit: what vibration is and how it is classified, the three damping models, how real hardware collapses into an equivalent spring-mass-damper system, the energy route to natural frequency, and the discipline of writing the equation of motion.",
      chapter: {
        number: "01",
        title: "Fundamentals of Vibration",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the definition and classification of vibration along four axes, the viscous, Coulomb and structural models of damping, the reduction of real machines to equivalent masses, springs and dampers, the energy method that yields natural frequencies without a free-body diagram, and the assembly-line discipline of writing equations of motion in standard form.",
        inOneBreath:
          "Vibration is oscillation about equilibrium powered by the exchange between kinetic and potential energy; classify it by excitation (free or forced), damping, determinism and degrees of freedom; damping models are viscous (force c times velocity), Coulomb (constant mu N opposing motion) and structural (loss per cycle proportional to amplitude squared), all convertible to an equivalent viscous coefficient by matching energy dissipated per cycle; real hardware collapses to an equivalent oscillator through series (1/k = 1/k1 + 1/k2), parallel (k = k1 + k2) and beam formulas (3EI/L^3, 48EI/L^3, 192EI/L^3) with the spring's own mass added as ms/3 and geared inertia reflected by the ratio squared; conservative systems surrender their natural frequency to d/dt(T + V) = 0; and the whole course runs on one equation: m x'' + c x' + k x = F(t).",
        sections: [
          {
            number: "1.1",
            title: "Vibration and its classification: free, forced and everything between",
            body: [
              "A body vibrates when it moves back and forth about an equilibrium position, and the whole subject rests on two ingredients: inertia, because a mass in motion stores kinetic energy, and a restoring element, because a spring (or gravity, or a bent shaft) stores potential energy and pulls the body back. Disturb a mass hanging on a spring, release it, and the exchange between these two energies produces oscillation even with nothing pushing it afterwards. Engineers study these oscillations in engines, vehicles, turbomachinery and buildings with three goals: predict natural frequencies so machines never dwell near them, control amplitudes when they must, and read vibration signatures as diagnostic evidence of hidden faults.",
              "The first classification cut is excitation. Free vibration is what a system does after an initial disturbance with no continuing input - a struck bell, a plucked string, a compressor that trips and coasts down. Forced vibration persists under an external excitation, periodic or not - a machine shaken by its own rotating unbalance, a car on a washboard road. The second cut is damping: the undamped idealisation keeps its energy forever, while every real joint, fluid film and material leaks it each cycle. Third, deterministic inputs can be written as formulas, while random inputs such as road roughness or wind gusts are described statistically. Fourth, linear systems obey superposition for small displacements; large swings, clearances and hardening springs do not.",
              "The final cut counts degrees of freedom: the number of independent coordinates needed to fix the configuration. One coordinate gives the single-degree-of-freedom oscillator of Units I to III; two or more coordinates give the multi-DOF systems of Unit IV; and infinitely many give the strings, bars, shafts and beams of Unit V. The classification is practical, not decorative - it selects the tool. Free and undamped yields the natural frequency, forced and damped yields the magnification factor, resonance and isolation, multi-DOF adds mode shapes and modal analysis, and continuous systems add standing waves and an infinite frequency ladder.",
            ],
            bullets: [
              "Free vibration: motion after an initial disturbance with no continuing external input - the system rings at its own natural frequency.",
              "Forced vibration: sustained response under external excitation, periodic (rotating unbalance) or otherwise (base motion, wind).",
              "Undamped vs damped: idealised systems conserve energy; real joints, fluids and materials leak a little of it every cycle.",
              "Deterministic vs random: formula-written inputs vs statistically described inputs such as road profiles and gusts.",
              "Degrees of freedom: independent coordinates needed; SDOF (Units I-III), MDOF (Unit IV), continuous (Unit V).",
            ],
            table: {
              caption: "Classification of vibration with representative hardware.",
              headers: ["Axis", "Categories", "Deciding question", "Engineering example"],
              rows: [
                ["Excitation", "free | forced", "Does an input persist after t = 0?", "struck bell | engine unbalance"],
                ["Damping", "undamped | damped", "Does energy leak each cycle?", "idealised oscillator | car suspension"],
                ["Nature", "deterministic | random", "Is the input writable as a formula?", "rotor unbalance | road roughness"],
                ["Linearity", "linear | nonlinear", "Does superposition hold?", "small-swing pendulum | clearance rattle"],
                ["Freedom", "SDOF | MDOF | continuous", "How many coordinates?", "mass on springs | car bounce-pitch | wing"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The four regimes every vibration problem falls into",
              caption: "Excitation across, damping down - the same 2x2 that organises the whole syllabus.",
              axes: {
                x: "Excitation: free (left) | forced (right)",
                y: "Damping: undamped (top) | damped (bottom)",
              },
              quadrants: [
                { label: "Free + undamped", note: "pure sinusoid at wn forever - the idealisation of Unit II" },
                { label: "Forced + undamped", note: "unbounded growth at r = 1 - pure resonance" },
                { label: "Free + damped", note: "decaying oscillation - the log-decrement regime of Unit II" },
                { label: "Forced + damped", note: "bounded steady state - the design regime of Unit III" },
              ],
            },
            callout: {
              type: "exam",
              title: "Definitions first, always",
              body: "RGPV papers open with 'define free and forced vibration' or 'classify vibration with examples'. Memorise the four classification axes - excitation, damping, nature of excitation, degrees of freedom - each with one mechanical example, and present them as a labelled table for full marks.",
            },
            keyTerms: [
              { term: "Free vibration", definition: "Motion that continues after an initial disturbance, with no external excitation acting afterwards." },
              { term: "Forced vibration", definition: "Sustained oscillation under a continuing external excitation such as rotating unbalance or base motion." },
              { term: "Degree of freedom", definition: "The number of independent coordinates required to specify a system's configuration completely." },
            ],
            examQuestions: [
              {
                q: "Define mechanical vibration. Classify vibration on the basis of excitation, damping, nature of excitation and degrees of freedom, giving one engineering example of each, and state which unit of the syllabus studies each class.",
                marks: 7,
                outline: [
                  "Define vibration as oscillation about equilibrium due to inertia plus a restoring element.",
                  "Excitation: free (struck bell) vs forced (machine on unbalance).",
                  "Damping: undamped idealisation vs damped reality with energy leakage.",
                  "Nature: deterministic (rotor unbalance) vs random (road roughness, wind).",
                  "Degrees of freedom: SDOF, MDOF, continuous - one example each.",
                  "Map to syllabus: free response in Unit II, forced response in Unit III, MDOF in Unit IV, continuous in Unit V.",
                  "Close with the three engineering goals: avoid resonance, control amplitude, diagnose faults.",
                ],
              },
              {
                q: "Distinguish between free and forced vibration with one example of each.",
                marks: 2,
              },
              {
                q: "Define degree of freedom and state the number of degrees of freedom of (a) a simple pendulum and (b) a motor mounted so that it can bounce and pitch.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Damping: the three models and their equivalents",
            body: [
              "Damping is the mechanism by which vibration energy is drained out of a system, almost always into heat, and ignoring it is the fastest way to predict a resonance that never survives contact with reality. The exam syllabus recognises three classical models. Viscous damping obeys F = c times velocity: the retarding force of a dashpot, an oil film or an air gap, directly proportional to how fast the surfaces separate. Coulomb or dry-friction damping obeys F = mu N: a force of constant magnitude that always opposes the direction of motion, the signature of slideways, bolted joints and dry contacts.",
              "The third model, structural or hysteretic damping, lives inside the material itself. Internal friction dissipates a fixed fraction of the strain energy every cycle, so the energy lost per cycle is proportional to amplitude squared and nearly independent of frequency across the working range - the reason a struck bell rings for seconds but a plastic ruler slapped on a bench dies in a moment. Each model leaves a fingerprint on the free-decay trace: viscous damping gives an exponential envelope, Coulomb damping a straight-line envelope, and hysteretic damping an exponential envelope whose rate does not depend on how often the system cycles.",
              "Analysis, however, almost always runs through the viscous model because it is linear and closed-form. The bridge is equivalent viscous damping: choose c_eq so that it dissipates exactly the same energy per cycle as the real mechanism. Equating pi c_eq w X^2 to the true loss per cycle gives, for Coulomb damping, c_eq = 4 Fd / (pi w X) - amplitude dependent and therefore not truly linear, but serviceable. State the model before writing any mathematics: the examiner checks that the force law matches the words.",
            ],
            bullets: [
              "Viscous damping: retarding force proportional to velocity, F = c x-dot; the model behind every closed-form result in this course.",
              "Coulomb (dry friction) damping: constant magnitude Fd = mu N always opposing the direction of motion.",
              "Structural (hysteretic) damping: internal material friction; energy lost per cycle proportional to X^2, nearly independent of frequency.",
              "Equivalent viscous damping: match energy dissipated per cycle to collapse any mechanism into a workable coefficient c_eq.",
              "Coulomb equivalent: c_eq = 4 Fd / (pi w X) - amplitude dependent, unlike true viscous damping.",
            ],
            table: {
              caption: "The three damping models side by side.",
              headers: ["Model", "Force law", "Energy loss per cycle", "Where it lives", "Decay signature"],
              rows: [
                ["Viscous", "F = c x-dot", "pi c w X^2", "oil films, dashpots, air", "exponential envelope"],
                ["Coulomb", "Fd = mu N opposing motion", "4 Fd X", "dry slideways, bolted joints", "straight line + dead zone"],
                ["Structural", "loss proportional to X^2", "pi eta k X^2", "metal and composite internals", "exponential, frequency-free"],
                ["Equivalent viscous", "F = c_eq x-dot", "pi c_eq w X^2 (matched)", "analysis of mixed mechanisms", "inherits the mechanism"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The two exam-classic damping models",
              caption: "Viscous force follows speed; Coulomb force only follows direction - their decay envelopes disagree.",
              left: {
                heading: "Viscous model",
                items: [
                  "Force proportional to velocity: F = c x-dot",
                  "Dissipation grows with frequency: E = pi c w X^2",
                  "Free decay: exponential envelope",
                  "Home ground: lubricated films, dashpots",
                ],
              },
              right: {
                heading: "Coulomb model",
                items: [
                  "Constant magnitude Fd = mu N opposing motion",
                  "Dissipation free of frequency: E = 4 Fd X",
                  "Free decay: straight-line envelope, then stick",
                  "Home ground: dry joints, guides, chains",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Name the model before the mathematics",
              body: "Examiners expect the force law stated before any derivation. Say whether F is proportional to velocity (viscous), constant in magnitude (Coulomb) or tied to displacement amplitude (hysteretic) - the free-decay signatures differ, and quoting the wrong envelope costs the whole question.",
            },
            keyTerms: [
              { term: "Damping", definition: "Any mechanism that drains vibration energy out of a system, usually converting it to heat." },
              { term: "Viscous damping coefficient c", definition: "Proportionality constant between damping force and relative velocity, units N-s/m." },
              { term: "Equivalent viscous damping", definition: "A viscous coefficient chosen to dissipate the same energy per cycle as the actual damping mechanism." },
            ],
            examQuestions: [
              {
                q: "What is damping? Explain viscous, Coulomb and structural damping, state the energy dissipated per cycle in each, and derive the equivalent viscous damping coefficient for Coulomb damping.",
                marks: 7,
                outline: [
                  "Define damping as energy dissipation per cycle, usually to heat.",
                  "Viscous: F = c x-dot, energy per cycle pi c w X^2.",
                  "Coulomb: Fd = mu N opposing motion, energy per cycle 4 Fd X.",
                  "Structural: internal friction, energy proportional to X^2, weakly frequency dependent.",
                  "Equivalent viscous concept: set pi c_eq w X^2 equal to true loss per cycle.",
                  "For Coulomb: pi c_eq w X^2 = 4 Fd X gives c_eq = 4 Fd / (pi w X).",
                  "Comment: c_eq depends on amplitude, so Coulomb 'equivalent viscous' is a working approximation.",
                ],
              },
              {
                q: "Define damping. Why can it never be neglected when predicting resonance amplitudes?",
                marks: 2,
              },
              {
                q: "A dry joint exerts a constant friction force Fd. State the energy dissipated per cycle at amplitude X and the equivalent viscous coefficient at whirl frequency w.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Equivalent mass, stiffness and damping: from hardware to oscillator",
            body: [
              "Real machines do not arrive as spring-mass diagrams; they arrive as frames, mounts, gears and shafts. The first modelling act is lumping: decide which part moves essentially rigidly (the mass), which part only flexes (the spring) and where the energy leaks (the damper). Stiffness then comes from deflection formulas. Springs in parallel share the deflection and add: k_eq = k1 + k2. Springs in series share the load and combine reciprocally: 1/k_eq = 1/k1 + 1/k2. A cantilever loaded at its tip behaves as k = 3EI/L^3, a simply supported beam at mid-span as 48EI/L^3, a fixed-fixed beam at mid-span as 192EI/L^3, and a uniform shaft in torsion as kt = GJ/L.",
              "Mass needs the same discipline. The spring's own inertia is not zero: if its mass ms moves with a velocity that tapers linearly from the mass to the anchor, integrating its kinetic energy shows it contributes ms/3 to the lumped mass. In geared drives the load inertia is reflected through the tooth ratio squared: I_eq = I_load (N1/N2)^2, which is why a speed reducer makes the motor see a multiplied - or divided - inertia. Four identical mounts under a machine act as four parallel springs, so k_eq = 4 k_mount; a machine bolted to a flexible floor adds the floor's deflection in series with the mounts.",
              "Once m_eq, k_eq and c_eq are assembled, the natural frequency follows immediately as sqrt(k_eq/m_eq), and every later result - damping regimes, magnification factor, transmissibility - plugs into the same three numbers. The craft lies in knowing what to ignore: at low frequencies the system is stiffness-dominated and small flexibilities matter most; at high frequencies the lumped model itself breaks down and the distributed nature of the hardware (Unit V) takes over. Always sanity-check by computing the static deflection mg/k_eq and asking whether the structure could really sag that far.",
            ],
            bullets: [
              "Springs in parallel share deflection: k_eq = k1 + k2; springs in series share load: 1/k_eq = 1/k1 + 1/k2.",
              "Beam stiffness at the load point: cantilever tip 3EI/L^3, simply supported mid-span 48EI/L^3, fixed-fixed mid-span 192EI/L^3.",
              "Torsional stiffness of a uniform shaft: kt = GJ/L - the rotational twin of k = EA/L for a bar.",
              "The spring's own mass adds ms/3 to the lumped mass - the classic energy-method refinement.",
              "Geared drives reflect inertia through the ratio squared: I_eq = I_load (N1/N2)^2.",
            ],
            table: {
              caption: "Stiffness of the standard elements.",
              headers: ["Element", "Stiffness", "Note"],
              rows: [
                ["Two springs in parallel", "k1 + k2", "same deflection"],
                ["Two springs in series", "k1 k2 / (k1 + k2)", "same force; softer than either"],
                ["Cantilever, tip load", "3EI/L^3", "flagpoles, instrument probes"],
                ["Simply supported beam, mid load", "48EI/L^3", "shaft with central disc"],
                ["Fixed-fixed beam, mid load", "192EI/L^3", "stiffest support of the three"],
                ["Uniform shaft in torsion", "GJ/L", "drive lines, torsional systems"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "From hardware to oscillator",
              caption: "The reduction ladder every Unit II and III calculation climbs.",
              layers: [
                { label: "Physical hardware", note: "machine, mounts, frame - draw it, mark the heavy part" },
                { label: "Lumped elements", note: "what moves, what flexes, where energy leaks" },
                { label: "Equivalents: m_eq, k_eq, c_eq", note: "combine springs, reflect inertias" },
                { label: "Standard oscillator", note: "m_eq x'' + c_eq x' + k_eq x = F(t)" },
                { label: "Solve, then map back", note: "amplitudes, forces, clearances" },
              ],
            },
            callout: {
              type: "tip",
              title: "One stiffness set, reused forever",
              body: "The table above is not Unit I trivia - it resurfaces in natural frequency (Unit II), isolator design and whirling (Unit III) and beam modes (Unit V). Memorise 3, 48 and 192 for EI/L^3 and GJ/L for torsion; five of the seven later derivations quote one of them.",
            },
            keyTerms: [
              { term: "Equivalent stiffness", definition: "Single stiffness that reproduces the force-deflection behaviour of a combination of elastic elements." },
              { term: "Equivalent mass", definition: "Lumped inertia that reproduces the kinetic energy of the distributed moving parts, including ms/3 of a heavy spring." },
              { term: "Reflected inertia", definition: "Inertia of one shaft of a geared train as seen from another, scaled by the square of the speed ratio." },
            ],
            examQuestions: [
              {
                q: "Explain the concept of an equivalent spring-mass-damper system. Derive k_eq for springs in parallel and in series, state the tip stiffness of a cantilever and the mid-span stiffness of a simply supported beam, and explain the ms/3 correction for the spring's own mass.",
                marks: 7,
                outline: [
                  "Purpose of equivalence: reduce hardware to m, k, c for the standard oscillator.",
                  "Parallel: same deflection, forces add, k_eq = k1 + k2.",
                  "Series: same force, deflections add, 1/k_eq = 1/k1 + 1/k2.",
                  "Beam formulas: 3EI/L^3 (cantilever tip), 48EI/L^3 (simply supported mid-span).",
                  "Spring mass: integrate its linearly varying kinetic energy to get ms/3.",
                  "Result: m_eff = m + ms/3, so wn = sqrt(k/(m + ms/3)).",
                  "Close with a worked example: machine on four identical mounts, k_eq = 4 k_mount.",
                ],
              },
              {
                q: "Two springs of stiffness 4 kN/m and 12 kN/m are used (a) in parallel, (b) in series. Compute k_eq in each case.",
                marks: 2,
              },
              {
                q: "State the equivalent mass contributed by a spring's own mass and the torsional stiffness of a uniform shaft, with the conditions under which each applies.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "The energy method for natural frequency",
            body: [
              "Newton's second law is one route to the equation of motion; for conservative systems, energy bookkeeping is often faster and safer. If no energy enters or leaves, the total T + V is constant, so its time derivative is zero. For the spring-mass oscillator, T = 1/2 m x-dot^2 and V = 1/2 k x^2; differentiating the constant sum gives m x'' + k x = 0, and the natural frequency falls out as wn = sqrt(k/m) - no free-body diagram, no sign conventions to fumble.",
              "The procedure generalises. Choose a coordinate and an equilibrium datum, write both energies as quadratics in the coordinate and its rate - which is exactly the small-displacement approximation - then differentiate and read off wn^2 as the ratio of the potential-energy stiffness coefficient to the kinetic-energy mass coefficient. For the simple pendulum, V = 1/2 m g L theta^2 after the small-angle approximation and T = 1/2 m L^2 theta-dot^2, giving wn = sqrt(g/L): the mass cancels, and only length and gravity remain. The same two-line calculation handles rolling cylinders, floating bodies and buoyancy problems that make free-body diagrams miserable.",
              "The method also upgrades itself: allowing an approximate shape for a distributed system turns this section's exact bookkeeping into Rayleigh's method (Unit II), the workhorse for shafts carrying several loads. Two cautions govern its use. First, it is valid only for conservative systems - any damping or external work invalidates T + V = constant. Second, the energies must be quadratic, which means small motions about equilibrium; a pendulum swinging through large angles stores potential as m g L (1 - cos theta), not as a parabola, and the method then misestimates. Used within those limits it is the quickest full-marks derivation in the subject.",
            ],
            bullets: [
              "Energy route for conservative systems: write T and V, set d/dt (T + V) = 0, read the equation of motion.",
              "Quadratics are the whole game: T = 1/2 m_eff x-dot^2 and V = 1/2 k_eff x^2 give wn = sqrt(k_eff / m_eff).",
              "Simple pendulum: wn = sqrt(g/L) - the mass cancels; only length and gravity matter.",
              "A heavy spring adds T = 1/2 (ms/3) x-dot^2, so the effective mass becomes m + ms/3.",
              "Restrictions: no damping, no external work, small displacements - otherwise the method misestimates.",
            ],
            table: {
              caption: "Energy bookkeeping for four conservative systems.",
              headers: ["System", "Kinetic T", "Potential V", "wn"],
              rows: [
                ["Spring-mass", "1/2 m x-dot^2", "1/2 k x^2", "sqrt(k/m)"],
                ["Simple pendulum", "1/2 m L^2 theta-dot^2", "1/2 m g L theta^2", "sqrt(g/L)"],
                ["Spring-mass, heavy spring", "1/2 (m + ms/3) x-dot^2", "1/2 k x^2", "sqrt(k/(m + ms/3))"],
                ["Torsional oscillator", "1/2 I theta-dot^2", "1/2 kt theta^2", "sqrt(kt/I)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Energy method in five moves",
              caption: "The fixed sequence an exam answer follows - each arrow is one written line.",
              steps: [
                { label: "Choose the coordinate and an equilibrium datum" },
                { label: "Write T and V as quadratics", note: "small-motion approximation" },
                { label: "Differentiate: d/dt (T + V) = 0", note: "conservative system only" },
                { label: "Collect into x'' + wn^2 x = 0", note: "read wn from the coefficient ratio" },
                { label: "Cross-check with max T = max V", note: "the same wn, second opinion" },
              ],
            },
            callout: {
              type: "exam",
              title: "Energy answers are marked on bookkeeping",
              body: "The mark scheme looks for: the datum stated, both energies written with the 1/2 factors, the differentiation shown, and wn boxed. Missing the datum or dropping the small-angle approximation are the two most common lost marks in RGPV energy-method questions.",
            },
            keyTerms: [
              { term: "Kinetic energy T", definition: "Energy of motion, 1/2 m v^2 for a lumped mass, summed for distributed parts." },
              { term: "Potential energy V", definition: "Energy of position - elastic (1/2 k x^2) or gravitational (m g h) - measured from an equilibrium datum." },
              { term: "Conservative system", definition: "A system with no damping and no external work, so that T + V stays constant." },
            ],
            examQuestions: [
              {
                q: "Using the energy method, derive the natural frequency of (a) a spring-mass system, (b) a simple pendulum, and (c) a spring-mass system that includes the mass of the spring.",
                marks: 7,
                outline: [
                  "State T + V = constant for a conservative system, hence d/dt (T + V) = 0.",
                  "Spring-mass: write T and V, differentiate, obtain m x'' + k x = 0.",
                  "Read off wn = sqrt(k/m).",
                  "Pendulum: small-angle V = 1/2 m g L theta^2, T = 1/2 m L^2 theta-dot^2.",
                  "Result wn = sqrt(g/L); note the mass cancels.",
                  "Heavy spring: integrate its tapering kinetic energy to get T = 1/2 (m + ms/3) x-dot^2.",
                  "Final: wn = sqrt(k/(m + ms/3)); state the small-motion restriction.",
                ],
              },
              {
                q: "Why does the mass of a simple pendulum not appear in its natural frequency?",
                marks: 2,
              },
              {
                q: "A 5 kg mass hangs on a spring of stiffness 2000 N/m. Find the natural frequency in rad/s and in Hz.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Drawing the model and writing the equation of motion",
            body: [
              "Every vibration problem begins with the same ceremony: identify the moving mass, identify the flexible and dissipative elements, choose a coordinate with a declared positive sense, and draw the free-body diagram with the mass held at a positive displacement. Newton's second law then states that the sum of real forces along the coordinate equals m x''. For the standard oscillator the spring pulls back with kx and the damper with c x-dot, so F(t) - kx - c x-dot = m x'', which rearranges into the standard form m x'' + c x' + k x = F(t).",
              "D'Alembert's principle is the same equation wearing different clothes: move m x'' to the force side, call it a reversed effective force, and write the book as a static balance. Either route is full marks; the choice is taste. The torsional twin of the standard form is I theta'' + ct theta' + kt theta = M(t), obtained by summing moments about the shaft axis instead of forces along a line. For systems with gears, write the equation on one shaft and reflect all inertias and stiffnesses to it first - the ratio-squared rules of section 1.3 exist precisely for this moment.",
              "Finish with the three sanity checks that catch nearly every error. The statics check: set all derivatives to zero and confirm the remaining kx = F makes physical sense. The units check: every term must carry newtons (or newton-metres for torsion). The sign check: restoring forces must oppose the displacement, always. Once the equation of motion is written and verified, Units II and III take over - free vibration with F = 0, forced vibration with F(t) nonzero - and the natural frequency computed from the model is the single number the rest of the subject orbits around.",
            ],
            bullets: [
              "Choose one coordinate per degree of freedom with a declared positive sense; draw the FBD in that positive position.",
              "Newton: real forces along the coordinate equal m x''; D'Alembert: move m x'' across and call it equilibrium.",
              "Element laws: spring force kx and damper force c x-dot, both opposing the motion that creates them.",
              "Standard form: m x'' + c x' + k x = F(t); torsional twin: I theta'' + ct theta' + kt theta = M(t).",
              "Sanity checks: statics (drop derivatives), units (every term in newtons), and restoring forces opposing displacement.",
            ],
            codeExample: {
              language: "python",
              caption: "Computing the natural frequency once a machine has been reduced to m and k.",
              code: `import math

# Machine data after reduction to an equivalent oscillator
m = 120.0            # kg  (machine mass plus mounts' reflected mass)
k = 48000.0          # N/m (equivalent stiffness of four 12 kN/m mounts)

# Standard model: m x'' + k x = 0  ->  wn = sqrt(k/m)
wn = math.sqrt(k / m)
fn = wn / (2.0 * math.pi)
T = 1.0 / fn

print(f"natural frequency wn = {wn:6.2f} rad/s")
print(f"                  fn = {fn:6.2f} Hz")
print(f"               period T = {T:6.4f} s")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The EOM assembly line",
              caption: "Five stations from a drawing to the equation every later unit starts from.",
              stages: [
                { label: "Isolate the mass; draw the FBD", note: "every force shown at positive x" },
                { label: "Apply Newton's second law", note: "or D'Alembert's principle" },
                { label: "Insert the element laws", note: "spring kx, damper c x-dot" },
                { label: "Arrange into standard form", note: "m x'' + c x' + k x = F(t)" },
                { label: "Verify statics, units, signs", note: "then hand over to Units II-III" },
              ],
            },
            callout: {
              type: "tip",
              title: "The statics check catches most sign errors",
              body: "Before moving on, set x'' and x' to zero: the standard form must reduce to kx = F, the ordinary spring law. If any term survives with the wrong sign, the free-body diagram - not the algebra - is the culprit, and one glance at the FBD fixes it.",
            },
            keyTerms: [
              { term: "Free-body diagram", definition: "Sketch of the isolated mass showing every external force acting at a positive displacement." },
              { term: "D'Alembert's principle", definition: "Treating -m x'' as a reversed effective force so that a dynamic problem reads as static equilibrium." },
              { term: "Equation of motion", definition: "The differential equation relating the coordinate, its derivatives and the applied excitation." },
            ],
            examQuestions: [
              {
                q: "Derive the equation of motion of a viscously damped spring-mass system subjected to an external force F(t), using (a) Newton's second law and (b) D'Alembert's principle, and write the standard form and its torsional analogue.",
                marks: 7,
                outline: [
                  "Define the coordinate x from static equilibrium and draw the FBD at positive x.",
                  "Forces: spring kx and damper c x-dot opposing motion, applied force F(t).",
                  "Newton: F(t) - kx - c x-dot = m x''; rearrange to m x'' + c x' + k x = F(t).",
                  "D'Alembert: include the reversed effective force -m x'' and write the force balance.",
                  "Show both routes give the identical standard form.",
                  "Torsional analogue: I theta'' + ct theta' + kt theta = M(t), moment sum about the axis.",
                  "State the meaning of every symbol and the statics check kx = F.",
                ],
              },
              {
                q: "State D'Alembert's principle in one sentence and name the force it introduces.",
                marks: 2,
              },
              {
                q: "Write the equation of motion of a mass suspended from a spring and damper, taking x from the static equilibrium position, and explain why the gravity term drops out.",
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
      title: "Free Vibration of Single-Degree-of-Freedom Systems",
      summary:
        "The system left alone: the undamped solution and static-deflection shortcut, natural frequencies of loaded shafts bounded by Rayleigh and Dunkerley, the four viscous damping regimes, damping measured by logarithmic decrement, and the linear decay and dead zone of Coulomb friction.",
      chapter: {
        number: "02",
        title: "SDOF Free Vibration",
        intro:
          "Unit II sets F(t) to zero and watches what the oscillator does on its own: the pure sinusoid of the undamped case, the bounded estimates of Rayleigh and Dunkerley for shafts carrying several loads, the four regimes that the damping ratio selects between, the logarithmic decrement that converts a decay trace into a number for zeta, and the Coulomb friction that brings motion to a dead stop in finite time.",
        inOneBreath:
          "Undamped free vibration is x = X sin(wn t + phi) with wn = sqrt(k/m) = sqrt(g/delta_st), independent of amplitude; loaded shafts are bracketed by Rayleigh's upper bound wn^2 = g sum(Wi yi)/sum(Wi yi^2) and Dunkerley's lower bound 1/w^2 = sum(1/wi^2); viscous damping introduces cc = 2 sqrt(km), zeta = c/cc and four regimes of which only zeta < 1 vibrates, at wd = wn sqrt(1 - zeta^2); the log decrement delta = ln(x1/x2) = 2 pi zeta/sqrt(1 - zeta^2) turns decay traces into damping ratios; and Coulomb friction trims amplitude linearly by 2 Fd/k every half cycle, halting the mass inside the dead zone |x| <= Fd/k.",
        sections: [
          {
            number: "2.1",
            title: "Undamped free vibration: the pure sinusoid",
            body: [
              "With no damping and no external force, the standard form collapses to m x'' + k x = 0, and the solution is a pure harmonic: x(t) = A cos(wn t) + B sin(wn t), or equivalently x = X sin(wn t + phi), with wn = sqrt(k/m) in rad/s. The initial conditions fix the constants: an initial displacement x0 and velocity v0 give amplitude X = sqrt(x0^2 + (v0/wn)^2) and phase tan(phi) = wn x0 / v0. The motion repeats with period T = 2 pi/wn, and the frequency in hertz is fn = wn/(2 pi) = (1/2 pi) sqrt(k/m).",
              "The most examined property of this solution is isochronism: the natural frequency depends only on m and k, never on the amplitude or on how the motion was started. Doubling the initial displacement doubles the amplitude and leaves wn untouched - the defining property of linear systems. A second property worth internalising is the static-deflection shortcut. At equilibrium the spring carries the weight, k delta_st = mg, so wn = sqrt(k/m) = sqrt(g/delta_st): measure how far the structure sags under its own load and you have its natural frequency without knowing either m or k separately.",
              "Energy tells the same story in pictures. At the extremes of motion the mass is momentarily at rest and all the energy is potential, 1/2 k X^2; passing through equilibrium the spring is relaxed and all the energy is kinetic, 1/2 m (wn X)^2; and the total stays constant at 1/2 k X^2 forever. This shuttle is the cycle diagram below, and it is the seed of Rayleigh's method in the next section. The undamped oscillator is of course an idealisation - real machines leak - but it supplies the single most important number in the subject, and every later result measures itself against wn.",
            ],
            bullets: [
              "Solution: x(t) = X sin(wn t + phi) with wn = sqrt(k/m); amplitude and phase come from x0 and v0.",
              "Isochronism: wn depends only on m and k - never on initial conditions or amplitude.",
              "Static-deflection shortcut: wn = sqrt(g/delta_st); measure the sag, read the frequency.",
              "Period T = 2 pi sqrt(m/k); frequency fn = (1/2 pi) sqrt(k/m).",
              "Energy shuttle: extremes hold all potential (1/2 k X^2), equilibrium holds all kinetic (1/2 m (wn X)^2).",
            ],
            table: {
              caption: "Standard natural-frequency formulas.",
              headers: ["Model", "wn", "Note"],
              rows: [
                ["Spring-mass", "sqrt(k/m)", "the reference case"],
                ["Simple pendulum", "sqrt(g/L)", "mass cancels"],
                ["Torsional oscillator", "sqrt(kt/I)", "kt = GJ/L for a uniform shaft"],
                ["Cantilever with tip mass", "sqrt(3EI/(m L^3))", "k = 3EI/L^3 from Unit I"],
                ["Any gravity-loaded system", "sqrt(g/delta_st)", "static-deflection shortcut"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The energy shuttle over one cycle",
              caption: "Undamped free vibration is this loop traversed forever at radian speed wn.",
              steps: [
                { label: "x = +X: at rest", note: "all energy potential: 1/2 k X^2" },
                { label: "x = 0: maximum speed", note: "all energy kinetic: 1/2 m (wn X)^2" },
                { label: "x = -X: at rest again", note: "potential restored" },
                { label: "Back through x = 0", note: "one full period: 2 pi / wn" },
              ],
            },
            callout: {
              type: "exam",
              title: "The amplitude-independence trap",
              body: "A favourite RGPV short asks: 'if the initial displacement is doubled, what happens to the natural frequency?' The answer is nothing - write 'wn is a system property, independent of initial conditions', quote wn = sqrt(k/m), and collect the marks. Only nonlinear systems break isochronism.",
            },
            keyTerms: [
              { term: "Natural frequency wn", definition: "The frequency at which an undamped system oscillates after any disturbance, sqrt(k/m) in rad/s." },
              { term: "Period T", definition: "Time for one complete oscillation, T = 2 pi/wn." },
              { term: "Harmonic motion", definition: "Sinusoidal oscillation x = X sin(wn t + phi) with constant amplitude and single frequency." },
            ],
            examQuestions: [
              {
                q: "Derive the complete solution of the undamped free vibration of a spring-mass system for initial displacement x0 and initial velocity v0, express it in amplitude-phase form, and show that the natural frequency can be obtained from the static deflection.",
                marks: 7,
                outline: [
                  "Write m x'' + k x = 0 and the trial solution; derive wn = sqrt(k/m).",
                  "General solution x = A cos(wn t) + B sin(wn t).",
                  "Apply x(0) = x0 and v(0) = v0: A = x0, B = v0/wn.",
                  "Amplitude-phase form: X = sqrt(x0^2 + (v0/wn)^2), tan(phi) = wn x0/v0.",
                  "Note isochronism: wn independent of x0, v0.",
                  "Static deflection: k delta_st = mg gives wn = sqrt(g/delta_st).",
                  "Interpretation: sag measurement replaces stiffness measurement.",
                ],
              },
              {
                q: "A 2 kg mass on a 200 N/m spring is released from rest 10 mm from equilibrium. Find wn and fn.",
                marks: 2,
              },
              {
                q: "A spring deflects 10 mm under its attached load. Estimate the natural frequency of the system in rad/s and Hz.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Estimating natural frequencies: Rayleigh and Dunkerley",
            body: [
              "When a shaft carries several discs and loads, an exact eigen-solve is heavy work, and two classical energy methods bracket the answer instead. Rayleigh's method extends the energy method of Unit I to any assumed deflection shape: equate maximum kinetic and maximum potential energy, and the assumed shape pays a price. For a shaft carrying weights Wi whose combined static loading produces deflections yi under each load, the estimate is wn^2 = g sum(Wi yi) / sum(Wi yi^2). Because any assumed shape other than the true mode is effectively stiffer, Rayleigh always overestimates - it is an upper bound, exact only when the assumed shape is the true mode shape.",
              "Dunkerley's method attacks from the other side. Compute the natural frequency of the shaft with each load acting alone (the other loads removed), obtaining wi for each, then combine reciprocally: 1/w^2 = 1/w1^2 + 1/w2^2 + ... , including a term for the bare shaft's own frequency. The reciprocal sum systematically underestimates, so Dunkerley is a lower bound. In the worked example of the code below - two loads whose static deflections are 2 mm and 4 mm - Rayleigh returns 52.2 rad/s and Dunkerley 40.4 rad/s, bracketing the true first critical speed.",
              "The pair is a design tool precisely because it brackets: if the upper and lower bounds straddle the running speed, the design is unsafe no matter what the exact value is, and if both clear it with margin, no further analysis is needed. The bounds tighten as the assumed Rayleigh shape improves (measured static deflections are usually excellent), and both methods reduce to the exact answer for a single load. Between them, Southwell's plot extracts frequencies experimentally from successive load tests - the laboratory cousin of the same algebra.",
            ],
            bullets: [
              "Rayleigh: assume a deflection shape, set max T = max V; for a loaded shaft wn^2 = g sum(Wi yi) / sum(Wi yi^2).",
              "Rayleigh errs high: any shape other than the true mode adds apparent stiffness - upper bound.",
              "Dunkerley: 1/w^2 = 1/w1^2 + 1/w2^2 + ..., each wi from one load acting alone, plus the bare-shaft term.",
              "Dunkerley errs low - the lower bound that pairs with Rayleigh to bracket the true frequency.",
              "Exact for a single load; measured static deflections make the Rayleigh bound tight.",
            ],
            codeExample: {
              language: "python",
              caption: "Rayleigh and Dunkerley brackets for a shaft carrying two loads.",
              code: `# Two loads on a light shaft: static deflections measured under each
# Rayleigh:   wn^2 = g * sum(W*y) / sum(W*y^2)
# Dunkerley:  1/wn^2 = sum(1/wi^2),  wi = sqrt(g/yi)
g = 9.81
W = [200.0, 400.0]     # N, loads on the shaft
y = [0.002, 0.004]     # m, static deflection under each load

rayleigh = (g * sum(w * d for w, d in zip(W, y)) /
            sum(w * d * d for w, d in zip(W, y))) ** 0.5

dunkerley = sum(1.0 / (g / d) for d in y) ** -0.5

print(f"Rayleigh  (upper bound): {rayleigh:6.2f} rad/s")
print(f"Dunkerley (lower bound): {dunkerley:6.2f} rad/s")
print(f"true value lies between {dunkerley:.1f} and {rayleigh:.1f} rad/s")`,
            },
            diagram: {
              kind: "compare",
              title: "Rayleigh over, Dunkerley under",
              caption: "Two energy methods, two guaranteed errors in opposite directions - together a bracket.",
              left: {
                heading: "Rayleigh's method",
                items: [
                  "Energy equality: max T = max V",
                  "Needs an assumed deflection shape",
                  "Upper bound: assumed shapes are stiffer",
                  "Exact when the shape is the true mode",
                ],
              },
              right: {
                heading: "Dunkerley's method",
                items: [
                  "Reciprocal squares of partial frequencies",
                  "Needs each load's frequency alone",
                  "Lower bound for the combined system",
                  "Add the bare-shaft frequency as one more term",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Bounds are a decision tool",
              body: "Do not just compute the two numbers - interpret them. If Rayleigh's upper bound sits below the running speed, the shaft is safe with certainty; if Dunkerley's lower bound sits above it, the shaft resonates with certainty. Only a straddle forces the exact eigen-solve.",
            },
            keyTerms: [
              { term: "Rayleigh's method", definition: "Energy method estimating wn from an assumed mode shape; overestimates for any shape but the true one." },
              { term: "Dunkerley's method", definition: "Reciprocal-squares combination of single-load natural frequencies; underestimates the combined frequency." },
              { term: "Assumed mode shape", definition: "The trial deflection pattern Rayleigh's method uses in place of the unknown true mode." },
            ],
            examQuestions: [
              {
                q: "Explain Rayleigh's method for finding the natural frequency of a shaft carrying several loads, derive wn^2 = g sum(Wi yi)/sum(Wi yi^2), state why the method overestimates, and explain how Dunkerley's method complements it.",
                marks: 7,
                outline: [
                  "Basis: for free harmonic motion, maximum kinetic energy equals maximum potential energy.",
                  "Assume the static deflection curve as the mode shape.",
                  "Write T_max with Wi and wi = wn yi; write V_max from the static loads.",
                  "Equate and simplify to wn^2 = g sum(Wi yi)/sum(Wi yi^2).",
                  "Overestimate argument: any non-fundamental shape adds apparent stiffness.",
                  "Dunkerley: 1/w^2 = sum(1/wi^2) with each load alone; it underestimates.",
                  "Use: the pair brackets the true critical speed of the shaft.",
                ],
              },
              {
                q: "State Dunkerley's formula and the sense of its error.",
                marks: 2,
              },
              {
                q: "Two loads on a light shaft have partial frequencies 60 rad/s and 80 rad/s. Estimate the combined natural frequency by Dunkerley's method.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Viscously damped free vibration: the four regimes",
            body: [
              "Restore the damper and the equation becomes m x'' + c x' + k x = 0. Trying x = e^{st} yields the characteristic equation m s^2 + c s + k = 0, whose roots s = (-c ± sqrt(c^2 - 4mk))/(2m) decide everything. The pivot is the discriminant, and it is conventional to normalise it: the critical damping coefficient is cc = 2 sqrt(km), the damping ratio is zeta = c/cc, and the damped natural frequency is wd = wn sqrt(1 - zeta^2). Four regimes follow from comparing zeta with one.",
              "Underdamped (zeta < 1) gives complex conjugate roots and the decaying oscillation x = X e^(-zeta wn t) sin(wd t + phi) - the only regime that actually vibrates, and the home of every machine, vehicle and structure. Critically damped (zeta = 1) gives a repeated real root and the fastest possible return to equilibrium without overshoot - the design target for instruments, galvanometers and door closers that must settle quickly. Overdamped (zeta > 1) gives two distinct real roots and a sluggish creep back; damping beyond critical is wasted money. Undamped (zeta = 0) is the pure sinusoid of section 2.1.",
              "Real numbers anchor the regimes: welded steel structures show zeta around 0.02-0.05, bolted assemblies 0.05-0.10, and vehicle suspensions with shock absorbers 0.2-0.4 - deliberately near critical so the body settles in about one cycle after a bump. The damping ratio is also the quantity every later chapter normalises against: the magnification factor, transmissibility and resonance peak are all written in zeta, and the logarithmic decrement of the next section is nothing but a laboratory device for measuring it from a decay trace.",
            ],
            bullets: [
              "Characteristic equation m s^2 + c s + k = 0; the sign of c^2 - 4mk selects the regime.",
              "Critical damping cc = 2 sqrt(km); damping ratio zeta = c/cc measures c against it.",
              "Underdamped (zeta < 1): decaying oscillation at wd = wn sqrt(1 - zeta^2) - the vibrating regime.",
              "Critically damped (zeta = 1): fastest non-oscillatory return - the design point for instruments.",
              "Overdamped (zeta > 1): two real roots, slow creep - damping beyond critical is wasted.",
            ],
            table: {
              caption: "The four damping regimes.",
              headers: ["Regime", "zeta", "Roots", "Motion", "Typical application"],
              rows: [
                ["Undamped", "0", "pure imaginary", "sinusoid forever", "idealisation"],
                ["Underdamped", "< 1", "complex pair -zeta wn ± i wd", "decaying oscillation", "machines, structures"],
                ["Critically damped", "= 1", "repeated real -wn", "fastest settle, no overshoot", "instruments, door closers"],
                ["Overdamped", "> 1", "two distinct reals", "sluggish creep", "over-adjusted closers"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "One ratio, four behaviours",
              caption: "Everything about the free response is decided by zeta = c / (2 sqrt(k m)).",
              start: "Damping ratio zeta = c / (2 sqrt(k m))",
              branches: [
                { label: "zeta < 1: underdamped", outcome: "Complex conjugate roots: decaying oscillation at wd = wn sqrt(1 - zeta^2) - every vibrating machine lives here", good: true },
                { label: "zeta = 1: critically damped", outcome: "Repeated real root: fastest return without overshoot - instruments and door closers aim here", good: true },
                { label: "zeta > 1: overdamped", outcome: "Two distinct real roots: sluggish non-oscillatory creep - damping beyond critical is wasted", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Never quote wd as wn in a damped problem",
              body: "The damped frequency is lower than the undamped by the factor sqrt(1 - zeta^2). For zeta = 0.1 that is only 0.5 percent - but the examiner's first checkpoint is whether the factor appears at all. Write wd = wn sqrt(1 - zeta^2) every single time.",
            },
            keyTerms: [
              { term: "Critical damping cc", definition: "The damping coefficient 2 sqrt(km) at which the discriminant vanishes and oscillation just ceases." },
              { term: "Damping ratio zeta", definition: "The damping coefficient expressed as a fraction of critical, c/cc." },
              { term: "Damped natural frequency wd", definition: "The oscillation frequency of an underdamped system, wn sqrt(1 - zeta^2)." },
            ],
            examQuestions: [
              {
                q: "Derive the free response of a viscously damped SDOF system for zeta < 1, define the critical damping coefficient and damping ratio, and describe all four damping regimes with one application each.",
                marks: 7,
                outline: [
                  "Write m x'' + c x' + k x = 0 and the trial x = e^{st}.",
                  "Characteristic equation and roots; define cc = 2 sqrt(km) and zeta = c/cc.",
                  "For zeta < 1 the roots are complex: -zeta wn ± i wd with wd = wn sqrt(1 - zeta^2).",
                  "Response x = X e^(-zeta wn t) sin(wd t + phi) - decaying oscillation.",
                  "Regimes: undamped, underdamped, critically damped, overdamped - root types and motion.",
                  "Applications: structure, machine, instrument, over-adjusted closer.",
                  "Note that only zeta < 1 vibrates, and wd < wn always.",
                ],
              },
              {
                q: "Define critical damping and damping ratio. What is the regime when c = 0.5 cc?",
                marks: 2,
              },
              {
                q: "A system has wn = 20 rad/s and zeta = 0.6. Compute the damped natural frequency and state how much it falls below wn.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Logarithmic decrement: measuring damping from a decay trace",
            body: [
              "Damping cannot be computed from a drawing - it must be measured - and the classical instrument is the free-decay test: strike the structure, record x(t), and read the peaks. The logarithmic decrement is delta = ln(x1/x2), the natural log of the ratio of two successive same-sign peaks. Because the envelope decays as e^(-zeta wn t) and one period Td = 2 pi/wd elapses between peaks, x1/x2 = e^(zeta wn Td), and the decrement becomes delta = 2 pi zeta / sqrt(1 - zeta^2) - the bridge between a ruler measurement on a chart and the damping ratio.",
              "Inverting gives zeta = delta / sqrt(4 pi^2 + delta^2), and for light damping (zeta below about 0.1) the shortcut delta ≈ 2 pi zeta is accurate to a fraction of a percent. Noise is averaged away by spanning n cycles: delta = (1/n) ln(x1/x_{n+1}). In the worked trace below, peaks of 8.00, 6.20, 4.85, 3.75 and 2.90 mm give per-cycle decrements near 0.25, an average of 0.254 and hence zeta ≈ 0.040 - a typical welded-structure value obtained in seconds.",
              "Two practical cautions complete the picture. First, the test must be genuinely free - any background forcing contaminates the envelope. Second, the shape of the envelope diagnoses the damping model: an exponential envelope means viscous damping, a straight-line envelope means Coulomb friction (section 2.5), so the decrement measurement doubles as a classification experiment. The same numbers drive quality control and diagnostics, since bonded joints, cracks and loose bolts all announce themselves as shifts in damping long before they shift stiffness.",
            ],
            bullets: [
              "Log decrement: delta = ln(x1/x2) for adjacent like-sign peaks of a free-decay trace.",
              "Exact link: delta = 2 pi zeta / sqrt(1 - zeta^2); invert to zeta = delta / sqrt(4 pi^2 + delta^2).",
              "Light-damping shortcut: zeta ≈ delta / (2 pi) once zeta is below about 0.1.",
              "Averaging over n cycles: delta = (1/n) ln(x1/x_{n+1}) - built-in noise suppression.",
              "Envelope shape diagnoses the model: exponential = viscous, straight line = Coulomb.",
            ],
            codeExample: {
              language: "python",
              caption: "From a decay trace's peak heights to the damping ratio.",
              code: `import math

# Successive peak amplitudes read off a free-decay trace (mm)
peaks = [8.00, 6.20, 4.85, 3.75, 2.90]

# Log decrement between adjacent peaks, then average
deltas = [math.log(a / b) for a, b in zip(peaks, peaks[1:])]
delta = sum(deltas) / len(deltas)

zeta = delta / math.sqrt(4 * math.pi ** 2 + delta ** 2)

print(f"log decrement  delta = {delta:.4f}")
print(f"damping ratio   zeta  = {zeta:.4f}")
print(f"shortcut zeta ~ delta/(2 pi) = {delta / (2 * math.pi):.4f}")`,
            },
            diagram: {
              kind: "flow",
              title: "From decay trace to zeta",
              caption: "The laboratory workflow - five steps, two of them arithmetic.",
              steps: [
                { label: "Record the free decay x(t)", note: "strike and release, no forcing" },
                { label: "Read successive peak amplitudes", note: "x1, x2, ... all the same sign" },
                { label: "delta = ln(x1 / x2)", note: "or (1/n) ln(x1/x_{n+1})" },
                { label: "zeta = delta / sqrt(4 pi^2 + delta^2)", note: "exact inversion" },
                { label: "Report zeta, wd and wn", note: "wn = wd / sqrt(1 - zeta^2)" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two-step mark scheme",
              body: "Numerical log-decrement questions are marked in two moves: delta from the peak ratio, then zeta from the inverted formula. The classic slip is using log base 10 - write 'ln' explicitly - and the second slip is quoting zeta = delta/(2 pi) when the data imply heavy damping; use the exact inversion unless zeta is provably small.",
            },
            keyTerms: [
              { term: "Logarithmic decrement", definition: "Natural log of the ratio of two successive same-sign peak amplitudes in free decay." },
              { term: "Free-decay test", definition: "Experiment in which a structure is disturbed once and its unforced response recorded." },
              { term: "Envelope", definition: "The smooth curve bounding the decaying oscillation; exponential for viscous, linear for Coulomb damping." },
            ],
            examQuestions: [
              {
                q: "Define logarithmic decrement, derive delta = 2 pi zeta / sqrt(1 - zeta^2) from the free-decay envelope, invert it for zeta, and evaluate zeta for a trace whose amplitude halves every complete cycle.",
                marks: 7,
                outline: [
                  "Define delta = ln(x1/x2) for successive like-sign peaks.",
                  "Envelope of underdamped response: X e^(-zeta wn t).",
                  "Ratio of peaks one damped period apart: x1/x2 = e^(zeta wn Td).",
                  "Substitute Td = 2 pi/wd to get delta = 2 pi zeta / sqrt(1 - zeta^2).",
                  "Invert: zeta = delta / sqrt(4 pi^2 + delta^2).",
                  "Halving per cycle: delta = ln 2 = 0.693.",
                  "Result: zeta = 0.693/sqrt(4 pi^2 + 0.48) ≈ 0.11 - moderately damped.",
                ],
              },
              {
                q: "The amplitudes of two successive peaks are 5.0 mm and 4.0 mm. Find the logarithmic decrement.",
                marks: 2,
              },
              {
                q: "Using the light-damping shortcut, estimate zeta for delta = 0.25 and verify against the exact inversion.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Coulomb-damped free vibration: linear decay and the dead zone",
            body: [
              "When the resisting force comes from dry friction rather than a fluid, the model changes character: Fd = mu N is constant in magnitude and always opposes the direction of motion, so the equation of motion is piecewise, m x'' + k x = ± Fd, flipping sign at every turning point. Work-energy over a half cycle gives the signature result: between successive extremes the amplitude falls by exactly 2 Fd/k, so the envelope is a straight line rather than an exponential, dropping 4 Fd/k per full cycle.",
              "Two further consequences separate Coulomb from viscous decay. First, the frequency is essentially unchanged - friction does not depend on velocity, so there is no wd correction to first order; the system rings at wn until it stops. Second, it does stop, and in finite time: when the mass halts at a turning point where the spring force cannot overcome friction, |x| <= Fd/k, motion cannot restart, and the mass remains stuck - possibly offset from true equilibrium anywhere inside that dead zone. A viscously damped system, by contrast, only approaches rest asymptotically.",
              "For analysis, the equivalent viscous damping of section 1.2, c_eq = 4 Fd/(pi w X), lets Coulomb systems borrow viscous results - at the price of amplitude dependence, since c_eq grows as X shrinks. Engineering-wise, Coulomb damping is everywhere a joint slides: machine-tool slideways, bolted flanges, chain and cable systems. Its nastiest manifestation is stick-slip: when the driving force barely exceeds Fd, the motion alternates between sticking and slipping, producing the squeal of brakes, the chatter of machine tools and the jerkiness of slow hydraulic cylinders.",
            ],
            bullets: [
              "Coulomb friction: constant magnitude Fd = mu N always opposing the direction of motion.",
              "Amplitude drops 2 Fd/k every half cycle (4 Fd/k per full cycle) - a straight-line envelope.",
              "Frequency stays essentially wn - friction does not shift it the way viscous damping does.",
              "Motion halts inside the dead zone |x| <= Fd/k, possibly offset from true equilibrium.",
              "Equivalent viscous damping: c_eq = 4 Fd / (pi w X) - amplitude dependent, hence nonlinear.",
            ],
            table: {
              caption: "Viscous vs Coulomb free decay.",
              headers: ["Feature", "Viscous", "Coulomb"],
              rows: [
                ["Force law", "proportional to velocity", "constant magnitude mu N"],
                ["Envelope", "exponential X e^(-zeta wn t)", "linear, -2 Fd/k per half cycle"],
                ["Frequency", "wd = wn sqrt(1 - zeta^2)", "essentially wn"],
                ["Rest", "asymptotic, never exactly", "finite cycles, then stick"],
                ["Final position", "equilibrium", "anywhere in |x| <= Fd/k"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Life of a Coulomb-damped oscillation",
              caption: "Release, subtract, subtract again - until the turning point enters the dead zone.",
              steps: [
                { label: "Release from x0 at rest", note: "motion requires k x0 > Fd" },
                { label: "First half cycle", note: "amplitude loses 2 Fd/k" },
                { label: "Each later half cycle", note: "another 2 Fd/k gone" },
                { label: "Envelope falls linearly", note: "not exponentially" },
                { label: "Stick inside |x| <= Fd/k", note: "motion ceases" },
              ],
            },
            callout: {
              type: "warning",
              title: "The dead zone is not equilibrium",
              body: "A Coulomb-damped system can stop anywhere within Fd/k of equilibrium, and examiners love asking where. Do not answer 'at equilibrium' - answer 'inside the dead zone, at the first turning point where the spring force falls below the friction force'. The offset is a permanent residual, the reason precision slideways are preloaded.",
            },
            keyTerms: [
              { term: "Coulomb damping", definition: "Energy dissipation by dry friction of constant magnitude mu N opposing the direction of motion." },
              { term: "Dead zone", definition: "The band |x| <= Fd/k within which the spring cannot overcome friction and motion stops." },
              { term: "Stick-slip", definition: "Alternating sticking and sliding when driving forces barely exceed friction, producing squeal and chatter." },
            ],
            examQuestions: [
              {
                q: "Derive the amplitude decay per half cycle for a spring-mass system with Coulomb damping, show that the envelope is linear, contrast the result with viscous damping, and derive the equivalent viscous damping coefficient.",
                marks: 7,
                outline: [
                  "Set up the piecewise equation m x'' + k x = ± Fd with friction opposing motion.",
                  "Work-energy from +x0 to the next extreme -x1: 1/2 k(x0^2 - x1^2) = Fd (x0 + x1).",
                  "Factor to obtain x0 - x1 = 2 Fd/k.",
                  "Conclude: linear envelope, -2 Fd/k per half cycle, motion ends in finite cycles.",
                  "Contrast viscous: exponential envelope, frequency shift, asymptotic rest.",
                  "Equivalent viscous: match energies, pi c_eq w X^2 = 4 Fd X.",
                  "Result c_eq = 4 Fd/(pi w X); note the amplitude dependence.",
                ],
              },
              {
                q: "Why does a Coulomb-damped system stop in finite time while a viscously damped one does not?",
                marks: 2,
              },
              {
                q: "A system with k = 10 kN/m and friction force 50 N is released from 20 mm. After how many half cycles does motion cease, and where can the mass come to rest?",
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
      title: "Forced Vibration of Single-Degree-of-Freedom Systems",
      summary:
        "The system driven: steady-state response and the magnification factor, resonance with bandwidth and quality factor, transmissibility and base excitation, the isolation design that follows, and the whirling of shafts at their critical speeds.",
      chapter: {
        number: "03",
        title: "SDOF Forced Vibration",
        intro:
          "Unit III switches the excitation on: the steady-state response to a harmonic force and its magnification factor, the anatomy of resonance and its half-power bandwidth, the transmissibility that governs both base excitation and force isolation, the isolator design procedure built on it, and the whirling of rotating shafts that re-casts unbalance as a self-excitation problem with a critical speed.",
        inOneBreath:
          "Harmonic forcing produces a steady state x = X sin(w t - phi) with X = (F0/k) MF, MF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2) and phi = atan(2 zeta r/(1 - r^2)); at r = 1, MF = 1/(2 zeta) and the phase lag is 90 deg, with half-power bandwidth w2 - w1 ≈ 2 zeta wn and quality factor Q = 1/(2 zeta); transmissibility - one formula for force and base motion alike, sqrt(1 + (2 zeta r)^2)/sqrt((1 - r^2)^2 + (2 zeta r)^2) - exceeds 1 below r = sqrt(2) and isolates only beyond it, where extra damping hurts; isolator design solves r = sqrt(1 + 1/TR) then k = m (w/r)^2 with a static-deflection check; and a spinning shaft with eccentricity e whirls with peak deflection e/(2 zeta) at the critical speed wc = sqrt(k_shaft/m), self-centring above it.",
        sections: [
          {
            number: "3.1",
            title: "Harmonic excitation: steady state and the magnification factor",
            body: [
              "Apply a harmonic force F0 sin(w t) to the standard oscillator and the complete response is the sum of two parts: a transient that decays as e^(-zeta wn t) at the damped natural frequency, and a steady state that persists indefinitely at the forcing frequency. The steady state is x = X sin(w t - phi) - same frequency, fixed amplitude, lagging the force by phase phi. Substituting this trial into the equation of motion (or using phasors) gives X = (F0/k) / sqrt((1 - r^2)^2 + (2 zeta r)^2), with r = w/wn the frequency ratio.",
              "Normalising by the static deflection F0/k defines the magnification factor, MF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2), and the phase tan(phi) = 2 zeta r / (1 - r^2). Three limits organise the whole curve. For r much less than 1 the system is stiffness-controlled: MF is near 1, damping is irrelevant, and the mass simply follows the force statically. At r = 1 the system is resonance-controlled: MF = 1/(2 zeta), the only place damping earns its keep. For r much greater than 1 the system is mass-controlled: MF falls as 1/r^2 and the mass essentially refuses to move.",
              "The code below tabulates MF and phase for zeta = 0.1 across the speed range: 1.04 at r = 0.2, 5.0 at r = 1, 0.33 at r = 2. That asymmetry is the design lesson - a modest detuning above resonance buys enormous amplitude reduction, while below resonance nothing much changes. Every later section of this unit is a corollary of this one: resonance (3.2) is the peak of the curve, transmissibility (3.3) is the same machinery applied to transmitted force, and whirling (3.5) is the same formula with the unbalance force itself growing as w^2.",
            ],
            bullets: [
              "Steady state lags the force: x = X sin(w t - phi) with X = (F0/k) MF and tan(phi) = 2 zeta r/(1 - r^2).",
              "Magnification factor: MF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2) with r = w/wn.",
              "Stiffness-controlled (r << 1): MF ≈ 1; damping irrelevant; the system follows statics.",
              "Resonance (r = 1): MF = 1/(2 zeta); the only place damping limits the response.",
              "Mass-controlled (r >> 1): MF ≈ 1/r^2 -> 0; the mass refuses to follow the force.",
            ],
            codeExample: {
              language: "python",
              caption: "Magnification factor and phase across the speed range for zeta = 0.1.",
              code: `import math

zeta = 0.1
r_values = [0.2, 0.5, 0.8, 1.0, 1.5, 2.0]

print("   r      MF    phase (deg)")
for r in r_values:
    mf = 1.0 / math.sqrt((1 - r ** 2) ** 2 + (2 * zeta * r) ** 2)
    phi = math.degrees(math.atan2(2 * zeta * r, 1 - r ** 2))
    print(f"{r:4.1f}  {mf:6.3f}  {phi:8.1f}")`,
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of the forced response",
              caption: "What the sensor records is the sum of a dying part and a living part.",
              layers: [
                { label: "Total response x(t)", note: "what the accelerometer sees" },
                { label: "Transient: decays as e^(-zeta wn t) at wd", note: "gone within a few cycles" },
                { label: "Steady state: X sin(w t - phi)", note: "persists at the forcing frequency" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derive, then specialise",
              body: "RGPV wants the full steady-state derivation first - assumed solution, substitution, amplitude and phase - and the three limits afterwards (r << 1, r = 1, r >> 1). The limits alone earn little; the derivation carries the method marks, and the boxed MF formula carries the rest.",
            },
            keyTerms: [
              { term: "Magnification factor", definition: "Ratio of steady-state amplitude to the static deflection F0/k under the same force." },
              { term: "Frequency ratio r", definition: "Forcing frequency divided by natural frequency, w/wn." },
              { term: "Steady-state response", definition: "The persistent part of the forced response, at the forcing frequency with fixed amplitude and phase lag." },
            ],
            examQuestions: [
              {
                q: "Derive the steady-state response of a viscously damped SDOF system to F0 sin(w t), obtain the magnification factor and phase angle, and evaluate the three limiting cases r much less than 1, r = 1 and r much greater than 1.",
                marks: 7,
                outline: [
                  "Equation of motion m x'' + c x' + k x = F0 sin(w t).",
                  "Assume x = X sin(w t - phi) and substitute.",
                  "Match sin and cos terms to obtain amplitude and phase formulas.",
                  "Box MF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2) and tan(phi) = 2 zeta r/(1 - r^2).",
                  "Limit r << 1: MF -> 1, phi -> 0 (stiffness-controlled).",
                  "Limit r = 1: MF = 1/(2 zeta), phi = 90 deg (resonance).",
                  "Limit r >> 1: MF -> 1/r^2, phi -> 180 deg (mass-controlled).",
                ],
              },
              {
                q: "Define magnification factor and state its value at resonance for zeta = 0.05.",
                marks: 2,
              },
              {
                q: "For zeta = 0.05, compute MF at r = 1 and at r = 2, and comment on the design implication.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Resonance: what happens at r = 1 and how to survive it",
            body: [
              "Resonance is the condition in which the forcing frequency coincides with the natural frequency. Exactly at r = 1 the magnification factor collapses to 1/(2 zeta) and the phase lag is 90 degrees: the system is bounded only by its damping, and for zeta = 0.05 that still means amplitudes ten times the static deflection. With zero damping the steady state does not exist - the amplitude grows linearly in time without bound, which is why the undamped model at resonance is a growth formula, not a vibration formula. The peak of the damped curve sits slightly below r = 1, at r_peak = sqrt(1 - 2 zeta^2), whenever zeta is below 1/sqrt(2).",
              "The sharpness of the peak is itself a measurement tool. The half-power points w1 and w2 are the frequencies where MF falls to 1/sqrt(2) of its peak value; their separation, the bandwidth, satisfies w2 - w1 ≈ 2 zeta wn for light damping. The quality factor Q = 1/(2 zeta) = wn/(w2 - w1) measures the same sharpness. A bell with zeta = 0.001 has Q = 500 - a peak so narrow it rings for thousands of cycles - while a car suspension with zeta = 0.3 has Q near 1.7 and barely a peak at all. Sweep a force through the frequency range, record the response, read off the half-power points, and you have measured damping without ever seeing a decay trace.",
              "Surviving resonance is a design exercise with exactly three levers, and the fork diagram below is the decision tree. Detuning shifts the natural frequency away from the excitation by changing k or m - the cheapest lever at the design stage. Damping clips the peak and is the only lever that works when speeds must sweep through resonance - which is precisely what happens during every start-up and coast-down of a rotating machine. Finally, since rotating unbalance force grows as w^2, machines with fixed operating speeds are simply specified to run well above or below their critical frequencies, a decision that Unit III's whirling section and Unit V's balancing section complete.",
            ],
            bullets: [
              "At r = 1: MF = 1/(2 zeta) and phi = 90 deg - amplitude is capped only by damping.",
              "Peak sits slightly left of r = 1: r_peak = sqrt(1 - 2 zeta^2) for zeta < 1/sqrt(2).",
              "Undamped resonance grows without bound - amplitude rises linearly with time.",
              "Half-power bandwidth: w2 - w1 ≈ 2 zeta wn; quality factor Q = 1/(2 zeta) = wn/(w2 - w1).",
              "Countermeasures: detune with k or m, add damping, or sweep through the critical speed quickly.",
            ],
            table: {
              caption: "Amplitude at resonance for a unit static deflection (F0/k = 1 mm).",
              headers: ["zeta", "MF at r = 1", "Displacement", "Typical system"],
              rows: [
                ["0.01", "50", "50 mm", "welded steel structure"],
                ["0.05", "10", "10 mm", "bolted steel assembly"],
                ["0.10", "5", "5 mm", "machine on mounts"],
                ["0.25", "2", "2 mm", "vehicle suspension"],
                ["0.50", "1", "1 mm", "heavily damped mount"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Three ways to survive r -> 1",
              caption: "The design decision every resonant machine forces - pick a branch before the machine picks it for you.",
              start: "Running speed w closes in on the natural frequency (r -> 1)",
              branches: [
                { label: "Stay at resonance", outcome: "Amplitude ~ F0/(2 zeta k); phase swings through 90 deg; fatigue life measured in hours", good: false },
                { label: "Add damping", outcome: "Peak clipped to 1/(2 zeta) and shifted to r = sqrt(1 - 2 zeta^2); essential when speeds sweep", good: true },
                { label: "Detune with k or m", outcome: "Hold r below 0.7 or above 1.4 and MF stays near or below 2", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Start-up crosses resonance too",
              body: "A machine fixed to run supercritically must still accelerate from zero through r = 1. If the run-up is slow, the resonance dwell destroys what the steady design saved. Exam answers about supercritical operation must mention rapid passage through the critical speed - it is a standing mark-scheme point.",
            },
            keyTerms: [
              { term: "Resonance", definition: "Condition in which the excitation frequency equals the natural frequency, r = 1, maximising the response." },
              { term: "Half-power bandwidth", definition: "The frequency span w2 - w1 between points where the response falls to 1/sqrt(2) of its peak; ≈ 2 zeta wn." },
              { term: "Quality factor Q", definition: "Sharpness of the resonance peak, Q = 1/(2 zeta) = wn/(w2 - w1)." },
            ],
            examQuestions: [
              {
                q: "Show that at resonance the amplitude of a forced damped SDOF system is F0/(2 zeta k) with a phase lag of 90 degrees. Define half-power bandwidth and quality factor and show how a measured response curve yields the damping ratio.",
                marks: 7,
                outline: [
                  "Write MF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2).",
                  "Substitute r = 1: MF = 1/(2 zeta), so X = F0/(2 zeta k).",
                  "Phase at r = 1: tan(phi) infinite, phi = 90 deg.",
                  "Define half-power points as MF = MF_peak/sqrt(2).",
                  "Show bandwidth w2 - w1 ≈ 2 zeta wn for light damping.",
                  "Quality factor Q = 1/(2 zeta) = wn/(w2 - w1).",
                  "Procedure: sweep frequency, read w1, w2 and wn from the curve, compute zeta.",
                ],
              },
              {
                q: "Why must machines pass through resonance quickly during start-up and coast-down?",
                marks: 2,
              },
              {
                q: "A measured response curve shows wn = 50 rad/s with half-power frequencies 46 and 54 rad/s. Estimate zeta and Q.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Base excitation and transmissibility",
            body: [
              "Much forcing does not act on the mass directly - it arrives through the floor, the road or the earth. Let the base move as y = Y sin(w t) while the mass moves as x; the cleanest derivation uses the relative displacement z = x - y, in which the base acceleration appears as an effective force: m z'' + c z' + k z = m w^2 Y sin(w t). Solving and converting back to absolute motion gives the motion transmissibility X/Y = sqrt(1 + (2 zeta r)^2) / sqrt((1 - r^2)^2 + (2 zeta r)^2) - and, by a different derivation for a force applied to the mass, the force transmissibility Ft/F0 is exactly the same expression. One formula, two physical meanings, both on every exam.",
              "The curve divides the world at r = sqrt(2), independent of damping. Below it, every mount transmits more than it receives: TR > 1 for all zeta, peaking near resonance at approximately 1/(2 zeta) - the failed-isolator regime in which a stiff mount bolts a machine rigidly to a delicate floor. At exactly r = sqrt(2), TR = 1 for every damping value. Above it, TR < 1 for every damping value: isolation, with the undamped ideal TR = 1/(r^2 - 1) falling away as 1/r^2. The counter-intuitive corollary: in the isolation zone damping hurts - a more damped mount transmits more, so soft, lightly damped springs are the isolation designer's friends.",
              "The engineering consequence is the single most quoted design rule in the subject: to isolate, make the mount soft enough that wn is well below the lowest forcing frequency, pushing r above sqrt(2) - and ideally above 3, where TR is already below 0.125. Instruments on vibrating floors, vehicles on roads, buildings in earthquakes and precision equipment next to factories are all governed by this same chart. The next section turns the rule into a complete sizing procedure; this section supplies the formula and the two zones it separates.",
            ],
            bullets: [
              "Motion transmissibility X/Y and force transmissibility Ft/F0 share one formula: sqrt(1 + (2 zeta r)^2) / sqrt((1 - r^2)^2 + (2 zeta r)^2).",
              "r < sqrt(2): every mount amplifies - TR > 1 whatever the damping.",
              "r = sqrt(2): TR = 1 for all damping - the gate between amplification and isolation.",
              "r > sqrt(2): isolation - TR < 1; undamped ideal TR = 1/(r^2 - 1).",
              "In the isolation zone damping hurts: lighter damping transmits less.",
            ],
            table: {
              caption: "One formula, three uses.",
              headers: ["Case", "Excitation", "Ratio", "Design target"],
              rows: [
                ["Force transmissibility", "force F0 on the mass", "Ft / F0", "r > sqrt(2)"],
                ["Motion transmissibility", "base motion Y", "X / Y", "r > sqrt(2)"],
                ["Seismic instrument", "base motion Y", "Z / Y", "r << 1 (accelerometer), r >> 1 (vibrometer)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The two zones of transmissibility",
              caption: "Everything a mount does depends on which side of r = sqrt(2) it lives.",
              left: {
                heading: "Amplification zone (r < sqrt 2)",
                items: [
                  "TR > 1 for every damping value",
                  "Near r = 1, TR ≈ 1/(2 zeta)",
                  "Stiff mounting is the culprit",
                  "Fix: change k or m - not damping",
                ],
              },
              right: {
                heading: "Isolation zone (r > sqrt 2)",
                items: [
                  "TR < 1 for every damping value",
                  "Undamped ideal: TR = 1/(r^2 - 1)",
                  "Damping now degrades isolation",
                  "Design rule: r > sqrt(2), aim r > 3",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Memorise the formula and the gate",
              body: "TR = sqrt(1 + (2 zeta r)^2) / sqrt((1 - r^2)^2 + (2 zeta r)^2) and the gate r = sqrt(2) answer half of Unit III between them. Practise writing the formula from memory and stating the three landmarks: TR = 1/(2 zeta) near resonance, TR = 1 at r = sqrt(2), TR = 1/(r^2 - 1) for the undamped isolation zone.",
            },
            keyTerms: [
              { term: "Transmissibility", definition: "Ratio of transmitted to input quantity - force to foundation or absolute motion to base motion." },
              { term: "Base excitation", definition: "Excitation applied as prescribed motion of the support rather than force on the mass." },
              { term: "Vibration isolation", definition: "Reducing transmitted force or motion by mounting the system so that r exceeds sqrt(2)." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the transmissibility of a mass-spring-damper system with base excitation y = Y sin(w t), show that isolation requires r > sqrt(2), and discuss the role of damping in each zone.",
                marks: 7,
                outline: [
                  "Introduce relative coordinate z = x - y; derive m z'' + c z' + k z = m w^2 Y sin(w t).",
                  "Solve for the relative amplitude Z.",
                  "Convert to absolute displacement and form X/Y.",
                  "Box TR = sqrt(1 + (2 zeta r)^2)/sqrt((1 - r^2)^2 + (2 zeta r)^2).",
                  "Analyse: for r < sqrt(2), TR > 1 for all zeta; at r = sqrt(2), TR = 1.",
                  "For r > sqrt(2), TR < 1; undamped limit TR = 1/(r^2 - 1).",
                  "Damping: helpful near resonance, harmful in the isolation zone.",
                ],
              },
              {
                q: "State the frequency ratio at which transmissibility equals unity for all damping, and its significance.",
                marks: 2,
              },
              {
                q: "A machine runs at 1500 rpm on mounts giving wn = 78.5 rad/s. Compute r and the undamped transmissibility, and state whether the mounts isolate.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Designing vibration isolators",
            body: [
              "Isolation design inverts the analysis: the machine's mass and running speed are fixed, a maximum transmissibility is specified (often 10-20 percent for floor protection, 1 percent for precision instruments), and the designer must produce a stiffness. Neglecting damping for the first pass, TR = 1/(r^2 - 1) in the isolation zone rearranges to r = sqrt(1 + 1/TR); the required natural frequency is wn = w/r, and the total mount stiffness follows as k = m wn^2, divided among the individual mounts. A final check verifies r > sqrt(2) with margin - ideally r above 3.",
              "The stiffness immediately implies a static deflection, delta_st = mg/k, and this is where practical isolators live or die: soft springs mean large sags, and the machine must have the clearance, the levelling adjustment and the piping flexibility to accommodate them. The designer's shortcut chart is the static-deflection formula rewritten, fn = (1/2 pi) sqrt(g/delta_st): an isolator that sags 1 mm has fn ≈ 15.8 Hz; sagging 25 mm brings fn down to about 3.2 Hz. When the running speed is low and the required sag becomes absurd, the standard fixes are inertia blocks - concrete bases that add mass, lowering wn without softening the springs further - or two-stage isolation.",
              "The worked example in the code sizes isolators for a 100 kg fan at 2400 rpm with a 10 percent transmissibility target: r = 3.32, wn = 75.8 rad/s (about 12 Hz), total stiffness 575 kN/m and static deflection a modest 1.7 mm. Rubber mounts at that stiffness carry zeta near 0.1, which barely affects TR at r = 3.3 - the reason the undamped first pass is legitimate. Two audit items remain: the fan must still accelerate through r = 1 at every start-up (3.2's warning), and the real machine has six degrees of freedom, so rocking modes must be checked before the blueprint is signed.",
            ],
            bullets: [
              "Design inputs: mass m, running speed w, target TR; output: mount stiffness k = m (w/r)^2.",
              "Undamped design equation: TR = 1/(r^2 - 1) -> r = sqrt(1 + 1/TR).",
              "Static-deflection shortcut: fn = (1/2 pi) sqrt(g/delta_st) - the isolator selection chart.",
              "Inertia blocks add mass to lower wn without softening springs - pushing r deeper into isolation.",
              "Audit list: r > sqrt(2) with margin, room for the sag, rocking modes, start-up resonance passage.",
            ],
            codeExample: {
              language: "python",
              caption: "Sizing undamped isolators for a 100 kg fan at 2400 rpm to reach 10% transmissibility.",
              code: `import math

m = 100.0                          # kg, machine mass
rpm = 2400.0
w = 2.0 * math.pi * rpm / 60.0     # rad/s, running speed
TR = 0.10                          # target transmissibility

r = math.sqrt(1.0 + 1.0 / TR)      # undamped design equation
wn = w / r                         # required natural frequency
k = m * wn ** 2                    # total stiffness, N/m
delta = m * 9.81 / k * 1000.0      # static deflection, mm

print(f"running speed  w  = {w:7.1f} rad/s")
print(f"frequency ratio r  = {r:7.2f}")
print(f"required wn        = {wn:7.2f} rad/s")
print(f"total stiffness k  = {k:9.0f} N/m")
print(f"static deflection  = {delta:7.1f} mm")`,
            },
            diagram: {
              kind: "flow",
              title: "Isolator design workflow",
              caption: "Five steps from a specification to a spring rate on a drawing.",
              steps: [
                { label: "Fix the data: m, running speed w, target TR" },
                { label: "Solve r from TR = 1/(r^2 - 1)", note: "undamped first pass" },
                { label: "wn = w / r, then k = m wn^2", note: "divide by the number of mounts" },
                { label: "Check static deflection mg/k", note: "soft mounts sag more" },
                { label: "Audit rocking modes and start-up", note: "the machine still crosses r = 1" },
              ],
            },
            callout: {
              type: "tip",
              title: "Rubber damping is your friend - until r > sqrt(2)",
              body: "For a target of 10 percent at r = 3.3, the difference between zeta = 0 and zeta = 0.1 in TR is a few percent - the undamped formula is a legitimate first pass. But never state 'more damping improves isolation': beyond r = sqrt(2) the opposite is true, and examiners specifically test it.",
            },
            keyTerms: [
              { term: "Vibration isolator", definition: "A resilient element - spring, rubber mount or pad - interposed to reduce transmitted force or motion." },
              { term: "Static deflection", definition: "The isolator's compression under the machine's weight; fn = (1/2 pi) sqrt(g/delta_st)." },
              { term: "Inertia block", definition: "A massive base added to a machine to lower the mounted natural frequency without softening the isolators." },
            ],
            examQuestions: [
              {
                q: "A 100 kg machine running at 2400 rpm must transmit no more than 10 percent of the applied force to the floor. Design the isolation: find the frequency ratio, required natural frequency, total mount stiffness and static deflection, and verify that isolation occurs.",
                marks: 7,
                outline: [
                  "Convert speed: w = 2 pi (2400/60) = 251.3 rad/s.",
                  "Undamped equation TR = 1/(r^2 - 1) with TR = 0.1.",
                  "Solve r = sqrt(1 + 1/0.1) = sqrt(11) = 3.32.",
                  "Required wn = w/r = 75.8 rad/s (about 12 Hz).",
                  "Total stiffness k = m wn^2 = 5.75 x 10^5 N/m.",
                  "Static deflection mg/k ≈ 1.7 mm - accommodate in design.",
                  "Verify r = 3.32 > sqrt(2): isolation confirmed; note damping's small effect here.",
                ],
              },
              {
                q: "State two practical reasons for mounting machines on inertia blocks.",
                marks: 2,
              },
              {
                q: "A 50 kg instrument must experience no more than 20 percent of base motion at 30 Hz. Estimate the maximum allowable mount stiffness.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Whirling of shafts and critical speed",
            body: [
              "A rotating shaft carrying a disc whose centre of mass sits a small distance e from the geometric centre - eccentricity is never zero - experiences a rotating force of magnitude m e w^2 at frequency w: the rotating unbalance. The shaft deflects, and the disc orbits the bearing line: this is whirling. The deflection follows y = e r^2 / sqrt((1 - r^2)^2 + (2 zeta r)^2) with r = w/wc, where wc = sqrt(k_shaft/m) is the natural frequency of the shaft-and-disc in transverse bending. The formula is the magnification factor wearing different clothes, with the excitation itself growing as w^2.",
              "At the critical speed w = wc the deflection peaks at e/(2 zeta) - bounded only by damping and the residual unbalance, which is why balancing (Unit V) and critical-speed margins are the two defences. The phase story is the memorable part. Below the critical speed the heavy side of the disc flies outward (deflection roughly in phase with the eccentricity); above it the disc self-centres: the deflection falls back toward e with the light side out, a 180-degree phase reversal identical to the forced-response phase swing of section 3.1. Long transmission shafts, steam turbines and centrifuges routinely operate supercritically - they simply accelerate briskly through the peak.",
              "Computing the critical speed is a beam-stiffness exercise from Unit I: for a simply supported shaft of length L carrying a central disc, k = 48EI/L^3, so wc = sqrt(48EI/(m L^3)). With several discs, Rayleigh and Dunkerley (section 2.2) bound the lowest critical speed exactly as they bound any other natural frequency. Design practice keeps steady operating speeds at least 20-30 percent away from any critical speed; where passage is unavoidable - spin-up of centrifuges - damping and rapid run-up limit the dwell. Note the distinct phenomenon of torsional critical speed, where the same logic applies to the torsional modes of shaft trains.",
            ],
            bullets: [
              "Whirl amplitude: y = e r^2 / sqrt((1 - r^2)^2 + (2 zeta r)^2) with r = w/wc - unbalance is the excitation.",
              "Critical speed wc equals the transverse natural frequency: wc = sqrt(k_shaft/m).",
              "Simply supported shaft, central disc: k = 48EI/L^3, so wc = sqrt(48EI/(m L^3)).",
              "Below wc the heavy side runs out; above wc the disc self-centres and whirl falls toward e.",
              "Design rule: stay 20-30 percent away from wc, or pass through the peak quickly at start-up.",
            ],
            table: {
              caption: "The three whirl regions.",
              headers: ["Region", "Speed band", "Disc attitude", "Whirl amplitude"],
              rows: [
                ["Subcritical", "w < 0.7 wc", "heavy side outside", "growing toward the peak"],
                ["Critical", "w ≈ wc", "phase lags 90 deg", "peak: y ≈ e/(2 zeta)"],
                ["Supercritical", "w > 1.4 wc", "self-centred, light side out", "falling, approaching e"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Whirling from spin-up to cruise",
              caption: "The life history of every supercritical shaft - pass the peak, then enjoy the calm.",
              stages: [
                { label: "Spin-up: w well below wc", note: "small bow, heavy side outside" },
                { label: "Approach wc", note: "bow grows, phase swings" },
                { label: "At the critical speed", note: "peak deflection e/(2 zeta); pass quickly" },
                { label: "Supercritical cruise", note: "self-centring; deflection below e" },
              ],
            },
            callout: {
              type: "warning",
              title: "e is never zero",
              body: "Even a balanced rotor has residual eccentricity, so whirl never vanishes - balancing (Unit V) shrinks e and therefore the peak e/(2 zeta), but only a critical-speed margin or rapid passage removes the danger. Answers that claim 'a balanced shaft cannot whirl' lose the definition mark immediately.",
            },
            keyTerms: [
              { term: "Whirling", definition: "The orbiting deflection of a rotating shaft about the bearing line under rotating unbalance." },
              { term: "Critical speed", definition: "The shaft speed equal to the transverse natural frequency of the shaft-disc system, at which whirl peaks." },
              { term: "Self-centring", definition: "The supercritical tendency of a rotating disc to spin about its centre of mass, reducing whirl deflection." },
            ],
            examQuestions: [
              {
                q: "Explain the phenomenon of whirling of a rotating shaft. Derive the whirl amplitude for a shaft carrying a disc of eccentricity e, define the critical speed, and describe subcritical and supercritical operation.",
                marks: 7,
                outline: [
                  "Setup: disc mass m, eccentricity e, shaft transverse stiffness k_shaft.",
                  "Rotating unbalance force m e w^2 at frequency w drives the transverse response.",
                  "Derive y = e r^2 / sqrt((1 - r^2)^2 + (2 zeta r)^2) with r = w/wc.",
                  "Critical speed wc = sqrt(k_shaft/m); for a simply supported central disc, k = 48EI/L^3.",
                  "At w = wc: y = e/(2 zeta), phase lag 90 deg - bounded only by damping.",
                  "Subcritical: heavy side out, deflection rising; supercritical: self-centring, deflection toward e.",
                  "Design practice: 20-30 percent margin or rapid passage; balancing reduces e.",
                ],
              },
              {
                q: "Define critical speed of a shaft. On which parameters does it depend?",
                marks: 2,
              },
              {
                q: "A simply supported shaft 1 m long with EI = 2000 N-m^2 carries a 20 kg disc at mid-span. Estimate the critical speed in rpm.",
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
      title: "Multi-Degree-of-Freedom Systems",
      summary:
        "The system scaled up: matrix equations of motion for two-DOF systems and their coupling, the eigenvalue problem and its natural frequencies, mode shapes and their nodes, the orthogonality that makes modes independent, and modal analysis - mode superposition - for the forced response.",
      chapter: {
        number: "04",
        title: "Multi-DOF Systems",
        intro:
          "Unit IV admits that one coordinate is rarely enough: the two-mass three-spring archetype and its matrix equation, the eigenvalue problem that yields natural frequencies, the mode shapes that come attached to them, the orthogonality property that makes the modes independent building blocks, and the modal-analysis procedure that converts a coupled n-DOF problem into n single-DOF problems solved with Unit III tools.",
        inOneBreath:
          "Two-DOF systems live in M x'' + C x' + K x = F with the coupling spring contributing -k2 off-diagonal and +k2 to both diagonal stiffness terms; assuming x = X e^{i w t} leads to det(K - w^2 M) = 0 and as many natural frequencies as degrees of freedom - for equal masses m with outer springs k and coupling kc, w1 = sqrt(k/m) and w2 = sqrt((k + 2 kc)/m); each frequency owns a mode shape, in phase for the first and antiphase with a node for the second; modes are orthogonal, X_i^T M X_j = X_i^T K X_j = 0 for i not equal to j, with modal mass m_i* = X_i^T M X_i and modal stiffness k_i* = w_i^2 m_i*; and modal analysis transforms to modal coordinates where each mode responds as an independent SDOF oscillator before superposition and truncation reassemble the answer.",
        sections: [
          {
            number: "4.1",
            title: "Two-DOF systems: equations of motion and coupling",
            body: [
              "The archetype of this unit is two masses connected to fixed walls by springs k1 and k3 and to each other by a coupling spring k2. Free-body diagrams for each mass in its positive coordinate position give m1 x1'' = -k1 x1 - k2(x1 - x2) + F1 and m2 x2'' = -k3 x2 - k2(x2 - x1) + F2. Written in matrix form these become M x'' + C x' + K x = F, where M is diagonal with m1 and m2, and K carries k1 + k2 and k2 + k3 on its diagonal with -k2 in both off-diagonal slots - the coupling spring's signature, appearing twice because it is pulled by both masses.",
              "The off-diagonal entries are the mathematical meaning of coupling, and the coordinate choice decides where the coupling lands. Coupling that lives in K is static or stiffness coupling: hold one mass still and the other still feels the first's spring. Coupling that lives in M is dynamic or mass coupling, typical when coordinates mix translation and rotation. The classic illustration is a vehicle body in bounce and pitch: choosing coordinates at the centre of gravity gives an uncoupled mass matrix but coupled stiffness (unless the spring rates are symmetric), while choosing coordinates over one axle swaps the roles. Principal coordinates - the modal coordinates of sections 4.4 and 4.5 - decouple both matrices simultaneously.",
              "Two-DOF models earn their keep wherever two elastic bodies interact: a machine on a flexible foundation (machine and foundation are the two masses), a vehicle in bounce and pitch, a two-storey shear building, a rotor and its casing. The matrix machinery written here scales without change to n degrees of freedom - the mass and stiffness matrices simply grow - which is why the discipline of assembling M and K element by element, as the table below tabulates, is worth practising now on systems you can still check by hand.",
            ],
            bullets: [
              "Two DOF = two coupled second-order equations, best written as M x'' + C x' + K x = F(t).",
              "The middle spring k2 contributes -k2 to both off-diagonal terms of K and +k2 to both diagonal terms.",
              "Stiffness (static) coupling lives in K; mass (dynamic) coupling lives in M - coordinate choice decides.",
              "Principal coordinates exist that make both M and K diagonal - the mode shapes of sections 4.2-4.4.",
              "Vehicle bounce-pitch and machine-on-flexible-frame are the standard exam exemplars.",
            ],
            table: {
              caption: "Element-by-element assembly of the two-mass three-spring matrices.",
              headers: ["Element", "Matrix entry", "Contribution"],
              rows: [
                ["Mass m1", "M11", "m1"],
                ["Mass m2", "M22", "m2"],
                ["Spring k1 (wall to m1)", "K11", "+k1"],
                ["Spring k2 (m1 to m2)", "K12 = K21", "-k2, and +k2 to both diagonals"],
                ["Spring k3 (m2 to wall)", "K22", "+k3"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a two-DOF model",
              caption: "The four layers every multi-DOF problem is built from.",
              layers: [
                { label: "Coordinates x1, x2", note: "one per mass, positive to the right" },
                { label: "Mass matrix M = diag(m1, m2)", note: "no coupling here" },
                { label: "Stiffness matrix K", note: "off-diagonal -k2 is the coupling" },
                { label: "Matrix EOM: M x'' + C x' + K x = F", note: "damping slots in beside K" },
                { label: "Next: eigenproblem, modes, modal analysis", note: "sections 4.2 to 4.5" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sign discipline in K",
              body: "The single most common two-DOF error is a wrong sign on the coupling term. Rule: a spring connecting two coordinates contributes -k to both off-diagonal positions and +k to both diagonal positions. Write the two free-body equations first, then read the matrix from them - never assemble K from memory alone.",
            },
            keyTerms: [
              { term: "Coupling", definition: "Interaction between coordinates through off-diagonal matrix terms, transmitted by springs (static) or inertia (dynamic)." },
              { term: "Mass matrix M", definition: "Symmetric matrix of inertia coefficients relating accelerations to inertial forces." },
              { term: "Stiffness matrix K", definition: "Symmetric matrix of stiffness coefficients; diagonal terms sum springs acting on each coordinate." },
            ],
            examQuestions: [
              {
                q: "Derive the equations of motion of a two-mass three-spring system, write them in matrix form, and explain the terms responsible for static and dynamic coupling, with one example of each from vehicle vibration.",
                marks: 7,
                outline: [
                  "Draw FBDs for both masses at positive x1, x2.",
                  "Write m1 x1'' = -k1 x1 - k2(x1 - x2) + F1 and the analogous equation for m2.",
                  "Arrange into M x'' + K x = F; identify M and K element by element.",
                  "Point to the -k2 off-diagonal terms as the coupling.",
                  "Define static (stiffness) and dynamic (mass) coupling.",
                  "Vehicle example: coordinates at CG give stiffness coupling; over-axle coordinates swap it.",
                  "State that principal coordinates diagonalise both matrices.",
                ],
              },
              {
                q: "Write the stiffness matrix for two masses connected only to each other by a spring k (no wall springs).",
                marks: 2,
              },
              {
                q: "Explain static and dynamic coupling, and state what is meant by principal coordinates.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "The eigenvalue problem: finding the natural frequencies",
            body: [
              "For free, undamped vibration the matrix equation becomes M x'' + K x = 0, and the trial x = X e^{i w t} converts it into an algebraic condition: (K - w^2 M) X = 0. A vector of all zeros is a trivial solution; non-trivial mode shapes exist only when the matrix is singular, det(K - w^2 M) = 0. This is the frequency equation - the eigenvalue problem of the system - and for two degrees of freedom it is a quadratic in w^2 whose two positive roots are the natural frequencies w1 <= w2.",
              "The archetype solves in half a page and deserves memorising. For two equal masses m, outer springs k and coupling spring kc, the determinant expands to (2k + kc - m w^2)(k + kc - m w^2) - kc^2 = 0... and factors neatly into w1 = sqrt(k/m) and w2 = sqrt((k + 2 kc)/m). The physics behind the algebra: in mode 1 the masses move together, the coupling spring never changes length, and the system behaves as two independent mass-spring pairs at sqrt(k/m); in mode 2 the masses move oppositely, the coupling spring stretches at double rate, adding 2kc of apparent stiffness. With m = 1 kg, k = 100 N/m, kc = 50 N/m the frequencies are 10 and 14.14 rad/s.",
              "Everything generalises: the eigenvalues of M^-1 K are exactly the w^2 values, real and positive for any conservative system, and an n-DOF system yields n of them. One special case deserves notice: a zero eigenvalue means a rigid-body mode, a motion with no restoring force - two masses connected by one spring floating in space, or a free-free shaft. These semidefinite systems need a shift or a constraint before standard eigenroutines behave. The code below computes both frequencies and shapes with numpy; the next section reads the shapes it prints.",
            ],
            bullets: [
              "Assume x = X e^{i w t}: the eigenproblem (K - w^2 M) X = 0.",
              "Non-trivial shapes require det(K - w^2 M) = 0 - the frequency equation.",
              "Archetype: equal masses, outer springs k, coupling kc: w1 = sqrt(k/m), w2 = sqrt((k + 2 kc)/m).",
              "Eigenvalues of M^-1 K are the squares w^2 - real and positive for conservative systems.",
              "A zero eigenvalue flags a rigid-body mode (semidefinite system), e.g. two free masses on one spring.",
            ],
            codeExample: {
              language: "python",
              caption: "Natural frequencies and mode shapes of the two-mass three-spring model.",
              code: `import numpy as np

m1 = m2 = 1.0      # kg
k1 = k3 = 100.0    # N/m (outer springs)
k2 = 50.0          # N/m (coupling spring)

M = np.array([[m1, 0.0], [0.0, m2]])
K = np.array([[k1 + k2, -k2],
              [-k2, k2 + k3]])

# Eigenvalues of M^-1 K are the squared natural frequencies
lam, modes = np.linalg.eig(np.linalg.solve(M, K))

for i in np.argsort(lam):
    w = lam[i] ** 0.5
    shape = modes[:, i] / modes[0, i]     # normalise first entry to 1
    print(f"w = {w:6.3f} rad/s   mode shape = {shape.round(3)}")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The eigenvalue route",
              caption: "From harmonic assumption to frequencies in five stations - the spine of Unit IV.",
              stages: [
                { label: "Assume x = X e^{i w t}", note: "free, undamped motion" },
                { label: "Eigenequation (K - w^2 M) X = 0" },
                { label: "Frequency equation det(K - w^2 M) = 0" },
                { label: "Roots: w1 <= w2", note: "quadratic in w^2 for 2-DOF" },
                { label: "Back-substitute for shapes X1, X2", note: "the next section" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sanity-check every eigen-solve",
              body: "Two cheap checks catch most errors: the trace of M^-1 K must equal w1^2 + w2^2, and mode 1 must be the lower frequency. For the archetype, w2/w1 = sqrt(1 + 2 kc/k) - always greater than 1 and increasing with coupling stiffness, a relation worth quoting in exams.",
            },
            keyTerms: [
              { term: "Eigenvalue problem", definition: "The equation (K - w^2 M) X = 0 whose eigenvalues are squared natural frequencies." },
              { term: "Frequency equation", definition: "det(K - w^2 M) = 0, the singularity condition for non-trivial mode shapes." },
              { term: "Rigid-body mode", definition: "A zero-frequency mode with no restoring force, arising in semidefinite systems." },
            ],
            examQuestions: [
              {
                q: "Derive the frequency equation of a free two-DOF system and solve it for two equal masses m connected to walls by springs k and to each other by kc, interpreting both natural frequencies physically.",
                marks: 7,
                outline: [
                  "Start from M x'' + K x = 0 with M = m I and K assembled element by element.",
                  "Assume x = X e^{i w t} to obtain (K - w^2 M) X = 0.",
                  "Singularity condition det(K - w^2 M) = 0; expand the determinant.",
                  "Solve the quadratic in w^2: w1 = sqrt(k/m), w2 = sqrt((k + 2 kc)/m).",
                  "Interpret mode 1: masses in phase, coupling spring idle.",
                  "Interpret mode 2: masses antiphase, coupling spring stretching at double rate.",
                  "Numerical check with m = 1 kg, k = 100 N/m, kc = 50 N/m: 10 and 14.14 rad/s.",
                ],
              },
              {
                q: "State the eigenvalue problem for free undamped MDOF vibration in one line.",
                marks: 2,
              },
              {
                q: "For the archetype with m = 2 kg, k = 200 N/m and kc = 100 N/m, compute both natural frequencies.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Mode shapes: the geometry of vibration",
            body: [
              "Each natural frequency arrives with an attached mode shape: the vector X of relative amplitudes obtained by back-substituting w^2 into (K - w^2 M) X = 0. Only the ratio of components is defined - the shape [1, 1] and [5, 5] are the same mode - so shapes are reported normalised, with the first component set to 1. For the archetype, mode 1 is [1, 1]: both masses moving in phase by the same amount. Mode 2 is [1, -1]: equal and opposite motion, and between the masses lies a node - a point that never moves.",
              "The geometry carries the physics. The fundamental mode has the lowest frequency, no interior node, and coordinates in phase; every higher mode adds a node and gains frequency, because the coupling elements deform more and store more strain energy for the same peak amplitude. In the two-storey shear building of the code below, the first mode is [1, 1.618] - both floors drifting the same way with the upper one moving further - while the second is [1, -0.618], the floors opposing each other with a node between them. The same patterns appear in coupled pendulums (in phase and antiphase) and in a car's bounce and pitch modes; sketching arrows and marking the node is expected in exam answers.",
              "Mode shapes are the vocabulary of every MDOF answer that follows. Any free motion is a mixture: x(t) = X1 q1(t) + X2 q2(t), with the initial conditions setting the recipe of how much of each mode is present. Experimental modal analysis measures exactly the quantities of this section and the previous one - frequencies from peak picking, shapes from a roving accelerometer - and orthogonality (next section) is what makes the mixture well behaved, guaranteeing that energy poured into one mode does not leak into another.",
            ],
            bullets: [
              "Each natural frequency carries a fixed amplitude ratio X2/X1 - the mode shape; only the ratio is defined.",
              "Mode 1 (fundamental): lowest frequency, coordinates in phase, no interior node.",
              "Mode 2: antiphase, one node where the motion passes through zero.",
              "More deformation of the coupling means more strain energy and a higher frequency.",
              "Any free motion is a blend of modes: x = X1 q1 + X2 q2; initial conditions set the recipe.",
            ],
            codeExample: {
              language: "python",
              caption: "Mode shapes of a two-storey shear building - the golden-ratio pair.",
              code: `import numpy as np

m = 1000.0            # kg per floor
k = 1.0e6             # N/m storey stiffness
M = np.array([[m, 0.0], [0.0, m]])
K = np.array([[2.0 * k, -k],
              [-k, k]])

lam, X = np.linalg.eig(np.linalg.solve(M, K))

for i in np.argsort(lam):
    w = lam[i] ** 0.5
    shape = X[:, i] / X[:, i][0]     # normalise top-floor entry to 1
    print(f"w = {w:6.2f} rad/s   mode shape = {shape.round(3)}")
# prints [1.000, 1.618] and [1.000, -0.618]`,
            },
            diagram: {
              kind: "compare",
              title: "Mode 1 versus mode 2",
              caption: "The two shapes every two-DOF system offers - drawn as arrow pairs in exams.",
              left: {
                heading: "Mode 1 (fundamental)",
                items: [
                  "Lowest frequency w1",
                  "In phase: X2/X1 > 0",
                  "Coupling spring barely works",
                  "No interior node",
                ],
              },
              right: {
                heading: "Mode 2",
                items: [
                  "Higher frequency w2",
                  "Antiphase: X2/X1 < 0",
                  "Coupling spring deforms hardest",
                  "One interior node - zero motion",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Sketch shapes as labelled arrows",
              body: "A mode-shape answer earns its marks as a drawing: two columns of arrows, lengths in the shape ratio, directions for the sign, and the node marked with a cross and the word 'node'. Add the frequency beside each sketch. The picture rescues partial algebra and is explicitly looked for by markers.",
            },
            keyTerms: [
              { term: "Mode shape", definition: "The pattern of relative amplitudes with which a system vibrates at a given natural frequency; scale is arbitrary." },
              { term: "Node", definition: "A point or cross-section of zero motion in a given mode shape." },
              { term: "Fundamental mode", definition: "The lowest-frequency mode; no interior nodes, coordinates broadly in phase." },
            ],
            examQuestions: [
              {
                q: "Explain mode shapes and nodes. For a two-storey shear building with equal floor masses m and storey stiffnesses k, derive both natural frequencies and sketch and describe both mode shapes.",
                marks: 7,
                outline: [
                  "Define a mode shape as the amplitude ratio attached to each natural frequency.",
                  "Assemble M and K for the shear building; note the eigenproblem.",
                  "Frequency equation gives w1^2 = 0.382 k/m and w2^2 = 2.618 k/m.",
                  "Mode 1: [1, 1.618] - both floors in phase, upper floor moving further.",
                  "Mode 2: [1, -0.618] - floors in antiphase, node between the storeys.",
                  "Sketch arrows with lengths in ratio; mark the node.",
                  "Note: more storey deformation in mode 2 explains its higher frequency.",
                ],
              },
              {
                q: "Define a node in a mode shape and state where it lies for the second mode of a two-mass system.",
                marks: 2,
              },
              {
                q: "Why does the second mode of a two-DOF system always have a higher frequency than the first?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Orthogonality of modes and modal quantities",
            body: [
              "Natural modes of an undamped system are not just different - they are perpendicular in a weighted sense. The orthogonality property states X_i^T M X_j = 0 and X_i^T K X_j = 0 whenever i and j differ. The proof is two lines: write the eigenproblem for mode i, premultiply by X_j^T; write it for mode j, premultiply by X_i^T; subtract, and the symmetric-matrix products cancel, leaving (w_i^2 - w_j^2) X_i^T M X_j = 0, so for distinct frequencies the weighted product must vanish. Distinct frequencies, note - repeated roots need extra care.",
              "With i = j the products are nonzero and earn names: modal mass m_i* = X_i^T M X_i and modal stiffness k_i* = X_i^T K X_i = w_i^2 m_i*. For the archetype's shapes [1, 1] and [1, -1] with M = diag(m, m), both modal masses equal 2m; the modal stiffnesses are 2k and 2(k + 2kc), reproducing the section 4.2 frequencies exactly - the table below verifies every entry. Because the shape scale is arbitrary, modal quantities vary with normalisation; the standard choice is mass normalisation, scaling each X_i so that m_i* = 1, which turns the modal stiffness matrix into simply diag(w_i^2).",
              "Orthogonality is the property the whole subject runs on. Physically, it says modes are independent energy channels: work done on one mode stores energy only in that mode, and there is no leakage between them. Mathematically, it underwrites the expansion theorem - any configuration of the system can be written uniquely as a sum of modal contributions - and it is precisely what decouples the equations in the next section's modal analysis. The same orthogonality will reappear in Unit V as the orthogonality of continuous eigenfunctions over the length of a string or beam.",
            ],
            bullets: [
              "Orthogonality: X_i^T M X_j = 0 and X_i^T K X_j = 0 whenever i and j differ.",
              "Proof in two lines: write the eigenproblem twice, premultiply crosswise, subtract.",
              "Modal mass m_i* = X_i^T M X_i; modal stiffness k_i* = w_i^2 m_i*.",
              "Mass-normalise (m_i* = 1) and the modal stiffness matrix becomes diag(w_i^2).",
              "Expansion theorem: any motion is a unique sum of modal contributions - the license for modal analysis.",
            ],
            table: {
              caption: "Orthogonality check on the archetype: X1 = [1, 1], X2 = [1, -1], M = m I.",
              headers: ["Quantity", "Value", "Meaning"],
              rows: [
                ["X1^T M X1", "2m", "modal mass of mode 1"],
                ["X2^T M X2", "2m", "modal mass of mode 2"],
                ["X1^T M X2", "0", "modes are M-orthogonal"],
                ["X1^T K X1", "2k", "modal stiffness = w1^2 m1*"],
                ["X1^T K X2", "0", "modes are K-orthogonal"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "What orthogonality buys",
              caption: "Each layer is a consequence of the one above it - the stack ends in modal analysis.",
              layers: [
                { label: "X_i^T M X_j = 0 for i not equal to j", note: "and the same for K" },
                { label: "Modal mass and stiffness become diagonal", note: "in modal coordinates" },
                { label: "n coupled equations become n independent SDOF equations" },
                { label: "Each mode responds as its own oscillator", note: "no energy leakage" },
                { label: "Truncate: keep the low modes that matter", note: "the engineer's shortcut" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two-line proof is a guaranteed mark",
              body: "Orthogonality questions expect the crosswise-premultiply-subtract derivation, not just the statement. Write both eigenproblems, premultiply each by the other mode, subtract, cite symmetry of M and K, and conclude (w_i^2 - w_j^2) X_i^T M X_j = 0. Ten seconds of writing, one full mark.",
            },
            keyTerms: [
              { term: "Orthogonality", definition: "Property that distinct modes satisfy X_i^T M X_j = X_i^T K X_j = 0." },
              { term: "Modal mass", definition: "The quantity X_i^T M X_i; depends on the arbitrary scaling of the mode shape." },
              { term: "Mass normalisation", definition: "Scaling each mode so that its modal mass equals 1, making the modal stiffness matrix diag(w_i^2)." },
            ],
            examQuestions: [
              {
                q: "State and prove the orthogonality property of natural modes with respect to the mass and stiffness matrices, define modal mass and modal stiffness, and explain mass normalisation and its consequence.",
                marks: 7,
                outline: [
                  "State X_i^T M X_j = 0 and X_i^T K X_j = 0 for i not equal to j.",
                  "Write (K - w_i^2 M) X_i = 0 and premultiply by X_j^T.",
                  "Write (K - w_j^2 M) X_j = 0 and premultiply by X_i^T.",
                  "Subtract; use symmetry of M and K to cancel the K terms.",
                  "Conclude (w_i^2 - w_j^2) X_i^T M X_j = 0, hence orthogonality for distinct frequencies.",
                  "Define m_i* = X_i^T M X_i and k_i* = w_i^2 m_i*.",
                  "Mass normalisation sets m_i* = 1, so the modal stiffness matrix becomes diag(w_i^2).",
                ],
              },
              {
                q: "State the expansion theorem for an undamped MDOF system.",
                marks: 2,
              },
              {
                q: "For X1 = [1, 1] and X2 = [1, -1] with M = diag(m, m), verify X1^T M X2 = 0 and compute both modal masses.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Modal analysis: mode superposition for the forced response",
            body: [
              "Modal analysis is the payoff of the previous two sections. Express the response as a sum of modal contributions, x = P q, where the columns of P are the mode shapes and q collects the modal coordinates. Premultiplying M x'' + C x' + K x = F by P^T exploits orthogonality: the transformed matrices P^T M P and P^T K P are diagonal, so the coupled system splits into independent modal equations m_i* q_i'' + c_i* q_i' + k_i* q_i = f_i*(t), where f_i* = X_i^T F. Each mode is now a single-degree-of-freedom oscillator to be solved with the Unit III toolkit.",
              "Damping enters per mode as a modal damping ratio zeta_i - typically 2 to 5 percent for welded and bolted structures - which is both the strength and the approximation of the method: it sidesteps the awkward question of the true damping distribution, and for lightly damped structures it matches measurements well. The superposed answer x = sum over modes of X_i q_i is exact if all modes are kept. The practical magic is truncation: because forcing lives at finite frequencies and structures respond most flexibly in their low modes, keeping the first few modes - as a rule, those below about twice the highest forcing frequency - captures the response to a few percent.",
              "The code below demonstrates the whole pipeline on the archetype under a static force on mass 1: the two modal responses are computed independently and superposed, and the sum reproduces the direct solve K^-1 F exactly. Scaled up with software, the identical procedure drives earthquake response-spectrum analysis of buildings, turbine-blade cascades and vehicle body-in-white models - thousands of degrees of freedom solved as a few dozen one-DOF problems. For the exam, the procedure is the answer: transform, decouple, solve each mode, superpose, truncate.",
            ],
            bullets: [
              "Transform x = P q, with columns of P the mode shapes; q are the modal coordinates.",
              "Premultiply by P^T: P^T M P and P^T K P are diagonal - orthogonality at work.",
              "Each modal equation is an SDOF oscillator: m_i* q_i'' + k_i* q_i = X_i^T F, solved with Unit III tools.",
              "Modal damping: assign each mode its own zeta_i (2-5 percent typical for structures).",
              "Truncate: keep modes below about twice the highest forcing frequency; superpose the rest away.",
            ],
            codeExample: {
              language: "python",
              caption: "Modal superposition cross-checked against the direct solve for a static force.",
              code: `import numpy as np

m, k, kc = 1.0, 100.0, 50.0
M = np.array([[m, 0.0], [0.0, m]])
K = np.array([[k + kc, -kc], [-kc, kc]])
F = np.array([10.0, 0.0])           # N, static force on mass 1

lam, P = np.linalg.eig(np.linalg.solve(M, K))

x = np.zeros(2)
for i in np.argsort(lam):
    Xi = P[:, i]
    fi = Xi @ F          # modal force
    ki = Xi @ K @ Xi     # modal stiffness
    qi = fi / ki         # modal response (static case)
    x += Xi * qi
    print(f"w = {lam[i] ** 0.5:6.3f} rad/s   q = {qi:7.4f}")

print("modal sum x  =", x.round(4))
print("direct K^-1F =", np.linalg.solve(K, F).round(4))`,
            },
            diagram: {
              kind: "flow",
              title: "Mode-superposition workflow",
              caption: "Divide, conquer, recombine - the algorithm behind every large dynamic analysis.",
              steps: [
                { label: "Solve the eigenproblem: w_i and X_i" },
                { label: "Transform: x = sum X_i q_i", note: "modal coordinates" },
                { label: "Premultiply by X_i^T: decoupled modal equations" },
                { label: "Solve each modal SDOF", note: "free, forced or damped" },
                { label: "Superpose - and truncate the high modes", note: "keep the modes that matter" },
              ],
            },
            callout: {
              type: "tip",
              title: "The procedure is the answer",
              body: "Modal-analysis questions are marked on the sequence, not on heroic algebra: write the transform, show the diagonalisation by quoting orthogonality, present the decoupled modal equation, solve it, and state the superposition sum. Naming the truncation criterion and modal damping earns the last mark every time.",
            },
            keyTerms: [
              { term: "Modal analysis", definition: "Solution procedure that transforms coupled equations to modal coordinates, solves each mode as an SDOF system and superposes." },
              { term: "Modal coordinates", definition: "Generalised coordinates q_i, one per mode, describing how much of each mode shape is present." },
              { term: "Truncation", definition: "Discarding higher modes whose contribution to the response is negligible above the forcing band." },
            ],
            examQuestions: [
              {
                q: "Explain the method of modal analysis (mode superposition) for a two-DOF system under arbitrary forcing. Show how orthogonality decouples the equations, outline the solution steps, and mention modal damping and truncation.",
                marks: 7,
                outline: [
                  "Assume the response as x = X1 q1 + X2 q2 (the modal transform).",
                  "Substitute into M x'' + K x = F and premultiply by X_i^T.",
                  "Quote orthogonality: cross terms vanish; obtain m_i* q_i'' + k_i* q_i = X_i^T F.",
                  "Each modal equation is an SDOF system - solve with Unit III results.",
                  "Superpose: x = sum X_i q_i(t).",
                  "Modal damping: assign zeta_i per mode (2-5 percent typical).",
                  "Truncation: retain modes below about twice the highest forcing frequency.",
                ],
              },
              {
                q: "What are modal coordinates, and why are they preferable to physical coordinates?",
                marks: 2,
              },
              {
                q: "Why can higher modes usually be truncated in a forced-response analysis? State a practical retention criterion.",
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
      title: "Continuous Systems and Vibration Control",
      summary:
        "The distributed world and the practical one: wave equations for strings, bars and shafts with their infinite mode ladders, transverse vibration of beams, vibration measurement with accelerometers and FFT, control with tuned absorbers and dampers, and the balancing and case studies that close the subject.",
      chapter: {
        number: "05",
        title: "Continuous Systems and Vibration Control",
        intro:
          "Unit V drops the lumped assumption and finishes the story: the wave equation and its three physical disguises - string, bar and shaft - the fourth-order Euler-Bernoulli beam, the measurement chain from accelerometer to FFT, the tuned absorbers and dampers that fight resonance after the design is frozen, and the balancing and case studies that anchor the whole subject in rotating machinery.",
        inOneBreath:
          "Strings, bars and shafts share c^2 u_xx = u_tt with c = sqrt(T/mu), sqrt(E/rho) and sqrt(G/rho), giving w_n = n pi c / L for fixed-fixed ends and an infinite mode ladder from separation of variables; Euler-Bernoulli beams satisfy E I Y'''' = rho A w^2 Y with w_n = (beta_n L)^2 sqrt(EI/(rho A L^4)) and beta_1 L = pi for simply supported, 1.875 for a cantilever, 4.730 for fixed-fixed; the measurement chain runs accelerometer, charge amplifier, anti-alias filtering, sampling above twice the highest frequency and FFT, with 1x spectral peaks flagging unbalance; undamped absorbers tune w_a = sqrt(k_a/m_a) to the excitation so the primary stands still, while damped tuned mass dampers follow Den Hartog's f = 1/(1 + mu) and zeta = sqrt(3 mu/(8(1 + mu)^3)); and balancing removes the unbalance that drives it all, monitored through condition monitoring.",
        sections: [
          {
            number: "5.1",
            title: "Continuous systems: string, bar and shaft",
            body: [
              "When mass and stiffness are distributed rather than lumped, the system has infinitely many degrees of freedom and a partial differential equation replaces the matrix equation. Three classical one-dimensional members share one mathematics. The taut string in transverse motion obeys T y_xx = mu y_tt, where T is tension and mu mass per length; the rod in longitudinal vibration obeys E A u_xx = rho A u_tt; and the shaft in torsion obeys G theta_xx = rho theta_tt. Each has the wave-equation form c^2 u_xx = u_tt with wave speed c = sqrt(T/mu), sqrt(E/rho) and sqrt(G/rho) respectively.",
              "Separation of variables, u(x, t) = U(x) T(t), splits the PDE into a spatial sine-cosine problem and a harmonic time problem. The boundary conditions then quantise the frequencies: a string fixed at both ends must vanish at x = 0 and x = L, so U = sin(n pi x/L) and w_n = n pi c / L - the fundamental plus integer multiples, the harmonic series a guitar string actually plays. A member fixed at one end and free at the other permits only odd quarter-waves, w_n = (2n - 1) pi c / (2L). Every member thus possesses a denumerable infinity of modes, each with its own shape and frequency.",
              "The continuous view completes the modelling ladder of Unit I: lumped n-DOF models are approximations whose low modes converge to the continuous member's low modes as the number of elements grows - which is exactly why Rayleigh and Dunkerley, built from static deflection shapes, bracket the first continuous frequency so well. Engineering appearances are everywhere: the pitch of a guitar string (tighten T or shorten L and w_1 rises), surge in long push rods and drill strings, and torsional oscillations of drive lines, where the shaft's distributed torsional dynamics couple with the reflected inertias of Unit I to set torsional critical speeds.",
            ],
            bullets: [
              "All three members share the wave equation c^2 u_xx = u_tt with c the wave speed.",
              "String c = sqrt(T/mu); rod c = sqrt(E/rho); shaft c = sqrt(G/rho) - one mathematics, three physicses.",
              "Separation u = U(x) T(t) turns the PDE into a spatial sine/cosine problem plus a harmonic time part.",
              "Boundary conditions quantise the spectrum: fixed-fixed w_n = n pi c/L; fixed-free (2n - 1) pi c/(2L).",
              "Infinite ladder of modes n = 1, 2, ... - lumped models approximate only the first few.",
            ],
            table: {
              caption: "The three classical continuous systems.",
              headers: ["Member", "Motion", "Wave speed c", "Fixed-fixed w_n", "Typical hardware"],
              rows: [
                ["Taut string", "transverse", "sqrt(T/mu)", "n pi c / L", "guitar string, belt"],
                ["Rod (bar)", "longitudinal", "sqrt(E/rho)", "n pi c / L", "push rod, drill string"],
                ["Shaft", "torsional", "sqrt(G/rho)", "n pi c / L", "drive line, propeller shaft"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From PDE to natural frequencies",
              caption: "The five stages every continuous-system derivation marches through.",
              stages: [
                { label: "Write the PDE for the member", note: "string, bar or shaft" },
                { label: "Separate u(x, t) = U(x) T(t)", note: "spatial times temporal" },
                { label: "Apply boundary conditions to U(x)" },
                { label: "Characteristic equation quantises w_n" },
                { label: "Mode shapes U_n(x); infinite spectrum", note: "n = 1, 2, 3, ..." },
              ],
            },
            callout: {
              type: "exam",
              title: "Derive the string, state the rest",
              body: "RGPV asks the string derivation in full - element balance, small-angle tension resultant, wave equation, separation, boundary conditions - and then lets you write the bar and shaft results by analogy, quoting their wave speeds. The analogy table above is worth three or four marks on its own; reproduce it in the answer.",
            },
            keyTerms: [
              { term: "Wave equation", definition: "The PDE c^2 u_xx = u_tt governing one-dimensional wave propagation in strings, bars and shafts." },
              { term: "Separation of variables", definition: "Technique assuming u(x, t) = U(x) T(t) to split a PDE into spatial and temporal problems." },
              { term: "Normal mode", definition: "A shape U_n(x) and frequency w_n pair in which the continuous member vibrates sinusoidally." },
            ],
            examQuestions: [
              {
                q: "Derive the natural frequencies and mode shapes of a taut string of length L fixed at both ends, and state the analogous results for a rod in longitudinal vibration and a shaft in torsion.",
                marks: 7,
                outline: [
                  "Force balance on a string element: T times curvature equals mu times acceleration.",
                  "Obtain T y_xx = mu y_tt, i.e. c^2 y_xx = y_tt with c = sqrt(T/mu).",
                  "Separate y = U(x) T(t); spatial equation U'' + (w/c)^2 U = 0.",
                  "Boundary conditions U(0) = U(L) = 0 force U_n = sin(n pi x/L).",
                  "Frequencies w_n = n pi c / L; fundamental plus integer multiples.",
                  "Rod: replace c with sqrt(E/rho); shaft: c = sqrt(G/rho); same formulas.",
                  "Comment: an infinite ladder of modes; only the low ones matter in practice.",
                ],
              },
              {
                q: "Why does a continuous system possess infinitely many natural frequencies?",
                marks: 2,
              },
              {
                q: "A wire of length 0.65 m under 80 N tension has a mass of 2 g per metre. Compute its fundamental frequency.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Transverse vibration of beams",
            body: [
              "A beam bending transversely is governed not by the second-order wave equation but by the fourth-order Euler-Bernoulli equation, E I y'''' + rho A y_tt = 0, valid for slender beams whose rotary inertia and shear deformation are negligible. Assuming harmonic motion y = Y(x) sin(w t) leaves the spatial equation E I Y'''' = rho A w^2 Y, conventionally written Y'''' - beta^4 Y = 0 with beta^4 = rho A w^2/(E I). The general solution combines sin, cos, sinh and cosh - four constants, because four boundary conditions must be satisfied, two at each end.",
              "The boundary conditions generate the characteristic equation, and its roots beta_n L are the numbers to memorise. A simply supported beam requires zero deflection and zero moment at both ends, which forces sin(beta L) = 0: beta_n L = n pi, and w_n = (n pi/L)^2 sqrt(EI/(rho A)). A cantilever (fixed-free) yields the sequence 1.875, 4.694, 7.855; fixed-fixed and free-free beams share 4.730, 7.853, 10.996 for their flexural modes. The key contrast with strings: beam frequencies grow as n squared, not as n - the stiffening effect of curvature - so the second mode of a simply supported beam sits four times higher than the first.",
              "Beam theory is the workhorse of rotor dynamics and structural design: fan and turbine blades, propellers, printed-circuit boards, bridge decks and the shafts of Unit III's whirling all vibrate as beams, and their critical speeds are beam natural frequencies in disguise. Two refinements extend the range: the Rayleigh-Ritz method (the Unit II energy idea with an assumed shape carrying coefficients) improves estimates for complicated supports, and Timoshenko theory adds rotary inertia and shear deformation for thick beams, always lowering the predicted frequencies relative to Euler-Bernoulli. For exam purposes, the derivation skeleton below plus the coefficient table carries the marks.",
            ],
            bullets: [
              "Euler-Bernoulli equation: E I Y'''' = rho A w^2 Y, with beta^4 = rho A w^2 / (E I).",
              "Solution space: sin, cos, sinh and cosh - four constants matching four boundary conditions.",
              "Simply supported: beta_n L = n pi, so w_n = (n pi / L)^2 sqrt(E I / (rho A)).",
              "Cantilever: beta_1 L = 1.875 (then 4.694, 7.855); fixed-fixed: 4.730, 7.853, 10.996.",
              "Beam frequencies scale with n^2 (dispersion), unlike the n-ladder of strings.",
            ],
            table: {
              caption: "Frequency coefficients beta_n L for the standard end conditions.",
              headers: ["End conditions", "Mode 1", "Mode 2", "Mode 3"],
              rows: [
                ["Simply supported", "3.142 (pi)", "6.283 (2 pi)", "9.425 (3 pi)"],
                ["Cantilever (fixed-free)", "1.875", "4.694", "7.855"],
                ["Fixed-fixed", "4.730", "7.853", "10.996"],
                ["Free-free (flexural)", "4.730", "7.853", "10.996"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Beam frequencies in five steps",
              caption: "The derivation skeleton an exam answer reproduces line by line.",
              steps: [
                { label: "Start from E I Y'''' = rho A w^2 Y", note: "Euler-Bernoulli, slender beam" },
                { label: "Set beta^4 = rho A w^2 / (E I)" },
                { label: "Write Y with sin, cos, sinh, cosh" },
                { label: "Impose the four boundary conditions" },
                { label: "w_n = (beta_n L)^2 sqrt(E I/(rho A L^4))", note: "read beta_n L from the table" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two numbers pay for themselves",
              body: "beta_1 L = 1.875 for the cantilever and beta_n L = n pi for the simply supported beam answer most beam questions outright. Practise the simply supported derivation end to end - the characteristic equation reduces to sin(beta L) = 0 in two lines, which is why examiners like it.",
            },
            keyTerms: [
              { term: "Euler-Bernoulli beam theory", definition: "Slender-beam bending theory neglecting rotary inertia and shear deformation." },
              { term: "Frequency coefficient beta_n L", definition: "Dimensionless root of the beam characteristic equation; tabulated per end fixity." },
              { term: "Dispersion", definition: "The n^2 scaling of beam frequencies with mode number, caused by curvature stiffening." },
            ],
            examQuestions: [
              {
                q: "Derive the frequency equation for the transverse vibration of a uniform simply supported beam, obtain its natural frequencies and mode shapes, and state the first three beta L values for a cantilever.",
                marks: 7,
                outline: [
                  "Start from E I y'''' + rho A y_tt = 0; assume y = Y(x) sin(w t).",
                  "Obtain Y'''' - beta^4 Y = 0 with beta^4 = rho A w^2/(E I).",
                  "General solution: A sin + B cos + C sinh + D cosh.",
                  "Simply supported BCs: Y = 0 and Y'' = 0 at both ends.",
                  "Non-trivial solution requires sin(beta L) = 0, so beta_n L = n pi.",
                  "Frequencies w_n = (n pi/L)^2 sqrt(EI/(rho A)); shapes sin(n pi x/L).",
                  "Cantilever: 1.875, 4.694, 7.855; note the n^2 scaling.",
                ],
              },
              {
                q: "Write the Euler-Bernoulli beam equation for free transverse vibration and identify each term.",
                marks: 2,
              },
              {
                q: "How do beam natural frequencies scale with mode number, and how does that differ from a string?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Measuring vibration: accelerometers and FFT analysis",
            body: [
              "The seismic instrument is a small mass-spring-damper in a case bolted to the structure; its output is the relative motion z between the seismic mass and the case, governed by m z'' + c z' + k z = -m y'' for base motion y. The ratio Z/Y = r^2/sqrt((1 - r^2)^2 + (2 zeta r)^2) splits the instrument world in two. With a stiff spring (instrument natural frequency far above the input band, r << 1), z is proportional to base acceleration: the accelerometer. With a very soft spring (r >> 1), the mass stands still in space and z tracks base displacement: the vibrometer.",
              "The piezoelectric accelerometer is the industrial standard: a preloaded seismic mass pressing on a quartz or ceramic crystal whose charge is proportional to force, hence to acceleration. Its mounted resonance - the instrument's own natural frequency on a stiff stud, typically 10-50 kHz - caps the usable band at roughly a third of that value. Mass loading matters: an accelerometer heavy relative to the local structure shifts the very frequencies it measures, so small structures demand small accelerometers. The signal chain continues through a charge amplifier, an anti-alias filter and the sampler; the Nyquist theorem demands sampling above twice the highest frequency of interest, and aliasing - high frequencies folding down as spurious low ones - is the cardinal measurement sin.",
              "The FFT converts the sampled time record into a frequency spectrum, and reading that spectrum is a diagnostic skill: peaks appear at forcing frequencies and their harmonics, and their pattern identifies the fault. A dominant 1x running-speed peak flags unbalance; 2x suggests misalignment; gear-mesh frequencies and their sidebands point to gears; and rolling-element bearings announce themselves at characteristic defect frequencies in the envelope spectrum. The code below resolves a synthetic signal into its 25 Hz and 60 Hz components - the same peak-picking an analyst performs on machine data for condition monitoring, trending levels over months to catch deterioration before failure.",
            ],
            bullets: [
              "Piezoelectric accelerometer: usable up to about a third of its mounted resonance; keep its mass well below the structure's local mass.",
              "Vibrometer: very soft spring, wn far below the band - the seismic mass stands still and relative motion reads displacement.",
              "Accelerometer: stiff spring, r << 1 - relative deflection is proportional to base acceleration.",
              "Sampling: fs > 2 f_max (Nyquist); anti-alias filter before the ADC; window the record to fight leakage.",
              "FFT peaks map to mechanisms: 1x unbalance, 2x misalignment, gear-mesh tones and bearing sidebands.",
            ],
            codeExample: {
              language: "python",
              caption: "A synthetic two-tone-plus-noise signal resolved by FFT peak-picking.",
              code: `import numpy as np

fs = 1000.0                        # sampling rate, Hz
t = np.arange(0, 1.0, 1.0 / fs)    # 1 s record
rng = np.random.default_rng(1)

x = (1.0 * np.sin(2 * np.pi * 25 * t)
     + 0.5 * np.sin(2 * np.pi * 60 * t)
     + 0.1 * rng.standard_normal(t.size))

X = np.abs(np.fft.rfft(x)) / t.size          # amplitude spectrum
f = np.fft.rfftfreq(t.size, 1.0 / fs)        # frequency axis

top = np.argsort(X)[-2:][::-1]               # two largest peaks
for i in top:
    print(f"peak at {f[i]:6.1f} Hz   amplitude {X[i]:.3f}")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The measurement chain",
              caption: "From structure to spectrum in five stations - each station has a classic failure mode.",
              stages: [
                { label: "Structure vibrates", note: "the response to capture" },
                { label: "Accelerometer on the surface", note: "piezoelectric, stiff, light" },
                { label: "Charge amplifier conditions", note: "voltage proportional to g" },
                { label: "Anti-alias filter + A/D", note: "fs > 2 f_max" },
                { label: "FFT and diagnosis", note: "peaks tell the story" },
              ],
            },
            callout: {
              type: "warning",
              title: "Mass loading and aliasing",
              body: "The two classic measurement sins: an accelerometer heavy enough to detune the structure it measures, and sampling below twice the highest frequency so high tones alias down as fake low ones. Both are standard short questions - answer with 'mounted resonance' and 'fs > 2 f_max, with anti-alias filtering'.",
            },
            keyTerms: [
              { term: "Accelerometer", definition: "Seismic instrument with natural frequency far above the measurement band, whose output is proportional to acceleration." },
              { term: "Nyquist frequency", definition: "Half the sampling rate; signals above it alias to lower frequencies unless filtered before sampling." },
              { term: "FFT", definition: "Fast Fourier Transform; converts a sampled time record into its discrete frequency spectrum." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and principle of a piezoelectric accelerometer and a seismic vibrometer, show why one reads acceleration and the other displacement, and describe the signal chain up to the FFT including the sampling theorem.",
                marks: 7,
                outline: [
                  "Construction: seismic mass on piezoelectric crystal in a case, preloaded.",
                  "Equation of the seismic element: m z'' + c z' + k z = -m y''.",
                  "Frequency response Z/Y = r^2 / sqrt((1 - r^2)^2 + (2 zeta r)^2).",
                  "Accelerometer: r << 1 gives z proportional to acceleration; high mounted resonance.",
                  "Vibrometer: r >> 1 gives z tracking displacement; very soft spring.",
                  "Signal chain: charge amplifier, anti-alias filter, A/D converter.",
                  "Nyquist: fs > 2 f_max; FFT then reveals the spectrum for diagnosis.",
                ],
              },
              {
                q: "State the Nyquist sampling theorem and one consequence of violating it.",
                marks: 2,
              },
              {
                q: "Why must an accelerometer be light compared with the structure at the point of measurement?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Controlling vibration: absorbers and tuned mass dampers",
            body: [
              "When a machine is stuck with its resonance - the speed cannot change and the structure cannot be stiffened - a second, smaller oscillator can be attached to fight the first. The undamped dynamic vibration absorber (Frahm) is a mass m_a on a spring k_a tuned so that sqrt(k_a/m_a) equals the excitation frequency. The trick works through the two-DOF mathematics of Unit IV: at exact tuning, the absorber's motion is exactly antiphase with the excitation, its spring force on the primary cancels the applied force, and the primary mass stands still while the absorber mass carries the entire motion.",
              "The price is well known: the absorber splits the original single resonance into two peaks, one either side of the operating frequency, so the cure is narrowband - a machine whose speed drifts can land on a new peak and shake worse than before. Adding damping to the absorber broadens the cure into the tuned mass damper. With mass ratio mu = m_a/m, Den Hartog's optimisation gives the optimal tuning f = 1/(1 + mu) and optimal absorber damping zeta = sqrt(3 mu/(8(1 + mu)^3)), flattening the response into two equal, lower humps. Landmark applications: the 700-tonne pendulum TMD of Taipei 101, chimney and bridge TMDs, floor-mounted machine absorbers and the Stockbridge dampers hanging on every transmission line.",
              "Sizing follows the code below: a 1000 kg machine with stiffness 400 kN/m (wn = 20 rad/s) and a 5 percent mass ratio takes a 50 kg absorber tuned to 19.05 rad/s with k_a ≈ 18.1 kN/m and zeta ≈ 0.127. Choosing mu is the economic decision - bigger ratios suppress more but weigh and cost more; 1-5 percent is common in civil structures and up to 10 percent on machines. Absorbers answer narrowband problems; for broadband excitation the tools are the isolation mounts of section 3.4 and damping itself.",
            ],
            bullets: [
              "Frahm absorber: tune w_a = sqrt(k_a/m_a) to the excitation and the primary mass stands still at that speed.",
              "The price: one resonance peak splits into two either side of the operating frequency.",
              "Damped TMD (Den Hartog): f_opt = 1/(1 + mu), zeta_opt = sqrt(3 mu/(8 (1 + mu)^3)) - two equal low humps.",
              "Mass ratio mu trades suppression against added weight: 1-5 percent for structures, up to 10 percent for machines.",
              "Absorbers suit narrow-band problems; isolation and damping handle the broadband ones.",
            ],
            codeExample: {
              language: "python",
              caption: "Sizing a Den Hartog TMD for a 1000 kg machine with a 5 percent mass ratio.",
              code: `import math

M = 1000.0            # kg, primary mass
K = 400000.0          # N/m, primary stiffness
mu = 0.05             # absorber mass ratio

wn = math.sqrt(K / M)                # primary natural frequency
f_opt = 1.0 / (1.0 + mu)             # Den Hartog optimal tuning
zeta_opt = math.sqrt(3.0 * mu / (8.0 * (1.0 + mu) ** 3))

ma = mu * M                          # absorber mass
ka = ma * (f_opt * wn) ** 2          # absorber stiffness

print(f"primary wn       = {wn:6.2f} rad/s")
print(f"absorber mass    = {ma:6.1f} kg")
print(f"absorber k       = {ka:9.0f} N/m")
print(f"tuning wa        = {f_opt * wn:6.2f} rad/s (f = {f_opt:.3f})")
print(f"optimal zeta_a   = {zeta_opt:6.3f}")`,
            },
            diagram: {
              kind: "compare",
              title: "Absorber vs tuned mass damper",
              caption: "Same hardware, different tuning philosophy - one kills a single speed, the other a band.",
              left: {
                heading: "Undamped absorber (Frahm)",
                items: [
                  "Tuned exactly to the trouble frequency",
                  "Primary mass stands still at that speed",
                  "Resonance splits into two neighbouring peaks",
                  "Narrowband: speed drift ruins the tuning",
                ],
              },
              right: {
                heading: "Damped TMD",
                items: [
                  "Absorber damping added to the spring",
                  "Den Hartog optimum flattens the response",
                  "Robust across a band of operating speeds",
                  "Taipei 101, chimneys, floors, Stockbridge dampers",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Absorbers are two-DOF problems",
              body: "Full-marks absorber answers write the two-DOF equations with m_a and k_a attached, quote the tuning condition w_a = w, and show the primary amplitude vanishing at that frequency. Then state the splitting into two peaks and how damping flattens them - that sequence is the mark scheme.",
            },
            keyTerms: [
              { term: "Dynamic vibration absorber", definition: "An auxiliary mass-spring system tuned to the excitation frequency so the primary mass's response vanishes there." },
              { term: "Tuned mass damper", definition: "A damped absorber optimised (Den Hartog) to flatten the response over a band rather than one frequency." },
              { term: "Mass ratio mu", definition: "Absorber mass divided by primary mass; the central design parameter of absorber sizing." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of the undamped dynamic vibration absorber, show using the two-DOF equations how tuning cancels the primary mass motion at the excitation frequency, and describe how adding damping converts it into a tuned mass damper with Den Hartog's optima.",
                marks: 7,
                outline: [
                  "Attach m_a, k_a to the primary m, k; write both equations of motion.",
                  "For harmonic force on the primary, solve the steady-state amplitudes.",
                  "Show the primary amplitude contains (k_a - m_a w^2): zero when w_a = sqrt(k_a/m_a) = w.",
                  "At tuning the absorber force is antiphase with the excitation; primary stands still.",
                  "Consequence: single resonance splits into two peaks either side of the operating point.",
                  "Adding c_a and optimising: f_opt = 1/(1 + mu), zeta_opt = sqrt(3 mu/(8(1 + mu)^3)).",
                  "Applications: machine mounts, Taipei 101, Stockbridge dampers.",
                ],
              },
              {
                q: "What is a tuned mass damper? Name one landmark application.",
                marks: 2,
              },
              {
                q: "A 500 kg machine suffers resonance at 25 rad/s. Size an undamped absorber using m_a = 25 kg and state its limitation.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Balancing and case studies: vibration engineering in the field",
            body: [
              "Unbalance - a rotor's mass centre offset from its spin axis - is the dominant excitation in rotating machinery, producing the m e w^2 force of Unit III at 1x running speed. Three idealised types organise the subject. Static unbalance is a single eccentric mass in one axial plane: the rotor's heavy spot settles lowest on knife edges, both bearings vibrate in phase, and correction in a single plane suffices. Couple unbalance is two equal opposed masses in different planes: the net force is zero but a rocking moment remains, bearing signals are antiphase, and two correction planes are needed. Dynamic unbalance, the general case, is a mixture and always requires two planes.",
              "The procedures follow the types. Disc-shaped rotors - fans, flywheels, grinding wheels - take static balancing on knife edges or a single-plane balancing machine. Long rotors - crankshafts, armatures, turbine spools - take dynamic balancing on machines that measure amplitude and phase at both bearings and compute the correction masses and angles for two planes. Field balancing does the same on installed machinery using trial weights: the vector change in the 1x vibration per known trial weight converts directly into the required correction. Standards (the ISO 21940 series, with balance grades G) specify the residual unbalance a rotor class may carry.",
              "Three case studies close the subject. A domestic washing machine walking across the floor on spin is a 1x unbalance story - redistributed load or worn dampers, diagnosed in seconds from the speed signature. An industrial fan saved by envelope analysis: bearing defect frequencies appeared months before the catastrophic outer-race failure, and the planned replacement cost a tenth of the unplanned one. And the Tacoma Narrows collapse of 1940, popularly blamed on resonance, was aeroelastic flutter - a self-excited instability - reminding engineers that identifying the excitation mechanism matters more than any formula. The pyramid below assembles every control strategy the course has taught.",
            ],
            bullets: [
              "Static unbalance: eccentric mass in one axial plane; one correction plane; bearing signals in phase.",
              "Couple unbalance: equal opposed masses in two planes; two correction planes; bearing signals antiphase.",
              "Dynamic balancing: measure amplitude and phase at two planes; compute correction masses and angles.",
              "Field balancing: trial-weight runs convert 1x vibration vectors into the correction mass directly.",
              "Condition monitoring: trend 1x, 2x and bearing-tone levels over time to catch faults before they cascade.",
            ],
            table: {
              caption: "Unbalance types and their signatures.",
              headers: ["Type", "Geometry", "Planes needed", "Bearing phase relation"],
              rows: [
                ["Static", "one eccentric mass", "one", "in phase at both bearings"],
                ["Couple", "two equal opposed masses", "two", "antiphase at the bearings"],
                ["Dynamic (mixed)", "general distribution", "two", "mixed amplitude and phase"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The vibration-control strategy pyramid",
              caption: "Work from the top down - each tier is cheaper than the one below it when applied early.",
              tiers: [
                { label: "Remove the source", note: "balance rotors, tighten tolerances" },
                { label: "Detune", note: "design wn away from running speeds" },
                { label: "Damp", note: "add dissipation where motion is largest" },
                { label: "Isolate", note: "resilient mounts break the transmission path" },
                { label: "Absorb and monitor", note: "TMDs, absorbers, condition monitoring" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketches separate the three types",
              body: "Static, couple and dynamic unbalance questions are marked on labelled sketches: one arrow off-axis for static, two opposed arrows in different planes for couple, and an arbitrary pattern for dynamic. Add the bearing-phase signature beside each sketch - in phase, antiphase, mixed - and the definition marks are complete.",
            },
            keyTerms: [
              { term: "Static unbalance", definition: "Eccentric mass distribution in a single axial plane, correctable in one plane." },
              { term: "Dynamic balancing", definition: "Measuring and correcting unbalance in two planes so that no rotating force or moment remains." },
              { term: "Condition monitoring", definition: "Trending vibration signatures over time to detect and diagnose developing faults." },
            ],
            examQuestions: [
              {
                q: "Define static, couple and dynamic unbalance, explain single-plane and two-plane balancing procedures, and describe how a field balancing run with a trial weight determines the correction mass and angle.",
                marks: 7,
                outline: [
                  "Define static unbalance with a one-arrow sketch; heavy spot settles lowest on knife edges.",
                  "Define couple unbalance with opposed arrows; rocking moment, antiphase bearings.",
                  "Dynamic unbalance as the general mixture; always two correction planes.",
                  "Single-plane procedure for disc rotors; two-plane machines measure amplitude and phase at bearings.",
                  "Field method: record initial 1x vector; add known trial weight; record new vector.",
                  "The vector change per trial weight converts directly to the correction mass and angle.",
                  "Standards: ISO balance grades specify acceptable residual unbalance.",
                ],
              },
              {
                q: "Distinguish static balancing from dynamic balancing in two sentences.",
                marks: 2,
              },
              {
                q: "A rotor shows a strong 1x running-speed peak in its vibration spectrum. Name the most likely cause and the first corrective action.",
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
        "RGPV ME-502 papers concentrate the marks on the SDOF derivations of Units II and III, with the two-DOF machinery of Unit IV supplying a near-certain seven-marker and the continuous and control topics of Unit V filling the shorts. Allocate revision time in roughly the weights below, and keep one full worked example per topic regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Damped free vibration and logarithmic decrement", weight: "10-12 marks", note: "Full derivation plus a decay-trace numerical - one of these appears almost every year." },
        { topic: "Forced vibration: magnification factor and phase", weight: "10-12 marks", note: "The steady-state derivation with the three limits (r << 1, = 1, >> 1) is a fixture." },
        { topic: "Transmissibility and vibration isolation", weight: "8-10 marks", note: "Design questions hand you m, speed and TR and ask for k - practise until mechanical." },
        { topic: "Two-DOF systems: frequencies and mode shapes", weight: "8-10 marks", note: "The two-mass three-spring model solves in half a page; memorise both results." },
        { topic: "Whirling of shafts and critical speed", weight: "6-8 marks", note: "Amplitude formula, critical speed and sub/supercritical behaviour - often a full 7-marker." },
        { topic: "Rayleigh and Dunkerley methods", weight: "6-8 marks", note: "One of the two appears almost yearly; both formulas are four lines each." },
        { topic: "Orthogonality and modal analysis", weight: "6-8 marks", note: "Two-line orthogonality proof plus the mode-superposition outline." },
        { topic: "Energy method and equivalent systems", weight: "6-8 marks", note: "Beam stiffness table and the ms/3 correction keep reappearing as short questions." },
        { topic: "Continuous systems: string, bar, shaft, beam", weight: "6-8 marks", note: "The string derivation plus the beam table (pi, 1.875, 4.730) carry the marks." },
        { topic: "Measurement, absorbers and balancing", weight: "4-6 marks", note: "Short questions on accelerometer principle, TMD tuning and unbalance types." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - modelling and equations", tasks: ["Classify vibrations; damping models and energies per cycle", "Equivalent stiffness: series, parallel, beam and shaft formulas", "Energy method (pendulum, heavy spring) and EOMs by Newton and D'Alembert"] },
        { week: "Week 2", focus: "Unit II - free vibration", tasks: ["Undamped solution, initial conditions, static-deflection shortcut", "Damping regimes and zeta; log-decrement numericals", "Coulomb decay and dead zone; Rayleigh and Dunkerley bounds"] },
        { week: "Week 3", focus: "Unit III part 1 - forced response", tasks: ["Steady-state derivation, magnification factor, phase", "Resonance, half-power bandwidth, Q; sketch the MF curve by hand", "Rotating-unbalance and MF table practice"] },
        { week: "Week 4", focus: "Unit III part 2 - transmission", tasks: ["Transmissibility derivation and the sqrt(2) gate", "Isolator design: three full numericals", "Whirling: amplitude formula, critical speed, self-centring"] },
        { week: "Week 5", focus: "Unit IV - multi-DOF", tasks: ["Two-DOF EOMs in matrix form; coupling types", "Eigenvalue solves (five models) and mode-shape sketches", "Orthogonality proof, modal quantities, mode superposition"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["String/bar/shaft derivation; beam frequency table", "Accelerometer/vibrometer principle, FFT reading, TMD sizing", "Balancing types; two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last-day triage",
      body: [
        "With one day left, stop learning new material and rehearse the finite list of derivations, numbers and sketches that RGPV actually examines. Everything below is designed to be redone once in the morning and once at night.",
      ],
      bullets: [
        "Re-derive on one sheet: wn, the damped solution, MF, TR and the whirl amplitude - the five derivations that pay rent.",
        "Redo one log-decrement and one isolator numerical cold; both are pure formula-plug marks.",
        "Sketch the eight diagrams: damping-regime fork, MF curve, TR zones, whirl regions, both mode shapes, absorber split, control pyramid.",
        "Memorise the tables: beam stiffness (3, 48, 192), beta L values (pi, 1.875, 4.730), Den Hartog optima.",
        "Read the slips list once and rewrite the four formulas you personally keep fumbling.",
        "Sleep - the paper rewards steady seven-mark structures, not midnight heroics.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Start every derivation with the equation of motion and define every symbol - the setup lines carry the method marks.",
        "Box the final formulas (MF, TR, delta) before substituting numbers with units; the boxed line is marked separately from the arithmetic.",
        "For design questions (isolation, absorbers), state the variable you solved for and verify the r > sqrt(2) or tuning condition explicitly.",
        "Sketch mode shapes as labelled arrow pairs and mark the nodes; a good sketch rescues half-finished algebra.",
        "Budget: 2-3 mark shorts in 4-6 minutes, 7-markers in about 15; keep 10 minutes to check every sqrt(1 - zeta^2) factor.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Quoting wd = wn instead of wn sqrt(1 - zeta^2) in damped problems - the examiner's first checkpoint.",
        "Using zeta ≈ delta/(2 pi) when the damping is not light - always invert with zeta = delta/sqrt(4 pi^2 + delta^2).",
        "Designing isolators with r > 1 instead of r > sqrt(2): between 1 and sqrt(2) every mount still amplifies.",
        "Sign slips in the stiffness matrix: a coupling spring contributes -k2 off-diagonal and +k2 to both diagonal terms.",
        "Swapping the bounds: Rayleigh overestimates (upper), Dunkerley underestimates (lower) - the reverse loses the whole question.",
        "Writing 'more damping improves isolation' - beyond r = sqrt(2) damping degrades isolation, a standing trap question.",
      ],
    },
  ],
};
