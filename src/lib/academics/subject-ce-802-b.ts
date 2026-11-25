/**
 * Academics - RGPV Civil Engineering 8th-semester subject:
 * CE-802(B) Foundation Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries three body paragraphs, five
 * bullets, a diagram, a callout, key terms, a table or python code sample,
 * and three exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce802b: AcademicSubject = {
  id: "ce-802-b",
  code: "CE-802(B)",
  title: "Foundation Engineering",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to foundation engineering: site investigation and soil exploration, shallow foundations with Terzaghi and IS 6403 bearing capacity, pile foundations designed by static and dynamic formulae, well and caisson foundations for bridge piers, and the full ground improvement toolkit from compaction and stone columns to geotextiles and liquefaction mitigation.",
  description:
    "Five units walk from exploring the ground - trial pits, boring, SPT, CPT, sampling, geophysics and the bore log - into shallow foundations: types, Terzaghi's bearing capacity theory, IS 6403 with water table corrections, the plate load test, and immediate plus consolidation settlement. Unit III drives piles: classification, the static formula of IS 2911, Hiley's dynamic formula, pile load tests, group efficiency and negative skin friction. Unit IV sinks wells and caissons - components, shapes, grip length from Lacey scour, sinking troubles, and open, box and pneumatic caissons for bridge piers. Unit V improves the ground: compaction, vibro techniques, stone columns, sand drains, preloading, grouting, geotextiles, machine foundations and liquefaction, closing with case studies. Every section pairs theory with a worked number, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#a78bfa",
  emoji: "FE",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Site Investigation",
      summary:
        "Reading the ground before building on it: the purpose and planning of exploration per IS 1892, trial pits and the boring methods, the Standard Penetration and Cone Penetration Tests with their corrections and correlations, soil sampling with geophysical support, and the bore log that ties it all together.",
      chapter: {
        number: "01",
        title: "Site Investigation and Soil Exploration",
        intro:
          "Unit I covers everything that happens before a single foundation is designed: planning the investigation per IS 1892, opening the ground with trial pits and borings, measuring it in place with the SPT and CPT, recovering samples for the laboratory, supplementing boreholes with geophysics, and committing the findings to a bore log and report.",
        inOneBreath:
          "Site investigation runs from reconnaissance through preliminary to detailed exploration; trial pits give direct inspection to about 3-5 m; borings - auger, wash, rotary and percussion - take the hole deeper; the SPT drives a split spoon 450 mm and counts N for the middle 300 mm, corrected for overburden and dilatancy; the CPT pushes a 60-degree, 10 cm2 cone at 20 mm/s and returns a continuous qc profile; samplers are judged by area ratio (below 10 percent for undisturbed); geophysics - seismic refraction and resistivity - profiles between boreholes; and every hole ends as a bore log that feeds the report.",
        sections: [
          {
            number: "1.1",
            title: "Purpose, planning and trial pits (IS 1892)",
            body: [
              "Site investigation answers three questions with numbers: can the soil carry the load, how much will it settle, and can the foundation be built safely and economically. IS 1892 organises the work in stages - reconnaissance from maps, walk-over and nearby structures; preliminary exploration with a few shallow pits or borings to fix the general stratum picture; and detailed exploration with a planned grid of boreholes, in-situ tests and laboratory testing sized to the importance and cost of the structure. Skipping stages either wastes borings on ground already understood or leaves soft layers undiscovered until they become claims.",
              "Trial pits and open trenches are the cheapest detailed tool for shallow depths: they permit direct visual inspection of the soil and its structure, allow block and undisturbed sampling, and can host plate load tests at foundation level. They are practical to about 3-5 m in stable or shored ground above the water table; below water, in loose sand or in deep soft clay the walls slump or boil, and borings take over. Every pit should be logged layer by layer on the spot, photographed with a scale, and backfilled compactly after sampling.",
              "Planning fixes the extent and depth of exploration before rigs arrive. Boreholes are placed at structure corners and column lines - closer where strata vary, sparser on uniform sites - and at least one hole must go deep enough to prove a competent stratum. The usual depth rules: explore to a depth where the stress increment from the structure falls below about 10 percent of the applied pressure, which is roughly 1.5-2 times the footing width below foundation level, or to rock. The programme ends in a report: bore logs, test data, interpreted strata sections, and recommended allowable bearing values.",
            ],
            bullets: [
              "Purpose: select foundation type, predict bearing capacity and settlement, and plan safe, economical construction - not merely collect data.",
              "IS 1892 stages: reconnaissance, preliminary and detailed exploration, each stage refining the last before money is spent on rigs.",
              "Trial pits: direct inspection, block sampling and plate tests up to about 3-5 m; useless below the water table without shoring and dewatering.",
              "Depth rule: explore until stress increase is below about 10 percent of applied stress - roughly 1.5-2 B below footing level - or until rock is proven.",
              "Deliverable: bore logs, test summaries, interpreted ground profile and recommended safe bearing values in a written report.",
            ],
            table: {
              caption: "The IS 1892 stages of site investigation.",
              headers: ["Stage", "Purpose", "Typical activities"],
              rows: [
                ["Reconnaissance", "Overall picture at minimum cost", "Study maps, geological sheets, walk-over, talk to owners, inspect nearby foundations"],
                ["Preliminary", "Fix the general stratum pattern", "A few trial pits or shallow borings, index properties, water table observations"],
                ["Detailed", "Numbers for design", "Grid of borings, SPT/CPT, undisturbed sampling, lab shear and consolidation tests"],
                ["Report", "Interpret and recommend", "Bore logs, subsoil profile, allowable pressures, foundation advice, construction cautions"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The site investigation sequence",
              caption: "Each stage decides how much of the next stage is needed - never drill a grid blind.",
              steps: [
                { label: "Reconnaissance", note: "maps, geology, walk-over" },
                { label: "Preliminary pits/borings", note: "general strata and water table" },
                { label: "Plan detailed programme", note: "hole positions and depths fixed" },
                { label: "Boreholes with SPT/CPT and sampling", note: "numbers for design" },
                { label: "Bore logs, profile and report", note: "allowable bearing recommended" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two IS 1892 questions recur: 'explain the stages of site investigation' and 'how deep should borings go?' Answer with the three stages in order, then the 10 percent stress-increment rule and the 1.5-2 B rule of thumb, quoting that every site must have at least one borehole to rock or refusal.",
            },
            keyTerms: [
              { term: "Reconnaissance", definition: "The first, cheapest stage of investigation using maps, geological data and a site walk-over before any hole is dug." },
              { term: "Trial pit", definition: "A shallow open excavation permitting direct inspection and sampling, practical to about 3-5 m in stable ground." },
              { term: "Depth of exploration", definition: "The depth to which the ground must be tested - until stress increase falls below about 10 percent of applied stress or rock is met." },
            ],
            examQuestions: [
              {
                q: "What is the purpose of site investigation? Describe the stages of investigation recommended by IS 1892 and the factors that govern the depth and number of boreholes.",
                marks: 7,
                outline: [
                  "State the purpose: safe, economical foundation choice with predicted settlement.",
                  "Stage 1 - reconnaissance: maps, geology, walk-over, neighbouring structures.",
                  "Stage 2 - preliminary: a few pits/borings, water table, index tests.",
                  "Stage 3 - detailed: borehole grid, SPT/CPT, undisturbed sampling, lab tests.",
                  "Depth: 10 percent stress-increment rule, about 1.5-2 B below footing, or to rock.",
                  "Number: governed by structure importance, area and variability seen in earlier stages.",
                  "Close with the report and its recommended allowable bearing values.",
                ],
              },
              { q: "State two advantages and two limitations of trial pits as an exploration method.", marks: 3 },
              { q: "Write the 10 percent stress-increment rule for depth of exploration.", marks: 2 },
            ],
          },
          {
            number: "1.2",
            title: "Boring methods: auger, wash, rotary and percussion",
            body: [
              "Borings carry exploration below the reach of pits. Hand and power augers - helical or post-hole - bore a small diameter hole cheaply in cohesive soils above the water table to about 6 m, lifting soil on the flights for inspection. Wash boring drives a casing and jets water through a chopping bit; the cuttings return as slurry, so the method is fast and cheap in most soils and below water, but the washed returns are badly disturbed and strata boundaries must be confirmed by sampling at intervals.",
              "Rotary drilling rotates a bit under pressure, using bentonite mud or water to stabilise the hole and lift cuttings; with a core barrel and diamond or tungsten bit it recovers intact rock core, making it the method for hard strata and deep holes. Percussion drilling lifts and drops a heavy chisel to crush boulders, hard pan and soft rock where other methods stall; the crushed material is bailed with water. Casing and mud keep the hole open, and the water head inside must be kept above the outside level in permeable sand to prevent loosening at the base before an SPT is run.",
              "Choice is a matter of soil, depth and budget. A typical programme in Indian practice starts with auger borings, moves to wash boring with casing for deeper alluvium, reserves rotary coring for the rock horizon, and calls in percussion only for boulder-laden ground. Whatever the method, the golden rules are constant: sample or test at every stratum change and at least every 1.5 m, record the water table on the day it is met, and never let the return wash contaminate the sample you are about to take.",
            ],
            bullets: [
              "Auger boring: cheapest, cohesive soils above water table, about 6 m deep; flights lift soil for visual classification.",
              "Wash boring: casing plus water jet through a chopping bit; fast in any soil below water, but returns are disturbed - confirm by sampling.",
              "Rotary drilling: bit under rotation with bentonite mud; with a core barrel it recovers rock core - the method for hard strata.",
              "Percussion drilling: heavy chisel crushes boulders and soft rock; cuttings bailed out; slow but unstoppable in mixed ground.",
              "Keep the water head inside the casing above the outside level in sand - otherwise the base loosens and the next SPT reads low.",
            ],
            table: {
              caption: "Choosing a boring method.",
              headers: ["Method", "Best suited for", "Practical depth", "Chief drawback"],
              rows: [
                ["Hand/power auger", "Cohesive soil, above water table", "about 6 m", "Useless in sand below water"],
                ["Wash boring", "All soils below water, alluvium", "30-50 m", "Cuttings disturbed; needs casing"],
                ["Rotary (with core bit)", "Rock, hard strata, deep holes", "100 m or more", "Costly rig and mud circulation"],
                ["Percussion", "Boulders, hard pan, soft rock", "about 30 m", "Slow; hole walls need casing"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Saturated sandy site, 15 m to firm stratum - which rig?",
              caption: "The wrong rig does not just cost money - it can destroy the very soil property you went to measure.",
              start: "Site: loose-to-medium saturated sand over clay, target stratum at 15 m",
              branches: [
                { label: "Wash boring with casing", outcome: "Reaches 15 m in a day; SPT and piston sampling done inside the casing", good: true },
                { label: "Rotary drilling with bentonite", outcome: "Stable hole, excellent samples, higher cost fully justified on a major project", good: true },
                { label: "Open trial pit to 15 m", outcome: "Walls boil and collapse below the water table - abandoned after 3 m", good: false },
                { label: "Hand auger", outcome: "Refuses in saturated sand after 4-5 m; depth never reached", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Wash water ruins SPT values",
              body: "In wash boring, if the inside water level drops below the outside level before the sampler is driven, water rushes into the hole, loosens the sand at the base and the blow count reads far too low. Always top up the casing with water before driving the split spoon - examiners ask this as a short note on 'precautions during boring'.",
            },
            keyTerms: [
              { term: "Wash boring", definition: "A boring method in which water jets through a chopping bit and cuttings return as slurry inside a casing." },
              { term: "Casing", definition: "A pipe lining the borehole to keep it open through loose or water-bearing strata." },
              { term: "Rock coring", definition: "Rotary drilling with a core barrel and diamond bit that recovers an intact cylindrical sample of rock." },
            ],
            examQuestions: [
              {
                q: "Describe wash boring and rotary drilling with neat sketches. Compare auger, wash, rotary and percussion boring for soil, depth and sample quality, and state the precautions necessary before sampling in a water-bearing sand.",
                marks: 7,
                outline: [
                  "Sketch wash boring: casing, water swivel, chopping bit, slurry return.",
                  "Explain the jetting action, rate of progress and the disturbed nature of returns.",
                  "Sketch rotary drilling: rotating bit, mud circulation, core barrel for rock.",
                  "Tabulate auger vs wash vs rotary vs percussion for soil type, depth, sample quality.",
                  "Precaution: keep inside water head above outside level in permeable strata.",
                  "Precaution: clean the hole bottom of slurry before seating the sampler.",
                  "Precaution: sample at every stratum change or at least every 1.5 m, log water table.",
                ],
              },
              { q: "Why is rotary drilling preferred for exploring rock strata? Name the bit used.", marks: 3 },
              { q: "Write two limitations of wash boring.", marks: 2 },
            ],
          },
          {
            number: "1.3",
            title: "Standard Penetration Test (IS 2131)",
            body: [
              "The SPT is the workhorse of Indian site investigation. A split-spoon sampler - about 51 mm outside and 38 mm inside diameter, 450-650 mm long - is lowered on drill rods to the cleaned bottom of the hole. A 63.5 kg hammer falling freely through 750 mm drives it in three successive 150 mm penetrations. The first 150 mm seats the sampler in disturbed soil; the blow count N for the next 300 mm is the standard penetration resistance. The soil retained in the spoon is a disturbed sample for identification and index tests.",
              "N must be corrected before use. The overburden correction CN adjusts the confinement effect: the same dense sand shows a low N at shallow depth and a high N deep, so N1 = CN x N with CN from Peck's relation CN = 0.77 log10(1960/sigma'v), sigma'v in kPa. For saturated fine sands and silts where N exceeds 15, dilatancy correction is applied as N' = 15 + 0.5(N - 15) because such soils develop negative pore pressure under driving and read high. Per IS 2131 the corrected value is reported to one decimal place and plotted against depth on the bore log.",
              "N correlates with nearly everything designers need: relative density and friction angle of sands (roughly phi from tables keyed to N1), and undrained cohesion of clays (a rough site figure cu about 5N kPa, refined by Stroud's factor). Design uses include fixing the allowable bearing pressure of shallow footings by Peck-Hansen-Thorburn charts, judging liquefaction susceptibility, and estimating pile capacity. Its virtues are simplicity, a sample with every test, and sixty years of correlations; its vices are roughness and sensitivity to operator practice - hence the corrections and the rule that design never rests on a single N.",
            ],
            bullets: [
              "Apparatus: split-spoon about 51 mm OD and 38 mm ID, driven by a 63.5 kg hammer with a 750 mm free fall.",
              "Measurement: first 150 mm is the seating drive; N = blows for the next 300 mm.",
              "Overburden correction: N1 = CN x N, CN = 0.77 log10(1960/sigma'v kPa) - same sand, deeper, reads higher without it.",
              "Dilatancy correction: for saturated fine sand/silt with N > 15, N' = 15 + 0.5(N - 15).",
              "Correlations: phi and relative density of sand, cu about 5N kPa in clay, allowable footing pressure, liquefaction screening.",
            ],
            codeExample: {
              language: "python",
              caption: "Correcting a field SPT blow count for overburden and dilatancy per IS 2131 practice.",
              code: `import math

# SPT corrections
N_field = 18                 # blows for the middle 300 mm
sigma_v_eff = 120.0          # effective overburden at test depth (kPa)

CN = 0.77 * math.log10(1960.0 / sigma_v_eff)     # Peck overburden factor
CN = min(max(CN, 0.45), 1.7)                     # keep it in a sane band
N1 = N_field * CN
print(f"CN = {CN:.2f} -> N1 = {N1:.1f}")

# Dilatancy correction, saturated fine sand/silt, only if N > 15
if N_field > 15:
    N_prime = 15 + 0.5 * (N_field - 15)
    print(f"dilatancy-corrected N' = {N_prime:.1f}")

cu_approx = 5.0 * N1          # rough clay correlation (kPa)
print(f"rough cu from N1 = {cu_approx:.0f} kPa")`,
            },
            diagram: {
              kind: "pipeline",
              title: "The SPT from clean hole to design number",
              caption: "Five stages - the seating drive is the one students forget in exam sketches.",
              stages: [
                { label: "Clean hole to test depth", note: "bottom freed of slurry" },
                { label: "Lower sampler on rods", note: "51 mm split spoon on the bottom" },
                { label: "Seating drive, 150 mm", note: "ignored in the count" },
                { label: "Count N for next 300 mm", note: "63.5 kg hammer, 750 mm fall" },
                { label: "Correct and correlate", note: "N1, N', phi, cu, allowable pressure" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The numbers 63.5 kg, 750 mm, 150 mm and 300 mm are asked verbatim, and so are the two correction formulas - CN = 0.77 log10(1960/sigma'v) and N' = 15 + 0.5(N - 15). Write them with units and say which soil each correction belongs to; that alone is worth half the marks.",
            },
            keyTerms: [
              { term: "N-value", definition: "The number of blows of a 63.5 kg hammer falling 750 mm needed to drive the split spoon the second and third 150 mm." },
              { term: "Overburden correction", definition: "The factor CN that normalises N for the confining pressure at the test depth." },
              { term: "Split-spoon sampler", definition: "A longitudinally split sampling tube driven by the SPT hammer that also recovers a disturbed soil sample." },
            ],
            examQuestions: [
              {
                q: "Describe the Standard Penetration Test with a neat sketch of the split-spoon sampler. Explain the corrections applied to the N-value and list four engineering uses of the corrected value.",
                marks: 7,
                outline: [
                  "Sketch the sampler (about 51 mm OD, 38 mm ID) with hammer, guide rods and anvil.",
                  "Procedure: clean hole, seat sampler, drive 3 x 150 mm, record blows.",
                  "N = blows for the middle 300 mm; first 150 mm ignored as seating.",
                  "Overburden correction N1 = CN x N, CN = 0.77 log10(1960/sigma'v).",
                  "Dilatancy correction N' = 15 + 0.5(N - 15) for saturated fine silty sand with N > 15.",
                  "Uses: phi and relative density, cu about 5N kPa, allowable footing pressure, liquefaction screening.",
                  "Mention IS 2131 and plotting N against depth on the bore log.",
                ],
              },
              { q: "State the hammer mass and fall used in the SPT and define the seating drive.", marks: 2 },
              { q: "Write the dilatancy correction formula and the soil condition in which it applies.", marks: 3 },
            ],
          },
          {
            number: "1.4",
            title: "Cone Penetration Test (static cone, IS 4968)",
            body: [
              "The static cone or Dutch cone test pushes - never hammers - a cone of 60 degree apex and 10 cm2 base area into the ground at a steady 20 mm/s while rods carry the force to the surface. The measured end resistance qc, and where a friction sleeve is fitted the local side friction fs, are logged continuously against depth. The friction ratio Rf = fs/qc x 100 percent separates soils mechanically: values below about 1.5 percent indicate clean sands, above about 4 percent clays, and in between silty or mixed soils - a classification made without a single sample.",
              "In clays, undrained cohesion follows from cu = (qc - sigma_v)/Nk with the cone factor Nk about 15-20; in sands qc feeds directly into bearing capacity and pile design charts. The CPT's great virtues are speed and continuity - it produces a resistance trace every few millimetres, catching thin weak layers that an SPT at 1.5 m intervals skips entirely. Its weaknesses: no sample, refusal in gravel and hard strata, and the need for a heavy reaction frame - about 100 kN of dead weight or anchor piles to push the cone deep.",
              "SPT and CPT are complements, not rivals, and RGPV loves the comparison. Typical practice runs CPT soundings cheaply across the whole site to map variability, then bores holes with SPT and sampling at the critical locations where samples and the water table record are needed. The piezocone (CPTu) adds pore pressure measurement, giving soil type, consolidation and permeability information from one sounding; IS 4968 governs the static cone procedure in Indian practice.",
            ],
            bullets: [
              "Cone: 60 degree apex angle, 10 cm2 base area, pushed at a uniform 20 mm/s per IS 4968.",
              "Measured: cone resistance qc (and sleeve friction fs); friction ratio Rf = fs/qc x 100 percent classifies soil type.",
              "Clay correlation: cu = (qc - sigma_v)/Nk with cone factor Nk about 15-20.",
              "Strengths: continuous profile, fast, catches thin weak layers that SPT at 1.5 m intervals misses.",
              "Limits: no sample recovered, refuses in gravel, and needs a large reaction system to push deep.",
            ],
            table: {
              caption: "SPT versus CPT - the standard exam comparison.",
              headers: ["Aspect", "SPT (IS 2131)", "CPT (IS 4968)"],
              rows: [
                ["Measurement", "Blow count N (dynamic)", "Cone resistance qc (static push)"],
                ["Soil sample", "Disturbed sample recovered", "No sample"],
                ["Profile", "Discrete, about every 1.5 m", "Continuous with depth"],
                ["Best soil", "Wide range including gravelly soils", "Soft to firm clays, sands, silts"],
                ["Correlations", "phi, Dr, cu, bearing pressure", "cu from qc/Nk, pile design charts"],
                ["Main limitation", "Rough; operator-sensitive energy", "Refuses in gravel; needs reaction frame"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Dynamic hammer versus static push",
              caption: "The two standard in-situ tests side by side - a favourite two-mark and seven-mark comparison.",
              left: {
                heading: "SPT - dynamic",
                items: [
                  "63.5 kg hammer, 750 mm fall drives a split spoon",
                  "N = blows for 300 mm after seating",
                  "Disturbed sample recovered every test",
                  "Discrete readings about every 1.5 m",
                  "Simple rig, works in gravelly soils",
                ],
              },
              right: {
                heading: "CPT - static",
                items: [
                  "Rod pushes a 10 cm2, 60 degree cone at 20 mm/s",
                  "qc and friction ratio logged continuously",
                  "No sample - classification from Rf alone",
                  "Thin weak layers cannot hide",
                  "Refuses in gravel; needs heavy reaction",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Field strategy",
              body: "Best practice is CPT everywhere plus SPT and sampling at critical points: the cone traces map variability between boreholes, and the SPT holes deliver samples, water table records and design-grade N values where they matter. Quote this combination when asked 'how would you explore a 200 m by 50 m factory site'.",
            },
            keyTerms: [
              { term: "Cone resistance qc", definition: "The force divided by the projected cone area needed to push the standard cone at 20 mm/s." },
              { term: "Friction ratio", definition: "Sleeve friction divided by cone resistance expressed as a percentage; low for sand, high for clay." },
              { term: "Piezocone (CPTu)", definition: "A cone penetration test with pore pressure measurement, yielding classification plus consolidation parameters." },
            ],
            examQuestions: [
              {
                q: "Explain the Cone Penetration Test with a sketch of the cone. How is the friction ratio used for soil classification, and how is cu obtained in clay? Compare the CPT with the SPT.",
                marks: 7,
                outline: [
                  "Sketch the 60 degree, 10 cm2 cone with friction sleeve; rods and reaction frame.",
                  "Pushing rate 20 mm/s; qc and fs recorded continuously.",
                  "Friction ratio Rf = fs/qc x 100; below about 1.5 percent sand, above about 4 percent clay.",
                  "Clay strength: cu = (qc - sigma_v)/Nk, Nk about 15-20.",
                  "SPT comparison: sample vs none, discrete vs continuous, hammer vs push.",
                  "CPT limitations: gravel refusal, reaction frame, no sample; IS 4968 reference.",
                  "Conclude: use CPT for coverage, SPT and borings for samples.",
                ],
              },
              { q: "Define friction ratio and give its typical value for clean sand and for soft clay.", marks: 3 },
              { q: "State the cone apex angle, base area and pushing rate of the static cone test.", marks: 2 },
            ],
          },
          {
            number: "1.5",
            title: "Soil sampling, geophysics and the bore log",
            body: [
              "Samples come in two grades. Disturbed samples - from auger cuttings, split spoons or wash returns - are fit only for classification, moisture content and index tests; they are sealed in bags or jars with labels. Undisturbed samples must preserve fabric, structure and strength for shear and consolidation testing, so they are taken with thin-walled tubes pushed steadily (Shelby tubes), or with piston samplers in soft clay where the piston holds the sample in place during withdrawal. Sampler quality is judged by the area ratio Ar = (D2 - d2)/d2 x 100 percent - below about 10 percent is the undisturbed ideal - and by the recovery ratio; samples are sealed with wax and kept upright until tested.",
              "Geophysical methods read between and beyond boreholes without drilling. Seismic refraction measures the travel time of a hammer or explosion-generated P-wave; since each stratum has its own velocity, reversal shooting yields layer velocities and depths - quick for mapping rock head across a site, but blind to a thin low-velocity layer hidden beneath a faster one. Electrical resistivity (Wenner or Schlumberger arrays) passes current through outer electrodes and reads potential at inner ones; clays conduct, sands and rock resist, so apparent resistivity profiles locate clay pockets, cavities and saline zones. Ground penetrating radar gives high-resolution shallow sections but dies quickly in conductive wet clay.",
              "The bore log is where every hole becomes a permanent record: a depth-ruled column showing soil description per stratum, SPT N values, sample positions and depths with type, water table on the date encountered and later readings, and driller's remarks such as refusal or loss of wash water. Assembled side by side, bore logs and geophysical lines become the subsoil profile that the report interprets into allowable bearing pressures and foundation advice. A missing water table entry or an unlabelled sample can invalidate the whole log - accuracy here is not clerical, it is engineering.",
            ],
            bullets: [
              "Disturbed samples: auger and spoon cuttings; for classification, moisture and index tests only.",
              "Undisturbed sampling: thin-walled Shelby tubes pushed steadily; piston sampler for soft clay; wax-seal, keep upright.",
              "Area ratio Ar = (D2 - d2)/d2 x 100; below about 10 percent qualifies as undisturbed-grade sampling.",
              "Seismic refraction: P-wave velocities locate strata depths and rock head; blind to hidden low-velocity layers.",
              "Resistivity profiling (Wenner): clay conducts, sand and rock resist - locates clay pockets, voids and saline groundwater.",
            ],
            table: {
              caption: "Geophysical support methods for site investigation.",
              headers: ["Method", "Property measured", "Best for", "Chief limitation"],
              rows: [
                ["Seismic refraction", "P-wave velocity per layer", "Rock head depth, rippability, profiles between boreholes", "Hidden slow layer beneath fast layer"],
                ["Electrical resistivity", "Apparent resistivity (Wenner array)", "Clay pockets, voids, saline water boundaries", "Depth interpretation is not unique"],
                ["Ground penetrating radar", "Reflected radar pulses", "Utilities, shallow voids, thin layers", "Penetration dies in wet conductive clay"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A bore log read as a layered soil profile",
              caption: "Index 0 is the top layer - the exact column a report shows beside every borehole.",
              layers: [
                { label: "0.0-1.5 m: filled earth, roots", note: "N = 4, disturbed sample S1" },
                { label: "1.5-4.5 m: brown silty sand, medium dense", note: "N = 14, spoon sample S2" },
                { label: "4.5-8.0 m: grey clay, soft, wet", note: "N = 5, undisturbed tube U1" },
                { label: "8.0-11.0 m: dense sand with gravel", note: "N = 32, water table at 3.0 m" },
                { label: "11.0 m+: weathered basalt, refusal", note: "rotary core from 11 m" },
              ],
            },
            callout: {
              type: "warning",
              title: "The area ratio decides the test",
              body: "A thick-walled sampler with Ar well above 10 percent compresses the soil as it enters - the 'undisturbed' tube then returns a strength 30-50 percent low. For triaxial and consolidation tests insist on thin-walled or piston sampling, check the recovery ratio, and reject tubes with visibly disturbed ends.",
            },
            keyTerms: [
              { term: "Undisturbed sample", definition: "A sample preserving the in-place fabric and strength, taken by a thin-walled sampler of area ratio below about 10 percent." },
              { term: "Area ratio", definition: "Ar = (D2 - d2)/d2 x 100 percent; the sampler wall thickness index that governs sample disturbance." },
              { term: "Bore log", definition: "The depth-ruled record of strata, samples, N values and water table for one borehole." },
            ],
            examQuestions: [
              {
                q: "Distinguish between disturbed and undisturbed samples. Define area ratio and recovery ratio, explain how undisturbed samples are taken and preserved, and describe the seismic refraction method of geophysical exploration with its limitation.",
                marks: 7,
                outline: [
                  "Disturbed: fabric destroyed - classification and index tests only.",
                  "Undisturbed: fabric and strength preserved - shear and consolidation testing.",
                  "Area ratio Ar = (D2 - d2)/d2 x 100; below about 10 percent for good sampling.",
                  "Recovery ratio = recovered length/pushed length; near 1 for good recovery.",
                  "Methods: thin-walled Shelby tube pushed steadily; piston sampler for soft clay.",
                  "Preservation: wax seal both ends, label, store upright, test soon.",
                  "Seismic refraction: P-wave travel times give layer velocities and depths; blind to hidden slow layer.",
                ],
              },
              { q: "List any five items a bore log must record.", marks: 3 },
              { q: "State two advantages of geophysical methods over boring.", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Shallow Foundations",
      summary:
        "Spreading the load near the surface: foundation types and their selection, Terzaghi's bearing capacity theory with its failure zones, the IS 6403 working formula with shape factors and water table corrections, the plate load test and its limitations, and the settlement analysis - immediate and consolidation - that sizes the final footing.",
      chapter: {
        number: "02",
        title: "Shallow Foundations: Capacity and Settlement",
        intro:
          "Unit II turns exploration data into a footing. It begins with the family of shallow foundations and how one is selected, states Terzaghi's theory and its three failure zones, converts the theory into the IS 6403 design formula with shape factors and water table corrections, checks the answer against the plate load test, and finally predicts settlement - immediate plus consolidation - because allowable pressure is governed by settlement as often as by failure.",
        inOneBreath:
          "Shallow foundations - pad, strip, combined, raft - suit depths within about 3 m where a good stratum exists; Terzaghi's general shear failure builds three zones beneath a strip footing - an elastic wedge, radial shear fans and Rankine passive wedges - giving qu = c Nc + gamma Df Nq + 0.5 gamma B Ngamma with factors functions of phi alone; local shear failure in loose soils uses two-thirds c and reduced factors; IS 6403 converts this to net capacity with shape factors (square 1.3, 1.2, 0.8) and water table corrections W' and W''; the plate load test (IS 1888) loads a 300-750 mm plate and scales settlement by B ratios for sand; and total settlement is immediate elastic plus primary consolidation from the oedometer, limited by IS 1904.",
        sections: [
          {
            number: "2.1",
            title: "Types of shallow foundations and their selection",
            body: [
              "A shallow foundation transmits load to the near-surface soil, generally within about 3 m, where excavation is cheap and a competent stratum exists. The family, in order of load: pad or spread footings under single columns; strip footings under load-bearing walls or a row of closely spaced columns; combined footings where two columns crowd a property line and their pads would overlap; strap or cantilever footings that tie such columns to a balanced combined base; and rafts or mats - flat, beam-and-slab or cellular - covering the whole structure when column loads are heavy and the soil weak, so that the entire building bears on one base and differential settlement is tamed.",
              "Selection is a decision tree, not a preference. First the soil profile: a strong stratum at shallow depth invites pads or strips; soft upper layers over good soil at depth push toward piles; uniformly weak but only moderately loaded soil suggests a raft that floats on the average. Then the checks: total and differential settlement (the usual raft trigger), the water table and dewatering cost, proximity to existing foundations, and frost and scour depths that set the minimum depth. IS 1904 requires every footing to reach at least 500 mm below natural ground and below the zone of seasonal volume change.",
              "Depth and size interact. A footing taken deeper gains from the surcharge term and from stronger, less weathered soil - deepening a pad in sand may double its allowable pressure. Wider footings spread load to more soil but settle more, so the final choice usually comes from a settlement check, not a capacity check. The pyramid of options - pad to strip to raft to pile to well - is climbed only as the soil weakens or the load grows, and every step up multiplies cost.",
            ],
            bullets: [
              "Pad (spread) footing for a single column; strip for walls or a close row of columns; combined and strap footings solve property-line congestion.",
              "Raft or mat carries the whole structure: chosen for heavy loads on weak, uniform soil, or to cut differential settlement.",
              "Selection inputs: soil profile, total and differential settlement, water table, neighbours, frost and scour - IS 1904 sets a 500 mm minimum depth.",
              "Deeper footings gain surcharge and strength; wider footings reduce pressure but settle more - settlement usually decides.",
              "Climb the pyramid pad -> strip -> raft -> pile -> well only when the soil demands it; each step multiplies cost.",
            ],
            table: {
              caption: "Shallow foundation types and when each is chosen.",
              headers: ["Type", "Carries", "Chosen when"],
              rows: [
                ["Pad / spread", "One column", "Good stratum near surface, light-to-medium column loads"],
                ["Strip", "A wall or close column row", "Load-bearing walls, line loads on fair soil"],
                ["Combined / strap", "Two crowded columns", "Property line or pad overlap problems"],
                ["Raft / mat", "Entire structure", "Heavy loads, weak uniform soil, settlement control, basement waterproofing"],
                ["Piles / wells (deep)", "Columns, bridges", "Weak stratum too deep for shallow - see Units III and IV"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The foundation selection pyramid",
              caption: "Narrowest tier on top - cost and complexity rise as soil weakens or load grows.",
              tiers: [
                { label: "Pad footing", note: "good soil, light load" },
                { label: "Strip footing", note: "walls, line loads" },
                { label: "Raft / mat", note: "weak soil, settlement control" },
                { label: "Pile foundation", note: "weak soil runs deep" },
                { label: "Well / caisson", note: "huge lateral loads, scour - bridges" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Compare shallow and deep foundations' and 'when is a raft preferred' are bankable questions. Answer with the depth criterion (about 3 m, D/B less than about 1), the load-spreading mechanism, and at least four explicit raft triggers: weak uniform soil, heavy column loads, differential settlement control and basement waterproofing.",
            },
            keyTerms: [
              { term: "Shallow foundation", definition: "A foundation placed at a depth comparable to or less than its width, generally within about 3 m of the surface." },
              { term: "Raft (mat) foundation", definition: "A single slab foundation under the entire structure, used for heavy loads on weak uniform soil or to limit differential settlement." },
              { term: "Differential settlement", definition: "Unequal settlement between adjacent parts of a structure - the usual trigger for cracks and for choosing a raft." },
            ],
            examQuestions: [
              {
                q: "Classify shallow foundations with sketches. Explain the factors governing the choice between pad, strip, raft and deep foundations, and state four conditions in which a raft is preferred.",
                marks: 7,
                outline: [
                  "Define shallow foundation (depth within about 3 m, D/B small).",
                  "Sketch pad, strip, combined/strap and raft (flat and beam-slab types).",
                  "Selection factors: soil profile, load magnitude, settlement limits, water table, neighbours, scour/frost.",
                  "IS 1904 minimum depth 500 mm and below seasonal variation zone.",
                  "Raft triggers: weak uniform soil, heavy column loads, differential settlement control, basement waterproofing, floating foundation use.",
                  "Deep foundations enter when weak soil persists beyond economic shallow depth.",
                  "Conclude: settlement, not capacity, usually makes the final choice.",
                ],
              },
              { q: "State the minimum depth of a shallow foundation per IS 1904 and the reason behind it.", marks: 2 },
              { q: "Differentiate between a strip footing and a raft foundation.", marks: 3 },
            ],
          },
          {
            number: "2.2",
            title: "Terzaghi's bearing capacity theory",
            body: [
              "Terzaghi (1943) gave the first complete bearing capacity theory for a strip footing. Assumptions: the footing is a strip of width B founded at depth Df not exceeding B; the base is rough; the soil is homogeneous, weightless in the wedge analysis, semi-infinite and incompressible; and the failure is general shear - a continuous rupture surface to the ground with a clearly defined failure load. Beneath the base he divided the failing soil into three zones: Zone I, an elastic wedge in the shape of an isosceles triangle of base angles phi moving down with the footing; Zone II, curved radial shear zones that spiral outward; Zone III, Rankine passive wedges pushed up sideways.",
              "Equilibrium of the Zone I wedge against the passive resistance of Zones II and III, with the surcharge gamma Df acting on the ground surface, yields the strip-footing equation qu = c Nc + gamma Df Nq + 0.5 gamma B Ngamma, where c is cohesion, gamma the unit weight, and Nc, Nq, Ngamma are bearing capacity factors - pure functions of phi. Nq = e^(pi tan phi) tan^2(45 + phi/2), Nc = (Nq - 1) cot phi, and Ngamma comes from Terzaghi's tables. For a square footing the coefficients become 1.3cNc + gamma Df Nq + 0.4 gamma B Ngamma; for a circular one 1.3cNc + gamma Df Nq + 0.3 gamma B Ngamma.",
              "Loose sands and soft clays fail in local shear - rupture surfaces develop only partially and the failure load is not sharply defined - so Terzaghi directs us to use two-thirds of c with reduced factors Nc', Nq', Ngamma' evaluated at phi' = atan(2/3 tan phi). The theory ignores scale effects, eccentricricity and inclination, which later workers (Meyerhof, Hansen, Vesic) added; but for the centred vertical strip footing of RGPV numericals it remains the exact expected answer. The worked pattern never changes: compute the factors from phi, substitute the three terms, divide by the factor of safety (usually 3, or 2.5-3 per IS) and compare with the applied pressure.",
            ],
            bullets: [
              "Assumptions: strip footing, Df not exceeding B, rough base, homogeneous semi-infinite soil, general shear, strip/plane strain.",
              "Three zones: Zone I elastic wedge (base angles phi), Zone II radial shear spirals, Zone III Rankine passive wedges.",
              "Strip equation: qu = c Nc + gamma Df Nq + 0.5 gamma B Ngamma - cohesion, surcharge and width terms.",
              "Factors: Nq = e^(pi tan phi) tan^2(45 + phi/2); Nc = (Nq - 1) cot phi; Ngamma from Terzaghi's tables.",
              "Local shear: use c' = (2/3)c with reduced factors Nc', Nq', Ngamma' for loose sand and soft clay.",
              "Square footing: 1.3 c Nc + gamma Df Nq + 0.4 gamma B Ngamma; circular: the 0.4 term becomes 0.3.",
            ],
            codeExample: {
              language: "python",
              caption: "Terzaghi strip-footing capacity for a 2 m footing in sand (phi = 30 degrees).",
              code: `import math

# Terzaghi bearing capacity, strip footing
phi_deg = 30.0            # friction angle (degrees)
c, gamma = 0.0, 18.0      # cohesion (kPa), unit weight (kN/m3)
B, Df = 2.0, 1.5          # footing width and depth (m)

phi = math.radians(phi_deg)
Nq = math.exp(math.pi * math.tan(phi)) * \
     math.tan(math.radians(45 + phi_deg / 2)) ** 2
Nc = (Nq - 1) / math.tan(phi)
Ngamma = 2 * (Nq + 1) * math.tan(phi)   # Vesic form ~ Terzaghi tables

qu = c * Nc + gamma * Df * Nq + 0.5 * gamma * B * Ngamma
print(f"Nc = {Nc:.1f}, Nq = {Nq:.1f}, Ngamma = {Ngamma:.1f}")
print(f"ultimate qu = {qu:.0f} kPa")
print(f"safe at FS 3 = {qu / 3:.0f} kPa")

# Square footing multipliers: 1.3 c Nc + q Nq + 0.4 gamma B Ngamma
qu_sq = 1.3 * c * Nc + gamma * Df * Nq + 0.4 * gamma * B * Ngamma
print(f"square footing qu = {qu_sq:.0f} kPa")`,
            },
            diagram: {
              kind: "layers",
              title: "Terzaghi's failure zones under a strip footing",
              caption: "Index 0 at the top - the wedge, then the radial fans, then the passive wedges; a must-draw exam sketch.",
              layers: [
                { label: "Zone I: elastic wedge", note: "rough-base triangle, base angles phi, moves down" },
                { label: "Zone II: radial shear zones", note: "log-spiral surfaces fan the load outward" },
                { label: "Zone III: Rankine passive wedges", note: "pushed sideways and up against surcharge" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The assumptions and the zone sketch carry as many marks as the algebra. Write all assumptions before the derivation, draw the three zones with the wedge angle marked phi, and close with the equation for strip, square and circular footings. For local shear, remember the pair: two-thirds c and reduced factors.",
            },
            keyTerms: [
              { term: "Ultimate bearing capacity", definition: "The gross pressure at which the soil beneath a footing fails in shear." },
              { term: "General shear failure", definition: "A bearing failure with a continuous rupture surface to the ground and a clearly defined peak load - dense sands, stiff clays." },
              { term: "Bearing capacity factors", definition: "Nc, Nq and Ngamma - dimensionless functions of phi only, from Terzaghi's wedge equilibrium." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of Terzaghi's bearing capacity theory. Describe the failure zones beneath a strip footing with a sketch and derive the expression for ultimate bearing capacity, explaining each term and the modifications for square and circular footings.",
                marks: 7,
                outline: [
                  "Assumptions: strip footing, Df at or below B? (Df not exceeding B), rough base, homogeneous semi-infinite soil, general shear, centred vertical load.",
                  "Sketch Zones I, II, III: elastic wedge with base angles phi, radial shear fans, Rankine passive wedges.",
                  "Wedge equilibrium: downward load balanced by cohesion on the wedge faces and passive resistance from Zones II-III.",
                  "Result: qu = c Nc + gamma Df Nq + 0.5 gamma B Ngamma.",
                  "Identify the three terms: cohesion, surcharge, self-weight; Nq = e^(pi tan phi) tan^2(45 + phi/2), Nc = (Nq - 1) cot phi.",
                  "Square footing: 1.3 c Nc + gamma Df Nq + 0.4 gamma B Ngamma; circular: 0.3 in the width term.",
                  "Mention local shear: two-thirds c with Nc', Nq', Ngamma' for loose/soft soils.",
                ],
              },
              { q: "Distinguish between general and local shear failure.", marks: 3 },
              { q: "Write the bearing capacity equation for a square footing.", marks: 2 },
            ],
          },
          {
            number: "2.3",
            title: "IS 6403: net capacity, shape factors and water table",
            body: [
              "IS 6403 puts Terzaghi's theory into the design office. It works in net terms - the capacity available above the existing overburden: qnu = c Nc sc + gamma Df (Nq - 1) sq + 0.5 gamma B Ngamma sgamma (per unit area, with shape factors sc, sq, sgamma). Subtracting 1 inside the surcharge bracket converts gross to net: only the pressure beyond the soil already present is available. The net safe bearing capacity is qns = qnu/F with F usually 2.5-3, and the net safe bearing pressure is the smaller of this and the pressure that keeps settlement within limits.",
              "Shape factors modify the strip equation: for a square footing sc = 1.3, sq = 1.2, sgamma = 0.8; for a circular footing sc = 1.3, sq = 1.2, sgamma = 0.6; for a rectangle sc = sq = 1 + 0.2 B/L and sgamma = 1 - 0.4 B/L; a strip takes all three as 1. Depth factors (close to 1 for shallow footings) and inclination factors for inclined loads complete the code formula. In an exam they should be named, not necessarily tabulated, but the shape factors above are asked as numbers.",
              "The water table correction is IS 6403's signature and a guaranteed numerical step. W' multiplies the surcharge term: it is 1.0 when the water table sits at or below the footing base, falls linearly to 0.5 when the table rises to the ground surface. W'' multiplies the width term: it is 1.0 when the table is at or below depth B beneath the base, falls linearly to 0.5 when the table is at the base. Between limit positions both factors interpolate linearly - because submerged unit weight is roughly half the bulk weight, 0.5 is the floor.",
            ],
            bullets: [
              "Net ultimate capacity per IS 6403: qnu = c Nc sc + gamma Df (Nq - 1) sq + 0.5 gamma B Ngamma sgamma.",
              "The -1 converts gross to net: capacity counts only pressure beyond the existing overburden.",
              "Shape factors: square 1.3/1.2/0.8; circle 1.3/1.2/0.6; rectangle 1 + 0.2 B/L, 1 + 0.2 B/L, 1 - 0.4 B/L; strip 1/1/1.",
              "W' on the surcharge term: 1.0 with table at/below base, 0.5 at ground surface, linear in between.",
              "W'' on the width term: 1.0 with table at/below B under the base, 0.5 at base level, linear in between.",
              "Net safe bearing capacity = qnu/F (F = 2.5-3); allowable = lesser of safe capacity and settlement-limited pressure.",
            ],
            table: {
              caption: "IS 6403 shape factors and water table corrections.",
              headers: ["Footing shape", "sc", "sq", "sgamma"],
              rows: [
                ["Strip", "1.0", "1.0", "1.0"],
                ["Square", "1.3", "1.2", "0.8"],
                ["Circular", "1.3", "1.2", "0.6"],
                ["Rectangular (B x L)", "1 + 0.2 B/L", "1 + 0.2 B/L", "1 - 0.4 B/L"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "An IS 6403 capacity computation, step by step",
              caption: "Write the formula first, then feed it - the exact order examiners look for in numericals.",
              steps: [
                { label: "Soil data: c, phi, gamma", note: "from investigation, Unit I" },
                { label: "Factors Nc, Nq, Ngamma", note: "functions of phi" },
                { label: "Shape factors from geometry", note: "square/rect/circle table" },
                { label: "Water table corrections W', W''", note: "interpolate linearly" },
                { label: "Net ultimate qnu", note: "apply W' and W'' to the right terms" },
                { label: "Safe = qnu / F (F about 3)", note: "compare with settlement limit" },
              ],
            },
            callout: {
              type: "warning",
              title: "Two classic lost marks",
              body: "First, forgetting the -1 on the Nq term when the question asks for NET capacity - a 20-30 percent overestimate. Second, swapping W' and W'': W' (prime) belongs to the surcharge term and dies when the table reaches the surface; W'' (double prime) belongs to the width term and dies when the table reaches the base. Label them 'surcharge' and 'width' in the margin of your answer.",
            },
            keyTerms: [
              { term: "Net safe bearing capacity", definition: "Net ultimate capacity divided by the factor of safety - capacity available above existing overburden." },
              { term: "Shape factor", definition: "The IS 6403 multipliers (sc, sq, sgamma) converting strip-footing capacity to square, circular or rectangular shapes." },
              { term: "Water table correction", definition: "Factors W' and W'' reducing the surcharge and width terms as the water table rises toward the footing base." },
            ],
            examQuestions: [
              {
                q: "Write the IS 6403 expression for net ultimate bearing capacity of a rectangular footing, explaining every symbol. Explain the water table corrections W' and W'' and work their values for the water table standing (i) at the ground surface and (ii) at depth B below the base.",
                marks: 7,
                outline: [
                  "Formula: qnu = c Nc sc + gamma Df (Nq - 1) sq W' + 0.5 gamma B Ngamma sgamma W''.",
                  "Define c, phi-based factors, gamma, Df, B, L; shape factors sc = sq = 1 + 0.2 B/L, sgamma = 1 - 0.4 B/L.",
                  "Explain net vs gross: the -1 on Nq removes existing overburden.",
                  "W' on surcharge term: 1.0 at/below base, 0.5 at surface, linear between.",
                  "W'' on width term: 1.0 at/below B under base, 0.5 at base, linear between.",
                  "Case (i) table at surface: W' = 0.5, W'' = 0.5 (interpolate to surface).",
                  "Case (ii) table at B below base: W' = 1.0, W'' = 1.0; close with F = 2.5-3 for safe value.",
                ],
              },
              { q: "State the shape factors for square and circular footings per IS 6403.", marks: 2 },
              { q: "Why is the water table correction smaller for the surcharge term than you might first guess? Explain with unit weights.", marks: 3 },
            ],
          },
          {
            number: "2.4",
            title: "Plate load test (IS 1888)",
            body: [
              "The plate load test is the in-situ bearing trial of Unit II. A steel plate 300-750 mm square or circular is seated at foundation level in a pit at least four to five times the plate width, on a thin sand layer for uniform contact. Load is applied in convenient increments - about one-tenth of the expected ultimate - through a hydraulic jack reacting against kentledge or an anchored girder, and settlement is read on dial gauges. Each increment is held until the settlement rate falls below about 0.02 mm per minute (or for 24 hours in clay), and the test runs to failure or to at least 1.5 times the design pressure. IS 1888 standardises the apparatus and procedure.",
              "Interpretation plots load intensity against settlement. The failure load comes from the point where the curve plunges, or by specified settlement criteria (for example, the pressure at a settlement of 10 percent of the plate width in general shear tests); dividing by a factor of safety of 2-3 gives the safe bearing pressure. The test's greatest value is on sand, where it also supplies a deformation modulus for settlement calculation - but the loaded bulb of a small plate reaches only about twice the plate width, so the test reads the top strata only.",
              "The limitations are the exam. Size effect: on sand, settlement scales almost with width, so a footing settles more than a plate at the same pressure; Terzaghi and Peck's scale law, settlement of footing = settlement of plate x [B(Bp + 0.3)]/[Bp(B + 0.3)], corrects for it (B and Bp in metres). On clay, plate and full footing settle nearly equally at equal pressure, so scale-up is not the issue - but the short test duration misses consolidation entirely, reading only immediate settlement. Add the shallow influence zone, the cost of reaction systems and the fixed test depth, and the plate test becomes a calibration tool, not a design machine.",
            ],
            bullets: [
              "Setup: 300-750 mm plate at foundation level, pit 4-5 plate widths wide, jack against kentledge or anchors, per IS 1888.",
              "Loading: increments about one-tenth of expected ultimate; each held until settlement rate is below 0.02 mm/min.",
              "Run to failure or at least 1.5 times design pressure; plot pressure-settlement and pick the failure or specified-settlement point.",
              "Size effect on sand: footing settlement = plate settlement x [B(Bp + 0.3)]/[Bp(B + 0.3)] - plates underpredict footing settlement.",
              "Limitations: influence only about 2 plate widths deep; misses consolidation in clay; costly reaction; fixed test depth.",
            ],
            table: {
              caption: "Plate load test at a glance (IS 1888).",
              headers: ["Item", "Standard value"],
              rows: [
                ["Plate size", "300, 450, 600 or 750 mm square/circular"],
                ["Test level", "At proposed foundation depth; pit width 4-5 x plate width"],
                ["Load increment", "About one-tenth of estimated failure load"],
                ["Holding criterion", "Rate of settlement below about 0.02 mm/min"],
                ["Termination", "Failure, or at least 1.5 x design pressure"],
                ["Safe pressure", "Failure or specified-settlement pressure divided by FS 2-3"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "What the plate test gives - and where it fails",
              caption: "Every limitation on the right has cost a real project; every item on the left earns exam marks.",
              left: {
                heading: "What it delivers",
                items: [
                  "In-situ pressure-settlement curve at foundation level",
                  "Failure load and modulus of subgrade reaction",
                  "Checks re-compacted or improved ground quality",
                  "Deformation modulus for settlement analysis on sand",
                  "Quick, visible, standardised by IS 1888",
                ],
              },
              right: {
                heading: "Where it fails",
                items: [
                  "Reads only about 2 plate widths of soil - deep weak layers hidden",
                  "Short duration misses consolidation settlement of clay",
                  "Small plate underpredicts footing settlement on sand (scale law needed)",
                  "Costly kentledge/reaction for higher loads",
                  "Cannot test through water or at true raft scale",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Explain the plate load test with limitations' is one of the most repeated questions in this paper. Fix the skeleton: apparatus sketch, increments and holding criterion, curve interpretation, then five limitations with the sand scale law formula written out. The formula [B(Bp + 0.3)]/[Bp(B + 0.3)] is worth two marks by itself.",
            },
            keyTerms: [
              { term: "Plate load test", definition: "An IS 1888 field test loading a 300-750 mm plate at foundation level to obtain the pressure-settlement response." },
              { term: "Kentledge", definition: "Dead weight (usually concrete blocks) providing reaction for the loading jack in load tests." },
              { term: "Size effect", definition: "The dependence of settlement on loaded width on sands - the plate result must be scaled to the footing." },
            ],
            examQuestions: [
              {
                q: "Describe the plate load test with a neat sketch of the setup. Explain the interpretation of the load-settlement curve, the scale effect on sands, and state five limitations of the test.",
                marks: 7,
                outline: [
                  "Sketch: pit at foundation level, plate on sand bedding, jack, kentledge, dial gauges.",
                  "Procedure: increments about one-tenth of ultimate; hold to below 0.02 mm/min; go to failure or 1.5 x design.",
                  "Curve: pressure vs settlement; failure at plunge or specified settlement; safe = failure/FS 2-3.",
                  "Scale law on sand: footing settlement = plate settlement x B(Bp + 0.3)/[Bp(B + 0.3)].",
                  "Limitation 1: influence zone only about 2 plate widths deep.",
                  "Limitations 2-3: consolidation missed in clay; plate smaller than footing underpredicts sand settlement.",
                  "Limitations 4-5: costly reaction system; cannot reach deep or underwater strata; test depth fixed.",
                ],
              },
              { q: "Write the Terzaghi-Peck scale law relating plate and footing settlement on sand.", marks: 2 },
              { q: "Why does a plate load test on clay overestimate the safe bearing pressure for long-term loading?", marks: 3 },
            ],
          },
          {
            number: "2.5",
            title: "Settlement: immediate and consolidation",
            body: [
              "Total settlement has three parts: immediate (elastic) settlement Si as the soil distorts without volume change under load; primary consolidation settlement Sc as pore water is squeezed from clay and the soil skeleton compresses; and secondary (creep) settlement Ss continuing at constant effective stress, appreciable in soft organic clays and peats. Immediate settlement is largest in sands - which settle almost instantly, which is why footings on sand are checked for immediate settlement only - while clays pay in slow consolidation that can run for decades.",
              "Immediate settlement uses elastic theory: for a flexible footing on a homogeneous half-space Si = q B (1 - v^2) If / E, where If is a shape-rigidity influence factor (about 0.56 circular and 0.82 strip flexible at centre; rigid footings take about 0.8 of the flexible value). The practical difficulty is the soil modulus E, obtained from triaxial or pressuremeter tests, or estimated as 500-1000 times N (kPa) in sand. Consolidation settlement uses the oedometer: for a normally consolidated clay layer of thickness H, Sc = [Cc H/(1 + e0)] log10[(sigma0 + dsigma)/sigma0], summing layer by layer through the stressed zone; overconsolidated clay uses the cr (swell-recompression) index until sigma p is exceeded.",
              "Allowable settlement, not allowable stress, usually sizes footings. IS 1904 caps total settlement at roughly 50-65 mm for isolated footings and 75-125 mm for rafts, and - more importantly for structures - the angular distortion between adjacent supports below about 1/500 for framed buildings and 1/300 for simple load-bearing walls; beyond these, cracking and architectural damage begin. Differential settlement is reduced by footings of equal settlement (choosing sizes so each settles alike), by continuity in rafts and by avoiding mixed foundation types on one building. A settlement estimate must therefore end with a number compared with these limits, and a note on the rate - rapid sand settlement versus decade-long clay consolidation that may need the preloading of Unit V.",
            ],
            bullets: [
              "Total = immediate (elastic distortion) + primary consolidation (expulsion of water) + secondary creep.",
              "Immediate: Si = q B (1 - v^2) If / E; rigid footings take about 0.8 x the flexible-centre value; sands settle essentially immediately.",
              "Consolidation: Sc = [Cc H/(1 + e0)] log10[(sigma0 + dsigma)/sigma0] per layer of normally consolidated clay.",
              "Overconsolidated clay: use the recompression index cr until past pressure sigma p is exceeded, then Cc.",
              "IS 1904 working limits: total about 50-65 mm (isolated) and 75-125 mm (raft); angular distortion below about 1/500 (framed), 1/300 (load-bearing).",
            ],
            codeExample: {
              language: "python",
              caption: "Consolidation settlement of a 4 m normally consolidated clay layer under new stress.",
              code: `import math

# Primary consolidation settlement (NC clay)
Cc, e0 = 0.30, 0.90        # compression index, initial void ratio
H = 4.0                    # layer thickness (m)
sigma0 = 90.0              # existing effective stress at mid-depth (kPa)
dsigma = 45.0              # stress increase from the footing (kPa)

Sc = Cc / (1 + e0) * H * math.log10((sigma0 + dsigma) / sigma0)
print(f"consolidation settlement = {Sc * 1000:.0f} mm")

# Immediate settlement of the footing on sand above (elastic)
q, B, v, E = 200.0, 2.0, 0.30, 12000.0   # kPa, m, Poisson ratio, kPa
If_rigid = 0.82 * 0.8                    # strip factor scaled for rigidity
Si = q * B * (1 - v ** 2) * If_rigid / E
print(f"immediate settlement = {Si * 1000:.1f} mm")
print(f"check: Si+Sc vs IS 1904 limit 50-65 mm (isolated footing)")`,
            },
            diagram: {
              kind: "flow",
              title: "A settlement estimate from loads to limits",
              caption: "The sequence for any settlement numerical - end by comparing with IS 1904 limits.",
              steps: [
                { label: "Stress increase dsigma", note: "Boussinesq or 2:1 spread under the footing" },
                { label: "Immediate Si", note: "elastic formula; governs sands" },
                { label: "Consolidation Sc", note: "oedometer Cc, layer by layer" },
                { label: "Add secondary if soft clay", note: "creep term Ss" },
                { label: "Total S vs IS 1904 limits", note: "and angular distortion below about 1/500" },
              ],
            },
            callout: {
              type: "warning",
              title: "Units and stress signs",
              body: "Consolidation numericals die on two slips: using total stress instead of effective stress in the log term (the ratio must be of effective stresses), and forgetting that dsigma is the INCREASE at the layer mid-depth, not the footing contact pressure. Also keep the log base 10 - a natural log silently triples the answer.",
            },
            keyTerms: [
              { term: "Immediate settlement", definition: "The elastic distortion settlement occurring almost at once on load application, without volume change." },
              { term: "Consolidation settlement", definition: "Settlement from the gradual expulsion of pore water and compression of the clay skeleton under sustained load." },
              { term: "Angular distortion", definition: "Differential settlement divided by the span between supports; kept below about 1/500 for framed structures." },
            ],
            examQuestions: [
              {
                q: "What are the components of total settlement of a foundation? Derive the expression for primary consolidation settlement of a normally consolidated clay layer and explain how immediate settlement is computed, closing with IS 1904 permissible values.",
                marks: 7,
                outline: [
                  "Components: immediate (elastic), primary consolidation, secondary creep; which soil dominates which.",
                  "Mechanism of consolidation: excess pore pressure dissipates, effective stress rises, void ratio falls.",
                  "From the e-log sigma curve: dH/H = de/(1 + e0) and de = Cc log10[(sigma0 + dsigma)/sigma0].",
                  "Result: Sc = [Cc H/(1 + e0)] log10[(sigma0 + dsigma)/sigma0]; sum over sublayers.",
                  "Immediate settlement: Si = q B (1 - v^2) If / E, rigid factor about 0.8 of flexible.",
                  "OC clay note: use cr up to sigma p, then Cc.",
                  "IS 1904: total about 50-65 mm isolated, 75-125 mm raft; angular distortion below about 1/500.",
                ],
              },
              { q: "Why is immediate settlement the controlling check for footings on sand?", marks: 3 },
              { q: "Define angular distortion and give its permissible value for framed buildings.", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Pile Foundations",
      summary:
        "When the good stratum lies deep: pile types and how they are chosen, the static formula of IS 2911 computing capacity from soil strength, the dynamic Hiley formula reading capacity from driving records, the pile load test that verifies it, and the group effects - efficiency and negative skin friction - that make a pile group behave differently from its piles.",
      chapter: {
        number: "03",
        title: "Pile Foundations",
        intro:
          "Unit III takes the foundation deep. It classifies piles by function, material and installation and sets out the selection logic, then computes single-pile capacity twice - statically from soil strength per IS 2911 and dynamically from the Hiley driving equation - verifies it with the pile load test, and finally scales up to the pile group, where efficiency formulae and negative skin friction decide the real capacity.",
        inOneBreath:
          "Piles are end-bearing, friction, compaction, anchor or batter piles in timber, steel, concrete or composite form, driven or bored per IS 2911; the static formula splits capacity into end bearing - 9 cu Ap in clay, Ap sigma'v Nq in sand - plus shaft friction - alpha cu per unit area in clay, K sigma'v tan delta in sand - divided by a factor of 2.5-3; the dynamic Hiley formula balances hammer energy against penetration, elastic compressions and impact losses - Qu = eta W H/(s + c/2) times the impact factor - with the Engineering News formula as its crude cousin; the pile load test loads to 1.5-2 times design and accepts about 12 mm at working load; group efficiency per Converse-Labarre falls with closer spacing and is checked for block failure; and negative skin friction from consolidating fill adds downdrag that must be added to the structural load.",
        sections: [
          {
            number: "3.1",
            title: "Pile types and selection (IS 2911)",
            body: [
              "A pile transfers load through soft upper strata to a competent bearing stratum (end bearing), or carries it in friction along its shaft through the soil mass (friction pile), or does both in proportion to where it rests. Around these two functions gather the special duties: compaction piles that densify sand rather than carry load, tension or anchor piles resisting uplift, fender and dolphin piles absorbing berthing impact at docks, and batter piles inclined to take large horizontal loads. The classification is functional first because it is the load path, not the material, that the designer chooses.",
              "By material: timber piles - cheap, limited in length, decay above the water table unless treated; precast and prestressed concrete - quality-controlled, durable, but heavy to handle and needs cutting or extension on site; driven cast-in-situ concrete - a shell driven and filled, combining driving with cast concrete; bored cast-in-situ - augered and concreted, vibration-free for urban sites, with under-reamed bulbs multiplying shaft friction in expansive soils; steel H and pipe sections - long, light, easy to splice, but corrode and may need concrete filling. Composite piles join materials - a concrete upper on a timber lower, for instance.",
              "Selection weighs soil profile, load, water table, site constraints and cost. The stratum picture decides function - firm stratum at 10-20 m means end bearing; a deep soft clay with no base means friction. Neighbouring buildings, noise and vibration rules push towards bored piles over driven; marine and scour conditions push towards long steel or thick concrete. IS 2911 (Parts 1-4) governs design and construction in India, and it is the reference to quote in any pile answer, whether the question is classification, selection or the formulas that follow.",
            ],
            bullets: [
              "Functional types: end bearing (load to firm stratum), friction (shaft resistance through soft mass), plus compaction, tension/anchor, fender and batter piles.",
              "Materials: timber (cheap, short, rot risk), steel (long, splicable, corrosion), concrete (driven precast or bored cast-in-situ), composite combinations.",
              "Bored piles suit urban sites: no vibration, any length, under-reamed bulbs for expansive soils.",
              "Driven piles compact sand while installing - good in loose granular soil, risky next to sensitive structures.",
              "Selection inputs: soil profile (function), load, water table, noise and vibration limits, access, cost; IS 2911 governs.",
            ],
            table: {
              caption: "Pile selection guide.",
              headers: ["Type", "Soil/need it answers", "Watch out for"],
              rows: [
                ["Driven precast concrete", "Firm bearing stratum at 10-25 m", "Handling stresses, splicing, noise and vibration"],
                ["Bored cast-in-situ", "Urban sites, any length, large diameters", "Slurry stability, base cleanliness, neighbour settlement"],
                ["Under-reamed (bored)", "Expansive soils, moderate loads", "Bulb collapse in collapsing strata"],
                ["Steel H/pipe", "Very long piles, scour zones, boulders", "Corrosion; H piles may plug in soft clay"],
                ["Timber", "Light loads below permanent water table", "Decay above water table; length limited"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "End bearing versus friction pile",
              caption: "The two load paths of Unit III - most real piles are a blend of both.",
              left: {
                heading: "End bearing pile",
                items: [
                  "Tip rests on rock or dense sand/gravel",
                  "Load dumps at the base: Qb dominates",
                  "Capacity = Ap x base resistance (9 cu or sigma'v Nq)",
                  "Settlement is small and quick",
                  "Depth dictated by the bearing stratum",
                ],
              },
              right: {
                heading: "Friction pile",
                items: [
                  "No competent stratum within reach - floats in clay",
                  "Load sheds along the shaft: Qs dominates",
                  "Capacity = shaft area x alpha cu (adhesion)",
                  "Settlement larger, consolidation-linked",
                  "Length chosen from capacity requirement",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Answer skeleton",
              body: "For 'classify piles' questions, use the three-way grid: function (end bearing, friction, compaction, tension, fender, batter), material (timber, concrete, steel, composite), and installation (driven, bored, jacked). Five lines, three columns - every classification mark is in that grid, and closing with IS 2911 adds the finishing touch.",
            },
            keyTerms: [
              { term: "End bearing pile", definition: "A pile carrying load through its tip onto a firm stratum of rock or dense granular soil." },
              { term: "Friction pile", definition: "A pile carrying load mainly through shear resistance developed along its shaft in the surrounding soil." },
              { term: "Under-reamed pile", definition: "A bored pile with one or more enlarged bulbs that anchor it against movement in expansive soils." },
            ],
            examQuestions: [
              {
                q: "Classify piles according to function, material and mode of installation with examples. Explain the factors that govern the selection of pile type for a site and quote the governing Indian standard.",
                marks: 7,
                outline: [
                  "Function: end bearing, friction, compaction, tension/anchor, fender/dolphin, batter.",
                  "Material: timber, precast/prestressed concrete, driven cast-in-situ, bored cast-in-situ, steel H/pipe, composite.",
                  "Installation: driven (displacement), bored (replacement), jacked.",
                  "Under-reamed piles for expansive soils; IS 2911 Parts 1-4 govern.",
                  "Selection: soil profile fixes function; load fixes diameter/number.",
                  "Site constraints: vibration and noise favour bored; access and water table matter.",
                  "Close with cost comparison and durability (corrosion, decay).",
                ],
              },
              { q: "Differentiate between a displacement pile and a replacement pile.", marks: 3 },
              { q: "Where are batter piles used?", marks: 2 },
            ],
          },
          {
            number: "3.2",
            title: "Static formula: capacity from soil strength (IS 2911)",
            body: [
              "The static formula computes pile capacity from the soil's measured strength: the ultimate load Qu = Qb + Qs, point resistance plus shaft friction, and the allowable load is Qu divided by a factor of safety of 2.5-3 per IS 2911. In clays the point term is Qb = 9 cu Ap (bearing capacity factor Nc = 9 at depth), and the shaft term is Qs = alpha cu As summed over layers - alpha the adhesion factor, about 0.45-0.6 for soft-to-firm clay driven piles and lower for stiff clay where a smear zone softens the interface; As is the shaft perimeter area.",
              "In sands everything is effective stress. The point term is Qb = Ap sigma'v Nq, with Nq from phi at the tip; because Nq grows explosively with depth, practice caps the unit point resistance in sand at about 1000-1100 kPa for driven piles. The shaft term is Qs = sum of K sigma'v tan(delta) dz over the perimeter: K the lateral earth pressure coefficient (about 1-2 for driven displacement piles, about 0.5-1 for bored), sigma'v the vertical effective stress, and delta the pile-soil friction angle - roughly two-thirds to the full phi for steel and concrete against sand. Bored piles in sand also lose a little base quality from loosening at the auger tip.",
              "The exam pattern is a two-term computation with a table of parameters. Typical: a 600 mm bored pile, 12 m long, through soft clay with cu = 55 kPa - Qs = alpha cu x pi D L, Qb = 9 cu Ap, sum, divide by 2.5. The method's honesty is its weakness: it assumes the soil parameters are right. cu from UU tests and phi from SPT correlations carry scatter of 20-30 percent, so the static estimate is always paired with the dynamic check of the next section and verified by the pile load test of section 3.4. IS 2911 also requires capacity checks at each load level for negative skin friction and group action - the corrections of section 3.5.",
            ],
            bullets: [
              "Static formula: Qu = Qb + Qs; allowable = Qu / (2.5 to 3) per IS 2911.",
              "Clay: Qb = 9 cu Ap (Nc = 9 at depth); Qs = alpha cu As with alpha about 0.45-0.6 soft/firm, lower for stiff clay.",
              "Sand: Qb = Ap sigma'v Nq with the unit point resistance capped near 1000-1100 kPa in practice.",
              "Sand shaft: Qs = sum K sigma'v tan(delta) dz; K about 1-2 driven, 0.5-1 bored; delta about 0.7-1.0 x phi.",
              "The estimate inherits parameter scatter - always verify with the dynamic check and the pile load test.",
            ],
            codeExample: {
              language: "python",
              caption: "Static capacity of a 600 mm bored pile, 12 m in clay (alpha method).",
              code: `import math

# Static formula, bored pile in clay
D = 0.6                     # pile diameter (m)
L = 12.0                    # embedded length (m)
cu = 55.0                   # average undrained cohesion along shaft (kPa)
alpha = 0.45                # adhesion factor for soft-to-firm clay
FOS = 2.5

Ap = math.pi * D ** 2 / 4   # tip area (m2)
As = math.pi * D * L        # shaft area (m2)

Qb = 9.0 * cu * Ap          # end bearing, Nc = 9 (kN)
Qs = alpha * cu * As        # shaft friction (kN)
Qu = Qb + Qs
print(f"Qb = {Qb:.0f} kN, Qs = {Qs:.0f} kN")
print(f"ultimate Qu = {Qu:.0f} kN")
print(f"allowable = {Qu / FOS:.0f} kN at FS {FOS}")
print(f"Qs carries {100 * Qs / Qu:.0f} percent -> behaves as friction pile")`,
            },
            diagram: {
              kind: "flow",
              title: "Static capacity computation route",
              caption: "Two terms, one factor of safety - the sequence for every static formula numerical.",
              steps: [
                { label: "Soil profile and parameters", note: "cu per layer, or phi and sigma'v" },
                { label: "Point resistance Qb", note: "9 cu Ap in clay; Ap sigma'v Nq in sand" },
                { label: "Shaft friction Qs", note: "alpha cu As or K sigma'v tan(delta) As" },
                { label: "Sum: Qu = Qb + Qs", note: "layer-by-layer for layered soil" },
                { label: "Allowable = Qu / 2.5-3", note: "IS 2911; check NSF and group action too" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the four mini-formulas as pairs - clay: 9 cu Ap and alpha cu As; sand: Ap sigma'v Nq and K sigma'v tan(delta) As. Half the static-formula marks are lost by mixing a clay shaft formula with a sand point formula, so write the soil type above each term before substituting.",
            },
            keyTerms: [
              { term: "Static formula", definition: "A pile capacity computation from measured soil strength - point resistance plus shaft friction - without reference to driving behaviour." },
              { term: "Adhesion factor alpha", definition: "The ratio of mobilised pile-soak adhesion to undrained cohesion of clay along a pile shaft." },
              { term: "Shaft resistance (skin friction)", definition: "The shear force developed between pile surface and surrounding soil along the embedded length." },
            ],
            examQuestions: [
              {
                q: "Explain the static method of determining the ultimate load capacity of a pile. Write the point and shaft expressions for piles in clay and in sand, define every symbol, and compute the allowable capacity of a 600 mm diameter bored pile, 12 m long, in clay with cu = 55 kPa and alpha = 0.45, taking FS = 2.5.",
                marks: 7,
                outline: [
                  "Principle: Qu = Qb + Qs; allowable = Qu/FS (2.5-3 per IS 2911).",
                  "Clay point: Qb = 9 cu Ap, Nc = 9 below a critical depth.",
                  "Clay shaft: Qs = alpha cu As, alpha about 0.45-0.6 for soft-to-firm clay.",
                  "Compute Ap = pi(0.6)^2/4 = 0.283 m2, As = pi x 0.6 x 12 = 22.6 m2.",
                  "Qb = 9 x 55 x 0.283 = 140 kN; Qs = 0.45 x 55 x 22.6 = 560 kN.",
                  "Qu = 700 kN; allowable = 700/2.5 = 280 kN.",
                  "Note Qs dominates - friction pile behaviour; mention sand formulas for contrast.",
                ],
              },
              { q: "Why is the unit point resistance of piles in sand capped in practice?", marks: 3 },
              { q: "State the typical range of K for driven and bored piles in sand.", marks: 2 },
            ],
          },
          {
            number: "3.3",
            title: "Dynamic formulae: Hiley and Engineering News",
            body: [
              "Dynamic formulae read pile capacity from the driving record: if a hammer of weight W falling through H drives the pile a permanent set s per blow, then the energy that went in equals the work that went down. The complete Hiley formula balances the books: Qu = [eta W H/(s + 0.5(c1 + c2 + c3))] x [(W + e^2 R)/(W + R)], where eta is the hammer efficiency, c1, c2, c3 the temporary elastic compressions of the cushion, the pile and the ground-quake, e the coefficient of restitution, and R the driving resistance being solved for. The impact factor in the second bracket accounts for energy lost at hammer-pile impact; since R appears on both sides, the formula is solved by iteration.",
              "The Engineering News formula is the crude ancestor: Qu = W H/(s + c), with c = 25 mm for drop hammers in metric units (1 inch in the original), and a factor of safety of 6, acknowledging its roughness. Both formulae convert the observed final set into capacity: drive the pile, note the penetration for the last 10-20 blows, average to get s per blow, and substitute. A small set means high resistance - the pile is nearly refusing; a large set warns of a soft or damaged tip.",
              "Dynamic formulae are attractive because they are free - the data arrives with driving - but they ignore the soil's rate effects and pore pressure response entirely, so they misjudge capacity in clay (where rapid driving builds pore pressure and the formula reads a capacity that later collapses) and in loose saturated sand (where driving may loosen, then the formula over-reads). They apply only to driven piles, never bored, and are treated as construction-stage checks on the static design, with the wave equation analysis (CAPWAP, PDA) as the modern replacement. The exam nonetheless expects the Hiley formula stated, every symbol defined and a small numerical worked.",
            ],
            bullets: [
              "Hiley: Qu = [eta W H/(s + 0.5(c1 + c2 + c3))] x [(W + e^2 R)/(W + R)] - energy in equals work plus losses.",
              "Terms: eta hammer efficiency, s permanent set per blow, c1/c2/c3 temporary compressions of cushion, pile, ground.",
              "Iterative: R appears on both sides - assume R, compute Qu, repeat until they agree.",
              "Engineering News: Qu = W H/(s + 25 mm) with a factor of safety of 6 for drop hammers.",
              "Valid only for driven piles, as a cross-check: they ignore pore pressure and rate effects - clay capacity is misread.",
            ],
            codeExample: {
              language: "python",
              caption: "Hiley formula solved by iteration for a driven concrete pile.",
              code: `# Hiley formula - R appears on both sides, so iterate
W, H, eta = 35.0, 1.0, 0.85    # ram weight (kN), fall (m), efficiency
s = 8.0                         # final set per blow (mm)
c_total = 12.0                  # c1 + c2 + c3, elastic compressions (mm)
e = 0.40                        # coefficient of restitution
R = 500.0                       # first guess of driving resistance (kN)

for _ in range(10):
    impact = (W + e * e * R) / (W + R)
    Qu = eta * W * H / ((s + 0.5 * c_total) / 1000.0) * impact
    if abs(Qu - R) < 1.0:
        break
    R = Qu

print(f"impact factor = {impact:.3f}")
print(f"converged Qu = {Qu:.0f} kN")
print(f"allowable at FS 2.5 = {Qu / 2.5:.0f} kN")

# Engineering News (drop hammer, s and c in mm) for comparison
ENR = W * (H * 1000.0) / (s + 25.0)
print(f"ENR ultimate = {ENR:.0f} kN (FS 6 -> {ENR / 6:.0f} kN)")`,
            },
            diagram: {
              kind: "pipeline",
              title: "Where the hammer's energy goes",
              caption: "The Hiley formula is an energy ledger - every loss has a symbol the examiner can ask you to define.",
              stages: [
                { label: "Energy input", note: "eta W H from the ram" },
                { label: "Loss at impact", note: "impact factor (W + e^2 R)/(W + R)" },
                { label: "Elastic compressions", note: "c1 cushion, c2 pile, c3 ground - recovered" },
                { label: "Permanent penetration", note: "the set s per blow - the only useful work" },
                { label: "Invert to capacity", note: "solve iteratively for R = Qu" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not design bored piles by Hiley",
              body: "The most common wrong answer in this topic: applying a dynamic formula to a bored cast-in-situ pile. There is no hammer, no set, and no driven soil displacement - the formula has no meaning. Use the static formula and confirm by pile load test; reserve Hiley for driven piles during driving as a QA check.",
            },
            keyTerms: [
              { term: "Set", definition: "The permanent penetration of a pile per hammer blow, measured over the last 10-20 blows of driving." },
              { term: "Temporary compression", definition: "The elastic shortening of cushion (c1), pile (c2) and ground quake (c3) that absorbs energy but produces no permanent penetration." },
              { term: "Hammer efficiency (eta)", definition: "The fraction of ram energy actually delivered to the pile after losses in the hammer system." },
            ],
            examQuestions: [
              {
                q: "State the Hiley formula for pile capacity, defining every symbol. Explain the physical meaning of the impact factor and the temporary compression terms, and why the formula is solved iteratively. Why are dynamic formulae unreliable in clay?",
                marks: 7,
                outline: [
                  "Write Hiley: Qu = [eta W H/(s + 0.5(c1 + c2 + c3))] x [(W + e^2 R)/(W + R)].",
                  "Define W, H, eta, s; c1 cushion, c2 pile, c3 ground compression; e restitution; R resistance.",
                  "Impact factor: energy lost at hammer-pile collision, e^2 R the rebound energy.",
                  "Iteration: R (the unknown capacity) sits inside the impact bracket - assume, compute, repeat.",
                  "Engineering News comparison: W H/(s + 25 mm) with FS 6.",
                  "Clay unreliability: rapid driving raises pore pressure, disturbing strength and misreading resistance.",
                  "Modern practice: wave equation and PDA testing; static formula remains the design basis.",
                ],
              },
              { q: "Define the 'set' of a pile and state how it is measured.", marks: 2 },
              { q: "Write the Engineering News formula and the factor of safety used with it.", marks: 3 },
            ],
          },
          {
            number: "3.4",
            title: "Pile load test and group efficiency",
            body: [
              "The pile load test is the court of appeal for pile capacity, standardised in IS 2911 Part 4. A test pile is loaded through a jack reacting against kentledge or anchor piles, in increments of about 25 percent of the design load up to working load and smaller steps beyond, each held until the settlement rate falls below about 0.02 mm per minute. The test is carried to one-and-a-half to two times the design load, or to failure; settlement is read on dial gauges at the pile head and plotted against load. Acceptance commonly requires no more than about 12 mm of settlement at working load and no plunge below 1.5 times working load.",
              "A pile group does not deliver n times the single-pile capacity. Group efficiency eta = Qgroup/(n Qi) captures the interference: in clay, closely spaced piles compete for the same soil between them, shear zones overlap and eta falls below 1; block failure - the group shearing as a solid block along its perimeter with the enclosed soil - must be checked when spacing is close. In sand, driven piles densify the surrounding sand so the group can slightly exceed n Qi. The Converse-Labarre formula, eta = 1 - (theta/90)[(n - 1)m + (m - 1)n]/(mn) with theta = arctan(d/s) in degrees, m rows and n piles per row, quantifies the loss with spacing.",
              "Spacing is therefore the design lever. IS 2911 recommends a minimum centre-to-centre spacing of about 2.5-3.5 pile diameters - smaller for end-bearing piles, larger for friction piles and under-reamed piles (which need clearance for the bulbs). The group's settlement is another group effect: a group loads a much deeper and wider soil volume than a single pile, so group settlement in clay may be several times the single-pile settlement and is computed by treating the group as an equivalent raft founded at two-thirds the pile depth. Capacity, block failure and settlement - all three checks complete the group design.",
            ],
            bullets: [
              "Load test per IS 2911 Part 4: kentledge or anchor reaction; increments of about 25 percent of design; hold to below 0.02 mm/min.",
              "Load to 1.5-2 times design or failure; acceptance is roughly 12 mm at working load and no plunge below 1.5 x working.",
              "Group efficiency eta = Qgroup/(n Qi): below 1 in clay (overlapping shear zones), at or above 1 in densified sand.",
              "Converse-Labarre: eta = 1 - (theta/90)[(n - 1)m + (m - 1)n]/(mn), theta = arctan(d/s) degrees - efficiency falls as spacing tightens.",
              "Block failure check: group + enclosed soil shears as one block along its perimeter and base.",
              "Group settlement: treat the group as an equivalent raft at two-thirds pile depth; group settlement far exceeds single-pile settlement in clay.",
            ],
            table: {
              caption: "Pile load test and group rules (IS 2911).",
              headers: ["Item", "Standard practice"],
              rows: [
                ["Load increments", "About 25 percent of design load up to working, then 10 percent steps"],
                ["Holding criterion", "Settlement rate below about 0.02 mm per minute"],
                ["Maximum test load", "1.5-2 times the design load, or failure"],
                ["Acceptance", "Settlement at working load not more than about 12 mm"],
                ["Minimum spacing", "About 2.5-3.5 diameters (larger for friction and under-reamed piles)"],
                ["Group capacity", "Lesser of n x single pile x efficiency and block failure value"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The load test loop",
              caption: "Each increment goes around this loop; the load-settlement curve is built point by point.",
              steps: [
                { label: "Apply load increment", note: "jack against kentledge/anchors" },
                { label: "Hold the load", note: "until rate below 0.02 mm/min" },
                { label: "Read dial gauges", note: "average settlement at pile head" },
                { label: "Plot the point", note: "load vs settlement curve" },
                { label: "Next increment or unload", note: "to 1.5-2 x design load" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two bankable questions live here: 'describe the pile load test with a sketch' - setup, increments, holding criterion, acceptance - and 'define group efficiency and state the Converse-Labarre formula'. Write eta = Qgroup/(n Qi) with the full Converse-Labarre expression and say what m, n and theta are; the formula itself carries the marks.",
            },
            keyTerms: [
              { term: "Group efficiency", definition: "The ratio of the observed group capacity to the sum of individual pile capacities, Qgroup/(n Qi)." },
              { term: "Block failure", definition: "Failure of a closely spaced pile group by shear along its perimeter and base together with the enclosed soil." },
              { term: "Kentledge", definition: "Dead-weight reaction used to jack a test pile, monitored by load cell and gauges." },
            ],
            examQuestions: [
              {
                q: "Describe the pile load test per IS 2911 with a sketch of the loading arrangement. State the loading schedule and acceptance criteria. Define group efficiency, write the Converse-Labarre formula, and explain why closely spaced pile groups in clay fail by block action.",
                marks: 7,
                outline: [
                  "Sketch: test pile, jack, kentledge/anchor reaction, reference beam, dial gauges.",
                  "Schedule: increments of about 25 percent of design to working load, then smaller steps to 1.5-2 x design.",
                  "Holding: each increment until settlement rate below about 0.02 mm/min.",
                  "Acceptance: about 12 mm at working load, no plunge at 1.5 x working.",
                  "Efficiency: eta = Qgroup/(n Qi); below 1 in clay, at/above 1 in densified sand.",
                  "Converse-Labarre: eta = 1 - (theta/90)[(n-1)m + (m-1)n]/(mn), theta = arctan(d/s).",
                  "Block failure: overlapping shear zones between close piles shear as one perimeter block - check it separately.",
                ],
              },
              { q: "State the minimum centre-to-centre spacing of piles per IS 2911 and why larger spacing is needed for friction piles.", marks: 3 },
              { q: "Why can a pile group in sand show efficiency greater than 1?", marks: 2 },
            ],
          },
          {
            number: "3.5",
            title: "Negative skin friction and group design essentials",
            body: [
              "Skin friction usually helps the pile; when the soil settles more than the pile it reverses and drags the pile down. This is negative skin friction (downdrag), and it appears whenever a new fill is placed over soft clay, or the water table is drawn down, or the pile itself is driven through settling fill: the consolidating soil hangs its weight on the shaft. The added force is not a reduction of capacity but an extra load on the pile - it must be added to the structural load when checking the pile and its settlement.",
              "The magnitude is computed over the settling layers above the neutral plane - the depth where pile and soil move equally, below which friction turns positive again. In soft clay the downdrag per unit area is taken as the adhesion against the remoulded soil, alpha c u; in granular fill, beta sigma'v. Typical figures: 10 m of granular fill over soft clay can add hundreds of kN of downdrag to a large-diameter pile - enough to consume the whole design margin if ignored. Tell-tale signs in practice: piles settling more than computed, or structures on new embankment fill showing continuous settlement.",
              "Countermeasures are standard. Bitumen or bitumen-slip coatings on the pile shaft in the settling zone cut the adhesion to a small residual value; removable sleeves or enlarged pre-bored holes with bentonite or loose granular backfill isolate the pile; driving after the fill has consolidated avoids the worst; or the downdrag is simply computed and added to the design load. Combined with the group checks of section 3.4 - efficiency, block failure, equivalent-raft settlement - negative skin friction completes the pile group design checklist the examiner expects in any 'design considerations' answer.",
            ],
            bullets: [
              "NSF arises when soil settles more than the pile: new fill on soft clay, groundwater drawdown, settling fill around driven piles.",
              "It is an added LOAD, not a lost capacity - add downdrag to the structural load when checking the pile.",
              "Compute over the settling layers above the neutral plane (depth where pile and soil movements are equal).",
              "Magnitude: adhesion to remoulded clay (alpha c u) or beta sigma'v in granular fill, on the shaft perimeter.",
              "Countermeasures: bitumen coating, sleeves/pre-bored isolation, drive after consolidation, or add downdrag to design load.",
              "Complete group design: capacity with efficiency, block failure, equivalent-raft settlement, and NSF check.",
            ],
            table: {
              caption: "Countermeasures against negative skin friction.",
              headers: ["Measure", "How it works", "Remark"],
              rows: [
                ["Bitumen slip coating", "Reduces shaft adhesion to a small residual value in the settling zone", "Standard and cheap; check hot-weather handling"],
                ["Sleeve / pre-bored isolation", "Enlarged hole filled with bentonite or loose sand separates pile from soil", "Best for large bored piles in thick fill"],
                ["Drive after consolidation", "Wait for the fill to finish settling before driving", "Needs time; not always available"],
                ["Add downdrag to design load", "Compute the drag force and design for the total", "Always done as the final check anyway"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "New fill over soft clay - handling downdrag",
              caption: "Four responses to the same field condition - two are engineering, two are hope.",
              start: "10 m of new highway embankment fill over 8 m of soft clay, piles to firm stratum",
              branches: [
                { label: "Estimate NSF and add to load", outcome: "Downdrag computed above the neutral plane and included in design - pile and settlement check out", good: true },
                { label: "Bitumen-coat the shaft", outcome: "Adhesion cut to a residual value; drag force drops by 80-90 percent", good: true },
                { label: "Ignore it - capacity was fine", outcome: "Pile settles with the consolidating fill; structure shows continuing settlement and cracking", good: false },
                { label: "Drive before placing fill", outcome: "Full fill settlement hangs on the shaft - downdrag actually maximised", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The most expensive oversight",
              body: "Negative skin friction is the classic pile-group failure story: piles designed to capacity, then an embankment built beside them, and the group settles for years. In the exam, the phrase to write is: 'NSF is an additional load transferred from the settling soil to the pile above the neutral plane, and it must be added to the design load.'",
            },
            keyTerms: [
              { term: "Negative skin friction", definition: "Downward drag force exerted on a pile shaft when the surrounding soil settles more than the pile." },
              { term: "Neutral plane", definition: "The depth at which pile and soil settlement are equal - above it friction is negative, below it positive." },
              { term: "Downdrag", definition: "The total drag load contributed by negative skin friction over the settling layers." },
            ],
            examQuestions: [
              {
                q: "What is negative skin friction? Explain the conditions that cause it, define the neutral plane, describe how the downdrag force is estimated, and list four measures used to reduce it.",
                marks: 7,
                outline: [
                  "Definition: downward shaft drag when soil settles more than the pile.",
                  "Causes: new fill over soft clay, groundwater lowering, settling fill, soft clay consolidation under load.",
                  "Neutral plane: depth of equal pile and soil movement; negative above, positive below.",
                  "Estimation: alpha c u on perimeter over settling layers (clay), beta sigma'v (fill); sum above neutral plane.",
                  "It is an added load - include with structural load in pile and settlement checks.",
                  "Measures: bitumen coating, sleeve/pre-bored isolation, delayed driving, compute and add.",
                  "Close with a field example: embankment fill over soft alluvium.",
                ],
              },
              { q: "Distinguish between positive and negative skin friction on a pile.", marks: 3 },
              { q: "State two conditions under which negative skin friction develops.", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Well and Caisson Foundations",
      summary:
        "The deep foundations of Indian bridges: the components of a well foundation, the shapes it takes and how one is chosen, the grip length it must develop below Lacey's maximum scour line, the sinking operations with their tilts and blows, and the caisson family - open, box and pneumatic - that carries bridge piers into deep water and difficult ground.",
      chapter: {
        number: "04",
        title: "Well and Caisson Foundations",
        intro:
          "Unit IV studies the massive foundations that carry bridge piers through water and scour into deep bearing. It assembles the well component by component, compares the standard shapes and their uses, derives the grip length from Lacey's scour relations, walks through the sinking operation and its troubles, and contrasts the open, box and pneumatic caissons that complete the family.",
        inOneBreath:
          "A well foundation is an open caisson sunk by dredging: a steel cutting edge and curb bite into the soil, the steining - the massive masonry or RCC wall - is cast in lifts, the dredge hole is grabbed out, and a bottom plug seals the founding stratum with tremie concrete; grip length below the maximum scour line is at least one-third of dsm where dsm = 1.34 (q squared over f) to the one-third and f = 1.76 root d50; sinking is controlled against tilt and shift, with blowing prevented by keeping the inside water level high; shapes run from circular through twin-D to double octagonal; box caissons are floated with closed bottoms onto prepared beds, and pneumatic caissons add compressed-air working chambers where men excavate dry - at the price of caisson disease below about 30-40 m of water head.",
        sections: [
          {
            number: "4.1",
            title: "Well foundation: components and their functions",
            body: [
              "A well foundation is a hollow caisson - open at top and bottom - sunk into the ground by dredging out the soil inside until a firm stratum is reached; it is the standard deep foundation for Indian bridge piers. Its parts, from bottom to top: the cutting edge, a steel shoe of hard edge angle fixed to the curb, which bites into the soil as the well sinks; the well curb, the wedge-shaped lowest ring of the steining that transfers the huge sinking load onto the cutting edge; and the steining, the main body wall - brick, stone masonry or RCC - which provides the dead weight for sinking and the structural strength afterwards, its thickness usually about one-eighth to one-tenth of the external diameter.",
              "Inside the steining is the dredge hole, the open well through which the dredger grabs soil to make the well sink. At founding level the bottom plug - a concrete seal placed by tremie under water - seals the base against soil and water ingress and spreads the bearing pressure; the dredge hole is then often filled with sand or water (or left partly empty) to tune stability, and a top plug of concrete caps it. Above all sits the well cap, an RCC slab that holds the well rigidly at the top and supports the pier. Each part is examinable in a labelled sketch - the question 'describe the components of a well foundation with a sketch' recurs almost every session.",
              "The load path explains every component. The pier load arrives on the well cap, spreads through the steining to the bottom plug, and passes into the bearing stratum over the full plan area - so the plug must be watertight and strong, and the steining must resist the enormous hoop and vertical stresses of sinking. The curb and cutting edge concentrate the sinking thrust into a narrow annulus for penetration through hard strata. Because the well is massive and hollow, it resists huge lateral flood forces, scour exposure and moments that would topple a pile group - which is precisely why major Indian bridges still rest on wells.",
            ],
            bullets: [
              "Cutting edge: steel shoe on the curb that bites into soil during sinking.",
              "Well curb: wedge-shaped bottom ring distributing sinking load onto the cutting edge.",
              "Steining: the main wall (masonry/RCC), thickness about 1/8-1/10 of external diameter - dead weight plus structural strength.",
              "Dredge hole: the hollow grabbed out for sinking; bottom plug (tremie concrete) seals the base; sand/water fill tunes stability.",
              "Top plug and well cap: concrete cap over the dredge hole, and an RCC slab holding the well and carrying the pier.",
            ],
            table: {
              caption: "Components of a well foundation and their functions.",
              headers: ["Component", "Material", "Function"],
              rows: [
                ["Cutting edge", "Steel edge angle", "Bites into the strata during sinking"],
                ["Well curb", "RCC, wedge section", "Transfers sinking load to the cutting edge"],
                ["Steining", "Brick/stone masonry or RCC", "Dead weight for sinking; structural shell afterwards"],
                ["Bottom plug", "Tremie concrete", "Watertight seal and bearing spread on founding stratum"],
                ["Top plug and well cap", "Concrete and RCC slab", "Caps the hole; receives and supports the pier"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A well foundation, top to bottom",
              caption: "Index 0 at the top - the labelled arrangement examiners expect in the sketch question.",
              layers: [
                { label: "Well cap (RCC slab)", note: "receives the pier load" },
                { label: "Top plug", note: "concrete cap over the dredge hole" },
                { label: "Steining", note: "masonry/RCC wall, about D/8 to D/10 thick" },
                { label: "Bottom plug", note: "tremie concrete seal on the founding stratum" },
                { label: "Well curb + cutting edge", note: "steel shoe that bites during sinking" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the well in section with all seven labels - cap, top plug, steining, dredge hole, bottom plug, curb, cutting edge - and write one line of function beside each. The steining thickness rule (about one-eighth to one-tenth of the external diameter) and the tremie-placed bottom plug are the two details that separate a full-mark sketch from an average one.",
            },
            keyTerms: [
              { term: "Steining", definition: "The main wall of a well foundation providing sinking weight and structural strength, about 1/8-1/10 of the diameter in thickness." },
              { term: "Well curb", definition: "The wedge-shaped lowest ring of the steining that carries the sinking load onto the steel cutting edge." },
              { term: "Dredge hole", definition: "The central hollow of a well through which soil is dredged out to sink it." },
            ],
            examQuestions: [
              {
                q: "Draw a neat labelled section of a well foundation and explain the function of each component. Why is the bottom plug placed by tremie, and why is the steining thickness kept at about one-eighth of the external diameter?",
                marks: 7,
                outline: [
                  "Section through: well cap, top plug, steining, dredge hole, bottom plug, curb, cutting edge.",
                  "Well cap: RCC slab holding the well and supporting the pier.",
                  "Steining: dead weight for sinking plus structural resistance to vertical and hoop stresses.",
                  "Curb and cutting edge: concentrate sinking thrust for penetration.",
                  "Bottom plug: seals base and spreads bearing; tremie because placement is under water.",
                  "Dredge hole: allows grabbing of soil for sinking; later filled/capped for stability.",
                  "Thickness about D/8-D/10 balances sinking weight demand and structural strength.",
                ],
              },
              { q: "State the function of the well curb.", marks: 2 },
              { q: "Why is a well foundation preferred over a pile group for major bridge piers in India?", marks: 3 },
            ],
          },
          {
            number: "4.2",
            title: "Well shapes and their choice",
            body: [
              "The shape of a well is chosen for the pier it must carry, the moments it must resist and the ease with which it sinks. The circular well is the most common: a single dredge hole, uniform sinking stresses on all sides, large moment resistance for its weight, and simple dredging; it is the default for single-line railway and road piers of moderate size. Its one weakness is a modest plan area - if the pier is wide or the longitudinal moments huge, a single circle becomes too large to sink economically.",
              "For bigger structures the shapes multiply. Twin circular wells - two circles joined by a concrete link - double the plan area for the same sinking convenience. The twin-D well has a single large dredge hole with semicircular ends and flat sides, giving maximum area and moment resistance per unit steining - used for heavy piers of major bridges - but its flat sides make dredging and tilt control harder. Double-D wells cast two D-sections monolithically with two dredge holes; single and double octagonal wells approximate circularity with flat shuttering faces, giving good sinking behaviour with easier formwork. Rectangular wells offer simple construction but poor sinking stability and are used only for small, shallow wells such as abutments.",
              "Selection rules of thumb follow from behaviour. Circular and octagonal shapes sink truest because the perimeter stresses are uniform; flat-sided shapes need careful dredging to avoid tilt. Larger dredge holes mean faster, cheaper sinking but thinner steining and reduced structural strength - the balance of the two is the art. The pier size fixes the minimum plan dimensions; the flood moments fix the depth of the steining; and the sinking equipment available fixes the largest grab that must fit the dredge hole. In the exam, five shapes with one use each and the two-line comparison of circular with twin-D is the expected full answer.",
            ],
            bullets: [
              "Circular: single dredge hole, uniform sinking stresses, easy dredging - the default for moderate piers.",
              "Twin circular: two circles joined by a link - doubles area while keeping circular sinking behaviour.",
              "Twin-D: one wide dredge hole, semicircular ends, flat sides - maximum area and moment resistance for heavy piers.",
              "Double-D and single/double octagonal: monolithic twin dredge holes, or flat-faced near-circular forms easier to shutter.",
              "Rectangular: simple but poor sinking stability - restricted to small abutment wells.",
            ],
            table: {
              caption: "Well shapes and typical use.",
              headers: ["Shape", "Dredge holes", "Typical use"],
              rows: [
                ["Circular", "1", "Single-line rail/road piers of moderate size - most common"],
                ["Twin circular", "2 (linked wells)", "Wider piers needing more plan area"],
                ["Twin D", "1 wide", "Heavy piers of major bridges, large moments"],
                ["Double D", "2 (monolithic)", "Very large piers; independent dredging of two holes"],
                ["Single/double octagonal", "1 or 2", "Large wells with easier flat shuttering"],
                ["Rectangular", "1", "Small, shallow wells - abutments"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Circular well versus twin-D well",
              caption: "The classic exam comparison - moderate load with easy sinking against heavy load with maximum section.",
              left: {
                heading: "Circular well",
                items: [
                  "One dredge hole, uniform perimeter stresses",
                  "Sinks truest of all shapes - tilt rare",
                  "Simple dredging and shuttering",
                  "Plan area limited for its diameter",
                  "Chosen for moderate pier loads",
                ],
              },
              right: {
                heading: "Twin-D well",
                items: [
                  "One wide dredge hole, semicircular ends",
                  "Maximum area and moment resistance per unit weight",
                  "Flat sides make dredging and plumb control harder",
                  "Longitudinal moments handled efficiently",
                  "Chosen for heavy piers of major bridges",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Answer skeleton",
              body: "For 'explain well shapes with sketches': draw plan shapes of circular, twin circular, twin D, double D and octagonal, and write use + one merit + one demerit for each. The circular-versus-twin-D comparison is the most asked detail - keep it ready as a two-panel answer.",
            },
            keyTerms: [
              { term: "Circular well", definition: "A single-dredge-hole well of circular plan, the most common shape for moderate bridge piers." },
              { term: "Twin-D well", definition: "A well with a single wide dredge hole, semicircular ends and flat sides, giving maximum section modulus for heavy piers." },
              { term: "Double-D well", definition: "Two D-shaped dredge sections cast monolithically, used for very large piers." },
            ],
            examQuestions: [
              {
                q: "Sketch the plan shapes of the common well foundations and explain the advantages and limitations of each. Why is the circular well most popular, and under what conditions is a twin-D well preferred?",
                marks: 7,
                outline: [
                  "Sketch plans: circular, twin circular, twin D, double D, octagonal, rectangular.",
                  "Circular: uniform sinking stresses, easy dredging; area limited - default for moderate piers.",
                  "Twin circular: doubled area with circular sinking behaviour; link design critical.",
                  "Twin-D: maximum area and moment resistance; flat sides complicate dredging and tilt control.",
                  "Double D / octagonal: very large piers; flat shuttering faces easier to build.",
                  "Rectangular: simple but unstable in sinking - small abutments only.",
                  "Conclude: choice from pier size, flood moments, sinking equipment and strata.",
                ],
              },
              { q: "State two merits and one demerit of a rectangular well.", marks: 3 },
              { q: "Which well shape gives the maximum moment resistance per unit weight?", marks: 2 },
            ],
          },
          {
            number: "4.3",
            title: "Grip length and stability of wells",
            body: [
              "A bridge well sits in a river bed that scours. Every flood digs the bed around the pier down to a maximum scour depth, and the well must keep enough embedded length below that scoured bed to resist the flood forces - this embedded length is the grip length. IRC practice sets the grip length at a minimum of one-third of the maximum scour depth below the maximum scour line. The founding level is therefore fixed: deepest anticipated scour level minus grip length, and never higher, whatever the stratum appears on the day of sinking.",
              "Lacey's regime relations quantify the scour. The silt factor f = 1.76 sqrt(d50 in mm) captures the bed material's resistance; the regime waterway P = 4.75 sqrt(Q); the discharge intensity q = Q/P; and the maximum scour depth below the highest flood level is dsm = 1.34 (q^2/f)^(1/3) for a straight reach - increased by a factor of about 1.27 at bends and roughly 2.0 at the nose of guide banks, where curvature concentrates flow. Thus a well design begins with hydrology, not soil: fix HFL and design discharge, compute q and f, get dsm, then take grip = dsm/3 and fix the founding level.",
              "Stability is then checked as a whole. The well - a massive rigid body embedded in the river bed - must resist the worst combination of horizontal flood force, wind, water current, braking forces of vehicles or trains on the bridge, and seismic effects, treated by statics or as an embedded cantilever with soil reactions on the steining. Checks include the extreme fibre pressures on the base under the most eccentric load combination, sliding, and the stability of the surrounding soil under the passive mobilised pressures. Because the well is huge, the checks are usually satisfied by weight - which is exactly why the steining is designed thick and the dredge hole filled or capped to add ballast.",
            ],
            bullets: [
              "Grip length: the embedded depth of the well below the maximum scour line - at least one-third of dsm per IRC practice.",
              "Silt factor f = 1.76 sqrt(d50 in mm); regime width P = 4.75 sqrt(Q); intensity q = Q/P.",
              "Maximum scour below HFL: dsm = 1.34 (q^2/f)^(1/3) on a straight reach; about 1.27 x at bends, up to about 2 x at guide-bank noses.",
              "Founding level = maximum scour level minus grip length - never founded above it whatever the stratum looks like.",
              "Stability checks: horizontal flood, current, wind, braking and seismic forces; base pressures, sliding, and soil reaction limits.",
            ],
            table: {
              caption: "The Lacey-IRC design chain for founding level.",
              headers: ["Step", "Relation", "Output"],
              rows: [
                ["Design flood", "HFL and design discharge Q fixed from hydrology", "design flood data"],
                ["Silt factor", "f = 1.76 sqrt(d50 mm)", "bed resistance number"],
                ["Regime width", "P = 4.75 sqrt(Q)", "waterway, then q = Q/P"],
                ["Max scour depth", "dsm = 1.34 (q^2/f)^(1/3) below HFL", "scour line (x 1.27-2.0 near bends/noses)"],
                ["Grip length", "grip = dsm/3 minimum", "founding level fixed below scour line"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From flood hydrology to founding level",
              caption: "A well is designed from the river down: hydrology fixes scour, scour fixes grip, grip fixes the founding level.",
              steps: [
                { label: "Design discharge Q and HFL", note: "from hydrology, with bridge waterway" },
                { label: "Silt factor f", note: "1.76 sqrt(d50 mm) from bed sampling" },
                { label: "Discharge intensity q = Q/P", note: "P = 4.75 sqrt(Q) or constrained waterway" },
                { label: "Max scour dsm = 1.34 (q^2/f)^(1/3)", note: "raise near bends and guide banks" },
                { label: "Grip = dsm/3 below scour line", note: "fix founding level; then stability checks" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The numerical every paper loves: given Q, P and d50, compute f, q, dsm and the grip length. Write f = 1.76 sqrt(d50), dsm = 1.34 (q^2/f)^(1/3), grip = dsm/3, each on its own line with units, and state the IRC one-third rule in words. Depth of founding = grip below maximum scour level is the sentence that closes it.",
            },
            keyTerms: [
              { term: "Grip length", definition: "The depth of well foundation below the maximum scour line, at least one-third of the maximum scour depth." },
              { term: "Silt factor (Lacey)", definition: "f = 1.76 sqrt(d50 in mm), the bed-material resistance measure in Lacey's regime relations." },
              { term: "Maximum scour depth", definition: "The deepest anticipated river bed lowering in flood, dsm = 1.34 (q^2/f)^(1/3) below HFL on a straight reach." },
            ],
            examQuestions: [
              {
                q: "Explain the terms silt factor, maximum scour depth and grip length. Derive or state Lacey's relation for maximum scour depth and work out the grip length and founding level for a bridge with Q = 1000 cumecs, waterway P = 100 m and d50 = 0.5 mm.",
                marks: 7,
                outline: [
                  "Silt factor f = 1.76 sqrt(d50 mm); with d50 = 0.5, f = 1.24.",
                  "Discharge intensity q = Q/P = 1000/100 = 10 m3/s per m.",
                  "Max scour dsm = 1.34 (q^2/f)^(1/3) = 1.34 (100/1.24)^(1/3) = 1.34 x 4.33 = 5.8 m below HFL.",
                  "Grip length = dsm/3 = about 1.9 m, say 2 m minimum below maximum scour level.",
                  "Founding level = scour level minus grip; state the IRC one-third rule.",
                  "Note increases: about 1.27 x at bends, about 2 x at guide-bank noses.",
                  "Close with the stability checks the grip must support: flood, current, wind, braking, seismic.",
                ],
              },
              { q: "Define grip length and state the IRC minimum.", marks: 2 },
              { q: "Write Lacey's silt factor formula and the regime width relation.", marks: 3 },
            ],
          },
          {
            number: "4.4",
            title: "Sinking of wells: operations, tilts and blows",
            body: [
              "Wells are sunk where they are built. On land or in shallow water an artificial island - a sand island about 1.5 m proud of water and larger than the well by a working margin - is raised, the cutting edge and curb are assembled on a sand bed, and the first lift of steining is cast. When it has cured and gained enough strength, dredging begins inside with a grab operated from a gantry or crane: as soil is removed, the well sinks by its own self-weight, and further lifts of steining are cast in succession - usually 1.5-3 m each - with careful checking of level and plumb at every stage.",
              "Two hazards dominate sinking. Blowing (or blow): in permeable sand below water, if the water level inside the dredge hole falls below the outside river level, the head difference makes the sand at the bottom boil up into the well - dragging in bed material, loosening the founding stratum and sometimes causing sudden settlement. Prevention is constant: keep the inside water level higher than outside, dredge gently near founding level, and add water as fast as it drains. Sudden set - the well dropping abruptly through a soft layer or an obstruction giving way - is countered by careful dredging, partial kentledge and never casting too great a lift at once.",
              "Tilt and shift are the geometry killers: a tilt of more than about 1 in 100 (or a shift beyond about 150 mm) is normally treated as unacceptable, and IRC rules limit it further for bridges. Causes are unequal dredging, obstruction on one side, uneven strata and eccentric casting. Remedies follow the causes: eccentric dredging on the high side, water jetting along the outside on the high side to reduce skin friction, eccentric kentledge or pulling the well with winches, and - if the tilt is severe - inserting a curb extension or even building a new tilt-correction kerb. Sinking ends at the founding level of section 4.3: the bottom plug is laid by tremie, the hole filled or capped, and the well cap cast - the well now a pier foundation for its life.",
            ],
            bullets: [
              "Start: artificial island (sand, about 1.5 m above water, wider than the well) or dewatered pit; curb and cutting edge assembled on a sand bed.",
              "Steining cast in lifts of about 1.5-3 m; dredging by grab between lifts; well sinks under self-weight, aided by kentledge if needed.",
              "Blowing: sand boils in when the inside water level drops below outside - keep inside level high, dredge gently near founding level.",
              "Sudden set: abrupt drop through soft strata - dredge symmetrically, add weight gradually.",
              "Tilt beyond about 1 in 100 and shift beyond about 150 mm are unacceptable - watch level and plumb every lift.",
              "Tilt remedies: eccentric dredging, outside jetting on the high side, eccentric kentledge, winch pulling; close with bottom plug by tremie.",
            ],
            table: {
              caption: "Sinking troubles and their remedies.",
              headers: ["Trouble", "Cause", "Remedy"],
              rows: [
                ["Tilt", "Unequal dredging, obstruction, uneven strata", "Eccentric dredging on high side, jetting, eccentric kentledge"],
                ["Shift", "Lateral drift during sinking", "Winch pull, eccentric dredging to steer back"],
                ["Blowing", "Inside water level lower than outside", "Keep inside water topped up; dredge gently at base"],
                ["Sudden set", "Soft layer or obstruction giving way", "Symmetric dredging, gradual weight, small steining lifts"],
                ["Excessive skin friction", "Long steining in stiff strata", "Kentledge on top, outside water jetting"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The well sinking loop",
              caption: "Sinking is this loop repeated until the well reaches founding level - every circuit ends with a tilt check.",
              steps: [
                { label: "Cast next steining lift", note: "1.5-3 m, after curing checks" },
                { label: "Dredge inside with grab", note: "symmetrically, gently near base" },
                { label: "Well sinks under self weight", note: "kentledge added if friction stalls it" },
                { label: "Check level, plumb and shift", note: "tilt limit about 1 in 100" },
                { label: "Correct tilt if needed", note: "eccentric dredge, jet, kentledge" },
              ],
            },
            callout: {
              type: "warning",
              title: "Blowing is preventable",
              body: "The blow is entirely a head-difference problem: water seeks equal level, and the sand goes with it. The exam sentence is: 'the water level inside the dredge hole must always be kept higher than the outside water level so that an inward hydraulic gradient - which would loosen the founding stratum by quicksand action - can never develop.'",
            },
            keyTerms: [
              { term: "Artificial island", definition: "A sand platform built above water on which a well is assembled and sunk in shallow depths." },
              { term: "Tilt", definition: "The out-of-plumb deviation of a sinking well, usually limited to about 1 in 100." },
              { term: "Blowing", definition: "Sudden inward boiling of sand and water at a well base caused by an adverse head difference between outside and inside." },
            ],
            examQuestions: [
              {
                q: "Describe the procedure of sinking a well foundation. Explain the causes and prevention of blowing, and describe any three methods of rectifying tilt with the usual permissible limits.",
                marks: 7,
                outline: [
                  "Setup: artificial island or dewatered pit; curb and cutting edge on a sand bed.",
                  "Steining cast in lifts of 1.5-3 m; grab dredging inside; sinking under self weight.",
                  "Blowing: head difference causes sand boil at base - keep inside water level above outside.",
                  "Further prevention: dredge gently near founding level, add water continuously.",
                  "Tilt limits: about 1 in 100 tilt and 150 mm shift; check every lift.",
                  "Remedy 1: eccentric dredging on the higher side; remedy 2: outside jetting to cut friction.",
                  "Remedy 3: eccentric kentledge or winch pulling; end with bottom plug by tremie.",
                ],
              },
              { q: "What is an artificial island and when is it used?", marks: 2 },
              { q: "State the usual permissible tilt and shift for a sunk well.", marks: 3 },
            ],
          },
          {
            number: "4.5",
            title: "Caissons: open, box and pneumatic; bridge piers",
            body: [
              "Caissons are the offshore cousins of the well. The open caisson - which a well foundation is - is open at top and bottom, sunk by dredging from the surface; it can go to any depth through most soils, but the base must be sealed underwater by tremie concrete, obstructions such as boulders are difficult to handle since no one can descend, and the founding stratum cannot be inspected. Box caissons invert the idea: closed bottom, open top, cast on land or in a dry dock, floated to site, and sunk by admitting water and placing ballast onto a previously levelled and prepared bed - quick and cheap, but limited to shallow water with a firm, level founding bed.",
              "The pneumatic caisson adds compressed air. Its bottom is a closed working chamber, open only through air locks and shafts; compressed air at just above the external water pressure keeps the chamber dry, and men excavate the soil by hand inside it - handling boulders, inspecting the founding stratum directly, and placing the concrete seal in the dry, which no open caisson allows. The costs: slow hand excavation, an elaborate lock system, and the physiological limit of compressed-air work - pressures beyond about 300-400 kPa (roughly 30-40 m of water head) invite decompression sickness, the caisson disease of the bends, so depth is limited and careful decompression staging is mandatory.",
              "Bridge piers in Indian practice rest almost always on well foundations - the open-caisson method adapted to land rivers - because rivers here are dredgeable and wells are cheap, massive and scour-resistant. Pneumatic caissons appear where boulders or timber obstruct dredging (railway bridges over Himalayan rivers), and box caissons where a firm bed lies in moderate water depth. The exam comparison - open versus box versus pneumatic on construction, inspection, depth limit and cost - is a fixture; the sketch of a pneumatic caisson with its air locks, shaft and working chamber is its half.",
            ],
            bullets: [
              "Open caisson: open top and bottom, sunk by dredging; unlimited depth; base sealed by tremie; no inspection, boulders difficult.",
              "Box caisson: closed bottom, open top; cast on land, floated and sunk by ballast onto a prepared level bed; shallow water only.",
              "Pneumatic caisson: compressed-air working chamber kept dry; men excavate and inspect in the dry; concrete seal placed properly.",
              "Pneumatic limits: hand excavation is slow; air pressure beyond about 300-400 kPa causes decompression sickness (bends).",
              "Indian bridge piers: wells (open caissons) are the standard; pneumatic for obstructed ground, box for firm beds in shallow water.",
            ],
            table: {
              caption: "Open, box and pneumatic caissons compared.",
              headers: ["Feature", "Open caisson", "Box caisson", "Pneumatic caisson"],
              rows: [
                ["Bottom", "Open (dredged)", "Closed (cast)", "Closed chamber + locks"],
                ["Sinking", "Dredged from top", "Floated and ballasted", "Excavated dry in chamber"],
                ["Depth", "Virtually unlimited", "Shallow, firm level bed", "Limited to about 30-40 m head"],
                ["Founding inspection", "Not possible", "Bed prepared in advance", "Direct inspection in dry"],
                ["Chief drawbacks", "Tremie seal, obstructions", "Needs level firm bed, floating risks", "Cost, slow, bends risk"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Pneumatic caisson: construction sequence",
              caption: "The classic sketch question - note where the air locks sit and why the chamber stays dry.",
              steps: [
                { label: "Cast working chamber on ground or dry dock", note: "cutting edge on the chamber roof" },
                { label: "Float out and sink in stages", note: "ballast as shafts extend upward" },
                { label: "Pressurise the chamber", note: "air just above outside water head" },
                { label: "Excavate dry through locks", note: "men, muck hoists, material locks" },
                { label: "Seal with concrete in the dry", note: "fill shafts, cap the caisson" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The three-way caisson comparison is a guaranteed 7-mark question. Structure it exactly as the table: bottom, sinking, depth, inspection, drawbacks - one row per caisson. Add the pneumatic sketch with shaft, air lock and working chamber labelled, plus one line on decompression sickness, and the answer is complete.",
            },
            keyTerms: [
              { term: "Open caisson", definition: "A caisson open at top and bottom, sunk by dredging the soil from the surface." },
              { term: "Box caisson", definition: "A caisson with a closed bottom, floated to site and sunk by ballast onto a prepared bed." },
              { term: "Caisson disease (bends)", definition: "Decompression sickness suffered by workers leaving compressed-air caisson chambers without staged decompression." },
            ],
            examQuestions: [
              {
                q: "Compare open, box and pneumatic caissons with respect to construction method, suitability, depth limitation and inspection of founding stratum. Describe the pneumatic caisson with a sketch and state its advantages and disadvantages.",
                marks: 7,
                outline: [
                  "Open caisson: open ends, dredge-sunk, unlimited depth, no inspection, tremie seal.",
                  "Box caisson: closed bottom, cast on land, floated and ballasted onto prepared firm bed, shallow water.",
                  "Pneumatic: sketch with working chamber, shafts, air locks; compressed air keeps chamber dry.",
                  "Pneumatic advantages: dry excavation, obstruction handling, inspection, quality base concrete.",
                  "Pneumatic disadvantages: slow, costly, depth limit about 30-40 m water head, caisson disease.",
                  "Selection: wells/open for Indian rivers, pneumatic for boulders, box for firm shallow beds.",
                  "Close with bridge pier practice and scour considerations linking to grip length.",
                ],
              },
              { q: "Why is the depth of a pneumatic caisson limited?", marks: 3 },
              { q: "State one situation where a box caisson is the right choice.", marks: 2 },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Ground Improvement",
      summary:
        "Making weak ground work: compaction from Proctor to field control, vibro-compaction and stone columns, sand drains and preloading that squeeze water out of clay, grouting and jet grouting that stiffen the ground chemically, geotextiles that separate, filter and reinforce, and the specialist topics - machine foundations, liquefaction and case studies - that close the subject.",
      chapter: {
        number: "05",
        title: "Ground Improvement Techniques",
        intro:
          "Unit V repairs the ground before it is built on. It begins with compaction - the Proctor laboratory reference and its field control - then densifies deep with vibro-compaction and stone columns, drains clay with sand drains under preloading, stiffens and seals with grouting, separates and reinforces with geotextiles, and ends with machine foundations, liquefaction and the case studies that prove all of it.",
        inOneBreath:
          "Compaction raises dry density to a Proctor-determined target - standard 2.6 kg/310 mm/3 layers, modified 4.9 kg/450 mm/5 layers - controlled in the field at 95-100 percent relative compaction near optimum moisture; vibro-compaction densifies clean sands with fines below about 10-15 percent while vibro-replacement builds stone columns that concentrate stress two-to-five-fold and drain radially; sand drains and prefabricated vertical drains under a preload shorten the drainage path and speed consolidation by Barron's radial theory; grouting ranges from cement suspensions, limited by a groutability ratio, to chemical solutions, compaction grouting and jet grouting; geotextiles separate, filter (O95 no larger than D85), drain and reinforce; machine foundations tune natural frequency away from operating frequency to avoid resonance; and liquefaction of loose saturated sand under cyclic loading - Niigata 1964, Bhuj 2001 - is prevented by densification and drainage.",
        sections: [
          {
            number: "5.1",
            title: "Compaction: Proctor, field control and specification",
            body: [
              "Compaction is the oldest and cheapest ground improvement: densifying soil by mechanical effort, pushing air out of the voids and increasing dry density. The laboratory reference is the Proctor test of IS 2720: the standard (light) compaction drives a 2.6 kg rammer through 310 mm onto three layers of soil, each given 25 blows, in a 1000 cc mould; the modified (heavy) compaction uses a 4.9 kg rammer, 450 mm fall, five layers, 25 blows. Each test runs at several water contents, and the plot of dry density against water content peaks at the optimum moisture content OMC and maximum dry density MDD - the two numbers every specification is built on.",
              "The peak exists because water first lubricates the soil - more water, better compaction - until the water begins to fill the voids and block further densification; the zero-air-voids (saturation) line, the theoretical ceiling ZAV = G gamma_w/(1 + w G), lies above every compaction curve. On the field side, compaction energy comes from smooth-wheel rollers, sheepsfoot and tamping rollers, pneumatic-tyred rollers and vibratory plates, placed in controlled lifts of about 150-250 mm, with moisture held near OMC (usually within about plus or minus 2 percent). Sheepsfoot rollers knead clay; vibration suits granular soils.",
              "Quality control is the point of the whole exercise. Field density is measured per lift by core cutter (cohesive soils) or sand replacement (any soil) per IS 2720, and the result is expressed as relative compaction - field dry density as a percentage of Proctor MDD; structural fills specify 95-100 percent, pavements commonly 97-100 percent of standard or modified Proctor. Granular soils are alternatively controlled by relative density. The payoffs of compaction: higher shear strength, lower compressibility, reduced permeability and a soil above the moisture susceptible zone; the compacted fill is, in effect, an engineered stratum.",
            ],
            bullets: [
              "Standard Proctor (IS 2720 Part 7): 2.6 kg rammer, 310 mm fall, 3 layers, 25 blows; modified (Part 8): 4.9 kg, 450 mm, 5 layers, 25 blows.",
              "OMC and MDD: peak of the dry density-water content curve; ZAV line ZAV = G gamma_w/(1 + w G) is the unreachable ceiling.",
              "Field equipment: sheepsfoot and tamping rollers knead clay; vibratory rollers and plates suit granular soil; lifts 150-250 mm.",
              "Moisture control near OMC (within about 2 percent) - dry soil bridges, wet soil pumps and weakens.",
              "Acceptance: field density by core cutter or sand replacement; 95-100 percent relative compaction of MDD is the usual spec.",
            ],
            codeExample: {
              language: "python",
              caption: "Field compaction control check from a sand-replacement measurement.",
              code: `Gs, w_field = 2.68, 14.5          # specific gravity, field moisture (%)
gamma_d_target = 18.0              # specification: 95% of Proctor MDD (kN/m3)
gamma_bulk = 20.6                  # sand-replacement bulk density (kN/m3)

gamma_d = gamma_bulk / (1 + w_field / 100.0)
RC = 100.0 * gamma_d / gamma_d_target
print(f"field dry density = {gamma_d:.1f} kN/m3")
print(f"relative compaction = {RC:.1f} percent of target")

# Zero-air-voids ceiling at this moisture
gamma_w = 9.81
ZAV = gamma_w * Gs / (1 + w_field / 100.0 * Gs)
print(f"zero-air-voids density = {ZAV:.1f} kN/m3")
print("reject lift and re-roll" if RC < 95.0 else "accept the lift")`,
            },
            diagram: {
              kind: "flow",
              title: "Field compaction, from borrow pit to accepted lift",
              caption: "The control loop that turns soil into an engineered fill.",
              steps: [
                { label: "Borrow and test fill", note: "Proctor OMC and MDD fixed" },
                { label: "Place lift at near-OMC moisture", note: "150-250 mm loose thickness" },
                { label: "Roll the lift", note: "sheepsfoot/vibratory to trial passes" },
                { label: "Field density check", note: "core cutter or sand replacement, per lift" },
                { label: "Accept or re-roll", note: "95-100 percent relative compaction required" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Learn the two Proctor configurations as number pairs - (2.6 kg, 310 mm, 3 layers) and (4.9 kg, 450 mm, 5 layers) - and be ready to draw the compaction curve with OMC, MDD, the ZAV line and the dry and wet sides of optimum. 'Why does a peak occur' is the theory question that follows the curve.",
            },
            keyTerms: [
              { term: "Optimum moisture content", definition: "The water content at which a compactive effort produces the maximum dry density." },
              { term: "Relative compaction", definition: "Field dry density expressed as a percentage of the Proctor maximum dry density; typically specified at 95-100 percent." },
              { term: "Zero-air-voids line", definition: "The dry density versus water content relation for fully saturated soil - the theoretical ceiling on compaction." },
            ],
            examQuestions: [
              {
                q: "Explain the Proctor compaction test (standard and modified) with its apparatus. Why does the dry density-water content curve show a peak? Draw the compaction curve with the zero-air-voids line and explain how field compaction is controlled and specified.",
                marks: 7,
                outline: [
                  "Apparatus: mould, rammer; standard 2.6 kg/310 mm/3 layers/25 blows; modified 4.9 kg/450 mm/5 layers/25 blows (IS 2720 Parts 7-8).",
                  "Procedure: compact at increasing water contents, determine dry density each time.",
                  "Peak: water lubricates up to OMC, then occupies voids and blocks densification - curve falls on wet side.",
                  "Sketch: dry density vs water content, mark OMC and MDD, ZAV line above the curve.",
                  "Field: lifts 150-250 mm, moisture within about 2 percent of OMC, roller type by soil.",
                  "Control: core cutter/sand replacement density; 95-100 percent of MDD specified.",
                  "Effects of compaction: strength up, compressibility and permeability down.",
                ],
              },
              { q: "Distinguish between standard and modified Proctor tests.", marks: 2 },
              { q: "State the usual relative compaction specified for a structural fill.", marks: 3 },
            ],
          },
          {
            number: "5.2",
            title: "Vibro-compaction, stone columns and sand drains",
            body: [
              "Vibro-compaction (vibroflotation) densifies clean sands in place. A cylindrical vibrator, jetted down and vibrated at depth, liquefies the surrounding sand, which collapses into a denser arrangement; the vibrator is withdrawn in stages while sand is fed from the surface to fill the crater, and compaction points are laid out on a grid of 1.5-3 m. It works only where fines are below about 10-15 percent - silt and clay damp the vibration and will not densify - but where it works it takes dense sand to 10-20 m depth, raising SPT N values sharply and wiping out liquefaction potential.",
              "Where fines defeat vibration, vibro-replacement builds stone columns: the vibrator penetrates the weak soil, and crushed stone is fed and compacted in stages to form a dense granular column of 0.6-1.2 m diameter. Under load, the stiff column attracts stress - the stress concentration ratio runs 2-5, so the column carries several times the stress in the surrounding soil - and the column simultaneously acts as a radial drain. Stone columns suit soft clays with undrained strength of roughly 15-50 kPa and loose silty sands: the design variables are column spacing (area replacement ratio typically 10-35 percent), length and the load-sharing, verified by a load test on a trial column group.",
              "Sand drains attack consolidation time directly. A soft clay layer drains slowly because the path to the draining boundary is long; vertical drains of 200-500 mm diameter, installed at 1.5-4.5 m spacing, shorten the drainage path to half the drain spacing, converting slow vertical flow to fast radial flow. Barron's equal-strain theory gives radial consolidation as a function of T r = c h t/(de)^2 and the spacing ratio n = de/dw, with corrections for the smear zone around the drain and well resistance inside it. Today prefabricated vertical drains (PVD band drains) have largely replaced sand drains - a 100 mm band does the job of a 300 mm sand drain without sand intrusion - and both are used under the preloading of section 5.3.",
            ],
            bullets: [
              "Vibro-compaction: vibrator + water jet densifies clean sand (fines below 10-15 percent) to 10-20 m depth on a 1.5-3 m grid.",
              "Stone columns (vibro-replacement): dense stone columns of 0.6-1.2 m in soft clay (cu about 15-50 kPa); stress concentration ratio 2-5.",
              "Stone columns also act as radial drains - densification plus drainage in one operation.",
              "Sand drains: 200-500 mm at 1.5-4.5 m spacing shorten the drainage path and speed consolidation by radial flow (Barron theory).",
              "Smear zone and well resistance reduce drain efficiency; design ratio n = de/dw typically 5-30.",
              "PVD band drains (about 100 mm wide) have replaced most sand drains - cheaper, faster installation, no sand intrusion.",
            ],
            table: {
              caption: "Deep improvement techniques compared.",
              headers: ["Technique", "Best soil", "Action", "Typical depth"],
              rows: [
                ["Vibro-compaction", "Clean sand, fines < 10-15 percent", "Vibration densifies in place", "10-20 m"],
                ["Stone columns", "Soft clay, silty sand (cu 15-50 kPa)", "Stiff inclusion + radial drain", "5-15 m"],
                ["Sand drains", "Soft clay under preload", "Shortens drainage path", "5-20 m"],
                ["PVD band drains", "Soft clay under preload", "Same as sand drains, faster to install", "10-30 m"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Radial consolidation under a preload, with drains",
              caption: "The loop that pumps water out of clay - each circuit converts pore pressure into strength.",
              steps: [
                { label: "Preload placed on the surface", note: "fill or vacuum load" },
                { label: "Excess pore pressure builds", note: "in the soft clay" },
                { label: "Water flows radially to the drain", note: "short path, high gradient" },
                { label: "Water rises the drain to the blanket", note: "sand drain, stone column or PVD" },
                { label: "Effective stress and strength rise", note: "next load stage can be added" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The selection rule is the mark-scorer: fines below about 10-15 percent - vibro-compaction; clay with cu 15-50 kPa - stone columns; any soft clay under a preload - drains. Quote Barron's radial theory and the spacing ratio n = de/dw for the sand drain question, and mention the smear zone as the reason installed drains perform below ideal.",
            },
            keyTerms: [
              { term: "Vibro-compaction", definition: "Deep densification of clean sand by a jetted vibrator fed with sand from the surface." },
              { term: "Stone column", definition: "A compacted granular column built in weak soil by vibro-replacement, acting as a stiff inclusion and radial drain." },
              { term: "Prefabricated vertical drain", definition: "A geosynthetic band drain providing the radial drainage path of a sand drain at a fraction of the installation effort." },
            ],
            examQuestions: [
              {
                q: "Explain vibro-compaction and vibro-replacement (stone columns) with sketches, stating the soil conditions each suits. Describe sand drains and the theory of radial consolidation, and explain why prefabricated band drains have replaced them.",
                marks: 7,
                outline: [
                  "Vibro-compaction: vibrator jetted in, sand fed from top, grid of points; clean sand only.",
                  "Limit: fines above 10-15 percent damp vibration - no densification.",
                  "Stone columns: stone fed and compacted in stages; 0.6-1.2 m diameter, cu 15-50 kPa clay.",
                  "Column action: stress concentration ratio 2-5 plus radial drainage.",
                  "Sand drains: vertical drains at 1.5-4.5 m spacing; drainage path becomes half spacing.",
                  "Barron theory: radial consolidation with n = de/dw; smear zone and well resistance corrections.",
                  "PVDs: 100 mm bands install fast, no sand intrusion, equivalent performance.",
                ],
              },
              { q: "State the fines content beyond which vibro-compaction is ineffective.", marks: 2 },
              { q: "Give two functions of a stone column in soft clay.", marks: 3 },
            ],
          },
          {
            number: "5.3",
            title: "Preloading and grouting",
            body: [
              "Preloading makes the building do to the soil what nature would take years to do: it pre-compresses soft ground before the structure arrives. A surcharge fill (or a vacuum pressure sealed under a membrane) is placed to a height that produces at least the final foundation stress; the clay consolidates under it, and when the predicted settlement has occurred the fill is removed and construction begins on ground that has already finished settling. Weak clay cannot take the full preload at once - it would fail in bearing - so loading is staged, each stage waiting for the drained strength gained from the previous stage, and piezometers and settlement plates monitor the rate throughout.",
              "Grouting injects material into the ground to stiffen it, seal it, or both. Suspension grouts - neat cement, cement-sand, cement-clay - are particulate and can penetrate only coarser soils: the groutability ratio, D15 of soil to d85 of grout (about 25 or more, meaning the soil is at least that much coarser than the grout), decides whether the grains pass. Solution or chemical grouts - sodium silicate based with reagents, or resins - have the viscosity of water and treat fine sands and silts that reject suspensions. By mechanism: permeation grouting fills pores without displacing soil; compaction grouting injects a stiff mortar that displaces and densifies; jet grouting cuts and mixes the soil with a high-pressure cement slurry, forming columns of soilcrete of 0.6-2 m diameter in almost any soil.",
              "Applications set the method. Preloading with drains is the default for highways, reclamation and tank farms on soft clay - cheap, reliable, needing only time; grouting is the choice where voids must be filled (karst, old mines), where seepage must be cut off (dam curtains, cofferdams), where foundations must be strengthened without excavation (underpinning historic buildings), or where tunnels must pass safely under sensitive structures. The selection matrix of this section's diagram folds all four techniques - preload with drains, vibro-compaction, stone columns and grouting - into one decision picture, and the grout table fixes the matching of grout to purpose.",
            ],
            bullets: [
              "Preloading: surcharge fill (or vacuum) applied before construction so the clay finishes settling in advance.",
              "Staged loading is essential in weak clay - each stage waits for the strength gained by the previous consolidation.",
              "Suspension grouts (cement, cement-clay) need groutability ratio D15/d85 about 25 or more; only coarse soils accept them.",
              "Chemical/solution grouts (silicates, resins) penetrate fine sands and silts that reject suspensions.",
              "Mechanisms: permeation fills pores; compaction grouting displaces and densifies; jet grouting cuts soil-cement columns of 0.6-2 m.",
              "Uses: preload + drains for highways and reclamation; grouting for seepage cutoffs, void filling, underpinning and tunnel protection.",
            ],
            table: {
              caption: "Grout types and their use.",
              headers: ["Grout family", "Examples", "Penetrates", "Typical use"],
              rows: [
                ["Cement suspension", "Neat cement, cement-sand", "Gravel, coarse sand (D15/d85 about 25+)", "Rock curtains, void filling, dam cutoffs"],
                ["Cement-clay suspension", "Cement-bentonite blends", "Coarse alluvium", "Seepage barriers, mine voids"],
                ["Chemical solution", "Sodium silicate + reagent, resins", "Fine sand and silt", "Waterproofing, strengthening sands"],
                ["Compaction grout", "Stiff mortar (low mobility)", "Displaces rather than penetrates", "Densifying loose zones, lifting settled slabs"],
                ["Jet grout", "High-pressure cement slurry", "Cuts and mixes any soil", "Columns, tunnel canopies, underpinning"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a ground improvement method",
              caption: "x-axis: soil grain (cohesive left, cohesionless right); y-axis: objective (reduce settlement bottom, gain strength top).",
              axes: {
                x: "Cohesive (left) -> Cohesionless (right)",
                y: "Gain strength (top) -> Reduce settlement (bottom)",
              },
              quadrants: [
                { label: "Cohesive + strength: stone columns", note: "stiff inclusions plus drainage" },
                { label: "Cohesionless + strength: vibro-compaction", note: "densify clean sand" },
                { label: "Cohesive + settlement: preload with drains", note: "surcharge plus PVDs" },
                { label: "Cohesionless + settlement: vibro-compaction or grouting", note: "densify, or permeation for cutoff" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Classify grouts and state their uses' is a repeat question: suspension versus solution, then permeation versus compaction versus jet grouting. The single number to remember is the groutability ratio - D15 of soil divided by d85 of grout, at least about 25 - because it decides whether a cement grout can enter the soil at all.",
            },
            keyTerms: [
              { term: "Preloading", definition: "Pre-compressing soft ground with a temporary surcharge (or vacuum) so post-construction settlement is eliminated." },
              { term: "Groutability ratio", definition: "D15 of the soil divided by d85 of the grout; about 25 or more for a suspension grout to penetrate." },
              { term: "Jet grouting", definition: "High-pressure cement slurry that cuts and mixes soil in place, forming solid soilcrete columns." },
            ],
            examQuestions: [
              {
                q: "Explain preloading as a ground improvement method with a staged loading sketch, stating the monitoring instruments used. Classify grouts with examples, explain the groutability ratio, and state one use each of permeation, compaction and jet grouting.",
                marks: 7,
                outline: [
                  "Preloading: surcharge to final stress or more; settlement happens before construction.",
                  "Staged loading: wait for strength gain between stages; bearing failure avoided.",
                  "Monitoring: settlement plates, piezometers, inclinometers at the edges.",
                  "Vacuum preloading variant; drains added to speed consolidation.",
                  "Grout classes: suspension (cement, cement-clay) versus solution (silicate, resin).",
                  "Groutability ratio D15/d85 about 25+ decides suspension penetration.",
                  "Uses: permeation for cutoffs, compaction grout for densification and slab lifting, jet grout for columns and tunnel support.",
                ],
              },
              { q: "Write the groutability ratio and its threshold value.", marks: 2 },
              { q: "Why must preloading be staged on very soft clay?", marks: 3 },
            ],
          },
          {
            number: "5.4",
            title: "Geotextiles and geosynthetics",
            body: [
              "Geotextiles are permeable polymer fabrics placed in soil to do one or more of five jobs: separation - keeping a clean aggregate layer from pumping into soft subgrade under traffic; filtration - letting water pass while retaining soil particles, as in a drain behind a retaining wall; drainage - conveying water along their own plane; reinforcement - adding tensile strength the soil lacks; and protection - cushioning geomembranes or controlling erosion. Woven geotextiles (strength-dominant, used for reinforcement and separation) and nonwovens - needle-punched or heat-bonded, filtration- and drainage-dominant - are the two main families; knitted and stitched fabrics fill special needs.",
              "Beyond the textiles sit the other geosynthetics: geogrids, with open apertures that interlock with soil and rock - the reinforcement element in mechanically stabilised earth walls, steep slopes and base courses; geomembranes, impermeable sheets for canal and landfill liners; geonets and geocomposites that combine drainage cores with filter skins; and geocells, honeycombs that confine granular fill. In a reinforced slope or MSE wall, horizontal geogrid layers carry the tensile forces the soil cannot, so the structure stands at angles soil alone could never hold - the design checks pull-out, rupture and the facing connection.",
              "Design rests on the filtration criteria for filter applications: the geotextile's opening size must retain the soil - typically the 95 percent opening size O95 no larger than the soil's D85, roughly O95 at or below about 1-2 times D85 depending on soil - while its permeability must exceed the soil's, usually by a factor of 10 or more, so water never builds pressure behind the fabric; clogging and abrasion checks complete the design. The applications wrap up the subject: unpaved and paved roads over soft subgrade (separation plus limited reinforcement), filters beneath riprap and behind walls, reinforced embankments and MSE walls, and erosion control blankets - geosynthetics are now the cheapest ground improvement per tonne handled.",
            ],
            bullets: [
              "Five functions: separation, filtration, drainage, reinforcement and protection - most products combine two or more.",
              "Woven geotextiles: high strength, low strain - reinforcement and separation. Nonwovens: felt-like - filtration and drainage.",
              "Geogrids interlock through apertures - the reinforcement of MSE walls, slopes and base courses; geomembranes are impermeable barriers.",
              "Filtration design: O95 at or below about 1-2 x D85 (retention) with permeability at least 10 x the soil's.",
              "Signature uses: roads over soft subgrade, filters behind walls, reinforced slopes, erosion control, landfill liners.",
            ],
            table: {
              caption: "The geosynthetic family and primary function.",
              headers: ["Product", "Form", "Primary function"],
              rows: [
                ["Woven geotextile", "Interlaced yarns", "Reinforcement, separation"],
                ["Nonwoven geotextile", "Needle-punched/bonded fibres", "Filtration, drainage, protection"],
                ["Geogrid", "Open apertured grid", "Soil reinforcement (MSE walls, slopes)"],
                ["Geomembrane", "Impervious sheet", "Barrier (liners, canals, reservoirs)"],
                ["Geocomposite", "Drainage core + filter skins", "Drainage in walls, roofs, landfill caps"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Woven versus nonwoven geotextile",
              caption: "The selection contrast that decides which roll goes on site.",
              left: {
                heading: "Woven",
                items: [
                  "Yarns interlaced on a loom",
                  "High tensile strength, low strain",
                  "Small, uniform openings",
                  "Chosen for reinforcement and separation",
                  "Typical use: paved road subgrade, embankment basal reinforcement",
                ],
              },
              right: {
                heading: "Nonwoven",
                items: [
                  "Fibres needle-punched or heat-bonded",
                  "Lower strength, high elongation",
                  "Compressible, thick, felt-like",
                  "Chosen for filtration, drainage, cushioning",
                  "Typical use: filter behind walls, membrane protection",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'State the functions of geotextiles' is asked almost every year: list all five - separation, filtration, drainage, reinforcement, protection - with a one-line example each. Add the filtration criterion (O95 no larger than about 1-2 times D85, permeability at least 10 x soil) and the woven/nonwoven contrast, and the answer is complete.",
            },
            keyTerms: [
              { term: "Geotextile", definition: "A permeable polymeric fabric used with soil to separate, filter, drain, reinforce or protect." },
              { term: "Geogrid", definition: "An apertured polymer grid whose openings interlock with soil to provide reinforcement." },
              { term: "Apparent opening size (O95)", definition: "The geotextile pore size retaining 95 percent of glass beads; compared with D85 in filtration design." },
            ],
            examQuestions: [
              {
                q: "State and explain the functions of geotextiles with a typical application of each. Differentiate between woven and nonwoven geotextiles, write the filtration criteria used in design, and name two uses of geogrids.",
                marks: 7,
                outline: [
                  "Function 1: separation - aggregate over soft subgrade in roads.",
                  "Function 2: filtration - drain filter behind retaining walls.",
                  "Functions 3-4: drainage (in-plane) and reinforcement (tension soil cannot carry).",
                  "Function 5: protection/cushioning of geomembranes; erosion control.",
                  "Woven: high strength, low strain - reinforcement and separation.",
                  "Nonwoven: needle-punched felt - filtration, drainage, cushioning.",
                  "Filtration criteria: O95 no larger than about 1-2 x D85; permeability at least 10 x soil; geogrids for MSE walls and slope reinforcement.",
                ],
              },
              { q: "State the retention and permeability criteria for a geotextile filter.", marks: 3 },
              { q: "Name the geosynthetic used as an impermeable liner.", marks: 2 },
            ],
          },
          {
            number: "5.5",
            title: "Machine foundations, liquefaction and case studies",
            body: [
              "A machine foundation is designed for motion, not just load. The machine's operating frequency must sit well away from the foundation-soil system's natural frequency fn = (1/2 pi) sqrt(k/m), or resonance amplifies vibration destructively - practice keeps the frequency ratio outside about 0.5-2, choosing either a low-tuned massive block (fn below operating speed) or a high-tuned light slab. The foundation, usually a massive RCC block (foundation mass commonly two to five times the machine mass) or a framed table for turbo-generators, has six degrees of freedom; soil springs and damping come from the dynamic subgrade reaction coefficients of Barkan's approach or elastic half-space theory. Design limits are set by machine maker specifications - amplitude, velocity and acceleration - not by stress alone.",
              "Liquefaction is ground improvement's most dramatic failure mode. Loose saturated sand shaken by earthquake cyclic loading tries to compact; unable to drain quickly, the pore water pressure rises until it equals the effective stress - and the sand, with zero effective stress, loses all strength and flows. Susceptibility is worst in uniform fine sands, loose (low N), shallow water table and long, strong shaking; dense sands (N above about 30) drain freely or dilate and resist. Screening uses the simplified Seed-Idriss procedure: compute the cyclic stress ratio CSR = 0.65 (amax/g)(sigma v/sigma' v) rd from the design earthquake, compare with the cyclic resistance ratio CRR from corrected blow counts (N1)60, and require a factor of safety above about 1.2-1.4.",
              "The case studies are the exams' and the subject's closing argument. Niigata, Japan, 1964: apartment buildings tilted like fallen dominoes on liquefied sand while the nearby building on piles to firm stratum stood - the event that launched modern liquefaction engineering. Alaska, 1964: liquefaction destroyed bridges and triggered landslides over huge areas. Bhuj, Gujarat, 2001: extensive liquefaction in the Rann of Kachchh - sand blows, lateral spreads and building failures - driving the adoption of stone columns and densification in Indian codes and projects. The mitigation toolkit: densification by vibro-compaction and compaction piles, stone columns as drains that dissipate pore pressure, drains and preloading, or deep foundations through the liquefiable layer.",
            ],
            bullets: [
              "Machine foundations: avoid resonance - keep operating frequency outside about 0.5-2 x natural frequency fn = (1/2 pi) sqrt(k/m).",
              "Block foundations: massive RCC, foundation mass commonly 2-5 x machine mass; framed tables for turbo machinery; six degrees of freedom.",
              "Soil springs and damping from Barkan's dynamic subgrade reaction or elastic half-space theory.",
              "Liquefaction: cyclic loading raises pore pressure to equal effective stress - loose saturated uniform fine sand loses all strength.",
              "Seed-Idriss screening: CSR = 0.65 (amax/g)(sigma v/sigma' v) rd versus CRR from (N1)60; FS above about 1.2-1.4 required.",
              "Cases: Niigata 1964 (tilted buildings), Alaska 1964 (bridges, slides), Bhuj 2001 (Rann of Kachchh sand blows).",
              "Mitigation: vibro-densification, compaction piles, stone column drains, or piles/wells through the liquefiable layer.",
            ],
            codeExample: {
              language: "python",
              caption: "Simplified Seed-Idriss liquefaction screening from SPT data.",
              code: `# Simplified Seed-Idriss check (clean sand, M 7.5)
amax_g = 0.15                    # peak ground acceleration / g
sigma_v, sig_v_eff = 180.0, 110.0   # total, effective stress (kPa)
rd, N1_60 = 0.95, 14.0           # stress reduction, corrected SPT

CSR = 0.65 * amax_g * (sigma_v / sig_v_eff) * rd

# CRR from the clean-sand base curve (Youd et al. 2001, M 7.5)
CRR_curve = {5: 0.08, 10: 0.12, 15: 0.17, 20: 0.24, 25: 0.33, 30: 0.44}
N_low = int(N1_60 // 5) * 5
frac = (N1_60 - N_low) / 5.0
CRR = CRR_curve[N_low] + frac * (CRR_curve[N_low + 5] - CRR_curve[N_low])

FS = CRR / CSR
print(f"CSR = {CSR:.3f}, CRR = {CRR:.3f}")
print(f"factor of safety = {FS:.2f}")
print("densify: stone columns or vibro" if FS < 1.3 else "margin adequate")`,
            },
            diagram: {
              kind: "fork",
              title: "Loose saturated sand in a seismic zone - the response options",
              caption: "The design fork that closed Niigata's lesson: measure, then densify or drain - never hope.",
              start: "Loose saturated fine sand, N about 8, water table at 2 m, design a_max = 0.15 g",
              branches: [
                { label: "Vibro-compaction to N above 30", outcome: "Density gain eliminates pore pressure build-up - liquefaction risk gone", good: true },
                { label: "Stone column drains on a grid", outcome: "Pore pressure dissipates radially during shaking plus partial densification", good: true },
                { label: "Found on shallow footings as designed", outcome: "CSR exceeds CRR - sand liquefies, footings settle and tilt as at Niigata", good: false },
                { label: "Surface rolling only, then build", outcome: "Deep layers remain loose; risk persists below the rolled crust", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Three answers live here. Machine foundations: resonance condition and the frequency-ratio rule with fn = (1/2 pi) sqrt(k/m). Liquefaction: mechanism, influencing factors and four mitigation measures. Case studies: Niigata 1964, Alaska 1964, Bhuj 2001 - one line each on what liquefied and what failed. The Seed-Idriss CSR formula is worth memorising with its stress-reduction factor rd.",
            },
            keyTerms: [
              { term: "Resonance", definition: "Amplified vibration occurring when the operating frequency of a machine matches the natural frequency of its foundation-soil system." },
              { term: "Liquefaction", definition: "Loss of strength of loose saturated sand under cyclic loading when pore pressure rises to equal the effective stress." },
              { term: "Cyclic stress ratio", definition: "CSR = 0.65 (amax/g)(sigma v/sigma' v) rd - the earthquake demand in simplified liquefaction screening." },
            ],
            examQuestions: [
              {
                q: "Explain the design criteria for machine foundations, including the resonance condition and the measures used to avoid it. What is liquefaction? Explain its mechanism, the factors that influence it, and four methods of mitigation with reference to the Niigata 1964 and Bhuj 2001 earthquakes.",
                marks: 7,
                outline: [
                  "Machine foundation criteria: amplitude, velocity limits from the machine maker; natural frequency from soil springs and mass.",
                  "Resonance: operating frequency equals natural frequency - amplitude blows up; keep ratio outside 0.5-2.",
                  "Means: low-tuned massive block or high-tuned light slab; framed table for turbo sets; mass 2-5 x machine.",
                  "Liquefaction: cyclic loading, pore pressure rise to equal effective stress, zero strength.",
                  "Factors: density (N), grain size and uniformity, water table depth, shaking intensity and duration.",
                  "Mitigation: vibro-compaction, compaction piles, stone column drains, deep foundations through the layer.",
                  "Cases: Niigata 1964 tilted buildings versus pile-supported structure; Bhuj 2001 Rann of Kachchh sand blows.",
                ],
              },
              { q: "Write the expression for the natural frequency of a machine foundation block.", marks: 2 },
              { q: "State two conditions that make a sand deposit most susceptible to liquefaction.", marks: 3 },
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
        "RGPV CE-802(B) papers concentrate marks on bearing capacity numericals, pile capacity and well foundations, with site investigation tests and ground improvement supplying the definitional and short-question base. Allocate revision in roughly the ratio below, keeping at least one full worked numerical per starred topic.",
      ],
      weightedTopics: [
        { topic: "Terzaghi bearing capacity + IS 6403 numericals (shape factors, water table)", weight: "10-14 marks", note: "The bankable 7-marker; practise full computations with both corrections." },
        { topic: "Pile capacity: static formula and Hiley dynamic formula", weight: "8-12 marks", note: "Two formulae, guaranteed; know clay and sand versions cold." },
        { topic: "Well foundations: components, shapes, grip length, sinking", weight: "8-10 marks", note: "Sketch + Lacey numerical; grip length = dsm/3 appears constantly." },
        { topic: "SPT and CPT: procedure, corrections, correlations", weight: "6-8 marks", note: "Numbers (63.5 kg, 750 mm, 60 degrees, 10 cm2) plus both correction formulas." },
        { topic: "Settlement: immediate and consolidation numericals", weight: "6-8 marks", note: "Sc formula with the e-log sigma derivation and IS 1904 limits." },
        { topic: "Group efficiency and negative skin friction", weight: "6-8 marks", note: "Converse-Labarre and the neutral plane - both as short notes." },
        { topic: "Caissons: open, box, pneumatic comparison", weight: "5-7 marks", note: "The three-way table question; sketch the pneumatic caisson." },
        { topic: "Ground improvement: compaction, vibro, stone columns, sand drains", weight: "6-8 marks", note: "Selection rules and Proctor numbers; matrix of technique to soil." },
        { topic: "Grouting and geotextiles", weight: "5-7 marks", note: "Grout classification and the five geotextile functions with criteria." },
        { topic: "Machine foundations, plate load test, liquefaction, case studies", weight: "5-8 marks", note: "Resonance rule, plate test limitations, Niigata/Bhuj one-liners." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this plan covers all 25 sections twice - once for understanding, once for revision - and reserves the last week for full papers. Pair each theory session with at least one worked numerical.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - site investigation", tasks: ["IS 1892 stages, trial pits, boring methods with the comparison table", "SPT procedure and both corrections; CPT and the SPT-CPT comparison", "Sampling, area ratio, geophysics and bore log drawing practice"] },
        { week: "Week 2", focus: "Unit II part A - types and Terzaghi", tasks: ["Foundation types and selection; raft triggers", "Terzaghi assumptions, zones and derivation; capacity factors table", "Three full Terzaghi numericals (strip, square, local shear)"] },
        { week: "Week 3", focus: "Unit II part B + start of piles", tasks: ["IS 6403: shape factors, W' and W'' corrections, two full numericals", "Plate load test procedure, scale law and limitations", "Settlement: Si and Sc formulas with one oedometer numerical"] },
        { week: "Week 4", focus: "Unit III - pile foundations", tasks: ["Pile classification grid; static formula in clay and sand (two numericals)", "Hiley formula worked by iteration; ENR comparison", "Load test procedure, Converse-Labarre, negative skin friction measures"] },
        { week: "Week 5", focus: "Unit IV - wells and caissons", tasks: ["Well components sketch and shapes comparison", "Lacey scour and grip length numericals (three variants)", "Sinking operations, tilts and blows; three-caisson comparison table"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Compaction control, vibro/stone columns/sand drains selection matrix", "Grouting types, geotextile functions and criteria; machine foundations and liquefaction", "Two full past papers under exam timing, then repair the weak spots"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day revision plan",
      bullets: [
        "Rewrite the Terzaghi equation trio (strip, square, circular) and the IS 6403 net formula with W' and W'' - capacity questions are worth the most marks in the paper.",
        "Rehearse the pile quartet: 9 cu Ap, alpha cu As, Ap sigma'v Nq, K sigma'v tan(delta) As - plus the full Hiley formula with every symbol named.",
        "Sketch the well foundation section from memory with all seven labels, and rewrite the Lacey chain: f = 1.76 sqrt(d50), dsm = 1.34 (q^2/f)^(1/3), grip = dsm/3.",
        "Recite the test numbers: SPT 63.5 kg and 750 mm fall, CPT 60 degrees and 10 cm2 at 20 mm/s, plate 300-750 mm, Proctor 2.6/310 and 4.9/450 configurations.",
        "Redraw the three most-likely diagrams once on rough paper: Terzaghi zones, well section, pneumatic caisson.",
        "Sleep seven hours and reach the hall early; a fresh mind catches the -1 in (Nq - 1) that a tired one misses.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the formula before any numbers, defining every symbol - method marks survive arithmetic slips, and undefined symbols lose them.",
        "Draw the labelled sketch first (Terzaghi zones, well section, pneumatic caisson, compaction curve) and write the prose around it - the picture anchors the answer.",
        "Quote the IS code by number at the right moment: IS 1892 exploration, IS 2131 SPT, IS 4968 CPT, IS 6403 capacity, IS 1888 plate test, IS 1904 settlements, IS 2911 piles.",
        "Watch units: gamma in kN/m3 against cu in kPa, set in millimetres inside Hiley divided by 1000 - most lost marks in this paper are unit slips, not theory slips.",
        "Time-box: 2-mark notes in 4 minutes, 3-mark in 6-8 minutes, 7-mark in 15-18 minutes, and keep 10 minutes at the end to check water table corrections and factors of safety.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using gross surcharge in a NET capacity question - the -1 in (Nq - 1) is the whole difference between gross and net; label which one the question asked.",
        "Swapping the water table corrections - W' goes on the surcharge term (0.5 at ground surface), W'' on the width term (0.5 at the base); write 'surcharge' and 'width' in the margin.",
        "Applying SPT N raw - the overburden correction CN and, for saturated fine silty sand with N above 15, the dilatancy correction are expected in every correlation answer.",
        "Using the Hiley or Engineering News formula for a bored pile - dynamic formulae are meaningless without hammer, set and driven displacement.",
        "Fixing the well founding level from the bed seen on the day - it comes from Lacey's maximum scour line minus grip length (dsm/3), never from the stratum encountered.",
        "Scaling plate settlement to footing settlement on clay - the Terzaghi-Peck width law is for sand; on clay plate and footing settle nearly alike but consolidation is missed.",
      ],
    },
  ],
};
