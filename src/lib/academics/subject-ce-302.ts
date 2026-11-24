/**
 * Academics - RGPV CE 3rd-semester subject: CE-302 Construction Materials.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries 3 body paragraphs (~110 words
 * each), 5 bullets, a diagram, a callout, a table or code sample, 3 key
 * terms and 3 exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce302: AcademicSubject = {
  id: "ce-302",
  code: "CE-302",
  title: "Construction Materials",
  semester: "III Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to construction materials for civil engineers: stones, bricks, cement, aggregates, and concrete and mortar - with classifications, manufacturing processes, Bogue's compounds, sieve analysis, mix design and the tests RGPV actually asks.",
  description:
    "Five units walk from the geological classification, quarrying and dressing of natural stones, through brick manufacturing and efflorescence defects, into the composition and manufacturing of Portland cement with Bogue's compounds and the chemistry of setting and hardening, across the classification, grading and testing of aggregates, and finally into concrete grades M10 to M40, workability by slump, the basics of mix design with the water-cement ratio, mixing placing and curing practice, and the types and uses of mortar. Every section pairs the textbook theory with a worked numerical, a redrawable diagram, and three exam-style questions including one full 7-mark answer outline.",
  accentColor: "#f59e0b",
  emoji: "CM",
  unitCount: 5,
  totalSections: 25,
  units: [
    // ============================ UNIT I - STONES ============================
    {
      number: 1,
      roman: "I",
      title: "Stones",
      summary:
        "Classification of stones by geological, physical and chemical axes; the quarrying and dressing operations that turn raw rock into masonry units; and the physical and mechanical tests that govern a stone's engineering use.",
      chapter: {
        number: "01",
        title: "Stones",
        intro:
          "Unit I covers natural stones as the oldest and most durable construction material. Sections walk through three complementary classification systems, the geological origin of rocks and their engineering properties, the methods and tools of quarrying, the stages and finishes of dressing, and finally the standard tests for crushing strength, hardness, toughness, abrasion and durability.",
        inOneBreath:
          "Stones are classified by geological origin (igneous, sedimentary, metamorphic), by physical structure (stratified, unstratified, foliated), and by chemical composition (siliceous, argillaceous, calcareous); quarrying extracts blocks by digging, heating, wedging or blasting; dressing cuts and finishes the block to a rock, hammer, chisel or polished surface; and IS tests verify crushing strength, water absorption, hardness, toughness and durability for the intended structural use.",
        sections: [
          {
            number: "1.1",
            title: "Classification of stones",
            body: [
              "Stones are natural building materials formed by geological processes that determine their mineral composition, texture, and engineering properties. They are classified in three complementary ways. By geological origin rocks are grouped as igneous, sedimentary or metamorphic, describing how they were formed. By physical structure they are stratified, unstratified or foliated, describing whether they show visible layers. By chemical composition stones are siliceous, argillaceous or calcareous depending on the dominant oxide present. Civil engineering practice further groups them as building stones for masonry work, road stones for pavements and foundations, and ornamental stones for facings and decorative facades.",
              "Representative stones illustrate each geological class. Granite is igneous, hard and durable, with crushing strength above 130 MPa, used for foundations, columns and bridge piers. Basalt, also igneous, is dense and tough, used for road metal and rubble masonry. Sandstone is sedimentary, easily dressed, used for facing and carving. Limestone is calcareous, soft and workable, used for walls, floors and lime production. Marble is metamorphic, takes a fine polish, used for ornamental facades, floors and sculpture. Slate is metamorphic, foliated, splits into thin sheets, used for roofing and damp-proof courses. Each stone carries a characteristic colour, hardness, compressive strength and weathering behaviour that suit it to specific uses.",
              "Engineers select a stone by balancing strength, durability, workability, hardness, appearance and availability against cost and structural role. Granite and basalt serve heavy load-bearing work because of high compressive strength and frost resistance. Limestone and sandstone suit walls and facings because they are easily cut and dressed. Marble and slate are reserved for finishes where appearance matters. Local availability reduces transport cost and breakage. The chosen stone should be free from cracks, veins and harmful minerals, and its crushing strength, water absorption and weathering quality must satisfy the IS code limits for the intended service condition before acceptance on site.",
            ],
            bullets: [
              "Geological classification: igneous, sedimentary, metamorphic - grouped by formation process.",
              "Physical classification: stratified, unstratified, foliated - grouped by visible structure and bedding.",
              "Chemical classification: siliceous, argillaceous, calcareous - grouped by the dominant oxide.",
              "Engineering use classification: building, road and ornamental stones - grouped by structural role.",
              "Representative stones: granite for foundations, sandstone for facing, marble for ornamental work.",
            ],
            table: {
              caption: "Classification of common building stones.",
              headers: ["Class", "Example", "Origin / texture", "Typical use"],
              rows: [
                ["Igneous", "Granite", "Crystalline, hard, grey-pink", "Foundations, columns"],
                ["Igneous", "Basalt", "Dense, tough, dark", "Road metal, rubble"],
                ["Sedimentary", "Sandstone", "Bedded, granular", "Facing, carving"],
                ["Sedimentary", "Limestone", "Calcareous, soft", "Walls, lime"],
                ["Metamorphic", "Marble", "Crystalline, polishable", "Floors, facades"],
                ["Metamorphic", "Slate", "Foliated, splits", "Roofing, DPC"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Classifying a stone by three complementary routes",
              caption:
                "Each step narrows the description until a unique engineering name emerges.",
              steps: [
                { label: "Quarry sample", note: "unknown rock" },
                { label: "Geological origin", note: "igneous / sedimentary / metamorphic" },
                { label: "Physical structure", note: "stratified / unstratified / foliated" },
                { label: "Chemical composition", note: "siliceous / argillaceous / calcareous" },
                { label: "Engineering class", note: "building / road / ornamental" },
              ],
            },
            callout: {
              type: "tip",
              title: "Cross-classify for full marks",
              body: "RGPV often asks 'classify stones' in 7 marks. State all three classifications - geological, physical, chemical - and give at least one example for each. A single classification with examples earns only half marks.",
            },
            keyTerms: [
              { term: "Geological classification", definition: "Grouping stones by their formation process: igneous, sedimentary or metamorphic." },
              { term: "Siliceous stone", definition: "A stone whose dominant oxide is silica (SiO2), e.g. granite, sandstone; generally hard and durable." },
              { term: "Calcareous stone", definition: "A stone whose dominant oxide is lime (CaO), e.g. limestone, marble; vulnerable to acid attack." },
            ],
            examQuestions: [
              {
                q: "Classify building stones on the basis of geological origin, physical structure and chemical composition. Give two examples of each class and state the engineering uses of each.",
                marks: 7,
                outline: [
                  "Define stone as a natural building material and explain the need for classification.",
                  "Geological: igneous (granite, basalt), sedimentary (sandstone, limestone), metamorphic (marble, slate).",
                  "Physical: stratified (sandstone, limestone), unstratified (granite, basalt), foliated (slate, gneiss).",
                  "Chemical: siliceous (granite, sandstone), argillaceous (slate, laterite), calcareous (limestone, marble).",
                  "Give two examples for each class with one-line descriptions of texture.",
                  "State uses: igneous for foundations, sedimentary for facing, metamorphic for ornament.",
                  "Conclude that the three classifications together fully describe a stone for engineering use.",
                ],
              },
              {
                q: "Differentiate between siliceous and calcareous stones with one example each.",
                marks: 2,
              },
              {
                q: "State the three physical classifications of stones and the engineering significance of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Geological classification of rocks",
            body: [
              "Geological classification groups rocks by formation process. Igneous rocks form by cooling of molten magma beneath or at the surface; they are the primary rocks of the Earth's crust. Examples are granite, basalt, dolerite and gabbro. Sedimentary rocks form by deposition and consolidation of sediments - mineral grains, rock fragments or organic matter - in water bodies over geological time; examples are sandstone, limestone, shale and conglomerate. Metamorphic rocks form by alteration of existing rocks under high temperature and pressure without complete melting; examples are marble from limestone, slate from shale, gneiss from granite, and quartzite from sandstone.",
              "Igneous rocks are subdivided by cooling depth. Intrusive or plutonic rocks cooled slowly below the surface, giving large visible crystals and high strength; granite is the chief example. Extrusive or volcanic rocks cooled rapidly at the surface, giving fine-grained or glassy texture; basalt is the chief example. Sedimentary rocks show bedding planes that record successive deposition; their strength depends on the cementing mineral, and they are generally softer and more porous than igneous rocks. Compressive strength measured perpendicular to the bedding is greater than strength parallel to the bedding, an anisotropy engineers must respect.",
              "Metamorphic rocks inherit some properties from the parent rock and gain new ones from pressure and heat. Foliated rocks such as slate and gneiss split along preferred planes and are therefore anisotropic; non-foliated rocks such as marble and quartzite are isotropic and stronger. The class of a rock guides the engineer to the right tests: igneous rocks are tested for crushing and toughness; sedimentary rocks for porosity and weathering; metamorphic rocks for splitting and abrasion resistance. The geological classification is the basis on which IS 1124 and IS 1131 quote stone quality requirements for civil work.",
            ],
            bullets: [
              "Igneous: primary rocks from cooling magma; intrusive (granite) vs extrusive (basalt).",
              "Sedimentary: formed by deposition and consolidation of sediments in water.",
              "Metamorphic: pre-existing rocks altered by heat and pressure without melting.",
              "Bedding planes in sedimentary rocks cause strength anisotropy: stronger perpendicular to bedding.",
              "Foliation in metamorphic rocks produces splitting planes - useful for slate but anisotropic.",
            ],
            table: {
              caption: "Three geological classes of rocks and their civil engineering representatives.",
              headers: ["Class", "Formation", "Representative rocks", "Typical strength"],
              rows: [
                ["Igneous", "Cooling of magma", "Granite, basalt, dolerite", "100-200 MPa"],
                ["Sedimentary", "Deposition and consolidation", "Sandstone, limestone, shale", "20-80 MPa"],
                ["Metamorphic", "Heat and pressure on existing rock", "Marble, slate, gneiss", "50-170 MPa"],
                ["Notes", "Bedding planes in sedimentary rocks", "Foliation in metamorphic", "Anisotropy in both"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Geological classes stacked from primary to altered",
              caption:
                "Igneous is the parent class; sedimentary and metamorphic derive from it.",
              layers: [
                { label: "Igneous rocks", note: "primary, from magma - granite, basalt" },
                { label: "Sedimentary rocks", note: "derived from sediments - sandstone, limestone" },
                { label: "Metamorphic rocks", note: "altered from either above - marble, slate" },
                { label: "Engineering use", note: "class determines tests and IS specifications" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always state the parent rock",
              body: "When naming metamorphic rocks in the exam, name the parent material: marble from limestone, slate from shale, quartzite from sandstone, gneiss from granite. Examiners award a full mark for the parent-daughter pairing.",
            },
            keyTerms: [
              { term: "Igneous rock", definition: "Rock formed by cooling of molten magma; the primary rock of the crust, e.g. granite." },
              { term: "Sedimentary rock", definition: "Rock formed by deposition and consolidation of sediments in water, e.g. sandstone." },
              { term: "Metamorphic rock", definition: "Rock formed by heat and pressure acting on an existing rock, e.g. marble from limestone." },
            ],
            examQuestions: [
              {
                q: "Classify rocks geologically. Describe the formation, texture and engineering properties of each class with examples. State how the texture of igneous rocks relates to their strength.",
                marks: 7,
                outline: [
                  "Define geological classification as grouping by formation process.",
                  "Igneous: formed by cooling of magma; intrusive (granite) vs extrusive (basalt).",
                  "Sedimentary: formed by deposition of sediments; examples sandstone, limestone, shale.",
                  "Metamorphic: formed by heat and pressure on existing rocks; examples marble, slate.",
                  "Describe texture: igneous has interlocking crystals, sedimentary has grains and bedding, metamorphic has foliation.",
                  "Relate texture to strength: slow cooling gives large crystals and high strength.",
                  "State engineering properties: igneous strong and durable, sedimentary softer and porous, metamorphic variable.",
                  "Conclude that geological class guides the choice of engineering tests.",
                ],
              },
              {
                q: "How is marble formed? Name its parent rock.",
                marks: 2,
              },
              {
                q: "State three engineering differences between igneous and sedimentary rocks.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Quarrying of stones",
            body: [
              "Quarrying is the operation of extracting usable blocks of stone from their natural bed in the Earth's crust. The principal methods are digging for soft weathered rocks, heating for small outcrops where fire splits the rock, wedging for blocks along natural joints, and blasting for hard massive rocks where explosives shatter the deposit. The choice of method depends on rock type, deposit depth, block size required, and the proximity of inhabited areas. A quarry site is selected after a survey confirms adequate reserves of sound stone, easy access for transport, and a working face high enough to provide blocks of useful size.",
              "Tools for hand quarrying include crowbars, picks, wedges, pins, hammers and chisels. For blasting, holes 10 to 20 mm in diameter are drilled by jumpers or rotary drills, charged with gunpowder or dynamite, tamped with clay, and fired by a safety fuse or detonator. The sequence is: clear the overburden of soil and weathered rock; drill holes in a regular pattern; charge with explosive and tamp; fire and inspect; separate sound blocks from spalls; load blocks onto trucks for transport to the dressing yard. Care is taken not to over-blast, since shattered blocks have no commercial value.",
              "Precautions protect both the stone and the workers. Over-blasting produces hair cracks that ruin dressed stone under load, so the explosive charge is kept to the minimum that detaches the block. Workers wear helmets and stand clear during firing. Local regulations specify safety distances from buildings, roads and inhabited areas, and blasting hours. Environmental impact includes dust, noise, vibration and hydrological disturbance; modern quarries are required to plan rehabilitation after extraction. A well-run quarry records the geology of each bench, the volume extracted, and the test results of each block, providing traceability for the engineer.",
            ],
            bullets: [
              "Methods: digging for soft rocks, heating for small outcrops, wedging along joints, blasting for hard rocks.",
              "Tools: crowbars, picks, wedges, pins, hammers, chisels, jumpers, drills.",
              "Blasting sequence: clear overburden, drill holes, charge, tamp, fire, inspect.",
              "Over-blasting causes hair cracks that ruin blocks under load - keep charge minimal.",
              "Site selection: adequate reserves, easy access, working face of useful height.",
            ],
            table: {
              caption: "Quarrying methods and the rocks they suit.",
              headers: ["Method", "Best suited rock", "Block size", "Cost"],
              rows: [
                ["Digging", "Soft weathered limestone", "Small", "Low"],
                ["Heating", "Sandstone, shallow outcrop", "Small", "Low"],
                ["Wedging", "Soft stratified rock with joints", "Medium", "Medium"],
                ["Blasting", "Hard massive granite, basalt", "Large", "High"],
                ["Channeling", "Soft sedimentary limestone", "Large, regular", "High"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Quarrying sequence from survey to dispatch",
              caption:
                "Each stage conditions the next - over-blasting at stage 4 ruins the dressed yield at stage 6.",
              stages: [
                { label: "Site survey", note: "reserves, access, working face" },
                { label: "Clear overburden", note: "remove soil and weathered rock" },
                { label: "Drill blast holes", note: "10-20 mm diameter, regular pattern" },
                { label: "Charge, tamp and fire", note: "minimum explosive, safety fuse" },
                { label: "Separate sound blocks", note: "load, transport to dressing yard" },
              ],
            },
            callout: {
              type: "warning",
              title: "Blasting safety is examinable",
              body: "Always list precautions: stand clear, wear helmets, tamp holes with clay not sand, fire by safety fuse, blast only in permitted hours, observe safety distances from inhabited areas. RGPV awards a mark for each correct precaution.",
            },
            keyTerms: [
              { term: "Quarrying", definition: "The operation of extracting usable blocks of stone from their natural bed." },
              { term: "Blasting", definition: "Use of explosives to detach blocks of hard rock from the quarry face." },
              { term: "Overburden", definition: "The layer of soil and weathered rock covering the sound stone deposit, removed before quarrying." },
            ],
            examQuestions: [
              {
                q: "Define quarrying. Describe the various methods of quarrying stones, the tools and explosives used, and the precautions taken during blasting.",
                marks: 7,
                outline: [
                  "Define quarrying as the extraction of stone blocks from natural bed.",
                  "Methods: digging (soft), heating (small outcrops), wedging (stratified), blasting (hard), channeling (soft limestone).",
                  "Tools: crowbars, picks, wedges, pins, hammers, chisels, jumpers, drills.",
                  "Explosives: gunpowder for soft, dynamite for hard; detonators and safety fuse.",
                  "Blasting sequence: clear overburden, drill, charge, tamp, fire, separate.",
                  "Precautions: minimum charge, tamping with clay, safety distance, helmets, fixed hours.",
                  "Environmental: dust, noise, vibration control; rehabilitation of exhausted quarry.",
                  "Conclude that channeling gives the most regular blocks for soft limestone.",
                ],
              },
              {
                q: "What is overburden and why is it removed before quarrying?",
                marks: 2,
              },
              {
                q: "State three precautions during blasting at a stone quarry.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Dressing of stones",
            body: [
              "Dressing is the process of cutting, shaping and finishing quarried stone blocks to the dimensions, surface texture and bed required for masonry work. It is performed at the quarry to reduce transport weight, or at the construction site for final fit. Dressing removes the irregular quarry face, exposes fresh sound stone for inspection, ensures uniform bedding and jointing, and improves appearance. The choice of dressing depends on the stone's hardness, the masonry type, and the architectural finish specified. Rough-dressed rubble suits foundations; finely dressed ashlar suits exposed walls; polished surfaces suit ornamental facades.",
              "Tools used are the mason's hammer, club hammer, mallet, face hammer, pitching tool, punch, point, boa, chisel, drag and scraper. Power tools include planers, surfacing machines and polishing heads driven by compressed air or electricity. The stages of dressing are: scabbing to remove the rough quarry skin; roughing to bring the block close to size; hammer-dressing to a medium surface; chisel-dressing to a fine surface with visible tool marks; polishing with abrasives to a mirror finish. Each stage removes a layer of stone, and over-eager dressing can waste material and weaken the block.",
              "Different finishes suit different uses. Rock-faced or quarry-faced finish leaves the natural cleft visible, used for rustic rubble masonry. Hammer-dressed finish shows tool marks and is used for ordinary walls. Tooled or chisel-dressed finish is uniform and used for ashlar masonry and lintels. Polished finish brings out the colour and grain of the stone, used for marble and granite facades, columns and flooring. Sand-rubbed finish gives a smooth matte surface used for steps and skirtings. The skill of the dresser determines the cost and the appearance of the finished work; a good dresser can reduce waste to less than 10 per cent of the quarried block, while poor dressing splits usable blocks.",
            ],
            bullets: [
              "Dressing: cutting and finishing quarried blocks to required size and surface.",
              "Stages: scabbing, roughing, hammer-dressing, chisel-dressing, polishing.",
              "Tools: mason's hammer, mallet, chisels, punch, drag, scraper, power planer.",
              "Finishes: rock-faced (rustic), hammer-dressed (ordinary), tooled (ashlar), polished (ornamental).",
              "Aim: uniform bedding and jointing, reduced transport weight, improved appearance.",
            ],
            table: {
              caption: "Dressing finishes and the masonry they suit.",
              headers: ["Finish", "Surface", "Tool", "Masonry use"],
              rows: [
                ["Rock-faced", "Natural cleft", "Pitching tool", "Rustic rubble"],
                ["Hammer-dressed", "Tool marks visible", "Mason's hammer", "Ordinary walls"],
                ["Tooled", "Uniform with marks", "Chisel", "Ashlar masonry"],
                ["Polished", "Mirror", "Abrasive head", "Marble or granite facades"],
                ["Sand-rubbed", "Smooth matte", "Sand and block", "Steps and skirtings"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Stages of stone dressing from quarry skin to polish",
              caption:
                "Each stage removes a layer of material; over-eager dressing wastes the block.",
              steps: [
                { label: "Scabbing", note: "remove quarry skin" },
                { label: "Roughing", note: "bring block close to size" },
                { label: "Hammer-dressing", note: "medium surface" },
                { label: "Chisel-dressing", note: "fine tooled surface" },
                { label: "Polishing", note: "mirror finish with abrasives" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the finish to the masonry",
              body: "Specifying a polished finish on a foundation block wastes money; specifying a rock-faced finish on a facade disappoints the architect. RGPV asks the finish-masonry pairing in 3-mark questions - memorise the five pairs in the table above.",
            },
            keyTerms: [
              { term: "Dressing", definition: "The process of cutting, shaping and finishing quarried stone to required dimensions and surface texture." },
              { term: "Ashlar", definition: "Finely dressed stone masonry with uniform joints and visible tool marks." },
              { term: "Scabbing", definition: "The first dressing stage that removes the rough, weathered quarry skin from a block." },
            ],
            examQuestions: [
              {
                q: "Define dressing of stones. State its objectives, list the tools used, and describe the various stages and finishes with the masonry each finish suits.",
                marks: 7,
                outline: [
                  "Define dressing as cutting and finishing quarried blocks.",
                  "Objectives: reduce transport weight, expose sound stone, ensure uniform bedding and jointing, improve appearance.",
                  "Tools: mason's hammer, club hammer, mallet, chisels, punch, drag, scraper, planer, polisher.",
                  "Stages: scabbing, roughing, hammer-dressing, chisel-dressing, polishing.",
                  "Finishes: rock-faced (rustic rubble), hammer-dressed (ordinary walls), tooled (ashlar), polished (facades).",
                  "Each stage removes a layer; over-eager dressing wastes material.",
                  "Conclude that the finish chosen depends on the masonry type and architectural requirement.",
                ],
              },
              {
                q: "What is the difference between hammer-dressed and chisel-dressed surfaces?",
                marks: 2,
              },
              {
                q: "State three objectives of dressing a quarried stone block.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Uses and tests of stones",
            body: [
              "Stones are used in foundations, load-bearing walls, columns, arches, lintels, floors, pavements, roofing and ornamental facades. Specific stones suit specific roles: granite and basalt for heavy foundations, bridge piers, retaining walls and engineering works where high crushing strength is required; sandstone for facing, carving, lintels and cornices; limestone for walls, floors and the production of lime; marble for ornamental floors, facades, columns and sculpture; slate for roofing tiles and damp-proof courses. Crushed stone forms the coarse aggregate in concrete and the base and sub-base of pavements. The choice of stone is governed by structural demand, exposure condition, appearance and local availability.",
              "Tests on building stones determine their mechanical, physical and chemical suitability. The microscopic test examines thin sections for mineral composition and texture. The hardness test scratches the stone with minerals of the Mohs scale. The crushing strength test loads a cube to failure and reports the load per unit area; granite typically gives 130-200 MPa. The transverse strength test flexes a bar to failure. The impact toughness test drops a hammer on a cylindrical sample. The abrasion test (Los Angeles or Dorry) measures weight loss under rubbing. The attrition test tumbles fragments in a drum to combine impact and friction.",
              "Durability tests check resistance to weathering. The water absorption test weighs a sample dry and after 24 hours of soaking; first-class building stone should absorb less than 5 per cent. The soundness test cycles the stone through saturated solutions of sodium or magnesium sulphate that crystallise in the pores, simulating freeze-thaw. The frost resistance test cycles through wet freezing. Specific gravity ranges 2.4-2.9 for ordinary stone; bulk density 1400-1900 kg per m^3. IS 1121, IS 1124 and IS 1706 specify the standard procedures. Test results guide the engineer in accepting or rejecting a quarry for a given structural purpose.",
            ],
            bullets: [
              "Uses: foundations, walls, columns, arches, floors, pavements, roofing, ornament.",
              "Granite/basalt: heavy foundations, bridge piers, retaining walls, road metal.",
              "Sandstone/limestone: facing, carving, walls, floors, lime production.",
              "Marble/slate: ornamental facades, floors, sculpture, roofing, DPC.",
              "IS tests: crushing, hardness, toughness, abrasion, water absorption, soundness.",
            ],
            codeExample: {
              language: "python",
              caption: "Compressive strength of stone cubes per IS 1121.",
              code: `# Crushing strength of a stone cube per IS 1121
def crushing_strength(load_kN, side_mm):
    area_mm2 = side_mm * side_mm
    stress_MPa = load_kN * 1000 / area_mm2
    return round(stress_MPa, 1)

samples = [
    ("granite-A", 1420, 100),
    ("granite-B", 1380, 100),
    ("basalt-C",  1710, 100),
    ("limestone-D", 610, 100),
    ("sandstone-E", 690, 100),
]
print(f"{'sample':12} {'load kN':>8} {'MPa':>6}  verdict")
for name, load, side in samples:
    s = crushing_strength(load, side)
    verdict = "OK" if s >= 100 else "reject"
    print(f"{name:12} {load:8} {s:6.1f}  {verdict}")
`,
            },
            diagram: {
              kind: "matrix",
              title: "Stone tests classified by property and setting",
              caption:
                "Field tests give quick screening; lab tests give the IS values that decide acceptance.",
              axes: { x: "field / laboratory", y: "physical / mechanical" },
              quadrants: [
                { label: "Field physical", note: "colour, texture, weight, ring test" },
                { label: "Lab physical", note: "water absorption, specific gravity, soundness" },
                { label: "Field mechanical", note: "thumb scratch, nail scratch, impact" },
                { label: "Lab mechanical", note: "crushing, transverse, impact toughness, abrasion" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the IS numbers",
              body: "Memorise three crushing strength values: granite 130-200 MPa, sandstone 65 MPa, limestone 55 MPa. Memorise water absorption limit: 5 per cent for first-class stone. RGPV awards a mark per correctly quoted value in any stone-test question.",
            },
            keyTerms: [
              { term: "Crushing strength", definition: "The compressive load per unit area at which a stone cube fails, expressed in MPa per IS 1121." },
              { term: "Water absorption", definition: "The percentage by weight of water absorbed by a dry stone sample after 24 hours of soaking." },
              { term: "Soundness test", definition: "A durability test cycling the stone through sulphate solutions to simulate freeze-thaw weathering." },
            ],
            examQuestions: [
              {
                q: "Describe the important tests conducted on building stones. Give the typical crushing strength, water absorption and specific gravity of granite, sandstone and limestone, and explain how the results influence the engineering use of each.",
                marks: 7,
                outline: [
                  "List tests: microscopic, hardness, crushing strength, transverse, impact, abrasion, attrition, water absorption, soundness.",
                  "Describe crushing strength test: cube loaded in compression machine, peak load divided by area.",
                  "Describe water absorption test: dry weight vs soaked weight; first-class stone <= 5 per cent.",
                  "Describe soundness test: sodium or magnesium sulphate cycles simulate freeze-thaw.",
                  "Granite: crushing 130-200 MPa, absorption 0.5 per cent, specific gravity 2.7-2.9.",
                  "Sandstone: crushing 65 MPa, absorption 5-10 per cent, specific gravity 2.5-2.7.",
                  "Limestone: crushing 55 MPa, absorption 10-15 per cent; used only in protected positions.",
                  "Conclude that high strength and low absorption suit heavy foundations; soft stones suit facing.",
                ],
              },
              {
                q: "State the maximum permissible water absorption for a first-class building stone.",
                marks: 2,
              },
              {
                q: "Name any three field tests carried out on stones at the quarry face.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============================ UNIT II - BRICKS ============================
    {
      number: 2,
      roman: "II",
      title: "Bricks",
      summary:
        "Classification of bricks by quality, shape and use; the six-stage manufacturing process from clay preparation to burning; standard IS tests on bricks; efflorescence and common defects; and the special-purpose bricks used for refractory, lightweight and decorative work.",
      chapter: {
        number: "02",
        title: "Bricks",
        intro:
          "Unit II covers bricks as the most widely used masonry unit. Sections walk through the classification of bricks by burning quality, shape, use and method; the six-stage manufacturing process; the standard IS 1077 tests for compressive strength, water absorption and efflorescence; the causes, defects and prevention of efflorescence and other defects; and the special bricks for refractory, fly-ash and decorative work.",
        inOneBreath:
          "Bricks are classified by burning quality (first, second, third, jhama), shape, use and method; manufacturing has six stages - preparation, moulding, drying, burning, cooling, sorting; tests per IS 1077 cover compressive strength, water absorption and efflorescence; defects include warping, cracks, black core, bloating and spalling; and special bricks include fire, fly-ash, calcium silicate and engineering bricks.",
        sections: [
          {
            number: "2.1",
            title: "Classification of bricks",
            body: [
              "Bricks are rectangular masonry units of burnt clay, the most widely used walling material in civil engineering. They are classified in four complementary ways. By burning quality bricks are first, second or third class, with overburnt jhama bricks forming a separate category. By shape ordinary bricks are rectangular, while jhumb, bullnose and cow-nose bricks serve special forms. By use bricks are common building, facing, engineering or refractory. By method, country bricks are hand-moulded and sun-dried, table-moulded bricks are pressed by machine, and wire-cut bricks are extruded and cut by wire. Each classification answers a different engineering question.",
              "First-class bricks are well-burnt, uniform in colour, with sharp edges and smooth faces; they are used for superior masonry, plastered or exposed. Second-class bricks are slightly underburnt; they have less uniform colour and are used for ordinary walls that will be plastered. Third-class bricks are underburnt and soft; they are used in temporary work. Overburnt jhama bricks are dark, brittle and distorted; they cannot bear load as units but are crushed and used as aggregate for lime concrete and for foundation fill below floors. Each class has a price-quality tradeoff the engineer must balance.",
              "Special types extend the range of brickwork. Perforated bricks have vertical holes that reduce weight and improve thermal insulation, used in panel walls. Hollow bricks have larger voids, used for insulation and to reduce dead load. Paving bricks are hard-burnt for abrasion resistance in footpaths and floors. Fire bricks (refractory) withstand 1000-1800 deg C, used in furnaces, kilns and fireplaces. Engineering bricks are high-strength, low-absorption Class A or B, used in retaining walls, damp-proof courses and chemical environments. Classification guides the engineer to the right brick for the load, exposure and aesthetic.",
            ],
            bullets: [
              "By burning quality: first, second, third class, and overburnt jhama.",
              "By shape: ordinary, jhumb, bullnose, cow-nose, perforated, hollow.",
              "By use: common building, facing, engineering, refractory.",
              "By method: hand-moulded (country), table-moulded, wire-cut.",
              "Special: perforated, hollow, paving, fire bricks, engineering bricks.",
            ],
            table: {
              caption: "Classification of bricks by burning quality.",
              headers: ["Class", "Burning", "Edges", "Typical use"],
              rows: [
                ["First", "Well-burnt", "Sharp, smooth", "Superior exposed masonry"],
                ["Second", "Slightly underburnt", "Slight round", "Plastered walls"],
                ["Third", "Underburnt", "Soft, irregular", "Temporary work"],
                ["Jhama", "Overburnt", "Brittle, dark", "Aggregate, foundation fill"],
                ["Engineering", "High-temperature", "Sharp, dense", "DPC, retaining walls"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Burning quality drives brick class",
              caption:
                "Same clay, different firing - the kiln operator's judgement decides the class.",
              start: "Brick emerges from kiln",
              branches: [
                { label: "well-burnt, sharp edges", outcome: "first-class - superior masonry", good: true },
                { label: "slightly underburnt", outcome: "second-class - plastered walls", good: true },
                { label: "underburnt, soft", outcome: "third-class - temporary work", good: false },
                { label: "overburnt, brittle", outcome: "jhama - crushed as aggregate", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "The drop test sorts classes in seconds",
              body: "Drop a brick from a metre height on hard ground: a first-class brick rings clearly and does not break; a second-class has a dull ring; a third-class breaks with a dull thud. Jhama gives a metallic clink. Field sorting uses this single test as a fast screen before lab compression.",
            },
            keyTerms: [
              { term: "First-class brick", definition: "A well-burnt, sharp-edged, uniform-colour brick used for superior exposed masonry." },
              { term: "Jhama brick", definition: "An overburnt, brittle, dark brick; unusable as a unit but valuable as aggregate and foundation fill." },
              { term: "Refractory brick", definition: "A fire brick that withstands 1000-1800 deg C, used in furnaces and kilns." },
            ],
            examQuestions: [
              {
                q: "Classify bricks on the basis of burning quality, shape, use and method of manufacture. Give the characteristics and uses of first, second, third class and jhama bricks.",
                marks: 7,
                outline: [
                  "Define a brick as a rectangular masonry unit of burnt clay.",
                  "Classification by burning quality: first, second, third, jhama.",
                  "Classification by shape: ordinary, jhumb, bullnose, cow-nose, perforated, hollow.",
                  "Classification by use: common, facing, engineering, refractory.",
                  "Classification by method: hand-moulded, table-moulded, wire-cut.",
                  "First-class: well-burnt, sharp edges, used for superior work.",
                  "Second and third: underburnt; jhama: overburnt, brittle, used as aggregate.",
                  "Conclude that the engineer selects the class by structural role and exposure.",
                ],
              },
              {
                q: "What is a jhama brick and where is it used?",
                marks: 2,
              },
              {
                q: "State three special-purpose bricks and one use of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Manufacturing of bricks",
            body: [
              "Brick manufacturing consists of six stages: preparation of clay, moulding, drying, burning, cooling and sorting. The clay is dug from a borrow pit, weathered for several days to break down lumps and improve plasticity, blended with sand or ash to control shrinkage, and tempered with water to a uniform plastic mass. Pugging in a ring pit or by machine kneads the clay until all air pockets are expelled and the mass is homogenous. The addition of sand reduces shrinkage cracks; the addition of ash reduces plasticity but improves porosity. Proper preparation is the foundation of a good brick; defects at this stage cannot be repaired later in the process.",
              "Moulding is either hand or machine. Hand moulding uses a wooden mould on a stock board; the clay is dashed in, pressed, struck level, and the brick is turned onto a pallet. Machine moulding is faster and more uniform: the stiff-mud process extrudes a clay column and cuts bricks by wire, the soft-mud process presses wet clay into moulds, and the dry-press process compresses low-moisture clay in steel dies. After moulding, the green bricks are dried in open air for three to seven days, or on heated floors in humid weather, until moisture falls below 2 per cent. Rapid drying causes warping and cracks.",
              "Burning is done in clamps or kilns. A clamp is a temporary stack of bricks with fuel intermixed; it is cheap but quality varies and 30 per cent of bricks may be overburnt or underburnt. A kiln - Bull's trench, Hoffman or continuous - provides controlled temperature and uniform quality. Burning proceeds through three stages: dehydration (smoke stage to 200 deg C), oxidation (red heat, 600-900 deg C) and vitrification (900-1200 deg C). Underburnt bricks are weak and porous; overburnt are brittle and dark. Cooling must be slow to avoid cracks; the finished bricks are sorted by ring test and colour into first, second, third and jhama classes.",
            ],
            bullets: [
              "Stages: preparation, moulding, drying, burning, cooling, sorting.",
              "Clay prep: dig, weather, blend with sand/ash, temper with water, pug.",
              "Moulding: hand (stock board) or machine (stiff-mud, soft-mud, dry-press).",
              "Drying: open air 3-7 days, moisture to < 2 per cent before burning.",
              "Burning: clamp (cheap, variable) or kiln (Bull's trench, Hoffman, controlled).",
            ],
            table: {
              caption: "Stages of brick manufacturing and their purpose.",
              headers: ["Stage", "Operation", "Purpose"],
              rows: [
                ["1. Preparation", "Dig, weather, blend, pug", "Plastic, uniform clay"],
                ["2. Moulding", "Hand or machine press", "Shape the green brick"],
                ["3. Drying", "Air dry 3-7 days", "Moisture < 2 per cent"],
                ["4. Burning", "Clamp or kiln, 900-1200 deg C", "Strength, durability"],
                ["5. Cooling", "Slow in kiln", "Avoid thermal cracks"],
                ["6. Sorting", "By ring and colour", "Class I, II, III, jhama"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From clay pit to sorted brick in six stages",
              caption:
                "Each stage conditions the next - drying faults cannot be fixed by burning.",
              stages: [
                { label: "Clay preparation", note: "dig, weather, blend, pug" },
                { label: "Moulding", note: "hand or machine" },
                { label: "Drying", note: "3-7 days, < 2 per cent moisture" },
                { label: "Burning", note: "clamp or kiln, 900-1200 deg C" },
                { label: "Cooling and sorting", note: "slow cool, ring and colour" },
              ],
            },
            callout: {
              type: "warning",
              title: "Drying before burning is non-negotiable",
              body: "Green bricks with > 2 per cent moisture will spall or crack in the kiln as water flashes to steam. RGPV penalises any answer that skips the drying stage or rushes it. Always state: 'air-dry until moisture falls below 2 per cent, then only charge to the kiln'.",
            },
            keyTerms: [
              { term: "Pugging", definition: "Kneading tempered clay to expel air and make the mass homogenous before moulding." },
              { term: "Stiff-mud process", definition: "Machine moulding by extruding a clay column and cutting bricks with wire." },
              { term: "Vitrification", definition: "The high-temperature (900-1200 deg C) burning stage that fuses clay minerals into a dense, durable brick." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacturing of bricks. State the purpose of each stage and distinguish between clamp and kiln burning.",
                marks: 7,
                outline: [
                  "List the six stages: preparation, moulding, drying, burning, cooling, sorting.",
                  "Preparation: dig, weather, blend with sand/ash, temper, pug for plastic uniform clay.",
                  "Moulding: hand (stock board) or machine (stiff-mud, soft-mud, dry-press).",
                  "Drying: open air or heated floor 3-7 days, moisture to < 2 per cent.",
                  "Burning: clamp (temporary, cheap, variable) vs kiln (Bull's trench, Hoffman, controlled).",
                  "Three burning stages: dehydration, oxidation, vitrification at 900-1200 deg C.",
                  "Cooling slow to avoid cracks; sorting by ring test and colour into four classes.",
                  "Conclude that kiln burning gives uniform quality preferred for structural work.",
                ],
              },
              {
                q: "Differentiate between clamp and kiln burning of bricks.",
                marks: 2,
              },
              {
                q: "State the three stages of burning and the temperature range of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Tests on bricks",
            body: [
              "Brick tests verify the strength, water absorption and visual quality required by IS 1077. The compressive strength test is the principal test: a brick is immersed in water for 24 hours, the frog is filled with 1:3 cement mortar, and the brick is loaded in a compression machine after three days. The peak load divided by the loaded area gives the crushing strength. IS 1077 classes bricks from 3.5 to 35 N per mm^2 in steps; class 3.5 is the minimum for ordinary masonry, class 7.0 is the common structural brick, and class 35 is for engineering work.",
              "The water absorption test weighs a dry brick, soaks it for 24 hours, and re-weighs; the increase is reported as a percentage of dry weight. A first-class brick should absorb <= 15 per cent, second-class <= 20 per cent, third-class <= 25 per cent. High absorption lowers durability and frost resistance. The efflorescence test stands a brick on end in 25 mm of water for 24 hours; after drying, the white deposit is rated nil, slight, moderate, heavy or serious. Heavy and serious ratings reject the brick for permanent work. The hardness, soundness and structure tests complete the field assessment.",
              "Field tests sort bricks at the yard before lab verification. The drop test drops a brick from one metre height onto hard ground; a clear metallic ring indicates a well-burnt first-class brick, a dull ring indicates second-class, a dull thud with breakage indicates third-class. The nail scratch test runs a thumb nail across the brick face; no impression means the brick is hard. The thumb impression test on the brick face; no mark indicates high strength. Size and shape are checked against a standard template. Together field and lab tests decide the brick class and the permissible structural use.",
            ],
            bullets: [
              "Compressive strength: peak load / area; classes 3.5 to 35 MPa per IS 1077.",
              "Water absorption: 24-hour soak; first-class <= 15 per cent of dry weight.",
              "Efflorescence: brick in 25 mm water for 24 h; rated nil to serious.",
              "Field tests: drop (ring), nail scratch (hardness), thumb impression (strength).",
              "Size and shape: compared against standard template on the yard.",
            ],
            codeExample: {
              language: "python",
              caption: "Compressive strength and water absorption of brick samples per IS 1077.",
              code: `# Brick test data per IS 1077
def crushing_strength(load_kN, area_mm2):
    return round(load_kN * 1000 / area_mm2, 2)

def water_absorption(dry_g, wet_g):
    return round((wet_g - dry_g) / dry_g * 100, 2)

bricks = [
    ("B1", 350, 19000, 3000, 3400),
    ("B2", 410, 19000, 3010, 3440),
    ("B3", 250, 19000, 2990, 3680),
]
print(f"{'id':>4} {'MPa':>6} {'abs%':>6}  class")
for name, load, area, dry, wet in bricks:
    s = crushing_strength(load, area)
    a = water_absorption(dry, wet)
    if s >= 7.0 and a <= 15:
        c = "first-class"
    elif s >= 5.0 and a <= 20:
        c = "second-class"
    else:
        c = "reject"
    print(f"{name:>4} {s:6.2f} {a:6.2f}  {c}")
`,
            },
            diagram: {
              kind: "matrix",
              title: "Brick tests sorted by property and setting",
              caption:
                "Lab tests give the IS values; field tests give the quick screen before payment.",
              axes: { x: "field / laboratory", y: "physical / mechanical" },
              quadrants: [
                { label: "Field physical", note: "size, shape, colour, ring sound" },
                { label: "Lab physical", note: "water absorption, efflorescence" },
                { label: "Field mechanical", note: "drop test, nail scratch, thumb" },
                { label: "Lab mechanical", note: "compressive strength per IS 1077" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the IS 1077 limits",
              body: "Memorise three numbers: first-class compressive strength 7.0 to 35 MPa, water absorption <= 15 per cent, efflorescence nil to slight. RGPV asks these limits in 2-mark short questions and awards a mark per correctly quoted number.",
            },
            keyTerms: [
              { term: "Compressive strength of brick", definition: "Peak load divided by loaded area, in MPa; per IS 1077 the minimum class is 3.5 MPa." },
              { term: "Water absorption", definition: "Increase in weight after 24-hour soaking as a percentage of dry weight; first-class <= 15 per cent." },
              { term: "Efflorescence", definition: "White crystalline salt deposit on a brick surface; rated nil to serious." },
            ],
            examQuestions: [
              {
                q: "Describe the tests conducted on bricks as per IS 1077. Give the compressive strength and water absorption limits for first, second and third class bricks, and explain the efflorescence test with its rating scale.",
                marks: 7,
                outline: [
                  "List tests: compressive strength, water absorption, efflorescence, hardness, soundness, structure, size and shape.",
                  "Compressive strength: brick immersed 24 h, frog filled 1:3 mortar, load after 3 days.",
                  "Water absorption: dry vs 24-hour soaked weight as percentage of dry weight.",
                  "Efflorescence: brick on end in 25 mm water for 24 h; rated nil, slight, moderate, heavy, serious.",
                  "First-class: compressive 7-35 MPa, absorption <= 15 per cent, efflorescence nil-slight.",
                  "Second-class: 5-7 MPa, absorption <= 20 per cent; third-class: 3.5-5 MPa, absorption <= 25 per cent.",
                  "Field tests: drop, nail scratch, thumb impression, size and shape.",
                  "Conclude that heavy efflorescence or absorption > 20 per cent rejects the brick.",
                ],
              },
              {
                q: "State the maximum water absorption allowed for a first-class brick.",
                marks: 2,
              },
              {
                q: "Describe the efflorescence test on bricks and state the rating scale.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Efflorescence and defects",
            body: [
              "Efflorescence is the white crystalline deposit of soluble salts on a brick surface, appearing when water-soluble sulphates, carbonates or chlorides in the clay or mortar migrate to the surface and crystallise on drying. The salts enter the brick from the raw clay, from the water used in mixing, from the mortar in the joint, or from the soil against a wall. The water dissolves the salts deep in the brick, capillary action carries the solution to the surface, and evaporation deposits the crystals. Efflorescence is heaviest in new walls during the first drying period and after rainy seasons.",
              "Defects in bricks reduce strength or appearance. Warping is the bowing of a brick during drying, caused by rapid moisture loss. Cracks appear from rapid drying, rapid cooling after burning, or unequal shrinkage in mixed clay. Bloating is the swelling of a brick surface by trapped gases from incomplete oxidation of organic matter. Black core is the dark interior of a brick that has not received enough oxygen in the oxidation stage. Spalling is the surface flaking caused by frost action on a saturated brick. Chuffs are fire cracks on the brick face.",
              "Prevention begins at clay selection: clay should be free of soluble salts and large organic matter. Drying must be slow and uniform to prevent warping and cracks. Burning must provide complete oxidation before vitrification so that no black core forms. Mortar for jointing should use clean, low-alkali sand and cement, and walls should be protected from rising damp by a damp-proof course. Efflorescence severity is rated nil, slight, moderate, heavy or serious; heavy and serious bricks are rejected for permanent structural work, and slight efflorescence may be brushed off after the first drying cycle.",
            ],
            bullets: [
              "Efflorescence: white salt deposit from soluble salts carried by water to the surface.",
              "Sources of salts: clay, mixing water, mortar, soil contact, atmospheric pollution.",
              "Warping and cracks: rapid or uneven drying; controlled drying prevents them.",
              "Black core, bloating: incomplete oxidation during burning before vitrification.",
              "Spalling, chuffs: frost action on saturated bricks, fire cracks on the face.",
            ],
            table: {
              caption: "Common brick defects, causes and prevention.",
              headers: ["Defect", "Cause", "Prevention"],
              rows: [
                ["Warping", "Rapid uneven drying", "Slow, uniform drying"],
                ["Cracks", "Rapid drying or cooling", "Control drying, slow cooling"],
                ["Black core", "Incomplete oxidation", "Oxidise fully before vitrification"],
                ["Bloating", "Trapped gases", "Fine-grained clay, full oxidation"],
                ["Spalling", "Frost on saturated brick", "Use low-absorption brick, DPC"],
                ["Efflorescence", "Soluble salts in clay or mortar", "Clean clay, low-alkali mortar"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Sound brick vs efflorescent brick",
              caption:
                "Same manufacture, different salt content - the difference is in the raw clay and mortar.",
              left: {
                heading: "Sound brick",
                items: [
                  "Dry, clean face",
                  "Water absorption <= 15 per cent",
                  "No soluble salts in clay",
                  "Low-alkali cement mortar",
                  "Damp-proof course below wall",
                ],
              },
              right: {
                heading: "Efflorescent brick",
                items: [
                  "White salt crystals on face",
                  "Absorption may be within limit",
                  "Soluble sulphates in clay",
                  "High-alkali mortar or saline water",
                  "Rising damp from foundation",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Heavy efflorescence rejects the brick",
              body: "Efflorescence rated heavy or serious by the IS 3495 test means the brick will lose surface material and stain neighbouring mortar; it must not be used in permanent structural walls. Even moderate efflorescence should be flagged in the site report and re-tested after a drying cycle.",
            },
            keyTerms: [
              { term: "Efflorescence", definition: "The white crystalline deposit of soluble salts left on a brick surface when water evaporates." },
              { term: "Black core", definition: "A dark interior of a brick from incomplete oxidation of organic matter during burning." },
              { term: "Spalling", definition: "Surface flaking of a saturated brick caused by frost action or thermal shock." },
            ],
            examQuestions: [
              {
                q: "Define efflorescence. Explain its causes, the test for rating it, and the measures to prevent it. List any four other defects in bricks with their causes and prevention.",
                marks: 7,
                outline: [
                  "Define efflorescence as the white salt deposit on a brick surface from soluble salts.",
                  "Causes: soluble sulphates in clay, saline water, high-alkali mortar, rising damp.",
                  "Test: brick on end in 25 mm water for 24 h; rate nil, slight, moderate, heavy, serious.",
                  "Prevention: clean clay, low-alkali mortar, damp-proof course, good drainage.",
                  "Other defects: warping (rapid drying), cracks (uneven cooling), black core (no oxidation).",
                  "Bloating (trapped gases), spalling (frost on saturated brick), chuffs (fire cracks).",
                  "Prevention: slow drying, full oxidation before vitrification, low-absorption brick, DPC.",
                  "Conclude: heavy efflorescence or spalling rejects the brick for permanent work.",
                ],
              },
              {
                q: "What is efflorescence and how is it rated?",
                marks: 2,
              },
              {
                q: "State any three defects in bricks with their causes.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Special bricks",
            body: [
              "Special bricks extend the use of masonry beyond common burnt-clay. Fire bricks, also called refractory bricks, withstand 1000 to 1800 deg C without melting or spalling; they are made from fireclay rich in alumina and silica and used in furnaces, kilns, fireplaces and chimneys. Insulating bricks have high porosity and low thermal conductivity, used to line the hot face of industrial furnaces. Acid-resistant bricks are made of high-alumina clay or shale and resist sulphuric and hydrochloric acid in chemical plants. Each special brick is formulated for a specific aggressive environment.",
              "Fly-ash bricks use fly-ash from thermal power plants mixed with lime, gypsum and sand, pressed at high pressure and cured in steam or water for 28 days. They are eco-friendly because they consume a waste product and save topsoil; they are uniform in size, give compressive strength 7 to 10 MPa, and have water absorption below 10 per cent. Calcium silicate bricks (sand-lime bricks) mould a mixture of sand and lime, then autoclave it under steam pressure to form calcium silicate hydrate, giving a smooth, light-coloured brick of strength 7-20 MPa. Both are alternatives to clay bricks in modern construction.",
              "Concrete bricks are cast from a mix of cement, sand and aggregate in steel moulds and cured under water; their strength is set by the mix, typically 7-40 MPa. Perforated bricks have vertical holes that reduce weight by 25 per cent and improve thermal insulation, used for panel walls and partition walls. Bull-nose bricks have one rounded edge for plinth returns and external corners; cow-nose bricks have two rounded edges for pilasters. Engineering bricks (Class A and B) are high-strength (>= 50 MPa) and low-absorption (<= 4.5 per cent), used in retaining walls, manholes and damp-proof courses.",
            ],
            bullets: [
              "Fire bricks: refractory, 1000-1800 deg C, used in furnaces and kilns.",
              "Fly-ash bricks: eco-friendly, 7-10 MPa, absorption < 10 per cent.",
              "Calcium silicate bricks: sand + lime, autoclaved, light-coloured and smooth.",
              "Concrete bricks: cast from cement-sand-aggregate mix, 7-40 MPa.",
              "Engineering bricks: high strength >= 50 MPa, low absorption, for DPC.",
            ],
            table: {
              caption: "Special bricks and their engineering use.",
              headers: ["Brick", "Raw material", "Strength (MPa)", "Use"],
              rows: [
                ["Fire (refractory)", "Fireclay, alumina, silica", "30-50", "Furnaces, kilns"],
                ["Fly-ash", "Fly-ash + lime + gypsum", "7-10", "Walls, partitions"],
                ["Calcium silicate", "Sand + lime (autoclaved)", "7-20", "Smooth facing walls"],
                ["Concrete", "Cement + sand + aggregate", "7-40", "Foundation, walls"],
                ["Engineering", "High-alumina clay", "50-70", "DPC, retaining walls"],
                ["Perforated", "Clay with vertical holes", "3.5-7", "Insulated panel walls"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Three modern alternatives to common burnt-clay brick",
              caption:
                "Fly-ash, calcium silicate and concrete bricks answer different cost and environmental priorities.",
              left: {
                heading: "Fly-ash brick",
                items: [
                  "Uses thermal power plant waste",
                  "Saves topsoil and kiln fuel",
                  "Compressive strength 7-10 MPa",
                  "Water absorption < 10 per cent",
                  "Uniform size, easy to lay",
                ],
              },
              right: {
                heading: "Calcium silicate brick",
                items: [
                  "Sand and lime, autoclaved",
                  "Light colour, smooth face",
                  "Compressive strength 7-20 MPa",
                  "Low shrinkage, good bond",
                  "No burning, energy-efficient",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Match special brick to environment",
              body: "Pick the brick by service condition: refractory for heat, acid-resistant for chemicals, engineering for DPC and wet walls, fly-ash for economy. A wrong choice shows as cracking or staining within a year. RGPV asks the brick-environment pairing in 3-mark short questions.",
            },
            keyTerms: [
              { term: "Refractory brick", definition: "A fire brick made from fireclay that withstands 1000-1800 deg C in furnaces and kilns." },
              { term: "Fly-ash brick", definition: "A brick of fly-ash, lime, gypsum and sand cured under steam; eco-friendly alternative to clay." },
              { term: "Engineering brick", definition: "A high-strength, low-absorption Class A or B brick used in DPC, retaining walls and wet work." },
            ],
            examQuestions: [
              {
                q: "Describe the following special bricks with their raw materials, properties and uses: fire bricks, fly-ash bricks, calcium silicate bricks and engineering bricks. State the advantages of fly-ash bricks over ordinary clay bricks.",
                marks: 7,
                outline: [
                  "Fire bricks: fireclay rich in alumina and silica; withstand 1000-1800 deg C; furnaces, kilns.",
                  "Fly-ash bricks: fly-ash + lime + gypsum + sand; pressed and steam-cured; strength 7-10 MPa.",
                  "Calcium silicate: sand + lime autoclaved; smooth, light-coloured; strength 7-20 MPa.",
                  "Engineering bricks: high-alumina clay; Class A >= 50 MPa, <= 4.5 per cent absorption; DPC.",
                  "Advantages of fly-ash: eco-friendly, consumes waste, saves topsoil, uniform size, no kiln fuel.",
                  "Fly-ash also has lower water absorption and better thermal insulation than clay.",
                  "Engineering bricks resist frost and chemical attack for wet and aggressive environments.",
                  "Conclude that special bricks are selected by service condition, not by cost alone.",
                ],
              },
              {
                q: "What are engineering bricks and where are they used?",
                marks: 2,
              },
              {
                q: "State three advantages of fly-ash bricks over ordinary burnt-clay bricks.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============================ UNIT III - CEMENT ============================
    {
      number: 3,
      roman: "III",
      title: "Cement",
      summary:
        "Chemical composition and raw materials of Portland cement; dry and wet manufacturing processes; Bogue's compounds and their roles in strength and heat; the chemistry of setting and hardening; and the principal cement types - OPC, PPC, slag - together with field and laboratory tests.",
      chapter: {
        number: "03",
        title: "Cement",
        intro:
          "Unit III covers Portland cement as the hydraulic binder of modern construction. Sections walk through oxide composition and raw materials, the dry and wet manufacturing processes, the four Bogue compounds and their roles, the chemistry of setting and hardening, and the cement types OPC, PPC and slag together with the Vicat, Le Chatelier and cube tests.",
        inOneBreath:
          "Cement oxides are lime 60-67, silica 17-25, alumina 3-8, iron 0.5-6 per cent; raw materials are calcareous (limestone) plus argillaceous (clay); dry process feeds powder, wet process feeds slurry; Bogue compounds C3S, C2S, C3A, C4AF give strength and heat; setting is loss of plasticity, hardening is strength gain; and cement types include OPC grades 33/43/53, PPC and PSC.",
        sections: [
          {
            number: "3.1",
            title: "Composition and raw materials of cement",
            body: [
              "Portland cement is a hydraulic binder that sets and hardens by chemical reaction with water. Its composition, expressed as oxides, is approximately: lime (CaO) 60 to 67 per cent, silica (SiO2) 17 to 25 per cent, alumina (Al2O3) 3 to 8 per cent, iron oxide (Fe2O3) 0.5 to 6 per cent, magnesia (MgO) 0.1 to 4 per cent, sulphur trioxide (SO3) 1 to 3 per cent, and alkalies (Na2O and K2O) below 1 per cent. The proportions are tight: too much lime causes unsoundness and expansion, too little lowers strength; too much silica slows setting, too much alumina quickens setting but lowers ultimate strength. Iron oxide gives the grey colour and assists fusion in the kiln.",
              "Raw materials are divided into calcareous and argillaceous. Calcareous materials supply lime: limestone, chalk, marl and cement rock. Argillaceous materials supply silica, alumina and iron oxide: clay, shale, slate and laterite. The two classes are mixed in a proportion fixed by the oxide target, typically 60 per cent limestone and 40 per cent clay, but the exact ratio depends on the composition of each deposit and is adjusted after laboratory analysis. Where the natural clay is deficient in silica or iron, corrective additives such as bauxite (for alumina) or iron ore (for iron oxide) are blended in. Gypsum is added later at the grinding stage, not in the raw mix.",
              "The lime saturation factor (LSF) and the silica, alumina and iron moduli are the standard ratios used to design the raw mix. LSF is the ratio of available lime to the lime that could combine with silica, alumina and iron; values 0.92 to 0.98 are typical for OPC. A higher LSF raises C3S and early strength but increases free lime and unsoundness risk. The alumina modulus (Al2O3 / Fe2O3) is kept between 1 and 2.5 to control the burning behaviour. The chemical balance of the raw mix determines the four Bogue compounds of the clinker, which in turn govern the cement's strength, heat and durability.",
            ],
            bullets: [
              "Lime CaO 60-67 per cent: excess causes unsoundness, deficit lowers strength.",
              "Silica SiO2 17-25 per cent: forms dicalcium and tricalcium silicates (strength).",
              "Alumina Al2O3 3-8 per cent: forms C3A, fast-heat, quick-set compound.",
              "Iron oxide Fe2O3 0.5-6 per cent: forms C4AF, assists fusion, gives grey colour.",
              "Calcareous (limestone) + argillaceous (clay) raw mix designed by LSF and moduli.",
            ],
            table: {
              caption: "Chemical composition of OPC and the role of each oxide.",
              headers: ["Oxide", "Range (per cent)", "Function", "Excess effect"],
              rows: [
                ["CaO (lime)", "60-67", "Forms C3S, C2S", "Unsoundness, expansion"],
                ["SiO2 (silica)", "17-25", "Forms C2S, C3S", "Slow setting"],
                ["Al2O3 (alumina)", "3-8", "Forms C3A", "Flash set, low strength"],
                ["Fe2O3 (iron)", "0.5-6", "Forms C4AF, flux", "Dark colour, low cementing"],
                ["MgO (magnesia)", "0.1-4", "Minor flux", "Unsoundness if high"],
                ["SO3", "1-3", "Added as gypsum", "Expansion if high"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Composition of OPC by oxide share",
              caption:
                "Lime dominates; silica, alumina and iron form the active compounds; minor oxides stabilise the burn.",
              tiers: [
                { label: "Lime CaO 60-67%", note: "backbone of all Bogue compounds" },
                { label: "Silica SiO2 17-25%", note: "reacts with lime to form C3S and C2S" },
                { label: "Alumina + Iron 3-14%", note: "forms C3A and C4AF; flux in kiln" },
                { label: "MgO, SO3, alkalies < 5%", note: "minor; gypsum added at grinding" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the four oxide ranges",
              body: "Memorise four oxide ranges: CaO 60-67, SiO2 17-25, Al2O3 3-8, Fe2O3 0.5-6 per cent. RGPV asks 'state the composition of OPC' as a 2 or 3 mark short and awards a mark per correct range. Always express as oxides, not as the raw elements.",
            },
            keyTerms: [
              { term: "Calcareous material", definition: "A raw material rich in lime, such as limestone or chalk, supplying CaO to the cement raw mix." },
              { term: "Argillaceous material", definition: "A raw material rich in clay minerals, such as clay or shale, supplying silica, alumina and iron oxide." },
              { term: "Lime saturation factor", definition: "The ratio of available lime to the lime combinable with silica, alumina and iron; 0.92-0.98 for OPC." },
            ],
            examQuestions: [
              {
                q: "State the chemical composition of Portland cement. Describe the role of each oxide, the raw materials used, and the effect of excess lime and excess silica on the properties of cement.",
                marks: 7,
                outline: [
                  "List oxides with ranges: CaO 60-67, SiO2 17-25, Al2O3 3-8, Fe2O3 0.5-6, MgO, SO3, alkalies.",
                  "Lime forms C3S and C2S giving strength; excess causes unsoundness and expansion.",
                  "Silica forms C2S and C3S; excess slows setting and reduces early strength.",
                  "Alumina forms C3A - quick setting, high heat; excess lowers ultimate strength.",
                  "Iron oxide forms C4AF and assists fusion in the kiln; gives grey colour.",
                  "Calcareous materials: limestone, chalk, marl; argillaceous: clay, shale, slate.",
                  "Mix ratio 60:40 lime:clay with bauxite and iron ore as correctives; gypsum at grinding.",
                  "Conclude: oxide balance determines the Bogue compounds and hence cement properties.",
                ],
              },
              {
                q: "State the chemical composition of OPC.",
                marks: 2,
              },
              {
                q: "Differentiate between calcareous and argillaceous raw materials with two examples of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Manufacturing: dry and wet process",
            body: [
              "Cement manufacturing has three core operations: mixing the raw materials to a uniform blend, burning the blend to clinker at 1400-1500 deg C, and grinding the clinker with 3 to 5 per cent gypsum to final cement. Two mixing processes are used: dry and wet. In the dry process the raw materials are crushed, dried, ground in ball mills to a fine powder, blended in silos by air, and fed as powder to the rotary kiln. The dry process saves fuel because no water is evaporated in the kiln, and is preferred when the raw materials are dry and grind easily.",
              "In the wet process the raw materials are crushed, mixed with water to a slurry of 30 to 40 per cent moisture, ground in wash mills, blended in slurry basins by compressed air, and fed as slurry to the rotary kiln. The wet process gives easier homogenisation and better quality control for heterogeneous raw materials, but burns extra fuel to evaporate the slurry water. Modern plants prefer the dry process with preheaters and precalciners that recover heat from the kiln gases, cutting fuel use by 30 to 40 per cent compared with the wet process and reducing carbon emissions accordingly.",
              "The rotary kiln is a long steel cylinder 60 to 100 m long and 3 to 4 m in diameter, lined with refractory bricks, inclined at 3 to 4 degrees to the horizontal, and rotating slowly. The raw feed enters at the upper (cold) end and travels down as hot combustion gases rise counter-currently from the lower (hot) end. The feed passes through drying, preheating, calcination (where CaCO3 decomposes to CaO and CO2), and burning zones where partial melting forms the clinker nodules. The clinker drops out at the lower end, is cooled rapidly in a cooler, and is then ground with gypsum. The final cement is bagged or shipped in bulk.",
            ],
            bullets: [
              "Three operations: mix, burn at 1400-1500 deg C, grind with 3-5 per cent gypsum.",
              "Dry process: powder feed, fuel-efficient, used when raw materials are dry.",
              "Wet process: slurry feed 30-40 per cent moisture, easier homogenisation, higher fuel.",
              "Rotary kiln: 60-100 m long, inclined 3-4 deg, counter-current hot gases.",
              "Kiln zones: drying, preheating, calcination, burning; clinker cooled then ground.",
            ],
            table: {
              caption: "Dry and wet process compared.",
              headers: ["Feature", "Dry process", "Wet process"],
              rows: [
                ["Feed form", "Dry powder", "Slurry 30-40% water"],
                ["Fuel", "Low (no water to evaporate)", "Higher (evaporate water)"],
                ["Homogenisation", "Air blending in silos", "Slurry basins easier"],
                ["Best for", "Dry, homogeneous raw materials", "Wet, heterogeneous materials"],
                ["Modern preference", "With preheater, precalciner", "Phased out where possible"],
                ["CO2 emission", "Lower", "Higher"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Dry and wet process compared",
              caption:
                "Same clinker chemistry; the difference is in how the raw mix is prepared.",
              left: {
                heading: "Dry process",
                items: [
                  "Crush, dry, grind to powder",
                  "Blend in silos by air",
                  "Feed as powder to kiln",
                  "Low fuel; no water to evaporate",
                  "Preferred for dry raw materials",
                ],
              },
              right: {
                heading: "Wet process",
                items: [
                  "Crush, mix with water to slurry",
                  "Blend in slurry basins",
                  "Feed as slurry to kiln",
                  "Higher fuel; water evaporates",
                  "Preferred for wet heterogeneous raw",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Gypsum is added at grinding, not at the raw mix",
              body: "Gypsum (3-5 per cent) is added to clinker at the final grinding stage to retard the setting of C3A. A common slip is to list gypsum among raw mix materials. RGPV deducts a mark for that error. State gypsum as 'interground with clinker at the cement mill'.",
            },
            keyTerms: [
              { term: "Dry process", definition: "Cement manufacturing with the raw mix fed as dry powder; fuel-efficient when materials are dry." },
              { term: "Wet process", definition: "Cement manufacturing with the raw mix fed as slurry; easier homogenisation but higher fuel use." },
              { term: "Rotary kiln", definition: "A long inclined rotating cylinder in which the raw feed is dried, calcined and burned to clinker." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacture of Portland cement. Compare the dry and wet processes, explain the function of the rotary kiln and state why gypsum is added during grinding.",
                marks: 7,
                outline: [
                  "Three operations: mix raw materials, burn to clinker at 1400-1500 deg C, grind with gypsum.",
                  "Dry process: crush, dry, grind, blend in silos, feed powder; low fuel.",
                  "Wet process: crush, mix with water to slurry 30-40 per cent, blend in basins; easier but higher fuel.",
                  "Modern dry process with preheater and precalciner saves 30-40 per cent fuel over wet.",
                  "Rotary kiln 60-100 m, inclined 3-4 deg, refractory-lined, counter-current hot gases.",
                  "Kiln zones: drying, preheating, calcination (CaCO3 to CaO + CO2), burning, clinker formation.",
                  "Clinker cooled, then ground with 3-5 per cent gypsum to retard C3A setting.",
                  "Conclude: dry process is modern preference for fuel and emissions; wet for wet raw materials.",
                ],
              },
              {
                q: "Why is gypsum added during the grinding of clinker?",
                marks: 2,
              },
              {
                q: "State three differences between dry and wet process of cement manufacture.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Bogue's compounds",
            body: [
              "When the clinker leaves the burning zone and cools, four main compounds crystallise from the melt; these are called the Bogue compounds after their identifier. Alite or C3S (tricalcium silicate, 3CaO·SiO2) is present at 30 to 50 per cent and is responsible for early strength developed in the first 28 days. Belite or C2S (dicalcium silicate, 2CaO·SiO2) is present at 20 to 45 per cent and contributes later strength beyond 28 days, continuing for years. Together C3S and C2S give about 75 per cent of the cement's total strength and are called the silicate phases.",
              "Celite or C3A (tricalcium aluminate, 3CaO·Al2O3) makes up 8 to 12 per cent and reacts fastest with water, producing the highest heat of hydration; it gives the initial set but contributes little long-term strength and is the phase most susceptible to sulphate attack. Felite or ferrite, C4AF (tetracalcium aluminoferrite, 4CaO·Al2O3·Fe2O3), at 6 to 10 per cent, is the poorest in cementing value but acts as a flux during burning, lowering the clinkering temperature. The four compounds together account for over 90 per cent of the cement; the remainder is free lime, magnesia and alkali sulphates.",
              "The proportions of the Bogue compounds are not accidental: they are designed by the raw mix to give the desired cement type. Rapid-hardening cement raises C3S to 50 to 60 per cent for high early strength. Low-heat cement raises C2S and limits C3A to 5 per cent for massive pours such as dams, where heat of hydration must be controlled. Sulphate-resistant cement keeps C3A below 5 per cent to resist sulphate attack in foundation and marine work. Bogue's calculation lets the engineer design cement for a specific use from the oxide analysis; IS 4031 specifies the chemical tests on cement.",
            ],
            bullets: [
              "C3S (alite): 30-50%, early strength (28 days), high heat.",
              "C2S (belite): 20-45%, later strength beyond 28 days, low heat.",
              "C3A (celite): 8-12%, fastest reaction, highest heat, sulphate-vulnerable.",
              "C4AF (ferrite): 6-10%, poorest cementing value, flux in burning.",
              "C3S + C2S together give 75% of cement strength; designed via raw mix.",
            ],
            codeExample: {
              language: "python",
              caption: "Estimating Bogue compounds from oxide analysis of cement.",
              code: `# Bogue compound estimation for OPC from oxide percentages
def bogue(cao, sio2, al2o3, fe2o3, so3=2.5):
    free_lime = 1.0
    cao_avail = cao - free_lime
    c3s = 4.071 * cao_avail - 7.600 * sio2 - 6.718 * al2o3 - 1.430 * fe2o3 - 2.852 * so3
    c2s = 2.867 * sio2 - 0.754 * c3s
    c3a = 2.650 * al2o3 - 1.692 * fe2o3
    c4af = 3.043 * fe2o3
    return {
        "C3S": round(c3s, 1),
        "C2S": round(max(c2s, 0), 1),
        "C3A": round(max(c3a, 0), 1),
        "C4AF": round(c4af, 1),
    }

result = bogue(cao=65, sio2=22, al2o3=5, fe2o3=3)
print("Bogue compounds (per cent):")
for k, v in result.items():
    print(f"  {k:5} = {v:5.1f}")
`,
            },
            diagram: {
              kind: "layers",
              title: "Bogue compounds of OPC stacked by share",
              caption:
                "Top: highest share; C3S and C2S dominate the strength, C3A and C4AF the heat.",
              layers: [
                { label: "C3S alite 30-50%", note: "early strength (28 days)" },
                { label: "C2S belite 20-45%", note: "later strength beyond 28 days" },
                { label: "C3A celite 8-12%", note: "fastest, highest heat, sulphate-vulnerable" },
                { label: "C4AF ferrite 6-10%", note: "flux in kiln, low cementing value" },
              ],
            },
            callout: {
              type: "exam",
              title: "Match compound to cement type",
              body: "Memorise three compound-cement pairings: rapid-hardening raises C3S; low-heat raises C2S and limits C3A to 5 per cent; sulphate-resistant limits C3A to 5 per cent. RGPV asks these pairings in 2-mark short questions and awards a mark per correct pair.",
            },
            keyTerms: [
              { term: "Alite (C3S)", definition: "Tricalcium silicate, 30-50 per cent of OPC; gives early strength up to 28 days." },
              { term: "Belite (C2S)", definition: "Dicalcium silicate, 20-45 per cent of OPC; gives later strength beyond 28 days." },
              { term: "Celite (C3A)", definition: "Tricalcium aluminate, 8-12 per cent; reacts fastest, produces most heat, vulnerable to sulphate." },
            ],
            examQuestions: [
              {
                q: "What are Bogue compounds? Name the four main compounds of cement with their chemical formulas, percentage ranges and roles in strength and heat. Explain how the proportions are varied to produce rapid-hardening, low-heat and sulphate-resistant cements.",
                marks: 7,
                outline: [
                  "Define Bogue compounds as the four crystalline phases formed on clinker cooling.",
                  "C3S (alite) 30-50 per cent: early strength 28 days, high heat.",
                  "C2S (belite) 20-45 per cent: later strength beyond 28 days, low heat.",
                  "C3A (celite) 8-12 per cent: fastest reaction, highest heat, sulphate-vulnerable.",
                  "C4AF (ferrite) 6-10 per cent: flux in kiln, poorest cementing value.",
                  "Rapid-hardening cement raises C3S to 50-60 per cent for high early strength.",
                  "Low-heat cement raises C2S and limits C3A to 5 per cent for mass concrete.",
                  "Sulphate-resistant cement limits C3A to 5 per cent to resist sulphate attack.",
                ],
              },
              {
                q: "Which Bogue compound contributes most to early strength of cement?",
                marks: 2,
              },
              {
                q: "State the proportions of C3A and C2S to be adjusted for sulphate-resistant and low-heat cements.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Setting and hardening of cement",
            body: [
              "Setting is the stiffening of cement paste from a plastic to a solid state, marking the loss of workability. Initial set is the time when paste begins to lose plasticity; per IS 4031 it should not be less than 30 minutes, measured by the Vicat apparatus with a 1 mm needle. Final set is the time when the paste has hardened enough to bear a defined load; it should not exceed 600 minutes (10 hours) for OPC. Hardening is the gradual gain of compressive strength that continues for days, weeks and years as hydration proceeds. Setting and hardening are different phenomena; setting is a physical stiffening, hardening is a chemical-mechanical strength gain.",
              "When cement contacts water, hydration begins. C3A reacts almost instantaneously, forming calcium aluminate hydrate (CAH) and releasing high heat; without gypsum this reaction would flash-set the paste within minutes. Gypsum, interground with clinker, dissolves and reacts with C3A to form ettringite, a coating that retards the reaction for an hour or two, preserving workability. Meanwhile C3S hydrolyses, forming calcium silicate hydrate (C-S-H) gel and calcium hydroxide Ca(OH)2. The C-S-H gel is the glue of concrete; it grows as intertwined crystals that bind the aggregates. C2S hydrates similarly but more slowly, contributing the long-term strength gain.",
              "The by-product calcium hydroxide is weak and soluble; it contributes alkalinity (pH about 13) that passivates the steel reinforcement against corrosion but is vulnerable to attack by acids and sulphates. Pozzolanas in PPC and slag in PSC react with Ca(OH)2 to form additional C-S-H, consuming the weak by-product and improving durability. Heat of hydration is highest from C3A and C3S, lowest from C2S, and must be controlled in mass concrete to prevent thermal cracking. Curing keeps the concrete moist so hydration can continue; if concrete dries before hydration is complete, strength is permanently lost. The rate of strength gain is rapid early and slows logarithmically.",
            ],
            bullets: [
              "Setting: initial set >= 30 min, final set <= 600 min, measured by Vicat.",
              "Hardening: gradual strength gain, continues for years.",
              "C3A reacts first, high heat; gypsum retards it via ettringite coating.",
              "C3S + C2S form C-S-H gel (the binder) and Ca(OH)2 (weak, soluble).",
              "Curing keeps concrete moist; incomplete curing loses 30-50 per cent strength.",
            ],
            table: {
              caption: "Hydration products of Bogue compounds and their roles.",
              headers: ["Compound", "Hydration product", "Role"],
              rows: [
                ["C3S", "C-S-H gel + Ca(OH)2", "Early strength, alkalinity"],
                ["C2S", "C-S-H gel + Ca(OH)2", "Later strength"],
                ["C3A", "Ettringite, CAH", "Initial set, high heat (retarded by gypsum)"],
                ["C4AF", "Calcium aluminoferrite hydrate", "Minor, low cementing value"],
                ["Gypsum + C3A", "Ettringite coating", "Retards set, preserves workability"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Hydration cycle: from water contact to cured concrete",
              caption:
                "Each cycle completes one wave of C-S-H growth; curing supplies water for the next wave.",
              steps: [
                { label: "Water contacts cement", note: "C3A reacts first, releases heat" },
                { label: "Gypsum forms ettringite", note: "retards C3A, preserves workability" },
                { label: "C3S hydrolyses", note: "forms C-S-H gel and Ca(OH)2" },
                { label: "Crystals interlock", note: "paste stiffens - initial set" },
                { label: "C2S hydrates slowly", note: "long-term strength gain" },
                { label: "Curing supplies water", note: "next wave of hydration" },
              ],
            },
            callout: {
              type: "warning",
              title: "Setting is not hardening",
              body: "A common slip is to treat setting as strength gain. A concrete that has set at 6 hours has almost no structural strength; compressive strength develops over days as C-S-H continues to grow. RGPV deducts a mark for confusing the two terms. Define setting as loss of plasticity and hardening as strength gain.",
            },
            keyTerms: [
              { term: "Setting", definition: "The stiffening of cement paste from plastic to solid state; initial set >= 30 min, final set <= 10 hours." },
              { term: "Hardening", definition: "The gradual gain of compressive strength of cement paste or concrete as hydration continues." },
              { term: "C-S-H gel", definition: "Calcium silicate hydrate, the crystalline binder formed from C3S and C2S hydration; the glue of concrete." },
            ],
            examQuestions: [
              {
                q: "Differentiate between setting and hardening of cement. Describe the chemistry of hydration, the role of gypsum, the formation of C-S-H gel and the importance of curing for strength development.",
                marks: 7,
                outline: [
                  "Define setting: loss of plasticity; initial set >= 30 min, final set <= 600 min by Vicat.",
                  "Define hardening: gradual strength gain over days, weeks and years.",
                  "C3A reacts first, releases high heat, would flash-set without gypsum.",
                  "Gypsum forms ettringite coating on C3A, retards set, preserves workability.",
                  "C3S hydrolyses: forms C-S-H gel (the binder) and Ca(OH)2 (weak, soluble, alkaline).",
                  "C2S hydrates similarly, slowly, gives long-term strength.",
                  "Curing keeps concrete moist; without it hydration stops and 30-50 per cent strength is lost.",
                  "Conclude: setting is physical stiffening; hardening is chemical-mechanical strength gain.",
                ],
              },
              {
                q: "What is the role of gypsum in cement?",
                marks: 2,
              },
              {
                q: "State the initial and final setting time limits of OPC and the apparatus used to measure them.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Types of cement and tests",
            body: [
              "Ordinary Portland Cement (OPC) is the general-purpose cement, available in three grades by 28-day cube strength: grade 33 (IS 269), grade 43 (IS 8112) and grade 53 (IS 12269), the numbers denoting the minimum compressive strength in MPa at 28 days. Grade 43 is the workhorse for structural concrete, grade 53 for high-strength and fast-stripping work. Portland Pozzolana Cement (PPC), per IS 1489 part 1, is OPC clinker interground with 15 to 35 per cent pozzolana such as fly-ash or calcined clay. Pozzolana reacts with the weak Ca(OH)2 from hydration to form additional C-S-H, improving long-term strength, sulphate resistance and durability at the cost of slower early strength.",
              "Portland Slag Cement (PSC), per IS 455, is OPC clinker interground with 35 to 80 per cent granulated blast furnace slag, a by-product of steel-making. Slag hydrates slowly, generating low heat and resisting sulphate and chloride attack, making PSC the preferred cement for marine work, foundations in aggressive soils and mass concrete. Other specialist cements include rapid-hardening cement (high C3S, fine grinding), low-heat cement (high C2S, low C3A) for dams, sulphate-resistant cement (C3A below 5 per cent), white cement (low iron oxide), coloured cement, hydrophobic cement (water-repellent coating), oil-well cement (retarded set for deep wells) and masonry cement (low strength, plasticised for mortar).",
              "Field tests screen cement on site. Colour should be uniform grey with a greenish tinge; feel should be smooth and cool, not gritty; a pinch thrown into water should float for a moment before sinking (no lumps); a handful compressed should not form a lump that crumbles. Laboratory tests confirm properties. The Vicat apparatus measures standard consistency (24 to 30 per cent water), initial and final set. The Le Chatelier apparatus measures soundness (expansion due to free lime or magnesia); the limit is 10 mm. Compression on 70.6 mm mortar cubes gives 28-day strength; fineness by 90 micron IS sieve (residue <= 10 per cent) or Blaine air permeability (minimum 225 m^2 per kg) gives the specific surface that controls hydration rate.",
            ],
            bullets: [
              "OPC grades 33, 43, 53 by 28-day cube strength in MPa.",
              "PPC: OPC + 15-35 per cent pozzolana (fly-ash); cheaper, more durable, slower.",
              "PSC: OPC + 35-80 per cent slag; low heat, sulphate-resistant for marine.",
              "Special cements: rapid-hardening, low-heat, sulphate-resistant, white, masonry.",
              "Tests: Vicat (setting), Le Chatelier (soundness), cube (strength), Blaine (fineness).",
            ],
            table: {
              caption: "Common cement types and their application.",
              headers: ["Cement", "IS code", "Distinctive feature", "Use"],
              rows: [
                ["OPC 33", "IS 269", "General, low strength", "Ordinary masonry"],
                ["OPC 43", "IS 8112", "Standard structural", "RCC work"],
                ["OPC 53", "IS 12269", "High early strength", "Fast stripping"],
                ["PPC", "IS 1489-1", "Fly-ash 15-35%", "Durable, mass concrete"],
                ["PSC", "IS 455", "Slag 35-80%", "Marine, foundation"],
                ["SRC", "IS 12330", "C3A < 5%", "Sulphate soil"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "OPC vs PPC vs PSC compared",
              caption:
                "Same clinker base; the additive (pozzolana or slag) shifts the properties.",
              left: {
                heading: "OPC",
                items: [
                  "Pure clinker + gypsum",
                  "Fast early strength",
                  "High heat of hydration",
                  "Vulnerable to sulphate",
                  "General-purpose structural",
                ],
              },
              right: {
                heading: "PPC and PSC",
                items: [
                  "Clinker + pozzolana or slag",
                  "Slower early strength",
                  "Low heat, durable",
                  "Resists sulphate and chloride",
                  "Marine, mass concrete, foundations",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the IS codes",
              body: "Memorise five IS codes: OPC 33 - IS 269, OPC 43 - IS 8112, OPC 53 - IS 12269, PPC - IS 1489 part 1, PSC - IS 455. RGPV asks the cement-IS code pairing in 2-mark short questions and awards a mark per correct pair.",
            },
            keyTerms: [
              { term: "OPC grade", definition: "Ordinary Portland Cement graded by 28-day cube strength; 33, 43 and 53 MPa per IS 269, IS 8112, IS 12269." },
              { term: "Portland Pozzolana Cement (PPC)", definition: "OPC clinker interground with 15-35 per cent pozzolana; reacts with Ca(OH)2 to give extra C-S-H." },
              { term: "Soundness of cement", definition: "The ability of hardened cement paste to retain its volume without expansion; measured by Le Chatelier." },
            ],
            examQuestions: [
              {
                q: "Classify cement into OPC, PPC, PSC and special cements. State the IS code, composition, distinctive feature and typical use of each. Describe the laboratory tests for setting time, soundness, compressive strength and fineness.",
                marks: 7,
                outline: [
                  "OPC grades 33, 43, 53 by 28-day strength; IS 269, IS 8112, IS 12269.",
                  "PPC: OPC + 15-35 per cent pozzolana per IS 1489-1; reacts with Ca(OH)2 to form C-S-H.",
                  "PSC: OPC + 35-80 per cent slag per IS 455; low heat, sulphate-resistant for marine.",
                  "Special: rapid-hardening, low-heat, sulphate-resistant (IS 12330), white, masonry.",
                  "Setting time: Vicat apparatus; initial set >= 30 min, final set <= 600 min for OPC.",
                  "Soundness: Le Chatelier apparatus, expansion <= 10 mm due to free lime or magnesia.",
                  "Compressive strength: 70.6 mm mortar cubes tested at 7 and 28 days per IS 4031.",
                  "Fineness: 90 micron sieve residue <= 10 per cent, Blaine specific surface >= 225 m^2 per kg.",
                ],
              },
              {
                q: "Differentiate between OPC and PPC.",
                marks: 2,
              },
              {
                q: "State three field tests on cement at the construction site.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============================ UNIT IV - AGGREGATES ============================
    {
      number: 4,
      roman: "IV",
      title: "Aggregates",
      summary:
        "Classification of aggregates by source, size and shape; physical and mechanical properties; sieve analysis and grading curves; the deleterious materials that limit durability; and the crushing, impact, abrasion and soundness tests per IS 2386.",
      chapter: {
        number: "04",
        title: "Aggregates",
        intro:
          "Unit IV covers aggregates as the inert granular skeleton of concrete. Sections walk through the classification by source, size and shape; the engineering properties of specific gravity, absorption and soundness; sieve analysis and grading curves with the four IS 383 zones; the deleterious materials and their IS limits; and the crushing, impact, Los Angeles abrasion and shape-index tests.",
        inOneBreath:
          "Aggregates occupy 70-75 per cent of concrete volume and are classified by source (natural, artificial, synthetic), size (coarse >= 4.75 mm, fine < 4.75 mm), and shape (rounded, irregular, angular, flaky, elongated); key properties include specific gravity 2.5-2.9, bulk density 1400-1600 kg/m^3, absorption and soundness; sieve analysis gives grading curves and fineness modulus; deleterious materials are limited by IS 2386; and standard tests include crushing, impact, LA abrasion and shape indices.",
        sections: [
          {
            number: "4.1",
            title: "Classification of aggregates",
            body: [
              "Aggregates occupy 70 to 75 per cent of the volume of concrete and form the inert granular skeleton of the mix. They are classified by source, size and shape. By source, natural aggregates include river sand, pit gravel and crushed rock; artificial aggregates include broken brick, blast furnace slag and fly-ash pellets; synthetic aggregates include expanded clay, shale and vermiculite used for lightweight concrete. By size, coarse aggregates are retained on a 4.75 mm IS sieve and include gravel and crushed stone; fine aggregates pass the 4.75 mm sieve and include sand, stone dust and surkhi. The two together form the gradation that gives concrete its bulk and stiffness.",
              "By shape, aggregates are rounded, irregular, angular, flaky or elongated. Rounded aggregates such as river gravels have smooth water-worn surfaces, poor interlock and low internal friction, giving high workability but lower bond with the paste. Irregular aggregates such as pit gravels have partly rounded shapes. Angular aggregates from crushed rock have sharp edges, good interlock and high bond, but reduce workability. Flaky aggregates have thickness less than 0.6 of the mean dimension; elongated aggregates have length greater than 1.8 of the mean dimension. Both flaky and elongated particles reduce workability and strength because they orient under compaction and create weak planes.",
              "By geological origin, common coarse aggregates are granite, basalt, limestone and sandstone crushed from the parent rock. By weight, normal-weight aggregates have a bulk density of 1520 to 1680 kg per m^3, lightweight aggregates below 1200 kg per m^3 for insulation and screed, and heavyweight aggregates above 2080 kg per m^3 for radiation shielding in nuclear and medical work. The choice of aggregate class depends on the concrete grade, the exposure, the structural purpose and the locally available source. Aggregate properties often limit the strength of concrete more than the cement grade, since cement paste is usually stronger than the rock particles it binds.",
            ],
            bullets: [
              "By source: natural (river, pit), artificial (brick, slag), synthetic (expanded clay).",
              "By size: coarse (>= 4.75 mm sieve), fine (< 4.75 mm sieve).",
              "By shape: rounded, irregular, angular, flaky, elongated.",
              "By weight: normal (1520-1680 kg/m^3), light (< 1200), heavy (> 2080).",
              "Aggregate strength often limits concrete strength more than cement paste.",
            ],
            table: {
              caption: "Aggregate shape classification and its effect on concrete.",
              headers: ["Shape", "Source", "Workability", "Bond"],
              rows: [
                ["Rounded", "River gravel", "High", "Low"],
                ["Irregular", "Pit gravel", "Medium", "Medium"],
                ["Angular", "Crushed rock", "Low", "High"],
                ["Flaky", "Laminated rock", "Low", "Low"],
                ["Elongated", "Laminated rock", "Low", "Low"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Aggregate classification by three complementary axes",
              caption:
                "Each branch answers a different mix-design question; combine all three for full description.",
              start: "Aggregate sample",
              branches: [
                { label: "by source", outcome: "natural / artificial / synthetic - controls cost and durability", good: true },
                { label: "by size", outcome: "coarse >= 4.75 mm / fine < 4.75 mm - controls gradation", good: true },
                { label: "by shape", outcome: "rounded / angular / flaky / elongated - controls bond", good: true },
                { label: "by weight", outcome: "normal / light / heavy - controls density", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Shape drives workability",
              body: "When concrete is too stiff at the correct water-cement ratio, the cause is often flaky or elongated coarse aggregate from a poor crusher. Switching to well-shaped angular or rounded aggregate recovers workability without adding water. RGPV asks the shape-workability pairing in 3-mark short questions.",
            },
            keyTerms: [
              { term: "Coarse aggregate", definition: "Aggregate retained on a 4.75 mm IS sieve, typically gravel or crushed stone." },
              { term: "Fine aggregate", definition: "Aggregate passing a 4.75 mm IS sieve, typically natural sand or crushed stone dust." },
              { term: "Flaky aggregate", definition: "Aggregate particle whose thickness is less than 0.6 of its mean dimension; reduces workability and strength." },
            ],
            examQuestions: [
              {
                q: "Classify aggregates by source, size, shape and weight. State the engineering significance of each classification and give two examples of each.",
                marks: 7,
                outline: [
                  "Define aggregate as the inert granular material occupying 70-75 per cent of concrete volume.",
                  "By source: natural (river sand, gravel), artificial (broken brick, slag), synthetic (expanded clay).",
                  "By size: coarse >= 4.75 mm sieve; fine < 4.75 mm sieve.",
                  "By shape: rounded, irregular, angular, flaky (thickness < 0.6 mean), elongated (length > 1.8 mean).",
                  "By weight: normal 1520-1680, light < 1200, heavy > 2080 kg per m^3.",
                  "Significance: shape controls bond and workability; size controls gradation; weight controls density.",
                  "Examples: rounded - river gravel; angular - crushed basalt; flaky - laminated sandstone.",
                  "Conclude: aggregate properties often limit concrete strength more than cement grade.",
                ],
              },
              {
                q: "Differentiate between fine and coarse aggregate.",
                marks: 2,
              },
              {
                q: "State three classifications of aggregates by shape and the engineering significance of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Properties of aggregates",
            body: [
              "The engineering properties of aggregates control the strength, workability and durability of concrete. The most important are particle shape and surface texture, specific gravity, bulk density, porosity and water absorption, moisture content, soundness, toughness, hardness and abrasion resistance. Shape and surface texture affect the bond with the cement paste: rough crushed surfaces bond well, smooth river surfaces give better workability but lower bond. Specific gravity ranges 2.5 to 2.9 for normal aggregates; values below 2.4 indicate weak porous rock.",
              "Bulk density of coarse aggregate is 1400 to 1600 kg per m^3, of fine aggregate 1450 to 1600 kg per m^3, depending on packing. Moisture states are oven-dry (no water), air-dry (surface dry, pores partially full), saturated surface dry (SSD, pores full, surface dry - the reference state for mix design), and wet (surface moisture present). Absorption is the water that fills aggregate pores, expressed as a percentage of dry weight; it varies from 0.5 per cent for dense basalt to 5 per cent for sandstone. Free moisture is the surface water beyond SSD, which must be deducted from the mixing water.",
              "Porosity and absorption affect the water-cement ratio: wet aggregates contribute free water, dry aggregates absorb mixing water, and SSD aggregates leave the w/c unchanged. Soundness is the resistance to disintegration by weathering, tested by cycling the aggregate through saturated solutions of sodium or magnesium sulphate that crystallise in the pores and simulate freeze-thaw. Toughness is resistance to impact, measured by the aggregate impact value. Hardness is resistance to abrasion, measured by the Los Angeles abrasion value. Each property is quantified per IS 2386 and contributes to the aggregate specification for the concrete grade and exposure.",
            ],
            bullets: [
              "Specific gravity 2.5-2.9; bulk density of coarse 1400-1600 kg/m^3.",
              "Moisture states: oven-dry, air-dry, SSD (reference), wet.",
              "Absorption fills aggregate pores; free moisture is surface water beyond SSD.",
              "Soundness: sulphate solution cycling simulates freeze-thaw weathering.",
              "Toughness (impact value) and hardness (LA abrasion) measured per IS 2386.",
            ],
            table: {
              caption: "Aggregate moisture states and their mix-design effect.",
              headers: ["State", "Pores", "Surface", "Mix-design effect"],
              rows: [
                ["Oven-dry", "Empty", "Dry", "Absorbs mixing water"],
                ["Air-dry", "Partly full", "Dry", "Absorbs some water"],
                ["SSD", "Full", "Dry", "Reference state, no adjustment"],
                ["Wet", "Full", "Wet", "Adds free water to mix"],
                ["Absorption", "Pores filled", "-", "0.5-5% of dry weight"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Aggregate properties by class",
              caption:
                "Physical properties are intrinsic; mechanical are measured under load.",
              axes: { x: "physical / mechanical", y: "intrinsic / measured" },
              quadrants: [
                { label: "Intrinsic physical", note: "specific gravity, porosity, absorption, shape, texture" },
                { label: "Measured physical", note: "bulk density, moisture content, grading, fineness modulus" },
                { label: "Intrinsic mechanical", note: "toughness, hardness (mineralogy)" },
                { label: "Measured mechanical", note: "crushing value, impact value, LA abrasion, soundness" },
              ],
            },
            callout: {
              type: "warning",
              title: "SSD is the reference for mix design",
              body: "Mix design assumes aggregates at saturated surface dry (SSD) state. If aggregates are wet, deduct free surface moisture from the mixing water; if dry, add absorption to the mixing water. RGPV deducts a mark for any mix-design answer that ignores aggregate moisture correction.",
            },
            keyTerms: [
              { term: "Saturated surface dry (SSD)", definition: "Aggregate state with pores full of water and surface dry; the reference state for mix design." },
              { term: "Absorption", definition: "The water filling aggregate pores, expressed as a percentage of dry weight; 0.5 to 5 per cent for normal aggregate." },
              { term: "Soundness", definition: "Resistance of aggregate to disintegration by freeze-thaw, tested by sulphate solution cycling." },
            ],
            examQuestions: [
              {
                q: "State the important properties of aggregates. Define the moisture states, explain the significance of SSD in mix design, and describe the soundness test.",
                marks: 7,
                outline: [
                  "List properties: shape, texture, specific gravity, bulk density, porosity, absorption, soundness, toughness, hardness.",
                  "Moisture states: oven-dry, air-dry, SSD, wet; SSD is the reference for mix design.",
                  "Absorption fills pores (0.5-5 per cent); free moisture is surface water beyond SSD.",
                  "Wet aggregates add water to mix; dry aggregates absorb water - corrections needed.",
                  "Specific gravity 2.5-2.9; bulk density 1400-1600 kg per m^3 for coarse aggregate.",
                  "Soundness test: cycles through sodium or magnesium sulphate solution; simulate freeze-thaw.",
                  "Aggregate impact value for toughness; Los Angeles abrasion for hardness.",
                  "Conclude: all properties per IS 2386 govern acceptance for the concrete grade and exposure.",
                ],
              },
              {
                q: "Define saturated surface dry (SSD) state of aggregate.",
                marks: 2,
              },
              {
                q: "State three aggregate moisture states and the mix-design correction each requires.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Sieve analysis and grading",
            body: [
              "Sieve analysis determines the particle size distribution of an aggregate. A representative sample is dried and passed through a stack of standard IS sieves arranged in order of decreasing aperture from top to bottom. For coarse aggregate the sieves range from 80 mm down to 4.75 mm; for fine aggregate from 4.75 mm down to 150 micron. The mass retained on each sieve is weighed, and the cumulative percentage passing each sieve is calculated. The results are plotted as a grading curve on semi-log paper with sieve aperture on the logarithmic x-axis and percentage passing on the linear y-axis.",
              "A well-graded aggregate has a smooth grading curve covering all particle sizes from coarse to fine; this gives dense packing, low void content and high workability with minimum cement. A uniformly graded aggregate has a single dominant size; the curve is steep, voids are high, and more cement paste is needed. A gap-graded aggregate skips a size range; the curve has a flat step. IS 383 specifies the grading limits for coarse and fine aggregates; fine aggregate is divided into four grading zones (I to IV) by the percentage passing the 600 micron sieve, with Zone I the coarsest and Zone IV the finest.",
              "Fineness modulus (FM) is the sum of cumulative percentages retained on standard sieves from 150 micron to 75 mm, divided by 100. FM for sand ranges 2.0 to 3.5; for coarse aggregate 5.5 to 8.0. Higher FM means a coarser aggregate. FM is used in mix design for proportioning and for predicting workability, but it does not by itself describe the grading - two aggregates with the same FM can have very different grading curves. The grading curve together with the FM gives a full description of the aggregate size distribution. IS 2386 part 1 specifies the standard sieve analysis procedure.",
            ],
            bullets: [
              "Sieve analysis: stack of standard IS sieves; weigh mass retained on each.",
              "Coarse sieves: 80 mm to 4.75 mm; fine: 4.75 mm to 150 micron.",
              "Grading curve: percentage passing vs sieve aperture, semi-log paper.",
              "Well-graded: smooth curve, dense packing; gap-graded: skips a size.",
              "Fineness modulus: sum of cumulative per cent retained / 100; sand 2-3.5.",
            ],
            codeExample: {
              language: "python",
              caption: "Sieve analysis and fineness modulus computation per IS 2386 part 1.",
              code: `# Sieve analysis of fine aggregate per IS 2386 part 1
def fineness_modulus(sieves):
    """sieves: list of (aperture_mm, cum_percent_retained)"""
    return round(sum(p for _, p in sieves) / 100, 2)

fine_aggregate = [
    (10.0,  0),
    (4.75,  2),
    (2.36, 13),
    (1.18, 28),
    (0.600, 42),
    (0.300, 60),
    (0.150, 92),
    (0.075, 98),
]
fm = fineness_modulus(fine_aggregate)
print(f"Fineness modulus = {fm}")
if fm >= 3.0:
    zone = "I"
elif fm >= 2.5:
    zone = "II"
elif fm >= 2.0:
    zone = "III"
else:
    zone = "IV"
print(f"Approximate grading zone = {zone}")
`,
            },
            diagram: {
              kind: "pipeline",
              title: "Sieve analysis workflow from sample to grading curve",
              caption:
                "Each stage conditions the next; the grading curve is read against IS 383 limits.",
              stages: [
                { label: "Sample 1 kg, dried", note: "representative of stockpile" },
                { label: "Stack IS sieves", note: "80 mm to 150 micron" },
                { label: "Shake 10 minutes", note: "mechanical shaker" },
                { label: "Weigh retained mass", note: "compute per cent passing" },
                { label: "Plot grading curve", note: "compare to IS 383 limits; compute FM" },
              ],
            },
            callout: {
              type: "tip",
              title: "FM does not describe grading",
              body: "Two sands with the same fineness modulus can have very different grading curves - one well-graded, one gap-graded. Always quote both FM and the grading curve in a mix-design answer. RGPV deducts a mark for stating FM alone as 'grading'.",
            },
            keyTerms: [
              { term: "Sieve analysis", definition: "A test passing an aggregate sample through standard sieves to determine particle size distribution." },
              { term: "Fineness modulus", definition: "The sum of cumulative percentages retained on standard sieves 150 micron to 75 mm divided by 100." },
              { term: "Well-graded aggregate", definition: "Aggregate with a smooth grading curve covering all sizes; gives dense packing and low voids." },
            ],
            examQuestions: [
              {
                q: "Describe the sieve analysis of aggregates per IS 2386. Explain grading curves, the four grading zones for fine aggregate per IS 383, and the significance of fineness modulus. Compute FM from a given set of cumulative percentages.",
                marks: 7,
                outline: [
                  "Define sieve analysis: dried sample through stack of IS sieves 80 mm to 150 micron.",
                  "Weigh retained mass on each sieve; compute cumulative per cent passing.",
                  "Plot grading curve: per cent passing vs sieve aperture, semi-log paper.",
                  "Well-graded: smooth curve, dense packing; uniformly graded: single dominant size; gap-graded: skips a size.",
                  "IS 383 grading zones I-IV by per cent passing 600 micron; Zone I coarsest, Zone IV finest.",
                  "Fineness modulus: sum of cumulative per cent retained on standard sieves / 100.",
                  "FM for sand 2.0-3.5; for coarse aggregate 5.5-8.0; higher FM = coarser.",
                  "FM does not by itself describe grading; quote both FM and curve in mix design.",
                ],
              },
              {
                q: "What is fineness modulus of aggregate?",
                marks: 2,
              },
              {
                q: "State the four grading zones for fine aggregate per IS 383 and their basis.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Deleterious materials in aggregates",
            body: [
              "Deleterious materials in aggregates weaken concrete, cause durability problems, or interfere with the hydration of cement. Organic impurities such as humus and decayed vegetable matter delay the setting of cement and reduce strength; they are detected by the colour test with sodium hydroxide solution. Clay and silt coatings on aggregate surfaces weaken the paste-aggregate bond and increase water demand; they are measured by the sedimentation or decantation test. Dust and crusher fines below 75 micron increase the surface area and water demand, lowering workability at constant w/c. Coal, lignite and other light materials pop out of the surface, stain and weaken the concrete.",
              "Chemical impurities are more dangerous than physical ones. Sulphates react with C3A in cement to form ettringite, which expands and cracks the concrete. Chlorides accelerate corrosion of steel reinforcement; limits are 0.6 kg per m^3 of chloride ion for reinforced concrete. Alkalis from the aggregate or cement react with reactive silica in the aggregate (alkali-silica reaction, ASR) to form a swelling gel that cracks the concrete over years. Soft fragments such as shale, clay lumps and chert degrade under load or weathering. Iron pyrites form rust stains on the surface and may pop out as they oxidise and expand.",
              "IS 2386 part 2 specifies limits: clay and fine silt in fine aggregate <= 1 per cent by weight, in coarse aggregate <= 0.25 per cent; coal and lignite <= 1 per cent for ordinary work, <= 0.5 per cent for decorative. Organic impurities are screened by the colour test - a sample darker than the standard colour indicates harmful organic matter and the aggregate is rejected or tested for strength on mortar cubes. Sulphate as SO3 is limited to 1 per cent, chloride to 0.06 per cent by weight of aggregate for reinforced concrete. Aggregate washing, screening and selective quarrying control these impurities; tests should be repeated each time a new quarry face is opened.",
            ],
            bullets: [
              "Organic impurities delay set; detected by colour test with NaOH solution.",
              "Clay and silt weaken bond; measured by sedimentation or decantation.",
              "Sulphates form expansive ettringite with C3A; chloride corrodes steel.",
              "Alkali-silica reaction forms swelling gel; soft fragments degrade under load.",
              "IS 2386 limits: clay <= 1%, SO3 <= 1%, chloride <= 0.06% for RCC.",
            ],
            table: {
              caption: "Deleterious materials, their effect and IS 2386 limits.",
              headers: ["Material", "Effect", "IS 2386 limit"],
              rows: [
                ["Organic matter", "Delays setting, lowers strength", "Colour test <= standard"],
                ["Clay and silt", "Weakens bond, increases water", "Fine <= 1%, coarse <= 0.25%"],
                ["Coal and lignite", "Pop out, stain", "<= 1% ordinary, 0.5% decorative"],
                ["Sulphate (SO3)", "Ettringite expansion, cracking", "<= 1%"],
                ["Chloride (Cl-)", "Corrosion of steel", "<= 0.06% in RCC"],
                ["Iron pyrites", "Rust stains, pop out", "Trace only"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Deleterious materials branch by failure mode",
              caption:
                "Each branch leads to a different failure; the test list follows the branch.",
              start: "Deleterious material in aggregate",
              branches: [
                { label: "physical coating (clay, silt, dust)", outcome: "weak bond, high water demand", good: false },
                { label: "organic matter (humus)", outcome: "delays set, lowers strength", good: false },
                { label: "chemical (sulphate, chloride, alkali)", outcome: "expansion, corrosion, ASR cracking", good: false },
                { label: "soft or unstable fragment (shale, chert, pyrites)", outcome: "weathering, staining, pop out", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "ASR cracks appear years later",
              body: "Alkali-silica reaction between cement alkalis and reactive aggregate silica produces a gel that swells in moisture and cracks the concrete over years, with no early warning. Use low-alkali cement (Na2O equivalent <= 0.6 per cent) or non-reactive aggregate when the source is suspect. RGPV asks ASR in 3-mark short questions.",
            },
            keyTerms: [
              { term: "Deleterious material", definition: "Any substance in aggregate that weakens concrete, delays hydration or causes durability problems." },
              { term: "Alkali-silica reaction (ASR)", definition: "Reaction between cement alkalis and reactive silica in aggregate forming a swelling gel that cracks concrete." },
              { term: "Colour test", definition: "A screening test for organic impurities; aggregate darker than a standard colour is rejected or strength-tested." },
            ],
            examQuestions: [
              {
                q: "List the deleterious materials commonly found in aggregates. State the effect of each on concrete, the test used for its detection, and the IS 2386 limits. Explain alkali-silica reaction and its prevention.",
                marks: 7,
                outline: [
                  "List deleterious materials: organic matter, clay, silt, dust, coal, sulphate, chloride, alkali, pyrites.",
                  "Organic matter delays setting; detected by colour test with NaOH solution.",
                  "Clay and silt weaken bond; measured by sedimentation or decantation; limit 1 per cent.",
                  "Sulphate forms expansive ettringite; chloride corrodes steel; limits 1 and 0.06 per cent.",
                  "Alkali-silica reaction: cement alkalis + reactive silica form swelling gel that cracks over years.",
                  "ASR prevention: low-alkali cement (Na2O eq <= 0.6 per cent) or non-reactive aggregate.",
                  "Soft fragments (shale, chert) and iron pyrites cause weathering, staining, pop out.",
                  "Conclude: IS 2386 part 2 governs limits; test each new quarry face.",
                ],
              },
              {
                q: "What is the colour test on aggregate?",
                marks: 2,
              },
              {
                q: "State the IS 2386 limits for clay, sulphate and chloride in aggregate.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Tests on aggregates",
            body: [
              "Aggregate tests confirm the mechanical and physical properties used in the concrete specification. The aggregate crushing value (ACV) test loads a sample of single-sized aggregate 10 to 14 mm in a cylinder with a plunger under a load of 40 tonne applied over 10 minutes. The crushed material passing the 2.36 mm sieve is weighed and expressed as a percentage of the original; the crushing value should be below 30 per cent for surface course and below 45 per cent for concrete. A lower ACV indicates a stronger aggregate.",
              "The aggregate impact value (AIV) test drops a standard hammer 15 times onto a sample in a cup; the material passing the 2.36 mm sieve is weighed and reported as a percentage. AIV below 27 per cent is for surface course, below 30 per cent for concrete. The Los Angeles abrasion test rotates a sample with steel balls in a drum for a fixed number of revolutions; the percentage wear passing the 1.7 mm sieve gives the LA abrasion value; below 30 per cent is strong, below 50 per cent acceptable for general use. The abrasion value predicts resistance to surface wear in pavements.",
              "Specific gravity and water absorption are measured by the pycnometer or basket method; the SSD weight, oven-dry weight and water-displaced weight give the specific gravity and absorption. The flakiness index is the percentage by weight of particles whose thickness is less than 0.6 of the mean dimension, measured by a thickness gauge; the elongation index is the percentage whose length is greater than 1.8 of the mean, measured by a length gauge. Both should be below 35 per cent for structural concrete. Soundness is tested by cycling through sodium or magnesium sulphate solution; the weight loss after five cycles should be below 12 per cent for fine aggregate.",
            ],
            bullets: [
              "Crushing value: 40 t load for 10 min; < 30% surface, < 45% concrete.",
              "Impact value: 15 hammer drops; < 30% for concrete aggregate.",
              "LA abrasion: rotating drum with steel balls; < 30% strong, < 50% general.",
              "Specific gravity and absorption by pycnometer or basket method.",
              "Flakiness and elongation indices by thickness and length gauges; < 35% each.",
            ],
            table: {
              caption: "Standard aggregate tests and their acceptance limits.",
              headers: ["Test", "Property", "Apparatus", "Limit"],
              rows: [
                ["Crushing value", "Strength", "Cylinder + plunger", "< 30% surface, 45% concrete"],
                ["Impact value", "Toughness", "Impact tester", "< 30%"],
                ["LA abrasion", "Hardness", "LA drum", "< 30% strong, 50% general"],
                ["Specific gravity", "Density", "Pycnometer", "2.5-2.9"],
                ["Water absorption", "Porosity", "Pycnometer", "< 2% strong"],
                ["Flakiness index", "Shape", "Thickness gauge", "< 35%"],
                ["Soundness", "Durability", "Sulphate solution", "< 12% loss"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Aggregate tests by property and method",
              caption:
                "Each test answers one property question - combine four or more for full specification.",
              axes: { x: "physical / mechanical", y: "lab / field" },
              quadrants: [
                { label: "Field physical", note: "visual inspection, grading" },
                { label: "Lab physical", note: "specific gravity, absorption, soundness" },
                { label: "Field mechanical", note: "drop test, scratch test" },
                { label: "Lab mechanical", note: "crushing, impact, LA abrasion" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the four key limits",
              body: "Memorise four aggregate test limits: crushing value < 30 per cent for surface, impact value < 30 per cent, LA abrasion < 30 per cent for strong, flakiness and elongation indices < 35 per cent each. RGPV asks these in 2-mark short questions and awards a mark per correctly quoted limit.",
            },
            keyTerms: [
              { term: "Aggregate crushing value", definition: "Percentage of crushed material passing 2.36 mm under 40 tonne load; below 30 per cent for surface course." },
              { term: "Los Angeles abrasion value", definition: "Percentage wear of aggregate rotated with steel balls in a drum; below 30 per cent for strong aggregate." },
              { term: "Flakiness index", definition: "Percentage by weight of particles whose thickness is less than 0.6 of the mean dimension." },
            ],
            examQuestions: [
              {
                q: "Describe the crushing value, impact value and Los Angeles abrasion tests on aggregates. State the apparatus, procedure and acceptance limits for each. Explain the significance of the flakiness and elongation indices.",
                marks: 7,
                outline: [
                  "Aggregate crushing value: 10-14 mm sample in cylinder, 40 t load over 10 min; per cent passing 2.36 mm.",
                  "ACV limit: < 30 per cent for surface course, < 45 per cent for concrete.",
                  "Aggregate impact value: hammer dropped 15 times; per cent passing 2.36 mm; limit < 30 per cent.",
                  "LA abrasion: sample + steel balls rotated in drum; per cent passing 1.7 mm; < 30 per cent strong.",
                  "Specific gravity and absorption by pycnometer; SSD, oven-dry and water-displaced weights.",
                  "Flakiness index: thickness < 0.6 of mean, thickness gauge; elongation index: length > 1.8 of mean, length gauge.",
                  "Both indices should be < 35 per cent for structural concrete.",
                  "Conclude: aggregate tests per IS 2386 govern acceptance for the concrete grade and exposure.",
                ],
              },
              {
                q: "State the limits for aggregate crushing value and impact value.",
                marks: 2,
              },
              {
                q: "Define flakiness index and elongation index and state the acceptance limit for each.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ============================ UNIT V - CONCRETE AND MORTAR ============================
    {
      number: 5,
      roman: "V",
      title: "Concrete and Mortar",
      summary:
        "Concrete ingredients and grade designation M10 to M40; workability and the slump test; the basics of mix design with the water-cement ratio; mixing, placing and curing practice; and the types and uses of mortar for masonry and plaster.",
      chapter: {
        number: "05",
        title: "Concrete and Mortar",
        intro:
          "Unit V covers concrete and mortar as the assembled materials of construction. Sections walk through ingredients and grades M10 to M40; workability and the slump test; mix design basics with Abrams' law and the water-cement ratio; mixing, placing and curing practice per IS 456; and the types, mixes and uses of cement, lime and special mortars.",
        inOneBreath:
          "Concrete is cement + fine aggregate + coarse aggregate + water, with grades M10 to M40 per IS 456 by 28-day cube strength; workability is measured by the slump cone per IS 1199; mix design per IS 10262 uses target mean strength and water-cement ratio governed by Abrams' law; mixing, placing and curing follow IS 456 with 7-14 day curing; and mortars are cement, lime or compo in ratios 1:3 to 1:8 for different masonry and plaster uses.",
        sections: [
          {
            number: "5.1",
            title: "Ingredients and grades of concrete",
            body: [
              "Concrete is a composite of a binding matrix (cement and water) and aggregates (fine and coarse). The standard ingredients are cement, fine aggregate (sand), coarse aggregate (gravel or crushed stone) and water. Admixtures are optional additions: plasticisers (water-reducing), super-plasticisers (high-range water-reducing), accelerators (calcium chloride for cold weather), retarders (sugar, lignosulphonate for hot weather), air-entraining agents (for frost resistance), and pozzolanas such as fly-ash and silica fume (for strength and durability). The mix design chooses the proportions to meet strength, workability, durability and economy objectives simultaneously.",
              "Concrete grades per IS 456 are denoted M10, M15, M20, M25, M30, M35, M40 and above. The letter M stands for mix and the number denotes the characteristic compressive strength of a 150 mm cube at 28 days in N per mm^2. Grades M10 to M20 are ordinary concrete used for mass concrete, levelling and non-structural work; M25 to M40 are standard grades used in reinforced concrete for foundations, columns, beams and slabs; above M45 is high-strength concrete for prestressed and special structures. Nominal mix proportions are specified for M5 to M20; design mixes are required for M25 and above.",
              "Nominal mix ratios by volume (cement : sand : coarse aggregate) are M5 = 1:5:10, M7.5 = 1:4:8, M10 = 1:3:6, M15 = 1:2:4, M20 = 1:1.5:3, M25 = 1:1:2. Design mixes replace volume proportions by weight proportions, computed by the IS 10262 method using water-cement ratio, workability, exposure and aggregate grading. Grade selection by structural purpose: mass concrete and levelling use M10 or M15, foundation concrete uses M20, RCC slabs and beams use M25, columns use M30, bridge piers use M35, prestressed girders use M40 and above. IS 456 also specifies minimum cement content and maximum water-cement ratio for each exposure condition.",
            ],
            bullets: [
              "Ingredients: cement, fine aggregate, coarse aggregate, water, optional admixtures.",
              "Admixtures: plasticisers, accelerators, retarders, air-entraining, pozzolanas.",
              "Grades M10-M40 per IS 456; M = mix, number = 28-day cube strength in MPa.",
              "Nominal mixes (by volume) M10=1:3:6, M15=1:2:4, M20=1:1.5:3, M25=1:1:2.",
              "Design mix by IS 10262 for M25 and above; uses w/c, workability, exposure.",
            ],
            table: {
              caption: "Concrete grades per IS 456 with nominal mix proportions.",
              headers: ["Grade", "Nominal mix (C:S:A)", "Category", "Use"],
              rows: [
                ["M10", "1:3:6", "Ordinary", "Levelling, mass concrete"],
                ["M15", "1:2:4", "Ordinary", "Foundation, non-structural"],
                ["M20", "1:1.5:3", "Ordinary", "RCC foundations"],
                ["M25", "1:1:2", "Standard", "RCC slabs, beams"],
                ["M30", "Design mix", "Standard", "RCC columns"],
                ["M35", "Design mix", "Standard", "Bridge piers"],
                ["M40", "Design mix", "Standard", "Prestressed girders"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Concrete grade pyramid from ordinary to high-strength",
              caption:
                "Each tier lifts the structural demand; the design effort and quality control rise with it.",
              tiers: [
                { label: "M40 prestressed", note: "design mix, strict QC" },
                { label: "M30 - M35 standard", note: "columns, piers" },
                { label: "M20 - M25 ordinary RCC", note: "foundations, slabs" },
                { label: "M10 - M15 mass", note: "levelling, non-structural" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise the four nominal mix ratios",
              body: "Memorise four nominal mix ratios: M10 = 1:3:6, M15 = 1:2:4, M20 = 1:1.5:3, M25 = 1:1:2. RGPV asks these in 2-mark short questions and awards a mark per correct ratio. Remember ratios are cement : sand : coarse aggregate by volume.",
            },
            keyTerms: [
              { term: "Concrete grade", definition: "Designation M followed by the 28-day cube compressive strength in N per mm^2; e.g. M25 = 25 MPa." },
              { term: "Nominal mix", definition: "Volumetric mix proportions specified for ordinary concrete up to M20; e.g. M20 = 1:1.5:3." },
              { term: "Design mix", definition: "Weight proportions computed by IS 10262 using w/c ratio, workability and exposure; required for M25 and above." },
            ],
            examQuestions: [
              {
                q: "List the ingredients of concrete. State the meaning of the concrete grade designation M10 to M40 per IS 456, give the nominal mix ratios for M10, M15, M20 and M25, and explain where each grade is used in civil engineering.",
                marks: 7,
                outline: [
                  "Ingredients: cement, fine aggregate, coarse aggregate, water, optional admixtures.",
                  "Admixtures: plasticisers, accelerators, retarders, air-entraining agents, pozzolanas.",
                  "Grade M followed by 28-day cube strength in MPa; M10 to M40 per IS 456.",
                  "M10 = 1:3:6, M15 = 1:2:4, M20 = 1:1.5:3, M25 = 1:1:2 (cement : sand : coarse aggregate).",
                  "M10-M15: mass and non-structural; M20: foundations; M25: RCC slabs and beams.",
                  "M30: RCC columns; M35: bridge piers; M40 and above: prestressed girders.",
                  "Nominal mixes up to M20; design mixes for M25 and above per IS 10262.",
                  "Conclude: IS 456 specifies minimum cement content and maximum w/c for each exposure.",
                ],
              },
              {
                q: "State the nominal mix proportions of M15 and M20 concrete.",
                marks: 2,
              },
              {
                q: "State the meaning of the grade designations M10, M20 and M25.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Workability and slump test",
            body: [
              "Workability is the property of concrete that determines the ease with which it can be mixed, transported, placed, compacted and finished without segregation. The factors affecting workability are the water-cement ratio (higher w/c means higher workability but lower strength), aggregate shape and grading (rounded and well-graded aggregate improves workability), the ratio of fine to coarse aggregate (more fines need more water), admixtures (plasticisers increase workability without added water), and the time and temperature of mixing (workability drops with time and with temperature). Workability that is too low gives a stiff mix that is hard to compact and leaves voids; workability that is too high causes segregation of paste and aggregate and gives low strength.",
              "The slump cone test is the standard workability measure per IS 1199. The cone is 300 mm tall with a top diameter of 100 mm and a bottom diameter of 200 mm. The cone is filled in three equal layers, each tamped 25 times with a 16 mm tamping rod. The cone is lifted vertically and the subsidence of the concrete is measured to the nearest 5 mm. Three slump shapes are recognised: a true slump where the concrete subsides uniformly (50 to 100 mm for normal RCC); a shear slump where one half shears down (indicates a poor mix); and a collapse slump where the concrete flows out (too wet for structural use).",
              "Slump ranges: 25 to 75 mm for mass concrete with little reinforcement, 50 to 100 mm for lightly reinforced RCC, 75 to 125 mm for heavily reinforced RCC, and 125 to 200 mm for pumpable concrete with super-plasticisers. A shear slump calls for redesigning the mix - increasing the fine aggregate or adding a plasticiser - and re-testing. Other workability measures are the compacting factor test (more precise, gives 0.7 to 0.95), the Vee-Bee consistometer (for stiff mixes) and the flow test (for self-compacting concrete). Adequate workability allows full compaction by vibration; under-compaction leaves voids that cut strength drastically, since 5 per cent voids can cost 30 per cent of strength.",
            ],
            bullets: [
              "Workability: ease of mixing, placing, compacting, finishing without segregation.",
              "Factors: w/c ratio, aggregate shape and grading, fine/coarse ratio, admixtures, temperature.",
              "Slump cone: 300 mm tall, 100/200 mm diameter; filled in 3 layers, 25 tamps each.",
              "Slump types: true (normal), shear (poor mix), collapse (too wet).",
              "Other tests: compacting factor, Vee-Bee consistometer, flow test.",
            ],
            codeExample: {
              language: "python",
              caption: "Interpreting slump test results per IS 1199.",
              code: `# Slump test interpretation per IS 1199
def classify_slump(slump_mm, shape):
    if shape == "collapse":
        return "reject - too wet, redesign mix"
    if shape == "shear":
        return "redesign mix, re-test"
    if shape != "true":
        return "invalid test"
    if slump_mm < 25:
        return "too stiff - add water or plasticiser"
    if slump_mm <= 75:
        return "mass concrete / light reinforcement"
    if slump_mm <= 100:
        return "lightly reinforced RCC"
    if slump_mm <= 125:
        return "heavily reinforced RCC"
    return "pumpable concrete (super-plasticiser)"

slumps = [
    (60,  "true"),
    (90,  "true"),
    (180, "true"),
    (40,  "shear"),
]
for s, shape in slumps:
    print(f"slump {s:3} mm, {shape:6} -> {classify_slump(s, shape)}")
`,
            },
            diagram: {
              kind: "flow",
              title: "Slump test procedure from filling to measurement",
              caption:
                "Five steps in sequence; the test takes 2 to 3 minutes on site.",
              steps: [
                { label: "Dampen cone, place on flat surface", note: "frustum 300 mm tall, 100/200 mm" },
                { label: "Fill in 3 equal layers", note: "tamp each 25 times with 16 mm rod" },
                { label: "Strike off top, clean base", note: "no spillage around cone" },
                { label: "Lift cone vertically", note: "slow, 5 seconds, no lateral twist" },
                { label: "Measure subsidence", note: "to nearest 5 mm; note slump shape" },
              ],
            },
            callout: {
              type: "warning",
              title: "Shear slump means redesign",
              body: "A shear slump is not a workable mix; it indicates poor grading or insufficient fines. RGPV deducts a mark for accepting a shear slump as a workable value. The correct response is to redesign the mix (increase fine aggregate or add plasticiser) and re-test, not to record the measured number.",
            },
            keyTerms: [
              { term: "Workability", definition: "The ease with which concrete can be mixed, transported, placed, compacted and finished without segregation." },
              { term: "Slump test", definition: "A workability test using a 300 mm frustum cone, filled in 3 layers and lifted; the subsidence in mm is the slump." },
              { term: "Slump", definition: "The vertical subsidence of a concrete cone after lifting the mould; measured to the nearest 5 mm per IS 1199." },
            ],
            examQuestions: [
              {
                q: "Define workability. State the factors affecting it, describe the slump cone test per IS 1199, and give the slump ranges for mass, lightly reinforced and heavily reinforced concrete.",
                marks: 7,
                outline: [
                  "Define workability: ease of mixing, placing, compacting and finishing without segregation.",
                  "Factors: water-cement ratio, aggregate shape and grading, fine/coarse ratio, admixtures, time and temperature.",
                  "Slump cone: 300 mm tall, top 100 mm, bottom 200 mm; fill in 3 equal layers, 25 tamps each.",
                  "Lift cone vertically; measure subsidence to nearest 5 mm; note slump shape.",
                  "Three slump shapes: true (normal), shear (poor mix - redesign), collapse (too wet).",
                  "Ranges: 25-75 mm mass, 50-100 mm light RCC, 75-125 mm heavy RCC, 125-200 mm pumpable.",
                  "Other tests: compacting factor (0.7-0.95), Vee-Bee consistometer, flow test.",
                  "Conclude: 5 per cent voids from under-compaction can cost 30 per cent of strength.",
                ],
              },
              {
                q: "State the slump cone dimensions and the meaning of a true slump.",
                marks: 2,
              },
              {
                q: "State the slump ranges for mass concrete, lightly reinforced RCC and heavily reinforced RCC.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Mix design basics and water-cement ratio",
            body: [
              "Mix design selects the proportions of cement, water, fine and coarse aggregate to give concrete of specified strength, workability, durability and economy. The IS 10262 procedure has six steps: compute the target mean strength from the characteristic strength plus 1.65 times the standard deviation; choose the water-cement ratio from the strength vs w/c curve in IS 456, with a check against the maximum w/c for the exposure; estimate the water content for the required workability (about 186 kg per m^3 for 50 mm slump with angular aggregate); compute the cement content from water and w/c; choose the total aggregate and the fine-to-coarse ratio from the grading; trial mixes verify and adjust.",
              "The water-cement ratio is the single most important factor controlling concrete strength. Abrams' law states that compressive strength is inversely related to w/c raised to a power: sigma = A divided by B to the w/c, where A and B are constants depending on cement and curing. Typical w/c for structural concrete is 0.40 to 0.60; below 0.38 there is not enough water for full hydration, above 0.60 the capillary voids reduce strength and durability. IS 456 imposes maximum w/c and minimum cement for each exposure: mild 0.55, moderate 0.50, severe 0.45, very severe 0.45, extreme 0.40. Plasticisers lower the w/c while preserving workability.",
              "Mix proportions follow the absolute volume method: the sum of the volumes of cement, water, fine and coarse aggregate, plus 2 per cent entrapped air, equals one cubic metre of concrete. The free water-cement ratio accounts for aggregate absorption: SSD aggregates need no correction, wet aggregates contribute free water, and dry aggregates absorb water. The trial mix is tested for slump and 28-day cube strength, and adjustments are made to the water, sand or both to reach the target. Mix design is an iterative process: the first trial rarely satisfies both strength and workability, and two or three trial mixes are normal before the design is approved for site.",
            ],
            bullets: [
              "IS 10262 six steps: target strength, w/c, water, cement, aggregate ratio, trial.",
              "Target mean strength = characteristic + 1.65 x standard deviation.",
              "Abrams' law: strength inversely related to w/c raised to a power.",
              "Typical w/c 0.40-0.60; IS 456 max w/c by exposure: mild 0.55 to extreme 0.40.",
              "Trial mixes verify slump and 28-day cube strength; two or three iterations.",
            ],
            codeExample: {
              language: "python",
              caption: "Abrams' law estimate of concrete strength from water-cement ratio.",
              code: `# Abrams' law: strength = A / (B ** (w/c))
def abrams_strength(wc, A=42.0, B=8.5):
    return round(A / (B ** wc), 1)

ratios = [0.40, 0.45, 0.50, 0.55, 0.60]
print(f"{'w/c':>5} {'strength MPa':>14}")
for wc in ratios:
    s = abrams_strength(wc)
    if wc <= 0.45:
        note = "<- low w/c"
    elif wc == 0.55:
        note = "<- max mild"
    else:
        note = ""
    print(f"{wc:5.2f} {s:14.1f}  {note}")
`,
            },
            diagram: {
              kind: "cycle",
              title: "Mix design iteration: from target strength to approved mix",
              caption:
                "Each cycle tightens the design - two or three trials are normal before site approval.",
              steps: [
                { label: "Target mean strength", note: "characteristic + 1.65 sigma" },
                { label: "Choose w/c from curve", note: "check IS 456 max for exposure" },
                { label: "Estimate water and cement", note: "186 kg/m^3 for 50 mm slump" },
                { label: "Choose aggregate ratio", note: "fine:coarse by grading" },
                { label: "Trial mix and test", note: "slump + 28-day cube" },
                { label: "Adjust water, sand, repeat", note: "until target met" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the IS 456 maximum w/c",
              body: "Memorise five maximum w/c values: mild 0.55, moderate 0.50, severe 0.45, very severe 0.45, extreme 0.40. RGPV asks these in 2-mark short questions and awards a mark per correctly quoted value. The exposure-w/c table also gives minimum cement content per exposure.",
            },
            keyTerms: [
              { term: "Mix design", definition: "The process of selecting proportions of cement, water and aggregate to meet strength, workability, durability and economy, per IS 10262." },
              { term: "Water-cement ratio", definition: "The ratio of the mass of mixing water to the mass of cement in a concrete mix; the dominant strength control." },
              { term: "Abrams' law", definition: "The empirical inverse relation between compressive strength and water-cement ratio: sigma = A / B^(w/c)." },
            ],
            examQuestions: [
              {
                q: "Define mix design. State the IS 10262 procedure, the meaning of target mean strength, and Abrams' law. Give the maximum water-cement ratios per IS 456 for the five exposure conditions and explain the role of trial mixes.",
                marks: 7,
                outline: [
                  "Define mix design: proportions of cement, water and aggregate to meet strength, workability, durability.",
                  "IS 10262 steps: target mean strength, w/c from curve, water content, cement content, aggregate ratio, trial.",
                  "Target mean strength = characteristic strength + 1.65 x standard deviation.",
                  "Abrams' law: sigma = A / B^(w/c); strength inversely related to w/c.",
                  "Typical w/c 0.40-0.60; below 0.38 insufficient water; above 0.60 too many voids.",
                  "IS 456 max w/c: mild 0.55, moderate 0.50, severe 0.45, very severe 0.45, extreme 0.40.",
                  "Trial mixes verify slump and 28-day cube strength; adjust water and sand.",
                  "Conclude: two or three trial mixes are normal before site approval.",
                ],
              },
              {
                q: "State Abrams' law and the meaning of water-cement ratio.",
                marks: 2,
              },
              {
                q: "State the maximum water-cement ratio per IS 456 for mild, moderate and severe exposure.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Mixing, placing and curing of concrete",
            body: [
              "Mixing of concrete is either by hand or by machine. Hand mixing is performed on a watertight platform with 10 per cent extra cement to compensate for inefficiency; sand and cement are dry-mixed first, then coarse aggregate is added, and water is sprinkled while turning the mix at least three times. Hand mixing suits small jobs and is limited to non-structural concrete. Machine mixing uses a tilting or non-tilting drum of 200 litre or larger capacity. Materials are charged in the order coarse aggregate, cement, fine aggregate, then water; mixing time after charging is 1.5 to 2 minutes; uniform colour and texture indicate completion. Under-mixing leaves dry patches; over-mixing entrains air and breaks aggregate.",
              "Placing transports mixed concrete to its final position before the initial set, typically within 30 to 60 minutes of water contact. Concrete is transported by wheelbarrows, chutes, buckets, skips or pumps; pipelines for pumping can deliver over horizontal and vertical distances. The concrete is deposited in horizontal layers 15 to 30 cm thick, with each layer compacted before the next is placed. Compaction by vibration drives out entrapped air: needle vibrators (50 to 100 mm diameter) suit reinforced walls and columns; surface vibrators suit slabs; form vibrators suit precast elements. Concrete is not dropped from a height greater than one metre, and the vibrator is not used to move concrete horizontally, since both cause segregation.",
              "Curing keeps concrete moist so that hydration can continue. Methods include water ponding on flat surfaces, wet jute or hessian bags, intermittent sprinkling, membrane curing with a sealing compound that prevents evaporation, and steam curing for precast elements to accelerate strength gain. Per IS 456 the curing period for OPC concrete is at least 7 days for mild exposure and 14 days for moderate or severe; PPC and PSC benefit from extended curing of 14 to 21 days because their pozzolanic or slag reactions are slower. Incomplete curing loses 30 to 50 per cent of the potential 28-day strength and reduces durability by leaving capillary voids. Temperature matters: in cold weather concrete is protected from freezing, in hot weather it is cured with chilled water and shaded from direct sun.",
            ],
            bullets: [
              "Hand mixing: watertight platform, 10 per cent extra cement; small jobs only.",
              "Machine mixing: drum 200 L+, charge C-Ag, cement, F-Ag, water; mix 1.5-2 min.",
              "Placing: layers 15-30 cm thick, vibrate; don't drop > 1 m or move with vibrator.",
              "Curing: water ponding, wet bags, sprinkling, membrane, steam; 7-14 days per IS 456.",
              "Incomplete curing loses 30-50 per cent of strength and durability.",
            ],
            table: {
              caption: "Curing methods, period and best use per IS 456.",
              headers: ["Method", "Best for", "Period"],
              rows: [
                ["Water ponding", "Flat slabs, floors", "7-14 days"],
                ["Wet jute bags", "Columns, beams, walls", "7-14 days"],
                ["Sprinkling", "Slabs, pavements", "7-14 days"],
                ["Membrane curing", "Large areas, vertical", "Forms a seal"],
                ["Steam curing", "Precast elements", "12-24 hours accelerated"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From mixing to cured concrete in five stages",
              caption:
                "Each stage conditions the next; a fault in curing cannot be repaired later.",
              stages: [
                { label: "Mixing", note: "hand or machine, 1.5-2 min" },
                { label: "Transporting", note: "wheelbarrow, chute, pump; < 60 min" },
                { label: "Placing", note: "layers 15-30 cm thick" },
                { label: "Compacting", note: "needle or surface vibrator" },
                { label: "Curing", note: "water ponding or membrane, 7-14 days" },
              ],
            },
            callout: {
              type: "warning",
              title: "Curing time is non-negotiable",
              body: "Concrete stripped of formwork and left to dry after one or two days will lose 30 to 50 per cent of its potential strength. RGPV deducts a mark for any answer that suggests curing of less than 7 days for OPC under mild exposure. State IS 456: 7 days mild, 14 days moderate or severe; longer for PPC and PSC.",
            },
            keyTerms: [
              { term: "Compaction", definition: "The process of driving entrapped air out of fresh concrete by vibration, giving dense and strong concrete." },
              { term: "Curing", definition: "Keeping concrete moist so that cement hydration can continue; per IS 456, at least 7 days for OPC in mild exposure." },
              { term: "Segregation", definition: "The separation of coarse aggregate from the paste in wet concrete, caused by dropping from height or vibrating to move concrete." },
            ],
            examQuestions: [
              {
                q: "Describe the mixing, placing and curing of concrete. State the IS 456 curing periods for OPC, PPC and PSC, and explain the consequences of incomplete curing on strength and durability.",
                marks: 7,
                outline: [
                  "Mixing: hand on watertight platform with 10 per cent extra cement; machine in drum 200 L or larger.",
                  "Charging order: coarse aggregate, cement, fine aggregate, water; mix 1.5-2 min.",
                  "Placing: layers 15-30 cm thick; vibrate each layer; do not drop from > 1 m or move with vibrator.",
                  "Compaction: needle vibrators for RCC walls and columns; surface vibrators for slabs.",
                  "Curing: water ponding, wet bags, sprinkling, membrane, steam for precast.",
                  "IS 456: 7 days mild exposure, 14 days moderate or severe for OPC; 14-21 days for PPC and PSC.",
                  "Incomplete curing loses 30-50 per cent of strength and leaves capillary voids reducing durability.",
                  "Conclude: cold weather protects from freezing; hot weather uses chilled water and shade.",
                ],
              },
              {
                q: "State the IS 456 minimum curing period for OPC under mild and severe exposure.",
                marks: 2,
              },
              {
                q: "State any three methods of curing concrete and the surface each suits.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Mortar: types and uses",
            body: [
              "Mortar is a workable paste of a binding material, fine aggregate (sand) and water, used to bind masonry units (bricks, stones, blocks), to plaster walls, to point joints, and to fill gaps. Cement mortar is a mixture of cement and sand in ratios from 1:3 to 1:10 by volume depending on the strength required; lime mortar is a mixture of lime and sand; lime-cement or compo mortar combines lime, cement and sand; mud mortar is clay and sand for low-cost temporary work. The selection of mortar depends on the structural demand, the exposure, the masonry unit, and the cost and availability of materials.",
              "Cement mortar uses are graded by ratio. A 1:3 mortar is used for high-strength pointing and plastering and for thin bearing walls; 1:4 for general masonry and plastering; 1:6 for ordinary brickwork; 1:8 for foundation mass concrete and inferior masonry. Lime mortar sets slowly by carbonation, gains strength over months, and is more flexible than cement mortar, making it suitable for restoration of old buildings and for substrates that may move. Surkhi mortar adds crushed burnt clay (surkhi) to lime to provide pozzolanic action, gaining hydraulic strength. Mud mortar is used for temporary and rural housing and is stabilised with 5 per cent cement or lime for durability.",
              "Mortar tests verify strength and workability. The tensile strength test uses briquette specimens of 1:6 mortar cured for 28 days, expecting 1.25 N per mm^2 for ordinary work; the compressive strength test uses 70.6 mm cubes. The adhesion test measures the bond between mortar and masonry unit. Workability is measured by the flow table test, with a flow of 80 to 110 per cent for brickwork. Lime mortar needs grinding in a mortar mill to develop plasticity. Selection for modern load-bearing work is cement mortar; for restoration and elastic substrates, lime mortar; for temporary and rural work, mud or stabilised mud mortar.",
            ],
            bullets: [
              "Cement mortar: 1:3 high-strength to 1:8 foundation; lime mortar: lime + sand.",
              "Lime-cement (compo) mortar: lime + cement + sand; mud mortar: clay + sand.",
              "Cement 1:3 pointing/plaster; 1:6 brickwork; 1:8 foundation mass.",
              "Lime mortar sets by carbonation, gains strength over months, flexible for old buildings.",
              "Tests: tensile briquette 1.25 MPa, 70.6 mm cube compression, flow table 80-110 per cent.",
            ],
            table: {
              caption: "Mortar types, mix proportions and uses.",
              headers: ["Mortar", "Mix", "Strength (MPa)", "Use"],
              rows: [
                ["Cement", "1:3", "10-15", "Pointing, thin walls"],
                ["Cement", "1:4", "7-10", "General masonry"],
                ["Cement", "1:6", "3-5", "Brickwork"],
                ["Cement", "1:8", "1.5-3", "Foundation mass"],
                ["Lime", "1:2 (lime:sand)", "0.5-1", "Old buildings"],
                ["Compo", "1:1:6 (lime:cement:sand)", "3-5", "Restoration, RCC plaster"],
                ["Mud", "1:2 (clay:sand)", "0.3-0.5", "Rural temporary"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Cement mortar vs lime mortar",
              caption:
                "Different binding chemistry gives different setting, strength and elasticity.",
              left: {
                heading: "Cement mortar",
                items: [
                  "Sets by hydration of cement",
                  "Fast initial set, 28-day strength",
                  "Strong but brittle",
                  "Best for modern load-bearing work",
                  "Less elastic, more shrinkage cracks",
                ],
              },
              right: {
                heading: "Lime mortar",
                items: [
                  "Sets by carbonation of lime",
                  "Slow set, strength over months",
                  "Weaker but elastic",
                  "Best for restoration of old buildings",
                  "Self-healing, accommodates movement",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Match mortar to masonry",
              body: "A strong cement mortar with weak bricks cracks at the brick, not at the joint. Match mortar strength roughly to masonry strength: 1:6 cement for ordinary bricks, 1:3 for engineering bricks, lime mortar for soft historic bricks. RGPV asks the mortar-masonry pairing in 3-mark short questions.",
            },
            keyTerms: [
              { term: "Cement mortar", definition: "A mixture of cement and sand in ratios 1:3 to 1:10 by volume, used for masonry, plastering and pointing." },
              { term: "Lime mortar", definition: "A mixture of lime and sand that sets by carbonation; slow, elastic, suitable for restoration." },
              { term: "Compo mortar", definition: "Lime-cement mortar combining lime, cement and sand; balances strength and elasticity." },
            ],
            examQuestions: [
              {
                q: "Define mortar. Classify mortar into cement, lime, lime-cement and mud mortars. State the mix proportions and uses of cement mortar and the advantages of lime mortar over cement mortar for old buildings.",
                marks: 7,
                outline: [
                  "Define mortar as a workable paste of binder, fine aggregate and water.",
                  "Cement mortar: cement + sand, ratios 1:3 to 1:10; lime mortar: lime + sand.",
                  "Lime-cement (compo): lime + cement + sand; mud mortar: clay + sand, low-cost.",
                  "Cement mortar uses: 1:3 pointing/plaster; 1:4 general; 1:6 brickwork; 1:8 foundation mass.",
                  "Lime mortar sets by carbonation, gains strength over months, is elastic and self-healing.",
                  "Advantages of lime mortar for old buildings: flexibility, accommodates movement, compatible.",
                  "Surkhi mortar adds crushed burnt clay to lime for pozzolanic hydraulic strength.",
                  "Conclude: selection by structural demand, exposure, masonry unit and availability.",
                ],
              },
              {
                q: "State the cement mortar mix proportions for pointing and for ordinary brickwork.",
                marks: 2,
              },
              {
                q: "State three advantages of lime mortar over cement mortar for restoration of old buildings.",
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
        "RGPV CE-302 papers typically spread 60 to 70 of the marks across cement (Bogue compounds, manufacturing and setting), concrete (grades, mix design and water-cement ratio), and aggregates (classification, sieve analysis and tests). Stones, bricks and mortar supply the definitional short questions and the occasional 7-mark question. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Cement: Bogue compounds, dry/wet manufacturing, setting and hardening", weight: "12-14 marks", note: "Almost guaranteed; practise one full Bogue derivation and the role of gypsum." },
        { topic: "Concrete: grades M10-M40, mix design IS 10262, water-cement ratio", weight: "10-12 marks", note: "Quote nominal mixes verbatim; show every IS 10262 step in the design." },
        { topic: "Aggregates: classification, sieve analysis, grading zones, fineness modulus", weight: "8-10 marks", note: "Compute FM from cumulative percentages; quote IS 383 zones." },
        { topic: "Bricks: classification, manufacturing, IS 1077 tests, efflorescence", weight: "8-10 marks", note: "Class-IV brick classification and IS 1077 limits are the most asked shorts." },
        { topic: "Stones: classification, geological, quarrying, dressing, tests", weight: "6-8 marks", note: "Three classifications together; quote crushing strength of three stones." },
        { topic: "Cement tests: Vicat, Le Chatelier, compressive strength, fineness", weight: "6-8 marks", note: "Pair apparatus with test; quote IS 269/8112/12269/1489 codes." },
        { topic: "Concrete: workability slump, mixing, placing, curing", weight: "6-8 marks", note: "Slump cone dimensions and IS 456 curing periods are asked verbatim." },
        { topic: "Aggregate tests: crushing, impact, LA abrasion, soundness, flakiness", weight: "5-7 marks", note: "Quote four acceptance limits; the apparatus names earn method marks." },
        { topic: "Special bricks and special cements (PPC, PSC, SRC, fly-ash)", weight: "4-6 marks", note: "Compound-cement pairings; fly-ash advantages over clay." },
        { topic: "Mortar: types, mixes, uses", weight: "4-6 marks", note: "Cement mortar ratios 1:3 to 1:8; lime mortar advantages for old buildings." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - stones", tasks: ["Three classifications and geological origin with examples", "Quarrying methods and dressing finishes", "IS 1121 stone tests and crushing strength values"] },
        { week: "Week 2", focus: "Unit II - bricks", tasks: ["Brick classification and the six-stage manufacturing process", "IS 1077 tests: compressive strength, water absorption, efflorescence", "Defects, prevention, and special bricks (fire, fly-ash, engineering)"] },
        { week: "Week 3", focus: "Unit III part A - cement", tasks: ["Oxide composition, raw materials, LSF and moduli", "Dry and wet process; rotary kiln and burning zones", "Bogue compounds C3S, C2S, C3A, C4AF with roles and ranges"] },
        { week: "Week 4", focus: "Unit III part B + Unit IV part A", tasks: ["Setting vs hardening; hydration chemistry and role of gypsum", "OPC, PPC, PSC and special cements with IS codes", "Aggregate classification by source, size, shape, weight"] },
        { week: "Week 5", focus: "Unit IV part B + Unit V part A", tasks: ["Aggregate properties, sieve analysis, FM and IS 383 zones", "Deleterious materials and IS 2386 limits; aggregate tests", "Concrete ingredients, grades M10-M40, nominal mix ratios"] },
        { week: "Week 6", focus: "Unit V part B + full revision", tasks: ["Workability slump test, mix design IS 10262, Abrams' law", "Mixing, placing, curing per IS 456; mortar types and uses", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day revision plan",
      bullets: [
        "Revise the Bogue compounds (C3S, C2S, C3A, C4AF) ranges and roles one more time - this is the most asked 7-mark question.",
        "Memorise the four nominal mix ratios M10, M15, M20, M25 and the IS 456 maximum w/c values for the five exposure conditions.",
        "Skim the cement, brick, aggregate and stone test limits and quote each verbatim - the marks are in the numbers, not in the description.",
        "Sketch each unit's diagram once on rough paper so it can be redrawn in the exam hall without hesitation.",
        "Rehearse the seven-mark outlines: opening definition, three laws or steps, working, conclusion - keep each outline to seven points.",
        "Sleep seven hours and reach the hall early; avoid last-minute discussions of doubtful points that shake confidence.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Quote IS code numbers verbatim - brick absorption 15 per cent, brick compression 7 MPa, ACV 30 per cent, LA abrasion 30 per cent, w/c limits 0.55 to 0.40 by exposure.",
        "Name the apparatus with the test - Vicat for setting time, Le Chatelier for soundness, slump cone for workability, Los Angeles drum for abrasion, pycnometer for specific gravity.",
        "Draw the diagram first, then write the theory around it; the picture earns method marks even if the prose slips.",
        "For mix design, label every step: target mean strength, w/c, water, cement, aggregate ratio, trial mix - missing a step costs a mark.",
        "Time-box: 2-mark questions in 3 minutes, 3-mark in 6 minutes, 7-mark in 15 minutes; keep 10 minutes at the end for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Listing gypsum as a raw material of cement - gypsum is added at grinding, not in the raw mix.",
        "Confusing setting with hardening - setting is loss of plasticity, hardening is strength gain.",
        "Accepting a shear slump as a workable value - shear slump means redesign the mix and re-test.",
        "Stating fineness modulus alone as 'grading' - FM is one number, grading is the full curve.",
        "Quoting cement strength in N per square millimetre without naming the cube size - always 150 mm cube at 28 days for concrete, 70.6 mm for mortar.",
        "Suggesting curing of less than 7 days for OPC under mild exposure - IS 456 mandates 7 days mild, 14 days severe, longer for PPC and PSC.",
      ],
    },
  ],
};
