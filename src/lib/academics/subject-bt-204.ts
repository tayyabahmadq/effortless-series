/**
 * Academics - RGPV First-Year Common subject: BT-204 Basic Civil Engineering.
 *
 * Five units cover the civil engineering syllabus for all B.Tech branches:
 * materials (Unit I), building construction (Unit II), surveying (Unit III),
 * transportation and water infrastructure (Unit IV), and estimation, safety
 * and disaster management (Unit V). Every section pairs the theory with a
 * worked example, a redrawable diagram, a table, and three exam-style
 * questions (one 7-mark with outline plus two short questions).
 */

import type { AcademicSubject } from "./types";

export const bt204: AcademicSubject = {
  id: "bt-204",
  code: "BT-204",
  title: "Basic Civil Engineering",
  semester: "II Semester",
  program: "RGPV · First Year Common (all B.Tech branches)",
  tagline:
    "The complete visual guide to BT-204 Basic Civil Engineering: civil materials from bricks to AAC, building construction from foundations to roofs, surveying from chain to total station, transportation and water infrastructure from roads to sewerage, and estimation, safety and disaster management for smart cities.",
  description:
    "Five units span the first-year civil engineering syllabus. Unit I covers the scope of civil engineering and the construction materials - bricks, cement, aggregates and concrete, steel, timber and modern materials. Unit II assembles a building from foundation to roof with planning and byelaws. Unit III walks surveying from classification through chain, compass, levelling and the theodolite or total station. Unit IV moves people and water across roads, railways, bridges, dams, canals, water supply and sewerage. Unit V closes with estimation, quantity takeoff, specifications, construction safety, environmental impact and disaster management with smart-city concepts.",
  accentColor: "#4ade80",
  emoji: "CE",
  unitCount: 5,
  totalSections: 25,
  units: [
    // =================================================================
    // UNIT I - CIVIL ENGINEERING AND CONSTRUCTION MATERIALS
    // =================================================================
    {
      number: 1,
      roman: "I",
      title: "Civil Engineering and Construction Materials",
      summary:
        "Unit I introduces the discipline and the materials that build every structure. The scope of civil engineering and its sub-disciplines frame the field; bricks are classified and tested; cement is characterised by type and physical-chemical test; aggregates and concrete are mixed by grade and slump; steel, timber and modern materials such as fly-ash bricks and AAC blocks close the unit.",
      chapter: {
        number: "01",
        title: "Civil Engineering and Construction Materials",
        intro:
          "Unit I opens with the scope of civil engineering and its principal sub-disciplines. It then walks the materials that build a structure: bricks (classification and tests), cement (types and tests), aggregates and concrete (mix and grades), and finally steel, timber and modern materials such as fly-ash bricks, AAC blocks, ferro-cement and fibre-reinforced concrete.",
        sections: [
          // --- 1.1 ---
          {
            number: "1.1",
            title: "Scope of civil engineering and sub-disciplines",
            body: [
              "Civil engineering is the oldest branch of engineering after military engineering, and it deals with the design, construction and maintenance of the physical and naturally built environment. Its works range from a single-room house to a smart city, from a farm pond to a multipurpose dam, from a footpath to an expressway, and from a tube well to a metropolitan water-supply grid. The word civil distinguishes it from the engineering of armies and weapons, and the discipline underpins every other branch by providing factories, laboratories, workshops, hostels and housing for the people who work in them.",
              "The discipline splits into well-defined sub-disciplines, each a profession in its own right. Structural engineering designs the load-carrying skeleton of buildings, bridges and towers; geotechnical engineering studies soil and foundation behaviour; transportation engineering builds roads, railways and airports; water-resources engineering plans irrigation, dams and flood control; environmental engineering handles water supply, sewerage and pollution control; surveying maps the land before and during construction; and construction management handles time, cost and quality. Each sub-discipline contributes a distinct skill set to the project team.",
              "The civil engineer's role runs across a project's whole life. Feasibility studies and surveys open the work; detailed design and estimation follow; tendering and procurement follow; site execution with quality control occupies the bulk of the time; and operation, maintenance and rehabilitation close the loop. Smart-city concepts now extend the role into digital twins, building-information modelling and sensor-based asset management. A first-year student should see civil engineering as the discipline that physically realises every other branch of engineering.",
            ],
            bullets: [
              "Civil engineering designs and maintains the built environment; oldest branch after military engineering.",
              "Sub-disciplines: structural, geotechnical, transportation, water resources, environmental, surveying, construction management.",
              "Project stages: feasibility, survey, design, estimation, tendering, execution, maintenance.",
              "Smart-city concepts extend the role into digital twins, BIM and sensor-based asset management.",
              "Scope spans from a single-room house to a metropolitan water-supply grid.",
            ],
            table: {
              caption: "Civil engineering sub-disciplines and their primary outputs.",
              headers: ["Sub-discipline", "Focus", "Typical output"],
              rows: [
                ["Structural", "load-carrying skeleton", "buildings, bridges, towers"],
                ["Geotechnical", "soil and foundations", "footings, piles, embankments"],
                ["Transportation", "movement of people and goods", "roads, railways, airports"],
                ["Water resources", "water control and supply", "dams, canals, pipelines"],
                ["Environmental", "water, sewerage, pollution", "treatment plants, landfills"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a civil project flows from concept to handover",
              caption:
                "Seven stages that recur in every civil work, from a house to a highway.",
              steps: [
                { label: "Feasibility and survey", note: "site reconnaissance, soil, topography" },
                { label: "Design", note: "structural, geotechnical, hydraulic" },
                { label: "Estimation and tendering", note: "quantity, cost, contract" },
                { label: "Execution", note: "site work, quality control" },
                { label: "Inspection and handover", note: "tests, snag lists, occupancy" },
                { label: "Maintenance", note: "repairs, rehabilitation, asset mgmt" },
              ],
            },
            callout: {
              type: "tip",
              title: "Map your interest early",
              body: "RGPV second-year electives let you pick a sub-discipline track. Use first-year Unit I to taste each one through the worked examples: if you enjoyed the bearing calculation, lean toward surveying; if the brick test appealed, materials and structures; if the byelaw section clicked, construction management.",
            },
            keyTerms: [
              { term: "Civil engineering", definition: "The branch of engineering dealing with design, construction and maintenance of the physical and naturally built environment." },
              { term: "Sub-discipline", definition: "A specialised area within civil engineering such as structural, geotechnical or transportation engineering." },
              { term: "Construction management", definition: "The sub-discipline that plans, coordinates and controls a project's time, cost and quality." },
            ],
            examQuestions: [
              {
                q: "Define civil engineering. Describe its principal sub-disciplines with one example output each, and explain the stages of a civil project from feasibility to maintenance.",
                marks: 7,
                outline: [
                  "Define civil engineering as the branch dealing with the built environment.",
                  "List sub-disciplines: structural, geotechnical, transportation, water resources, environmental, surveying, construction management.",
                  "Give one output per sub-discipline: building, footing, road, dam, treatment plant.",
                  "State the project stages: feasibility, survey, design, estimation, tendering, execution, maintenance.",
                  "Explain feasibility as site reconnaissance and soil/topography study.",
                  "Explain execution as site work with quality control and inspection.",
                  "Close with maintenance and rehabilitation as the long tail of the project.",
                ],
              },
              {
                q: "Name any four sub-disciplines of civil engineering.",
                marks: 2,
              },
              {
                q: "List the stages of a civil project from feasibility to handover.",
                marks: 3,
              },
            ],
          },
          // --- 1.2 ---
          {
            number: "1.2",
            title: "Bricks - classification and tests",
            body: [
              "A brick is the smallest rectangular building unit, traditionally made from burnt clay and sized about 190 mm x 90 mm x 90 mm, the nominal modular brick of IS 1077. Bricks are the staple wall material across India because they are cheap, durable, fire-resistant and easy to lay without heavy equipment. Field classification by quality follows IS 1077: first-class bricks are well-burnt, deep red, uniform in shape and ring when struck; second-class are slightly over- or under-burnt with irregular edges; third-class are under-burnt and soft; fourth-class are over-burnt and brittle; and overburnt jhama bricks are dark, vitreous and used as aggregate or in road foundations.",
              "Field tests judge a brick by sight and feel without instruments. Visual inspection checks colour uniformity, rectangular shape and sharpness of edges and corners; size is verified by measuring several bricks against the standard. A first-class brick dropped flat from about a metre should not break; struck lightly with a hammer or another brick it gives a clear ringing sound; its surface should resist a fingernail scratch (hardness); a freshly broken face should show a uniform, compact and non-porous structure; and a brick soaked for 24 hours should not show white salt deposits (efflorescence) on drying.",
              "Laboratory tests quantify strength and durability. The compressive strength test places a brick immersed in water for 24 hours between plywood sheets and loads it to failure in a compression testing machine; the load divided by the bearing area gives the strength, which should be at least 3.5 MPa for first-class bricks. The water absorption test weighs a dry brick, soaks it for 24 hours and reweighs; the gain should be below 20 percent of the dry weight. The efflorescence test observes the salt deposit after soaking and drying: nil to slight is acceptable, moderate to heavy is rejected.",
            ],
            bullets: [
              "Standard modular brick: 190 x 90 x 90 mm (IS 1077); rectangular, burnt-clay wall unit.",
              "Classes: first (well-burnt, rings), second (slightly irregular), third (under-burnt), fourth (over-burnt), jhama (vitreous, for aggregate).",
              "Field tests: colour, size, shape, ring (sound), hardness, structure, impact drop test.",
              "Compressive strength: load to failure divided by area; first-class >= 3.5 MPa.",
              "Water absorption: 24-hour soak weight gain < 20% of dry weight; efflorescence nil to slight.",
            ],
            table: {
              caption: "Brick field and laboratory tests with acceptance limits.",
              headers: ["Test", "Type", "Acceptance for first class"],
              rows: [
                ["Visual colour and shape", "Field", "uniform deep red, sharp edges"],
                ["Ring / sound test", "Field", "clear metallic ring on strike"],
                ["Compressive strength", "Lab", ">= 3.5 MPa"],
                ["Water absorption (24 h)", "Lab", "< 20% of dry weight"],
                ["Efflorescence", "Lab", "nil to slight"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Brick quality classes from first-class to jhama",
              caption:
                "Top layer is best quality; downward layers fall in burn and use-grade.",
              layers: [
                { label: "First class", note: "well-burnt, rings, exposed work" },
                { label: "Second class", note: "slightly irregular, plastered work" },
                { label: "Third class", note: "under-burnt, temporary work" },
                { label: "Fourth class", note: "over-burnt, brittle, sun-dried" },
                { label: "Jhama (overburnt)", note: "vitreous, used as aggregate" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam-ready brick test list",
              body: "RGPV repeatedly asks 'state the field and laboratory tests on bricks'. Memorise the five field tests (colour, sound, hardness, impact, structure) and the three lab tests (compressive strength, water absorption, efflorescence) with their acceptance values - first-class strength >= 3.5 MPa and water absorption < 20%.",
            },
            keyTerms: [
              { term: "First-class brick", definition: "A well-burnt, deep red, rectangular brick with sharp edges and a ringing sound, suitable for exposed quality work." },
              { term: "Compressive strength of brick", definition: "The crushing load at failure divided by the bearing area, expressed in MPa; at least 3.5 MPa for first class." },
              { term: "Efflorescence", definition: "The white salt deposit that appears on a brick surface after soaking and drying, indicating soluble salts in the clay." },
            ],
            examQuestions: [
              {
                q: "Classify bricks according to IS 1077. Describe the field and laboratory tests conducted on bricks, giving the acceptance criteria for first-class bricks.",
                marks: 7,
                outline: [
                  "State IS 1077 classification: first, second, third, fourth class and jhama.",
                  "Describe first-class brick: well-burnt, deep red, sharp edges, rings on strike.",
                  "List field tests: colour, shape, sound, hardness, impact, structure, efflorescence.",
                  "Describe compressive strength test setup: soaked brick, plywood, load to failure.",
                  "State acceptance: compressive strength >= 3.5 MPa for first class.",
                  "Describe water absorption test: dry, soak 24 h, reweigh; gain < 20%.",
                  "State efflorescence test result: nil to slight is acceptable; heavy is rejected.",
                ],
              },
              {
                q: "What is a jhama brick and where is it used?",
                marks: 2,
              },
              {
                q: "State the field tests carried out on bricks.",
                marks: 3,
              },
            ],
          },
          // --- 1.3 ---
          {
            number: "1.3",
            title: "Cement - types and tests",
            body: [
              "Cement is the hydraulic binding material that, when mixed with water, sets and hardens by chemical reaction and binds sand and aggregate into concrete. The most common is ordinary Portland cement (OPC), patented by Aspdin in 1824, made by calcining a mixture of limestone and clay at about 1500 deg C to form clinker, which is then ground with 2 to 3 percent gypsum. The chief oxides are lime (CaO, 60 to 67%), silica (SiO2, 17 to 25%), alumina (Al2O3, 3 to 8%), iron oxide (Fe2O3, 0.5 to 6%) and a little magnesia and sulphur trioxide; gypsum controls the setting time.",
              "IS 269 and IS 1489 recognise several types for different uses. OPC comes in three grades - 33, 43 and 53 - the number being the 28-day compressive strength in MPa of a standard mortar cube. Portland pozzolana cement (PPC) blends fly ash with OPC for hydraulic structures and mass concrete. Portland slag cement (PSC) uses blast-furnace slag for marine works. Rapid-hardening cement develops strength quickly for formwork removal; low-heat cement limits heat of hydration for dams; sulphate-resisting cement fights ground sulphates; white and coloured cements serve architectural finishes; and hydrophobic cement resists moisture in storage.",
              "Field and laboratory tests verify quality. Field tests are visual (uniform grey-green colour, free from lumps), tactile (cool and smooth when rubbed), and a float test (a cake of cement on water should float and submerge without disintegrating). Laboratory tests are physical: fineness by sieve 90 micron (residue < 10%) or by air permeability; soundness by Le Chatelier's apparatus or autoclave (expansion < 10 mm); consistency by Vicat (normal consistency 26 to 33%); initial setting time not less than 30 minutes and final not more than 600 minutes; and compressive strength of standard mortar cubes at 3, 7 and 28 days.",
            ],
            bullets: [
              "OPC clinker = limestone + clay calcined at 1500 deg C, ground with 2-3% gypsum; chief oxide lime 60-67%.",
              "OPC grades: 33, 43, 53 = 28-day mortar-cube strength in MPa (IS 269, IS 8112, IS 12269).",
              "Variants: PPC (fly ash), PSC (slag), rapid-hardening, low-heat, sulphate-resisting, white.",
              "Vicat test: initial setting time >= 30 min, final <= 600 min; normal consistency 26-33%.",
              "Soundness by Le Chatelier: expansion < 10 mm; fineness residue on 90 micron sieve < 10%.",
            ],
            table: {
              caption: "Common cement types and their typical use.",
              headers: ["Type", "IS code", "Typical use"],
              rows: [
                ["OPC 33 grade", "IS 269", "general masonry up to M20"],
                ["OPC 43 grade", "IS 8112", "RCC up to M30"],
                ["OPC 53 grade", "IS 12269", "high-strength RCC, precast"],
                ["PPC", "IS 1489 part 1", "dams, mass concrete, plastering"],
                ["Rapid-hardening", "IS 8041", "cold weather, emergency repairs"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Cement manufacturing pipeline",
              caption:
                "From raw mix to bagged cement in five stages.",
              stages: [
                { label: "Mix raw materials", note: "limestone ~80%, clay ~20%" },
                { label: "Calcine in kiln", note: "~1500 deg C, clinker formed" },
                { label: "Add gypsum", note: "2-3% by weight" },
                { label: "Grind to fineness", note: "90 micron residue < 10%" },
                { label: "Bag and store", note: "50 kg bags, dry shed" },
              ],
            },
            callout: {
              type: "warning",
              title: "Initial vs final setting time",
              body: "Initial setting time must be NOT LESS than 30 minutes (so concrete can be placed), and final setting time must be NOT MORE than 600 minutes (so the formwork is not held indefinitely). Students often reverse the inequality in the exam; write it down once carefully and recall by reasoning: long open time, short hardening time.",
            },
            keyTerms: [
              { term: "Ordinary Portland cement (OPC)", definition: "The common hydraulic binder made by calcining limestone and clay, ground with gypsum; graded 33, 43, 53 by 28-day strength." },
              { term: "Setting time", definition: "The initial time (>= 30 min) at which cement paste begins to stiffen and the final time (<= 600 min) at which it fully hardens, measured by the Vicat apparatus." },
              { term: "Soundness of cement", definition: "The property that hardened paste does not undergo appreciable volume change; tested by Le Chatelier expansion < 10 mm." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacture and composition of ordinary Portland cement. State the IS grades of OPC and any three special cements with their uses.",
                marks: 7,
                outline: [
                  "Define cement as a hydraulic binder that sets and hardens by hydration.",
                  "Manufacture: calcine limestone (~80%) and clay (~20%) at ~1500 deg C to form clinker.",
                  "Grind clinker with 2-3% gypsum to control setting time.",
                  "Composition: lime 60-67%, silica 17-25%, alumina 3-8%, iron oxide 0.5-6%.",
                  "OPC grades 33, 43, 53 = 28-day mortar cube strength in MPa per IS 269/8112/12269.",
                  "Special cements: PPC (fly ash, mass concrete), PSC (slag, marine), rapid-hardening, low-heat (dams), sulphate-resisting, white.",
                  "Mention two field tests (colour, float) and two lab tests (Vicat setting time, Le Chatelier soundness).",
                ],
              },
              {
                q: "Why is gypsum added during cement grinding?",
                marks: 2,
              },
              {
                q: "State the physical tests on cement with their acceptance limits.",
                marks: 3,
              },
            ],
          },
          // --- 1.4 ---
          {
            number: "1.4",
            title: "Aggregates and concrete - mix and grades",
            body: [
              "Aggregates occupy 70 to 75 percent of concrete volume and give it mass, strength and dimensional stability. They are classed as fine (sand, particles below 4.75 mm per IS 383) and coarse (gravel or crushed stone, 4.75 to 80 mm). Good aggregate is hard, strong, chemically inert, clean, well-graded and free from organic impurities, clay lumps and salt. Fine aggregate is graded by zones I to IV of IS 383 grading curves; coarse aggregate is single-size or graded. Specific gravity of 2.6 to 2.9, water absorption below 1% for coarse and below 5% for light-weight, and flakiness and elongation indices below 35% mark quality material.",
              "Concrete is a composite of cement, fine aggregate, coarse aggregate and water, sometimes with admixtures. Mixing may be nominal (1 cement : n sand : 2n coarse, fixed by volume for low grades up to M20) or design mix (proportioned by weight per IS 10262 to target strength and workability for M25 and above). The water-cement ratio governs strength: a lower ratio gives higher strength but lower workability; Duff Abrams' law states compressive strength is inversely proportional to the ratio raised to a constant, so for OPC a ratio of 0.45 yields about 35 MPa, 0.55 about 25 MPa and 0.65 about 18 MPa at 28 days under standard curing.",
              "IS 456 denotes concrete grades by M followed by the 28-day characteristic cube compressive strength in MPa: M5, M7.5, M10, M15 and M20 are nominal mixes for plain and lightly reinforced work; M25, M30, M40 and above are design mixes for structural RCC. Workability is the ease of placing and compacting, measured by slump cone for low to medium workability (50 to 150 mm) and by compaction factor for stiff mixes. The standard cube test uses 150 mm cubes cured 28 days in water at 27 +/- 2 deg C; the average of three cubes gives the characteristic strength, with acceptance if no individual result is below the grade by more than 5 MPa.",
            ],
            bullets: [
              "Aggregate = 70-75% of concrete volume; fine (<4.75 mm) and coarse (4.75-80 mm) per IS 383.",
              "Nominal mix: 1:n:2n by volume (M5-M20); design mix: weighted per IS 10262 (M25+).",
              "Abrams' water-cement law: lower w/c gives higher strength; w/c 0.45 -> ~35 MPa.",
              "Grades M5 to M20 nominal, M25+ design; M-grade = 28-day characteristic cube strength in MPa.",
              "Slump cone: 50-150 mm for medium workability; compaction factor for stiff mixes.",
            ],
            table: {
              caption: "Nominal mix proportions for common concrete grades (IS 456).",
              headers: ["Grade", "Cement : Sand : Coarse", "Typical use"],
              rows: [
                ["M5", "1 : 5 : 10", "mass concrete, foundation"],
                ["M7.5", "1 : 4 : 8", "mass concrete, PCC"],
                ["M10", "1 : 3 : 6", "lintels, slabs (light)"],
                ["M15", "1 : 2 : 4", "RCC slabs, beams (low)"],
                ["M20", "1 : 1.5 : 3", "RCC structural work"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Concrete grade pyramid",
              caption:
                "Lower grades form the broad mass-concrete base; high-strength grades top the pyramid.",
              tiers: [
                { label: "M40 and above", note: "design mix, prestressed / high-rise" },
                { label: "M25, M30, M35", note: "design mix, structural RCC" },
                { label: "M15, M20", note: "nominal mix, RCC" },
                { label: "M5, M7.5, M10", note: "nominal mix, plain concrete" },
              ],
            },
            callout: {
              type: "tip",
              title: "Grade naming and the cube test",
              body: "The M in M25 stands for Mix, and the number is the 28-day characteristic cube strength in MPa - not the design strength of the structure. Always specify curing as 28 days in water at 27 +/- 2 deg C; the cube test result is invalid without it.",
            },
            keyTerms: [
              { term: "Aggregate", definition: "Granular material such as sand, gravel or crushed stone occupying 70-75% of concrete volume, classed as fine or coarse by particle size." },
              { term: "Water-cement ratio", definition: "The mass of water divided by the mass of cement per unit volume of concrete; the chief factor governing strength via Abrams' law." },
              { term: "Grade of concrete", definition: "The designation Mx where x is the 28-day characteristic cube compressive strength in MPa as per IS 456." },
            ],
            examQuestions: [
              {
                q: "Define concrete and its ingredients. Explain nominal and design mix, state the IS 456 grades of concrete, and describe the slump test for workability.",
                marks: 7,
                outline: [
                  "Define concrete as a composite of cement, fine aggregate, coarse aggregate and water.",
                  "Mention aggregates occupy 70-75% of volume; fine (<4.75 mm) and coarse (4.75-80 mm).",
                  "Distinguish nominal mix (1:n:2n by volume, M5-M20) from design mix (weighted, IS 10262, M25+).",
                  "State Abrams' water-cement law: strength inversely proportional to w/c raised to a constant.",
                  "List IS 456 grades M5, M7.5, M10, M15, M20 (nominal) and M25+ (design).",
                  "Describe slump cone test: fill in 4 layers, lift cone, measure slump in mm.",
                  "Give slump values: 50-100 mm for RCC, 100-150 mm for heavily reinforced sections.",
                ],
              },
              {
                q: "What is the water-cement ratio? State Abrams' law in one line.",
                marks: 2,
              },
              {
                q: "List the grades of concrete per IS 456 and identify which are nominal and which are design mixes.",
                marks: 3,
              },
            ],
          },
          // --- 1.5 ---
          {
            number: "1.5",
            title: "Steel, timber and modern materials",
            body: [
              "Steel is the most important reinforcing material in concrete because its tensile strength (250 to 600 MPa) complements concrete's high compressive strength. Mild steel bars (IS 432, Fe 250) are smooth and used for secondary reinforcement; high-yield-strength-deformed (HYSD) bars (Fe 415, Fe 500) carry surface ribs that bond better with concrete; and thermo-mechanically treated (TMT) bars, quenched from the rolling heat, have a tough martensitic outer layer and a ductile ferrite-pearlite core, giving both high strength and earthquake ductility. Structural steel sections - I, L, T, channel, angle and plate - are used for beams, columns, trusses and plate girders.",
              "Timber is the oldest structural material and remains in doors, windows, roof trusses, formwork and temporary structures. It is classified as softwood (conifers like deodar, pine) and hardwood (broadleaf like teak, sal, shisham); structural grading follows IS 399. Freshly felled timber holds up to 50% moisture and must be seasoned to about 12% by air (natural, slow) or kiln (artificial, fast) seasoning to prevent warping, decay and shrinkage. Common defects are knots, shakes (longitudinal cracks), splits, waney edge, fungal rot and insect attack; preservation with creosote, boric acid or copper-chrome-arsenic compounds extends service life.",
              "Modern materials respond to cost, weight and sustainability. Fly-ash bricks use 30 to 50% fly ash from thermal power plants with lime or cement and sand, weigh less than clay bricks and have compressive strength above 7.5 MPa; autoclaved aerated concrete (AAC) blocks of IS 2185 part 3 are steam-cured, lightweight (550 kg/m^3), fire-resistant and thermally insulating; ferro-cement is a thin (10 to 40 mm) mortar matrix reinforced with closely spaced wire mesh for tanks, shells and partitions; and fibre-reinforced concrete (FRC) adds steel, glass or polypropylene fibres to control shrinkage cracking. Together they reduce dead load, save clay topsoil and use industrial waste.",
            ],
            bullets: [
              "Mild steel (Fe 250), HYSD (Fe 415, 500) and TMT bars; tensile strength 250-600 MPa.",
              "Steel sections: I, L, T, channel, angle, plate for beams, columns, trusses.",
              "Timber: softwood (deodar, pine) and hardwood (teak, sal); seasoned to ~12% moisture (kiln or air).",
              "Fly-ash bricks: 30-50% fly ash, strength >= 7.5 MPa; AAC blocks: 550 kg/m^3, fire-resistant.",
              "Ferro-cement: thin mortar + wire mesh; FRC: steel/glass/polypropylene fibres for crack control.",
            ],
            table: {
              caption: "Reinforcing steel grades and properties (IS 1786, IS 432).",
              headers: ["Bar type", "Grade", "Yield stress", "Use"],
              rows: [
                ["Mild steel", "Fe 250", "250 MPa", "secondary reinforcement"],
                ["HYSD", "Fe 415", "415 MPa", "general RCC"],
                ["HYSD", "Fe 500", "500 MPa", "high-strength RCC"],
                ["TMT", "Fe 500 D", "500 MPa", "earthquake zones"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Steel, timber and modern materials at a glance",
              caption:
                "Each material class balances strength, cost and sustainability differently.",
              left: {
                heading: "Conventional",
                items: [
                  "Mild steel: cheap, ductile, low strength (Fe 250)",
                  "HYSD / TMT: high strength, good bond (Fe 415, 500)",
                  "Timber: light, easy to work, renewable",
                  "Clay brick: cheap, durable, but uses topsoil",
                ],
              },
              right: {
                heading: "Modern",
                items: [
                  "Fly-ash brick: lighter, uses waste, 7.5 MPa+",
                  "AAC block: 550 kg/m^3, insulating",
                  "Ferro-cement: thin, watertight shells",
                  "FRC: fibre-controlled cracking",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Reinforcing steel naming",
              body: "Fe 415 means yield stress of 415 MPa; the higher the number, the stronger and less ductile the bar. For RGPV, remember Fe 250 (mild), Fe 415 (HYSD standard), Fe 500 (HYSD high-strength) and that TMT bars are graded the same way but quench-treated for ductility.",
            },
            keyTerms: [
              { term: "TMT bar", definition: "Thermo-mechanically treated steel reinforcing bar with a hard martensitic surface and ductile core, offering high strength with earthquake ductility." },
              { term: "Seasoning of timber", definition: "The process of drying freshly felled timber to a moisture content of about 12% by air or kiln to prevent warping and decay." },
              { term: "AAC block", definition: "Autoclaved aerated concrete block of IS 2185 part 3, steam-cured, lightweight and thermally insulating wall unit." },
            ],
            examQuestions: [
              {
                q: "Describe reinforcing steel used in RCC. Compare mild steel, HYSD and TMT bars, and explain two modern wall materials with their advantages.",
                marks: 7,
                outline: [
                  "Define reinforcing steel as the tensile complement to concrete; tensile strength 250-600 MPa.",
                  "Mild steel (Fe 250): smooth, ductile, low strength, for secondary reinforcement.",
                  "HYSD (Fe 415, Fe 500): surface ribs improve bond; general and high-strength RCC.",
                  "TMT bars: quench-treated, hard martensitic surface, ductile core, good for earthquake zones.",
                  "Fly-ash brick: 30-50% fly ash, lighter, no topsoil, compressive strength >= 7.5 MPa.",
                  "AAC block: steam-cured, 550 kg/m^3, thermal and fire insulation, IS 2185 part 3.",
                  "State one more: ferro-cement or FRC; close with sustainability and dead-load reduction.",
                ],
              },
              {
                q: "What is a TMT bar? Why is it preferred in seismic zones?",
                marks: 2,
              },
              {
                q: "State the advantages of fly-ash bricks and AAC blocks over burnt-clay bricks.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT II - BUILDING CONSTRUCTION
    // =================================================================
    {
      number: 2,
      roman: "II",
      title: "Building Construction",
      summary:
        "Unit II assembles a building from the ground up. Foundations transmit loads to the soil; load-bearing and partition walls rise on them with damp-proofing at the plinth; doors, windows, floors and stairs complete the enclosure; flat and pitched roofs cap it with plastering for protection; and building planning with byelaws governs the layout for aspect, prospect, ventilation and statutory setback.",
      chapter: {
        number: "02",
        title: "Building Construction",
        intro:
          "Unit II walks the construction of a building component by component: foundations and the bearing capacity of soil; load-bearing and partition walls with damp-proofing; doors, windows, floors and stairs; flat and pitched roofs with plastering; and the principles of building planning with the statutory byelaws that govern setback, FAR and height.",
        sections: [
          // --- 2.1 ---
          {
            number: "2.1",
            title: "Building components and foundations",
            body: [
              "A building is assembled from a fixed set of components in a fixed order. Below ground is the foundation, which transmits the structure's load to the hard stratum; above the foundation rises the plinth, a short masonry column that keeps the floor above ground and away from damp. On the plinth stand the walls (load-bearing or partition), which hold doors and windows for access, light and ventilation. Floors are laid at each storey level, stairs connect storeys, and the roof caps the structure. Each component has a function, a material and a construction method that the engineer must coordinate.",
              "The foundation is the lowest load-bearing element and is designed to spread the building's load over a soil area large enough that the bearing pressure stays within the soil's safe bearing capacity. Foundations are classified by depth: shallow foundations (depth <= width) include strip (continuous wall), isolated (single column), combined (two adjacent columns), strap and raft foundations; deep foundations (depth > width) include pile foundations (driven or bored, end-bearing or friction) and well foundations (for bridge piers in water). The choice depends on the load magnitude, soil type, water table and adjacent structures.",
              "Bearing capacity is the maximum load the soil can carry without shear failure or excessive settlement. The safe bearing capacity (SBC) of common soils ranges from 50 to 100 kN/m^2 for soft clay and loose sand, 200 to 300 for medium sand and stiff clay, and 400 to 600 for dense gravel and hard rock. Field tests for SBC include the plate load test (loads a 30 cm plate, observes settlement) and the standard penetration test (counts blows per 30 cm penetration). Foundations must extend below the depth of seasonal moisture variation to avoid heave, and below the scour depth for structures in flowing water.",
            ],
            bullets: [
              "Building components: foundation, plinth, walls, doors/windows, floors, stairs, roof - laid in fixed order.",
              "Foundation function: spread load so soil pressure stays below SBC; classed shallow or deep.",
              "Shallow: strip (wall), isolated (column), combined, strap, raft; deep: pile (driven/bored), well (caisson).",
              "Safe bearing capacity: 50-100 kN/m^2 soft clay/loose sand; 400-600 dense gravel/hard rock.",
              "SBC tests: plate load test on 30 cm plate; SPT blow count per 30 cm penetration.",
            ],
            table: {
              caption: "Foundation types by depth and use.",
              headers: ["Type", "Depth class", "Best use"],
              rows: [
                ["Strip", "Shallow", "load-bearing wall on firm soil"],
                ["Isolated", "Shallow", "single RCC column"],
                ["Raft", "Shallow", "soft soil, heavy structure"],
                ["Pile", "Deep", "soft soil over hard stratum"],
                ["Well (caisson)", "Deep", "bridge piers in water"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Building components stacked from roof to foundation",
              caption:
                "Top to bottom - a building is a stack of functional layers.",
              layers: [
                { label: "Roof", note: "flat or pitched, weather protection" },
                { label: "Stairs", note: "vertical circulation between floors" },
                { label: "Floors", note: "living surface at each storey" },
                { label: "Walls (with doors/windows)", note: "enclosure and load bearing" },
                { label: "Plinth", note: "raises floor above ground, DPC here" },
                { label: "Foundation", note: "spreads load to soil" },
              ],
            },
            callout: {
              type: "warning",
              title: "Foundations below the moisture zone",
              body: "Always found at least 1.5 m below ground level in black-cotton soil, not just for bearing capacity but to reach below the seasonal moisture-variation depth. Foundations in the active zone of swelling clays heave and crack walls - the most common first-year design error.",
            },
            keyTerms: [
              { term: "Foundation", definition: "The lowest load-bearing part of a building that transfers the structure's load to the soil at a safe bearing pressure." },
              { term: "Safe bearing capacity (SBC)", definition: "The maximum load per unit area the soil can carry without shear failure or excessive settlement; the ultimate bearing capacity divided by a factor of safety." },
              { term: "Pile foundation", definition: "A deep foundation using slender cylindrical members driven or bored into the ground to transmit load through soft soil to a hard stratum or by skin friction." },
            ],
            examQuestions: [
              {
                q: "List the components of a building with their functions. Classify foundations into shallow and deep types with one example each, and define safe bearing capacity of soil.",
                marks: 7,
                outline: [
                  "List components in order: foundation, plinth, walls, doors/windows, floors, stairs, roof.",
                  "State the function of each: foundation spreads load, plinth keeps floor dry, walls enclose and bear load.",
                  "Classify foundations by depth: shallow (depth <= width) and deep (depth > width).",
                  "Shallow types: strip (wall), isolated (column), combined, strap, raft.",
                  "Deep types: pile (driven or bored, end-bearing or friction), well (caisson for water).",
                  "Define safe bearing capacity (SBC) as max load per area without shear failure or excessive settlement.",
                  "Give typical SBC values: 50-100 kN/m^2 for soft clay, 400-600 for hard rock.",
                ],
              },
              {
                q: "Distinguish isolated and combined footing in one sentence each.",
                marks: 2,
              },
              {
                q: "State the field tests for determining the bearing capacity of soil.",
                marks: 3,
              },
            ],
          },
          // --- 2.2 ---
          {
            number: "2.2",
            title: "Walls (load-bearing vs partition) and damp-proofing",
            body: [
              "A wall is the vertical enclosing element of a building. Load-bearing walls carry the weight of the roof, upper floors and live loads down to the foundation and are built thick, in brick or stone, with bonded masonry; partition walls only divide interior space and carry their own weight plus a small finishing load, so they may be thin (a half-brick wall, 110 mm) and built of brick, AAC block, glass, timber or precast panels. The thickness of a load-bearing wall is fixed by the slenderness ratio (height divided by thickness) and the imposed load; IS 1905 gives empirical limits of a one-brick (250 mm) wall up to two storeys in brick masonry.",
              "Dampness in a building comes from many sources: rising groundwater by capillary action through foundation masonry, rain penetration through joints and cracks, leakage from pipes and tanks, and condensation of moisture on cold surfaces. Dampness damages plaster and paint, rots timber, corrodes steel reinforcement, breeds mosquitoes and fungus, and reduces the thermal insulation of walls. The remedy is damp-proofing: a continuous impermeable layer of rich cement concrete (1:2:4) with a waterproofing admixture, bitumen felt, slate, plastic membrane or asphalt, placed at the plinth level to cut capillary rise and called a damp-proof course (DPC).",
              "Damp-proofing practice places the DPC horizontally at the plinth level for walls, just above the foundation for floors, and vertically on the external face of basement walls in contact with soil. Other measures include cavity walls (an air gap between two leaves breaks capillarity), water-resistant plasters on the external face, projecting weather sheds above openings, and good drainage of surrounding ground to keep water away from the foundation. For basements below the water table, tanking with asphalt or membrane waterproofing of the RCC slab is essential, and the design must resist hydrostatic uplift pressure.",
            ],
            bullets: [
              "Load-bearing wall: carries roof + floor loads; built >= 250 mm (1 brick) up to 2 storeys per IS 1905.",
              "Partition wall: divides interior space only; thin (half-brick 110 mm), AAC, glass, timber.",
              "DPC: continuous 1:2:4 concrete or bitumen felt layer at plinth to cut capillary rise.",
              "Sources of dampness: rising groundwater, rain penetration, pipe leakage, condensation.",
              "Basement tanking: asphalt or membrane on RCC; cavity walls break capillarity.",
            ],
            table: {
              caption: "Sources of dampness and their remedies.",
              headers: ["Source", "Path", "Remedy"],
              rows: [
                ["Rising groundwater", "Capillary through foundation", "DPC at plinth level"],
                ["Rain penetration", "Through joints and cracks", "weather shed, plaster, pointing"],
                ["Pipe leakage", "Plumbing leaks", "repair pipes, drainage"],
                ["Condensation", "Vapour on cold surfaces", "ventilation, vapour barrier"],
                ["Basement seepage", "Hydrostatic pressure", "tanking, membrane, cavity wall"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing wall type",
              caption:
                "The load decision branches the wall into load-bearing or partition design.",
              start: "Wall location and load",
              branches: [
                { label: "Carries roof/floor load", outcome: "load-bearing, >= 1 brick thick, bonded masonry", good: true },
                { label: "Divides interior only", outcome: "partition, half-brick or block, thin", good: true },
                { label: "Below water table", outcome: "basement wall with cavity and tanking", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Where exactly the DPC sits",
              body: "The DPC is placed at the plinth level - just under the floor, between the plinth masonry and the superstructure wall - and must be continuous across the entire width of the wall, including the door openings. A break in the DPC makes the rest of the wall useless against rising damp.",
            },
            keyTerms: [
              { term: "Load-bearing wall", definition: "A wall designed to carry the weight of the roof, floors and live loads down to the foundation in addition to its own weight." },
              { term: "Damp-proof course (DPC)", definition: "A horizontal, continuous, impermeable layer of concrete, bitumen or slate placed at plinth level to prevent capillary rise of moisture into walls." },
              { term: "Cavity wall", definition: "A wall of two leaves separated by an air gap that breaks the capillary path of moisture from outer to inner face." },
            ],
            examQuestions: [
              {
                q: "Distinguish load-bearing and partition walls. State the causes of dampness in buildings and describe with a sketch the methods of damp-proofing.",
                marks: 7,
                outline: [
                  "Define a wall as the vertical enclosing element; load-bearing carries roof/floor loads, partition only divides space.",
                  "Compare thickness: load-bearing >= 250 mm (1 brick), partition ~110 mm (half-brick) or AAC.",
                  "Mention material choices: brick, stone for load-bearing; AAC, glass, timber for partition.",
                  "List causes of dampness: rising groundwater by capillarity, rain penetration, pipe leakage, condensation.",
                  "State effects of dampness: damage plaster, rot timber, corrode steel, breed mosquitoes.",
                  "Define DPC as continuous impermeable layer at plinth, made of 1:2:4 concrete with waterproofing admixture or bitumen felt.",
                  "Mention cavity walls, weather sheds, basement tanking; sketch DPC at plinth level.",
                ],
              },
              {
                q: "What is a damp-proof course? Where is it provided?",
                marks: 2,
              },
              {
                q: "List the causes of dampness in a building and one remedy for each.",
                marks: 3,
              },
            ],
          },
          // --- 2.3 ---
          {
            number: "2.3",
            title: "Doors, windows, floors and stairs",
            body: [
              "Doors, windows, floors and stairs complete the enclosure and circulation of a building. A door is a swingable barrier in a wall that admits people and goods; a window admits light, air and a view. Each is set in a frame fixed into the wall masonry and carries a shutter of timber, steel, aluminium or uPVC. Door types include battened-and-ledged, panelled, flush, glazed, louvered and revolving; window types include casement, sliding, sash, louvered, pivoted and corner. IS 1003 gives sizes; a single-leaf door is 1.0 m x 2.1 m and a typical window 1.2 m x 1.5 m. Doors and windows are placed for cross-ventilation and to avoid direct solar gain.",
              "Floors provide a clean, dry, level surface for living and working. A ground floor rests on well-compacted soil and consists of a base (hardcore rubble, sand fill), a damp-proof layer, a sub-floor of lime concrete or lean concrete (1:4:8) about 100 mm thick, and a top finish of cement concrete, tiles, mosaic, marble or timber. Upper floors are suspended RCC slabs (one-way or two-way) with finishes. Finishing aims for smoothness, abrasion resistance, sound insulation and thermal comfort; terrazzo and vitrified tile are common; industrial floors use vacuum-dewatered concrete for hardness.",
              "Stairs provide vertical circulation between floors. A stair consists of steps (a horizontal tread and a vertical riser), a flight of consecutive steps (maximum 12 per flight), landings for rest, a waist slab supporting the steps, and handrails for safety. The empirical rule 2R + T = 600 to 640 mm relates riser R and tread T for comfortable climbing; for a residential stair, R is about 150 mm and T about 270 mm. Types include straight, dog-legged (two flights in opposite directions around a landing), open-newel, geometric (circular well), spiral and bifurcated; the dog-legged stair is the most common in homes because it is compact.",
            ],
            bullets: [
              "Door sizes: single-leaf 1.0 x 2.1 m per IS 1003; types: panelled, flush, glazed, louvered.",
              "Window types: casement, sliding, sash, louvered, pivoted; placed for cross-ventilation.",
              "Ground floor: rubble base + DPC + 100 mm 1:4:8 LC + finish; upper floor: RCC slab + finish.",
              "Stair comfort: 2R + T = 600-640 mm; R ~ 150 mm, T ~ 270 mm; <= 12 steps per flight.",
              "Stair types: straight, dog-legged (common in homes), open-newel, geometric, spiral.",
            ],
            table: {
              caption: "Stair types and their typical application.",
              headers: ["Type", "Plan shape", "Use"],
              rows: [
                ["Straight", "one direction, no turn", "long, narrow stairwells"],
                ["Dog-legged", "two flights, 180 deg turn", "homes, compact"],
                ["Open-newel", "two flights with a gap", "public buildings"],
                ["Geometric", "circular well, winding", "premium homes, halls"],
                ["Spiral", "treads around a pole", "compact access, lofts"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing door, window and floor materials",
              caption:
                "Material choices shift with budget (x) and durability need (y).",
              axes: { x: "Budget (low -> high)", y: "Wear need (light -> heavy)" },
              quadrants: [
                { label: "Low budget, light wear", note: "flush door, casement window, tile floor" },
                { label: "High budget, light wear", note: "panelled timber, aluminium, marble" },
                { label: "Low budget, heavy wear", note: "steel shutter, louvered, vitrified tile" },
                { label: "High budget, heavy wear", note: "teak panel, uPVC, terrazzo / granite" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 2R + T comfort rule",
              body: "Examiners always reward the rule 2R + T = 600 to 640 mm and a worked check: with R = 150 mm and T = 270 mm, 2*150 + 270 = 570 mm (slightly low); with R = 160 mm and T = 300 mm, 2*160 + 300 = 620 mm (comfortable). Write the rule, then the worked numbers - the rule alone is half-marks.",
            },
            keyTerms: [
              { term: "Door shutter", definition: "The movable panel (timber, steel, aluminium) that swings or slides within a door frame to open or close an opening." },
              { term: "Tread and riser", definition: "The horizontal portion of a step on which the foot is placed (tread) and the vertical portion between two treads (riser)." },
              { term: "Dog-legged stair", definition: "A stair of two flights running in opposite directions with a common landing at the reversal, used in compact residential plans." },
            ],
            examQuestions: [
              {
                q: "List the types of doors and windows with sketches. Describe the components of a stair and state the relation between riser and tread with a worked example.",
                marks: 7,
                outline: [
                  "Define a door as a movable barrier in a wall, a window as a light/air inlet.",
                  "List door types: battened-and-ledged, panelled, flush, glazed, louvered, revolving.",
                  "List window types: casement, sliding, sash, louvered, pivoted; sketch two.",
                  "State IS 1003 typical sizes: door 1.0 x 2.1 m, window 1.2 x 1.5 m.",
                  "Describe stair components: step (tread + riser), flight, landing, waist slab, handrail.",
                  "State the comfort rule 2R + T = 600-640 mm; max 12 steps per flight.",
                  "Worked example: R = 160 mm, T = 300 mm -> 2R + T = 620 mm, comfortable; mention dog-legged type.",
                ],
              },
              {
                q: "Define tread and riser. State the comfort relation between them.",
                marks: 2,
              },
              {
                q: "Name any five types of stairs and state where each is used.",
                marks: 3,
              },
            ],
          },
          // --- 2.4 ---
          {
            number: "2.4",
            title: "Roofs (flat vs pitched) and plastering",
            body: [
              "A roof is the top covering of a building that protects it from sun, rain, snow and wind. Roofs are broadly flat or pitched. A flat roof has a slope of less than 10 degrees and is built as an RCC slab (110 to 150 mm thick) sloped by varying screed thickness to drain water; it doubles as a terrace for sitting, drying clothes or installing solar panels and water tanks, but it must be waterproofed carefully with bitumen, asphalt or membrane and needs thermal insulation in hot climates. A pitched roof has a slope of more than 10 degrees and is built of timber or steel trusses covered with clay tiles, AC sheets, GI sheets or shingles; it drains rain quickly and is preferred in high-rainfall and snow regions.",
              "The pitched roof has three common forms. A lean-to (single-pitch) roof slopes one way and is the simplest, used for sheds and verandahs. A couple roof has two rafters leaning against each other at the ridge; a couple-close roof adds a horizontal tie at the bottom to prevent spread. A king-post truss has a central vertical post (the king post) between ridge and tie, used for spans of 5 to 9 metres, and a queen-post truss has two vertical posts, used for spans of 9 to 14 metres. Trusses transmit loads to walls through wall plates and must be braced against wind.",
              "Plastering is the thin coat of mortar (cement : sand 1:3 to 1:6) applied to walls and ceilings to protect them from weather, give a smooth surface for painting, conceal defective masonry, and improve thermal and acoustic insulation. A two-coat plaster has a 10 to 12 mm backing coat (1:4) with a rough surface for key, then a 6 to 8 mm finishing coat (1:3) levelled and smoothed; three-coat work adds a 6 mm rendering coat for high-quality finishes. Defects include blistering (delayed slaking of lime), cracking (shrinkage or structural movement), flaking (loss of bond) and efflorescence (soluble salts). Curing with water for 7 days is essential for cement plaster.",
            ],
            bullets: [
              "Flat roof: slope < 10 deg, RCC slab, terrace use; needs membrane waterproofing + thermal insulation.",
              "Pitched roof: slope > 10 deg, trusses with tiles/AC/GI sheets; for rain and snow regions.",
              "Truss spans: king-post 5-9 m, queen-post 9-14 m; couple-close ties rafter feet.",
              "Plaster: 1:3 to 1:6 mortar, two-coat 10-12 mm + 6-8 mm, three-coat adds rendering.",
              "Plaster defects: blistering (lime slaking), cracking (shrinkage), flaking, efflorescence; cure 7 days.",
            ],
            table: {
              caption: "Roof truss types and span range.",
              headers: ["Truss", "Span", "Key member"],
              rows: [
                ["Lean-to (single pitch)", "up to 2.5 m", "single rafter"],
                ["Couple-close", "up to 4.5 m", "tie beam at feet"],
                ["King-post", "5-9 m", "central vertical post"],
                ["Queen-post", "9-14 m", "two vertical posts"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Flat vs pitched roof at a glance",
              caption:
                "The two roof families trade terrace utility for rain drainage.",
              left: {
                heading: "Flat roof",
                items: [
                  "slope < 10 deg, RCC slab",
                  "usable terrace for laundry, solar",
                  "needs membrane + insulation",
                  "common in dry, hot plains",
                  "slower rain drainage",
                ],
              },
              right: {
                heading: "Pitched roof",
                items: [
                  "slope > 10 deg, trusses + tiles",
                  "no usable surface",
                  "self-draining, no membrane",
                  "common in heavy-rain, snow zones",
                  "faster rain drainage",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Don't call a flat roof 'level'",
              body: "A 'flat' roof is never truly level - it must slope 1 in 50 to 1 in 100 so rainwater drains to outlets, achieved by varying the screed thickness over the RCC slab. A perfectly level flat roof ponds water, leaks and shortens its life. Specify the slope on the drawing.",
            },
            keyTerms: [
              { term: "Flat roof", definition: "A roof with a slope less than 10 degrees, built as an RCC slab, serving also as a terrace but requiring careful waterproofing." },
              { term: "Pitched roof", definition: "A roof with a slope greater than 10 degrees built of trusses and covered with tiles or sheets, draining rain quickly." },
              { term: "Plastering", definition: "The application of a thin mortar coat to walls and ceilings to protect, smoothen, conceal defects and improve insulation." },
            ],
            examQuestions: [
              {
                q: "Differentiate flat and pitched roofs. Sketch a king-post truss and state its span range. Describe the purpose and defects of plastering.",
                marks: 7,
                outline: [
                  "Define roof; classify as flat (slope < 10 deg) or pitched (slope > 10 deg).",
                  "Flat roof: RCC slab, doubles as terrace, needs membrane + insulation.",
                  "Pitched roof: trusses with tiles/sheets; quick rain drainage, suited to rain/snow regions.",
                  "Sketch king-post truss: ridge, rafters, tie, king post, struts; span 5-9 m.",
                  "Mention queen-post for 9-14 m span; couple roof for small sheds.",
                  "State purpose of plastering: protection, smooth surface, conceal defects, insulation.",
                  "List defects: blistering (lime slaking), cracking (shrinkage), flaking, efflorescence; cure 7 days.",
                ],
              },
              {
                q: "State the span range of king-post and queen-post trusses.",
                marks: 2,
              },
              {
                q: "State the purpose of plastering and list any three defects of plastering.",
                marks: 3,
              },
            ],
          },
          // --- 2.5 ---
          {
            number: "2.5",
            title: "Building planning and byelaws",
            body: [
              "Building planning arranges rooms, doors, windows and circulation in a building so that the result is comfortable, economical and compliant with byelaws. The classic principles are aspect (placing rooms to face their best orientation - living east, bedroom south, kitchen east), prospect (framing the best view from the main rooms), orientation (long axis east-west to reduce sun on the long face), privacy (screening the approach to bedrooms and toilets), circulation (short, direct, segregated paths for people and services), grouping (placing related rooms together), flexibility (rooms convertible to other uses) and elegance. Good planning reduces dead area, saves materials and lowers running costs.",
              "Building byelaws are statutory rules of the local authority (development authority, municipality, panchayat) that govern setbacks, height, plot coverage, ventilation and safety to ensure light, air, fire access and orderly growth. Key parameters are the setback - the minimum open distance from the plot boundary to the building (front, rear, side, varying by road width and plot size), the floor area ratio (FAR) or floor space index (FSI) - the ratio of total built-up floor area to plot area (typically 1.0 to 2.5 for residential), the ground coverage (typically 40 to 75 percent), the permissible height (typically 1.5 times the road width plus setback), and minimum room sizes (habitable room >= 9.5 m^2 with minimum width 2.4 m).",
              "For an ordinary residential plot of 150 m^2 facing a 9 m road in a typical Indian municipality, the byelaws may specify a 3 m front setback, 2 m rear setback and 1.5 m side setbacks, ground coverage 65 percent, FAR 1.5 and height limit 7.5 m. With these limits the planner first places the building to satisfy setbacks, then orients the long axis east-west, then arranges living and bedrooms for aspect and prospect, then provides a kitchen and two toilets on an external wall for ventilation, and finally sizes windows to 10 to 15 percent of floor area. The plan is then submitted for approval to the local authority.",
            ],
            bullets: [
              "Planning principles: aspect, prospect, orientation, privacy, circulation, grouping, flexibility, elegance.",
              "Orientation: long axis east-west to cut sun on the long face; living east, bedroom south.",
              "Setbacks: front, rear, side; vary by road width and plot size; e.g. 3 m / 2 m / 1.5 m.",
              "FAR (FSI): total built-up area / plot area; residential 1.0-2.5; ground coverage 40-75%.",
              "Habitable room >= 9.5 m^2, min width 2.4 m; window area 10-15% of floor area.",
            ],
            table: {
              caption: "Typical residential byelaw parameters for a 150 m^2 plot.",
              headers: ["Parameter", "Value", "Notes"],
              rows: [
                ["Front setback", "3.0 m", "varies with road width"],
                ["Rear setback", "2.0 m", "compulsory open space"],
                ["Side setback", "1.5 m", "for ventilation and fire access"],
                ["Ground coverage", "65%", "percentage of plot area"],
                ["Floor area ratio (FAR)", "1.5", "total built-up / plot area"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The building planning workflow",
              caption:
                "From plot limits to a byelaw-compliant, comfortable plan.",
              steps: [
                { label: "Plot limits: setback, FAR, height", note: "from local byelaws" },
                { label: "Place building within setbacks", note: "ground coverage <= limit" },
                { label: "Orient long axis east-west", note: "cut solar gain" },
                { label: "Place rooms for aspect and prospect", note: "living east, bedroom south" },
                { label: "Place kitchen and toilets on outer walls", note: "ventilation" },
                { label: "Size windows at 10-15% of floor area", note: "submit for approval" },
              ],
            },
            callout: {
              type: "tip",
              title: "Plan in this order",
              body: "First satisfy the setbacks (else the plan will be rejected), then orient the long axis east-west (free cooling), then place living and bedrooms for aspect and prospect, then tuck the kitchen and toilets against external walls, finally size windows at 10-15% of floor area. This order never lets you paint yourself into a corner.",
            },
            keyTerms: [
              { term: "Aspect", definition: "The placement of a room to face its most favourable orientation for sun and breeze (e.g. living east, bedroom south)." },
              { term: "Floor area ratio (FAR)", definition: "The ratio of total built-up floor area on all storeys to the plot area; the chief byelaw control on density." },
              { term: "Setback", definition: "The minimum open distance from the plot boundary to the building, fixed by byelaw separately for front, rear and sides." },
            ],
            examQuestions: [
              {
                q: "State the principles of building planning. Define aspect, prospect and orientation with examples, and explain any four building byelaw parameters.",
                marks: 7,
                outline: [
                  "List planning principles: aspect, prospect, orientation, privacy, circulation, grouping, flexibility, elegance.",
                  "Define aspect: placing rooms for sun/breeze (living east, bedroom south, kitchen east).",
                  "Define prospect: framing the best view from main rooms.",
                  "Define orientation: long axis east-west to cut solar gain on long face.",
                  "Define setback: minimum open distance from plot boundary; values 3 m front, 2 m rear, 1.5 m side.",
                  "Define FAR/FSI: total built-up floor area / plot area; residential 1.0-2.5.",
                  "Define ground coverage (40-75%) and minimum room size (habitable >= 9.5 m^2, width 2.4 m).",
                ],
              },
              {
                q: "What is floor area ratio? Give its typical value for residential use.",
                marks: 2,
              },
              {
                q: "Define aspect, prospect and orientation with one example each.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT III - SURVEYING
    // =================================================================
    {
      number: 3,
      roman: "III",
      title: "Surveying",
      summary:
        "Unit III covers surveying from classification through levelling to modern instruments. Purpose and classification open the unit; chain surveying covers instruments, offsets and field work; compass survey introduces bearings, quadrants and local attraction; levelling delivers a worked reduced-level calculation; and the unit closes with the theodolite and the total station as modern angle-and-distance instruments.",
      chapter: {
        number: "03",
        title: "Surveying",
        intro:
          "Unit III develops surveying in five sections: the purpose, divisions and field cycle of the surveyor's art; chain surveying with its instruments and offsets; compass surveying with whole-circle and quadrantal bearings and local attraction; levelling with a worked reduced-level page and the arithmetic check; and the theodolite and total station as the modern instruments for angle and distance.",
        sections: [
          // --- 3.1 ---
          {
            number: "3.1",
            title: "Purpose and classification of surveying",
            body: [
              "Surveying is the art and science of determining the relative positions of points on, above or below the earth's surface and representing them on a plan or map. The primary purpose is to provide the base map for engineering design - whether a highway alignment, a dam site, a building layout or a property boundary. The fundamental principle of surveying is to work from the whole to the part: a network of widely spaced, precisely measured control points is established first, and the details are filled in later with less precise methods. This principle prevents error accumulation from spreading across the entire plan.",
              "Surveying is broadly divided into plane surveying and geodetic surveying. In plane surveying the earth's curvature is ignored and the mean surface is taken as a plane, valid for areas up to about 260 km^2; in geodetic surveying the curvature is accounted for, used for the national control network and large-area mapping. By instrument, surveying is classified as chain survey (linear measurements only), compass survey (angles by magnetic bearing), levelling (heights by level and staff), theodolite survey (angles by precise instrument), plane table survey (graphical plotting on site), tacheometric survey (distances by stadia hairs), total station survey (electronic angle and distance) and GPS or photogrammetric and remote-sensing survey (satellite and aerial).",
              "By purpose, surveying is classified as topographical (natural and man-made features on a topographic sheet), cadastral (property boundaries for revenue records), engineering or route survey (for road, rail, canal, pipeline alignment), mining survey (underground), hydrographic survey (sea and river bed), and military survey. Whichever class is used, the field procedure follows the same four-step cycle: reconnaissance and selection of control points; measurement of angles and distances; booking and reduction of observations; and plotting, computation and checking for closure. Errors of measurement are classified as gross (blunders), systematic (cumulative, from instrument or environment) and random (compensating, unavoidable).",
            ],
            bullets: [
              "Surveying: locate points and represent them on a plan; base map for engineering design.",
              "Principle: work from the whole to the part; control first, details later.",
              "Plane vs geodetic: ignore curvature up to 260 km^2 vs account for it; for national control.",
              "By instrument: chain, compass, levelling, theodolite, plane table, tacheometry, total station, GPS.",
              "Errors: gross (blunders), systematic (cumulative), random (compensating, unavoidable).",
            ],
            table: {
              caption: "Classification of surveying by instrument.",
              headers: ["Type", "Instrument", "What it measures"],
              rows: [
                ["Chain", "chain, tape", "linear distances only"],
                ["Compass", "prismatic compass", "magnetic bearings"],
                ["Levelling", "dumpy/auto level + staff", "elevation differences"],
                ["Theodolite", "vernier/transit theodolite", "horizontal and vertical angles"],
                ["Total station", "electronic theodolite + EDM", "angles + distances to mm"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The surveying field cycle",
              caption:
                "Every survey, large or small, loops through these four stages.",
              steps: [
                { label: "Reconnaissance", note: "select control points" },
                { label: "Measurement", note: "angles and distances" },
                { label: "Booking and reduction", note: "record, reduce to coords" },
                { label: "Plotting and checking", note: "draw plan, verify closure" },
              ],
            },
            callout: {
              type: "exam",
              title: "The whole-to-part principle is a 7-mark anchor",
              body: "RGPV loves 'state the principles of surveying'. Lead with 'work from the whole to the part, work from the higher to the lower precision, and check every measurement by an independent method' - these three lines earn the bulk of the marks before classification even begins.",
            },
            keyTerms: [
              { term: "Plane surveying", definition: "Survey of areas up to about 260 km^2 in which the earth's curvature is neglected and the surface is treated as a plane." },
              { term: "Geodetic surveying", definition: "Survey of large areas in which the earth's curvature is accounted for, used for national control networks." },
              { term: "Working from whole to part", definition: "The fundamental surveying principle of first establishing precise control points over the whole area and then filling in details to limit error accumulation." },
            ],
            examQuestions: [
              {
                q: "Define surveying. State its primary divisions and the principle of working from whole to part. Classify surveying by instrument with one example each.",
                marks: 7,
                outline: [
                  "Define surveying as the science of determining relative positions of points and representing them on a plan.",
                  "State the principle: work from the whole to the part; control first, details later.",
                  "Add: work from higher to lower precision; check by an independent method.",
                  "Primary divisions: plane surveying (curvature ignored, area < 260 km^2) vs geodetic (curvature accounted).",
                  "Classification by instrument: chain, compass, levelling, theodolite, plane table, tacheometry, total station, GPS.",
                  "Give one example use per instrument (road alignment, dam site, property boundary).",
                  "Close with errors: gross, systematic, random; field cycle of reconnaissance, measurement, plotting.",
                ],
              },
              {
                q: "Distinguish plane and geodetic surveying.",
                marks: 2,
              },
              {
                q: "Classify surveying by instrument and state what each measures.",
                marks: 3,
              },
            ],
          },
          // --- 3.2 ---
          {
            number: "3.2",
            title: "Chain survey - instruments and offsets",
            body: [
              "Chain surveying is the simplest form of survey, used for small, fairly level areas (up to a few hectares) where the detail to be plotted is the outline of boundaries and buildings rather than elevations. It uses only linear measurements; no angles are measured directly. The principle is triangulation: the area is divided into a network of well-conditioned triangles, the sides of which are measured with a chain or tape; the triangles are then plotted to scale from their measured sides, and the internal detail is added by measuring offsets from the chain lines. Triangles must be well-conditioned - no angle less than 30 deg or greater than 120 deg - so that small errors in side lengths do not blow up the plotted shape.",
              "The instruments are a chain (Gunter's 66 ft, engineer's 100 ft, or metric 20 m / 30 m), arrows (10 iron markers used to count chain lengths), ranging rods (3 m wooden poles painted red and white, used to range a long line by eye), an offset rod (similar but with a hook for pulling the chain), a cross-staff (for setting out perpendiculars), a plumb bob (for transferring a point on sloping ground to the chain), tapes (linen, steel or invar) and a field book with hinge-line booking. The metric chain of 20 m has 100 links of 200 mm each, brass tallies at every 5 m and tags at every metre.",
              "Field work proceeds by reconnaissance (walk the area, fix station pegs), by ranging a baseline between two stations (eye-in-line method or reciprocal ranging), by chaining the line with the leader placing arrows and the follower picking them up to count chain lengths, and by taking offsets to the detail (corners of buildings, fence lines, trees). Offsets are perpendicular (90 deg to the chain line, set out by cross-staff or swing-offset) or oblique (when the perpendicular is not feasible). Perpendicular offsets should be short, ideally under 15 m. The field book is booked hinge-style - the chain line runs up the centre of the page, distances on one margin and offsets on both.",
            ],
            bullets: [
              "Principle: triangulation with well-conditioned triangles (angles 30 deg to 120 deg).",
              "Instruments: metric chain 20 m (100 links), arrows, ranging rods, offset rod, cross-staff, plumb bob, tape, field book.",
              "Ranging methods: eye-in-line for short lines; reciprocal ranging for long lines.",
              "Offsets: perpendicular (preferred, <= 15 m) or oblique; set by cross-staff or swing-offset.",
              "Booking: hinge-style - chain line up centre, distances on margin, offsets both sides.",
            ],
            table: {
              caption: "Common chain survey instruments and their use.",
              headers: ["Instrument", "Length / form", "Use"],
              rows: [
                ["Metric chain", "20 m, 100 links", "measure base lengths"],
                ["Arrows", "10 iron pins", "mark and count chain lengths"],
                ["Ranging rod", "3 m, red-white", "range long lines by eye"],
                ["Cross-staff", "octagonal head", "set out 90 deg offsets"],
                ["Field book", "hinge-line pages", "book distances and offsets"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Chain survey field procedure",
              caption:
                "Five sequential steps from walking the site to a hinge-booked plan.",
              steps: [
                { label: "Reconnaissance", note: "walk site, fix station pegs" },
                { label: "Select baseline + triangulate", note: "well-conditioned triangles" },
                { label: "Range the baseline", note: "eye-in-line or reciprocal" },
                { label: "Chain the lines", note: "leader + follower with arrows" },
                { label: "Take offsets and book", note: "perpendicular or oblique, hinge-style" },
              ],
            },
            callout: {
              type: "warning",
              title: "Book perpendicular offsets short",
              body: "A perpendicular offset longer than 15 m accumulates so much swing error that the plotted point drifts visibly. If the detail is far from the chain line, run a new tie line or use oblique offsets - but never trust a long perpendicular offset, however carefully set out.",
            },
            keyTerms: [
              { term: "Well-conditioned triangle", definition: "A triangle in which no angle is less than 30 degrees or greater than 120 degrees, so that small errors in side lengths do not distort the plotted shape." },
              { term: "Offset", definition: "The lateral distance measured from a chain line to a detail point, either perpendicular or oblique, used to plot the detail on the plan." },
              { term: "Ranging", definition: "The process of aligning intermediate ranging rods truly in a straight line between two end stations before chaining, by the eye-in-line or reciprocal method." },
            ],
            examQuestions: [
              {
                q: "Describe the principle, instruments and field procedure of chain surveying. Explain perpendicular and oblique offsets with sketches.",
                marks: 7,
                outline: [
                  "State the principle: triangulation with linear measurements only; suited to small level areas.",
                  "Define well-conditioned triangle: no angle < 30 deg or > 120 deg.",
                  "List instruments: metric chain 20 m (100 links), arrows, ranging rods, cross-staff, offset rod, plumb bob, tape, field book.",
                  "Describe the field procedure: reconnaissance, baseline selection, ranging, chaining, offsets.",
                  "Define offset as lateral distance from chain line to detail point.",
                  "Distinguish perpendicular (90 deg, preferred, < 15 m) from oblique (tie line, two distances).",
                  "Explain hinge-style booking: chain line up centre, distances on margin, offsets both sides.",
                ],
              },
              {
                q: "What is a well-conditioned triangle and why is it preferred?",
                marks: 2,
              },
              {
                q: "List any five instruments used in chain surveying with their use.",
                marks: 3,
              },
            ],
          },
          // --- 3.3 ---
          {
            number: "3.3",
            title: "Compass survey - bearing and local attraction",
            body: [
              "Compass surveying measures the directions of survey lines as magnetic bearings with a prismatic or surveyor's compass, the lengths still being measured by chain or tape. A bearing is the horizontal angle between a surveyed line and a fixed reference direction, measured clockwise from north. Two systems are used. In the whole-circle bearing (WCB) system, also called the azimuthal system, the bearing is measured from 0 deg at north, clockwise through 360 deg; it is read on the prismatic compass. In the quadrantal bearing (QB) system, also called the reduced bearing (RB), the angle is measured from north or south toward east or west, never exceeding 90 deg, and written as N 30 deg E, S 45 deg W etc.; it is read on the surveyor's compass.",
              "Conversion between WCB and RB follows four quadrants. For a WCB between 0 and 90 deg, the RB is the same value prefixed N and suffixed E (WCB 45 deg -> RB N 45 deg E). For 90 to 180 deg, subtract the WCB from 180 deg and prefix S suffix E (WCB 135 deg -> RB S 45 deg E). For 180 to 270 deg, subtract 180 deg from the WCB and prefix S suffix W (WCB 225 deg -> RB S 45 deg W). For 270 to 360 deg, subtract the WCB from 360 deg and prefix N suffix W (WCB 315 deg -> RB N 45 deg W). Fore and back bearings differ by exactly 180 deg: BB = FB +/- 180 deg.",
              "Local attraction is the deflection of the magnetic needle from true magnetic north by iron objects near the compass, such as a chain, keys, a railway line, an overhead power cable or iron ore in the soil. It is detected when the difference between the fore and back bearing of a line is not exactly 180 deg. To correct it, assume one of the stations free from local attraction (typically a station where the difference is exactly 180 deg) and propagate the correction by adding or subtracting the same error to the bearings observed at other stations. If no line gives the exact 180 deg difference, take the mean of the two corrections as the best compromise.",
            ],
            bullets: [
              "WCB: 0-360 deg from north clockwise, on prismatic compass; QB (RB): N/S-E/W, never > 90 deg.",
              "Conversion: 0-90 deg same, 90-180 deg = 180 - WCB (S-E), 180-270 deg = WCB - 180 (S-W), 270-360 deg = 360 - WCB (N-W).",
              "Fore and back bearing differ by exactly 180 deg: BB = FB +/- 180 deg.",
              "Local attraction: needle deflection by iron near the compass; detected when FB-BB != 180 deg.",
              "Correction: assume clean station, propagate the same error; mean if none clean.",
            ],
            table: {
              caption: "Worked WCB to RB conversions in all four quadrants.",
              headers: ["WCB", "Quadrant", "Rule", "RB"],
              rows: [
                ["45 deg", "NE", "RB = WCB", "N 45 deg E"],
                ["135 deg", "SE", "RB = 180 - WCB", "S 45 deg E"],
                ["225 deg", "SW", "RB = WCB - 180", "S 45 deg W"],
                ["315 deg", "NW", "RB = 360 - WCB", "N 45 deg W"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "WCB to RB conversion by quadrant",
              caption:
                "Each quadrant has its own conversion rule.",
              axes: { x: "Bearing from north (W -> E)", y: "Bearing from south (N -> S)" },
              quadrants: [
                { label: "NE: WCB 0-90 deg", note: "RB = WCB (e.g. 45 deg -> N 45 deg E)" },
                { label: "NW: WCB 270-360 deg", note: "RB = 360 - WCB (e.g. 315 deg -> N 45 deg W)" },
                { label: "SE: WCB 90-180 deg", note: "RB = 180 - WCB (e.g. 135 deg -> S 45 deg E)" },
                { label: "SW: WCB 180-270 deg", note: "RB = WCB - 180 (e.g. 225 deg -> S 45 deg W)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Convert WCB to RB by quadrant",
              body: "Draw a north-south-east-west cross, label the four quadrants 0-90, 90-180, 180-270, 270-360. A WCB of 215 deg is in the SW quadrant, so RB = 215 - 180 = S 35 deg W. The cross and four formulas make conversions automatic and prevent sign errors.",
            },
            keyTerms: [
              { term: "Whole-circle bearing (WCB)", definition: "The angle measured clockwise from 0 to 360 degrees from magnetic north, read on a prismatic compass." },
              { term: "Reduced bearing (RB)", definition: "The angle measured from north or south toward east or west, never exceeding 90 degrees, written in the form N 30 deg E." },
              { term: "Local attraction", definition: "The deflection of the magnetic needle from true magnetic north caused by iron objects or ore near the compass, detected when the fore and back bearing differ by other than 180 degrees." },
            ],
            examQuestions: [
              {
                q: "Define bearing of a survey line. Distinguish whole-circle and quadrantal bearings with sketches, and convert WCB of 30 deg, 120 deg, 210 deg and 300 deg to reduced bearings.",
                marks: 7,
                outline: [
                  "Define bearing as the horizontal angle between a survey line and a fixed reference direction.",
                  "Define WCB: 0-360 deg clockwise from north, on prismatic compass.",
                  "Define QB / RB: from N or S toward E or W, <= 90 deg, on surveyor's compass.",
                  "State the four conversion rules by quadrant.",
                  "Convert 30 deg -> N 30 deg E (NE quadrant).",
                  "Convert 120 deg -> 180 - 120 = S 60 deg E (SE quadrant).",
                  "Convert 210 deg -> 210 - 180 = S 30 deg W; convert 300 deg -> 360 - 300 = N 60 deg W.",
                ],
              },
              {
                q: "State the relation between fore bearing and back bearing of a line.",
                marks: 2,
              },
              {
                q: "What is local attraction? How is it detected and corrected?",
                marks: 3,
              },
            ],
          },
          // --- 3.4 ---
          {
            number: "3.4",
            title: "Levelling - instruments and RL calculation",
            body: [
              "Levelling is the branch of surveying that determines the relative heights of points above or below a datum, usually the mean sea level. The instrument is a level - dumpy, tilting, auto (automatic), or digital - which gives a horizontal line of sight, and a graduated staff held vertically at each point. The reading on the staff when the line of sight is horizontal is called a staff reading; the elevation of the line of sight above the datum is the height of instrument (HI). Two methods of computing reduced levels (RL) are the height of instrument method (RL of point = HI - staff reading; HI = previous RL + back sight) and the rise and fall method (RL of next point = previous RL plus rise or minus fall, where rise = previous staff reading - current staff reading).",
              "Two classes of reading exist. A back sight (BS) is the first reading taken after setting up the level, on a staff held at a point of known RL; a fore sight (FS) is the last reading before shifting the level, on a staff held at a point whose RL is to be found and which will become the next turning point. An intermediate sight (IS) is any reading between BS and FS, taken on points whose RLs are wanted but which are not turning points. A change point (CP) is a staff station where both a FS (before the shift) and a BS (after the shift) are taken to transfer the HI to the next set-up.",
              "A worked levelling page makes the method concrete. Suppose the RL of benchmark BM-A is 100.000 m. Set up the level and take BS 1.250 m on BM-A: HI = 100.000 + 1.250 = 101.250 m. Take an intermediate sight IS 0.900 m on point P1: RL of P1 = 101.250 - 0.900 = 100.350 m. Take FS 1.600 m on change point CP: RL of CP = 101.250 - 1.600 = 99.650 m. Shift the level, take BS 0.750 m on CP: new HI = 99.650 + 0.750 = 100.400 m. Take FS 1.200 m on point P2: RL of P2 = 100.400 - 1.200 = 99.200 m. The page is checked by arithmetic: sum of BS - sum of FS = last RL - first RL; here (1.250 + 0.750) - (1.600 + 1.200) = 2.000 - 2.800 = -0.800 and 99.200 - 100.000 = -0.800, so the booking balances.",
            ],
            bullets: [
              "Levelling: finds relative heights above a datum (MSL); instruments: dumpy, tilting, auto, digital level + staff.",
              "BS = first reading on known RL; FS = last reading before shift; IS = reading between; CP = change point.",
              "HI method: HI = RL + BS; RL = HI - staff reading. Rise-fall: RL_next = RL_prev +/- (rise/fall).",
              "Worked: BM 100.000; BS 1.250 -> HI 101.250; IS 0.900 -> RL 100.350; FS 1.600 -> CP 99.650.",
              "Check: sum(BS) - sum(FS) = last RL - first RL (here -0.800 = -0.800).",
            ],
            table: {
              caption: "Levelling page with HI method (BM-A RL 100.000 m).",
              headers: ["Station", "BS", "IS", "FS", "HI", "RL"],
              rows: [
                ["BM-A", "1.250", "", "", "101.250", "100.000"],
                ["P1", "", "0.900", "", "101.250", "100.350"],
                ["CP", "", "", "1.600", "101.250", "99.650"],
                ["P2", "", "", "1.200", "100.400", "99.200"],
                ["Sum", "2.000", "", "2.800", "", "-0.800"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Levelling set-up and computation pipeline",
              caption:
                "From benchmark to point RL in five steps that repeat per set-up.",
              stages: [
                { label: "Set up level, take BS on BM", note: "HI = BM_RL + BS" },
                { label: "Take intermediate sights", note: "RL = HI - IS" },
                { label: "Take FS on change point", note: "RL_CP = HI - FS" },
                { label: "Shift level, take BS on CP", note: "new HI = CP_RL + BS" },
                { label: "Take FS on next point", note: "RL = new HI - FS; close the page" },
              ],
            },
            callout: {
              type: "exam",
              title: "The arithmetic check is mandatory",
              body: "RGPV examiners deduct a mark if the levelling page is not closed by the check sum(BS) - sum(FS) = last RL - first RL. Always write this line at the bottom of the page, even if the calculation is trivial - it is the proof that no booking error crept in.",
            },
            keyTerms: [
              { term: "Reduced level (RL)", definition: "The elevation of a point above or below an adopted datum, computed from staff readings and the height of instrument." },
              { term: "Height of instrument (HI)", definition: "The elevation of the line of sight of the level above the datum, equal to the RL of the staff station plus the back sight." },
              { term: "Change point (CP)", definition: "A staff station on which both a fore sight (before the level is shifted) and a back sight (after the shift) are taken, used to transfer the height of instrument." },
            ],
            examQuestions: [
              {
                q: "Define levelling. Distinguish back sight, fore sight and intermediate sight. Reduce the following level page by the HI method and apply the arithmetic check: BS readings 1.250, 0.750; IS 0.900; FS 1.600, 1.200; starting BM RL 100.000.",
                marks: 7,
                outline: [
                  "Define levelling as the branch determining relative heights above a datum (MSL).",
                  "Define BS (first reading on known RL), FS (last reading before shift), IS (reading between).",
                  "State HI method: HI = RL + BS; RL of next point = HI - staff reading.",
                  "Compute HI for first set-up: 100.000 + 1.250 = 101.250 m.",
                  "Compute IS P1: 101.250 - 0.900 = 100.350 m; FS at CP: 101.250 - 1.600 = 99.650 m.",
                  "New HI after shift: 99.650 + 0.750 = 100.400 m; FS at P2: 100.400 - 1.200 = 99.200 m.",
                  "Apply check: sum BS - sum FS = 2.000 - 2.800 = -0.800 = last RL - first RL; balances.",
                ],
              },
              {
                q: "Distinguish back sight and fore sight in one sentence each.",
                marks: 2,
              },
              {
                q: "State the arithmetic check for the HI method and the rise-fall method.",
                marks: 3,
              },
            ],
          },
          // --- 3.5 ---
          {
            number: "3.5",
            title: "Theodolite and total station",
            body: [
              "A theodolite is a precise instrument for measuring horizontal and vertical angles; the transit theodolite can also transit (plunge) the telescope to face the opposite direction. Its chief parts are a telescope mounted on a horizontal axis with a vertical circle, a horizontal circle graduated 0 to 360 deg, two plate levels (plate and striding), three clamp-slow-motion screw pairs (lower clamp for the horizontal circle, upper clamp for the upper plate, vertical clamp), a tribrach with three levelling screws, a plumb bob for centring over the station, and a tripod stand. Vernier or microoptic theodolites read to 20 seconds; modern electronic theodolites read to 1 second.",
              "The theodolite is set up and levelled over the station by centring with the plumb bob and adjusting the three levelling screws using the plate bubble. Temporary adjustments are setting, centring, levelling and focussing the telescope; permanent adjustments fix the collimation axis perpendicular to the horizontal axis, the horizontal axis perpendicular to the vertical axis, and the vertical circle index. To measure a horizontal angle between two points A and B, set the vernier to zero, sight A and clamp the upper motion, unclamp the upper motion and sight B, read the vernier - the angle is the difference between the two readings; or use the method of repetition (cumulative multiple readings divided by repetitions for higher accuracy) or reiteration (closing the horizon by sighting several points in turn).",
              "A total station is a single integrated instrument that combines an electronic theodolite for angles, an electronic distance measurement (EDM) unit using infrared or laser light for slope distances, an onboard microprocessor that computes horizontal distance, vertical distance and coordinates from the raw readings, and a data recorder that stores the observations digitally. Distances of 1 to 3 km are measured to a precision of about 1 to 3 mm. The total station removes the need for a separate chain, tape and theodolite, eliminates transcription errors, and feeds directly into CAD or GIS for plotting, contouring and earthwork computation. Many stations add a laser plummet, dual-axis compensation, a reflectorless mode, and a wireless link to a controller.",
            ],
            bullets: [
              "Theodolite: precise angle instrument; parts: telescope, horizontal + vertical circles, plate levels, clamps.",
              "Vernier reads to 20 seconds; electronic reads to 1 second; permanent adjustments fix collimation and axis perpendicularity.",
              "Horizontal angle: set 0, sight A, unclamp upper, sight B, read - or by repetition / reiteration.",
              "Total station: electronic theodolite + EDM + microprocessor; distances 1-3 km to 1-3 mm.",
              "Total station removes chain, tape, transcription; feeds CAD/GIS directly.",
            ],
            table: {
              caption: "Comparison of theodolite and total station.",
              headers: ["Feature", "Theodolite", "Total station"],
              rows: [
                ["Angle reading", "vernier 20 s", "electronic 1 s"],
                ["Distance", "by chain or tape", "by EDM, 1-3 mm"],
                ["Computation", "by hand", "onboard microprocessor"],
                ["Booking", "manual field book", "digital data recorder"],
                ["Output", "angles", "coordinates + drawing"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Theodolite vs total station",
              caption:
                "The total station absorbs the theodolite's angle job and adds distance + computation.",
              left: {
                heading: "Theodolite",
                items: [
                  "measures horizontal and vertical angles",
                  "vernier or microoptic reading, 20 s",
                  "needs chain or tape for distance",
                  "observations booked by hand",
                  "no onboard computation",
                ],
              },
              right: {
                heading: "Total station",
                items: [
                  "angles by electronic theodolite, 1 s",
                  "EDM slope distance by IR or laser, 1-3 mm",
                  "no separate chain needed",
                  "observations stored digitally",
                  "onboard microprocessor computes coords",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Total station is theodolite + EDM + brain",
              body: "Remember the total station as the theodolite plus an electronic distance meter plus a microprocessor that converts raw angles and slope distance into coordinates. This three-part definition always answers the 'what is a total station' short question and motivates why it has replaced both the chain and the theodolite in modern practice.",
            },
            keyTerms: [
              { term: "Theodolite", definition: "A precise instrument for measuring horizontal and vertical angles, consisting of a telescope, graduated horizontal and vertical circles, plate levels and clamps." },
              { term: "Temporary adjustment", definition: "The set of operations performed at each station before observation - centring over the station, levelling with the plate bubble, and focussing the eyepiece and object glass." },
              { term: "Total station", definition: "An integrated electronic surveying instrument combining a theodolite for angles, an EDM for distances, a microprocessor for coordinate computation and a digital data recorder." },
            ],
            examQuestions: [
              {
                q: "Describe the parts of a transit theodolite. Explain the temporary adjustments and the method of measuring a horizontal angle by repetition.",
                marks: 7,
                outline: [
                  "Define theodolite as a precise instrument for horizontal and vertical angles.",
                  "List parts: telescope, horizontal and vertical circles, plate levels, lower and upper clamps, tribrach, plumb bob, tripod.",
                  "Define temporary adjustments: setting, centring (plumb bob), levelling (plate bubble, three screws), focussing.",
                  "Mention permanent adjustments fix collimation and axis perpendicularity.",
                  "Method of measuring horizontal angle: set vernier to 0, sight A and clamp upper.",
                  "Unclamp upper, sight B, read the difference - or close the horizon for reiteration.",
                  "Describe repetition: take n repeated readings, divide by n for higher accuracy; close on first point.",
                ],
              },
              {
                q: "What is a total station? State its three integrated parts.",
                marks: 2,
              },
              {
                q: "List any five parts of a transit theodolite with one-line use each.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT IV - TRANSPORTATION AND WATER INFRASTRUCTURE
    // =================================================================
    {
      number: 4,
      roman: "IV",
      title: "Transportation and Water Infrastructure",
      summary:
        "Unit IV covers the civil infrastructure that moves people and water. Road classification and components open the unit; railways, sleepers and ballast and the types of bridges follow; dams (gravity, earthen, arch) and canals form hydraulic structures; water supply covers sources, treatment and distribution; and sewerage systems and treatment close the unit.",
      chapter: {
        number: "04",
        title: "Transportation and Water Infrastructure",
        intro:
          "Unit IV moves the civil engineer from the building to the city and the region: roads and their layered pavement; railways, bridges and their components; dams and canals that impound and convey water; water supply systems that source, treat and distribute potable water; and sewerage systems that collect, convey and treat wastewater before discharge.",
        sections: [
          // --- 4.1 ---
          {
            number: "4.1",
            title: "Road classification and components",
            body: [
              "A road is a linear transportation infrastructure that carries vehicles, pedestrians and animals. Indian roads are classified by the Nagpur Road Plan into a five-tier hierarchy: national highways (NH), connecting state capitals and major cities and built by the NHAI; state highways (SH), connecting district headquarters to the state capital and NH; major district roads (MDR), connecting district headquarters and market centres; other district roads (ODR), connecting villages to MDRs; and village roads (VR), connecting individual villages to ODRs. The Mumbai-Pune expressway, the Golden Quadrilateral of NHDP and PMGSY village roads are examples of each tier. NHs carry about 40% of road traffic on less than 2% of network length.",
              "A road is built as a layered structure to spread the wheel load over the soil so that the soil pressure stays within its bearing capacity. The layers from bottom up are the subgrade (the compacted natural soil, top 50 cm of which is compacted to 95% Proctor density), the sub-base (granular material 100 to 200 mm thick that cushions the base and drains water), the base (the main load-bearing granular or WBM/WMM layer, 150 to 250 mm thick), and the surface or wearing course (a bituminous or concrete layer 25 to 200 mm thick that resists abrasion, skid and water). Camber or cross slope (2 to 4%) drains rainwater off the surface; gradients (1 in 20 to 1 in 30 on plain terrain) limit vehicle strain.",
              "Bituminous surfaces use either flexible (bituminous concrete, BC) or semi-rigid (bituminous macadam, BM) construction; cement concrete pavements are rigid, last longer and are used for heavy-traffic highways. Flexible pavements distribute the load by grain-to-grain contact through layers; rigid pavements act as a slab and bridge minor soil weakness. The design life of a flexible pavement is about 15 years and of a rigid pavement 30 to 40 years. Drainage - side drains, culverts, cross drainage - is as critical as the pavement layers: a flooded subgrade loses 50% of its strength in days.",
            ],
            bullets: [
              "Five-tier road classification (Nagpur Plan): NH, SH, MDR, ODR, VR.",
              "Road layers: subgrade (compacted soil, top 50 cm), sub-base (100-200 mm), base (150-250 mm), surface (25-200 mm).",
              "Camber 2-4% for cross drainage; gradient 1 in 20 to 1 in 30 on plains.",
              "Flexible pavement (bituminous, ~15 yr) vs rigid (concrete, 30-40 yr).",
              "Side drains, culverts, cross drainage: flooded subgrade loses ~50% strength.",
            ],
            table: {
              caption: "Road classification by Nagpur Plan with examples.",
              headers: ["Tier", "Connects", "Built by"],
              rows: [
                ["National highway (NH)", "state capitals, major cities", "NHAI"],
                ["State highway (SH)", "district HQ to state capital", "state PWD"],
                ["Major district road (MDR)", "district HQ and market centres", "state PWD"],
                ["Other district road (ODR)", "villages to MDR", "district authority"],
                ["Village road (VR)", "villages to ODR", "panchayat (PMGSY)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Road pavement layers from surface to subgrade",
              caption:
                "Top to bottom - wheel load spreads through four layers to the soil.",
              layers: [
                { label: "Surface / wearing course", note: "bituminous concrete or rigid concrete, 25-200 mm" },
                { label: "Base", note: "granular / WBM / WMM, 150-250 mm, load-bearing" },
                { label: "Sub-base", note: "granular cushion + drainage, 100-200 mm" },
                { label: "Subgrade", note: "compacted soil, top 50 cm at 95% Proctor" },
              ],
            },
            callout: {
              type: "warning",
              title: "Water destroys roads faster than traffic",
              body: "A subgrade saturated for even a few days loses about half of its strength, and the surface then cracks under traffic. Always specify side drains, culverts and a 2-4% camber; never build a road in a depression without a drainage survey - this is the single most repeated maintenance lesson of Indian roads.",
            },
            keyTerms: [
              { term: "National highway (NH)", definition: "The highest tier of the Nagpur Road Plan, connecting state capitals and major cities, maintained by the National Highways Authority of India." },
              { term: "Subgrade", definition: "The compacted natural soil forming the top 50 cm of the road foundation, compacted to about 95% Proctor density and providing the ultimate bearing medium." },
              { term: "Flexible pavement", definition: "A road pavement in which the bituminous surface distributes the wheel load by grain-to-grain contact through granular layers, with a design life of about 15 years." },
            ],
            examQuestions: [
              {
                q: "Classify Indian roads as per the Nagpur Road Plan. Describe the components of a road pavement and distinguish flexible and rigid pavements.",
                marks: 7,
                outline: [
                  "State the Nagpur Road Plan five-tier classification.",
                  "National highways (NH): connect state capitals and major cities; NHAI maintains.",
                  "State highways (SH): connect district HQ to state capital; state PWD.",
                  "Major district roads (MDR), other district roads (ODR), village roads (VR) below.",
                  "Road pavement layers: subgrade, sub-base, base, surface / wearing course.",
                  "Subgrade: top 50 cm compacted to 95% Proctor; sub-base and base are granular; surface bituminous or concrete.",
                  "Flexible (bituminous, ~15 yr, grain-to-grain load spread) vs rigid (concrete, 30-40 yr, slab action).",
                ],
              },
              {
                q: "Name the five tiers of Indian roads in the Nagpur classification.",
                marks: 2,
              },
              {
                q: "List the four pavement layers with one line each.",
                marks: 3,
              },
            ],
          },
          // --- 4.2 ---
          {
            number: "4.2",
            title: "Railways components and bridges types",
            body: [
              "A railway track is a guided transport system in which coned wheels with flanges run on steel rails. Its components are the rails (the steel sections, RDSO standard 52 kg or 60 kg per metre, that carry the wheel load and guide the wheels), the sleepers (cross ties of timber, cast iron, steel, or prestressed concrete, spacing about 60 cm, that hold the rails to gauge and transfer load to the ballast), the ballast (the broken stone bed, 20 to 50 mm size, 150 to 250 mm thick, that drains water, holds the sleepers in place and resists lateral movement), the fastenings (fish-plates, bolts, clips, bearing plates that connect rails to sleepers), and the subgrade (the compacted formation, including embankments and cuttings).",
              "The standard gauge in India is the broad gauge of 1676 mm; metre gauge is 1000 mm and narrow gauge 762 mm. The rails are joined end-to-end by fish-plated expansion joints, but modern practice welds rails into long welded rails (LWR) of up to several hundred metres that reduce wear and noise but need careful anchoring against thermal expansion. Turnouts and crossings are the points that let trains change tracks; signalling and interlocking prevent conflicting movements. Important terms include the gauge (distance between rail heads), the cant or super-elevation on curves (the outer rail raised to balance centrifugal force), and the ruling gradient (the steepest sustained gradient that fixes the load a locomotive can haul).",
              "A bridge is a structure that carries a road, rail or pipeline over a river, valley or another road. It is composed of a superstructure (the deck that carries the load, with its girders, trusses, slabs or arches), a substructure (piers that carry the deck mid-stream and abutments at the ends that retain the approach embankment), and foundations (wells, piles or open foundations that transfer the loads to the hard stratum below the river bed). By material, bridges are timber, masonry, RCC, steel or composite; by structural form, beam (simply supported), arch, truss, suspension and cable-stayed; by span, culvert (< 6 m), minor bridge (6 to 30 m), major bridge (> 30 m); by use, road, rail, pedestrian, aqueduct.",
            ],
            bullets: [
              "Rail components: rails (52/60 kg/m), sleepers (timber/PSC, ~60 cm spacing), ballast (20-50 mm, 150-250 mm), fastenings, subgrade.",
              "Indian gauges: broad 1676 mm (standard), metre 1000 mm, narrow 762 mm.",
              "Modern rails welded into LWR for wear/noise reduction; super-elevation on curves balances centrifugal force.",
              "Bridge parts: superstructure (deck/girder), substructure (piers + abutments), foundation (wells/piles).",
              "Bridge types by form: beam, arch, truss, suspension, cable-stayed; by span: culvert (<6 m), minor (6-30 m), major (>30 m).",
            ],
            table: {
              caption: "Railway track components and functions.",
              headers: ["Component", "Size / type", "Function"],
              rows: [
                ["Rails", "52/60 kg/m steel section", "carry wheel load, guide wheels"],
                ["Sleepers", "PSC, spacing ~60 cm", "hold rails to gauge, transfer load"],
                ["Ballast", "20-50 mm stone, 150-250 mm", "drain water, resist movement"],
                ["Fastenings", "fish-plates, clips", "connect rails to sleepers"],
                ["Subgrade", "compacted embankment", "ultimate foundation"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Bridge classification by span",
              caption:
                "From culvert at the base to the longest cable-stayed bridge at the apex.",
              tiers: [
                { label: "Cable-stayed / suspension", note: "longest spans, > 500 m" },
                { label: "Major bridge", note: "span > 30 m" },
                { label: "Minor bridge", note: "span 6-30 m" },
                { label: "Culvert", note: "span < 6 m" },
              ],
            },
            callout: {
              type: "tip",
              title: "Ballast size and thickness are exam staples",
              body: "Memorise ballast as 20-50 mm size, 150-250 mm thick; sleeper spacing 60 cm; rail section 52/60 kg/m for broad gauge. These three numbers recur as short questions, and they are the parts that distinguish a railway from a road - the train's lateral guidance comes from rails + sleepers + ballast, not a surface layer.",
            },
            keyTerms: [
              { term: "Railway sleeper", definition: "A cross tie (timber, steel, prestressed concrete) laid under the rails at about 60 cm spacing, holding the rails to gauge and transferring load to the ballast." },
              { term: "Ballast", definition: "The bed of broken stone (20 to 50 mm size, 150 to 250 mm thick) under and around sleepers that drains water, holds sleepers in place and resists lateral track movement." },
              { term: "Pier", definition: "A substructure member rising from the foundation in mid-stream that supports the deck of a bridge between two adjacent spans." },
            ],
            examQuestions: [
              {
                q: "Describe the components of a railway track with their functions. Classify bridges by span and structural form with one example each.",
                marks: 7,
                outline: [
                  "Define railway track as a guided system; coned flanged wheels on steel rails.",
                  "Rails: 52/60 kg/m steel section per RDSO; carry load and guide wheels.",
                  "Sleepers: timber or prestressed concrete at ~60 cm spacing; hold rails to gauge, transfer load.",
                  "Ballast: 20-50 mm broken stone, 150-250 mm thick; drains water, resists movement.",
                  "Fastenings and subgrade complete the track; mention broad gauge 1676 mm.",
                  "Define bridge components: superstructure (deck), substructure (piers, abutments), foundation.",
                  "Classify by span: culvert < 6 m, minor 6-30 m, major > 30 m; by form: beam, arch, truss, suspension, cable-stayed.",
                ],
              },
              {
                q: "State the broad, metre and narrow gauge widths used in India.",
                marks: 2,
              },
              {
                q: "List any five components of a railway track with one function each.",
                marks: 3,
              },
            ],
          },
          // --- 4.3 ---
          {
            number: "4.3",
            title: "Dams (gravity, earthen) and canals",
            body: [
              "A dam is a barrier across a river that impounds water, raises its level and creates a reservoir for irrigation, water supply, hydropower, flood control, navigation or recreation. Dams are classified by material and by structural action. By material they are earthen, rock-fill, masonry, concrete; by structural action they are gravity dams (resist the water thrust by their own weight, the section roughly a right-angled triangle with the vertical water face), arch dams (transmit the water thrust to the abutments by arch action, used in narrow V-shaped gorges), buttress dams (a slab supported by buttresses), and earth or rock-fill embankment dams (resist by their weight and the shear strength of the fill, with an impervious core of clay and pervious shells of gravel and rock). The Bhakra concrete gravity dam is 226 m high; the Tehri rock-fill dam is 260 m.",
              "A gravity dam is dimensioned so that the resultant of the water thrust (a triangular pressure distribution peaking at the base) and the self-weight passes through the middle third of every horizontal section - a condition that prevents tension at the upstream face. Failure modes are overturning about the toe, sliding along the base, and compressive or shear overstress at the toe. An earthen dam is built in zones - an impervious central core of clayey soil, filter zones of graded sand and gravel to prevent piping, and pervious upstream and downstream shells of gravel and rock; the slope is flatter (1V : 2H to 1V : 3H) than a gravity dam. Freeboard above the maximum water level protects against wave run-up; relief drains and toe drains lower the phreatic line.",
              "A canal is an artificial channel that conveys water from a source (reservoir, river, barrage) to the command area for irrigation, water supply or navigation. It is classified as a main canal (carries water from the source, no direct irrigation), branch canal (off-takes from the main, distributes to distributaries), major and minor distributaries (carry water to outlets), and field channels (watercourses that deliver to individual fields). Canal structures include the headworks (weir or barrage with canal head regulator) at the source, cross-drainage works (aqueducts, siphon aqueducts, super-passages, level crossings) where the canal crosses a natural drain, falls where the canal bed drops (with energy dissipation), regulators for flow control, and outlets (or moghas) where water enters the field channel.",
            ],
            bullets: [
              "Dams by material: earthen, rock-fill, masonry, concrete; by action: gravity, arch, buttress, embankment.",
              "Gravity dam: resultant of water thrust + self-weight within middle third of every section.",
              "Earthen dam: impervious clay core, graded filters, pervious shells, slopes 1V:2H to 1V:3H.",
              "Canal types: main -> branch -> major/minor distributary -> field channel.",
              "Canal structures: headworks, cross-drainage (aqueduct, siphon, super-passage), falls, regulators, outlets.",
            ],
            table: {
              caption: "Dam types and their distinguishing feature.",
              headers: ["Type", "Action", "Site"],
              rows: [
                ["Gravity", "resists by self-weight", "wide valley, hard rock"],
                ["Arch", "transmits thrust to abutments", "narrow V gorge"],
                ["Buttress", "slab on buttresses", "wide valley, hard abutments"],
                ["Earthen", "embankment of compacted soil", "wide valley, soft foundation"],
                ["Rock-fill", "rock with impervious core", "wide valley, rock available"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a dam type",
              caption:
                "Valley shape and material availability decide the dam type.",
              start: "Dam site conditions",
              branches: [
                { label: "Narrow V-shaped gorge, strong abutments", outcome: "arch dam (thin, elegant)", good: true },
                { label: "Wide valley, hard foundation", outcome: "concrete gravity dam (massive, weight-resist)", good: true },
                { label: "Wide valley, soft foundation or loose material", outcome: "earthen / rock-fill embankment (zoned fill)", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "The middle-third rule",
              body: "For a gravity dam, the resultant of self-weight and water thrust must pass through the middle third of every horizontal section, else tension develops at the upstream face and cracks let water in. State this rule whenever you describe a gravity dam - it is the single most cited design principle and earns easy marks.",
            },
            keyTerms: [
              { term: "Gravity dam", definition: "A concrete or masonry dam that resists the horizontal water thrust by its own weight, dimensioned so the resultant force passes through the middle third of every horizontal section to avoid tension at the upstream face." },
              { term: "Earthen dam", definition: "An embankment dam of compacted soil with an impervious clay core and pervious shells of gravel and rock, resisting the water load by shear strength and weight." },
              { term: "Canal", definition: "An artificial channel that conveys water from a source (reservoir or river) to the command area, classified hierarchically from main canal to field channel." },
            ],
            examQuestions: [
              {
                q: "Classify dams with sketches. Describe a gravity dam and an earthen dam, and state the middle-third rule.",
                marks: 7,
                outline: [
                  "Define a dam as a barrier across a river that impounds water for various uses.",
                  "Classify by material: earthen, rock-fill, masonry, concrete.",
                  "Classify by action: gravity, arch, buttress, embankment; sketch each.",
                  "Gravity dam: resists water thrust by self-weight, section roughly triangular.",
                  "State the middle-third rule: resultant of weight + thrust through middle third of every horizontal section.",
                  "Earthen dam: impervious clay core, graded filters, pervious shells; slopes 1V:2H to 1V:3H.",
                  "Mention freeboard, toe drains to lower the phreatic line; cite Bhakra (gravity) and Tehri (rock-fill).",
                ],
              },
              {
                q: "State the middle-third rule for a gravity dam.",
                marks: 2,
              },
              {
                q: "List the classification of canals from main canal to field channel.",
                marks: 3,
              },
            ],
          },
          // --- 4.4 ---
          {
            number: "4.4",
            title: "Water supply - sources, treatment, distribution",
            body: [
              "A water supply system takes raw water from a source, treats it to drinking quality, and distributes it to consumers. Sources are surface (rivers, lakes, reservoirs, canals) and ground (wells, tube wells, springs, infiltration galleries). The choice depends on quantity, quality and proximity; surface sources generally need more treatment, ground sources are usually clearer but may have high dissolved salts (iron, fluoride, hardness). Intake structures (river intakes, canal intakes, reservoir intakes) draw water by gravity or pump; the raw water is conveyed to the treatment plant by gravity mains or rising mains. Design populations are projected for 30 years with per-capita demand 135 lpcd for urban domestic supply per IS 1172.",
              "Treatment of typical surface water follows the sequence of aeration (to remove dissolved gases, odour and iron), coagulation (adding alum or poly-electrolyte, 20 to 50 mg/L, to destabilise colloidal particles), flocculation (gentle stirring to form settleable flocs), sedimentation (settling of flocs in a clarifier at surface loading 20 to 40 m/day, removing 90% of suspended solids), filtration (rapid sand filters of 0.45 to 0.55 mm sand, 0.6 to 1 m deep, filtration rate 5 to 15 m/h, removing remaining turbidity and most bacteria), disinfection (chlorination with 1 to 3 mg/L chlorine, residual of 0.2 to 0.5 mg/L after a 30-minute contact time, or ozonation, UV), and fluoridation or softening where needed.",
              "Treated water is stored in a clear-water reservoir (CWR) below the treatment plant, then pumped into an elevated service reservoir or overhead tank (OHT) that provides 6 to 24 hours of storage and equalises demand. Distribution is by a network of pipes of three systems - dead-end or tree system (simple, cheap, dead-ends cause pollution), grid or ring system (no dead-ends, better circulation), and radial system (water radiates from a central OHT, good pressure). Pipe materials are cast iron (CI), ductile iron (DI), mild steel (MS), RCC (Hume pipes), HDPE and PVC (for small diameter); valves (sluice, air, reflux, scour) control flow; house connections tap from the street main through a ferrule and consumer meter.",
            ],
            bullets: [
              "Sources: surface (river, lake, reservoir, canal) and ground (well, tube well, spring, infiltration gallery).",
              "Treatment sequence: aeration -> coagulation (alum 20-50 mg/L) -> flocculation -> sedimentation -> filtration -> disinfection.",
              "Rapid sand filter: 0.45-0.55 mm sand, 0.6-1 m deep, 5-15 m/h; chlorination 1-3 mg/L, residual 0.2-0.5 mg/L.",
              "Distribution systems: dead-end (tree), grid (ring), radial; pipes CI, DI, MS, RCC, HDPE, PVC.",
              "Service reservoir / OHT: 6-24 h storage; per-capita demand 135 lpcd (urban), IS 1172.",
            ],
            table: {
              caption: "Water treatment stages with purpose and dose or size.",
              headers: ["Stage", "Purpose", "Dose / size"],
              rows: [
                ["Aeration", "remove gas and odour", "spray or trickling"],
                ["Coagulation", "destabilise colloids", "alum 20-50 mg/L"],
                ["Sedimentation", "settle flocs", "loading 20-40 m/day"],
                ["Filtration", "remove turbidity", "sand 0.45-0.55 mm, 5-15 m/h"],
                ["Disinfection", "kill bacteria", "chlorine 1-3 mg/L, residual 0.2-0.5 mg/L"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Conventional water treatment train",
              caption:
                "From raw water to clear-water reservoir in six stages.",
              steps: [
                { label: "Aeration", note: "remove dissolved gas, odour, iron" },
                { label: "Coagulation", note: "add alum 20-50 mg/L" },
                { label: "Flocculation + sedimentation", note: "form and settle flocs" },
                { label: "Rapid sand filtration", note: "0.45-0.55 mm sand, 5-15 m/h" },
                { label: "Disinfection", note: "chlorine residual 0.2-0.5 mg/L" },
                { label: "Clear-water reservoir", note: "pump to OHT and distribute" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the treatment sequence",
              body: "The six-stage treatment sequence - aeration, coagulation, flocculation, sedimentation, filtration, disinfection - is a guaranteed 7-mark question. Learn the order cold and add the dose figures (alum 20-50 mg/L, chlorine residual 0.2-0.5 mg/L) to convert a 5-mark answer into a 7-mark one.",
            },
            keyTerms: [
              { term: "Coagulation", definition: "The destabilisation of colloidal particles in raw water by adding a chemical (alum, 20-50 mg/L) so that they aggregate into settleable flocs during flocculation." },
              { term: "Rapid sand filter", definition: "A sand bed of 0.45-0.55 mm sand 0.6-1 m deep filtering water at 5-15 m/h to remove residual turbidity and most bacteria after sedimentation." },
              { term: "Distribution system", definition: "The pipe network that conveys treated water from the service reservoir to consumers, configured as dead-end, grid or radial layouts." },
            ],
            examQuestions: [
              {
                q: "State the sources of water supply. Describe with a flow diagram the conventional treatment of surface water, giving dose or size for each stage.",
                marks: 7,
                outline: [
                  "Sources: surface (rivers, lakes, reservoirs, canals) and ground (wells, tube wells, springs).",
                  "State per-capita demand 135 lpcd urban per IS 1172; project for 30-year design period.",
                  "Treatment stages in order: aeration, coagulation, flocculation, sedimentation, filtration, disinfection.",
                  "Coagulation dose: alum 20-50 mg/L destabilises colloids; flocculation forms settleable flocs.",
                  "Sedimentation surface loading 20-40 m/day; rapid sand filter 0.45-0.55 mm sand, 0.6-1 m, 5-15 m/h.",
                  "Disinfection: chlorination 1-3 mg/L, residual 0.2-0.5 mg/L, 30 min contact.",
                  "Draw flow diagram; close with storage in clear-water reservoir and distribution via OHT.",
                ],
              },
              {
                q: "State the per-capita water demand for urban domestic supply.",
                marks: 2,
              },
              {
                q: "Name the three distribution systems and one advantage of each.",
                marks: 3,
              },
            ],
          },
          // --- 4.5 ---
          {
            number: "4.5",
            title: "Sewerage systems and treatment",
            body: [
              "Sewerage is the system of underground pipes (sewers), manholes, pumping stations and appurtenances that collects wastewater from homes and industries and conveys it to a treatment plant. The wastewater is of two types: sanitary sewage (from water closets, baths, kitchens, industries, about 80% of the water supplied) and storm water (rainfall runoff from roofs, streets and surfaces). Sewers are designed to carry one or both: separate system (two pipe networks, one for sewage, one for storm water, common in new cities), combined system (one network carries both, common in old cities like Mumbai), and partially separate system (a compromise where storm water from clean roofs joins the sanitary sewer but dirty street runoff stays separate).",
              "Sewers are designed for self-cleaning velocity at peak flow - 0.6 to 0.9 m/s for sanitary sewers and 0.8 to 1.2 m/s for combined, to prevent deposition of solids. They are laid at a slope that produces this velocity at design peak flow; Manning's equation relates velocity to slope, hydraulic radius and roughness. Materials are vitrified clay, RCC (Hume), HDPE, and brick masonry for large sections; manholes are placed at every change of slope, diameter or direction and every 90 to 120 m for cleaning. Pumping stations lift sewage from low to high ground; the discharge may be to a nearby water body (after treatment) or to a treatment plant.",
              "Treatment aims to remove solids, organic matter, pathogens and nutrients before discharge. Primary treatment removes settleable and floating solids by screening (bars of 15 to 25 mm clear spacing), grit removal (chambers for 0.2 to 0.3 mm sand at 0.3 m/s), and primary sedimentation (60% suspended solids, 30% BOD removed). Secondary treatment biologically removes dissolved organics using an activated sludge process (aeration tank with mixed liquor, 4 to 8 hour aeration, secondary clarifier, return sludge) or trickling filters (a stone bed with biofilm, recirculation); it removes 85 to 95% of BOD. Tertiary treatment - nutrient removal, sand filtration, disinfection - polishes the effluent for sensitive discharge; sludge is anaerobically digested, dewatered and used as manure or landfill.",
            ],
            bullets: [
              "Sewerage = sewers + manholes + pumping; wastewater = sanitary sewage (~80% of supply) + storm water.",
              "Systems: separate, combined (old cities), partially separate.",
              "Self-cleaning velocity: 0.6-0.9 m/s sanitary, 0.8-1.2 m/s combined; Manning's equation sizes sewers.",
              "Materials: VC, RCC, HDPE; manholes every 90-120 m and at every change of slope, diameter, direction.",
              "Treatment: primary (screening, grit, sedimentation), secondary (activated sludge or trickling filter), tertiary.",
            ],
            table: {
              caption: "Sewage treatment stages and removal efficiency.",
              headers: ["Stage", "Process", "Removal"],
              rows: [
                ["Screening", "bar screens 15-25 mm", "rags, large solids"],
                ["Grit removal", "chambers, 0.3 m/s", "sand 0.2-0.3 mm"],
                ["Primary sedimentation", "clarifier, 1-2 h", "60% SS, 30% BOD"],
                ["Secondary (activated sludge)", "aeration 4-8 h, clarifier", "85-95% BOD"],
                ["Tertiary", "nutrient + sand + disinfect", "polish to sensitive discharge"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Separate vs combined sewerage",
              caption:
                "Two networks or one - the choice trades cost against pollution control.",
              left: {
                heading: "Separate system",
                items: [
                  "two pipe networks",
                  "sewage and storm water apart",
                  "treatment plant small, easy",
                  "common in new cities",
                  "higher capital cost",
                ],
              },
              right: {
                heading: "Combined system",
                items: [
                  "one pipe network",
                  "sewage + storm water together",
                  "treatment plant large, hard",
                  "common in old cities like Mumbai",
                  "overflows in heavy rain",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Don't merge the systems",
              body: "Confusing 'separate' and 'combined' sewerage is a common slip. Separate = two pipes, one for sewage one for storm water (clean, modern). Combined = one pipe for both (cheap for old cities but overflows in rain). Partially separate = clean roof runoff joins the sanitary pipe but dirty street runoff does not.",
            },
            keyTerms: [
              { term: "Self-cleaning velocity", definition: "The minimum velocity in a sewer (0.6-0.9 m/s for sanitary, 0.8-1.2 m/s for combined) that prevents deposition of solids; the sewer slope is fixed to produce it at peak flow." },
              { term: "Activated sludge process", definition: "A secondary biological treatment in which wastewater is aerated with a culture of microorganisms in an aeration tank, then settled in a secondary clarifier with return of sludge." },
              { term: "BOD (biochemical oxygen demand)", definition: "The mass of oxygen consumed by microorganisms degrading the organic matter in a sample over 5 days at 20 deg C; the chief measure of organic pollution removed by secondary treatment." },
            ],
            examQuestions: [
              {
                q: "Classify sewerage systems. Describe with a flow diagram the primary, secondary and tertiary treatment of sewage with one process and removal efficiency for each.",
                marks: 7,
                outline: [
                  "Define sewerage as the pipe system that collects and conveys wastewater to a treatment plant.",
                  "Classify systems: separate (two networks), combined (one network), partially separate.",
                  "State self-cleaning velocity 0.6-0.9 m/s sanitary, 0.8-1.2 m/s combined; Manning's slope.",
                  "Primary treatment: screening (bars 15-25 mm), grit removal (0.3 m/s), primary sedimentation (60% SS, 30% BOD).",
                  "Secondary treatment: activated sludge process (aeration 4-8 h, return sludge, secondary clarifier) or trickling filters; removes 85-95% BOD.",
                  "Tertiary treatment: nutrient removal, sand filtration, disinfection; sludge digested anaerobically.",
                  "Draw flow diagram; close with disposal to water body or land after treatment.",
                ],
              },
              {
                q: "What is self-cleaning velocity? State its value for sanitary sewers.",
                marks: 2,
              },
              {
                q: "Distinguish separate, combined and partially separate sewerage systems.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =================================================================
    // UNIT V - ESTIMATION, SAFETY AND DISASTER MANAGEMENT
    // =================================================================
    {
      number: 5,
      roman: "V",
      title: "Estimation, Safety and Disaster Management",
      summary:
        "Unit V closes the subject with estimation, safety and disaster management. Types of estimates and units of measurement open the unit; quantity takeoff basics deliver a worked brickwork and concrete calculation; specifications and construction safety cover PPE and site hazards; environmental impact assessment introduces the EIA process; and disaster management for earthquake, flood and fire plus smart-city concepts finish the syllabus.",
      chapter: {
        number: "05",
        title: "Estimation, Safety and Disaster Management",
        intro:
          "Unit V wraps the syllabus with the engineer's commercial and social duties. Estimating types and units of measurement lead into a worked quantity takeoff; specifications and construction safety cover PPE and the fatal four hazards; environmental impact assessment introduces the EIA process under the 2006 Notification; and disaster management for earthquake, flood and fire plus smart-city concepts close the unit.",
        sections: [
          // --- 5.1 ---
          {
            number: "5.1",
            title: "Types of estimates and units",
            body: [
              "Estimating is the process of computing the quantities of materials, labour and equipment needed for a work and their cost, before the work is executed. It is the basis on which a tender is invited, a contract is awarded and a budget is sanctioned. The principal types of estimate, in increasing detail, are the preliminary or approximate estimate (rough cost by area, volume or unit-rate methods, prepared at the concept stage), the plinth-area estimate (cost = plinth area x rate per m^2, for a quick sanction), the cube-rate estimate (cost = cubical content x rate per m^3, for tall buildings), the detailed estimate (item-wise quantities x unit rates, the most accurate, used for tendering), the supplementary estimate (for additions or alterations during execution), and the revised estimate (when the original is exceeded by more than 5%).",
              "The detailed estimate is supported by a set of documents: the main estimate abstract (a priced bill of quantities summarising each item with quantity, rate and amount), the detailed measurement sheet (where each item's quantity is computed from dimensions length, width, height with deductions for openings), the rate analysis sheet (which fixes the unit rate of each item from material, labour, equipment and overhead costs), and the drawings (plan, section, elevation) from which dimensions are taken. The total cost of the estimate is built up as direct cost (materials + labour + equipment) + overheads (5 to 10%) + contingency (3 to 5%) + profit (10 to 15% for a contractor) + GST as applicable.",
              "Units of measurement and modes of payment follow IS 1200. Earthwork in excavation is measured in cubic metres, paid by volume; concrete in foundations in cubic metres; brickwork in cubic metres with deductions for openings exceeding 0.1 m^2; RCC in slabs, beams and columns in cubic metres; plastering, pointing and formwork in square metres; flooring, tiling and painting in square metres; woodwork in doors and windows in cubic metres or by number; steel reinforcement by weight in quintals (100 kg) or tonnes; pipes by length in metres; fittings by number. A mode of payment specifies whether the rate is for the finished item inclusive of all materials and labour or for a part item; this prevents double counting.",
            ],
            bullets: [
              "Estimate types: preliminary (concept), plinth area, cube rate, detailed (tender), supplementary, revised (>5% cost overrun).",
              "Detailed estimate documents: abstract, detailed measurement sheet, rate analysis, drawings.",
              "Cost build-up: direct (material + labour + equipment) + overheads 5-10% + contingency 3-5% + profit 10-15% + GST.",
              "Units (IS 1200): earthwork, concrete, brickwork, RCC in m^3; plastering, flooring, painting in m^2.",
              "Steel by weight in quintals (100 kg) or tonnes; pipes in metres; fittings by number.",
            ],
            table: {
              caption: "Units of measurement per IS 1200.",
              headers: ["Item", "Unit", "Deduction rule"],
              rows: [
                ["Earthwork excavation", "m^3", "no deduction"],
                ["Concrete in foundation", "m^3", "no deduction"],
                ["Brickwork", "m^3", "deduct openings > 0.1 m^2"],
                ["Plastering / flooring", "m^2", "deduct openings > 0.5 m^2"],
                ["Steel reinforcement", "quintal (100 kg)", "by design bar weight"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Estimate types by purpose vs detail",
              caption:
                "The estimate evolves from rough (top-left) to accurate (bottom-right) as the project matures.",
              axes: { x: "Detail (low -> high)", y: "Stage (concept -> tender)" },
              quadrants: [
                { label: "Low detail, concept", note: "preliminary estimate" },
                { label: "High detail, concept", note: "plinth-area / cube-rate estimate" },
                { label: "Low detail, tender", note: "abstract / supplementary estimate" },
                { label: "High detail, tender", note: "detailed estimate + rate analysis" },
              ],
            },
            callout: {
              type: "tip",
              title: "Cost build-up percentages",
              body: "Memorise the standard cost build-up: direct cost + overheads 5-10% + contingency 3-5% + profit 10-15% for a contractor + GST. These percentages appear in short questions and are the basis of every rate analysis; get them right and the rest of the estimate follows.",
            },
            keyTerms: [
              { term: "Detailed estimate", definition: "An item-wise estimate that lists each work item with quantity, unit rate and amount, prepared from detailed drawings and used for tendering." },
              { term: "Rate analysis", definition: "The computation of the unit rate of a work item from the cost of materials, labour, equipment, overheads and profit, used to fix the rate in the detailed estimate." },
              { term: "Plinth area estimate", definition: "A quick approximate estimate prepared by multiplying the plinth area of the building by an adopted rate per square metre, used for early sanction of funds." },
            ],
            examQuestions: [
              {
                q: "Classify estimates by purpose and detail. Describe the documents of a detailed estimate and state the units of measurement for any five items per IS 1200.",
                marks: 7,
                outline: [
                  "Define estimating as computing quantities and cost before execution, the basis of tendering.",
                  "Preliminary / approximate estimate: rough cost at concept stage.",
                  "Plinth-area and cube-rate estimates: area or volume x rate, for sanction.",
                  "Detailed estimate: item-wise quantities x unit rates, the tendering estimate.",
                  "Documents: abstract, detailed measurement sheet, rate analysis, drawings.",
                  "Cost build-up: direct + overheads 5-10% + contingency 3-5% + profit 10-15% + GST.",
                  "Units per IS 1200: earthwork, concrete, brickwork, RCC in m^3; plastering, flooring, painting in m^2; steel in quintals.",
                ],
              },
              {
                q: "What is a plinth-area estimate and when is it used?",
                marks: 2,
              },
              {
                q: "State the units of measurement for earthwork, brickwork, plastering, RCC and steel per IS 1200.",
                marks: 3,
              },
            ],
          },
          // --- 5.2 ---
          {
            number: "5.2",
            title: "Quantity takeoff basics - brickwork and concrete",
            body: [
              "Quantity takeoff (QTO) is the heart of a detailed estimate - the computation of each item's quantity from the drawing dimensions. Two methods are used. The long-wall and short-wall method computes the length of each wall in two directions: long walls (out-to-out) and short walls (in-to-in), reducing the long-wall length by one wall thickness per storey and increasing the short-wall length similarly, and computing volume as length x breadth x height for each wall. The centre-line method computes the total length of all walls along their centre line (with adjustments at junctions for wall thickness), then multiplies by breadth and height; it is faster and less error-prone for symmetrical buildings with uniform wall thickness.",
              "A worked brickwork example makes the method concrete. Consider a rectangular room of internal size 4.0 m x 3.0 m, wall thickness 0.25 m, height 3.0 m, with one door 1.0 m x 2.1 m. Centre-line length = 2 x (4.0 + 0.25) + 2 x (3.0 + 0.25) = 2 x 4.25 + 2 x 3.25 = 8.5 + 6.5 = 15.0 m. Gross volume = 15.0 x 0.25 x 3.0 = 11.25 m^3. Deduction for the door = 1.0 x 2.1 x 0.25 = 0.525 m^3. Net brickwork volume = 11.25 - 0.525 = 10.725 m^3, say 10.73 m^3. Per IS 1200, openings up to 0.1 m^2 are not deducted; this door (2.1 m^2) must be deducted.",
              "A concrete takeoff follows the same logic. For an RCC slab of the same 4.25 m x 3.25 m room, thickness 0.12 m, the volume is 4.25 x 3.25 x 0.12 = 1.6575 m^3, say 1.66 m^3. For a 1:2:4 concrete, the material quantities per cubic metre are approximately cement 0.22 m^3 (about 6.4 bags of 50 kg), sand 0.44 m^3, coarse aggregate 0.88 m^3; for 1.66 m^3 of concrete, multiply by 1.66 - cement 10.6 bags, sand 0.73 m^3, aggregate 1.46 m^3. Reinforcement is taken as 1 to 2 percent of concrete volume by weight; with steel density 7850 kg/m^3 and 1.5% steel, the slab needs 1.66 x 0.015 x 7850 = 195 kg of steel.",
            ],
            bullets: [
              "QTO methods: long-wall short-wall (out-to-out + in-to-in) and centre-line (faster, symmetric).",
              "Centre-line worked: room 4 x 3 m, 0.25 m wall -> L = 15.0 m, gross 11.25 m^3.",
              "Door deduction 1.0 x 2.1 x 0.25 = 0.525 m^3; net brickwork = 10.73 m^3 (IS 1200: openings > 0.1 m^2 deducted).",
              "RCC slab 4.25 x 3.25 x 0.12 = 1.66 m^3; 1:2:4 per m^3: 6.4 bags cement, 0.44 sand, 0.88 coarse.",
              "Steel ~1-2% of concrete volume; 1.5% x 1.66 m^3 x 7850 kg/m^3 = 195 kg steel.",
            ],
            table: {
              caption: "Worked quantity takeoff for a 4 x 3 m room (0.25 m wall, 3 m height).",
              headers: ["Item", "Computation", "Quantity"],
              rows: [
                ["Centre-line length", "2 x 4.25 + 2 x 3.25", "15.00 m"],
                ["Gross brickwork", "15.0 x 0.25 x 3.0", "11.25 m^3"],
                ["Door deduction", "1.0 x 2.1 x 0.25", "0.525 m^3"],
                ["Net brickwork", "11.25 - 0.525", "10.73 m^3"],
                ["RCC slab", "4.25 x 3.25 x 0.12", "1.66 m^3"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Quantity takeoff pipeline from drawing to rate",
              caption:
                "Five stages from drawing to a priced bill of quantities.",
              stages: [
                { label: "Take dimensions from drawing", note: "length, breadth, height per IS 1200" },
                { label: "Compute centre-line length", note: "adjust at junctions" },
                { label: "Gross volume = L x B x H", note: "for each wall" },
                { label: "Deduct openings", note: "doors, windows > 0.1 m^2" },
                { label: "Multiply by rate analysis rate", note: "price the bill of quantities" },
              ],
            },
            callout: {
              type: "exam",
              title: "Centre-line is faster and exam-friendly",
              body: "For a symmetrical building with uniform wall thickness, the centre-line method needs one length, one breadth, one height - far fewer multiplications than the long-wall short-wall method. Use it for the worked brickwork question: draw the centre line, compute total length, multiply by breadth and height, then deduct openings.",
            },
            keyTerms: [
              { term: "Centre-line method", definition: "A quantity takeoff method that computes the total length of all walls along their centre line (adjusted at junctions) and multiplies by breadth and height, used for symmetrical buildings with uniform wall thickness." },
              { term: "Long-wall and short-wall method", definition: "A quantity takeoff method that computes long walls out-to-out and short walls in-to-in, adjusting lengths per storey, then multiplies by breadth and height." },
              { term: "Rate analysis", definition: "The breakdown of the unit rate of a work item into the cost of materials, labour, equipment, overheads and profit, supporting the detailed estimate." },
            ],
            examQuestions: [
              {
                q: "Describe the long-wall short-wall and centre-line methods of quantity takeoff. Compute the brickwork volume for a rectangular room 4 x 3 m internal, 0.25 m wall, 3 m high, with a door 1 x 2.1 m.",
                marks: 7,
                outline: [
                  "Define QTO as computing each item's quantity from drawing dimensions.",
                  "Long-wall short-wall method: long walls out-to-out, short walls in-to-in, adjust per storey.",
                  "Centre-line method: total length along centre line, multiply by breadth and height; faster for uniform walls.",
                  "Worked: room 4 x 3 m internal, wall 0.25 m -> centre-line = 2 x 4.25 + 2 x 3.25 = 15.0 m.",
                  "Gross volume = 15.0 x 0.25 x 3.0 = 11.25 m^3.",
                  "Deduct door: 1.0 x 2.1 x 0.25 = 0.525 m^3 (opening > 0.1 m^2 per IS 1200).",
                  "Net brickwork = 11.25 - 0.525 = 10.73 m^3.",
                ],
              },
              {
                q: "State the deduction rule for openings in brickwork per IS 1200.",
                marks: 2,
              },
              {
                q: "For 1 m^3 of 1:2:4 concrete, state the material quantities for cement, sand and coarse aggregate.",
                marks: 3,
              },
            ],
          },
          // --- 5.3 ---
          {
            number: "5.3",
            title: "Specifications and construction safety",
            body: [
              "Specifications describe in writing the quality of materials and workmanship required for each item of work; they complement the drawings and the bill of quantities and are part of the contract document. General specifications give a broad description of the work for the preliminary estimate (e.g. RCC M25 with OPC 43 grade, hydel iron sand, 20 mm aggregate, moderate exposure). Detailed specifications give the precise item description, materials with IS codes, proportions, mixing, laying, curing and acceptance tests, used in the tender document. Standard specifications are CPWD specifications and the National Building Code (NBC) of India; the IS codes 456 (RCC), 800 (steel), 1905 (masonry), 1200 (measurement) are routinely cited.",
              "Construction safety is the discipline of preventing injury, illness and loss during construction. The construction industry has among the highest accident rates of any industry; falls from height, struck-by falling objects, electrocution, caught-in machinery, and trench collapse are the fatal four causes per OSHA and the Building and Other Construction Workers (BOCW) Act, 1996 in India. Safety begins with a site safety plan that identifies hazards, defines safe work procedures, provides personal protective equipment (PPE), trains workers, appoints a safety officer for projects above a threshold cost, and reports and investigates every incident.",
              "PPE is the last line of defence after eliminating the hazard and engineering it out. The minimum PPE on site is a hard hat (IS 2925) for head protection against falling objects, safety shoes (IS 1989) with steel toe and anti-slip sole for foot protection, safety glasses (IS 5983) against flying chips and dust, a high-visibility vest for moving equipment, gloves for hand protection, ear plugs or muffs near plant and piling (noise above 85 dB), a full-body harness with lifeline for work above 1.8 m height, and respiratory protection against dust, fumes and silica. Scaffolds must be designed by a competent person, braced, planked, toe-boarded and fitted with guard rails; excavations above 1.5 m must be shored or battered.",
            ],
            bullets: [
              "Specification types: general (preliminary), detailed (tender), standard (CPWD, NBC).",
              "IS codes cited: 456 RCC, 800 steel, 1905 masonry, 1200 measurement; NBC of India.",
              "Construction fatal four: falls, struck-by, electrocution, caught-in/trench collapse.",
              "PPE: hard hat (IS 2925), safety shoes (IS 1989), safety glasses (IS 5983), harness above 1.8 m.",
              "Scaffolds by competent person, braced, guard rails; excavations > 1.5 m must be shored or battered.",
            ],
            table: {
              caption: "PPE for the construction fatal four hazards.",
              headers: ["Hazard", "PPE", "IS code"],
              rows: [
                ["Falling object", "hard hat + safety shoes", "IS 2925 / 1989"],
                ["Fall from height", "full-body harness + lifeline", "IS 3521"],
                ["Flying chips / dust", "safety glasses + respirator", "IS 5983"],
                ["Electrocution", "insulated gloves + boots", "IS 4770"],
                ["Noise > 85 dB", "ear plugs / muffs", "IS 9473"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "PPE selection by hazard",
              caption:
                "The PPE chosen branches with the dominant hazard on the task.",
              start: "Task and dominant hazard",
              branches: [
                { label: "Falling object / overhead", outcome: "hard hat IS 2925 + safety shoes", good: true },
                { label: "Height > 1.8 m", outcome: "full-body harness + lifeline", good: true },
                { label: "Flying chips / dust", outcome: "safety glasses IS 5983", good: true },
                { label: "Noise > 85 dB", outcome: "ear plugs or muffs", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "PPE is the last line, not the first",
              body: "Hierarchy of controls: eliminate the hazard, substitute, engineer (guard rails, machine guards), administer (training, permits), then PPE. A site that issues harnesses but no guard rails on a roof edge has inverted the hierarchy. Examiners reward this control order, not a bare list of PPE.",
            },
            keyTerms: [
              { term: "Detailed specification", definition: "A written description of a work item giving the materials with IS codes, proportions, mixing, laying, curing and acceptance tests, used in the tender document." },
              { term: "Personal protective equipment (PPE)", definition: "Equipment worn by a worker to protect against residual hazards after elimination and engineering controls, including hard hat, safety shoes, glasses, harness and respirator." },
              { term: "BOCW Act, 1996", definition: "The Building and Other Construction Workers Act of India that regulates safety, health and welfare of construction workers and mandates safety officers for projects above a threshold cost." },
            ],
            examQuestions: [
              {
                q: "Distinguish general and detailed specifications with examples. State the fatal four construction hazards and the PPE used to control each.",
                marks: 7,
                outline: [
                  "Define specifications as the written description of materials and workmanship; part of contract.",
                  "General specifications: broad description for preliminary estimate (e.g. RCC M25 with OPC 43).",
                  "Detailed specifications: item description, IS codes, proportions, mixing, curing, acceptance tests.",
                  "Reference CPWD specifications, NBC of India, IS 456, IS 800, IS 1905, IS 1200.",
                  "State the fatal four: falls from height, struck-by, electrocution, caught-in or trench collapse.",
                  "PPE: hard hat (IS 2925) for falling objects; harness for height > 1.8 m.",
                  "Safety glasses (IS 5983) for chips; ear protection for noise > 85 dB; mention BOCW Act 1996.",
                ],
              },
              {
                q: "What is the difference between a general and a detailed specification?",
                marks: 2,
              },
              {
                q: "List any five items of PPE with the IS code of each.",
                marks: 3,
              },
            ],
          },
          // --- 5.4 ---
          {
            number: "5.4",
            title: "Environmental impact basics",
            body: [
              "Environmental impact assessment (EIA) is the systematic process of identifying, predicting and evaluating the likely environmental, social and economic impacts of a proposed project before it is approved, so that the impacts can be mitigated or the project rejected. The EIA Notification of 2006 under the Environment (Protection) Act, 1986 governs EIA in India; it classifies projects into Category A (assessed by the central Ministry of Environment, Forest and Climate Change) and Category B (assessed by the state-level State Environment Impact Assessment Authority, SEIAA), based on the size and type. Construction of new townships, industrial estates, thermal power plants above 500 MW, mining, river valley projects and highways above certain lengths all require environmental clearance.",
              "The EIA process has well-defined stages. Screening decides whether a project needs EIA and at what category; scoping identifies the impacts to be studied and produces a Terms of Reference. Baseline data collection measures the existing environment (air, water, soil, noise, ecology, socio-economy) over three seasons (summer, monsoon, winter) at the site. Impact prediction uses mathematical or physical models to forecast how the project changes each baseline parameter; mitigation then proposes avoidance, minimisation or compensation (offset). The Environmental Management Plan (EMP) and Environmental Monitoring Plan operationalise mitigation during construction and operation. Public consultation, by the State Pollution Control Board, captures the concerns of affected people.",
              "Typical construction impacts and mitigations include air pollution from dust (mitigated by water sprinkling, dust suppressants, enclosed conveyors); water pollution from construction runoff and sanitation (settling tanks, silt fences, on-site sewage treatment); noise from plant and piling (acoustic enclosures, restricted hours, low-noise equipment); soil erosion and loss of topsoil (stockpiling topsoil, mulching, vegetation); loss of trees and habitat (compensatory afforestation at twice the felled count); and social impact (resettlement and rehabilitation per the LARR Act, 2013). The EIA report is appraised by an Expert Appraisal Committee; clearance, if granted, is valid for 10 years and carries conditions that are monitored for compliance throughout the project.",
            ],
            bullets: [
              "EIA Notification 2006 under Environment (Protection) Act 1986; Category A (centre), Category B (state SEIAA).",
              "EIA stages: screening, scoping (ToR), baseline (3 seasons), impact prediction, mitigation, EMP, public consultation.",
              "Projects needing clearance: townships, industrial estates, thermal power > 500 MW, river valley, mining.",
              "Impacts: air (dust), water (runoff), noise (plant), soil (erosion), ecology (trees), social (R&R per LARR 2013).",
              "Mitigations: water sprinkling, settling tanks, acoustic enclosures, compensatory afforestation (2:1).",
            ],
            table: {
              caption: "Typical construction impacts and mitigations.",
              headers: ["Impact", "Source", "Mitigation"],
              rows: [
                ["Air pollution", "construction dust", "water sprinkling, enclosed conveyors"],
                ["Water pollution", "runoff, sanitation", "settling tanks, silt fences, STP"],
                ["Noise", "plant, piling", "acoustic enclosures, restricted hours"],
                ["Soil erosion", "loss of topsoil", "stockpile, mulch, vegetation"],
                ["Loss of trees", "site clearing", "compensatory afforestation 2:1"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The EIA process cycle",
              caption:
                "The cycle runs from screening to monitoring - clearance is conditional, not a one-time approval.",
              steps: [
                { label: "Screening", note: "Category A or B?" },
                { label: "Scoping", note: "Terms of Reference" },
                { label: "Baseline data", note: "3 seasons" },
                { label: "Impact prediction", note: "by models" },
                { label: "Mitigation + EMP", note: "avoid, minimise, offset" },
                { label: "Public consultation + appraisal", note: "10-year clearance, monitored" },
              ],
            },
            callout: {
              type: "tip",
              title: "The 2006 Notification and the 3-season baseline",
              body: "Two facts RGPV asks repeatedly: the EIA Notification of 2006 under the Environment (Protection) Act 1986 governs the Indian process, and baseline data is collected over three seasons (summer, monsoon, winter) so that seasonal variation is captured. Lead any 7-mark EIA answer with these; the rest follows the screening-scoping-baseline-impact-mitigation chain.",
            },
            keyTerms: [
              { term: "Environmental impact assessment (EIA)", definition: "A systematic process under the EIA Notification 2006 of identifying, predicting and evaluating the likely environmental impacts of a proposed project before approval." },
              { term: "Category A and B projects", definition: "Classification under the 2006 EIA Notification; Category A is appraised by the central ministry, Category B by the state SEIAA, based on project size and type." },
              { term: "Environmental management plan (EMP)", definition: "A plan that operationalises mitigation measures during construction and operation of a project, including monitoring and reporting protocols." },
            ],
            examQuestions: [
              {
                q: "Define environmental impact assessment. State the stages of the EIA process under the 2006 Notification, and give any three construction impacts and their mitigation.",
                marks: 7,
                outline: [
                  "Define EIA as the systematic process of identifying, predicting and evaluating environmental impacts before approval.",
                  "Cite the EIA Notification of 2006 under the Environment (Protection) Act, 1986.",
                  "Categories A (central) and B (state SEIAA) by size and type.",
                  "Stages: screening, scoping (ToR), baseline data over 3 seasons, impact prediction, mitigation, EMP.",
                  "Public consultation by SPCB; appraisal by Expert Appraisal Committee; clearance valid 10 years.",
                  "Construction impacts: air pollution from dust (mitigate by water sprinkling, enclosed conveyors).",
                  "Water pollution from runoff (settling tanks, silt fences); noise from plant (acoustic enclosures).",
                ],
              },
              {
                q: "Under which Act and Notification is EIA governed in India?",
                marks: 2,
              },
              {
                q: "State any three stages of the EIA process in order.",
                marks: 3,
              },
            ],
          },
          // --- 5.5 ---
          {
            number: "5.5",
            title: "Disaster management and smart city concepts",
            body: [
              "A disaster is a sudden, calamitous event that seriously disrupts the functioning of a community or society and causes human, material, economic or environmental losses that exceed the community's ability to cope using its own resources. Disasters are natural (earthquake, flood, cyclone, drought, tsunami, landslide) or man-made (fire, industrial accident, terrorist attack, building collapse). The disaster management cycle, used by the National Disaster Management Authority (NDMA) under the Disaster Management Act, 2005, has four phases: mitigation and prevention (long-term measures to reduce vulnerability), preparedness (plans, training, early warning, stockpiling), response (rescue, relief, shelter during and immediately after the event), and recovery and reconstruction (rebuilding with mitigation built in).",
              "Earthquake hazard arises from the sudden release of strain energy accumulated at tectonic plate boundaries, sending seismic waves that shake the ground. India is divided into four seismic zones (II, III, IV, V) with V the most severe (MM intensity IX or more); the Himalayan belt and Kutch fall in zone V. Mitigation includes designing structures per IS 1893 (criteria for earthquake-resistant design) and IS 13920 (ductile detailing of RCC structures), soil and foundation study, avoiding soft soils and liquefiable sand, and city-level measures like open spaces and fire-station access. Flood hazard arises from heavy monsoon rain, river overflow, urban drainage failure or dam break; mitigation includes embankments, channel improvement, detention basins, floodplain zoning, forecasting by the Central Water Commission, and elevated foundations.",
              "Fire is the most common urban disaster; causes are electrical short-circuit, gas leak, arson, and ignition of stored combustibles. Fire safety per the National Building Code (NBC 2016, part 4) requires compartmentation by fire-rated walls and doors, two means of escape (one staircase, one fire escape), fire detectors (smoke, heat) and alarms, sprinkler and hydrant systems, fire lifts and refuge areas, and external access for fire tenders. Smart city concepts, per the Smart Cities Mission of 2015, integrate ICT for urban services: smart water meters detect leakage, smart grids balance power, intelligent transport systems ease congestion, CCTV improves safety, and a command centre integrates data for disaster response; each city of the mission is to have an area-based development plus a pan-city initiative.",
            ],
            bullets: [
              "Disaster cycle (NDMA, DM Act 2005): mitigation, preparedness, response, recovery.",
              "Seismic zones II to V (V severe); IS 1893 design + IS 13920 ductile detailing; soft soil avoided.",
              "Flood mitigation: embankments, channel improvement, detention basins, floodplain zoning, CWC forecasting.",
              "Fire safety per NBC 2016 part 4: compartmentation, 2 means of escape, detectors + alarms, sprinklers, hydrants.",
              "Smart Cities Mission 2015: ICT for water, power, transport, safety; area-based + pan-city initiatives.",
            ],
            table: {
              caption: "Disaster types and key mitigation measures.",
              headers: ["Disaster", "Cause / driver", "Key mitigation"],
              rows: [
                ["Earthquake", "tectonic plate strain release", "IS 1893 design + IS 13920 detailing"],
                ["Flood", "monsoon rain, river overflow", "embankments, floodplain zoning"],
                ["Fire", "short-circuit, gas leak", "compartmentation, sprinklers, NBC 2016"],
                ["Cyclone", "tropical storm", "shelter, wind-resistant design, warning"],
                ["Landslide", "slope instability", "drainage, retaining walls, vegetation"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Disaster management cycle as stacked layers",
              caption:
                "Reconstruction feeds back into mitigation - the cycle is closed-loop.",
              layers: [
                { label: "Mitigation and prevention", note: "long-term vulnerability reduction" },
                { label: "Preparedness", note: "plans, training, early warning" },
                { label: "Response", note: "rescue, relief, shelter" },
                { label: "Recovery and reconstruction", note: "rebuild with mitigation built in" },
              ],
            },
            callout: {
              type: "exam",
              title: "Lead with the four-phase cycle",
              body: "The disaster management cycle - mitigation, preparedness, response, recovery - is the spine of every disaster question. State it once, then illustrate each phase with earthquake (zone V + IS 1893), flood (embankments + CWC forecasting) and fire (NBC 2016 part 4 compartmentation). The cycle earns half the marks before any hazard detail.",
            },
            keyTerms: [
              { term: "Disaster management cycle", definition: "The four-phase cycle of mitigation, preparedness, response and recovery used by the NDMA to manage disasters, with reconstruction feeding back into mitigation." },
              { term: "Seismic zone", definition: "One of four seismic zones (II to V) into which India is divided by IS 1893, with zone V the most severe, used to set the design horizontal seismic coefficient for earthquake-resistant design." },
              { term: "Smart city", definition: "A city that uses information and communication technology to improve urban services - water, power, transport, safety - and integrates them at a command centre for efficiency and disaster response, per the Smart Cities Mission of 2015." },
            ],
            examQuestions: [
              {
                q: "Define a disaster. Describe the four phases of the disaster management cycle with one example each from earthquake, flood and fire hazards.",
                marks: 7,
                outline: [
                  "Define disaster as a sudden calamitous event causing losses beyond a community's coping capacity.",
                  "Classify: natural (earthquake, flood, cyclone) vs man-made (fire, industrial accident).",
                  "Cite the Disaster Management Act, 2005 and NDMA's four-phase cycle.",
                  "Mitigation phase: long-term vulnerability reduction - earthquake zones II-V + IS 1893 design.",
                  "Preparedness phase: plans, training, early warning - flood forecasting by CWC.",
                  "Response phase: rescue, relief, shelter - fire brigade and refuge areas per NBC 2016 part 4.",
                  "Recovery and reconstruction: rebuild with mitigation built in; close the loop back to mitigation.",
                ],
              },
              {
                q: "State the four seismic zones of India and identify the most severe.",
                marks: 2,
              },
              {
                q: "List any three fire safety measures required by the National Building Code 2016.",
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
      weightedTopics: [
        { topic: "Levelling: RL calculation by HI and rise-fall with arithmetic check", weight: "10-14 marks", note: "Almost guaranteed; practise 3-4 full levelling pages with the check." },
        { topic: "Cement: types, IS grades, field and lab tests with acceptance values", weight: "8-10 marks", note: "Vicat setting time, Le Chatelier soundness and dose figures earn the extra marks." },
        { topic: "Concrete: ingredients, water-cement ratio, IS 456 grades, slump test", weight: "8-10 marks", note: "Worked Abrams' law numbers and nominal-mix proportions are common sub-parts." },
        { topic: "Water supply: sources, treatment train, distribution systems", weight: "8-10 marks", note: "Six-stage treatment sequence with dose figures is the staple 7-mark." },
        { topic: "Quantity takeoff: centre-line method, brickwork and concrete worked", weight: "8-10 marks", note: "Draw centre line, compute length, multiply by B and H, deduct openings > 0.1 m^2." },
        { topic: "Building components and foundations: shallow vs deep, SBC", weight: "6-8 marks", note: "Foundation classification and SBC values of common soils are short-question favourites." },
        { topic: "Chain surveying: instruments, offsets, well-conditioned triangles", weight: "6-8 marks", note: "Field vs lab tests on bricks; field procedure five steps earn method marks." },
        { topic: "Compass survey: WCB vs RB conversion, local attraction", weight: "6-8 marks", note: "Four-quadrant conversion rules and the BB = FB +/- 180 deg check recur." },
        { topic: "Disaster management: cycle + earthquake, flood, fire", weight: "6-8 marks", note: "Four-phase cycle plus IS 1893, NBC 2016 part 4 and CWC forecasting." },
        { topic: "Estimating: types, units per IS 1200, cost build-up percentages", weight: "4-6 marks", note: "Overhead 5-10%, contingency 3-5%, profit 10-15% as a short question." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Unit I - civil materials", tasks: ["Bricks: IS 1077 classification, field and lab tests with acceptance values", "Cement: types, IS grades, Vicat setting time, Le Chatelier soundness", "Concrete: ingredients, water-cement ratio, IS 456 grades, slump test"] },
        { week: "Week 2", focus: "Unit II - building construction", tasks: ["Components and foundations: shallow vs deep types, SBC values", "Walls and damp-proofing: DPC at plinth, sources and remedies of dampness", "Doors, windows, floors, stairs; 2R + T rule; roofs and plastering"] },
        { week: "Week 3", focus: "Unit III - surveying part 1", tasks: ["Surveying classification, principles, plane vs geodetic, errors", "Chain survey: instruments, well-conditioned triangles, offsets, hinge booking", "Compass survey: WCB and RB, four-quadrant conversion, local attraction"] },
        { week: "Week 4", focus: "Unit III - surveying part 2 + Unit IV roads", tasks: ["Levelling: BS, IS, FS, CP; HI and rise-fall methods; 3 full worked pages", "Theodolite parts and temporary adjustments; total station definition", "Roads: Nagpur classification, pavement layers, flexible vs rigid"] },
        { week: "Week 5", focus: "Unit IV - water infrastructure + Unit V estimation", tasks: ["Railways, bridges; dams (gravity, earthen) and canals", "Water supply: sources, six-stage treatment, distribution; sewerage and treatment", "Estimates: types, documents, IS 1200 units; quantity takeoff worked example"] },
        { week: "Week 6", focus: "Safety, EIA, disasters + full revision", tasks: ["Specifications and PPE; fatal four hazards; BOCW Act 1996", "EIA: 2006 Notification, categories, stages, EMP; disaster cycle and smart city", "Two full past papers under exam timing; review arithmetic checks"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Re-draw the six-stage water treatment train, the road pavement layers and the building components stack from memory - the three diagrams most likely to appear.",
        "Re-solve one full levelling page end-to-end with the arithmetic check sum(BS) - sum(FS) = last RL - first RL.",
        "Re-solve the centre-line brickwork takeoff (4 x 3 m room, 0.25 m wall) and the 1:2:4 concrete material quantities per m^3.",
        "Memorise the three numerical trios: alum 20-50 mg/L with chlorine residual 0.2-0.5 mg/L; ballast 20-50 mm and 150-250 mm thick; OPC grades 33, 43, 53.",
        "Revise the four EIA stages (screening, scoping, baseline over 3 seasons, impact + mitigation) and the four disaster cycle phases.",
        "Sleep 7 hours; do not start a new topic on the last day.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Write definitions verbatim first (cement, surveying, bearing, levelling, EIA) - definition lines are marked separately from working.",
        "For the 7-mark levelling question, lay out the page as a table with columns Station, BS, IS, FS, HI, RL and write the arithmetic check at the bottom.",
        "For chain or compass questions, draw the figure first - the sketch prevents sign errors in WCB to RB conversion and in offset booking.",
        "Quote IS codes by number when relevant: IS 1077 (bricks), IS 456 (concrete grades), IS 1200 (measurement), IS 1893 (earthquake), NBC 2016 part 4 (fire).",
        "Time-box: 2-mark questions in 4 minutes, 3-mark in 6 minutes, 7-mark in 15 minutes; keep the last 10 minutes for the arithmetic-check pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Reversing the initial and final setting time inequalities: initial >= 30 min, final <= 600 min - long open time, short hardening time.",
        "Calling M25 the 'design strength' of the structure - it is the 28-day characteristic cube strength in MPa, not the structural design strength.",
        "Deducting all openings in brickwork - per IS 1200 only openings exceeding 0.1 m^2 are deducted; smaller ones stay.",
        "Confusing separate and combined sewerage: separate is two pipes (clean), combined is one pipe (overflows in rain).",
        "Computing the centre-line length as 2 x (L + B) of the room - that is the internal perimeter; the centre line uses external dimensions (L + wall) and (B + wall).",
        "Forgetting the arithmetic check on the levelling page; without it the answer is treated as incomplete and a mark is deducted.",
      ],
    },
  ],
};
