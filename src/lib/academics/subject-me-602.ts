/**
 * Academics - RGPV ME 6th-semester subject: ME-602 Machine Component and Design.
 *
 * Structure mirrors subject-cs-302.ts / subject-me-501.ts: units -> one
 * chapter per unit -> numbered sections.  Each section carries body
 * paragraphs, bullets, a diagram, key terms, a callout, a table or python
 * code sample, and three exam-style questions (one 7-mark with outline +
 * two shorts).
 */

import type { AcademicSubject } from "./types";

export const me602: AcademicSubject = {
  id: "me-602",
  code: "ME-602",
  title: "Machine Component and Design",
  semester: "VI Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to machine component design: factor of safety and fatigue, cotter and welded joints, shafts and couplings, springs, levers and cams, gears, bearings and flywheels - every section with a redrawable diagram, worked numericals and the exact questions RGPV asks.",
  description:
    "Five units walk from design fundamentals - factor of safety, stress concentration, fatigue with S-N, Goodman and Soderberg criteria, and the classical theories of failure - through the design of joints (cotter, knuckle, threaded, welded, riveted and keyed), then shafts under combined bending and torsion with the ASME code and the full coupling family, on to springs, levers and cams with Wahl factors, nip and pressure angles, and finally gears by Lewis and Buckingham, rolling bearings by L10 life, journal bearings by Petroff and McKee, and flywheel sizing. Every section pairs theory with a worked numerical, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#6366f1",
  emoji: "MD",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Design Fundamentals",
      summary:
        "The base layer of the whole subject: engineering design procedure and factor of safety, stress concentration with notch sensitivity, fatigue and the S-N curve, mean-stress criteria by Goodman and Soderberg, and the five classical theories of failure.",
      chapter: {
        number: "01",
        title: "Design Fundamentals",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the design procedure and the factor of safety that prices uncertainty, stress concentration and its fatigue twin Kf, the silent failure called fatigue with its S-N curve and mean-stress diagrams, and the theories of failure that convert combined stress states into simple tension-test data.",
        inOneBreath:
          "Design proceeds from need to synthesis to analysis to iteration; factor of safety is failure stress divided by working stress, chosen from material and load uncertainty, mode of failure and consequence; stress concentration multiplies the nominal stress at every discontinuity, and fatigue sees it through Kf = 1 + q(Kt - 1); fatigue failures initiate, propagate and fracture below yield, and steels show an endurance limit of about 0.5 Sut on the S-N curve; combined mean and amplitude stresses are judged by Goodman (ultimate intercept) or Soderberg (yield intercept); and combined stress states are judged for ductile metals by von Mises or Tresca and for brittle ones by Rankine or Mohr.",
        sections: [
          {
            number: "1.1",
            title: "Design considerations and factor of safety",
            body: [
              "Machine design is the decision-making process by which resources - material, energy, time and money - are converted into a machine that satisfies a stated need. The designer works through a recognisable sequence: recognise the need, define specifications and constraints, synthesise a possible mechanism and material, analyse it for stress, deflection and wear, and iterate until every requirement is met with margin. At every iteration the designer balances competing considerations: strength and rigidity against weight, safety against cost, manufacturability against performance, and appearance against assembly time. Standards - codes, standard parts, preferred number series - shorten this loop.",
              "Strength is judged through the factor of safety, defined as the ratio of the failure stress of the member to the working (permissible) stress developed in service: n = failure stress divided by working stress. For ductile materials the failure stress is normally the yield strength, for brittle materials the ultimate strength. The margin absorbs everything the analysis cannot see: uncertainty in material properties, approximations in load estimation, manufacturing tolerances and residual stresses, assembly misalignment, and the consequences of failure itself. A turbine disc that endangers lives carries a larger factor than a garden bracket precisely because its failure consequence is severe.",
              "A tension rod makes the arithmetic concrete. If a C30 steel rod (Syt = 300 N/mm2, Sut = 500 N/mm2) carries a steady 40 kN load and n = 3 is chosen on yield, the permissible stress is 300/3 = 100 N/mm2 and the required diameter follows from pi d^2/4 = 40000/100, giving d = 22.6 mm, rounded to a 24 mm standard bar. Design data books tabulate typical values: 1.5 to 2 for ductile metals under steady loads, 3 to 4 for brittle materials, 5 and above for impact loads. In the exam, always declare the basis - yield or ultimate - before quoting a factor.",
            ],
            bullets: [
              "Design sequence: recognise need -> specifications -> synthesis -> analysis (stress, deflection, wear) -> iterate -> detail drawing with tolerances.",
              "Factor of safety n = failure stress / working stress; the failure stress is Syt for ductile and Sut for brittle materials.",
              "Working (permissible) stress = failure stress divided by n; it is the stress the member is allowed to carry in service.",
              "FOS selection factors: reliability of material and load data, mode of failure, consequence of failure, manufacturing quality, environment, cost.",
              "Typical values: 1.5-2 ductile under steady load, 3-4 brittle, 4-8 impact, 8-12 for castings or uncertain loads.",
              "Worked rod: 40 kN with n = 3 on Syt = 300 N/mm2 gives permissible 100 N/mm2, d = 22.6 mm -> 24 mm standard bar.",
            ],
            table: {
              caption: "Typical factors of safety used in design practice.",
              headers: ["Service condition", "Typical n", "Basis", "Why so large"],
              rows: [
                ["Ductile metal, steady load", "1.5 - 2.0", "Yield", "Properties and loads well known; yielding visible"],
                ["Average conditions", "2 - 3", "Yield", "Covers load uncertainty and tolerances"],
                ["Brittle material (cast iron)", "3 - 4", "Ultimate", "Sudden fracture, no warning deformation"],
                ["Impact or shock loading", "4 - 8", "Ultimate", "Energy loads exceed static estimates"],
                ["Uncertain loads, castings", "8 - 12", "Ultimate", "Hiding places for defects"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The machine design cycle",
              caption: "Analysis feeds synthesis; every pass around the loop buys margin.",
              steps: [
                { label: "Recognise the need", note: "problem statement" },
                { label: "Specify", note: "function, load, life, cost, standards" },
                { label: "Synthesise", note: "mechanism, material, geometry" },
                { label: "Analyse", note: "stress, deflection, wear, vibration" },
                { label: "Evaluate and iterate", note: "change geometry or material, re-analyse" },
                { label: "Detail", note: "drawings, tolerances, preferred sizes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "In 'define factor of safety and explain its selection' questions, write the formula, name the basis (yield or ultimate), then list at least six governing factors with one line each - most of the marks live in the factor list, not the definition.",
            },
            keyTerms: [
              { term: "Factor of safety", definition: "Ratio of failure stress (yield or ultimate) to the working stress permitted in service; the margin against every uncertainty." },
              { term: "Working stress", definition: "Failure stress divided by the factor of safety; the stress the component is designed to carry." },
              { term: "Synthesis", definition: "The creative step of machine design in which a possible mechanism, material and geometry are proposed for analysis." },
            ],
            examQuestions: [
              {
                q: "Define factor of safety. Explain in detail the factors that govern its selection in machine design, with typical values for ductile, brittle and impact-loaded components.",
                marks: 7,
                outline: [
                  "Define n = failure stress / working stress and state the two bases (Syt, Sut).",
                  "Material uncertainties: property scatter, casting defects, weld quality.",
                  "Load uncertainties: static vs dynamic, impact, misalignment, residual stress.",
                  "Mode and consequence of failure: gradual vs sudden, cost and danger.",
                  "Manufacturing tolerances and assembly quality.",
                  "Typical values: 1.5-2 ductile steady, 3-4 brittle, 4-8 shock, higher for castings.",
                  "Close with the working-stress formula and a one-line worked example.",
                ],
              },
              {
                q: "Differentiate between failure stress and allowable (working) stress, with the factor of safety linking them.",
                marks: 2,
              },
              {
                q: "Why does a cast-iron bracket need a higher factor of safety than a forged steel bracket of the same duty?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Stress concentration and notch sensitivity",
            body: [
              "Real components are not smooth bars: they have holes for bolts, shoulders for bearings, keyways, threads and oil holes. Each abrupt change of cross-section forces the stress flow lines to crowd together, and the local stress rises far above the nominal value. The stress concentration factor Kt captures this: Kt = maximum local stress divided by the nominal stress at the reduced section. A plate with a small hole under tension has Kt = 3 - the material beside the hole carries three times the average stress - while a sharp shoulder can reach 2 or more, and a sharp internal corner approaches a crack, with no limit at all.",
              "Notch sensitivity q converts the geometric factor to the fatigue factor Kf: q = (Kf - 1)/(Kt - 1), so Kf = 1 + q(Kt - 1), with q between 0 and 1. Sensitivity rises with material strength: soft ductile steels blunt notches (q near 0.5) while high-strength and hard steels are almost fully notch-sensitive (q near 1). Under purely static loading a ductile metal yields locally, redistributes the load and largely ignores Kt; brittle materials and fatigue loading enjoy no such mercy - almost every fatigue crack begins at a stress raiser, so Kf, never Kt, is what enters fatigue equations.",
              "Design responds by easing the flow of stress. Generous fillet radii at every shoulder, oval or elliptical relief holes at the ends of keyways, additional small holes that soften a large one, relief grooves beside a stiff shoulder, and shot peening of the surface all reduce Kt or Kf. Counter-intuitively, removing material - a groove next to a shoulder - can lower the peak stress by giving the flow lines somewhere to go. The designer's rule is simple: no sharp internal corners, anywhere, ever; every drawing should be checked for fillets before it leaves the desk.",
            ],
            bullets: [
              "Kt = sigma_max / sigma_nominal at the reduced section; a purely geometric quantity.",
              "Common values: small hole in a wide plate Kt = 3; shoulder with r/d near 0.1 gives Kt about 1.4; sharp corner is unbounded.",
              "Notch sensitivity q = (Kf - 1)/(Kt - 1); rises with tensile strength, from about 0.5 for annealed steels toward 1 for hardened steels.",
              "Fatigue design always uses Kf = 1 + q(Kt - 1), never the raw Kt.",
              "Static ductile loading: local yielding redistributes stress, so Kt is largely forgiving; brittle and fatigue service are not.",
              "Remedies: fillets, relief grooves, additional relief holes, oval keyway run-outs, shot peening.",
            ],
            codeExample: {
              language: "python",
              caption: "Stress concentration: from Kt through notch sensitivity to fatigue factor.",
              code: `import math

# Plate in tension, 80 mm wide, with a 16 mm hole
w = 80.0      # plate width, mm
d = 16.0      # hole diameter, mm
P = 30.0e3    # axial load, N
q = 0.8       # notch sensitivity of the steel

# Nominal stress at the net section through the hole
A_net = (w - d) * 10.0            # 10 mm thick plate
sigma_nom = P / A_net             # N/mm2

# Geometric factor for a round hole in a finite-width plate
Kt = 3.0 - 3.13 * (d / w - 0.10)  # data-book fit, tends to 3 as the hole shrinks

Kf = 1.0 + q * (Kt - 1.0)         # fatigue stress concentration factor
sigma_max = Kt * sigma_nom        # peak local stress, static picture
sigma_fatigue = Kf * sigma_nom    # stress seen by a fatigue calculation

print("nominal   =", round(sigma_nom, 1), "N/mm2")
print("Kt        =", round(Kt, 2))
print("Kf        =", round(Kf, 2))
print("peak      =", round(sigma_max, 1), "N/mm2")
print("fatigue   =", round(sigma_fatigue, 1), "N/mm2")`,
            },
            diagram: {
              kind: "fork",
              title: "A shaft must step up from 30 mm to 40 mm - how do you blend it?",
              caption: "Every branch is a design decision; the good ones ease the flow of stress.",
              start: "Shoulder: 30 mm shaft to 40 mm diameter",
              branches: [
                { label: "Sharp 90-deg step", outcome: "Kt above 2; every fatigue run starts a crack at the root", good: false },
                { label: "Filleted shoulder, r/d about 0.1", outcome: "Kt drops to about 1.4; smooth stress flow", good: true },
                { label: "Fillet plus relief groove behind the shoulder", outcome: "Two mild raisers replace one severe one", good: true },
                { label: "Large radius plus shot peening", outcome: "Best combination of geometry and surface compression", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Kt under static load, Kf under fatigue",
              body: "Kt under static load on a ductile metal is nearly harmless - local yielding redistributes stress. Under fatigue, use Kf = 1 + q(Kt - 1) in every endurance calculation; quoting Kt alone in a fatigue design loses the mark.",
            },
            keyTerms: [
              { term: "Stress concentration factor Kt", definition: "Ratio of the maximum local stress at a discontinuity to the nominal stress at that section; a purely geometric quantity." },
              { term: "Notch sensitivity q", definition: "Fraction of the geometric notch effect felt by a material under fatigue; q = (Kf - 1)/(Kt - 1), rising towards 1 for hard, high-strength metals." },
              { term: "Fatigue stress concentration factor Kf", definition: "The reduced, effective concentration factor used in fatigue design; Kf = 1 + q(Kt - 1)." },
            ],
            examQuestions: [
              {
                q: "What is stress concentration? Show how a stress raiser is treated in static and in fatigue design, defining notch sensitivity and Kf, and list four design remedies.",
                marks: 7,
                outline: [
                  "Define Kt = sigma_max / sigma_nominal with a sketch of flow lines near a hole or shoulder.",
                  "Typical values: hole in plate Kt = 3; sharp shoulder 2 and above; crack tip unlimited.",
                  "Static, ductile: local yielding redistributes load, Kt rarely governs.",
                  "Fatigue: cracks start at raisers; use Kf = 1 + q(Kt - 1).",
                  "Notch sensitivity q = (Kf - 1)/(Kt - 1); rises with strength; ranges 0 to 1.",
                  "Remedies: fillets, relief holes and grooves, oval keyway exits, shot peening.",
                  "Close with a sketch of a properly filleted shoulder.",
                ],
              },
              {
                q: "Define notch sensitivity. What value of q would you expect for a hardened tool steel?",
                marks: 2,
              },
              {
                q: "State the stress concentration factor for a small circular hole in a wide plate under tension and sketch the stress flow around it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Fatigue failure and the S-N curve",
            body: [
              "Fatigue is the progressive, localised, permanent structural damage that grows under fluctuating stresses whose peak may lie far below the yield strength. A fatigue failure unfolds in three acts: a crack initiates at a stress raiser - a notch, toolmark or inclusion - then propagates a sliver at a time across each tensile excursion, leaving concentric beach marks, and finally the reduced section fails suddenly by fracture. The fracture surface tells the story: a smooth, burnished fatigue zone growing from the origin and a rough, crystalline final-fracture zone. The danger is silence: no yield warning, no visible deformation.",
              "The vocabulary of fluctuating stress separates the steady and alternating parts: mean stress sigma_m = (sigma_max + sigma_min)/2 and stress amplitude sigma_a = (sigma_max - sigma_min)/2. Fully reversed loading has sigma_m = 0; repeated loading cycles between zero and a peak. Wrought steels are characterised by the rotating-beam test (R. R. Moore), which applies fully reversed bending and yields the S-N curve: stress amplitude against cycles to failure on semi-log axes. Below about 10^6 reversals the curve falls steeply; for steels it then flattens to a horizontal asymptote - the endurance limit Se, roughly 0.5 Sut - below which life is effectively infinite. Aluminium alloys never flatten; only a finite fatigue strength at, say, 5 x 10^8 cycles can be quoted for them.",
              "The rotating-beam endurance limit is a laboratory ideal: a small, polished, standard specimen loaded in bending at room temperature. Real components are bigger, rougher, hotter and differently loaded, so the design endurance limit is Se = ka kb kc kd Se', where ka is the surface finish factor, kb the size factor, kc the reliability factor and kd the temperature factor - each a number below one taken from design data charts. Beneficial surface treatments such as shot peening, nitriding and carburising deliberately introduce compressive residual stress and can raise the effective endurance limit above the polished-specimen value, which is why valve springs are shot-peened.",
            ],
            bullets: [
              "Fatigue: failure below yield under repeated loading; three stages - initiation, propagation, sudden fracture.",
              "Mean stress sigma_m = (max + min)/2; amplitude sigma_a = (max - min)/2; stress ratio R = min/max.",
              "Fully reversed cycle: sigma_m = 0, R = -1. Repeated cycle: min = 0, R = 0.",
              "S-N curve from the R. R. Moore rotating-beam test; steel knee near 10^6 cycles.",
              "Endurance limit Se for steels is about 0.5 Sut; nonferrous alloys show no true limit.",
              "Component Se = ka kb kc kd Se' (surface, size, reliability, temperature factors).",
              "Shot peening, nitriding and carburising add compressive residual stress and extend fatigue life.",
            ],
            table: {
              caption: "Reading a fluctuating stress cycle.",
              headers: ["Quantity", "Formula", "Reversed cycle (± 280)", "Repeated cycle (0 to 500)"],
              rows: [
                ["sigma_max", "largest stress", "+280", "+500"],
                ["sigma_min", "smallest stress", "-280", "0"],
                ["sigma_m (mean)", "(max + min)/2", "0", "+250"],
                ["sigma_a (amplitude)", "(max - min)/2", "280", "250"],
                ["stress ratio R", "min / max", "-1", "0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Static versus fatigue failure",
              caption: "Two different enemies: one announces itself, the other does not.",
              left: {
                heading: "Static failure",
                items: [
                  "Single overload crosses yield or ultimate",
                  "Warning: visible deformation before fracture",
                  "Ductile metals neck and show cup-cone fracture",
                  "Stress raisers blunted by local yielding",
                  "Strength predictable from a tensile test",
                ],
              },
              right: {
                heading: "Fatigue failure",
                items: [
                  "Millions of small cycles below yield",
                  "No warning: no measurable deformation",
                  "Three stages: initiation, propagation, fracture",
                  "Cracks start at notches, marks and inclusions",
                  "Characterised only by an S-N curve",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the S-N curve with axes labelled (semi-log), mark 10^3 and 10^6 cycles, the knee and the endurance limit Se of about 0.5 Sut for steel - the labelled sketch alone earns most of the marks in this question.",
            },
            keyTerms: [
              { term: "Endurance limit Se", definition: "The fully reversed stress amplitude a plain steel specimen can endure for indefinitely many cycles; about half its ultimate strength." },
              { term: "Fatigue strength", definition: "The stress amplitude causing failure at a stated finite number of cycles; quoted for materials with no true endurance limit." },
              { term: "Beach marks", definition: "Concentric progression lines frozen on a fatigue fracture surface, marking successive positions of the crack front." },
            ],
            examQuestions: [
              {
                q: "Explain the mechanism of fatigue failure, define mean stress, stress amplitude and stress ratio, and describe the S-N curves for steel and aluminium.",
                marks: 7,
                outline: [
                  "Definition: progressive localised damage under fluctuating stress below yield.",
                  "Three stages: crack initiation at a raiser, propagation with beach marks, sudden final fracture.",
                  "Define sigma_m, sigma_a and R with formulas; illustrate reversed and repeated cycles.",
                  "Rotating-beam (R. R. Moore) test: fully reversed bending on a polished specimen.",
                  "S-N plot: steep fall below 10^6 cycles, knee, horizontal asymptote Se of about 0.5 Sut for steels.",
                  "Nonferrous alloys: no knee; quote fatigue strength at a chosen life.",
                  "Modifications: surface, size, reliability and temperature factors reduce Se for real parts.",
                ],
              },
              {
                q: "Distinguish between endurance limit and fatigue strength.",
                marks: 2,
              },
              {
                q: "A shaft rotates under a steady transverse load. What kind of bending stress does a surface fibre see - fully reversed or repeated? Why?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Mean-stress criteria: Goodman and Soderberg",
            body: [
              "Most real parts cycle around a non-zero mean stress: a bolt feels steady tension plus vibration, a rotating shaft carries steady torque plus reversed bending. Two coordinates then locate the working point: amplitude sigma_a on the vertical axis against mean sigma_m on the horizontal. On this diagram the yield strength is drawn as the 45-degree line from Syt on each axis, and the fatigue strength Se is set off on the amplitude axis. The straight line joining (0, Se) to the intercept on the mean axis - Sut for Goodman, Syt for Soderberg - is the failure boundary; points below and left are safe, and the distance to the line measures the margin.",
              "The design equations fall straight out of similar triangles. Goodman: 1/n = sigma_a/Se + sigma_m/Sut. Soderberg: 1/n = sigma_a/Se + sigma_m/Syt. Both say that the amplitude term and the mean term must share the budget of unity; the factor of safety n simply divides that budget. Soderberg, cutting the mean axis at yield, is the conservative choice - no point inside its triangle can yield, even at first application - so it is preferred for ductile components where local yielding would spoil fits or alignments. Goodman, reaching ultimate on the mean axis, permits limited yielding on the mean side and is used for steels in the higher-strength ranges; Gerber's parabola is more optimistic still and finds little exam use.",
              "A worked comparison shows the spread. Take Se = 250, Sut = 600 and Syt = 400 N/mm2 with a stress cycle of sigma_a = 120 and sigma_m = 160 N/mm2. Goodman: 1/n = 120/250 + 160/600 = 0.48 + 0.267 = 0.747, so n = 1.34. Soderberg: 1/n = 0.48 + 160/400 = 0.48 + 0.40 = 0.88, so n = 1.14. The same duty is safe by Goodman and marginal by Soderberg - a reminder to state which criterion a design follows. Whenever a problem supplies both Se and a steady component of stress, this two-line calculation is almost certainly what the examiner wants.",
            ],
            bullets: [
              "Axes: amplitude sigma_a vertical, mean sigma_m horizontal.",
              "Goodman line: from (0, Se) to (Sut, 0); 1/n = sigma_a/Se + sigma_m/Sut.",
              "Soderberg line: from (0, Se) to (Syt, 0); 1/n = sigma_a/Se + sigma_m/Syt - the conservative one.",
              "Gerber parabola lies above both and is rarely used in design practice.",
              "Safe region: below and left of the failure line; factor of safety divides the unity budget.",
              "Worked cycle (sigma_a = 120, sigma_m = 160, Se = 250): Goodman n = 1.34, Soderberg n = 1.14.",
              "Always state which criterion the answer uses - the two verdicts differ.",
            ],
            codeExample: {
              language: "python",
              caption: "Goodman and Soderberg factors of safety for one stress cycle.",
              code: `# Steady mean plus alternating amplitude on a steel component
Se  = 250.0   # modified endurance limit, N/mm2
Sut = 600.0   # ultimate strength, N/mm2
Syt = 400.0   # yield strength, N/mm2

sigma_a = 120.0   # stress amplitude, N/mm2
sigma_m = 160.0   # mean stress, N/mm2

inv_goodman   = sigma_a / Se + sigma_m / Sut
inv_soderberg = sigma_a / Se + sigma_m / Syt

n_goodman   = 1.0 / inv_goodman
n_soderberg = 1.0 / inv_soderberg

print("Goodman   n =", round(n_goodman, 2))
print("Soderberg n =", round(n_soderberg, 2))

# Yield check on the maximum stress of the cycle
n_yield = Syt / (sigma_a + sigma_m)
print("First-cycle yield check n =", round(n_yield, 2))`,
            },
            diagram: {
              kind: "compare",
              title: "Goodman versus Soderberg",
              caption: "Both lines anchor at Se on the amplitude axis; they differ only on the mean-stress intercept.",
              left: {
                heading: "Goodman line",
                items: [
                  "Joins (0, Se) to (Sut, 0) on the mean axis",
                  "Mean stress allowed to approach ultimate",
                  "Some local first-cycle yielding possible",
                  "Suited to higher-strength and brittle steels",
                  "1/n = sigma_a/Se + sigma_m/Sut",
                ],
              },
              right: {
                heading: "Soderberg line",
                items: [
                  "Joins (0, Se) to (Syt, 0) on the mean axis",
                  "Mean stress limited to yield",
                  "No point inside the triangle can yield",
                  "Preferred for ductile parts where fit matters",
                  "1/n = sigma_a/Se + sigma_m/Syt",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "One diagram, both lines",
              body: "Draw one diagram, show both lines: Se on the vertical axis, Sut and Syt intercepts on the horizontal, label the safe region - then write the two reciprocal formulas. That single figure answers both the long and the short versions of this question.",
            },
            keyTerms: [
              { term: "Goodman line", definition: "Straight failure boundary from Se on the amplitude axis to Sut on the mean-stress axis." },
              { term: "Soderberg line", definition: "Straight failure boundary from Se on the amplitude axis to Syt on the mean-stress axis; guarantees no yielding." },
              { term: "Mean stress sigma_m", definition: "The steady, average component of a fluctuating stress cycle about which the amplitude oscillates." },
            ],
            examQuestions: [
              {
                q: "Construct the Goodman and Soderberg diagrams for combined mean and alternating stress, derive their design equations and explain when each criterion is preferred.",
                marks: 7,
                outline: [
                  "Set up axes: amplitude sigma_a vertical, mean sigma_m horizontal.",
                  "Mark Se on the amplitude axis; Syt and Sut on the mean axis.",
                  "Draw Soderberg: (0, Se) to (Syt, 0); Goodman: (0, Se) to (Sut, 0).",
                  "Shade the safe region below each line; show the 45-degree yield line.",
                  "Derive by similar triangles: 1/n = sigma_a/Se + sigma_m/Sut (Goodman).",
                  "State Soderberg's counterpart with Syt and note it is the more conservative.",
                  "Applications: Soderberg for ductile, fit-critical parts; Goodman for higher-strength steels.",
                ],
              },
              {
                q: "Write the Soderberg equation and explain each symbol.",
                marks: 2,
              },
              {
                q: "A cycle has sigma_a = 120 and sigma_m = 160 N/mm2 with Se = 250 and Sut = 600 N/mm2. Find the Goodman factor of safety.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Theories of failure",
            body: [
              "Tensile-test data describe failure under one uniaxial stress, but machine parts see combined bending, torsion and axial loads at once. Theories of failure convert a general two- or three-dimensional stress state into an equivalent uniaxial stress, or a directly comparable condition, that can be checked against Syt or Sut from the simple tension test. The classical set: Rankine's maximum principal stress theory, Saint-Venant's maximum principal strain theory (rarely used), Guest or Tresca's maximum shear stress theory, von Mises-Hencky's distortion energy theory, and Mohr's internal friction theory for materials of unequal tensile and compressive strength.",
              "Each theory states a criterion. Rankine: failure when the largest principal stress reaches Syt (ductile) or Sut (brittle). Tresca: failure when the maximum shear stress, tau_max = (sigma_1 - sigma_2)/2, reaches half the tensile yield value. Von Mises: failure when the distortion energy reaches its uniaxial yield value, equivalently when the equivalent stress sigma_e = sqrt(sigma_1^2 - sigma_1 sigma_2 + sigma_2^2) equals Syt. Plotted on the sigma_1-sigma_2 plane, Tresca's yield boundary is a hexagon and von Mises a circumscribing ellipse - von Mises predicts a higher allowable shear (0.577 Syt against 0.5 Syt in pure shear), and experiments on ductile metals side with it, with Tresca a close, conservative runner-up.",
              "Selection follows material and load. Ductile materials - mild steel, aluminium - are designed by von Mises or Tresca; brittle materials - grey cast iron - by Rankine or Mohr, because they fail by fracture, not yielding. Under pure uniaxial tension every theory coincides at the same Syt, which is why the choice only matters under combined stress. The daily workhorse is the shaft: with bending stress sigma and torsional shear tau, Tresca gives sigma_e = sqrt(sigma^2 + 4 tau^2) and von Mises sigma_e = sqrt(sigma^2 + 3 tau^2) - the pair behind the equivalent-moment formulas of Unit III. Examiners love asking which theory suits which material, and why.",
            ],
            bullets: [
              "Purpose: predict combined-stress failure from simple tension-test data.",
              "Rankine: sigma_1 = Syt (ductile) or Sut (brittle); simplest, suits brittle fracture.",
              "Tresca-Guest: tau_max = (sigma_1 - sigma_2)/2 = Syt/2; hexagonal yield surface.",
              "Von Mises-Hencky: sigma_e = sqrt(sigma_1^2 - sigma_1 sigma_2 + sigma_2^2) = Syt; elliptical surface.",
              "Pure shear comparison: Tresca 0.5 Syt, von Mises 0.577 Syt - about 15% apart.",
              "Ductile metals: von Mises (best fit) or Tresca (conservative); brittle: Rankine or Mohr.",
              "Shaft corollaries: sqrt(sigma^2 + 4 tau^2) and sqrt(sigma^2 + 3 tau^2).",
            ],
            table: {
              caption: "The five classical theories at a glance.",
              headers: ["Theory", "Criterion of failure", "Yield surface (2D)", "Best suited for"],
              rows: [
                ["Rankine (max principal stress)", "sigma_1 = Syt or Sut", "square", "brittle materials"],
                ["Saint-Venant (max strain)", "largest strain = yield strain", "rhombus", "rarely used"],
                ["Guest-Tresca (max shear)", "(sigma_1 - sigma_2)/2 = Syt/2", "hexagon", "ductile, conservative"],
                ["von Mises-Hencky (distortion energy)", "sqrt(s1^2 - s1 s2 + s2^2) = Syt", "ellipse", "ductile, best fit to tests"],
                ["Mohr (internal friction)", "envelope of failure circles", "irregular hexagon", "brittle, unequal strengths"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a failure theory",
              caption: "Material behaviour first, then the stress state.",
              axes: { x: "Material: ductile -> brittle", y: "Stress state: uniaxial -> biaxial" },
              quadrants: [
                { label: "Ductile + uniaxial", note: "All theories coincide at Syt; any one gives the same answer" },
                { label: "Brittle + uniaxial", note: "Rankine directly on Sut; fracture, no yielding" },
                { label: "Ductile + biaxial", note: "von Mises ellipse; Tresca hexagon a safe 15% conservative" },
                { label: "Brittle + biaxial", note: "Rankine on Sut; Mohr when tension and compression differ" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the pair for shafts: sigma_e = sqrt(sigma^2 + 4 tau^2) (Tresca) and sqrt(sigma^2 + 3 tau^2) (von Mises). They return in Unit III as the equivalent bending and twisting moment formulas - learn them once, use them twice.",
            },
            keyTerms: [
              { term: "Theory of failure", definition: "A rule that maps a combined stress state onto the uniaxial tension-test data at which failure is declared." },
              { term: "Distortion energy theory", definition: "Von Mises criterion: yielding begins when the energy that changes shape - not volume - reaches the uniaxial yield value." },
              { term: "Maximum shear stress theory", definition: "Tresca-Guest criterion: yielding begins when the maximum shear stress reaches one-half the tensile yield stress." },
            ],
            examQuestions: [
              {
                q: "State the maximum principal stress, maximum shear stress and distortion energy theories of failure. Derive the von Mises equivalent stress for plane stress and indicate which theory suits ductile and brittle materials.",
                marks: 7,
                outline: [
                  "Purpose: predicting combined-stress failure from simple tension data.",
                  "Rankine: sigma_1 = Syt/Sut; simple, suits brittle fracture.",
                  "Tresca: tau_max = (sigma_1 - sigma_2)/2 = Syt/2; conservative for ductile metals.",
                  "Von Mises: distortion energy; sigma_e = sqrt(sigma_1^2 - sigma_1 sigma_2 + sigma_2^2).",
                  "Yield surfaces: Tresca hexagon inside the von Mises ellipse; pure shear 0.5 vs 0.577 Syt.",
                  "Ductile: von Mises or Tresca; brittle: Rankine or Mohr.",
                  "Shaft corollaries: sqrt(sigma^2 + 4 tau^2) and sqrt(sigma^2 + 3 tau^2).",
                ],
              },
              {
                q: "Which theory of failure would you apply to a grey cast-iron flange, and why?",
                marks: 2,
              },
              {
                q: "Show that in pure shear Tresca predicts yielding at 0.5 Syt while von Mises predicts 0.577 Syt.",
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
      title: "Design of Joints",
      summary:
        "The permanent and demountable fastenings of machine construction: cotter and knuckle joints designed mode by mode, threaded fasteners with preload and self-locking, fillet and butt welds through the throat, riveted joint efficiency, and keys as the sacrificial link between shaft and hub.",
      chapter: {
        number: "02",
        title: "Design of Joints",
        intro:
          "Unit II designs the connections that hold machines together: cotter and knuckle joints where each failure mode is a mark, threaded fasteners where preload is the secret to survival, welded joints where strength lives at the throat, riveted joints priced by efficiency, and keys - the cheap, replaceable fuse of every transmission.",
        inOneBreath:
          "A cotter transmits axial load by shear and bearing, and its joint is designed by enumerating every failure mode - rod tension, cotter double shear, crushing of the rod end, tearing across the slot - and sizing each element for the same load; a knuckle joint is its pinned, articulating cousin; threaded fasteners survive fatigue only because preload makes the bolt a stiff spring sharing load with the clamped stack, while self-locking demands a lead angle below the friction angle; fillet welds carry load in shear through the 0.707 s throat while butt welds match the parent plate; riveted joint efficiency is the least of tearing, shearing and crushing strengths divided by the solid plate; and keys are proportioned w = h = d/4, checked in shear and crushing, and deliberately under-rated so they fail first.",
        sections: [
          {
            number: "2.1",
            title: "Cotter and knuckle joints",
            body: [
              "A cotter is a flat, wedge-shaped steel strap, fitted at right angles to the axis of the parts it joins, that transmits axial force by shear and bearing - no threads, no keys. Spigot-and-socket and sleeve arrangements couple a rod end to a socket or two rods to one sleeve; a gib-and-cotter pair is used where the taper would otherwise drift, the gibs keeping the joint locked. Because a cotter joint can be assembled and dismantled with a hammer and drift, it is standard between the piston rod and crosshead of a steam engine, in valve rods, and in the tie rods of switchgear and brake linkages.",
              "Design is an exercise in enumerating failure paths. In a spigot-socket joint under pull, the rod can tear (pi d^2/4 x sigma_t), the cotter can shear across both faces (2 b t x tau), the rod end can be crushed where the cotter bears on it (d t x sigma_c), the spigot can tear across the cotter slot ((pi d1^2/4 - d1 t) x sigma_t), and the cotter can crush the socket wall. Each mode is set equal to the design load and solved in turn, fixing the cotter thickness t (about 0.31 d), the cotter width b from double shear, and the socket diameters. A small taper - 1 in 24 or less - plus the gib's grip holds the joint tight in service.",
              "A knuckle joint is the pinned version: an eye on each rod, a forked double eye on one side, and a knuckle pin carrying the load in double shear. It is for rods in tension that must articulate - the links of a chain, a tie rod of a roof truss, the pull rods of a wall-bracket crane, bicycle chains. Its design path repeats the cotter logic: rod tension, pin double shear (with a bending check if the eyes are wide), tearing of the eye at its weakest section, and crushing of the eye walls by the pin. Both joints are classic 7-mark design questions because every mark maps onto one failure mode.",
            ],
            bullets: [
              "Cotter: flat tapered strap, at right angles to the rod, transmitting load by shear and bearing.",
              "Taper 1 in 24 or less; gib-and-cotter for positive locking against drift.",
              "Cotter failure menu: rod tension, double shear, rod-end crushing, tearing across the slot, socket crushing.",
              "Proportions: cotter thickness t = 0.31 d; width b from 2 b t tau = P.",
              "Knuckle joint: eye + fork + pin; pin in double shear, eye in tearing and crushing; articulating tension rods.",
              "Applications: piston rod to crosshead, valve rods, tie rods, chain links.",
            ],
            table: {
              caption: "Failure modes of a spigot-socket cotter joint under tensile load P.",
              headers: ["Element", "Mode", "Resisting area", "Design equation"],
              rows: [
                ["Rod", "tension", "pi d^2 / 4", "P = sigma_t pi d^2/4"],
                ["Cotter", "double shear", "2 b t", "P = 2 tau b t"],
                ["Rod end under cotter", "crushing", "d t", "P = sigma_c d t"],
                ["Spigot end", "tension across slot", "pi d1^2/4 - d1 t", "P = sigma_t (pi d1^2/4 - d1 t)"],
                ["Socket wall", "crushing under cotter", "(D - d1) t", "P = sigma_c (D - d1) t"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Designing a cotter joint, mode by mode",
              caption: "Each step fixes one dimension; every mark is one mode.",
              steps: [
                { label: "Rod under tension", note: "fix d from pi d^2/4 sigma_t" },
                { label: "Cotter thickness", note: "t = 0.31 d, taper 1 in 24" },
                { label: "Cotter width b", note: "double shear 2 b t tau = P" },
                { label: "Spigot and socket diameters", note: "tearing across the slot" },
                { label: "Crushing checks", note: "rod end and socket walls" },
                { label: "Lock and draw", note: "gib where needed; dimensioned sketch" },
              ],
            },
            callout: {
              type: "tip",
              title: "Marks live in the mode list",
              body: "Start every cotter or knuckle answer by listing the five or six failure modes in a column, then solve each with its equation and a small sketch of the failed part. Examiners mark by mode - an unlisted mode is an unearned mark.",
            },
            keyTerms: [
              { term: "Cotter", definition: "A flat, taper-edged strap inserted perpendicular to the rod axis to lock two parts and transmit axial force by shear and bearing." },
              { term: "Gib", definition: "A tapered strip paired with a cotter (gib and cotter) to hold the joint against loosening and save the slot walls." },
              { term: "Knuckle pin", definition: "The pin of a knuckle joint that transmits force between eye and fork, chiefly in double shear." },
            ],
            examQuestions: [
              {
                q: "Sketch a spigot and socket cotter joint, list its possible modes of failure, and write the design equation for each.",
                marks: 7,
                outline: [
                  "Labelled sketch: rod, spigot, socket, cotter, taper.",
                  "Rod in tension: P = sigma_t pi d^2/4.",
                  "Cotter in double shear: P = 2 tau b t.",
                  "Crushing of the rod end by the cotter: P = sigma_c d t.",
                  "Tearing of the spigot across the slot: P = sigma_t (pi d1^2/4 - d1 t).",
                  "Crushing of the socket wall by the cotter.",
                  "State proportions t = 0.31 d and taper 1 in 24; close with the checks.",
                ],
              },
              {
                q: "Why is a cotter given a taper, and why is the taper kept small?",
                marks: 2,
              },
              {
                q: "Compare cotter and knuckle joints with respect to construction and applications.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Threaded fasteners and preload",
            body: [
              "A screw thread is a helical ridge of V, square, Acme or buttress section, specified by major diameter, pitch (axial distance between crests), lead (axial advance per revolution) and pitch diameter. The ISO metric 60-deg V-profile is the fastening standard because its flank friction makes it self-locking; power screws favour square or Acme threads for efficiency. The torque tightened into a bolt does double duty: roughly half overcomes thread friction, most of the rest the head or collar friction, and only about a tenth stretches the bolt. Self-locking demands that the tangent of the lead angle stay below the friction coefficient - raise efficiency too far and the screw back-drives under load.",
              "Most bolted joints are tightened, and the preload does the real work. The bolt acts as a stiff spring in parallel with the clamped members: an external load is shared roughly in proportion to stiffness, so the bolt may see only 15-30% of an applied cyclic load - this is why tightened joints survive fatigue and loose ones do not. Bolt strength is rated on the stress area, a little smaller than the pitch-diameter circle; torque control is indirect through T = K F d, with the nut factor K about 0.2 dry and 0.15 lubricated. The failure menu: core-section tension, thread stripping in shear (the softer nut material usually loses), bolt shear, and fatigue cracking at the first loaded thread.",
              "Design practice builds in order of preference. Choose a bolt strong enough that it breaks before its threads strip - a broken bolt is detectable, a stripped thread may not be; prefer several small bolts evenly spaced to one large one, for even gasket pressure; keep the stiffness ratio favourable so the bolt sees a small share of cyclic load; and specify tightening by torque wrench or angle-of-turn, never by feel. Standard property classes - 4.6, 8.8, 10.9 - encode strength: class 8.8 means ultimate 800 N/mm2 and yield 0.8 x 800 = 640 N/mm2. In exams the property-class arithmetic is a favourite short question.",
            ],
            bullets: [
              "Thread vocabulary: major diameter, pitch, lead, pitch diameter; lead = pitch x starts.",
              "ISO 60-deg V for fastening (self-locking); square, Acme and buttress for power screws (efficiency).",
              "Self-locking condition: tangent of the lead angle ≤ friction coefficient mu.",
              "Torque-tension relation T = K F d; K about 0.2 dry, 0.15 lubricated.",
              "Preloaded bolt shares external load with the clamped stack: bolt takes 15-30% of a cyclic load.",
              "Failure modes: core tension, thread stripping, bolt shear, fatigue at the first thread.",
              "Property classes: 8.8 means Sut = 800 N/mm2, Syt = 0.8 x 800 = 640 N/mm2.",
            ],
            table: {
              caption: "Thread profiles and where they belong.",
              headers: ["Profile", "Flank form", "Efficiency", "Chief use"],
              rows: [
                ["ISO metric V", "60-deg included angle", "low", "fastening: self-locking, standard taps and dies"],
                ["Square", "parallel flanks", "highest", "power screws: vices, presses"],
                ["Acme", "29-deg included angle", "good", "leadscrews with split nuts: machine tools"],
                ["Buttress", "unsymmetric", "high one way", "heavy one-direction loads: presses, jacks"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Tightening a bolted joint",
              caption: "Preload is the difference between a joint that survives cycling and one that does not.",
              start: "Wrench on the nut",
              branches: [
                { label: "Torque to specified preload (K F d)", outcome: "Bolt sees a small share of the cyclic load; fatigue life multiplies", good: true },
                { label: "Overtorque", outcome: "Bolt yields or threads strip on assembly", good: false },
                { label: "Snug only, no preload", outcome: "Joint separates each cycle; bolt takes the full load and cracks", good: false },
                { label: "Torque plus angle control, lubricated", outcome: "Repeatable clamp; scatter in K roughly halves", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Self-locking is the twin of efficiency",
              body: "Self-locking demands tan(lead angle) ≤ mu. A screw efficient enough to back-drive - a ball screw at 90% - must carry a brake. Saying this explicitly in the answer earns the extra mark that most candidates leave behind.",
            },
            keyTerms: [
              { term: "Preload", definition: "The initial tension put into a bolt at assembly; it lets the stiff joint carry most of an external load and is the key to fatigue-proof bolting." },
              { term: "Stress area", definition: "The effective tensile cross-section of a threaded bolt, slightly smaller than the pitch-diameter circle area, used for strength calculations." },
              { term: "Nut factor K", definition: "The lumped friction coefficient in T = K F d that converts tightening torque into bolt preload; about 0.2 dry, 0.15 lubricated." },
            ],
            examQuestions: [
              {
                q: "Explain why bolted joints are preloaded, derive the torque-tension relation T = K F d, and show how preload protects a bolt against fatigue.",
                marks: 7,
                outline: [
                  "Model: bolt as a stiff spring in parallel with the clamped stack.",
                  "External load shared by stiffness ratio: bolt takes 15-30% when tight.",
                  "Loose joint: full cyclic load on the bolt, early fatigue failure.",
                  "Torque balance: thread friction + collar friction + bolt stretch gives T = K F d.",
                  "K about 0.2 dry, 0.15 lubricated; scatter argues for torque plus angle control.",
                  "Failure menu: core tension, thread stripping, shear, fatigue at the first thread.",
                  "Prefer bolt fracture over thread stripping: the detectable failure.",
                ],
              },
              {
                q: "State the condition for a power screw to be self-locking.",
                marks: 2,
              },
              {
                q: "What does the property class 8.8 stamped on a bolt head mean?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Welded joints: fillet and butt",
            body: [
              "Welding joins metals by fusion, so a welded joint is continuous, needs no holes (which weaken plates), adds no cover plates or rivets, and weighs the least of all joints. Fillet welds - in lap, tee and corner joints - are triangles of deposited metal specified by leg size; the strength lies in the throat, the minimum section through the root, of thickness 0.707 x leg for an equal-leg fillet. Butt or groove welds (square, single-V, double-V, U) join plates edge to edge, are prepared by bevelling, and when properly made are as strong as the parent plate - the weld metal and the heat-affected zone govern.",
              "Fillet weld design is throat-area shear. For a fillet of leg s and length L, the throat is 0.707 s and P = 0.707 s L tau for a single weld, doubled for the two welds of a lap joint. Because the throat is fixed by the leg, length is the free variable: the design task is to supply enough total throat length for the load. Butt welds are checked on the plate section: P = L t sigma_t, with the allowable close to the plate's own. Eccentric loads add torsion or bending on the weld group, treated by idealising the throat area as a thin line section - the stuff of the advanced question set.",
              "Good practice sets limits the examiner expects quoted: minimum weld size about 3 mm or one-third the thinner plate; maximum leg equal to the plate thickness; each continuous run at least about 30 mm long so start and end craters do not dominate; and intermittent welds only for light, non-fatigue service. Weld symbols on drawings convey type, size, length and position in one compact notation. Compared with riveting, welding saves weight and fabrication cost, which is why ships, pipelines, machine frames and modern boiler drums are welded; riveting survives in code-bound pressure work and where field conditions make welding awkward.",
            ],
            bullets: [
              "Fillet weld: triangular section, specified by leg s; throat = 0.707 s for equal legs.",
              "Single fillet strength: P = 0.707 s L tau; double lap joint carries twice.",
              "Butt (groove) weld: edge-to-edge with bevel preparation; P = L t sigma_t, can match the plate.",
              "Size limits: minimum 3 mm or t/3; maximum leg = plate thickness; run length at least 30 mm.",
              "Welds loaded in shear through the throat even when the load is axial to the joint.",
              "Welding versus riveting: no holes, no overlap, 10-20% lighter; permanent and inspection-dependent.",
              "Intermittent welds only for light duty - craters and starts are fatigue starters.",
            ],
            codeExample: {
              language: "python",
              caption: "Safe load of a double-fillet lap joint.",
              code: `# Two parallel fillet welds, each 80 mm long, 6 mm leg
leg = 6.0        # weld leg, mm
L = 80.0         # length of EACH weld, mm
tau_allow = 94.0 # permissible shear in the weld, N/mm2

throat = 0.707 * leg          # throat thickness, mm
area_one = throat * L         # throat area of one weld, mm2
area_two = 2.0 * area_one     # two welds share the load

P_weld = tau_allow * area_two

# The plate itself: 80 mm wide, 10 mm thick
b_plate, t_plate = 80.0, 10.0
sigma_plate = 150.0   # permissible tension, N/mm2
P_plate = sigma_plate * b_plate * t_plate

print("throat per weld  =", round(area_one, 1), "mm2")
print("joint capacity   =", round(P_weld / 1000.0, 1), "kN")
print("plate capacity   =", round(P_plate / 1000.0, 1), "kN")
print("governing        =", "weld" if P_weld < P_plate else "plate")`,
            },
            diagram: {
              kind: "compare",
              title: "Fillet versus butt weld",
              caption: "Lap and tee triangles on the left; edge-to-edge grooves on the right.",
              left: {
                heading: "Fillet weld",
                items: [
                  "Lap, tee and corner joints - no edge preparation",
                  "Triangle of weld metal: leg s, throat 0.707 s",
                  "Resists load by shear through the throat",
                  "P = 0.707 s L tau per weld",
                  "Economical; the default of structural fabrication",
                ],
              },
              right: {
                heading: "Butt (groove) weld",
                items: [
                  "Edge to edge: square, single-V, double-V, U grooves",
                  "Requires bevelling and a root gap",
                  "Resists tension and compression on the full throat",
                  "P = L t sigma; can equal the parent plate",
                  "For heavy, primary, fatigue-critical members",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Never call the leg the strength dimension. Every fillet-weld numerical runs through the throat: P = 0.707 s L tau. Write the throat definition before touching the numbers and the arithmetic cannot go wrong.",
            },
            keyTerms: [
              { term: "Leg of a fillet weld", definition: "The sides of the weld's triangular cross-section, one along each plate face; weld size is specified by leg length." },
              { term: "Throat", definition: "The minimum weld section through the root, perpendicular to the hypotenuse; 0.707 x leg for an equal-leg fillet, and the load-bearing area." },
              { term: "Groove (butt) weld", definition: "A weld made in the groove between abutting plate edges, transferring load across the full plate thickness." },
            ],
            examQuestions: [
              {
                q: "Define leg, throat and size for a fillet weld. Derive the strength of a double-fillet lap joint and state the practical limits on weld size and length.",
                marks: 7,
                outline: [
                  "Sketch an equal-leg fillet: legs s x s, hypotenuse along the weld face.",
                  "Throat = 0.707 s; throat area per weld = 0.707 s L.",
                  "Failure by shear through the throat: P = 0.707 s L tau.",
                  "Double lap joint: twice the throat area carries the load.",
                  "Worked numbers for a 6 mm x 80 mm pair with tau = 94 N/mm2.",
                  "Limits: minimum size 3 mm or t/3; maximum leg = plate thickness; run at least 30 mm.",
                  "Contrast with the butt weld: full plate section, P = L t sigma_t.",
                ],
              },
              {
                q: "Why is the throat, not the leg, used in fillet-weld strength calculations?",
                marks: 2,
              },
              {
                q: "When would you choose a double-V butt weld over a fillet weld?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Riveted joints and efficiency",
            body: [
              "Riveting is the classical permanent joint of boilers, tanks, bridges and cranes: plates overlapped (lap joint) or butted with cover straps (butt joint), joined by ductile rivets driven through punched or drilled holes and upset to fill them. Joints are single- or double-riveted, in chain or zigzag (staggered) pattern, defined by pitch (hole to hole in a row), back pitch (row to row), diagonal pitch and margin. Unwin's formula sizes the rivet from the plate: d = 6.05 sqrt(t), with d and t both in millimetres - the first line of most riveted numericals.",
              "Efficiency is the joint's grade: eta = least failure load divided by the solid-plate load, and the least is found by pricing every failure mode. Tearing of the plate between rivet holes of one row: P_t = (p - d) t sigma_t. Shearing of the rivets: pi d^2 tau / 4 each, single or double according to lap or double-cover butt. Crushing (bearing) of plate or rivet: d t sigma_c per rivet. Tearing at the outer row while the inner row shears, and tearing of the cover strap, complete the list for multi-row joints. Whichever mode gives the smallest load caps the joint - a diamond (zigzag) arrangement usually buys back several points of efficiency because the outer row carries fewer holes.",
              "Boiler practice is code-governed - the Indian Boiler Regulation fixes pitch ratios and minimum efficiency, because a failed longitudinal seam releases the full pressure energy of the shell. Riveting has otherwise given way to welding - no holes, no overlap, no rivet weight - but the riveted joint remains an examiner favourite precisely because its strength formulas and one efficiency definition form a complete, self-contained numerical. Caulking and fullering seal the seam edges against leakage. Aluminium and blind (pop) rivets carry the idea into aircraft and light sheet work where welding heat would anneal or distort.",
            ],
            bullets: [
              "Joint families: lap and butt (single or double cover), single to quadruple riveted, chain or zigzag.",
              "Terminology: pitch, back pitch, diagonal pitch, margin; Unwin's d = 6.05 sqrt(t).",
              "Tearing between holes: P = (p - d) t sigma_t - the plate's weakened section.",
              "Rivet shear: P = (pi d^2/4) tau per rivet, single or double according to the joint.",
              "Crushing (bearing): P = d t sigma_c per rivet.",
              "Efficiency eta = least of the three strengths / (p t sigma_t); state the governing mode.",
              "Zigzag (diamond) layout raises efficiency by thinning the outer, highest-stress row.",
            ],
            table: {
              caption: "Strength of a single-riveted lap joint (pitch p, plate t, rivet d).",
              headers: ["Failure mode", "Failing element", "Strength expression"],
              rows: [
                ["Tearing between holes", "plate", "(p - d) t sigma_t"],
                ["Shearing (single)", "rivet", "(pi d^2 / 4) tau"],
                ["Crushing (bearing)", "rivet or plate", "d t sigma_c"],
                ["Efficiency", "-", "least of the above / (p t sigma_t)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Making a riveted seam",
              caption: "From marked plates to a caulked, pressure-tight joint.",
              stages: [
                { label: "Mark and punch or drill", note: "holes slightly oversize for driving" },
                { label: "Deburr and align", note: "clamps and drift pins true the seam" },
                { label: "Insert the rivet", note: "hot rivet shrinks and clamps the plates" },
                { label: "Upset the tail", note: "hammer or press forms the closed head" },
                { label: "Caulk and fuller", note: "edge grooves seal against leakage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Efficiency numericals",
              body: "Compute all three basic strengths, underline the least, divide by the solid-plate strength p t sigma_t, and state which mode governs - that final sentence is worth the closing mark in almost every paper.",
            },
            keyTerms: [
              { term: "Pitch", definition: "The centre-to-centre distance between rivets in one row; the plate tears along the pitch line between two holes." },
              { term: "Unwin's formula", definition: "Empirical rivet sizing d = 6.05 sqrt(t) mm, linking rivet diameter to plate thickness." },
              { term: "Joint efficiency", definition: "The ratio of the least failure load of a riveted joint to the strength of the unperforated (solid) plate." },
            ],
            examQuestions: [
              {
                q: "Describe the types of riveted joints, list the failure modes of a single-riveted lap joint, and define joint efficiency with all governing equations.",
                marks: 7,
                outline: [
                  "Classification: lap vs butt, single/double riveted, chain vs zigzag.",
                  "Terminology: pitch, back pitch, diagonal pitch, margin.",
                  "Unwin's formula: d = 6.05 sqrt(t).",
                  "Plate tearing between holes: (p - d) t sigma_t.",
                  "Rivet shear: pi d^2 tau / 4, single or double.",
                  "Crushing: d t sigma_c per rivet.",
                  "eta = least strength / (p t sigma_t); name the governing mode.",
                ],
              },
              {
                q: "State Unwin's formula and its use.",
                marks: 2,
              },
              {
                q: "Why can a double-riveted zigzag joint outperform a chain pattern of the same pitch?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Keys, keyways and shaft hubs",
            body: [
              "A key locks a hub to a shaft so that torque flows between them, the key sitting half in the shaft keyway and half in the hub. The sunk family - rectangular flat, square, and gib-head - dominates; saddle keys merely wedge onto the shaft surface for light duty; Woodruff keys are crescent sections for tapered shafts; feather and splined connections (Unit III) permit sliding under load. A parallel square key is proportioned w = h = d/4 for shaft diameter d, its length inside the hub about 1.5 d, never longer than needed, because an over-long key adds nothing but stress to the shaft.",
              "Two checks size the key: shear across its width and crushing on its flanks. For torque T at shaft radius d/2, the shearing force acts on the area w x l, so T = tau x w x l x d/2; crushing acts on the half height engaged on each side, T = sigma_c x (h/2) x l x (d/2). The key should be just weak enough to fail first - it is the cheap, replaceable fuse of the transmission, protecting a shaft that would otherwise be scrapped. Standard practice designs the key for about 1.25 times the shaft's rated torque so that the shaft is never the weaker member.",
              "The keyway itself is a stress raiser: an end-milled keyseat concentrates stress with Kt around 1.6 to 2.0, and a sled-runner (ramped) keyseat is kinder to fatigue. The shaft's ASME allowable shear drops by 25% when a keyway is present - a code detail examined in Unit III. Material is plain low-carbon or medium-carbon steel (C20 to C30), softer than a hardened shaft so the key deforms rather than the keyway. Keys are retained by set screws above them, by tight fits, or by the gib-head for easy removal. Woodruff keys find their niche on tapered shaft ends where a parallel key would rock.",
            ],
            bullets: [
              "Key families: sunk (flat, square, gib-head), saddle, Woodruff, feather and spline.",
              "Square key proportions: w = h = d/4; length about 1.5 d inside the hub.",
              "Shear check: T = tau x w x l x (d/2).",
              "Crushing check: T = sigma_c x (h/2) x l x (d/2).",
              "Design the key for 1.25 x shaft torque: the sacrificial, replaceable fuse.",
              "Keyway stress concentration Kt about 1.6-2.0; sled-runner keyseats are gentler.",
              "Material C20-C30 mild steel, softer than the shaft surface it protects.",
            ],
            table: {
              caption: "Key families and their service.",
              headers: ["Key", "Shape", "Allows sliding?", "Typical duty"],
              rows: [
                ["Flat (rectangular sunk)", "w x h, w about d/4", "no (press fit)", "general power transmission"],
                ["Square sunk", "w = h = d/4", "no", "heavier torque, positive drive"],
                ["Gib-head", "sunk with hooked head", "no", "easy removal near obstructions"],
                ["Woodruff", "semicircular disc", "no", "tapered shafts, self-aligning"],
                ["Feather / spline", "multiple parallel or involute teeth", "yes, under load", "gearboxes, clutches, sliding gears"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "One keyed joint, three members to check",
              caption: "Design each layer for the full torque; the key is the sacrificial member.",
              layers: [
                { label: "Hub", note: "crushing stress on its keyway flank; wall must not bulge" },
                { label: "Key", note: "shear across w x l and crushing on h/2 x l" },
                { label: "Shaft", note: "keyway stress concentration Kt 1.6-2.0; ASME 25% shear derating" },
              ],
            },
            callout: {
              type: "tip",
              title: "The d/2 lever",
              body: "Quote the pair T = tau w l d/2 (shear) and T = sigma_c h l d/4 (crushing) and point out the half-height and the d/2 lever on a sketch - most numerical slips in key questions live exactly there.",
            },
            keyTerms: [
              { term: "Sunk key", definition: "A key fitted into milled keyways in both shaft and hub, transmitting torque by shear and bearing rather than friction." },
              { term: "Gib-head key", definition: "A sunk taper key with a projecting head for quick removal with a lever." },
              { term: "Woodruff key", definition: "A semicircular disc key that seats in a deep curved shaft slot, self-aligning on tapered shaft ends." },
            ],
            examQuestions: [
              {
                q: "Classify keys, write the shear and crushing design equations for a square sunk key, and explain why the key is designed to fail before the shaft.",
                marks: 7,
                outline: [
                  "Families: sunk (flat, square, gib-head), saddle, Woodruff, feather and spline.",
                  "Proportions: w = h = d/4; length 1.5 d inside the hub.",
                  "Shear: T = tau x w x l x (d/2).",
                  "Crushing: T = sigma_c x (h/2) x l x (d/2).",
                  "Design key for 1.25 x shaft torque: cheap, replaceable fuse.",
                  "Keyway effects: Kt 1.6-2.0; ASME 25% derating of shaft shear.",
                  "Materials C20-C30, softer than the shaft surfaces.",
                ],
              },
              {
                q: "What is a feather key and where is it indispensable?",
                marks: 2,
              },
              {
                q: "Why does a keyway reduce the fatigue strength of a shaft, and which keyseat is gentler?",
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
      title: "Shafts and Couplings",
      summary:
        "The spinning backbone of every machine: shafts under combined bending and torsion, ASME-code fatigue design with shock factors, keys and splines carrying torque between shaft and hub, rigid sleeve and flange couplings with their proportions, and flexible couplings - Oldham, Hooke's and bushed-pin - matched to misalignment.",
      chapter: {
        number: "03",
        title: "Shafts and Couplings",
        intro:
          "Unit III designs the parts that rotate: shafts sized from combined bending and torsion through equivalent moments, refined by the ASME code's allowable-shear rules and shock factors, joined to hubs by keys and splines, and connected to each other by rigid and flexible couplings chosen by the misalignment they must forgive.",
        inOneBreath:
          "Torque follows from power and speed, bending from the load diagram, and the pair combines into Te = sqrt(M^2 + T^2) by Tresca or Me = sqrt(M^2 + 0.75 T^2) by von Mises; the ASME code prices the allowable shear at 0.3 Syt or 0.18 Sut, cuts it 25% for a keyway, and magnifies M and T by shock factors Kb and Kt; rotating shafts see fully reversed bending with steady torsion, so Soderberg closes the fatigue check; keys are designed to fail first and splines share torque across many flanks; rigid couplings demand alignment, with the protected flange coupling's proportions - hub 2d by 1.5d, flange 0.5d, bolt circle 3d - checked through the torque path; and flexible couplings are chosen by misalignment: bushed-pin for mixed damping, Oldham for parallel offset, Hooke's for angle, double Hooke's or CV for constant velocity.",
        sections: [
          {
            number: "3.1",
            title: "Shafts under combined bending and torsion",
            body: [
              "A transmission shaft rarely carries pure torsion: the torque it delivers also pulls on gears and pulleys, and their weights and belt tensions bend it. The power-speed pair fixes the torque: P = 2 pi N T / 60, with P in watts, N in rpm and T in newton-metres. Bending follows from a free-body diagram: reactions from the mounted loads, then the bending-moment diagram, whose largest ordinate locates the critical section. The two actions combine into a biaxial stress state at the shaft surface - normal stress from bending, shear from torsion - precisely where both peak.",
              "Classical analysis converts the pair into a single equivalent quantity using the Unit I theories. With sigma = 32 M / pi d^3 and tau = 16 T / pi d^3, the Tresca combination gives the equivalent twisting moment Te = sqrt(M^2 + T^2) and the von Mises combination the equivalent bending moment Me = sqrt(M^2 + 0.75 T^2); then d^3 = 16 Te / pi tau_allow or d^3 = 32 Me / pi sigma_allow. The 0.75 descends from the 3 tau^2 term of the von Mises expression: 4 M^2 + 3 T^2 = 4 Me^2. Both forms are quotable in the exam; state which theory each belongs to.",
              "A worked size check: 20 kW at 200 rpm gives T = 60P/(2 pi N) = 954.9 N m; suppose the bending diagram peaks at M = 400 N m. Then Te = sqrt(400^2 + 954.9^2), about 1035 N m, and with an allowable shear of 42 N/mm2, d^3 = 16 Te / (pi tau_allow) = 16 x 1.035e6 / (pi x 42), about 125,500 mm3, so d is about 50 mm - a memorable round answer. Rigidity, keyway and fatigue checks follow in the next two sections; first sizing is deliberately quick because iteration is expected.",
            ],
            bullets: [
              "Torque from power and speed: T = 60 P / (2 pi N) N m (P in kW).",
              "Bending from the load diagram: reactions, then M_max at the critical section.",
              "Surface stresses: sigma = 32 M / pi d^3 (bending), tau = 16 T / pi d^3 (torsion).",
              "Tresca: Te = sqrt(M^2 + T^2); d^3 = 16 Te / (pi tau_allow).",
              "Von Mises: Me = sqrt(M^2 + 0.75 T^2); d^3 = 32 Me / (pi sigma_allow).",
              "Worked check: 20 kW at 200 rpm with M = 400 N m gives d about 50 mm at tau = 42 N/mm2.",
              "Shock factors multiply M and T before combining under the ASME code (next section).",
            ],
            codeExample: {
              language: "python",
              caption: "First sizing of a line shaft under combined loading.",
              code: `import math

P_kw = 20.0        # transmitted power, kW
N = 200.0          # speed, rpm
M = 400.0e3        # maximum bending moment, N mm
tau_allow = 42.0   # allowable shear stress, N/mm2

# Torque from power and speed
T = 60.0e6 * P_kw / (2.0 * math.pi * N)   # N mm
print("torque          =", round(T / 1000.0, 1), "N m")

# Tresca equivalent twisting moment
Te = math.sqrt(M * M + T * T)
print("Te (Tresca)     =", round(Te / 1000.0, 1), "N m")

# Diameter from the pure-torsion sizing formula
d = ((16.0 * Te) / (math.pi * tau_allow)) ** (1.0 / 3.0)
print("diameter d      =", round(d, 1), "mm")

# von Mises companion through the equivalent bending moment
Me = math.sqrt(M * M + 0.75 * T * T)
print("Me (von Mises)  =", round(Me / 1000.0, 1), "N m")`,
            },
            diagram: {
              kind: "flow",
              title: "Sizing a transmission shaft",
              caption: "Six moves from power rating to a rounded-up standard diameter.",
              steps: [
                { label: "Power and speed", note: "T = 60P / (2 pi N)" },
                { label: "Loads on the shaft", note: "gear forces, belt pulls, weights" },
                { label: "Bending-moment diagram", note: "find M_max and where it acts" },
                { label: "Combine", note: "Te = sqrt(M^2 + T^2); Me = sqrt(M^2 + 0.75 T^2)" },
                { label: "Diameter", note: "d^3 = 16Te/(pi tau) or 32Me/(pi sigma)" },
                { label: "Round and re-check", note: "standard size, keyway, fatigue, deflection" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "State the formula pair with their theory labels: Te (Tresca, shear basis) and Me with the 0.75 (von Mises, normal-stress basis). Examiners specifically hunt for the 0.75 - it is the most-dropped mark in shaft numericals.",
            },
            keyTerms: [
              { term: "Equivalent twisting moment", definition: "Te = sqrt(M^2 + T^2): the pure torque that would shear a shaft as severely as the actual bending and torsion combined, by Tresca." },
              { term: "Equivalent bending moment", definition: "Me = sqrt(M^2 + 0.75 T^2): the pure bending moment equally dangerous by von Mises." },
              { term: "Line shaft", definition: "A long transmission shaft carrying several pulleys or gears, designed section by section for the local M and T." },
            ],
            examQuestions: [
              {
                q: "A shaft transmits power under combined bending and torsion. Derive the equivalent twisting and bending moments from the Tresca and von Mises theories and outline the design procedure.",
                marks: 7,
                outline: [
                  "Torque from power: T = 60P / (2 pi N) N m.",
                  "Bending from the load diagram: reactions, then M_max at the critical section.",
                  "Surface stresses: sigma = 32M/pi d^3, tau = 16T/pi d^3.",
                  "Tresca: Te = sqrt(M^2 + T^2); d^3 = 16 Te / (pi tau_allow).",
                  "Von Mises: Me = sqrt(M^2 + 0.75 T^2); d^3 = 32 Me / (pi sigma_allow).",
                  "Shock and fatigue factors multiply M and T before combining (ASME code).",
                  "Follow with keyway derating and rigidity checks.",
                ],
              },
              {
                q: "Write the expressions for bending stress and torsional shear at a shaft surface in terms of d.",
                marks: 2,
              },
              {
                q: "Why does the von Mises equivalent bending moment carry a 0.75 with T squared?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "ASME code and fatigue design of shafts",
            body: [
              "The ASME design code for transmission shafting packages Section 3.1's mechanics into rules of thumb. The allowable shear stress is 30% of yield or 18% of ultimate, whichever is smaller, for a plain commercial steel shaft; with a keyway the figure drops by a further 25%. Bending moments are magnified by a fatigue-shock factor Kb and torques by a service-shock factor Kt before the combination: Te = sqrt((Kb M)^2 + (Kt T)^2). For rotating machinery under steady load Kb = Kt = 1.0; light shock 1.5 to 2.0; sudden shock 2.0 to 3.0 - the values are tabulated in every design data book and quoted freely in exams.",
              "A rotating shaft is its own fatigue machine: because it turns, a fixed transverse load reverses the bending stress in every surface fibre - fully reversed bending with amplitude 32 M / pi d^3 - while the torque from a steady motor stays steady, supplying the mean. The fatigue design therefore feeds the Soderberg line of Unit I: sigma_a (carrying Kf for the keyway or shoulder) and tau_m combine, and the section that satisfies the line with the desired factor is safe. The size factor cannot be forgotten: the endurance limit decays with diameter, roughly kb = 1.85 d^-0.095 for bar between 2.5 and 150 mm.",
              "Strength sizing is only half the contract; rigidity is the other. Slopes at bearings are kept below roughly 0.001 rad, gear-mesh misalignments under about 0.05 mm, and torsional twist below about 0.25 degrees per metre for machine-tool service. Critical speed - the whirling resonance of the shaft-mass-elastic system - must clear the operating speed by 20% or more. A shaft that passes every stress check yet whips at speed has still failed; the exam expects the phrase 'check for rigidity and critical speed' as the closing line of any shaft-design answer.",
            ],
            bullets: [
              "ASME allowable shear: 0.3 Syt or 0.18 Sut, whichever is smaller.",
              "Keyway present: reduce the allowable shear by a further 25%.",
              "Shock factors: Kb on bending, Kt on torsion; 1.0 steady, 1.5-2.0 light, 2.0-3.0 sudden.",
              "Combined ASME form: Te = sqrt((Kb M)^2 + (Kt T)^2).",
              "Rotating shaft: bending fully reversed (amplitude), torsion steady (mean) - a Soderberg problem.",
              "Size factor kb = 1.85 d^-0.095 (2.5 to 150 mm) trims the endurance limit as diameter grows.",
              "Rigidity: slope under 0.001 rad at bearings; critical speed 20% clear of running speed.",
            ],
            table: {
              caption: "ASME shock factors for rotating shafts (applied before combining).",
              headers: ["Service", "Kb (bending)", "Kt (torsion)", "Example"],
              rows: [
                ["Steady load", "1.0", "1.0", "motor-generator sets, steady line shafts"],
                ["Light shock", "1.5 - 2.0", "1.0 - 1.5", "gearboxes, machinery with slight fluctuation"],
                ["Sudden shock", "2.0 - 3.0", "1.5 - 3.0", "crushers, punch presses, reciprocating drives"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The fatigue design loop for a shaft",
              caption: "Every increase in d changes every stress - so the loop closes.",
              steps: [
                { label: "Assume d", note: "first guess from torque alone" },
                { label: "Compute M and T", note: "at critical sections, with Kb and Kt" },
                { label: "Apply Kf, size and surface factors", note: "working stresses and reduced Se" },
                { label: "Check Soderberg or ASME", note: "is n at or above target?" },
                { label: "Increase d and repeat", note: "loop until safe, then round up" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two sentences, easy marks",
              body: "Write 'the bending stress is fully reversed because the shaft rotates' and 'the keyway reduces the allowable shear by 25% under the ASME code' in any shaft-fatigue answer - each sentence is a mark that takes ten seconds.",
            },
            keyTerms: [
              { term: "ASME shaft code", definition: "The rule set for transmission shafting: allowable shear = 0.3 Syt or 0.18 Sut (less 25% with a keyway), with Kb/Kt shock factors." },
              { term: "Fully reversed stress", definition: "A stress cycling symmetrically about zero, as bending is at the surface of a rotating shaft under a steady transverse load." },
              { term: "Whirling (critical) speed", definition: "The shaft speed coinciding with its natural transverse frequency, at which unbalance whirls the shaft to destructive amplitude." },
            ],
            examQuestions: [
              {
                q: "State the ASME code for the design of transmission shafts and design-check a rotating shaft for fatigue by the Soderberg approach.",
                marks: 7,
                outline: [
                  "Allowable shear: 0.3 Syt or 0.18 Sut, whichever is smaller.",
                  "Keyway: reduce the allowable shear by 25%.",
                  "Shock factors Kb and Kt by service class (steady, light, sudden).",
                  "Te = sqrt((Kb M)^2 + (Kt T)^2) for the torsion-based size.",
                  "Rotating shaft: reversed bending amplitude plus steady torsion mean.",
                  "Apply Kf at the keyway or shoulder and the size factor to Se; check Soderberg.",
                  "Close with rigidity: slope, deflection, twist and critical speed.",
                ],
              },
              {
                q: "Give the ASME allowable shear stress for a shaft with and without a keyway.",
                marks: 2,
              },
              {
                q: "Why is the bending stress at a rotating shaft's surface fully reversed?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Keys and splines in power transmission",
            body: [
              "When the key joins the transmission, the whole torque path narrows to one small parallelepiped, so the key is sized against the shaft's full rated torque - conventionally 1.1 to 1.5 times it - making the key the intentional weak link. With w = h = d/4 and length 1.5 d, the two equations of Section 2.5 (shear and crushing) usually clear with margin; when one key cannot, two keys at 90 or 120 degrees share the load only partially - about 1.5 times a single key for two - and the step to splines has arrived. Splines are the answer when the hub must also slide.",
              "A spline multiplies the key: 4, 6, 10 or 16 proportioned teeth run the full hub length, sharing torque so that crushing and shear per tooth fall to a fraction. Parallel-side splines are easiest to cut; involute splines have flanks like gear teeth, are stronger for their size, self-centre under torque and can be roll-finished; tapered splines lock axially without extra fasteners. Splined hubs slide under load - gearboxes, clutches, automotive propeller shafts - because dozens of flanks in contact keep contact stress low while transmitting what no single key could.",
              "The price is in the shaft's fatigue and the hub's stiffness. Each spline groove is a stress raiser (Kf 1.5 to 2.5), so shaft sections through splines are stepped up in diameter and fillet-rooted involute profiles are chosen when cycles are counted. Fretting corrosion plagues sliding splines and is fought with lubrication, generous lead-in chamfers and, occasionally, crowned flanks for angular misalignment. In exam numericals, check in order: the torque capacity of the shaft in torsion, the single key in shear and crushing, and - if insufficient - the spline in shear and bearing at its pitch radius, showing each comparison.",
            ],
            bullets: [
              "Key designed for 1.1-1.5 x shaft torque: the sacrificial member of the drive.",
              "Two keys at 90 or 120 degrees give only about 1.5 x single-key capacity.",
              "Splines: 4, 6, 10 or 16 teeth sharing torque across many flanks.",
              "Parallel-side (cheap), involute (strong, self-centering, rollable), tapered (axial locking).",
              "Splines allow sliding under load: gearbox gears, clutches, propeller shafts.",
              "Spline grooves raise shaft Kf to 1.5-2.5; step the diameter up through the spline.",
              "Fretting corrosion at sliding splines: fight with oil, chamfers, crowned flanks.",
            ],
            table: {
              caption: "Single key versus spline connection.",
              headers: ["Aspect", "Square key", "Spline (say 6 teeth)"],
              rows: [
                ["Torque capacity", "one shear plane, one flank", "6 or more flanks share the load"],
                ["Sliding under load", "no", "yes - gearboxes, clutches"],
                ["Shaft weakening", "one keyway, Kt 1.6-2.0", "multiple grooves, fillet roots available"],
                ["Self-centering", "no", "involute flanks centre under torque"],
                ["Cost", "minimal", "special cutters or hobbing"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Key or spline?",
              caption: "One flank versus many - the choice follows torque and the need to slide.",
              left: {
                heading: "Single square key",
                items: [
                  "w = h = d/4, length 1.5 d",
                  "Checked in shear and crushing",
                  "Cheap and universal for one hub",
                  "No sliding under load",
                  "One keyway raises shaft stress",
                ],
              },
              right: {
                heading: "Splined connection",
                items: [
                  "4 to 16 teeth, involute or parallel",
                  "Torque shared by all flanks",
                  "Slides under load: gearbox gears",
                  "Self-centering under torque (involute)",
                  "Costly to cut; grooves stress the shaft",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Count the flanks",
              body: "In spline numericals the torque check per tooth runs through the number of engaged flanks and the pitch radius - count flanks carefully, because most marks die in the flank count, not the stress arithmetic.",
            },
            keyTerms: [
              { term: "Spline", definition: "A multiple-tooth shaft-hub connection sharing torque across many flanks and permitting sliding under load." },
              { term: "Involute spline", definition: "A spline whose flanks are involute curves, like gear teeth: stronger, self-centering and roll finished." },
              { term: "Fretting corrosion", definition: "Surface damage at micro-sliding contacts (splines, press fits) from cyclic relative motion under pressure." },
            ],
            examQuestions: [
              {
                q: "Compare keyed and splined shaft-hub connections and design the key for a shaft transmitting a given torque, stating why keys are deliberately under-rated relative to the shaft.",
                marks: 7,
                outline: [
                  "Key sizing: w = h = d/4, l = 1.5 d inside the hub.",
                  "Shear check: T = tau w l d/2; crushing: T = sigma_c (h/2) l (d/2).",
                  "Design key for 1.1-1.5 x shaft torque: sacrificial, replaceable fuse.",
                  "Two keys at 90 degrees give only about 1.5 x single-key capacity.",
                  "Splines: 4-16 teeth share torque and slide under load.",
                  "Involute splines self-centre; parallel-side are cheaper.",
                  "Fatigue penalty: grooves raise Kf, so step up the diameter through the spline.",
                ],
              },
              {
                q: "What limits the torque rating of a single key - shear or crushing? When does the answer flip?",
                marks: 2,
              },
              {
                q: "Name three advantages of involute over parallel-side splines.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Rigid couplings: sleeve and flange",
            body: [
              "A coupling joins two shafts end to end. Rigid couplings - sleeve (muff), split-muff (clamp) and flange - assume the shafts can be aligned once and kept aligned; flexible couplings (next section) tolerate what fabrication cannot. The plain muff is a cast-iron sleeve keyed over both shafts: cheapest, for light loads at modest speed. The split muff splits longitudinally into two halves bolted around the shafts: it assembles without end play, grips over a long bore, and suits transmission lines where a shaft cannot be slid out of the way.",
              "The protected flange coupling is the standard rigid workhorse. Each shaft carries a keyed flange, one with a spigot and one with a matching recess for concentricity, bolted through n bolts on a bolt circle; the protective circumferential shroud formed by the extended flange rims buries the bolt heads and nuts so that nothing rotating can catch a worker's sleeve. The classical proportions run hub diameter 2d, hub length 1.5d, flange thickness 0.5d, bolt-circle diameter 3d, with 3 or 4 bolts up to 100 mm shafts and 6 above; the bolts are checked in shear over the bolt circle, T = n (pi d1^2/4) tau R.",
              "Design is a weakest-link audit along the torque path: key in shear and crushing, hub wall as a hollow shaft in torsion, the flange section where the web meets the rim, and the bolts in shear at the bolt-circle radius - each capacity computed, the least stated as the coupling rating. The empirical proportions make most checks pass automatically, which is exactly why the bolt check is the numerical to expect. Unprotected flange couplings delete the shroud for lighter duty; fitted reamed-bolt couplings carry shear without slip for marine and mill service.",
            ],
            bullets: [
              "Rigid families: plain muff (sleeve), split muff (clamp), protected and unprotected flange.",
              "Split muff: two bolted halves - assembly without dismantling the line.",
              "Protected flange: spigot-and-recess alignment; shroud covers bolt heads for safety.",
              "Proportions: hub OD 2d, hub length 1.5d, flange thickness 0.5d, bolt circle 3d.",
              "Bolts: 3-4 up to 100 mm shafts, 6 above; checked in shear at the bolt-circle radius.",
              "Bolt capacity: T = n (pi d1^2/4) tau R.",
              "Weakest-link audit: key, hub torsion, flange section, bolts - the least rates the coupling.",
            ],
            table: {
              caption: "Protected flange coupling - proportions and duties (shaft dia d).",
              headers: ["Element", "Proportion", "Chief check"],
              rows: [
                ["Hub", "OD 2d, length 1.5d", "torsion of hub wall as a hollow shaft"],
                ["Flange web", "thickness 0.5d", "torsion at the hub-to-rim interface"],
                ["Bolt circle", "diameter 3d", "bolt shear at radius 1.5d"],
                ["Bolts", "3-4 (d up to 100 mm), 6 above", "T = n pi d1^2 tau R / 4"],
                ["Shroud", "rim projects over bolt heads", "safety, not strength"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Torque path through a protected flange coupling",
              caption: "Follow the torque; whichever element is weakest sets the rating.",
              stages: [
                { label: "Driving shaft", note: "enters hub on its key" },
                { label: "Key", note: "shear and crushing, both sides" },
                { label: "Flange hub and web", note: "torsion of hub wall and flange section" },
                { label: "Bolts", note: "shear at the bolt-circle radius 1.5d" },
                { label: "Mating flange", note: "spigot keeps both truly concentric" },
                { label: "Driven shaft", note: "torque delivered" },
              ],
            },
            callout: {
              type: "tip",
              title: "Proportions are pure marks",
              body: "The proportion table is pure recall: hub 2d by 1.5d, flange 0.5d, bolt circle 3d. Write them in a margin box at the top of the answer, then check the bolts in shear - that is the whole question in most papers.",
            },
            keyTerms: [
              { term: "Protected flange coupling", definition: "A rigid flange coupling whose flange rims form a shroud covering bolt heads and nuts for operator safety." },
              { term: "Split muff coupling", definition: "A rigid sleeve coupling made of two axial halves bolted around the shafts, assembled without dismantling the line." },
              { term: "Bolt circle", definition: "The pitch circle on which coupling bolts sit; shear acts at its radius when torque crosses the flange joint." },
            ],
            examQuestions: [
              {
                q: "Sketch a protected flange coupling, give its standard proportions, and derive the torque capacity of the bolts in shear.",
                marks: 7,
                outline: [
                  "Sketch: two keyed flanges, spigot and recess, shroud over the bolts.",
                  "Proportions: hub OD 2d, hub length 1.5d, flange 0.5d, bolt circle 3d.",
                  "Torque reaches the bolts at radius R = 1.5d.",
                  "One bolt: force = (pi d1^2/4) tau; all n bolts: T = n pi d1^2 tau R / 4.",
                  "Also check key shear and crushing and hub wall torsion.",
                  "Least capacity rates the coupling.",
                  "Mention unprotected (no shroud) and fitted-bolt variants.",
                ],
              },
              {
                q: "How does the spigot-and-recess arrangement help a flange coupling?",
                marks: 2,
              },
              {
                q: "Why are coupling bolts designed in shear rather than tension where the flanges butt?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Flexible couplings: Oldham, Hooke's and bushed-pin",
            body: [
              "Perfect alignment is unattainable and unsustainable: thermal growth, foundation settlement and bearing wear all move shafts. Misalignment comes in kinds - axial (end float), angular, parallel (offset) and combinations - and each coupling family tolerates a different mix. Flexible couplings insert an elastic or sliding element between the halves: rubber bushes, pins, discs, gear rings or sliding tongues. Beyond absorbing misalignment they also cushion shock, damp torsional vibration and provide electrical insulation - the bushed-pin flexible coupling on every motor-pump set is chosen as much for its damping as for its fraction of a millimetre of forgiveness.",
              "The Oldham coupling attacks pure parallel offset. Its central disc carries a tongue on one face and a groove on the other, set at 90 degrees, sliding in matching grooves in the two flanges; as the shafts rotate, the disc centre orbits, absorbing the offset while both shafts turn at exactly equal speed. Sliding friction confines it to modest speeds, and the grooves want grease. Hooke's universal joint answers angular misalignment: two yoked shafts and a central cross, content up to about 30 degrees - but the driven speed oscillates, its ratio to the driver swinging between cos alpha and 1/cos alpha every revolution. Two Hooke's joints in series, yokes aligned and an intermediate shaft between them, cancel the fluctuation and restore constant velocity.",
              "Selection logic for the exam: rigid flange only if the shafts are aligned and will stay so; bushed-pin for small mixed misalignment plus shock damping on machinery drives; Oldham for pure offset at low speed - machine tools, tachometer drives; single Hooke's where the angle is fixed and speed ripple is acceptable; double Hooke's or a constant-velocity joint where it is not, as in automobile propeller shafts and front-wheel drives. Each application sentence in the answer earns its own half-mark; examiners reward the matched table of coupling to misalignment.",
            ],
            bullets: [
              "Misalignment kinds: axial (end float), angular, parallel offset, and combined.",
              "Rigid couplings accept none; flexible elements forgive fractions of a millimetre.",
              "Bushed-pin flexible coupling: rubber bushes on pins; small misalignments plus damping.",
              "Oldham: central disc with perpendicular tongues; absorbs parallel offset at equal speed.",
              "Oldham limits: sliding friction caps speed; grooves need lubrication.",
              "Hooke's joint: up to about 30 degrees; speed ratio swings between cos alpha and 1/cos alpha.",
              "Double Hooke's, yokes aligned: constant velocity restored.",
            ],
            table: {
              caption: "Matching coupling to misalignment and duty.",
              headers: ["Coupling", "Parallel offset", "Angular", "Damping", "Typical service"],
              rows: [
                ["Rigid flange", "no", "no", "none", "aligned mill lines, test rigs"],
                ["Bushed-pin flexible", "small", "small", "good (rubber)", "motor-pump sets, compressors"],
                ["Oldham", "yes, generous", "no", "none (sliding)", "machine tools, countershafts"],
                ["Hooke's universal", "no", "up to about 30 deg", "none", "propeller shafts, steering"],
                ["Double Hooke / CV", "some", "large", "none", "front-wheel drive shafts"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a coupling from the misalignment found",
              caption: "Dial-gauge or laser alignment first, then the family follows.",
              start: "Shafts checked with dial gauge / laser",
              branches: [
                { label: "Aligned within tolerance", outcome: "Rigid flange coupling: cheapest, exact and rigid", good: true },
                { label: "Parallel offset, low speed", outcome: "Oldham disc absorbs the offset at equal speed", good: true },
                { label: "Angular misalignment", outcome: "Single Hooke's joint - accept the speed ripple", good: true },
                { label: "Force a rigid coupling anyway", outcome: "Bearing loads, fatigue and seal failures within months", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The Hooke's ripple",
              body: "The classic 2-marker: why does a single Hooke's joint not give constant velocity? Answer with the swing of the speed ratio between cos alpha and 1/cos alpha - and add that two joints with yokes in line cancel it.",
            },
            keyTerms: [
              { term: "Oldham coupling", definition: "A coupling whose floating central disc with two perpendicular tongues slides to absorb pure parallel offset while keeping speeds equal." },
              { term: "Hooke's joint", definition: "A universal joint of two yokes and a cross, transmitting torque across a fixed angle with a once-per-revolution speed oscillation." },
              { term: "Misalignment", definition: "Any deviation of two shaft axes from a common line: axial, angular, parallel or combined." },
            ],
            examQuestions: [
              {
                q: "Classify couplings, explain how an Oldham coupling absorbs parallel offset, and show why a single Hooke's joint produces a fluctuating speed ratio.",
                marks: 7,
                outline: [
                  "Rigid versus flexible; misalignment types: axial, angular, parallel.",
                  "Oldham: two flanges plus central disc, tongues at 90 degrees.",
                  "Disc centre orbits once per revolution, tracking the offset.",
                  "Speeds remain equal; sliding friction limits speed; grooves need grease.",
                  "Hooke's: yokes and cross; transmits up to about 30 degrees.",
                  "Speed ratio swings between cos alpha and 1/cos alpha each revolution.",
                  "Remedies: double Hooke with aligned yokes, or constant-velocity joints.",
                ],
              },
              {
                q: "State the misalignment a rigid coupling can safely accept.",
                marks: 2,
              },
              {
                q: "Why does an Oldham coupling's central disc need lubrication?",
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
      title: "Springs, Levers and Cams",
      summary:
        "The elastic and kinematic elements: close-coiled helical springs with the Wahl factor, laminated leaf springs with nip, torsion and spiral springs working in bending, lever design from fulcrum pin to tapered arm, and cams with follower motion laws and the pressure angle.",
      chapter: {
        number: "04",
        title: "Springs, Levers and Cams",
        intro:
          "Unit IV designs the elements that deflect and the elements that oscillate: helical springs where the Wahl factor corrects the curvature of the wire, leaf springs built from graduated leaves and pre-stressed by nip, torsion and spiral springs whose wires bend, levers proportioned from fulcrum pin to tapered arm, and cams whose pressure angle decides whether a follower follows or jams.",
        inOneBreath:
          "A close-coiled helical spring carries axial load through torsion of the wire, tau = K x 8PC/(pi d^2) with Wahl's K = (4C - 1)/(4C - 4) + 0.615/C, deflecting delta = 8PC^3 n/G at rate Gd/(8C^3 n); leaf springs stack graduated leaves to approximate the uniform-strength cantilever, with sigma = 6WL/(nbt^2) and delta = 4WL^3/(Enbt^3), pre-stressed by nip between full-length and graduated leaves; torsion springs bend their wire, sigma = 32T/(pi d^3) with a curvature correction and theta = 64TDn/(Ed^4); levers are designed from moment equilibrium through fulcrum pin, boss and tapered arm; and cams are judged by their motion law's smoothness and their pressure angle, held near 30 degrees for translating roller followers by enlarging the base circle.",
        sections: [
          {
            number: "4.1",
            title: "Helical springs and the Wahl factor",
            body: [
              "A spring is the machine's elastic reservoir: it absorbs, stores and returns energy, and its deflection is the point, not a defect. Close-coiled helical springs - compression between flat seats, tension through hooks - carry the load along the coil axis while the wire itself twists, so the governing stress is torsion in the wire. Vocabulary: mean coil diameter D, wire diameter d, spring index C = D/d (the shape number), number of active coils n, free and solid lengths, pitch. C between 6 and 12 is the comfortable range: too low and curvature bites at the inside of the coil, too high and the spring wanders and buckles.",
              "Two corrections and one deflection formula do all the design. Bare torsion gives tau = 8 P D / pi d^3, but the inside of the coil is stressed above this by curvature and by direct shear - Wahl's factor bundles both: K = (4C - 1)/(4C - 4) + 0.615/C, and tau = K x 8 P C / pi d^2. Deflection follows from torsional strain energy: delta = 8 P D^3 n / G d^4 = 8 P C^3 n / G, so the spring rate k = P/delta = G d / (8 C^3 n) - everything a spring is hides in the cube of its index. Surging, the resonance of the coil mass with its own end waves, is suppressed by keeping the natural frequency at least 15 to 20 times the forcing frequency.",
              "Design is a two-step iteration on C: pick a trial C, get K, solve for d from the allowable stress at solid load, set D = C d, then compute n from the required deflection or rate and check free length, buckling of the compressed column and solid stress. Materials: oil-tempered carbon steel for everyday duty, hard-drawn music wire at small sizes, chrome-vanadium and chrome-silicon at high stress or temperature, stainless steel and phosphor bronze for corrosion and conductivity. Shot peening buys 20-30% more allowable stress; presetting - yielding once, deliberately - locks in favourable residual stresses for high-duty valve springs.",
            ],
            bullets: [
              "Spring index C = D/d; comfortable range 6 to 12.",
              "Bare torsion: tau = 8PD/(pi d^3); corrected: tau = K x 8PC/(pi d^2).",
              "Wahl factor: K = (4C - 1)/(4C - 4) + 0.615/C (curvature + direct shear).",
              "Deflection: delta = 8PD^3n/(Gd^4) = 8PC^3n/G.",
              "Spring rate: k = Gd/(8C^3 n) - the index appears cubed.",
              "Surging: keep natural frequency 15-20 x the forcing frequency.",
              "Peening and presetting raise allowable stress for valve-spring duty.",
            ],
            codeExample: {
              language: "python",
              caption: "Wahl factor, stress, deflection and rate of a close-coiled spring.",
              code: `import math

P = 2500.0    # axial load, N
C = 7.0       # spring index D/d
d = 12.0      # wire diameter, mm
n = 8.0       # active coils
G = 81370.0   # shear modulus of steel, N/mm2

D = C * d                     # mean coil diameter, mm
K_wahl = (4.0 * C - 1.0) / (4.0 * C - 4.0) + 0.615 / C

tau = K_wahl * 8.0 * P * C / (math.pi * d * d)     # corrected stress
delta = 8.0 * P * D**3 * n / (G * d**4)            # deflection, mm
rate = G * d / (8.0 * C**3 * n)                    # spring rate, N/mm

print("mean dia D      =", D, "mm")
print("Wahl factor     =", round(K_wahl, 3))
print("shear stress    =", round(tau, 1), "N/mm2")
print("deflection      =", round(delta, 2), "mm")
print("spring rate     =", round(rate, 1), "N/mm")`,
            },
            diagram: {
              kind: "flow",
              title: "Designing a close-coiled helical spring",
              caption: "Trial index, Wahl stress, coil count, then the secondary checks.",
              steps: [
                { label: "Load and deflection targets", note: "P at delta, or a rate k" },
                { label: "Trial index C 6-12", note: "material and space limits" },
                { label: "Wahl stress", note: "tau = K 8PC/(pi d^2) fixes d" },
                { label: "Coil geometry", note: "D = Cd; check buckling and solid length" },
                { label: "Coil count", note: "n from delta = 8PC^3 n/G" },
                { label: "Secondary checks", note: "surge frequency; peening or preset" },
              ],
            },
            callout: {
              type: "exam",
              title: "Wahl by name",
              body: "Wahl's formula is asked by name: K = (4C - 1)/(4C - 4) + 0.615/C. The fraction is the curvature term and 0.615/C is direct shear - splitting them earns the extra mark in longer questions.",
            },
            keyTerms: [
              { term: "Spring index", definition: "C = D/d, mean coil diameter over wire diameter; the single number controlling curvature effects and rate." },
              { term: "Wahl factor", definition: "K = (4C-1)/(4C-4) + 0.615/C; multiplies the bare torsion stress for curvature and direct shear at the inside of the coil." },
              { term: "Spring rate", definition: "Stiffness k = P/delta = Gd/(8C^3 n): force per unit deflection, set almost entirely by C cubed." },
            ],
            examQuestions: [
              {
                q: "Derive the stress (with Wahl correction) and deflection expressions for a close-coiled helical spring and outline its design procedure.",
                marks: 7,
                outline: [
                  "Wire in torsion: tau = 8PD/(pi d^3) from T = P x D/2.",
                  "Curvature plus direct shear: Wahl K = (4C-1)/(4C-4) + 0.615/C.",
                  "Working stress: tau = K 8PC/(pi d^2) = K 8PD/(pi d^3).",
                  "Deflection from torsional energy: delta = 8PD^3 n/(Gd^4) = 8PC^3 n/G.",
                  "Rate k = Gd/(8C^3 n); C typically 6-12.",
                  "Design: trial C, then d from stress, then D, then n from deflection.",
                  "Checks: solid stress, buckling, surge; peening and preset for duty.",
                ],
              },
              {
                q: "Define spring index and state its usual range.",
                marks: 2,
              },
              {
                q: "Why must the inside of the coil be corrected above the bare torsion formula?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Leaf springs and nip",
            body: [
              "A leaf spring is a beam built from strips - leaves - stacked and clipped so that each adds stiffness; the semi-elliptic form, shackled at the ends and loaded at the centre, is the suspension of trucks and rail stock, the quarter-elliptic a cantilever for lighter axles. The master leaf, longest, with upturned eyes for the shackle pins, carries the end reactions; graduated leaves of reducing length spread the bending; a centre bolt and U-clips hold the nest. The eye at one end runs in a fixed bracket, the other in a shackle that accommodates the change of span as the spring deflects.",
              "Analysis idealises the stack as a beam of uniform strength. For a cantilever nest of n leaves, width b, thickness t, length L, tip load W: sigma = 6WL/(n b t^2) and delta = 4WL^3/(E n b t^3). The semi-elliptic spring is two such cantilevers back to back: a central load over span 2L halves both stress and deflection relative to the cantilever values. Because leaves slide on one another as the spring deflects, interleaf friction damps the ride - welcome in trucks, tuned out by liners or single-leaf designs in cars. Materials: 55Si2Mn90 silico-manganese steel, quenched and tempered.",
              "Two design nuances matter in exams. Nip: the full-length leaves are formed with slightly less initial curvature than the graduated ones, so assembling the centre bolt bends them back and pre-stresses them opposite to the service load - the stress range each cycle shrinks and fatigue life climbs. And the ideal cantilever of uniform strength is a triangular plate; a graduated stack of rectangular leaves approximates that triangle leaf by leaf, which is why every leaf can reach a similar peak stress and nothing is wasted. Overload a leaf spring past yield and it takes a permanent set - visible as lost camber, fixed only by re-tempering or replacement.",
            ],
            bullets: [
              "Types: semi-elliptic (trucks, rail), quarter-elliptic (light cantilevers), full-elliptic (historic).",
              "Construction: master leaf with eyes, graduated leaves, centre bolt, U-clips, shackle at one end.",
              "Cantilever nest: sigma = 6WL/(n b t^2); delta = 4WL^3/(E n b t^3).",
              "Semi-elliptic = two cantilevers back to back: halve both values for the same central load.",
              "Nip: curvature mismatch pre-stresses full-length leaves against service bending.",
              "Graduated leaves approximate the triangular, uniform-strength cantilever.",
              "Material 55Si2Mn90; interleaf friction is free damping; parabolic single leaves remove it.",
            ],
            table: {
              caption: "Leaf spring families.",
              headers: ["Type", "Support", "Load point", "Modern use"],
              rows: [
                ["Semi-elliptic", "simply supported (eyes)", "centre", "trucks, trailers, rail stock"],
                ["Quarter-elliptic", "fixed at the root", "free tip", "light axles, vintage cars"],
                ["Full-elliptic", "two stacked semi-elliptics", "centres tied", "historic carriages"],
                ["Single-leaf parabolic", "simply supported", "centre", "car and van rear axles, friction-free"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a semi-elliptic leaf spring",
              caption: "Top to bottom: the nest as it is assembled on the axle.",
              layers: [
                { label: "Master leaf with eyes", note: "carries end reactions; shackle takes the span change" },
                { label: "Full-length leaves", note: "nipped against the graduated stack" },
                { label: "Graduated leaves", note: "lengths stepped down; approximate the triangle" },
                { label: "Centre bolt and U-clips", note: "locate the nest; clips stop leaf splay" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the stack with master leaf, eyes, graduated leaves, centre bolt and clips labelled, then write the cantilever pair sigma = 6WL/nbt^2 and delta = 4WL^3/Enbt^3 and halve for semi-elliptic - that combination is the whole 7-marker.",
            },
            keyTerms: [
              { term: "Master leaf", definition: "The longest leaf, formed with eyes at both ends, carrying the spring's end reactions." },
              { term: "Nip", definition: "The deliberate curvature mismatch between full-length and graduated leaves; assembling it pre-stresses the stack against service bending." },
              { term: "Graduated leaves", definition: "Leaves of progressively shorter length that build the tapered, uniform-strength shape." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a semi-elliptic laminated leaf spring, derive stress and deflection for the leaf stack, and explain nip.",
                marks: 7,
                outline: [
                  "Construction: master leaf with eyes, graduated leaves, centre bolt, clips.",
                  "Ideal: the uniform-strength cantilever is triangular; the stack approximates it.",
                  "Cantilever nest: sigma = 6WL/(n b t^2).",
                  "Deflection: delta = 4WL^3/(E n b t^3).",
                  "Semi-elliptic = two cantilevers back to back: halve both.",
                  "Nip: pre-stress from curvature mismatch; smaller stress range, longer life.",
                  "Interleaf friction: free damping; parabolic single leaf removes it.",
                ],
              },
              {
                q: "What is the role of the shackle at one end of a semi-elliptic spring?",
                marks: 2,
              },
              {
                q: "Why are leaves graduated rather than all full length?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Torsion and spiral springs",
            body: [
              "Close-coiled torsion springs are wound to work by winding: the load, applied to the projecting legs as a torque, closes or opens the coil, and the wire is stressed in bending rather than torsion - the defining contrast with the axial-load springs of Section 4.1. Clothes-pegs, spring hinges, ratchet returns, garage-door counterbalances and mousetrap springs are everyday examples. The coils are wound with a slight axial pitch so adjacent coils do not rub, and the spring is mounted on an arbor - a rod through the bore, sized just under the inner diameter - that steadies the nest while the legs transmit the load.",
              "Stress and deflection mirror straight-beam theory with a curvature correction. Bending stress at the inner fibre: sigma = K x 32T/(pi d^3), with the torsion-spring correction K = (4C^2 - C - 1)/(4C^2(C - 1)) rising as the index falls; angular deflection theta = 64 T D n/(E d^4) radians for n active coils, giving an angular rate E d^4/(64 D n). Spiral or clock springs - a flat strip wound into a spiral between a hub and a case - are also bending members, deliver almost constant torque over many turns, and power clocks, toys and seat-belt retractors.",
              "Design practice rewards three sentences: the torque should wind the coil tighter, not open it, because the forming residual stresses then oppose the service stress and the spring is good for more cycles; the arbor diameter is kept near the inner coil diameter so the nest is supported; and because the wire bends, tensile strength and surface quality matter more than in torsion-loaded designs, so shot-peened or prestressed springs serve the long-life duties. In numericals the flow is fixed: torque from force times leg length, stress via K, then turns of deflection from the theta formula.",
            ],
            bullets: [
              "Torsion spring: torque on the legs; the wire bends while the coil winds or unwinds.",
              "Stress: sigma = K x 32T/(pi d^3), inner fibre; K = (4C^2 - C - 1)/(4C^2(C - 1)).",
              "Angular deflection: theta = 64 T D n/(E d^4) radians.",
              "Angular rate: E d^4/(64 D n) per radian.",
              "Torque should wind the coil: forming residual stresses then help the service load.",
              "Arbor just under the inner diameter supports the nest.",
              "Spiral (clock) springs: flat strip, nearly constant torque, many turns.",
            ],
            table: {
              caption: "Axial-load versus torque-load helical springs.",
              headers: ["Aspect", "Close-coiled compression", "Close-coiled torsion"],
              rows: [
                ["Wire stress", "torsion (tau)", "bending (sigma)"],
                ["Bare stress formula", "8PD/(pi d^3)", "32T/(pi d^3)"],
                ["Correction", "Wahl K (curvature + shear)", "K = (4C^2-C-1)/(4C^2(C-1))"],
                ["Deflection", "linear: 8PD^3n/(Gd^4)", "angular: 64TDn/(Ed^4)"],
                ["Load path", "axial force through seats", "torque through legs and arbor"],
                ["Examples", "valve springs, suspensions", "hinges, clothes-pegs, ratchets"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two springs, two stresses",
              caption: "The same coiled geometry - the direction of the load decides the stress in the wire.",
              left: {
                heading: "Axial-load (compression) spring",
                items: [
                  "Load along the coil axis",
                  "Wire twists: tau = 8PD/(pi d^3)",
                  "Wahl correction for curvature and shear",
                  "Linear deflection 8PC^3 n/G",
                  "Seats flat; buckling check applies",
                ],
              },
              right: {
                heading: "Torsion spring",
                items: [
                  "Torque on the legs winds the coil",
                  "Wire bends: sigma = 32T/(pi d^3)",
                  "Curvature correction on the inner fibre",
                  "Angular deflection 64TDn/(Ed^4)",
                  "Arbor through the bore steadies the coils",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The one-line contrast",
              body: "The sentence 'in a torsion spring the wire is stressed in bending, not torsion' is worth marks every single year - write it first, then the formulas.",
            },
            keyTerms: [
              { term: "Torsion spring", definition: "A close-coiled spring loaded by a torque on its legs; the wire bends while the coil winds or unwinds." },
              { term: "Arbor", definition: "The support rod through a torsion spring's bore, sized just below the inner coil diameter." },
              { term: "Spiral (clock) spring", definition: "A flat strip wound in a spiral, storing energy in bending and delivering nearly constant torque over many turns." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and analysis of a close-coiled helical torsion spring, deriving its bending stress and angular deflection, and compare it with an axial-load helical spring.",
                marks: 7,
                outline: [
                  "Load applied as torque on the legs; the coil winds or unwinds.",
                  "Wire in bending: sigma = 32T/(pi d^3) before correction.",
                  "Curvature correction K = (4C^2 - C - 1)/(4C^2(C-1)).",
                  "Angular deflection theta = 64TDn/(Ed^4) rad; rate Ed^4/(64Dn).",
                  "Contrast: axial spring gives torsion of wire, Wahl factor, linear deflection.",
                  "Mounting: arbor near the inner diameter; torque should wind the coil.",
                  "Spiral springs: flat strip, constant torque, clocks and retractors.",
                ],
              },
              {
                q: "Which stress - bending or torsion - acts in the wire of a torsion spring? Justify in one line.",
                marks: 2,
              },
              {
                q: "What is a spiral spring and where is it used?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Lever design",
            body: [
              "A lever converts force and travel about a fulcrum: hand levers, foot levers, rocker arms and bell-cranks - which turn the line of action through an angle - are the machine-tool staples. A lever has three functional zones: the boss that houses the fulcrum pin, the arm that carries the bending, and the end fitting (a forked eye or a plain hole) where effort or load enters. Design starts with equilibrium: moments about the fulcrum give the effort from the load and the arm lengths, then the fulcrum pin is designed as a double-shear and bearing element, and only then is the arm treated as a beam.",
              "The arm's section grows toward the boss because the bending moment does. Common sections: rectangular (thickness t, depth 2t or 3t), elliptical for cast levers, and I-sections for heavy duty; the depth is oriented in the plane of bending, and the section is tapered so the bending stress stays near-constant along the length - a visual check that a lever is right. Standard proportions follow the pin: fulcrum pin diameter d1 from bearing-pressure and double-shear checks, boss outer diameter about 1.6 to 1.8 d1, boss length 1.25 to 1.5 d1, and generous fillets where the arm meets the boss because that corner is the fatigue hotspot of every lever ever broken.",
              "Materials are cast iron for slowly loaded machine levers (cheap, damping), cast steel or forgings where shock and fatigue dominate; pins are case-hardened steel running in bronze bushes where lubrication is poor. The exam numerical follows a fixed script: effort from moment balance, pin from shear and bearing, arm depth from bending at the boss-end section, boss dimensions, then a check of the end eye in tearing and shearing. Draw the lever with dimensions at each stage; a dimensioned sketch is regularly worth a third of the marks in this question.",
            ],
            bullets: [
              "Lever zones: boss (fulcrum pin), arm (bending), end fitting (effort or load).",
              "Design order: moment equilibrium -> fulcrum pin -> arm -> boss -> end eye.",
              "Fulcrum pin: double shear (2 x pi d1^2/4 x tau) and bearing pressure (d1 x l x p_b).",
              "Boss proportions: OD 1.6-1.8 d1, length 1.25-1.5 d1, generous fillets to the arm.",
              "Arm sections: rectangular 2t x t, elliptical, or I; depth in the plane of bending.",
              "Taper the arm for near-uniform bending stress along its length.",
              "Materials: CI for steady duty; cast steel or forging for shock; pins in bronze bushes.",
            ],
            table: {
              caption: "Lever elements, their checks and typical proportions.",
              headers: ["Element", "Chief check", "Typical proportion (pin dia d1)"],
              rows: [
                ["Fulcrum pin", "double shear + bearing pressure", "d1 from tau and p_b"],
                ["Boss", "wall tension + fatigue at fillet", "OD 1.6-1.8 d1, length 1.25-1.5 d1"],
                ["Arm", "bending at the boss-end section", "depth 2-3 x thickness, tapered"],
                ["End eye / fork", "tearing and shearing of the eye", "eye OD about 2 x pin dia"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the arm cross-section",
              caption: "The section follows load and manufacture; the fillet is never negotiable.",
              start: "Lever arm section to carry the bending",
              branches: [
                { label: "Rectangular 2t x t, web in the bending plane", outcome: "Simple to cast and machine; the standard choice", good: true },
                { label: "Elliptical section", outcome: "Stiffer for its weight; clean cast look for hand levers", good: true },
                { label: "I-section", outcome: "Heavy loads and long arms: metal exactly where bending wants it", good: true },
                { label: "Uniform section with a sharp boss fillet", outcome: "Wasteful, and a fatigue crack starts at the corner", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Free body first",
              body: "Open with the free body and the moment balance; the marks for the pin's double-shear and bearing checks follow. Most candidates lose marks by designing the arm before computing the effort.",
            },
            keyTerms: [
              { term: "Bell-crank lever", definition: "A lever whose arms meet at an angle, turning the line of action of a force through that angle." },
              { term: "Fulcrum pin", definition: "The pivot pin of a lever, designed for double shear and bearing pressure at the pin and its bush." },
              { term: "Rocker arm", definition: "An oscillating lever that converts cam lift into valve motion in IC engines." },
            ],
            examQuestions: [
              {
                q: "Describe the design procedure for a hand lever or bell-crank lever, including the checks on fulcrum pin, arm and boss, with a dimensioned sketch.",
                marks: 7,
                outline: [
                  "Equilibrium: moments about the fulcrum give the effort from load and arms.",
                  "Fulcrum pin: double shear (2 x pi d1^2/4 tau) and bearing (d1 x l x p_b).",
                  "Boss: OD 1.6-1.8 d1, length 1.25-1.5 d1; generous fillet into the arm.",
                  "Arm: bending at the boss-end section; Z for rectangular t x 2t or elliptical.",
                  "Taper the arm for near-uniform stress; keep the web in the bending plane.",
                  "End eye: tearing and shearing checks.",
                  "Materials: CI for steady duty, cast steel or forging for shock.",
                ],
              },
              {
                q: "Why is a lever arm tapered from the free end to the boss?",
                marks: 2,
              },
              {
                q: "State two checks required on a fulcrum pin.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Cams and the pressure angle",
            body: [
              "A cam is a rotating or reciprocating profile that imparts a prescribed motion to a follower - still running valve trains, printing presses and packaging machines. Cams are disc (radial), face or cylindrical; followers are knife-edge, roller, flat-faced or mushroom, translating or oscillating. The follower displacement diagram is synthesised from motion laws: uniform velocity (infinite jerk at the ends - only for very low speeds), modified uniform, parabolic (uniform acceleration and retardation), simple harmonic and cycloidal. Smoothness of the acceleration curve - and continuity of its slope - is what separates a quiet cam from a hammer.",
              "Pressure angle is the cam's figure of merit: the angle alpha between the follower's axis of translation and the normal to the cam profile at the point of contact. Only the axial component does useful lifting; the transverse component, F sin alpha, side-thrusts the follower against its guide, raising friction until, at large angles, the follower jams. The angle grows with lift and with offset, and shrinks with base-circle radius, so the base circle is chosen to hold alpha under about 30 degrees for a translating roller follower. A flat-faced follower feels no pressure-angle side thrust at all - the contact normal stays parallel to its axis - but its face must be wide enough and the flank steep enough to avoid undercutting.",
              "Profile drawing is the standard long question: construct the displacement diagram (say SHM rise, dwell, SHM return), divide the cam rotation into equal angles, transfer ordinates to the follower positions around the base circle - the graphical inversion of holding the cam still and rotating the follower opposite - and fair a curve through the roller-centre trace before offsetting by the roller radius. Jump and undercutting are the failures: too steep a flank or too high a speed lifts the follower off the profile (jump), and too large a roller or too small a base circle gouges the profile away (undercutting). Both are cured by a larger base circle or a smoother motion law, which is why high-speed work goes straight to cycloidal.",
            ],
            bullets: [
              "Cam types: disc (radial), face, cylindrical; followers: knife, roller, flat, mushroom.",
              "Motion laws: uniform velocity, parabolic, SHM, cycloidal - ranked by jerk behaviour.",
              "Pressure angle: between follower axis and profile normal; side thrust is F sin alpha.",
              "Alpha grows with lift and offset; shrinks with base-circle radius; keep near 30 deg max for rollers.",
              "Flat-face followers: no pressure-angle side thrust, but need face width and undercut checks.",
              "Graphical inversion: fix the cam, rotate the follower opposite, transfer ordinates.",
              "Failures: jump at speed, undercutting from steep flanks or big rollers.",
            ],
            table: {
              caption: "Follower motion laws, ranked by smoothness.",
              headers: ["Law", "Acceleration character", "Jerk", "Best use"],
              rows: [
                ["Uniform velocity", "zero (constant v)", "infinite at the ends", "very slow mechanisms only"],
                ["Parabolic (uniform acc-ret)", "constant +, then constant -", "step at the joins", "moderate speeds"],
                ["Simple harmonic", "smooth cosine", "finite at the ends", "general purpose, popular"],
                ["Cycloidal", "sine-shaped, zero at ends", "zero at the ends", "high-speed cams"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing follower and motion",
              caption: "Speed on one axis, follower type on the other.",
              axes: { x: "Follower: knife/roller -> flat face", y: "Speed: low -> high" },
              quadrants: [
                { label: "Roller, low speed", note: "general purpose; watch the pressure angle" },
                { label: "Flat face, high speed", note: "valve gear: no side thrust; check undercut" },
                { label: "Knife edge, low speed", note: "cheap, high wear - toys and light trip work" },
                { label: "Roller, high speed", note: "choose cycloidal; cap the pressure angle near 30 deg" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Pressure-angle definition plus two remedies - larger base circle, or offset the follower in the direction that opposes the flank - is the most repeated cam short question in the paper. Add the flat-face exemption for the bonus mark.",
            },
            keyTerms: [
              { term: "Pressure angle", definition: "Angle between the follower's line of translation and the normal to the cam profile at contact; its transverse component causes side thrust." },
              { term: "Base circle", definition: "Smallest circle, centred on the cam axis, that just touches the cam profile; its size caps the pressure angle." },
              { term: "Undercutting", definition: "Self-intersection of the cam profile caused by too steep a flank or too large a roller, cutting away the working curve." },
            ],
            examQuestions: [
              {
                q: "Define pressure angle, explain its effect on follower side thrust and jamming, and describe the graphical construction of a cam profile for a given displacement diagram.",
                marks: 7,
                outline: [
                  "Definition with a sketch: follower axis versus the contact normal.",
                  "Components: F cos alpha lifts; F sin alpha side-thrusts the guide.",
                  "Influences: rises with lift and offset; falls with base-circle radius.",
                  "Remedies: larger base circle; offset follower; flat-face follower (no side thrust).",
                  "Construction: displacement diagram, divide cam angle, graphical inversion.",
                  "Trace the roller-centre curve; offset the roller radius for the profile.",
                  "Failures: jump at speed and undercutting - a cure for each.",
                ],
              },
              {
                q: "State two ways of reducing the pressure angle of a cam.",
                marks: 2,
              },
              {
                q: "Why is the cycloidal motion preferred for high-speed cams?",
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
      title: "Gears, Bearings and Flywheels",
      summary:
        "The power-transmission triad: spur gear tooth checks by Lewis beam strength, Buckingham dynamic load and wear, rolling bearings selected through L10 life, journal bearings understood through Petroff, McKee and the Sommerfeld charts, and flywheels sized from the turning-moment diagram.",
      chapter: {
        number: "05",
        title: "Gears, Bearings and Flywheels",
        intro:
          "Unit V rates the machine elements that carry the power: gear teeth checked for beam fracture by Lewis, for dynamic overload by Buckingham and for pitting by the wear equation; rolling bearings selected by the L10 life power law; journal bearings explained by Petroff's light-load friction and the Sommerfeld charts; and flywheels sized from the turning-moment diagram to smooth the cycle.",
        inOneBreath:
          "A gear tooth is a cantilever whose beam strength by Lewis is Sb = sigma_b b m Y with the form factor Y tabulated against tooth number; at speed the load grows by Buckingham's incremental dynamic term, and the effective load must also sit below the wear strength Pw = K B D Q; rolling bearings are rated by basic dynamic capacity C, the load 90% survive for one million revolutions, with L = (C/P)^p (p = 3 ball, 10/3 roller) and mixed loads folded into P = X Fr + Y Fa; journal bearings ride an oil film whose friction Petroff priced as f = 2 pi^2 (mu n/P)(r/c) and whose design closes through the Sommerfeld charts and the bearing characteristic; and the flywheel, sized by delta E = I w^2 Cs from the turning-moment diagram, banks energy during expansion and repays it during the other strokes - while the governor, its constant companion in exams, controls mean speed instead.",
        sections: [
          {
            number: "5.1",
            title: "Lewis equation for beam strength",
            body: [
              "Wilfred Lewis (1892) modelled a gear tooth as a cantilever: tangential load at the tip, and a parabola of uniform strength inscribed inside the tooth outline - the parabola just touches the root fillets, so the root is where the tooth breaks. With face width b, module m and all tooth geometry folded into the dimensionless form factor Y, the beam strength is Sb = sigma_b x b x m x Y. The factor is built as Y = t^2/(6 h m) from the root thickness t and load height h of a standard tooth, and is tabulated against tooth number and pressure angle - about 0.245 at 12 teeth, rising to about 0.394 for a rack in the 20-deg full-depth system.",
              "The derivation is three lines of beam theory. Root bending: M = Pt x h; rectangular root section modulus: Z = b t^2/6; so Pt = sigma_b b t^2/(6 h) = sigma_b b m Y. In design, face width is tied to module by b/m near 10 (8 to 12 is the band), and the tangential load follows from torque: Pt = 2 M_t / d = 2 M_t/(m z), with z the number of teeth. Equating Pt to Sb and cancelling yields the designer's cubic: m^3 = 2 M_t / (sigma_b x (b/m) x Y x z), then round up to the next standard module. The pinion is checked first - it has the highest tooth loading per size and the lowest Y.",
              "Lewis's assumptions are the exam's first mark: the entire load is taken by one tooth at the tip (worst case at first engagement), friction is neglected, and the load is static. The last is the weakness: real gears run at speed, and profile errors plus tooth deflection generate dynamic loads Lewis never saw. The first patch was Barth's velocity factor, Cv = 5.6/(5.6 + sqrt(v)) with v in m/s, multiplying the allowable stress; the modern and rigorous fix is Buckingham's dynamic load analysis of the next section, which computes the added load instead of discounting the strength. Examiners reward candidates who state the assumptions, then name both patches.",
            ],
            bullets: [
              "Model: tooth as cantilever; the Lewis parabola touches the root fillets.",
              "Beam strength: Sb = sigma_b b m Y.",
              "Form factor: Y = t^2/(6 h m); about 0.245 at 12 teeth to 0.394 for a rack (20-deg FD).",
              "Face width convention: b/m about 10 (band 8 to 12).",
              "Tangential load from torque: Pt = 2 M_t/(m z).",
              "Design cubic: m^3 = 2 M_t / (sigma_b (b/m) Y z); round up to a standard module.",
              "Assumptions: one tooth at the tip, no friction, static load; dynamic patched by Barth and Buckingham.",
            ],
            codeExample: {
              language: "python",
              caption: "Sizing a spur pinion by the Lewis equation.",
              code: `import math

M_t = 100.0e3      # torque on the pinion, N mm
z = 20             # number of pinion teeth
Y = 0.320          # Lewis form factor for 20 teeth, 20 deg FD
sigma_b = 150.0    # permissible bending stress, N/mm2
b_by_m = 10.0      # face-width to module ratio

# Design cubic: m^3 = 2 Mt / (sigma_b (b/m) Y z)
m_cubed = 2.0 * M_t / (sigma_b * b_by_m * Y * z)
m = m_cubed ** (1.0 / 3.0)

print("required module =", round(m, 3), "mm")

standard = [1.0, 1.25, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0]
m_std = next(x for x in standard if x >= m)
b = b_by_m * m_std
d = m_std * z

Pt = 2.0 * M_t / d                      # tangential load, N
Sb = sigma_b * b * m_std * Y            # beam strength, N

print("standard module =", m_std, "mm")
print("face width b    =", b, "mm")
print("pitch dia d     =", d, "mm")
print("tangential load =", round(Pt, 1), "N")
print("beam strength   =", round(Sb, 1), "N")
print("margin          =", round(Sb / Pt, 2))`,
            },
            diagram: {
              kind: "pipeline",
              title: "From load on a tooth to the Lewis equation",
              caption: "Five moves from the tip load to beam strength.",
              stages: [
                { label: "Tangential load at the tip", note: "worst case: single-tooth contact" },
                { label: "Tooth as cantilever", note: "parabola of uniform strength inscribed" },
                { label: "Root section resists", note: "M = Pt h; Z = b t^2/6" },
                { label: "Geometry collected in Y", note: "Y = t^2/(6hm), tabulated vs teeth" },
                { label: "Beam strength", note: "Sb = sigma_b b m Y" },
              ],
            },
            callout: {
              type: "exam",
              title: "Assumptions first",
              body: "State the assumptions before the derivation: load at the tip, one tooth carrying all, no friction, statics only. Then Sb = sigma_b b m Y - and remember Y belongs to the pinion when sizing a pair.",
            },
            keyTerms: [
              { term: "Lewis form factor Y", definition: "Dimensionless tooth-geometry factor Y = t^2/(6hm) that converts module, width and stress into beam strength; tabulated against tooth number and pressure angle." },
              { term: "Beam strength", definition: "The tangential load a gear tooth can carry in bending at the root: Sb = sigma_b b m Y." },
              { term: "Module", definition: "Pitch diameter per tooth, m = d/z in mm; the gear's size step and the unit of the preferred series." },
            ],
            examQuestions: [
              {
                q: "Derive the Lewis equation for the beam strength of a gear tooth, state its assumptions, and explain how it is used to size the module of a pinion.",
                marks: 7,
                outline: [
                  "Model: tooth = cantilever, load Pt at the tip, inscribed parabola.",
                  "Root bending: M = Pt h; Z = b t^2/6.",
                  "Pt = sigma_b b t^2/(6h) = sigma_b b m Y; define Y = t^2/(6hm).",
                  "Assumptions: single tooth, tip load, no friction, static.",
                  "Y values: 0.245 (12 teeth) to 0.394 (rack), 20-deg full depth.",
                  "Design: b/m = 10; Pt = 2Mt/(mz) gives m^3 = 2Mt/(sigma_b (b/m) Y z).",
                  "Dynamic weakness: Barth Cv = 5.6/(5.6 + sqrt v); Buckingham next.",
                ],
              },
              {
                q: "Define Lewis form factor and state its value for a rack.",
                marks: 2,
              },
              {
                q: "Write the Lewis equation and identify each symbol.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Dynamic tooth loads: Buckingham",
            body: [
              "At speed, gear teeth feel more than the transmitted tangential load: profile errors, spacing errors, misalignment and tooth deflection make each engagement a small collision. The Lewis equation is therefore rechecked against this inflated load. Buckingham's approach adds an incremental dynamic load to the steady one, computed from the velocity, the mass-elastic properties of the meshing teeth (the deformation factor C1) and their known errors (the error factor C2): Pi = 21 v (B C1 + Pt C2)/(21 v + sqrt(B C1 + Pt C2)), with v the pitch-line speed in m/s, B the face width, and the constants read from data-book tables keyed to material pair and quality grade.",
              "The full design set is three inequalities. The effective dynamic load P_eff = Pt + Pi must not exceed the beam strength Sb = sigma_b b m Y - or the tooth fractures at the root - nor the wear strength Pw = K B D Q, or the flanks pit. Here K is the load-stress (wear) factor combining the surface fatigue strength and elastic moduli of the pair, D the pinion pitch diameter, and Q = 2 z_g/(z_p + z_g) the ratio factor converting the pair's curvature. The procedure always checks beam and wear on the same numbers: a design that passes bending and fails wear simply pits instead of fracturing, and the examiner wants both verdicts.",
              "For orientation problems - the common exam numerical - velocity factors offer the fast route: Barth's Cv = 5.6/(5.6 + sqrt(v)) debits the allowable stress, or the data books tabulate service factors from 1.0 to 1.75 by duty and speed class. Buckingham remains the rigorous standard for heavy and high-speed gearing, where the difference between Pt and P_eff decides the margin. The worked pattern is fixed: compute Pt from torque, Pi from Buckingham, Sb from Lewis, Pw from the wear equation, then write the three-line verdict - beam safe or not, wear safe or not, and the recommendation that follows.",
            ],
            bullets: [
              "Dynamic origin: profile and spacing errors plus deflection at speed create impact above Pt.",
              "Buckingham incremental load: Pi = 21 v (B C1 + Pt C2)/(21 v + sqrt(B C1 + Pt C2)).",
              "Effective load: P_eff = Pt + Pi; C1 from material pair, C2 from quality errors.",
              "Beam check: P_eff <= Sb = sigma_b b m Y (root fracture).",
              "Wear check: P_eff <= Pw = K B D Q (surface pitting).",
              "Ratio factor Q = 2 z_g/(z_p + z_g); K from material pair surface properties.",
              "Quick route: Barth Cv = 5.6/(5.6 + sqrt v) on the allowable stress.",
            ],
            table: {
              caption: "The loads every spur gear design must reconcile.",
              headers: ["Quantity", "Formula (summary)", "Protects against"],
              rows: [
                ["Transmitted load Pt", "Pt = 2 Mt/d", "the duty itself"],
                ["Buckingham dynamic", "P_eff = Pt + 21v(BC1+PtC2)/(21v+sqrt(BC1+PtC2))", "impact from errors at speed"],
                ["Beam strength Sb", "sigma_b b m Y", "root fracture (Lewis)"],
                ["Wear strength Pw", "K B D Q", "surface pitting of the flanks"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Rating a gear pair for service",
              caption: "Lewis alone is a static truth about a dynamic world.",
              start: "Gears designed by Lewis, to run at 5 m/s",
              branches: [
                { label: "Check Buckingham dynamic and wear", outcome: "Both inequalities close with margin: the pair survives", good: true },
                { label: "Trust Lewis alone", outcome: "Dynamic overload at speed fractures a tooth in service", good: false },
                { label: "Barth velocity factor for a quick estimate", outcome: "Acceptable for preliminary sizing; verify later", good: true },
                { label: "Skip the wear check", outcome: "Flanks pit and the profile degrades quietly", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Verdict lines earn the closing marks",
              body: "Write the two inequalities together in one block: P_eff <= Sb (beam) and P_eff <= Pw (wear). Examiners look for the comparison block; a design answer without verdicts loses the closing marks.",
            },
            keyTerms: [
              { term: "Buckingham dynamic load", definition: "The incremental load added to the transmitted tangential load to account for profile errors, deflections and velocity at the mesh." },
              { term: "Load-stress factor K", definition: "The wear-equation constant combining the surface fatigue limit and elastic properties of the two gear materials." },
              { term: "Wear strength", definition: "The tangential load a tooth flank pair can carry before surface fatigue (pitting) begins: Pw = K B D Q." },
            ],
            examQuestions: [
              {
                q: "Explain the origin of dynamic tooth loads, write Buckingham's equation for the effective load, and state the beam and wear inequalities a spur gear design must satisfy.",
                marks: 7,
                outline: [
                  "At speed, profile and spacing errors plus deflection create impact above Pt.",
                  "Buckingham: P_eff = Pt + 21v(BC1 + PtC2)/(21v + sqrt(BC1 + PtC2)).",
                  "Define v, B, C1 (deformation) and C2 (error) from data-book tables.",
                  "Beam check: P_eff <= Sb = sigma_b b m Y.",
                  "Wear check: P_eff <= Pw = K B D Q; define K and Q = 2zg/(zp + zg).",
                  "Quick alternative: Barth Cv = 5.6/(5.6 + sqrt v) on the allowable stress.",
                  "Close with verdict lines for both failure modes.",
                ],
              },
              {
                q: "Why does the transmitted load alone under-rate a high-speed gear?",
                marks: 2,
              },
              {
                q: "Write the Buckingham wear-load equation and define each term.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Rolling bearings and L10 life",
            body: [
              "A rolling bearing substitutes rolling elements - balls, cylindrical rollers, taper rollers, needles - for the hydrodynamic film of the journal bearing: starting friction drops to a fraction, grease is often enough, combined radial and thrust loads can be carried in one bearing, and shields or seals arrive built in. The price of rolling: finite life, because the raceways eventually spall under contact fatigue; sensitivity to dirt and misalignment; and some noise. Families differ in load character: deep-groove ball (mostly radial, some thrust), angular-contact ball (combined, used in pairs), cylindrical roller (heavy radial only), taper roller (heavy combined, adjustable clearance) and needle (radial load in a tiny radial space).",
              "Life is the rating currency. The basic dynamic capacity C is the load that 90% of identical bearings survive for one million revolutions - hence the name L10 for rating life. Load and life trade off through a power law: L = (C/P)^p million revolutions, with p = 3 for ball and 10/3 for roller bearings; in hours, L_h = (10^6 / 60 n) x (C/P)^p. Mixed radial-axial duty collapses into a single equivalent load P = X Fr + Y Fa, with X and Y read from the catalogue against the ratio Fa/Fr. Higher reliability is bought with life-adjustment factors a1 - about 0.64 at 95% and 0.25 at 99% - multiplying the basic life.",
              "Selection inverts the rating equation: compute the equivalent load P, convert the target life in hours to millions of revolutions, solve for the required C, then take the smallest catalogue bearing whose C clears it at the shaft's bore. A worked instance: P = 4 kN at 1440 rpm for 8000 hours asks for L = 60 x 1440 x 8000/10^6 = 691 million revolutions, so C_req = 4 x 691^(1/3), about 35.4 kN for a ball bearing - a 6308 deep-groove (C near 41 kN) answers with margin. Arrangement closes the design: one locating bearing fixes the shaft axially, the floating one frees thermal growth.",
            ],
            bullets: [
              "Families: deep-groove ball, angular-contact, self-aligning, cylindrical roller, taper roller, needle.",
              "Basic dynamic capacity C: load 90% of bearings survive for 10^6 revolutions.",
              "Life law: L = (C/P)^p million revs; p = 3 ball, 10/3 roller.",
              "In hours: L_h = (10^6/60n) x (C/P)^p.",
              "Equivalent load: P = X Fr + Y Fa; X and Y from the catalogue by Fa/Fr.",
              "Reliability factors a1: about 0.64 at 95%, 0.25 at 99%.",
              "Arrangement: one locating (fixed) bearing plus one floating bearing for axial freedom.",
            ],
            codeExample: {
              language: "python",
              caption: "Bearing life and catalogue selection.",
              code: `# Duty: combined radial and axial load, target life in hours
Fr = 3500.0        # radial load, N
Fa = 800.0         # axial load, N
n = 1440.0         # shaft speed, rpm
hours = 8000.0     # desired L10h life

# Equivalent load (X, Y from the catalogue for this Fa/Fr)
X, Y = 0.56, 1.2
P = X * Fr + Y * Fa

# Rating life in millions of revolutions
L_million = 60.0 * n * hours / 1.0e6

# Ball bearing: p = 3
p = 3.0
C_req = P * L_million ** (1.0 / p)

# Reliability upgrade to 95% (a1 = 0.64): required basic life grows to L/a1
a1 = 0.64
C_req_95 = P * (L_million / a1) ** (1.0 / p)

print("equivalent load P  =", round(P, 1), "N")
print("L10 (millions)     =", round(L_million, 1))
print("C required, 90%    =", round(C_req / 1000.0, 2), "kN")
print("C required, 95%    =", round(C_req_95 / 1000.0, 2), "kN")`,
            },
            diagram: {
              kind: "pyramid",
              title: "Narrowing down to one bearing",
              caption: "Requirements at the top; catalogue part number at the base.",
              tiers: [
                { label: "Requirements", note: "loads Fr and Fa, speed, hours, misalignment, environment" },
                { label: "Bearing family", note: "ball vs roller vs taper: load direction and magnitude" },
                { label: "Equivalent load P", note: "P = X Fr + Y Fa from catalogue factors" },
                { label: "Catalogue C and details", note: "smallest C that fits; bore, fits, lubrication, sealing" },
              ],
            },
            callout: {
              type: "tip",
              title: "The exponent is the mark",
              body: "The exponent is the most-dropped mark in bearing numericals: p = 3 for ball, 10/3 for roller. Write it before the substitution and the arithmetic then takes care of itself.",
            },
            keyTerms: [
              { term: "Basic dynamic capacity", definition: "The constant radial load a bearing can carry for one million revolutions with 90% survival." },
              { term: "L10 life", definition: "The rating life at which 10% of identical bearings are expected to have failed - the 90% reliability benchmark." },
              { term: "Equivalent dynamic load", definition: "The single steady radial load as damaging as the actual combined radial-axial duty: P = X Fr + Y Fa." },
            ],
            examQuestions: [
              {
                q: "Define basic dynamic capacity and L10 life, derive the bearing life equation, and outline the selection of a bearing for a stated duty.",
                marks: 7,
                outline: [
                  "C: the load survived by 90% of bearings for 10^6 revolutions.",
                  "Power law: L = (C/P)^p million revs; p = 3 ball, 10/3 roller.",
                  "Hours form: L_h = (10^6/60n)(C/P)^p.",
                  "Equivalent load P = X Fr + Y Fa; X and Y from the catalogue by Fa/Fr.",
                  "Reliability: L_na = a1 L10; a1 about 0.64 at 95%.",
                  "Selection: P and target hours -> C_req -> smallest catalogue C above it.",
                  "Arrange: locating plus floating bearings for axial freedom.",
                ],
              },
              {
                q: "Distinguish static and dynamic capacity of a rolling bearing.",
                marks: 2,
              },
              {
                q: "Why does bearing life vary as the cube of load for ball bearings?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Journal bearings: Petroff and McKee",
            body: [
              "A journal bearing is a film-ride: the journal spins inside a marginally larger bush, oil fills the small clearance, and viscosity drags the film through the converging wedge formed because the loaded journal sits eccentrically - pressure builds and floats the load, metal never touching metal in steady service. Vocabulary: radial clearance c (half the diametral clearance), eccentricity e, minimum film thickness h0 = c - e, eccentricity ratio epsilon = e/c, and the length ratio l/d, conventionally near 1. Design targets are a minimum film several times the combined surface roughness, enough oil flow to carry away friction heat, and friction low enough to run cool.",
              "Petroff (1883) analysed the ideal case - no load, journal concentric, so the film thickness equals the clearance everywhere - and obtained the friction coefficient as f = 2 pi^2 (mu n/P)(r/c), with mu the absolute viscosity, n the speed in rev/s, P the projected pressure W/(l d) and r/c the clearance ratio. It is exact for its assumptions and gives the famous straight line of friction against the bearing characteristic mu n/P. McKee's experimental correction adds a term for the real world of eccentric running: f = 2 pi^2 (mu n/P)(r/c) + 0.002, matching measured friction through the mixed-film zone and marking the transition where boundary lubrication begins.",
              "The bearing characteristic mu n/P is the abscissa of the classical friction curve. At low values the bearing is boundary-lubricated - friction high and almost flat; through a critical value it plunges to a minimum; beyond, the full film forms and friction rises along Petroff's straight line. Designers park the operating point safely to the right of the minimum. The Sommerfeld number, S = (r/c)^2 x mu n/p, packages the same physics in dimensionless form: enter the data-book charts with S and the eccentricity ratio, minimum film thickness, friction variable and flow factor come back - and the bearing is checked for film thickness, heat balance and oil supply before the design is declared.",
            ],
            bullets: [
              "Film formation: eccentric journal drags oil through a converging wedge; pressure floats the load.",
              "Vocabulary: c, e, h0 = c - e, epsilon = e/c; l/d near 1; c/r near 0.001.",
              "Petroff: f = 2 pi^2 (mu n/P)(r/c) - light load, concentric, Newtonian oil.",
              "McKee: add 0.002 for the mixed-film zone - the experimental correction.",
              "Bearing characteristic mu n/P: boundary - minimum - hydrodynamic regions on the friction curve.",
              "Operate safely to the right of the critical (minimum) value.",
              "Sommerfeld S = (r/c)^2 mu n/p: charts return eccentricity, h0, friction and flow.",
            ],
            table: {
              caption: "Journal-bearing variables and typical starting values.",
              headers: ["Symbol", "Meaning", "Typical start"],
              rows: [
                ["l/d", "length to diameter ratio", "0.8 - 1.5 (1.0 common)"],
                ["c/r", "radial clearance ratio", "0.001"],
                ["mu", "absolute (dynamic) viscosity", "from oil grade at film temperature"],
                ["P = W/(ld)", "projected bearing pressure", "1 - 2 N/mm2 for steady machines"],
                ["h0", "minimum film thickness", "several times combined roughness"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Designing a hydrodynamic journal bearing",
              caption: "Six moves from the duty to a validated film.",
              steps: [
                { label: "Load, speed, oil inlet temperature", note: "W, n, viscosity grade" },
                { label: "Proportions", note: "l/d near 1; c/r near 0.001" },
                { label: "Petroff friction estimate", note: "f = 2 pi^2 (mu n/P)(r/c)" },
                { label: "Sommerfeld number", note: "S = (r/c)^2 mu n/p, then charts" },
                { label: "Film thickness check", note: "h0 several times the roughness" },
                { label: "Heat balance", note: "friction heat vs oil flow; iterate mu" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch the McKee curve",
              body: "Sketch the friction curve (f against mu n/P) with the three regions named and the minimum marked - 'critical bearing characteristic' is the phrase that earns the label mark.",
            },
            keyTerms: [
              { term: "Petroff's equation", definition: "Friction coefficient for a lightly loaded, concentric journal bearing: f = 2 pi^2 (mu n/P)(r/c)." },
              { term: "Bearing characteristic", definition: "The group mu n/P - viscosity times speed over projected pressure; its critical value separates boundary from hydrodynamic operation." },
              { term: "Sommerfeld number", definition: "S = (r/c)^2 x mu n/p, the dimensionless group whose charts return eccentricity, film thickness and flow for a journal bearing." },
            ],
            examQuestions: [
              {
                q: "Derive Petroff's equation for a lightly loaded journal bearing, explain McKee's correction, and describe the bearing-characteristic curve and its design use.",
                marks: 7,
                outline: [
                  "Assumptions: no load, concentric journal, film = clearance, Newtonian oil.",
                  "Shear stress tau = mu x 2 pi r n / c; torque on the journal.",
                  "Friction force over load gives f = 2 pi^2 (mu n/P)(r/c); define P = W/(ld).",
                  "McKee: add 0.002 for eccentric, mixed-film reality.",
                  "Curve: f vs mu n/P - boundary flat, minimum, hydrodynamic rising line.",
                  "Critical characteristic; operate to the right of the minimum.",
                  "Close: Sommerfeld number leads to h0 and heat checks.",
                ],
              },
              {
                q: "State the assumptions behind Petroff's equation.",
                marks: 2,
              },
              {
                q: "Define the Sommerfeld number and name two quantities read from its charts.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Flywheels: energy and speed fluctuation",
            body: [
              "A flywheel is an energy bank placed between a prime mover or machine and its fluctuating duty: it stores kinetic energy when torque exceeds demand and repays it when demand exceeds supply, smoothing the speed within one cycle. The governor - so often confused with it - regulates mean speed over cycles by changing the energy input; the flywheel cannot change the energy ledger at all, only its timing. Turning-moment diagrams make the ledger visible: for a single-cylinder four-stroke engine, only the expansion stroke is a large positive lobe; suction, compression and exhaust all draw on the banked energy across the two crank revolutions of one cycle.",
              "Two coefficients quantify the smoothing. The coefficient of fluctuation of speed, Cs = (N1 - N2)/N, states how far the speed may swing within a cycle - a few thousandths for electrical generators, one or two percent for machine shafts, ten percent or more for punches. The maximum fluctuation of energy delta E is the largest area excursion of the turning-moment diagram above or below the mean-torque line. Since kinetic energy is (1/2) I w^2, the swing gives delta E = I x w_mean^2 x Cs, and for a rim flywheel of mass m at mean radius R (I about m R^2) the required rim mass is m = delta E/(R^2 w^2 Cs). Rim hoop stress, sigma = rho v^2, caps the peripheral speed - which is why small fast flywheels are solid discs and large slow ones are spoked rims.",
              "In a punching press the motor is sized only for the average power of the whole cycle - a few kilowatts - while a stroke demands kilojoules in a tenth of a second; the flywheel pays the difference, slowing within the permitted Cs band, and the motor tops the bank back up between strokes. Construction follows speed and size: cast-iron spoked rims for large slow flywheels (the rim carrying about 90% of the inertia), solid or webbed steel discs for smaller faster ones, and composite rims where energy density matters. The design closes with shaft and key checks for the full torque swing and a burst-speed margin, because a flywheel is also the machine's stored bomb.",
            ],
            bullets: [
              "Function: store and return energy within a cycle; smooth the speed - not the mean speed.",
              "Governor contrast: governor controls mean speed; flywheel controls cyclic fluctuation.",
              "Cs = (N1 - N2)/N; generators 0.002-0.005, machine shafts 0.01-0.03, punches 0.05-0.2.",
              "delta E: largest area above/below the mean-torque line on the T-theta diagram.",
              "delta E = I x w^2 x Cs from (1/2)I(w1^2 - w2^2).",
              "Rim flywheel: I about m R^2 -> m = delta E/(R^2 w^2 Cs).",
              "Rim hoop stress sigma = rho v^2 caps peripheral speed; spoked rims at low speed, discs at high.",
            ],
            codeExample: {
              language: "python",
              caption: "Flywheel sizing from a turning-moment diagram.",
              code: `import math

# Duty: 12 kJ drawn per stroke at 30 strokes per minute
delta_E = 12.0e3       # maximum fluctuation of energy, J
N = 240.0              # mean flywheel speed, rpm
Cs = 0.02              # coefficient of fluctuation of speed
R = 0.45               # mean rim radius, m
rho = 7200.0           # cast iron density, kg/m^3

w = 2.0 * math.pi * N / 60.0        # mean angular speed, rad/s

# Required moment of inertia
I = delta_E / (w * w * Cs)
print("I required     =", round(I, 1), "kg m^2")

# Rim-only flywheel: I = m R^2
m = I / (R * R)
print("rim mass       =", round(m, 1), "kg")

# Check the rim hoop stress against peripheral speed
v = w * R
sigma = rho * v * v                  # N/m^2
print("rim speed      =", round(v, 1), "m/s")
print("hoop stress    =", round(sigma / 1.0e6, 2), "MPa")`,
            },
            diagram: {
              kind: "cycle",
              title: "One energy cycle of a four-stroke single",
              caption: "Two crank revolutions, one energy cycle: the flywheel borrows and repays within it.",
              steps: [
                { label: "Suction stroke", note: "small negative torque: the bank pays" },
                { label: "Compression stroke", note: "larger negative: the bank pays more" },
                { label: "Expansion stroke", note: "large positive lobe: the bank recharges" },
                { label: "Exhaust stroke", note: "small negative: the bank pays again" },
              ],
            },
            callout: {
              type: "exam",
              title: "The guaranteed 2-marker",
              body: "Flywheel versus governor: the flywheel controls cyclic fluctuation of speed within a cycle, the governor controls mean speed by adjusting energy input. Write both halves - one-sided answers lose the mark.",
            },
            keyTerms: [
              { term: "Coefficient of fluctuation of speed", definition: "Cs = (N1 - N2)/N: the permitted speed swing within one cycle as a fraction of mean speed." },
              { term: "Maximum fluctuation of energy", definition: "The largest energy excursion between the turning-moment curve and the mean-torque line over one cycle." },
              { term: "Turning-moment diagram", definition: "The plot of crank torque against crank angle whose areas above and below the mean line the flywheel must bank and repay." },
            ],
            examQuestions: [
              {
                q: "Explain the function of a flywheel and its difference from a governor, define Cs and delta E, and derive the rim mass of a flywheel from a turning-moment diagram.",
                marks: 7,
                outline: [
                  "Function: store and return energy within a cycle; smooth the speed.",
                  "Governor contrast: mean speed control via energy input.",
                  "Cs = (N1 - N2)/N; typical values by application.",
                  "delta E: the largest area above or below the mean torque line on the T-theta diagram.",
                  "delta E = I w^2 Cs from (1/2)I(w1^2 - w2^2).",
                  "Rim type: I about m R^2 -> m = delta E/(R^2 w^2 Cs).",
                  "Check hoop stress rho v^2 and rim speed limits; spokes versus disc.",
                ],
              },
              {
                q: "Differentiate flywheel and governor in one sentence each.",
                marks: 2,
              },
              {
                q: "Why must a flywheel rim speed be limited, and what stress governs it?",
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
        "RGPV ME-602 papers typically spread 70-80 of the marks across joint design numericals, shaft sizing, spring design and the gear-bearing-flywheel numericals, with the remaining sections supplying definitional short questions. Allocate revision time in roughly the same ratio and keep one full numerical practice slot for each heavy family.",
      ],
      weightedTopics: [
        { topic: "Shaft design: combined bending-torsion and the ASME code", weight: "10-14 marks", note: "Near-annual long numerical; quote Te and Me with the 0.75, and the ASME allowable-shear rule." },
        { topic: "Cotter and knuckle joint design", weight: "10-12 marks", note: "Full design question; marks map one-to-one onto the failure modes - list them first." },
        { topic: "Welded joints: fillet throat numericals", weight: "8-12 marks", note: "Throat = 0.707 s and P = 0.707 s L tau; the double-fillet lap is the standard numerical." },
        { topic: "Fatigue: S-N, Goodman and Soderberg", weight: "8-12 marks", note: "Labelled diagram plus the two reciprocal formulas; Soderberg is the safer computation." },
        { topic: "Helical springs with the Wahl factor", weight: "8-10 marks", note: "K formula by name plus deflection and rate equations; outline the design iteration." },
        { topic: "Couplings: flange proportions and selection", weight: "6-10 marks", note: "Proportion recall (hub 2d, flange 0.5d, bolt circle 3d) plus the bolt shear capacity." },
        { topic: "Gear tooth checks: Lewis and Buckingham", weight: "8-12 marks", note: "Beam strength, dynamic load and wear load in one three-inequality verdict." },
        { topic: "Riveted joint efficiency", weight: "6-8 marks", note: "Three strengths, the least governs, divided by the solid plate - fast, formula-stable marks." },
        { topic: "Bearings: L10 life and Petroff friction", weight: "6-10 marks", note: "Life power law (p = 3 vs 10/3) and the Petroff derivation with McKee's correction." },
        { topic: "Leaf and torsion springs, levers, cams, flywheels", weight: "6-10 marks", note: "Definition-plus-sketch questions; nip, pressure angle and Cs definitions are the score." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the last week for full-paper practice under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals", tasks: ["Design procedure and FOS; recite the factor-selection list twice", "Stress concentration and Kf: run the plate-with-hole python once by hand", "Fatigue vocabulary, S-N sketch from memory; Goodman and Soderberg numericals"] },
        { week: "Week 2", focus: "Unit II - joints", tasks: ["Full cotter joint design, all six failure modes with sketches", "Threaded fasteners: self-locking condition and preload arguments", "Weld python numerical; riveted efficiency; keys table recitation"] },
        { week: "Week 3", focus: "Unit III - shafts and couplings", tasks: ["Te and Me numericals until the 0.75 is automatic", "ASME shock factors and keyway derating; the fatigue design loop", "Flange coupling proportions plus bolt shear; flexible coupling selection table"] },
        { week: "Week 4", focus: "Unit IV - springs, levers, cams", tasks: ["Wahl spring design end to end with the python example", "Leaf spring stack, nip and formulas; torsion-spring contrast table", "Lever design script; cam motion laws and pressure-angle remedies"] },
        { week: "Week 5", focus: "Unit V - gears, bearings, flywheels", tasks: ["Lewis module sizing; Buckingham and wear verdict block", "L10 life selection numerical with the reliability factor", "Petroff derivation and the bearing-characteristic curve; flywheel sizing"] },
        { week: "Week 6", focus: "Integration and papers", tasks: ["Two full past papers under exam timing", "Redraw the eight classic sketches: cotter, coupling, leaf stack, Goodman axes, McKee curve, cam construction, S-N, T-theta loop", "Revisit the weakest numerical family with one fresh problem each"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours before the paper",
      body: [
        "The final day is for consolidating sketches, formulas and proportions - not for reading new theory. Work through these six items in order and stop.",
      ],
      bullets: [
        "Redraw from memory: cotter joint, protected flange coupling, leaf spring stack, Goodman-Soderberg axes, McKee curve, flywheel turning-moment loop.",
        "Recite the proportion tables: hub 2d by 1.5d, flange 0.5d, bolt circle 3d, key d/4 by 1.5d, b/m = 10, spring index 6-12.",
        "Write the seven formula pairs: Te/Me, Wahl K, Lewis Sb, Buckingham Pi, L10 life, Petroff f, flywheel rim mass.",
        "Walk one full numerical each for shaft, weld and spring - formula, substitution with units, answer.",
        "Skim every 7-mark outline in this file once; the outlines are the answer skeletons.",
        "Stop by 11 p.m.; a rested formula memory beats a midnight re-read.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every long answer with a labelled sketch and the governing formula - both earn marks before any prose is read.",
        "Numericals: formula, substitution with units, then arithmetic; keep the 2 pi/60 conversion and N-mm versus N-m bookkeeping visible.",
        "Answer design questions as failure-mode lists: enumerate the modes, then solve each in one or two lines with its equation.",
        "Comparison questions (key vs spline, fillet vs butt, coupling types, theories of failure) answer in a two-column table - examiners mark by row.",
        "Budget about 15 minutes per 7-mark question and 5 per short; hold the last 10 minutes for labelling and unit checks.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using the leg instead of the throat in fillet welds - strength lives at 0.707 s.",
        "Forgetting the 0.75 in Me = sqrt(M^2 + 0.75 T^2), or the theory label that goes with it.",
        "Quoting Kt where fatigue demands Kf = 1 + q(Kt - 1).",
        "Dropping the 25% keyway derating in ASME shaft problems.",
        "Mixing the bearing exponents: p = 3 for ball, 10/3 for roller.",
        "Calling the flywheel a governor or vice versa - cyclic fluctuation versus mean speed is a guaranteed 2-marker.",
      ],
    },
  ],
};
