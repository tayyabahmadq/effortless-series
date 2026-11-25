/**
 * Academics - RGPV Civil Engineering 7th-semester elective: CE-702(C) Structural Dynamics.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries 3 body paragraphs, 5+ bullets,
 * a diagram, 3 key terms, a callout, a table or Python code sample, and
 * three exam-style questions (one 7-mark with outline + two shorts).
 *
 * The benchmark two-storey frame (M = diag(20,000; 10,000) kg,
 * K = [[12, -4], [-4, 4]] x 10^6 N/m) runs through Units II-IV so every
 * numerical lands on the same clean numbers: omega_1 = 14.14 rad/s,
 * omega_2 = 28.28 rad/s, modes [1, 2] and [1, -1].
 */

import type { AcademicSubject } from "./types";

export const ce702c: AcademicSubject = {
  id: "ce-702-c",
  code: "CE-702(C)",
  title: "Structural Dynamics",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to structural dynamics for RGPV civil: dynamic loads and the equation of motion, SDOF free and forced vibration with the logarithmic decrement, MDOF modal analysis, earthquake response with IS 1893 and base shear, and the control systems behind Taipei 101 and Burj Khalifa.",
  description:
    "Five units walk from why loads become dynamic and how the equation of motion is written, through the complete solution of single-degree-of-freedom systems - free vibration, logarithmic decrement, resonance, transmissibility and the Duhamel integral - into the matrix world of multi-degree-of-freedom dynamics with eigenvalues, mode shapes, orthogonality and mode superposition, then onto the earthquake problem: ground motion, response spectra, the IS 1893 design chain and base shear, closing with tuned mass dampers, base isolation, wind and blast, and the two supertall case studies. Every section pairs theory with a worked numerical, a redrawable diagram and the questions RGPV actually asks.",
  accentColor: "#e879f9",
  emoji: "SD",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Fundamentals of Structural Dynamics",
      summary:
        "The launchpad: static versus dynamic response, the classification of dynamic loads, degrees of freedom and the lumped-mass idealisation, damping sources and models, and derivation of the equation of motion.",
      chapter: {
        number: "01",
        title: "Fundamentals of Structural Dynamics",
        intro:
          "Unit I builds the launchpad. Sections 1.1 and 1.2 draw the line between static and dynamic response and sort dynamic loads into periodic, impulsive and random families. Sections 1.3 and 1.4 supply the modelling vocabulary - degrees of freedom, lumped masses, shear buildings - and the physics of damping with its three mathematical models. Section 1.5 assembles everything into the equation of motion, derived three ways and immediately integrated numerically in Python.",
        inOneBreath:
          "Loads become dynamic when they change fast enough to accelerate structural masses; they classify as periodic (machines), impulsive (blast) or random (earthquake, wind); the number of independent coordinates is the degree of freedom, with one lateral DOF per floor of a shear building; damping - viscous, Coulomb or hysteretic - dissipates energy and is measured by the ratio zeta to the critical value 2 m omega_n; and every SDOF problem reduces to m x'' + c x' + k x = F(t), written by Newton's second law, D'Alembert's reversed inertia force or Lagrange's energy equations.",
        sections: [
          {
            number: "1.1",
            title: "Static versus dynamic loading",
            body: [
              "A structure responds statically when the loads applied to it change so slowly that equilibrium is maintained at every instant. The deflections then depend only on the magnitude of the load, and the familiar stiffness relation - force equals stiffness times displacement - holds at each step. Inertia forces, the product of mass and acceleration, are negligibly small because the accelerations themselves are negligible. Almost everything taught in structural analysis - beams, frames and trusses under dead, live and wind loads treated as fixed - belongs to this quasi-static world, and for the majority of building design it is entirely adequate.",
              "Dynamic loading is the opposite regime: the force varies with time fast enough to produce accelerations of the structural masses, and by D'Alembert's principle those accelerations generate inertia forces that must appear in the equilibrium equations. The response now depends not only on how large the load is but on how it grows in time, how long it acts, and on the structure's own mass, stiffness and damping. A load of the same peak value can produce completely different deflections depending on its duration relative to the natural period of the structure - which is why dynamics studies both the load and the vibrating system together.",
              "The consequences are dramatic. A load applied suddenly, with no rise time, produces about twice the static deflection; a harmonic load whose frequency matches a natural frequency produces resonance, in which amplitudes grow with every cycle and are limited only by damping and yielding. History supplies painful evidence: the Tacoma Narrows bridge collapsed in 1940 under wind-induced torsional oscillations, and in the 1985 Mexico City earthquake soft lakebed soils amplified ground motion at periods matching mid-rise buildings, destroying thousands of them. Structural dynamics exists so engineers can predict, and then prevent, such behaviour.",
            ],
            bullets: [
              "Static load: applied slowly enough for equilibrium at every instant; inertia forces are negligible and deflection depends only on load magnitude.",
              "Dynamic load: varies with time fast enough to accelerate structural masses; inertia forces enter the equilibrium equations.",
              "D'Alembert's principle: treat mass times acceleration as a reversed inertia force, converting a dynamics problem into an equivalent equilibrium problem.",
              "Amplification: a suddenly applied load produces about twice the static deflection; resonance multiplies it many times more.",
              "Response depends on the load history and on the structure's mass, stiffness and damping - never on peak load alone.",
              "Classic failures: Tacoma Narrows 1940 wind resonance; Mexico City 1985 site-period resonance.",
            ],
            table: {
              caption: "Static versus dynamic analysis at a glance.",
              headers: ["Aspect", "Static analysis", "Dynamic analysis"],
              rows: [
                ["Loading", "Slowly applied, constant or fixed", "Time-varying: periodic, impulsive or random"],
                ["Forces considered", "External plus elastic only", "Adds inertia (m x'') and damping (c x')"],
                ["Governing relation", "F = k x (algebraic)", "m x'' + c x' + k x = F(t) (differential)"],
                ["Response measure", "Peak deflection and stress", "Time history, peak and resonant response"],
                ["Key parameters", "Stiffness, strength", "Mass, stiffness, damping, natural period"],
                ["Typical design loads", "Dead, live, retained earth", "Earthquake, wind gust, machinery, blast"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "The static problem versus the dynamic problem",
              caption:
                "One relation is algebraic, the other a differential equation - and that difference changes every property of the answer.",
              left: {
                heading: "Static problem",
                items: [
                  "Load fixed in time",
                  "Equilibrium at every instant",
                  "Inertia forces ignored",
                  "Deflection = F / k",
                  "Only stiffness matters",
                ],
              },
              right: {
                heading: "Dynamic problem",
                items: [
                  "Load is a function F(t)",
                  "Inertia and damping forces included",
                  "Second-order differential equation",
                  "Response peaks near resonance",
                  "Mass, stiffness and damping all matter",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The examiner's favourite opening",
              body: "When asked to distinguish static and dynamic loading, anchor the answer on the inertia criterion: dynamics begins the moment accelerations of the structural masses are large enough that inertia forces cannot be neglected. Then give the suddenly-applied-load doubling effect and one resonance example - that structure earns all the marks.",
            },
            keyTerms: [
              { term: "Static load", definition: "A load applied so slowly that the structure remains in equilibrium at every instant and inertia forces are negligible." },
              { term: "Dynamic load", definition: "A time-varying load that produces significant accelerations and hence inertia forces in the structure." },
              { term: "Dynamic amplification", definition: "The increase of response above the static value - about 2 for sudden loading, up to 1/(2 zeta) at resonance." },
            ],
            examQuestions: [
              {
                q: "Define structural dynamics. Clearly distinguish between static and dynamic loading, explain D'Alembert's principle, and illustrate with two examples why dynamic effects cannot be ignored in civil engineering design.",
                marks: 7,
                outline: [
                  "Define structural dynamics: the study of structural response to time-varying loads, including inertia and damping effects.",
                  "State the static regime: slow loading, equilibrium at every instant, inertia negligible, deflection from F = k x.",
                  "State the dynamic regime: fast loading, accelerations, inertia forces m x'' and damping forces c x'.",
                  "Explain D'Alembert's principle: reversing the inertia force converts the dynamics problem to an equivalent statics problem at each instant.",
                  "Quantify amplification: sudden application gives about twice the static deflection; resonance gives 1/(2 zeta) times.",
                  "Give the Tacoma Narrows 1940 and Mexico City 1985 examples.",
                  "Conclude with design relevance: machinery foundations, tall buildings in wind and seismic zones.",
                ],
              },
              {
                q: "Why does a load applied suddenly, without any rise time, produce nearly twice the static deflection?",
                marks: 2,
              },
              {
                q: "Give two examples each of static and dynamic loads acting on civil engineering structures.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Classification of dynamic loads",
            body: [
              "Periodic loads repeat at a fixed interval. The purest case is harmonic loading, a single sinusoid produced by the rotating unbalance of a machine: a turbine or fan with an eccentric mass delivers a force proportional to the square of its rotational speed. Reciprocating engines and compressors produce periodic but non-harmonic loads, which Fourier analysis decomposes into a series of harmonics; each harmonic must be checked against resonance separately. The descriptors that matter are the forcing frequency, the amplitude and the number of harmonics present - and the danger zone is always the neighbourhood of a natural frequency of the supporting structure.",
              "Non-periodic loads have no repeating pattern. Impulsive loads - blast overpressure, impact of a dropped mass, pile driving - act for a very short time at large amplitude, so the structure receives an impulse, a change of momentum, and then vibrates freely. Long-duration aperiodic loads, such as a vehicle crossing a bridge, occupy an intermediate position and are treated as deterministic transients. Random loads, chiefly wind turbulence and earthquake ground motion, cannot be described by any deterministic function of time; they are characterised statistically through peak values, frequency content and duration, and analysed with recorded time histories or response spectra.",
              "The classification is not academic bookkeeping; it selects the analysis method. Harmonic loads are handled by steady-state frequency-response formulas and the dynamic magnification factor. Impulsive loads are governed by the impulse-momentum theorem: when the load duration is far shorter than the natural period, the peak response depends on the impulse delivered, not on the peak force. Random loads demand probabilistic treatment - response spectra in earthquake engineering, gust factors in wind engineering - because two nominally identical events never produce the same record. Throughout this course the same SDOF oscillator is reused as the engine under each loading model.",
            ],
            bullets: [
              "Periodic harmonic: rotating machinery unbalance; force amplitude grows with the square of rotational speed.",
              "Periodic non-harmonic: reciprocating engines; Fourier series decomposes them into harmonics, each a resonance candidate.",
              "Impulsive: blast, impact, pile driving; short duration means response is governed by the impulse delivered.",
              "Long-duration aperiodic: a vehicle crossing a bridge; treated as a deterministic transient.",
              "Random: wind turbulence and earthquake motion; described by statistics, analysed with spectra or time histories.",
              "Rule of thumb: if load duration is much longer than the natural period, response is quasi-static; if comparable, dynamic amplification rules.",
            ],
            table: {
              caption: "Classes of dynamic load and their natural analysis tools.",
              headers: ["Class", "Example", "Duration", "Frequency content", "Analysis approach"],
              rows: [
                ["Harmonic", "Rotating turbine unbalance", "Continuous", "Single frequency", "Steady-state response, DMF"],
                ["Periodic", "Reciprocating compressor", "Continuous", "Harmonic series", "Fourier, check every harmonic"],
                ["Impulsive", "Blast, dropped mass", "Milliseconds", "Very broad", "Impulse-momentum, free vibration"],
                ["Transient", "Vehicle crossing a bridge", "Seconds", "Broad, decaying", "Duhamel integral, step-by-step"],
                ["Random", "Earthquake, wind gust", "10-60 s", "Site- and storm-dependent", "Response spectrum, statistics"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Classify the load, then choose the tool",
              caption:
                "Every dynamic analysis starts by asking which of the three families the load belongs to.",
              start: "A dynamic load acts on the structure",
              branches: [
                {
                  label: "Periodic - machines",
                  outcome: "Steady-state response rules; compare forcing frequency with natural frequency to guard resonance",
                  good: true,
                },
                {
                  label: "Impulsive - blast or impact",
                  outcome: "Load ends before the structure moves far; peak response set by the impulse, then free vibration",
                  good: false,
                },
                {
                  label: "Random - wind or earthquake",
                  outcome: "No deterministic formula; use response spectra, gust factors or recorded accelerograms",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Machinery resonance is a design check, not an accident",
              body: "Foundations for rotating equipment must keep the operating frequency well away from the natural frequency of the supporting structure - commonly below about 0.7 or above about 1.4 times it. In the exam, state this margin explicitly when asked about machine foundation design; it is the difference between a complete and an incomplete answer.",
            },
            keyTerms: [
              { term: "Periodic load", definition: "A load that repeats at regular intervals of time, such as the unbalanced force of a rotating machine." },
              { term: "Impulsive load", definition: "A short-duration, high-amplitude load such as blast or impact that delivers a sudden change of momentum to the structure." },
              { term: "Random load", definition: "A load whose time variation cannot be predicted deterministically - wind turbulence, earthquake motion - and is described statistically." },
            ],
            examQuestions: [
              {
                q: "Classify the dynamic loads acting on civil engineering structures. For each class give one example, describe its time characteristics, and name the appropriate method of dynamic analysis.",
                marks: 7,
                outline: [
                  "Set up the classification: periodic, non-periodic (impulsive and transient), and random.",
                  "Periodic harmonic: rotating machinery unbalance; amplitude grows with speed squared; steady-state analysis.",
                  "Periodic non-harmonic: reciprocating engines; Fourier decomposition; check each harmonic separately.",
                  "Impulsive: blast and impact; millisecond duration; impulse-momentum then free vibration.",
                  "Transient: vehicle crossing; deterministic but aperiodic; Duhamel integral.",
                  "Random: wind and earthquake; statistical description; spectra and time histories.",
                  "Close with the selection rule: load duration versus natural period decides quasi-static or dynamic treatment.",
                ],
              },
              {
                q: "Distinguish between impulsive and random loads with one example of each.",
                marks: 3,
              },
              {
                q: "A machine runs at 1450 rpm. What is its forcing frequency in Hz?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Degrees of freedom and dynamic idealisation",
            body: [
              "The number of degrees of freedom of a structure is the number of independent coordinates needed to define its displaced configuration at any instant. A mass attached to a spring that can move only vertically needs exactly one coordinate and is the single-degree-of-freedom, or SDOF, system. A single-storey frame with a rigid roof deck may be idealised the same way: if the columns are flexible but the roof is stiff, the whole roof translates sideways as one mass, and that lateral displacement is the only coordinate. Almost every structure can be reduced to an SDOF or MDOF idealisation before analysis begins.",
              "Multi-storey buildings become multi-degree-of-freedom systems. The standard shear-building idealisation assumes rigid floor slabs, flexible columns and masses lumped at floor levels, so an n-storey building has n lateral degrees of freedom - one translation per level. Truly distributed systems - a chimney, a beam, a pipeline - have infinitely many degrees of freedom because every point along the span can move independently. They are handled either by lumping the distributed mass at a finite number of stations or by finite-element discretisation, both of which trade exactness for a finite matrix problem a computer can solve.",
              "Good idealisation is an act of engineering judgement. The analyst decides which motions dominate the response - usually the horizontal sway of floors - and lumps the participating masses there, replacing the lateral stiffness of columns and infills by an equivalent spring. A two-storey frame with identical floors collapses to a two-DOF model whose full solution occupies Unit III. The reward for a shrewd idealisation is enormous: a 30-storey tower with hundreds of thousands of finite elements responds to earthquakes very nearly as the first two or three sway modes of a 30-DOF lumped model.",
            ],
            bullets: [
              "Degree of freedom: each independent coordinate needed to describe the displaced shape at an instant.",
              "SDOF: one coordinate; the single-storey rigid-roof frame and the classical mass-spring-damper.",
              "Shear building: rigid slabs plus flexible columns give one lateral DOF per floor; n storeys means n DOF.",
              "Lumped-mass idealisation: place floor mass plus tributary masses at slab levels; columns become springs.",
              "Continuous systems have infinite DOF; discretise by lumping mass or by finite elements.",
              "Practical models keep only the dominant sway DOF - earthquake response is governed by the first few modes.",
            ],
            table: {
              caption: "From real structure to dynamic model - degree-of-freedom bookkeeping.",
              headers: ["Idealisation", "DOF", "Example", "Comment"],
              rows: [
                ["Mass on spring", "1", "Water tank on a single column", "Classic SDOF oscillator"],
                ["Single-storey shear frame", "1", "Rigid roof, flexible columns", "Roof translation is the only coordinate"],
                ["Shear building", "n", "n-storey framed building", "One lateral DOF per floor level"],
                ["Lumped cantilever", "2-5", "Chimney with 3 mass stations", "Distributed mass lumped at points"],
                ["Finite-element model", "100s+", "Full tower model", "Continuous system discretised"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building the dynamic model",
              caption:
                "The five judgement steps that turn a real structure into analysable masses and springs.",
              steps: [
                { label: "Inspect the real structure", note: "frame, tank, chimney - what dominates the motion?" },
                { label: "Choose the dominant motions", note: "usually lateral floor sway" },
                { label: "Lump the masses", note: "slab plus tributary masses at floor levels" },
                { label: "Replace stiffness by springs", note: "storey stiffness k = sum of 12EI/h^3 over columns" },
                { label: "Count the coordinates", note: "one independent coordinate per moving mass - the DOF" },
              ],
            },
            callout: {
              type: "tip",
              title: "One storey, one DOF",
              body: "In numericals the fastest mark-loser is miscounting DOF. A two-storey shear building has two lateral DOF even though it has four columns, because the rigid slabs force all columns at a level to translate together. Count coordinates, not members.",
            },
            keyTerms: [
              { term: "Degree of freedom", definition: "The number of independent coordinates required to define the displaced configuration of a structure at any instant." },
              { term: "Shear building", definition: "An idealisation with rigid floor slabs and flexible columns, giving one lateral translational DOF per storey." },
              { term: "Lumped-mass idealisation", definition: "Representing distributed mass by discrete masses placed at the levels where the dominant motion occurs." },
            ],
            examQuestions: [
              {
                q: "Define degree of freedom. Explain the lumped-mass idealisation and the shear-building assumptions, and show how a three-storey framed building is reduced to a three-DOF dynamic model.",
                marks: 7,
                outline: [
                  "Define DOF: number of independent coordinates describing the displaced configuration.",
                  "Explain lumped mass: slab and tributary masses collected at floor levels.",
                  "State shear-building assumptions: rigid slabs in-plane, axially rigid members, flexural columns.",
                  "Consequence: one lateral translation per floor; three storeys gives three DOF.",
                  "Storey stiffness from columns: k = sum of 12EI/h^3 per storey for fixed-ended columns.",
                  "The equations of motion become a 3 x 3 matrix system, solved by the eigenproblem of Unit III.",
                  "Mention limitations: ignores axial deformation and torsion; adequate for regular frames.",
                ],
              },
              {
                q: "How many lateral degrees of freedom does a five-storey shear building have, and why?",
                marks: 2,
              },
              {
                q: "State the shear-building assumptions used to idealise a multi-storey frame.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Damping: sources and mathematical models",
            body: [
              "Damping is the mechanism by which vibrating structures lose energy, and it is the reason free vibration dies out and resonance stays bounded. No structure is described by a single mechanism: energy is lost in material hysteresis - the micro-cracking of concrete and crystal-level friction in steel - in friction and micro-slip at bolted and welded joints, in the opening and closing of cracks, in partition walls, facades and other non-structural elements, and in energy radiated away through the foundation into the soil. The damping measured on a finished building is the sum of all these contributions working together.",
              "Because these mechanisms are too complicated to model individually, analysis uses idealised mathematical models. Viscous damping assumes a force proportional to velocity, giving a linear differential equation that integrates cleanly; it is the default of this course. Coulomb damping assumes a constant friction force opposing the direction of motion, which decays free vibration linearly rather than exponentially. Hysteretic or structural damping dissipates energy proportional to displacement squared each cycle and is largely frequency-independent; codes fold it into an equivalent viscous damping by matching the energy dissipated per cycle.",
              "The working measure is the damping ratio zeta, the actual damping coefficient divided by the critical value c_critical = 2 m omega_n, at which the system returns to rest without oscillating. Typical measured values: welded steel structures 2 to 3 percent, bolted steel 4 to 5 percent, reinforced concrete about 5 percent, masonry higher still. IS 1893 builds its design spectrum on 5 percent. Damping is estimated experimentally - from the logarithmic decrement of a free-vibration record in Unit II, or from the half-power bandwidth of a resonance curve - and it remains the least certain property in any dynamic calculation.",
            ],
            bullets: [
              "Damping dissipates vibration energy; without it, resonant amplitudes would grow without bound.",
              "Sources: material hysteresis, joint friction and slip, crack opening, non-structural elements, radiation into soil.",
              "Viscous model: force c times velocity; linear equation; the default in this course.",
              "Coulomb model: constant friction force; amplitude decays linearly per cycle, not exponentially.",
              "Hysteretic model: energy per cycle proportional to displacement squared; folded into equivalent viscous damping.",
              "Damping ratio zeta = c / c_critical with c_critical = 2 m omega_n; typical values 2-5 percent for steel and RC.",
              "IS 1893 design spectrum assumes 5 percent damping.",
            ],
            table: {
              caption: "The three classical damping models compared.",
              headers: ["Model", "Force law", "Free-vibration decay", "Where used"],
              rows: [
                ["Viscous", "F = c x' (velocity-proportional)", "Exponential envelope e^(-zeta omega_n t)", "Default analysis model, dashpots"],
                ["Coulomb (friction)", "F = constant, opposing motion", "Linear decay of amplitude per cycle", "Dry friction, sliding joints"],
                ["Hysteretic", "Energy per cycle proportional to x^2", "Amplitude decay roughly frequency-independent", "Material damping via equivalent viscous"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Where a building's damping comes from",
              caption:
                "From engineered devices at the top to material micro-mechanics at the bottom - all of it added into one measured damping ratio.",
              layers: [
                { label: "Added devices", note: "viscous, friction and tuned mass dampers - engineered 15-30 percent effective" },
                { label: "Foundation radiation", note: "vibration energy radiated into the soil as waves" },
                { label: "Non-structural elements", note: "partitions, facades and finishes absorbing motion" },
                { label: "Joints and connections", note: "bolt slip, weld micro-plasticity, bearing friction" },
                { label: "Material hysteresis", note: "concrete micro-cracking, steel crystal friction" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two numbers, two marks",
              body: "Memorise c_critical = 2 m omega_n = 2 sqrt(km) and the typical damping ratios - steel 2-3 percent, RC 5 percent. Almost every RGPV paper asks either the critical damping formula or a typical value, and both are single-line answers.",
            },
            keyTerms: [
              { term: "Viscous damping", definition: "A damping model in which the resisting force is proportional to velocity, c times x', producing a linear equation of motion." },
              { term: "Coulomb damping", definition: "Dry-friction damping with a force of constant magnitude opposing motion; free-vibration amplitude decays linearly with cycles." },
              { term: "Damping ratio", definition: "The ratio zeta of actual damping to critical damping c_critical = 2 m omega_n; 5 percent is the code assumption for buildings." },
            ],
            examQuestions: [
              {
                q: "What is damping? Explain its physical sources in buildings, describe the viscous, Coulomb and hysteretic models, and define the damping ratio with typical values for steel and concrete structures.",
                marks: 7,
                outline: [
                  "Define damping: dissipation of vibration energy, causing decay of free vibration and bounded resonance.",
                  "List sources: material hysteresis, joint friction, crack opening, non-structural elements, foundation radiation.",
                  "Viscous model: F = c x'; linear ODE; exponential decay envelope; the standard analysis choice.",
                  "Coulomb model: constant friction force; linear amplitude decay; force reverses each half cycle.",
                  "Hysteretic model: loop area proportional to displacement squared; equivalent viscous conversion by energy matching.",
                  "Damping ratio zeta = c/(2 m omega_n); critical damping returns the mass without oscillation.",
                  "Typical values: welded steel 2-3 percent, RC about 5 percent; IS 1893 uses 5 percent.",
                ],
              },
              {
                q: "Define critical damping and state its formula for an SDOF system.",
                marks: 2,
              },
              {
                q: "Why is the viscous damping model preferred in structural analysis even though it is not the true physical mechanism?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "The equation of motion and its derivation",
            body: [
              "Every SDOF problem in this course reduces to one equation. Drawing a free-body diagram of the mass, the forces acting are the elastic restoring force k x pulling back toward equilibrium, the damping force c x' opposing the velocity, and the applied load F(t); Newton's second law then assembles them into m x'' + c x' + k x = F(t). Alternatively, D'Alembert's principle reverses the inertia term and treats mass times acceleration as just one more force in an equilibrium statement - which is why the same equation can be written by direct equilibrium, by energy methods or, for MDOF systems, by Lagrange's equations.",
              "A worked example fixes the procedure. A single-storey concrete frame carries a roof mass of 20,000 kg. Four fixed-ended columns contribute a combined lateral stiffness of 8,000 kN/m, and the frame has 5 percent damping. The free-body of the roof mass gives 20,000 x'' + 40,000 x' + 8,000,000 x = F(t) in SI units, where the damping coefficient 40,000 N s/m follows from zeta times twice m omega_n. The natural circular frequency is sqrt(k/m) = 20 rad/s, the cyclic frequency 3.18 Hz and the period 0.31 s - numbers reused throughout this guide.",
              "Formulation is also the moment of classification. The equation above is linear, so its response is the sum of the free-vibration solution, fixed by initial conditions and decaying with damping, plus a particular solution driven by F(t); Units II and III develop both. If the stiffness changes with displacement - cracking, yielding, gap opening - the problem becomes nonlinear and needs the step-by-step numerical integration met in Section 2.5. Gravity loads are handled separately: for a linear system the static equilibrium position under gravity merely becomes the origin of the dynamic coordinate, so dynamic analysis is performed about the deformed static position.",
            ],
            bullets: [
              "Equation of motion: m x'' + c x' + k x = F(t) - inertia, damping, spring and external force.",
              "Newton route: free-body diagram of the mass plus the second law of motion.",
              "D'Alembert route: reverse the inertia force and write instantaneous equilibrium - dynamics as statics.",
              "Energy route: Lagrange's equations generalise the recipe to many degrees of freedom.",
              "Storey stiffness of fixed-ended column sets: k = sum of 12EI/h^3 (cantilever columns give 3EI/h^3 each).",
              "Once formulated, classify the problem: linear or nonlinear, free or forced, damped or undamped.",
            ],
            codeExample: {
              language: "python",
              caption: "Euler integration of the SDOF equation of motion.",
              code: `import numpy as np

# Single-storey frame: m x'' + c x' + k x = F(t)
m = 20000.0            # roof mass, kg
k = 8.0e6              # storey stiffness, N/m
zeta = 0.05            # damping ratio
wn = (k / m) ** 0.5    # natural circular frequency, rad/s
c = 2.0 * zeta * m * wn

dt = 0.001             # time step, s
t = np.arange(0.0, 1.0, dt)
F = 4.0e3 * np.sin(20.0 * t)     # harmonic force near resonance

x, v = 0.0, 0.0
peak = 0.0
for i in range(len(t)):
    a = (F[i] - c * v - k * x) / m
    x = x + v * dt + 0.5 * a * dt * dt
    v = v + a * dt
    peak = max(peak, abs(x))

print("natural frequency:", round(wn, 1), "rad/s")
print("damping coefficient:", round(c), "N s/m")
print("peak displacement:", round(peak * 1000.0, 2), "mm")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Deriving the equation of motion",
              caption:
                "The same four moves whether the system is a frame, a chimney or a tower.",
              stages: [
                { label: "Choose the coordinate", note: "x = lateral roof sway from static position" },
                { label: "Draw the free-body", note: "spring force k x, damping force c x', load F(t)" },
                { label: "Apply Newton or D'Alembert", note: "sum of forces = mass x acceleration" },
                { label: "Assemble the ODE", note: "m x'' + c x' + k x = F(t)" },
                { label: "Classify and check", note: "linear? free or forced? units consistent?" },
              ],
            },
            callout: {
              type: "tip",
              title: "12 or 3 - the column stiffness trap",
              body: "A column fixed at both ends has lateral stiffness 12EI/h^3; a cantilever (fixed-free) column has 3EI/h^3 - a factor of four. Most numerical mistakes in dynamic papers trace back to this single choice, so state the end conditions before computing k.",
            },
            keyTerms: [
              { term: "Equation of motion", definition: "The differential equation relating displacement to time - m x'' + c x' + k x = F(t) for an SDOF system." },
              { term: "D'Alembert's principle", definition: "Treats the reversed mass-times-acceleration term as an inertia force, allowing a dynamic problem to be written as one of instantaneous equilibrium." },
              { term: "Lagrange's equations", definition: "Energy-based formulation of the equations of motion, generalising Newton's law to multi-degree-of-freedom systems." },
            ],
            examQuestions: [
              {
                q: "Derive the equation of motion of a single-storey shear frame supporting roof mass m with column stiffness k and damping c, using both Newton's second law and D'Alembert's principle. For m = 20,000 kg and k = 8,000 kN/m compute the natural frequency in rad/s and Hz and the period.",
                marks: 7,
                outline: [
                  "Idealise: rigid roof, flexible columns; one lateral coordinate x.",
                  "Free-body: restoring force k x, damping force c x', external force F(t).",
                  "Newton: m x'' = F(t) - c x' - k x, hence m x'' + c x' + k x = F(t).",
                  "D'Alembert: add the reversed inertia force and write equilibrium - identical equation, different viewpoint.",
                  "Compute omega_n = sqrt(k/m) = sqrt(8.0e6 / 20000) = 20 rad/s.",
                  "Cyclic frequency f = omega_n / (2 pi) = 3.18 Hz; period T = 0.31 s.",
                  "State assumptions: linear elastic, small displacements, mass lumped at roof.",
                ],
              },
              {
                q: "Write the general equation of motion of a damped SDOF system and identify each term.",
                marks: 2,
              },
              {
                q: "A cantilever column of flexural rigidity EI and height h carries a mass m at its top. Write the expression for its natural frequency.",
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
      title: "Single Degree of Freedom Systems",
      summary:
        "The complete SDOF toolkit: undamped and damped free vibration, logarithmic decrement, harmonic response with magnification and resonance, support motion with transmissibility and isolation, and the Duhamel integral with its numerical machinery.",
      chapter: {
        number: "02",
        title: "Single-Degree-of-Freedom Systems",
        intro:
          "Unit II solves the SDOF equation completely. Sections 2.1 and 2.2 treat free vibration - first without damping, where energy shuttles between spring and mass forever, then with viscous damping, whose decaying oscillations are mined for the logarithmic decrement. Sections 2.3 and 2.4 drive the system harmonically: the dynamic magnification factor, resonance and its 1/(2 zeta) peak, then support motion, transmissibility and the isolation criterion r > sqrt(2). Section 2.5 generalises to arbitrary loading with the Duhamel integral and the Newmark step-by-step schemes.",
        inOneBreath:
          "Undamped free vibration is x = A cos(omega_n t) + B sin(omega_n t) with omega_n = sqrt(k/m) and constant amplitude; viscous damping multiplies the envelope by e^(-zeta omega_n t) at frequency omega_d = omega_n sqrt(1 - zeta^2), and the logarithmic decrement delta = ln(x1/x_{n+1})/n = 2 pi zeta/sqrt(1 - zeta^2) converts decay records into damping ratios; harmonic loading produces the steady state (F0/k) x DMF with DMF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2), equal to 1/(2 zeta) at resonance; support motion yields the transmissibility with isolation only for r > sqrt(2); and arbitrary loads are handled by the Duhamel integral or Newmark integration.",
        sections: [
          {
            number: "2.1",
            title: "Undamped free vibration",
            body: [
              "Set F(t) = 0 and c = 0 and the equation of motion m x'' + k x = 0 describes free undamped vibration - the natural behaviour of the system once released. Assuming a sinusoidal solution gives the characteristic equation m s^2 + k = 0, with roots s = plus or minus i omega_n and omega_n = sqrt(k/m), the natural circular frequency in radians per second. The general solution x(t) = A cos(omega_n t) + B sin(omega_n t) is simple harmonic motion: a pure sinusoid whose amplitude and phase are fixed by the initial conditions and whose frequency is a property of the structure alone.",
              "Physically the motion is a perpetual exchange of energy. At maximum displacement all the energy is potential, one-half k A^2; at the equilibrium crossing all of it is kinetic, one-half m v_max^2, and for a linear system the two are equal. Because the restoring force is proportional to displacement, the frequency is independent of amplitude - a pendulum-like property - so measuring the sway frequency of a structure immediately yields the ratio k/m. For the Unit I frame, m = 20,000 kg and k = 8,000 kN/m give omega_n = 20 rad/s, f = 3.18 Hz and T = 0.31 s, values that reappear in every later unit.",
              "Initial conditions complete the solution. With x(0) = x0 and velocity v(0) = v0, the constants become A = x0 and B = v0/omega_n, and the amplitude follows as sqrt(x0^2 + (v0/omega_n)^2). Two practical uses follow at once: a snap-back test, releasing a structure from a displaced position, excites exactly this motion, and its measured frequency identifies the fundamental mode; and the undamped solution is the envelope around which the damped response decays in the next section. Every MDOF mode of Unit III and every point on the response spectrum of Unit IV is an SDOF oscillator behaving exactly as derived here.",
            ],
            bullets: [
              "Free undamped vibration: m x'' + k x = 0 - no external force, no damping.",
              "Natural circular frequency omega_n = sqrt(k/m) rad/s; cyclic frequency f = omega_n/(2 pi) Hz; period T = 2 pi sqrt(m/k).",
              "Solution x = A cos(omega_n t) + B sin(omega_n t): constant amplitude, frequency set by the structure.",
              "Frequency independent of amplitude - the signature of a linear restoring force.",
              "Energy shuttles between potential 0.5 k x^2 and kinetic 0.5 m v^2 with the total constant.",
              "Initial displacement x0 gives A = x0; initial velocity v0 gives B = v0/omega_n.",
              "Benchmark frame: omega_n = 20 rad/s, f = 3.18 Hz, T = 0.31 s.",
            ],
            table: {
              caption: "The benchmark single-storey frame - natural vibration characteristics.",
              headers: ["Quantity", "Formula", "Value"],
              rows: [
                ["Mass m", "roof plus tributary mass", "20,000 kg"],
                ["Stiffness k", "sum of 12EI/h^3 over four columns", "8,000 kN/m"],
                ["Natural circular frequency omega_n", "sqrt(k/m)", "20 rad/s"],
                ["Cyclic frequency f", "omega_n / (2 pi)", "3.18 Hz"],
                ["Period T", "2 pi sqrt(m/k)", "0.31 s"],
                ["Energy at amplitude A", "potential 0.5 k A^2 = kinetic 0.5 m v_max^2", "equal by exchange"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "One cycle of simple harmonic motion",
              caption:
                "The energy bookkeeping of an undamped oscillator, traced around a full cycle.",
              steps: [
                { label: "x = +A, v = 0", note: "all energy potential: 0.5 k A^2" },
                { label: "x = 0, v = -v_max", note: "all energy kinetic: 0.5 m v_max^2" },
                { label: "x = -A, v = 0", note: "peak displacement the other way" },
                { label: "x = 0, v = +v_max", note: "kinetic peak again, returning" },
              ],
            },
            callout: {
              type: "exam",
              title: "Rad/s or Hz - check before boxing",
              body: "omega_n = sqrt(k/m) is in radians per second; the frequency in hertz is omega_n divided by 2 pi. RGPV numericals lose more marks to this single slip than to any physics error, so write both quantities with their units every time.",
            },
            keyTerms: [
              { term: "Natural frequency", definition: "The frequency at which a system vibrates when disturbed and left alone: omega_n = sqrt(k/m) rad/s for an SDOF system." },
              { term: "Period of vibration", definition: "The time for one complete cycle of free vibration, T = 2 pi / omega_n = 2 pi sqrt(m/k)." },
              { term: "Simple harmonic motion", definition: "Sinusoidal oscillation in which the restoring force is proportional to displacement and the frequency is independent of amplitude." },
            ],
            examQuestions: [
              {
                q: "Derive the solution of the free-vibration equation of an undamped SDOF system with initial displacement x0 and initial velocity v0. A frame with m = 20,000 kg and k = 8,000 kN/m is pulled 10 mm sideways and released from rest; find omega_n, f, T and the expression for x(t).",
                marks: 7,
                outline: [
                  "Start from m x'' + k x = 0.",
                  "Assume x = C e^(st); characteristic equation m s^2 + k = 0; roots s = plus or minus i omega_n.",
                  "omega_n = sqrt(k/m) = sqrt(8.0e6 / 20000) = 20 rad/s.",
                  "General solution x = A cos(omega_n t) + B sin(omega_n t).",
                  "Apply x(0) = 0.010 m: A = 0.010; v(0) = 0 gives B = 0.",
                  "x(t) = 10 cos(20 t) mm; f = 20/(2 pi) = 3.18 Hz; T = 0.314 s.",
                  "Note the amplitude stays at 10 mm indefinitely because damping is zero.",
                ],
              },
              {
                q: "State the relation between the natural period and the natural frequency of an SDOF system.",
                marks: 2,
              },
              {
                q: "Why is the natural frequency of a linear structure independent of the amplitude of vibration?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Damped free vibration and the logarithmic decrement",
            body: [
              "Restore the damping term: m x'' + c x' + k x = 0. Dividing through by m and writing zeta = c/(2 m omega_n) produces three regimes. Underdamped systems, with zeta below 1, oscillate inside a decaying envelope; critically damped systems, zeta = 1, return to equilibrium fastest without oscillating; overdamped systems, zeta above 1, creep back without ever crossing. Structures are always underdamped - zeta of a few percent - so the practical solution is x(t) = e^(-zeta omega_n t) times (A cos(omega_d t) + B sin(omega_d t)), where the damped natural frequency omega_d = omega_n sqrt(1 - zeta^2) is barely below omega_n for light damping.",
              "The decaying oscillation is also the best measuring instrument for damping. The logarithmic decrement delta is the natural logarithm of the ratio of two peak amplitudes n cycles apart: delta = ln(x1/x_{n+1})/n, and theory gives delta = 2 pi zeta/sqrt(1 - zeta^2), which for light damping collapses to zeta approximately equal to delta/(2 pi). A snap-back test on the benchmark frame records peaks of 10.0 and 4.89 mm ten cycles apart: delta = ln(10/4.89)/10 = 0.0715, so zeta = 1.1 percent. One free-decay record thus delivers both the frequency and the damping - the cheapest system-identification test there is.",
              "Two companions complete the toolkit. The half-power bandwidth method reads damping from the resonance curve of a forced-vibration test instead: with omega_1 and omega_2 the frequencies where the amplitude falls to 1/sqrt(2) of its peak, zeta is approximately (omega_2 - omega_1)/(2 omega_n). And the shape of the decay diagnoses the mechanism: viscous damping decays exponentially, Coulomb friction decays linearly, so a measured record whose amplitude falls off linearly is telling the engineer that friction, not viscosity, dominates. Damping identified this way is what enters the modal analysis of Unit III and the 5 percent code assumption of Unit IV.",
            ],
            bullets: [
              "Three damping regimes: underdamped zeta < 1 (oscillating decay), critical zeta = 1, overdamped zeta > 1; structures are underdamped.",
              "Decay envelope e^(-zeta omega_n t); amplitude halves in ln(2)/(zeta omega_n) seconds.",
              "Damped frequency omega_d = omega_n sqrt(1 - zeta^2) - within half a percent for zeta up to 10 percent.",
              "Logarithmic decrement delta = ln(x1/x_{n+1})/n = 2 pi zeta/sqrt(1 - zeta^2), approximately 2 pi zeta when light.",
              "Worked record: 10.0 mm to 4.89 mm in 10 cycles gives delta = 0.0715 and zeta = 1.1 percent.",
              "Half-power bandwidth: zeta approximately (omega_2 - omega_1)/(2 omega_n) from a resonance curve.",
              "Linear amplitude decay with time indicates Coulomb friction, not viscous damping.",
            ],
            codeExample: {
              language: "python",
              caption: "Damping from a free-decay record by the logarithmic decrement.",
              code: `import math

# successive same-sign peaks of a snap-back test, mm
peaks = [10.0, 9.31, 8.67, 8.07, 7.51,
         6.99, 6.51, 6.06, 5.64, 5.25, 4.89]

n = len(peaks) - 1
delta = math.log(peaks[0] / peaks[-1]) / n
zeta = delta / math.sqrt(4.0 * math.pi ** 2 + delta ** 2)

print("cycles used:", n)
print("log decrement delta =", round(delta, 4))
print("damping ratio zeta =", round(zeta, 4))
print("damping ratio =", round(100.0 * zeta, 2), "percent")`,
            },
            diagram: {
              kind: "flow",
              title: "From decay record to damping ratio",
              caption:
                "The logarithmic-decrement routine in five moves.",
              steps: [
                { label: "Record x(t) after release", note: "snap-back or impact excitation" },
                { label: "Mark same-sign peaks n cycles apart", note: "x1 and x_{n+1}" },
                { label: "Compute delta = ln(x1/x_{n+1})/n", note: "n is cycles, not peaks" },
                { label: "Convert to zeta", note: "delta / sqrt(4 pi^2 + delta^2)" },
                { label: "Cross-check the mechanism", note: "exponential decay means viscous; linear means friction" },
              ],
            },
            callout: {
              type: "warning",
              title: "n is the number of cycles",
              body: "The classic log-decrement error is dividing by the count of peaks instead of the number of cycles between them. Between peak 1 and peak 11 there are ten cycles. Write the formula, substitute, and state n explicitly before computing.",
            },
            keyTerms: [
              { term: "Logarithmic decrement", definition: "The natural log of the ratio of two amplitudes n cycles apart, divided by n; a direct measure of damping in free vibration." },
              { term: "Critical damping", definition: "The damping coefficient c = 2 m omega_n at which the system returns to equilibrium in the least time without oscillating." },
              { term: "Damped natural frequency", definition: "The frequency of damped free vibration, omega_d = omega_n sqrt(1 - zeta^2), slightly below the undamped value." },
            ],
            examQuestions: [
              {
                q: "Derive the free-vibration response of a viscously damped SDOF system for zeta < 1, define the logarithmic decrement and show that delta = 2 pi zeta/sqrt(1 - zeta^2). A free-vibration record shows amplitudes of 10 mm and 4.89 mm separated by 10 cycles; find the damping ratio.",
                marks: 7,
                outline: [
                  "Write m x'' + c x' + k x = 0 and assume x = C e^(st).",
                  "Characteristic roots s = -zeta omega_n plus or minus i omega_n sqrt(1 - zeta^2) for zeta < 1.",
                  "Solution: x = e^(-zeta omega_n t)(A cos omega_d t + B sin omega_d t) with omega_d = omega_n sqrt(1 - zeta^2).",
                  "Define delta = ln(x_i / x_{i+1}) for adjacent same-sign peaks.",
                  "Ratio of peaks one period apart: x_i/x_{i+1} = e^(zeta omega_n T_d), so delta = zeta omega_n T_d = 2 pi zeta/sqrt(1 - zeta^2).",
                  "Numerical: delta = ln(10/4.89)/10 = 0.0715.",
                  "zeta = 0.0715/sqrt(4 pi^2 + 0.0715^2) = 0.0114, about 1.1 percent.",
                ],
              },
              {
                q: "Distinguish between underdamped, critically damped and overdamped systems.",
                marks: 3,
              },
              {
                q: "The amplitude of free vibration halves in 5 cycles. Estimate the damping ratio.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Harmonic forced vibration, magnification and resonance",
            body: [
              "Now drive the system: m x'' + c x' + k x = F0 sin(omega t). The complete response is the sum of the transient complementary solution, which decays to nothing, and the steady-state particular solution - a sinusoid at the forcing frequency lagging the load by a phase angle. The steady-state amplitude is the static deflection F0/k multiplied by the dynamic magnification factor DMF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2), where r = omega/omega_n is the frequency ratio; the phase lag follows tan(theta) = 2 zeta r/(1 - r^2). All of machine-foundation design hangs on these two expressions.",
              "Resonance is the story of r near 1. Exactly at r = 1 the magnification factor collapses to 1/(2 zeta): with 5 percent damping, ten times static; with 2 percent, twenty-five times. A machine passing through its startup ramp sweeps r across 1, and the peak is limited only by damping and by how fast the sweep is. Design therefore parks the operating point away from resonance - the usual requirement is r below about 0.7 or above about 1.4. For rotating unbalance the force itself grows with omega squared, reshaping the response curve, and the force reaching the foundation is assessed with the transmissibility of the next section.",
              "Away from resonance the factor has clean limits. For r much below 1 the DMF approaches 1: the structure tracks the load quasi-statically and stiffness governs. For r much above 1 the DMF approaches 1/r^2 and the mass barely moves at all - the vibration-isolation regime. Damping is a mixed blessing: it suppresses the resonance peak but degrades isolation, a trade quantified in Section 2.4. Worked check: a fan running at 12 Hz on a support whose natural frequency is 4 Hz has r = 3; with zeta = 0.05, DMF = 1/sqrt(64.09) = 0.125, comfortably in the isolated zone.",
            ],
            bullets: [
              "Steady-state amplitude X = (F0/k) x DMF with DMF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2).",
              "Frequency ratio r = forcing frequency / natural frequency - the single most important number in dynamics.",
              "At resonance r = 1: DMF = 1/(2 zeta) - 10 for zeta = 5 percent, 25 for 2 percent.",
              "Phase lag crosses 90 degrees at r = 1, rising from near 0 to near 180 degrees.",
              "r much below 1: quasi-static, DMF near 1; r much above 1: isolated, DMF near 1/r^2.",
              "Machine foundations: keep the operating r below about 0.7 or above about 1.4.",
              "Rotating unbalance adds an omega-squared force multiplier, flattening the high-frequency tail.",
            ],
            codeExample: {
              language: "python",
              caption: "Sweeping the dynamic magnification factor.",
              code: `import math

ZETA = 0.05

def dmf(r):
    den = math.sqrt((1.0 - r * r) ** 2 + (2.0 * ZETA * r) ** 2)
    return 1.0 / den

print("  r      DMF")
for r in (0.25, 0.50, 0.75, 0.90, 1.00, 1.25, 1.50, 2.00, 3.00):
    print(" ", r, "  ", round(dmf(r), 3))

print("at resonance DMF = 1/(2 zeta) =", round(1.0 / (2.0 * ZETA), 1))`,
            },
            diagram: {
              kind: "fork",
              title: "Where does the operating frequency sit?",
              caption:
                "Every rotating-machine check is this fork: find r and read the branch.",
              start: "Frequency ratio r = forcing frequency / natural frequency",
              branches: [
                {
                  label: "r < 0.7 - quasi-static",
                  outcome: "DMF close to 1; structure follows the load; safe operating band below resonance",
                  good: true,
                },
                {
                  label: "0.8 < r < 1.25 - resonance band",
                  outcome: "DMF = 1/(2 zeta): 10 to 25 times static; avoid, or add damping and isolation",
                  good: false,
                },
                {
                  label: "r > 1.4 - isolation side",
                  outcome: "DMF approximately 1/r^2; mass almost stands still - machines on soft supports live here",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The two formulas to carry into the hall",
              body: "Write DMF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2) and its resonance value 1/(2 zeta) from memory. Numericals in this unit are substitution exercises once these are on paper, and both formulas carry marks even before numbers appear.",
            },
            keyTerms: [
              { term: "Dynamic magnification factor", definition: "Ratio of steady-state dynamic amplitude to the static deflection under the same force amplitude: 1/sqrt((1 - r^2)^2 + (2 zeta r)^2)." },
              { term: "Resonance", definition: "The condition r = 1, forcing frequency equal to natural frequency, at which the magnification factor reaches 1/(2 zeta)." },
              { term: "Frequency ratio", definition: "r = forcing frequency divided by natural frequency; the dimensionless parameter governing forced response." },
            ],
            examQuestions: [
              {
                q: "Derive the steady-state response of a damped SDOF system to a harmonic force F0 sin(omega t), obtain the dynamic magnification factor, and discuss the three regions of the frequency response with design implications for machine foundations.",
                marks: 7,
                outline: [
                  "Assume the particular solution x = X sin(omega t - theta); substitute in the equation of motion.",
                  "Equate coefficients of sin and cos to obtain two algebraic equations.",
                  "Amplitude X = (F0/k) / sqrt((1 - r^2)^2 + (2 zeta r)^2) with r = omega/omega_n.",
                  "Phase: tan theta = 2 zeta r/(1 - r^2); theta passes 90 degrees at resonance.",
                  "At r = 1, DMF = 1/(2 zeta): 10 at 5 percent damping, 25 at 2 percent.",
                  "Regions: r much below 1 quasi-static; r much above 1 isolation with DMF near 1/r^2; near r = 1 resonance.",
                  "Design rule: keep the machine operating frequency below 0.7 or above 1.4 times the natural frequency.",
                ],
              },
              {
                q: "A machine force has frequency 12 Hz; the supporting structure has a natural frequency of 4 Hz and damping ratio 0.05. Find the dynamic magnification factor.",
                marks: 3,
              },
              {
                q: "State the value of the magnification factor at resonance and explain why undamped resonance is catastrophic.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Support motion, transmissibility and vibration isolation",
            body: [
              "Earthquakes and vibrating neighbours shake a structure through its supports. For base motion y_g(t), the equation in relative coordinates x is m x'' + c x' + k x = -m y_g''(t): the ground acceleration acts as an effective force on the structure. The quantity that matters for member forces and drift is the relative displacement; the quantity that matters for equipment and occupants is the absolute acceleration. For harmonic support motion, the ratio of the transmitted force to the applied force - or of the mass motion to the base motion - is the transmissibility TR = sqrt((1 + (2 zeta r)^2)/((1 - r^2)^2 + (2 zeta r)^2)).",
              "The TR curve is a sterner version of the DMF curve with one famous twist: transmissibility exceeds 1 for all frequency ratios below sqrt(2), equals 1 exactly at r = sqrt(2) whatever the damping, and falls below 1 only above it. That is the entire theory of vibration isolation - to isolate a machine, its mounted natural frequency must be pushed above sqrt(2) times the excitation frequency, usually by softening the springs or adding mass. Damping helps in the amplification region but actively hurts in the isolation region, where a more damped mount transmits more force - a counter-intuitive fact every designer must respect.",
              "The same mathematics frames the earthquake problem and the base-isolation strategy of Unit V. Base isolation inserts soft bearings between ground and structure, lengthening the period so that the whole building sits at r well above sqrt(2) for the earthquake's dominant frequencies - the structure then moves less than the ground beneath it. Precision equipment in laboratories is isolated the same way, and vehicle suspensions apply identical logic between road and body. Transmissibility unites the machine foundation, the seismic isolation bearing and the car suspension in one plot of r against TR.",
            ],
            bullets: [
              "Support motion: m x'' + c x' + k x = -m y_g''(t) in relative coordinates - the earthquake equation.",
              "Transmissibility TR = sqrt((1 + (2 zeta r)^2)/((1 - r^2)^2 + (2 zeta r)^2)).",
              "TR > 1 for r < sqrt(2); TR = 1 at r = sqrt(2) for every damping value; TR < 1 only beyond.",
              "Isolation recipe: mounted natural frequency < excitation frequency / sqrt(2) - soften springs or add mass.",
              "Damping reduces the resonant peak but worsens isolation above sqrt(2) - choose per operating region.",
              "At r = 1 the peak transmissibility is about 1/(2 zeta), just like the DMF.",
              "Base isolation (Unit V) is this principle applied to whole buildings in earthquakes.",
            ],
            table: {
              caption: "Transmissibility versus frequency ratio at 5 percent damping.",
              headers: ["r", "TR (zeta = 0.05)", "Region"],
              rows: [
                ["0.5", "1.33", "Amplified transmission"],
                ["1.0", "10.0", "Resonance peak - avoid"],
                ["sqrt(2) = 1.414", "1.00", "Isolation boundary - TR = 1 for all zeta"],
                ["2.0", "0.36", "Isolated"],
                ["3.0", "0.17", "Well isolated"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The transmissibility map",
              caption:
                "Four regimes of support-excited motion; every isolation decision lands on one of these quadrants.",
              axes: { x: "frequency ratio r", y: "transmitted force / base motion" },
              quadrants: [
                { label: "Quasi-static, r < 0.5", note: "TR slightly above 1; structure follows the support" },
                { label: "Isolation roll-off, r > sqrt(2)", note: "TR falls as about 1/r^2; design mounts and isolators here" },
                { label: "Resonance band, r near 1", note: "TR = 1/(2 zeta); damping is the only restraint" },
                { label: "Transition, 0.5 < r < 1.4", note: "TR rises steeply through the peak - pass through quickly" },
              ],
            },
            callout: {
              type: "warning",
              title: "Damping hurts isolation",
              body: "Above r = sqrt(2) an undamped mount transmits less force than a damped one. In design answers, always say where on the r-axis the system operates before recommending damping - recommending added damping for an isolated machine is the classic wrong answer.",
            },
            keyTerms: [
              { term: "Transmissibility", definition: "The ratio of force transmitted to the base (or motion transmitted to the mass) to the applied force (or base motion) under harmonic excitation." },
              { term: "Vibration isolation", definition: "Reducing transmitted vibration by ensuring the mounted natural frequency is below the excitation frequency divided by sqrt(2)." },
              { term: "Base excitation", definition: "Support or ground motion imposed on a structure, producing the equation m x'' + c x' + k x = -m y_g''(t) in relative coordinates." },
            ],
            examQuestions: [
              {
                q: "Define transmissibility, derive its expression for a viscously damped SDOF system under harmonic support motion, and state and explain the condition for vibration isolation. Why is damping beneficial below r = sqrt(2) but harmful above it?",
                marks: 7,
                outline: [
                  "Define TR = transmitted force / applied force for force excitation (the same expression gives the motion ratio).",
                  "Write the transmitted force as the sum of spring and damper forces at the base.",
                  "Combine with the steady-state amplitude to get TR = sqrt((1 + (2 zeta r)^2)/((1 - r^2)^2 + (2 zeta r)^2)).",
                  "Show TR > 1 for r < sqrt(2) and TR = 1 at r = sqrt(2) independent of zeta.",
                  "Isolation condition: r > sqrt(2), i.e., mounted natural frequency < excitation/sqrt(2).",
                  "Below sqrt(2), damping cuts the resonant peak; above it the damper force adds to transmission.",
                  "Applications: machine mounts, vehicle suspension, base-isolated buildings.",
                ],
              },
              {
                q: "State the isolation criterion for a machine of mass m excited at frequency omega.",
                marks: 2,
              },
              {
                q: "Compute the transmissibility for r = 2 and zeta = 0.05.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Arbitrary loading: the Duhamel integral and step-by-step methods",
            body: [
              "Earthquake records, blast pressure histories and wind gusts are arbitrary functions of time, and the response to them is built from impulses. Over a small interval d tau a force F(tau) delivers the impulse F(tau) d tau, which changes the mass velocity abruptly; the SDOF response to a unit impulse applied at time tau is h(t - tau) = e^(-zeta omega_n (t - tau)) sin(omega_d (t - tau))/(m omega_d) for a damped system. Superposing every such impulse over the loading history gives the Duhamel integral, the convolution of the load with the impulse response; for undamped systems the exponential factor disappears.",
              "The integral is exact for linear systems but is evaluated numerically for real records. Piecewise-exact methods interpolate the load linearly between time stations and integrate exactly within each interval - the classical Nigam-Jennings algorithm used in seismic codes. Newmark's family does the same with assumed acceleration variation: the average-acceleration scheme is unconditionally stable, the linear-acceleration scheme is more accurate per step but conditionally stable, and explicit central-difference schemes are fast but valid only for short steps. The step size is dictated by the shortest period to be resolved - typically a tenth of it or less.",
              "One further idea turns this machinery into the central object of Unit IV: run the same accelerogram through SDOF oscillators of many different periods, store only the peak response of each, and plot peak against period - that is the response spectrum. So the Duhamel integral is not one method among several; it is the engine inside response-spectrum analysis, mode-superposition programs and every time-history analysis in ETABS, SAP2000 or OpenSees. Understanding this section is what makes Unit IV's design spectrum feel like a familiar object rather than a code artefact.",
            ],
            bullets: [
              "Impulse response: h(t) = e^(-zeta omega_n t) sin(omega_d t)/(m omega_d) - the building block of arbitrary response.",
              "Duhamel integral: x(t) = integral of F(tau) h(t - tau) d tau from 0 to t - superposition of impulses.",
              "Piecewise-exact methods: linear load interpolation with exact integration per step (Nigam-Jennings).",
              "Newmark average acceleration: unconditionally stable, the workhorse of seismic analysis.",
              "Linear acceleration: more accurate per step, conditionally stable; central difference: explicit, small steps only.",
              "Step size rule: dt a small fraction - a tenth or less - of the shortest natural period of interest.",
              "Peak-of-many-oscillators over one record = the response spectrum (Unit IV).",
            ],
            table: {
              caption: "Numerical integration schemes for the equation of motion.",
              headers: ["Method", "Assumption per step", "Stability", "Typical use"],
              rows: [
                ["Duhamel (analytic)", "Exact convolution for linear systems", "Exact", "Hand derivations, spectrum derivation"],
                ["Piecewise-exact", "Linear interpolation of load", "Unconditional", "Code seismic analysis (Nigam-Jennings)"],
                ["Newmark average acceleration", "Constant acceleration over step", "Unconditional", "General-purpose time history"],
                ["Newmark linear acceleration", "Acceleration linear over step", "Conditional", "When accuracy per step matters"],
                ["Central difference", "Explicit finite difference", "Conditional", "Fast, very small steps"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Arbitrary load to response time history",
              caption:
                "How any F(t) - earthquake, blast or gust - is turned into a displacement history.",
              stages: [
                { label: "Slice the load into impulses", note: "F(tau) d tau at every instant" },
                { label: "Impulse response function", note: "h(t) = e^(-zeta wn t) sin(omega_d t)/(m omega_d)" },
                { label: "Convolve: Duhamel integral", note: "superpose all impulses with their time lags" },
                { label: "Step-by-step recurrence", note: "Newmark or piecewise-exact at each station" },
                { label: "Record the peaks", note: "the same engine later builds the response spectrum" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the integral with limits",
              body: "The Duhamel integral answer earns full form marks only with the integration limits 0 to t, the exponential decay term and the damped frequency in the denominator. Practise writing it once from memory: x(t) = (1/(m omega_d)) times the integral from 0 to t of F(tau) e^(-zeta omega_n (t - tau)) sin(omega_d (t - tau)) d tau.",
            },
            keyTerms: [
              { term: "Duhamel integral", definition: "The convolution integral expressing the response of a linear SDOF system to arbitrary loading as a superposition of impulse responses." },
              { term: "Impulse response function", definition: "The free-vibration response of a damped SDOF system to a unit impulse; the kernel of the Duhamel integral." },
              { term: "Newmark method", definition: "A family of step-by-step integration schemes; the average-acceleration variant is unconditionally stable and standard in seismic analysis." },
            ],
            examQuestions: [
              {
                q: "Explain the Duhamel integral approach to the response of an SDOF system to arbitrary dynamic loading. Derive the impulse response function, write the integral for a damped system, and name two numerical schemes used to evaluate response histories.",
                marks: 7,
                outline: [
                  "Decompose F(t) into infinitesimal impulses F(tau) d tau.",
                  "Impulse-momentum: each impulse changes the velocity by F(tau) d tau / m.",
                  "Response to a unit impulse at tau: h(t - tau) = e^(-zeta omega_n (t - tau)) sin(omega_d (t - tau))/(m omega_d).",
                  "Superpose: x(t) = integral from 0 to t of F(tau) h(t - tau) d tau.",
                  "Special cases: undamped (drop the exponential); suddenly applied constant load.",
                  "Numerical evaluation: piecewise-exact (Nigam-Jennings) and Newmark average acceleration.",
                  "Stability: average acceleration unconditionally stable; central difference conditionally stable.",
                ],
              },
              {
                q: "State the impulse-momentum theorem and its role in deriving the impulse response.",
                marks: 2,
              },
              {
                q: "Why must the time step in direct integration be a small fraction of the natural period?",
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
      title: "Multi Degree of Freedom Systems",
      summary:
        "From one coordinate to many: matrix equations of motion, the eigenvalue problem with frequencies and mode shapes, orthogonality and modal coordinates, mode superposition in practice, and the Rayleigh and Dunkerley hand estimates.",
      chapter: {
        number: "03",
        title: "Multi-Degree-of-Freedom Systems",
        intro:
          "Unit III scales the story to many floors. Section 3.1 assembles the matrix equation of motion M x'' + C x' + K x = F(t) for the two-storey benchmark that carries the whole unit; 3.2 solves the eigenproblem for its frequencies and mode shapes; 3.3 proves orthogonality, defines modal mass and effective mass, and uncouples the equations; 3.4 runs the full mode-superposition procedure with SRSS and CQC combination; 3.5 closes with the Rayleigh and Dunkerley hand estimates that bracket the fundamental frequency.",
        inOneBreath:
          "Lumped masses give a diagonal M and storey stiffnesses a tridiagonal K; synchronous motion x = phi sin(omega t) leads to (K - omega^2 M) phi = 0 and the characteristic determinant, whose n roots are the squared natural frequencies and whose eigenvectors are the mode shapes; modes are orthogonal in both phi_i^T M phi_j = 0 and phi_i^T K phi_j = 0, which turns coupled equations into independent modal SDOFs solved by Unit II methods and recombined, truncated by the 90 percent effective-mass rule; and the Rayleigh quotient omega^2 = phi^T K phi / phi^T M phi estimates the fundamental frequency from above while Dunkerley's reciprocal sum estimates it from below.",
        sections: [
          {
            number: "3.1",
            title: "Equations of motion in matrix form",
            body: [
              "A shear building with n floors vibrates in n lateral displacements, gathered in the vector x. Newton's law applied at every floor simultaneously produces the matrix equation of motion M x'' + C x' + K x = F(t): M is the mass matrix, diagonal when masses are lumped at the floors; K is the stiffness matrix, whose off-diagonal terms couple adjacent storeys through the columns; C is the damping matrix, which - because damping cannot be assembled from member properties the way stiffness can - is usually constructed as Rayleigh damping, a combination alpha M + beta K chosen to match target modal damping ratios.",
              "Assembling K for a shear building is mechanical. Storey stiffness k_j is the sum of column stiffnesses at level j; the spring force across a storey is k_j(x_j - x_{j-1}); expanding each floor's equilibrium stacks these into a tridiagonal, symmetric, positive-definite matrix. The benchmark two-storey frame - floor masses 20,000 and 10,000 kg, storey stiffnesses 8,000 and 4,000 kN/m - yields M = diag(20,000; 10,000) kg and K with diagonal entries 12,000,000 and 4,000,000 N/m and off-diagonals -4,000,000 N/m. These two matrices carry the complete dynamic personality of the building.",
              "Three remarks complete the picture. First, the axial rigidity of columns and the in-plane rigidity of slabs - the shear-building assumptions of Section 1.3 - are what keep M diagonal and K tridiagonal; relax them and the matrices fill in. Second, massless degrees of freedom, such as joint rotations, are removed by static condensation before dynamic analysis. Third, gravity loads superpose separately in linear analysis, so the dynamic equation is always written about the static equilibrium position. What remains is one question: what motions does this matrix system actually perform? That is the eigenproblem of the next section.",
            ],
            bullets: [
              "Matrix equation of motion: M x'' + C x' + K x = F(t) - one row per degree of freedom.",
              "Lumped masses give a diagonal M; consistent-mass finite elements give a banded M.",
              "K for a shear building is tridiagonal, symmetric and positive definite; off-diagonals couple adjacent floors.",
              "Rayleigh damping C = alpha M + beta K exists because damping cannot be assembled member by member.",
              "Static condensation removes massless DOFs such as joint rotations.",
              "Benchmark two-storey: M = diag(20,000; 10,000) kg, K = [[12, -4], [-4, 4]] x 10^6 N/m.",
            ],
            table: {
              caption: "The ingredients of the benchmark two-storey shear building.",
              headers: ["Object", "Meaning", "Benchmark values"],
              rows: [
                ["M", "Lumped floor masses", "diag(20,000; 10,000) kg"],
                ["K", "Storey stiffness coupling", "[12, -4; -4, 4] x 10^6 N/m"],
                ["C", "Rayleigh damping", "alpha M + beta K, set to 5 percent in modes 1 and 2"],
                ["F(t)", "Floor force vector", "earthquake inertia or direct forces"],
                ["x", "Lateral floor displacements", "x = [x1, x2] - two DOF"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of the matrix equation",
              caption:
                "From physical frame to matrix equation, read top down.",
              layers: [
                { label: "M x'' + C x' + K x = F(t)", note: "the governing matrix equation" },
                { label: "Damping matrix C", note: "Rayleigh alpha M + beta K - fitted, not assembled" },
                { label: "Stiffness matrix K", note: "tridiagonal for shear buildings; built from 12EI/h^3" },
                { label: "Mass matrix M", note: "diagonal when masses lump at rigid slabs" },
                { label: "Floor displacement vector x", note: "one lateral DOF per storey" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the building beside the matrices",
              body: "In the exam, sketch the two-storey frame with masses and springs next to M and K; the picture proves the assembly and prevents sign errors in the off-diagonal terms. Negative off-diagonals are correct - their sign is what couples the storeys.",
            },
            keyTerms: [
              { term: "Mass matrix", definition: "The diagonal (when lumped) matrix of floor masses relating inertia forces to accelerations." },
              { term: "Stiffness matrix", definition: "The symmetric matrix of storey stiffnesses relating forces to displacements; tridiagonal for a shear building." },
              { term: "Rayleigh damping", definition: "Damping matrix formed as alpha M + beta K, calibrated to reproduce target damping ratios in chosen modes." },
            ],
            examQuestions: [
              {
                q: "Assemble the mass and stiffness matrices for the two-storey shear building with floor masses m1 = 20,000 kg, m2 = 10,000 kg and storey stiffnesses k1 = 8,000 kN/m, k2 = 4,000 kN/m. Write the equations of motion and explain why the damping matrix cannot be assembled like K.",
                marks: 7,
                outline: [
                  "State the shear-building idealisation: rigid slabs, one lateral DOF per floor.",
                  "Mass matrix: lumped - M = diag(20,000; 10,000).",
                  "Storey forces: the spring across storey j is k_j(x_j - x_{j-1}).",
                  "Floor 1 equilibrium: m1 x1'' + (k1 + k2) x1 - k2 x2 = F1.",
                  "Floor 2: m2 x2'' - k2 x1 + k2 x2 = F2.",
                  "Read off K = [[12, -4], [-4, 4]] x 10^6 N/m.",
                  "Damping: no member damping to assemble; use Rayleigh alpha M + beta K or modal damping ratios.",
                ],
              },
              {
                q: "What is static condensation and when is it needed?",
                marks: 3,
              },
              {
                q: "Why is the mass matrix diagonal for a lumped-mass shear building?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "The eigenvalue problem: frequencies and mode shapes",
            body: [
              "Free, undamped, synchronous motion is the key hypothesis: assume every floor moves as x = phi sin(omega t), all coordinates in phase with a fixed shape phi. Substituting into M x'' + K x = 0 leaves the generalised eigenproblem (K - omega^2 M) phi = 0. Non-trivial shapes exist only when the determinant of (K - omega^2 M) vanishes - the characteristic equation, a polynomial of degree n in omega^2. Its n roots, omega_1^2 through omega_n^2, are the squared natural frequencies, and substituting each root back returns the corresponding mode shape phi_i, defined only up to an arbitrary scale factor.",
              "The benchmark two-storey yields the polynomial omega^4 - 1,000 omega^2 + 160,000 = 0 after dividing by common factors, with roots omega^2 = 200 and 800. Hence omega_1 = 14.14 rad/s - a frequency of 2.25 Hz, period 0.44 s - and omega_2 = 28.28 rad/s (4.50 Hz). Back-substitution gives mode 1 as [1, 2]: both floors move in phase, the roof twice as far. Mode 2 is [1, -1]: the floors move in opposition with equal magnitude. The first mode carries most of the building's mass and dominates earthquake response; the second matters for higher-frequency excitation.",
              "For large finite-element models the eigenproblem is solved by the same numerical machinery used everywhere in linear algebra - QR iteration, Jacobi rotations, or the Lanczos and subspace-iteration methods that extract only the lowest few modes, which is all seismic design wants. Hand methods survive as checks: Stodola's iteration converges to the fundamental mode, and a determinant search locates individual frequencies. The product of this section - frequencies plus mode shapes - is the raw material for the orthogonality, modal analysis and response-spectrum methods that finish the unit.",
            ],
            bullets: [
              "Assume synchronous motion x = phi sin(omega t) - all DOF in phase, one shape.",
              "Generalised eigenproblem: (K - omega^2 M) phi = 0.",
              "Characteristic equation: det(K - omega^2 M) = 0 - degree n in omega^2, so n frequencies.",
              "Benchmark roots: omega^2 = 200 and 800; omega_1 = 14.14 rad/s (2.25 Hz), omega_2 = 28.28 rad/s (4.50 Hz).",
              "Mode shapes: phi_1 = [1, 2] in phase with the roof doubling; phi_2 = [1, -1] in opposition.",
              "Mode shapes are defined up to scale - normalise to unit roof displacement or unit modal mass.",
              "Large models: subspace iteration and Lanczos compute only the lowest modes needed.",
            ],
            codeExample: {
              language: "python",
              caption: "Natural frequencies and mode shapes of the two-storey benchmark.",
              code: `import numpy as np

M = np.diag([20000.0, 10000.0])
K = np.array([[12.0e6, -4.0e6],
              [-4.0e6,  4.0e6]])

A = np.linalg.solve(M, K)          # dynamic matrix M^-1 K
w2, phi = np.linalg.eig(A)

order = np.argsort(w2)
for k in order:
    omega = w2[k] ** 0.5
    shape = phi[:, k] / phi[0, k]  # normalise: floor 1 = 1.0
    print("mode", k + 1,
          "omega =", round(omega, 2), "rad/s",
          "f =", round(omega / (2.0 * np.pi), 2), "Hz",
          "shape =", np.round(shape, 3))`,
            },
            diagram: {
              kind: "flow",
              title: "Solving the generalised eigenproblem",
              caption:
                "The route every natural-frequency question follows.",
              steps: [
                { label: "Assume synchronous motion", note: "x = phi sin(omega t)" },
                { label: "Substitute into free vibration", note: "(K - omega^2 M) phi = 0" },
                { label: "Set the determinant to zero", note: "characteristic equation in omega^2" },
                { label: "Solve for n eigenvalues", note: "omega_1 <= omega_2 <= ... <= omega_n" },
                { label: "Back-substitute for each mode", note: "shape phi_i; scale arbitrary - normalise" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sort and normalise before presenting",
              body: "Always list frequencies in ascending order, call omega_1 the fundamental, and state your normalisation (commonly unit top-floor displacement or unit modal mass). Examiners deduct for unsorted lists and unnormalised shapes - the physics is identical, the presentation is not.",
            },
            keyTerms: [
              { term: "Eigenvalue problem", definition: "The generalised problem (K - omega^2 M) phi = 0 whose eigenvalues are squared natural frequencies and whose eigenvectors are mode shapes." },
              { term: "Mode shape", definition: "The shape phi_i of synchronous vibration at frequency omega_i, defined up to an arbitrary scale factor." },
              { term: "Fundamental mode", definition: "The mode of lowest frequency; usually carries the largest effective mass and dominates earthquake response." },
            ],
            examQuestions: [
              {
                q: "For the two-storey shear building with M = diag(20,000; 10,000) kg and K = [[12, -4], [-4, 4]] x 10^6 N/m, determine both natural frequencies in rad/s and Hz and both mode shapes, normalised to unit first-floor displacement.",
                marks: 7,
                outline: [
                  "Write det(K - omega^2 M) = 0.",
                  "Expand: (12e6 - 20000 w2)(4e6 - 10000 w2) - 16e12 = 0.",
                  "Simplify to w4 - 1000 w2 + 160000 = 0 after dividing by 2e8.",
                  "Roots: w2 = (1000 plus or minus 600)/2 = 200 and 800.",
                  "omega_1 = 14.14 rad/s (2.25 Hz); omega_2 = 28.28 rad/s (4.50 Hz).",
                  "Mode 1: (12e6 - 4e6)phi1 - 4e6 phi2 = 0 gives phi2 = 2 phi1, so phi_1 = [1, 2].",
                  "Mode 2: -4e6 phi1 + (4e6 - 8e6)phi2 = 0 gives phi2 = -phi1, so phi_2 = [1, -1].",
                ],
              },
              {
                q: "What is meant by the fundamental period of a multi-storey building?",
                marks: 2,
              },
              {
                q: "Why are mode shapes said to be defined only up to a scale factor?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Orthogonality, modal mass and modal coordinates",
            body: [
              "The modes of an undamped MDOF system are orthogonal - perpendicular in a weighted sense - with respect to both the mass and the stiffness matrices: phi_i^T M phi_j = 0 and phi_i^T K phi_j = 0 whenever i and j differ. The proof is two lines: premultiply the eigenproblem for mode j by phi_i^T, write the twin expression with i and j exchanged, subtract, and the symmetric matrices cancel to leave (omega_j^2 - omega_i^2) phi_i^T M phi_j = 0; since the frequencies differ, mass-orthogonality follows, and stiffness-orthogonality then comes from the eigenproblem itself.",
              "For i = j the same products are not zero but define modal properties: modal mass M_i = phi_i^T M phi_i and modal stiffness K_i = phi_i^T K phi_i, with K_i = omega_i^2 M_i always. Orthogonality is the licence to expand any displacement pattern as x = sum over modes of phi_i q_i(t) - the q_i are modal or generalised coordinates. Substituting this expansion into the matrix equation of motion and premultiplying by phi_i^T kills every cross term, leaving n independent SDOF equations: M_i q_i'' + K_i q_i = phi_i^T F(t). The coupled system has become n copies of Unit II.",
              "One further modal quantity earns its keep in earthquake engineering: the effective modal mass, the fraction of total mass a mode mobilises, computed as (phi_i^T M 1)^2 / (phi_i^T M phi_i). For the benchmark, mode 1's shape [1, 2] gives modal mass 60,000 kg, modal stiffness 200 x 60,000 = 12,000,000 N/m - satisfying K_1 = omega_1^2 M_1 - and an effective mass of 26,700 kg, 89 percent of the 30,000 kg total; mode 2 carries the remaining 11 percent. This single number explains why first-mode approximations work and why IS 1893 asks for modes capturing at least 90 percent of the seismic mass.",
            ],
            bullets: [
              "Mass orthogonality: phi_i^T M phi_j = 0 for i not equal to j; stiffness orthogonality: phi_i^T K phi_j = 0.",
              "Modal mass M_i = phi_i^T M phi_i; modal stiffness K_i = phi_i^T K phi_i = omega_i^2 M_i.",
              "Expansion theorem: any displacement x = sum of phi_i q_i(t) - the modal coordinates.",
              "Orthogonality decouples the equations: M_i q_i'' + K_i q_i = phi_i^T F per mode.",
              "Effective modal mass (phi_i^T M 1)^2 / (phi_i^T M phi_i) - the mode's share of earthquake participation.",
              "Benchmark: mode 1 modal mass 60,000 kg and effective mass 89 percent; mode 2 only 11 percent.",
              "Codes: include modes until 90 percent of the seismic mass is captured (IS 1893).",
            ],
            table: {
              caption: "Modal properties of the benchmark two-storey building.",
              headers: ["Property", "Mode 1", "Mode 2"],
              rows: [
                ["Shape phi (floor 1 = 1)", "[1, 2]", "[1, -1]"],
                ["Frequency omega", "14.14 rad/s (2.25 Hz)", "28.28 rad/s (4.50 Hz)"],
                ["Modal mass phi^T M phi", "60,000 kg", "30,000 kg"],
                ["Modal stiffness omega^2 M_i", "12,000,000 N/m", "24,000,000 N/m"],
                ["Effective mass", "26,700 kg (89 percent)", "3,300 kg (11 percent)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Physical coordinates versus modal coordinates",
              caption:
                "Orthogonality is the passport between a coupled world and an uncoupled one.",
              left: {
                heading: "Physical coordinates",
                items: [
                  "Displacements x1, x2 of each floor",
                  "Equations coupled by off-diagonal K terms",
                  "Every floor responds to every other",
                  "n simultaneous differential equations",
                  "Direct integration is costly",
                ],
              },
              right: {
                heading: "Modal coordinates",
                items: [
                  "Displacements q1, q2 of each mode",
                  "Orthogonality zeroes every cross term",
                  "Each mode responds independently",
                  "n separate SDOF equations of Unit II",
                  "Recombine: x = sum phi_i q_i",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Both relations, both marks",
              body: "State the mass-orthogonality and stiffness-orthogonality equations separately - phi_i^T M phi_j = 0 and phi_i^T K phi_j = 0 - and note they hold for distinct modes with distinct frequencies. Each line is a mark in the long question on orthogonality; the two-line proof earns the rest.",
            },
            keyTerms: [
              { term: "Orthogonality of modes", definition: "The property phi_i^T M phi_j = 0 and phi_i^T K phi_j = 0 for distinct modes, making mode shapes independent of one another." },
              { term: "Modal coordinates", definition: "Coefficients q_i in the expansion of displacement in mode shapes, converting coupled MDOF equations into independent SDOF equations." },
              { term: "Effective modal mass", definition: "(phi_i^T M 1)^2 / (phi_i^T M phi_i): the portion of total mass mobilised by a mode in a given direction." },
            ],
            examQuestions: [
              {
                q: "State and prove the orthogonality property of natural modes with respect to the mass and stiffness matrices. Define modal mass and modal stiffness, and compute them for mode 1 of the benchmark building (phi_1 = [1, 2], M = diag(20,000; 10,000) kg, omega_1^2 = 200 s^-2).",
                marks: 7,
                outline: [
                  "Start from the eigenproblems K phi_i = omega_i^2 M phi_i and K phi_j = omega_j^2 M phi_j.",
                  "Premultiply the first by phi_j^T and the second by phi_i^T; subtract.",
                  "Symmetry of M and K leaves (omega_i^2 - omega_j^2) phi_i^T M phi_j = 0.",
                  "Distinct frequencies force phi_i^T M phi_j = 0; premultiplying the eigenproblem again gives phi_i^T K phi_j = 0.",
                  "Modal mass M_1 = 1^2(20000) + 2^2(10000) = 60,000 kg.",
                  "Modal stiffness K_1 = omega_1^2 M_1 = 200 x 60,000 = 12,000,000 N/m.",
                  "Consequence: modal decomposition turns the MDOF system into independent SDOF oscillators.",
                ],
              },
              {
                q: "What is the expansion theorem in modal analysis?",
                marks: 3,
              },
              {
                q: "Compute the effective modal mass of mode 1 of the benchmark if phi_1^T M 1 = 40,000 and phi_1^T M phi_1 = 60,000 (SI units).",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Mode superposition in practice",
            body: [
              "Mode superposition is modal analysis in production. Step one: solve the eigenproblem for the modes to be retained. Step two: transform the physical displacements with x = sum of phi_i q_i. Step three: use orthogonality to obtain one SDOF equation per mode - M_i q_i'' plus damping and stiffness terms equals the modal load phi_i^T F - and solve each with the Unit II toolbox: the Duhamel integral for a time history, or the response-spectrum peak for design. Step four: recombine modal responses into physical displacements, storey shears and drifts. Two practical details dominate everything else.",
              "The first detail is truncation: high modes contribute little to earthquake response - the benchmark's mode 2 carries 11 percent of the mass - so analysis keeps the modes whose effective masses sum to at least 90 percent of the total, per IS 1893. The second is combination: response-spectrum analysis gives only peak values per mode, and the peaks do not occur simultaneously. Well-separated frequencies are combined by the square-root-of-sum-of-squares rule; closely spaced modes - within about 10 percent - need the complete quadratic combination, which accounts for correlation between modes. Absolute summation is the conservative upper bound.",
              "The method's powers and limits are worth stating. Damping enters directly as modal damping ratios - typically 2 to 5 percent - assigned per mode, which neatly bypasses assembling a damping matrix. Superposition is exact for linear systems; the moment the structure yields, cracks or gaps open, the modes no longer decouple it, and the engineer falls back on direct step-by-step integration with the nonlinear skeleton. Nevertheless, for elastic design of regular buildings - the bulk of professional practice - mode superposition plus the response spectrum is the standard pipeline inside ETABS and SAP2000.",
            ],
            bullets: [
              "Four steps: eigenanalysis, transform, solve per-mode SDOF, recombine.",
              "Truncate by effective mass: keep modes until 90 percent of the seismic mass is included (IS 1893).",
              "Damping assigned per mode as zeta_i = 2-5 percent - no C matrix needed.",
              "SRSS combination for well-separated modes; CQC when frequencies lie within about 10 percent.",
              "Absolute sum is the conservative bound; modal peaks never coincide in time.",
              "Valid for linear systems only; nonlinearity forces direct step-by-step integration.",
              "This is the engine inside response-spectrum analysis in ETABS and SAP2000.",
            ],
            table: {
              caption: "The mode-superposition workflow at a glance.",
              headers: ["Step", "Action", "Output"],
              rows: [
                ["1 - Eigenanalysis", "Solve (K - omega^2 M) phi = 0", "omega_i, phi_i for retained modes"],
                ["2 - Modal parameters", "M_i, K_i, effective masses", "per-mode SDOF data, 90 percent check"],
                ["3 - Solve each mode", "Duhamel or response spectrum", "q_i(t) or peak q_i"],
                ["4 - Combine", "Reconstruct x = sum phi_i q_i", "displacements, shears, drifts"],
                ["5 - Verify", "Effective mass and drift checks", "truncation adequacy, code limits"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The mode-superposition loop",
              caption:
                "Physical space in, modal space through, physical answers back out.",
              steps: [
                { label: "Assemble M, K, F(t)", note: "physical model" },
                { label: "Solve the eigenproblem", note: "omega_i and phi_i" },
                { label: "Transform to modal coordinates", note: "x = sum phi_i q_i" },
                { label: "Solve independent SDOF equations", note: "Unit II methods, one per mode" },
                { label: "Recombine and check", note: "x, shears, drifts; 90 percent mass rule" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the combination rule",
              body: "When combining modal peaks, say which rule and why: SRSS for well-separated frequencies, CQC for modes within about 10 percent of each other. Writing 'combine the modes' without naming the rule is the most common lost mark in modal-analysis answers.",
            },
            keyTerms: [
              { term: "Mode superposition", definition: "Solution method transforming MDOF response into independent modal SDOF responses via x = sum phi_i q_i, then recombining." },
              { term: "SRSS combination", definition: "Square root of the sum of squared modal peaks - the combination rule for well-separated natural frequencies." },
              { term: "Modal truncation", definition: "Keeping only the low modes that capture most effective mass; IS 1893 requires 90 percent of the seismic mass." },
            ],
            examQuestions: [
              {
                q: "Describe the mode-superposition method for the dynamic analysis of a multi-storey building. Include the decoupling step, the role of effective modal mass in truncation, and the SRSS and CQC combination rules, stating when each applies.",
                marks: 7,
                outline: [
                  "Assemble M and K; solve the eigenproblem for candidate modes.",
                  "Expand x = sum phi_i q_i - the modal transformation.",
                  "Premultiply by phi_i^T; orthogonality decouples into M_i q_i'' + C_i q_i' + K_i q_i = phi_i^T F.",
                  "Solve each modal SDOF by Duhamel (time history) or response spectrum (design).",
                  "Truncate by effective mass - IS 1893 requires 90 percent of the seismic mass captured.",
                  "Combine peaks: SRSS for separated frequencies; CQC for closely spaced (within 10 percent).",
                  "Recombine to displacements and forces; note the method assumes linearity.",
                ],
              },
              {
                q: "When must CQC be used in preference to SRSS?",
                marks: 2,
              },
              {
                q: "Why can modal damping ratios be assigned directly instead of assembling a damping matrix?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Approximate methods: Rayleigh and Dunkerley",
            body: [
              "Full eigenanalysis is a computer's job; the hand methods exist for the preliminary-design meeting and for checking that a computer's answer has the right order of magnitude. The Rayleigh method starts from energy conservation in synchronous free vibration: omega^2 = (phi^T K phi)/(phi^T M phi) for any admissible shape phi. The quotient is stationary near the true mode shapes - remarkably insensitive to errors in the assumed shape - so a crude guess yields an accurate fundamental frequency. Using the gravity-load deflected shape as phi gives the practical form omega^2 = g sum(W_i delta_i)/sum(W_i delta_i^2).",
              "Try the benchmark with a slightly wrong shape. The exact first mode is [1, 2]; take instead [1, 1.5]. The numerator phi^T K phi evaluates to 9,000,000 N/m - from K phi = [6, 2] x 10^6 dotted with [1, 1.5] - and the denominator phi^T M phi = 42,500 kg. The quotient is 211.8 s^-2, so omega = 14.55 rad/s against the exact 14.14: a 2.9 percent error produced by a 20 percent shape error. Rayleigh's result always bounds the fundamental frequency from above, because an assumed shape is a constraint that stiffens the system.",
              "Dunkerley's formula attacks the same problem from below: the reciprocal of the squared fundamental frequency is approximately the sum of reciprocals of the partial frequencies - each computed with only one mass acting, all others removed: 1/omega^2 is approximately 1/omega_a^2 + 1/omega_b^2 + and so on. For the benchmark, Dunkerley gives omega near 12.6 rad/s, comfortably below the truth. Rayleigh plus Dunkerley therefore bracket the answer from above and below. The Rayleigh-Ritz method extends Rayleigh with several trial functions, converging toward the exact frequencies as terms are added; it is the ancestor of the finite-element method.",
            ],
            bullets: [
              "Rayleigh quotient: omega^2 = (phi^T K phi)/(phi^T M phi) for any admissible shape.",
              "Gravity-load form: omega^2 = g sum(W_i delta_i) / sum(W_i delta_i^2).",
              "Accuracy is startling: a 20 percent shape error cost only 2.9 percent frequency error in the benchmark.",
              "Rayleigh overestimates the fundamental frequency - the assumed shape constrains (stiffens) the system.",
              "Dunkerley: 1/omega^2 approximately equals the sum of 1/partial frequencies^2 - underestimates.",
              "Together they bracket the true fundamental; Rayleigh-Ritz converges with more trial functions.",
            ],
            table: {
              caption: "Hand estimates of the benchmark fundamental frequency (exact omega_1 = 14.14 rad/s).",
              headers: ["Method", "Input", "Result", "Error"],
              rows: [
                ["Rayleigh, exact shape [1, 2]", "true mode", "14.14 rad/s", "0 percent (exact)"],
                ["Rayleigh, shape [1, 1.5]", "crude guess", "14.55 rad/s", "+2.9 percent"],
                ["Dunkerley (partials)", "single-mass frequencies", "12.6 rad/s", "-10.5 percent"],
                ["Rayleigh-Ritz, 2 functions", "extended basis", "approaches 14.14 from above", "small"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The accuracy ladder for frequency estimation",
              caption:
                "Top rung costs most; every rung down trades accuracy for speed.",
              tiers: [
                { label: "Full eigenanalysis", note: "all modes, exact - software territory" },
                { label: "Rayleigh-Ritz", note: "several trial functions - still an upper bound" },
                { label: "Rayleigh quotient", note: "one assumed shape - typically within 5 percent" },
                { label: "Dunkerley", note: "flexibility partials - lower bound, fast" },
                { label: "SDOF estimate", note: "k and m by inspection - order of magnitude" },
              ],
            },
            callout: {
              type: "exam",
              title: "Rayleigh over, Dunkerley under",
              body: "State the bounding property explicitly: Rayleigh overestimates the fundamental frequency because the assumed shape constrains the structure, while Dunkerley underestimates it. Examiners ask exactly this - 'show that Rayleigh gives an upper bound' - and the one-line constraint argument earns the marks.",
            },
            keyTerms: [
              { term: "Rayleigh method", definition: "Frequency estimate omega^2 = (phi^T K phi)/(phi^T M phi) from an assumed admissible shape; overestimates the fundamental frequency." },
              { term: "Dunkerley's method", definition: "Estimate 1/omega^2 as the sum of reciprocals of partial single-mass frequencies; underestimates the fundamental." },
              { term: "Rayleigh-Ritz method", definition: "Extension of Rayleigh using several trial functions, converging to exact frequencies from above; the ancestor of finite elements." },
            ],
            examQuestions: [
              {
                q: "State the Rayleigh method for estimating the fundamental frequency of a multi-degree-of-freedom system. Derive the gravity-deflection form of the quotient, apply it to a two-storey frame with assumed shape [1, 1.5] (M = diag(20,000; 10,000) kg, K = [[12, -4], [-4, 4]] x 10^6 N/m), and show that the result exceeds the exact value.",
                marks: 7,
                outline: [
                  "State the quotient: omega^2 = phi^T K phi / phi^T M phi.",
                  "Derive the gravity form from energy: omega^2 = g sum W_i delta_i / sum W_i delta_i^2.",
                  "Compute the numerator with phi = [1, 1.5]: K phi = [6, 2] x 10^6; phi^T K phi = 9.0e6.",
                  "Denominator: phi^T M phi = 20,000 + 22,500 = 42,500.",
                  "omega^2 = 211.8, so omega = 14.55 rad/s.",
                  "Exact omega_1 = 14.14 rad/s; error +2.9 percent - an upper bound.",
                  "Reason: the assumed shape is an added constraint, so the estimate stiffens the system.",
                ],
              },
              {
                q: "Write Dunkerley's formula and state whether it bounds the frequency from above or below.",
                marks: 2,
              },
              {
                q: "Why does a moderate error in the assumed shape cause only a small error in the Rayleigh frequency?",
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
      title: "Earthquake Response of Structures",
      summary:
        "The earthquake problem: ground motion and site effects, the response spectrum and its construction, the IS 1893 design spectrum and parameters, the equivalent lateral force method and base shear, and the ductility-based design philosophy behind the R factor.",
      chapter: {
        number: "04",
        title: "Earthquake Response of Structures",
        intro:
          "Unit IV brings the subject to its engineering purpose. Section 4.1 traces ground motion from fault rupture through site amplification to the relative-coordinate equation of motion; 4.2 builds the response spectrum and reads its three regions; 4.3 assembles the IS 1893 design spectrum with its zone, importance and reduction factors; 4.4 executes the equivalent lateral force method from period to floor forces on a worked four-storey building; 4.5 explains the ductility bargain - the response reduction factor - and the capacity-design philosophy that earns it.",
        inOneBreath:
          "Earthquake waves - P, S, Love and Rayleigh - shake the base, soft soils amplify the motion near their own periods, and the structure obeys m x'' + c x' + k x = -m y_g''(t); integrating a record through SDOF oscillators of every period and keeping the peaks produces the response spectrum, whose acceleration plateau, velocity band and displacement tail are smoothed into the IS 1893 design spectrum; the design chain runs Ta = 0.075 h^0.75, then Sa/g, then Ah = (Z/2)(I/R)(Sa/g), then VB = Ah W, then Fi = VB Wi hi^2 / sum Wj hj^2; and the response reduction factor R - overstrength times ductility times redundancy - prices the code's bargain of detailing for force reduction.",
        sections: [
          {
            number: "4.1",
            title: "Earthquake ground motion and structural response",
            body: [
              "Earthquakes originate when accumulated elastic strain in the crust suddenly releases across a fault. The rupture radiates body waves - compressional P waves, fastest and least destructive, and shear S waves, which carry the main shaking - followed by surface waves, Love and Rayleigh, that arrive last, travel slowest and often cause the largest amplitudes at large distances. Strong-motion accelerographs record three components of ground acceleration; the resulting accelerogram, such as the classic 1940 El Centro record, is the raw input for structural analysis. Its salient statistics are peak ground acceleration, peak velocity, duration of strong shaking and frequency content.",
              "Local geology edits the record. Deep soft deposits amplify incoming motion at frequencies near their own natural periods and lengthen the motion's duration - the resonance of soil layers. Mexico City in 1985 was the canonical demonstration: lakebed deposits with periods around two seconds amplified a distant subduction event and devastated mid-rise buildings whose periods matched, while stiff hillsides nearby were barely damaged. The same site effect governs Indian cities on deep alluvium, which is why IS 1893 carries three soil-type curves in its design spectrum.",
              "For the structure, the base moves and the equation of motion in relative coordinates becomes m x'' + c x' + k x = -m y_g''(t): the ground acceleration is the load. Three analysis routes follow. Time-history analysis integrates this equation with a recorded or synthetic accelerogram - the most detailed route, reserved for critical or irregular structures. Response-spectrum analysis replaces the record by its peak demands and is the design-office standard. The equivalent lateral force procedure of Section 4.4 compresses the spectrum further into static storey forces for regular buildings. All three descend directly from the SDOF machinery of Unit II.",
            ],
            bullets: [
              "Order of arrival: P (fast, compressional), S (main shaking), then Love and Rayleigh surface waves (slow, often largest amplitude).",
              "Accelerogram: the recorded ground acceleration time history; the raw input of dynamic analysis.",
              "Key statistics: peak ground acceleration, peak ground velocity, duration, frequency content.",
              "Site effects: soft soil amplifies motion near its natural period and lengthens shaking - Mexico City 1985.",
              "Relative-coordinate equation: m x'' + c x' + k x = -m y_g''(t).",
              "Three routes: time history, response spectrum, equivalent lateral force.",
            ],
            table: {
              caption: "Seismic wave types at a glance.",
              headers: ["Wave", "Type", "Relative speed", "Shaking character"],
              rows: [
                ["P wave", "Body, compressional", "Fastest", "Small amplitude, arrives first"],
                ["S wave", "Body, shear", "About 60 percent of P", "Main strong shaking"],
                ["Love wave", "Surface, horizontal", "Slower than S", "Long-period horizontal motion"],
                ["Rayleigh wave", "Surface, rolling", "Slowest", "Elliptical retrograde motion, large amplitude"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From fault rupture to storey forces",
              caption:
                "The chain every earthquake analysis follows.",
              steps: [
                { label: "Fault rupture releases strain energy", note: "elastic rebound" },
                { label: "Waves propagate to the site", note: "P, then S, then surface waves" },
                { label: "Ground motion at the site", note: "accelerogram; soil edits amplitude and period" },
                { label: "Structure responds", note: "m x'' + c x' + k x = -m y_g''(t)" },
                { label: "Demands compared with capacity", note: "storey shears, drifts, member forces" },
              ],
            },
            callout: {
              type: "exam",
              title: "The minus sign matters",
              body: "Write the earthquake equation of motion explicitly as m x'' + c x' + k x = -m y_g''(t) and say that x is measured relative to the ground. The sign, the relative-coordinate statement and the identification of ground acceleration as the effective load are each worth marks in the derivation question.",
            },
            keyTerms: [
              { term: "Accelerogram", definition: "The recorded time history of ground acceleration produced by a strong-motion instrument." },
              { term: "Peak ground acceleration", definition: "The maximum absolute ground acceleration of a record; the crudest intensity measure for design." },
              { term: "Site amplification", definition: "Enhancement of ground motion by local soil deposits whose natural periods match the incoming waves, as at Mexico City in 1985." },
            ],
            examQuestions: [
              {
                q: "Describe the origin and propagation of earthquake waves, the characteristics of strong ground motion, and the effect of local soil conditions on structural response. Write the equation of motion of an SDOF structure subjected to ground motion y_g(t).",
                marks: 7,
                outline: [
                  "Origin: elastic strain energy released by sudden fault rupture (elastic rebound theory).",
                  "Body waves: P compressional, fastest, first arrival; S shear, main shaking.",
                  "Surface waves: Love and Rayleigh, slowest, largest amplitudes at distance.",
                  "Recorded as accelerograms; statistics: PGA, PGV, duration, frequency content.",
                  "Site effects: soft-soil amplification and period lengthening - Mexico City 1985 example.",
                  "Equation of motion: m x'' + c x' + k x = -m y_g''(t), with x relative to ground.",
                  "Analysis routes: time history, response spectrum, equivalent lateral force.",
                ],
              },
              {
                q: "Distinguish between body waves and surface waves.",
                marks: 2,
              },
              {
                q: "Why did mid-rise buildings suffer disproportionately in the 1985 Mexico City earthquake?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "The response spectrum",
            body: [
              "The response spectrum is the earthquake record condensed into a design tool. Fix a damping ratio - conventionally 5 percent - and an SDOF oscillator of natural period T; integrate the equation of motion with the given accelerogram and record the single largest relative displacement. Repeat for a grid of periods and plot peak displacement Sd against T: that is the displacement response spectrum. Companion curves - the pseudo-velocity Sv = omega_n Sd and the pseudo-acceleration Sa = omega_n^2 Sd - convert the same information into energy and force measures.",
              "The shape of the spectrum reflects physics. At very short periods the oscillator is stiff and tracks the ground: Sa approaches the peak ground acceleration. At periods that resonate with the dominant energy of the record and the site, the curve peaks into a plateau - for the design spectra of IS 1893 this acceleration-sensitive band runs from 0.1 second to a corner period set by soil type. At long periods Sa decays roughly as 1/T while Sd flattens: the displacement-sensitive region, home of base-isolated structures. Between lies a velocity-sensitive band where energy demands dominate.",
              "The spectrum earns its keep by collapsing time. One curve replaces an entire accelerogram for design purposes: the peak response of any linear SDOF structure - and hence, through modal analysis, the peak response of any linear MDOF structure - is read directly at its natural period. Spectra computed from many records on similar soil are averaged and smoothed into design spectra; that of IS 1893 is presented in the next section. The same construction also explains damping: raising zeta lowers the plateau, which is why the code supplies multipliers for other damping values - 1.40 at 2 percent, 0.80 at 10 percent.",
            ],
            bullets: [
              "Definition: the peak response of an SDOF oscillator to a given ground motion, plotted against its natural period.",
              "Family: Sd displacement; Sv = omega_n Sd pseudo-velocity; Sa = omega_n^2 Sd pseudo-acceleration.",
              "Construction: integrate the accelerogram oscillator by oscillator across a period grid.",
              "Short-period limit: Sa tends to PGA; long-period limit: Sa decays as 1/T while Sd flattens.",
              "Three regions: acceleration-sensitive, velocity-sensitive, displacement-sensitive.",
              "Design spectra: averages of many records, smoothed and normalised - IS 1893 next section.",
              "Damping lowers the spectrum: 2 percent multiplies by 1.40, 10 percent by 0.80 (IS 1893).",
            ],
            table: {
              caption: "The three regions of a response spectrum.",
              headers: ["Region", "Period band", "Governing quantity", "Design consequence"],
              rows: [
                ["Acceleration-sensitive", "short periods, to the soil corner", "Sa plateau", "Force-governed; stiff structures take maximum load"],
                ["Velocity-sensitive", "mid periods", "Sv near peak", "Energy input peaks; detailed checks"],
                ["Displacement-sensitive", "long periods", "Sd flattening", "Drift-governed; isolation and tall buildings live here"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Constructing a response spectrum",
              caption:
                "The algorithm behind every spectral curve - and every Section 4.2 question.",
              stages: [
                { label: "Fix the damping ratio", note: "usually 5 percent" },
                { label: "Choose a period grid", note: "T from 0.01 to 4 s" },
                { label: "Integrate each SDOF", note: "Duhamel or Newmark with the accelerogram" },
                { label: "Record the peaks", note: "Sd, Sv, Sa for every period" },
                { label: "Smooth and normalise", note: "average many records - a design spectrum" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pseudo means harmonic",
              body: "The pseudo-acceleration Sa = omega_n^2 Sd equals the true peak acceleration only for sinusoidal motion; for earthquake response it is a close, convenient proxy. Define the word 'pseudo' when you first write the relation - it is a favourite paper and viva question.",
            },
            keyTerms: [
              { term: "Response spectrum", definition: "A plot of the peak response of SDOF oscillators of varying natural period, at fixed damping, to a specified ground motion." },
              { term: "Pseudo-acceleration", definition: "Sa = omega_n^2 Sd: the acceleration inferred from peak displacement assuming harmonic motion; the basis of spectral force calculation." },
              { term: "Design spectrum", definition: "A smooth, averaged spectrum intended for design use, such as the 5 percent curve of IS 1893." },
            ],
            examQuestions: [
              {
                q: "Define the response spectrum of an earthquake and describe its construction. Explain the physical meaning of its three regions and the relations among Sd, Sv and Sa. Why does the design spectrum of IS 1893 depend on soil type?",
                marks: 7,
                outline: [
                  "Define: peak response of SDOF oscillators of period T, fixed damping, to a given motion.",
                  "Construction: integrate the equation of motion for each period on a grid; record the peak values.",
                  "Relations: Sv = omega_n Sd and Sa = omega_n^2 Sd (pseudo-quantities, harmonic assumption).",
                  "Short-period region: stiff oscillators track the ground; Sa approaches PGA.",
                  "Plateau: resonance band; corner period set by soil - rock 0.4 s, medium 0.55 s, soft 0.67 s.",
                  "Long-period region: Sa decays as 1/T and Sd flattens - displacement-governed.",
                  "Soil dependence: the site period controls where the plateau ends - hence the three IS 1893 curves.",
                ],
              },
              {
                q: "State the relation between spectral acceleration and spectral displacement.",
                marks: 2,
              },
              {
                q: "Why is a design spectrum smoothed and averaged over many recorded motions?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "The IS 1893 design spectrum and seismic parameters",
            body: [
              "IS 1893 (Part 1) converts seismology into coefficients. The seismic zone factor Z reflects the design intensity of each zone - 0.10, 0.16, 0.24 and 0.36 for zones II through V, with the design value taken as Z/2 of the maximum considered earthquake. The importance factor I raises demand for facilities needed after the earthquake: 1.0 for ordinary buildings, 1.5 for hospitals, fire stations and similar critical structures, with intermediate values in later editions. The response reduction factor R rewards ductility and redundancy - 5 for special moment-resisting frames detailed per IS 13920, 3 for ordinary frames, 1.5 for unreinforced masonry - the bargain: detailing buys force reduction.",
              "The design spectrum itself is normalised to 5 percent damping. For all soils Sa/g rises linearly as 1 + 15T up to 0.1 second, then holds the 2.5 plateau until a soil-dependent corner - 0.4 s on rock or hard soil, 0.55 s on medium soil, 0.67 s on soft soil - and then decays as 1.36/T out to 4 seconds. Other damping values scale by multipliers from the code's Table 3. The fundamental period is estimated empirically: Ta = 0.075 h^0.75 for bare RC moment frames with h in metres, 0.09 h/sqrt(d) with brick infill, and 0.085 h^0.75 for bare steel frames.",
              "Assemble the pieces for the running example: a four-storey RC special moment frame, 14 m tall, on medium soil in zone III. Ta = 0.075 x 14^0.75 = 0.54 s, inside the plateau, so Sa/g = 2.5. With Z = 0.16, I = 1.0 and R = 5, the design horizontal seismic coefficient is Ah = (Z/2)(I/R)(Sa/g) = 0.08 x 0.2 x 2.5 = 0.04 - four percent of the weight, the number that drives the base shear of the next section. Every ELF numerical in the paper is this chain computed in this order.",
            ],
            bullets: [
              "Zone factor Z: 0.10 / 0.16 / 0.24 / 0.36 for zones II / III / IV / V; design uses Z/2.",
              "Importance factor I: 1.0 for ordinary buildings, 1.5 for post-earthquake-critical facilities.",
              "Response reduction factor R: 5.0 for SMRF, 3.0 for OMRF, 1.5 for unreinforced masonry.",
              "Spectrum: Sa/g = 1 + 15T to 0.1 s; plateau 2.5 to 0.4 / 0.55 / 0.67 s by soil; 1.36/T beyond.",
              "Approximate period: Ta = 0.075 h^0.75 (RC bare frame); 0.09 h/sqrt(d) with infill; 0.085 h^0.75 (steel).",
              "Design coefficient: Ah = (Z/2)(I/R)(Sa/g).",
              "Worked chain: 14 m, zone III, medium soil, SMRF gives Ta = 0.54 s, Sa/g = 2.5, Ah = 0.04.",
            ],
            table: {
              caption: "IS 1893 design spectrum - medium soil, 5 percent damping, key stations.",
              headers: ["Period T (s)", "Sa/g formula", "Value"],
              rows: [
                ["0.0", "ground", "1.00"],
                ["0.05", "1 + 15T", "1.75"],
                ["0.10 to 0.55", "plateau", "2.50"],
                ["0.54 (worked example)", "plateau", "2.50"],
                ["1.0", "1.36/T", "1.36"],
                ["2.0", "1.36/T", "0.68"],
                ["4.0", "1.36/T", "0.34"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Stacking the IS 1893 coefficients into Ah",
              caption:
                "Read from the bottom: each layer feeds the one above.",
              layers: [
                { label: "Ah = (Z/2) x (I/R) x (Sa/g)", note: "design horizontal seismic coefficient" },
                { label: "Sa/g from the 5 percent spectrum", note: "plateau or 1.36/T by soil and period" },
                { label: "Ta = 0.075 h^0.75", note: "approximate fundamental period, RC bare frame" },
                { label: "I and R", note: "importance 1.0/1.5; reduction 5.0 SMRF, 3.0 OMRF" },
                { label: "Z by zone", note: "0.10 II, 0.16 III, 0.24 IV, 0.36 V; design uses Z/2" },
              ],
            },
            callout: {
              type: "exam",
              title: "The chain in order",
              body: "Numericals follow the chain T, then Sa/g, then Ah, then VB - never jump ahead. Writing each intermediate with its symbol and unit earns step marks even if arithmetic slips; examiners mark the chain, not just the final number.",
            },
            keyTerms: [
              { term: "Zone factor", definition: "Z: the code coefficient for design ground motion intensity by zone - 0.10 to 0.36 - with the design value taken as Z/2 of the maximum considered earthquake." },
              { term: "Importance factor", definition: "I: a multiplier raising seismic demand on structures needed after the earthquake - 1.5 for hospitals and emergency facilities." },
              { term: "Response reduction factor", definition: "R: the factor by which elastic forces may be reduced in recognition of ductility, overstrength and redundancy - 5 for SMRF detailed per IS 13920." },
            ],
            examQuestions: [
              {
                q: "List the parameters of the IS 1893 (Part 1) design spectrum and explain their physical basis. For a four-storey RC special moment-resisting frame 14 m tall on medium soil in zone III, compute the approximate fundamental period, the spectral value Sa/g and the design coefficient Ah.",
                marks: 7,
                outline: [
                  "Parameters: Z (zone), I (importance), R (reduction), soil type, damping (5 percent), period T.",
                  "Zone factor Z = 0.16 for zone III; design uses Z/2 = 0.08.",
                  "R = 5 for SMRF detailed to IS 13920; I = 1.0 for an ordinary building.",
                  "Ta = 0.075 h^0.75 = 0.075 x 14^0.75 = 0.54 s.",
                  "The medium-soil plateau runs to 0.55 s, so Sa/g = 2.5.",
                  "Ah = (Z/2)(I/R)(Sa/g) = 0.08 x 0.2 x 2.5 = 0.04.",
                  "Interpretation: the design lateral force is 4 percent of the seismic weight.",
                ],
              },
              {
                q: "State the zone factors for all four seismic zones of IS 1893.",
                marks: 2,
              },
              {
                q: "How does the response reduction factor relate to ductility detailing?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Equivalent lateral force method and base shear",
            body: [
              "The equivalent lateral force method is the code's licensed shortcut for regular buildings: represent the dynamic earthquake demand by static horizontal forces whose resultant equals the base shear. The seismic weight W collects the full dead load plus the appropriate live load - for example 25 percent for storage occupancies. The design base shear is simply VB = Ah x W, with Ah from the previous section. The method assumes the fundamental mode dominates and its shape is roughly parabolic, both reasonable for regular low- and mid-rise buildings - which is also why the code restricts the method's use by height and regularity.",
              "The base shear is distributed up the building. IS 1893 (2002) assigns floor i the force Fi = VB Wi hi^2 / sum over j of Wj hj^2 - a parabolic distribution concentrating demand at the top, consistent with first-mode sway; the 2016 revision simplified this to Wi hi. Storey shear at level i is the sum of all forces above it; the overturning moment accumulates with height; and the resulting drifts are checked against code limits - 0.004 times storey height for RC special moment frames. Accidental torsion adds 5 percent eccentricity in each direction to cover plan irregularities.",
              "Complete the running example with four equal floor weights of 500 kN at heights 3.5, 7, 10.5 and 14 m - W = 2,000 kN. VB = 0.04 x 2,000 = 80 kN. The sum of Wj hj^2 is 183,750 kN m^2, so the roof force is 80 x 98,000/183,750 = 42.7 kN, the third floor 24.0 kN, the second 10.7 kN and the first 2.7 kN, summing back to 80 kN. These four numbers - T, Ah, VB and the Fi - are the complete deliverable of an ELF numerical, and exactly what the Python snippet automates.",
            ],
            bullets: [
              "Base shear VB = Ah x W; W = dead load plus the code-specified portion of live load.",
              "Restricted to regular buildings; taller or irregular buildings require dynamic (modal) analysis.",
              "Vertical distribution (2002 code): Fi = VB Wi hi^2 / sum Wj hj^2 - parabolic, top-heavy.",
              "Storey shear Vi = sum of the Fi above level i; overturning moment accumulates from the top.",
              "Drift limit 0.004 x storey height for RC SMRF; accidental eccentricity 5 percent.",
              "Worked example: W = 2,000 kN, VB = 80 kN; roof force 42.7 kN, then 24.0 / 10.7 / 2.7 kN.",
            ],
            codeExample: {
              language: "python",
              caption: "Equivalent lateral force distribution for the four-storey example.",
              code: `h = [3.5, 7.0, 10.5, 14.0]        # floor heights above base, m
W = [500.0, 500.0, 500.0, 500.0]  # floor seismic weights, kN
Z, I, R = 0.16, 1.0, 5.0          # zone III, ordinary, SMRF
h_total = 14.0

Ta = 0.075 * h_total ** 0.75      # approximate period, s
Sa = 2.5                          # plateau, medium soil (Ta < 0.55 s)
Ah = (Z / 2.0) * (I / R) * Sa     # design coefficient

Wt = sum(W)
VB = Ah * Wt                      # base shear, kN
den = sum(w * hi ** 2 for w, hi in zip(W, h))
F = [VB * w * hi ** 2 / den for w, hi in zip(W, h)]

print("Ta =", round(Ta, 2), "s   Ah =", round(Ah, 3))
print("base shear VB =", round(VB, 1), "kN")
for i, f in enumerate(F, start=1):
    print("F", i, "=", round(f, 2), "kN")
print("sum of Fi =", round(sum(F), 1), "kN")`,
            },
            diagram: {
              kind: "flow",
              title: "The equivalent lateral force recipe",
              caption:
                "Six boxes, in exam order - the code's own algorithm.",
              steps: [
                { label: "Estimate the period", note: "Ta = 0.075 h^0.75 for RC bare frames" },
                { label: "Read Sa/g from the spectrum", note: "soil curve, 5 percent damping" },
                { label: "Compute Ah", note: "(Z/2)(I/R)(Sa/g)" },
                { label: "Base shear VB = Ah x W", note: "seismic weight = dead + part live" },
                { label: "Distribute: Fi = VB Wi hi^2 / sum Wj hj^2", note: "parabolic, 2002 code" },
                { label: "Check drift and torsion", note: "0.004 h limit; 5 percent accidental eccentricity" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry every intermediate",
              body: "Marks in the ELF numerical are distributed across T, Sa/g, Ah, VB and each Fi. Write the symbol, the substituted value and the unit for every step; a bare final answer of 42.7 kN for the roof force earns almost nothing without the chain behind it.",
            },
            keyTerms: [
              { term: "Base shear", definition: "The total design lateral force at the base of a structure: VB = Ah x W under the equivalent lateral force method." },
              { term: "Seismic weight", definition: "The weight entering base-shear calculations: full dead load plus the code-specified portion of live load." },
              { term: "Storey shear", definition: "The sum of all lateral forces acting above a given storey; governs the design of that storey's columns and walls." },
            ],
            examQuestions: [
              {
                q: "Explain the equivalent lateral force method of IS 1893 and compute the full force distribution for a four-storey RC SMRF with equal floor weights of 500 kN at heights 3.5, 7.0, 10.5 and 14.0 m, on medium soil in zone III, given Ah = 0.04.",
                marks: 7,
                outline: [
                  "State the basis: fundamental-mode-dominated response of regular buildings.",
                  "Seismic weight W = 4 x 500 = 2,000 kN.",
                  "Base shear VB = Ah x W = 0.04 x 2000 = 80 kN.",
                  "Distribution formula: Fi = VB Wi hi^2 / sum Wj hj^2.",
                  "Compute sum Wj hj^2 = 500 x (12.25 + 49 + 110.25 + 196) = 183,750.",
                  "F4 = 80 x 98,000/183,750 = 42.7 kN; F3 = 24.0 kN; F2 = 10.7 kN; F1 = 2.7 kN.",
                  "Verify the sum is 80 kN; note storey shears and the 0.004 h drift check follow.",
                ],
              },
              {
                q: "What loads constitute the seismic weight W of a building?",
                marks: 2,
              },
              {
                q: "Why does the code concentrate lateral force toward the upper floors?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Response reduction factor, ductility and design philosophy",
            body: [
              "Designing a building to resist a maximum-considered earthquake entirely in the elastic range would be economically absurd - the elastic force, read at R = 1, would be five or more times the design force actually used. The code's bargain is controlled inelasticity: a ductile structure may yield, dissipating earthquake energy in plastic hysteresis loops, provided the yielding occurs in carefully chosen, detailed locations. The response reduction factor R is the numerical expression of that bargain - roughly overstrength times ductility times redundancy - so R = 5 for a special moment frame means it is designed for one-fifth of the elastic force, with IS 13920 detailing as the price of admission.",
              "Capacity design operationalises the choice: columns are made stronger than the beams they support - strong column, weak beam - so plastic hinges form in beams where they are inspectable and repairable, never in columns where they could stack into a soft-storey mechanism. Detailing rules in IS 13920 - closely spaced confinement hoops, anchored lap splices, joint shear reinforcement - are what sustain these hinges through many load reversals without strength loss. The equal-displacement approximation, reasonably valid for medium and long periods, links R to the displacement ductility mu, the ratio of ultimate to yield displacement.",
              "The bargain has defaulters. Open ground storeys - the classic Indian shop-house - concentrate all yielding in one level and form soft-storey mechanisms, as seen in the 2001 Bhuj earthquake and again in Nepal in 2015. Short columns, stiffer than their neighbours, attract disproportionate shear and fail brittlely. Irregular, torsion-prone plans punish the assumption of first-mode dominance. Performance-based design answers with pushover analysis and explicit damage states, but the principle stands: R is earned by detailing, and a structure that cannot detail must not demand the reduction.",
            ],
            bullets: [
              "R = overstrength x ductility x redundancy; R = 5 for SMRF, 3 for OMRF, 1.5 for unreinforced masonry.",
              "Elastic design (R = 1) is safe but uneconomical; ductility substitutes for strength.",
              "Capacity design: strong column, weak beam; plastic hinges in beams, not columns.",
              "IS 13920 detailing - confinement hoops, lap splices, joint shear - sustains the hysteresis loops.",
              "Displacement ductility mu = ultimate / yield displacement; the equal-displacement rule links mu and R.",
              "Soft storey and short column are the classic defaulters - Bhuj 2001 evidence.",
              "No detailing, no R: masonry's R = 1.5 reflects near-zero ductility.",
            ],
            table: {
              caption: "Response reduction factors for common lateral systems (IS 1893).",
              headers: ["Lateral system", "R", "Ductile detailing required"],
              rows: [
                ["Load-bearing unreinforced masonry", "1.5", "None possible - near-elastic design"],
                ["Ordinary RC moment frame (OMRF)", "3.0", "No special seismic detailing"],
                ["Special RC moment frame (SMRF)", "5.0", "IS 13920 confinement, joints, splices"],
                ["Special steel moment frame", "5.0", "Ductile connections per code"],
                ["RC shear wall (ductile)", "4.5", "Boundary elements and confinement"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "How does the structure meet the demand?",
              caption:
                "Three strategies, three outcomes - the fork behind every R value.",
              start: "Design earthquake demand on the structure",
              branches: [
                {
                  label: "Ductile SMRF, R = 5",
                  outcome: "Beams yield at one-fifth of elastic force; plastic hinges dissipate energy; damage is repairable",
                  good: true,
                },
                {
                  label: "Ordinary undetailed frame, R = 3",
                  outcome: "Brittle members exhaust strength suddenly; soft-storey collapse mechanisms form",
                  good: false,
                },
                {
                  label: "Base isolation with low R",
                  outcome: "Bearings shift the period past the energy band; superstructure stays essentially elastic",
                  good: true,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "R is earned, not assumed",
              body: "Never quote R = 5 without mentioning IS 13920 detailing in the same sentence. In answers, pair every R value with its detailing requirement and one capacity-design rule - that pairing is exactly what distinguishes a structural-dynamics answer from a formula-substitution answer.",
            },
            keyTerms: [
              { term: "Response reduction factor", definition: "R: the factor by which elastic seismic forces may be reduced to account for ductility, overstrength and redundancy, conditioned on seismic detailing." },
              { term: "Ductility", definition: "The capacity to deform beyond yield without losing strength; displacement ductility is the ratio of ultimate to yield displacement." },
              { term: "Capacity design", definition: "The strategy of proportioning members so plastic hinges form only in chosen, ductile locations - strong column, weak beam." },
            ],
            examQuestions: [
              {
                q: "Explain the seismic design philosophy of permitting controlled inelastic deformation. Discuss the components of the response reduction factor R, the role of ductility and IS 13920 detailing, and the failure consequences of soft storeys and short columns.",
                marks: 7,
                outline: [
                  "State the economics: elastic design for the MCE is prohibitive; controlled yielding is accepted.",
                  "Energy argument: hysteretic loops in plastic hinges dissipate earthquake energy.",
                  "R = overstrength x ductility x redundancy; values 5.0 SMRF, 3.0 OMRF, 1.5 masonry.",
                  "Ductility: mu = ultimate/yield displacement; the equal-displacement approximation links mu to R.",
                  "Detailing per IS 13920: confinement hoops, splice anchorage, joint shear reinforcement.",
                  "Capacity design: strong column, weak beam keeps hinges in inspectable beam ends.",
                  "Defaulters: soft storey (Bhuj 2001) and short columns - brittle, concentrated damage.",
                ],
              },
              {
                q: "Define displacement ductility.",
                marks: 2,
              },
              {
                q: "Why is a soft storey dangerous even when the upper storeys are detailed?",
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
      title: "Structural Control and Applications",
      summary:
        "Engineering the response: passive, active, semi-active and hybrid control, tuned mass dampers, base isolation devices, wind and blast loading regimes, and the case studies of Taipei 101 and Burj Khalifa.",
      chapter: {
        number: "05",
        title: "Structural Control and Applications",
        intro:
          "Unit V turns defence into engineering choice. Section 5.1 maps the control families - passive, active, semi-active, hybrid - against power and authority; 5.2 designs the tuned mass damper from Den Hartog's optimum; 5.3 decouples structures with lead-rubber and friction-pendulum isolation; 5.4 contrasts the long-duration statistical world of wind with the millisecond regime of blast; and 5.5 reads Taipei 101 and Burj Khalifa as the two canonical answers - device control versus form control.",
        inOneBreath:
          "Control families trade power for authority: passive TMDs and isolators are robust and free to run, active mass dampers add actuators and algorithms, semi-active MR dampers adjust themselves on milliwatts and fail safe; a TMD is tuned to the fundamental mode with f_opt = f1/(1 + mu) and zeta_opt = sqrt(3 mu/(8(1 + mu))) for mu near 1 percent; base isolation lengthens the period to 2-4 s and dissipates energy in lead-rubber or friction-pendulum bearings with T = 2 pi sqrt(R/g); wind is a low-frequency statistical problem governed by vortex shedding and comfort, blast a millisecond impulse governed by Td/Tn; and Taipei 101 answers with a 660-tonne pendulum while Burj Khalifa answers with a buttressed core and spiral setbacks.",
        sections: [
          {
            number: "5.1",
            title: "Vibration control strategies",
            body: [
              "Structural control modifies the dynamic response itself rather than merely strengthening members. Passive devices - tuned mass dampers, viscous fluid dampers, friction dampers, metallic yield dampers and isolation bearings - operate with no external power, are robust and need no sensing; their parameters are fixed at design time. Active devices add sensors, controllers and actuators: an active mass damper drives a mass with a controlled force computed in real time, typically by optimal-control algorithms. Active systems can outperform passive ones but depend on power supply and algorithms, which raises cost and reliability questions.",
              "Two intermediate families fill the spectrum. Semi-active devices - magneto-rheological dampers whose fluid stiffness changes under a magnetic field, plus variable-friction and variable-stiffness devices - need only watts to adjust their own properties while the dissipative forces remain generated by the structure's motion; they cannot destabilise the system and they fail safe as passive dampers. Hybrid control combines devices, most commonly isolation bearings plus dampers, to balance performance and reliability. Selection is governed by the response reduction needed, the frequency content of the excitation, cost and maintenance.",
              "Effectiveness is measured in added damping and response ratios: a well-tuned passive installation typically cuts peak accelerations by 20 to 60 percent; active systems can go further but with the power-and-complexity price. The first full-scale active installation was the Kyobashi Seiwa building in Tokyo in 1989, with two active mass dampers; since then towers in Japan, Taiwan and China have adopted TMDs, and bridges use cable and deck dampers. Structural health monitoring - the instrument networks that measure response in service - increasingly closes the loop, feeding measured data back into control and maintenance decisions.",
            ],
            bullets: [
              "Passive: TMD, viscous, friction and metallic yield dampers, isolators - zero power, fixed parameters, robust.",
              "Active: sensors + controller + actuators (AMD); optimal control force in real time; needs continuous power.",
              "Semi-active: MR dampers and variable devices - milliwatts to adjust, fail-safe passive behaviour.",
              "Hybrid: isolation plus dampers - an engineered performance-reliability balance.",
              "Selection drivers: required reduction, frequency content, cost, maintenance, reliability.",
              "Benchmark performance: passive systems cut peak response 20-60 percent.",
              "First active installation: the Kyobashi Seiwa building, Tokyo, 1989.",
            ],
            table: {
              caption: "The four control families compared.",
              headers: ["Family", "Devices", "External power", "Typical gain"],
              rows: [
                ["Passive", "TMD, viscous and friction dampers, isolators", "None", "20-60 percent response reduction"],
                ["Active", "Active mass dampers, actuators", "Continuous, kilowatts", "Highest authority, algorithm-dependent"],
                ["Semi-active", "MR dampers, variable stiffness/friction", "Watts, on-off", "Near-active performance, fail-safe"],
                ["Hybrid", "Isolators plus dampers or AMD", "Partial", "Balanced performance and reliability"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a control strategy",
              caption:
                "Power against authority - where each family sits.",
              axes: { x: "external power required", y: "control authority" },
              quadrants: [
                { label: "Semi-active", note: "MR dampers: tiny power, near-active authority, fail-safe" },
                { label: "Active", note: "AMD and actuators: maximum authority, power-hungry" },
                { label: "Passive", note: "TMDs and isolators: zero power, dependable gains" },
                { label: "Hybrid", note: "engineered combinations: as much power as the job needs" },
              ],
            },
            callout: {
              type: "tip",
              title: "Fail-safe is a design property",
              body: "When comparing strategies in the exam, always state the fail-safe behaviour: passive and semi-active devices degrade gracefully to ordinary dampers during a power failure; active systems do not. That single sentence routinely separates a complete comparison from a partial one.",
            },
            keyTerms: [
              { term: "Passive control", definition: "Energy-dissipating or isolating devices that need no external power - TMDs, dampers, isolation bearings." },
              { term: "Active control", definition: "Real-time application of control forces by actuators driven by sensors and algorithms, as in active mass dampers." },
              { term: "Semi-active control", definition: "Devices whose properties are adjusted with tiny power while forces remain reaction-generated - magneto-rheological dampers; fail-safe." },
            ],
            examQuestions: [
              {
                q: "Classify structural vibration control strategies with examples of devices under each. Compare passive, active, semi-active and hybrid systems on power requirement, performance and reliability, and name the first full-scale active control installation.",
                marks: 7,
                outline: [
                  "Classify: passive, active, semi-active, hybrid.",
                  "Passive: TMD, viscous, friction and metallic yield dampers, isolation bearings - fixed parameters, no power.",
                  "Active: AMD - sensors, controller, actuators; optimal-control algorithms; continuous power.",
                  "Semi-active: MR dampers, variable stiffness/friction; watts to adjust; cannot inject instability; fail-safe.",
                  "Hybrid: isolation plus damping; balances performance and reliability.",
                  "Compare: authority active > semi-active > passive; reliability and robustness run the reverse way.",
                  "The Kyobashi Seiwa building, Tokyo, 1989 - first full-scale active mass damper installation.",
                ],
              },
              {
                q: "What is a magneto-rheological damper and why is it called fail-safe?",
                marks: 3,
              },
              {
                q: "Give two examples of passive control devices.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Tuned mass dampers",
            body: [
              "A tuned mass damper is a secondary mass-spring-damper system installed near the top of a structure and tuned to the structure's dominant mode - almost always the fundamental sway. When the building begins to oscillate, the TMD responds out of phase, its inertia force pushing against the motion; vibration energy drains from the primary structure into the auxiliary mass, where the TMD's own damper converts it to heat. The result is a large increase in the effective damping of the targeted mode, typically from 1-2 percent to 3-5 percent, precisely where the structure lacks damping.",
              "Design follows the classical Den Hartog optimum for a main system with modal mass M: choose the damper mass as a fraction mu - typically 0.5 to 1.5 percent of the modal mass for buildings - tune the TMD frequency to f_opt = f1/(1 + mu) and set its damping ratio zeta_opt = sqrt(3 mu/(8(1 + mu))). For a 2,000-tonne modal mass and mu = 1 percent: a 20-tonne TMD tuned 1 percent below the building frequency with about 6 percent internal damping. The catch is bandwidth: a single TMD helps one mode over a narrow band, and its benefit decays if the building's frequency drifts - hence multiple TMDs spread over a range of tunings in some towers.",
              "The installed record is impressive. Taipei 101's 660-tonne spherical pendulum TMD, hung between the 87th and 92nd floors and visible to visitors, cuts typhoon-induced sway by roughly a third. The Citigroup Center in New York employs a 400-tonne concrete-block TMD; two stacked TMDs steady the John Hancock Tower in Boston; and tuned liquid column dampers - water sloshing in tuned tanks - do the same job in other towers using plumbing instead of pendulums. Pendulum forms dominate supertall buildings because the tuning is set simply by cable length; sliding forms need low-friction rails and eddy-current damping to work.",
            ],
            bullets: [
              "TMD: an auxiliary mass-spring-damper tuned to the structure's dominant sway mode.",
              "Mechanism: an out-of-phase inertia force drains modal energy into the damper, where it becomes heat.",
              "Raises effective modal damping from 1-2 percent to 3-5 percent - targeting exactly the structure's weakness.",
              "Den Hartog optimum: mu = 0.5-1.5 percent; f_opt = f1/(1 + mu); zeta_opt = sqrt(3 mu/(8(1 + mu))).",
              "A narrow-band device: detuning from temperature or structural change degrades performance - hence MTMDs.",
              "Forms: pendulum (cable length sets the tuning), sliding, and tuned liquid column dampers.",
              "Installed: Taipei 101 (660 t), Citigroup Center (400 t), John Hancock Tower (two dampers).",
            ],
            codeExample: {
              language: "python",
              caption: "Sizing and tuning a TMD by the Den Hartog optimum.",
              code: `import math

M_modal = 2.0e6     # modal mass of the fundamental mode, kg
f1 = 0.15           # fundamental sway frequency, Hz
mu = 0.01           # TMD mass ratio, 1 percent

m_tmd = mu * M_modal
f_opt = f1 / (1.0 + mu)
z_opt = math.sqrt(3.0 * mu / (8.0 * (1.0 + mu)))

print("TMD mass:", m_tmd / 1000.0, "t")
print("tuned frequency:", round(f_opt, 4), "Hz")
print("tuned period:", round(1.0 / f_opt, 2), "s")
print("optimum TMD damping:", round(100.0 * z_opt, 1), "percent")`,
            },
            diagram: {
              kind: "cycle",
              title: "How a TMD drains energy",
              caption:
                "One loop of the energy transfer cycle that protects the main structure.",
              steps: [
                { label: "Structure sways in mode 1", note: "wind or earthquake input" },
                { label: "TMD lags a quarter cycle", note: "tuned to the same frequency" },
                { label: "Relative velocity drives the damper", note: "force proportional to relative velocity" },
                { label: "Modal energy becomes heat", note: "dissipated inside the TMD" },
                { label: "Sway amplitude drops 20-40 percent", note: "comfort and drift controlled" },
              ],
            },
            callout: {
              type: "exam",
              title: "The two facts examiners want",
              body: "Every TMD question is answered by two facts: the tuning condition - TMD frequency equals the building's fundamental frequency, refined by the Den Hartog f/(1 + mu) - and the mass ratio range of about 0.5 to 1.5 percent of modal mass. Add Taipei 101's 660 tonnes for the example mark.",
            },
            keyTerms: [
              { term: "Tuned mass damper", definition: "An auxiliary mass-spring-damper system tuned to a structure's dominant mode so that it oscillates out of phase and dissipates that mode's energy." },
              { term: "Mass ratio", definition: "mu: the ratio of TMD mass to the modal mass of the targeted mode - typically 0.5 to 1.5 percent for buildings." },
              { term: "Den Hartog optimum", definition: "Classical tuning rules f_opt = f1/(1 + mu) and zeta_opt = sqrt(3 mu/(8(1 + mu))) minimising the main mass's peak response." },
            ],
            examQuestions: [
              {
                q: "Explain the working principle of a tuned mass damper with a sketch. State the Den Hartog optimum tuning, discuss the effect of mass ratio on performance and detuning, and describe the TMD installation in Taipei 101.",
                marks: 7,
                outline: [
                  "Principle: an auxiliary mass tuned to the fundamental mode moves out of phase, transferring and dissipating energy.",
                  "Sketch: main mass M with spring k, TMD mass m_d with spring k_d and damper c_d attached to M.",
                  "Tuning: f_opt = f1/(1 + mu); zeta_opt = sqrt(3 mu/(8(1 + mu))) - the Den Hartog rules.",
                  "Mass ratio: larger mu broadens the effective band and deepens the reduction, at the cost of space and weight.",
                  "Detuning risk: frequency drift degrades the narrow-band performance; multiple TMDs widen coverage.",
                  "Taipei 101: a 660 t steel pendulum sphere, 5.5 m diameter, floors 87-92, cutting sway by about a third.",
                  "Note that TMDs serve serviceability (wind comfort) more than ultimate seismic resistance.",
                ],
              },
              {
                q: "State the Den Hartog tuning frequency for mass ratio mu = 0.02.",
                marks: 2,
              },
              {
                q: "Why are TMDs more effective against wind than against strong earthquakes?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Base isolation",
            body: [
              "Base isolation attacks the demand rather than the response: instead of strengthening the superstructure, it inserts a soft, energy-absorbing layer between foundation and structure. The bearings' flexibility lengthens the fundamental period from the 0.1-0.5 second range - where earthquake energy concentrates - out to 2 to 4 seconds, on the falling branch of the spectrum, cutting base shear by a factor of several. The superstructure above the isolators then moves nearly as a rigid body, its internal deformations and accelerations small, and the damage concentrates in the bearings, which are designed, inspected and replaceable.",
              "Three devices dominate practice. The lead-rubber bearing interleaves rubber layers with steel shims - vertical stiffness with lateral flexibility - and forces a central lead plug to yield, adding hysteretic damping. High-damping rubber bearings achieve similar behaviour from the compound itself. The friction pendulum system slides a concave dish under an articulated slider: the geometry restores the structure to centre and sets the period by the dish radius, T = 2 pi sqrt(R/g), independent of the supported mass. Design must provide the accompanying large bearing displacements, often 100 to 400 mm, with flexible service connections and a seismic moat.",
              "Isolation suits stiff, low-to-medium-rise buildings whose occupants or contents cannot tolerate shaking - hospitals, emergency operations centres, museums with fragile contents. A school in Skopje (1969) was the first modern isolated building; the technique matured in New Zealand and California, and hospitals rebuilt in Kachchh after the 2001 Bhuj earthquake applied it in India. The limits are physical: tall slender buildings would overturn on their bearings, wind gusts must not rattle the isolated structure, and near-fault velocity pulses carry long-period energy that can chase the isolated period. For such cases damping devices - the previous section - complement or replace isolation.",
            ],
            bullets: [
              "Strategy: decouple the superstructure by inserting soft bearings - a period shift from 0.1-0.5 s to 2-4 s.",
              "Base shear falls several-fold; the superstructure behaves almost as a rigid body on the isolators.",
              "LRB: a rubber-steel laminate for vertical stiffness plus a central lead plug for hysteretic damping.",
              "HDRB: a high-damping rubber compound; FPS: a concave slider with T = 2 pi sqrt(R/g) and self-centring.",
              "Design accompaniments: 100-400 mm bearing travel, flexible services, a seismic moat, wind restraint.",
              "Best for stiff, critical or content-sensitive buildings - hospitals, museums, data centres.",
              "Limits: tall slender buildings (overturning), strong wind, near-fault long-period pulses.",
            ],
            table: {
              caption: "The principal isolation devices.",
              headers: ["Device", "Mechanism", "Period set by", "Damping source"],
              rows: [
                ["Lead-rubber bearing (LRB)", "Rubber layers + steel shims + lead core", "Rubber stack thickness", "Lead plug yielding"],
                ["High-damping rubber (HDRB)", "Special rubber compound", "Compound stiffness", "Inherent to the compound"],
                ["Friction pendulum (FPS)", "Concave dish + articulated slider", "Dish radius R: T = 2 pi sqrt(R/g)", "Sliding friction"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Fixed base versus isolated base",
              caption:
                "The same earthquake, two periods, two entirely different demands.",
              left: {
                heading: "Fixed base",
                items: [
                  "Period 0.1-0.5 s - on the spectral plateau",
                  "High base shear and storey drifts",
                  "Damage distributed through members",
                  "Ductile detailing essential (R = 3-5)",
                  "Contents and equipment shaken hard",
                ],
              },
              right: {
                heading: "Isolated base",
                items: [
                  "Period 2-4 s - on the falling branch",
                  "Base shear cut several-fold",
                  "Deformation concentrated in the bearings",
                  "Superstructure near-elastic (low R)",
                  "Contents protected; bearings replaceable",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Two mechanisms, one sentence each",
              body: "Isolation reduces response by two mechanisms - the period shift away from the earthquake's energy band and the energy dissipation in the bearings. State both, then give the FPS period formula T = 2 pi sqrt(R/g); those three facts carry the bulk of the marks in any isolation question.",
            },
            keyTerms: [
              { term: "Base isolation", definition: "Decoupling a structure from ground motion by soft bearings between foundation and superstructure, lengthening the period and cutting base shear." },
              { term: "Lead-rubber bearing", definition: "A laminated rubber-steel bearing with a central lead plug providing lateral flexibility plus hysteretic damping." },
              { term: "Friction pendulum system", definition: "An isolation bearing with a concave sliding surface; period T = 2 pi sqrt(R/g) set by dish radius, self-centring by geometry." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of base isolation and how it reduces earthquake forces on a superstructure. Describe the lead-rubber bearing and the friction pendulum system, and discuss where isolation is and is not appropriate.",
                marks: 7,
                outline: [
                  "Principle: a soft layer lengthens the period from 0.1-0.5 s to 2-4 s, onto the falling branch of the spectrum.",
                  "The superstructure becomes a rigid body on the isolators; accelerations and internal forces drop several-fold.",
                  "Second mechanism: hysteretic energy dissipation within the bearings themselves.",
                  "LRB: rubber layers for vertical stiffness, steel shims, a yielding lead plug for damping.",
                  "FPS: a concave dish; T = 2 pi sqrt(R/g); friction damping; geometric self-centring.",
                  "Design needs: 100-400 mm bearing displacement, flexible services, a moat, wind restraint.",
                  "Inappropriate for tall slender structures (overturning), wind-sensitive buildings and near-fault sites.",
                ],
              },
              {
                q: "State the period of a friction pendulum bearing with dish radius R.",
                marks: 2,
              },
              {
                q: "Why is base isolation unsuitable for very tall buildings?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Wind and blast loading",
            body: [
              "Wind loads are dynamic even when treated as static pressure: the flow delivers a mean component plus turbulence, with gusts arriving over seconds. Along-wind response combines the mean drag with a fluctuating part handled by the gust-loading-factor approach of IS 875 (Part 3). Across-wind response is the subtler danger: vortices shed alternately from the wake of a chimney or tower produce periodic side forces whose frequency, by the Strouhal relation f = St V/D with St near 0.2 for circular sections, can lock onto the structure's natural frequency - the resonance that fatigues chimneys and cooling towers.",
              "Blast loading is the other extreme of duration: a detonation releases a pressure wave whose positive phase lasts milliseconds, with a peak overpressure decaying roughly exponentially, often followed by a weaker negative phase. The response regime is set by the ratio of load duration Td to the natural period Tn: impulsive when Td is much smaller than Tn - the response depends on the total impulse delivered; quasi-static when Td is much larger - the structure sees the peak pressure almost statically; and a dynamic regime in between, where amplification peaks near a duration ratio of about one half. Scaled distance Z = R/W^(1/3) organises empirical blast data.",
              "The design answers differ accordingly. For wind: aerodynamic shaping - the setbacks and taper of supertall towers, strakes on chimneys to break up vortex shedding - and added damping from TMDs or dampers, because acceleration comfort and fatigue, not strength, usually govern tall slender structures. For blast: standoff distance, sacrificial elements, ductile detailing and robust connections that survive the single event and resist progressive collapse. Wind design works with a return-period statistical framework; blast design works with a design threat - a charge weight at a distance - and both reduce, in the end, to the SDOF dynamics of Unit II.",
            ],
            bullets: [
              "Wind = mean plus turbulence; the gust loading factor converts dynamic gusts into an equivalent static pressure (IS 875-3).",
              "Across-wind vortex shedding: f = St V/D with St approximately 0.2 for circular sections - a resonance and fatigue risk.",
              "Blast positive phase: milliseconds, peak overpressure decaying rapidly, then weak suction.",
              "Regime by Td/Tn: impulsive (impulse governs), quasi-static (peak pressure), dynamic (worst amplification).",
              "Scaled distance Z = R/W^(1/3) collapses blast data; standoff is the cheapest protection.",
              "Wind answers: aerodynamic shaping, strakes, added damping - comfort and fatigue govern.",
              "Blast answers: standoff, ductility, robustness against progressive collapse.",
            ],
            table: {
              caption: "Wind versus blast as dynamic design problems.",
              headers: ["Aspect", "Wind", "Blast"],
              rows: [
                ["Duration", "Seconds to hours of gusting", "Milliseconds of positive phase"],
                ["Load model", "Mean + stochastic turbulence; gust factor", "Pressure-time pulse from scaled distance"],
                ["Key parameter", "Strouhal number, return period", "Impulse, Td/Tn ratio"],
                ["Governing response", "Comfort accelerations, fatigue", "Peak deformation, progressive collapse"],
                ["Main protections", "Aerodynamic shape, strakes, damping", "Standoff, ductile detailing, robustness"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Two extreme loads, two regimes",
              caption:
                "Match the response regime before choosing a protection strategy.",
              start: "An extreme dynamic load acts on the structure",
              branches: [
                {
                  label: "Wind - gusts and vortices",
                  outcome: "Low-frequency, long-duration; comfort and fatigue govern; shape and damping are the answers",
                  good: true,
                },
                {
                  label: "Blast - impulsive overpressure",
                  outcome: "A millisecond pulse; impulse governs when Td is far below Tn; standoff and ductility protect",
                  good: false,
                },
                {
                  label: "Vortex resonance",
                  outcome: "Shedding frequency locks onto a natural frequency; fatigue cracks grow until strakes detune the flow",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The regime question is the mark",
              body: "Blast questions almost always hinge on the duration ratio Td/Tn: state which regime applies - impulsive, quasi-static or dynamic - before computing anything, because the governing quantity (impulse versus peak pressure) changes with the regime. The same discipline answers 'when can a blast load be treated as static?'",
            },
            keyTerms: [
              { term: "Vortex shedding", definition: "Alternating vortices shed from a body in cross-flow, producing periodic transverse forces at the Strouhal frequency f = St V/D." },
              { term: "Positive phase", definition: "The short initial pulse of overpressure above ambient in a blast wave, decaying roughly exponentially - the design-relevant part." },
              { term: "Scaled distance", definition: "Z = R/W^(1/3): the normalisation of distance by the cube root of charge mass that collapses blast-effects data." },
            ],
            examQuestions: [
              {
                q: "Explain the response of structures to blast loading, defining peak overpressure, impulse and the role of the ratio of load duration to natural period. Contrast the impulsive, dynamic and quasi-static regimes, and compare the resulting design strategies with those for wind.",
                marks: 7,
                outline: [
                  "Blast load: a sudden overpressure pulse; positive phase in milliseconds; a weaker negative phase follows.",
                  "Parameters: peak overpressure p0, impulse I = integral of p dt, duration Td.",
                  "Regime rule: compare Td with the natural period Tn.",
                  "Td much less than Tn - impulsive: peak response set by the impulse; the load ends before the structure moves far.",
                  "Td much greater than Tn - quasi-static: response follows the peak pressure like a static load.",
                  "Intermediate dynamic regime: amplification is largest; the classic SDOF pulse-response chart applies.",
                  "Wind contrast: long duration, statistical treatment, comfort and fatigue govern; shape and damping protect.",
                ],
              },
              {
                q: "Define the Strouhal number and its role in chimney design.",
                marks: 3,
              },
              {
                q: "State the scaled distance formula used in blast analysis.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Case studies: Taipei 101 and Burj Khalifa",
            body: [
              "Taipei 101, 508 m and 101 storeys, rose in 2004 in one of the world's most hostile combinations of hazards: design typhoon winds and frequent earthquakes, on soft Taipei basin soil. Its control strategy is a device. A 660-tonne steel sphere, 5.5 m in diameter, hangs as a pendulum between the 87th and 92nd floors, tuned to the building's fundamental sway period of about 7 seconds; viscous dampers between sphere and cage convert the drained energy to heat. The damper cuts accelerations and sways by roughly 30 to 40 percent, and it earned its keep in Typhoon Soudelor in 2015, when it moved a full metre without distress to the tower.",
              "Burj Khalifa, 828 m and 163 floors, completed in Dubai in 2010, faced the opposite problem: no seismicity to speak of, but wind as the governing load on the world's tallest structure. Its answer is form. The buttressed-core structural system - a hexagonal central core braced by three wings in a Y plan - resists lateral loads in every direction, while setbacks spiral up the tower so that at each level the wind meets a different cross-section: vortex shedding never locks onto a single frequency because the building, in the phrase of its wind engineers, 'confuses the wind'. Extensive wind-tunnel testing at RWDI shaped the profile; no TMD is installed - none is needed.",
              "The pair brackets the whole subject. Taipei 101 controls the response with an engineered device tuned to the structure's dynamics - the Unit II oscillator deliberately appended to a Unit III modal problem. Burj Khalifa controls the loading function itself through aerodynamic form, the ultimate passive strategy. The choice followed the hazard: Taipei's seismic-plus-typhoon environment demanded a fix that works for both wind and moderate quakes; Dubai's wind-only environment let the form do the work. Both towers carry instrument networks feeding structural health monitoring, closing the loop between the analysis of this course and the measured behaviour of real structures.",
            ],
            bullets: [
              "Taipei 101: 508 m on a typhoon-plus-seismic site; device control via a 660 t pendulum TMD.",
              "TMD: a 5.5 m steel sphere, floors 87-92, tuned to the about-7 s sway; 30-40 percent response cut.",
              "Proven in service: the sphere moved about 1 m in Typhoon Soudelor (2015) without distress.",
              "Burj Khalifa: 828 m, wind-governed; form control via the buttressed core and Y-shaped plan.",
              "Spiral setbacks change the vortex-shedding frequency at every level - the wind never locks on.",
              "Wind-tunnel shaping by RWDI; no damper installed - the form is the control.",
              "Lesson: match the control strategy to the hazard - device, form, or both.",
            ],
            table: {
              caption: "Two supertall strategies side by side.",
              headers: ["Aspect", "Taipei 101", "Burj Khalifa"],
              rows: [
                ["Height / floors", "508 m / 101", "828 m / 163"],
                ["Completed", "2004", "2010"],
                ["Dominant hazard", "Typhoons + earthquakes", "Wind (negligible seismicity)"],
                ["Control strategy", "Device: 660 t pendulum TMD", "Form: buttressed core, spiral setbacks"],
                ["Damping added", "TMD cuts sway 30-40 percent", "None installed - shaping suffices"],
                ["Structural system", "Outriggered moment frame", "Buttressed core, Y plan"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Device control versus form control",
              caption:
                "The two canonical answers to supertall vibration - chosen by hazard, not by fashion.",
              left: {
                heading: "Taipei 101 - device control",
                items: [
                  "660-tonne steel pendulum sphere, 5.5 m across",
                  "Tuned to the about-7 s fundamental sway",
                  "Visible to visitors between floors 87-92",
                  "Cuts typhoon sway by 30-40 percent",
                  "Works for wind and moderate earthquakes",
                ],
              },
              right: {
                heading: "Burj Khalifa - form control",
                items: [
                  "Buttressed core: a Y-plan stiff in every direction",
                  "Setbacks spiral so every level sheds differently",
                  "Vortex shedding never synchronises - wind confused",
                  "Wind-tunnel-tuned profile by RWDI",
                  "No damper: the architecture is the control",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Numbers make the case study",
              body: "Case-study answers live on specifics: 660 tonnes, 5.5 m, floors 87-92, 508 m for Taipei 101; 828 m, buttressed core, spiral setbacks for Burj Khalifa. Quote at least three figures per tower and name the strategy - device control versus form control - to convert description into marks.",
            },
            keyTerms: [
              { term: "Buttressed core", definition: "Burj Khalifa's system: a hexagonal core braced by three Y-plan wings, resisting lateral loads in all directions." },
              { term: "Aerodynamic setback", definition: "A planned reduction of tower cross-section with height; successive setbacks change vortex-shedding frequencies so the wind never locks on." },
              { term: "Outrigger system", definition: "Deep trusses linking the core to perimeter columns, widening the effective stance of a tower - Taipei 101's primary stiffening." },
            ],
            examQuestions: [
              {
                q: "Compare the vibration-control strategies of Taipei 101 and Burj Khalifa. Describe each structure, its dominant hazard, the chosen control mechanism with numbers, and the reason each strategy suited its environment.",
                marks: 7,
                outline: [
                  "Taipei 101: 508 m, completed 2004, Taipei basin - typhoon winds plus earthquakes.",
                  "Strategy: a 660 t steel pendulum TMD, 5.5 m diameter, floors 87-92, tuned to the about-7 s sway.",
                  "Performance: a 30-40 percent sway reduction; moved about 1 m in Typhoon Soudelor 2015 without distress.",
                  "Burj Khalifa: 828 m, completed 2010, Dubai - wind-governed, negligible seismicity.",
                  "Strategy: a buttressed-core Y-plan plus spiral setbacks that detune vortex shedding.",
                  "Wind-tunnel shaping by RWDI; no damper needed - form is the control.",
                  "Conclusion: device control suits mixed hazards; form control suits wind-dominant slenderness.",
                ],
              },
              {
                q: "What is the mass and form of the Taipei 101 damper?",
                marks: 2,
              },
              {
                q: "How do the setbacks of Burj Khalifa control its wind response?",
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV CE-702(C) papers spread their marks across the SDOF derivations, the two-DOF eigenproblem and the IS 1893 base-shear chain, with the concepts of Unit I and the short-note bank of Unit V anchoring the remaining questions. Allocate revision roughly by the weights below and keep one fully worked answer ready for each starred topic.",
      ],
      weightedTopics: [
        { topic: "SDOF free vibration: natural frequency, period, initial conditions", weight: "10-14 marks", note: "Derive and compute every time; write omega_n and f with units to avoid the 2 pi slip." },
        { topic: "Damped free vibration and logarithmic decrement numericals", weight: "8-12 marks", note: "One decay-record numerical per paper is typical; practise the n-cycles subtlety." },
        { topic: "Harmonic response: DMF, resonance, phase", weight: "8-10 marks", note: "Carry DMF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2) and 1/(2 zeta) into the hall." },
        { topic: "Transmissibility and vibration isolation", weight: "6-8 marks", note: "The r > sqrt(2) criterion plus the damping paradox is the whole answer." },
        { topic: "MDOF eigenproblem: two-DOF frequencies and mode shapes", weight: "10-14 marks", note: "The fully worked 2-storey numerical; polish det(K - w^2 M) = 0 until it is clean." },
        { topic: "Orthogonality, modal mass and mode superposition", weight: "8-10 marks", note: "The two-line orthogonality proof plus SRSS/CQC rules; state both relations." },
        { topic: "Rayleigh (and Dunkerley) estimates", weight: "6-8 marks", note: "Gravity-load form numerical; state the upper-bound property explicitly." },
        { topic: "Response spectrum: concept, construction, regions", weight: "8-10 marks", note: "Know the Sd/Sv/Sa relations and the three regions with soil corner periods." },
        { topic: "IS 1893 ELF: Ah, base shear, vertical distribution", weight: "10-14 marks", note: "The chain T -> Sa/g -> Ah -> VB -> Fi; a nearly guaranteed long numerical." },
        { topic: "TMD, base isolation, wind and blast concepts", weight: "6-10 marks", note: "Definitions, device lists and case-study numbers; Taipei 101 and Burj Khalifa carry marks." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, the schedule covers every section twice - once for understanding, once for active recall - and reserves the final week for full papers and warm-hand numericals.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals", tasks: ["Static versus dynamic distinction with D'Alembert and amplification examples", "Classify dynamic loads; count DOF for five different structures", "Derive the equation of motion of the single-storey frame by Newton and D'Alembert"] },
        { week: "Week 2", focus: "Unit II - free vibration", tasks: ["Undamped solution, initial conditions, energy bookkeeping", "Damped solution and the three damping regimes; solve two decay numericals", "Logarithmic decrement by hand, then verify with the Python snippet"] },
        { week: "Week 3", focus: "Unit II - forced vibration", tasks: ["Harmonic steady state: DMF, phase and resonance; sweep the DMF table", "Support motion and transmissibility; the sqrt(2) criterion", "Duhamel integral and the Newmark family; write the integral from memory"] },
        { week: "Week 4", focus: "Unit III - MDOF", tasks: ["Assemble M and K for the two-storey benchmark", "Full eigenproblem by hand: frequencies, mode shapes, normalisation", "Orthogonality, modal mass, mode superposition; SRSS versus CQC; the Rayleigh estimate"] },
        { week: "Week 5", focus: "Unit IV - earthquake", tasks: ["Ground motion, site effects and the three spectrum regions", "IS 1893 parameters and the design spectrum; memorise Z, I, R, Ta", "Complete one ELF numerical end-to-end, then redo it in Python"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Control families, TMD tuning and isolation devices", "Wind and blast regimes; case-study numbers for both towers", "Two full papers under exam timing; review the slips list"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      bullets: [
        "Redraw from memory: the SDOF force balance, the DMF curve with its three regions, the two-DOF benchmark with both mode shapes, and the ELF chain T -> Sa/g -> Ah -> VB -> Fi.",
        "Recite the formula stack: omega_n = sqrt(k/m); delta = 2 pi zeta; DMF = 1/sqrt((1 - r^2)^2 + (2 zeta r)^2); TR = 1 at r = sqrt(2); Ta = 0.075 h^0.75; Ah = (Z/2)(I/R)(Sa/g).",
        "Re-solve one log-decrement record and one base-shear distribution warm-handed - numericals reward warm hands.",
        "Memorise the code numbers: Z = 0.10/0.16/0.24/0.36; I = 1.0/1.5; R = 5/3/1.5; plateau 2.5; soil corners 0.4/0.55/0.67 s.",
        "Skim every section's keyTerms and callouts - they are the short-question bank.",
        "Sleep: a rested 7-mark answer beats a tired perfect one. In the morning, review only the slips list below.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every answer with the one-line definition and the governing equation before substituting numbers - definition and equation lines carry independent marks.",
        "Draw the diagram first: the force balance, mode shapes, spectrum regions or the ELF chain. A labelled sketch rescues a weak paragraph and often earns the method marks.",
        "Write units at every step of numericals - rad/s versus Hz, N versus kN; examiners penalise the 2 pi and x 10^3 slips heavily.",
        "For IS 1893 numericals, lay out the chain T, Sa/g, Ah, VB, Fi as labelled steps; step marks survive arithmetic errors.",
        "Time-box: 2-3 mark questions in five minutes, 7-mark questions in fifteen, and keep the last ten minutes to verify that the Fi sum back to VB, that units are consistent, and that no part is left unattempted.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Reporting omega_n in rad/s where the frequency in Hz is asked (or vice versa) - the 2 pi conversion is the most common mark-loser in the subject.",
        "Using delta = 2 pi zeta when damping is not light - the exact form is delta = 2 pi zeta/sqrt(1 - zeta^2); and dividing by the number of peaks instead of the number of cycles.",
        "Swapping the DMF and transmissibility formulas - TR carries the extra (1 + (2 zeta r)^2) numerator under the square root.",
        "Distributing base shear with Wi hi instead of Wi hi^2 (IS 1893:2002) - state the edition being used and stay consistent.",
        "Quoting R = 5 without IS 13920 detailing, or using 12EI/h^3 and 3EI/h^3 interchangeably - fixed-ended and cantilever columns differ by a factor of four.",
        "Presenting unsorted frequencies or unnormalised mode shapes - sort ascending and state the normalisation.",
      ],
    },
  ],
};
