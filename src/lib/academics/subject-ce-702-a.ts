/**
 * Academics - RGPV Civil Engineering 7th-semester subject: CE-702(A)
 * Prestressed Concrete Structures.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 *
 * A single running example threads the whole subject: a rectangular beam
 * b = 300 mm, h = 600 mm, span 12 m, prestressing force P = 1200 kN at
 * eccentricity e = 150 mm, M1 = 90 kN·m at transfer, M2 = 260 kN·m at
 * service, M40 concrete with transfer strength 30 N/mm2.
 */

import type { AcademicSubject } from "./types";

export const ce702a: AcademicSubject = {
  id: "ce-702-a",
  code: "CE-702(A)",
  title: "Prestressed Concrete Structures",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to prestressed concrete for RGPV civil engineers: fundamentals and losses, the great tensioning systems, analysis by stress concept, load balancing and pressure lines, Magnel's design method, and the applications - from sleepers and tanks to segmental bridges.",
  description:
    "Five units walk from why concrete must be pre-compressed and which high-strength materials make that possible, through pre-tensioning and the post-tensioning systems of Freyssinet, Magnel-Blaton and Lee-McCall, into analysis by the stress concept, load balancing, the kern and the pressure line, then design with the M-sec inequalities, end blocks, shear and ultimate flexure, and finally the field itself - beams, slabs, poles, sleepers, pipes, tanks, bridges and the IS 1343 rulebook that binds them. A single running example - a 300 x 600 mm beam carrying 1200 kN at 150 mm eccentricity over 12 m - threads through every unit, so each new formula lands on the same familiar numbers.",
  accentColor: "#6366f1",
  emoji: "PC",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Prestressing Fundamentals",
      summary:
        "Why concrete must be pre-compressed, what prestressing buys over reinforced concrete, the high-tensile steel and high-strength concrete that make it work, and the six losses of prestress - elastic shortening, creep, shrinkage, friction, anchorage slip and relaxation - that the designer must count and recover.",
      chapter: {
        number: "01",
        title: "Prestressing Fundamentals",
        intro:
          "Unit I builds the idea and the materials at once: the compound stress equations that let a deliberate compression neutralise service tension, the advantages and honest limitations of prestressed concrete, the reason Freyssinet demanded high-tensile steel and high-strength concrete, and the complete ledger of prestress losses with formulas and typical percentages.",
        inOneBreath:
          "Prestressing locks compression into concrete before the loads arrive, so extreme-fiber stresses combine as P/A, P·e/Z and M/Z; eccentricity is the multiplier because it pre-compresses exactly where loads will pull. High-tensile steel is mandatory because a fixed loss strain of roughly 0.0003 devours mild steel but only about 5 percent of a strand at 0.7 f_u; high-strength concrete is mandatory because it creeps and shrinks less, bears anchorages and grips wire. The six losses split immediate (elastic shortening, friction, anchorage slip) from time-dependent (creep, shrinkage, relaxation); totals run about 20 percent pre-tensioned and 15 percent post-tensioned, and every design is made with the effective prestress that survives them.",
        sections: [
          {
            number: "1.1",
            title: "The concept of prestressing",
            body: [
              "Concrete is strong in compression - cube strengths of 40 to 60 N/mm2 are routine - but its tensile strength is barely a tenth of that, roughly 3 to 5 N/mm2. A plain concrete beam loaded as a simply supported span cracks in the bottom fibers long before its compressive capacity is of any use. Reinforced concrete answers by letting steel bars carry the tension, yet the concrete around the bars still cracks, the section loses stiffness, and the working stress in ordinary bars stays low because crack widths, not steel strength, govern the design. Prestressing attacks the problem from the other side: before the loads ever arrive, a compressive force is locked into the member - usually by stretching high-tensile steel against the concrete - so that the tension the service loads would create is first spent releasing this deliberate compression.",
              "In its simplest form a prestressing force P applied along the centroid of a section of area A produces a uniform compression P/A everywhere. The real power comes from eccentricity: place the tendon a distance e below the centroid and the same force also applies a moment P·e that compresses the bottom fibers and eases the top. Under a service moment M the extreme-fiber stresses superpose as f_top = P/A - P·e/Z_t + M/Z_t and f_bot = P/A + P·e/Z_b - M/Z_b, where Z_t and Z_b are the section moduli for the top and bottom fibers (compression taken positive). A well-chosen pair of P and e keeps both fibers compressive at every stage - transfer, self-weight and full service load - which is the hallmark of a fully prestressed Class 1 member.",
              "The idea is ancient - coopers strapped barrels with iron hoops that pinched the staves into compression - but practical prestressing belongs to Eugene Freyssinet, whose French work of 1928 to 1939 established the two non-negotiable requirements: high-strength steel, so that inevitable losses still leave useful prestress, and high-strength concrete, so that creep and shrinkage do not quietly eat the force. The everyday analogies make the principle vivid: a row of books lifted flat by squeezing the ends, or a pack of cards carried on edge - in each case a deliberate compressive force supplies the bending resistance the loose stack never had. Everything in this subject - systems, losses, kerns, pressure lines, design methods - exists to place, preserve and exploit that deliberate compression.",
            ],
            bullets: [
              "Prestressing: a deliberate compressive stress locked into concrete before service loads, offsetting the tension those loads will cause.",
              "Concrete tension is about one-tenth of its compression; RC accepts cracks, PSC can eliminate them.",
              "Compound stresses: f_top = P/A - P·e/Z_t + M/Z_t and f_bot = P/A + P·e/Z_b - M/Z_b, compression positive.",
              "Eccentricity multiplies efficiency: the P·e term pre-compresses exactly the fibers the loads will pull.",
              "Freyssinet (1928-1939): high-tensile steel and high-strength concrete together make prestressing durable.",
              "Book-row analogy: a compressive squeeze lets a loose stack behave like a beam - the whole subject in one picture.",
            ],
            table: {
              caption:
                "Stress bookkeeping for the running example (b = 300 mm, h = 600 mm, Z = 18 x 10^6 mm3, P = 1200 kN, e = 150 mm), compression positive.",
              headers: ["Effect", "Top fiber (N/mm2)", "Bottom fiber (N/mm2)"],
              rows: [
                ["Axial P/A", "+6.67", "+6.67"],
                ["Eccentricity P·e/Z (e = 150 mm)", "-10.00", "+10.00"],
                ["Net prestress alone (no external load)", "-3.33", "+16.67"],
                ["Service moment M = 260 kN·m adds M/Z", "+14.44", "-14.44"],
                ["Result at full service load", "+11.11", "+2.22"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From bare section to balanced service stress",
              caption:
                "The four actions stack in this order; the aim is compression at both fibers throughout.",
              steps: [
                { label: "Cast the beam with a tendon e below the centroid" },
                { label: "Tension and anchor: P/A plus P·e/Z locked in", note: "bottom pre-compressed, top eased" },
                { label: "Self-weight arrives: adds M1/Z with opposite signs" },
                { label: "Full service load: adds the rest of M2/Z" },
                { label: "Both fibers still in compression - Class 1 behaviour", note: "the whole point of prestressing" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Declare your sign convention (compression positive) before writing f_top and f_bot, then quote the four terms P/A, P·e/Z_t, P·e/Z_b and M/Z. The equation earns method marks even before any number is substituted, and examiners look for it in almost every numerical of Units III and IV.",
            },
            keyTerms: [
              { term: "Prestressing", definition: "Deliberate compressive stress introduced into concrete before service loads so that load-induced tension is neutralised." },
              { term: "Tendon", definition: "The stretched element - wire, strand or bar - that holds the prestressing force against the concrete." },
              { term: "Eccentricity e", definition: "Distance of the tendon centroid from the section centroid; it converts the axial force into a beneficial moment P·e." },
              { term: "Section modulus Z", definition: "I/y for the extreme fiber; converts a moment into extreme-fiber stress when divided into it." },
            ],
            examQuestions: [
              {
                q: "Define prestressing. With sketches and the compound stress equations, explain how an eccentric prestressing force keeps a simply supported beam crack-free at transfer and under service loads.",
                marks: 7,
                outline: [
                  "Define prestressing as pre-compression locked in before loads arrive.",
                  "Compare tensile and compressive strength of concrete (about 1:10).",
                  "Write f = P/A for the concentric case; note it compresses every fiber equally.",
                  "Introduce eccentricity: the moment P·e compresses the bottom, eases the top.",
                  "Superpose external moment: f_top = P/A - P·e/Z_t + M/Z_t, f_bot = P/A + P·e/Z_b - M/Z_b.",
                  "Show a small numeric illustration (e.g. the running example rows) at transfer and service.",
                  "Conclude: both fibers compressive means no cracking - Class 1 behaviour.",
                ],
              },
              {
                q: "State the two material requirements Freyssinet identified for successful prestressing and explain why mild steel fails the test.",
                marks: 3,
              },
              {
                q: "Write the extreme-fiber stress equations for a prestressed rectangular beam and identify each term and its units.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Advantages and limitations versus reinforced concrete",
            body: [
              "Prestressing buys structural performance first: members stay crack-free, so the whole section works instead of just the compressed zone, and stiffness stays high because concrete does not lose its tension side. Sections can be shallower - span-to-depth ratios of 20 to 24 are routine for prestressed beams against roughly 10 to 14 for reinforced ones - which trims dead load, storey heights and foundation loads. Longer spans become economic: reinforced concrete runs out around 10 to 12 m for beams, while prestressed concrete comfortably serves 12 to 50 m and, in bridges, far beyond. Durability follows from the absence of cracks, which is why liquid-retaining tanks, pipes and marine structures are natural clients; fatigue resistance is high because the steel stress range under service loads stays small.",
              "The honest limitations balance the ledger. Prestressing demands high-strength materials, which cost more per unit volume, and it demands hardware - jacks, anchorages, beds or ducts - plus skilled supervision and tight quality control that ordinary construction sites do not always have. End zones need careful design for concentrated anchor forces. Members are harder to alter or repair once cast, and precast elements face transport weight limits. For short spans, massive compression members or lightly stressed slabs, prestressing is simply not worth its overhead - a fact worth stating in the exam rather than pretending prestressing is universally superior.",
              "Quantitatively, high-tensile steel working at 1000 to 1500 N/mm2 replaces roughly six to eight times its area of mild steel working at 140 to 230 N/mm2, and dead-load reductions of 25 to 35 percent are common in floor and bridge work. The classic RGPV answer organises the comparison under headings: strength of materials, span range, crack and deflection control, durability, weight, and construction demands. Close with the domain map: reinforced concrete for short spans, heavy sections and simple sites; prestressed concrete for long spans, repetitive precast products, crack-free service and everything that must hold water, carry rails or fly over rivers.",
            ],
            bullets: [
              "Crack-free service: the full section stays effective; stiffness and durability are both higher.",
              "Slender members: span/depth about 20-24 for PSC beams versus 10-14 for RC; dead load drops 25-35 percent.",
              "Span economy: RC tops out near 10-12 m; PSC runs 12-50 m routinely and far beyond in bridges.",
              "Steel economy: HT steel at 1000-1500 N/mm2 does the duty of six to eight times its area of mild steel.",
              "Limitations: jacks, anchorages, beds, grouting, skilled labour and quality control raise the entry cost.",
              "Not for everything: short spans, massive compression members and simple sites favour plain RC.",
            ],
            table: {
              caption: "Head-to-head at a glance - the table RGPV examiners reward.",
              headers: ["Criterion", "Reinforced concrete", "Prestressed concrete"],
              rows: [
                ["Working steel stress", "140-230 N/mm2 (mild/HYSD)", "1000-1500 N/mm2 (HT steel)"],
                ["Cracking", "Expected and allowed", "Avoidable entirely (Class 1)"],
                ["Span/depth of beams", "about 10-14", "about 20-24"],
                ["Economic span range", "up to about 10-12 m", "12-50 m and beyond"],
                ["Durability", "Cracks admit water and chlorides", "Crack-free; ideal for tanks, marine, rails"],
                ["Construction", "Conventional site skills", "Jacks, anchorages, beds, grouting, QC"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "RC versus PSC: two philosophies of the same beam",
              caption: "RC lets steel fight the tension after cracking; PSC removes the tension before it starts.",
              left: {
                heading: "Reinforced concrete",
                items: [
                  "Steel works only after the concrete cracks",
                  "Tension steel at 140-230 N/mm2",
                  "Sections deep: span/depth about 10-14",
                  "Crack width and deflection govern design",
                  "Best for short spans, slabs, simple sites",
                ],
              },
              right: {
                heading: "Prestressed concrete",
                items: [
                  "Concrete stays compressed - no cracking",
                  "HT steel at 1000-1500 N/mm2",
                  "Slender: span/depth about 20-24",
                  "Whole section works; camber balances sag",
                  "Economic from 12 m to beyond 50 m",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Answer skeleton",
              body: "For 'compare RCC and PSC' (a near-guaranteed 7-mark), organise under exactly six heads: materials, structural action, span range, durability, economy and construction requirements - then finish with one line on where each wins. Six labeled points read like a textbook answer and score full marks.",
            },
            keyTerms: [
              { term: "Class 1 member", definition: "A fully prestressed member in which no tensile stress is permitted at any load stage." },
              { term: "Camber", definition: "The upward bow a prestressing force induces; it offsets later sag but must be controlled." },
              { term: "Span-to-depth ratio", definition: "The slenderness gauge of a beam; PSC roughly doubles the RC value." },
            ],
            examQuestions: [
              {
                q: "Discuss the advantages of prestressed concrete over reinforced concrete and list its limitations. Conclude with the situations where each is the correct choice.",
                marks: 7,
                outline: [
                  "Materials: HT steel and high-strength concrete versus mild/HYSD steel and M20-M25.",
                  "Structural action: full section in compression versus cracked tension zone.",
                  "Crack and deflection control: none versus permitted; camber versus sag.",
                  "Span and slenderness: 20-24 versus 10-14 span/depth; 12-50 m versus up to 12 m.",
                  "Durability and fatigue: crack-free concrete resists water, chlorides and rail loading.",
                  "Limitations: cost of plant and hardware, skilled labour, QC, end-zone design, repair difficulty.",
                  "Verdict: PSC for long spans, precast products and liquid-retaining work; RC for short spans and simple sites.",
                ],
              },
              {
                q: "Give two limitations of prestressed concrete that a site engineer must respect during construction.",
                marks: 2,
              },
              {
                q: "Why is prestressed concrete the default material for railway sleepers and water tanks?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Materials: high-tensile steel and high-strength concrete",
            body: [
              "High-strength concrete earns its place five times over. It carries the enormous bearing and bursting stresses under anchorages at transfer; it shrinks and creeps less, so the time-dependent losses that Unit I counts shrink with it; its higher modulus of elasticity reduces the elastic-shortening loss directly; it grips pre-tensioned wire with a bond strength that low-grade mixes cannot match; and it is simply more durable in the long run. Grades M40 to M60 are the working band. The classic IS 1343 (1980) minima - M40 for pre-tensioned and M30 for post-tensioned work - are quoted in every Indian classroom, and modern durability thinking pushes designers higher still. Early strength matters as much as final strength, because beds and moulds turn over faster when transfer can happen soon; steam curing and high-early cement deliver it.",
              "High-tensile steel is not a preference but arithmetic. Creep plus shrinkage of concrete removes a fixed strain of roughly 0.0003 from the steel regardless of what the steel is. Mild steel working at 140 N/mm2 carries a strain of about 0.0007 - the losses would devour over forty percent of it. A cold-drawn wire or strand stressed to 1100 N/mm2 carries a strain near 0.0055, and the same 0.0003 is barely five percent. That single calculation is Freyssinet's gift. The forms of the steel: plain cold-drawn wires of 5 to 8 mm with ultimate strengths of 1600 to 2000 N/mm2 (IS 1785); seven-wire strands, the modern workhorse, a 15.2 mm strand being typical (IS 6003); and high-tensile bars of 12 to 40 mm, threadable for nut anchorages (IS 2090).",
              "The two materials work as a composite, so their stiffnesses matter together. Steel at E_s = 200 kN/mm2 against concrete at E_c = 28 to 36 kN/mm2 gives a modular ratio m of about 6, a number that recurs in every loss formula. Steel relaxation - the slow fall of stress at constant strain - is quoted as a percentage at 1000 hours: 5 to 8 percent for standard stress-relieved wire at 0.7 f_u, but only 1 to 2 percent for low-relaxation product, which is why modern strand is almost always low-relaxation. On the concrete side, specify the grade, the transfer strength, the curing regime and the creep and shrinkage parameters together, because every one of them reappears in the loss ledger of the next two sections.",
            ],
            bullets: [
              "High-strength concrete: bears anchorages, shrinks and creeps less, grips wire, lasts longer; M40-M60 typical.",
              "IS 1343 (1980) minima: M40 pre-tensioned, M30 post-tensioned - quote them verbatim in the exam.",
              "The loss-strain argument: 0.0003 of loss strain is 40+ percent of mild steel's working strain but about 5 percent of HT steel's.",
              "Steel family: 5-8 mm wires (IS 1785), 7-wire strands such as 15.2 mm (IS 6003), HT bars 12-40 mm (IS 2090).",
              "Modular ratio m = E_s/E_c is about 6 - it reappears in every elastic and creep loss formula.",
              "Relaxation: 5-8 percent for standard wire at 0.7 f_u over 1000 h; 1-2 percent for low-relaxation strand.",
            ],
            table: {
              caption: "Materials quick sheet for prestressed concrete.",
              headers: ["Item", "Requirement", "Why it matters"],
              rows: [
                ["Concrete grade", "M40-M60 working band", "Lower creep, shrinkage and bearing problems"],
                ["Transfer strength", "Often 70-80 percent of 28-day cube strength", "Allows early release of beds and moulds"],
                ["Steel ultimate", "1600-2000 N/mm2 (wires/strands)", "Leaves useful prestress after losses"],
                ["Steel modulus", "200 kN/mm2", "Sets modular ratio m of about 6"],
                ["Relaxation class", "Low-relaxation preferred", "Halves the relaxation loss term"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the tendon form",
              caption: "Diameter and strength together decide the tendon family.",
              axes: { x: "Tensile strength: moderate to very high", y: "Tendon diameter: small to large" },
              quadrants: [
                { label: "Wires 5-8 mm", note: "wire winding for pipes and tanks; small precast units" },
                { label: "7-wire strands", note: "girders, bridges, slabs - the modern default" },
                { label: "Threaded HT bars", note: "Lee-McCall ties and anchors; simple, low slip" },
                { label: "Heavy bars and multi-strand", note: "record spans, ground anchors, stay cables" },
              ],
            },
            callout: {
              type: "exam",
              title: "Banker short question",
              body: "'Why high-strength materials?' appears almost every year. Answer with the strain calculation: losses remove about 0.0003 strain; mild steel at 140 N/mm2 has only 0.0007 to give, HT steel at 1100 N/mm2 has 0.0055. Then add the concrete reasons: anchor bearing, lower creep and shrinkage, better bond. Numbers make it a full-mark answer.",
            },
            keyTerms: [
              { term: "High-tensile steel", definition: "Steel of ultimate strength 1600-2000 N/mm2 - wire, strand or bar - capable of retaining prestress after losses." },
              { term: "Modular ratio", definition: "m = E_s/E_c, about 6, converting concrete stress into steel stress change in loss formulas." },
              { term: "Relaxation", definition: "The slow decrease of steel stress under constant strain, quoted as a percentage at 1000 hours." },
            ],
            examQuestions: [
              {
                q: "Why must prestressed concrete use high-tensile steel and high-strength concrete? Support the steel argument with the loss-strain calculation.",
                marks: 7,
                outline: [
                  "State the fixed loss: creep + shrinkage of concrete removes about 0.0003 strain from the steel.",
                  "Mild steel at 140 N/mm2: strain = 140/200000 = 0.0007 - losses exceed 40 percent.",
                  "HT steel at 1100 N/mm2: strain about 0.0055 - the same loss is about 5 percent.",
                  "Conclude that mild steel cannot retain useful prestress - Freyssinet's central insight.",
                  "Concrete side: transfer and anchorage bearing stresses are high.",
                  "Concrete side: higher grade means lower creep and shrinkage losses and higher E_c.",
                  "Quote IS 1343 minima M40 (pre-tensioned) and M30 (post-tensioned) and typical steel strengths.",
                ],
              },
              {
                q: "Name the IS specifications covering prestressing wires, strands and bars.",
                marks: 2,
              },
              {
                q: "State the minimum concrete grades for pre-tensioned and post-tensioned members per IS 1343 (1980) and give one reason for the difference.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Losses I: elastic shortening, creep and shrinkage",
            body: [
              "When the prestressing force first compresses the concrete, the concrete shortens elastically - and the tendon, bonded to it, shortens with it. That is the elastic shortening loss: sigma_loss = m · f_c, where f_c is the concrete stress at the steel level immediately after transfer and m is the modular ratio (about 6). For the running example, f_c near 6.7 N/mm2 gives a loss of about 40 N/mm2. In pre-tensioned members the loss is unavoidable and full, because every tendon is locked to the concrete at the instant of release. In post-tensioned members the tendons are jacked one after another: each later tendon compresses the concrete a little more and steals force from the earlier ones. Tensioning all tendons simultaneously cancels the loss entirely; tensioning n tendons in sequence leaves the average tendon with roughly half the full value.",
              "Creep is concrete's slow deformation under sustained stress: under a constant compression the material keeps shortening for months, and the bonded tendon relaxes with it. The creep strain equals the elastic strain multiplied by the creep coefficient phi, which ranges from about 1.5 to 2.0 for concrete loaded young and is lower for older, drier concrete. The loss formula follows directly: sigma_loss = phi · m · f_c, which is simply phi times the elastic-shortening loss. For the running example with phi = 1.5 the creep loss is about 60 N/mm2. Shrinkage is different: concrete loses water and contracts whether or not it is stressed, and the tendon shortens with the member. Typical total shrinkage strains are about 0.0003 for pre-tensioned work (transferred young, so more shrinkage remains) and about 0.0002 for post-tensioned work.",
              "Notice how the numbers stack: in the running pre-tensioned example the elastic, creep and shrinkage losses come to about 40, 60 and 60 N/mm2 - some 160 N/mm2 from three mechanisms alone, before relaxation has even been counted. That is about 14 percent of an initial steel stress of 1120 N/mm2. Two habits keep exam answers clean: attach each loss to its stage (immediate at transfer, or time-dependent over months) and write the formula before substituting, because the formula carries the marks. The ledger is completed in the next section, where relaxation, friction and anchorage slip join the account and the total is checked against the customary 15-25 percent band.",
            ],
            bullets: [
              "Elastic shortening: loss = m · f_c, with m about 6 and f_c the concrete stress at steel level after transfer.",
              "Pre-tensioned: full elastic loss at release; post-tensioned: sequential jacking cuts the average loss to about half.",
              "Simultaneous tensioning of all post-tensioned tendons reduces the elastic loss to zero.",
              "Creep loss = phi · m · f_c with phi about 1.5-2.0 - literally phi times the elastic loss.",
              "Shrinkage loss = E_s x strain, strain about 0.0003 pre-tensioned and 0.0002 post-tensioned.",
              "Classify losses as immediate (elastic) or time-dependent (creep, shrinkage, relaxation) - RGPV asks for the split.",
            ],
            table: {
              caption:
                "Running-example loss ledger so far (pre-tensioned, initial steel stress 1120 N/mm2, m = 6, f_c = 6.7, phi = 1.5).",
              headers: ["Mechanism", "Formula", "Loss (N/mm2)", "Cumulative percent"],
              rows: [
                ["Elastic shortening", "m · f_c = 6 x 6.7", "about 40", "3.6"],
                ["Creep of concrete", "phi · m · f_c = 1.5 x 40", "about 60", "8.9"],
                ["Shrinkage of concrete", "0.0003 x 200000", "about 60", "14.3"],
                ["Relaxation, friction, slip", "next section", "-", "-"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "How the losses develop in a pre-tensioned member",
              caption: "Each stage of the member's life deducts its share from the jacked stress.",
              stages: [
                { label: "Jacking: steel holds sigma_pi between abutments" },
                { label: "Release: elastic shortening strikes", note: "loss = m · f_c, immediate" },
                { label: "First weeks: shrinkage builds", note: "E_s x 0.0003 roughly" },
                { label: "First months: creep adds phi times the elastic loss", note: "sustained stress does the work" },
                { label: "Years: creep tails off; effective prestress f_pe settles", note: "the value all design uses" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not double-count",
              body: "The creep loss is phi multiplied by the elastic loss already computed - students often add phi · m · f_c and then a second creep term from a different textbook form. Likewise check whether your shrinkage strain is total or remaining-after-transfer; pre-tensioned (0.0003) and post-tensioned (0.0002) values differ precisely because of transfer age.",
            },
            keyTerms: [
              { term: "Elastic shortening loss", definition: "Steel stress lost when concrete shortens elastically at transfer: m · f_c." },
              { term: "Creep coefficient phi", definition: "Ratio of eventual creep strain to immediate elastic strain under the same stress; about 1.5-2.0 for young concrete." },
              { term: "Shrinkage loss", definition: "Steel stress lost as concrete dries and contracts: E_s times the shrinkage strain." },
            ],
            examQuestions: [
              {
                q: "Explain the elastic shortening, creep and shrinkage losses of prestress. Derive the loss expressions and compute them for m = 6, f_c = 6.7 N/mm2, phi = 1.5 and shrinkage strain 0.0003.",
                marks: 7,
                outline: [
                  "Elastic shortening: concrete shortens at transfer; bonded steel follows; loss = m · f_c.",
                  "Distinguish pre-tensioned (full loss) from post-tensioned (sequential jacking, about half on average).",
                  "Creep: sustained stress adds phi times the elastic strain; loss = phi · m · f_c.",
                  "Shrinkage: drying contraction independent of stress; loss = E_s x shrinkage strain.",
                  "Substitute: 6 x 6.7 = 40; 1.5 x 40 = 60; 0.0003 x 200000 = 60 N/mm2.",
                  "Total so far 160 N/mm2 - about 14 percent of sigma_pi = 1120 N/mm2.",
                  "Note the immediate versus time-dependent classification and that relaxation is still to come.",
                ],
              },
              {
                q: "Why does simultaneous tensioning of all tendons eliminate the elastic shortening loss in post-tensioned members?",
                marks: 3,
              },
              {
                q: "A post-tensioned beam retains shrinkage strain 0.0002. Compute the shrinkage loss.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Losses II: friction, anchorage slip, relaxation and the total",
            body: [
              "Friction hunts only post-tensioned members, because only they jack steel through curved ducts. As the tendon slides during tensioning it loses force along two paths: curvature friction, proportional to the total angle alpha the tendon turns through, and wobble friction, the unintended zig-zag of an imperfectly straight duct, proportional to distance x. The combined law is P_x = P_0 · e^-(mu·alpha + k·x), with mu typically 0.15 to 0.30 depending on duct type and lubrication and k of the order of 0.0015 to 0.003 per metre. The consequence is visible in every long bridge: force at the far end is measurably less than at the jack. The standard remedies are jacking from both ends, over-extension at the jack, or reprofiling the duct with flatter curvature.",
              "Anchorage slip is the wedge seating home. When a wedge or plug anchor grips, a small length delta of steel - commonly 1 to 6 mm depending on the anchor type - pulls back into the member, shedding stress E_s · delta / L. The formula is trivial; the lesson is geometry: the same 5 mm of slip costs a 30 m bridge tendon about 33 N/mm2 but a 3 m transfer beam over 300 N/mm2, enough to dominate the design. Friction helpfully confines the slip to a region near the anchorage in long members, so the loss decays along the length. Relaxation, the third mechanism, is a pure steel property: at constant strain the stress fades - 5 to 8 percent of the initial stress for standard stress-relieved wire at 1000 hours, and 1 to 2 percent for low-relaxation strand.",
              "The total is what the design actually uses. Summing the running pre-tensioned ledger: elastic 40, creep 60, shrinkage 60 and relaxation near 56 N/mm2 gives about 216 N/mm2, some 19 percent of 1120 - squarely inside the customary band of 15 to 25 percent, with pre-tensioned members at the top of the band because every mechanism acts on them and post-tensioned members near the bottom. IS 1343 asks for computed losses, not blanket assumptions, but the band is a sanity check every answer should close with. The python ledger below lets you change phi, shrinkage strain, slip and relaxation and watch the effective prestress move.",
            ],
            bullets: [
              "Friction law: P_x = P_0 · e^-(mu·alpha + k·x); curvature term mu·alpha plus wobble term k·x.",
              "Typical values: mu about 0.15-0.30 by duct type; k of order 0.0015-0.003 per metre of tendon.",
              "Anchorage slip loss = E_s · delta / L; delta of 1-6 mm hammers short members hardest.",
              "Remedies for friction: jack from both ends, over-extend, or flatten the duct profile.",
              "Relaxation: 5-8 percent for standard wire, 1-2 percent for low-relaxation strand, quoted at 1000 hours.",
              "Sanity band: total losses of 15-25 percent; pre-tensioned high, post-tensioned lower - close every answer with the check.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Total loss ledger for a pre-tensioned beam; edit the inputs to explore post-tensioned variants by adding friction and slip.",
              code: `# Total loss of prestress - pre-tensioned rectangular beam
Es = 200_000.0      # N/mm2, steel modulus
m = 6.0             # modular ratio Es/Ec
fc = 6.7            # N/mm2, concrete stress at steel level at transfer
phi = 1.5           # creep coefficient
eps_sh = 0.0003     # shrinkage strain (pre-tensioned)
relax_pct = 5.0     # relaxation, percent of initial steel stress
sigma_pi = 1120.0   # N/mm2, initial steel stress

elastic = m * fc                        # elastic shortening
creep = phi * m * fc                    # creep of concrete
shrink = eps_sh * Es                    # shrinkage of concrete
relax = relax_pct / 100.0 * sigma_pi    # steel relaxation

total = elastic + creep + shrink + relax
print(f"elastic {elastic:.0f}, creep {creep:.0f}, "
      f"shrink {shrink:.0f}, relaxation {relax:.0f}")
print(f"total loss {total:.0f} N/mm2 "
      f"= {100*total/sigma_pi:.1f} percent of {sigma_pi:.0f}")
print(f"effective steel stress {sigma_pi - total:.0f} N/mm2")

# For a post-tensioned tendon, add:
#   friction:  Px = P0 * math.exp(-(mu*alpha + k*x))
#   slip:      Es * delta / L  (try delta = 5 mm on L = 3 m!)`,
            },
            diagram: {
              kind: "fork",
              title: "Accepting the computed total loss",
              caption: "Where the total lands decides your next move in the design.",
              start: "Total computed loss as a share of initial prestress",
              branches: [
                {
                  label: "Under about 15 percent",
                  outcome: "Effective prestress comfortably above demand - accept the section and move on to detailing",
                  good: true,
                },
                {
                  label: "15 to 25 percent",
                  outcome: "Normal territory: recover f_pe by jacking toward the 0.8 f_u limit or by adding tendon area",
                  good: true,
                },
                {
                  label: "Above about 30 percent",
                  outcome: "Stop and recheck: duct friction on long spans, slip on short members, creep coefficients - reprofile or jack from both ends",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The seven-mark loss question",
              body: "RGPV's favourite Unit I numerical gives you P_0, L, alpha, mu, k, delta and asks for the force at the far end after all losses. Write the friction law, the slip formula, then combine. Quote the total-loss band (15-25 percent) at the end - the examiner's own textbook closes with it.",
            },
            keyTerms: [
              { term: "Wobble coefficient k", definition: "Friction per unit length caused by unintended duct deviation, of order 0.0015-0.003 per metre." },
              { term: "Anchorage slip", definition: "The small seating movement of a wedge or plug anchor, causing loss E_s · delta / L." },
              { term: "Effective prestress f_pe", definition: "The force remaining after all losses - the value every service-stage design uses." },
            ],
            examQuestions: [
              {
                q: "Explain the friction, anchorage slip and relaxation losses in post-tensioned members. Derive P_x = P_0 · e^-(mu·alpha + k·x) and state the field measures that reduce friction loss.",
                marks: 7,
                outline: [
                  "Friction acts only in post-tensioning: the tendon slides against the duct while being jacked.",
                  "Curvature component: force loss proportional to the angle turned, coefficient mu (0.15-0.30).",
                  "Wobble component: unintentional duct deviation, k of order 0.0015-0.003 per metre.",
                  "Combine to the exponential law P_x = P_0 · e^-(mu·alpha + k·x) from the differential force balance.",
                  "Anchorage slip: seating delta of 1-6 mm gives loss E_s · delta / L - severe on short members.",
                  "Relaxation: 5-8 percent for standard wire at 1000 h, 1-2 percent for low-relaxation strand.",
                  "Remedies: jack from both ends, over-extend, reprofile ducts; close with the 15-25 percent total-loss band.",
                ],
              },
              {
                q: "Why does an anchorage slip of 5 mm matter far more on a 3 m beam than on a 30 m bridge girder?",
                marks: 3,
              },
              {
                q: "Compute the far-end force for P_0 = 1200 kN, mu·alpha + k·x = 0.10.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Prestressing Systems",
      summary:
        "The machinery that creates the force: long-line pre-tensioning and its bond mechanics, post-tensioning with ducts, jacks and grout, the classic anchorage systems of Freyssinet, Magnel-Blaton and Lee-McCall, and the hardware and selection logic that match a system to a project.",
      chapter: {
        number: "02",
        title: "Prestressing Systems",
        intro:
          "Unit II is the workshop tour: how tendons are stretched before casting or after, how wedges, plates and nuts hold forces of a thousand kilonewtons, why Freyssinet's conical anchor and Magnel's sandwich plates and Lee-McCall's threaded bars each found their niche, and how an engineer chooses among them.",
        inOneBreath:
          "Pre-tensioning stretches steel between abutments, casts concrete around it, cures fast and releases - bond and the Hoyer wedge effect carry the force over a transmission length of roughly 80-100 wire diameters, with no anchorages at all. Post-tensioning casts concrete first with ducts inside, then jacks the tendon against the member itself and seats an anchor: curved profiles, staged tensioning and site casting become possible, at the price of anchorages, friction and grouting. Freyssinet grips a circle of 12 wires in a conical plug seated by a double-acting jack; Magnel-Blaton tensions 5 mm wires in pairs against sandwich plates with driven wedges; Lee-McCall pulls threaded bars against nuts - almost zero slip, restressable, simple. Selection follows production volume, member size, profile needs and hardware cost.",
        sections: [
          {
            number: "2.1",
            title: "Pre-tensioning",
            body: [
              "Pre-tensioning is the factory recipe. Tendons - usually wires or small strands - are stretched between heavy abutments at the two ends of a long casting bed, which may run 100 to 200 m. The extension is measured and locked, concrete is placed into steel moulds placed along the bed between bulkheads, and curing is accelerated, commonly by steam or by matching curing, so that the concrete reaches its transfer strength - often 70 to 80 percent of the 28-day cube strength - within a day or two. Then the tendons are released, usually slowly and symmetrically, and the force transfers from the abutments into the concrete through bond along the member. Nothing is jacked against the member itself, and there is no anchorage hardware to buy, maintain or protect.",
              "The mechanics of the transfer deserve their fame. A stretched wire under high tension slightly thins; when released, it tries to recover its original diameter inside the hardened concrete and wedges itself tight - the Hoyer effect, which multiplies the ordinary bond grip. Even so, the force does not appear instantly at the cut: it builds up over a transmission length of roughly 80 to 100 wire diameters - about half a metre for typical 5 to 7 mm wire. Within that end zone the prestress is partial, which is why end-zone checks, debonded (sleeved) lengths and careful release order all exist. Deep members can also harp the tendons over hold-down saddles between the abutments to gain some eccentricity profile, though true curved draping belongs to post-tensioning.",
              "Economically, pre-tensioning is repetition. Sleepers, poles, planks, joists, piles, hollow-core slabs and standard bridge girders pour out of long-line beds at low unit cost, with excellent durability because there are no ducts, no grout and no anchorages in the finished product. The limits are equally structural: the bed length bounds the member, transport bounds the weight, profiles stay near-straight, and the full elastic-shortening loss acts at release since every tendon is bonded at once. Every one of those limits is exactly the reason the next section's method exists.",
            ],
            bullets: [
              "Sequence: tension between abutments, cast, cure to 70-80 percent of cube strength, release slowly.",
              "Bearing abutments take the full jacking reaction - the bed is the factory's most expensive asset.",
              "Hoyer effect: released wire re-expands and wedges into the concrete, multiplying bond grip.",
              "Transmission length: roughly 80-100 wire diameters for the force to build to full value.",
              "No anchorages, no ducts, no grout: the most durable and cheapest hardware per unit in mass production.",
              "Limits: bed length, transport weight, near-straight profiles and full elastic-shortening loss at release.",
            ],
            table: {
              caption: "Pre-tensioning facts at a glance.",
              headers: ["Item", "Typical value", "Comment"],
              rows: [
                ["Bed length", "100-200 m", "long-line casting serves many moulds at once"],
                ["Transfer strength", "70-80 percent of 28-day cube", "steam curing reaches it in 24-48 h"],
                ["Transmission length", "80-100 wire diameters", "about 0.5 m for 5-7 mm wire"],
                ["Tendon forms", "wires, small strands", "bond-driven; bars rarely pre-tensioned"],
                ["Signature products", "sleepers, poles, hollow-core, girders", "anything repetitive and transportable"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The pre-tensioning cycle on a long-line bed",
              caption: "From bare tendons to a finished member in five moves.",
              steps: [
                { label: "Stretch tendons between abutments; measure extension" },
                { label: "Place moulds and cast concrete around the steel" },
                { label: "Steam cure to transfer strength", note: "24-48 h on a modern bed" },
                { label: "Release tendons slowly and symmetrically", note: "force enters by bond" },
                { label: "Cut between moulds; stock the finished units", note: "bed is free for the next line" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch earns half the marks",
              body: "The classic question 'describe the pre-tensioning process with a neat sketch' expects: abutments, tendons, moulds, curing and the release stage, all labeled - plus one sentence each on the Hoyer effect and transmission length. Practise the sketch until it takes under three minutes.",
            },
            keyTerms: [
              { term: "Pre-tensioning", definition: "Prestressing by tensioning tendons before concreting; force transfers later through bond." },
              { term: "Hoyer effect", definition: "The radial re-expansion of released wire that wedges it into the surrounding concrete." },
              { term: "Transmission length", definition: "The end-zone distance, about 80-100 wire diameters, over which prestress builds up to full value." },
            ],
            examQuestions: [
              {
                q: "Describe the pre-tensioning process with a neat sketch. Explain the Hoyer effect and the transmission length, and state the design consequences of the latter.",
                marks: 7,
                outline: [
                  "Sketch: abutments, tendons, moulds, bulkheads, with the tensioning and release stages.",
                  "Step through: tension, cast, accelerated cure to 70-80 percent cube strength.",
                  "Release slowly and symmetrically; force transfers through bond.",
                  "Hoyer effect: wire thins under tension, re-expands on release and wedges into the concrete.",
                  "Transmission length: about 80-100 wire diameters for full force development.",
                  "Consequences: reduced prestress near ends, end-zone checks, debonding where needed.",
                  "Add economics: no anchorages, ideal for repetitive precast products.",
                ],
              },
              {
                q: "Why do pre-tensioned members suffer no friction and no anchorage-slip losses?",
                marks: 3,
              },
              {
                q: "Name four products routinely made by pre-tensioning and the common feature that makes them suitable.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Post-tensioning",
            body: [
              "Post-tensioning is the site recipe, and its first move is to cast the concrete with hollow ducts inside it - flexible metal or plastic sheaths fixed to the reinforcement cage exactly along the intended profile. The tendons are either threaded into the ducts after the concrete hardens or laid inside before casting. Once the concrete reaches transfer strength, each tendon is jacked against the concrete itself: the member is its own tensioning bed, reacting the force through a bearing plate seated on its end. A wedge or nut anchor holds the force, the duct is filled - grouted with cement paste in bonded systems, or left greased and sheathed in unbonded monostrand systems - and the member is complete.",
              "The decisive advantage is profile freedom: ducts can be curved, so tendons follow the bending-moment diagram - parabolic between the supports of a floor, high over the piers of a continuous bridge, harped wherever the moment demands it. Everything else follows from that: sequential tensioning reduces the elastic-shortening loss to about half the full value, tendons can be stressed in stages as construction proceeds, members of any size can be cast in place free of transport limits, and the technique is the only option when continuity, transfer girders or curved alignment are involved. The jacking reaction compresses the very member being built, which is elegant and also why end blocks - Unit IV - exist.",
              "The costs are anchorage hardware, friction along the ducts and grouting quality. Anchorages concentrate thousand-kilonewton forces onto bearing plates and demand the bursting-zone design of Section 4.3. Friction along curved ducts eats force along the length, as Section 1.5 quantified. Grouting is the quiet Achilles heel: a duct with voids or bleeding grout leaves tendons exposed to moisture, and corroded tendons have collapsed bridges worldwide, which is why modern specifications demand bleed-tested grouts, vents at high points and inspection ports. Bonded and unbonded systems split the family: bonded grouted tendons develop full strain compatibility and crack distribution; unbonded monostrands, greased inside plastic sheaths, allow lower-profile slabs and simplified stressing but need more careful corrosion detailing.",
            ],
            bullets: [
              "Sequence: fix ducts, cast, cure, thread tendons, jack against the member, seat anchors, grout.",
              "Curved profiles follow the moment diagram - the decisive advantage over pre-tensioning.",
              "Sequential tensioning cuts the average elastic-shortening loss to about half of the full value.",
              "The member reacts the jacking force itself - hence bearing plates and end-block design.",
              "Bonded systems: grouted ducts, strain compatibility; unbonded: greased monostrand, flatter slabs.",
              "Grout quality is a durability question of the first order - voids mean corrosion and failure.",
            ],
            table: {
              caption: "Bonded versus unbonded post-tensioning.",
              headers: ["Aspect", "Bonded (grouted)", "Unbonded (greased monostrand)"],
              rows: [
                ["Corrosion protection", "alkaline grout encasing steel", "grease plus plastic sheath"],
                ["Ultimate behaviour", "strain compatibility; higher f_pb", "uniform tendon strain; lower f_pb"],
                ["Crack distribution", "several fine cracks", "fewer, wider local cracks"],
                ["Typical use", "bridges, girders, tanks", "flat slabs, transfer plates"],
                ["Stressing hardware", "multi-strand anchors", "light monostrand jacks, flat ducts"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Post-tensioning stage by stage",
              caption: "Five stages from cage to grouted tendon.",
              stages: [
                { label: "Fix ducts to the cage along the design profile" },
                { label: "Cast concrete and cure to transfer strength" },
                { label: "Thread tendons; jack against the member", note: "measure force and elongation together" },
                { label: "Seat the anchors; verify elongation agreement", note: "within about 5 percent" },
                { label: "Grout the ducts; cap and protect anchorages", note: "the durability-critical finish" },
              ],
            },
            callout: {
              type: "warning",
              title: "Grouting is not a formality",
              body: "When RGPV asks 'limitations of post-tensioning', lead with grouting: voids and bleed water leave tendons unprotected, and tendon corrosion has caused real bridge failures. Mention vent points at duct highs, bleed-tested expansive grouts and post-grouting inspection - it shows engineering judgement, not just book recall.",
            },
            keyTerms: [
              { term: "Post-tensioning", definition: "Prestressing by jacking tendons against hardened concrete through ducts, then anchoring and grouting." },
              { term: "Duct", definition: "The metal or plastic sheath forming the tendon passage and defining its profile." },
              { term: "Unbonded tendon", definition: "A greased, sheathed monostrand left ungrouted; force transfers only at the anchorages." },
            ],
            examQuestions: [
              {
                q: "Describe the post-tensioning process with sketches. Compare it with pre-tensioning, and distinguish bonded from unbonded systems.",
                marks: 7,
                outline: [
                  "Sequence: ducts fixed to cage, cast, cure, thread, jack against member, anchor, grout.",
                  "Sketch: duct profile, bearing plate, anchor, trumpet, grout vents.",
                  "Advantages: curved profiles following the moment diagram, staged tensioning, in-situ casting, continuity.",
                  "Sequential tensioning halves the average elastic-shortening loss.",
                  "Costs: anchorages, friction loss, grouting quality, end-block design.",
                  "Bonded: grout bond, strain compatibility, distributed cracking; unbonded: greased monostrand, flatter profiles, lower f_pb.",
                  "Close with selection logic: factory repetition favours pre-tensioning; site and span work favour post-tensioning.",
                ],
              },
              {
                q: "Why can post-tensioned tendons be draped in curved profiles while pre-tensioned tendons are essentially straight?",
                marks: 3,
              },
              {
                q: "State one durability advantage and one ultimate-strength drawback of unbonded tendons.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "The Freyssinet system",
            body: [
              "Eugene Freyssinet did not merely invent prestressing - he commercialised it, and the system that carries his name was the vehicle. Patented in 1939, it rests on one elegant idea: a conical anchor. A cable of high-tensile wires - the classic units carry twelve 5 mm wires (the 12/5) or twelve 8 mm wires (the 12/8) - is arranged in a circle around a central grout passage. The wires pass through matching grooves in a conical hole in the anchor casting, and a conical plug with matching grooves is driven between them: the harder the pull, the tighter the wedge grips every wire at once. Jacking forces are of the order of 300 kN for a 12/5 and 700 kN for a 12/8 cable.",
              "The jack is half the genius. A double-acting hydraulic jack first tensions the whole cable at once - gripping the wires with its own temporary wedges while the ram extends - and then, in its second stroke, pushes the conical plug home so the anchor seats under a controlled force rather than by hammering. The procedure gives clean, measurable seating and a small, known slip. Guide rings keep the wires correctly spaced along the duct; after anchoring, cement grout is pumped through the central hole and vents until it returns clean at the far end, bonding the cable and sealing it against corrosion. The anchor casting spreads the concentrated force into the end block through a bearing plate, trumpet and helical reinforcement - the hardware of Section 4.3.",
              "Freyssinet anchors became the default for bridges and heavy girders across Europe and India because one anchor handles many wires at once, the wedge action is self-tightening, and the system scales: from the classic wire cables to modern multi-strand units carrying seven to nineteen 15.2 mm strands at jacking forces from about 1500 kN to beyond 4000 kN. For the exam, the system is the anchor: learn the sketch of plug, grooves, casting, grout hole and jack sequence until you can draw it cold, because 'explain the Freyssinet system with a neat sketch' is one of the most repeated questions in this paper.",
            ],
            bullets: [
              "Conical anchor: twelve wires in a circle, gripped in one action by a grooved conical plug.",
              "Classic cables: 12/5 (about 300 kN) and 12/8 (about 700 kN) with a central grout passage.",
              "Double-acting jack: first stroke tensions the cable, second stroke seats the plug under control.",
              "Self-tightening wedge action: harder pulls grip harder - a self-safe mechanism.",
              "Grout through the central hole bonds and protects the cable after anchoring.",
              "Modern multi-strand units: 7 to 19 strands of 15.2 mm, from about 1500 to beyond 4000 kN.",
            ],
            table: {
              caption: "Classic Freyssinet cable capacities (approximate jacking forces).",
              headers: ["Cable", "Wires", "Wire dia (mm)", "Approx. jacking force"],
              rows: [
                ["F 12/5", "12", "5", "about 300 kN"],
                ["F 12/8", "12", "8", "about 700 kN"],
                ["Multi-strand K", "7-19 strands", "15.2 mm strand", "about 1500-4000 kN"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a Freyssinet anchorage",
              caption: "The hardware stack, from the protective cap down to the duct.",
              layers: [
                { label: "Grout cap", note: "seals and protects the anchor head after grouting" },
                { label: "Conical plug with wire grooves", note: "grips all twelve wires in one action" },
                { label: "Anchor casting with conical hole", note: "spreads the force to the bearing plate" },
                { label: "Bearing plate, trumpet and helix", note: "carries the force into the end block" },
                { label: "Duct with the 12-wire cable", note: "profiled along the member" },
              ],
            },
            callout: {
              type: "exam",
              title: "The most repeated sketch",
              body: "'Explain the Freyssinet system with a neat sketch of the anchorage' has appeared in countless RGPV papers. Practise: wires in a circle, grooved conical plug, anchor casting, grout hole, double-acting jack with its two strokes. Five labeled parts, two sentences on the jack sequence - full marks.",
            },
            keyTerms: [
              { term: "Anchor cone", definition: "The grooved conical plug that grips all wires of a Freyssinet cable simultaneously by wedge action." },
              { term: "Double-acting jack", definition: "A hydraulic jack that tensions the cable with one stroke and seats the anchor plug with a second." },
              { term: "Central grout passage", definition: "The hole through the Freyssinet plug and casting through which cement grout bonds the cable after anchoring." },
            ],
            examQuestions: [
              {
                q: "Explain the Freyssinet system of post-tensioning with a neat sketch of the anchorage. How does the double-acting jack seat the anchor plug?",
                marks: 7,
                outline: [
                  "Historic setting: Freyssinet, patented 1939, first commercial post-tensioning.",
                  "Cable: twelve 5 mm or 8 mm wires arranged around a central grout passage.",
                  "Anchorage sketch: anchor casting with conical hole, grooved conical plug, bearing plate, trumpet, helix.",
                  "Gripping: plug driven between wires - wedge friction grips all wires at once, self-tightening.",
                  "Jack: first stroke tensions the whole cable against the member; second stroke pushes the plug home.",
                  "Grouting: cement grout through the central hole; vents until clean return.",
                  "Capacities: about 300 kN (12/5), 700 kN (12/8); modern strand units to 4000 kN.",
                ],
              },
              {
                q: "Why is the wedge action of the Freyssinet anchor called self-tightening?",
                marks: 2,
              },
              {
                q: "State the function of the central grout passage in a Freyssinet anchorage.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Magnel-Blaton and Lee-McCall systems",
            body: [
              "The Belgian engineer Gustave Magnel and his partner Blaton built the system that carried prestressing across the Atlantic: the Walnut Lane Memorial Bridge in Philadelphia, completed in 1950 with spans of about 48 m, was the first major prestressed concrete bridge in the United States and made Magnel's anchorage world famous. The system uses 5 mm wires tensioned strictly in pairs. The anchorage is a stack of sandwich plates: each steel plate carries two grooves, a pair of wires passes over it, and small hardened wedges driven between plate and wires lock them. Cables grow in multiples of two - 8, 12, 16, up to 64 wires - which gives the designer fine control of total force. After tensioning, the wires are grouted and the anchorage is concreted over.",
              "The Lee-McCall system, British in origin, abandons wires for high-tensile steel bars of 12 to 40 mm, cold-rolled with threads at their ends. The bar is jacked against the hardened member and anchored by a simple nut bearing on a distribution plate - no wedges, no plugs, nothing to seat by impact. The consequences are attractive: the anchorage slip is almost nil because the nut beds home rigidly; bars can be re-tensioned or extended using couplers; and the hardware is simple enough for site crews. Macalloy is the trade name under which these bars still serve as ties, stays, ground anchors and prestressing tendons for short and medium spans.",
              "Compared with Freyssinet, the philosophies are clear. Freyssinet and Magnel gather many small wires into large-capacity cables gripped by wedge systems - economical for big bridge forces, at the cost of wedge hardware and seating slip (small in Freyssinet's plug, larger in Magnel's pair-wise plates). Lee-McCall trades cable capacity for mechanical simplicity: fewer, thicker bars, nut anchorages, near-zero slip, restressability, couplers. A complete answer names one more family in passing - button-head (BBRV) bars and Gifford-Udall wedges - then closes with the selection logic that the next section formalises: match the system to the force, the profile, the repetition count and the hardware budget.",
            ],
            bullets: [
              "Magnel-Blaton: 5 mm wires tensioned in pairs; sandwich plates with driven hardened wedges.",
              "Cables in multiples of two - 8 to 64 wires - fine force control for the designer.",
              "Famous proof: Walnut Lane Bridge, Philadelphia, 1950, spans about 48 m.",
              "Lee-McCall: threaded HT bars 12-40 mm anchored by nuts on distribution plates.",
              "Nut anchorage means near-zero slip, easy re-tensioning and couplers (Macalloy bars).",
              "Selection in one line: many small wires for big bridge forces; bars for simplicity, low slip and restressing.",
            ],
            table: {
              caption: "Three anchorage philosophies compared.",
              headers: ["Feature", "Freyssinet", "Magnel-Blaton", "Lee-McCall"],
              rows: [
                ["Tendon unit", "wires, circle of 12", "5 mm wires", "HT bars 12-40 mm"],
                ["Anchorage", "conical plug in casting", "sandwich plates + wedges", "nut on bearing plate"],
                ["Tensioning", "whole cable at once", "pairs of wires", "whole bar at once"],
                ["Seating slip", "small, controlled", "moderate per pair", "almost zero"],
                ["Re-tensioning / coupling", "limited", "limited", "easy with couplers"],
                ["Signature use", "bridges, heavy girders", "Walnut Lane 1950", "ties, anchors, short spans"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Wires in plates versus bars with nuts",
              caption: "Two ways to hold a thousand kilonewtons.",
              left: {
                heading: "Magnel-Blaton",
                items: [
                  "5 mm wires, tensioned strictly in pairs",
                  "Sandwich plates with driven hardened wedges",
                  "Cables of 8 to 64 wires",
                  "Moderate slip per pair; grouted after",
                  "Proved at Walnut Lane Bridge, 1950",
                ],
              },
              right: {
                heading: "Lee-McCall",
                items: [
                  "Threaded HT bars of 12 to 40 mm",
                  "Nut bearing on a distribution plate",
                  "Whole bar tensioned at once",
                  "Almost zero slip - nut beds home",
                  "Restressable; couplers; Macalloy ties",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Learn one wedge, one nut",
              body: "RGPV's 'explain any two post-tensioning systems with sketches' is best answered with Freyssinet (wedge family) plus Lee-McCall (bar family) - the two philosophies in their purest form. Keep Magnel-Blaton ready as the substitute if Freyssinet was asked last year; the sandwich-plate sketch is the differentiator.",
            },
            keyTerms: [
              { term: "Sandwich plate", definition: "The grooved steel plate of the Magnel-Blaton anchorage over which wire pairs pass and are locked by driven wedges." },
              { term: "Macalloy bar", definition: "The trade name for the high-tensile threaded bar of the Lee-McCall system." },
              { term: "Coupler", definition: "A threaded device joining two bar tendons end to end to continue or extend a tendon." },
            ],
            examQuestions: [
              {
                q: "Describe the Magnel-Blaton and Lee-McCall systems with sketches, highlighting their anchorage details, and compare both with the Freyssinet system.",
                marks: 7,
                outline: [
                  "Magnel-Blaton: 5 mm wires, pairs tensioned, sandwich plates, driven wedges; sketch the plate stack.",
                  "Cable sizes in multiples of two up to 64 wires; grout after tensioning.",
                  "Historic proof: Walnut Lane Memorial Bridge, 1950, about 48 m spans.",
                  "Lee-McCall: threaded HT bars 12-40 mm; nut on distribution plate; sketch.",
                  "Consequences: near-zero seating slip, re-tensioning, couplers (Macalloy).",
                  "Comparison with Freyssinet: many-wire wedge cables versus simple bars; capacity, slip, hardware, use.",
                  "Close with selection logic: big bridge forces versus simplicity and restressability.",
                ],
              },
              {
                q: "Why does the Lee-McCall system show almost no anchorage-slip loss?",
                marks: 2,
              },
              {
                q: "In the Magnel-Blaton system, why are the wires tensioned in pairs rather than all at once?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Anchorages, hardware and system selection",
            body: [
              "Every post-tensioning job stands on the same hardware kit. At each end: a bearing plate that spreads the anchor force onto the concrete, a distribution plate between jack and bearing plate, a trumpet connecting duct to anchor, and a spiral or helix of reinforcement confining the bursting zone. Along the member: ducts - rigid, semi-rigid or flat plastic - with grout vents at the high points and grout ports at the anchors. Live-end anchors grip during tensioning; dead-end anchors (looped, H-type or swaged) are pre-embedded and never jacked. Couplers join tendons where staged construction demands. Jacks are double-acting hydraulic rams with calibrated pumps; every pull is verified twice, once by pressure and once by elongation, and the two must agree within about five percent before the anchor is seated.",
              "Selection follows four questions. How many identical units? Thousands - sleepers, poles, planks - send you to a pre-tensioning long line, where amortised beds beat any anchorage bill. How big is the member? Anything beyond transport limits, or cast in place over its final position, must be post-tensioned. What profile does the moment diagram demand? Curved, draped or continuous-member tendons require ducts and post-tensioning. What are the corrosion and access strategies? Grouted bonded ducts for bridges, greased monostrand in flat ducts for slabs, threadable bars when re-tensioning or load monitoring is planned. The anchorage hardware is often the largest single cost in a post-tensioned member, so force economy - fewer, larger anchors - pulls against the profile freedom of more, smaller tendons.",
              "Tensioning is the highest-energy operation on a prestressed site and is treated accordingly: exclusion zones behind jacks, calibrated equipment with current certificates, marked and logged elongations, and sequenced stressing notes approved by the designer. IS 1343 governs the materials, testing and workmanship; grouting gets its own procedures - expansive, bleed-controlled mixes pumped from the low port until clean grout returns at every vent. For the exam, the checklist answer is the winner: list the hardware, name its function in one line each, then walk the four selection questions with one example each.",
            ],
            bullets: [
              "End hardware: bearing plate, distribution plate, trumpet, confining helix - one function each.",
              "Ducts with vents at high points and grout ports at anchors; flat ducts for slabs.",
              "Dead-end anchors are pre-embedded; live ends take the jack; couplers extend staged tendons.",
              "Dual verification of every pull: pressure gauge and elongation must agree within about 5 percent.",
              "Selection questions: unit count, member size, profile needs, corrosion and access strategy.",
              "Anchorage hardware often dominates post-tensioned cost - fewer large anchors versus profile freedom.",
            ],
            table: {
              caption: "Post-tensioning hardware checklist.",
              headers: ["Item", "Purpose"],
              rows: [
                ["Bearing plate", "spreads anchor force onto the end block"],
                ["Trumpet and helix", "transfers duct to anchor; confines the bursting zone"],
                ["Grout vent", "releases air and confirms clean grout at duct high points"],
                ["Coupler", "joins tendons for staged or lengthened construction"],
                ["Calibrated jack and pump", "delivers and measures the jacking force"],
                ["Dead-end anchor", "pre-embedded grip needing no jack access"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the production route",
              caption: "Four honest answers to 'how should this member be prestressed?'",
              start: "New prestressed member to design",
              branches: [
                {
                  label: "Small, repetitive, transportable",
                  outcome: "Long-line PRE-TENSIONING on factory beds - cheapest per unit; bond does the anchoring",
                  good: true,
                },
                {
                  label: "Long-span, site-cast, curved profile",
                  outcome: "POST-TENSIONING with Freyssinet-type multi-strand anchors and grouted ducts",
                  good: true,
                },
                {
                  label: "Thin slabs, congested reinforcement",
                  outcome: "Flat-duct monostrand post-tensioning, often unbonded, stressed strand by strand",
                  good: true,
                },
                {
                  label: "Restressable ties, staged works",
                  outcome: "Threaded-bar (Lee-McCall/Macalloy) anchors with couplers and nut re-tensioning",
                  good: true,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Respect the stored energy",
              body: "A tensioned tendon stores enough energy to fail dangerously: exclusion zones behind jacks, no standing over anchorages, calibrated gear, logged elongations. If the question is 'safety measures during tensioning', these four plus the pressure-elongation cross-check are the expected answer.",
            },
            keyTerms: [
              { term: "Bearing plate", definition: "The steel plate that spreads a concentrated anchorage force onto the concrete end block." },
              { term: "Dead-end anchorage", definition: "A pre-embedded grip at the far end of a tendon that requires no jacking access." },
              { term: "Grout vent", definition: "A small pipe at a duct high point allowing air escape and confirmation of clean grout flow." },
            ],
            examQuestions: [
              {
                q: "List the essential components of a post-tensioning system with their functions, and explain the criteria for selecting between pre-tensioning and post-tensioning for a project.",
                marks: 7,
                outline: [
                  "Hardware list: bearing plate, distribution plate, trumpet, helix, ducts, vents, anchors, couplers, jacks.",
                  "One function sentence per item; note vents at high points for grout control.",
                  "Selection criterion 1: production count - mass production favours long-line pre-tensioning.",
                  "Selection criterion 2: member size and transport limits - site casting forces post-tensioning.",
                  "Selection criterion 3: profile needs - curved or draped tendons require ducts.",
                  "Selection criterion 4: corrosion strategy, access, re-tensioning - bars for monitoring, monostrand for slabs.",
                  "Add QA: pressure-elongation agreement within about 5 percent; grouting procedure.",
                ],
              },
              {
                q: "What is a dead-end anchorage and why is it used?",
                marks: 2,
              },
              {
                q: "Why must the jack pressure and the measured elongation agree during tensioning?",
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
      title: "Analysis of Prestressed Members",
      summary:
        "Three complementary ways to see the same member: the stress concept superposing P/A, P·e/Z and M/Z; T.Y. Lin's load balancing that turns tendons into equivalent upward loads; and the geometric view through the kern and the pressure line - with a complete worked stress check on the running example.",
      chapter: {
        number: "03",
        title: "Analysis of Prestressed Members",
        intro:
          "Unit III is where numbers start to flow. The stress concept gives the four service-stage checks every section must pass; load balancing explains why parabolic tendons are the natural choice for gravity loads; the kern and the pressure line turn all of it into a geometric picture of where the compressive resultant is allowed to live as the load changes.",
        inOneBreath:
          "The stress concept superposes three effects on each extreme fiber - P/A, P·e/Z and M/Z - and checks transfer and service stages against permissible stresses of roughly half the transfer strength and one-third the characteristic strength. Load balancing replaces a parabolic tendon of sag e by an upward load w = 8Pe/L^2; balance the sustained load and only axial compression plus the unbalanced load remains. The kern is the zone within which the resultant compressive force may act without creating tension - Z/A on either side of the centroid, d/6 for a rectangle, the middle third. The pressure line is the locus of that resultant: it sits on the cable at transfer, rises by M/P as loads grow, and must stay between the kern points at every stage; in continuous beams, concordant cables are the profiles whose pressure line coincides with the cable itself.",
        sections: [
          {
            number: "3.1",
            title: "Analysis by the stress concept",
            body: [
              "The stress concept is the workhorse of prestressed analysis: superpose the effects and check them against limits. Take compression as positive. At any section, the axial prestress contributes P/A to every fiber; the eccentricity of the tendon contributes a bending term - tension P·e/Z_t at the top fiber, compression P·e/Z_b at the bottom when the tendon lies below the centroid; the external moment contributes compression M/Z_t at the top and tension M/Z_b at the bottom. The two extreme-fiber stresses are therefore f_top = P/A - P·e/Z_t + M/Z_t and f_bot = P/A + P·e/Z_b - M/Z_b. Every stage of the member's life is analysed by choosing the right P and the right M: at transfer, P_0 with only self-weight M1; at service, effective P_e with the full M2.",
              "The limits come from IS 1343. At transfer, when the concrete is young and the stress is applied suddenly, the permissible compressive stress is about half the transfer-time strength - the classic teaching value 0.5 f_ci - and tension is usually kept at or near zero because young concrete and cracks are a bad pairing. At service, the permissible compression is about one-third of the characteristic cube strength, 0.33 f_ck, and the permitted tension depends on the class of the member from Unit IV: zero for Class 1, a limited value below the flexural tensile strength for Class 2, and cracking with controlled widths for Class 3. Four checks result - two fibers at each of two stages - and they are the skeleton of nearly every Unit III numerical.",
              "Run the running example through the skeleton. A rectangular beam b = 300 mm, h = 600 mm has A = 180,000 mm2 and Z = 18 x 10^6 mm3 for both fibers. With P = 1200 kN and e = 150 mm: P/A = 6.67 and P·e/Z = 10.0 N/mm2. At transfer with self-weight M1 = 90 kN·m, M1/Z = 5.0: the top fiber reads 6.67 - 10.0 + 5.0 = 1.67 N/mm2 compression and the bottom 6.67 + 10.0 - 5.0 = 11.67 N/mm2 compression. At service with M2 = 260 kN·m, M2/Z = 14.44: the top reads 11.11 and the bottom 2.22 N/mm2, both still compressive. Every value sits below its limit (15 at transfer with f_ci = 30; 13.2 at service for M40) - a Class 1 member by arithmetic, not by luck.",
            ],
            bullets: [
              "Superposition: f_top = P/A - P·e/Z_t + M/Z_t and f_bot = P/A + P·e/Z_b - M/Z_b, compression positive.",
              "Transfer stage: P_0 with self-weight M1 only; service stage: effective P_e with the full M2.",
              "Limits per IS 1343: about 0.5 f_ci compression at transfer, about 0.33 f_ck at service.",
              "Tension limits follow the class: zero (Class 1), below rupture (Class 2), cracked with width limits (Class 3).",
              "Four checks - top and bottom fiber at each stage - are the skeleton of every Unit III numerical.",
              "Running example: 300 x 600, P = 1200 kN, e = 150: 1.67/11.67 at transfer, 11.11/2.22 at service, all compressive.",
            ],
            table: {
              caption:
                "Running example: the four checks (A = 180,000 mm2, Z = 18 x 10^6 mm3, P/A = 6.67, Pe/Z = 10.0, M1/Z = 5.0, M2/Z = 14.44 N/mm2).",
              headers: ["Stage and fiber", "Computed (N/mm2)", "Limit (N/mm2)", "Verdict"],
              rows: [
                ["Transfer, top", "6.67 - 10.0 + 5.0 = 1.67 C", "15 (0.5 x 30)", "safe"],
                ["Transfer, bottom", "6.67 + 10.0 - 5.0 = 11.67 C", "15 (0.5 x 30)", "safe"],
                ["Service, top", "6.67 - 10.0 + 14.44 = 11.11 C", "13.2 (0.33 x 40)", "safe"],
                ["Service, bottom", "6.67 + 10.0 - 14.44 = 2.22 C", "13.2 and no tension", "safe"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The stress sandwich: what each action adds",
              caption: "Compression positive; every extreme-fiber stress is the sum of these layers.",
              layers: [
                { label: "Axial prestress: +P/A on every fiber", note: "the uniform base" },
                { label: "Eccentric prestress: -P·e/Z_t top, +P·e/Z_b bottom", note: "bends the stress field" },
                { label: "Self-weight M1: +M1/Z_t top, -M1/Z_b bottom", note: "partly cancels the eccentric term" },
                { label: "Live load adds the rest up to M2", note: "checked at full service" },
                { label: "Limits: 0.5 f_ci at transfer, 0.33 f_ck at service", note: "the fence around the game" },
              ],
            },
            callout: {
              type: "exam",
              title: "Layout discipline",
              body: "Write the stage, the fiber, the formula with substitution, the result with its sign, then the verdict - four times over. Examiners award the layout as much as the arithmetic, and a stated sign convention at the top prevents the commonest error: a tension reported as a safe compression.",
            },
            keyTerms: [
              { term: "Stress concept", definition: "Analysis by superposing P/A, P·e/Z and M/Z on each extreme fiber and checking stage-wise limits." },
              { term: "Transfer stage", definition: "The instant prestress is applied, with young concrete, P_0 acting and self-weight the only load." },
              { term: "Service stage", definition: "Long-term condition with effective prestress P_e and the full design loads applied." },
            ],
            examQuestions: [
              {
                q: "Derive the extreme-fiber stress expressions for a prestressed beam section at transfer and at service, and outline the permissible stress checks per IS 1343.",
                marks: 7,
                outline: [
                  "Set the sign convention: compression positive, tension negative.",
                  "Axial term: uniform P/A over the section.",
                  "Eccentric term: moment P·e gives -P·e/Z_t at top, +P·e/Z_b at bottom (tendon below centroid).",
                  "External moment term: +M/Z_t at top, -M/Z_b at bottom for sagging.",
                  "Combine into f_top and f_bot; specify stage forces: P_0 with M1, P_e with M2.",
                  "Limits: about 0.5 f_ci at transfer, 0.33 f_ck at service; tension per class of member.",
                  "Illustrate with one set of numbers, e.g. the running example table.",
                ],
              },
              {
                q: "Why is the transfer-stage check performed with self-weight only, not the full service load?",
                marks: 3,
              },
              {
                q: "State the typical permissible compressive stresses at transfer and at service, with the strength parameters used.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Load balancing",
            body: [
              "T.Y. Lin's load balancing is the friendliest idea in the subject. Instead of tracking stresses, choose the tendon so that its transverse push exactly cancels a chosen load. A parabolic tendon between anchorages at the same level, sagging e at midspan, exerts a uniform upward load on the member equal to w_bal = 8·P·e/L^2 - the tendon pushes the concrete up with precisely the load a hanging cable of the same shape would pull down. The anchored ends deliver horizontal force P and small vertical reactions, but along the span the parabola is a mirror of a uniformly distributed load. Balance the sustained load - self-weight plus finishes, sometimes a slice of live - and the member under that load feels nothing but pure axial compression P/A: no bending, no deflection, no camber drift.",
              "Only the unbalanced part needs bending design. If w_bal equals the sustained load, then live loads and load variations are the only producers of moment, and they are computed with the familiar M = wL^2/8 on the ordinary section properties. Deflection follows the same clean split: the balanced load contributes nothing, the unbalanced load bends as a plain elastic member, and serviceability checks become almost trivial. The method also clarifies tendon shaping: harped tendons (two straight segments meeting at midspan) deliver a concentrated upward force 4Pe/L at the kink instead of a distributed load - the right choice under concentrated loads. In continuous beams, linear transformation of a balanced profile leaves the pressure line - Section 3.4 - unchanged, which is why load balancing became the standard tool for indeterminate floors.",
              "Run the numbers for the running example's cousin: L = 10 m, horizontal prestress P = 400 kN, midspan sag e = 0.25 m gives w_bal = 8 x 400 x 0.25 / 100 = 8.0 kN/m upward. If self-weight plus finishes total 6.5 kN/m, the designer might raise the sag or the force to balance the full 6.5 and leave only the 4.0 kN/m live load unbalanced - a residual moment of 4.0 x 100/8 = 50 kN·m at midspan. The python snippet below makes the exploration instant. Quote the formula, name T.Y. Lin, and finish with the unbalanced-load moment: that is the full-mark structure for this question.",
            ],
            bullets: [
              "Parabolic tendon of sag e over span L: upward equivalent load w_bal = 8·P·e/L^2.",
              "Balance the sustained load and the member carries pure axial compression P/A - no bending, no sag.",
              "Only the unbalanced load produces moment and deflection - compute it with plain elastic theory.",
              "Harped tendons deliver a point force 4·P·e/L at the kink - the tool for concentrated loads.",
              "The anchorages still deliver horizontal P; end-zone design is not avoided, only the span bending is.",
              "In continuous beams, linearly transformed profiles keep the same balanced effect - the basis of floor design.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Load balancing arithmetic for a simply supported post-tensioned beam; edit the sag to retune the balance.",
              code: `# Load balancing for a simply supported post-tensioned beam
L = 10.0        # m, span
P = 400.0       # kN, prestressing force (horizontal component)
sag = 0.25      # m, midspan cable sag
A = 0.18        # m2, concrete section area
w_dead = 6.5    # kN/m, self-weight + finishes
w_live = 4.0    # kN/m, live load

w_bal = 8.0 * P * sag / L**2          # upward UDL from the parabola
unbal = w_dead + w_live - w_bal       # net load left to bend for
M_unbal = unbal * L**2 / 8.0          # midspan moment of the residue
axial = P / A * 1000.0                # kN/m2 uniform compression

print(f"balanced (upward) load = {w_bal:.2f} kN/m")
print(f"unbalanced load = {unbal:.2f} kN/m")
print(f"midspan unbalanced moment = {M_unbal:.1f} kN·m")
print(f"uniform axial compression = {axial:.0f} kN/m2")`,
            },
            diagram: {
              kind: "flow",
              title: "The load balancing recipe",
              caption: "Five moves from drape to residual moment.",
              steps: [
                { label: "Drape the tendon parabolically, sag e at midspan" },
                { label: "Compute the upward push w_bal = 8Pe/L^2" },
                { label: "Choose the load to balance", note: "sustained load is the usual target" },
                { label: "Superpose: balanced part leaves axial P/A only" },
                { label: "Design bending for the unbalanced residue", note: "plain M = wL^2/8 on it" },
              ],
            },
            callout: {
              type: "tip",
              title: "Attribution earns marks",
              body: "Write 'T.Y. Lin's load balancing (1963)' before the formula w = 8Pe/L^2, and always state what remains unbalanced. A question worth 7 marks expects: the formula, its derivation sketch (cable equilibrium over half-span), the balanced-load choice, and the residual moment computed.",
            },
            keyTerms: [
              { term: "Load balancing", definition: "T.Y. Lin's method of shaping the tendon so its transverse push cancels a chosen load." },
              { term: "Balanced load", definition: "The sustained load (or part of it) exactly offset by the tendon's upward equivalent force." },
              { term: "Unbalanced load", definition: "The load residue the tendon does not cancel; it alone produces moment and deflection." },
            ],
            examQuestions: [
              {
                q: "Explain the load balancing method with sketches; derive w_bal = 8Pe/L^2 for a parabolic tendon and show what remains to be designed after balancing.",
                marks: 7,
                outline: [
                  "Attribute the method to T.Y. Lin; state its aim: cancel a chosen load with the tendon push.",
                  "Parabola between anchorages at the same level, sag e at midspan, force P.",
                  "Derivation: equilibrium of half the span (or the cable) gives the equivalent UDL w = 8Pe/L^2.",
                  "Ends deliver horizontal P plus small vertical reactions; span sees the upward UDL.",
                  "Balanced condition: sustained load matched - only axial compression P/A remains.",
                  "Unbalanced load: live load and variations produce moment by plain elastic theory, M = wL^2/8.",
                  "Numerical illustration: P = 400 kN, e = 0.25 m, L = 10 m gives w_bal = 8 kN/m.",
                ],
              },
              {
                q: "Compute w_bal for P = 500 kN, e = 0.3 m, L = 12 m, and state the residual moment if the total load is 12 kN/m.",
                marks: 3,
              },
              {
                q: "Why is load balancing especially convenient for continuous flat slabs?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "The kern and the limiting zone",
            body: [
              "The kern answers a purely geometric question: through which points may the compressive resultant pass without ever creating tension in the section? Let the resultant P act at eccentricity e below the centroid. The top fiber stress is P/A - P·e/Z_t; for zero tension, e must not exceed Z_t/A. That distance, Z_t/A below the centroid, is the lower kern point - and by symmetry the upper kern point sits Z_b/A above it. For a rectangular section Z/A = (b·d^2/6)/(b·d) = d/6, so the kern of a rectangle spans d/6 on either side of the centroid: the familiar middle third, the same rule masonry designers quote for no-tension action.",
              "Allow some tension and the kern grows. If a tensile stress f_perm is permitted at a stage, the resultant may travel beyond the kern point by exactly f_perm·Z/P: the limiting zone extends to Z/A + f_perm·Z/P on each side. That is the Class 2 and Class 3 geometry - tension permitted but capped - and the zone is drawn separately for the transfer stage (young concrete, small permitted tension, low P) and the service stage. For the running example's 300 x 600 rectangle, the kern points sit 100 mm either side of the centroid; permitting 2 N/mm2 tension at service with P = 1200 kN extends the zone to 100 + 2 x 18 x 10^6 / 1.2 x 10^6 = 130 mm. The python snippet computes both numbers instantly for any section.",
              "The kern explains a design habit you have already seen: tendons are anchored near the centroid at the supports of simply supported beams. At a support the external moment is zero, so the pressure line - the subject of the next section - coincides with the tendon itself; if the tendon sat below the lower kern point there, the top fiber would crack at transfer with no compensating moment to save it. Efficient sections also chase the kern: I-sections push material into flanges, raising Z for the same A and widening the kern beyond d/6, which is exactly why long-span girders are I- or box-shaped rather than rectangular. Keep the rectangle's d/6 in your head; derive everything else in one line.",
            ],
            bullets: [
              "Kern: the zone within which the resultant compressive force creates no tension anywhere in the section.",
              "Lower kern point at Z_t/A below the centroid; upper kern point at Z_b/A above it.",
              "Rectangle: kern points at d/6 each side - the middle third of the section.",
              "Limiting zone with permitted tension f_perm: extends by f_perm·Z/P beyond each kern point.",
              "Running example: kern at 100 mm; with 2 N/mm2 permitted tension, zone to 130 mm.",
              "Tendons anchor near the centroid at supports because the pressure line sits on the cable where M = 0.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Kern and tension-limiting zone for a rectangular beam; swap in I-section properties to see the kern widen.",
              code: `# Kern and tension-limiting zone for a rectangular beam
b = 300.0        # mm
h = 600.0        # mm
P = 1200.0e3     # N, prestressing force
f_perm = 2.0     # N/mm2, permitted tension (Class 2 service case)

A = b * h
Z = b * h**2 / 6.0
kern = Z / A                      # each kern point from the centroid
extra = f_perm * Z / P            # the zone grows when tension is allowed

print(f"A = {A:.0f} mm2, Z = {Z:.3e} mm3")
print(f"kern point at {kern:.1f} mm either side of the centroid")
print(f"limiting zone to {kern + extra:.1f} mm with f_perm = {f_perm}")
print(f"middle third of the section is {2*kern:.0f} mm deep")
# I-sections: bigger Z for the same A -> kern beyond d/6`,
            },
            diagram: {
              kind: "fork",
              title: "Where does the resultant sit?",
              caption: "Three positions of the compressive resultant, three behaviours.",
              start: "Compressive resultant C relative to the kern at a critical stage",
              branches: [
                {
                  label: "Inside the kern",
                  outcome: "No tensile stress anywhere in the section - Class 1 behaviour assured",
                  good: true,
                },
                {
                  label: "Outside the kern, inside the limiting zone",
                  outcome: "Tension appears but stays below the permitted value - Class 2/3 territory; check crack widths",
                  good: true,
                },
                {
                  label: "Outside the limiting zone",
                  outcome: "Tension exceeds the limit: cracking at transfer or service - reprofile the cable or raise the prestress",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The middle-third trap",
              body: "Kern-point questions are frequent 3-mark items. Remember: the LOWER kern point uses Z_t (the modulus of the TOP fiber) and vice versa - students swap them every year. For a rectangle both are d/6, which hides the mistake; state the general rule Z/A first, then specialise.",
            },
            keyTerms: [
              { term: "Kern", definition: "The zone of resultant-force positions producing zero tensile stress in the section." },
              { term: "Kern point", definition: "The boundary point at distance Z/A from the centroid on each side; d/6 for a rectangle." },
              { term: "Limiting zone", definition: "The kern enlarged by f_perm·Z/P when a specified tensile stress is permitted." },
            ],
            examQuestions: [
              {
                q: "Define the kern of a section. Derive the kern-point distances and explain the extended limiting zone when tension is permitted, with the running example's numbers.",
                marks: 7,
                outline: [
                  "Definition: locus of resultant-force positions giving no tension in the section.",
                  "Top-fiber stress under resultant P at e: P/A - Pe/Z_t; set to zero for the boundary.",
                  "Derive lower kern point e = Z_t/A; upper kern point Z_b/A.",
                  "Rectangle: Z/A = d/6 - the middle third.",
                  "Limiting zone with permitted tension f_perm: extends by f_perm·Z/P beyond each kern point.",
                  "Numbers: 300 x 600 rectangle - kern at 100 mm; with f_perm = 2 and P = 1200 kN, zone to 130 mm.",
                  "Applications: support anchorage near centroid; I-sections chosen to widen the kern.",
                ],
              },
              {
                q: "Locate the kern points of a 300 x 600 mm rectangular section measured from the centroid.",
                marks: 2,
              },
              {
                q: "Why are tendons anchored near the centroid at the supports of simply supported beams?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "The pressure line and concordant cables",
            body: [
              "The pressure line - also called the thrust line - is the locus along the member of the point where the resultant compressive force acts. It unifies everything Unit III has built. At a section with prestress P at eccentricity e and external moment M, the resultant acts at a distance from the centroid of e_c = e - M/P: the axial force P shifted by whatever moment is unbalanced. At transfer, with M zero, the pressure line lies exactly on the cable; as the moment grows, the line rises - toward and above the centroid. The no-tension condition becomes beautifully geometric: the pressure line must stay between the kern points at every stage of loading.",
              "Track the running example through one load cycle. With P = 1200 kN and e = 150 mm, the cable itself sits 150 mm below the centroid - beyond the 100 mm kern point - but self-weight M1 = 90 kN·m is present from the instant of transfer, lifting the pressure line by M1/P = 75 mm to 75 mm below the centroid: safely inside. At full service, M2 = 260 kN·m lifts it by 216.7 mm, placing the line 66.7 mm above the centroid, still within the upper kern point at 100 mm. The arithmetic recapitulates Section 3.1's stresses in geometric form, and the cycle diagram below walks the same loop with the overload warning attached.",
              "In continuous beams the story gains one twist: a cable profile in a redundant frame induces redundant reactions, and these create secondary moments, so the pressure line shifts off the cable even under prestress alone. A concordant cable is a profile chosen so that its pressure line coincides with the cable itself - equivalently, no secondary moments arise. The classical result, due to Guyon, is that linearly transforming a concordant profile (moving anchorages vertically along the end sections, keeping the profile shape between) produces another concordant profile with the same pressure line. Designers exploit this to clear duct clashes or improve access while leaving the structural behaviour untouched - which is why concordance and linear transformation are named together in every exam answer on continuous prestressed beams.",
            ],
            bullets: [
              "Pressure line: the locus of the resultant compressive force along the span.",
              "Position formula: e_c = e - M/P - it starts on the cable at transfer and rises with moment.",
              "Geometric no-tension rule: the line must stay between the kern points at every load stage.",
              "Running example: line at 75 mm below C at transfer (with M1), 67 mm above at full service; both inside.",
              "Concordant cable: a continuous-beam profile whose pressure line coincides with the cable - no secondary moments.",
              "Linear transformation (Guyon): move a concordant profile's anchorages vertically and the pressure line is unchanged.",
            ],
            table: {
              caption: "Reading the pressure line.",
              headers: ["Situation", "Line position", "Meaning"],
              rows: [
                ["External moment zero", "on the cable", "transfer condition; cable locus = pressure line"],
                ["M = P·e", "at the centroid", "stress is uniform P/A over the section"],
                ["Line between the kerns", "inside the kern zone", "fully compressed section - Class 1"],
                ["Line below the lower kern", "beyond Z_t/A", "tension at the top fiber"],
                ["Line above the upper kern", "beyond Z_b/A", "tension at the bottom fiber"],
                ["Line wanders past the kern under overload", "outside", "cracking warns that capacity is near"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The pressure line through one load cycle",
              caption: "Load the beam up and unload: the line rides between the kern points.",
              steps: [
                { label: "Transfer: line sits on the cable, lifted by M1", note: "75 mm below the centroid" },
                { label: "Dead load complete: line rises further", note: "still inside the lower kern bound" },
                { label: "Full service M2: line is 67 mm above the centroid", note: "upper kern bound at 100 mm holds it" },
                { label: "Overload pushes the line past the upper kern", note: "bottom-fiber tension - cracks, the warning signal" },
                { label: "Unload: the line retraces to the cable", note: "the cycle closes" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch first, compute after",
              body: "In numericals, draw the kern band and plot the pressure line at transfer, service and overload before computing anything. The sketch alone earns marks, exposes sign errors instantly, and answers the short question 'define pressure line and state its use' in two lines.",
            },
            keyTerms: [
              { term: "Pressure line", definition: "The locus of the application point of the resultant compressive force along the member." },
              { term: "Concordant cable", definition: "A continuous-beam tendon profile whose pressure line coincides with the cable, producing no secondary moments." },
              { term: "Linear transformation", definition: "Vertically shifting the anchorages of a cable without changing its shape between them; leaves the pressure line unchanged." },
            ],
            examQuestions: [
              {
                q: "What is the pressure line? Show how it moves under increasing load, relate it to the kern, and explain concordant cables and linear transformation in continuous beams.",
                marks: 7,
                outline: [
                  "Define pressure line as the locus of the compressive resultant.",
                  "Derive e_c = e - M/P from equilibrium of axial force and unbalanced moment.",
                  "At transfer the line lies on the cable; it rises by M/P as load grows.",
                  "No-tension rule: the line must stay between the kern points at all stages.",
                  "Run the numbers: P = 1200 kN, e = 150, M1 = 90, M2 = 260 kN·m against kern points at 100 mm.",
                  "Continuous beams: profiles induce secondary moments; concordant cables eliminate them.",
                  "Guyon: linear transformation of a concordant profile keeps the same pressure line.",
                ],
              },
              {
                q: "At what external moment does the pressure line pass through the centroid of the section?",
                marks: 2,
              },
              {
                q: "Define a concordant cable and state one practical use of linear transformation.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Worked stress check at transfer and service",
            body: [
              "Set the scene once, then never recompute. The running beam: rectangular 300 x 600 mm (A = 180,000 mm2, Z = 18 x 10^6 mm3), simply supported over L = 12 m, carrying total dead load 5.0 kN/m - self-weight 4.5 plus 0.5 of finishes - giving M1 = 5.0 x 144/8 = 90 kN·m at transfer; and total service load 14.5 kN/m giving M2 = 14.5 x 144/8 = 261, rounded to 260 kN·m. The effective prestress is P = 1200 kN at e = 150 mm (for clarity the losses are treated as already deducted; a full solution would carry P_0 = 1300 kN at transfer). Concrete is M40 with transfer strength 30 N/mm2, so the working limits are 15 N/mm2 compression at transfer and 13.2 N/mm2 at service, tension zero for a Class 1 member.",
              "The four computations are one line each. Base quantities: P/A = 6.67, P·e/Z = 10.0, M1/Z = 5.0, M2/Z = 14.44 N/mm2. Transfer, top fiber: 6.67 - 10.0 + 5.0 = 1.67 N/mm2 compression. Transfer, bottom fiber: 6.67 + 10.0 - 5.0 = 11.67 N/mm2 compression. Service, top fiber: 6.67 - 10.0 + 14.44 = 11.11 N/mm2 compression. Service, bottom fiber: 6.67 + 10.0 - 14.44 = 2.22 N/mm2 compression. Every value is compressive - the member is genuinely Class 1 - and every value is below its limit: 11.67 against 15 at transfer, 11.11 against 13.2 at service. Note which check is closest to its limit (service top compression) and which fiber is closest to tension (service bottom at 2.22): those are the design's live margins.",
              "The same skeleton repairs a failed design. If the transfer-top check had gone into tension, the options are: reduce e (the eccentricity term is the villain at the top), reduce P, or accept a Class 2 tension allowance. If the service-bottom check dips into tension, the options run the other way: raise e or raise P. If the compression checks overflow, deepen the section - Z grows with h^2, which is why depth is the master variable. Practise writing this answer as a table with a stated convention, because the RGPV numerical is exactly this: four substitutions, four verdicts, one conclusion, and a mark reserved for stating which stage governs.",
            ],
            bullets: [
              "Running data: 300 x 600, L = 12 m, dead 5 kN/m (M1 = 90), service 14.5 kN/m (M2 = 260 kN·m).",
              "Base quantities: P/A = 6.67, Pe/Z = 10.0, M1/Z = 5.0, M2/Z = 14.44 N/mm2.",
              "Transfer: 1.67 and 11.67 N/mm2 compression; limits 15 (f_ci = 30).",
              "Service: 11.11 and 2.22 N/mm2 compression; limits 13.2 (M40) and zero tension.",
              "Governing margins: service-top compression closest to limit; service-bottom closest to tension.",
              "Repair logic: tension at transfer-top means cut e; tension at service-bottom means raise e or P; overflow means deepen h.",
            ],
            table: {
              caption: "The complete four-check solution for the running example.",
              headers: ["Check", "Expression", "Result (N/mm2)", "Limit", "Verdict"],
              rows: [
                ["Transfer top", "6.67 - 10.0 + 5.0", "1.67 C", "15", "pass"],
                ["Transfer bottom", "6.67 + 10.0 - 5.0", "11.67 C", "15", "pass"],
                ["Service top", "6.67 - 10.0 + 14.44", "11.11 C", "13.2", "pass, governs"],
                ["Service bottom", "6.67 + 10.0 - 14.44", "2.22 C", "13.2, no tension", "pass"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The stress-check workflow",
              caption: "The same five moves solve every stage-check numerical.",
              steps: [
                { label: "Compute A and Z for the section" },
                { label: "Assemble stage forces: P_0/M1 and P_e/M2" },
                { label: "Substitute into the four fiber expressions" },
                { label: "Compare each with its stage limit" },
                { label: "State the governing check and the repair option", note: "e, P or depth" },
              ],
            },
            callout: {
              type: "exam",
              title: "The banker numerical",
              body: "This exact question - rectangular beam, given P, e and loads, check stresses at transfer and service against IS 1343 limits - is the most repeated Unit III numerical. Write the table: stage, fiber, formula, substitution, limit, verdict. Ten minutes, seven marks, every time.",
            },
            keyTerms: [
              { term: "Governing check", definition: "The stage and fiber whose stress sits closest to its permissible limit and therefore controls the design." },
              { term: "Live margin", definition: "The distance between a computed stress and its limit; small margins identify where the design will fail first." },
              { term: "Stage forces", definition: "The force set acting at a stage: prestress P_0 or P_e, and moment M1 or M2." },
            ],
            examQuestions: [
              {
                q: "A rectangular prestressed beam 300 x 600 mm spans 12 m and carries total service load 14.5 kN/m (dead 5 kN/m). Effective prestress 1200 kN at e = 150 mm; M40 concrete, transfer strength 30 N/mm2. Check all extreme-fiber stresses at transfer and service against IS 1343 limits.",
                marks: 7,
                outline: [
                  "Section properties: A = 180,000 mm2, Z = 18 x 10^6 mm3.",
                  "Loads: M1 = 5.0 x 12^2/8 = 90 kN·m; M2 = 14.5 x 12^2/8 = 260 kN·m.",
                  "Base stresses: P/A = 6.67, Pe/Z = 10.0, M1/Z = 5.0, M2/Z = 14.44 N/mm2.",
                  "Transfer: top 1.67 C, bottom 11.67 C; limit 0.5 x 30 = 15.",
                  "Service: top 11.11 C, bottom 2.22 C; limits 13.2 and zero tension (Class 1).",
                  "All four checks pass; service top compression governs (11.11 vs 13.2).",
                  "State repair options if any check fails: adjust e, P or depth.",
                ],
              },
              {
                q: "In the worked example, what happens to the transfer-top check if the tendon is lowered by 50 mm?",
                marks: 3,
              },
              {
                q: "Why is the bottom-fiber service stress the usual indicator of crack onset in a Class 1 design?",
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
      title: "Design of Prestressed Members",
      summary:
        "From analysis to design: the M-sec (Magnel) inequalities that size the section and locate the cable zone, the IS 1343 classes of members, end blocks and their bursting reinforcement, web shear and principal tension, and the ultimate flexural strength that closes the safety case.",
      chapter: {
        number: "04",
        title: "Design of Prestressed Members",
        intro:
          "Unit IV turns the checks of Unit III into a design machine: four stress inequalities become two formulas for the required section modulus and a feasible band of eccentricity; the classes decide how much tension may be permitted; end blocks and webs are detailed for concentrated force and shear; and the strain-compatibility method proves ultimate capacity.",
        inOneBreath:
          "Design inverts analysis: from the four stage inequalities, eliminating P and e gives the required section moduli Z_t at least (M2 - M1)/(f_cc + f_tt) and Z_b at least (M2 - M1)/(f_cb + f_ts) - for a Class 1 member simply (M2 - M1)/f_cc - and with the section chosen, the same inequalities bound the cable between e_min = M2/P - Z/A and e_max = Z/A + M1/P: the cable zone of the M-sec diagram. IS 1343 classes set the permitted tension: none for Class 1, below rupture for Class 2, cracking with 0.1-0.2 mm widths for Class 3. End blocks carry jacking forces through bearing plates while bursting tension of roughly a quarter of the jack force demands closed links along the dispersal zone. Webs survive shear because prestress slashes the principal tension, f_pt = 0.5(sqrt(sigma^2 + 4v^2) - sigma); stirrups carry what remains. Ultimate flexure follows strain compatibility to f_pb, equilibrium 0.36 f_ck·b·x = A_p·f_pb, and M_u = A_p·f_pb·(d - 0.42x) against the 1.5 factored load.",
        sections: [
          {
            number: "4.1",
            title: "Designing sections with M-sec diagrams",
            body: [
              "Design asks the reverse question: given the loads and the limits, what section and what cable? Gustave Magnel's answer starts from the four inequalities of Unit III: at transfer the top fiber must stay within the tension limit and the bottom within the transfer compression limit; at service the same two fibers must respect the service compression and tension limits. Written with P and e unknown, these are four linear inequalities. Eliminating P and e between the transfer-top and service-top pair yields the required top-fiber modulus Z_t at least (M2 - M1)/(f_cc + f_tt), and the transfer-bottom with service-bottom pair yields Z_b at least (M2 - M1)/(f_cb + f_ts). For a Class 1 member with zero permitted tension both reduce to (M2 - M1)/f_cc - the design is sized not by the total service moment but by the jump the prestress must bridge from the empty stage to the loaded stage.",
              "With the section chosen, the same four inequalities become a graphical construction - the M-sec (moment-section) or Magnel diagram. In the plane of eccentricity e against 1/P, each inequality is a straight boundary; their intersection is a feasible polygon, and any point inside is a workable (P, e) pair. Read at constant P, the polygon collapses to the cable zone: the upper bound on e comes from the transfer-top condition, e_max = Z/A + M1/P - push the tendon lower and the top fiber cracks at transfer with only self-weight to defend it; the lower bound comes from the service-bottom condition, e_min = M2/P - Z/A - lift the tendon higher and the bottom fiber runs out of compression at full load. For the running example with P = 1200 kN on the 300 x 600 section: e_max = 100 + 90x10^6/1.2x10^6 = 175 mm and e_min = 260x10^6/1.2x10^6 - 100 = 117 mm. The chosen e = 150 mm sits comfortably inside.",
              "The numbers also show the designer's lever arms plainly. Increasing P widens the zone downward (e_min drops), but P is capped by the jacking limits and the transfer compression check; deepening the section raises Z with h^2 and widens both bounds - depth is always the strongest move; and relaxing from Class 1 to Class 2 shifts the f_tt and f_ts terms, buying modulus and eccentricity at the price of a crack-width service. Along the span the two bounds trace two limiting profiles and the actual cable must live between them everywhere - which is why bridge tendons are draped high over piers and deep at midspan. The python snippet reproduces the entire computation in a dozen lines.",
            ],
            bullets: [
              "Four inequalities: transfer top/bottom and service top/bottom stress limits with P and e unknown.",
              "Required moduli: Z_t at least (M2 - M1)/(f_cc + f_tt) and Z_b at least (M2 - M1)/(f_cb + f_ts).",
              "Class 1 shortcut: Z at least (M2 - M1)/f_cc - the moment jump sizes the section, not M2 alone.",
              "Cable zone: e_max = Z/A + M1/P (transfer-top governs) and e_min = M2/P - Z/A (service-bottom governs).",
              "Running example: required Z about 12.9 x 10^6 mm3; 300 x 600 gives 18 x 10^6; zone 117 to 175 mm.",
              "Depth is the master variable: Z grows with h^2; along the span the zone traces the limiting cable profiles.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Magnel design: required section moduli and the feasible eccentricity band for the running example.",
              code: `# Magnel design zone: required Z and feasible eccentricity band
M1 = 90.0e6    # N·mm, moment at transfer (self weight)
M2 = 260.0e6   # N·mm, total service moment
f_cc = 13.2    # N/mm2, permissible compression at service
f_tt = 0.0     # N/mm2, permitted tension at transfer (Class 1)
f_ts = 0.0     # N/mm2, permitted tension at service (Class 1)
f_cb = 15.0    # N/mm2, permissible compression at transfer

Zt = (M2 - M1) / (f_cc + f_tt)        # required top-fiber modulus
Zb = (M2 - M1) / (f_cb + f_ts)        # required bottom-fiber modulus
print(f"required Z_t = {Zt/1e6:.2f} x 10^6 mm3")
print(f"required Z_b = {Zb/1e6:.2f} x 10^6 mm3")

# chosen section 300 x 600 with P = 1200 kN
A = 300.0 * 600.0
Z = 300.0 * 600.0**2 / 6.0
P = 1200.0e3
e_max = Z / A + M1 / P                # transfer-top governs
e_min = M2 / P - Z / A                # service-bottom governs
print(f"cable zone at midspan: {e_min:.1f} mm <= e <= {e_max:.1f} mm")`,
            },
            diagram: {
              kind: "flow",
              title: "Magnel's design route",
              caption: "From loads to a sized section and a placed cable in five moves.",
              steps: [
                { label: "Write the four stage inequalities" },
                { label: "Eliminate P and e: required Z_t and Z_b", note: "size the section" },
                { label: "Choose a trial section (depth raises Z fast)" },
                { label: "Bound the cable: e_min and e_max from the same inequalities" },
                { label: "Drape the profile within the zone along the span", note: "high over piers, deep at midspan" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derivation plus numbers",
              body: "The 7-mark version expects both halves: derive Z at least (M2 - M1)/f_cc from the paired inequalities, then compute the cable zone for given P. Remember why M2 - M1 appears: prestress must carry the section from the light empty stage to the fully loaded one.",
            },
            keyTerms: [
              { term: "Cable zone", definition: "The band of eccentricity between e_min and e_max within which the tendon satisfies all four stress inequalities." },
              { term: "M-sec diagram", definition: "Magnel's graphical construction of the feasible (e, P) - or moment-section - region bounded by the four stress inequalities." },
              { term: "Design moment range", definition: "M2 - M1, the moment jump from transfer to full service that sizes a Class 1 section." },
            ],
            examQuestions: [
              {
                q: "Derive the minimum section modulus required for a Class 1 prestressed beam from the stage stress inequalities, and compute the cable zone for the running example (M1 = 90, M2 = 260 kN·m, f_cc = 13.2, f_cb = 15 N/mm2, section 300 x 600, P = 1200 kN).",
                marks: 7,
                outline: [
                  "State the four inequalities: transfer top/bottom, service top/bottom with their limits.",
                  "Combine transfer-top with service-top: (M2 - M1)/Z_t at most f_cc + f_tt, so Z_t at least (M2 - M1)/(f_cc + f_tt).",
                  "Combine transfer-bottom with service-bottom: Z_b at least (M2 - M1)/(f_cb + f_ts).",
                  "Class 1 shortcut: both reduce to (M2 - M1)/f_cc = 170x10^6/13.2 = 12.9 x 10^6 mm3.",
                  "Section 300 x 600 provides Z = 18 x 10^6 mm3 - adequate.",
                  "Cable zone: e_max = Z/A + M1/P = 100 + 75 = 175 mm; e_min = M2/P - Z/A = 216.7 - 100 = 117 mm.",
                  "Conclude: e = 150 mm sits inside; drape between the bounds along the span.",
                ],
              },
              {
                q: "What is the cable zone of a prestressed beam, and which two stress conditions bound it?",
                marks: 3,
              },
              {
                q: "Why does M2 - M1, rather than M2 alone, size the section?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Classes 1, 2 and 3 members",
            body: [
              "How much tension may a prestressed member carry? IS 1343 answers with a three-class scale. Class 1, fully prestressed: no tensile stress permitted at any stage under working loads - both fibers stay compressed everywhere, all the time. Class 2, limited prestressing: tensile stress is allowed up to but not beyond the flexural tensile strength (modulus of rupture), so the section may reach the verge of cracking but is not expected to show visible cracks under service loads. Class 3, partially prestressed: tensile stress may exceed the cracking value, and hairline cracks are permitted with widths limited - the usual teaching numbers are 0.1 mm in aggressive exposure and 0.2 mm in benign conditions, checked by the code's crack-width formula.",
              "The classes trade money for margins. Class 1 demands the most prestressing steel and the heaviest prestress, and it pays back with zero cracking - the choice for tanks, pressure pipes, marine exposure and fatigue-hungry railway work. Class 2 relaxes the steel by allowing the section to graze its tensile strength, saving steel while still keeping cracks invisible: the default for bridge girders. Class 3, usually built with a blend of prestressing tendons and ordinary reinforcement, is the economy choice for buildings: less HT steel, smaller prestress, less camber and elastic shortening, better damping - and in exchange the designer must analyse cracked sections, check crack widths and deflections on reduced stiffness, and protect against corrosion through detailing. Partial prestressing in this sense is not a compromise but a designed blend of both steel families.",
              "Behaviour under load explains what the classes really mean. Every prestressed beam passes through stages: elastic and uncracked while the concrete is compressed; elastic and cracked once the moment exceeds the decompression-plus-rupture threshold; then ultimate. A Class 1 member is designed never to leave the first stage under service loads; Class 2 touches the boundary of the second; Class 3 lives partly inside it and relies on the ordinary steel to distribute and control the cracks. The moment-curvature response softens at each transition, and the ultimate stage - Section 4.5 - is common to all three. Choosing the class is the first design decision, because every limit in Units III and IV keys off it.",
            ],
            bullets: [
              "Class 1: zero tension at all stages - full prestressing; tanks, marine, rail fatigue territory.",
              "Class 2: tension permitted up to the modulus of rupture - no visible cracks under service loads.",
              "Class 3: tension beyond rupture permitted; hairline cracks with widths limited to about 0.1-0.2 mm.",
              "Partial prestressing: Class 3 with added ordinary steel - designed blend, not compromise.",
              "Class 3 buys economy, less camber and better damping; costs cracked-section analysis and corrosion detailing.",
              "Load stages: uncracked elastic, cracked elastic, ultimate - the class decides how far into stage 2 service may go.",
            ],
            table: {
              caption: "Class rules at a glance (IS 1343).",
              headers: ["Class", "Tension at service", "Visible cracks", "Typical use"],
              rows: [
                ["Class 1", "none permitted", "no", "tanks, pipes, marine, containment, rail"],
                ["Class 2", "up to flexural tensile strength", "no", "bridge girders, exposed structures"],
                ["Class 3", "may exceed rupture", "hairline, width-limited", "buildings, slabs, benign exposure"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The class pyramid by tonnage built",
              caption: "Few structures can justify full prestressing; most ride lower.",
              tiers: [
                { label: "Class 1 - zero tension (full prestress)", note: "tanks, marine, containment, rail fatigue" },
                { label: "Class 2 - tension below the rupture", note: "most exposed bridge girders" },
                { label: "Class 3 - cracking allowed, widths limited", note: "buildings and slabs; partial prestressing" },
                { label: "Reinforced concrete - the unprestressed base", note: "short spans and simple work" },
              ],
            },
            callout: {
              type: "exam",
              title: "Define verbatim",
              body: "The class definitions are quoted almost word-for-word in papers: learn them exactly - 'no tensile stress', 'tensile stress not exceeding the flexural tensile strength', 'cracking permitted with limits on width'. Then add one example structure per class; the pair of moves takes two marks of a three-mark short and stabilises the 7-mark long answer.",
            },
            keyTerms: [
              { term: "Class 1 member", definition: "A fully prestressed member with no tensile stress permitted at any service stage." },
              { term: "Class 2 member", definition: "A member whose service tensile stress may reach but not exceed the flexural tensile strength; no visible cracks." },
              { term: "Partial prestressing", definition: "Class 3 design blending prestressing tendons with ordinary reinforcement to control cracks economically." },
            ],
            examQuestions: [
              {
                q: "Explain the IS 1343 classification of prestressed members into Classes 1, 2 and 3. When is partial prestressing economical, and at what costs?",
                marks: 7,
                outline: [
                  "Class 1: no tensile stress at any stage - full prestressing; examples.",
                  "Class 2: tension up to the modulus of rupture; no visible cracking; examples.",
                  "Class 3: tension may exceed rupture; hairline cracks with width limits about 0.1-0.2 mm.",
                  "Economy of partial prestressing: less HT steel, smaller prestress, reduced camber and shortening.",
                  "Behavioural gains: better damping, ductility and crack distribution from ordinary steel.",
                  "Costs: cracked-section analysis, crack-width and deflection checks, corrosion detailing.",
                  "Selection logic: exposure, tightness, fatigue versus economy of the structure.",
                ],
              },
              {
                q: "Why do railway sleepers and water tanks aim for Class 1 behaviour?",
                marks: 3,
              },
              {
                q: "State two drawbacks of Class 3 (partial) prestressing in buildings.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "End blocks: bursting and spalling",
            body: [
              "A post-tensioning anchorage delivers a thousand kilonewtons through a plate barely larger than a dinner plate. Saint-Venant's principle says the stress field becomes uniform only at a distance of roughly one section depth from the load; inside that dispersal zone the concrete carries a violent three-dimensional stress field. Two tensile patterns matter. Bursting: along the axis ahead of the bearing plate, transverse tensile stress spreads the concentrated force outward - picture the force lines fanning as they travel, pulling the concrete apart along the axis. Spalling: right at the loaded face, the concrete surface immediately around the plate is pushed into compression while the surrounding face tends to peel - surface tension near the plate edges. Unreinforced, either pattern cracks the end block before the member ever carries load.",
              "Quantification follows the code. IS 1343 treats the end block by the symmetric-prism rule: each anchorage is assumed to act over the prism of concrete symmetrically disposed around it, and the total bursting tension is read from code coefficient curves as a fraction of the jacking force - of the order of 20 to 30 percent, peaking within the first half of the dispersal length. With F_jack = 1000 kN and a coefficient of 0.25, the bursting force is about 250 kN to be carried by reinforcement, not concrete: closed links of steel working at the permissible stress give an area near 700 mm2 - five 12 mm two-leg links (1130 mm2) spread through the zone is a comfortable detail. Guyon's deep-beam analogy explains the curves if a derivation is asked, but the code method is the exam method.",
              "Detailing is where end blocks live or die. The bearing plate itself must respect the local bearing stress limit, helped by the confining helix around the trumpet. The bursting links are distributed - not lumped - over the dispersal length, placed ahead of the plate along the member axis; spalling steel hugs the loaded face around the plate. Larger plates and multiple smaller anchorages both soften the concentration: the same total force spread over more of the end face lowers every coefficient. For pre-tensioned members the analogous problem appears at release, where the concentrated bond forces enter the transmission zone - the reason Section 2.1 insisted on symmetric, gradual release. Sketch the stress field, name the two patterns, quote the fraction: that is the answer.",
            ],
            bullets: [
              "Dispersal zone: about one section depth for the concentrated force to spread to the uniform P/A pattern.",
              "Bursting: transverse tension along the axis ahead of the bearing plate; the main design force.",
              "Spalling: surface tension at the loaded face around the plate edges.",
              "IS 1343 route: symmetric prism per anchorage; bursting tension from code curves, of order 0.2-0.3 of F_jack.",
              "Worked detail: F_jack = 1000 kN, 0.25 coefficient gives 250 kN; five 12 mm two-leg links carry it.",
              "Soften the concentration: bigger plates, multiple smaller anchorages, confining helix around the trumpet.",
            ],
            table: {
              caption: "End-block forces and their counter-measures.",
              headers: ["Phenomenon", "Where it acts", "Counter-measure"],
              rows: [
                ["Local bearing", "under the plate", "plate area and bearing limit; helix confinement"],
                ["Bursting tension", "along the axis, ahead of the plate", "closed links distributed over the dispersal length"],
                ["Spalling tension", "loaded face around the plate", "steel hugging the end face"],
                ["Duct interference", "ducts crowding the zone", "spacing rules, staggering anchorages"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "End-block hardware stacked through the dispersal zone",
              caption: "From the jack seat down into the ordinary member.",
              layers: [
                { label: "Bearing plate on the end face", note: "local bearing check governs its size" },
                { label: "Confining helix around the trumpet", note: "raises the local bearing capacity" },
                { label: "Bursting links ahead of the plate", note: "distributed, not lumped" },
                { label: "Spalling steel at the loaded face", note: "hugs the plate perimeter" },
                { label: "Ordinary web and flange steel beyond one depth", note: "the field is uniform again" },
              ],
            },
            callout: {
              type: "warning",
              title: "Where post-tensioned members actually fail",
              body: "End-block detailing is not decoration: longitudinal bursting cracks behind anchorages are the classic distress of post-tensioned construction. In answers, always sketch the dispersal cone with the two tensile patterns labeled - the sketch is often worth more than the coefficient arithmetic.",
            },
            keyTerms: [
              { term: "End block", definition: "The thickened end zone of a post-tensioned member through which anchorage forces disperse into the section." },
              { term: "Bursting tension", definition: "Transverse tensile force along the axis ahead of a bearing plate, of order a quarter of the jacking force." },
              { term: "Spalling tension", definition: "Surface tensile stress at the loaded face surrounding the anchorage plate." },
            ],
            examQuestions: [
              {
                q: "What are end blocks? Explain bursting and spalling in the anchorage zone with stress sketches, and outline the IS 1343 design of end-block reinforcement for a 1000 kN anchorage.",
                marks: 7,
                outline: [
                  "Define end block and the dispersal zone of about one section depth (Saint-Venant).",
                  "Sketch the force fan; label bursting along the axis and spalling at the face.",
                  "Bursting mechanism: transverse tension as the concentrated force spreads outward.",
                  "Spalling mechanism: surface tension around the compressed patch on the loaded face.",
                  "IS 1343: symmetric prism per anchorage; coefficient curves give total bursting tension.",
                  "Numbers: 0.25 x 1000 kN = 250 kN; steel at permissible stress gives about 700 mm2.",
                  "Detailing: distributed closed links, spalling steel at the face, helix at the trumpet.",
                ],
              },
              {
                q: "Distinguish bursting from spalling in an end block.",
                marks: 2,
              },
              {
                q: "What is the symmetric-prism rule when several anchorages share one end block?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Shear and principal tensile stress",
            body: [
              "Prestressed webs are thin, and shear is where that thinness is tested. At the centroidal axis the bending stress is zero, so the stress field there is the superposition of the axial prestress sigma (compression) and the shear stress v. The principal tensile stress follows from Mohr's circle: f_pt = 0.5·(sqrt(sigma^2 + 4·v^2) - sigma). The formula's magic is the minus sign: without prestress (sigma = 0), f_pt equals v and diagonal tension rules, as in reinforced concrete. With prestress, the compression suppresses the diagonal tension - run the running example: V = 87 kN at the support (14.5 kN/m over 12 m), and with sigma = 6.67 N/mm2, a 300 mm web shows v = 0.53 and f_pt of only 0.04 N/mm2; even a thin 100 mm I-web, v = 1.58, shows f_pt of just 0.36 N/mm2. Prestress nearly kills diagonal tension at service.",
              "The design sequence follows the physics. Compute the principal tension at the critical sections - centroidal axis of the web, near supports, and wherever the section changes. If f_pt stays below the code's permissible value, the concrete carries the shear and only nominal web steel is required for robustness. If it exceeds the permissible, stirrups are designed for the excess, with spacings within code limits; if the demand is severe - thin webs, large ducts, heavy loads - the honest remedies are a thicker web, vertical prestress or a re-draped tendon, because stirrups alone cannot rescue a web that is crushing or whose ducts leave no concrete path. One elegant helper is always available: inclined tendons contribute their vertical component, so the shear to be resisted is V_net = V - P·sin(theta) at sections where the tendon slopes, which is why tendons are steepened near supports.",
              "At ultimate, the design shifts to a truss-and-balance view familiar from IS 456: the nominal shear stress tau_v = V_u/(b·d) is compared with the section's capacity term tau_c, which in IS 1343 recognises the beneficial axial compression, and stirrups carry the balance: V_s = 0.87·f_y·A_sv·d/s_v. Two disciplines complete the answer. First, minimum web reinforcement is mandatory even when the concrete alone suffices - prestressed webs are too thin to be left bare. Second, the shear check is always paired with the principal-tension service check, because the service stage controls cracking and the ultimate stage controls strength, and a complete answer reports both.",
            ],
            bullets: [
              "Principal tension at the centroidal axis: f_pt = 0.5·(sqrt(sigma^2 + 4·v^2) - sigma), with v = V/(b·d).",
              "Prestress suppresses diagonal tension: for sigma = 0 the formula returns f_pt = v (the RC case).",
              "Running example: sigma = 6.67, V = 87 kN: f_pt of 0.04 (300 mm web) or 0.36 N/mm2 (100 mm web).",
              "Inclined tendons cut the design shear: V_net = V - P·sin(theta) - hence steep profiles near supports.",
              "Ultimate route: tau_v = V_u/(b·d) against tau_c (which credits the compression), stirrups for the excess.",
              "Minimum web steel is mandatory regardless; severe demand calls for thicker webs, not more stirrups.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Principal tension in a prestressed web: the same shear on a rectangular web and a thin I-web.",
              code: `# Principal tension in a prestressed web
sigma = 6.67      # N/mm2, axial compression at the centroidal axis
V = 87.0e3        # N, shear force at the support
d = 550.0         # mm, effective depth

for b in (300.0, 100.0):            # rectangular web vs thin I-web
    v = V / (b * d)
    f_pt = 0.5 * ((sigma**2 + 4*v**2) ** 0.5 - sigma)
    print(f"b = {b:.0f} mm: v = {v:.2f}, "
          f"principal tension = {f_pt:.2f} N/mm2")

# An identical RC web (sigma = 0) would suffer f_pt = v in full
# diagonal tension - prestress is the difference.`,
            },
            diagram: {
              kind: "fork",
              title: "The web-shear verdict",
              caption: "Three levels of principal tension, three responses.",
              start: "Principal tension f_pt at the worst web section",
              branches: [
                {
                  label: "Below the permissible value",
                  outcome: "Concrete alone carries the shear; provide minimum stirrups for robustness",
                  good: true,
                },
                {
                  label: "Moderately above",
                  outcome: "Design stirrups for the excess shear, spacing within code limits",
                  good: true,
                },
                {
                  label: "Far above, or the web nears crushing",
                  outcome: "Thicken the web, add vertical prestress or re-drape the tendon - stirrups cannot rescue it",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "One substitution, easy marks",
              body: "The short numerical 'compute the principal tensile stress given sigma and v' appears constantly. Memorise f_pt = 0.5(sqrt(sigma^2 + 4v^2) - sigma), show one substitution (e.g. sigma = 5, v = 1.5 gives 0.42 N/mm2), and add one line on why prestress reduces it - three marks in under five minutes.",
            },
            keyTerms: [
              { term: "Principal tensile stress", definition: "The maximum tension in a combined stress field; 0.5(sqrt(sigma^2 + 4v^2) - sigma) at the web centroid." },
              { term: "Diagonal tension", definition: "The inclined tension that cracks unstressed webs; equals the shear stress when no axial compression acts." },
              { term: "Vertical prestress", definition: "Transverse prestressing of webs to add compression and further suppress principal tension." },
            ],
            examQuestions: [
              {
                q: "Derive the principal tensile stress expression for a prestressed web and show why prestress reduces diagonal tension. Outline the IS 1343 shear design steps and the role of inclined tendons.",
                marks: 7,
                outline: [
                  "Stress field at the web centroid: compression sigma plus shear v, no bending.",
                  "Mohr's circle gives f_pt = 0.5(sqrt(sigma^2 + 4v^2) - sigma).",
                  "Check the RC limit: sigma = 0 returns f_pt = v - full diagonal tension.",
                  "Numbers: sigma = 6.67, v = 0.53 gives 0.04; v = 1.58 gives 0.36 N/mm2 - prestress suppresses cracking.",
                  "Service check: f_pt against the code's permissible value at critical sections.",
                  "Ultimate: tau_v = V_u/(b·d) versus tau_c (compression credited); stirrups carry the excess.",
                  "Inclined tendons: V_net = V - P·sin(theta); steepen profiles near supports; minimum web steel always.",
                ],
              },
              {
                q: "Compute f_pt for sigma = 5 N/mm2 and v = 1.5 N/mm2, and compare it with the RC case.",
                marks: 3,
              },
              {
                q: "How do draped tendons reduce the design shear force near supports?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Ultimate flexural strength",
            body: [
              "Service checks keep the member comfortable; the limit state keeps it standing. At ultimate the concrete crushes at a strain of 0.0035 and the question is what stress the tendon reaches. The tendon already carries an effective prestrain f_pe/E_s from service; bending adds strain in proportion to its distance below the neutral axis, so the failure strain is eps_pb = f_pe/E_s + 0.0035·(d - x)/x. For a bonded tendon with a small neutral axis this added strain is large, and f_pb - the stress in the tendon at failure - climbs close to the ultimate strength; the code tabulates a simplified route, but strain compatibility is the reasoning examiners want. Unbonded tendons, whose strain is uniform along their length, reach far less - which is why bonded construction earns higher ultimate capacity.",
              "Equilibrium then closes the problem exactly as in reinforced concrete. The rectangular stress block of IS 456/IS 1343 gives compression C = 0.36·f_ck·b·x, and setting it equal to the tendon force T = A_p·f_pb locates the neutral axis; the moment capacity follows from the couple: M_u = A_p·f_pb·(d - 0.42·x). The code caps the neutral-axis depth so failure initiates in the steel - the under-reinforced guarantee of ductility. Run the running example's ultimate check: A_p = 600 mm2 of strand reaching f_pb = 1600 N/mm2 in a 300 mm wide, 550 mm effective-depth section of M40: x = 960,000/(0.36 x 40 x 300) = 222 mm, x/d = 0.40 within the cap, and M_u = 960 x (550 - 93) kN·mm = about 438 kN·m.",
              "The demand side applies the load factor: IS 1343 requires M_u to reach at least 1.5 times the characteristic dead-plus-live service moment - for the running example, 1.5 x 260 = 390 kN·m against the computed 438, a comfortable 12 percent margin. Two housekeeping items complete a full-mark answer: minimum tendon quantities guard against sudden failure if the prestress is lost, and the serviceability limits of Unit III - already checked - ride along with the strength check, since prestressed design is always a two-lens exercise. Practise the pipeline: prestrain, compatibility, equilibrium, capacity, factor check - five steps, one number at the end.",
            ],
            bullets: [
              "Tendon strain at failure: eps_pb = f_pe/E_s + 0.0035·(d - x)/x - prestrain plus bending share.",
              "Bonded tendons reach f_pb near ultimate strength; unbonded tendons stay far below it.",
              "Equilibrium: 0.36·f_ck·b·x = A_p·f_pb locates x; lever arm is (d - 0.42x).",
              "Capacity: M_u = A_p·f_pb·(d - 0.42x); the code caps x/d for under-reinforced ductility.",
              "Running example: A_p = 600 mm2, f_pb = 1600: x = 222 mm, M_u about 438 kN·m.",
              "Demand: M_u at least 1.5 times (dead + live) moment - 390 kN·m here; margin about 12 percent.",
            ],
            table: {
              caption: "Worked ultimate check for the running example (M40, b = 300, d = 550 mm).",
              headers: ["Quantity", "Computation", "Value"],
              rows: [
                ["Tendon force at failure", "600 mm2 x 1600 N/mm2", "960 kN"],
                ["Neutral axis depth", "960e3 / (0.36 x 40 x 300)", "222 mm"],
                ["Depth ratio x/d", "222 / 550", "0.40 (within cap)"],
                ["Lever arm", "550 - 0.42 x 222", "457 mm"],
                ["Ultimate moment M_u", "960 kN x 0.457 m", "about 438 kN·m"],
                ["Required M_u", "1.5 x 260 kN·m", "390 kN·m - pass"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Ultimate flexure, step by step",
              caption: "Five stages from effective stress to the factor-of-safety verdict.",
              stages: [
                { label: "Start: f_pe, A_p, b, d, f_ck known" },
                { label: "Strain compatibility: prestrain plus bending share", note: "eps_pb = f_pe/E_s + 0.0035(d - x)/x" },
                { label: "Tendon stress f_pb from the strain", note: "bonded strands near f_u" },
                { label: "Equilibrium: 0.36 f_ck·b·x = A_p·f_pb", note: "iterate x to match" },
                { label: "M_u = A_p·f_pb·(d - 0.42x) vs 1.5 x M2", note: "the verdict" },
              ],
            },
            callout: {
              type: "exam",
              title: "The Unit IV banker numerical",
              body: "Given A_p, f_pe, b, d and f_ck, compute the ultimate moment by strain compatibility and check the load factor. Write every intermediate: prestrain, added strain, f_pb, x, lever arm, M_u, 1.5 x M2. The intermediate lines carry the marks even if arithmetic wobbles at the end.",
            },
            keyTerms: [
              { term: "Strain compatibility", definition: "Determining the tendon's failure stress from its prestrain plus the bending strain at the ultimate section." },
              { term: "f_pb", definition: "The stress in the prestressing tendon at failure of the section; near ultimate strength for bonded tendons." },
              { term: "Load factor", definition: "The multiplier applied to service loads at the limit state - 1.5 for dead plus live in IS 1343." },
            ],
            examQuestions: [
              {
                q: "Explain the strain compatibility method for the ultimate flexural strength of a bonded prestressed beam, and apply it: A_p = 600 mm2, f_pb = 1600 N/mm2, b = 300 mm, d = 550 mm, M40 concrete; check against a service moment of 260 kN·m.",
                marks: 7,
                outline: [
                  "Tendon strain at failure: effective prestrain plus the bending share 0.0035(d - x)/x.",
                  "Bonded tendons thus reach f_pb near ultimate strength; unbonded reach far less.",
                  "Compression block: C = 0.36 f_ck·b·x; equilibrium with T = A_p·f_pb.",
                  "Solve x = 600x1600 / (0.36x40x300) = 222 mm; x/d = 0.40 within the code cap.",
                  "Lever arm = 550 - 0.42x222 = 457 mm.",
                  "M_u = 960 kN x 0.457 m = about 438 kN·m.",
                  "Demand: 1.5 x 260 = 390 kN·m; pass with about 12 percent margin.",
                ],
              },
              {
                q: "Why is f_pb lower for unbonded tendons than for bonded ones?",
                marks: 2,
              },
              {
                q: "What load factor does IS 1343 apply to dead plus live loads at the ultimate limit state?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Applications",
      summary:
        "Prestressed concrete at work: beams and slabs for buildings and bridges, poles and sleepers for utilities and railways, pipes and tanks that hold water under pressure, bridges from standard girders to segmental cantilevers, and the IS 1343 code provisions and landmark case studies that bind practice together.",
      chapter: {
        number: "05",
        title: "Applications of Prestressed Concrete",
        intro:
          "Unit V walks the product line: how the same physics dresses differently for floors, poles, sleepers, pipes, tanks and bridges; what each application demands of the systems of Unit II and the design machinery of Unit IV; and the code clauses and famous structures every answer should name.",
        inOneBreath:
          "Buildings use precast pretensioned hollow-core and double-tee floors up to about 16-24 m, and post-tensioned flat plates reaching span-to-depth near 40, cutting storey heights; composite action with cast-in-situ decks raises the modulus of precast girders. Railways consume millions of pre-tensioned monoblock sleepers from long-line beds, and utilities spin tapered poles centrifugally. Pipes and tanks prestress circumferentially: wire wound at controlled tension squeezes the core into hoop compression that internal pressure must first spend - design with N = pD/2 per metre height. Bridges scale from standard precast I-girders of 15-35 m through box girders erected span-by-span or launched incrementally to balanced cantilevers beyond 300 m at the world record. IS 1343 supplies the numbers to memorise, and Walnut Lane (1950), Luzancy (1946) and India's metro viaducts supply the stories.",
        sections: [
          {
            number: "5.1",
            title: "Beams and slabs for buildings",
            body: [
              "Floors are where prestressing touches the most people. Precast pretensioned hollow-core slabs - extruded or slip-formed with longitudinal voids - offer 8 to 16 m spans at a fraction of the dead weight of solid slabs; double-tee units stretch to about 24 m for auditoria and car parks; single tees and planks fill the smaller bays. On site, post-tensioned flat plates and band-beam systems carry 8 to 12 m column grids with span-to-depth ratios near 40 - roughly half the depth of a reinforced flat slab - which removes drop panels, slices storey height and lets services run under a flat soffit. Tendons run banded in one direction and distributed in the other, and the load-balancing tuning of Section 3.2 decides the drapes.",
              "Composite construction multiplies the options for beams. A precast prestressed I- or T-girder is erected first, working alone under its own weight; a cast-in-situ deck is added, and thereafter the composite section - larger modulus, wider flange - carries the live loads. The two-stage arithmetic mirrors the transfer/service story of Unit III: girder-alone Z for the dead stage, composite Z for the live stage, with horizontal shear transfer at the interface designed so the two concretes act as one. Where the girders are propped while the deck cures (shored construction), the composite section takes everything; unshored, the girder alone carries the wet concrete - the designer checks both.",
              "The recurring practical issue in prestressed floors is camber: the same upward bow that offsets dead-load sag is an annoyance when slabs meet columns and partitions. Designers control it by balancing close to the sustained load, sequencing erection, and accepting that camber grows for months with creep. Other floor-system details worth naming: minimum reinforcement and tendons distributed over the width per code; punching shear around columns in flat plates, treated with stud rails or drop panels; and diaphragm action tying the prestressed floor into the lateral system. A complete exam answer pairs each system with its span band and its one signature advantage.",
            ],
            bullets: [
              "Hollow-core slabs: pretensioned, voided, 8-16 m spans, fast floors for offices and housing.",
              "Double tees: 12-24 m; single tees and planks for smaller bays.",
              "Post-tensioned flat plates: 8-12 m grids, span/depth near 40, no drop panels, lower storeys.",
              "Tendon layout: banded over columns one way, distributed the other; drapes set by load balancing.",
              "Composite girders: girder-alone Z for dead, composite Z for live; horizontal shear interface designed.",
              "Camber is the floor designer's chronic issue - balance the sustained load and monitor creep growth.",
            ],
            table: {
              caption: "Floor and roof systems by span.",
              headers: ["System", "Typical span", "Signature advantage"],
              rows: [
                ["RC flat slab", "up to about 10 m", "familiar, no special trades"],
                ["PT flat plate", "8-12 m", "thin soffit, span/depth near 40"],
                ["Hollow-core slab", "8-16 m", "instant floor, no formwork"],
                ["Double tee", "12-24 m", "long clear bays for parking, halls"],
                ["Precast PSC girder + deck", "15-35 m", "composite modulus; bridge standard"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two ways to span a building",
              caption: "Factory prestressing versus site post-tensioning.",
              left: {
                heading: "Precast pretensioned floors",
                items: [
                  "Hollow-core and double-tee units",
                  "Spans 8-24 m by unit type",
                  "Instant erection, no formwork",
                  "Composite topping bonds units",
                  "Limited by transport weight",
                ],
              },
              right: {
                heading: "Post-tensioned floor plates",
                items: [
                  "Site-cast flat plates and bands",
                  "Spans 8-12 m on thin soffits",
                  "Banded plus distributed tendons",
                  "Balanced dead load controls camber",
                  "Punching shear detailed at columns",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The composite 7-mark",
              body: "'Explain composite construction with precast prestressed girders' is a Unit V regular. The mark-scoring spine: girder works alone (small Z) under dead load; deck added; composite section (large Z) takes live; interface shear designed; shored versus unshored checked separately. Close with one benefit sentence - depth saved where headroom is money.",
            },
            keyTerms: [
              { term: "Hollow-core slab", definition: "A pretensioned precast floor unit with longitudinal voids, spanning 8-16 m at low weight." },
              { term: "Composite construction", definition: "Precast prestressed girder acting with a cast-in-situ deck through designed horizontal shear transfer." },
              { term: "Banded tendons", definition: "Tendons grouped over column lines in flat plates, paired with distributed tendons in the other direction." },
            ],
            examQuestions: [
              {
                q: "Explain composite construction with precast prestressed girders and cast-in-situ decks. Why does the composite section raise the effective modulus, and which stages must be checked?",
                marks: 7,
                outline: [
                  "Describe the system: precast PSC girder erected, deck cast on top, interface shear connected.",
                  "Stage 1: girder alone (plus wet concrete if unshored) - girder-alone Z and stresses.",
                  "Stage 2: composite section with deck flange - larger Z carries live loads.",
                  "Explain the modulus gain: flange width contributes Z without contributing the same weight earlier.",
                  "Horizontal shear at interface: V·Q/(I·b) and designed ties per code.",
                  "Shored versus unshored: prop and the composite section takes everything; check both cases.",
                  "Benefits: shallower structure, faster erection, factory quality; example span band 15-35 m.",
                ],
              },
              {
                q: "Why is camber control a critical design issue in post-tensioned floors?",
                marks: 3,
              },
              {
                q: "State typical span-to-depth ratios for a PT flat plate and an RC flat slab.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Poles and sleepers",
            body: [
              "Railways are prestressing's biggest customer by count. The monoblock concrete sleeper is pre-tensioned on long-line beds: tendons run the full length of the bed through a chain of moulds, are tensioned once, and each mould is cast individually; steam curing brings the concrete to release strength within hours, the line is cut between units, and sleepers leave for the track at rates of hundreds per day. The design logic is severe: rail loading hammers the sleeper with impact and fatigue, so the prestress is deliberately heavy and the behaviour Class 1 - no tension under service - because a cracked sleeper under millions of load cycles is a maintenance liability. Bond does all the anchoring; there is no hardware to loosen.",
              "Poles are the other mass product. Electricity distribution and transmission poles are tapered members working as cantilevers - wind on the conductors, conductor tension at the tip, maximum moment at the base - so prestress is concentrated toward the face that will see tension. Hollow spun poles are made by centrifugal casting: the mould with its longitudinal tendons is spun at high speed, compacting a low-water concrete against the wall into a dense hollow tube, and the combination of spinning and prestressing yields members that resist decades of weather without the rot of timber or the corrosion maintenance of steel. Lighting masts, signal posts and fencing posts follow the same recipe in miniature.",
              "The engineering comparisons are exam favourites. Against timber: concrete sleepers and poles do not rot, are not eaten, are immune to the creosote-era preservative problems, and free the railways from scarce, varying-quality timber. Against steel: no painting cycle, no corrosion at ground line, lower lifetime cost despite higher weight - though the weight matters for transport and manual handling on track. Add the production note that clinches the 7-mark: both products exist because pre-tensioning's economics scale with repetition - one bed, one tensioning cycle, thousands of identical units - which is precisely the selection logic of Section 2.5.",
            ],
            bullets: [
              "Monoblock sleepers: pre-tensioned on long-line beds, one tensioning cycle per chain of moulds.",
              "Steam curing to release strength in hours; the line is cut between units.",
              "Design aim near Class 1: no tension under rail impact and fatigue - cracks are not tolerable.",
              "Bond is the only anchorage - nothing to loosen under millions of load cycles.",
              "Spun poles: centrifugal casting compacts a hollow dense section; cantilever design peaks moment at the base.",
              "Versus timber and steel: no rot, no painting, long life; higher weight is the accepted cost.",
            ],
            table: {
              caption: "Pole materials compared for the same duty.",
              headers: ["Aspect", "PSC pole", "Steel pole", "Timber pole"],
              rows: [
                ["Service life", "40-50 years", "good if painted", "limited by rot"],
                ["Maintenance", "minimal", "regular painting", "inspection and treatment"],
                ["Weight", "heaviest", "light", "moderate"],
                ["Corrosion/decay", "none significant", "rusts at ground line", "rots and is eaten"],
                ["Mass production", "spun, repetitive", "fabricated", "natural, variable"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Long-line sleeper production",
              caption: "From bare tendons to stacked sleepers in one shift cycle.",
              steps: [
                { label: "Tension tendons along the full bed", note: "one cycle serves every mould" },
                { label: "Cast concrete into the chain of moulds" },
                { label: "Steam cure to early transfer strength", note: "hours, not weeks" },
                { label: "Release and cut between units" },
                { label: "Stack, inspect and ship to track", note: "the bed reloops immediately" },
              ],
            },
            callout: {
              type: "exam",
              title: "Why pre-tensioning, asked every which way",
              body: "'Why are sleepers pre-tensioned?' gets asked as itself, as 'compare sleeper materials', and inside bridge questions. The three-part answer: mass production economics (beds amortise), bond durability (no anchorages under vibration), and Class 1 fatigue behaviour (no tension under millions of cycles). Same three points, every phrasing.",
            },
            keyTerms: [
              { term: "Monoblock sleeper", definition: "A one-piece pre-tensioned concrete railway sleeper produced on long-line beds." },
              { term: "Spun pole", definition: "A hollow tapered prestressed pole compacted by centrifugal casting in a spinning mould." },
              { term: "Long-line bed", definition: "A pre-tensioning casting bed, often 100-200 m, serving many moulds per tensioning cycle." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacture of pre-tensioned PSC sleepers and spun poles with sketches. Why is pre-tensioning the preferred system for these products?",
                marks: 7,
                outline: [
                  "Sleeper flow: tension tendons along the bed, cast into chained moulds, steam cure, cut between units.",
                  "Sketch: bed, abutments, tendons, moulds, cutting points.",
                  "Design demand: rail impact and fatigue - aim near Class 1, no service tension.",
                  "Bond-only anchorage: no hardware to loosen under cyclic loads.",
                  "Spun pole: mould with tendons spun; centrifugal force compacts dense hollow concrete.",
                  "Cantilever action: wind and conductor tension; moment peaks at the base.",
                  "Economics: one bed and one tensioning cycle per thousands of identical units - Section 2.5 logic.",
                ],
              },
              {
                q: "Why is spinning used for pole manufacture rather than ordinary casting?",
                marks: 3,
              },
              {
                q: "Why does a sleeper carry no anchorage hardware?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Pipes and tanks",
            body: [
              "Circular prestressing is the barrel-maker's trick perfected. A thin wall under internal pressure carries hoop tension T = p·R per unit height - for a circular tank, N = pD/2 per metre of wall. Concrete cannot take that tension, so the wall is wrapped with high-tensile wire wound under controlled tension: the wire squeezes the core into uniform hoop compression before any water arrives. Under the design head, the internal pressure first spends that compression; if the prestress is sized so a small residual compression remains at full head, the wall never sees tension and the tank never cracks - the Class 1 promise delivered around a circle. Domes, walls and floors of complete tanks are prestressed on the same principle, with circumferential wire around the wall and tendons following meridians where domes need them.",
              "Pipes come in two families. Non-cylinder pipes: a concrete core, wire wound directly onto it, and a mortar coating over the wire - the economy choice for gravity mains and moderate heads. Cylinder pipes: a steel cylinder is the core, wire is wound onto it, and mortar coats the outside - stiffer, tighter-jointed and suited to higher pumping heads. Joints are the quiet heroes: rubber-gasketed spigot-and-socket joints let each pipe carry its hoop prestress without dragging its neighbours. Tank construction adds one essential detail: the wall-base joint is made a sliding joint, because the circumferential prestress shortens the wall as it is applied, and a rigidly fixed base would crack; the wall must be free to breathe radially.",
              "Run the design numbers for a circular tank: diameter 24 m, water depth 5 m, wall 150 mm thick. Base pressure p = 9.81 x 5 = 49 kN/m2, hoop tension N = pD/2 = 49 x 12 = 588 kN per metre height. Left unstressed, the wall would carry 588/0.15 = 3.9 N/mm2 of tension - beyond concrete's capacity. Wound prestress must supply the full 588 kN per metre plus a residual, say 0.5 N/mm2 compression retained at full head, which needs 0.5 x 150,000 = 75 kN more: about 663 kN per metre of wire force, distributed over the height in proportion to the pressure triangle. The python snippet performs exactly this computation; in the exam, N = pD/2 plus a stated residual is the whole method.",
            ],
            bullets: [
              "Hoop tension per metre height: N = p·R = pD/2 - the formula the exam always wants.",
              "Wire winding pre-compresses the wall; internal pressure spends the compression - no tension at design head.",
              "Design rule: prestress = full hoop tension plus a stated residual compression (e.g. 0.5 N/mm2).",
              "Non-cylinder pipes: concrete core plus wound wire plus mortar coat - moderate heads, gravity mains.",
              "Cylinder pipes: steel cylinder core - higher heads, tighter gasketed joints for pumping mains.",
              "Tank wall-base joints slide, because prestressing shortens the circumference; rigid joints crack.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Circumferential prestress design for a circular tank wall; vary depth or residual to feel the sizing.",
              code: `# Circumferential prestress for a circular water tank wall
D = 24.0            # m, tank internal diameter
H = 5.0             # m, water depth
t = 150.0           # mm, wall thickness
gamma_w = 9.81      # kN/m3, unit weight of water

p = gamma_w * H               # kN/m2 at the base
N = p * D / 2.0               # kN per metre height, hoop tension
sigma_t = N * 1000.0 / t      # N/mm2 tension if left unstressed

residual = 0.5                # N/mm2 compression kept at full head
A_wall = t * 1000.0           # mm2 of wall per metre height
P_req = N * 1000.0 + residual * A_wall   # N of wire force per metre

print(f"base pressure {p:.1f} kN/m2")
print(f"hoop tension {N:.0f} kN per metre height")
print(f"unstressed wall tension {sigma_t:.2f} N/mm2")
print(f"wire prestress needed {P_req/1000.0:.0f} kN per metre")`,
            },
            diagram: {
              kind: "cycle",
              title: "Hoop equilibrium through a fill-empty cycle",
              caption: "The wall rides the circle between compression states.",
              steps: [
                { label: "Wire wound at controlled tension grips the core", note: "hoop compression locked in" },
                { label: "Tank empty: wall in pure circumferential compression", note: "no tension anywhere" },
                { label: "Water pressure builds hoop tension N = pD/2", note: "compression is consumed" },
                { label: "Full design head: small residual compression left", note: "crack-free by design" },
                { label: "Level drops: compression returns; the cycle closes", note: "repeat for the life of the tank" },
              ],
            },
            callout: {
              type: "exam",
              title: "The hoop numerical",
              body: "The tank question is always N = pD/2 plus a residual-compression statement. Memorise the worked numbers (D = 24 m, H = 5 m gives 588 kN/m; with 0.5 N/mm2 residual, about 663 kN/m of wire force) - they slot into whatever digits the paper offers after one substitution.",
            },
            keyTerms: [
              { term: "Circumferential prestressing", definition: "Hoop compression applied by tensioned wire wound around a pipe or tank wall." },
              { term: "Cylinder pipe", definition: "A pressure pipe with a steel cylinder core, wire winding and mortar coating for higher heads." },
              { term: "Sliding base joint", definition: "The wall-base connection of a PSC tank that permits radial wall movement during prestressing." },
            ],
            examQuestions: [
              {
                q: "Explain circumferential prestressing of pipes and circular tanks. Design the wire prestress per metre height for a tank of 24 m diameter, 5 m water depth, wall 150 mm thick, retaining 0.5 N/mm2 residual compression at full head.",
                marks: 7,
                outline: [
                  "Principle: wound wire pre-compresses the wall; pressure spends the compression.",
                  "Hoop tension per metre height: N = pD/2 with p = gamma·H.",
                  "Compute p = 9.81 x 5 = 49 kN/m2 at the base.",
                  "N = 49 x 24/2 = 588 kN per metre height.",
                  "Unstressed wall tension: 588/0.15 = 3.9 N/mm2 - beyond concrete capacity; prestress is mandatory.",
                  "Residual requirement: 0.5 N/mm2 x 150,000 mm2 = 75 kN; total wire force about 663 kN per metre.",
                  "Distribute over height per the pressure triangle; note the sliding base joint and pipe families.",
                ],
              },
              {
                q: "Why must the wall-base joint of a prestressed concrete tank be a sliding joint?",
                marks: 3,
              },
              {
                q: "Distinguish cylinder from non-cylinder prestressed pipes.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Bridges",
            body: [
              "Prestressed concrete owns the medium and long span range of bridge building because it attacks the very thing that kills long spans: self-weight. A lighter, crack-free girder means longer clear distances for the same substructure, and durability under weather and wheel loads that reinforced decks struggle to match. The standard ladder: precast pretensioned I- and T-girders with composite decks for roughly 15 to 35 m - the workhorses of road and rail viaducts; cast-in-situ or precast box girders for 40 m and beyond; and, at the top of the ladder, balanced-cantilever and cable-supported construction whose record concrete spans pass 300 m.",
              "The construction method is half the design. Span-by-span erection lifts match-cast segments onto gantries and threads post-tensioning through them to make each span continuous. Incremental launching casts the girder in segments behind the abutment and pushes the growing bridge out over the spans - ideal for constant-depth decks over inaccessible ground. Balanced cantilever builds outward symmetrically from each pier, segments stitched by cantilever tendons anchored in the top slab, then continuity tendons in the bottom slab after the midspan closures - the tendon families literally draw the moment diagram of the finished structure. Each method dictates its prestress layout, and friction over long tendon paths demands the both-end tensioning of Section 1.5.",
              "Cross-section choice follows the demands. I-girders: simple, repetitive, composite-friendly. Box girders: torsionally stiff - the only sane choice for curved viaducts - with room for tendons inside the webs and anchor blisters at the diaphragms. Voided slabs serve the short end; single-cell boxes the long end. Detailing completes the list: diaphragms at supports stiffen the section and house the anchorages; wide decks carry transverse prestress across their flanges in addition to the main longitudinal tendons; and the durability lessons of Unit II - grout quality, vents, drainage - are nowhere more expensive to learn than under traffic over a river.",
            ],
            bullets: [
              "Standard ladder: precast I/T girders 15-35 m; box girders from 40 m; balanced cantilevers past 300 m at the record.",
              "Span-by-span erection: match-cast segments on gantries, continuity prestress per span.",
              "Incremental launching: cast behind the abutment, push out over the spans - constant-depth decks.",
              "Balanced cantilever: cantilever tendons in the top over piers, continuity tendons in the bottom at closures.",
              "Box sections carry torsion - the choice for curved alignments; anchor blisters and diaphragms house the tendons.",
              "Long tendons mean friction: jack from both ends; grouting quality is the durability frontier.",
            ],
            table: {
              caption: "Erection methods and their span bands.",
              headers: ["Method", "Typical span", "Signature situation"],
              rows: [
                ["Precast I-girder + composite deck", "about 15-35 m", "repetitive viaducts, road and rail"],
                ["Cast in place on falsework", "up to about 60 m", "accessible sites, low heights"],
                ["Span-by-span segments", "about 30-60 m", "urban viaducts with gantries"],
                ["Incremental launching", "about 40-70 m", "spans over water, rail, deep valleys"],
                ["Balanced cantilever", "70 m to beyond 300 m", "long spans, deep gorges, shipping channels"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A PSC box-girder bridge, deck to foundation",
              caption: "Every layer carries prestress or serves it.",
              layers: [
                { label: "Deck slab: transverse prestress plus reinforcement", note: "spreads wheel loads across the box" },
                { label: "Longitudinal tendons in webs and slabs", note: "cantilever and continuity families" },
                { label: "Box webs and bottom slab", note: "bending and torsion resistance" },
                { label: "Diaphragms, blisters, anchorages", note: "concentrate and turn the forces" },
                { label: "Bearings, piers, foundations", note: "PSC continues below the deck" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the cantilever scheme",
              body: "The long-answer favourite is 'explain segmental construction with sketches'. Draw a two-pier balanced cantilever with segments, label the top-slab cantilever tendons over the piers, the midspan closure, and the bottom-slab continuity tendons - the tendon families mirroring the moment diagram is the sentence that earns the last mark.",
            },
            keyTerms: [
              { term: "Balanced cantilever", definition: "Bridge construction extending symmetrically from piers by match-cast segments stressed by cantilever tendons." },
              { term: "Incremental launching", definition: "Casting a constant-depth girder behind the abutment and pushing it hydraulically over the spans." },
              { term: "Match-cast segments", definition: "Precast box segments cast against their neighbours so the joints fit without mortar." },
            ],
            examQuestions: [
              {
                q: "Describe the construction methods for prestressed concrete bridges with sketches, and explain the tendon families used in balanced cantilever construction.",
                marks: 7,
                outline: [
                  "Method ladder: precast girders, span-by-span, incremental launching, balanced cantilever.",
                  "Precast I-girders 15-35 m with composite decks - the repetitive viaduct standard.",
                  "Span-by-span: match-cast segments on gantries, continuity prestress each span.",
                  "Incremental launching: cast behind abutment, launch over spans; constant depth suits it.",
                  "Balanced cantilever: build out from piers; sketch segments, closures.",
                  "Tendon families: cantilever tendons in the top slab over piers; continuity tendons in the bottom slab after closure.",
                  "Note friction over long paths - jack from both ends; box girders for torsion and curvature.",
                ],
              },
              {
                q: "Why are box sections preferred for curved viaducts?",
                marks: 2,
              },
              {
                q: "What is incremental launching and when is it the right choice?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "IS 1343 provisions and case studies",
            body: [
              "IS 1343 is the prestressed concrete code of India - first published in 1960, revised in 1980 and again in 2012 - and it is the single document this whole subject answers to. Its coverage runs the full length of the course: materials and minimum grades (the 1980 text set M40 for pre-tensioned and M30 for post-tensioned work); jacking and transfer stress limits in the steel (the teaching values are about 0.8 f_u at jacking and 0.7 f_u after seating); permissible concrete stresses at transfer and service (about half the transfer strength and a third of the characteristic strength); loss estimation; anchorage-zone design; shear and principal tension; the limit-state framework with a 1.5 load factor on dead plus live; class definitions and crack-width limits; and construction clauses covering curing, ducts, grouting, tolerances and testing. Its companions do the rest: IS 456 for the ordinary reinforcement mixed in, IS 3370 for liquid-retaining structures, the IRC codes for road bridges.",
              "The numbers worth memorising compress to one card: minimum grades M40/M30; 0.8 f_u jacking, 0.7 f_u after transfer; 0.5 f_ci and 0.33 f_ck concrete limits; classes 1/2/3 with crack widths about 0.1 mm aggressive and 0.2 mm benign; load factor 1.5; transmission length 80-100 wire diameters; total losses 15-25 percent. Every worked example in this file used those numbers, which is the point: the code is not separate from the design, it is the boundary within which every Unit III and Unit IV computation moved. Quote clause values with 'about' honesty - examiners respect a stated approximation more than a false precision.",
              "Four case studies anchor the subject in built fact. Luzancy, over the Marne in France (1946): Freyssinet's first fine prestressed bridge, a span of about 55 m assembled from precision precast segments - proof that the system worked. Walnut Lane Memorial Bridge, Philadelphia (1950): the Magnel-Blaton system's American debut, spans about 48 m, the bridge that launched prestressed construction in the United States. The Panval Nadi viaduct on India's Konkan Railway (1990s): prestressed girders threading a deep valley alignment - the workaday mastery of difficult terrain. Delhi Metro's viaducts (2000s onward): precast post-tensioned U-girders of roughly 25-30 m spans, mass-produced and erected at night between traffic windows - prestressing as industrial logistics. Four eras, four lessons: proof, transfer of technology, terrain, and repetition.",
            ],
            bullets: [
              "IS 1343 (1960, 1980, 2012): materials, stress limits, losses, anchorage zones, shear, limit states, classes, QC.",
              "Companions: IS 456 for ordinary reinforcement, IS 3370 for liquid-retaining work, IRC codes for bridges.",
              "Memory card: M40/M30 grades; 0.8 f_u jacking and 0.7 f_u after transfer; 0.5 f_ci and 0.33 f_ck limits.",
              "Classes and cracks: 1/2/3 with widths about 0.1 mm aggressive, 0.2 mm benign; load factor 1.5.",
              "Transmission length 80-100 wire diameters; total losses 15-25 percent - the rest of the card.",
              "Case quartet: Luzancy 1946 (proof), Walnut Lane 1950 (technology transfer), Panval Nadi (terrain), Delhi Metro (logistics).",
            ],
            table: {
              caption: "IS 1343 numbers worth memorising (teaching values).",
              headers: ["Item", "Value (about)"],
              rows: [
                ["Minimum grade, pre-tensioned", "M40 (1980 code)"],
                ["Minimum grade, post-tensioned", "M30 (1980 code)"],
                ["Jacking stress in steel", "0.8 f_u"],
                ["Steel stress after transfer", "0.7 f_u"],
                ["Concrete compression at transfer", "0.5 f_ci"],
                ["Concrete compression at service", "0.33 f_ck"],
                ["Load factor, dead + live", "1.5"],
                ["Crack widths, Class 3", "0.1 mm aggressive, 0.2 mm benign"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "What governs each application family",
              caption: "Scale of production against the governing demand.",
              axes: { x: "Governing demand: tightness and durability to strength and staging", y: "Production scale: mass-produced to bespoke" },
              quadrants: [
                { label: "Tanks and pipes", note: "tightness governs: circumferential Class 1 prestress, IS 3370 companion" },
                { label: "Sleepers and poles", note: "fatigue plus economy: pre-tensioned long-line mass production" },
                { label: "Floors and transfer girders", note: "serviceability and camber: post-tensioned, load-balanced drapes" },
                { label: "Segmental bridges", note: "strength and staging: cantilever tendons, launching, limit-state checks" },
              ],
            },
            callout: {
              type: "exam",
              title: "Code question etiquette",
              body: "When quoting IS 1343, name the clause idea and use 'about' for values (0.5 f_ci, 0.33 f_ck, 1.5 factor). Papers accept the teaching values, and a candidate who signals awareness that they are approximations reads like an engineer, not a parrot. Pair every number with the stage it belongs to.",
            },
            keyTerms: [
              { term: "IS 1343", definition: "The Indian Standard code of practice for prestressed concrete, first 1960, revised 1980 and 2012." },
              { term: "Walnut Lane Bridge", definition: "Philadelphia, 1950; Magnel-Blaton system; first major prestressed bridge in the United States." },
              { term: "Luzancy Bridge", definition: "Freyssinet's 1946 bridge over the Marne, about 55 m; the prototype of modern segmental construction." },
            ],
            examQuestions: [
              {
                q: "Summarise the important provisions of IS 1343 covering materials, permissible stresses, losses, anchorage zones and limit states. Name two landmark prestressed structures and one lesson each offers.",
                marks: 7,
                outline: [
                  "Materials: minimum grades M40 pre-tensioned and M30 post-tensioned (1980); HT steel per IS 1785/6003/2090.",
                  "Steel limits: about 0.8 f_u at jacking, 0.7 f_u after transfer.",
                  "Concrete limits: about 0.5 f_ci at transfer, 0.33 f_ck at service; classes 1/2/3 tension rules.",
                  "Losses: computed, not assumed; immediate and time-dependent families; 15-25 percent band.",
                  "Anchorage zones: end-block bursting design by coefficient curves.",
                  "Limit state: load factor 1.5 on dead plus live; crack-width limits about 0.1-0.2 mm.",
                  "Case studies: Luzancy 1946 (proof of the system) and Walnut Lane 1950 (US technology transfer), with one lesson each.",
                ],
              },
              {
                q: "State the minimum concrete grades for pre- and post-tensioned work per IS 1343 (1980).",
                marks: 2,
              },
              {
                q: "What did the Walnut Lane Bridge of 1950 prove, and by which system was it built?",
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
        "RGPV CE-702(A) papers load the marks onto numerical territory - stress checks, losses, the Magnel design zone, shear and ultimate flexure - with systems and applications supplying the definitional and sketch questions. Allocate revision hours in roughly the ratios below, and keep one full worked slot per unit regardless of its weight.",
      ],
      weightedTopics: [
        { topic: "Losses of prestress (all six, with the friction law and the total ledger)", weight: "8-12 marks", note: "Near-guaranteed numerical; derive each formula, then compute the running ledger to about 19 percent." },
        { topic: "Stress-concept numericals: four checks at transfer and service", weight: "10-14 marks", note: "The banker question; the 300 x 600 running example solves it in one page." },
        { topic: "Pre- vs post-tensioning; Freyssinet, Magnel-Blaton, Lee-McCall systems", weight: "8-12 marks", note: "Sketch-driven; practise the three anchorage drawings until each takes three minutes." },
        { topic: "Load balancing: derive w = 8Pe/L^2 and design the unbalanced residue", weight: "6-10 marks", note: "Name T.Y. Lin; one numerical plus the residual moment." },
        { topic: "Kern, limiting zone, pressure line and concordant cables", weight: "6-10 marks", note: "Short derivations plus sketches; beware the kern-point swap trap." },
        { topic: "Magnel design: required Z and the cable zone (M-sec diagram)", weight: "8-12 marks", note: "The Unit IV numerical; derive Z at least (M2 - M1)/f_cc, then e_min and e_max." },
        { topic: "End blocks: bursting, spalling and reinforcement design", weight: "6-10 marks", note: "Sketch the dispersal cone; quote 0.2-0.3 of the jacking force." },
        { topic: "Shear and principal tensile stress", weight: "6-8 marks", note: "One substitution of f_pt = 0.5(sqrt(sigma^2 + 4v^2) - sigma) is the usual ask." },
        { topic: "Ultimate flexure by strain compatibility", weight: "7-10 marks", note: "Five-step pipeline to M_u; check the 1.5 load factor at the end." },
        { topic: "Applications: pipes and tanks hoop design, sleepers, classes, IS 1343, case studies", weight: "8-12 marks", note: "One application numerical is common - N = pD/2 plus residual memorised cold." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming five days a week at one to two hours, this schedule covers every unit once for understanding and once for revision, closing with timed papers. Maintain one running formula sheet and one worked-example register - the running beam of this file is your register's first entry.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - concept, materials, the loss families", tasks: ["Derive f_top and f_bot from superposition; declare the sign convention", "Write the loss-strain argument for HT steel with the 0.0003 versus 0.0055 numbers", "Compute elastic, creep and shrinkage losses for the running beam by hand"] },
        { week: "Week 2", focus: "Unit I finished - friction, slip, relaxation, totals", tasks: ["Derive P_x = P_0 e^-(mu·alpha + k·x) once on paper", "Run the python loss ledger; vary phi, slip and relaxation", "Close with the 15-25 percent band and a self-quiz on all six mechanisms"] },
        { week: "Week 3", focus: "Unit II - systems and hardware", tasks: ["Draw pre-tensioning bed, Freyssinet anchorage, Magnel sandwich plate, Lee-McCall nut from memory", "Build the pre- versus post-tensioning comparison table", "Walk the hardware checklist: plates, trumpets, helices, vents, couplers"] },
        { week: "Week 4", focus: "Unit III - analysis machinery", tasks: ["Full four-check numerical on the running beam (ten minutes, clean table)", "Load balancing: derive w = 8Pe/L^2 and one residual-moment design", "Kern and pressure line: sketch both for the running numbers (100 mm kern, 117-175 zone)"] },
        { week: "Week 5", focus: "Unit IV - design machinery", tasks: ["Magnel: required Z and the cable zone; redraw the M-sec polygon", "End block: one anchorage design with 0.25 coefficient", "Shear f_pt substitution and the full ultimate-flexure pipeline to M_u = 438 kN·m"] },
        { week: "Week 6", focus: "Unit V plus full revision", tasks: ["Tank hoop design and sleeper/pole manufacturing sketches", "Memorise the IS 1343 card; rehearse the four case studies", "Two timed papers; rebuild the formula sheet from memory on the last day"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The last day is for condensing the subject onto one sheet of formulas and five sketches. Nothing new gets learned; everything already known gets sharper.",
      ],
      bullets: [
        "Rewrite the four stress inequalities and the two derived results: Z at least (M2 - M1)/f_cc and the cable zone e_min = M2/P - Z/A, e_max = Z/A + M1/P.",
        "Redraw the five sketches from memory: pre-tensioning bed, Freyssinet anchorage, kern section with pressure line, end-block bursting cone, balanced cantilever tendon families.",
        "The loss ledger by heart: m·f_c elastic, phi·m·f_c creep, 0.0003 E_s shrinkage, friction law, E_s·delta/L slip, 5-8 percent relaxation; totals 15-25 percent.",
        "The running beam's numbers end to end: 6.67/10.0/5.0/14.44 stress terms, kern 100 mm, zone 117-175 mm, M_u 438 against 390 required.",
        "IS 1343 card: M40/M30, 0.8 f_u and 0.7 f_u, 0.5 f_ci and 0.33 f_ck, classes 1/2/3, cracks 0.1-0.2 mm, factor 1.5.",
        "Tank numbers on the sheet: N = pD/2; D = 24 m, H = 5 m gives 588 kN/m plus 0.5 N/mm2 residual = 663 kN/m. Sleep, and pack calculator, scale and two sharp pencils.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Write the governing formula before any numbers - P/A, P·e/Z, M/Z for stresses; the friction law for losses; 0.36 f_ck·b·x = A_p·f_pb for ultimate. Method marks are awarded separately from arithmetic.",
        "Sketch and label in every answer - anchorage assemblies, kern bands, cable profiles, end-block cones, cantilever tendon families. A labeled sketch routinely carries two marks of a seven.",
        "Declare the sign convention (compression positive) and the stage (transfer or service) at the top of every numerical - the two commonest sources of lost marks are sign and stage mix-ups.",
        "Quote code values with 'about' and name the stage they belong to; state assumptions (losses already deducted, P at transfer) before substituting.",
        "Time-box: 2-mark definitions in 3 minutes, 3-mark shorts in 7, 7-mark numericals in 15; reserve the final 10 minutes to re-check arithmetic, units and the one verdict line per check.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using M2 at the transfer stage - transfer means self-weight M1 only; the full service moment arrives months later with P_e.",
        "Forgetting that sequential post-tensioning halves the average elastic-shortening loss - students apply the full m·f_c to every tendon.",
        "Charging friction and anchorage-slip losses to pre-tensioned members - those two mechanisms exist only where tendons slide through ducts.",
        "Swapping the kern points: the lower kern distance is Z_t/A (top-fiber modulus), the upper is Z_b/A - the rectangle's d/6 hides the swap, so state the general rule first.",
        "Sign chaos in f_top and f_bot - declare compression positive, then keep P·e/Z negative at the top fiber when the tendon is below the centroid.",
        "Using f_pe instead of f_pb at ultimate, or forgetting the 1.5 load factor on the demand side - ultimate capacity and effective prestress live on different planets.",
        "Computing hoop tension as pD instead of pD/2 in tank and pipe questions - diameter entered where radius belonged; the residual-compression requirement then compounds the error.",
      ],
    },
  ],
};
