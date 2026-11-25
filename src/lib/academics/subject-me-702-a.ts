/**
 * Academics - RGPV ME 7th-semester elective: ME-702(A) Advance Machining Processes.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me702a: AcademicSubject = {
  id: "me-702-a",
  code: "ME-702(A)",
  title: "Advance Machining Processes",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to advanced machining for mechanical engineering: why conventional tools fail, and how ultrasonics, jets, sparks, beams, chemistry and magnetic fields machine the materials nothing else can touch.",
  description:
    "Five units walk from the limitations of conventional machining and the selection economics of advanced processes, through the mechanical-energy routes (USM, AJM, WJM, AWJM), the thermal family (die-sink and wire EDM, LBM, EBM, PAM), chemical and electrochemical machining (CHM, ECM with Faraday's law, ECG), and on to hybrids and micro-scale work (ECSM, MAF, micro-EDM and micro-ECM, surface integrity and industrial case studies). Every section pairs theory with a redrawable diagram, worked numbers and the questions RGPV actually asks.",
  accentColor: "#7c3aed",
  emoji: "AM",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Advanced Machining: An Overview",
      summary:
        "Why conventional machining fails, how advanced processes classify by energy source, how to filter-select a process for a job, what each process can deliver, and how the economics of expensive machines actually resolves.",
      chapter: {
        number: "01",
        title: "Why AMP, and How to Choose",
        intro:
          "Unit I sets the stage: why cutting tools fail on modern materials, how advanced processes are classified by the energy they use, what governs the selection of a process for a job, and how the economics of an expensive machine actually works out. Five sections, one decision framework.",
        inOneBreath:
          "Conventional machining needs a harder tool, applies force and heat, and cannot reach many geometries; advanced processes remove material by erosion, dissolution, vaporisation or ablation; they classify into mechanical, thermal, chemical-electrochemical and hybrid families; selection filters material, geometry, specification and economics; and the cheapest acceptable part - not the cheapest machine hour - decides the route.",
        sections: [
          {
            number: "1.1",
            title: "Limitations of conventional machining",
            body: [
              "Conventional machining - turning, milling, drilling, grinding - removes metal by plastic shear: a wedge of tool material, necessarily harder than the work, penetrates and peels off chips. That single principle carries five built-in limits. The tool must out-harden the job, so hardened die steels (58-65 HRC), cemented carbides, nitrided layers and engineering ceramics destroy cutting edges in minutes. Cutting forces are large, so thin walls deflect, fragile parts chatter and burrs form. Frictional heat alters the surface layer. And the tool must physically reach the geometry, so sharp internal corners, deep micro-holes and complex internal profiles are out of reach.",
              "Modern materials make these limits decisive. Heat-treated tool and die steels are machined after hardening to avoid distortion, when no cutter survives. Nickel superalloys, titanium alloys and austenitic stainless steels work-harden, gum up and weld themselves to tools. Ceramics, glass, silicon and germanium are so hard or brittle that shear produces fracture instead of a chip. Fibre composites and honeycomb delaminate under cutting force. Each case either destroys the tool, ruins the surface or makes the geometry impossible - the three failure modes an examiner expects, each with a material example.",
              "Advanced machining processes (AMPs) - also called non-traditional or unconventional processes - sidestep the wedge entirely. They remove material with abrasive impact, high-velocity jets, electrical sparks, electrochemical dissolution, controlled chemical attack or focused beams of light, electrons and plasma. The tool may be softer than the work (USM, EDM), forces can be almost zero, and heat can be absent altogether or confined to a tiny zone. AMPs do not replace conventional machining; they extend the machinable envelope, and the engineer's job - the theme of this subject - is choosing and costing the right energy for the job.",
            ],
            bullets: [
              "Tool must be harder than work - hardened steels, carbides and ceramics break this rule first.",
              "Cutting forces deflect thin sections, raise burrs and induce residual stresses.",
              "Shear heat alters surface layers: over-tempering, white layer, tensile stress.",
              "Tool access limits geometry: sharp internal corners, deep small holes and internal profiles stay out of reach.",
              "Brittle materials (glass, ceramics, semiconductors) fracture instead of forming chips; AMPs cut them by erosion, dissolution, vaporisation or ablation.",
            ],
            table: {
              caption: "Where conventional machining struggles, and which AMP family answers.",
              headers: ["Conventional limit", "Root cause", "Typical victim material", "AMP family that answers it"],
              rows: [
                ["Tool wears out rapidly", "Work harder than any tool", "Carbide, H13 at 60 HRC, ceramics", "USM, EDM, ECM, LBM"],
                ["Thin walls distort", "Large cutting force", "Honeycomb panels, foils", "CHM, WJM, ECM"],
                ["Burrs and residual stress", "Plastic shear and rubbing", "Austenitic steel, titanium", "ECM, CHM, AJM deburring"],
                ["Impossible geometry", "No tool path or tool access", "Internal corners, micro-holes", "EDM, wire EDM, ECSM"],
                ["Fracture, not chips", "Brittleness", "Glass, silicon, alumina", "USM, AJM, LBM, ECSM"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A job arrives on the shop floor",
              caption: "Four verdicts - only one of them sends the job back to conventional machining.",
              start: "A machining job arrives on the shop floor",
              branches: [
                {
                  label: "Work harder than any tool",
                  outcome: "Tool dies in minutes - switch to USM, EDM, ECM or LBM",
                  good: false,
                },
                {
                  label: "Complex internal geometry",
                  outcome: "No tool path exists - wire EDM or ECM required",
                  good: false,
                },
                {
                  label: "Thin, fragile or heat-sensitive part",
                  outcome: "Force and heat distort it - use ECM, WJM or CHM",
                  good: false,
                },
                {
                  label: "Soft, tough, open geometry",
                  outcome: "Conventional machining is still the cheapest route",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The opening question",
              body: "State the five limitations as a list - tool hardness, force, heat, geometry, material behaviour - and attach one material example to each. RGPV marks this question in points, and an example earns the mark that a bare statement loses.",
            },
            keyTerms: [
              { term: "HSTR alloys", definition: "Heat- and high-strength-resistant alloys such as nimonic and inconel that keep their strength and abrasiveness at cutting temperatures." },
              { term: "Non-traditional machining", definition: "Material removal that does not rely on a harder wedge-shaped tool: erosion, dissolution, vaporisation, ablation or spark erosion." },
              { term: "Machinability envelope", definition: "The set of materials, geometries, tolerances and finishes a machining route can produce economically." },
            ],
            examQuestions: [
              {
                q: "What are advanced machining processes? Explain the limitations of conventional machining with suitable examples of materials and geometries where conventional methods fail, and show how AMPs overcome them.",
                marks: 7,
                outline: [
                  "Define AMP: removal without a harder cutting wedge, using mechanical, thermal, chemical or electrochemical energy.",
                  "Limit 1 - tool hardness: hardened die steel and carbide destroy cutters; USM, EDM, ECM use soft tools or no tools.",
                  "Limit 2 - cutting force: thin honeycomb deflects; CHM, WJM, ECM apply near-zero force.",
                  "Limit 3 - heat and surface damage: white layer and residual stress; ECM, CHM, AWJM are cold.",
                  "Limit 4 - geometry: sharp internal corners and deep micro-holes; EDM and wire EDM reach them.",
                  "Limit 5 - brittle and composite materials fracture or delaminate; USM, LBM, AWJM handle them.",
                  "Close: AMPs complement conventional machining; selection and economics decide the route.",
                ],
              },
              {
                q: "Name four difficult-to-machine materials and one suitable AMP for each.",
                marks: 2,
              },
              {
                q: "How does an advanced machining process differ from a conventional one with respect to tool hardness and cutting force?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Classification of advanced machining processes",
            body: [
              "Classification starts from the energy that does the cutting. Mechanical-energy processes hammer or blast the surface: USM drives an abrasive slurry with an ultrasonic tool, AJM fires grit in a gas jet, WJM and AWJM use water jets, plain or abrasive-loaded. Thermal processes melt and vaporise: EDM, LBM, EBM, PAM and ion-beam machining. Chemical and electrochemical processes remove atoms without heat: CHM and photochemical machining by etching, ECM, ECG and ECH by anodic dissolution. Hybrid processes run two mechanisms in one zone - ECSM sparks inside an electrochemical cell; ECG grinds and dissolves together.",
              "A second axis is how the energy reaches the work: a vibrating solid tool with slurry (USM), a fluid jet (AJM, WJM), a spark channel across a dielectric gap (EDM), a beam travelling through air or vacuum (LBM, EBM), an electrolyte flowing through a gap (ECM), or an etchant bathing a masked surface (CHM). A third and very practical axis is whether the work must conduct electricity: EDM and ECM need a conducting workpiece because current must pass through it; USM, AJM, WJM, LBM, EBM and CHM are indifferent - they cut insulators like glass and alumina as happily as steel.",
              "The classification also predicts side-effects. Mechanical processes leave possible microcracks but no heat; thermal processes leave a recast layer, heat-affected zone and tensile stress; chemical and electrochemical processes leave stress-free, chemically clean surfaces but round off sharp corners; hybrids trade a little of each parent's character for a capability neither has alone - ECSM exists precisely because EDM cannot touch an insulator. Memorise the family map in the diagram and table: it is the fastest revision sheet in the subject and answers half the short questions before they are asked.",
            ],
            bullets: [
              "Primary classes: mechanical (USM, AJM, WJM, AWJM), thermal (EDM, LBM, EBM, PAM), chemical and electrochemical (CHM, PCM, ECM, ECG), hybrid (ECSM, MAF).",
              "Transfer medium distinguishes neighbours: slurry and tool, gas jet, water jet, spark, beam, electrolyte, etchant.",
              "Conductivity filter: EDM and ECM require a conductive workpiece; the rest machine insulators too.",
              "Removal mechanism predicts surface integrity: erosion cracks, thermal recast, or clean dissolution.",
              "Hybrid = two mechanisms in one zone (ECSM: EDM spark + ECM etch) to beat each parent's limits.",
            ],
            table: {
              caption: "The AMP family map.",
              headers: ["Family", "Members", "Energy source", "Mechanism", "Conductive work only?"],
              rows: [
                ["Mechanical", "USM, AJM, WJM, AWJM", "Kinetic (vibration, jet)", "Erosion, micro-shearing", "No"],
                ["Thermal", "EDM, LBM, EBM, PAM", "Electrical, light, electron, plasma", "Melting + vaporisation", "EDM only"],
                ["Chemical", "CHM, PCM", "Chemical (etchant)", "Dissolution", "No"],
                ["Electrochemical", "ECM, ECG, ECH", "Ionic (DC current)", "Anodic dissolution", "Yes"],
                ["Hybrid", "ECSM, ECG, MAF", "Two combined", "Mixed", "Depends"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The four AMP families",
              caption: "Top to bottom, in the order the later units take them up.",
              layers: [
                { label: "Mechanical energy", note: "USM, AJM, WJM, AWJM - erosion and jetting" },
                { label: "Thermal energy", note: "EDM, LBM, EBM, PAM - melt and vaporise" },
                { label: "Chemical / electrochemical energy", note: "CHM, PCM, ECM, ECG - dissolution" },
                { label: "Hybrid combinations", note: "ECSM, MAF - two mechanisms in one zone" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two marks, ten seconds",
              body: "'Classify advanced machining processes with examples' appears in some form almost every year. Reproduce the four-family table, attach two process names per family, and add the conductivity remark - that is the full marking scheme in one sketch.",
            },
            keyTerms: [
              { term: "Hybrid process", definition: "A process that applies two removal mechanisms simultaneously in one zone, e.g. ECSM (spark + etch) or ECG (abrasion + dissolution)." },
              { term: "Transfer medium", definition: "The agent that carries energy to the work: tool and slurry, gas or water jet, spark channel, beam, electrolyte or etchant." },
              { term: "Anodic dissolution", definition: "Removal of metal from the positive electrode (workpiece) as ions - the mechanism behind ECM and ECG." },
            ],
            examQuestions: [
              {
                q: "Classify advanced machining processes on the basis of source of energy, mechanism of material removal and transfer medium. Give at least two examples of each class and state which classes can machine electrically non-conducting materials.",
                marks: 7,
                outline: [
                  "State the three classification bases in one line each.",
                  "Mechanical class: USM, AJM, WJM, AWJM - erosion and jet shearing.",
                  "Thermal class: EDM, LBM, EBM, PAM - melting and vaporisation.",
                  "Chemical and electrochemical class: CHM, PCM, ECM, ECG - dissolution.",
                  "Hybrid class: ECSM and MAF - two mechanisms in one zone.",
                  "Conductivity: only EDM and ECM require a conducting workpiece; the rest cut insulators.",
                  "Close with one application per class to anchor the answer.",
                ],
              },
              {
                q: "Which advanced processes can machine glass? Name any four.",
                marks: 2,
              },
              {
                q: "What is a hybrid machining process? Give two examples and one advantage over the parent processes.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Selection of an advanced machining process",
            body: [
              "Selection is a filter cascade, and the first filter is the workpiece itself. Is the material electrically conductive? If not, EDM, ECM and ECG drop out immediately, leaving USM, AJM, WJM, LBM, CHM or ECSM. How hard or brittle is it? Hard, brittle solids favour USM and AJM; hard but ductile conductors suit EDM and ECM. Is it thermally sensitive, or does a fatigue spec forbid a heat-affected zone? Then thermal processes slide down the list and cold routes - ECM, CHM, AWJM - rise. Is it chemically reactive with the likely etchants or electrolytes? That rules out or modifies the chemical routes.",
              "The second filter is geometry. A blind three-dimensional cavity points to die-sinking EDM or ECM; a complex through-profile points to wire EDM or AWJM; a shallow large-area pocket on a thin skin points to CHM; a micro-hole with a high depth-to-diameter ratio points to laser or electron beam drilling or micro-EDM; internal, inaccessible surfaces point to MAF or abrasive flow finishing. The third filter is the specification: tolerance band, surface roughness target and - most often forgotten - the permitted depth of damaged layer. The fourth is throughput and cost: MRR needed, batch size, tooling lead time and machine availability.",
              "The output of the cascade should be a shortlist of two or three candidate processes, never a single dogmatic answer. The final choice then becomes an economics decision - the subject of section 1.5 - helped by the capability table in 1.4. A good exam answer names the filters in order, shows the rejections ('EDM is out because the ceramic is an insulator'), and lands on the shortlist with a one-line justification each. The matrix below shows how hardness and complexity jointly steer the first cut.",
            ],
            bullets: [
              "Filter 1 - material: conductivity, hardness, brittleness, thermal sensitivity, chemical reactivity.",
              "Filter 2 - geometry: blind cavity vs through profile vs surface finishing vs micro-hole with high L/D.",
              "Filter 3 - specification: tolerance, Ra target, and the often-forgotten allowed depth of damaged layer.",
              "Filter 4 - production: MRR, batch size, tooling lead time, machine availability, disposal rules.",
              "Output a shortlist of 2-3 processes; let the cost model of section 1.5 pick the winner.",
            ],
            table: {
              caption: "Selection filters in order, with typical disqualifiers.",
              headers: ["Filter", "Key question", "Typical disqualifier"],
              rows: [
                ["Material", "Conductive? Hard? Brittle? Heat-sensitive?", "Insulator kills EDM and ECM"],
                ["Geometry", "Blind cavity, through profile, micro-hole?", "Blind cavity kills wire EDM and WJM"],
                ["Specification", "Tolerance, Ra, allowed damage depth?", "±0.005 mm kills PAM and CHM"],
                ["Throughput", "MRR and batch size required?", "AJM's few mm3/min kills bulk removal"],
                ["Economics", "Tooling, consumables, machine rate?", "One-off with a shaped electrode may favour wire EDM"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Hardness vs complexity: the first cut of any selection",
              caption: "Vertical axis: soft (bottom) to hard (top). Horizontal axis: simple (left) to complex (right).",
              axes: { x: "Geometry: simple -> complex", y: "Material: soft -> hard" },
              quadrants: [
                { label: "Hard + simple", note: "AWJM, PAM or USM - contours in hard stock" },
                { label: "Hard + complex", note: "EDM or ECM - cavities earn their keep" },
                { label: "Soft + simple", note: "Conventional machining wins on cost" },
                { label: "Soft + complex", note: "WJM, laser or CHM for thin, complex blanks" },
              ],
            },
            callout: {
              type: "exam",
              title: "Selection answers are marked as logic",
              body: "Do not jump to a process. Write the filters in order, show one elimination per filter, and finish with the shortlist plus a reason. This structure earns points even if your final pick differs from the examiner's.",
            },
            keyTerms: [
              { term: "Selection cascade", definition: "The ordered filters - material, geometry, specification, economics - that narrow any job to a shortlist of processes." },
              { term: "Depth-to-diameter ratio", definition: "Aspect ratio of a hole; the yardstick separating beam drilling and micro-EDM from conventional drilling." },
              { term: "Damaged layer", definition: "The thickness of altered material (recast, HAZ, cracks, stress) a design can tolerate; a formal input to process selection." },
            ],
            examQuestions: [
              {
                q: "Discuss the factors governing the selection of an advanced machining process for a given component. Apply your factors to select a process for (a) a precision blind cavity in hardened die steel and (b) a 0.3 mm hole in an alumina plate.",
                marks: 7,
                outline: [
                  "List the filters: material, geometry, specification, throughput, economics.",
                  "(a) Hardened steel is conductive and hard: conventional cutters fail; die-sinking EDM is chosen.",
                  "Justify EDM: blind 3D cavity, ±0.01 mm, burr-free; note the recast layer and a polish after.",
                  "(b) Alumina is an insulator: EDM and ECM are eliminated at filter 1.",
                  "USM suits a brittle insulator: soft tool, slurry, ±0.01 mm; or a pulsed laser if taper is allowed.",
                  "Show the rejection logic for two alternates (AJM too slow, WJM impossible).",
                  "Close: cost per acceptable part (section 1.5) makes the final call.",
                ],
              },
              {
                q: "Name the process you would select to cut a complex outline in a 12 mm hardened steel plate, with reason.",
                marks: 2,
              },
              {
                q: "Why does an insulating workpiece eliminate EDM and ECM in one stroke?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Process capability comparison",
            body: [
              "Process capability is a five-number signature: material removal rate, dimensional tolerance, surface roughness, depth of damaged layer, and the shapes a process can make. Removal rate alone spans five orders of magnitude across the family - AJM removes a few cubic millimetres a minute, USM tens, die-sinking EDM hundreds, and a big ECM power supply removes two thousand or more. PAM and AWJM dominate thick-section cutting speed. The rule behind the numbers: energy concentrated into smaller spots and shorter pulses gives precision but pays for it in rate.",
              "Accuracy and finish pair differently. EDM holds ±0.005-0.01 mm but leaves a recast skin; ECM is several times coarser yet gives a stress-free 0.1-1 um Ra; USM combines ±0.01 mm with zero heat but its soft tool wears, slowly copying error into the cavity; LBM cuts non-conductors at ±0.05 mm with visible taper on thick stock; CHM's undercut grows with depth, so its accuracy statement must include the etch factor. Corner behaviour differs too: EDM can approach a sharp internal corner, while ECM's field lines round every corner off - a decisive difference for die work.",
              "Shape capability completes the signature. Die-sinking EDM owns blind three-dimensional cavities; wire EDM owns precise through-profiles and tapers; CHM owns shallow pockets over large thin areas; AWJM owns thick stacks of mixed material with no heat; MAF owns surfaces no rigid tool can reach. Real parts, section 5.5 shows, chain three to five of these signatures into one process plan. When revising, convert the table below into flash cards - process, rate, tolerance, Ra, damage - and you can answer any comparison question in this subject.",
            ],
            bullets: [
              "MRR spans five orders of magnitude: AJM at a few mm3/min up to ECM at ≈ 2000 mm3/min.",
              "Tolerance and MRR trade off: PAM fastest and coarsest (±0.5 mm), micro-EDM slowest and finest (±0.002 mm).",
              "Surface signature: ECM and MAF best (0.02-1 um, stress-free), EDM good (0.4-3 um, recast), AJM matte and frosted.",
              "Damage budget: thermal processes leave 5-300 um of altered layer; cold processes leave none.",
              "Corner and shape habits: EDM cuts sharp, ECM rounds, wire cuts taper, CHM undercuts, MAF conforms.",
            ],
            table: {
              caption: "Capability snapshot of the major AMPs.",
              headers: ["Process", "MRR (approx)", "Tolerance", "Ra (um)", "Damage"],
              rows: [
                ["AJM", "1-15 mm3/min", "±0.05 mm", "0.4-1.6, matte", "Abrasive embedment"],
                ["USM", "5-30 mm3/min", "±0.01 mm", "0.2-0.8", "Microcracks if brittle"],
                ["Wire EDM", "20-120 mm2/min", "±0.002-0.01 mm", "0.1-1.6", "Thin recast"],
                ["Die-sink EDM", "20-400 mm3/min", "±0.01 mm", "0.4-3", "Recast + HAZ"],
                ["ECM", "100-2000 mm3/min", "±0.05-0.1 mm", "0.1-1", "None"],
                ["LBM", "Metres/min on thin sheet", "±0.05 mm", "1-3", "HAZ 20-300 um"],
                ["PAM", "Very fast cutting", "±0.5 mm", "Rough", "Wide HAZ"],
                ["CHM", "0.01-0.05 mm/min depth", "±0.05-0.15 mm", "0.5-2", "Chemical only"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two camps, one choice",
              caption: "Pick a camp by what the drawing demands; the other camp cannot follow you there.",
              left: {
                heading: "Speed camp",
                items: [
                  "PAM - thick metal, metres per minute, rough edge",
                  "AWJM - any material to 150 mm, cold cut",
                  "ECM - 1000 A dissolves ≈ 2 cm3/min",
                  "Roughing EDM - tens of amperes, hundreds of mm3/min",
                ],
              },
              right: {
                heading: "Precision camp",
                items: [
                  "Micro-EDM - nanojoule sparks, ±0.002 mm features",
                  "USM - ±0.01 mm holes in brittle solids",
                  "ECM finishing - 0.1 um Ra, stress-free",
                  "EBM - 0.01-0.1 mm spots, L/D up to 100",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Comparison questions are table questions",
              body: "Whenever a question says compare, draw a table with rows MRR, tolerance, surface, tooling, applications. Rows beat paragraphs for marks - examiners tick cells as they read.",
            },
            keyTerms: [
              { term: "Process capability", definition: "The quantified signature of a process: MRR, tolerance, finish, damage depth and shape range." },
              { term: "Kerf", definition: "The slot width a cutting process removes; matters in wire EDM, laser and jet cutting economics." },
              { term: "Overcut", definition: "The difference between tool or electrode size and finished hole size, set by grit size or spark gap." },
            ],
            examQuestions: [
              {
                q: "Compare USM, EDM, ECM and LBM under material removal rate, accuracy, surface finish, surface damage and typical applications. Recommend one for a precision cavity in hardened tool steel with a fatigue-critical surface.",
                marks: 7,
                outline: [
                  "Set up the comparison table with the five columns.",
                  "USM: low MRR, ±0.01 mm, brittle-material niche, possible microcracks.",
                  "EDM: medium-high MRR, ±0.01 mm, recast layer - needs polish for fatigue.",
                  "ECM: highest MRR, coarser tolerance, stress-free 0.1-1 um Ra - fatigue-safe.",
                  "LBM: fast on thin stock, ±0.05 mm, HAZ - worst for fatigue.",
                  "For a fatigue-critical hardened cavity: EDM the shape, then MAF polish; or ECM direct.",
                  "Justify: hardness is irrelevant to all four; the decision rests on the damage budget plus accuracy.",
                ],
              },
              {
                q: "Define kerf and overcut with one process example each.",
                marks: 2,
              },
              {
                q: "Which advanced process gives the best surface finish without any thermally damaged layer? Why?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Economics of advanced machining",
            body: [
              "The honest economics of AMPs is total cost per acceptable part, not machine-hour rate. An EDM machine may bill Rs 300-600 an hour against Rs 100 for a lathe - yet the hardened die cavity on the lathe route needs annealing, machining, re-hardening and grinding, and carries distortion and scrap risk; the EDM route cuts the already-hardened block in one setup with zero distortion. Cost per piece is setup amortised over batch, plus machining time multiplied by machine-hour rate, plus tooling, plus consumables, plus quality cost (rework and rejection). Every one of those five terms must be compared before declaring a process expensive.",
              "AMPs win total-cost arguments in five recurring ways. First, when no conventional route exists at all - a 0.15 mm spray hole in hardened nozzle steel - value is set by the product, not the comparison. Second, by deleting downstream operations: ECG of surgical needles removes the deburring station; ECM of a forging die leaves a polish-ready surface. Third, by deleting pre- and post-heat-treatment loops, since EDM and ECM cut hardened stock directly. Fourth, by slashing tooling cost: a CHM mask is cheap, and one mask pattern machines a whole panel. Fifth, by cutting rejection rates on fragile parts that clamping would ruin.",
              "Two hidden costs deserve respect. Die-sinking EDM's electrode must itself be designed, machined and often replaced mid-cavity - the reason one-off complex work migrates to wire EDM, where the wire is the electrode and there is nothing to shape. Consumables - dielectric, garnet at 0.1-1 kg/min, electrolyte and its disposal, etchant neutralisation - run continuously and belong in the model. The code below computes the two routes for a die cavity; the flow diagram shows the checklist for any such comparison. Section 5.5 returns to these numbers as case studies.",
            ],
            bullets: [
              "Compare total cost per acceptable part: setup/batch + time x rate + tooling + consumables + quality cost.",
              "Anneal-machine-reharden-grind loops vanish when EDM or ECM cut the hardened block directly.",
              "Electrode manufacture is die-sink EDM's hidden cost - wire EDM deletes it for through-shapes.",
              "Consumables never sleep: dielectric, garnet 0.1-1 kg/min, electrolyte filtration, etchant disposal.",
              "AMP is priceless where no conventional route exists at all - injector holes, ceramic micro-features.",
            ],
            codeExample: {
              language: "python",
              caption: "Two-route cost model for a hardened die-steel cavity (Rs, batch of 10).",
              code: `# Total cost per piece: two routes to a hardened die-steel cavity
def cost_per_piece(setup, batch, hours, rate, tooling, consumables):
    return setup / batch + hours * rate + tooling / batch + consumables

# Route A - conventional: anneal, mill, re-harden, grind
conv = cost_per_piece(setup=12000, batch=10, hours=14,
                      rate=120, tooling=9000, consumables=500)

# Route B - die-sink EDM straight into hardened steel
edm  = cost_per_piece(setup=8000, batch=10, hours=9,
                      rate=450, tooling=15000, consumables=1800)

print(f"conventional: Rs {conv:,.0f} per cavity")
print(f"EDM route   : Rs {edm:,.0f} per cavity")
print("EDM also removes the re-hardening distortion risk")`,
            },
            diagram: {
              kind: "flow",
              title: "Build the total cost of each route",
              caption: "The checklist behind every 'which process is cheaper' decision.",
              steps: [
                { label: "List every operation on each route", note: "include heat treatment and rework loops" },
                { label: "Amortise setup and tooling over the batch" },
                { label: "Multiply run hours by machine-hour rate" },
                { label: "Add consumables and disposal costs" },
                { label: "Add quality cost, then compare totals", note: "cheapest acceptable part wins" },
              ],
            },
            callout: {
              type: "warning",
              title: "Hourly rates are a trap",
              body: "Writing 'EDM is costly because its machine-hour rate is high' scores nothing. The examiner wants the total-cost argument: operations deleted, distortion and scrap avoided, tooling amortised. Build the table, then conclude.",
            },
            keyTerms: [
              { term: "Machine-hour rate", definition: "Fully loaded cost of running a machine for one hour: capital, labour, overhead and consumables." },
              { term: "Break-even batch", definition: "The batch size at which two routes cost the same per piece; above it the cheaper-rate route wins." },
              { term: "Quality cost", definition: "The cost of scrap, rework and inspection attributable to a process choice." },
            ],
            examQuestions: [
              {
                q: "'Advanced machining processes have high machine-hour rates, yet they are often the most economical choice.' Justify with a total-cost comparison covering setup, tooling, running, consumables and quality costs, using the example of a hardened die cavity.",
                marks: 7,
                outline: [
                  "Write the cost-per-piece equation with its five terms.",
                  "Conventional route: anneal, mill, re-harden, grind - list distortion and scrap risk.",
                  "EDM route: one setup on hardened stock; count the deleted operations.",
                  "Include the hidden costs: electrode design and manufacture, dielectric filtration.",
                  "Show numbers for a batch (e.g. setup Rs 8,000; 9 h at Rs 450; tooling Rs 15,000).",
                  "Add quality cost: rejection 2% vs 10% conventional.",
                  "Conclude: cheapest acceptable part, not cheapest hour, is the criterion.",
                ],
              },
              {
                q: "State two hidden costs of die-sinking EDM.",
                marks: 2,
              },
              {
                q: "Why is wire EDM usually cheaper than die-sinking EDM for a one-off complex through-profile?",
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
      title: "Mechanical Energy Processes",
      summary:
        "Mechanical energy processes: USM's hammering slurry, AJM's gas-borne grit, WJM's supersonic water and AWJM's garnet-loaded jet - equipment, parameters, material removal behaviour and the niche each owns.",
      chapter: {
        number: "02",
        title: "Erosion, Blasting and Jetting",
        intro:
          "Four processes carry mechanical energy to the work: ultrasonic machining hammers abrasive through a vibrating tool, abrasive jet machining blasts grit in a gas, water jet machining shears with a supersonic water needle, and abrasive water jet machining adds garnet to cut anything. Five sections cover their equipment, parameters and niches.",
        inOneBreath:
          "USM: 20-40 kHz tool, abrasive slurry, brittle materials; AJM: gas-borne grit for micro-work; WJM: 1000-4000 bar water at up to 900 m/s for soft sheet; AWJM: entrained garnet cuts 150 mm of anything, cold.",
        sections: [
          {
            number: "2.1",
            title: "Ultrasonic machining: principle and equipment",
            body: [
              "USM removes material by controlled micro-blasting with abrasive grains. A tool shaped as the mirror of the desired cavity - usually mild steel or brass - vibrates along its axis at 20-40 kHz with an amplitude of 10-40 um, driven through a horn by an ultrasonic transducer. The gap between tool and work is flooded with a slurry of abrasive (boron carbide, silicon carbide or alumina, 100-800 grit) in water. Each cycle hammers the grains against the work surface; brittle fracture spalls off micro-chips; cavitation in the slurry and the direct impact of grains both assist; the circulating slurry carries debris away.",
              "The equipment is a chain of energy converters. An electronic generator turns 50 Hz mains into 20-40 kHz electrical oscillation. The transducer - magnetostrictive nickel laminations (rugged, water-cooled, modestly efficient) or piezoelectric ceramics (compact and efficient) - converts that into mechanical vibration. The horn, or acoustic concentrator - an exponentially or steeply tapered rod of titanium alloy - trades displacement for amplitude, multiplying it several times while its large end bolts to the transducer. A slurry pump keeps fresh abrasive flowing through the cutting zone, which is the only cooling the process needs.",
              "Because the tool only hammers grit and never shears the work, the process is reserved for hard, brittle, usually non-conducting materials: glass, ceramics, carbides, ferrites, germanium and silicon, and precious stones. Ductile metals simply deform plastically, wear the tool and machine poorly. Forces are small, the work stays cool, and there is no thermal or chemical alteration - but MRR is modest, tool wear is real, and deep blind cavities starve of fresh grit. Classic jobs: wire-drawing and carbide dies, holes and slots in ceramics, and dental drilling.",
            ],
            bullets: [
              "Frequency 20-40 kHz and amplitude 10-40 um; the tapered horn multiplies amplitude.",
              "Abrasive: B4C (hardest), SiC or Al2O3 at 100-800 grit, in a water slurry pumped through the gap.",
              "Transducer choices: magnetostrictive nickel (rugged, cooled) or piezoelectric (efficient, light).",
              "Tool of soft steel or brass mirrors the cavity; it is cheap because it is easy to make.",
              "Niche: hard, brittle, non-conducting materials - glass, ceramics, carbide, silicon, gemstones.",
            ],
            table: {
              caption: "USM equipment: element, material and function.",
              headers: ["Element", "Usual material", "Function"],
              rows: [
                ["Generator", "Power electronics", "Converts 50 Hz mains to 20-40 kHz oscillation"],
                ["Transducer", "Nickel stack / piezo ceramic", "Electrical to mechanical vibration"],
                ["Horn (concentrator)", "Titanium alloy", "Amplifies amplitude, couples to tool"],
                ["Tool", "Mild steel, brass, stainless", "Hammers slurry into the work; mirrors cavity"],
                ["Slurry system", "Pump, sump, cooler", "Feeds abrasive, flushes debris, cools the zone"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The USM energy chain",
              caption: "Mains frequency in, hammering abrasive grains out.",
              stages: [
                { label: "Generator", note: "50 Hz in, 20-40 kHz out" },
                { label: "Transducer", note: "electrical to mechanical" },
                { label: "Horn", note: "amplitude x 2-6" },
                { label: "Tool + slurry", note: "grains hammer the work" },
                { label: "Cavity", note: "formed grain by grain" },
              ],
            },
            callout: {
              type: "exam",
              title: "The sketch carries the marks",
              body: "Draw the column as generator, transducer, horn, tool, slurry feed, work - six labels - then explain one line each. 'Describe with neat sketch' questions award the labelled diagram as a standalone item.",
            },
            keyTerms: [
              { term: "Magnetostriction", definition: "Dimensional change of a nickel core in an alternating magnetic field; the transducer principle in most USM machines." },
              { term: "Acoustic horn (concentrator)", definition: "A tapered rod that amplifies vibration amplitude, trading stroke for force as its cross-section reduces." },
              { term: "Slurry", definition: "The water-carried abrasive (B4C, SiC, Al2O3) that does the actual cutting in USM." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of ultrasonic machining with a neat sketch, describing the functions of the generator, transducer, horn, tool and slurry. State four applications and four limitations.",
                marks: 7,
                outline: [
                  "Principle: abrasive grains hammered at 20-40 kHz into a brittle workpiece.",
                  "Sketch: generator, transducer, horn, tool, slurry pump, work - label all.",
                  "Energy chain: 50 Hz to ultrasonic to mechanical; amplitude multiplied by the horn.",
                  "Abrasive and tool materials; why the tool can be softer than the work.",
                  "Effects: low force, no heat; works on non-conductors.",
                  "Applications: carbide dies, ceramic holes, silicon machining, dental drilling.",
                  "Limitations: low MRR, tool wear, slurry handling, poor on ductile metals.",
                ],
              },
              {
                q: "State the frequency and amplitude range used in USM.",
                marks: 2,
              },
              {
                q: "Why is USM suitable for glass and ceramics but inefficient on aluminium?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "USM parameters, MRR and tool wear",
            body: [
              "USM's material removal rate rises with almost every parameter - up to a point. Higher frequency delivers more grain impacts per second; larger amplitude drives grains deeper; coarser grit bites more material per strike, so MRR grows roughly with grain diameter. Static force (tool load) has an optimum: too little force and the tool merely floats on the slurry; too much crushes grains, squeezes out the abrasive film and stalls the flush. The process is therefore tuned, not maximised: typical settings are 20-25 kHz, 20-30 um amplitude, 400-grit slurry and the force that keeps the cavity cutting steadily.",
              "Two geometry numbers matter in every numerical. Overcut - the difference between tool size and hole size - is slightly more than twice the mean grit diameter, because a grain layer must fit around the tool everywhere; the tool is therefore made undersized. Tool wear ratio is the volume lost by the tool divided by volume removed from the work: below 0.1 for glass, near 1 for tungsten carbide - the reason long carbide jobs need tool compensation or replacement. Tolerance lands around ±0.01 mm, and taper grows with depth as the slurry cuts sideways on the return stroke.",
              "Surface finish scales with grit: 100-grit cuts fastest and leaves Ra near 0.8 um; 600-grit polishes toward 0.2 um at a fraction of the rate. Brittle work may carry a shallow micro-cracked skin - acceptable for most uses, a fatigue issue for critical parts. The worked example sinks a 10 mm hole 5 mm deep in glass at 30 mm3/min: the volume is about 393 mm3, so the time is roughly 13 minutes - the level of numerical RGPV expects, and the code computes it plus the tool diameter from the overcut.",
            ],
            bullets: [
              "MRR rises with frequency, amplitude, grit size and static force - each to a flushing-limited optimum.",
              "Overcut is about twice the mean grit diameter plus clearance: size the tool before you cut.",
              "Tool wear ratio = tool volume lost / work volume removed: ≈ 0.1 on glass, ≈ 1 on carbide.",
              "Grit trades finish for speed: 100 grit gives ≈ 0.8 um Ra fast; 600 grit ≈ 0.2 um Ra slowly.",
              "Deep blind cavities starve fresh grit - slurry reversal or peck cycles restore the rate.",
            ],
            codeExample: {
              language: "python",
              caption: "USM hole: volume, time and tool size from grit overcut.",
              code: `import math

# Time to ultrasonically drill a through hole in borosilicate glass
dia = 10.0        # mm
depth = 5.0       # mm
mrr = 30.0        # mm3/min, measured for 400-grit B4C slurry

volume = math.pi / 4 * dia**2 * depth
time_min = volume / mrr

# Tool sizing: overcut is roughly twice the mean grit diameter
grit = 0.035      # mm (approx. 400 grit)
tool_dia = dia - 2 * 2 * grit   # two overcuts around the tool

print(f"volume removed  = {volume:.1f} mm3")
print(f"drilling time   = {time_min:.1f} min")
print(f"tool diameter   = {tool_dia:.2f} mm")`,
            },
            diagram: {
              kind: "cycle",
              title: "One USM material-removal cycle",
              caption: "Five events, repeated twenty thousand times a second.",
              steps: [
                { label: "Tool descends onto the slurry film" },
                { label: "Grains hammer the brittle surface", note: "micro-cracks nucleate and join" },
                { label: "Cavitation bursts spall off chips" },
                { label: "Slurry flow flushes the debris" },
                { label: "Fresh grit enters the widening gap", note: "20,000 cycles per second" },
              ],
            },
            callout: {
              type: "exam",
              title: "Numericals come from three formulas",
              body: "Volume of cavity, time = volume / MRR, and the overcut-sized tool diameter. Practise one of each; the values in this section are realistic exam numbers.",
            },
            keyTerms: [
              { term: "Tool wear ratio", definition: "Volume eroded from the tool divided by volume removed from the work; measures process economy." },
              { term: "Overcut", definition: "Hole size minus tool size in USM; roughly twice the mean abrasive grain diameter." },
              { term: "Static force", definition: "The axial tool load in USM; it has an optimum beyond which grit crushes and flushing fails." },
            ],
            examQuestions: [
              {
                q: "Discuss the effect of amplitude, frequency, abrasive grain size, tool load and slurry concentration on the MRR of USM. Define overcut and tool wear ratio and explain how each is controlled in practice.",
                marks: 7,
                outline: [
                  "Define MRR and list the five parameters.",
                  "Frequency and amplitude: more impacts and deeper bites - MRR up.",
                  "Grit size: MRR up with grain diameter; finish worsens - the trade.",
                  "Tool load: optimum curve - grain crush and flush failure at high load.",
                  "Overcut: about twice the grit size; tool made undersized by the overcut.",
                  "Wear ratio: 0.1 (glass) to 1 (carbide); managed by compensation and tool change.",
                  "Close with a one-line numerical: 393 mm3 at 30 mm3/min is about 13 min.",
                ],
              },
              {
                q: "Define overcut in USM.",
                marks: 2,
              },
              {
                q: "A 12 mm diameter, 8 mm deep cavity is ultrasonically machined in glass at a removal rate of 25 mm3/min. Estimate the machining time (volume = (pi/4) x dia^2 x depth).",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Abrasive jet machining (AJM)",
            body: [
              "AJM cuts with a high-velocity stream of fine abrasive carried in a gas. Clean, dry air, nitrogen or carbon dioxide is compressed to 2-10 bar, ducted through a regulator into a mixing chamber where it entrains 0.5-10 g/min of aluminium oxide or silicon carbide grains 10-50 um across, and then accelerated through a tungsten-carbide or sapphire nozzle of 0.2-1 mm bore. The jet leaves at 150-300 m/s and strikes the work at a standoff distance of 0.5-15 mm, eroding material grain by grain - brittle solids by cracking, ductile metals by micro-cutting and fatiguing of surface asperities.",
              "Removal is genuinely slow - a few cubic millimetres a minute - so AJM earns its keep on small, delicate tasks: cutting thin sections of glass, mica, quartz and silicon, deburring and cleaning miniature parts, frosting and engraving glass, and light peening. The jet applies almost no force, generates no heat, and reaches spots no rigid tool could enter; the kerf is narrow and the machine is cheap. The price is a matte, frosted finish with some embedded grains, a dusty working envelope that demands an extraction cabinet, and steady nozzle wear - sapphire nozzles outlast carbide many times.",
              "Four parameters dominate tuning. Gas pressure sets jet velocity and therefore erosion energy. Abrasive flow rate has an optimum: too dilute and strikes are wasted; too dense and grains collide among themselves, choking the jet. Standoff distance controls spot size and taper - close for a fine kerf, far for cleaning a wider area. Nozzle angle decides whether grains cut or crater: oblique impact suits ductile materials, near-normal impact suits brittle ones. AJM is best remembered as a micro-process for the jobs WJM's water would ruin and USM's tool cannot reach.",
            ],
            bullets: [
              "Carrier gas: clean, dry air, N2 or CO2 at 2-10 bar; jet 150-300 m/s; never damp or oily.",
              "Abrasive: Al2O3 or SiC, 10-50 um, fed at 0.5-10 g/min from a vibrating hopper.",
              "Nozzle: WC or sapphire, 0.2-1 mm bore; standoff 0.5-15 mm sets kerf and taper.",
              "MRR a few mm3/min: cutting thin brittle foils, deburring, cleaning, frosting, engraving.",
              "Limits: matte finish, grain embedment, dust extraction, nozzle wear - not a bulk process.",
            ],
            table: {
              caption: "AJM parameters and the effect of increasing each.",
              headers: ["Parameter", "Typical range", "Effect of increasing it"],
              rows: [
                ["Gas pressure", "2-10 bar", "Jet velocity up: faster, rougher cut"],
                ["Abrasive size", "10-50 um", "MRR up, finish down, embedment up"],
                ["Abrasive flow", "0.5-10 g/min", "Optimum, then grains choke the jet"],
                ["Standoff distance", "0.5-15 mm", "Spot widens, taper grows, rate falls"],
                ["Nozzle angle", "30-90 deg", "Oblique suits ductile, normal suits brittle"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The AJM line from compressor to cut",
              caption: "Six stations - each one a label the examiner looks for.",
              steps: [
                { label: "Compressor + dryer + filters", note: "gas must be clean and oil-free" },
                { label: "Pressure regulator", note: "2-10 bar" },
                { label: "Mixing chamber", note: "gas entrains abrasive" },
                { label: "Nozzle", note: "WC or sapphire, 0.2-1 mm" },
                { label: "Jet erodes the work", note: "150-300 m/s" },
                { label: "Dust cabinet + extractor", note: "spent grit and chips" },
              ],
            },
            callout: {
              type: "tip",
              title: "AJM vs WJM is a favourite short",
              body: "One line each: AJM = gas plus fine abrasive for brittle micro-work; WJM = pure water at 1000-4000 bar for soft sheet goods. Write both directions of the comparison and you are safe either way the question is phrased.",
            },
            keyTerms: [
              { term: "Standoff distance", definition: "Gap between nozzle tip and work in AJM; governs spot diameter, kerf and removal rate." },
              { term: "Carrier gas", definition: "The clean, dry gas (air, N2, CO2) that transports abrasive in AJM." },
              { term: "Nozzle wear", definition: "Bore enlargement by abrasive passage; the running cost that sapphire minimises." },
            ],
            examQuestions: [
              {
                q: "Describe AJM with a sketch. Explain the roles of gas pressure, abrasive flow rate, standoff distance, grain size and nozzle angle, and state merits, demerits and applications.",
                marks: 7,
                outline: [
                  "Principle: gas-borne abrasive grains erode the surface at 150-300 m/s.",
                  "Sketch: compressor, dryer, regulator, hopper and mixing chamber, nozzle, work, cabinet.",
                  "Parameters: pressure, flow, standoff, grit, angle - give each one effect line.",
                  "Materials: thin glass, mica, silicon; also deburring, cleaning, frosting.",
                  "Merits: no heat, low force, cheap, reaches anywhere.",
                  "Demerits: low MRR, embedment, dust, nozzle wear.",
                  "Applications with one reason each.",
                ],
              },
              {
                q: "State any four applications of AJM.",
                marks: 2,
              },
              {
                q: "Why must the carrier gas in AJM be clean and dry? What fails if it is not?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Water jet machining (WJM)",
            body: [
              "WJM shears material with a needle of pressurised water. An intensifier pump - a large-area air-driven piston pushing a small-area water piston - raises filtered water to 1000-4000 bar, and an accumulator smooths its pulses into steady flow. The water escapes through a sapphire or diamond orifice of 0.1-0.5 mm as a coherent jet at up to about 900 m/s, and that kinetic energy, focused on a line, shears soft, fibrous and sheet materials - a process sometimes called supershearing. A catcher below the work absorbs the spent jet safely.",
              "The physics is pure momentum: jet power grows roughly with pressure to the 3/2 power, so raising pressure buys depth and speed faster than raising flow. The cut is cold - no heat-affected zone, no fume, no dust - and the kerf, about 0.2-1 mm, is narrower than any saw. There is no tool to wear except the jewel orifice, which lasts hundreds of hours; cutting starts anywhere, even mid-panel, because the jet drills its own start hole; and hold-down force is so small that a vacuum table suffices - clamps that would dent leather or foam are unnecessary.",
              "What pure water cannot cut is anything hard: it shears leather, rubber, textiles, paper and cardboard, foam, plastics, soft woods, many composites and food products - the last a genuine industry, from frozen fish to bread - but it bounces off metals, glass and stone. For those, garnet is added and the process becomes AWJM, the next section. WJM's own niches remain valuable wherever a thermal or dusty cut would be unacceptable: dust-suppressed cutting of hazardous sheet materials, slicing glass-fibre stock, trimming car carpets and headliners.",
            ],
            bullets: [
              "Intensifier pump: large air piston drives small water piston to 1000-4000 bar; accumulator removes pulsation.",
              "Jewel orifice 0.1-0.5 mm: coherent jet at up to ≈ 900 m/s; power scales with pressure^1.5.",
              "Cold, narrow kerf (0.2-1 mm), no fume, no dust; the jet drills its own start hole.",
              "Cuts leather, rubber, textiles, plastics, foam, composites, food - not metals or ceramics.",
              "Add garnet for hard materials and the machine becomes AWJM (section 2.5).",
            ],
            table: {
              caption: "What pure water cuts - and what it cannot.",
              headers: ["Material", "Pure water jet", "Comment"],
              rows: [
                ["Leather, foam, carpet", "Yes", "Fast, no compression marks, vacuum-held"],
                ["Rubber, plastics, PTFE", "Yes", "Clean edge, no fume"],
                ["FRP, honeycomb panels", "Yes, carefully", "Low force avoids delamination"],
                ["Frozen food, bread", "Yes", "Hygienic, no blade contamination"],
                ["Steel, glass, stone", "No", "Needs AWJM - add garnet (section 2.5)"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The WJM pressure chain",
              caption: "Filter to catcher: the five labels of every WJM sketch.",
              stages: [
                { label: "Water filter", note: "keeps the jewel orifice safe" },
                { label: "Intensifier pump", note: "up to 4000 bar" },
                { label: "Accumulator", note: "pulse-free delivery" },
                { label: "Sapphire orifice", note: "jet to ≈ 900 m/s" },
                { label: "Cutting head + catcher", note: "kerf 0.2-1 mm" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the three pressure-chain parts",
              body: "Intensifier, accumulator, orifice - these three labels appear in every WJM sketch question. Draw the chain with values (1000-4000 bar, 0.1-0.5 mm, ≈ 900 m/s) and the diagram marks are banked.",
            },
            keyTerms: [
              { term: "Intensifier", definition: "A two-piston pump that trades area for pressure, raising water to 1000-4000 bar." },
              { term: "Jewel orifice", definition: "The sapphire or diamond nozzle (0.1-0.5 mm) that forms the coherent water jet." },
              { term: "Catcher", definition: "The energy-absorbing chamber below the cut that disposes of the spent jet safely." },
            ],
            examQuestions: [
              {
                q: "Explain water jet machining with a sketch. Describe the intensifier, accumulator and orifice, and state why the process cuts soft materials but not metals. Give applications and limitations.",
                marks: 7,
                outline: [
                  "Principle: kinetic energy of a ≈ 900 m/s water jet shears soft material.",
                  "Sketch: filter, intensifier, accumulator, high-pressure tubing, orifice, work, catcher.",
                  "Intensifier physics: area ratio multiplies pressure; accumulator smooths pulses.",
                  "Why soft materials only: water cannot shear a metal's strength - garnet is needed (AWJM).",
                  "Merits: cold, dust-free, narrow kerf, starts anywhere, no tool wear.",
                  "Limitations: not metals, noisy, catcher and pump maintenance.",
                  "Applications: leather, composites, food, dust-suppressed cutting.",
                ],
              },
              {
                q: "State the pressure and jet velocity used in WJM.",
                marks: 2,
              },
              {
                q: "Differentiate WJM from AWJM in two important respects.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Abrasive water jet machining (AWJM)",
            body: [
              "AWJM keeps the intensifier-orifice chain of the previous section and adds an abrasive stage. The pure jet leaving the jewel orifice enters a mixing chamber, where the Venturi effect sucks in garnet grains (60-150 mesh) at 0.1-1 kg/min, and the mixture is collimated by a tungsten-carbide focusing tube of 0.8-1.6 mm bore before striking the work. The jet now cuts by erosion rather than shear - micro-chipping at 600-900 m/s - and there is virtually no material it cannot cut: 150 mm steel, titanium, granite, glass, alumina, Kevlar, rubber and sandwich structures all fall to it.",
              "Parameters form a hierarchy. Water pressure dominates - it sets jet velocity and hence depth capability; traverse speed then trades quality for productivity: faster cuts are shallower and striated, and beyond a critical speed the kerf tapers or the jet fails to exit the bottom. Abrasive mesh and flow set erosion intensity per millimetre of travel; orifice and focusing-tube sizes, and standoff (1-5 mm), fix the kerf width, typically 0.8-2 mm. A skilled programmer varies speed with thickness and tilts the head a degree against the natural taper - the finishing touches that separate good shops from average ones.",
              "The process's calling card is the cold cut: no heat-affected zone, no recast, no metallurgical change, no fume - decisive for hardened steels, titanium and aluminium aerospace alloys, laminated glass and fibre composites that a laser would burn or delaminate. The jet pierces its own starting hole, nests parts tightly to save material, and runs unattended. The costs are real: garnet at 0.1-1 kg/min is the biggest consumable line, focusing tubes last 50-150 hours, the pump wants maintenance at 4000 bar, and the cut edge shows striations at speed. Applications: armour plate, stone inlay, aerospace panels, automotive trim, thick stacks of mixed material.",
            ],
            bullets: [
              "Garnet 60-150 mesh entrained at 0.1-1 kg/min by Venturi suction after the jewel orifice.",
              "Focusing tube (carbide, 0.8-1.6 mm) collimates the water-air-garnet jet; it lives 50-150 h.",
              "Kerf ≈ 0.8-2 mm; head tilt and speed scheduling control taper and striations.",
              "Cold cut: zero HAZ - the choice for composites, laminates and hardened sections.",
              "Running cost is garnet + pump + tube; edge quality falls as traverse speed rises.",
            ],
            table: {
              caption: "AWJM parameters and the effect of increasing each.",
              headers: ["Parameter", "Typical", "Effect of increasing"],
              rows: [
                ["Water pressure", "3000-4000 bar", "Depth and speed up, pump wear up"],
                ["Traverse speed", "20-500 mm/min", "Productivity up, striations and taper up"],
                ["Abrasive flow", "0.1-1 kg/min", "Cutting power up; garnet bill up"],
                ["Abrasive mesh", "60-150 mesh", "Coarser: faster, rougher edge"],
                ["Standoff", "1-5 mm", "Spot grows, edge quality falls"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The AWJM parameter hierarchy",
              caption: "Pressure buys capability; everything below it buys quality.",
              tiers: [
                { label: "Water pressure", note: "the depth lever" },
                { label: "Traverse speed", note: "the quality-productivity trade" },
                { label: "Garnet rate + mesh", note: "erosion per mm of travel" },
                { label: "Orifice, tube, standoff", note: "kerf geometry" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the cold-cut advantage with three materials",
              body: "AWJM questions live or die on the HAZ argument. Name hardened steel, titanium and CFRP and state 'no thermal damage, no delamination, no recast' - examiners look for the materials, not the adjectives.",
            },
            keyTerms: [
              { term: "Garnet", definition: "The natural mineral abrasive (60-150 mesh) most used in AWJM; hard, tough and cheap." },
              { term: "Entrainment", definition: "Venturi suction of abrasive into the water jet inside the mixing chamber." },
              { term: "Focusing tube", definition: "The carbide tube after the mixing chamber that realigns the three-phase jet onto the work." },
            ],
            examQuestions: [
              {
                q: "Explain AWJM with a sketch covering orifice, mixing chamber and focusing tube. Discuss the main process parameters and the hierarchy of their effects, and justify why AWJM is preferred for composites and thick hardened sections.",
                marks: 7,
                outline: [
                  "Sketch: pump, accumulator, jewel orifice, mixing chamber, focusing tube, work, catcher.",
                  "Entrainment: Venturi draws garnet into the jet; the tube collimates it.",
                  "Parameters: pressure, speed, abrasive rate and mesh, standoff - the hierarchy.",
                  "Cutting mechanism: micro-erosion at 600-900 m/s; kerf 0.8-2 mm.",
                  "Cold cut: no HAZ, no recast, no fume - composites and hardened steel survive.",
                  "Limits: garnet cost, striations, taper, noise; pump maintenance.",
                  "Applications: armour, stone, aerospace panels, mixed-material stacks.",
                ],
              },
              {
                q: "Name the abrasive used in AWJM and two properties that suit it.",
                marks: 2,
              },
              {
                q: "Why does AWJM produce no heat-affected zone? Give one application that depends on this.",
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
      title: "Thermal Energy Processes",
      summary:
        "Thermal energy processes: die-sinking and wire-cut EDM, laser, electron beam and plasma arc machining - spark physics, beam generation, arc constriction, parameters and the accuracy-rate-damage trade of each.",
      chapter: {
        number: "03",
        title: "Sparks, Beams and Plasma",
        intro:
          "Unit III is the heart of the paper: die-sinking and wire-cut EDM, laser, electron beam and plasma arc machining - five processes that remove material by melting and vaporising it, each with a different carrier of energy and its own signature of accuracy, rate and surface damage.",
        inOneBreath:
          "EDM sparks in a dielectric gap melt both faces at ≈ 10,000 C; wire EDM turns the electrode into a travelling wire for through-profiles; LBM focuses coherent light to 10^6-10^8 W/cm2; EBM needs vacuum but has the finest spot; PAM constricts an ionised gas to 16,500-30,000 C.",
        sections: [
          {
            number: "3.1",
            title: "Electrical discharge machining: die-sinking EDM",
            body: [
              "EDM erodes metal with controlled sparks. Work and electrode, both immersed in a dielectric (hydrocarbon oil or deionised water), face each other across a gap of 10-100 um; a DC pulse generator applies 50-300 V. When the local field ionises the dielectric, a spark channel forms - local temperature of the order of 8,000-12,000 C - and a micro-volume of both surfaces melts and partly vaporises. When the pulse ends the channel collapses, throwing molten metal into the dielectric to solidify as debris, which flushing carries away. The servo-controlled feed keeps the mean gap constant while thousands of sparks per second riddle the surface with craters - the cavity grows as the mirror of the electrode.",
              "Every pulse is a choice between speed and finish. Long, high-current pulses (tens of amperes, hundreds of microseconds) dig big craters: roughing rates reach a few hundred mm3/min but leave Ra 2-4 um and a thick white layer. Short, low-energy pulses leave small craters: Ra below 0.5 um at a crawl. Electrode material matters equally: graphite machines fast with modest wear, copper gives fine finishes, copper-tungsten survives carbide work. Wear is unavoidable - sparks attack both faces - and is managed with wear-compensating orbits, multiple electrodes, or simply choosing wire EDM for through-shapes.",
              "EDM's signature is indifference to hardness: any electrical conductor, hardened or not, machines identically - which is why die and mould shops harden first and EDM afterwards, skipping distortion. Blind three-dimensional cavities, sharp internal corners, thin ribs, deep slots and burr-free edges are all stock work; the hole-popping variant drills start holes for wire EDM and deep small holes in steel. The audit items: a recast layer and micro-cracks that demand polishing on fatigue parts, electrode design and manufacturing cost, oil fire risk, and a matte grey surface as cut. Nothing else reaches the same geometries in hardened stock.",
            ],
            bullets: [
              "Spark channel ≈ 10,000 C removes metal from both faces; the electrode needs wear management.",
              "Gap 10-100 um held by servo; the dielectric cools, insulates and flushes debris.",
              "Pulse current x pulse-on time trades MRR for finish; finishing pulses leave Ra < 0.5 um.",
              "Electrodes: graphite (fast, low wear), copper (fine finish), copper-tungsten (carbide).",
              "Recast white layer + micro-cracks: polish fatigue-critical surfaces after EDM.",
            ],
            table: {
              caption: "EDM pulse regimes and their results.",
              headers: ["Regime", "Current", "Pulse-on", "Result"],
              rows: [
                ["Roughing", "15-60 A", "100-500 us", "Fast, Ra 2-4 um, thick recast"],
                ["Semi-finish", "8-15 A", "30-100 us", "Ra 1-2 um"],
                ["Finishing", "2-8 A", "5-30 us", "Ra 0.4-1 um"],
                ["Micro-finish", "Below 2 A", "Below 10 us", "Ra below 0.4 um, very slow"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "EDM pulse energy and an MRR estimate for roughing and finishing settings.",
              code: `# Energy per pulse and an empirical spark-erosion rate
K = 0.0014   # mm3 removed per joule delivered to the gap (empirical)

def pulse_energy(volts, amps, on_time_us):
    return volts * amps * on_time_us * 1e-6          # joules

def mrr_mm3_per_min(energy_j, frequency_hz):
    return K * energy_j * frequency_hz * 60          # mm3/min

rough_e  = pulse_energy(150, 60, 200)     # roughing pulse
finish_e = pulse_energy(120, 4, 8)        # finishing pulse

print(f"roughing : {rough_e:.2f} J  ->  {mrr_mm3_per_min(rough_e, 2000):.0f} mm3/min")
print(f"finishing: {finish_e*1000:.1f} mJ ->  {mrr_mm3_per_min(finish_e, 200000):.1f} mm3/min")`,
            },
            diagram: {
              kind: "cycle",
              title: "One EDM spark cycle",
              caption: "Charge, breakdown, discharge, collapse, flush - then again, thousands of times a second.",
              steps: [
                { label: "Servo holds the gap at 10-100 um" },
                { label: "Dielectric ionises: spark channel forms", note: "T ≈ 8,000-12,000 C" },
                { label: "Melt and vapour bubble grows" },
                { label: "Pulse off: bubble collapses", note: "crater left on both faces" },
                { label: "Flush clears debris; next spark elsewhere" },
              ],
            },
            callout: {
              type: "exam",
              title: "Never skip the servo and the flush",
              body: "Two marks of every EDM long answer hide in the words 'servo-controlled gap' and 'dielectric flushing'. One sentence each - gap maintenance prevents short and open circuits; flushing removes debris and cools - banks both.",
            },
            keyTerms: [
              { term: "Dielectric", definition: "The insulating fluid (oil or deionised water) that lets the spark form, then carries away debris and heat." },
              { term: "Recast (white) layer", definition: "The re-solidified, hard, micro-cracked skin EDM leaves; removed by polishing on critical parts." },
              { term: "Electrode wear ratio", definition: "Volume lost by the electrode divided by volume removed from the work." },
            ],
            examQuestions: [
              {
                q: "Explain the working principle of die-sinking EDM with a sketch. Describe one spark cycle, the roles of dielectric and servo feed, and the effect of pulse current and pulse-on time on MRR and surface finish.",
                marks: 7,
                outline: [
                  "Principle: sparks in a dielectric gap melt and vaporise both faces.",
                  "Sketch: generator, servo feed, electrode, gap, dielectric, work, filter pump.",
                  "Cycle: charge - breakdown - discharge - collapse - flush; T ≈ 10,000 C.",
                  "Dielectric: insulation, ionisation medium, debris removal, cooling.",
                  "Servo: maintains the 10-100 um gap, prevents short and open circuits.",
                  "Parameters: current and pulse-on set crater size; roughing vs finishing regimes.",
                  "Finish: Ra 0.4-4 um; recast layer; polish fatigue-critical parts.",
                ],
              },
              {
                q: "State any two functions of the dielectric in EDM.",
                marks: 2,
              },
              {
                q: "Why can EDM machine fully hardened steel when a milling cutter cannot?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Wire-cut EDM",
            body: [
              "Wire EDM replaces the shaped electrode with a continuous travelling wire - brass of 0.1-0.3 mm, sometimes molybdenum or coated brass - that unwinds from a spool, passes through the work, and is wound or scrapped. Because fresh wire enters the cut continuously, electrode wear is irrelevant to accuracy. Deionised water, flushed coaxially through upper and lower nozzles, is the dielectric; it cools better than oil and leaves a finer surface. The CNC moves the wire path in X-Y while U-V axes tilt the upper guide, cutting tapers up to ±30 degrees; the kerf is simply wire diameter plus two spark gaps, about 0.15-0.4 mm.",
              "Accuracy is built in passes. The rough cut at full power leaves roughly 0.05 mm of stock and a striated wall; two to four skim cuts at progressively lower energy - with the wire path recalculated between passes - bring tolerance to ±0.002-0.005 mm and the wall to Ra 0.1-0.2 um. Kerf offset (wire radius plus discharge gap) is programmed at the CAM stage. Wire tension, water conductivity and flush pressure are monitored because a wire break ruins the part. A classic shop trick: stack the punch and the die plate and cut both in one pass - the kerf itself becomes a perfectly matched clearance.",
              "Against die-sinking EDM, wire-cut trades capability for economy: no expensive shaped electrode to design and machine - the wire is the electrode - which makes it unbeatable for one-offs, but it can only cut through-profiles, never blind cavities. Its portfolio is the stamping and press trade: punch and die sets, stripper plates, progressive-die parts, extrusion die lips, carbide form tools, gears and cams to ±0.005 mm, and any hard, thin, intricate conductive outline that a saw or mill cannot reach.",
            ],
            bullets: [
              "Brass wire 0.1-0.3 mm travels at several m/min - a fresh electrode is always in the cut.",
              "Deionised water dielectric: cooler gap, finer finish, cleaner than oil.",
              "Kerf = wire diameter + 2 spark gaps ≈ 0.15-0.4 mm; programmed as kerf offset.",
              "2-4 skim passes take the wall to ±0.002-0.005 mm and Ra 0.1-0.2 um.",
              "U-V head tilt cuts tapers; stacked punch-and-die cutting gives free matched clearance.",
            ],
            table: {
              caption: "Die-sink vs wire-cut EDM.",
              headers: ["Aspect", "Die-sink EDM", "Wire-cut EDM"],
              rows: [
                ["Electrode", "Shaped Cu/graphite, made per cavity", "Travelling brass wire, nothing to shape"],
                ["Dielectric", "Hydrocarbon oil", "Deionised water"],
                ["Geometry", "Blind 3D cavities", "Through 2D profiles + taper"],
                ["Electrode cost", "High - design, machine, replace", "None - the wire is the consumable"],
                ["Accuracy", "±0.01 mm", "±0.002-0.005 mm"],
                ["Best for", "Mould and die cavities", "Punches, dies, profiles, one-offs"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Programming a wire-cut profile",
              caption: "From CAD to a finished die plate in five moves.",
              steps: [
                { label: "CAD profile + kerf offset", note: "wire radius + discharge gap" },
                { label: "Rough cut at high energy", note: "leave ≈ 0.05 mm stock" },
                { label: "Skim 1: correct taper and bow" },
                { label: "Final skim", note: "Ra 0.1-0.2 um" },
                { label: "CMM check the profile" },
              ],
            },
            callout: {
              type: "tip",
              title: "One trick, many marks",
              body: "The stacked punch-and-die cut - one wire path, two matched parts, kerf as clearance - is exactly the kind of shop insight examiners reward. Learn the numbers: wire 0.1-0.3 mm, kerf 0.15-0.4 mm, accuracy ±0.005 mm.",
            },
            keyTerms: [
              { term: "Skim cut", definition: "A low-energy finishing pass of the wire after the rough cut, correcting taper and improving Ra." },
              { term: "Kerf offset", definition: "Wire radius plus discharge gap, added to the programmed path so the part finishes on size." },
              { term: "Deionised water", definition: "Low-conductivity water dielectric used in wire EDM for cooler, cleaner cutting than oil." },
            ],
            examQuestions: [
              {
                q: "Explain wire-cut EDM with a sketch. How does it differ from die-sinking EDM? Explain skim cutting, taper cutting and the one-pass production of matched punch and die sets.",
                marks: 7,
                outline: [
                  "Sketch: spool, wire, guides, U-V head, nozzles, work, dielectric tank, CNC.",
                  "Differences: electrode, dielectric, geometry class, accuracy - the comparison table.",
                  "Skim cutting: stock left by the rough cut; 2-4 passes at falling energy.",
                  "Taper: U-V tilt to ±30 degrees; constant-taper punch dies.",
                  "Punch-and-die: stack the plates, cut together, kerf becomes the clearance.",
                  "Parameters: wire 0.1-0.3 mm, kerf 0.15-0.4 mm, ±0.002-0.005 mm.",
                  "Applications: stamping dies, carbide profiles, one-off parts.",
                ],
              },
              {
                q: "State the wire material and diameter range used in wire EDM.",
                marks: 2,
              },
              {
                q: "Why does wire EDM use deionised water rather than oil?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Laser beam machining (LBM)",
            body: [
              "A laser amplifies light by stimulated emission: a pumping source excites a lasing medium - CO2 gas at 10.6 um wavelength, Nd:YAG crystal or fibre at about 1.06 um - inside a resonator of two mirrors, one partially transmitting. The exiting beam is collimated, coherent and monochromatic; a lens focuses it to a spot of 0.1-0.5 mm, raising intensity to the order of 10^6-10^8 W/cm2 - enough to melt, vaporise and ablate any material, conductor or insulator, with no contact force and no tool wear. An assist gas jet blows the melt out of the kerf: oxygen for exothermic speed on steel, nitrogen for bright, oxide-free edges.",
              "The two families divide the work. Continuous-wave CO2 lasers of 0.25-5 kW cut sheet at metres per minute and excel on non-metals - polymers, wood, acrylic, paper, textiles - and on thicker steel. Pulsed Nd:YAG and fibre lasers drill: millisecond percussion and trepanned holes in turbine blades (cooling holes of 0.3-1 mm at high depth-to-diameter), and ever-shorter pulses - nanosecond, picosecond, femtosecond - remove material by ablation with almost no heat-affected zone, the basis of precision micro-machining. Fibre lasers now dominate sheet-metal profiling and handle reflective copper and brass that older wavelengths bounced back dangerously.",
              "LBM's virtues are speed on thin stock, zero contact, easy automation, the ability to start anywhere and cut any outline; the kerf is a narrow 0.1-0.3 mm. Its limits are physical: thickness - practical steel cutting stops around 20-25 mm - a heat-affected zone of 20-300 um, taper and striation on thick cuts, and a capital cost that only high throughput justifies. Reflective and heat-sensitive materials need wavelength and parameter care. Applications reach from sheet-metal profiling and tube cutting to stents and medical devices, marking and micro-drilling, each served by exactly one of the four laser types in the table.",
            ],
            bullets: [
              "CO2 at 10.6 um for non-metals and thick steel; Nd:YAG and fibre near 1.06 um for drilling and profiling.",
              "Focused spot 0.1-0.5 mm at ≈ 10^6-10^8 W/cm2 - melts, vaporises or ablates anything.",
              "Assist gas: O2 gives fast exothermic cutting of steel; N2 gives bright, oxide-free edges.",
              "Zero contact force: foils, wafers and membranes cut without distortion.",
              "Limits: ≈ 25 mm steel, HAZ 20-300 um, taper, reflective metals need fibre wavelengths.",
            ],
            table: {
              caption: "The four industrial lasers and their territories.",
              headers: ["Laser", "Wavelength", "Mode", "Typical work"],
              rows: [
                ["CO2", "10.6 um", "CW 0.25-5 kW", "Non-metals, thick steel cutting"],
                ["Nd:YAG", "≈ 1.06 um", "Pulsed ms-us", "Drilling, spot welding, marking"],
                ["Fibre", "≈ 1.07 um", "CW and pulsed", "Sheet profiling, Cu/Al, stents"],
                ["Excimer", "UV", "Pulsed ns", "Photo-ablation, micro-machining"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From pump to cut",
              caption: "The five stations of every LBM sketch answer.",
              steps: [
                { label: "Pump energy in", note: "lamp, diode or discharge" },
                { label: "Lasing medium emits", note: "CO2, Nd:YAG or fibre" },
                { label: "Resonator mirrors amplify", note: "coherent, monochromatic" },
                { label: "Beam delivery + lens", note: "spot 0.1-0.5 mm" },
                { label: "Assist gas clears the kerf", note: "O2 fast, N2 clean" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the wavelength and the job",
              body: "Two marks sit on the CO2/Nd:YAG contrast: 10.6 um for non-metals and thick cutting, ≈ 1.06 um pulsed for drilling. Quote both wavelengths and one application each - that is the whole marking key.",
            },
            keyTerms: [
              { term: "Coherence", definition: "The property of laser light in which waves march in phase, allowing focusing to a tiny, intense spot." },
              { term: "Assist gas", definition: "The coaxial jet (O2, N2, Ar) that blows melt from the kerf and shields the cut edge." },
              { term: "Ablation", definition: "Direct solid-to-vapour removal by ultra-short pulses, with almost no heat-affected zone." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of LBM with a sketch. Name two industrial lasers with wavelengths and typical powers, explain the role of assist gas, and state merits, limitations and applications.",
                marks: 7,
                outline: [
                  "Sketch: pump, lasing medium, resonator mirrors, beam delivery, lens, assist gas, work.",
                  "Physics: stimulated emission gives coherent light; focused to a 0.1-0.5 mm spot.",
                  "CO2: 10.6 um, 0.25-5 kW CW - non-metals, thick steel.",
                  "Nd:YAG and fibre: ≈ 1.06 um, pulsed - drilling, turbine holes, stents.",
                  "Assist gas: oxygen (fast, exothermic) vs nitrogen (clean edges).",
                  "Merits: no contact, no tool wear, any material; limits: 25 mm steel, HAZ, taper.",
                  "Applications: sheet profiling, drilling, marking, medical devices.",
                ],
              },
              {
                q: "State the wavelength and one application each of CO2 and Nd:YAG lasers.",
                marks: 2,
              },
              {
                q: "Why can LBM machine glass while EDM cannot?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Electron beam machining (EBM)",
            body: [
              "EBM fires electrons, not light. A heated tungsten cathode emits electrons by thermionic emission; an anode accelerates them through 50-150 kV; electromagnetic lenses focus the beam to a spot of 0.01-0.1 mm; deflection coils steer it with zero inertia. On impact, the beam's kinetic energy converts to heat at power densities of the order of 10^8-10^9 W/cm2, vaporising material in pulses of 0.1-100 microseconds. The whole column and the job sit in a high vacuum of about 10^-3 to 10^-5 torr - without it, gas molecules would scatter the electrons and the work would oxidise.",
              "The vacuum is both the strength and the curse. It gives EBM the finest spot of any beam process, holes of 0.1-1 mm at depth-to-diameter ratios up to about 100, chemically clean surfaces, and an extremely small heat-affected zone, because pulse energy is low and duration short. But it also means every job must be pumped down, so throughput is poor and part size is capped by chamber volume; and the beam generates X-rays, so the machine wears lead shielding and interlocks. Electron energy also couples into any material - metals, ceramics, polymers - regardless of conductivity or reflectivity.",
              "EBM's niches follow: micro-drilling of spinneret and wire-drawing dies, cooling holes in hot-section turbine blades, small holes in fuel-system components, and electron-beam welding - a sibling process sharing the same column. Set against LBM, EBM wins on spot size, depth-to-diameter and reflectivity-free coupling, and loses on capital cost, pumping time and part size. A comparison table is the standard exam vehicle for this pair, and the two short questions usually probe the vacuum and the X-ray shield.",
            ],
            bullets: [
              "Electrons at 50-150 kV, pulses 0.1-100 us; magnetic lenses focus to a 0.01-0.1 mm spot.",
              "Power density ≈ 10^8-10^9 W/cm2 - the highest of the beam processes.",
              "High vacuum (≈ 10^-3 to 10^-5 torr): no scattering, no oxidation, but pump-down on every job.",
              "Magnetic deflection: inertialess steering for micro-hole arrays.",
              "X-ray generation demands lead shielding and interlocks - LBM needs none.",
            ],
            table: {
              caption: "EBM vs LBM, the standing comparison.",
              headers: ["Aspect", "EBM", "LBM"],
              rows: [
                ["Energy carrier", "Electrons", "Photons"],
                ["Medium", "High vacuum", "Air (or cover gas)"],
                ["Spot size", "0.01-0.1 mm", "0.1-0.5 mm"],
                ["Reflective metals", "No problem", "Hard for CO2; fibre OK"],
                ["Throughput", "Low (pump-down)", "High (instant start)"],
                ["Safety", "X-ray shielding", "Optical enclosure"],
                ["Best for", "Deep micro-holes, welding", "Profiling, thin stock, non-metals"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The EBM column",
              caption: "Cathode to workpiece: five labels, one vacuum.",
              stages: [
                { label: "Heated cathode", note: "thermionic electrons" },
                { label: "Anode accelerates", note: "50-150 kV" },
                { label: "Magnetic lens focuses", note: "0.01-0.1 mm spot" },
                { label: "Deflection coils steer", note: "inertialess" },
                { label: "Work in vacuum chamber", note: "X-ray shielded" },
              ],
            },
            callout: {
              type: "exam",
              title: "Answer 'why vacuum' in three clauses",
              body: "No gas scattering of electrons, no oxidation of the cut, no high-voltage arcing - one sentence, three marks' worth of content, usually asked as a 2-3 mark short.",
            },
            keyTerms: [
              { term: "Electromagnetic lens", definition: "A coil whose field focuses the electron beam, playing the lens's role in optics." },
              { term: "High vacuum", definition: "Chamber pressure of 10^-3 to 10^-5 torr, needed to keep the electron beam coherent and the cut clean." },
              { term: "Thermionic emission", definition: "Release of electrons from a heated tungsten cathode - the EBM gun's source." },
            ],
            examQuestions: [
              {
                q: "Explain EBM with a sketch showing cathode, anode, focusing lens and deflection system. Why is a vacuum essential? Compare EBM with LBM and give applications of each.",
                marks: 7,
                outline: [
                  "Sketch: gun, anode, magnetic lenses, deflection coils, vacuum chamber, work.",
                  "Parameters: 50-150 kV, 0.01-0.1 mm spot, 0.1-100 us pulses.",
                  "Vacuum: no scattering, no oxidation, no arcing; enables 10^8-10^9 W/cm2.",
                  "Comparison with LBM: carrier, medium, spot, throughput, safety - the table.",
                  "Merits: finest features, deep holes with L/D up to 100, clean surfaces.",
                  "Demerits: pump-down time, chamber size, X-ray shielding, cost.",
                  "Applications: spinneret dies, blade cooling holes, EB welding.",
                ],
              },
              {
                q: "State two applications of EBM.",
                marks: 2,
              },
              {
                q: "Why does EBM require X-ray shielding while LBM does not?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Plasma arc machining (PAM)",
            body: [
              "Plasma is ionised gas - the fourth state of matter - and a plasma torch makes it on demand. A tungsten cathode centred in a water-cooled nozzle strikes an arc; gas (air, nitrogen, argon-hydrogen) swirls through the nozzle and is ionised to 16,500-30,000 C. The nozzle constricts the arc three ways: mechanically (small bore), thermally (the cool swirling gas blanket squeezes it) and magnetically (current-induced pinch). The result is a stiff, high-velocity jet that melts and blows away any material it touches - the hottest cutting source in this subject.",
              "Two electrical configurations split the applications. In the transferred arc the circuit closes through the workpiece: the arc jumps nozzle-to-work, giving maximum power density - this is plasma arc cutting, gouging and welding of any conductive metal 5-100 mm and more thick. In the non-transferred arc the arc stays inside the torch, nozzle-to-nozzle, and only the hot plasma jet exits - lower density, but free of any electrical demand on the work, which suits plasma spraying of coatings and the heating or cutting of non-conductors such as ceramics. Underwater variants quieten the process and shrink the heat-affected zone.",
              "PAM's economics: the fastest way to cut medium-thick metal, moderate capital, cheap consumables (electrode and nozzle tips), but a wide kerf of 1.5-5 mm with bevelled edges and a real heat-affected zone - accuracy is around ±0.5 mm, so PAM is a shape-making roughing process, not a finishing one. Applications: shipyard plate bevels, stainless pipe and sheet, aluminium sections, scrap and demolition cutting, and plasma-sprayed wear and thermal-barrier coatings on turbine parts. Fume, glare and noise make enclosure and extraction mandatory.",
            ],
            bullets: [
              "Plasma at 16,500-30,000 C: the hottest source among the AMPs.",
              "Three pinches - bore, cool-gas blanket, magnetic - stiffen and speed the arc.",
              "Transferred arc (to the work) cuts conductive metal; non-transferred (internal) sprays and heats non-conductors.",
              "Cuts 5-100 mm metal fast; kerf 1.5-5 mm, ±0.5 mm, bevelled edge, real HAZ.",
              "Underwater cutting cuts noise, fume and HAZ - standard practice in shipyards.",
            ],
            table: {
              caption: "Transferred vs non-transferred plasma arcs.",
              headers: ["Aspect", "Transferred arc", "Non-transferred arc"],
              rows: [
                ["Arc path", "Nozzle to workpiece", "Nozzle to internal anode"],
                ["Power density", "High", "Moderate"],
                ["Work must conduct", "Yes", "No"],
                ["Main use", "Cutting, gouging, welding", "Spraying, heating, ceramics"],
                ["HAZ", "Significant", "Less concentrated"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choose the arc mode for the job",
              caption: "One torch, two circuits - and one way to destroy the nozzle.",
              start: "A plasma torch is fired up",
              branches: [
                {
                  label: "Transferred arc",
                  outcome: "Arc jumps nozzle-to-work: maximum density for cutting and gouging metals",
                  good: true,
                },
                {
                  label: "Non-transferred arc",
                  outcome: "Jet alone exits: sprays coatings and heats non-conductors",
                  good: true,
                },
                {
                  label: "No swirl gas / worn nozzle",
                  outcome: "Arc doubles back and melts the nozzle - consumable lost",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The three pinches",
              body: "'Explain the constriction of the plasma arc' is a standing favourite. Write all three - mechanical (bore), thermal (swirl blanket) and magnetic (self-pinching) - and name the transferred/non-transferred split in the same answer.",
            },
            keyTerms: [
              { term: "Transferred arc", definition: "Plasma arc that terminates on the workpiece, giving the highest energy density for cutting." },
              { term: "Pinch effect", definition: "Self-magnetic constriction of a current-carrying arc, added to bore and gas constriction." },
              { term: "Plasma", definition: "Ionised, electrically conductive gas at 16,500-30,000 C produced in the torch." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a plasma arc torch with a sketch. Distinguish transferred from non-transferred arcs, explain the three constriction effects, and state merits, demerits and applications of PAM.",
                marks: 7,
                outline: [
                  "Sketch: cathode, nozzle, swirl gas, arc, work, water cooling.",
                  "Plasma generation: gas ionised to 16,500-30,000 C.",
                  "Constriction: mechanical bore, thermal swirl blanket, magnetic pinch.",
                  "Transferred vs non-transferred: path, density, uses, conductivity demand.",
                  "Merits: fastest thick-metal cutting, moderate cost; demerits: kerf, HAZ, noise, fume.",
                  "Underwater variant: less noise and HAZ.",
                  "Applications: shipyard bevels, stainless, plasma spray on turbine parts.",
                ],
              },
              {
                q: "State the temperature range of a plasma arc.",
                marks: 2,
              },
              {
                q: "Why can a non-transferred plasma jet treat ceramics while a transferred one cannot?",
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
      title: "Chemical and Electrochemical Processes",
      summary:
        "Chemical and electrochemical processes: chemical and photochemical milling through masks, ECM's anodic dissolution governed by Faraday's laws, electrolyte and accuracy practice, and electrochemical grinding.",
      chapter: {
        number: "04",
        title: "Dissolving Metal, Atom by Atom",
        intro:
          "Chemistry cuts without force or heat: chemical milling and photochemical machining etch through masks; electrochemical machining dissolves the anode at a current set by Faraday's laws; electrochemical grinding marries dissolution with a metal-bonded wheel. Five sections, from maskant to MRR sums.",
        inOneBreath:
          "CHM: mask, etch, demask, mind the undercut; ECM: reverse electroplating at 5-25 V and up to 10 kA, the tool never wears, and MRR = eta·I·A/(z·F·rho); ECG: 90% dissolution, 10% abrasive, no burn and no burr.",
        sections: [
          {
            number: "4.1",
            title: "Chemical machining (CHM) and photochemical machining",
            body: [
              "Chemical machining dissolves metal where a mask does not protect it. The sequence is always the same: clean and degrease; apply a maskant (a chemically resistant polymer or elastomer, or a photoresist for fine work); open the areas to be cut by scribing and peeling, or photographically through artwork; etch in a tank or spray of etchant - sodium hydroxide for aluminium, acid mixtures with inhibitors for steel and titanium; rinse; strip the mask and inspect. Removal is purely chemical, atom by atom: no force, no heat, no burr, no stress, at a rate of 0.01-0.05 mm per minute set by time, temperature and concentration.",
              "The process's accuracy problem is undercut: the etchant attacks sideways beneath the mask edge at nearly the same rate it attacks downward. The etch factor - depth divided by undercut - runs about 1 to 3, so accuracy worsens with depth; shallow pockets hold ±0.05-0.1 mm, and corners must be radiused and dimensions generous. Photochemical machining (PCM) applies the same chemistry to thin foil (about 0.02-1 mm) through photographic masks: lead frames, shims, springs, screens and mask plates come off a whole sheet at once with tolerance near ±0.01-0.05 mm and no burr at all.",
              "CHM shines where force and heat would ruin the part: weight-relief pockets in aircraft skin panels, chem-milled integrally stiffened panels, thin hardened plates, and any difficult alloy - titanium and nickel superalloys etch as willingly as soft steel, since hardness is irrelevant to chemistry. Many identical parts etch simultaneously, masks are cheap, and no expensive tooling exists. The penalties: slow, shallow removal; aggressive etchants (HF for titanium is nasty) that demand handling and neutralisation; hydrogen pickup and surface smut on some alloys; and no sharp corners or deep features. Applications: aerospace pockets, decorative panels, printed-circuit foils, shims and flat springs.",
            ],
            bullets: [
              "Always the same chain: clean, mask, open (scribe or photo), etch, rinse, demask, inspect.",
              "Etchants: NaOH for aluminium; HCl/HNO3 blends and HF (titanium) elsewhere; inhibitors protect masked walls.",
              "Etch factor = depth / undercut, typically 1-3 - accuracy degrades with depth, corners are radiused.",
              "PCM on foil: photoresist artwork, whole sheets of burr-free parts at ±0.01-0.05 mm.",
              "No force, no heat - thin skins and hardened plates etch without distortion.",
            ],
            table: {
              caption: "Chemical milling vs photochemical machining.",
              headers: ["Aspect", "Chemical milling", "Photochemical machining"],
              rows: [
                ["Mask", "Elastomer, scribe and peel", "Photoresist + artwork"],
                ["Stock", "Plates and skins", "Thin foil ≈ 0.02-1 mm"],
                ["Depth", "Shallow pockets possible", "Through features only"],
                ["Tolerance", "±0.05-0.15 mm", "±0.01-0.05 mm"],
                ["Batch", "One part, several pockets", "Whole sheets of parts"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Chemical milling a pocket",
              caption: "Five stations; the etch step is timed to hold the depth.",
              steps: [
                { label: "Clean and degrease" },
                { label: "Apply and cure maskant" },
                { label: "Scribe and peel cut-openings" },
                { label: "Etch - timed dip or spray", note: "0.01-0.05 mm/min" },
                { label: "Rinse, demask, inspect" },
              ],
            },
            callout: {
              type: "exam",
              title: "Define etch factor with a sketch",
              body: "Draw the mask edge, the depth d and the undercut a, then write etch factor = d/a ≈ 1-3. That sketch-and-definition pair is the most repeated 2-3 marks in the chemical machining question.",
            },
            keyTerms: [
              { term: "Maskant", definition: "The chemically resistant coating (elastomer or photoresist) that defines what the etchant may attack." },
              { term: "Undercut", definition: "Sideways attack beneath the mask edge; sets the accuracy limit of chemical machining." },
              { term: "Etch factor", definition: "Depth of cut divided by undercut; the yardstick of CHM accuracy, typically 1-3." },
            ],
            examQuestions: [
              {
                q: "Describe chemical machining with a sketch covering each step from cleaning to demasking. Define etch factor, discuss the accuracy of the process, and give its merits, demerits and applications.",
                marks: 7,
                outline: [
                  "Sketch: masked work in etchant, with undercut geometry shown.",
                  "Steps: clean, mask, open, etch, rinse, demask, inspect.",
                  "Etch factor = depth/undercut; typical 1-3; tolerance worsens with depth.",
                  "Etchant examples: NaOH (Al), acids + inhibitors (steel), HF (Ti).",
                  "Merits: no force, heat, or burr; many parts at once; hardness irrelevant.",
                  "Demerits: slow, shallow, undercut, hazardous etchants, no sharp corners.",
                  "Applications: aircraft skin pockets, PCM flat parts, printed-circuit foils.",
                ],
              },
              {
                q: "Define etch factor and state its typical range.",
                marks: 2,
              },
              {
                q: "Differentiate chemical milling from photochemical machining.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Electrochemical machining: principle and equipment",
            body: [
              "ECM is electroplating run backwards. The workpiece is the anode, the tool the cathode, and between them flows a conductive electrolyte - 10-20% sodium chloride or sodium nitrate in water - at 10-50 m/s through a gap of 0.1-1 mm kept constant by a servo feed. Direct current at 5-25 V, with densities of 10-200 A/cm2, strips atoms from the anode: iron leaves as Fe2+ ions, reacts to form iron hydroxide, and the resulting sludge is swept away by the flow. Nothing touches: no tool wear, no cutting force, no heat-affected zone, no work-hardening, no recast - the workpiece is machined without ever feeling a force or a flame.",
              "Equipment has four blocks: a high-current DC source (up to 10,000 A on big machines), the servo-fed cathode tool (copper, brass or stainless steel, insulated everywhere except the working face), the electrolyte plant - pumps, filters for the hydroxide sludge, and a chiller, because ohmic heating changes conductivity - and the machine frame with corrosion-resistant ways. The cavity produced is the mirror of the tool face displaced by the gap; side overcut is about twice the side gap, and sharp corners round off because field lines smooth themselves - a design input to tool making, not a defect of it.",
              "The signature capability: removal rate set purely by current (Faraday's law, next section) and completely independent of hardness - which makes nickel superalloys, hardened steels and titanium machine as easily as mild steel. Surfaces finish at Ra 0.1-1 um, stress-free, so fatigue behaviour is excellent. Accuracy is the weak side: ±0.05-0.1 mm generally, and electrolyte chemistry control (temperature, concentration, pH) is a discipline of its own. Classic work: blade-root fir-tree slots in nickel-alloy discs, deep slots and 3D cavities in materials a cutter cannot touch, and electrochemical deburring of machined edges.",
            ],
            bullets: [
              "Work is the anode, tool the cathode; Fe -> Fe2+ + 2e-, out as hydroxide sludge.",
              "Gap 0.1-1 mm at 5-25 V and 10-200 A/cm2; the servo feed holds geometry as it dissolves.",
              "Electrolyte NaCl (efficient) or NaNO3 (accurate), pumped at 10-50 m/s, filtered, chilled.",
              "The tool never wears; no force, no heat, no recast: Ra 0.1-1 um, fatigue-friendly.",
              "Accuracy ±0.05-0.1 mm; corners round with the field - design the tool for it.",
            ],
            table: {
              caption: "The ECM operating window.",
              headers: ["Parameter", "Typical", "Note"],
              rows: [
                ["Voltage", "5-25 V DC", "Low voltage, very high current"],
                ["Current", "50-10,000 A", "Sets MRR directly (Faraday)"],
                ["Current density", "10-200 A/cm2", "Sets the feed rate"],
                ["Gap", "0.1-1 mm", "Held by servo; sets the overcut"],
                ["Electrolyte", "10-20% NaCl or NaNO3", "Chilled, filtered, fast-flowing"],
                ["Feed rate", "0.2-5 mm/min", "Matches the dissolution rate"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The ECM loop",
              caption: "Energy in, ions out, electrolyte round and round.",
              stages: [
                { label: "DC source", note: "5-25 V, up to 10 kA" },
                { label: "Cathode tool shapes the field", note: "copper or brass" },
                { label: "Anode work dissolves ionically", note: "Fe -> Fe2+ + 2e-" },
                { label: "Electrolyte sweeps the sludge", note: "10-50 m/s" },
                { label: "Filter, chill, recirculate" },
              ],
            },
            callout: {
              type: "tip",
              title: "One line, whole concept",
              body: "'ECM is reverse electroplating, with a flowing electrolyte and a servo-held gap' - open any ECM answer with that sentence, then unpack: anode dissolves, cathode is untouched, sludge flushed, no heat, no force. The examiner sees the whole process in one line.",
            },
            keyTerms: [
              { term: "Anodic dissolution", definition: "Removal of workpiece metal as ions from the positive electrode - ECM's only removal mechanism." },
              { term: "Cathode tool", definition: "The never-wearing negative electrode whose face shapes the electric field and hence the cavity." },
              { term: "Equilibrium gap", definition: "The steady inter-electrode distance at which the dissolution rate matches the servo feed." },
            ],
            examQuestions: [
              {
                q: "Explain the working principle of ECM with a sketch. Describe the equipment and electrolyte system, the role of servo feed, and show why the tool never wears and the surface carries no thermal damage.",
                marks: 7,
                outline: [
                  "Principle: reverse electroplating; work anode, tool cathode, flowing electrolyte.",
                  "Sketch: DC source, tool, gap, work, electrolyte in and out, filter-chiller loop.",
                  "Reaction: Fe -> Fe2+ + 2e-; hydroxide sludge; flushing at 10-50 m/s.",
                  "Servo feed: matches dissolution, holds the 0.1-1 mm gap, defines the overcut.",
                  "No wear: the cathode is immune; no force or heat: stress-free Ra 0.1-1 um.",
                  "Electrolytes: NaCl efficient, NaNO3 accurate; chilling and filtration.",
                  "Applications: superalloy slots, 3D cavities, electrochemical deburring.",
                ],
              },
              {
                q: "Name two ECM electrolytes and one property of each.",
                marks: 2,
              },
              {
                q: "Why does ECM leave a fatigue-friendly surface while EDM may not?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Faraday's laws and MRR in ECM",
            body: [
              "Faraday's first law of electrolysis: the mass removed is proportional to the charge passed. The second law: for the same charge, the mass removed is proportional to the electrochemical equivalent, the atomic weight A divided by valency z. Combined with current efficiency, m = eta·I·t·A/(z·F), where F = 96,500 C/mol is the Faraday constant and eta the fraction of current actually dissolving metal - about 0.9-1.0 in sodium chloride, lower in nitrate. The laws are exact, so ECM's removal rate is predictable to a degree cutting processes never approach.",
              "Divide by density and the volumetric rate falls out: MRR = eta·I·A/(z·F·rho). For iron (A = 56, z = 2, rho = 7.86 g/cm3) at 1000 A and 90% efficiency, the rate is about 2000 mm3/min - two cubic centimetres a minute from one machine, which is why big ECM power supplies are rated in thousands of amperes. Divide once more by cavity area and you get the feed rate: f = eta·i·A/(z·F·rho), with i the current density - the speed dial of the process. Notice that hardness appears nowhere in the equation.",
              "Every numerical in this unit is the same shape: given material, current and efficiency, find MRR and machining time, or find the current for a target feed. Keep the data table of A, z and rho for iron, nickel, copper and aluminium in memory, write the law, substitute with units, and the marks are mechanical. The python snippet packages the calculation; the pyramid shows which levers actually move the rate - only current and efficiency, since A/z and rho are fixed by the metal.",
            ],
            bullets: [
              "First law: m is proportional to I·t; second law: m is proportional to A/z; combined: m = eta·I·t·A/(z·F).",
              "Volumetric MRR = eta·I·A/(z·F·rho); feed rate = eta·i·A/(z·F·rho).",
              "Iron at 1000 A and 90% efficiency gives ≈ 2 cm3/min - remember this anchor number.",
              "eta ≈ 0.9-1.0 with NaCl, lower with NaNO3 - state it in every numerical.",
              "F = 96,500 C/mol; know A, z and rho for Fe, Ni, Cu and Al (table below).",
            ],
            codeExample: {
              language: "python",
              caption: "Faraday MRR and cavity time for iron at ECM currents.",
              code: `F = 96500.0   # C/mol, Faraday constant

def ecm_mrr_mm3_per_min(I, A, z, rho, eta=1.0):
    """Volumetric removal rate for an anode dissolving at current I."""
    mass_rate = eta * I * A / (z * F)      # g/s
    vol_rate = mass_rate / rho             # cm3/s
    return vol_rate * 60 * 1000            # mm3/min

# Iron: A = 56, z = 2, rho = 7.86 g/cm3
print("Fe  1000 A:", ecm_mrr_mm3_per_min(1000, 56, 2, 7.86, 0.9), "mm3/min")

# Time to sink a 20 x 10 x 5 mm cavity in iron at 1500 A, eta = 0.95
vol = 20 * 10 * 5                          # mm3
rate = ecm_mrr_mm3_per_min(1500, 56, 2, 7.86, 0.95)
print("cavity time:", round(vol / rate, 1), "min")`,
            },
            table: {
              caption: "ECM data for common metals (memorise the first four rows).",
              headers: ["Metal", "A", "z", "rho (g/cm3)", "A/z"],
              rows: [
                ["Iron (Fe)", "56", "2", "7.86", "28.0"],
                ["Nickel (Ni)", "58.7", "2", "8.90", "29.4"],
                ["Copper (Cu)", "63.5", "2", "8.96", "31.8"],
                ["Aluminium (Al)", "27", "3", "2.70", "9.0"],
                ["Titanium (Ti)", "47.9", "4", "4.51", "12.0"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The ECM speed dials",
              caption: "What actually moves the removal rate - and what you cannot change.",
              tiers: [
                { label: "Current I", note: "the only MRR lever you own" },
                { label: "Equivalent weight A/z", note: "fixed by the metal" },
                { label: "Efficiency eta", note: "electrolyte chemistry" },
                { label: "Feed vs gap equilibrium", note: "the servo closes the loop" },
              ],
            },
            callout: {
              type: "exam",
              title: "The anchor number",
              body: "Iron at 1000 A and 90% efficiency removes ≈ 2 cm3/min. From this anchor you can scale any current, and examiners often set exactly that. Derive it once with the code above, then carry it into the hall.",
            },
            keyTerms: [
              { term: "Faraday constant", definition: "96,500 C/mol; the charge of one mole of electrons, the conversion factor in all ECM calculations." },
              { term: "Electrochemical equivalent", definition: "A/z - the mass dissolved per unit charge for a given metal." },
              { term: "Current efficiency", definition: "The fraction of total current that actually dissolves workpiece metal rather than evolving gas." },
            ],
            examQuestions: [
              {
                q: "State Faraday's laws of electrolysis and derive the expression for volumetric MRR in ECM. Calculate the MRR of pure iron at 1000 A with 90% current efficiency (A = 56, z = 2, rho = 7.86 g/cm3, F = 96,500 C/mol), and the time for a 1000 mm3 cavity.",
                marks: 7,
                outline: [
                  "First law: m is proportional to I·t; second law: m is proportional to A/z.",
                  "Combined: m = eta·I·t·A/(z·F).",
                  "Volumetric: MRR = eta·I·A/(z·F·rho).",
                  "Substitute: 0.9 x 1000 x 56 / (2 x 96,500 x 7.86).",
                  "Mass rate ≈ 15.7 g/min; volume ≈ 2 cm3/min ≈ 2000 mm3/min.",
                  "Time for 1000 mm3 is about 0.5 min.",
                  "Note: hardness is absent - the rate depends only on current and chemistry.",
                ],
              },
              {
                q: "Define current efficiency in ECM.",
                marks: 2,
              },
              {
                q: "Why does workpiece hardness not appear in the ECM material removal equation?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "ECM practice: electrolytes, accuracy and EDM comparison",
            body: [
              "Electrolyte choice decides ECM's character. Sodium chloride (10-20%) is efficient and cheap, but current keeps flowing wherever electrolyte reaches, so the gap walls dissolve too - stray cutting - and sharp features wash out. Sodium nitrate is passivating: where current density falls, in stagnant zones and low-flow corners, the metal passivates and dissolution stops by itself - a self-limiting behaviour that sharpens accuracy at some cost in efficiency. Sodium chlorate sharpens further but is a fire hazard when dry; mixed and buffered electrolytes tune between these poles. Temperature shifts conductivity and hence the gap, so the plant chills electrolyte to about ±1 deg C and filters the hydroxide sludge continuously.",
              "Accuracy work then concentrates on the tool and the power. Insulating every non-working face stops stray attack; flow channels milled into the tool keep the gap uniformly fed; and pulsed current - PECM - alternates dissolution and flush time, letting fresh electrolyte refill the gap between pulses, which tightens the working gap and brings tolerances toward ±0.01 mm at reduced average rate. Even so, ECM concedes the last word on sharp internal corners and mirror tolerances to EDM; its claim is rate plus integrity, not ultimate accuracy.",
              "Hence the classic trade-off table. EDM: better tolerance (±0.005-0.01 mm), sharper corners, cheaper machines, but a recast skin and tensile stress to manage, electrode wear, and a slower average rate. ECM: no tool wear at all, the highest rates (about 2 cm3/min per 1000 A in steel), stress-free fatigue-friendly surfaces - but coarser tolerance, rounded corners, aggressive plant (power, electrolyte handling, corrosion protection) and heavy current bills. Choose EDM for the mould cavity, ECM for the turbine disc slot: the comparison diagram makes the rule visual.",
            ],
            bullets: [
              "NaCl: efficient, cheap, but strays; NaNO3: passivating, self-limiting, accurate but less efficient.",
              "Chill to ±1 deg C and filter sludge: conductivity stability is gap stability.",
              "Insulated tool faces plus designed flow channels kill most stray cutting.",
              "PECM pulses the current so the gap can flush between removal phases - control toward ±0.01 mm.",
              "ECM wins on rate and surface; EDM wins on tolerance and sharp detail.",
            ],
            table: {
              caption: "ECM vs EDM - the classic comparison.",
              headers: ["Aspect", "ECM", "EDM"],
              rows: [
                ["Mechanism", "Ionic dissolution", "Spark melt and vaporise"],
                ["MRR", "≈ 2000 mm3/min per 1000 A", "≈ 20-400 mm3/min"],
                ["Tolerance", "±0.05-0.1 mm", "±0.005-0.01 mm"],
                ["Surface", "0.1-1 um, stress-free", "0.4-3 um, recast + tensile stress"],
                ["Tool / electrode", "Never wears", "Wears - compensate it"],
                ["Medium hazard", "Corrosive electrolyte, hydrogen", "Oil fire risk, fume"],
                ["Best for", "Superalloy removal, fatigue parts", "Cavities, fine detail, dies"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Which electro-process for the job?",
              caption: "Two strong processes with almost disjoint strengths.",
              left: {
                heading: "Reach for ECM when",
                items: [
                  "Rate dominates: 1000 A ≈ 2 cm3/min, no wear",
                  "Fatigue spec: stress-free, recast-free surface",
                  "Hard superalloys: hardness is irrelevant",
                  "Long production runs amortise the tooling",
                ],
              },
              right: {
                heading: "Reach for EDM when",
                items: [
                  "Tolerance of ±0.005-0.01 mm is demanded",
                  "Sharp internal corners or fine detail",
                  "A blind 3D cavity in hardened die steel",
                  "One-offs: cheaper machines, faster setup",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "The classic trap",
              body: "Writing 'the ECM tool wears' costs the whole answer's credibility: the cathode is immune by construction - it only receives hydrogen. And do not claim EDM 'needs no post-processing' on fatigue parts; the recast layer demands polishing.",
            },
            keyTerms: [
              { term: "Passivation", definition: "Formation of a protective film at low current density that self-limits dissolution - the accuracy trick in NaNO3 ECM." },
              { term: "Stray cutting", definition: "Unwanted dissolution in zones beyond the tool's working face, blurring features." },
              { term: "PECM", definition: "Pulsed ECM: alternating removal and flush periods for a tighter, more controllable gap." },
            ],
            examQuestions: [
              {
                q: "Compare ECM and EDM with respect to removal mechanism, MRR, accuracy, surface integrity, tool wear, media and applications. Which would you select for a fatigue-critical slot in a nickel-alloy disc, and why?",
                marks: 7,
                outline: [
                  "Mechanisms: anodic dissolution vs spark erosion.",
                  "Build the comparison table row by row: MRR, tolerance, surface, wear, medium.",
                  "ECM strengths: rate, no wear, stress-free surface, hardness-independent.",
                  "EDM strengths: tolerance, corners, blind cavities, lower capital.",
                  "Nickel slot: fatigue-critical plus high removal - choose ECM.",
                  "Justify: no recast, no tensile stress, no electrode wear over the long run.",
                  "Note electrolyte choice (NaNO3) and hydrogen venting as practical points.",
                ],
              },
              {
                q: "Why is NaNO3 preferred over NaCl for accurate ECM work?",
                marks: 2,
              },
              {
                q: "What is stray cutting in ECM, and how is it reduced?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Electrochemical grinding (ECG)",
            body: [
              "ECG looks like grinding and works like ECM. The wheel is a metal-bonded abrasive - diamond, CBN or alumina grains in a bronze or copper matrix - and it is wired as the cathode; the work is the anode, pressed lightly against the wheel with electrolyte flooded into the nip. The abrasive grains, standing a few tens of microns proud of the bond, never really cut: they space the gap (about 25-80 um), and they wipe away the soft anodic oxide film so dissolution can continue. About 90% of removal is electrochemical, 10% mechanical - which is why the wheel barely wears and the work never heats.",
              "The consequences read like a wish list. No grinding burn or thermal cracks; no residual stress; no burrs (a medical-manufacturing requirement); surface finish around Ra 0.1-0.5 um; and hard, nasty materials - tungsten carbide, high-speed steel, cobalt-chrome and nickel alloys, thin honeycomb seals - ground at low wheel pressure without smearing or distortion. Voltage is modest (4-15 V), current does most of the work, and wheel life runs to many multiples of conventional practice. The abrasive that does the 10% also keeps the wheel face clean and the gap set.",
              "The family extends the idea. Electrochemical honing (ECH) finishes bores with electrolyte plus stroking stones - cylinders and hydraulic bores; electrochemical polishing and buffing refine surfaces; and ECG's variants - face, profile and surface grinding - shape carbide tooling, surgical needles and dental burrs, thin-walled parts, and fragile honeycomb structures that a conventional wheel would crush. Limits mirror ECM's: conductors only, electrolyte handling and corrosion protection, and corners round off. Wherever grinding's heat or burr is the problem, ECG is the standing answer.",
            ],
            bullets: [
              "About 90% electrolytic dissolution plus 10% abrasive wiping: wheel wear almost nil.",
              "The metal-bonded wheel is the cathode; protruding grains set the 25-80 um gap and clear the oxide film.",
              "No burn, no cracks, no burr, no residual stress: Ra ≈ 0.1-0.5 um.",
              "Low wheel pressure: honeycomb, needles and thin fins survive unscathed.",
              "Family: ECH for bores, electro-polishing for surfaces - the same anodic principle, gentler still.",
            ],
            table: {
              caption: "Conventional grinding vs ECG.",
              headers: ["Aspect", "Conventional grinding", "ECG"],
              rows: [
                ["Removal", "Plastic shear + abrasion", "≈ 90% anodic dissolution"],
                ["Wheel wear", "High", "Negligible"],
                ["Heat", "Burn and crack risk", "Cold - no thermal damage"],
                ["Burrs", "Produced", "None"],
                ["Workpiece", "Any material", "Conductors only"],
                ["Wheel cost per part", "High", "Low - the wheel lasts many jobs"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The ECG nip, layer by layer",
              caption: "Top to bottom: what the wheel meets as it passes.",
              layers: [
                { label: "Abrasive grain", note: "spacer + oxide-film wiper" },
                { label: "Electrolyte film", note: "25-80 um gap" },
                { label: "Anodic film on the work", note: "dissolves continuously" },
                { label: "Work surface (anode)", note: "90% of removal happens here" },
              ],
            },
            callout: {
              type: "tip",
              title: "Answer the 'why grinding then' question",
              body: "If most removal is electrolytic, why abrasives at all? Because the grains set the gap, wipe the passive film and carry the current-path geometry - write those three jobs and you have the process understood.",
            },
            keyTerms: [
              { term: "Metal-bonded wheel", definition: "A conductive grinding wheel (bronze or copper bond) that serves as ECM's cathode in ECG." },
              { term: "Anodic film", definition: "The soft oxide layer that forms on the work and is wiped away by the abrasive grains." },
              { term: "ECH", definition: "Electrochemical honing: electrolytic dissolution combined with honing stones to finish bores." },
            ],
            examQuestions: [
              {
                q: "Explain electrochemical grinding with a sketch. Why is it called a grinding process when about 90% of removal is electrolytic? State the wheel construction, process characteristics, merits, demerits and applications.",
                marks: 7,
                outline: [
                  "Sketch: metal-bonded wheel as cathode, work anode, electrolyte nip, DC source.",
                  "Grain jobs: gap spacing, film wiping, minor cutting (≈ 10%).",
                  "Wheel: bronze or copper bond, diamond or Al2O3; low-pressure contact.",
                  "Merits: no burn, no burr, no stress, negligible wheel wear, cool.",
                  "Demerits: conductors only, electrolyte handling, rounded corners, capital.",
                  "Applications: carbide tools, surgical needles, honeycomb seals.",
                  "Kin: ECH for bores; electro-polishing for surfaces.",
                ],
              },
              {
                q: "State the approximate electrolytic share of material removal in ECG.",
                marks: 2,
              },
              {
                q: "Why is an ECG surface free of residual stress while a conventionally ground surface may not be?",
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
      title: "Hybrid and Emerging Processes",
      summary:
        "Hybrid and emerging processes: ECSM, magnetic abrasive finishing, micro-EDM and micro-ECM, the surface-integrity consequences of every family, and industrial case studies that sequence the whole subject.",
      chapter: {
        number: "05",
        title: "Hybrids, Micro Scale and Real Parts",
        intro:
          "The frontier: hybrids that combine two mechanisms (ECSM machines insulators), magnetic fields that finish (MAF), micro-scale EDM and ECM (injector holes), the surface-integrity framework that decides what all this thermal and chemical attack does to the part, and the industrial case studies that tie the whole subject together.",
        inOneBreath:
          "ECSM sparks through a hydrogen film to machine glass; MAF finishes with a magnetic abrasive brush to Ra 0.01 um; micro-EDM and micro-ECM make 20 um features; surface integrity = topography + microstructure + stress + flaws; and real parts chain several advanced processes into one route sheet.",
        sections: [
          {
            number: "5.1",
            title: "Electrochemical spark machining (ECSM)",
            body: [
              "ECSM - also written ECDM - exists because EDM and ECM both need a conducting workpiece, yet glass, quartz, alumina and many composites do not conduct. The hybrid solves it by putting the spark where the work is not in the circuit. A tool electrode (cathode) dips into an electrolyte (sodium or potassium hydroxide) beside an auxiliary anode. Above roughly 25-30 V, hydrogen bubbles evolved at the cathode coalesce into an insulating gas film around it; the voltage then breaks down across this film, and sparks fire from the tool into the electrolyte and strike the work - each discharge delivering concentrated thermal energy, while the alkaline electrolyte simultaneously etches materials such as glass chemically.",
              "Removal is therefore thermal spalling plus chemical attack - machining with no requirement that the work carry current. Micro-holes and channels form in glass, quartz and ceramics; a rotating tubular tool (a common choice) pumps electrolyte through itself for flushing, and the spark zone is confined to the film contact area. Rates are modest - milligrams per minute - holes of 0.1-3 mm are routine, and the machined surface carries heat damage: a heat-affected zone and micro-cracks, rougher than USM's, so a finishing pass is often planned.",
              "The applications are those no parent process can reach: microfluidic channels and vias in glass lab-on-chip devices, holes in quartz and technical ceramics, shaping of composites where fibre pull-out rules out mechanical cutting, and 3D micro-structuring of glass by travelling-wire ECSM. Limitations keep it a niche and research process: low MRR, tool erosion by the sparks, electrolyte handling, and thermal damage control. As an exam item, ECSM is the flagship 'hybrid process' answer - state both parent mechanisms, the gas-film spark, and the insulator capability, and the marks follow.",
            ],
            bullets: [
              "A hydrogen gas film around the cathode hosts the sparks - the workpiece stays out of the circuit.",
              "Two mechanisms, one zone: EDM-style thermal spall plus chemical etch by NaOH/KOH.",
              "Machines insulators - glass, quartz, alumina, composites - that EDM and ECM cannot touch.",
              "Rotating tubular tools self-flush; typical holes 0.1-3 mm at milligram-per-minute rates.",
              "Watch: HAZ and micro-cracks - plan a finishing step on critical parts.",
            ],
            table: {
              caption: "ECSM against its parents.",
              headers: ["Aspect", "EDM parent", "ECM parent", "ECSM hybrid"],
              rows: [
                ["Energy", "Spark", "Ionic", "Spark + etch"],
                ["Workpiece", "Conductor", "Conductor", "Insulator welcome"],
                ["Medium", "Dielectric oil", "Electrolyte", "Electrolyte + gas film"],
                ["Damage", "Recast, HAZ", "None", "HAZ, micro-cracks"],
                ["Niche", "Mould cavities", "Superalloy removal", "Glass and ceramic micro-holes"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The ECSM event chain",
              caption: "Voltage, film, spark, etch, flush - the hybrid in five steps.",
              steps: [
                { label: "DC voltage across tool and auxiliary anode", note: "above ≈ 30 V" },
                { label: "Hydrogen film blankets the cathode" },
                { label: "Spark jumps through the film", note: "thermal hit on the work" },
                { label: "Alkaline etch attacks the softened zone" },
                { label: "Electrolyte circulation flushes debris" },
              ],
            },
            callout: {
              type: "exam",
              title: "Say why it is hybrid",
              body: "ECSM answers always need the sentence: 'the spark of EDM and the electrolyte of ECM act together, and the workpiece carries no current - so insulators machine.' That single sentence carries the definition marks.",
            },
            keyTerms: [
              { term: "Gas film", definition: "The hydrogen bubble layer around the cathode across which ECSM sparks discharge." },
              { term: "Auxiliary anode", definition: "The counter-electrode that completes the electrolytic circuit so the work need not conduct." },
              { term: "ECDM", definition: "Electrochemical discharge machining - the alternate name for ECSM." },
            ],
            examQuestions: [
              {
                q: "Explain electrochemical spark machining with a sketch. How does it machine electrically non-conducting materials that neither EDM nor ECM can? Give the mechanism, typical applications and limitations.",
                marks: 7,
                outline: [
                  "Definition: a hybrid of the EDM spark and the ECM electrolyte acting on one zone.",
                  "Sketch: cathode tool, gas film, electrolyte, auxiliary anode, insulating work.",
                  "Mechanism: hydrogen film forms above ≈ 30 V; sparks fire through it onto the work.",
                  "Removal: thermal spall plus chemical etch (NaOH on glass).",
                  "Why insulators: the workpiece carries no current.",
                  "Applications: lab-on-chip glass channels, quartz and ceramic micro-holes.",
                  "Limits: low MRR, HAZ, micro-cracks, tool erosion.",
                ],
              },
              {
                q: "Which electrolytes are used in ECSM and what double role do they serve?",
                marks: 2,
              },
              {
                q: "Why is ECSM classified as a hybrid process?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Magnetic abrasive finishing (MAF)",
            body: [
              "MAF finishes with a brush made of magnetism. Ferromagnetic abrasive particles - iron powder mixed or sintered with aluminium oxide, silicon carbide or CBN, 5-100 um across - are placed between the work and the poles of an electromagnet. The field aligns the iron into flexible chains that lock the abrasive and press it against the surface: the magnetic abrasive brush. Its stiffness, and therefore finishing pressure, is set by flux density (typically 0.5-2 T); rotate the work or the poles, add an axial vibration so cutting paths cross, and the brush shears off surface peaks a micron at a time - taking Ra from about 0.3 um down to 0.01-0.05 um.",
              "The brush's compliance is the point. It conforms to freeform mould and die surfaces, enters bores a rigid tool cannot reach (the classic application: internal finishing of stainless steel tubing for sanitary, food and semiconductor service), follows edges without digging, and never loads or glazes like a bonded wheel. Pressure is low and controllable, heat generation is negligible, and finished surfaces can end slightly compressive - mildly good for fatigue. The work may itself be non-magnetic: the poles simply work across the gap and press the abrasive onto whatever is there.",
              "Parameters to know: flux density (stiffness and pressure), working gap (field strength at the surface), abrasive size and type (aggressiveness vs finish), pole-work relative speed, vibration amplitude and frequency, and finishing time - typically minutes, occasionally an hour. The family generalises: magnetorheological finishing (MRF) uses a magnetically stiffened fluid jet, magnetic float polishing suspends abrasives in a magnetic fluid, and robotic MAF polishes large dies. Applications: mould and die cavities, medical implants, bearings and races, tubes and capillaries - anywhere a perfect surface hides in an unreachable geometry.",
            ],
            bullets: [
              "Field-assembled chains of iron plus abrasive form the compliant magnetic brush.",
              "Pressure comes from flux density (0.5-2 T): stiffness - and cut - adjusted electrically.",
              "Ra from 0.3 um down to 0.01-0.05 um; negligible heat; often compressive stress.",
              "Reaches inside bores and over freeform dies - where rigid tools cannot.",
              "Kin processes: magnetorheological finishing (MRF) and magnetic float polishing.",
            ],
            table: {
              caption: "MAF parameters and the effect of increasing each.",
              headers: ["Parameter", "Effect of increasing"],
              rows: [
                ["Flux density", "Stiffer brush: more pressure, faster removal"],
                ["Abrasive size", "Faster, but a rougher final Ra"],
                ["Working gap", "Weaker field: gentler, slower"],
                ["Relative speed", "More cutting paths per minute"],
                ["Vibration amplitude", "Crossing paths: more uniform finish"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The MAF finishing loop",
              caption: "Align, press, shear, cross, level - repeat for minutes.",
              steps: [
                { label: "Field aligns the chains into a brush" },
                { label: "Brush presses abrasive onto the surface" },
                { label: "Rotation drags grains across the peaks" },
                { label: "Vibration crosses the paths" },
                { label: "Peaks level out: Ra below 0.05 um", note: "minutes, not hours" },
              ],
            },
            callout: {
              type: "tip",
              title: "The phrase that earns the definition mark",
              body: "'A flexible magnetic abrasive brush, pressed against the work by flux density' - write that phrase in the first line of any MAF answer, then the parameters and the bore-finishing application. Short-note questions on MAF are almost annual.",
            },
            keyTerms: [
              { term: "Magnetic abrasive brush", definition: "The chain-like structure of ferromagnetic and abrasive particles that acts as a compliant cutting tool in MAF." },
              { term: "Flux density", definition: "Magnetic field strength (tesla) that sets brush stiffness and finishing pressure." },
              { term: "MRF", definition: "Magnetorheological finishing - an MAF variant using a magnetically stiffened fluid jet to polish optics." },
            ],
            examQuestions: [
              {
                q: "Explain magnetic abrasive finishing with a sketch. How does the magnetic brush form and finish the surface? State the governing parameters, merits, limitations and typical applications.",
                marks: 7,
                outline: [
                  "Sketch: poles, field lines, brush chains, work, gap, rotation and vibration.",
                  "Brush: iron + abrasive chains; stiffness set by flux density 0.5-2 T.",
                  "Removal: micro-shearing of peaks; crossed paths from rotation plus vibration.",
                  "Parameters: flux, gap, grit, speed, vibration, time.",
                  "Merits: reaches bores and freeforms, cold, compressive, Ra to 0.01 um.",
                  "Limitations: slow (finishing only), abrasive supply, magnetic setup.",
                  "Applications: stainless tube bores, mould and die polishing, implants.",
                ],
              },
              {
                q: "Name two parts finished by MAF.",
                marks: 2,
              },
              {
                q: "Why can MAF finish internal bores that conventional polishing cannot?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Micro-EDM and micro-ECM",
            body: [
              "Shrink a spark and you shrink a feature. Micro-EDM drives discharge energy down to nanojoules: tiny RC generators and ultra-short pulses make craters a fraction of a micrometre across, so holes of 20-100 um form with depth-to-diameter ratios far beyond conventional drilling. The electrodes themselves are made on the machine by wire electro-discharge grinding (WEDG): a taut wire passes a slow-rotating blank and dresses it to 5-50 um diameter, in situ, so runout never enters the job. Flagship application: the multi-hole spray orifices, 0.1-0.2 mm, of hardened diesel-injector nozzles.",
              "Micro-ECM shrinks the gap instead of the spark. Working gaps of 5-20 um are held with pulsed voltage: removal happens in the on-time, and the pause lets electrolyte flush and refill - the same logic as PECM at ten times smaller scale. With microsecond pulses, the electrochemical double layer charges only near the electrode, so dissolution is confined to a few micrometres and features approaching 1 um resolution are reported. Jet-ECM shoots electrolyte from a nozzle as a free jet, etching maskless patterns directly on surfaces. No tool wear, no thermal layer: micro-ECM is the finishing half of the micro pair.",
              "Physics at this scale is unkind in specific ways. Surface-to-volume ratio soars, so debris and heat that a macro process shrugs off now choke a micro channel - flushing strategy dominates design. Machines need granite frames, sub-micron slides and thermal control, because 0.1 um of drift is a 10% error on a 1 um feature. Metrology becomes half the effort: optical and tactile systems measure what no caliper can. Applications: injector nozzles, spinnerets, micro-moulds, printing nozzles, medical components and micro-gears; and hybrid machines that switch micro-EDM and micro-ECM in one setup are the emerging shop-floor answer.",
            ],
            bullets: [
              "Micro-EDM: nanojoule sparks, craters below 1 um; holes of 20-100 um in any conductor.",
              "WEDG dresses electrodes to 5-50 um on the same machine - zero runout transfer.",
              "Micro-ECM: 5-20 um gaps, microsecond pulses confine dissolution near the tool.",
              "Injector spray holes of 0.1-0.2 mm in hardened steel: the flagship micro-EDM job.",
              "At micro scale, flushing, thermal drift and metrology dominate the process plan.",
            ],
            codeExample: {
              language: "text",
              caption: "A realistic micro-EDM drilling card for a fuel-injector orifice.",
              code: `MICRO-EDM HOLE - process log (injector spray hole)
tool   : WEDG-dressed tungsten electrode, 0.12 mm
work   : hardened nozzle steel, 1.0 mm wall
gap    : 8 um servo, deionised water flush
pulse  : 90 V, 80 ns on / 600 ns off
energy : about 0.05 uJ per discharge
result : 0.15 mm through hole, Ra 0.15 um
cycle  : 4 min per hole, orbit radius 15 um for flush`,
            },
            table: {
              caption: "Micro-EDM vs micro-ECM.",
              headers: ["Aspect", "Micro-EDM", "Micro-ECM"],
              rows: [
                ["Energy per event", "≈ 0.01-10 uJ spark", "Microsecond current pulse"],
                ["Minimum feature", "≈ 20 um hole", "≈ 1-10 um detail"],
                ["Tooling", "WEDG-dressed electrode, 5-50 um", "Micro tool, no wear"],
                ["Damage", "Thin recast at fine settings", "None - stress-free"],
                ["Flagship", "Injector spray holes", "Micro structures, jet-ECM patterning"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Inside a micro-AMP machine, top to bottom",
              caption: "Four layers of capability - each one a necessity, not a luxury.",
              layers: [
                { label: "Metrology + vision alignment", note: "features below eye resolution" },
                { label: "Granite frame, sub-micron axes", note: "0.1 um drift is 10% of a feature" },
                { label: "Pulse generator", note: "nJ sparks / us pulses" },
                { label: "Micro tool + work zone", note: "flushing rules the design" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two names to drop",
              body: "WEDG (how micro-electrodes are made) and pulsed dissolution (why micro-ECM can hold micron gaps) - these two terms, each with a one-line explanation, distinguish a first-class micro-machining answer.",
            },
            keyTerms: [
              { term: "WEDG", definition: "Wire electro-discharge grinding: dressing micro-electrodes on the EDM machine with a travelling wire." },
              { term: "Pulsed ECM", definition: "Microsecond on/off voltage that confines dissolution and lets electrolyte flush between pulses." },
              { term: "Jet-ECM", definition: "Maskless micro-ECM in which a free electrolyte jet etches patterns directly on surfaces." },
            ],
            examQuestions: [
              {
                q: "Describe micro-EDM and micro-ECM. Explain WEDG for micro-electrode manufacture, the role of pulse energy and pulse duration in feature size, and give applications such as fuel-injector nozzles. What are the main process challenges at micro scale?",
                marks: 7,
                outline: [
                  "Micro-EDM: nanojoule sparks, 20-100 um holes; the RC generator limits energy.",
                  "WEDG: on-machine electrode dressing to 5-50 um, no runout.",
                  "Micro-ECM: 5-20 um gap, microsecond pulses, dissolution near the tool only.",
                  "Pulse energy and duration set crater and gap: smaller pulses, finer features.",
                  "Applications: injector spray holes, spinnerets, micro-moulds.",
                  "Challenges: flushing, debris, thermal drift, metrology, tool handling.",
                  "Hybrid machines combine both mechanisms in one setup.",
                ],
              },
              {
                q: "What is WEDG and why is it done on the EDM machine itself?",
                marks: 2,
              },
              {
                q: "Why do micro-EDM and micro-ECM both use pulsed rather than continuous energy?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Surface integrity in advanced machining",
            body: [
              "Surface integrity is the complete description of a machined surface: topography (roughness, lay, flaws), metallurgical state (recast or white layer, heat-affected zone, phase change), mechanical state (residual stress, work-hardening) and flaws (cracks, tears, inclusions). It matters because fatigue, corrosion and wear all live at the surface: an EDM recast skin with micro-cracks can cut fatigue life dramatically compared with a stress-free ECM surface on the same alloy - the drawing therefore specifies not just 'Ra 0.4' but a maximum damaged depth and sometimes a required stress state.",
              "Each family signs its surface differently. Thermal processes (EDM, LBM, EBM, PAM) melt and re-solidify: a white layer of 1-40 um over a softened heat-affected zone, tensile residual stress, micro-cracks at high energy - damage grows with pulse energy and shrinks with skimming. Mechanical processes (USM, AJM) leave cold but possibly micro-cracked surfaces on brittle work; grinding can burn. Chemical and electrochemical processes (CHM, ECM, ECG) remove atoms without force or heat: stress-free, chemically clean, though slightly etched in appearance. MAF and shot peening go further and leave compressive stress - actively beneficial.",
              "Managing integrity is a process-plan activity. Prevent: choose cold routes for fatigue parts (ECM, CHM, AWJM), or fine-pulse and skim the thermal processes. Correct: polish off the recast (MAF, abrasive flow), shot peen to restore compression, stress-relieve or re-temper, electropolish for corrosion-critical faces. Verify: profilometry for Ra, metallographic cross-sections for layer depth, X-ray diffraction for residual stress, dye penetrant for cracks. The matrix below places the families by damage mechanism; pair it with the depth table and you can answer any integrity question this subject asks.",
            ],
            bullets: [
              "Integrity = topography + microstructure + residual stress + flaws - Ra alone is not it.",
              "Thermal AMPs: recast white layer 1-40 um, HAZ, tensile stress, possible cracks.",
              "Cold AMPs (ECM, CHM, AWJM): stress-free surfaces; MAF adds helpful compression.",
              "Fatigue and corrosion are the properties that surface damage attacks first.",
              "Fixes: skim and pulse-tune, MAF or abrasive-flow polish, shot peen, stress-relieve.",
            ],
            table: {
              caption: "Damage depth by process family.",
              headers: ["Process", "Damage type", "Typical depth"],
              rows: [
                ["EDM", "Recast + HAZ + tensile stress", "1-40 um recast, HAZ beyond"],
                ["LBM / EBM", "HAZ, spatter, thin recast", "20-300 um, pulse-dependent"],
                ["PAM", "Broad HAZ, bevel kerf", "Up to ≈ 1 mm"],
                ["USM / AJM", "Cold; micro-cracks on brittle work", "A few um"],
                ["ECM / CHM / ECG", "None - stress-free, etched look", "≈ 0"],
                ["MAF / peening", "Negative damage: compression", "10-100 um of compressive depth"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Damage mechanism map",
              caption: "Vertical axis: damage risk low (bottom) to high (top). Horizontal axis: thermal energy none (left) to severe (right).",
              axes: { x: "Thermal energy: none -> severe", y: "Damage risk: low -> high" },
              quadrants: [
                { label: "Brittle under abrasion", note: "USM/AJM micro-cracks, grinding burn" },
                { label: "Full thermal attack", note: "EDM recast, LBM/PAM HAZ, tensile stress" },
                { label: "Clean by design", note: "ECM, CHM, ECG: stress-free surfaces" },
                { label: "Thermal, but tamed", note: "skim EDM, short-pulse EBM, fibre lasers" },
              ],
            },
            callout: {
              type: "exam",
              title: "Definition first, always",
              body: "'Define surface integrity' opens the question - give the four-part definition (topography, metallurgy, stress, flaws) before any process talk. Then a table of damage by process. The definition alone carries 2 marks.",
            },
            keyTerms: [
              { term: "Surface integrity", definition: "The combined state of a surface: roughness and lay, altered microstructure, residual stress and flaws." },
              { term: "White layer", definition: "The hard, brittle, micro-cracked re-solidified skin left by EDM and other thermal processes." },
              { term: "Residual stress", definition: "Stress locked into the surface: tensile after thermal AMPs, compressive after peening or MAF." },
            ],
            examQuestions: [
              {
                q: "Define surface integrity. Explain the surface alterations produced by thermal, mechanical and electrochemical machining processes, their effect on fatigue life, and the post-treatments used to restore integrity.",
                marks: 7,
                outline: [
                  "Four-part definition: topography, microstructure, stress, flaws.",
                  "Thermal: white layer, HAZ, tensile stress, cracks - fatigue risk.",
                  "Mechanical: cold micro-cracks on brittle work; no heat.",
                  "Electrochemical and chemical: stress-free, clean, slightly etched.",
                  "Fatigue link: cracks plus tension nucleate early failures.",
                  "Post-treatments: MAF or abrasive-flow polish, shot peen, stress-relief, electropolish.",
                  "Verification: profilometry, cross-sections, XRD, dye penetrant.",
                ],
              },
              {
                q: "Name the layers found beneath an EDM-machined surface.",
                marks: 2,
              },
              {
                q: "Why does ECM leave a fatigue-friendly surface while EDM may not?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Case studies and process selection in practice",
            body: [
              "Case 1: an injection-mould cavity in H13 at 50 HRC. The route: rough-mill the annealed blank, harden and temper, die-sink the cavities with graphite electrodes in three spark regimes, wire-cut the gate slots and ejector pin holes with skims, then MAF- or abrasive-flow polish to Ra 0.05-0.2 um. Each process is doing only what it is uniquely good at: EDM because the steel is already hard and the corners are sharp; wire because the profiles are through and the tolerance is ±0.005 mm; MAF because the freeform surface needs a compliant tool. That chain - not any single process - is modern die manufacture.",
              "Case 2: a turbine component in a nickel superalloy. ECM takes the blade-root serrations (high removal, hardness irrelevant, fatigue-safe surface); the laser drills the cooling-hole array (high depth-to-diameter, non-contact); plasma spraying (non-transferred arc) lays the thermal-barrier coating. Case 3: the common-rail injector nozzle - micro-EDM drills 0.1-0.2 mm spray holes in hardened steel, then abrasive-flow finishing calibrates the hole edges for flow. Case 4: consumer hardware - watch cases, carbon-fibre laptop shells (AWJM: no delamination, no HAZ), glass device covers (ECSM or USM), stents cut by fibre laser.",
              "The pattern across every case: selection is a chain of filters (1.3), quantified by capability (1.4) and cost (1.5), constrained by a damage budget (5.4), and sequenced into a process plan with inspection points. Advanced processes rarely work alone - a realistic part touches three to five of them. In the exam, a case-study answer that names the chain, assigns one justification per step, and mentions the integrity check at the end reads like an engineer wrote it - because one did.",
            ],
            bullets: [
              "Mould case: mill - harden - die-sink EDM - wire EDM - MAF polish; each step plays its strength.",
              "Turbine case: ECM slots plus laser cooling holes plus plasma-sprayed coating.",
              "Injector case: micro-EDM spray holes plus abrasive-flow edge calibration.",
              "Consumer case: AWJM for CFRP shells (no delamination), fibre laser for stents.",
              "Selection chain: filters, then capability, then cost, then damage budget, then a sequenced route sheet.",
            ],
            codeExample: {
              language: "text",
              caption: "A real process plan chains five processes; each line cites its reason.",
              code: `ROUTE SHEET - mould plate, H13, 48-52 HRC, batch 2
op 10  rough mill annealed blank, +0.3 mm stock
op 20  harden + temper to 50 HRC
op 30  die-sink EDM cavity (graphite, 3 spark regimes)
op 40  wire-EDM gate and ejector holes (2 skims)
op 50  MAF polish to Ra 0.1 um
op 60  inspect: CMM, Ra check, dye penetrant`,
            },
            table: {
              caption: "Four industries, four chains - one method.",
              headers: ["Part", "Material", "Process chain", "Driving requirement"],
              rows: [
                ["Mould cavity", "H13 die steel, 50 HRC", "Mill - EDM - wire EDM - MAF", "Hard, sharp, polished"],
                ["Turbine blade root", "Nickel superalloy", "ECM + laser drilling + plasma spray", "Rate + fatigue + cooling holes"],
                ["Injector nozzle", "Hardened steel", "Micro-EDM + abrasive flow", "0.15 mm holes, flow calibration"],
                ["Laptop shell", "Carbon fibre laminate", "AWJM", "No delamination, no HAZ"],
                ["Stent", "Nitinol / 316L tube", "Fibre laser cutting", "Kerf, edge quality, scale"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A hard-material part hits the planning desk",
              caption: "Four arrivals, four verdicts - each verdict cites its filter.",
              start: "A new hard-material part is quoted",
              branches: [
                {
                  label: "Blind 3D cavity, hardened steel",
                  outcome: "Die-sink EDM, then MAF polish",
                  good: true,
                },
                {
                  label: "Through profile at ±0.005 mm",
                  outcome: "Wire EDM with skim cuts",
                  good: true,
                },
                {
                  label: "Insulating ceramic micro-hole",
                  outcome: "ECSM or USM - EDM and ECM are out",
                  good: true,
                },
                {
                  label: "Thin composite outline",
                  outcome: "AWJM: cold cut, no delamination",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Case answers are chain answers",
              body: "Whatever the case study, write the chain with one justification per step and close with the integrity check (5.4) and the cost check (1.5). Examiners mark the reasoning per step, not the final name of the process.",
            },
            keyTerms: [
              { term: "Process plan (route sheet)", definition: "The ordered list of operations, with machines, settings and inspections, that carries a part from blank to finished." },
              { term: "Damage budget", definition: "The maximum altered-layer depth and stress state a design permits; a constraint on process selection." },
              { term: "Process chain", definition: "Several machining processes sequenced so each performs only the work it is best at." },
            ],
            examQuestions: [
              {
                q: "Take an injection mould in hardened tool steel and a nickel-alloy turbine component. Show step by step which advanced machining processes you would deploy and why, linking each choice to material, geometry, tolerance and surface integrity.",
                marks: 7,
                outline: [
                  "Mould: harden first, then die-sink EDM the cavities - hardness is irrelevant to sparks.",
                  "Wire EDM for gates and ejector holes: through profiles at ±0.005 mm.",
                  "MAF or abrasive-flow polish: recast removal and Ra 0.1 um on the freeform.",
                  "Turbine: ECM for the blade-root slot - rate, no wear, fatigue-safe surface.",
                  "Laser for the cooling holes: high L/D, non-contact array drilling.",
                  "Plasma spray (non-transferred arc) for the thermal-barrier coating.",
                  "Close: the inspection chain and cost per part justify the sequence.",
                ],
              },
              {
                q: "Suggest a process chain for 0.15 mm spray holes in a hardened injector nozzle.",
                marks: 2,
              },
              {
                q: "Why is AWJM preferred over laser cutting for carbon-fibre laminates?",
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
        "RGPV ME-702(A) papers reliably load Unit III and Unit IV with the long questions - EDM in some form and the ECM Faraday numerical appear almost every session - while Units I, II and V supply the definitional and comparison shorts. Revise in that proportion: roughly two thirds of your hours on thermal and electrochemical processes, one third spread over the rest, with every numerical type drilled at least twice.",
      ],
      weightedTopics: [
        { topic: "EDM: principle, spark cycle, parameters, die-sinker and wire-cut", weight: "12-14 marks", note: "Near-guaranteed long question; practise the labelled sketch and the pulse-energy vs finish story." },
        { topic: "ECM: principle, equipment, electrolytes", weight: "10-12 marks", note: "Reverse-plating logic plus the ECM vs EDM comparison; the electrolyte-loop sketch is standard." },
        { topic: "Faraday's laws and MRR numericals", weight: "8-10 marks", note: "Derivation plus the 1000 A iron calculation; carry the 2 cm3/min anchor number." },
        { topic: "USM: principle, equipment, MRR and tool wear", weight: "8-10 marks", note: "Generator-transducer-horn-tool sketch; numericals on hole time and overcut." },
        { topic: "LBM and EBM with comparison", weight: "8-10 marks", note: "One process fully plus a comparison table; wavelengths and the vacuum argument carry the marks." },
        { topic: "AJM, WJM, AWJM family", weight: "6-8 marks", note: "Short notes and pairwise differences; quote pressures, velocities and garnet mesh." },
        { topic: "PAM: transferred and non-transferred arcs, pinching", weight: "6-8 marks", note: "The three pinch effects plus the two arc modes in one sketch." },
        { topic: "CHM/PCM and the etch factor", weight: "6-8 marks", note: "The step chain, the undercut sketch, the etch-factor definition and applications." },
        { topic: "Hybrids and micro: ECSM, MAF, micro-EDM/ECM", weight: "6-8 marks", note: "Short-note favourites; the gas-film spark and the magnetic brush are the asked definitions." },
        { topic: "Selection, economics and surface integrity", weight: "6-10 marks", note: "The framing questions of Units I and V; answer with filters, cost terms and the four-part integrity definition." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I + USM", tasks: ["Limitations, classification, selection filters, capability and cost tables", "USM principle and equipment chain", "Drill hole-time and overcut numericals (three each)"] },
        { week: "Week 2", focus: "Unit II complete", tasks: ["AJM, WJM, AWJM sketches and parameters", "Pairwise comparisons: AJM-WJM, WJM-AWJM", "Flash-card the pressure, velocity and mesh numbers"] },
        { week: "Week 3", focus: "Unit III part 1 - EDM", tasks: ["Die-sink EDM: spark cycle, regimes, dielectric, servo", "Wire EDM: skims, kerf offset, the punch-die trick", "Numericals: pulse energy and MRR estimates"] },
        { week: "Week 4", focus: "Unit III part 2 - beams and plasma", tasks: ["LBM and EBM with the full comparison table", "PAM: the two arc modes and the three pinches", "Redraw all Unit III sketches from memory"] },
        { week: "Week 5", focus: "Unit IV", tasks: ["CHM/PCM chain and etch-factor numericals", "ECM principle, electrolytes, the ECM vs EDM table", "Faraday derivation plus five worked MRR sums"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["ECSM, MAF, micro-EDM/ECM short notes", "Surface-integrity table and case-study chains", "Two full past papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      body: [
        "The night before this paper is a recall test, not a learning test. Everything below is designed to be redone from memory on one sheet of paper each.",
      ],
      bullets: [
        "Redraw the eight core sketches from memory: USM column, AJM line, WJM chain, EDM cell, EBM column, plasma torch, ECM loop, ECSM cell.",
        "Rewrite the four formulas: m = eta·I·t·A/(z·F), MRR = eta·I·A/(z·F·rho), time = volume/MRR, overcut ≈ 2 x grit size.",
        "Memorise the three comparison tables: EDM vs ECM, LBM vs EBM, WJM vs AWJM.",
        "Recite the parameter cards: 20-40 kHz, 10-40 um, 2-10 bar, 150-300 m/s, 3000-4000 bar, 10-100 um gap, 5-25 V, 16,500-30,000 C.",
        "Walk one case-study chain end to end (the mould-plate route sheet) and one numerical (1000 A iron).",
        "Sleep - this paper rewards recall of labelled sketches, and recall dies without rest.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Draw the labelled sketch first - six or more labels - then explain; the diagram carries standalone marks in 'describe with neat sketch' questions.",
        "Quote realistic numbers (20-40 kHz, 10,000 C, 96,500 C/mol, 0.1-0.3 mm wire): values earn the credibility marks.",
        "Answer 'compare' questions as a table with five or six rows - mechanism, MRR, tolerance, surface, tooling, applications.",
        "In numericals, write law, formula, substitution and units on separate lines; the marks live in the steps, not the final number.",
        "Time-box: 7-mark questions get 14-18 minutes, shorts 4-6 minutes, and the last 10 minutes go to labelling checks and unit checks.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing that the ECM tool wears - the cathode is immune; only its insulation and flow design age.",
        "Dropping current efficiency from the Faraday calculation - the substitution step loses a mark without eta.",
        "Claiming EDM or ECM can machine glass - both need conductors; insulators go to USM, LBM, CHM or ECSM.",
        "Swapping transferred and non-transferred plasma arcs - cutting uses the transferred arc to the workpiece; spraying uses the internal one.",
        "Drawing AJM with the abrasive fed after the nozzle - entrainment happens in the mixing chamber before the nozzle.",
        "Presenting the recast layer as a benefit - it is a defect: micro-cracks, tensile stress and a fatigue penalty.",
      ],
    },
  ],
};
