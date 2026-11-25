/**
 * Academics - RGPV Civil Engineering 8th-semester subject: CE-803(C)
 * Retrofitting and Rehabilitation of Structures.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce803c: AcademicSubject = {
  id: "ce-803-c",
  code: "CE-803(C)",
  title: "Retrofitting and Rehabilitation of Structures",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to keeping structures alive: why they deteriorate, how to assess them with NDT and cores, which materials and techniques repair them, how jacketing, FRP, prestressing and isolation strengthen them, and how real bridges, heritage buildings and earthquake survivors were brought back.",
  description:
    "Five units walk the full rehabilitation cycle. Unit I diagnoses: causes of deterioration, condition surveys, rebound hammer, UPV, core testing and the structural audit. Unit II repairs: cementitious, epoxy and fiber-reinforced materials, crack injection, corrosion repair, coatings and shotcrete. Unit III strengthens: section enlargement, steel plate bonding, FRP wrapping, external prestressing, NSM, bracing and underpinning. Unit IV fights earthquakes: soft storeys, short columns, weak joints, RCC jacketing per IS 15988, bracing, infill, base isolation and the Bhuj 2001 lessons. Unit V manages: bridge and heritage case studies, fire and flood recovery, repair-versus-replace economics, service life prediction, self-healing concrete and structural health monitoring.",
  accentColor: "#f472b6",
  emoji: "RT",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Deterioration and Assessment",
      summary:
        "Why structures decay - environmental, structural and constructional causes - and how engineers establish the true condition of a distressed building: the condition survey, the rebound hammer, ultrasonic pulse velocity, core extraction and the full structural audit.",
      chapter: {
        number: "01",
        title: "Deterioration and Assessment of Structures",
        intro:
          "Unit I is the diagnosis half of rehabilitation. It begins with the mechanisms that attack concrete and steel - carbonation, chlorides, sulfates, overload and constructional defects - then builds the assessment toolkit: a staged condition survey with crack mapping and sounding, the rebound hammer for near-surface hardness, ultrasonic pulse velocity for interior quality, core testing as the referee method, and the structural audit that assembles all evidence into a graded repair programme.",
        inOneBreath:
          "Deterioration is driven by environmental, structural and constructional causes; carbonation and chlorides depassivate steel and rust expansion cracks the cover; the condition survey maps every symptom; the rebound hammer reads surface hardness as a rebound number, UPV reads interior quality from transit time with the IS 13311 Part 1 grading, cores settle disputed numbers under IS 456 acceptance criteria, and the structural audit turns documents, visual evidence, NDT and cores into one prioritised repair programme.",
        sections: [
          {
            number: "1.1",
            title: "Causes and mechanisms of deterioration",
            body: [
              "Every structure begins to age the day it is handed over. Deterioration is the gradual loss of a material's ability to perform its intended function, and in civil engineering it is driven by three families of causes: environmental attack, structural action and constructional defects. Environmental agents - moisture, carbon dioxide, chlorides, sulfates and temperature cycling - alter the chemistry of concrete and steel. Structural causes include overload, impact, vibration, fatigue and differential settlement, which crack members long before any chemical process begins. Constructional causes - inadequate cover, honeycombing, poor compaction, misplaced reinforcement and curing shortcuts - hand the environment an easy entry into the interior.",
              "In reinforced concrete the dominant damage chain is corrosion of reinforcement. Fresh concrete is highly alkaline, with a pH of about 12.5 to 13.5, and keeps a thin passive film on the steel; carbonation lowers the pH while chloride ions break the film locally. Once depassivated, the bar corrodes, and the rust occupies two to six times the volume of the parent metal, generating tensile stresses that split the cover along the bar and then spall it off. Parallel paste-level attacks include sulfate attack, alkali-aggregate reaction, freeze-thaw scaling, leaching and acid attack; physical agents add abrasion, erosion and cavitation to the list.",
              "The engineer's task in assessment is to distinguish symptoms from causes. A crack following a corner cover line suggests corrosion; map cracking all over a slab suggests alkali-aggregate reaction or plastic shrinkage; diagonal cracking near supports suggests shear or overload. Each cause is rated by mechanism, rate and extent, which the condition survey of the next section records. Repair that ignores the cause - patching a corrosion crack while chloride ingress continues, for example - only hides the disease and returns within a few years, which is why rehabilitation begins with mechanisms and not with materials.",
            ],
            bullets: [
              "Three cause families: environmental (chemical and physical attack), structural (overload, fatigue, vibration, settlement) and constructional (cover, compaction and curing defects).",
              "Carbonation: CO2 reacts with calcium hydroxide, pH falls below about 9, and the passive film on steel is lost; the front advances roughly with sqrt(time).",
              "Chloride ingress from marine spray or contaminated ingredients causes pitting even at high pH; the corrosion threshold is commonly taken near 0.4 percent by mass of cement.",
              "Corrosion product occupies 2 to 6 times the steel volume - the expansion that cracks and spalls the cover.",
              "Paste-level attacks: sulfate attack, alkali-aggregate reaction, freeze-thaw, leaching and acid attack each have a characteristic surface signature.",
              "Symptom-to-cause reading: cover cracks along bars = corrosion; map cracking = AAR or shrinkage; diagonal cracks = shear or overload.",
            ],
            table: {
              caption: "Common causes of deterioration with mechanism and tell-tale symptoms.",
              headers: ["Cause", "Mechanism", "Typical symptom"],
              rows: [
                ["Carbonation", "CO2 neutralises alkalinity; steel depassivates", "Cover cracks and brown stains along bars"],
                ["Chloride ingress", "Cl- breaks passive film; pit corrosion", "Local spalls, deep pitting on exposed bars"],
                ["Sulfate attack", "Ettringite forms and paste expands", "Whitish growth, map cracking near ground contact"],
                ["Alkali-aggregate reaction", "Silica gel swells with moisture", "Map cracking with gel weeping at cracks"],
                ["Overload / settlement", "Stress exceeds capacity; differential movement", "Diagonal or vertical through-cracks"],
                ["Fire", "Thermal gradients spall cover; steel loses strength", "Pink to buff discolouration, spalled corners"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How deterioration progresses in an RC member",
              caption:
                "The classic corrosion chain - every later step is more expensive to fix than the one before it.",
              steps: [
                { label: "Exposure begins", note: "CO2, chlorides and moisture enter at surfaces" },
                { label: "Penetration", note: "carbonation or chloride front reaches the bar" },
                { label: "Depassivation", note: "passive film breaks - corrosion starts" },
                { label: "Expansion", note: "rust 2-6x steel volume cracks the cover" },
                { label: "Spalling and section loss", note: "bar exposed, capacity falls" },
                { label: "Assessment and repair", note: "Units I and II of this subject" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 7-mark favourite",
              body: "When asked to discuss causes of deterioration, classify first (environmental, structural, constructional), then give mechanism, symptom and remedy for each entry. Examiners award the structure, not a random list. Anchor the answer on the corrosion chain: depassivation, rust expansion, cover cracking, spalling.",
            },
            keyTerms: [
              { term: "Deterioration", definition: "Gradual loss of a member's ability to perform its function through environmental, structural or constructional action." },
              { term: "Depassivation", definition: "Loss of the protective oxide film on reinforcing steel, caused by carbonation or chloride attack." },
              { term: "Carbonation", definition: "Reaction of CO2 with calcium hydroxide in concrete that lowers pH from about 13 to below 9." },
            ],
            examQuestions: [
              {
                q: "Classify the causes of deterioration of reinforced concrete structures. Explain the mechanism of reinforcement corrosion with volume expansion and state the corresponding remedies.",
                marks: 7,
                outline: [
                  "Group causes into environmental, structural and constructional families with two examples each.",
                  "Explain the passive film and why fresh concrete of pH 12.5-13.5 protects steel.",
                  "Describe carbonation: CO2 + Ca(OH)2 forms CaCO3, pH falls, and the front advances with sqrt(time).",
                  "Describe chloride attack: pitting even at high pH; sources - marine spray, contaminated water or admixtures.",
                  "Corrosion product occupies 2-6 times steel volume; show how this cracks, then spalls, the cover.",
                  "Secondary mechanisms: sulfate attack, AAR, freeze-thaw, abrasion - one line each.",
                  "Remedies: adequate cover, low water-cement ratio, pozzolanas, coatings, cathodic protection, timely maintenance.",
                ],
              },
              {
                q: "Differentiate between carbonation-induced and chloride-induced corrosion of reinforcement.",
                marks: 3,
              },
              {
                q: "List any four constructional defects that accelerate deterioration of concrete.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Condition survey and visual inspection",
            body: [
              "A condition survey is a systematic, documented examination of a structure to establish its present state, the causes and extent of distress, and the repairs needed. It is the first step of any rehabilitation contract, and it always begins visually, because most defects announce themselves: cracks, spalls, stains, deflections, corrosion streaks and damp patches. The surveyor walks the structure member by member with drawings in hand, photographs everything, and records the location, pattern, width, direction and activity of every crack and the area of every spall on a damage map.",
              "The survey proceeds in planned stages. The desk study collects as-built drawings, design calculations, soil reports, construction records and previous repair history. The preliminary inspection identifies scope and hazards and grades the structure broadly as good, fair or poor. The detailed inspection then measures: crack widths by comparator card or crack microscope, delamination by sounding with a hammer or chain drag, deflection and tilt by level and plumb line, and cover depth and rebar layout by cover meter. Selected NDT and cores follow only where the visual evidence demands numbers.",
              "The output is a condition report that grades damage, interprets causes and prioritises repair. Indian practice grades members from 0 to 4, or as minor, moderate, severe and very severe, combining visual ratings with NDT values. The report must always separate observation from interpretation - what was measured, then what it means - because the repair specification of Unit II is written directly from it. A poor survey produces a poor repair, and the most common professional failure is treating symptoms without the documentary trail a proper survey provides.",
            ],
            bullets: [
              "Desk study first: drawings, calculations, soil report, construction records and past repair history.",
              "Visual inspection: locate, photograph and map cracks, spalls, stains, deflections, damp and vegetation on marked-up drawings.",
              "Instruments: crack microscope (to 0.02 mm), cover meter, plumb bob, digital level, borescope for hidden faces, hammer for delamination sounding.",
              "Damage grading: 0 (no damage) to 4 (very severe), or minor / moderate / severe / very severe classes.",
              "Sampling plan: positions for rebound hammer, UPV and cores are chosen only after visual mapping - numbers follow symptoms.",
              "Report format: observations separated from interpretation, causes assigned, members prioritised, repair scope drafted.",
            ],
            codeExample: {
              language: "text",
              caption: "Extract from a condition survey field log (Hostel Block C)",
              code: `STRUCTURE  Hostel Block C (G+3, RC frame, 1998)
MEMBER     Column C-12, ground floor, grid 4/B
OBSERVATIONS
  Crack      along corner cover line, 1.8 mm wide, 900 mm long
  Staining   brown weep at crack, rust bleed at splice zone
  Spall      120 x 80 mm cover plate lost, 10 mm bar exposed
  Cover      measured 14 mm (specified 40 mm)
  Sounding   hollow zone extends 300 mm around the crack
GRADING     3 - severe (corrosion appears active)
NDT PLANNED rebound hammer + UPV grid on column C-12
ACTION      break out to 25 mm behind bar, then corrosion repair
SURVEYOR    site log sheet 7, photographs 071-078`,
            },
            diagram: {
              kind: "pipeline",
              title: "Stages of a condition survey",
              caption:
                "Each stage narrows the question - from what exists, to what is wrong, to what must be done.",
              stages: [
                { label: "Desk study", note: "drawings, records, repair history" },
                { label: "Preliminary inspection", note: "scope, hazards, broad grading" },
                { label: "Detailed inspection", note: "crack mapping, sounding, levels, cover meter" },
                { label: "NDT and sampling", note: "rebound, UPV, cores at selected spots" },
                { label: "Interpretation and report", note: "causes, grading, repair priorities" },
              ],
            },
            callout: {
              type: "tip",
              title: "Field craft",
              body: "Carry a crack-width comparator card, a can of water and a marker: spraying a crack shows whether it is damp-active, and dating marks across it reveal movement between visits. Every observation gets a photograph reference in the log - a report without photographs will not survive a dispute.",
            },
            keyTerms: [
              { term: "Condition survey", definition: "A systematic documented examination of a structure to establish its state, distress causes and repair needs." },
              { term: "Crack mapping", definition: "Recording location, pattern, width, direction and activity of every crack on marked-up drawings." },
              { term: "Delamination survey", definition: "Sounding the surface with hammer or chain drag to find hollow, debonded zones before they spall." },
            ],
            examQuestions: [
              {
                q: "Describe the stages of a condition survey of a distressed RC building, the instruments used at each stage, and how damage is graded and reported.",
                marks: 7,
                outline: [
                  "Define the condition survey and its objectives at the start of rehabilitation.",
                  "Desk study: drawings, records, soil report, previous repairs.",
                  "Preliminary inspection: scope, hazards, broad good/fair/poor grading.",
                  "Detailed inspection: crack mapping, sounding, levels, tilt, cover meter - name the instruments.",
                  "NDT and sampling: rebound hammer, UPV, cores positioned from the damage map.",
                  "Grading: 0-4 or minor to very severe; combine visual and NDT ratings.",
                  "Report: observations vs interpretation, causes, prioritised repair list, photographs and drawings.",
                ],
              },
              {
                q: "List any five observations recorded during the visual inspection of a distressed RC column.",
                marks: 3,
              },
              {
                q: "Why must observations be separated from interpretation in a condition report?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Rebound hammer test",
            body: [
              "The rebound hammer, patented as the Schmidt hammer, is the quickest non-destructive test for the near-surface quality of concrete. A spring-driven mass strikes a plunger held against the surface, and the rebound distance of the mass, read on a graduated scale as the rebound number R, measures surface hardness. Harder - that is, stronger and better compacted - concrete throws the mass back further, so R correlates with compressive strength through a calibration curve supplied by the manufacturer or refined on site against cores. Indian practice follows IS 13311 (Part 2), now absorbed into IS 516 (Part 5, Section 4).",
              "The test is performed on a cleaned surface free of loose particles and honeycombing. A grid of about twelve readings is taken with the plunger held normal to the face, each impact at least 20 mm from edges, joints and previous impacts; individual readings deviating more than about six points from the mean are rejected and the average corrected for hammer orientation - horizontal, vertically upward or vertically downward - because gravity changes the rebound of the mass. The corrected average R then enters the calibration chart to give an indicative strength, usually to an accuracy of only plus or minus 25 percent.",
              "Interpretation must respect what the hammer actually measures: the hardness of a skin of concrete roughly 30 mm deep. Moisture, carbonation, texture and age all bias R - a wet surface reads low, while a carbonated or ground-smooth skin reads high. The hammer therefore gives uniformity and comparative information, not design strength; for the member as a whole it is paired with UPV, and wherever numbers must be defended, with cores. Used as a mapping tool - many points plotted as contours - it is excellent at locating weak patches, honeycombed zones and cold joints for later, deeper testing.",
            ],
            bullets: [
              "Principle: spring-driven mass strikes a plunger; rebound distance is read as the rebound number R.",
              "What it measures: hardness of a surface zone about 30 mm deep - not the core of the member.",
              "Procedure: grid of about 12 readings, plunger normal to face, 20 mm clear of edges and prior impacts, outliers discarded.",
              "Orientation correction: horizontal, upward and downward curves differ because gravity acts on the mass.",
              "Strength from R is indicative only, roughly plus or minus 25 percent; never use for acceptance against fck.",
              "Best role: contour mapping of uniformity to locate weak zones, paired with UPV and cores.",
            ],
            table: {
              caption: "Rebound number to quality grading (indicative, per IS 13311 Part 2 family of charts).",
              headers: ["Average rebound number R", "Quality of concrete", "Indicative cube strength"],
              rows: [
                ["40 and above", "Very good", "about 35 MPa and above"],
                ["30 to 39", "Good", "about 25 to 35 MPa"],
                ["20 to 29", "Fair", "about 15 to 25 MPa"],
                ["10 to 19", "Poor", "about 10 to 15 MPa"],
                ["below 10", "Very poor", "below 10 MPa"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Acting on the average rebound number",
              caption:
                "The corrected average R routes the member to acceptance, extra testing or repair planning.",
              start: "Average rebound number (orientation corrected)",
              branches: [
                { label: "R 40 and above", outcome: "Very good quality - spot check with UPV and accept", good: true },
                { label: "R 30 to 39", outcome: "Good quality - map uniformity and proceed", good: true },
                { label: "R 20 to 29", outcome: "Fair - suspect zone; add a UPV grid and take a core", good: false },
                { label: "R below 20", outcome: "Poor - break out, core, and plan repair", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The misuse to avoid",
              body: "Never write 'rebound hammer gives the compressive strength of the member'. It gives surface hardness of a 30 mm skin with about 25 percent scatter. The defensible sentence is: 'indicative in-situ quality and uniformity assessment, to be confirmed by UPV and core testing.'",
            },
            keyTerms: [
              { term: "Rebound number", definition: "The graduated rebound distance of the hammer mass, proportional to surface hardness of the tested zone." },
              { term: "Schmidt hammer", definition: "Spring-loaded N-type impact device (impact energy about 2.2 J) used for the rebound test." },
              { term: "Calibration curve", definition: "Chart relating rebound number to compressive strength, corrected for hammer orientation and surface condition." },
            ],
            examQuestions: [
              {
                q: "Explain the principle, procedure and limitations of the rebound hammer test as per IS 13311 (Part 2). How is the rebound number corrected and converted to strength?",
                marks: 7,
                outline: [
                  "Principle: spring-driven mass strikes plunger; rebound distance measures surface hardness.",
                  "Apparatus: type N hammer with about 2.2 J impact energy; graduated scale 10-100.",
                  "Procedure: clean surface, grid of about 12 readings, plunger normal, 20 mm clear of edges and impacts.",
                  "Reject outliers (more than about 6 from mean); correct average for orientation - horizontal, up, down.",
                  "Convert corrected R to indicative strength by calibration chart; quote plus or minus 25 percent accuracy.",
                  "Limitations: 30 mm skin only; moisture, carbonation, texture and age bias R; not for acceptance.",
                  "Good practice: pair with UPV; calibrate against cores of the same concrete.",
                ],
              },
              {
                q: "State any four factors that affect the rebound number of a concrete surface.",
                marks: 3,
              },
              {
                q: "Why is the rebound hammer called a hardness test rather than a strength test?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Ultrasonic pulse velocity test",
            body: [
              "The ultrasonic pulse velocity test measures the speed of a longitudinal stress pulse through concrete and thereby reads its interior quality, complementing the skin-only rebound hammer. An electro-acoustic transducer coupled to one face emits a pulse at about 50 kHz; a matching receiver on another face captures the first arrival, and the instrument displays the transit time to 0.1 microsecond. Pulse velocity is path length divided by transit time, and because dense, well-compacted, crack-free concrete transmits stress waves faster, velocity tracks quality: the IS 13311 (Part 1) grading runs above 4.5 km/s for excellent concrete down to below 3.0 km/s for doubtful concrete.",
              "Three coupling arrangements answer three questions. Direct transmission, with transducers on opposite faces, gives the truest velocity and the longest path and is preferred wherever both faces are accessible. Semi-direct transmission on adjacent faces suits corners and beams. Indirect transmission, both transducers on the same face, gives the weakest signal but is the only way to survey slabs with one exposed face - and, by comparing travel times across a surface crack at set spacings, to estimate crack depth. Coupling grease or grease-like couplants must fill the contact, and grid layouts average out local variation.",
              "Velocity is influenced by the member's state: saturated concrete reads faster, temperature swings matter at extremes, and reinforcement parallel to the path carries the pulse faster through steel, so bar corrections are standard. Applications are wide: homogeneity across a member, detection of honeycombing and internal cracks, estimation of strength on a velocity-strength curve, depth of surface cracks from indirect readings, and before-and-after monitoring of repairs. Like the rebound hammer, UPV is fundamentally comparative; acceptance numbers still come from cores.",
            ],
            bullets: [
              "Principle: v = path length / transit time, with 50 kHz transducers and time read to 0.1 microsecond.",
              "IS 13311 (Part 1) grading: above 4.5 km/s excellent, 3.5-4.5 good, 3.0-3.5 medium, below 3.0 doubtful.",
              "Three arrangements: direct (best, opposite faces), semi-direct (adjacent faces), indirect (same face - slabs, crack depth).",
              "Crack depth by indirect method: h = (L/2) x sqrt((t2/t1)^2 - 1), with t1 clear of the crack and t2 across it.",
              "Reinforcement parallel to the path inflates velocity through the steel - apply bar corrections.",
              "Moisture: saturated concrete reads up to several percent faster; dry and compare like with like.",
              "Roles: homogeneity, honeycombing, crack depth, strength indication, repair monitoring.",
            ],
            table: {
              caption: "Pulse velocity quality grading of concrete (IS 13311, Part 1).",
              headers: ["Pulse velocity (km/s)", "Quality grading", "Typical implication"],
              rows: [
                ["Above 4.5", "Excellent", "Dense, well-compacted, crack-free concrete"],
                ["3.5 to 4.5", "Good", "Generally sound; check isolated low points"],
                ["3.0 to 3.5", "Medium", "Questionable - possible porosity or fine cracks"],
                ["Below 3.0", "Doubtful", "Honeycombing, voids or cracked zones - investigate"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Running a UPV investigation on site",
              caption:
                "The path from coupling the transducers to a defensible quality verdict.",
              steps: [
                { label: "Prepare and couple", note: "clean faces, couplant, mark grid" },
                { label: "Measure path length L", note: "between transducer centres" },
                { label: "Record transit times", note: "grid of readings, both directions" },
                { label: "Correct", note: "moisture and rebar corrections" },
                { label: "Compute v = L/t and grade", note: "IS 13311 Part 1 bands" },
                { label: "Map results", note: "contours isolate weak zones for coring" },
              ],
            },
            callout: {
              type: "exam",
              title: "Free marks",
              body: "The grading table (4.5 / 3.5 / 3.0 km/s bands) and the crack-depth formula h = (L/2) x sqrt((t2/t1)^2 - 1) are among the most repeated numericals and statements in RGPV papers on this subject. Learn both cold, with units.",
            },
            keyTerms: [
              { term: "Pulse velocity", definition: "Path length divided by transit time of an ultrasonic pulse; measures interior quality of concrete." },
              { term: "Transit time", definition: "Time taken by the ultrasonic pulse to travel between transducer faces, read to 0.1 microsecond." },
              { term: "Indirect transmission", definition: "Both transducers on the same face; used for one-faced members and crack depth estimation." },
            ],
            examQuestions: [
              {
                q: "Explain the ultrasonic pulse velocity method: principle, the three transmission arrangements, the IS 13311 (Part 1) quality grading, and the determination of crack depth.",
                marks: 7,
                outline: [
                  "Principle: 50 kHz pulse, transit time to 0.1 microsecond, v = L/t.",
                  "Direct transmission: opposite faces, truest velocity, longest path - preferred.",
                  "Semi-direct: adjacent faces for corners and beams; note reduced path reliability.",
                  "Indirect: same face; slabs with one exposed face; weakest signal.",
                  "Grading per IS 13311 Part 1: above 4.5 excellent, 3.5-4.5 good, 3.0-3.5 medium, below 3.0 doubtful.",
                  "Crack depth: h = (L/2) x sqrt((t2/t1)^2 - 1); define t1 and t2 and the spacing L.",
                  "Applications and corrections: homogeneity, honeycombing, rebar and moisture effects.",
                ],
              },
              {
                q: "Distinguish between direct and indirect transmission in the UPV test.",
                marks: 3,
              },
              {
                q: "Why does saturated concrete show a higher pulse velocity than dry concrete?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Core testing and the structural audit",
            body: [
              "Coring is the semi-destructive referee test that settles disputes the surface tests leave open. A diamond core drill extracts a cylinder - typically 100 or 150 mm diameter with a length-to-diameter ratio near 2, and a diameter never less than three times the nominal maximum aggregate size - from locations chosen away from reinforcement (scanned first by cover meter), construction joints and regions of maximum moment. The core is trimmed, its ends prepared, and it is crushed in compression; L/D ratios other than 2 are corrected by standard factors, and the equivalent cube strength is compared against the specified grade.",
              "Interpretation needs care. Core strength of site concrete commonly runs some 10 to 15 percent below a properly cured cube of the same mix, because of drilling disturbance and site placing and curing conditions; IS 456 accounts for this with relaxed acceptance: the average equivalent cube strength of at least three cores must reach 85 percent of the specified strength, and no single core may fall below 75 percent. Cores also reveal the interior directly: phenolphthalein solution on the fresh face turns pink where concrete is still alkaline and stays colourless where carbonated, and lab slices of the core feed chloride, sulfate and petrographic analyses. Every core hole is patched the same day with non-shrink grout or micro-concrete.",
              "The structural audit assembles everything into one verdict on the whole building. It reviews documents and any change of use, walks every member, deploys NDT grids and targeted cores, restates the structural analysis with measured sections and degraded strengths, and may add a proof load test for a critical member. The audit report grades each member, states remaining capacity, lists mandatory and desirable repairs in priority order with costs, and sets the monitoring regime - the single document on which the rehabilitation contract of the remaining units is based.",
            ],
            bullets: [
              "Core diameter at least 3 x nominal maximum aggregate size; standard diameters 100 and 150 mm; preferred L/D = 2.",
              "Choose locations clear of bars (cover meter scan), joints and maximum-moment zones; avoid services.",
              "IS 456 acceptance: average of at least 3 cores at 0.85 fck or better, and no single core below 0.75 fck.",
              "Phenolphthalein on the fresh core face: pink = uncarbonated (alkaline), colourless = carbonated; measure depth.",
              "Core slices feed chloride, sulfate and petrographic testing - one hole, many answers.",
              "Patch every core hole immediately with non-shrink grout or micro-concrete and log the location.",
              "Structural audit = documents + visual + NDT + cores + re-analysis + prioritised repair programme.",
            ],
            codeExample: {
              language: "text",
              caption: "Core test report extract - bridge pier P-4",
              code: `STRUCTURE  Bridge pier P-4, substructure, grade M25
CORE       C-2: diameter 100 mm, L/D 2.0
LOCATION   mid-height, north face, clear of bars (cover meter scan)
FIELD      moisture: dry | drilling smooth, no aggregate pull-out
LAB
  density            2430 kg/m3
  crush load         214 kN -> 27.2 MPa (L/D correction 1.02 applied)
  phenolphthalein    pink to 21 mm; carbonated skin 21 mm deep
  chloride (10-20 mm slice)  0.08 percent by mass of cement
VERDICT    27.2 MPa vs fck 25 -> pass per IS 456 (0.85 x 25 = 21.3)
NOTE       carbonation front approaching bars - plan coating
PATCH      non-shrink micro-concrete placed same day`,
            },
            diagram: {
              kind: "pyramid",
              title: "The assessment ladder",
              caption:
                "Cost and invasiveness rise as you climb - move up only as far as the dispute requires.",
              tiers: [
                { label: "Proof load test", note: "decisive but rare - load the member and measure" },
                { label: "Core testing", note: "semi-destructive referee numbers" },
                { label: "NDT grids", note: "rebound hammer and UPV - fast coverage" },
                { label: "Visual survey", note: "cheapest, broadest - symptoms first" },
              ],
            },
            callout: {
              type: "warning",
              title: "Coring is damage - control it",
              body: "A core hole is a permanent wound. Never core at mid-span of a cracked beam or at a column joint, never core without a cover-meter scan, and never leave the hole unpatched overnight. The minimum defensible programme is three cores from the suspect member, reported with L/D corrections.",
            },
            keyTerms: [
              { term: "Core test", definition: "Extraction and crushing of a diamond-drilled cylinder to measure in-situ compressive strength." },
              { term: "Structural audit", definition: "A comprehensive assessment combining documents, visual, NDT, cores and analysis into a graded repair programme." },
              { term: "Proof load test", definition: "Loading a member or structure to a defined proof intensity to demonstrate adequate capacity." },
            ],
            examQuestions: [
              {
                q: "Describe core cutting and testing of hardened concrete: selection of locations, size and L/D corrections, IS 456 acceptance criteria, and the additional information a core yields.",
                marks: 7,
                outline: [
                  "When cores are needed: NDT disagreement, missing records, disputes, old structures.",
                  "Location: low-stress zones, clear of bars and joints; scan with cover meter first.",
                  "Size: diameter at least 3 x max aggregate, typically 100-150 mm; preferred L/D = 2.",
                  "Testing: trimmed and prepared ends; correct for L/D ratio; condition (as-received or saturated) standardised.",
                  "Acceptance per IS 456: average of at least 3 cores at least 0.85 fck; no core below 0.75 fck.",
                  "Bonus data: carbonation depth by phenolphthalein, chloride and sulfate slices, density, petrography.",
                  "Housekeeping: patch holes with non-shrink material; record positions in the audit report.",
                ],
              },
              {
                q: "State the IS 456 acceptance criteria for concrete quality based on core tests.",
                marks: 3,
              },
              {
                q: "What is a structural audit and what should its report contain?",
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
      title: "Repair Materials and Techniques",
      summary:
        "The material science and craft of repair: cementitious, epoxy, polymer and fiber systems; crack injection; spalling and corrosion repair; protective coatings; and shotcrete.",
      chapter: {
        number: "02",
        title: "Repair Materials and Techniques",
        intro:
          "Unit II turns diagnosis into treatment. It opens with what a repair material must satisfy - compatibility, bond, low shrinkage, durability - and the cementitious, epoxy and polymer systems that deliver it; adds fiber-reinforced and ferrocement composites for toughness; walks the crack-injection method for dormant and active cracks; sequences the complete corrosion repair; and closes with protective coatings and shotcrete, the two shields that keep repaired structures repaired.",
        inOneBreath:
          "Repair materials must be compatible, well-bonded, low-shrinkage and durable - micro-concrete and polymer-modified mortar rebuild sections, epoxies and polyurethanes fill cracks, fibers add toughness through ferrocement and FRCM; injection classifies cracks first (dormant epoxy, moving PU, wide grout) and works port to port to refusal; corrosion repair breaks out to sound steel, cleans, primes and patches while cathodic protection treats the whole member; coatings slow ingress and shotcrete rebuilds without formwork.",
        sections: [
          {
            number: "2.1",
            title: "Repair materials: cementitious, epoxy and polymer systems",
            body: [
              "A repair succeeds or fails on material selection. The repair material must be compatible with the substrate: its modulus of elasticity close enough to share stress, its thermal movement matched, chemically stable in contact, and able to bond to the prepared surface without creating a weak plane. It must be applicable at the available thickness, tolerant of site conditions, dimensionally stable - low shrinkage and creep - and durable in the same exposure as the parent concrete. No single material satisfies every job; selection is a matching exercise between defect, member, exposure and material.",
              "Cementitious systems suit large patches and jacketing. Micro-concrete, a free-flowing self-compacting blend with 5-10 mm aggregate, is poured or pumped into thin shuttered sections and reaches 40-70 MPa. Polymer-modified mortars, using acrylic or SBR latex at 10-20 percent polymer solids, are the standard patching materials: strong in tension and flexure, low in permeability and usable in thin layers. Non-shrink cement grouts fill voids under base plates. Epoxies supply the high-performance end: low-viscosity injection grouts for fine cracks, structural adhesives for bonding plates, and epoxy mortars of 60-100 MPa - stiff, brittle and temperature-limited above their glass transition.",
              "Selection follows the defect. Fine dormant cracks take low-viscosity epoxy; moving cracks take flexible polyurethane; section rebuilds take micro-concrete or polymer mortar; surface protection takes the coatings of Section 2.5; corrosion repair takes the primers and inhibitors of Section 2.4. Cost and availability discipline the choice - an imported epoxy on a remote site may be beaten by a well-executed polymer-mortar repair - and every proprietary product is checked against its data sheet for pot life, strength, modulus and application temperature before it is specified into the contract.",
            ],
            bullets: [
              "Compatibility: match modulus of elasticity, thermal expansion and chemical behaviour with the substrate.",
              "Bond: field pull-off target of at least 1.5 MPa with failure occurring in the substrate, not at the interface.",
              "Low shrinkage is non-negotiable - a shrinking patch curls and debonds at its edges.",
              "Micro-concrete: self-compacting, 5-10 mm aggregate, 40-70 MPa, for jacketing and deep sections.",
              "Polymer-modified mortar (PMC): SBR or acrylic latex at 10-20 percent polymer solids; thin patches, spalls, ferrocement.",
              "Epoxy family: injection grouts, structural adhesives and mortars; strong but stiff, brittle and heat-limited.",
              "Polyurethane: elastic grouts for moving or water-bearing cracks - a seal, not a structural bond.",
            ],
            table: {
              caption: "Common repair materials at a glance.",
              headers: ["Material", "Typical strength", "Best for", "Watch-out"],
              rows: [
                ["Micro-concrete", "40-70 MPa", "jacketing, deep patches, thin walls", "needs shuttering and a minimum pour thickness"],
                ["Polymer-modified mortar", "30-50 MPa", "shallow patches, spalls, overlays", "demands proper moist curing"],
                ["Epoxy injection grout", "50-70 MPa", "dormant cracks about 0.1-2 mm", "rigid - never for moving cracks"],
                ["PU injection grout", "flexible elastomer", "leaking and moving cracks", "water stop, not structural"],
                ["Non-shrink grout", "50-60 MPa", "voids under base plates", "pour in one continuous operation"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Cementitious family versus resin family",
              caption:
                "Two complementary chemistries - stiffness and economy on the left, performance and speed on the right.",
              left: {
                heading: "Cementitious systems",
                items: [
                  "Micro-concrete, PMC and non-shrink grouts",
                  "Modulus matches the parent concrete",
                  "Cheap, fire-resistant, thick-section friendly",
                  "Need water curing and shuttering for verticals",
                ],
              },
              right: {
                heading: "Resin systems (epoxy / PU)",
                items: [
                  "Injection grouts, adhesives, epoxy mortars",
                  "Very high early strength, gap-bridging",
                  "Bond to almost any prepared surface",
                  "Stiff, creep- and temperature-sensitive, costly",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The pull-off rule",
              body: "Judge a repair material by a pull-off test on a trial patch: if failure happens inside the substrate concrete, the bond is stronger than the parent - the best possible result. If it fails at the interface, surface preparation or primer is at fault, not the material.",
            },
            keyTerms: [
              { term: "Compatibility", definition: "Match of modulus, thermal movement, chemistry and electrochemical behaviour between repair material and substrate." },
              { term: "Micro-concrete", definition: "Free-flowing self-compacting cementitious blend with small aggregate, used for jacketing and deep repairs." },
              { term: "Polymer-modified mortar", definition: "Cement mortar improved with latex or polymer dispersion for bond, tensile strength and low permeability." },
            ],
            examQuestions: [
              {
                q: "State the requirements of an ideal repair material and compare cementitious, polymer-modified and epoxy systems with their typical applications.",
                marks: 7,
                outline: [
                  "Requirements: bond, compatibility of modulus and thermal behaviour, low shrinkage, applicable thickness, durability, economy.",
                  "Cementitious: micro-concrete and non-shrink grouts - properties, strengths and uses.",
                  "Polymer-modified mortars: latex types, thin-layer patching, advantages.",
                  "Epoxy systems: injection grouts, adhesives, mortars; strengths and stiffness.",
                  "Limitations of epoxies: glass transition temperature, fire, creep, cost.",
                  "Polyurethane: elastic grouts for moving and wet cracks.",
                  "Selection logic: map defect type and size to material; verify by data sheet and trial patch.",
                ],
              },
              {
                q: "Why must a repair material have low drying shrinkage?",
                marks: 2,
              },
              {
                q: "When is micro-concrete preferred over epoxy mortar for a repair?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Fiber-reinforced repair materials: FRC, ferrocement and FRCM",
            body: [
              "Fibers convert brittle matrices into pseudo-ductile composites. Steel, alkali-resistant glass, carbon, aramid and polypropylene fibers, dispersed at 0.5 to 2 percent by volume, bridge cracks as they form, transferring stress across the crack faces and multiplying the energy absorbed in failure. In repair work the reward is crack control and toughness: repair mortars that do not re-crack at the first movement, overlays that survive traffic vibration, and jacketing layers that hold together under seismic cycling instead of shattering.",
              "Ferrocement is the classical fiber composite of retrofitting: rich cement-sand mortar (1:2 to 1:3) applied over layers of small-diameter wire mesh - galvanised woven or welded mesh with 0.5 to 1.5 mm wires at 6 to 25 mm spacing. The result is a thin, strong plate 15 to 30 mm thick with high tensile strength, fine crack distribution and excellent moldability, ideal for jacketing columns, walls, beams and water tanks with light formwork and little added weight. Modern FRCM (fabric-reinforced cementitious matrix) systems replace the mesh with dry carbon or glass fabrics in inorganic mortar - non-combustible and temperature-tolerant where epoxy-bonded FRP is not.",
              "Fiber selection matches the job. Steel fibers, hooked and 30-60 mm long at 30-60 kg per cubic metre, toughen shotcrete for tunnel linings, slopes and jackets. Polypropylene fibers at 0.6-0.9 kg per cubic metre control plastic shrinkage and improve fire performance by melting channels for steam pressure relief. AR-glass and carbon fabrics carry real load in FRCM panels. Dosage discipline matters: too little fiber is decorative, too much kills workability and balls in the mixer. The specification fixes fiber type, dosage, aspect ratio and mixing sequence - fibers go in last to the wet mix - and verification uses residual flexural strength or panel tests, not cube crushes alone.",
            ],
            bullets: [
              "Fiber types: steel, AR-glass, carbon, aramid, polypropylene - dosed 0.5-2 percent by volume.",
              "Function: crack bridging, post-cracking residual strength, impact and abrasion resistance.",
              "Ferrocement = rich mortar + layers of wire mesh, 15-30 mm thick, light formwork, fine cracking.",
              "FRCM = dry carbon or glass fabrics in cement mortar - the fire-safe alternative to epoxy FRP.",
              "Steel fiber shotcrete at 30-60 kg/m3 for tunnels, slopes and jackets.",
              "Polypropylene at 0.6-0.9 kg/m3 controls plastic shrinkage and fire spalling.",
              "QC by residual flexural or panel toughness tests; add fibers last to the wet mix.",
            ],
            table: {
              caption: "Fibre properties (typical, product-dependent).",
              headers: ["Fibre", "Tensile strength", "Elastic modulus", "Density (g/cm3)", "Typical role"],
              rows: [
                ["Steel", "500-2000 MPa", "200 GPa", "7.85", "tough shotcrete and overlays"],
                ["AR-glass", "1400-2000 MPa", "70-75 GPa", "2.6", "FRCM fabrics, mortar reinforcement"],
                ["Carbon", "3500-5000 MPa", "230-400 GPa", "1.8", "FRCM and strengthening fabrics"],
                ["Polypropylene", "300-700 MPa", "3-8 GPa", "0.9", "plastic shrinkage and fire control"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layers of a ferrocement jacket on a column",
              caption:
                "Top to bottom as rendered - everything between mesh and substrate exists to transfer force.",
              layers: [
                { label: "Finish / curing membrane", note: "anti-carbonation coat if exposed" },
                { label: "Second mortar coat", note: "compacted and screeded" },
                { label: "Wire mesh in first coat", note: "mesh tied back to shear dowels" },
                { label: "Bonding slurry + roughened substrate", note: "doweled interface transfers shear" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three terms, one family",
              body: "Ferrocement: wire mesh in mortar. FRC: random fibers in concrete or mortar. FRCM: dry fabric in cement matrix. Examiners love asking for the difference between these three, and between FRCM and bonded FRP (which uses epoxy). One line each earns the marks.",
            },
            keyTerms: [
              { term: "Ferrocement", definition: "Thin composite of rich cement mortar and layers of small-diameter wire mesh used for repair and jacketing." },
              { term: "FRCM", definition: "Fabric-reinforced cementitious matrix - dry fiber fabrics bonded in inorganic mortar, fire-tolerant strengthening." },
              { term: "Aspect ratio (fiber)", definition: "Fiber length divided by diameter; governs bond and pull-out behaviour of the fiber in the matrix." },
            ],
            examQuestions: [
              {
                q: "Explain ferrocement as a repair and strengthening medium: composition, properties, procedure for jacketing a distressed column, and advantages with limitations.",
                marks: 7,
                outline: [
                  "Composition: rich mortar (1:2 to 1:3) plus 2-4 layers of galvanised wire mesh, 0.5-1.5 mm wires.",
                  "Mechanics: dispersed reinforcement distributes cracks finely and raises tensile capacity of the plate.",
                  "Properties: high tensile strength, ductility, impact resistance, impermeability, moldability.",
                  "Procedure: roughen and dowel the column, tie mesh with 3-5 mm gaps, apply mortar coats, cure.",
                  "Applications: column and beam jackets, walls, water tanks, sunshades.",
                  "Advantages: thin, light, cheap, minimal formwork, no heavy equipment.",
                  "Limitations: labour-intensive, mesh corrosion risk in marine exposure, limited thickness per layer.",
                ],
              },
              {
                q: "What is FRCM and when is it preferred to epoxy-bonded FRP?",
                marks: 3,
              },
              {
                q: "State typical dosages of steel and polypropylene fibers in repair concrete and what each controls.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Crack repair by injection",
            body: [
              "Injection repairs a crack by filling it with a material that restores monolithic behaviour or stops leakage - and the method begins with classification, not materials. Dormant cracks are not moving: stabilised shrinkage cracks, old thermal cracks, damage from a past overload. Active cracks open and close with live load or temperature and demand elastic materials or movement joints, never rigid resins. Width then drives the grout: as working guidance, cracks from about 0.1 to 2 mm take low-viscosity epoxy; wider cracks, roughly 2 to 6 mm, take cement or polymer grouts with fillers; and wet or moving cracks take polyurethane.",
              "Epoxy injection follows a standardised sequence. The concrete along the crack is cleaned and the crack mouth sealed over its length with fast-setting epoxy paste. Entry ports are fixed on the seal - bonded surface ports at spacings roughly equal to the member thickness, typically 100 to 300 mm - or drilled and fitted as sealed ports for deep or thick sections. Injection begins at the lowest port or one end with a low-pressure hand or machine pump, starting around 0.2 MPa and rising only as needed, moving port to port as each refuses, until resin returns at the adjacent port. After cure, ports are stripped and the face ground flush.",
              "Quality is proven, not assumed: a core drilled through the repaired crack should show resin penetrating the full depth and bonded to both faces, and UPV measured across the crack should rise sharply after repair. Gushing cracks are first dewatered, then injected with hydrophilic polyurethane that foams on contact with water and remains elastic - a water stop rather than a structural bond - with a structural epoxy stage possible once the section is dry. Where the crack must also carry shear, near-surface stitching bars or dowels are installed across it before injection. The single rule that survives every site: never inject a moving crack with rigid epoxy - it simply re-cracks alongside.",
            ],
            bullets: [
              "Classify first: dormant or active; measure width, depth and moisture; then choose the grout.",
              "Epoxy suits dormant cracks about 0.1-2 mm and restores monolithic action.",
              "Polyurethane suits water-bearing and moving cracks - foams, stays elastic, seals leaks.",
              "Cement or polymer grouts suit wide cracks above roughly 2-3 mm, gravity or pressure fed.",
              "Port spacing about equal to member thickness; inject at low pressure, about 0.2-0.35 MPa, to refusal.",
              "Verify by coring through the crack, pull-off tests or UPV across it - before and after.",
              "Never rigid-epoxy an active crack; stitch first where shear transfer is needed.",
            ],
            codeExample: {
              language: "text",
              caption: "Injection method statement for a 0.2-0.4 mm dormant column crack",
              code: `CRACK      Column C-9, vertical, 0.2-0.4 mm wide, DORMANT
           (widths stable over 6 months of monitoring)
GROUT      two-part low-viscosity epoxy, pot life 40 min at 30 deg C
SEAL       epoxy paste bead over crack, 40 mm each side
PORTS      bonded surface ports at 200 mm centres (= column width)
PRESSURE   start 0.2 MPa, refusal when the next port shows resin
SEQUENCE   lowest port upward, one port at a time
STRIP      ports removed after 24 h; grind seal flush
VERIFY     UPV across crack before/after; one core at mid-height
RECORD     port map, resin used, weather, operator, date`,
            },
            diagram: {
              kind: "flow",
              title: "Injection repair, step by step",
              caption:
                "The sequence is fixed - only the grout changes with the crack classification.",
              steps: [
                { label: "Classify the crack", note: "dormant or active; width, depth, wet or dry" },
                { label: "Choose grout", note: "epoxy / PU / cement grout per classification" },
                { label: "Seal and port", note: "paste seal; ports at about thickness spacing" },
                { label: "Inject to refusal", note: "0.2-0.35 MPa, port to port" },
                { label: "Strip and verify", note: "grind flush; core or UPV check" },
              ],
            },
            callout: {
              type: "warning",
              title: "The classic site failure",
              body: "Injecting an active crack with rigid epoxy is the textbook mistake: the crack re-opens beside the filled section within one season. Either wait until movement is resolved, introduce a movement joint, or use an elastic polyurethane designed for cyclic opening.",
            },
            keyTerms: [
              { term: "Dormant crack", definition: "A crack whose width is stable with time and will not open or close under service conditions." },
              { term: "Injection port", definition: "Bonded or drilled entry fitting through which grout is admitted into the crack." },
              { term: "Refusal", definition: "The condition when a port no longer accepts grout at working pressure - the crack is full at that point." },
            ],
            examQuestions: [
              {
                q: "Classify cracks in concrete structures and describe the epoxy injection method - porting, pressures, sequence and verification - for a dormant 0.3 mm wide crack.",
                marks: 7,
                outline: [
                  "Classification: dormant vs active; width bands; wet or dry; why classification governs the grout.",
                  "Material selection: epoxy for 0.1-2 mm dormant cracks; PU for moving or wet cracks; cement grout for wide cracks.",
                  "Preparation: clean the crack line, seal the mouth with epoxy paste.",
                  "Porting: surface ports at spacing about equal to member thickness (100-300 mm).",
                  "Injection: low pressure about 0.2-0.35 MPa, start at one end or the lowest port, move on refusal.",
                  "Finishing: strip ports after cure, grind flush, dress the surface.",
                  "Verification: core through the crack, UPV across it, pull-off; never epoxy an active crack.",
                ],
              },
              {
                q: "Why is polyurethane preferred for water-bearing cracks?",
                marks: 2,
              },
              {
                q: "How is the success of an injection repair verified on site?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Repair of spalling and corroded reinforcement",
            body: [
              "Corrosion repair attacks the most common deterioration chain in RC buildings. The assessment of Unit I - delamination survey, cover depths, carbonation and chloride profiles, half-cell potential mapping where available - marks out every zone to be treated. The repair is then a member-by-member sequence: remove distressed concrete, prepare the steel and surface, protect the reinforcement, and rebuild the section with compatible material. Executed properly it restores durability; executed cosmetically it restarts corrosion within months at the patch edges through the ring-anode effect, in which the fresh cathodic patch makes the surrounding anodic zones more active.",
              "Breakout is the hard rule: cut back to sound concrete and expose the bar fully around its circumference until rust-free steel is met, typically 15 to 25 mm behind the bar, with saw-cut square edges and no feather edges. The steel is cleaned to bright metal - wire brushing to ST2 or blasting to near-white SA 2.5 - and coated the same day with a zinc-rich primer, a cement-polymer slurry or a migrating corrosion inhibitor. Where section loss exceeds roughly 20 percent of bar area, the bar is supplemented or replaced with new bars spliced alongside. Deeper patches above about 50 mm are rebuilt with shuttered micro-concrete; shallower ones with polymer-modified mortar on a freshly brushed bonding slurry.",
              "Where chlorides remain in the surrounding concrete, the patch alone is not enough. Electrochemical rehabilitation treats the whole member: impressed-current or sacrificial cathodic protection stops corrosion by making the reinforcement cathodic, chloride extraction pulls the ions out under a temporary electric field, and re-alkalization restores alkalinity to carbonated cover. The finished patch is cured properly and the member then receives the protective coating of Section 2.5. Corrosion repair without follow-on protection is only a postponement - the audit's monitoring regime, not the patch, is what finally closes the case.",
            ],
            bullets: [
              "Assess first: delamination map, half-cell potentials, cover survey, carbonation and chloride profiles.",
              "Break out to sound concrete, 15-25 mm behind the bar, with square cut edges only.",
              "Clean steel to ST2 (brush) or SA 2.5 (blast); prime the same day with zinc-rich or inhibitive coating.",
              "Bar section loss beyond about 20 percent: add new spliced bars or replace.",
              "Patch: polymer-modified mortar up to about 50 mm depth; shuttered micro-concrete above it, on bonding slurry.",
              "Ring-anode effect: patch edges become new anodes unless the surrounding member is treated.",
              "Electrochemical options: cathodic protection, chloride extraction, re-alkalization.",
            ],
            codeExample: {
              language: "text",
              caption: "Corrosion repair method statement - column C-12",
              code: `MEMBER     Column C-12, grading 3 corrosion damage (Unit I survey)
BREAKOUT   saw-cut square perimeter; remove concrete to 25 mm
           behind bar; expose bar full circumference to sound steel
STEEL      blast to SA 2.5; assess section loss against 20 percent rule
PRIME      zinc-rich epoxy primer on bars the same day
BOND       SBR-cement bonding slurry brushed on damp substrate
PATCH      polymer-modified mortar to 50 mm depth;
           shuttered micro-concrete above 50 mm
CURING     wet hessian 7 days, then curing compound
FOLLOW-ON  silane impregnation of full column face;
           impressed-current CP if chloride profile exceeds threshold
MONITOR    re-survey with half-cell after 12 months`,
            },
            diagram: {
              kind: "cycle",
              title: "The corrosion repair loop",
              caption:
                "A repair is one turn of the wheel - the monitoring step decides whether another turn is needed.",
              steps: [
                { label: "Assess extent", note: "sounding, half-cell, cover meter, cores" },
                { label: "Break out and clean", note: "to sound steel and concrete" },
                { label: "Treat the steel", note: "primer, inhibitor, bar replacement" },
                { label: "Patch the section", note: "PMC or micro-concrete on slurry" },
                { label: "Protect the member", note: "coatings; CP if chlorides persist" },
                { label: "Monitor and re-survey", note: "feed results back to step 1" },
              ],
            },
            callout: {
              type: "warning",
              title: "The ring-anode trap",
              body: "A new patch is cathodic and oxygen-rich; the old concrete next to it becomes the anode and corrodes faster than before. This is why professional practice treats the whole member - inhibitors, coatings or cathodic protection - rather than celebrating a clean patch. Mention this effect in any corrosion-repair answer.",
            },
            keyTerms: [
              { term: "Delamination", definition: "Separation of concrete layers or cover from the core, detected by sounding, preceding spalling." },
              { term: "Cathodic protection", definition: "Electrochemical technique making reinforcement cathodic (sacrificial or impressed current) to stop corrosion." },
              { term: "Ring anode effect", definition: "Accelerated corrosion around a repaired patch caused by the new patch acting as a cathode." },
            ],
            examQuestions: [
              {
                q: "Describe the complete sequence for repairing a corrosion-damaged RC column, from assessment to protection, including the electrochemical options.",
                marks: 7,
                outline: [
                  "Assessment: delamination sounding, half-cell mapping, cover survey, chloride and carbonation depths.",
                  "Breakout: to sound concrete 15-25 mm behind the bar, square edges, full bar exposure.",
                  "Steel preparation: ST2 / SA 2.5 cleaning; priming; 20 percent section-loss rule.",
                  "Patch materials by depth: PMC up to about 50 mm, micro-concrete above; bonding slurry; curing.",
                  "Explain the ring-anode (incipient anode) effect and why patching alone fails.",
                  "Electrochemical methods: sacrificial and impressed-current CP, chloride extraction, re-alkalization.",
                  "Post-repair protection: coatings, silanes; monitoring regime.",
                ],
              },
              {
                q: "What is the ring anode (incipient anode) effect?",
                marks: 3,
              },
              {
                q: "Name the two types of cathodic protection.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Protective coatings and shotcrete",
            body: [
              "Coatings are the preventive half of rehabilitation - applied after repair, or on sound concrete, to slow the very agents that caused the damage. Barrier membranes, from cementitious slurries to epoxy and polyurethane high-build systems, keep out water, chlorides and carbon dioxide. Inhibitive primers passivate steel at the interface. Hydrophobic impregnations - silanes and siloxanes - line the capillaries, shed liquid water and still let vapour escape, so the wall breathes. Selection balances vapour permeability against resistance to chloride and CO2 diffusion, crack-bridging ability where the surface moves, and appearance where it matters.",
              "Shotcrete is mortar or small-aggregate concrete conveyed through a hose and projected pneumatically at high velocity onto a surface - repair, strengthening and new work with minimal formwork. In the dry process, historically called gunite, cement and damp sand travel in compressed air to the nozzle where water is added - the classic method for thin 25-50 mm jackets, canal and tunnel linings. In the wet process, ready-mixed concrete is pumped and accelerated at the nozzle - higher output, less rebound, the standard for large volumes. Fibers can be added to either for toughness, and accelerators allow overhead build-up.",
              "Execution details decide success. The substrate is cleaned to sound concrete, roughened, and pre-wetted; the first layer is worked hard into the surface or a bonding coat is applied. Rebound - the aggregate-rich material that bounces away - reaches 15 to 40 percent in the dry process and must never be worked back into the placed layer. Cores or cut panels verify thickness, strength and bond; pull-off tests confirm adhesion above about 1.5 MPa; and the face is cured as carefully as formed concrete. Typical applications: column and wall jackets, canal and tunnel linings, slope stabilisation, and fire encasement of steelwork.",
            ],
            bullets: [
              "Coating jobs: barrier against water, chloride and CO2; inhibitive primers; hydrophobic silane/siloxane impregnation.",
              "Breathability: water-vapour permeability must be balanced against ingress resistance - never seal a wall that needs to dry.",
              "Gunite = dry process (thin 25-50 mm work); wet-mix shotcrete = high output, lower rebound.",
              "Rebound of 15-40 percent (dry process) is wasted - never rework it into the layer.",
              "Accelerators allow vertical and overhead build-up; specify chloride-free types.",
              "QC: pull-off bond (about 1.5 MPa target), cores and panels for thickness and strength, disciplined curing.",
              "Applications: jackets, canal and tunnel lining, slope stabilisation, fire encasement.",
            ],
            table: {
              caption: "Protective coating systems and their roles.",
              headers: ["System", "Mechanism", "Best use"],
              rows: [
                ["Cementitious slurry coating", "Semi-rigid barrier, anti-carbonation", "Concrete faces, compatible and cheap"],
                ["Epoxy high-build", "Strong barrier, chemical resistant", "Floors, chemical plants, wet faces"],
                ["Elastomeric polyurethane", "Flexible, crack-bridging film", "Roofs, water-retaining surfaces"],
                ["Silane / siloxane impregnation", "Hydrophobic, penetrating, breathable", "Bridge substructures, facades"],
                ["Zinc-rich primer", "Sacrificial / inhibitive", "Steel surfaces and rebar priming"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a coating by two axes",
              caption:
                "Match the exposure to the mechanism - barrier power against the need for the wall to breathe.",
              axes: { x: "Barrier film (left) vs penetrating and breathable (right)", y: "Rigid system (top) vs crack-bridging (bottom)" },
              quadrants: [
                { label: "Epoxy high-build", note: "rigid barrier for aggressive wet or chemical exposure" },
                { label: "Silane / siloxane", note: "penetrating hydrophobe - chloride shield that breathes" },
                { label: "Elastomeric PU", note: "flexible barrier that bridges moving cracks" },
                { label: "Acrylic elastomeric", note: "breathable, mildly flexible finish for facades" },
              ],
            },
            callout: {
              type: "exam",
              title: "Gunite vs shotcrete",
              body: "A near-guaranteed short question: gunite is the dry process - water added at the nozzle, suited to thin sections and small jobs, higher rebound; shotcrete (wet process) pumps mixed concrete, giving higher output and lower rebound for large volumes. Two marks for four lines - never mix them up.",
            },
            keyTerms: [
              { term: "Gunite", definition: "Dry-process shotcrete in which water is added at the nozzle to a dry cement-sand stream." },
              { term: "Rebound (shotcrete)", definition: "Aggregate-rich material that bounces off the surface during spraying; wasted, never reworked into the layer." },
              { term: "Hydrophobic impregnation", definition: "Silane or siloxane treatment that lines capillaries to shed liquid water while remaining vapour-permeable." },
            ],
            examQuestions: [
              {
                q: "Differentiate the dry (gunite) and wet shotcrete processes, and describe the application and quality control of shotcrete for jacketing a column.",
                marks: 7,
                outline: [
                  "Definition: concrete or mortar projected pneumatically at high velocity, minimal formwork.",
                  "Dry process: constituents conveyed dry, water at nozzle; 25-50 mm thin work; rebound 15-40 percent.",
                  "Wet process: pumped mixed concrete, accelerator at nozzle; output, rebound, uses.",
                  "Substrate preparation: clean to sound concrete, roughen, pre-wet, dowels or mesh for jackets.",
                  "Execution: layered build-up, thickness guides, nozzle angle and distance, discard rebound.",
                  "QC: cores and panels for thickness, strength and bond; pull-off tests; curing.",
                  "Applications and limitations: jackets, tunnels, canals, slopes; dust, rebound, nozzleman skill.",
                ],
              },
              {
                q: "State the functions of a protective coating system on repaired concrete.",
                marks: 3,
              },
              {
                q: "What is rebound in shotcrete and why must it never be reworked into the placed layer?",
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
      title: "Strengthening Techniques",
      summary:
        "Raising capacity rather than just restoring it: section enlargement and jacketing, steel plate bonding, FRP wrapping, external prestressing, NSM reinforcement, steel bracing and underpinning.",
      chapter: {
        number: "03",
        title: "Strengthening of Structures",
        intro:
          "Unit III moves from repair to upgrade - members that must carry more than they were designed for. Section enlargement and concrete jacketing add passive material; steel plate bonding and FRP laminates add bonded reinforcement; external prestressing is the one active system; NSM bars hide in cover grooves; steel bracing adds a lateral load path; and underpinning extends foundations. Every technique is judged by the capacity it adds, the disruption it causes, and the global consequences of a stiffer, stronger member.",
        inOneBreath:
          "Strengthening stacks by invasiveness: FRP wraps confine columns with fabric, steel plates bond to tension faces, NSM bars sit in cover grooves, external prestressing actively adds force and closes cracks, section enlargement and jacketing add concrete and steel with full load-path detailing, bracing inserts a lateral system, and underpinning deepens foundations - always completing the load path and checking stiffness, mass and foundation consequences.",
        sections: [
          {
            number: "3.1",
            title: "Section enlargement and concrete jacketing",
            body: [
              "Section enlargement raises capacity directly: more concrete and steel mean more axial, flexural and shear strength, and a stiffer member. A reinforced concrete jacket around a column adds strength, stiffness, ductility when properly confined, and fire cover - at the cost of added weight and lost floor area. Indian practice fixes the essentials: a jacket thickness of about 100 mm or more, new longitudinal bars anchored into the foundation and carried through the slabs by drilling for continuity, and closed ties that confine the composite core. The load path is completed first, then material is added around it.",
              "The sequence matters as much as the cage. Wherever possible the column is propped and relieved of live load before jacketing, so that old and new concrete strain together under the restored load; a jacket cast around a fully loaded column carries only future incremental load. Finishes are stripped, the surface roughened to expose aggregate, and dowels epoxy-anchored on a 300-500 mm grid to transfer interface shear. The cage is fixed with spacers, and the jacket is filled with micro-concrete poured through slab pockets and vibrated in lifts, or built up by shotcrete in layers. Curing is long and disciplined.",
              "Analysis treats the jacket as a composite: aggregate interlock, dowels and roughness transfer shear, strains are compatible, and strengths add. The designer must also check what the retrofit does to the rest of the structure: a jacketed column is stiffer and attracts more seismic force, the additional axial load travels into footings that may need underpinning (Section 3.5), and the added mass slightly changes the dynamic response. Where shuttering or headroom rules out concrete, steel jacketing - angles at the corners with welded batten plates - delivers comparable confinement with far faster site work.",
            ],
            bullets: [
              "Gains: axial, flexural and shear capacity, plus stiffness, ductility and fire cover.",
              "Geometry: jacket about 100 mm or thicker; longitudinal bars anchored into footings, drilled through slabs for continuity.",
              "Load sharing: prop and relieve load first - a jacket on a loaded column only takes future increments.",
              "Interface: roughen to exposed aggregate plus epoxy dowels at 300-500 mm centres plus bonding slurry.",
              "Materials: free-flowing micro-concrete through slab pockets, or shotcrete in layers; long wet curing.",
              "Knock-on checks: stiffer column attracts seismic force; footings and added mass must be rechecked.",
              "Alternative: steel jacket of corner angles and battens where speed or access rules out concrete.",
            ],
            table: {
              caption: "Jacketing essentials for a column (typical Indian practice).",
              headers: ["Element", "Typical specification", "Reason"],
              rows: [
                ["Jacket thickness", "about 100 mm minimum", "bar cover, placement and compaction of concrete"],
                ["Longitudinal bars", "12-16 mm, through drilled slabs, anchored in footing", "continuity of the load path"],
                ["Transverse ties", "8-10 mm closed ties, closer at member ends", "confinement and ductility"],
                ["Interface", "roughened surface + dowels + slurry", "shear transfer between old and new"],
                ["Fill material", "micro-concrete 40+ MPa or shotcrete", "low shrinkage, self-compacting fill"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Strengthening options ordered by invasiveness",
              caption:
                "Top = least intrusive, fastest, smallest gain in stiffness; bottom = biggest capacity gain and biggest disruption.",
              tiers: [
                { label: "FRP wrapping", note: "millimetres thick, no added mass to speak of" },
                { label: "Plate bonding / NSM", note: "bonded steel or rods in the cover" },
                { label: "External prestressing", note: "active system, needs anchors and deviators" },
                { label: "Section enlargement", note: "largest capacity and stiffness gain, full formwork" },
              ],
            },
            callout: {
              type: "warning",
              title: "The load-sharing trap",
              body: "Jacket a column that stays loaded and the new concrete remains almost unstressed - it only picks up future load increments. For real sharing, prop the structure and relieve the column before casting. Examiners ask this exact question: 'why is a jacketed column not fully composite immediately?'",
            },
            keyTerms: [
              { term: "Jacketing", definition: "Encasing an existing member in new reinforced concrete, steel or FRP to increase its capacity." },
              { term: "Dowel", definition: "Short bar epoxy-anchored across an interface to transfer shear between old and new concrete." },
              { term: "Composite action", definition: "Strain-compatible load sharing between substrate and jacket enabled by bond, dowels and roughness." },
            ],
            examQuestions: [
              {
                q: "Describe RCC jacketing of a distressed column: materials, detailing, construction sequence and design considerations including load sharing.",
                marks: 7,
                outline: [
                  "When chosen: strength, stiffness or ductility deficit without space or programme constraints.",
                  "Geometry and detailing: about 100 mm jacket, 12-16 mm bars through slabs, closed ties closer at ends.",
                  "Anchorage: new bars tied into footing enlargement; dry-packed slab holes.",
                  "Interface treatment: roughening, dowels at 300-500 mm, bonding slurry.",
                  "Sequence: prop and unload, fix cage, cast micro-concrete through pockets or shotcrete, cure.",
                  "Load sharing: strain compatibility; why an unloaded jacket shares from the start.",
                  "Global checks: stiffness attracts seismic force, foundation capacity, added mass; steel jacket alternative.",
                ],
              },
              {
                q: "Why are dowels provided at the old-new concrete interface of a jacket?",
                marks: 2,
              },
              {
                q: "State two drawbacks of section enlargement compared with FRP wrapping.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Steel plate bonding",
            body: [
              "Steel plate bonding strengthens a beam or slab by gluing steel to its tension face with epoxy adhesive - external reinforcement added after the concrete has cured. Plates 3 to 6 mm thick and 50 to 150 mm wide act as extra tension steel: flexural capacity rises almost in proportion to plate area until bond or concrete controls. The adhesive layer, typically 1.5 to 3 mm, transfers shear between plate and concrete, and the plated section is analysed with strain compatibility exactly like an RC section. The governing limit states are plate yield and concrete crushing - plus the two failures special to the method: peel at the plate cut-off and shear failure of the cover along the glue line.",
              "Success is decided by surface preparation. Concrete is ground or grit-blasted to expose sound aggregate and freed of dust, laitance and grease; steel is blasted to near-white, degreased and fitted the same day. Two-part structural epoxy is applied to both faces, the plate is pressed on with props and wedges so the glue line squeezes to a uniform 1.5 to 3 mm, and surplus is struck off at the edges. Anchor bolts at intervals - and always near the plate ends - add peel resistance and hold the plate safely while the adhesive cures. Full design strength is assumed only after the specified cure time.",
              "The virtues are speed and silence: plates are prefabricated and installed without closing the floor below, with negligible headroom loss and little added weight. The weaknesses are equally clear: the epoxy softens above its glass transition temperature of roughly 60 to 80 degrees C, so fire protection is mandatory; plate ends must be anchored or tapered to suppress peel; surfaces must be dry and sound for bonding; and the adhesive creeps under sustained high stress, so bond stresses are kept low. For aggressive exposure or heavier demands, the FRP systems of the next section or external prestressing take over.",
            ],
            bullets: [
              "Principle: plate = external tension reinforcement on the soffit; 1.5-3 mm epoxy glue line.",
              "Plates 3-6 mm thick, prefabricated with anchor holes drilled before blasting.",
              "Preparation decides everything: concrete to sound aggregate; steel to SA 2.5, degreased, bonded same day.",
              "Props and wedges press the plate until the adhesive cures; bolts at ends resist peel.",
              "Failure modes: plate yield, concrete crushing, peel at cut-off, cover shear along the glue line.",
              "Fire: epoxy glass transition roughly 60-80 deg C - insulate or encase the plate.",
              "Adhesive creep under sustained stress - keep computed bond stresses low.",
            ],
            codeExample: {
              language: "text",
              caption: "Plate bonding work order - beam B-4",
              code: `BEAM       B-4, first-floor frame beam, span 6 m, soffit access
PLATE      mild steel 5 x 125 mm, length 5.2 m, two plates
PREP       concrete: grit blast to ST3, vacuum dust, verify dry
           steel: blast to SA 2.5, degrease, fit the same day
ADHESIVE   two-part structural epoxy, target glue line 2 mm
ANCHORS    12 mm chemical anchors at 400 mm centres
           plus two at each end, 100 mm in from the cut-off
PRESSURE   timber props with wedges at 1 m centres, 48 h
FIRE       25 mm board encasement fixed after cure
INSPECT    tap survey after 7 days - hollows re-injected
RECORD     batch numbers, ambient temperature, operator`,
            },
            diagram: {
              kind: "compare",
              title: "Plate bonding: why it wins, where it bites",
              caption:
                "The method's advantages and its four classic failure modes - both lists are exam material.",
              left: {
                heading: "Why plate bonding wins",
                items: [
                  "Fast: prefabricated plates, short cure",
                  "No loss of headroom - about 6 mm total",
                  "Negligible added dead weight",
                  "Standard RC analysis with extra steel",
                ],
              },
              right: {
                heading: "Where it bites",
                items: [
                  "Peel failure at plate cut-off - anchor the ends",
                  "Epoxy softens at 60-80 deg C - fireproof it",
                  "Adhesive creeps under sustained stress - limit bond stress",
                  "Dry, sound substrate essential - moisture kills bond",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The viva favourite",
              body: "Peel failure: at the plate's cut-off, the force in the plate must transfer into the concrete over a short anchorage length, creating a concentrations of peel and shear stress that can rip the cover off. The fix - end anchors or tapered plates - is worth naming in any answer on plate bonding.",
            },
            keyTerms: [
              { term: "Peel stress", definition: "Out-of-plane stress concentration at a bonded plate's cut-off that can split the cover concrete." },
              { term: "Glue line", definition: "The controlled 1.5-3 mm layer of epoxy adhesive between plate and substrate." },
              { term: "Glass transition temperature", definition: "Temperature (about 60-80 deg C for structural epoxies) above which the adhesive softens and loses strength." },
            ],
            examQuestions: [
              {
                q: "Explain steel plate bonding for strengthening an RC beam: principle, procedure, failure modes and precautions.",
                marks: 7,
                outline: [
                  "Principle: bonded plate acts as external tension reinforcement; glue line transfers shear.",
                  "Typical materials: 3-6 mm plates, two-part structural epoxy, 1.5-3 mm glue line.",
                  "Design: strain compatibility; check plate yield, concrete crushing, peel and glue-line shear.",
                  "Procedure: blast and clean both faces, apply adhesive, press with props, fix anchors, cure.",
                  "Failure modes: peel at cut-off, cover shear along the bond, fire softening, creep.",
                  "Precautions: end anchors or tapers, fire protection, dry substrate, low sustained bond stress.",
                  "When chosen: speed and headroom constraints; alternatives - FRP, external prestressing.",
                ],
              },
              {
                q: "Why are anchor bolts provided near the ends of a bonded plate?",
                marks: 2,
              },
              {
                q: "State any three limitations of steel plate bonding.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "FRP wrapping and strengthening",
            body: [
              "Fibre-reinforced polymer strengthening bonds carbon, glass or aramid fibres in an epoxy matrix to the outside of a member - the highest strength-to-weight ratio and the least intrusive of the strengthening family. Dry fabric is saturated with epoxy on site in wet lay-up, or factory-made plates are adhesive-bonded, or prefabricated shells wrap a column in one operation. Carbon systems deliver tensile strengths of 600 to 1000 MPa at design level with moduli from about 70 GPa (standard fabric) to well over 200 GPa (plates); glass is cheaper and more forgiving; aramid resists impact.",
              "Mechanics differ by task. Hoop-direction wrapping confines a column: the jacket passively restrains lateral dilation, raising compressive strength and, far more importantly, ductility - a wrapped column survives deformations that would crush plain concrete. Flexural strengthening runs fibres along the tension face parallel to the span; shear strengthening uses U-wraps or full wraps around the web at a spacing. Design limits fibre strain to well below rupture - typically a fraction of a percent - and checks debonding, the method's signature failure, in which the composite tears the cover concrete off at cracks and at fibre ends unless anchorage or development length is provided.",
              "Site procedure resembles plate bonding at higher speed: grind to sound concrete, round corners to at least 20 mm because fibres cannot turn a sharp edge, prime, fill voids with putty, lay saturant, press the fabric, roll out entrapped air, and repeat layers with specified overlaps. A final coat protects against UV and impact. Quality checks include tap-sounding for voids, pull-off tests and witness coupons cured alongside the work. The standing caution is fire: the epoxy matrix softens near its glass transition, so exposed FRP needs insulation, fireproof boarding, or an explicitly reduced fire-case capacity.",
            ],
            bullets: [
              "Forms: wet lay-up fabric, pultruded plates, prefabricated shells; CFRP, GFRP, AFRP families.",
              "Column wrap: passive confinement raises both strength and, decisively, ductility.",
              "Flexural use: fibres along the tension face; shear use: U-wraps at spacing along the span.",
              "Design strain limits well below fibre rupture; debonding governs at ends and cracks.",
              "Execution: round corners to 20 mm or more; prime and putty; roll out all air; overlap layers.",
              "Fire: matrix softens near its glass transition - insulate or accept reduced fire-case capacity.",
              "QC: tap survey for voids, pull-off tests, cured witness coupons.",
            ],
            table: {
              caption: "Strengthening options compared (qualitative).",
              headers: ["Aspect", "FRP wrap/plate", "Steel plate", "Concrete jacket"],
              rows: [
                ["Added weight", "negligible", "low", "high"],
                ["Installation speed", "fastest", "fast", "slow"],
                ["Strength gain", "high in tension/shear, confinement for columns", "moderate flexural", "high plus stiffness"],
                ["Stiffness gain", "small (thin layers)", "moderate", "large"],
                ["Fire behaviour", "matrix softens - protect", "epoxy softens - protect", "good"],
                ["Corrosion", "none", "needs painting", "none"],
                ["Relative cost", "high material, low labour", "medium", "low material, high labour"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "FRP wrap of a column, start to finish",
              caption:
                "Wet lay-up on a column - the sequence that exam answers should mirror.",
              steps: [
                { label: "Prepare surface", note: "grind to sound concrete; round corners 20 mm min" },
                { label: "Prime and putty", note: "seal pores; fill bugholes for continuous bond" },
                { label: "Saturate and wrap", note: "epoxy-wet fabric, hoop direction, overlap" },
                { label: "Roll out air", note: "no voids under the fibre" },
                { label: "Cure and coat", note: "topcoat for UV; fire board where required" },
              ],
            },
            callout: {
              type: "warning",
              title: "FRP and fire",
              body: "The fibres survive heat; the epoxy matrix does not. Above roughly 60-100 deg C the resin softens and the composite loses most of its capacity. In exam answers, always add one line: exposed FRP strengthening requires fire insulation or a design check at reduced fire-case capacity.",
            },
            keyTerms: [
              { term: "CFRP", definition: "Carbon fibre reinforced polymer - the strongest, stiffest and most common FRP strengthening system." },
              { term: "Confinement", definition: "Passive lateral restraint of concrete (as by an FRP hoop wrap) that raises strength and ductility." },
              { term: "Debonding", definition: "Loss of bond between FRP and substrate, tearing the cover at cracks or fibre ends - the governing failure mode." },
            ],
            examQuestions: [
              {
                q: "Explain FRP strengthening of RC columns: materials, the confinement mechanism, wrapping procedure and design/execution precautions.",
                marks: 7,
                outline: [
                  "Materials: fibre types and forms; typical strengths and moduli of CFRP and GFRP.",
                  "Confinement mechanics: wrap restrains dilation, raises strength and ductility; hoop orientation.",
                  "Procedure: surface prep, corner rounding 20 mm, primer, putty, saturant, wrapping, rolling, cure.",
                  "Other uses in brief: flexural sheets on tension face; U-wraps for shear.",
                  "Design limits: fibre strain caps; debonding at ends and cracks; anchorage provisions.",
                  "Precautions: moisture, UV topcoat, fire protection at matrix glass transition.",
                  "QC and acceptance: tap survey, pull-off, witness coupons; comparison with plates and jackets.",
                ],
              },
              {
                q: "Distinguish CFRP and GFRP for retrofit work.",
                marks: 3,
              },
              {
                q: "Why must corners be rounded before FRP wrapping?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "External prestressing and NSM reinforcement",
            body: [
              "External prestressing is the only strengthening method that is active rather than passive. Tendons stressed by jacks press on the structure, adding a force and a balancing moment that directly increases capacity while closing existing cracks and lifting sagging deflections at the same time. Strands or bars run outside the section between anchorages at the ends of the member, deviated at intermediate saddles; the eccentric compression creates a moment opposite to the applied loads. It is the classic remedy for long-span bridge girders and heavily loaded industrial beams, where bonded reinforcement would be too heavy or too slow to act.",
              "The system needs anchorage blocks, deviator saddles and often new corbels bolted or cast onto the existing member; the forces at these points are large and must check out against the host concrete's local bearing and shear capacity. Tendons are stressed in stages with calibrated jacks, elongation and gauge pressure cross-checked at every stage, then locked off at roughly 60 to 70 percent of ultimate and protected - sheathed, greased or grouted - against corrosion and vandalism. Losses are estimated as in new construction: anchor set, friction at deviators, relaxation and, for external unbonded tendons, minimal member shortening.",
              "Near-surface mounted (NSM) reinforcement is the discreet sibling. Grooves about 1.5 to 2 times the bar diameter are sawn in the cover concrete, cleaned, half-filled with epoxy or cement grout, FRP rods or small steel bars are inserted, and the groove is filled. Bond is excellent because the bar sits inside the protected cover, and the system is far more durable in fire and mechanical abuse than surface-bonded sheets or plates, at the cost of some cutting and dust. NSM suits slabs and beams where exposed laminates would be damaged, painted over, or aesthetically unacceptable.",
            ],
            bullets: [
              "Active strengthening: prestress adds a balancing moment immediately, closes cracks, recovers deflection.",
              "Components: end anchorages, deviator saddles, strand or bar tendons, calibrated jacks.",
              "Stress to about 60-70 percent of ultimate; cross-check elongation against gauge pressure at each stage.",
              "Local checks: bearing and shear at anchors and deviators of the host member.",
              "Protection: sheathing, grease or grout; external tendons stay inspectable for life.",
              "NSM: grooves 1.5-2 x bar size in the cover, filled with grout or epoxy after bar insertion.",
              "NSM merits: protected bond, better fire and impact behaviour, near-invisible finish.",
            ],
            codeExample: {
              language: "text",
              caption: "External post-tensioning design note - bridge girder",
              code: `GIRDER     RC T-beam, span 20 m, mid-span deflection 18 mm
SYSTEM     2 external tendons of 3 strands each, 15.2 mm,
           7-ply low-relaxation (1860 MPa grade)
GEOMETRY   harped over two deviators at third points;
           max eccentricity 350 mm below the soffit
STRESS     jack to 0.65 x ultimate; record elongation
           per stage; lock off after anchor-set check
HARDWARE   cast-in anchor blocks (micro-concrete),
           steel deviator saddles, HDPE sheathing
CHECKS     local bearing at anchor blocks;
           shear check at deviator sections
EXPECTED   deflection recovery about 12 mm;
           crack widths reduce by about half
MONITOR    force check via lift-off test after 1 year`,
            },
            diagram: {
              kind: "cycle",
              title: "External prestressing execution loop",
              caption:
                "Each turn of the loop adds or restores force - monitoring feeds back into restressing decisions.",
              steps: [
                { label: "Fix anchors and deviators", note: "cast or bolt hardware to the host member" },
                { label: "String the tendons", note: "set path; measure expected friction" },
                { label: "Jack in stages", note: "force vs elongation cross-checked" },
                { label: "Lock off and protect", note: "wedges, sheathing, grout" },
                { label: "Monitor force", note: "lift-off checks; restress if losses run high" },
              ],
            },
            callout: {
              type: "exam",
              title: "Active vs passive",
              body: "One sentence earns easy marks: jacketing, plates and FRP are passive - they only carry load as the structure strains further; external prestressing is active - it applies force to the structure immediately, closing cracks and lifting deflection without waiting for additional load.",
            },
            keyTerms: [
              { term: "External prestressing", definition: "Post-tensioning applied by tendons outside the member section to actively strengthen and straighten it." },
              { term: "Deviator", definition: "Saddle that changes the tendon path at intermediate points, generating transverse forces on the member." },
              { term: "NSM reinforcement", definition: "Near-surface mounted bars or rods inserted into sawn cover grooves filled with grout or epoxy." },
            ],
            examQuestions: [
              {
                q: "Explain external post-tensioning as a strengthening technique: principle, components, installation, and its advantages over jacketing.",
                marks: 7,
                outline: [
                  "Principle: active system - eccentric prestress adds a counter-moment immediately.",
                  "Components: anchorages, deviators, tendons (strands or bars), jacking equipment.",
                  "Installation: fix blocks and saddles, string tendons, stage stressing, lock off, protect.",
                  "Stress level and losses: jack to 60-70 percent ultimate; anchor set, friction, relaxation.",
                  "Local design: bearing and shear at anchors and deviators of existing concrete.",
                  "Advantages: immediate effect, crack closure, no added section, no headroom loss, inspectable.",
                  "Limitations: anchor zones, protection needs, specialist labour and equipment.",
                ],
              },
              {
                q: "What is NSM strengthening? State two merits over bonded surface plates.",
                marks: 3,
              },
              {
                q: "Why is external prestressing called an active strengthening technique?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Steel bracing and underpinning",
            body: [
              "Steel bracing retrofits a frame against lateral loads by inserting a stiff, ductile diagonal load path between floors. Concentric bracing - X, V or inverted-V patterns whose axes meet at joint centres - adds stiffness and strength quickly with light members bolted or welded to connection plates anchored chemically into the existing frame. Eccentric bracing deliberately offsets the diagonals so a short link beam segment yields in shear, dissipating energy without abandoning gravity support. Bracing cuts storey drift sharply and channels seismic force down to the foundations - which usually then need strengthening themselves.",
              "Underpinning strengthens the foundation, extending it to deeper bearing or adding new support between existing footings. Pit (mass concrete) underpinning, the traditional method, excavates alternate bays about 1 to 1.2 m wide beneath the footing and fills each with concrete, stage by stage, until the whole footing rests on a deeper stratum; the final gap to the old footing is dry-packed. Pile underpinning - mini-piles installed by compact rigs in restricted headroom and linked to the structure through needle beams - handles heavier loads, high water tables and urban sites. Jet grouting and compaction grouting strengthen the soil mass itself without touching the footing.",
              "Both operations are high-risk and sequence-driven. Shoring and needling support the structure before any existing support is removed; excavation proceeds in small alternate bays, never as a continuous run; every stage is monitored for settlement with precise levels, tell-tales and crack gauges; and groundwater control stays ahead of the dig. The completed work is proved by load tests on piles or plate tests on the new stratum, and the full sequence record - stages, levels, concrete batches - becomes part of the building's rehabilitation file.",
            ],
            bullets: [
              "Concentric bracing: X / V / inverted-V - stiff, economical, field-bolted connections.",
              "Eccentric bracing: the link beam yields - ductile, stable energy dissipation.",
              "Connection design: base plates and chemical anchors must deliver big forces into existing members.",
              "Pit underpinning: alternate 1-1.2 m bays, mass concrete, dry-pack the final gap.",
              "Mini-piles with needle beams for restricted access, heavy loads, high water table.",
              "Grouting routes (jet, compaction) improve soil beneath footings without excavation.",
              "Golden rules: shore first; alternate bays only; monitor settlement continuously.",
            ],
            table: {
              caption: "Underpinning methods compared.",
              headers: ["Method", "Best when", "Key caution"],
              rows: [
                ["Mass concrete pit underpinning", "shallow footings, dry soil, good access", "slow; alternate bays only"],
                ["Mini-piles + needle beams", "restricted headroom, heavy loads, urban sites", "needle design and load transfer detailing"],
                ["Jacked piles", "immediate load transfer needed (clays)", "calibrate jack resistance; verify capacity"],
                ["Jet / compaction grouting", "soil improvement without excavation", "control heave; verify by post-treatment tests"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing an underpinning route",
              caption:
                "The site conditions route the decision - and one branch is the failure case.",
              start: "Existing footing is failing or must carry more",
              branches: [
                { label: "Competent stratum 1.5-2 m down, dry, good access", outcome: "Pit (mass concrete) underpinning in alternate bays", good: true },
                { label: "Restricted headroom, heavy loads, urban site", outcome: "Mini-piles with needle beams reach a deeper stratum", good: true },
                { label: "High water table in silts and sands", outcome: "Jacked piles or jet grouting under controlled dewatering", good: true },
                { label: "Excavate the full length under the wall at once", outcome: "Loss of bearing, settlement or collapse - never", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The underpinning cardinal rule",
              body: "Never open more than a fraction of the wall's support at a time - typically alternate bays of about 1 to 1.2 m, cured and packed before the neighbours are touched. Sequential excavation is what separates underpinning from undermining. Write this rule in any underpinning answer.",
            },
            keyTerms: [
              { term: "Underpinning", definition: "Strengthening or deepening an existing foundation by staged excavation, piling or grouting." },
              { term: "Needle beam", definition: "Beam inserted through or under a wall to transfer its load temporarily or permanently to new supports." },
              { term: "Mini-pile", definition: "Small-diameter pile installed with compact equipment in restricted access and headroom." },
            ],
            examQuestions: [
              {
                q: "What is underpinning? Describe the pit (mass concrete) method and the mini-pile method, with the precautions that must be observed.",
                marks: 7,
                outline: [
                  "Definition and the situations that demand underpinning.",
                  "Pit method: alternate bays 1-1.2 m, stage excavation, mass concrete, dry-pack the gap, proceed bay to bay.",
                  "Mini-pile method: compact rigs, restricted headroom, needles to transfer wall load, load testing.",
                  "Precaution: shoring and needling before any support is removed.",
                  "Precaution: alternate bays only; never a continuous trench.",
                  "Monitoring: precise levels, tell-tales, crack gauges; groundwater control ahead of the dig.",
                  "Verification and records: load tests, as-built sequence documentation.",
                ],
              },
              {
                q: "Differentiate concentric and eccentric steel bracing as retrofit measures.",
                marks: 3,
              },
              {
                q: "Why must underpinning proceed in alternate bays?",
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
      title: "Seismic Retrofitting",
      summary:
        "Retrofitting against earthquakes: deficiency patterns - soft storey, short column, weak joints - and their fixes: RCC jacketing per IS 15988, steel bracing, strengthened infill, base isolation, and the code lessons of the 2001 Bhuj earthquake.",
      chapter: {
        number: "04",
        title: "Seismic Retrofitting of Structures",
        intro:
          "Unit IV applies the strengthening toolkit to the seismic problem. It opens with the deficiency catalogue of Indian building stock - soft storeys, short columns, weak beam-column joints, torsion and pounding - then prescribes: RC jacketing to IS 15988 with confinement detailing, steel bracing and strengthened infill for stiffness, base isolation for decoupling, and the IS 1893 / IS 13920 code framework, all anchored by the case-study lessons of the 2001 Bhuj earthquake.",
        inOneBreath:
          "Seismic deficiency has a catalogue: soft storeys concentrate drift into storey mechanisms, short columns fail in brittle shear, weak joints fail before their members, torsion and pounding add plan problems; RC jacketing per IS 15988 adds strength, stiffness and ductility with closed 135-degree ties at confinement zones; bracing and strengthened infill add stiffness cheaply; base isolation lengthens the period so the superstructure stays elastic; and the Bhuj 2001 earthquake - soft-storey collapses in Ahmedabad, zone revisions, screening programmes and IS 13920 detailing - converted lessons into codes.",
        sections: [
          {
            number: "4.1",
            title: "Seismic deficiencies: soft storey, short column, weak joints",
            body: [
              "Most Indian buildings predate modern seismic codes or were built without them: RC frames before the ductile detailing mandate, and masonry without the bands and through-stones of IS 4326. The deficiency catalogue is now standard. The soft storey - typically an open ground floor used for parking - is far less stiff than the infilled storeys above, so the whole building's drift concentrates there and a storey mechanism forms after the columns yield. The short column is created when a partial wall, parapet or opening restrains part of a column's clear height, making it stiff, force-hungry and brittle in shear. Weak beam-column joints - open 90-degree ties, short development lengths - fail before the members they connect, inverting the hierarchy.",
              "Torsion and pounding join the list for irregular buildings. An asymmetric plan rotates the structure about its stiff edge, driving corner columns to their drift limit first; buildings separated by too little gap hammer each other across the joint. The soft-storey pattern was photographed across Ahmedabad after the 2001 Bhuj earthquake, hundreds of kilometres from the epicentre: open-ground-storey apartment blocks collapsed onto their own ground floors while the upper, infilled storeys survived above the wreckage. Short columns break in diagonal shear at restrained window mullions and beneath mezzanine walls; floating columns land upper-storey loads on transfer beams never designed for them.",
              "Assessment proceeds from screening to analysis. Rapid Visual Screening (RVS) scores a building from the street - occupancy, irregularity, soft storey, apparent condition - to decide whether a detailed evaluation is warranted; the detailed evaluation computes demand-to-capacity ratios member by member per IS 1893 and checks the hierarchy: beams should yield before columns, and joints should stay elastic. The deficiency list then drives retrofit selection: soft storey - add bracing or infill at ground level or jacket the columns; short column - relieve the restraint or jacket the member; weak joints - jacket the joint region itself.",
            ],
            bullets: [
              "Soft storey: open ground floor with stiffness far below the storeys above - drift concentration, storey mechanism.",
              "Short column: partial restraint of clear height (infill, parapet, opening) - stiff, brittle diagonal shear failure.",
              "Weak joints: 90-degree open ties, short anchorage - the joint fails before its members.",
              "Floating columns on transfer beams and vertical irregularities break the load path.",
              "Plan irregularity causes torsion; inadequate separation causes pounding between adjacent blocks.",
              "Pre-code stock: RC frames before ductile detailing (IS 13920 era); masonry without bands (IS 4326).",
              "Screening path: RVS score first, then detailed evaluation with demand-capacity ratios and hierarchy checks.",
            ],
            table: {
              caption: "Deficiency to retrofit mapping.",
              headers: ["Deficiency", "Failure mode", "First-choice retrofit"],
              rows: [
                ["Soft storey", "drift concentration; storey mechanism", "ground-floor bracing or infill plus column jackets"],
                ["Short column", "brittle diagonal shear", "relieve the restraint (slot) or jacket the column"],
                ["Weak beam-column joint", "joint shear failure before members", "joint-region jacketing or haunch plates"],
                ["Floating column", "load path discontinuity at transfer level", "strengthen transfer beam, add supports"],
                ["Torsion", "corner columns drift to limit first", "add stiffness on the flexible side"],
                ["Pounding", "impact at separation joints", "widen the gap or merge movement with? use proper joint"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Screening the building stock",
              caption:
                "Geometry against capacity routes a building to its retrofit priority.",
              axes: { x: "Regular geometry (left) vs irregular (right)", y: "Weak capacity (top) vs adequate capacity (bottom)" },
              quadrants: [
                { label: "Irregular and weak", note: "priority 1 - full retrofit programme" },
                { label: "Irregular but strong", note: "fix geometry effects: torsion braces, pounding gap" },
                { label: "Regular but weak", note: "member strengthening: jackets and joint detailing" },
                { label: "Regular and strong", note: "monitor; re-screen every few years" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch expected",
              body: "The soft storey answer almost always carries drawing marks: an elevation with an open ground storey, drift arrows concentrated at the first floor, and a small force-deformation loop showing the storey mechanism. Practise the elevation once and reuse it - label the weak storey explicitly.",
            },
            keyTerms: [
              { term: "Soft storey", definition: "A storey whose lateral stiffness is substantially lower than the storey above, attracting and concentrating drift." },
              { term: "Short column", definition: "A column whose effective deformable length is reduced by restraint, making it stiff and shear-critical." },
              { term: "Pounding", definition: "Collision of adjacent buildings across an inadequate separation joint during earthquake shaking." },
            ],
            examQuestions: [
              {
                q: "Explain the soft storey and short column effects in seismic RC buildings, their failure mechanisms, and the retrofit measures for each.",
                marks: 7,
                outline: [
                  "Soft storey definition: stiffness irregularity; typical cause - open ground floor for parking.",
                  "Mechanism: storey drift concentrates in the weak level; columns yield, form a storey mechanism, collapse.",
                  "Reference pattern: Ahmedabad apartment collapses in the 2001 Bhuj earthquake.",
                  "Soft storey retrofits: add infill or bracing at ground level, or jacket columns for strength and ductility.",
                  "Short column definition: restraint from partial infill, parapets or openings shortens the effective length.",
                  "Mechanism: high stiffness attracts force; shear-governed brittle diagonal failure before flexural yielding.",
                  "Short column retrofits: isolate the restraint with a flexible joint, or jacket the column.",
                ],
              },
              {
                q: "What is pounding and how is it prevented?",
                marks: 3,
              },
              {
                q: "What is a floating column?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "RCC jacketing for seismic retrofit (IS 15988)",
            body: [
              "RC jacketing is the workhorse of Indian seismic retrofit - the section enlargement of Unit III, now specified for ductility per IS 15988:2013, the guideline for seismic evaluation and strengthening of existing RC buildings. A jacketed column gains area for axial and flexural strength, confinement from its new ties for ductility, and stiffness; along the way it also restores carbonated cover and enlarges the fire protection. The code essentials: jacket thickness of about 100 mm, new longitudinal bars of at least 12 mm carried through the slab by drilling, and transverse ties of at least 8 mm with 135-degree hooks, closely spaced at the member ends where plastic hinges are expected.",
              "The joint region decides the retrofit's quality. At beam-column joints the new ties cannot pass through the beam, so pairs of legs are threaded through drilled holes and closed with 135-degree hooks, or U-bars are welded; the slab is drilled at each bar position so longitudinal steel passes through and the holes are dry-packed with non-shrink mortar. The old column face is roughened to exposed aggregate, cleaned, and doweled at 300-500 mm centres; the cage is fixed on spacers; and the jacket is cast with micro-concrete poured through slab pockets and needle-vibrated in lifts, or built by shotcrete in layers. Curing runs two weeks.",
              "Global consequences are checked, not assumed. Jacketing every column raises storey stiffness and therefore the base shear the building attracts under IS 1893 - the fix can be selective jacketing, or combining jackets with the bracing and infill of the next section; the added axial load reaches footings that may need underpinning or enlargement; the added mass slightly lengthens the period. Beam jacketing is usually limited to the beam sides, since the slab blocks the top. The target hierarchy - strong column, weak beam - is restored by strengthening columns preferentially, pushing plastic hinges into the beams where they are ductile and inspectable.",
            ],
            bullets: [
              "IS 15988:2013 governs: jacket about 100 mm, longitudinal bars 12 mm minimum, ties 8 mm minimum.",
              "135-degree hooks on all jacket ties; spacing reduced at member ends (confinement zones).",
              "Continuity: drill the slab at every bar, splice above, dry-pack the holes with non-shrink mortar.",
              "Interface: roughen to exposed aggregate, epoxy dowels at 300-500 mm, bonding slurry.",
              "Placement: micro-concrete through slab pockets, or shotcrete in layers; two-week curing.",
              "Joint detailing - threaded and closed ties at beam-column joints - is the make-or-break zone.",
              "Global checks: stiffer structure attracts more base shear; footings and mass must follow.",
            ],
            codeExample: {
              language: "text",
              caption: "Jacketing detail schedule - column 300 x 400",
              code: `COLUMN     existing 300 x 400 mm, 90-degree open ties found
JACKET     +100 mm all round -> final 500 x 600 mm
BARS       12 nos of 16 mm dia around the perimeter,
           drilled through slab, spliced above
TIES       10 mm at 100 mm c/c within confinement zones
           (member ends), 200 mm c/c mid-height; 135-deg
           hooks with adequate straight extension
DOWELS     12 mm at 400 mm grid, 150 mm embedment,
           epoxy anchored into roughened substrate
INTERFACE  chip to sound aggregate, wash, SBR slurry
PLACEMENT  M45 micro-concrete through slab pocket,
           needle-vibrated in lifts
CURE       wet hessian 14 days; anti-carbonation coat
           if the column is exposed`,
            },
            diagram: {
              kind: "flow",
              title: "Jacketing a column, stage by stage",
              caption:
                "The site sequence - note that interface treatment precedes any new steel.",
              steps: [
                { label: "Prop and strip", note: "relieve load; remove finishes and plaster" },
                { label: "Roughen and dowel", note: "exposed aggregate; epoxy dowels on grid" },
                { label: "Fix the cage", note: "bars through drilled slab; ties with 135-degree hooks" },
                { label: "Cast the jacket", note: "micro-concrete via pockets or shotcrete lifts" },
                { label: "Cure and finish", note: "14 days wet; coat if exposed" },
              ],
            },
            callout: {
              type: "warning",
              title: "Where jackets die",
              body: "Field investigations of jacketed buildings that failed in earthquakes keep finding the same flaw: ties omitted or left open at the beam-column joint because they were 'impossible' to close. The joint is precisely where seismic energy concentrates. Drilling and closing those ties is the difference between a retrofit and a decoration.",
            },
            keyTerms: [
              { term: "IS 15988", definition: "2013 guideline for seismic evaluation and strengthening of existing reinforced concrete buildings." },
              { term: "Confinement zone", definition: "End regions of a column or beam where closely spaced ties restrain the core and enable ductile hinging." },
              { term: "135-degree hook", definition: "Closed-tie anchor bend that stays engaged even after cover concrete spalls - mandatory in ductile detailing." },
            ],
            examQuestions: [
              {
                q: "Describe RC jacketing of columns for seismic retrofitting per IS 15988: detailing requirements, construction sequence and the treatment of beam-column joints.",
                marks: 7,
                outline: [
                  "Objectives: added strength, stiffness, ductility and restored cover in one operation.",
                  "Geometry and minimums: about 100 mm jacket, 12 mm bars, 8 mm ties.",
                  "Ductility detailing: 135-degree hooks, closer tie spacing in confinement zones at member ends.",
                  "Continuity: drill slab at each bar, splice above, dry-pack with non-shrink mortar.",
                  "Joint treatment: ties threaded through drilled holes and closed at beam-column joints.",
                  "Sequence: prop, roughen, dowel, cage, cast micro-concrete or shotcrete, cure 14 days.",
                  "Global checks: increased stiffness attracts base shear; footing capacity; strong-column weak-beam hierarchy.",
                ],
              },
              {
                q: "Why are 135-degree hooks mandatory on jacket ties?",
                marks: 2,
              },
              {
                q: "What happens to the base shear demand when all columns of a building are jacketed?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Steel bracing and strengthened infill walls",
            body: [
              "Steel bracing inserted into an RC frame is the fastest seismic retrofit per rupee of stiffness: diagonal members form a vertical truss that takes over most of the lateral load path, cutting storey drift and relieving the weak existing columns. Concentric braces - X, V and inverted-V - are stiff and simple, with connection forces passing directly through the frame joints. Eccentric braces deliberately offset the diagonals so that a short link beam yields in shear: the frame keeps its gravity support while the link dissipates energy cycle after cycle. Connections are the design problem - base plates with chemical anchors must deliver large forces into existing members without locally crushing the concrete.",
              "Strengthened masonry infill is the low-technology alternative. Existing brick infill - ignored in design but in reality carrying shear - can be upgraded by ferrocement overlays: wire mesh anchored to the wall face with through-connectors and plastered in rich mortar converts the panel into a stiff, ductile shear wall. New infill can be added in an open ground storey precisely to cure a soft storey. The cautions mirror the benefits: infill adds stiffness that attracts force and can create the short-column problem of Section 4.1 unless separated from the columns by a flexible joint, and masonry needs out-of-plane anchorage or mesh so panels do not fall on occupants.",
              "Choosing between bracing, infill and jacketing is a system decision. Bracing gives the most stiffness for the least added weight and keeps bays usable; infill is the cheapest and doubles as architecture, but changes mass and stiffness unevenly from storey to storey; jacketing improves members without changing the layout but disturbs every floor it touches. A common combined scheme jackets ground-floor columns for ductility, braces selected bays for stiffness, upgrades infill panels for strength and out-of-plane safety, and completes the load path down into strengthened footings - each technique doing the one job it is best at.",
            ],
            bullets: [
              "Concentric bracing: X / V / inverted-V - stiff, light, field-bolted, fast to erect.",
              "Eccentric bracing: link beam yields in shear - ductile, energy-dissipating, gravity-safe.",
              "Connection detailing: base plates plus chemical anchors; check the host members locally.",
              "Ferrocement infill overlay: anchored mesh plus rich mortar turns a panel into a shear wall.",
              "New ground-floor infill is the direct cure for a soft storey.",
              "Cautions: separate infill from columns to avoid short columns; anchor for out-of-plane safety.",
              "Complete the load path: brace and infill forces must reach strengthened foundations.",
            ],
            table: {
              caption: "Stiffness retrofits compared.",
              headers: ["Aspect", "Steel bracing", "Strengthened infill", "Column jacketing"],
              rows: [
                ["Stiffness gain", "high", "high", "moderate"],
                ["Added mass", "very low", "high", "moderate"],
                ["Ductility", "good (eccentric links)", "moderate", "good with confinement"],
                ["Disruption", "low to moderate", "low", "high - per floor"],
                ["Speed", "fast", "moderate", "slow"],
                ["Typical role", "drift control in open bays", "soft storey cure, walls reused", "member deficiencies"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two stiffness routes for the same frame",
              caption:
                "Bracing and strengthened infill both add stiffness - differently, and with different cautions.",
              left: {
                heading: "Steel bracing route",
                items: [
                  "X or V braces in selected bays",
                  "Light members, bolted field connections",
                  "Big drift cut with almost no added mass",
                  "Forces concentrate at base plates - detail them",
                  "Foundation check mandatory",
                ],
              },
              right: {
                heading: "Strengthened infill route",
                items: [
                  "Ferrocement overlay on existing wall",
                  "Anchored mesh plus mortar, through-connectors",
                  "Cheap, doubles as a partition wall",
                  "Adds mass; avoid short columns at edges",
                  "Out-of-plane anchorage for falling-hazard safety",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The comparison question",
              body: "RGPV loves 'compare jacketing, bracing and infill strengthening'. Rehearse a five-row table - stiffness gain, added mass, disruption, speed, cost - and you can answer for any pair of techniques. Numbers are not needed; the direction of each comparison is what scores.",
            },
            keyTerms: [
              { term: "Concentric bracing", definition: "Braced frame whose diagonal axes intersect at joint centres, providing stiff axial load paths." },
              { term: "Link beam", definition: "Short beam segment in eccentric bracing designed to yield in shear and dissipate seismic energy." },
              { term: "Ferrocement overlay", definition: "Wire mesh anchored to a wall and encased in rich mortar to create a ductile shear panel." },
            ],
            examQuestions: [
              {
                q: "Discuss steel bracing and strengthened masonry infill as seismic retrofit options for RC frames: mechanics, detailing, advantages and limitations.",
                marks: 7,
                outline: [
                  "Bracing mechanics: inserted vertical truss takes the lateral load path, cuts drift.",
                  "Types: concentric (X, V, inverted-V) versus eccentric (link beam) - stiffness vs energy dissipation.",
                  "Connection detailing: base plates, chemical anchors, local checks on existing members.",
                  "Infill mechanics: panel as shear wall; ferrocement overlay method with anchored mesh.",
                  "Soft storey cure: new ground-floor infill or bracing.",
                  "Limitations: short-column creation, out-of-plane failure of panels, added mass and stiffness.",
                  "Selection logic vs jacketing; typical combined schemes and foundation completion.",
                ],
              },
              {
                q: "How does a ferrocement overlay strengthen an infill wall?",
                marks: 3,
              },
              {
                q: "Why can adding infill create short columns?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Base isolation",
            body: [
              "Base isolation changes the question. Instead of strengthening the building to resist ground motion, it decouples the structure from that motion: a layer of flexible bearings between foundation and superstructure lengthens the natural period from about 0.3-0.5 seconds (typical fixed-base low-rise) to 1.5-3 seconds, moving it away from the energetic short-period range of earthquake shaking, while the bearings' damping limits the displacement at the isolation plane. Floor accelerations drop dramatically - commonly to a quarter or a third of the fixed-base values - so the superstructure can remain essentially elastic, contents and equipment are protected, and the building is usable immediately after the event.",
              "Three device families do the work. Laminated elastomeric bearings - layers of rubber and steel - carry vertical load with low horizontal stiffness. Lead-rubber bearings add a central lead plug that yields and dissipates energy in every cycle. Friction pendulum bearings let an articulated slider ride a concave stainless surface, the geometry setting the period and friction supplying damping. Retrofitting an existing building is major surgery: the structure is jacked at its columns, each column or wall base is cut, bearings are set on new pedestals, and the building is lowered onto them; every service line must flex across the isolation plane, and a moat or seismic gap around the building allows 100 to 300 mm or more of free movement.",
              "The trade-offs define its niche. Isolation buys unmatched protection of contents and continuity of function - hospitals, data centres, museums and heritage buildings - at a cost premium and through an operation that is itself a construction project. It suits stiff, low-to-medium-rise buildings on firm ground; very tall or long-period structures, and buildings on soft soil, gain little because the soft-soil response spectrum already peaks at long periods. Conventional ductile retrofit - jacketing, bracing, added dampers - remains the answer for tall, flexible or budget-limited buildings. Indian design references IS 1893:2016 and specialist international practice for isolation systems.",
            ],
            bullets: [
              "Concept: period lengthening (about 0.3-0.5 s to 1.5-3 s) plus damping cuts floor accelerations to roughly 25-35 percent.",
              "Devices: laminated elastomeric bearings, lead-rubber bearings, friction pendulum systems.",
              "Superstructure stays near-elastic; contents protected; immediate occupancy after the event.",
              "Retrofit route: jack at columns, cut member bases, insert bearings on pedestals, lower.",
              "Details: flexible service crossings and a moat/seismic gap of 100-300 mm or more.",
              "Best suited: stiff, low-to-medium-rise buildings on firm soil - hospitals, heritage, museums.",
              "Unsuited: very tall, long-period buildings or soft-soil sites - little benefit, high cost.",
            ],
            table: {
              caption: "Fixed-base versus base-isolated response.",
              headers: ["Aspect", "Fixed base", "Base isolated"],
              rows: [
                ["Natural period", "0.3-0.5 s (low-rise)", "1.5-3 s"],
                ["Floor accelerations", "high", "about 25-35 percent of fixed base"],
                ["Superstructure response", "ductile - cracking and yielding accepted", "near elastic"],
                ["Drift location", "distributed over storeys", "concentrated at the isolation plane"],
                ["Design philosophy", "strength plus ductility (IS 13920)", "decoupling plus damping"],
                ["Services", "conventional", "must flex across the isolation plane"],
                ["Post-earthquake state", "repairable damage", "functional; inspect bearings"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Fixed base versus isolated base",
              caption:
                "The same building, two philosophies - fight the motion or step aside from it.",
              left: {
                heading: "Fixed-base frame",
                items: [
                  "Short period - moves in step with the ground",
                  "High floor accelerations",
                  "Drift spread over storeys - beam and column damage",
                  "Safety by ductile detailing (IS 13920)",
                ],
              },
              right: {
                heading: "Isolated building",
                items: [
                  "Bearing layer lengthens the period",
                  "Low floor accelerations",
                  "Drift concentrated at the isolation plane",
                  "Superstructure near elastic - contents safe",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Draw the spectrum",
              body: "The base-isolation answer earns its sketch: draw a response spectrum (acceleration against period) with its hump at short periods, mark the fixed-base period to the left of the peak and the isolated period well to the right, and shade the acceleration reduction. One graph explains the entire concept.",
            },
            keyTerms: [
              { term: "Base isolation", definition: "Decoupling a superstructure from ground motion by a flexible, damped bearing layer at its base." },
              { term: "Lead-rubber bearing", definition: "Laminated elastomeric bearing with a central lead plug that yields to dissipate seismic energy." },
              { term: "Isolation gap (moat)", definition: "Clearance around an isolated building allowing 100-300 mm or more of free seismic displacement." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of base isolation, the devices used, and its application for retrofitting an existing building, with advantages and limitations.",
                marks: 7,
                outline: [
                  "Principle: lengthen the period away from the spectral peak; add damping at the isolation plane.",
                  "Devices: laminated elastomeric, lead-rubber, friction pendulum - behaviour of each.",
                  "Response comparison: accelerations cut to a quarter-third; superstructure near elastic.",
                  "Retrofit procedure: jack, cut column bases, insert bearings on pedestals, lower.",
                  "Practical details: flexible services, moat or seismic gap of 100-300 mm plus.",
                  "Advantages: protected contents, immediate occupancy, minimal member damage.",
                  "Limitations: cost, construction complexity; poor fit for tall or soft-soil sites.",
                ],
              },
              {
                q: "Why is base isolation less effective on soft soil sites?",
                marks: 3,
              },
              {
                q: "What is a lead-rubber bearing?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "IS 1893 / IS 13920 framework and the Bhuj 2001 lessons",
            body: [
              "The codes define what retrofit must achieve. IS 1893:2016 (Part 1) sets the demand - zone factors, response reduction factors, definitions of plan and vertical irregularity, and the analysis a given building must receive. IS 13920:2016 sets the supply: ductile detailing for RC structures - special confinement zones with closely spaced hoops at member ends and joints, 135-degree ties with adequate straight extensions, development lengths that anchor bars through joints, minimum column dimension of 300 mm, laps located away from high-moment regions, and the strong-column weak-beam capacity design that keeps gravity-carrying columns elastic while beams yield. A retrofit jacket's reinforcement is simply the reinforcement the code would have demanded in new construction.",
              "The 26 January 2001 Bhuj earthquake was India's retrofit awakening: magnitude about 7.7, roughly 13,800 lives lost, and damage across Kutch and beyond. Its documented patterns still populate exam papers. In Ahmedabad, some 250 km from the epicentre, more than a hundred open-ground-storey apartment blocks collapsed by storey mechanism while their infilled upper storeys survived above the rubble. RC frames with 90-degree open ties failed at their joints; short columns sheared at restrained openings; and the region's stone and earthen masonry houses, built without bands and through-stones, failed in exactly the ways IS 4326 and IS 13827 had long warned about.",
              "The lessons became programmes. The seismic zone map was revised in IS 1893:2002, moving Bhuj into Zone V; rapid visual screening swept the building stock of Gujarat's cities; hospitals and schools were retrofitted first; and IS 13920 was widened in its 2016 revision to cover all seismic zones. Case-study retrofits followed the deficiency list: ground storeys braced or re-infilled with jacketed columns; masonry houses given seismic bands, wire mesh overlays and through-stones per IS 13935; and joint regions re-detailed wherever open ties were found. For any exam case-study question, the recipe is one line per case: deficiency observed, mechanism, retrofit applied - anchored on Ahmedabad.",
            ],
            bullets: [
              "IS 1893:2016 Part 1 = demand: zones, R factors, irregularity definitions, required analysis.",
              "IS 13920:2016 = supply: confinement zones, 135-degree ties, 300 mm minimum column, strong-column weak-beam.",
              "Bhuj, 26 January 2001: magnitude about 7.7, roughly 13,800 deaths.",
              "Zone revision: IS 1893:2002 placed Bhuj in Zone V; IS 13920:2016 extended to all zones.",
              "Ahmedabad pattern: open-ground-storey apartments collapsed by storey mechanism - over a hundred buildings.",
              "Kutch masonry: no bands or through-stones - retrofitted per IS 13935 with bands and mesh.",
              "Exam recipe: deficiency -> mechanism -> retrofit, one line per case, anchored on Ahmedabad.",
            ],
            table: {
              caption: "Bhuj 2001 case-study patterns and their retrofits.",
              headers: ["Case", "Deficiency", "Observed failure", "Retrofit lesson"],
              rows: [
                ["Ahmedabad apartments", "open ground storey (parking)", "storey mechanism collapse", "brace or infill ground storey; jacket columns"],
                ["Kutch masonry houses", "no bands, no through-stones", "wall separation, roof collapse", "seismic bands, mesh, through-stones (IS 13935)"],
                ["RC frames, Kutch towns", "90-degree open ties, short columns", "joint shear, diagonal column shear", "close 135-degree ties; relieve or jacket short columns"],
                ["Hospitals and schools", "soft storeys, appendages", "stairs and tanks collapsed", "prioritise these occupancies in retrofit programmes"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Post-Bhuj retrofit decision routes",
              caption:
                "The damage survey branches directly into the retrofit programme - and one branch is the lesson of what not to do.",
              start: "Post-earthquake damage survey (Bhuj 2001 patterns)",
              branches: [
                { label: "Soft storey confirmed", outcome: "Ground-storey bracing or infill plus column jackets", good: true },
                { label: "Masonry without bands", outcome: "Bands, mesh overlays and through-stones per IS 13935", good: true },
                { label: "Joints with open 90-degree ties", outcome: "Joint-region jacketing with closed 135-degree ties", good: true },
                { label: "Patch the plaster and reoccupy", outcome: "Hidden damage fails in the next event - never", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the facts",
              body: "Full marks on the case-study question need five facts: date 26 January 2001, magnitude about 7.7, roughly 13,800 deaths, Ahmedabad soft-storey collapses some 250 km from the epicentre, and the IS 1893:2002 zone revision to Zone V. Memorise the set - they slot into almost every seismic answer.",
            },
            keyTerms: [
              { term: "IS 13920", definition: "Ductile detailing code for RC structures subjected to seismic force - the supply side of seismic design." },
              { term: "Strong column weak beam", definition: "Capacity-design hierarchy in which beams yield before columns, protecting the gravity load path." },
              { term: "Rapid Visual Screening", definition: "Sidewalk-level scoring of a building's seismic vulnerability from occupancy, irregularity and condition." },
            ],
            examQuestions: [
              {
                q: "State the key ductile detailing requirements of IS 13920:2016 for RC frames and explain how the 2001 Bhuj earthquake findings shaped Indian seismic retrofit practice.",
                marks: 7,
                outline: [
                  "Roles: IS 1893 sets demand; IS 13920 sets ductile capacity - state this division first.",
                  "Detailing: confinement zones with close hoops at member ends and joints; 135-degree ties with adequate extensions.",
                  "More: minimum column dimension 300 mm; lap location away from peak moment; joint anchorage.",
                  "Hierarchy: strong-column weak-beam by capacity design.",
                  "Bhuj facts: 26 January 2001, magnitude about 7.7, about 13,800 deaths, Zone V revision in IS 1893:2002.",
                  "Findings: Ahmedabad soft-storey collapses; joint failures from open ties; masonry without bands.",
                  "Programmes: rapid visual screening, prioritised retrofit of hospitals and schools, IS 13935 masonry measures.",
                ],
              },
              {
                q: "What is meant by strong column - weak beam design?",
                marks: 2,
              },
              {
                q: "State any three lessons from the 2001 Bhuj earthquake for retrofitting practice.",
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
      title: "Case Studies and Management",
      summary:
        "Rehabilitation in the field and in the accounts: bridges, heritage structures, industrial damage, fire and flood recovery, repair-versus-replace economics, service life prediction, self-healing concrete and structural health monitoring.",
      chapter: {
        number: "05",
        title: "Case Studies and Asset Management",
        intro:
          "Unit V takes rehabilitation into the field and the ledger. Bridges and heritage buildings impose opposite constraints - traffic windows and conservation doctrine; fire and flood demand triage sequences; the repair-versus-replace decision is settled by life-cycle cost and service-life prediction; and the frontier - self-healing concrete and structural health monitoring - moves the whole discipline from reaction to prediction.",
        inOneBreath:
          "Bridge rehabilitation proceeds element-wise - deck, joints, bearings, girders, piers, foundations - under traffic windows; heritage repair obeys minimum intervention, reversibility and lime compatibility; fire and flood damage follow make-safe, map, test, repair sequences; repair versus replace is an NPV comparison fed by service-life models (carbonation x = k sqrt(t), chloride ingress); and self-healing concrete plus structural health monitoring turn maintenance from calendar-based to condition-based.",
        sections: [
          {
            number: "5.1",
            title: "Rehabilitation of bridges",
            body: [
              "Bridges deteriorate on a schedule of their own - monsoon, overload and age. The recurring distresses are familiar: deck slabs worn and cracked by overloading; expansion joints leaking chloride-rich runoff onto pier caps and bearings below; bearings seized, displaced or rusted; girders corroded or diagonally cracked near supports; piers and wells scoured by floods; abutments distressed by backfill pressure. Because traffic can rarely be stopped for long, bridge repair is planned around possession windows - night blocks and single-lane running - and that constraint shapes the choice of every technique on the job.",
              "Techniques match the element. Decks receive latex-modified or micro-silica overlays after hydro-demolition or scabbling of the damaged cover, with waterproofing beneath the surfacing. Girders are strengthened by external post-tensioning (Section 3.4) or FRP U-wraps at shear-critical ends (Section 3.3); corroded cross-girders are jacketed or replaced. Seized bearings are jacked out and replaced with elastomeric or pot units in a strictly sequenced lift that never overloads the adjacent girders. Piers are jacketed; scour is countered with riprap, concrete collars or aprons; and foundations gain depth by added piles or grouting. Replacing the joints - and draining them properly - is the cheapest fix with the largest durability payoff.",
              "Management is institutional. A bridge inventory carries routine (walk-over), detailed (at fixed intervals) and special (post-flood, post-accident) inspections, with condition ratings recorded in the Indian Bridge Management System (IBMS). Load rating decides posting limits or strengthening priorities, and the life-cycle costing of Section 5.4 chooses repair against replacement. For the exam, structure every bridge answer element-wise - deck, joints, bearings, girders, piers, foundation - each with its typical distress and its technique; the structure carries more marks than any single detail.",
            ],
            bullets: [
              "Deck: remove damaged cover (hydro-demolition or scabble), latex-modified or micro-silica overlay, waterproof.",
              "Joints: replace and drain - leaking joints are the chronic cause of substructure corrosion.",
              "Bearings: jack in sequence, replace with elastomeric or pot units, never overload adjacent girders.",
              "Girders: external post-tensioning for flexure; FRP U-wraps at shear-critical zones; jacket corroded members.",
              "Piers and foundations: jacketing, riprap or concrete collars against scour, added piles or grouting.",
              "Management: IBMS inventory with routine, detailed and special inspections; condition rating drives priorities.",
              "Programming: possession windows, night blocks, single-lane traffic - techniques chosen to fit them.",
            ],
            table: {
              caption: "Bridge elements: distress and rehabilitation.",
              headers: ["Element", "Typical distress", "Rehabilitation measure"],
              rows: [
                ["Deck slab", "wear, cracking, chlorides from leaking joints", "overlay plus waterproofing"],
                ["Expansion joint", "leakage, spalled nosings", "replace with sealed, drained unit"],
                ["Bearing", "seized, displaced, corroded", "jack and replace (elastomeric or pot)"],
                ["Girder", "flexural or shear deficiency, corrosion", "external PT, FRP wraps, jacketing"],
                ["Pier and foundation", "scour, cracking, section loss", "jacket, riprap or collar, added piles"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A bridge rehabilitation project",
              caption:
                "From inspection to handover, under live traffic throughout.",
              stages: [
                { label: "Inspect and rate", note: "IBMS condition rating, load rating" },
                { label: "Diagnose", note: "element-wise causes: overload, leakage, scour" },
                { label: "Design the scheme", note: "technique selection; repair vs replace by LCC" },
                { label: "Execute in possessions", note: "night blocks, single-lane running" },
                { label: "Re-inspect and hand over", note: "update records and load rating" },
              ],
            },
            callout: {
              type: "tip",
              title: "The element-wise answer",
              body: "Bridge questions are generous if you are organised: write the six element headings - deck, joints, bearings, girders, piers, foundation - and give one distress and one remedy under each. The structure signals competence before any fact is checked, and nothing important gets forgotten.",
            },
            keyTerms: [
              { term: "Scour", definition: "Removal of founding soil around bridge piers or abutments by flowing water, undermining the foundation." },
              { term: "Load rating", definition: "Assessment of the live load a bridge can safely carry, driving posting limits or strengthening." },
              { term: "Deck overlay", definition: "A bonded wearing layer (latex-modified or micro-silica concrete) restoring deck surface and protection." },
            ],
            examQuestions: [
              {
                q: "Describe the common distresses of an ageing RC bridge and the rehabilitation measures for deck, joints, bearings, girders and foundations.",
                marks: 7,
                outline: [
                  "Overview of causes: overloading, monsoon exposure, leaking joints, scour, ageing.",
                  "Deck: surface preparation, overlay materials, waterproofing.",
                  "Joints: replacement with sealed and drained units - the root-cause fix.",
                  "Bearings: sequenced jacking, replacement with elastomeric or pot bearings.",
                  "Girders: external post-tensioning, FRP wrapping, jacketing or replacement.",
                  "Piers and foundations: jacketing, scour protection by riprap or collars, added piles.",
                  "Management: inspections, IBMS rating, load posting; possession-window programming.",
                ],
              },
              {
                q: "What is scour and how is it countered?",
                marks: 2,
              },
              {
                q: "Why are leaking expansion joints so damaging to bridge substructures?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Heritage structures and conservation repair",
            body: [
              "Heritage repair is governed by doctrine before technique. The international charters - Venice (1964) and Burra (1979) - together with India's National Policy for Conservation (2014) demand minimum intervention: do only as much as will secure the structure; reversibility: every action should be undoable by a better-informed future generation; compatibility: new material must not harm old; and documented authenticity: original fabric is evidence and is retained wherever possible. The conservation engineer's first tools are archival research and the condition survey - historical drawings, construction chronology, records of past repairs - not a jackhammer.",
              "Old masonry fails in characteristic ways: rising and penetrating damp carrying salts that flake faces; deep cracks from settlement, thermal cycling or rusting iron cramps; arch and dome thrust paths that outgrow their abutments; and the damage done by well-meaning past repairs - hard cement mortar and grout that trap water inside lime walls and accelerate decay. Traditional repair answers in kind: lime mortars matched to the original by binder and aggregate analysis; deep grouting of voided walls with compatible lime-based grouts at low pressure; stitching wide cracks with discreet stainless near-surface ties; and repointing in matching lime, never in cement.",
              "Strengthening is inserted where it cannot be seen: tie rods across arches and at thrust points, distributed anchors tying the wythes of thick walls, grouted ties in domes and minarets, underpinning in miniature bays, and discrete seismic devices - base isolation (Section 4.4) is the flagship for irreplaceable buildings, from museums to monuments. Every step is photographed and logged, material samples are archived, and the programme is sequenced so the building is never left in a vulnerable partial state. Monitoring continues after completion - settlement, tilt, crack gauges - because a heritage contract never quite ends; it pauses between campaigns of care.",
            ],
            bullets: [
              "Doctrine first: minimum intervention, reversibility, compatibility, documented authenticity.",
              "Diagnose from archives and survey before touching any fabric.",
              "Match lime mortars by analysis - never repair lime masonry in OPC mortar.",
              "Grout voids with compatible lime grouts at staged low pressure; stitch cracks with stainless ties.",
              "Insert strengthening discreetly: tie rods, distributed anchors, grouted ties in domes and spires.",
              "Seismic flagship: base isolation for irreplaceable buildings (Section 4.4).",
              "Record everything and monitor after handover - settlement, tilt and crack gauges.",
            ],
            codeExample: {
              language: "text",
              caption: "Heritage condition report extract - 1892 masonry pavilion",
              code: `STRUCTURE  1892 masonry pavilion, lime mortar, dome on
           octagonal drum
HISTORY    repaired 1962 in OPC mortar - damp has worsened
           steadily since that campaign
OBSERVED
  Damp      rising to 900 mm; salts efflorescing at skirting
  Cracks    three at the drum, 2-8 mm, following radial
            mortar joints
  Fabric    1962 OPC pointing hard and cracked; lime joints
            behind remain soft and sound
ANALYSIS   OPC traps moisture in the wall; it must be removed
PROPOSAL
  1  rake out OPC joints; repoint in matched lime mortar
  2  grout drum cracks with lime grout, staged low pressure
  3  stitch the 8 mm crack with 6 mm stainless near-surface
     ties at 400 mm centres
  4  repair ground drainage; retest breathability after
     one monsoon
MONITOR    crack gauges on all three cracks, monthly, 2 years`,
            },
            diagram: {
              kind: "flow",
              title: "The conservation process",
              caption:
                "Research leads, intervention is minimal, and the record never closes.",
              steps: [
                { label: "Research and survey", note: "archives, chronology, condition mapping" },
                { label: "Diagnose", note: "damp, thrust, past incompatible repairs" },
                { label: "Design minimum intervention", note: "reversible, compatible, discreet" },
                { label: "Execute in stages", note: "building never left vulnerable" },
                { label: "Record, monitor, maintain", note: "gauges and logbook continue" },
              ],
            },
            callout: {
              type: "warning",
              title: "Cement in lime walls",
              body: "The commonest heritage crime is repointing or grouting old lime masonry in OPC: the cement is denser and traps moisture, so the wall stays wet, salts concentrate at the interface and the historic face blows off. The exam-ready sentence: repair old masonry with materials matched to the original, or do not repair it at all.",
            },
            keyTerms: [
              { term: "Minimum intervention", definition: "Conservation principle restricting works to the least action that secures the structure." },
              { term: "Reversibility", definition: "Property of a repair that allows it to be undone without damage to historic fabric." },
              { term: "Rising damp", definition: "Migration of ground moisture up a wall by capillarity, carrying soluble salts that damage the fabric." },
            ],
            examQuestions: [
              {
                q: "State the principles governing the repair of heritage masonry structures and describe suitable techniques for cracks, voids and dampness.",
                marks: 7,
                outline: [
                  "Principles: minimum intervention, reversibility, compatibility, documented authenticity (charters).",
                  "Diagnosis: archival research plus condition survey; the role of past incompatible repairs.",
                  "Damp and salts: restore breathability, drainage, and remove cement-era pointing.",
                  "Cracks: stitch with discreet stainless near-surface ties; grout with compatible lime grout.",
                  "Voids: staged low-pressure grouting; verify penetration with trials.",
                  "Mortar matching: binder and aggregate analysis of the original.",
                  "Strengthening and monitoring: ties and anchors; base isolation option; gauges after handover.",
                ],
              },
              {
                q: "Why is OPC mortar harmful in old lime masonry?",
                marks: 3,
              },
              {
                q: "What is meant by reversibility of a repair?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Industrial structures, post-fire and post-flood repair",
            body: [
              "Industrial structures deteriorate by service. Vibration fatigues connections; thermal cycles from furnaces and kilns crack and spall concrete; chemical splash and fumes attack the paste and the reinforcement; floors are abraded and overloaded by each plant upgrade. Silos crack from asymmetric stored-material pressure and temperature; chimneys and cooling towers suffer acid attack from flue gases; water and effluent tanks leak through fine cracks. The retrofit answer combines repair of local damage with treatment of the cause - relining, drainage, vibration isolation, protective coatings - because repeating the same repair every shutdown is not engineering.",
              "Post-fire assessment is a structured triage. Make safe first: shore visibly damaged spans, prohibit entry below suspect members, isolate services. Then read the fire's temperature map from the concrete itself - pink to red-buff discolouration indicates roughly 300 degrees C and above, spalling and rounding of aggregate corners indicate fiercer exposure - and grade every member by zone. Supplement the map with UPV and rebound grids and cores taken across the depth of the damaged zone; classify members as repairable, to be strengthened, or to be replaced; then design member-wise: break out damaged cover, clean and treat the steel, restore the section with micro-concrete or polymer mortar, and strengthen by the Unit III kit where residual capacity falls short. A proof load can close the argument.",
              "Flood damage runs its own sequence: safety first - scoured foundations and live electrical hazards - then dewatering, cleaning and silt removal. Assessment follows: saturation effects on concrete, chloride and contamination testing (seawater and effluent floods can poison the cover), and a scour survey of footings and aprons. Repairs then use the standard kit of Units II and III - crack injection, patching, jacketing, underpinning where scoured - and the event feeds back into prevention: drainage, aprons and scour protection, protective coatings, and raising vulnerable equipment above flood levels. In industry, all of it is programmed into shutdown windows, because the plant calendar governs everything.",
            ],
            bullets: [
              "Industrial causes: vibration, thermal cycling, chemical attack, abrasion, overload after plant upgrades.",
              "Post-fire triage: shore and cordon first; no entry beneath suspect members.",
              "Temperature map: pink discolouration at about 300 deg C; spalling and rounded aggregate at higher exposure.",
              "Evidence: colour zones plus UPV and rebound grids plus cores across the damaged depth.",
              "Classify and act member-wise: repair, strengthen (Unit III), or replace.",
              "Post-flood sequence: safety, dewater, clean, test for chlorides, survey scour, then repair and protect.",
              "Treat the cause, not the symptom - relinings, drainage, isolation, coatings; programme into shutdowns.",
            ],
            table: {
              caption: "Post-fire and post-flood assessment checklist.",
              headers: ["Step", "Post-fire", "Post-flood"],
              rows: [
                ["Make safe", "shoring, cordons, services off", "scour and electrical hazard check"],
                ["Map damage", "colour zones, spalling, deflection", "saturation, silt, contamination"],
                ["Test", "UPV, rebound, cores across depth", "chloride tests, foundation scour survey"],
                ["Classify", "repair / strengthen / replace", "clean / patch / underpin"],
                ["Verify", "re-analysis or proof load", "dewatering confirm, re-survey"],
                ["Prevent", "fire protection, relining", "drainage, aprons, raised equipment"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Post-fire repair sequence",
              caption:
                "Triage order is fixed: safety, evidence, numbers, then repair - never the reverse.",
              steps: [
                { label: "Make safe", note: "shoring, access control, utilities off" },
                { label: "Map the damage", note: "colour zones, spalling, NDT grids" },
                { label: "Test and classify", note: "cores; residual strength per member" },
                { label: "Design the repair", note: "patch, strengthen or replace member-wise" },
                { label: "Execute and verify", note: "proof load or NDT recheck before restart" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not walk in",
              body: "A fire-damaged frame can look sound and be hours from collapse: cover concrete may have lost its bond and steel its yield strength while the surface merely shows soot. The first professional act is shoring and exclusion, not inspection. Examiners reward candidates who begin the post-fire answer with make-safe steps.",
            },
            keyTerms: [
              { term: "Thermal spalling", definition: "Explosive or gradual loss of concrete cover caused by pore pressure and thermal gradients in fire." },
              { term: "Residual strength", definition: "Remaining capacity of a member after damage, assessed by NDT, cores and re-analysis." },
              { term: "Proof load test", definition: "Loading a repaired member to a defined intensity to demonstrate restored capacity." },
            ],
            examQuestions: [
              {
                q: "Outline the assessment and repair procedure for an RC framed building after a major fire, including the use of NDT and the criteria for strengthening versus replacement.",
                marks: 7,
                outline: [
                  "Make safe: shoring of suspect spans, cordons, isolation of services.",
                  "Visual mapping: colour change (pink at about 300 deg C), spalling, deflection, exposed steel.",
                  "NDT: UPV and rebound grids; interpretation alongside the colour map.",
                  "Cores: taken across the damaged depth to measure residual strength.",
                  "Classification: repairable (patch), strengthen (Unit III methods), or replace.",
                  "Repair sequence: breakout, steel treatment, restore section, cure.",
                  "Verification: re-analysis with degraded strengths, proof load where critical, records.",
                ],
              },
              {
                q: "How does concrete colour indicate the temperature a member has reached in a fire?",
                marks: 2,
              },
              {
                q: "List the immediate steps after flood water recedes from a structure.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Repair versus replace: economics and service life",
            body: [
              "Repair or replace is the money question of rehabilitation, and it is answered with life-cycle cost analysis (LCCA), not instinct. The engineering side supplies the inputs: residual capacity from the audit, the cost and expected life of each repair option, the remaining service life if nothing is done, and the consequence of failure. The economic side discounts every future stream - repair cost now, maintenance and re-repair through the horizon, user disruption and closure costs - to present value at a chosen discount rate; the option with the lowest total present cost wins, subject to acceptable risk and function. Function, risk and sentiment (heritage, continuity of operations) act as constraints and tie-breakers.",
              "Service life prediction supplies the lifetimes that the arithmetic needs. Carbonation depth grows as x = k sqrt(t), with k fitted from phenolphthalein depths measured on cores; the time to depassivation is (cover/k) squared. Chloride ingress uses Fick's law solutions with a fitted diffusion coefficient and surface chloride level to find when the threshold - commonly near 0.4 percent by mass of cement - reaches the bar. Adding a propagation period from depassivation to visible cracking gives the repair-free life. The fib Model Code for Service Life Design and ISO 16204 formalise these calculations in a reliability format, so a designer can target a probability of corrosion initiation rather than merely hoping.",
              "In practice a small decision grid keeps the site honest. Repair wins when the structure is basically sound, foundations are stable, the defect is local or its cause removable, and closure costs of rebuilding are prohibitive - the normal case for bridges and operating plants. Replacement wins when residual capacity is low and diffuse, the cause cannot be removed (chronic, deep chloride contamination, for example), the layout must change anyway, or repair NPV exceeds rebuild NPV at a realistic discount rate. Between the two sit the strengthening options of Unit III, which can extend life enough to change the arithmetic - sometimes ten years of guaranteed function is worth more than fifty hopeful ones.",
            ],
            bullets: [
              "LCCA: discount repair + maintenance + disruption streams to present value; lowest NPV wins.",
              "Inputs: residual capacity, repair lives, remaining service life, failure consequences.",
              "Carbonation model: x = k sqrt(t); time to depassivation = (cover / k) squared.",
              "Chloride model: Fick's law ingress; threshold about 0.4 percent by mass of cement at bar depth.",
              "Service life = initiation time (to depassivation) + propagation time (to cracking and repair).",
              "Reliability formats: fib Model Code and ISO 16204 - design to a target probability.",
              "Repair wins if: sound structure, removable cause, replacement closure costs prohibitive.",
            ],
            codeExample: {
              language: "python",
              caption: "Repair vs replace: NPV comparison with a carbonation life check",
              code: `# Life-cycle cost of repair vs replacement, plus service life

def npv(rate, cashflows):          # cashflows[t] = cost at year t
    return sum(c / (1 + rate) ** t for t, c in enumerate(cashflows))

rate, horizon = 0.06, 30           # 6 percent discount, 30-year study period

repair = [0.0] * (horizon + 1)
repair[0] = 55.0                   # repair contract, Rs lakh
for y in (5, 10, 15, 20, 25):      # cyclic maintenance campaigns
    repair[y] = 6.0

replace = [0.0] * (horizon + 1)
replace[0] = 120.0                 # demolition and rebuild, Rs lakh
replace[20] = 4.0                  # one maintenance campaign

print("repair  NPV:", round(npv(rate, repair), 1))    # about 68.6
print("replace NPV:", round(npv(rate, replace), 1))   # about 121.2
print("decision: REPAIR (lower present cost)")

# Carbonation service life: x = k sqrt(t)  ->  t = (cover / k) ** 2
cover_mm, k_mm = 25.0, 5.0         # k fitted from phenolphthalein depths
t_init = (cover_mm / k_mm) ** 2    # years until the front reaches the bar
print("years to depassivation:", round(t_init, 1))    # 25.0`,
            },
            diagram: {
              kind: "fork",
              title: "The repair-or-replace decision",
              caption:
                "The audit routes the money - and one branch is the expensive way to decide nothing.",
              start: "Structure audited: repair or replace?",
              branches: [
                { label: "Sound structure, local defects, removable cause", outcome: "Repair with the Unit II kit - lowest NPV, no closure", good: true },
                { label: "Capacity short but extendable", outcome: "Strengthen (Unit III) - life extended at a fraction of rebuild cost", good: true },
                { label: "Diffuse low capacity, cause irremovable, layout must change", outcome: "Replace - repair NPV exceeds rebuild NPV", good: true },
                { label: "Cosmetic patch to defer the decision", outcome: "Highest lifetime cost and risk - rejected", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Show the arithmetic",
              body: "A repair-versus-replace answer that includes a ten-line NPV comparison - even with assumed numbers - reads like engineering; a paragraph of adjectives does not. Quote the models by formula (x = k sqrt(t), Fick's law) and finish with the decision rule: lowest total present cost within acceptable risk and function.",
            },
            keyTerms: [
              { term: "Life-cycle cost analysis", definition: "Discounting all costs of every option over the study period to present value for comparison." },
              { term: "Carbonation coefficient", definition: "The rate constant k in x = k sqrt(t), fitted from measured carbonation depths." },
              { term: "Remaining service life", definition: "Time until a defined limit state (usually corrosion initiation plus propagation) is reached." },
            ],
            examQuestions: [
              {
                q: "Explain life-cycle cost analysis for the repair-versus-replace decision and the prediction of service life using carbonation and chloride ingress models.",
                marks: 7,
                outline: [
                  "LCCA structure: define options, list cash flows, choose discount rate and horizon.",
                  "Repair stream: repair cost now plus cyclic maintenance plus disruption.",
                  "Replace stream: demolition, rebuild, its own maintenance; compare NPVs.",
                  "Constraints and tie-breakers: function, risk, heritage, continuity.",
                  "Carbonation model: x = k sqrt(t); time to depassivation = (cover/k) squared; fitting k.",
                  "Chloride model: Fick's law ingress to the 0.4 percent threshold; add propagation period.",
                  "Codes and decision rules: fib Model Code / ISO 16204 reliability format.",
                ],
              },
              {
                q: "A wall has 25 mm cover and a carbonation coefficient k = 5 mm per sqrt(year). Estimate the time until the reinforcement depassivates.",
                marks: 3,
              },
              {
                q: "State any three non-cost factors in the repair-versus-replace decision.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Self-healing concrete and structural health monitoring",
            body: [
              "Self-healing concrete attacks the repair problem at the scale of the crack itself. Autogenous healing is natural: unhydrated cement grains continue to react, and in water-filled cracks calcium carbonate precipitates and seals hairline openings up to roughly 0.1-0.3 mm - a phenomenon long observed in water-retaining structures. Autonomous healing engineers the process: spores of Bacillus bacteria encapsulated with nutrients lie dormant in the mix until a crack admits water, whereupon the microbes precipitate calcite and seal the crack; microcapsules of polymer healing agent rupture on cracking; vascular networks deliver healing agent repeatedly, like an artificial bloodstream. The prize is durability - sealed cracks close the ingress routes that drive corrosion - and research continues on scale-up and standards.",
              "Structural health monitoring (SHM) instruments the structure so it can report on itself. Sensors - electrical resistance strain gauges, accelerometers, displacement transducers, fibre-optic FBG sensors that are immune to electromagnetic noise and embeddable in fresh concrete, corrosion and pH probes, and environmental sensors - feed data loggers, or wireless IoT nodes, that transmit to a platform which stores, screens and analyses. Analysis runs from simple threshold alarms to system identification: natural frequencies, mode shapes and damping are tracked over time, and a fall in frequency or a change in mode shape flags a loss of stiffness - damage detection - while the pattern of change narrows down its location.",
              "SHM converts maintenance from calendar-based to condition-based: the data decide when the repair crew is sent, not the annual schedule. It also provides the feedback loop that rehabilitation science needs - post-retrofit monitoring verifies that a jacket, wrap or isolation bearing performs as designed, and long-term records feed the service-life models of Section 5.4 with measured rates instead of assumptions. Bridges, towers, dams and heritage monuments in India increasingly carry permanent schemes, and paired with a digital model the data stream becomes a digital twin that can simulate future states. For the exam: define SHM, list the sensor families, explain frequency-shift damage detection, and connect it to predictive maintenance.",
            ],
            bullets: [
              "Autogenous healing: continued hydration plus calcium carbonate precipitation, cracks up to about 0.1-0.3 mm, needs water.",
              "Autonomous healing: encapsulated Bacillus bacteria plus nutrients precipitate calcite when a crack lets water in.",
              "Other routes: microcapsules of healing agent; vascular networks that can deliver repeatedly.",
              "Benefit: sealed cracks block ingress - durability up, life-cycle maintenance cost down.",
              "SHM sensor families: strain gauges, accelerometers, displacement transducers, FBG fibre optics, corrosion and pH probes.",
              "Analytics: threshold alarms, then system identification - frequency and mode-shape shifts detect and locate damage.",
              "Payoff: condition-based (predictive) maintenance plus post-retrofit verification feeding service-life models.",
            ],
            table: {
              caption: "SHM sensor families and their roles.",
              headers: ["Sensor", "Measures", "Typical use in rehabilitation"],
              rows: [
                ["Strain gauge", "strain at a point", "load sharing in jacketed or wrapped members"],
                ["Accelerometer", "vibration response", "global stiffness tracking and damage detection"],
                ["FBG fibre optic", "strain and temperature, EMI-immune", "embedded arrays in bridges and retrofits"],
                ["Corrosion probe", "half-cell / corrosion rate", "marine and chloride-exposed substructures"],
                ["Displacement transducer", "joint and crack movement", "isolation gap, monitored cracks, bearings"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The structural health monitoring loop",
              caption:
                "Monitoring never finishes - action feeds back into sensing, and maintenance becomes continuous.",
              steps: [
                { label: "Sense", note: "strain, vibration, environment probes" },
                { label: "Acquire and transmit", note: "loggers or IoT nodes to the platform" },
                { label: "Analyse", note: "thresholds plus modal identification" },
                { label: "Detect and locate", note: "frequency and mode-shape shifts" },
                { label: "Act", note: "inspect, repair, update the model - loop continues" },
              ],
            },
            callout: {
              type: "exam",
              title: "The closing link",
              body: "Whatever the monitoring question, end with the same sentence: SHM shifts maintenance from calendar-based to condition-based and verifies retrofits in service. It ties Units I-V together - the survey of Unit I becoming continuous - and examiners reward seeing that link.",
            },
            keyTerms: [
              { term: "Self-healing concrete", definition: "Concrete designed to seal its own cracks, autogenously or with embedded healing agents." },
              { term: "Fibre Bragg grating", definition: "Optical sensor element reflecting a wavelength that shifts with strain - embeddable and EMI-immune." },
              { term: "Damage detection", definition: "Identification of stiffness loss (and its location) from changes in measured dynamic response." },
            ],
            examQuestions: [
              {
                q: "What is structural health monitoring? Describe its sensor families, the data analysis approach and its role in predictive maintenance, with a note on self-healing concrete.",
                marks: 7,
                outline: [
                  "Definition: instrumented structure reporting its own state through its life.",
                  "Sensor families: strain gauges, accelerometers, displacement transducers, FBG, corrosion probes.",
                  "Data path: loggers and IoT transmission to a storage and screening platform.",
                  "Analysis: threshold alarms; system identification of frequencies, mode shapes, damping.",
                  "Damage detection principle: stiffness loss lowers natural frequency; mode shapes localise.",
                  "Role: condition-based maintenance scheduling and post-retrofit verification.",
                  "Self-healing note: autogenous CaCO3 precipitation versus encapsulated bacteria.",
                ],
              },
              {
                q: "Distinguish autogenous and autonomous self-healing of concrete.",
                marks: 3,
              },
              {
                q: "How does a drop in natural frequency indicate damage?",
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
      id: "weightage",
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV papers on CE-803(C) lean heavily on the assessment toolkit and the strengthening and seismic units: expect NDT numericals, one corrosion or crack-repair sequence, one jacketing or FRP design-style question, and a case-study or management long answer every year. Allocate revision in the same ratio and keep one full written practice per unit.",
      ],
      weightedTopics: [
        { topic: "NDT trio: rebound hammer, UPV, core testing (procedures, tables, numericals)", weight: "8-10 marks", note: "Near guaranteed - memorise both grading tables and the crack-depth formula." },
        { topic: "Causes of deterioration and corrosion mechanism", weight: "6-8 marks", note: "Classification + mechanism + remedy format; anchor on the rust-expansion chain." },
        { topic: "Corrosion repair sequence and electrochemical methods", weight: "7-9 marks", note: "Breakout-steel-patch-protection order with the ring-anode effect scores full marks." },
        { topic: "Crack classification and injection (epoxy / PU / grout)", weight: "5-7 marks", note: "Classification table plus port-to-refusal procedure; the active-crack trap is the favourite twist." },
        { topic: "RC jacketing per IS 15988 with seismic detailing", weight: "7-9 marks", note: "Draw the jacket section with 135-degree ties; joint treatment is the differentiator." },
        { topic: "FRP wrapping and steel plate bonding", weight: "6-8 marks", note: "Confinement mechanics + failure modes (debonding, peel) + fire caution." },
        { topic: "Seismic deficiencies: soft storey, short column, weak joints", weight: "8-10 marks", note: "Sketch the soft-storey mechanism; Ahmedabad example expected by name." },
        { topic: "Base isolation and bracing versus jacketing comparison", weight: "5-7 marks", note: "Spectrum sketch plus the five-row comparison table technique." },
        { topic: "Bridge and heritage case studies (element-wise answers)", weight: "5-7 marks", note: "Structure beats detail: element lists and conservation principles respectively." },
        { topic: "Repair-vs-replace LCC and service life prediction", weight: "5-7 marks", note: "Formulas x = k sqrt(t) and (cover/k) squared; a mini NPV example impresses." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with about two hours a day, this schedule covers every section twice - once for understanding, once for revision writing - and reserves the last week for full-length papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - deterioration and assessment", tasks: ["Causes and mechanisms; the corrosion chain", "Condition survey stages, instruments, grading", "Rebound hammer and UPV with both grading tables; core criteria (IS 456)"] },
        { week: "Week 2", focus: "Unit II - repair materials and techniques", tasks: ["Material requirements; cementitious vs epoxy vs PMC", "Ferrocement, FRC and FRCM distinctions", "Crack injection and the full corrosion repair sequence"] },
        { week: "Week 3", focus: "Unit III - strengthening (part 1)", tasks: ["Section enlargement and jacketing sequences", "Steel plate bonding with failure modes", "FRP wrapping: confinement, debonding, fire"] },
        { week: "Week 4", focus: "Unit III - strengthening (part 2)", tasks: ["External prestressing and NSM", "Bracing and underpinning with precautions", "Revise Unit III diagrams end to end"] },
        { week: "Week 5", focus: "Unit IV - seismic retrofitting", tasks: ["Deficiency catalogue with sketches (soft storey, short column)", "IS 15988 jacketing detail and IS 13920 requirements", "Bracing vs infill; base isolation; Bhuj case studies"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Bridge (element-wise) and heritage answers", "Fire/flood triage; LCC and service-life numericals", "Two full past papers under time; refresh all tables"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      body: [
        "The final day is for tables, sketches and numbers - everything already understood, nothing new. Work through this list in order and stop by early night.",
      ],
      bullets: [
        "Reread the two NDT tables (rebound bands, UPV grading) and the IS 456 core acceptance numbers - they are the cheapest marks on the paper.",
        "Redraw the four sketches you are least sure of: deterioration chain, jacket section with 135-degree ties, isolation response spectrum, SHM loop.",
        "Recite the IS numbers with one phrase each: 13311 (Parts 1 and 2), 456 core criteria, 15988, 13920, 1893:2016, 13935.",
        "Rehearse the sequences: injection to refusal, corrosion repair loop, post-fire triage, underpinning alternate bays.",
        "Rehearse the fork decisions: grout choice by crack type, underpinning route by site condition, repair versus replace by audit outcome.",
        "Sleep. This paper rewards organised recall, and a rested memory beats a midnight cram by more than the hours saved.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Answer by classification: cause family, mechanism, remedy - the three-part structure is what a 7-mark outline is marked against.",
        "Quote the code and the number: IS 15988 for jackets, IS 13920 for detailing, IS 13311 parts 1 and 2, IS 456 core criteria - numbers earn lines of marks.",
        "Draw one labelled sketch per long answer: mechanisms (soft storey, corrosion chain), sequences (jacketing, injection) and comparisons (fixed vs isolated) all have standard diagrams.",
        "Use magnitudes to separate a 6 from a 4: port spacings, injection pressures, tie spacings, jacket thicknesses, rebound and UPV bands - even approximate numbers signal command.",
        "Time-box strictly: short answers in 4-6 minutes, 7-markers in 15 minutes, and keep the final 10 minutes to label and caption every diagram.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing that the rebound hammer 'gives compressive strength' - it gives surface hardness, indicative only to about plus or minus 25 percent.",
        "Swapping IS 13311 parts: Part 1 is UPV, Part 2 is the rebound hammer - the most common code mix-up on this paper.",
        "Injecting an active crack with rigid epoxy, or forgetting that polyurethane exists for moving and wet cracks.",
        "Jacketing without mentioning the stiffness increase, higher attracted base shear and foundation consequences - the global checks carry marks.",
        "Describing FRP without the fire caveat - the epoxy matrix softens near its glass transition temperature.",
        "Using OPC mortar for heritage lime masonry, or omitting the minimum-intervention and reversibility principles from any conservation answer.",
      ],
    },
  ],
};
