import type { AcademicSubject } from "./types";

export const ec602: AcademicSubject = {
  id: "ec-602",
  code: "EC-602",
  title: "Antennas and Wave Propagation",
  semester: "VI Semester",
  program: "RGPV · Electronics and Communication Engineering",
  tagline:
    "Every topic of the syllabus as one connected story: how potentials and retarded time produce radiation from a short wire, how patterns, gain and arrays shape it, how the antenna zoo from Yagi to rhombic serves it, how apertures, horns and patches open it into space, and how ground, space and sky waves carry it around the planet.",
  description:
    "Five units walk from potential functions, retarded potentials and the oscillating dipole through power radiation, current distributions, the half-wave dipole and the far-field approximation, into antenna fundamentals - network theorems, patterns, gain, effective area, arrays and pattern multiplication - then the antenna types from folded dipoles, loops and Yagi-Uda to log-periodic, helical, lens, turnstile and long-wire antennas, aperture theory with horns, reflectors, slots and microstrip patches, ending with ground-wave, space-wave and sky-wave propagation including the ionosphere, MUF, virtual height and skip distance.",
  accentColor: "#14b8a6",
  emoji: "AW",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Radiation",
      summary:
        "Unit I derives radiation from first principles: potential functions and the electromagnetic field, their sinusoidal-oscillation forms with retarded time, the fields of the oscillating electric dipole, the power it radiates, the current distributions assumed on real wires, the half-wave dipole and quarter-wave monopole with their sine and cosine integrals, and the field regions leading to the far-field approximation.",
      chapter: {
        number: "01",
        title: "How a Wire Radiates",
        intro:
          "Unit I covers potential functions and the electromagnetic field, potential functions for sinusoidal oscillations, retarded potentials, the alternating current element (oscillating electric dipole), power radiated by a current element, application to short antennas, assumed current distribution, radiation from a quarter-wave monopole or half-wave dipole with the sine and cosine integrals, fields close to an antenna, solution of the potential equations, and the far-field approximation.",
        inOneBreath:
          "Radiation is the story of retarded time: a changing current launches fields that arrive at distance r with the delay r/c, and the 1/r terms of those retarded fields carry real power. A short element of uniform current I and length l radiates through a radiation resistance Rr = 80·pi^2·(l/lambda)^2 ohms (7.9 ohms at l = 0.1 lambda) with directivity 1.5. Real wires assume sinusoidal current distribution; the half-wave dipole integrates the contributions with Si and Ci to reach Rr = 73 ohms and D = 1.64 (2.15 dBi), and its quarter-wave monopole over perfect ground halves the resistance (36.5 ohms) and doubles the directivity. The far field begins at 2·D^2/lambda.",
        sections: [
          {
            number: "1.1",
            title: "Potential functions and the electromagnetic field",
            body: [
              "Maxwell's four coupled equations are complete but unwieldy; antenna analysis trades them for two potentials that satisfy two wave equations each. The vector potential A and scalar potential V are defined through the fields - B = curl A and E = -grad V - dA/dt - and, in the Lorenz gauge, each obeys the inhomogeneous wave equation driven by its own source: curl curl A = mu·J + terms collapsing to del-squared A = -mu·J for the gauge, and del-squared V = -rho/epsilon. The gain is structural: solve one scalar wave equation per potential for a given source distribution J, rho, then differentiate to recover E and H. Every radiation result of this unit is a two-step pipeline - source to potential, potential to field.",
              "The power of the route is that a wire of arbitrary current distribution becomes tractable: subdivide the conductor into current elements I·dl, each contributing the vector potential dA = mu·I·dl·f(r)/4pi summed over the wire, then take curls to get H and E. For the oscillating current element - the Hertzian dipole of section 1.3 - this yields closed-form fields with three distance behaviours (1/r^3, 1/r^2, 1/r) that the rest of antenna theory spends its time sorting. The potentials also carry the physics of causality through the retarded time of section 1.2: the source that matters at field point r is the one that was there a moment r/c ago.",
              "A worked example fixes the scale. A 1 GHz wave has lambda = 0.3 m and c = 3 x 10^8 m/s, so the retardation delay over 1 m is 3.33 ns - the source current that produced the field at the observer left the antenna before the observer's 'now'. Free-space intrinsic impedance eta = sqrt(mu/epsilon) = 120·pi = 377 ohms sets the ratio of E to H in the radiating field: |E| = eta·|H| = 377·|H|. These three numbers - 0.3 m, 3.33 ns, 377 ohms - anchor every numerical in the unit, and quoting them earns the opening marks of any derivation question.",
              "The exam asks this section as 'why potentials?' - and the model answer is the chain: Maxwell (4 coupled PDEs) -> potentials (2 wave equations with sources) -> solutions as retarded integrals over the source -> fields by differentiation -> the dipole fields. State the two defining relations (B = curl A, E = -grad V - dA/dt), the gauge condition that decouples them, and the physical meaning of each term in E; the derivation marks live in the stated structure, not in re-deriving Maxwell.",
            ],
            keyTerms: [
              { term: "Vector potential A", definition: "Field whose curl is B; satisfies the inhomogeneous wave equation driven by current density J." },
              { term: "Scalar potential V", definition: "Field whose gradient (with -dA/dt) gives E; driven by charge density rho." },
              { term: "Lorenz gauge", definition: "The gauge condition that decouples A and V into separate wave equations." },
              { term: "Intrinsic impedance", definition: "eta = sqrt(mu/epsilon) = 120·pi = 377 ohms in free space; E/H ratio in the radiating field." },
              { term: "Current element I·dl", definition: "The infinitesimal building block into which any wire antenna is subdivided." },
            ],
            table: {
              caption: "The potentials route versus direct Maxwell solution.",
              headers: ["Aspect", "Direct Maxwell", "Potentials route"],
              rows: [
                ["Unknowns", "E and H (6 coupled components)", "A and V (decoupled wave equations)"],
                ["Source entry", "J and rho inside curl equations", "as forcing terms of wave equations"],
                ["Solution form", "field boundary-value problem", "retarded integrals over the source"],
                ["Wire antennas", "hard - boundary conditions on the wire", "subdivide into I·dl elements and integrate"],
                ["Speed", "complete but coupled", "two scalars, then differentiation"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From source to fields through the potentials",
              caption: "Two decoupled wave equations replace Maxwell's coupled set; differentiation recovers the fields.",
              steps: [
                { label: "Source", note: "current density J and charge rho on the antenna" },
                { label: "Potentials", note: "solve wave equations for A and V" },
                { label: "Gauge condition", note: "decouples A and V" },
                { label: "Magnetic field", note: "H = (1/mu)·curl A" },
                { label: "Electric field", note: "E = -grad V - dA/dt" },
              ],
            },
            bullets: [
              "B = curl A and E = -grad V - dA/dt define the potentials.",
              "In the Lorenz gauge both satisfy inhomogeneous wave equations driven by J and rho.",
              "Any wire antenna is integrated as current elements I·dl contributing dA.",
              "Free-space eta = 120·pi = 377 ohms; |E| = eta·|H| in the radiating zone.",
              "Retarded time r/c is already hiding inside the potential solutions.",
              "The potentials route turns wire radiation into summable elements.",
            ],
            callout: {
              type: "tip",
              title: "Quote the constants first",
              body: "Open every Unit I answer by writing lambda = c/f, eta = 120·pi = 377 ohms, and the retardation r/c. For 1 GHz: lambda = 0.3 m, delay over 1 m = 3.33 ns. Three constants up front earn the setup marks and keep every later number honest.",
            },
            examQuestions: [
              {
                q: "Explain why potential functions are introduced in antenna analysis. Define A and V, state the Lorenz gauge, and outline the route from a given current distribution to the radiated fields.",
                marks: 14,
                outline: [
                  "Maxwell's equations are coupled; potentials decouple into two wave equations",
                  "Definitions: B = curl A; E = -grad V - dA/dt",
                  "Lorenz gauge: div A + mu·epsilon·dV/dt = 0",
                  "Wave equations: del-squared A = -mu·J and del-squared V = -rho/epsilon",
                  "Solutions are retarded integrals over J and rho",
                  "Fields recovered: H = (1/mu)curl A, E = -grad V - dA/dt",
                  "Wire antennas: subdivide into I·dl elements, integrate contributions",
                ],
              },
              {
                q: "Compute the wavelength, the retardation delay over 10 m and the intrinsic impedance at 300 MHz in free space.",
                marks: 7,
                outline: [
                  "lambda = c/f = 3 x 10^8 / 3 x 10^8 = 1 m",
                  "Delay: r/c = 10/3 x 10^8 = 33.3 ns",
                  "eta = 120·pi = 377 ohms (frequency-independent in free space)",
                  "Retardation means the observed field left the source 33.3 ns ago",
                ],
              },
              {
                q: "State the physical meaning of each term in E = -grad V - dA/dt as it applies to an antenna.",
                marks: 7,
                outline: [
                  "-grad V: the electrostatic field of accumulated charge on the antenna",
                  "-dA/dt: the induction field of changing current - transformer action",
                  "Both dominate near the antenna (1/r^3 and 1/r^2 terms)",
                  "In the far zone only the radiation term (1/r, from retarded dA/dt) survives",
                  "The split anticipates the field regions of section 1.7",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Sinusoidal oscillations and retarded potentials",
            body: [
              "Steady sinusoidal excitation turns the potential wave equations into Helmholtz equations with phasor sources, and their solutions are the RETARDED potentials: A(r) = (mu/4pi)·integral of J(r')·e^(-jk·R)/R dv', where R = |r - r'| is the distance from source element to field point and e^(-jkR) is the phase lag of travel time R/c. In time language, the potential at point r and time t depends on the source at (r', t - R/c) - the source must have acted R/c seconds ago for its influence to arrive now. Retardation is not a correction term bolted on; it is the mechanism of radiation.",
              "The numbers make retardation tangible. At 100 MHz (lambda = 3 m), a point 1.5 m away sees the source as it was 5 ns earlier - half a period. At 3 m distance the delay is exactly one period: the observer sees the last cycle, not the current one. This phase lag e^(-jkR) is what converts near-field energy storage (which returns energy to the antenna every half cycle) into far-field power flow (which never comes back). Every field term the dipole analysis produces is tagged with its retardation phase, and the 1/r radiation terms are precisely the ones whose E and H are in phase - Poynting's theorem confirming real outbound power.",
              "For the sinusoidal current element I·dl·e^(jwt), the retarded vector potential has the closed form A = (mu·I·dl/4pi·r)·e^(j(wt - kr)) - uniform over the element because dl is infinitesimal. From this single expression, curl operations generate the complete dipole fields of section 1.3; the algebra is long but the structure is three distance zones, each with its own 1/r power. The exam wants the retardation idea stated in both languages - phasor e^(-jkR) and time delay t - R/c - plus the recognition that in the radiation zone the fields dance to the phase kr, which is why path length translates directly into phase (360 degrees per lambda) and why aperture theory (Unit IV) is Fourier optics.",
              "A short worked numerical: two current elements fed in phase but separated by lambda/2 radiate with path difference lambda/2 to a broadside observer - 180 degrees of phase difference - so they CANCEL on that axis; rotate the feed phases by 180 degrees and they add. This is array theory (Unit II) growing directly out of retardation: geometry + retarded phase = pattern. State that sentence in any retarded-potential answer and the examiner sees the whole subject in one line.",
            ],
            keyTerms: [
              { term: "Retarded potential", definition: "A(r) = (mu/4pi)·integral J(r')·e^(-jkR)/R dv' - the source weighted by travel phase." },
              { term: "Retarded time", definition: "t - R/c: the source time whose influence arrives at r at time t." },
              { term: "Phase constant k", definition: "k = 2pi/lambda radians per metre of travel." },
              { term: "Helmholtz equation", definition: "The time-harmonic form of the wave equation for phasor sources." },
              { term: "Path-phase equivalence", definition: "Path length R maps to phase kR: 360 degrees per lambda." },
            ],
            table: {
              caption: "Retardation in numbers (c = 3 x 10^8 m/s).",
              headers: ["Frequency", "Wavelength", "Distance r", "Delay r/c", "Phase kr"],
              rows: [
                ["1 GHz", "0.3 m", "1 m", "3.33 ns", "1200 degrees (3.33 cycles)"],
                ["1 GHz", "0.3 m", "0.075 m", "0.25 ns", "90 degrees"],
                ["100 MHz", "3 m", "1.5 m", "5 ns", "180 degrees"],
                ["100 MHz", "3 m", "3 m", "10 ns", "360 degrees"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The retardation chain",
              caption: "Each stage inherits the phase lag of travel time.",
              stages: [
                { label: "Source oscillation", note: "I(t) = I0·cos(wt)" },
                { label: "Retarded source", note: "I(t - r/c) at the field point" },
                { label: "Retarded potential", note: "A with e^(-jkr) phase and 1/r spread" },
                { label: "Field operations", note: "curl and time derivative add 1/r, 1/r^2, 1/r^3 terms" },
                { label: "Radiation zone", note: "only the 1/r pair - E and H in phase - carries power" },
              ],
            },
            bullets: [
              "Retarded potential: A = (mu/4pi)·integral J·e^(-jkR)/R over the source volume.",
              "Retarded time t - R/c: the observer sees the source's past.",
              "Path length converts directly to phase: 360 degrees per lambda of travel.",
              "The 1/r field terms have E in phase with H - real outbound power (Poynting).",
              "The 1/r^2 and 1/r^3 terms store and return energy every half cycle.",
              "Two in-phase elements spaced lambda/2 cancel broadside - array theory from retardation.",
            ],
            callout: {
              type: "exam",
              title: "Say it in both languages",
              body: "Retardation answers earn full marks only when stated twice: in phasor form (the e^(-jkR) factor in the potential integral) and in time form (the source evaluated at t - r/c). One sentence each, then the consequence: 'only the 1/r terms are in phase and carry real power.' That sentence is the section.",
            },
            examQuestions: [
              {
                q: "Define the retarded potentials for time-harmonic sources and explain the physical significance of the retardation factor e^(-jkR).",
                marks: 14,
                outline: [
                  "A(r) = (mu/4pi)·integral of J(r')·e^(-jkR)/R dv'",
                  "V(r) = (1/4pi·epsilon)·integral of rho(r')·e^(-jkR)/R dv'",
                  "e^(-jkR): phase lag of travel time R/c from source element to field point",
                  "Time view: source contribution at t - R/c",
                  "1/R amplitude spread from spherical spreading",
                  "Only the 1/r field terms have in-phase E and H - net power flow",
                  "Path-phase equivalence: 360 degrees per lambda",
                ],
              },
              {
                q: "Two current elements 1 m apart are fed in phase at 150 MHz. Compute the phase difference of their fields toward a point 10 km away on the perpendicular bisector, and state what happens to the radiated field there.",
                marks: 7,
                outline: [
                  "lambda = c/f = 2 m at 150 MHz",
                  "Path difference to a broadside point: 0 (perpendicular bisector) - fields arrive in phase",
                  "Toward the axis END-FIRE direction: path difference 1 m = 180 degrees",
                  "In-phase feeds: fields cancel along the array axis, add broadside",
                  "Conclusion: geometry plus retardation creates the pattern",
                ],
              },
              {
                q: "A mobile receiver at 900 m from a 900 MHz transmitter experiences a phase change when it moves 8.3 cm. Compute the phase shift.",
                marks: 7,
                outline: [
                  "lambda = c/f = 0.333 m at 900 MHz",
                  "Phase per metre: 360/0.333 = 1080 degrees",
                  "Movement 0.083 m: 0.083/0.333 = 0.25 lambda = 90 degrees",
                  "Consequence: multipath sums change rapidly over small distances - fading (Unit V preview)",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "The oscillating electric dipole (alternating current element)",
            body: [
              "The alternating current element - a short wire of length dl << lambda carrying uniform current I·e^(jwt) - is the hydrogen atom of antenna theory: every wire antenna is an integral of such elements, so its complete field set is worth memorizing. In spherical coordinates centred on the element (theta measured from the element axis), the fields split into three zones by their 1/r power. The radiation zone terms: H_phi = (I·dl·sin(theta))/(2·lambda·r)·e^(j(wt - kr)) and E_theta = eta·H_phi - mutually perpendicular, in phase, transverse, and falling as 1/r. The induction terms fall as 1/r^2; the quasi-static terms as 1/r^3.",
              "The pattern is the second headline result. The field strength carries the factor sin(theta): maximum broadside to the element (theta = 90 degrees), exactly zero on the axis (theta = 0 and 180 degrees). In the plane perpendicular to the element (H-plane), the pattern is a circle - the element is omnidirectional there; in the plane containing the element (E-plane) it is a figure-of-eight. No small element can avoid this: the sin(theta) factor comes from the geometry of the curl, and it is why a straight wire of any length radiates nothing off its ends.",
              "A worked numerical fixes the scale. Element dl = 1 cm, I = 1 A RMS, f = 1 GHz (lambda = 0.3 m), observed at r = 100 m broadside (theta = 90). Radiation-zone H: |H_phi| = I·dl/(2·lambda·r) = (1·0.01)/(2·0.3·100) = 1.67 x 10^-4 A/m. E = eta·H = 377·1.67 x 10^-4 = 62.9 mV/m. The 1/r law means doubling the distance quarters... halves the field (E-field in V/m falls as 1/r; power as 1/r^2 - the inverse-square law of section 5.5). Verify the zones: at r = 1 m the 1/r^2 term (lambda/2pi·r ~ 0.05) is 5 percent corrections; the true far field starts much further out (section 1.7).",
              "The exam question is 'derive the fields of a short current element' - a 14-marker with a known skeleton: write the retarded vector potential (section 1.2), convert to spherical components through the curl, retain the three distance terms, and box the radiation pair. Derivation marks attach to the potential line, the sin(theta) factor, and the identification of E_theta = eta·H_phi with in-phase relation. The pattern sketch (figure-of-eight in E-plane, circle in H-plane) completes it; a verbal 'omnidirectional in H-plane' without the sketch is treated as half an answer.",
            ],
            keyTerms: [
              { term: "Alternating current element", definition: "A wire segment dl << lambda with uniform current I; the atomic radiator." },
              { term: "Hertzian dipole", definition: "Same object, honouring Hertz - the canonical point radiator." },
              { term: "Radiation-zone fields", definition: "H_phi = I·dl·sin(theta)/(2·lambda·r), E_theta = eta·H_phi - 1/r, in phase, transverse." },
              { term: "E-plane / H-plane", definition: "Planes containing / perpendicular to the element axis: figure-of-eight / circle patterns." },
              { term: "sin(theta) pattern", definition: "Nulls on the element axis, maximum broadside - universal for small elements." },
            ],
            diagram: {
              kind: "compare",
              title: "The two pattern cuts of a short dipole",
              caption: "One element, two silhouettes: the donut seen from the side and from above.",
              left: {
                heading: "E-plane (contains the element)",
                items: [
                  "Figure-of-eight pattern",
                  "Maxima broadside (theta = 90 degrees)",
                  "Nulls on the axis (theta = 0, 180 degrees)",
                  "Shape: sin(theta) in polar plot",
                ],
              },
              right: {
                heading: "H-plane (perpendicular to element)",
                items: [
                  "Perfect circle - omnidirectional",
                  "Same field strength for all azimuths phi",
                  "Azimuth pattern of every vertical wire starts here",
                  "Directivity arises only from the E-plane pinch",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "dipole_pattern.py - the sin(theta) donut, plotted",
              code: `import numpy as np

theta = np.linspace(0, np.pi, 181)
F = np.sin(theta)                    # field pattern of the short element

print("nulls at theta = 0, 180 deg:", F[0], F[-1])
print("max broadside:", F[90])      # 1.0 at theta = 90

# half-power beamwidth: sin(theta) = 1/sqrt(2)
hp = np.degrees(np.arcsin(1 / np.sqrt(2)))   # 45 deg each side
print("HPBW:", 2 * hp)               # 90 degrees for the short element

# field at 100 m, I = 1 A, dl = 1 cm, f = 1 GHz
I, dl, lam, r, eta = 1.0, 0.01, 0.3, 100.0, 377.0
H = I * dl / (2 * lam * r)
print(H, eta * H)                    # 1.67e-4 A/m, 62.9 mV/m`,
            },
            bullets: [
              "Fields of the element: three zones - 1/r radiation, 1/r^2 induction, 1/r^3 quasi-static.",
              "Radiation pair: E_theta = eta·H_phi = eta·I·dl·sin(theta)/(2·lambda·r)·e^(j(wt - kr)).",
              "E and H of the radiation terms are in phase and transverse - a true plane wave locally.",
              "Pattern: sin(theta) - figure-of-eight in E-plane, circle in H-plane.",
              "Nulls on the element axis; maximum broadside; HPBW = 90 degrees for the short element.",
              "Worked field: 1 A through 1 cm at 1 GHz gives 62.9 mV/m at 100 m broadside.",
              "Every wire antenna integrates this element - master it and Unit I is done.",
            ],
            callout: {
              type: "exam",
              title: "The three-term field is the answer",
              body: "When asked to derive the element fields, present all three zones explicitly - the 1/r^3, 1/r^2 and 1/r terms - even though only the last is 'the answer'. The zone structure is what the derivation is FOR: it is the physics behind near-field vs far-field (section 1.7) and behind why shortening an antenna kills its radiation resistance (section 1.4).",
            },
            examQuestions: [
              {
                q: "Derive the electromagnetic fields of an alternating current element (Hertzian dipole) starting from the retarded vector potential. Identify the radiation, induction and quasi-static terms.",
                marks: 14,
                outline: [
                  "A = (mu·I·dl/4pi·r)·e^(j(wt - kr)) from section 1.2",
                  "H_phi from curl A: three terms in 1/r^3, 1/r^2, 1/r",
                  "E_theta similarly: radiation term eta·H_phi in phase",
                  "E_r term: quasi-static (1/r^3) charge contribution",
                  "Radiation zone: H_phi = I·dl·sin(theta)/(2·lambda·r), E_theta = eta·H_phi",
                  "sin(theta) factor: nulls on axis, maximum broadside",
                  "Pattern: figure-of-eight E-plane, circle H-plane",
                ],
              },
              {
                q: "A 2 cm element carries 2 A RMS at 900 MHz. Compute the radiation-zone E-field at 1 km broadside.",
                marks: 7,
                outline: [
                  "lambda = c/f = 0.333 m at 900 MHz",
                  "H = I·dl/(2·lambda·r) = 2·0.02/(2·0.333·1000) = 6.0 x 10^-5 A/m",
                  "E = eta·H = 377·6.0 x 10^-5 = 22.6 mV/m",
                  "1/r check: ten times farther than 100 m gives one-tenth the field",
                ],
              },
              {
                q: "Why is the H-plane pattern of a vertical dipole omnidirectional while the E-plane is a figure-of-eight?",
                marks: 7,
                outline: [
                  "The sin(theta) factor depends only on the polar angle from the wire",
                  "Moving around the wire (fixed theta = 90) leaves sin(theta) = 1 - circle",
                  "Moving over the top (theta varies) traces sin(theta) - figure-of-eight",
                  "Physical: radiation cancels on the axis because contributions oppose",
                  "Consequence: vertical antennas give omnidirectional azimuth coverage",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Power radiated by a current element and short antennas",
            body: [
              "Power flow makes radiation physical. Integrate the Poynting vector E x H of the radiation-zone fields over any sphere: the 1/r^2 intensity falls exactly as fast as the sphere's area grows, so the total is finite and constant - the radiated power P. For the element with uniform current I over length dl: P = 40·pi^2·I^2·(dl/lambda)^2 watts (I in RMS... careful - in peak current P = 40·pi^2·I0^2(dl/lambda)^2 with I0 peak; with RMS current the factor is 40·pi^2·I(rms)^2·(dl/lambda)^2). Defining radiation resistance Rr by P = I^2·Rr: Rr = 80·pi^2·(dl/lambda)^2 ohms - the fictitious resistance that would dissipate exactly the power the element launches into space.",
              "The numbers show why short antennas are inefficient transmitters. At dl = 0.01 lambda (1 cm at 1 GHz): Rr = 80·pi^2·10^-4 = 0.079 ohms - into an ohm-level resistance, matching a 50-ohm transmitter loses 99.8 percent of the power in ohmic losses before a milliwatt is radiated. At dl = 0.1 lambda: Rr = 7.9 ohms; at the half-wave point the radiation resistance leaps to 73 ohms (section 1.6) - comparable to feed lines and real matching networks. Directivity of the short element: D = 1.5 (1.76 dB) - the donut pattern is only 50 percent better than isotropic. The pair (Rr, D) is the complete short-antenna report card, and both scale in ways the exam drills: Rr as length squared, D fixed at 1.5 for ANY short element.",
              "A complete worked link budget for the short element: transmit 1 W into a matched 0.1-lambda element with ohmic loss resistance 1 ohm. Total series resistance = Rr + Rloss = 7.9 + 1 = 8.9 ohms; radiation efficiency = 7.9/8.9 = 0.888. Radiated power = 0.888 W. Field at 1 km broadside: EIRP = P·D = 0.888·1.5 = 1.33 W isotropic-equivalent; E = sqrt(30·EIRP)/r = sqrt(40)/1000 = 6.3 mV/m. The chain P -> efficiency -> EIRP -> field strength is the standard antenna-range calculation, and every link of it recurs in Unit V's propagation numericals.",
              "The exam's standard questions: derive Rr = 80·pi^2·(dl/lambda)^2 (14 marks - Poynting integration with the sin(theta) pattern, arriving at the closed form); compute Rr and radiated power for a given element; explain why short antennas make poor transmitters. The derivation's skeleton: radiation-zone fields from 1.3 -> Poynting intensity (eta·H^2) -> integrate sin^3(theta) over the sphere (which gives 8/3) -> P = 40·pi^2·I^2(dl/lambda)^2 -> Rr by definition. The sin^3 integral is the step examiners look for - write it, evaluate it, and the rest is arithmetic.",
            ],
            keyTerms: [
              { term: "Radiation resistance Rr", definition: "The equivalent resistance dissipating exactly the radiated power: Rr = 80·pi^2·(dl/lambda)^2 for the element." },
              { term: "Poynting vector", definition: "E x H - power flux density; its sphere integral gives total radiated power." },
              { term: "Radiation efficiency", definition: "Rr/(Rr + Rloss) - fraction of terminal power actually radiated." },
              { term: "EIRP", definition: "Equivalent isotropically radiated power: P·D; sets the far-field strength sqrt(30·EIRP)/r." },
              { term: "Short antenna", definition: "Any straight radiator with l << lambda: Rr tiny, D = 1.5, inefficient as a transmitter." },
            ],
            diagram: {
              kind: "fork",
              title: "Where the transmitter's watt goes",
              caption: "Follow one watt from the terminals into space.",
              start: "1 W at the antenna terminals",
              branches: [
                { label: "Ohmic resistance Rloss", outcome: "heat in conductors and matching network - lost forever", good: false },
                { label: "Radiation resistance Rr", outcome: "real outbound power - the useful share (Rr/(Rr + Rloss))", good: true },
                { label: "Reflected back (mismatch)", outcome: "returns to the transmitter if the feed is not matched", good: false },
                { label: "Stored in the near field", outcome: "reactive energy sloshes back each half-cycle - net zero", good: false },
              ],
            },
            table: {
              caption: "Radiation resistance of short elements (Rr = 80·pi^2·(l/lambda)^2).",
              headers: ["Element length l", "Rr (ohms)", "Radiated power at 1 A RMS", "Comment"],
              rows: [
                ["0.01 lambda", "0.079", "79 mW", "electrically short - poor transmitter"],
                ["0.05 lambda", "1.97", "1.97 W", "still awkward to match"],
                ["0.1 lambda", "7.9", "7.9 W", "loading coils begin to help"],
                ["0.5 lambda", "73.1", "73 W", "the half-wave dipole of section 1.6"],
              ],
            },
            bullets: [
              "Radiated power: P = 40·pi^2·I^2·(dl/lambda)^2 (RMS current).",
              "Radiation resistance: Rr = 80·pi^2·(dl/lambda)^2 - grows as length SQUARED.",
              "Numbers: 0.01 lambda -> 0.079 ohms; 0.1 lambda -> 7.9 ohms; 0.5 lambda -> 73 ohms.",
              "Directivity of any short element: D = 1.5 (1.76 dB).",
              "Efficiency = Rr/(Rr + Rloss); short antennas lose to ohmic resistance.",
              "Field strength from EIRP: E = sqrt(30·EIRP)/r V/m (EIRP in watts, r in metres).",
              "Worked chain: 1 W, 0.1 lambda, 1 ohm loss -> 0.888 W radiated -> 6.3 mV/m at 1 km.",
            ],
            callout: {
              type: "exam",
              title: "The sin^3 integral earns the derivation",
              body: "In the Rr derivation, the sphere integral reduces to (8/3) from integrating sin^3(theta). Write that integral explicitly - examiners scan for it. Skipping straight from Poynting to the answer suggests memorization, not derivation, and costs the method marks.",
            },
            examQuestions: [
              {
                q: "Starting from the radiation-zone fields of a current element, derive its radiated power and radiation resistance Rr = 80·pi^2·(dl/lambda)^2.",
                marks: 14,
                outline: [
                  "Radiation fields: E_theta = eta·I·dl·sin(theta)/(2·lambda·r), H_phi = E_theta/eta",
                  "Poynting intensity: W = eta·H_phi^2 (RMS) = eta·I^2·dl^2·sin^2(theta)/(4·lambda^2·r^2)",
                  "Integrate over the sphere: P = integral W·r^2·sin(theta) dtheta dphi",
                  "Angular integral: 2pi·integral sin^3(theta) dtheta = 2pi·(8/3)",
                  "P = 40·pi^2·I^2·(dl/lambda)^2 watts",
                  "Define Rr by P = I^2·Rr -> Rr = 80·pi^2·(dl/lambda)^2 ohms",
                  "Numerical: dl = 0.1 lambda gives 7.9 ohms",
                ],
              },
              {
                q: "A 0.05-lambda short antenna has Rloss = 2 ohms and carries 0.5 A RMS. Compute Rr, the radiated power, efficiency and the E-field at 5 km broadside.",
                marks: 7,
                outline: [
                  "Rr = 80·pi^2·(0.05)^2 = 1.97 ohms",
                  "P_rad = I^2·Rr = 0.25·1.97 = 0.49 W",
                  "Efficiency = 1.97/(1.97 + 2) = 0.496 - about half the power is heat",
                  "EIRP = P·D = 0.49·1.5 = 0.735 W",
                  "E = sqrt(30·0.735)/5000 = 4.7/5000 = 0.94 mV/m",
                ],
              },
              {
                q: "Explain why electrically short antennas are inefficient transmitters and what practical designs do about it.",
                marks: 7,
                outline: [
                  "Rr scales as (l/lambda)^2 - collapses for short wires",
                  "Ohmic and ground losses then dominate: efficiency tiny",
                  "Fixes: loading coils to lengthen electrical path, top hats (capacitive loading)",
                  "Better: operate near half-wave resonance where Rr = 73 ohms",
                  "Mobile antennas accept the compromise with matching networks",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Assumed current distribution on thin-wire antennas",
            body: [
              "Real wire antennas do not carry uniform current - the current must vanish at the open ends and its distribution along the wire decides the radiation. Thin-wire analysis ASSUMES the distribution: for a centre-fed wire of half-length L the standing-wave sinusoid I(z) = I0·sin(k(L - |z|)) - maximum I0 at the feed, zero at the ends, with the exact shape depending on the electrical length. The assumption is excellent for thin wires (radius << lambda): it satisfies the end condition, matches measurement, and reduces every wire problem to an integral of short elements with known amplitude weights.",
              "Length regimes follow immediately. Half-wave wire (L = lambda/4): the sinusoid is a clean half-cycle - maximum at centre, nulls at both ends, feed current I0 - the classic dipole of section 1.6. Full-wave wire (L = lambda/2): the sinusoid completes a full cycle - the two halves carry OPPOSITE current phase, their E-plane lobes narrow but the feed impedance climbs to thousands of ohms (current minimum at the feed). Five-half-wave and longer wires develop MULTIPLE lobes: the E-plane pattern of a 3-lambda/2 wire already shows major lobes tilted off-axis plus grating-like side structure. The pattern story: longer wire = more lobes, tilted main beam, higher directivity - until lobes multiply and the gain plateaus.",
              "The feed point matters as much as the length. Centre feed of a half-wave wire sits at the current MAXIMUM - convenient 73 ohms. The same wire end-fed sits at a current node - enormous voltage, thousands of ohms, terrible match but convenient mechanically (the end-fed half-wave with a matching network is the classic whip-and-coil mobile antenna). The assumption also explains the folded dipole's impedance step (section 3.1): a second parallel wire returns current at the feed instead of a node, quadrupling the input resistance to about 292 ohms.",
              "The exam wants the assumption stated with its justification: thin wire, sinusoidal standing wave, zero current at open ends, phase reversal between half-waves. Then the consequences table - half-wave, full-wave, 3-lambda/2 patterns and feed impedances - and the sketch of the current standing wave over the wire for each case. Drawing the current distribution FIRST and the pattern SECOND is the presentation order examiners reward: the pattern follows from the current, never the reverse.",
            ],
            keyTerms: [
              { term: "Sinusoidal current distribution", definition: "I(z) = I0·sin(k(L - |z|)): standing wave with end nulls on a thin wire." },
              { term: "End condition", definition: "Current must vanish at open wire ends - the anchor of the assumption." },
              { term: "Current maximum / node", definition: "Feed at a maximum (half-wave centre) gives low impedance; at a node, thousands of ohms." },
              { term: "Phase reversal", definition: "Adjacent half-waves of a long wire carry opposite current phase - multi-lobe patterns follow." },
              { term: "Thin-wire assumption", definition: "Radius << lambda lets the current be a scalar on the axis - the basis of all wire analysis." },
            ],
            diagram: {
              kind: "compare",
              title: "Two current assumptions and what they predict",
              caption: "The uniform assumption is right for elements, the sinusoidal for real wires.",
              left: {
                heading: "Uniform current (Hertzian element)",
                items: [
                  "Valid for dl << lambda - no room to vary",
                  "Gives Rr = 80·pi^2·(dl/lambda)^2",
                  "Building block of the integral method",
                  "Cannot describe end effects",
                ],
              },
              right: {
                heading: "Sinusoidal standing wave (real wires)",
                items: [
                  "I(z) = I0·sin(k(L - |z|)); zero at open ends",
                  "Predicts lobe structure of any length wire",
                  "Explains feed-impedance regimes (max vs node)",
                  "Verified on thin wires to a few percent",
                ],
              },
            },
            table: {
              caption: "Length regimes of a centre-fed thin wire (sinusoidal assumption).",
              headers: ["Wire length", "Current at feed", "E-plane pattern", "Feed resistance"],
              rows: [
                ["lambda/2 (half-wave)", "maximum I0", "single broad lobe", "~73 ohms"],
                ["1 lambda (full wave)", "node - near zero", "narrower lobes, tilted", "thousands of ohms"],
                ["3·lambda/2", "maximum", "multi-lobe, tilted main beam", "hundreds of ohms"],
                ["2 lambda", "node", "several major lobes", "high"],
              ],
            },
            bullets: [
              "Assumption: thin wire carries I(z) = I0·sin(k(L - |z|)) - end nulls guaranteed.",
              "Half-wave: clean half-cycle, feed at current maximum, 73 ohms.",
              "Full-wave: opposite phases in the two halves; feed at a node - huge impedance.",
              "Longer wires: adjacent half-waves in antiphase - lobes multiply and tilt.",
              "The pattern follows from the current distribution - draw current first.",
              "End-fed operation parks the feed at a node: matching network mandatory.",
              "The sinusoid plus element integration reproduces measured thin-wire patterns closely.",
            ],
            callout: {
              type: "exam",
              title: "Draw the standing wave first",
              body: "Any 'radiation from a wire of length L' answer starts with the current standing-wave sketch over the wire - nulls at ends, antinodes per half-wave, phase alternation. The sketch makes the pattern question answerable in one line per lobe and shows the examiner you know the current drives the radiation.",
            },
            examQuestions: [
              {
                q: "State and justify the assumed sinusoidal current distribution on a thin centre-fed wire. Describe the current standing wave and the resulting E-plane pattern for wires of length lambda/2, 1 lambda and 3·lambda/2.",
                marks: 14,
                outline: [
                  "I(z) = I0·sin(k(L - |z|)) - zero at ends, thin-wire justification",
                  "Half-wave: single antinode at centre; broad single lobe; 73 ohms",
                  "Full-wave: full cycle - antinodes at lambda/4 points; feed at node; lobes tilt",
                  "3·lambda/2: three antinodes with phase reversal - main lobes off-axis",
                  "Adjacent half-waves radiate in antiphase - lobe multiplication",
                  "Draw the standing wave first, then the pattern",
                ],
              },
              {
                q: "Why is the feed impedance of a centre-fed full-wave antenna very high while the half-wave is 73 ohms?",
                marks: 7,
                outline: [
                  "Full-wave wire: current node sits at the centre feed point",
                  "Voltage antinode at the feed - high voltage, tiny current",
                  "Input resistance reaches thousands of ohms",
                  "Half-wave feed sits at the current maximum - 73 ohms",
                  "Practical fix: folded arm or offset feed moves the effective feed point",
                ],
              },
              {
                q: "Sketch the current distribution on a wire of length 2 lambda centre-fed, and mark the phase relation between adjacent half-wave sections.",
                marks: 7,
                outline: [
                  "Four quarter-wave segments; antinodes at lambda/4, 3·lambda/4, 5·lambda/4, 7·lambda/4",
                  "Feed at centre = current node",
                  "Adjacent half-waves: currents 180 degrees out of phase",
                  "Radiation: lobes cancel broadside, appear at off-axis angles",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Radiation from the half-wave dipole and quarter-wave monopole",
            body: [
              "The centre-fed half-wave dipole is the workhorse of the antenna world, and its numbers are the most-quoted values in the subject. Integrating the sin-weighted element contributions over the wire (each element radiating as section 1.3 with the sinusoidal amplitude of 1.5) gives the E-plane pattern: F(theta) = cos((pi/2)·cos(theta))/sin(theta) - maximum broadside, nulls on the axis, half-power beamwidth 78 degrees. The radiation resistance evaluates through the sine and cosine integrals: Rr = (eta/2pi)·integral... in the standard form Rr = 60·[2·(Si(2pi) + (1 - cos(2pi))/(2pi))]·... the practical result every handbook prints: Rr = 73.1 ohms with a reactive part of +j42.5 ohms (tuned out by shortening the antenna 5 percent to resonance).",
              "The sine and cosine integrals earn their syllabus slot as the exact-evaluation tools: Si(x) = integral of sin(t)/t dt from 0 to x and Ci(x) = -integral of cos(t)/t dt from x to infinity. The radiation resistance integrates the element contributions with their pairwise phase differences, producing exactly these functions; numerically Si(2pi) = 1.4182, and the closed-form assembly lands at 73.1 ohms. For lengths near half-wave the resistance follows the smooth curve Rr ≈ 73 + 30·(2L/lambda - 1)^2 ohms... approximately - the exam only needs the half-wave value and the method: element integration, phase-corrected, evaluated by Si and Ci.",
              "The quarter-wave monopole over a perfect ground plane is the dipole's mirror twin: image theory replaces the ground with the missing half of the dipole, so the monopole's fields above ground are IDENTICAL to the half-wave dipole's. Its radiation resistance halves - 36.5 ohms - because the same feed current drives only the physical half of the antenna structure, and its directivity DOUBLES to 3.28 (5.15 dBi) because the same radiated power now fills only the upper hemisphere. The numbers: Rr = 36.5 ohms, D = 3.28, pattern donut cut in half by the ground. Real grounds are lossy, and the effective (virtual) ground sits below the physical surface - the correction that section 2.7 and Unit V's ground-wave work quantify.",
              "The exam's numerical core: compute Rr and D for the dipole (73 ohms, 1.64) and the monopole (36.5 ohms, 3.28), explain the image-theory factor of two in each, and sketch both patterns. A 14-marker adds the pattern function derivation or the Si/Ci evaluation sketch; a 7-marker asks for the impedance-matching consequence - 73 ohms sits near 50-ohm coax (SWR 1.46 unmatched, trivially matched), while the monopole's 36.5 ohms needs a matching section or a slight lengthening (the method used in every mobile whip).",
            ],
            keyTerms: [
              { term: "Half-wave dipole", definition: "Centre-fed lambda/2 wire: Rr = 73.1 ohms, D = 1.64 (2.15 dBi), HPBW 78 degrees." },
              { term: "Quarter-wave monopole", definition: "Ground-plane antenna: Rr = 36.5 ohms, D = 3.28 (5.15 dBi) via image theory." },
              { term: "Sine integral Si(x)", definition: "integral of sin(t)/t dt - one of the two special functions in Rr evaluation." },
              { term: "Cosine integral Ci(x)", definition: "The second special function; together with Si completes the dipole resistance." },
              { term: "Image theory", definition: "A perfect ground acts as the mirror that completes the monopole into a dipole." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Thin-wire radiators by electrical length",
              caption: "From the building block to the two structures this subject runs on.",
              tiers: [
                { label: "Half-wave dipole", note: "Rr = 73.1 ohms, D = 1.64 - the reference wire antenna" },
                { label: "Quarter-wave monopole", note: "Rr = 36.5 ohms, D = 3.28 - image doubles the directivity" },
                { label: "Short dipole (0.1 lambda)", note: "Rr = 7.9 ohms, D = 1.5 - needs loading to transmit" },
                { label: "Hertzian element", note: "Rr = 80·pi^2·(dl/lambda)^2 - the integral building block" },
              ],
            },
            table: {
              caption: "The numbers every antenna answer quotes.",
              headers: ["Antenna", "Rr (ohms)", "Directivity", "dBi", "HPBW (E-plane)"],
              rows: [
                ["Half-wave dipole", "73.1 (+j42.5 reactance)", "1.64", "2.15", "78 degrees"],
                ["Quarter-wave monopole (perfect ground)", "36.5", "3.28", "5.15", "78 degrees (upper hemisphere)"],
                ["Short dipole (l << lambda)", "80·pi^2·(l/lambda)^2", "1.5", "1.76", "90 degrees"],
                ["Resonant shortened dipole (~0.475 lambda)", "~67 resistive", "~1.55", "~1.9", "80 degrees"],
              ],
            },
            bullets: [
              "Half-wave pattern: F(theta) = cos((pi/2)cos(theta))/sin(theta); nulls on axis.",
              "Rr = 73.1 ohms, reactance +j42.5 - shorten 5 percent to resonate.",
              "Evaluation runs through Si and Ci; Si(2pi) = 1.4182.",
              "Monopole over perfect ground: identical upper-half fields, half the Rr (36.5 ohms), double the D (3.28).",
              "Directivity 1.64 = 2.15 dBi (dipole); 3.28 = 5.15 dBi (monopole).",
              "Image theory halves the resistance because only half the structure is physically fed.",
              "Real grounds: the image weakens and tilts - quantified in Unit V ground-wave work.",
            ],
            callout: {
              type: "exam",
              title: "The factor-of-two pair",
              body: "Monopole questions are two-mark giveaways if you hold the pair: resistance HALVES (36.5 ohms) because the structure is half-fed, directivity DOUBLES (5.15 dBi) because the power squeezes into one hemisphere. State both directions explicitly - one without the other reads as a half-remembered fact.",
            },
            examQuestions: [
              {
                q: "Explain the evaluation of the radiation resistance of a half-wave dipole, mentioning the sine and cosine integrals, and state the final impedance. How does shortening the antenna to 0.475 lambda change it?",
                marks: 14,
                outline: [
                  "Integrate element contributions with sinusoidal amplitude weights",
                  "Pairwise phase differences produce Si and Ci functions",
                  "Rr = 73.1 ohms with reactive part +j42.5",
                  "Shortening to ~0.475 lambda cancels the reactance: resonant ~67 ohms",
                  "Pattern essentially unchanged: D = 1.64, HPBW 78 degrees",
                  "73 ohms matches practical coax with a simple network",
                ],
              },
              {
                q: "Using image theory, derive the radiation resistance and directivity of a quarter-wave monopole over a perfect ground plane.",
                marks: 7,
                outline: [
                  "Perfect ground mirrors the monopole into a virtual half-wave dipole",
                  "Fields above ground: identical to the dipole's upper half",
                  "Same feed current drives half the physical structure: Rr = 73/2 = 36.5 ohms",
                  "Power confined to the upper hemisphere: D = 2 x 1.64 = 3.28 (5.15 dBi)",
                  "Pattern: half-donut; nulls remain on the (vertical) axis",
                ],
              },
              {
                q: "A 100 MHz quarter-wave whip works over a real ground with effective image 70 percent as strong. Estimate the effect on gain relative to perfect ground.",
                marks: 7,
                outline: [
                  "Perfect ground: D = 3.28 (5.15 dBi) into the hemisphere",
                  "Weaker image: partial cancellation of the low-angle field",
                  "Gain drops by roughly 1.5-2 dB; low-angle lobe tilts upward",
                  "The effective ground plane sits below the physical surface (section 2.7)",
                  "Practical whips add ground radial wires to restore the image",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Field regions and the far-field approximation",
            body: [
              "Antenna fields sort into three regions by distance. The REACTIVE NEAR FIELD (r < 0.62·sqrt(D^3/lambda) for a largest dimension D... for small antennas roughly r < lambda/2pi) is dominated by the 1/r^3 quasi-static terms: energy sloshes between the antenna and this zone without leaving - it is storage, not radiation, and it can detune anything brought into it (hand-effects on handheld radios are near-field coupling). The RADIATING NEAR FIELD or Fresnel zone extends to 0.62·sqrt(D^3/lambda) and beyond it the FAR FIELD or Fraunhofer region begins at r_ff = 2·D^2/lambda and lasts forever.",
              "The far-field approximation is the licence that makes antenna patterns exist. Beyond r_ff the fields are transverse (E and H perpendicular to r and to each other), in phase, with |E| = eta·|H|, falling as 1/r, and - decisively - the pattern F(theta, phi) is INDEPENDENT of r: angular structure has frozen. The approximation behind it: the path difference from different points of the antenna to the observer is expanded to first order only (the (r'·sin theta) term of the phase); the second-order term r'^2/2r must be < lambda/8 (22.5 degrees of phase), which is precisely the condition r > 2D^2/lambda. Two worked distances: a 1 m dish at 6 GHz (lambda = 0.05 m) needs r > 2·1/0.05 = 40 m; a 30 cm Yagi at 144 MHz (lambda = 2.08 m) needs r > 2·0.09/2.08 = 0.09 m - already far-field in any test room.",
              "The numbers also explain measurement practice. Antenna test ranges must sit in the far field or the measured pattern is corrupted by the quadratic phase (the pattern looks broadened, with filled nulls); compact-range facilities use a parabolic collimator to create a far-field-like plane wave at short distances. For the 1 m dish above, an indoor range would need 40 m of runway - hence either rooftop ranges or compact ranges. The same boundary governs interference: two antennas within each other's near field couple reactively (detuning), while beyond 2D^2/lambda they interact only via radiated waves.",
              "The exam asks: define the regions with their boundary formulas, state the far-field conditions (there are FOUR: amplitude 1/r, transversality, in-phase E/H, and pattern independence), and derive r_ff = 2D^2/lambda from the lambda/8 phase-error criterion. The derivation is two lines - second-order path term r'^2/2r < lambda/8 with r' ~ D/2 gives r > 2D^2/lambda - and it is the derivation that earns the 14; the region definitions alone are the 7-mark version.",
            ],
            keyTerms: [
              { term: "Reactive near field", definition: "r < ~lambda/2pi (small antennas) or 0.62·sqrt(D^3/lambda): stored energy, no net power flow." },
              { term: "Fresnel (radiating near field)", definition: "Transition zone where angular structure still changes with distance." },
              { term: "Far field (Fraunhofer)", definition: "r > 2D^2/lambda: 1/r fields, transverse, in phase, pattern frozen." },
              { term: "lambda/8 criterion", definition: "Second-order path phase must stay under 22.5 degrees - the origin of 2D^2/lambda." },
              { term: "Compact range", definition: "A collimating reflector that delivers plane-wave (far-field-like) illumination indoors." },
            ],
            diagram: {
              kind: "matrix",
              title: "Distance zones around an antenna of dimension D",
              caption: "Zone boundaries decide what a probe there would measure.",
              axes: { x: "Distance r (near -> far)", y: "Dominant behaviour (storage -> radiation)" },
              quadrants: [
                { label: "Reactive near field", note: "r < 0.62·sqrt(D^3/lambda): 1/r^3 storage, detunes probes" },
                { label: "Fresnel zone", note: "structure still evolving; curvature correction visible" },
                { label: "Far field begins", note: "r = 2D^2/lambda: pattern frozen, 1/r fields" },
                { label: "Deep far field", note: "pure spherical wave; inverse-square power law (Unit V)" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "farfield.py - the boundaries for three real antennas",
              code: `import numpy as np

def far_field(D, f):
    lam = 3e8 / f
    rnf = 0.62 * np.sqrt(D**3 / lam)      # reactive near-field edge
    ff = 2 * D**2 / lam                    # Fraunhofer distance
    return rnf, ff

for name, D, f in [("1 m dish, 6 GHz", 1.0, 6e9),
                   ("30 cm Yagi, 144 MHz", 0.30, 144e6),
                   ("30 mm patch, 2.4 GHz", 0.03, 2.4e9)]:
    rnf, ff = far_field(D, f)
    print(f"{name}: near-field < {rnf:.2f} m, far-field > {ff:.2f} m")

# 1 m dish: 1.79 m, 40 m | Yagi: 0.10 m, 0.09 m | patch: 0.01 m, 0.007 m`,
            },
            bullets: [
              "Three zones: reactive near field, radiating near field (Fresnel), far field (Fraunhofer).",
              "Far-field boundary: r > 2D^2/lambda from the lambda/8 phase-error criterion.",
              "Reactive near field: energy storage only - probe placement detunes the antenna.",
              "Far-field conditions: 1/r amplitude, transversality, E in phase with H, pattern independent of r.",
              "Worked: 1 m dish at 6 GHz needs 40 m; a patch at 2.4 GHz needs 7 mm.",
              "Test ranges live beyond 2D^2/lambda or use compact ranges (collimators).",
              "Hand-effects on handhelds are near-field coupling, not pattern changes.",
            ],
            callout: {
              type: "exam",
              title: "Four conditions, one boundary",
              body: "Far-field questions want the boundary formula AND the four conditions listed separately (1/r amplitude, transverse, in-phase E/H, r-independent pattern). The 2D^2/lambda derivation from the lambda/8 criterion is the 14-mark core: two lines of path-difference algebra, then the conclusion.",
            },
            examQuestions: [
              {
                q: "Define the field regions of an antenna, state the far-field conditions, and derive the Fraunhofer distance r = 2D^2/lambda from the phase-error criterion.",
                marks: 14,
                outline: [
                  "Reactive near field: 1/r^3 storage, boundary ~0.62·sqrt(D^3/lambda)",
                  "Radiating near field (Fresnel): structure still distance-dependent",
                  "Far field (Fraunhofer): r > 2D^2/lambda",
                  "Conditions: 1/r amplitude; E and H transverse and in phase; |E| = eta|H|; pattern frozen",
                  "Path difference second-order term: r'^2/2r with r' ~ D/2",
                  "Criterion: quadratic phase < pi/4 (lambda/8 path)",
                  "r'^2/2r < lambda/8 -> r > 2D^2/lambda",
                ],
              },
              {
                q: "Compute the far-field distance of a 2 m parabolic dish used at 4 GHz, and explain the measurement consequence.",
                marks: 7,
                outline: [
                  "lambda = c/f = 0.075 m at 4 GHz",
                  "r_ff = 2D^2/lambda = 2·4/0.075 = 107 m",
                  "Indoor ranges cannot reach it - compact range or outdoor range needed",
                  "Measuring closer: quadratic phase broadens the pattern and fills nulls",
                ],
              },
              {
                q: "Why does bringing a hand near a handheld transceiver detune it while a distant building merely reflects its signal?",
                marks: 7,
                outline: [
                  "The hand sits in the reactive near field: capacitive loading",
                  "Near-field energy is stored and returned - coupling changes input impedance",
                  "Distant objects interact only with radiated (1/r) waves: reflection, not detuning",
                  "The near field carries no net power; the far field does",
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
      title: "Antenna Fundamentals",
      summary:
        "Unit II turns the radiator of Unit I into an engineering object: the antenna as a network element with reciprocity and network theorems, radiation patterns and the directional properties of dipoles, directivity, gain and effective area, pattern multiplication and the two-element array, the uniform linear array, the binomial array, and travelling-wave versus standing-wave antennas with the earth beneath the pattern.",
      chapter: {
        number: "02",
        title: "Patterns, Gain and Arrays",
        intro:
          "Unit II covers the introduction to antennas as network elements and the network theorems, directional properties of dipole antennas, travelling-wave antennas and the effect of feed on standing-wave antennas, the two-element array, horizontal patterns in broadcast arrays, linear arrays, multiplication of patterns, the effect of earth on vertical patterns, the binomial array, antenna gain and effective area.",
        inOneBreath:
          "An antenna is a transducer with an input impedance (73 ohms for the half-wave) and identical behaviour transmit and receive - reciprocity. Patterns are measured in cuts and quoted by HPBW, FNBW and sidelobe level; directivity D = 4pi/omega_A, gain G = efficiency x D, effective area Ae = lambda^2·G/4pi (a 2 m dish at 6 GHz holds 39.4 dBi). The array factor sin(N·psi/2)/(N·sin(psi/2)) multiplies the element pattern: broadside needs equal phase, end-fire needs progressive beta = -k·d. Binomial amplitudes (Pascal's row) kill sidelobes at the cost of beamwidth; terminated wires (travelling wave) beam one way, resonant wires lobes many; the earth's image strengthens low angles when perfect and tilts them when lossy.",
        sections: [
          {
            number: "2.1",
            title: "The antenna as a network element: reciprocity and the network theorems",
            body: [
              "Looked at from the transmitter, an antenna is a one-port: an input impedance Zin = Ra + jXa, where Ra = Rr + Rloss collects radiation and ohmic loss and Xa is the stored-energy reactance (+j42.5 ohms for an untuned half-wave dipole). The maximum power transfer theorem then dictates matching: a source of internal resistance Rs delivers power P = Vs^2·Ra/((Rs + Ra)^2 + Xa^2), maximized when Zin = conj(Zs) - the conjugate-match condition. Worked numbers: a 73-ohm resonant dipole on 50-ohm coax shows SWR 73/50 = 1.46 (mismatch loss 0.15 dB - tolerable) and a lambda/4 transformer of characteristic impedance sqrt(73·50) = 60.4 ohms matches it exactly.",
              "The receive side is the same network by a deeper theorem. RECIPROCITY: for a linear, isotropic, passive medium, the antenna's transmitting pattern, gain, impedance and polarization are identical to its receiving ones - swap transmitter and receiver and every measured quantity is unchanged. The receiving antenna is modelled as a Thevenin source: open-circuit voltage Voc = E·hl (effective length times incident field) in series with Zin, feeding the receiver. Practical consequence: a station tuned for transmit is automatically tuned for receive; a Yagi's pattern measured on a test range applies verbatim to its use as a receiving antenna.",
              "The network theorems earn their syllabus mention through what they DECIDE. Maximum power transfer: match the antenna to the line (the conjugate-match condition above). Reciprocity: measure once, use twice - the entire antenna-range industry rests on it. Superposition: the field of an array is the sum of element fields (the basis of pattern multiplication, section 2.4). Substitution (Thevenin/Norton): any feeding structure collapses to a source in series with Zin for link-budget work. A worked receive numerical ties them: incident field E = 10 µV/m at a half-wave dipole (effective length hl = lambda/pi; for lambda = 2 m, hl = 0.637 m) gives Voc = 6.37 µV; delivered to a matched receiver: P = Voc^2/(4·Ra) = (6.37 x 10^-6)^2/(4·73) = 1.39 x 10^-13 W = -98.6 dBm.",
              "The exam pattern: define Zin and its three parts, state the conjugate-match condition from the maximum-power-transfer theorem, compute a transformer impedance or SWR, and state reciprocity with its conditions (linear, passive, isotropic medium) and its receive-side model (Thevenin voltage E·hl). The Voc = E·hl calculation is the standard 7-marker; hl = lambda/pi for the half-wave dipole is the value to hold, with the method (integrate the current distribution) as the marks.",
            ],
            keyTerms: [
              { term: "Input impedance Zin", definition: "Ra + jXa at the feed terminals: radiation resistance plus loss plus stored-energy reactance." },
              { term: "Conjugate match", definition: "Zin = conj(Zs) - the maximum-power-transfer condition for the feed line." },
              { term: "Reciprocity", definition: "Transmit and receive properties (pattern, gain, impedance, polarization) are identical for linear passive antennas." },
              { term: "Effective length hl", definition: "Voc = E·hl; hl = lambda/pi for the half-wave dipole." },
              { term: "Thevenin receive model", definition: "Voc in series with Zin feeding the receiver - the receiving equivalent circuit." },
            ],
            diagram: {
              kind: "cycle",
              title: "Reciprocity: one antenna, two jobs",
              caption: "Measure the transmitting pattern; the receiving behaviour is the same by theorem.",
              steps: [
                { label: "Transmit mode", note: "source drives Zin; pattern and gain defined" },
                { label: "Store the calibration", note: "one measurement set - pattern, gain, impedance" },
                { label: "Swap roles", note: "the same structure now receives" },
                { label: "Thevenin model", note: "Voc = E·hl in series with the same Zin" },
                { label: "Identical numbers", note: "reciprocity guarantees no second measurement" },
                { label: "Back to transmit", note: "the wheel closes - linear, passive, isotropic medium" },
              ],
            },
            table: {
              caption: "Network theorems and where each bites in antenna work.",
              headers: ["Theorem", "Antenna statement", "Practical use"],
              rows: [
                ["Maximum power transfer", "match Zin to conj(Zs)", "lambda/4 transformer: sqrt(73 x 50) = 60.4 ohms"],
                ["Reciprocity", "TX pattern = RX pattern", "one range measurement serves both directions"],
                ["Superposition", "array field = sum of elements", "pattern multiplication (2.4)"],
                ["Thevenin / Norton", "antenna = Voc + Zin at the terminals", "receive link budgets: P = Voc^2/4Ra"],
                ["Impedance transformation", "lambda/4 line inverts", "matching sections, folded-dipole scaling"],
              ],
            },
            bullets: [
              "Zin = Ra + jXa; Ra = Rr + Rloss; the half-wave dipole: 73 + j42.5 ohms untuned.",
              "Conjugate match maximizes delivered power: SWR 1.46 costs only 0.15 dB.",
              "lambda/4 transformer: Z0 = sqrt(Rsource·Rload) = 60.4 ohms for 73-50 matching.",
              "Reciprocity conditions: linear, passive, isotropic medium - then TX = RX everywhere.",
              "Receive model: Voc = E·hl; half-wave dipole hl = lambda/pi = 0.637 m at 150 MHz.",
              "Worked receive: E = 10 µV/m gives -98.6 dBm into a matched receiver.",
              "Superposition makes arrays additive - the seed of pattern multiplication.",
            ],
            callout: {
              type: "exam",
              title: "State the conditions with the theorem",
              body: "Reciprocity answers lose marks for missing conditions: the medium must be linear, passive and isotropic, and the terminals linear. Write the condition clause - it is a full mark - and then the two-way table: same pattern, same gain, same impedance, same polarization both ways.",
            },
            examQuestions: [
              {
                q: "State and prove the application of the maximum power transfer theorem to a receiving antenna, and compute the lambda/4 transformer impedance needed to match a 73-ohm resonant dipole to a 50-ohm line.",
                marks: 14,
                outline: [
                  "Receive model: Voc in series with Zin = 73 ohms feeding the receiver",
                  "Delivered power P = Voc^2·Rl/((Rs + Rl)^2 + X^2); maximize over Rl",
                  "Maximum at Rl = Rs = 73 ohms (conjugate match with Xa tuned out)",
                  "Half the open-circuit voltage appears across the load",
                  "73-to-50 mismatch: SWR = 1.46, mismatch loss 10·log10(4·73·50/(123)^2)... = 0.15 dB",
                  "Lambda/4 transformer: Z0 = sqrt(73 x 50) = 60.4 ohms",
                ],
              },
              {
                q: "State the reciprocity theorem for antennas with its conditions, and list the properties it makes identical in transmit and receive.",
                marks: 7,
                outline: [
                  "Linear, passive, isotropic medium; linear antenna terminals",
                  "Swapping transmitter and receiver leaves every measurement unchanged",
                  "Identical: radiation pattern, directivity/gain, input impedance, polarization",
                  "Consequence: one range calibration serves both link directions",
                ],
              },
              {
                q: "A half-wave dipole at 150 MHz receives a field of 10 µV/m. Compute the open-circuit voltage and the power delivered to a matched receiver.",
                marks: 7,
                outline: [
                  "lambda = 2 m; effective length hl = lambda/pi = 0.637 m",
                  "Voc = E·hl = 10 x 10^-6 x 0.637 = 6.37 µV",
                  "Matched load sees half Voc: V = 3.19 µV",
                  "P = V^2/Ra = (3.19 x 10^-6)^2/73 = 1.39 x 10^-13 W",
                  "In dBm: 10·log10(1.39 x 10^-13/10^-3) = -98.6 dBm",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Radiation patterns and the directional properties of dipoles",
            body: [
              "The radiation pattern is the antenna's fingerprint: field strength (or power) as a function of direction, drawn in cuts - the E-plane (containing the polarization) and H-plane (magnetic cut), or azimuth/elevation for installed antennas. Field patterns plot |E| normalized; power patterns plot |E|^2 in dB, where the numbers are quotable: a -3 dB field point is a -6 dB power point - the classic slip between the two. Standard measures: half-power beamwidth HPBW (the -3 dB power width), first-null beamwidth FNBW, sidelobe level (dB below the main lobe), front-to-back ratio, and lobes named main, minor, sidelobe and back.",
              "Dipole directional properties evolve with electrical length, and the sequence is worth memorizing as a table. lambda/2: single broad lobe, HPBW 78 degrees, no sidelobes, front-to-back infinite (axis nulls). 3·lambda/2: the current's phase reversal (section 1.5) tilts the main lobes about 40 degrees off axis and raises sidelobes to roughly -8 dB. 2 lambda: a cloverleaf of four tilted lobes. 5·lambda/2 and beyond: lobe families at the angle sin(theta) = m·lambda/L... approximately m·lambda/(2L) - the long-wire lobe rule that section 3.7 exploits with V and rhombic antennas. Shorter than half-wave: the pattern WIDENS toward the short-element 90-degree donut of section 1.3.",
              "A worked reading exercise is the standard numerical: given the azimuth pattern of a 6-element Yagi with HPBW 44 degrees, estimate its directivity with the beam-solidity approximation D ≈ 41,253/(HPBW_az·HPBW_el) (degrees squared): for a pattern with equal cuts, D ≈ 41,253/44^2 = 21.3 (13.3 dBi) - bracketing the true 10-12 dBi because the approximation assumes a single pencil beam with no sidelobes. State the approximation, apply it, and note its optimistic bias - that three-move answer is exactly what 'estimate the directivity from the pattern' wants.",
              "The exam's 14-marker: define the pattern terms with a labelled sketch (main lobe, HPBW, FNBW, sidelobe, back lobe), contrast field vs power patterns (-3 dB field = -6 dB power), and trace the dipole length sequence. The 7-markers: define HPBW/FNBW with the sketch, or estimate directivity from beamwidths using the 41,253 formula. Draw every pattern as a polar sketch with the beamwidth angle marked - unlabelled sketches score half.",
            ],
            keyTerms: [
              { term: "Radiation pattern", definition: "Field or power as a function of direction; drawn in E-plane and H-plane cuts." },
              { term: "HPBW", definition: "Half-power beamwidth: the angle between -3 dB power points of the main lobe." },
              { term: "FNBW", definition: "First-null beamwidth: angle between the nulls flanking the main lobe." },
              { term: "Sidelobe level", definition: "Peak of the largest sidelobe in dB below the main lobe." },
              { term: "Beam-solidity estimate", definition: "D ≈ 41,253/(HPBW_az x HPBW_el) in degrees squared - optimistic if sidelobes exist." },
            ],
            table: {
              caption: "Dipole directional properties versus electrical length.",
              headers: ["Length", "HPBW", "Sidelobes", "Character"],
              rows: [
                ["<< lambda/2", "90 degrees", "none", "short-element donut"],
                ["lambda/2", "78 degrees", "none", "single broad lobe - the standard"],
                ["3·lambda/2", "~35 degrees per lobe", "~-8 dB", "lobes tilt ~40 degrees off axis"],
                ["2 lambda", "~25 degrees", "multiple", "cloverleaf, four tilted lobes"],
                ["5·lambda/2", "narrower", "strong", "long-wire lobe rule takes over"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a pattern is measured",
              caption: "Rotate, record, normalize - the range procedure behind every pattern plot.",
              steps: [
                { label: "Mount", note: "antenna under test on the positioner, far-field distance (1.7)" },
                { label: "Transmit", note: "known source antenna illuminates it" },
                { label: "Rotate", note: "sweep theta (E-plane cut) then phi (H-plane cut)" },
                { label: "Record", note: "received level vs angle, normalized to the peak" },
                { label: "Extract numbers", note: "HPBW, FNBW, sidelobe level, front-to-back" },
              ],
            },
            bullets: [
              "Patterns: field (linear) vs power (dB) - -3 dB field = -6 dB power.",
              "Standard numbers: HPBW, FNBW, sidelobe level, front-to-back ratio.",
              "lambda/2 dipole: 78 degrees HPBW, no sidelobes, nulls on the axis.",
              "3·lambda/2: lobes tilt ~40 degrees; sidelobes ~-8 dB.",
              "2 lambda: cloverleaf; longer wires follow the lobe rule sin(theta) ~ m·lambda/2L.",
              "Beam-solidity estimate: D ≈ 41,253/(HPBW_az x HPBW_el) - optimistic with sidelobes.",
              "Draw polar sketches with the beamwidth angle marked.",
            ],
            callout: {
              type: "warning",
              title: "Field dB versus power dB",
              body: "The single most common pattern-reading slip: quoting the half-power beamwidth at the -3 dB point of a FIELD plot. The half-power point is -3 dB on a POWER (dB) plot and -3 dB field means -6 dB power. Check which curve you are reading before extracting any beamwidth.",
            },
            examQuestions: [
              {
                q: "Define the radiation pattern of an antenna. With a labelled sketch, explain main lobe, HPBW, FNBW, sidelobe level and front-to-back ratio, and distinguish field patterns from power patterns.",
                marks: 14,
                outline: [
                  "Pattern: |E| or |E|^2 as a function of theta, phi",
                  "E-plane cut contains the polarization; H-plane is perpendicular",
                  "Main lobe: the maximum; sidelobes: lesser peaks; back lobe: 180 degrees region",
                  "HPBW: -3 dB power width; FNBW: width between first nulls",
                  "Sidelobe level in dB below the main lobe; front-to-back ratio",
                  "Field vs power: -3 dB field = -6 dB power - state the conversion",
                ],
              },
              {
                q: "Describe how the E-plane pattern of a centre-fed dipole changes as its length grows from 0.5 lambda to 2 lambda.",
                marks: 7,
                outline: [
                  "0.5 lambda: single broad lobe, HPBW 78 degrees, nulls on axis",
                  "0.75 lambda: lobes tilt ~40 degrees, sidelobes appear (-8 dB)",
                  "1 lambda: two narrower lobes, feed at current node",
                  "2 lambda: cloverleaf of four tilted lobes",
                  "Cause: adjacent half-wave sections radiate in antiphase (1.5)",
                ],
              },
              {
                q: "An antenna has HPBW 30 degrees in both principal planes. Estimate its directivity and state the assumption behind the estimate.",
                marks: 7,
                outline: [
                  "D ≈ 41,253/(30 x 30) = 45.8",
                  "In dBi: 10·log10(45.8) = 16.6 dBi",
                  "Assumption: single pencil beam, no sidelobes, symmetrical cuts",
                  "Real sidelobes reduce the true directivity below the estimate",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Directivity, gain, efficiency and effective area",
            body: [
              "Directivity D quantifies how hard an antenna squeezes its power: D = 4pi/omega_A, where omega_A is the beam solid angle - the solid angle through which ALL the power would flow at the peak intensity. Equivalently D = 4pi·Umax/P_rad. Isotropic D = 1; the half-wave dipole D = 1.64; a 2 m dish at 6 GHz with 55 percent aperture efficiency reaches D ≈ 15,800. Gain G adds efficiency: G = eta_cd·D with eta_cd = Rr/(Rr + Rloss) - the ratio of radiated to terminal power. In dB: dBi references isotropic, dBd references a half-wave dipole (dBd = dBi - 2.15).",
              "Effective aperture is the receive-side twin: Ae = lambda^2·G/4pi - the area over which the antenna captures the incident power density. The fundamental relation binds the family: G = 4pi·Ae/lambda^2. Worked dish numbers: 2 m diameter at 6 GHz (lambda = 0.05 m), physical area A = pi·1^2 = 3.14 m^2, aperture efficiency 55 percent: Ae = 1.73 m^2; G = 4pi·1.73/0.0025 = 8685 = 39.4 dBi. Check the consistency the other way: D = 8685/0.55 = 15,791 = 4pi·3.14·0.55... the same number by construction. The lambda^2 in the numerator is why receive apertures grow at low frequencies: the same dish captures 4x less power at twice the frequency... wait - G grows as f^2 while Ae stays constant: the DISH's Ae is fixed by its physical size; small antennas (dipole Ae = 1.64·lambda^2/4pi = 0.13·lambda^2) shrink with frequency.",
              "A full worked receive link ties 2.1 and 2.3: power density at the receiver S = EIRP/(4pi·r^2) (watts per square metre); received power P = S·Ae. At 10 km from a 100 W transmitter with 10 dBi antennas both ends at 2 GHz: EIRP = 100·10 = 1000 W; S = 1000/(4pi·10^8) = 7.96 x 10^-7 W/m^2; Ae for a 10 dBi antenna at lambda = 0.15 m: 0.15^2·10/4pi = 0.0179 m^2; Pr = 1.42 x 10^-8 W = -48.5 dBm. This is the Friis equation built from first principles - and section 5.5 repackages it in dB form for every link budget the exam poses.",
              "The exam's 14-marker: define D, G, efficiency, and Ae, derive G = 4pi·Ae/lambda^2, and work the dish numerical. The classic slips: confusing dBi and dBd (2.15 dB apart), forgetting efficiency between D and G, and treating Ae as the physical area (it is physical area x aperture efficiency, or lambda^2·G/4pi for any antenna). The half-wave dipole's own Ae = 0.13·lambda^2 (bigger than its wire silhouette by orders of magnitude) is the favourite conceptual follow-up - antennas interact with fields over areas much larger than their metal.",
            ],
            keyTerms: [
              { term: "Directivity D", definition: "4pi/omega_A: radiation intensity at peak over the isotropic average of the radiated power." },
              { term: "Gain G", definition: "eta_cd·D - directivity derated by radiation efficiency; quoted in dBi or dBd." },
              { term: "Effective aperture Ae", definition: "lambda^2·G/4pi: the capture area for incident power density S." },
              { term: "dBd", definition: "Gain referenced to a half-wave dipole: dBd = dBi - 2.15." },
              { term: "Aperture efficiency", definition: "Ae/physical area - 55 to 70 percent for practical parabolic dishes." },
            ],
            diagram: {
              kind: "compare",
              title: "Directivity, gain and effective area",
              caption: "Three views of one property: pattern squeeze, terminal honesty, capture area.",
              left: {
                heading: "Transmit-side numbers",
                items: [
                  "Directivity D = 4pi/omega_A - shape only",
                  "Efficiency eta_cd = Rr/(Rr + Rloss)",
                  "Gain G = eta_cd·D - what the transmitter sees",
                  "dBi vs dBd: subtract 2.15 to convert",
                ],
              },
              right: {
                heading: "Receive-side twin",
                items: [
                  "Effective aperture Ae = lambda^2·G/4pi",
                  "Received power P = S·Ae",
                  "Dish: Ae = physical area x 55-70 percent",
                  "Dipole: Ae = 0.13·lambda^2 - far larger than its wire",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "gain_area.py - the dish numbers, checked both ways",
              code: `import numpy as np

f = 6e9; lam = 3e8 / f                 # 0.05 m
D_phys = 2.0                            # dish diameter, m
A_phys = np.pi * (D_phys / 2)**2        # 3.14 m^2
eta_ap = 0.55

Ae = eta_ap * A_phys                    # 1.73 m^2 effective aperture
G = 4 * np.pi * Ae / lam**2             # 8685
print(Ae, G, 10 * np.log10(G))          # 1.73 m^2, 8685, 39.4 dBi

# consistency: directivity = gain / efficiency
D = G / eta_ap
print(10 * np.log10(D))                 # 42.1 dBi directivity

# half-wave dipole aperture at the same frequency
Ae_dip = lam**2 * 1.64 / (4 * np.pi)
print(Ae_dip)                           # 3.3e-4 m^2 = 0.13 lambda^2`,
            },
            bullets: [
              "Directivity: D = 4pi/omega_A = 4pi·Umax/P_rad - pure pattern shape.",
              "Gain: G = eta_cd·D; dBi - dBd = 2.15.",
              "Fundamental pair: G = 4pi·Ae/lambda^2; received power P = S·Ae.",
              "2 m dish at 6 GHz, 55 percent: Ae = 1.73 m^2, G = 8685 = 39.4 dBi.",
              "Aperture antennas: Ae = physical area x aperture efficiency.",
              "Small antennas: Ae scales as lambda^2 - the half-wave dipole captures 0.13·lambda^2.",
              "Same dish: Ae constant with frequency, G grows as f^2.",
            ],
            callout: {
              type: "tip",
              title: "Check dBi against dBd",
              body: "When a paper quotes 'gain 12 dB', decide the reference: if dBd, the dBi value is 14.15; if dBi, it is 12. One sentence - 'assuming dBi' - converts ambiguity into a stated assumption and protects the rest of the numerical. Examiners reward the stated assumption even when the paper was sloppy.",
            },
            examQuestions: [
              {
                q: "Define directivity, gain, efficiency and effective aperture of an antenna, and derive the relation G = 4pi·Ae/lambda^2.",
                marks: 14,
                outline: [
                  "D = 4pi/omega_A from the radiation intensity pattern",
                  "eta_cd = Rr/(Rr + Rloss); G = eta_cd·D",
                  "Receive: P = S·Ae for incident power density S",
                  "Matched polarization and load assumed",
                  "S from a lossless isotropic transmitter: S = Pt/(4pi·r^2)",
                  "Equate with the Friis form Pr = Pt·Gt·Gr·(lambda/4pi·r)^2",
                  "Hence Ae = lambda^2·G/4pi for any antenna",
                ],
              },
              {
                q: "Compute the gain and effective aperture of a 2 m parabolic dish at 6 GHz with 55 percent aperture efficiency, and state the directivity.",
                marks: 7,
                outline: [
                  "lambda = 0.05 m; physical area 3.14 m^2; Ae = 1.73 m^2",
                  "G = 4pi·1.73/0.0025 = 8685 = 39.4 dBi",
                  "Directivity D = G/0.55 = 15,791 = 42.1 dBi",
                  "Consistency: 4pi·3.14·0.55/0.0025 gives the same G",
                ],
              },
              {
                q: "Why does a half-wave dipole have an effective aperture of 0.13 lambda^2, far exceeding its physical wire area?",
                marks: 7,
                outline: [
                  "Ae = lambda^2·G/4pi with G = 1.64",
                  "The antenna interacts with the incident wave's field over a resonant region",
                  "Capture area is a property of the wave-antenna interaction, not the metal silhouette",
                  "Consequence: receive performance set by G and lambda, not wire size",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Pattern multiplication and the two-element array",
            body: [
              "Arrays steer beams by controlled phase. The master relation is PATTERN MULTIPLICATION: the total field of an array of identical, similarly oriented elements = element pattern x ARRAY FACTOR. The array factor carries all the geometry (positions and phases); the element pattern carries all the polarization and self-shape. Compute the AF once per geometry, multiply by the element, and the full pattern falls out - which is why the two-element case, though trivial, is the conceptual heart of Unit II.",
              "The two-element array factor: AF = 2·cos(psi/2) with psi = k·d·cos(theta) + beta, where d is spacing, beta the progressive feed phase, theta the angle from the array axis. Four canonical cases with d = lambda/2: (a) beta = 0 (in phase): maximum broadside, NULL along the axis - the two lambda/2 path-difference phases cancel the fields end-fire. (b) beta = pi (opposed): maximum end-fire, null broadside. (c) d = lambda/4, beta = -pi/2: a CARDIOID - maximum toward one end, null toward the other - the pattern of every direction-finding and broadcast two-tower array. Worked numbers for case (a) with half-wave elements: broadside gain = 2 x 1.64 = 3.28 (5.15 dBi) with HPBW narrowed from 78 to about 56 degrees in the array plane.",
              "The multiplication picture also explains PRACTICAL antennas. The Yagi (section 3.3) is exactly this: element pattern (a dipole's donut) x the AF of its driven-plus-parasitic structure. Two stacked bays of a TV antenna double the gain in the elevation plane while leaving azimuth coverage untouched. And the broadcast two-tower array of section 2.7 is case (c): spacing and phase chosen to put the null toward a co-channel city and the lobe toward the served area - the cardioid is an interference-management tool, not a curiosity.",
              "The exam's 14-marker: state the multiplication theorem, derive AF = 2cos(psi/2), and evaluate the four canonical cases with sketches. The 7-marker: compute the pattern of a given pair (spacing, phase) at a specific angle - substitute psi, evaluate the cosine, multiply by the element's sin(theta). The presentation discipline: sketch the AF, sketch the element pattern, sketch the product; three small drawings earn the structure marks that a single merged curve hides.",
            ],
            keyTerms: [
              { term: "Array factor AF", definition: "The geometric sum factor: two elements give AF = 2cos(psi/2), psi = k·d·cos(theta) + beta." },
              { term: "Pattern multiplication", definition: "Total field = element pattern x array factor for identical, co-oriented elements." },
              { term: "Broadside", definition: "Radiation perpendicular to the array axis: in-phase feeds (beta = 0)." },
              { term: "End-fire", definition: "Radiation along the array axis: progressive phase beta = -k·d." },
              { term: "Cardioid pair", definition: "d = lambda/4 with beta = -pi/2: one-directional pattern with an axial null." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the two-element phases",
              caption: "Spacing d and phase beta aim the pair.",
              start: "Two-element array, choose (d, beta)",
              branches: [
                { label: "d = lambda/2, beta = 0", outcome: "broadside lobe, axial null - stacked gain", good: true },
                { label: "d = lambda/2, beta = pi", outcome: "end-fire lobe, broadside null", good: true },
                { label: "d = lambda/4, beta = -pi/2", outcome: "cardioid: one-way pattern - broadcast and DF use", good: true },
                { label: "d = lambda, beta = 0", outcome: "grating lobes: broadside AND axis maxima - avoid", good: false },
                { label: "d >> lambda, arbitrary beta", outcome: "multi-lobed spider web - uncontrolled", good: false },
              ],
            },
            table: {
              caption: "The four canonical two-element cases.",
              headers: ["Spacing d", "Phase beta", "Pattern", "Use"],
              rows: [
                ["lambda/2", "0", "broadside max, axial null", "gain doubling, stacked bays"],
                ["lambda/2", "pi", "end-fire max, broadside null", "backward rejection"],
                ["lambda/4", "-pi/2", "cardioid with rear null", "broadcast arrays, direction finding"],
                ["lambda", "0", "broadside + end-fire maxima", "grating-lobe caution"],
              ],
            },
            bullets: [
              "Master theorem: total field = element pattern x array factor.",
              "Two-element AF = 2cos(psi/2), psi = k·d·cos(theta) + beta.",
              "lambda/2 spacing, in phase: broadside max (gain 5.15 dBi with half-wave elements), null on axis.",
              "lambda/4 spacing, -90 degrees phase: cardioid - the broadcast two-tower pattern.",
              "The null direction is where path-difference phase cancels the feed phase.",
              "Yagi and stacked-bay antennas are pattern multiplication in hardware.",
              "Sketch AF, element, product - three sketches, full structure marks.",
            ],
            callout: {
              type: "tip",
              title: "Compute psi first, always",
              body: "Every array numerical reduces to one substitution: psi = k·d·cos(theta) + beta. Write it, evaluate at the angle asked, then apply 2cos(psi/2). Doing the geometry bookkeeping in one labelled line prevents the sign errors that lose array marks.",
            },
            examQuestions: [
              {
                q: "State the principle of pattern multiplication and derive the array factor of a two-element array. Evaluate the pattern for d = lambda/2 with (a) equal phase and (b) 180 degrees phase difference.",
                marks: 14,
                outline: [
                  "Total field = element pattern x AF for identical co-oriented elements",
                  "AF = sum e^(j(k·d·cos(theta) + beta)) over 2 elements = 2cos(psi/2)",
                  "psi = k·d·cos(theta) + beta",
                  "(a) beta = 0: max broadside (cos 0 = 1), nulls at end-fire (psi = pi)",
                  "(b) beta = pi: max end-fire, null broadside",
                  "Multiply by the dipole sin(theta) element factor for the full pattern",
                  "Sketches: AF, element, product",
                ],
              },
              {
                q: "Design a cardioid two-element array: choose spacing and phases, and verify the null and maximum directions numerically.",
                marks: 7,
                outline: [
                  "Choose d = lambda/4, beta = -pi/2",
                  "Toward theta = 0 (end-fire): psi = k·lambda/4 - pi/2 = pi/2 - pi/2 = 0 -> maximum",
                  "Toward theta = 180: psi = -k·lambda/4 - pi/2 = -pi -> AF = 2cos(pi/2) = 0 -> null",
                  "Pattern: single lobe with a rear null - the cardioid",
                  "Used to null a co-channel interferer (broadcast arrays, 2.7)",
                ],
              },
              {
                q: "Two half-wave dipoles are stacked lambda/2 apart vertically and fed in phase. Estimate the gain and the elevation-plane beamwidth change.",
                marks: 7,
                outline: [
                  "Element D = 1.64; two broadside elements: D = 2 x 1.64 = 3.28",
                  "Gain 5.15 dBi over isotropic",
                  "Elevation HPBW narrows from 78 degrees to ~56 degrees",
                  "Azimuth pattern unchanged - still omnidirectional",
                  "Energy saved from the axial nulls piles into the broadside lobe",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "The uniform linear array: broadside and end-fire",
            body: [
              "N identical elements spaced d along a line with progressive phase beta give the uniform array factor: AF = sin(N·psi/2)/(N·sin(psi/2)) with psi = k·d·cos(theta) + beta - the product-to-sum limit of the two-element formula as N grows. The main beam points where all element phases align: psi = 0 gives the principal maximum, which is BROADSIDE (theta = 90 degrees from the axis) for beta = 0 and END-FIRE (theta = 0) for beta = -k·d. Grating lobes - duplicate main beams - appear when psi = ±2pi is also reachable, i.e. whenever d > lambda for broadside or d > lambda/2 for end-fire; the design rule is d <= lambda/2 to keep one beam.",
              "The beamwidth numbers are the design currency. For a broadside array of length L = N·d (in wavelengths L_lambda), HPBW ≈ 50.8/L_lambda degrees and the null-to-null width ≈ 114.6/L_lambda degrees (small-angle region). Worked design: N = 8 elements at d = lambda/2 gives L_lambda = 4: HPBW ≈ 12.7 degrees, FNBW ≈ 28.6 degrees, directivity ≈ N (ideal broadside pencil) = 9 dBi before element pattern and efficiency derate. Doubling N halves the beamwidth - arrays are the aperture-scaling machine, and the 1/L law is its handle.",
              "Phased-array scanning is the modern payoff: sweep beta from 0 to -k·d·(cos range) and the beam steers from broadside toward end-fire without moving metal. The scan law: sin(theta_scan) = -beta/(k·d). At d = lambda/2 the beam sweeps the full visible hemisphere; beyond it, grating lobes enter the visible region at large scan angles - the reason 5G massive-MIMO panels use ~half-wavelength spacing. A worked scan: the 8-element array steered to 45 degrees from broadside needs beta = -k·d·cos(45)... = -pi·cos(45 degrees)·... = -222 degrees - a progressive 27.8-degree phase step per element, realizable by digital phase shifters.",
              "The exam's 14-marker: derive AF = sin(N·psi/2)/(N·sin(psi/2)), locate nulls (psi = ±2·m·pi/N) and sidelobes, and compute HPBW/directivity for a given N, d, beta. The 7-markers: the broadside/end-fire condition, the grating-lobe condition, or a scanning phase calculation. Always state the element pattern multiplication at the end - the AF alone is not the antenna's pattern until multiplied by the element of section 2.4.",
            ],
            keyTerms: [
              { term: "Uniform array factor", definition: "AF = sin(N·psi/2)/(N·sin(psi/2)), psi = k·d·cos(theta) + beta." },
              { term: "Broadside / end-fire", definition: "Main beam perpendicular to / along the array axis: beta = 0 / beta = -k·d." },
              { term: "Grating lobes", definition: "Duplicate main beams when d > lambda (broadside) or d > lambda/2 (end-fire)." },
              { term: "Array beamwidth law", definition: "Broadside HPBW ≈ 50.8/L_lambda degrees for length L_lambda in wavelengths." },
              { term: "Scan law", definition: "sin(theta_scan) = -beta/(k·d): electronic steering by progressive phase." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Designing a linear array in five steps",
              caption: "From requirement to feed phases - the uniform array workflow.",
              stages: [
                { label: "Requirement", note: "target gain and beamwidth -> N and L" },
                { label: "Spacing", note: "d <= lambda/2 to suppress grating lobes" },
                { label: "Phase law", note: "beta = 0 broadside, -k·d end-fire, else scan angle" },
                { label: "Array factor", note: "sin(N·psi/2)/(N·sin(psi/2)); nulls at psi = 2m·pi/N" },
                { label: "Multiply", note: "by the element pattern - the real antenna" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "array_factor.py - the 8-element broadside beam",
              code: `import numpy as np

N, d_over_lam = 8, 0.5
theta = np.linspace(1e-6, np.pi - 1e-6, 2000)   # angle from array axis
psi = 2 * np.pi * d_over_lam * np.cos(theta)     # beta = 0 (broadside)
AF = np.abs(np.sin(N * psi / 2) / (N * np.sin(psi / 2)))

hpbw = np.degrees(theta[AF**2 >= 0.5][-1] - theta[AF**2 >= 0.5][0])
print(f"HPBW: {hpbw:.1f} deg")            # ~13 deg, matching 50.8/L_lambda

nulls = np.degrees(np.arccos([m / N for m in range(1, 4)]))
print("first nulls at theta =", nulls)    # ~73.6, 81.8, 85.7 deg from axis`,
            },
            bullets: [
              "AF = sin(N·psi/2)/(N·sin(psi/2)); psi = k·d·cos(theta) + beta.",
              "Broadside: beta = 0; end-fire: beta = -k·d; scan: sin(theta) = -beta/(k·d).",
              "Nulls at psi = ±2·m·pi/N - N - 1 nulls pattern the main beam.",
              "Grating lobes: d > lambda (broadside) or d > lambda/2 (end-fire) - keep d <= lambda/2.",
              "Worked: 8 elements at lambda/2 -> HPBW 12.7 degrees, FNBW 28.6 degrees, ~9 dBi.",
              "Beamwidth halves when the array doubles: HPBW ∝ 1/L.",
              "Multiply by the element pattern before quoting the antenna's beamwidth.",
            ],
            callout: {
              type: "exam",
              title: "The L_lambda shortcut",
              body: "Beamwidth questions resolve in one line: HPBW ≈ 50.8/L_lambda degrees (broadside, L_lambda = array length in wavelengths). For 8 elements at lambda/2: L = 4 lambda -> 12.7 degrees. Quote the formula, substitute, done - and cross-check with the AF plot if time allows.",
            },
            examQuestions: [
              {
                q: "Derive the array factor of an N-element uniform linear array, locate the nulls and principal maxima, and state the broadside and end-fire phase conditions.",
                marks: 14,
                outline: [
                  "Field = sum of e^(j·m·psi), m = 0..N-1; psi = k·d·cos(theta) + beta",
                  "Geometric series -> AF = sin(N·psi/2)/(N·sin(psi/2))",
                  "Principal maxima at psi = 0 (and ±2pi multiples = grating lobes)",
                  "Nulls at psi = ±2·m·pi/N, m = 1..N-1",
                  "Broadside: beta = 0 puts psi = 0 at theta = 90 degrees",
                  "End-fire: beta = -k·d puts psi = 0 at theta = 0",
                  "Grating lobes enter when d > lambda (broadside)",
                ],
              },
              {
                q: "An 8-element broadside array with lambda/2 spacing operates at 300 MHz. Compute the physical length, HPBW and estimated directivity.",
                marks: 7,
                outline: [
                  "lambda = 1 m; length L = 8 x 0.5 = 4 m (4 lambda)",
                  "HPBW ≈ 50.8/4 = 12.7 degrees",
                  "FNBW ≈ 114.6/4 = 28.6 degrees",
                  "Directivity ≈ N = 8 = 9 dBi (element derates apply)",
                  "Element multiplication: half-wave dipoles keep azimuth omnidirectional",
                ],
              },
              {
                q: "What are grating lobes, when do they occur, and what spacing prevents them in broadside and end-fire arrays?",
                marks: 7,
                outline: [
                  "Duplicate principal maxima at psi = ±2pi",
                  "Broadside: occurs when d > lambda",
                  "End-fire: occurs when d > lambda/2",
                  "Prevention: d <= lambda/2 keeps a single beam over the visible region",
                  "Scanning arrays must respect the condition at maximum scan angle",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "The binomial array",
            body: [
              "The uniform array's sidelobes (first sidelobe about -13 dB for large N) can be eliminated entirely by weighting the elements with binomial coefficients - the amplitudes of the expansion (1 + x)^(N-1): 1:1 for two elements, 1:2:1 for three, 1:3:3:1 for four, 1:4:6:4:1 for five. The resulting array factor is (1 + e^(j·psi))^(N-1) = (2cos(psi/2))^(N-1) - a single lobe with NO sidelobes at all, because the polynomial has no other magnitude maxima. The cost is beamwidth: the binomial main lobe is wider than the uniform array's for the same length, and the directivity is lower.",
              "The worked case: a four-element binomial with lambda/2 spacing carries amplitudes 1:3:3:1 - the centre pair radiates three times the end pair's power (9x in power terms: 9:1). Its broadside beam is roughly 1.6x wider than the uniform 4-element beam (HPBW about 26 degrees versus 17 degrees) but has zero sidelobes everywhere. Contrast the uniform 4-element: HPBW 17 degrees, first sidelobe about -13 dB - and it is this tradeoff table that examiners want: binomial = no sidelobes, wide beam, poor directivity for N >= 5; uniform = narrow beam, -13 dB sidelobes; Dolph-Chebyshev (named for completeness) interpolates: any chosen sidelobe level at the minimum beamwidth for that level.",
              "Why binomial arrays are impractical beyond a few elements: the required amplitude taper grows brutally. Five elements need 1:4:6:4:1 - the end element carries 1/6 of the centre current, wasting the outer real estate; eight elements need 1:7:21:35:35:21:7:1 - the outer elements contribute almost nothing but still cost feed network and space. The standard engineering statement: binomial arrays of fewer than 5 elements are practical; beyond that the directivity loss and the taper extreme hand the design to the Dolph-Chebyshev distribution, which achieves a specified sidelobe level (say -26 dB) with a gentler taper.",
              "The exam's 14-marker: derive the binomial array factor from the (1 + e^(j·psi))^(N-1) multiplication, show the zero-sidelobe property, and tabulate the amplitudes for N = 2 to 5. The 7-marker: design a 4-element binomial (amplitudes, spacing, phase) and compare its HPBW and sidelobes with the uniform array. One sentence completes either: the binomial trades directivity for purity - useful when sidelobes are intolerable (rejecting strong nearby interferers), pointless when pure gain is the goal.",
            ],
            keyTerms: [
              { term: "Binomial coefficients", definition: "Pascal's-row amplitudes 1:2:1, 1:3:3:1, ... - the (1 + x)^(N-1) expansion." },
              { term: "Zero sidelobes", definition: "Binomial AF = (2cos(psi/2))^(N-1): a single lobe, no sidelobe maxima." },
              { term: "Beamwidth cost", definition: "Binomial main lobe ~1.4-1.6x wider than uniform for the same length." },
              { term: "Taper impracticality", definition: "N >= 5 needs extreme end amplitudes - Dolph-Chebyshev takes over." },
              { term: "Dolph-Chebyshev", definition: "Minimum beamwidth for a SPECIFIED sidelobe level - the practical optimum." },
            ],
            diagram: {
              kind: "compare",
              title: "Binomial versus uniform weighting",
              caption: "Purity versus efficiency - the amplitude-taper tradeoff.",
              left: {
                heading: "Binomial (1:3:3:1 for N = 4)",
                items: [
                  "No sidelobes at all",
                  "HPBW ~26 degrees (N = 4, lambda/2 spacing)",
                  "Lower directivity",
                  "Practical only for N < 5",
                ],
              },
              right: {
                heading: "Uniform (1:1:1:1)",
                items: [
                  "First sidelobe ~-13 dB",
                  "HPBW ~17 degrees (same length)",
                  "Highest directivity for the length",
                  "Scales to any N with simple feeds",
                ],
              },
            },
            table: {
              caption: "Binomial amplitude rows and the taper problem.",
              headers: ["N elements", "Amplitudes", "Peak-to-end ratio", "Practicality"],
              rows: [
                ["2", "1:1", "1:1", "trivial"],
                ["3", "1:2:1", "1:2", "easy"],
                ["4", "1:3:3:1", "1:3", "practical"],
                ["5", "1:4:6:4:1", "1:6", "borderline"],
                ["8", "1:7:21:35:35:21:7:1", "1:35", "impractical - use Dolph-Chebyshev"],
              ],
            },
            bullets: [
              "Amplitudes from Pascal's triangle; AF = (2cos(psi/2))^(N-1).",
              "Zero sidelobes for any N - the binomial signature.",
              "Cost: wider main lobe and lower directivity than uniform.",
              "N = 4 worked case: 1:3:3:1, HPBW ~26 degrees vs uniform 17 degrees.",
              "Power taper is amplitude SQUARED: 9:1 for the N = 4 case.",
              "N >= 5: taper too extreme - Dolph-Chebyshev gives a chosen sidelobe level instead.",
              "Use binomial when sidelobes are intolerable, uniform when gain rules.",
            ],
            callout: {
              type: "exam",
              title: "Zero sidelobes has a price tag",
              body: "Every binomial answer must carry BOTH clauses: no sidelobes anywhere, and a wider main lobe with lower directivity. Stating only 'no sidelobes' reads as a half-fact - the examiner is testing whether you know the tradeoff exists.",
            },
            examQuestions: [
              {
                q: "Show that binomial amplitude weights eliminate the sidelobes of a linear array, derive the resulting array factor, and compare the beamwidth with a uniform array of the same length.",
                marks: 14,
                outline: [
                  "Weights = coefficients of (1 + x)^(N-1)",
                  "AF = sum am·e^(j·m·psi) = (1 + e^(j·psi))^(N-1)",
                  "= (2cos(psi/2))^(N-1)·e^(j(N-1)psi/2) - magnitude (2cos(psi/2))^(N-1)",
                  "Single lobe, no sidelobe maxima - zero sidelobes",
                  "N = 4: 1:3:3:1; HPBW ~26 degrees vs uniform ~17 degrees",
                  "Directivity lower; practical only for N < 5",
                ],
              },
              {
                q: "Design a four-element broadside binomial array at lambda/2 spacing: give the amplitudes, phases, and expected pattern features.",
                marks: 7,
                outline: [
                  "Amplitudes 1:3:3:1, all phases equal (broadside)",
                  "AF = (2cos(psi/2))^3 - single broadside lobe",
                  "No sidelobes; HPBW ~26 degrees",
                  "Power split 9:1 between centre and end elements",
                  "Feed: binomial power divider (2 x 3 dB plus taper)",
                ],
              },
              {
                q: "Why does the binomial design fail for large N, and what replaces it?",
                marks: 7,
                outline: [
                  "End-element amplitudes shrink as 1/C(N-1, (N-1)/2) - 1:35 at N = 8",
                  "Outer elements contribute negligible power but occupy space and feed cost",
                  "Directivity falls well below the uniform array's",
                  "Dolph-Chebyshev: specified sidelobe level with minimum beamwidth and gentler taper",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Travelling-wave and standing-wave antennas; the earth beneath",
            body: [
              "Standing-wave antennas (all of Unit I's wires) carry a sinusoidal current with reflection at the open end - their patterns are lobe families and their impedance is resonance-sensitive. TRAVELLING-WAVE antennas terminate the wire in its characteristic impedance (typically 600-800 ohms), so the current flows one way, I(z) = I0·e^(-j·k'·z) with k' slightly less than k, and the radiation collapses into a single forward lobe tilted toward the termination by the angle sin(2·theta) ≈ lambda/L (theta from the wire): a 2-lambda terminated wire beams about 15 degrees off its axis with no rear structure. This is the physics of the V antenna, the rhombic and the beverage (section 3.7) - and the feed-effect statement the syllabus asks for: terminating the antenna converts its multi-lobe standing-wave pattern into a unidirectional travelling-wave beam with flat SWR across a wide band.",
              "The earth beneath a vertical antenna is an active pattern element. Over PERFECT ground, image theory (section 1.6) strengthens low-angle radiation: the monopole's image doubles the vertical-plane directivity and pushes the main lobe toward the horizon - exactly what broadcast and MF services want. Over LOSSY earth the image is weaker and phase-shifted; the low-angle lobe tilts UPWARD and weakens, and at the Brewster-angle region the reflected wave can largely vanish (pseudo-Brewster angle takeoff). The engineering fixes: ground radial systems (120 radials of lambda/4 is the broadcast standard) restoring an effective ground plane, and elevated feeds with a screen.",
              "Broadcast arrays compose both ideas: two or more towers spaced and phased to shape the HORIZONTAL (azimuth) pattern. The worked case: two towers at lambda/2 spacing fed with 90-degree phase difference produce the cardioid azimuth pattern of section 2.4 - maximum toward the served community, a theoretical null toward the co-channel city. Three-tower arrays add a third lever: 1:2:1 amplitudes with tailored phases synthesize nulls at TWO bearings simultaneously - directional-antenna (DA) design, the regulated art of AM broadcast engineering. The design tool is exactly the array-factor algebra of sections 2.4-2.5 applied in azimuth.",
              "The exam's 14-marker: contrast standing-wave and travelling-wave antennas (current distribution, pattern, impedance, bandwidth) and explain the earth's effect on vertical patterns with image theory, including the lossy-ground corrections. The 7-markers: the cardioid two-tower calculation, the radial-system rationale, or the travelling-wave lobe angle sin(2·theta) = lambda/L. The picture to carry: everything above the horizon is decided by the wire and its phases; everything at the horizon is decided by the earth.",
            ],
            keyTerms: [
              { term: "Standing-wave antenna", definition: "Open-ended wire with sinusoidal current: multi-lobe pattern, resonant impedance." },
              { term: "Travelling-wave antenna", definition: "Terminated wire, one-way current: single tilted forward lobe, wideband flat SWR." },
              { term: "Lobe tilt", definition: "Terminated wire of length L beams at sin(2·theta) ≈ lambda/L." },
              { term: "Image strengthening", definition: "Perfect ground doubles vertical directivity and pushes lobes to the horizon." },
              { term: "Ground radial system", definition: "120 x lambda/4 radials - the broadcast standard restoring an effective ground." },
            ],
            diagram: {
              kind: "compare",
              title: "Standing wave versus travelling wave",
              caption: "Terminate the wire and the lobes collapse into one beam.",
              left: {
                heading: "Standing-wave (resonant) wire",
                items: [
                  "Sinusoidal current, open-end reflection",
                  "Multi-lobe, symmetric pattern",
                  "Impedance swings with frequency",
                  "Half-wave dipole, long resonant wires",
                ],
              },
              right: {
                heading: "Travelling-wave (terminated) wire",
                items: [
                  "One-way current into 600-800 ohms",
                  "Single forward lobe, tilted by lambda/L",
                  "SWR flat across a wide band",
                  "Beverage, V (terminated), rhombic",
                ],
              },
            },
            table: {
              caption: "What the earth does to a vertical pattern.",
              headers: ["Ground condition", "Image strength", "Low-angle lobe", "Fix"],
              rows: [
                ["Perfect conductor", "full mirror", "strongest, at the horizon", "ideal - unattainable"],
                ["Lossy earth", "weak, phase-shifted", "tilts upward, weakens", "120 radials of lambda/4"],
                ["Dry / rocky soil", "very weak", "pseudo-Brewster hole", "elevated feed + screen"],
                ["Sea water / wet soil", "near-perfect", "strong horizon lobe", "coastal MF stations exploit it"],
              ],
            },
            bullets: [
              "Terminating a wire converts standing-wave lobes into one travelling-wave beam.",
              "Travelling-wave lobe: sin(2·theta) ≈ lambda/L toward the load end.",
              "Standing-wave antennas stay resonant and narrowband; travelling-wave are wideband.",
              "Perfect ground: monopole directivity doubles (1.6) and lobes lower to the horizon.",
              "Lossy ground tilts and weakens low-angle radiation; Brewster-angle hole possible.",
              "Broadcast fix: 120 lambda/4 radials build an effective ground plane.",
              "Two-tower cardioid: lambda/2 spacing, 90-degree phase - null at a chosen bearing.",
            ],
            callout: {
              type: "exam",
              title: "The feed sentence",
              body: "The syllabus phrase 'effect of feed on standing-wave antennas' wants one specific statement: feeding at a current maximum gives low impedance and a broad lobe; feeding at a node gives huge impedance; terminating the wire removes the standing wave entirely. Write all three cases - they are the feed-effect question.",
            },
            examQuestions: [
              {
                q: "Compare standing-wave and travelling-wave antennas in current distribution, pattern, impedance behaviour and bandwidth, naming one antenna of each type.",
                marks: 14,
                outline: [
                  "Standing wave: sinusoidal current from open-end reflection; resonant",
                  "Pattern: symmetric lobe family (half-wave: one lobe; long wire: many)",
                  "Impedance swings with frequency - narrowband",
                  "Travelling wave: terminated (600-800 ohms), one-way current",
                  "Pattern: single lobe tilted by sin(2·theta) ≈ lambda/L",
                  "SWR flat across a wide band - wideband",
                  "Examples: half-wave dipole vs rhombic/beverage",
                ],
              },
              {
                q: "Explain the effect of the earth on the vertical radiation pattern of a monopole, for perfect and for lossy ground, and state the standard remedy.",
                marks: 7,
                outline: [
                  "Perfect ground: full image - directivity doubles, lobe at the horizon",
                  "Lossy ground: weaker, phase-shifted image",
                  "Low-angle lobe tilts upward and weakens; Brewster-angle hole possible",
                  "Remedy: 120 x lambda/4 ground radials (broadcast standard)",
                  "Effective ground plane sits below the physical surface",
                ],
              },
              {
                q: "Design a two-tower broadcast array that nulls a co-channel city 90 degrees west of the service area. Give spacing, phases and the resulting pattern.",
                marks: 7,
                outline: [
                  "Two towers spaced lambda/2 along the north-south line",
                  "Feed phases 90 degrees apart (cardioid case of 2.4)",
                  "Pattern: maximum toward the service bearing, theoretical null 180 degrees away",
                  "Azimuth cardioid - the directional-antenna principle",
                  "Three-tower 1:2:1 arrays synthesize two nulls for harder cases",
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
      title: "Types of Antennas",
      summary:
        "Unit III tours the antenna zoo: wideband wire antennas (folded dipole, biconical), loop antennas, the Yagi-Uda array, the log-periodic dipole array, the helical antenna, the turnstile and lens antennas, and the long-wire family of resonant and travelling-wave antennas - V antennas, rhombics and the beverage.",
      chapter: {
        number: "03",
        title: "The Antenna Zoo",
        intro:
          "Unit III covers the log periodic antenna, loop antenna, helical antenna, biconical antenna, folded dipole antenna, Yagi-Uda antenna, lens antenna, turnstile antenna, and long-wire antennas: resonant and travelling-wave antennas for different wavelengths, the V-antenna, rhombic antenna and beverage antenna.",
        inOneBreath:
          "The folded dipole quadruples feed resistance (292 ohms) and widens bandwidth; biconical horns buy broadband wire behaviour. Loops sense magnetically (null normal to the plane) and radiate poorly when small. The Yagi adds parasitic reflector and directors for 9-10 dBi at 0.4 lambda boom; the log-periodic's self-similar scaling (tau ~ 0.85) slides the active region with frequency for 10:1 bandwidth. Axial-mode helices (C = lambda, S = lambda/4) beam circular polarization with G = 15·N·(C/lambda)^2·(S/lambda). Turnstiles give circular polarization from crossed quadrature dipoles; lenses collimate like optics. Terminated long wires (V, rhombic, beverage) trade resonance for one-way wideband beams.",
        sections: [
          {
            number: "3.1",
            title: "Wideband wire antennas: the folded dipole and biconical antenna",
            body: [
              "The folded dipole is two half-wave conductors joined at their ends, fed at the midpoint of one. Two currents flow: the ANTIPHASE (transmission-line) mode, which radiates nothing, and the IN-PHASE (antenna) mode, which doubles the radiating wires. The consequence is the famous impedance transformation: with equal-diameter wires the feed resistance is 4 x 73 = 292 ohms - the twin-lead match for FM and TV (300-ohm systems). With unequal diameters the factor rises as (1 + d2/d1)^2, making the folded dipole an impedance-matching device as well as a radiator: a thicker parasite-side wire steps a Yagi's collapsed 25-ohm feed back up toward 50 ohms.",
              "Bandwidth improves for two compounding reasons: the folded structure stores less reactive energy per radiated watt (thicker effective conductor), and the 4:1 resistance puts the feed higher above the loss floor. Practical bandwidth for a TV-folded dipole: the whole 88-108 MHz FM band on one rod pair (30 percent), versus roughly 10 percent for a thin plain dipole. The biconical antenna attacks bandwidth from the geometry side: two cones fed at their apexes form, in the INFINITE-length limit, a transmission-line-like structure whose input impedance is CONSTANT with frequency - the theoretical frequency-independent antenna. Truncated to practical cone angles of 30-60 degrees and lengths of a quarter to half wavelength per cone, biconicals deliver 4:1 to 10:1 bandwidths for VHF/UHF omnidirectional service (the discone is its field variant with one cone replaced by a disc).",
              "Worked numbers across the family: folded dipole 292 ohms, matched to 75-ohm coax by a 4:1 balun (292/4 = 73 -> SWR ~1.0 with a 75-ohm... matched by the balun to ~73 ohms, then the coax's natural match); discone with 60-degree cones, 6:1 frequency span; biconical test antennas (EMC) covering 20-300 MHz in one pair. The exam's 14-marker: explain the folded dipole's two current modes and derive the 4x impedance, then state its bandwidth and matching uses. The 7-marker: the biconical's frequency-independence argument (waves travel outward without reflection below the truncation) and the discone relation.",
              "Presentation discipline: sketch both antennas with their feed points and dimensions labelled (folded: 0.5 lambda overall; biconical: cone angle, length per cone). The impedance derivation deserves the two-mode decomposition spelled out - antiphase loop current vs in-phase radiation current - because that decomposition is exactly what distinguishes a folded dipole from two plain dipoles side by side.",
            ],
            keyTerms: [
              { term: "Folded dipole", definition: "Two joined half-wave wires; input resistance 4 x 73 = 292 ohms for equal wires." },
              { term: "Transmission-line mode", definition: "The antiphase current loop between the folded wires - stores energy, radiates nothing." },
              { term: "Antenna mode", definition: "The in-phase current component on both wires - the radiator." },
              { term: "Biconical antenna", definition: "Two apex-fed cones; infinite version has frequency-independent impedance." },
              { term: "Discone", definition: "Cone-plus-disc broadband variant: 6:1 bandwidth, vertical polarization, NLoS VHF/UHF." },
            ],
            diagram: {
              kind: "compare",
              title: "Plain dipole versus folded dipole",
              caption: "One extra wire buys resistance, bandwidth and a matching handle.",
              left: {
                heading: "Plain half-wave dipole",
                items: [
                  "Feed resistance 73 ohms (+j42.5 untuned)",
                  "Bandwidth ~10 percent (thin wire)",
                  "Match: lambda/4 transformer or hairpin",
                  "The reference radiator",
                ],
              },
              right: {
                heading: "Folded dipole (equal wires)",
                items: [
                  "Feed resistance 292 ohms - 4:1 step",
                  "Bandwidth ~30 percent",
                  "Natural match for 300-ohm twin lead",
                  "Standard Yagi driven element",
                ],
              },
            },
            table: {
              caption: "Wideband wire antennas at a glance.",
              headers: ["Antenna", "Impedance", "Bandwidth", "Typical service"],
              rows: [
                ["Plain dipole (thin)", "73 ohms", "~10 percent", "reference, HF links"],
                ["Folded dipole (equal wires)", "292 ohms", "~30 percent", "FM/TV, Yagi driven element"],
                ["Folded (thick parasite wire)", "(1 + d2/d1)^2 x 73", "~30 percent", "Yagi impedance correction"],
                ["Biconical (30-60 degrees)", "200-400 ohms", "4:1 to 10:1", "EMC test, UHF omnidirectional"],
                ["Discone", "~50 ohms", "6:1+", "scanner and VHF base stations"],
              ],
            },
            bullets: [
              "Folded dipole: antiphase (line) mode + in-phase (antenna) mode.",
              "Equal wires: Rin = 4 x 73 = 292 ohms; thicker parasite wire raises the ratio as (1 + d2/d1)^2.",
              "292 ohms matches 300-ohm twin lead; a 4:1 balun brings it to 75 ohms.",
              "Bandwidth roughly triples versus a thin plain dipole.",
              "Yagi use: folded driven element restores impedance collapsed by the parasitics.",
              "Biconical: infinite cones are frequency-independent; truncated cones give 4-10:1 bandwidth.",
              "Discone: one cone + one disc, 50 ohms, scanner workhorse.",
            ],
            callout: {
              type: "exam",
              title: "Two modes, one derivation",
              body: "The 292-ohm derivation needs BOTH current modes named: the antiphase loop (transmission-line mode, no radiation) and the in-phase mode (radiation, shared between two wires). Write the mode decomposition first; the factor of 4 follows from the voltage halving and current doubling at the feed.",
            },
            examQuestions: [
              {
                q: "Explain the operation of the folded dipole antenna, derive its input resistance for equal wire diameters, and discuss its bandwidth and applications.",
                marks: 14,
                outline: [
                  "Two half-wave wires joined at the ends; feed on one wire",
                  "Antiphase transmission-line mode: circulating current, no radiation",
                  "In-phase antenna mode: both wires radiate; effective doubling",
                  "Feed: voltage halved, current doubled -> Rin = 4 x 73 = 292 ohms",
                  "Unequal wires: Rin = (1 + d2/d1)^2 x 73",
                  "Bandwidth ~30 percent vs ~10 percent plain",
                  "Uses: FM/TV twin-lead match; Yagi driven element; impedance correction",
                ],
              },
              {
                q: "Why does an infinite biconical antenna have a frequency-independent input impedance, and what changes when the cones are truncated?",
                marks: 7,
                outline: [
                  "Infinite cones guide the spherical TEM wave outward with no reflection",
                  "Characteristic impedance set only by the cone angle: constant vs frequency",
                  "Truncation reflects from the open ends - resonance appears",
                  "Angles 30-60 degrees and quarter-to-half-wave length keep the reflection small",
                  "Practical result: 4:1 to 10:1 bandwidth",
                ],
              },
              {
                q: "A Yagi's driven element measures 25 ohms because of the parasitics. How does a folded driven element with a thicker parasite-side wire restore the match?",
                marks: 7,
                outline: [
                  "Folded step: (1 + d2/d1)^2 x 25",
                  "Needed step: 50/25 = 2 -> (1 + d2/d1)^2 = 2 -> d2/d1 = 0.41 (thin folded arm)",
                  "Equal wires would give 4 x 25 = 100 ohms - also usable with SWR 2:1",
                  "Or use the classic 4:1 folded equal-wire element with a hairpin match",
                  "Point: the folded structure is an adjustable impedance transformer",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Loop antennas",
            body: [
              "A loop antenna is a coil of area A carrying current; its behaviour splits by electrical size. The SMALL loop (circumference C < lambda/10) is the magnetic dual of the short dipole: its far field is the rotated donut - maximum in the plane of the loop, NULL along the loop's axis (the direction perpendicular to its face). Pattern: figure-of-eight in planes containing the axis, circle in the loop plane. The radiation resistance collapses as the fourth power of size: Rr = 20·pi^2·(C/lambda)^4 ohms = 31,200·(A/lambda^2)^2 for a single turn. Worked numbers: a 1 m^2 single-turn loop at 1 MHz (lambda = 300 m): Rr = 31,200·(1/90,000)^2 = 3.9 MICRO-ohms - hopeless as a transmitter, universal as a receiver.",
              "Why small loops still rule reception: the received open-circuit voltage is Faraday's law - Voc = w·mu0·N·A·H (N turns), scaling with N·A and frequency, NOT with Rr. A ferrite-rod loop inside an AM radio (N ~ 100 turns on a high-permeability rod) captures microvolt-level fields with a Q of hundreds; the ferrite concentrates the flux, multiplying effective A by the rod's effective permeability (10-50x). Direction-finding exploits the null: rotate the loop until the signal nulls - the station lies along the loop's axis; two null readings fix the bearing (the classic Adcock/loop DF chain). Small loops are also the least-noisy receive antennas on HF, rejecting locally generated electric-field noise (they sense H, not E).",
              "Large loops (C ≈ lambda) resonate like folded dipoles: the one-wavelength loop has a broadside... its pattern gains a broadside component and Rr climbs to practical values (~100 ohms for the one-wavelength loop); multi-turn or loaded loops serve HF transmitting where horizontal space is short (the halo and magnetic-loop designs trade efficiency for compactness, with capacitor voltages of kilovolts - the warning that loops run HIGH Q). The exam's 14-marker: derive or state the small-loop pattern and Rr = 31,200·(A/lambda^2)^2, explain the receive-oriented role (Faraday voltage, ferrite rod), and sketch the DF null technique. The 7-marker: compute Rr or Voc for a given loop, or explain the axis-null direction-finding principle.",
              "Presentation discipline: sketch the loop with its axis marked, place the pattern null on the axis, and quote the fourth-power law with the 1 MHz worked number - the micro-ohm value is memorable and it justifies the receive-only conclusion in one line. The exam's 14-marker wants the pattern, the resistance formula and the receive rationale together; the 7-marker is usually the Faraday-voltage calculation or the DF-null technique. A loop answer without the axis null drawn reads as a dipole answer wearing a different name - the sketch is what proves you know which dual you are holding.",
            ],
            keyTerms: [
              { term: "Small loop", definition: "C < lambda/10: magnetic dipole, null along the axis, Rr = 31,200·(A/lambda^2)^2." },
              { term: "Faraday voltage", definition: "Voc = w·mu0·N·A·H - receive voltage scales with N, A and frequency." },
              { term: "Ferrite rod", definition: "High-permeability core multiplying effective loop area 10-50x; the AM radio antenna." },
              { term: "Axis null", definition: "Zero response along the loop's perpendicular axis - the direction-finding handle." },
              { term: "Magnetic sensing", definition: "Loops respond to H field: immunity to local electric-field noise on crowded HF bands." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the loop's electrical size",
              caption: "Same wire circle, three different jobs.",
              start: "Loop of circumference C",
              branches: [
                { label: "C << lambda", outcome: "magnetic receiver/DF: axis null, tiny Rr - receive only", good: true },
                { label: "C ≈ lambda", outcome: "resonant loop: practical Rr ~100 ohms, compact HF transmit", good: true },
                { label: "C >> lambda", outcome: "multi-lobe structure - rarely used as a loop", good: false },
                { label: "N turns on ferrite", outcome: "AM reception: effective area multiplied by rod permeability", good: true },
              ],
            },
            table: {
              caption: "Loop regimes with worked numbers.",
              headers: ["Loop", "Key numbers", "Role"],
              rows: [
                ["1 m^2, 1 turn, 1 MHz", "Rr = 3.9 micro-ohms", "receive: Voc from Faraday law"],
                ["Ferrite rod, N = 100, 1 MHz", "effective A x 10-50", "AM radio antenna"],
                ["1 m^2 loop, 100 MHz", "Rr ~ 385 ohms by the (A/lambda^2)^2 estimate", "borderline resonant use"],
                ["One-wavelength loop, any f", "Rr ~100 ohms, broadside gain ~3 dBi", "compact transmit / halo"],
              ],
            },
            bullets: [
              "Small loop: magnetic dipole - donut pattern with NULL on the loop axis.",
              "Rr = 20·pi^2·(C/lambda)^4 = 31,200·(A/lambda^2)^2 - fourth-power collapse.",
              "Worked: 1 m^2 at 1 MHz gives Rr = 3.9 micro-ohms - receive only.",
              "Receive voltage: Voc = w·mu0·N·A·H - turns and area, not Rr, set sensitivity.",
              "Ferrite rod: effective permeability multiplies N·A; AM radio standard.",
              "DF: rotate for the axis null; two bearings locate the transmitter.",
              "C ≈ lambda loops resonate: ~100 ohms, compact HF transmitting (high Q, kV capacitors).",
            ],
            callout: {
              type: "tip",
              title: "Null or maximum - which do you navigate by?",
              body: "Direction-finding uses the loop's NULL, not its maximum, because a null is sharp (degrees wide) while the maximum is broad. Write that sentence in DF answers: the deep, narrow axis null is the instrument; the broad maximum is not.",
            },
            examQuestions: [
              {
                q: "Derive or state the radiation resistance of a small loop antenna and explain why small loops are used as receiving rather than transmitting antennas.",
                marks: 14,
                outline: [
                  "Small loop = magnetic dipole; pattern null on the axis",
                  "Rr = 20·pi^2·(C/lambda)^4 = 31,200·(A/lambda^2)^2 (single turn)",
                  "Fourth-power dependence collapses Rr for C << lambda",
                  "Worked: 1 m^2 at 1 MHz -> 3.9 micro-ohms; efficiency hopeless",
                  "Receive voltage: Voc = w·mu0·N·A·H - independent of Rr",
                  "N turns and ferrite rods recover sensitivity",
                  "Low angle noise rejection: senses H, ignores local E-field noise",
                ],
              },
              {
                q: "Explain the use of loop antennas in radio direction finding, including the role of the pattern null and how a bearing is obtained.",
                marks: 7,
                outline: [
                  "Small-loop pattern: null along the axis perpendicular to the loop face",
                  "Rotate the loop; the signal minimum marks the bearing axis",
                  "Null sharpness (a few degrees) beats the broad maximum for accuracy",
                  "Ambiguity (two nulls) resolved by a sense antenna or second reading",
                  "Crossed loops + goniometer give instantaneous bearings",
                ],
              },
              {
                q: "An AM radio's ferrite loopstick has 100 turns on a rod of effective permeability 40, loop area 5 cm^2. Estimate its effective area.",
                marks: 7,
                outline: [
                  "Effective area ≈ N·A·mu_r = 100·5e-4·40 = 2.0 m^2",
                  "Equivalent to a 1.4 m square air-core loop",
                  "Explains microvolt AM reception from a matchstick-sized part",
                  "Q of the rod circuit adds further voltage gain at resonance",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "The Yagi-Uda antenna",
            body: [
              "The Yagi-Uda is a single driven dipole plus PARASITIC elements - wires that are not fed but re-radiate the driven element's field with controlled phase. Behind the feed, one REFLECTOR ~5 percent longer than the driven element captures the backward radiation and re-radiates it forward in phase, acting as a lossy mirror. Ahead, one to fifteen DIRECTORS ~5-10 percent shorter act as converging lenses, each extracting energy from the travelling wave and re-radiating it slightly ahead in phase. The result: a travelling wave of energy walks down the boom and launches as a single forward beam - pattern multiplication (section 2.4) realized in metal.",
              "The design numbers are a compact canon. Reflector: 0.15-0.25 lambda behind the driven element, ~5 percent longer. Directors: 0.15-0.25 lambda apart (0.2 lambda typical), each ~5-10 percent shorter than the previous (tapered). Gain: ~7 dBi for 4 elements, 9-10 dBi for 6 elements, 12-13 dBi for 10-12 elements - but saturating: each added director contributes ~1 dB then ~0.5 dB; boom length ~0.4 lambda captures most of the available gain. Input impedance collapses from 73 ohms to 25-35 ohms under parasitic loading - restored by the folded driven element (section 3.1) or a hairpin match. Front-to-back: 10-20 dB; bandwidth: 3-5 percent per Yagi (narrower with more directors).",
              "Worked 6-element UHF design: driven 0.47 lambda folded element, reflector 0.49 lambda at 0.2 lambda behind, four directors 0.44 to 0.41 lambda at 0.2 lambda spacing, boom 1.1 lambda: measured gain 9.8 dBi, F/B 15 dB, HPBW 46 degrees. The exam's 14-marker: explain the parasitic mechanism (reflector and director roles with the phase argument), sketch the layout with dimensions, and tabulate gain versus element count. The 7-marker: why the input impedance falls and how the folded element restores it, or the boom-length saturation argument.",
              "Presentation discipline: the phase argument IS the mechanism - write it explicitly ('the reflector's induced current re-radiates with the phase that reinforces the forward field and cancels the rear field'), because 'the reflector reflects' is the phrase examiners deduct for. The dimension sketch (lengths in lambda, spacings in lambda, boom total) is the second half of the answer.",
            ],
            keyTerms: [
              { term: "Parasitic element", definition: "Unfed conductor coupled to the driven element; re-radiates with controlled phase." },
              { term: "Reflector", definition: "~5 percent longer element 0.15-0.25 lambda behind the feed; reinforces forward, cancels rear." },
              { term: "Director", definition: "~5-10 percent shorter element ahead of the feed; walks the wave forward." },
              { term: "Boom-length saturation", definition: "Gain rises ~1 dB per early director, ~0.5 dB later; 0.4 lambda captures most of it." },
              { term: "Impedance collapse", definition: "Parasitics drop feed resistance to 25-35 ohms; folded element or hairpin restores it." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Energy's walk down the Yagi boom",
              caption: "Reflector bounces it forward; each director steps it forward again.",
              stages: [
                { label: "Driven element", note: "0.47 lambda folded; 25-50 ohms fed" },
                { label: "Reflector behind", note: "0.49 lambda at 0.2 lambda - re-radiates forward in phase" },
                { label: "Director 1", note: "0.44 lambda at 0.2 lambda - captures and advances the wave" },
                { label: "Directors 2..n", note: "tapered shorter; each adds ~0.5-1 dB" },
                { label: "Launch", note: "single forward beam, 9-13 dBi, F/B 10-20 dB" },
              ],
            },
            table: {
              caption: "Yagi-Uda design canon.",
              headers: ["Element", "Length", "Spacing", "Effect"],
              rows: [
                ["Reflector", "~0.49-0.50 lambda", "0.15-0.25 lambda behind", "rear cancellation, +2-3 dB"],
                ["Driven", "0.47 lambda (folded)", "-", "feed point, 25-73 ohms by folding"],
                ["Director 1", "0.43-0.44 lambda", "0.15-0.2 lambda ahead", "+1-2 dB, beam sharpening"],
                ["Directors 2..n", "tapered -5 percent each", "0.15-0.25 lambda", "+0.5-1 dB each, saturating"],
                ["6-element total", "boom ~1.1 lambda", "-", "9-10 dBi, HPBW ~46 degrees"],
              ],
            },
            bullets: [
              "Parasitics work by phase-controlled re-radiation, not reflection alone.",
              "Reflector: longer than driven, behind it; directors: shorter, ahead.",
              "Gain: 7 dBi (4 el) -> 10 dBi (6 el) -> 13 dBi (12 el); saturates with boom length.",
              "0.4 lambda of boom captures most of the achievable gain.",
              "Input impedance falls to 25-35 ohms; folded driven element or hairpin restores.",
              "Bandwidth 3-5 percent - a narrowband, high-gain structure.",
              "Front-to-back 10-20 dB - the rear rejection that stacks and phased pairs extend.",
            ],
            callout: {
              type: "warning",
              title: "Parasitics are phase devices",
              body: "Answer sheets that say 'the reflector reflects energy like a mirror' lose the mechanism mark. The correct statement: the parasitic element's INDUCED CURRENT re-radiates with a phase set by its length and spacing - longer-than-resonant looks inductive (acts as reflector), shorter looks capacitive (acts as director). Phase, not reflection.",
            },
            examQuestions: [
              {
                q: "Explain the principle of the Yagi-Uda antenna with the role of the reflector and directors, sketch a 6-element layout with dimensions, and tabulate its expected gain.",
                marks: 14,
                outline: [
                  "Driven half-wave dipole plus unfed parasitic elements",
                  "Reflector ~5 percent longer at 0.2 lambda behind: induced current re-radiates forward in phase, cancels rear",
                  "Directors 5-10 percent shorter at ~0.2 lambda: walk the wave forward",
                  "Sketch: boom, reflector, folded driven, 4 directors, dimensions in lambda",
                  "Gain: 9-10 dBi for 6 elements; saturates ~13 dBi at 12 elements",
                  "HPBW ~46 degrees; F/B 10-20 dB; bandwidth 3-5 percent",
                ],
              },
              {
                q: "Why does adding parasitic elements reduce the driven element's input impedance, and how is the feed match restored?",
                marks: 7,
                outline: [
                  "Parasitic induced currents add a reactive component in series effect",
                  "Mutual coupling loads the driven element: resistance falls 73 -> 25-35 ohms",
                  "Folded driven element: (1 + d2/d1)^2 step restores 50 ohms",
                  "Alternative: hairpin (lambda/4 shorted stub) match",
                ],
              },
              {
                q: "A Yagi measures 9.8 dBi with a 1.1-lambda boom. Estimate the gain if the boom doubles to 2.2 lambda with more directors.",
                marks: 7,
                outline: [
                  "Boom-length rule: ~2-3 dB per doubling near this size, saturating",
                  "2.2 lambda boom: ~12-12.5 dBi, not 19.6",
                  "Cause: each extra director adds progressively less phase advance",
                  "Practical Yagis plateau near 15-17 dBi",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "The log-periodic dipole array",
            body: [
              "The log-periodic dipole array (LPDA) is the frequency-independent antenna of wire practice: successive dipoles scale by the design ratio tau - each element 0.7-0.95 times the previous length AND spacing - so the structure looks the same (log-periodically) at every frequency scale. At any operating frequency, only the region where elements are near half-wave resonance - the ACTIVE REGION - radiates; the longer elements behind act as reflectors, the shorter ahead as directors. As frequency rises, the active region SLIDES toward the shorter (front) elements; as it falls, toward the rear. A crossing (transposed) feed line keeps the phase progression right, and the beam points off the apex - the small end.",
              "The design parameters are three: tau (element scaling, 0.8-0.95; higher = better performance, more elements), spacing factor sigma = (1 - tau)·cot(alpha)/4 (alpha = the wedge angle enclosing the element tips), and the resulting gain 7-12 dBi - modest but CONSTANT across the band. Bandwidth is set by the element count: N >= ln(fmax/fmin)/ln(1/tau). Worked design: cover 100-1000 MHz with tau = 0.85: N >= ln(10)/ln(1/0.85) = 2.303/0.1625 = 14.2 -> 15-16 elements; longest element ~lambda/2 at 100 MHz = 1.5 m, shortest ~0.16 m; input impedance ~200 ohms (crossed-feed LPDA) with SWR < 2:1 across the entire decade. Front-to-back 10-15 dB.",
              "The LPDA vs Yagi contrast is the exam's favourite comparison: Yagi = maximum gain from a fixed narrowband structure; LPDA = 10:1 bandwidth at 2-3 dB gain cost. Both are end-fire arrays of dipoles; the LPDA simply rotates WHICH dipoles form the active triplet as frequency changes. The physics worth quoting: the active region always contains one element near resonance (resistive, ~73 ohms), one longer (inductive, reflector) and one shorter (capacitive, director) - the Yagi's mechanism re-created continuously across frequencies.",
              "The exam's 14-marker: explain the self-similar design and the sliding active region, define tau and sigma, and run the element-count numerical. The 7-markers: the LPDA-vs-Yagi table (bandwidth, gain, impedance stability), or why the feed line is transposed (progressive phase reversal makes the longer elements act as reflectors). The sketch - trapezoidal envelope of element tips, apex, feed at the apex - is half the marks.",
            ],
            keyTerms: [
              { term: "Design ratio tau", definition: "Each element is tau times the previous in length AND spacing; 0.8-0.95 typical." },
              { term: "Active region", definition: "The 2-3 elements near half-wave resonance at the operating frequency - where radiation happens." },
              { term: "Sliding region", definition: "Active region moves toward the short elements as frequency rises." },
              { term: "Spacing factor sigma", definition: "sigma = (1 - tau)·cot(alpha)/4 - sets element spacing relative to length." },
              { term: "Element count rule", definition: "N >= ln(fmax/fmin)/ln(1/tau) - 15 elements for a decade at tau = 0.85." },
            ],
            diagram: {
              kind: "cycle",
              title: "The sliding active region",
              caption: "As frequency sweeps, a fresh triplet of elements takes the radiating role.",
              steps: [
                { label: "Low frequency", note: "active region near the long rear elements" },
                { label: "Frequency rises", note: "resonance point slides forward (shorter elements)" },
                { label: "Mid-band", note: "middle elements radiate; long ones reflect, short ones direct" },
                { label: "High frequency", note: "front (short) elements active; rear is a tapered reflector wall" },
                { label: "Pattern constant", note: "same beam, same gain, same impedance - log-periodic behaviour" },
                { label: "Wrap", note: "next lower octave re-enters at the rear - the cycle closes" },
              ],
            },
            table: {
              caption: "LPDA design parameters and the worked decade design.",
              headers: ["Parameter", "Symbol", "Worked value", "Effect"],
              rows: [
                ["Design ratio", "tau", "0.85", "higher tau: more elements, better gain"],
                ["Wedge angle", "alpha", "~15 degrees", "sets spacing factor sigma"],
                ["Spacing factor", "sigma", "~0.15", "sigma·tau compromise region"],
                ["Elements for 10:1", "N", "15-16", "N >= ln(10)/ln(1/tau)"],
                ["Longest element", "-", "1.5 m (100 MHz)", "lambda/2 at fmin"],
                ["Gain / impedance", "-", "7-12 dBi / ~200 ohms", "constant across the band"],
              ],
            },
            bullets: [
              "Self-similar: lengths and spacings scale by tau - log-periodic repetition.",
              "Active region: one resonant element + reflector + director, sliding with frequency.",
              "Worked: tau = 0.85 covers 100-1000 MHz with ~15 elements.",
              "Gain 7-12 dBi constant; impedance ~200 ohms stable; SWR < 2:1 over the decade.",
              "Feed line transposed (crossed) to set the phase progression for end-fire.",
              "LPDA vs Yagi: 10:1 bandwidth vs 2-3 dB extra gain - the design fork.",
              "Sketch the trapezoid envelope: the geometry IS the explanation.",
            ],
            callout: {
              type: "exam",
              title: "Name the active region",
              body: "LPDA answers hinge on the phrase 'active region slides with frequency'. Explain what radiates NOW (the near-resonant triplet) and what the rest does (tapered reflector wall behind, director chain ahead). Answers that describe a 'whole array radiating at once' lose the mechanism entirely.",
            },
            examQuestions: [
              {
                q: "Explain the principle of the log-periodic dipole array: the design ratio, the active region, and why the pattern is frequency-independent. Compute the element count for 100-1000 MHz at tau = 0.85.",
                marks: 14,
                outline: [
                  "Element lengths and spacings scale by tau - self-similar structure",
                  "At any f, elements near half-wave resonance form the active region",
                  "Longer elements behind: reflectors; shorter ahead: directors",
                  "Active region slides toward the apex as frequency rises",
                  "Log-periodic repetition -> constant gain, impedance, pattern",
                  "N >= ln(1000/100)/ln(1/0.85) = 14.2 -> 15-16 elements",
                  "Longest element 1.5 m; shortest ~0.16 m",
                ],
              },
              {
                q: "Compare the LPDA with the Yagi-Uda under gain, bandwidth, impedance stability and typical applications.",
                marks: 7,
                outline: [
                  "Yagi: 9-13 dBi, 3-5 percent bandwidth, moderate SWR stability",
                  "LPDA: 7-12 dBi, 10:1 bandwidth, SWR < 2:1 throughout",
                  "Yagi: fixed-frequency high gain (point-to-point at one band)",
                  "LPDA: monitoring, EMC, multi-band receive, spectrum work",
                  "Both are end-fire dipole arrays - the LPDA rotates its active triplet",
                ],
              },
              {
                q: "Why is the LPDA's feeder line transposed between successive elements?",
                marks: 7,
                outline: [
                  "Transposition reverses phase at each crossing",
                  "Produces the progressive phase making rear (longer) elements reflect",
                  "Without it the array radiates backward or splits lobes",
                  "The 180-degree flips plus spacing phases synthesize the end-fire beam",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "The helical antenna",
            body: [
              "A helix of circumference C, pitch S and N turns changes personality completely with its electrical circumference. NORMAL MODE (C << lambda): the helix acts as a shortened monopole/dipole with inductive loading - broadside radiation, linear or elliptical polarization, used as a compact whip replacement. AXIAL MODE (C ≈ lambda, pitch angle 12-14 degrees): the helix becomes an end-fire radiator beaming along its axis with CIRCULAR polarization - the mode that made the helix the standard antenna of satellite and space links, where polarization twist between ground and spacecraft is unavoidable.",
              "The axial-mode design formulas (Kraus) are the section's numerical core: gain G = 15·N·(C/lambda)^2·(S/lambda) (as a ratio), HPBW = 52/( (C/lambda)·sqrt(N·S/lambda) ) degrees, axial ratio AR = (2N + 1)/(2N) - near unity for N > 5 (good circularity). Worked design: N = 10 turns, C = lambda, S = lambda/4: G = 15·10·1·0.25 = 37.5 = 15.7 dBi; HPBW = 52/(1·sqrt(2.5)) = 33 degrees; input impedance ~140 ohms (resistive, flat across a 1.7:1 band where C = 0.75-1.33 lambda). The ground plane behind (0.5-0.75 lambda across) is part of the structure.",
              "The mode boundary is worth a worked contrast: the SAME wire wound at C = 0.1 lambda radiates broadside (normal mode, a loaded whip); rewound at C = lambda it fires end-fire with circular polarization - circumference, not turns, chooses the mode. Applications follow the mode: normal-mode helices in handheld radios (rubber-duck whips are normal-mode helices shortened by loading); axial-mode helices in satellite telemetry, interferometer feeds and polarimetry, where the 140-ohm impedance is matched by a tapped transformer or simply accepted with a 2:1 SWR for its other virtues.",
              "The exam's 14-marker: state both modes with the circumference criterion, derive/apply the Kraus gain and beamwidth formulas for a given N, C, S, and explain the circular polarization. The 7-markers: the mode-selection calculation (what happens at C = lambda vs C = 0.1 lambda), or the axial-ratio and impedance behaviour. The sketch - helix, ground plane, axis beam, handedness marked - completes the answer; circular polarization handedness (RHCP/LHCP) is a quotable detail examiners like to see defined.",
            ],
            keyTerms: [
              { term: "Normal mode", definition: "C << lambda: broadside radiation, compact loaded-whip behaviour." },
              { term: "Axial mode", definition: "C ≈ lambda, pitch 12-14 degrees: end-fire beam, circular polarization." },
              { term: "Kraus gain formula", definition: "G = 15·N·(C/lambda)^2·(S/lambda) for the axial-mode helix." },
              { term: "Helix beamwidth", definition: "HPBW = 52/( (C/lambda)·sqrt(N·S/lambda) ) degrees." },
              { term: "Axial ratio", definition: "AR = (2N + 1)/(2N): circularity improving with turn count." },
            ],
            diagram: {
              kind: "flow",
              title: "Designing an axial-mode helix",
              caption: "Circumference chooses the mode; turns buy gain; pitch sets the polarization quality.",
              steps: [
                { label: "Choose the mode", note: "C ≈ lambda for axial (end-fire, circular)" },
                { label: "Pitch", note: "S ≈ lambda/4 (12-14 degrees angle)" },
                { label: "Turns", note: "N from gain: G = 15·N·(C/lambda)^2·(S/lambda)" },
                { label: "Ground plane", note: "0.5-0.75 lambda behind the first turn" },
                { label: "Verify", note: "HPBW = 52/( (C/lambda)·sqrt(N·S/lambda) ); AR = (2N+1)/2N" },
              ],
            },
            table: {
              caption: "The worked axial-mode helix (N = 10, C = lambda, S = lambda/4).",
              headers: ["Quantity", "Formula", "Value"],
              rows: [
                ["Gain", "15·N·(C/lambda)^2·(S/lambda)", "37.5 = 15.7 dBi"],
                ["HPBW", "52/( (C/lambda)·sqrt(N·S/lambda) )", "33 degrees"],
                ["Axial ratio", "(2N + 1)/(2N)", "1.05 - near-perfect circular"],
                ["Input impedance", "empirical", "~140 ohms resistive"],
                ["Bandwidth", "C = 0.75-1.33 lambda", "1.7:1"],
              ],
            },
            bullets: [
              "Two modes, chosen by C: normal (broadside, C << lambda) vs axial (end-fire, C ≈ lambda).",
              "Axial mode: pitch 12-14 degrees, ground plane mandatory.",
              "Worked: N = 10, C = lambda, S = lambda/4 -> 15.7 dBi, 33-degree beam, AR 1.05.",
              "Circular polarization: the satellite-link virtue - immune to Faraday rotation and orientation.",
              "Input impedance ~140 ohms, flat over 1.7:1 bandwidth.",
              "Normal-mode use: rubber-duck whips (loaded shortened monopoles).",
              "Handedness (RHCP/LHCP) set by the winding direction - match it to the link.",
            ],
            callout: {
              type: "exam",
              title: "Circumference is the mode switch",
              body: "Helix questions are decided in one line: 'the same wire at C = 0.1 lambda radiates broadside in normal mode; rewound at C = lambda it fires end-fire in axial mode.' Write it first, then the Kraus numbers - everything else in the answer hangs on that switch.",
            },
            examQuestions: [
              {
                q: "Describe the normal and axial modes of the helical antenna and the criterion separating them. Apply the Kraus formulas for N = 10, C = lambda, S = lambda/4.",
                marks: 14,
                outline: [
                  "Normal mode (C << lambda): broadside, loaded-whip behaviour",
                  "Axial mode (C ≈ lambda, pitch 12-14 degrees): end-fire, circular polarization",
                  "Ground plane 0.5-0.75 lambda behind",
                  "G = 15·10·1·0.25 = 37.5 = 15.7 dBi",
                  "HPBW = 52/sqrt(2.5) = 33 degrees",
                  "Axial ratio (2N+1)/2N = 1.05 - excellent circularity",
                  "Impedance ~140 ohms resistive",
                ],
              },
              {
                q: "Why do satellite ground stations favour axial-mode helices and dishes with circular-polarized feeds?",
                marks: 7,
                outline: [
                  "Ionospheric Faraday rotation twists linear polarization unpredictably",
                  "Spacecraft attitude changes rotate the linear polarization frame",
                  "Circular polarization survives both - cross-pol loss stays 3 dB not 30",
                  "Helix: natural circular polarization with modest gain and wide bandwidth",
                ],
              },
              {
                q: "A rubber-duck whip on a handheld radio is a normal-mode helix. Explain its operation and its limitations.",
                marks: 7,
                outline: [
                  "Helical winding loads the wire: resonant at C << lambda",
                  "Acts as a shortened monopole with inductive loading",
                  "Compact but low efficiency (Rr tiny, losses significant)",
                  "Broadside donut pattern; linear-to-elliptical polarization off-axis",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "The turnstile and lens antennas",
            body: [
              "The TURNSTILE is two half-wave dipoles crossed at 90 degrees and fed in phase QUADRATURE (90-degree difference, via a hybrid). Where one dipole's field peaks, the other's crosses zero - the sum rotates: circular polarization in the axis direction, with a near-omnidirectional sum pattern in the plane of the dipoles. Feeding both in phase instead (0 degrees) gives linear polarization along the bisector; reversing the quadrature sign flips the circular handedness. Applications: TV broadcast towers (turnstile + reflector screen for pancake azimuth patterns with null fill), satellite beacons, and any polarization-diversity transmit point.",
              "The LENS antenna solves the horn's shortest-focusing problem optically: a shaped dielectric (or metal-plate) lens placed before a primary feed converts the feed's spherical wavefront into a plane wavefront, exactly as an optical lens collimates. Metal-plate lenses exploit waveguide dispersion - the phase velocity between parallel plates EXCEEDS c, so plate lenses must be CONVEX (opposite curvature to a dielectric lens) to delay the centre... advance the edges correctly. Zoning (stepped lens) removes excess thickness at the cost of narrowband behaviour. Applications: microwave links where a horn would need excessive length; broad-wall multi-feed apertures; low-loss dielectric lenses (polystyrene, Teflon) at centimetre wavelengths.",
              "The worked contrast of the two: the turnstile is a POLARIZATION device (linear dipoles -> circular field) with modest gain; the lens is an APERTURE device (point feed -> plane wave, gain by 4pi·Ae/lambda^2) with no polarization role. Both appear in 'types of antennas' lists and both earn 7-mark short notes: turnstile (sketch + 90-degree hybrid + polarization statement + one application), lens (collimation argument + metal-plate dispersion twist + zoning + one application). A favourite numerical: the metal-plate lens's phase velocity v_p = c/sqrt(1 - (lambda/2b)^2) between plates of separation b - compute it for b = lambda/1.3 and see the >c velocity that forces the convex shape.",
              "The exam's presentation: for the turnstile, sketch the crossed dipoles and the hybrid, state the quadrature condition and the resulting polarization in the axis direction, and add the handedness remark - reversing the hybrid's sign flips RHCP to LHCP; for the lens, sketch feed-lens-aperture and state the phase-correction role with the metal-plate caveat and the convex-shape consequence. Two short notes, each with its sketch and one application line, are a reliable 14 combined. The common slip is describing the turnstile without the 90-degree condition - 'crossed dipoles' alone radiate linear polarization along a bisector, not the circular field the question asks for.",
            ],
            keyTerms: [
              { term: "Turnstile antenna", definition: "Two crossed dipoles in 90-degree quadrature: circular polarization on axis." },
              { term: "Quadrature feed", definition: "90-degree hybrid: the phase relation producing circular polarization." },
              { term: "Lens antenna", definition: "Dielectric or metal-plate lens collimating a feed's spherical wave into a plane wave." },
              { term: "Metal-plate dispersion", definition: "Phase velocity between plates exceeds c - plate lenses curve opposite to dielectric ones." },
              { term: "Zoning", definition: "Stepped lens thickness removing excess material; narrowband consequence." },
            ],
            diagram: {
              kind: "matrix",
              title: "Picking the antenna type by requirement",
              caption: "The zoo, organized by what the link needs.",
              axes: { x: "Bandwidth needed (narrow -> wide)", y: "Gain needed (low -> high)" },
              quadrants: [
                { label: "Dipoles / folded dipole", note: "low gain, narrow-medium band - the default wire" },
                { label: "Yagi / dish", note: "high gain, narrow band - fixed links and receive" },
                { label: "Turnstile / loops", note: "low-medium gain; turnstile adds circular polarization" },
                { label: "LPDA / biconical / discone", note: "wideband service at moderate gain" },
              ],
            },
            table: {
              caption: "Turnstile and lens short notes.",
              headers: ["Aspect", "Turnstile", "Lens antenna"],
              rows: [
                ["Structure", "two crossed dipoles + 90-degree hybrid", "shaped dielectric or metal plates before a feed"],
                ["Function", "linear -> circular polarization", "spherical -> plane wavefront (collimation)"],
                ["Gain", "modest (dipole-like)", "aperture gain 4pi·Ae/lambda^2"],
                ["Key detail", "quadrature sign sets RHCP/LHCP", "plate lens is convex (v_p > c)"],
                ["Applications", "TV broadcast, satellite beacons", "microwave links, horn shortening"],
              ],
            },
            bullets: [
              "Turnstile: crossed dipoles, 90-degree hybrid, circular on axis, handedness by feed sign.",
              "In-phase feed instead: linear polarization along the bisector.",
              "TV use: turnstile over a reflector screen for azimuth pancake patterns.",
              "Lens collimates a primary feed: gain by aperture, no long horn needed.",
              "Metal-plate lens: v_p = c/sqrt(1 - (lambda/2b)^2) > c - convex shape required.",
              "Zoning steps thickness but narrows bandwidth.",
              "Dielectric lenses (polystyrene/Teflon) at centimetre waves: low loss.",
            ],
            callout: {
              type: "tip",
              title: "The dispersion twist",
              body: "The metal-plate lens is the classic 'gotcha' of lens questions: because the parallel-plate phase velocity EXCEEDS c, its curvature is opposite to a glass lens (convex, not concave). State v_p = c/sqrt(1 - (lambda/2b)^2) explicitly - the formula is the mark.",
            },
            examQuestions: [
              {
                q: "Explain the turnstile antenna: structure, feed arrangement, and the polarization produced. State one broadcast and one satellite application.",
                marks: 7,
                outline: [
                  "Two half-wave dipoles crossed at 90 degrees",
                  "Fed in quadrature (90-degree hybrid)",
                  "Field sum rotates: circular polarization along the axis",
                  "In-phase feed would give linear polarization on the bisector",
                  "Quadrature sign sets RHCP or LHCP",
                  "TV broadcast turnstiles with null fill; satellite beacons",
                ],
              },
              {
                q: "Explain the principle of the lens antenna and the special behaviour of the metal-plate lens. What is zoning?",
                marks: 7,
                outline: [
                  "Shaped lens converts the feed's spherical wavefront to plane",
                  "Path lengths equalized: centre slowed (dielectric) or edges advanced (plates)",
                  "Parallel-plate phase velocity v_p = c/sqrt(1 - (lambda/2b)^2) > c",
                  "Hence plate lenses curve CONVEX - opposite to dielectric",
                  "Zoning: stepped thickness, lighter and thinner, but narrower bandwidth",
                ],
              },
              {
                q: "Compute the phase velocity between parallel plates separated by b = 1.3 lambda/2, and state the lens-design consequence.",
                marks: 7,
                outline: [
                  "v_p = c/sqrt(1 - (lambda/2b)^2) with lambda/2b = 1/1.3 = 0.769",
                  "sqrt(1 - 0.592) = 0.639",
                  "v_p = c/0.639 = 1.57 c",
                  "Above-c velocity: plate sections advance phase - the lens is convex",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Long-wire antennas: the V, rhombic and beverage",
            body: [
              "Long wires (L > lambda) split into two families by their termination, exactly as section 2.7 framed it. RESONANT (open-ended) long wires carry standing waves and radiate lobe families at the angles sin(theta_m) ≈ m·lambda/L... more precisely the lobes lie where the phase from successive half-wave sections aligns, tilting CLOSER to the wire as L grows: a 2-lambda wire's major lobes sit about 30 degrees off axis, a 5-lambda wire's at about 16 degrees. Feed impedance swings wildly with frequency. TERMINATED (travelling-wave) long wires carry one-way current and fire a single tilted lobe with sin(2·theta) ≈ lambda/L - the flat-SWR, one-way beam.",
              "The V ANTENNA composes two long wires at an included angle equal to twice the single-wire lobe tilt: each wire's main lobe fires along the bisector and the two add - doubling the gain and cancelling the counter-lobes. Terminated V antennas (each leg 2-8 lambda) give 8-12 dBi with wide bandwidth. The RHOMBIC is two V antennas in series forming a diamond, terminated in 600-800 ohms at the far vertex: all four wires' lobes add toward the far end, giving 7-12 dBi over the HF bands with 2:1-or-better SWR across a whole octave - the classic fixed point-to-point HF circuit antenna (transoceanic circuits ran rhombics for decades). Design numbers: leg lengths 2-4 lambda, tilt angle ~15-25 degrees chosen from the leg-length lobe rule, height 0.5-1 lambda above ground.",
              "The BEVERAGE (wave) antenna is the receiving specialist: a single horizontal wire 1-3 lambda long, a few metres above lossy ground, terminated at the far end. It receives vertically polarized ground-wave and low-angle sky-wave signals with exceptional signal-to-noise because its small vertical extent picks up little local static - the standard receiving antenna of LF/MF/HF broadcast listening and amateur DX. Its twin facts for the exam: terminated (travelling-wave, wideband, unidirectional) and LOW (near lossy ground, efficient as a receiver, terrible as a transmitter).",
              "The exam's 14-marker: contrast resonant and travelling-wave long-wire behaviour (lobe rule, impedance, bandwidth) and explain how the V and rhombic combine wire lobes into beams - with the sketch of the rhombic and its termination. The 7-markers: the lobe-angle calculation for a given L, or the beverage's receiving rationale. The sketches carry the marks: V with bisector beam, rhombic with all four lobes converging at the termination, beverage with its low wire and ground-wave arrow.",
            ],
            keyTerms: [
              { term: "Resonant long wire", definition: "Open-ended, standing wave, lobes at sin(theta) ≈ m·lambda/2L, wild impedance." },
              { term: "Terminated long wire", definition: "600-800 ohm load, travelling wave, single lobe at sin(2·theta) ≈ lambda/L." },
              { term: "V antenna", definition: "Two long wires at twice the lobe angle; lobes add along the bisector; 8-12 dBi." },
              { term: "Rhombic", definition: "Two V antennas in series, terminated: 7-12 dBi wideband HF point-to-point." },
              { term: "Beverage antenna", definition: "Low terminated wire 1-3 lambda: high-S/N receiving of vertical polarization." },
            ],
            diagram: {
              kind: "compare",
              title: "Resonant versus terminated long wires",
              caption: "The termination decides everything downstream.",
              left: {
                heading: "Resonant (open end)",
                items: [
                  "Standing wave: lobes at sin(theta) ≈ m·lambda/2L",
                  "2-lambda wire: lobes ~30 degrees off axis",
                  "Impedance swings wildly - narrowband",
                  "Use: multi-element wire arrays, harmonics",
                ],
              },
              right: {
                heading: "Terminated (travelling wave)",
                items: [
                  "Single lobe at sin(2·theta) ≈ lambda/L",
                  "2-lambda wire: ~15 degrees tilt",
                  "SWR flat - wideband, unidirectional",
                  "Use: V, rhombic, beverage",
                ],
              },
            },
            table: {
              caption: "The long-wire family.",
              headers: ["Antenna", "Length / geometry", "Gain", "Termination", "Service"],
              rows: [
                ["Single long wire", "2-8 lambda", "5-8 dBi (tilted lobe)", "open or 600 ohms", "experimental, temporary"],
                ["V antenna", "2 legs, 2-8 lambda, angle 2·theta", "8-12 dBi", "terminated", "fixed HF links"],
                ["Rhombic", "4 legs, 2-4 lambda, tilt 15-25 degrees", "7-12 dBi", "600-800 ohms", "transoceanic HF circuits"],
                ["Beverage", "1-3 lambda, 2-5 m high", "receive: high S/N", "terminated", "LF/MF/HF receiving"],
              ],
            },
            bullets: [
              "Resonant long wire: lobes tilt toward the wire as L grows (sin(theta) ≈ m·lambda/2L).",
              "Terminated long wire: single lobe, sin(2·theta) ≈ lambda/L, flat SWR.",
              "V antenna: legs at twice the single-wire lobe angle; lobes add on the bisector.",
              "Rhombic: two Vs in series, 600-800 ohm termination, 7-12 dBi across HF octaves.",
              "Design numbers: legs 2-4 lambda, tilt 15-25 degrees, height 0.5-1 lambda.",
              "Beverage: 1-3 lambda wire metres above lossy ground - the HF receiving workhorse.",
              "All the terminated family are wideband and unidirectional - travelling-wave physics.",
            ],
            callout: {
              type: "exam",
              title: "Sketch the rhombic with its load",
              body: "Rhombic answers without the termination resistor drawn are incomplete - the termination is what makes it a rhombic rather than a diamond of resonant wires. Draw the diamond, the far-end load (600-800 ohms), and the four converging lobes; then quote the gain and bandwidth.",
            },
            examQuestions: [
              {
                q: "Explain the radiation from resonant and terminated long-wire antennas for different wire lengths, and show how the V antenna combines two wires into one beam.",
                marks: 14,
                outline: [
                  "Resonant: standing wave; lobes at sin(theta) ≈ m·lambda/2L; tilt decreases with L",
                  "2-lambda wire: lobes ~30 degrees; 5-lambda: ~16 degrees",
                  "Impedance resonant, narrowband",
                  "Terminated: travelling wave; single lobe at sin(2·theta) ≈ lambda/L",
                  "V: two wires angled at twice the single-wire tilt",
                  "Lobes add along the bisector; counter-lobes cancel; 8-12 dBi",
                  "Terminated V: wideband and unidirectional",
                ],
              },
              {
                q: "Describe the rhombic antenna: geometry, termination, gain and why it dominated fixed HF point-to-point circuits.",
                marks: 7,
                outline: [
                  "Two V antennas in series forming a diamond",
                  "Terminated 600-800 ohms at the far vertex - travelling wave",
                  "All four wire lobes converge toward the termination",
                  "7-12 dBi, 2:1 SWR across an octave - wideband HF",
                  "Legs 2-4 lambda, tilt 15-25 degrees, height 0.5-1 lambda",
                ],
              },
              {
                q: "Why is the beverage antenna excellent for receiving but poor for transmitting?",
                marks: 7,
                outline: [
                  "Receiving: low over lossy ground senses vertical-polarization ground/sky waves",
                  "Small vertical extent: little local static and man-made noise pickup",
                  "Terminated: wideband, unidirectional - high S/N",
                  "Transmitting: strong ground losses at low height; tiny radiation resistance share",
                  "Efficiency would be a few percent - heat, not signal",
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
      title: "Aperture and Slot Antennas",
      summary:
        "Unit IV opens the antenna from a wire to a surface: radiation from rectangular apertures, uniform versus tapered illumination, horn antennas, parabolic reflectors, aperture blockage and the structures that feed apertures, slot antennas through Babinet's principle, microstrip patch antennas with their radiation mechanism and applications, and the numerical tools that analyse them.",
      chapter: {
        number: "04",
        title: "Apertures, Horns and Patches",
        intro:
          "Unit IV covers radiation from rectangular apertures, uniform and tapered aperture illumination, horn antennas, reflector antennas, aperture blockage, feeding structures, slot antennas, microstrip antennas with their radiation mechanism and applications, and numerical tools for antenna analysis.",
        inOneBreath:
          "An aperture radiates as the Fourier transform of its field distribution: uniform illumination of width a gives a sinc beam of HPBW 51·lambda/a degrees and D = 4pi·A/lambda^2; tapering trades beamwidth for sidelobes (uniform -13 dB, cosine -23 dB at 1.36x the width). Horns flare a waveguide to aperture gain (G = 4pi·0.51·a·b/lambda^2); parabolic reflectors focus a primary feed to 39.4 dBi for a 2 m dish at 6 GHz, with blockage and offset-feed tradeoffs. Babinet makes a slot the magnetic twin of its complementary dipole. Patches resonate at L = lambda/(2·sqrt(epsilon_eff)) - 30 mm at 2.4 GHz on FR-4 - and MoM/FEM/FDTD solvers verify everything the formulas approximate.",
        sections: [
          {
            number: "4.1",
            title: "Radiation from rectangular apertures",
            body: [
              "An aperture antenna is any opening in a conducting screen with a known field across it - the mouth of a horn, a reflector's projected area, a slot. The analysis is one step: the far field is the two-dimensional Fourier transform of the aperture field. For a rectangular aperture of width a (x-direction) and height b (y-direction) carrying UNIFORM field E0: the radiation pattern is the sinc product F(theta) = sin(u)/u with u = (pi·a/lambda)·sin(theta) in the x-cut - identical mathematics to the uniform array factor of section 2.5 with infinitesimal spacing. The pattern's shape comes entirely from the transform; the aperture's job is to be the distribution.",
              "The closed-form numbers follow. Uniform rectangular aperture: HPBW = 0.886·lambda/a radians = 50.8·(lambda/a) degrees (in the a-cut), first nulls at sin(theta) = ±lambda/a, first sidelobe -13.3 dB, and directivity D = 4pi·A/lambda^2 with A = a·b - the aperture version of the gain formula of section 2.3 (aperture efficiency 100 percent for a truly uniform field; real apertures derate). Worked design: a 3 lambda x 3 lambda uniform aperture at 10 GHz (a = 0.9 m): HPBW = 50.8/3 = 16.9 degrees, first sidelobe -13.3 dB, D = 4pi·9 = 113 = 20.5 dBi. Doubling a halves the beamwidth and adds 3 dB - aperture scaling, the optical counterpart of array scaling.",
              "The Fourier view pays for itself immediately: any distribution question becomes a transform question. A uniform distribution transforms to a sinc (high sidelobes, narrow beam); any taper (section 4.2) transforms to a smoother function with lower sidelobes and a wider main lobe; and the -13.3 dB first sidelobe of the rectangle is the same Dirichlet-kernel physics as the rectangular window's spectrum in DSP - two courses, one transform. This is why aperture theory is the bridge between antenna engineering and signal processing, and why the exam asks the connection explicitly.",
              "The exam's 14-marker: state the aperture-Fourier relation, derive the uniform-rectangle pattern and its HPBW/nulls/sidelobe numbers, and compute D for a given aperture. The 7-marker: compute the beamwidth or directivity of a given aperture at a given frequency, or explain the sinc-transform statement with the array-factor parallel. Sketch the sinc pattern with the null spacing lambda/a marked in sine space.",
            ],
            keyTerms: [
              { term: "Aperture field", definition: "The E-field distribution across the opening - the data whose Fourier transform is the pattern." },
              { term: "Uniform rectangular aperture", definition: "Constant E0 over a x b: sinc pattern, HPBW = 50.8·lambda/a degrees." },
              { term: "First null angle", definition: "sin(theta) = ±lambda/a for the uniform rectangle - the sinc spacing." },
              { term: "Aperture directivity", definition: "D = 4pi·A/lambda^2 for uniform illumination (100 percent efficiency)." },
              { term: "Fourier relation", definition: "Far-field pattern = 2D Fourier transform of the aperture distribution." },
            ],
            diagram: {
              kind: "flow",
              title: "Aperture analysis as a transform",
              caption: "Field distribution -> Fourier transform -> radiation pattern.",
              steps: [
                { label: "Aperture", note: "a x b opening with field E(x, y)" },
                { label: "Distribution", note: "uniform here; tapered in 4.2" },
                { label: "Fourier transform", note: "u = (pi·a/lambda)·sin(theta) variables" },
                { label: "Pattern", note: "sin(u)/u sinc for the uniform rectangle" },
                { label: "Numbers", note: "HPBW 50.8·lambda/a; first null lambda/a; sidelobe -13.3 dB" },
              ],
            },
            table: {
              caption: "Uniform rectangular aperture: worked 10 GHz designs.",
              headers: ["Aperture (wavelengths)", "Physical size at 10 GHz", "HPBW", "First sidelobe", "Directivity"],
              rows: [
                ["1 x 1", "3 cm x 3 cm", "50.8 degrees", "-13.3 dB", "4pi = 11 dBi"],
                ["3 x 3", "9 cm x 9 cm", "16.9 degrees", "-13.3 dB", "36pi = 20.5 dBi"],
                ["3 x 10", "9 cm x 30 cm", "16.9 / 5.1 degrees", "-13.3 dB", "120pi = 25.8 dBi"],
                ["10 x 10", "30 cm x 30 cm", "5.1 degrees", "-13.3 dB", "400pi = 31 dBi"],
              ],
            },
            bullets: [
              "Far field = Fourier transform of the aperture distribution - the master statement.",
              "Uniform rectangle: F = sin(u)/u, u = (pi·a/lambda)·sin(theta).",
              "HPBW = 0.886·lambda/a rad = 50.8·lambda/a degrees; first nulls at lambda/a.",
              "First sidelobe -13.3 dB - the same Dirichlet kernel as DSP's rectangular window.",
              "Directivity D = 4pi·A/lambda^2 for uniform illumination.",
              "Worked: 3-lambda square aperture -> 16.9 degrees, 20.5 dBi.",
              "Aperture doubling: beamwidth halves, gain +3 dB.",
            ],
            callout: {
              type: "tip",
              title: "One transform, three courses",
              body: "The sinc of the uniform aperture IS the spectrum of the rectangular window in DSP and the array factor of the uniform line source. When a question offers a choice between 'derive the aperture pattern' and 'recall the array factor', write one line noting they are the same transform - the sentence earns synthesis marks and saves derivation time.",
            },
            examQuestions: [
              {
                q: "Show that the far-field pattern of a uniformly illuminated rectangular aperture is the Fourier transform of its distribution, and derive the HPBW, first-null angle and first sidelobe level for aperture width a.",
                marks: 14,
                outline: [
                  "Field integral: E(theta) = double integral of E0·e^(j·k·(x·sin theta)) dx dy",
                  "Separates: sinc(u) with u = (pi·a/lambda)·sin(theta) times a constant in the other cut",
                  "HPBW: sin(u) = u/sqrt(2) -> u = 1.39 -> HPBW = 0.886·lambda/a rad = 50.8·lambda/a degrees",
                  "First nulls: u = ±pi -> sin(theta) = ±lambda/a",
                  "Sidelobe structure of sin(u)/u: first sidelobe -13.3 dB",
                  "Directivity D = 4pi·A/lambda^2 for uniform illumination",
                ],
              },
              {
                q: "Compute the beamwidth and directivity of a 30 cm x 30 cm uniform aperture at 10 GHz.",
                marks: 7,
                outline: [
                  "lambda = 3 cm; a = 30 cm = 10 lambda",
                  "HPBW = 50.8/10 = 5.08 degrees",
                  "First null at sin(theta) = 0.1 -> 5.74 degrees",
                  "A = 0.09 m^2; D = 4pi·0.09/0.0009 = 1257 = 31 dBi",
                ],
              },
              {
                q: "State the relation between aperture theory and array theory, using the uniform line source and the uniform array as the example.",
                marks: 7,
                outline: [
                  "Both patterns are the Fourier transform of a distribution",
                  "Uniform discrete array: Dirichlet kernel sin(N·psi/2)/N·sin(psi/2)",
                  "Uniform continuous aperture: sinc sin(u)/u - the limit of vanishing spacing",
                  "Tapering conclusions carry across both (4.2)",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Uniform and tapered aperture illumination",
            body: [
              "The aperture distribution is a design dial: uniform illumination maximizes directivity but its sinc sidelobes (-13.3 dB) leak power into every direction; tapered (edge-dimmed) illumination suppresses sidelobes at the cost of a wider beam and some gain. The canonical ladder mirrors DSP windows: uniform (-13.3 dB sidelobes, efficiency 100 percent), parabolic-on-pedestal, cosine (-23 dB, HPBW 1.36x wider, efficiency ~81 percent), Taylor and Bayliss distributions (the synthesis-grade families with specified sidelobe levels). The tradeoff law is universal: every dB of sidelobe reduction costs beamwidth and gain - there is no free taper.",
              "The numbers in a worked comparison: a 10-lambda square aperture. Uniform: HPBW 5.08 degrees, first sidelobe -13.3 dB, D = 31 dBi. Cosine taper: HPBW 6.9 degrees (1.36x), first sidelobe -23 dB, D = 0.81 x 31 = 30.1 dBi. Hamming-type taper (-40 dB design sidelobe): HPBW ~8 degrees, D = 0.72 x 31 = 29.6 dBi. The efficiency column IS the gain cost: taper efficiency 0.81 for cosine, 0.72 for the deep taper - the aperture's version of the window table of DSP, and the reason real horns and dishes specify their illumination function.",
              "The physics of WHY tapering works: sidelobes come from the aperture's abrupt edges - a step discontinuity in the field radiates like a step in time domain rings in frequency. Smoothing the edge removes the discontinuity, and the transform's high-frequency (large-angle) content falls. The extremal statement (for synthesis questions): for a given sidelobe level, the Dolph-Chebyshev/Taylor distribution minimizes beamwidth - the aperture twin of section 2.6's array result. Practical reflectors live at -20 to -30 dB illumination taper; radio-astronomy dishes run -30 to -40 dB sidelobe designs to reject ground pickup and interference.",
              "The exam's 14-marker: compare uniform and tapered illumination with the table (beamwidth, sidelobe, efficiency), explain the edge-discontinuity physics, and name the synthesis families. The 7-marker: compute the tapered design's gain (efficiency x uniform D) or the beamwidth broadening factor. Always quote BOTH sides of the tradeoff - answers that only celebrate sidelobe suppression miss the cost half.",
            ],
            keyTerms: [
              { term: "Taper efficiency", definition: "Ratio of tapered-aperture directivity to uniform-aperture directivity: 0.81 for cosine." },
              { term: "Beamwidth broadening", definition: "HPBW multiplier of taper: 1.36 for cosine taper." },
              { term: "Edge discontinuity", definition: "The abrupt field step at an untapered edge - the sidelobe source." },
              { term: "Taylor distribution", definition: "Synthesis family: specified sidelobe level at minimum beamwidth (aperture). " },
              { term: "Illumination choice", definition: "Reflectors live at -20 to -30 dB edge taper; radio astronomy deeper." },
            ],
            diagram: {
              kind: "compare",
              title: "Uniform versus tapered illumination",
              caption: "Same aperture, two distributions: gain against sidelobes.",
              left: {
                heading: "Uniform (flat) illumination",
                items: [
                  "HPBW 5.08 degrees (10-lambda aperture)",
                  "First sidelobe -13.3 dB",
                  "Taper efficiency 1.00 - maximum directivity",
                  "Edges radiate: high-angle leakage",
                ],
              },
              right: {
                heading: "Cosine taper",
                items: [
                  "HPBW 6.9 degrees (1.36x wider)",
                  "First sidelobe -23 dB",
                  "Taper efficiency 0.81",
                  "Smooth edges: clean high-angle behaviour",
                ],
              },
            },
            table: {
              caption: "Illumination ladder for a 10-lambda square aperture (uniform D = 31 dBi).",
              headers: ["Distribution", "HPBW (degrees)", "First sidelobe", "Taper efficiency", "Gain (dBi)"],
              rows: [
                ["Uniform", "5.08", "-13.3 dB", "1.00", "31.0"],
                ["Parabolic-on-pedestal (mild)", "5.6", "-18 dB", "0.90", "30.6"],
                ["Cosine", "6.9", "-23 dB", "0.81", "30.1"],
                ["Deep taper (-40 dB design)", "8.0", "-40 dB", "0.72", "29.6"],
              ],
            },
            bullets: [
              "Uniform aperture: maximum directivity, -13.3 dB sidelobes from the edge steps.",
              "Tapering smooths the edges: sidelobes fall, beam widens, gain drops by the taper efficiency.",
              "Cosine taper: -23 dB sidelobes at 1.36x beamwidth, efficiency 0.81.",
              "Worked: 10-lambda aperture uniform 31 dBi vs cosine-tapered 30.1 dBi.",
              "Taylor/Bayliss: synthesis distributions with specified sidelobe levels.",
              "Reflectors specify illumination: -20 to -30 dB typical, deeper for radio astronomy.",
              "The tradeoff law: no free taper - every dB of sidelobe costs beamwidth and gain.",
            ],
            callout: {
              type: "exam",
              title: "Quote both sides of the dial",
              body: "Taper questions are two-column answers: what improves (sidelobes) and what it costs (beamwidth, efficiency, gain). A cosine-taper answer without 'HPBW 1.36x and 0.81 efficiency' is half the tradeoff - examiners mark the cost column as heavily as the benefit.",
            },
            examQuestions: [
              {
                q: "Compare uniform and tapered aperture illumination with numerical beamwidth, sidelobe and efficiency values, and explain the physical origin of aperture sidelobes.",
                marks: 14,
                outline: [
                  "Uniform: HPBW 5.08 degrees, -13.3 dB first sidelobe, efficiency 1.00 (10-lambda aperture)",
                  "Cosine: HPBW 6.9 degrees (1.36x), -23 dB, efficiency 0.81",
                  "Sidelobes originate in the abrupt edge discontinuity of the distribution",
                  "Smoothing the edge removes high-angle (transform) content",
                  "Synthesis families: Taylor/Bayliss - specified level at minimum beamwidth",
                  "Universal law: sidelobe reduction costs beamwidth and gain",
                ],
              },
              {
                q: "A 5-m dish at 4 GHz is illuminated with a taper of efficiency 0.75 and beamwidth factor 1.3. Compute its gain and HPBW versus uniform illumination.",
                marks: 7,
                outline: [
                  "lambda = 0.075 m; physical area 19.6 m^2",
                  "Uniform: D = 4pi·19.6/0.005625 = 43,800 = 46.4 dBi",
                  "Tapered gain: 0.75 x 46.4 = 44.9 dBi",
                  "Uniform HPBW ≈ 70·lambda/D = 2.6 degrees; tapered: 1.3 x 2.6 = 3.4 degrees",
                ],
              },
              {
                q: "Why do radio-astronomy dishes use deeper illumination tapers than communication dishes?",
                marks: 7,
                outline: [
                  "Radio astronomy measures faint sources near the horizon",
                  "Sidelobes pointing at the warm ground add noise temperature",
                  "Interference rejection demands low sidelobes off-axis",
                  "Deeper taper (-30 to -40 dB) trades a fraction of a dB of gain for clean high angles",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Horn antennas",
            body: [
              "A horn is a flared waveguide: the guide's modes expand gradually into free space, forming an aperture whose illumination is nearly the waveguide's mode shape. Flaring in one plane gives the sectoral (H-plane or E-plane) horn; flaring in both gives the PYRAMIDAL horn - the standard gain standard of antenna ranges. The flare's purpose: match the waveguide impedance (~250-380 ohms wave impedance) to 377 ohms of free space over an aperture large enough to be directive, without the reflections an abrupt opening would cause.",
              "The design numbers: pyramidal horn gain G = 4pi·(0.51)·a·b/lambda^2 (a, b = aperture dimensions; 0.51 is the typical aperture efficiency with the optimum flare), with the OPTIMUM-LENGTH condition b ≈ sqrt(2·lambda·L) (E-plane flare, L = horn length) balancing phase error against aperture size. Worked design at 10 GHz (lambda = 3 cm): aperture 20 x 15 cm, length 30 cm: G = 4pi·0.51·0.03/0.0009 = 213 = 23.3 dBi; HPBW ≈ 51·lambda/a = 7.7 degrees by 13 degrees (the two cuts differ since a ≠ b). Longer horns of the same aperture barely improve gain - the phase error across the aperture eats what the area adds; hence optimum-length design and, for long apertures, the lens correction of section 3.6.",
              "The horn family and its roles: E-plane and H-plane sectoral horns (gain ~8-18 dBi, illumination tapers for reflector feeds), pyramidal (gain standard: calculable gain to ±0.1 dB - the calibration reference of every test range), conical horns (circular polarization capability), corrugated (hybrid-mode) horns (symmetrical beams, -30 dB sidelobes, the feed of choice for precision reflectors), and the exponential/profiled horns of modern design. The exam's 14-marker: derive or state the gain formula with the efficiency factor, apply the optimum-length condition, and work the numerical. The 7-marker: why the gain saturates with length (phase error), or the corrugated horn's symmetric-beam virtue.",
              "Presentation discipline: sketch the pyramidal horn with a, b and L labelled, write the gain formula with the 0.51 efficiency, and compute both HPBWs separately (the two cuts differ). The phase-error sentence - 'the aperture edge lags the centre by up to ~pi/2 at optimum; longer flares add area but also lag' - is the physical insight examiners look for in the saturation discussion.",
            ],
            keyTerms: [
              { term: "Pyramidal horn", definition: "Flared in both planes; the calculable gain standard of antenna ranges." },
              { term: "Horn gain formula", definition: "G = 4pi·0.51·a·b/lambda^2 for the optimum pyramidal horn." },
              { term: "Optimum length", definition: "b ≈ sqrt(2·lambda·L): balance of aperture area against aperture phase error." },
              { term: "Corrugated horn", definition: "Hybrid-mode horn: symmetric beam, low cross-polarization, -30 dB sidelobes." },
              { term: "Gain standard", definition: "A horn whose gain is computable from dimensions to ±0.1 dB - range calibration." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Horn design flow",
              caption: "Waveguide -> flare -> aperture -> verified gain.",
              stages: [
                { label: "Waveguide feed", note: "mode shape set at the throat" },
                { label: "Optimum flare", note: "b ≈ sqrt(2·lambda·L) - phase vs area balance" },
                { label: "Aperture", note: "a x b with ~0.51 efficiency" },
                { label: "Gain", note: "G = 4pi·0.51·a·b/lambda^2" },
                { label: "Verify", note: "HPBW per cut: 51·lambda/a, 51·lambda/b degrees" },
              ],
            },
            table: {
              caption: "Horn family and roles.",
              headers: ["Horn type", "Gain range", "Special property", "Role"],
              rows: [
                ["E-plane sectoral", "8-15 dBi", "narrow E-cut beam", "simple feed, illumination taper"],
                ["H-plane sectoral", "8-18 dBi", "narrow H-cut beam", "reflector feeds"],
                ["Pyramidal", "15-25 dBi", "calculable gain ±0.1 dB", "gain standard"],
                ["Conical", "15-25 dBi", "circular polarization capable", "polarimetric feeds"],
                ["Corrugated", "15-28 dBi", "-30 dB sidelobes, symmetric", "precision reflector feeds"],
              ],
            },
            bullets: [
              "Horn = flared waveguide matching guide impedance to 377 ohms over an aperture.",
              "Pyramidal gain: G = 4pi·0.51·a·b/lambda^2.",
              "Optimum length: b ≈ sqrt(2·lambda·L) - area against phase error.",
              "Worked at 10 GHz: 20 x 15 cm aperture, 30 cm long -> 23.3 dBi, HPBW 7.7 x 13 degrees.",
              "Gain saturates with length: aperture phase error cancels added area.",
              "Pyramidal horns are gain standards - dimensionally calculable to ±0.1 dB.",
              "Corrugated horns: symmetric beams and low cross-pol for precision feeds.",
            ],
            callout: {
              type: "exam",
              title: "Efficiency 0.51 is part of the formula",
              body: "Horn gain answers that compute 4pi·a·b/lambda^2 (efficiency 1.0) overstate by 3 dB. The optimum pyramidal horn runs at ~51 percent aperture efficiency - write 0.51 inside the formula, and quote the phase-error reason in the same line.",
            },
            examQuestions: [
              {
                q: "Explain the construction and operation of a pyramidal horn. Derive or state its gain formula and compute the gain and beamwidths for a 20 x 15 cm aperture horn at 10 GHz with 30 cm length.",
                marks: 14,
                outline: [
                  "Waveguide flared in both planes to aperture a x b",
                  "Gradual flare matches wave impedance to 377 ohms; forms a directive aperture",
                  "G = 4pi·0.51·a·b/lambda^2 (aperture efficiency 0.51 at optimum)",
                  "lambda = 3 cm; a·b = 0.03 m^2",
                  "G = 4pi·0.51·0.03/0.0009 = 213 = 23.3 dBi",
                  "HPBW per cut: 51·0.03/0.20 = 7.7 degrees (a-cut) and 51·0.03/0.15 = 10.2 degrees (b-cut)",
                  "Optimum-length check: b ≈ sqrt(2·lambda·L) = sqrt(0.018) = 13.4 cm - near optimum",
                ],
              },
              {
                q: "Why does horn gain stop improving as the horn is made longer at constant aperture? What is the remedy for long apertures?",
                marks: 7,
                outline: [
                  "Edge of the aperture lags the centre by path difference ~s^2/8L",
                  "Longer flare: same area, larger phase error across it",
                  "Phase error cancels the directivity the area would add",
                  "Remedy: lens correction (3.6) or optimum-length design",
                ],
              },
              {
                q: "What makes the corrugated (hybrid-mode) horn the preferred feed for precision reflectors?",
                marks: 7,
                outline: [
                  "Corrugations force a hybrid HE11 mode",
                  "Symmetric beam in both planes - illuminates the dish evenly",
                  "Low cross-polarization (< -30 dB) - vital for dual-pol links",
                  "Sidelobes near -30 dB reduce spillover noise",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Reflector antennas",
            body: [
              "The parabolic reflector converts a POINT feed at its focus into a plane wave: every path from focus to paraboloid to aperture is equal, so the spherical wavefront lands flat - geometric collimation with no phase error at any size. The gain is the aperture formula with the dish's efficiency: G = eta_ap·(pi·D/lambda)^2, where D is diameter and eta_ap (0.5-0.7) collects illumination taper, spillover, surface error and blockage. Worked: the standing 2 m dish at 6 GHz, eta_ap = 0.55: G = 0.55·(pi·2/0.05)^2 = 0.55·15,791 = 8685 = 39.4 dBi; HPBW ≈ 70·lambda/D = 1.75 degrees (the degree constant 70 for practical illumination).",
              "The f/D ratio shapes the tradeoff space. Deep dishes (f/D ~0.25-0.3) need feeds with wide beams (simple dipoles work) but suffer steep illumination gradients; shallow dishes (f/D ~0.4-0.5) suit horn feeds and give gentler tapers - most commercial dishes sit at f/D = 0.35-0.5. Surface accuracy is the quiet killer: RMS surface error eps reduces gain by exp(-(4·pi·eps/lambda)^2) - a 1.6 mm RMS error at 6 GHz (lambda = 50 mm) costs exp(-(0.4)^2)... = 0.85 (-0.7 dB); at 20 GHz the same error costs -6.5 dB. This single formula decides which dishes can be re-banded upward.",
              "Reflector family beyond the prime-focus parabola: Cassegrain (convex hyperbolic sub-reflector - feed at the axis behind the dish; convenient mounting, 10-15 percent more gain from deeper effective f/D, sub-reflector blockage), Gregorian (concave elliptical sub-reflector), offset-fed parabola (no blockage at all - the modern VSAT and DBS standard), and the torus/spherical variants for multi-beam service. The exam's 14-marker: explain the equal-path collimation property, derive/state the gain formula with efficiency, work the dish numerical, and discuss the surface-error formula. The 7-marker: Cassegrain vs prime-focus tradeoffs, or the offset-feed rationale.",
              "Presentation discipline: sketch the parabola with focus, feed and the equal-path property marked (two rays drawn), state G = eta_ap·(pi·D/lambda)^2, compute the worked numbers, and add the surface-error exponential with one numerical. The equal-path sketch is the derivation - a parabola is defined by that property, and the examiner is checking that you know it.",
            ],
            keyTerms: [
              { term: "Parabolic collimation", definition: "All focus-paraboloid-aperture paths equal: spherical in, plane out." },
              { term: "Reflector gain", definition: "G = eta_ap·(pi·D/lambda)^2; eta_ap 0.5-0.7 practical." },
              { term: "Surface error loss", definition: "exp(-(4·pi·eps/lambda)^2): RMS error eps against wavelength." },
              { term: "f/D ratio", definition: "0.25-0.3 deep (dipole feeds) to 0.4-0.5 shallow (horn feeds)." },
              { term: "Cassegrain", definition: "Convex sub-reflector; feed behind the dish; deeper effective f/D." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the reflector configuration",
              caption: "Four ways to place the feed, four tradeoff profiles.",
              start: "Parabolic reflector feed choice",
              branches: [
                { label: "Prime focus", outcome: "simple, best illumination control; feed blocks the aperture; ladder at the focus", good: true },
                { label: "Cassegrain", outcome: "feed at the axis rear; +10-15 percent gain; sub-reflector blockage", good: true },
                { label: "Offset feed", outcome: "no blockage, clean sidelobes; asymmetric structure - DBS/VSAT standard", good: true },
                { label: "Flat plate / array", outcome: "no reflector at all - steering arrays replace dishes in 5G", good: false },
              ],
            },
            table: {
              caption: "Reflector configurations compared.",
              headers: ["Configuration", "Feed location", "Blockage", "Typical use"],
              rows: [
                ["Prime-focus parabola", "at the focus, front", "feed + struts block 5-10 percent", "radio astronomy, HF... UHF dishes"],
                ["Cassegrain", "behind, on axis", "sub-reflector blockage", "earth stations, deep space"],
                ["Gregorian", "behind, on axis", "sub-reflector (larger)", "specialized earth stations"],
                ["Offset parabola", "offset, no shadow", "none", "DBS, VSAT, modern small terminals"],
              ],
            },
            bullets: [
              "Parabola: equal paths focus-aperture - geometric collimation, no phase error.",
              "Gain: G = eta_ap·(pi·D/lambda)^2; 2 m at 6 GHz with 0.55 -> 39.4 dBi.",
              "HPBW ≈ 70·lambda/D degrees: 1.75 degrees for the 2 m dish at 6 GHz.",
              "Surface error: exp(-(4·pi·eps/lambda)^2) - 1.6 mm RMS costs -0.7 dB at 6 GHz, -6.5 dB at 20 GHz.",
              "f/D: deep dishes take dipole feeds, shallow take horns; 0.35-0.5 commercial.",
              "Cassegrain: +10-15 percent gain from effective f/D deepening, feed convenience.",
              "Offset feed: zero blockage - the modern small-terminal standard.",
            ],
            callout: {
              type: "exam",
              title: "Draw the equal-path property",
              body: "The parabola's derivation is one sentence and one sketch: every ray from the focus to the aperture plane travels the same total path, so phases arrive equal. Two rays drawn with the equality marked constitute the derivation; everything else (gain, efficiency) is the aperture formula of 4.1-4.2 recast.",
            },
            examQuestions: [
              {
                q: "Explain the collimating property of the parabolic reflector, derive its gain expression, and compute gain and HPBW for a 2 m dish at 6 GHz with 55 percent efficiency.",
                marks: 14,
                outline: [
                  "Parabola definition: focus-to-surface-to-aperture paths all equal",
                  "Spherical wavefront from the feed lands as a plane wavefront",
                  "G = eta_ap·(pi·D/lambda)^2 with eta_ap = illumination x spillover x surface x blockage",
                  "lambda = 0.05 m; (pi·2/0.05)^2 = 15,791",
                  "G = 0.55·15,791 = 8685 = 39.4 dBi",
                  "HPBW ≈ 70·lambda/D = 1.75 degrees",
                  "Effective aperture: 0.55 x 3.14 = 1.73 m^2 - consistent with 2.3",
                ],
              },
              {
                q: "A dish has RMS surface error 1.6 mm. Compute the gain loss at 6 GHz and at 20 GHz, and state the re-banding conclusion.",
                marks: 7,
                outline: [
                  "Loss factor exp(-(4·pi·eps/lambda)^2)",
                  "6 GHz (lambda = 50 mm): (4pi·1.6/50) = 0.402 -> exp(-0.162) = 0.85 -> -0.7 dB",
                  "20 GHz (lambda = 15 mm): (4pi·1.6/15) = 1.34 -> exp(-1.80) = 0.165 -> -7.8 dB",
                  "Conclusion: the dish is good to ~10 GHz; higher bands need a smoother surface",
                ],
              },
              {
                q: "Compare prime-focus and Cassegrain reflectors under gain, feed convenience, blockage and typical application.",
                marks: 7,
                outline: [
                  "Prime focus: simple feed at the focus; ladder access; 5-10 percent blockage",
                  "Cassegrain: convex sub-reflector; feed behind the dish - convenient high-power mounting",
                  "Cassegrain deepens the effective f/D: +10-15 percent gain with a compact feed",
                  "Applications: prime focus for radio astronomy; Cassegrain for earth stations",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Aperture blockage and feeding structures",
            body: [
              "Anything standing in front of an aperture steals from it: the feed, its struts and its support boom shadow part of the aperture, and the shadowed field is SCATTERED (not absorbed) - diffracting into the main beam's skirt and raising wide-angle sidelobes. The numbers: prime-focus blockage of 5-10 percent of the aperture diameter costs 0.5-1 dB of gain and lifts sidelobes several dB; strut blockage adds narrow diffraction lobes at angles set by the strut geometry. The fixes, in ascending expense: smaller feeds (corrugated horns are compact for their illumination quality), strutless layouts, and the OFFSET feed - shifting the feed below the aperture's shadow so nothing blocks the path (the DBS dish on every rooftop is offset for exactly this reason).",
              "Feeding structures are the aperture's intake system, and each has a profile. Dipole-plus-reflector-disc: compact (~0.8 lambda), wide beam - suits deep dishes (f/D ~0.3). Pyramidal or conical horn: better illumination control, longer - suits shallow dishes and Cassegrains. Corrugated horn: symmetric beam and low cross-polarization - the precision choice for dual-polarized links. Log-periodic feed: broadband dish service. Cassegrain systems add the sub-reflector design problem: matching the virtual focus, with diffraction-loss tradeoffs quantifiable by the same aperture methods. Beam-waveguide (multiple reflector mirrors guiding the beam into a basement room) serves the biggest earth stations.",
              "The worked blockage budget for the standing 2 m prime-focus dish: feed-and-strut shadow diameter 0.35 m on a 2 m aperture: area ratio (0.35/2)^2 = 3.1 percent -> directivity loss ~0.14 dB, sidelobe rise ~2-3 dB near the main beam. The same dish offset-fed recovers the 0.14 dB AND the sidelobe cleanliness - which is why offset dominates below 1.2 m aperture, where the blockage fraction would be (0.35/1.2)^2 = 8.5 percent (-0.4 dB, sidelobes +5 dB). Small dishes hate blockage; large dishes tolerate it; the exam wants the squared-diameter ratio logic in both directions.",
              "The exam's 14-marker: explain how blockage degrades gain and sidelobes, quantify with the area-ratio method for two dish sizes, and survey the feeding structures with their f/D compatibility in a small table. The 7-marker: the offset-feed rationale, or the strut-diffraction lobe explanation. The sketch - aperture, shadow cone, one scattered ray bending into a sidelobe - makes the mechanism visual and earns the marks. Close with the engineering conclusion in one sentence: small dishes cannot afford blockage, large dishes tolerate it, and that single sentence is why every rooftop DBS dish is offset-fed.",
            ],
            keyTerms: [
              { term: "Aperture blockage", definition: "Feed/strut shadow scattering power out of the main beam into sidelobes." },
              { term: "Blockage loss", definition: "~(D_shadow/D_aperture)^2 in area ratio; 3 percent = 0.14 dB." },
              { term: "Offset feed", definition: "Feed displaced below the aperture path: zero blockage, asymmetric structure." },
              { term: "Feed compatibility", definition: "Wide-beam feeds (dipole+disc) for deep dishes; horns for shallow/Cassegrain." },
              { term: "Beam waveguide", definition: "Mirror chain guiding the beam to an indoor feed room - large earth stations." },
            ],
            diagram: {
              kind: "compare",
              title: "Blocked versus offset aperture",
              caption: "Move the feed out of the beam and the shadow disappears.",
              left: {
                heading: "Prime focus (blocked)",
                items: [
                  "Feed + struts shadow 3-10 percent of aperture",
                  "Gain loss 0.1-0.5 dB",
                  "Sidelobes lift 2-5 dB near the beam",
                  "Symmetric, compact, cheap",
                ],
              },
              right: {
                heading: "Offset feed",
                items: [
                  "Nothing blocks the aperture",
                  "Full directivity retained",
                  "Cleanest sidelobes; low cross-pol needs care",
                  "Asymmetric structure - DBS/VSAT standard",
                ],
              },
            },
            table: {
              caption: "Feeding structures and their dish compatibility.",
              headers: ["Feed", "Typical size", "Beam", "Best f/D", "Note"],
              rows: [
                ["Dipole + disc", "~0.8 lambda", "wide (~100 degrees)", "0.25-0.3", "deep dishes, simple"],
                ["Pyramidal/conical horn", "2-4 lambda", "medium (~60 degrees)", "0.35-0.45", "gain standard feeds"],
                ["Corrugated horn", "3-5 lambda", "symmetric, low x-pol", "0.35-0.5", "precision dual-pol"],
                ["Log-periodic", "3-6 lambda", "medium, broadband", "0.35-0.45", "multi-band service"],
                ["Cassegrain chain", "feed + sub-reflector", "shaped by sub-reflector", "0.3-0.4 (effective deeper)", "earth stations"],
              ],
            },
            bullets: [
              "Blockage scatters (not absorbs): power moves into sidelobes, gain drops by the area ratio.",
              "Area-ratio method: (shadow diameter/aperture diameter)^2.",
              "Worked: 0.35 m shadow on 2 m dish = 3.1 percent = 0.14 dB; on 1.2 m = 8.5 percent = 0.4 dB.",
              "Small dishes cannot afford blockage - hence the offset-feed DBS dish.",
              "Feeds match the f/D: wide-beam dipoles for deep dishes, horns for shallow.",
              "Corrugated horns: symmetric beam, low cross-pol - precision dual-pol feeds.",
              "Struts add narrow diffraction lobes at geometry-set angles.",
            ],
            callout: {
              type: "exam",
              title: "Squaring the shadow",
              body: "Blockage numerals come from ONE operation: square the diameter ratio. 0.35/2 = 0.175 -> 3.1 percent -> 0.14 dB. Do it for both dish sizes in the question and the conclusion (small dishes need offset feeds) writes itself.",
            },
            examQuestions: [
              {
                q: "Explain how aperture blockage degrades antenna performance, quantify it for a 0.35 m feed shadow on 2 m and 1.2 m dishes, and state which geometry each favours.",
                marks: 14,
                outline: [
                  "Shadowed field scatters diffractively into sidelobes; gain drops by area ratio",
                  "(0.35/2)^2 = 3.1 percent -> 0.14 dB loss, sidelobes +2-3 dB",
                  "(0.35/1.2)^2 = 8.5 percent -> 0.4 dB loss, sidelobes +5 dB",
                  "Struts add narrow diffraction lobes",
                  "Conclusion: small dishes go offset-fed; large dishes tolerate prime focus",
                  "Offset removes both the loss and the sidelobe lift",
                ],
              },
              {
                q: "Survey the feeding structures of reflector antennas and match each to its f/D range and application.",
                marks: 7,
                outline: [
                  "Dipole + disc: wide beam, deep dishes f/D 0.25-0.3, simple",
                  "Horn feeds: medium beams, f/D 0.35-0.45, gain-standard quality",
                  "Corrugated horn: symmetric, low cross-pol, precision dual-pol",
                  "Log-periodic feed: broadband multi-band dishes",
                  "Cassegrain chain: earth stations with feed rooms",
                ],
              },
              {
                q: "Why does strut blockage produce narrow diffraction lobes rather than a uniform sidelobe rise?",
                marks: 7,
                outline: [
                  "A long straight strut is a linear scatterer",
                  "Its diffracted field interferes along cones set by strut orientation",
                  "Result: narrow spike-like lobes at strut-dependent angles",
                  "Mitigation: angled struts (break the straight geometry) or fewer of them",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Slot antennas",
            body: [
              "A slot is a cut in a conducting sheet with voltage across it - and Babinet's principle makes its pattern computable from a wire: the radiation pattern of a SLOT is the pattern of its COMPLEMENTARY dipole with electric and magnetic fields interchanged. A half-wave slot in a large screen therefore has the dipole's donut pattern (with the slot's E and H swapped: maximum radiation perpendicular to the slot's long axis... the field polarized ACROSS the slot), and its impedance is the complement: where the thin half-wave dipole is 73 ohms, the half-wave slot is a few HUNDRED ohms (Z_slot·Z_dipole = (eta/2)^2 = (188.5)^2 ~ 35,500 ohm^2 - Booker's extension of Babinet). Resonant length: the same lambda/2, with the slot slightly shortened for end capacitance just like the wire.",
              "Slots earn their keep where wires cannot live: cut in the WALL of a waveguide, they radiate while keeping the feed system closed and pressurized. The geometry rules: a longitudinal slot in the BROAD wall (offset from the centreline) couples strongest and radiates with polarization across the slot; an inclined slot in the narrow wall couples via the tilted field; centred broad-wall slots see no net voltage and do not radiate. Arrays of slots follow the array theory of Unit II exactly - the slotted waveguide array (longitudinal slots spaced lambda_g/2 along the guide, varying offsets for amplitude taper) is the flat-panel radar antenna par excellence: thousands of slots, no moving parts, million-dollar precision from waveguide machining.",
              "Worked numbers: a half-wave slot at 3 GHz in a large screen: pattern = dipole's with fields swapped (donut, HPBW 78 degrees in the complementary cut), resonant length ~0.47 lambda = 4.7 cm, impedance of order 500-1000 ohms depending on screen size (Booker: Z_slot = (eta/2)^2/Z_dipole = 35,500/73 = 486 ohms for the ideal complementary case). Waveguide slots cut in WR-90 walls at 10 GHz: the guide wavelength is lambda_g = lambda/sqrt(1 - (lambda/2a)^2) = 40 mm for a = 22.86 mm, so longitudinal broad-wall slots spaced half a guide wavelength (2.0 cm) with varying offsets form arrays of 20-100 slots with computed tapers.",
              "The exam's 14-marker: state Babinet's principle and Booker's extension, derive the slot-dipole pattern/impedance relation, and describe waveguide-slot geometry (which walls radiate and why). The 7-marker: compute the slot's impedance from the dipole value, or sketch the slot pattern with polarization marked. The phrase that earns the mechanism mark: the slot's FIELD is polarized across its length, perpendicular to what the equivalent dipole's E would be - the E/H interchange IS Babinet.",
            ],
            keyTerms: [
              { term: "Babinet's principle", definition: "Slot pattern = complementary dipole pattern with E and H interchanged." },
              { term: "Booker's extension", definition: "Z_slot·Z_dipole = (eta/2)^2 ~ 35,500 ohm^2 - the impedance complement." },
              { term: "Longitudinal broad-wall slot", definition: "Offset slot in the waveguide's wide wall; the radar-array workhorse." },
              { term: "Slot polarization", definition: "E-field across the slot length - the complement of the wire." },
              { term: "Slotted waveguide array", definition: "20-100 half-guide-wavelength-spaced slots with offset taper: flat-panel radar." },
            ],
            diagram: {
              kind: "flow",
              title: "Babinet's chain: wire to slot",
              caption: "Complement the metal, swap the fields, invert the impedance.",
              steps: [
                { label: "Known dipole", note: "73 ohms, donut pattern, E along the wire" },
                { label: "Take the complement", note: "metal where air was: the slot in a sheet" },
                { label: "Swap E and H", note: "slot E-field runs ACROSS its length" },
                { label: "Invert impedance", note: "Z_slot = (eta/2)^2/Z_dipole = 35,500/73 = 486 ohms" },
                { label: "Same donut shape", note: "pattern rotated 90 degrees in polarization" },
              ],
            },
            table: {
              caption: "Waveguide slot geometries and coupling.",
              headers: ["Slot position", "Coupling", "Radiates?", "Typical use"],
              rows: [
                ["Broad wall, offset (longitudinal)", "strong, offset-set", "yes", "slotted arrays (radar)"],
                ["Broad wall, centreline", "zero net voltage", "no", "unused positions"],
                ["Broad wall, transverse", "moderate", "yes", "special arrays"],
                ["Narrow wall, inclined", "weak-moderate", "yes", "arrays needing tilt"],
                ["End wall", "strong", "yes", "horn-like end fire"],
              ],
            },
            bullets: [
              "Babinet: slot field = complementary dipole with E and H swapped.",
              "Booker: Z_slot·Z_dipole = (eta/2)^2 - 486 ohms against the 73-ohm dipole.",
              "Slot E-field is polarized across the slot; resonant length ~0.47 lambda.",
              "Waveguide slots: broad-wall offset slots couple by the offset; centreline slots do not radiate.",
              "Narrow-wall inclined slots radiate from the tilted field.",
              "Slotted arrays: lambda_g/2 spacing, offset taper - flat-panel radar.",
              "Slots keep the feed closed and pressurized - the practical edge over wire arrays.",
            ],
            callout: {
              type: "exam",
              title: "Say which way the E-field points",
              body: "Slot polarization is the most-missed detail: the E-field runs ACROSS the slot (perpendicular to its long dimension), not along it. Babinet's swap is exactly this transposition - state it with the sketch, and the impedance inversion (Booker) follows as bookkeeping.",
            },
            examQuestions: [
              {
                q: "State Babinet's principle and Booker's extension, and use them to find the pattern and impedance relation between a half-wave dipole and a half-wave slot.",
                marks: 14,
                outline: [
                  "Babinet: fields of a screen = fields of the complementary screen with E/H swapped",
                  "Slot in a sheet = complement of the dipole",
                  "Pattern shape identical; polarization rotated 90 degrees (E across the slot)",
                  "Booker: Z_slot·Z_dipole = (eta/2)^2 = (188.5)^2 ~ 35,500 ohm^2",
                  "73-ohm dipole -> ~486-ohm slot (ideal complement)",
                  "Resonant lengths both ~lambda/2 (slot shortened slightly like the wire)",
                ],
              },
              {
                q: "Explain which waveguide-wall slots radiate and why, and describe the longitudinal-slot array design.",
                marks: 7,
                outline: [
                  "Broad-wall offset slots: the offset sees a transverse current - couples and radiates",
                  "Centreline broad-wall slots: no net field disturbance - no radiation",
                  "Narrow-wall inclined slots: tilted field gives controlled weak coupling",
                  "Array: longitudinal slots at lambda_g/2, offsets set the amplitude taper",
                  "Flat-panel radar: 20-100 slots, computed tapers, closed feed",
                ],
              },
              {
                q: "A 73-ohm half-wave dipole is complemented by a slot in a large screen. Compute the slot's impedance and state its polarization.",
                marks: 7,
                outline: [
                  "Booker: Z_slot·Z_dipole = (eta/2)^2 = (188.5)^2 ~ 35,500 ohm^2",
                  "Z_slot = 35,500/73 = 487 ohms",
                  "E-field polarized across the slot length",
                  "Pattern: the dipole donut rotated to the slot's coordinate frame",
                  "Resonant length unchanged: ~lambda/2, shortened slightly for end capacitance",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Microstrip patch antennas and numerical tools",
            body: [
              "The microstrip PATCH is a printed rectangle of copper over a grounded dielectric substrate - the antenna of every phone, Wi-Fi module and GNSS receiver. Radiation mechanism: the patch is a resonant cavity (transmission-line model: two radiating slots at the patch's ends); at resonance the fringing E-fields at the two radiating edges are out of phase inside the substrate but add in the broadside half-space - the two-slot array of section 2.4, built photolithographically. Resonance: L ≈ lambda/(2·sqrt(epsilon_eff)) with the effective permittivity slightly below the substrate's (fringing fields spend time in air).",
              "Worked design at 2.4 GHz on FR-4 (epsilon_r = 4.4, h = 1.6 mm): epsilon_eff ≈ 4.08 for a wide patch; L = c/(2·f·sqrt(epsilon_eff)) = 300/(2·2.4·2.02) cm = 31 mm... computed precisely: 3 x 10^8/(2·2.4 x 10^9·2.02) = 0.031 m; with length correction the final L ≈ 29-30 mm and W ≈ 38 mm (W = c/(2f)·sqrt(2/(epsilon_r + 1)) = 62.5·0.609 = 38 mm). Performance: gain ~6-7 dBi, HPBW ~90 degrees broadside, bandwidth 2-5 percent (thin substrate) up to 15 percent (thick/air substrates), efficiency 50-80 percent (FR-4's loss tangent hurts at higher bands). Feeds: edge microstrip line (needs an inset or quarter-wave transformer for the ~200-ohm edge impedance), coax probe, aperture-coupled (cleanest polarization), or the dual orthogonal probes of a circularly polarized patch.",
              "The numerical tools are the fourth syllabus item and the modern workflow. ANALYTIC models (cavity, transmission-line): instant, good for L, W, resonance and first-order patterns. The METHOD OF MOMENTS (MoM - NEC, FEKO): solves the integral equation for surface currents - the standard for wires and printed antennas, minutes per run. FEM (HFSS): volume meshing, handles inhomogeneous substrates and connectors. FDTD: time-domain, broadband in one run, natural for transient/ultra-wideband work. The design loop every professional runs: analytic sizing -> full-wave optimization -> fabrication -> range verification - and the exam's 14-marker asks for the patch derivation, the worked L/W numbers, and one paragraph on the tool hierarchy with each tool's regime of validity.",
              "Presentation discipline: sketch the patch with L, W, h, substrate and feed marked; state the cavity/two-slot mechanism in one sentence ('fringing fields at the two radiating edges add broadside, cancel underneath'); compute L and W; then the tools table. The epsilon_eff subtlety - using epsilon_r directly overestimates L by ~5 percent - is the classic slip the correction term exists for.",
            ],
            keyTerms: [
              { term: "Microstrip patch", definition: "Printed resonant rectangle over a ground plane; the planar antenna standard." },
              { term: "Cavity model", definition: "Patch as a resonant cavity; fringing fields at the radiating edges form a two-slot array." },
              { term: "Patch resonance", definition: "L = c/(2f·sqrt(epsilon_eff)); 2.4 GHz on FR-4 needs L ≈ 30 mm." },
              { term: "Method of Moments", definition: "Integral-equation solver for surface currents - wire and printed antenna standard." },
              { term: "FEM / FDTD", definition: "Volume/time-domain solvers for substrates, connectors and broadband behaviour." },
            ],
            diagram: {
              kind: "layers",
              title: "The numerical tool stack",
              caption: "Analytic speed at the bottom of the decision, full-wave truth at the top.",
              layers: [
                { label: "Transmission-line / cavity models", note: "seconds; L, W, resonance, first patterns" },
                { label: "Method of Moments (FEKO, NEC)", note: "minutes; currents, wires, printed structures" },
                { label: "FEM (HFSS)", note: "hours; inhomogeneous substrates, connectors, packaging" },
                { label: "FDTD", note: "broadband single run; UWB and transient work" },
                { label: "Fabrication + range", note: "the final solver - verify at 2D^2/lambda (1.7)" },
              ],
            },
            table: {
              caption: "The worked 2.4 GHz FR-4 patch.",
              headers: ["Quantity", "Formula / basis", "Value"],
              rows: [
                ["Substrate", "FR-4, epsilon_r 4.4, h 1.6 mm", "cheap, lossy above ~5 GHz"],
                ["Effective permittivity", "epsilon_eff ≈ 4.08 (wide patch)", "below epsilon_r: fringing in air"],
                ["Resonant length L", "c/(2f·sqrt(epsilon_eff)) minus correction", "≈ 30 mm"],
                ["Width W", "c/(2f)·sqrt(2/(epsilon_r+1))", "≈ 38 mm"],
                ["Gain / HPBW", "typical patch", "6-7 dBi / ~90 degrees"],
                ["Bandwidth", "thin substrate", "2-5 percent"],
              ],
            },
            bullets: [
              "Patch = two-slot array: fringing edge fields add broadside, cancel underneath.",
              "Resonance: L ≈ c/(2f·sqrt(epsilon_eff)); use epsilon_eff, not epsilon_r.",
              "Worked 2.4 GHz FR-4: L ≈ 30 mm, W ≈ 38 mm, gain 6-7 dBi, HPBW ~90 degrees.",
              "Feeds: edge line with inset/transformer, coax probe, aperture-coupled, dual-probe circular.",
              "Bandwidth 2-5 percent on thin substrates; thicker/air substrates widen it.",
              "FR-4 loss tangent derates efficiency above ~5 GHz - Rogers/PTFE for microwave bands.",
              "Tool hierarchy: analytic -> MoM -> FEM/FDTD -> fabrication and range.",
            ],
            callout: {
              type: "warning",
              title: "epsilon_r is not epsilon_eff",
              body: "The classic patch-design slip: computing L with the substrate's epsilon_r. Fringing fields ride partly in air, so epsilon_eff is several percent lower and the patch comes out LONGER than needed - resonating low. Write the effective-permittivity step explicitly; it is a named mark in design questions.",
            },
            examQuestions: [
              {
                q: "Explain the radiation mechanism of the microstrip patch antenna and design a 2.4 GHz rectangular patch on FR-4 (epsilon_r = 4.4): give L, W, feed options and expected performance.",
                marks: 14,
                outline: [
                  "Cavity/two-slot mechanism: fringing fields at the radiating edges",
                  "Add in the broadside half-space, cancel underneath - two-element array (2.4)",
                  "epsilon_eff ≈ 4.08 (fringing correction below epsilon_r)",
                  "L = c/(2f·sqrt(epsilon_eff)) = 30 mm (with end correction)",
                  "W = c/(2f)·sqrt(2/(epsilon_r + 1)) = 38 mm",
                  "Feeds: edge line with inset, coax probe, aperture-coupled",
                  "Performance: 6-7 dBi, HPBW ~90 degrees, bandwidth 2-5 percent",
                ],
              },
              {
                q: "Compare the Method of Moments, FEM and FDTD solvers: formulation, strengths and when each is the right tool.",
                marks: 7,
                outline: [
                  "MoM: integral equation over surfaces/currents - wires, patches, fast sweeps",
                  "FEM: volume mesh of fields - inhomogeneous substrates, connectors, cavities",
                  "FDTD: time-domain stepping - broadband in one run, transients, UWB",
                  "Workflow: analytic sizing -> MoM optimization -> FEM verification -> range",
                ],
              },
              {
                q: "Why does the inset feed position control a patch's input impedance, and where is the 50-ohm point?",
                marks: 7,
                outline: [
                  "Edge impedance ~200-300 ohms; centre is the current maximum - low impedance",
                  "Inset moves the feed along the radiating edge's centreline",
                  "Impedance falls as cos^2(pi·x/L) from edge toward centre",
                  "50-ohm point a few millimetres in - located by the cos^2 rule",
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
      title: "Propagation of Radio Waves",
      summary:
        "Unit V follows the wave out of the antenna: the fundamentals and the three propagation modes, ground-wave propagation with plane-earth reflection and wavefront tilt, space-wave propagation with field strength, earth curvature and shadowing, the imperfect earth and the atmosphere with super-refraction, troposcatter and fading, path-loss calculations, and the ionosphere - its structure, the sky-wave mechanism, and the system parameters of critical frequency, MUF, LUF, virtual height and skip distance.",
      chapter: {
        number: "05",
        title: "Getting the Signal There",
        intro:
          "Unit V covers fundamentals of electromagnetic waves and the effects of the environment, the modes of propagation, ground-wave propagation (plane earth reflection, space and surface wave, transition, tilt of wave front due to ground losses), space-wave propagation (field strength relation, imperfect earth, curvature and interference zone, shadowing, atmospheric absorption, field variation with height, super-refraction, scattering, tropospheric propagation, fading, path loss), and sky-wave propagation (ionosphere structure, propagation mechanism, refraction and reflection, ray path, critical frequency, MUF, LUF, OF, virtual height, skip distance, and the MUF-skip relation).",
        inOneBreath:
          "Frequency picks the mode: ground wave below ~2 MHz hugs the earth (surface wave, wavefront tilt from ground losses); sky waves 2-30 MHz bounce off the ionosphere (fc = 9·sqrt(Ne); MUF = fc·sec(i); skip distance = 2h'·sqrt((MUF/fc)^2 - 1) - 1039 km for fc 5, MUF 10, h' 300); space waves above 30 MHz run line-of-sight with radio horizon 4.12·sqrt(h) km, two-ray lobing, and the free-space budget 32.45 + 20log(f_MHz) + 20log(d_km) dB. The atmosphere bends (super-refraction ducts), absorbs (rain above 10 GHz), scatters (troposcatter to 500 km) and fades (multipath Rayleigh, diversity fixes).",
        sections: [
          {
            number: "5.1",
            title: "Electromagnetic waves, the environment and the modes of propagation",
            body: [
              "A plane wave in free space runs at c with E and H transverse and in phase, eta = 377 ohms, and power density S = EIRP/(4pi·r^2) - the inverse-square law that every propagation formula reduces to or departs from. The environment departs in three ways: ABSORPTION (lossy media convert wave energy to heat), REFLECTION (impedance discontinuities - the earth's surface chief among them), and REFRACTION (velocity gradients - the atmosphere's decreasing refractive index with height bends rays back toward earth, effectively enlarging the planet). Every propagation phenomenon in this unit is one of these three wearing different clothes at different altitudes.",
              "The modes of propagation partition the radio spectrum by which mechanism wins. GROUND WAVE (below ~2 MHz): the surface wave travels along the earth-air boundary, sustained by the earth's conductivity - the AM broadcast and maritime medium. SKY WAVE (2-30 MHz): refraction in the ionized ionosphere returns the wave to earth hundreds of kilometres away - shortwave broadcasting, HF communication. SPACE WAVE (above ~30 MHz): direct line-of-sight plus ground-reflected rays - FM, TV, cellular, satellite. The boundaries are soft (troposcatter bridges 300-500 km at VHF; ducting carries VHF abnormally far), but the partition is the unit's organizing table.",
              "The frequency-wavelength numbers anchor the modes: 1 MHz (AM) - lambda = 300 m, ground wave dominant; 10 MHz (HF) - 30 m, sky wave dominant; 100 MHz (FM) - 3 m, space wave dominant; 2.4 GHz (Wi-Fi) - 12.5 cm, space wave with heavy clutter interaction. A worked mode-selection: a 500 km link at 10 MHz must go sky wave (ground wave dies beyond a few hundred km over land; space wave needs a 3000 km line of sight); the design question becomes the ionosphere's state - which is section 5.7's business.",
              "The exam's 14-marker: state the three modes with their frequency ranges, the mechanism of each, and one service per mode; then classify given links by mode. The 7-marker: the environment's three effects with one example each, or the inverse-square statement with a numerical. The presentation discipline: a frequency-axis sketch with the mode bands marked is worth more than paragraphs - it shows the partition at a glance.",
            ],
            keyTerms: [
              { term: "Ground wave", definition: "Surface wave below ~2 MHz following the earth's curvature; AM and maritime service." },
              { term: "Sky wave", definition: "Ionospheric refraction returning 2-30 MHz waves to earth at long range." },
              { term: "Space wave", definition: "Direct + ground-reflected line-of-sight propagation above ~30 MHz." },
              { term: "Inverse-square law", definition: "S = EIRP/(4pi·r^2): free-space power density spreading." },
              { term: "Environment effects", definition: "Absorption, reflection, refraction - the three mechanisms every mode uses or suffers." },
            ],
            diagram: {
              kind: "fork",
              title: "Which mode carries the wave?",
              caption: "Frequency decides; the environment modifies.",
              start: "Link at frequency f",
              branches: [
                { label: "f < 2 MHz", outcome: "ground wave: surface wave follows the earth - AM, maritime, navigation", good: true },
                { label: "2-30 MHz", outcome: "sky wave: ionospheric hop, 100s-1000s of km - HF services", good: true },
                { label: "f > 30 MHz, LOS exists", outcome: "space wave: direct + reflected ray - FM, TV, cellular", good: true },
                { label: "f > 30 MHz, no LOS", outcome: "troposcatter or satellite relay - beyond-horizon bridging", good: true },
                { label: "Any f, through obstacles", outcome: "diffraction and multipath - the clutter reality of mobile links", good: false },
              ],
            },
            table: {
              caption: "The three propagation modes at a glance.",
              headers: ["Mode", "Frequency range", "Mechanism", "Range", "Services"],
              rows: [
                ["Ground wave", "30 kHz - 2 MHz", "surface wave on conductive earth", "100s of km", "AM broadcast, maritime, LORAN-era nav"],
                ["Sky wave", "2 - 30 MHz", "ionospheric refraction", "100-4000 km per hop", "shortwave broadcast, HF comms"],
                ["Space wave", "> 30 MHz", "direct + reflected rays", "line of sight (~horizon)", "FM, TV, cellular, satellite"],
                ["Troposcatter", "30 MHz - 5 GHz", "scattering from tropospheric turbulence", "300-500 km", "beyond-horizon military/backup links"],
              ],
            },
            bullets: [
              "Free-space baseline: S = EIRP/(4pi·r^2); every real mode departs from it.",
              "Ground wave below ~2 MHz: surface wave on the conductive earth.",
              "Sky wave 2-30 MHz: ionospheric refraction returns the energy to earth.",
              "Space wave above 30 MHz: direct plus ground-reflected rays, horizon-limited.",
              "Environment effects: absorption (rain), reflection (earth), refraction (atmosphere).",
              "Mode selection worked: 500 km at 10 MHz = sky wave; at 2 GHz = satellite relay.",
              "Sketch the frequency axis with mode bands - the unit's map.",
            ],
            callout: {
              type: "exam",
              title: "Classify, then compute",
              body: "Propagation questions begin with mode classification - one line: 'at 10 MHz and 500 km, sky wave.' Only then do the numbers make sense (which formula, which layer, which correction). Answers that compute before classifying usually apply the wrong formula entirely.",
            },
            examQuestions: [
              {
                q: "Explain the three modes of radio-wave propagation with their frequency ranges, mechanisms and typical services, and classify the following: (a) 1 MHz AM broadcast, (b) 15 MHz transoceanic link, (c) 2 GHz cellular, (d) 100 MHz 80 km hilltop link.",
                marks: 14,
                outline: [
                  "Ground wave: < 2 MHz, surface wave on the earth - AM, maritime",
                  "Sky wave: 2-30 MHz, ionospheric refraction - HF, shortwave",
                  "Space wave: > 30 MHz, direct + reflected LOS - FM, cellular, microwave",
                  "(a) ground wave; (b) sky wave; (c) space wave; (d) space wave (with diffraction over the hill)",
                  "Environment effects: absorption, reflection, refraction - one example each",
                  "Inverse-square baseline for all space-wave budgets",
                ],
              },
              {
                q: "State the effects of the environment on wave propagation with one numerical example of each: absorption, reflection and refraction.",
                marks: 7,
                outline: [
                  "Absorption: rain at 20 GHz adds ~1 dB/km... order of magnitude; dielectric heating",
                  "Reflection: ground-reflected ray interferes with the direct ray (5.3 lobes)",
                  "Refraction: atmospheric index gradient bends rays; effective earth radius 4/3 (5.4)",
                  "Each modifies the free-space baseline in a computable way",
                ],
              },
              {
                q: "Why does AM broadcast use the ground wave while FM broadcast uses the space wave?",
                marks: 7,
                outline: [
                  "AM at ~1 MHz: lambda 300 m - ionospheric D-layer absorption kills sky wave by day; ground wave follows the conductive earth reliably",
                  "FM at ~100 MHz: ground-wave losses are prohibitive at VHF; space wave from tall masts",
                  "The ionosphere is transparent above ~30 MHz - no hop available",
                  "Antenna sizes follow: quarter-wave 75 m (AM) vs 0.75 m (FM)",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Ground-wave propagation",
            body: [
              "The ground wave's engine is the SURFACE WAVE: a wave attached to the earth-air boundary, guided by it, decaying with height but surviving for hundreds of kilometres because the earth's finite conductivity continuously restores the wavefront that free space would let droop. Vertical polarization is mandatory - horizontal E-fields short-circuit into the ground within metres - and the wave's lower portion drags against the lossy earth, causing the WAVEFRONT TILT: the field tilts forward by an angle that grows with distance (reaching degrees-tens of degrees), converting part of the wave's energy into the ground (the loss mechanism that ultimately limits range). Tilting is worst over dry, rocky land and least over sea water - which is why maritime MF distances are legendary.",
              "The plane-earth reflection analysis underpins the picture: a wave grazing the earth arrives as direct ray + reflected ray, with the reflection coefficient depending on polarization, grazing angle and earth constants. At grazing incidence over good ground, the vertical-polarized reflection coefficient approaches -1 (the reflected ray inverts), and near the Brewster angle for vertical polarization the reflection nearly vanishes - the pseudo-Brewster effect that changes the two-ray interference pattern (section 5.3). The transition between SPACE WAVE and SURFACE WAVE: at short ranges the direct-plus-reflected (space) description works; beyond the horizon, the surface wave carries everything; the transition distance depends on frequency, height and ground constants - the exam wants the qualitative transition acknowledged with the frequency dependence stated (low f: surface wave dominates early; high f: space wave until the horizon, then nothing).",
              "Worked numbers frame the mode: a 1 MHz AM station over sea water (sigma ~ 4 S/m) reaches 300+ km by surface wave; over dry land (sigma ~ 0.001 S/m) the same transmitter struggles past 100 km - ground conductivity is the range currency, and broadcasters site near wet soil or salt marshes when they can. The tilt angle at 100 km over poor soil reaches several degrees, and the field-strength curves (CCIR/ITU ground-wave charts) are the practical tool: field in mV/m versus distance with curves per frequency and ground type - read, not derived, in the exam.",
              "The exam's 14-marker: explain the surface-wave mechanism, the wavefront tilt with its cause (finite ground conductivity) and its polarization consequence, and the space-to-surface-wave transition. The 7-marker: the vertical-polarization requirement (why horizontal dies), or the sea-vs-land range contrast. The phrase that earns marks: 'the ground is part of the antenna circuit at these frequencies' - the earth's return current IS the other conductor.",
            ],
            keyTerms: [
              { term: "Surface wave", definition: "The ground-attached component guided along the earth-air boundary; the AM medium." },
              { term: "Wavefront tilt", definition: "Forward tilt of the ground-wave front growing with distance - energy converted into lossy earth." },
              { term: "Plane earth reflection", definition: "Direct + reflected ray composition with polarization-dependent coefficients." },
              { term: "Pseudo-Brewster angle", definition: "Grazing angle where vertical-polarized reflection nearly vanishes over real ground." },
              { term: "Ground conductivity", definition: "Sea water ~4 S/m vs dry land ~0.001 S/m - the ground-wave range currency." },
            ],
            diagram: {
              kind: "compare",
              title: "Ground wave over sea versus land",
              caption: "Conductivity is the fuel of the surface wave.",
              left: {
                heading: "Sea water (sigma ~ 4 S/m)",
                items: [
                  "Minimal tilt: wavefront stays vertical",
                  "Low attenuation: hundreds of km at 1 MHz",
                  "Coastal MF stations exploit it",
                  "Reflection coefficient near -1 at grazing",
                ],
              },
              right: {
                heading: "Dry land (sigma ~ 0.001 S/m)",
                items: [
                  "Strong tilt: several degrees by 100 km",
                  "High attenuation: range shrinks below 100 km",
                  "Pseudo-Brewster effects reshape the pattern",
                  "Broadcasters seek wet soil or add radial screens",
                ],
              },
            },
            table: {
              caption: "Ground-wave range at 1 MHz by terrain (order of magnitude).",
              headers: ["Terrain", "Conductivity (S/m)", "Relative permittivity", "1 kW ERP range"],
              rows: [
                ["Sea water", "4", "80", "> 300 km"],
                ["Wet farmland", "0.01", "25", "~150 km"],
                ["Average land", "0.003", "15", "~100 km"],
                ["Dry, rocky", "0.001", "5", "< 80 km"],
                ["City / industrial", "0.0001-0.001", "5", "worst case"],
              ],
            },
            bullets: [
              "Surface wave: guided by the earth-air boundary; vertical polarization mandatory.",
              "Horizontal polarization short-circuits into the ground - dead within metres.",
              "Wavefront tilt grows with distance; tilt = the energy-loss mechanism into the earth.",
              "Sea water (4 S/m) sustains 300+ km at 1 MHz; dry land under 100 km.",
              "Plane-earth reflection: vertical-polarized coefficient tends to -1 at grazing; pseudo-Brewster null near specific angles.",
              "Transition: space-wave (direct+reflected) near the antenna, surface wave beyond the horizon.",
              "Practical tool: ITU ground-wave field-strength curves - read per frequency and terrain.",
            ],
            callout: {
              type: "warning",
              title: "Vertical or nothing",
              body: "Ground-wave answers must state the polarization requirement: horizontal polarization is absorbed within metres because the horizontal E-field drives current directly into the lossy earth. Vertical polarization rides the boundary with the earth as its return conductor. One sentence - but it is the sentence that separates ground-wave understanding from memorized range numbers.",
            },
            examQuestions: [
              {
                q: "Explain ground-wave (surface-wave) propagation: the guiding mechanism, the requirement of vertical polarization, and the tilt of the wavefront due to ground losses.",
                marks: 14,
                outline: [
                  "Surface wave attached to the earth-air boundary; earth as return conductor",
                  "Vertical polarization mandatory; horizontal E short-circuits into the ground",
                  "Lower portion of the wavefront drags in lossy earth",
                  "Tilt angle grows with distance: several degrees by ~100 km over poor soil",
                  "Tilt converts wave energy to ground loss - the range limiter",
                  "Conductivity contrast: sea 4 S/m (300+ km) vs dry land 0.001 S/m (<100 km)",
                  "Transition from space-wave to surface-wave regime with frequency",
                ],
              },
              {
                q: "Describe the plane-earth reflection of a grazing wave and the pseudo-Brewster angle effect for vertical polarization.",
                marks: 7,
                outline: [
                  "Direct + reflected rays compose near the ground",
                  "Vertical-pol reflection coefficient tends to -1 at grazing incidence",
                  "Near the pseudo-Brewster angle the reflection magnitude drops sharply",
                  "Two-ray interference lobes (5.3) change shape accordingly",
                  "Real-earth losses make the coefficient complex - phase shift included",
                ],
              },
              {
                q: "Why do MF maritime stations achieve far greater ranges than inland stations on the same power?",
                marks: 7,
                outline: [
                  "Sea water conductivity ~4 S/m: minimal wavefront tilt, low loss",
                  "Dry land ~0.001 S/m: strong tilt, rapid energy drain",
                  "Surface-wave attenuation scales inversely with conductivity",
                  "Broadcasters site near coasts/wet soil or install radial ground screens",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Space-wave propagation",
            body: [
              "Above 30 MHz the wave travels as a SPACE WAVE: the direct ray plus the ground-reflected ray, both roughly line-of-sight. The field-strength relation for the two-ray model over flat earth: E is proportional to sqrt(Pt·Gt)·ht·hr/d^2 - the field grows with the PRODUCT of antenna heights and falls with the inverse square of distance, which makes the received power fall as d^-4 beyond the breakpoint - the two-ray model's 40 dB/decade. Near the transmitter, direct and reflected rays interfere into LOBES: maxima where the path difference is odd multiples of lambda/2, nulls where even - the interference-zone lobe structure that antenna installers battle with height adjustments.",
              "Earth curvature limits everything. The radio horizon of an antenna of height h over the 4/3-effective-radius earth (standard refraction): d = 4.12·sqrt(h) km (h in metres). Worked: a 30 m tower sees 22.6 km; adding a 2 m rooftop receiver extends it to 4.12·(sqrt(30) + sqrt(2)) = 28.5 km - the sum-of-square-roots law for the total LOS distance. Beyond the horizon, the SHADOWING effect of hills and buildings adds diffraction loss (knife-edge model: 6 dB at grazing, ~0.5 dB/m of obstruction height at moderate angles), and terrain irregularities scatter into the shadow zone - mobile propagation's fundamental reality.",
              "The height question is a lobe question: field strength versus receiver height oscillates (the two-ray lobes) until the first null passes below the antenna, after which power grows as h^2 until the free-space regime. Worked lobe calculation at 1 GHz over flat ground (ht = 30 m, hr variable): first maximum at hr = lambda·d/(4·ht) = 0.3·1000/(4·30)·... for d = 1 km: hr = 0.3·1000/120 = 2.5 m - the cellular design fact that base-station antenna heights set the lobe spacing consumers experience. Atmospheric absorption adds its piece: below 10 GHz negligible; above, rain (1 dB/km at 20 GHz, ~10 dB/km at 80 GHz) and the oxygen/water-vapour lines (60 GHz, 22 GHz) shape band selection.",
              "The exam's 14-marker: derive/state the two-ray field-strength relation, compute radio horizons with the 4.12 formula for BOTH antenna heights, and explain the interference zone and shadowing with the knife-edge numbers. The 7-marker: the horizon calculation, the d^-4 two-ray law with its breakpoint, or the height-lobe structure. The sketch - two rays to the receiver with the path difference delta marked at the ground - underlies every number here; add the 4/3 effective radius note and the answer is complete. One habit seals the section: always name the model you are using (free space, two-ray, knife-edge) before computing, because each carries a different exponent.",
            ],
            keyTerms: [
              { term: "Two-ray (flat earth) model", definition: "Direct + reflected ray; beyond the breakpoint Pr ∝ ht^2·hr^2/d^4." },
              { term: "Radio horizon", definition: "d = 4.12·sqrt(h) km per antenna (4/3 earth); total = sum of the two sqrt terms." },
              { term: "Interference zone", definition: "Direct-reflected lobe structure: maxima at odd lambda/2 path differences." },
              { term: "Shadowing", definition: "Knife-edge diffraction loss behind hills and buildings: ~6 dB at grazing." },
              { term: "Atmospheric absorption", definition: "Rain ~1 dB/km at 20 GHz; oxygen line at 60 GHz; water at 22 GHz." },
            ],
            diagram: {
              kind: "flow",
              title: "The two-ray geometry",
              caption: "Path difference between direct and reflected rays builds the lobes.",
              steps: [
                { label: "Transmitter", note: "height ht above flat earth" },
                { label: "Direct ray", note: "straight line to the receiver" },
                { label: "Reflected ray", note: "bounces at the ground plane; coefficient R" },
                { label: "Path difference", note: "delta ≈ 2·ht·hr/d for d >> heights" },
                { label: "Lobes", note: "delta = odd lambda/2: maxima; even lambda/2: nulls" },
                { label: "Far limit", note: "power ~ ht^2·hr^2/d^4 beyond the breakpoint" },
              ],
            },
            table: {
              caption: "Radio horizons (d = 4.12·sqrt(h) km, 4/3 earth).",
              headers: ["Antenna height", "Horizon (km)", "Typical service"],
              rows: [
                ["1.5 m (handset)", "5.0", "to a 30 m tower: 27.6 km total"],
                ["2 m (rooftop)", "5.8", "TV reception reach"],
                ["10 m (roof mast)", "13.0", "small FM/TV stations"],
                ["30 m (broadcast tower)", "22.6", "regional coverage"],
                ["300 m (skyscraper mount)", "71.3", "metro microwave"],
              ],
            },
            bullets: [
              "Space wave = direct ray + ground-reflected ray, both near line-of-sight.",
              "Two-ray law beyond the breakpoint: power falls as d^-4 (40 dB/decade), scaling as ht^2·hr^2.",
              "Radio horizon: 4.12·sqrt(h) km per end over the 4/3 earth; total is the sum.",
              "Worked: 30 m tower + 2 m receiver = 4.12·(5.48 + 1.41) = 28.4 km LOS.",
              "Interference lobes: path difference 2·ht·hr/d sets maxima and nulls with height.",
              "Shadowing: knife-edge diffraction ~6 dB at grazing plus ~0.5 dB/m of obstruction.",
              "Absorption enters above 10 GHz: rain, oxygen (60 GHz), water vapour (22 GHz).",
            ],
            callout: {
              type: "exam",
              title: "Sum the square roots",
              body: "Horizon numericals are two sqrt calls added: d_total = 4.12·(sqrt(h1) + sqrt(h2)). Forgetting the second antenna's term is the classic slip - a 30 m tower alone sees 22.6 km, but the 2 m receiver adds 5.8 more. State the formula with BOTH heights.",
            },
            examQuestions: [
              {
                q: "Derive the two-ray field-strength relation over flat earth and explain the interference-zone lobes and the d^-4 far-field behaviour.",
                marks: 14,
                outline: [
                  "Direct ray + reflected ray with coefficient R ≈ -1 at grazing",
                  "Path difference delta ≈ 2·ht·hr/d for d >> antenna heights",
                  "Field = direct + reflected: E ∝ (1/d)·|1 - e^(-j·2pi·delta/lambda)|",
                  "Lobes: delta = (2m+1)·lambda/2 maxima; delta = m·lambda nulls",
                  "Far from the transmitter (delta << lambda): E ∝ ht·hr/d^2 - power d^-4",
                  "Breakpoint distance db = 4·ht·hr/lambda divides the regimes",
                  "Height-gain: power grows as hr^2 in the two-ray regime",
                ],
              },
              {
                q: "Compute the maximum line-of-sight distance between a 30 m broadcast tower and a 2 m rooftop antenna over the 4/3 earth, and state why refraction is included.",
                marks: 7,
                outline: [
                  "d = 4.12·(sqrt(30) + sqrt(2)) = 4.12·(5.48 + 1.41) = 28.4 km",
                  "The 4/3 effective radius comes from standard atmospheric refraction bending rays downward",
                  "Standard atmospheric gradient bends rays downward, extending the horizon",
                  "Super-refraction (5.4) extends further; sub-refraction shortens",
                ],
              },
              {
                q: "Explain the shadowing effect of a hill and estimate the diffraction loss for a knife-edge just grazing the LOS path.",
                marks: 7,
                outline: [
                  "Obstruction interrupts the direct ray; diffraction feeds the shadow zone",
                  "Knife-edge model: loss = f(h/theta parameters)",
                  "At grazing incidence (h = 0): 6 dB loss",
                  "Each further metre of obstruction adds ~0.5-1 dB at moderate angles",
                  "Terrain scattering partially fills the deep shadow - mobile reality",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "The imperfect earth, the atmosphere, super-refraction and fading",
            body: [
              "IMPERFECT EARTH changes every ground-adjacent formula: reflection coefficients become complex (amplitude loss + phase shift), the pseudo-Brewster angle shifts, and the surface wave's tilt grows. The two-ray lobes soften - nulls fill in because the reflected ray loses strength - which mobile systems quietly exploit: what the ideal model calls a null, the lossy earth turns into a mere dip. For sky-wave and ground-wave work, ground constants enter the very definitions (sections 5.2, 5.6); for space-wave budgets, imperfect-earth corrections live inside empirical path-loss models.",
              "The ATMOSPHERE refracts: the refractive index falls with altitude (about 39 N-units per km at the surface), bending rays down and enlarging the effective earth radius to 4/3 R under standard conditions. SUPER-REFRACTION - when the index falls faster than normal (temperature inversions over warm seas, humectant coastal layers) - curves rays more sharply than the earth itself, trapping them in a DUCT: VHF/UHF signals carry 1000+ km along the duct (the 'tropospheric ducting' that makes distant FM/TV appear sporadically). Sub-refraction (the opposite gradient) shortens horizons. Scattering: beyond the horizon, turbulent tropospheric eddies scatter energy forward - TROPOSCATTER links bridge 300-500 km at VHF/UHF with path losses of 150-250 dB, the original beyond-horizon military backbone before satellites.",
              "FADING is the time-varying sum of all of the above. Multipath fading: several delayed copies of the signal add vectorially; as the geometry breathes (ionospheric motion, tropospheric drift, a moving vehicle), the resultant swings - fast fades of 20-40 dB with a Rayleigh amplitude distribution in mobile scenarios, slower fades over ionospheric paths (section 5.7). Mitigations are the standard toolbox: DIVERSITY (space, frequency, polarization, time - two independently faded branches beaten by selection or combining), fade margins (10-30 dB budgeted in link designs), and adaptive equalization/OFDM in modern systems. The exam's favourite numerical: a Rayleigh-faded link needs a margin for 99 percent reliability of about 20 dB - state the requirement, then the budget.",
              "The exam's 14-marker: explain super-refraction and ducting with the effective-radius picture, describe troposcatter with its loss scale, and classify fading types with mitigations. The 7-marker: the 4/3-earth statement with its index-gradient cause, or the diversity principle. The sketch - normal ray, super-refracted trapped ray, duct boundaries - turns the abstract into the marked diagram that earns the marks.",
            ],
            keyTerms: [
              { term: "Effective earth radius", definition: "4/3 R under standard refraction: index gradient bends rays toward earth." },
              { term: "Super-refraction / duct", definition: "Index falling faster than normal traps VHF/UHF waves in a tropospheric duct - 1000+ km paths." },
              { term: "Troposcatter", definition: "Forward scattering from tropospheric turbulence; 300-500 km links, 150-250 dB loss." },
              { term: "Multipath fading", definition: "Vector sum of delayed copies: Rayleigh-distributed fast fades of 20-40 dB." },
              { term: "Diversity", definition: "Space/frequency/polarization/time branches combined to defeat independent fades." },
            ],
            diagram: {
              kind: "compare",
              title: "Normal refraction versus super-refraction",
              caption: "The index gradient decides whether rays escape or get trapped.",
              left: {
                heading: "Standard (4/3 earth)",
                items: [
                  "Index falls ~39 N-units/km",
                  "Rays bend less than the earth curves",
                  "Horizon extended: 4.12·sqrt(h) km",
                  "Normal microwave link design",
                ],
              },
              right: {
                heading: "Super-refraction (duct)",
                items: [
                  "Index falls faster than the earth curves",
                  "Rays trapped between duct boundaries",
                  "VHF/UHF carries 1000+ km",
                  "Sporadic long-haul FM/TV reception",
                ],
              },
            },
            table: {
              caption: "Fading types and the standard mitigations.",
              headers: ["Fading", "Cause", "Timescale", "Mitigation"],
              rows: [
                ["Multipath fast fading", "moving geometry, reflections", "ms - s", "space/frequency diversity, OFDM, equalization"],
                ["Shadow (slow) fading", "buildings, terrain", "seconds - minutes", "fade margin, handover"],
                ["Ionospheric multipath", "multiple sky-wave hops (5.7)", "seconds", "frequency agility, narrowband filters"],
                ["Rain fade", "absorption events", "minutes", "adaptive power, site diversity (above 10 GHz)"],
                ["Duct-related enhancement", "super-refraction", "hours", "not a defect - exploit or guard"],
              ],
            },
            bullets: [
              "Imperfect earth: complex reflection coefficients, filled nulls, shifted Brewster angle.",
              "Standard atmosphere: 4/3 effective earth radius; horizon 4.12·sqrt(h) km.",
              "Super-refraction (inversions) traps waves in ducts: VHF/UHF 1000+ km paths.",
              "Troposcatter: turbulence scatters energy beyond the horizon; 300-500 km, 150-250 dB loss.",
              "Multipath fading: Rayleigh-distributed 20-40 dB swings in mobile scenarios.",
              "Diversity: two independent branches (space/frequency/pol/time) beat one faded branch.",
              "Fade margins 10-30 dB budgeted per reliability target (~20 dB for 99 percent Rayleigh).",
            ],
            callout: {
              type: "tip",
              title: "The 4/3 story in one breath",
              body: "Effective-earth-radius questions want the causal chain, not just the number: refractive index falls with height -> rays bend downward -> rays curve more gently than the earth does -> the earth acts as if 4/3 larger. Write the four links; the 4.12 constant then follows without explanation needed.",
            },
            examQuestions: [
              {
                q: "Explain super-refraction and tropospheric ducting with their causes, and describe tropospheric scatter propagation with its range and loss scales.",
                marks: 14,
                outline: [
                  "Normal gradient: index falls ~39 N-units/km -> 4/3 effective radius",
                  "Super-refraction: faster gradient (temperature inversion, humid layer over warm sea)",
                  "Rays curve more than the earth: trapped in a duct between boundaries",
                  "VHF/UHF carried 1000+ km - sporadic long-distance FM/TV",
                  "Troposcatter: turbulent eddies scatter energy forward beyond the horizon",
                  "300-500 km links at 150-250 dB path loss - pre-satellite military backbone",
                  "Both are atmospheric refraction/scattering phenomena - not ionospheric",
                ],
              },
              {
                q: "Define multipath fading, state the Rayleigh distribution's role in mobile propagation, and explain how diversity mitigates it.",
                marks: 7,
                outline: [
                  "Several delayed copies add vectorially; geometry changes the sum",
                  "Amplitude distribution Rayleigh in a rich-scattering environment",
                  "Deep fades 20-40 dB, milliseconds to seconds",
                  "Diversity: independent branches (space, frequency, polarization, time)",
                  "Selection or combining turns two faded branches into a stable channel",
                ],
              },
              {
                q: "How does an imperfect earth modify the two-ray interference pattern of section 5.3?",
                marks: 7,
                outline: [
                  "Reflection coefficient becomes complex: amplitude < 1, phase shift",
                  "Reflected ray weaker: interference nulls fill in",
                  "Lobe contrast reduces; the ideal null becomes a dip",
                  "Brewster-angle behaviour shifts with ground constants",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Path loss calculations",
            body: [
              "The free-space link budget is the baseline every path is measured against. Friis: Pr = Pt·Gt·Gr·(lambda/(4pi·d))^2; in dB: FSPL = 32.45 + 20·log10(f_MHz) + 20·log10(d_km) - the formula every wireless engineer carries. Worked budget: a 2.4 GHz link over 5 km: FSPL = 32.45 + 20·log10(2400) + 20·log10(5) = 32.45 + 67.6 + 14.0 = 114 dB. With Pt = 20 dBm, Gt = Gr = 20 dBi dishes: Pr = 20 + 20 + 20 - 114 = -54 dBm - comfortable above any receiver's sensitivity. The dB arithmetic (add gains, subtract losses) is the whole craft of link budgets.",
              "Beyond free space, the terrain adds its own exponent. The two-ray model (5.3) gives 40 dB/decade beyond the breakpoint d_break = 4·ht·hr/lambda; urban empirical models (Hata, COST-231) interpolate between - the mobile path loss near 900 MHz over a few km lands around 120-140 dB with 35-40 dB/decade slope. Indoor and cluttered paths run steeper still (the '30-50 dB per decade' reality of 5G small cells). The worked contrast at 1 GHz: free space from 1 to 10 km adds 20 dB; two-ray beyond breakpoint adds 40 dB; urban models add ~36 dB - the exponent choice IS the propagation claim.",
              "The complete budget stacks every correction the unit has introduced: FSPL + shadowing margin (log-normal, ~8-12 dB for 90 percent edge coverage) + fade margin (Rayleigh, ~20 dB for 99 percent, section 5.4) + diffraction loss over terrain (5.3) + atmospheric/rain (5.4) - minus antenna gains and cable losses. Worked cellular-flavour budget: 43 dBm TX, 17 dBi TX antenna, -2 dB cable, 138 dB path (model), 0 dBi mobile, sensitivity -104 dBm: received = 43 + 17 - 2 - 138 = -80 dBm; margin to sensitivity = 24 dB - covering shadow and fade allowances with room left. This stack is exactly what 'perform the link budget' means on an RGPV paper.",
              "The exam's 14-marker: state Friis, convert to the FSPL formula with the units inside the log arguments, and compute a full budget with shadow and fade margins in a two-column table. The 7-marker: the FSPL numerical alone, or the breakpoint/exponent comparison between free space and the two-ray law. Presentation discipline: gains above, losses below, margin as the last line with a verdict word ('adequate', 'marginal', 'insufficient') - the format examiners can mark in seconds. The units slip is the classic failure: MHz against GHz, km against m, one wrong factor of ten moves the answer 20 dB and the verdict with it.",
            ],
            keyTerms: [
              { term: "Friis equation", definition: "Pr = Pt·Gt·Gr·(lambda/4pi·d)^2 - the free-space baseline." },
              { term: "FSPL formula", definition: "32.45 + 20log10(f_MHz) + 20log10(d_km) dB." },
              { term: "Two-ray exponent", definition: "40 dB/decade beyond d_break = 4·ht·hr/lambda." },
              { term: "Shadow margin", definition: "Log-normal allowance 8-12 dB for 90 percent edge coverage." },
              { term: "Fade margin", definition: "Multipath allowance ~20 dB for 99 percent reliability (Rayleigh)." },
            ],
            diagram: {
              kind: "flow",
              title: "The link-budget chain",
              caption: "Every term in dB - add gains, subtract losses, keep the margin positive.",
              steps: [
                { label: "Transmitter", note: "Pt in dBm (e.g. 43 dBm = 20 W)" },
                { label: "TX gain - losses", note: "antenna gain, cable, connector" },
                { label: "Path loss", note: "FSPL + diffraction + clutter + rain" },
                { label: "RX gain - losses", note: "receiver antenna and line" },
                { label: "Margin", note: "received - sensitivity - shadows - fades >= 0" },
              ],
            },
            table: {
              caption: "Path-loss exponents: the model decides the claim.",
              headers: ["Environment", "Distance exponent", "1-10 km increment", "Source"],
              rows: [
                ["Free space", "20 dB/decade", "+20 dB", "Friis"],
                ["Two-ray (open, beyond breakpoint)", "40 dB/decade", "+40 dB", "flat-earth geometry"],
                ["Suburban mobile", "~35 dB/decade", "+35 dB", "Hata/COST-231"],
                ["Urban mobile", "~38 dB/decade", "+38 dB", "Hata urban"],
                ["Indoor cluttered", "40-50 dB/decade", "+45 dB", "empirical"],
              ],
            },
            bullets: [
              "Friis: Pr = Pt·Gt·Gr·(lambda/4pi·d)^2; FSPL = 32.45 + 20log f(MHz) + 20log d(km).",
              "Worked: 2.4 GHz at 5 km = 114 dB; +20/20 dBi dishes on 20 dBm -> -54 dBm.",
              "Two-ray beyond breakpoint: 40 dB/decade, scaling ht^2·hr^2.",
              "Mobile empirical models: 35-40 dB/decade; indoor steeper.",
              "Margins: shadow 8-12 dB (90 percent edge), fade ~20 dB (99 percent).",
              "Worked cellular budget: -80 dBm received, 24 dB margin over -104 dBm sensitivity.",
              "Budget table format: gains up, losses down, margin last.",
            ],
            callout: {
              type: "exam",
              title: "The 32.45 formula is the scorer",
              body: "FSPL numericals are free marks IF the formula is stated exactly: 32.45 + 20log10(f in MHz) + 20log10(d in km). Half the lost marks in link questions come from mixing MHz/GHz or km/m. Write the units inside the formula line and substitute carefully.",
            },
            examQuestions: [
              {
                q: "Derive the Friis transmission equation and convert it to the FSPL formula. Compute the received power for a 2.4 GHz, 5 km link with 20 dBm transmit power and 20 dBi antennas at each end.",
                marks: 14,
                outline: [
                  "Friis: Pr = Pt·Gt·Gr·(lambda/4pi·d)^2 from aperture capture (2.3)",
                  "In dB: Pr = Pt + Gt + Gr - FSPL",
                  "FSPL = 32.45 + 20log10(2400) + 20log10(5)",
                  "= 32.45 + 67.6 + 14.0 = 114 dB",
                  "Pr = 20 + 20 + 20 - 114 = -54 dBm",
                  "EIRP check: 20 + 20 = 40 dBm; isotropic at 5 km: 40 - 114 = -74 dBm + 20 dBi RX",
                ],
              },
              {
                q: "Compare the free-space and two-ray path-loss laws: exponents, breakpoint distance and the physical reason for the difference.",
                marks: 7,
                outline: [
                  "Free space: 20 dB/decade - spherical spreading only",
                  "Two-ray beyond breakpoint: 40 dB/decade",
                  "Breakpoint: db = 4·ht·hr/lambda",
                  "Reason: destructive ground reflection adds a second inverse-d factor",
                  "Scaling as ht^2·hr^2: taller antennas push the breakpoint out",
                ],
              },
              {
                q: "A cellular link has Pt = 43 dBm, TX antenna 17 dBi, cable 2 dB, path loss 138 dB, mobile antenna 0 dBi, sensitivity -104 dBm. Compute the received power and margin, and state what the margin must cover.",
                marks: 7,
                outline: [
                  "Received: 43 + 17 - 2 - 138 + 0 = -80 dBm",
                  "Margin: -80 - (-104) = 24 dB",
                  "Covers: shadow fading 8-12 dB + multipath fade ~10-15 dB",
                  "Verdict: adequate for 90 percent edge / high in-vehicle reliability",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "The ionosphere and the sky-wave mechanism",
            body: [
              "The ionosphere is the sun-ionized shell of the upper atmosphere, layered by the competing rates of ionization and recombination. The D layer (60-90 km): ionized only in daylight, absorbs MF/HF (the AM-broadcast daytime range collapse) - an absorber, not a reflector. The E layer (90-130 km): weak reflector, and the source of sporadic-E - thin, intensely ionized clouds that briefly reflect VHF (the mystery 2000 km FM reception). The F layer (150-400 km): the sky-wave workhorse, splitting into F1 and F2 by day; F2 survives the night, holding HF paths open worldwide after sunset (the classic nighttime shortwave skip).",
              "The sky-wave MECHANISM is refraction, not mirror reflection: an HF wave entering the ionized layer encounters free electrons that slow... the wave's phase velocity changes, and the ray bends continuously (Snell's law through the gradient) until - if the frequency is low enough for the local electron density - it bends back toward earth. The critical condition: for a vertically launched wave, reflection occurs where the plasma frequency equals the wave frequency: fc = 9·sqrt(Ne) with Ne in electrons/m^3 (fc in Hz; fc(MHz) = 9·sqrt(Ne/10^12)). Worked: an F2 layer with peak density Ne = 10^12 m^3... 10^12/m^3 reflects vertical waves up to fc = 9 MHz; Ne = 4 x 10^12 gives fc = 18 MHz. Above fc, the wave pierces the layer into space - the reason frequencies above ~30 MHz never sky-hop (F2 densities rarely exceed a few 10^12).",
              "The ray path picture completes the mechanism: obliquely launched waves need LESS density to reflect (the ray meets the layer at an angle and can turn before reaching the peak density), so the OBLIQUE incidence reflection happens below the layer peak - and the VIRTUAL HEIGHT (the height of the equivalent reflecting mirror) is what ionosondes report and propagation software consumes. Higher launch angles penetrate deeper for the same frequency; too shallow (too high an angle from vertical... too oblique) and the ray reflects from low density at great range; too vertical and it needs the full peak density. The exam's 14-marker: describe the layers with their height ranges and roles, state the refraction mechanism with Snell's-law bending, and apply fc = 9·sqrt(Ne). The 7-marker: the day-night layer behaviour (D absorption, F2 persistence) or the plasma-frequency calculation.",
              "Presentation discipline: the layer stack sketch (D, E, F1, F2 with heights and day/night notes) is mandatory; the fc calculation is two lines; the ray-path sketch with the bending marked inside the layer closes the mechanism answer. The phrase 'refraction until the plasma frequency equals the wave frequency' is the technical heart - write it verbatim.",
            ],
            keyTerms: [
              { term: "D layer", definition: "60-90 km, daytime only: absorbs MF/HF - the AM daytime range collapse." },
              { term: "E layer", definition: "90-130 km: weak reflector; sporadic-E clouds reflect VHF briefly." },
              { term: "F2 layer", definition: "150-400 km: the HF workhorse; persists at night, holding paths open." },
              { term: "Plasma frequency", definition: "fc = 9·sqrt(Ne) Hz (Ne in m^-3): the vertical-incidence reflection condition." },
              { term: "Virtual height", definition: "Height of the equivalent mirror that would reflect the wave - what ionosondes measure." },
            ],
            diagram: {
              kind: "layers",
              title: "The ionosphere, top down as the wave meets it",
              caption: "Each layer is a different frequency door - and the doors change at sunset.",
              layers: [
                { label: "F2 layer (150-400 km)", note: "the HF workhorse; survives night; fc up to ~10-15 MHz typical" },
                { label: "F1 layer (150-200 km, day)", note: "merges with F2 at night" },
                { label: "E layer (90-130 km)", note: "weak reflector; sporadic-E reflects VHF in patches" },
                { label: "D layer (60-90 km, day)", note: "absorbs MF/HF - vanishes at sunset, range returns" },
                { label: "Earth", note: "the hop's landing zone: 100-4000 km from the transmitter" },
              ],
            },
            table: {
              caption: "Ionospheric layers and their propagation roles.",
              headers: ["Layer", "Height (km)", "Present", "Role in propagation"],
              rows: [
                ["D", "60-90", "day only", "absorbs MF/HF (AM range collapses by day)"],
                ["E", "90-130", "day, weak at night", "weak HF reflection; sporadic-E reflects VHF"],
                ["F1", "150-200", "day", "secondary HF reflector, merges into F2 at night"],
                ["F2", "200-400", "always", "primary HF reflector; night-time path keeper"],
              ],
            },
            bullets: [
              "Sky wave = refraction in the ionized gradient: Snell's law bends the ray until it returns.",
              "Reflection condition: wave frequency = local plasma frequency fc = 9·sqrt(Ne).",
              "Worked: Ne = 10^12/m^3 -> fc = 9 MHz; 4 x 10^12 -> 18 MHz.",
              "Above ~30 MHz nothing sky-hops: F2 peak densities cannot bend them back.",
              "D layer: daytime absorber - AM broadcast range collapses by day, returns at sunset.",
              "F2 layer persists at night: HF paths stay open worldwide after dark.",
              "Virtual height: the equivalent mirror height - ionosonde output, MUF input (5.7).",
            ],
            callout: {
              type: "exam",
              title: "Refraction, not reflection",
              body: "The sky-wave mechanism mark hinges on one word: REFRACTION. The wave bends continuously through the electron-density gradient (Snell's law layer by layer) and returns only where the plasma frequency matches. Answers that say 'the ionosphere reflects like a mirror' lose the mechanism - the layer is a gradient medium, not a metal sheet.",
            },
            examQuestions: [
              {
                q: "Describe the structure of the ionosphere (layers, heights, day/night behaviour) and explain the sky-wave propagation mechanism as refraction, with the plasma-frequency condition.",
                marks: 14,
                outline: [
                  "D layer 60-90 km, daytime: absorbs MF/HF",
                  "E layer 90-130 km: weak reflection; sporadic-E reflects VHF",
                  "F1/F2 150-400 km: the HF reflectors; F2 survives night",
                  "Mechanism: Snell's-law refraction through the electron-density gradient",
                  "Ray bends until the local plasma frequency equals the wave frequency",
                  "fc = 9·sqrt(Ne): Ne = 10^12/m^3 gives 9 MHz",
                  "Oblique incidence reflects below the peak - virtual height concept",
                ],
              },
              {
                q: "Compute the critical frequency for peak electron densities of (a) 10^12/m^3 and (b) 4 x 10^12/m^3, and state the consequence for HF design.",
                marks: 7,
                outline: [
                  "fc = 9·sqrt(Ne) Hz",
                  "(a) 9·sqrt(10^12) = 9 MHz",
                  "(b) 9·sqrt(4 x 10^12) = 18 MHz",
                  "Consequence: vertical incidence reflects up to fc; higher waves penetrate",
                  "Oblique paths reflect at higher frequencies (MUF, 5.7)",
                ],
              },
              {
                q: "Why does AM broadcast coverage collapse during the day while shortwave links open after dark?",
                marks: 7,
                outline: [
                  "Day: D layer (60-90 km) absorbs MF/HF - AM's 1 MHz sky wave dies; ground wave only",
                  "Night: D layer recombines in minutes after sunset",
                  "F2 remains - HF sky waves hop worldwide at night",
                  "The famous AM 'skywave by night' distant reception is F2/E reflection of MF",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Sky-wave system parameters: critical frequency, MUF, LUF, virtual height and skip distance",
            body: [
              "Turning the ionosphere into a link design needs five parameters, and their definitions interlock. CRITICAL FREQUENCY fc: the highest frequency reflected at VERTICAL incidence for a layer (fc = 9·sqrt(Nmax)). MUF (maximum usable frequency): the highest frequency that OBLIQUE incidence over a given path can reflect - MUF = fc·sec(i), where i is the angle of incidence on the layer (from the normal); oblique rays reflect at lower densities, so MUF > fc always (factor 2-4 in practice). LUF (lowest usable frequency): the lowest frequency the path supports BEFORE absorption eats it - set by D-layer absorption (daytime) and equipment, below which the signal arrives too weak. OF/OWF (optimum working frequency): the engineering choice ~0.85·MUF, leaving margin against layer fluctuations.",
              "VIRTUAL HEIGHT h': the ionosonde-measured height of the equivalent reflecting mirror - the real ray penetrates deeper, but all range mathematics uses h'. SKIP DISTANCE: the minimum ground range at which a given frequency returns - rays launched more steeply than the critical angle pierce the layer and are lost to the sky; the ground inside the skip zone receives NOTHING from the sky wave (only ground wave). The relation between MUF and skip distance for a layer of virtual height h': D_skip = 2·h'·sqrt((MUF/fc)^2 - 1) - equivalently, the ray that just reaches the skip edge has incidence angle i with tan(i) = (D/2)/h'.",
              "The worked numerical that anchors every exam set: fc = 5 MHz, MUF = 10 MHz, virtual height 300 km. Skip distance: D = 2·300·sqrt((10/5)^2 - 1) = 600·sqrt(3) = 1039 km. So frequencies at 10 MHz return no closer than 1039 km; a receiver 500 km away at 10 MHz is in the skip zone - silent except ground wave. Lower the frequency to 8 MHz: the required density falls, reflection happens lower and more steeply, and the skip distance shrinks (8 MHz: D = 600·sqrt((8/5)^2 - 1) = 600·1.53 = 919 km). The design sequence for an HF link: measure fc and h' (ionosonde), compute MUF = fc·sec(i) for the path geometry, verify LUF via absorption tables, choose OF = 0.85·MUF, and check the receiver lies beyond the skip distance.",
              "The exam's 14-marker: define all five parameters, derive/state MUF = fc·sec(i) and the skip-distance relation, and run the worked numerical. The 7-marker: the MUF-skip relation derivation (two-line geometry), or the OF = 0.85·MUF engineering rationale. The sketch: transmitter, bent ray inside the layer, virtual-height mirror line, skip zone marked on the ground - the picture that makes the algebra obvious.",
            ],
            keyTerms: [
              { term: "MUF", definition: "fc·sec(i) for incidence angle i: the oblique-path maximum usable frequency." },
              { term: "LUF", definition: "Lowest usable frequency: absorption (D layer, daytime) sets the floor." },
              { term: "OWF / OF", definition: "Optimum working frequency ~0.85·MUF: engineering margin against layer drift." },
              { term: "Virtual height", definition: "Equivalent mirror height h' from the ionosonde; the geometry quantity." },
              { term: "Skip distance", definition: "D = 2·h'·sqrt((MUF/fc)^2 - 1): minimum ground range for sky-wave return." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Designing an HF sky-wave link",
              caption: "From ionosonde to working frequency in five moves.",
              stages: [
                { label: "Ionosonde", note: "measures fc and virtual height h'" },
                { label: "Path geometry", note: "incidence angle i from path length and h'" },
                { label: "MUF", note: "= fc·sec(i)" },
                { label: "LUF check", note: "absorption tables (D layer, daytime) set the floor" },
                { label: "Choose OF", note: "0.85·MUF; verify receiver beyond skip distance" },
              ],
            },
            table: {
              caption: "Skip-distance worked table (h' = 300 km, fc = 5 MHz).",
              headers: ["Frequency", "MUF/fc", "sqrt((MUF/fc)^2 - 1)", "Skip distance (km)"],
              rows: [
                ["5 MHz (= fc)", "1.0", "0", "0 (vertical return)"],
                ["8 MHz", "1.6", "1.25", "748"],
                ["10 MHz", "2.0", "1.73", "1039"],
                ["12 MHz", "2.4", "2.18", "1310"],
                ["15 MHz", "3.0", "2.83", "1697"],
              ],
            },
            bullets: [
              "fc = 9·sqrt(Nmax): vertical-incidence reflection limit of the layer.",
              "MUF = fc·sec(i): oblique incidence reflects at lower density - MUF > fc.",
              "LUF: set by D-layer absorption (daytime) and receiver noise; OF = 0.85·MUF.",
              "Virtual height h': the equivalent mirror; ionosondes report it.",
              "Skip distance: D = 2·h'·sqrt((MUF/fc)^2 - 1); inside it, no sky wave.",
              "Worked: fc = 5 MHz, MUF = 10 MHz, h' = 300 km -> skip 1039 km.",
              "Geometry link: tan(i) = (D/2)/h' ties MUF and skip distance in one figure.",
            ],
            callout: {
              type: "exam",
              title: "The sqrt(3) classic",
              body: "The fc = 5, MUF = 10, h' = 300 skip numerical appears in some form nearly every year: D = 600·sqrt(4 - 1) = 1039 km. Memorize the setup AND the geometry sentence - 'tan(i) = (D/2)/h' with MUF = fc·sec(i)' - so any variation (different fc, h', or asked for MUF given skip) is one substitution away.",
            },
            examQuestions: [
              {
                q: "Define critical frequency, MUF, LUF, OF and virtual height, derive the relation MUF = fc·sec(i), and explain how MUF and skip distance are related.",
                marks: 14,
                outline: [
                  "fc: vertical-incidence limit, 9·sqrt(Nmax)",
                  "Oblique ray meets lower density: reflects at frequencies above fc",
                  "Snell geometry: sin(i)·sqrt(...) -> MUF = fc/cos(i) = fc·sec(i)",
                  "LUF: absorption floor (D layer daytime)",
                  "OF = 0.85·MUF: margin against layer drift",
                  "Virtual height h': equivalent mirror for range geometry",
                  "Skip: D = 2h'·sqrt((MUF/fc)^2 - 1), with tan(i) = (D/2)/h'",
                ],
              },
              {
                q: "An HF path has fc = 5 MHz, virtual height 300 km and MUF 10 MHz. Compute the skip distance and state whether a receiver 500 km away receives the sky wave at 10 MHz.",
                marks: 7,
                outline: [
                  "D = 2·300·sqrt((10/5)^2 - 1) = 600·sqrt(3) = 1039 km",
                  "500 km < 1039 km: the receiver is INSIDE the skip zone",
                  "Sky wave absent at 10 MHz; only ground wave (weak at HF) arrives",
                  "Fix: lower the frequency (shorter skip) or move the receiver",
                ],
              },
              {
                q: "Why is the optimum working frequency chosen at 0.85·MUF rather than at MUF itself?",
                marks: 7,
                outline: [
                  "MUF is the razor edge: small layer-density drops lose the path",
                  "F2 density varies hour to hour and with solar activity",
                  "0.85·MUF keeps the ray reflecting through normal fluctuations",
                  "Tradeoff: slightly lower frequency raises absorption - balanced choice",
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
        { topic: "Sky wave: fc, MUF, LUF, virtual height, skip distance", weight: "≈ 12–15 marks", note: "The 1039 km skip numerical (fc 5, MUF 10, h' 300) repeats yearly." },
        { topic: "Half-wave dipole and monopole: patterns, Rr, Si/Ci, image theory", weight: "≈ 10–14 marks", note: "73 ohms / 36.5 ohms / 1.64 / 3.28 - the numbers every answer quotes." },
        { topic: "Arrays: pattern multiplication, linear AF, binomial", weight: "≈ 10–12 marks", note: "AF = sin(N·psi/2)/(N·sin(psi/2)); broadside vs end-fire conditions." },
        { topic: "Ground wave and space wave: surface wave, tilt, horizons, two-ray", weight: "≈ 10–12 marks", note: "4.12·sqrt(h) horizons and the d^-4 two-ray law are guaranteed." },
        { topic: "Radiation mechanism: potentials, retarded time, short element", weight: "≈ 8–10 marks", note: "Rr = 80·pi^2·(l/lambda)^2 with the sin^3 integral derivation." },
        { topic: "Apertures, horns and reflectors", weight: "≈ 8–10 marks", note: "50.8·lambda/a beamwidths; G = 0.55·(pi·D/lambda)^2 for dishes." },
        { topic: "Antenna types: Yagi, LPDA, helix, folded dipole", weight: "≈ 8–10 marks", note: "Short notes with sketches: tau = 0.85, Kraus gain, 292 ohms." },
        { topic: "Path loss and link budgets", weight: "≈ 6–8 marks", note: "FSPL = 32.45 + 20log f(MHz) + 20log d(km) - free marks when stated cleanly." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, weekends for past papers. Every unit ends with two sketches drawn from memory - the polar pattern and the geometry diagram - because in this subject the drawing IS half the answer.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - radiation fundamentals", tasks: ["Potentials route: source -> A, V -> E, H", "Retardation: e^(-jkR) and t - r/c in both languages", "Short-element fields and the sin(theta) pattern", "Rr derivation with the sin^3 integral; 0.1 lambda -> 7.9 ohms", "Half-wave dipole: 73 ohms, 2.15 dBi; monopole image factor-of-two pair"] },
        { week: "Week 2", focus: "Unit II - patterns, gain, arrays", tasks: ["Pattern anatomy: HPBW, FNBW, sidelobe, F/B with sketches", "D = 4pi/omega_A; G = eta·D; Ae = lambda^2·G/4pi", "Two-element cases incl. the cardioid design", "Uniform AF: nulls, grating lobes, HPBW = 50.8/L_lambda", "Binomial amplitudes and the zero-sidelobe tradeoff; earth effects"] },
        { week: "Week 3", focus: "Unit III - the antenna zoo", tasks: ["Folded dipole: two modes, 292 ohms derivation", "Yagi: parasitic phase mechanism + dimension sketch", "LPDA: tau, active region, N >= ln(10)/ln(1/tau)", "Helix: normal vs axial; Kraus worked numbers", "Long wires: V, rhombic, beverage with terminations drawn"] },
        { week: "Week 4", focus: "Unit IV - apertures and patches", tasks: ["Aperture = Fourier transform; 50.8·lambda/a beamwidth", "Taper ladder: uniform vs cosine with efficiencies", "Horn gain 0.51·4pi·a·b/lambda^2 + optimum length", "Reflector: equal-path sketch, surface-error exponential", "Babinet/Booker slot chain; patch design 2.4 GHz FR-4"] },
        { week: "Week 5", focus: "Unit V - propagation", tasks: ["Mode partition sketch on the frequency axis", "Ground wave: tilt, polarization, sea-vs-land ranges", "Space wave: horizons 4.12·sqrt(h); two-ray lobes", "Super-refraction/ducts; troposcatter; fading and diversity", "Ionosphere layers; fc = 9·sqrt(Ne); MUF and skip numerical"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Redraw the anchor diagrams from memory", "Two full past papers under time", "Re-run the numerical drills (last-day card)", "Link-budget practice with the two-column table"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every antenna answer opens with a labelled sketch - dimensions in lambda, feed point marked, lobes drawn. The drawing earns half the marks.",
        "Quote the canonical numbers on sight: 73 ohms, 36.5 ohms, 1.64, 3.28, 292 ohms, -13.3 dB, 50.8·lambda/a, 4.12·sqrt(h), 32.45 + 20log f + 20log d.",
        "State assumptions as one-liners: perfect ground, far-field distance 2D^2/lambda, 4/3 earth, 55 percent aperture efficiency.",
        "Sky-wave numericals: write fc = 9·sqrt(Ne), MUF = fc·sec(i) and D = 2h'·sqrt((MUF/fc)^2 - 1) as labelled lines before substituting.",
        "Gain questions: decide dBi vs dBd (2.15 dB apart) and say which you are assuming.",
        "Link budgets go in a two-column table - gains up, losses down, margin as the last line.",
        "Babinet answers must say which way the E-field points (across the slot) - the swap IS the principle.",
        "Time-box: 7 marks in 12 minutes, 14 in 22; leave 10 minutes to finish sketches cleanly.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: redraw the eight anchor diagrams (element donut, dipole pattern evolution, array factor geometry, cardioid, Yagi layout, rhombic with termination, ionosphere layer stack, skip-distance ray), re-derive the four formulas (Rr of the element, AF of the uniform array, FSPL, skip distance), and re-run the five numerical drills (73/36.5 ohms, LPDA element count, horn gain, FSPL link, skip 1039 km). No new material tonight - consolidation wins this subject.",
      ],
      bullets: [
        "Quoting the monopole with 73 ohms and 1.64 directivity - the pair is 36.5 ohms and 3.28; both directions change.",
        "Forgetting sin^3(theta) in the element's radiated-power integral - the (8/3) is the method mark.",
        "Saying 'the reflector reflects' for Yagi parasitics instead of the phase-controlled re-radiation.",
        "Using epsilon_r instead of epsilon_eff in patch resonance - the patch comes out too long.",
        "Missing the 0.51 efficiency in horn gain - a 3 dB overstatement.",
        "Confusing field -3 dB with power -3 dB when reading HPBW off patterns.",
        "Claiming binomial arrays have no cost - state the wider beam and lower directivity.",
        "Forgetting the receiver's height term in horizon sums - add both 4.12·sqrt(h) terms.",
        "Applying free-space 20 dB/decade inside the two-ray regime - it is 40 dB/decade beyond the breakpoint.",
        "Saying the ionosphere 'reflects like a mirror' - it refracts through the electron gradient.",
        "Using fc instead of MUF = fc·sec(i) for oblique paths - MUF is always above fc.",
        "Omitting the termination resistor in rhombic sketches - it is what makes it a rhombic.",
      ],
    },
  ],
};
