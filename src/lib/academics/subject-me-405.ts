/**
 * Academics - RGPV ME 4th-semester subject: ME-405 Manufacturing Technology.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me405: AcademicSubject = {
  id: "me-405",
  code: "ME-405",
  title: "Manufacturing Technology",
  semester: "IV Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to manufacturing technology for mechanical engineering: foundry work from patterns to centrifugal casting, the welding families, plastic deformation from rolling to sheet metal, the mechanics of machining and tool life, and the unconventional and CNC processes that finish the story.",
  description:
    "Five units walk the life of a metal part. Unit I pours it - pattern allowances, moulding sand, gating and riser design with Chvorinov's rule, defect diagnosis and the special casting routes. Unit II joins it - arc, gas, resistance and solid-state welding with their defects and inspection ladder. Unit III shapes it without chips - hot and cold working, rolling, forging, extrusion, drawing and sheet-metal operations. Unit IV cuts it - orthogonal cutting theory, tool materials, Taylor's tool-life economics and the turn-drill-mill-grind quartet. Unit V escapes the tool - USM, EDM, LBM and ECM, then NC, CNC, part programming in G-code and the flexible manufacturing systems that tie a shop together. Every section pairs the theory with a redrawable diagram, a worked table or program, and the questions RGPV actually asks.",
  accentColor: "#f59e0b",
  emoji: "MT",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Casting Processes",
      summary:
        "The foundry: patterns and their five allowances, moulding sand ingredients, properties and testing, gating systems and riser design with Chvorinov's rule, defect diagnosis with remedies, and the special casting routes - die, investment and centrifugal.",
      chapter: {
        number: "01",
        title: "Casting Processes",
        intro:
          "Unit I covers the foundry floor: pattern materials, types and allowances; moulding sand composition, essential properties and standard tests; the gating system and riser design driven by Chvorinov's rule; the five families of casting defects and their remedies; and the special casting routes - pressure die casting, investment casting and centrifugal casting - that trade tooling cost against accuracy, rate and soundness.",
        inOneBreath:
          "Casting pours liquid into a cavity and lets physics finish the job: a pattern bigger than the part by five allowances shapes a mould of tested sand; a tapered gating system carries the metal in while a riser sized by Chvorinov's rule feeds its shrinkage; defects name their causes so remedies can be aimed; and die, investment and centrifugal casting buy accuracy, rate and soundness at the price of tooling.",
        sections: [
          {
            number: "1.1",
            title: "Patterns and pattern allowances",
            body: [
              "A pattern is the replica of the object to be cast, used to form the mould cavity in moulding sand. It is never identical to the finished casting: it is enlarged by allowances, tapered for withdrawal, split where the shape demands, and fitted with core prints that later locate separate sand cores. Pattern material follows batch size and accuracy. Wood (teak, deodar, pine) is cheap and quick to shape but wears and swells with moisture, so it suits small lots and jobbing work. Cast iron, aluminium and brass patterns survive hundreds of thousands of moulds and hold their dimensions, so they pay off on long runs. Epoxy and plastics sit in between, and wax patterns are consumed inside investment casting.",
              "Pattern types follow the geometry of the part. A solid or single-piece pattern is cheapest and suits simple shapes moulded in one box. A split pattern divides along the parting line and aligns on dowels, so deep shapes can be moulded in cope and drag. A match-plate pattern mounts the two halves with the gating on opposite faces of one plate that matches the flask joint - the standard for machine moulding. A cope-and-drag pattern is the same idea scaled up for large castings. Loose-piece patterns carry projections on separately withdrawable dowels so undercuts can be moulded, while sweep and skeleton patterns replace the full pattern for large one-off castings, sweeping the cavity profile through the sand instead of copying it.",
              "Five allowances are added because metal shrinks and moulds are imperfect. Shrinkage or contraction allowance (positive: about 0.8-1.0% for grey cast iron, 1.3% for aluminium, 1.5-2.0% for steel) compensates liquid-to-solid contraction, and the patternmaker uses a contraction or shrink rule that is already longer per millimetre so no arithmetic is repeated. Machining allowance (2-6 mm on small castings, more on large) leaves extra metal on faces to be finished. Draft or taper (0.5-2 deg on external faces, more inside) lets the pattern leave the sand without tearing the mould. Distortion allowance (positive or negative by part) pre-bends long thin or U-shaped castings that will warp on cooling. Shake or rapping allowance is negative: rapping the pattern to free it slightly enlarges the cavity, so the pattern is made marginally small.",
            ],
            bullets: [
              "Pattern vs casting: the pattern is oversized, tapered, often split, and carries core prints; the casting is what the cavity gives.",
              "Materials: wood for a few moulds, cast iron and aluminium for long runs, plastics for medium duty, wax consumed in investment casting.",
              "Types: solid, split, match-plate, cope-and-drag, loose-piece, gated, sweep and skeleton - chosen by shape, size and batch.",
              "Five allowances: shrinkage (+), machining (+), draft (+), distortion (either sign by geometry), shake (-).",
              "Shrink rule: a pre-scaled rule that bakes contraction in - grey CI about 1%, steel 1.5-2.0%, aluminium about 1.3%.",
            ],
            table: {
              caption: "The five pattern allowances at a glance.",
              headers: ["Allowance", "Purpose", "Typical value", "Sign"],
              rows: [
                ["Shrinkage", "offset liquid and solid contraction", "0.8-2.0% by alloy", "+"],
                ["Machining", "stock for finishing cuts", "2-6 mm on small work", "+"],
                ["Draft", "clean vertical withdrawal", "0.5-2 deg (more inside)", "+"],
                ["Distortion", "counter expected warp", "varies with shape", "+/-"],
                ["Shake", "cavity grows when pattern is rapped", "about 0.5-1 mm", "-"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Designing a pattern from the component drawing",
              caption: "Six decisions turn a drawing into a mould-ready pattern.",
              steps: [
                { label: "Study the drawing", note: "parting line, projections, cores" },
                { label: "Choose pattern material", note: "wood, metal, plastic or wax" },
                { label: "Fix the pattern type", note: "solid, split, match plate, sweep" },
                { label: "Add the five allowances", note: "shrink, machining, draft, distortion, shake" },
                { label: "Add core prints and loose pieces", note: "internal cavities and undercuts" },
                { label: "Finish and verify", note: "smooth faces, shrink-rule check" },
              ],
            },
            callout: {
              type: "exam",
              title: "The allowances question is a fixture",
              body: "Write all five allowance names, one typical value each, and the sign - shrinkage, machining and draft are positive, shake is negative, distortion depends on part geometry. Then sketch a split pattern with dowels, core print and draft marked. That combination collects full marks almost every session.",
            },
            keyTerms: [
              { term: "Pattern", definition: "A replica of the component used to form the mould cavity; it differs from the casting by allowances, draft and core prints." },
              { term: "Draft allowance", definition: "The taper given on vertical faces of a pattern so it can be withdrawn without damaging the mould." },
              { term: "Shrink rule", definition: "A measuring rule pre-scaled by the alloy's contraction so pattern dimensions already include the shrinkage allowance." },
            ],
            examQuestions: [
              {
                q: "What is a pattern? In what respects does it differ from the finished casting? Explain the types of patterns and the allowances provided on a pattern, with typical values.",
                marks: 7,
                outline: [
                  "Define pattern and state its purpose in moulding.",
                  "List differences from the casting: allowances, draft, core prints, split construction.",
                  "Describe types: solid, split, match-plate, cope-and-drag, loose-piece, sweep and skeleton.",
                  "Explain shrinkage allowance with values for CI, steel and aluminium; mention the shrink rule.",
                  "Explain machining and draft allowances with typical values.",
                  "Explain distortion and shake allowances, noting that shake is negative.",
                  "Close with selection factors: quantity, size, accuracy and cost.",
                ],
              },
              {
                q: "Why is shake allowance negative while shrinkage allowance is positive?",
                marks: 2,
              },
              {
                q: "State two advantages of a match-plate pattern over a solid pattern for machine moulding.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Moulding sands: ingredients, properties and testing",
            body: [
              "Moulding sand is a mixture, not just sand. Silica sand (SiO2) supplies refractoriness and forms the bulk. Clay, usually bentonite, coats the grains and, activated by water, develops the bind strength that lets a vertical wall of sand hold its shape; too little water gives crumbly moulds and too much drowns permeability. Additives tune behaviour: finely ground coal dust or sea coal generates reducing gases and improves the as-cast surface, wood flour burns out to keep the mould permeable and collapsible, and cereals such as dextrin raise green and dry strength. Natural sands arrive from the pit with clay already attached but vary seam to seam; synthetic sands are blended from washed silica, bentonite and additives to a controlled recipe, which is why machine foundries use them.",
              "A good moulding sand must show nine properties, and every one prevents a specific failure. Refractoriness stops the sand fusing against hot metal. Permeability and porosity let mould gases and metal steam escape, or the casting grows blowholes. Green strength holds the damp mould together during pattern withdrawal; dry strength holds the dried surface after the torch; hot strength resists metal pressure at pouring temperature. Collapsibility lets the mould break down at shakeout and lets the casting contract without tearing. Cohesiveness is the grain-to-grain bond, adhesiveness lets sand stick to flask and bonding surfaces where needed, and flowability or mouldability lets the sand pack uniformly around the pattern. Every property is a trade: finer grains improve finish but choke permeability; more clay and water raise strength but trap gas.",
              "Testing keeps the recipe honest, shift by shift. Moisture content is read with a calcium-carbide moisture tell-tale or by oven drying. Clay content is measured in the sand washer: wash, settle and decant until only clay-free silica remains. Grain fineness number (GFN) comes from a sieve shaker as a weighted average of retained percentages - fine facing sands read around 60-80, coarser backing sands lower. The permeability meter gives the permeability number, and the universal sand testing machine measures green and dry compression strength, typically tens of kilopascals for a working green sand. A dial hardness tester surveys ramming uniformity spot to spot across the mould face.",
            ],
            bullets: [
              "Four basic ingredients: silica sand (refractory bulk), clay (binder), water (activates the clay film) and additives (sea coal, wood flour, cereals).",
              "Nine properties to quote: refractoriness, permeability, green strength, dry strength, hot strength, collapsibility, cohesiveness, adhesiveness, flowability.",
              "Natural vs synthetic sand: natural arrives clay-coated but variable; synthetic is blended and reproducible - machine foundries standardise on synthetic.",
              "Every property trades: finer grains better the finish but lower permeability; more clay and water raise strength but trap gas.",
              "Standard tests: moisture tell-tale, sand washer (clay), sieve shaker (GFN), permeability meter, universal strength tester, dial hardness tester.",
            ],
            table: {
              caption: "Foundry sand tests and what they certify.",
              headers: ["Test", "Equipment", "Property checked", "Typical reading"],
              rows: [
                ["Moisture", "moisture tell-tale", "water content", "3-5%"],
                ["Clay content", "sand washer", "active clay", "8-15%"],
                ["Grain fineness", "sieve shaker", "grain size distribution", "GFN 50-80"],
                ["Permeability", "permeability meter", "gas escape capacity", "100-200"],
                ["Green compression", "universal sand tester", "damp mould strength", "30-100 kPa"],
                ["Mould hardness", "dial hardness tester", "ramming uniformity", "60-80 dial units"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Natural sand vs synthetic sand",
              caption: "Why production foundries blend their own sand.",
              left: {
                heading: "Natural sand",
                items: [
                  "Dug with clay already attached",
                  "Composition varies seam to seam",
                  "Cheaper for small jobbing foundries",
                  "Refractoriness limited by impurities",
                  "Used with facing and backing blends",
                ],
              },
              right: {
                heading: "Synthetic sand",
                items: [
                  "Washed silica + bentonite + additives",
                  "Every property reproducible batch to batch",
                  "Strength and permeability blended to order",
                  "Needs a sand plant and muller",
                  "The default on machine moulding lines",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Answer in pairs",
              body: "When asked to state the properties of moulding sand, give at least seven with one-line reasons, and pair each property with the defect it prevents - permeability prevents blowholes, hot strength prevents mould erosion, collapsibility prevents hot tears. For tests, name the equipment and the property it certifies in the same sentence.",
            },
            keyTerms: [
              { term: "Permeability", definition: "A sand's ability to let mould and metal gases escape through its pores; measured as the permeability number." },
              { term: "Green strength", definition: "The strength of damp, as-rammed sand that holds the cavity during pattern withdrawal and handling." },
              { term: "Grain fineness number", definition: "A weighted average sieve-size index of the sand; higher GFN means finer grains, better finish and lower permeability." },
            ],
            examQuestions: [
              {
                q: "List the essential properties of a good moulding sand and explain their significance. Describe any four standard sand tests with the equipment used.",
                marks: 7,
                outline: [
                  "Name the four ingredients and their roles.",
                  "List properties: refractoriness, permeability, green/dry/hot strength, collapsibility, cohesiveness, adhesiveness, flowability.",
                  "Link each property to the defect it prevents.",
                  "Moisture test with the moisture tell-tale.",
                  "Clay content by sand washer and GFN by sieve shaker.",
                  "Permeability meter and universal tester for green/dry compression strength.",
                  "Close with typical values for a working green sand.",
                ],
              },
              {
                q: "Define the permeability number of moulding sand.",
                marks: 2,
              },
              {
                q: "Why are sea coal and wood flour added to moulding sand?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Gating systems, risers and feeding",
            body: [
              "A gating system is the network of channels that carries molten metal from the ladle into the cavity, and every element has one job. The pouring basin settles the stream, skims slag and stops a vortex from forming at the sprue top. The sprue is vertical and tapered, larger at the top, because the metal accelerates as it falls; a parallel sprue would draw in air - the aspiration effect - so the area is narrowed to keep the stream full, and the smallest section at the sprue base is the choke. The sprue well absorbs the kinetic energy and turns the flow into the runner, which often runs in the drag with slag traps and skim gates that let light dross float off and be caught. Ingates deliver the metal into the cavity, ideally without gushing at the mould wall.",
              "The gating ratio relates the sprue, runner and ingate areas, and it decides which element chokes. In a pressurized system the ingates are the smallest section, so the channels run completely full and air is excluded, but metal enters fast and turbulently. In an unpressurized system the sprue base stays the smallest section and downstream flow is slower and quieter, at some risk of air entrainment if the pour is interrupted. Solidification shrinkage is the riser's business. Chvorinov's rule says solidification time t = Cm (V/A)^n with n close to 2, so the section with the larger volume-to-surface-area ratio freezes last; a sound design keeps the riser's V/A above the casting's V/A so the riser stays liquid and feeds the casting. Open risers vent to the top of the cope; blind risers sit enclosed in the sand. Chills, padding and exothermic sleeves steer directional solidification toward the riser.",
              "Design discipline finishes the job: fill fast enough to avoid cold shuts but quietly enough to avoid dross and gas pickup, bottom-gate aluminium where oxide films shred, and vent generously. Yield measures the design - casting weight over total weight poured - because sprues, runners and risers are all re-melted; a well-designed system lifts yield from about half to three-quarters. The worked example below sizes a riser for a plate casting with Chvorinov's rule, the exact arithmetic the examiner asks for.",
            ],
            bullets: [
              "Gating elements: pouring basin, tapered sprue with choke at its base, sprue well, runner with slag traps, ingates - each has exactly one duty.",
              "Gating ratio (sprue : runner : ingate areas): pressurized systems choke at the gates and run full; unpressurized choke at the sprue and run quiet.",
              "Chvorinov: t = Cm (V/A)^n with n about 2 - freezing time scales with the square of the volume-to-area ratio.",
              "Risers must hold V/A larger than the casting section they feed; open risers vent to the cope, blind risers sit enclosed.",
              "Chills, padding and exothermic sleeves drive directional solidification toward the riser.",
            ],
            codeExample: {
              language: "text",
              caption: "Sizing a riser with Chvorinov's rule - the classic numerical.",
              code: `RISER SIZING WITH CHVORINOV'S RULE
Casting: grey CI plate 100 x 100 x 20 mm

Casting volume  V = 100 x 100 x 20         = 200,000 mm3
Casting area    A = 2(100x100) + 4(100x20) =  28,000 mm2
Casting V/A                                =    7.1 mm

Try a cylindrical riser D = 50 mm, H = 100 mm (open top)
Riser volume  V = pi x 25^2 x 100         = 196,350 mm3
Riser area    A = pi x D x H (open top excluded)
                                           =  15,710 mm2
Riser V/A                                  =   12.5 mm

Check: 12.5 > 7.1, so the riser outlives the plate.
Time ratio by Chvorinov: t_r / t_c = (12.5 / 7.1)^2 = 3.1
The riser stays liquid about three times longer - feeding is safe.`,
            },
            table: {
              caption: "Gating elements and their duties.",
              headers: ["Element", "Where", "Primary duty"],
              rows: [
                ["Pouring basin", "top of cope", "settles stream, skims slag, stops vortex"],
                ["Sprue (tapered)", "vertical, through cope", "carries metal down; choke at base keeps it full"],
                ["Sprue well", "base of sprue", "absorbs kinetic energy at the bend"],
                ["Runner + slag trap", "usually in drag", "transports flow; floats and traps dross"],
                ["Ingates", "into the cavity", "deliver metal without gushing"],
                ["Riser", "hot spot / heavy section", "feeds shrinkage until the casting freezes"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The metal's path from ladle to cavity",
              caption: "Six stations, one duty each; the riser then feeds what the cavity owes to shrinkage.",
              stages: [
                { label: "Pouring basin", note: "settles the stream, skims slag" },
                { label: "Tapered sprue", note: "accelerates metal; choke at base" },
                { label: "Sprue well", note: "kills turbulence at the bend" },
                { label: "Runner + slag trap", note: "carries flow, floats dross" },
                { label: "Ingates", note: "deliver into the cavity" },
                { label: "Riser", note: "feeds shrinkage until freeze" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not confuse the two chokes",
              body: "In every gating system the smallest section controls the flow. In a pressurized system that choke is deliberately moved to the ingates; in an unpressurized system it stays at the sprue base. In the exam, write the area ratios - not adjectives like 'high pressure' - and the marks follow.",
            },
            keyTerms: [
              { term: "Gating ratio", definition: "The ratio of sprue : runner : ingate cross-sectional areas; it fixes which element chokes and how full the system runs." },
              { term: "Chvorinov's rule", definition: "Solidification time t = Cm (V/A)^n with n near 2; larger volume-to-surface-area sections freeze last." },
              { term: "Aspiration effect", definition: "Air drawn into a downsprue whose area does not shrink as the metal accelerates; prevented by tapering the sprue." },
            ],
            examQuestions: [
              {
                q: "Sketch a gating system, name its elements and state the function of each. Differentiate pressurized and unpressurized gating, and show how Chvorinov's rule sizes a riser.",
                marks: 7,
                outline: [
                  "Draw the system: basin, sprue, well, runner, traps, ingates, riser.",
                  "State the duty of each element in one line.",
                  "Define the gating ratio and explain which section chokes in each system.",
                  "Pressurized: gates smallest, runs full and fast; unpressurized: sprue base chokes, quieter flow.",
                  "State Chvorinov's rule t = Cm (V/A)^2.",
                  "Riser design check: riser V/A must exceed casting V/A, with a worked number.",
                  "Add chills and padding for directional solidification.",
                ],
              },
              {
                q: "Why is a sprue tapered?",
                marks: 2,
              },
              {
                q: "Distinguish an open riser from a blind riser.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Casting defects, causes and remedies",
            body: [
              "Defects arrive in five families, and the family names the cause. Gas defects - open blows, blowholes and pinholes - are smooth-walled cavities left by steam and mould gases that could not vent: green moisture too high, ramming too hard, vents missing. Shrinkage defects - cavities, sinks and depressed surfaces - appear where feeding failed: a riser too small, too far, or isolated from the hot spot it should have fed. Pouring defects are the misrun, where metal freezes before the cavity fills, and the cold shut, where two fronts meet without fusing - both children of low pouring temperature, slow pouring or thin sections. Mould-material defects - sand wash, scab, drop, rat tail, buckle and dirt inclusions - come from weak sand, uneven ramming, high pouring height and metal velocity that erodes the mould. Metallurgical defects - hot tears where contraction is hindered, and segregation where the alloy separates - belong to design and solidification control.",
              "Remedies aim at the family, not the symptom. Vent the mould, dry the sand and control moisture to kill gas defects. Raise pouring temperature within the safe window and speed the fill to cure misruns and cold shuts. Enlarge risers, move them onto hot spots and apply chills where directional solidification is needed. Strengthen the sand, ram evenly and lower the pouring height to stop wash and scab. Align the flasks on locating pins and clamp them to prevent mismatch and drop. Design fixes prevent hot tears: uniform wall thickness, generous fillets and cores that yield as the casting contracts.",
              "Inspection closes the loop. Visual and dimensional checks catch surface and shape defects; dye penetrant opens surface cracks; radiography sees blowholes and shrinkage voids inside a finished casting. But process control beats post-mortem: moisture and strength tests every shift, melt temperature by immersion pyrometer, and a standardised pouring practice. A foundry's defect atlas maps each recurring defect to its root cause so the fork below is walked deliberately - diagnose, then fix - instead of re-melting scrap and hoping.",
            ],
            bullets: [
              "Five families: gas defects, shrinkage defects, pouring defects (misrun, cold shut), mould-material defects, metallurgical defects.",
              "Gas family: blowholes and pinholes trace to moisture, hard ramming and missing vents - vent the mould, dry the sand.",
              "Shrinkage family: cavities and sinks trace to underfed hot spots - bigger or closer risers, chills, padding.",
              "Mould-material family: sand wash, scab, drop and inclusions trace to weak sand and erosion - stronger sand, even ramming, lower pour.",
              "Inspection ladder: visual and dimensional first, dye penetrant for surface cracks, radiography for internal voids.",
            ],
            table: {
              caption: "Defect first-aid chart.",
              headers: ["Defect", "Looks like", "Root cause", "First remedy"],
              rows: [
                ["Blowhole", "smooth round void inside", "trapped gas", "improve venting, dry sand"],
                ["Shrinkage cavity", "rough angular void in hot spot", "no feed metal", "larger/closer riser, chill"],
                ["Cold shut", "visible seam with rounded notch", "fronts met cold", "raise pouring temperature"],
                ["Sand wash", "bulge on the drag face", "metal eroded the sand", "harder ramming, lower pour height"],
                ["Hot tear", "jagged crack on solidification", "hindered contraction", "fillets, uniform walls, yielding cores"],
                ["Mismatch", "step across the parting line", "flask shift", "locating pins, clamps"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Diagnose before you re-melt",
              caption: "The right branch fixes the batch; the wrong one fixes nothing.",
              start: "A batch of castings is rejected at inspection",
              branches: [
                { label: "Gas trail: smooth blowholes", outcome: "Vent the mould, dry the sand, control moisture", good: true },
                { label: "Feeding trail: angular shrinkage", outcome: "Larger risers and chills at the hot spots", good: true },
                { label: "Sand trail: scabs and wash", outcome: "Higher mould strength, even ramming", good: true },
                { label: "Re-melt everything, no diagnosis", outcome: "Root cause survives; the next batch fails the same way", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Classification is the marks",
              body: "Write the five families (gas, shrinkage, pouring, mould-material, metallurgical), give two defects under each with cause and remedy, and sketch any three. A flat list of ten defects with no classification caps the answer at half marks.",
            },
            keyTerms: [
              { term: "Cold shut", definition: "A seam formed when two metal fronts meet but fail to fuse because they have lost too much heat." },
              { term: "Blowhole", definition: "A smooth-walled gas cavity trapped inside a casting by steam or mould gas that could not escape." },
              { term: "Hot tear", definition: "A jagged crack formed during solidification when contraction is hindered by the mould or a core." },
            ],
            examQuestions: [
              {
                q: "Classify casting defects with sketches. For any five defects, state the cause and the remedy.",
                marks: 7,
                outline: [
                  "State the five families: gas, shrinkage, pouring, mould-material, metallurgical.",
                  "Gas: blowholes, pinholes, open blows - causes and remedies.",
                  "Shrinkage: cavities and sinks - underfed hot spots; risers and chills.",
                  "Pouring: misrun and cold shut - temperature and thin sections.",
                  "Mould material: sand wash, scab, drop, rat tail - sand strength and ramming.",
                  "Metallurgical: hot tears and segregation - design and solidification fixes.",
                  "Sketch three defects and close with inspection: visual, dye penetrant, radiography.",
                ],
              },
              {
                q: "Distinguish a misrun from a cold shut.",
                marks: 2,
              },
              {
                q: "Why do hot tears occur and where are they usually found?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Die, investment and centrifugal casting",
            body: [
              "In die casting the mould is a permanent steel die, so the tooling is paid for across thousands of shots. Hot-chamber machines keep a gooseneck submerged in the molten pot so the plunger refills and injects every shot directly - fast, and best for zinc and magnesium alloys whose melts do not attack steel. Cold-chamber machines ladle each shot into a horizontal chamber, keeping the melt away from the injection parts - the route for aluminium and brass, which dissolve iron from a submerged gooseneck. Metal enters at roughly 10-30 MPa in hot-chamber and 30-100 MPa in cold-chamber machines, filling thin complex sections in tens of milliseconds. As-cast tolerance and finish are close enough to eliminate machining on small parts; the price is die cost, size limits and trapped-air porosity that resists heat treatment.",
              "Investment casting (the lost-wax process) starts from an expendable pattern of injected wax or plastic, joined into a tree and dipped in fine refractory slurry, stuccoed, and re-dipped until a shell of five to nine coats has built. Steam dewaxing empties the shell, burnout at 900-1100 C fires it, and metal is poured into the hot shell. There is no parting line, walls can be thin, corners sharp, and the result is near-net shape in alloys - including the hard, exotic ones - that are miserable to machine: turbine blades, valve bodies, instrument parts. The price is high cost per casting and a practical size limit. Centrifugal casting spins the mould about its axis - typically several hundred to a few thousand revolutions per minute, giving G-factors of order 40-100, since G = 1.118 x 10^-3 R N^2 with R in metres and N in rev/min.",
              "Centrifugal casting exploits density. In true centrifugal casting - pipes, cylinder liners - the bore needs no core because it is the free surface of the spinning metal; lighter dross and impurities collect near the axis and are machined away, leaving a dense, fine-grained, directionally sound wall against the rotating mould. Semi-centrifugal casting spins axisymmetric parts such as wheels and rings with a central riser helping the feed, and centrifuging throws small castings around a central sprue, filling delicate moulds under centrifugal head. The matrix below places the routes against complexity and batch size - the two axes a process-selection answer needs.",
            ],
            bullets: [
              "Hot-chamber die casting: gooseneck submerged, 10-30 MPa, for zinc and magnesium; cold chamber for aluminium and brass at 30-100 MPa.",
              "Investment casting: wax pattern, ceramic shell of 5-9 coats, dewax, burnout, pour - near-net, no parting line, costly per piece.",
              "True centrifugal casting: no core for the bore; impurities float to the axis and are machined off - pipes and liners.",
              "Semi-centrifugal casting and centrifuging spin axisymmetric parts and small mould clusters under centrifugal head.",
              "G-factor: G = 1.118 x 10^-3 R N^2 (R in m, N in rev/min); quality castings run G of order 40-100.",
            ],
            table: {
              caption: "Choosing among the special casting routes.",
              headers: ["Process", "Mould", "Best alloys", "Strength", "Watch out"],
              rows: [
                ["Hot-chamber die", "steel die + gooseneck", "Zn, Mg", "very fast small parts", "dies costly; porosity if heat treated"],
                ["Cold-chamber die", "steel die, ladled shot", "Al, brass", "larger intricate parts", "air entrapment; die cost"],
                ["Investment", "ceramic shell, wax lost", "any castable alloy", "thin, complex, near-net", "cost per piece; size limit"],
                ["True centrifugal", "spinning mould", "CI, steel, Cu alloys", "dense pipes and liners", "bore must be machined"],
                ["Semi-centrifugal", "spinning + central sprue", "CI, steel", "fine-grained rings, wheels", "bore machining"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Which route for which job?",
              caption: "Complexity against batch size - the two axes of every selection answer.",
              axes: { x: "Part complexity: simple to complex", y: "Batch size: a few to thousands" },
              quadrants: [
                { label: "Investment casting", note: "few, intricate, near-net parts" },
                { label: "Pressure die casting", note: "thousands of intricate small parts" },
                { label: "Sand casting (hand moulding)", note: "few, simple shapes, cheap tooling" },
                { label: "Machine-moulded sand / centrifugal", note: "thousands of simple forms; pipes and liners spin" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two standing short questions live here",
              body: "Why is aluminium not hot-chamber die cast? Because molten aluminium attacks the steel gooseneck and picks up iron - so it goes through a cold chamber. Where do impurities collect in centrifugal casting? Near the spin axis, because they are lighter than the metal - which is why the bore is machined. One sentence each earns the marks.",
            },
            keyTerms: [
              { term: "Hot-chamber die casting", definition: "A die casting machine whose injection system sits submerged in the molten pot; used for low-melting zinc and magnesium alloys." },
              { term: "Lost-wax process", definition: "Casting into a ceramic shell built around an expendable wax pattern; yields near-net, complex castings." },
              { term: "G-factor", definition: "The ratio of centrifugal acceleration to gravity, G = 1.118 x 10^-3 R N^2, which fixes the soundness of a centrifugal casting." },
            ],
            examQuestions: [
              {
                q: "Describe die casting. Differentiate hot-chamber and cold-chamber machines with sketches and applications.",
                marks: 7,
                outline: [
                  "Define die casting and the permanent-mould idea.",
                  "Hot chamber: gooseneck submerged, plunger shot, 10-30 MPa, zinc and magnesium.",
                  "Cold chamber: ladled shot, 30-100 MPa, aluminium and brass.",
                  "Cycle steps and die construction with cooling channels.",
                  "Advantages: rate, tolerance, finish, machining eliminated on small parts.",
                  "Limitations: die cost, size, air porosity, alloy limits.",
                  "Applications: carburettor bodies, gear cases, housings.",
                ],
              },
              {
                q: "Why is aluminium not cast on hot-chamber die casting machines?",
                marks: 2,
              },
              {
                q: "Where do impurities collect in true centrifugal casting, and why?",
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
      title: "Welding Processes",
      summary:
        "Joining: arc welding with SMAW, GMAW and SAW; oxy-acetylene flames with brazing and soldering; the resistance family - spot, seam, projection, flash; solid-state routes - friction, ultrasonic, diffusion, explosive; and weld defects with their inspection and distortion control.",
      chapter: {
        number: "02",
        title: "Welding Processes",
        intro:
          "Unit II fuses things together: the physics of the welding arc and the three big arc processes; the oxy-acetylene flame with brazing and soldering; the timed current of the resistance family; the solid-state processes that join without melting; and the defects, non-destructive tests and distortion-control tricks that make a weld trustworthy.",
        inOneBreath:
          "Welding fuses parts with arcs, flames, timed resistance heat and interfacial friction: electrode coatings make their own shield, flame ratios tune the oxy-acetylene flame, brazing and soldering join below the parent's melting point, a spot weld squeezes thousands of amperes into a few cycles, and solid-state processes forge interfaces without melting - while defects from undercut to hydrogen cracks are caught by an inspection ladder that climbs from the eye to the radiograph.",
        sections: [
          {
            number: "2.1",
            title: "Arc welding: SMAW, GMAW and SAW",
            body: [
              "An arc is a sustained plasma discharge between electrode and work, its core running around 6000-7000 K - enough to melt any structural alloy. The power source is an AC transformer or a DC rectifier or inverter; open-circuit voltage sits in the 50-80 V band, while the arc itself drops 20-40 V, and welding current between 50 and 400 A sets the heat. Because the anode and cathode split the heat unevenly, polarity is a control knob: with the electrode negative (straight polarity) the workpiece runs hotter and penetration deepens; with the electrode positive (reverse polarity) the electrode end melts faster, which suits thin sheets and root passes. Arc length should stay about the core-wire diameter, and the machine's duty cycle - the share of each ten minutes it can weld at rated current - sizes the set for production.",
              "Shielded metal arc welding (SMAW) is the coated electrode. The covering is the heart of the process: cellulose and carbonates decompose into a CO-CO2-H2 gas blanket; minerals melt into a slag that shields the pool, slows cooling and scavenges impurities; deoxidizers such as ferro-silicon clean the metal; alloying powders tune the deposit; potassium silicate stabilises the arc and shapes the bead. The designation E6013 reads: E for electrode, 60 for 60 ksi (about 415 MPa) tensile strength, 1 for all-position use, 3 for the rutile coating that runs on AC or DC. SMAW is cheap and goes anywhere, but stub loss, slag chipping and operator skill cap its productivity.",
              "Gas metal arc welding (GMAW) replaces the stick with a continuous 0.8-1.6 mm wire fed through a torch with a separate gas shield. Argon-rich mixtures give spray transfer at high current - smooth beads and high deposition; CO2 is cheaper but runs globular and spattery; short-circuit transfer at low current handles thin sheet in any position. There is no slag to chip, and robots love it. Flux-cored arc welding carries the flux inside a tubular wire and can even run self-shielded outdoors. Submerged arc welding (SAW) buries the arc under a blanket of granular flux: with 400-1500 A it penetrates deeply, deposits metal far faster than SMAW, and finishes thick plate in single passes - but only in flat and horizontal positions, on machine-driven set-ups: shipbuilding, beams, pressure vessels.",
            ],
            bullets: [
              "Arc basics: core temperature 6000-7000 K, arc voltage 20-40 V, open-circuit 50-80 V, current 50-400 A, duty cycle sizes the machine.",
              "Polarity is a control: electrode negative runs the work hotter (penetration); electrode positive melts the electrode faster (thin sheet).",
              "SMAW coating does six jobs: gas shield, slag blanket, deoxidation, alloying, arc stabilisation, bead shaping - and E6013 decodes digit by digit.",
              "GMAW transfer modes: short-circuit (thin sheet), globular (CO2, spatter), spray (argon-rich, high current, smooth).",
              "SAW: flux-blanketed arc, 400-1500 A, deepest penetration and highest deposition - flat and horizontal only, machine driven.",
            ],
            table: {
              caption: "Three arc processes, one comparison.",
              headers: ["Aspect", "SMAW", "GMAW", "SAW"],
              rows: [
                ["Electrode", "coated stick 2.5-6 mm", "continuous solid wire", "wire + granular flux"],
                ["Shielding", "gas + slag from coating", "argon or CO2 gas", "flux blanket"],
                ["Deposition", "low to medium", "medium to high", "highest"],
                ["Penetration", "medium", "medium", "deep"],
                ["Positions", "all", "all with care", "flat and horizontal"],
                ["Typical use", "maintenance, structures", "fabrication, automotive", "heavy plate, boilers, ships"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A finished SMAW weld, layer by layer",
              caption: "Read a weld like a stratigraphy chart - each layer tells what the joint survived.",
              layers: [
                { label: "Slag cover", note: "frozen flux, chipped after each pass" },
                { label: "Weld reinforcement", note: "the crown above plate surface" },
                { label: "Weld metal", note: "filler diluted with melted base" },
                { label: "Fusion boundary + HAZ", note: "unmelted but restructured grains" },
                { label: "Base metal", note: "unaffected parent plate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Decode the electrode",
              body: "E7018: E = electrode, 70 = 70 ksi tensile (about 485 MPa), 1 = all positions, 8 = low-hydrogen iron-powder coating on DC or AC. Examiners ask for the meaning of each digit - write all four, and add 'low-hydrogen' whenever the last digit is 8; hydrogen control is the whole point of that rod.",
            },
            keyTerms: [
              { term: "Duty cycle", definition: "The percentage of a ten-minute window in which a welding machine can operate at rated current without overheating." },
              { term: "Heat-affected zone", definition: "The unmelted band beside a weld whose microstructure changed under the weld thermal cycle." },
              { term: "Metal transfer mode", definition: "How droplets cross the arc in GMAW - short-circuit, globular or spray - each setting current range and spatter." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and operation of an SMAW set with a sketch. State the functions of the electrode coating and explain the designation E6013.",
                marks: 7,
                outline: [
                  "Sketch: power source, cables, holder, work clamp, coated electrode, arc.",
                  "Arc basics: temperature, voltage, current range, polarity effects.",
                  "Six coating functions: gas shield, slag blanket, deoxidation, alloying, arc stabilisation, bead shaping.",
                  "Decode E6013 digit by digit.",
                  "Advantages: cheap, portable, all-position.",
                  "Limitations: stub loss, slag chipping, operator skill, fumes.",
                  "Applications with one safety line (helmet, ventilation).",
                ],
              },
              {
                q: "State any four functions of an electrode coating.",
                marks: 2,
              },
              {
                q: "Why does submerged arc welding give deeper penetration than SMAW?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Gas welding, flames, brazing and soldering",
            body: [
              "Oxy-acetylene welding burns acetylene in oxygen delivered from two cylinders through regulators, hoses and a mixing torch; acetylene is unstable above about 1 bar line pressure, so the regulator never feeds it faster than the torch can consume. Three flames come from the ratio of oxygen to acetylene. The neutral flame, about 1:1, shows a sharp white inner cone and a blue envelope, runs near 3100-3200 C, adds nothing to and takes nothing from the pool, and is the default for steel and most fusion work. The oxidizing flame, about 1.5:1, is shorter, pointed and harsher - used on brass and bronze and in braze welding, where its oxide film restrains zinc loss. The carburizing flame, below 1:1, wraps a feather around the inner cone and deposits carbon - for hardfacing and high-carbon steels. Leftward and rightward techniques then manage thick and thin sections.",
              "Brazing joins metals with a filler that melts above 450 C while the parent metals stay solid. The joint is engineered for capillary flow: clean, fluxed surfaces with a clearance of a few hundredths to two tenths of a millimetre draw the molten filler - brass, silver or aluminium alloys - through the whole gap by capillary action. The flux, usually a borax type, dissolves oxides and shields the surface until the filler wets it. Heat comes from the torch, a furnace, an induction coil or a salt dip. Braze welding, by contrast, deposits filler into a prepared V-groove much as fusion welding does, with more fillet and less capillarity. Brazing joins dissimilar metals and thin sections without melting or warping them, and a well-made joint is strong; the limits are careful joint preparation, flux-residue cleaning, and a service temperature capped by the filler's melting point.",
              "Soldering is brazing's cooler cousin: the filler - soft solder of tin-lead or lead-free tin-silver-copper - melts below 450 C and again flows by capillary action into a fluxed, close-fitting joint. The flux matters as much as the heat: non-corrosive rosin flux for electronics, active zinc-chloride fluxes for sheet-metal work, each chosen to dissolve its specific oxide without corroding the finished joint. Soldered joints carry current and seal seams rather than carry structural load, though the electronics industry stands on millions of them every day. The dividing line between the two processes is exactly 450 C, and that number - together with the capillary-flow mechanism and the unmelted parent metal - is the standard short question on this pair of processes.",
            ],
            bullets: [
              "Three flames: neutral about 1:1 (general steel), oxidizing about 1.5:1 (brass, bronze, braze welding), carburizing below 1:1 (hardfacing, high-carbon steel).",
              "Only the carburizing flame shows the feather - the third zone - around the inner cone; the neutral core runs 3100-3200 C.",
              "Brazing: filler melts above 450 C, parent stays solid, capillary flow through a fluxed clearance of 0.05-0.2 mm.",
              "Braze welding fills a V-groove with filler - capillarity is not the mechanism, and the parent still does not melt.",
              "Soldering: filler below 450 C (tin-lead or lead-free); rosin flux for electronics, active flux for sheet metal; joints carry current, not load.",
            ],
            table: {
              caption: "The three oxy-acetylene flames.",
              headers: ["Flame", "O2 : C2H2", "Appearance", "Best use"],
              rows: [
                ["Neutral", "about 1 : 1", "white inner cone, blue envelope", "general steel welding"],
                ["Oxidizing", "about 1.5 : 1", "short pointed cone, harsh hiss", "brass, bronze, braze welding"],
                ["Carburizing", "below 1 : 1", "feather around the cone", "hardfacing, high-carbon steel"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Brazing vs soldering",
              caption: "Same physics - capillary flow, flux and an unmelted parent - divided by one temperature.",
              left: {
                heading: "Brazing (above 450 C)",
                items: [
                  "Filler: brass, silver, aluminium alloys",
                  "Stronger joints, higher service temperature",
                  "Torch, furnace, induction or dip heating",
                  "Borax-type flux dissolves oxides",
                  "Joins dissimilar metals, thin sections",
                ],
              },
              right: {
                heading: "Soldering (below 450 C)",
                items: [
                  "Filler: soft solder, tin-lead or SAC",
                  "Electrical and sealing joints",
                  "Iron, torch or wave heating",
                  "Rosin (electronics) or active fluxes",
                  "Copper, brass and electronic assemblies",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Two marks live on one number",
              body: "The 450 C line is the whole distinction: filler melting above it means brazing, below it soldering. In both, the parent metals never melt and the filler flows by capillary action through a fluxed, close-fitting gap. Write those three facts and the definition question is finished.",
            },
            keyTerms: [
              { term: "Neutral flame", definition: "An oxy-acetylene flame with about 1:1 gas ratio; chemically neutral to the pool and used for most steel welding." },
              { term: "Brazing", definition: "Joining with a filler that melts above 450 C while the parent metals remain solid, the filler drawn through a fluxed close-fitting gap by capillary action." },
              { term: "Capillary action", definition: "The surface-tension draw that pulls molten filler through a narrow joint clearance in brazing and soldering." },
            ],
            examQuestions: [
              {
                q: "Explain oxy-acetylene welding equipment with a sketch and describe the three flame types with their uses. Differentiate brazing, soldering and fusion welding.",
                marks: 7,
                outline: [
                  "Sketch: cylinders, regulators, hoses, torch with mixing chamber, flame zones.",
                  "Neutral flame: about 1:1, sharp inner cone, 3100-3200 C, general steel welding.",
                  "Oxidizing flame: about 1.5:1, short pointed cone, brass and bronze work.",
                  "Carburizing flame: below 1:1, feather around the cone, hardfacing.",
                  "Brazing: filler above 450 C, capillary flow, flux, parent unmelted.",
                  "Soldering: filler below 450 C, electrical and sealing joints.",
                  "Fusion welding melts the parent; brazing and soldering do not.",
                ],
              },
              {
                q: "State the temperature that divides brazing from soldering.",
                marks: 2,
              },
              {
                q: "Why is flux essential in brazing and soldering?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Resistance welding: spot, seam, projection and flash",
            body: [
              "Resistance welding makes heat exactly where it is wanted: H = I^2 R t, with the useful resistance concentrated at the faying interface between the sheets. In spot welding, two water-cooled copper-chromium or copper-cadmium electrodes squeeze the overlapping sheets, a current of several thousand amperes flows for a few cycles of 50 Hz, and a molten nugget grows at the interface and is forged solid during the hold phase. The parameters - current, weld time, electrode force, face diameter, and the squeeze and hold timings - form a schedule tuned to the material and stack, exactly as in the worked schedule below. The copper electrodes survive because their high conductivity pushes the heat into the joint and their water cooling carries the rest away.",
              "The family shares one transformer and multiplies joints. Seam welding swaps the electrodes for roller discs and lays a stitch of overlapping nuggets - leak-tight joints for tanks, drums and silencers. Projection welding embosses small bosses on one sheet so the current concentrates at the projections: several nuggets in one squeeze, long electrode life because the flat platen touches only surfaces, and the standard route for attaching nuts and studs to sheet. Butt welding clamps two bars end to end and heats the interface by resistance before upsetting them together; flash welding pulls a small arc between the faces first, and the flashing expels impurities and oxidised metal with the upset - the choice for rails and heavy sections because the joint comes out forged and clean.",
              "The economics explain the shop floor. Resistance welding needs no filler or flux, takes seconds per joint, and robotises beautifully - a car body carries thousands of spot welds laid down by robot gangs. The costs are a huge kVA demand with a poor power factor that strains the factory's electrical system, a practical limit of about 3-4 mm per sheet for spot welding, lap-joint geometry only, and constant attention to electrode dressing and alignment, since a worn or tilted electrode shifts the nugget off the interface. Peel and chisel tests - pulling a weld apart to measure the button diameter - are the everyday quality check that a schedule is still correct.",
            ],
            bullets: [
              "Heat: H = I^2 R t - the controlled resistance sits at the faying interface; the nugget is forged during the hold phase.",
              "Spot schedule for 1 mm steel: current 8-10 kA, 10-12 cycles, force about 2.5 kN - always tuned per stack.",
              "Seam welding: roller electrodes, overlapping nuggets, leak-tight seams; projection welding: embossed points, several nuggets per squeeze.",
              "Butt welding heats by resistance then upsets; flash welding arcs first and expels impurities with the upset - rails, heavy bar.",
              "Costs: high kVA demand and poor power factor, 3-4 mm sheet limit, lap joints only, electrode dressing discipline.",
            ],
            codeExample: {
              language: "text",
              caption: "A spot welding starting schedule for 1 mm low-carbon steel.",
              code: `SPOT WELD STARTING SCHEDULE
Sheet stack : 1.0 + 1.0 mm low-carbon steel
Electrode   : 6 mm Cu-Cr, flat face, water cooled

Squeeze : force 2.5 kN, 25 cycles (50 Hz supply)
Weld    : current 9.5 kA, 10 cycles
Hold    : force maintained, 6 cycles
Off     : retract, index to the next spot

Nugget      : 5.0-5.5 mm diameter, 60-70% penetration
Check       : peel test; button diameter 4.5 mm minimum
Tune        : raise current in 0.5 kA steps until
              expulsion appears, then step back one notch`,
            },
            table: {
              caption: "The resistance welding family.",
              headers: ["Variant", "Electrodes", "Joint", "Typical product"],
              rows: [
                ["Spot", "two flat Cu-Cr tips", "overlapping sheets", "car bodies, appliances"],
                ["Seam", "roller discs", "continuous lap", "fuel tanks, drums, silencers"],
                ["Projection", "flat platen + embossed points", "spots at projections", "nuts and studs on sheet"],
                ["Butt", "clamp jaws", "end-to-end bars", "wire, reinforcing bar"],
                ["Flash", "clamp jaws with arc", "end-to-end heavy sections", "rails, thick bar"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The spot welding cycle, four timed phases",
              caption: "Each phase has its own timer - and its own classic mistake.",
              steps: [
                { label: "Squeeze", note: "electrodes reach full force before any current" },
                { label: "Weld", note: "current flows; the nugget melts and grows" },
                { label: "Hold", note: "current off; force forges the nugget solid" },
                { label: "Off / index", note: "retract and move to the next spot" },
              ],
            },
            callout: {
              type: "tip",
              title: "Schedules, not settings",
              body: "A spot weld is a timed sequence - squeeze, weld, hold, off - and each phase has a classic fault: insufficient squeeze force arcs the electrodes, short hold leaves a porous nugget. When asked for the spot welding parameters, list current, time, force and electrode geometry as a schedule, not as four loose numbers.",
            },
            keyTerms: [
              { term: "Nugget", definition: "The fused, forged lens of metal formed at the faying interface of a spot weld." },
              { term: "Projection welding", definition: "A resistance process in which embossed projections concentrate current, forming several nuggets in a single squeeze." },
              { term: "Flash welding", definition: "A resistance process in which parts are arced together end to end, flashed to expel impurities, then upset-forged; used for rails and bars." },
            ],
            examQuestions: [
              {
                q: "Explain resistance spot welding with a sketch. Discuss the heat equation, the welding sequence and the parameters that control nugget quality.",
                marks: 7,
                outline: [
                  "Principle: H = I^2 R t; the useful resistance sits at the faying surfaces.",
                  "Sketch: transformer, arms, water-cooled Cu-Cr electrodes, sheets, nugget.",
                  "Sequence: squeeze - weld - hold - off, with the role of each timer.",
                  "Parameters: current, weld time, electrode force, face diameter.",
                  "Defects: expulsion, electrode sticking, small or oversized nuggets, shunt currents.",
                  "Peel or chisel test for nugget diameter.",
                  "Applications: auto bodies, appliances; seam and projection variants in one line each.",
                ],
              },
              {
                q: "Why is projection welding preferred for attaching nuts to sheet metal?",
                marks: 2,
              },
              {
                q: "Distinguish butt welding from flash welding.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Solid-state welding: friction, ultrasonic and friends",
            body: [
              "Solid-state welding joins below the melting point, so there is no cast nugget, no solidification defects and almost no heat-affected zone to apologise for. In friction welding, one part spins against the other under pressure; friction brings the interface to forging temperature, rotation stops, and upset pressure forges the softened metal together, squeezing oxides and impurities out into a flash collar. The phases are relative speed (spindle speeds in the low thousands of rev/min for steel bar), friction pressure with a controlled burn-off length that cleans the faces, a quick brake, then upset pressure. The joint is forged, with fine grains, and the process is proud of bimetallic shafts, drill shanks and axle shafts. Friction stir welding plunges a rotating shouldered tool into a butt joint and stirs the metal without melting it - the answer for aluminium 2xxx and 7xxx panels that fusion welding cannot touch.",
              "Ultrasonic welding drives a transducer - piezoelectric or magnetostrictive - at about 20 kHz; a booster and a sonotrode (horn) amplify the stroke to a few tens of microns and press it onto the work. Clamped sheets vibrate tangentially at their interface; oxide films shear apart and disperse, asperities weld, and the joint is done in under a second. Sheets up to about 3 mm and lap geometry only, but the tool stays cool, the work is unheated, and dissimilar pairs such as aluminium-copper join without intermetallics - busbars, battery tabs, electronic packages. Diffusion bonding clamps atomically clean surfaces at 0.5-0.7 of the melting point for minutes to hours and reaches near-parent strength in titanium aerostructure panels. Explosive welding detonates a flyer plate onto a backer; the wavy interface mechanically interlocks dissimilar metals - stainless or copper cladding on carbon-steel plate for pressure vessels and heat exchangers.",
              "The family earns its place exactly where fusion would crack, burn or embrittle: dissimilar metal pairs whose melt forms brittle intermetallics, heat-treated alloys whose HAZ would soften, thin foils that a plasma would vaporize. Against these virtues stand real limits - rotating symmetry or lap geometry by process, surface preparation and precise parameters, and capital cost - so selection is a fork, not a default. The table and the fork below are the exam answer.",
            ],
            bullets: [
              "Friction welding phases: relative speed, friction pressure with burn-off, brake, upset - a forged joint with a flash collar.",
              "Friction stir welding: rotating tool stirs a butt joint below melting - the route for 2xxx/7xxx aluminium panels.",
              "Ultrasonic welding: 20 kHz transducer, horn amplifies to tens of microns, lap of thin sheets, joints in under a second.",
              "Diffusion bonding: heat, pressure and time at 0.5-0.7 Tm; near-parent strength for aerostructures.",
              "Explosive welding: detonation drives a flyer plate; wavy interface interlocks dissimilar metals into clad plate.",
            ],
            table: {
              caption: "The solid-state joining menu.",
              headers: ["Process", "Energy", "Joint geometry", "Typical job"],
              rows: [
                ["Friction (FRW)", "mechanical, rotating interface", "bar or tube to bar", "drill shanks, axle shafts"],
                ["Friction stir (FSW)", "rotating shouldered tool", "butt of plates", "aluminium panels, battery trays"],
                ["Ultrasonic (USW)", "20 kHz vibration", "lap of thin sheets", "busbars, electronic packages"],
                ["Diffusion (DB)", "heat + pressure + time", "planar faces", "titanium aerostructure panels"],
                ["Explosive (EXW)", "detonation", "large parallel plates", "clad boiler and vessel plate"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a solid-state route",
              caption: "Three right answers and one expensive wrong one.",
              start: "Dissimilar or heat-sensitive parts must be joined",
              branches: [
                { label: "Bars or tubes, round section", outcome: "Friction weld: spin, heat, upset - a forged joint", good: true },
                { label: "Thin sheets, electronics", outcome: "Ultrasonic weld in under a second, no melt", good: true },
                { label: "Large parallel plates", outcome: "Explosive or diffusion bond the full surfaces", good: true },
                { label: "Arc-melt both parts anyway", outcome: "Intermetallic layer and HAZ cracks form; the joint loses strength", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Spot the trigger words",
              body: "If the question says 'dissimilar metals' or 'no heat-affected zone', the expected answer is a solid-state process. Name friction, friction stir, ultrasonic, diffusion or explosive welding, then give the mechanism and one application each - mechanism plus application is the marking scheme.",
            },
            keyTerms: [
              { term: "Burn-off length", definition: "The short axial shortening allowed in friction welding while friction cleans and heats the faces before upset." },
              { term: "Sonotrode", definition: "The tuned horn that amplifies the ultrasonic transducer's amplitude and presses it onto the work." },
              { term: "Intermetallic", definition: "A brittle compound of two metals, such as Al-Fe, that forms when dissimilar fusion joints melt and cool; solid-state processes avoid it." },
            ],
            examQuestions: [
              {
                q: "Explain friction welding with its stages, parameters and applications. How does it differ from fusion welding?",
                marks: 7,
                outline: [
                  "Principle: heat by friction, join by forge pressure, no melting.",
                  "Stages: relative rotation, friction pressure and burn-off, brake, upset.",
                  "Sketch: spindle, chuck, movable slide, flash collar.",
                  "Parameters: speed, friction pressure, burn-off, upset pressure.",
                  "Metallurgy: fine forged grains, oxides expelled, narrow HAZ.",
                  "Contrast fusion welding: solidification structure, wide HAZ, filler, weld defects.",
                  "Applications: drill shanks, bimetallic shafts; friction stir for aluminium panels.",
                ],
              },
              {
                q: "Give two applications of ultrasonic welding.",
                marks: 2,
              },
              {
                q: "Why do solid-state processes suit dissimilar metal joints better than arc welding?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Weld defects, inspection and distortion control",
            body: [
              "Weld defects divide into three tribes. Those that violate shape: undercut, the groove melted into the base plate beside the toe from a long arc or excess current; overlap, metal that rolled past the fusion line; excessive reinforcement; and distortion of the assembly. Those that violate continuity: porosity from damp electrodes, oily surfaces or a broken gas shield; slag inclusions from missed interpass cleaning and low current; incomplete penetration from a tight root gap or starved current; lack of fusion from fast travel or a wrong torch angle. And cracks, the only tribe that always means repair: hot cracks form as the bead solidifies under restraint and impurities; cold or hydrogen cracks arrive hours later, hydrogen from damp flux diffusing into a hard HAZ under residual stress. Every defect names its parameter - that is the whole teaching.",
              "Inspection climbs a ladder of cost and depth. Visual inspection with weld gauges catches most shape defects and costs nothing. Dye penetrant opens surface cracks in any smooth, non-porous metal: clean, penetrate, dwell, remove, develop. Magnetic particle outlines surface and near-surface cracks, but only in ferrous welds. Ultrasonic testing finds planar flaws - lack of fusion, cracks - deep inside, at the price of a skilled operator. Radiography, X-ray or gamma, records porosity, slag and voids on film or detector as a permanent document. Destructive tests - bend, tensile from coupons, macro-etch across the section - qualify the procedure, not the production welds.",
              "Distortion is thermal mechanics: the weld heats one side of a joint, that side expands against cold metal, and the cooling contraction pulls the assembly out of square. Control it at the source: clamp or tack to restraint, preset the parts opposite the expected pull, sequence welds symmetrically, and use the back-step technique - short segments welded in the direction opposite the overall progression - so each bead's shrinkage partly cancels. Intermittent stitch welds replace heavy continuous beads, double-sided balanced passes even out heat, preheat flattens the temperature gradient, and peening relieves surface tension. After the fact, careful flame straightening can undo the rest.",
            ],
            bullets: [
              "Three tribes of defects: shape (undercut, overlap, distortion), continuity (porosity, slag, lack of fusion or penetration), cracks (hot, hydrogen).",
              "Undercut follows a long arc or excess current; lack of penetration follows a tight root and low current - parameter, not luck.",
              "Inspection ladder: visual with gauges, dye penetrant (surface), magnetic particle (ferrous, near-surface), ultrasonic (deep planar), radiography (permanent record).",
              "Distortion control at source: clamps and tacks, presetting, symmetric sequencing, back-step technique, stitch welds, preheat.",
              "After the fact: peening to relieve and flame straightening to correct.",
            ],
            table: {
              caption: "Weld defects: cause, detection, prevention.",
              headers: ["Defect", "Typical cause", "Detected by", "Prevention"],
              rows: [
                ["Undercut", "long arc, high current", "visual with gauge", "shorten arc, drop current"],
                ["Porosity", "damp electrodes, poor shield", "radiography", "dry rods, clean gas flow"],
                ["Slag inclusion", "missed interpass cleaning", "radiography, UT", "chip and brush every pass"],
                ["Incomplete penetration", "tight root, low current", "radiography, UT", "open the root, raise current"],
                ["Hydrogen crack", "damp flux, hard HAZ, restraint", "UT, MPI after delay", "low-hydrogen rods, preheat"],
                ["Distortion", "uneven heating and cooling", "visual, dimensional", "sequence, preset, back-step"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The inspection ladder: cheap first, decisive last",
              caption: "Each rung catches what the rung below cannot.",
              steps: [
                { label: "Visual + gauges", note: "shape, undercut, reinforcement size" },
                { label: "Dye penetrant", note: "surface cracks, any metal" },
                { label: "Magnetic particle", note: "surface and near-surface, ferrous" },
                { label: "Ultrasonic", note: "deep internal planar flaws" },
                { label: "Radiography", note: "permanent record of voids and inclusions" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair the defect with its detector",
              body: "Porosity and slag show beautifully on radiographs; lack of fusion hides from X-rays but answers to ultrasonics; cracks open to penetrant and magnetic particle. Two marks ride on those pairings in almost every paper - write them as pairs, not paragraphs.",
            },
            keyTerms: [
              { term: "Undercut", definition: "A groove melted into the base metal at the weld toe, leaving a stress-raising notch; caused by excessive current or a long arc." },
              { term: "Back-step sequence", definition: "Welding short segments in the direction opposite the overall progression so the shrinkage of each bead is partly cancelled." },
              { term: "Radiography", definition: "Inspection with X- or gamma-rays that records internal weld defects on film or a digital detector." },
            ],
            examQuestions: [
              {
                q: "List the common welding defects with causes and remedies. Describe dye penetrant testing and radiographic testing.",
                marks: 7,
                outline: [
                  "Group defects: shape, continuity, cracks.",
                  "Undercut and overlap: current and arc-length fixes.",
                  "Porosity and slag: dry electrodes, cleaning, shielding, interpass chipping.",
                  "Lack of penetration and fusion: current, root gap, travel speed, angle.",
                  "Hot vs hydrogen cracks: preheat, low-hydrogen rods, restraint control.",
                  "Dye penetrant: clean, penetrate, remove, develop.",
                  "Radiography: source, film, internal flaws, permanent record.",
                ],
              },
              {
                q: "Distinguish a hot crack from a cold (hydrogen) crack.",
                marks: 2,
              },
              {
                q: "Explain the back-step technique and why it reduces distortion.",
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
      title: "Metal Forming Processes",
      summary:
        "Shaping without chips: hot and cold working with recrystallization as the fence; rolling from bite to coiler; forging sequences and defects; extrusion and drawing as compression versus tension; and the sheet-metal family - shearing, bending, deep drawing.",
      chapter: {
        number: "03",
        title: "Metal Forming Processes",
        intro:
          "Unit III shapes metal plastically: the hot and cold working regimes set by recrystallization, flat rolling with its bite limits and mill arrangements, open- and closed-die forging, extrusion and drawing as opposite stress states, and the sheet-metal operations from blanking to deep drawing.",
        inOneBreath:
          "Forming shapes metal without chips: hot working beats forces with recrystallization while cold working buys finish and strength with strain hardening; rolling drafts by mu^2 R per bite, forging feeds finisher dies through preforms, extrusion pushes profiles through dies while drawing pulls wire in tension, and sheet is sheared, bent and drawn - every process a negotiation among force, friction and fracture.",
        sections: [
          {
            number: "3.1",
            title: "Hot and cold working of metals",
            body: [
              "Deformation above the recrystallization temperature - roughly 0.3-0.5 of the melting point on the kelvin scale - is hot working. New strain-free grains nucleate as fast as the old ones deform, so the metal never work-hardens: forces stay low, enormous reductions come cheap, cast structures break down into refined grains, and ingot porosity closes under the pressure. The bills are oxidation and scale loss, decarburized surfaces, poorer finish and tolerance, die wear, and the logistics of keeping the work hot with reheats between passes. Typical windows: steel rolled and forged at about 1100-1250 C, aluminium worked at 300-450 C.",
              "Below the recrystallization temperature every dislocation stays parked: strain hardening raises strength and hardness while ductility drains away, and the flow stress follows the curve sigma = K x eps^n. Forces are much higher and climb with reduction, so the achievable draft per pass is limited and intermediate anneals must be scheduled into heavy work. The rewards are bright, close-tolerance surfaces - cold-rolled sheet, drawn bar - and the strengthening itself, which is why cold-drawn shafts and cold-headed bolts are stronger than the stock they came from. The degree of cold work, CW = (A0 - Af)/A0 x 100, tracks how much of this strengthening a part has banked. Residual stress and springback are the taxes.",
              "Warm working, between room temperature and recrystallization, trades a little of each regime's weakness for the other's strength. Selection follows the material and the product: reactive or high-strength alloys and large sections go hot; finished thin stock and precision parts go cold. And remember the classic trick question: lead and tin recrystallize below room temperature, so hammering them on a cold bench is metallurgically hot working - the definition is relative, not absolute.",
            ],
            bullets: [
              "Hot working: above the recrystallization temperature (about 0.3-0.5 Tm in kelvin) - no net hardening, refined grains, low forces, scale and poorer finish.",
              "Cold working: below it - strain hardening (sigma = K eps^n), high forces, bright finish, close tolerance, residual stress and springback.",
              "Degree of cold work: CW = (A0 - Af)/A0 x 100 - the bank account of strengthening.",
              "Warm working sits between the regimes: lower forces than cold, better finish than hot.",
              "Lead and tin recrystallize below room temperature - 'cold' work on them is hot working; the definition is relative.",
            ],
            table: {
              caption: "Hot vs cold working - the exam table.",
              headers: ["Aspect", "Hot working", "Cold working"],
              rows: [
                ["Temperature", "above recrystallization", "below recrystallization"],
                ["Strain hardening", "absent - recrystallizes", "retained and cumulative"],
                ["Force per reduction", "low", "high and rising"],
                ["Grain structure", "refined, equiaxed", "elongated, directional"],
                ["Surface", "scaled, decarburized", "bright"],
                ["Tolerance and finish", "poor", "close and fine"],
                ["Residual stress", "low", "high, with springback"],
                ["Examples", "slab rolling, die forging", "wire drawing, deep drawing"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "One metal, two regimes",
              caption: "The recrystallization temperature is the fence between them.",
              left: {
                heading: "Hot working (above Tr)",
                items: [
                  "Recrystallizes as it deforms - no hardening",
                  "Low forces, huge reductions",
                  "Cast grains refined, pores closed",
                  "Scale, decarburization, wide tolerance",
                  "Examples: slab rolling, die forging",
                ],
              },
              right: {
                heading: "Cold working (below Tr)",
                items: [
                  "Strain hardens - stronger, less ductile",
                  "High forces, limited reduction per pass",
                  "Bright finish, close tolerances",
                  "Residual stress and springback",
                  "Examples: wire drawing, deep drawing",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The lead trick",
              body: "When the examiner asks 'can hot working happen at room temperature?', answer yes and quote lead and tin: their recrystallization temperatures sit below room temperature, so working them cold is metallurgically hot working. That one line is the whole mark.",
            },
            keyTerms: [
              { term: "Recrystallization temperature", definition: "The temperature above which new strain-free grains replace deformed ones fast enough to erase work hardening." },
              { term: "Degree of cold work", definition: "The percentage reduction of cross-sectional area, (A0 - Af)/A0 x 100, measuring accumulated cold deformation." },
              { term: "Warm working", definition: "Deformation between room temperature and the recrystallization temperature, trading modest force for decent finish." },
            ],
            examQuestions: [
              {
                q: "Differentiate hot working from cold working with respect to temperature, forces, structure, properties and applications.",
                marks: 7,
                outline: [
                  "Define both through the recrystallization temperature.",
                  "Temperature windows: steel 1100-1250 C, aluminium 300-450 C.",
                  "Forces and power: hot low, cold high with hardening.",
                  "Structure and properties: refined equiaxed vs elongated hardened grains.",
                  "Surface, tolerance and residual stress differences.",
                  "Intermediate annealing in cold work; scale in hot.",
                  "Applications: forged crankshaft vs drawn wire; close with warm working.",
                ],
              },
              {
                q: "Define degree of cold work with its formula.",
                marks: 2,
              },
              {
                q: "Why is intermediate annealing required in heavy cold working?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Rolling",
            body: [
              "Flat rolling squeezes stock between two counter-rotating rolls, and friction is the whole engine: the rolls must grip the work and pull it through the gap. The draft is d = t0 - tf, and the bite has a hard limit - the maximum draft obeys dmax = mu^2 R, so friction, roll diameter and roll-surface condition decide how much reduction one pass can take; contact angles in practice stay in the region of a few to twenty degrees. Inside the gap, the surface of the stock moves slower than the rolls at entry and faster at exit, and the neutral plane between is where the two speeds match - forward slip at exit runs a few per cent. The contact length L = sqrt(R x d) with the mean flow stress sets roll force, torque and power.",
              "Mill arrangements follow the gauge war. Two-high mills, often reversing, take big slabs; three-high mills pass the work up and down with elevator tables; four-high mills add backup rolls so the small work rolls cannot bend - bending is exactly what makes wavy edges, so crown, camber, hydraulic roll bending and roll crossing fight it; cluster and Sendzimir mills stack still more rolls for foil and thin strip; tandem lines string three to seven stands in sequence. Products sort by size: blooms (large squares), billets (smaller squares), slabs (wide rectangles); plates above about 6 mm, sheets and strip below, foil thinnest. A hot strip line runs reheat furnace, descaler, roughing stands, finishing tandem, run-out table and coiler; pickling, cold reduction, annealing and temper rolling follow for finished cold-rolled sheet.",
              "Defects read the roll gap like a gauge report. Roll deflection over-reduces the edges and they buckle into wavy edges; an over-crowned or thermally grown roll does the opposite and the centre buckles into zipper cracks; low-ductility stock cracks at the edges; and heavy, badly distributed drafts can split the stock end-on into alligatoring. Thread and gear rolling cold-form helical and toothed profiles on bar surfaces, raising fatigue strength because the grain follows the form; ring rolling grows seamless rings for bearings and flanges.",
            ],
            bullets: [
              "Draft d = t0 - tf; bite limit dmax = mu^2 R - friction and roll radius decide the pass.",
              "Neutral plane: where roll surface speed equals stock speed; exit runs a few per cent faster (forward slip).",
              "Contact length L = sqrt(R d); with mean flow stress it sets roll force and power.",
              "Mills: two-high, three-high, four-high with backups, cluster/Sendzimir for foil, tandem lines of 3-7 stands.",
              "Defects: wavy edges (roll deflection), zipper cracks (over-crowned roll), edge cracking (poor ductility), alligatoring (heavy uneven drafts).",
            ],
            codeExample: {
              language: "python",
              caption: "One-pass rolling arithmetic: draft, bite check, contact length, exit speed.",
              code: `import math

# Flat rolling check for one hot pass (steel)
t0, tf = 20.0, 14.0      # entry / exit thickness, mm
R      = 400.0           # work roll radius, mm
mu     = 0.18            # roll-work friction
v0     = 1.2             # entry speed, m/s

d      = t0 - tf
red_pct = 100 * d / t0
L      = math.sqrt(R * d)          # contact length, mm
d_max  = mu ** 2 * R               # bite limit, mm
v1     = v0 * t0 / tf              # volume constancy, spread ignored

print(f"draft              = {d:.1f} mm")
print(f"reduction          = {red_pct:.1f} %")
print(f"contact length     = {L:.1f} mm")
if d <= d_max:
    print(f"bite OK (max draft = {d_max:.1f} mm)")
else:
    print("draft exceeds the bite limit - split the pass")
print(f"exit speed         = {v1:.2f} m/s")`,
            },
            diagram: {
              kind: "flow",
              title: "Slab to coil on a hot strip line",
              caption: "Each station removes one variable from the final gauge.",
              steps: [
                { label: "Reheat furnace", note: "slab to about 1200 C" },
                { label: "Descaler", note: "high-pressure spray strips scale" },
                { label: "Roughing mill", note: "width and shape set, big drafts" },
                { label: "Finishing tandem", note: "gauge closed to tolerance" },
                { label: "Run-out and coiler", note: "cooling rate fixes coil properties" },
              ],
            },
            callout: {
              type: "tip",
              title: "The bite formula is a mark machine",
              body: "dmax = mu^2 R answers several questions at once: why small rolls bite less, why roughened roll surfaces allow heavier drafts, and why heavy single-pass reductions demand bigger rolls. Quote it, then interpret it in one sentence - that is the full pattern for formula-based short questions.",
            },
            keyTerms: [
              { term: "Angle of bite", definition: "The contact angle subtended by the roll surface at entry; rolling only bites while friction sustains it - the limit is dmax = mu^2 R." },
              { term: "Neutral plane", definition: "The location in the roll gap where roll surface speed equals stock speed; slip direction reverses across it." },
              { term: "Four-high mill", definition: "A mill whose small work rolls are backed by large backup rolls, combining fine gauge control with bending stiffness." },
            ],
            examQuestions: [
              {
                q: "Explain flat rolling with a sketch. Define draft, angle of bite and neutral plane, and describe any four rolling mill arrangements.",
                marks: 7,
                outline: [
                  "Sketch: rolls, entry and exit thickness, contact angle.",
                  "Define draft d = t0 - tf and percentage reduction.",
                  "Bite condition dmax = mu^2 R; neutral plane and forward slip.",
                  "Two-high, three-high, four-high, cluster/Sendzimir, tandem.",
                  "Roll force from L = sqrt(R d) and mean flow stress.",
                  "Defects: wavy edges, zipper cracks, edge cracking, alligatoring with causes.",
                  "Products: bloom, billet, slab, plate, sheet; thread and gear rolling.",
                ],
              },
              {
                q: "Why do four-high mills use backup rolls?",
                marks: 2,
              },
              {
                q: "Name any two rolling defects with their causes.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Forging",
            body: [
              "Forging deforms metal in compression between dies, and the compression is the point: the grain flow follows the contour and the part ends up stronger in fatigue than any casting or machined equivalent. Open-die (smith) forging works hot stock between flat or swage dies while the operator manoeuvres the work - shape is limited but size is not, and ship shafts, rings and large discs are made this way. Closed-die (impression-die) forging drives a heated billet through a progression of die cavities to a finisher that is the part plus flash: excess metal escapes into the gutter around the parting line, and the thin flash land chokes it so pressure inside the cavity rises until the corners fill. Flash is a control valve, not waste - and it is trimmed off afterwards.",
              "The sequence is the craft: cut the billet, heat it (steel about 1100-1250 C), fuller and roll (edge) to distribute metal along the axis, block in the blocker die to a near-form, finish in the finisher die, trim the flash, then heat-treat. Hammers deliver impact blows and suit smaller work; hydraulic and mechanical presses squeeze slowly, working the centre of large sections and controlling deformation precisely. Die design is geometry with rules: parting line placed to ease flow, draft of about 3-7 deg so the forging ejects, generous fillet and corner radii so metal turns corners without folding, and flash-land geometry tuned to the cavity's appetite.",
              "Defects are process errors wearing costumes. Unfilled dies follow cold stock or short billet weight; cold shuts and laps form when metal folds over itself at thin flash or sharp corners; mismatch shifts the die halves and is stopped by guide pins; scale pits mark oxidised stock; internal cracks follow inclusions or too-violent working; grain growth indicts overheating. The remedies are boring and effective: right billet volume, right temperature, radii that smooth the flow, clean stock, aligned dies, controlled strain rate. Forgeability - mild steel and aluminium alloys good, high alloys poorer - sets the window, and crankshafts, connecting rods, gear blanks, turbine discs and hand tools live inside it.",
            ],
            bullets: [
              "Open-die: flat or swage dies, manoeuvred stock, unlimited size - shafts, rings, discs; closed-die: cavities, flash, accuracy and grain flow.",
              "Flash is a control valve: the thin flash land chokes, cavity pressure rises until the corners fill, then the flash is trimmed.",
              "Closed-die sequence: cut, heat, fuller and roller preforms, blocker die, finisher die, trim, heat treat.",
              "Hammer (impact, smaller work) vs press (slow squeeze, centre working, large sections); die draft 3-7 deg and generous radii.",
              "Defects and remedies: unfilled dies, laps and cold shuts, mismatch, scale pits, grain growth - each maps to a process error.",
            ],
            table: {
              caption: "Open-die vs closed-die forging.",
              headers: ["Aspect", "Open-die", "Closed-die"],
              rows: [
                ["Dies", "flat or swage", "impression cavities"],
                ["Size", "very large possible", "limited by press capacity"],
                ["Quantity", "one-off and small lots", "medium and large lots"],
                ["Accuracy and finish", "poor - machined later", "good as-forged"],
                ["Grain flow", "general direction", "follows the contour"],
                ["Equipment", "hammer or press plus skill", "die-forging hammer or press"],
                ["Examples", "ship shafts, rings, discs", "cranks, con-rods, gear blanks"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Sequencing a closed-die forging",
              caption: "Preform dies earn their cost; skipping them spends it.",
              start: "A closed-die forging is planned",
              branches: [
                { label: "Fuller and roller preforms", outcome: "metal distributed where the finisher needs it", good: true },
                { label: "Blocker (blocking) die", outcome: "smooth flow into near-final shape, less die wear", good: true },
                { label: "Finisher die + flash gutter", outcome: "cavity pressure completes the fill; flash trimmed", good: true },
                { label: "Bar stock straight to the finisher", outcome: "laps, unfilled sections, overloaded die", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Why flash exists",
              body: "Because the thin flash land chokes, pressure inside the finisher cavity rises until the cavity fills - only then does excess metal escape into the gutter. Write that sentence when asked 'why is flash provided in die forging', add 'flash is trimmed after', and the two marks are banked.",
            },
            keyTerms: [
              { term: "Flash", definition: "The thin excess metal squeezed into the gutter at the die parting line; its choke builds the pressure that fills the cavity and is trimmed off afterwards." },
              { term: "Grain flow", definition: "The fibrous alignment of grains and inclusions in a forging following the part contour, raising fatigue strength." },
              { term: "Blocking die", definition: "The intermediate die impression that shapes the preform so metal flows smoothly into the finisher." },
            ],
            examQuestions: [
              {
                q: "Differentiate open-die and closed-die forging. Describe the sequence of operations in closed-die forging and list forging defects with remedies.",
                marks: 7,
                outline: [
                  "Define forging: compressive deformation between dies.",
                  "Open-die: flat or swage dies, large one-offs, manoeuvred stock.",
                  "Closed-die: billet, die cavities, flash and gutter; accuracy and grain flow.",
                  "Sequence: cut, heat, fuller/roller, blocker, finisher, trim.",
                  "Hammer vs press: impact vs squeeze; part size and control.",
                  "Die design: parting line, draft 3-7 deg, radii, flash land.",
                  "Defects with remedies: unfilled, laps, mismatch, scale pits, grain growth.",
                ],
              },
              {
                q: "State two functions of flash in die forging.",
                marks: 2,
              },
              {
                q: "Why is a forged component stronger than a cast or machined one?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Extrusion and drawing",
            body: [
              "Extrusion pushes. A heated billet in a container is forced by a ram - with a disposable dummy block between ram and billet - through a die opening, and the emerging section is the die's negative: almost any profile a die can carry, from window frames to heat-sink fins. Direct extrusion drags the billet along the container wall, so friction is high, a dead-metal zone forms at the back, and a spent butt remains in the container; indirect extrusion mounts the die on a hollow ram and pushes the die into the billet, erasing container friction, lowering force, but the ram limits product length. Hydrostatic extrusion surrounds the billet with pressurised fluid for uniform deformation in brittle metals; impact extrusion strikes a small slug cold at high speed and makes collapsible tubes and cartridge cases. Hot windows: aluminium alloys about 350-450 C, copper and brass 650-950 C; the extrusion ratio (billet area over product area) commonly runs 10-100 in one hot pass.",
              "Drawing pulls. Stock in tension is dragged through a converging die, and because the emerged product behind the die carries the entire load, the drawing stress must stay below its own yield - that caps reduction per pass (commonly about 15-40% of area for steel wire) and schedules intermediate anneals into fine drawing. Dies of cemented carbide serve most gauges and diamond the finest; dry soap lubricates dry drawing, emulsions wet drawing; the die half-angle runs about 6-12 deg with a short land to size. Tube drawing works over a plug or a mandrel or by sinking. The characteristic defect is the centre burst - internal chevron cracks from an unhappy combination of die angle and reduction, invisible from outside until the product fails; surface scoring betrays worn dies.",
              "The two processes bracket the stress state, and that is the exam answer. Extrusion is triaxial compression: huge single-pass reductions, complex profiles, but batch lengths and a press. Drawing is tension: modest reductions, but continuous coil production, superb surface and precise gauge. Extrusion pressure grows with mean flow stress times the logarithm of the area ratio; drawing stress obeys the same logarithm with the exit yield as the ceiling - both answer to friction and die angle.",
            ],
            bullets: [
              "Direct extrusion: ram, dummy block, high container friction, butt left behind; indirect: die on hollow ram, no wall friction, ram-limited length.",
              "Variants: hydrostatic (pressurised fluid, brittle metals) and impact (cold, collapsible tubes and cartridges).",
              "Extrusion ratio = billet area / product area, commonly 10-100 in one hot pass; Al at 350-450 C, brass at 650-950 C.",
              "Wire drawing is tension-limited: 15-40% area reduction per pass, carbide or diamond dies, soap lubrication, anneals between passes.",
              "Centre burst (chevron crack): internal defect from wrong die angle and reduction - invisible from outside.",
            ],
            table: {
              caption: "Three ways to make long product.",
              headers: ["Aspect", "Direct extrusion", "Indirect extrusion", "Wire drawing"],
              rows: [
                ["Stress state", "compression via ram", "compression, no wall friction", "tension"],
                ["Per-pass reduction", "large (ratio 10-100)", "large", "small (15-40% area)"],
                ["Section", "complex profiles", "complex profiles", "round, precise"],
                ["Length limit", "container and butt loss", "hollow ram", "coil-continuous"],
                ["Typical product", "Al window sections", "sections where force matters", "wire, rod, tube"],
                ["Extra care", "billets and butts", "ram stiffness", "pointing, anneals"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Direct extrusion of an aluminium section",
              caption: "Five stations between cast billet and finished length.",
              stages: [
                { label: "Billet cast and scalped", note: "clean skin, uniform heat 350-450 C" },
                { label: "Load container", note: "dummy block behind the billet" },
                { label: "Ram pushes", note: "metal shears through the dead zone and flows" },
                { label: "Run-out and stretch", note: "section straightened under tension" },
                { label: "Shear and cut", note: "butt removed; lengths cut to order" },
              ],
            },
            callout: {
              type: "tip",
              title: "One sentence answers half the paper",
              body: "Extrusion pushes a billet through a die; drawing pulls the product through one. Therefore drawing stress is capped by the yield strength of the emerging product while extrusion pressure is not - everything else (reduction per pass, profile complexity, product length) follows from that single line.",
            },
            keyTerms: [
              { term: "Extrusion ratio", definition: "Billet cross-sectional area divided by product area; typical hot values 10-100, fixing the reduction in one pass." },
              { term: "Dummy block", definition: "The disposable disc between ram and billet in direct extrusion, protecting the ram from heat and pressure." },
              { term: "Centre burst", definition: "Internal chevron cracks in drawn or extruded product from unsuitable die angle and reduction; invisible from the surface." },
            ],
            examQuestions: [
              {
                q: "Explain direct and indirect extrusion with sketches and compare them. Why is the extrusion force lower in indirect extrusion?",
                marks: 7,
                outline: [
                  "Principle: ram forces billet through die; section is the die's negative.",
                  "Direct sketch: container, ram, dummy block, die, butt.",
                  "Indirect sketch: die on a hollow ram moving into the billet.",
                  "Friction: direct drags the billet on the container wall; indirect does not.",
                  "Consequences: force, billet length limit, butt loss.",
                  "Hydrostatic and impact variants, one line each.",
                  "Products: aluminium sections; extrusion ratio 10-100.",
                ],
              },
              {
                q: "Why is the reduction per pass limited in wire drawing?",
                marks: 2,
              },
              {
                q: "Name two products each of impact extrusion and tube drawing.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Sheet metal working",
            body: [
              "Sheet is cut by shearing: punch and die pass close enough that fracture runs to meet from both sides. Clearance between them - a few per cent of sheet thickness per side, about 5-10% overall for mild steel - decides the edge: too little and the fractures miss, leaving a ragged double-shear zone; too much and the sheet is dragged and the edge rolls over. The punch force follows F = L x t x tau, the sheared perimeter times thickness times shear strength, and bevelled punches cut the peak. Blanking keeps the cut-out as the product (disks, washers); punching or piercing throws the slug away and keeps the sheet (perforated panels); notching, trimming and slitting are the same mechanics in different directions. Fine blanking adds a clamping ring and near-zero clearance on a triple-action press to shear a fully burnished edge.",
              "Bending strains the outer fibres in tension and the inner in compression, and when the punch lifts, the elastic fraction springs the part open again - springback, larger wherever the yield-to-modulus ratio is larger. Compensate by overbending, by bottoming or coining the radius under pressure, or by stretch bending. The bend allowance is computed through the neutral axis with a K-factor (about 0.33 for air bending to 0.5 for bottoming), and the minimum bend radius runs about one to four thicknesses by material and by the bend's angle to the rolling direction. V-bending, U-bending and edge bending cover the press-brake work; roll bending and continuous roll forming make long profiles from coil.",
              "Deep drawing turns a flat blank into a cup: the punch pushes the blank through a die ring while a blank holder presses the flange. That holder is the entire balancing act - too soft and the flange wrinkles, too hard and the wall tears at the punch radius. The draw ratio D/d must stay below the limiting value (around 2 for drawing-quality steel); deeper cups need redraws or ironing, where the wall is squeezed thinner between punch and die - the beverage-can route. Earing on the cup rim betrays planar anisotropy in the sheet. Spinning, stretch forming and embossing finish the family, and progressive dies deliver a finished part with every press stroke.",
            ],
            bullets: [
              "Shearing mechanics: elastic, plastic, then fracture from both sides; clearance about 5-10% of thickness total decides edge quality.",
              "Blanking vs punching is decided by which piece is kept; fine blanking buys a burnished edge with a clamping ring and triple action.",
              "Punch force F = L t tau; bevelled or staggered punches cut the peak force.",
              "Springback is the elastic recovery of a bend - compensate by overbend, bottoming or stretch bending; K-factor fixes bend allowance.",
              "Deep drawing: blank holder balances wrinkling against tearing; draw ratio below about 2, deeper by redrawing or ironing; ears betray anisotropy.",
            ],
            table: {
              caption: "Sheet-metal operations at a glance.",
              headers: ["Operation", "What happens", "Key control", "Typical part"],
              rows: [
                ["Blanking", "slug is the product", "clearance", "disks, washers, blanks"],
                ["Punching", "hole kept in the sheet", "clearance", "perforated panels"],
                ["Bending", "plastic bend about a line", "springback", "brackets, enclosures"],
                ["Deep drawing", "cup from a flat blank", "blank holder pressure", "pots, cans, sinks"],
                ["Spinning", "roller forms over a mandrel", "feed and pressure", "cones, domes, bowls"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Sheet-forming severity ladder",
              caption: "Higher rungs punish poor process control faster.",
              tiers: [
                { label: "Stretch forming", note: "thinning is the failure mode" },
                { label: "Deep drawing", note: "the wrinkle-versus-tear trade" },
                { label: "Bending", note: "springback is the enemy" },
                { label: "Shearing and blanking", note: "mostly force and clearance" },
              ],
            },
            callout: {
              type: "warning",
              title: "Blanking is not punching",
              body: "The distinction is which piece you keep, not which tool you hold: if the cut-out is the part, it is blanking; if the sheet with a hole in it is the part, it is punching. One paper in five tests exactly this sentence.",
            },
            keyTerms: [
              { term: "Clearance", definition: "The gap between punch and die in shearing, a few per cent of sheet thickness; it decides whether the two fracture fronts meet cleanly." },
              { term: "Springback", definition: "The elastic recovery of a bent sheet on unloading, compensated by overbending, bottoming or stretch bending." },
              { term: "Blank holder", definition: "The ring pressing the flange in deep drawing - too soft and it wrinkles, too hard and the wall tears." },
            ],
            examQuestions: [
              {
                q: "Explain the mechanics of shearing and derive the blanking force. Distinguish blanking, punching and fine blanking.",
                marks: 7,
                outline: [
                  "Mechanics: elastic, plastic and fracture phases; penetration then fracture.",
                  "Role of clearance; effect of too much and too little.",
                  "Derive F = L x t x tau with units and an example.",
                  "Bevel or stagger punches to cut peak force.",
                  "Blanking vs punching: which piece is kept.",
                  "Fine blanking: clamping ring, near-zero clearance, burnished edge.",
                  "Examples: washers, perforated sheet, gear blanks.",
                ],
              },
              {
                q: "Define springback and name one method of compensating it.",
                marks: 2,
              },
              {
                q: "Why do ears form on the rim of a deep-drawn cup?",
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
      title: "Machining Processes",
      summary:
        "Cutting with tools: orthogonal and oblique cutting with Merchant's relation, cutting tool materials and wear, Taylor's tool life and machining economics, the lathe-drill-mill trio, grinding wheels and cutting fluids.",
      chapter: {
        number: "04",
        title: "Machining Processes",
        intro:
          "Unit IV removes metal with geometry: the orthogonal cutting model and its oblique reality, the materials that hold a cutting edge at 600-1000 C, Taylor's trade between speed and tool life with the economics on top, the turning-drilling-milling trio with their formulas, and grinding plus cutting fluids to finish the story.",
        inOneBreath:
          "Machining slices metal into chips: orthogonal models turn shear angle, rake and friction into forces through Merchant; tool materials climb a pyramid that trades toughness for hot hardness; Taylor's V T^n = C trades speed against life and money; lathes, drills and mills apply it at feeds set by finish; and grinding's micro-grits with cutting fluids finish what tools cannot reach.",
        sections: [
          {
            number: "4.1",
            title: "Orthogonal and oblique cutting",
            body: [
              "Cutting is localised fracture, managed. The tool tip shears a thin layer off the work along the shear plane, and the layer leaves as a chip that is thicker and shorter than the layer removed - which is why the chip thickness ratio rc = t/tc stays below 1. In the idealised orthogonal cut the cutting edge is perpendicular to the cutting velocity and the inclination is zero: a two-dimensional plane-strain problem that can actually be solved. The shear angle phi follows from measurement: tan phi = rc cos alpha / (1 - rc sin alpha), linking the rake angle alpha and the chip ratio to the orientation of the shear plane. Merchant's analysis then adds friction: phi = 45 deg + alpha/2 - beta/2, so a larger rake or a smaller friction angle beta raises the shear angle, thins the chip and cuts the forces and power - cause and effect in one line.",
              "Chip type reports the physics. Ductile metal at speed gives a continuous chip - efficient, but it snarls around the tool until a chip breaker curls it. Brittle work (grey cast iron, brass) or very low speed with a small rake gives the discontinuous chip, the shear zone fracturing periodically. The saboteur of finishing cuts is the built-up edge: at low-to-moderate speeds, work metal welds onto the rake face in layers, grows, then periodically shears away - part leaves with the chip, part embeds in the machined surface, roughening it and making the forces fluctuate. Raising the cutting speed, feeding a high-lubricity cutting fluid, or using a coated polished rake suppresses it.",
              "Real tools almost never cut orthogonally. They incline the cutting edge by the inclination angle i, and the chip then flows sideways across the rake face instead of straight back - by Stabler's rule, at an angle close to i itself. Obliquity is everywhere in practice: turning inserts, twist drills and milling cutters all run inclined, and the edge enters the work gradually, damping impact, slicing the chip away from the finished surface and improving chip control. Treat orthogonal cutting as the laboratory case that calibrates force models, and oblique cutting as the shop floor that applies them - exams ask for both, sketched side by side.",
            ],
            bullets: [
              "Orthogonal cutting: edge perpendicular to velocity, zero inclination, 2D plane strain - the solvable model.",
              "Chip thickness ratio rc = t/tc < 1; tan phi = rc cos alpha / (1 - rc sin alpha) converts measurement into shear angle.",
              "Merchant: phi = 45 deg + alpha/2 - beta/2 - more rake or less friction raises phi, thins chips, cuts power.",
              "Chip types: continuous (ductile, speed), discontinuous (brittle, low speed), built-up edge (welded layers, roughened surface).",
              "Oblique cutting: inclination angle i, sideways chip flow (Stabler), gradual edge entry - the geometry of real tools.",
            ],
            table: {
              caption: "Orthogonal vs oblique cutting.",
              headers: ["Feature", "Orthogonal", "Oblique"],
              rows: [
                ["Cutting edge", "perpendicular to velocity", "inclined at angle i"],
                ["Inclination angle", "zero", "non-zero"],
                ["Chip flow", "straight back, in the cut plane", "sideways across the face"],
                ["Analysis", "2D plane strain, solvable", "3D, largely empirical"],
                ["Examples", "parting, planing, broaching", "turning, drilling, milling"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two cutting geometries",
              caption: "One is a solvable model; the other runs the shop.",
              left: {
                heading: "Orthogonal",
                items: [
                  "Edge at 90 deg to cutting velocity",
                  "2D plane-strain deformation",
                  "Chip flows straight off the face",
                  "Merchant analysis applies",
                  "Examples: parting, planing, broaching",
                ],
              },
              right: {
                heading: "Oblique",
                items: [
                  "Edge inclined at angle i",
                  "3D deformation, sideways flow",
                  "Chip curls away from the work",
                  "Edge enters the work gradually",
                  "Examples: turning, twist drills, milling",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Merchant, in cause-and-effect form",
              body: "phi = 45 + alpha/2 - beta/2 is asked as a state-and-explain almost every alternate session. Write: friction angle beta falls (better lubrication) or rake alpha rises (sharper tool), so the shear angle rises, the chip thins, and forces and power fall. That chain is the marking scheme.",
            },
            keyTerms: [
              { term: "Shear angle", definition: "The angle phi between the cutting velocity direction and the shear plane; larger phi means thinner chips and lower cutting forces." },
              { term: "Chip thickness ratio", definition: "rc = uncut chip thickness divided by chip thickness, always below 1; it converts measurement into the shear angle." },
              { term: "Built-up edge", definition: "Layers of work metal welded onto the rake face at low speeds, which periodically break off and roughen the machined surface." },
            ],
            examQuestions: [
              {
                q: "Describe orthogonal cutting with a sketch. Define shear angle and chip thickness ratio, and state Merchant's relation with its implications.",
                marks: 7,
                outline: [
                  "Sketch: tool, rake alpha, shear plane phi, chip, velocities.",
                  "Define uncut thickness t and chip thickness tc; rc = t/tc < 1.",
                  "Relation: tan phi = rc cos alpha / (1 - rc sin alpha).",
                  "Merchant: phi = 45 + alpha/2 - beta/2; interpret each term.",
                  "Cutting force and power: P = Fc x V.",
                  "Chip types: continuous, discontinuous, built-up edge with their conditions.",
                  "Conclude with why practical tools cut obliquely.",
                ],
              },
              {
                q: "What is a built-up edge and how is it controlled?",
                marks: 2,
              },
              {
                q: "Why do practical turning tools use oblique cutting?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Cutting tool materials and geometry",
            body: [
              "A cutting tool must keep its edge where the work would rather take it - at interface temperatures of 600-1000 C under scuffing contact. The ladder of tool materials trades toughness for hot hardness. Carbon tool steel softens near 250 C and survives only the slowest cuts. High-speed steel - the 18-4-1 tungsten-chromium-vanadium recipe - holds to about 600 C, turns steel at 30-50 m/min, and still makes the world's drills, taps, reamers and broaches. Cast cobalt alloys (Stellite) push beyond. Cemented carbide, tungsten-carbide grains in a cobalt binder, works to about 1000 C at 100-300 m/min as brazed tips or clamped indexable inserts, classified in ISO application groups. Thin coatings - TiN, TiC, Al2O3, and multilayers - slow diffusion and multiply life. Ceramics (alumina, silicon nitride) run 300-600 m/min on cast iron with negative rakes; CBN turns hardened steel above 55 HRC, and polycrystalline diamond handles abrasive non-ferrous work.",
              "Geometry decides how the material meets the work. The ASA tool signature reads, in order: back rake, side rake, end relief, side relief, end cutting-edge angle, side cutting-edge angle and nose radius - seven elements that set chip flow (the rakes), stop rubbing (the reliefs), share the load (the cutting-edge angles) and finish the corner (the nose radius, which also fights chatter). Positive rakes lower forces but weaken the tip; negative rakes, standard for carbide and ceramic, put the load into compression and survive impact. And nose radius rules finish: the geometry-limited roughness of a turning pass is Ra = f^2 / (32 r) - feed squared over 32 times the nose radius - so finish passes drop feed and raise the radius.",
              "Wear writes itself on two faces. Flank wear - the flat worn land VB on the clearance face - grows steadily, raises forces by rubbing, drags the dimension out of tolerance, and ends tool life at the ISO 3685 criterion of 0.3 mm average (0.6 mm maximum). Crater wear hollows the rake face where the chip runs hottest - a diffusion disease of high speeds, fought by aluminium-oxide coatings; its depth KT is measured against the danger line. Beyond these come nose wear, depth-of-cut notching, chipping, thermal cracking on interrupted cuts and plastic deformation. The selection pyramid holds the rule: climb only as high as the job allows, because every step up buys hot hardness with toughness.",
            ],
            bullets: [
              "Requirements: hot hardness, wear resistance, toughness, chemical inertness, thermal-shock resistance, economy - always in trade.",
              "Ladder: carbon steel (~250 C), HSS (~600 C, 30-50 m/min), carbide (~1000 C, 100-300 m/min), coated carbide, ceramic (300-600 m/min), CBN, PCD.",
              "ASA signature: back rake, side rake, end relief, side relief, end and side cutting-edge angles, nose radius - seven elements, memorised in order.",
              "Positive rakes cut forces; negative rakes (carbide, ceramic) put load into compression and survive impact.",
              "Flank wear VB sets dimensional life (ISO 3685: 0.3 mm average); crater wear KT is the high-speed diffusion disease.",
            ],
            table: {
              caption: "The tool-materials ladder.",
              headers: ["Material", "Holds edge to", "Turning speed", "Typical use"],
              rows: [
                ["Carbon tool steel", "about 250 C", "under 10 m/min", "hand tools, light duty"],
                ["High-speed steel", "about 600 C", "30-50 m/min", "drills, taps, reamers, broaches"],
                ["Cemented carbide", "about 1000 C", "100-300 m/min", "indexable inserts, production"],
                ["Ceramics", "about 1200 C", "300-600 m/min", "cast iron finishing, dry cutting"],
                ["CBN / PCD", "well beyond carbide", "200-1000 m/min", "hardened steel; abrasive non-ferrous"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The tool-material pyramid",
              caption: "Climb for hot hardness; descend for toughness - the job picks the tier.",
              tiers: [
                { label: "PCD and CBN", note: "hardest, most brittle" },
                { label: "Ceramics", note: "very high speed, rigid setups" },
                { label: "Coated carbides", note: "the production default" },
                { label: "Uncoated carbides and cast alloys", note: "general production turning" },
                { label: "HSS and carbon steel", note: "toughest, slowest" },
              ],
            },
            callout: {
              type: "exam",
              title: "Wear vocabulary is worth marks by itself",
              body: "Flank wear VB on the clearance face sets dimensional life; crater wear KT on the rake face is the high-speed disease that coatings exist to slow. Sketch one turning insert with both marked, quote the ISO 3685 numbers (0.3 mm average, 0.6 mm maximum flank land), and the wear question is finished.",
            },
            keyTerms: [
              { term: "Hot hardness", definition: "The ability of a tool material to retain cutting hardness at elevated edge temperatures - the axis on which tool materials are ranked." },
              { term: "Flank wear", definition: "The wear land VB on the tool's clearance face; it grows with cutting time and fixes the dimensional end of tool life." },
              { term: "Tool signature", definition: "The ordered set of angles and nose radius that completely specifies a single-point cutting tool." },
            ],
            examQuestions: [
              {
                q: "State the requirements of a cutting tool material. Describe the main tool materials with temperature and speed ranges, and differentiate flank wear from crater wear.",
                marks: 7,
                outline: [
                  "Requirements: hot hardness, wear resistance, toughness, chemical stability, economy.",
                  "Carbon steel and HSS: temperatures, speeds, uses.",
                  "Cemented carbide: composition, ISO groups, insert style.",
                  "Coatings and ceramics: what they add, where they run.",
                  "CBN and PCD: hardened steel and abrasive non-ferrous work.",
                  "Flank wear VB: location, growth, ISO 3685 criterion.",
                  "Crater wear KT: diffusion at high speed; coating defence.",
                ],
              },
              {
                q: "Why are ceramic tools used with negative rake angles?",
                marks: 2,
              },
              {
                q: "Distinguish flank wear from crater wear with a sketch.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Tool life, Taylor's equation and economics",
            body: [
              "Tool life is the machining time between a fresh edge and a defined wear limit - and speed dominates it. Taylor found in 1907 that cutting speed and tool life trade along a straight line on log-log paper: V T^n = C. The exponent n runs about 0.1-0.16 for high-speed steel, 0.2-0.35 for carbide and 0.5-0.7 for ceramics, so a big n means life falls slowly as speed rises. C is the extrapolated speed for one minute of life, fixed by the tool-work pair. Feed and depth join through the extended form V T^n f^a d^b = C, and the ranking of effects is the practical lesson: speed hurts tool life most, feed next, depth least - which is why roughing cuts go deep, not fast.",
              "Machinability bundles how kindly a material machines: tool life at a standard speed (the V-rating, e.g. speed for 60 minutes of life), the specific cutting energy it demands, and the finish it allows - usually indexed against a free-machining reference steel. Sulphur and lead make free-machining grades by a small sacrifice in toughness. Economics then closes the loop: every component carries machining cost, which falls as speed rises, and tooling cost - insert price plus change time per edge - which rises with speed as edges burn faster. The total is U-shaped; the economic cutting speed sits at its minimum, the maximum-production speed somewhat above it, and Gilbert's high-efficiency range lies between the two.",
              "Surface finish is the last variable the speeds and feeds must buy. For a rounded-nose turning tool the geometry alone sets Ra = f^2 / (32 r) - feed squared over 32 times nose radius in consistent units - so finish passes drop the feed and raise the radius. The rest of finish is process behaviour: built-up edge tears the surface, vibration chatters it into waves, and flank wear drags it grey. The code below walks Taylor's arithmetic both ways - life from speed, speed for a target life - and prices the finish, which is exactly the numerical pattern the examiner sets.",
            ],
            bullets: [
              "Taylor: V T^n = C on log-log axes; n = 0.1-0.16 (HSS), 0.2-0.35 (carbide), 0.5-0.7 (ceramic).",
              "Solve it as T = (C/V)^(1/n) - the exponent applies to the whole ratio; this is the classic slip.",
              "Extended Taylor V T^n f^a d^b = C ranks the damage: speed worst, feed next, depth least.",
              "Machinability = tool life + power + finish at a reference speed; free-machining grades add sulphur and lead.",
              "Cost per piece is U-shaped in speed: machining cost falls, tooling cost rises; economic speed at the minimum, production speed above it.",
            ],
            codeExample: {
              language: "python",
              caption: "Taylor tool-life arithmetic and a geometry-limited finish estimate.",
              code: `import math

# Taylor tool-life arithmetic, coated carbide on steel
n, C = 0.25, 250          # V in m/min, T in min

for V in (100, 150, 200, 250):
    T = (C / V) ** (1 / n)          # T = (C/V)^(1/n)
    print(f"V = {V:3d} m/min  ->  T = {T:7.1f} min")

# Speed for a target life of 30 minutes
T_req = 30
V_30 = C / T_req ** n
print(f"V for T = 30 min: {V_30:.1f} m/min")

# Geometry-limited surface finish in turning
f, r_nose = 0.15, 0.8               # feed mm/rev, nose radius mm
Ra = f ** 2 / (32 * r_nose) * 1000  # converts mm to micrometres
print(f"Estimated Ra = {Ra:.2f} micrometre")`,
            },
            diagram: {
              kind: "cycle",
              title: "The tool-management loop",
              caption: "Run the loop and the Taylor line keeps updating itself.",
              steps: [
                { label: "Pick speed from Taylor data", note: "V T^n = C for the pair" },
                { label: "Machine the batch", note: "log cutting time" },
                { label: "Watch flank wear VB", note: "or on-machine probing" },
                { label: "Reach the criterion", note: "index or regrind the edge" },
                { label: "Feed the log back", note: "refit n and C" },
              ],
            },
            callout: {
              type: "warning",
              title: "The exponent trap",
              body: "Students who rearrange Taylor to T = C/V^n and lose the exponent fail the numerical even with correct physics. Write T = (C/V)^(1/n) once, plug numbers once, and the result is safe. Example: C = 226.8, n = 0.2 at V = 150 gives T = 1.512^5, about 7.9 minutes.",
            },
            keyTerms: [
              { term: "Taylor's equation", definition: "V T^n = C: cutting speed and tool life trade along a log-log line fixed by the tool and work material." },
              { term: "Machinability", definition: "A composite rating of how kindly a material machines - tool life, power demand and finish - indexed to a reference free-machining steel." },
              { term: "Flank wear criterion", definition: "The wear limit (e.g. VB = 0.3 mm average) that defines the end of tool life in tests and production." },
            ],
            examQuestions: [
              {
                q: "State Taylor's tool life equation and explain its constants. At 100 m/min a carbide tool lasts 60 min; taking n = 0.2, estimate the life at 150 m/min and the speed for a 30-min life.",
                marks: 7,
                outline: [
                  "State V T^n = C; give n values for HSS, carbide and ceramic.",
                  "Compute C = 100 x 60^0.2 = 226.8 (V in m/min, T in min).",
                  "T at 150 m/min: (226.8/150)^(1/0.2) = 1.512^5 = about 7.9 min.",
                  "V for T = 30 min: 226.8 / 30^0.2 = about 115 m/min.",
                  "Note the sensitivity ranking: speed hurts life most, then feed, then depth.",
                  "Explain the cost optimum: machining cost falls with speed, tooling cost rises.",
                  "Close with the machinability definition and V-rating.",
                ],
              },
              {
                q: "State typical n values for HSS, carbide and ceramic tools.",
                marks: 2,
              },
              {
                q: "Define machinability and name two ways it is judged.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Turning, drilling and milling",
            body: [
              "On a lathe the work rotates and a single-point tool feeds parallel or across it. The parameters ride three formulas: cutting speed V = pi x D x N / 1000 in metres per minute (D in mm, N in rev/min), feed f in mm per revolution, and depth of cut d; machining time follows T = L / (f x N), and metal-removal rate is roughly V x f x d. Beyond straight turning sit facing (tool feeds radially), taper turning (compound slide, taper attachment or CNC interpolation), knurling, parting and thread cutting through the lead screw and gearbox. Engine lathes serve one-offs, capstan and turret lathes run repetitive work with pre-set tooling, and CNC turning centres add turrets and driven tools.",
              "The twist drill is a hole-making system with quirks. Its two lips do the cutting; the chisel edge at the web extrudes rather than shears and generates a large share of the thrust; margins guide the drill in the hole; flutes carry chips and coolant. Standard point angle is 118 deg - larger for harder materials, smaller for soft - and helix angle about 30 deg, with lip clearance to stop the heel rubbing. The hole-making family: spot or centre drilling, drilling, reaming (a finishing tool taking a few tenths to size and smooth), boring with a single point to true a hole, counterboring, countersinking, spot facing and tapping; deep holes want peck cycles or gun drills with coolant through the tool.",
              "Milling rotates a multi-tooth cutter while the work feeds past it. Slab (peripheral) milling puts the cutter axis parallel to the surface; face milling cuts with inserts on the face; end milling profiles slots and pockets. The classic pair: up or conventional milling sets cutter rotation against the feed, so each tooth starts its chip at zero thickness, rubs, then bites - tolerating backlash but work-hardening the surface; down or climb milling rotates with the feed, so the tooth enters at full thickness, finishes better and lives longer, but tends to snatch the work into the cutter and demands rigid, backlash-free feed - the CNC default. Metal-removal rate in slab milling is width x depth x table feed, and the dividing head spaces gears and slots to order.",
            ],
            bullets: [
              "Turning formulas: V = pi D N / 1000, time T = L/(f N), MRR = V f d - quote all three with units.",
              "Twist drill: point angle 118 deg standard (larger for hard, smaller for soft), 30 deg helix, margins, flutes; the chisel edge is the thrust hog.",
              "Hole family: spot, drill, ream (finishing, few tenths), bore (true the hole), counterbore, countersink, spot face, tap.",
              "Up milling: chip starts at zero thickness, rubs, tolerates backlash; down milling: full-thickness entry, better finish, needs rigid feed.",
              "Milling MRR = width x depth x table feed; slab vs face vs end milling by cutter axis and cutting zone.",
            ],
            table: {
              caption: "Three machines, three motions.",
              headers: ["Aspect", "Turning", "Drilling", "Milling"],
              rows: [
                ["Primary motion", "work rotates", "tool rotates", "tool rotates"],
                ["Feed", "tool along/into work", "tool into work", "work past tool"],
                ["Tool", "single point", "twist drill, multi-edge", "multi-tooth cutter"],
                ["Speed formula", "V = pi D N / 1000", "V at drill outside diameter", "V = pi D N / 1000"],
                ["MRR", "V x f x d", "(pi/4) D^2 x f x N", "width x depth x feed"],
                ["Typical job", "shafts, tapers, threads", "holes", "flats, slots, profiles"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Route card: bar to stepped, drilled shaft",
              caption: "One setup thought through - the CNC lathe's argument in five moves.",
              stages: [
                { label: "Load and face", note: "establish the datum end" },
                { label: "Rough turn steps", note: "leave 0.5 mm for finish" },
                { label: "Finish and chamfer", note: "size, surface, edge break" },
                { label: "Centre and drill", note: "spot first, then peck the deep hole" },
                { label: "Part off and inspect", note: "first article before batch" },
              ],
            },
            callout: {
              type: "exam",
              title: "Arrows carry the marks",
              body: "Up versus down milling is a guaranteed question: draw both cases with cutter rotation and feed arrows marked, then note that up milling starts the chip at zero thickness and rubs (safe on machines with feed-screw play) while down milling bites full-thickness first, finishes better, but needs rigid backlash-free feed. Unlabelled sketches lose half the credit.",
            },
            keyTerms: [
              { term: "Climb (down) milling", definition: "Milling with cutter rotation in the feed direction: the tooth enters at full chip thickness, giving better finish and tool life but requiring rigid, backlash-free feed." },
              { term: "Point angle", definition: "The included angle at a twist drill's tip, 118 deg for general work; harder materials take larger angles." },
              { term: "Feed", definition: "The tool advance per revolution (mm/rev) or per tooth (mm/tooth); with speed it fixes MRR and finish." },
            ],
            examQuestions: [
              {
                q: "Differentiate up (conventional) and down (climb) milling with sketches, advantages, limitations and applications.",
                marks: 7,
                outline: [
                  "Define both by cutter rotation relative to feed direction.",
                  "Sketch both with rotation, feed and chip-start arrows marked.",
                  "Up milling: chip begins at zero thickness, rubbing, work hardening; tolerates backlash.",
                  "Down milling: full-thickness entry, no rubbing, better finish and tool life.",
                  "Force direction: down milling tends to pull the work into the cutter - clamping implications.",
                  "Applications: up on conventional manual machines; down on rigid CNC machines.",
                  "Add one line each on slab vs face milling and MRR = width x depth x feed.",
                ],
              },
              {
                q: "Write the formulas for cutting speed and machining time in turning.",
                marks: 2,
              },
              {
                q: "Why does the chisel edge of a twist drill cause high thrust?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Grinding and cutting fluids",
            body: [
              "Grinding finishes where cutting tools stop: thousands of hard abrasive grits, each a micro-cutting edge of random geometry, shave chips measured in micrometres off work too hard for HSS or carbide. A wheel is specified in five positions - abrasive, grit size, grade, structure and bond. A is aluminium oxide for steel and ferrous work; C is silicon carbide for cast iron, non-ferrous and non-metals; CBN and diamond serve the hardest classes. Grit numbers run coarse (10-24, roughing) through medium (30-60) to fine (80-180 and beyond, finishing). Grade is how firmly the bond holds the grits - and the rule is counter-intuitive: hard materials get soft wheels, because a soft bond lets dull grits tear free and the wheel self-dresses, while a hard wheel glazes, rubs and burns. Structure (open to dense) is grain spacing for chip clearance; bonds are V vitrified (rigid, porous, the most common), B resinoid (tough, for cut-off and snagging), R rubber (fine finishes and thin wheels), S silicate and M metal for CBN and diamond.",
              "The machines: surface grinders reciprocating or vertical-spindle, cylindrical between centres with plunge or traverse, internal grinders, and centreless - the work rides a blade between the grinding wheel and a slower regulating wheel that both rotates and axially feeds it, no centres needed, production speed. Wheels run 25-45 m/s with depths of cut in tens of micrometres. Dressing fractures and exposes fresh grits; truing restores concentricity, and a single-point diamond usually does both. Behaviour diagnoses itself: loading clogs the wheel with chips (dress, open the structure, flush better); glazing means dull grits are polishing instead of cutting (dress, go softer); burn leaves temper colours and microcracks (lighter cuts, softer wheel, more coolant). The grinding ratio G - material removed divided by wheel wear - prices the economy.",
              "Cutting fluids do four jobs: cool (water does it best), lubricate the chip-tool interface under extreme pressure (oil with EP additives), flush chips, and protect the work from rust. Families: neat oils for broaching, tapping and reaming of tough alloys; soluble-oil emulsions at 3-10% concentrate, the general-purpose balance; synthetics with no mineral oil for the best cooling and sump life; semi-synthetics in between. Application runs from flood to mist, through-tool high pressure for deep holes, and minimum-quantity lubrication for near-dry machining. Sump care - refractometer concentration checks, tramp-oil skimming, biocide control - keeps the chemistry honest.",
            ],
            bullets: [
              "Wheel specification, five positions: abrasive (A, C, CBN, D), grit size, grade, structure, bond (V, B, R, S, M) - e.g. A 46 K 5 V.",
              "The counter-intuitive rule: hard material, soft wheel; soft material, hard wheel - so grits tear free and the wheel self-dresses.",
              "Dressing exposes fresh grits, truing restores concentricity - one diamond tool usually does both.",
              "Failure modes: loading (chips clog), glazing (dull grits rub), burn (thermal damage, temper colours) - each has a wheel-or-coolant fix.",
              "Grinding ratio G = material removed / wheel wear; cutting fluids cool, lubricate, flush and protect - water-based cools, neat oil lubricates.",
            ],
            table: {
              caption: "Decoding a wheel marking: A 46 K 5 V.",
              headers: ["Position", "Symbol here", "Meaning", "Common options"],
              rows: [
                ["Abrasive", "A", "aluminium oxide", "C SiC, B CBN, D diamond"],
                ["Grit size", "46", "medium grain", "coarse 10-24 to fine 80-180+"],
                ["Grade", "K", "medium bond hardness", "A (soft) to Z (hard)"],
                ["Structure", "5", "medium grain spacing", "1 dense to 15 open"],
                ["Bond", "V", "vitrified", "B resinoid, R rubber, S silicate, M metal"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two cutting-fluid families",
              caption: "Cooling or film strength - pick the failure you fear.",
              left: {
                heading: "Water-based (emulsions, synthetics)",
                items: [
                  "Best heat removal",
                  "Some lubricity from the concentrate",
                  "Needs rust inhibitors and sump care",
                  "Mist control required",
                  "Runs: grinding, high-speed turning",
                ],
              },
              right: {
                heading: "Neat (straight) oil",
                items: [
                  "Best boundary lubrication and EP film",
                  "Slower heat removal",
                  "Fire and smoke risk at high speed",
                  "Fine finish and tool life in tough cuts",
                  "Runs: broaching, tapping, reaming",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Recite the rule",
              body: "Hard material, soft wheel; soft material, hard wheel. The wheel must shed its grits as they dull; a hard wheel on hard steel glazes, rubs and burns the work. That one rule answers half of all wheel-selection questions - the other half is abrasive choice: A for steel, C for cast iron and non-ferrous.",
            },
            keyTerms: [
              { term: "Grade", definition: "The strength with which the bond retains abrasive grains - the 'hardness' of the wheel, not of the grit." },
              { term: "Dressing", definition: "Fracturing and exposing fresh abrasive grains so the wheel cuts again; combined with truing to restore concentricity." },
              { term: "Grinding ratio", definition: "Volume of material removed divided by volume of wheel worn - the economy index of a grinding operation." },
            ],
            examQuestions: [
              {
                q: "Explain the specification of a grinding wheel with the example A 46 K 5 V. State the selection rules for abrasive, grit, grade and bond.",
                marks: 7,
                outline: [
                  "Five positions: abrasive, grit size, grade, structure, bond.",
                  "A = aluminium oxide for ferrous; C = silicon carbide for CI and non-ferrous; CBN and diamond for the hardest work.",
                  "Grit 46 medium: coarse for stock removal, fine for finish.",
                  "Grade K medium: hard material - soft wheel rule, with the self-dressing reason.",
                  "Structure 5: grain spacing and chip clearance.",
                  "Bond V vitrified: rigid and porous; B, R, M one line each.",
                  "Close with dressing, truing and the grinding ratio.",
                ],
              },
              {
                q: "Distinguish glazing from loading of a grinding wheel.",
                marks: 2,
              },
              {
                q: "List four functions of a cutting fluid.",
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
      title: "Unconventional Machining and CNC",
      summary:
        "Beyond the tool: USM, AJM and the water jets; EDM and its parameters; laser and electrochemical machining; NC, CNC and DNC architecture; G- and M-code part programming; and flexible manufacturing systems.",
      chapter: {
        number: "05",
        title: "Unconventional Machining and CNC",
        intro:
          "Unit V machines what tools cannot and runs what hands cannot: the unconventional family sorted by energy source - mechanical, thermal, electrochemical - with USM, AJM, EDM, LBM and ECM in detail; then numerical control from punched tape to DNC, the CNC control unit's block diagram, part programming in G- and M-codes, and the flexible manufacturing systems that network a shop.",
        inOneBreath:
          "Unconventional and CNC machining remove metal without touching it or without a hand on the wheel: USM and jets erode, EDM sparks craters in a dielectric, lasers and ions vaporize or dissolve, while NC, CNC and DNC stack a computer between the drawing and the servo; G- and M-codes in word-address blocks drive interpolators through ball screws; and an FMS of CNC machines under one scheduler turns a part family into random-order production.",
        sections: [
          {
            number: "5.1",
            title: "Mechanical-energy processes: USM, AJM and the jets",
            body: [
              "Conventional cutting asks the tool to be harder, stronger and stiffer than the work - a condition that fails for hardened dies, ceramics, carbides, intricate cavities and micro-features. Unconventional processes sidestep the tool: they erode, dissolve, abrade or vaporize the work using mechanical, thermal, electrochemical or chemical energy, largely indifferent to hardness. The classification is the map: mechanical - ultrasonic machining (USM), abrasive jet machining (AJM), water jet and abrasive water jet; thermal - EDM, laser (LBM), electron beam (EBM), plasma arc; electrochemical - ECM and its grinding variant; chemical - chemical machining and photochemical blanking.",
              "USM hammers grit against the work with sound. An oscillator drives a transducer - magnetostrictive or piezoelectric - at about 20 kHz; a horn (concentrator) mechanically amplifies the stroke to a few tens of microns; a slurry of boron carbide or silicon carbide in water floods the gap between tool and work; and the vibrating tool drives grits across the work face, micro-chipping material away. The tool is soft steel or brass and wears comparatively slowly. USM cuts any hard, brittle material - glass, ceramics, quartz, tungsten carbide, germanium - conductive or not, with accuracy in the few-hundredths-of-a-millimetre class and no heat or stress; the price is a low metal-removal rate and tapered deep holes.",
              "AJM fires fine abrasive - 10-50 micron alumina or silicon carbide - in a compressed gas jet at a few bar through a sapphire or tungsten-carbide nozzle, aimed at a standoff of a few millimetres. Removal is tiny, measured in milligrams per second, so AJM earns its keep cutting thin brittle sheet, etching glass, deburring, cleaning and marking rather than bulk machining. Water-jet machining sends pure water at 1000-4000 bar through a sapphire orifice to slice leather, food and composites without delamination or heating; adding garnet abrasive turns it into abrasive water jet machining, which cuts hard plate over 100 mm thick with no heat-affected zone at all.",
            ],
            bullets: [
              "Classification by energy: mechanical (USM, AJM, WJM, AWJM), thermal (EDM, LBM, EBM, PAM), electrochemical (ECM), chemical (CHM).",
              "USM: 20 kHz transducer, horn amplifies to tens of microns, abrasive slurry micro-chips hard brittle work - conductive or not.",
              "USM strengths: no heat, no stress, fine accuracy; limits: low MRR, tool wear, taper in deep holes.",
              "AJM: 10-50 micron grit in gas at a few bar through a sapphire nozzle - etching, deburring, thin brittle sheet.",
              "Water jets: pure water 1000-4000 bar for soft and composite stock; with garnet, thick hard plate and no HAZ.",
            ],
            table: {
              caption: "Jet and slurry processes compared.",
              headers: ["Process", "Medium", "Work material", "Typical job"],
              rows: [
                ["USM", "abrasive slurry + 20 kHz vibration", "hard, brittle, any conductivity", "dies, glass holes, carbide"],
                ["AJM", "abrasive grit in gas jet", "brittle, thin", "etching, deburring, cleaning"],
                ["WJM", "pure water at 1000-4000 bar", "soft, composites", "leather, food, FRP"],
                ["AWJM", "water + garnet abrasive", "almost anything thick", "hard plate, stone, composites"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The unconventional family by energy source",
              caption: "Choose the tier of physics first; the process follows.",
              layers: [
                { label: "Mechanical", note: "USM, AJM, WJM, AWJM - erosion by impact" },
                { label: "Thermal", note: "EDM, LBM, EBM, PAM - melt and vaporize" },
                { label: "Electrochemical", note: "ECM, ECG - anodic dissolution" },
                { label: "Chemical", note: "CHM, photochemical blanking - etchants" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two screening lines",
              body: "If the work is an insulator, thermal and electrochemical processes are out - they need conduction - so reach for USM or AJM. If the metallurgy must stay intact, as in aerospace alloys, prefer water jet or ECM. Two lines like these answer most 'select the process' questions before any detail begins.",
            },
            keyTerms: [
              { term: "Slurry", definition: "The abrasive-water suspension that carries cutting grit to the work face in ultrasonic machining." },
              { term: "Horn (concentrator)", definition: "The tuned taper that amplifies the transducer's ultrasonic amplitude and presses onto the tool." },
              { term: "Standoff distance", definition: "The gap between AJM nozzle tip and work surface, a few millimetres; it sets jet spread and removal rate." },
            ],
            examQuestions: [
              {
                q: "Explain ultrasonic machining with a sketch. Discuss the working principle, elements, process parameters, applications and limitations.",
                marks: 7,
                outline: [
                  "Sketch: oscillator, transducer, horn, tool, slurry supply, work.",
                  "Principle: 20 kHz vibration, amplitude of tens of microns, grit impact.",
                  "Elements: transducer, concentrator, soft tool, abrasive slurry.",
                  "Parameters: amplitude, frequency, grit size, slurry concentration, static load.",
                  "Applications: glass, ceramics, carbide, dies; non-conductors are fine.",
                  "Limitations: low MRR, tool wear, taper, brittle work only.",
                  "One-line comparison with AJM and water jet.",
                ],
              },
              {
                q: "Give two applications of abrasive jet machining.",
                marks: 2,
              },
              {
                q: "Classify unconventional machining processes by energy source.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Electrical discharge machining (EDM)",
            body: [
              "EDM removes metal with controlled lightning. A pulse lasting from microseconds to a millisecond jumps through a dielectric gap between tool and work, driving the local temperature to 8000-12000 C; a microscopic crater melts, then vaporizes, at both electrodes - so every spark eats both poles, and tool wear is a design fact to be managed by polarity, duty and electrode material. A servo maintains the gap, a few hundredths to a few tenths of a millimetre, chasing the work as it recedes. The dielectric - hydrocarbon oil or deionized water - insulates, cools and flushes debris; thousands of sparks a second add up to a measurable removal rate. Nothing here needs the work to be softer than the tool; it needs the work to conduct.",
              "The power supply is the control panel. Early machines used RC relaxation circuits - simple, but with uncontrolled off-times and poor finish; modern transistor pulse generators command peak current, on-time and off-time independently, and the rules are clean: raise peak current and craters get bigger - faster removal, rougher surface, more wear; lengthen on-time and each crater gets deeper - coarser finish; the duty factor (on-time over cycle time) sets average power; off-time exists so the gap can deionize and flush. Flushing - pressure, suction or jet - decides stability; poor flushing leaves debris to re-ignite as arcs and tapers the hole with secondary discharges at the walls. Electrodes: copper and graphite for die sinking (graphite wears least and machines easily), brass wire for WEDM, copper-tungsten for fine detail.",
              "The applications are the argument. Die-sinking EDM cuts cavities milling cannot reach - intricate dies and moulds, deep slots, sharp internal corners in hardened steel and carbide - machined after heat treatment so nothing distorts afterwards. Wire EDM traces a 0.1-0.3 mm brass wire under CNC control to cut punches, dies and tapers with close tolerance; the kerf is the wire plus two overcuts. Surfaces carry a recast (white) layer over a thin heat-affected zone, cleaned up by finishing passes at low current and short pulses. Against all this: conductive work only, removal slower than conventional milling, electrode manufacture, and dielectric handling.",
            ],
            bullets: [
              "Principle: sparks through a dielectric, 8000-12000 C, craters on both electrodes - tool wear is inherent and managed.",
              "Gap of a few hundredths to a few tenths of a millimetre, held by a servo; dielectric insulates, cools and flushes.",
              "Parameter rules: peak current up - MRR up, finish rougher; on-time up - craters deeper; off-time lets the gap deionize.",
              "Duty factor = on-time / cycle time; poor flushing causes arcs, unstable servo and tapered walls.",
              "Electrodes: copper and graphite for sinking, brass wire for WEDM, copper-tungsten for fine detail; recast layer needs finishing passes.",
            ],
            table: {
              caption: "Turning the EDM dials.",
              headers: ["Raise this", "MRR", "Surface finish", "Watch out"],
              rows: [
                ["Peak current", "up", "rougher", "bigger craters, more wear"],
                ["Pulse on-time", "up", "rougher", "deeper craters"],
                ["Duty factor", "up", "rougher", "average power climbs"],
                ["Off-time", "down", "little change", "gap may not deionize"],
                ["Flushing rate", "stable servo", "cleaner walls", "too fast disturbs the gap"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "One EDM pulse - repeated a few thousand times a second",
              caption: "The dielectric must deionize between sparks or the discharge becomes an arc.",
              steps: [
                { label: "Open-circuit gap voltage", note: "no current yet across the dielectric" },
                { label: "Dielectric breaks down", note: "plasma channel forms at the closest point" },
                { label: "Spark melts and vaporizes", note: "craters on work and tool" },
                { label: "Bubble collapses", note: "debris ejected into the dielectric" },
                { label: "Gap deionizes", note: "off-time restores insulation for the next pulse" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two standing short questions",
              body: "First, EDM needs a conductive workpiece - the spark is a circuit. Second, both electrodes erode: it is spark erosion, not spark cutting. Quote the temperature range 8000-12000 C and the dielectric's three duties - insulate, cool, flush - and the section's short marks are collected.",
            },
            keyTerms: [
              { term: "Recast layer", definition: "The thin re-solidified metal skin left on an EDM surface, removed or reduced by finishing passes." },
              { term: "Duty factor", definition: "The ratio of pulse on-time to cycle time in an EDM power supply; it sets average power and roughness." },
              { term: "Wire EDM", definition: "EDM in which a travelling brass wire is the electrode, CNC-guided to cut profiles and tapers in hard plate." },
            ],
            examQuestions: [
              {
                q: "Explain the working principle of EDM with a circuit sketch. Discuss the process parameters and their effects, and state applications and limitations.",
                marks: 7,
                outline: [
                  "Principle: sparks in a dielectric; 8000-12000 C craters; both electrodes wear.",
                  "Sketch: pulse generator, servo feed, tool, work, dielectric, pump and filter.",
                  "Gap maintenance by servo; gap of a few tenths of a millimetre.",
                  "Parameters: peak current, on-time, off-time, duty factor, voltage - with effects.",
                  "Flushing methods and consequences of poor flushing.",
                  "Electrode materials: copper, graphite, brass wire; wear ratio.",
                  "Applications: dies and moulds, carbide, wire EDM; limits: conductivity, recast layer, speed.",
                ],
              },
              {
                q: "State any three functions of the dielectric fluid in EDM.",
                marks: 2,
              },
              {
                q: "What is wire EDM and where is it preferred?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Laser beam and electrochemical machining",
            body: [
              "A laser amplifies light by stimulated emission into a coherent, nearly parallel, monochromatic beam; a lens focuses it to a spot of a tenth to half a millimetre, where power density crosses a million watts per square centimetre - enough to heat, melt and vaporize any material in milliseconds. The engineering sources: CO2 lasers (10.6 micron wavelength, continuous, multi-kilowatt) are the sheet-cutting workhorse; Nd:YAG lasers (1.06 micron, pulsed) drill and spot-weld. Oxygen assist turns steel cutting exothermic - the jet blows molten oxide out of the kerf; inert gas keeps stainless and aluminium edges clean. The beam is non-contact: no tool wear, no cutting force, any hardness, fine kerf and a thin heat-affected zone. Limits: thickness, reflective metals such as copper and aluminium shrugging off CO2 light, and capital cost. Applications: turbine-blade cooling holes, injector nozzles, sheet profiling, micro-drilling, marking and welding.",
              "ECM is electroplating run backwards. The work is the anode, a shaped cathode tool never touches it, and a pumped electrolyte - 10-20% sodium chloride or sodium nitrate in water - sweeps through an inter-electrode gap of a few tenths of a millimetre. Current densities of tens of amperes per square centimetre dissolve the work anodically, atom by atom, at a rate set exactly by Faraday's law, m = (A x I x t)/(z x F) with F = 96500 coulombs per mole: removal is proportional to current and indifferent to hardness. The tool never wears; the work never heats or stresses - no HAZ, no white layer, no residual stress, fine finish. Hydrogen evolves at the cathode and must be vented; metal hydroxide sludge must be filtered - ECM's environmental chore. Applications: fir-tree blade-root slots in turbine discs, gun-barrel rifling, deburring, and electrochemical grinding.",
              "The pair brackets the advanced spectrum. The laser is thermal: fast, small features, a thin damaged layer, expensive photons. ECM is electrochemical: slower per feature but stress-free, wear-free and hardness-blind, with sludge to manage. Both machine shapes cutters cannot reach; the laser prefers holes, profiles and micro-work, ECM prefers complex cavities and tough superalloys. Selection turns on three lines: conduction (EDM and ECM need it; the laser does not), thermal tolerance (choose ECM when no HAZ is allowed), and volume (neither competes with milling on bulk removal).",
            ],
            bullets: [
              "LBM: focused spot 0.1-0.5 mm, power density above a million W/cm2 - melt, vaporize; CO2 for cutting, pulsed Nd:YAG for drilling.",
              "Gas assist: oxygen makes steel cutting exothermic; inert gas protects clean edges on stainless and aluminium.",
              "ECM: anodic dissolution in a pumped electrolyte, IEG of a few tenths of a millimetre, current density of tens of A/cm2.",
              "Faraday's law m = A I t/(z F): MRR proportional to current, blind to hardness; tool (cathode) never wears.",
              "ECM costs: hydrogen at the cathode, hydroxide sludge filtration, corrosion control - and conductive work only.",
            ],
            table: {
              caption: "LBM vs ECM.",
              headers: ["Feature", "Laser beam machining", "Electrochemical machining"],
              rows: [
                ["Energy", "focused photons", "anodic dissolution"],
                ["Temperature", "vaporization locally", "near ambient"],
                ["Tool wear", "none - no tool", "none - cathode inert"],
                ["Work material", "almost any", "electrically conductive only"],
                ["Surface", "thin recast layer + HAZ", "stress-free, no HAZ"],
                ["MRR", "small per pulse", "proportional to current"],
                ["Typical job", "cooling holes, sheet cutting", "blade-root slots, deburring"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Photons vs ions",
              caption: "Two physics, two failure modes to avoid - heat, or nothing at all.",
              left: {
                heading: "LBM (thermal)",
                items: [
                  "Focused beam melts and vaporizes",
                  "Non-contact; no tool wear",
                  "Thin recast layer and HAZ",
                  "Holes and profiles in any hardness",
                  "CO2 and Nd:YAG sources",
                ],
              },
              right: {
                heading: "ECM (electrochemical)",
                items: [
                  "The anode dissolves in electrolyte",
                  "Cathode tool never wears",
                  "No heat, no stress, no HAZ",
                  "Needs conductive work and sludge handling",
                  "Slots and cavities in superalloys",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Faraday arrives as a numerical",
              body: "Quote m = A I t / (z F) with F = 96500 coulombs per mole, define every symbol, and note that ECM removal depends only on current - hardness is irrelevant. That contrast with conventional machining is the examiner's whole point.",
            },
            keyTerms: [
              { term: "Nd:YAG", definition: "Neodymium-doped yttrium-aluminium-garnet crystal laser emitting at 1.06 micrometres; pulsed, used for drilling and micromachining." },
              { term: "Inter-electrode gap", definition: "The electrolyte-filled gap, a few tenths of a millimetre, between ECM tool and work; smaller gaps give better accuracy." },
              { term: "Faraday's law", definition: "m = A I t / (z F): the mass dissolved in ECM is proportional to the charge passed - the basis of its predictable removal rate." },
            ],
            examQuestions: [
              {
                q: "Explain electrochemical machining with a sketch. State Faraday's law as applied to ECM and discuss its advantages, limitations and applications.",
                marks: 7,
                outline: [
                  "Principle: anodic dissolution through a pumped electrolyte.",
                  "Sketch: DC source, tool cathode, work anode, electrolyte loop, filter.",
                  "Faraday: m = A I t / (z F); removal proportional to current.",
                  "Gap control; electrolyte NaCl or NaNO3 at 10-20%.",
                  "Advantages: no tool wear, no HAZ or stress, any hardness, fine finish.",
                  "Limitations: sludge, hydrogen, electrolyte handling, conductive work only.",
                  "Applications: turbine-disc slots, rifling, deburring; the ECG variant.",
                ],
              },
              {
                q: "State two applications of laser beam machining.",
                marks: 2,
              },
              {
                q: "Why does the ECM tool never wear out?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "NC, CNC and DNC",
            body: [
              "Numerical control is control by numbers: a program of coordinates and codes commands slide positions, spindle speeds and tool changes, replacing the operator's handwheels. NC - born at MIT in the early 1950s - read punched tape through hardwired logic: reliable but rigid, since every change meant re-punching tape. CNC replaces the hardwired controller with an industrial computer: programs live in memory, edit at the machine, canned cycles compress repetitive code, tool-length and radius compensations adjust offsets without touching the program, and diagnostics watch the drives. DNC originally meant direct numerical control - one computer feeding programs to a shop of machines, often through a behind-the-tape-reader link on older machines; today it means distributed numerical control: a server that pushes programs and pulls status over a network.",
              "The machine control unit is a pipeline. An input device (USB, RS-232, Ethernet) delivers the program; the decoder reads each block; the interpolator converts a programmed path - linear, circular, helical - into coordinated axis commands at the servo rate; servo drives turn AC servo motors through preloaded ball screws (about 90% efficient, essentially backlash-free) to move the slides; and feedback closes the loop - rotary encoders on the screws for semi-closed control, or linear scales on the table for fully closed control that also corrects screw error. Open-loop NC used stepper motors for light duty; closed-loop CNC holds position to the basic length unit (BLU) - commonly 0.001 mm. Automatic tool changers and pallet changers round out unattended machining.",
              "The balance sheet explains the factory. On the credit side: accuracy and repeatability independent of operator fatigue, contours no manual machine can trace, one setup for many features, shorter lead times, consistent quality and higher machine utilisation. On the debit side: capital cost, programming and maintenance skill, and the tooling discipline that the automation exposes. Configurations scale from teaching lathes to vertical and horizontal machining centres, turning centres with driven tools, and five-axis heads for blades and impellers - all running the same architecture of program, interpolator, servo and feedback.",
            ],
            bullets: [
              "NC: punched tape into hardwired logic; CNC: computer control with memory, editing, compensation and diagnostics; DNC: central computer feeding machines - direct then distributed.",
              "MCU pipeline: input, decoder, interpolator, servo drives, ball screws, feedback devices.",
              "Interpolator: turns G01/G02 paths into coordinated axis motion commands at the servo rate.",
              "Feedback: rotary encoders (semi-closed) or linear scales (fully closed); BLU - commonly 0.001 mm - is the resolution.",
              "Payoffs: contour ability, repeatability, one setup, utilisation; costs: capital, programming, maintenance skill.",
            ],
            table: {
              caption: "NC vs CNC vs DNC.",
              headers: ["Feature", "NC", "CNC", "DNC"],
              rows: [
                ["Control unit", "hardwired logic", "industrial computer", "host computer + machines"],
                ["Program medium", "punched tape", "memory, USB, network", "central program store"],
                ["Edit at machine", "no - re-punch tape", "yes, at the screen", "yes, centrally via CAM"],
                ["Compensation", "minimal", "tool length, radius, pitch error", "program and library management"],
                ["Typical role", "historical and teaching", "every modern machine", "shops running machine fleets"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a CNC machining centre",
              caption: "Commands cascade downward; feedback climbs back up.",
              layers: [
                { label: "DNC host / program upload", note: "program library, network" },
                { label: "Part program (G-code) in MCU memory", note: "blocks decoded one by one" },
                { label: "Decoder + interpolator", note: "path becomes axis motion commands" },
                { label: "Servo drives and ball screws", note: "X, Y, Z and spindle" },
                { label: "Slides, spindle, feedback devices", note: "encoders or linear scales close the loop" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the table, not paragraphs",
              body: "The NC vs CNC difference is a classic: control unit (hardwired vs computer), program storage (tape vs memory), editing (re-punch vs on-screen), compensation (none vs tool/wear/pitch), diagnostics (none vs built-in) and flexibility (rigid vs modular). Six rows of a table collect the marks faster and cleaner than prose.",
            },
            keyTerms: [
              { term: "Interpolator", definition: "The MCU module that converts a programmed path - linear or circular - into coordinated axis motion commands at the servo rate." },
              { term: "Basic length unit (BLU)", definition: "The smallest controlled displacement of a slide - the resolution of the machine, commonly 0.001 mm." },
              { term: "Closed-loop control", definition: "Position control using feedback from encoders or linear scales to correct error continuously." },
            ],
            examQuestions: [
              {
                q: "Differentiate NC, CNC and DNC. Draw the block diagram of a CNC machine control unit and explain the function of each block.",
                marks: 7,
                outline: [
                  "Define NC: punched tape, hardwired controller.",
                  "CNC: computer in the loop - memory, editing, compensation, diagnostics.",
                  "DNC: central computer feeding machines; direct vs distributed.",
                  "Block diagram: input, decoder, interpolator, servo drives, feedback.",
                  "Explain interpolation (linear, circular) and the servo loop with encoder feedback.",
                  "Ball screws vs lead screws; semi-closed vs fully closed loop.",
                  "Advantages and limitations in one line each.",
                ],
              },
              {
                q: "Define basic length unit (BLU).",
                marks: 2,
              },
              {
                q: "What does the interpolator do in a CNC controller?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Part programming and FMS",
            body: [
              "A part program speaks word address: each block carries letter-addressed words - N (sequence), G (preparatory), X and Z or X and Y (coordinates), F (feed), S (speed), T (tool) and M (miscellaneous) - read by the control in order. G-codes prepare geometry and modes: G00 rapid traverse, G01 linear interpolation, G02 and G03 circular arcs clockwise and anticlockwise, G04 dwell, G40/41/42 cutter compensation off/left/right, G90 and G91 absolute and incremental, and the G54 family of work offsets. M-codes run the machine: M03 and M04 spindle clockwise and counter-clockwise, M05 spindle stop, M06 tool change, M08 and M09 coolant on and off, M00 and M01 program and optional stops, M30 end and rewind. Canned cycles - G81 drilling with its approach, feed and retract - compress repeated geometry into a block or two.",
              "Programming discipline beats cleverness: study the drawing, choose stock and tooling, fix the work zero, plan the operations in setup order, write blocks with comments, then prove out - verify on screen, dry run with offsets shifted clear of the stock, single-block the first cut, and inspect the first article. Tool nose radius compensation (G41/G42) matters wherever a taper or arc meets a finished dimension: without it, the tool path drifts out of tolerance on every angled face. CAM systems generate the same code from geometry, and the post-processor translates the cutter-location data into the dialect of a specific control; parametric macros and subroutines handle families of parts; DNC drip-feeds programs too large for control memory.",
              "A flexible manufacturing system is CNC at the scale of the shop: machining centres linked by AGVs or pallet shuttles, fed by automatic tool and workpiece handling, all supervised by a central computer that schedules parts, distributes NC programs and tracks tools and fixtures. A machining cell - a few machines plus a pallet pool - is the smallest step; an FMS adds random-order processing of part families under group technology. The economics: machine utilisation often quoted in the 60-85% band against 20-40% standalone, work-in-process collapsing, lead time shrinking from weeks to days, and new parts in the family needing only a program. The costs: capital intensity, planning complexity and standardisation discipline - and the destination is CIM, where design, planning and the shop share one database.",
            ],
            bullets: [
              "Word address format: N, G, X/Z, F, S, T, M - each block read in order by the control.",
              "Core codes: G00 rapid, G01 linear, G02/G03 arcs, G40/41/42 compensation, G90/G91 absolute/incremental; M03/M05 spindle, M06 tool change, M08/M09 coolant, M30 end.",
              "Programming steps: drawing, stock and tooling, work zero, operation plan, write, verify, dry run, single block, first article.",
              "Cutter/nose radius compensation (G41/G42) is mandatory on tapers and arcs; the post-processor adapts CAM code to each control.",
              "FMS = CNC machines + automated handling + central scheduler; random-order production of a part family, utilisation 60-85%.",
            ],
            codeExample: {
              language: "text",
              caption: "A complete, commented CNC turning part program - the exam template.",
              code: `O0001 (STEPPED SHAFT - 50 MM BAR ON A CNC LATHE)

(SETUP: 50 MM BAR IN CHUCK, 90 MM PROJECTION.
TOOL 1 = CNMG ROUGH/FINISH TURN. WORK ZERO AT
THE FINISHED FACE.)

N010 G21 G40 G97 G99      (METRIC, COMP OFF, RPM MODE, FEED MM/REV)
N020 T0101                (SELECT TOOL 1, OFFSET 1)
N030 M03 S1200            (SPINDLE ON, CLOCKWISE, 1200 RPM)
N040 G00 X52.0 Z2.0 M08   (RAPID TO SAFE START POINT, COOLANT ON)
N050 G01 X0.0 F0.20       (FACE THE BAR TO CENTRE)
N060 G00 Z2.0             (RETRACT IN Z FIRST)
N070 G00 X46.0            (POSITION FOR ROUGH PASS)
N080 G01 Z-60.0 F0.25     (ROUGH TURN TO DIA 46)
N090 G00 X50.0 Z2.0       (RETRACT TO START)
N100 G00 X45.0            (POSITION FOR FINISH PASS)
N110 G01 Z-60.0 F0.12     (FINISH TURN DIA 45, LENGTH 60)
N120 G00 X60.0 Z50.0 M09  (RETRACT CLEAR, COOLANT OFF)
N130 M05                  (SPINDLE STOP)
N140 M30                  (END OF PROGRAM, REWIND)`,
            },
            table: {
              caption: "Survival codes for the exam.",
              headers: ["Code", "Meaning", "Code", "Meaning"],
              rows: [
                ["G00", "rapid traverse", "M03", "spindle on, clockwise"],
                ["G01", "linear interpolation", "M05", "spindle stop"],
                ["G02", "circular arc, clockwise", "M06", "tool change"],
                ["G03", "circular arc, anticlockwise", "M08", "coolant on"],
                ["G90", "absolute programming", "M09", "coolant off"],
                ["G91", "incremental programming", "M30", "program end and rewind"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From CAD to first component",
              caption: "Skipping the verification stations is where crashes are born.",
              stages: [
                { label: "CAD model and drawing", note: "dimensions, datums, tolerances" },
                { label: "Process plan and tool list", note: "operations, fixtures, speeds" },
                { label: "G-code (manual or CAM)", note: "post-processor for the control" },
                { label: "Verify and simulate", note: "syntax and collision check" },
                { label: "Dry run + single block", note: "proveout with shifted offsets" },
                { label: "First article, then batch", note: "inspect, release to production" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the skeleton, not the syntax",
              body: "Program-writing questions award marks for structure: a safety start block (units, compensation off, absolute mode), tool change with spindle start and coolant, rapid to a safe point, cuts with feed words, retract, spindle off, M30. The program in this section is that skeleton - learn it and any part profile becomes a fill-in exercise.",
            },
            keyTerms: [
              { term: "Word address format", definition: "The programming format in which each block carries letter-addressed words - N, G, X, F, S, T, M - read by the control in order." },
              { term: "Canned cycle", definition: "A single code that expands into a complete repeated operation, such as G81 drilling with approach, feed to depth and retract." },
              { term: "Flexible manufacturing system", definition: "CNC machines, automated handling and a supervising computer that process a part family in random order with minimal manual intervention." },
            ],
            examQuestions: [
              {
                q: "Explain the structure of a part program and the steps of manual part programming. Write a part program in word address format for turning a 50 mm bar: face, then turn dia 45 mm over a 60 mm length.",
                marks: 7,
                outline: [
                  "List the word addresses N, G, X, Z, F, S, T, M with meanings.",
                  "Steps: drawing study, datum and work zero, tool list, operation plan.",
                  "Safety start: G21, G40 compensation off, absolute mode G90, spindle and coolant M03/M08.",
                  "Rapid G00 to a safe start point; face with G01 at feed.",
                  "Rough and finish turn to dia 45 x 60 length with feed words.",
                  "Retract, coolant off, spindle stop M05, end with M30.",
                  "Mention proveout: dry run, single block, first-article inspection.",
                ],
              },
              {
                q: "Distinguish G02 from G03.",
                marks: 2,
              },
              {
                q: "List the four building blocks of a flexible manufacturing system.",
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
        "RGPV ME-405 papers typically spread 70-80 of the marks across casting quality and gating, the arc welding family, forming comparisons, cutting theory with tool-life numericals, and the unconventional-plus-CNC block, with sheet metal and special casting supplying the definitional short questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Gating systems, risers and Chvorinov's rule", weight: "8-10 marks", note: "Draw the system, name every element, size one riser with V/A numbers." },
        { topic: "Pattern allowances and casting defects with remedies", weight: "8-10 marks", note: "Five allowances with signs and values; defects classified in five families." },
        { topic: "Die, investment and centrifugal casting", weight: "6-8 marks", note: "One comparison table plus the why-aluminium-is-not-hot-chamber short." },
        { topic: "Arc welding: coating functions, GMAW transfer modes, SAW", weight: "10-12 marks", note: "Coating functions and electrode designation are near-certain." },
        { topic: "Gas flames and resistance welding (spot schedule, H = I^2 R t)", weight: "6-8 marks", note: "Three flame ratios with uses; the four-phase spot welding cycle." },
        { topic: "Hot vs cold working and rolling fundamentals", weight: "8-10 marks", note: "The eight-row comparison table plus the dmax = mu^2 R bite check." },
        { topic: "Forging sequence, extrusion vs drawing, sheet metal", weight: "8-10 marks", note: "Flash function and preform dies; push-vs-pull in one line; F = L t tau." },
        { topic: "Orthogonal cutting, tool materials and Taylor tool life", weight: "10-12 marks", note: "Merchant relation plus two Taylor numericals; the tool pyramid." },
        { topic: "Milling up/down, grinding wheel marking, cutting fluids", weight: "8-10 marks", note: "Decode A 46 K 5 V; hard-material-soft-wheel rule; up vs down sketches." },
        { topic: "Unconventional processes and CNC/G-code programming with FMS", weight: "10-14 marks", note: "Classification by energy; EDM parameters; write a 10-block program." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the foundry", tasks: ["Pattern allowances with signs and values; pattern types", "Moulding sand: ingredients, nine properties, six tests", "Gating sketches and gating ratios; three Chvorinov riser traces"] },
        { week: "Week 2", focus: "Unit I end + Unit II start", tasks: ["Defect families chart: cause and remedy for ten defects", "Die, investment and centrifugal casting: one comparison table", "SMAW coating functions and E-code decoding; GMAW transfer modes"] },
        { week: "Week 3", focus: "Unit II - welding complete", tasks: ["Three flame ratios and uses; spot welding cycle and schedule", "Solid-state set: friction, ultrasonic, diffusion, explosive", "Weld defects + inspection ladder; distortion control and back-step"] },
        { week: "Week 4", focus: "Unit III - forming", tasks: ["Hot vs cold working table; rolling numericals with bite check", "Forging sequence, flash function and defects", "Extrusion vs drawing stress states; shearing, bending, deep drawing"] },
        { week: "Week 5", focus: "Unit IV - machining", tasks: ["Orthogonal cutting sketch with Merchant relation; chip types", "Tool pyramid, ASA signature, flank vs crater wear", "Two Taylor solves each way; turning/drilling/milling formulas; wheel decode"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["USM and EDM in full; LBM vs ECM table with Faraday's law", "NC vs CNC vs DNC table; MCU block diagram from memory", "Write two part programs; one full past paper under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The day before the exam is for consolidation, not new learning. Skim, redraw and recite - here is the checklist that touches every high-weight topic in six passes.",
      ],
      bullets: [
        "Skim every diagram: gating pipeline, defect fork, weld layers, spot-weld cycle, tool pyramid, EDM pulse cycle, CNC layers, CAD-to-part pipeline.",
        "Memorise the number trios: three flame ratios; five allowances with signs; Taylor n values (HSS 0.1-0.16, carbide 0.2-0.35, ceramic 0.5-0.7).",
        "Redraw from memory: gating system, spot welding cycle, orthogonal cutting with phi and alpha marked, the A 46 K 5 V wheel decode.",
        "Recite the formulas: dmax = mu^2 R; Chvorinov (V/A)^2; F = L t tau; V T^n = C; P = Fc V; Ra = f^2 / (32 r).",
        "Write one 10-block G-code program from memory and recite five M-codes.",
        "Sleep seven hours; carry instruments, a sharpened pencil and a scale for diagrams.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Sketch first, label second, explain third - every 7-mark answer opens with a labelled diagram.",
        "Quote standard forms with named variables: V T^n = C, phi = 45 + alpha/2 - beta/2, F = L t tau, MRR = V f d.",
        "Use ranges when unsure of a value - 'carbide 100-300 m/min', 'spot current 8-10 kA for 1 mm sheet' - ranges read as judgement, single wrong numbers read as guesses.",
        "Comparison questions want tables: aspects down the rows, processes across the columns, two lines of prose around them.",
        "Budget two minutes per mark - 14 for a 7-mark, five for a 2-mark - and keep the last ten minutes to finish labels and add units.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing shake allowance as positive - it is negative, because rapping the pattern enlarges the cavity.",
        "Confusing the choke location between pressurized and unpressurized gating - write the sprue : runner : gate area ratio, not adjectives.",
        "Mixing the flame ratios: neutral about 1:1, oxidizing about 1.5:1, carburizing below 1:1 - and only the carburizing flame shows the feather.",
        "Solving Taylor as T = C/V^n instead of T = (C/V)^(1/n) - the exponent applies to the whole ratio.",
        "Selecting a hard wheel for a hard material - the rule is the opposite: hard material, soft wheel, so grits tear free and self-dress.",
        "Calling EDM non-thermal or ECM thermal - EDM is spark-thermal (recast layer exists); ECM is electrochemical (no HAZ at all).",
      ],
    },
  ],
};
