/**
 * Academics - RGPV First-Year Common subject: BT-106 Manufacturing Practices.
 *
 * Five units span introduction and casting, welding and joining, machining and
 * machine tools, sheet metal and fitting, and modern manufacturing and safety.
 * Every section pairs the theory with a worked example and three exam-style
 * questions (one 7-mark with outline + two short questions) that the student
 * can reproduce in the exam hall.
 */

import type { AcademicSubject } from "./types";

export const bt106: AcademicSubject = {
  id: "bt-106",
  code: "BT-106",
  title: "Manufacturing Practices",
  semester: "I Semester",
  program: "RGPV · First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to BT-106: introduction and casting, welding and joining, machining and machine tools, sheet metal and fitting, modern manufacturing and safety - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk through the manufacturing shop from molten metal to finished part. Unit I covers casting from process classification through gating systems and defects, with sand casting steps and pattern allowances. Unit II surveys welding and joining from oxy-acetylene flames through arc polarity, resistance spot welding, soldering and brazing, with defects and safety. Unit III turns to machining: chip formation, cutting-tool materials, MRR and Taylor tool life, lathe, drilling, milling and grinding. Unit IV handles sheet metal, fitting and smithy hand tools with worked layout and forging operations. Unit V closes on CNC G-code, 3D printing, robotics, plant layout, lean and industrial safety.",
  accentColor: "#d97706",
  emoji: "MP",
  unitCount: 5,
  totalSections: 30,
  units: [
    // =================================================================
    // UNIT I - INTRODUCTION AND CASTING
    // =================================================================
    {
      number: 1,
      roman: "I",
      title: "Introduction and Casting",
      summary:
        "Unit I builds the vocabulary of manufacturing - classification into primary shaping, deforming, machining, joining and finishing - and then dives deep into casting: the sand casting steps, pattern allowances, moulding sand properties, the gating system, casting defects and special casting methods like die, centrifugal and investment casting.",
      chapter: {
        number: "01",
        title: "Introduction and Casting",
        intro:
          "Unit I starts by classifying manufacturing processes into five families, then focuses on casting - the most common primary shaping route. Topics covered are manufacturing classification, casting overview and advantages, sand casting steps with patterns and pattern allowances, cores and core prints, moulding sand properties, the gating system from pouring basin to riser, casting defects and special methods such as die, centrifugal and investment casting.",
        inOneBreath:
          "Manufacturing converts raw stock into finished goods in five families - primary shaping, deforming, machining, joining and finishing. Casting pours molten metal into a mould cavity; advantages are complex shapes, hollow sections and large parts at low cost. Sand casting follows pattern making, moulding, melting, pouring, solidification, shake-out and fettling. Pattern allowances are shrinkage (cast iron 1%, steel 2%, aluminum 1.25%), machining (2-5 mm), draft (1-3 deg), distortion and shake. Moulding sand is 85% silica, 8% clay, 4% water plus coal dust, and must be permeable, strong, refractory and collapsible. The gating system carries metal from pouring basin through tapered sprue, runner, gates to the cavity, with a riser to feed shrinkage. Common defects are blow holes, shrinkage, mismatch and cold shuts; special methods include die casting at 7-70 MPa, centrifugal casting at 600-1200 rpm and investment casting for ±0.05 mm tolerance.",
        sections: [
          // --- 1.1 ---
          {
            number: "1.1",
            title: "Manufacturing process classification",
            body: [
              "Manufacturing converts raw materials into finished goods through a sequence of operations classified by the state in which the material is processed. The five major families are primary shaping, deforming, machining, joining and finishing. Primary shaping takes liquid or powder stock and gives it a solid form: sand casting of cast iron poured at about 1200 deg C, die casting of zinc at 400 deg C, and injection moulding of plastic granules melted at 180 to 260 deg C. Each family is selected on the basis of shape complexity, tolerance, batch size and material, and the chosen route fixes the cost, surface finish and dimensional accuracy of the final part.",
              "Primary shaping processes form the first solid shape from liquid or powder. Sand casting produces engine blocks and pipe fittings in cast iron; die casting makes carburettor bodies in zinc or aluminum alloys at pressures of 7 to 70 MPa; investment casting uses a wax pattern and ceramic shell to produce turbine blades at ±0.05 mm tolerance. Powder metallurgy compacts iron-copper powder in a die at 600 MPa and sinters it at 1100 deg C to make self-lubricating bearings. Injection moulding forces plastic melt into a steel mould at 80 to 180 MPa, producing housings and bottles at thousands of parts per hour.",
              "Deforming processes reshape solid metal without removing chips, conserving material and improving grain structure. Hot forging of mild steel at 1000 to 1200 deg C aligns the grain flow with the part outline and gives a fatigue strength far above machining. Cold rolling reduces sheet thickness by 30 to 60 percent in one pass and work-hardens the surface. Extrusion pushes heated aluminum through a die at 500 deg C to make window sections. Drawing pulls wire through successive dies of reducing diameter. Each route gives high production rates and excellent material utilisation.",
              "Machining removes material as chips to achieve tighter tolerances and better surface finish than primary shaping allows. Turning on a lathe reduces the diameter of a shaft from 50 mm to 48 mm at a cutting speed of 100 m/min and feed 0.2 mm per revolution, removing metal at 40000 mm^3 per min. Milling, drilling, shaping and grinding reach IT5 tolerance of ±0.005 mm on ground surfaces. Joining unites two or more parts: arc welding melts an electrode and the parent metal at 6000 deg C, brazing uses a brass filler melting at 900 deg C, and adhesive bonding cures epoxy at room temperature. Finishing operations such as grinding, polishing, anodising and electroplating improve surface quality and corrosion resistance.",
              "A worked example shows how the families combine in one part. A cast iron engine block is produced by primary shaping (sand casting at 1200 deg C), then drilled, bored and milled by machining to IT7 tolerance, the cylinder head joined by bolting, the journals finished by grinding to Ra 0.4 um, and the assembly protected by anti-corrosion paint. A single part can pass through all five families, and the engineer's skill lies in choosing the cheapest route that meets the tolerance and strength required.",
            ],
            bullets: [
              "Five manufacturing families: primary shaping, deforming, machining, joining and finishing.",
              "Primary shaping forms the first solid shape from liquid or powder (casting, moulding, powder metallurgy).",
              "Deforming reshapes solid metal without removing chips (forging, rolling, extrusion, drawing).",
              "Machining removes chips for tight tolerance (turning, milling, drilling, grinding).",
              "Joining unites parts (welding, soldering, brazing, adhesive); finishing improves surface and property.",
              "Selection criteria: material, shape complexity, tolerance, batch size and cost.",
              "Pouring temperatures: cast iron 1200 deg C, aluminum 700 deg C, zinc 400 deg C.",
            ],
            table: {
              caption: "Manufacturing process families with examples and tolerances.",
              headers: ["Family", "Examples", "Material state", "Typical tolerance"],
              rows: [
                ["Primary shaping", "Sand casting, die casting, injection moulding", "Liquid or powder", "±0.5 to 1.0 mm"],
                ["Deforming", "Forging, rolling, extrusion, drawing", "Solid (hot or cold)", "±0.1 to 0.5 mm"],
                ["Machining", "Turning, milling, drilling, grinding", "Solid (chip removal)", "±0.01 to 0.1 mm"],
                ["Joining", "Welding, brazing, soldering, adhesive", "Solid parts", "±0.5 mm"],
                ["Finishing", "Grinding, lapping, plating, anodising", "Solid", "±0.005 mm"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Five manufacturing families stacked from base to apex",
              caption:
                "Each tier carries the part one stage forward; the engineer chooses which tiers to invoke for a given component.",
              tiers: [
                { label: "Primary shaping", note: "cast, mould or sinter the first solid form" },
                { label: "Deforming", note: "forge, roll, extrude to refine shape" },
                { label: "Machining", note: "turn, mill, drill to tight tolerance" },
                { label: "Joining", note: "weld, braze, solder to assemble" },
                { label: "Finishing", note: "grind, polish, plate for surface quality" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to classify manufacturing processes, name the five families with one example each and then give the selection criteria - material, shape, tolerance, batch size. RGPV awards 2 marks for the list and 1 mark each for two criteria with a worked value such as pouring temperature.",
            },
            keyTerms: [
              { term: "Primary shaping", definition: "Processes that form the first solid shape from liquid or powder stock (casting, moulding, powder metallurgy)." },
              { term: "Deforming", definition: "Processes that reshape solid metal without removing chips (forging, rolling, extrusion, drawing)." },
              { term: "Machining", definition: "Material removal as chips to achieve close tolerance and good surface finish (turning, milling, drilling, grinding)." },
              { term: "Joining", definition: "Processes that unite two or more parts into an assembly (welding, brazing, soldering, adhesive)." },
              { term: "Finishing", definition: "Final operations improving surface finish, dimensional accuracy or properties (grinding, lapping, plating, heat treatment)." },
            ],
            examQuestions: [
              {
                q: "Classify manufacturing processes into major families with two examples of each, and explain the criteria used to select a process for a given component.",
                marks: 7,
                outline: [
                  "Define manufacturing as conversion of raw stock into finished goods.",
                  "List the five families: primary shaping, deforming, machining, joining, finishing.",
                  "Give two examples per family with one real number (CI cast at 1200 deg C, HSS turning at 100 m/min).",
                  "Explain selection criteria: material, shape complexity, tolerance, batch size and cost.",
                  "Worked example: cast iron engine block goes through casting, machining, joining, finishing.",
                  "Note that a single part may pass through several families; the cheapest route is chosen.",
                  "Conclude that the families are complementary, not exclusive.",
                ],
              },
              {
                q: "What is meant by primary shaping? Give two examples with pouring temperatures.",
                marks: 2,
              },
              {
                q: "Distinguish between machining and joining processes with one example each.",
                marks: 3,
              },
            ],
          },
          // --- 1.2 ---
          {
            number: "1.2",
            title: "Casting process overview, steps and advantages",
            body: [
              "Casting is a primary shaping process in which molten metal is poured into a mould cavity whose shape matches the desired component and allowed to solidify. The cavity is formed by a pattern - a slightly oversized replica of the part - and the metal flows through a gating system of sprue, runner and gates. After cooling, the mould is broken (sand casting) or opened (die casting) and the part is fettled to remove gates and risers. The same principle handles cast iron at 1200 deg C, aluminum at 700 deg C, brass at 1050 deg C and steel at 1500 deg C, giving casting unmatched versatility across metals.",
              "Casting offers advantages that no other family can match. It produces complex internal passages impossible by machining - engine block water jackets, pump volutes, valve bodies. It handles very large parts: a single turbine housing can weigh several tonnes. It is economical for batch and mass production because once the pattern is made each copy costs little. Hollow sections are obtained with sand cores. Cast metals like gray cast iron have excellent damping capacity, making them ideal for machine tool beds. Almost any metal that can be melted can be cast, and the process wastes little material.",
              "Casting also has limitations. Dimensional accuracy is poor: sand cast tolerance is ±0.5 to 1.0 mm, and machining is needed for mating surfaces. Surface finish is rough (Ra 12 to 25 um) unless die casting or investment casting is used. Castings are prone to defects such as blow holes, shrinkage cavities and cold shuts that require careful gating and riser design. Solidification is slow: a 50 kg casting may take 30 minutes to freeze in the mould. Equipment cost for die casting or investment casting is high, justifying only large batches.",
              "A worked sequence shows the full cycle. To cast a 100 mm cast iron gear blank: (1) make a wooden pattern 105 mm long to allow for shrinkage and machining, (2) pack green sand around it in a flask to form cope and drag, (3) set a sand core if a hub hole is needed, (4) melt pig iron and scrap in a cupola to 1450 deg C and pour at 1200 deg C, (5) wait 20 minutes for solidification, (6) shake out the casting, (7) cut off gates and risers, (8) grind flash and inspect for blow holes. The procedure applies to every casting process.",
              "Typical applications of casting include automotive engine blocks and cylinder heads, pump and valve bodies, machine tool beds, manhole covers, drainage fittings, statues and ornamental work. Sand casting handles 70 percent of all castings produced worldwide. Die casting dominates zinc and aluminum components in automotive and consumer goods. Investment casting produces turbine blades with internal cooling passages for jet engines. Centrifugal casting makes pipes and cylinder liners with dense, defect-free walls.",
            ],
            bullets: [
              "Casting pours molten metal into a mould cavity and lets it solidify.",
              "Pouring temperatures: cast iron 1200 deg C, aluminum 700 deg C, steel 1500 deg C.",
              "Advantages: complex shapes, hollow sections, very large parts, economical for batch production.",
              "Limitations: ±0.5 mm tolerance, Ra 12-25 um finish, porosity, slow solidification.",
              "Sand casting handles about 70 percent of all castings worldwide.",
              "Casting gives excellent damping - ideal for machine tool beds in gray cast iron.",
              "Steps: pattern, mould, melt, pour, solidify, shake-out, fettle, inspect.",
            ],
            codeExample: {
              language: "text",
              caption: "Casting process steps as a checklist you can reproduce in the exam.",
              code:
                `CASTING PROCESS - sequence
1. Pattern making    -> wood/metal replica, +allowances
2. Mould making      -> ram sand around pattern in flask
3. Core setting      -> place sand core for hollow sections
4. Melting           -> furnace to pour temperature
                        CI 1200, Al 700, brass 1050 deg C
5. Pouring           -> ladle via sprue into cavity
6. Solidification    -> 20-30 min for 50 kg casting
7. Shake-out         -> break mould, retrieve casting
8. Fettling          -> cut gates/risers, grind flash
9. Inspection        -> check blow holes, shrinkage, mismatch`,
            },
            diagram: {
              kind: "flow",
              title: "Casting process flow from pattern to inspection",
              caption:
                "Memorise this nine-step chain - a frequent 5-mark question asks you to sketch and label it.",
              steps: [
                { label: "Pattern making", note: "wood/metal, with allowances" },
                { label: "Mould making", note: "sand packed in cope and drag" },
                { label: "Melting and pouring", note: "via sprue at 1200 deg C" },
                { label: "Solidification and shake-out", note: "break mould, retrieve casting" },
                { label: "Fettling and inspection", note: "cut gates, check defects" },
              ],
            },
            callout: {
              type: "tip",
              title: "Why casting is asked often",
              body: "Casting questions carry 7 to 10 marks in RGPV theory papers. Always pair the 'advantages and limitations' answer with a worked example - pouring temperature and casting time for a 50 kg gear blank fetch full marks and distinguish your answer from a textbook list.",
            },
            keyTerms: [
              { term: "Casting", definition: "A primary shaping process in which molten metal is poured into a mould cavity and solidified." },
              { term: "Mould cavity", definition: "The negative shape of the component formed in sand or metal, into which metal is poured." },
              { term: "Pouring temperature", definition: "The temperature at which molten metal enters the mould - about 1200 deg C for cast iron." },
              { term: "Fettling", definition: "Removing gates, risers and flash from the solidified casting." },
              { term: "Solidification", definition: "Cooling and freezing of molten metal in the mould, governed by the alloy's freezing range." },
            ],
            examQuestions: [
              {
                q: "Describe the casting process in detail. State its advantages, limitations and typical applications, and list the main steps from pattern to finished casting.",
                marks: 7,
                outline: [
                  "Define casting as pouring molten metal into a mould cavity.",
                  "Give pouring temperatures: cast iron 1200 deg C, aluminum 700 deg C, steel 1500 deg C.",
                  "List five advantages: complex shapes, hollow sections, large parts, economical for batch, near-any metal.",
                  "State four limitations: poor tolerance ±0.5 mm, rough surface, defects, slow cooling.",
                  "List the nine steps: pattern, mould, core, melt, pour, solidify, shake-out, fettle, inspect.",
                  "Cite one worked example - 100 mm cast iron gear blank with 105 mm pattern.",
                  "Name applications: engine blocks, pump bodies, machine beds, valve bodies.",
                ],
              },
              {
                q: "List any four advantages of casting as a manufacturing process.",
                marks: 2,
              },
              {
                q: "State the pouring temperatures of cast iron, aluminum and brass.",
                marks: 3,
              },
            ],
          },
          // --- 1.3 ---
          {
            number: "1.3",
            title: "Sand casting: steps, pattern, allowances and cores",
            body: [
              "Sand casting is the most widely used casting process, producing about 70 percent of all castings worldwide. It works for ferrous and non-ferrous metals, from a 100 g bracket to a 100 tonne bed. The mould is made of green sand - silica with clay and water - packed around a pattern in a two-part flask. The upper half is the cope, the lower the drag, parted at the parting line. After pattern withdrawal the cavity is a negative of the part; cores of baked sand create internal hollows; the cope and drag are closed and metal is poured.",
              "Patterns are oversized replicas of the finished part, made of wood (cheap, prototype), aluminum (lasts 2000 cycles), cast iron (5000 cycles) or plastic. Five allowances bring the pattern above the finished dimension: shrinkage allowance compensates for solid contraction (cast iron 1 percent or 10 mm per metre, steel 2 percent, aluminum 1.25 percent, brass 1.5 percent); machining allowance 2 to 5 mm on faces that need finishing; draft or taper allowance 1 to 3 degrees on vertical faces so the pattern can be withdrawn without tearing the sand; distortion allowance for U or L shapes that warp on cooling; and shake allowance 0.5 to 1.0 mm for rapping the pattern before withdrawal.",
              "Pattern types suit different geometries. A solid or single-piece pattern is used for simple shapes in small batches. A split pattern divides along the parting line for parts with projections. A match-plate pattern mounts the cope and drag halves on opposite sides of a plate for machine moulding at 50 to 100 moulds per hour. A sweep pattern uses a profiled board rotated about an axis to form cylindrical shapes like a basin, saving pattern material. A loose-piece pattern handles parts with undercuts that cannot be drawn straight back.",
              "Cores form internal cavities such as the water jacket of an engine block or the bore of a valve. A core is a sand shape baked with a binder (linseed oil or resin) to give dry strength of 0.5 to 1.5 MPa. The core is supported in the mould by core prints - extensions of the pattern that seat the core in the sand. Horizontal cores use a single print at each end; vertical cores use one print above and one below; hanging cores use a single print; cover cores rest in the cope. Core print diameter equals the core diameter plus 0.5 mm clearance.",
              "A worked example pins the allowances. For a 100 mm cast iron block with all faces machined: shrinkage 1 percent = 1.0 mm, machining 2 mm per face x 2 faces = 4 mm, draft 1 deg per vertical face adds about 0.5 mm per face, shake 0.5 mm per face. Pattern length = 100 + 1 + 4 + 0.5 + 0.5 = 106 mm. The 6 mm of extra pattern length looks trivial but is the difference between a usable casting and scrap.",
            ],
            bullets: [
              "Sand casting produces about 70 percent of all castings worldwide.",
              "Pattern materials: wood (prototype), aluminum (2000 cycles), cast iron (5000 cycles).",
              "Shrinkage allowance: cast iron 1 percent, steel 2 percent, aluminum 1.25 percent, brass 1.5 percent.",
              "Machining allowance 2-5 mm on faces to be finished; draft 1-3 deg on vertical faces.",
              "Pattern types: solid, split, match-plate (machine moulding), sweep, loose-piece.",
              "Cores form internal cavities; core prints support them in the mould.",
              "Worked example: 100 mm CI block needs 106 mm pattern after allowances.",
            ],
            table: {
              caption: "Pattern allowances for cast iron (per 100 mm dimension).",
              headers: ["Allowance", "Value", "Reason", "For 100 mm CI block"],
              rows: [
                ["Shrinkage", "1 percent (10 mm/m)", "Metal contracts on cooling", "+1.0 mm"],
                ["Machining", "2-5 mm per face", "Material for finishing cuts", "+4.0 mm (2 faces x 2 mm)"],
                ["Draft", "1-3 deg", "Pattern withdrawal without tearing sand", "+0.5 mm per face"],
                ["Distortion", "Reverse bend", "U/L shapes warp on cooling", "0 for rectangular block"],
                ["Shake", "0.5-1.0 mm", "Pattern rapping enlarges cavity", "+0.5 mm per face"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Cross-section of a sand mould (top to bottom)",
              caption:
                "Index 0 is the top of the cope; each layer is one mould feature you must label in a sketch.",
              layers: [
                { label: "Cope (upper flask)", note: "carries pouring basin and riser" },
                { label: "Pouring basin and sprue", note: "metal entry, tapered" },
                { label: "Pattern cavity", note: "negative of part with allowances" },
                { label: "Core and core prints", note: "baked sand for hollow" },
                { label: "Drag (lower flask) and gates", note: "metal exits via runner" },
              ],
            },
            callout: {
              type: "warning",
              title: "Allowance values are alloy-specific",
              body: "RGPV examiners deduct marks for wrong shrinkage percentages. Memorise: cast iron 1 percent, steel 2 percent, aluminum 1.25 percent, brass 1.5 percent. Confusing steel with cast iron loses a full mark - write the alloy name beside each value.",
            },
            keyTerms: [
              { term: "Pattern", definition: "An oversized replica of the finished part used to form the mould cavity." },
              { term: "Pattern allowance", definition: "Extra dimension added to the pattern to compensate for shrinkage, machining, draft, distortion and shake." },
              { term: "Core", definition: "A baked sand shape placed in the mould to form an internal cavity in the casting." },
              { term: "Core print", definition: "A recess in the mould that supports and locates the core." },
              { term: "Cope and drag", definition: "The upper (cope) and lower (drag) halves of a sand mould flask." },
            ],
            examQuestions: [
              {
                q: "Explain the sand casting process. Describe pattern and pattern allowances, types of patterns, cores and core prints with a worked example for a 100 mm cast iron block.",
                marks: 7,
                outline: [
                  "Define sand casting and its scope - 70 percent of all castings, ferrous and non-ferrous.",
                  "List five pattern allowances: shrinkage, machining, draft, distortion, shake.",
                  "Give numerical values: CI shrinkage 1 percent, machining 2-5 mm, draft 1-3 deg.",
                  "List pattern types: solid, split, match-plate, sweep, loose-piece.",
                  "Define cores and core prints; mention horizontal, vertical, hanging, cover types.",
                  "Worked example: 100 mm CI block -> 106 mm pattern (1 + 4 + 0.5 + 0.5).",
                  "Sketch the mould cross-section: cope, drag, sprue, runner, gate, riser, core.",
                ],
              },
              {
                q: "State the shrinkage allowance for cast iron, steel and aluminum.",
                marks: 2,
              },
              {
                q: "What is a core print? State its function in sand casting.",
                marks: 3,
              },
            ],
          },
          // --- 1.4 ---
          {
            number: "1.4",
            title: "Moulding sand: composition, properties and testing",
            body: [
              "Moulding sand is the heart of sand casting. A typical green sand consists of 85 to 90 percent silica (SiO2) grains of AFS fineness 55 to 60, 5 to 10 percent bentonite clay that bonds the grains, 2 to 8 percent water that activates the clay, and additives such as coal dust (2 to 5 percent) for better surface finish on ferrous castings, dextrin for dry strength, and cereal binders. The grain size and shape decide permeability; the clay content decides strength; the water content must be just enough to develop the clay bond - too little and the sand crumbles, too much and the casting blows.",
              "Seven properties define a good moulding sand. Permeability lets gases escape so the casting does not develop blow holes; AFS permeability numbers of 50 to 200 are typical. Green strength lets the mould withstand handling and the weight of the cope, with values of 30 to 150 kPa. Dry strength matters after drying. Hot strength resists deformation at pouring temperature. Refractoriness keeps the sand intact at 1500 deg C (silica melts at 1713 deg C). Cohesiveness lets sand grains stick together; adhesiveness lets them stick to the pattern. Collapsibility lets the mould yield as the casting contracts, preventing hot tears. Flowability lets the sand fill intricate pockets.",
              "Permeability is measured with a standard AFS specimen of sand rammed in a tube and a known volume of air passed through it under fixed pressure. The AFS permeability number P = (V x h) / (A x p x t), where V is air volume, h is specimen height, A is area, p is pressure, t is time. A reading below 50 indicates gas defect risk; above 200 the sand is too coarse for fine detail. The test takes two minutes and is performed on every batch in a working foundry.",
              "Strength tests complement permeability. Green compression strength is measured by ramming a standard specimen and crushing it; values of 60 to 100 kPa are normal for ferrous work. The shatter index measures toughness by dropping a specimen and counting fragments; 70 to 90 is typical. The moisture content test weighs the sand, dries it at 105 deg C and reweighs - the loss is moisture percent. The clay content test washes the clay out with water and reweighs the dried silica.",
              "Sand conditioning keeps the system sand workable batch after batch. Used sand from shake-out is broken up, magnetic particles removed, new clay and water added, and the sand mulled (mixed) for 3 to 5 minutes before reuse. A typical foundry adds 5 percent new sand and 1 percent new clay per cycle to maintain the bond. Coal dust is replenished because it burns away at the mould face. A well-conditioned green sand gives a casting with Ra 12 um finish and no blow holes - a poorly conditioned one gives a casting full of scrap.",
            ],
            bullets: [
              "Green sand: 85 percent silica, 8 percent bentonite, 4 percent water, plus coal dust.",
              "Permeability allows gases to escape; AFS number 50 to 200 typical.",
              "Green strength 30 to 150 kPa prevents mould collapse during handling.",
              "Refractoriness: silica melts at 1713 deg C - withstands steel pours at 1500 deg C.",
              "Collapsibility lets the casting contract without cracking the mould.",
              "Coal dust (2-5 percent) gives a better surface finish on ferrous castings.",
              "Sand tests: AFS grain fineness, permeability, green compression, shatter index, moisture.",
            ],
            codeExample: {
              language: "text",
              caption: "Typical green sand recipe and test targets for ferrous casting.",
              code:
                `GREEN SAND RECIPE (per 100 kg, ferrous work)
  Silica sand       : 85 kg   (AFS 55-60)
  Bentonite clay    : 8 kg    (Western bentonite)
  Water             : 4 kg    (3-5 percent moisture)
  Coal dust         : 2 kg    (lustrous carbon)
  Dextrin           : 0.5 kg  (dry strength)
  Mulling time      : 3-5 min (mixing)

TEST TARGETS
  Permeability      : 80-120 AFS
  Green strength    : 60-100 kPa
  Moisture          : 3-5 percent
  Shatter index     : 70-90
  Clay content      : 8-10 percent`,
            },
            diagram: {
              kind: "pyramid",
              title: "Seven moulding sand properties ranked by exam frequency",
              caption:
                "Top tier is asked most often; memorise definitions and a numerical value for each.",
              tiers: [
                { label: "Permeability", note: "AFS 50-200; gases escape" },
                { label: "Green strength", note: "30-150 kPa; withstand handling" },
                { label: "Refractoriness", note: "silica melts 1713 deg C" },
                { label: "Collapsibility", note: "yield as casting shrinks" },
                { label: "Flowability + cohesiveness", note: "fill pockets, bond grains" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pair each property with a defect",
              body: "RGPV rewards answers that link property to defect: low permeability -> blow holes, low green strength -> mould drop, low refractoriness -> sand fusion, poor collapsibility -> hot tears. State the property, give the value, then name the defect it prevents.",
            },
            keyTerms: [
              { term: "Permeability", definition: "Ability of moulding sand to let gases pass through; measured as AFS permeability number 50-200." },
              { term: "Green strength", definition: "Strength of moulding sand in the moist (green) state, 30-150 kPa." },
              { term: "Refractoriness", definition: "Ability of sand to withstand pouring temperature without fusing or melting." },
              { term: "Collapsibility", definition: "Ability of moulding sand to yield as the casting contracts on cooling, preventing hot tears." },
              { term: "AFS grain fineness", definition: "A measure of average sand grain size; 55-60 typical for ferrous castings." },
            ],
            examQuestions: [
              {
                q: "State the composition of moulding sand. List the important properties required of a good moulding sand, give typical numerical values, and explain how each property prevents a specific casting defect.",
                marks: 7,
                outline: [
                  "Composition: 85 percent silica, 8 percent bentonite, 4 percent water, 2 percent coal dust.",
                  "List seven properties: permeability, green strength, dry strength, refractoriness, cohesiveness, collapsibility, flowability.",
                  "Give values: permeability 80-120 AFS, green strength 60-100 kPa, refractoriness 1713 deg C.",
                  "Pair each property with a defect it prevents.",
                  "Permeability -> blow holes; green strength -> mould drop; refractoriness -> fusion; collapsibility -> hot tears.",
                  "Describe the AFS permeability test specimen and formula briefly.",
                  "Mention sand conditioning: mull 3-5 min, add 5 percent new sand per cycle.",
                ],
              },
              {
                q: "What is permeability of moulding sand? How is it measured?",
                marks: 2,
              },
              {
                q: "State the functions of coal dust and dextrin in moulding sand.",
                marks: 3,
              },
            ],
          },
          // --- 1.5 ---
          {
            number: "1.5",
            title: "Gating system: components, design and ratios",
            body: [
              "The gating system is the network of channels that carries molten metal from the ladle into the mould cavity. Its job is to fill the cavity fast enough to avoid misruns but quietly enough to avoid turbulence, which would entrap air and slag. A well-designed gating system comprises six elements in order: pouring basin, sprue, runner, gates, ingates and riser. The wrong size or placement of any one element shows up as a defect - blow holes from aspiration, cold shuts from slow filling, shrinkage from a starved riser.",
              "The pouring basin sits on top of the sprue and serves two roles: it holds a small head of metal so the sprue is always full, and it traps slag and dross with a dam. The sprue is a tapered vertical channel - top area about 1.6 times the bottom area - because the metal accelerates under gravity and the stream narrows; a straight sprue would draw in air (aspiration) at the top, causing blow holes. The base of the sprue opens into a well that turns the flow 90 degrees into the horizontal runner.",
              "The runner distributes metal along the mould to one or more gates. Its cross-section is usually about twice the sprue-base area to slow the flow. Gates are the final short channels entering the cavity; they are kept narrow to act as a choke that limits flow rate and reduces turbulence. The gating ratio expresses the sprue : runner : gate areas. A pressurised system (1 : 2 : 1) keeps metal velocity high throughout; an unpressurised system (1 : 2 : 2) slows metal at the gate and is preferred for aluminum and other alloys that oxidise when turbulent.",
              "The riser is a reservoir of molten metal connected to the cavity that feeds liquid as the casting shrinks on solidification. Without a riser, thick sections develop shrinkage cavities. Riser design follows Chvorinov's rule: solidification time t = C x (V/A)^n, where V is volume, A is surface area, n is about 2 and C is a mould constant. The riser must have a V/A ratio larger than the casting section it feeds, so it freezes last and keeps feeding metal. Open risers vent to atmosphere; blind risers are enclosed and rely on atmospheric pressure through a permeable core.",
              "Gating placement also matters. Top gating fills fast but turbulently, suited to flat castings. Bottom gating is the gentlest and is used for steel and aluminum castings. Parting-line gating balances speed and turbulence and is most common. A worked example: a 5 kg aluminum plate cast bottom-gated through a 20 mm sprue, 30 mm x 15 mm runner and four 8 mm x 5 mm gates; with a 40 mm dia x 60 mm tall blind riser of 75 cm^3 feeding the thickest section. The proportions reflect a 1 : 2 : 2 unpressurised ratio, suited to aluminum's tendency to oxidise when turbulent.",
            ],
            bullets: [
              "Six gating elements: pouring basin, sprue, well, runner, gates, riser.",
              "Sprue is tapered top-to-bottom area ratio about 1.6 : 1 to avoid aspiration.",
              "Runner cross-section about twice sprue-base area to slow the flow.",
              "Gating ratios: pressurised 1 : 2 : 1 (sprue : runner : gate), unpressurised 1 : 2 : 2.",
              "Riser feeds metal to compensate for shrinkage; designed by Chvorinov's rule t = C(V/A)^n.",
              "Top gating is fast and turbulent; bottom gating is gentle, used for steel and aluminum.",
              "Blind risers are sealed; open risers vent to atmosphere.",
            ],
            table: {
              caption: "Gating system components with key parameters.",
              headers: ["Element", "Function", "Key parameter", "Typical value"],
              rows: [
                ["Pouring basin", "Holds metal head; traps slag", "Height", "50-100 mm"],
                ["Sprue", "Vertical downcomer (tapered)", "Taper ratio (top:bottom)", "1.6 : 1"],
                ["Well", "Turns flow into runner", "Volume", "5x sprue base"],
                ["Runner", "Horizontal distribution", "Cross-section area", "2x sprue base"],
                ["Gate", "Entry into cavity (choke)", "Area ratio", "1 (pressurised) or 2 (unpressurised)"],
                ["Riser", "Feeds shrinkage", "Modulus (V/A)", "1.2x casting section"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Molten metal path from pouring basin to cavity",
              caption:
                "Each stage either slows or shapes the flow - learn the gating ratio at the runner/gate stage.",
              stages: [
                { label: "Pouring basin", note: "traps slag, full head" },
                { label: "Tapered sprue", note: "1.6 : 1 area ratio, no aspiration" },
                { label: "Runner", note: "horizontal, 2x sprue base" },
                { label: "Gates / choke", note: "ratio 1:2:1 or 1:2:2" },
                { label: "Cavity and riser", note: "riser feeds shrinkage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Chvorinov's rule is a frequent 7-mark question",
              body: "Memorise t = C x (V/A)^n with n = 2. The riser's V/A ratio must exceed that of the casting section it feeds. Practice one worked example: a 50 mm cube (V/A = 50/6 = 8.33 mm) needs a riser with V/A >= 10 mm, which a 60 mm dia x 90 mm tall cylindrical riser (V/A = 15 mm) satisfies.",
            },
            keyTerms: [
              { term: "Sprue", definition: "The tapered vertical channel that carries molten metal from the pouring basin down to the runner." },
              { term: "Runner", definition: "Horizontal channel that distributes metal from the sprue base along the mould to the gates." },
              { term: "Riser", definition: "A reservoir of molten metal connected to the cavity that feeds liquid to compensate for shrinkage during solidification." },
              { term: "Gating ratio", definition: "The ratio of sprue : runner : gate cross-section areas; pressurised 1:2:1 or unpressurised 1:2:2." },
              { term: "Chvorinov's rule", definition: "Solidification time t = C (V/A)^n; riser V/A must exceed casting section V/A." },
            ],
            examQuestions: [
              {
                q: "Describe the gating system in sand casting. Name its components, state the functions of each, explain the gating ratios and riser design by Chvorinov's rule with a worked example.",
                marks: 7,
                outline: [
                  "Define the gating system as the channel network from ladle to cavity.",
                  "List six elements: pouring basin, sprue, well, runner, gates, riser.",
                  "Function of each: basin traps slag, sprue tapered 1.6:1, runner distributes, gates choke.",
                  "Gating ratios: pressurised 1:2:1 (fast, turbulent), unpressurised 1:2:2 (slow, gentle).",
                  "State Chvorinov's rule t = C(V/A)^n with n = 2.",
                  "Worked example: 50 mm cube V/A = 8.33 mm needs riser V/A >= 10 mm.",
                  "Cite top, bottom, parting-line gating placement with one application each.",
                ],
              },
              {
                q: "Why is the sprue tapered in a gating system?",
                marks: 2,
              },
              {
                q: "Distinguish between pressurised and unpressurised gating ratios with examples.",
                marks: 3,
              },
            ],
          },
          // --- 1.6 ---
          {
            number: "1.6",
            title: "Casting defects and special casting methods",
            body: [
              "Casting defects arise from poor sand, poor gating, poor melting or poor pouring. They are classified into four groups by cause. Gas defects include blow holes (large spherical cavities from trapped gas), pin holes (small surface holes from hydrogen), and scabs (sand lifted by gas). Shrinkage defects are cavities or sinks formed when the riser cannot feed liquid to a hot spot. Mould defects include mismatch (cope and drag out of alignment), sand wash (sand eroded by metal flow), drop (sand falling from cope), and metal penetration (metal into sand grains). Pouring defects include cold shuts (two fronts that meet without fusing), misruns (incomplete fill), and pour splash.",
              "Each defect has a remedy tied to its cause. Blow holes are cured by improving permeability (v grade, AFS 100+) and drying the sand; pin holes by degassing the melt with nitrogen or chlorine. Shrinkage cavities require a properly sized riser or chill placed at the hot spot. Mismatch is cured by aligning cope and drag with pins and a match plate. Sand wash is reduced by harder ramming and smoother gating. Cold shuts are cured by raising the pouring temperature 50 deg C and modifying the gating to fill faster. Misruns are cured by increasing fluidity - higher pour temp, thinner sections redesigned.",
              "Die casting forces molten metal into a steel mould (die) under high pressure, 7 to 70 MPa. Two variants exist: hot chamber (for low-melting zinc, lead, magnesium at 400 deg C) where the plunger is immersed in the melt, and cold chamber (for aluminum and brass at 700 deg C) where molten metal is ladled into the shot sleeve. Cycle time is short - 50 to 100 shots per hour for small zinc parts - and dimensional accuracy reaches ±0.05 mm with surface finish Ra 1 to 2 um. Die casting suits mass production of 1000+ parts; the die costs Rs 5 to 50 lakh and amortises only at high volume.",
              "Centrifugal casting rotates a cylindrical mould at 600 to 1200 rpm while pouring metal; centrifugal force throws the metal against the wall, producing a dense, defect-free tube with impurities concentrated at the inner bore (which can be machined away). It is used for pipes, cylinder liners, gun barrels and brake drums. The mould may be sand-lined (for cast iron pipes) or metallic (for bronze bushes). Wall thickness is controlled by the pour volume; length by the mould length. Cycle time 10 to 30 minutes per casting.",
              "Investment casting (lost wax) produces the most intricate castings. A wax pattern is made by injecting wax into an aluminum die; the pattern is dipped in ceramic slurry 5 to 8 times to build a shell; the wax is melted out in an autoclave at 150 deg C; the ceramic mould is fired at 1000 deg C and metal poured in. Turbine blades with internal cooling passages, jewellery, dental inlays and surgical implants are made this way. Tolerance reaches ±0.05 mm and surface finish Ra 1.6 um, with parts weighing from 1 g to 10 kg. Cost is high - a single mould per part - but the geometry is unmatched.",
            ],
            bullets: [
              "Defect groups: gas (blow holes, pin holes), shrinkage, mould (mismatch, wash), pour (cold shut, misrun).",
              "Blow holes: improve permeability; dry the sand.",
              "Shrinkage cavity: enlarge riser or add chill at the hot spot.",
              "Mismatch: align cope and drag with pins and match plate.",
              "Die casting: pressure 7-70 MPa; hot chamber for zinc, cold chamber for aluminum.",
              "Centrifugal casting: 600-1200 rpm; pipes, liners, dense walls.",
              "Investment casting: lost wax, ±0.05 mm tolerance; turbine blades.",
            ],
            codeExample: {
              language: "text",
              caption: "Defect-to-cause-to-remedy map for fast exam recall.",
              code:
                `CASTING DEFECTS - cause -> remedy
Blow holes      : low permeability      -> vent sand, add coal dust
Pin holes       : hydrogen in melt      -> degas with N2 or Cl2
Shrinkage cavity: inadequate riser      -> add riser or chill at hot spot
Mismatch        : cope-drag misaligned  -> aligning pins, match plate
Sand wash       : high-velocity metal   -> harder ramming, smooth gating
Cold shut       : two fronts not fused  -> raise pour temp 50 deg C
Misrun          : incomplete fill       -> thinner sections, hotter pour
Penetration     : metal into sand       -> finer sand, mould wash

SPECIAL CASTING - one-line summary
Die cast       : 7-70 MPa, ±0.05 mm, zinc/Al mass parts
Centrifugal    : 600-1200 rpm, pipes and liners
Investment     : lost wax, ±0.05 mm, turbine blades`,
            },
            diagram: {
              kind: "fork",
              title: "Tracing a casting defect back to its cause",
              caption:
                "The fork helps you group remedies by cause - the structure RGPV expects in a 'classification of defects' answer.",
              start: "A defect appears in the casting",
              branches: [
                { label: "Gas visible in X-ray", outcome: "Blow holes or pin holes - cure: permeability, degas", good: false },
                { label: "Cavity at a thick section", outcome: "Shrinkage cavity - cure: larger riser or chill", good: false },
                { label: "Cope-drag step on parting line", outcome: "Mismatch - cure: aligning pins and match plate", good: false },
                { label: "Two metal fronts unfused", outcome: "Cold shut or misrun - cure: hotter, faster pour", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not confuse die-cast variants",
              body: "Hot-chamber die casting is only for low-melting alloys (zinc, lead, magnesium) - the plunger is immersed in the melt. Cold-chamber is for aluminum and brass because their higher melting temperature would erode the immersed plunger. Stating hot chamber for aluminum in the exam loses a mark.",
            },
            keyTerms: [
              { term: "Blow hole", definition: "A large spherical gas cavity in a casting, caused by low sand permeability or gas in the melt." },
              { term: "Shrinkage cavity", definition: "A void at a hot spot where the riser failed to feed liquid during solidification." },
              { term: "Mismatch", definition: "A step on the parting line caused by misaligned cope and drag." },
              { term: "Die casting", definition: "A permanent-mould casting process in which metal is forced into a steel die at 7-70 MPa." },
              { term: "Investment casting", definition: "Lost-wax process using a disposable wax pattern and ceramic shell to produce intricate parts at ±0.05 mm." },
            ],
            examQuestions: [
              {
                q: "Classify casting defects by cause. Explain any five defects with their causes and remedies. Also describe die casting, centrifugal casting and investment casting with one application each.",
                marks: 7,
                outline: [
                  "Classify defects into four groups: gas, shrinkage, mould, pour.",
                  "Blow holes: low permeability -> vent sand, add coal dust.",
                  "Shrinkage cavity: inadequate riser -> add riser or chill.",
                  "Mismatch: cope-drag misaligned -> aligning pins and match plate.",
                  "Cold shut: two fronts unfused -> raise pour temp 50 deg C; misrun -> hotter pour.",
                  "Die casting: 7-70 MPa, hot chamber for zinc, cold chamber for aluminum.",
                  "Centrifugal: 600-1200 rpm for pipes; investment: lost wax for turbine blades.",
                ],
              },
              {
                q: "Name any four casting defects and state one remedy for each.",
                marks: 2,
              },
              {
                q: "Distinguish between hot-chamber and cold-chamber die casting.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT II - WELDING AND JOINING
    // =================================================================
    {
      number: 2,
      roman: "II",
      title: "Welding and Joining",
      summary:
        "Unit II surveys the joining family: welding classification into fusion and pressure, gas welding with three oxy-acetylene flame types, arc welding with electrode coatings and polarity, resistance welding (spot, seam, projection), soldering and brazing, the five basic welding joints, welding defects and weld safety PPE.",
      chapter: {
        number: "02",
        title: "Welding and Joining",
        intro:
          "Unit II moves from primary shaping to joining. It begins with welding classification into fusion and pressure processes, then covers gas welding with neutral, oxidising and carburising flames; arc welding with electrode coatings and DCEN/DCEP polarity; resistance welding variants (spot, seam, projection); soldering and brazing differences; the five basic welding joints and edge preparation; welding defects with causes and remedies; and weld safety PPE and fume control.",
        inOneBreath:
          "Welding joins metals by fusion or pressure; fusion processes melt the faying surfaces, pressure processes bond in solid or plastic state. Gas welding burns oxy-acetylene at 1:1 to 1:1.5 ratio giving a flame temperature of 3100-3200 deg C; the three flames are neutral (for mild steel), oxidising (for brass) and carburising (for hardfacing). Arc welding strikes an arc at 20-40 V and 50-400 A, temperature 6000-7000 deg C; electrodes carry coatings (E6013 rutile, E7018 low-hydrogen, E6010 cellulosic) that stabilise the arc and shield the pool; DCEN gives deep penetration, DCEP gives a stable arc for thin sheet. Resistance welding uses Joule heat Q = I^2 R t at 5000-15000 A; spot welds a 6 mm nugget in 0.2 s. Soldering filler melts below 450 deg C (Sn-Pb at 188 deg C); brazing above 450 deg C (brass at 900 deg C). Five basic joints are butt, lap, tee, corner, edge; defects include porosity, slag inclusion, undercut, distortion and hot/cold cracks; PPE is a DIN 11 shade helmet, leather gloves and apron, fume extractor at 0.5 m/s.",
        sections: [
          // --- 2.1 ---
          {
            number: "2.1",
            title: "Welding classification and basic joints",
            body: [
              "Welding is a joining process in which two or more metal parts are united by fusion or pressure, with or without a filler metal, to form a continuous joint. Fusion welding melts the faying surfaces (and usually a filler) so the parts coalesce on solidification; no external pressure is applied. Gas welding, arc welding, TIG, MIG and submerged-arc welding belong here. Pressure welding bonds the parts in solid or plastic state under mechanical pressure; the temperature may be below or at the forge point. Resistance spot, seam and projection welding, friction welding, forge welding and ultrasonic welding belong here.",
              "Within fusion welding, the heat source varies. Gas welding burns oxy-acetylene at 3100 to 3200 deg C; arc welding uses an electric arc at 6000 to 7000 deg C; TIG (tungsten inert gas) uses a non-consumable tungsten electrode under argon shield; MIG (metal inert gas) uses a consumable wire electrode under CO2 or argon shield; submerged arc welding buries the arc under a flux blanket for thick plate at deposition rates up to 10 kg/h. The choice depends on thickness, position, material and economics: thin sheet goes to gas welding, 3 to 25 mm plate to arc, very thick plate to submerged arc, aluminum to TIG/MIG.",
              "Within pressure welding, resistance spot welding is the most common industrial process. Two copper electrodes pinch overlapping sheets and pass a current of 5000 to 15000 A for 0.2 to 0.5 s; the contact resistance generates enough heat to melt a 4 to 6 mm nugget. Seam welding uses roller electrodes for leak-proof joints in fuel tanks; projection welding makes several spot welds at once on embossed dimples. Friction welding spins one part against another under pressure; the interface heats to forge temperature and the parts bond without filler. Ultrasonic welding vibrates the tip at 20 kHz to weld thin foils and plastics.",
              "The five basic welding joints are classified by the relative position of the parts. A butt joint places two plates edge to edge in the same plane - the strongest joint, used for pipes and pressure vessels. A lap joint overlaps two plates - used for sheet up to 6 mm thickness. A tee joint places one plate perpendicular to another, forming a T - common in structural steel. A corner joint forms an L at the meeting of two plates at 90 degrees - used for boxes and frames. An edge joint joins parallel plates along their edges - used for thin-wall tanks. Fillet welds (triangular cross-section) join tee, lap and corner; groove welds fill a V, U or J preparation in butt joints.",
              "Edge preparation depends on thickness. Square edges (no bevel) suit plate up to 5 mm. A single-V bevel (60 to 70 degree included angle) suits 5 to 25 mm; a double-V suits 12 to 50 mm to reduce distortion. A U or J preparation suits thicker plate (>25 mm) and needs less filler. A worked example: a 12 mm MS plate butt joint is prepared with a 60 degree single-V, 2 mm root face, 2 mm gap; filled with E7018 electrode at 140 A in three passes - root, hot and cap. Joint efficiency: butt 100 percent, lap 80 percent, fillet 70 to 90 percent.",
            ],
            bullets: [
              "Two welding families: fusion (no pressure) and pressure (with pressure).",
              "Fusion processes: gas, arc, TIG, MIG, submerged arc.",
              "Pressure processes: resistance spot/seam/projection, friction, ultrasonic, forge.",
              "Five basic joints: butt, lap, tee, corner, edge.",
              "Edge prep: square (<5 mm), single-V 60-70 deg (5-25 mm), double-V/U/J (>25 mm).",
              "Weld positions: flat (easiest) -> horizontal -> vertical -> overhead (hardest).",
              "Joint efficiency: butt 100 percent, lap 80 percent, fillet 70-90 percent.",
            ],
            table: {
              caption: "Basic welding joints and edge preparation by thickness.",
              headers: ["Joint", "Typical use", "Edge preparation", "Thickness range"],
              rows: [
                ["Butt", "Pipes, pressure vessels", "Square / single-V / double-V", "3 to 50 mm"],
                ["Lap", "Sheet overlap", "None (square)", "1 to 6 mm"],
                ["Tee", "Structural steel", "Fillet", "Any"],
                ["Corner", "Boxes, frames", "Fillet or V", "1 to 12 mm"],
                ["Edge", "Tanks, flanges", "Flanged or square", "1 to 3 mm"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Selecting a welding process for a joint",
              caption:
                "Each branch is a defensible exam answer when asked 'which welding process would you use for...'.",
              start: "Selecting a welding process",
              branches: [
                { label: "Thin sheet <3 mm", outcome: "Gas welding (oxy-acetylene)", good: true },
                { label: "Plate 3-25 mm MS", outcome: "Arc welding with coated electrode", good: true },
                { label: "Thick plate >25 mm", outcome: "Submerged arc welding", good: true },
                { label: "Aluminum or stainless", outcome: "TIG or MIG with inert gas", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Use joint name and edge prep together",
              body: "When sketching a joint in the exam, label both the joint type (butt, lap, tee) and the edge preparation (square, single-V, double-V). The two together fetch the full diagram mark - a joint sketch without edge prep earns only half.",
            },
            keyTerms: [
              { term: "Fusion welding", definition: "Welding in which the faying surfaces are melted and coalesced without external pressure (gas, arc, TIG, MIG)." },
              { term: "Pressure welding", definition: "Welding in which parts are bonded in solid or plastic state under mechanical pressure (resistance, friction, forge)." },
              { term: "Butt joint", definition: "A joint between two members in the same plane; the strongest and most efficient weld joint." },
              { term: "Fillet weld", definition: "A triangular cross-section weld joining tee, lap and corner joints; size equals the leg length." },
              { term: "Edge preparation", definition: "Bevelling or grooving of the edges to be welded (square, V, U, J) to allow full penetration." },
            ],
            examQuestions: [
              {
                q: "Classify welding processes into fusion and pressure types with two examples each. Sketch and label the five basic welding joints and state the edge preparation used for different thickness ranges.",
                marks: 7,
                outline: [
                  "Define welding as joining by fusion or pressure with or without filler.",
                  "Fusion: gas, arc, TIG, MIG, SAW - no external pressure applied.",
                  "Pressure: spot, seam, projection, friction, forge - bonded in solid state.",
                  "Sketch and label butt, lap, tee, corner, edge joints.",
                  "Edge prep: square <5 mm, single-V 60-70 deg for 5-25 mm, double-V/U/J for >25 mm.",
                  "Mention weld positions: flat, horizontal, vertical, overhead.",
                  "Give joint efficiency: butt 100 percent, lap 80 percent, fillet 70-90 percent.",
                ],
              },
              {
                q: "Name any four fusion welding processes.",
                marks: 2,
              },
              {
                q: "Sketch a single-V butt joint and state its dimensional parameters.",
                marks: 3,
              },
            ],
          },
          // --- 2.2 ---
          {
            number: "2.2",
            title: "Gas welding: equipment and flame types",
            body: [
              "Gas welding burns a fuel gas with oxygen to melt the faying surfaces and a filler rod. The most common fuel is acetylene (C2H2), which with oxygen gives the highest flame temperature of any common fuel gas - 3100 to 3200 deg C. Other fuels (propane, hydrogen, natural gas) give lower temperatures (2500 to 2800 deg C) and are used for brazing and heating rather than welding. The complete combustion of acetylene is 2 C2H2 + 5 O2 -> 4 CO2 + 2 H2O; the stoichiometric ratio is 2.5 : 1, but at the torch the neutral flame uses 1 : 1 because secondary combustion with atmospheric oxygen completes the reaction.",
              "The equipment consists of an oxygen cylinder (painted black, charged to 150 bar), an acetylene cylinder (painted maroon, charged to 15 bar and containing acetylene dissolved in acetone absorbed in a porous monolithic filler so it cannot decompose explosively above 15 psi), two-stage regulators that drop cylinder pressure to a working 0.1 to 0.4 MPa, coloured hoses (blue for oxygen, red for acetylene - the threads are left-handed on acetylene to prevent wrong connection), a torch with mixer and tip, and a filler rod of the same composition as the parent metal.",
              "Three flame types are produced by varying the oxygen-to-acetylene ratio at the torch. A neutral flame has ratio 1 : 1 and a sharp inner cone with a feathery outer envelope; it does not alter the chemistry of the weld pool and is used for mild steel, stainless steel, copper and aluminum. An oxidising flame has excess oxygen (ratio 1.1 to 1.5 : 1), a shorter pointed cone and a hissing sound; it adds oxygen to the pool and is used for brass (burns off zinc to give a sound weld) and bronze. A carburising flame has excess acetylene (ratio 1 : 1.1 to 1.5), three zones - inner cone, acetylene feather (intermediate), outer envelope - and adds carbon to the pool; it is used for hardfacing, nickel alloys and for heating before forging.",
              "Tip size and flow rate are selected by sheet thickness. A 1 mm sheet uses tip size 1 with acetylene flow 50 L/h; a 3 mm sheet uses tip size 3 with 250 L/h; a 12 mm plate uses tip size 10 with 1400 L/h. Welding speed for 3 mm MS sheet is 100 to 150 mm/min. The filler rod diameter is roughly half the sheet thickness - a 3 mm sheet uses a 1.6 mm rod. A worked example: a 3 mm MS sheet butt weld in flat position uses tip 3, neutral flame, 1.6 mm MS rod, oxygen at 0.2 MPa and acetylene at 0.05 MPa, deposition rate 50 g/min.",
              "Safety in gas welding rests on three rules. First, never use acetylene above 0.15 MPa working pressure or it can dissociate explosively. Second, install flashback arrestors at the regulator outlets to stop a flame travelling back into the cylinder. Third, purge the hoses before lighting - acetylene first, then oxygen, then light with a spark lighter (never a match, which burns the hand). The cylinders must be stored upright, chained, 6 m apart from each other or separated by a fire wall, and away from any source of ignition.",
            ],
            bullets: [
              "Oxy-acetylene flame temperature 3100-3200 deg C, highest of common gas flames.",
              "Oxygen cylinder 150 bar (black); acetylene cylinder 15 bar (maroon, dissolved in acetone).",
              "Neutral flame 1:1 ratio - mild steel, copper, aluminum.",
              "Oxidising flame (excess O2) - brass, bronze (burns off zinc).",
              "Carburising flame (excess acetylene) - hardfacing, nickel alloys.",
              "Tip sizes 1-10; smaller tips for thin sheet, larger for thick plate.",
              "Welding speed 100-150 mm/min for 3 mm MS sheet.",
            ],
            codeExample: {
              language: "text",
              caption: "Lighting the torch and identifying the flame by sight and sound.",
              code:
                `LIGHTING AND SETTING THE FLAME
1. Open acetylene valve 1/4 turn, purge hose 5 s
2. Open oxygen valve 1/4 turn, purge hose 5 s
3. Reopen acetylene, light with spark lighter
   -> sooty yellow flame, smoke
4. Slowly open oxygen -> inner cone forms
5. Adjust to 1:1 ratio -> NEUTRAL flame
   Sharp inner cone, quiet, no feather
   Use: mild steel, copper, aluminum
6. Increase oxygen -> OXIDISING flame
   Shorter cone, hissing sound
   Use: brass (burns off zinc fume)
7. Reduce oxygen or add acetylene -> CARBURISING
   Three zones: cone + feather + envelope
   Use: hardfacing, nickel alloys`,
            },
            diagram: {
              kind: "matrix",
              title: "Three flame types placed in a 2x2 of use and oxygen",
              caption:
                "Quadrant order: top-left, top-right, bottom-left, bottom-right - memorise the use case in each.",
              axes: { x: "oxygen content (low to high)", y: "use case (general to special)" },
              quadrants: [
                { label: "Neutral flame (1:1)", note: "mild steel, copper, aluminum" },
                { label: "Oxidising flame (excess O2)", note: "brass, bronze" },
                { label: "Carburising flame (excess C2H2)", note: "hardfacing, nickel" },
                { label: "Slightly carburising", note: "aluminum and nickel pre-heat" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch the three flames side by side",
              body: "When asked about oxy-acetylene flame types, draw three flame outlines labelled with cone, feather (only carburising) and envelope, and write the use under each. RGPV awards one mark per flame sketch and one per use - six marks for a small sketch.",
            },
            keyTerms: [
              { term: "Neutral flame", definition: "Oxy-acetylene flame at 1:1 ratio; sharp inner cone, no feather; used for mild steel." },
              { term: "Oxidising flame", definition: "Flame with excess oxygen (1.1-1.5:1); shorter hissing cone; used for brass." },
              { term: "Carburising flame", definition: "Flame with excess acetylene (1:1.1-1.5); three zones; adds carbon, used for hardfacing." },
              { term: "Regulator", definition: "A two-stage pressure-reducing valve that drops cylinder pressure to working pressure." },
              { term: "Flashback arrestor", definition: "A safety device at the regulator outlet that stops a flame travelling back into the cylinder." },
            ],
            examQuestions: [
              {
                q: "Describe the principle and equipment of oxy-acetylene gas welding. Sketch and label the three flame types, giving the oxygen-to-acetylene ratio and one application of each.",
                marks: 7,
                outline: [
                  "Principle: combustion of acetylene with oxygen; flame temperature 3100-3200 deg C.",
                  "Equipment: oxygen cylinder 150 bar, acetylene cylinder 15 bar in acetone, regulators, hoses, torch.",
                  "Neutral flame: 1:1 ratio, sharp inner cone, no feather - mild steel, copper.",
                  "Oxidising flame: excess O2 (1.1-1.5), hissing sound - brass and bronze.",
                  "Carburising flame: excess acetylene (1:1.1-1.5), three zones - hardfacing, nickel.",
                  "Sketch the three flames side by side with cone, feather, envelope labelled.",
                  "Cite safety: never above 0.15 MPa acetylene; flashback arrestors; spark lighter.",
                ],
              },
              {
                q: "State the cylinder pressures and colours for oxygen and acetylene.",
                marks: 2,
              },
              {
                q: "Which flame is used for welding brass and why?",
                marks: 3,
              },
            ],
          },
          // --- 2.3 ---
          {
            number: "2.3",
            title: "Arc welding: principle, electrodes and polarity",
            body: [
              "Arc welding strikes an electric arc between an electrode and the workpiece. The arc temperature reaches 6000 to 7000 deg C - hot enough to melt both the electrode (if consumable) and the parent metal, forming a weld pool that solidifies as the electrode advances. The power source is a constant-current transformer (for coated electrodes) or rectifier (for DC), supplying 20 to 40 V at the arc and 50 to 400 A. A 3.15 mm electrode at 110 A deposits about 1.5 kg of weld metal per hour at a duty cycle of 60 percent - the percentage of a 10-minute period the machine can weld without overheating.",
              "The arc welding circuit is simple: power source, electrode holder, electrode, arc, work, earth clamp, return cable. The earth clamp must make good contact with the work or with a steel welding table; a poor earth causes arcing at the clamp and a wandering arc at the pool. The holder grips the electrode at the right angle (60 to 80 degrees from the weld axis) and the arc length is kept at about the electrode core diameter - too long gives a noisy arc and porosity, too short sticks the electrode to the pool. Travel speed 100 to 150 mm/min for a 3.15 mm electrode at 110 A.",
              "Electrode coatings serve five roles. They stabilise the arc by providing ionisable elements (potassium, calcium); they shield the pool from atmospheric oxygen and nitrogen by decomposing into a slag blanket and a CO or CO2 gas envelope; they add alloying elements (manganese, silicon) to the pool; they refine the grain by deoxidising; and they control the weld profile - rutile coatings give a smooth flat bead, basic coatings give a convex bead. The AWS classification E6013 means an electrode of 60000 psi (415 MPa) tensile strength, all-position, rutile coating, type 13. E7018 is 70000 psi (485 MPa) with low-hydrogen basic coating, type 18; E6010 is cellulosic for deep penetration on root passes.",
              "Polarity decides where the heat is concentrated - about 70 percent of arc heat is at the positive pole. DCEN (direct current electrode negative, also called straight polarity) puts the work positive and concentrates heat on the work, giving deep penetration at high deposition - used for thick mild steel. DCEP (direct current electrode positive, reverse polarity) puts the electrode positive; the pool runs cooler, penetration is shallow and the arc is stable with less spatter - used for thin sheet and for stainless steel. AC polarity alternates at 50 Hz and averages the two, used for aluminum with coated electrodes that clean the oxide film in the DCEP half-cycle.",
              "A worked example of electrode selection. For a 6 mm MS plate butt joint in flat position: use E7018 basic-coated low-hydrogen electrode, diameter 3.15 mm, current 110 to 140 A DCEN, arc voltage 22 to 26 V, travel speed 120 mm/min, electrode angle 70 degrees. Bake E7018 at 350 deg C for 1 hour before use to remove moisture (hydrogen causes cold cracks). For a 2 mm MS sheet lap joint, choose E6013 rutile 2.5 mm at 70 A DCEP for stable arc and low penetration. For a root pass on a pipe, use E6010 cellulosic 3.15 mm at 90 A DCEN for deep penetration.",
            ],
            bullets: [
              "Arc temperature 6000-7000 deg C; voltage 20-40 V, current 50-400 A.",
              "Duty cycle 60 percent typical - 6 minutes welding per 10-minute cycle.",
              "Electrode coating stabilises arc, shields pool, adds alloy, refines grain, controls profile.",
              "E6013: rutile, general purpose, all-position, mild steel.",
              "E7018: low-hydrogen, basic, structural, bake at 350 deg C before use.",
              "DCEN (straight): work +ve, deep penetration, thick plate.",
              "DCEP (reverse): electrode +ve, stable arc, thin sheet.",
            ],
            codeExample: {
              language: "text",
              caption: "Electrode and current selection for mild steel by thickness.",
              code:
                `MILD STEEL - electrode and parameters
Plate   | Electrode  | Current (DCEN)  | Polarity
1-2 mm  | E6013, 2.5 | 60-80 A         | DCEP (stable arc)
3-5 mm  | E6013, 3.15| 90-120 A        | DCEN
6-10 mm | E7018, 3.15| 110-140 A       | DCEN
12-20 mm| E7018, 4.0 | 150-180 A       | DCEN
20+ mm  | E7018, 5.0 | 180-240 A       | DCEN

CONSTANTS
  Arc voltage     : 22-28 V
  Travel speed    : 100-150 mm/min
  Electrode angle : 60-80 deg from weld axis
  E7018 bake      : 350 deg C, 1 h, before use
  Deposition rate : ~1.5 kg/h at 110 A`,
            },
            diagram: {
              kind: "compare",
              title: "DCEN vs DCEP polarity in arc welding",
              caption:
                "About 70 percent of arc heat lands at the positive pole - choose polarity to put heat where you want penetration.",
              left: {
                heading: "DCEN (straight polarity)",
                items: [
                  "Electrode negative, work positive",
                  "70 percent heat on work -> deep penetration",
                  "High deposition rate",
                  "Use: thick mild steel plate",
                  "Example: E7018, 3.15 mm, 140 A",
                ],
              },
              right: {
                heading: "DCEP (reverse polarity)",
                items: [
                  "Electrode positive, work negative",
                  "70 percent heat on electrode -> shallow pen",
                  "Stable arc, low spatter",
                  "Use: thin sheet, stainless steel",
                  "Example: E6013, 2.5 mm, 70 A",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "E7018 must be baked before use",
              body: "Low-hydrogen electrodes absorb moisture from the air, and hydrogen in the weld pool causes delayed cold cracks under the bead. Bake E7018 at 350 deg C for one hour before use and keep it in a heated quiver at 150 deg C on the shop floor. Forgetting this is the single most common cause of structural weld failure and an easy mark to lose in the exam.",
            },
            keyTerms: [
              { term: "Arc welding", definition: "A fusion welding process using an electric arc between electrode and work at 6000-7000 deg C." },
              { term: "Electrode coating", definition: "A flux layer on a coated electrode that stabilises the arc, shields the pool and adds alloying elements." },
              { term: "Duty cycle", definition: "The percentage of a 10-minute period an arc welder can operate at rated current without overheating." },
              { term: "DCEN polarity", definition: "Direct current electrode negative; work positive; deep penetration for thick plate." },
              { term: "DCEP polarity", definition: "Direct current electrode positive; electrode positive; stable arc and shallow penetration for thin sheet." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of arc welding with a sketch of the circuit. Describe the functions of electrode coating with examples of E6013 and E7018, and compare DCEN and DCEP polarity.",
                marks: 7,
                outline: [
                  "Principle: electric arc at 6000-7000 deg C melts electrode and parent metal.",
                  "Sketch circuit: source, holder, electrode, arc, work, earth clamp, return cable.",
                  "Voltage 20-40 V, current 50-400 A, duty cycle 60 percent.",
                  "Coating functions: stabilise arc, shield pool, add alloy, refine grain, control profile.",
                  "E6013 rutile general purpose; E7018 low-hydrogen structural, bake 350 deg C.",
                  "DCEN: work positive, 70 percent heat on work, deep penetration.",
                  "DCEP: electrode positive, stable arc, shallow penetration for thin sheet.",
                ],
              },
              {
                q: "Decode the AWS electrode classification E7018.",
                marks: 2,
              },
              {
                q: "State any three functions of electrode coating.",
                marks: 3,
              },
            ],
          },
          // --- 2.4 ---
          {
            number: "2.4",
            title: "Resistance welding: spot, seam and projection",
            body: [
              "Resistance welding bonds two overlapping sheets by Joule heat generated at their contact resistance. The principle is Q = I^2 R t, where I is the current in amperes, R is the contact resistance in ohms and t is the time in seconds. Because the contact resistance at the faying surface (about 100 micro-ohm) is higher than the bulk metal resistance, heat concentrates at the interface and melts a small nugget of metal, while water-cooled copper electrodes conduct heat away from the outer surfaces. Pressure is applied throughout to maintain contact and forge the nugget. No filler, no flux and no shielding gas are required.",
              "Spot welding is the most common resistance process. Two water-cooled copper-chromium electrodes (tip diameter 5 to 8 mm) pinch the sheets and pass current for 0.2 to 0.5 s. A nugget of 4 to 6 mm diameter forms at the interface, with shear strength of about 3 kN per spot for 1 mm MS sheet. Typical parameters for 1 + 1 mm MS: electrode force 2 kN, current 10000 A, weld time 0.2 s, hold time 0.1 s. A car body contains 4000 to 5000 spot welds. Tip wear is monitored by the number of welds - tips are redressed after every 200 to 500 welds.",
              "Seam welding replaces the electrodes with copper roller wheels that roll along the overlap, firing a series of overlapping spots to produce a continuous leak-proof joint. The weld frequency is 50 to 500 spots per second; weld speed 1 to 5 m/min. Applications include fuel tanks, drums, exhaust systems and refrigerator cabinets where a hermetic seal is needed. A variant is mash seam welding, which forges the overlap flat for sheet-metal cabinets. The wheels are cooled internally with water and dressed periodically.",
              "Projection welding localises the current at small embossed projections on one of the sheets. The projection collapses under pressure and forms a nugget. Because the projections are arranged in a pattern, several welds are made simultaneously with one squeeze of the electrodes. Applications include welding nuts to sheet metal, welding cross-wire meshes, and welding capacitor terminals. Projection diameters are typically 1 to 3 mm, heights 0.5 to 1.0 mm; electrode force 2 to 5 kN, current 8000 to 20000 A. The advantage over spot welding is multiple welds per cycle and longer electrode life.",
              "The spot welding cycle is a four-step pipeline: squeeze, weld, hold, off. Squeeze applies electrode force (1 to 5 kN) for 0.05 to 0.10 s to ensure contact; weld passes current (5000 to 20000 A) for 0.1 to 1 s to form the nugget; hold maintains force for 0.05 to 0.20 s to forge the nugget as it solidifies; off releases the electrodes and the next spot is positioned. A worked example for 2 + 2 mm MS: squeeze 3 kN for 0.1 s, weld 15000 A for 0.4 s, hold 4 kN for 0.15 s, off 0.1 s - nugget 8 mm dia with shear strength 8 kN.",
            ],
            bullets: [
              "Heat Q = I^2 R t; contact resistance highest at faying surface.",
              "Spot weld: tip dia 5-8 mm, nugget 4-6 mm, cycle 0.2-0.5 s.",
              "Current 5000-15000 A typical for 1 mm MS sheet.",
              "Electrode force 1-5 kN; copper-chromium tips, water cooled.",
              "Seam welding: roller electrodes, leak-proof joints at 1-5 m/min.",
              "Projection welding: embossed dimples, multiple welds per cycle.",
              "Four-step cycle: squeeze -> weld -> hold -> off.",
            ],
            codeExample: {
              language: "text",
              caption: "Spot welding parameters and cycle for 1 mm MS sheet.",
              code:
                `SPOT WELD - 1.0 + 1.0 mm mild steel
Electrode tip    : Cu-Cr, 6 mm dia, 30 deg taper
Electrode force  : 2.0 kN (squeeze), 2.5 kN (hold)
Weld current     : 10000 A
Weld time        : 0.20 s
Hold time        : 0.10 s
Off time         : 0.10 s
Nugget diameter  : 5-6 mm
Shear strength   : ~3 kN per spot

CYCLE (one spot)
  Squeeze : 0.05 s, 2.0 kN
  Weld    : 0.20 s, 10000 A
  Hold    : 0.10 s, 2.5 kN
  Off     : 0.10 s
Total cycle : 0.45 s -> 130 spots/min`,
            },
            diagram: {
              kind: "cycle",
              title: "Spot welding cycle - four steps around a nugget",
              caption:
                "The cycle returns to squeeze for the next spot; memorise the time and force for each stage.",
              steps: [
                { label: "Squeeze", note: "force 1-5 kN for 0.05-0.1 s" },
                { label: "Weld", note: "current 5000-15000 A for 0.1-1 s" },
                { label: "Hold", note: "forge force, nugget solidifies" },
                { label: "Off", note: "release, reposition for next spot" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always write Q = I^2 R t",
              body: "Resistance welding questions reward the formula first. State Q = I^2 R t, explain that R is the contact resistance at the faying surface, then list a parameter set (current 10000 A, time 0.2 s, force 2 kN). The formula and one worked value fetch two marks before you even describe the process.",
            },
            keyTerms: [
              { term: "Spot welding", definition: "Resistance welding of overlapping sheets at discrete points using two opposing electrodes." },
              { term: "Seam welding", definition: "Continuous resistance welding using roller electrodes to make leak-proof joints." },
              { term: "Projection welding", definition: "Resistance welding localised at pre-formed projections on one sheet, making multiple welds at once." },
              { term: "Nugget", definition: "The fused zone at the faying surface in spot welding, typically 4-6 mm diameter for 1 mm sheet." },
              { term: "Joule heating", definition: "Heat Q = I^2 R t generated at the contact resistance; the principle of all resistance welding." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of resistance welding. Describe spot, seam and projection welding with a worked example giving electrode force, current, time and nugget diameter for 1 mm MS sheet.",
                marks: 7,
                outline: [
                  "Principle: Q = I^2 R t; contact resistance highest at faying surface.",
                  "No filler, no flux; water-cooled copper electrodes conduct heat away.",
                  "Spot welding: tip dia 5-8 mm, nugget 4-6 mm, cycle 0.2-0.5 s, 5000-15000 A.",
                  "Seam welding: roller electrodes, leak-proof joints at 1-5 m/min.",
                  "Projection welding: embossed dimples, multiple welds per squeeze.",
                  "Worked example: 1 mm MS, 2 kN force, 10000 A, 0.2 s weld -> 6 mm nugget.",
                  "Mention applications: auto body 4000-5000 spots, fuel tanks, capacitor terminals.",
                ],
              },
              {
                q: "Write the expression for heat generated in resistance welding and define each term.",
                marks: 2,
              },
              {
                q: "Distinguish between seam welding and projection welding with one application each.",
                marks: 3,
              },
            ],
          },
          // --- 2.5 ---
          {
            number: "2.5",
            title: "Soldering and brazing: differences, fluxes and joints",
            body: [
              "Soldering and brazing join metals by melting a filler that flows by capillary action into the joint gap; the parent metal does not melt. The dividing line is the filler melting temperature: soldering fillers melt below 450 deg C, brazing fillers above 450 deg C. Both produce a sound joint if the gap is small (0.05 to 0.20 mm), the surfaces are clean, and a flux removes the oxide film so the filler wets the parent metal. They differ in joint strength, corrosion resistance and temperature capability - brazing is the stronger and heat-resistant of the two.",
              "Soldering fillers are tin-lead alloys. The 60/40 Sn-Pb solder melts at 188 deg C and is the classic electronics solder with a rosin core. Lead-free solder Sn-Ag-Cu (SAC305) melts at 217 deg C and is RoHS-compliant for European electronics. Soft solder joints have a tensile strength of about 30 to 50 MPa, suitable for electrical continuity and sealing but not for structural load. A soldering iron (25 to 80 W) or soldering gun (100 to 300 W) supplies heat; for plumbing, a propane torch melts the solder around a copper fitting. Flux is rosin (electronics, non-corrosive) or zinc chloride (general, corrosive and washed off after).",
              "Brazing fillers are copper-zinc (brass, melting 870 to 925 deg C), silver alloys (silver solder, 620 to 730 deg C), copper-phosphorus (self-fluxing on copper, 700 to 800 deg C) and aluminum-silicon (Al-Si 12 percent, 590 deg C). Brazed joints reach tensile strength 250 to 400 MPa - comparable to mild steel - and withstand temperatures up to 300 deg C in service. The joint is heated with an oxy-acetylene torch, induction coil, or furnace; the filler is fed as a rod or pre-placed as a ring and flows by capillary action into the gap. Flux is borax or a borax-boric acid mixture, applied as a paste; it dissolves oxides and is removed by warm water washing.",
              "Flux serves three functions in both processes. It removes the oxide film from the faying surfaces so the filler can wet them; it protects the cleaned surfaces from re-oxidation during heating; and it lowers the surface tension of the filler to promote capillary flow. Rosin is mild and leaves a non-corrosive residue, used in electronics. Zinc chloride (killed spirits) is active and removes heavy oxides from steel and brass; residue must be washed off. Borax is the standard brazing flux, used as a paste or powder; it melts at 740 deg C and forms a glassy slag that is chipped off after cooling. Incorrect flux choice leads to dry joints and leak paths.",
              "Joint design follows the lap length rule: lap >= 3 times the thickness of the thinner member for full strength. The capillary gap is held at 0.05 to 0.20 mm - too tight and the filler cannot enter, too wide and capillary action fails. Butt joints in brazing reach only 70 percent of parent metal strength; lap and scarf joints reach 100 percent. A worked example: a 12 mm copper pipe brazed into a fitting with silver solder (melting 720 deg C), lap 36 mm, gap 0.1 mm, borax flux, oxy-acetylene neutral flame - joint tensile strength 280 MPa, suitable for refrigerant lines at 2 MPa working pressure.",
            ],
            bullets: [
              "Soldering: filler melts below 450 deg C; brazing: above 450 deg C.",
              "60/40 Sn-Pb solder melts at 188 deg C; lead-free SAC305 at 217 deg C.",
              "Brazing brass filler melts 870-925 deg C; silver solder 620-730 deg C.",
              "Capillary gap 0.05-0.20 mm; lap length >= 3x thickness.",
              "Flux: rosin (electronics), ZnCl2 (general), borax (brazing).",
              "Soldered joint tensile strength 30-50 MPa; brazed 250-400 MPa.",
              "Butt joint in brazing reaches 70 percent; lap reaches 100 percent of parent.",
            ],
            codeExample: {
              language: "text",
              caption: "Selecting a soldering or brazing filler by base metal and use.",
              code:
                `FILLER SELECTION BY APPLICATION
Base metals    | Process | Filler          | Temp (deg C)
Cu-Cu pipe     | Solder  | Sn-Pb 60/40     | 188
Cu-Cu fitting  | Braze   | Ag-Cu-Zn-Cd      | 630
Steel-steel    | Braze   | Brass Cu-Zn      | 900
Carbide-steel  | Braze   | Silver solder    | 720
Al-Al parts    | Braze   | Al-Si 12 percent | 590
Electronics    | Solder  | Sn-Ag-Cu (SAC)   | 217

JOINT DESIGN
  Lap length    >= 3 x thickness
  Capillary gap : 0.05-0.20 mm
  Butt strength : 70 percent of parent
  Lap strength  : 100 percent of parent`,
            },
            diagram: {
              kind: "compare",
              title: "Soldering vs brazing side by side",
              caption:
                "Two panels of values - this is the form RGPV expects for a 'distinguish between' question.",
              left: {
                heading: "Soldering",
                items: [
                  "Filler melts below 450 deg C",
                  "Sn-Pb 60/40 at 188 deg C",
                  "Joint strength 30-50 MPa",
                  "Flux: rosin (electronics)",
                  "Use: electronics, plumbing",
                ],
              },
              right: {
                heading: "Brazing",
                items: [
                  "Filler melts above 450 deg C",
                  "Brass at 900 deg C, silver at 720 deg C",
                  "Joint strength 250-400 MPa",
                  "Flux: borax paste",
                  "Use: carbide tips, cycle frames",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Capillary action is the keyword",
              body: "When asked 'what is the principle of soldering or brazing', the answer is capillary action: the molten filler is drawn into the narrow joint gap against gravity by surface tension. Without the right gap (0.05-0.20 mm) and a clean, fluxed surface, capillary action fails and the joint leaks. State this in one sentence and you secure the principle mark.",
            },
            keyTerms: [
              { term: "Soldering", definition: "A joining process in which a filler melting below 450 deg C flows by capillary action into the joint gap; parent metal does not melt." },
              { term: "Brazing", definition: "A joining process using a filler melting above 450 deg C, giving joints of strength comparable to the parent metal." },
              { term: "Flux", definition: "A chemical that removes the oxide film, prevents re-oxidation and lowers surface tension to promote capillary flow." },
              { term: "Capillary action", definition: "Surface-tension-driven flow of molten filler into the narrow joint gap, the working principle of soldering and brazing." },
              { term: "Silver solder", definition: "A brazing filler of silver-copper-zinc-cadmium melting at 620-730 deg C, used for strong steel and copper joints." },
            ],
            examQuestions: [
              {
                q: "Differentiate between soldering and brazing with respect to filler melting temperature, joint strength, flux and applications. State the functions of flux and the rules of joint design for capillary flow.",
                marks: 7,
                outline: [
                  "Soldering filler melts below 450 deg C; brazing above 450 deg C.",
                  "Soldering filler Sn-Pb 60/40 at 188 deg C; brazing brass at 900 deg C.",
                  "Soldered joint strength 30-50 MPa; brazed 250-400 MPa.",
                  "Flux: rosin (soldering electronics), ZnCl2 (general), borax (brazing).",
                  "Three flux functions: remove oxide, prevent re-oxidation, lower surface tension.",
                  "Joint design: lap >= 3x thickness; capillary gap 0.05-0.20 mm.",
                  "Applications: soldering electronics and plumbing; brazing carbide tips and frames.",
                ],
              },
              {
                q: "State any two functions of flux in soldering.",
                marks: 2,
              },
              {
                q: "What is capillary action and why is it important in brazing?",
                marks: 3,
              },
            ],
          },
          // --- 2.6 ---
          {
            number: "2.6",
            title: "Welding defects, distortion and safety",
            body: [
              "Welding defects undermine joint strength and leak-tightness. The common defects are porosity (gas trapped as spherical or worm-like holes), slag inclusion (non-metallic trapped in the bead), undercut (a groove melted at the toe of the weld), incomplete penetration (root not fused), incomplete fusion (between passes), cracking (hot cracks at solidification, cold cracks after cooling), and distortion (warpage from uneven heating). Each defect traces to a cause in the welding parameters or procedure, and each has a remedy the welder applies before re-welding.",
              "Porosity comes from wet electrodes, dirty surfaces, or excessive arc length that lets atmospheric nitrogen and oxygen enter the pool. Remedy: dry electrodes at 350 deg C for E7018, clean surfaces to bare metal, keep arc length equal to electrode core diameter. Slag inclusion arises when the previous pass is not cleaned, or when travel speed is too slow for the slag to float; cure by chipping and grinding between passes and adjusting current. Undercut is a groove melted at the toe by excessive current or wrong electrode angle; cure by lowering current 10 percent and holding the electrode at 70 to 80 degrees from the weld axis.",
              "Hot cracks form at the solidification temperature, usually along the weld centre line, when low-melting impurities (sulfur, phosphorus) segregate. They are prevented by using low-hydrogen basic electrodes (E7018) and avoiding deep narrow weld pools. Cold cracks (also called hydrogen-induced or delayed cracks) form hours or days after welding, in the heat-affected zone of high-strength steel, when dissolved hydrogen diffuses to a stressed crack tip. They are prevented by baking electrodes at 350 deg C, pre-heating the work to 100 to 200 deg C, and post-heating to allow hydrogen to diffuse out. Distortion is controlled by sequence welding (back-step, skip, symmetric), jigs and fixtures, pre-bending and clamping.",
              "Welding safety is enforced by PPE and ventilation. The welder wears a helmet with the correct filter shade (DIN 9 to 11 for 100 to 300 A, DIN 11 to 13 for 300 to 500 A), leather gauntlet gloves, a leather apron or fire-resistant jacket, safety shoes with steel toe, and ear plugs for noise above 85 dB. The helmet must have side shields to block stray arc rays that cause arc-eye (welder's flash, a painful inflammation of the cornea). Fume extraction at 0.5 m/s face velocity captures manganese fume (causes manganism), ozone from argon arcs, and nitrogen oxides from high-current welding.",
              "A worked defect-cause-remedy example. A 12 mm MS butt weld shows undercut 1 mm deep at the toe and porosity in X-ray. Cause: current 180 A is too high (gives 2 mm undercut at toe), and the electrode was not dried (gives 2 mm porosity). Remedy: lower current to 140 A, bake E7018 at 350 deg C for 1 hour, clean the previous pass to bare metal, re-weld with a 3.15 mm electrode at 120 A DCEN, hold at 70 degrees. Inspect again with dye penetrant or X-ray. Always document the cause, the action taken and the re-inspection result in the weld map.",
            ],
            bullets: [
              "Defects: porosity, slag inclusion, undercut, incomplete pen/fusion, cracks, distortion.",
              "Porosity: dry electrodes, clean surfaces, short arc.",
              "Slag inclusion: clean between passes, adjust travel speed.",
              "Undercut: lower current 10 percent, 70-80 deg electrode angle.",
              "Hot cracks: low-hydrogen E7018, avoid deep narrow pools.",
              "Cold cracks: bake electrodes 350 deg C, pre-heat 100-200 deg C.",
              "PPE: DIN 9-13 helmet, leather gloves, apron, steel-toe shoes, ear plugs.",
            ],
            table: {
              caption: "Welding defects, causes and remedies.",
              headers: ["Defect", "Cause", "Remedy"],
              rows: [
                ["Porosity", "Wet electrode, dirty surface, long arc", "Dry at 350 deg C, clean, short arc"],
                ["Slag inclusion", "Previous pass not cleaned, slow travel", "Chip and grind between passes"],
                ["Undercut", "High current, wrong angle", "Lower current 10 percent, 70-80 deg"],
                ["Hot crack", "Sulfur/phosphorus impurities, deep pool", "Low-hydrogen E7018, wider bead"],
                ["Cold crack", "Hydrogen, fast cooling of HSLA steel", "Bake electrode, pre-heat 100-200 deg C"],
                ["Distortion", "Uneven heating, poor sequence", "Back-step, symmetric, jigs, pre-bend"],
                ["Incomplete penetration", "Low current, root gap too small", "Raise current 10 percent, gap 2-3 mm"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Tracing a weld defect to its cause",
              caption:
                "Match the defect you see to its origin - the remedy follows immediately.",
              start: "A weld defect is observed",
              branches: [
                { label: "Gas visible in X-ray", outcome: "Porosity - dry electrode, clean, short arc", good: false },
                { label: "Slag line in bead", outcome: "Slag inclusion - clean between passes", good: false },
                { label: "Groove at weld toe", outcome: "Undercut - lower current, fix angle", good: false },
                { label: "Plate warped after weld", outcome: "Distortion - sequence, jig, pre-bend", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Arc-eye and fume hazards are exam favourites",
              body: "Two safety questions come up almost every year. Arc-eye (welder's flash) is the painful inflammation of the cornea from UV exposure; prevented by a helmet with the right DIN shade and side shields. Manganese fume causes manganism (a Parkinson-like disorder); prevented by fume extraction at 0.5 m/s face velocity. State both in the safety answer.",
            },
            keyTerms: [
              { term: "Porosity", definition: "Gas trapped as spherical or worm-like cavities in the weld bead, caused by wet electrodes or dirty surfaces." },
              { term: "Slag inclusion", definition: "Non-metallic flux trapped in the bead when the previous pass is not cleaned or travel is too slow." },
              { term: "Undercut", definition: "A groove melted at the toe of the weld by excessive current or wrong electrode angle." },
              { term: "Distortion", definition: "Warpage of the workpiece from uneven heating and cooling; controlled by sequence, jigs and pre-bending." },
              { term: "Arc-eye", definition: "Painful corneal inflammation from UV exposure to the welding arc; prevented by a DIN-shade helmet with side shields." },
            ],
            examQuestions: [
              {
                q: "Classify welding defects. Explain any five defects with their causes and remedies, and describe the PPE and ventilation required for safe arc welding.",
                marks: 7,
                outline: [
                  "List defects: porosity, slag, undercut, incomplete pen/fusion, hot/cold cracks, distortion.",
                  "Porosity: wet electrode, dirty surface -> dry at 350 deg C, clean, short arc.",
                  "Slag inclusion: poor cleaning -> chip and grind between passes.",
                  "Undercut: high current, wrong angle -> lower 10 percent, 70-80 deg.",
                  "Hot cracks: impurities -> low-hydrogen E7018; cold cracks: pre-heat 100-200 deg C.",
                  "Distortion: uneven heat -> back-step, symmetric sequence, jigs.",
                  "PPE: DIN 9-13 helmet, leather gloves, apron, steel-toe shoes; fume extraction 0.5 m/s.",
                ],
              },
              {
                q: "What is arc-eye and how is it prevented?",
                marks: 2,
              },
              {
                q: "State the causes and remedies of porosity and undercut in arc welding.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT III - MACHINING AND MACHINE TOOLS
    // =================================================================
    {
      number: 3,
      roman: "III",
      title: "Machining and Machine Tools",
      summary:
        "Unit III covers the mechanics and machines of chip removal: chip formation and types, orthogonal and oblique cutting, cutting-tool materials from HSS to ceramic, the cutting speed-feed-depth trio with MRR and Taylor tool life, the lathe and its operations, drilling machine and operations, milling (up vs down) and grinding basics, cutting fluids, tolerance and surface finish.",
      chapter: {
        number: "03",
        title: "Machining and Machine Tools",
        intro:
          "Unit III studies machining - the removal of material as chips to achieve close tolerance and good surface finish. Topics are chip formation and the three chip types, orthogonal and oblique cutting, cutting-tool materials (HSS, carbide, ceramic, CBN, diamond), the cutting parameters (speed, feed, depth of cut) and MRR and Taylor tool life, the lathe and its operations including taper turning and thread cutting, the drilling machine and operations, milling (up vs down) and cutters, grinding wheel specification, cutting fluids and their functions, and an introduction to tolerance grades and surface finish.",
        inOneBreath:
          "Machining removes chips via a wedge-shaped cutting tool with rake and clearance angles; three zones are shear zone, tool-chip contact and flank face. Chips are continuous (ductile, high speed), discontinuous (brittle, high feed) or continuous with built-up edge (low speed, no coolant). Orthogonal cutting has edge perpendicular to feed (2D); oblique has edge at an angle (3D, common). Tool materials: HSS (18W-4Cr-1V, red hardness 600 deg C, 30-50 m/min), carbide (WC+Co, 100-300 m/min), ceramic (Al2O3, 200-600 m/min), CBN (500-1500 m/min), diamond (non-ferrous). Cutting speed V = pi D N / 1000; MRR (turning) = V f d; Taylor tool life V T^n = C with n=0.1 HSS, 0.25 carbide. Lathe parts: bed, headstock (100-2000 rpm), tailstock, carriage; operations: turning, facing, threading, drilling, knurling, taper turning. Drilling: twist drill 118 deg point, 30 deg helix, 8-12 deg lip clearance. Milling: up milling cutter opposes feed, down milling cutter with feed needs backlash eliminator. Grinding wheel spec A-60-K-8-V; surface finish Ra: turned 1.6-6.3 um, ground 0.4-1.6 um, lapped 0.1 um.",
        sections: [
          // --- 3.1 ---
          {
            number: "3.1",
            title: "Machining fundamentals and chip formation",
            body: [
              "Machining removes material from a workpiece in the form of chips using a wedge-shaped cutting tool. The tool has a rake face (over which the chip slides) and a flank face (which rubs against the machined surface). The angle between the rake face and the normal to the machined surface is the rake angle (positive, zero or negative); the angle between the flank and the machined surface is the clearance angle (5 to 10 deg). Higher rake angle lowers the cutting force but weakens the tool tip; clearance prevents rubbing which would overheat and wear the flank.",
              "Three zones of deformation occur in front of the tool. In the primary shear zone, the work material is sheared at an angle of 20 to 35 deg to the cutting direction - this is where chip formation begins. In the secondary shear zone at the tool-chip interface, friction heats and deforms the chip underside; this is where a built-up edge forms at low speeds. In the tertiary zone at the flank face, rubbing causes flank wear. The shear angle depends on the rake angle, friction and material; a higher shear angle means a thinner chip and lower cutting force, which is why positive-rake tools cut cooler.",
              "Three chip types are observed in practice. Continuous chips form when machining ductile materials (mild steel, copper, aluminum) at high cutting speed with a sharp, positive-rake tool and low feed; they give a good surface finish but a long ribbon that must be broken with a chip breaker. Discontinuous chips form when machining brittle materials (cast iron, brass) or at high feed and low speed with a low or negative rake; they give a poorer finish but are easier to handle. Continuous chips with a built-up edge (BUE) form at low cutting speeds in ductile materials without coolant; the BUE protects the tool but breaks off periodically, leaving a rough surface that must be cured by raising the speed or applying coolant.",
              "The built-up edge is a small lump of work material welded to the tool tip by pressure and friction. It grows until it becomes unstable, then fragments - some leaving with the chip, some embedding in the machined surface and degrading finish. BUE is suppressed by raising the cutting speed above 50 m/min, by using a cutting fluid that reduces the tool-chip contact, by polishing the rake face, or by using a tool material with low affinity for the work (carbide for steel instead of HSS). The same speed change that suppresses BUE also improves surface finish, which is why production turning is run at 150 m/min with carbide.",
              "A worked example shows how the parameters interact. Turning mild steel with a HSS tool of 10 deg positive rake at 30 m/min and feed 0.2 mm/rev in dry conditions produces a continuous chip with a visible BUE on the tool tip and a rough machined surface (Ra 6 um). Raising the speed to 80 m/min with carbide tool and coolant eliminates the BUE, the chip becomes a clean continuous ribbon, and the surface finish improves to Ra 1.6 um. The change of tool material and speed has moved the cutting regime from the BUE region to the stable continuous-chip region.",
            ],
            bullets: [
              "Machining removes chips via a wedge-shaped tool with rake and clearance angles.",
              "Three zones: primary shear, secondary (tool-chip), tertiary (flank).",
              "Shear angle 20-35 deg; higher shear angle -> thinner chip, lower force.",
              "Continuous chips: ductile metal, high speed, sharp positive rake.",
              "Discontinuous chips: brittle metal, high feed, low rake.",
              "BUE forms at low speed; cured by higher speed or coolant.",
              "Positive rake lowers force but weakens tip; clearance 5-10 deg prevents rubbing.",
            ],
            codeExample: {
              language: "text",
              caption: "Chip type predicted from material, speed, feed and rake.",
              code:
                `CHIP TYPE - conditions and cure
CONTINUOUS (good finish)
  Ductile metals: Cu, Al, mild steel
  Speed     : >50 m/min
  Tool      : sharp, positive rake +10 deg
  Feed      : low (0.05-0.2 mm/rev)
  Coolant   : yes

DISCONTINUOUS (poor finish)
  Brittle metals: cast iron, brass
  Speed     : low
  Rake      : negative or zero
  Feed      : high (>0.4 mm/rev)

BUE (rough finish, cures)
  Low speed <30 m/min, ductile metal
  No coolant
  Cure: raise speed >50 m/min, add coolant
        switch to carbide tool`,
            },
            diagram: {
              kind: "layers",
              title: "Three zones of cutting deformation stacked at the tool tip",
              caption:
                "Each layer is a distinct deformation zone you must label in a sketch of orthogonal cutting.",
              layers: [
                { label: "Tool rake face and chip", note: "secondary shear zone, friction" },
                { label: "Primary shear zone", note: "20-35 deg, chip forms here" },
                { label: "Work surface (machined)", note: "Ra set by tool nose radius" },
                { label: "Tool flank face", note: "tertiary zone, rubbing and wear" },
                { label: "Parent material", note: "un-deformed work" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch orthogonal cutting with the zones",
              body: "A 7-mark chip formation question wants a labelled sketch: tool, rake face, flank, work, shear plane (angle phi), chip flowing up the rake. Then write the three chip types and the BUE cure. The sketch earns three marks, the chip-type list two, the BUE discussion two.",
            },
            keyTerms: [
              { term: "Shear angle", definition: "The angle (20-35 deg) between the shear plane and the cutting direction; higher angle means thinner chip and lower force." },
              { term: "Rake angle", definition: "The angle between the tool rake face and the normal to the machined surface; positive rake lowers cutting force." },
              { term: "Built-up edge (BUE)", definition: "A lump of work material welded to the tool tip at low speed; breaks off and degrades finish, cured by higher speed or coolant." },
              { term: "Continuous chip", definition: "A long ribbon chip from ductile metals at high speed with positive rake; gives good surface finish." },
              { term: "Clearance angle", definition: "The 5-10 deg angle between the tool flank and the machined surface that prevents rubbing and overheating." },
            ],
            examQuestions: [
              {
                q: "Explain the mechanics of chip formation in metal cutting with a labelled sketch. Describe the three types of chips with conditions for each, and explain how the built-up edge forms and is suppressed.",
                marks: 7,
                outline: [
                  "Define machining as chip removal by a wedge-shaped tool with rake and clearance angles.",
                  "Sketch orthogonal cutting: tool, rake face, flank, work, shear plane (phi), chip.",
                  "Three zones: primary shear (chip formation), secondary (tool-chip friction), tertiary (flank wear).",
                  "Continuous chips: ductile metal, high speed, positive rake.",
                  "Discontinuous chips: brittle metal, high feed, low rake.",
                  "BUE forms at low speed; cured by raising speed above 50 m/min or using coolant.",
                  "Worked example: HSS at 30 m/min -> BUE; carbide at 80 m/min with coolant -> clean chip.",
                ],
              },
              {
                q: "What is a built-up edge and how is it prevented?",
                marks: 2,
              },
              {
                q: "State the conditions that produce discontinuous chips.",
                marks: 3,
              },
            ],
          },
          // --- 3.2 ---
          {
            number: "3.2",
            title: "Cutting tool materials and orthogonal vs oblique cutting",
            body: [
              "A cutting tool material must be harder than the work, must keep its hardness at the high temperatures reached at the cutting edge (red hardness), must resist wear and abrasion, and must be tough enough not to chip under impact. These requirements conflict - the hardest materials are the most brittle - so tool materials are chosen to match the work material and the cutting regime. The progression from carbon tool steel through HSS, carbide, ceramic, CBN and diamond trades toughness for hardness and heat resistance, allowing higher cutting speeds.",
              "High-speed steel (HSS) is the workhorse for general-purpose machining. The 18-4-1 grade contains 18 percent tungsten, 4 percent chromium and 1 percent vanadium, with about 0.7 percent carbon; it keeps its hardness up to 600 deg C (red hardness) and turns mild steel at 30 to 50 m/min. M-grade HSS (molybdenum, 8 percent Mo) is tougher and used for intermittent cuts. HSS is cheap, tough, can be ground to sharp positive-rake edges, and is the standard for drills, taps, reamers, milling cutters and lathe tools in job-shop work. Cutting speed in MS: 30 to 50 m/min.",
              "Cemented carbide is the production-grade tool material. Tungsten carbide (WC) particles of 1 to 5 um are sintered with a cobalt binder (5 to 12 percent) to give a hardness of 1500 to 1800 HV (well above HSS at 850 HV). Straight WC grades (K-grade, ISO blue) suit cast iron and non-ferrous; TiC-alloyed grades (P-grade, ISO yellow) suit steel. Coated carbides - titanium nitride (TiN, gold), titanium carbonitride (TiCN), or aluminum oxide (Al2O3) - last 2 to 5 times longer than uncoated by reducing diffusion wear. Carbide cuts MS at 100 to 300 m/min and is the standard for CNC turning and milling.",
              "Ceramic tools are aluminum oxide (Al2O3) or silicon nitride (Si3N4) sintered at high temperature; they cut at 200 to 600 m/min in hardened steel and cast iron. They are brittle and need a negative rake (-5 to -7 deg) and a rigid setup; a chatter shatters them instantly. Cubic boron nitride (CBN, hardness 4000 HV) cuts hardened steel (50 to 65 HRC) at 500 to 1500 m/min, replacing grinding in hard turning. Polycrystalline diamond (PCD, hardness 6000 HV) cuts non-ferrous metals, plastics and composites at 500 to 1500 m/min but cannot be used on ferrous work because diamond dissolves in iron at high temperature.",
              "Orthogonal cutting simplifies the geometry to two dimensions: the cutting edge is perpendicular to the cutting direction and the chip flows along the normal to the edge. It is used in theory, in broaching, and in parting-off. Oblique cutting, used in almost all real machining, has the cutting edge inclined at an angle (5 to 15 deg) to the cutting direction; the chip flows at an angle to the normal. Oblique cutting spreads the entry of the edge into the work, reduces impact, gives a better surface and is the geometry of every lathe, milling and drilling tool used in production.",
            ],
            bullets: [
              "Tool requirements: hardness, red hardness, wear resistance, toughness.",
              "HSS 18-4-1: red hardness to 600 deg C, MS cutting speed 30-50 m/min.",
              "Carbide WC + Co: 1500-1800 HV, cutting speed 100-300 m/min in MS.",
              "Coated carbide (TiN, TiCN, Al2O3) lasts 2-5x longer than uncoated.",
              "Ceramic Al2O3: 200-600 m/min, brittle, needs negative rake.",
              "CBN: 4000 HV for hardened steel 50-65 HRC, 500-1500 m/min.",
              "Orthogonal: edge perpendicular to feed (2D); oblique: edge inclined (3D, common).",
            ],
            table: {
              caption: "Cutting tool materials and their cutting speeds in mild steel.",
              headers: ["Material", "Composition", "Hardness (HV)", "Cutting speed (m/min)"],
              rows: [
                ["Carbon tool steel", "C 0.9-1.3 percent", "200", "10 (obsolete)"],
                ["HSS", "18W-4Cr-1V", "850", "30-50"],
                ["Carbide", "WC + Co (5-12 percent)", "1500-1800", "100-300"],
                ["Ceramic", "Al2O3 or Si3N4", "2000", "200-600"],
                ["CBN", "Cubic boron nitride", "4000", "500-1500 (hardened steel)"],
                ["PCD diamond", "Polycrystalline diamond", "6000", "500-1500 (non-ferrous only)"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Tool materials stacked by hardness and cutting speed",
              caption:
                "Apex is hardest and fastest but most brittle and expensive; base is toughest and slowest.",
              tiers: [
                { label: "Diamond (PCD)", note: "6000 HV, non-ferrous only" },
                { label: "CBN", note: "4000 HV, hardened steel" },
                { label: "Ceramic", note: "2000 HV, brittle, negative rake" },
                { label: "Carbide (coated)", note: "1500-1800 HV, production" },
                { label: "HSS", note: "850 HV, general purpose" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the speed ladder",
              body: "Cutting speeds in mild steel form a clean ladder you must write from memory: HSS 40, carbide 200, ceramic 500, CBN 1000 m/min. Each step multiplies speed by about 2.5; the trade-off is brittleness and cost. Stating these four numbers in an answer is worth two marks.",
            },
            keyTerms: [
              { term: "HSS", definition: "High-speed steel (18W-4Cr-1V); retains hardness to 600 deg C; cuts MS at 30-50 m/min." },
              { term: "Cemented carbide", definition: "Tungsten carbide particles sintered with cobalt binder; 1500-1800 HV; cuts at 100-300 m/min." },
              { term: "Ceramic tool", definition: "Aluminum oxide or silicon nitride tool cutting at 200-600 m/min; brittle, needs negative rake." },
              { term: "Red hardness", definition: "The ability of a tool material to retain hardness at the elevated temperature of the cutting edge." },
              { term: "Orthogonal cutting", definition: "Cutting in which the edge is perpendicular to the feed direction; chip flows normal to the edge; 2D analysis." },
            ],
            examQuestions: [
              {
                q: "State the requirements of a cutting tool material. Compare HSS, carbide, ceramic and CBN with composition, hardness and cutting speed, and distinguish orthogonal from oblique cutting.",
                marks: 7,
                outline: [
                  "Requirements: hardness, red hardness, wear resistance, toughness.",
                  "HSS 18-4-1: 850 HV, 30-50 m/min, red hardness to 600 deg C.",
                  "Carbide WC+Co: 1500-1800 HV, 100-300 m/min, coated lasts 2-5x.",
                  "Ceramic Al2O3: 2000 HV, 200-600 m/min, brittle, negative rake.",
                  "CBN: 4000 HV, 500-1500 m/min for hardened steel 50-65 HRC.",
                  "Orthogonal: edge perpendicular to feed, 2D; oblique: edge inclined, 3D.",
                  "Speed ladder: HSS 40 -> carbide 200 -> ceramic 500 -> CBN 1000 m/min.",
                ],
              },
              {
                q: "State the composition and cutting speed of HSS 18-4-1 in mild steel.",
                marks: 2,
              },
              {
                q: "Distinguish between orthogonal and oblique cutting with one example each.",
                marks: 3,
              },
            ],
          },
          // --- 3.3 ---
          {
            number: "3.3",
            title: "Cutting speed, feed, depth of cut, MRR and Taylor tool life",
            body: [
              "Three parameters define every machining operation: cutting speed V (the relative velocity between tool and work, in m/min), feed f (the distance the tool advances per revolution or per tooth, in mm/rev or mm/tooth), and depth of cut d (the thickness of material removed in one pass, in mm). Together they set the material removal rate (MRR), the surface finish, the tool life and the power required. They are chosen from recommended tables and adjusted for the machine's rigidity and the work's tolerance.",
              "For turning, the cutting speed relates to the spindle rpm by V = pi D N / 1000, where D is the workpiece diameter in mm and N is the rpm. A 50 mm bar turned at V = 100 m/min runs at N = 1000 V / (pi D) = 1000 x 100 / (pi x 50) = 636 rpm. The MRR in turning is V x f x d (in mm^3/min if V is converted to mm/min, equivalently 1000 V f d in mm^3/min with V in m/min). For V = 100, f = 0.2 mm/rev, d = 2 mm: MRR = 1000 x 100 x 0.2 x 2 = 40000 mm^3/min = 40 cm^3/min, a typical roughing rate.",
              "Machining time for one pass is T = L / (f x N), where L is the workpiece length in mm. For L = 200 mm, f = 0.2 mm/rev and N = 636 rpm, T = 200 / (0.2 x 636) = 1.57 min. The number of passes is found by dividing total depth by depth per pass: a 6 mm depth reduction at d = 2 mm/pass needs 3 passes, total time about 4.7 min plus idle time for tool retraction and re-positioning. Power required is P = MRR x u, where u is the specific cutting energy in W s/mm^3 (about 2 for mild steel, 3.5 for stainless, 1 for aluminum); for our example P = 40000 x 2 = 80 W per minute... actually P = MRR x u with units giving P = 40000 mm^3/min x 2 W s/mm^3 / 60 = 1333 W = 1.3 kW.",
              "Tool life is governed by Taylor's equation V T^n = C, where V is cutting speed, T is tool life in minutes, n is the Taylor exponent and C is a constant for the tool-work pair. For HSS in mild steel n = 0.10 to 0.15; for carbide n = 0.20 to 0.30; for ceramic n = 0.40 to 0.60. The exponent n is small, so doubling the cutting speed reduces tool life by a large factor: for carbide n = 0.25, doubling V reduces T by 2^(1/0.25) = 16 times. Tool life is the time between grinds (for indexable carbide, the time to a flank wear of 0.3 mm or 0.6 mm).",
              "A worked example ties the equations together. Turning a 50 mm dia MS shaft, length 200 mm, with a carbide tool: V = 200 m/min, f = 0.2 mm/rev, d = 2 mm. Spindle rpm N = 1000 x 200 / (pi x 50) = 1273 rpm. MRR = 1000 x 200 x 0.2 x 2 = 80000 mm^3/min. Machining time T = 200 / (0.2 x 1273) = 0.79 min = 47 s per pass. Tool life at this V from V T^n = C with C = 300 and n = 0.25 gives T = (C/V)^(1/n) = (300/200)^4 = 5.06 min - the tool lasts about 6 passes. The trade-off: doubling V to 400 m/min cuts tool life to (300/400)^4 = 0.32 min, so production runs at the speed that minimises cost per part.",
            ],
            bullets: [
              "Cutting speed V (m/min); feed f (mm/rev); depth of cut d (mm).",
              "Spindle rpm N = 1000 V / (pi D) where D is diameter in mm.",
              "MRR (turning) = 1000 V f d in mm^3/min.",
              "Machining time per pass T = L / (f N).",
              "Power P = MRR x u; u = 2 W s/mm^3 for MS, 3.5 for SS, 1 for Al.",
              "Taylor tool life: V T^n = C; HSS n=0.1, carbide n=0.25, ceramic n=0.5.",
              "Doubling V cuts tool life by 2^(1/n); for carbide, life drops 16x.",
            ],
            codeExample: {
              language: "text",
              caption: "Worked calculation: turning a 50 mm MS shaft with carbide.",
              code:
                `TURNING - mild steel, carbide tool
Given:
  Diameter D  = 50 mm
  Length   L  = 200 mm
  Speed    V  = 200 m/min
  Feed     f  = 0.20 mm/rev
  Depth    d  = 2.0 mm

Compute:
  Spindle rpm N = 1000*V/(pi*D)
              = 1000*200/(pi*50) = 1273 rpm

  MRR = 1000*V*f*d
      = 1000*200*0.20*2 = 80000 mm^3/min

  Time/pass T = L/(f*N)
             = 200/(0.20*1273) = 0.79 min = 47 s

  Power P = MRR*u/60  (u = 2 W s/mm^3 for MS)
         = 80000*2/60 = 2667 W = 2.7 kW

  Taylor tool life: V*T^n = C
    n = 0.25, C = 300
    T = (C/V)^(1/n) = (300/200)^4 = 5.06 min`,
            },
            diagram: {
              kind: "flow",
              title: "Cutting calculation chain from speed to tool life",
              caption:
                "Memorise this five-step chain - a numerical question almost always walks through it.",
              steps: [
                { label: "V = 200 m/min, D = 50 mm", note: "given" },
                { label: "N = 1000V/(pi D) = 1273 rpm", note: "spindle speed" },
                { label: "MRR = 1000 V f d = 80000 mm^3/min", note: "material removal" },
                { label: "T_pass = L/(f N) = 0.79 min", note: "machining time" },
                { label: "T_life = (C/V)^(1/n) = 5 min", note: "Taylor tool life" },
              ],
            },
            callout: {
              type: "exam",
              title: "Numerical questions are full-mark opportunities",
              body: "RGPV numerical questions on machining carry 7 marks and reward formula-first answers. Always write V = pi D N / 1000, MRR = 1000 V f d and T = L / (f N) at the top, then substitute the numbers step by step. Even if you slip in arithmetic, the correct formulas and method fetch 5 of 7 marks.",
            },
            keyTerms: [
              { term: "Cutting speed", definition: "The relative velocity between tool and work in m/min; for turning V = pi D N / 1000." },
              { term: "Feed", definition: "The distance the tool advances per revolution (mm/rev) or per tooth (mm/tooth)." },
              { term: "Depth of cut", definition: "The thickness of material removed in one pass (mm); 2-5 mm for roughing, 0.1-0.5 mm for finishing." },
              { term: "Material removal rate (MRR)", definition: "Volume of material removed per minute; for turning MRR = 1000 V f d in mm^3/min." },
              { term: "Taylor tool life", definition: "Empirical relation V T^n = C between cutting speed and tool life; n is 0.1 for HSS, 0.25 for carbide." },
            ],
            examQuestions: [
              {
                q: "Define cutting speed, feed and depth of cut. Derive the expressions for spindle rpm, material removal rate and machining time in turning, and state Taylor's tool life equation with a worked numerical example.",
                marks: 7,
                outline: [
                  "Define V (m/min), f (mm/rev), d (mm); choose from recommended tables.",
                  "Spindle rpm N = 1000 V / (pi D).",
                  "MRR (turning) = 1000 V f d in mm^3/min.",
                  "Machining time per pass T = L / (f N).",
                  "Power P = MRR x u; u = 2 W s/mm^3 for MS.",
                  "Taylor tool life V T^n = C; n = 0.1 HSS, 0.25 carbide, 0.5 ceramic.",
                  "Worked example: D=50 mm, V=200, f=0.2, d=2 -> N=1273 rpm, MRR=80000, T=0.79 min, life 5 min.",
                ],
              },
              {
                q: "State Taylor's tool life equation and the typical value of n for HSS and carbide.",
                marks: 2,
              },
              {
                q: "Calculate the MRR and machining time for turning a 50 mm dia, 200 mm long MS shaft at 100 m/min, 0.2 mm/rev feed and 2 mm depth of cut.",
                marks: 3,
              },
            ],
          },
          // --- 3.4 ---
          {
            number: "3.4",
            title: "Lathe and lathe operations",
            body: [
              "The engine lathe is the oldest and most versatile machine tool. Its parts are a cast iron bed that supports the work; a headstock carrying the spindle (100 to 2000 rpm) driven by an electric motor through a gear box; a tailstock that slides along the bed and holds a centre or a drill; a carriage that rides on the bed and carries the tool post, cross-slide and compound rest; and a lead screw and feed rod that drive the carriage for turning and threading. The work is held in a three-jaw self-centring chuck (for round parts), a four-jaw independent chuck (for irregular parts), between centres (for long shafts), or on a face plate.",
              "Turning reduces the diameter of a rotating workpiece by feeding a single-point tool along the bed axis. A 50 mm bar reduced to 48 mm at 100 m/min, 0.2 mm/rev and 2 mm depth of cut takes about 0.79 min per pass for a 200 mm length. Facing reduces the length by feeding the tool across the end at the cross-slide; the cutting speed drops to zero at the centre, so the spindle is set at a higher rpm. Boring enlarges an existing hole with a single-point tool mounted on a boring bar; it reaches IT7 tolerance of ±0.02 mm. Parting-off cuts the finished part from the bar stock with a narrow blade.",
              "Taper turning produces a conical surface by three methods. The compound rest method rotates the tool slide to the taper half-angle and feeds by hand; short tapers up to about 50 mm length suit this. The tailstock offset method shifts the tailstock centre off the headstock axis by an amount equal to (L x taper-per-metre) / 2; long slight tapers suit this. The taper attachment method links the cross-slide to a guide bar set at the taper angle and produces any length of taper. A D-bush with a Morse taper (3 degrees for MT3) is turned with the compound rest set to 1.5 degrees.",
              "Thread cutting engages the lead screw and a half-nut on the carriage. The work rotates and the tool advances exactly one pitch per revolution. The gear train between spindle and lead screw sets the ratio: i = work pitch / lead-screw pitch. For an M10 x 1.5 thread cut on a lathe with a 6 mm lead screw, i = 1.5 / 6 = 0.25, achieved with a 20-tooth driver and 80-tooth driven gear. The thread is cut in multiple passes - the first at 0.3 mm depth, subsequent at 0.1 mm, finishing at 0.05 mm - to dissipate heat and improve finish. A thread dial indicates when to re-engage the half-nut so each pass starts at the same point on the work.",
              "Other lathe operations include knurling (pressing a knurl wheel into the work to produce a diamond pattern grip), drilling (the work rotates in the chuck while the drill is held in the tailstock), reaming (a reamer in the tailstock finishes a drilled hole to IT7 tolerance), tapping (a tap in the tailstock cuts internal threads), and spinning (a sheet is rotated and formed over a wooden mandrel). A worked thread-cutting example: M10 x 1.5 on a 6 mm leadscrew, gear ratio 0.25 (driver 20, driven 80), spindle 100 rpm, five passes of decreasing depth, total cycle 2.5 min - the same procedure suits any metric thread.",
            ],
            bullets: [
              "Lathe parts: bed, headstock (100-2000 rpm), tailstock, carriage, lead screw.",
              "Work holding: 3-jaw self-centring chuck, 4-jaw independent, between centres, face plate.",
              "Turning reduces dia; facing reduces length; boring enlarges holes.",
              "Taper turning: compound rest (short), tailstock offset (long), taper attachment (any).",
              "Thread cutting: gear ratio i = work pitch / leadscrew pitch.",
              "M10 x 1.5 on 6 mm leadscrew -> i = 0.25 (20/80 gears).",
              "Knurling for grip; drilling and reaming in the tailstock.",
            ],
            codeExample: {
              language: "text",
              caption: "Thread-cutting setup and pass sequence for M10 x 1.5.",
              code:
                `THREAD CUTTING - M10 x 1.5 metric
Work pitch   P_w = 1.5 mm
Leadscrew    P_l = 6.0 mm
Gear ratio   i   = P_w / P_l = 1.5 / 6 = 0.25
Change gears : driver 20, driven 80 (or 30/120)

SETUP
  1. Spindle rpm low (60-100) for threading
  2. Tool ground to 60 deg included angle
  3. Set gear train to ratio 0.25
  4. Engage thread chasing dial

PASSES (decreasing depth)
  Pass 1 : 0.30 mm depth (rough)
  Pass 2 : 0.20 mm depth
  Pass 3 : 0.15 mm depth
  Pass 4 : 0.10 mm depth
  Pass 5 : 0.05 mm depth (finish)
Verify pitch with thread gauge after pass 5`,
            },
            diagram: {
              kind: "layers",
              title: "Lathe anatomy from headstock to tailstock",
              caption:
                "Index 0 is the headstock end of the bed; each layer is a major sub-assembly.",
              layers: [
                { label: "Headstock and spindle", note: "100-2000 rpm, 3-jaw chuck" },
                { label: "Carriage and tool post", note: "carries single-point tool" },
                { label: "Cross-slide and compound rest", note: "for taper and facing" },
                { label: "Lead screw and feed rod", note: "drive carriage for threading" },
                { label: "Tailstock", note: "centre, drill, reamer, tap" },
              ],
            },
            callout: {
              type: "tip",
              title: "The gear ratio formula is a 2-mark gift",
              body: "RGPV often asks 'how is the gear train set for an M x P thread on a leadscrew of pitch Pl?' The answer is one line: gear ratio i = P / Pl. Worked for M10 x 1.5 on a 6 mm leadscrew, i = 0.25, implemented as 20/80 or 30/120 change gears. Memorise this formula.",
            },
            keyTerms: [
              { term: "Headstock", definition: "Lathe sub-assembly carrying the spindle, chuck and drive gears; provides 100-2000 rpm." },
              { term: "Tailstock", definition: "Sliding lathe assembly that holds a centre, drill, reamer or tap; offsets for taper turning." },
              { term: "Carriage", definition: "The lathe assembly that rides the bed and carries the tool post, cross-slide and compound rest." },
              { term: "Lead screw", definition: "The precision threaded shaft that drives the carriage for thread cutting at a fixed pitch." },
              { term: "Half-nut", definition: "A split nut on the carriage that engages the lead screw for thread cutting; re-engaged using the thread dial." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of an engine lathe with a sketch. Explain turning, facing, taper turning and thread cutting, and derive the gear train ratio for cutting an M10 x 1.5 thread on a 6 mm leadscrew.",
                marks: 7,
                outline: [
                  "Parts: bed, headstock (100-2000 rpm), tailstock, carriage, lead screw.",
                  "Sketch: headstock-chuck on left, carriage in middle, tailstock on right.",
                  "Turning reduces dia; facing reduces length; boring enlarges holes.",
                  "Taper turning: compound rest, tailstock offset, taper attachment.",
                  "Thread cutting: lead screw and half-nut engaged; gear ratio i = P_w / P_l.",
                  "For M10 x 1.5 on 6 mm leadscrew: i = 1.5/6 = 0.25 -> 20/80 gears.",
                  "Pass sequence: 0.3, 0.2, 0.15, 0.1, 0.05 mm depths.",
                ],
              },
              {
                q: "Name any four operations performed on a lathe.",
                marks: 2,
              },
              {
                q: "Calculate the gear train ratio for cutting an M12 x 1.75 thread on a lathe with a 6 mm leadscrew.",
                marks: 3,
              },
            ],
          },
          // --- 3.5 ---
          {
            number: "3.5",
            title: "Drilling machine and milling",
            body: [
              "Drilling produces or enlarges holes with a rotary cutting tool called a twist drill. The twist drill has two helical flutes that carry chips out and admit cutting fluid, a point ground at 118 degrees included angle for general work (90 degrees for plastics, 135 degrees for hard steel), a helix angle of 30 degrees for general work, and a web thickness that tapers from tip to shank. The two cutting lips do the cutting; the chisel edge at the centre pushes material aside at high pressure and is the main source of thrust. Lip clearance of 8 to 12 degrees behind each lip is essential - without it the drill rubs and overheats.",
              "Drilling machine operations include drilling a new hole, reaming (a reamer removes 0.1 to 0.4 mm on diameter to reach IT7 tolerance and Ra 0.8 um), tapping (a tap cuts internal threads in a previously drilled pilot hole), boring (a single-point tool on a boring bar enlarges the hole concentric with the original), counterboring (a flat-bottom recess for a bolt head), spot facing (a flat seat for a bolt or nut), countersinking (a conical seat for a flat-head screw at 60 to 90 degrees), and core drilling (enlarging a cast hole). The work is clamped to the table; the drill rotates and is fed by hand (sensitive drill) or by power (radial drill).",
              "Drilling parameters follow the same formulas as turning. Cutting speed V = pi D N / 1000 where D is the drill diameter; for a 10 mm HSS drill in mild steel V = 25 to 30 m/min, so N = 1000 x 30 / (pi x 10) = 955 rpm. Feed is 0.1 to 0.3 mm/rev. Penetration rate = f x N = 0.15 x 955 = 143 mm/min. Time for a 25 mm deep hole is 25 / 143 = 0.18 min = 11 s. The pilot hole for an M10 thread is drilled at 8.5 mm (the tap drill size for M10 x 1.5 is D = 10 - 1.5 x 0.85 x 0.9 approximately, tabulated as 8.5 mm). Torque and thrust are about twice the value for turning at the same MRR.",
              "Milling removes material with a rotating multi-tooth cutter. The two modes are up milling (conventional) in which the cutter rotates against the feed direction - the tooth starts at zero chip thickness and rises to maximum, lifting the work; safer for old machines with backlash. Down milling (climb) has the cutter rotating with the feed - the tooth starts at maximum chip thickness and falls to zero, pushing the work down; gives a better finish and longer tool life but needs a backlash eliminator on the feed screw. Face milling cuts flat surfaces with inserts on the cutter face; end milling cuts slots, pockets and contours with a smaller cutter; slab milling cuts broad surfaces with a cylindrical cutter.",
              "Milling cutters include the face mill (50 to 200 mm dia, 5 to 10 carbide inserts) for flat surfaces, end mill (6 to 25 mm dia, 2 to 4 flutes) for slots and pockets, slab mill (cylinder of helical teeth) for broad flat surfaces, side-and-face mill for slotting, angle mill for chamfers, and form mill for profiles. Cutting speed for carbide in MS is 100 to 200 m/min, feed per tooth 0.05 to 0.2 mm. A 100 mm face mill with 8 inserts at 150 m/min, 0.1 mm/tooth feed and 200 rpm table feed removes metal at 80000 mm^3/min - a rate comparable to rough turning.",
            ],
            bullets: [
              "Twist drill: 118 deg point, 30 deg helix, 8-12 deg lip clearance.",
              "Drill operations: drill, ream, tap, bore, counterbore, spot face, countersink.",
              "Drilling V (HSS in MS): 25-30 m/min; feed 0.1-0.3 mm/rev.",
              "Reaming removes 0.1-0.4 mm; reaches IT7 ±0.01 mm at Ra 0.8 um.",
              "M10 x 1.5 tap drill size: 8.5 mm pilot hole.",
              "Up milling: cutter against feed (safer); down milling: with feed (better finish, needs backlash eliminator).",
              "Carbide milling in MS: 100-200 m/min, feed 0.05-0.2 mm/tooth.",
            ],
            codeExample: {
              language: "text",
              caption: "Drilling and reaming a 10 H7 hole in mild steel.",
              code:
                `DRILLING + REAMING - 10 H7 hole
Drill dia D = 10 mm, HSS drill
Cutting speed V = 30 m/min (HSS in MS)
Spindle rpm N = 1000*V/(pi*D)
             = 1000*30/(pi*10) = 955 rpm
Feed f      = 0.15 mm/rev
Penetration = f*N = 0.15*955 = 143 mm/min
Hole depth  = 25 mm
Drill time  = 25/143 = 0.18 min = 11 s

REAMING SEQUENCE
  1. Drill 9.5 mm pilot hole
  2. Deburr edges, clean chips
  3. Ream to 10 H7 (+0.015/0 mm)
  4. Reamer dia = 10.000 mm
  5. Reamer rpm = 200 (slow)
  6. Feed = 0.30 mm/rev, with cutting oil
  7. Result: tolerance ±0.01 mm, Ra 0.8 um`,
            },
            diagram: {
              kind: "compare",
              title: "Up milling vs down milling",
              caption:
                "Cutter rotation direction relative to feed decides finish, force direction and backlash needs.",
              left: {
                heading: "Up milling (conventional)",
                items: [
                  "Cutter rotates against feed",
                  "Chip starts at zero, ends thick",
                  "Lifts the work (needs strong clamp)",
                  "Tool life shorter (rubbing)",
                  "Safe on machines with backlash",
                ],
              },
              right: {
                heading: "Down milling (climb)",
                items: [
                  "Cutter rotates with feed",
                  "Chip starts thick, ends zero",
                  "Pushes work down (better)",
                  "Better finish, longer tool life",
                  "Needs backlash eliminator",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Tap drill size is a 2-mark question",
              body: "The tap drill size for an M-thread is approximately D - pitch (so M10 x 1.5 -> 8.5 mm). Memorise the standard sizes: M6 x 1 -> 5.0 mm, M8 x 1.25 -> 6.8 mm, M10 x 1.5 -> 8.5 mm, M12 x 1.75 -> 10.2 mm. A wrong tap drill size strips the tap - and loses the mark.",
            },
            keyTerms: [
              { term: "Twist drill", definition: "A rotary cutting tool with two helical flutes and a 118 deg point for producing holes." },
              { term: "Point angle", definition: "The included angle at the drill tip; 118 deg general, 135 deg for hard steel, 90 deg for plastics." },
              { term: "Up milling", definition: "Milling mode in which the cutter rotates against the feed direction; chip starts at zero thickness." },
              { term: "Down milling", definition: "Milling mode in which the cutter rotates with the feed; better finish, needs a backlash eliminator." },
              { term: "Face mill", definition: "A milling cutter with carbide inserts on the face, used to produce flat surfaces." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a twist drill with a sketch and list the operations performed on a drilling machine. Distinguish between up milling and down milling, and list four types of milling cutters.",
                marks: 7,
                outline: [
                  "Sketch twist drill: flutes, point, lip, chisel edge, helix, shank.",
                  "Point 118 deg, helix 30 deg, lip clearance 8-12 deg.",
                  "Operations: drill, ream, tap, bore, counterbore, spot face, countersink.",
                  "Drilling parameters: V 25-30 m/min HSS in MS, feed 0.1-0.3 mm/rev.",
                  "Up milling: cutter against feed, chip starts at zero, safer.",
                  "Down milling: cutter with feed, better finish, needs backlash eliminator.",
                  "Cutters: face, end, slab, side-and-face, angle, form.",
                ],
              },
              {
                q: "What is the point angle of a twist drill for general work?",
                marks: 2,
              },
              {
                q: "Calculate the spindle rpm for a 10 mm HSS drill in mild steel at a cutting speed of 30 m/min.",
                marks: 3,
              },
            ],
          },
          // --- 3.6 ---
          {
            number: "3.6",
            title: "Grinding, cutting fluids, tolerance and surface finish",
            body: [
              "Grinding removes material with abrasive grits of aluminum oxide (Al2O3) or silicon carbide (SiC) bonded into a wheel. Each grit is a tiny cutting tool that removes a micro-chip at high speed. The wheel surface speed is 1500 to 3000 m/min (25 to 50 m/s) - far higher than turning - and the depth of cut is 0.005 to 0.05 mm per pass. Grinding produces tight tolerances (IT5, ±0.005 mm) and fine surface finish (Ra 0.4 to 1.6 um) on hardened steel that cannot be turned. Operations include surface grinding (flat surfaces), cylindrical grinding (round parts), internal grinding (holes) and centreless grinding (production pins).",
              "A grinding wheel is specified by a five-symbol code: abrasive, grit size, grade, structure and bond. The standard mark A60K8V decodes as: A = aluminum oxide abrasive; 60 = grit size (medium, ~250 um particles); K = grade (medium hard, on a scale A to Z); 8 = structure (open, on a scale 0 to 15); V = vitrified (glassy) bond. The choice depends on the work: Al2O3 for steel, SiC for cast iron and non-ferrous; fine grit (100 to 180) for finish, coarse grit (36 to 60) for roughing; hard grade (L to P) for soft work, soft grade (E to I) for hard work (so the wheel 'self-sharpen' by shedding dull grits).",
              "Cutting fluids serve four functions: they cool the tool and work (carrying away heat that would soften the tool or warp the work); they lubricate the tool-chip interface (reducing friction and BUE); they wash away chips (preventing recutting); and they protect against corrosion. Types include soluble oil (a milky emulsion of 5 to 10 percent mineral oil in water, used for general turning and milling), straight cutting oil (neat mineral oil for heavy operations and threading), synthetic coolant (chemical solution, transparent, easy to filter), and paste or solid lubricants (for very heavy drawing). Flow rate is 5 to 15 L/min at 0.2 to 0.4 MPa pressure for turning; flood cooling for milling and grinding.",
              "Tolerance is the permissible variation in a dimension and is standardised by ISO IT grades. For a 50 mm dimension: IT5 is ±0.005 mm (achieved by grinding), IT7 is ±0.025 mm (cylindrical turning with carbide), IT8 is ±0.039 mm (milling), IT10 is ±0.1 mm (drilling), IT12 is ±0.25 mm (sand casting). Tighter tolerances cost more because they require more operations, more accurate machines and more inspection. The designer specifies the loosest tolerance that still allows the part to function - over-specification multiplies cost.",
              "Surface finish is measured as the arithmetic mean roughness Ra, the average of absolute deviations from the mean line over a sampling length (typically 0.8 mm). Typical Ra values are: sand casting 12 to 25 um; hot rolling 12 um; milling 1.6 to 6.3 um; turning 0.8 to 3.2 um; grinding 0.4 to 1.6 um; lapping 0.1 to 0.4 um; polishing below 0.1 um. The finish affects fatigue strength (a smoother finish raises endurance limit), corrosion resistance (rough surfaces trap corrosive agents) and appearance. A worked wheel selection: for hardened steel shaft finishing use A60K8V wheel at 1800 m/min surface speed, 0.025 mm cross-feed, 10 L/min soluble oil coolant; result Ra 0.6 um.",
            ],
            bullets: [
              "Grinding: abrasive grit Al2O3 or SiC at 1500-3000 m/min; depth 0.005-0.05 mm.",
              "Wheel spec A60K8V = Al2O3, grit 60, grade K, structure 8, vitrified bond.",
              "Grinding reaches IT5 ±0.005 mm and Ra 0.4-1.6 um.",
              "Cutting fluids: soluble oil 5-10 percent, straight oil, synthetic, paste.",
              "Coolant flow 5-15 L/min at 0.2-0.4 MPa for turning.",
              "Tolerance grades: IT5 (grinding) ±0.005, IT8 (milling) ±0.039, IT12 (cast) ±0.25 mm.",
              "Ra: turned 0.8-3.2 um, ground 0.4-1.6 um, lapped 0.1-0.4 um.",
            ],
            codeExample: {
              language: "text",
              caption: "Decoding a grinding wheel specification and parameters.",
              code:
                `GRINDING WHEEL SPEC: A 60 K 8 V
A  : abrasive = Aluminum Oxide (Al2O3)
60 : grit size = medium (~250 um)
K  : grade = medium hard
8  : structure = open (0-15 scale)
V  : bond = Vitrified (glassy)

USE: cylindrical grinding, hardened steel
Wheel speed   = 1800 m/min (30 m/s)
Work speed    = 10-20 m/min
Cross-feed    = 0.025 mm/pass
Coolant       = soluble oil 5%, 10 L/min
Surface finish = Ra 0.4-0.8 um
Tolerance     = IT5 ±0.005 mm

TOLERANCE GRADES (50 mm dia)
IT5 ±0.005 mm  grinding
IT7 ±0.025 mm  cylindrical turning
IT8 ±0.039 mm  milling
IT12 ±0.25 mm  sand casting`,
            },
            diagram: {
              kind: "layers",
              title: "Decoding a grinding wheel specification",
              caption:
                "Each layer is one symbol in the wheel mark; memorise the order A-grit-grade-structure-bond.",
              layers: [
                { label: "A - abrasive", note: "Al2O3 for steel, SiC for cast iron" },
                { label: "60 - grit size", note: "36-80 rough, 100-180 finish" },
                { label: "K - grade", note: "A-Z soft to hard" },
                { label: "8 - structure", note: "0-15 dense to open" },
                { label: "V - bond", note: "V vitrified, B resinoid, R rubber, M metal" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pair each process with its Ra and IT grade",
              body: "A surface-finish question wants a table: process -> Ra -> tolerance. Memorise four anchors - sand casting 12 um IT12, milling 3 um IT8, turning 1.6 um IT7, grinding 0.8 um IT5. Stating these in order earns 4 marks and shows you understand the manufacturing map.",
            },
            keyTerms: [
              { term: "Grinding wheel", definition: "An abrasive tool of grits (Al2O3 or SiC) bonded into a wheel for precision machining at 1500-3000 m/min." },
              { term: "Grit size", definition: "The average abrasive particle size; 36-60 for roughing, 100-180 for finishing." },
              { term: "Cutting fluid", definition: "A liquid that cools, lubricates, washes chips and protects from corrosion during machining." },
              { term: "Tolerance grade (IT)", definition: "ISO standard permissible dimensional variation; IT5 ±0.005 mm for grinding, IT12 ±0.25 mm for casting." },
              { term: "Surface roughness (Ra)", definition: "Arithmetic mean of deviations from the mean line; ground 0.4-1.6 um, turned 0.8-3.2 um." },
            ],
            examQuestions: [
              {
                q: "Decode the grinding wheel specification A60K8V. State the four functions of cutting fluids and the typical grades used. Explain IT tolerance grades and surface roughness Ra with typical values for casting, milling, turning and grinding.",
                marks: 7,
                outline: [
                  "Decode A60K8V: Al2O3 abrasive, 60 grit, K grade, 8 structure, vitrified bond.",
                  "Wheel speed 1800 m/min, depth 0.025 mm, Ra 0.4-0.8 um.",
                  "Four functions of cutting fluid: cool, lubricate, wash chips, prevent corrosion.",
                  "Types: soluble oil 5-10 percent, straight oil, synthetic; flow 5-15 L/min.",
                  "IT grades: IT5 ±0.005 (grinding), IT7 ±0.025 (turning), IT8 ±0.039 (milling), IT12 ±0.25 (cast).",
                  "Ra values: casting 12 um, milling 3 um, turning 1.6 um, grinding 0.8 um.",
                  "Note that tighter tolerance and finish cost more.",
                ],
              },
              {
                q: "State any four functions of a cutting fluid.",
                marks: 2,
              },
              {
                q: "What is surface roughness Ra? State its typical value for ground and turned surfaces.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT IV - SHEET METAL, FITTING AND SMITHY
    // =================================================================
    {
      number: 4,
      roman: "IV",
      title: "Sheet Metal, Fitting and Smithy",
      summary:
        "Unit IV moves to the bench and the forge. Sheet metal operations (shearing, bending, deep drawing, spinning) and joints; fitting workshop tools (vice, files, hacksaw, taps and dies, marking tools) and operations (marking, sawing, filing, drilling, tapping, reaming); smithy hand tools (anvil, hammer, tongs, swage, fuller) and forging operations (upsetting, drawing out, bending, punching, welding) with heat treatment of forgings.",
      chapter: {
        number: "04",
        title: "Sheet Metal, Fitting and Smithy",
        intro:
          "Unit IV covers three workshop crafts. Sheet metal work: shearing, bending, deep drawing, spinning, the joint types (lap seam, grooved seam, hem, dovetail, locked corner) and the tools (snips, stakes, mallets). Fitting workshop: the bench vice, files of every shape and cut, hacksaw, taps and dies, marking tools, and the operations of marking, sawing, filing, drilling, tapping and reaming. Smithy and forging: the anvil, hammers, tongs, swage, fuller, chisel, and the operations of upsetting, drawing out, bending, punching and forge welding, with a brief note on heat treatment of forgings.",
        inOneBreath:
          "Sheet metal parts come from sheet <5 mm thick. Shearing cuts with a punch and die; clearance 5-10 percent of thickness; blanking cuts inside, piercing cuts outside, slitting cuts straight. Bending needs min radius 0.5-1x thickness; bend allowance = (pi/180)(R + K T) angle. Deep drawing makes cups from flat blanks; blank dia D = sqrt(d^2 + 4dh); max reduction 40 percent per draw. Spinning forms axisymmetric shapes on a lathe-like machine. Sheet joints: lap seam (overlap 4-6 mm), grooved seam (folded interlock for HVAC), hem (edge folded), dovetail (cylindrical). Fitting tools: bench vice (100-150 mm jaws), files (rough 20 TPI to dead smooth 80 TPI in flat/round/half-round shapes), hacksaw (250-300 mm blade, 18-32 TPI), taps (taper, second, plug) and dies, marking tools (scriber, punch, divider, surface plate). Fitting operations: mark -> saw -> file -> drill -> ream -> tap. Smithy tools: anvil (50-150 kg), hand hammer 1 kg, sledge 4-10 kg, tongs (flat, round, square), swage, fuller, chisel, flatter. Forging temperature for MS 1000-1200 deg C. Operations: upsetting (shorten, thicken), drawing out (lengthen, thin), bending, punching, forge welding (borax flux, 1300 deg C). Heat treatment: anneal 850-900 deg C slow cool; normalise air cool.",
        sections: [
          // --- 4.1 ---
          {
            number: "4.1",
            title: "Sheet metal operations: shearing, bending, drawing, spinning",
            body: [
              "Sheet metal work forms thin sheet (thickness below 5 mm) into useful shapes by shearing, bending and drawing without removing material. The stock is cold-rolled steel, galvanised iron, aluminum, copper or brass, supplied in standard gauges - 16 gauge is 1.5 mm, 18 gauge is 1.2 mm, 20 gauge is 0.9 mm. Operations are classified by the type of deformation: shearing cuts the sheet, bending forms an angle, drawing forms a cup or box, and spinning forms an axisymmetric shape over a rotating form. Each operation is performed on a press with a punch and die.",
              "Shearing cuts the sheet between a punch and a die with a small clearance of 5 to 10 percent of thickness. The punch penetrates the sheet to about one-third of thickness, then the sheet fractures through the rest. Variants include blanking (the cut-out piece is the product, e.g. a washer), piercing (a hole is cut in a larger sheet), slitting (a straight cut without producing a blank), and notching (cutting an edge notch). Shear angle on the punch or die reduces the cutting force by spreading the cut over time - a 5 deg shear angle on a 100 mm long, 1 mm thick MS sheet reduces the peak force from 30 kN to about 10 kN.",
              "Bending forms an angle in the sheet. The minimum bend radius is 0.5 to 1 times the thickness for soft materials and up to 2 times for hard materials; below this, the outer fibre cracks. Springback (the elastic recovery that opens the bend by 2 to 5 degrees after the punch lifts) must be compensated by over-bending. Bend allowance is the length of neutral axis consumed by the bend: BA = (pi / 180) x angle x (R + K T), where R is the inside radius, T is thickness and K is the K-factor (0.33 for soft, 0.5 for hard materials). A worked example: a 90 deg bend in 1.5 mm MS at R = 1.5 mm gives BA = (pi/180) x 90 x (1.5 + 0.33 x 1.5) = 2.75 mm.",
              "Deep drawing converts a flat circular blank into a cylindrical cup by forcing it through a die with a punch. The blank diameter D is related to cup diameter d and height h by D = sqrt(d^2 + 4 d h) (ignoring corner radius). For d = 100 mm and h = 50 mm, D = sqrt(10000 + 20000) = sqrt(30000) = 173 mm. The drawing ratio D/d should be below 2.0 (reduction below 50 percent) in one draw; deeper cups need multiple draws with annealing between. The drawing force F = pi d t sigma_u (D/d - 0.7), where t is thickness and sigma_u is the material's ultimate tensile strength. For the example with t = 1.5 mm MS at 400 MPa, F = pi x 100 x 1.5 x 400 x (1.73 - 0.7) = 194 kN.",
              "Spinning forms axisymmetric shapes (cones, domes, hemispheres) by pressing a rotating sheet against a form with a roller or stick. The sheet is clamped to a spinning lathe rotating at 600 to 1500 rpm; the operator applies pressure with a long-handled tool, gradually forming the sheet over the wooden or steel form. Kitchen utensils, lamp reflectors, conical hoppers and domed ends are made this way. The advantage over deep drawing is low tooling cost - a wooden form costs a tenth of a steel draw die - making spinning ideal for low-volume production and prototypes.",
            ],
            bullets: [
              "Sheet metal thickness below 5 mm; 16 ga = 1.5 mm, 18 ga = 1.2 mm.",
              "Shearing clearance 5-10 percent of thickness; shear angle reduces force.",
              "Blanking cuts inside (product); piercing cuts a hole; slitting cuts straight.",
              "Bending min radius 0.5-1x thickness; springback 2-5 deg.",
              "Bend allowance = (pi/180) x angle x (R + K T); K = 0.33 soft, 0.5 hard.",
              "Deep drawing: D = sqrt(d^2 + 4dh); max reduction 40-50 percent per draw.",
              "Spinning: 600-1500 rpm; low tooling cost for axisymmetric shapes.",
            ],
            codeExample: {
              language: "text",
              caption: "Deep drawing calculation for a 100 mm dia, 50 mm tall cup.",
              code:
                `DEEP DRAWING - cup from circular blank
Cup diameter d = 100 mm
Cup height   h = 50 mm
Sheet thick  t = 1.5 mm
Material     MS, sigma_u = 400 MPa

Blank diameter
  D = sqrt(d^2 + 4*d*h)
    = sqrt(100^2 + 4*100*50)
    = sqrt(10000 + 20000)
    = sqrt(30000) = 173 mm

Drawing ratio = D/d = 173/100 = 1.73
  Limit ~2.0 (reduction 50 percent)

Reduction r = (D-d)/D = 73/173 = 42 percent

Drawing force
  F = pi*d*t*sigma_u*(D/d - 0.7)
    = pi*100*1.5*400*(1.73 - 0.7)
    = pi*100*1.5*400*1.03
    = 194000 N = 194 kN`,
            },
            diagram: {
              kind: "flow",
              title: "Sheet metal operation sequence from flat blank to drawn cup",
              caption:
                "Each step changes the sheet's geometry - shearing then drawing is the typical sequence.",
              steps: [
                { label: "Flat sheet 1.5 mm", note: "raw stock" },
                { label: "Blanking 173 mm disc", note: "shear, clearance 7 percent" },
                { label: "Drawing into 100 dia x 50 cup", note: "force 194 kN" },
                { label: "Trimming edge", note: "remove flange" },
                { label: "Finished cup", note: "Ra 6 um, ±0.2 mm" },
              ],
            },
            callout: {
              type: "exam",
              title: "Bend allowance and blank diameter are 7-mark questions",
              body: "Two formulas dominate sheet metal numericals: bend allowance BA = (pi/180)(R + K T) angle for bending, and blank diameter D = sqrt(d^2 + 4 d h) for deep drawing. Memorise both with a worked example each, and write the formula first before substituting numbers - even arithmetic slips lose only one mark.",
            },
            keyTerms: [
              { term: "Shearing", definition: "Cutting sheet between punch and die with 5-10 percent clearance; includes blanking, piercing, slitting." },
              { term: "Bending", definition: "Forming an angle in sheet at minimum radius 0.5-1x thickness; springback of 2-5 deg must be compensated." },
              { term: "Deep drawing", definition: "Converting a flat blank into a cylindrical cup with a punch and die; max reduction 40-50 percent per draw." },
              { term: "Spinning", definition: "Forming an axisymmetric shape by pressing a rotating sheet against a form with a roller." },
              { term: "Bend allowance", definition: "Length of neutral axis consumed by a bend; BA = (pi/180) x angle x (R + K T)." },
            ],
            examQuestions: [
              {
                q: "Classify sheet metal operations. Explain shearing, bending and deep drawing with their key parameters and formulas, and solve for the blank diameter and drawing force for a 100 mm dia, 50 mm tall cup in 1.5 mm MS sheet.",
                marks: 7,
                outline: [
                  "Classify: shearing (cut), bending (angle), drawing (cup), spinning (axisymmetric).",
                  "Shearing: clearance 5-10 percent; blanking, piercing, slitting.",
                  "Bending: min radius 0.5-1x thickness; springback 2-5 deg.",
                  "Deep drawing: D = sqrt(d^2 + 4dh); max reduction 40-50 percent.",
                  "Drawing force F = pi d t sigma_u (D/d - 0.7).",
                  "Worked example: D = sqrt(10000 + 20000) = 173 mm; r = 42 percent.",
                  "F = pi x 100 x 1.5 x 400 x 1.03 = 194 kN.",
                ],
              },
              {
                q: "What is springback in bending and how is it compensated?",
                marks: 2,
              },
              {
                q: "State the formula for blank diameter in deep drawing and compute it for d = 80 mm, h = 40 mm.",
                marks: 3,
              },
            ],
          },
          // --- 4.2 ---
          {
            number: "4.2",
            title: "Sheet metal joints, seams and tools",
            body: [
              "Sheet metal joints join edges of thin sheet without adding much weight or thickness. The five common types are the lap seam (a simple overlap of 4 to 6 mm, joined by rivets, solder or spot welds), the grooved seam (two edges folded 180 degrees and interlocked, used for HVAC ducting where an air-tight joint is needed), the hem (an edge folded over itself for safety and stiffness, single or double), the dovetail seam (interlocking tabs for cylindrical pipes), and the locked corner seam (two edges folded into an L and interlocked, used for square ducts and boxes). Each joint balances strength, air-tightness and ease of fabrication.",
              "Lap seams are the simplest and most common. A 4 to 6 mm overlap is riveted at 25 to 50 mm pitch, soldered with 60/40 Sn-Pb at 188 deg C, or spot welded at 6 mm nuggets on 50 mm pitch. They suit tanks, boxes and housings where moderate strength and sealing are required. Rivet diameter is about 2 to 3 times the sheet thickness; for 1.5 mm sheet a 4 mm aluminum rivet at 30 mm pitch gives a joint strength of about 60 percent of the parent sheet. Spot welds on the same overlap give 80 percent of parent strength and are quicker.",
              "Grooved seams are the workhorse of HVAC ducting. Each edge is folded 180 degrees on a bar folder, then one fold is laid over the other and the assembly is hammered down on a stake to lock them. The joint is air-tight without solder or sealant and carries the full hoop stress of pressurised ducting. A 600 mm wide galvanised duct section typically has one grooved seam on the long side. The folded edge adds 8 to 12 mm to the sheet width allowance - a sheet 600 mm wide produces a duct 585 mm wide.",
              "Sheet metal tools fall into cutting, forming and supporting groups. Cutting tools are snips: straight snips for straight cuts, curved snips (aviation snips) for left or right curves, and bench shears for thick stock. Forming tools are stakes (anvil, beakhorn, square, funnel, bick-iron) over which the sheet is hammered to form corners and curves, mallets (wooden or rawhide to avoid marking), and bar folders for straight bends. Supporting tools are the bench vice, the stake holder (a cast iron bench socket) and the flat stake plate.",
              "Layout and marking on sheet are done with dividers (for circles), a scribe (for straight lines on a layout dye), a steel rule and a combination square. Allowance for seams and hems must be added to the developed length: a 90 deg bend with a 4 mm inside radius in 1 mm sheet adds a bend allowance of 1.6 mm; a 6 mm hem adds 12 mm. Burrs from shearing are removed with a file because they cause injury and prevent flush assembly. A worked example: a 300 x 200 mm box from 1 mm GI sheet, with a 4 mm hem on the top edge and a 6 mm lap seam on one corner, needs a developed blank 308 x 207 mm.",
            ],
            bullets: [
              "Five joints: lap, grooved, hem, dovetail, locked corner.",
              "Lap seam: 4-6 mm overlap, riveted or soldered or spot welded.",
              "Grooved seam: two folds interlocked, air-tight, HVAC ducting.",
              "Hem: edge folded for safety and stiffness; single or double.",
              "Dovetail seam: interlocking tabs for cylindrical pipes.",
              "Tools: snips (straight, aviation), stakes (anvil, beakhorn), mallets (wood, rawhide).",
              "Layout: dividers, scribe, rule; allowance for seam and hem.",
            ],
            codeExample: {
              language: "text",
              caption: "Sheet metal joint selection by application.",
              code:
                `SHEET METAL JOINT - selection
Joint type    | Use               | Strength
Lap seam      | tanks, boxes      | moderate
Grooved seam  | HVAC ducting      | air-tight
Single hem    | edge safety       | low
Double hem    | high-stiff edge   | medium
Dovetail seam | cylindrical pipes | moderate
Locked corner | square ducts      | high
Riveted lap   | aircraft skins    | high
Spot welded   | auto body panels  | high

DEVELOPMENT OF A 300x200 mm BOX
Sheet   : 1 mm GI
Hem     : 4 mm single on top -> +8 mm
Lap seam: 6 mm on one corner -> +6 mm
Blank developed = 308 x 207 mm
Burrs filed off before bending`,
            },
            diagram: {
              kind: "matrix",
              title: "Sheet metal joints placed in a 2x2 of use and scope",
              caption:
                "Each quadrant holds one family of joints - learn the application that matches the quadrant.",
              axes: { x: "scope (sheet-to-sheet to assembly)", y: "use (joining to finishing)" },
              quadrants: [
                { label: "Seam joints", note: "lap, grooved - sheet-to-sheet" },
                { label: "Edge finishes", note: "single hem, double hem, flange" },
                { label: "Corner joints", note: "locked corner, dovetail for boxes" },
                { label: "Reinforcement joints", note: "riveted lap, spot welded" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always add seam allowance to the developed blank",
              body: "When developing a sheet metal blank, the finished dimensions never equal the blank dimensions - seam and hem allowances add to the developed size. A 300 x 200 mm box with a 4 mm hem and 6 mm lap needs a 308 x 207 mm blank. Forgetting the allowance is the single most common mistake in sheet metal numericals and costs a full mark.",
            },
            keyTerms: [
              { term: "Lap seam", definition: "A simple overlap joint of 4-6 mm between two sheet edges, joined by rivets, solder or spot welds." },
              { term: "Grooved seam", definition: "Two folded edges interlocked to give an air-tight joint, used in HVAC ducting." },
              { term: "Hem", definition: "An edge of sheet folded over itself for safety and stiffness; single or double." },
              { term: "Stake", definition: "A small anvil of various shapes (anvil, beakhorn, square, funnel) over which sheet is hammered." },
              { term: "Snip", definition: "A hand shear for cutting thin sheet; straight snips for straight cuts, aviation snips for curves." },
            ],
            examQuestions: [
              {
                q: "Classify sheet metal joints with a sketch of each. Explain the lap seam and grooved seam in detail, and list the cutting, forming and supporting tools used in a sheet metal shop.",
                marks: 7,
                outline: [
                  "Five joints: lap, grooved, hem, dovetail, locked corner.",
                  "Sketch each joint with overlap and fold dimensions.",
                  "Lap seam: 4-6 mm overlap, riveted/soldered/spot welded.",
                  "Grooved seam: two 180 deg folds interlocked, air-tight for HVAC.",
                  "Hem: edge folded for safety and stiffness.",
                  "Tools: snips (straight, aviation), stakes (anvil, beakhorn), mallets.",
                  "Marking tools: dividers, scribe, rule; seam allowance added to blank.",
                ],
              },
              {
                q: "State the function of a grooved seam and one application.",
                marks: 2,
              },
              {
                q: "List any four sheet metal hand tools.",
                marks: 3,
              },
            ],
          },
          // --- 4.3 ---
          {
            number: "4.3",
            title: "Fitting workshop tools: vice, files, hacksaw, taps and dies",
            body: [
              "The fitting workshop builds precision parts by hand on a bench. The centre of the workshop is the bench vice - a cast iron body with hardened steel serrated jaws that grips the work, opening 100 to 150 mm. The vice is bolted to a heavy bench at working height (about 1 m). Parallel-jaw vices hold rectangular work firmly; quick-release vices open with a trigger. The work is protected from jaw marks by soft jaw caps of aluminum or fiber when the surface is finished.",
              "Files are the universal metal-cutting hand tool, classified by shape, cut and grade. Shapes include flat (rectangular), hand (rectangular, slightly tapered), round (for holes), half-round (for concave curves), square (for corners), triangular (for sharp angles) and knife (for acute slots). The cut refers to the tooth pattern: single-cut (one set of parallel teeth, for soft metals and finishing), double-cut (two crossing sets, for fast removal), and rasp-cut (coarse isolated teeth, for soft material). Grade refers to tooth spacing: rough (20 teeth per inch), bastard (30), second-cut (40), smooth (50), and dead smooth (80). A 300 mm bastard double-cut flat file removes about 0.1 mm per stroke.",
              "The hacksaw cuts metal bar and sheet with a 250 to 300 mm blade held in tension (30 to 50 kg force) in a frame. Blade pitch is 18 to 32 teeth per inch: 18 TPI for soft thick material (mild steel bar 6 mm and up), 24 TPI for general work, 32 TPI for thin sheet and hard material. The blade is mounted with teeth pointing away from the handle, cutting on the forward stroke. Sawing speed is 40 to 60 strokes per minute, with pressure on the forward stroke only; the return stroke is unloaded. Cutting fluid helps on hard material. A 12 mm MS bar is cut in about 2 minutes with a 24 TPI blade.",
              "Taps cut internal threads and dies cut external threads. A tap set for an M10 x 1.5 thread has three taps: a taper tap (with a 7 to 10 thread chamfer that starts the cut), a second or plug tap (3 to 5 thread chamfer that continues), and a bottoming tap (1 to 2 thread chamfer that finishes a blind hole to the bottom). The tap is held in a tap wrench and turned 1/4 turn forward, then 1/8 turn back to break the chip. The pilot hole is drilled to the tap drill size (8.5 mm for M10 x 1.5). Dies are held in a diestock and cut external threads on a rod of the nominal thread diameter (10.0 mm for M10).",
              "Marking tools lay out the work before cutting. The surface plate (cast iron or granite, flat to 0.005 mm) is the datum; the work is supported on it with V-blocks for round parts. A vernier height gauge marks lines to ±0.02 mm. A scriber (hardened steel point) scratches lines on layout dye (blue or red). A centre punch makes a starter dimple for drilling; a dot punch makes a witness mark on a scribed line. Dividers draw circles and step off equal lengths. A combination square checks right angles. A worked example: marking an 8 mm hole centre on a 50 x 40 mm plate - blue the surface, scribe datum edges, set dividers to 25 mm and 20 mm from datums, punch the intersection, verify with a magnifier.",
            ],
            bullets: [
              "Bench vice: cast iron body, hardened jaws, opening 100-150 mm.",
              "File shapes: flat, hand, round, half-round, square, triangular, knife.",
              "File grades: rough 20 TPI, bastard 30, second 40, smooth 50, dead smooth 80.",
              "Hacksaw: 250-300 mm blade, 18 TPI soft thick, 32 TPI hard thin.",
              "Saw at 40-60 strokes/min; pressure on forward stroke only.",
              "Tap set: taper (start), second (continue), plug/bottoming (finish).",
              "M10 x 1.5 tap drill size: 8.5 mm; mark with scriber, punch, dividers on surface plate.",
            ],
            codeExample: {
              language: "text",
              caption: "Tapping an M10 internal thread: tap set, pilot hole and procedure.",
              code:
                `THREAD TAPPING - M10 x 1.5 internal
Tap set : taper, second, plug
Pilot hole dia = 8.5 mm (tap drill for M10)

PROCEDURE
 1. Drill 8.5 mm pilot hole (clearance for tap)
 2. Deburr hole edges 0.5 mm x 45 deg
 3. Apply cutting fluid (cutting oil or spirits)
 4. Start with taper tap, keep perpendicular
 5. Turn 1/4 turn forward, 1/8 back to break chip
 6. Switch to second tap after 4 threads
 7. Switch to plug tap for full thread to bottom
 8. Clean chips, verify with M10 bolt (should fit)

COMMON FILE GRADES (teeth per inch)
  Rough        : 20 (fast removal)
  Bastard      : 30 (general)
  Second-cut   : 40 (medium)
  Smooth       : 50 (finishing)
  Dead smooth  : 80 (final polish)`,
            },
            diagram: {
              kind: "layers",
              title: "Fitting workshop tool hierarchy",
              caption:
                "Index 0 is the bench; each layer is a tool group you must list in a 'fitting tools' answer.",
              layers: [
                { label: "Bench and bench vice", note: "cast iron, 100-150 mm jaws" },
                { label: "Cutting tools", note: "files, hacksaw, chisels" },
                { label: "Threading tools", note: "taps, dies, tap wrench, diestock" },
                { label: "Marking tools", note: "scriber, punch, dividers, height gauge" },
                { label: "Measuring tools", note: "vernier, micrometer, surface plate" },
              ],
            },
            callout: {
              type: "exam",
              title: "List tools by group, not randomly",
              body: "When asked to 'list fitting workshop tools', RGPV expects a grouped list: holding (vice), cutting (files, hacksaw), threading (taps, dies), marking (scriber, punch, dividers), measuring (vernier, micrometer). Five tools per group fetch the full 5 marks; a random list of ten tools loses grouping marks.",
            },
            keyTerms: [
              { term: "Bench vice", definition: "A cast iron holding device with hardened serrated jaws, opening 100-150 mm, bolted to the fitting bench." },
              { term: "File", definition: "A hardened steel cutting tool with parallel teeth, classified by shape, cut and grade (rough to dead smooth)." },
              { term: "Hacksaw", definition: "A hand saw with a 250-300 mm blade in tension, 18-32 TPI, cutting on the forward stroke." },
              { term: "Tap", definition: "A hardened tool for cutting internal threads; comes in taper, second and plug/bottoming forms." },
              { term: "Die", definition: "A hardened tool held in a diestock for cutting external threads on a rod." },
            ],
            examQuestions: [
              {
                q: "List the tools used in a fitting workshop, grouped by function. Describe a bench vice, file classification, hacksaw blade selection and the tap set used for cutting an M10 internal thread.",
                marks: 7,
                outline: [
                  "Group tools: holding, cutting, threading, marking, measuring.",
                  "Bench vice: cast iron, hardened jaws, opening 100-150 mm.",
                  "Files classified by shape (flat, round, half-round) and grade (rough 20 to dead smooth 80 TPI).",
                  "Hacksaw: 250-300 mm blade; 18 TPI soft thick, 32 TPI hard thin.",
                  "Tap set: taper (start), second (continue), plug/bottoming (finish).",
                  "Pilot hole dia 8.5 mm for M10 x 1.5; turn 1/4 fwd, 1/8 back.",
                  "Marking tools: scriber, punch, dividers on surface plate.",
                ],
              },
              {
                q: "State the grades of file with their teeth per inch.",
                marks: 2,
              },
              {
                q: "Why are three taps (taper, second, plug) used for cutting a thread? Explain.",
                marks: 3,
              },
            ],
          },
          // --- 4.4 ---
          {
            number: "4.4",
            title: "Fitting operations: marking, sawing, filing, drilling, reaming",
            body: [
              "Fitting operations transform a rough-sawn blank into a finished part with close tolerance. The sequence is marking, sawing, filing, drilling, reaming and tapping, with deburring and inspection at the end. Each operation has its tool, its parameters and its achievable tolerance. The datum - the first reference surface - is established first, and every other dimension is taken from it to avoid accumulation of error.",
              "Marking lays out the geometry on the work. The surface is coated with layout dye (blue copper sulphate or ink), the work is placed on the surface plate, and lines are scribed with a vernier height gauge or a scriber from a datum edge. Hole centres are punched with a centre punch to make a starter dimple for the drill; witness marks on scribed lines help verify dimensions later. Marking accuracy is ±0.1 mm with a height gauge; ±0.5 mm with a scribe and rule. The marking sets the geometry - any error here propagates to every later operation.",
              "Sawing rough-cuts the blank to size with a hacksaw. Speed 40 to 60 strokes per minute, pressure on the forward stroke only; cutting fluid on hard material. A 12 mm MS bar is cut in about 2 minutes with a 24 TPI blade, leaving a burr that is removed with a file. For thicker stock above 25 mm, a power hacksaw or band saw is used. The cut should be 1 to 2 mm oversize to allow filing to the marked line. Sawing accuracy is ±0.5 mm.",
              "Filing removes material with a hardened steel file to bring the work to the scribed line. Cross-filing (file at 45 deg to the line) removes stock fast and shows high spots; draw-filing (file held at 90 deg, pushed sideways) produces a smoother surface. A 300 mm bastard file removes about 0.1 mm per pass; a smooth file removes 0.02 mm. Flatness achievable by hand is ±0.1 mm, parallelism ±0.05 mm, surface finish Ra 3.2 um. The file must be cleaned with a file card after every few strokes to prevent pinning (chip embedding that scratches the work).",
              "Drilling, reaming and tapping finish holes. The centre-punched dimple locates the drill; a 8.5 mm drill at 955 rpm and 0.15 mm/rev feed makes the pilot hole in 11 s for 25 mm depth. Reaming removes 0.1 to 0.4 mm on diameter to reach IT7 ±0.01 mm tolerance at Ra 0.8 um. Tapping cuts the internal thread with the taper-second-plug set. Deburring with a countersink or scraper removes sharp edges. Final inspection with vernier (±0.02 mm), micrometer (±0.01 mm) and Go/No-Go gauges verifies dimensions. A worked plate: 50 x 40 x 6 mm MS, two 10 H7 reamed holes at (25, 20) and (25, 30), tolerance ±0.1 mm on outside, ±0.01 mm on holes - produced in about 25 minutes.",
            ],
            bullets: [
              "Sequence: mark -> saw -> file -> drill -> ream -> tap -> deburr -> inspect.",
              "Marking accuracy ±0.1 mm with height gauge; datum established first.",
              "Sawing: 40-60 strokes/min, pressure forward only, ±0.5 mm accuracy.",
              "Cross-filing for fast removal, draw-filing for finish; flatness ±0.1 mm.",
              "File card cleans the file to prevent pinning (scratches).",
              "Reaming removes 0.1-0.4 mm; reaches IT7 ±0.01 mm at Ra 0.8 um.",
              "Inspection: vernier ±0.02 mm, micrometer ±0.01 mm, Go/No-Go gauges.",
            ],
            codeExample: {
              language: "text",
              caption: "Sequence to produce a 50x40x6 mm fitted plate with two 10 H7 holes.",
              code:
                `FITTING A RECTANGULAR PLATE 50 x 40 x 6 mm
Raw stock: 55 x 45 x 6 mm MS plate

1. File one long edge flat -> datum A
2. Scribe 50 mm from datum A
3. File to line -> datum B
4. Square A and B; scribe 40 mm from A
5. File to line -> datum C
6. Scribe hole centres at (25, 20) and (25, 30)
7. Punch marks, drill 8.5 mm pilot holes
8. Ream to 10 H7 (+0.015/0 mm)
9. Chamfer hole edges 0.5 x 45 deg
10. Deburr outer edges
11. Final check: vernier 50x40x6 ±0.1 mm
    micrometer on holes 10.000 +0.015/0 mm
12. Apply anti-rust oil, store`,
            },
            diagram: {
              kind: "pipeline",
              title: "Fitting operation pipeline from raw stock to finished plate",
              caption:
                "Each stage tightens the tolerance; the final stage inspects against specification.",
              stages: [
                { label: "Marking on dye", note: "scriber, ±0.1 mm" },
                { label: "Sawing to +2 mm", note: "hacksaw, ±0.5 mm" },
                { label: "Filing to line", note: "flatness ±0.1 mm" },
                { label: "Drilling + reaming", note: "±0.01 mm" },
                { label: "Deburr + inspect", note: "vernier, micrometer" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always establish a datum first",
              body: "Every fitting job starts by filing one true edge as the datum; every other dimension is taken from it. Skipping the datum and measuring from rough edges accumulates error - the part comes out wrong on final inspection. State this in your answer to 'describe the fitting procedure' and you secure the procedural mark.",
            },
            keyTerms: [
              { term: "Marking", definition: "Laying out geometry on the work with scriber, punch and dividers from a datum edge." },
              { term: "Cross-filing", definition: "Filing at 45 deg to the line for fast stock removal; followed by draw-filing for finish." },
              { term: "Draw-filing", definition: "Filing with the file held at 90 deg to the direction of motion for a smoother finish." },
              { term: "Reaming", definition: "Enlarging a drilled hole by 0.1-0.4 mm with a reamer to reach IT7 ±0.01 mm tolerance." },
              { term: "Datum", definition: "The first reference surface established by filing; all dimensions are taken from it." },
            ],
            examQuestions: [
              {
                q: "Describe the sequence of fitting operations to produce a rectangular plate with a reamed hole. Explain marking, sawing, filing, drilling and reaming with their achievable tolerances and tools.",
                marks: 7,
                outline: [
                  "Sequence: mark -> saw -> file -> drill -> ream -> tap -> deburr -> inspect.",
                  "Marking: layout dye, scriber, vernier height gauge, ±0.1 mm accuracy.",
                  "Sawing: hacksaw 40-60 strokes/min, ±0.5 mm, pressure forward only.",
                  "Filing: cross-file then draw-file; flatness ±0.1 mm, parallelism ±0.05 mm.",
                  "Drilling: 8.5 mm pilot hole for M10; ream to 10 H7 ±0.01 mm at Ra 0.8 um.",
                  "Tapping: taper, second, plug; turn 1/4 fwd, 1/8 back.",
                  "Inspect with vernier ±0.02 mm and micrometer ±0.01 mm.",
                ],
              },
              {
                q: "What is the difference between cross-filing and draw-filing?",
                marks: 2,
              },
              {
                q: "State the tolerance achieved by reaming and the material removed by a reamer.",
                marks: 3,
              },
            ],
          },
          // --- 4.5 ---
          {
            number: "4.5",
            title: "Smithy and forging hand tools",
            body: [
              "Smithy (or forging) shapes heated metal by hammering on an anvil. The work is heated to a forging temperature where it is plastic but not molten - for mild steel this is 1000 to 1200 deg C (cherry red to bright orange), for aluminum 400 to 480 deg C, for brass 600 to 750 deg C. At this temperature the metal deforms without rupture and the grain flow follows the part outline, giving a fatigue strength far above machined parts. Forge tools are simple but precise - the smithy craft lies in controlling heat, hammer blows and the position on the anvil.",
              "The anvil is the smithy's primary tool. It is a wrought iron or cast steel body weighing 50 to 150 kg, with a hardened steel face (HRC 55 to 60) welded on top, a horn (conical projection) for bending curves, a flat step (the chipping block, softer than the face) for cutting with a chisel, a round hole (pritchel) for punching small holes, and a square hardy hole for holding swages, fullers and cutters. The anvil sits on a wooden block or cast iron stand that absorbs the hammer shock; the height is set so the smith's knuckles just touch the face when standing.",
              "Hammers used in smithy are the hand hammer (1 kg, held in the right hand for striking) and the sledge hammer (4 to 10 kg, swung by a striker when the smith holds the work with tongs and directs the blows). Hand hammer shapes include the ball-peen (with a spherical peen for riveting and rounding), the straight-peen (peen parallel to the handle for spreading), the cross-peen (peen across the handle for drawing out), and the flat face (for general flattening). The sledge has a double-face or a cross-peen; the striker swings it on the smith's signal.",
              "Tongs hold the hot work. There are many jaw shapes: flat tongs for flat bars, round-nose tongs for round bars, square tongs for square bars, pick-up tongs for general handling, and ring tongs for ring-shaped work. The reins (long handles) keep the smith's hand away from the heat; the jaw is hardened to grip without marring. The fit must be tight - a work slipping from the tongs at 1100 deg C is a danger to everyone nearby. Other smithy tools are the swage (a shaped tool that fits in the hardy hole for finishing round or square shapes), the fuller (for necking the work and reducing section), the flatter (for finishing flat surfaces), the hot chisel (for cutting hot metal), the cold chisel (for cold cutting) and the punch (for making holes).",
              "The hearth heats the work. A traditional coke or coal hearth burns coke at 1200 deg C with an air blast from a blower; modern gas forges use propane with a recuperator for efficiency and clean heat. The temperature is judged by eye: dull red 700 deg C, cherry red 1000 deg C, bright orange 1100 deg C, yellow 1200 deg C, white 1300 deg C. Above 1300 deg C mild steel 'burns' (oxidises rapidly and crumbles). The work is heated slowly and uniformly; a cold core cracks under the hammer. Soaking time at temperature is about 5 minutes per 25 mm of thickness.",
            ],
            bullets: [
              "Forging temperature for MS: 1000-1200 deg C (cherry red to bright orange).",
              "Anvil: 50-150 kg, hardened steel face, horn, chipping block, pritchel and hardy holes.",
              "Hand hammer 1 kg, sledge 4-10 kg; shapes: ball-peen, straight-peen, cross-peen, flat.",
              "Tongs: flat, round-nose, square, pick-up, ring - jaws hardened to grip without marring.",
              "Swage and fuller fit in the hardy hole; flatter finishes flat surfaces.",
              "Hot chisel cuts hot metal; cold chisel cuts cold; punch makes holes.",
              "Coke or gas hearth; colour code: cherry red 1000, bright orange 1100, yellow 1200 deg C.",
            ],
            codeExample: {
              language: "text",
              caption: "Smithy tools and their uses on the anvil.",
              code:
                `SMITHY TOOLS - use on the anvil
Anvil         : 100 kg, hardened face - primary support
Hand hammer   : 1 kg ball-peen - light blows
Sledge hammer : 5 kg double-face - heavy strikes
Flat tongs    : holds flat bars 10-25 mm
Round tongs   : holds round bars 8-20 mm
Square tongs  : holds square bars
Pick-up tongs : general handling
Hot chisel    : cuts hot metal at 1000 deg C
Cold chisel   : cuts cold flat bar
Fuller        : necks the work, reduces section
Swage        : shapes to round or square profile
Flatter       : finishes flat surfaces smooth
Set hammer    : refines corners and shoulders
Punch         : makes holes in hot work
Hearth        : coke or gas flame to 1200 deg C

COLOUR-TEMPERATURE CODE
  Dull red      : 700 deg C
  Cherry red    : 1000 deg C
  Bright orange : 1100 deg C
  Yellow        : 1200 deg C
  White         : 1300 deg C (burn risk)`,
            },
            diagram: {
              kind: "layers",
              title: "Smithy tools from anvil base to top tools",
              caption:
                "Each layer is a category of tools you must list in a 'smithy tools' answer.",
              layers: [
                { label: "Anvil and stand", note: "100 kg, hardened face, horn, hardy hole" },
                { label: "Hammers", note: "hand 1 kg, sledge 5 kg, ball/cross peen" },
                { label: "Holding tools", note: "tongs: flat, round, square, ring" },
                { label: "Top tools (hand-held)", note: "flatter, set hammer, hot chisel, punch" },
                { label: "Bottom tools (in hardy hole)", note: "swage, fuller, hardy chisel" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair colour with temperature",
              body: "Smithy temperature questions want the colour code: cherry red 1000, bright orange 1100, yellow 1200 deg C. Pair each colour with its temperature and the use - cherry red is the lower limit for forging MS, yellow is the upper safe limit, white risks burning. Stating this code with values earns 3 marks.",
            },
            keyTerms: [
              { term: "Anvil", definition: "A 50-150 kg cast iron or steel block with hardened face, horn and holes, on which hot metal is hammered." },
              { term: "Hammer", definition: "Smithy striking tool; hand hammer 1 kg, sledge 4-10 kg; shapes include ball-peen, cross-peen." },
              { term: "Tongs", definition: "Forged steel pliers with shaped jaws (flat, round, square) that grip hot work without marring." },
              { term: "Swage", definition: "A shaped tool that fits in the anvil hardy hole to finish round or square profiles on hot work." },
              { term: "Fuller", definition: "A tool (top or bottom) that necks the work, reducing the section locally before drawing out." },
            ],
            examQuestions: [
              {
                q: "List the hand tools used in a smithy with their functions. Describe the anvil, hammers and tongs in detail and state the forging temperature of mild steel with the colour code.",
                marks: 7,
                outline: [
                  "Smithy shapes heated metal by hammering on the anvil.",
                  "Forging temperature for MS: 1000-1200 deg C (cherry red to bright orange).",
                  "Anvil: 50-150 kg, hardened face, horn, chipping block, pritchel hole, hardy hole.",
                  "Hammers: hand 1 kg (ball-peen, cross-peen), sledge 4-10 kg.",
                  "Tongs: flat, round-nose, square, pick-up - jaws hardened, reins long.",
                  "Other tools: swage, fuller, flatter, set hammer, hot/cold chisel, punch.",
                  "Colour code: cherry red 1000, bright orange 1100, yellow 1200 deg C.",
                ],
              },
              {
                q: "State the forging temperature range for mild steel.",
                marks: 2,
              },
              {
                q: "Name any three types of tongs and state their uses.",
                marks: 3,
              },
            ],
          },
          // --- 4.6 ---
          {
            number: "4.6",
            title: "Forging operations and heat treatment of forgings",
            body: [
              "Forging operations reshape heated metal on the anvil. Upsetting shortens and thickens the work by hammering on its end; the rule is that the upset length should not exceed three times the original diameter or the bar will buckle instead of upset. Drawing out lengthens and thins the work by hammering on its side with a cross-peen or fuller; the metal flows perpendicular to the blow. Bending forms an angle by hammering the work over the horn or over a block; the bend radius should be at least the bar thickness. Punching drives a punch through hot metal to make a hole; the work is supported on the pritchel hole or a bolster.",
              "Upsetting is used to form bolt heads, rivet heads and the enlarged ends of shafts. A 12 mm dia MS bar heated at the end to 1100 deg C and upset for 20 mm of its length enlarges the end to about 18 mm dia, ready for forming into a hex head with a swage. The upset length should be 2 to 3 times the original diameter; longer lengths buckle. The upset end is then trimmed with a hot chisel to the required shape. A 1 kg hand hammer delivers about 60 to 80 blows per minute; a 5 kg sledge delivers 30 to 40 blows per minute but with five times the energy per blow.",
              "Drawing out reduces the cross-section and lengthens the work. A fuller is first driven into the work to neck the section locally, then the work is hammer on the anvil face to lengthen the necked zone. A 12 mm MS bar can be drawn down to 10 mm dia with about 50 to 60 blows of a cross-peen hammer, increasing length by 30 to 40 percent. Drawing out refines the grain structure and aligns it with the part axis, giving high fatigue strength - which is why connecting rods and axles are forged, not machined from bar.",
              "Forge welding joins two pieces of mild steel by heating them to 1300 deg C (yellow heat) and hammering them together on the anvil. Borax is sprinkled as flux to dissolve the oxide film that would prevent bonding. A scarf joint (a tapered overlap) is prepared so the hammer blows push the scarf into a sound weld without trapping slag. Forge welding is the historic technique of the village smithy; modern practice uses arc or gas welding instead, but forge welding remains in use for chains, crowbars and decorative ironwork.",
              "Heat treatment of forgings relieves internal stresses and refines the grain structure that forging coarsens. Annealing heats the forging to 850 to 900 deg C (above the upper critical temperature for hypoeutectoid steel) and cools it slowly in the furnace over 6 to 12 hours, giving the softest structure for machining. Normalising heats to the same temperature and cools in still air, giving a finer pearlite and higher strength than annealing. Tempering heats a hardened part to 200 to 600 deg C to reduce brittleness; quenching in water or oil from 850 deg C hardens the steel. A worked cycle for a forged MS connecting rod: forge at 1150 deg C, normalise at 870 deg C air cool, rough machine, harden and temper to 30 HRC, finish machine.",
            ],
            bullets: [
              "Upsetting: shorten and thicken; upset length <= 3x diameter or bar buckles.",
              "Drawing out: lengthen and thin with cross-peen or fuller.",
              "Bending: over horn or block; bend radius >= bar thickness.",
              "Punching: drive a punch through hot metal on pritchel hole.",
              "Forge welding: borax flux, 1300 deg C, scarf joint, hammer blows.",
              "Annealing 850-900 deg C slow cool in furnace; soft for machining.",
              "Normalising 870 deg C air cool; finer pearlite and higher strength.",
            ],
            codeExample: {
              language: "text",
              caption: "Forging a hexagonal head bolt from MS round bar.",
              code:
                `FORGING A HEX BOLT M10 x 50
Stock: MS round bar 12 mm dia, length 80 mm

1. Heat to 1100 deg C (bright orange)
2. Upset head end 20 mm: 12 -> 18 mm dia
   (upset length 1.7 x dia, safe < 3x)
3. Draw shank to final 10 mm dia if needed
4. Flatten head to hex 17 mm across flats
5. Trim hex with hot chisel on chipping block
6. Punch or drill pilot hole (if needed)
7. Cut off with hot chisel
8. Cool in air (normalise) -> fine pearlite
9. Anneal 870 deg C, furnace cool 6 h
10. Thread shank with M10 die

FINAL DIMENSIONS
  Hex A/F   : 17 mm (wrench size)
  Shank dia : 10 mm
  Length    : 50 mm
  Tolerance : ±0.5 mm (forged)
  Finish    : file + thread`,
            },
            diagram: {
              kind: "fork",
              title: "Forging operations selected by the desired shape change",
              caption:
                "Each branch is an operation with a measurable outcome - match the operation to the shape change.",
              start: "A shape change is needed on hot metal",
              branches: [
                { label: "Shorten and thicken the end", outcome: "Upsetting - hammer on end, length <= 3 dia", good: true },
                { label: "Lengthen and thin the bar", outcome: "Drawing out - cross-peen or fuller", good: true },
                { label: "Form an angle", outcome: "Bending - over horn or block, radius >= dia", good: true },
                { label: "Make a hole", outcome: "Punching - punch on pritchel hole", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Why forgings are stronger than machined parts",
              body: "Forging aligns the grain flow with the part outline, while machining cuts across the grain. A forged connecting rod has 20 to 30 percent higher fatigue strength than one machined from bar. RGPV rewards this observation - state it whenever asked 'why is forging preferred for crankshafts, connecting rods and axles'.",
            },
            keyTerms: [
              { term: "Upsetting", definition: "A forging operation that shortens and thickens the work by hammering on its end; upset length <= 3x diameter." },
              { term: "Drawing out", definition: "A forging operation that lengthens and thins the work by hammering on its side with a cross-peen or fuller." },
              { term: "Forge welding", definition: "Joining two pieces of hot steel at 1300 deg C with borax flux and hammer blows on a scarf joint." },
              { term: "Annealing", definition: "Heating a forging to 850-900 deg C and furnace-cooling to soften it for machining." },
              { term: "Normalising", definition: "Heating to 850-900 deg C and air-cooling to refine pearlite and raise strength." },
            ],
            examQuestions: [
              {
                q: "Explain the forging operations of upsetting, drawing out, bending and punching with sketches. Describe forge welding and the heat treatment of forgings (annealing and normalising) with temperatures.",
                marks: 7,
                outline: [
                  "Upsetting: shorten and thicken on end; length <= 3 dia to avoid buckling.",
                  "Drawing out: lengthen and thin with cross-peen or fuller; aligns grain.",
                  "Bending: over horn or block; radius >= bar thickness.",
                  "Punching: drive punch through hot work on pritchel hole.",
                  "Forge welding: borax flux, 1300 deg C, scarf joint, hammer.",
                  "Annealing: 850-900 deg C, furnace cool, soft for machining.",
                  "Normalising: 870 deg C, air cool, finer pearlite and higher strength.",
                ],
              },
              {
                q: "State the rule for maximum upset length.",
                marks: 2,
              },
              {
                q: "Differentiate between annealing and normalising with one purpose each.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT V - MODERN MANUFACTURING AND SAFETY
    // =================================================================
    {
      number: 5,
      roman: "V",
      title: "Modern Manufacturing and Safety",
      summary:
        "Unit V closes with the modern shop. Numerical control (NC, CNC, DNC) and CNC part programming in G-code and M-code; 3D printing processes (FDM, SLA, SLS, SLM) and rapid tooling; automation and industrial robotics with configurations; quality control, inspection and gauges; industrial safety with PPE, machine guarding and first aid; and plant layout types (product, process, fixed, cellular) with lean manufacturing principles.",
      chapter: {
        number: "05",
        title: "Modern Manufacturing and Safety",
        intro:
          "Unit V covers the modern shop and the safety that governs it. Topics are numerical control from NC through CNC and DNC; CNC machine components and part programming in G-code and M-code with a worked rectangle milling example; 3D printing processes (FDM, SLA, SLS, SLM) and rapid tooling; automation and industrial robotics with configurations and applications; quality control basics with inspection tools and process capability; plant layout types (product, process, fixed, cellular); lean manufacturing principles; and industrial safety including accident causes, PPE, machine guarding, fire safety and first aid.",
        inOneBreath:
          "NC controls machine tools with coded numbers on punched tape (1952 MIT); CNC stores the program in a computer (Fanuc, Siemens) and edits at the machine; DNC feeds programs from a host computer to many CNCs. CNC axes are X, Y, Z linear and A, B, C rotary; position accuracy ±0.005 mm closed-loop with encoders. G-code is preparatory: G00 rapid, G01 linear, G02 CW arc, G03 CCW arc, G90 absolute, G91 incremental; M-code is miscellaneous: M03 spindle on, M05 off, M06 tool change, M08 coolant, M30 program end. 3D printing processes: FDM (PLA/ABS filament at 210 deg C, layer 0.2 mm), SLA (UV laser on resin, layer 0.05 mm), SLS (CO2 laser on PA12 powder), SLM (laser on metal powder). Automation levels: fixed (transfer line), programmable (CNC), flexible (FMS). Robot configurations: cartesian, SCARA, articulated, delta; payload 1-200 kg, repeatability ±0.05 mm. Quality = fitness for use; QC detects, QA prevents; Cp = (USL-LSL)/(6 sigma), Cpk >= 1.33 required. Plant layouts: product (assembly line), process (job shop), fixed (ship), cellular (GT). Lean: 5S, JIT, kaizen, 7 wastes. Safety: PPE is helmet, shoes, goggles, gloves, ear plugs; machine guarding fixed, interlocked, two-hand; fire classes A B C D K; first aid ABC.",
        sections: [
          // --- 5.1 ---
          {
            number: "5.1",
            title: "Numerical control: NC, CNC and DNC",
            body: [
              "Numerical control (NC) directs a machine tool's motions by coded numbers rather than by a human operator. The first NC machine was built at MIT in 1952 for the US Air Force; the program was punched on paper tape and read by a hardwired controller. Modern NC has three generations: NC (1950s, punched tape, hardwired controller, no editing at the machine), CNC (1970s, mini-computer controller with program in RAM, editable, with subroutines and canned cycles), and DNC (1980s, a host computer downloads programs to many CNCs over a network). Each generation added flexibility, accuracy and program-management capability.",
              "CNC is the standard today. A CNC machine consists of a machine control unit (MCU) - typically a Fanuc, Siemens, Heidenhain or Haas controller - that reads the part program, interprets G-code and M-code, and commands the servo drives. The drives move the slides via ball screws with anti-backlash preloading; the actual position is fed back by rotary encoders on the motor or linear scales on the slide, closing the loop to ±0.005 mm accuracy. Spindle speeds reach 10000 rpm for production machining and rapid traverse reaches 20 m/min, cutting cycle times dramatically below manual machines.",
              "DNC extends CNC across a shop. A host computer stores all the part programs in a library; when a CNC needs a program, the host downloads it over Ethernet (or in older systems over a serial BTR - behind tape reader - interface). DNC manages program versioning, schedules jobs across machines, and collects production data from each CNC. A mid-sized shop may have 10 to 100 CNC machines fed by one DNC host. Modern DNC also handles tool-life monitoring, machine condition and OEE (overall equipment effectiveness) reporting, integrating the shop into the factory's ERP system.",
              "CNC advantages are well documented. Position accuracy is ±0.005 mm with closed-loop control; repeatability is ±0.005 mm or better, so the 100th part is identical to the 1st. Complex 3D contours - turbine blades, mould cavities, aerospace brackets - are machined that no manual operator could match. The operator does not need high skill, just program loading and tool setting. Setup time is reduced with pallet changers and tool presetting. Lights-out operation is possible for hours at a stretch. The disadvantages are high capital cost (Rs 10 lakh to 10 crore), the need for skilled programmers, and reduced flexibility for one-off parts.",
              "Typical CNC applications include aerospace structural parts in aluminum and titanium, injection mould and die steels hardened to 50 HRC, automotive engine and gearbox components, medical implants, and intricate 3D contours for consumer electronics. A 5-axis CNC machine can machine a turbine blade in one setup, where a 3-axis would need multiple setups with cumulative error. A worked comparison: producing 100 pieces of a complex bracket on a manual milling machine takes 200 hours of skilled labour at Rs 800/hr (Rs 1.6 lakh) plus scrap; the same 100 pieces on a CNC take 20 hours of machine time at Rs 400/hr (Rs 8000) plus Rs 5000 of programming - the CNC pays for itself at this batch size and dominates at larger batches.",
            ],
            bullets: [
              "NC (1952 MIT): punched tape, hardwired controller, no editing.",
              "CNC: microcomputer controller (Fanuc, Siemens), program in RAM, editable.",
              "DNC: host computer feeds many CNCs over Ethernet or BTR.",
              "Closed-loop with encoders: position accuracy ±0.005 mm.",
              "Spindle 10000 rpm; rapid traverse 20 m/min typical.",
              "Aerospace parts, moulds, medical implants, 3D contours.",
              "Disadvantages: high capital cost (Rs 10 lakh to 10 crore), programmer skill needed.",
            ],
            codeExample: {
              language: "text",
              caption: "Evolution of numerical control and accuracy comparison.",
              code:
                `EVOLUTION OF NUMERICAL CONTROL
NC (1952, MIT)
  Punched paper tape -> hardwired controller
  No edits at the machine; obsolete

CNC (1970s+)
  Microcomputer controller (Fanuc, Siemens, Haas)
  Program in RAM, editable
  Tool offsets, subroutines, canned cycles
  Closed-loop with encoder/scale feedback

DNC (1980s+)
  Host computer feeds 10-100 CNC machines
  Program library on server
  BTR (behind tape reader) interface, now Ethernet
  Manages versioning, scheduling, OEE data

POSITION ACCURACY
  Open-loop (stepper)      : ±0.05 mm
  Closed-loop (servo+enc)  : ±0.005 mm
  Closed-loop + linear scale : ±0.001 mm

SPINDLE: 100-10000 rpm
RAPID TRAVERSE: 5-20 m/min`,
            },
            diagram: {
              kind: "layers",
              title: "NC -> CNC -> DNC layered view of control",
              caption:
                "Each layer adds storage, editing and networking capability - memorise the decade and the new feature.",
              layers: [
                { label: "NC (1952, MIT)", note: "punched tape, hardwired controller" },
                { label: "CNC (1970s)", note: "microcomputer, program in RAM, editable" },
                { label: "DNC (1980s)", note: "host feeds many CNCs over Ethernet" },
                { label: "Modern CNC+DNC+ERP", note: "OEE data, scheduling, tool life" },
                { label: "Closed-loop accuracy ±0.005 mm", note: "encoder + ball screw feedback" },
              ],
            },
            callout: {
              type: "exam",
              title: "NC vs CNC vs DNC is a frequent 7-mark question",
              body: "When asked to 'differentiate NC, CNC and DNC', structure your answer as a three-column table: generation, controller, program storage, editing, networking, accuracy. The table fetches 5 marks; a one-line advantage of each adds the remaining 2. Memorise the dates (1952, 1970s, 1980s) - they are easy marks that students often omit.",
            },
            keyTerms: [
              { term: "NC", definition: "Numerical control; machine motions directed by coded numbers on punched tape (MIT, 1952)." },
              { term: "CNC", definition: "Computer numerical control; a microcomputer controller stores and edits the program in RAM." },
              { term: "DNC", definition: "Direct or distributed numerical control; a host computer feeds part programs to many CNCs." },
              { term: "Closed-loop control", definition: "A control system in which encoder feedback verifies the actual slide position and corrects error to ±0.005 mm." },
              { term: "Encoder", definition: "A rotary or linear transducer that reports slide position to the CNC controller for closed-loop feedback." },
            ],
            examQuestions: [
              {
                q: "Differentiate between NC, CNC and DNC. Describe the components of a CNC machine, state its advantages and limitations, and give two typical applications.",
                marks: 7,
                outline: [
                  "NC (1952 MIT): punched tape, hardwired controller, no editing.",
                  "CNC (1970s): microcomputer, program in RAM, editable, subroutines.",
                  "DNC (1980s): host computer feeds many CNCs over Ethernet/BTR.",
                  "Components: MCU, servo drives, ball screws, encoders, machine tool.",
                  "Accuracy ±0.005 mm closed-loop; spindle 10000 rpm; rapid 20 m/min.",
                  "Advantages: complex shapes, repeatability, low operator skill, lights-out.",
                  "Limitations: high capital cost (Rs 10 lakh to 10 crore), needs programmers.",
                ],
              },
              {
                q: "What is DNC and how does it differ from CNC?",
                marks: 2,
              },
              {
                q: "State the position accuracy of an open-loop and a closed-loop CNC system.",
                marks: 3,
              },
            ],
          },
          // --- 5.2 ---
          {
            number: "5.2",
            title: "CNC components and G-code / M-code programming",
            body: [
              "A CNC machine has five component groups. The machine control unit (MCU) is the computer that runs the part program (Fanuc, Siemens, Heidenhain, Haas). The drive system consists of servo motors (5 to 30 kW) driving ball screws with preloaded anti-backlash nuts that convert rotary motion to linear slide motion. The feedback system uses rotary encoders on the motor shaft or linear scales on the slide to close the position loop. The machine tool is the structure - bed, column, spindle, slides - that holds the work and cutter. The feedback devices include limit switches, proximity sensors, and tool-length probes.",
              "CNC axes are labelled systematically. Linear axes are X (right), Y (away from operator), Z (towards spindle). Rotational axes around them are A (around X), B (around Y), C (around Z). A 3-axis CNC moves in X, Y, Z; a 4-axis adds a rotary table (usually A); a 5-axis adds B for tilt - the configuration of choice for turbine blades, moulds and impellers. The right-hand rule fixes the positive direction of each axis. Each axis has its own servo drive and ball screw with encoder feedback, and the MCU coordinates all axes simultaneously for contouring.",
              "G-code (preparatory code) tells the CNC what to do. Common G-codes are G00 rapid traverse (full speed, no cutting), G01 linear interpolation at feed rate, G02 clockwise circular interpolation, G03 counter-clockwise circular interpolation, G90 absolute programming (dimensions from a datum), G91 incremental programming (dimensions from the current point), G20 inch units, G21 mm units, G41/G42 cutter radius compensation left/right, G43 tool length compensation, G54 work offset, G81 drilling canned cycle, G83 peck drilling, G84 tapping canned cycle, and G80 cancel canned cycle.",
              "M-code (miscellaneous code) controls the machine's auxiliary functions. Common M-codes are M00 program stop (operator action), M01 optional stop, M03 spindle on clockwise, M04 spindle on counter-clockwise, M05 spindle stop, M06 tool change, M07 coolant mist on, M08 coolant flood on, M09 coolant off, M19 spindle orient, M30 program end and reset. A complete CNC program begins with safety blocks (G90 G21 G54), then a tool change (M06 T01), spindle start (M03 S1200), moves to a safe position (G00 X0 Y0 Z5), plunges to depth (G01 Z-2 F50), cuts the profile (G01 X50 Y0 F100), retracts (G00 Z5) and ends (M05 M30).",
              "A worked example: mill a 50 x 30 mm rectangle, depth 2 mm, in a 100 x 80 mm MS plate using an 8 mm carbide end mill at S1200, F100. The program in absolute mm: G90 G21; G54; M06 T01; M03 S1200; G00 X0 Y0 Z5; G01 Z-2 F50; G01 X50 Y0 F100; G01 X50 Y30; G01 X0 Y30; G01 X0 Y0; G00 Z5; M05; M30. The cutter plunges at the start corner, cuts around the rectangle at 100 mm/min, and retracts at the end. Total cycle time: plunge 4 s, profile cut 1.8 min, rapid 5 s - about 2 minutes for one part.",
            ],
            bullets: [
              "Components: MCU, servo drives, ball screws, encoders, machine tool.",
              "Axes: X right, Y away, Z up; A, B, C rotate around them.",
              "3-axis (XYZ), 4-axis (+A rotary), 5-axis (+B tilt) for complex contours.",
              "G-code: G00 rapid, G01 linear, G02/G03 arc, G90 abs, G91 incr.",
              "M-code: M03 spindle on, M05 off, M06 tool change, M08 coolant, M30 end.",
              "Cutter radius compensation: G41 left, G42 right; length: G43.",
              "Canned cycles: G81 drill, G83 peck, G84 tap; G80 cancel.",
            ],
            codeExample: {
              language: "gcode",
              caption: "CNC program to mill a 50 x 30 mm rectangle, depth 2 mm.",
              code:
                `G90 G21                 (absolute, mm)
G54                     (work offset)
M06 T01                 (8 mm carbide end mill)
M03 S1200               (spindle on, 1200 rpm)
G00 X0 Y0 Z5            (rapid to start, 5 mm above)
G01 Z-2 F50             (plunge to depth, 50 mm/min)
G01 X50 Y0 F100         (cut bottom edge)
G01 X50 Y30             (cut right edge)
G01 X0  Y30             (cut top edge)
G01 X0  Y0              (cut left edge, close)
G00 Z5                  (retract to safe height)
M05                     (spindle stop)
M30                     (program end)`,
            },
            diagram: {
              kind: "flow",
              title: "CNC program execution flow from start to end",
              caption:
                "Each step is one block of G-code or M-code - the order is fixed and must be memorised.",
              steps: [
                { label: "Safety blocks: G90 G21 G54", note: "absolute, mm, offset" },
                { label: "Tool change: M06 T01, M03 S1200", note: "spindle on at rpm" },
                { label: "Rapid to start: G00 X0 Y0 Z5", note: "above work" },
                { label: "Plunge and cut: G01 Z-2, G01 X50 Y0 F100", note: "feed rate" },
                { label: "Retract and end: G00 Z5, M05, M30", note: "spindle off, program end" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write a G-code snippet in the exam",
              body: "When asked to 'write a CNC part program for...', produce a complete snippet: safety blocks, tool change, spindle on, rapid to start, plunge, cut, retract, end. Even a simple 50 x 30 mm rectangle program fetches the full 7 marks. Use parentheses for comments so the examiner can read your intent.",
            },
            keyTerms: [
              { term: "MCU", definition: "Machine control unit; the computer that interprets G-code and M-code and commands the servo drives." },
              { term: "Axis", definition: "A controlled direction of motion; linear X/Y/Z or rotary A/B/C, with encoder feedback." },
              { term: "G-code", definition: "Preparatory code telling the CNC what to do - G00 rapid, G01 linear, G02/G03 arc, G90 absolute." },
              { term: "M-code", definition: "Miscellaneous code controlling auxiliary functions - M03 spindle on, M06 tool change, M30 end." },
              { term: "Canned cycle", definition: "A pre-defined sequence for a repeated operation - G81 drill, G83 peck drill, G84 tap." },
            ],
            examQuestions: [
              {
                q: "Describe the components of a CNC machine and the axis nomenclature. Explain G-code and M-code with examples, and write a complete CNC part program to mill a 50 x 30 mm rectangle 2 mm deep.",
                marks: 7,
                outline: [
                  "Components: MCU, servo drives, ball screws, encoders, machine tool.",
                  "Axes: X right, Y away, Z up; A, B, C rotary around them; 3/4/5-axis.",
                  "G-code: G00 rapid, G01 linear, G02/G03 arc, G90 absolute, G91 incremental.",
                  "M-code: M03 spindle on, M05 off, M06 tool change, M08 coolant, M30 end.",
                  "Program: G90 G21; G54; M06 T01; M03 S1200; G00 X0 Y0 Z5.",
                  "G01 Z-2 F50; G01 X50 Y0 F100; G01 X50 Y30; G01 X0 Y30; G01 X0 Y0.",
                  "G00 Z5; M05; M30 - end of program.",
                ],
              },
              {
                q: "State the functions of G00, G01 and G90 codes.",
                marks: 2,
              },
              {
                q: "What is the function of M06 and M30 in a CNC program?",
                marks: 3,
              },
            ],
          },
          // --- 5.3 ---
          {
            number: "5.3",
            title: "3D printing processes and rapid tooling",
            body: [
              "Additive manufacturing, popularly called 3D printing, builds parts layer by layer from a digital model, in contrast to subtractive machining that removes material. The ISO/ASTM 52900 standard recognises seven process families: binder jetting, directed energy deposition, material extrusion, material jetting, powder bed fusion, sheet lamination and vat photo-polymerisation. Each family has commercial variants; the four most common in a first-year course are FDM, SLA, SLS and SLM, covering plastic filament, photo-cured resin, sintered polymer powder and laser-melted metal.",
              "Fused Deposition Modelling (FDM) extrudes a thermoplastic filament (PLA, ABS, PETG, nylon) through a heated nozzle at 200 to 260 deg C and deposits it layer by layer on a build plate. Layer height is 0.1 to 0.3 mm; nozzle diameter 0.4 mm typical. PLA prints at 210 deg C with a bed at 60 deg C; ABS at 240 deg C with a bed at 100 deg C and an enclosed chamber. FDM is the cheapest process - a desktop printer costs Rs 20000 - and is used for prototypes, jigs, fixtures and concept models. The drawback is visible layer lines and weak Z-axis strength (the layer-to-layer bond is the weakest direction).",
              "Stereolithography (SLA) uses a UV laser (355 nm) or a LCD mask to cure a photopolymer resin layer by layer. Layer height is 0.025 to 0.1 mm, giving the smoothest surface of any 3D printing process (Ra 0.4 to 1.6 um). After printing the part is washed in isopropanol and post-cured in a UV chamber. Resins include tough (ABS-like), flexible (TPU-like), castable (for investment casting patterns) and dental. SLA is the choice for jewellery masters, dental aligners, and complex housings where surface finish matters. The drawback is resin cost (Rs 5000 to 15000 per litre) and brittleness of cured parts.",
              "Selective Laser Sintering (SLS) uses a CO2 laser to sinter polymer powder (PA12, PA11, TPU) layer by layer in a bed heated to just below the melting point. Layer height is 0.1 mm. The un-sintered powder supports the part, so no separate supports are needed - SLS can produce fully free-form geometries impossible in FDM or SLA. Parts have good mechanical strength (PA12 has tensile strength 50 MPa) and are used for functional prototypes, end-use parts in small batches, and complex ducting. Selective Laser Melting (SLM, also called DMLS) uses a fiber laser (200 to 1000 W) to fully melt metal powder (titanium, stainless steel, aluminum, Inconel) for aerospace and medical implants.",
              "Rapid tooling bridges additive and traditional manufacturing. Soft tooling uses a 3D-printed master to make a silicone rubber mould that casts 20 to 50 polyurethane parts in a few days - ideal for pre-production runs. Hard tooling uses SLM to print an aluminium or steel mould insert directly, lasting 1000 to 10000 shots; this 'bridge tooling' fills the gap between prototype and full production tooling. A worked comparison: producing 10 pieces of a complex bracket by CNC milling takes 100 hours at Rs 800/hr (Rs 80000); by SLS PA12 it takes 30 hours of machine time at Rs 1500/hr (Rs 45000) - additive wins at this batch size and dominates at smaller batches.",
            ],
            bullets: [
              "Seven additive families per ISO/ASTM 52900; four common in first year.",
              "FDM: PLA/ABS filament, nozzle 210 deg C, layer 0.1-0.3 mm; cheapest.",
              "SLA: UV laser on photopolymer resin, layer 0.025-0.1 mm; smoothest finish.",
              "SLS: CO2 laser sinters PA12 powder, layer 0.1 mm; no supports needed.",
              "SLM: fiber laser melts Ti, SS, Al, Inconel for aerospace and medical.",
              "Rapid tooling: silicone mould (soft, 50 parts) or SLM metal insert (1000+ shots).",
              "Additive wins for small batches and complex geometry; CNC wins for large batches.",
            ],
            codeExample: {
              language: "text",
              caption: "Process comparison and PLA print settings.",
              code:
                `3D PRINTING PROCESS COMPARISON
Process | Material       | Layer   | Build | Notes
FDM     | PLA, ABS       | 0.1-0.3 | 1-5h  | cheap, supports
SLA     | Photopolymer   | 0.025   | 2-10h | smooth, UV cure
SLS     | PA12 powder    | 0.1     | 4-15h | no supports
SLM     | Ti, SS, Al     | 0.02-0.1| 5-30h | metal, costly

TYPICAL PLA FDM SETTINGS
  Nozzle temp   : 210 deg C
  Bed temp      : 60 deg C
  Layer height  : 0.20 mm
  Infill        : 20 percent cubic
  Print speed   : 50 mm/s
  Material cost : Rs 1000/kg (PLA)

RAPID TOOLING
  Soft: silicone mould -> 20-50 PU parts
  Hard: SLM metal insert -> 1000+ shots
  Bridge: between prototype and production`,
            },
            diagram: {
              kind: "matrix",
              title: "Four 3D printing processes in a 2x2 of material and layer",
              caption:
                "Quadrant order TL, TR, BL, BR - learn one material, layer height and use per quadrant.",
              axes: { x: "material form (filament/resin vs powder)", y: "polymer vs metal" },
              quadrants: [
                { label: "FDM (filament)", note: "PLA at 210 deg C, 0.2 mm layer" },
                { label: "SLA (resin)", note: "UV laser, 0.025 mm layer" },
                { label: "SLS (polymer powder)", note: "PA12, CO2 laser, 0.1 mm" },
                { label: "SLM (metal powder)", note: "Ti, SS, Inconel, fiber laser" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pair each process with one number",
              body: "RGPV rewards answers that cite a defining number for each process: FDM 0.2 mm layer, SLA 0.025 mm layer, SLS no supports, SLM 1000 W laser. One number per process shows you understand the technology, not just memorised the name. The matrix sketch with these numbers earns four marks.",
            },
            keyTerms: [
              { term: "FDM", definition: "Fused Deposition Modelling; extrudes PLA/ABS filament through a heated nozzle at 200-260 deg C, layer 0.1-0.3 mm." },
              { term: "SLA", definition: "Stereolithography; a UV laser cures a photopolymer resin layer by layer at 0.025-0.1 mm, giving the smoothest finish." },
              { term: "SLS", definition: "Selective Laser Sintering; a CO2 laser sinters PA12 polymer powder in a heated bed; no supports needed." },
              { term: "Rapid prototyping", definition: "The family of additive processes that produce a physical part from a CAD model in hours, for design verification." },
              { term: "Additive manufacturing", definition: "Building a part layer by layer from a digital model; opposite of subtractive machining." },
            ],
            examQuestions: [
              {
                q: "Explain the principle of additive manufacturing. Describe FDM, SLA, SLS and SLM with material, layer height and one application each, and state the role of rapid tooling.",
                marks: 7,
                outline: [
                  "Additive manufacturing builds parts layer by layer from a CAD model.",
                  "ISO/ASTM 52900 defines seven families; four common in first year.",
                  "FDM: PLA/ABS filament, nozzle 210 deg C, layer 0.2 mm, cheap prototypes.",
                  "SLA: UV laser on resin, layer 0.025 mm, smooth finish for jewellery.",
                  "SLS: CO2 laser on PA12 powder, no supports, functional parts.",
                  "SLM: fiber laser melts metal powder (Ti, SS) for aerospace and medical.",
                  "Rapid tooling: silicone mould (soft) or SLM metal insert (hard, 1000+ shots).",
                ],
              },
              {
                q: "State the layer height of SLA and one advantage.",
                marks: 2,
              },
              {
                q: "Why does SLS not require support structures?",
                marks: 3,
              },
            ],
          },
          // --- 5.4 ---
          {
            number: "5.4",
            title: "Automation and industrial robotics",
            body: [
              "Automation replaces human action with self-acting machines. Three levels exist. Fixed automation (also called hard or Detroit automation) uses a transfer line or dedicated machine built for one product at high volume - an engine block transfer line machining 60 blocks per hour; economical only for millions of parts because changeover is expensive. Programmable automation uses CNC machines that run different programs for different parts in batches of 50 to 1000 - the standard for job-shop and small-batch production. Flexible automation (FMS) links CNC machines with automated material handling so batches as small as 1 to 10 are economical.",
              "An industrial robot is a reprogrammable, multi-axis manipulator that moves material, tools or devices through programmed paths. The ISO definition adds that it has at least three axes and is programmable in multiple languages. A robot consists of a base (fixed to the floor or on a track), an arm with waist, shoulder, elbow and wrist joints, and an end effector - a gripper, welding torch, paint gun or inspection probe. Servo motors drive each joint with encoder feedback; the controller coordinates the joints so the end effector follows the programmed path at speeds of 0.5 to 2 m/s.",
              "Five robot configurations cover most industrial tasks. A cartesian robot has three orthogonal linear axes - used for pick-and-place and precision assembly; repeatability ±0.02 mm. A SCARA (Selective Compliance Assembly Robot Arm) has two horizontal rotary joints and one vertical linear axis - used for fast insertion of electronic components at ±0.02 mm repeatability. An articulated robot has 6 rotary joints mimicking a human arm - used for welding, painting, and material handling; payload 5 to 200 kg, reach 0.5 to 3 m. A spherical robot has two rotary and one linear axis - now rare. A parallel (delta) robot has three arms meeting at the end effector - used for ultra-fast pick-and-place of small parts at ±0.1 mm.",
              "Robot selection matches the task. Welding of car bodies uses a 6-axis articulated robot with payload 5 to 20 kg and repeatability ±0.1 mm. Painting uses a 6-axis articulated robot with a paint gun and explosion-proof wrist. PCB assembly uses a SCARA with payload 2 kg and repeatability ±0.02 mm. Palletising cartons uses a 4 or 5-axis articulated robot with payload 50 to 150 kg. Pick-and-place of chocolates uses a delta robot with payload 1 to 3 kg and cycle time 0.3 s. Machine tending (loading a CNC) uses a 5 or 6-axis articulated robot with payload 10 to 50 kg. Collaborative robots (cobots) stop on contact with a human and work without safety cages.",
              "A worked robot cell example. A spot-welding cell for car body side panels has two 6-axis articulated robots facing each other, each with a spot welding gun (35 kg payload, ±0.1 mm repeatability), weld controller at 10000 A, and a positioner that holds the body. Cycle time per car: 90 seconds, 40 welds per robot. The cell produces 40 cars per hour. The robots are programmed offline from the CAD model of the body, taught the weld points in a virtual mock-up, and the program is downloaded to the cell. A typical automotive body has 4000 to 5000 spot welds, mostly done by robots.",
            ],
            bullets: [
              "Automation levels: fixed (transfer line), programmable (CNC), flexible (FMS).",
              "Industrial robot: reprogrammable multi-axis manipulator per ISO definition.",
              "Robot axes: 3 (pick-place) to 6 (articulated); payload 1-200 kg.",
              "Configurations: cartesian, SCARA, articulated, spherical, parallel (delta).",
              "Repeatability ±0.05 mm typical; ±0.02 mm for SCARA and cartesian.",
              "End effectors: gripper, welding torch, paint gun, inspection probe.",
              "Cobots stop on contact with humans and work without safety cages.",
            ],
            codeExample: {
              language: "text",
              caption: "Robot selection by application with payload and repeatability.",
              code:
                `ROBOT SELECTION BY APPLICATION
Task            | Robot type | Payload | Repeatability
Arc welding     | Articulated 6-axis | 5-20 kg | ±0.1 mm
Spot welding    | Articulated 6-axis | 35-100 kg | ±0.2 mm
Painting        | Articulated 6-axis | 10 kg   | ±0.2 mm
PCB assembly    | SCARA        | 2 kg    | ±0.02 mm
Palletising     | Articulated/Cartesian | 50-150 kg | ±0.5 mm
Pick-and-place  | Delta        | 1-3 kg  | ±0.1 mm, 0.3 s cycle
Machine tending | Articulated 5-6 axis | 10-50 kg | ±0.1 mm
Inspection      | Cartesian    | 1 kg    | ±0.05 mm
Cobot welding   | Collaborative 6-axis | 3-10 kg | ±0.03 mm

TYPICAL CAR BODY CELL
  Robots : 2 x 6-axis articulated
  Payload: 35 kg each
  Welds  : 40 per robot per car
  Cycle  : 90 s per car -> 40 cars/hour`,
            },
            diagram: {
              kind: "fork",
              title: "Choosing a robot configuration by task",
              caption:
                "Each branch matches a payload-speed-accuracy requirement - the standard structure for a robot selection answer.",
              start: "Selecting a robot configuration",
              branches: [
                { label: "Heavy payload, large reach, welding", outcome: "Articulated 6-axis, ±0.1 mm", good: true },
                { label: "Fast pick-place in one plane", outcome: "SCARA, ±0.02 mm", good: true },
                { label: "Precise XYZ assembly", outcome: "Cartesian, ±0.02 mm", good: true },
                { label: "Very fast small parts", outcome: "Delta parallel, 0.3 s cycle", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair each configuration with one task",
              body: "RGPV robot questions reward a one-line match: cartesian for precision XYZ assembly, SCARA for fast PCB insertion, articulated for welding and painting, delta for high-speed small-part pick-and-place. State the configuration, payload and repeatability in one line for each - four lines, four marks.",
            },
            keyTerms: [
              { term: "Automation", definition: "Use of self-acting machines to replace human action; levels are fixed, programmable and flexible." },
              { term: "Industrial robot", definition: "A reprogrammable, multi-axis manipulator that moves material, tools or devices through programmed paths (ISO)." },
              { term: "Degrees of freedom", definition: "The number of independent axes a robot can move; 3 for pick-place, 6 for full articulation." },
              { term: "End effector", definition: "The tool at the end of a robot arm - a gripper, welding torch, paint gun or inspection probe." },
              { term: "SCARA", definition: "Selective Compliance Assembly Robot Arm; two horizontal rotary joints plus a vertical linear axis for fast insertion." },
            ],
            examQuestions: [
              {
                q: "Define automation and state its three levels. Define an industrial robot and describe four robot configurations with one application, payload and repeatability for each.",
                marks: 7,
                outline: [
                  "Automation: fixed (transfer line), programmable (CNC), flexible (FMS).",
                  "Robot: reprogrammable multi-axis manipulator per ISO definition.",
                  "Axes 3-6; payload 1-200 kg; repeatability ±0.05 mm typical.",
                  "Cartesian: 3 linear axes, ±0.02 mm, precision assembly.",
                  "SCARA: 2 rotary + 1 linear, ±0.02 mm, PCB insertion.",
                  "Articulated: 6 rotary joints, 5-200 kg, welding and painting.",
                  "Delta: 3 parallel arms, 1-3 kg, 0.3 s cycle, fast pick-and-place.",
                ],
              },
              {
                q: "What is a collaborative robot (cobot)?",
                marks: 2,
              },
              {
                q: "State the typical payload and repeatability of an articulated welding robot.",
                marks: 3,
              },
            ],
          },
          // --- 5.5 ---
          {
            number: "5.5",
            title: "Quality control, plant layout and lean manufacturing",
            body: [
              "Quality is 'fitness for use' (Juran) - the part meets the customer's need at an acceptable price. Quality control (QC) detects defects by inspection at three stages: receiving (incoming material), in-process (during manufacture), and final (before dispatch). Quality assurance (QA) prevents defects by controlling the process - design reviews, statistical process control, supplier certification, training. Inspection tools range from a steel rule (±0.5 mm) through vernier caliper (±0.02 mm), micrometer (±0.01 mm), Go/No-Go gauges (attribute pass/fail) and coordinate measuring machine (CMM, ±0.001 mm).",
              "Statistical process control (SPC) uses control charts to monitor a process in real time. An X-bar chart tracks the sample mean against upper and lower control limits set at plus and minus three sigma from the process mean; an R chart tracks the sample range. As long as points stay within limits and show no trend, the process is in control. Process capability is measured by Cp = (USL - LSL) / (6 sigma) and Cpk = min((USL - mean), (mean - LSL)) / (3 sigma), where USL and LSL are specification limits. A capable process has Cp >= 1.33 and Cpk >= 1.33, equivalent to 4-sigma quality.",
              "A worked capability example: a shaft diameter has spec limits USL = 10.05 mm and LSL = 9.95 mm. The process mean is 10.00 mm with standard deviation sigma = 0.01 mm. Then Cp = (10.05 - 9.95) / (6 x 0.01) = 0.10 / 0.06 = 1.67 and Cpk = min(0.05, 0.05) / (3 x 0.01) = 1.67. The process is capable (Cpk >= 1.33). If the mean shifts to 10.03 mm with the same sigma, Cp stays 1.67 but Cpk drops to min(0.02, 0.07) / 0.03 = 0.67 - the process is no longer capable and parts will be out of spec, even though the spread is unchanged. The mean shift must be corrected.",
              "Plant layout arranges machines and workstations to optimise material flow. Product layout (or line layout) arranges machines in the sequence of operations for one product - an automobile assembly line where the chassis moves from station to station at 60 cars per hour; high volume, low variety. Process layout (or functional layout) groups similar machines together - a job shop where lathes, mills and drills are in separate bays and parts travel between bays on carts; low volume, high variety. Fixed layout brings tools and workers to the product because the product is too large to move - a ship, an aircraft, a large pressure vessel. Cellular layout groups machines into cells by part family (group technology) for mid-volume mid-variety production.",
              "Lean manufacturing eliminates waste (muda) from the production process. The Toyota Production System identifies seven wastes: overproduction (making more than needed), waiting (idle time between operations), transport (moving parts unnecessarily), over-processing (doing more work than the spec needs), inventory (work-in-process), motion (operator movement), and defects (rework and scrap). Tools include 5S (Sort, Set in order, Shine, Standardise, Sustain) for workplace organisation, just-in-time (JIT) producing only what the next process needs, kaizen (continuous improvement), poka-yoke (mistake-proofing), and value stream mapping. A worked result: applying 5S and JIT to a small valve shop reduced lead time from 14 days to 4 days and work-in-process inventory by 70 percent - typical of lean transformations.",
            ],
            bullets: [
              "Quality = fitness for use; QC detects, QA prevents.",
              "Inspection at receiving, in-process and final stages.",
              "Tools: vernier ±0.02 mm, micrometer ±0.01 mm, Go/No-Go gauge, CMM ±0.001 mm.",
              "Cp = (USL-LSL)/(6 sigma); Cpk >= 1.33 required for capable process.",
              "Product layout: assembly line; process layout: job shop.",
              "Fixed layout: ship, aircraft; cellular layout: group technology.",
              "Seven wastes: overproduction, waiting, transport, over-process, inventory, motion, defects.",
            ],
            codeExample: {
              language: "text",
              caption: "Plant layout types and a process-capability calculation.",
              code:
                `PLANT LAYOUT TYPES
Layout type | Best for              | Example
Product     | high-volume, 1 type   | auto assembly line
Process     | job shop, variety     | tool room, machine shop
Fixed       | large project         | ship, aircraft, pressure vessel
Cellular    | mid-volume families   | group technology cell

PROCESS CAPABILITY
Spec limits: USL = 10.05, LSL = 9.95 mm
Mean = 10.00 mm, sigma = 0.01 mm
Cp = (USL - LSL)/(6*sigma)
   = (10.05 - 9.95)/(6*0.01)
   = 0.10/0.06 = 1.67
Cpk = min(USL-mean, mean-LSL)/(3*sigma)
    = min(0.05, 0.05)/(3*0.01)
    = 0.05/0.03 = 1.67

VERDICT: Cpk >= 1.33 -> process capable

LEAN SEVEN WASTES (muda)
  Overproduction, Waiting, Transport,
  Over-process, Inventory, Motion, Defects`,
            },
            diagram: {
              kind: "matrix",
              title: "Four plant layout types in a 2x2 of volume and variety",
              caption:
                "Quadrant order TL, TR, BL, BR - match the layout to volume and variety of the product.",
              axes: { x: "production volume (low to high)", y: "product variety (low to high)" },
              quadrants: [
                { label: "Product layout", note: "high volume, low variety - assembly line" },
                { label: "Cellular layout", note: "mid volume, mid variety - GT cell" },
                { label: "Process layout", note: "low volume, high variety - job shop" },
                { label: "Fixed layout", note: "very low volume, very large product - ship" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cpk formula and the 1.33 threshold",
              body: "Cp and Cpk questions are frequent 7-mark numericals. Always write Cp = (USL - LSL) / (6 sigma) and Cpk = min(USL - mean, mean - LSL) / (3 sigma) before substituting. The 1.33 threshold corresponds to 4-sigma quality and is the industry minimum. Stating 'Cpk >= 1.33 -> process capable' earns the conclusion mark.",
            },
            keyTerms: [
              { term: "Quality control", definition: "Detection of defects by inspection at receiving, in-process and final stages." },
              { term: "Inspection", definition: "Measurement of a dimension or attribute against specification; tools include vernier, micrometer and Go/No-Go gauge." },
              { term: "Process capability (Cpk)", definition: "Index min(USL-mean, mean-LSL)/(3 sigma); a process is capable when Cpk >= 1.33." },
              { term: "Plant layout", definition: "The arrangement of machines and workstations to optimise material flow; types are product, process, fixed and cellular." },
              { term: "Lean manufacturing", definition: "A philosophy of eliminating the seven wastes (muda) using 5S, JIT, kaizen and poka-yoke." },
            ],
            examQuestions: [
              {
                q: "Define quality. Explain quality control vs quality assurance, and list three inspection tools. Describe four plant layout types with examples, and state the principles of lean manufacturing.",
                marks: 7,
                outline: [
                  "Quality = fitness for use; QC detects, QA prevents.",
                  "Inspection at receiving, in-process, final; tools vernier, micrometer, Go/No-Go, CMM.",
                  "Product layout: assembly line, high volume, low variety.",
                  "Process layout: job shop, low volume, high variety.",
                  "Fixed layout: ship or aircraft; cellular layout: GT cell.",
                  "Lean: 7 wastes (overproduction, waiting, transport, over-process, inventory, motion, defects).",
                  "Tools: 5S, JIT, kaizen, poka-yoke, value stream mapping.",
                ],
              },
              {
                q: "State the formula for Cp and the threshold value of Cpk.",
                marks: 2,
              },
              {
                q: "List any four of the seven wastes in lean manufacturing.",
                marks: 3,
              },
            ],
          },
          // --- 5.6 ---
          {
            number: "5.6",
            title: "Industrial safety: accidents, PPE, guarding, fire and first aid",
            body: [
              "Industrial safety prevents harm to people, equipment and the environment. Heinrich's study of 75000 accidents found that 88 percent arise from unsafe acts (human error - removing a guard, wearing loose clothing), 10 percent from unsafe conditions (unguarded machine, oil on the floor), and 2 percent from unavoidable causes. The lesson is that safety begins with people: training, supervision and a culture that stops work when a hazard appears. The cost of an accident includes medical care, lost work time, equipment damage, regulatory penalty and the demoralisation of the workforce.",
              "Personal protective equipment (PPE) is the last line of defence after engineering and administrative controls. Standard PPE includes an ISI-marked helmet with chin strap (falling objects), safety shoes with steel toe and oil-resistant sole (impact and puncture), goggles or face shield of DIN grade (flying chips and UV), cotton apron or fire-resistant coverall (heat and sparks), gloves cut-resistant for handling sharp edges and leather for welding, ear plugs or muffs for noise above 85 dB, and a respirator for dust and fume. PPE must fit, be maintained and be replaced when worn.",
              "Machine guarding protects the operator from rotating, reciprocating and point-of-operation hazards. Four types are recognised. A fixed guard is a permanent barrier (interlocked mesh around a press); removing it requires a tool. An interlocked guard is connected to the machine controls so opening it cuts power (a lathe chuck guard that stops the spindle when opened). An adjustable guard can be moved to suit different work but stays in place during operation. A two-hand control or two-hand trip device requires both hands on buttons outside the danger zone, ensuring the hands are clear when the press strokes. OSHA and the Indian Factories Act mandate guarding at every point of operation.",
              "Fire safety rests on the right extinguisher for the burning material. Class A (water) for solids like wood, paper and cloth; Class B (foam or CO2) for liquids like oil, paint and petrol; Class C (CO2 or dry powder) for gases and electrical fires - never water on electrical; Class D (special dry powder such as sodium chloride or Met-L-X) for metals like magnesium, titanium and sodium that react with water; Class K (wet chemical) for kitchen oils and fats. A factory must display extinguisher locations, train operators, and inspect extinguishers monthly. The fire triangle - fuel, oxygen, heat - is broken by removing any one.",
              "First aid is the immediate care given before professional medical help arrives. The ABC priority stands: open the Airway (tilt the head, lift the chin), check Breathing (look, listen, feel for 10 seconds), check Circulation (pulse and severe bleeding). For an electric shock, cut the power first - never touch the victim until the current is off. For burns, cool with running water for 20 minutes, do not apply ointment or break blisters. For cuts, apply pressure with a clean cloth, elevate the limb. For fractures, immobilise without straightening. A first-aid kit contains bandages, antiseptic, scissors, adhesive tape, sterile gauze, a splint, a CPR mask and a rescue blanket. CPR (30 compressions : 2 breaths at 100 per minute) is given when there is no pulse.",
            ],
            bullets: [
              "Heinrich: 88 percent of accidents from unsafe acts, 10 percent unsafe conditions.",
              "PPE: ISI helmet, steel-toe shoes, DIN goggles, cotton apron, gloves, ear plugs, respirator.",
              "Machine guarding: fixed, interlocked, adjustable, two-hand control.",
              "Fire classes: A (water) solids, B (foam/CO2) liquids, C (CO2) electrical, D (special) metals, K (wet) kitchen.",
              "Fire triangle: fuel + oxygen + heat; remove one to extinguish.",
              "First aid priority ABC: Airway, Breathing, Circulation.",
              "CPR: 30 compressions : 2 breaths at 100 per minute.",
            ],
            codeExample: {
              language: "text",
              caption: "Industrial safety checklist by category.",
              code:
                `INDUSTRIAL SAFETY CHECKLIST (shop floor)

PERSONAL PROTECTION
  - ISI helmet (with chin strap)
  - Safety shoes (steel toe, oil-resistant sole)
  - Goggles or face shield (cutting, grinding)
  - Cotton apron or coverall (no loose clothes)
  - Ear plugs (noise >85 dB)
  - Gloves (cut/heat as needed)

MACHINE GUARDING
  - Fixed guard on rotating parts
  - Interlocked guard (auto-cuts power)
  - Two-hand control on presses

FIRE EXTINGUISHER (by class)
  Class A : wood/paper (water)
  Class B : oil/paint (foam, CO2)
  Class C : electrical (CO2, dry powder)
  Class D : magnesium (special powder)
  Class K : kitchen oils (wet chemical)

FIRST AID
  Priority: ABC (airway, breathing, circulation)
  Electric shock: cut power first, no direct touch
  Burns: cool with water 20 min, no ointment
  Cuts: pressure + elevate, clean cloth
  CPR: 30 compressions : 2 breaths at 100/min`,
            },
            diagram: {
              kind: "fork",
              title: "Hazard response branches by type",
              caption:
                "Each branch matches a hazard to its protective response - the structure of an industrial safety answer.",
              start: "An industrial hazard appears",
              branches: [
                { label: "Falling object or foot impact", outcome: "Helmet + steel-toe shoes (PPE)", good: true },
                { label: "Flying chips or UV rays", outcome: "Goggles or face shield (PPE)", good: true },
                { label: "Electric shock", outcome: "Cut power first, then CPR", good: true },
                { label: "Fire by material", outcome: "Correct extinguisher class A/B/C/D/K", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Never use water on an electrical fire",
              body: "Class C fires (electrical) are fought with CO2 or dry powder, never water - water conducts electricity and electrocutes the operator. Similarly, never use water on a Class D metal fire (magnesium, sodium) - the metal reacts with water to release hydrogen and explode. State the fire class and the correct extinguisher in the safety answer.",
            },
            keyTerms: [
              { term: "Unsafe act", definition: "A human action that risks an accident - removing a guard, wearing loose clothing, not using PPE; 88 percent of accidents per Heinrich." },
              { term: "PPE", definition: "Personal protective equipment - helmet, shoes, goggles, gloves, ear plugs, respirator - the last line of defence against hazards." },
              { term: "Machine guarding", definition: "A barrier or device at the point of operation; types are fixed, interlocked, adjustable and two-hand control." },
              { term: "Fire extinguisher", definition: "A portable device that breaks the fire triangle; class A (water) for solids, B (foam/CO2) for liquids, C (CO2) for electrical, D for metals, K for kitchen." },
              { term: "First aid", definition: "Immediate care given before medical help arrives; priority is ABC - airway, breathing, circulation." },
            ],
            examQuestions: [
              {
                q: "Discuss the causes of industrial accidents. Describe the PPE used in a workshop, the types of machine guarding, the classes of fire with extinguishers, and the ABC first-aid priority.",
                marks: 7,
                outline: [
                  "Heinrich: 88 percent unsafe acts, 10 percent unsafe conditions, 2 percent unavoidable.",
                  "PPE: ISI helmet, steel-toe shoes, DIN goggles, cotton apron, gloves, ear plugs, respirator.",
                  "Machine guarding: fixed, interlocked, adjustable, two-hand control.",
                  "Fire classes: A water for solids, B foam/CO2 for liquids, C CO2 for electrical, D for metals, K wet for kitchen.",
                  "Fire triangle: fuel + oxygen + heat; remove one to extinguish.",
                  "First aid ABC: open Airway, check Breathing, check Circulation.",
                  "Electric shock: cut power first; CPR 30:2 at 100/min if no pulse.",
                ],
              },
              {
                q: "State the fire classes and the extinguisher for each.",
                marks: 2,
              },
              {
                q: "List any four items of PPE used in a workshop.",
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
      heading: "Exam weight map",
      body: [
        "Topics ranked by typical RGPV exam weight. The weight is the share of total marks over a typical paper; the note names the question type to expect.",
      ],
      weightedTopics: [
        { topic: "Casting - gating system and riser design", weight: "18 percent", note: "Two 7-mark questions typical; sketch gating components and apply Chvorinov's rule." },
        { topic: "Sand casting - pattern allowances", weight: "10 percent", note: "Five allowances with values; worked example for a 100 mm cast iron block." },
        { topic: "Casting defects and special casting methods", weight: "8 percent", note: "Defect-to-cause-to-remedy table; die vs centrifugal vs investment." },
        { topic: "Arc welding - principle, electrodes, polarity", weight: "12 percent", note: "Sketch arc circuit; decode E7018; compare DCEN vs DCEP." },
        { topic: "Gas welding - flame types", weight: "8 percent", note: "Three flames with ratios and applications." },
        { topic: "Resistance welding - spot, seam, projection", weight: "8 percent", note: "Q = I^2 R t; spot cycle parameters for 1 mm MS." },
        { topic: "Soldering and brazing", weight: "6 percent", note: "Differences table; capillary action principle." },
        { topic: "Machining parameters, MRR, Taylor tool life", weight: "12 percent", note: "Numerical: V = pi D N / 1000; MRR = 1000 V f d." },
        { topic: "Lathe operations and thread cutting", weight: "10 percent", note: "Gear ratio i = work pitch / leadscrew pitch for M10." },
        { topic: "CNC and G-code programming", weight: "12 percent", note: "Write a G-code snippet for a rectangle; M-code functions." },
        { topic: "Industrial safety - PPE, guarding, fire, first aid", weight: "6 percent", note: "ABC first aid; fire classes; never water on electrical." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: ["Six weeks at 8 hours per week covers the entire BT-106 syllabus with revision. Adjust the weekly hours to your pace but keep the sequence."],
      weeks: [
        {
          week: "Week 1",
          focus: "Manufacturing classification and casting fundamentals",
          tasks: [
            "Read Unit I sections 1.1, 1.2 and 1.3; make notes on the five process families.",
            "Practice the worked pattern-allowance example for a 100 mm cast iron block.",
            "Memorise shrinkage values: CI 1 percent, steel 2 percent, Al 1.25 percent, brass 1.5 percent.",
            "Sketch the sand mould cross-section (cope, drag, sprue, runner, gate, riser, core).",
          ],
        },
        {
          week: "Week 2",
          focus: "Gating system, casting defects and special casting methods",
          tasks: [
            "Read Unit I sections 1.4, 1.5 and 1.6 on moulding sand, gating and defects.",
            "Apply Chvorinov's rule t = C (V/A)^n to a 50 mm cube needing a riser.",
            "Tabulate casting defects with cause and remedy; memorise 8 entries.",
            "Compare die, centrifugal and investment casting in a 3-column table.",
          ],
        },
        {
          week: "Week 3",
          focus: "Welding methods - gas, arc, resistance",
          tasks: [
            "Read Unit II sections 2.1 to 2.4.",
            "Draw the three oxy-acetylene flames with ratios and applications.",
            "Memorise electrode classification: E6013 rutile, E7018 low-hydrogen, E6010 cellulosic.",
            "Compute spot weld parameters for 1 mm MS: 10000 A, 0.2 s, 6 mm nugget.",
          ],
        },
        {
          week: "Week 4",
          focus: "Soldering, brazing, welding defects and safety",
          tasks: [
            "Read Unit II sections 2.5 and 2.6.",
            "Make a comparison table of soldering vs brazing.",
            "List welding defects with causes and remedies in a 7-row table.",
            "Memorise PPE and DIN shade 9-13; fume extraction 0.5 m/s face velocity.",
          ],
        },
        {
          week: "Week 5",
          focus: "Machining and machine tools",
          tasks: [
            "Read Unit III sections 3.1 to 3.6.",
            "Practice machining calculations: N = 1000V/(pi D); MRR = 1000 V f d; T = L/(f N).",
            "Sketch lathe anatomy and label headstock, carriage, tailstock, lead screw.",
            "Compute gear ratio for M10 x 1.5 on a 6 mm leadscrew: i = 0.25.",
          ],
        },
        {
          week: "Week 6",
          focus: "Sheet metal, fitting, smithy, modern manufacturing and safety",
          tasks: [
            "Read Units IV and V in full.",
            "Practice sheet metal blank D = sqrt(d^2 + 4dh) for a cup.",
            "Write a G-code snippet for a 50 x 30 mm rectangle from memory.",
            "Memorise the safety checklist: PPE, guarding types, fire classes, ABC first aid.",
          ],
        },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Revise the seven tables: process families, pattern allowances, casting defects, welding defects, electrode selection, tool materials, defect-cause-remedy.",
        "Re-memorise the five pattern allowances with numerical values (CI shrinkage 1 percent).",
        "Memorise the three oxy-acetylene flames with ratios and one application each.",
        "Rehearse the machining numerical chain: V -> N -> MRR -> T_pass -> Taylor life.",
        "Write the G-code rectangle program from memory once, by hand.",
        "List the five PPE items and the ABC first-aid priority.",
        "Skip deep numericals you have not practised; focus on definitions and labelled diagrams.",
        "Sleep 7 hours; carry two pens, a sharp pencil, an eraser and a 30 cm scale.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Read the full paper in the first 5 minutes; mark the questions you can answer best.",
        "Start with the 7-mark question you know best to build confidence and time buffer.",
        "Always add a neat labelled diagram - sketch the gating system, arc circuit, lathe or mould.",
        "Cite specific values: CI shrinkage 1 percent, E7018 bake 350 deg C, HSS 40 m/min, carbide 200 m/min.",
        "Use tables for comparison questions (soldering vs brazing, DCEN vs DCEP, NC vs CNC vs DNC).",
        "End each answer with a one-line conclusion that names the take-away.",
        "Keep the last 10 minutes for review: check labels on diagrams and numbers in numericals.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Confusing shrinkage allowance values: CI 1 percent, steel 2 percent, Al 1.25 percent - write the alloy name beside each value.",
        "Mixing DCEN and DCEP polarity: DCEN means electrode negative, work positive, deep penetration.",
        "Using the wrong flame for brass: oxidising flame (not neutral) for brass to burn off zinc.",
        "Forgetting to add core prints when designing a pattern with internal cavities.",
        "Inverting the gating ratio order: pressurised 1:2:1 (sprue:runner:gate), unpressurised 1:2:2.",
        "Mis-writing the MRR formula: turning MRR = 1000 V f d (mm^3/min with V in m/min).",
        "Wrong grinding wheel spec order: A - 60 - K - 8 - V (abrasive, grit, grade, structure, bond).",
        "Skipping the PPE list in the safety question; the easiest 2 marks in the paper, often lost.",
      ],
    },
  ],
};
