/**
 * Academics - RGPV Civil Engineering 6th-semester subject: CE-603(D)
 * Cost Effective & ECO-Friendly Structures.
 *
 * Structure mirrors subject-cs-302.ts: 5 units -> one chapter per unit ->
 * 5 numbered sections each (25 total).  Each section carries body
 * paragraphs, bullets, a diagram, key terms, a callout, a table or code
 * sample, and three exam-style questions (one 7-mark with outline + two
 * shorts).  A studyPlan array drives the Guide Me tab.
 */

import type { AcademicSubject } from "./types";

export const ce603d: AcademicSubject = {
  id: "ce-603-d",
  code: "CE-603(D)",
  title: "Cost Effective & ECO-Friendly Structures",
  semester: "VI Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to green building for civil engineers: sustainability principles and ratings, alternative materials from mud to bamboo, cost-effective masonry and slab technologies, passive design and energy efficiency, and rainwater harvesting with on-site waste management.",
  description:
    "Five units walk from the need for sustainability and the LEED/GRIHA rating systems through life cycle assessment and carbon footprinting, into alternative building materials (stabilised mud, fly ash, AAC, bamboo, ferro-cement, recycled aggregate and geopolymers), then across cost-effective technologies (rat-trap bond, filler slabs, arch foundations, precast channels, soil-cement blocks) with cost comparisons, into passive solar design, natural ventilation, daylighting, thermal comfort and green roofs, and finally through rooftop rainwater harvesting, recharge pits, greywater recycling, composting toilets and Indian case studies. Every section pairs the principle with a redrawable diagram and the questions RGPV actually asks.",
  accentColor: "#84cc16",
  emoji: "ECO",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Sustainable Construction Principles",
      summary:
        "The foundation of the subject: why construction must change, what a green building is, the two dominant rating systems (LEED and GRIHA), the life cycle assessment that quantifies environmental impact, and the carbon footprint of common construction materials.",
      chapter: {
        number: "01",
        title: "Sustainable Construction Principles",
        intro:
          "Unit I frames the environmental, regulatory and economic drivers of green building. It introduces the green building concept and its pillars, contrasts the American LEED and Indian GRIHA rating systems point by point, lays out the five stages of life cycle assessment, and quantifies the embodied carbon of cement, steel, brick and concrete.",
        inOneBreath:
          "Sustainability meets present needs without compromising future generations; the construction sector consumes ~40% of resources and emits ~33% of greenhouse gases; a green building optimises siting, materials, energy, water and waste across its whole life; LEED (USA, 110 points, 4 levels) and GRIHA (India, 100 points) rate performance; life cycle assessment has five stages - goal definition, inventory, impact, interpretation, improvement; cement emits ~0.85 t CO2 per tonne, steel ~1.8 t, brick ~0.3 t.",
        sections: [
          {
            number: "1.1",
            title: "Need for sustainability in construction",
            body: [
              "The construction sector consumes nearly forty percent of the world's natural resources and generates about one-third of global greenhouse gas emissions. Every tonne of cement releases roughly 0.85 tonnes of carbon dioxide, every fired brick consumes topsoil and kiln fuel, and every cubic metre of concrete locks in aggregates mined from riverbeds or hillsides. As populations urbanise, the demand for shelter, schools and hospitals pushes these impacts higher each year. Sustainability in construction is therefore not an aesthetic preference but an environmental necessity: buildings must deliver function and comfort while sharply reducing their demand on land, water, materials and energy.",
              "Sustainability means meeting present needs without compromising the ability of future generations to meet theirs. Applied to buildings, this principle demands three concurrent duties: reduce resource consumption through efficient design, reuse materials wherever possible to avoid virgin extraction, and recycle wastes such as fly ash, slag or demolished concrete back into new construction. A sustainable building is judged across its whole life - siting, design, construction, operation, renovation and demolition - and not merely on its first cost. The economics align with the ethics: lifecycle savings in energy, water and maintenance typically recover any green premium within five to ten years.",
              "The drivers of sustainable construction are regulatory, market and environmental. Governments enforce energy codes, environmental clearances and rating mandates; occupants prefer healthier, daylit, naturally ventilated spaces; and global climate commitments push nations to decarbonise the built environment. Cost-effective green structures address these drivers without forcing expensive imports: they lean on local materials, low-embodied-energy technologies, and passive design refined over centuries of vernacular architecture. The civil engineer's role is to choose technologies that minimise harm across the life cycle while keeping the project within the affordable housing bracket that India requires.",
            ],
            bullets: [
              "Construction uses ~40% of global resources and emits ~33% of greenhouse gases - the largest single-sector footprint.",
              "Three R's of sustainability: reduce consumption, reuse components, recycle wastes (fly ash, slag, demolished concrete).",
              "Whole-life view: siting, design, construction, operation, renovation, demolition - not just first cost.",
              "Cement emits ~0.85 t CO2 per tonne; steel ~1.8 t; fired brick ~0.3 t - quotable in any carbon question.",
              "Payback: green premium typically recovered in 5-10 years through energy, water and maintenance savings.",
              "Drivers: regulatory (codes, clearances), market (tenant preference), environmental (climate commitments).",
            ],
            table: {
              caption: "Environmental footprint of common construction materials (indicative).",
              headers: ["Material", "Embodied energy (MJ/kg)", "CO2 (t/t)", "Key concern"],
              rows: [
                ["Cement", "~4.6", "0.85", "Limestone mining, kiln fuel"],
                ["Structural steel", "~24", "1.80", "Blast-furnace emissions"],
                ["Fired clay brick", "~3.0", "0.30", "Topsoil loss, kiln coal"],
                ["AAC block", "~1.5", "0.10", "Cement binder only"],
                ["Bamboo", "~0.5", "0.05", "Renewable, low impact"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From resource extraction to building operation",
              caption:
                "Six stages where sustainability interventions can cut environmental load - learn the chain verbatim.",
              steps: [
                { label: "Resource extraction", note: "mining, quarrying, felling" },
                { label: "Material manufacture", note: "cement kiln, steel furnace, brick firing" },
                { label: "Transport to site", note: "diesel CO2 rises with distance" },
                { label: "Construction", note: "site waste, water, energy" },
                { label: "Operation (40-50 yr)", note: "lighting, cooling, heating, water" },
                { label: "Demolition & disposal", note: "landfill or recycling" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the headline numbers",
              body: "Examiners reward specific data: ~40% resource use, ~33% emissions, 0.85 t CO2 per t cement. Vague statements like 'construction pollutes a lot' lose marks. Memorise the four numbers above and cite them whenever a question asks 'why sustainable'.",
            },
            keyTerms: [
              { term: "Sustainability", definition: "Meeting present needs without compromising future generations' ability to meet theirs (Brundtland, 1987)." },
              { term: "Embodied energy", definition: "Total energy consumed to extract, manufacture, transport and install a material, usually in MJ/kg." },
              { term: "Green building", definition: "A building that optimises siting, materials, energy, water and waste across its whole life with minimal environmental impact." },
            ],
            examQuestions: [
              {
                q: "Explain the need for sustainability in construction. Discuss the environmental footprint of the construction sector and outline the three duties (reduce, reuse, recycle) with one civil-engineering example each.",
                marks: 7,
                outline: [
                  "Cite the headline numbers: ~40% resources, ~33% emissions, ~30% solid waste.",
                  "Explain Brundtland definition of sustainability applied to buildings.",
                  "Reduce: efficient structural design (limit slab thickness, optimise steel).",
                  "Reuse: salvaged doors, formwork, steel sections reinstalled without remanufacture.",
                  "Recycle: fly ash in bricks, slag in cement, demolished concrete as aggregate.",
                  "Mention Indian drivers: Energy Conservation Building Code, GRIHA mandate, climate commitments.",
                  "Conclude with payback: green premium recovered in 5-10 years through operational savings.",
                ],
              },
              {
                q: "State two environmental reasons why fired clay bricks should be replaced by fly ash bricks.",
                marks: 2,
              },
              {
                q: "What is embodied energy? Give typical values for cement and bamboo.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Green building concepts",
            body: [
              "A green building is one that, across its entire life cycle, minimises demand on natural resources, reduces harm to the environment, and provides a healthy indoor space for its occupants. The concept rests on five pillars: sustainable site planning, water efficiency, energy efficiency and atmosphere, materials and resources, and indoor environmental quality. Every green rating system rewards these five pillars through credits; a building earns a rating by accumulating credits across each category, with mandatory prerequisites that filter out non-compliant projects.",
              "The benefits of a green building split into environmental, economic and health buckets. Environmentally it saves 20-30% of energy, 30-50% of water, and reduces solid waste sent to landfill. Economically the payback is short: lower operating bills, higher rental yields, and longer asset life. Health benefits include daylit interiors, low-VOC finishes, fresh air ventilation and acoustic comfort, which together cut sick-leave and lift productivity by measurable margins. These gains come from integrated design: architect, structural engineer, services engineer and landscape architect collaborate from day one.",
              "Integrated design is the operational meaning of green building. Conventional design is linear: architect draws, structural engineer sizes, services engineer fits ducts last. Green design is iterative and concurrent: building orientation is fixed before form, fenestration before HVAC sizing, daylighting before lighting load. The structural engineer contributes by choosing low-embodied-energy materials (bamboo, AAC, fly ash), by limiting beam depths to allow cross-ventilation, and by designing slabs that double as thermal mass. Without this integration a building may carry a green rating but perform no better than a conventional one - the well-known 'green-wash' failure.",
            ],
            bullets: [
              "Five pillars: site, water, energy, materials, indoor environmental quality (IEQ).",
              "Typical savings: 20-30% energy, 30-50% water, measurable waste reduction to landfill.",
              "Three benefit buckets: environmental, economic (rent, yield, life), health (productivity, sick-leave).",
              "Integrated design replaces the linear architect-then-structural-then-services workflow.",
              "Orientation fixed before form; fenestration before HVAC; daylighting before lighting.",
              "Structural role: low-embodied materials, shallow beams for ventilation, slabs as thermal mass.",
              "Green-wash: a rated building that performs no better than conventional - integrated design prevents it.",
            ],
            table: {
              caption: "Five pillars of green building and how each is achieved.",
              headers: ["Pillar", "Target saving", "Achieved by"],
              rows: [
                ["Sustainable site", "Protect vegetation, soil", "Clustered footprint, rainwater recharge on site"],
                ["Water efficiency", "30-50% use reduction", "Low-flow fixtures, RWH, greywater recycling"],
                ["Energy efficiency", "20-30% load reduction", "Passive design, daylighting, efficient HVAC"],
                ["Materials & resources", "Low embodied energy", "Fly ash bricks, AAC, bamboo, recycled aggregate"],
                ["Indoor environmental quality", "Health, comfort", "Daylight, fresh air, low-VOC paints, acoustics"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Hierarchy of green building design priorities",
              caption:
                "Top tier sets the strategy; each lower tier operationalises it - never invert the order.",
              tiers: [
                { label: "Reduce demand (passive design first)", note: "orientation, shading, daylight" },
                { label: "Use efficient systems", note: "low-flow fixtures, LED, efficient HVAC" },
                { label: "Use renewable / recycled materials", note: "bamboo, fly ash, AAC, recycled aggregate" },
                { label: "On-site generation & harvesting", note: "solar PV, rainwater, greywater" },
                { label: "Offset only what remains", note: "carbon credits - last resort, not first" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sequence matters",
              body: "Always reduce demand before installing efficient systems, and exhaust passive options before adding renewables. A solar panel on a poorly oriented, badly shaded roof is green-wash. The pyramid order - reduce, use efficient, recycle, generate, offset - is examinable as the design hierarchy.",
            },
            keyTerms: [
              { term: "Green building", definition: "A building that minimises resource use and environmental harm across its life cycle while providing healthy indoor space." },
              { term: "Integrated design", definition: "Concurrent, iterative collaboration of architect, structural and services engineers from day one of the project." },
              { term: "Indoor environmental quality (IEQ)", definition: "Daylight, fresh air, low-VOC finishes and acoustics that determine occupant health and productivity." },
            ],
            examQuestions: [
              {
                q: "Define a green building. List its five pillars and explain the role of integrated design with a worked example of how the structural engineer contributes to green performance.",
                marks: 7,
                outline: [
                  "Define green building across its whole life cycle.",
                  "List the five pillars: site, water, energy, materials, IEQ.",
                  "Contrast linear design (architect-then-services) with integrated (concurrent) design.",
                  "Structural contribution 1: low-embodied-energy materials (AAC, fly ash, bamboo).",
                  "Structural contribution 2: shallow beams enabling cross-ventilation and services.",
                  "Structural contribution 3: slabs as thermal mass for passive cooling.",
                  "Conclude: without integration, ratings become green-wash; cite one case (e.g. Suzlon One Earth).",
                ],
              },
              {
                q: "Name the five pillars of a green building.",
                marks: 2,
              },
              {
                q: "State three benefits of a green building classified as economic.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "LEED and GRIHA rating systems",
            body: [
              "LEED (Leadership in Energy and Environmental Design) is the rating system developed by the U.S. Green Building Council and used worldwide. A LEED project accrues points across categories - location and transport, sustainable sites, water efficiency, energy and atmosphere, materials and resources, indoor environmental quality, and innovation - for a maximum of 110 points. The rating tiers are Certified (40-49), Silver (50-59), Gold (60-79) and Platinum (80+). LEED is prescriptive in many credits but flexible enough to admit Indian projects; it is the most recognised international label and often preferred for commercial and corporate buildings.",
              "GRIHA (Green Rating for Integrated Habitat Assessment) is India's own rating system, developed by TERI and adopted by the Ministry of New and Renewable Energy as the national benchmark. It scores out of 100 points across 34 criteria grouped into site planning, building planning and construction, and building operation and maintenance. A 1-star rating starts at 50 points; 5-star needs 90 or more. GRIHA is tuned to Indian climate, monsoon and grid realities: it weights passive design, local materials and water harvesting more heavily than LEED, and is mandatory for central government buildings above a certain size.",
              "The two systems differ in philosophy and granularity. LEED is point-and-prescription heavy with mandatory prerequisites; GRIHA is criteria-and-climate tuned with quantified energy and water targets. A project may pursue either or both; many Indian corporate offices carry both LEED Gold and GRIHA 4-star. For RGPV answers the key contrasts to remember are: LEED is American (110 points, 4 tiers), GRIHA is Indian (100 points, 5 stars); LEED prerequisite-plus-credit, GRIHA criteria-and-weighted; GRIHA mandates rainwater harvesting and on-site waste management; LEED mandates commissioning and measurement verification. Both award a label that lifts rental and resale value.",
            ],
            bullets: [
              "LEED: USA, 110 points, 4 tiers (Certified, Silver, Gold, Platinum); Platinum = 80+ points.",
              "GRIHA: India (TERI + MNRE), 100 points, 5 stars; 5-star = 90+ points.",
              "LEED categories: site, water, energy, materials, IEQ, location, innovation.",
              "GRIHA criteria: 34, grouped into site planning, building planning-construction, operation-maintenance.",
              "GRIHA weights RWH and on-site waste management more than LEED; tuned to monsoon and Indian climate.",
              "LEED mandatory prerequisites include commissioning and metering; GRIHA mandates RWH.",
              "Both labels lift rental yield and resale value; many Indian offices carry both.",
            ],
            table: {
              caption: "Side-by-side comparison of LEED and GRIHA.",
              headers: ["Feature", "LEED", "GRIHA"],
              rows: [
                ["Country of origin", "USA (USGBC)", "India (TERI + MNRE)"],
                ["Maximum points", "110", "100"],
                ["Rating tiers", "4 (Certified to Platinum)", "5 stars (1 to 5)"],
                ["Top tier threshold", "Platinum = 80+", "5-star = 90+"],
                ["Climate tuning", "Global, prescriptive", "Indian monsoon, passive-design weighted"],
                ["Mandatory", "Commissioning, metering", "Rainwater harvesting, on-site waste"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "LEED vs GRIHA at a glance",
              caption:
                "Two philosophies: prescription-heavy (LEED) vs criteria-and-climate (GRIHA).",
              left: {
                heading: "LEED (USA)",
                items: [
                  "110 points across 8 categories",
                  "4 rating tiers (Certified-Silver-Gold-Platinum)",
                  "Prerequisites plus optional credits",
                  "Global, prescriptive",
                  "Platinum threshold = 80 points",
                ],
              },
              right: {
                heading: "GRIHA (India)",
                items: [
                  "100 points across 34 criteria",
                  "5 star levels (1-star to 5-star)",
                  "Weighted criteria, not prerequisites",
                  "Monsoon and passive-design tuned",
                  "5-star threshold = 90 points",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not mix the two",
              body: "A common slip is to write 'GRIHA awards Platinum'. Platinum is LEED's top tier; GRIHA's top is 5-star. Quote each system's correct tier name. Examiners notice this swap and deduct a full mark.",
            },
            keyTerms: [
              { term: "LEED", definition: "Leadership in Energy and Environmental Design - 110-point USGBC rating with four tiers (Certified, Silver, Gold, Platinum)." },
              { term: "GRIHA", definition: "Green Rating for Integrated Habitat Assessment - India's 100-point national rating with five star levels, developed by TERI and MNRE." },
              { term: "Credit / Criterion", definition: "A scoring line within a rating system; LEED uses credits with prerequisites, GRIHA uses 34 weighted criteria." },
            ],
            examQuestions: [
              {
                q: "Compare LEED and GRIHA rating systems. State origin, maximum points, rating tiers, top-tier threshold and two mandatory requirements of each, and mention when an Indian project would prefer GRIHA over LEED.",
                marks: 7,
                outline: [
                  "LEED: USA (USGBC), 110 points, 4 tiers (Certified to Platinum), top = Platinum at 80+.",
                  "GRIHA: India (TERI + MNRE), 100 points, 5 stars, top = 5-star at 90+.",
                  "LEED mandatory: fundamental commissioning, energy metering and verification.",
                  "GRIHA mandatory: rainwater harvesting, on-site solid waste management.",
                  "LEED is prescriptive and global; GRIHA is criteria-and-weighted, monsoon and climate tuned.",
                  "Indian project prefers GRIHA for central government work (mandatory) and for monsoon-tuned passive design.",
                  "Both labels lift rental and resale; many Indian offices carry both LEED Gold and GRIHA 4-star.",
                ],
              },
              {
                q: "State the maximum points and top-tier name for LEED.",
                marks: 2,
              },
              {
                q: "Name any three GRIHA criteria grouped under site planning.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Life cycle assessment (LCA)",
            body: [
              "Life cycle assessment is a systematic method to quantify the environmental impact of a product, process or building across its entire life - from raw material extraction to final disposal. The framework, formalised by ISO 14040 and 14044, has four iterative stages: goal and scope definition, inventory analysis, impact assessment, and interpretation. For buildings the scope usually covers cradle-to-grave: material extraction (cradle), manufacture, transport, construction, operation, maintenance, demolition and disposal or reuse (grave); narrower scopes such as cradle-to-gate suit material comparisons.",
              "In the inventory stage every input (energy, water, raw materials) and every output (emissions to air, water, land) is catalogued - this is the life cycle inventory (LCI). The impact stage translates this inventory into effect categories: global warming potential (kg CO2-equivalent), acidification, eutrophication, ozone depletion, resource depletion and human toxicity. Each emission is multiplied by a characterisation factor; for example methane has a 100-year global warming potential of about 28, so 1 kg of methane counts as 28 kg CO2-eq. The interpretation stage identifies hotspots - the life stage or material that dominates impact - and drives improvement decisions.",
              "LCA results drive real design choices. A cradle-to-grave comparison of steel versus concrete framing may show steel's higher manufacture impact offset by its recyclability at end of life; a comparison of fired brick versus fly ash brick shows fly ash brick winning on every category because it consumes no topsoil and no kiln fuel. LCA is also the basis for environmental product declarations (EPDs) that rating systems reward. For the civil engineer the workflow is: define functional unit (1 sqm of wall for 50 years), gather inventory data from suppliers and databases (ICE, ecoinvent), compute impacts per category, identify the hotspot, and redesign - a cycle that returns to the goal-and-scope stage whenever a design changes.",
            ],
            bullets: [
              "LCA framework: ISO 14040 (principles) and 14044 (requirements).",
              "Four stages: goal-scope, inventory (LCI), impact assessment (LCIA), interpretation.",
              "Cradle-to-grave covers extraction to disposal; cradle-to-gate stops at factory exit.",
              "Impact categories: global warming, acidification, eutrophication, ozone depletion, toxicity.",
              "GWP factor: methane ~28 kg CO2-eq over 100 years; CO2 = 1 by definition.",
              "Hotspot = the life stage or material that dominates total impact - the redesign target.",
              "EPD (environmental product declaration) is a standardised LCA summary rewarded by LEED and GRIHA.",
            ],
            table: {
              caption: "Four stages of LCA per ISO 14040/14044.",
              headers: ["Stage", "Input", "Output"],
              rows: [
                ["Goal and scope", "Functional unit, system boundaries", "Study plan, intended audience"],
                ["Inventory (LCI)", "Energy, water, material flow data", "Emissions and waste catalogue"],
                ["Impact assessment (LCIA)", "LCI + characterisation factors", "Category scores (kg CO2-eq, etc.)"],
                ["Interpretation", "Category scores, sensitivity", "Hotspots, improvement actions"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The four-stage LCA cycle",
              caption:
                "Interpretation feeds back to goal and scope - LCA is iterative, not linear.",
              steps: [
                { label: "Goal and scope", note: "functional unit, boundaries" },
                { label: "Inventory analysis (LCI)", note: "inputs and outputs catalogued" },
                { label: "Impact assessment (LCIA)", note: "category scores computed" },
                { label: "Interpretation", note: "hotspots identified" },
                { label: "Redesign", note: "loop back to goal and scope" },
                { label: "Improvement", note: "lower-impact design locked in" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the ISO, name the stages",
              body: "LCA answers must open with 'per ISO 14040/14044' and list the four stages in order: goal-scope, inventory, impact, interpretation. Skipping the ISO citation or the iteration loop is the most common lost mark in 7-mark LCA questions.",
            },
            keyTerms: [
              { term: "Life cycle assessment (LCA)", definition: "A systematic method per ISO 14040/14044 to quantify environmental impact across a product's whole life." },
              { term: "Functional unit", definition: "The quantified function of a product used as the comparison basis in LCA, e.g. 1 sqm of wall for 50 years." },
              { term: "Global warming potential (GWP)", definition: "An impact category measuring greenhouse effect in kg CO2-equivalent; methane ~28 over 100 years." },
            ],
            examQuestions: [
              {
                q: "Define life cycle assessment. State the governing ISO standards and explain the four stages of LCA with reference to comparing fired clay brick with fly ash brick.",
                marks: 7,
                outline: [
                  "Define LCA as cradle-to-grave environmental quantification per ISO 14040/14044.",
                  "Stage 1 goal-scope: functional unit = 1 sqm of wall for 50 years; boundary cradle-to-grave.",
                  "Stage 2 LCI: catalogue inputs (clay, coal, fly ash, cement) and outputs (CO2, kiln emissions).",
                  "Stage 3 LCIA: compute GWP, acidification, resource depletion per category.",
                  "Stage 4 interpretation: fired brick's hotspot is kiln firing and topsoil loss; fly ash brick wins all categories.",
                  "Mention EPD as the standardised output and LEED/GRIHA credit for EPDs.",
                  "Note iteration: redesign loops back to goal-scope, e.g. switch to fly ash brick.",
                ],
              },
              {
                q: "What is a functional unit? Give one example for a walling material.",
                marks: 2,
              },
              {
                q: "State the global warming potential of methane over 100 years.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Carbon footprint of construction",
            body: [
              "The carbon footprint of a building is the total greenhouse gas emissions, expressed in tonnes of CO2-equivalent, released across its life cycle. It splits into embodied carbon (emissions from material extraction, manufacture, transport and construction) and operational carbon (emissions from energy used in operation - lighting, cooling, heating, equipment). For a conventional Indian office building the split is roughly 30:70 embodied to operational over a 50-year life, but as operations become more efficient through passive design, embodied carbon grows to dominate - often more than half of the lifetime total - and becomes the priority reduction target.",
              "Cement is the single largest contributor to embodied carbon: roughly 0.85 tonnes of CO2 per tonne of cement, with about half from calcination (limestone decomposing to lime and CO2) and half from kiln fuel. Structural steel adds about 1.8 tonnes CO2 per tonne if blast-furnace made, dropping to 0.4 if electric-arc recycled. Fired brick contributes about 0.3 tonnes CO2 per tonne, mostly from kiln coal. The engineer can cut embodied carbon by replacing Portland cement with fly-ash-blended PPC (30-50% replacement), specifying recycled steel, switching to fly ash or AAC blocks, and designing sections to use material only where structurally needed - a 20% reduction in cement alone cuts lifetime emissions significantly.",
              "Operational carbon is reduced by passive design (orientation, shading, daylight, ventilation) and by efficient active systems (LED, 5-star HVAC, smart controls). The combined strategy - low-embodied materials, passive design, efficient systems, on-site renewables - can cut a building's lifetime carbon footprint by 40-60% against a conventional baseline. Carbon footprinting follows the LCA framework of section 1.4 but focuses on the single impact category of global warming potential; the calculation sums each material's mass times its embodied emission factor and adds operational energy times the grid emission factor (about 0.7 kg CO2 per kWh in India).",
            ],
            bullets: [
              "Carbon footprint = total kg CO2-eq across the building life, split embodied + operational.",
              "Typical office split: ~30% embodied, ~70% operational over 50 years; share shifts as operations improve.",
              "Cement emits ~0.85 t CO2/t (half calcination, half kiln fuel) - the single biggest material hotspot.",
              "Steel: ~1.8 t CO2/t blast-furnace; ~0.4 t CO2/t electric-arc recycled.",
              "Cuts: PPC with 30-50% fly ash, recycled steel, fly ash/AAC blocks, optimised sections.",
              "Grid emission factor ~0.7 kg CO2/kWh in India - use to convert operational energy to carbon.",
              "Combined strategy cuts lifetime footprint by 40-60% against a conventional baseline.",
            ],
            codeExample: {
              language: "python",
              caption: "Embodied carbon of 1 cubic metre of M25 RCC (illustrative).",
              code: [
                "# Embodied carbon of 1 cu.m of M25 RCC (kg CO2)",
                "materials = {",
                "    'cement':   (0.35, 0.85),  # 0.35 t cement, 0.85 t CO2/t",
                "    'steel':    (0.10, 1.80),  # 0.10 t steel, 1.80 t CO2/t",
                "    'aggregate':(0.90, 0.005), # 0.90 t coarse aggregate",
                "    'sand':     (0.45, 0.004), # 0.45 t fine aggregate",
                "}",
                "total_kg = sum(mass * factor * 1000 for mass, factor in materials.values())",
                "print(f'Embodied CO2 per cu.m of M25 RCC ~ {total_kg:.0f} kg')",
                "# With 50% fly-ash replacement in cement:",
                "cement_factor_ppc = 0.85 * 0.5 + 0.0 * 0.5  # fly ash ~0",
                "total_ppc = 0.35*cement_factor_ppc*1000 + 0.10*1.80*1000",
                "total_ppc += 0.90*0.005*1000 + 0.45*0.004*1000",
                "print(f'With 50% fly-ash cement ~ {total_ppc:.0f} kg CO2')"
              ].join("\n"),
            },
            diagram: {
              kind: "fork",
              title: "Choosing a carbon-reduction strategy",
              caption:
                "Pick the branch with the largest saving first - cement, then steel, then operations.",
              start: "Carbon hotspot identified",
              branches: [
                { label: "Cement dominant", outcome: "Switch to PPC (30-50% fly ash) or geopolymer", good: true },
                { label: "Steel dominant", outcome: "Specify electric-arc recycled steel", good: true },
                { label: "Operations dominant", outcome: "Passive design + 5-star HVAC + LED", good: true },
                { label: "All balanced", outcome: "Combined strategy cuts 40-60% lifetime", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Operational vs embodied split",
              body: "Do not claim 'operations dominate' without a timeframe. Over a 50-year life of a conventional building operations dominate; over a 10-year horizon or for a passive building, embodied carbon dominates. Always state the assumed life before quoting the split.",
            },
            keyTerms: [
              { term: "Carbon footprint", definition: "Total kg CO2-equivalent emitted across a building's life, split into embodied and operational." },
              { term: "Embodied carbon", definition: "Emissions from material extraction, manufacture, transport and construction - upfront and fixed." },
              { term: "Operational carbon", definition: "Emissions from energy used in operation, computed as energy x grid emission factor (~0.7 kg CO2/kWh in India)." },
            ],
            examQuestions: [
              {
                q: "Define carbon footprint of a building. Explain the embodied-versus-operational split over a 50-year life, give the embodied emission factors of cement and steel, and outline three strategies to reduce embodied carbon.",
                marks: 7,
                outline: [
                  "Define carbon footprint as kg CO2-eq across the life cycle.",
                  "Split: embodied (~30%) and operational (~70%) for a conventional office over 50 years.",
                  "Cement ~0.85 t CO2/t (half calcination, half kiln fuel); steel ~1.8 t CO2/t blast-furnace.",
                  "Strategy 1: replace OPC with PPC (30-50% fly ash) or geopolymer; cuts cement carbon ~30%.",
                  "Strategy 2: specify recycled electric-arc steel (0.4 t CO2/t) instead of virgin.",
                  "Strategy 3: optimise structural sections - material only where needed, shallower beams, filler slabs.",
                  "Note combined strategy cuts lifetime footprint by 40-60%; quote grid factor ~0.7 kg CO2/kWh for operational.",
                ],
              },
              {
                q: "State the embodied carbon factor of cement in t CO2 per tonne.",
                marks: 2,
              },
              {
                q: "Why does embodied carbon grow as a share of lifetime footprint in a passive building?",
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
      title: "Alternative Building Materials",
      summary:
        "Low-embodied-energy alternatives to fired brick, cement and steel: stabilised mud blocks, fly ash bricks, AAC blocks, bamboo as a structural material, ferro-cement panels, recycled aggregate concrete and geopolymers - each with its property profile, manufacturing route and best use.",
      chapter: {
        number: "02",
        title: "Alternative Building Materials",
        intro:
          "Unit II surveys the materials that make cost-effective green construction possible. It covers the production and properties of stabilised mud blocks, fly ash and AAC blocks, the structural use of bamboo, ferro-cement technology, recycled aggregate concrete, and the emerging family of geopolymers - each chosen because it replaces a high-embodied-energy conventional material.",
        inOneBreath:
          "Stabilised mud blocks add 5% cement to local soil and press-cure into 3-5 MPa blocks; fly ash bricks use thermal-plant waste with lime/cement and press into 7-10 MPa units; AAC blocks (3-4 MPa, 500-700 kg/cu.m) are steam-cured aerated concrete for non-load-bearing walls; bamboo has tensile strength ~140 MPa and grows in 3-5 years; ferro-cement uses 2-3 mm mesh in rich mortar for thin curved shells; recycled aggregate concrete achieves 80-90% of conventional strength with 30% replacement; geopolymers replace 100% cement with fly-ash + alkali activator.",
        sections: [
          {
            number: "2.1",
            title: "Stabilised mud blocks and soil-cement technology",
            body: [
              "Stabilised mud blocks (SMBs) are walling units made by adding a small percentage of stabiliser - usually 3-7% cement or 5-10% lime - to local subsoil, pressing the mix in a manual or hydraulic press, and curing under damp hessian for seven to twenty-eight days. The stabiliser bonds the clay and silt particles into a water-resistant matrix; without it, sun-dried blocks dissolve in rain. SMBs achieve compressive strengths of 2-5 MPa, sufficient for load-bearing walls up to two storeys, at roughly half the cost and one-third the embodied energy of fired bricks.",
              "Production begins with soil testing: the ideal soil has 15-25% clay (for binding), 20-30% silt, and 45-60% sand (for body). Soils with too much clay shrink and crack; too much sand gives weak blocks. Cement is added at 4-7% by weight for sandy soils, lime at 5-10% for clayey soils, and the optimum moisture content is determined by a Proctor test. Mixing is mechanical; pressing uses a manual machine (the Auram press) or a hydraulic press; blocks are stacked, covered with wet hessian, and cured for at least seven days. The blocks are laid in mud or cement mortar; exposed walls need a stabilised render or a 6 mm coat of cement-lime plaster.",
              "SMB technology is the backbone of rural and affordable housing because it uses the soil already on site, eliminates the kiln entirely, and gives a finished wall at one-third to one-half the cost of fired brick. Its limitations are real: blocks must be protected from prolonged wetting (a damp-proof course at plinth is essential), pressing demands consistent moisture control, and the curing period delays the schedule. Laurie Baker popularised SMB in India through the Costford network; the Auroville Earth Institute refined pressed-earth technology with 5-8% cement and achieves walls of striking thermal mass. The same press can also produce interlocking blocks that need no mortar.",
            ],
            bullets: [
              "SMB = local soil + 3-7% cement (or 5-10% lime) + press + damp cure.",
              "Ideal soil gradation: 15-25% clay, 20-30% silt, 45-60% sand.",
              "Compressive strength 2-5 MPa; suited to 2-storey load-bearing walls.",
              "Cost ~50% and embodied energy ~33% of fired brick - no kiln, no topsoil loss.",
              "Cure 7-28 days under wet hessian; protect with render or 6 mm cement-lime plaster.",
              "Limitation: needs damp-proof course; prolonged wetting degrades uncapped walls.",
              "Auram press (manual) and Aureka press (hydraulic) are the Indian standards; interlocking blocks need no mortar.",
            ],
            table: {
              caption: "Stabiliser selection by soil type.",
              headers: ["Soil type", "Clay %", "Stabiliser", "Dose %", "Resulting strength"],
              rows: [
                ["Sandy", "5-15", "Cement", "4-7", "3-5 MPa"],
                ["Loamy", "15-25", "Cement + lime", "3-5 + 2-4", "3-4 MPa"],
                ["Clayey", "25-40", "Lime", "5-10", "2-3 MPa"],
                ["Black cotton", ">40", "Lime + fly ash", "6-10 + 5", "1.5-2.5 MPa"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Stabilised mud block production",
              caption:
                "Six stages from soil test to laid wall - reproduce the order in any exam answer.",
              stages: [
                { label: "Soil testing", note: "gradation, clay-silt-sand split" },
                { label: "Stabiliser dosing", note: "cement 4-7% or lime 5-10%" },
                { label: "Mixing at OMC", note: "Proctor-optimum moisture" },
                { label: "Pressing", note: "Auram manual or hydraulic press" },
                { label: "Curing 7-28 days", note: "wet hessian, no sun" },
                { label: "Laying + render", note: "mortar + 6 mm plaster or DPC cap" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite the clay band",
              body: "Answers that say 'use any local soil' lose marks. The ideal gradation is 15-25% clay, 20-30% silt, 45-60% sand. Too much clay cracks on drying; too much sand gives weak blocks. Quote the band and the stabiliser dose that follows.",
            },
            keyTerms: [
              { term: "Stabilised mud block (SMB)", definition: "A pressed earth block with 3-7% cement or 5-10% lime added to local soil to bond clay and resist water." },
              { term: "Stabiliser", definition: "A binder (cement, lime, fly ash, geopolymer) added to soil to bind fine particles and reduce water sensitivity." },
              { term: "Optimum moisture content (OMC)", definition: "The water content giving maximum dry density in a Proctor test, used for pressing stabilised blocks." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacture, properties and limitations of stabilised mud blocks. Give the ideal soil gradation, stabiliser doses for sandy and clayey soils, and one Indian case where SMB was used at scale.",
                marks: 7,
                outline: [
                  "Define SMB: local soil + 3-7% cement (or 5-10% lime) pressed and cured 7-28 days.",
                  "Ideal gradation: 15-25% clay, 20-30% silt, 45-60% sand - too much clay cracks, too much sand weakens.",
                  "Sandy soil: cement 4-7%, strength 3-5 MPa; clayey: lime 5-10%, strength 2-3 MPa.",
                  "Strength 2-5 MPa suits 2-storey load-bearing walls.",
                  "Production stages: test, dose, mix at OMC, press (Auram/Aureka), cure, lay.",
                  "Limitations: damp-proof course mandatory; prolonged wetting degrades uncapped walls; 7-day curing delays schedule.",
                  "Case: Laurie Baker / Costford housing in Kerala; Auroville Earth Institute for higher-cement interlocking blocks.",
                ],
              },
              {
                q: "What stabiliser is recommended for a clayey soil and at what dose?",
                marks: 2,
              },
              {
                q: "State three advantages of SMB over fired clay brick.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Fly ash bricks and AAC blocks",
            body: [
              "Fly ash bricks are solid walling units made from thermal power-plant fly ash (60-80%), sand or bottom ash (10-20%), lime or cement (10-20%) and gypsum (up to 3%), pressed and water-cured for at least 21 days. The lime and cement react with the pozzolanic fly ash to form calcium-silicate-hydrate, giving a compressive strength of 7-10 MPa at a density of 1500-1700 kg per cubic metre. Each brick consumes about 1 kg of fly ash that would otherwise go to landfill; a typical 250 MW plant's ash can feed a brick yard producing a million bricks a month.",
              "Autoclaved aerated concrete (AAC) blocks are lightweight precast walling units made from cement, fly ash or sand, lime, gypsum, a small aluminium powder dose, and water. The aluminium reacts with lime to release hydrogen, aerating the slurry to double its volume; the cake is steam-cured (autoclaved) at 180-200 Celsius for 8-12 hours, giving a honeycomb microstructure. AAC achieves 3-5 MPa compressive strength at 500-700 kg per cubic metre - one-third the weight of fired brick - and a thermal conductivity of about 0.16 W per metre-Kelvin, four times better than brick. Sizes range up to 600 x 200 x 100-250 mm; one AAC block replaces eight to ten bricks.",
              "Fly ash bricks and AAC differ in their best use. Fly ash bricks are dense, strong and cheap - the load-bearing wall replacement for fired brick, with comparable strength and lower embodied energy. AAC is lighter, larger, better insulating but weaker - the preferred infill and partition wall material in framed structures where weight matters. Both use a waste product (fly ash) as the main ingredient, both skip the kiln, and both earn GRIHA and LEED credits. AAC's drawbacks are its brittleness (needs careful handling and thin-bed mortar), its water absorption during laying (pre-wet before use), and the higher unit cost offset by faster masonry. Fly ash bricks can suffer efflorescence if fly ash is high in unburnt carbon.",
            ],
            bullets: [
              "Fly ash brick: 60-80% fly ash, lime/cement 10-20%, pressed, 7-10 MPa, 1500-1700 kg/cu.m.",
              "AAC: cement-fly ash-lime-gypsum-aluminium powder, steam-cured, 3-5 MPa, 500-700 kg/cu.m.",
              "Each fly ash brick consumes ~1 kg of fly ash that would otherwise be landfilled.",
              "AAC thermal conductivity ~0.16 W/m-K - about 4x better insulation than fired brick.",
              "Fly ash brick: load-bearing replacement for fired brick; AAC: infill/partition in framed structures.",
              "AAC drawback: brittle, thin-bed mortar, pre-wet before laying; higher unit cost offset by speed.",
              "Both skip the kiln, both consume fly ash, both earn GRIHA/LEED credits.",
            ],
            table: {
              caption: "Fly ash brick vs AAC block vs fired clay brick.",
              headers: ["Property", "Fly ash brick", "AAC block", "Fired brick"],
              rows: [
                ["Compressive strength (MPa)", "7-10", "3-5", "3-5"],
                ["Density (kg/cu.m)", "1500-1700", "500-700", "1600-1900"],
                ["Thermal cond. (W/m-K)", "0.4", "0.16", "0.6"],
                ["Embodied energy (MJ/kg)", "~1.5", "~1.5", "~3.0"],
                ["Best use", "Load-bearing wall", "Infill/partition", "Load-bearing wall"],
                ["Waste content", "60-80% fly ash", "30-50% fly ash", "0"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Fly ash brick vs AAC - the right walling unit",
              caption:
                "Choose by structural role: load-bearing demands strength (fly ash brick), infill demands lightness (AAC).",
              left: {
                heading: "Fly ash brick",
                items: [
                  "Dense, 1500-1700 kg/cu.m",
                  "Compressive strength 7-10 MPa",
                  "Load-bearing wall replacement",
                  "Pressed and water-cured 21 days",
                  "Consumes ~1 kg fly ash per brick",
                ],
              },
              right: {
                heading: "AAC block",
                items: [
                  "Lightweight, 500-700 kg/cu.m",
                  "Compressive strength 3-5 MPa",
                  "Infill and partition walls in framed structures",
                  "Steam autoclaved 8-12 hours at 180-200 C",
                  "Thermal conductivity 0.16 W/m-K",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "AAC is not load-bearing",
              body: "A common design slip is to use AAC in a load-bearing wall under three storeys. AAC's 3-5 MPa is infill-grade, not structural; for load-bearing masonry specify fly ash brick (7-10 MPa) or SMB with a verified strength certificate.",
            },
            keyTerms: [
              { term: "Fly ash brick", definition: "A pressed, water-cured walling unit made from 60-80% thermal-plant fly ash with lime or cement, 7-10 MPa." },
              { term: "AAC block", definition: "Autoclaved aerated concrete - a steam-cured lightweight walling unit (500-700 kg/cu.m) with honeycomb microstructure from aluminium aeration." },
              { term: "Pozzolan", definition: "A siliceous/aluminous material (fly ash) that reacts with lime in the presence of water to form cementitious calcium-silicate-hydrate." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacture, properties and best use of fly ash bricks and AAC blocks. Tabulate density, compressive strength and thermal conductivity, and state why AAC is preferred for infill walls in framed structures.",
                marks: 7,
                outline: [
                  "Fly ash brick: 60-80% fly ash + lime/cement + sand + gypsum, pressed, 21-day water cure.",
                  "AAC: cement + fly ash + lime + gypsum + aluminium powder + water, autoclaved 8-12 h at 180-200 C.",
                  "Table: fly ash 7-10 MPa, 1500-1700 kg/cu.m, 0.4 W/m-K; AAC 3-5 MPa, 500-700 kg/cu.m, 0.16 W/m-K.",
                  "Fly ash brick = load-bearing replacement; AAC = infill/partition in framed structures.",
                  "AAC preferred for infill because lighter (one-third brick weight) and 4x better insulation.",
                  "Both consume fly ash, skip the kiln, earn GRIHA/LEED credits; both are waste-to-wealth.",
                  "Limitations: fly ash efflorescence if unburnt carbon; AAC brittle, needs pre-wetting and thin-bed mortar.",
                ],
              },
              {
                q: "State the density range of an AAC block.",
                marks: 2,
              },
              {
                q: "Why is fly ash called a pozzolanic material? Give one civil-engineering use.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Bamboo as a structural material",
            body: [
              "Bamboo is a giant grass, not a tree, that reaches structural maturity in three to five years and regrows after harvest without replanting. Its hollow cylindrical culm, with strong fibres concentrated at the outer skin, gives a tensile strength of 100-150 MPa along the fibre and a compressive strength of 40-60 MPa - values comparable to mild steel in tension and to medium concrete in compression. At roughly 0.05 tonnes CO2 per tonne (it actually sequesters carbon during growth) and an embodied energy of about 0.5 MJ per kg, bamboo is the lowest-impact structural material available to the Indian engineer.",
              "Bamboo is used structurally in three roles. As a primary frame it forms the columns, beams and roof trusses of low-rise housing and pavilions, with joints made by lashing, bolting or fish-plating steel to the node. As a reinforcement it replaces steel bars in concrete for low-stress elements like slab-on-grade or boundary walls, achieving 60-80% of the strength of steel-reinforced concrete at one-third the cost and one-tenth the embodied carbon. As a cladding and flooring material split-woven mats, laminated boards and engineered bamboo (bamboo plywood) replace timber in doors, partitions and finishes. Treatment against borers and fungi is mandatory - soaking in boric-borax solution for 24-48 hours is the standard Indian method.",
              "The design rules are codified in IS 15988 (structural use of bamboo) and the National Building Code Part 6 Section 3B. Permissible stresses account for the variability of natural bamboo: 12-15 MPa axial compression for a mature culm of 80-100 mm diameter and 8-12 mm wall thickness; a safety factor of 2.5 to 3 is applied. Joints are the weakest point - splitting at the node is the dominant failure mode - so bolts must pass through the node, and lashing with nylon or galvanised wire is preferred for round culm joints. Connections to concrete use embedment with bituminous coating at the interface. Limitations are real: bamboo is dimensionally unstable with moisture, it must be protected from direct rain, and untreated bamboo fails in 2-3 years outdoors.",
            ],
            bullets: [
              "Bamboo matures in 3-5 years; regrows without replanting - a renewable grass, not a tree.",
              "Tensile strength 100-150 MPa; compressive strength 40-60 MPa - comparable to mild steel and medium concrete.",
              "Embodied energy ~0.5 MJ/kg, embodied carbon ~0.05 t CO2/t (sequesters carbon during growth).",
              "Three structural roles: primary frame, concrete reinforcement, cladding/flooring.",
              "Treatment: 24-48 h soak in boric-borax solution mandatory against borers and fungi.",
              "Design code: IS 15988 and NBC Part 6 Section 3B; safety factor 2.5-3 for natural variability.",
              "Weak point: joints; bolts must pass through the node; untreated bamboo fails in 2-3 years outdoors.",
            ],
            table: {
              caption: "Bamboo vs conventional structural materials.",
              headers: ["Property", "Bamboo", "Mild steel", "M25 concrete", "Timber (sal)"],
              rows: [
                ["Tensile strength (MPa)", "100-150", "250", "2-4", "70-90"],
                ["Compressive strength (MPa)", "40-60", "250", "25", "40-50"],
                ["Embodied energy (MJ/kg)", "0.5", "24", "1.5", "2.5"],
                ["CO2 (t/t)", "~0.05", "1.8", "0.12", "0.1"],
                ["Renewable?", "Yes (3-5 yr)", "No", "No", "Yes (40-60 yr)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a bamboo culm used structurally",
              caption:
                "Strong fibres sit at the outer skin; the hollow core saves material - learn the layers.",
              layers: [
                { label: "Outer skin (high-fibre silica-rich rind)", note: "tensile strength 150 MPa" },
                { label: "Outer cortex (dense fibre bundle)", note: "load-bearing band" },
                { label: "Inner parenchyma matrix", note: "light filler, low stress" },
                { label: "Hollow pith cavity", note: "saves material, raises I" },
                { label: "Node (diaphragm)", note: "prevents local buckling" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite the code and the treatment",
              body: "Bamboo answers without IS 15988 and the boric-borax treatment are incomplete. The code gives permissible stresses; the treatment is mandatory against borers. Untreated bamboo in structural use fails in 2-3 years - a fact that anchors the safety discussion.",
            },
            keyTerms: [
              { term: "Bamboo culm", definition: "The hollow cylindrical stem of bamboo with fibres concentrated at the outer skin; the structural unit." },
              { term: "Engineered bamboo", definition: "Laminated or strand-woven boards made by pressing treated bamboo strips with adhesive into a stable panel." },
              { term: "Boric-borax treatment", definition: "The standard 24-48 hour soak in sodium borate solution that protects bamboo from borers and fungi." },
            ],
            examQuestions: [
              {
                q: "Discuss bamboo as a structural material. State its mechanical properties, three structural uses, the governing Indian code, and the mandatory treatment against biological attack.",
                marks: 7,
                outline: [
                  "Bamboo = giant grass maturing in 3-5 years; tensile 100-150 MPa, compressive 40-60 MPa.",
                  "Embodied energy 0.5 MJ/kg and ~0.05 t CO2/t (sequesters carbon) - lowest of all structural materials.",
                  "Use 1: primary frame for low-rise housing columns, beams and trusses.",
                  "Use 2: reinforcement in concrete for slabs and boundary walls (60-80% of steel-reinforced strength).",
                  "Use 3: cladding and flooring via split-woven mats and laminated boards.",
                  "Governing code: IS 15988 (structural use of bamboo) and NBC Part 6 Section 3B; safety factor 2.5-3.",
                  "Treatment: 24-48 h soak in boric-borax solution mandatory; untreated culms fail in 2-3 years outdoors.",
                ],
              },
              {
                q: "State the tensile strength of bamboo along the fibre.",
                marks: 2,
              },
              {
                q: "Why must bolts through a bamboo culm pass through the node and not the internode?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Ferro-cement technology",
            body: [
              "Ferro-cement is a thin-walled reinforced concrete made by applying rich cement-sand mortar (1:2 to 1:3, water-cement ratio 0.35-0.45) over multiple layers of small-diameter mesh (0.5-1.5 mm wire, 6-25 mm grid). The mesh may be woven square wire mesh, welded mesh or expanded metal lath; two to eight layers are used depending on the load. The result is a composite with thickness of only 10-30 mm, a high ratio of steel surface to volume, and a tensile capacity far higher than ordinary reinforced concrete of the same thickness. Ferro-cement was pioneered by Pier Luigi Nervi in Italy and popularised in India by the Auroville Earth Institute and COSTFORD.",
              "The properties that distinguish ferro-cement are its lightness (a 20 mm panel weighs about 40 kg per square metre against 250 for an RCC slab), its ductility (the dense mesh distribution arrests cracks and gives warning before failure), and its mouldability (any curved shape - cylindrical, spherical, free-form - can be cast without expensive formwork). Two-way action is inherent: the mesh layers act as distributed reinforcement in both directions, so a ferro-cement panel does not need separate main and distribution steel. Compressive strength of the mortar reaches 30-40 MPa; the panel's flexural strength is 8-15 MPa, sufficient for shell roofs, flat slabs, lintels, doors, water tanks and even boat hulls.",
              "Manufacturing ferro-cement follows a fixed sequence. First a skeletal armature of mild steel rods (4-6 mm at 75-150 mm centres) is tied to define the geometry. Then two to six layers of mesh are wrapped tightly around the armature and tied with binding wire. Mortar is applied by hand trowel or shotcrete in two coats - a 5 mm base coat forced through the mesh and a 5 mm finishing coat - and cured under wet hessian for at least seven days. No formwork is needed for curved surfaces, which is the technology's economic strength. Ferro-cement channels (also called channeled slabs or 'l-panel' slabs) span 3-5 m for roofs at one-third the cost of RCC; precast ferro-cement manhole covers replace heavy cast-iron covers; ferro-cement water tanks of 1000-10,000 litre capacity are leak-proof and cheap.",
            ],
            bullets: [
              "Ferro-cement = rich mortar (1:2 to 1:3) over 2-8 layers of small-diameter mesh (0.5-1.5 mm).",
              "Thickness 10-30 mm; weight ~40 kg/sq.m (vs ~250 for RCC slab).",
              "Mortar strength 30-40 MPa; flexural strength 8-15 MPa; ductile failure with crack arrest.",
              "No formwork for curved shapes - the economic advantage for shells and free-form roofs.",
              "Production: tie rod armature, wrap mesh, apply mortar in two coats, cure 7 days under wet hessian.",
              "Uses: channel slabs (3-5 m span), water tanks, manhole covers, doors, boat hulls.",
              "Pioneered by Nervi; Indian champions: Auroville Earth Institute and COSTFORD.",
            ],
            table: {
              caption: "Ferro-cement vs conventional RCC slab.",
              headers: ["Property", "Ferro-cement panel", "RCC slab"],
              rows: [
                ["Thickness (mm)", "20-30", "100-150"],
                ["Weight (kg/sq.m)", "~40", "~250"],
                ["Steel distribution", "Mesh in both faces", "Discrete bars"],
                ["Formwork for curves", "Not required", "Expensive"],
                ["Material cost per sq.m", "~40% of RCC", "100%"],
                ["Ductility", "High (cracks arrested)", "Lower"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Ferro-cement casting sequence",
              caption:
                "Five stages from armature to cured panel - no formwork needed for curved surfaces.",
              steps: [
                { label: "Tie rod armature", note: "4-6 mm rods at 75-150 mm" },
                { label: "Wrap 2-8 mesh layers", note: "bind tightly with wire" },
                { label: "Apply base mortar coat", note: "5 mm forced through mesh" },
                { label: "Apply finishing coat + finish", note: "5 mm, trowelled smooth" },
                { label: "Cure 7 days under wet hessian", note: "no sun during cure" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two-way action is free",
              body: "Because mesh is distributed in both directions, a ferro-cement panel does not need separate main and distribution steel. This is the structural insight that explains the thinness - quote it whenever asked why ferro-cement is so much thinner than RCC.",
            },
            keyTerms: [
              { term: "Ferro-cement", definition: "A thin (10-30 mm) cement-sand mortar composite reinforced with multiple layers of small-diameter wire mesh." },
              { term: "Mesh reinforcement", definition: "Woven, welded or expanded metal lath of 0.5-1.5 mm wire at 6-25 mm grid, applied in 2-8 layers." },
              { term: "Skeletal armature", definition: "The 4-6 mm mild steel rod framework that defines the geometry of a ferro-cement element before mesh wrapping." },
            ],
            examQuestions: [
              {
                q: "Define ferro-cement. Describe its composition, manufacturing sequence, key properties and three civil-engineering applications, and explain why no formwork is needed for curved surfaces.",
                marks: 7,
                outline: [
                  "Define ferro-cement: rich mortar (1:2-1:3) over 2-8 layers of 0.5-1.5 mm wire mesh, 10-30 mm thick.",
                  "Manufacture: tie 4-6 mm rod armature, wrap mesh tightly, apply 5 mm base + 5 mm finish coat, cure 7 days.",
                  "Properties: weight ~40 kg/sq.m, flexural strength 8-15 MPa, ductile crack-arresting failure.",
                  "No formwork for curves because the armature itself defines geometry and mortar is hand-trowelled.",
                  "Two-way action: distributed mesh acts as main and distribution steel, explaining the thinness.",
                  "Application 1: channel slabs spanning 3-5 m at one-third RCC cost.",
                  "Application 2: water tanks 1000-10000 litre (leak-proof); application 3: manhole covers replacing cast iron.",
                ],
              },
              {
                q: "State the thickness range of a ferro-cement panel.",
                marks: 2,
              },
              {
                q: "Why is ferro-cement more ductile than ordinary RCC of the same thickness?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Recycled aggregate concrete and geopolymers",
            body: [
              "Recycled aggregate concrete (RAC) uses crushed concrete from demolished structures as a replacement for natural coarse aggregate. The crushed concrete, after screening and removal of wood, steel and plastics, is graded to IS 383 size bands and blended with natural aggregate at 20-50% replacement. The resulting concrete achieves 80-95% of the strength of natural-aggregate concrete at 28 days for replacements up to 30%, with strength falling more steeply above 50% because the old mortar adhering to the recycled aggregate creates a weak interfacial transition zone. RAC is suited to non-structural and lightly structural elements - pavements, levelling courses, fill under floors, mass concrete - where lower strength is acceptable.",
              "Geopolymer concrete is a cement-free alternative that replaces Portland cement entirely with a pozzolanic source (fly ash, ground granulated blast-furnace slag, or metakaolin) activated by an alkaline solution of sodium hydroxide and sodium silicate. The alkali dissolves the aluminosilicate glass in the fly ash, which polymerises into a three-dimensional sodium-alumino-silicate-hydrate (N-A-S-H) gel binder. Cured at ambient temperature (slow) or 60-80 Celsius (fast), geopolymer concrete achieves 25-50 MPa at 28 days, often outperforming Portland concrete in acid and sulphate resistance. The binder emits about 0.05 tonnes CO2 per tonne against 0.85 for cement - a 90% reduction.",
              "Both technologies share a logic - reuse waste as binder or aggregate - but differ in maturity. RAC is codified in IS 383 (which permits up to 25% recycled aggregate in M25 and below, with restrictions) and is in routine production in metro cities with demolition waste streams. Geopolymer concrete is not yet in IS 456 but is covered by RILEM technical guidance and a few proprietary specifications; full-scale building use remains limited to a handful of demo projects (the University of Queensland's global first pavilion, the NBM&CW demo slabs in India). For the exam, the contrasts to remember are: RAC replaces aggregate (partial, strength loss), geopolymer replaces cement (full, strength maintained); RAC uses demolition waste, geopolymer uses fly-ash-plus-alkali; both cut embodied carbon sharply; both demand tighter quality control than conventional concrete.",
            ],
            bullets: [
              "RAC: crushed demolished concrete as 20-50% of coarse aggregate; 80-95% of natural-aggregate strength up to 30% replacement.",
              "Geopolymer: 100% cement replaced by fly ash + NaOH + Na-silicate; N-A-S-H gel binder.",
              "Geopolymer strength 25-50 MPa at 28 days; CO2 ~0.05 t/t vs cement's 0.85 - 90% reduction.",
              "RAC suited to non-structural elements (pavements, fill, mass concrete); geopolymer suited to structural slabs and columns.",
              "IS 383 permits up to 25% recycled aggregate in M25 and below; geopolymer covered by RILEM, not yet IS 456.",
              "Old mortar on recycled aggregate creates weak interfacial transition zone - the dominant strength loss.",
              "Both demand tighter quality control: source-segregated demolition waste; controlled alkali concentration.",
            ],
            table: {
              caption: "Comparison matrix of conventional, RAC and geopolymer concrete.",
              headers: ["Aspect", "OPC concrete", "RAC (30% repl.)", "Geopolymer"],
              rows: [
                ["Binder", "Portland cement", "Portland cement", "Fly ash + alkali"],
                ["Coarse aggregate", "Natural", "70% natural + 30% recycled", "Natural"],
                ["28-day strength (MPa)", "25-40", "22-36", "25-50"],
                ["CO2 (t/cu.m)", "~0.30", "~0.25", "~0.05"],
                ["Code status", "IS 456", "IS 383 (<=25%)", "RILEM, not IS 456"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing between RAC and geopolymer by waste stream and use",
              caption:
                "Waste stream (demolished concrete vs fly ash) on one axis; structural grade on the other.",
              axes: { x: "Waste stream", y: "Structural grade" },
              quadrants: [
                { label: "Fly ash + structural -> Geopolymer", note: "slabs, columns, beams" },
                { label: "Fly ash + non-structural -> Fly ash brick or AAC", note: "walls" },
                { label: "Demolition + non-structural -> RAC 30-50%", note: "pavements, fill" },
                { label: "Demolition + structural -> RAC up to 25%", note: "per IS 383 only" },
              ],
            },
            callout: {
              type: "warning",
              title: "Geopolymer is not in IS 456",
              body: "A common error is to claim 'geopolymer is permitted by IS 456'. It is not - geopolymer concrete is covered by RILEM technical guidance and proprietary specs, and full-scale Indian structural use remains limited. Quote RILEM, not IS 456, in exam answers.",
            },
            keyTerms: [
              { term: "Recycled aggregate concrete (RAC)", definition: "Concrete in which crushed demolition concrete replaces 20-50% of natural coarse aggregate, achieving 80-95% of conventional strength up to 30% replacement." },
              { term: "Geopolymer concrete", definition: "Cement-free concrete whose binder is fly ash (or slag/metakaolin) activated by NaOH + sodium silicate to form N-A-S-H gel." },
              { term: "Interfacial transition zone (ITZ)", definition: "The weak layer of old mortar adhering to recycled aggregate where cracks initiate, causing RAC strength loss." },
            ],
            examQuestions: [
              {
                q: "Compare recycled aggregate concrete and geopolymer concrete. State what each replaces, the typical 28-day strength, the embodied carbon reduction, the governing code status, and the structural uses each is suited to.",
                marks: 7,
                outline: [
                  "RAC replaces 20-50% of natural coarse aggregate with crushed demolition concrete.",
                  "Geopolymer replaces 100% of Portland cement with fly ash + NaOH + Na-silicate.",
                  "RAC achieves 80-95% of natural-aggregate strength up to 30% replacement; geopolymer 25-50 MPa at 28 days.",
                  "RAC CO2 ~0.25 t/cu.m; geopolymer ~0.05 t/cu.m vs OPC ~0.30 - 90% reduction for geopolymer.",
                  "RAC weakness: old mortar on aggregate creates weak ITZ; geopolymer weakness: alkali handling and ambient cure.",
                  "Code: RAC permitted up to 25% in M25 and below by IS 383; geopolymer covered by RILEM, not IS 456.",
                  "RAC suited to pavements and fill; geopolymer suited to structural slabs and columns in demo projects.",
                ],
              },
              {
                q: "State the maximum percentage of recycled coarse aggregate permitted in M25 concrete by IS 383.",
                marks: 2,
              },
              {
                q: "Name the binder gel formed in geopolymer concrete and one of its precursors.",
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
      title: "Cost-Effective Technologies",
      summary:
        "Construction techniques that cut cost and embodied energy without losing strength: rat-trap bond masonry, filler slabs, arch foundations, precast channel slabs, soil-cement blocks, and a head-to-head cost comparison with conventional construction.",
      chapter: {
        number: "03",
        title: "Cost-Effective Technologies",
        intro:
          "Unit III turns from material substitution to construction technique. It covers the rat-trap bond that saves 20-25% of brick, the filler slab that removes 30-40% of concrete, the arch and dome foundations that cut concrete in compression, the precast channel slab that halves RCC roof cost, and the cost-per-square-metre comparison that justifies every green choice in rupee terms.",
        inOneBreath:
          "Rat-trap bond lays bricks on edge in a 230 mm wall with a cavity, saving 20-25% of brick and giving thermal insulation; filler slabs replace the tension-zone concrete in an RCC slab with inert filler (Mangalore tiles, pots) cutting 30-40% of concrete and 5-10% of steel; arch foundations carry load in pure compression; precast channel slabs (also called 'l-panel' or ferro-cement channel) span 3-5 m at one-third RCC cost; soil-cement blocks cost 50% of fired brick; overall green construction saves 15-30% on cost and 30-50% on embodied energy with a 4-7 year payback.",
        sections: [
          {
            number: "3.1",
            title: "Rat-trap bond masonry",
            body: [
              "The rat-trap bond is a brick masonry bond developed by Laurie Baker in which bricks are laid on edge (frog facing the cavity) in a 230 mm thick wall with a continuous internal cavity. Each brick spans the wall thickness, leaving a 100 mm wide cavity between two 65 mm leaves, and the vertical joints stagger so that each brick covers the joint of the course below. The cavity serves three purposes: it reduces the number of bricks per square metre by 20-25% (from about 60 to about 45), it traps a layer of still air that improves thermal insulation, and it provides a chase for electrical and plumbing conduits without chasing the wall.",
              "The structural behaviour of rat-trap bond is comparable to a 230 mm English bond wall: tests report 4-6 MPa compressive strength with good-quality bricks (7-10 MPa) and 1:6 cement mortar, sufficient for two- to three-storey load-bearing walls. The cavity slightly reduces the net bearing area, so the bond is not used below the damp-proof course or in foundation masonry. Laying demands skilled masons - the bricks must be uniform in size and the perpend joints kept to 10 mm - but the saving in bricks and mortar recovers the higher labour cost. Walls are typically plastered externally and left exposed internally to showcase the bond; the cavity is sealed at the top with a capping course to prevent vermin entry.",
              "Rat-trap bond is the signature technology of COSTFORD and the Laurie Baker network, used in thousands of houses across Kerala, Tamil Nadu and Andhra. Its headline numbers are worth quoting: 20-25% brick saving, 30% mortar saving, 5-8% cost saving per square metre of wall, and a U-value about 30% lower than solid 230 mm brickwork (better insulation). The bond works for any fired-clay or fly ash brick of uniform size (typically 230 x 110 x 70 mm); it does not work for broken or undersized bricks. The technique pairs naturally with filler slabs and arched openings to deliver the 'Baker style' of cost-effective masonry, and is a textbook example of how a re-arrangement of the same material delivers green and economic gains.",
            ],
            bullets: [
              "Rat-trap bond: bricks laid on edge in 230 mm wall with continuous 100 mm cavity.",
              "Brick saving 20-25% (from ~60 to ~45 per sq.m); mortar saving ~30%.",
              "Wall U-value ~30% lower than solid brickwork - improved thermal insulation.",
              "Cavity doubles as conduit chase - no wall cutting for electrical plumbing.",
              "Compressive strength 4-6 MPa with 7-10 MPa bricks; suited to 2-3 storey load-bearing walls.",
              "Not suitable for foundation masonry or below DPC - reduced bearing area.",
              "Developed by Laurie Baker; signature technology of COSTFORD.",
            ],
            table: {
              caption: "Rat-trap bond vs conventional 230 mm English bond (per sq.m of wall).",
              headers: ["Parameter", "English bond", "Rat-trap bond", "Saving"],
              rows: [
                ["Bricks used", "~60", "~45", "~25%"],
                ["Mortar volume (cu.m)", "0.040", "0.028", "~30%"],
                ["Wall thickness (mm)", "230", "230", "same"],
                ["Compressive strength (MPa)", "5-7", "4-6", "slightly lower"],
                ["Cost per sq.m", "100%", "~92%", "~8%"],
                ["U-value (relative)", "1.0", "0.7", "~30% lower"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Building a rat-trap bond wall",
              caption:
                "Five stages from foundation to capping - note the DPC break and the capping course seal.",
              stages: [
                { label: "Foundation in solid English bond", note: "no cavity below DPC" },
                { label: "DPC + first rat-trap course", note: "bricks on edge" },
                { label: "Lay on edge with staggered perpends", note: "10 mm joints" },
                { label: "Run conduits in cavity", note: "no chasing" },
                { label: "Cap with a solid course", note: "seal cavity against vermin" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the savings",
              body: "Rat-trap bond answers without the savings (20-25% brick, 30% mortar, 8% cost, 30% U-value) lose half the marks. The numbers are the proof. Also mention Laurie Baker by name - the question often rewards knowing the Indian champion of the technology.",
            },
            keyTerms: [
              { term: "Rat-trap bond", definition: "A 230 mm wall bond in which bricks are laid on edge with a continuous internal cavity, developed by Laurie Baker." },
              { term: "Cavity wall", definition: "A wall with a continuous air gap between two leaves, providing thermal insulation and a conduit chase." },
              { term: "On-edge laying", definition: "Placing bricks with the 230 x 70 mm face as the bed, so the longer dimension spans the wall thickness." },
            ],
            examQuestions: [
              {
                q: "Describe the rat-trap bond. Give its dimensions, the brick and mortar savings, the structural suitability, and the three functions of the cavity. State one Indian network that popularised the bond.",
                marks: 7,
                outline: [
                  "Define rat-trap bond: 230 mm wall, bricks laid on edge, 100 mm internal cavity, two 65 mm leaves.",
                  "Brick saving ~25% (~60 to ~45 per sq.m); mortar saving ~30%; overall cost saving ~8%.",
                  "Structural: 4-6 MPa compressive strength with 7-10 MPa bricks; suited to 2-3 storey load-bearing walls.",
                  "Cavity function 1: thermal insulation - U-value ~30% lower than solid brickwork.",
                  "Cavity function 2: conduit chase - no wall cutting for plumbing and electrical runs.",
                  "Cavity function 3: material saving - fewer bricks span the same thickness.",
                  "Indian network: COSTFORD (Centre of Science and Technology for Rural Development), championed by Laurie Baker.",
                ],
              },
              {
                q: "State two reasons why rat-trap bond is not used in foundation masonry.",
                marks: 2,
              },
              {
                q: "How many bricks per square metre does a rat-trap bond wall use compared with English bond?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Filler slabs",
            body: [
              "A filler slab is a reinforced cement concrete slab in which the concrete in the tension zone (the lower part of a simply-supported slab) is replaced by a lightweight, non-structural filler material. Because concrete in tension does not contribute to strength - all tensile force is carried by the steel - the filler simply occupies volume that would otherwise be wasted concrete. Typical fillers are Mangalore tiles (placed in rows between the reinforcement), burnt clay pots, earthen pots, or hollow concrete blocks. The result is a slab that uses 30-40% less concrete, 5-10% less steel, and weighs 25-35% less than a solid RCC slab of the same span.",
              "The structural principle is straightforward: in a simply supported slab the neutral axis lies near the mid-depth, and the concrete below it is in tension. By placing filler in this zone the engineer removes dead concrete while keeping the compression zone above the neutral axis and the steel below it intact. The design follows standard RCC theory with the section properties adjusted for the voids; IS 456 and SP 16 cover filler-slab design under the heading of ribbed or voided slabs. Deflection is the governing check - the reduced self-weight offsets the lower moment of inertia, so filler slabs typically deflect only marginally more than solid slabs. Spans of 3-4.5 m are common; for longer spans the rib spacing and steel are increased.",
              "Filler slabs are visually striking when left exposed: rows of Mangalore tiles or pots form a Coffered underside that needs no plaster and earns architectural credits. The technology is widely used in southern India, especially in Laurie Baker's COSTFORD houses and in Auroville, and is a GRIHA-credited technique. Cost per square metre runs about 25-30% below a solid RCC slab of the same span; the saving comes from concrete (the dominant cost) and from the lower steel tonnage. The fillers themselves are cheap, locally made, and add a layer of thermal insulation because the air trapped in the pots or tiles reduces downward heat flow through the roof - a benefit particularly valuable in hot-dry climates.",
            ],
            bullets: [
              "Filler slab: RCC slab with tension-zone concrete replaced by inert filler (Mangalore tile, pot, hollow block).",
              "Concrete saving 30-40%; steel saving 5-10%; weight saving 25-35% vs solid RCC of same span.",
              "Principle: tension concrete does not carry load; only steel in tension and concrete in compression matter.",
              "Standard spans 3-4.5 m; governed by IS 456 and SP 16 as ribbed or voided slabs.",
              "Deflection is the governing check - reduced self-weight offsets reduced moment of inertia.",
              "Exposed coffered underside needs no plaster; earns architectural and GRIHA credits.",
              "Thermal bonus: air trapped in fillers reduces downward heat flow - valued in hot-dry climates.",
            ],
            table: {
              caption: "Solid RCC slab vs filler slab (3.5 m span, 120 mm thick).",
              headers: ["Parameter", "Solid RCC", "Filler slab", "Saving"],
              rows: [
                ["Concrete (cu.m/sq.m)", "0.120", "0.080", "~33%"],
                ["Steel (kg/sq.m)", "~6", "~5.4", "~10%"],
                ["Self weight (kN/sq.m)", "~2.9", "~2.0", "~30%"],
                ["Cost (Rs/sq.m)", "100%", "~72%", "~28%"],
                ["Thermal conduct.", "1.5", "0.9", "~40% lower"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Section through a filler slab",
              caption:
                "Top compression concrete intact; tension zone filled by Mangalore tiles or pots.",
              layers: [
                { label: "Floor finish (25 mm)", note: "above the structural slab" },
                { label: "Compression concrete (top 50 mm)", note: "carries flexural compression" },
                { label: "Neutral axis", note: "steel centred just below" },
                { label: "Filler (Mangalore tile / pot)", note: "inert, non-structural" },
                { label: "Main reinforcement bars", note: "in ribs between fillers" },
                { label: "Exposed soffit", note: "no plaster needed" },
              ],
            },
            callout: {
              type: "tip",
              title: "Deflection is the check",
              body: "Examiners ask 'what governs filler-slab design'. The answer is deflection, not strength: the reduced self-weight offsets the reduced moment of inertia, so filler slabs deflect only marginally more than solid slabs - but the check must be done because IS 456 limits span/250 or 20 mm.",
            },
            keyTerms: [
              { term: "Filler slab", definition: "An RCC slab in which tension-zone concrete is replaced by inert filler (tile, pot, block), saving 30-40% of concrete." },
              { term: "Neutral axis", definition: "The depth in a flexural section where stress changes from compression to tension; concrete below it carries no useful load." },
              { term: "Voided slab", definition: "The IS 456 / SP 16 design category covering ribbed and filler slabs with internal voids." },
            ],
            examQuestions: [
              {
                q: "Explain the structural principle of a filler slab. Sketch a section, state the material savings, the governing IS code and the check that controls design, and give two suitable filler materials.",
                marks: 7,
                outline: [
                  "Principle: concrete in the tension zone carries no load; replacing it with inert filler saves material without losing strength.",
                  "Sketch: top 50 mm compression concrete, neutral axis, steel in ribs, filler (Mangalore tile or pot) below.",
                  "Savings: 30-40% concrete, 5-10% steel, ~25-35% weight; cost ~28% below solid RCC.",
                  "Code: designed under IS 456 and SP 16 as a ribbed or voided slab.",
                  "Governing check: deflection (span/250 or 20 mm), not strength - reduced self-weight offsets reduced inertia.",
                  "Filler material 1: Mangalore tiles placed in rows between reinforcement.",
                  "Filler material 2: earthen pots or hollow concrete blocks; both cheap, locally made, add thermal insulation.",
                ],
              },
              {
                q: "State the percentage concrete saving achieved by a filler slab.",
                marks: 2,
              },
              {
                q: "Why does the filler material not need to be structural-grade?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Arch foundations and precast channel slabs",
            body: [
              "An arch foundation is a masonry or concrete arch that transfers the wall load to the ground in pure compression, replacing the conventional strip footing. In soft or medium soil, where the bearing capacity is low (50-100 kPa), an arch spans between the load-bearing points of a wall and transfers the load to discrete pads, reducing the foundation volume by 30-50%. The arches may be segmental (the most common), semi-circular, or pointed; they are built in brick, stone, or precast concrete voussoirs, with the rise typically one-sixth to one-third of the span. Below the wall, the arch springing rests on concrete pads or pile caps.",
              "Arched foundations are particularly suited to load-bearing masonry walls on soft soils where deep strip footings would be expensive. The technique was popularised in India by Laurie Baker, who used segmental brick arches to span 1.5-3 m between pad footings in his COSTFORD houses; the resulting foundation uses 40-50% less concrete and 30% less steel than a conventional strip footing. The design follows the classical arch theory: the line of thrust must stay within the middle third of the arch ring to prevent tension. For seismic zones, tie rods are added at the springing to absorb the horizontal thrust; without them, an arch foundation can spread outward under lateral load.",
              "Precast channel slabs (also called 'l-panel' slabs or ferro-cement channel slabs) are precast RCC or ferro-cement units in the shape of an inverted 'U' or channel that span between walls without scaffolding. Each channel is 250-400 mm wide, 100-150 mm deep, and 3-5 m long, with a 25-40 mm thick web and a 30-50 mm flange. The channels are cast on the ground in a steel mould, cured for seven days, hoisted onto the walls, placed side by side with a 10-15 mm gap, and the gap is concreted with a screed to form a monolithic roof. The result is a roof at 30-40% of the cost of a cast-in-situ RCC slab of the same span, with the same span capability and no need for shuttering.",
            ],
            bullets: [
              "Arch foundation: masonry or concrete arch in pure compression, replacing strip footing.",
              "Rise = span/6 to span/3; segmental, semi-circular or pointed arches.",
              "Foundation volume saving 30-50% in soft soils (50-100 kPa bearing capacity).",
              "Baker's COSTFORD segmental arches span 1.5-3 m between pads; 40-50% less concrete.",
              "Design rule: line of thrust must stay within middle third of the arch ring.",
              "Seismic: tie rods at springing absorb horizontal thrust; otherwise arch can spread outward.",
              "Precast channel slab: inverted-U RCC or ferro-cement unit, 250-400 mm wide, spans 3-5 m, no shuttering.",
            ],
            table: {
              caption: "Cost comparison of foundation and roof technologies (per sq.m of plan area).",
              headers: ["Technology", "Material cost", "Labour cost", "Total"],
              rows: [
                ["Strip footing + RCC slab", "100%", "100%", "100%"],
                ["Arch foundation + RCC slab", "~60%", "~110%", "~75%"],
                ["Strip footing + channel slab", "~70%", "~70%", "~70%"],
                ["Arch foundation + channel slab", "~50%", "~85%", "~60%"],
                ["Strip footing + filler slab", "~80%", "~95%", "~85%"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing between strip footing, arch foundation and precast channel",
              caption:
                "Branch by soil bearing capacity and span - the right combo cuts 30-40% of cost.",
              start: "Soil bearing capacity known",
              branches: [
                { label: "Soft soil (<75 kPa), span 2-3 m", outcome: "Segmental brick arch foundation", good: true },
                { label: "Medium soil, roof span 3-5 m, no shutter", outcome: "Precast channel slab", good: true },
                { label: "Hard soil, span <3 m", outcome: "Conventional strip footing + RCC", good: false },
                { label: "Seismic zone", outcome: "Arch + tie rods at springing", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Tie rods in seismic zones",
              body: "Arch foundations exert horizontal thrust at the springing. In seismic zones IV and V this thrust must be absorbed by tie rods across the springing; an arch without tie rods in a seismic zone can spread outward under lateral load and collapse. Always state the seismic caveat.",
            },
            keyTerms: [
              { term: "Arch foundation", definition: "A masonry or concrete arch in pure compression that replaces a strip footing, saving 30-50% of foundation volume in soft soils." },
              { term: "Line of thrust", definition: "The compressive force path through an arch that must stay within the middle third of the ring to prevent tension." },
              { term: "Precast channel slab", definition: "A precast inverted-U RCC or ferro-cement unit 250-400 mm wide spanning 3-5 m, joined on site to form a roof at 30-40% of RCC cost." },
            ],
            examQuestions: [
              {
                q: "Describe the arch foundation and the precast channel slab. State the structural principle of each, the material savings, the Indian engineer who popularised arch foundations, and the seismic provision required when arches are used.",
                marks: 7,
                outline: [
                  "Arch foundation: masonry/concrete arch in pure compression transferring wall load to pads; replaces strip footing.",
                  "Rise = span/6 to span/3; line of thrust must stay within middle third of arch ring.",
                  "Saving 30-50% foundation volume in soft soils (50-100 kPa); Laurie Baker popularised segmental brick arches.",
                  "Precast channel slab: inverted-U RCC/ferro-cement unit 250-400 mm wide, spans 3-5 m, no on-site shuttering.",
                  "Channels cast in steel mould, cured 7 days, hoisted, joined with 10-15 mm concreted gap; 30-40% cost saving.",
                  "Seismic provision: tie rods across the springing absorb horizontal thrust - mandatory in zones IV and V.",
                  "Combined arch + channel roof cuts ~40% of foundation + roof cost vs conventional RCC.",
                ],
              },
              {
                q: "State the rise-to-span ratio commonly used for a segmental arch foundation.",
                marks: 2,
              },
              {
                q: "Why is no shuttering needed for a precast channel slab roof?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Soil-cement blocks and compressed earth",
            body: [
              "Soil-cement blocks (also called compressed stabilised earth blocks, CSEB) are walling units produced by pressing a mixture of local subsoil, 3-7% cement and water at optimum moisture content in a manual or hydraulic press. Unlike stabilised mud blocks (section 2.1), CSEB specifically emphasises the pressing pressure (typically 2-10 MPa in the press) that densifies the mix and gives a block of 5-7 MPa compressive strength at 7-10% cement and 3-5 MPa at 4-6% cement. The blocks are cured under wet hessian for seven to twenty-eight days and laid in cement mortar (1:6) with a damp-proof course at plinth.",
              "Compressed earth technology extends CSEB to interlocking blocks that need little or no mortar: the Auram 3000 press produces interlocking blocks with a tongue-and-groove profile that align courses vertically and horizontally. Interlocking CSEB cuts mortar use by 70-90% and laying time by 40%, but demands higher dimensional accuracy (plus or minus 1 mm). The Auroville Earth Institute has built demonstration walls and vaults in CSEB at scales up to two storeys, with cement contents as low as 5% in the upper courses and 8% in the lower. Cement-stabilised rammed earth is a variant in which the same mix is compacted in 100-150 mm layers inside wall formwork, giving monolithic walls of 4-6 MPa without any blocks at all.",
              "CSEB is the lowest-cost walling technology available to Indian affordable housing: at 4-7% cement, blocks cost 1.5-2.5 rupees each versus 6-8 for fired brick, and finished wall cost runs 40-50% below fired-brick masonry. The technology is suited to single- and two-storey load-bearing walls in any climate that is not perpetually wet; in high-rainfall zones the walls must be protected by a stabilised render or an overhang. The headline environmental numbers match the economic ones: CSEB uses local soil (no transport), no kiln (no kiln emissions), only 4-7% cement (low embodied carbon), and the press itself is manual or low-power. The drawbacks are a 7-28 day curing schedule, the need for skilled masons for interlocking variants, and the limited acceptance in mainstream Indian construction codes - CSEB design is governed by IS 1725 and by a small body of demonstration projects.",
            ],
            bullets: [
              "CSEB: local soil + 3-7% cement pressed at 2-10 MPa, cured 7-28 days.",
              "Strength 3-5 MPa at 4-6% cement; 5-7 MPa at 7-10% cement.",
              "Interlocking blocks (Auram 3000 press): tongue-groove, mortar saving 70-90%, time saving 40%.",
              "Cement-stabilised rammed earth: monolithic walls compacted in 100-150 mm layers, 4-6 MPa.",
              "Cost: 1.5-2.5 Rs/block vs 6-8 Rs for fired brick; finished wall 40-50% cheaper.",
              "Environmental: local soil, no kiln, only 4-7% cement, manual press - very low embodied energy.",
              "Drawbacks: 7-28 day cure; dimensional accuracy +-1 mm for interlocking; code IS 1725, still niche in mainstream.",
            ],
            table: {
              caption: "CSEB vs fired clay brick vs SMB (per sq.m of finished wall).",
              headers: ["Property", "CSEB (5% cement)", "SMB (5% cement)", "Fired brick"],
              rows: [
                ["Block cost (Rs)", "~2", "~1.5", "~7"],
                ["Wall cost (Rs/sq.m)", "~150", "~140", "~300"],
                ["Strength (MPa)", "4-6", "3-5", "3-5"],
                ["Mortar needed", "Cement 1:6", "Cement 1:6", "Cement 1:6"],
                ["Kiln emissions", "0", "0", "~0.3 t CO2/t"],
                ["Cement content", "5%", "5%", "0 (in mortar only)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "CSEB production from soil to wall",
              caption:
                "Six stages from subsoil test to laid interlocking wall - the chain examiners expect.",
              steps: [
                { label: "Subsoil testing", note: "gradation, clay-silt-sand split" },
                { label: "Dose cement 4-7% at OMC", note: "Proctor moisture" },
                { label: "Press at 2-10 MPa", note: "Auram 3000 / Aureka hydraulic" },
                { label: "Cure 7-28 days under wet hessian", note: "no sun" },
                { label: "Lay in cement mortar 1:6 or interlock dry", note: "DPC at plinth" },
                { label: "Render or cap in high-rainfall zones", note: "stabilised render" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite IS 1725",
              body: "CSEB design is governed by IS 1725 - a fact often omitted. Cite the code, quote the strength band (3-7 MPa depending on cement dose), and contrast the cost (40-50% below fired brick). These three numbers anchor any CSEB answer.",
            },
            keyTerms: [
              { term: "Compressed stabilised earth block (CSEB)", definition: "A pressed walling unit of local soil + 3-7% cement densified at 2-10 MPa, governed by IS 1725." },
              { term: "Interlocking block", definition: "A CSEB with tongue-and-groove profile that aligns courses without mortar, cutting mortar use by 70-90%." },
              { term: "Rammed earth", definition: "A monolithic wall built by compacting soil-cement mix in 100-150 mm layers inside wall formwork." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacture, properties, code status and cost advantage of compressed stabilised earth blocks. Compare CSEB with fired clay brick on cost and embodied carbon, and state one variant that needs no mortar.",
                marks: 7,
                outline: [
                  "Manufacture: subsoil + 3-7% cement pressed at 2-10 MPa (Auram 3000 or Aureka), cured 7-28 days.",
                  "Properties: 3-5 MPa at 4-6% cement, 5-7 MPa at 7-10% cement; density ~1700 kg/cu.m.",
                  "Code: governed by IS 1725; dimension accuracy +-1 mm for interlocking variants.",
                  "Cost: 1.5-2.5 Rs/block vs 6-8 Rs fired brick; finished wall 40-50% cheaper.",
                  "Embodied carbon: only 4-7% cement, no kiln, local soil - far below fired brick.",
                  "Variant: interlocking CSEB (Auram 3000) needs no mortar, cuts mortar 70-90%, laying time 40%.",
                  "Limitation: 7-28 day cure, high-rainfall protection needed; still niche in mainstream Indian codes.",
                ],
              },
              {
                q: "State the cement dose range used in CSEB for two-storey load-bearing walls.",
                marks: 2,
              },
              {
                q: "Name the Indian standard that governs CSEB design.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Cost comparison with conventional construction",
            body: [
              "Cost comparison is the quantitative justification for every green technology in this unit. The standard unit is the cost per square metre of built-up area, computed across five heads: foundation, walls, roof, finishes and services. For a 50 sq.m single-storey house in central India, conventional fired-brick-plus-RCC construction runs about 12,000-14,000 rupees per square metre; a cost-effective green build using CSEB walls, arch foundation, filler or channel slab roof, and lime-cement finishes runs about 9,000-11,000 rupees per square metre - a 20-25% saving on first cost alone, before operational savings.",
              "The per-head breakdown explains where the savings come from. Foundations: arch foundation saves 30-40% of concrete and 30% of cost over strip footing, especially in soft soils. Walls: CSEB or rat-trap bond saves 40-50% (CSEB) or 8% (rat-trap) per square metre of wall. Roof: filler slab saves 28%, precast channel slab saves 30-40%. Finishes: exposed brick or CSEB soffit saves the plaster cost (10-15% of finishes). Services: unchanged. Adding these head savings to a typical single-storey build gives a 20-25% first-cost saving and a 30-50% embodied-energy saving; operational savings in energy and water add 5-10% per year, giving a payback of 4-7 years for any green premium.",
              "The longer-term economics strengthen the case. A green building's operational energy bill runs 20-30% below conventional, its water bill 30-50% below (with rainwater harvesting and greywater recycling covered in Unit V), and its maintenance is comparable or slightly higher (rendered earth walls need repainting every 5-7 years). The resale value of a certified green building is 5-15% higher, and rental yields are 3-8% higher. The combined lifecycle cost over 30 years - the right horizon for a residential building - is 25-35% below a conventional baseline. The catch is the upfront green premium for high-spec technologies (geopolymer, AAC), which can be 5-15%; for cost-effective Indian technologies (CSEB, rat-trap, filler slab, arch foundation) there is no premium - the first cost is lower.",
            ],
            bullets: [
              "Standard unit: cost per sq.m of built-up area across foundation, walls, roof, finishes, services.",
              "Conventional fired-brick + RCC: ~12,000-14,000 Rs/sq.m (central India, 2024).",
              "Cost-effective green (CSEB + arch + filler/channel): ~9,000-11,000 Rs/sq.m; ~20-25% first-cost saving.",
              "Head savings: foundation arch 30-40%, walls CSEB 40-50% or rat-trap 8%, roof filler 28% or channel 30-40%.",
              "Operational savings: energy 20-30%, water 30-50% per year; maintenance comparable.",
              "Payback: 4-7 years for green premium; no premium for CSEB / rat-trap / filler / arch.",
              "Lifecycle cost over 30 years: 25-35% below conventional; resale +5-15%, rental yield +3-8%.",
            ],
            table: {
              caption: "Cost per sq.m by head - conventional vs cost-effective green (single-storey, central India).",
              headers: ["Head", "Conventional (Rs/sq.m)", "Green (Rs/sq.m)", "Saving"],
              rows: [
                ["Foundation", "1,800", "1,200", "~33%"],
                ["Walls", "3,500", "2,000", "~43%"],
                ["Roof", "4,000", "2,800", "~30%"],
                ["Finishes", "2,500", "2,200", "~12%"],
                ["Services", "1,200", "1,200", "0%"],
                ["Total", "13,000", "9,400", "~28%"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Conventional vs cost-effective green build (Rs per sq.m)",
              caption:
                "The green build wins on every head except services - the cost case is unanswerable.",
              left: {
                heading: "Conventional build (~13,000 Rs/sq.m)",
                items: [
                  "Foundation: strip footing, RCC",
                  "Walls: fired brick + cement mortar",
                  "Roof: cast-in-situ RCC slab",
                  "Finishes: plaster + paint both sides",
                  "Services: standard plumbing + wiring",
                ],
              },
              right: {
                heading: "Cost-effective green (~9,400 Rs/sq.m)",
                items: [
                  "Foundation: arch + pad, 33% saving",
                  "Walls: CSEB / rat-trap bond, 43% saving",
                  "Roof: filler or precast channel, 30% saving",
                  "Finishes: exposed soffit, 12% saving",
                  "Services: standard + RWH + greywater",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always include the payback",
              body: "A cost comparison without the payback period is incomplete. For cost-effective Indian technologies there is no premium - the first cost is lower. For high-spec technologies (AAC, geopolymer) the premium is 5-15% with a 4-7 year payback. State both cases explicitly to earn the final mark.",
            },
            keyTerms: [
              { term: "First cost", definition: "The construction cost per square metre of built-up area, excluding operational and maintenance costs." },
              { term: "Lifecycle cost", definition: "The total cost of a building over its useful life: first cost + operational + maintenance + demolition, in present-value terms." },
              { term: "Payback period", definition: "The time for operational savings to recover any green premium on first cost; 4-7 years for high-spec green tech." },
            ],
            examQuestions: [
              {
                q: "Compare the cost of conventional fired-brick-plus-RCC construction with cost-effective green construction. Tabulate per-head costs per square metre, state the overall first-cost saving, the operational saving, the payback period and the lifecycle cost over 30 years.",
                marks: 7,
                outline: [
                  "Standard unit: cost per sq.m of built-up area across 5 heads.",
                  "Conventional: ~13,000 Rs/sq.m; green: ~9,400 Rs/sq.m; first-cost saving ~28%.",
                  "Head savings: foundation arch 33%, walls CSEB 43%, roof filler/channel 30%, finishes 12%.",
                  "Services unchanged - no saving on plumbing and wiring.",
                  "Operational: energy 20-30%, water 30-50% per year; maintenance comparable.",
                  "Payback: 4-7 years for high-spec premium (AAC, geopolymer); no premium for CSEB / rat-trap / filler / arch.",
                  "Lifecycle 30-year cost: 25-35% below conventional; resale +5-15%, rental +3-8%.",
                ],
              },
              {
                q: "State the approximate first cost per square metre of conventional single-storey construction in central India.",
                marks: 2,
              },
              {
                q: "Why is there no payback period for CSEB walls or rat-trap bond?",
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
      title: "Passive Design and Energy Efficiency",
      summary:
        "Designing the building to work with the climate instead of against it: passive solar design and orientation, natural ventilation by stack and cross-flow, daylighting with shading devices, thermal comfort analysis, and green roofs and walls that cool the building and the city.",
      chapter: {
        number: "04",
        title: "Passive Design and Energy Efficiency",
        intro:
          "Unit IV covers the design moves that cut a building's energy demand before any active system is installed. It begins with passive solar design and orientation, covers natural ventilation strategies, then daylighting with shading devices, the thermal comfort model that judges each design, and green roofs and walls as the final climate buffer.",
        inOneBreath:
          "Passive solar design orients the long axis east-west with windows facing south (in the northern hemisphere) so winter sun enters and summer sun is blocked by an overhang sized to the solar altitude; natural ventilation uses stack effect (warm air rises through high vents) and cross-flow (wind enters one wall, exits the opposite); daylighting achieves a daylight factor of 2-5% in regularly occupied spaces; shading devices include vertical fins, horizontal louvres and egg-crate screens sized to solar geometry; thermal comfort follows Fanger's PMV/PPD model with six variables (air temp, mean radiant temp, humidity, air velocity, clothing, activity); green roofs cut roof heat gain by 70-90% and absorb stormwater.",
        sections: [
          {
            number: "4.1",
            title: "Passive solar design and orientation",
            body: [
              "Passive solar design is the practice of arranging the building - its orientation, form, openings and mass - so that the sun's energy does useful work in winter and is excluded in summer, without mechanical systems. The first move is orientation: in the northern hemisphere the long axis of the building is aligned east-west so that the south facade receives the high midday sun. South-facing windows admit low-angle winter sun deep into the room, where it strikes a thermal-mass floor or wall (concrete, brick, mud, water) that stores the heat and re-radiates it at night. The same south wall is shaded in summer by a horizontal overhang sized to the solar altitude angle: at the summer solstice the sun is high enough that the overhang blocks it; at the winter solstice the sun is low enough to pass beneath.",
              "The overhang calculation is the exam-centre of passive solar design. For a south-facing window at latitude 23 degrees (roughly Bhopal), the summer-solstice solar altitude at solar noon is about 90 - 23 + 23.5 = 90.5 degrees (effectively overhead); the winter-solstice altitude is about 90 - 23 - 23.5 = 43.5 degrees. An overhang of depth D placed H metres above the window sill shades the window in summer if D/H is at least tan(zenith angle at summer noon), and admits the sun in winter if D/H is no more than tan(zenith angle at winter noon). The classic rule of thumb: the overhang depth equals the window height times tan(latitude) for full summer shading with winter admission.",
              "Orientation also addresses wind and view. In hot-dry climates the long axis is rotated to face prevailing breezes for cross-ventilation; in hot-humid climates the same, with the added proviso that windows are large and shaded; in cold climates the long axis stays east-west and north windows are minimised to cut heat loss. The National Building Code and ECBC give orientation guidance by Indian climate zone: hot-dry (Jaisalmer), hot-humid (Mumbai), composite (Delhi), temperate (Bangalore) and cold (Leh). The five passive-solar elements to remember are: aperture (south glazing), absorber (dark mass surface), thermal mass (concrete, mud, water), distribution (natural convection or radiant), and control (overhangs, blinds, insulation). These five form the design cycle that any passive-solar answer must list.",
            ],
            bullets: [
              "Orientation: long axis east-west, south facade for solar gain (northern hemisphere).",
              "South windows admit winter sun; overhang blocks summer sun by solar altitude geometry.",
              "Latitude 23 deg (Bhopal): summer noon altitude ~90 deg, winter noon altitude ~43.5 deg.",
              "Overhang rule of thumb: depth = window height x tan(latitude) for summer shade + winter gain.",
              "Thermal mass: concrete, brick, mud or water stores daytime heat, re-radiates at night.",
              "Five elements: aperture, absorber, thermal mass, distribution, control.",
              "NBC and ECBC give orientation guidance for 5 Indian climate zones: hot-dry, hot-humid, composite, temperate, cold.",
            ],
            table: {
              caption: "Solar altitude at solar noon by season, latitude 23 deg N (Bhopal).",
              headers: ["Event", "Declination", "Altitude at noon", "Window behaviour"],
              rows: [
                ["Summer solstice (Jun 21)", "+23.5 deg", "~90 deg", "Shaded by overhang"],
                ["Equinox (Mar/Sep)", "0 deg", "~67 deg", "Partial shade"],
                ["Winter solstice (Dec 21)", "-23.5 deg", "~43 deg", "Sun admitted"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The five-element passive solar cycle",
              caption:
                "Aperture admits, absorber captures, mass stores, distribution moves, control regulates - and back to aperture.",
              steps: [
                { label: "Aperture", note: "south-facing glazing admits sun" },
                { label: "Absorber", note: "dark surface converts light to heat" },
                { label: "Thermal mass", note: "concrete/mud/water stores heat" },
                { label: "Distribution", note: "natural convection and radiation" },
                { label: "Control", note: "overhang, blinds, insulation regulate" },
                { label: "Back to aperture", note: "next day's cycle begins" },
              ],
            },
            callout: {
              type: "exam",
              title: "List the five elements",
              body: "Passive solar questions reward the five-element list: aperture, absorber, thermal mass, distribution, control. Omitting any element loses a mark. Pair the list with one overhang calculation (depth = window height x tan(latitude)) for a complete 7-mark answer.",
            },
            keyTerms: [
              { term: "Passive solar design", definition: "The arrangement of orientation, openings and mass so the sun heats in winter and is excluded in summer, without mechanical systems." },
              { term: "Solar altitude", definition: "The angle of the sun above the horizon; at solar noon it equals 90 - latitude + declination." },
              { term: "Thermal mass", definition: "A high-heat-capacity material (concrete, brick, mud, water) that stores daytime solar heat and re-radiates it at night." },
            ],
            examQuestions: [
              {
                q: "Explain passive solar design. State the orientation rule for the northern hemisphere, calculate the solar altitude at noon for summer and winter solstice at latitude 23 deg N, and list the five elements of a passive solar system.",
                marks: 7,
                outline: [
                  "Definition: building orientation + openings + mass use solar energy without mechanical systems.",
                  "Orientation: long axis east-west; south facade faces midday sun in northern hemisphere.",
                  "Summer noon altitude = 90 - 23 + 23.5 = 90.5 deg; winter noon altitude = 90 - 23 - 23.5 = 43.5 deg.",
                  "Overhang rule: depth = window height x tan(latitude) shades summer, admits winter sun.",
                  "Element 1-2: aperture (south glazing) and absorber (dark surface that converts light to heat).",
                  "Element 3-4: thermal mass (concrete, mud, water) stores heat; distribution (convection, radiation) moves it.",
                  "Element 5: control (overhangs, blinds, insulation) regulates gain across seasons.",
                ],
              },
              {
                q: "Which facade should receive the major glazing in a passive-solar building in the northern hemisphere?",
                marks: 2,
              },
              {
                q: "Name three high-heat-capacity materials used as thermal mass.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Natural ventilation",
            body: [
              "Natural ventilation is the movement of outdoor air through a building by pressure differences generated by wind and temperature, without mechanical fans. Two mechanisms drive it. Cross ventilation occurs when wind hits a windward wall, raising its pressure, and exits through openings on the leeward wall at lower pressure - the air flows across the room. Stack ventilation (also called buoyancy ventilation) occurs when warm indoor air rises and escapes through high-level vents, drawing cooler outdoor air in through low-level vents; the pressure difference is proportional to the height difference between vents and the temperature difference between inside and outside, captured by the stack-effect formula dP = 0.042 x h x dT (Pascals, for typical conditions).",
              "Cross ventilation design requires inlet and outlet openings on opposite or adjacent walls, with the inlet area typically 30-50% of the floor area and the outlet matched or larger. The openings should be on facing walls within a depth of about 5 times the room height; beyond that the jet dissipates and ventilation fails. Window design matters: casement windows deflect wind inward, awning windows shelter from rain, louvres tune the flow direction. For single-sided rooms (only one external wall) ventilation relies on the turbulence and pressure variation across that wall, and effective depth drops to about 2.5 times the room height.",
              "Stack ventilation is the workhorse for deep-plan buildings and atria. A solar chimney enhances the stack effect by heating the upper vent with the sun, raising dT; a wind tower (badgir in Persian architecture) catches wind at height and channels it down into the building while warm air escapes through another shaft. The combination of cross ventilation in shallow rooms and stack ventilation in deep rooms, with operable windows for occupant control, is the standard natural-ventilation strategy for Indian climates. The target is an air change rate of 5-15 air changes per hour in occupied spaces during the day, dropping to 2-3 at night. Night flush ventilation - cooling the thermal mass overnight for next-day comfort - is the standard summer strategy in hot-dry climates."
            ],
            bullets: [
              "Two drivers: wind (cross ventilation) and temperature (stack ventilation).",
              "Cross ventilation: inlet 30-50% of floor area, outlet matched or larger; depth <= 5 x room height.",
              "Stack formula: dP = 0.042 x h x dT (Pa), where h is vent height difference and dT is inside-outside temp diff.",
              "Solar chimney and badgir (wind tower) enhance stack effect using solar heat.",
              "Single-sided rooms: effective depth <= 2.5 x room height due to wind turbulence only.",
              "Target air change rate: 5-15 ACH occupied day, 2-3 ACH night.",
              "Night flush: cool thermal mass overnight for next-day comfort (hot-dry climate strategy).",
            ],
            table: {
              caption: "Cross vs stack ventilation design parameters.",
              headers: ["Parameter", "Cross ventilation", "Stack ventilation"],
              rows: [
                ["Driver", "Wind pressure difference", "Temperature (buoyancy) difference"],
                ["Effective depth", "5 x room height", "Unlimited with tall stack"],
                ["Inlet area", "30-50% of floor area", "Low-level vents matched to high vents"],
                ["Best room type", "Shallow, dual-wall", "Deep-plan, atrium, solar chimney"],
                ["Enhancer", "Casement window deflects wind", "Solar chimney, badgir (wind tower)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Airflow through a naturally ventilated room",
              caption:
                "Wind enters windward openings, exits leeward; warm air exits the high vent, draws cool air from below.",
              steps: [
                { label: "Wind hits windward wall", note: "high-pressure zone" },
                { label: "Air enters through inlet", note: "casement deflects inward" },
                { label: "Air flows across room", note: "depth <= 5 x height" },
                { label: "Air exits leeward outlet", note: "low-pressure zone" },
                { label: "Warm indoor air rises", note: "stack effect" },
                { label: "Exits high vent, draws cool air from below", note: "buoyancy cycle complete" },
              ],
            },
            callout: {
              type: "warning",
              title: "Mind the depth",
              body: "A common slip is to design a deep room with windows on one wall and expect cross ventilation. Effective depth for cross ventilation is 5 x room height with two walls; only 2.5 x height with one wall. Beyond this, mechanical ventilation is unavoidable.",
            },
            keyTerms: [
              { term: "Cross ventilation", definition: "Airflow driven by wind pressure difference between windward inlets and leeward outlets, effective up to 5 x room height in depth." },
              { term: "Stack ventilation", definition: "Airflow driven by buoyancy: warm air rises and exits high vents, drawing cool air in through low vents; dP = 0.042 x h x dT Pa." },
              { term: "Air change rate (ACH)", definition: "The number of room volumes of air replaced per hour; target 5-15 ACH in occupied spaces during the day." },
            ],
            examQuestions: [
              {
                q: "Explain natural ventilation. Describe cross and stack ventilation, give the stack-effect formula, state the effective depth limits, and outline a combined strategy for an Indian hot-dry climate building.",
                marks: 7,
                outline: [
                  "Define natural ventilation: airflow driven by wind pressure and temperature difference, no fans.",
                  "Cross ventilation: windward inlet + leeward outlet; effective depth <= 5 x room height.",
                  "Stack ventilation: warm air exits high vent, cool air enters low vent; dP = 0.042 x h x dT Pa.",
                  "Inlet area 30-50% of floor area; outlet matched or larger; single-sided effective depth <= 2.5 x height.",
                  "Enhancers: casement window deflects wind; solar chimney and badgir (wind tower) boost stack.",
                  "Target 5-15 ACH day, 2-3 ACH night; night flush cools thermal mass overnight.",
                  "Combined strategy: cross in shallow rooms, stack in deep rooms, operable windows for control; night flush for hot-dry summer.",
                ],
              },
              {
                q: "State the stack-effect pressure formula and the units of each term.",
                marks: 2,
              },
              {
                q: "What is the effective depth for cross ventilation in a room with windows on one wall only?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Daylighting and shading devices",
            body: [
              "Daylighting is the controlled admission of natural light into a building to reduce or eliminate electric lighting during daytime. The metric is the daylight factor (DF), defined as the ratio of indoor illuminance at a point to the unobstructed outdoor horizontal illuminance under an overcast sky, expressed as a percentage. For regularly occupied spaces a DF of 2-5% is the target; below 2% the space feels gloomy and electric lights stay on, above 5% glare and overheating become problems. Daylight is admitted through windows (side lighting), skylights (top lighting), clerestories, light shelves and light pipes; the depth of useful daylight is about 2.5 times the window head height for side-lit rooms.",
              "Shading devices control when and where the sun enters, separating useful winter daylight from unwanted summer heat gain. The four families are: horizontal overhangs (block high summer sun, admit low winter sun; best on south facades), vertical fins (block low-angle east-west sun; best on east and west facades), egg-crate (combination of horizontal and vertical, for tropical sites with sun from many angles), and internal/external louvres (tunable, often automated). External shading is far more effective than internal because it stops solar radiation before it enters the glazing; an external louvre cuts solar heat gain by 70-85% versus 25-40% for an internal blind of the same geometry.",
              "The design sequence is: fix orientation first (long axis east-west per section 4.1), then size south-facing glazing for winter admission, then size the overhang to block summer noon sun, then add vertical fins on east and west walls for low-angle sun, then add light shelves to bounce daylight deeper into the room while shading the lower glazing. Glazing material also matters: low-e glass cuts solar heat gain coefficient (SHGC) to 0.25-0.40 while keeping visible transmittance (VT) above 0.5; the ratio VT/SHGC should be greater than 1.5 for daylight-efficient glazing. The combined result - correct orientation, sized overhang, vertical fins where needed, light shelves, high VT/SHGC glazing - delivers a daylight factor of 2-5% with glare control and a cooling-load reduction of 15-25%.",
            ],
            bullets: [
              "Daylight factor (DF) = indoor illuminance / outdoor overcast illuminance, as %.",
              "Target DF: 2-5% in regularly occupied spaces; below 2 gloomy, above 5 glare/heat.",
              "Useful daylight depth: ~2.5 x window head height for side-lit rooms.",
              "Shading families: horizontal overhangs (south), vertical fins (east-west), egg-crate (tropical), louvres (tunable).",
              "External shading cuts heat gain 70-85%; internal blinds only 25-40%.",
              "Light shelf: bounces daylight deep into room, shades lower glazing.",
              "Glazing spec: SHGC 0.25-0.40, VT > 0.5, VT/SHGC > 1.5 for daylight-efficient glass.",
            ],
            table: {
              caption: "Shading device selection by facade orientation.",
              headers: ["Facade", "Sun angle", "Device", "Effectiveness"],
              rows: [
                ["South", "High noon summer", "Horizontal overhang", "~80% summer, admits winter"],
                ["East / West", "Low angle", "Vertical fins", "~60-70% on low sun"],
                ["Tropical all-side", "Variable", "Egg-crate", "~85% multi-angle"],
                ["Any", "Variable", "External louvre", "~70-85% tunable"],
                ["Any", "Variable", "Internal blind", "~25-40% only"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing shading by facade and sun angle",
              caption:
                "Facade orientation on x, sun angle on y - pick the device at the intersection.",
              axes: { x: "Facade orientation", y: "Sun angle at the facade" },
              quadrants: [
                { label: "South + high sun -> Horizontal overhang", note: "block summer, admit winter" },
                { label: "South + low sun -> Light shelf", note: "bounce daylight, shade lower" },
                { label: "East/West + low sun -> Vertical fins", note: "block low-angle morning/evening" },
                { label: "Tropical all-side + variable -> Egg-crate", note: "multi-angle shading" },
              ],
            },
            callout: {
              type: "tip",
              title: "VT/SHGC ratio",
              body: "When specifying glazing, always quote the VT/SHGC ratio. A high VT (visible transmittance) with a low SHGC (solar heat gain coefficient) is daylight-efficient: ratio > 1.5 is the threshold. Low-e coatings achieve VT 0.5-0.7 and SHGC 0.25-0.40.",
            },
            keyTerms: [
              { term: "Daylight factor (DF)", definition: "The ratio of indoor illuminance at a point to unobstructed outdoor horizontal illuminance under overcast sky, as a percentage; target 2-5%." },
              { term: "Solar heat gain coefficient (SHGC)", definition: "The fraction of incident solar radiation transmitted through glazing; target 0.25-0.40 for daylight-efficient glass." },
              { term: "Light shelf", definition: "A horizontal reflecting element outside or inside a window that bounces daylight deep into the room while shading the lower glazing." },
            ],
            examQuestions: [
              {
                q: "Define daylight factor and state the target range. List four shading device families, identify the best facade for each, and explain why external shading outperforms internal blinds.",
                marks: 7,
                outline: [
                  "Daylight factor = indoor / outdoor overcast illuminance, as %; target 2-5% in occupied spaces.",
                  "Useful daylight depth ~2.5 x window head height for side-lit rooms.",
                  "Family 1: horizontal overhang - south facade, blocks high summer sun, admits low winter sun.",
                  "Family 2: vertical fins - east and west facades, blocks low-angle morning/evening sun.",
                  "Family 3: egg-crate - tropical sites with sun from many angles, combines horizontal and vertical.",
                  "Family 4: louvres - tunable, often automated; external cuts gain 70-85% vs 25-40% for internal blinds.",
                  "External wins because it stops radiation before it enters glazing; specify VT/SHGC > 1.5 for the glass.",
                ],
              },
              {
                q: "State the target daylight factor for a regularly occupied office space.",
                marks: 2,
              },
              {
                q: "Which shading device is best suited for an east-facing facade? Why?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Thermal comfort",
            body: [
              "Thermal comfort is the state of mind in which a person expresses satisfaction with the thermal environment. It is not a single temperature but a balance among six variables: air temperature, mean radiant temperature, relative humidity, air velocity, clothing insulation (clo) and metabolic activity (met). The international standard is ISO 7730, built on Fanger's predicted mean vote (PMV) model: PMV is a seven-point scale from -3 (cold) to +3 (hot), with 0 being neutral; the predicted percentage dissatisfied (PPD) is derived from PMV, with PMV between -0.5 and +0.5 giving PPD below 10% - the ISO 7730 comfort band.",
              "Fanger's PMV equation combines the six variables into a heat-balance on the human body: metabolic heat generated minus heat lost by evaporation, convection and radiation equals zero at comfort. The equation is complex (a polynomial in the six variables) but the insights are practical. At low activity (1.0 met, sedentary office work) and light clothing (0.6 clo, summer), the comfort zone in still air is roughly 23-26 degrees Celsius at 50% relative humidity. Each 0.5 m/s increase in air velocity shifts the upper comfort limit up by about 2-3 degrees - which is why a ceiling fan extends comfort to 28-30 degrees in hot climates. The adaptive comfort model (ASHRAE 55) acknowledges that occupants in naturally ventilated buildings tolerate a wider band that tracks the outdoor monthly average: comfort temperature T_c = 17.8 + 0.31 x T_out.",
              "Designing for comfort follows the pyramid of interventions: reduce demand by passive design (orientation, shading, mass, insulation), then tune the interior by air movement (fans), then by humidity control (desiccant or ventilation), then by mechanical cooling only as the last resort. The civil engineer's role is the first three layers: passive design choices that widen the comfort band before any HVAC sizing. The energy payoff is large: each degree Celsius the comfort band can be shifted upward by passive measures cuts cooling energy by 5-10%. A combined strategy of orientation, shading, mass, ventilation and a ceiling fan can deliver 80% of occupied hours within the comfort band in most Indian climates without mechanical cooling - the foundation of a low-energy green building.",
            ],
            bullets: [
              "Six variables: air temp, mean radiant temp, humidity, air velocity, clothing (clo), activity (met).",
              "ISO 7730 and Fanger PMV scale: -3 cold to +3 hot, comfort band PMV +-0.5 gives PPD < 10%.",
              "Fanger comfort zone: 23-26 deg C at 50% RH, 1.0 met, 0.6 clo, still air.",
              "Air velocity 0.5 m/s raises upper comfort limit by 2-3 deg C - ceiling fans extend comfort to 28-30 deg C.",
              "Adaptive comfort (ASHRAE 55): T_c = 17.8 + 0.31 x T_out for naturally ventilated buildings.",
              "Pyramid: passive design first, then fans, then humidity control, then mechanical cooling last.",
              "Each degree of upward band shift cuts cooling energy 5-10%; 80% of Indian hours can be passive-comfortable.",
            ],
            table: {
              caption: "Fanger comfort band at 1.0 met, 0.6 clo, 50% RH.",
              headers: ["Air velocity (m/s)", "Lower limit (deg C)", "Upper limit (deg C)", "Width"],
              rows: [
                ["Still (0.1)", "23", "26", "3 deg C"],
                ["0.5", "23", "28", "5 deg C"],
                ["1.0", "23", "30", "7 deg C"],
                ["2.0 (draft risk)", "23", "32", "9 deg C"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The comfort design hierarchy",
              caption:
                "Always start at the base; each layer cuts the load on the layer above - do not invert.",
              tiers: [
                { label: "Passive design (orientation, shading, mass, insulation)", note: "widens band before any system" },
                { label: "Air movement (ceiling fans)", note: "raises upper limit 2-3 deg C" },
                { label: "Humidity control (desiccant or ventilation)", note: "fixes the latent load" },
                { label: "Mechanical cooling (HVAC)", note: "only what passive + fans cannot deliver" },
                { label: "Heating (only cold climates)", note: "last resort in Indian temperate/cold zones" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote Fanger and ASHRAE 55",
              body: "Comfort answers without Fanger's PMV/PPD model and the adaptive comfort formula (T_c = 17.8 + 0.31 x T_out) lose marks. Cite ISO 7730 for Fanger and ASHRAE 55 for the adaptive model; quote the six variables in the correct order.",
            },
            keyTerms: [
              { term: "Thermal comfort", definition: "The state of mind expressing satisfaction with the thermal environment; a balance among six variables per ISO 7730." },
              { term: "Predicted mean vote (PMV)", definition: "Fanger's seven-point scale from -3 (cold) to +3 (hot); the comfort band is PMV +-0.5 with PPD < 10%." },
              { term: "Adaptive comfort", definition: "ASHRAE 55 model: occupants of naturally ventilated buildings tolerate a band tracking outdoor monthly mean, T_c = 17.8 + 0.31 x T_out." },
            ],
            examQuestions: [
              {
                q: "Define thermal comfort. State the six variables, the Fanger PMV/PPD model and its ISO standard, the adaptive comfort formula, and outline the design pyramid that delivers comfort with minimal energy.",
                marks: 7,
                outline: [
                  "Definition: state of satisfaction with the thermal environment per ISO 7730.",
                  "Six variables: air temp, mean radiant temp, RH, air velocity, clothing (clo), activity (met).",
                  "Fanger PMV: 7-point scale -3 to +3; comfort band PMV +-0.5 gives PPD < 10%.",
                  "Comfort zone: 23-26 deg C at 50% RH, 1.0 met, 0.6 clo, still air.",
                  "Adaptive model (ASHRAE 55): T_c = 17.8 + 0.31 x T_out for naturally ventilated buildings.",
                  "Air velocity 0.5 m/s raises upper limit by 2-3 deg C - ceiling fans extend comfort to 28-30 deg C.",
                  "Pyramid: passive design, then fans, then humidity control, then mechanical cooling last.",
                ],
              },
              {
                q: "State the two personal variables in Fanger's comfort model.",
                marks: 2,
              },
              {
                q: "Write the ASHRAE 55 adaptive comfort formula and define each term.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Green roofs and walls",
            body: [
              "A green roof is a roof that is partially or completely covered with vegetation planted over a waterproofing membrane, with drainage, filter and root-barrier layers. Two types are common: extensive (50-150 mm substrate, low-growing sedums and grasses, lightweight, minimal maintenance, no irrigation) and intensive (300-1500 mm substrate, shrubs and even trees, heavier, irrigated, accessible as a garden). Extensive green roofs are the standard for cost-effective green construction because they add only 50-100 kg per square metre of load and need no irrigation. Both types cut roof heat gain by 70-90%, reduce stormwater runoff by 50-80%, and extend the waterproofing membrane's life by shielding it from UV and temperature swings.",
              "The layered assembly of a green roof, from top to bottom, is: vegetation, growing substrate (lightweight engineered soil), filter fabric (prevents substrate washing into drainage), drainage layer (stores and channels excess water), root barrier (protects waterproofing from root penetration), waterproofing membrane, insulation, and the structural roof slab. The structural engineer sizes the slab for the saturated weight of the substrate plus the vegetation plus the retained water; the saturated density of an extensive substrate is about 100-130 kg per cubic metre, so a 100 mm extensive layer adds 10-13 kPa dead load. Drainage outlets must be accessible for maintenance and sized for the 100-year storm.",
              "Green walls (also called living walls or vertical gardens) are the vertical analogue: plants grown on a wall-mounted structure of felt panels, modular trays or climbing vines on a cable trellis. They reduce the wall's surface temperature by 10-20 degrees Celsius through shading and evapotranspiration, cut the urban heat island effect, and provide acoustic absorption. They demand irrigation (often drip with recirculated greywater) and regular maintenance. The combined use of green roofs and green walls can lower a building's cooling load by 15-30% and its stormwater discharge by 50-70%, with the bonus of urban biodiversity and visual amenity. They earn LEED and GRIHA credits and are now mandatory for some categories of new buildings in Delhi and Bangalore.",
            ],
            bullets: [
              "Two types: extensive (50-150 mm, sedum/grass, 50-100 kg/sq.m, no irrigation) and intensive (300-1500 mm, shrubs/trees, heavy, irrigated).",
              "Roof heat gain cut 70-90%; stormwater runoff cut 50-80%; membrane life extended by UV and thermal shielding.",
              "Layered assembly (top to bottom): vegetation, substrate, filter, drainage, root barrier, waterproofing, insulation, slab.",
              "Saturated substrate density ~100-130 kg/cu.m; 100 mm extensive layer adds 10-13 kPa dead load.",
              "Drainage outlets sized for 100-year storm, accessible for maintenance.",
              "Green walls: felt panels, modular trays or cable trellis; cut wall surface temp 10-20 deg C.",
              "Combined roofs + walls: cooling load -15-30%, stormwater -50-70%; mandatory for some new Delhi/Bangalore categories.",
            ],
            table: {
              caption: "Extensive vs intensive green roof.",
              headers: ["Parameter", "Extensive", "Intensive"],
              rows: [
                ["Substrate depth (mm)", "50-150", "300-1500"],
                ["Vegetation", "Sedum, grass", "Shrubs, trees"],
                ["Saturated load (kPa)", "0.5-1.5", "3-15"],
                ["Irrigation", "None", "Required"],
                ["Maintenance", "Low (annual)", "High (weekly)"],
                ["Accessibility", "No", "Yes (garden)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Green roof assembly (top to bottom)",
              caption:
                "Eight layers stack to deliver vegetation, drainage, protection and structure - learn the order.",
              layers: [
                { label: "Vegetation (sedum, grass)", note: "transpiration cools roof" },
                { label: "Growing substrate (engineered soil)", note: "50-150 mm extensive" },
                { label: "Filter fabric", note: "prevents substrate washout" },
                { label: "Drainage layer", note: "stores and channels water" },
                { label: "Root barrier", note: "protects waterproofing" },
                { label: "Waterproofing membrane", note: "the critical seal" },
                { label: "Insulation", note: "thermal break" },
                { label: "Structural roof slab", note: "sized for saturated load" },
              ],
            },
            callout: {
              type: "warning",
              title: "Size for saturated weight",
              body: "The structural slab must be designed for the saturated weight of the substrate - not the dry weight. A 100 mm extensive layer at 100-130 kg/cu.m saturated adds 10-13 kPa dead load, roughly doubling a conventional roof load. Forgetting this is the classic green-roof structural failure.",
            },
            keyTerms: [
              { term: "Extensive green roof", definition: "A lightweight green roof with 50-150 mm substrate and drought-tolerant plants, adding 0.5-1.5 kPa saturated load and no irrigation." },
              { term: "Intensive green roof", definition: "A heavier green roof with 300-1500 mm substrate supporting shrubs and trees, requiring irrigation and access as a garden." },
              { term: "Living wall (green wall)", definition: "A vertical garden on a wall-mounted felt, tray or trellis structure that shades and cools the wall by evapotranspiration." },
            ],
            examQuestions: [
              {
                q: "Describe green roofs and walls. State the two types of green roof, give the layered assembly from top to bottom, the structural load implication, and the cooling and stormwater benefits of combining roofs with walls.",
                marks: 7,
                outline: [
                  "Two types: extensive (50-150 mm, sedum/grass, 0.5-1.5 kPa, no irrigation) and intensive (300-1500 mm, shrubs/trees, heavy, irrigated).",
                  "Layers top-to-bottom: vegetation, substrate, filter, drainage, root barrier, waterproofing, insulation, slab.",
                  "Saturated substrate density ~100-130 kg/cu.m; 100 mm extensive layer adds 10-13 kPa dead load.",
                  "Slab must be sized for saturated weight - not dry; drainage outlets sized for 100-year storm.",
                  "Benefits: roof heat gain cut 70-90%, stormwater cut 50-80%, membrane life extended by UV shielding.",
                  "Green walls: felt panels or trays; cut wall surface temp 10-20 deg C by shading and evapotranspiration.",
                  "Combined: cooling load -15-30%, stormwater -50-70%; mandatory for some new Delhi and Bangalore buildings.",
                ],
              },
              {
                q: "State the substrate depth range of an extensive green roof.",
                marks: 2,
              },
              {
                q: "Why must the structural slab be sized for the saturated weight of the green roof and not the dry weight?",
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
      title: "Rainwater Harvesting and Waste Management",
      summary:
        "Water and waste closing the loop: rooftop rainwater harvesting systems, recharge pits and trenches, greywater recycling for flushing and irrigation, composting toilets and on-site solid waste management, and Indian case studies of eco-villages and green buildings.",
      chapter: {
        number: "05",
        title: "Rainwater Harvesting and Waste Management",
        intro:
          "Unit V closes the loop on a green building's water and waste streams. It covers rooftop rainwater harvesting with recharge and storage systems, the design of recharge pits and trenches, greywater recycling, composting toilets and on-site solid waste management, and the Indian case studies (Auroville, COSTFORD Hamlet, Suzlon One Earth) that prove the technologies work at scale.",
        inOneBreath:
          "Rooftop RWH captures runoff = rainfall (m) x catchment area (sq.m) x runoff coefficient (0.8-0.95); recharge pits 1-2 m diameter and 2-3 m deep backfilled with pebbles feed the aquifer; greywater (bath, basin, laundry, ~50-60% of household wastewater) is filtered and reused for flushing and irrigation; composting toilets decompose faeces in 6-12 months into soil amendment; on-site solid waste segregation into wet, dry and hazardous is the operational discipline; case studies: Auroville Earth Institute (CSEB and ferro-cement), Laurie Baker's Hamlet (rat-trap + filler slab), Suzlon One Earth Pune (LEED Platinum + GRIHA 5-star).",
        sections: [
          {
            number: "5.1",
            title: "Rooftop rainwater harvesting systems",
            body: [
              "Rooftop rainwater harvesting (RWH) collects the rain that falls on a building's roof, filters it, and either stores it in a tank for direct use or recharges the underlying aquifer through a pit or trench. The design begins with the water balance: volume captured per year = rainfall (m/year) x catchment area (sq.m) x runoff coefficient. The runoff coefficient accounts for losses to evaporation, wetting the surface and first-flush diversion; it is 0.8-0.95 for metal and concrete roofs, 0.6-0.8 for tile, and 0.5 for thatch. For a 100 sq.m concrete roof in Bhopal (rainfall ~1.1 m/year), the annual capture is 1.1 x 100 x 0.85 = 94 cubic metres, about 94,000 litres.",
              "A rooftop RWH system has four components: the catchment (roof surface), the conveyance (gutters and downpipes), the filter (first-flush diverter plus a sand-gravel-charcoal filter), and the storage or recharge. The first-flush diverter is critical: it discards the first 0.2-0.5 mm of rainfall, which carries the dust and bird droppings accumulated on the roof since the last rain. Storage tanks are sized for the longest dry spell expected - typically the cumulative demand during the longest gap between significant rains, often 20-30 days. A household of four using 50 litres per person per day of harvested rain needs 4 x 50 x 25 = 5,000 litres of storage; a ferro-cement tank of this size costs 8,000-12,000 rupees and lasts 30+ years.",
              "If storage is impractical or the aquifer is depleted, the harvested rain is recharged into the ground through a pit or trench rather than stored. Recharge is preferred in high-rainfall regions where storage would overflow, and in urban settings where space for tanks is short. The recharge structure is sized to absorb the peak rainfall intensity of the design storm (typically 20-30 mm/hour for a 1-year storm); the percolation rate is determined by a percolation test. Indian RWH is mandated by law in several states - Tamil Nadu's 2003 ordinance requires RWH on all new buildings, and Bangalore's BBMP byelaws require it on sites above a certain size. A well-maintained RWH system can meet 30-50% of a household's annual water demand in most Indian cities.",
            ],
            bullets: [
              "Volume captured = rainfall (m/yr) x catchment area (sq.m) x runoff coefficient.",
              "Runoff coefficients: metal/concrete 0.8-0.95, tile 0.6-0.8, thatch ~0.5.",
              "Four components: catchment (roof), conveyance (gutters + downpipes), filter, storage or recharge.",
              "First-flush diverter discards first 0.2-0.5 mm of rain (dust + bird droppings).",
              "Storage sized for longest dry spell (20-30 days); 5,000 L ferro-cement tank for a 4-person household.",
              "Recharge preferred in high-rainfall or urban-short-space settings; sized for 20-30 mm/h design storm.",
              "Tamil Nadu 2003 ordinance mandates RWH on all new buildings; Bangalore BBMP byelaws on sites above threshold size.",
            ],
            table: {
              caption: "Annual RWH capture for a 100 sq.m roof in Indian cities.",
              headers: ["City", "Rainfall (m/yr)", "Coeff.", "Capture (cu.m)", "Litres/year"],
              rows: [
                ["Bhopal", "1.1", "0.85", "94", "~94,000"],
                ["Mumbai", "2.4", "0.85", "204", "~204,000"],
                ["Delhi", "0.7", "0.85", "60", "~60,000"],
                ["Chennai", "1.3", "0.85", "110", "~110,000"],
                ["Bangalore", "0.9", "0.85", "77", "~77,000"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Rooftop rainwater harvesting system",
              caption:
                "Five stages from roof to tap or aquifer - reproduce the order in any RWH answer.",
              stages: [
                { label: "Roof catchment", note: "metal, concrete or tile" },
                { label: "Gutters + downpipes", note: "sized for peak rainfall" },
                { label: "First-flush diverter", note: "discards first 0.2-0.5 mm" },
                { label: "Sand-gravel-charcoal filter", note: "removes suspended solids" },
                { label: "Storage tank OR recharge pit", note: "tank for dry spells; pit for aquifer" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always size the tank",
              body: "An RWH answer without a sizing calculation is incomplete. State the water-balance formula, plug in the city's rainfall, and size the tank for the longest dry spell (20-30 days x daily demand). A 100 sq.m roof in Bhopal captures ~94,000 litres per year - quotable.",
            },
            keyTerms: [
              { term: "Runoff coefficient", definition: "The fraction of rainfall captured by a roof surface after losses to evaporation, wetting and first-flush; 0.8-0.95 for metal and concrete." },
              { term: "First-flush diverter", definition: "A device that discards the first 0.2-0.5 mm of rainfall to remove dust, leaves and bird droppings accumulated on the roof." },
              { term: "Recharge structure", definition: "A pit, trench or well that injects harvested rainwater into the aquifer, sized to absorb the peak intensity of the design storm." },
            ],
            examQuestions: [
              {
                q: "Design a rooftop rainwater harvesting system for a 100 sq.m concrete roof in Bhopal. State the annual capture volume, the four system components, the role of the first-flush diverter, and the storage or recharge choice.",
                marks: 7,
                outline: [
                  "Water balance: V = rainfall x area x coeff = 1.1 x 100 x 0.85 = 94 cu.m (~94,000 L/year).",
                  "Component 1: catchment = the concrete roof itself, slope toward gutter.",
                  "Component 2: conveyance = gutters and downpipes sized for peak rainfall intensity.",
                  "Component 3: filter = first-flush diverter (0.2-0.5 mm) + sand-gravel-charcoal filter.",
                  "Component 4: storage tank OR recharge pit; storage 5,000 L for a 4-person house at 50 L/day for 25 days.",
                  "First-flush diverter discards dust and bird droppings accumulated since the last rain.",
                  "Choose storage if dry spells are long; choose recharge if aquifer is depleted or space is short.",
                ],
              },
              {
                q: "State the typical runoff coefficient for a concrete roof.",
                marks: 2,
              },
              {
                q: "What is a first-flush diverter and why is it necessary?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Recharge pits and trenches",
            body: [
              "A recharge pit is a rectangular or circular excavation, typically 1-2 m in diameter and 2-3 m deep, that receives harvested rainwater and allows it to percolate into the underlying aquifer. The pit is filled with graded filter material - boulders at the bottom (150-200 mm size), pebbles in the middle (20-40 mm) and coarse sand at the top (2-6 mm) - which filters suspended solids and provides void space for water storage during the percolation process. An inflow pipe brings water from the roof or surface; an overflow pipe at the top discharges excess to a storm drain during intense storms. Recharge pits suit small to medium catchments (up to 200 sq.m) and soils with percolation rates above 10 mm per hour.",
              "A recharge trench is the linear analogue: a long, narrow excavation 0.5-1 m wide, 1-2 m deep, and 5-30 m long, backfilled with the same graded filter material. Trenches are preferred for larger catchments or for along-the-boundary installations where a pit would be impractical. The design follows Darcy's law: percolation rate Q = k x A x i, where k is the soil hydraulic conductivity, A is the wetted base area of the trench, and i is the hydraulic gradient (approximately 1 for a vertical column). For a sandy loam soil (k ~10 to the minus 5 m/s), a 1 m wide x 10 m long trench with 1 m water depth percolates about 10 x 1 x 1 x 10^-5 = 0.0001 cu.m/s = 0.36 cu.m/h - the trench must be sized to match the inflow during the design storm.",
              "Other recharge structures serve special cases. Recharge wells (also called injection wells) are boreholes 150-300 mm diameter and 10-30 m deep that bypass surface low-permeability layers to inject water directly into a confined aquifer; they suit urban sites where space forbids a pit. Percolation tanks are small surface impoundments 0.5-2 m deep over 100-1000 sq.m, used in rural settings to recharge regional aquifers. Recharge structures must be sited at least 5 m from foundations and 10 m from soak pits or septic tanks to avoid contamination. Maintenance is critical: the top sand layer must be replaced annually, the pit desilted every 2-3 years, and the inflow screen cleaned before each monsoon. Without maintenance a recharge pit silts up and becomes ineffective within 3-5 years.",
            ],
            bullets: [
              "Recharge pit: 1-2 m dia, 2-3 m deep, graded filter (boulders-pebbles-sand).",
              "Recharge trench: 0.5-1 m wide, 1-2 m deep, 5-30 m long; preferred for larger or boundary installations.",
              "Design by Darcy: Q = k x A x i; k = soil hydraulic conductivity, A = wetted area, i ~1.",
              "Sandy loam k ~10^-5 m/s; trench must be sized to match inflow during design storm.",
              "Recharge well (injection): 150-300 mm bore, 10-30 m deep; bypasses low-k surface layers, suits urban sites.",
              "Percolation tank: 0.5-2 m deep, 100-1000 sq.m; rural regional recharge.",
              "Siting: >=5 m from foundations, >=10 m from septic tanks; replace top sand annually, desilt every 2-3 years.",
            ],
            table: {
              caption: "Recharge structure selection by site and soil.",
              headers: ["Structure", "Best for", "Sizing", "Limitation"],
              rows: [
                ["Recharge pit", "Small-medium catchment, k > 10 mm/h", "1-2 m dia x 2-3 m deep", "Clogs in 3-5 yr without maintenance"],
                ["Recharge trench", "Large/boundary catchment", "0.5-1 m x 1-2 m x 5-30 m", "Land length required"],
                ["Recharge well", "Urban, low-k surface layer", "150-300 mm x 10-30 m bore", "Higher cost, deeper drilling"],
                ["Percolation tank", "Rural, regional recharge", "100-1000 sq.m x 0.5-2 m", "Land area required"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a recharge structure",
              caption:
                "Branch by catchment size and site constraint - each branch has a clear best fit.",
              start: "Site and catchment known",
              branches: [
                { label: "Small-medium roof, k > 10 mm/h", outcome: "Recharge pit 1-2 m dia", good: true },
                { label: "Large roof or boundary strip", outcome: "Recharge trench 5-30 m long", good: true },
                { label: "Urban, low-k surface layer", outcome: "Recharge well (injection bore)", good: true },
                { label: "Rural, regional aquifer", outcome: "Percolation tank 100-1000 sq.m", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Maintenance is not optional",
              body: "A recharge pit without annual sand replacement and 2-3 yearly desilting clogs in 3-5 years and becomes useless. Always state the maintenance schedule in the design answer - examiners mark its omission because field failure is so common.",
            },
            keyTerms: [
              { term: "Recharge pit", definition: "A 1-2 m diameter, 2-3 m deep excavation backfilled with graded boulders-pebbles-sand that percolates harvested rainwater into the aquifer." },
              { term: "Recharge trench", definition: "A 0.5-1 m wide, 1-2 m deep, 5-30 m long linear filter that percolates harvested rainwater; designed by Darcy's law Q = k x A x i." },
              { term: "Recharge (injection) well", definition: "A 150-300 mm bore 10-30 m deep that bypasses low-permeability surface layers to inject water directly into a confined aquifer." },
            ],
            examQuestions: [
              {
                q: "Describe recharge pits, trenches and injection wells. Give dimensions and filter material for a recharge pit, state Darcy's law for trench sizing, list the siting constraints, and outline the maintenance schedule.",
                marks: 7,
                outline: [
                  "Recharge pit: 1-2 m dia x 2-3 m deep, graded filter boulders (150-200 mm) - pebbles (20-40 mm) - sand (2-6 mm).",
                  "Recharge trench: 0.5-1 m wide, 1-2 m deep, 5-30 m long; for large or boundary catchments.",
                  "Darcy's law: Q = k x A x i; sandy loam k ~10^-5 m/s; size trench to match inflow at design storm.",
                  "Recharge (injection) well: 150-300 mm bore, 10-30 m deep; bypasses low-k surface layer in urban sites.",
                  "Percolation tank: rural, 100-1000 sq.m x 0.5-2 m for regional recharge.",
                  "Siting: >=5 m from foundations, >=10 m from soak pits and septic tanks to avoid contamination.",
                  "Maintenance: replace top sand annually, desilt every 2-3 years, clean inflow screen before monsoon.",
                ],
              },
              {
                q: "State Darcy's law for percolation and define each term.",
                marks: 2,
              },
              {
                q: "Why must a recharge pit be sited at least 10 m from a septic tank?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Greywater recycling",
            body: [
              "Greywater is the wastewater from showers, baths, hand basins, laundry and kitchen sinks - everything except toilet (black) water. It makes up 50-70% of a household's wastewater volume but carries only 30-40% of the organic load, making it far easier to treat and reuse than combined sewage. Untreated greywater contains soap, detergent, hair, food particles and skin cells (BOD 100-300 mg/L, suspended solids 50-150 mg/L); with simple treatment it can be reused for toilet flushing, garden irrigation and floor washing, cutting fresh-water demand by 30-50% in a typical household.",
              "The treatment chain for a small building has four stages: a coarse filter at the source (a mesh screen to remove hair and lint), a primary settling tank (where solids settle as sludge and light oils float), a secondary treatment (a small constructed wetland, a sand filter or an aerobic biological reactor that breaks down dissolved organics), and a disinfection stage (chlorine, UV or ozone) before the treated water is stored in a recycled-water tank. The treated water has BOD below 10 mg/L and is suitable for flushing and irrigation; it is not potable and must be carried in a separate, colour-coded (often purple) pipe network to prevent cross-connection.",
              "Recycled greywater closes the building's water loop and earns GRIHA and LEED credits. The simplest system - a laundry-to-garden diversion - costs under 5,000 rupees and pays back in a year; a full treatment system for a 100-unit apartment adds 50,000-2,00,000 rupees of capital but recovers it in 3-5 years through reduced fresh-water and sewer bills. Design rules: greywater must be used within 24 hours untreated or 48 hours treated to avoid odour and pathogen growth; kitchen sink water (high in fats and food) is harder to treat and is often excluded; chlorine dosing must keep a 0.5 mg/L residual at the point of use. The treatment chain forms a clear cycle that returns clean water to non-potable uses, reducing both fresh-water abstraction and sewage discharge.",
            ],
            bullets: [
              "Greywater = showers, baths, basins, laundry, kitchen sinks; excludes toilet (black) water.",
              "Volume: 50-70% of household wastewater; BOD 100-300 mg/L, SS 50-150 mg/L.",
              "Reuse: toilet flushing, garden irrigation, floor washing - cuts fresh-water demand 30-50%.",
              "Treatment chain: coarse filter -> settling tank -> wetland/sand/aerobic reactor -> disinfection.",
              "Treated water: BOD < 10 mg/L; non-potable; separate purple pipe network to prevent cross-connection.",
              "Use within 24 h untreated or 48 h treated; chlorine residual 0.5 mg/L at point of use.",
              "Payback: 1 year for laundry-to-garden; 3-5 years for full apartment system.",
            ],
            table: {
              caption: "Greywater treatment stages and target water quality.",
              headers: ["Stage", "Process", "BOD out (mg/L)", "Reuse"],
              rows: [
                ["Raw greywater", "Untreated", "100-300", "None"],
                ["After coarse filter + settling", "Physical", "60-150", "Sub-surface irrigation"],
                ["After secondary (wetland/aerobic)", "Biological", "<20", "Toilet flushing"],
                ["After disinfection", "Chemical/UV", "<10", "Flushing, garden, floor wash"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The greywater recycling loop",
              caption:
                "From shower to treatment to non-potable reuse - the cycle cuts fresh-water demand by 30-50%.",
              steps: [
                { label: "Source: shower, basin, laundry", note: "raw greywater, BOD 100-300" },
                { label: "Coarse filter + settling", note: "physical removal" },
                { label: "Secondary treatment", note: "wetland or aerobic reactor" },
                { label: "Disinfection", note: "chlorine or UV" },
                { label: "Storage in recycled-water tank", note: "purple pipe network" },
                { label: "Reuse: flushing, irrigation", note: "non-potable loop closed" },
              ],
            },
            callout: {
              type: "warning",
              title: "Cross-connection kills",
              body: "A recycled greywater system with a cross-connection to the potable supply is a public-health hazard. The non-potable network must be physically separate, colour-coded (purple in international practice), labelled at every outlet, and back-flow protected. State this rule in any greywater design answer.",
            },
            keyTerms: [
              { term: "Greywater", definition: "Wastewater from showers, baths, basins, laundry and kitchen sinks, excluding toilet water; 50-70% of household volume, BOD 100-300 mg/L." },
              { term: "Constructed wetland", definition: "A planted gravel-bed secondary treatment that breaks down dissolved organics in greywater by microbial action in the root zone." },
              { term: "Cross-connection", definition: "An unintended link between potable and recycled-water pipe networks; prevented by physical separation, purple colour-coding and back-flow devices." },
            ],
            examQuestions: [
              {
                q: "Define greywater and state its share of household wastewater. Describe the four-stage treatment chain, the target water quality, two permissible reuses, and the cross-connection safeguards required.",
                marks: 7,
                outline: [
                  "Greywater: showers, baths, basins, laundry, kitchen sinks (not toilets); 50-70% of household volume.",
                  "Raw BOD 100-300 mg/L, SS 50-150 mg/L - lower organic load than black water.",
                  "Stage 1: coarse mesh filter (hair, lint) and settling tank (sludge + oil).",
                  "Stage 2: secondary biological - constructed wetland, sand filter or aerobic reactor.",
                  "Stage 3: disinfection by chlorine, UV or ozone; target BOD < 10 mg/L.",
                  "Reuses: toilet flushing, garden irrigation, floor washing - cuts fresh demand 30-50%.",
                  "Safeguards: separate purple pipe network, back-flow preventers, label every outlet.",
                ],
              },
              {
                q: "State two permissible end uses of treated greywater.",
                marks: 2,
              },
              {
                q: "Why must untreated greywater be used within 24 hours?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Composting toilets and on-site solid waste management",
            body: [
              "A composting toilet is a dry sanitation system that decomposes human excreta into a stable compost through aerobic biological action, without water for flushing. The two main types are continuous (a single chamber where material slowly moves from inlet to outlet over 6-12 months) and batch (two or more chambers alternated every 6 months while one composts). The composting process requires carbon-rich material (sawdust or coconut coir added after each use), moisture at 40-60%, aeration through a vent pipe, and temperature above 15 degrees Celsius. The output compost is pathogen-free after a year and is used as soil amendment in non-food gardens. Each composting toilet saves 4,000-6,000 litres of water per person per year compared to a flush toilet, and produces no sewage.",
              "The design of a composting toilet has three components: the toilet pedestal (a conventional-looking seat over a chute), the composting chamber (sized at 0.3-0.6 cubic metres per person for a year's retention), and the vent system (a 75-100 mm pipe with a fan drawing air up through the chamber to remove odour and moisture). The chamber must be accessible from outside for emptying, must slope toward the outlet for compost movement, and must drain leachate through a small soak pit. A household of four needs a chamber of about 1.5 cubic metres - a manageable size below a raised floor or behind the toilet wall. Composting toilets suit water-scarce regions (Leh-Ladakh, rural Kerala, Auroville) and are unsuitable for high-density urban apartments where chamber maintenance is impractical.",
              "On-site solid waste management is the operational discipline of segregating household waste at source and processing it on site. The standard three-bin system separates wet (biodegradable kitchen waste), dry (recyclable paper, plastic, metal, glass) and hazardous (batteries, e-waste, sanitary waste). Wet waste is composted on site in a terracotta or plastic aerobic composter (3-4 weeks for a household of four), producing 5-10 kg of compost per month for the garden; dry waste is held for the weekly recycler pickup; hazardous waste is collected by authorised e-waste handlers. A well-run three-bin system diverts 70-90% of household waste from landfill, the largest single reduction a building can make in its waste footprint, and earns GRIHA and LEED credits.",
            ],
            bullets: [
              "Composting toilet: dry sanitation, aerobic decomposition, no flush water.",
              "Two types: continuous (single chamber, 6-12 months) and batch (alternating chambers every 6 months).",
              "Conditions: carbon-rich cover material (sawdust), moisture 40-60%, vented, temp > 15 deg C.",
              "Saves 4,000-6,000 L/person/year vs flush toilet; output compost pathogen-free after 12 months.",
              "Chamber size 0.3-0.6 cu.m/person/year; 1.5 cu.m for a 4-person household.",
              "Three-bin solid waste: wet (composted on site), dry (recycler pickup), hazardous (e-waste handler).",
              "Three-bin system diverts 70-90% of household waste from landfill - earns GRIHA and LEED credits.",
            ],
            table: {
              caption: "Conventional flush toilet vs composting toilet (per person per year).",
              headers: ["Parameter", "Flush toilet", "Composting toilet"],
              rows: [
                ["Water use (L/yr)", "~5,000", "~0"],
                ["Sewage generated (L/yr)", "~5,000", "0"],
                ["Output", "Black water to sewer", "Compost (~20 kg)"],
                ["Energy for treatment", "Central STP", "None (passive)"],
                ["Suited to", "Urban grid", "Water-scarce, rural, peri-urban"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Three-bin solid waste segregation",
              caption:
                "Segregation at source diverts 70-90% of household waste from landfill.",
              left: {
                heading: "Wet bin (biodegradable)",
                items: [
                  "Kitchen scraps, peels",
                  "Tea leaves, coffee grounds",
                  "Composted on site in 3-4 weeks",
                  "Yields 5-10 kg compost/month",
                  "Used for garden soil amendment",
                ],
              },
              right: {
                heading: "Dry + hazardous bins",
                items: [
                  "Dry: paper, plastic, metal, glass",
                  "Held for weekly recycler pickup",
                  "Hazardous: batteries, e-waste",
                  "Collected by authorised handlers",
                  "Never mixed with wet bin",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Cover every use",
              body: "Composting toilets fail by odour if the cover material (sawdust or coir) is skipped after each use. The carbon-rich cover balances the high-nitrogen excreta, raises the C/N ratio to 25-30, and prevents flies and smell. State this operational rule alongside the design.",
            },
            keyTerms: [
              { term: "Composting toilet", definition: "A dry sanitation system that aerobically decomposes excreta with carbon-rich cover material into pathogen-free compost over 6-12 months." },
              { term: "Aerobic composting", definition: "Biological decomposition in the presence of oxygen, requiring C/N ratio ~25-30, moisture 40-60%, and aeration." },
              { term: "Three-bin system", definition: "Source segregation of household waste into wet (biodegradable), dry (recyclable) and hazardous streams for on-site or authorised handling." },
            ],
            examQuestions: [
              {
                q: "Describe a composting toilet and a three-bin solid waste system. State the two types of composting toilet, the operational conditions, the water saving per person per year, and the waste diversion achieved by three-bin segregation.",
                marks: 7,
                outline: [
                  "Composting toilet: dry, aerobic decomposition of excreta with carbon-rich cover; no flush water.",
                  "Two types: continuous (single chamber, 6-12 months) and batch (alternating chambers every 6 months).",
                  "Conditions: cover material (sawdust/coir) after each use, moisture 40-60%, vented, temp > 15 deg C.",
                  "Water saving 4,000-6,000 L/person/year; output compost pathogen-free after 12 months.",
                  "Chamber size 0.3-0.6 cu.m/person/year; 1.5 cu.m for a 4-person household.",
                  "Three-bin: wet (composted on site, 5-10 kg/month), dry (recycler pickup), hazardous (e-waste handler).",
                  "Diverts 70-90% of household waste from landfill; earns GRIHA and LEED credits.",
                ],
              },
              {
                q: "State the water saving per person per year of a composting toilet over a flush toilet.",
                marks: 2,
              },
              {
                q: "Name the three streams in a household three-bin solid waste system.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Case studies of eco-villages and green buildings",
            body: [
              "Indian eco-villages and green buildings demonstrate that the technologies of Units I-IV work at scale. The Auroville Earth Institute, in Tamil Nadu, has built over 1,000 buildings using compressed stabilised earth blocks (CSEB at 5% cement), ferro-cement channel roofs and Catalan-vault earth roofs; its visitor centre and Vikas community are textbook examples of cost-effective green construction with walls costing 40-50% below fired brick and roofs 30% below RCC. Laurie Baker's COSTFORD projects in Kerala - notably the 'Hamlet' residence in Thiruvananthapuram - use rat-trap bond, filler slabs, arch foundations and exposed brick to deliver a complete house at 60-70% of conventional cost.",
              "On the corporate side, Suzlon One Earth in Pune is the most awarded Indian green building: a 7.5 lakh square foot campus that achieves LEED Platinum and GRIHA 5-star, with 80% of daylight hours lit naturally, 77% of water recycled on site, 8% of energy from on-site wind and solar, and an energy use intensity of about 90 kWh per square metre per year (less than half a conventional Indian office). ITC Green Centre in Gurgaon is another benchmark: LEED Platinum, 40% water saving, 30% energy saving, and the first Indian building to earn the LEED EBOM (Existing Building) certification. The Godrej Plant 11 in Mumbai and the Wipro campus in Gurgaon round out the leading examples.",
              "Beyond individual buildings, the eco-village movement demonstrates community-scale sustainability. Auroville itself, founded in 1968, hosts experimental earth construction, reforestation, solar and wind power, and integrated water management across 100+ settlements. Siddharth Village in Bhubaneswar, Mahatma Gandhi's Sewagram Ashram in Wardha, and the Dhauladhar eco-villages in Himachal Pradesh extend the model across climates. The common lessons are: site planning and orientation come first, local materials and labour anchor cost-effectiveness, water and waste are managed on site, and passive design reduces operational energy. Case studies earn marks because they prove the theory works - examiners reward specific projects with specific features (cost saving, energy saving, water saving) rather than vague references to 'green buildings'.",
            ],
            bullets: [
              "Auroville Earth Institute: 1000+ buildings in CSEB (5% cement) + ferro-cement + Catalan vaults.",
              "COSTFORD Hamlet (Laurie Baker, Thiruvananthapuram): rat-trap + filler + arch + exposed brick; 60-70% of conventional cost.",
              "Suzlon One Earth Pune: LEED Platinum + GRIHA 5-star; EUI ~90 kWh/sq.m/yr (half conventional), 80% daylight, 77% water recycled.",
              "ITC Green Centre Gurgaon: LEED Platinum + first Indian LEED EBOM; 40% water + 30% energy saving.",
              "Godrej Plant 11 Mumbai and Wipro Gurgaon: corporate green benchmarks.",
              "Auroville (founded 1968): 100+ settlements, earth + reforestation + solar/wind + integrated water.",
              "Common lessons: orientation first, local materials, on-site water/waste, passive design reduces energy.",
            ],
            table: {
              caption: "Indian green building case studies at a glance.",
              headers: ["Project", "Location", "Rating", "Headline feature"],
              rows: [
                ["Auroville Earth Institute", "Auroville, TN", "n/a", "1000+ CSEB + ferro-cement buildings"],
                ["COSTFORD Hamlet", "Thiruvananthapuram", "n/a", "Laurie Baker rat-trap + filler, 60-70% cost"],
                ["Suzlon One Earth", "Pune", "LEED Plat + GRIHA 5-star", "EUI 90 kWh/sq.m/yr, 77% water recycled"],
                ["ITC Green Centre", "Gurgaon", "LEED Plat + EBOM", "40% water + 30% energy saving"],
                ["Godrej Plant 11", "Mumbai", "LEED Gold", "Retrofitted green factory"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Case studies by scale and rating",
              caption:
                "Scale on x, certification on y - place each project at the right intersection.",
              axes: { x: "Project scale", y: "Certification level" },
              quadrants: [
                { label: "Single house + no formal rating -> COSTFORD Hamlet", note: "Laurie Baker affordable green" },
                { label: "Single house + rated -> Auroville Vikas", note: "CSEB + ferro-cement" },
                { label: "Campus + no formal rating -> Auroville township", note: "100+ settlements, integrated" },
                { label: "Campus + LEED Plat/GRIHA 5-star -> Suzlon One Earth", note: "EUI 90, 77% water recycled" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the project, name the number",
              body: "Case study answers must pair a named project with a specific number: Suzlon One Earth EUI 90 kWh/sq.m/yr, COSTFORD Hamlet at 60-70% of conventional cost, Auroville 1000+ CSEB buildings. Vague 'many Indian green buildings exist' earns no marks.",
            },
            keyTerms: [
              { term: "Eco-village", definition: "A community-scale settlement designed for sustainability across construction, energy, water, waste and food - e.g. Auroville (Tamil Nadu, founded 1968)." },
              { term: "Energy use intensity (EUI)", definition: "Annual building energy consumption per square metre (kWh/sq.m/yr); Suzlon One Earth achieves ~90, half a conventional Indian office." },
              { term: "LEED EBOM", definition: "LEED for Existing Buildings: Operations and Maintenance - the rating applied to operating rather than newly built green buildings." },
            ],
            examQuestions: [
              {
                q: "Discuss two Indian eco-village or green building case studies - one community-scale and one corporate. For each, state the location, the rating achieved, two specific technologies used, and one quantified performance metric.",
                marks: 7,
                outline: [
                  "Case 1 (community): Auroville Earth Institute, Tamil Nadu (founded 1968, 100+ settlements).",
                  "Auroville technologies: CSEB at 5% cement + ferro-cement channel roofs + Catalan vaults.",
                  "Auroville metric: 1000+ CSEB buildings; wall cost 40-50% below fired brick.",
                  "Case 2 (corporate): Suzlon One Earth, Pune - LEED Platinum + GRIHA 5-star.",
                  "Suzlon technologies: passive design + 8% on-site wind/solar + 77% water recycling.",
                  "Suzlon metric: EUI ~90 kWh/sq.m/yr (less than half a conventional Indian office); 80% daylight hours.",
                  "Common lesson: orientation + local materials + on-site water/waste + passive design reduce energy and cost.",
                ],
              },
              {
                q: "State the energy use intensity achieved by Suzlon One Earth, Pune.",
                marks: 2,
              },
              {
                q: "Name the Indian engineer who popularised rat-trap bond and filler slab in cost-effective housing.",
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
        "RGPV CE-603(D) papers spread 60-70 of the marks across alternative building materials (Units II), cost-effective technologies (Unit III) and rainwater harvesting (Unit V), with Unit I and Unit IV supplying the definitional short questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Alternative building materials: fly ash bricks, AAC, bamboo, ferro-cement, CSEB", weight: "12-16 marks", note: "Almost guaranteed; one full 7-mark on properties + one short on a single material." },
        { topic: "Rat-trap bond, filler slabs, arch foundations, precast channel slabs", weight: "10-14 marks", note: "Draw the bond or section; quote the 20-25% / 30-40% / 30-50% savings." },
        { topic: "Rainwater harvesting and recharge pit sizing", weight: "8-10 marks", note: "Water-balance calculation appears almost every paper; size the tank for 20-30 day dry spell." },
        { topic: "LEED vs GRIHA rating systems", weight: "7-9 marks", note: "Compare point by point; do not confuse Platinum (LEED) with 5-star (GRIHA)." },
        { topic: "Life cycle assessment and carbon footprint", weight: "7-9 marks", note: "Quote ISO 14040/14044 and the four stages; cement 0.85 t CO2/t is quotable." },
        { topic: "Cost comparison of green vs conventional construction", weight: "6-8 marks", note: "Tabulate per-head costs; never skip the payback calculation." },
        { topic: "Passive solar design and orientation", weight: "6-8 marks", note: "Sketch south-facing section with overhang; cite solar altitude at latitude 23 deg." },
        { topic: "Natural ventilation, daylighting and shading devices", weight: "6-8 marks", note: "Stack formula dP = 0.042 h dT; shading families by facade." },
        { topic: "Greywater recycling and composting toilets", weight: "4-6 marks", note: "Treatment chain + cross-connection safeguard; cover material after each use." },
        { topic: "Indian case studies (Auroville, COSTFORD, Suzlon One Earth)", weight: "4-6 marks", note: "Name the project with a specific number - vague answers lose all marks." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - sustainable principles", tasks: ["Need for sustainability, headline numbers, embodied energy table", "Green building five pillars + LEED vs GRIHA side-by-side table", "LCA four stages (ISO 14040/14044) + carbon footprint of cement, steel, brick"] },
        { week: "Week 2", focus: "Unit II part 1 - earth and ash materials", tasks: ["Stabilised mud blocks: ideal soil gradation, Auram press, curing", "Fly ash bricks and AAC: tabulate strength, density, thermal conductivity", "Recycled aggregate concrete: IS 383 limit, ITZ weakness"] },
        { week: "Week 3", focus: "Unit II part 2 - bamboo and ferro-cement", tasks: ["Bamboo: IS 15988, 100-150 MPa tensile, boric-borax treatment", "Ferro-cement: casting sequence, two-way mesh action, channel slabs", "Geopolymer: N-A-S-H binder, 90% CO2 reduction, RILEM not IS 456"] },
        { week: "Week 4", focus: "Unit III - cost-effective technologies", tasks: ["Rat-trap bond: 20-25% brick saving, cavity functions, COSTFORD", "Filler slabs: section sketch, deflection check, 30-40% concrete saving", "Arch foundations + precast channel + cost comparison table per head"] },
        { week: "Week 5", focus: "Unit IV - passive design", tasks: ["Passive solar: orientation, solar altitude, overhang rule, five elements", "Natural ventilation: cross vs stack, formula dP = 0.042 h dT, depth limits", "Daylighting + shading + thermal comfort Fanger PMV + green roofs"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Rooftop RWH sizing + recharge pit/trench Darcy sizing", "Greywater chain + composting toilets + three-bin solid waste", "Two full past papers under time; memorise case studies (Auroville, COSTFORD, Suzlon)"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Skim every diagram once - reproducing a diagram in the exam is the fastest 2 marks.",
        "Memorise the five LCA stages and the five GRIHA pillars word for word - both are quotable.",
        "Re-practise one rainwater harvesting sizing problem end to end with the formula V = R x A x C.",
        "Re-read the cost comparison table; the per-square-metre numbers (13,000 vs 9,400 Rs) are quotable.",
        "List the alternative materials with their key property and one limitation each (fly ash, AAC, bamboo, ferro-cement, CSEB).",
        "Sleep seven hours - the exam rewards recall accuracy of numbers more than last-minute cramming of concepts.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Draw the bond pattern or section first for material/technology questions; the diagram anchors the marks before any text.",
        "Quote embodied energy and carbon numbers (cement 0.85 t CO2/t, steel 1.8, bamboo 0.05) - numerical credibility earns marks.",
        "Tabulate comparisons (LEED vs GRIHA, fly ash vs AAC, conventional vs green) - a two-column table reads as a complete answer.",
        "Name Indian case studies (Auroville Earth Institute, Laurie Baker's Hamlet, Suzlon One Earth) with one specific number to ground theory.",
        "Time-box: 7-mark questions in 15 minutes, 2-mark questions in 4 minutes; keep 10 minutes for verification and a diagram redraw if time permits.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing LEED tiers (Certified-Silver-Gold-Platinum) with GRIHA stars (1-5) - Platinum is LEED only; 5-star is GRIHA.",
        "Quoting the carbon footprint of cement without units - state 0.85 t CO2 per tonne of cement, not just '0.85'.",
        "Forgetting that rat-trap bond needs a 230 mm wall thickness and is unsuitable below the DPC - the cavity reduces bearing area.",
        "Listing fly ash brick strengths without noting it replaces clay topsoil and consumes a thermal-plant waste - the environmental driver is half the answer.",
        "Sketching a filler slab without the filler material (Mangalore tiles or earthen pots) and without noting deflection is the governing check.",
        "Omitting the payback period in cost comparison - the green premium only wins if payback (4-7 years) is computed.",
      ],
    },
  ],
};
