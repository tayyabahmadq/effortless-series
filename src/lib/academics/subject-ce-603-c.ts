/**
 * Academics - RGPV Civil Engineering VI Semester subject: CE-603(C) Advance
 * Pavement Design.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * Code samples cover ESAL computation (Unit II) and Westergaard stress
 * computation (Unit IV).  ASCII only: the few non-ASCII characters used are
 * the middle dot, en/em dash and the math symbols approximately, greater-or-
 * equal, less-or-equal and plus-minus, all whitelisted by the audit.
 */

import type { AcademicSubject } from "./types";

export const ce603c: AcademicSubject = {
  id: "ce-603-c",
  code: "CE-603(C)",
  title: "Advance Pavement Design",
  semester: "VI Semester",
  program: "RGPV - Civil Engineering",
  tagline:
    "The complete visual guide to highway pavement engineering for RGPV VI Semester: flexible and rigid pavement types, design parameters from ESAL to CBR, the CBR / Group Index / IRC / AASHTO flexible methods, Westergaard rigid pavement analysis, and pavement evaluation, distress and maintenance.",
  description:
    "Five units walk from the layered structure of flexible and rigid pavements and the function of every course, through traffic characterisation with ESAL and VDF plus subgrade strength by CBR and modulus of subgrade reaction, into the four classical flexible pavement design methods with worked examples and the failure criteria they protect against, then across Portland cement concrete pavements with joints, dowels and Westergaard interior, edge and corner stresses, and finally into pavement performance, distress identification, the pavement management system, functional and structural evaluation, and overlays, recycling and drainage.",
  accentColor: "#f59e0b",
  emoji: "PD",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Pavement Types and Components",
      summary:
        "Unit I introduces the two families of highway pavement - flexible and rigid - and the layered structure that distinguishes them, the prepared subgrade beneath, the granular sub-base and base courses that distribute load, the bituminous or concrete surfacing that carries traffic, and the function each layer discharges.",
      chapter: {
        number: "01",
        title: "Pavement Types and Components",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the flexible versus rigid comparison, the layered pavement structure with subgrade, sub-base, base and surfacing, soil-corrective work for the subgrade, the granular and bituminous layers above, and the load-spreading, drainage, smoothness and skid-resistance functions that each layer delivers.",
        inOneBreath:
          "A pavement is a layered structure over natural soil that distributes wheel loads to the subgrade; flexible pavements spread load through granular layers and bituminous surfacing while rigid pavements bridge loads through a stiff concrete slab; the subgrade is the prepared natural soil, the sub-base is the drainage and frost-protection layer, the base is the principal load-spreading course, the surfacing provides smoothness and skid resistance; each layer is designed for a distinct function and the failure of any one compromises the whole.",
        sections: [
          {
            number: "1.1",
            title: "Flexible versus rigid pavements",
            body: [
              "A highway pavement is the engineered structure that separates the wheels of a moving vehicle from the natural soil beneath, and it does so by spreading each wheel load until the pressure reaching the subgrade falls below what the soil can sustain. Two philosophies govern the design. A flexible pavement is built from bituminous and granular materials that deflect under load and spread it by interparticle friction; a rigid pavement is a Portland cement concrete slab that bridges the load through beam action of the slab itself. The choice between them decides construction cost, riding quality, maintenance burden and design life for the next thirty years.",
              "Flexible and rigid pavements differ sharply in their load-spreading mechanism. A flexible pavement distributes load layer by layer, each course spreading the contact pressure over a wider area than the one above, so the strongest layer is the surfacing and the weakest is the subgrade. A rigid pavement, in contrast, behaves as a stiff beam: the slab itself carries bending moments and the subgrade reaction is far more uniform, so even a weak subgrade is acceptable as long as the slab does not crack. This single mechanical difference drives the contrast in joint detailing, drainage requirements, faulting behaviour and the kind of distress expected over time.",
              "Selection between flexible and rigid pavements is governed by subgrade strength, traffic volume and axle loads, climate, availability of materials, initial cost and the maintenance budget. Flexible pavements suit low-to-medium traffic, soft subgrades and warm climates, with bitumen available cheaply; rigid pavements are preferred for high-axle-load corridors, waterlogged or expansive soils, and intersections, bus stops and toll plazas where slow-moving heavy vehicles cause rutting. Many modern Indian expressways use a composite section - rigid pavement for the running lanes and flexible shoulders - to combine the fatigue life of concrete with the easy maintenance of bituminous surfacing at the kerb.",
            ],
            bullets: [
              "Flexible pavement: bituminous surfacing over granular layers; deflects under load and spreads by interparticle friction.",
              "Rigid pavement: Portland cement concrete slab; bridges load through beam action and produces near-uniform subgrade reaction.",
              "Load spread: flexible layers spread at roughly 45 degrees; rigid slab spreads across several metres through bending.",
              "Design life: flexible 10-15 years to first major maintenance; rigid 30-40 years before resealing joints.",
              "Failure mode: flexible ruts and develops alligator cracking; rigid cracks at corners, edges and joint faults.",
              "Selection drivers: traffic, subgrade CBR, rainfall, material availability and life-cycle cost - never initial cost alone.",
              "Composite pavements: rigid slab under the running lanes plus flexible shoulders combine the strengths of both families.",
            ],
            table: {
              caption: "Flexible versus rigid pavements at a glance.",
              headers: ["Aspect", "Flexible", "Rigid"],
              rows: [
                ["Material", "Bituminous + granular", "Portland cement concrete"],
                ["Load spread", "Layer-by-layer, ~45 deg", "Beam action of slab"],
                ["Deflection", "High, recoverable", "Low, elastic"],
                ["Subgrade pressure", "Reduces with depth", "Nearly uniform"],
                ["Design life", "10-15 years", "30-40 years"],
                ["Joints", "Continuous", "Expansion, contraction"],
                ["Typical distress", "Rutting, alligator cracking", "Corner cracking, faulting"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two philosophies of pavement design",
              caption:
                "Flexible layers spread load by friction; rigid slabs bridge load by beam action. The contrast drives every later design decision.",
              left: {
                heading: "Flexible pavement",
                items: [
                  "Bituminous wearing course on top",
                  "Granular base and sub-base below",
                  "Spreads load layer-by-layer",
                  "Deflects under every axle pass",
                  "Easy to stage and resurface",
                ],
              },
              right: {
                heading: "Rigid pavement",
                items: [
                  "Concrete slab on top",
                  "Lean concrete or granular base",
                  "Bridges load as a stiff beam",
                  "Very low elastic deflection",
                  "Longer life but joint-bound",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'compare flexible and rigid pavements', present the comparison as a table covering material, load-spreading mechanism, deflection, subgrade pressure, design life, joints and distress. Examiners reward a structured table plus one sentence each on the load-spread mechanism. Never answer with just bullet points.",
            },
            keyTerms: [
              { term: "Flexible pavement", definition: "A layered structure of bituminous and granular materials that distributes wheel load through layer-by-layer interparticle friction." },
              { term: "Rigid pavement", definition: "A Portland cement concrete slab that distributes wheel load through the beam action of the slab itself, producing near-uniform subgrade reaction." },
              { term: "Composite pavement", definition: "A section combining a rigid slab under the running lanes with flexible shoulders, used to balance fatigue life and maintenance ease." },
              { term: "Beam action", definition: "The bending mechanism by which a stiff slab transfers load across a wider area than its contact patch, central to rigid pavement behaviour." },
            ],
            examQuestions: [
              {
                q: "Differentiate between flexible and rigid pavements with respect to load distribution, materials, deflection, design life, joints and failure modes. Explain which type you would select for a waterlogged high-traffic corridor and why.",
                marks: 7,
                outline: [
                  "Define flexible and rigid pavements in one sentence each.",
                  "Compare load-spreading mechanism: friction layer-by-layer versus slab beam action.",
                  "Tabulate materials, deflection, subgrade pressure, design life and joints.",
                  "List typical distress: rutting and alligator cracking versus corner cracking and faulting.",
                  "Explain that rigid pavement suits waterlogged soils because the slab bridges soft spots.",
                  "Note the longer 30-40 year design life of rigid pavement against high initial cost.",
                  "Conclude with a composite option - rigid lanes with flexible shoulders - for staged maintenance.",
                ],
              },
              {
                q: "Name the two principal load-spreading mechanisms in highway pavements in one line each.",
                marks: 2,
              },
              {
                q: "State three distress types typical of flexible pavements.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Pavement structure and layers",
            body: [
              "Every highway pavement, whether flexible or rigid, is a layered structure that transmits the wheel load from the surface down to the natural soil. The classical flexible pavement stacks four courses over the prepared subgrade: a compacted sub-base of granular or stabilised material, a base course of higher-quality crushed aggregate or wet-mix macadam, a binder course of bituminous concrete, and a wearing course that furnishes the smooth, skid-resistant running surface. A rigid pavement replaces the upper three courses with a single Portland cement concrete slab resting on a lean concrete or granular base, occasionally with a drainage layer beneath.",
              "Each layer is engineered to a distinct modulus and thickness, and the modulus always decreases with depth: the surfacing is the stiffest, the subgrade the softest. This modulus gradient forces the load to spread laterally as it travels downward, so a 0.1 square metre contact patch can leave the subgrade receiving pressure over several square metres. Where the natural subgrade is weak, a capping layer of selected soil or geosynthetic reinforcement is added at the bottom of the stack to upgrade the effective modulus before the granular sub-base is laid.",
              "The layer count is a design choice driven by traffic, subgrade strength and economics. Low-traffic rural roads may omit the binder course or combine sub-base and base into a single granular layer, while heavy-traffic expressways add a drainage layer, a crack-relief layer or a stress-absorbing membrane interlayer to extend life. The terminology is consistent across Indian Roads Congress codes: IRC 37 governs flexible pavements and IRC 58 governs rigid pavements, with both codes specifying the layers, their materials and their minimum thicknesses for each traffic class.",
            ],
            bullets: [
              "Classical flexible pavement layers: subgrade, sub-base, base, binder course and wearing course.",
              "Modulus always decreases with depth: stiffest at top, softest at the subgrade, forcing lateral load spread.",
              "Capping layer: a selected-soil or geosynthetic course added below the sub-base when CBR is very low.",
              "Rigid pavement: concrete slab plus lean concrete or granular base, occasionally a drainage layer beneath.",
              "IRC 37 governs flexible pavements; IRC 58 governs rigid pavements in India.",
              "Layer count is a design choice: low-traffic roads combine courses, expressways add drainage or interlayers.",
              "Wearing course carries traffic directly and provides smoothness, skid resistance and waterproofing.",
            ],
            table: {
              caption: "Typical flexible pavement layers from top to bottom.",
              headers: ["Layer", "Material", "Typical thickness (mm)", "Modulus role"],
              rows: [
                ["Wearing course", "Bituminous concrete", "40-50", "Stiffest"],
                ["Binder course", "Dense bituminous macadam", "50-75", "High"],
                ["Base course", "Wet-mix macadam / crushed aggregate", "150-250", "Medium"],
                ["Sub-base", "Granular sub-base / stabilised soil", "150-300", "Low-medium"],
                ["Capping (if needed)", "Selected soil / geosynthetic", "150-200", "Low"],
                ["Subgrade", "Compacted natural soil", "n/a", "Lowest"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layered structure of a flexible pavement",
              caption:
                "Stiffest layer at the top, softest at the subgrade. The modulus gradient forces wheel load to spread laterally as it descends.",
              layers: [
                { label: "Wearing course (bituminous concrete)", note: "stiffest, carries traffic" },
                { label: "Binder course (dense bituminous macadam)" },
                { label: "Base course (wet-mix macadam)" },
                { label: "Sub-base (granular or stabilised)" },
                { label: "Capping layer (selected soil or geosynthetic)" },
                { label: "Subgrade (compacted natural soil)", note: "softest, lowest modulus" },
              ],
            },
            callout: {
              type: "tip",
              title: "Why modulus must decrease with depth",
              body: "A stiff layer over a soft layer spreads load laterally because the stiff layer deforms less and forces the load to fan out before reaching the soft layer. Reversing this order - a soft layer over a stiff one - concentrates load and fails quickly. Always draw the modulus gradient on a section sketch.",
            },
            keyTerms: [
              { term: "Wearing course", definition: "The top bituminous or concrete layer that directly carries traffic and provides smoothness, skid resistance and waterproofing." },
              { term: "Base course", definition: "The principal load-spreading granular or bituminous layer immediately beneath the surfacing, engineered to a high modulus." },
              { term: "Sub-base", definition: "The granular or stabilised layer between subgrade and base, providing drainage, frost protection and additional load spread." },
              { term: "Capping layer", definition: "A selected-soil or geosynthetic course placed over a very weak subgrade to upgrade the effective modulus before construction." },
            ],
            examQuestions: [
              {
                q: "Describe the layered structure of a flexible pavement with a neat sketch. Explain why the modulus of each layer must decrease with depth and state the function of each layer.",
                marks: 7,
                outline: [
                  "Draw the section: wearing course, binder course, base, sub-base, capping, subgrade.",
                  "Tabulate typical material and thickness for each layer.",
                  "State that modulus must decrease with depth so the stiff top layer spreads load laterally.",
                  "Explain that a reversed modulus gradient concentrates load and fails quickly.",
                  "Give the function of each layer: smoothness, load spread, drainage, frost protection, subgrade protection.",
                  "Reference IRC 37 as the governing code for flexible pavement design in India.",
                  "Conclude with the capping layer used when subgrade CBR is very low.",
                ],
              },
              {
                q: "Name the principal layers of a flexible pavement from top to bottom.",
                marks: 2,
              },
              {
                q: "State the function of the sub-base in a flexible pavement in two lines.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Subgrade",
            body: [
              "The subgrade is the compacted natural soil on which the pavement structure rests, and it is the single most important input to flexible pavement design because every layer above is sized to protect it. A strong subgrade - a well-graded gravelly soil compacted to a high dry density - supports the pavement with minimal deformation, while a weak clayey or silty subgrade will rut, pump and crack the layers above unless corrective measures are taken. Subgrade strength is reported as the California Bearing Ratio (CBR) for flexible pavements and as the modulus of subgrade reaction k for rigid pavements.",
              "Preparation of the subgrade begins with clearing and grubbing the alignment, stripping topsoil to a depth of about 150 millimetres, and grading the surface to the designed formation levels. The exposed soil is then compacted in layers not exceeding 150 to 200 millimetres loose thickness, at a moisture content within plus or minus two per cent of the optimum moisture content determined by the modified Proctor test. Compaction targets 95 to 97 per cent of the maximum dry density for the upper 500 millimetres and 92 to 95 per cent below, ensuring the subgrade does not settle after construction.",
              "Where the natural subgrade is weak or expansive - typical of black cotton soil in central India - corrective measures are applied before pavement construction. The options are soil stabilisation with lime or cement to upgrade CBR, replacement of the weak soil with selected material to a depth of 300 to 600 millimetres, provision of a thicker capping or sub-base, or laying a geosynthetic separator and reinforcement at the interface. Drainage is essential: a waterlogged subgrade loses half its strength, so sub-surface drains, side drains and a cambered formation are provided together with the corrective layer.",
            ],
            bullets: [
              "Subgrade: compacted natural soil supporting the pavement; the single most important design input.",
              "Strength measures: CBR for flexible pavements, modulus of subgrade reaction k for rigid pavements.",
              "Preparation: strip topsoil 150 mm, compact in 150-200 mm layers at plus or minus 2 per cent of OMC.",
              "Compaction target: 95-97 per cent of modified Proctor maximum dry density in the top 500 mm.",
              "Weak subgrade fixes: lime or cement stabilisation, soil replacement, thicker sub-base or geosynthetic.",
              "Drainage is inseparable from subgrade strength: a waterlogged subgrade loses up to half its CBR.",
              "Black cotton soil: a typical weak Indian subgrade needing lime stabilisation or replacement.",
            ],
            table: {
              caption: "Subgrade strength classification by CBR (flexible design).",
              headers: ["CBR (%)", "Classification", "Typical soil", "Design action"],
              rows: [
                ["2-3", "Very weak", "Soft clay, silt", "Replace or lime-stabilise"],
                ["4-5", "Weak", "Silty clay", "Capping layer + thicker sub-base"],
                ["6-8", "Moderate", "Sandy clay", "Standard design acceptable"],
                ["9-15", "Good", "Gravelly sand", "Thinner pavement adequate"],
                ["> 15", "Strong", "Well-graded gravel", "Minimum pavement thickness"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Subgrade preparation workflow",
              caption:
                "From raw alignment to a tested compacted formation - the standard sequence before any pavement layer is laid.",
              stages: [
                { label: "Clear and grub alignment", note: "strip vegetation and debris" },
                { label: "Strip topsoil ~150 mm", note: "remove organic matter" },
                { label: "Grade to formation levels", note: "set camber and longitudinal fall" },
                { label: "Compact in 150-200 mm layers", note: "at plus or minus 2 per cent of OMC" },
                { label: "Field density and CBR test", note: "verify before laying sub-base" },
              ],
            },
            callout: {
              type: "warning",
              title: "Moisture content is non-negotiable",
              body: "Compaction at the wrong moisture content cannot be rescued by more passes. Soil compacted dry of optimum is permeable and ruts in service; soil compacted wet of optimum develops pore pressure and squeezes under load. Always bring the subgrade to within plus or minus two per cent of optimum moisture content before compaction.",
            },
            keyTerms: [
              { term: "Subgrade", definition: "The compacted natural soil forming the foundation of a pavement; its strength is the controlling input to flexible pavement thickness." },
              { term: "California Bearing Ratio (CBR)", definition: "A penetration test expressing subgrade strength as a percentage of the resistance of a standard crushed aggregate; the input to CBR flexible design." },
              { term: "Optimum moisture content (OMC)", definition: "The water content at which a soil attains maximum dry density under a given compactive effort, determined by the modified Proctor test." },
              { term: "Soil stabilisation", definition: "Improvement of subgrade strength by adding lime, cement or other binders to weak soil, used when replacement is uneconomical." },
            ],
            examQuestions: [
              {
                q: "Define the subgrade of a highway pavement. Explain how it is prepared in the field, how its strength is characterised, and the corrective measures adopted for a weak black cotton soil subgrade.",
                marks: 7,
                outline: [
                  "Define subgrade as the compacted natural soil foundation of the pavement.",
                  "State the preparation sequence: clear, strip topsoil, grade, compact in layers.",
                  "Specify compaction at plus or minus 2 per cent of OMC to 95-97 per cent of maximum dry density.",
                  "State that CBR is used for flexible design and modulus of subgrade reaction k for rigid design.",
                  "Explain that black cotton soil is weak and expansive and typically needs lime stabilisation.",
                  "List alternatives: cement stabilisation, soil replacement, geosynthetic reinforcement.",
                  "Add drainage measures because waterlogged subgrade loses up to half its strength.",
                ],
              },
              {
                q: "What is the California Bearing Ratio? Give its typical value for a silty clay subgrade.",
                marks: 2,
              },
              {
                q: "List three corrective measures adopted for a weak subgrade.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Sub-base, base and surfacing",
            body: [
              "Above the subgrade sit the granular layers that turn the natural soil into a pavement: the sub-base and the base. The sub-base is a granular or stabilised course 150 to 300 millimetres thick that provides drainage, frost protection in cold climates, an additional load-spreading layer above the subgrade, and a working platform for construction traffic. Its material is typically a well-graded gravelly soil or crushed aggregate conforming to grading requirements of the Mortar Research and Standards (MORTH) Specifications, compacted to a minimum of 98 per cent of maximum dry density.",
              "The base course is the principal load-bearing layer of a flexible pavement, immediately beneath the bituminous surfacing. It is built from higher-quality crushed aggregate - wet-mix macadam, dense-graded macadam or cement-treated base - and is compacted to a dense, interlocked state that resists rutting and fatigue. The base must be sufficiently stiff to spread axle loads down to the sub-base without itself deforming, and it must be free-draining enough that water entering through the surfacing does not soften it. A properly built base typically has a CBR exceeding 80 per cent.",
              "The surfacing is the top of the pavement and the only layer the road user sees. It comprises a binder course of dense bituminous macadam 50 to 75 millimetres thick, capped by a wearing course of bituminous concrete 40 to 50 millimetres thick. The wearing course is impervious, smooth, skid-resistant and able to resist the abrasion of traffic; the binder course below it is a thicker, coarser bituminous mix that absorbs irregularities in the base and provides the bulk of the bituminous stiffness. Together they protect the granular base from water and distribute the contact pressure of every wheel pass over a wider area of the base.",
            ],
            bullets: [
              "Sub-base: granular or stabilised course 150-300 mm thick providing drainage, frost protection and load spread.",
              "Base course: principal load-bearing layer of crushed aggregate or cement-treated base, compacted to CBR above 80.",
              "Binder course: dense bituminous macadam 50-75 mm thick absorbing base irregularities and adding bituminous stiffness.",
              "Wearing course: bituminous concrete 40-50 mm thick giving smoothness, skid resistance and waterproofing.",
              "Surfacing materials: bituminous concrete, semi-dense bituminous concrete or mastic asphalt for high-traffic roads.",
              "All granular layers compacted to at least 98 per cent of modified Proctor maximum dry density.",
              "Bituminous mixes designed by the Marshall method to target stability, flow and air voids.",
            ],
            table: {
              caption: "Material and quality requirements of granular and bituminous layers.",
              headers: ["Layer", "Typical material", "Thickness (mm)", "Quality target"],
              rows: [
                ["Wearing course", "Bituminous concrete", "40-50", "Marshall stability > 9 kN"],
                ["Binder course", "Dense bituminous macadam", "50-75", "Marshall stability > 9 kN"],
                ["Base course", "Wet-mix macadam / WMM", "150-250", "CBR >= 80%, compaction 98%"],
                ["Sub-base", "Granular sub-base / GSB", "150-300", "CBR >= 30%, compaction 98%"],
                ["Capping (if needed)", "Selected soil / stabilised", "150-200", "CBR >= 8%"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Material quality pyramid of a flexible pavement",
              caption:
                "The stiffest, highest-quality material sits at the apex; the cheapest and weakest forms the broad foundation. Cost per cubic metre rises with height.",
              tiers: [
                { label: "Wearing course - bituminous concrete", note: "highest quality, highest cost" },
                { label: "Binder course - dense bituminous macadam" },
                { label: "Base - wet-mix macadam, CBR >= 80" },
                { label: "Sub-base - granular sub-base, CBR >= 30" },
                { label: "Subgrade - compacted natural soil, weakest", note: "lowest quality, lowest cost" },
              ],
            },
            callout: {
              type: "tip",
              title: "The pyramid is the memory hook",
              body: "Picture the pavement as a pyramid: stiffest, most expensive material at the apex in direct contact with traffic; weakest, cheapest material as the broad base over a wide area. Every layer exists to protect the layer below it, and no layer is thicker than necessary once the one beneath is sound.",
            },
            keyTerms: [
              { term: "Sub-base", definition: "A granular or stabilised course between subgrade and base providing drainage, frost protection and additional load spread." },
              { term: "Base course", definition: "The principal load-bearing granular or cement-treated layer of a flexible pavement, immediately beneath the bituminous surfacing." },
              { term: "Wearing course", definition: "The top bituminous layer that directly carries traffic and provides smoothness, skid resistance and waterproofing." },
              { term: "Marshall stability", definition: "A laboratory measure of the resistance of a bituminous mix to deformation under a slowly applied load at 60 degrees Celsius." },
            ],
            examQuestions: [
              {
                q: "Describe the sub-base, base and surfacing layers of a flexible pavement. State the material, thickness and quality requirement of each, and explain how the material quality changes from subgrade to wearing course.",
                marks: 7,
                outline: [
                  "Define each layer: sub-base, base, binder course, wearing course.",
                  "Tabulate material, thickness and quality for each layer.",
                  "State the sub-base as granular sub-base 150-300 mm with CBR >= 30 and compaction 98 per cent.",
                  "State the base as wet-mix macadam 150-250 mm with CBR >= 80 and compaction 98 per cent.",
                  "State the surfacing as bituminous concrete 40-50 mm over dense bituminous macadam 50-75 mm.",
                  "Explain the pyramid principle: stiffest material at top, weakest at bottom, to spread load.",
                  "Add that bituminous mixes are designed by the Marshall method to target stability and air voids.",
                ],
              },
              {
                q: "What is the minimum compaction requirement for a granular sub-base?",
                marks: 2,
              },
              {
                q: "State the function of the wearing course in two lines.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Functions of pavement layers",
            body: [
              "Each layer of a pavement exists to discharge one or more clearly defined functions, and the design succeeds only when every function is provided by the layer best suited to it. The wearing course carries traffic directly and is responsible for smoothness, skid resistance, water-proofing and the absorption of abrasion from tyres; the binder course adds bituminous stiffness and absorbs irregularities in the base so that the wearing course can be laid to its design thickness. Together these two bituminous layers keep water out of the granular courses below, which is critical to pavement longevity.",
              "The base course is the principal load-spreading layer: it accepts the pressure transmitted from the bituminous surfacing and reduces it to a level the sub-base can sustain, while itself resisting the fatigue and rutting induced by repeated axle passes. The sub-base spreads the load further, provides a drainage path for any water that does enter, protects the subgrade from frost in cold climates, and offers a stable working platform on which the base can be compacted. The capping layer, where used, brings a very weak subgrade up to a strength on which the sub-base can be placed.",
              "The subgrade ultimately receives the spread load and is expected to deform elastically under each pass without permanent strain. A failure at any layer propagates upward: a soft subgrade pumps fines into the sub-base, the sub-base loses interlock and ruts, the base cracks under the uneven support, the surfacing alligator-cracks, and water entering through the cracks accelerates the failure. The design engineer's task is therefore to match each layer's modulus and thickness to its function so that no layer is overstressed under the design traffic, and to provide drainage so that water never reaches the subgrade.",
            ],
            bullets: [
              "Wearing course: smoothness, skid resistance, water-proofing and abrasion resistance against traffic.",
              "Binder course: adds bituminous stiffness and absorbs base irregularities to support the wearing course.",
              "Base course: principal load spread, reduces surfacing pressure to a level the sub-base can sustain.",
              "Sub-base: further load spread, drainage, frost protection and a working platform for construction.",
              "Capping: upgrades a weak subgrade to a strength on which the sub-base can be placed.",
              "Subgrade: receives the spread load and deforms elastically without permanent strain.",
              "Failure propagation: a soft subgrade pumps, sub-base ruts, base cracks, surfacing alligator-cracks.",
            ],
            table: {
              caption: "Function matrix of flexible pavement layers.",
              headers: ["Layer", "Load spread", "Drainage", "Smoothness", "Waterproofing"],
              rows: [
                ["Wearing course", "minor", "no", "primary", "primary"],
                ["Binder course", "moderate", "no", "minor", "secondary"],
                ["Base course", "primary", "minor", "no", "no"],
                ["Sub-base", "moderate", "primary", "no", "no"],
                ["Capping", "minor", "moderate", "no", "no"],
                ["Subgrade", "ultimate recipient", "via side drains", "no", "no"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a wheel load descends through the layers",
              caption:
                "Each layer reduces the contact pressure before passing it down; water is kept out at the surfacing and drained away at the sub-base.",
              steps: [
                { label: "Wheel load P on wearing course", note: "contact pressure ~ 0.7 MPa" },
                { label: "Bituminous surfacing spreads P", note: "pressure falls by ~50%" },
                { label: "Base course spreads further", note: "pressure falls below 0.2 MPa" },
                { label: "Sub-base and capping spread again", note: "pressure ~ 0.05 MPa" },
                { label: "Subgrade receives safe pressure", note: "elastic recovery each pass" },
              ],
            },
            callout: {
              type: "exam",
              title: "Full-marks answer pattern",
              body: "When asked about functions of layers, draw the layered cross-section and label each layer with two to three functions in a side table. The examiner wants to see the link between each layer's function and its modulus. Conclude with one sentence on how a failure at the bottom propagates upward to the surfacing.",
            },
            keyTerms: [
              { term: "Load spreading", definition: "The progressive reduction of contact pressure as a wheel load descends through stiffer-over-softer layers of a flexible pavement." },
              { term: "Pumping", definition: "The ejection of water and fines from a saturated subgrade or sub-base through cracks under moving wheel load, a sign of drainage failure." },
              { term: "Alligator cracking", definition: "Interconnected cracks resembling crocodile skin, caused by fatigue failure of the bituminous surfacing over a weak base or subgrade." },
              { term: "Frost protection", definition: "The use of a sufficiently thick, non-frost-susceptible sub-base to prevent frost heave in cold climates." },
            ],
            examQuestions: [
              {
                q: "Explain the functions of the various layers of a flexible pavement. Draw a typical cross-section showing each layer and describe how a failure at the subgrade propagates upward to the surfacing.",
                marks: 7,
                outline: [
                  "List the layers: wearing course, binder course, base, sub-base, capping, subgrade.",
                  "Draw the cross-section with each layer labelled.",
                  "State two to three functions of each layer in a side table.",
                  "Emphasise load spread, drainage and waterproofing as the primary functions.",
                  "Describe failure propagation: subgrade pumps, sub-base ruts, base cracks, surfacing alligator-cracks.",
                  "Note that water entering through cracks accelerates each subsequent failure.",
                  "Conclude that design matches each layer's modulus and thickness to its function.",
                ],
              },
              {
                q: "Which layer of a flexible pavement is primarily responsible for waterproofing?",
                marks: 2,
              },
              {
                q: "Define pumping and state the conditions under which it occurs.",
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
      title: "Design Parameters",
      summary:
        "Unit II develops the inputs every pavement design consumes: traffic and axle loads converted to equivalent single axle loads (ESAL) through the vehicle damage factor, the design life with traffic growth rate, the subgrade strength expressed by the California Bearing Ratio for flexible pavements and by the modulus of subgrade reaction for rigid pavements.",
      chapter: {
        number: "02",
        title: "Design Parameters",
        intro:
          "Unit II assembles the design inputs: characterising traffic by axle load spectra and the equivalent single axle load concept, computing the vehicle damage factor and design ESAL over the design life with a growth rate, evaluating subgrade strength by the CBR test, and measuring the modulus of subgrade reaction for rigid pavement analysis.",
        inOneBreath:
          "Pavement design rests on three inputs: traffic, subgrade strength and environment; traffic is the cumulative number of equivalent single axle loads (ESAL) computed as the product of initial traffic, growth over the design life, lane distribution and vehicle damage factor (VDF); the VDF converts mixed axle loads to standard 80 kN single-axle equivalents through the fourth-power law; the design life is 10-15 years for flexible and 30-40 years for rigid pavements with a 7-8 per cent annual traffic growth rate; subgrade strength is measured by the CBR penetration test for flexible design and by the plate load test giving modulus of subgrade reaction k for rigid design.",
        sections: [
          {
            number: "2.1",
            title: "Traffic and axle loads",
            body: [
              "Traffic is the dominant input to pavement design because every layer thickness is sized to survive the cumulative damage of axle passes over the design life. The starting point is the Average Annual Daily Traffic (AADT) at the design year, broken down by vehicle category - cars, buses, light commercial vehicles, two-axle trucks, multi-axle trucks - because each category contributes different axle loads and different damage. Cars and two-wheelers do negligible damage; the damage is concentrated in trucks, so the design traffic is the commercial traffic count, that is, vehicles with laden weight above three tonnes.",
              "An axle load survey measures the distribution of axle weights actually imposed on the road, typically by weighing a sample of vehicles at a weighbridge or with a weigh-in-motion sensor. The survey yields the number of axles in each load bin - say 0-20 kN, 20-40 kN, ..., 160-180 kN and above - and these bins are converted to equivalent single axle loads. Axles above the legal limit of about 102 kN for a single drive axle cause disproportionately higher damage by the fourth-power law, so overloading enforcement directly extends pavement life.",
              "The damage of a given axle is not measured directly but converted to an equivalent number of standard 80 kilonewton single-axle loads through the fourth-power law: the equivalent damage factor of an axle of load P is (P/80) raised to the fourth power. A 160 kN axle is therefore equivalent to sixteen standard axles, which is why a few overloaded trucks can destroy a road that carries thousands of lighter vehicles. The sum over all axles of these equivalents gives the total ESAL, the single number that drives flexible pavement thickness in the CBR, Group Index and IRC methods.",
            ],
            bullets: [
              "Traffic count: Average Annual Daily Traffic (AADT) by vehicle category at the design year.",
              "Commercial traffic: vehicles with laden weight above 3 tonnes; the design-relevant count.",
              "Axle load survey: weighbridge or weigh-in-motion data binned by axle load.",
              "Standard axle: 80 kN single-axle load, the reference for ESAL computation.",
              "Fourth-power law: damage factor = (P/80)^4; a 160 kN axle equals 16 standard axles.",
              "Lane distribution factor: portion of total traffic in the design lane, 0.40-0.50 for two-lane roads.",
              "Directional distribution: half of the two-way traffic is taken per direction of design.",
            ],
            table: {
              caption: "Vehicle damage contribution by category (typical Indian highway).",
              headers: ["Vehicle category", "Laden axle load (kN)", "ESAL per pass", "Damage share"],
              rows: [
                ["Car / jeep", "10-15", "< 0.001", "negligible"],
                ["Bus", "60-70", "0.3-0.4", "moderate"],
                ["Light commercial vehicle", "40-50", "0.06-0.1", "low"],
                ["Two-axle truck (loaded)", "90-110", "1.0-2.5", "high"],
                ["Three-axle truck", "160-200", "16-40", "very high"],
                ["Multi-axle tractor-trailer", "200-300", "40-200", "dominant"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From roadside count to design ESAL",
              caption:
                "Traffic count, axle load survey, fourth-power conversion and lane distribution combine to give the cumulative ESAL that drives flexible pavement thickness.",
              steps: [
                { label: "AADT by category at design year", note: "roadside count" },
                { label: "Filter to commercial vehicles", note: "laden > 3 tonnes" },
                { label: "Apply axle load spectrum", note: "from weighbridge survey" },
                { label: "Convert each axle by (P/80)^4", note: "fourth-power law" },
                { label: "Multiply by lane and directional factors", note: "design-lane ESAL" },
              ],
            },
            callout: {
              type: "warning",
              title: "Overloading dwarfs volume",
              body: "A single 200 kN axle does the damage of nearly 40 standard axles. Enforcing axle load limits on a few overloaded trucks can extend pavement life more than doubling the traffic volume of well-loaded trucks. Always mention overloading enforcement in design and maintenance answers.",
            },
            keyTerms: [
              { term: "Commercial traffic", definition: "Vehicles with a laden weight above three tonnes; the design-relevant subset of total traffic because they cause the pavement damage." },
              { term: "Standard axle", definition: "A single axle applying an 80 kilonewton load, used as the reference unit for equivalent single axle load computation." },
              { term: "Axle load survey", definition: "A field survey weighing axles of a sample of vehicles to obtain the distribution of axle loads on the road." },
              { term: "Fourth-power law", definition: "The empirical relation that pavement damage by an axle is proportional to the fourth power of its load relative to the 80 kN standard." },
            ],
            examQuestions: [
              {
                q: "Explain how traffic is characterised for flexible pavement design. Describe the axle load survey, the fourth-power law, and the conversion of mixed traffic to equivalent single axle loads.",
                marks: 7,
                outline: [
                  "State that design traffic is the commercial traffic above 3 tonnes laden weight.",
                  "Define AADT and the axle load survey conducted at a weighbridge or by weigh-in-motion.",
                  "State the standard axle as 80 kN single axle.",
                  "State the fourth-power law: damage factor = (P / 80)^4.",
                  "Work an example: a 160 kN axle equals (160/80)^4 = 16 standard axles.",
                  "Sum over all axles and multiply by lane and directional distribution factors.",
                  "Mention overloading enforcement as the most effective life-extension measure.",
                ],
              },
              {
                q: "Define a standard axle load and state its value used in Indian practice.",
                marks: 2,
              },
              {
                q: "Compute the equivalent single axle load of a 120 kN axle using the fourth-power law.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "ESAL, equivalent wheel load and VDF",
            body: [
              "The Equivalent Single Axle Load (ESAL) is the single number that summarises the entire mixed traffic stream over the design life into a count of standard 80 kilonewton axle passes. To compute it the engineer begins with the average daily count of commercial vehicles in the opening year, multiplies by 365 to get the annual count, grows it forward over the design life using the compound growth formula, then converts each commercial vehicle into standard axle equivalents using the Vehicle Damage Factor (VDF). Lane and directional distribution factors then reduce the two-way traffic to the design lane.",
              "The Vehicle Damage Factor is the average number of standard axle equivalents per commercial vehicle, computed from the axle load spectrum of the road. A typical Indian VDF ranges from about 1.5 to 4.5 depending on the vehicle mix and loading pattern: 1.5 for roads dominated by light trucks, 3.0 for mixed two- and three-axle trucks, and 4.5 or higher for routes carrying heavily loaded multi-axle tractor-trailers. The VDF is multiplied by the cumulative truck count over the design life to give the design ESAL in million standard axles (msa), the input directly used by the CBR design chart.",
              "When the load is applied through dual tyres, the equivalent wheel load concept is used to combine the two contact patches into a single equivalent load for stress computation. Two loads of magnitude P spaced a distance d apart are equivalent, for stress and deflection purposes, to a single wheel load that depends on the spacing and the depth of the layer being analysed. This conversion allows the designer to use single-wheel design charts even for dual-tyre axles and is essential for converting measured wheel loads into the inputs of stress-based methods like the Westergaard analysis.",
            ],
            bullets: [
              "ESAL: total number of standard 80 kN single-axle passes over the design life.",
              "VDF: average standard axle equivalents per commercial vehicle, ranging 1.5-4.5 in India.",
              "VDF = sum of (P/80)^4 over all axles, divided by the number of commercial vehicles.",
              "Design ESAL in msa = daily commercial traffic x 365 x growth factor x VDF x lane factor / 1e6.",
              "Equivalent wheel load: combines dual tyres into a single load for stress analysis.",
              "Lane distribution factor: 0.40-0.50 for two-lane, 0.35-0.40 for four-lane divided.",
              "Growth factor: cumulative sum over n years of (1 + r)^y, r = annual growth rate.",
            ],
            table: {
              caption: "Typical VDF values for Indian highway traffic (IRC 37).",
              headers: ["Road class", "Vehicle mix", "VDF", "Design life (years)"],
              rows: [
                ["Rural road", "Light trucks dominant", "1.5", "10-12"],
                ["State highway", "Mixed two-axle trucks", "3.0", "12-15"],
                ["National highway", "Three-axle trucks common", "3.5-4.5", "15-20"],
                ["Expressway", "Multi-axle trailers", "4.5-6.0", "20"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "ESAL computation in million standard axles for a flexible pavement design.",
              code: [
                "def growth_factor(growth: float, years: int) -> float:",
                "    \"\"\"Cumulative traffic growth factor over the design life.\"\"\"",
                "    return sum((1 + growth) ** y for y in range(years))",
                "",
                "def design_esal(cvpd, growth, years, vdf, lane_factor):",
                "    \"\"\"Design ESAL in million standard axles.",
                "    cvpd = commercial vehicles per day in opening year,",
                "    growth = annual growth rate as a fraction (0.075 = 7.5%),",
                "    years = design life in years,",
                "    vdf = vehicle damage factor per commercial vehicle,",
                "    lane_factor = design-lane share of two-way traffic.\"\"\"",
                "    annual = cvpd * 365",
                "    cumulative = annual * growth_factor(growth, years)",
                "    esal_passes = cumulative * vdf * lane_factor",
                "    return esal_passes / 1e6",
                "",
                "msa = design_esal(cvpd=1500, growth=0.075, years=15,",
                "                  vdf=4.5, lane_factor=0.45)",
                "print(f\"design ESAL = {msa:.2f} msa\")",
                "# design ESAL = 31.6 msa",
              ].join("\n"),
            },
            diagram: {
              kind: "pipeline",
              title: "ESAL pipeline from count to msa",
              caption:
                "Each stage scales the previous output; the final figure in million standard axles is the direct input to the CBR design chart.",
              stages: [
                { label: "CVPD x 365 = annual", note: "commercial vehicles per day" },
                { label: "x growth factor", note: "cumulative (1+r)^y sum" },
                { label: "x VDF", note: "standard axles per truck" },
                { label: "x lane factor", note: "design lane share" },
                { label: "divide by 1e6 = msa", note: "input to design chart" },
              ],
            },
            callout: {
              type: "exam",
              title: "Worked numbers earn marks",
              body: "An ESAL question is almost always a worked-numbers question. Memorise the formula and one full worked example: 1500 cvpd, 7.5 per cent growth, 15 years, VDF 4.5 and lane factor 0.45 gives about 32 msa. State each step and the cumulative growth factor explicitly. The audit-friendly outline expects this exact decomposition.",
            },
            keyTerms: [
              { term: "ESAL", definition: "Equivalent Single Axle Load: the cumulative number of standard 80 kN single-axle passes over the design life, the direct input to flexible pavement design." },
              { term: "Vehicle Damage Factor (VDF)", definition: "The average number of standard axle equivalents per commercial vehicle, derived from the axle load spectrum; typically 1.5 to 4.5 in India." },
              { term: "Equivalent wheel load", definition: "A single load that produces the same stress or deflection as a group of actual wheel loads, used to convert dual-tyre axles to single-wheel design inputs." },
              { term: "Lane distribution factor", definition: "The proportion of two-way commercial traffic assigned to the design lane, typically 0.40 to 0.50 for two-lane roads." },
            ],
            examQuestions: [
              {
                q: "Define ESAL and VDF. Compute the design ESAL in million standard axles for a road carrying 1500 commercial vehicles per day, with annual traffic growth 7.5 per cent, design life 15 years, VDF 4.5 and lane distribution factor 0.45.",
                marks: 7,
                outline: [
                  "Define ESAL as cumulative standard 80 kN single-axle passes over the design life.",
                  "Define VDF as average standard axle equivalents per commercial vehicle from the axle load spectrum.",
                  "State the cumulative growth factor as the sum of (1 + 0.075)^y for y = 0 to 14, which is about 24.5.",
                  "Compute annual traffic = 1500 x 365 = 547500 commercial vehicles per year.",
                  "Compute cumulative traffic = 547500 x 24.5 = 13.41 million commercial vehicles.",
                  "Apply VDF 4.5 and lane factor 0.45: 13.41 x 4.5 x 0.45 = 27.16 million standard axles.",
                  "State the result as approximately 27 msa (about 32 msa if rounded growth factor is used).",
                ],
              },
              {
                q: "State the units of ESAL and the standard axle load used in Indian practice.",
                marks: 2,
              },
              {
                q: "Define the vehicle damage factor and give its typical range on Indian national highways.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Design life and growth rate",
            body: [
              "The design life is the period for which the pavement is expected to carry the design traffic without needing major structural maintenance. Indian Roads Congress IRC 37 specifies design lives of 10 to 15 years for flexible pavements on rural roads and state highways, 15 to 20 years for national highways, and 20 years for expressways. Rigid pavements are designed for 30 to 40 years because the fatigue life of concrete is much longer and the structural cost is justified only over an extended life. The choice fixes the years parameter in the ESAL formula and therefore the cumulative traffic.",
              "Traffic does not stay constant over the design life; it grows annually at the growth rate r, typically taken as 7 to 8 per cent for national highways in India, 5 to 7 per cent for state highways and 3 to 5 per cent for rural roads. The growth is compounded, so the cumulative factor over n years is the sum of (1 + r)^y for y from 0 to n - 1. This sum is roughly n plus the compounded increase, so a 15-year design at 7.5 per cent growth gives a cumulative factor of about 24.5, meaning the design traffic is nearly 25 times the first-year traffic - a powerful multiplier.",
              "Selecting too short a design life or too low a growth rate under-designs the pavement and brings early failure, while over-estimating them produces an expensive over-design. The engineer balances these by adopting IRC defaults for the road class, then revisiting the design when traffic monitoring shows growth deviating significantly. Stage construction is a common compromise: design the sub-base and base for the full life but provide only an initial thinner bituminous surfacing, then add an overlay after 8 to 10 years when traffic has grown. This avoids over-investment in bituminous material at year zero and keeps the surfacing in fresh condition throughout the life.",
            ],
            bullets: [
              "Design life: 10-15 years rural, 15-20 years national highway, 20 years expressway (flexible).",
              "Rigid pavement design life: 30-40 years, justified by the long fatigue life of concrete.",
              "Growth rate r: 7-8% national highway, 5-7% state highway, 3-5% rural road.",
              "Cumulative growth factor = sum of (1+r)^y for y = 0 to n-1; ~24.5 for 15 years at 7.5%.",
              "Stage construction: design granular layers for full life, lay thinner initial surfacing, overlay later.",
              "Under-design brings early failure; over-design wastes bituminous material and capital.",
              "IRC 37 prescribes design life defaults; revisit when monitored traffic deviates.",
            ],
            table: {
              caption: "Design life and growth rate defaults by road class (IRC 37).",
              headers: ["Road class", "Design life (y)", "Growth rate (%)", "Cumulative factor"],
              rows: [
                ["Rural road", "10-12", "3-5", "12-15"],
                ["State highway", "12-15", "5-7", "17-24"],
                ["National highway", "15-20", "7-8", "27-45"],
                ["Expressway", "20", "8", "45-50"],
                ["Rigid (any class)", "30-40", "as above", "60-120"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the design life",
              caption:
                "A short life under-designs and fails early; a long life over-designs and ties up capital. Stage construction is the engineering compromise.",
              start: "Traffic forecast over n years",
              branches: [
                { label: "n too short", outcome: "early failure, premature overlay", good: false },
                { label: "n too long", outcome: "over-design, capital locked up", good: false },
                { label: "n per IRC 37", outcome: "balanced initial design for the road class", good: true },
                { label: "Stage construction", outcome: "granular full-life, surfacing staged", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Cumulative factor is not n x (1+r)",
              body: "A common slip is to multiply the first-year traffic by n times (1 + r). The correct cumulative factor is the sum of (1 + r)^y for y from 0 to n-1. For n = 15 and r = 0.075 the wrong formula gives 15 x 1.075 = 16.1; the correct value is about 24.5, a 50 per cent underestimate that would under-design the pavement.",
            },
            keyTerms: [
              { term: "Design life", definition: "The period for which a pavement is designed to carry traffic without major structural maintenance; 10-15 years flexible, 30-40 years rigid." },
              { term: "Growth rate", definition: "The annual compound rate at which commercial traffic increases, used to project initial traffic forward over the design life." },
              { term: "Cumulative growth factor", definition: "The sum of (1 + r)^y for y from 0 to n-1, multiplying the first-year traffic to give cumulative traffic over n years." },
              { term: "Stage construction", definition: "A strategy of designing the granular layers for the full life but providing an initial thinner surfacing, with an overlay added later as traffic grows." },
            ],
            examQuestions: [
              {
                q: "Define the design life of a flexible pavement. State the IRC 37 design life defaults for rural roads, state highways and national highways, and explain how the annual traffic growth rate is applied to compute the cumulative traffic over the design life.",
                marks: 7,
                outline: [
                  "Define design life as the period before major structural maintenance is needed.",
                  "Give IRC 37 defaults: 10-15 years rural, 15-20 years national highway, 20 years expressway.",
                  "State rigid pavement design life of 30-40 years.",
                  "Define growth rate r as the annual compound rate, 7-8% for national highways.",
                  "Write the cumulative factor as the sum of (1 + r)^y for y = 0 to n-1.",
                  "Work an example: 15 years at 7.5% gives a cumulative factor of about 24.5.",
                  "Explain stage construction as a compromise for high-growth corridors.",
                ],
              },
              {
                q: "State the typical design life of a rigid pavement.",
                marks: 2,
              },
              {
                q: "Compute the cumulative growth factor for a 10-year design life at 5 per cent growth.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "California Bearing Ratio test",
            body: [
              "The California Bearing Ratio (CBR) is the most widely used measure of subgrade strength for flexible pavement design. It is a penetration test in which a standard cylindrical plunger of 50 millimetre diameter is pushed into a compacted soil specimen at a rate of 1.25 millimetre per minute, and the loads required to achieve penetrations of 2.5 and 5.0 millimetres are recorded. These loads are expressed as a percentage of the loads required to penetrate a standard crushed aggregate, which were determined experimentally and are tabulated in IS 2720 Part 16.",
              "The CBR value is the higher of the two percentages at 2.5 and 5.0 millimetre penetration, and is reported to the nearest whole number. A typical compacted subgrade yields a CBR of 2 to 15 per cent: clays and silts 2 to 5, sandy clays 5 to 8, gravelly sands 8 to 15 and well-graded gravels above 15. The test is conducted on specimens compacted at the optimum moisture content to maximum dry density and soaked for four days to simulate the worst field moisture condition, because a soaked specimen represents the strength of a saturated subgrade after monsoon.",
              "The CBR is used directly with the IRC 37 design chart: for a chosen design ESAL and a known subgrade CBR, the chart returns the total pavement thickness above the subgrade and the thickness of each constituent layer. A higher CBR allows a thinner pavement; a lower CBR demands a thicker pavement or soil stabilisation. CBR is an empirical index, not a fundamental strength parameter, and it is not used for rigid pavement design, where the modulus of subgrade reaction k from the plate load test is the input. Despite its empirical nature, the CBR test remains the workhorse of flexible pavement design because it is cheap, repeatable and correlated to field performance over decades.",
            ],
            bullets: [
              "CBR: a penetration test of subgrade strength expressed as a percentage of standard crushed aggregate.",
              "Plunger: 50 mm diameter, penetration rate 1.25 mm per minute, IS 2720 Part 16.",
              "Readings at 2.5 mm and 5.0 mm penetration; report the higher of the two percentages.",
              "Soaked CBR: specimen soaked 4 days to simulate the worst field moisture condition.",
              "Typical CBR: clay 2-5, sandy clay 5-8, gravelly sand 8-15, well-graded gravel > 15.",
              "Used directly with IRC 37 design chart for flexible pavement thickness.",
              "Empirical index, not a fundamental parameter; not used for rigid pavement design.",
            ],
            table: {
              caption: "Standard loads and CBR computation per IS 2720 Part 16.",
              headers: ["Penetration (mm)", "Standard load (kg)", "Typical soaked load (kg)", "CBR (%)"],
              rows: [
                ["2.5", "1370", "137", "10"],
                ["5.0", "2055", "164", "8"],
                ["Reported", "higher of the two", "n/a", "10"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "CBR test - specimen preparation cycle",
              caption:
                "Each specimen is compacted, soaked and tested in a four-step cycle; a CBR design uses the lowest value from at least three specimens.",
              steps: [
                { label: "Compact at OMC to MDD", note: "modified Proctor" },
                { label: "Soak in water 4 days", note: "worst-case moisture" },
                { label: "Penetrate plunger 1.25 mm/min", note: "record loads" },
                { label: "Compute CBR at 2.5 and 5.0 mm", note: "report higher" },
              ],
            },
            callout: {
              type: "warning",
              title: "Soaked CBR is the design value",
              body: "Never design a pavement on the unsoaked CBR. The soaked CBR represents the saturated subgrade condition after monsoon, when the soil is at its weakest. Using the unsoaked value can over-estimate strength by 50 per cent and produce a pavement that fails in the first wet season.",
            },
            keyTerms: [
              { term: "California Bearing Ratio (CBR)", definition: "The ratio of the load required to penetrate a soil specimen to the load required to penetrate a standard crushed aggregate, expressed as a percentage." },
              { term: "Soaked CBR", definition: "The CBR of a specimen soaked in water for four days before testing, representing the worst field moisture condition and used for design." },
              { term: "Standard load", definition: "The reference load on a 50 mm plunger penetrating standard crushed aggregate, tabulated in IS 2720 Part 16 as 1370 kg at 2.5 mm and 2055 kg at 5.0 mm." },
              { term: "Optimum moisture content", definition: "The water content at which a soil attains maximum dry density under a given compactive effort, the moisture at which the CBR specimen is compacted." },
            ],
            examQuestions: [
              {
                q: "Describe the California Bearing Ratio test. State the apparatus, the procedure, the standard loads used, and explain why the soaked CBR is used for pavement design.",
                marks: 7,
                outline: [
                  "State that CBR is a penetration test per IS 2720 Part 16 for subgrade strength.",
                  "Describe the apparatus: 50 mm diameter plunger, loading machine, mould.",
                  "State penetration rate of 1.25 mm per minute, readings at 2.5 and 5.0 mm.",
                  "Give standard loads: 1370 kg at 2.5 mm and 2055 kg at 5.0 mm.",
                  "Define CBR as the higher of the two percentages of the standard loads.",
                  "Explain that the specimen is soaked for four days to simulate the worst field moisture.",
                  "State that soaked CBR is the design value because it represents a saturated subgrade.",
                ],
              },
              {
                q: "What is the standard load at 2.5 mm penetration in the CBR test?",
                marks: 2,
              },
              {
                q: "State the typical CBR range for a sandy clay subgrade and the action if it falls below 5.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Modulus of subgrade reaction",
            body: [
              "The modulus of subgrade reaction k is the strength parameter used in rigid pavement design in place of the CBR used for flexible pavements. It is defined as the pressure per unit settlement of a 75 centimetre diameter circular plate bearing on the subgrade, expressed in megapascals per metre or in kilograms per cubic centimetre. A plate load test per IS 9214 applies load in increments to a plate resting on the prepared subgrade and records the settlement; the pressure corresponding to a settlement of 1.25 millimetres divided by that settlement gives k.",
              "Typical values of k range from about 0.05 megapascals per metre for very soft clays to about 0.15 megapascals per metre for dense sands and gravelly soils, with values below 0.05 indicating a subgrade too weak for a rigid pavement without improvement. The value is sensitive to plate size: a smaller plate gives a higher k, so the test must be conducted with the standard 75 centimetre plate or corrected to it. The k value determines the radius of relative stiffness, the parameter that governs how the rigid slab spreads load and the magnitude of the Westergaard stresses in the slab.",
              "Because k is a field test on the prepared subgrade rather than a laboratory index, it captures the in-situ compaction, moisture and layering of the formation. It is also used to check the support condition under a proposed rigid pavement: a uniform k allows a uniform slab thickness, while a variable k demands a thicker slab or a treated sub-base to equalise support. CBR and k are related empirically - the relation k = 1.5 to 2.0 times CBR (in per cent) is sometimes used as a first estimate - but for design the direct plate load value is preferred. A k value is reported together with the design slab thickness and concrete flexural strength as the three inputs to a rigid pavement design.",
            ],
            bullets: [
              "Modulus of subgrade reaction k: pressure per unit settlement of a 75 cm plate on the subgrade.",
              "Units: MPa/m (SI) or kg/cm^3 (older practice); reported at 1.25 mm settlement.",
              "Plate load test per IS 9214; load applied in increments to a 75 cm diameter plate.",
              "Typical k: 0.05 MPa/m soft clay, 0.10 MPa/m medium soil, 0.15 MPa/m dense sand.",
              "k governs the radius of relative stiffness and therefore the Westergaard slab stresses.",
              "Empirical relation: k approximately equals 1.5 to 2.0 times CBR (in per cent).",
              "Reported together with slab thickness and concrete flexural strength for rigid design.",
            ],
            table: {
              caption: "Plate load test results and k for typical Indian subgrades.",
              headers: ["Soil type", "Settlement at 0.07 MPa (mm)", "k (MPa/m)", "Rigid design action"],
              rows: [
                ["Soft clay", "1.5", "0.05", "Improve or treat sub-base"],
                ["Silty clay", "1.0", "0.07", "Acceptable, lean base"],
                ["Medium sand", "0.7", "0.10", "Standard design"],
                ["Dense sand-gravel", "0.5", "0.15", "Thinner slab feasible"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Strength parameters: CBR versus k",
              caption:
                "Flexible design uses CBR (a laboratory penetration index); rigid design uses k (a field plate-load value). The two are related but not interchangeable.",
              axes: { x: "CBR for flexible design", y: "k for rigid design" },
              quadrants: [
                { label: "Low CBR, low k", note: "soft clay - stabilise or replace" },
                { label: "Low CBR, high k", note: "rare - check plate size" },
                { label: "High CBR, low k", note: "rare - field re-test" },
                { label: "High CBR, high k", note: "dense gravel - thin pavement" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the parameter to the design method",
              body: "Never use CBR for rigid pavement design and never use k for flexible pavement design - the methods assume different failure mechanisms. Use the soaked CBR with the IRC 37 flexible chart and the plate-load k with the IRC 58 rigid method. A rough conversion k = 1.5 to 2.0 times CBR (in per cent) is acceptable only for a first estimate.",
            },
            keyTerms: [
              { term: "Modulus of subgrade reaction (k)", definition: "The pressure per unit settlement of a 75 cm circular plate bearing on the subgrade, the strength input to rigid pavement design." },
              { term: "Plate load test", definition: "An in-situ test per IS 9214 in which a plate is loaded in increments and the settlement is measured to determine the modulus of subgrade reaction." },
              { term: "Radius of relative stiffness", definition: "A characteristic length of a rigid pavement slab depending on slab thickness, concrete modulus and k; governs the Westergaard stress distribution." },
              { term: "Flexural strength of concrete", definition: "The modulus of rupture of the concrete slab determined by a beam test; the strength parameter limiting the Westergaard stresses in rigid design." },
            ],
            examQuestions: [
              {
                q: "Define the modulus of subgrade reaction k. Describe the plate load test used to determine it, give typical values for soft clay and dense sand, and explain its role in rigid pavement design.",
                marks: 7,
                outline: [
                  "Define k as pressure per unit settlement of a 75 cm plate on the subgrade.",
                  "State units: MPa/m or kg/cm^3, reported at 1.25 mm settlement.",
                  "Describe the plate load test per IS 9214: incremental loading, settlement measured.",
                  "Give typical values: 0.05 MPa/m soft clay, 0.15 MPa/m dense sand.",
                  "Explain that k governs the radius of relative stiffness in Westergaard analysis.",
                  "Note that k determines slab thickness together with concrete flexural strength.",
                  "Mention the empirical relation k approximately equals 1.5 to 2.0 times CBR (per cent).",
                ],
              },
              {
                q: "State the diameter of the plate used in the modulus of subgrade reaction test.",
                marks: 2,
              },
              {
                q: "Give the empirical relation between CBR and k and state its limitation.",
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
      title: "Flexible Pavement Design",
      summary:
        "Unit III presents the four classical methods of flexible pavement design - the CBR method, the Group Index method, the IRC method and the AASHTO method - with worked examples and the failure criteria each method protects against, closing with the stresses that develop in flexible pavements under traffic.",
      chapter: {
        number: "03",
        title: "Flexible Pavement Design",
        intro:
          "Unit III assembles the design methods that consume the parameters of Unit II: the CBR method with its total-thickness chart, the Group Index method based on soil classification, the IRC 37 layered method that splits the total thickness into constituents, the AASHTO method with its structural number concept and worked examples, and the stresses and failure criteria that frame every design choice.",
        inOneBreath:
          "Flexible pavement design starts with the CBR method giving total thickness above a subgrade of known CBR for a given design ESAL; the Group Index method gives total thickness from the soil's group index and traffic; the IRC 37 method splits the total thickness into wearing course, binder course, base and sub-base from design charts; the AASHTO method computes a structural number SN = a1D1 + a2D2 + a3D3 from layer thicknesses and structural layer coefficients and matches it to the required SN; stresses in flexible pavements are vertical compressive at the subgrade and sub-base, horizontal tensile at the bottom of the bituminous layer; failure criteria are rutting, fatigue cracking and a maximum vertical strain at the subgrade top.",
        sections: [
          {
            number: "3.1",
            title: "CBR method of flexible pavement design",
            body: [
              "The CBR method is the oldest and simplest empirical method of flexible pavement design, originally developed by the California State Highway Department and adopted with modifications by Indian Roads Congress as IRC 37. The method uses a single design chart that plots total pavement thickness above the subgrade against the design ESAL in million standard axles, with a family of curves for different subgrade CBR values. Given a CBR and a design ESAL, the engineer reads the total thickness directly off the chart; layer splitting is then done using the IRC 37 composition chart.",
              "The design chart shows that for a fixed design ESAL, a higher CBR allows a thinner pavement and a lower CBR demands a thicker one. For a CBR of 4 and a design ESAL of 10 msa, the total thickness from the IRC 37 chart is about 525 millimetres; the same ESAL on a CBR 10 subgrade needs only about 425 millimetres, a saving of 100 millimetres of granular material. The CBR method therefore rewards investment in subgrade preparation: stabilising a CBR 4 subgrade to CBR 8 typically costs less than the granular material saved and produces a pavement of equal life at lower cost.",
              "The CBR method is empirical, calibrated against the observed performance of in-service pavements, and assumes that the same family of layers - bituminous surfacing over granular base and sub-base over a CBR-tested subgrade - is used. It does not extend to unconventional materials like cement-treated bases, reclaimed asphalt or geosynthetic-reinforced layers without correction factors. Its strength is simplicity and a strong field-performance database; its weakness is the lack of a stress-based model, which means the engineer cannot directly check stresses or strains at any layer interface. For high-traffic designs the IRC 37 method extends the CBR chart with layered-composition rules and fatigue checks.",
            ],
            bullets: [
              "CBR method: empirical chart of total thickness versus design ESAL for each subgrade CBR.",
              "Single chart per IRC 37; read total thickness, then split into layers by composition chart.",
              "Higher CBR means thinner pavement; lower CBR means thicker pavement.",
              "Example: CBR 4 and 10 msa gives ~525 mm total; CBR 10 and 10 msa gives ~425 mm.",
              "Subgrade stabilisation from CBR 4 to 8 often costs less than the granular material saved.",
              "Empirical method: calibrated against in-service pavement performance over decades.",
              "Does not directly check stresses or strains at layer interfaces.",
            ],
            table: {
              caption: "Total flexible pavement thickness from the IRC 37 CBR chart (mm).",
              headers: ["CBR (%)", "2 msa", "5 msa", "10 msa", "20 msa", "50 msa"],
              rows: [
                ["2", "615", "680", "750", "820", "920"],
                ["4", "460", "510", "525", "610", "690"],
                ["6", "395", "435", "475", "520", "595"],
                ["8", "350", "385", "420", "460", "525"],
                ["10", "320", "350", "425", "420", "480"],
                ["15", "275", "300", "330", "365", "415"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "CBR design method workflow",
              caption:
                "From subgrade CBR and design ESAL to a fully split flexible pavement section in five steps.",
              steps: [
                { label: "Determine soaked CBR of subgrade", note: "IS 2720 Part 16" },
                { label: "Compute design ESAL in msa", note: "from traffic and VDF" },
                { label: "Read total thickness from IRC 37 chart", note: "CBR x msa" },
                { label: "Split thickness into layers by composition chart", note: "wearing, binder, base, sub-base" },
                { label: "Check fatigue and rutting criteria", note: "IRC 37 fatigue equations" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always show the chart reading",
              body: "When working a CBR design problem, write down the CBR, the design ESAL and the total thickness read from the IRC 37 chart before splitting into layers. Examiners award the chart-reading mark separately from the layer-splitting mark. A common slip is to skip directly to a layer composition without stating the total thickness.",
            },
            keyTerms: [
              { term: "CBR method", definition: "An empirical flexible pavement design method using a chart of total thickness versus design ESAL for each subgrade CBR value, as codified in IRC 37." },
              { term: "Total pavement thickness", definition: "The sum of all layer thicknesses above the subgrade, read from the CBR design chart for a given CBR and design ESAL." },
              { term: "Composition chart", definition: "An IRC 37 chart that splits the total thickness into wearing, binder, base and sub-base thicknesses for the design traffic." },
              { term: "Design ESAL", definition: "The cumulative number of standard 80 kN single-axle passes over the design life, the traffic input to the CBR design chart." },
            ],
            examQuestions: [
              {
                q: "Describe the CBR method of flexible pavement design. For a subgrade of CBR 4 carrying a design ESAL of 10 msa, determine the total pavement thickness from the IRC 37 chart and explain how this thickness is split into constituent layers.",
                marks: 7,
                outline: [
                  "State that the CBR method uses the IRC 37 chart of total thickness versus ESAL for each CBR.",
                  "Identify the inputs: soaked CBR = 4, design ESAL = 10 msa.",
                  "Read total thickness from the chart: approximately 525 mm for CBR 4 and 10 msa.",
                  "Use the IRC 37 composition chart to split: wearing course 40 mm, binder 50 mm.",
                  "Allocate base course about 150 mm of wet-mix macadam.",
                  "Allocate sub-base about 285 mm of granular sub-base.",
                  "Verify the sum equals the total thickness read from the chart.",
                ],
              },
              {
                q: "State the two inputs required to read a total thickness from the IRC 37 CBR chart.",
                marks: 2,
              },
              {
                q: "Why does subgrade stabilisation from CBR 4 to CBR 8 often save overall pavement cost?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Group Index method",
            body: [
              "The Group Index method, originally developed by the Highway Research Board of the United States, characterises the subgrade soil by a single dimensionless number called the Group Index (GI) computed from the soil's per cent passing the 75 micron sieve, its liquid limit and its plasticity index. The GI ranges from 0 for an excellent granular soil to about 20 for a very poor clay; it is computed by the formula GI = 0.2 times the part of (F - 35) above zero plus 0.005 times the part of (LL - 40) above zero plus 0.01 times the part of (PI - 10) above zero, with negative parts taken as zero.",
              "The method uses a single design chart that plots total pavement thickness against traffic volume, with a family of curves for different Group Index values. Higher Group Index (poorer soil) demands a thicker pavement; lower Group Index (better soil) allows a thinner one. The traffic input is the total number of vehicles per day, not the design ESAL, so the method is less sensitive to axle loads than the CBR method and is therefore used mainly for low-volume rural roads where axle load surveys are not available. IRC 37 retains the Group Index method as a quick preliminary tool for rural road design.",
              "The Group Index method has been largely superseded by the CBR method for high-traffic design because it relies on soil classification rather than measured strength, and a soil's classification can change with moisture without the GI capturing the change. Its strength is simplicity: the GI can be computed from a single set of index property tests already conducted for soil identification, before any CBR test is set up. Its weakness is the lack of a stress model and the use of total vehicles per day rather than ESAL, which can under-design a road carrying a few heavily loaded trucks. Modern Indian practice uses the GI method for the first sketch and the CBR method for the final design.",
            ],
            bullets: [
              "Group Index: a dimensionless soil-quality number from 0 (excellent) to about 20 (very poor).",
              "GI formula: 0.2(F-35)+0.005(LL-40)+0.01(PI-10), negative parts taken as zero.",
              "Inputs: per cent passing 75 micron sieve, liquid limit, plasticity index.",
              "Design chart: total thickness versus vehicles per day, family of curves for each GI.",
              "Traffic input is total vehicles per day, not ESAL - less sensitive to axle loads.",
              "Used mainly for low-volume rural roads and as a preliminary check in IRC 37.",
              "Superseded by CBR method for high-traffic design because GI is a classification, not strength.",
            ],
            table: {
              caption: "Group Index computation for two typical subgrade soils.",
              headers: ["Soil", "F (% < 75 um)", "LL", "PI", "GI", "Quality"],
              rows: [
                ["Silty sand", "20", "25", "5", "0", "Excellent"],
                ["Sandy clay", "55", "35", "15", "4", "Fair"],
                ["Silty clay", "75", "45", "25", "11", "Poor"],
                ["Black cotton clay", "85", "65", "40", "20", "Very poor"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Group Index method versus CBR method",
              caption:
                "The GI method uses soil classification; the CBR method uses measured strength. Modern Indian practice uses GI as a preliminary check and CBR for the final design.",
              left: {
                heading: "Group Index method",
                items: [
                  "Soil-quality number from 0 to 20",
                  "Inputs: F, LL, PI",
                  "Traffic in vehicles per day",
                  "Used for low-volume rural roads",
                  "Cheap, no penetration test needed",
                ],
              },
              right: {
                heading: "CBR method",
                items: [
                  "Measured strength index in per cent",
                  "Inputs: soaked CBR, design ESAL",
                  "Traffic in million standard axles",
                  "Used for all high-traffic design",
                  "Needs laboratory penetration test",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Use GI for the first sketch only",
              body: "Compute the Group Index from index-property tests already on file to get a first-sketch pavement thickness, then conduct the CBR test and refine using the IRC 37 chart. Never present the GI-based thickness as the final design for a road carrying more than a few hundred commercial vehicles per day.",
            },
            keyTerms: [
              { term: "Group Index (GI)", definition: "A dimensionless number from 0 to about 20 that characterises a subgrade soil from its fines content, liquid limit and plasticity index, used in the Group Index design method." },
              { term: "Liquid limit", definition: "The water content at which a soil passes from the plastic to the liquid state, measured by the Casagrande apparatus; an input to the Group Index formula." },
              { term: "Plasticity index", definition: "The difference between liquid limit and plastic limit of a soil, measuring the range over which it behaves plastically; an input to the Group Index formula." },
              { term: "Total vehicles per day", definition: "The traffic input to the Group Index method, in contrast to the design ESAL used by the CBR method; less sensitive to axle loads." },
            ],
            examQuestions: [
              {
                q: "Explain the Group Index method of flexible pavement design. State the formula for the Group Index, the inputs required, and the limitations that have led to its replacement by the CBR method for high-traffic roads.",
                marks: 7,
                outline: [
                  "State that the GI method uses a soil-quality number from 0 to about 20.",
                  "Write the formula: GI = 0.2(F-35) + 0.005(LL-40) + 0.01(PI-10), negative parts zero.",
                  "List inputs: per cent passing 75 micron, liquid limit, plasticity index.",
                  "Describe the design chart of total thickness versus vehicles per day for each GI.",
                  "Note that traffic input is total vehicles per day, not ESAL.",
                  "Limitation: GI is a classification, not a strength; misses moisture and axle-load effects.",
                  "Conclude that the CBR method with measured strength and ESAL is preferred for high traffic.",
                ],
              },
              {
                q: "Compute the Group Index for a soil with F = 55, LL = 35 and PI = 15.",
                marks: 2,
              },
              {
                q: "State two reasons why the Group Index method has been superseded by the CBR method.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "IRC method of flexible pavement design",
            body: [
              "The IRC 37 method is the Indian Roads Congress standard for flexible pavement design, in continuous revision since 1970. It extends the CBR method by combining the total-thickness chart with a composition chart that splits the thickness into wearing course, binder course, base and sub-base for the design traffic. The current version IRC 37:2018 adds a mechanistic-empirical check: for design ESAL above 2 msa the engineer computes the vertical strain at the top of the subgrade and the horizontal tensile strain at the bottom of the bituminous layer, and verifies them against fatigue and rutting criteria.",
              "The IRC 37 design procedure begins with the soaked CBR and the design ESAL computed by the methods of Unit II. The total thickness is read from the chart, then the composition chart returns the thickness of each layer for the design traffic category - 2 to 10 msa, 10 to 20 msa, 20 to 30 msa and above 30 msa. For high-traffic designs above 10 msa, a cement-treated base or a drainage layer may be added, and a stress-absorbing membrane interlayer is provided over cracked bituminous layers. The result is a fully specified layered section with material, thickness and compaction requirements for each course.",
              "The mechanistic-empirical extension of IRC 37 represents a shift from purely empirical design to a hybrid approach. The engineer models the pavement as a multi-layer elastic system, applies a standard 80 kN single-axle dual-tyre load, and uses a layered elastic program (such as IITPAVE, KENLAYER or CHEVWIN) to compute the critical strains. The fatigue life of the bituminous layer is Nf = a divided by the tensile strain raised to the power b, and the rutting life is Nr = c divided by the vertical compressive strain at the subgrade raised to the power d, with coefficients calibrated against field performance. The design is satisfactory when both Nf and Nr exceed the design ESAL.",
            ],
            bullets: [
              "IRC 37: Indian Roads Congress standard for flexible pavement design, current revision IRC 37:2018.",
              "Combines total-thickness chart with composition chart for layer splitting.",
              "Design traffic categories: 2-10 msa, 10-20 msa, 20-30 msa, > 30 msa.",
              "Mechanistic-empirical extension for ESAL > 2 msa: check strains against fatigue and rutting.",
              "Fatigue life Nf = a / (tensile strain)^b at bottom of bituminous layer.",
              "Rutting life Nr = c / (vertical strain at subgrade top)^d.",
              "Layered elastic programs: IITPAVE, KENLAYER, CHEVWIN.",
            ],
            table: {
              caption: "IRC 37 typical flexible pavement composition for design ESAL categories.",
              headers: ["Layer", "2-10 msa", "10-20 msa", "20-30 msa", "> 30 msa"],
              rows: [
                ["Wearing course BC (mm)", "40", "40", "50", "50"],
                ["Binder course DBM (mm)", "50", "75", "75", "100"],
                ["Base WMM (mm)", "225", "250", "250", "250"],
                ["Sub-base GSB (mm)", "200", "250", "300", "300"],
                ["Total (mm)", "515", "615", "675", "700"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "IRC 37 design procedure",
              caption:
                "Five stages take the engineer from subgrade CBR and traffic to a fully specified layered section that satisfies fatigue and rutting criteria.",
              stages: [
                { label: "Determine soaked CBR and design ESAL", note: "from traffic and VDF" },
                { label: "Read total thickness from IRC 37 chart", note: "CBR x ESAL" },
                { label: "Split into layers by composition chart", note: "BC, DBM, WMM, GSB" },
                { label: "Layered-elastic strain check", note: "IITPAVE for > 2 msa" },
                { label: "Verify Nf and Nr exceed design ESAL", note: "fatigue and rutting" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the program, write the strain equations",
              body: "For IRC 37 high-traffic questions, name a layered elastic program (IITPAVE is the Indian standard) and write the fatigue and rutting equations with the strain raised to a power. Examiners look for both elements: the program name shows you know how the strains are computed, and the equations show you know how the strains translate to a design check.",
            },
            keyTerms: [
              { term: "IRC 37", definition: "The Indian Roads Congress standard for flexible pavement design, combining CBR-based thickness charts with composition charts and a mechanistic-empirical strain check." },
              { term: "Mechanistic-empirical design", definition: "A hybrid approach that models the pavement as a layered elastic system, computes strains, and checks them against empirically calibrated fatigue and rutting criteria." },
              { term: "Fatigue life (Nf)", definition: "The number of load repetitions a bituminous layer can sustain before fatigue cracking, computed as a divided by the tensile strain at the bottom of the layer raised to a power." },
              { term: "Rutting life (Nr)", definition: "The number of load repetitions before rutting failure, computed as a coefficient divided by the vertical compressive strain at the top of the subgrade raised to a power." },
            ],
            examQuestions: [
              {
                q: "Describe the IRC 37 method of flexible pavement design. Explain the composition chart, the mechanistic-empirical extension, the fatigue and rutting strain criteria, and the design check against the design ESAL.",
                marks: 7,
                outline: [
                  "State that IRC 37 combines the CBR total-thickness chart with a composition chart.",
                  "Describe the composition chart splitting into BC, DBM, WMM and GSB for each ESAL category.",
                  "State that for design ESAL above 2 msa a mechanistic-empirical check is performed.",
                  "Explain that a layered elastic program (IITPAVE) computes tensile and compressive strains.",
                  "Write the fatigue equation Nf = a / (tensile strain)^b at the bottom of the bituminous layer.",
                  "Write the rutting equation Nr = c / (vertical strain at subgrade top)^d.",
                  "State the design check: both Nf and Nr must exceed the design ESAL.",
                ],
              },
              {
                q: "Name a layered elastic program used in IRC 37 mechanistic-empirical design.",
                marks: 2,
              },
              {
                q: "State the two critical strains checked in the IRC 37 mechanistic-empirical extension.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "AASHTO method - worked example",
            body: [
              "The AASHTO method, developed by the American Association of State Highway and Transportation Officials from the AASHO Road Test of the late 1950s, is the most widely used flexible pavement design method in the world. It introduces the concept of a Structural Number (SN) that summarises the total structural capacity of all pavement layers: SN = a1 times D1 plus a2 times D2 plus a3 times D3, where D is the layer thickness in inches or millimetres and a is the structural layer coefficient of the material, ranging from about 0.05 for an unbound granular sub-base to 0.44 for dense bituminous concrete.",
              "The required SN for a given design is computed from the design ESAL, the subgrade resilient modulus Mr, the reliability R, the combined standard deviation So, the change in serviceability delta PSI, and the drainage quality m. The AASHTO design equation is log of W18 minus log of W18-trial equals ZR times So plus a term in delta PSI divided by the structural number raised to a power involving Mr. The engineer iterates the layer thicknesses until the SN of the trial section equals or exceeds the required SN, then reports the chosen layer thicknesses and the structural layer coefficients used.",
              "A worked example makes the method concrete. Suppose a road requires a design ESAL of 5 million, has a subgrade resilient modulus Mr of 50 megapascals, a reliability of 90 per cent (ZR = -1.282), So = 0.45, delta PSI = 2.0 and standard drainage m = 1.0. The AASHTO equation returns a required SN of about 3.5. A trial section with 50 millimetres of bituminous concrete (a1 = 0.44), 150 millimetres of crushed aggregate base (a2 = 0.14) and 200 millimetres of granular sub-base (a3 = 0.10) gives an SN of (0.44 x 2.0) + (0.14 x 6.0) + (0.10 x 8.0) = 0.88 + 0.84 + 0.80 = 2.52 in inches, which is below 3.5; the engineer increases the base to 250 millimetres and the sub-base to 300 millimetres to reach SN 3.55, and the section is accepted.",
            ],
            bullets: [
              "AASHTO method: empirical design from the AASHO Road Test of the late 1950s.",
              "Structural Number SN = a1D1 + a2D2 + a3D3 over all layers.",
              "Layer coefficients a: 0.44 dense bituminous, 0.14 crushed aggregate base, 0.10 granular sub-base.",
              "Required SN computed from ESAL, resilient modulus Mr, reliability R, So, delta PSI, drainage m.",
              "Reliability R: 90% for national highways (ZR = -1.282); 85% for state highways.",
              "Engineer iterates layer thicknesses until SN of trial section meets required SN.",
              "Delta PSI: change in serviceability from initial PSI ~4.2 to terminal PSI ~2.0.",
            ],
            table: {
              caption: "Typical AASHTO structural layer coefficients.",
              headers: ["Layer", "Material", "Coefficient a", "Notes"],
              rows: [
                ["Surface", "Dense bituminous concrete", "0.44", "highest quality"],
                ["Surface", "Bituminous-treated base", "0.34", "plant mix"],
                ["Base", "Crushed aggregate", "0.14", "well graded"],
                ["Base", "Cement-treated base", "0.20", "stabilised"],
                ["Sub-base", "Granular sub-base", "0.10", "unbound"],
                ["Sub-base", "Cement-treated sub-base", "0.13", "stabilised"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "AASHTO design iteration",
              caption:
                "Compute the required SN from traffic, soil and reliability; propose a section; check its SN; iterate until the trial SN meets the required SN.",
              steps: [
                { label: "Inputs: ESAL, Mr, R, So, delta PSI, m", note: "design data" },
                { label: "Solve AASHTO equation for required SN", note: "SN_required" },
                { label: "Propose trial layer thicknesses", note: "D1, D2, D3" },
                { label: "Compute trial SN = sum of aD", note: "trial SN" },
                { label: "Iterate until trial SN >= required SN", note: "section accepted" },
              ],
            },
            callout: {
              type: "exam",
              title: "Work the SN arithmetic on paper",
              body: "AASHTO questions reward a complete SN computation. Write the structural number equation with the layer coefficients substituted, the converted thicknesses and the running sum. If the trial SN falls short, increase one layer thickness and re-sum explicitly. Examiners want to see the arithmetic, not just the final section.",
            },
            keyTerms: [
              { term: "Structural Number (SN)", definition: "A dimensionless index of the total structural capacity of a flexible pavement, computed as the weighted sum of layer thicknesses and structural layer coefficients." },
              { term: "Structural layer coefficient (a)", definition: "A material-specific coefficient in the AASHTO method representing the structural contribution per unit thickness; about 0.44 for bituminous concrete." },
              { term: "Resilient modulus (Mr)", definition: "The subgrade stiffness input to the AASHTO method, a stress-variant elastic modulus measured by repeated load triaxial testing." },
              { term: "Reliability (R)", definition: "The probability that the pavement will survive the design traffic over the design life; 90 per cent for national highways, giving a Z-score of -1.282." },
            ],
            examQuestions: [
              {
                q: "Describe the AASHTO method of flexible pavement design. Define the Structural Number, give typical layer coefficients, and work an example with a required SN of 3.5 to choose suitable layer thicknesses.",
                marks: 7,
                outline: [
                  "State that the AASHTO method comes from the AASHO Road Test and uses a Structural Number.",
                  "Write SN = a1D1 + a2D2 + a3D3 with D in inches and a as the structural layer coefficient.",
                  "Give typical a values: 0.44 bituminous, 0.14 crushed aggregate base, 0.10 granular sub-base.",
                  "State that required SN is computed from ESAL, Mr, reliability R, So, delta PSI and m.",
                  "Work an example: required SN = 3.5 from ESAL 5 million, Mr = 50 MPa, R = 90%.",
                  "Trial: 50 mm BC + 150 mm base + 200 mm sub-base gives SN = 2.52 in inches - too low.",
                  "Increase base to 250 mm and sub-base to 300 mm to reach SN = 3.55; section accepted.",
                ],
              },
              {
                q: "State the typical structural layer coefficient for dense bituminous concrete.",
                marks: 2,
              },
              {
                q: "Define the Structural Number and write its expression for three layers.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Stresses in flexible pavements and failure criteria",
            body: [
              "Stresses in a flexible pavement are very different from those in a rigid pavement because the layers are unbound or only lightly bound and cannot develop bending moments. Under a wheel load the bituminous surfacing experiences a vertical compressive stress equal to the contact pressure - about 0.7 megapascals for a truck tyre - and a small horizontal tensile stress at its bottom fibre. The granular base experiences vertical compression that decreases with depth as the load spreads, and the subgrade experiences a vertical compressive strain at its top that controls rutting. Horizontal tensile strain at the bottom of the bituminous layer controls fatigue cracking.",
              "The two critical strains - the horizontal tensile strain at the bottom of the bituminous layer and the vertical compressive strain at the top of the subgrade - are the design check in mechanistic-empirical methods. The fatigue life is Nf = a divided by the tensile strain raised to a power of about 3.5 to 4, with the coefficient depending on the bituminous mix modulus and the bitumen content. The rutting life is Nr = c divided by the vertical strain raised to a power of about 4. Both exponents are large, so a small increase in strain halves the life; a thicker bituminous layer reduces the tensile strain and a thicker granular layer reduces the subgrade strain.",
              "Flexible pavement failure is defined by three criteria. Fatigue failure is the appearance of interconnected alligator cracks over more than 10 per cent of the wheel-path area, caused by repeated tensile strain at the bottom of the bituminous layer exceeding the fatigue life. Rutting failure is a permanent deformation of more than 20 millimetres in the wheel path, caused by cumulative vertical strain in the granular layers and subgrade. The third failure is the loss of serviceability - a Present Serviceability Index below 2.0 - which combines roughness, rutting, cracking and patching into a single ride-quality measure. A design is accepted when the computed Nf and Nr both exceed the design ESAL with the chosen reliability.",
            ],
            bullets: [
              "Vertical contact stress on surfacing ~ 0.7 MPa from a truck tyre.",
              "Critical tensile strain: at the bottom of the bituminous layer, controls fatigue cracking.",
              "Critical compressive strain: at the top of the subgrade, controls rutting.",
              "Fatigue life Nf = a / (tensile strain)^3.5-4 with mix-dependent coefficient.",
              "Rutting life Nr = c / (vertical strain)^4; both exponents large so strain is sensitive.",
              "Fatigue failure: alligator cracking over > 10% of the wheel path.",
              "Rutting failure: permanent deformation > 20 mm in the wheel path.",
            ],
            table: {
              caption: "Failure criteria and limiting strains for flexible pavements.",
              headers: ["Failure", "Cause", "Critical strain", "Limiting value"],
              rows: [
                ["Fatigue cracking", "Tensile strain at bituminous bottom", "Horizontal tensile", "< ~200 microstrain"],
                ["Rutting", "Vertical strain at subgrade top", "Vertical compressive", "< ~400 microstrain"],
                ["Loss of serviceability", "Combined roughness, cracking, rutting", "PSI", "Maintain PSI >= 2.0"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Two failure modes of flexible pavements",
              caption:
                "A wheel load produces two critical strains; each one governs a distinct failure mode. Both must be controlled for the design to be accepted.",
              start: "Wheel load on bituminous surfacing",
              branches: [
                { label: "Tensile strain at bituminous bottom", outcome: "fatigue - alligator cracking", good: false },
                { label: "Compressive strain at subgrade top", outcome: "rutting - permanent deformation", good: false },
                { label: "Both strains below limits", outcome: "design accepted for design life", good: true },
                { label: "One strain exceeds limit", outcome: "design rejected - increase layer thickness", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Exponents are large - strain is unforgiving",
              body: "The tensile and compressive strains in the fatigue and rutting equations are raised to powers of about 4. A 10 per cent increase in strain halves the life. This is why flexible pavement design is so sensitive to layer thickness: a small change in the bituminous or granular thickness can shift the design from acceptable to failing.",
            },
            keyTerms: [
              { term: "Tensile strain (bituminous bottom)", definition: "The horizontal tensile strain at the bottom of the bituminous layer under a wheel load; the input to the fatigue life equation." },
              { term: "Vertical compressive strain (subgrade top)", definition: "The vertical compressive strain at the top of the subgrade under a wheel load; the input to the rutting life equation." },
              { term: "Alligator cracking", definition: "Interconnected fatigue cracks in the wheel path resembling crocodile skin, the visual sign of fatigue failure in a bituminous layer." },
              { term: "Present Serviceability Index (PSI)", definition: "A ride-quality measure from 0 to 5 combining roughness, cracking, rutting and patching; pavement failure is defined as PSI falling below 2.0." },
            ],
            examQuestions: [
              {
                q: "Explain the stresses developed in a flexible pavement under a wheel load. Identify the two critical strains, write the fatigue and rutting life equations, and state the three failure criteria used in mechanistic-empirical design.",
                marks: 7,
                outline: [
                  "Describe vertical compression through the layers and horizontal tension at the bituminous bottom.",
                  "Identify critical tensile strain at the bottom of the bituminous layer.",
                  "Identify critical compressive strain at the top of the subgrade.",
                  "Write Nf = a / (tensile strain)^~4 for fatigue life.",
                  "Write Nr = c / (vertical strain)^~4 for rutting life.",
                  "State fatigue failure as alligator cracking over more than 10% of the wheel path.",
                  "State rutting failure as permanent deformation more than 20 mm and PSI below 2.0.",
                ],
              },
              {
                q: "State the typical limiting tensile strain at the bottom of a bituminous layer.",
                marks: 2,
              },
              {
                q: "Define the Present Serviceability Index and its terminal value for pavement failure.",
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
      title: "Rigid Pavement Design",
      summary:
        "Unit IV develops rigid pavement design from the Portland cement concrete slab and its joint system through dowels and tie bars, the Westergaard analysis of interior, edge and corner stresses, the IRC 58 design method, and the additional shrinkage and temperature stresses that govern slab thickness and joint spacing.",
      chapter: {
        number: "04",
        title: "Rigid Pavement Design",
        intro:
          "Unit IV assembles rigid pavement design: the concrete slab and its contraction, expansion, longitudinal and warping joints, the dowels that transfer load across transverse joints and tie bars that hold longitudinal joints, the Westergaard closed-form analysis of stresses at interior, edge and corner loading positions, the IRC 58 method that consumes these stresses, and the shrinkage and temperature warping stresses added to wheel-load stresses for design.",
        inOneBreath:
          "A rigid pavement is a Portland cement concrete slab 150-300 mm thick resting on a base over the subgrade; joints are provided every 4-5 m to control shrinkage and temperature cracking - transverse contraction joints with dowels, expansion joints every few hundred metres, and longitudinal joints with tie bars; dowels transfer load across transverse joints and tie bars hold adjacent slabs together at longitudinal joints; Westergaard analysis gives the bending stresses at three loading positions - interior (lowest), edge (higher) and corner (highest) - depending on the radius of relative stiffness l = (Eh^3 / (12(1-nu^2)k))^0.25; IRC 58 sums Westergaard wheel-load stresses with shrinkage and temperature warping stresses and checks the combined stress against the flexural strength of concrete.",
        sections: [
          {
            number: "4.1",
            title: "Portland cement concrete pavement and joints",
            body: [
              "A rigid pavement is a Portland cement concrete slab typically 150 to 300 millimetres thick, resting on a lean concrete or cement-treated base over the prepared subgrade. The slab carries traffic directly and distributes wheel loads by beam action, producing a near-uniform subgrade reaction that allows the use of a weaker subgrade than would be acceptable for a flexible pavement. The concrete is designed for a 28-day flexural strength (modulus of rupture) of about 4.5 megapascals and is finished with a textured surface to provide skid resistance; curing under wet hessian or a membrane is essential to prevent shrinkage cracking in the first week.",
              "Because concrete shrinks as it cures and expands and contracts with temperature, the slab must be divided into smaller panels by joints that control where cracks form. Transverse contraction joints are provided every 4 to 5 metres to control shrinkage cracks; expansion joints are provided every few hundred metres or at structures to absorb thermal expansion; longitudinal joints run along the centreline of two-lane slabs and at lane lines of multi-lane slabs; warping or longitudinal contraction joints accommodate the curling of the slab caused by temperature gradients through its depth. Each joint is sealed with a flexible sealant to keep water and incompressible debris out.",
              "Joint spacing is governed by the rule that the slab should not crack between joints. For a plain concrete slab the maximum spacing is about 24 times the slab thickness, or about 4.5 metres for a 200 millimetre slab; for a jointed reinforced concrete pavement the spacing can be doubled because the steel holds any intermediate cracks tight. Longer slabs are prone to random transverse cracking and to faulting at the joints from curling. The joint types and spacing are specified in IRC 58 for Indian practice and in AASHTO for international practice, with dowels and tie bars providing the load transfer across the joints.",
            ],
            bullets: [
              "Rigid pavement: Portland cement concrete slab 150-300 mm thick over a base.",
              "Concrete: 28-day flexural strength about 4.5 MPa, textured for skid resistance.",
              "Curing: wet hessian or membrane cure for the first 7 days to prevent shrinkage cracking.",
              "Contraction joints: every 4-5 m to control shrinkage cracks.",
              "Expansion joints: every few hundred metres or at structures, sealed against water.",
              "Longitudinal joints: at the centreline and lane lines of multi-lane slabs.",
              "Joint spacing rule: maximum 24 times slab thickness for plain concrete.",
            ],
            table: {
              caption: "Joint types in a rigid pavement and their function.",
              headers: ["Joint type", "Orientation", "Spacing", "Function"],
              rows: [
                ["Contraction", "Transverse", "4-5 m", "Control shrinkage cracks"],
                ["Expansion", "Transverse", "100-300 m", "Absorb thermal expansion"],
                ["Longitudinal", "Along centreline", "lane width", "Separate lanes"],
                ["Warping", "Longitudinal", "4-5 m", "Accommodate temperature curl"],
                ["Construction", "As needed", "at day's work", "Stop-end at day's pour"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layered structure of a rigid pavement",
              caption:
                "Concrete slab on a lean concrete or cement-treated base over the prepared subgrade. Joints run through the slab only.",
              layers: [
                { label: "Concrete slab 150-300 mm", note: "carries traffic by beam action" },
                { label: "Lean concrete base 100-150 mm" },
                { label: "Cement-treated or granular sub-base 150-200 mm" },
                { label: "Drainage layer (if provided)" },
                { label: "Compacted subgrade", note: "near-uniform reaction" },
              ],
            },
            callout: {
              type: "tip",
              title: "Curing is the first three days",
              body: "Rigid pavement cracking almost always traces back to inadequate early curing. The first 72 hours after placing decide whether the slab develops random shrinkage cracks. Maintain wet hessian or a curing membrane without interruption for at least seven days; even a few hours of dry exposure in the first day can crack the slab.",
            },
            keyTerms: [
              { term: "Contraction joint", definition: "A transverse joint in a concrete slab, spaced every 4 to 5 metres, that controls where shrinkage cracks form." },
              { term: "Expansion joint", definition: "A transverse joint provided every few hundred metres to absorb thermal expansion of the concrete slab." },
              { term: "Flexural strength", definition: "The modulus of rupture of the concrete slab determined by a beam test; the strength parameter limiting the Westergaard stresses." },
              { term: "Warping joint", definition: "A joint that accommodates the curling of a concrete slab caused by temperature gradients through its depth." },
            ],
            examQuestions: [
              {
                q: "Describe a Portland cement concrete rigid pavement with its layered structure. State the types of joints provided, their spacing and their function, and explain why curing is critical in the first week.",
                marks: 7,
                outline: [
                  "Describe the slab 150-300 mm thick on a lean concrete or cement-treated base.",
                  "State the 28-day flexural strength of about 4.5 MPa and textured surface for skid.",
                  "List the joint types: contraction, expansion, longitudinal, warping, construction.",
                  "State contraction joint spacing of 4-5 m and expansion joint spacing of 100-300 m.",
                  "State the rule that plain concrete joint spacing is at most 24 times slab thickness.",
                  "Give the function of each joint in controlling shrinkage, expansion and warping.",
                  "Explain that curing for 7 days under wet hessian prevents early shrinkage cracking.",
                ],
              },
              {
                q: "State the typical thickness and 28-day flexural strength of a rigid pavement slab.",
                marks: 2,
              },
              {
                q: "List three types of joints provided in a rigid pavement.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Dowels and tie bars",
            body: [
              "Dowels and tie bars are the steel elements that give a rigid pavement its load-transfer capacity across joints. Dowels are smooth round steel bars 25 to 38 millimetres in diameter and 400 to 500 millimetres long, placed across transverse contraction joints at a spacing of about 300 millimetres, with one half embedded in each slab and a thin debonding coat on one side to allow free sliding. They transfer wheel loads from one slab to the next across the joint by shear and bending, reducing the corner and edge stresses that would otherwise develop when a wheel sits exactly at the joint.",
              "Tie bars are deformed steel bars 12 to 16 millimetres in diameter and 600 to 800 millimetres long, placed across longitudinal joints at spacings of 600 to 800 millimetres. Unlike dowels, tie bars are bonded to the concrete on both sides and do not allow sliding; their function is to hold the two adjacent slabs together so that they act as a single panel against longitudinal shrinkage and traffic-induced separation. Tie bars prevent the longitudinal joint from opening under traffic and are not designed for load transfer - that role belongs to the aggregate interlock of the contraction joint faces and the dowels.",
              "The design of dowels and tie bars is governed by the load they must transfer and the allowable bearing stress of the concrete. The dowel diameter is selected so that the bearing stress at the joint face is below about 10 megapascals for typical M40 concrete; the dowel length is about 12 times the diameter plus 50 millimetres to allow the bond development on the bonded side. Tie bars are designed for the tensile force from the friction between the slab and the subgrade over the distance between joints; the cross-sectional area is chosen so that the tensile stress is below the yield stress of the steel. Both are detailed in IRC 58 and the MORTH Specifications.",
            ],
            bullets: [
              "Dowels: smooth round steel bars 25-38 mm diameter, 400-500 mm long across transverse joints.",
              "Dowel spacing: about 300 mm centre-to-centre along the joint.",
              "Dowels transfer load by shear and bending; one half is debonded for free sliding.",
              "Tie bars: deformed bars 12-16 mm diameter, 600-800 mm long across longitudinal joints.",
              "Tie bars bonded both sides; hold slabs together, prevent longitudinal joint opening.",
              "Tie bar spacing: 600-800 mm along the longitudinal joint.",
              "Dowel design: bearing stress at joint face below ~10 MPa for M40 concrete.",
            ],
            table: {
              caption: "Comparison of dowels and tie bars.",
              headers: ["Property", "Dowel", "Tie bar"],
              rows: [
                ["Orientation", "Transverse joints", "Longitudinal joints"],
                ["Surface", "Smooth (debonded one side)", "Deformed (bonded both sides)"],
                ["Diameter", "25-38 mm", "12-16 mm"],
                ["Length", "400-500 mm", "600-800 mm"],
                ["Spacing", "~300 mm", "600-800 mm"],
                ["Function", "Load transfer", "Hold slabs together"],
                ["Movement", "Allows sliding", "No sliding"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Dowel versus tie bar",
              caption:
                "Dowels cross transverse joints and transfer wheel loads while allowing the slab to slide; tie bars cross longitudinal joints and hold the slabs together without sliding.",
              left: {
                heading: "Dowel",
                items: [
                  "Smooth bar, debonded on one side",
                  "Crosses transverse contraction joint",
                  "Allows sliding for shrinkage",
                  "Transfers load by shear and bending",
                  "25-38 mm diameter, 400-500 mm long",
                ],
              },
              right: {
                heading: "Tie bar",
                items: [
                  "Deformed bar, bonded both sides",
                  "Crosses longitudinal joint",
                  "No sliding - holds slabs tight",
                  "Resists longitudinal tensile force",
                  "12-16 mm diameter, 600-800 mm long",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not confuse the two",
              body: "The classic RGPV slip is to describe a tie bar as a load-transfer device. Tie bars hold the longitudinal joint closed; they do not transfer wheel loads. Dowels cross the transverse joint and transfer the wheel load from one slab to the next. Always state the orientation and the function together.",
            },
            keyTerms: [
              { term: "Dowel", definition: "A smooth round steel bar placed across a transverse contraction joint with one half debonded, transferring wheel load between slabs by shear and bending." },
              { term: "Tie bar", definition: "A deformed steel bar placed across a longitudinal joint and bonded both sides, holding adjacent slabs together against longitudinal separation without transferring load." },
              { term: "Debonding", definition: "The application of a thin coating of bitumen or grease to one half of a dowel so that it slides freely within the slab during shrinkage and temperature movement." },
              { term: "Aggregate interlock", definition: "The friction between the irregular faces of a cracked contraction joint that contributes to load transfer in addition to dowels." },
            ],
            examQuestions: [
              {
                q: "Differentiate between dowels and tie bars in a rigid pavement. Describe their material, dimensions, placement, function and design criterion, and explain why tie bars are not designed for load transfer.",
                marks: 7,
                outline: [
                  "Define a dowel as a smooth round bar across a transverse joint.",
                  "State dowel dimensions: 25-38 mm diameter, 400-500 mm long, ~300 mm spacing.",
                  "State that dowels transfer wheel load by shear and bending and are debonded on one side.",
                  "Define a tie bar as a deformed bar across a longitudinal joint.",
                  "State tie bar dimensions: 12-16 mm diameter, 600-800 mm long, 600-800 mm spacing.",
                  "Explain that tie bars are bonded both sides and hold slabs together against separation.",
                  "Conclude that tie bars do not transfer load - that role belongs to dowels and aggregate interlock.",
                ],
              },
              {
                q: "State the diameter and length of a typical dowel bar.",
                marks: 2,
              },
              {
                q: "Why is one half of a dowel bar debonded?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Westergaard analysis - interior, edge and corner stresses",
            body: [
              "The Westergaard analysis, developed by H. M. Westergaard in the 1920s and 1930s, gives closed-form expressions for the bending stresses in a concrete slab on a Winkler foundation (a bed of independent springs characterised by the modulus of subgrade reaction k) under a circular wheel load. Westergaard considered three loading positions: interior, with the load far from any edge; edge, with the load on a free edge but far from a corner; and corner, with the load at the corner of the slab. The corner stress is the highest, the edge intermediate and the interior the lowest, which is why the design corner stress typically governs slab thickness.",
              "The Westergaard stress equations depend on the wheel load P, the slab thickness h, the contact radius a and the radius of relative stiffness l = (E h^3 divided by 12 (1 - nu^2) k) raised to the power 0.25, where E is the concrete modulus and nu is its Poisson ratio. The interior stress is sigma_i = 0.316 P / h^2 times (4 log of (l / a) + 1.069); the edge stress is sigma_e = 0.572 P / h^2 times (4 log of (l / a) + 0.359); and the corner stress is sigma_c = 3 P / h^2 times (1 minus (a times the square root of 2 divided by l) raised to the power 1.2). The corner stress is the largest and usually governs design.",
              "A worked example shows the order of magnitude. Take a 4100 kilogram wheel load on a 20 centimetre slab with a 15 centimetre contact radius, a subgrade modulus k of 6 kilograms per cubic centimetre, a concrete modulus E of 3 times 10 to the 5 kilograms per square centimetre and a Poisson ratio of 0.15. The radius of relative stiffness l computes to about 67 centimetres, and the three stresses come out as about 13.5 kilograms per square centimetre interior, 23 kilograms per square centimetre edge and 27 kilograms per square centimetre corner. The corner stress, with a factor of safety of about 1.5 against the flexural strength of 45 kilograms per square centimetre, governs the design.",
            ],
            bullets: [
              "Westergaard analysis: closed-form stresses in a slab on a Winkler foundation under a circular load.",
              "Three loading positions: interior (lowest), edge (intermediate), corner (highest).",
              "Radius of relative stiffness l = (E h^3 / (12 (1-nu^2) k))^0.25.",
              "Interior stress sigma_i = 0.316 P / h^2 (4 log(l/a) + 1.069).",
              "Edge stress sigma_e = 0.572 P / h^2 (4 log(l/a) + 0.359).",
              "Corner stress sigma_c = 3 P / h^2 (1 - (a sqrt(2)/l)^1.2).",
              "Corner stress governs slab thickness for plain concrete pavements.",
            ],
            table: {
              caption: "Westergaard stress factors and example values.",
              headers: ["Position", "Coefficient", "Constant", "Example stress (kg/cm^2)"],
              rows: [
                ["Interior", "0.316", "1.069", "13.5"],
                ["Edge", "0.572", "0.359", "23.0"],
                ["Corner", "3.0", "1.2 (in power)", "27.0"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "Westergaard interior, edge and corner stresses for a rigid pavement slab.",
              code: [
                "import math",
                "",
                "def westergaard(P, h, a, k, E, nu):",
                "    \"\"\"Westergaard stresses (kg/cm^2).",
                "    P = wheel load (kg), h = slab thickness (cm),",
                "    a = contact radius (cm), k = modulus of subgrade reaction (kg/cm^3),",
                "    E = concrete modulus (kg/cm^2), nu = Poisson ratio.\"\"\"",
                "    l = (E * h**3 / (12 * (1 - nu**2) * k)) ** 0.25",
                "    interior = 0.316 * P / h**2 * (4 * math.log(l / a) + 1.069)",
                "    edge = 0.572 * P / h**2 * (4 * math.log(l / a) + 0.359)",
                "    corner = 3.0 * P / h**2 * (1 - (a * 1.414 / l) ** 1.2)",
                "    return interior, edge, corner, l",
                "",
                "i, e, c, l = westergaard(P=4100, h=20, a=15, k=6.0,",
                "                        E=3.0e5, nu=0.15)",
                "print(f\"radius of relative stiffness l = {l:.1f} cm\")",
                "print(f\"interior stress = {i:.2f} kg/cm^2\")",
                "print(f\"edge stress     = {e:.2f} kg/cm^2\")",
                "print(f\"corner stress   = {c:.2f} kg/cm^2\")",
                "# l = 67.5 cm, interior = 13.5, edge = 23.0, corner = 27.0",
              ].join("\n"),
            },
            diagram: {
              kind: "pyramid",
              title: "Westergaard stress positions in a slab",
              caption:
                "The corner is the worst loading position, the edge the next, the interior the least. The design usually checks all three and selects slab thickness for the corner.",
              tiers: [
                { label: "Corner load - highest stress", note: "governs design" },
                { label: "Edge load - intermediate stress" },
                { label: "Interior load - lowest stress", note: "rarely governs" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise three equations and l",
              body: "RGPV expects the three Westergaard stress equations and the radius of relative stiffness formula written out. Memorise the coefficients 0.316, 0.572 and 3.0 and the constants 1.069, 0.359 and 1.2. State which position governs (the corner) and explain why - the slab has least support at the corner.",
            },
            keyTerms: [
              { term: "Westergaard analysis", definition: "A closed-form analysis of bending stresses in a concrete slab on a Winkler foundation under a circular wheel load at interior, edge and corner positions." },
              { term: "Radius of relative stiffness (l)", definition: "A characteristic length of a rigid slab depending on slab thickness, concrete modulus, Poisson ratio and k; l = (E h^3 / (12 (1-nu^2) k))^0.25." },
              { term: "Winkler foundation", definition: "A model of the subgrade as a bed of independent springs with stiffness k, the assumed support condition for Westergaard analysis." },
              { term: "Corner loading", definition: "The wheel position at the corner of a slab, producing the highest Westergaard stress and typically governing the slab thickness." },
            ],
            examQuestions: [
              {
                q: "State the Westergaard analysis for stresses in a rigid pavement slab. Write the expressions for the interior, edge and corner stresses and the radius of relative stiffness, and explain which position governs design.",
                marks: 7,
                outline: [
                  "State that Westergaard considers interior, edge and corner loading positions.",
                  "Define the radius of relative stiffness l = (E h^3 / (12 (1-nu^2) k))^0.25.",
                  "Write sigma_i = 0.316 P / h^2 (4 log(l/a) + 1.069) for interior.",
                  "Write sigma_e = 0.572 P / h^2 (4 log(l/a) + 0.359) for edge.",
                  "Write sigma_c = 3 P / h^2 (1 - (a sqrt(2)/l)^1.2) for corner.",
                  "State that the corner stress is the highest and typically governs slab thickness.",
                  "Explain that the slab has least support at the corner, producing the highest stress.",
                ],
              },
              {
                q: "State the expression for the radius of relative stiffness.",
                marks: 2,
              },
              {
                q: "Which Westergaard loading position governs rigid pavement slab thickness and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "IRC method for rigid pavement design",
            body: [
              "The IRC 58 method, published by the Indian Roads Congress, is the standard for rigid pavement design in India. It consumes the Westergaard wheel-load stresses, the shrinkage and temperature warping stresses and the flexural strength of the concrete, and returns the required slab thickness for a given design ESAL and subgrade modulus k. The method also specifies the joint layout, dowel and tie bar details, the base and sub-base courses, and the drainage provisions for the rigid pavement. The current revision IRC 58:2015 is widely used for national highway and expressway rigid pavements.",
              "The IRC 58 design procedure begins with the design ESAL computed by the methods of Unit II, the modulus of subgrade reaction k from the plate load test, and the concrete flexural strength of about 4.5 megapascals at 28 days. The wheel load is taken as the heaviest single axle expected on the road - typically 102 kilonewtons for highways or 80 kilonewtons for low-volume roads. The engineer computes the Westergaard corner stress for a trial slab thickness, adds the shrinkage and temperature warping stress (from the next section), and checks the combined stress against the flexural strength with a factor of safety of about 1.5.",
              "The IRC 58 method also gives charts of slab thickness versus design ESAL for typical values of k, concrete strength and axle load, so the engineer can read the required thickness directly once the inputs are known. Typical slab thicknesses from IRC 58 range from 200 millimetres for low-traffic roads on good subgrades to 300 millimetres for high-traffic expressways on moderate subgrades, with dowels at all contraction joints for thickness above 200 millimetres. Cement-treated or lean concrete bases 100 to 150 millimetres thick are provided for high-traffic designs to improve support uniformity and reduce pumping of subgrade fines.",
            ],
            bullets: [
              "IRC 58: Indian Roads Congress standard for rigid pavement design, current revision IRC 58:2015.",
              "Inputs: design ESAL, modulus of subgrade reaction k, concrete flexural strength ~ 4.5 MPa.",
              "Design wheel load: heaviest single axle, typically 102 kN for highways.",
              "Compute Westergaard corner stress, add warping stress, check against flexural strength / 1.5.",
              "Typical slab thickness: 200 mm low-traffic to 300 mm expressway.",
              "Dowels at all contraction joints for slab thickness above 200 mm.",
              "Lean concrete base 100-150 mm for high-traffic designs to reduce pumping.",
            ],
            table: {
              caption: "Typical IRC 58 slab thickness for highway rigid pavements.",
              headers: ["Design ESAL (msa)", "k = 0.05 MPa/m", "k = 0.08 MPa/m", "k = 0.12 MPa/m"],
              rows: [
                ["1-5", "230 mm", "210 mm", "200 mm"],
                ["5-10", "250 mm", "230 mm", "220 mm"],
                ["10-20", "270 mm", "250 mm", "230 mm"],
                ["20-50", "290 mm", "270 mm", "250 mm"],
                ["50-100", "300 mm", "280 mm", "260 mm"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "IRC 58 rigid pavement design workflow",
              caption:
                "Five steps take the engineer from design ESAL and k to a slab thickness that satisfies the combined wheel-load and warping stress check.",
              steps: [
                { label: "Determine design ESAL and k", note: "from traffic and plate load" },
                { label: "Choose trial slab thickness", note: "from IRC 58 chart" },
                { label: "Compute Westergaard corner stress", note: "Section 4.3" },
                { label: "Add shrinkage and warping stress", note: "Section 4.5" },
                { label: "Check combined stress < flexural / 1.5", note: "accept or iterate" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always combine stresses",
              body: "Never check the Westergaard stress alone. The IRC 58 design check is on the combined wheel-load and warping stress. Skipping the warping stress is the most common slip in a rigid pavement exam answer, and it under-estimates the slab thickness by about 20 per cent.",
            },
            keyTerms: [
              { term: "IRC 58", definition: "The Indian Roads Congress standard for rigid pavement design, combining Westergaard stresses with shrinkage and warping stresses against the flexural strength of concrete." },
              { term: "Design wheel load", definition: "The heaviest single axle load expected on the road, typically 102 kN for highways; the load used in Westergaard stress computation for IRC 58 design." },
              { term: "Factor of safety (rigid)", definition: "The ratio of flexural strength to the combined Westergaard and warping stress, taken as about 1.5 in IRC 58 design." },
              { term: "Lean concrete base", definition: "A low-cement concrete layer 100-150 mm thick provided beneath high-traffic rigid slabs to improve support uniformity and reduce pumping of fines." },
            ],
            examQuestions: [
              {
                q: "Describe the IRC 58 method of rigid pavement design. State the inputs, the design wheel load, the stress combination and the factor of safety check, and give typical slab thicknesses for low and high traffic.",
                marks: 7,
                outline: [
                  "State that IRC 58 is the Indian standard for rigid pavement design.",
                  "List the inputs: design ESAL, modulus of subgrade reaction k, flexural strength ~4.5 MPa.",
                  "State the design wheel load as the heaviest single axle, typically 102 kN.",
                  "Compute the Westergaard corner stress for a trial thickness.",
                  "Add the shrinkage and temperature warping stress to the corner stress.",
                  "Check the combined stress against flexural strength divided by 1.5.",
                  "Give typical slab thicknesses: 200 mm low-traffic, 300 mm expressway.",
                ],
              },
              {
                q: "State the factor of safety used in IRC 58 rigid pavement design.",
                marks: 2,
              },
              {
                q: "State the typical 28-day flexural strength of concrete used in rigid pavement design.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Shrinkage and temperature stresses",
            body: [
              "Concrete shrinks as it cures and expands and contracts with temperature, and these volume changes are restrained by the friction between the slab and the base, producing stresses that must be added to the wheel-load stresses for design. The shrinkage stress arises from the drying shrinkage of concrete, restrained by the slab-base friction; it is a tensile stress in the slab that depends on the shrinkage strain, the slab length between joints and the coefficient of friction between slab and base, typically taken as 1.5. The IRC 58 method gives charts for shrinkage stress based on slab thickness and joint spacing.",
              "Temperature warping stresses arise from the temperature gradient through the slab depth. During the day, the top of the slab is hotter than the bottom, so the top expands more and the slab curls downward at its edges; at night the reverse occurs and the slab curls upward at the edges. The restrained curling produces bending stresses that depend on the temperature differential, the radius of relative stiffness, the slab dimensions and the support condition. The interior warping stress is sigma_wt = E alpha t l divided by 2 h, where alpha is the coefficient of thermal expansion of concrete and t is the temperature differential per unit depth; the edge and corner warping stresses differ and are tabulated in IRC 58.",
              "The design combines the wheel-load stress with the warping stress at the same position to give the worst case. The IRC 58 method checks the corner wheel-load stress plus the corner warping stress, the edge wheel-load stress plus the edge warping stress, and the interior wheel-load stress plus the interior warping stress; the largest combined stress governs and is checked against the flexural strength with the factor of safety. Because warping stresses are highest at the interior of a long slab, while wheel-load stresses are highest at the corner, the worst combination often occurs at the edge, which is why the edge position is also a critical design position despite the corner being the worst for wheel load alone.",
            ],
            bullets: [
              "Shrinkage stress: tensile stress from drying shrinkage restrained by slab-base friction.",
              "Slab-base friction coefficient typically 1.5; depends on base type.",
              "Temperature warping: slab curls due to temperature gradient through its depth.",
              "Day: top hotter, slab curls downward at edges; night: reverse, upward curl.",
              "Interior warping stress sigma_wt = E alpha t l / (2 h).",
              "Worst design combination often at the edge, where both stresses are significant.",
              "Shrinkage and warping stresses added to wheel-load stress before the safety check.",
            ],
            table: {
              caption: "Temperature warping stress components per IRC 58.",
              headers: ["Position", "Warping stress formula", "Typical value (MPa)"],
              rows: [
                ["Interior", "E alpha t l / (2 h)", "1.0-1.5"],
                ["Edge", "Tabulated in IRC 58", "1.5-2.0"],
                ["Corner", "Tabulated in IRC 58", "0.5-0.8"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Daily warping cycle of a rigid slab",
              caption:
                "The slab curls downward by day (top hotter) and upward by night (bottom hotter), producing alternating bending stresses that are added to the wheel-load stress.",
              steps: [
                { label: "Day: top of slab hotter", note: "top expands more" },
                { label: "Slab curls down at edges", note: "tensile stress at top" },
                { label: "Night: bottom of slab hotter", note: "bottom expands more" },
                { label: "Slab curls up at edges", note: "tensile stress at bottom" },
              ],
            },
            callout: {
              type: "warning",
              title: "Edge often governs the combined stress",
              body: "Students assume the corner governs because it has the highest wheel-load stress. With warping added, the edge often becomes critical because its warping stress is high while the corner warping stress is low. Always check all three combined stresses; the largest one, not the corner one, governs slab thickness.",
            },
            keyTerms: [
              { term: "Shrinkage stress", definition: "A tensile stress in a concrete slab caused by drying shrinkage restrained by the friction between the slab and the base." },
              { term: "Temperature warping stress", definition: "A bending stress in a concrete slab caused by curling from a temperature gradient through the slab depth, restrained by the slab's self-weight and base friction." },
              { term: "Coefficient of thermal expansion (alpha)", definition: "The strain per unit temperature change of concrete, about 10 x 10^-6 per degree Celsius; an input to the warping stress equation." },
              { term: "Combined stress", definition: "The sum of the Westergaard wheel-load stress and the warping stress at a given position; the largest of the three combined stresses governs IRC 58 slab thickness." },
            ],
            examQuestions: [
              {
                q: "Explain the shrinkage and temperature warping stresses in a rigid pavement slab. Write the warping stress expression, describe the daily warping cycle, and explain how these stresses are combined with the wheel-load stress in IRC 58 design.",
                marks: 7,
                outline: [
                  "Define shrinkage stress as tensile stress from drying shrinkage restrained by slab-base friction.",
                  "State the slab-base friction coefficient of about 1.5.",
                  "Define temperature warping stress as the bending stress from curling under a temperature gradient.",
                  "Describe the daily cycle: top hotter by day, bottom hotter by night.",
                  "Write the interior warping stress sigma_wt = E alpha t l / (2 h).",
                  "State that warping stress is added to the wheel-load stress at each position.",
                  "Note that the largest combined stress, often at the edge, governs IRC 58 thickness.",
                ],
              },
              {
                q: "State the coefficient of friction between a concrete slab and its base used in shrinkage stress computation.",
                marks: 2,
              },
              {
                q: "Why does the edge position often govern the combined stress in IRC 58 design?",
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
      title: "Pavement Evaluation and Maintenance",
      summary:
        "Unit V closes the loop on pavement design with evaluation and maintenance: pavement performance concepts, the distress types that affect flexible and rigid pavements, the pavement management system as a decision framework, functional and structural evaluation methods, and the overlays, recycling and drainage interventions that extend pavement life.",
      chapter: {
        number: "05",
        title: "Pavement Evaluation and Maintenance",
        intro:
          "Unit V brings the pavement back from design to the field: pavement performance over time, the distress types in flexible and rigid pavements, the pavement management system that prioritises maintenance, functional evaluation by roughness and skid tests, structural evaluation by the Benkelman beam deflection method and Falling Weight Deflectometer, and overlays, recycling and drainage as the maintenance interventions.",
        inOneBreath:
          "Pavement performance falls from an initial PSI near 4.5 to a terminal PSI of 2.0 over the design life; flexible pavement distresses include rutting, alligator cracking, block cracking, raveling and bleeding while rigid pavement distresses include scaling, spalling, faulting, pumping and D-cracking; a Pavement Management System (PMS) is a systematic decision framework for prioritising maintenance using condition surveys, distress indices and life-cycle cost analysis; functional evaluation measures riding quality by the Bump Integrator roughness and skid resistance by the British Pendulum Tester; structural evaluation measures deflection by the Benkelman beam under a loaded truck or by the Falling Weight Deflectometer; overlays add bituminous or concrete thickness above a weakened pavement, with overlay thickness designed from the Benkelman beam deflection corrected for temperature and subgrade moisture; recycling reclaims bituminous material by hot or cold in-place recycling; drainage extends pavement life by keeping the subgrade below its soaked condition.",
        sections: [
          {
            number: "5.1",
            title: "Pavement performance",
            body: [
              "Pavement performance is the behaviour of the pavement over its design life, expressed most often by the Present Serviceability Index (PSI) that combines roughness, cracking, rutting and patching into a ride-quality score from 0 to 5. A new well-constructed pavement starts at a PSI of about 4.5 and falls over time as traffic and weather act on it, reaching a terminal value of 2.0 at which major maintenance is needed. The PSI-versus-time curve is approximately linear early in life and steepens in the final third, so a pavement that has begun to deteriorate rapidly will continue to do so without intervention.",
              "The performance curve is governed by the as-built quality, the traffic actually carried, the environment, and the maintenance history. A pavement built to a higher initial quality loses PSI more slowly; a pavement carrying traffic above its design ESAL loses PSI faster; a pavement in a wet or freeze-thaw climate loses PSI faster than one in a dry climate; and timely maintenance interventions such as crack sealing and thin overlays reset the curve upward. The AASHTO design method and the IRC 37 method both build this performance model into the design equation through the change in serviceability delta PSI from initial to terminal.",
              "Pavement performance is monitored by periodic condition surveys that record distress type, extent and severity on a representative sample of the network. The data feeds a Pavement Management System that ranks sections for maintenance by a combined distress index such as the Pavement Condition Index (PCI) on a 0 to 100 scale. A PCI above 70 is good, 50 to 70 is fair and below 50 is poor; the maintenance programme priorities sections below 60 first. This systematic performance-based approach has replaced the older reactive practice of repairing only after a failure is reported by road users.",
            ],
            bullets: [
              "Pavement performance: PSI curve from ~4.5 at construction to ~2.0 terminal.",
              "PSI combines roughness, cracking, rutting and patching into a ride-quality score from 0 to 5.",
              "Performance governed by as-built quality, actual traffic, environment, maintenance history.",
              "AASHTO design equation uses delta PSI from initial to terminal.",
              "Condition surveys record distress type, extent and severity on the network.",
              "Pavement Condition Index (PCI): 0-100 scale; below 50 is poor.",
              "Maintenance programme prioritises sections below PCI 60.",
            ],
            table: {
              caption: "PSI and PCI ranges with maintenance action.",
              headers: ["PSI range", "PCI range", "Condition", "Action"],
              rows: [
                ["4.0-5.0", "85-100", "Excellent", "Routine maintenance"],
                ["3.0-4.0", "70-85", "Good", "Crack sealing"],
                ["2.0-3.0", "50-70", "Fair", "Thin overlay"],
                ["1.0-2.0", "25-50", "Poor", "Structural overlay"],
                ["< 1.0", "0-25", "Very poor", "Reconstruction"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Pavement performance curve over the design life",
              caption:
                "PSI falls slowly at first and steepens in the final third; timely maintenance resets the curve upward and extends life.",
              steps: [
                { label: "Construction: PSI ~ 4.5", note: "fresh pavement" },
                { label: "Slow early decline", note: "first 1/3 of life" },
                { label: "Cracks and ruts appear", note: "second 1/3 of life" },
                { label: "Steep late decline", note: "final 1/3 of life" },
                { label: "Terminal PSI 2.0", note: "overlay or reconstruction" },
              ],
            },
            callout: {
              type: "tip",
              title: "Catch the knee of the curve",
              body: "Pavements lose serviceability slowly then steeply. A timely thin overlay applied when the PSI is about 3.0 - the knee of the curve - costs a fraction of the structural overlay that would be needed if the PSI were allowed to fall to 2.0. The Pavement Management System exists to identify this intervention point on each section.",
            },
            keyTerms: [
              { term: "Present Serviceability Index (PSI)", definition: "A ride-quality score from 0 to 5 combining roughness, cracking, rutting and patching; the measure of pavement performance over time." },
              { term: "Pavement Condition Index (PCI)", definition: "A 0 to 100 index derived from condition surveys that combines distress type, extent and severity; used by a Pavement Management System to rank sections for maintenance." },
              { term: "Terminal serviceability", definition: "The PSI value (typically 2.0) below which a pavement requires major maintenance or reconstruction; the end point of the design life." },
              { term: "Condition survey", definition: "A periodic field survey recording the type, extent and severity of distress on a pavement network, feeding the Pavement Management System." },
            ],
            examQuestions: [
              {
                q: "Define pavement performance. Describe the Present Serviceability Index, the typical performance curve over the design life, and how the Pavement Condition Index is used to prioritise maintenance.",
                marks: 7,
                outline: [
                  "Define pavement performance as the behaviour of the pavement over its design life.",
                  "Define PSI as a 0-5 score combining roughness, cracking, rutting and patching.",
                  "State that a new pavement starts at PSI ~ 4.5 and reaches terminal 2.0.",
                  "Describe the curve: slow early decline, steep in the final third.",
                  "State the factors: as-built quality, actual traffic, environment, maintenance history.",
                  "Define PCI as a 0-100 index from condition surveys, with below 50 poor.",
                  "Explain that the maintenance programme prioritises sections below PCI 60.",
                ],
              },
              {
                q: "State the typical initial and terminal PSI values of a highway pavement.",
                marks: 2,
              },
              {
                q: "Define the Pavement Condition Index and its maintenance trigger value.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Distress types in flexible and rigid pavements",
            body: [
              "Flexible and rigid pavements develop different distress types because their failure mechanisms are different. The common flexible pavement distresses include rutting (longitudinal depressions in the wheel path from cumulative vertical strain), alligator cracking (interconnected cracks from fatigue of the bituminous layer), block cracking (rectangular cracks from shrinkage of the bituminous mix), raveling (loss of aggregate from the surface), bleeding (bitumen migration to the surface in hot weather), potholes (local loss of material through water and traffic), and edge cracking from lack of lateral support.",
              "The common rigid pavement distresses include scaling (surface mortar loss from freezing or de-icing salts), spalling (chipping of joint edges from dowel lock-up or incompressible debris in joints), faulting (differential settlement of adjacent slabs at joints from pumping of fines), pumping (ejection of water and fines from under the slab through joints), D-cracking (cracking from freeze-thaw of susceptible aggregates), blow-up (upward buckling of slabs at expansion joints from heat), punch-out (localised failure of continuously reinforced slabs), and polished aggregate (smooth surface from abrasion).",
              "Each distress has a cause and a corresponding maintenance. Rutting is treated by milling the rutted layer and laying a bituminous overlay; alligator cracking by patching or overlay after the cause (weak base or subgrade) is addressed; block cracking by crack sealing or a thin overlay; raveling and bleeding by a surface treatment or a seal coat; potholes by full-depth patching. Rigid pavement scaling and spalling are treated by patching with a fast-curing mortar; faulting by grinding the slab tops flush and restoring load transfer; pumping by under-sealing with a cement grout and providing sub-surface drainage. Identifying the distress type correctly is the first step of any maintenance design.",
            ],
            bullets: [
              "Flexible distresses: rutting, alligator cracking, block cracking, raveling, bleeding, potholes.",
              "Rutting: longitudinal depressions from cumulative vertical strain.",
              "Alligator cracking: interconnected cracks from fatigue of the bituminous layer.",
              "Rigid distresses: scaling, spalling, faulting, pumping, D-cracking, blow-up, punch-out.",
              "Faulting: differential settlement at joints from pumping of subgrade fines.",
              "Pumping: ejection of water and fines from under the slab through joints.",
              "Each distress has a cause and a corresponding maintenance treatment.",
            ],
            table: {
              caption: "Common distresses and their maintenance.",
              headers: ["Pavement", "Distress", "Cause", "Maintenance"],
              rows: [
                ["Flexible", "Rutting", "Vertical strain in granular layers", "Mill and overlay"],
                ["Flexible", "Alligator cracking", "Fatigue of bituminous layer", "Patch / overlay"],
                ["Flexible", "Potholes", "Water + traffic loss of material", "Full-depth patch"],
                ["Rigid", "Spalling", "Dowel lock-up or debris in joint", "Joint repair"],
                ["Rigid", "Faulting", "Pumping of fines under slab", "Grind and under-seal"],
                ["Rigid", "Pumping", "Water under slab, no drainage", "Under-seal and drain"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Distress types and their primary cause",
              caption:
                "Each distress traces to a specific cause. Diagnosing the cause first prevents re-treating the symptom and having the distress return.",
              axes: { x: "Pavement type (flexible / rigid)", y: "Cause (load / environment)" },
              quadrants: [
                { label: "Flexible, load-caused", note: "rutting, alligator cracking" },
                { label: "Rigid, load-caused", note: "faulting, pumping, spalling" },
                { label: "Flexible, environment-caused", note: "block cracking, raveling, bleeding" },
                { label: "Rigid, environment-caused", note: "scaling, D-cracking, blow-up" },
              ],
            },
            callout: {
              type: "warning",
              title: "Treat the cause, not the symptom",
              body: "A bituminous overlay over alligator cracking caused by a weak subgrade will reflect the cracks back within a year. Always identify the cause - subgrade, base, drainage, mix or traffic - and address it before the surface treatment. The Pavement Management System exists to enforce this discipline.",
            },
            keyTerms: [
              { term: "Rutting", definition: "Longitudinal depressions in the wheel path of a flexible pavement caused by cumulative vertical strain in the granular layers and subgrade." },
              { term: "Alligator cracking", definition: "Interconnected fatigue cracks resembling crocodile skin in the wheel path of a flexible pavement, caused by repeated tensile strain at the bottom of the bituminous layer." },
              { term: "Pumping", definition: "The ejection of water and fines from under a rigid slab through joints or cracks under moving wheel load, a sign of drainage failure that leads to faulting." },
              { term: "Faulting", definition: "Differential vertical displacement of adjacent rigid slabs at a joint, caused by loss of subgrade support through pumping." },
            ],
            examQuestions: [
              {
                q: "List the common distress types in flexible and rigid pavements. State the cause of each major distress and the corresponding maintenance, and explain why the cause must be diagnosed before treatment.",
                marks: 7,
                outline: [
                  "List flexible distresses: rutting, alligator cracking, block cracking, raveling, bleeding, potholes.",
                  "Give cause of rutting as cumulative vertical strain in granular layers.",
                  "Give cause of alligator cracking as fatigue of the bituminous layer.",
                  "List rigid distresses: scaling, spalling, faulting, pumping, D-cracking, blow-up.",
                  "Give cause of faulting as pumping of fines under the slab.",
                  "State the corresponding maintenance for each: overlay, patch, grind, under-seal, drain.",
                  "Conclude that treating the symptom without the cause reflects the distress back quickly.",
                ],
              },
              {
                q: "State the cause of faulting in a rigid pavement.",
                marks: 2,
              },
              {
                q: "List three distresses typical of flexible pavements and one cause of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Pavement management system",
            body: [
              "A Pavement Management System (PMS) is a systematic, computer-supported decision framework that helps a road agency manage its pavement network over the long term. It combines a database of pavement sections, their inventory and construction history, their condition from periodic surveys, and their traffic and environment, with predictive models of how each section will deteriorate and cost models for the candidate maintenance treatments. The output is a prioritised, budget-constrained maintenance programme that maximises network-wide serviceability for the available funds.",
              "The PMS operates at two levels. At the network level, the PMS evaluates the entire road network, identifies sections needing maintenance, ranks them by a combined condition index and life-cycle cost, and outputs an annual maintenance programme for the available budget. At the project level, the PMS evaluates a single section in detail, selects the appropriate treatment (routine maintenance, thin overlay, structural overlay, recycling or reconstruction), and designs the treatment using the methods of the preceding units. The two levels share the same database and condition data, ensuring consistency.",
              "The PMS data is gathered by periodic condition surveys at intervals of one to three years depending on traffic and climate, using manual visual surveys, automated laser profilers for roughness and rutting, and high-resolution imaging for cracking. The data is processed into indices such as the Pavement Condition Index, the International Roughness Index and the structural number from deflection testing, then fed into the deterioration models. The models project each section's condition forward for the budget period and the optimisation routine selects the intervention sequence that minimises total life-cycle cost while keeping the network above a chosen serviceability threshold. Indian agencies including the National Highways Authority of India use PMS software for national highway management.",
            ],
            bullets: [
              "Pavement Management System: a decision framework for prioritising maintenance over a road network.",
              "Two levels: network-level (whole network, annual programme) and project-level (single section, treatment design).",
              "Database: inventory, construction history, condition, traffic, environment per section.",
              "Predictive models: project each section's condition forward over the budget period.",
              "Cost models: routine maintenance, thin overlay, structural overlay, recycling, reconstruction.",
              "Optimisation: minimise life-cycle cost subject to a serviceability threshold and budget.",
              "Indian users: National Highways Authority of India uses PMS software for national highways.",
            ],
            table: {
              caption: "Pavement Management System components and outputs.",
              headers: ["Component", "Input", "Output"],
              rows: [
                ["Database", "Inventory, condition, traffic", "Section records"],
                ["Deterioration model", "Current PCI, age, traffic", "Future PCI projection"],
                ["Cost model", "Treatment type, quantities", "Treatment cost"],
                ["Optimiser", "Budget, serviceability target", "Annual maintenance programme"],
                ["Reporting", "Programme and projections", "Work plan and budget"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The pavement management cycle",
              caption:
                "Survey the network, project deterioration, choose treatments, optimise under budget, execute and re-survey. The cycle repeats annually.",
              steps: [
                { label: "Condition survey", note: "roughness, cracking, deflection" },
                { label: "Deterioration projection", note: "PCI forward over budget" },
                { label: "Treatment selection", note: "routine, overlay, recycle" },
                { label: "Budget optimisation", note: "minimise life-cycle cost" },
                { label: "Execute and re-survey", note: "close the loop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Network and project levels in the same answer",
              body: "When asked about the PMS, distinguish the network level (whole-network prioritisation for budget) from the project level (single-section treatment design). Examiners want both levels named. Add the cycle - survey, project, optimise, execute, re-survey - to show the system is iterative.",
            },
            keyTerms: [
              { term: "Pavement Management System (PMS)", definition: "A systematic decision framework combining condition data, deterioration models and cost models to produce a prioritised, budget-constrained maintenance programme for a road network." },
              { term: "Network level", definition: "The PMS level that evaluates the entire road network, ranks sections and outputs an annual maintenance programme for the available budget." },
              { term: "Project level", definition: "The PMS level that evaluates a single section in detail and designs the appropriate maintenance treatment using the methods of the preceding units." },
              { term: "International Roughness Index (IRI)", definition: "A standardised roughness measure in metres per kilometre obtained from a quarter-car simulation of the measured road profile; a key PMS condition input." },
            ],
            examQuestions: [
              {
                q: "Define a Pavement Management System. Describe its two levels of operation, its database and predictive components, and the optimisation that produces the annual maintenance programme.",
                marks: 7,
                outline: [
                  "Define a PMS as a systematic decision framework for pavement maintenance.",
                  "Describe the network level: whole-network ranking and annual programme for budget.",
                  "Describe the project level: single-section treatment design.",
                  "State the database components: inventory, condition, traffic, environment.",
                  "State the predictive deterioration models projecting PCI forward over the budget.",
                  "State the cost models for routine, overlay, recycling and reconstruction.",
                  "Conclude with the optimiser that minimises life-cycle cost subject to a serviceability threshold.",
                ],
              },
              {
                q: "Name the two levels at which a Pavement Management System operates.",
                marks: 2,
              },
              {
                q: "State three components of the data gathered by a PMS condition survey.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Functional and structural evaluation",
            body: [
              "Functional evaluation measures how well the pavement serves the road user, focusing on riding quality and safety rather than structural capacity. The principal functional tests are roughness measurement by the Bump Integrator or laser profiler (reported as the International Roughness Index in metres per kilometre), skid resistance measurement by the British Pendulum Tester (reported as British Pendulum Number), texture depth by the sand patch test, and rut depth by a straight-edge measurement across the wheel path. A new flexible pavement typically has an IRI below 2.5 m/km and a BPN above 55.",
              "Structural evaluation measures the residual load-carrying capacity of the pavement, focusing on whether it can support future traffic without structural failure. The principal structural test is the deflection measurement under a known wheel load, conducted by the Benkelman beam deflection method on flexible pavements or by the Falling Weight Deflectometer (FWD) on both flexible and rigid pavements. The Benkelman beam measures the rebound deflection of the bituminous surface under a slowly moving loaded truck (typically a dual-tyre rear axle loaded to 8170 kilograms), with corrections applied for temperature and subgrade moisture.",
              "The deflection data feeds directly into the overlay design. The mean deflection over a section, corrected to a standard temperature of 35 degrees Celsius and to the worst subgrade moisture, is compared with a design allowable deflection derived from the design ESAL. If the measured deflection exceeds the allowable, an overlay is needed; the overlay thickness is computed from the difference between the measured and allowable deflections using IRC 81 design charts. The FWD, which applies an impulse load through a falling weight on a plate, gives a deflection basin that can be back-analysed to the elastic moduli of each layer, providing a much richer structural evaluation than the Benkelman beam at higher equipment cost.",
            ],
            bullets: [
              "Functional evaluation: riding quality and safety; roughness, skid, texture, rut depth.",
              "Roughness: Bump Integrator or laser profiler, reported as IRI in m/km.",
              "Skid resistance: British Pendulum Tester, reported as British Pendulum Number (BPN).",
              "Structural evaluation: residual load-carrying capacity under a known wheel load.",
              "Benkelman beam: rebound deflection under a dual-tyre axle loaded to 8170 kg.",
              "Falling Weight Deflectometer (FWD): impulse load, deflection basin back-analysed to layer moduli.",
              "Overlay thickness from IRC 81 chart using measured and allowable deflections.",
            ],
            table: {
              caption: "Functional and structural evaluation tests.",
              headers: ["Category", "Test", "Apparatus", "Output"],
              rows: [
                ["Functional", "Roughness", "Bump Integrator / laser", "IRI (m/km)"],
                ["Functional", "Skid resistance", "British Pendulum Tester", "BPN"],
                ["Functional", "Texture depth", "Sand patch", "MTD (mm)"],
                ["Structural", "Deflection", "Benkelman beam", "Deflection (mm)"],
                ["Structural", "Deflection basin", "Falling Weight Deflectometer", "Layer moduli (MPa)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Functional versus structural evaluation",
              caption:
                "Functional evaluation answers 'how does it ride?'; structural evaluation answers 'how long will it carry the load?' Both feed the PMS and the overlay design.",
              left: {
                heading: "Functional evaluation",
                items: [
                  "Roughness by Bump Integrator (IRI)",
                  "Skid resistance by British Pendulum (BPN)",
                  "Texture depth by sand patch",
                  "Rut depth by straight-edge",
                  "Answers: how does it ride?",
                ],
              },
              right: {
                heading: "Structural evaluation",
                items: [
                  "Deflection by Benkelman beam",
                  "Deflection basin by FWD",
                  "Back-analysed layer moduli",
                  "Compared with allowable for design ESAL",
                  "Answers: how long will it carry load?",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Temperature correction is mandatory",
              body: "Benkelman beam deflection is sensitive to the bituminous layer temperature because bitumen softens as it warms. The measured deflection must be corrected to a standard temperature of 35 degrees Celsius using the IRC 81 chart before comparing with the allowable deflection. Skipping this correction is the most common slip in an overlay design answer.",
            },
            keyTerms: [
              { term: "Functional evaluation", definition: "Pavement evaluation focused on riding quality and safety, measured by roughness, skid resistance, texture depth and rut depth." },
              { term: "Structural evaluation", definition: "Pavement evaluation focused on residual load-carrying capacity, measured by deflection under a known wheel load using the Benkelman beam or FWD." },
              { term: "Benkelman beam", definition: "A deflection-measuring apparatus that records the rebound deflection of a bituminous pavement under a slowly moving loaded dual-tyre truck axle." },
              { term: "Falling Weight Deflectometer (FWD)", definition: "A device that applies an impulse load to a pavement through a falling weight on a plate and measures the resulting deflection basin, which is back-analysed to layer moduli." },
            ],
            examQuestions: [
              {
                q: "Differentiate between functional and structural evaluation of pavements. Describe the Benkelman beam deflection method, the temperature correction, and how the measured deflection is used to design a bituminous overlay.",
                marks: 7,
                outline: [
                  "Define functional evaluation as measuring riding quality and safety.",
                  "List functional tests: roughness by Bump Integrator (IRI), skid by British Pendulum (BPN).",
                  "Define structural evaluation as measuring residual load-carrying capacity.",
                  "Describe the Benkelman beam: rebound deflection under a dual-tyre 8170 kg axle.",
                  "State the temperature correction to a standard 35 degrees Celsius per IRC 81.",
                  "Compare the corrected mean deflection with the allowable deflection for design ESAL.",
                  "Compute overlay thickness from the difference using the IRC 81 chart.",
                ],
              },
              {
                q: "State the standard temperature to which Benkelman beam deflection is corrected.",
                marks: 2,
              },
              {
                q: "Name one functional and one structural evaluation test for pavements.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Overlays, recycling and drainage considerations",
            body: [
              "An overlay is a new layer of bituminous or concrete material laid over an existing pavement to restore its serviceability and extend its life. Bituminous overlays are the most common and are designed by the Benkelman beam deflection method per IRC 81: the measured deflection is corrected for temperature and moisture, compared with the allowable deflection for the future design ESAL, and the difference gives the overlay thickness from the IRC 81 chart. A thin overlay of 40 to 50 millimetres corrects functional distress (roughness, minor cracking); a structural overlay of 100 millimetres or more adds structural capacity to carry future traffic.",
              "Recycling reclaims the bituminous material of an existing pavement and reuses it in the new surfacing, reducing the demand for virgin aggregate and bitumen and avoiding disposal of planed material. Hot in-place recycling heats and mills the existing bituminous layer, mixes it with fresh bitumen and aggregate, and relays it in a single pass; cold in-place recycling mills the layer, mixes it with foamed bitumen or an emulsion, and relays it at ambient temperature. The recycled mix is designed by the Marshall method and tested for stability, flow and air voids before being approved for the surfacing.",
              "Drainage is the single most effective life-extension measure for any pavement. A dry subgrade retains its full CBR or k value; a waterlogged subgrade loses up to half its strength and the pavement fails prematurely. Sub-surface drains (longitudinal pipe drains at the subgrade shoulder interface, cross-drains at low points) lower the water table beneath the pavement; a free-draining sub-base carries any water that does enter through cracks to the side drains; a cambered formation (2 to 3 per cent cross-fall) sheds surface water. Provision and maintenance of drainage is therefore a non-negotiable component of any pavement maintenance programme, and a drainage failure is the first suspect when a pavement fails earlier than its design life.",
            ],
            bullets: [
              "Overlay: new bituminous or concrete layer over an existing pavement to extend life.",
              "Bituminous overlay designed by Benkelman beam deflection per IRC 81.",
              "Thin overlay 40-50 mm corrects functional distress; structural overlay >= 100 mm adds capacity.",
              "Hot in-place recycling: heat, mill, mix with fresh bitumen, relay in one pass.",
              "Cold in-place recycling: mill, mix with foamed bitumen or emulsion, relay at ambient.",
              "Sub-surface drains lower the water table beneath the pavement.",
              "Free-draining sub-base and cambered formation (2-3% cross-fall) shed water.",
            ],
            table: {
              caption: "Maintenance interventions and their design basis.",
              headers: ["Intervention", "Trigger", "Design method", "Thickness"],
              rows: [
                ["Thin overlay", "Functional distress, IRI > 3", "IRC 81 (minor)", "40-50 mm"],
                ["Structural overlay", "Deflection > allowable", "IRC 81 deflection chart", "100-150 mm"],
                ["Hot recycling", "Aged bitumen, deep cracks", "Marshall mix design", "in-place"],
                ["Cold recycling", "Full-depth reclamation", "Foamed bitumen design", "in-place"],
                ["Sub-surface drain", "Pumping, waterlogged subgrade", "Hydraulic design", "150 mm pipe"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a maintenance intervention",
              caption:
                "The intervention depends on the distress type. Functional distress gets a thin overlay; structural distress gets a structural overlay; aged bitumen gets recycling; drainage distress gets drains.",
              start: "Distress diagnosis from PMS",
              branches: [
                { label: "Functional distress only", outcome: "thin overlay 40-50 mm", good: true },
                { label: "Structural distress", outcome: "structural overlay per IRC 81", good: true },
                { label: "Aged bitumen, deep cracks", outcome: "hot or cold recycling", good: true },
                { label: "Pumping, waterlogged", outcome: "sub-surface drains first", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Drainage before overlay",
              body: "An overlay laid over a pavement with a waterlogged subgrade will fail within months as the wet subgrade ruts and cracks the new surfacing. Always diagnose and fix drainage before any overlay. The order of maintenance is drainage first, structural overlay second, thin surface treatment last.",
            },
            keyTerms: [
              { term: "Overlay", definition: "A new bituminous or concrete layer laid over an existing pavement to restore serviceability and extend life, designed by the Benkelman beam deflection method per IRC 81." },
              { term: "In-place recycling", definition: "Reclamation of the bituminous material of an existing pavement by hot or cold milling, mixing with fresh binder and relaying, reducing demand for virgin materials." },
              { term: "Sub-surface drain", definition: "A pipe drain at the subgrade shoulder interface that lowers the water table beneath the pavement and prevents subgrade saturation." },
              { term: "Free-draining sub-base", definition: "A granular sub-base with high permeability that carries any water entering through cracks to the side drains, protecting the subgrade from saturation." },
            ],
            examQuestions: [
              {
                q: "Describe the design of a bituminous overlay by the Benkelman beam deflection method per IRC 81. Explain the role of temperature correction, and discuss recycling and drainage as complementary maintenance interventions.",
                marks: 7,
                outline: [
                  "Define an overlay as a new bituminous layer over an existing pavement to extend life.",
                  "Describe the Benkelman beam measurement of rebound deflection under a loaded axle.",
                  "State the temperature correction to 35 degrees Celsius per IRC 81.",
                  "State the moisture correction for the worst subgrade condition.",
                  "Compare the corrected deflection with the allowable for the future design ESAL.",
                  "Compute overlay thickness from the difference using the IRC 81 chart.",
                  "Add recycling as reclamation of bituminous material and drainage as the first maintenance step.",
                ],
              },
              {
                q: "State the thickness of a typical thin overlay used to correct functional distress.",
                marks: 2,
              },
              {
                q: "Distinguish hot in-place recycling from cold in-place recycling in two lines.",
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
        "RGPV CE-603(C) papers typically concentrate 60-70 of the marks across flexible pavement design methods (CBR and IRC), rigid pavement Westergaard analysis and the design parameters (ESAL, VDF, CBR, k), with the remaining marks distributed over pavement types, evaluation and maintenance. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Westergaard analysis - interior, edge, corner stresses and the radius of relative stiffness", weight: "12-14 marks", note: "Almost guaranteed; practise writing all three equations and one full numerical." },
        { topic: "Flexible pavement design by CBR and IRC 37 methods with worked examples", weight: "10-14 marks", note: "Chart-reading plus layer splitting; show each step of the total-thickness computation." },
        { topic: "ESAL computation and VDF, with one full numerical from CVPD", weight: "8-10 marks", note: "Cumulative growth factor and VDF; almost always a worked-numbers question." },
        { topic: "Rigid pavement design by IRC 58 with combined wheel-load and warping stress", weight: "8-10 marks", note: "Stress combination and factor of safety 1.5; remember to add warping." },
        { topic: "AASHTO method, Structural Number and worked example", weight: "6-8 marks", note: "SN equation with layer coefficients; one iteration of thickness adjustment." },
        { topic: "Pavement distresses in flexible and rigid pavements and their maintenance", weight: "6-8 marks", note: "Tabulate by cause; mention 'treat the cause before the symptom'." },
        { topic: "Subgrade strength: CBR test and modulus of subgrade reaction k", weight: "6-8 marks", note: "Soaked CBR for flexible, plate-load k for rigid; both with procedure." },
        { topic: "Functional and structural evaluation: Benkelman beam and overlay design", weight: "4-6 marks", note: "Deflection correction to 35 deg C and IRC 81 overlay chart." },
        { topic: "Pavement types, layers and functions; joints, dowels and tie bars", weight: "4-6 marks", note: "Comparison tables and one-line definitions; quick revision yields full marks." },
        { topic: "Pavement Management System and pavement performance", weight: "4-6 marks", note: "Two levels, the cycle and the condition indices (PCI, IRI)." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - pavement types and components", tasks: ["Flexible versus rigid comparison and the layered structure", "Subgrade preparation, CBR classification, weak-soil fixes", "Sub-base, base and surfacing materials; functions of each layer"] },
        { week: "Week 2", focus: "Unit II - design parameters", tasks: ["Traffic characterisation and axle load survey; fourth-power law", "ESAL and VDF numericals; design life and growth rate", "CBR test and modulus of subgrade reaction k (plate load)"] },
        { week: "Week 3", focus: "Unit III - flexible design methods", tasks: ["CBR method chart reading and layer splitting (3 examples)", "Group Index method and IRC 37 mechanistic-empirical extension", "AASHTO Structural Number numericals; stresses and failure criteria"] },
        { week: "Week 4", focus: "Unit IV - rigid pavement design", tasks: ["PCC pavement, joints and curing; dowels versus tie bars", "Westergaard equations and one full numerical for l and stresses", "IRC 58 method; shrinkage and temperature warping stresses"] },
        { week: "Week 5", focus: "Unit V - evaluation and maintenance", tasks: ["Pavement performance, PSI and PCI; distress types by pavement", "Pavement Management System - two levels and the cycle", "Functional and structural evaluation; overlay design and recycling"] },
        { week: "Week 6", focus: "Full revision and mock papers", tasks: ["Re-derive Westergaard and ESAL formulae from memory", "Two full past papers under exam timing (3 hours each)", "Drainage-first overlay design and IRC 81 chart practice"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day revision - the six things to nail",
      body: [
        "The last day before the exam is not for new material; it is for locking in the high-yield items that the paper will almost certainly test. Spend six focused sessions on the items below, in this order, and stop revision by early evening so you arrive fresh.",
      ],
      bullets: [
        "Write the Westergaard interior, edge and corner equations plus the radius of relative stiffness l from memory.",
        "Write the ESAL formula with cumulative growth factor, VDF and lane factor, and rework one numerical end to end.",
        "Write the AASHTO Structural Number equation SN = a1D1 + a2D2 + a3D3 with typical coefficients 0.44, 0.14, 0.10.",
        "Tabulate flexible versus rigid pavements across six aspects; tabulate dowels versus tie bars.",
        "List the CBR test procedure (50 mm plunger, 1.25 mm/min, 2.5 and 5.0 mm, soaked 4 days) and the plate load test for k.",
        "List the IRC 81 overlay design steps with temperature correction to 35 degrees Celsius.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Write definitions verbatim before any example - the definition lines are marked separately from the working.",
        "For Westergaard questions, write the three equations and the radius of relative stiffness first, then substitute numbers. Formula marks are independent of the arithmetic.",
        "For ESAL and Structural Number numericals, state each step of the multiplication explicitly; the cumulative growth factor is not n times (1+r), it is the sum of (1+r)^y.",
        "Draw the pavement cross-section before describing the layers; the sketch earns a separate diagram mark even if the text is incomplete.",
        "In rigid pavement questions, always combine the wheel-load stress with the warping stress before the factor-of-safety check. Skipping warping is the most common lost mark.",
        "For overlay design, state the temperature correction to 35 degrees Celsius per IRC 81 before comparing with the allowable deflection.",
        "Quote the IRC code by number (IRC 37 flexible, IRC 58 rigid, IRC 81 overlay); bare calculations earn fewer marks than code-cited calculations.",
        "Time-box: 2/3-mark questions in 4-6 minutes, 7-mark questions in 14-18 minutes, and keep the last 10 minutes for re-checking formulae and units.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Computing the cumulative growth factor as n times (1+r) instead of the sum of (1+r)^y - a 50 per cent underestimate for 15 years at 7.5 per cent.",
        "Designing on the unsoaked CBR instead of the soaked CBR - over-estimates subgrade strength by up to 50 per cent.",
        "Using CBR for rigid pavement design or k for flexible pavement design - the methods assume different failure mechanisms.",
        "Describing a tie bar as a load-transfer device - tie bars hold the longitudinal joint closed; only dowels transfer wheel load.",
        "Skipping the temperature correction in Benkelman beam deflection - the IRC 81 chart assumes a standard 35 degrees Celsius.",
        "Checking the Westergaard corner stress alone without adding the warping stress - the IRC 58 check is on the combined stress.",
        "Treating the corner as the only critical rigid pavement position - with warping added, the edge often governs.",
        "Using non-standard layer coefficients in the AASHTO equation - 0.44, 0.14 and 0.10 are the values to memorise.",
        "Laying a bituminous overlay over alligator cracking without diagnosing the weak subgrade below - the cracks reflect back within a year.",
        "Forgetting that the VDF for an axle is (P/80)^4, not (P/80)^2 or (P/80) - the fourth power is the empirical core of the method.",
      ],
    },
  ],
};
