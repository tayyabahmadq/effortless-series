/**
 * Academics - RGPV ME-802(C) VIII-semester elective: Machine Tool Design.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me802c: AcademicSubject = {
  id: "me-802-c",
  code: "ME-802(C)",
  title: "Machine Tool Design",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to machine tool design: classification and structural fundamentals, main and feed drive design with speed diagrams and ball screws, guideway engineering from hydrostatics to rolling guides, CNC controls and laser metrology, and the construction of lathes, machining centers, grinders, EDM and gear hobbing machines.",
  description:
    "Five units walk from what a machine tool is - accuracy, stiffness, damping, beds and columns - through the design of main drives with geometric speed series and ray diagrams, feed drives with preloaded ball screws, spindle bearing arrangements and CNC servo loops. Unit III sinks into guideways: hydrodynamic wedges, hydrostatic pockets, linear rolling guides and the stick-slip problem. Unit IV pairs CNC interpolators and feedback devices with alignment tests, laser interferometry and error compensation. Unit V dissects specific machines - turning centers, VMC/HMC/5-axis, grinders, EDM, gear hobbers - and closes with the Indian machine tool industry and future trends. Every section pairs theory with a redrawable diagram, a worked numerical or table, and the questions RGPV actually asks.",
  accentColor: "#fb7185",
  emoji: "MT",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Fundamentals of Machine Tools",
      summary:
        "The vocabulary and physics every later unit builds on: classification of machine tools and surface generation, accuracy and its standards, stiffness of the structural loop, damping and machine tool chatter, and the design of beds, columns and housings.",
      chapter: {
        number: "01",
        title: "Fundamentals of Machine Tools",
        intro:
          "Unit I defines the machine tool as a generator of surfaces and gives the axes along which all machines are classified. It then quantifies what a good machine must deliver - accuracy, precision and repeatability - and shows how stiffness of the structural loop and damping of the structure decide whether those accuracies survive cutting forces. The unit closes with the heavy iron itself: beds, columns and housings, their materials, sections and thermal behaviour.",
        inOneBreath:
          "A machine tool holds tool and workpiece in a controlled kinematic relationship and generates surfaces by forming or by generating; machines are classified by degree of generalization, automation, cutting motion, size and accuracy class; accuracy is closeness to truth while repeatability is spread, and errors come from geometry, assembly, thermal growth, load deflection and wear; stiffness obeys series springs so the weakest joint in the tool-to-workpiece loop dominates; damping - mostly joint friction - decides whether regenerative chatter stabilizes; and beds and columns made of cast iron, welded steel or epoxy granite must resist static, dynamic and thermal loads through closed ribbed sections.",
        sections: [
          {
            number: "1.1",
            title: "Classification of machine tools and surface generation",
            body: [
              "A machine tool is a power-driven, non-portable machine that holds a cutting tool and a workpiece in a defined kinematic relationship and removes material to generate a surface of specified geometry. Classification proceeds along four independent axes. By degree of specialization: general purpose machines such as the engine lathe, radial drill and knee mill; special purpose machines such as capstan and turret lathes and single-spindle automats; and single purpose machines such as transfer lines and deep-hole rigs. By automation: manually operated, tracer controlled, NC and CNC. By size and accuracy class: production, precision and ultra-precision grades such as jig borers.",
              "By cutting motion, machines fall into rotating-work machines (turning on a lathe, boring when the work spins), rotating-tool machines (drilling, milling, grinding) and rotating-both machines (gear hobbing, thread grinding). Surface production uses two principles. In forming, the cutting edge itself carries the finished profile - a form turning tool or a shaped grinding wheel. In generating, the profile emerges from the coordinated kinematic relation of tool and work: a lathe feed generates a cylinder, a hob generates an involute flank. Most industrial cuts combine both principles, which is why kinematic errors print directly onto the part.",
              "Structurally, machines divide into open and closed frames. A lathe bed carrying headstock, carriage and tailstock is an open C-frame: the cutting force loop closes through the torsional stiffness of the bed, which is why beds are deep, ribbed castings. A gantry or double-column machine closes the loop symmetrically and is the natural shape for large planers, jig borers and big machining centers. A disciplined design habit is to state, for any machine, its elementary motions, its structural loop from tool tip to workpiece, and its accuracy class - classification is the first act of machine tool design.",
            ],
            bullets: [
              "General vs special vs single purpose: flexibility falls and output rises along the sequence - match the machine class to batch size and product life.",
              "Forming: the cutting edge carries the final profile; generating: the profile arises from coordinated tool-work motion - most real cuts combine both.",
              "Rotating-work (turning), rotating-tool (drilling, milling, grinding) and rotating-both (hobbing) families cover essentially every machine tool.",
              "Open C-frames resist cutting loads through bed bending and torsion; closed gantry frames load the structure symmetrically and suit large machines.",
              "Accuracy classes - production, precision, ultra-precision (jig boring, jig grinding) - set the tolerance band every subsystem of the machine must hold.",
            ],
            table: {
              caption: "Machine tool families by primary cutting motion.",
              headers: ["Family", "Workpiece motion", "Tool motion", "Typical machines"],
              rows: [
                ["Turning", "Rotates", "Translates", "Center lathe, turret lathe, turning center"],
                ["Boring", "Fixed (or rotates)", "Rotates and translates", "Horizontal boring mill, VBM"],
                ["Drilling", "Fixed", "Rotates and translates", "Radial drill, machining center"],
                ["Milling", "Translates", "Rotates", "Knee mill, VMC, HMC"],
                ["Grinding", "Rotates or fixed", "Rotates", "Cylindrical, surface, centerless grinders"],
                ["Gear generating", "Rotates (indexing)", "Rotates (hob/ cutter)", "Hobbing and gear shaping machines"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Matching the machine class to a production order",
              caption:
                "The oldest selection decision in the subject - and a favourite interview question.",
              start: "A component order arrives: quantity, variety and changeover frequency known",
              branches: [
                {
                  label: "General purpose machines",
                  outcome:
                    "Handles any job within capacity; slowest per part - right for small varied batches and toolrooms.",
                  good: true,
                },
                {
                  label: "Special purpose (turret, automats)",
                  outcome:
                    "Faster, semi-skilled friendly; economical for medium runs of similar parts.",
                  good: true,
                },
                {
                  label: "Single purpose / transfer line",
                  outcome:
                    "Highest rate; a product design change can strand the investment - only for huge stable volumes.",
                  good: false,
                },
                {
                  label: "CNC machining / turning center",
                  outcome:
                    "Programmable flexibility plus automation; the default modern answer across batch sizes.",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to classify machine tools, name the axis of classification before listing examples: 'by degree of generalization, by automation, by cutting motion, by structure'. Examiners award the grouping and the basis, not the examples alone.",
            },
            keyTerms: [
              {
                term: "General purpose machine",
                definition: "A machine adaptable to many jobs within its size range, e.g. an engine lathe or radial drilling machine.",
              },
              {
                term: "Generating",
                definition: "Surface production from the kinematic relation between tool and work, e.g. a lathe feed generating a cylinder or a hob generating an involute.",
              },
              {
                term: "Structural loop",
                definition: "The chain of bodies and joints that transmits cutting force from the tool tip back to the workpiece.",
              },
            ],
            examQuestions: [
              {
                q: "Classify machine tools on any four bases with two examples of each class, and explain forming versus generating with one example of each.",
                marks: 7,
                outline: [
                  "Define a machine tool in one line: power-driven, non-portable, controlled tool-work relation.",
                  "By degree of generalization: general, special and single purpose machines with examples.",
                  "By automation: manual, tracer controlled, NC and CNC machines with examples.",
                  "By cutting motion: rotating-work, rotating-tool and rotating-both machines with examples.",
                  "By structure: open C-frame (lathe, knee mill) versus closed frame (gantry, double column).",
                  "Forming: the tool edge carries the profile - form turning tool, shaped grinding wheel.",
                  "Generating: the profile comes from coordinated motion - hobbing an involute, lathe cylinder.",
                  "Conclude: choice depends on batch size, accuracy demand, flexibility and cost.",
                ],
              },
              {
                q: "Differentiate between forming and generating with one example of each.",
                marks: 2,
              },
              {
                q: "Why is a transfer line a poor choice for a product family that changes every year?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Machine tool accuracy, precision and error sources",
            body: [
              "Accuracy is the closeness of a measured position to the true command; precision or repeatability is the spread among repeated attempts. A machine can repeat to a micron yet sit twenty microns off target - accurate and repeatable are different virtues. Machine tool accuracy is decomposed into geometric accuracy (straightness, flatness, squareness, parallelism, runout of the bare machine), positioning accuracy of each axis (error, bidirectional reversal, backlash), working accuracy under cutting load, and thermal accuracy as the structure warms through a shift.",
              "Error sources follow the machine's own life history. Manufacturing and assembly contribute casting distortion, machining error, scraping quality and joint alignment; kinematics contribute screw pitch error, guideway deviation and rotary axis error motion; load contributes elastic deflection of spindle, tools and fixtures; thermal sources - motors, bearings, cutting heat, ambient swing - move the whole geometry because steel grows about 12 microns per metre per degree C; wear rounds the story out. Alignment testing against accepted test codes keeps these errors inside the tolerance band of the machine's class.",
              "Measurement instruments scale with the tolerance: dial indicators and test mandrels for tenths of a millimetre, precision levels at 0.01 mm/m for flatness, autocollimators for straightness over metres, and the laser interferometer for positioning accuracy at sub-micron level (Unit IV). The professional habit is an error budget: list every contributor, assign each a worst case, combine by root-sum-square, and verify the total against the class tolerance before the machine ships. On CNC machines the budget then extends into software: the compensation tables of Unit IV convert measured systematic error into corrected commands, shrinking the residual geometric error the builder must hold mechanically.",
            ],
            bullets: [
              "Accuracy is closeness to the commanded truth; repeatability is spread around the machine's own average - state both in every answer.",
              "Geometric, positioning, working and thermal accuracy are four separate budgets, each with its own test and instrument.",
              "Steel structures grow roughly 12 micron per metre per degree C - a two-metre bed drifts visibly across a shift.",
              "Bidirectional positioning error includes reversal (backlash) and lost motion; report it for both approach directions.",
              "Instrument ladder: DTI and mandrels, precision levels, autocollimator, laser interferometer - match instrument uncertainty to the tolerance.",
            ],
            table: {
              caption: "Typical acceptance items for a precision center lathe.",
              headers: ["Error item", "Meaning", "Typical tolerance", "Instrument"],
              rows: [
                ["Spindle radial runout", "Nose wobble per revolution", "0.005 mm at nose", "Dial test indicator"],
                ["Spindle axial slip", "Axial movement under force", "0.005-0.01 mm", "DTI + axial load"],
                ["Bed flatness", "Deviation of carriage ways", "0.02 mm/m", "Precision level"],
                ["Spindle axis vs bed", "Parallelism error", "0.02 mm / 300 mm", "Test mandrel + DTI"],
                ["Cross-slide squareness", "Angle error to spindle axis", "0.02 mm / 300 mm", "Square + DTI"],
                ["Axis positioning (CNC)", "Bidirectional error", "0.005 mm with comp", "Laser interferometer"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How an error travels from casting to finished part",
              caption:
                "Every stage adds or locks in error - the exam answer lists stages and their controls in this order.",
              steps: [
                { label: "Stress-relieved casting", note: "residual stress locked out" },
                { label: "Machined and scraped slideways", note: "geometry set here" },
                { label: "Assembly: leveling and alignment", note: "joints and shims" },
                { label: "Thermal soak in service", note: "growth and drift" },
                { label: "Part error budget", note: "verify against class tolerance" },
              ],
            },
            callout: {
              type: "tip",
              title: "Error budgets win marks",
              body: "Long questions on accuracy expect four named error families - geometric, positioning, load-induced, thermal - each with one source, one figure of merit and one instrument. Present them as a table in the answer sheet.",
            },
            keyTerms: [
              {
                term: "Repeatability",
                definition: "The spread of positions reached when the same target is commanded repeatedly from the same direction.",
              },
              {
                term: "Thermal drift",
              definition: "Slow geometry change as machine structure heats from motors, bearings and ambient swing; about 12 micron/metre/degree C for steel.",
              },
              {
                term: "Error budget",
                definition: "A worst-case or root-sum-square listing of all error contributors used to prove a machine meets its accuracy class.",
              },
            ],
            examQuestions: [
              {
                q: "Define accuracy, precision and repeatability of a machine tool. Explain the major sources of error in a machine tool and the instruments used to measure them.",
                marks: 7,
                outline: [
                  "Define accuracy (closeness to command) and precision/repeatability (spread) with a target diagram.",
                  "Geometric errors: straightness, flatness, squareness, runout - from machining and assembly.",
                  "Kinematic errors: screw pitch, guideway deviation, backlash and reversal.",
                  "Load-induced errors: deflection of spindle, tooling and fixture under cutting force.",
                  "Thermal errors: growth of bed, screw and spindle; 12 micron/m/degree C for steel.",
                  "Wear and its monitoring through periodic alignment tests.",
                  "Instruments: DTI, mandrel, precision level, autocollimator, laser interferometer - with what each measures.",
                  "Close with the error-budget idea: combine contributors and verify against class tolerance.",
                ],
              },
              {
                q: "A CNC lathe repeats a bored diameter to within 0.002 mm but every bore is 0.03 mm oversize. Name the error type and the fix.",
                marks: 2,
              },
              {
                q: "Why is a machine tool specification quoted at 20 degree C?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Stiffness and the structural loop",
            body: [
              "Stiffness is the force required per unit deflection, in newton per micron, and it is the currency in which machine tool structures are bought. The structural loop is the closed chain of elements and joints that carries cutting force from the tool tip through holder, spindle, headstock, bed, slides and fixture back into the workpiece. Because loop elements act as springs in series, the inverse stiffnesses add: 1/K_total = 1/K_tool + 1/K_holder + ... + 1/K_fixture. The weakest element therefore dominates the whole machine - stiffening an already stiff member buys almost nothing.",
              "Two rules govern loop behaviour. First, cantilevers are expensive: the deflection of an overhung tool or spindle nose grows with the cube of the overhang, so gauge length and spindle overhang are minimized before anything else. Second, joints are the hidden springs: bolted slideway joints, taper interfaces and guide carriages contribute contact deformation that can exceed the deflection of the castings around them, which is why scraping quality, bolt preload and guideway preload appear in stiffness calculations. Bending is the weak mode; closed box sections, shear webs and diagonal ribs convert bed material into bending and torsional stiffness.",
              "Design strategies follow directly. Shorten the loop - move the tool as close to its support as the process allows. Prefer tension and compression over bending, and closed frames over open ones for symmetric loading. Put stiffness where the loop is weakest: front spindle bearings, carriage-to-bed interface, tool gauge length. Because dynamic stiffness is static stiffness times damping (Unit I's next section), a stiff machine that rings badly can cut worse than a softer, better-damped one - stiffness and damping are always designed together.",
            ],
            bullets: [
              "Series springs: 1/K_total = sum of 1/K_i for every element and joint in the tool-to-workpiece loop.",
              "Cantilever law: deflection of an overhung tool or spindle nose grows with the cube of the overhang - cut gauge length first.",
              "Joints are springs: contact deformation at bolted and scraped interfaces often exceeds the casting deflection around them.",
              "Bending is the weak mode - closed box sections, shear webs and diagonal ribs buy the most stiffness per kilogram.",
              "Dynamic stiffness = static stiffness x damping: the two must be designed together, never traded one for the other.",
            ],
            table: {
              caption: "The structural loop of a turning center, element by element.",
              headers: ["Loop element", "Dominant deflection mode", "Design lever"],
              rows: [
                ["Tool and holder", "Cantilever bending", "Shortest gauge length, stiff taper, damped holder"],
                ["Spindle and bearings", "Nose overhang bending", "Large front bearing set, optimum span"],
                ["Headstock casting", "Wall bending", "Ribs, closed sections, mass distribution"],
                ["Bed", "Bending + torsion", "Depth of section, shear webs, slant geometry"],
                ["Slideway joints", "Contact deformation", "Scraping, preload, wider ways"],
                ["Table, fixture, workpiece", "Bending between supports", "Ribbing, support points, clamping plan"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The structural loop of a CNC turning center",
              caption:
                "Read top to bottom: tool to workpiece. The bed closes the loop - every layer is a series spring.",
              layers: [
                { label: "Cutting tool and holder", note: "cantilever - cube of gauge length" },
                { label: "Turret or tool post", note: "indexing interface stiffness" },
                { label: "Cross-slide (X axis)", note: "guideway + ball screw stiffness" },
                { label: "Carriage, saddle and bed", note: "bending and torsion close here" },
                { label: "Spindle and headstock", note: "bearing set dominates" },
                { label: "Workpiece and chuck", note: "part stiffness is part of the loop" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not average stiffnesses",
              body: "A common slip is averaging element stiffnesses. Series springs add reciprocals: two equal members in series give half the stiffness, not the average. Compute 1/K_total and then compare candidates by their weakest link.",
            },
            keyTerms: [
              {
                term: "Structural loop",
                definition: "The closed chain of bodies and joints through which cutting force travels from tool tip to workpiece.",
              },
              {
                term: "Contact stiffness",
                definition: "The stiffness of a joint interface - bolted, scraped or tapered - arising from microscopic asperity contact.",
              },
              {
                term: "Dynamic stiffness",
                definition: "Static stiffness multiplied by damping factor; it decides the cutting depth a machine can take without chatter.",
              },
            ],
            examQuestions: [
              {
                q: "What is the structural loop of a machine tool? Derive the series stiffness relation for loop elements and state four design measures that raise overall machine stiffness.",
                marks: 7,
                outline: [
                  "Define the structural loop: tool tip to workpiece through every body and joint.",
                  "Model each element as a spring; deflections add under one force, so 1/K_total = sum(1/K_i).",
                  "Conclude the weakest element dominates - show with a numeric example (K1 = 100, K2 = 25 N/micron).",
                  "Measure 1: shorten the loop and cut overhang - cube law for cantilevers.",
                  "Measure 2: preload joints and guideways; scraping quality raises contact stiffness.",
                  "Measure 3: closed box, ribbed sections for bed and column in bending and torsion.",
                  "Measure 4: oversize the front spindle bearing set; symmetric closed frames for large machines.",
                  "Note that dynamic stiffness also needs damping - preview to chatter.",
                ],
              },
              {
                q: "Two members of stiffness 100 and 25 N/micron act in series in the loop. Find the combined stiffness.",
                marks: 2,
              },
              {
                q: "Why does doubling a boring bar overhang worsen its deflection far more than twice?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Damping, vibration and chatter",
            body: [
              "Machine tool vibration splits into free vibration after a shock, forced vibration from an external or internal periodic source - unbalanced motor, chipped tool, gear mesh, interrupted milling - and self-excited vibration, called chatter, which draws its energy from the cutting process itself. Forced vibration is cured at the source: balance rotors, isolate foundations, stagger tooth pitch, change spindle speed away from resonance. Chatter is subtler: it appears only while cutting, grows from the noise floor, and leaves a characteristic fish-scale surface and a screaming note.",
              "Chatter is usually regenerative. Each tooth leaves a wavy surface; the next pass cuts over that wave plus its own vibration mark, so chip thickness is modulated by the phase between successive waves. That modulated thickness modulates the cutting force, which deflects the structure, which stamps a new wave - a feedback loop whose gain rises with depth of cut. The stability lobe diagram plots chatter-free depth of cut against spindle speed: stable pockets lie between lobes, and a speed chosen near a lobe peak can allow two to three times the depth of a bad speed. Damping and stiffness push the whole lobed frontier upward.",
              "Where does damping come from? Mostly from the joints: bolted, scraped and slideway interfaces contribute the large majority of total structural damping through micro-slip, while the materials themselves - grey cast iron far better than welded steel - add the rest. Designers therefore spend damping deliberately: cast iron or epoxy granite beds, bolted rather than welded substructures, damped toolholders and boring bars (tuned mass dampers inside long bars), squeeze films in hydrostatic pockets, and friction dampers on thin walls. More damping plus more stiffness equals a bigger stable cutting zone.",
            ],
            bullets: [
              "Three vibration families: free (after shock), forced (from periodic sources), self-excited chatter (fed by the cut itself).",
              "Regenerative chatter: waves from the previous pass modulate chip thickness, force, deflection - a feedback loop.",
              "Stability lobes: chatter-free depth of cut versus spindle speed; picking a lobe peak speed can triple the safe depth.",
              "Joints dominate damping: bolted and scraped interfaces supply most of it by micro-slip - design them in, do not weld them away.",
              "Countermeasures: raise damping (CI/epoxy beds, damped bars), raise stiffness, vary speed, and cut at lobe peaks.",
            ],
            table: {
              caption: "Damping sources in a machine tool and how to increase them.",
              headers: ["Source", "Share of total damping", "How to increase"],
              rows: [
                ["Bolted joint friction", "Largest single share", "More interfaces, correct preload"],
                ["Cast iron material damping", "Small but free", "Choose CI or epoxy granite beds"],
                ["Slideway and guide films", "Significant when hydrostatic", "Pocket and film design"],
                ["Toolholder interface", "Moderate", "Shrink and hydraulic chucks, damped bars"],
                ["Tuned mass dampers", "Added on demand", "Absorber tuned to the dominant mode"],
                ["Foundation and mounts", "Small", "Viscoelastic mounts for forced vibration"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The regenerative chatter loop",
              caption:
                "Energy circulates: wave to chip thickness to force to deflection and back to a new wave.",
              steps: [
                { label: "Tooth leaves a wavy surface", note: "wave from previous pass" },
                { label: "Two waves set chip thickness", note: "phase sets the loop gain" },
                { label: "Thickness modulates cutting force", note: "force follows chip load" },
                { label: "Force deflects tool and spindle", note: "dynamic stiffness resists" },
                { label: "Deflection stamps a new wave", note: "loop closes, amplitude grows" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Chatter questions expect the loop drawn as a cycle: previous wave + current vibration = modulated chip thickness = modulated force = deflection = new wave. Label the phase condition and quote stability lobes; the sketch carries most of the marks.",
            },
            keyTerms: [
              {
                term: "Regenerative chatter",
                definition: "Self-excited vibration sustained by the modulated chip thickness produced by waves left on the surface one pass earlier.",
              },
              {
                term: "Stability lobe diagram",
                definition: "Plot of chatter-free depth of cut against spindle speed showing stable and unstable zones.",
              },
              {
                term: "Damping ratio",
                definition: "Measure of energy dissipation per cycle; with stiffness it sets dynamic stiffness and the chatter frontier.",
              },
            ],
            examQuestions: [
              {
                q: "Explain regenerative chatter in machine tools with the help of a loop diagram. How does the stability lobe diagram help a process planner, and what design features raise the chatter-free cutting zone?",
                marks: 7,
                outline: [
                  "Define chatter as self-excited vibration that draws energy from the cutting process.",
                  "Draw the loop: wave left by previous pass + present vibration = chip thickness variation.",
                  "Chip thickness modulates cutting force; force deflects the structure; deflection writes a new wave.",
                  "Phase between successive waves decides whether amplitude grows - the regeneration condition.",
                  "Stability lobes: chatter-free depth of cut vs spindle speed; valleys and peaks explained.",
                  "Planning use: select speed near a lobe peak to raise allowable depth of cut two to three times.",
                  "Design levers: raise stiffness (front bearings, short loop) and damping (joints, CI/epoxy beds, damped bars).",
                  "Mention process levers: variable pitch cutters, reduced depth or width of cut, changed speed.",
                ],
              },
              {
                q: "Distinguish between forced vibration and chatter in a machine tool.",
                marks: 2,
              },
              {
                q: "Why do bolted joints, though weaker in stiffness, often improve machine behaviour versus welded ones?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Machine tool structures: beds, columns and housings",
            body: [
              "The bed, column and housing carry every static, dynamic and thermal load in the machine: they support the weight of moving units, resist cutting forces, guide or mount the guideways, and must hold their geometry while heat flows through them. Design criteria are rigidity in bending and torsion for the load paths, mass distribution against vibration, stability against thermal gradients, and manufacturability. Section shapes do the work: closed box sections with shear webs beat open sections per kilogram; diagonal ribs carry diagonal cutting forces directly; slant-bed turning center geometries align the load path with the cut.",
              "Materials trade damping against stiffness and lead time. Grey cast iron gives free material damping and casts complex ribbed shapes, but patterns and curing make it slow. Welded steel structures are lighter per stiffness, fast to fabricate and easy to modify, but they barely damp - designers compensate with ribs, sandwich fillers and bolted joints. Epoxy granite (polymer concrete) offers several times cast iron's damping with excellent thermal stability and casting-like shaping, which is why grinding and EDM machines adopt it; natural granite remains the reference for metrology frames and jig borers.",
              "Thermal design is structural design. Heat sources - spindle motors, ball screw nuts, coolant, the sun through a window - impose gradients that bend the structure; thermal symmetry, isolating heat sources, coolant temperature control and, in precision machines, active compensation keep drift inside budget. Columns for machining centers evolve toward box-in-box and traveling-column layouts that shorten the loop and equalize overhang on both sides. The bed is the one component that can never be upgraded later - everything else bolts to it.",
            ],
            bullets: [
              "Beds and columns carry static, dynamic and thermal loads and define the reference geometry of every axis.",
              "Closed box sections with shear webs and diagonal ribs give the best stiffness per kilogram in bending and torsion.",
              "Grey cast iron: damping and castability, slow to make. Welded steel: light and fast, but needs engineered damping.",
              "Epoxy granite beds give several times CI damping with thermal stability - the grinding and EDM choice; granite rules metrology.",
              "Thermal symmetry, source isolation and coolant control are structural decisions, not afterthoughts.",
            ],
            table: {
              caption: "Structural materials compared (typical, qualitative).",
              headers: ["Property", "Grey CI", "Welded steel", "Epoxy granite", "Natural granite"],
              rows: [
                ["Damping", "High", "Low", "Very high", "High"],
                ["Specific stiffness", "Moderate", "High", "Moderate", "Moderate"],
                ["Thermal stability", "Moderate", "Moderate", "Very good", "Excellent"],
                ["Lead time", "Long", "Short", "Moderate", "Quarry dependent"],
                ["Shape freedom", "Excellent (ribs)", "Good", "Good (castable)", "Poor (slab geometry)"],
                ["Typical use", "General machines", "Large custom frames", "Grinders, EDM", "CMM, jig boring"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Cast iron bed versus welded steel bed",
              caption:
                "The classic materials trade: free damping versus fast, light fabrication.",
              left: {
                heading: "Grey cast iron bed",
                items: [
                  "Free material damping from graphite flakes",
                  "Cast to complex ribbed, closed sections",
                  "Stable after aging, but long lead time",
                  "Heavy mass also aids vibration sink",
                  "Traditional bed and slideway material",
                ],
              },
              right: {
                heading: "Welded steel bed",
                items: [
                  "High specific stiffness, lighter frame",
                  "Fast fabrication and easy modification",
                  "Little material damping - add ribs, fillers",
                  "Needs stress relief after welding",
                  "Preferred for large custom machines",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Sketch like a designer",
              body: "Bed-design answers should show a cross-section: closed outline, internal shear webs, diagonal ribs, guideway lands. Label the load path from tool to table through the section - examiners look for the section sketch more than prose.",
            },
            keyTerms: [
              {
                term: "Closed box section",
                definition: "Hollow structural section whose material sits far from the neutral axis, maximizing bending and torsional stiffness per kilogram.",
              },
              {
                term: "Epoxy granite",
                definition: "Polymer-concrete casting of aggregate in epoxy resin offering very high damping and thermal stability, used for grinding and EDM machine beds.",
              },
              {
                term: "Thermal symmetry",
                definition: "Structural layout in which heat sources and material are arranged so temperature gradients deflect the machine symmetrically, minimizing geometry drift.",
              },
            ],
            examQuestions: [
              {
                q: "State the functional requirements of a machine tool bed. Compare grey cast iron, welded steel and epoxy granite as bed materials, and sketch a suitable bed cross-section with its ribs.",
                marks: 7,
                outline: [
                  "Functions: support weight, resist cutting force, host guideways, hold geometry through thermal cycles.",
                  "Criteria: bending and torsional rigidity, damping, thermal stability, manufacturability.",
                  "Cast iron: high damping, castability into ribbed closed sections, long lead time.",
                  "Welded steel: high specific stiffness and speed of fabrication, low damping, needs stress relief and engineered damping.",
                  "Epoxy granite: very high damping and thermal stability; grinding/EDM use; lower modulus handled by section depth.",
                  "Sketch: closed outline, two internal shear webs, diagonal ribs, guideway lands, chip trough.",
                  "Mark the load path from tool force through bed to foundation on the sketch.",
                  "Conclude with selection logic: damping-critical machines to CI/epoxy, large custom frames to steel.",
                ],
              },
              {
                q: "Why is damping more valuable than raw stiffness in a grinding machine bed?",
                marks: 2,
              },
              {
                q: "List three design measures that reduce thermal distortion of a machine column.",
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
      title: "Drives and Power Transmission",
      summary:
        "From motor to cutting edge: stepped and stepless main drives with the geometric speed series and ray diagrams, feed drives built on preloaded ball screws, spindle design with angular contact bearing arrangements, CNC servo loops, and the whole numerical toolkit of drive design.",
      chapter: {
        number: "02",
        title: "Drives and Power Transmission",
        intro:
          "Unit II designs the power path. The main drive turns motor power into spindle speed, stepped through gearboxes laid out on the geometric series or stepless through AC vector drives and motorized spindles. The feed drive turns rotary motion into precise linear motion, and the ball screw is its heart. Spindle design marries the last shaft to its bearings, and the CNC servo closes the position loop around all of it.",
        inOneBreath:
          "Main drives give z spindle speeds in a geometric progression with ratio phi, so Rn = nmax/nmin = phi^(z-1) and z - 1 = log Rn / log phi; the structure diagram fixes group layout, the ray diagram fixes each gear transmission ratio inside the 2 to 1/4 band; stepless AC vector drives and motorized spindles replace the box at high speed; feed drives use preloaded ball screws whose torque is T = F x lead / (2 pi x efficiency) with 90% efficiency and no self-locking; spindles minimize nose deflection through optimum bearing span and back-to-back angular contact front bearings; and CNC servo loops - position over velocity over current - with encoders or linear scales make the axis track the interpolator.",
        sections: [
          {
            number: "2.1",
            title: "Main drive systems: stepped and stepless",
            body: [
              "The main drive converts motor power into spindle speed and torque. Its requirements come from the process: a speed range wide enough for the smallest drill and the largest facing cut, power matched to the heaviest cut, constant torque at low speed for tapping and heavy boring, and smoothness at high speed for finishing. Two families answer. Stepped drives - cone pulleys, sliding-cluster gearboxes, Norton and Meandr feed boxes - offer a fixed ladder of speeds set by the geometric series (Section 2.2), are cheap and efficient, but force the operator to accept a speed loss up to phi - 1 below the ideal.",
              "Stepless drives remove the ladder. Mechanical variators (Kopp, PIV) sweep ratios continuously but limited ranges and power; electrical solutions dominate: the AC induction or synchronous servo fed by a vector-controlled variable-frequency drive delivers a wide constant-torque band plus a constant-power field-weakening region, and with a two-speed gearbox or belt reduction covers almost every general purpose need. At the top end, the motorized or electro-spindle builds the motor rotor onto the spindle shaft itself: no gears, no belts, speeds beyond 20,000 rpm for die molding and drilling - traded against reduced low-speed torque and heat that must be water-jacketed away.",
              "Selection logic balances cost, range and duty. A stepped box suits general purpose machines where a 20-25% speed loss is tolerable; a vector drive plus a short gearbox suits heavy machining centers needing low-end torque; a motorized spindle suits high-speed work where dynamics and balance matter more than muscle. Every choice is judged by the drive characteristic chart - torque and power versus speed - drawn over the scatter of required cutting speeds for the machine's expected part mix.",
            ],
            bullets: [
              "Requirements: wide speed range, rated power at the heaviest cut, constant torque at the bottom, smoothness at the top.",
              "Stepped drives give fixed geometric speeds; the nearest step can lose up to (phi - 1) of ideal cutting speed.",
              "Stepless AC vector drives: wide constant-torque band plus constant-power region; the modern CNC default.",
              "Motorized spindles put the rotor on the shaft: 20,000+ rpm and zero gear noise, at the price of low-end torque and heat.",
              "Judge every drive by its torque-power chart plotted over the cutting speeds the part mix actually needs.",
            ],
            table: {
              caption: "Main drive variants compared.",
              headers: ["Drive", "Speed regulation", "Power path", "Best use"],
              rows: [
                ["Sliding gear box", "Fixed steps, phi series", "Motor - gears - spindle", "General purpose lathes, mills"],
                ["Cone pulley / belt", "4-5 steps", "Motor - stepped pulley", "Small bench machines"],
                ["Mechanical variator", "Stepless, narrow", "Motor - Kopp/PIV disc", "Older feed and spindle drives"],
                ["AC vector + 2-speed", "Stepless over wide range", "VFD - motor - short box", "Standard machining centers"],
                ["Motorized spindle", "Stepless, 1:5-1:10", "Built-in motor, no gears", "High-speed mold and die, drilling"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Power flow of a modern CNC main drive",
              caption:
                "Every element is a stiffness, a heat source and an error source at once.",
              steps: [
                { label: "AC vector motor", note: "wide constant-torque band" },
                { label: "Belt or flexible coupling", note: "damps shock, isolates heat" },
                { label: "2-speed gearbox (optional)", note: "low-range torque boost" },
                { label: "Spindle shaft and bearing set", note: "Unit II, Section 2.4" },
                { label: "Cutting zone", note: "speed x force becomes power" },
              ],
            },
            callout: {
              type: "tip",
              title: "Read the characteristic chart",
              body: "Draw torque rising flat from zero speed to rated, then power flat until field weakening - the two-platform chart. Overlay the points for the machine's heaviest and fastest operations; every drive question ends with this figure.",
            },
            keyTerms: [
              {
                term: "Stepped drive",
                definition: "Main drive offering a fixed ladder of speeds arranged in geometric progression through gear pairs or pulleys.",
              },
              {
                term: "Motorized spindle",
                definition: "Spindle with the motor rotor mounted directly on the shaft, enabling very high speeds without belts or gears.",
              },
              {
                term: "Constant-power range",
                definition: "Speed region above rated speed where the drive delivers rated power while torque falls with speed.",
              },
            ],
            examQuestions: [
              {
                q: "Compare stepped and stepless main drive systems for machine tools. Explain the construction and application of the motorized spindle with its advantages and limitations.",
                marks: 7,
                outline: [
                  "State drive requirements: range, power, low-speed torque, high-speed smoothness.",
                  "Stepped drives: geometric speed ladder via gears or pulleys; cheap, efficient, but up to (phi - 1) speed loss.",
                  "Stepless mechanical variators: continuous ratio, narrow range, limited power.",
                  "Electrical stepless: AC vector drive with constant-torque and constant-power regions; the CNC standard.",
                  "Motorized spindle construction: rotor on shaft, bearings, water jacket, HSK tool interface.",
                  "Advantages: no gear noise or backlash, very high rpm, compact, excellent dynamics.",
                  "Limitations: low low-speed torque, heating, repair cost, limited to lighter cuts.",
                  "Conclude with selection by part mix using the torque-power chart.",
                ],
              },
              {
                q: "Why must a motorized spindle be water-cooled?",
                marks: 2,
              },
              {
                q: "Sketch the torque-power characteristic of an AC main drive and mark the constant-torque and constant-power regions.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Speed box design: geometric series, structure and ray diagrams",
            body: [
              "A stepped headstock must deliver z spindle speeds spanning a range ratio Rn = nmax/nmin. The speeds are laid out in a geometric progression with common ratio phi: n1 = nmin and nz = nmin x phi^(z-1), so Rn = phi^(z-1). The geometric law keeps the percentage speed drop between adjacent steps constant at (phi - 1) x 100, so every cutting operation suffers the same relative loss from its nearest available speed - the economical, standardized choice. Given Rn and phi, the number of steps follows from z - 1 = log(Rn)/log(phi), rounded to an integer that factors into groups of two and three.",
              "Accepted phi values are the preferred numbers 1.06, 1.12, 1.26, 1.41, 1.58, 1.78 and 2.00; 1.26 (three speeds per doubling) and 1.41 (two per doubling) dominate textbook designs. The gear transmission ratio - GTR - of every mesh is bounded: a step-up stays at or below 2, a reduction at or below 4, so a 12-speed box factors as 3 x 2 x 2 groups, an 18-speed box as 3 x 3 x 2. Layout rules fix the order: fewest shafts, GTRs inside the permissible band, intermediate shafts kept fast so gear sizes stay small.",
              "Design closes with two diagrams. The structure diagram plots each group as a vertical stack of transmission points and fixes which stage contributes how many ratios. The speed (ray) diagram plots log(n) vertically: draw the output speeds, place the input line, then let each mesh fan out rays whose slopes are the GTRs - up-sloping for step-up, down for reduction, none leaving the 2-to-1/4 band. Tooth counts follow from the rays with a minimum pinion of about 17-20 teeth, and the actual speed table is recomputed as the closing check. One clean ray diagram is the highest-scoring figure in this subject.",
            ],
            bullets: [
              "Geometric series: Rn = nmax/nmin = phi^(z-1) and z - 1 = log(Rn)/log(phi) - the two equations every numerical starts from.",
              "Standard phi values: 1.06, 1.12, 1.26, 1.41, 1.58, 1.78, 2.00 - 1.26 and 1.41 are the textbook workhorses.",
              "GTR bounds per mesh: step-up at most 2, step-down at most 4 - rays outside this band are rejected.",
              "Factor z into twos and threes: 12 = 3 x 2 x 2, 18 = 3 x 3 x 2; fewest shafts and fast intermediate shafts.",
              "Structure diagram fixes groups; ray (speed) diagram fixes every GTR; tooth counts with 17-20 tooth minimum pinions close it.",
            ],
            codeExample: {
              language: "python",
              caption: "Speed box arithmetic: generating the speed ladder and checking the group layout.",
              code: `import math

def speed_ladder(n_min, phi, z):
    """Spindle speeds of a stepped headstock, geometric progression."""
    return [n_min * phi ** k for k in range(z)]

n = speed_ladder(45, 1.26, 12)
print("12 speeds:", [round(x, 1) for x in n])
print("range ratio Rn =", round(n[-1] / n[0], 2),
      " check phi^(z-1) =", round(1.26 ** 11, 2))

# number of steps from a required range
Rn = 355 / 45
z = 1 + math.log(Rn) / math.log(1.26)
print("z from Rn:", round(z, 2), "-> round to", math.ceil(z))

# factor z into transmission groups of 2 and 3
def groups(z):
    out = []
    while z > 1:
        for f in (3, 2):
            if z % f == 0:
                out.append(f)
                z //= f
                break
    return out

print("group layout for 12 speeds:", groups(12))   # [3, 2, 2]
print("group layout for 18 speeds:", groups(18))   # [3, 3, 2]

# GTR check: every mesh ratio must lie within 1/4 .. 2
def gtr_ok(ratios):
    return all(0.25 <= r <= 2.0 for r in ratios)

print("mesh ratios [1.26, 0.5, 2.0] legal:", gtr_ok([1.26, 0.5, 2.0]))
print("mesh ratios [2.5] legal:", gtr_ok([2.5]))`,
            },
            diagram: {
              kind: "pipeline",
              title: "Designing a stepped speed gearbox",
              caption:
                "Six stages, in order - skipping stage 3 or 5 is where most paper mistakes happen.",
              stages: [
                { label: "Process survey", note: "cutting speeds the part mix needs" },
                { label: "Fix nmin and nmax", note: "range ratio Rn follows" },
                { label: "Choose phi, compute z", note: "Rn = phi^(z-1)" },
                { label: "Structure diagram", note: "groups: 3 x 2 x 2" },
                { label: "Ray (speed) diagram", note: "GTRs inside 2 to 1/4" },
                { label: "Tooth counts and shafts", note: "pinion 17-20 teeth min" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Ray-diagram numericals are the signature question of this subject. Always write Rn = phi^(z-1) first, factor z into groups, then draw log-spaced speed lines. Mark every ray's ratio; an unlabelled ray loses the method marks that make up half the question.",
            },
            keyTerms: [
              {
                term: "Step ratio phi",
                definition: "Common ratio of the geometric speed series; standard values 1.06 to 2.00 chosen from preferred numbers.",
              },
              {
                term: "Range ratio Rn",
                definition: "Ratio of highest to lowest spindle speed, Rn = nmax/nmin = phi^(z-1) for z geometric steps.",
              },
              {
                term: "Ray (speed) diagram",
                definition: "Log-scale speed chart on which each gear pair appears as rays whose slopes are its transmission ratios.",
              },
            ],
            examQuestions: [
              {
                q: "A headstock must give speeds from 45 to 355 rpm as a geometric series with phi = 1.26. Determine the number of steps z, give a suitable group structure, draw the ray diagram logic, and state the GTR limits used while drawing it.",
                marks: 7,
                outline: [
                  "Write Rn = nmax/nmin = 355/45 = 7.89.",
                  "Apply z - 1 = log(Rn)/log(phi) = log 7.89 / log 1.26 = about 9, so z = 10; round to a factorable z = 12 if the syllabus wants 3 x 2 x 2 (state your rounding).",
                  "List the speed ladder: 45, 56.7, 71.4, ... by successive multiplication by 1.26.",
                  "Factor z into groups of 2 and 3: 12 = 3 x 2 x 2 (or the computed count).",
                  "Structure diagram: one vertical stack per group, 3 then 2 then 2 transmissions.",
                  "Ray diagram: log-speed ordinate; input line; each mesh fans rays; slopes are the GTRs.",
                  "GTR limits: step-up at most 2, step-down at most 4 per mesh; no ray leaves the band.",
                  "Close with tooth counts: z_driver + z_driven constant per stage, pinion at least 17-20 teeth.",
                ],
              },
              {
                q: "Why are spindle speeds arranged in geometric rather than arithmetic progression?",
                marks: 2,
              },
              {
                q: "State the permissible limits of the gear transmission ratio in a machine tool gearbox and the reason for them.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Feed drives and ball screw design",
            body: [
              "A feed drive must position an axis accurately, repeatedly and smoothly under cutting load - requirements a plain sliding lead screw cannot meet. The ball screw replaces sliding contact with recirculating balls between screw and nut: friction coefficient falls to about 0.003-0.01, efficiency climbs to around 90%, and a preloaded double-nut removes axial backlash. The price is that the screw no longer self-locks: a vertical axis needs a brake, and drives must be sized for reversal loads. Selection parameters are the lead (speed and resolution trade), dynamic load rating for life, critical speed and buckling for length, and accuracy grade (C3, C5 classes) for the travel error budget.",
              "Sizing arithmetic is compact. Drive force totals cutting force, guideway friction and inertial load; motor torque follows from T = F x lead / (2 x pi x efficiency); axis speed sets screw rpm as n = v / lead. Larger leads give speed with coarser resolution and more torque demand; smaller leads give resolution and mechanical advantage but cap rapid traverse. The screw's unsupported length fixes critical speed and column buckling, so support arrangements - fixed-fixed best, fixed-floating standard, floating-floating only for short screws - are chosen with the length. The dn value (diameter x rpm) caps speed to prevent ball skidding.",
              "Integration decides the accuracy actually delivered. The screw mounts through paired angular contact thrust bearings at the fixed end and a floating or deep-groove support at the other; the servo couples to it through a bellows or diaphragm coupling that absorbs misalignment without adding wind-up. Preload is applied by spacers or a double nut and confirmed by measuring drag torque; lubrication is greased-for-life on small axes and metered oil on large ones. Finally the measured pitch error feeds the compensation table of Section 4.5, which is what lets a C5 screw deliver micron-class positioning in service.",
            ],
            bullets: [
              "Ball screw: recirculating balls give about 90% efficiency and pre-loadable zero backlash - but no self-locking.",
              "Motor torque: T = F x lead / (2 x pi x efficiency), with F = cutting + friction + inertia terms.",
              "Lead trade: big lead buys rapid traverse, small lead buys resolution and torque - pick one, justify it.",
              "Supports: fixed-fixed gives highest critical speed; screw length sets buckling and dn-value limits.",
              "Accuracy grades (C3, C5...) set travel error per 300 mm and feed the pitch-error compensation table of Unit IV.",
            ],
            codeExample: {
              language: "python",
              caption: "Ball screw sizing worksheet for a CNC axis (illustrative values).",
              code: `import math

# ---- axis data -------------------------------------------------
lead          = 0.010     # m per revolution
table_mass    = 250.0     # kg, table + fixture + work
mu_guide      = 0.005     # rolling guide friction coefficient
cutting_force = 900.0     # N, opposing the feed
accel         = 2.5       # m/s^2, target axis acceleration
rapid         = 30.0      # m/min, rapid traverse

# ---- load build-up --------------------------------------------
F_friction = mu_guide * table_mass * 9.81
F_inertia  = table_mass * accel
F_total    = cutting_force + F_friction + F_inertia
print(f"friction {F_friction:.0f} N + inertia {F_inertia:.0f} N "
      f"+ cut {cutting_force:.0f} N = {F_total:.0f} N")

# ---- motor torque ----------------------------------------------
eta = 0.90                              # ball screw efficiency
T = F_total * lead / (2 * math.pi * eta)
print(f"required torque = {T:.2f} N.m")

# ---- screw speed at rapid --------------------------------------
rpm = (rapid / 60.0) / lead
print(f"screw speed at rapid = {rpm:.0f} rpm")
print(f"dn value = {0.04 * rpm:.0f} mm.rpm (check < 50000-70000)")`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing the feed drive actuator",
              caption:
                "The exam answer compares all three on efficiency, backlash and cost.",
              start: "A CNC axis must position a 250 kg slide to a few microns",
              branches: [
                {
                  label: "Sliding lead screw and nut",
                  outcome:
                    "Self-locking and cheap, but 30-50% efficiency and backlash make it unusable for CNC positioning.",
                  good: false,
                },
                {
                  label: "Ball screw + AC servo",
                  outcome:
                    "About 90% efficiency, pre-loadable to zero backlash - the default CNC feed drive.",
                  good: true,
                },
                {
                  label: "Linear motor, direct drive",
                  outcome:
                    "No screw at all: fastest and most precise, but costly, needs cooling and magnetic attraction management.",
                  good: true,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Vertical axes bite back",
              body: "A ball screw will not hold a vertical axis when power fails - it back-drives. Every vertical feed needs a counterbalance or brake; forgetting this in a design answer is a classic lost mark.",
            },
            keyTerms: [
              {
                term: "Ball screw",
                definition: "Screw and nut with recirculating balls giving rolling contact, about 90% efficiency and pre-loadable zero backlash.",
              },
              {
                term: "Preload (double nut)",
                definition: "Axial pre-loading of two nut halves that eliminates backlash and raises contact stiffness at the cost of friction.",
              },
              {
                term: "Critical speed",
                definition: "First natural whirling speed of the rotating screw; the operating rpm must stay safely below it.",
              },
            ],
            examQuestions: [
              {
                q: "With a neat sketch explain the construction of a ball screw. Derive the motor torque required to drive a feed axis against a given axial force and list the checks (life, critical speed, buckling, dn) performed before final selection.",
                marks: 7,
                outline: [
                  "Sketch: screw, nut, ball circuits, wipers; show the recirculation tube or deflector.",
                  "Working: balls roll in the groove - friction coefficient 0.003-0.01, efficiency about 90%.",
                  "Preload: double-nut or oversized balls remove backlash; state the stiffness benefit.",
                  "Load build-up: F = cutting force + guide friction + inertia force.",
                  "Torque derivation: work per revolution = F x lead = T x 2 x pi x eta, so T = F x lead / (2 x pi x eta).",
                  "Insert sample numbers (F = 1500 N, lead = 10 mm, eta = 0.9) and compute T.",
                  "Checks: dynamic load rating for life, critical speed vs length and fixity, buckling for vertical loads, dn value.",
                  "Note lack of self-locking: brake or counterweight on vertical axes.",
                ],
              },
              {
                q: "Why is a ball screw not self-locking, and what does that imply for vertical feed axes?",
                marks: 2,
              },
              {
                q: "A ball screw of lead 5 mm drives an axial load of 2000 N at 90% efficiency. Find the motor torque.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Spindle design and bearing arrangements",
            body: [
              "The spindle is the last link of the main drive and the most error-sensitive member in the machine: its nose carries the tool, and every micron of its deflection prints on the work. Design goals are nose stiffness, runout within class, speed capability without thermal growth, and damping at the cutting end. Deflection analysis treats the spindle as a beam on two supports with an overhang: the total nose deflection is the sum of span bending, overhang bending and bearing deflections, and it grows with the cube of the overhang - so the first design move is always to shorten the tool gauge length and the nose overhang.",
              "An optimum bearing span exists: too short and the front bearing pair takes the entire moment load; too long and the shaft between bearings bends excessively. Balancing shaft and bearing deflections gives the optimum span, typically a small multiple of the nose overhang, read off a deflection-versus-span plot. Angular contact thrust bearings dominate: 60 to 70 percent of the load is taken by the front set, which is therefore stiffer and larger. Duplex arrangements - back-to-back (DB) with a wide effective span for moment stiffness, face-to-face (DF) tolerant of misalignment, tandem (DT) sharing axial load one way - and quad sets for high power; preload class trades stiffness against heat and speed rating.",
              "Above about 10,000 rpm the details rule: hybrid ceramic balls cut centrifugal load and heat, oil-air lubrication replaces grease, and the whole cartridge is water-jacketed; the motor rotor mounts between the bearings in a motorized spindle. Tool interfaces progress from BT/SK tapers to HSK and shrink-fit for stiffness at speed, and every rotating assembly is balanced to a G-class suited to its rpm. A spindle answer without a labelled cross-section is only half an answer.",
            ],
            bullets: [
              "Nose deflection = span bending + overhang bending + bearing deflection; overhang enters as its cube - shorten it first.",
              "Optimum bearing span balances shaft bending against bearing deflection; read it from the deflection-vs-span plot.",
              "Front bearing set takes 60-70% of load - size it larger and stiffer than the rear set.",
              "Duplex sets: DB for moment stiffness (spindle fronts), DF for misalignment, DT for heavy one-way thrust, quad for power.",
              "High-speed practice: hybrid ceramic balls, oil-air lube, water jacket, HSK interface, G-class balancing.",
            ],
            table: {
              caption: "Angular contact bearing arrangements for spindles.",
              headers: ["Arrangement", "Pressure lines", "Character", "Typical use"],
              rows: [
                ["Back-to-back (DB)", "Diverge outward", "Widest effective span, moment-stiff", "Front pair of most spindles"],
                ["Face-to-face (DF)", "Converge inward", "Tolerates misalignment, less stiff", "Light duty, long flexible housings"],
                ["Tandem (DT)", "Parallel, same direction", "Shares axial load one way", "Heavy one-direction thrust"],
                ["Quad (2 x DB)", "Stacked pairs", "Maximum stiffness, more heat", "High-power machining spindles"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a high-speed CNC spindle",
              caption:
                "Top to bottom: tool interface to cooling jacket - each layer is a stiffness and a heat source.",
              layers: [
                { label: "Tool interface: taper, drawbar, gripper", note: "HSK/BT - contact stiffness here" },
                { label: "Spindle shaft", note: "alloy steel, hardened, ground" },
                { label: "Front bearing set: DB angular contact", note: "takes 60-70% of load" },
                { label: "Rear bearing", note: "floating or DF pair" },
                { label: "Built-in motor rotor and stator", note: "motorized spindle variant" },
                { label: "Water jacket + encoder", note: "heat and position feedback" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Spindle questions live or die on two sketches: the two-support overhang deflection model, and the DB/DF/DT duplex pairs with pressure lines. Draw pressure lines meeting (DB) or diverging (DF) and label the effective span - that label alone earns a mark.",
            },
            keyTerms: [
              {
                term: "Nose overhang",
                definition: "Distance from the front bearing to the tool point; its cube drives spindle deflection, so it is minimized first.",
              },
              {
                term: "Back-to-back (DB) pair",
                definition: "Duplex angular contact arrangement with diverging pressure lines giving a wide effective span and high moment stiffness.",
              },
              {
                term: "Preload class",
                definition: "Factory-set interference in a bearing set trading stiffness against heat generation and speed rating.",
              },
            ],
            examQuestions: [
              {
                q: "Discuss the design requirements of a machine tool spindle. Explain the effect of bearing span and overhang on nose deflection and describe with sketches the DB, DF and DT angular contact arrangements with their applications.",
                marks: 7,
                outline: [
                  "Requirements: nose stiffness, runout class, speed capability, thermal stability, damping.",
                  "Model: beam on two supports with overhang a and span L.",
                  "Deflection terms: span bending F a^2 (L + a)/(3EI) + overhang term + bearing compliance terms.",
                  "Cube law: overhang dominates - first move is a shorter gauge length and compact tool seating.",
                  "Optimum span: too short overloads front bearing, too long bends the shaft - balance the two on a plot.",
                  "DB: pressure lines diverge, widest effective span, moment-stiff - front pair choice.",
                  "DF: converging lines, misalignment-tolerant; DT: parallel, one-way thrust sharing.",
                  "High-speed extras: hybrid balls, oil-air, water jacket, HSK, G-class balance.",
                ],
              },
              {
                q: "Why is the front bearing of a spindle unit made stiffer and larger than the rear bearing?",
                marks: 2,
              },
              {
                q: "Why does spindle deflection rise with the cube of the overhang while bearing span enters only linearly?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "CNC servo drives and control loops",
            body: [
              "The feed servo turns interpolator numbers into axis motion. Its hardware is an AC synchronous motor with rare-earth permanent magnets, a PWM drive amplifier, and a feedback device; its intelligence is a cascade of loops - the fast current loop (kilohertz) inside the velocity loop inside the position loop closed at the interpolator rate. Each loop is tuned inside the bandwidth of the one outside it. A feedforward path injects the commanded velocity directly, cutting the following error that a pure feedback loop would otherwise show during motion.",
              "Loop closure defines machine accuracy classes. Open-loop systems drive steppers with no feedback - simple, cheap, and blind to lost steps. Semi-closed systems read an encoder on the motor: the control knows the shaft precisely but sees the screw's pitch error, wind-up and thermal growth only through compensation tables. Full closed-loop machines add a linear scale on the axis: the table itself is measured, screw errors vanish from the loop, and positioning tightens to sub-micron classes on jig borers and grinders. Resolution follows the encoder: a 2500 line quadrature disk gives 10,000 counts per revolution, hence 1 micron of table resolution on a 10 mm lead screw.",
              "Selection and tuning decide how the machine feels. Servo gains set the trade between snappy response and overshoot or noise; velocity feedforward removes lag during contouring; backlash and pitch compensation are layered on top. Rigid tapping synchronizes the spindle as a rotary axis with Z; linear motors remove the screw entirely, delivering accelerations beyond 1 g for high-speed machines at the cost of cooling and magnetic attraction management. The servo question in exams is always the cascade block diagram - position to velocity to current, feedback path labelled, feedforward arrow drawn.",
            ],
            bullets: [
              "Cascade control: current loop inside velocity loop inside position loop - each tuned within the bandwidth of its parent.",
              "Open loop (steppers), semi-closed (motor encoder), full closed (linear scale) - accuracy and cost climb together.",
              "Resolution = screw lead / (encoder lines x 4): 2500-line disk on a 10 mm lead gives 1 micron counts.",
              "Feedforward injects commanded velocity to cut following error during contouring - the feedforward arrow is exam-mandatory.",
              "Linear motors: direct drive, over 1 g acceleration, no screw errors - at the price of cooling and attraction forces.",
            ],
            table: {
              caption: "Loop closure strategies for feed axes.",
              headers: ["Strategy", "Feedback device", "Typical accuracy", "Typical use"],
              rows: [
                ["Open loop", "None", "0.01-0.05 mm, step-loss prone", "Light CNC, engravers"],
                ["Semi-closed", "Encoder on motor", "0.005-0.01 mm with comp", "Standard machining centers"],
                ["Full closed", "Linear scale on table", "0.001-0.003 mm", "Jig borers, grinders"],
                ["Dual feedback", "Encoder + scale", "Best of both, complex tuning", "High-end precision machines"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The servo cascade of a CNC feed axis",
              caption:
                "Position to velocity to current - with the feedback and feedforward paths that exams demand.",
              steps: [
                { label: "Interpolated position command", note: "target per cycle" },
                { label: "Position loop + feedforward", note: "error to velocity command" },
                { label: "Velocity loop", note: "adds damping and stiffness" },
                { label: "Current loop + PWM amplifier", note: "kilohertz bandwidth" },
                { label: "AC servo motor, ball screw, table", note: "the plant" },
                { label: "Feedback: encoder or linear scale", note: "closes the loop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the cascade, always",
              body: "Any 'explain CNC servo drive' question is answered by the cascade block diagram: position over velocity over current, motor and screw as the plant, encoder or scale as the return path, feedforward arrow bypassing the position loop. Label bandwidths increasing inward.",
            },
            keyTerms: [
              {
                term: "Following error",
                definition: "Instantaneous lag between commanded and actual position during motion; reduced by velocity feedforward.",
              },
              {
                term: "Semi-closed loop",
                definition: "Feedback from an encoder on the motor, with screw errors handled by compensation tables.",
              },
              {
                term: "Cascade control",
                definition: "Nested current, velocity and position loops, each tuned inside the bandwidth of its enclosing loop.",
              },
            ],
            examQuestions: [
              {
                q: "Explain the working of a CNC feed servo drive with a block diagram of the current-velocity-position cascade. Compare open loop, semi-closed and fully closed loop control of machine tools.",
                marks: 7,
                outline: [
                  "List hardware: AC PM servo motor, PWM amplifier, encoder or linear scale, ball screw.",
                  "Draw the cascade: position loop (interpolator rate) - velocity loop - current loop (kilohertz).",
                  "Explain tuning rule: each inner loop must be several times faster than its parent.",
                  "Feedforward: commanded velocity injected ahead of the velocity loop to cut following error.",
                  "Open loop: stepper, no feedback, step-loss risk - cheap, low accuracy.",
                  "Semi-closed: encoder on motor; screw pitch error, wind-up and growth left to compensation.",
                  "Full closed: linear scale measures the table; screw errors leave the loop; sub-micron class.",
                  "Conclude: accuracy and cost rise together; most machines ship semi-closed with compensation.",
                ],
              },
              {
                q: "Compute the table resolution of a 10 mm lead screw driven by a 2500-line quadrature encoder.",
                marks: 2,
              },
              {
                q: "What is following error and how does velocity feedforward reduce it?",
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
      title: "Guideways and Slideways",
      summary:
        "The geometry-keepers: functions and families of guideways, the self-acting hydrodynamic wedge, pump-fed hydrostatic pockets, linear rolling guides with preload classes, and the stick-slip phenomenon with its remedies.",
      chapter: {
        number: "03",
        title: "Guideways and Slideways",
        intro:
          "Unit III studies the surfaces that decide a machine's straightness. Guideways carry load, resist cutting moments and constrain five of six degrees of freedom while allowing one accurate motion. Sliding slideways do it with oil films - hydrodynamic when self-generated, hydrostatic when pump-fed - trading friction for superb damping; rolling guides do it with balls or rollers, trading damping for near-zero friction and no stick-slip. The unit closes with the stick-slip limit cycle that haunted slideways for a century and the engineering that defeated it.",
        inOneBreath:
          "A guideway carries loads and moments while constraining the slide to one accurate straight or circular motion; hydrodynamic slideways build their oil film from a converging wedge dragged in by traverse, so they need speed and lose the film at rest; hydrostatic guideways pump oil through capillary or orifice restrictors into pockets so the slide floats with no metal contact at any speed, giving stiffness and huge damping at the cost of pump and 5-10 micron filtration; linear rolling guides recirculate balls or rollers along ground rails with friction near 0.002-0.005 and preload classes that remove clearance for stiffness; and stick-slip - the jump caused by static friction exceeding kinetic friction on the Stribeck curve - is defeated by rolling or PTFE interfaces, preloaded stiff drives, friction-modified oils or hydrostatics.",
        sections: [
          {
            number: "3.1",
            title: "Functions, requirements and families of guideways",
            body: [
              "A guideway has two jobs that pull against each other: it must carry the full weight of the slide, workpiece and cutting force, and simultaneously act as the machine's straightedge, permitting one degree of freedom with sub-micron straightness while forbidding the other five. Requirements follow: accuracy of travel, high static and dynamic stiffness, low and - crucially - constant friction, wear resistance so geometry survives decades, damping against vibration, and protection from swarf and coolant. Every guideway family is a different compromise on this list.",
              "Sliding slideways - cast iron on cast iron, or cast iron on steel - give the best damping and the lowest cost but the worst friction behaviour, with breakaway friction above running friction. Hydrodynamic designs recover much of the loss by dragging a full oil film into a converging wedge once the slide moves; hydrostatic designs eliminate solid contact entirely by floating the slide on pressurized oil fed through restrictors. Rolling linear guides recirculate balls or rollers along ground profile rails: friction falls to about 0.002-0.005 with no stick-slip, at the price of damping and vulnerability to contamination.",
              "Selection is therefore a table exercise: heavy presses and grinders take sliding or hydrostatic ways for damping; every general CNC axis takes rolling guides for friction and simplicity; ultra-precision machines add aerostatic (air) bearings for zero friction without oil mist. Hybrid layouts - a roller guide for stiffness plus a sliding pad for damping - appear on high-end machines. Whatever the family, the detailing decides success: wipers, way covers, lubrication points, and the datum edge that ties rail to casting.",
            ],
            bullets: [
              "Dual function: carry load and moments while constraining five degrees of freedom to sub-micron straightness in the sixth.",
              "Requirement set: travel accuracy, stiffness, low and constant friction, wear resistance, damping, swarf protection.",
              "Sliding slideways: best damping and cheapest, worst friction - the traditional choice for conventional machines.",
              "Rolling linear guides: friction 0.002-0.005 with no stick-slip - the default on CNC axes, needing chip protection.",
              "Hydrostatic and aerostatic ways float the slide on oil or air for zero-contact precision - pump and filtration cost.",
            ],
            table: {
              caption: "Guideway families compared.",
              headers: ["Family", "Low-speed friction", "Damping", "Relative cost", "Typical use"],
              rows: [
                ["Boundary-lubricated slideway", "High, stick-slip risk", "Excellent", "Lowest", "Conventional lathes, milling machines"],
                ["Hydrodynamic slideway", "Falls with speed", "Excellent", "Low", "Steady-traverse machine slides"],
                ["Hydrostatic slideway", "Near zero at any speed", "Excellent", "High", "Grinders, jig borers, heavy VMCs"],
                ["Rolling linear guide", "0.002-0.005, constant", "Poor-moderate", "Moderate", "Nearly all CNC feed axes"],
                ["Aerostatic (air) guide", "Near zero", "Low", "High", "Ultra-precision, metrology frames"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the guideway family for an axis",
              caption:
                "Damping against friction - the fork every machine tool designer faces.",
              start: "An axis must move a slide with load, speed and accuracy known",
              branches: [
                {
                  label: "Sliding slideway, oil lubricated",
                  outcome:
                    "Superb damping at low cost; stick-slip risk at low feeds - the classical conventional-machine choice.",
                  good: true,
                },
                {
                  label: "Rolling linear guide (ball or roller)",
                  outcome:
                    "Near-zero constant friction, no stick-slip, easy to install - the CNC standard, but protect the rails.",
                  good: true,
                },
                {
                  label: "Dry, unlubricated slideway",
                  outcome:
                    "Galling, rapid wear and destroyed geometry - never an acceptable design decision.",
                  good: false,
                },
                {
                  label: "Hydrostatic pad system",
                  outcome:
                    "Floats the slide on pressurized oil: zero contact, huge damping - precision grinders, heavy tables.",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Guideway selection questions are best answered as a comparison table: family versus friction, damping, stiffness, cost, application. Five families by five columns is a full-mark answer inside ten lines.",
            },
            keyTerms: [
              {
                term: "Guideway",
                definition: "The paired surfaces that carry the slide load while restricting its motion to one accurate straight or circular degree of freedom.",
              },
              {
                term: "Hydrostatic guideway",
                definition: "Guideway in which pressurized oil fed through restrictors floats the slide on pockets with no metal-to-metal contact.",
              },
              {
                term: "Rolling linear guide",
                definition: "Profiled rail with recirculating ball or roller carriages giving rolling friction of about 0.002-0.005.",
              },
            ],
            examQuestions: [
              {
                q: "State the functions and design requirements of machine tool guideways. Explain the various types of guideways with sketches, giving one application of each.",
                marks: 7,
                outline: [
                  "Functions: carry load and moments; constrain motion to one DOF with high accuracy.",
                  "Requirements: travel accuracy, stiffness, low and constant friction, wear resistance, damping, protection.",
                  "Sliding slideways: CI/steel surfaces, boundary or hydrodynamic film - sketches of flat and V-flat ways.",
                  "Hydrodynamic: converging wedge generates film with speed - needs wedge geometry and steady traverse.",
                  "Hydrostatic: pump-fed pockets through restrictors, no contact even at rest - grinder and jig borer use.",
                  "Rolling guides: profiled rail and recirculating ball carriage - CNC axes everywhere.",
                  "Aerostatic: air film for ultra-precision - coordinate machines.",
                  "Close with the trade triangle: damping (sliding) vs friction (rolling) vs cost (hydrostatic).",
                ],
              },
              {
                q: "Why do guideways need damping as much as stiffness?",
                marks: 2,
              },
              {
                q: "Name the guideway family you would select for a precision surface grinder and justify the choice in two lines.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Hydrodynamic slideways",
            body: [
              "The hydrodynamic slideway makes its own oil film. When the slide moves, viscosity drags oil from a reservoir groove into a converging gap - a wedge formed by a tapered insert, a scraped relief, or the natural tilt of the loaded way. Continuity then forces the pressure in the wedge to rise until the integrated pressure equals the load, and the surfaces separate: at design speed the slide rides on a full film tens of microns thick with friction set only by shearing oil. The wedge is self-adjusting - heavier load or slower speed thins the film and shifts the pressure peak until the balance restores.",
              "The film, however, is conditional on speed. Below a threshold the slide falls back into boundary or mixed lubrication: asperities touch, friction rises toward the static value, and the Stribeck curve dips into the stick-slip zone (Section 3.5). Start-stop cycles and slow finishing feeds are therefore the enemies of pure hydrodynamic ways. Designers support the film with detail: tapered gibs and inserted wedges set the converging geometry; scraping creates oil pockets that feed the wedge; oil grooves distribute lubricant along the travel; PTFE-based facings cut the boundary-regime friction that remains; wipers and covers keep swarf out of the interface.",
              "Materials pair as cast iron on cast iron, or harder steel ways on CI slides for heavy machines; plastic facings (PTFE-based tape) protect against seizure and scuffing during boundary excursions. Hydrodynamic ways suit steady, unidirectional, mid-to-high speed traverses - planer tables, heavy boring mill saddles - where their excellent damping and simple, pump-free construction pay off. They remain the cheapest way to buy damping; what they cannot buy is zero-speed precision.",
            ],
            bullets: [
              "Wedge principle: viscosity drags oil into a converging gap; pressure rises until its integral equals the load.",
              "Film thickness is conditional: below the speed threshold the way falls into boundary contact and friction climbs.",
              "Geometry by design: tapered gibs, inserted wedges and scraped reliefs create the converging gap.",
              "Support detail: oil pockets from scraping, distribution grooves, PTFE facings, wipers and way covers.",
              "Application window: steady unidirectional traversing - planer tables and heavy saddles - where damping matters most.",
            ],
            table: {
              caption: "Design features of a hydrodynamic slideway and their purposes.",
              headers: ["Feature", "Purpose"],
              rows: [
                ["Tapered gib / wedge insert", "Sets the converging film geometry"],
                ["Scraped oil pockets", "Feed and hold oil at the interface"],
                ["Distribution grooves", "Spread lubricant along the travel"],
                ["PTFE-based facing", "Cuts boundary-regime friction, prevents scuffing"],
                ["Wipers and way covers", "Keep swarf and coolant out of the film"],
                ["Hardened steel way on CI slide", "Wear pair for heavy, long-life service"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building the hydrodynamic wedge",
              caption:
                "Five stages from boundary contact to full film - the sketch exams expect.",
              steps: [
                { label: "Standstill: boundary contact", note: "asperities touch, high friction" },
                { label: "Traverse begins: oil dragged in", note: "viscous entrainment" },
                { label: "Converging gap pressurizes", note: "continuity forces the rise" },
                { label: "Lift-off: surfaces separate", note: "film equals the load" },
                { label: "Steady full film", note: "friction = oil shear only" },
              ],
            },
            callout: {
              type: "warning",
              title: "The zero-speed blind spot",
              body: "Never claim a hydrodynamic way supports the slide at rest - the film exists only while moving. Exam answers that forget this conflate hydrodynamic with hydrostatic and lose the defining distinction of Unit III.",
            },
            keyTerms: [
              {
                term: "Oil wedge",
                definition: "Converging lubricant film geometry whose pressure build-up supports the slide load in a hydrodynamic guideway.",
              },
              {
                term: "Boundary lubrication",
                definition: "Regime below hydrodynamic speed where asperities carry load through molecular oil films; friction is high.",
              },
              {
                term: "Tapered gib",
                definition: "Adjustable strip ground with a taper that forms the converging gap of a hydrodynamic slideway.",
              },
            ],
            examQuestions: [
              {
                q: "Explain the principle of hydrodynamic lubrication in machine tool slideways with the pressure distribution sketch. State its limitations and the design features used to support the film.",
                marks: 7,
                outline: [
                  "Principle: relative motion drags oil into a converging wedge; pressure rises by continuity.",
                  "Sketch: wedge with inlet, film thickness falling, pressure curve peaking then falling to exit.",
                  "Load capacity = integral of pressure over the area; film thickness falls with load and rises with speed.",
                  "Limitation 1: needs adequate speed - at rest the film collapses to boundary contact.",
                  "Limitation 2: stick-slip risk at low traverse speeds; start-stop wear.",
                  "Design features: tapered gibs and wedge inserts set geometry; scraping makes oil pockets.",
                  "Grooves distribute oil; PTFE facings protect boundary excursions; wipers and covers seal.",
                  "Applications: planer tables, heavy boring mill saddles - steady unidirectional traverses.",
                ],
              },
              {
                q: "Why does a hydrodynamic slideway fail to separate surfaces during slow finishing feeds?",
                marks: 2,
              },
              {
                q: "State the function of scraping oil pockets on a slideway surface.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Hydrostatic guideways",
            body: [
              "The hydrostatic guideway buys certainty with a pump. Oil at constant supply pressure flows through a restrictor - capillary or orifice - into a machined pocket in the slide, escapes through the surrounding land clearance, and returns through drains. The restrictor is the genius of the system: if the load pushes the slide closer to the way, the pocket's outflow resistance rises, pocket pressure climbs, and the slide is pushed back until equilibrium. Opposed pads handle bidirectional loads and moments by preloading the slide between two pockets. The result is a slide that floats - no metal contact at any speed, including zero.",
              "The numbers explain the affection of precision builders. Supply pressures of order 10-20 bar, pocket pressure held near half of supply for best stiffness, film thickness of 20-40 microns, and filtration to 5-10 micron absolute to keep restrictors from silting. Because there is no contact, there is no wear, no run-in drift, and no stick-slip at any crawl speed; because the film is squeezed in the lands, damping is enormous - the reason grinders and jig borers love hydrostatics. The costs are honest: pump and power losses, a filtration and drainage system, and thermal management of the oil.",
              "Applications follow the physics. Surface and roll grinders ride their tables on hydrostatic films to hold geometry under grinding load; jig borers and coordinate machines exploit the zero-friction, zero-wear motion; heavy machining centers put pockets under saddles and rams; the same principle builds hydrostatic lead screws (a preloaded nut with opposing pockets) and spindle journal bearings. In every case the exam sketch is identical: supply, restrictor, pocket, land, drain - with the pressure balance annotated for the loaded and unloaded states.",
            ],
            bullets: [
              "Circuit: pump - restrictor (capillary/orifice) - pocket - land clearance - drain; the restrictor self-regulates pocket pressure.",
              "Opposed pads preload the slide between two pockets to take loads and moments in both directions.",
              "Typical numbers: 10-20 bar supply, pocket pressure about half supply, 20-40 micron film, 5-10 micron filtration.",
              "Payoff: no contact means no wear and no stick-slip; squeezed-film damping is the best of any guideway.",
              "Applications: grinders, jig borers, heavy VMC saddles - plus hydrostatic screws and spindle bearings.",
            ],
            table: {
              caption: "Hydrostatic system parameters and design choices.",
              headers: ["Element", "Typical choice", "Effect"],
              rows: [
                ["Restrictor", "Capillary (vs orifice)", "Stiff, load-independent behaviour"],
                ["Pocket pressure ratio", "About 0.5 of supply", "Maximum stiffness margin"],
                ["Film thickness", "20-40 micron", "No contact; land squeeze gives damping"],
                ["Filtration", "5-10 micron absolute", "Protects restrictors from silting"],
                ["Pump unit", "Constant-pressure gear pump", "Feeds all pockets from one rail"],
                ["Opposed pads", "Two facing pockets", "Bidirectional load and moment capacity"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Hydrodynamic versus hydrostatic slideway",
              caption:
                "The exam-favourite contrast: self-made film against pump-fed float.",
              left: {
                heading: "Hydrodynamic",
                items: [
                  "Film self-generated by traverse speed",
                  "Needs a converging wedge geometry",
                  "Fails at rest: boundary contact",
                  "No pump, no filtration - cheap",
                  "Steady mid-to-high speed slides",
                ],
              },
              right: {
                heading: "Hydrostatic",
                items: [
                  "Oil pumped through restrictors into pockets",
                  "Works at zero speed: never any contact",
                  "Restrictor self-adjusts pocket pressure",
                  "Needs pump, 5-10 micron filtration",
                  "Grinders, jig borers, heavy precision slides",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the hydrostatic pad with the full circuit labelled - supply, restrictor, pocket, land, drain - twice: once at no load, once displaced. The shifted pressure balance explains the stiffness; that annotation is what turns a sketch into a 7-mark answer.",
            },
            keyTerms: [
              {
                term: "Restrictor",
                definition: "Capillary or orifice upstream of a hydrostatic pocket whose pressure drop shifts with film thickness, self-regulating the pad.",
              },
              {
                term: "Opposed pad",
                definition: "Pair of facing hydrostatic pockets preloading a slide so it can carry bidirectional loads and moments without contact.",
              },
              {
                term: "Squeeze-film damping",
                definition: "Energy dissipated as oil is pressed through the land clearance whenever the film thickness changes - the hydrostatic damping bonus.",
              },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a hydrostatic guideway with a sketch showing pump, restrictor, pocket and drain. How does the system develop stiffness against load, and why is it preferred for grinding machines?",
                marks: 7,
                outline: [
                  "Sketch: pump, supply line, restrictor, pocket, land clearance, drain return.",
                  "Working: oil flows through restrictor into pocket, escapes over the land at controlled rate.",
                  "Load response: displacement reduces land clearance, pocket pressure rises, restoring force grows - equilibrium restored.",
                  "Stiffness = d(load)/d(film thickness); maximum when pocket pressure is about half supply.",
                  "Opposed pads: preload between two pockets for bidirectional load and moment stiffness.",
                  "Advantages: no metal contact - no wear, no stick-slip at any speed; huge squeeze-film damping.",
                  "Why grinders prefer it: geometry holds under grinding load; crawl speeds possible; vibration damped.",
                  "Limitations: pump power, filtration to 5-10 micron, oil temperature control, cost.",
                ],
              },
              {
                q: "State two advantages and two limitations of hydrostatic guideways.",
                marks: 2,
              },
              {
                q: "What is the function of the restrictor in a hydrostatic pocket?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Linear rolling guides",
            body: [
              "The linear rolling guide is the workhorse of modern CNC construction. A ground profiled rail bolts to the machine casting along a machined datum edge; a carriage rides it on recirculating ball or roller circuits - typically four rows in a Gothic-arch groove where 45-degree contact gives equal stiffness in all four load directions. Balls give point contact: low friction (about 0.002-0.005, essentially speed-independent), smooth high-speed motion, and no stick-slip, because rolling elements see no breakaway-to-running gap. Rollers give line contact: two to three times the load capacity and stiffness, preferred for heavy cutting and overhung loads, at the price of tighter mounting flatness.",
              "Preload removes clearance. Factory-set classes - light, medium, heavy - introduce a measured interference between balls and raceway so the carriage has no play in any direction; stiffness rises with preload, and so does friction and heat. Accuracy grades of the rail set the running parallelism the axis can achieve, which is why precision machines specify matched rail pairs ground as a set. Life follows rolling-bearing logic: rated life in kilometres of travel scales with (dynamic load rating / equivalent load) cubed for balls - heavy overhung loads or short rapid cycles shrink it fast.",
              "Detailing decides survival in a chip-laden shop. Wipers scrape debris at both carriage ends, lubrication blocks meter grease or oil, and way covers or bellows shield the rails wherever swarf falls. Rolling guides bring little damping - the standing criticism versus slideways - so precision machines either add viscous damper cartridges, hybrid roller-plus-pad arrangements, or rely on the control's ability to cut inside stability lobes. The exam sketch is the carriage cross-section: rail, Gothic arch grooves, ball circuits, end caps with recirculation, wipers, and the preload arrows.",
            ],
            bullets: [
              "Construction: ground profiled rail on a datum edge + carriage with recirculating circuits in Gothic-arch grooves.",
              "Ball type: point contact, friction about 0.002-0.005, high speed, no stick-slip - the default CNC axis.",
              "Roller type: line contact, 2-3 x load and stiffness - heavy cuts and overhangs, needs flatter mounting.",
              "Preload classes (light/medium/heavy) remove clearance for stiffness; they raise friction and heat - choose by duty.",
              "Life in km scales as (C/P)^3 for balls - overhung loads and endless rapid cycles are the killers.",
            ],
            table: {
              caption: "Rolling guide selection: preload class and element type.",
              headers: ["Choice", "State", "Application"],
              rows: [
                ["Light preload", "Clearance just removed", "Grinding machines, measuring axes"],
                ["Medium preload", "Slight interference", "Standard machining centers"],
                ["Heavy preload", "Measured interference", "Heavy cutting, overhung loads"],
                ["Ball carriage", "Point contact", "General CNC axes, high speed"],
                ["Roller carriage", "Line contact", "Heavy VMC/HMC, gantry drives"],
                ["Hybrid rail + pad", "Roller plus sliding pad", "High-end machines buying back damping"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Ball carriage versus roller carriage",
              caption:
                "Point contact against line contact - speed and smoothness against load and stiffness.",
              left: {
                heading: "Ball-type guide",
                items: [
                  "Four-row Gothic-arch ball circuits",
                  "Friction about 0.002-0.005",
                  "High-speed, very smooth travel",
                  "Lower load and stiffness rating",
                  "Default for machining-center boxes",
                ],
              },
              right: {
                heading: "Roller-type guide",
                items: [
                  "Cylindrical rollers, line contact",
                  "2-3 x stiffness and load of balls",
                  "Best for heavy cuts and overhangs",
                  "Needs flatter, cleaner mounting",
                  "Heavy VMC/HMC and large gantries",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Damping does not come free",
              body: "Rolling guides win on friction but bring almost no damping compared with slideways. In any comparison answer, state the mitigation - damper cartridges, hybrid pads, or stability-lobe-aware cutting - or the comparison is only half true.",
            },
            keyTerms: [
              {
                term: "Gothic arch groove",
                definition: "Two-arc groove profile giving 45-degree ball contact and equal stiffness in radial and lateral directions.",
              },
              {
                term: "Preload class",
                definition: "Factory interference between rolling elements and raceway that removes carriage play in exchange for higher friction.",
              },
              {
                term: "Rated travel life",
                definition: "Life in kilometres scaling with (dynamic rating / equivalent load)^3 for ball guides.",
              },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a linear rolling guide with a carriage cross-section. Explain preload classes, compare ball and roller elements, and discuss the life calculation and damping limitation of rolling guides.",
                marks: 7,
                outline: [
                  "Construction sketch: rail, Gothic-arch grooves, ball circuits, recirculation end caps, wipers.",
                  "Contact geometry: 45-degree Gothic arch gives equal stiffness in all four directions.",
                  "Friction: 0.002-0.005, speed-independent, no breakaway - hence no stick-slip.",
                  "Preload classes: light, medium, heavy interference - clearance removal vs friction and heat.",
                  "Ball vs roller: point vs line contact; rollers give 2-3 x load and stiffness.",
                  "Life: rated km of travel scales with (C/P)^3 for balls - show a numeric example.",
                  "Limitation: negligible damping - add damper cartridges or hybrid pads; cut within lobes.",
                  "Mounting: datum edge, ground rail pairs, covers and wipers for chip defence.",
                ],
              },
              {
                q: "Why are linear rolling guides free from stick-slip?",
                marks: 2,
              },
              {
                q: "A ball guide has dynamic rating 50 kN and sees 10 kN equivalent load. By what factor does doubling the load cut the life?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Stick-slip: cause and cures",
            body: [
              "Stick-slip is the jerky, low-frequency crawl of a slideway axis commanded to move slowly. Its cause sits in the friction characteristic: at very low sliding speed, static (breakaway) friction exceeds kinetic (running) friction - the falling branch of the Stribeck curve in the boundary regime. When the servo turns, the drive train - motor, coupling, screw, nut - winds up elastically while the table still sticks; the force builds until static friction lets go, the stored energy dumps, the table jumps, the force relaxes below kinetic friction, and the table decelerates until it sticks again. The result is a limit cycle of microns to tenths of a millimetre.",
              "The consequences are positioning uncertainty, dithered surface finish at fine feeds, and worn ways concentrated at the stick points. Every cure attacks one of the three actors. Reduce the friction gap: rolling guideways, PTFE-based slideway facings, friction-modified slideway oils, or hydrostatics remove the falling branch entirely. Raise drive stiffness: preloaded ball screws, short direct-coupled trains, and stiff couplings reduce the elastic energy that can store between stick events. Damp or command around it: higher gains with feedforward, or simply avoiding crawl feeds on sliding machines.",
              "Diagnosis is a friction-versus-velocity trace: a falling segment at low speed flags the risk, and the area of the falling branch predicts the severity. The classical exam answer names the Stribeck curve, draws the limit cycle, and lists cures in the three families above. Historically, stick-slip is why machine tools crawled poorly for a century and why the rolling-guide-plus-ball-screw pairing of modern CNC - constant low friction, stiff preloaded drive - quietly abolished it from everyday machining.",
            ],
            bullets: [
              "Root cause: static friction exceeds kinetic at low speed - the falling Stribeck branch in boundary lubrication.",
              "Mechanism: drive winds up while the table sticks; breakaway dumps stored elastic energy as a jump; re-stick closes the loop.",
              "Consequences: micron-to-tenth-mm positioning scatter and chatter-marked finish at fine feeds.",
              "Cure family 1 (friction): rolling guides, PTFE facings, friction-modified oil, hydrostatics.",
              "Cure family 2 (stiffness): preloaded ball screw, direct coupling, short drive train; family 3: gains, feedforward, avoid crawl feeds.",
            ],
            table: {
              caption: "Stick-slip remedies mapped to their mechanism.",
              headers: ["Remedy", "Mechanism attacked", "Where applied"],
              rows: [
                ["Rolling linear guides", "Friction gap (no falling branch)", "All modern CNC feed axes"],
                ["PTFE-faced slideways", "Breakaway-kinetic gap narrowed", "Retrofit of conventional machines"],
                ["Hydrostatic pads", "No solid contact at all", "Precision grinders, jig borers"],
                ["Preloaded ball screw", "Drive elasticity (stored energy)", "Every CNC feed axis"],
                ["Friction-modified oil", "Flattens the Stribeck curve", "Slideway lubrication systems"],
                ["Feedforward control", "Following-error-driven dither", "Servo tuning of slow axes"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The stick-slip limit cycle",
              caption:
                "Energy stores in the drive, dumps at breakaway, and re-sticks - around and around.",
              steps: [
                { label: "Servo commands slow steady feed", note: "motor starts turning" },
                { label: "Table sticks; drive winds up", note: "elastic energy stores" },
                { label: "Breakaway: static friction exceeded", note: "table lurches forward" },
                { label: "Friction drops to kinetic; jump overshoots", note: "stored energy dumps" },
                { label: "Drive relaxes; table re-sticks", note: "cycle repeats" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Stick-slip answers need exactly two figures: the friction-vs-velocity curve with the falling branch marked, and the wind-up-jump-restick cycle. Then list cures under three headings - friction, stiffness, control. That structure is a full-mark template.",
            },
            keyTerms: [
              {
                term: "Stick-slip",
                definition: "Low-speed limit cycle of a sliding axis caused by breakaway friction exceeding running friction.",
              },
              {
                term: "Stribeck curve",
                definition: "Friction versus sliding speed showing the falling branch in boundary/mixed lubrication that enables stick-slip.",
              },
              {
                term: "Breakaway friction",
                definition: "Static friction force that must be exceeded before relative sliding begins - always above kinetic friction on slideways.",
              },
            ],
            examQuestions: [
              {
                q: "What is stick-slip in machine tool slideways? Explain its cause using the friction-velocity characteristic, describe the phenomenon step by step, and state the remedies.",
                marks: 7,
                outline: [
                  "Define stick-slip: jerky low-frequency crawl of a slow axis on sliding guideways.",
                  "Draw friction vs velocity; mark static/breakaway above kinetic on the falling boundary branch.",
                  "Step 1: servo turns, drive train (screw, nut, coupling) winds up elastically, table still stuck.",
                  "Step 2: force reaches breakaway value; stored elastic energy dumps; table jumps.",
                  "Step 3: friction falls to kinetic, table overshoots and decelerates; drive relaxes; table re-sticks.",
                  "Consequences: positioning scatter, poor finish at fine feeds, localized way wear.",
                  "Remedies - friction side: rolling guides, PTFE facings, friction-modified oils, hydrostatics.",
                  "Remedies - stiffness and control side: preloaded ball screws, short stiff trains, feedforward gains.",
                ],
              },
              {
                q: "Why does a rolling guideway never exhibit stick-slip?",
                marks: 2,
              },
              {
                q: "Sketch the Stribeck curve and mark the regimes of boundary, mixed and full-film lubrication.",
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
      title: "Controls and Metrology",
      summary:
        "The digital half of the machine: CNC architecture and interpolators, feedback devices from encoders to linear scales, alignment testing per standard test codes, laser interferometer measurement of positioning, and the error compensation tables that convert measurement into accuracy.",
      chapter: {
        number: "04",
        title: "Controls and Metrology",
        intro:
          "Unit IV closes the loop. The CNC control reads G-code, interpolates geometry into axis set-points, and closes position loops around feedback devices - encoders on motors or linear scales on the axes. Metrology then proves the machine: alignment tests check its geometry with levels, indicators and mandrels, the laser interferometer measures positioning to sub-micron levels, and compensation tables fold the measured errors back into the control. Measure, compensate, verify - the modern accuracy cycle.",
        inOneBreath:
          "A CNC reads the part program, decodes it, interpolates linear, circular and spline geometry into position set-points every few milliseconds, plans acceleration with look-ahead, and closes position loops over velocity and current loops; feedback comes from quadrature encoders on the motor (semi-closed) or linear scales on the axis (full closed), the latter immune to screw pitch error; alignment tests per standard test codes use precision levels, dial indicators, mandrels and squares to verify runout, parallelism and squareness; the He-Ne laser interferometer with wavelength about 0.6328 micron measures displacement as N x lambda / 2, corrected for air and material temperature, and yields positioning accuracy and repeatability per ISO 230-2; and compensation tables for pitch, backlash, squareness and thermal growth - up to 21 volumetric terms - convert measured error into corrected command, provided the error is repeatable.",
        sections: [
          {
            number: "4.1",
            title: "CNC architecture and interpolation",
            body: [
              "The CNC control is a pipeline of processors. The part program's G and M codes are read from storage, decoded and preprocessed - offsets, tool radius compensation, coordinate transformations applied - and then the interpolator turns each block's geometry into a stream of axis set-points issued every control cycle of a few milliseconds. Behind it, the look-ahead acceleration planner reads dozens of blocks ahead to keep feedrate continuous across direction changes, decelerating into and accelerating out of corners within the axes' limits. Modern controls add spline and NURBS interpolation so mold surfaces flow as one curve instead of thousands of tiny chords.",
              "Linear interpolation is parameterization along a straight line: each cycle receives the point at distance s = feed x t along the block. Circular interpolation parameterizes the arc angle; classically it was done with digital differential analyzers - integrators whose overflow pulses stepped the axes - and today with direct trigonometric evaluation. Helical, polar and cylindrical interpolation extend the same idea; 5-axis controls add rotary-axis coordination and tool-center-point management, which reorients the tool while the linear axes compensate to keep the tip on path. Coarse interpolation by the control and fine interpolation by the drives give both throughput and smoothness.",
              "For the exam, the architecture diagram is the product: program storage, decoder, interpolator, planner, axis position loops, machine, feedback. The distinction to keep straight is between the interpolator (path geometry, milliseconds) and the servo loops (axis dynamics, microseconds) - the first commands, the second tracks. A block diagram with those layers, plus a note on look-ahead and canned cycles, answers most interpolation questions in full.",
            ],
            bullets: [
              "Pipeline: storage, decoder/preprocessor, interpolator, look-ahead planner, position loops, machine, feedback.",
              "Interpolator issues set-points every few milliseconds; servo loops track them at kilohertz rates - geometry vs dynamics.",
              "Linear interpolation: parameterize distance along the block; circular: parameterize arc angle (DDA historically).",
              "Look-ahead reads many blocks ahead to plan deceleration through corners within axis acceleration limits.",
              "Spline/NURBS interpolation turns freeform surfaces into smooth curves - the heart of high-speed mold cutting.",
            ],
            table: {
              caption: "Interpolation types in CNC controls.",
              headers: ["Interpolator", "Geometry", "Typical use"],
              rows: [
                ["Linear (G01)", "Straight lines at any angle", "Universal contouring"],
                ["Circular (G02/G03)", "Arcs in a selected plane", "Radii, fillets, pockets"],
                ["Helical", "Arc + synchronized linear axis", "Thread milling, ramping"],
                ["Polar coordinate", "Bolt circles, angular patterns", "Hole patterns on flanges"],
                ["Spline / NURBS", "Freeform curves from control points", "High-speed mold and die"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From G-code to axis motion",
              caption:
                "Six stages of the CNC data path - the block diagram exam answers are built from.",
              stages: [
                { label: "Part program storage", note: "G/M code blocks" },
                { label: "Decoder and preprocessor", note: "offsets, radius comp" },
                { label: "Interpolator", note: "set-points each cycle" },
                { label: "Look-ahead planner", note: "accel/decel profiles" },
                { label: "Fine interpolation + position loops", note: "axis level" },
                { label: "Servo drives and machine axes", note: "feedback closes here" },
              ],
            },
            callout: {
              type: "tip",
              title: "Write the math, not prose",
              body: "Interpolation questions score on the parameterized equations: for a line, x = x0 + (x1 - x0) s / L; for an arc, x = xc + R cos(theta). State that the interpolator steps s or theta by feed x cycle-time each cycle, and half the marks are banked.",
            },
            keyTerms: [
              {
                term: "Interpolator",
                definition: "Control module that converts block geometry into a timed stream of axis position set-points at the control cycle rate.",
              },
              {
                term: "Look-ahead",
                definition: "Planner reading many blocks ahead to shape acceleration profiles that keep feed continuous through path changes.",
              },
              {
                term: "DDA interpolation",
                definition: "Classical digital differential analyzer technique integrating axis velocities to generate circular and linear pulses.",
              },
            ],
            examQuestions: [
              {
                q: "Draw the block diagram of a CNC control and explain the function of each stage. Derive the interpolation equations for a linear (G01) and a circular (G02) move.",
                marks: 7,
                outline: [
                  "Diagram: program storage, decoder, interpolator, look-ahead planner, position loops, machine, feedback.",
                  "Decoder: parses G/M words, applies offsets and tool radius compensation.",
                  "Interpolator: issues set-points each control cycle of a few ms.",
                  "Linear: L = sqrt(dx^2 + dy^2); point at distance s = feed x t: x = x0 + dx x s / L, y likewise.",
                  "Circular: x = xc + R cos(theta), y = yc + R sin(theta); theta advances at feed / R per second.",
                  "Look-ahead: plans deceleration through corners within axis acceleration limits.",
                  "Servo loops track set-points at kilohertz - geometry versus dynamics division of labour.",
                  "Mention helical/polar/NURBS extensions and canned cycles for completeness.",
                ],
              },
              {
                q: "Distinguish between the interpolator and the servo position loop in a CNC.",
                marks: 2,
              },
              {
                q: "Why do high-speed controls prefer NURBS interpolation to chains of tiny linear blocks?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Feedback devices: encoders and linear scales",
            body: [
              "Feedback devices tell the control where the axis actually is. The incremental rotary encoder is the default: a disk with a fine grating is read optically into two square waves in quadrature - a 90-degree phase relationship that both quadruples resolution and reveals direction - plus a once-per-rev index pulse for homing. A 2500-line disk yields 10,000 counts per revolution; on a 10 mm lead screw that is 1 micron of commanded resolution. Absolute encoders code the angle uniquely on the disk or across geared disks (multi-turn), so the axis knows its position the instant power returns - no homing cycle, safer for machines with toolchangers.",
              "Mounted on the motor or screw, an encoder measures rotation, and the screw translates it: pitch error, torsional wind-up, backlash and thermal growth of the screw all sit outside the measurement - the semi-closed loop's blind spot, patched with compensation tables (Section 4.5). The linear scale removes the blind spot: a glass or steel rule on the axis reads the table's true position, typically from a 20 micron signal period electronically subdivided to sub-micron counts. Full closed loop follows, at the cost of a sealed installation protected from coolant and chips.",
              "The comparison table is the exam answer. Encoder on motor: sealed, cheap, standard, blind to screw errors. Linear scale on axis: direct, accurate, immune to screw error and backlash, needing sealing air and careful alignment. Resolvers - analog, rugged, tolerant of heat - still guard spindle motors; inductive and magnetic scales survive the dirtiest machines. Precision machines increasingly pair both: the encoder closes the velocity loop, the scale closes position - dual feedback.",
            ],
            bullets: [
              "Quadrature signals: two square waves 90 degrees apart give 4x line resolution and direction from phase order.",
              "Incremental encoders need homing (index pulse); absolute encoders know position immediately on power-up.",
              "Encoder-on-motor (semi-closed) hides screw pitch error, wind-up, backlash and thermal growth behind compensation.",
              "Linear scale on the axis (full closed) measures the table itself - sub-micron class, but needs sealing and alignment.",
              "Resolvers remain the rugged analog choice for hot spindle motors; inductive scales survive dirty environments.",
            ],
            table: {
              caption: "Feedback devices compared.",
              headers: ["Device", "Principle", "Typical resolution", "Placement"],
              rows: [
                ["Incremental encoder", "Quadrature optical grating", "4x line count per rev", "On motor (semi-closed)"],
                ["Absolute encoder", "Coded disk, SSI/EnDat bus", "20+ bits, multi-turn", "On motor, no homing"],
                ["Resolver", "Analog sine/cosine rotor", "12-16 bit equivalent", "Spindle motors, hot zones"],
                ["Linear glass scale", "20 micron period subdivided", "Sub-micron", "On axis (full closed)"],
                ["Inductive/ magnetic scale", "Magnetic or inductive rule", "1-5 micron", "Dirty, coolant-rich machines"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Indirect versus direct position feedback",
              caption:
                "Encoder on the motor against linear scale on the table - the defining metrology choice.",
              left: {
                heading: "Encoder on motor (indirect)",
                items: [
                  "Sealed inside the drive - protected",
                  "Reads rotation; screw maps to travel",
                  "Blind to pitch error and wind-up",
                  "Semi-closed loop with compensation",
                  "Standard on general CNC machines",
                ],
              },
              right: {
                heading: "Linear scale on axis (direct)",
                items: [
                  "Measures the table position itself",
                  "Immune to screw error and backlash",
                  "Full closed loop, tightest accuracy",
                  "Needs sealing air and alignment",
                  "Jig borers, grinders, metrology axes",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Quadrature questions want the sketch: two square waves with A leading B for one direction, lagging for the other, and the 4x counting edges marked. Draw the screw between encoder and table with the error sources labelled 'unseen' - that single annotation is the semi-closed-loop concept.",
            },
            keyTerms: [
              {
                term: "Quadrature signal",
                definition: "Pair of encoder square waves 90 degrees out of phase; edge counting gives 4x resolution and direction.",
              },
              {
                term: "Linear scale",
                definition: "Direct-measuring ruler on the machine axis, typically a 20 micron optical period subdivided electronically.",
              },
              {
                term: "Absolute encoder",
                definition: "Encoder whose disk pattern codes a unique angle, so position is known immediately after power-up without homing.",
              },
            ],
            examQuestions: [
              {
                q: "Explain the working of an incremental optical encoder with the quadrature signal sketch. Compare semi-closed loop (encoder on motor) and fully closed loop (linear scale) feedback for CNC machines.",
                marks: 7,
                outline: [
                  "Construction: grating disk, LED, photodetectors, two channels 90 degrees apart.",
                  "Sketch: A and B square waves; A leads B in one direction, lags in the other.",
                  "Resolution: 4 edges per line - 2500 lines gives 10,000 counts/rev; index channel for homing.",
                  "Semi-closed: encoder on motor; screw maps counts to travel; blind to pitch error, wind-up, backlash, growth.",
                  "Blind spot patched by pitch and backlash compensation tables.",
                  "Full closed: linear scale on the table measures true position; screw errors leave the loop.",
                  "Compare accuracy, cost, installation: sealing, alignment, contamination sensitivity.",
                  "Conclude: general machines semi-closed; precision grinders and jig borers full closed.",
                ],
              },
              {
                q: "How does an absolute encoder avoid a homing cycle after power-up?",
                marks: 2,
              },
              {
                q: "A 2000-line quadrature encoder drives a 5 mm lead screw. What is the table resolution?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Machine tool alignment tests",
            body: [
              "Alignment tests verify a machine's geometric relationships at acceptance, after installation and periodically through its life. The test codes descend from Schlesinger's classic schedule - twenty-one tests for a center lathe - adopted in India through standard test codes. The machine is first leveled on its foundation, because every later test inherits the level; then flatness and straightness of the slideways are checked, then spindle runout, then the relationships between spindle axis and slideways, and finally the cross relationships - squareness of cross-slide, alignment of tailstock to headstock, and on CNC machines, laser positioning.",
              "The instrument set is modest. A precision spirit level reading 0.01 mm per metre maps bed flatness by a grid of readings; dial test indicators with 0.002 mm graduations read runout against a mandrel or the spindle nose; a test mandrel simulates the spindle axis so parallelism can be measured over 300 mm; squares, straight edges and autocollimators close the kit. Every test records both the measured value and its tolerance from the test code - the answer sheet always shows three columns: test, instrument, permissible error.",
              "Procedure discipline matters as much as the list. Instruments and machine must share temperature; readings are taken at defined carriage positions and repeated for approach direction where reversal matters; results are trended across years to catch wear. Working accuracy tests - machining a test bar and measuring the part - complement geometric tests, and positioning tests with the laser interferometer (next section) extend the schedule to CNC axes. A passed alignment test is the machine's birth certificate; a failed one is its repair order.",
            ],
            bullets: [
              "Sequence is law: level first, then flatness and straightness, then runout, then parallelism, then squareness and tailstock.",
              "Schlesinger's schedule (21 tests for a center lathe) is the ancestor of today's standard test codes.",
              "Instruments: precision level (0.01 mm/m), DTI (0.002 mm), test mandrel, square, straight edge, autocollimator.",
              "Present results as a table: test, instrument, measured value, permissible error - four columns, every time.",
              "Geometric tests plus working accuracy tests plus laser positioning tests give the complete acceptance picture.",
            ],
            table: {
              caption: "Core alignment tests of a center lathe (typical tolerances).",
              headers: ["Test", "Instrument", "Typical tolerance"],
              rows: [
                ["Bed leveling and flatness", "Precision spirit level", "0.02-0.05 mm per m"],
                ["Spindle radial runout", "DTI at nose", "0.005 mm"],
                ["Spindle axial slip", "DTI + axial force", "0.005-0.01 mm"],
                ["Spindle axis vs bed ways", "Mandrel + DTI", "0.02 mm / 300 mm"],
                ["Cross-slide squareness", "Square + DTI", "0.02 mm / 300 mm"],
                ["Tailstock alignment", "Test bar between centers", "0.02 mm over 300 mm"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Alignment test sequence for a center lathe",
              caption:
                "Order matters: every test inherits the errors of the tests before it.",
              steps: [
                { label: "Level the machine", note: "foundation and anchor bolts" },
                { label: "Bed flatness and straightness", note: "precision level grid" },
                { label: "Spindle runout: radial, axial", note: "DTI at nose and mandrel" },
                { label: "Spindle axis vs bed ways", note: "mandrel over 300 mm" },
                { label: "Cross-slide squareness", note: "square and DTI" },
                { label: "Tailstock and centers", note: "test bar, both saddles" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "List at least six tests in a table with instrument and tolerance. Name Schlesinger and state the rule that leveling comes first - 'all subsequent tests inherit the level error' is the sentence examiners look for.",
            },
            keyTerms: [
              {
                term: "Alignment test",
                definition: "Standardized geometric check of a machine tool - runout, parallelism, squareness - against a test code with stated tolerances.",
              },
              {
                term: "Test mandrel",
                definition: "Precision ground bar inserted in the spindle taper to represent the spindle axis for parallelism measurement.",
              },
              {
                term: "Working accuracy test",
                definition: "Acceptance test in which a specified workpiece is machined and measured, complementing geometric tests.",
              },
            ],
            examQuestions: [
              {
                q: "Describe the alignment tests performed on a center lathe as per standard test codes. Give the instrument and permissible error for at least six tests and state why leveling precedes all of them.",
                marks: 7,
                outline: [
                  "Purpose: acceptance, installation and periodic verification of geometry; cite Schlesinger's schedule.",
                  "Level first: precision level over the bed, 0.02-0.05 mm/m - all tests inherit level errors.",
                  "Bed flatness/straightness: level grid or autocollimator along the ways.",
                  "Spindle radial runout: DTI on nose and on mandrel; tolerance about 0.005 mm.",
                  "Spindle axial slip: DTI with axial force, 0.005-0.01 mm.",
                  "Spindle axis vs bed: mandrel, DTI top and side over 300 mm; 0.02 mm.",
                  "Cross-slide squareness: square + DTI, 0.02 mm / 300 mm.",
                  "Tailstock alignment and working test: test bar between centers, then machine a test bar and measure.",
                ],
              },
              {
                q: "Why must a lathe be leveled before any other alignment test?",
                marks: 2,
              },
              {
                q: "How is the parallelism of the spindle axis to the bed ways tested and what causes error in this test?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Laser interferometer measurement",
            body: [
              "The laser interferometer is the reference instrument of machine tool metrology. A stabilized He-Ne laser (wavelength about 0.6328 micron) feeds a beam splitter: one arm reflects from a stationary reference cube-corner, the other from a retroreflector riding on the moving axis. The beams recombine and interfere; each half-wavelength of path change cycles the interference fringes, so displacement equals counted fringes times lambda / 2. Phase-sensitive electronics subdivide the fringe to resolutions of a few nanometres, and the raw count is corrected for air temperature, pressure and humidity - and for the workpiece-scale expansion of the machine itself against the 20 degree C reference.",
              "Procedure discipline defines the result. The machine is warmed through representative cycles to its working state; optics are mounted with the beam aligned to the axis path; environmental sensors feed the wavelength compensation; then the axis makes bidirectional runs to a ladder of target positions, dwelling at each so the control settles. Analysis per ISO 230-2 yields positioning accuracy (the band of bidirectional means), repeatability, and reversal (backlash) error - the standard figure set quoted in acceptance documents.",
              "With auxiliary optics the same laser measures much more: straightness with Wollaston optics, pitch and yaw with a differential two-beam arrangement, flatness by straightness on a grid, squareness with an optical square, and even spindle error motion at speed. Each measurement run also produces exactly the data an error-compensation table needs (Section 4.5), which is why the laser and the compensation cycle have become a single workflow in modern machine building.",
            ],
            bullets: [
              "Principle: He-Ne laser, wavelength about 0.6328 micron; displacement = fringe count N x lambda / 2.",
              "Wavelength compensation: air temperature, pressure and humidity sensors feed the correction; scale corrected to 20 degree C.",
              "Procedure: warm-up to thermal steady state, optics alignment, bidirectional runs to target positions, settle dwell.",
              "Outputs per ISO 230-2: positioning accuracy, repeatability and reversal (backlash) error per axis.",
              "Auxiliary optics: straightness (Wollaston), pitch/yaw (differential), flatness (grid), squareness (optical square).",
            ],
            table: {
              caption: "Laser interferometer measurements on a machine tool.",
              headers: ["Measurement", "Optics used", "Typical uncertainty"],
              rows: [
                ["Linear positioning", "Beam splitter + cube corners", "0.5-1 micron over 1 m"],
                ["Reversal / backlash", "Bidirectional runs", "0.3-0.5 micron"],
                ["Straightness", "Wollaston prism pair", "0.5-1 micron per m"],
                ["Pitch and yaw", "Differential two-beam", "About 1 arc-second"],
                ["Flatness", "Straightness on a grid", "2-4 micron total"],
                ["Squareness", "Optical square", "2-5 arc-seconds"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Laser measurement of axis positioning accuracy",
              caption:
                "Six steps from warm-up to compensation table - the ISO 230-2 workflow.",
              steps: [
                { label: "Warm the machine", note: "cycle to thermal steady state" },
                { label: "Mount optics and align beam", note: "laser, splitter, retroreflector" },
                { label: "Fit environmental sensors", note: "air and material compensation" },
                { label: "Bidirectional runs to targets", note: "dwell at each position" },
                { label: "Analyze per ISO 230-2", note: "accuracy, repeatability, backlash" },
                { label: "Export compensation table", note: "feeds Section 4.5" },
              ],
            },
            callout: {
              type: "warning",
              title: "Compensate before you trust",
              body: "An uncompensated laser reading can be several microns wrong per metre from air and material temperature alone. Always state the environmental corrections in an exam derivation - 'N x lambda / 2, corrected for air and 20 degree C scale' is the full formula.",
            },
            keyTerms: [
              {
                term: "He-Ne laser",
                definition: "Helium-neon gas laser whose stable 0.6328 micron wavelength is the length reference of interferometric metrology.",
              },
              {
                term: "Retroreflector",
                definition: "Cube-corner prism returning light parallel to its incident direction, converting axis motion into path-length change.",
              },
              {
                term: "ISO 230-2",
                definition: "Standard defining the test procedure and the figures - positioning accuracy, repeatability, reversal error - for linear axes.",
              },
            ],
            examQuestions: [
              {
                q: "Explain the principle and construction of a laser interferometer used for machine tool calibration. Derive the displacement relation, describe the measurement procedure, and list the errors it can measure beyond linear positioning.",
                marks: 7,
                outline: [
                  "Construction: stabilized He-Ne laser, beam splitter, reference cube-corner, moving retroreflector, detector.",
                  "Interference: path difference changes one lambda per half-wavelength of motion - fringes cycle.",
                  "Derivation: displacement = N x lambda / 2, with electronic subdivision below a fringe.",
                  "Environmental correction: air temperature, pressure, humidity; material expansion referred to 20 degree C.",
                  "Procedure: warm-up, optics alignment, bidirectional runs to a target ladder with dwell.",
                  "Analysis: positioning accuracy, repeatability and reversal error per ISO 230-2.",
                  "Other measurements: straightness (Wollaston), pitch/yaw (differential), flatness, squareness, spindle error.",
                  "Close: the run doubles as the data source for error compensation.",
                ],
              },
              {
                q: "Why does the interferometer count N x lambda / 2 and not N x lambda per fringe?",
                marks: 2,
              },
              {
                q: "State three environmental corrections applied to laser readings and why each matters.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Error mapping and compensation",
            body: [
              "Compensation converts measurement into accuracy - provided the error is systematic. The pitch error table is the prototype: the laser run records each axis's error at intervals of, say, 50 mm; the CNC stores the table and shifts every commanded position by the interpolated correction, so the table arrives where the program intended. Backlash compensation adds a direction-dependent offset; cross-axis or squareness compensation corrects the tilt of one axis against another; thermal compensation takes live temperatures from sensors on the screw and structure and scales corrections through a model fitted from measurement.",
              "The full formalism is volumetric compensation. A three-axis machine carries 21 error terms: linear, vertical, straightness, roll, pitch and yaw for each axis (18) plus three squareness terms. Mapping them - laser plus level plus ballbar - and compensating the rigid-body sum shrinks volumetric error dramatically on large machines. The limit is fundamental: compensation fixes only repeatable error. Random scatter, load deflection that changes with the cut, and chatter are mechanical problems needing stiffness and damping, not software.",
              "Workflow closes the loop and this unit. Measure with the laser; fit the tables; load them into the control parameters; verify by a fresh run - the compensated accuracy should fall inside the class tolerance; monitor seasonally because thermal behaviour drifts with the building. Between laser sessions a ballbar test between two axes gives a quick circularity check that exposes backlash, squareness error and servo mismatch in minutes - the standard monthly health check of a working machine shop. In the exam, the answer structure is the cycle itself: measure, map, compensate, verify - with the 21-term volumetric list and the repeatability caveat as the two technical anchors.",
            ],
            bullets: [
              "Pitch compensation: laser-measured error table per axis, interpolated and subtracted from every command.",
              "Backlash compensation: direction-dependent offset for reversal; only as good as the consistency of the backlash.",
              "Volumetric compensation: 21 rigid-body error terms (6 per axis + 3 squareness) mapped and summed for 3-axis machines.",
              "Thermal compensation: sensor-based model scaling corrections with screw and structure temperature.",
              "Hard limit: only repeatable errors compensate - random scatter, load deflection and chatter need stiffness and damping.",
            ],
            codeExample: {
              language: "python",
              caption: "Applying a laser-measured pitch-error compensation table.",
              code: `# Pitch-error compensation: measured error loaded into the CNC.
# measured[x_mm] = signed positioning error (micron) from a laser run.
measured = {0: 0.0, 100: 3.1, 200: 4.8, 300: 4.2, 400: 6.9, 500: 7.4}

def compensated_command(target_mm):
    """Position command corrected by the interpolated error table."""
    xs = sorted(measured)
    for a, b in zip(xs, xs[1:]):
        if a <= target_mm <= b:
            f = (target_mm - a) / (b - a)
            err_um = measured[a] + (measured[b] - measured[a]) * f
            return target_mm - err_um / 1000.0
    return target_mm

for x in (50, 150, 250, 350, 450):
    print(f"target {x:3d} mm -> command {compensated_command(x):.4f} mm")

# backlash compensation, direction dependent
backlash_um = 6.0
def command_with_backlash(target_mm, approach):
    """approach: +1 moving positive, -1 moving negative."""
    c = compensated_command(target_mm)
    return c - approach * backlash_um / 2000.0

print("positive approach:", round(command_with_backlash(250, +1), 4))
print("negative approach:", round(command_with_backlash(250, -1), 4))`,
            },
            diagram: {
              kind: "cycle",
              title: "The error-compensation workflow",
              caption:
                "Measure, map, load, verify, monitor - compensation is a cycle, not an event.",
              steps: [
                { label: "Measure", note: "laser run per axis" },
                { label: "Map", note: "pitch, backlash, squareness tables" },
                { label: "Load", note: "write parameters into the CNC" },
                { label: "Verify", note: "remeasure against ISO 230-2" },
                { label: "Monitor", note: "refresh after rebuilds, thermal drift" },
              ],
            },
            callout: {
              type: "warning",
              title: "The repeatability ceiling",
              body: "Never promise that compensation fixes everything. State the rule: compensation corrects systematic, repeatable error only. Random scatter and load-induced deflection require mechanical stiffness and damping - software cannot fix a flexible machine.",
            },
            keyTerms: [
              {
                term: "Pitch error compensation",
                definition: "Per-axis correction table from laser measurement, interpolated and applied to every commanded position.",
              },
              {
                term: "Volumetric compensation",
                definition: "Correction of the 21 rigid-body error terms of a three-axis machine to shrink volumetric positioning error.",
              },
              {
                term: "Backlash compensation",
                definition: "Direction-dependent command offset applied on reversal to cancel measured lost motion.",
              },
            ],
            examQuestions: [
              {
                q: "Explain pitch error compensation and backlash compensation in CNC machines. Describe the complete error-compensation workflow from laser measurement to verification, and state which errors cannot be compensated.",
                marks: 7,
                outline: [
                  "Pitch error: laser run records axis error at intervals; table stored in the CNC.",
                  "Application: every commanded position shifted by the interpolated correction - show a small numeric example.",
                  "Backlash: direction-dependent offset on reversal; effective only while backlash stays consistent.",
                  "Squareness/cross compensation: corrects one axis against another's tilt.",
                  "Thermal compensation: sensors plus model scale the correction with temperature.",
                  "Volumetric: 21 rigid-body terms (6 per axis + 3 squareness) mapped for 3-axis machines.",
                  "Workflow: measure, map, load, verify against ISO 230-2, monitor seasonally.",
                  "Limit: only repeatable error - random scatter, load deflection and chatter need mechanical fixes.",
                ],
              },
              {
                q: "Why can compensation not correct chatter or load-induced deflection?",
                marks: 2,
              },
              {
                q: "A laser run shows +5 micron error at 200 mm on an axis. What command does the CNC issue to reach a true 200 mm?",
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
      title: "Design of Specific Machines",
      summary:
        "The catalogue of practice: lathes and CNC turning centers, vertical and horizontal machining centers and 5-axis machines, grinding machines and their design demands, EDM in its die-sinking and wire forms, gear hobbing, the Indian machine tool industry, and the trends shaping its future.",
      chapter: {
        number: "05",
        title: "Design of Specific Machines",
        intro:
          "Unit V cashes in everything before it on real machines. The lathe becomes the slant-bed turning center; the machining center family divides into VMC, HMC and 5-axis by spindle orientation and axis count; grinders push stiffness, damping and wheel management to their limits; EDM removes metal without force; the gear hobber synchronizes two rotations into an involute. The unit closes with the Indian industry that builds these machines and the digital future they are joining.",
        inOneBreath:
          "The engine lathe's bed, headstock, carriage and tailstock evolve into the slant-bed turning center with motorized turret, live tooling, C-axis and sub-spindle for done-in-one machining; machining centers divide into VMC (vertical spindle, molds and plates), HMC (horizontal spindle, tombstones and pallet changers) and 5-axis machines (trunnion or head-head) that finish complex parts in one setup with tool-center-point control; grinding machines trade stock removal for microns - surface, cylindrical, centerless and creep-feed types built on hydrostatic ways and epoxy-granite beds with wheel truing, dressing and balancing as core technologies; EDM erodes metal by controlled sparks in a dielectric - die-sinking with shaped electrodes, wire EDM with a running brass wire - for hardened dies no cutter can touch; the gear hobbing machine synchronizes hob and workpiece rotations through an indexing gear train to generate involute teeth; and the Indian industry - IMTMA, Ace Micromatic, Jyoti CNC, BFW and the Bengaluru-Pune-Coimbatore clusters - is climbing the same digital curve: connectivity, digital twins and ever-more capable indigenous machines.",
        sections: [
          {
            number: "5.1",
            title: "Lathes and CNC turning centers",
            body: [
              "The engine lathe is the reference machine: a bed with shear-resisting ways, a headstock whose spindle carries the work, a tailstock for support, and a carriage - saddle, cross-slide, compound rest, tool post - driven through an apron by a feed rod and a lead screw for threading. Its design numbers are the swing over bed, the distance between centers, and the spindle bore; its gearbox logic is Unit II's speed and feed boxes; its alignment test schedule is Unit IV's lathe tests. Everything a machine tool is appears in this one machine, which is why every course starts here.",
              "The CNC turning center re-engineers the concept around the chip. The bed tilts - typically 30 to 60 degrees, the slant-bed - so chips and coolant fall clear of the ways while the cross-slide's normal aligns with the main cutting force; a motorized turret indexes tools in seconds; the spindle earns a C-axis (accurate angular position) so live tooling in the turret can mill flats, drill cross-holes and cut helical features on the part; a sub-spindle grabs the part from the main spindle to finish the second end without a second setup - done-in-one machining. Bar feeders and gantry loaders automate the loop.",
              "Design analysis of a turning center is a checklist of earlier units: slant-bed casting for the structural loop and chip flow; hydrostatic or roller-guided X and Z axes with preloaded ball screws; a spindle built to Unit II's bearing rules with C-axis accuracy; turret index accuracy and live-tool gearing; thermal management of spindle and ballscrews. The exam answer draws the slant-bed cross-section with the force path and lists the C-axis, live tooling and sub-spindle functions - construction first, then features, then a part-programming flavour.",
            ],
            bullets: [
              "Engine lathe anatomy: bed, headstock, spindle, carriage, cross-slide, compound, tailstock, apron, feed rod and lead screw.",
              "Slant bed (30-60 degrees): chips fall clear, coolant drains, and the cross-slide normal aligns with the main cutting force.",
              "Motorized turret with live (driven) tooling turns the lathe into a mill-drill: flats, cross holes, helices.",
              "C-axis = accurate spindle rotation under control - the enabler for live-tool work and rigid tapping.",
              "Sub-spindle transfers the part for second-end finishing in one setup - the 'done-in-one' strategy.",
            ],
            codeExample: {
              language: "text",
              caption: "G-code for a roughing-plus-finishing turning cycle on a CNC turning center.",
              code: `O0001 (SHAFT - ROUGH AND FINISH, TURNING CENTER)
N10 G21 G99 G96 S180 M03   ; metric, feed/rev, CSS 180 m/min
N20 T0101                   ; OD roughing tool, offset 01
N30 G00 X52. Z2. M08        ; rapid to start point, coolant on
N40 G71 U2. R1.             ; rough cycle: 2 mm depth, 1 mm retract
N50 G71 P60 Q110 U0.5 W0.1 F0.25
N60 G00 X20.                ; profile start
N70 G01 Z-30. F0.18         ; 40 mm dia journal
N80 X40. Z-45.              ; tapered shoulder
N90 Z-70.                   ; 40 mm dia shank
N100 X50.                   ; face up to stock dia
N110 G00 X120. Z100.        ; retract to safe index point
N120 M05 M09                ; spindle stop, coolant off
N130 M30                    ; end of program`,
            },
            table: {
              caption: "Engine lathe versus CNC turning center.",
              headers: ["Aspect", "Engine lathe", "CNC turning center"],
              rows: [
                ["Bed", "Horizontal, shear-rail ways", "Slant-bed casting, 30-60 deg"],
                ["Tooling", "Manual tool post", "Motorized turret, live tools"],
                ["Threading", "Lead screw + change gears", "Spindle-synced C-axis path"],
                ["Cycle time", "Operator-skill bound", "Program + bar feeder"],
                ["Typical accuracy", "0.05 mm class", "0.005-0.01 mm with comp"],
                ["Second-end work", "Re-chuck, second setup", "Sub-spindle, one setup"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a slant-bed turning center",
              caption:
                "Top to bottom: tool to chip conveyor - the turret-to-bed stack of a modern lathe.",
              layers: [
                { label: "Turret with live (driven) tools", note: "index in seconds" },
                { label: "X-axis cross-slide", note: "rides the slant ways" },
                { label: "Slant bed casting", note: "30-60 deg, chip flow path" },
                { label: "Main spindle + C-axis + chuck", note: "Unit II bearing rules" },
                { label: "Sub-spindle or tailstock", note: "second-end finishing" },
                { label: "Base, chip conveyor, coolant", note: "chip evacuation by gravity" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Describe construction and working of a CNC turning center' wants the slant-bed cross-section with the force path marked, then the feature list - turret, live tooling, C-axis, sub-spindle - each with a one-line function. Finish with one G-code block to show you can program it.",
            },
            keyTerms: [
              {
                term: "Slant bed",
                definition: "Inclined lathe bed (30-60 degrees) that sheds chips and coolant by gravity while aligning the cross-slide with the cutting force.",
              },
              {
                term: "Live tooling",
                definition: "Motorized tools in the lathe turret that mill, drill or tap on the rotating or C-axis-held workpiece.",
              },
              {
                term: "Sub-spindle",
                definition: "Second spindle that grips the part from the main spindle to finish the opposite end without re-fixturing.",
              },
            ],
            examQuestions: [
              {
                q: "Describe the construction and working of a CNC turning center with a slant-bed cross-section. Explain the functions of the turret, live tooling, C-axis and sub-spindle, and state why the bed is inclined.",
                marks: 7,
                outline: [
                  "Cross-section sketch: slant bed, cross-slide, spindle, turret, sub-spindle, chip conveyor.",
                  "Slant-bed reasons: chip and coolant evacuation by gravity; cutting force aligned to slide normal; torsional stiffness.",
                  "Turret: motorized indexing head carrying OD/ID tools; index time in seconds.",
                  "Live tooling: driven tools milling flats, drilling cross holes, cutting helices on the held part.",
                  "C-axis: spindle as a rotary axis under position control - enabler for live-tool and rigid tapping work.",
                  "Sub-spindle: part transfer for second-end finishing - done-in-one machining.",
                  "Axis design: roller or hydrostatic guides, preloaded ball screws, pitch compensation.",
                  "Close with a short G-code block (G71 roughing cycle) to show programming literacy.",
                ],
              },
              {
                q: "State two reasons for inclining the bed of a CNC turning center.",
                marks: 2,
              },
              {
                q: "What is the C-axis of a turning center and what does it enable?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Machining centers: VMC, HMC and 5-axis",
            body: [
              "The machining center is a milling machine with an automatic tool changer, a CNC and usually a pallet or table that indexes - designed to complete a part in one setup. The VMC hangs its spindle vertically over a fixed or traveling-column table: gravity helps chips fall out of pockets, the configuration is cheap and rigid for plate and mold work, and access to tall parts is limited. The HMC turns the spindle horizontal: chips fall out of pockets naturally, a fourth-axis tombstone indexes parts on multiple faces, and twin pallets exchange off-cycle so the machine cuts while the operator loads - non-cut time approaches zero.",
              "Five-axis machines add two rotary axes. Trunnion (table-table) machines put the rotations under the part - compact, ideal for turbinelike parts within the envelope; head-head machines rotate the spindle for huge, heavy parts; head-table hybrids split the duties. The payoff is finishing complex parts - impellers, structural monoliths, medical implants - in one setup, with shorter tools held near normal to the surface; the enabling software is tool-center-point (TCP) or RTCP control, which keeps the tool tip on path while the rotary axes reorient it, plus dynamic collision avoidance.",
              "Selection logic maps to the matrix: spindle orientation and axis count. Plate, mold and die work goes to 3-axis VMCs; prismatic batch work in quantity goes to HMCs on tombstones; complex contour parts in one setup go to 5-axis - increasingly as 3+2 positioning on cheaper trunnion machines, reserving simultaneous 5-axis for turbomachinery. Spindle taper (BT/HSK), tool magazine capacity, chip-to-chip time and thermal design separate the serious machines from the rest.",
            ],
            bullets: [
              "VMC: vertical spindle over the table - chip fall by gravity, rigid and affordable; the mold, plate and general shop machine.",
              "HMC: horizontal spindle - fourth-axis tombstones cut four faces per index; twin pallets slash non-cut time.",
              "5-axis kinematics: trunnion (table-table) for compact turbomachinery parts, head-head for huge structures, hybrids between.",
              "TCP/RTCP control keeps the tool tip on path while rotary axes reorient the tool - the software heart of 5-axis.",
              "Selection matrix: spindle orientation (V/H) x axis count (3 / 4-5) - map the part mix before the budget.",
            ],
            table: {
              caption: "VMC, HMC and 5-axis machining centers compared.",
              headers: ["Feature", "VMC", "HMC", "5-axis"],
              rows: [
                ["Spindle", "Vertical", "Horizontal", "Either + 2 rotary axes"],
                ["Chip evacuation", "Falls from open pockets", "Gravity helps in cavities", "Best, positional work"],
                ["Part faces per setup", "1 (or 2 with 4th)", "4 on a tombstone", "5-6 in one clamping"],
                ["Typical work", "Molds, plates, dies", "Prismatic batch parts", "Impellers, monoliths"],
                ["Non-cut time", "Table swaps optional", "Twin pallets standard", "Single setup dominates"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the machining center configuration",
              caption:
                "Spindle orientation against axis count - plot the part mix on this grid.",
              axes: {
                x: "Spindle orientation (left: vertical, right: horizontal)",
                y: "Axis count (top: 3-axis, bottom: 4-5 axis)",
              },
              quadrants: [
                { label: "3-axis VMC", note: "molds, plates, general machining" },
                { label: "3/4-axis HMC", note: "tombstone batch prismatic work" },
                { label: "5-axis VMC / trunnion", note: "one-setup complex contour parts" },
                { label: "5-axis HMC / mill-turn", note: "aerospace monoliths, blisks" },
              ],
            },
            callout: {
              type: "tip",
              title: "Answer with the matrix",
              body: "Comparison questions on VMC/HMC/5-axis are answered fastest as a table - chip handling, setups, tool length, typical parts, cost - plus one line each on tombstones and RTCP. Sketch the 2x2 selection matrix and place the part in a quadrant.",
            },
            keyTerms: [
              {
                term: "Tombstone",
                definition: "Multi-face fixture block on an HMC fourth axis that indexes so several part faces machine in one setup.",
              },
              {
                term: "RTCP / TCP control",
                definition: "Tool-center-point control keeping the tool tip on the programmed path while rotary axes reorient the tool.",
              },
              {
                term: "Trunnion machine",
                definition: "5-axis configuration with both rotary axes in the table, suited to compact, complex parts.",
              },
            ],
            examQuestions: [
              {
                q: "Compare vertical and horizontal machining centers. Explain the construction of a 5-axis machining center, the trunnion and head-head configurations, and the role of RTCP control.",
                marks: 7,
                outline: [
                  "Define machining center: milling machine + ATC + CNC, one-setup philosophy.",
                  "VMC: vertical spindle, gravity chip fall, rigid and cheaper; molds and plates.",
                  "HMC: horizontal spindle, tombstone fourth axis, twin pallets - chip evacuation and uptime.",
                  "5-axis: adds two rotary axes; simultaneous versus 3+2 positioning.",
                  "Trunnion: rotations under the part - compact envelope, turbine parts.",
                  "Head-head: rotations on the spindle - huge structural parts; hybrids between.",
                  "RTCP/TCP: control recomputes linear axes as rotaries move so the tip stays on path.",
                  "Benefits: shorter tools, better surface access, one setup; costs and programming complexity.",
                ],
              },
              {
                q: "Why does an HMC typically show a higher spindle utilization than a VMC?",
                marks: 2,
              },
              {
                q: "What is 3+2 machining and when is it preferred to simultaneous 5-axis?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Grinding machines",
            body: [
              "Grinding is the finishing act: dimensional tolerances of a few microns, surface finishes from 1.6 down to 0.1 micron Ra, and the ability to cut hardened steel and carbide that tools cannot touch. The wheel is the cutting tool - abrasive grit in a bond - and its specification (abrasive, grit, grade, structure, bond) is a design decision as consequential as any machine element. Because stock removal is small and the wheel is stiff, accuracy comes from the machine's geometry and damping rather than from process force, which is why grinding machines are built heavy, on hydrostatic or roller ways, with epoxy-granite or well-aged cast iron beds.",
              "The families follow the work geometry. Surface grinders - horizontal or vertical spindle over reciprocating or rotary tables - finish flats; cylindrical grinders swing shafts and journals between centers or in chucks; internal grinders bore precise holes; tool and cutter grinders recondition complex cutters; creep-feed grinders with CBN wheels remove full-depth profiles in a single pass. Centerless grinding holds a special place in production: the work rides on a blade between grinding and regulating wheels, the regulating wheel's tilt and the work's height-above-center control the rounding dynamics that make through-feed centerless so astonishingly productive.",
              "Machine design for grinding reads like a Unit I-III review: maximum damping (hydrostatic ways, epoxy granite), thermal stability (oil temperature control), wheel management (truing to shape, dressing to sharpness, static then dynamic balancing), spindle precision (often hydrostatic), coolant delivery and filtration down to micron class, and in-process gauging that keeps size inside closed-loop control. The exam answer pairs the machine sketch with the wheel-specification code and the centerless rounding geometry.",
            ],
            bullets: [
              "Grinding buys microns: IT5-6 tolerance, 0.1-1.6 micron Ra, and cuts materials tools cannot.",
              "Machine families: surface, cylindrical, internal, tool and cutter, creep-feed, centerless - keyed to work geometry.",
              "Centerless: work on a blade between grinding and regulating wheels; blade height and regulating tilt control rounding.",
              "Wheel management: truing to shape, dressing to sharpness, static then dynamic balancing - half of grinding success.",
              "Design demands: hydrostatic ways, epoxy-granite beds, filtered coolant, in-process gauging - damping above all.",
            ],
            table: {
              caption: "Grinding machine families and their niches.",
              headers: ["Type", "Work geometry", "Typical capability"],
              rows: [
                ["Surface (reciprocating)", "Flat surfaces", "Flatness a few micron"],
                ["Cylindrical (center-type)", "Shafts, journals", "Roundness about 0.002 mm"],
                ["Centerless", "Pins, bushings, bar stock", "0.003-0.005 mm at high rate"],
                ["Internal", "Bores and holes", "Roundness 0.003-0.005 mm"],
                ["Tool and cutter", "Regrinding cutters", "Flank and radius accuracy"],
                ["Creep-feed (CBN)", "Deep profiles", "Full-depth single pass"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Preparing a production grinding operation",
              caption:
                "Five steps from wheel selection to verified size - the grinding method sheet.",
              steps: [
                { label: "Select wheel spec", note: "abrasive, grit, grade, bond" },
                { label: "True and dress the face", note: "geometry then sharpness" },
                { label: "Balance the wheel", note: "static, then dynamic" },
                { label: "Set speeds and feeds", note: "wheel, work, crossfeed" },
                { label: "Verify with gauging", note: "in-process size control" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Centerless grinding questions are answered with the three-element sketch - grinding wheel, regulating wheel, work blade - and the two setting angles: work height above center and regulating wheel tilt. Label both and the rounding mechanism is proven.",
            },
            keyTerms: [
              {
                term: "Centerless grinding",
                definition: "Process in which the work is supported on a blade between grinding and regulating wheels, no centers or chuck needed.",
              },
              {
                term: "Dressing",
                definition: "Restoring the sharpness and openness of a grinding wheel face by fracturing or shearing the abrasive and bond.",
              },
              {
                term: "Creep-feed grinding",
                definition: "Deep, slow-pass grinding with a soft CBN wheel that removes a full profile in one pass.",
              },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a cylindrical or centerless grinding machine with a sketch. Explain the wheel specification code, the functions of truing, dressing and balancing, and why grinding machines demand exceptional damping.",
                marks: 7,
                outline: [
                  "Family sketch: machine table, wheelhead, workhead/ blade, coolant and gauge.",
                  "Centerless: grinding wheel, regulating wheel, work blade - work rotates and feeds by wheel tilt.",
                  "Rounding geometry: work height above center and regulating wheel tilt control out-of-round suppression.",
                  "Wheel code: abrasive type, grit size, grade, structure, bond - read one example.",
                  "Truing: shaping the wheel concentric and to form; dressing: exposing fresh sharp grit.",
                  "Balancing: static then dynamic - imbalance ruins finish and spindle bearings.",
                  "Damping demand: finish and profile live on the micro-scale, so vibration is intolerable - hydrostatic ways, epoxy granite beds.",
                  "Coolant filtration and in-process gauging close the size loop.",
                ],
              },
              {
                q: "State the function of the regulating wheel in centerless grinding.",
                marks: 2,
              },
              {
                q: "Why are epoxy granite beds common in grinding machines?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Electrical discharge machining (EDM)",
            body: [
              "EDM removes metal with controlled sparks, not edges. A shaped electrode and the work sit in a dielectric - kerosene for die-sinking, deionized water for wire - separated by a gap of a few hundredths of a millimetre. Each pulse charges the gap until the dielectric breaks down; the discharge melts and vaporizes a microscopic crater from both electrodes; the off-time flushes debris and restores the gap. Millions of craters per second sum to material removal, with parameters trading removal rate against surface finish and electrode wear: peak current and on-time govern crater size, off-time governs flushing stability, gap voltage governs gap width.",
              "The two machine families divide by electrode. Die-sinking (ram) EDM drives a shaped electrode - graphite or copper, chosen for wear and machinability - into the work to sink cavities: moulds, dies, deep slots in hardened steel, and features no cutter can reach. Wire EDM runs a 0.10-0.30 mm brass wire as the electrode along a CNC path, cutting precise profiles and tapers (U-V axes) through any conductive material, with several skim passes at decreasing energy for near-mirror accuracy. Both share the defining property: no cutting force, so thin, delicate and fully hardened work machines without deflection.",
              "Design of EDM machines leans on Unit I materials: the dielectric never touches stiffness issues, but sub-micron positioning over long travels with no friction variation demands precision ball screws or linear motors, and the thermal mass of the dielectric tank must be controlled. Limits are honest: recast and heat-affected layers must be removed or accounted for, electrodes wear, and removal is slow relative to milling - which is why high-speed machining has taken over rough die work while EDM owns the corners, deep ribs and finishes no cutter reaches. The comparison table (current, on-time, off-time, polarity against MRR, wear, finish) is the standard exam answer.",
            ],
            bullets: [
              "Spark erosion: dielectric breaks down each pulse, cratering both electrodes; off-time flushes and resets the gap.",
              "Parameter triangle: peak current and on-time set crater size (MRR, roughness); off-time sets flushing; voltage sets gap.",
              "Die-sinking EDM: shaped graphite or copper electrode sinks cavities - moulds, dies, unreachable features.",
              "Wire EDM: 0.10-0.30 mm brass wire on a CNC path, taper with U-V axes, skim passes for finish accuracy.",
              "No cutting force: hardened and delicate work machines undeflected - but recast layer and slow removal are the prices.",
            ],
            table: {
              caption: "EDM parameter effects.",
              headers: ["Parameter", "Increase causes", "Used for"],
              rows: [
                ["Peak current", "Higher MRR, rougher surface, more wear", "Roughing passes"],
                ["Pulse on-time", "Bigger craters, deeper recast", "Roughing cavities"],
                ["Pulse off-time", "Better flushing, lower MRR", "Stability control"],
                ["Gap voltage", "Larger gap, easier flush", "Poor flushing geometries"],
                ["Electrode polarity", "Shifts wear between tool and work", "Graphite usually electrode-positive"],
                ["Number of skims", "Finer finish, tighter geometry", "Wire finishing passes"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the EDM route for a hardened die feature",
              caption:
                "Process selection the way a toolroom actually argues it.",
              start: "A difficult feature must be machined in hardened die steel",
              branches: [
                {
                  label: "Die-sinking EDM, graphite electrode",
                  outcome:
                    "Sinks 3D cavities, deep ribs and blind slots no cutter can reach - the mold and die workhorse.",
                  good: true,
                },
                {
                  label: "Wire EDM",
                  outcome:
                    "Cuts precise 2D profiles and tapers through hard steel; needs a start hole and leaves an excellent finish.",
                  good: true,
                },
                {
                  label: "Conventional milling of the hardened steel",
                  outcome:
                    "Tool life collapses on hardened die steel - avoid unless the hardness is genuinely moderate.",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "The recast layer",
              body: "Every EDM surface carries a recast, heat-affected layer - harder, micro-cracked, and fatigue-hostile. State it in every EDM answer: finish passes reduce it, and critical surfaces may need polishing or shot peening afterwards.",
            },
            keyTerms: [
              {
                term: "Dielectric",
                definition: "Insulating fluid (kerosene or deionized water) that concentrates discharge energy and flushes debris from the gap.",
              },
              {
                term: "Wire EDM",
                definition: "EDM variant using a continuously fed thin brass wire as the travelling electrode to cut profiles and tapers.",
              },
              {
                term: "Recast layer",
                definition: "Re-solidified, thermally altered surface layer left by EDM discharges, usually needing finishing or treatment.",
              },
            ],
            examQuestions: [
              {
                q: "Explain the principle of electrical discharge machining with a sketch of the spark gap. Compare die-sinking and wire EDM, discuss the effect of peak current and pulse timing on MRR, wear and finish, and state the limitations of the process.",
                marks: 7,
                outline: [
                  "Principle: pulsed voltage breaks down the dielectric; each spark melts a crater on both electrodes.",
                  "Sketch: electrode, gap of a few hundredths mm, work, dielectric, servo gap control.",
                  "Material removal: millions of craters per second; debris flushed in off-time.",
                  "Die-sinking: shaped graphite/ copper electrode, servo-fed - cavities, deep ribs, moulds and dies.",
                  "Wire EDM: running brass wire 0.10-0.30 mm, CNC path, U-V taper, skim passes for finish.",
                  "Current and on-time up: MRR and roughness up, electrode wear up; off-time up: flushing stable, MRR down.",
                  "Advantages: cuts any conductor, no cutting force - hardened, delicate parts.",
                  "Limitations: recast layer, slow removal, electrode wear/cost, power and dielectric maintenance.",
                ],
              },
              {
                q: "Why can EDM machine fully hardened steel without deflection?",
                marks: 2,
              },
              {
                q: "State the function of the pulse off-time in EDM.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Gear hobbing, the Indian industry and future trends",
            body: [
              "Gear hobbing is Unit I's generating principle at its most elegant. The hob - a worm-shaped cutter with gashed cutting edges - meshes with the blank as if it were a worm gear: hob rotation, workpiece rotation and axial feed are synchronized through the machine's indexing and differential gear trains so the enveloping cutter path generates true involute flanks. The machine itself is a vertical or horizontal frame carrying hob head (with tangential offset to use fresh cutter teeth), work column with tailstock, and the change-gear trains that set the index ratio - the same GTR arithmetic of Unit II applied to kinematics. Helical gears add the differential train, feeding extra rotation as the hob feeds axially.",
              "India builds these machines. The industry's trade body IMTMA anchors the ecosystem and runs IMTEX, Asia's major machine tool exhibition held in Bengaluru. The Ace Micromatic group dominates turning, Jyoti CNC Automation is the country's largest CNC machine maker, and Bharat Fritz Werner (BFW) is a strong VMC/HMC and special-machine builder; HMT wrote the state-sector history. Clusters in Bengaluru, Pune and Coimbatore hold the dense vendor base, and indigenous controller development plus government capital-goods initiatives push localization of drives, spindles and controls - the import share of consumption remains the industry's central challenge.",
              "The future stacks on the pyramid below: connectivity standards (OPC UA, MTConnect) streaming machine data; digital twins simulating process and machine behaviour; in-process metrology closing the loop inside the machining cycle; AI-driven chatter detection, feed optimization and predictive maintenance; hybrid machines adding additive heads and metrology probes to machining centers; and sustainability pushing energy-efficient drives, minimal-quantity lubrication and dry cutting. The machine tool of the coming decade is a sensing, self-optimizing factory cell - built on precisely the stiffness, damping, drive and metrology fundamentals of Units I through IV.",
            ],
            bullets: [
              "Hobbing generates involutes by synchronized rotations: hob, workpiece index and feed tied by the change-gear (GTR) trains.",
              "Helical gears add the differential train, superimposing extra work rotation as the hob feeds axially.",
              "Indian ecosystem: IMTMA and IMTEX; Ace Micromatic (turning), Jyoti CNC (largest CNC maker), BFW (VMC/HMC), HMT legacy.",
              "Clusters: Bengaluru, Pune, Coimbatore - dense vendor bases feeding indigenous machine builders.",
              "Trend stack: connectivity (OPC UA/MTConnect), digital twins, in-process metrology, AI optimization, hybrid additive machines, green manufacturing.",
            ],
            table: {
              caption: "The Indian machine tool ecosystem at a glance.",
              headers: ["Segment", "Representative players", "Notes"],
              rows: [
                ["CNC turning", "Ace Micromatic group", "India's largest machine tool group"],
                ["VMC / HMC", "Jyoti CNC, BFW", "High-volume indigenous CNC lines"],
                ["Legacy state sector", "HMT", "Historic backbone, limited today"],
                ["Trade body", "IMTMA", "Runs IMTEX in Bengaluru"],
                ["Clusters", "Bengaluru, Pune, Coimbatore", "Dense casting and vendor base"],
                ["Components", "Spindles, guides, controls", "Localization the key policy push"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The smart machine tool capability pyramid",
              caption:
                "Units I-IV are the base; the future stacks on top of them, never replaces them.",
              tiers: [
                { label: "Autonomy", note: "self-optimizing, AI-scheduled machining" },
                { label: "Analytics", note: "digital twin, condition monitoring" },
                { label: "Connectivity", note: "OPC UA / MTConnect sensor bus" },
                { label: "Foundations", note: "stiff structure, servo drives, metrology loop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Current-affairs marks",
              body: "The industry question rewards three specifics: IMTMA/IMTEX, two or three named Indian builders with their niche, and one trend explained technically (digital twin or in-process metrology). Generic essays about 'growth' score far less than one named machine, builder and standard.",
            },
            keyTerms: [
              {
                term: "Hob",
                definition: "Worm-shaped, gashed generating cutter whose synchronized mesh with the blank produces involute gear teeth.",
              },
              {
                term: "IMTMA",
                definition: "Indian Machine Tool Manufacturers' Association - the industry's trade body and organizer of IMTEX.",
              },
              {
                term: "Digital twin",
                definition: "Simulated model of machine and process updated with live data, used to predict behaviour and optimize cutting.",
              },
            ],
            examQuestions: [
              {
                q: "Explain the gear hobbing process with a sketch of the hob-workpiece kinematics, including the role of the indexing and differential change-gear trains. Write a short note on the Indian machine tool industry and the trends shaping its future.",
                marks: 7,
                outline: [
                  "Hob described as a worm-shaped gashed cutter wrapping the generating rack.",
                  "Kinematics sketch: hob rotation, work rotation, axial feed - synchronized motions.",
                  "Indexing train: change gears set the hob-to-work ratio (GTR) for the tooth count.",
                  "Differential train: for helical gears, superimposes extra work rotation proportional to feed.",
                  "Machine elements: hob head with tangential offset, work column, tailstock, solid frame.",
                  "Indian industry: IMTMA and IMTEX; Ace Micromatic, Jyoti CNC, BFW, HMT legacy; Bengaluru-Pune-Coimbatore clusters.",
                  "Trends: OPC UA/MTConnect connectivity, digital twins, in-process metrology, AI optimization, hybrid machines.",
                  "Close: trends ride on the stiffness, damping and metrology fundamentals of Units I-IV.",
                ],
              },
              {
                q: "Why is a differential change-gear train needed when hobbing helical gears?",
                marks: 2,
              },
              {
                q: "Name any two Indian machine tool manufacturers and their main product lines.",
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
        "RGPV papers on machine tool design lean heavily on drive design and guideways: the ray-diagram numerical, the hydrostatic sketch and the ball screw sizing between them anchor most papers, with metrology and specific-machine descriptions supplying the rest. Allocate revision time in roughly this ratio and keep one full sketch-practice slot per unit.",
      ],
      weightedTopics: [
        {
          topic: "Stepped speed gearboxes: phi, Rn, z, structure and ray diagrams, GTR limits",
          weight: "10-14 marks",
          note: "The signature long question - practise two complete ray-diagram designs including tooth-count closure.",
        },
        {
          topic: "Guideways: hydrodynamic vs hydrostatic construction, restrictors, films, rolling guides",
          weight: "10-12 marks",
          note: "Sketch the pad with pump-restrictor-pocket-land circuit and the pressure balance - the figure is half the marks.",
        },
        {
          topic: "Ball screws and feed drive sizing (torque, lead, critical speed, preload)",
          weight: "8-10 marks",
          note: "Numericals on T = F x lead / (2 pi x eta) appear almost every year; also memorize the no-self-locking caveat.",
        },
        {
          topic: "Alignment tests: instruments, sequence, tolerances",
          weight: "8-10 marks",
          note: "Six lathe tests with instrument and tolerance in a three-column table is the expected format.",
        },
        {
          topic: "Laser interferometer principle, procedure and outputs (ISO 230-2)",
          weight: "6-8 marks",
          note: "Derive N x lambda / 2 with environmental corrections; name accuracy, repeatability, backlash.",
        },
        {
          topic: "Spindle design: bearing arrangements, preload, optimum span, overhang cube law",
          weight: "6-8 marks",
          note: "DB/DF/DT sketches with pressure lines and effective span are the expected figure.",
        },
        {
          topic: "Structural loop stiffness and damping/chatter",
          weight: "6-8 marks",
          note: "Series spring walk of the loop plus the regenerative chatter cycle - two sketches, two question families.",
        },
        {
          topic: "CNC controls: interpolation, feedback devices, servo cascade",
          weight: "6-8 marks",
          note: "The cascade block diagram and encoder-vs-linear-scale comparison recur as short and long questions.",
        },
        {
          topic: "Stick-slip: Stribeck cause and the three remedy families",
          weight: "4-6 marks",
          note: "Draw friction vs velocity with the falling branch; remedies grouped as friction, stiffness, control.",
        },
        {
          topic: "Specific machines: turning centers, VMC/HMC/5-axis, grinding, EDM, hobbing",
          weight: "6-10 marks",
          note: "One describe-construction-and-working question is near-certain; slant-bed and centerless sketches lead.",
        },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers all 25 sections twice - once for understanding, once for revision - and reserves the last week for full sketches and timed papers. Keep a dedicated sketchbook: in this subject the drawing is the answer.",
      ],
      weeks: [
        {
          week: "Week 1",
          focus: "Unit I - fundamentals",
          tasks: [
            "Classification table and forming/generating definitions",
            "Error families and the instrument ladder; stiffness loop walk with series springs",
            "Chatter cycle and damping sources; bed materials comparison table",
          ],
        },
        {
          week: "Week 2",
          focus: "Unit II part 1 - main drives and speed boxes",
          tasks: [
            "phi/Rn/z numericals (six solves), phi value table memorized",
            "Structure diagram and full ray-diagram design for 12 = 3 x 2 x 2 and 18 = 3 x 3 x 2",
            "GTR limits and tooth-count closure; drive characteristic chart sketch",
          ],
        },
        {
          week: "Week 3",
          focus: "Unit II part 2 - feed drives and spindles",
          tasks: [
            "Ball screw sizing numericals (torque, rpm, dn) and preload logic",
            "Spindle deflection model; DB/DF/DT sketches with pressure lines",
            "Servo cascade block diagram; resolution computations",
          ],
        },
        {
          week: "Week 4",
          focus: "Unit III - guideways",
          tasks: [
            "Hydrodynamic wedge sketch; Stribeck curve with regimes marked",
            "Hydrostatic pad circuit with restrictor and pressure balance (draw twice)",
            "Rolling guide cross-section, preload classes, life cube law; stick-slip cycle essay",
          ],
        },
        {
          week: "Week 5",
          focus: "Unit IV - controls and metrology",
          tasks: [
            "Interpolation equations for line and arc; CNC pipeline diagram",
            "Encoder quadrature sketch; semi- vs full-closed comparison table",
            "Six alignment tests table; laser procedure and N x lambda / 2 derivation; compensation cycle",
          ],
        },
        {
          week: "Week 6",
          focus: "Unit V + full revision",
          tasks: [
            "Slant-bed, VMC/HMC matrix, centerless and EDM fork sketches",
            "Hobbing kinematics and Indian industry notes (IMTMA, builders, trends)",
            "Two full papers under time; redraw the six signature sketches from memory",
          ],
        },
      ],
    },
    {
      id: "last-day",
      heading: "The last day before the exam",
      bullets: [
        "Redraw from memory: ray diagram, hydrostatic pad circuit, DB bearing pair, chatter cycle, laser setup, slant-bed section - six sketches cover six potential 7-markers.",
        "Recite the formula trio: Rn = phi^(z-1); T = F x lead / (2 pi x eta); displacement = N x lambda / 2 with environmental corrections.",
        "Re-read the alignment-test table once: test + instrument + tolerance, three columns, six rows.",
        "Skim every callout in this file - each is a compressed one-line exam answer.",
        "List stick-slip remedies and hydrostatic advantages as countable sets (three families, six features) so short questions answer themselves.",
        "Sleep seven hours; this subject rewards neat labelled sketches over midnight cramming.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Draw first, write second: a labelled cross-section of the hydrostatic pad, spindle bearings or centerless setup earns marks before any prose.",
        "Write units with every number - N.m, mm, micron, rpm - examiners deduct for naked digits.",
        "For numericals, write the governing formula on its own line before substituting; method marks survive arithmetic slips.",
        "Name the basis of classification before enumerating classes; named groupings (phi values, preload classes, error families) score above unstructured lists.",
        "Time-box: 7-mark long answers in 14-16 minutes, 2-3 mark shorts in 4-5, and hold the last 10 minutes to check sketches, labels and units.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using arithmetic progression for spindle speeds - the syllabus expects the geometric series with Rn = phi^(z-1).",
        "Forgetting the GTR bounds per mesh (step-up at most 2, step-down at most 4) when drawing ray diagrams.",
        "Treating hydrodynamic and hydrostatic slideways as the same thing - one self-generates its film and fails at rest, the other is pump-fed and works at zero speed.",
        "Quoting ball screw efficiency as 30-50% - rolling contact gives about 90%, and that is the entire point of the design.",
        "Drawing the chatter loop without the regenerative path - the wave left by the previous pass is what feeds the vibration.",
        "Claiming compensation fixes all errors - only repeatable errors compensate; deflection and chatter need stiffness and damping.",
      ],
    },
  ],
};
