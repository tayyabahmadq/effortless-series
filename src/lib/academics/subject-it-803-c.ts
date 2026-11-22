import type { AcademicSubject } from "./types";

export const it803c: AcademicSubject = {
  id: "it-803-c",
  code: "IT-803(C)",
  title: "Printing and Design",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: how a CAD model becomes an STL, how six machine families print layer by layer, which polymers, metals and powders feed them, how equipment parameters and bonding mechanisms govern the build, and how post-processing turns a green part into a qualified product.",
  description:
    "Five units walk from the additive principle, the process chain, classification and STL data, through the six techniques from stereo-lithography to binder jetting and their application domains, into materials, powder preparation and supports, then the equipment - parameters, bonding mechanisms, faults and process design - ending with post-processing, inspection and the defects and their causes that decide product quality.",
  accentColor: "#eab308",
  emoji: "PD",
  unitCount: 5,
  totalSections: 36,
  units: [
    {
      number: 1,
      roman: "I",
      title: "3D Printing (Additive Manufacturing)",
      summary:
        "Unit I frames the whole subject: what additive manufacturing is and how the process runs, the classification of AM processes, the honest advantages and limitations, additive versus conventional manufacturing, the application landscape, and CAD for AM - data formats, data translation, data loss and the STL format that every machine consumes.",
      chapter: {
        number: "01",
        title: "From CAD Model to Solid Part",
        intro:
          "Unit I covers the definition and process of additive manufacturing, the generic process chain from CAD model to finished part, the ASTM classification of AM process families, advantages and limitations, additive versus conventional manufacturing, applications, and the CAD side of the pipeline - data formats, translation, data loss and the STL format.",
        inOneBreath:
          "Additive manufacturing builds a part layer upon layer directly from sliced CAD data, so complexity is nearly free and tooling is absent. The chain runs CAD - STL - machine setup - layerwise build - removal - post-processing, and the data loss hides in the tessellation step. ISO/ASTM 52900 classifies the machines into seven families by material form and bonding mechanism. Against subtractive machining, AM wins on complexity and low volume, and loses on surface finish, build size and throughput.",
        sections: [
          {
            number: "1.1",
            title: "What additive manufacturing is",
            body: [
              "Additive manufacturing (AM), popularly called 3D printing, is defined by ISO/ASTM 52900 as the process of joining materials to make parts from 3D model data, usually layer upon layer, as opposed to subtractive methods that remove material. Chuck Hull demonstrated the first working process - stereo-lithography - in the mid-1980s and patented it in 1986. The defining traits are three: the geometry starts as a digital model, the model is sliced into thin cross-sections, and the machine builds those slices one on top of another, fusing each layer to the one below. No mould, no die, no cutting path - the part grows instead of being carved or cast.",
              "A worked example shows why the principle matters. A 60 mm tall part printed at 0.1 mm layer thickness is 600 slices; whether each slice is a solid cube or a cube laced with cooling channels and lattice struts, the machine's procedure is identical - deposit, fuse, lower, repeat. Build time scales mainly with part height and volume, not with feature count, so a topologically optimised bracket costs roughly what a solid block of the same envelope costs. In machining, every internal channel is extra tool access and extra cost; in AM, complexity is transferred from the shop floor to the design file.",
              "For the exam, define AM with the standard phrase 'joining materials to make parts from 3D model data, usually layer upon layer', then name the three traits (digital, sliced, layerwise) and contrast with subtractive manufacturing in one line. Follow with the costs that are not free - support removal, surface stair-stepping, slower throughput - because examiners reward the balanced answer, not the sales pitch. This definition plus the contrast is the opening paragraph of half the 7-mark answers in this subject.",
            ],
            keyTerms: [
              { term: "Additive manufacturing", definition: "Joining materials to make parts from 3D model data, usually layer upon layer (ISO/ASTM 52900)." },
              { term: "Layer thickness", definition: "The height of one printed slice, typically 0.025-0.4 mm depending on the process." },
              { term: "Slicing", definition: "Cutting the digital model into thin cross-sections that the machine builds one at a time." },
              { term: "Subtractive manufacturing", definition: "Making a part by removing material from a larger block - turning, milling, drilling." },
            ],
            diagram: {
              kind: "flow",
              title: "The additive principle in five moves",
              caption: "Deposit, fuse, lower, repeat - the same loop whether the slice is a cube or a lattice.",
              steps: [
                { label: "Design CAD model", note: "3D geometry, watertight" },
                { label: "Slice into layers", note: "0.025-0.4 mm slices" },
                { label: "Deposit material", note: "resin, filament, powder, binder" },
                { label: "Fuse the layer", note: "cure, melt, sinter or glue" },
                { label: "Lower and repeat", note: "hundreds of layers" },
              ],
            },
            bullets: [
              "ISO/ASTM 52900 definition: joining materials to make parts from 3D model data, layer upon layer.",
              "First commercialised as stereo-lithography by Chuck Hull (patent 1986).",
              "A 60 mm part at 0.1 mm layers is 600 slices - build time follows height and volume, not feature count.",
              "Internal channels, lattices and topologically optimised shapes cost no extra in AM.",
              "The costs that remain: supports, stair-stepping, slower throughput, size limits.",
            ],
            callout: {
              type: "tip",
              title: "Complexity is free, but supports are not",
              body: "Geometry complexity costs nothing extra in build time, yet overhangs demand support structures that must be printed and then removed. The real price of complexity is post-processing labour - a point that turns a generic answer into a specific one.",
            },
            codeExample: {
              language: "python",
              caption: "build_time.py - why height, not complexity, drives build time",
              code: `height_mm, layer_mm = 60, 0.1
layers = height_mm / layer_mm            # 600 slices

# each layer: scan/deposit + platform lower + recoat
seconds_per_layer = 4 + 2
hours = layers * seconds_per_layer / 3600
print(layers, "layers -", round(hours, 1), "h")   # 600 layers - 1.0 h
# a lattice inside the same envelope changes nothing in this estimate`,
            },
            examQuestions: [
              {
                q: "Define additive manufacturing as per ISO/ASTM 52900. Explain the layer-by-layer principle with a sketch and contrast it with subtractive manufacturing.",
                marks: 7,
                outline: [
                  "Definition: joining materials to make parts from 3D model data, usually layer upon layer",
                  "Three traits: digital model, sliced cross-sections, layerwise build and fusion",
                  "Origin: Chuck Hull's stereo-lithography, patent 1986",
                  "Layer math: 60 mm part at 0.1 mm = 600 layers",
                  "Complexity is nearly free - time follows height and volume, not feature count",
                  "Subtractive contrast: material removed from a billet, chips are waste, tool access limits shape",
                  "Balanced close: supports, stair-stepping and throughput remain AM's costs",
                ],
              },
              {
                q: "Explain why geometric complexity is said to be 'free' in additive manufacturing, and state two situations where it is not.",
                marks: 7,
                outline: [
                  "The machine repeats the same deposit-fuse-lower loop for any cross-section",
                  "Internal channels and lattices add no tooling and no extra setup",
                  "Design effort moves from shop floor to CAD file",
                  "Not free: overhangs need supports that are printed and removed by hand",
                  "Not free: very fine features still hit machine resolution (laser spot, nozzle size)",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The generic AM process chain",
            body: [
              "Every AM process, whatever the machine, walks the same eight-step chain: (1) create the CAD model, (2) convert it to STL, (3) transfer the file to the machine, (4) set up the machine - orientation, supports, slicing parameters, (5) build layer by layer, (6) remove the part from the machine, (7) post-process - cure, clean, finish, heat treat, and (8) apply the part. The chain is the skeleton of the whole subject: Units II-IV are step 5 in depth, Unit V is steps 6-8, and Unit I's remainder is steps 1-3. Learning the chain with one failure mode per step organises every answer.",
              "Each step owns a characteristic failure. CAD fails on non-watertight solids; STL conversion fails on tessellation error and missing units; transfer fails on corrupted or oversized files - a 50,000-triangle binary STL is about 2.4 MB but its ASCII twin is near 12 MB; setup fails on wrong orientation (supports everywhere) or wrong parameters; the build fails on warping, delamination or recoater jams; removal fails when supports tear the surface; post-processing fails when shrinkage was never compensated in the model. Setup is the step students skip in answers - yet orientation and layer thickness chosen there decide accuracy, supports and build time before the machine even starts.",
              "A numbers example ties the chain together. A 30 mm tall stereo-lithography part at 0.1 mm layers is 300 slices; at 1-3 seconds of laser scanning per layer plus platform movement, the build alone takes roughly 1-2 hours, then post-cure and support removal add 30-60 minutes. Exam framing: for the 14-mark 'explain the AM process chain' question, name all eight steps in order, attach one input, one output and one failure to each, and close by mapping the units of this syllabus onto the chain - that map is what earns the last marks.",
            ],
            keyTerms: [
              { term: "Process chain", definition: "The eight steps from CAD model to applied part that every AM job walks." },
              { term: "Machine setup", definition: "Orientation, supports, slicing and parameter selection before the build starts." },
              { term: "Post-processing", definition: "Everything after the build: removal, cleaning, curing, heat treatment, finishing (Unit V)." },
              { term: "Watertight model", definition: "A closed, manifold solid with no gaps - the precondition for valid STL output." },
            ],
            diagram: {
              kind: "pipeline",
              title: "CAD to applied part - the eight-step chain",
              caption: "Steps 1-3 are Unit I, step 5 is Units II-IV, steps 6-8 are Unit V - one chain, whole syllabus.",
              stages: [
                { label: "1-2. CAD + STL", note: "model, tessellate, transfer" },
                { label: "3-4. Setup", note: "orientation, supports, parameters" },
                { label: "5. Build", note: "layer upon layer" },
                { label: "6. Remove", note: "from plate, vat or powder cake" },
                { label: "7. Post-process", note: "cure, clean, finish, heat treat" },
                { label: "8. Apply", note: "prototype, tool or end part" },
              ],
            },
            bullets: [
              "Eight steps: CAD, STL conversion, transfer, setup, build, removal, post-processing, application.",
              "Setup decides supports, accuracy and build time before the machine starts.",
              "STL step failure: tessellation error, lost units, 5-6x file-size jump if ASCII.",
              "Build-step failures: warping, delamination, recoater jam, porosity.",
              "Post-processing failure: uncompensated shrinkage, torn support scars.",
              "The chain maps the syllabus: Unit I = steps 1-3, Units II-IV = step 5, Unit V = steps 6-8.",
            ],
            callout: {
              type: "exam",
              title: "The chain is the 14-mark skeleton",
              body: "'Explain the process of 3D printing' is the most predictable long question. Write the eight steps in order with one failure mode each - the failure modes are what lift the answer from a list to an explanation.",
            },
            table: {
              caption: "One failure mode per chain step.",
              headers: ["Step", "Input", "Output", "Typical failure"],
              rows: [
                ["CAD modelling", "design intent", "solid model", "non-watertight geometry"],
                ["STL conversion", "CAD model", "triangle mesh", "tessellation error, units lost"],
                ["Transfer", "STL file", "file on machine", "corrupted / oversized file"],
                ["Setup", "STL + parameters", "sliced job", "bad orientation, wrong supports"],
                ["Build", "sliced job", "green part", "warping, delamination, jams"],
                ["Removal", "green part", "free part", "support scars, breakage"],
                ["Post-processing", "free part", "finished part", "uncompensated shrinkage"],
                ["Application", "finished part", "use", "unqualified part in service"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the generic additive manufacturing process chain from CAD model to finished part, giving the purpose and one typical failure of each step.",
                marks: 14,
                outline: [
                  "CAD model: watertight solid; failure = non-manifold geometry",
                  "STL conversion + transfer: tessellation, file to machine; failures = chord error, corruption",
                  "Setup: orientation, supports, layer thickness; failure = supports everywhere",
                  "Layerwise build; failure = warping, delamination, recoater jam",
                  "Removal from machine; failure = torn surfaces at support points",
                  "Post-processing: cure, clean, heat treat, finish; failure = uncompensated shrinkage",
                  "Application; note map of units I-V onto the chain",
                ],
              },
              {
                q: "Why is machine setup often called the highest-leverage step of the AM chain? Justify with numbers.",
                marks: 7,
                outline: [
                  "Orientation decides support volume and the surfaces that get scars",
                  "Layer thickness decides layer count: 30 mm at 0.1 mm = 300 layers",
                  "Time: 1-3 s per layer scan plus platform motion gives 1-2 h for this part",
                  "A poorer orientation can double supports and post-processing labour",
                  "Layer thickness and plate placement are setup decisions too - both show up in cost",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Classification of AM processes",
            body: [
              "ISO/ASTM 52900 organises additive manufacturing into seven process families, classified by two questions: what form is the material in, and how is each layer bonded? Vat photopolymerization (liquid resin cured by light), material extrusion (molten filament pushed through a nozzle), powder bed fusion (powder melted or sintered by a laser or electron beam), material jetting (droplets of photopolymer jetted and cured), binder jetting (liquid binder glued onto powder), sheet lamination (sheets bonded and cut), and directed energy deposition (wire or powder fed into a moving melt pool). Each family is a different answer to the same layerwise question.",
              "The two classification axes are worth memorising separately because exams ask both. By material state: liquid (SLA, material jetting), powder (SLS, SLM, binder jetting), solid sheet (LOM), solid filament (FDM), wire (DED). By bonding mechanism: photopolymerization (UV crosslinking), thermal fusion (melting or sintering), adhesion (glue or binder). A process name plus its two coordinates - 'FDM: solid filament, thermal fusion' - is a complete one-mark identification and the fastest way to fill comparison tables in Unit II.",
              "Exam framing: 'classify AM processes' is usually a 7-mark question, and the full-mark answer gives all seven families with one machine example and one material example each, then draws the two-axis scheme. Do not confuse binder jetting with material jetting - the first glues powder, the second jets whole photopolymer droplets; that single distinction separates a correct answer from a scrambled one.",
            ],
            keyTerms: [
              { term: "Vat photopolymerization", definition: "Curing liquid resin with a light source - SLA and DLP." },
              { term: "Powder bed fusion", definition: "Selectively fusing powder in a bed with a laser or electron beam - SLS, SLM, EBM." },
              { term: "Material extrusion", definition: "Pushing molten filament through a nozzle layer by layer - FDM/FFF." },
              { term: "Directed energy deposition (DED)", definition: "Feeding wire or powder into a moving melt pool on a substrate - repair and large parts." },
            ],
            diagram: {
              kind: "layers",
              title: "The seven ISO/ASTM 52900 families",
              caption: "One layerwise principle, seven answers - ordered here roughly by industrial spread.",
              layers: [
                { label: "Vat photopolymerization", note: "liquid resin + UV - SLA, DLP" },
                { label: "Material extrusion", note: "filament + heat - FDM" },
                { label: "Powder bed fusion", note: "powder + laser/beam - SLS, SLM" },
                { label: "Material jetting", note: "photopolymer droplets - PolyJet" },
                { label: "Binder jetting", note: "powder + liquid binder" },
                { label: "Sheet lamination + DED", note: "sheets cut - LOM; melt pool - WAAM" },
              ],
            },
            bullets: [
              "Seven families: vat photopolymerization, material extrusion, powder bed fusion, material jetting, binder jetting, sheet lamination, DED.",
              "Axis 1 - material state: liquid, powder, filament, sheet, wire.",
              "Axis 2 - bonding mechanism: photopolymerization, thermal fusion, adhesion.",
              "FDM = solid filament + thermal fusion; SLA = liquid + photopolymerization.",
              "Binder jetting glues powder with binder; material jetting deposits whole cured droplets - never mix them.",
              "Every family reappears in Unit II as a named technique with its own parameters.",
            ],
            callout: {
              type: "tip",
              title: "Identify by coordinates",
              body: "For any process, answer 'material state + bonding mechanism' in one breath: SLS is powder + sintering, SLM is powder + melting, LOM is sheet + adhesion. This two-word habit answers every 'identify and classify' question instantly.",
            },
            table: {
              caption: "Family - material - bonding - example.",
              headers: ["Family", "Material form", "Bonding", "Example process"],
              rows: [
                ["Vat photopolymerization", "liquid resin", "UV crosslinking", "SLA, DLP"],
                ["Material extrusion", "solid filament", "thermal fusion", "FDM / FFF"],
                ["Powder bed fusion", "powder", "sintering / melting", "SLS, SLM"],
                ["Material jetting", "liquid droplets", "UV crosslinking", "PolyJet"],
                ["Binder jetting", "powder", "adhesive binder", "3DP, metal BJ"],
                ["Sheet lamination", "solid sheets", "adhesive", "LOM"],
                ["Directed energy deposition", "wire / powder", "melting", "WAAM, LENS"],
              ],
            },
            examQuestions: [
              {
                q: "Classify additive manufacturing processes as per ISO/ASTM 52900, giving for each family the material form, bonding mechanism and one example process.",
                marks: 7,
                outline: [
                  "Vat photopolymerization: liquid resin, UV cure - SLA/DLP",
                  "Material extrusion: solid filament, thermal fusion - FDM",
                  "Powder bed fusion: powder, sintering or melting - SLS, SLM",
                  "Material jetting: photopolymer droplets, UV cure - PolyJet",
                  "Binder jetting: powder glued by binder - 3DP, metal BJ",
                  "Sheet lamination: bonded sheets cut to shape - LOM",
                  "DED: wire/powder fed into a melt pool - WAAM, LENS",
                ],
              },
              {
                q: "Differentiate binder jetting from material jetting.",
                marks: 7,
                outline: [
                  "Binder jetting: jets liquid binder onto a powder bed; powder forms the part",
                  "Green part needs sintering or infiltration afterwards",
                  "Material jetting: jets the build material itself (photopolymer droplets)",
                  "Droplets are UV-cured immediately; no powder, no furnace step",
                  "Net: binder jetting serves sand moulds and colour models; material jetting serves fine multi-material parts",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Additive versus conventional manufacturing",
            body: [
              "Conventional manufacturing splits into two grand strategies. Subtractive - turning, milling, drilling - starts from a billet and removes everything that is not the part; in aerospace machining, 60-90% of an expensive titanium billet can end up as chips. Formative - casting, forging, injection moulding - forces material into a mould; it is unbeatable per part at volume, but the mould is weeks of tooling and its cost must be amortised across thousands of parts. Additive is the third strategy: no billet waste, no tooling, and a per-part cost that stays nearly flat with complexity.",
              "The honest comparison is a crossover curve, not a verdict. A quantitative worked example: an injection-moulding tool costs about $50,000 with $2 per part thereafter, while AM prints the same part at $15 each with no tool. Break-even quantity q solves 50000 + 2q = 15q, giving q = 50000/13, about 3,850 units - below that, AM wins; above it, moulding wins. Geometry bends the numbers: if the part needs internal cooling channels that machining cannot reach, AM may be the only option at any quantity, which is why conformal-cooled mould tools are themselves a famous AM application.",
              "Where additive loses is as examinable as where it wins. Surface finish: an as-built laser-melted part carries Ra of roughly 8-15 µm against 0.8-1.6 µm from finish machining. Build size: chambers of 200-400 mm bound part size, while machining handles metres. Throughput: one machine builds one job for hours, while a mould produces a part every few seconds. Mechanical anisotropy: layer-wise bonding leaves z-direction strength lower than in-plane. Exam framing: write the compare table (cost per part vs quantity, material waste, tooling, finish, size, speed), give the break-even numbers, and close with 'AM wins low volume and complexity; conventional wins volume and finish'.",
            ],
            keyTerms: [
              { term: "Subtractive manufacturing", definition: "Part made by removing material from a billet; waste rises with part complexity." },
              { term: "Formative manufacturing", definition: "Part formed in a mould or die - casting, forging, injection moulding; tooling amortised over volume." },
              { term: "Break-even quantity", definition: "The volume at which tooling plus cheap per-part cost overtakes toolless but costly per-part AM." },
              { term: "Anisotropy", definition: "Direction-dependent properties; AM parts are typically weaker across layers (z) than along them." },
            ],
            diagram: {
              kind: "compare",
              title: "Conventional versus additive",
              caption: "Subtractive wastes material, formative locks tooling cost, additive trades both for build time and finish.",
              left: {
                heading: "Subtractive / formative",
                items: [
                  "Subtractive: 60-90% of an aerospace billet becomes chips",
                  "Formative: mould costs weeks and ~$50,000 before part one",
                  "Superb surface finish: Ra 0.8-1.6 µm machined",
                  "Unbeatable throughput at high volume",
                ],
              },
              right: {
                heading: "Additive",
                items: [
                  "No billet waste, no tooling, flat cost vs complexity",
                  "Break-even near 3,850 parts for the worked example",
                  "As-built Ra 8-15 µm (laser-melted metals) needs finishing",
                  "Build hours per job; chambers 200-400 mm bound size",
                ],
              },
            },
            bullets: [
              "Subtractive: remove material; waste 60-90% on complex aerospace parts.",
              "Formative: casting/moulding; tooling lead time in weeks, cost amortised over volume.",
              "Additive: toolless, waste-free, complexity-independent cost.",
              "Break-even example: $50,000 tool + $2/part vs $15/part AM -> crossover near 3,850 units.",
              "AM loses on finish (Ra 8-15 µm as-built), size (200-400 mm chambers) and throughput.",
              "AM parts are anisotropic - z-direction strength below in-plane.",
            ],
            callout: {
              type: "warning",
              title: "AM does not replace machining - it feeds it",
              body: "Almost every metal AM part still visits a machine shop for critical faces: as-built tolerance and finish cannot match finish machining. The industrial answer is hybrid: print the impossible geometry, machine the accurate surfaces.",
            },
            codeExample: {
              language: "python",
              caption: "breakeven.py - where AM stops winning",
              code: `tool_cost, mould_per_part = 50_000, 2.0   # injection moulding
am_per_part = 15.0                        # additive, no tooling

q = tool_cost / (am_per_part - mould_per_part)
print(round(q), "units")                  # 3846 units
# below q: AM cheaper; above q: moulding cheaper
# geometry (internal channels) can override the arithmetic entirely`,
            },
            examQuestions: [
              {
                q: "Compare additive, subtractive and formative manufacturing on tooling, material waste, geometric freedom, surface finish and economical production volume, with a worked break-even example.",
                marks: 14,
                outline: [
                  "Subtractive: chips waste 60-90% of complex billets; superb Ra 0.8-1.6 µm finish",
                  "Formative: moulding tool ~$50,000, weeks of lead time, cheapest at volume",
                  "Additive: no tooling, near-zero waste, complexity nearly free",
                  "Break-even: 50000 + 2q = 15q -> q = 3846 units",
                  "Below q AM wins; above q formative wins",
                  "AM limits: as-built Ra 8-15 µm, 200-400 mm chambers, anisotropy",
                  "Conclude: AM for low volume + complexity; conventional for volume + finish",
                ],
              },
              {
                q: "Give two situations where additive manufacturing is preferred even at high production volume, and justify each.",
                marks: 7,
                outline: [
                  "Parts impossible to machine or mould: internal conformal cooling channels",
                  "Lattices and topology-optimised geometry with function-per-gram value",
                  "Continuous design changes - no tool modification cost between revisions",
                  "Justification: tooling cannot produce the geometry at all, so volume never helps",
                  "Real case: conformal-cooled mould inserts printed and used on production lines",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Advantages and limitations of AM",
            body: [
              "The advantages follow directly from the layerwise, toolless principle. Tooling is eliminated, so design iterations cost a file upload, not a mould rework - lead time collapses from weeks to hours. Complexity is free: internal channels, lattices, and part consolidation replace assemblies of machined pieces (the classic example is consolidating twenty components into one fuel nozzle). Material waste is minimal since only the part (plus supports) is built. Customisation is free too, which is why hearing-aid shells and dental appliances were AM's first mass market - every part is a different file.",
              "The limitations are equally structural. Build rate is slow - a 300-layer part takes hours where a mould takes seconds per shot, so AM cannot serve mass production economics. Part size is capped by the chamber, typically 200-400 mm. Surface quality starts rough (Ra 8-15 µm on laser-melted metal) and stair-stepping marks every shallow angle. Properties are anisotropic - interlayer bonds are the weak direction - and metal parts carry residual stress that must be heat-treated away. Finally, every part needs post-processing, which can approach half the total cost.",
              "The exam answer that scores presents advantage and limitation as one table - each advantage with its engineering consequence, each limitation with its mitigation. Say 'complexity is free - which enables part consolidation', not just 'complex designs are possible'. Say 'slow build rates limit AM to low volumes - mitigated by nesting many parts in one powder-cake build', not just 'slow'. The ladder diagram shows how the advantages unlocked AM's three waves: prototype first, tooling second, end-use production third.",
            ],
            keyTerms: [
              { term: "Part consolidation", definition: "Merging an assembly into one printed part - fewer joints, fewer fasteners, less weight." },
              { term: "Stair-stepping", definition: "Terracing on shallow angles caused by finite layer thickness; worsens as layers get thicker." },
              { term: "Rapid prototyping", definition: "AM's first and still largest use - physical models for form, fit and function checks." },
              { term: "Rapid tooling", definition: "AM-made moulds, dies, jigs and fixtures, often with conformal cooling channels." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The three waves of AM value",
              caption: "Each wave uses one more advantage - toolless iteration, toolless tooling, toolless production.",
              tiers: [
                { label: "Direct digital manufacturing", note: "end-use parts, low volume + complexity" },
                { label: "Rapid tooling", note: "moulds, jigs, conformal-cooled dies" },
                { label: "Rapid prototyping", note: "form, fit and function models" },
              ],
            },
            bullets: [
              "Advantage: no tooling - iteration lead time falls from weeks to hours.",
              "Advantage: complexity free - internal channels, lattices, part consolidation.",
              "Advantage: minimal waste and free customisation (dental, hearing aids).",
              "Limitation: slow builds and 200-400 mm chambers - no mass production.",
              "Limitation: Ra 8-15 µm as-built, stair-stepping, anisotropy, residual stress.",
              "Limitation: post-processing can approach half of total part cost.",
            ],
            callout: {
              type: "exam",
              title: "Pair every point with a consequence",
              body: "The 7-mark advantages question is graded on pairing: 'no tooling -> iteration in hours', 'complexity free -> consolidation of 20 parts into 1', 'slow build -> nesting mitigates'. Unpaired lists read like brochures and cap at half marks.",
            },
            table: {
              caption: "Advantage -> consequence and limitation -> mitigation.",
              headers: ["Point", "Type", "Consequence / mitigation"],
              rows: [
                ["No tooling", "advantage", "iterations in hours; cheap customisation"],
                ["Complexity free", "advantage", "internal channels; 20 parts consolidated into 1"],
                ["Low waste", "advantage", "expensive Ti powder not turned into chips"],
                ["Slow build", "limitation", "nest many parts per powder-cake build"],
                ["Size capped 200-400 mm", "limitation", "split part, or hybrid with machining"],
                ["Rough + anisotropic", "limitation", "finish machine; heat treat; orient strength axis"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the advantages and limitations of additive manufacturing, pairing each point with its engineering consequence or mitigation.",
                marks: 7,
                outline: [
                  "No tooling -> design iterations in hours, not weeks",
                  "Complexity free -> internal channels, lattices, part consolidation",
                  "Low waste -> costly powder not machined into chips",
                  "Customisation free -> dental, hearing-aid, medical markets",
                  "Slow build and 200-400 mm chambers -> low-volume economics only",
                  "As-built Ra 8-15 µm, stair-stepping -> finishing needed",
                  "Anisotropy + residual stress -> orientation and heat treatment discipline",
                ],
              },
              {
                q: "Explain the three waves of AM value - rapid prototyping, rapid tooling, direct digital manufacturing - with one example of each.",
                marks: 7,
                outline: [
                  "Rapid prototyping: visual/fit models - first and still largest use",
                  "Rapid tooling: jigs, fixtures, moulds; conformal cooling cuts cycle time",
                  "Direct digital manufacturing: end-use parts at low volume + complexity",
                  "Example chain: prototype bracket -> conformal-cooled die -> flight bracket",
                  "Each wave needs stricter post-processing and qualification than the last",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Applications of additive manufacturing",
            body: [
              "AM's applications obey one pattern: low volume, high complexity, or personalisation. Aerospace and defence buy weight savings and part consolidation - fuel nozzles consolidated from twenty parts into one, about 25% lighter and several times more durable; rocket injectors with impossible internal channels. Health care buys fit: patient-specific implants, dental crowns and aligner patterns, surgical guides, hearing-aid shells. Automotive and machine tools buy tooling: jigs, fixtures, and injection-mould inserts with conformal cooling channels that cut cycle times by tens of percent.",
              "The syllabus list runs wider - electronics, construction, food processing - and each entry follows the same logic. Electronics: printed circuit carriers, antenna arrays, heat sinks with optimised fin lattices. Construction: extruded concrete wall panels and complex formwork where the mould would cost more than the wall. Food processing: custom pasta, chocolate and pastry shapes - geometry variety that a mould line cannot afford. Machine tools: cutting-tool holders with internal coolant delivery. The pattern, stated in one line, answers any 'list AM applications' question with reasons instead of names.",
              "Exam framing: 'explain AM applications in aerospace and health care' is the standard 7 or 14-mark version. Structure by value driver - aerospace buys consolidation and lightness (state the 20-to-1 nozzle, 25% lighter), health care buys patient-specific geometry (implants with porosity matching bone, same-day surgical guides), then close with why conventional methods fail for each: volumes too low to amortise tooling, geometry too internal to machine, anatomy too individual to mould.",
            ],
            keyTerms: [
              { term: "Part consolidation", definition: "Printing one integrated component where an assembly of many machined parts stood before." },
              { term: "Conformal cooling", definition: "Cooling channels that follow the mould cavity surface - possible only additively." },
              { term: "Patient-specific device", definition: "Implant or guide built from the patient's own scan data - the natural AM market." },
              { term: "Functional part", definition: "A printed part that serves in service, not just as a model - the bar Unit V's quality work exists for." },
            ],
            diagram: {
              kind: "matrix",
              title: "Where AM wins - volume versus criticality",
              caption: "AM owns the low-volume quadrants; the mass-production quadrants belong to moulding and machining.",
              axes: { x: "Production volume (one-off -> many thousands)", y: "Part criticality (visual model -> flight hardware)" },
              quadrants: [
                { label: "Aerospace, defence, medical implants", note: "low volume, high criticality - AM's premium home" },
                { label: "Mass production", note: "moulding and machining win - AM loses on throughput" },
                { label: "Prototypes and visual models", note: "low volume, low criticality - AM's historic base" },
                { label: "Consumer mass items", note: "formative wins; AM only for design iterations" },
              ],
            },
            bullets: [
              "Aerospace/defence: consolidated fuel nozzle (20 -> 1 part, ~25% lighter), rocket injectors.",
              "Health care: implants, crowns, aligner patterns, surgical guides, hearing-aid shells.",
              "Automotive/machine tools: jigs, fixtures, conformal-cooled mould inserts.",
              "Electronics: heat sinks, antennas, circuit carriers with complex geometry.",
              "Construction: extruded concrete panels and complex formwork.",
              "Food processing: custom pasta, chocolate and pastry geometry.",
            ],
            callout: {
              type: "tip",
              title: "Answer with value drivers, not part names",
              body: "Every application reduces to one of three drivers: low volume (tooling unaffordable), high complexity (geometry unmachinable), or personalisation (every part different). Name the driver, then the example - that structure fits any application question.",
            },
            table: {
              caption: "Domain - example part - value driver.",
              headers: ["Domain", "Example", "Why AM wins"],
              rows: [
                ["Aerospace", "consolidated fuel nozzle, brackets", "lighter, fewer joints, no tooling"],
                ["Health care", "implants, guides, aligner patterns", "patient-specific, volumes of one"],
                ["Defence", "rocket injectors, hardened spares", "internal channels, on-demand supply"],
                ["Automotive", "jigs, fixtures, mould inserts", "conformal cooling, fast iteration"],
                ["Electronics", "heat sinks, antennas", "lattice fins unreachable by machining"],
                ["Construction / food", "concrete panels, pasta shapes", "mould cost impractical for variety"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the applications of additive manufacturing in aerospace and health care, with reasons why conventional manufacturing fails there.",
                marks: 14,
                outline: [
                  "Aerospace: consolidation - nozzle built as 20 parts -> 1, ~25% lighter, more durable",
                  "Internal cooling / fuel passages unmachinable by drilling",
                  "Low volumes cannot amortise tooling; buy-to-fly ratios improve",
                  "Health care: implants from patient CT data - volumes of one",
                  "Porous lattices reduce stiffness toward bone, easing stress shielding",
                  "Surgical guides and aligner patterns: same-day, per-patient files",
                  "Conventional fails: no mould for a single anatomy, no drill path for channels",
                ],
              },
              {
                q: "Write short notes on AM applications in automotive tooling, electronics, construction and food processing.",
                marks: 7,
                outline: [
                  "Automotive: jigs, fixtures and conformal-cooled mould inserts cut cycle time",
                  "Electronics: heat sinks and antennas with lattice geometry",
                  "Construction: extruded concrete panels, complex formwork",
                  "Food: custom pasta/chocolate shapes - variety without moulds",
                  "Common thread: low volume, high complexity, or free personalisation",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "CAD data formats, translation and data loss",
            body: [
              "Design data starts inside a native CAD format - CATPart, SLDPRT, PRT - a precise parametric solid (B-rep: boundary representation of faces, edges and vertices) that no slicing software reads directly, because slicers need a static watertight shell, not feature history. Translation therefore moves the model through neutral formats: STEP and IGES exchange exact geometry between CAD systems (IGES, the oldest, sometimes leaks surfaces), while mesh formats - STL, OBJ, AMF, 3MF - are what machines actually consume. Each hop trades fidelity for portability, and the mesh hop loses the most: solid topology becomes a bare triangle shell.",
              "The formats differ in what they carry, and translation distorts geometry as well as dropping metadata. STL keeps triangles alone - no units, colour, material or tolerance; AMF and 3MF restore units, colour and settings. The distortion is tessellation: exact curves become chords, with chordal error (sagitta) of R(1 - cos(theta/2)). A 20 mm radius cylinder at 10-degree facets deviates by 10(1 - cos 5 degrees) = 0.038 mm; tightening to 5-degree facets cuts the error to 0.0095 mm but doubles the triangle count and the file size. Keep chordal error an order below layer thickness - about 0.005 mm for a 0.05 mm process.",
              "Broken exports add mechanical defects to mathematical ones: gaps (missing triangles), flipped normals (facets wound to face inward), and non-manifold edges (three faces sharing one edge - impossible for a real solid). Repair software detects these and stitches a watertight, outward-normal shell; slicing an unrepaired mesh produces inverted walls and phantom voids. Once lost, none of it returns - the mesh is the only truth the machine sees, which is why every design change goes back to the native CAD and re-exports rather than patching triangles.",
              "Exam framing: 'explain CAD data formats for AM and the data translation problem' expects the native - STEP/IGES - mesh chain, what each format carries, why information is lost, and the sagitta calculation with numbers. Close with the working rule set: keep the native CAD as master, tessellate last at the tightest tolerance file size allows, validate and repair the mesh before slicing, and never treat a repaired mesh as a design model - it is a chorded approximation of one.",
            ],
            keyTerms: [
              { term: "B-rep", definition: "Boundary representation - exact CAD surfaces and edges; what native and STEP formats carry." },
              { term: "STEP / IGES", definition: "Neutral exchange formats between CAD systems; exact geometry, vendor-independent." },
              { term: "AMF / 3MF", definition: "Mesh formats that restore units, colour, materials and metadata on top of the triangles." },
              { term: "Chordal error (sagitta)", definition: "Deviation of a chord from the true curve: R(1 - cos(theta/2)) for a chord spanning theta." },
              { term: "Watertight mesh", definition: "Closed, outward-normal shell with no gaps or non-manifold edges - the precondition for slicing." },
            ],
            diagram: {
              kind: "fork",
              title: "Which data route from design to machine?",
              caption: "Every route away from native CAD trades fidelity for portability - the mesh hop loses the most.",
              start: "From CAD model to build data",
              branches: [
                { label: "Native CAD (CATPart, SLDPRT)", outcome: "exact parametric solid - but vendor-locked, unreadable by slicers", good: false },
                { label: "Neutral solids (STEP, IGES)", outcome: "exact geometry exchange between CAD systems; IGES may leak surfaces", good: true },
                { label: "Mesh (STL, OBJ)", outcome: "universal but geometry-only - units, colour, topology lost", good: true },
                { label: "Rich mesh (AMF, 3MF)", outcome: "mesh + units, colour, material - the fix for STL's losses", good: true },
              ],
            },
            bullets: [
              "Chain: native B-rep -> STEP/IGES (exchange) -> STL/OBJ/AMF/3MF (printing).",
              "STL carries triangles only: no units, colour, material or tolerance; AMF/3MF restore them.",
              "Tessellation distorts curves: sagitta R(1 - cos(theta/2)) - 0.038 mm at 10-degree facets on R = 20 mm.",
              "Keep chordal error an order below layer thickness (0.005 mm for a 0.05 mm process).",
              "Defect trio from bad exports: gaps, flipped normals, non-manifold edges.",
              "Validate and repair before slicing; design changes go back to native CAD, never to the mesh.",
            ],
            callout: {
              type: "warning",
              title: "Never edit the mesh, edit the model",
              body: "Mesh repair belongs to fixing export defects only. Any design change applied to an STL works on a chorded approximation of the true geometry - change the native CAD and re-export, or the error compounds.",
            },
            table: {
              caption: "What each format carries.",
              headers: ["Format", "Carries", "Use in AM"],
              rows: [
                ["Native CAD", "exact B-rep, features, parameters", "design master, edits"],
                ["STEP / IGES", "exact neutral solids/surfaces", "CAD-to-CAD exchange"],
                ["STL", "triangles only", "universal slicer input"],
                ["OBJ", "triangles + colour/texture", "multi-colour models"],
                ["AMF", "mesh + units, colour, materials", "standards-based upgrade of STL"],
                ["3MF", "mesh + units, metadata, settings", "modern print-ready exchange"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the CAD data formats used in additive manufacturing and the data translation chain from design to machine. What is lost at each hop?",
                marks: 7,
                outline: [
                  "Native CAD B-rep: exact, parametric, vendor-locked - unreadable by slicers",
                  "Slicers need a static watertight shell, not feature history",
                  "STEP/IGES: neutral exact geometry for CAD-to-CAD exchange",
                  "STL: triangles only - units, colour, tolerance, topology lost",
                  "OBJ adds colour/texture; AMF/3MF add units, materials, metadata",
                  "Translation loss: exact cylinder -> chorded prism at tessellation",
                  "Rule: native CAD as master, tessellate last at tight tolerance",
                ],
              },
              {
                q: "Explain the sources of data loss when a CAD model is prepared for additive manufacturing. Compute the chordal error for a 20 mm radius cylinder with 10-degree facets and suggest an export rule.",
                marks: 14,
                outline: [
                  "Format loss: units, tolerance, GD&T, material, colour discarded by STL",
                  "Tessellation loss: exact curves become chords; error = sagitta",
                  "Sagitta R(1 - cos(theta/2)): R = 20 mm, theta = 10 deg -> 10(1 - cos 5 deg)",
                  "Result: 0.038 mm; halving facets to 5 deg gives 0.0095 mm at ~2x triangles",
                  "Export rule: chordal error an order below layer thickness",
                  "Mesh defects from bad exports: gaps, flipped normals, non-manifold edges",
                  "Repair (fill, flip, stitch) precedes slicing; edits go to native CAD",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "The STL format",
            body: [
              "STL - originally 'stereolithography' - is the de-facto language of 3D printing: a list of triangular facets, each with an outward unit normal and three vertices. It stores nothing else - no units, no colour, no topology, no hierarchy. The winding rule makes the geometry meaningful: vertices are ordered counter-clockwise when viewed from outside, so the normal points outward, and slicers reconstruct inside versus outside from it. Every AM machine since 1988 accepts STL, which is exactly why its limitations are the industry's limitations.",
              "STL exists in two encodings, and the size arithmetic is a classic exam numerical. Binary STL is 84 bytes of header plus exactly 50 bytes per triangle (twelve 4-byte floats for normal and vertices plus a 2-byte attribute count). ASCII STL spells each facet in text at roughly 250 bytes, about 5 times larger. Worked example: a 50,000-triangle part is 84 + 50,000 x 50 = 2,500,084 bytes - about 2.4 MB - in binary, but near 12 MB in ASCII. Rule of thumb: one million triangles is 50 MB binary; a detailed dental model hits that easily.",
              "Exam framing: the standard questions are 'describe the STL format' (draw the facet record, state the winding rule, list what STL does not carry), 'compare ASCII and binary STL' (size arithmetic, 5x factor, readability trade), and the file-size numerical. Remember the closing line: STL's poverty is not a bug but a design - universal, simple, machine-independent - and its replacements AMF and 3MF exist precisely to add back units, colour and metadata without breaking the tessellation model.",
            ],
            keyTerms: [
              { term: "STL", definition: "Facet-list format: one outward normal plus three vertices per triangle; geometry only." },
              { term: "Winding rule", definition: "Counter-clockwise vertex order seen from outside, so normals point outward." },
              { term: "Binary STL", definition: "84-byte header + 50 bytes per triangle - compact, machine-readable." },
              { term: "ASCII STL", definition: "Text encoding of the same facets, ~5x larger but human-readable." },
            ],
            diagram: {
              kind: "compare",
              title: "ASCII versus binary STL",
              caption: "Same triangles, two encodings - the exam arithmetic is the 50-bytes-per-triangle rule.",
              left: {
                heading: "ASCII STL",
                items: [
                  "Readable text: 'facet normal ... vertex ...'",
                  "About 250 bytes per facet",
                  "50,000 triangles -> roughly 12 MB",
                  "Good for debugging and tiny models",
                ],
              },
              right: {
                heading: "Binary STL",
                items: [
                  "84-byte header + 50 bytes/triangle",
                  "50,000 triangles -> 2.4 MB (5x smaller)",
                  "Industry default for transfer",
                  "Opaque to humans, exact float precision",
                ],
              },
            },
            bullets: [
              "STL = list of triangles: outward normal + 3 vertices each; nothing else stored.",
              "No units, colour, material, tolerance or topology - the format's defining poverty.",
              "Winding rule: CCW from outside -> outward normals -> inside/outside decidable.",
              "Binary size = 84 + 50 x triangles; 50,000 triangles = 2.4 MB.",
              "ASCII is ~5x larger (~250 B/facet); used for readability only.",
              "AMF/3MF add units, colour and metadata on the same tessellation idea.",
            ],
            callout: {
              type: "exam",
              title: "The 50-byte numerical is guaranteed",
              body: "File-size arithmetic is the most predictable numerical in Unit I: binary STL = 84-byte header + 50 bytes per triangle. Practise converting triangle counts to MB both encodings, and remember ASCII costs ~5x - it is the fastest marks in Unit I.",
            },
            codeExample: {
              language: "text",
              caption: "One facet of an ASCII STL file (the format examiners ask you to sketch)",
              code: `solid bracket
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 10.0 0.0 0.0
      vertex 0.0 0.0 0.0
      vertex 10.0 0.0 5.0
    endloop
  endfacet
endsolid bracket
# units? none. colour? none. tolerance? none - geometry only.`,
            },
            examQuestions: [
              {
                q: "Describe the STL file format with its facet structure and winding rule. Compare ASCII and binary STL and compute the binary file size of a 50,000-triangle model.",
                marks: 14,
                outline: [
                  "Facet record: outward unit normal + three vertices (x, y, z)",
                  "Winding rule: counter-clockwise from outside -> outward normals",
                  "STL carries no units, colour, material, tolerance or topology",
                  "Binary: 84-byte header + 50 bytes per triangle",
                  "50,000 triangles: 84 + 2,500,000 = 2.5 MB",
                  "ASCII: ~250 B/facet -> ~12 MB, about 5x larger",
                  "AMF/3MF restore units, colour and metadata",
                ],
              },
              {
                q: "Why has STL survived despite its limitations?",
                marks: 7,
                outline: [
                  "Universal: every AM machine and slicer reads it since 1988",
                  "Minimal: one rule (triangles + outward normals), trivially generated",
                  "Machine-independent and robust across vendors",
                  "Successors AMF/3MF add metadata but inherit the same tessellation core",
                  "Every CAD exporter generates STL, so the tool ecosystem never had a reason to break",
                ],
              },
              {
                q: "A scanned dental model exports 1,000,000 triangles. Estimate its binary STL size.",
                marks: 7,
                outline: [
                  "Binary STL = 84 + 50 bytes per triangle",
                  "1,000,000 x 50 = 50,000,000 bytes + 84-byte header",
                  "Result: about 50 MB binary",
                  "ASCII twin: ~250 bytes/facet x 1,000,000 = ~250 MB",
                  "Practical effect: scan detail vs file size is the trade; binary wins for transfer",
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
      title: "Additive Manufacturing Techniques",
      summary:
        "Unit II is the machine zoo: stereo-lithography, LOM, FDM, SLS, SLM and binder jetting - each with its process, its parameters and its selection logic - followed by the application domains where each wins: aerospace, electronics, health care, defence, automotive, construction, food processing and machine tools.",
      chapter: {
        number: "02",
        title: "Six Techniques, One Principle",
        intro:
          "Unit II covers the six named techniques - stereo-lithography, laminated object manufacturing, fused deposition modelling, selective laser sintering, selective laser melting and binder jetting - their processes and parameters, how to select a process for an application, and the application domains of additive manufacturing.",
        inOneBreath:
          "All six techniques repeat one loop - deposit or select a roughly 0.1 mm slice, bond it, move down, repeat. SLA cures liquid resin with UV light; LOM glues and laser-cuts paper sheets; FDM extrudes molten filament; SLS sinters nylon powder with a CO2 laser; SLM melts metal powder; binder jetting glues powder and fires the green part. Parameters - layer thickness, power, scan speed, temperature - trade speed against accuracy and strength. Selection is a matrix of material, resolution, cost and support strategy, and every application domain from aerospace to food picks a different corner of it.",
        sections: [
          {
            number: "2.1",
            title: "Stereo-lithography (SLA)",
            body: [
              "Stereo-lithography is the oldest AM process - Chuck Hull's 1986 patent - and the template for vat photopolymerization. A vat holds liquid photopolymer: monomers mixed with a photoinitiator that crosslinks into solid polymer under UV light. A UV laser (modern systems at 355 nm, a beam spot of roughly 0.08-0.25 mm) draws each slice onto the resin surface; the build platform then lowers by one layer thickness, fresh resin flows over, and the loop repeats. Because the part grows downward-out of the vat in the common bottom-up machines, overhangs need support structures printed first.",
              "The numbers that define SLA are resolution numbers. Layer thickness runs 0.025-0.15 mm - the finest of the common processes - giving accuracy around ±0.1 mm and wall detail that extrusion cannot touch. The cure is governed by Jacobs' equations: cure depth Cd = Dp x ln(E/Ec), where Dp is the resin's penetration depth and Ec the critical exposure. For a resin with Dp = 120 µm and Ec = 8 mJ/cm2, an exposure E = 40 mJ/cm2 cures Cd = 120 x ln(5) = about 193 µm - exposure is tuned so the cure slightly exceeds one layer, bonding to the previous slice without over-curing the one below.",
              "SLA's post-processing is part of the process: parts come out 'green' at roughly 40-60% of final strength and must be solvent-washed and UV post-cured for minutes to an hour. Selection logic: choose SLA for the finest detail - dental patterns, jewellery masters, microfluidics, visual prototypes - accept the brittleness of many resins, UV yellowing, and supports on every overhang. Exam framing: the 14-mark answer draws the vat-platform-laser sketch, names photopolymerization as the bonding mechanism, computes one cure depth, and lists parameters - laser power, scan speed, layer thickness, resin Dp/Ec - and applications.",
            ],
            keyTerms: [
              { term: "Photopolymerization", definition: "UV-initiated crosslinking of liquid monomer into solid polymer - SLA's bonding mechanism." },
              { term: "Cure depth (Cd)", definition: "Depth of cured polymer per exposure: Cd = Dp x ln(E/Ec) - tuned to exceed one layer." },
              { term: "Critical exposure (Ec)", definition: "The exposure at which resin just gels - typically 5-12 mJ/cm2." },
              { term: "Green part", definition: "The as-printed, undercured part at 40-60% strength before UV post-cure." },
            ],
            diagram: {
              kind: "cycle",
              title: "The SLA layer loop",
              caption: "Scan, lower, recoat, repeat - then UV post-cure completes the polymerization.",
              steps: [
                { label: "Level resin surface", note: "fresh liquid over the part" },
                { label: "UV laser scans slice", note: "355 nm, 0.08-0.25 mm spot" },
                { label: "Platform lowers", note: "one layer, 0.025-0.15 mm" },
                { label: "Repeat - then post-cure", note: "wash + UV oven" },
              ],
            },
            bullets: [
              "Oldest AM process: Hull's patent 1986; liquid photopolymer cured by a 355 nm UV laser.",
              "Bonding mechanism: photopolymerization - monomer + photoinitiator crosslink under UV.",
              "Layers 0.025-0.15 mm; accuracy about ±0.1 mm - finest resolution of the six techniques.",
              "Cure depth Cd = Dp x ln(E/Ec): 120 µm Dp, Ec 8, E 40 mJ/cm2 -> ~193 µm cured.",
              "Green parts at 40-60% strength need solvent wash + UV post-cure.",
              "Select for dental patterns, jewellery, microfluidics; accept brittleness and supports.",
            ],
            callout: {
              type: "tip",
              title: "Cure must overshoot the layer slightly",
              body: "Exposure is set so cure depth exceeds layer thickness by a small margin - too little and layers delaminate, too much and the previous slice over-cures, losing detail and curling. That single tuning sentence explains SLA's exposure parameter.",
            },
            table: {
              caption: "Typical SLA parameters and facts.",
              headers: ["Parameter", "Typical value", "Note"],
              rows: [
                ["Laser", "UV, 355 nm", "solid-state; spot 0.08-0.25 mm"],
                ["Layer thickness", "0.025-0.15 mm", "finest of the six processes"],
                ["Accuracy", "about ±0.1 mm", "best-in-class detail"],
                ["Resin", "acrylate / epoxy", "Dp ~ 120 µm, Ec ~ 8 mJ/cm2"],
                ["Post-processing", "IPA wash + UV cure", "green strength 40-60%"],
                ["Applications", "dental, jewellery, masters", "brittle resins, UV yellowing"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the stereo-lithography process with a neat sketch. Discuss its working, process parameters, post-processing requirements and typical applications.",
                marks: 14,
                outline: [
                  "Vat of photopolymer; UV laser cures each slice; platform lowers and recoats",
                  "Bonding mechanism: photopolymerization (monomer + photoinitiator)",
                  "Laser 355 nm, spot 0.08-0.25 mm; layers 0.025-0.15 mm",
                  "Cure depth Cd = Dp x ln(E/Ec); worked: 120 x ln(40/8) = ~193 µm",
                  "Exposure tuned so cure slightly exceeds one layer - bond without over-cure",
                  "Post-processing: IPA wash, UV post-cure (green strength 40-60%)",
                  "Applications: dental, jewellery, microfluidics; limits: brittle, UV yellowing",
                ],
              },
              {
                q: "Derive or state Jacobs' cure-depth equation and use it: a resin has Dp = 120 µm and Ec = 8 mJ/cm2. What exposure cures 100 µm?",
                marks: 7,
                outline: [
                  "Cd = Dp x ln(E/Ec)",
                  "100 = 120 x ln(E/8) -> ln(E/8) = 0.833",
                  "E = 8 x e^0.833 = about 18.5 mJ/cm2",
                  "Exposure must also exceed one layer thickness - the tuning constraint",
                  "Too little exposure delaminates layers; too much over-cures the slice below and curls the part",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Laminated Object Manufacturing (LOM)",
            body: [
              "Laminated Object Manufacturing builds parts from sheets, not from resin, filament or powder. A feeder advances a sheet - paper in the classic Helisys machines of the 1990s, also plastic or composite foil - onto the build platform; a heated roller laminates it to the stack through a pre-coated adhesive layer; a CO2 laser traces and cuts each slice's outline, hatching the waste into a cross-hatch grid of cubes; the platform lowers, and the next sheet arrives. After the build, the block is separated and the hatched waste is peeled away like woodchips, revealing the part.",
              "LOM's economics and geometry made it the big-parts process of its era. Sheet material is ordinary and cheap, so large concept models cost little; supports are unnecessary because the surrounding sheet carries overhangs; the finished part resembles laminated wood - stiff, but moisture-sensitive and anisotropic along layers. Sheet thickness 0.06-0.15 mm sets the layer resolution; accuracy around ±0.2 mm suffices for form-and-fit models and casting patterns. The part must be sealed (paint, varnish) immediately or humidity swells the paper - the classic LOM field failure.",
              "Exam framing: LOM appears as 'write short notes on LOM' or as the sheet-lamination representative in technique-comparison questions. The full answer names the four-step loop (feed, laminate, cut, lower), the bonding mechanism (adhesive), the no-support advantage with its cause (the surrounding sheet is the support), the wood-like finish with sealing requirement, and the honest verdict: superseded in mainstream use by faster processes, but exam-relevant as the cleanest example of sheet lamination.",
            ],
            keyTerms: [
              { term: "Sheet lamination", definition: "Building parts by bonding and cutting stacked sheets - LOM's process family." },
              { term: "Hatching", definition: "Laser-cutting the waste region into a cube grid so it peels off after the build." },
              { term: "Cross-hatch waste", definition: "The surrounding cut sheet that doubles as LOM's support structure." },
              { term: "Sealing", definition: "Varnishing or painting LOM parts to block moisture swelling of paper layers." },
            ],
            diagram: {
              kind: "flow",
              title: "The LOM loop - feed, bond, cut, lower",
              caption: "The surrounding sheet is the support: LOM needs none, and peels its waste after the build.",
              steps: [
                { label: "Feed sheet", note: "paper / plastic, 0.06-0.15 mm" },
                { label: "Heated roller", note: "bonds adhesive to the stack" },
                { label: "CO2 laser cuts", note: "outline + waste hatching" },
                { label: "Platform lowers", note: "next sheet advances" },
                { label: "Peel waste", note: "wood-like part emerges" },
              ],
            },
            bullets: [
              "Bonding mechanism: adhesive between sheets; laser cuts each cross-section.",
              "Sheet thickness 0.06-0.15 mm sets resolution; accuracy about ±0.2 mm.",
              "No supports needed - the surrounding sheet carries every overhang.",
              "Parts resemble laminated wood: stiff, anisotropic, moisture-sensitive.",
              "Seal immediately (paint/varnish) or humidity swells the paper layers.",
              "Superseded in mainstream use, but the clean textbook sheet-lamination example.",
            ],
            callout: {
              type: "tip",
              title: "Why LOM needs no supports - and pays anyway",
              body: "The uncut sheet around each slice supports every overhang, so LOM skips support printing - but the same hatched waste must be peeled and cleaned afterwards, and sharp internal corners suffer during breakout. Supports are never free; LOM just moves their cost to post-processing.",
            },
            table: {
              caption: "LOM facts at a glance.",
              headers: ["Aspect", "Value / behaviour"],
              rows: [
                ["Material", "paper / plastic sheets + adhesive"],
                ["Energy source", "CO2 laser cutting"],
                ["Layer = sheet thickness", "0.06-0.15 mm"],
                ["Accuracy", "about ±0.2 mm"],
                ["Supports", "none - waste sheet supports overhangs"],
                ["Finish / failure", "wood-like; swells without sealing"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the working of Laminated Object Manufacturing with a sketch. Give its bonding mechanism, parameters, advantages and limitations.",
                marks: 7,
                outline: [
                  "Loop: feed sheet -> heated roller bonds adhesive -> laser cuts outline + hatch -> lower",
                  "Bonding mechanism: adhesive (sheet lamination family)",
                  "Layer = sheet thickness 0.06-0.15 mm; accuracy ~±0.2 mm",
                  "No supports: surrounding sheet carries overhangs; waste peeled after",
                  "Advantages: cheap large models, fast for big volumes",
                  "Limitations: wood-like anisotropic parts, moisture swelling, sealing required",
                ],
              },
              {
                q: "Compare LOM with FDM on material, supports, surface quality and applications.",
                marks: 7,
                outline: [
                  "Material: LOM sheets + adhesive; FDM thermoplastic filament",
                  "Supports: LOM none (waste sheet); FDM printed supports or soluble",
                  "Surface: LOM layered wood-like; FDM visible bead lines",
                  "Accuracy: LOM ~±0.2 mm; FDM ~±0.2-0.5 mm",
                  "Applications: LOM concept models and casting patterns; FDM functional plastic parts",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Fused Deposition Modelling (FDM)",
            body: [
              "Fused Deposition Modelling - Scott Crump's 1989 patent, commercialised by Stratasys, and open-source as FFF - is the most widespread AM process on earth. A thermoplastic filament (1.75 or 2.85 mm diameter) is gripped by feed gears and pushed into a heated liquefier; melted polymer exits a nozzle, typically 0.4 mm bore, and is deposited as a bead roughly 0.25 mm wide and one layer (0.1-0.3 mm) tall. The bead welds to the previous layer and the adjacent bead by thermal fusion - partial remelting and interdiffusion - then cools. The head or bed moves in X-Y; Z steps once per layer.",
              "The parameter set is thermal and geometric. PLA prints at 190-220 degrees C nozzle with a 50-60 degrees C bed; ABS needs 220-250 degrees C, a 90-110 degrees C bed and often an enclosed chamber to stop warping; layer 0.1-0.3 mm; speeds 30-150 mm/s. Dimensional accuracy lands around ±0.2 mm. The overhang rule is the 45-degree limit - surfaces steeper than 45 degrees from horizontal need support, printed in breakaway same-material or soluble PVA (for PLA) and HIPS (for ABS). Infill percentages 15-50% trade weight against stiffness.",
              "FDM's defining weakness is the layer bond: z-direction tensile strength runs roughly 50-80% of in-plane, so printed parts fail along layers - the reason orientations matter and the source of half the exam questions. Selection logic: cheapest machine and material, office-safe, functional plastic prototypes, jigs and fixtures; avoid for fine detail (0.4 mm nozzle floor), high temperature service (PLA softens near 60 degrees C), and load paths crossing layers. Exam framing: sketch the extrusion head, tabulate temperatures per material, state the 45-degree rule and the z-weakness with numbers.",
            ],
            keyTerms: [
              { term: "Thermal fusion", definition: "FDM's bonding mechanism - molten bead partially remelts the layer below and interdiffuses." },
              { term: "Liquefier", definition: "The heated barrel that melts filament before the nozzle; 190-250 degrees C by material." },
              { term: "45-degree rule", definition: "Overhangs shallower than 45 degrees from horizontal need support structures." },
              { term: "Z-strength deficit", definition: "Interlayer bonds at ~50-80% of in-plane strength; parts fail along layers." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From spool to part - the FDM chain",
              caption: "Feed gears, liquefier, nozzle, bead - thermal fusion bonds each bead to its neighbours.",
              stages: [
                { label: "Filament spool", note: "1.75 / 2.85 mm" },
                { label: "Drive gears", note: "push filament in" },
                { label: "Liquefier", note: "PLA 190-220 C, ABS 220-250 C" },
                { label: "Nozzle 0.4 mm", note: "bead ~0.25 mm wide" },
                { label: "Deposit + cool", note: "fuse to layer below" },
              ],
            },
            bullets: [
              "Crump's patent 1989; most widespread AM process; open-source twin is FFF.",
              "Bonding mechanism: thermal fusion of semi-molten beads.",
              "PLA 190-220 C nozzle / 50-60 C bed; ABS 220-250 C / 90-110 C bed + chamber.",
              "Layers 0.1-0.3 mm, nozzle typically 0.4 mm, accuracy about ±0.2 mm.",
              "45-degree overhang rule; supports breakaway or soluble (PVA for PLA, HIPS for ABS).",
              "Z-direction strength ~50-80% of in-plane - orientation is a design decision.",
            ],
            callout: {
              type: "warning",
              title: "Orient the part for its load path, not for speed",
              body: "Because z-bonds are the weakest plane, a bracket printed flat may snap at its layer interface under a load a vertically printed twin survives. Decide the orientation from the force diagram first, from build time second.",
            },
            codeExample: {
              language: "gcode",
              caption: "First lines of an FDM job (G-code - what the slicer emits)",
              code: `M140 S60          ; bed to 60 C (PLA)
M104 S210          ; nozzle to 210 C
G28                ; home all axes
G1 Z0.3 F600       ; first layer height
G1 X60 Y60 E5 F1800 ; extrude 5 mm of filament along the path
; every later layer: G1 Z+0.2, then perimeter + infill moves`,
            },
            examQuestions: [
              {
                q: "Explain the FDM process with a sketch of the extrusion head. Tabulate typical parameters for PLA and ABS and state the process's main limitation.",
                marks: 14,
                outline: [
                  "Filament driven by gears into liquefier; molten bead extruded through 0.4 mm nozzle",
                  "Bonding mechanism: thermal fusion of bead to layer below",
                  "PLA: nozzle 190-220 C, bed 50-60 C; ABS: 220-250 C, bed 90-110 C + chamber",
                  "Layers 0.1-0.3 mm; speeds 30-150 mm/s; accuracy ~±0.2 mm",
                  "45-degree overhang rule; breakaway or soluble supports (PVA, HIPS)",
                  "Main limitation: z-direction strength 50-80% of in-plane - parts fail along layers",
                  "Applications: cheap functional prototypes, jigs; not for fine detail or heat",
                ],
              },
              {
                q: "Why do ABS prints warp without a heated chamber, and what remedies exist?",
                marks: 7,
                outline: [
                  "Large thermal gradient between 250 C extrusion and cool air",
                  "Shrinking layers pull the part off the bed; corners curl upward",
                  "ABS's high Tg (~105 C) keeps it rigid while shrinking, so stress stays locked in as residual stress",
                  "Remedies: 90-110 C bed, enclosed chamber, brim/raft, reduced cooling fan",
                  "Verify each fix with a corner-lift measurement on a test coupon - one change at a time",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Selective Laser Sintering (SLS)",
            body: [
              "Selective Laser Sintering builds in a bed of polymer powder - usually PA12 nylon. A recoater blade spreads a layer (0.08-0.15 mm); heaters hold the bed just below the powder's melt point (PA12 melts near 186 degrees C, the bed sits at 160-175 degrees C) so thermal gradients stay small; a CO2 laser (10.6 µm wavelength, 30-100 W) scans and sinters the slice - particles fuse at their contacts by neck growth without fully melting; the piston lowers, and the loop repeats. Preheating is SLS's quiet masterstroke: a warm bed means less warping and stronger interlayer bonding.",
              "The signature property is support-free building: the unsintered powder surrounding each slice carries every overhang, so parts can nest freely inside the build volume - dozens of parts share one powder cake, and geometries impossible elsewhere (internal channels, interlocked chains) print without support scars. The price is surface and material handling: as-built Ra of about 10-15 µm, powder must be sieved and blended (typically 30-70% reused powder mixed with virgin), and the whole cake must cool before breakout - build-plus-cool cycles run many hours.",
              "Selection logic: functional nylon parts - living hinges, ducts, clips, small-series production - where FDM's layer weakness and SLA's brittleness disqualify them. Exam framing: the 14-mark answer draws the two-piston bed with roller and laser, names sintering as the bonding mechanism, tabulates parameters (CO2 laser 30-100 W, bed 160-175 degrees C, layer 0.08-0.15 mm, powder 45-90 µm), and explains the no-support nesting advantage with its cost - powder recycling and breakout labour.",
            ],
            keyTerms: [
              { term: "Sintering", definition: "Fusing powder particles at contacts below full melt - neck growth driven by the preheated bed + laser." },
              { term: "Preheat bed", definition: "Held 160-175 degrees C (PA12 melts ~186 C) to cut thermal gradients and warping." },
              { term: "Powder cake", definition: "The whole sintered block; parts are dug out and unsintered powder recycled." },
              { term: "Nesting", definition: "Packing many parts freely in one build because powder, not supports, holds overhangs." },
            ],
            diagram: {
              kind: "cycle",
              title: "The SLS layer loop",
              caption: "Spread, preheat, sinter, lower - the powder around the part is its own support.",
              steps: [
                { label: "Blade spreads powder", note: "layer 0.08-0.15 mm" },
                { label: "Bed preheated", note: "160-175 C, just below melt" },
                { label: "CO2 laser sinters", note: "30-100 W, neck growth" },
                { label: "Piston lowers", note: "repeat; cool, then breakout" },
              ],
            },
            bullets: [
              "Material: PA12/PA11 polymer powder, particles 45-90 µm.",
              "Bonding mechanism: sintering - fusion at particle contacts below full melt.",
              "CO2 laser 10.6 µm, 30-100 W; bed preheat 160-175 C against warping.",
              "No supports: unsintered powder carries overhangs - free nesting of many parts.",
              "As-built Ra about 10-15 µm; cake must cool fully before breakout.",
              "Powder recycled: 30-70% reused blended with virgin to keep properties stable.",
            ],
            callout: {
              type: "exam",
              title: "Preheat is why SLS warps less",
              body: "Every comparison question asks why SLS parts curl less than FDM's. Answer: the bed sits just below melt point, so the temperature gap between deposited material and surroundings is small - gradients and residual stress shrink together. Cite the numbers: bed 160-175 C against PA12 melt 186 C.",
            },
            table: {
              caption: "Typical SLS parameters and facts.",
              headers: ["Parameter", "Typical value", "Note"],
              rows: [
                ["Laser", "CO2, 10.6 µm, 30-100 W", "polymer absorption matches 10.6 µm"],
                ["Powder", "PA12 / PA11, 45-90 µm", "melt ~186 C (PA12)"],
                ["Bed preheat", "160-175 C", "just below melt - low warpage"],
                ["Layer thickness", "0.08-0.15 mm", "accuracy ~±0.2-0.3 mm"],
                ["Supports", "none", "powder supports; free nesting"],
                ["Surface / reuse", "Ra 10-15 µm; 30-70% powder reuse", "sieve + blend each cycle"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the SLS process with a sketch of the powder bed. Discuss its parameters, the role of preheating, and why it needs no support structures.",
                marks: 14,
                outline: [
                  "Two pistons + recoater: powder layer spread, laser sinters slice, piston lowers",
                  "Bonding mechanism: sintering - neck growth below full melt",
                  "CO2 laser 10.6 µm, 30-100 W; PA12 powder 45-90 µm",
                  "Bed preheat 160-175 C vs melt 186 C - small gradients, low warpage",
                  "Layer 0.08-0.15 mm; unsintered powder supports every overhang",
                  "Nesting: many parts per cake; cake must cool before breakout",
                  "Costs: Ra 10-15 µm, powder sieving and blending 30-70% reuse",
                ],
              },
              {
                q: "Compare SLS and FDM for a nylon living hinge and a visual prototype, and justify the process choice for each.",
                marks: 7,
                outline: [
                  "Living hinge -> SLS: isotropic-ish nylon, no layer-weld weak plane, flexible PA12",
                  "FDM hinge fails along z-bonds; anisotropy kills flex fatigue",
                  "Visual prototype -> FDM: cheapest, office-safe, fast iteration",
                  "SLS costs (powder, breakout) unjustified for a look-and-feel model",
                  "Nesting several hinges per powder cake spreads the SLS overhead across parts",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Selective Laser Melting (SLM) and metal powder bed fusion",
            body: [
              "Selective Laser Melting runs the same powder-bed architecture as SLS but with metal powder and a decisive difference: the laser fully melts each track, producing densities above 99.5% rather than sintered porosity. A fibre laser (about 1070 nm, 200-400 W single-beam, up to a kilowatt across multiple beams) scans tracks with hatch spacing 0.08-0.14 mm through layers of 20-60 µm inside an inert argon atmosphere with oxygen kept near or below 0.1%. The closely named DMLS (Direct Metal Laser Sintering) is, on modern machines, also full melting - the legacy name survives from EOS's early sintering-era machines.",
              "The governing number is volumetric energy density: E = P / (v x h x t), laser power over scan speed, hatch spacing and layer thickness. Worked example: 200 W at 800 mm/s, hatch 0.1 mm, layer 0.03 mm gives 200 / (800 x 0.1 x 0.03) = about 83 J/mm3 - inside the window (roughly 40-120 J/mm3 for Ti-6Al-4V) that produces dense metal. Below the window, tracks fuse incompletely and leave irregular lack-of-fusion voids; above it, the melt pool drills a keyhole and traps spherical pores. Process development is largely the search for this window per alloy.",
              "Melting metal brings metal's problems: steep thermal gradients leave residual stress, so supports anchor the part to the plate and conduct heat away, and every build needs stress relief before cut-off. Selection logic: SLM owns structural metal parts - aerospace brackets, implants, tooling - where its cost (machines and powder) buys densities above 99.5% and properties near wrought. Exam framing: the guaranteed contrast is SLS versus SLM - sintering versus melting, polymer versus metal, supports-free versus supports-mandatory - plus one energy-density calculation.",
            ],
            keyTerms: [
              { term: "SLM", definition: "Powder bed fusion that fully melts metal powder; densities above 99.5%." },
              { term: "Volumetric energy density", definition: "E = P/(v x h x t) in J/mm3 - the process window variable for melting." },
              { term: "Lack of fusion", definition: "Irregular voids when energy is too low to remelt the previous track." },
              { term: "Keyhole porosity", definition: "Spherical pores trapped when excess energy drills the melt pool." },
            ],
            diagram: {
              kind: "compare",
              title: "Sintering (SLS) versus melting (SLM)",
              caption: "Same bed, different bond - and the support and atmosphere rules change with it.",
              left: {
                heading: "SLS - sintering",
                items: [
                  "Polymer powder (PA12), CO2 laser",
                  "Particles fuse at contacts - some porosity remains",
                  "No supports: powder carries overhangs",
                  "Bed preheat does the thermal work",
                ],
              },
              right: {
                heading: "SLM - melting",
                items: [
                  "Metal powder (Ti, 316L), 1070 nm fibre laser",
                  "Full melt -> densities above 99.5%",
                  "Supports mandatory: anchor + heat conduction",
                  "Argon atmosphere, O2 near/below 0.1%; stress relief after",
                ],
              },
            },
            bullets: [
              "Same powder-bed loop as SLS, but full melting of metal powder.",
              "Fibre laser ~1070 nm, 200-400 W (multi-laser to ~1 kW); layers 20-60 µm.",
              "Energy density E = P/(v x h x t); 200/(800 x 0.1 x 0.03) = ~83 J/mm3.",
              "Window roughly 40-120 J/mm3 for Ti-6Al-4V: below -> lack of fusion, above -> keyhole.",
              "Argon atmosphere with O2 near/below 0.1%; supports anchor and conduct heat.",
              "Stress relief before plate cut-off is mandatory - melting leaves residual stress.",
            ],
            callout: {
              type: "warning",
              title: "Two porosities, opposite causes, one symptom",
              body: "Both lack-of-fusion and keyhole porosity lower density, but the fixes oppose: lack-of-fusion voids (irregular, between tracks) need MORE energy; keyhole pores (spherical, inside tracks) need LESS. Diagnose the pore shape before touching the power knob.",
            },
            codeExample: {
              language: "python",
              caption: "energy_density.py - the SLM process-window calculation",
              code: `P, v, hatch, layer = 200, 800, 0.1, 0.03   # W, mm/s, mm, mm
E = P / (v * hatch * layer)                # J/mm3
print(round(E, 1), "J/mm^3")               # 83.3 J/mm^3

# dense window (typical Ti-6Al-4V): ~40-120 J/mm^3 -> OK
# raise speed to 1600 mm/s: E = 41.6 -> near lack-of-fusion edge
# drop speed to 400 mm/s:   E = 166.7 -> keyhole regime`,
            },
            examQuestions: [
              {
                q: "Explain selective laser melting and differentiate it from SLS. Compute the volumetric energy density for 200 W at 800 mm/s, hatch 0.1 mm, layer 0.03 mm, and state what happens outside the process window.",
                marks: 14,
                outline: [
                  "SLM: full melting of metal powder in argon; fibre laser 200-400 W",
                  "SLS contrast: sintering of polymer, no supports; SLM needs supports",
                  "E = P/(v x h x t) = 200/(800 x 0.1 x 0.03) = 83.3 J/mm3",
                  "Dense window ~40-120 J/mm3 (Ti-6Al-4V typical)",
                  "Below window: irregular lack-of-fusion voids between tracks",
                  "Above window: spherical keyhole pores trapped in the melt pool",
                  "Post-build: stress relief before cut-off; densities above 99.5% achievable",
                ],
              },
              {
                q: "Why does SLM need support structures while SLS does not?",
                marks: 7,
                outline: [
                  "Molten metal needs anchoring against residual-stress distortion",
                  "Supports conduct heat into the plate, controlling the melt pool",
                  "SLS's powder bed carries overhangs and preheat manages gradients",
                  "Melting cannot rely on unsintered powder - it would fuse to the part",
                  "Hence support density and placement are chosen for heat conduction, not just geometry",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Binder Jetting",
            body: [
              "Binder jetting replaces the laser with an inkjet head: a carriage sweeps the powder bed jetting droplets of liquid binder exactly where the slice is solid. Spread powder, jet binder, dry or cure, lower, repeat. The emerging part is 'green' - powder particles held by glue, not by melting - so the process is fast (jets cover wide swaths, no point-by-point laser), runs at room temperature, and in its gypsum-sandstone form prints full colour from coloured binder, making it the classic architectural-model and anatomical-model process. MIT's 1990s '3D printing' is its ancestor.",
              "The green part dictates the post-processing that defines the process. Metal binder jetting prints powder plus polymer binder, then cures the green part, debinds it in a furnace (roughly 400-600 degrees C) and sinters it (about 1100-1360 degrees C) - shrinking it 15-20% linearly, compensated by scaling the job in software - or infiltrates the porous sintered part with a lower-melting metal such as bronze (around 1050-1100 degrees C). Sand binder jetting skips all that: furan-resin sand moulds and cores for casting come out ready to pour, which is why foundries adopted it first.",
              "Selection logic and exam framing: binder jetting wins where speed, size, colour or mould-making matter and fine mechanical properties do not - colour models, sand moulds, and (increasingly) volume metal parts whose accuracy tolerates sinter shrinkage. The 7-mark answer names the mechanism (adhesion), the green-part concept, the two post-routes (sinter with 15-20% shrink vs infiltrate), and the contrast with SLM: no melt, no supports, no residual stress - but also lower density and accuracy unless the furnace step is mastered.",
            ],
            keyTerms: [
              { term: "Binder jetting", definition: "Jetting liquid binder onto powder to build green parts, then curing/sintering/infiltrating." },
              { term: "Green part", definition: "As-printed part held by binder glue - fragile, oversize, awaiting the furnace." },
              { term: "Infiltration", definition: "Wicking a lower-melting metal (bronze) into the porous sintered part to densify it." },
              { term: "Sinter shrinkage", definition: "15-20% linear contraction during sintering; pre-scaled into the print job." },
            ],
            diagram: {
              kind: "flow",
              title: "Binder jetting - print green, then fire",
              caption: "No laser and no melt: the furnace, not the printer, makes the final material.",
              steps: [
                { label: "Spread powder", note: "room-temperature bed" },
                { label: "Jet binder", note: "inkjet droplets mark the slice" },
                { label: "Dry / cure", note: "green layer gains handling strength" },
                { label: "Lower + repeat", note: "fast - jets cover wide swaths" },
                { label: "Depowder -> green part", note: "fragile, oversize" },
                { label: "Sinter or infiltrate", note: "15-20% shrink, or bronze fill" },
              ],
            },
            bullets: [
              "Bonding mechanism: adhesion - liquid binder glues powder particles.",
              "Fast and cool: inkjet swaths instead of point-by-point laser scanning.",
              "Green part must be cured, then sintered (15-20% shrink) or infiltrated (bronze ~1050-1100 C).",
              "Gypsum variant prints full colour - architectural and anatomical models.",
              "Sand variant makes casting moulds and cores ready to pour - foundry favourite.",
              "No melt -> no supports, no residual stress; accuracy and density depend on the furnace route.",
            ],
            callout: {
              type: "tip",
              title: "Scale the job for the furnace",
              body: "Sinter shrinkage of 15-20% is compensated by printing the green part 20-25% larger - a uniform scale factor in software. Parts with thin-thick sections shrink non-uniformly, which is where binder-jetted accuracy actually goes wrong.",
            },
            table: {
              caption: "Binder jetting variants and their furnace routes.",
              headers: ["Variant", "Material", "Post-route", "Output"],
              rows: [
                ["Colour models", "gypsum powder", "cure + infiltrate (cyanoacrylate)", "full-colour display parts"],
                ["Sand casting", "silica sand + furan", "cure only", "moulds and cores, ready to pour"],
                ["Metal BJ", "316L / tool steel + binder", "cure, debind ~400-600 C, sinter ~1100-1360 C", "dense part after 15-20% shrink"],
                ["Metal BJ + infil", "steel green part", "sinter + bronze ~1050-1100 C", "dense, machinable composite"],
                ["Ceramic BJ", "alumina / zirconia", "debinder + sinter ~1500 C", "technical ceramics"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the binder jetting process. Describe the green part, the two post-processing routes (sintering and infiltration), and the role of shrinkage compensation.",
                marks: 14,
                outline: [
                  "Inkjet head jets binder onto spread powder; slice-by-slice at room temperature",
                  "Bonding mechanism: adhesion - green part held by cured binder",
                  "Green part: fragile, oversize, needs the furnace",
                  "Route 1: debind ~400-600 C then sinter ~1100-1360 C with 15-20% linear shrink",
                  "Route 2: sinter to porous + infiltrate bronze ~1050-1100 C",
                  "Shrinkage compensated by scaling the print job in software",
                  "Contrast with SLM: no melt, no supports, no residual stress; lower accuracy",
                ],
              },
              {
                q: "Why did foundries adopt sand binder jetting first?",
                marks: 7,
                outline: [
                  "Furan-bonded sand moulds come out ready to pour - only curing needed",
                  "Complex cores impossible to pattern become printable files",
                  "No furnace densification step - the mould's sintering IS the failure point avoided",
                  "Economics: pattern-making tooling eliminated for short-run castings",
                  "Design changes cost a file edit, not a new pattern board",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Process parameters and process selection",
            body: [
              "Across all six techniques the parameters share a structure: a resolution set (layer thickness, spot/nozzle size, powder particle size), an energy set (laser power and scan speed, or exposure, or extrusion temperature), and a timing set (scan/recoat speed, delays). They trade along two axes - accuracy against build time, and part strength against surface finish. Halving layer thickness doubles the layer count: a 100 mm part goes from 500 to 1000 layers, and at 6 seconds of recoat per layer that alone adds 50 minutes of build - while the stair-step cusp falls from about 0.17 to 0.09 mm on a 30-degree slope.",
              "Energy parameters obey the same discipline on every machine: energy per unit length or volume must land in the material's window. FDM needs enough nozzle temperature for bead welding; SLS needs laser + preheat for neck growth; SLM needs E = P/(v x h x t) inside its 40-120 J/mm3 window; SLA needs exposure E above Ec with cure depth slightly exceeding the layer. Wrong side of any window means delamination or porosity - the same two failure modes in six machines, which is why examiners accept one window-style argument applied across techniques.",
              "Process selection is the exam's applied version: choose a process for a stated part. The decision order is material (metal -> SLM or metal BJ; nylon -> SLS; photopolymer detail -> SLA; cheap plastic -> FDM), then geometry (internal channels, nesting -> SLS/BJ; fine detail -> SLA), then supports (no supports allowed -> SLS/BJ/LOM), then budget. The comparison table below is the one-page answer; the quadrant diagram is the reasoning shortcut. Practise three selection cases: dental crown pattern, nylon duct, titanium implant.",
            ],
            keyTerms: [
              { term: "Resolution set", definition: "Layer thickness + beam/nozzle/particle size - bounds the smallest feature." },
              { term: "Energy window", definition: "The power-speed-exposure range that bonds layers without defects." },
              { term: "Recoat time", definition: "Seconds per layer spent spreading material; dominates build time on flat parts." },
              { term: "Process selection", definition: "Matching material, geometry, supports and budget to one of the six techniques." },
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing a technique - accuracy versus material performance",
              caption: "Plot the part; the quadrant names the process family to shortlist.",
              axes: { x: "Part accuracy (coarse -> fine)", y: "Material performance (basic -> engineered)" },
              quadrants: [
                { label: "SLM / SLS", note: "fine + engineered - structural metal and nylon parts" },
                { label: "SLA / DLP", note: "fine + basic material - masters, patterns, dental" },
                { label: "FDM / LOM", note: "coarse + basic - cheap prototypes and models" },
                { label: "Binder jetting", note: "coarse-mid + engineered after firing - sand moulds, volume metal" },
              ],
            },
            bullets: [
              "Universal parameter sets: resolution (layer, spot), energy (power, speed, exposure), timing (recoat).",
              "Halving layer doubles layers: 100 mm part 500 -> 1000; +50 min recoat alone at 6 s/layer.",
              "Cusp on a 30-degree slope: 0.17 mm at 0.2 mm layers -> 0.09 mm at 0.1 mm.",
              "Every process has an energy window: outside it = delamination or porosity.",
              "Selection order: material -> geometry -> supports -> budget.",
              "Table below is the one-page comparison the exam wants.",
            ],
            callout: {
              type: "exam",
              title: "Selection questions are decision-tree questions",
              body: "Never answer 'use SLS' bare. Walk the tree in order - material, geometry, supports, budget - and eliminate. 'Metal implant with porous lattice: SLM (metal + engineered properties); nesting irrelevant; supports on lattice acceptable after design for removal.' The elimination trail is the marks.",
            },
            table: {
              caption: "The six techniques on one page.",
              headers: ["Technique", "Material", "Layer / accuracy", "Supports", "Best for"],
              rows: [
                ["SLA", "photopolymer resin", "0.025-0.15 mm / ±0.1 mm", "yes", "finest detail, masters, dental"],
                ["LOM", "paper sheets + adhesive", "0.06-0.15 mm / ±0.2 mm", "none", "large cheap concept models"],
                ["FDM", "PLA, ABS filament", "0.1-0.3 mm / ±0.2 mm", "yes (or soluble)", "cheap functional plastic parts"],
                ["SLS", "PA12 powder", "0.08-0.15 mm / ±0.2-0.3 mm", "none", "functional nylon, nesting"],
                ["SLM", "metal powder", "0.02-0.06 mm / ±0.05-0.1 mm", "yes", "structural metal parts"],
                ["Binder jetting", "gypsum, sand, metal", "0.07-0.1 mm / ±0.1-0.3 mm", "none", "colour models, moulds, volume metal"],
              ],
            },
            examQuestions: [
              {
                q: "Compare the six additive manufacturing techniques on material, layer thickness, supports and applications, and state the parameter trade-offs common to all of them.",
                marks: 14,
                outline: [
                  "SLA: resin, 0.025-0.15 mm, supports, finest detail",
                  "LOM: sheets + adhesive, no supports, big cheap models",
                  "FDM: filament, supports, cheap functional plastic",
                  "SLS: PA12 powder, no supports, functional nylon + nesting",
                  "SLM: metal powder, supports mandatory, structural parts",
                  "Binder jetting: powder + binder, no supports, colour/sand/volume metal",
                  "Common trade: layer thickness vs time (halve layer = double layers +50 min recoat); energy window vs defects",
                ],
              },
              {
                q: "Select a suitable AM process for (a) a dental crown pattern, (b) a nylon air duct, (c) a titanium spinal implant, justifying each choice.",
                marks: 7,
                outline: [
                  "(a) SLA: finest resolution ±0.1 mm for crown patterns; resin burns out clean",
                  "(b) SLS: PA12 ductility + air-tight sintered walls + no supports inside ducts",
                  "(c) SLM: Ti-6Al-4V, densities above 99.5%, lattice for bone stiffness match",
                  "Each answer names material -> geometry -> supports -> budget in order",
                  "State the eliminated alternative too: FDM too coarse, FDM anisotropic for hinges, machining cannot print a lattice",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Application domains of additive manufacturing",
            body: [
              "The syllabus lists eight domains - aerospace, electronics, health care, defence, automotive, construction, food processing, machine tools - and each maps to a technique choice plus a value driver. Aerospace and defence buy low volume + complexity: SLM titanium brackets and consolidated fuel nozzles, DED repairs of expensive components, rocket injectors with printed internal channels. Health care buys personalisation: SLA dental patterns and hearing-aid shells, SLM titanium implants with bone-matching lattices, binder-jetted anatomical models for surgery planning.",
              "The industrial-consumer domains buy tooling and variety. Automotive: FDM and SLS jigs, fixtures and wind-tunnel models in days, conformal-cooled mould inserts for production tooling. Machine tools: SLM tool inserts with internal coolant channels; printed cutting-tool holders. Electronics: lattice heat sinks and printed antennas where geometry beats machining. Construction: large-format extruded concrete and binder-jetted formwork. Food processing: custom moulds and directly printed pasta, chocolate and pastries - geometry variety a mould line cannot afford.",
              "Exam framing: 'explain AM applications in (domain pair)' is a 7-mark staple; 'list the application domains of AM' wants all eight with one example each. The scoring pattern: name domain, name technique, name driver. 'Health care - SLA dental patterns - personalisation: volumes of one per patient.' 'Automotive - FDM jigs - speed: tooling in days not weeks.' The pyramid shows the value stack: mission-critical low-volume at the top, form-and-function variety at the base.",
            ],
            keyTerms: [
              { term: "Buy-to-fly ratio", definition: "Billet mass to finished part mass in aerospace; AM cuts it by building near-net." },
              { term: "Personalisation", definition: "Every part different - dental, implants, hearing aids; AM's natural market." },
              { term: "Tooling lead time", definition: "Weeks for conventional jigs/moulds; days when printed - automotive's AM case." },
              { term: "Food AM", definition: "Extrusion/jetting of edible pastes - variety-driven, not performance-driven." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Application domains by value driver",
              caption: "Top buys performance per part, base buys variety - techniques differ per tier.",
              tiers: [
                { label: "Aerospace + defence", note: "SLM/DED - consolidation, buy-to-fly, internal channels" },
                { label: "Health care + electronics", note: "SLA/SLM/BJ - personalisation, lattice geometry" },
                { label: "Automotive + machine tools", note: "FDM/SLS/SLM - jigs, conformal-cooled tooling" },
                { label: "Construction + food processing", note: "large extrusion/BJ - variety and formwork" },
              ],
            },
            bullets: [
              "Aerospace/defence: SLM Ti brackets, consolidated nozzles, DED repair, rocket injectors.",
              "Health care: SLA dental, SLM implants with lattices, BJ anatomical models.",
              "Automotive/machine tools: FDM-SLS jigs, conformal-cooled mould and tool inserts.",
              "Electronics: lattice heat sinks, printed antennas, circuit carriers.",
              "Construction: extruded concrete panels, printed formwork.",
              "Food: custom pasta/chocolate moulds and direct edible printing.",
            ],
            callout: {
              type: "exam",
              title: "Domain + technique + driver = full marks",
              body: "For every domain, bind one technique and one driver: 'aerospace - SLM - consolidation and buy-to-fly'; 'health care - SLA/SLM - personalisation'; 'automotive - FDM/SLS - tooling lead time'. The triplet format survives any rephrasing of the question.",
            },
            table: {
              caption: "Eight domains, one line each.",
              headers: ["Domain", "Technique", "Driver"],
              rows: [
                ["Aerospace", "SLM / DED", "consolidation, buy-to-fly"],
                ["Defence", "SLM / metal BJ", "spares on demand, channels"],
                ["Health care", "SLA / SLM / BJ", "personalisation"],
                ["Automotive", "FDM / SLS / SLM", "tooling in days, conformal cooling"],
                ["Machine tools", "SLM", "cooled inserts, complex holders"],
                ["Electronics", "extrusion / jetting", "lattice heat sinks, antennas"],
                ["Construction", "large extrusion / BJ", "formwork variety"],
                ["Food processing", "paste extrusion", "shape variety without moulds"],
              ],
            },
            examQuestions: [
              {
                q: "List the application domains of additive manufacturing and explain, for any four, the technique used and the value driver.",
                marks: 14,
                outline: [
                  "Aerospace - SLM/DED - consolidation, internal channels, buy-to-fly",
                  "Health care - SLA/SLM - patient-specific implants and patterns",
                  "Automotive - FDM/SLS - jigs and fixtures in days",
                  "Machine tools - SLM - conformal-cooled inserts",
                  "Electronics - lattice heat sinks and antennas",
                  "Construction / food - formwork and edible variety",
                  "Every entry: domain + technique + driver in one line",
                ],
              },
              {
                q: "Explain why conformal-cooled injection-mould inserts are an AM application rather than a machining one.",
                marks: 7,
                outline: [
                  "Cooling channels must follow the cavity surface - curved, internal",
                  "Drilling gives straight channels only; milling cannot enter a closed insert",
                  "SLM prints the channel geometry inside the steel directly",
                  "Payoff: tens-of-percent cycle-time reduction on the moulding line",
                  "Bonus: uniform cooling cuts distortion and scrap on the moulded parts themselves",
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
      title: "Materials",
      summary:
        "Unit III is the feedstock: polymers, metals, non-metals and ceramics; the four raw-material forms - liquid, solid, wire and powder; powder preparation and the properties that make powder printable; polymer properties in depth; and support materials - the sacrificial half of every build.",
      chapter: {
        number: "03",
        title: "What the Feedstock Is Made Of",
        intro:
          "Unit III covers the material families (polymers, metals, non-metals, ceramics), the forms of raw material (liquid, solid, wire, powder), powder preparation and desired properties, polymers and their properties, and support materials.",
        inOneBreath:
          "Feedstock arrives in four forms - liquid resin, solid filament or sheet, wire, and powder - and four families - polymers, metals, ceramics, and non-metals such as sand and wax. Thermoplastics re-melt, photopolymers cure permanently, and powder quality decides part quality: sphericity near 1, the right 15-45 µm cut, free flow, dry storage. Metals bring Ti-6Al-4V and 316L to powder bed fusion; ceramics bring 15-25% sintering shrinkage that must be scaled into the green part. Supports are material too - breakaway or soluble - and designing parts to need fewer of them is half the skill.",
        sections: [
          {
            number: "3.1",
            title: "Material families in AM",
            body: [
              "Four families feed the AM industry. Polymers dominate by machine count and volume: thermoplastics (PLA, ABS, PA12) for extrusion and sintering, photopolymers (acrylates, epoxies) for SLA and jetting. Metals are the fastest-growing family: Ti-6Al-4V, 316L stainless, AlSi10Mg, Inconel 718 - all as fine powder for SLM, some as wire for DED. Ceramics - alumina, zirconia, silicon carbide - print as powder or photopolymer slurries and sinter in furnaces. Non-metals round out the list: sand for moulds, gypsum for colour models, wax for casting patterns, wood and composite-filled filaments.",
              "The family-to-process mapping is fixed, and it is the exam table. Liquid photopolymers belong to SLA/DLP and material jetting; solid filament to FDM; sheets to LOM; polymer powder to SLS and binder jetting; metal powder to SLM and metal binder jetting; metal wire to DED/WAAM; ceramic powder or slurry to ceramic binder jetting and slurry-based vat processes. Choosing a material therefore often means choosing a machine, and vice versa - a coupling conventional manufacturing does not have.",
              "Exam framing: 'classify materials used in AM' or 'explain the materials for 3D printing' wants the four families with two examples and one process link each, then the form axis (liquid/solid/wire/powder) as the cross-cut. The scoring detail: state one property requirement per family - photopolymers must cure cleanly at low exposure; metals must atomize to spherical powder; ceramics must survive debinding without cracking; sand must flow and pack.",
            ],
            keyTerms: [
              { term: "Thermoplastic", definition: "Re-meltable polymer (PLA, ABS, PA12) - the filament and sintering feedstock." },
              { term: "Photopolymer", definition: "UV-curing resin (acrylate/epoxy) - permanent once crosslinked." },
              { term: "Material-process coupling", definition: "In AM, material choice fixes the machine family - unlike conventional processes." },
              { term: "Feedstock", definition: "The raw material in its process-ready form: resin, filament, sheet, wire or powder." },
            ],
            diagram: {
              kind: "layers",
              title: "The four material families",
              caption: "Ordered by industrial spread - polymers top, ceramics niche but growing.",
              layers: [
                { label: "Polymers", note: "PLA, ABS, PA12 + photopolymers - FDM, SLS, SLA" },
                { label: "Metals", note: "Ti-6Al-4V, 316L, AlSi10Mg, IN718 - SLM, DED" },
                { label: "Ceramics", note: "alumina, zirconia, SiC - BJ + sinter, slurry SLA" },
                { label: "Non-metals", note: "sand, gypsum, wax, wood-filled - BJ, casting" },
              ],
            },
            bullets: [
              "Polymers: thermoplastics (PLA, ABS, PA12) + photopolymers - largest family by volume.",
              "Metals: Ti-6Al-4V, 316L, AlSi10Mg, Inconel 718 as 15-45 µm powder for SLM.",
              "Ceramics: alumina, zirconia, SiC - print green, sinter in furnace with 15-25% shrink.",
              "Non-metals: sand (moulds), gypsum (colour), wax (patterns), filled filaments.",
              "Form axis cross-cuts: liquid, solid (filament/sheet), wire, powder.",
              "Material choice fixes process family: PA12 means SLS; photopolymer means SLA.",
            ],
            callout: {
              type: "tip",
              title: "Two axes, one table",
              body: "Every material question is two-dimensional: family (polymer/metal/ceramic/non-metal) crossed with form (liquid/solid/wire/powder). Draw the 4x4 grid once in revision; any 'classify AM materials' answer is a walk through it.",
            },
            table: {
              caption: "Family - examples - processes - key requirement.",
              headers: ["Family", "Examples", "Processes", "Key requirement"],
              rows: [
                ["Polymers (thermo)", "PLA, ABS, PA12, TPU", "FDM, SLS", "clean melt, low warp"],
                ["Polymers (photo)", "acrylate, epoxy resin", "SLA, PolyJet", "cure at low exposure"],
                ["Metals", "Ti-6Al-4V, 316L, IN718", "SLM, DED, metal BJ", "spherical powder, low O2"],
                ["Ceramics", "alumina, zirconia, SiC", "ceramic BJ, slurry SLA", "survive debind + sinter"],
                ["Non-metals", "sand, gypsum, wax", "binder jetting, casting", "flowability, pack density"],
              ],
            },
            examQuestions: [
              {
                q: "Classify the materials used in additive manufacturing by family and by raw-material form, with two examples and one process link for each family.",
                marks: 7,
                outline: [
                  "Polymers: PLA/ABS/PA12 + photopolymers - FDM, SLS, SLA",
                  "Metals: Ti-6Al-4V, 316L, IN718 - SLM, DED, metal binder jetting",
                  "Ceramics: alumina, zirconia - ceramic BJ, slurry vat processes",
                  "Non-metals: sand, gypsum, wax - binder jetting, casting patterns",
                  "Form axis: liquid (resin), solid (filament/sheet), wire, powder",
                  "Material-process coupling: choosing PA12 means choosing SLS",
                ],
              },
              {
                q: "Why does material choice in AM fix the machine family, unlike in machining?",
                marks: 7,
                outline: [
                  "Each process consumes one feedstock form (resin, filament, powder, wire)",
                  "A milling machine cuts almost any solid; an SLS machine sinters only powder",
                  "Hence material property requirements are defined per process window",
                  "Practical effect: material selection = process selection in AM",
                  "Example: the same Ti alloy machines freely but must be atomized to 15-45 µm spheres for SLM",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Polymers and their properties",
            body: [
              "Polymers split by behaviour on reheating. Thermoplastics soften and re-melt - PLA, ABS, PA12 (nylon), PETG, flexible TPU - so they feed FDM filaments and SLS powders and can be recycled between builds. Thermosets crosslink permanently: photopolymer resins (acrylate and epoxy chemistry) cure under UV and never re-melt, which is why SLA parts cannot be reprocessed and why green parts must be post-cured to completion. The glass transition temperature (Tg) marks the softening point; the melt point (Tm) marks flow for semi-crystalline types like PA12.",
              "The property numbers that decide applications: PLA has Tg near 60 degrees C, tensile strength about 50-60 MPa, prints at 190-220 degrees C, stiff but brittle and heat-sensitive - fine for prototypes, wrong for a car dashboard. ABS has Tg near 105 degrees C, tensile about 30-40 MPa, tougher and heat-tolerant but warps without a heated chamber. PA12 (SLS) melts near 186 degrees C with tensile 45-50 MPa and good fatigue behaviour - the functional-nylon workhorse. TPU stretches past 300% elongation for flexible parts. Photopolymers span 30-70 MPa, often brittle, with UV yellowing over time.",
              "Exam framing: 'compare PLA and ABS' is the classic 7-marker: give Tg, strength, print temperature, warp behaviour, and the application verdict for each. 'Explain polymers for AM' wants the thermoplastic/thermoset split, the Tg/Tm definitions, and one number per polymer. Remember the closing link to Unit IV: polymer choice fixes the process parameters - every nozzle and bed temperature in the equipment chapter is a polymer property read off this table.",
            ],
            keyTerms: [
              { term: "Glass transition (Tg)", definition: "Temperature where a polymer softens from glassy to rubbery - PLA ~60 C, ABS ~105 C." },
              { term: "Melt point (Tm)", definition: "Flow temperature of semi-crystalline polymers - PA12 ~186 C." },
              { term: "Thermoplastic", definition: "Re-meltable polymer; filament and SLS powder feedstock." },
              { term: "Thermoset", definition: "Crosslinking polymer that cures permanently - photopolymer resins." },
            ],
            diagram: {
              kind: "compare",
              title: "Thermoplastic versus thermoset feedstock",
              caption: "One re-melts and feeds filament or powder beds; the other cures once and feeds vats.",
              left: {
                heading: "Thermoplastics (FDM, SLS)",
                items: [
                  "PLA, ABS, PA12, PETG, TPU",
                  "Soften at Tg, flow at Tm - reworkable",
                  "Weld by thermal fusion between layers",
                  "Recyclable between builds (SLS powder blending)",
                ],
              },
              right: {
                heading: "Thermosets (SLA, PolyJet)",
                items: [
                  "Acrylate / epoxy photopolymers",
                  "UV crosslink - permanent, never re-melt",
                  "Green parts undercured: 40-60% strength",
                  "Post-cure completes the network; brittle, UV-yellowing",
                ],
              },
            },
            bullets: [
              "Thermoplastics re-melt (FDM/SLS feed); thermosets cure forever (SLA feed).",
              "PLA: Tg ~60 C, tensile 50-60 MPa, nozzle 190-220 C - stiff, brittle, heat-sensitive.",
              "ABS: Tg ~105 C, tensile 30-40 MPa, tougher, warps without chamber heat.",
              "PA12: Tm ~186 C, tensile 45-50 MPa, good fatigue - the SLS workhorse.",
              "TPU: elongation beyond 300% for flexible parts; photopolymers 30-70 MPa.",
              "Polymer property = machine parameter: nozzle/bed temperatures come from this table.",
            ],
            callout: {
              type: "warning",
              title: "Tg, not Tm, sets the service limit",
              body: "PLA melts near 150-180 C but softens at Tg ~60 C - a PLA part in a parked car fails long before anything melts. Service temperature is judged at Tg for amorphous polymers; quoting Tm as the heat limit is the classic polymer slip.",
            },
            table: {
              caption: "AM polymer property card.",
              headers: ["Polymer", "Tg / Tm (C)", "Tensile (MPa)", "Process", "Character"],
              rows: [
                ["PLA", "60 / 150-180", "50-60", "FDM", "stiff, brittle, low heat"],
                ["ABS", "105 / none", "30-40", "FDM", "tough, warps, chamber needed"],
                ["PA12", "none / ~186", "45-50", "SLS", "fatigue-resistant, functional"],
                ["TPU", "flexible", "20-40", "FDM", "elongation >300%"],
                ["Photopolymer", "cured network", "30-70", "SLA/PolyJet", "detailed, brittle, UV-yellowing"],
              ],
            },
            examQuestions: [
              {
                q: "Explain polymers for additive manufacturing: the thermoplastic/thermoset split, Tg and Tm, and property-based comparison of PLA, ABS and PA12 with applications.",
                marks: 14,
                outline: [
                  "Thermoplastics re-melt -> FDM filament, SLS powder; thermosets crosslink -> SLA resin",
                  "Tg = softening point; Tm = flow point of semi-crystalline polymers",
                  "PLA: Tg ~60 C, tensile 50-60 MPa, nozzle 190-220 C - prototypes",
                  "ABS: Tg ~105 C, tensile 30-40 MPa, tough, warps - functional, needs chamber",
                  "PA12: Tm ~186 C, tensile 45-50 MPa - SLS living hinges, ducts",
                  "Service limit judged at Tg, not Tm (PLA dashboard example)",
                  "Polymer properties dictate the machine parameters of Unit IV",
                ],
              },
              {
                q: "Compare PLA and ABS for a functional enclosure, with numbers.",
                marks: 7,
                outline: [
                  "Strength: PLA 50-60 MPa vs ABS 30-40 MPa",
                  "Heat: PLA Tg ~60 C fails near sun-heated surfaces; ABS Tg ~105 C survives",
                  "Processing: PLA easy (190-220 C, no chamber); ABS needs 90-110 C bed + chamber",
                  "Verdict: PLA for stiff cool-duty prototypes; ABS for tougher, warmer duty",
                  "Both share the z-bond weakness - orient load paths along layers regardless of choice",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Metals for AM",
            body: [
              "Metal AM runs on a short list of well-atomized alloys. Ti-6Al-4V - the aerospace and implant workhorse - prints to tensile strength 950-1100 MPa with 6-10% elongation at density 4.43 g/cm3, less than six-tenths the density of steel. 316L stainless prints strong and ductile (550-700 MPa, elongation 30-40%) with corrosion resistance for food and medical hardware. AlSi10Mg, a cast-aluminium alloy, prints 330-460 MPa with excellent thermal conductivity for heat exchangers. Inconel 718 keeps strength past 600 degrees C for turbine hardware, exceeding 1200 MPa when aged.",
              "The metal route is a pipeline, not a print: gas-atomize spherical powder, build in the SLM chamber under argon, stress-relieve on the plate (Ti at 650-800 degrees C for 2-3 hours), cut off, hot isostatic press if fatigue-critical, then heat-treat and machine critical faces. Economics matter as much as properties: Ti powder costs in the hundreds of dollars per kilogram against tens for steel, which is why design-for-AM (buy-to-fly reduction, topological lightweighting) is what makes titanium parts affordable at all.",
              "Exam framing: 'explain metallic materials in AM' wants four alloys with one application and one number each, the powder route sketch, and the support/heat-treatment consequence of melting. 'Why Ti-6Al-4V for implants?' is the short version: biocompatible, 950-1100 MPa strength, 4.43 g/cm3 density, and printed lattices can drop stiffness toward bone's to reduce stress shielding - a sentence that merges materials with application and reliably earns the last marks.",
            ],
            keyTerms: [
              { term: "Ti-6Al-4V", definition: "Alpha-beta titanium alloy - aerospace and implant standard; UTS 950-1100 MPa as-built." },
              { term: "316L", definition: "Austenitic stainless steel - ductile, corrosion-resistant; UTS 550-700 MPa as-built." },
              { term: "AlSi10Mg", definition: "Cast aluminium alloy for SLM - 330-460 MPa, high thermal conductivity." },
              { term: "Inconel 718", definition: "Nickel superalloy for hot sections; over 1200 MPa aged." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The metal AM route, powder to part",
              caption: "Atomize, melt, relieve, cut, HIP, machine - the print is only stage two of five.",
              stages: [
                { label: "Gas atomize powder", note: "spherical, 15-45 µm" },
                { label: "SLM build", note: "argon, O2 <= 0.1%" },
                { label: "Stress relief", note: "Ti 650-800 C, 2-3 h, on plate" },
                { label: "Cut-off + HIP", note: "920 C, 100-200 MPa if fatigue-critical" },
                { label: "Age + machine", note: "critical faces to tolerance" },
              ],
            },
            bullets: [
              "Ti-6Al-4V: UTS 950-1100 MPa, 6-10% elongation, density 4.43 g/cm3 - implants, aerospace.",
              "316L: UTS 550-700 MPa, elongation 30-40% - ductile, corrosion-resistant.",
              "AlSi10Mg: UTS 330-460 MPa, thermally conductive - heat exchangers.",
              "IN718: over 1200 MPa aged, service past 600 C - turbine hardware.",
              "Route: atomize -> SLM in argon -> stress relief 650-800 C -> cut-off -> HIP 920 C/100-200 MPa -> machine.",
              "Ti powder costs hundreds of $/kg vs tens for steel - design-for-AM pays for the powder.",
            ],
            callout: {
              type: "tip",
              title: "Stress relief before cut-off, always",
              body: "LPBF parts carry residual stress from steep thermal gradients. Cutting the part off the plate unrelieved releases the stress as sudden distortion - so the heat treatment happens while the plate still holds the part flat. Sequencing, not temperature, is the exam point.",
            },
            table: {
              caption: "Metal alloy card for SLM.",
              headers: ["Alloy", "UTS as-built (MPa)", "Elongation", "Signature use"],
              rows: [
                ["Ti-6Al-4V", "950-1100", "6-10%", "implants, aerospace structure"],
                ["316L", "550-700", "30-40%", "ductile corrosion-resistant parts"],
                ["AlSi10Mg", "330-460", "4-8%", "heat exchangers, lightweight"],
                ["IN718", ">1200 (aged)", "12-15%", "turbine and hot-section parts"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the metallic materials used in powder bed fusion with properties and applications of Ti-6Al-4V, 316L, AlSi10Mg and Inconel 718, and sketch the metal AM process route.",
                marks: 14,
                outline: [
                  "Ti-6Al-4V: 950-1100 MPa, 4.43 g/cm3 - implants, aerospace",
                  "316L: 550-700 MPa, 30-40% elongation - ductile corrosion parts",
                  "AlSi10Mg: 330-460 MPa, conductive - heat exchangers",
                  "IN718: >1200 MPa aged - hot sections",
                  "Route: gas atomize -> SLM in argon -> stress relief 650-800 C",
                  "Cut-off only after relief; HIP 920 C/100-200 MPa closes internal pores",
                  "Machine critical faces; Ti powder economics drive design-for-AM",
                ],
              },
              {
                q: "Why is Ti-6Al-4V the implant material of choice in SLM?",
                marks: 7,
                outline: [
                  "Biocompatible and osseointegrates; standard surgical alloy",
                  "950-1100 MPa strength at 4.43 g/cm3 - strong and light",
                  "Printed porous lattices lower stiffness toward bone, easing stress shielding",
                  "Rough as-built surface aids bone ingrowth; no tooling for patient geometry",
                  "Geometry comes straight from CT scans - volumes of one, impossible to mould economically",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Ceramics and non-metals",
            body: [
              "Technical ceramics - alumina (Al2O3), zirconia (ZrO2), silicon carbide (SiC) and bioactive hydroxyapatite - reach AM through green routes: binder jetting of ceramic powder followed by furnace densification, vat photopolymerization of ceramic-loaded slurries (lithography-based ceramic manufacturing), and paste extrusion (robocasting). Whatever the route, the part is printed oversize as a fragile green body, debindered to burn out binder, then sintered at 1400-1600 degrees C - shrinking 15-25% linearly. Zirconia dental crowns, the flagship application, sinter near 1450-1550 degrees C.",
              "The shrinkage number is the process's design rule, and it deserves a worked calculation: a crown must finish at 14.0 mm and the material shrinks 22% linearly, so the green part must print at 14.0 / (1 - 0.22) = 14.0 / 0.78 = about 17.9 mm. Because thin and thick sections shrink non-uniformly, uniform scaling only approximately works - real ceramic AM tunes shrinkage per geometry and grinds critical surfaces after sintering. Non-metals complete the syllabus list: silica sand for binder-jetted casting moulds, gypsum for colour models, wax for investment-casting patterns, wood- and metal-filled composite filaments for look-and-feel prototypes.",
              "Exam framing: 'write short notes on ceramic AM' wants the green-route trio (BJ + sinter, slurry SLA, robocasting), the debind-sinter sequence with temperatures, and the shrinkage calculation with numbers. The non-metal paragraph is one sentence each - sand moulds skip densification entirely (cure only), gypsum and wax serve casting and display - and that contrast (sinter versus cure-only) is the comparison examiners look for between ceramic and sand routes.",
            ],
            keyTerms: [
              { term: "Green body", definition: "Printed ceramic part held by binder - fragile, oversize, awaiting the furnace." },
              { term: "Debinding", definition: "Furnace step that burns out binder before sintering (with careful gas flow)." },
              { term: "Sintering shrinkage", definition: "15-25% linear contraction during densification; compensated by green scaling." },
              { term: "Robocasting", definition: "Paste extrusion of ceramic slurry - filament-free ceramic AM." },
            ],
            diagram: {
              kind: "fork",
              title: "Which route prints a ceramic?",
              caption: "Three green routes and one oversight - the furnace decides success, not the printer.",
              start: "Printing alumina / zirconia",
              branches: [
                { label: "Binder jetting + sinter", outcome: "fast, coarse resolution; sinter at ~1500 C with 15-25% shrink", good: true },
                { label: "Slurry vat (LCM)", outcome: "fine detail from photopolymer + ceramic loading; debind carefully", good: true },
                { label: "Robocasting paste", outcome: "large simple geometry; no photopolymer to remove", good: true },
                { label: "Print to final size, ignore shrink", outcome: "part undersizes by 15-25% - the classic ceramic AM failure", good: false },
              ],
            },
            bullets: [
              "Ceramic AM is always green-route: print + debind + sinter at 1400-1600 C.",
              "Linear shrinkage 15-25%: a 14.0 mm crown at 22% shrink prints green at ~17.9 mm.",
              "Routes: binder jetting + sinter, ceramic slurry SLA (LCM), robocasting paste.",
              "Zirconia crowns sinter near 1450-1550 C - the flagship dental application.",
              "Non-metals: sand moulds cure only (no densification); gypsum colour models; wax patterns.",
              "Uniform scaling only approximately compensates - thin-thick sections shrink unevenly.",
            ],
            callout: {
              type: "warning",
              title: "Debind slowly or crack the part",
              body: "Binder burn-out generates gases; ramp the furnace too fast and trapped gas cracks the green body from inside. Debinding curves (hours of slow ramp through 200-600 C) exist for the same reason drying schedules do - the furnace is where ceramic parts die.",
            },
            codeExample: {
              language: "python",
              caption: "shrinkage.py - green size from target size",
              code: `target_mm, shrink = 14.0, 0.22          # crown target, 22% linear shrink
green = target_mm / (1 - shrink)
print(round(green, 1), "mm green")       # 17.9 mm green
# verify: 17.9 * (1 - 0.22) = 13.96 mm ~ target
# thin/thick sections shrink non-uniformly -> tune per geometry`,
            },
            examQuestions: [
              {
                q: "Explain ceramic additive manufacturing: the green routes, the debind-sinter sequence, and compute the green size of a crown that must finish at 14.0 mm with 22% linear sintering shrinkage.",
                marks: 14,
                outline: [
                  "Routes: binder jetting + sinter; ceramic slurry SLA; robocasting paste",
                  "Green body printed oversize and fragile; binder holds particles",
                  "Debind: slow ramp through 200-600 C to burn out binder without cracking",
                  "Sinter at 1400-1600 C; zirconia crowns 1450-1550 C",
                  "Shrinkage: green = 14.0/(1-0.22) = ~17.9 mm",
                  "Uniform scaling approximate - thin/thick sections shrink unevenly",
                  "Non-metals: sand moulds cure only; gypsum and wax for models and patterns",
                ],
              },
              {
                q: "Why does a sand binder-jetted mould need no sintering while an alumina part does?",
                marks: 7,
                outline: [
                  "Mould duty is one pour - cured furan strength suffices",
                  "Alumina part must reach full density for mechanical service",
                  "Sintering densifies particles at 1400-1600 C; moulds never need it",
                  "Different duty -> different furnace route entirely",
                  "The mould is destroyed in the first pour anyway - densification would be wasted cost",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Forms of raw material - liquid, solid, wire, powder",
            body: [
              "The syllabus's four forms map one-to-one onto process families. Liquid: photopolymer resins of viscosity low enough to recoat evenly (SLA, DLP, material jetting). Solid: thermoplastic filament of 1.75 or 2.85 mm diameter for FDM, and adhesive-coated sheets 0.06-0.15 mm thick for LOM. Wire: metal wire about 1 mm diameter fed into the melt pool of directed energy deposition (WAAM builds large structural parts this way). Powder: spherical particles 15-45 µm for metal LPBF, 45-90 µm for polymer SLS, coarser for binder jetting.",
              "Form specifications are tolerances, and they matter. Filament diameter variance of ±0.02 mm matters because volumetric flow follows diameter squared - a 0.05 mm overswing injects roughly 6% extra material and visible over-extrusion. Powder sizing is a window, not a target: too fine and particles agglomerate and flow badly; too coarse and layers sinter incompletely. Wire must feed smoothly without kinking; resin must level to a flat surface within seconds or layers print unevenly. Storage rules follow: resin away from UV, filament dry (moisture bubbles in the melt), powder under inert gas for metals, dried below about 0.1% moisture for polymers.",
              "Exam framing: 'explain the forms of raw material used in AM' is a table answer: form - example feedstock - process - one specification with a number. The scoring line is the coupling sentence: form determines process, process determines equipment, and equipment determines the parameter set of Unit IV - one chain from syllabus III to IV.",
            ],
            keyTerms: [
              { term: "Filament tolerance", definition: "Diameter variance (±0.02-0.05 mm) - flow follows diameter squared." },
              { term: "Particle size window", definition: "15-45 µm metal LPBF, 45-90 µm polymer SLS - too fine clumps, too coarse under-sinters." },
              { term: "Wire feed", definition: "Metal wire (~1 mm) into a DED melt pool - large-part AM." },
              { term: "Recoat viscosity", definition: "Resin must self-level within seconds for an even next layer." },
            ],
            diagram: {
              kind: "fork",
              title: "Pick the form, pick the machine",
              caption: "Four feedstock forms, four process families - the coupling AM is built on.",
              start: "Raw material form",
              branches: [
                { label: "Liquid resin", outcome: "SLA / DLP / material jetting - viscosity and recoat rule", good: true },
                { label: "Solid filament / sheet", outcome: "FDM (1.75/2.85 mm) / LOM (0.06-0.15 mm sheets)", good: true },
                { label: "Wire", outcome: "DED / WAAM - ~1 mm wire into a melt pool", good: true },
                { label: "Powder", outcome: "SLS / SLM / binder jetting - 15-90 µm spherical particles", good: true },
              ],
            },
            bullets: [
              "Liquid: photopolymer resin; must self-level for even recoating (SLA, jetting).",
              "Solid: filament 1.75/2.85 mm (FDM); sheets 0.06-0.15 mm (LOM).",
              "Wire: ~1 mm metal wire for DED/WAAM - large structural parts.",
              "Powder: 15-45 µm (metal LPBF), 45-90 µm (polymer SLS), coarser (binder jetting).",
              "Filament ±0.02 mm tolerance matters - flow scales with diameter squared.",
              "Storage: resin dark, filament dry, metal powder inert, polymer powder dried below ~0.1% moisture.",
            ],
            callout: {
              type: "tip",
              title: "Diameter squared is why cheap filament prints badly",
              body: "Extruders meter by filament length, so volumetric flow varies with the square of diameter. A spool wandering ±0.05 mm swings volume by ~6% - visible as fat and thin bead lines. Diameter tolerance is a print-quality parameter disguised as a purchase decision.",
            },
            table: {
              caption: "Form - feedstock - process - specification.",
              headers: ["Form", "Feedstock", "Process", "Specification"],
              rows: [
                ["Liquid", "photopolymer resin", "SLA / DLP / jetting", "self-levelling viscosity"],
                ["Solid - filament", "PLA, ABS, PA12", "FDM", "1.75/2.85 mm, ±0.02-0.05 mm"],
                ["Solid - sheet", "paper + adhesive", "LOM", "0.06-0.15 mm thick"],
                ["Wire", "Ti / steel wire", "DED / WAAM", "~1 mm, kink-free feed"],
                ["Powder", "PA12, Ti-6Al-4V", "SLS / SLM / BJ", "45-90 µm polymer; 15-45 µm metal"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the forms of raw material used in additive manufacturing - liquid, solid, wire and powder - with feedstock examples, processes and one numeric specification each.",
                marks: 7,
                outline: [
                  "Liquid: photopolymer resin -> SLA/jetting; self-levelling required",
                  "Solid filament: 1.75/2.85 mm -> FDM; ±0.02 mm tolerance (flow ~ d^2)",
                  "Solid sheet: 0.06-0.15 mm adhesive paper -> LOM",
                  "Wire: ~1 mm metal -> DED/WAAM",
                  "Powder: 15-45 µm metal LPBF; 45-90 µm PA12 SLS",
                  "Form fixes process; process fixes equipment and parameters",
                ],
              },
              {
                q: "Why must metal powder be stored under inert gas while polymer powder must be dried?",
                marks: 7,
                outline: [
                  "Fine metal powder oxidises - oxygen pickup embrittles Ti parts (limit ~0.2 wt%)",
                  "Fine metal dust is also an ignition/explosion hazard in air",
                  "Polymer powder absorbs moisture -> steam bubbles and foaming at melt",
                  "Both degrade flowability - powder handling is a quality parameter",
                  "Hence the rules: metal under argon, polymer dried below ~0.1% moisture",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Powder preparation and desired properties",
            body: [
              "Powder begins as melted metal (or polymer) atomized into droplets that solidify as particles. Gas atomization - a high-pressure argon jet shattering the melt stream - produces the spherical particles AM wants; water atomization is cheaper but yields irregular particles; plasma rotating-electrode produces the most spherical, cleanest powder at premium cost. Atomized powder is then sieved and air-classified into the process window (15-45 µm for LPBF metal, 45-90 µm for PA12), blended (virgin with reused, typically 30-70% reused for SLS), dried, and quality-checked before it touches a machine.",
              "The desired properties list is the exam answer, each with its number. Sphericity near 1 (above about 0.9) - spheres roll and pack; irregular particles bridge and leave voids. Particle size distribution inside the window - 15-45 µm melts completely at LPBF layer thickness; fines agglomerate, coarse particles only partially melt. Flowability: 50 g of good Ti powder flows through a Hall funnel in roughly 25-35 seconds; stagnant powder spreads uneven layers. Apparent/tap density: packing near 60% of true density so layers are uniform. Chemistry: oxygen below about 0.2 wt% for Ti-6Al-4V, moisture below about 0.1% for polymers - and both drift upward with every reuse cycle, which is why powder lot tracking exists.",
              "Exam framing: 'explain powder preparation and the desired properties of powder for AM' is a 14-mark staple: name the three atomization routes with their trade, the sieve-blend-dry-test pipeline, and five properties with numbers (sphericity, PSD, flow time, packing density, chemistry limits). Close the loop to Unit IV: a recoater can only spread what flowability allows, and the energy window of SLM only works on particles that melt completely - powder is where part quality starts.",
            ],
            keyTerms: [
              { term: "Gas atomization", definition: "Argon jet shatters the melt into spherical droplets - the AM-standard powder route." },
              { term: "Sphericity", definition: "Closeness to a perfect sphere; above ~0.9 for good flow and packing." },
              { term: "Hall flow time", definition: "Seconds for 50 g to pass a standard funnel - good Ti powder: ~25-35 s." },
              { term: "Powder reuse blending", definition: "Mixing 30-70% reused powder with virgin to stabilise size and chemistry." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From melt to printable powder",
              caption: "Atomize, classify, blend, dry, test - five steps before any powder meets a laser.",
              stages: [
                { label: "Atomize", note: "gas / water / plasma routes" },
                { label: "Sieve + classify", note: "15-45 µm metal, 45-90 µm polymer" },
                { label: "Blend", note: "virgin + reused 30-70%" },
                { label: "Dry", note: "polymer <0.1% moisture" },
                { label: "QC + store", note: "flow, PSD, chemistry, inert gas" },
              ],
            },
            bullets: [
              "Atomization routes: gas (spherical, standard), water (irregular, cheap), plasma rotating electrode (premium).",
              "Classify to window: 15-45 µm LPBF metal; 45-90 µm PA12.",
              "Sphericity above ~0.9 - spheres roll and pack; irregular particles leave voids.",
              "Flowability: 50 g Ti in ~25-35 s through a Hall funnel.",
              "Chemistry limits: O2 below ~0.2 wt% (Ti-6Al-4V); moisture below ~0.1% (polymer).",
              "Reuse cycles drift PSD and oxygen upward - hence blending and lot tracking.",
            ],
            callout: {
              type: "exam",
              title: "Say the number with the property",
              body: "'Good flowability' earns one mark; '50 g of Ti-6Al-4V flows a Hall funnel in 25-35 s' earns the paragraph. Every powder property has a standard test and a number range - the numbers are what separate the 14-mark answer from the list.",
            },
            table: {
              caption: "Desired powder properties with targets.",
              headers: ["Property", "Target", "Why it matters"],
              rows: [
                ["Sphericity", "> ~0.9", "flow + dense packing; irregular = voids"],
                ["Size distribution", "15-45 µm (LPBF), 45-90 µm (SLS)", "complete melting per layer"],
                ["Flowability", "25-35 s / 50 g (Ti, Hall)", "uniform recoating"],
                ["Apparent density", "~50-60% of true", "layer mass consistency"],
                ["Oxygen (Ti-6Al-4V)", "< ~0.2 wt%", "ductility preserved"],
                ["Moisture (polymer)", "< ~0.1%", "no steam bubbles at melt"],
              ],
            },
            examQuestions: [
              {
                q: "Explain powder preparation for additive manufacturing - atomization routes, classification, blending - and the desired powder properties with their target values.",
                marks: 14,
                outline: [
                  "Gas atomization: argon jet, spherical particles - the standard route",
                  "Water atomization cheap but irregular; plasma rotating electrode premium",
                  "Sieve/classify: 15-45 µm metal LPBF, 45-90 µm PA12",
                  "Blend virgin + reused (30-70% reused typical for SLS); dry below 0.1% moisture",
                  "Sphericity >0.9; Hall flow 25-35 s/50 g for Ti",
                  "Chemistry: O2 <0.2 wt% Ti-6Al-4V; reuse drifts PSD and O2 upward",
                  "Powder properties feed directly into recoating and melting quality",
                ],
              },
              {
                q: "Why does an irregular, water-atomized powder produce porous SLM parts?",
                marks: 7,
                outline: [
                  "Irregular particles bridge instead of packing -> inter-particle voids",
                  "Poor flow -> non-uniform layers -> inconsistent energy per volume",
                  "Angular particles also scatter the beam differently from spheres",
                  "Net effect: lack-of-fusion porosity even inside the energy window",
                  "Diagnosis: section the coupon - voids sit between tracks, not inside them",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Support materials",
            body: [
              "Supports are printed material whose only job is to die well. They anchor overhangs steeper than about 45 degrees from horizontal, conduct heat away from melt pools in SLM, and resist recoater forces in powder beds. The material question is whether support and part share a chemistry. Same-material (breakaway) supports - PLA on PLA, Ti-6Al-4V on Ti-6Al-4V - weld slightly to the part and snap off with cutters, leaving scars that need blending. Dissimilar (soluble) supports use a second material chosen to dissolve: PVA dissolves in warm water for PLA parts, HIPS dissolves in limonene around ABS.",
              "The design numbers of support strategy: print supports at 10-30% density with an interface layer or 0.1-0.4 mm gap so removal does not tear the surface; support tip contact points of 0.3-0.5 mm concentrate the weld into breakable necks. The cost side is real - support removal can dominate post-processing labour, which is why the best support strategy is the support you never print: orient so surfaces stay above the 45-degree rule, self-supporting teardrops for horizontal holes, 45-degree chamfers instead of flat overhangs. Every support avoided is material, time and finishing saved.",
              "Exam framing: 'explain support materials in AM' wants the two classes with their material pairs (PVA/water, HIPS/limonene), the functions of supports (anchor, heat conduction, recoater resistance), the density/gap numbers, and the design-for-fewer-supports rules. The comparison diagram below is the sketch examiners expect; the closing line - 'supports are printed to be removed, so design them removable' - ties materials to Unit V's post-processing.",
            ],
            keyTerms: [
              { term: "Breakaway support", definition: "Same-material support snapped off by hand; leaves scars needing blending." },
              { term: "Soluble support", definition: "Dissimilar support dissolved in a solvent - PVA in water, HIPS in limonene." },
              { term: "Interface gap", definition: "0.1-0.4 mm separation or sparse interface layer so support does not weld to the surface." },
              { term: "45-degree rule", definition: "Surfaces shallower than ~45 degrees from horizontal need support." },
            ],
            diagram: {
              kind: "compare",
              title: "Breakaway versus soluble supports",
              caption: "Same material, snap off, blend scars - or second material, dissolve, clean surface.",
              left: {
                heading: "Breakaway (same material)",
                items: [
                  "PLA on PLA; Ti-6Al-4V on Ti-6Al-4V",
                  "Snapped with cutters/pliers after the build",
                  "10-30% density, 0.1-0.4 mm interface gap",
                  "Cheap, universal - but scars need finishing",
                ],
              },
              right: {
                heading: "Soluble (dissimilar)",
                items: [
                  "PVA + water for PLA; HIPS + limonene for ABS",
                  "Dissolves in hours at 40-60 C - no mechanical contact",
                  "Clean surfaces in internal channels",
                  "Costs a second material system and solvent circulation",
                ],
              },
            },
            bullets: [
              "Functions: anchor overhangs (<~45 degrees), conduct heat (SLM), resist recoater forces.",
              "Breakaway: same material, 10-30% density, snap off, blend the scars.",
              "Soluble: PVA in warm water (PLA), HIPS in limonene (ABS) - clean internal channels.",
              "Interface gap 0.1-0.4 mm and 0.3-0.5 mm tips concentrate removal at breakable necks.",
              "Best support is none: orientation, teardrop holes, 45-degree chamfers.",
              "Support removal can dominate post-processing labour - design for removal.",
            ],
            callout: {
              type: "warning",
              title: "Soluble supports need flow, not soaking",
              body: "Dissolution is a mass-transfer problem: solvent must circulate through the support lattice, so a still bath takes many hours while a heated, agitated bath finishes in one to three. Forcing circulation into the wash station is worth more than any parameter change on the printer.",
            },
            table: {
              caption: "Support material pairs and removal.",
              headers: ["Part material", "Support material", "Removal", "Best for"],
              rows: [
                ["PLA", "PLA (breakaway)", "cutters + blending", "simple externals"],
                ["PLA", "PVA (soluble)", "warm water 40-60 C", "internal channels"],
                ["ABS", "ABS (breakaway)", "cutters + blending", "tough parts"],
                ["ABS", "HIPS (soluble)", "limonene bath", "complex internals"],
                ["Ti-6Al-4V (SLM)", "Ti-6Al-4V", "wire-EDM / saw + machining", "structural anchors"],
                ["PA12 (SLS)", "none - powder bed", "depowder + blast", "free nesting"],
              ],
            },
            examQuestions: [
              {
                q: "Explain support materials in additive manufacturing: their functions, the breakaway and soluble classes with material pairs, and the design rules that minimise support volume.",
                marks: 14,
                outline: [
                  "Functions: anchor overhangs, conduct heat (SLM), resist recoater loads",
                  "Breakaway: same material (PLA/PLA, Ti/Ti), snap off, blend scars",
                  "Soluble: PVA + water (PLA), HIPS + limonene (ABS) - clean internals",
                  "Parameters: 10-30% density, 0.1-0.4 mm interface gap, 0.3-0.5 mm tips",
                  "45-degree rule defines when supports appear at all",
                  "Minimisation: orientation, teardrop holes, 45-degree chamfers",
                  "Support removal dominates post-processing labour - design for removal",
                ],
              },
              {
                q: "Why do SLM supports conduct heat as well as anchor the part?",
                marks: 7,
                outline: [
                  "Melt pool heat must drain into the plate through solid contact",
                  "Unsupported metal overhangs overheat, ball and sag",
                  "Support lattice is the thermal path - hence dense support near heat-critical zones",
                  "Explains why SLM supports are denser than FDM's decorative 10-30%",
                  "Dense supports also anchor the part against residual-stress distortion during the build",
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
      title: "Additive Manufacturing Equipment",
      summary:
        "Unit IV opens the machine: process equipment and its design, the governing bonding mechanisms, the design and process parameters that steer a build, process design for AM, common faults with their troubleshooting, and the calibration and maintenance discipline that keeps machines honest.",
      chapter: {
        number: "04",
        title: "Inside the Machine",
        intro:
          "Unit IV covers process equipment - design and process parameters, the governing bonding mechanisms, process design for additive manufacturing, common faults and troubleshooting, and maintenance and calibration of AM machines.",
        inOneBreath:
          "Every AM machine is five subsystems stacked - control software, motion system, energy source, material delivery, chamber and atmosphere. Parameters split into design choices (orientation, supports, scaling) and process knobs (power, speed, hatch, temperature), with energy density E = P/(v x h x t) as the gate between lack of fusion and keyhole porosity. Bonding is photopolymerization, melting, sintering or adhesion, and each mechanism dictates its own control knob. Faults are diagnosed one parameter at a time on test coupons, and calibration drift shows up in parts as porosity long before it shows up on any display.",
        sections: [
          {
            number: "4.1",
            title: "Process equipment - machine architecture",
            body: [
              "Strip any AM machine to its subsystems and the same five appear. The control stack: slicing software converts the model into layer vectors and exposure/deposition parameters. The motion system: galvanometer mirrors steer laser beams at several metres per second in SLA/SLS/SLM; gantries and lead screws move heads and beds in FDM and DED. The energy source: a 355 nm UV laser (SLA), a 10.6 µm CO2 laser (SLS), a 1070 nm fibre laser (SLM), a heated liquefier (FDM), or an arc/plasma (DED). The material delivery: vat with platform, filament feeder, or powder hopper with recoater roller/blade.",
              "The fifth subsystem is the one that quietly decides quality: the build chamber and its atmosphere. FDM needs a heated chamber (about 70-110 degrees C for ABS) to fight warping; SLS holds 160-175 degrees C just below the powder's melt point; SLM floods the chamber with argon and keeps oxygen near or below 0.1% because hot metal and oxygen make oxide inclusions. Recoating performance - blade versus roller, 3-10 seconds per layer - and chamber temperature uniformity across a 200-400 mm plate are the machine builder's hardest problems.",
              "Exam framing: 'explain the construction of an AM machine' is a 14-mark layers-diagram answer: name the five subsystems top-down, give one example hardware and one number per subsystem, then close with the coupling sentence - each subsystem owns one parameter family of Unit II (energy source owns power/exposure, motion owns speed, material delivery owns recoat, chamber owns temperature and atmosphere). Machines differ in which subsystem is the star, but the stack never changes.",
            ],
            keyTerms: [
              { term: "Galvanometer scanner", definition: "Mirrored steering of the laser beam across the bed at metres-per-second speeds." },
              { term: "Recoater", definition: "Roller or blade that spreads each powder/resin layer in 3-10 s." },
              { term: "Build chamber", definition: "The heated, sometimes inert, volume where layers fuse - its uniformity is quality." },
              { term: "Atmosphere control", definition: "Argon flooding with O2 near/below 0.1% for metal builds; humidity control for polymers." },
            ],
            diagram: {
              kind: "layers",
              title: "The five subsystems of an AM machine",
              caption: "Index 0 at the top: software steers, the rest delivers - every parameter of Unit II lives in one of these layers.",
              layers: [
                { label: "Control software", note: "slicing, exposure vectors, parameters" },
                { label: "Motion system", note: "galvo scanners / gantries, several m/s" },
                { label: "Energy source", note: "355 nm UV, 10.6 µm CO2, 1070 nm fibre, heaters" },
                { label: "Material delivery", note: "vat, filament feeder, hopper + recoater" },
                { label: "Chamber + atmosphere", note: "heated bed/chamber; argon, O2 <= 0.1%" },
              ],
            },
            bullets: [
              "Five subsystems: control software, motion, energy source, material delivery, chamber/atmosphere.",
              "Galvo scanners steer laser beams at several m/s; gantries move FDM/DED heads.",
              "Energy sources: 355 nm UV (SLA), 10.6 µm CO2 (SLS), 1070 nm fibre (SLM), liquefier (FDM).",
              "Material delivery: vat + platform, gear feeder, hopper + recoater roller/blade (3-10 s/layer).",
              "Chamber: ABS ~70-110 C, SLS 160-175 C, SLM argon with O2 near/below 0.1%.",
              "Each subsystem owns a parameter family: energy->power, motion->speed, delivery->recoat, chamber->temperature.",
            ],
            callout: {
              type: "tip",
              title: "Chamber uniformity beats absolute temperature",
              body: "Two machines both 'at 170 C' can differ by 15 C corner-to-corner on the plate - and the corners warp while the centre is perfect. Chamber uniformity, not the setpoint, is the machine-spec number that predicts flat parts.",
            },
            table: {
              caption: "Subsystem - example hardware - owned parameter.",
              headers: ["Subsystem", "Example hardware", "Parameter owned"],
              rows: [
                ["Control software", "slicer / build processor", "layer thickness, exposure, supports"],
                ["Motion system", "galvo scanner; X-Y gantry", "scan speed, positioning accuracy"],
                ["Energy source", "355 nm / 10.6 µm / 1070 nm laser; heater", "power, spot size, temperature"],
                ["Material delivery", "hopper + recoater; gear feeder", "recoat time, layer mass"],
                ["Chamber + atmosphere", "heated chamber; argon circuit", "temperature, O2 level"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the construction of an additive manufacturing machine, describing each subsystem with example hardware and the process parameter it governs.",
                marks: 14,
                outline: [
                  "Control software: slicing into layer vectors; owns layer thickness/exposure",
                  "Motion: galvo mirrors at several m/s or gantry axes; owns scan speed",
                  "Energy: UV 355 nm / CO2 10.6 µm / fibre 1070 nm / liquefier; owns power",
                  "Material delivery: vat, filament feeder, hopper + recoater; owns recoat time",
                  "Chamber/atmosphere: heated chambers; argon with O2 <=0.1% for SLM",
                  "Coupling: each subsystem owns one parameter family of Unit II",
                  "Machines differ in the star subsystem, never in the stack",
                ],
              },
              {
                q: "Why does an SLM machine need an argon atmosphere while an FDM machine needs only a warm chamber?",
                marks: 7,
                outline: [
                  "Hot metal reacts with oxygen -> oxide inclusions and embrittlement",
                  "Ti picks up O2/N above limits (>0.2 wt% O2) - ductility collapses",
                  "Argon with O2 near/below 0.1% prevents both",
                  "FDM's polymers merely warp in cold air - heat, not chemistry, is the issue",
                  "Argon also shields the optics and carries process fumes out of the chamber",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Design and process parameters",
            body: [
              "Parameters split into two groups the syllabus names separately. Design parameters are chosen before the build: part orientation (accuracy against supports against time), layer thickness, support strategy and density, shrinkage/green scaling, and part placement on the plate. Process parameters run the build: laser power and scan speed (or exposure and scan speed in SLA), hatch spacing, bed and chamber temperatures, recoat speed, and for extrusion the nozzle/bed temperatures and cooling-fan duty. The two groups interact - orientation changes which process parameters matter by changing local overhang angles.",
              "A worked build-time calculation shows the leverage. A 100 mm tall part at 0.1 mm layers is 1000 layers; at 20 seconds of scan plus 6 seconds of recoat per layer, the build runs 1000 x 26 s = 26,000 s = 7.2 hours. Drop layer thickness to 0.05 mm: 2000 layers with roughly half the scan time each but the same recoat - about 2000 x 16 s = 8.9 hours, a 24% time penalty for halved stair-step error (cusp 0.17 -> 0.09 mm on a 30-degree slope) and better z-bonding. Energy density ties the metal case together: E = P/(v x h x t) must sit inside the material window - the same equation from Unit II, now a machine-side dial.",
              "Exam framing: 'discuss the parameters affecting AM part quality' wants the two-group split, one worked time calculation, and the failure signature of each mis-set parameter - wrong exposure = delamination, wrong energy density = porosity, wrong chamber temperature = warping, wrong recoat = uneven layers. The quadrant diagram is the metal case in one picture: the power-speed plane with its lack-of-fusion and keyhole corners and the dense window between.",
            ],
            keyTerms: [
              { term: "Design parameters", definition: "Orientation, layer thickness, supports, scaling - fixed before the build starts." },
              { term: "Process parameters", definition: "Power, speed, hatch, temperatures, recoat - the live knobs during the build." },
              { term: "Hatch spacing", definition: "Distance between adjacent scan tracks - sets track overlap and energy density." },
              { term: "Process window", definition: "The power-speed region that yields full density without lack-of-fusion or keyhole defects." },
            ],
            diagram: {
              kind: "matrix",
              title: "The power-speed plane (metal PBF)",
              caption: "Energy density E = P/(v·h·t) divides the plane into defect regimes and one dense window.",
              axes: { x: "Scan speed (slow -> fast)", y: "Laser power (low -> high)" },
              quadrants: [
                { label: "Keyhole porosity", note: "slow + hot - melt pool drills, spherical pores" },
                { label: "Transition / balling", note: "fast + hot - unstable track, humping" },
                { label: "Over-melt (wasteful)", note: "slow + cool - rough, slow, still dense" },
                { label: "Lack of fusion", note: "fast + cool - irregular voids between tracks" },
              ],
            },
            bullets: [
              "Design parameters: orientation, layer thickness, support strategy, scaling, plate layout.",
              "Process parameters: power, scan speed, hatch, bed/chamber temperature, recoat speed.",
              "Time math: 1000 layers x 26 s = 7.2 h; halving layer -> 2000 x 16 s = 8.9 h (+24%).",
              "Cusp halves with layer: 0.17 -> 0.09 mm on a 30-degree slope.",
              "Energy density E = P/(v x h x t) gates the metal window (Ti ~40-120 J/mm3).",
              "Mis-set parameters have signatures: delamination, porosity, warping, uneven layers.",
            ],
            callout: {
              type: "exam",
              title: "Every parameter has a failure signature",
              body: "The 14-mark parameter question rewards the pairing: exposure too low -> delamination; E too low -> lack-of-fusion voids; E too high -> keyhole pores; chamber too cold -> warping; recoat too fast -> uneven layers. Pair each knob with its signature and the answer writes itself.",
            },
            codeExample: {
              language: "python",
              caption: "build_time.py - layer thickness against build time",
              code: `height, scan_s, recoat_s = 100, 20, 6   # mm, s/layer, s/layer

for layer in (0.1, 0.05):
    n = height / layer
    per_layer = scan_s * (0.1 / layer) + recoat_s  # scan halves, recoat constant
    h = n * per_layer / 3600
    print(f"layer {layer} mm: {int(n)} layers -> {h:.1f} h")
# layer 0.1: 1000 layers -> 7.2 h | layer 0.05: 2000 -> 8.9 h`,
            },
            examQuestions: [
              {
                q: "Discuss the design and process parameters of AM equipment. Compute build time for a 100 mm part at 0.1 mm and 0.05 mm layers (20 s scan per 0.1 mm layer, 6 s recoat) and state the accuracy trade.",
                marks: 14,
                outline: [
                  "Design group: orientation, layer, supports, scaling, plate layout",
                  "Process group: power/speed/hatch, temperatures, recoat",
                  "0.1 mm: 1000 layers x (20+6) s = 7.2 h",
                  "0.05 mm: 2000 layers x (10+6) s = 8.9 h - +24% time",
                  "Trade: cusp 0.17 -> 0.09 mm on 30-degree slope; better z-bond",
                  "Energy density E = P/(v x h x t) must sit in the material window",
                  "Each mis-set parameter has a failure signature",
                ],
              },
              {
                q: "Explain how part orientation interacts with process parameters.",
                marks: 7,
                outline: [
                  "Orientation sets local overhang angles -> support volume and scars",
                  "It sets which faces are stair-stepped (shallow angles to layers)",
                  "It sets z-direction load paths - the weak interlayer plane",
                  "It sets build height -> layer count -> build time",
                  "It also sets which faces get finish-machining allowance (reachable, critical surfaces)",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Governing bonding mechanisms",
            body: [
              "Four physics govern how layer N bonds to layer N-1, and every machine is built around one of them. Photopolymerization: UV photons trigger a photoinitiator to crosslink liquid monomer into a polymer network - governed by Jacobs' equations, Cd = Dp x ln(E/Ec); SLA and material jetting. Thermal fusion - melting: the deposited material fully melts and welds to the layer below - FDM beads, SLM tracks; governed by energy density and wetting. Thermal fusion - sintering: particles fuse at contacts below full melt as material diffuses along necks (fastest when the bed sits at 0.7-0.8 of the melt temperature) - SLS. Adhesion: a separate glue joins powder or sheets - binder jetting and LOM; governed by wetting and saturation.",
              "The mechanism dictates the control knob, and that mapping is the exam's core insight. Photopolymerization is tuned by exposure (mJ/cm2) - cure depth must slightly exceed layer thickness. Melting is tuned by energy density E = P/(v x h x t) - inside the density window. Sintering is tuned by bed preheat (160-175 degrees C against PA12's 186 degrees C melt) plus laser boost - neck growth needs temperature and dwell. Adhesion is tuned by binder saturation and roller temperature - enough glue to wet particles, not enough to bleed. A worked cure-depth number ties the first case: Dp = 120 µm, Ec = 8 mJ/cm2, E = 40 mJ/cm2 gives Cd = 120 x ln(5) = about 193 µm.",
              "Exam framing: 'explain the bonding mechanisms in AM' is a 7 or 14-mark classification: four mechanisms, one process each, the physics in one sentence each, and the knob each is tuned by. The scoring detail is the failure signature per mechanism - under-cure = delamination at layer boundaries, under-melt = lack of fusion, under-sinter = weak friable parts, under-glue = green parts falling apart - because examiners grade the mechanism-defect link, not the definitions.",
            ],
            keyTerms: [
              { term: "Photopolymerization", definition: "UV crosslinking governed by Cd = Dp x ln(E/Ec) - the SLA mechanism." },
              { term: "Neck growth", definition: "Sintering's diffusion at particle contacts; needs bed near 0.7-0.8 of melt temperature." },
              { term: "Wetting", definition: "Whether melt or binder spreads over the substrate/particles - the adhesion and melting gate." },
              { term: "Binder saturation", definition: "Binder volume per powder volume - too little = weak green part, too much = bleeding." },
            ],
            diagram: {
              kind: "fork",
              title: "How does layer N bond to layer N-1?",
              caption: "Four mechanisms, four machines, four control knobs - and four failure signatures when mistuned.",
              start: "Bonding mechanism",
              branches: [
                { label: "Photopolymerization", outcome: "SLA/jetting - tuned by exposure; under-cure = delamination", good: true },
                { label: "Full melting", outcome: "FDM/SLM - tuned by energy density; low = lack of fusion", good: true },
                { label: "Sintering", outcome: "SLS - tuned by preheat + laser; cold bed = friable parts", good: true },
                { label: "Adhesion", outcome: "BJ/LOM - tuned by saturation; starved binder = falling apart", good: true },
              ],
            },
            bullets: [
              "Photopolymerization: Cd = Dp x ln(E/Ec); worked 120 x ln(40/8) = ~193 µm.",
              "Melting: FDM beads and SLM tracks weld by full melt; knob = energy density.",
              "Sintering: neck growth below melt; fastest with bed at 0.7-0.8 Tm - SLS preheat 160-175 C.",
              "Adhesion: binder or sheet glue; knob = saturation / roller temperature.",
              "Failure signatures: delamination, lack of fusion, friable parts, falling-apart green parts.",
              "Mechanism -> knob mapping is the link between Unit II techniques and Unit IV equipment.",
            ],
            callout: {
              type: "tip",
              title: "One mechanism, one knob - and one defect",
              body: "When any technique question stalls, revert to the triad: bonding mechanism -> control knob -> failure if mistuned. 'SLS: sintering -> preheat + laser -> friable or delaminated if cold.' Three lines answer half the Unit II and Unit IV questions at once.",
            },
            table: {
              caption: "Mechanism - process - control knob - failure if mistuned.",
              headers: ["Mechanism", "Process", "Knob", "Failure signature"],
              rows: [
                ["Photopolymerization", "SLA, PolyJet", "exposure E (mJ/cm2)", "delamination at layers"],
                ["Melting", "FDM, SLM", "energy density / temperature", "lack of fusion, porosity"],
                ["Sintering", "SLS", "bed preheat + laser", "weak, friable parts"],
                ["Adhesion", "binder jetting, LOM", "binder saturation, roller temp", "green parts crumble"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the governing bonding mechanisms in additive manufacturing with the process using each, the physics, the control knob, and the failure when mistuned.",
                marks: 14,
                outline: [
                  "Photopolymerization: UV crosslinking; Cd = Dp x ln(E/Ec); knob = exposure",
                  "Worked: Dp 120 µm, Ec 8, E 40 mJ/cm2 -> Cd ~193 µm",
                  "Melting: FDM/SLM full-melt welding; knob = energy density P/(v·h·t)",
                  "Sintering: neck growth below melt; knob = preheat 160-175 C (PA12)",
                  "Adhesion: binder/sheet glue; knob = saturation/roller temperature",
                  "Failure signatures: delamination, lack of fusion, friable, crumbling",
                  "Mechanism-knob mapping links techniques (Unit II) to equipment (Unit IV)",
                ],
              },
              {
                q: "Why does SLS preheat its bed to just below the melt point?",
                marks: 7,
                outline: [
                  "Neck growth (diffusion) accelerates steeply near Tm - 0.7-0.8 Tm is the sintering zone",
                  "Preheated bed means the laser adds only a small temperature rise",
                  "Small gradients -> little warpage and strong layer-to-layer bonds",
                  "Without preheat: weak, porous, warped parts even at full laser power",
                  "The numbers: bed 160-175 C against PA12 melt 186 C - just below, never above",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Process design for AM",
            body: [
              "Process design is the set of decisions that turn a CAD file into a good build: orientation, support strategy, layer thickness, scaling for shrinkage, part placement and nesting on the plate. The rules are geometric and testable. Overhangs shallower than about 45 degrees from horizontal need support; horizontal circular holes sag, so they are designed as teardrops with a self-supporting roof; flat overhangs are chamfered at 45 degrees; walls below about 0.8-1 mm (FDM) or 0.4 mm (SLM) fail to print; hollow parts need escape holes of at least 5 mm for trapped powder or resin.",
              "Orientation is the biggest lever and deserves its worked numbers. Stair-step cusp height on a surface inclined alpha from horizontal is approximately t x cos(alpha): at layer t = 0.2 mm, a 30-degree slope shows 0.17 mm of terracing, 45 degrees shows 0.14 mm, a vertical wall shows none. Standing the part upright removes cusps but raises build height (more layers, more time) and often multiplies supports; laying it flat does the reverse. Real process design picks the axis that puts critical surfaces vertical, load paths perpendicular to layers, and everything else as cheap as possible.",
              "Exam framing: 'explain the design considerations for AM' or 'what is process design' wants the rule list with numbers (45 degrees, teardrop, wall minimums, escape holes), the orientation trade with the cusp table, and the closing link: process design is where material limits (Unit III), machine limits (Unit IV) and post-processing cost (Unit V) meet - the decisions here decide all three downstream chapters.",
            ],
            keyTerms: [
              { term: "Process design", definition: "Orientation, supports, layer thickness, scaling and layout decisions before a build." },
              { term: "Teardrop hole", definition: "Hole roof reshaped to a self-supporting point so horizontal holes do not sag." },
              { term: "Cusp height", definition: "Stair-step height on an inclined surface, approximately layer thickness x cos(alpha)." },
              { term: "Escape hole", definition: "At least one ~5 mm hole so trapped powder/resin can leave a hollow part." },
            ],
            diagram: {
              kind: "compare",
              title: "Orienting the same bracket two ways",
              caption: "Upright kills cusps but grows supports and height; flat prints fast and marks the top face.",
              left: {
                heading: "Upright orientation",
                items: [
                  "Critical bore vertical - no stair-step on it",
                  "Tall build: more layers, more hours",
                  "Large support tree on overhanging arm",
                  "Load path crosses layer bonds - weaker",
                ],
              },
              right: {
                heading: "Flat orientation",
                items: [
                  "Short build: few layers, fast",
                  "Top face stair-stepped (cusp ~0.17 mm at 30 degrees)",
                  "Minimal supports - flat base on the plate",
                  "Load path along layers - stronger in tension",
                ],
              },
            },
            bullets: [
              "45-degree overhang rule; teardrop roofs for horizontal holes; 45-degree chamfers for flats.",
              "Wall minimums: ~0.8-1 mm FDM, ~0.4 mm SLM; escape holes at least 5 mm.",
              "Cusp height = t x cos(alpha): 0.2 mm layers give 0.17 mm at 30 degrees, 0.14 mm at 45.",
              "Orientation trades cusps against build height and support volume.",
              "Place load paths along layers, critical surfaces vertical or post-machined.",
              "Nesting and plate layout cut cost per part in powder-bed machines.",
            ],
            callout: {
              type: "exam",
              title: "Process design answers begin with orientation",
              body: "Every 'design considerations' question is secretly an orientation question plus rules. State the orientation trade with the cusp numbers first, then list the geometric rules (45 degrees, teardrop, walls, escape holes). Rules without the orientation logic read as a list; with it, as a method.",
            },
            codeExample: {
              language: "python",
              caption: "cusp.py - stair-step error versus surface angle",
              code: `import math
t = 0.2                                   # layer thickness mm
for a in (15, 30, 45, 60, 90):            # degrees from horizontal
    cusp = t * math.cos(math.radians(a))
    print(f"{a:3d} deg -> cusp {cusp:.3f} mm")
# 15 -> 0.193 | 30 -> 0.173 | 45 -> 0.141 | 60 -> 0.100 | 90 -> 0.000`,
            },
            examQuestions: [
              {
                q: "Explain process design for additive manufacturing: the geometric rules (overhang, holes, walls, escape holes) and the orientation trade-off, with the cusp-height calculation.",
                marks: 14,
                outline: [
                  "Overhangs steeper than ~45 degrees from horizontal need support",
                  "Horizontal holes become teardrops; flat overhangs become 45-degree chamfers",
                  "Wall minimums ~0.8-1 mm (FDM), ~0.4 mm (SLM); escape holes >= 5 mm",
                  "Cusp height = t x cos(alpha): 0.2 mm layer -> 0.173 mm at 30 degrees",
                  "Vertical wall: zero cusp; flat part: fast build with stepped top",
                  "Orientation balances cusps, build height, supports and load path",
                  "Process design couples materials (III), equipment (IV) and post-processing (V)",
                ],
              },
              {
                q: "Why is a teardrop-shaped horizontal hole self-supporting while a circular one is not?",
                marks: 7,
                outline: [
                  "A circular roof's top is nearly horizontal - shallower than 45 degrees",
                  "The teardrop's apex makes every roof surface steeper than 45 degrees",
                  "Self-supporting geometry needs no support inside the hole",
                  "Standard fix for printed channels and cooling passages",
                  "Diamond-shaped holes do the same job for square sections",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Common faults and troubleshooting",
            body: [
              "Machine faults repeat across processes, and each has a cause chain. Warping and curling: steep thermal gradients shrink upper layers over cooler lower ones - FDM's ABS curling off a cold bed, SLM parts distorting as stress releases. Delamination: layers fail to weld - under-exposure in SLA, under-energy in SLS/SLM, cold bed in FDM. Stringing and oozing: molten polymer dribbles during travel - retraction too weak. Layer shift: belt slips or a crashed head knocks the axis. Recoater jams: curled parts spike into the blade's path, or short-feed powder starves the spread. Nozzle clogs: degraded or contaminated polymer blocks the bore.",
              "The troubleshooting discipline is more examinable than the fault list: change one parameter at a time, print a cheap test coupon, compare, and log. A worked case: ABS brackets curling at corners - candidate causes ranked (bed adhesion, gradient, draft) - fix applied one at a time (clean bed + brim; then 100 degrees C chamber; then fan off) - coupon reprinted after each - the chamber fix moved corner lift from about 2 mm to under 0.2 mm. The loop diagram is the answer's spine: observe, hypothesise, change one knob, retest, log.",
              "Exam framing: 'common faults in AM and their remedies' is a guaranteed table question - write fault, cause, remedy rows (six minimum) and close with the one-parameter discipline. The scoring detail: distinguish machine faults (layer shift, recoater jam, clog) from process faults (warping, delamination, porosity) and from part-quality defects (Unit V's porosity types) - examiners watch for that three-way sorting.",
            ],
            keyTerms: [
              { term: "Warping", definition: "Thermal-gradient shrinkage lifting corners off the bed or distorting the part." },
              { term: "Delamination", definition: "Layers separating where bonding energy or temperature fell short." },
              { term: "Retraction", definition: "Pulling filament back during travel to stop stringing - 1-2 mm direct drive, 4-6 mm Bowden." },
              { term: "Test coupon", definition: "A cheap standard part printed to verify one parameter change." },
            ],
            diagram: {
              kind: "cycle",
              title: "The troubleshooting loop",
              caption: "One knob per iteration - the discipline that turns a fault list into a fix.",
              steps: [
                { label: "Observe the fault", note: "photograph + measure the failure" },
                { label: "Rank causes", note: "adhesion? gradient? energy?" },
                { label: "Change ONE parameter", note: "resist the batch-fix urge" },
                { label: "Print test coupon", note: "cheap, fast, comparable" },
                { label: "Compare + log", note: "before/after, then repeat" },
              ],
            },
            bullets: [
              "Warping/curling: thermal gradients - bed adhesion, heated chamber, brim, fan off.",
              "Delamination: under-exposure / under-energy / cold bed - raise the bonding knob.",
              "Stringing: weak retraction - 1-2 mm direct drive, 4-6 mm Bowden.",
              "Layer shift: belt slip or head crash - re-tension belts, check for spikes.",
              "Recoater jam: curled part or short powder feed - margin the feed, fix curl first.",
              "Discipline: one parameter per iteration, test coupon, logged comparison.",
            ],
            callout: {
              type: "warning",
              title: "Batch fixes destroy the diagnosis",
              body: "Changing chamber temperature, fan speed and bed adhesive in one iteration can fix the part and still teach you nothing. If two of the three were irrelevant, the next fault has no known fix. One knob, one coupon, one log line - the rule examiners want named.",
            },
            table: {
              caption: "Fault - cause - remedy.",
              headers: ["Fault", "Likely cause", "Remedy"],
              rows: [
                ["Curling corners (ABS)", "thermal gradient, poor adhesion", "90-110 C bed, chamber, brim"],
                ["Layer delamination", "under-exposure / under-energy", "raise exposure or energy density"],
                ["Stringing", "retraction too weak", "1-2 mm (direct) / 4-6 mm (Bowden)"],
                ["Layer shift", "belt slip, head crash", "re-tension, remove plate spikes"],
                ["Recoater jam (SLS/SLM)", "curled part, short powder feed", "fix curl; add feed margin"],
                ["Sparse/weak green part (BJ)", "binder under-saturation", "raise saturation, check jet health"],
              ],
            },
            examQuestions: [
              {
                q: "List the common faults in additive manufacturing machines, their causes and remedies, and explain the disciplined troubleshooting procedure.",
                marks: 14,
                outline: [
                  "Warping/curling: gradients -> bed/chamber heat, brim, orientation",
                  "Delamination: bonding energy short -> raise exposure/energy density",
                  "Stringing: retraction -> 1-2 mm direct / 4-6 mm Bowden",
                  "Layer shift: belts/crash -> re-tension, clear spikes",
                  "Recoater jam: curl or short feed -> fix curl, margin the feed",
                  "Machine vs process vs part-defect sorting",
                  "Procedure: observe -> rank causes -> change ONE parameter -> coupon -> log",
                ],
              },
              {
                q: "An SLS build shows a recoater jam mid-job. Give the diagnosis sequence.",
                marks: 7,
                outline: [
                  "Stop safely; inspect the powder bed for a spiking part",
                  "Check feed piston margin - short feed starves the spread",
                  "Check powder agglomeration (humidity) and sieve state",
                  "Remedy curl (part orientation/supports) before resuming; log the cause",
                  "Resume on a single test layer before restarting the full job",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Maintenance and calibration",
            body: [
              "AM machines drift, and drift shows up in parts before it shows up on screens. Daily: level or verify the bed (first-layer accuracy lives within ±0.05 mm), wipe optics and nozzle, sieve powder, check resin levels. Weekly: lubricate rails, tension belts, clean filters and fans. Monthly: calibrate laser power against a power meter (a 5-10% drift changes energy density by the same fraction - enough to walk out of the process window), verify scanner field calibration on SLM, check nozzle bore against wear. Annually: rebuild axes, realign galvos, replace sensors and seals.",
              "The worked case that justifies the schedule: nozzle wear. Printing abrasive carbon-fibre filament erodes a brass 0.4 mm bore toward 0.5 mm within one or two spools; every bead is now 25% wider, dimensions drift outward, surfaces roughen - and no slicer setting fixes a changed nozzle. The metal analogue: laser power drift of 10% moves E = P/(v x h x t) from 83 to 75 J/mm3 - still in the window, but a further 10% leaves it, and porosity appears. Calibration converts drift from a mystery defect into a scheduled task.",
              "Exam framing: 'explain maintenance of AM equipment' wants the four-cadence schedule with tasks, the drift examples with numbers (nozzle bore, laser power), and the closing link to quality: a machine that is not calibrated cannot hold the process window that Unit V's inspection checks for - maintenance is the upstream half of quality control. The pyramid ranks the cadences; the table turns them into a checklist.",
            ],
            keyTerms: [
              { term: "Bed levelling", definition: "Keeping nozzle-to-bed gap within ~±0.05 mm across the plate - the daily ritual." },
              { term: "Laser power calibration", definition: "Measuring output against a power meter; drift moves energy density directly." },
              { term: "Nozzle wear", definition: "Abrasive filaments enlarge the bore (0.4 -> 0.5 mm), widening beads and drifting dimensions." },
              { term: "Scanner field calibration", definition: "Verifying galvo positioning accuracy across the full build plate." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Maintenance cadence - daily to annual",
              caption: "Most frequent on top: daily rituals prevent the drifts that monthly calibrations would catch late.",
              tiers: [
                { label: "Daily", note: "bed level ±0.05 mm, optics, sieve powder, resin level" },
                { label: "Weekly", note: "rails, belts, filters, fans" },
                { label: "Monthly", note: "laser power meter, scanner field, nozzle bore" },
                { label: "Annual", note: "axis rebuild, galvo realign, seals + sensors" },
              ],
            },
            bullets: [
              "Daily: bed level (±0.05 mm), optics/nozzle wipe, powder sieve, consumable levels.",
              "Weekly: rails lubricated, belts tensioned, filters and fans cleaned.",
              "Monthly: laser power vs meter - 10% drift moves E from 83 to 75 J/mm3.",
              "Nozzle wear: abrasive filament erodes 0.4 mm bore toward 0.5 mm in 1-2 spools.",
              "Annual: axis rebuild, galvo realignment, sensor and seal replacement.",
              "Calibration turns drift into scheduled work - the upstream half of quality control.",
            ],
            callout: {
              type: "tip",
              title: "Log calibration against part numbers",
              body: "A calibration sheet that is not tied to builds proves nothing. Record power-meter readings against build IDs, so when porosity appears you can see the drift curve that caused it - traceability is why the log matters more than the measurement.",
            },
            table: {
              caption: "Cadence - task - drift prevented.",
              headers: ["Cadence", "Task", "Failure prevented"],
              rows: [
                ["Daily", "bed level, optics wipe, sieve", "first-layer failure, recoat defects"],
                ["Weekly", "rails, belts, filters", "layer shift, overheating"],
                ["Monthly", "laser power + scanner calibration", "out-of-window porosity"],
                ["Monthly", "nozzle bore check", "dimensional drift, rough walls"],
                ["Annual", "axis rebuild, galvo realign", "field distortion, positioning error"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the maintenance and calibration schedule of additive manufacturing equipment with tasks at each cadence, and justify it with drift examples (nozzle wear, laser power).",
                marks: 14,
                outline: [
                  "Daily: bed level ±0.05 mm, optics/nozzle wipe, powder sieve",
                  "Weekly: rails, belts, filters, fans",
                  "Monthly: laser power meter - 10% drift moves E 83 -> 75 J/mm3",
                  "Nozzle wear: 0.4 -> 0.5 mm bore from abrasive filament in 1-2 spools",
                  "Annual: axis rebuild, galvo realignment, sensors/seals",
                  "Drift appears in parts (porosity, dimensions) before displays",
                  "Calibration + traceable logs = upstream half of quality control",
                ],
              },
              {
                q: "How can a 10% laser power drop ruin a metal build even without changing any slicer settings?",
                marks: 7,
                outline: [
                  "E = P/(v x h x t) falls 10% with P - 83 -> ~75 J/mm3",
                  "Still inside a wide window, but margin is gone; another drop exits it",
                  "Result: lack-of-fusion porosity invisible until inspection",
                  "Hence monthly power-meter calibration against build logs",
                  "Nothing on the machine display changes - only coupons and density reveal the drift",
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
      title: "Post Processing",
      summary:
        "Unit V finishes the part: why post-processing is required, the techniques for support removal, cleaning, thermal treatment and surface finishing, then product quality - inspection and testing methods, the defects AM parts carry and their causes, and the qualification discipline that makes quality repeatable.",
      chapter: {
        number: "05",
        title: "From Green Part to Qualified Product",
        intro:
          "Unit V covers post-processing requirements and techniques - support removal, cleaning, thermal treatment, surface finishing - and product quality: inspection and testing, defects and their causes, and quality qualification.",
        inOneBreath:
          "A part fresh off the machine is a green, near-net body: supports attached, Ra of 8-15 µm, residual stress, and tenths-of-a-percent porosity. Post-processing chains support removal, cleaning, stress relief or HIP, surface finishing and inspection into one qualification story. Defects have named causes - lack of fusion, keyhole, balling, cracking - and each cause maps to a parameter fix. Quality is qualified with witness coupons, control charts and ISO/ASTM 52900 discipline, not inspected in at the end.",
        sections: [
          {
            number: "5.1",
            title: "Why post-processing is required",
            body: [
              "The as-built part is near-net, not finished. It carries supports that must come off; a surface of Ra 8-15 µm on laser-melted metal (against 0.8-1.6 µm machined); residual stress from steep thermal gradients that will distort the part the moment it leaves the plate; porosity of a few tenths of a percent that cuts fatigue life; and, in SLA, an undercured green state at 40-60% of final strength. None of these can be fixed at the printer - each is the reason the syllabus gives post-processing its own unit.",
              "A worked sequence shows why the order matters. A titanium SLM bracket: stress-relieve on the plate at 650-800 degrees C before cutting (cut first and it warps); wire-EDM off the plate; HIP at about 920 degrees C and 100-200 MPa argon to close internal pores (fatigue-critical parts); machine the bearing faces with 0.5-2 mm machining allowance planned at setup; bead-blast and inspect. Every step consumes a share of the budget - post-processing routinely reaches 30-60% of total part cost, which is why design-for-post-processing belongs beside design-for-supports.",
              "Exam framing: 'why is post-processing required in AM' is a 7-marker with a five-point answer (supports, surface, stress, porosity, cure) plus the cost sentence. The 14-mark version asks for the techniques: chain them in the right order and attach one number to each - the sequence diagram below is the answer's spine, and skipping the stress-relief-before-cut-off ordering is the classic slip it exists to prevent.",
            ],
            keyTerms: [
              { term: "Near-net", definition: "Close to final shape but not finished - AM's honest description of its own output." },
              { term: "Residual stress", definition: "Locked-in stress from thermal gradients; releases as distortion on cut-off." },
              { term: "Machining allowance", definition: "0.5-2 mm of extra material on critical faces for finish machining." },
              { term: "Post-cure", definition: "UV exposure that completes SLA polymerization from 40-60% green strength." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The post-processing chain (metal example)",
              caption: "Order is load-bearing: stress relief precedes cut-off, HIP precedes finishing.",
              stages: [
                { label: "Stress relief", note: "650-800 C, on plate" },
                { label: "Cut-off", note: "wire-EDM / saw" },
                { label: "HIP", note: "~920 C, 100-200 MPa Ar" },
                { label: "Heat treat / age", note: "alloy schedule" },
                { label: "Finish + inspect", note: "blast, machine, qualify" },
              ],
            },
            bullets: [
              "Five requirements: supports, surface (Ra 8-15 µm), residual stress, porosity, green cure.",
              "Stress relief at 650-800 C happens BEFORE plate cut-off - cutting first warps the part.",
              "HIP at ~920 C / 100-200 MPa argon closes internal pores for fatigue-critical parts.",
              "Plan 0.5-2 mm machining allowance on critical faces at setup time.",
              "Post-processing is 30-60% of total part cost - design for it like for supports.",
              "SLA green parts leave the vat at 40-60% strength - UV cure completes them.",
            ],
            callout: {
              type: "exam",
              title: "The order is the answer",
              body: "Listing post-processing techniques earns half marks; chaining them in the correct order with the reason earns the rest. Stress relief before cut-off (or the part warps), HIP before final finish (or the finish is damaged), inspection last (or nothing is proven).",
            },
            table: {
              caption: "As-built condition -> treatment -> outcome.",
              headers: ["As-built condition", "Treatment", "Outcome"],
              rows: [
                ["Supports attached", "break/saw/dissolve", "free part, scars to blend"],
                ["Ra 8-15 µm", "blast, tumble, machine", "Ra 1-6 µm or toleranced faces"],
                ["Residual stress", "stress relief 650-800 C", "stable geometry after cut-off"],
                ["Internal porosity", "HIP 920 C / 100-200 MPa", "closed pores, fatigue restored"],
                ["Green SLA part (40-60%)", "wash + UV post-cure", "full polymerization"],
                ["Oversize shrink part (BJ)", "sinter / infiltrate + machine", "final dimensions"],
              ],
            },
            examQuestions: [
              {
                q: "Why is post-processing required for additive manufactured parts? Explain the requirements and chain the techniques in the correct order for a metal SLM part.",
                marks: 14,
                outline: [
                  "As-built = near-net: supports, Ra 8-15 µm, residual stress, porosity, green cure",
                  "Stress relief 650-800 C BEFORE cut-off - cutting first releases distortion",
                  "Cut-off by wire-EDM; HIP ~920 C / 100-200 MPa closes internal pores",
                  "Ageing/heat treatment per alloy schedule",
                  "Surface: blast/tumble/machine with 0.5-2 mm allowance",
                  "Inspection last: dimensional + NDT + mechanical",
                  "Post-processing cost 30-60% of part cost - design for it",
                ],
              },
              {
                q: "Why do SLA parts need post-curing, and what changes during it?",
                marks: 7,
                outline: [
                  "Print exposure gels the part at 40-60% conversion - green state",
                  "UV post-cure completes crosslinking to full network",
                  "Strength rises to spec; shrinkage stabilises; Tg rises slightly",
                  "Wash first (IPA) - uncured resin poisons the cure chamber",
                  "Over-curing yellows and embrittles resins - cure to spec, not to maximum",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Support removal and cleaning",
            body: [
              "Support removal splits by class. Breakaway supports come off mechanically - cutters and pliers at 0.3-0.5 mm contact tips, band saws off PBF plates, milling fixtures for production parts - leaving 0.1-0.5 mm scars that blend by sanding. Soluble supports dissolve: PVA in water at 40-60 degrees C with agitation (one to three hours), HIPS in limonene around ABS. Metal supports come off by wire-EDM or saw from the build plate, then surface scars are ground. The design hand-off matters: support interfaces, tip sizes and gaps were chosen in Unit IV's process design so that this step is possible at all.",
              "Cleaning removes what the process left behind: depowdering SLS/BJ parts with compressed air and media blasting (glass bead 100-200 µm at 2-4 bar); washing SLA parts in two IPA baths - a dirty pre-wash then a clean rinse of 5-10 minutes each, because uncured resin on the surface poisons both the post-cure and the next bath; flushing trapped powder or resin out of internal channels before they harden in place. The channel rule is a design rule surfacing in post-processing: every hollow part needs its escape holes, or cleaning physically cannot finish the job.",
              "Exam framing: 'explain support removal and cleaning techniques' wants the class-by-class treatment (breakaway/soluble/metal), the two-bath IPA logic, the blast parameters, and the scars-and-blending consequence. The scoring line is the hand-off sentence: post-processing feasibility is designed in Unit IV - tip size, gap and escape holes decide whether this unit's labour is minutes or hours. Carry one number into the answer (a 40-60 degrees C water bath, or 2-4 bar blast pressure) so the framing paragraph ends with evidence instead of assertion.",
            ],
            keyTerms: [
              { term: "Support scar", definition: "0.1-0.5 mm remnant at support contact points; blended by sanding or blending passes." },
              { term: "Two-bath wash", definition: "Dirty IPA pre-wash then clean rinse (5-10 min each) for SLA parts." },
              { term: "Media blasting", definition: "Glass bead or shot at 2-4 bar to strip powder and soften surfaces." },
              { term: "Depowdering", definition: "Compressed air + brushing to free a part from unsintered/loose powder." },
            ],
            diagram: {
              kind: "compare",
              title: "Mechanical versus dissolution removal",
              caption: "Contact leaves scars that need blending; dissolution cleans but costs a second material and solvent.",
              left: {
                heading: "Mechanical (breakaway, saw, EDM)",
                items: [
                  "Cutters at 0.3-0.5 mm tips; band saw off plate",
                  "Wire-EDM for metal SLM plates",
                  "Leaves 0.1-0.5 mm scars to blend",
                  "Universal, cheap, labour-heavy",
                ],
              },
              right: {
                heading: "Dissolution (soluble supports)",
                items: [
                  "PVA in water 40-60 C, agitated, 1-3 h",
                  "HIPS in limonene around ABS",
                  "No contact - internal channels come out clean",
                  "Needs second material + solvent circulation",
                ],
              },
            },
            bullets: [
              "Breakaway: cutters/pliers/saw; scars 0.1-0.5 mm blended by sanding.",
              "Soluble: PVA + water (PLA), HIPS + limonene (ABS); heated, agitated baths.",
              "Metal: wire-EDM or saw off the plate; grind contact faces.",
              "SLA cleaning: two IPA baths, 5-10 min each - resin residue ruins post-cure.",
              "Depowder with air + glass-bead blast (100-200 µm media at 2-4 bar).",
              "Internal channels need escape holes by design - otherwise cleaning cannot finish.",
            ],
            callout: {
              type: "tip",
              title: "Scars are planned in Unit IV, paid for in Unit V",
              body: "A support tip of 0.3 mm blends off in seconds; a 1 mm tip tears a divot needing filler. Tip size and interface gap are set at slicing time - the post-processing labour was already decided when the supports were generated.",
            },
            table: {
              caption: "Removal / cleaning method - best for - risk.",
              headers: ["Method", "Best for", "Risk"],
              rows: [
                ["Cutters + pliers", "FDM breakaway supports", "tearing thin features"],
                ["Band saw / wire-EDM", "PBF plate cut-off", "kerm loss on critical faces"],
                ["Water bath (PVA)", "PLA internal channels", "swelling if soaked too long"],
                ["Limonene bath (HIPS)", "ABS complex internals", "solvent cost, long cycles"],
                ["Two-bath IPA wash", "SLA green parts", "resin carryover poisons cure"],
                ["Glass-bead blast", "SLS/BJ depowder + matte finish", "media embedment in soft polymers"],
              ],
            },
            examQuestions: [
              {
                q: "Explain support removal and cleaning techniques for additive manufactured parts, covering breakaway, soluble and metal supports, and the cleaning of SLA and powder-bed parts.",
                marks: 14,
                outline: [
                  "Breakaway: cutters at 0.3-0.5 mm tips; scars 0.1-0.5 mm blended",
                  "Soluble: PVA/water 40-60 C (PLA), HIPS/limonene (ABS), agitated baths",
                  "Metal: wire-EDM/saw off plate; grind contact zones",
                  "SLA: two IPA baths 5-10 min - resin carryover ruins post-cure",
                  "SLS/BJ: compressed air + glass-bead blast 100-200 µm at 2-4 bar",
                  "Channels: escape holes are the design precondition for cleaning",
                  "Feasibility designed at slicing - tip size and gap decide the labour",
                ],
              },
              {
                q: "Why must SLA parts be washed before post-curing?",
                marks: 7,
                outline: [
                  "Surface carries uncured liquid resin",
                  "Resin on the part cures into a sticky, tacky skin in the UV chamber",
                  "Resin carried into the cure unit contaminates it",
                  "Two-bath wash: dirty pre-wash, clean rinse, then cure",
                  "Trapped resin in cavities needs flushing - the same reason escape holes exist",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Thermal post-processing",
            body: [
              "Thermal treatments give AM parts their final material state, and each has a named purpose. Stress relief (Ti-6Al-4V at 650-800 degrees C for 2-3 hours in argon or vacuum, on the plate) relaxes the residual stress from melting gradients before cut-off. Hot isostatic pressing (about 920 degrees C and 100-200 MPa argon for 2-4 hours for Ti) closes internal porosity by simultaneous heat and gas pressure - the fatigue-restoring treatment for aerospace parts. Ageing/heat treatment develops the alloy's design microstructure (IN718 aged past 1200 MPa). Annealing FDM parts (PLA at 80-100 degrees C for 30-60 minutes) raises crystallinity and heat resistance at the cost of a few percent shrinkage. And the binder-jet route's debind-sinter-infiltrate sequence is itself thermal post-processing.",
              "The numbers deserve one worked chain: a Ti-6Al-4V bracket prints at 99.2% density with 40 µm lack-of-fusion pores; HIP at 920 degrees C / 100 MPa collapses the closed pores, restoring fatigue life toward wrought behaviour (often by an order of magnitude in crack-initiation-limited regimes); the stress relief at 650-800 degrees C earlier already prevented the distortion that cutting would have released. Note the sequencing logic again - relief before cut-off, HIP before final machining, because each treatment moves geometry slightly.",
              "Exam framing: 'explain thermal post-processing of AM parts' is a 14-marker: list stress relief, HIP, ageing/anneal, sinter/infiltrate with temperatures, times and purposes; state the sequencing rule (relief before cut-off, HIP before finish); and attach the fatigue argument to HIP. The common slip is quoting HIP without its pressure half - heat alone does not close pores; the 100-200 MPa argon does.",
            ],
            keyTerms: [
              { term: "Stress relief", definition: "650-800 C hold that relaxes residual stress before plate cut-off." },
              { term: "HIP", definition: "Hot isostatic pressing - ~920 C + 100-200 MPa argon closes internal pores." },
              { term: "Ageing", definition: "Precipitation heat treatment that develops the alloy's design strength (IN718 >1200 MPa)." },
              { term: "Annealing (FDM)", definition: "80-100 C bake that raises crystallinity and heat resistance; shrinks a few percent." },
            ],
            diagram: {
              kind: "flow",
              title: "Thermal sequence for a fatigue-critical Ti part",
              caption: "Relieve, cut, press, age - each treatment moves geometry, so order is fixed.",
              steps: [
                { label: "Stress relief", note: "650-800 C, 2-3 h, on plate" },
                { label: "Cut-off", note: "wire-EDM, part stable" },
                { label: "HIP", note: "920 C, 100-200 MPa Ar, 2-4 h" },
                { label: "Age", note: "alloy schedule, strength to spec" },
                { label: "Finish machine", note: "critical faces last" },
              ],
            },
            bullets: [
              "Stress relief: Ti 650-800 C, 2-3 h, argon/vacuum, before plate cut-off.",
              "HIP: ~920 C + 100-200 MPa argon, 2-4 h - closes internal porosity, restores fatigue.",
              "Ageing: IN718 aged past 1200 MPa; annealing FDM PLA at 80-100 C, 30-60 min.",
              "Binder jet: debind 400-600 C, sinter 1100-1360 C, or bronze infiltration ~1050-1100 C.",
              "Sequencing: relief before cut-off; HIP before final machining; finish last.",
              "HIP needs pressure, not just heat - closed pores collapse under 100-200 MPa argon.",
            ],
            callout: {
              type: "warning",
              title: "HIP closes closed pores only",
              body: "Hot isostatic pressing collapses pores that are internal - surface-connected pores and lack-of-fusion voids open to the surface simply let argon in and out. HIP complements, never replaces, a well-tuned process window.",
            },
            table: {
              caption: "Thermal treatments - conditions - purpose.",
              headers: ["Treatment", "Conditions (typical)", "Purpose"],
              rows: [
                ["Stress relief", "Ti 650-800 C, 2-3 h, on plate", "relax residual stress before cut-off"],
                ["HIP", "920 C, 100-200 MPa Ar, 2-4 h", "close internal pores, restore fatigue"],
                ["Ageing", "alloy schedule (IN718)", "develop design strength >1200 MPa"],
                ["Anneal (FDM)", "PLA 80-100 C, 30-60 min", "crystallinity + heat resistance"],
                ["Debind + sinter (BJ)", "400-600 C then 1100-1360 C", "densify green metal, 15-20% shrink"],
                ["Infiltration (BJ)", "bronze ~1050-1100 C", "densify porous sintered part"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the thermal post-processing techniques for AM parts - stress relief, HIP, ageing, annealing, sintering/infiltration - with typical conditions, purposes and correct sequencing.",
                marks: 14,
                outline: [
                  "Stress relief: Ti 650-800 C, 2-3 h, BEFORE plate cut-off",
                  "HIP: 920 C + 100-200 MPa argon, 2-4 h; closes internal pores",
                  "Fatigue restored toward wrought - crack-initiation pores eliminated",
                  "Ageing: IN718 past 1200 MPa; anneal: PLA 80-100 C, 30-60 min",
                  "Binder jet: debind 400-600 C, sinter 1100-1360 C / infiltrate bronze",
                  "Sequencing: relief -> cut-off -> HIP -> age -> finish machine",
                  "HIP fails on surface-connected pores - process window still matters",
                ],
              },
              {
                q: "Why does HIP restore fatigue life in AM metal parts?",
                marks: 7,
                outline: [
                  "Pores are crack-initiation sites under cyclic load",
                  "100-200 MPa argon at 920 C collapses closed internal pores",
                  "Crack-initiation-limited life often improves by an order of magnitude",
                  "Surface-connected pores unaffected - HIP complements good parameters",
                  "Verify with CT or a sectioned coupon and Archimedes density before and after",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Surface finishing techniques",
            body: [
              "As-built surfaces start rough - Ra about 12-20 µm on FDM, 10-15 µm on SLS, 8-15 µm on SLM, 1-5 µm on SLA - and every functional requirement (seals, fatigue, hygiene, optics) pushes them down. The finishing ladder, cheapest first: vibratory tumbling (2-6 hours to Ra about 3-6 µm, batch-friendly), bead or shot blasting (Ra 3-6 µm, matte, uniform), manual and belt sanding, vapour smoothing (solvent vapour reflows thermoplastics - ABS particularly), then precision routes: CNC machining of toleranced faces from 0.5-2 mm allowance, polishing to a shine, electroplating for conductivity and wear, painting and priming for appearance.",
              "Two techniques earn special exam mention because they solve what others cannot. Abrasive-flow machining pushes a viscoelastic media through internal channels - the only practical way to finish conformal-cooling passages and printed manifolds inside. Shot peening is not cosmetic: it leaves compressive residual stress on the surface, raising fatigue life - the rare finishing step that improves a mechanical property rather than merely an appearance number. Both belong in the 14-mark answer as the 'internal channels' and 'fatigue' rows of the finishing table.",
              "Exam framing: 'surface finishing of AM parts' wants the as-built Ra numbers per process, the ladder ordered by cost, and the technique-requirement matching (tolerance -> machining, gloss -> polishing/vapour, fatigue -> peening, internal channels -> abrasive flow). The scoring detail is the allowance sentence: finishing is only cheap if material for it was planned - a part printed to size has nothing left to machine.",
            ],
            keyTerms: [
              { term: "Tumbling", definition: "Vibratory batch finishing, 2-6 h to Ra ~3-6 µm - cheapest bulk route." },
              { term: "Abrasive-flow machining", definition: "Viscoelastic media pushed through internal channels - finishing for conformal passages." },
              { term: "Shot peening", definition: "Media impact leaving compressive surface stress - raises fatigue life." },
              { term: "Machining allowance", definition: "0.5-2 mm extra material on faces destined for finish machining." },
            ],
            diagram: {
              kind: "fork",
              title: "What does the surface need?",
              caption: "Match the finishing technique to the requirement - four requirements, four routes.",
              start: "Surface requirement",
              branches: [
                { label: "Dimensional tolerance", outcome: "CNC machine the allowed faces from 0.5-2 mm stock", good: true },
                { label: "Cosmetic gloss", outcome: "vapour smoothing / polishing / plating", good: true },
                { label: "Fatigue life", outcome: "shot peening for compressive surface stress", good: true },
                { label: "Internal channels", outcome: "abrasive-flow media through the passage", good: true },
              ],
            },
            bullets: [
              "As-built Ra: FDM 12-20 µm, SLS 10-15 µm, SLM 8-15 µm, SLA 1-5 µm.",
              "Ladder: tumble (2-6 h to ~3-6 µm) -> blast -> sand -> vapour smooth -> machine -> plate/paint.",
              "Machining needs 0.5-2 mm allowance planned at slicing - no allowance, no tolerance.",
              "Abrasive flow is the only practical finish for internal cooling channels.",
              "Shot peening adds compressive stress - a fatigue gain, not cosmetics.",
              "Match requirement to technique; do not polish a face that needs a tolerance.",
            ],
            callout: {
              type: "tip",
              title: "Finish is bought twice - once in the file, once at the bench",
              body: "Machining allowance, orienting cosmetic faces away from supports, and teardropping channels all happen at slicing time. A part designed without finishing stock converts every later Ra requirement into scrap risk.",
            },
            table: {
              caption: "Technique - result - caveat.",
              headers: ["Technique", "Typical result", "Caveat"],
              rows: [
                ["Vibratory tumbling", "Ra 3-6 µm, batch", "edges rounded - detail loss"],
                ["Bead blast", "Ra 3-6 µm, matte uniform", "media embeds in soft polymers"],
                ["Vapour smoothing", "glossy sealed ABS", "dimensional swell ~1-2%"],
                ["CNC machining", "Ra 0.8-1.6 µm + tolerance", "needs 0.5-2 mm allowance"],
                ["Abrasive flow", "internal Ra to ~1-2 µm", "media escape holes required"],
                ["Shot peening", "compressive stress, matte", "dims change µm-scale; mask seals"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the surface finishing techniques for AM parts with their achievable roughness, and match techniques to requirements (tolerance, cosmetics, fatigue, internal channels).",
                marks: 14,
                outline: [
                  "As-built Ra: FDM 12-20, SLS 10-15, SLM 8-15, SLA 1-5 µm",
                  "Tumbling: batch, 2-6 h to Ra 3-6 µm; edges rounded",
                  "Blasting: matte uniform Ra 3-6 µm; vapour smoothing glosses ABS",
                  "Machining: Ra 0.8-1.6 µm and tolerance, from 0.5-2 mm allowance",
                  "Abrasive flow: only practical internal-channel finish (~1-2 µm)",
                  "Shot peening: compressive stress -> fatigue gain",
                  "Requirement-matching rule beats technique lists",
                ],
              },
              {
                q: "Why can shot peening improve a mechanical property while polishing cannot?",
                marks: 7,
                outline: [
                  "Peening plastically deforms the surface -> compressive residual stress",
                  "Compressive stress delays fatigue crack opening and initiation",
                  "Polishing removes asperities (fewer initiation sites) but adds no stress",
                  "Combined: polish (Ra) + peen (stress) is the fatigue-grade finish",
                  "Mask sealing faces and toleranced bores first - peening shifts dimensions at the µm scale",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Inspection and testing",
            body: [
              "Inspection verifies geometry, internal integrity and mechanical behaviour. Dimensional: callipers and micrometers for quick checks; coordinate measuring machines (CMM) for toleranced features; structured-light or laser 3D scanning overlays the part on CAD (accuracy about ±0.02-0.05 mm); industrial X-ray computed tomography sees inside - pores, channels, trapped powder - and maps porosity by location. Surface/NDE: dye penetrant finds surface-connected cracks, ultrasonics find internal discontinuities, radiography shows density variations. Mechanical: tensile coupons per ASTM E8/ISO 527, hardness, and fatigue specimens - built as witness coupons in the same job as the parts they represent.",
              "The density check is the standard AM numerical, done by Archimedes. Worked example: a Ti-6Al-4V coupon weighs 20.00 g in air and 15.49 g submerged in water; volume = buoyancy = 4.51 cm3, so density = 20.00/4.51 = 4.43 g/cm3 - fully dense against the alloy's 4.43. A porous twin weighs 19.90 g and displaces the same envelope (submerged 15.39 g), giving 19.90/4.51 = about 4.41 g/cm3, or 99.5% - the LPBF acceptance line. One calculation connects weighing, geometry and the process window of Unit IV.",
              "Exam framing: 'explain inspection and testing of AM products' is a 14-marker: dimensional (CMM, scanning, CT), NDE (penetrant, ultrasonic, radiographic), mechanical (tensile, hardness, fatigue), density (Archimedes with the worked number), and the witness-coupon principle - coupons travel with every build because part properties are process-dependent in a way conventional QA never faced. Sort the methods by what they find: surface, internal, mechanical, density.",
            ],
            keyTerms: [
              { term: "CMM", definition: "Coordinate measuring machine - touch-probe dimensional verification of toleranced features." },
              { term: "Industrial CT", definition: "X-ray tomography revealing internal pores, channels and trapped powder." },
              { term: "Dye penetrant", definition: "Capillary-contrast NDE for surface-connected cracks." },
              { term: "Witness coupon", definition: "Standard test specimen built with each part batch, tested as its proxy." },
            ],
            diagram: {
              kind: "flow",
              title: "The inspection chain",
              caption: "Geometry, internals, mechanics, density - each method finds one class of nonconformance.",
              steps: [
                { label: "Visual + dimensional", note: "calliper, CMM, 3D scan vs CAD" },
                { label: "Internal NDE", note: "CT, ultrasonic, radiography" },
                { label: "Surface NDE", note: "dye penetrant for cracks" },
                { label: "Mechanical coupons", note: "tensile, hardness, fatigue" },
                { label: "Density (Archimedes)", note: ">= 99.5% for LPBF acceptance" },
              ],
            },
            bullets: [
              "Dimensional: CMM for tolerances; 3D scanning overlays CAD at ±0.02-0.05 mm.",
              "CT sees inside: pores by location, channel blockage, trapped powder.",
              "NDE: dye penetrant (surface cracks), ultrasonic (internal), radiography (density).",
              "Mechanical: ASTM E8/ISO 527 tensile coupons; hardness; fatigue specimens.",
              "Archimedes density: 20.00 g / 4.51 cm3 = 4.43 g/cm3 - 100% dense Ti-6Al-4V.",
              "Witness coupons ride with every build - properties are process-dependent.",
            ],
            callout: {
              type: "exam",
              title: "Sort inspection methods by what they find",
              body: "The examiner's table has four rows: surface, internal, dimensional, mechanical - and one method per row is a complete answer. Mixing them (ultrasonics for dimensions, CMM for pores) is the giveaway slip; the Archimedes calculation is the numerical that accompanies the table.",
            },
            codeExample: {
              language: "python",
              caption: "archimedes.py - relative density from two weighings",
              code: `rho_water = 1.0                       # g/cm3 (approx.)

def rel_density(m_air, m_sub, rho_true):
    vol = (m_air - m_sub) / rho_water          # buoyancy = volume
    rho = m_air / vol
    return rho, rho / rho_true * 100

print(rel_density(20.00, 15.49, 4.43))   # (4.43, 100.0) - dense
print(rel_density(19.90, 15.39, 4.43))   # (4.41, 99.5) - LPBF limit`,
            },
            examQuestions: [
              {
                q: "Explain the inspection and testing methods for AM products - dimensional, internal, surface, mechanical and density - with one worked density calculation (20.00 g in air, 15.49 g submerged, true density 4.43 g/cm3).",
                marks: 14,
                outline: [
                  "Dimensional: CMM + 3D scanning vs CAD (±0.02-0.05 mm)",
                  "Internal: industrial CT maps pores, channels, trapped powder",
                  "Surface: dye penetrant; internal NDE: ultrasonic, radiography",
                  "Mechanical: ASTM E8 tensile, hardness, fatigue on witness coupons",
                  "Archimedes: volume = 20.00-15.49 = 4.51 cm3; rho = 4.43 g/cm3 - 100%",
                  "Porous twin 19.90/4.51 = 4.41 -> 99.5% (LPBF acceptance line)",
                  "Witness coupons ride with every build - process-dependent properties",
                ],
              },
              {
                q: "Why do AM parts need witness coupons while machined parts often do not?",
                marks: 7,
                outline: [
                  "AM properties depend on in-process parameters per build",
                  "Machining removes material from stock of known certified properties",
                  "Coupon from the same build proxies the part's actual material state",
                  "Supports lot traceability and qualification per ISO/ASTM discipline",
                  "1-2 coupons per build is standard practice - cheap insurance on the whole batch",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Defects and their causes",
            body: [
              "AM defects sort into families by cause, and the sorting is the exam answer. Energy-side porosity: lack-of-fusion voids - irregular, between tracks, from energy density below the window; keyhole porosity - spherical, inside tracks, from energy above the window; gas porosity - small spherical pores from gas dissolved in the powder or trapped argon. Geometry-side: balling (melt pool breaks into droplets at excessive scan speed - Rayleigh instability), stair-stepping (finite layers on shallow angles), support scars. Thermal-side: cracking (hot cracking in re-welding-prone alloys, residual-stress cold cracking), delamination (interlayer bond failure), warping and distortion (gradient-driven). Powder-side: oxide inclusions and spread defects from humid or agglomerated powder.",
              "The cause-remedy mapping gives the table its teeth. Lack of fusion -> raise energy density or lower speed. Keyhole -> lower power or raise speed. Balling -> reduce speed, check overlap. Cracking -> preheat plate, switch alloy strategy, stress-relieve promptly. Delamination -> raise exposure/energy or bed temperature. Porosity from powder -> dry, sieve, blend, inert storage. Each defect is diagnosable from its shape before its cause is confirmed - irregular voids between tracks read differently from spherical pores inside tracks, and CT or a sectioned coupon tells them apart in minutes.",
              "Exam framing: 'defects in AM parts and their causes' is the Unit V staple (7 or 14 marks): name six minimum defects, sort them by cause family, give the remedy for each, and include the energy-window argument (below the window = lack of fusion, above = keyhole) with numbers. The common slip: writing 'porosity' as one defect - examiners want the three porosities separated, because their remedies are opposite.",
            ],
            keyTerms: [
              { term: "Lack of fusion", definition: "Irregular voids between tracks when energy density is below the process window." },
              { term: "Keyhole porosity", definition: "Spherical pores from an over-deep melt pool at excess energy density." },
              { term: "Balling", definition: "Melt track breaking into droplets at excessive speed - Rayleigh instability." },
              { term: "Hot cracking", definition: "Intergranular tearing during solidification in crack-prone alloys." },
            ],
            diagram: {
              kind: "compare",
              title: "Energy-side versus thermal-side defects",
              caption: "Same symptom (bad part), different physics - and the remedies point in opposite directions.",
              left: {
                heading: "Energy-side (process window)",
                items: [
                  "Lack of fusion: irregular voids, E too low",
                  "Keyhole pores: spherical, E too high",
                  "Balling: track humping at high speed",
                  "Remedy: move E back inside the window",
                ],
              },
              right: {
                heading: "Thermal / geometry-side",
                items: [
                  "Cracking: hot/cold cracks, steep gradients",
                  "Delamination: layers separate, bond failed",
                  "Warping: gradient shrinkage distortion",
                  "Remedy: preheat, stress relief, orientation",
                ],
              },
            },
            bullets: [
              "Lack-of-fusion: irregular voids between tracks - raise energy density.",
              "Keyhole porosity: spherical pores inside tracks - lower power or raise speed.",
              "Gas porosity: dissolved/trapped gas in powder - better atomization, dry powder.",
              "Balling: droplet-instability humping - reduce scan speed, check hatch overlap.",
              "Cracking/delamination/warping: thermal family - preheat, stress relief, orientation.",
              "Porosity is three defects with opposite remedies - never write it as one.",
            ],
            callout: {
              type: "exam",
              title: "Shape diagnoses the defect",
              body: "Irregular voids between tracks = lack of fusion (need more energy). Spherical pores inside tracks = keyhole (need less). The section or CT image decides which knob to turn - guessing reverses the fix and doubles the porosity. That diagnostic sentence is the marks.",
            },
            table: {
              caption: "Defect - cause - remedy.",
              headers: ["Defect", "Cause", "Remedy"],
              rows: [
                ["Lack-of-fusion voids", "E below window", "raise power / lower speed"],
                ["Keyhole pores", "E above window", "lower power / raise speed"],
                ["Gas porosity", "gas in powder/melt", "better atomization, dry storage"],
                ["Balling", "excess scan speed", "reduce speed, fix overlap"],
                ["Hot/cold cracking", "alloy + steep gradients", "plate preheat, prompt stress relief"],
                ["Delamination", "interlayer bond failed", "raise energy/exposure, bed temp"],
                ["Warping", "thermal gradients", "chamber heat, orientation, supports"],
                ["Spread defects", "humid/agglomerated powder", "dry, sieve, blend, inert storage"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the defects occurring in AM parts and their causes, sorted by cause family, with a remedy for each - including the distinction between lack-of-fusion and keyhole porosity.",
                marks: 14,
                outline: [
                  "Energy family: lack of fusion (E low, irregular voids) -> raise E",
                  "Keyhole porosity (E high, spherical pores) -> lower E - opposite remedy",
                  "Gas porosity: powder/melt gas -> atomization and drying",
                  "Balling: Rayleigh instability at speed -> reduce speed/overlap",
                  "Thermal family: cracking, delamination, warping -> preheat, relief, orientation",
                  "Powder family: oxide inclusions, spread defects -> dry/sieve/blend",
                  "Diagnose by pore shape before touching parameters",
                ],
              },
              {
                q: "A sectioned coupon shows spherical pores inside scan tracks. Diagnose and prescribe.",
                marks: 7,
                outline: [
                  "Spherical + inside tracks = keyhole porosity",
                  "Cause: energy density above the window - melt pool drills",
                  "Fix: lower power or raise speed to bring E down",
                  "Verify with an Archimedes density coupon after the change",
                  "Do not confuse with gas porosity - also spherical, but smaller and evenly spread",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Quality standards and qualification",
            body: [
              "AM quality discipline has a vocabulary and a ladder. ISO/ASTM 52900 fixes the terminology (process families, defect names); the 52900-family standards cascade into material and process specifications. Qualification climbs in stages: qualify the machine (geometry, laser/scanner accuracy, atmosphere), qualify the material (powder chemistry, PSD, flow - the Unit III properties), qualify the process (frozen parameter set producing coupons that meet mechanical spec), then qualify parts per geometry. After qualification, every build runs witness coupons, and control charts track density and strength over time.",
              "The numbers of the discipline: one or two tensile coupons per build as standard witness practice; density tracked by Archimedes against the 99.5% LPBF line; any parameter change - power, powder lot, layer thickness - triggers requalification coupons, because a frozen process is only frozen until someone touches a knob. Traceability binds the chain: powder lot number, build file, parameter log and coupon results are stored against each serialised part - the audit trail aerospace and medical customers audit to.",
              "Exam framing: 'explain quality control of AM products' should connect three levels the syllabus separates: inspection (5.5 - part-level finding), qualification (this section - process-level proving), and maintenance/calibration (Unit IV - machine-level prevention). The full-mark sentence: quality in AM is qualified, not inspected in - the coupon result proves the process, the process proves the parts. Confusing inspection with qualification is the slip examiners hunt for.",
            ],
            keyTerms: [
              { term: "ISO/ASTM 52900", definition: "The AM terminology standard - process families, defect vocabulary." },
              { term: "Process qualification", definition: "Frozen parameters + coupons meeting spec, proven before parts ship." },
              { term: "Requalification", definition: "Coupon batch after any parameter or powder-lot change." },
              { term: "Traceability", definition: "Powder lot + build file + parameter log + coupon results per serialised part." },
            ],
            diagram: {
              kind: "cycle",
              title: "The qualification loop",
              caption: "Freeze, prove, build, chart, react - quality as a loop, not a gate.",
              steps: [
                { label: "Freeze parameters", note: "machine + material qualified" },
                { label: "Build with coupons", note: "1-2 witness coupons per job" },
                { label: "Test + chart", note: "tensile, density vs 99.5% line" },
                { label: "React", note: "in-control: ship; drift: investigate" },
                { label: "Requalify", note: "any parameter change restarts coupons" },
              ],
            },
            bullets: [
              "ISO/ASTM 52900: vocabulary; the standard family cascades to materials and processes.",
              "Ladder: qualify machine -> material -> process -> part.",
              "Witness coupons: 1-2 tensile bars per build, tested against mechanical spec.",
              "Control charts track density (99.5% line) and strength build over build.",
              "Any parameter/powder change triggers requalification coupons.",
              "Traceability: powder lot + build file + parameter log + coupon results per part.",
            ],
            callout: {
              type: "exam",
              title: "Inspection finds, qualification proves",
              body: "If asked about quality, keep the levels straight: Unit IV maintenance prevents drift, Unit V section 5.5 inspection finds nonconformance, and qualification proves the process so neither is needed often. 'Quality is qualified, not inspected in' is the sentence that separates the full-mark answer from the checklist.",
            },
            table: {
              caption: "Qualification stage - check - artifact.",
              headers: ["Stage", "What is checked", "Artifact"],
              rows: [
                ["Machine qualification", "geometry, laser/scanner, atmosphere", "calibration report"],
                ["Material qualification", "PSD, flow, chemistry, moisture", "powder certificate"],
                ["Process qualification", "frozen parameters -> coupon spec", "coupon test report"],
                ["Part qualification", "per-geometry inspection + NDE", "first-article report"],
                ["Serial production", "witness coupons + control charts", "per-build traceability file"],
              ],
            },
            examQuestions: [
              {
                q: "Explain quality qualification for additive manufacturing: the ISO/ASTM 52900 vocabulary, the qualification ladder, witness coupons, control charts and traceability - and distinguish inspection from qualification.",
                marks: 14,
                outline: [
                  "ISO/ASTM 52900 fixes terminology; family cascades to material/process specs",
                  "Ladder: machine -> material -> process -> part qualification",
                  "Witness coupons: 1-2 tensile bars per build; density vs 99.5% line",
                  "Control charts track density/strength; drift triggers investigation",
                  "Any parameter/powder change -> requalification coupons",
                  "Traceability: powder lot + parameters + coupons per serialised part",
                  "Inspection finds defects; qualification proves the process - not interchangeable",
                ],
              },
              {
                q: "Why does changing the powder lot require requalification even with identical machine parameters?",
                marks: 7,
                outline: [
                  "Powder PSD/flow/chemistry define the process window (Unit III)",
                  "A new lot shifts melt behaviour even at the same E = P/(v·h·t)",
                  "Coupons verify the frozen parameters still meet mechanical spec",
                  "Otherwise the process is 'frozen' around a different material",
                  "Traceability records both lots, so drift is traceable build over build",
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
      heading: "Exam weightage - where to spend the hours",
      weightedTopics: [
        { topic: "The six techniques (SLA, LOM, FDM, SLS, SLM, binder jetting)", weight: "≈ 14-16 marks", note: "The heart of the paper - one technique in depth with sketch, parameters and a worked number." },
        { topic: "AM process chain, classification, additive vs conventional", weight: "≈ 10-12 marks", note: "Guaranteed opener - write the eight-step chain and the break-even arithmetic." },
        { topic: "Post-processing, inspection, defects and causes", weight: "≈ 10-12 marks", note: "Unit V staple - defect-cause-remedy tables and the Archimedes calculation." },
        { topic: "STL format, CAD translation, data loss", weight: "≈ 8-10 marks", note: "Numerical-rich: 50 bytes/triangle, sagitta, ASCII vs binary." },
        { topic: "Materials: polymers, metals, ceramics, powder properties", weight: "≈ 8-10 marks", note: "Property tables with numbers (Tg, UTS, PSD, flow time)." },
        { topic: "Equipment: parameters, bonding mechanisms, process design", weight: "≈ 8-10 marks", note: "Energy density E = P/(v·h·t), cusp calculation, mechanism-knob mapping." },
        { topic: "Faults, troubleshooting and maintenance", weight: "≈ 6-8 marks", note: "Fault-cause-remedy tables; one-parameter discipline named." },
        { topic: "Application domains", weight: "≈ 4-6 marks", note: "Domain + technique + driver in one line each - quick marks." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for sketches and self-made comparison tables. Every technique deserves one hand-drawn diagram from memory - the sketch earns half the marks in this subject, and drawing from memory is the only way to keep it.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the principle and the data", tasks: ["ISO/ASTM definition + three traits; contrast with subtractive", "Eight-step process chain with one failure per step", "Classification: seven families by material state and bonding", "STL arithmetic: 84 + 50 bytes/triangle; sagitta calculation", "Formats table: native -> STEP -> STL/AMF/3MF and what each loses"] },
        { week: "Week 2", focus: "Unit II - techniques part 1", tasks: ["SLA: vat sketch, cure-depth equation with a worked number", "LOM: loop + no-support logic + sealing requirement", "FDM: head sketch, PLA/ABS temperatures, 45-degree rule, z-weakness", "Draw all three diagrams from memory, twice"] },
        { week: "Week 3", focus: "Unit II - techniques part 2 + selection", tasks: ["SLS: preheat logic (160-175 C vs 186 C), no-support nesting", "SLM: energy density worked calculation; SLS vs SLM contrast", "Binder jetting: green part, sinter/infiltrate routes, 15-20% shrink", "Process selection: three cases (dental pattern, nylon duct, Ti implant)", "Application domains: eight entries as domain + technique + driver"] },
        { week: "Week 4", focus: "Unit III - materials", tasks: ["Polymer table: Tg/Tm/strength for PLA, ABS, PA12, photopolymer", "Metal alloys: four with UTS + application; stress-relief-before-cut-off logic", "Ceramics: green routes + 22% shrinkage worked calculation", "Powder: atomization routes, five desired properties with numbers", "Support materials: breakaway vs soluble with pairs and gaps"] },
        { week: "Week 5", focus: "Unit IV - equipment", tasks: ["Five-subsystem stack with one hardware + one number each", "Parameters: two groups + build-time calculation (7.2 h vs 8.9 h)", "Bonding mechanisms: four, with knob and failure signature each", "Process design rules: 45 degrees, teardrop, walls, escape holes, cusp table", "Fault-cause-remedy table (6 rows) + troubleshooting loop"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Post-processing chain in order; why relief precedes cut-off", "Thermal treatments with conditions (stress relief, HIP, ageing)", "Inspection: four-row method table + Archimedes worked number", "Defects sorted by cause family; lack-of-fusion vs keyhole", "Qualification ladder + witness coupons; two full self-timed papers"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every technique with its sketch - vat for SLA, two pistons for SLS, extrusion head for FDM. The diagram earns half the marks before a word of prose.",
        "Carry one worked number into every answer: 83 J/mm3 energy density, 193 µm cure depth, 4.43 g/cm3 Archimedes density, 50 bytes per STL triangle. Numbers are what turn a definition into an explanation.",
        "For comparison questions, draw the table first (technique, material, layer, supports, application) and fill prose around it - examiners grade tables faster and fairer.",
        "State the bonding mechanism before the parameters: photopolymerization, melting, sintering or adhesion - then the knob it is tuned by.",
        "Sort defects by cause family (energy, thermal, powder, geometry) - and never write 'porosity' as one defect; lack-of-fusion and keyhole have opposite remedies.",
        "In selection questions, walk the decision tree aloud: material -> geometry -> supports -> budget. The elimination trail is the marks, not the final name.",
        "Quote the sequencing rules verbatim: stress relief before cut-off; HIP before finishing; repair before slicing; qualification before production.",
        "Time-box: 2-mark at most 4 minutes, 7-mark at most 12, 14-mark at most 25 - and attempt the technique questions first while the sketches are fresh.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and the slips that cost marks",
      body: [
        "Last day: do not learn anything new. Redraw the six technique diagrams from memory, recite the two tables that carry the paper (six-technique comparison; defect-cause-remedy), and run the five worked numbers once each - STL size, cure depth, energy density, sinter shrinkage, Archimedes density. Then read your own callouts and common slips below, and sleep; this subject rewards organised recall, not late cramming.",
        "In the hall, spend the first two minutes choosing questions and writing tiny skeletons (four points each) beside them. Every long answer here has the same spine - definition, sketch, parameters with numbers, application or failure - so the skeleton is most of the battle.",
      ],
      bullets: [
        "Writing 'porosity' as one defect - it is three (lack of fusion, keyhole, gas) with opposite remedies.",
        "Quoting Tm as a polymer's heat limit - service temperature is judged at Tg (PLA fails near 60 C, melts near 150-180 C).",
        "Saying SLM and DMLS are unrelated processes - modern DMLS machines also fully melt; the name is legacy.",
        "Forgetting the pressure in HIP - heat alone does not close pores; ~100-200 MPa argon does.",
        "Stress relief after cut-off - the part warps the moment stress releases; relief happens on the plate.",
        "Confusing binder jetting with material jetting - one glues powder, the other jets whole cured droplets.",
        "Missing the 50-bytes-per-triangle STL arithmetic - the most predictable numerical in the paper.",
        "Orienting parts for speed instead of load path - z-direction bonds are the weak plane and the examiner knows it.",
      ],
    },
  ],
};
