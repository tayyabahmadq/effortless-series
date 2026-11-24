/**
 * Academics - RGPV Civil Engineering 6th-semester subject: CE-603(B)
 * Precast & Modular Construction.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce603b: AcademicSubject = {
  id: "ce-603-b",
  code: "CE-603(B)",
  title: "Precast & Modular Construction",
  semester: "VI Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to precast concrete and modular construction: history and materials, factory production of beams, columns, slabs and walls, volumetric and panel modular systems, wet, dry and seismic connections, and the transport, erection and case studies that close the loop.",
  description:
    "Five units walk the reader from the history and economics of precast through the production of beams, columns, slabs, walls, stairs, piles and pipes, into modular coordination, 3D volumetric and 2D panel systems, then through connection design, corbels, grouting and seismic detailing, and finally to transport, rigging, erection tolerances and landmark case studies of precast bridges, modular housing and parking structures.",
  accentColor: "#8b5cf6",
  emoji: "PC",
  unitCount: 5,
  totalSections: 25,
  units: [
    // ===================== UNIT I =====================
    {
      number: 1,
      roman: "I",
      title: "Introduction to Precast Concrete",
      summary:
        "History, advantages, materials, and the cast-in-situ versus precast and factory versus site casting choices that frame every later unit.",
      chapter: {
        number: "01",
        title: "Introduction to Precast Concrete",
        intro:
          "Unit I sets the stage for precast construction: the historical evolution of off-site concrete casting, the advantages and limitations that drive its use, the materials that distinguish precast mixes, the precast versus cast-in-situ decision, and the factory versus site casting choice with its tolerance implications.",
        inOneBreath:
          "Precast concrete is concrete cast and cured away from its final position; modern precast began with Monier's 1849 reinforced planters and Freyssinet's 1928 prestressing patent; post-war Europe rebuilt rapidly with large-panel systems; precast trades speed, quality and economy for connectivity complexity and transport cost; mixes use low water-cement ratios, plasticisers and high-strength cements; factory casting enables controlled curing and tight tolerances while site casting suits bulky one-off elements.",
        sections: [
          // ----- 1.1 History -----
          {
            number: "1.1",
            title: "History and Evolution of Precast Concrete",
            body: [
              "Precast concrete, in its broad sense, is as old as Roman construction — segments of aqueducts and arches were carved off-site and hoisted into place. The modern chapter begins in 1849 when Joseph Monier, a French gardener, patented reinforced concrete planters and troughs, recognising that iron bars could carry tension that plain concrete cannot. By 1853 Francois Coignet was casting structural RC beams in workshops. The decisive leap was Eugene Freyssinet's 1928 patent for prestressing: by stretching high-tensile steel against hardened concrete, engineers could span twenty metres and more with slender, crack-free girders.",
              "After World War II the demand for rapid reconstruction made precast the obvious answer. Britain, France, the USSR and Scandinavia erected large-panel housing systems by the thousand, the Soviet 'Khrushchyovka' being the most replicated. These systems traded architectural variety for speed and economy, and their failures — leaking joints, monotony, thermal bridges — taught the industry as much as their successes. By the 1970s automated batching, steam-curing chambers and mechanised demoulding had transformed the yard into a true factory. Hollow-core slabs extruded on long-line beds became the workhorse of every commercial building.",
              "Today precast is an integrated digital industry. BIM models drive automated steel cutting and bending; RFID tags follow each element from mould to site; prestressing beds produce bridge girders spanning forty metres. Hybrid construction — precast columns and beams with cast-in-situ slabs, or precast cores with steel frames — combines factory precision with in-situ redundancy. India is now adopting precast at scale for metro viaducts, flyovers, mass housing at Pradhan Mantri Awas Yojana sites, and IT campuses. Three-dimensional printed concrete and modular volumetric units are converging with precast to deliver whole buildings in weeks rather than months."
            ],
            bullets: [
              "Roman aqueducts used prefabricated stone voussoirs — the conceptual ancestor of precast.",
              "Joseph Monier (1849) patented RC planters, the first commercial reinforced precast product.",
              "Francois Coignet (1853) cast structural RC beams in workshops ahead of site erection.",
              "Eugene Freyssinet (1928) patented prestressing, enabling long-span crack-free girders.",
              "Post-war Europe rebuilt with large-panel systems such as the Soviet Khrushchyovka.",
              "1970s plants added steam curing and mechanised demoulding for true factory production.",
              "Today BIM, RFID and 3D printing integrate with precast to compress whole-building delivery."
            ],
            table: {
              caption: "Milestones in precast concrete evolution.",
              headers: ["Era", "Milestone", "Significance"],
              rows: [
                ["1849", "Monier's RC planters", "First commercial reinforced precast product"],
                ["1853", "Coignet's workshop beams", "Precast structural elements cast off-site"],
                ["1928", "Freyssinet's prestressing", "Long-span crack-free girders became feasible"],
                ["1945-60", "Post-war housing", "Large-panel systems rebuilt Europe rapidly"],
                ["1970s", "Automated plants", "Steam curing and demoulding scaled output"],
                ["2000s+", "BIM and modular", "Digital twins, RFID and volumetric integration"]
              ]
            },
            diagram: {
              kind: "flow",
              title: "Five milestones in the evolution of precast",
              caption: "From Monier's planters to digital twin plants — each step widened span, scale or integration.",
              steps: [
                { label: "1849 Monier planters", note: "RC recognised" },
                { label: "1928 Freyssinet prestress", note: "Long spans unlocked" },
                { label: "1945-60 large-panel housing", note: "Mass reconstruction" },
                { label: "1970s automated plants", note: "Factory production" },
                { label: "2000s+ BIM and modular", note: "Digital integration" }
              ]
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Most RGPV 7-mark questions on 'history of precast' expect at least five milestones with year, inventor and significance — write the table above verbatim, then add one line each on Indian adoption."
            },
            keyTerms: [
              { term: "Precast concrete", definition: "Concrete cast and cured at a location other than its final position, usually in a factory or casting yard." },
              { term: "Prestressing", definition: "Permanent compressive stress applied to concrete before service loading, increasing span capacity and crack resistance." },
              { term: "Large-panel system", definition: "A precast building method using factory-cast wall and floor panels assembled on site for mass housing." }
            ],
            examQuestions: [
              {
                q: "Trace the history and evolution of precast concrete from the 1850s to the present day, citing five major milestones with their inventors and significance.",
                marks: 7,
                outline: [
                  "Define precast concrete and distinguish it from cast-in-situ.",
                  "1849 — Joseph Monier patented reinforced concrete planters, the first commercial precast RC product.",
                  "1853 — Francois Coignet cast structural RC beams in workshops, extending precast to buildings.",
                  "1928 — Eugene Freyssinet patented prestressing, unlocking long-span crack-free girders.",
                  "1945-60 — post-war large-panel systems rebuilt Europe; Soviet Khrushchyovka as exemplar.",
                  "1970s — automated batching, steam curing and mechanised demoulding scaled factory output.",
                  "Present — BIM, RFID, 3D printing and volumetric modular units integrate with precast."
                ]
              },
              {
                q: "Define precast concrete and state two advantages that drove its post-war adoption in Europe.",
                marks: 2
              },
              {
                q: "Name three current Indian applications where precast construction is preferred over cast-in-situ.",
                marks: 3
              }
            ]
          },
          // ----- 1.2 Advantages and Limitations -----
          {
            number: "1.2",
            title: "Advantages and Limitations of Precast Construction",
            body: [
              "Precast construction's central promise is factory-grade quality under controlled conditions. Concrete is batched, placed, vibrated and cured in a sheltered yard with measured temperature and humidity, so strengths are higher, finishes cleaner and dimensional tolerances ten times tighter than site-cast work. Repetition makes the process learnable: a crew casting its hundredth column has ironed out every bug. Casting and curing proceed in parallel with foundation work on site, so the project critical path shrinks by weeks or months. Prestressing, hard to apply on a cluttered site, becomes routine on a long-line bed.",
              "The limitations are equally real. Precast demands a heavy initial investment in moulds, plant and gantry cranes, viable only when the order book is steady. Each element must be designed twice — once as a finished member, once as a handling and lifting body that survives stripping, transport and erection loads. Connections between elements are the perennial Achilles heel: joints leak, leak again under thermal cycling, and demand careful detailing. Transport imposes a hard ceiling — public road geometry limits element width to about 3.5 metres and length to about 15 metres without police escort.",
              "The honest summary is that precast excels wherever repetition, span or quality dominates — metro viaducts, stadia, parking garages, mass housing — and struggles where one-off architectural form or restricted site access rules. Hybrid structures, where precast columns and beams carry a cast-in-situ slab, often strike the best balance. The designer's task is to weigh the cost of mould amortisation against the time saved on site, and to detail joints so that water, fire and seismic demands are met without eroding the factory's quality advantage."
            ],
            bullets: [
              "Controlled factory environment yields higher strength, better finish and tighter tolerance.",
              "Parallel casting and foundation work shrinks the project critical path significantly.",
              "Prestressing and automation are routine in a plant but hard on a cluttered site.",
              "High initial mould and crane investment is viable only with steady, repetitive orders.",
              "Elements must be designed for handling and erection loads, not just service loads.",
              "Joints between precast units are the persistent weak point for water, fire and seismic action.",
              "Road width and bridge clearances limit element size to about 3.5 m wide and 15 m long."
            ],
            codeExample: {
              language: "text",
              caption: "Quantitative comparison of precast vs cast-in-situ metrics.",
              code: `Metric                      Precast        Cast-in-situ
--------------------------  -----------    ------------
On-site programme           6 months       18 months
Quality variance (sigma)    Low (2 mm)     Moderate (6 mm)
Formwork reuse              500+ pours     1 pour
Crew skill requirement      Factory        Site general
Transport cost              +10%           Negligible
Joint detailing effort      High           Low (monolithic)
Initial plant investment    High           Low
Best fit                    Repetitive     Bespoke / one-off`
            },
            diagram: {
              kind: "compare",
              title: "Precast strengths vs its persistent limitations",
              caption: "Where precast wins and where it strains — weigh both before specifying.",
              left: {
                heading: "Strengths",
                items: [
                  "Factory-grade quality and finish under controlled curing",
                  "Tighter tolerances and dimensional consistency",
                  "Parallel casting shortens the critical path",
                  "Prestressing routine on long-line beds",
                  "Lower on-site labour and formwork cost"
                ]
              },
              right: {
                heading: "Limitations",
                items: [
                  "High mould and plant investment needs steady orders",
                  "Each element designed for handling as well as service",
                  "Joints leak and demand careful detailing",
                  "Transport caps element width near 3.5 m",
                  "One-off architectural form does not amortise moulds"
                ]
              }
            },
            callout: {
              type: "warning",
              title: "Beware the brittle joint",
              body: "Every advantage of precast is lost if connections are under-detailed. The 1970s large-panel housing failures traced to leaking, weak joints, not to the panels themselves. Always treat connections as the structural system, not as an afterthought."
            },
            keyTerms: [
              { term: "Critical path", definition: "The longest chain of dependent activities in a project; precast shortens it by parallel off-site casting." },
              { term: "Mould amortisation", definition: "Spreading the cost of a steel mould over the number of casts it produces; only viable for repetitive elements." },
              { term: "Hybrid structure", definition: "A building mixing precast and cast-in-situ construction to balance factory quality and on-site continuity." }
            ],
            examQuestions: [
              {
                q: "Discuss the advantages and limitations of precast concrete construction. When is hybrid construction preferred over pure precast?",
                marks: 7,
                outline: [
                  "List four factory advantages: quality, tolerance, parallel casting, prestressing.",
                  "List four limitations: mould cost, double design of elements, joint complexity, transport ceiling.",
                  "Explain the 3.5 m width and 15 m length transport limit and its design consequences.",
                  "Describe the Achilles heel: connections leak and demand careful detailing.",
                  "Define hybrid structure as precast columns and beams with cast-in-situ slabs.",
                  "Give three cases where hybrid is preferred: seismic zones, irregular form, transfer floors.",
                  "Conclude that precast wins on repetition, hybrid on balance, cast-in-situ on one-off geometry."
                ]
              },
              {
                q: "State two transport limitations that constrain precast element size.",
                marks: 2
              },
              {
                q: "Why must a precast element be designed for handling loads as well as service loads?",
                marks: 3
              }
            ]
          },
          // ----- 1.3 Materials -----
          {
            number: "1.3",
            title: "Materials for Precast Concrete",
            body: [
              "Precast mixes differ from ordinary site concrete. Strengths of 50 to 60 MPa are routine, water-cement ratios fall between 0.35 and 0.45, and workability is engineered with superplasticisers rather than extra water. Cement content is high — typically 400 to 500 kg per cubic metre — and the cement itself is often Portland pozzolana or slag-blended to control heat and improve durability. Aggregates must be clean, graded and abrasion-resistant because the surface finish is part of the product. Many plants use self-compacting concrete for thin or heavily reinforced sections to eliminate vibration honeycombing.",
              "Reinforcement in precast extends beyond bar cages. Prestressing strands, typically seven-wire low-relaxation steel of 12.5 mm or 15.2 mm diameter, supply the compressive prestress that lets slender beams span far. Non-prestressed elements use high-yield deformed bars of 500 MPa yield, fabricated by automated bending machines driven directly from the BIM model. Fittings — lifting anchors, splice sleeves, threaded couplers — are cast in during moulding and must be precisely located. Surface reinforcement such as welded wire mesh controls shrinkage cracking in thin panels. Every piece of steel is tracked by bar mark and element ID.",
              "Materials for connections deserve separate attention. Bearing pads of neoprene or rubber distribute load and accommodate rotation at beam seats. Grout — non-shrink, cementitious, often epoxy-modified — fills splice sleeves and shear keys after erection. Steel plates and angles, hot-dip galvanised or painted, form embedded corbel seats and bracket connections. Sealants — polysulphide, polyurethane or silicone — weatherproof the joints. Each accessory is specified by performance, not brand: minimum strength, elongation, hardness and weathering grade. Materials form a system, and a precast designer must master them all, not only the concrete."
            ],
            bullets: [
              "Precast concrete routinely reaches 50-60 MPa with w/c 0.35-0.45 and high cement content.",
              "Superplasticisers deliver workability at low w/c without bleeding or honeycombing.",
              "Self-compacting concrete is used for thin or heavily reinforced sections to skip vibration.",
              "Seven-wire low-relaxation strands of 12.5 or 15.2 mm supply prestress in long-line beds.",
              "Fe 500 HYSD bars are bent by automated machines reading the BIM bar-bending schedule.",
              "Lifting anchors, splice sleeves and couplers are cast in during moulding, located to millimetre.",
              "Neoprene pads, non-shrink grout and polysulphide sealant complete the connection system."
            ],
            table: {
              caption: "Typical precast mix and material specifications.",
              headers: ["Component", "Specification", "Purpose"],
              rows: [
                ["Cement", "OPC 43 + 30% fly ash or slag", "Strength and heat control"],
                ["Water-cement ratio", "0.35 - 0.45", "Low permeability, high strength"],
                ["Fine aggregate", "Zone II sand, FM 2.6-2.9", "Workability and surface finish"],
                ["Coarse aggregate", "20 mm crushed, graded", "Skeleton and wear resistance"],
                ["Admixture", "Polycarboxylate superplasticiser", "High workability at low w/c"],
                ["Steel", "Fe 500 HYSD bars, 7-wire strands", "Tension and prestress"],
                ["Embeds", "Lifting anchors, splice sleeves", "Handling and connection"]
              ]
            },
            diagram: {
              kind: "layers",
              title: "The material stack behind a precast element",
              caption: "Each layer contributes one property; dropping any one weakens the finished member.",
              layers: [
                { label: "Matrix", note: "OPC + SCM cement paste, w/c 0.35-0.45, 50-60 MPa" },
                { label: "Skeleton", note: "500 MPa HYSD bars and 7-wire prestressing strands" },
                { label: "Fittings", note: "Lifting anchors, splice sleeves, threaded couplers" },
                { label: "Bearing", note: "Neoprene pads and galvanised steel corbel seats" },
                { label: "Jointing", note: "Non-shrink grout and polysulphide sealant" }
              ]
            },
            callout: {
              type: "tip",
              title: "Specification tip",
              body: "Spec connection accessories by performance, not brand: minimum strength, elongation, hardness and weathering grade. This lets the contractor substitute locally available products that meet the performance, avoiding delay claims and cost overruns."
            },
            keyTerms: [
              { term: "Seven-wire strand", definition: "A prestressing tendon of six helically wound wires around a central king wire, used in long-line pretensioning." },
              { term: "Non-shrink grout", definition: "A cementitious or epoxy grout formulated to maintain or slightly expand its volume on setting, ensuring full contact in sleeves and shear keys." },
              { term: "Self-compacting concrete", definition: "A highly flowable mix that fills moulds and encapsulates reinforcement without vibration, used in thin or congested precast sections." }
            ],
            examQuestions: [
              {
                q: "Describe the materials used in precast concrete, including the mix, reinforcement, prestressing steel and connection accessories. Why is each chosen?",
                marks: 7,
                outline: [
                  "Specify mix: 50-60 MPa, w/c 0.35-0.45, 400-500 kg/m3 cement, SCM blends.",
                  "Justify low w/c and superplasticisers for strength, finish and durability.",
                  "Describe aggregates: clean, graded, abrasion-resistant for exposed finish.",
                  "Reinforcement: Fe 500 HYSD bars, automated bending from BIM schedules.",
                  "Prestressing: 7-wire low-relaxation strands of 12.5 or 15.2 mm in long-line beds.",
                  "Embeds and fittings: lifting anchors, splice sleeves, threaded couplers, cast in precisely.",
                  "Connection accessories: neoprene pads, non-shrink grout, polysulphide sealant — by performance spec."
                ]
              },
              {
                q: "What is self-compacting concrete and where is it used in precast?",
                marks: 2
              },
              {
                q: "List three connection accessories cast into or applied at precast joints.",
                marks: 3
              }
            ]
          },
          // ----- 1.4 Precast vs Cast-in-situ -----
          {
            number: "1.4",
            title: "Precast vs Cast-in-situ Construction",
            body: [
              "Cast-in-situ concrete is poured, vibrated and cured in the position it will occupy forever. Precast is poured elsewhere and lifted into place. The distinction sounds trivial but it determines the entire construction economy. Cast-in-situ needs formwork on site — plywood, steel shutters, scaffolding — and that formwork typically costs thirty to fifty per cent of the concrete work. Precast moves formwork to the factory as reusable steel moulds amortised over hundreds of casts. The trade, plainly stated, is formwork cost against transport and connection cost: spend the money on a mould that lasts, or spend it on formwork that is stripped and discarded after each pour.",
              "Cast-in-situ is unbeatable for one-off geometries — a sculptural staircase, a curved shell, a complex transfer floor — and for elements too large or too heavy to transport. It also offers monolithic continuity: every beam, column and slab is poured together, so seismic load paths run uninterrupted through rebar that crosses every joint. Precast, by contrast, is a kit of parts; load transfer happens at explicitly designed connections. For seismic zones this matters — precast structures must use emulative detailing, ductile dry connections, or hybrid frames with cast-in-situ pours at critical joints to match cast-in-situ seismic performance and satisfy IS 13920 ductility.",
              "The practical decision rule is straightforward. For repetitive, mass-produced elements such as metro viaduct segments, hollow-core slabs, parking ramp beams and housing panels, precast dominates. For unique architectural members, transfer girders in tall buildings, raft foundations and site-critical pours, cast-in-situ dominates. Hybrid structures combine both — precast columns and beams erected in days, then an in-situ slab cast over them to provide diaphragm continuity. The hybrid captures precast speed in the frame and cast-in-situ integrity at the floor, and is the most common form on Indian metro and IT campus jobs today."
            ],
            bullets: [
              "Cast-in-situ is poured in its final position; precast is poured elsewhere and lifted in.",
              "Formwork is 30-50% of cast-in-situ concrete cost; precast amortises steel moulds over hundreds of casts.",
              "Cast-in-situ offers monolithic continuity across every beam-column joint.",
              "Precast is a kit of parts; load transfers at explicitly designed connections.",
              "Seismic precast must emulate cast-in-situ via ductile or hybrid detailing per IS 13920.",
              "Hybrid (precast frame + cast-in-situ slab) is the common Indian metro and campus solution.",
              "Precast wins on repetition; cast-in-situ wins on one-off architectural geometry."
            ],
            table: {
              caption: "Precast vs cast-in-situ across key parameters.",
              headers: ["Parameter", "Precast", "Cast-in-situ"],
              rows: [
                ["Formwork", "Reusable steel moulds", "Plywood/steel per pour"],
                ["Quality control", "Factory-grade", "Site-variable"],
                ["Speed", "Parallel casting", "Sequential on site"],
                ["Connections", "Designed joints", "Monolithic continuity"],
                ["Transport", "Significant cost", "Negligible"],
                ["Seismic detailing", "Emulative or hybrid", "Inherent continuity"],
                ["Best fit", "Repetitive members", "Unique geometry"]
              ]
            },
            diagram: {
              kind: "matrix",
              title: "When to choose precast vs cast-in-situ",
              caption: "Repetition and span favour precast; one-off form and site-critical pours favour cast-in-situ.",
              axes: { x: "Low repetition to high repetition", y: "Short span to long span" },
              quadrants: [
                { label: "TL: One-off, short span", note: "Cast-in-situ — sculptural stair, transfer slab" },
                { label: "TR: Repetitive, short span", note: "Precast — housing panels, parking beams" },
                { label: "BL: One-off, long span", note: "Cast-in-situ shell or post-tensioned girder" },
                { label: "BR: Repetitive, long span", note: "Precast prestressed — metro viaduct, bridge girder" }
              ]
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Whenever asked to compare precast and cast-in-situ, structure the answer as a table on five parameters: formwork, quality, speed, connections, seismic. Then conclude with the hybrid recommendation. Examiners reward the structured comparison over a prose argument."
            },
            keyTerms: [
              { term: "Cast-in-situ", definition: "Concrete poured, vibrated and cured in the position it will occupy in the finished structure." },
              { term: "Monolithic continuity", definition: "The uninterrupted load path through rebar crossing every joint in a cast-in-situ frame." },
              { term: "Emulative design", definition: "Precast connection detailing that makes the frame behave under load exactly as a cast-in-situ frame would." }
            ],
            examQuestions: [
              {
                q: "Compare precast and cast-in-situ construction across five parameters and recommend when each is preferred. Explain the role of hybrid construction.",
                marks: 7,
                outline: [
                  "Define precast and cast-in-situ and the formwork cost trade-off.",
                  "Parameter 1: formwork — reusable moulds vs plywood/steel per pour.",
                  "Parameter 2: quality control — factory-grade vs site-variable.",
                  "Parameter 3: speed — parallel casting vs sequential on site.",
                  "Parameter 4: connections — designed joints vs monolithic continuity.",
                  "Parameter 5: seismic detailing — emulative or hybrid vs inherent continuity.",
                  "Conclude with hybrid structures (precast frame + cast-in-situ slab) as the Indian metro and campus solution."
                ]
              },
              {
                q: "State two advantages of cast-in-situ over precast in seismic zones.",
                marks: 2
              },
              {
                q: "What is a hybrid precast-cast-in-situ structure? Give one Indian example.",
                marks: 3
              }
            ]
          },
          // ----- 1.5 Factory vs Site Casting & Tolerances -----
          {
            number: "1.5",
            title: "Factory Casting vs Site Casting and Tolerances",
            body: [
              "Factory casting and site casting are the two ways to make precast elements, and the choice is dictated by size, repetition and access. A factory casts hundreds of identical members under cover with overhead cranes, steam chambers and batch plants tuned for one mix. Site casting — also called site precasting — is used when the element is too large or heavy to transport: a 30-metre bridge girder, a metro station roof slab, a bulky shell unit. The mould is set up on the construction site itself, the element cast, cured, then lifted directly into its final position.",
              "Factory casting delivers tighter tolerances because the mould is steel, the climate controlled and the crew specialised. A factory column is dimensioned to plus or minus 3 mm in length and 2 mm in cross-section. Site-cast elements, exposed to sun, wind and an irregular sub-base, achieve plus or minus 6 to 10 mm. The consequences ripple through erection: every millimetre of tolerance slack translates into shim space, grout thickness and connection play that must be designed for. IS 15916 gives the tolerances for precast concrete elements and should be quoted in any RGPV answer.",
              "Tolerances matter because precast is an assembly system. A column placed 5 mm off-grid pushes every beam seat 5 mm sideways; a beam cast 5 mm too long jams between columns. Cumulative tolerances govern joint width, bearing area and the fit of mechanical splices. Designers specify both product tolerances (the permissible deviation of a single element from nominal) and erection tolerances (the permissible deviation of placed elements from grid). The two are not the same — erection tolerances are looser because they absorb product deviations. Setting both explicitly is the difference between a smooth erection and days of shimming."
            ],
            bullets: [
              "Factory casting uses steel moulds under cover with overhead cranes and steam chambers.",
              "Site casting suits bulky, heavy or one-off elements above the transport limit.",
              "Factory column tolerance: +/-3 mm length, +/-2 mm cross-section per IS 15916.",
              "Site-cast tolerance: +/-6 to 10 mm due to weather, sub-base and crew variability.",
              "Product tolerance governs each element; erection tolerance governs placed elements.",
              "Erection tolerances are looser because they absorb accumulated product deviations.",
              "Tolerance stack determines joint width, bearing area and mechanical splice fit."
            ],
            codeExample: {
              language: "text",
              caption: "Typical factory and site tolerance bands per IS 15916.",
              code: `Element              Factory (mm)    Site (mm)
-------------------  -----------     ----------
Column length        +/- 3           +/- 6
Column cross-section +/- 2           +/- 5
Beam length          +/- 5           +/- 10
Beam depth           +/- 3           +/- 6
Slab thickness       +/- 3           +/- 5
Wall panel diagonal  +/- 5           +/- 10
Bearing seat         +/- 2           +/- 4
Erection on grid     +/- 10          +/- 15`
            },
            diagram: {
              kind: "fork",
              title: "Factory vs site casting — when to choose which",
              caption: "Size, repetition and access dictate the choice.",
              start: "Element to be cast",
              branches: [
                { label: "Factory casting", outcome: "Repetitive members under 15 m — best quality, tight tolerance", good: true },
                { label: "Site casting", outcome: "Bulky or one-off members over 15 m — avoid transport limits", good: true },
                { label: "Hybrid yard", outcome: "Site-adjacent yard for medium members — balances both", good: true },
                { label: "Cast-in-situ fallback", outcome: "Element too big for any precast — pour in final position", good: false }
              ]
            },
            callout: {
              type: "warning",
              title: "Tolerance stack discipline",
              body: "Always specify product and erection tolerances separately. A common error is to demand cast-in-situ erection tolerance on precast products — which the factory cannot deliver. Erection tolerance must be looser than product tolerance, because it absorbs the sum of product deviations."
            },
            keyTerms: [
              { term: "Product tolerance", definition: "The permissible deviation of a single precast element from its nominal dimensions, specified at the factory." },
              { term: "Erection tolerance", definition: "The permissible deviation of a placed element from its theoretical grid position, looser than product tolerance." },
              { term: "Site precasting", definition: "Casting precast elements on the construction site itself, used for elements too large or heavy to transport." }
            ],
            examQuestions: [
              {
                q: "Differentiate factory casting and site casting for precast elements. Discuss the role of tolerances and quote relevant IS code values.",
                marks: 7,
                outline: [
                  "Define factory casting: covered yard, steel moulds, overhead cranes, steam chambers.",
                  "Define site casting: on-site moulds for elements above transport limits.",
                  "State when each is chosen: factory for repetition under 15 m, site for bulky one-offs.",
                  "Define product tolerance: +/-3 mm factory column length, +/-2 mm cross-section.",
                  "Define erection tolerance: +/-15 mm plan, +/-10 mm elevation per IS 15916.",
                  "Explain tolerance stack: cumulative deviations govern joint width and splice fit.",
                  "Conclude that erection tolerance must be looser than product tolerance to absorb deviations."
                ]
              },
              {
                q: "What is the difference between product tolerance and erection tolerance?",
                marks: 2
              },
              {
                q: "State three reasons why site precasting is preferred for a 30 m bridge girder.",
                marks: 3
              }
            ]
          }
        ]
      }
    },
    // ===================== UNIT II =====================
    {
      number: 2,
      roman: "II",
      title: "Precast Elements and Production",
      summary:
        "The catalog of precast elements — beams, columns, slabs, walls, stairs, piles, pipes — and the production methods, moulds, vibration, curing and quality control that deliver them.",
      chapter: {
        number: "02",
        title: "Precast Elements and Production",
        intro:
          "Unit II catalogues the precast element families — beams, columns, slabs, walls, stairs, piles and pipes — and the production methods that make them: steel, fibreglass and timber moulds; external, internal and table vibration; steam, water and membrane curing; and the quality-control system that certifies every element before despatch.",
        inOneBreath:
          "Precast beams span up to 30 metres with prestressing; columns are storey-high and spliced by grouted sleeves; hollow-core slabs dominate floors; wall panels are load-bearing or facade; piles and pipes share a quality advantage over cast-in-situ; moulds are steel, fibreglass, timber or concrete; vibration may be external, internal or table; curing is steam, water or membrane; QC covers mix, production, element and records.",
        sections: [
          // ----- 2.1 Beams and Columns -----
          {
            number: "2.1",
            title: "Precast Beams and Columns",
            body: [
              "Precast beams and columns are the skeleton of every precast frame. Beams are classified by their reinforcement: reinforced concrete beams for short spans up to about 8 metres, partially prestressed beams for medium spans up to 15 metres, and fully prestressed beams for spans of 15 to 30 metres. Cross-sections include rectangular, L, T, inverted T and I-shapes, chosen for the bearing seat they offer to the deck or slab. Prestressed beams are cast on long-line beds with pretensioning: strands are tensioned against abutments, concrete poured, and after cure the strands are released to transfer prestress to the beam.",
              "Precast columns carry axial load plus moment from the beams they support. They are usually rectangular — 300 x 300 mm to 600 x 600 mm — and storey-high, 3 to 4 metres, joined at floor levels by sleeve or grouted splice connections. Columns are designed for erection stages too: a freestanding column before the first beam is placed is a slender cantilever and may need temporary bracing. Prestressing is rarely used in columns since axial compression already benefits the concrete, but tall columns in parking structures may be prestressed to control handling stresses during lifting and transport.",
              "Beam-column joints in precast frames use bearing details and mechanical splices. The simplest is a corbel — a short bracket cast onto the column on which the beam rests, anchored by a welded or bolted plate. Hidden joints use a splice sleeve embedded in the column top: the beam's projecting bars slide into the sleeve and the gap is filled with non-shrink grout. Designers check three failure modes: bearing failure of the corbel, shear failure at the column face, and loss of prestress under sustained load. IS 15916 and ACI 318 Chapter 16 detail these provisions."
            ],
            bullets: [
              "RC beams suit spans up to 8 m; partially prestressed up to 15 m; fully prestressed up to 30 m.",
              "Cross-sections: rectangular, L, T, inverted T and I, chosen for bearing seat geometry.",
              "Pretensioning on long-line beds: strand tensioned, concrete poured, strands released after cure.",
              "Columns are 300-600 mm square and storey-high (3-4 m), spliced at floor levels.",
              "Freestanding columns before beam placement need temporary bracing against wind.",
              "Corbel connection: beam bears on a column bracket, anchored by welded or bolted plate.",
              "Splice sleeve: beam bars slide into column sleeve, gap filled with non-shrink grout."
            ],
            table: {
              caption: "Precast beam and column classification.",
              headers: ["Member", "Span / height", "Reinforcement", "Typical use"],
              rows: [
                ["RC beam", "up to 8 m", "HYSD bars", "Housing, low-rise frames"],
                ["Partially prestressed beam", "8-15 m", "Strands + bars", "Parking, commercial"],
                ["Fully prestressed beam", "15-30 m", "Strands only", "Bridges, viaducts"],
                ["Rectangular column", "3-4 m storey", "HYSD bars", "Frames, parking"],
                ["Prestressed column", "over 8 m", "Strands + bars", "Tall parking structures"],
                ["Spliced column", "Multi-storey", "Bars + sleeve", "High-rise precast"]
              ]
            },
            diagram: {
              kind: "pipeline",
              title: "Production pipeline of a prestressed precast beam",
              caption: "Long-line pretensioning compresses five stages into one continuous bed.",
              stages: [
                { label: "Tension strands", note: "against abutments" },
                { label: "Place reinforcement", note: "stirrups and inserts" },
                { label: "Pour concrete", note: "vibrated between moulds" },
                { label: "Steam cure", note: "to early strength" },
                { label: "Release strands", note: "transfer prestress" }
              ]
            },
            callout: {
              type: "tip",
              title: "Prestress transfer timing",
              body: "Prestress transfer happens only after the concrete reaches its transfer strength — typically 75% of the 28-day grade. Releasing strands earlier causes excessive camber and strand slip, both of which lose prestress and weaken the beam."
            },
            keyTerms: [
              { term: "Pretensioning", definition: "Prestressing where strands are tensioned against abutments before concrete pour and released after cure to transfer force to the beam." },
              { term: "Corbel", definition: "A short cantilevered bracket cast onto a column face on which a beam bears, transferring load through strut-and-tie action." },
              { term: "Splice sleeve", definition: "A steel sleeve cast into the top of a column into which the upper column's bars slide; the annulus is filled with non-shrink grout to develop full bar strength." }
            ],
            examQuestions: [
              {
                q: "Classify precast beams and columns. Describe the long-line pretensioning process for a prestressed beam with the help of a pipeline diagram.",
                marks: 7,
                outline: [
                  "Classify beams: RC up to 8 m, partially prestressed 8-15 m, fully prestressed 15-30 m.",
                  "Classify columns: rectangular, prestressed and spliced by storey height.",
                  "State cross-section choice: rectangular, L, T, inverted T and I for bearing seat.",
                  "Step 1: tension 7-wire strands against abutments on the long-line bed.",
                  "Step 2: place stirrups, lifting anchors and inserts.",
                  "Step 3: pour concrete and vibrate between moulds.",
                  "Step 4: steam cure to transfer strength, then release strands to transfer prestress."
                ]
              },
              {
                q: "What is a corbel and how does it transfer load from beam to column?",
                marks: 2
              },
              {
                q: "List three failure modes checked at a precast beam-column joint.",
                marks: 3
              }
            ]
          },
          // ----- 2.2 Slabs, Walls, Stairs -----
          {
            number: "2.2",
            title: "Precast Slabs, Walls and Stairs",
            body: [
              "Precast slabs dominate floors in precast buildings. Hollow-core slabs, extruded on long-line beds with continuous longitudinal voids, span 6 to 15 metres at 1200 mm width and 150 to 300 mm depth — the voids cut weight by up to fifty per cent without losing bending strength. Solid slabs cover short spans up to 6 metres. Ribbed slabs (also called double-T or single-T) span 12 to 24 metres and are common in parking garages and stadia. Slabs arrive on site with cast-in lifting anchors and are placed directly on bearing beams or walls, then grouted at the joints to form a floor diaphragm.",
              "Precast walls include load-bearing wall panels that carry gravity load from upper floors, non-load-bearing facade panels that clad a frame, and shear walls that resist lateral load. Panels are typically 150 to 250 mm thick and storey-high, with insulation and finishes cast in to form a sandwich panel — concrete-insulation-concrete — that delivers structure, thermal performance and finish in one lift. Joints between wall panels are sealed with polysulphide and detailed to drain; vertical joints resist shear through shear keys cast into the edges. Wall panels double as formwork for cast-in-situ boundary elements in seismic zones.",
              "Precast stairs are made as separate flights — straight, dog-leg or spiral — complete with treads, risers and landings cast as a single piece. They are dropped into the frame after the slabs are placed, bearing on corbels or ledge angles at floor level. Stairs are the only precast element that almost always needs a final cast-in-situ topping or screed to align treads with the finished floor level. Their advantage is that they are immediately usable as the erection crane proceeds upward — a worker can climb to the next floor the moment the stair is landed and grouted."
            ],
            bullets: [
              "Hollow-core slabs span 6-15 m at 1200 mm width, voids cut weight by 50%.",
              "Solid slabs cover short spans up to 6 m; ribbed double-T slabs span 12-24 m.",
              "Slabs are placed on bearing beams or walls and grouted to form a floor diaphragm.",
              "Wall panels: load-bearing, non-bearing facade, and shear wall variants.",
              "Sandwich panel = concrete-insulation-concrete cast in one lift for thermal + finish.",
              "Wall joints use polysulphide sealant and cast-in shear keys for shear transfer.",
              "Stair flights are precast complete with treads, risers and landings; usable immediately."
            ],
            table: {
              caption: "Common precast slab, wall and stair types.",
              headers: ["Element", "Thickness / depth", "Span", "Notes"],
              rows: [
                ["Hollow-core slab", "150-300 mm", "6-15 m", "Extruded, voided, 1200 mm wide"],
                ["Solid plank", "75-150 mm", "up to 6 m", "With cast-in-situ topping"],
                ["Double-T slab", "300-800 mm", "12-24 m", "Parking and stadia"],
                ["Bearing wall panel", "150-250 mm", "storey-high", "Load-bearing + finish"],
                ["Sandwich panel", "200-300 mm", "storey-high", "Concrete-insulation-concrete"],
                ["Stair flight", "150-200 mm", "one storey", "Cast complete with landing"]
              ]
            },
            diagram: {
              kind: "pyramid",
              title: "Hierarchy of precast floor, wall and stair elements",
              caption: "From the most replicated slab up to the bespoke stair flight.",
              tiers: [
                { label: "Hollow-core slab", note: "highest volume, longest span, lowest cost per sq m" },
                { label: "Solid and ribbed slabs", note: "short spans and double-T systems" },
                { label: "Wall panels", note: "bearing, facade and shear wall variants" },
                { label: "Stair flights", note: "bespoke geometry, immediate use after erection" }
              ]
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "If asked about precast floors, always lead with the hollow-core slab: state its size (1200 mm wide, 150-300 mm deep), span (6-15 m) and the 50% weight saving from voids. Then add the double-T for longer spans. This single answer covers most RGPV floor questions."
            },
            keyTerms: [
              { term: "Hollow-core slab", definition: "An extruded precast floor unit with continuous longitudinal voids that reduce self-weight by up to 50% without sacrificing bending strength." },
              { term: "Sandwich panel", definition: "A precast wall panel cast as concrete-insulation-concrete in one lift, delivering structure, thermal performance and finish together." },
              { term: "Shear key", definition: "A castellated projection cast into the edge of a wall or slab that interlocks with the adjacent element and resists shear by mechanical interlock once grouted." }
            ],
            examQuestions: [
              {
                q: "Describe precast slabs, walls and stairs with their typical dimensions, spans and uses. Explain how a floor diaphragm is formed from hollow-core units.",
                marks: 7,
                outline: [
                  "Hollow-core slab: 1200 mm wide, 150-300 mm deep, 6-15 m span, 50% weight saved by voids.",
                  "Solid plank up to 6 m; double-T ribbed slab 12-24 m for parking and stadia.",
                  "Bearing wall panel 150-250 mm thick, storey-high, carries gravity from upper floors.",
                  "Sandwich panel: concrete-insulation-concrete for thermal + finish in one lift.",
                  "Stair flights cast complete with treads, risers and landing, usable after grouting.",
                  "Floor diaphragm: slabs placed on beams, grouted at longitudinal and transverse joints.",
                  "Reinforcement across joints ties slabs into a horizontal diaphragm that transfers seismic shear."
                ]
              },
              {
                q: "What is a sandwich wall panel and what are its three layers?",
                marks: 2
              },
              {
                q: "Why are precast stair flights usable immediately after erection?",
                marks: 3
              }
            ]
          },
          // ----- 2.3 Piles and Pipes -----
          {
            number: "2.3",
            title: "Precast Piles and Pipes",
            body: [
              "Precast concrete piles are driven foundation elements used where the stratum is too soft for spread footings and too variable for bored piles. They are cast in factory yards as square sections — 300 x 300 to 600 x 600 mm — or as octagonal or cylindrical spun piles, then driven with diesel or hydraulic hammers. Prestressing is common: a 12-metre pile is pretensioned with four to eight strands, which keeps the pile in compression during driving and allows it to bend without cracking when redriven or spliced. Pile lengths are extended by mechanical splices that maintain tensile continuity through the joint.",
              "Precast concrete pipes carry water, sewage and storm drainage. They are manufactured by vertical casting for diameters up to 1.2 metres and by centrifugal spinning for larger diameters up to 3 metres, the spinning producing a dense, low-permeability wall. Pipe classes are defined by the wall thickness and reinforcement ratio and rated by the cover depth they can sustain: NP2, NP3 and NP4 for non-pressure applications; P2 and P3 for low-pressure lines. Joints use spigot-and-socket rubber ring seals that accommodate a few degrees of angular rotation without leaking, critical in seismic and settlement-prone areas.",
              "Both piles and pipes share a quality advantage over their cast-in-situ counterparts. A driven precast pile has a measurable strength before it ever leaves the yard; a bored pile cannot be inspected once concreted. A precast pipe is cured under controlled conditions and pressure-tested; a cast-in-situ pipe is rare and hard to test. The penalty is that precast piles displace soil during driving, sending ground vibration into neighbouring footings — often the deciding factor when comparing them against bored piles in dense urban sites. IS 2911 and IS 458 govern pile and pipe specifications."
            ],
            bullets: [
              "Precast piles: square 300-600 mm or spun octagonal/cylindrical, driven by hammer.",
              "Pretensioned with 4-8 strands keeps pile in compression during driving and redriving.",
              "Mechanical splices extend pile length while maintaining tensile continuity.",
              "Pipes: vertical cast up to 1.2 m, centrifugal spun up to 3 m diameter.",
              "Classes: NP2/NP3/NP4 non-pressure; P2/P3 low-pressure per IS 458.",
              "Spigot-and-socket rubber ring seals accommodate angular rotation without leaking.",
              "Driven piles displace soil; ground vibration may exclude them from dense urban sites."
            ],
            codeExample: {
              language: "text",
              caption: "Typical driven precast pile specification.",
              code: `Section        : 450 x 450 mm square, pretensioned
Length         : 12 m, extendable by mechanical splice
Strands        : 6 x 12.5 mm 7-wire low-relaxation
Concrete grade : M50
Cover          : 50 mm nominal
Drive stress   : dynamic analysis per wave equation
Capacity       : 800 kN axial (working load)
Test           : cast-in pile integrity test (sonic)
                 + static load test on 2% of piles
Code           : IS 2911 Part 1 (driven piles)`
            },
            diagram: {
              kind: "cycle",
              title: "Quality and handling cycle for piles and pipes",
              caption: "Each loop turns yard quality into foundation integrity.",
              steps: [
                { label: "Batch and cast", note: "controlled mix" },
                { label: "Steam cure", note: "to release strength" },
                { label: "Pressure test", note: "pipes; sonic test for piles" },
                { label: "Load and transport", note: "vertical or horizontal" },
                { label: "Drive or lay", note: "hammer or trench" },
                { label: "Splice and seal", note: "extend or joint" }
              ]
            },
            callout: {
              type: "warning",
              title: "Vibration check before driving",
              body: "Driven precast piles send ground vibration into neighbouring footings and finishes. In dense urban sites this can crack adjacent buildings. Always specify a pre-construction vibration survey and consider bored piles or driven cast-in-situ piles where the survey shows risk above 5 mm/s peak particle velocity."
            },
            keyTerms: [
              { term: "Driven pile", definition: "A precast concrete pile hammered into the ground, displacing soil and developing bearing capacity through skin friction and end bearing." },
              { term: "Spun pile", definition: "A cylindrical precast pile or pipe cast by centrifugal spinning on a rotating mandrel, producing a dense low-permeability wall." },
              { term: "Spigot-and-socket joint", definition: "A pipe joint where one end is tapered (spigot) and the other enlarged (socket), sealed by a rubber ring that allows limited angular rotation." }
            ],
            examQuestions: [
              {
                q: "Describe precast concrete piles and pipes, their manufacturing methods, classes and joint details. Quote the relevant IS codes.",
                marks: 7,
                outline: [
                  "Piles: square 300-600 mm or spun, pretensioned with 4-8 strands for compression during driving.",
                  "Pile splices: mechanical, maintain tensile continuity across extended lengths.",
                  "Pipes: vertical cast up to 1.2 m, centrifugal spun up to 3 m for dense walls.",
                  "Pipe classes: NP2/NP3/NP4 non-pressure; P2/P3 low-pressure per IS 458.",
                  "Pipe joint: spigot-and-socket with rubber ring, accommodates angular rotation.",
                  "Quality advantage: precast pile measurable before driving; pipe pressure-tested.",
                  "Codes: IS 2911 for piles, IS 458 for pipes; note vibration risk of driven piles."
                ]
              },
              {
                q: "State two advantages of centrifugal spinning for precast pipes.",
                marks: 2
              },
              {
                q: "Why are driven precast piles sometimes excluded from dense urban sites?",
                marks: 3
              }
            ]
          },
          // ----- 2.4 Production Methods, Moulds, Vibration -----
          {
            number: "2.4",
            title: "Production Methods, Moulds and Vibration",
            body: [
              "Precast production begins with the mould, and the mould's quality dictates the element's quality. Steel moulds are dimensionally stable through thousands of pours and yield the smoothest surface; they are used for repetitive members such as beams, columns and wall panels. Fibreglass moulds are lighter and form curved or ornamental surfaces that steel cannot economically match. Timber and plywood moulds are reserved for prototypes, one-off architectural pieces or small batches. Concrete moulds, often themselves precast, are used for very large or heavy elements. Each mould is checked before every pour for cleanliness, dimensional accuracy and release agent coverage.",
              "Vibration consolidates the concrete against the mould and around the reinforcement. External vibration clamps vibrators to the mould sides and is standard for steel-mould production of beams, columns and wall panels. Internal vibration uses poker vibrators dipped into the concrete and is reserved for thick or heavily reinforced sections. Table vibration shakes the whole mould on a vibrating table, used for thin slabs and tiles. Self-compacting concrete, flowed at high workability with superplasticisers, eliminates vibration altogether for complex shapes but is more expensive. The choice is governed by element shape, congestion of reinforcement and surface finish requirements.",
              "Casting methods scale from manual to fully automated. Manual casting suits low volumes and bespoke shapes; the crew places, vibrates and finishes by hand. Carousel plants move moulds on conveyors through stations — clean, oil, place reinforcement, pour, vibrate, cure, demould — and are used for housing panels at thousands per month. Long-line pretensioning beds run sixty to a hundred metres long and cast prestressed beams and hollow-core slabs in continuous runs. Each method has its cost optimum: manual for prototypes, carousel for housing panels, long-line for prestressed decks. The skill lies in matching method to volume."
            ],
            bullets: [
              "Steel moulds: dimensionally stable for thousands of pours, smoothest surface.",
              "Fibreglass moulds: lighter, form curved or ornamental surfaces economically.",
              "Timber/plywood moulds: reserved for prototypes, one-offs or small batches.",
              "External vibration clamps to mould sides; standard for steel-mould production.",
              "Internal vibration uses poker vibrators for thick or heavily reinforced sections.",
              "Table vibration shakes the whole mould; self-compacting concrete skips vibration.",
              "Carousel plants cast thousands of housing panels per month on conveyor lines."
            ],
            table: {
              caption: "Mould types and their best-fit applications.",
              headers: ["Mould type", "Surface finish", "Repetitions", "Best fit"],
              rows: [
                ["Steel", "Very smooth", "thousands", "Beams, columns, panels"],
                ["Fibreglass", "Smooth, curved", "hundreds", "Architectural pieces"],
                ["Timber/plywood", "Fair", "tens", "Prototypes, one-offs"],
                ["Concrete", "Rough", "tens", "Large or heavy elements"],
                ["Silicone rubber", "Exact replica", "tens", "Decorative casts"]
              ]
            },
            diagram: {
              kind: "flow",
              title: "Pre-pour checks in any production method",
              caption: "Mould preparation is the cheapest source of quality in precast.",
              steps: [
                { label: "Clean mould", note: "remove laitance" },
                { label: "Apply release agent", note: "thin uniform coat" },
                { label: "Inspect dimensions", note: "verify against drawing" },
                { label: "Place reinforcement", note: "with cover blocks" },
                { label: "Place embeds", note: "lifters, sleeves" },
                { label: "Sign off and pour", note: "QC release" }
              ]
            },
            callout: {
              type: "tip",
              title: "Method-to-volume match",
              body: "Match the production method to the order volume. Manual casting is cheapest for prototypes under ten units; carousel plants win above a thousand panels per month; long-line pretensioning wins for prestressed beams and hollow-core. Choosing the wrong method destroys the precast economic case."
            },
            keyTerms: [
              { term: "Steel mould", definition: "A dimensionally stable mould made of welded steel plate, used for thousands of repetitive casts of beams, columns and wall panels." },
              { term: "External vibration", definition: "Consolidation by vibrators clamped to the outside of the mould, standard for steel-mould production of repetitive elements." },
              { term: "Carousel plant", definition: "A precast factory in which moulds circulate on conveyors through clean, oil, reinforce, pour, vibrate, cure and demould stations." }
            ],
            examQuestions: [
              {
                q: "Describe the mould types, vibration methods and casting methods used in precast production. How is the production method matched to order volume?",
                marks: 7,
                outline: [
                  "Steel moulds: thousands of pours, smoothest surface, for beams/columns/panels.",
                  "Fibreglass: lighter, curved or ornamental; timber/plywood for prototypes.",
                  "External vibration clamps to mould sides; standard for steel moulds.",
                  "Internal poker vibration for thick or heavily reinforced sections; table for thin slabs.",
                  "Self-compacting concrete eliminates vibration for complex shapes at higher cost.",
                  "Manual casting for low volume and bespoke shapes; carousel for thousands of panels/month.",
                  "Long-line pretensioning for prestressed beams and hollow-core slabs in continuous runs."
                ]
              },
              {
                q: "What is self-compacting concrete and when is it preferred over vibration?",
                marks: 2
              },
              {
                q: "List three pre-pour checks on a precast mould.",
                marks: 3
              }
            ]
          },
          // ----- 2.5 Curing and QC -----
          {
            number: "2.5",
            title: "Curing Methods and Quality Control",
            body: [
              "Curing transforms freshly cast concrete into a structural material. In precast, time is money, so curing is accelerated. Steam curing in chambers or under tarps raises concrete temperature to 60-70 degrees Celsius, achieves stripping strength in eight to ten hours, and is the workhorse of every carousel plant. The cycle has four phases — preset, ramp up, hold, ramp down — to prevent thermal cracks. Water curing, by immersion, ponding or wet burlap, is used for thick elements and yard-cast piles. Membrane curing compounds sprayed onto the surface seal in mix water when water curing is impractical.",
              "Quality control in precast is a system, not an inspection. Every mix design is verified by daily cube tests; every steel batch by mill certificates and sample tensile tests; every mould by dimensional check before pour; every element by visual inspection after stripping and by dimensional check against tolerance. Prestressing operations demand their own checks: gauge calibration, strand elongation against jack pressure, and transfer strength verified by cubes cured alongside the bed. Documentation is central — each element carries a tag with pour date, mix number, mould number, curing cycle and inspector sign-off, the foundation of traceability.",
              "Defects and their remedies form the third pillar. Surface defects — bug holes, honeycombing, colour variation — are patched with matching mortar or accepted if within aesthetic limits. Dimensional deviations beyond tolerance are rejected and re-cast. Cracks from thermal shock, shrinkage or prestress transfer are flagged for structural review: surface cracks under 0.2 mm are typically sealed; deeper cracks may require epoxy injection or downgrading of the element. The cost of poor QC is paid in erection delays and joint shimming, where every millimetre of error multiplies into hours of crane time on site."
            ],
            bullets: [
              "Steam curing reaches 60-70 deg C, gives stripping strength in 8-10 hours.",
              "Steam cycle: preset, ramp up, hold, ramp down — prevents thermal cracks.",
              "Water curing by immersion, ponding or wet burlap for thick elements.",
              "Membrane curing compounds seal in mix water when water curing is impractical.",
              "QC covers mix (daily cubes), steel (mill certs + tensile), mould, element and records.",
              "Prestress QC: gauge calibration, elongation vs pressure, transfer strength by cubes.",
              "Surface cracks under 0.2 mm are sealed; deeper cracks may need epoxy injection."
            ],
            codeExample: {
              language: "python",
              caption: "Compute mean 28-day cube strength and check against M50 grade target.",
              code: `def cube_check(strengths_mpa, grade=50, k=1.65, sd=5.0):
    """Return (mean, target_mean, ok) per IS 456 acceptance."""
    mean = sum(strengths_mpa) / len(strengths_mpa)
    target_mean = grade + k * sd          # M50 target mean = 58.25 MPa
    individual_min = grade - 3            # no cube below 47 MPa
    ok = mean >= target_mean and min(strengths_mpa) >= individual_min
    return round(mean, 2), round(target_mean, 2), ok

samples = [54.2, 58.7, 56.1, 59.3, 57.8, 55.4]
mean, target, ok = cube_check(samples)
print(f"Mean {mean} MPa, target {target} MPa, accepted = {ok}")`
            },
            diagram: {
              kind: "layers",
              title: "Layers of precast quality control",
              caption: "Each layer guards a different property; missing any layer breaks traceability.",
              layers: [
                { label: "Material QC", note: "Cement, aggregates, steel, admix certificates" },
                { label: "Mix QC", note: "Daily cubes, slump or flow, w/c verification" },
                { label: "Production QC", note: "Mould check, prestress gauge, embed placement" },
                { label: "Element QC", note: "Dimensional tolerance, visual, NDT" },
                { label: "Records", note: "Element tag, pour date, inspector sign-off" }
              ]
            },
            callout: {
              type: "exam",
              title: "Cube acceptance criterion",
              body: "Quote IS 456 cube acceptance in every QC answer: mean of four cubes >= fck + 1.65 sigma (for M50, 58.25 MPa), and individual cube >= fck - 3 MPa (47 MPa). Both conditions must be met; failing either rejects the batch."
            },
            keyTerms: [
              { term: "Steam curing", definition: "Accelerated curing in a chamber or under tarps at 60-70 deg C, achieving stripping strength in 8-10 hours via a preset-ramp-hold-ramp cycle." },
              { term: "Transfer strength", definition: "The concrete cylinder strength required before prestressing strands are released, typically 75% of the 28-day grade." },
              { term: "Element tag", definition: "A traceability record on each precast element carrying pour date, mix number, mould number, curing cycle and inspector sign-off." }
            ],
            examQuestions: [
              {
                q: "Describe the curing methods and quality-control system used in precast concrete production. Explain the IS 456 acceptance criterion for cube strength.",
                marks: 7,
                outline: [
                  "Steam curing at 60-70 deg C: four phases preset, ramp, hold, ramp to avoid thermal cracks.",
                  "Water curing by immersion, ponding or wet burlap for thick elements and yard-cast piles.",
                  "Membrane curing compounds seal in water when water curing is impractical.",
                  "QC system: material certs, daily cubes, mould check, element tolerance, records.",
                  "Prestress QC: gauge calibration, elongation vs pressure, transfer strength by cubes.",
                  "IS 456 acceptance: mean of cubes >= fck + 1.65 sigma and individual >= fck - 3 MPa.",
                  "Defects: surface under 0.2 mm sealed; deeper cracks epoxy-injected or element downgraded."
                ]
              },
              {
                q: "State the four phases of a steam curing cycle and why each matters.",
                marks: 2
              },
              {
                q: "What is an element tag and what five pieces of information does it carry?",
                marks: 3
              }
            ]
          }
        ]
      }
    },
    // ===================== UNIT III =====================
    {
      number: 3,
      roman: "III",
      title: "Modular Construction Concepts",
      summary:
        "Modular coordination, standardisation, the types of modular construction, 3D volumetric versus 2D panel systems, and the modular-versus-conventional decision.",
      chapter: {
        number: "03",
        title: "Modular Construction Concepts",
        intro:
          "Unit III moves from element to system: the 100-millimetre basic module and modular coordination that let precast parts interchange, the standardisation that drives cost down with volume, the families of modular construction from steel volumetric to load-bearing panel, and the trade-offs between modular and conventional construction.",
        inOneBreath:
          "The basic module is 100 mm per ISO 6514; modular grids of 300, 600 or 1200 mm govern building dimensions; standardisation makes precast economic; volumetric modular builds whole rooms off-site; panel modular builds flat elements assembled on site; volumetric wins for hotel and hospital repetition; panel wins for mass housing; modular versus conventional trades factory investment against site time.",
        sections: [
          // ----- 3.1 Modular Coordination -----
          {
            number: "3.1",
            title: "Modular Coordination and Standardisation",
            body: [
              "Modular coordination is the geometry that lets precast parts fit together like a child's building blocks. The basic module is 100 millimetres — the international standard on which every dimension is built. Walls, doors, windows, tiles and precast panels are all sized as multiples of this module, so a panel 1200 mm wide fits an opening of the same size without site cutting. The three-dimensional grid of modules in which elements are placed is called the modular grid; coordinating dimensions are derived from it, allowing different manufacturers' products to interchange. Without modular coordination precast becomes bespoke, and bespoke defeats the economic case.",
              "Standardisation extends the principle from geometry to components themselves. A standard hollow-core slab of 1200 mm width and 200 mm depth, manufactured by any plant in the country, has the same load tables, bearing details and connection geometry. Standards — IS 15916 for precast, IS 6061 for prefabricated concrete, ISO 6514 for modular coordination — codify these dimensions. The benefit cascades: standard elements are designed once, certified once, manufactured in volume, and assembled with standard connection details. Cost falls with every doubling of volume. The cost of standardisation is the loss of architectural freedom — but only at the panel level, not the building level.",
              "The designer works within a preferred size series: a 300 mm modular grid for residential, 600 mm or 1200 mm for commercial, 3000 mm for industrial structures. Grids are vertical as well as horizontal: floor-to-floor heights are multiples of 100 mm. The principle is to dimension the building to fit the elements, not the elements to fit the building. When the architect must use a non-modular dimension, that element becomes a special — three times the cost of a standard one. The skill is to push specials to a handful per project, and to make every other element repeat."
            ],
            bullets: [
              "Basic module is 100 mm per ISO 6514, the foundation of every dimension.",
              "Preferred grids: 300 mm residential, 600-1200 mm commercial, 3000 mm industrial.",
              "Floor-to-floor heights are multiples of 100 mm.",
              "Standard hollow-core: 1200 mm wide, 200 mm deep — interchangeable across plants.",
              "IS 15916 (precast), IS 6061 (prefab concrete), ISO 6514 (modular coordination).",
              "Standard elements designed once, certified once, manufactured in volume.",
              "Non-modular elements become specials, costing three times the standard."
            ],
            table: {
              caption: "Modular coordination reference values.",
              headers: ["Concept", "Value", "Reference"],
              rows: [
                ["Basic module", "100 mm", "ISO 6514"],
                ["Preferred grid (residential)", "300 mm", "IS 15916"],
                ["Preferred grid (commercial)", "600-1200 mm", "IS 15916"],
                ["Floor-to-floor height", "100 mm multiple", "IS 15916"],
                ["Standard hollow-core width", "1200 mm", "IS 6061"],
                ["Wall panel thickness series", "150, 200, 250 mm", "Industry practice"]
              ]
            },
            diagram: {
              kind: "matrix",
              title: "Modular grid scale by building type",
              caption: "Coarser grids suit larger, more repetitive structures.",
              axes: { x: "Smaller grid to larger grid", y: "Housing to industrial" },
              quadrants: [
                { label: "TL: 100-300 mm grid housing", note: "Tiles, doors, brick coursing" },
                { label: "TR: 1200 mm grid commercial", note: "Hollow-core slabs, wall panels" },
                { label: "BL: 600 mm grid offices", note: "Floor tiles, ceiling grids" },
                { label: "BR: 3000 mm grid industrial", note: "Long-span beams, columns" }
              ]
            },
            callout: {
              type: "tip",
              title: "Dimension the building to the element",
              body: "Always dimension the building to fit standard precast elements, not the reverse. A 300 mm shift in column grid can convert a hundred specials into standard panels, saving the project more than the architect's entire fee. This is the single highest-leverage decision in modular design."
            },
            keyTerms: [
              { term: "Basic module", definition: "The 100 mm international length unit (ISO 6514) on which all modular-coordinated dimensions are built as multiples." },
              { term: "Modular grid", definition: "A three-dimensional network of module-sized spaces into which precast elements are placed so they interchange." },
              { term: "Special element", definition: "A non-standard precast element whose dimensions fall outside the modular grid; it costs roughly three times a standard element." }
            ],
            examQuestions: [
              {
                q: "Define modular coordination and standardisation in precast construction. State the preferred modular grids and relevant IS codes.",
                marks: 7,
                outline: [
                  "Define modular coordination: geometry of interchangeable precast parts.",
                  "Basic module: 100 mm per ISO 6514.",
                  "Preferred grids: 300 mm residential, 600-1200 mm commercial, 3000 mm industrial.",
                  "Floor-to-floor heights as multiples of 100 mm per IS 15916.",
                  "Standard hollow-core 1200 mm wide, 200 mm deep per IS 6061.",
                  "Standardisation: design once, certify once, manufacture in volume, cost falls.",
                  "Conclude: dimension the building to fit elements, not the reverse; specials cost 3x."
                ]
              },
              {
                q: "What is the basic module of modular coordination?",
                marks: 2
              },
              {
                q: "List three IS/ISO codes that govern precast and modular coordination in India.",
                marks: 3
              }
            ]
          },
          // ----- 3.2 Types of Modular -----
          {
            number: "3.2",
            title: "Types of Modular Construction",
            body: [
              "Modular construction splits into two large families distinguished by how much of the building is built off-site. Volumetric modular construction builds whole rooms — walls, floor, ceiling, finishes, fittings and services — as a three-dimensional box, ships the box to site and stacks it. Panel modular construction builds flat two-dimensional elements — wall panels, floor planks, facade panels — and assembles them on site into a three-dimensional building. The hybrid family mixes the two: volumetric bathrooms and kitchens stacked into a panel-built frame. The choice is governed by transport constraints, repetition and the level of finish desired off-site.",
              "Within volumetric, the framing material further classifies the system. Steel-framed modules use light-gauge cold-formed sections bolted at corners; they are light, easy to lift, and dominate hotel and student housing. Concrete-framed modules are cast as complete boxes in a precast yard and are heavier, but provide better fire resistance and acoustic isolation; they are common in prisons, military housing and high-end residential. Timber-framed modules, popular in Scandinavia, use cross-laminated timber panels for walls and floors and offer the lowest embodied carbon. Each material defines its own connection and fire-protection logic.",
              "Panel modular construction splits into load-bearing and non-load-bearing. Load-bearing panel construction — also called large-panel construction — uses wall panels that carry gravity load from upper floors and was the dominant post-war housing system in Eastern Europe. Non-load-bearing panels clad a frame of cast-in-situ columns and slabs. Sub-types include cross-wall construction (only transverse walls are load-bearing), cross-floor construction (load-bearing facades parallel to the building length) and cell-type construction (both directions load-bearing). Each sub-type has its own stability and erection logic, and modular coordination holds them all together."
            ],
            bullets: [
              "Volumetric modular builds whole 3D rooms off-site; panel modular builds flat 2D elements.",
              "Hybrid: volumetric wet cores stacked into a panel-built frame.",
              "Steel-framed volumetric: light-gauge cold-formed sections, hotels and student housing.",
              "Concrete-framed volumetric: heavy but fire-resistant; prisons, military, premium.",
              "Timber-framed volumetric: cross-laminated timber, lowest embodied carbon.",
              "Load-bearing panel (large-panel) carries gravity from upper floors.",
              "Sub-types: cross-wall, cross-floor and cell-type — each with own stability logic."
            ],
            table: {
              caption: "Modular construction types and their characteristics.",
              headers: ["Type", "Dimension", "Transport", "Finish level", "Best fit"],
              rows: [
                ["Steel volumetric", "3D box", "Road 4 m wide", "Full finish", "Hotels, student housing"],
                ["Concrete volumetric", "3D box", "Heavy lift", "Structural + finish", "Prisons, premium residential"],
                ["Timber volumetric", "3D box", "Light lift", "Full finish", "Scandinavian housing"],
                ["Load-bearing panel", "2D wall", "Flat bed", "Structural", "Mass housing"],
                ["Non-bearing panel", "2D facade", "Flat bed", "Cladding", "Office, commercial"],
                ["Hybrid", "2D + 3D", "Mixed", "Mixed", "Residential with wet cores"]
              ]
            },
            diagram: {
              kind: "pyramid",
              title: "Hierarchy of modular construction types",
              caption: "From the smallest repeating unit up to the hybrid building.",
              tiers: [
                { label: "2D panels", note: "Wall, floor, facade — flat elements assembled on site" },
                { label: "Hybrid modules", note: "Volumetric wet cores within a panel frame" },
                { label: "Volumetric modules", note: "Whole rooms built and finished off-site" },
                { label: "Whole-building modules", note: "Modular + structural frame + services" }
              ]
            },
            callout: {
              type: "exam",
              title: "Family-by-family answer",
              body: "Whenever asked about types of modular construction, structure the answer by family: volumetric (steel, concrete, timber), panel (load-bearing, non-bearing), hybrid. Give one best-fit example for each. This three-family structure covers any RGPV question on the topic."
            },
            keyTerms: [
              { term: "Volumetric modular", definition: "Modular construction in which whole three-dimensional rooms (walls, floor, ceiling, finishes, services) are built off-site and stacked." },
              { term: "Cross-wall construction", definition: "A load-bearing panel sub-type where only transverse walls carry gravity load, with the longitudinal facade non-bearing." },
              { term: "Large-panel system", definition: "A load-bearing panel modular construction method using factory-cast wall and floor panels assembled on site for mass housing." }
            ],
            examQuestions: [
              {
                q: "Classify the types of modular construction. Describe volumetric, panel and hybrid systems with framing materials and examples.",
                marks: 7,
                outline: [
                  "Split modular into volumetric, panel and hybrid families.",
                  "Volumetric sub-types by framing: steel (light-gauge), concrete, timber (CLT).",
                  "Steel volumetric: hotels, student housing; light and fast.",
                  "Concrete volumetric: prisons, military, premium; fire-resistant and acoustic.",
                  "Timber volumetric: Scandinavian housing; lowest embodied carbon.",
                  "Panel modular: load-bearing (large-panel) vs non-load-bearing facade.",
                  "Hybrid: volumetric wet cores stacked into a panel-built residential frame."
                ]
              },
              {
                q: "Distinguish load-bearing and non-load-bearing panel construction.",
                marks: 2
              },
              {
                q: "Name three sub-types of load-bearing panel construction.",
                marks: 3
              }
            ]
          },
          // ----- 3.3 3D Volumetric -----
          {
            number: "3.3",
            title: "3D Volumetric Modular Construction",
            body: [
              "Three-dimensional volumetric construction builds a room as a complete box. Walls, floor and ceiling are framed, sheathed, insulated, plastered, tiled, wired and plumbed in the factory; windows, doors, cabinets and lighting are fitted; the finished module is wrapped and shipped to site. A 25-square-metre hotel room module can be built in five days in the factory and installed on site in fifteen minutes with a tower crane. The site programme collapses to foundation, structure if needed, and module stacking; eighty per cent of the work has already been done indoors, under cover, by a factory crew.",
              "The structural integrity of a stack of modules comes from corner-to-corner load transfer. Each module's corner post sits on the corner post of the module below; forces run continuously down the building to the foundation. Lateral stability comes either from the modules themselves braced with steel strap cross-bracing or from a concrete core built around the module stack. Connections at corners use bolted plates, interlocking castings or welded joints; each must resist shear from wind and seismic load and accommodate the construction tolerances of a stack of independently built boxes.",
              "Volumetric modular dominates where repetition is extreme and finish quality matters: hotel rooms, student accommodation, hospital wards, prison cells, military barracks and apartments. The barrier is transport — a module 4 metres wide and 12 metres long needs police escort on most highways — and access: the crane must reach the topmost module with no swing obstruction. The economic break-even is usually around fifty modules per project, below which factory setup and tooling costs overwhelm the savings. Above five hundred modules the cost per square metre can fall below conventional construction by twenty per cent."
            ],
            bullets: [
              "A hotel room module is built in 5 days in factory, installed in 15 minutes on site.",
              "80% of work is done indoors — finishes, services, fittings all in the factory.",
              "Corner-to-corner load transfer carries forces continuously down the stack.",
              "Lateral stability from strap cross-bracing in modules or from a concrete core.",
              "Corner connections: bolted plates, interlocking castings or welded joints.",
              "Transport barrier: 4 m wide, 12 m long modules need police escort.",
              "Economic break-even near 50 modules; below that factory setup overwhelms savings."
            ],
            codeExample: {
              language: "python",
              caption: "Quick cost comparison of volumetric vs conventional build.",
              code: `def volumetric_cost(area_m2, factory_rate=18000, setup=2_000_000):
    """Cost per sq m for volumetric build (INR)."""
    return factory_rate + setup / area_m2

def conventional_cost(site_rate=22000):
    return site_rate

area = 2500  # 200 modules at 12.5 sq m each
vol = volumetric_cost(area)
conv = conventional_cost()
print(f"Volumetric: INR {vol:.0f}/sq m  vs  Conventional: INR {conv:.0f}/sq m")`
            },
            diagram: {
              kind: "pipeline",
              title: "Factory-to-site pipeline of a 3D volumetric module",
              caption: "From framing to handover — five days in the factory, fifteen minutes on site.",
              stages: [
                { label: "Frame and sheathe", note: "steel or timber" },
                { label: "Insulate and finish", note: "plaster, tile, paint" },
                { label: "Fit services", note: "electrical, plumbing, HVAC" },
                { label: "QC and wrap", note: "snag list and protect" },
                { label: "Transport and lift", note: "tower crane to position" }
              ]
            },
            callout: {
              type: "warning",
              title: "Crane access is a hard gate",
              body: "Volumetric modular fails when the site crane cannot reach the topmost module position with the required radius and capacity. Always verify crane access and module weight before committing to volumetric — many otherwise viable projects have been forced back to panel construction by a single unreachable corner."
            },
            keyTerms: [
              { term: "Corner-to-corner load transfer", definition: "The structural mechanism in a stack of volumetric modules where each corner post bears on the corner post below, running gravity load continuously to the foundation." },
              { term: "Volumetric break-even", definition: "The minimum number of modules (about fifty) above which factory setup and tooling costs are amortised and volumetric becomes cheaper than conventional construction." },
              { term: "Cross-bracing", definition: "Steel straps installed diagonally across module walls to resist racking and provide lateral stability to the stack." }
            ],
            examQuestions: [
              {
                q: "Describe 3D volumetric modular construction, its structural load transfer, lateral stability, transport constraints and economic break-even.",
                marks: 7,
                outline: [
                  "Define volumetric: whole room built, finished and fitted off-site as a 3D box.",
                  "Speed: 5 days in factory, 15 minutes on site; 80% of work indoors.",
                  "Structural load transfer: corner-to-corner, forces run continuously down the stack.",
                  "Lateral stability: steel strap cross-bracing in modules or a concrete core.",
                  "Corner connections: bolted plates, interlocking castings or welded joints.",
                  "Transport barrier: 4 m wide, 12 m long modules need police escort.",
                  "Economic break-even: about 50 modules; above 500 modules cost falls 20% below conventional."
                ]
              },
              {
                q: "Why is 80% of work moved to the factory in volumetric construction?",
                marks: 2
              },
              {
                q: "State three barriers to volumetric modular construction at a typical site.",
                marks: 3
              }
            ]
          },
          // ----- 3.4 2D Panel Systems -----
          {
            number: "3.4",
            title: "2D Panel Systems",
            body: [
              "Two-dimensional panel systems are the workhorse of precast housing and commercial construction. The family includes precast concrete wall panels (load-bearing or facade), hollow-core floor planks, ribbed slabs, double-T units for parking and stadia, and facade panels with insulation and finish cast in. Panels are cast flat in factory moulds, lifted and transported flat on trailers, then erected vertically or horizontally on site. Compared with three-dimensional volumetric modules, panels pack more building per truck and per crane lift, which is why panel systems dominate where repetition is high but transport access is tight.",
              "Load-bearing panel construction arranges walls to carry gravity load from roof to foundation. The common arrangement is cross-wall: transverse walls at 3 to 6 metre spacing carry the floor planks spanning between them, while the longitudinal facade is non-bearing. Floor planks bear on the walls by 50 to 75 mm and are grouted at the joints; vertical continuity of the wall is achieved by splice bars or grouted sleeves at the panel-to-panel joint. Lateral load is resisted by the same walls acting as shear walls, often supplemented by a central core.",
              "Connections in panel systems are the make-or-break detail. Horizontal joints between wall panels carry gravity compression through a bed of mortar or grout and tie the panels together by vertical bars passing through grouted sleeves. Vertical joints between adjacent walls resist shear through cast-in shear keys, with or without looped bars. Floor-to-wall joints transfer vertical reaction and tie the floor diaphragm to the shear wall. Each joint is designed for three actions: compression, shear and tie. A well-detailed panel system can match cast-in-situ seismic performance — a poorly-detailed one is the leaky, weak-joint stereotype that gave precast a bad name in the 1970s."
            ],
            bullets: [
              "Panels are cast flat in factory moulds and erected vertically or horizontally on site.",
              "Cross-wall: transverse walls at 3-6 m spacing carry floor planks spanning between them.",
              "Floor planks bear on walls by 50-75 mm and are grouted at the joints.",
              "Vertical wall continuity achieved by splice bars or grouted sleeves at panel joints.",
              "Horizontal joint: mortar/grout bed + vertical bars through sleeves for tie.",
              "Vertical joint: cast-in shear keys with or without looped bars for shear transfer.",
              "Each joint designed for three actions: compression, shear and tie."
            ],
            table: {
              caption: "Common 2D panel systems and their uses.",
              headers: ["System", "Load role", "Typical span", "Use"],
              rows: [
                ["Cross-wall panels", "Load-bearing walls", "3-6 m", "Mass housing"],
                ["Facade panels", "Non-bearing cladding", "storey-high", "Commercial"],
                ["Hollow-core planks", "Floor", "6-15 m", "Housing, offices"],
                ["Double-T slabs", "Floor or roof", "12-24 m", "Parking, stadia"],
                ["Sandwich panels", "Wall with insulation", "storey-high", "Cold storage, housing"]
              ]
            },
            diagram: {
              kind: "compare",
              title: "Volumetric vs panel modular systems",
              caption: "Volumetric trades transport weight for finish; panel trades site work for transport efficiency.",
              left: {
                heading: "Volumetric (3D)",
                items: [
                  "Whole room built and finished off-site",
                  "Heavy per truck; needs police escort",
                  "Crane lift of complete box",
                  "Eighty per cent of work in factory",
                  "Best for hotels, hospitals, prisons"
                ]
              },
              right: {
                heading: "Panel (2D)",
                items: [
                  "Flat elements assembled on site",
                  "Light per truck; many per load",
                  "Lift of single panel at a time",
                  "Fifty per cent of work in factory",
                  "Best for mass housing, offices, parking"
                ]
              }
            },
            callout: {
              type: "tip",
              title: "Three actions per joint",
              body: "Every panel joint must be designed for three actions: compression (gravity), shear (lateral load), and tie (continuity). Drawing the joint at 1:5 scale and labelling each action with its resisting component is the cleanest way to ensure none is missed — and is what examiners expect in a panel connection answer."
            },
            keyTerms: [
              { term: "Cross-wall construction", definition: "A load-bearing panel system in which only transverse walls carry gravity load, with floor planks spanning between them and the longitudinal facade non-bearing." },
              { term: "Shear key joint", definition: "A vertical joint between wall panels with castellated edges that interlock and resist shear by mechanical interlock once grouted." },
              { term: "Looped-bar joint", definition: "A floor plank joint where projecting loops of reinforcement from adjacent planks overlap and are encased in cast-in-situ concrete or grout to tie the floor together." }
            ],
            examQuestions: [
              {
                q: "Describe 2D panel systems in modular construction. Explain cross-wall arrangement and the three actions designed at each panel joint.",
                marks: 7,
                outline: [
                  "Panel family: load-bearing wall, facade, hollow-core plank, double-T, sandwich.",
                  "Panels cast flat in factory, transported flat, erected on site.",
                  "Cross-wall arrangement: transverse walls at 3-6 m carry floor planks; facade non-bearing.",
                  "Floor-to-wall bearing 50-75 mm with grouted joint for diaphragm action.",
                  "Vertical wall continuity by splice bars or grouted sleeves at horizontal joints.",
                  "Vertical joint between walls resists shear by cast-in shear keys with or without looped bars.",
                  "Three actions per joint: compression, shear and tie; well-detailed panel matches cast-in-situ seismic."
                ]
              },
              {
                q: "What is a cross-wall arrangement and where is it used?",
                marks: 2
              },
              {
                q: "List the three actions a panel joint must be designed for.",
                marks: 3
              }
            ]
          },
          // ----- 3.5 Modular vs Conventional -----
          {
            number: "3.5",
            title: "Modular vs Conventional Construction",
            body: [
              "Modular and conventional construction differ in where the work happens. Conventional construction brings materials, formwork and labour to the site and builds in place; trades follow one another sequentially — formwork, rebar, concrete, masonry, plaster, finishes. Modular construction moves most of the work to a factory and assembles finished or semi-finished elements on site. The site programme shrinks from months to weeks. The trade is the cost of the factory — its amortisation, its management overhead, its transport logistics — against the saving in site labour, site overheads and time-related finance charges.",
              "Time savings are the most cited advantage. A hotel of two hundred rooms built conventionally takes eighteen months on site; the same hotel built volumetrically can be erected in six months. The economic value of twelve months saved is enormous — interest on construction finance avoided, twelve months of room revenue gained, market entry ahead of competitors. Quality savings come next: a factory crew repeating the same room five hundred times produces a tighter, snaggier finish than a site crew building each room fresh. Safety improves: working at height is replaced by working at bench level in a lit, weatherproof shed.",
              "The downsides are real. Modular construction demands a higher design effort upfront — every service route, every connection and every tolerance must be resolved before production starts, because once the factory begins a run there is no easy mid-stream change. Transport access and crane availability at site are pre-requisites. The financing model differs — the manufacturer expects stage payments during factory production, months before any work appears on site, which can strain cash flow. The honest verdict: modular wins for repetitive buildings above about fifty units, conventional wins for one-off architectural designs, and hybrid wins for everything in between."
            ],
            bullets: [
              "Conventional builds on site sequentially; modular moves most work to the factory.",
              "Site programme shrinks from months to weeks with modular.",
              "A 200-room hotel: 18 months conventional vs 6 months volumetric.",
              "12 months saved yields interest avoided + 12 months of revenue gained.",
              "Factory crew of 500 repetitions produces tighter, snaggier finish.",
              "Safety: working at height replaced by bench-level work in a lit shed.",
              "Modular demands early design freeze; mid-stream change is costly."
            ],
            codeExample: {
              language: "text",
              caption: "Side-by-side comparison of modular vs conventional build metrics.",
              code: `Metric                  Modular         Conventional
---------------------   -----------     ------------
On-site programme       6 months        18 months
Factory vs site split   80 / 20         10 / 90
Labour on site          Low             High
Formwork cost           Low (moulds)    High (per pour)
Quality variance        Low             Moderate
Design freeze           Early           Late
Transport / crane       High            Negligible
Best project size       50+ modules     Any size
Interest saved          Large           None`
            },
            diagram: {
              kind: "fork",
              title: "Modular vs conventional — when to choose which",
              caption: "Repetition, schedule pressure and design novelty drive the decision.",
              start: "New project",
              branches: [
                { label: "Modular", outcome: "Over 50 repetitive units, schedule-critical, finance-light", good: true },
                { label: "Hybrid", outcome: "Mix of repetitive and bespoke — precast cores + conv. floors", good: true },
                { label: "Conventional", outcome: "One-off architecture, complex services, tight site access", good: true },
                { label: "Pure cast-in-situ", outcome: "Heavy foundation or transfer structure below modular build", good: false }
              ]
            },
            callout: {
              type: "exam",
              title: "Time-value argument wins marks",
              body: "When comparing modular and conventional, always quantify the time saving in months and convert to rupees via interest and revenue. Examiners reward the financial argument over a qualitative 'it is faster'. A 12-month saving on a 200-room hotel at Rs 5000/night is Rs 36 crore in additional revenue — that is the answer that scores."
            },
            keyTerms: [
              { term: "Sequential construction", definition: "Conventional site construction where trades follow one another — formwork, rebar, concrete, masonry, plaster, finishes — extending the programme." },
              { term: "Design freeze", definition: "The point at which the modular design is locked before factory production begins; changes after this point are expensive or impossible." },
              { term: "Stage payment", definition: "A financing model in which the modular manufacturer receives payments during factory production, months before any work appears on site." }
            ],
            examQuestions: [
              {
                q: "Compare modular and conventional construction across time, quality, safety and design effort. Recommend when each is preferred.",
                marks: 7,
                outline: [
                  "Conventional builds sequentially on site; modular moves most work to factory.",
                  "Time: 200-room hotel 18 months conventional vs 6 months volumetric.",
                  "Time value: 12 months saved = interest avoided + 12 months revenue gained.",
                  "Quality: factory crew of 500 repetitions tighter than site crew per room.",
                  "Safety: bench-level work in lit shed replaces work at height.",
                  "Design effort: modular demands early freeze; conventional tolerates late change.",
                  "Recommendation: modular for 50+ repetitive units; conventional for one-off; hybrid in between."
                ]
              },
              {
                q: "State two quality advantages of modular over conventional construction.",
                marks: 2
              },
              {
                q: "Why does modular construction demand an early design freeze?",
                marks: 3
              }
            ]
          }
        ]
      }
    },
    // ===================== UNIT IV =====================
    {
      number: 4,
      roman: "IV",
      title: "Connection and Detailing",
      summary:
        "Wet, dry and mechanical connections, their design for load and ductility, corbels and brackets, grouting and structural continuity, and seismic considerations in precast connections.",
      chapter: {
        number: "04",
        title: "Connection and Detailing",
        intro:
          "Unit IV tackles the detail that makes or breaks precast: wet, dry and mechanical connections; the three-step design of load path, tolerance and ductility; corbels, brackets and bearing details; grout, splice sleeves and shear keys for structural continuity; and seismic emulation per IS 13920 that lets precast match cast-in-situ ductility.",
        inOneBreath:
          "Connections are wet (cast-in-situ grout, monolithic), dry (bearing, fast) or mechanical (bolted, splice sleeve); design follows load path, tolerance absorption and ductility; corbels use strut-and-tie with horizontal ties and bearing plates; grout bonds elements and fills splice sleeves; seismic design emulates cast-in-situ via hybrid frames and precast shear walls with vertical prestress.",
        sections: [
          // ----- 4.1 Connection Types -----
          {
            number: "4.1",
            title: "Connection Types: Wet, Dry and Mechanical",
            body: [
              "Connections are the detail that makes or breaks a precast structure. They are classified by how they transfer load between elements. Wet connections use cast-in-situ concrete or grout to bond precast pieces — a beam is seated on a corbel, the gap is filled with non-shrink grout, and projecting bars from column and beam lap inside the grout to form a moment connection. Dry connections rely on direct bearing or friction, with no pour: a precast floor plank bears on a wall and is tied by a steel plate welded between embedded angles. Mechanical connections use bolted or threaded steel inserts cast into both elements.",
              "Wet connections give the most monolithic behaviour: when the grout cures, the joint behaves like cast-in-situ, ideal for seismic emulative frames where IS 13920 ductility must be met. They are slow — the joint is prepared, the bars positioned, the grout poured, and then the joint must cure before the next lift proceeds. Dry connections are fast: a beam seated and bolted is ready immediately for the next operation, but the joint lacks the ductility of a wet detail and is typically used in low-seismic zones or for non-structural members. Mechanical connections split the difference: faster than wet, more ductile than dry.",
              "Each type has its typical application. Wet connections appear at beam-column joints in seismic zones, at slab-to-shear-wall joints, and at column base plates where moment transfer matters. Dry connections appear at floor plank to wall bearing, facade panel to frame, and at the simple bearing seats of parking ramp beams. Mechanical connections — splice sleeves, bolted plates, threaded couplers — appear where speed is critical, where access is poor, or where wet curing is impractical. Designers combine them in one structure, picking the cheapest detail that meets the load and ductility demand at each joint."
            ],
            bullets: [
              "Wet connections bond elements by cast-in-situ grout or concrete; slow but monolithic.",
              "Dry connections use bearing or friction with no pour; fast but less ductile.",
              "Mechanical connections use bolted or threaded steel inserts cast into both elements.",
              "Wet joints ideal for seismic emulative frames per IS 13920.",
              "Dry joints used in low-seismic zones and for non-structural members.",
              "Mechanical joints (splice sleeve, bolted plate) where speed or access is critical.",
              "Designers mix types in one structure, picking the cheapest detail at each joint."
            ],
            table: {
              caption: "Connection types and their typical uses.",
              headers: ["Type", "Mechanism", "Speed", "Ductility", "Use"],
              rows: [
                ["Wet", "Cast-in-situ grout/concrete", "Slow", "High", "Seismic moment joints"],
                ["Dry bearing", "Direct bearing", "Instant", "Low", "Plank on wall, parking beam"],
                ["Dry welded", "Site-welded plates", "Fast", "Moderate", "Facade ties"],
                ["Mechanical bolted", "Bolted steel inserts", "Fast", "Moderate", "Beam-column joints"],
                ["Mechanical splice", "Grouted sleeve", "Medium", "High", "Column continuity"],
                ["Post-tensioned", "Strands stressed on site", "Medium", "High", "Slab diaphragm, seismic"]
              ]
            },
            diagram: {
              kind: "compare",
              title: "Wet vs dry vs mechanical connections",
              caption: "Three connection philosophies, three trade-offs of speed against ductility.",
              left: {
                heading: "Wet (cast-in-situ)",
                items: [
                  "Bonded by grout or concrete",
                  "Slow — needs cure time",
                  "Monolithic, emulative behaviour",
                  "Best for seismic moment joints",
                  "Hard to inspect once poured"
                ]
              },
              right: {
                heading: "Dry / Mechanical",
                items: [
                  "Bearing, friction or bolts",
                  "Fast — usable immediately",
                  "Lower ductility in pure form",
                  "Best for low-seismic or non-structural",
                  "Visible and inspectable after assembly"
                ]
              }
            },
            callout: {
              type: "warning",
              title: "Match type to ductility demand",
              body: "The most common connection error is using a dry bearing detail in a seismic moment joint. Dry joints lack the ductility to survive a design earthquake and are limited to low-seismic zones or non-structural members by IS 13920. Always verify the seismic zone before specifying a dry connection."
            },
            keyTerms: [
              { term: "Wet connection", definition: "A precast joint bonded by cast-in-situ concrete or non-shrink grout, producing monolithic emulative behaviour after cure." },
              { term: "Dry connection", definition: "A precast joint using direct bearing or friction with no pour, fast but limited in ductility to low-seismic zones." },
              { term: "Mechanical splice", definition: "A connection using bolted plates, threaded couplers or grouted sleeves to join reinforcing bars across a precast joint." }
            ],
            examQuestions: [
              {
                q: "Classify precast connections into wet, dry and mechanical. Compare their speed, ductility and typical uses with examples.",
                marks: 7,
                outline: [
                  "Wet: bond by cast-in-situ grout or concrete; slow but monolithic.",
                  "Dry: bearing or friction with no pour; instant but low ductility.",
                  "Mechanical: bolted plates, threaded couplers, grouted sleeves; medium speed, high ductility.",
                  "Wet at beam-column moment joints in seismic zones; slab-to-shear-wall; column base.",
                  "Dry at plank-on-wall bearing, facade ties, parking ramp beam seats.",
                  "Mechanical splice sleeves for column continuity; bolted plates for speed.",
                  "Designers mix types in one structure, picking cheapest detail meeting load + ductility."
                ]
              },
              {
                q: "Why are dry connections restricted to low-seismic zones?",
                marks: 2
              },
              {
                q: "List three typical applications of mechanical connections in precast.",
                marks: 3
              }
            ]
          },
          // ----- 4.2 Design of Connections -----
          {
            number: "4.2",
            title: "Design of Connections",
            body: [
              "Connection design begins with the load path. The designer lists every force that the joint must transfer — vertical gravity reaction, horizontal wind and seismic shear, bending moment, torsion — and assigns each to a component of the connection. A corbel transfers vertical load through bearing and shear friction; a splice sleeve transfers bar tension through grout bond; a welded plate transfers shear through the weld and bearing through the embedded steel. No component should serve two incompatible roles: the corbel that also resists moment becomes overstressed and brittle. Clarity of load path is the first principle.",
              "The second principle is tolerance absorption. The connection must accommodate the dimensional deviations of the elements it joins — a 6 mm length error in a column, a 5 mm bearing-seat deviation in a beam — without forcing the structure out of plumb or jamming the next lift. Oversized holes, slotted inserts, shims and grout beds each absorb specific deviations; the designer specifies the size of each gap so that the worst-case combination of tolerances still fits. A connection that fits only at nominal dimensions is unbuildable; one that fits at every tolerance extreme is robust.",
              "The third principle is ductility under overload. In a seismic event, the connection must deform without losing load capacity — the steel yields, the grout crushes, but the structure does not collapse. IS 13920 and ACI 318 Chapter 21 require strong-column weak-beam behaviour, capacity-designed connections that yield in the beam before the joint fails. Detailing rules — confined joint cores, anchored bars with hooks or mechanical anchors, closed ties — implement this requirement. A well-designed precast connection matches cast-in-situ seismic performance; a poorly designed one is the weak link that takes the building down."
            ],
            bullets: [
              "Step 1: list every load — gravity, shear, moment, torsion.",
              "Step 2: assign each to a component — corbel, sleeve, weld, plate.",
              "Step 3: size gaps to absorb worst-case tolerance stack.",
              "Step 4: check ductility via capacity design per IS 13920 / ACI 318 Ch. 21.",
              "Strong-column weak-beam: beam yields before joint fails.",
              "Confined joint cores with closed ties, hooks or mechanical anchors.",
              "Connection that fits at every tolerance extreme is robust; nominal-only is unbuildable."
            ],
            codeExample: {
              language: "text",
              caption: "Connection design checklist per ACI 318 Ch. 16 and IS 15916.",
              code: `[ ] List every load to be transferred (axial, shear, moment, torsion)
[ ] Identify load path through corbel, sleeve, weld or plate
[ ] Verify bearing stress < 0.85 f'c on concrete and < f_y on steel
[ ] Provide shear-friction steel across potential crack plane
[ ] Specify gap size to absorb worst-case tolerance stack
[ ] Check ductility: capacity design so beam yields before joint
[ ] Detail confined core with closed ties, hooks or mech. anchors
[ ] Specify grout strength >= element strength, non-shrink
[ ] Draw connection at 1:5 scale, including all reinforcement
[ ] Sign off by structural engineer before mould cutting`
            },
            diagram: {
              kind: "flow",
              title: "Three-step design process for a precast connection",
              caption: "Load path, tolerance, ductility — in that order.",
              steps: [
                { label: "List loads", note: "gravity, shear, moment, torsion" },
                { label: "Assign to components", note: "corbel, sleeve, weld, plate" },
                { label: "Size for tolerance", note: "oversized holes, shims, grout bed" },
                { label: "Check ductility", note: "capacity design per IS 13920" },
                { label: "Detail reinforcement", note: "confined core, hooks, ties" }
              ]
            },
            callout: {
              type: "exam",
              title: "Three principles in every answer",
              body: "Structure every connection-design answer around the three principles: load path clarity, tolerance absorption, ductility under overload. Examiners reward this three-pillar structure over a list of details, because it shows engineering judgement rather than rote learning."
            },
            keyTerms: [
              { term: "Load path", definition: "The route by which a force travels from one precast element to another through the connection components — corbel, sleeve, weld or plate." },
              { term: "Tolerance absorption", definition: "The provision of oversized holes, slotted inserts, shims and grout beds so a connection fits at every combination of element tolerances, not only at nominal dimensions." },
              { term: "Capacity design", definition: "A seismic design philosophy where the connection is detailed to be stronger than the yielding member, ensuring plastic hinges form in the beam before the joint fails." }
            ],
            examQuestions: [
              {
                q: "State the three principles of precast connection design and explain each. How is ductility ensured per IS 13920?",
                marks: 7,
                outline: [
                  "Principle 1: load path clarity — list loads and assign each to a component.",
                  "Principle 2: tolerance absorption — gaps sized for worst-case tolerance stack.",
                  "Principle 3: ductility under overload — connection deforms without collapse.",
                  "Detailing: confined joint cores, closed ties, hooks or mechanical anchors.",
                  "Capacity design: strong-column weak-beam per IS 13920 and ACI 318 Ch. 21.",
                  "Beam yields before joint fails; plastic hinge in beam, joint stays elastic.",
                  "Conclude: well-designed connection matches cast-in-situ seismic performance."
                ]
              },
              {
                q: "What is meant by tolerance absorption in a precast connection?",
                marks: 2
              },
              {
                q: "List three detailing rules for a confined precast joint core per IS 13920.",
                marks: 3
              }
            ]
          },
          // ----- 4.3 Corbels and Brackets -----
          {
            number: "4.3",
            title: "Corbels, Brackets and Bearing Details",
            body: [
              "A corbel is a short cantilevered bracket cast onto the face of a column or wall, on which a beam rests. Corbels transfer vertical load from beam to column through a strut-and-tie mechanism: the load pushes down on the corbel top, a compression strut runs diagonally into the column, and a horizontal tie of reinforcement at the top of the corbel resists the outward component. Failure modes include direct shear at the column face, crushing of the corbel under the bearing plate, and yielding of the tie steel. Design follows the shear-friction provisions of ACI 318 Chapter 16 or IS 456 Annex B.",
              "Bearing details on corbels include a steel bearing plate cast into the corbel top, sized so the bearing stress stays below 0.85 times the concrete cylinder strength. A neoprene pad between plate and beam allows rotation and accommodates dimensional tolerance. The beam is anchored to the corbel by welded or bolted clips that prevent uplift under seismic or wind loading — a beam that lifts off its corbel is a catastrophic failure. Vertical dowels projecting from the corbel into a pocket in the beam, grouted after erection, provide positive shear transfer beyond friction alone.",
              "Brackets, haunches and nibs are variations on the corbel. A bracket is a larger corbel that supports a heavier reaction, often at a beam-column joint in a parking structure. A haunch is a local deepening of a beam at its support, increasing the shear capacity where it is highest. A nib is a small projection from a wall or beam, supporting a secondary element such as a slab or facade panel. Each follows the same strut-and-tie logic but at different scales. The designer's job is to size the strut, the tie and the bearing plate so that all three work together."
            ],
            bullets: [
              "Corbel: short cantilevered bracket on column face, transfers beam load via strut-and-tie.",
              "Compression strut runs diagonally; horizontal tie resists outward component.",
              "Failure modes: direct shear, bearing crushing, tie yielding.",
              "Bearing plate sized so stress < 0.85 f'c.",
              "Neoprene pad allows rotation and tolerance absorption.",
              "Anchor clips prevent beam uplift; vertical dowels give positive shear transfer.",
              "Bracket (larger), haunch (beam deepening), nib (small projection) are corbel variants."
            ],
            table: {
              caption: "Bearing details and design data for corbels and brackets.",
              headers: ["Detail", "Function", "Design rule", "Reference"],
              rows: [
                ["Bearing plate", "Spread load on corbel", "Stress < 0.85 f'c", "ACI 318 16.7"],
                ["Neoprene pad", "Rotation and tolerance", "10-20 mm thick", "Industry practice"],
                ["Shear-friction steel", "Resist direct shear", "A_vf = V_u / (phi f_y mu)", "ACI 318 22.9"],
                ["Horizontal tie", "Resist strut outward force", "Anchored at column face", "IS 456 Annex B"],
                ["Anchor clip", "Prevent beam uplift", "Welded to embedded plates", "IS 15916"],
                ["Vertical dowel", "Positive shear transfer", "Grouted into beam pocket", "IS 13920"]
              ]
            },
            diagram: {
              kind: "fork",
              title: "Corbel failure modes and their preventions",
              caption: "Three failure paths, three details to block each.",
              start: "Load on corbel",
              branches: [
                { label: "Shear at column face", outcome: "Provide shear-friction steel and closed ties", good: true },
                { label: "Bearing crushing under plate", outcome: "Size plate so bearing stress < 0.85 f'c", good: true },
                { label: "Yield of horizontal tie", outcome: "Provide adequate top reinforcement ratio", good: true },
                { label: "Beam uplift off seat", outcome: "Add welded or bolted anchor clips", good: false }
              ]
            },
            callout: {
              type: "tip",
              title: "Strut-and-tie is the model",
              body: "Always analyse a corbel as a strut-and-tie model, not as a flexural member. The compression strut runs from the bearing plate diagonally into the column; the horizontal tie at the corbel top resists the strut's outward push. Sizing the strut (concrete), the tie (steel) and the bearing plate together is the cleanest path to a code-compliant corbel."
            },
            keyTerms: [
              { term: "Corbel", definition: "A short cantilevered bracket cast onto a column or wall face, transferring beam load through a strut-and-tie mechanism." },
              { term: "Shear-friction steel", definition: "Reinforcement crossing a potential shear crack plane in a corbel, designed by A_vf = V_u / (phi f_y mu) per ACI 318." },
              { term: "Haunch", definition: "A local deepening of a beam at its support that increases shear capacity where it is highest, following the same strut-and-tie logic as a corbel." }
            ],
            examQuestions: [
              {
                q: "Describe a precast corbel with its strut-and-tie action, failure modes, bearing details and the relevant design code provisions.",
                marks: 7,
                outline: [
                  "Define corbel: short cantilever on column face supporting a beam.",
                  "Strut-and-tie: diagonal compression strut + horizontal tie at corbel top.",
                  "Failure modes: direct shear at column face, bearing crushing, tie yielding.",
                  "Bearing plate sized for stress < 0.85 f'c per ACI 318 16.7.",
                  "Neoprene pad 10-20 mm thick for rotation and tolerance.",
                  "Shear-friction steel A_vf = V_u / (phi f_y mu) per ACI 318 22.9.",
                  "Anchor clips prevent beam uplift; vertical dowels give positive shear transfer."
                ]
              },
              {
                q: "What is the function of the horizontal tie reinforcement in a corbel?",
                marks: 2
              },
              {
                q: "Distinguish between a corbel, a bracket and a nib.",
                marks: 3
              }
            ]
          },
          // ----- 4.4 Grouting and Continuity -----
          {
            number: "4.4",
            title: "Grouting and Structural Continuity",
            body: [
              "Grout is the unsung material that makes precast structures continuous. A non-shrink cementitious grout fills the gap between precast column and beam, between precast wall panels, between precast floor planks, and inside splice sleeves that connect column bars from one storey to the next. Once cured, the grout bonds to the surrounding concrete and steel, transferring compression, shear and tension. Without grout, precast would be a stack of loose blocks; with grout, it behaves nearly monolithically. The right grout — non-shrink, high early strength, low bleed, particle-sized to fill the joint — is the precondition of every connection that claims emulative behaviour.",
              "Splice sleeves are the canonical grouted connection. A steel sleeve, cast into the top of a lower column, has bars projecting from both ends; the upper column's bars slide into the sleeve from above. The annular gap around the bars is filled with high-strength grout pumped through a port in the sleeve wall. Once the grout cures — typically 24 hours for early-strength products, 28 days for full strength — the splice develops the full tensile strength of the bars it connects. Splice sleeves are tested by the manufacturer for each bar size and grade; the design uses the manufacturer's certified strength.",
              "Shear keys and grouted joints form the second family. The edges of precast wall panels and floor planks are cast with castellations — zig-zag projections that interlock with the adjacent panel. The joint is then packed with grout, which fills the keys and bonds the panels. The keys resist shear by mechanical interlock, far stronger than grout alone could resist by friction. The vertical shear key joint in wall panels, the looped-bar joint between floor planks, and the grouted pocket at column bases are all variations on the same principle: cast interlock, grout bond, structural continuity."
            ],
            bullets: [
              "Non-shrink grout bonds precast elements and transfers compression, shear and tension.",
              "Splice sleeve: bar-to-bar connection via grouted annular gap inside steel sleeve.",
              "Sleeve develops full bar tensile strength after 24 h early / 28 d full cure.",
              "Grout pumped through inlet port until outlet flows; both ports then plugged.",
              "Shear keys: castellated panel edges interlock and resist shear by mechanical interlock.",
              "Looped-bar joint: overlapping loops of reinforcement grouted across floor plank joints.",
              "Grouted pocket at column base provides moment continuity to foundation."
            ],
            codeExample: {
              language: "text",
              caption: "Typical grout specification for splice sleeves and shear keys.",
              code: `Property                Value                  Test
----------------------  ---------------------  ----------------
Type                    Non-shrink cementitious  ASTM C1107
Compressive strength    >= 50 MPa @ 28 d       ASTM C109
Early strength          >= 25 MPa @ 24 h       ASTM C109
Flow (initial)          20-30 s, flow cone     ASTM C939
Bleed                   None visible           ASTM C940
Volume change           0 to +0.3 %            ASTM C1090
Temperature range       10-32 deg C placement  Manufacturer
Mixing water            3.0-3.5 L per 25 kg    Manufacturer
Pumping                 Inlet at bottom, outlet at top,
                        plug both after fill`
            },
            diagram: {
              kind: "pipeline",
              title: "Grouted splice sleeve installation sequence",
              caption: "From bar insertion to full-strength continuity in five steps.",
              stages: [
                { label: "Lower bar in sleeve", note: "cast into lower column" },
                { label: "Place upper column", note: "upper bar slides into sleeve" },
                { label: "Pump grout in inlet", note: "until outlet flows" },
                { label: "Plug ports", note: "maintain pressure" },
                { label: "Cure and test", note: "24 h early, 28 d full" }
              ]
            },
            callout: {
              type: "warning",
              title: "Grout fill is non-negotiable",
              body: "A splice sleeve with a void — even a small one — does not develop the bar's tensile strength and is the single most common cause of precast seismic failure. Always pump grout through the bottom inlet until it flows cleanly from the top outlet, plug both ports under pressure, and verify fill by tapping the sleeve after cure."
            },
            keyTerms: [
              { term: "Splice sleeve", definition: "A steel sleeve cast into a column into which the upper column's bars slide; the annulus is filled with high-strength grout to develop full bar tensile strength." },
              { term: "Shear key", definition: "A castellated projection cast into the edge of a precast panel that interlocks with the adjacent panel and resists shear by mechanical interlock once grouted." },
              { term: "Grouted pocket", definition: "A void at the base of a precast column into which foundation dowels project; the pocket is filled with grout to provide moment continuity to the foundation." }
            ],
            examQuestions: [
              {
                q: "Explain the role of grout in precast structural continuity. Describe a grouted splice sleeve and the installation sequence.",
                marks: 7,
                outline: [
                  "Grout bonds precast elements; transfers compression, shear and tension.",
                  "Non-shrink, high early strength, low bleed grout is the precondition of emulation.",
                  "Splice sleeve: steel sleeve cast into lower column with bar projecting.",
                  "Upper column bar slides into sleeve; annular gap filled by pumped grout.",
                  "Installation: lower bar in sleeve, place upper column, pump grout in inlet until outlet flows.",
                  "Plug both ports under pressure; cure 24 h early, 28 d full.",
                  "Shear keys and looped-bar joints are second family: cast interlock + grout bond."
                ]
              },
              {
                q: "State three properties required of a non-shrink grout for splice sleeves.",
                marks: 2
              },
              {
                q: "How does a castellated shear key resist shear between two precast wall panels?",
                marks: 3
              }
            ]
          },
          // ----- 4.5 Seismic Connections -----
          {
            number: "4.5",
            title: "Seismic Considerations in Precast Connections",
            body: [
              "Earthquakes test connections more than any other part of a precast structure. A cast-in-situ frame yields in the beam, redistributes load and survives; a precast frame with brittle connections yields nowhere, concentrates damage at the joint and collapses. The modern response is emulative design: detail the precast connections so that the frame behaves exactly as a cast-in-situ frame would under seismic loading, with plastic hinges forming in the beams and the joints remaining elastic. IS 13920 and ACI 318 Chapter 21 codify this emulation for India and the United States respectively, and the resulting structures can be designed for any seismic zone.",
              "The two seismic precast systems most used are the hybrid frame and the precast shear wall. In a hybrid frame, precast beams are connected to precast columns by post-tensioned strands that run through both, and mild steel bars that yield under severe seismic load. The strands re-center the beam after the quake; the mild steel dissipates energy. The result is a frame that survives the design earthquake with negligible residual drift. In a precast shear wall, vertical prestressing strands tie the wall panels to the foundation and to each other; the wall rocks slightly at the joints, dissipating energy without cracking.",
              "Detailing rules that make precast seismic-safe include: capacity-designed connections stronger than the beams they join; confined joint cores with closed ties; continuous vertical bars spliced by grouted sleeves; floor diaphragms tied to walls by welded or grouted connections that can develop the seismic shear; and ductile dry connections only in low-seismic zones. Site quality control matters as much as design — a grouted sleeve void or a missing tie can negate the ductility that the designer specified. Precast structures designed to IS 13920 have performed excellently in recent Indian earthquakes, disproving the old myth that precast is unsafe in seismic zones."
            ],
            bullets: [
              "Emulative design: precast behaves exactly as cast-in-situ under seismic load.",
              "Plastic hinges form in beams; joints remain elastic.",
              "IS 13920 (India) and ACI 318 Ch. 21 (US) codify emulation.",
              "Hybrid frame: post-tensioned strands + mild steel; strands re-center, steel dissipates.",
              "Precast shear wall: vertical prestress; wall rocks at joints to dissipate energy.",
              "Capacity-designed joints stronger than beams; confined cores with closed ties.",
              "Site QC equal to design — a voided sleeve negates ductility."
            ],
            table: {
              caption: "Seismic detailing requirements for precast connections.",
              headers: ["Requirement", "Code", "Detail"],
              rows: [
                ["Strong column weak beam", "IS 13920 7.2", "Sum Mc > 1.2 Sum Mb"],
                ["Capacity-designed joint", "IS 13920 7.4", "Vj designed for beam yield"],
                ["Confined joint core", "IS 13920 7.4", "Closed ties at close spacing"],
                ["Continuous vertical bars", "IS 13920 9.0", "Grouted sleeve splices"],
                ["Floor diaphragm tie", "IS 13920 10.0", "Welded/grouted shear ties"],
                ["Ductile dry connections", "ACI 318 21.11", "Zone-dependent only"]
              ]
            },
            diagram: {
              kind: "cycle",
              title: "Seismic design cycle for precast connections",
              caption: "Capacity design to ductile detail to emulate cast-in-situ to test to iterate.",
              steps: [
                { label: "Capacity design", note: "strong col, weak beam" },
                { label: "Ductile detailing", note: "closed ties, sleeves" },
                { label: "Emulate cast-in-situ", note: "plastic hinge in beam" },
                { label: "Subassembly test", note: "quasi-static cyclic" },
                { label: "Site QC", note: "grout fill, tie count" },
                { label: "Performance", note: "near-zero residual drift" }
              ]
            },
            callout: {
              type: "exam",
              title: "Dispel the seismic myth",
              body: "Always conclude a seismic-precast answer by dispelling the old myth that precast is unsafe in seismic zones. Modern emulative precast, designed to IS 13920 and detailed with confined cores and grouted sleeves, has performed excellently in recent Indian earthquakes. The myth persists from 1970s brittle-joint failures that emulation has since eliminated."
            },
            keyTerms: [
              { term: "Emulative design", definition: "Precast connection detailing that makes the frame behave under seismic load exactly as a cast-in-situ frame would, with plastic hinges in beams and elastic joints." },
              { term: "Hybrid frame", definition: "A seismic precast system using post-tensioned strands to re-center the beam and mild steel bars to dissipate energy, surviving the design earthquake with negligible residual drift." },
              { term: "Capacity design", definition: "A seismic design philosophy where the connection is stronger than the yielding beam, ensuring the plastic hinge forms in the beam and the joint remains elastic." }
            ],
            examQuestions: [
              {
                q: "Explain seismic considerations in precast connections. Describe emulative design, the hybrid frame and IS 13920 detailing rules.",
                marks: 7,
                outline: [
                  "Brittle precast connections concentrate damage and collapse; emulative design fixes this.",
                  "Emulation: plastic hinges in beams, joints elastic, matching cast-in-situ behaviour.",
                  "Codes: IS 13920 (India) and ACI 318 Ch. 21 (United States).",
                  "Hybrid frame: post-tensioned strands re-center; mild steel bars dissipate energy.",
                  "Precast shear wall: vertical prestress; wall rocks at joints to dissipate.",
                  "Detailing: capacity-designed joints, confined cores, grouted sleeves, diaphragm ties.",
                  "Site QC equals design — voided sleeve or missing tie negates ductility; dispel the myth."
                ]
              },
              {
                q: "What is a hybrid precast seismic frame?",
                marks: 2
              },
              {
                q: "State three IS 13920 detailing rules for precast seismic connections.",
                marks: 3
              }
            ]
          }
        ]
      }
    },
    // ===================== UNIT V =====================
    {
      number: 5,
      roman: "V",
      title: "Erection, Transport and Case Studies",
      summary:
        "Transport logistics, lifting and rigging, site erection sequence and tolerances, landmark case studies of bridges, housing and parking, and the sustainability and future trends of precast.",
      chapter: {
        number: "05",
        title: "Erection, Transport and Case Studies",
        intro:
          "Unit V closes the loop from factory to building: transport logistics and the road geometry that limits element size; lifting and rigging with cast-in anchors and sling geometry; site erection sequence with temporary bracing and erection tolerances; landmark Indian case studies of precast bridges, modular housing and parking structures; and the sustainability and future trends that define precast in 2024 and beyond.",
        inOneBreath:
          "Transport caps element width near 3.5 m and length near 15 m; lifting anchors are cast in and rated per manufacturer; sling angles stay 45 to 60 degrees from horizontal; erection sequences columns, beams, slabs, walls; temporary bracing is released only after the structural connection is complete; case studies span segmental bridges, mass housing and parking grids; sustainability cuts carbon via low-carbon mixes and long service life.",
        sections: [
          // ----- 5.1 Transport -----
          {
            number: "5.1",
            title: "Transport Logistics for Precast Elements",
            body: [
              "Transport is the cost ceiling on precast. Every element must leave the factory, travel to site, arrive undamaged, be lifted off the trailer and erected — all within the geometric and weight limits of public roads. A 12-metre hollow-core slab fits a standard flatbed trailer; a 3.5-metre-wide wall panel is the practical maximum on most Indian routes; a 15-metre prestressed beam needs a low-bed trailer and possibly police escort; anything larger must be cast on site. Transport planning begins not at despatch but at design: the maximum element dimension is decided by the route from factory to site, not by the designer's preference.",
              "A typical transport plan lists every element by ID, dimension, weight, trailer type, route, time window and lifting crane assignment. Elements are loaded in reverse order of erection — the last to be lifted rides nearest the cab, the first to be lifted rides at the rear — so the crane never has to dig past one element to reach another. Drivers are briefed on speed limits, bridge clearances, overhead power lines and site access. Police escorts, where required, are arranged in advance. The cost of an element on site is roughly its factory cost plus ten per cent for transport — but a wrong route or a late escort doubles that.",
              "Damage in transit is the most common failure mode. Flexural cracks appear when a beam is supported at the wrong points on the trailer; edge chips appear when straps are over-tensioned; surface scratches appear when elements rub against each other or the trailer bed. The rules are simple but easily broken: support the element at the lift points used in design, never at arbitrary locations; pad the straps with timber or rubber; restrain the element against longitudinal movement, not just vertical bounce; inspect at despatch and again at arrival, with a digital photo record for any damage claim."
            ],
            bullets: [
              "Transport caps element width near 3.5 m and length near 15 m on Indian routes.",
              "12 m hollow-core fits a flatbed; 15 m prestressed beam needs low-bed and escort.",
              "Transport planning starts at design: route geometry sets maximum element size.",
              "Elements loaded in reverse erection order — last lifted nearest the cab.",
              "Drivers briefed on speed limits, bridge clearances, power lines, site access.",
              "Transport cost is ~10% of factory cost; a wrong route doubles it.",
              "Support at design lift points; pad straps; restrain longitudinal movement."
            ],
            codeExample: {
              language: "text",
              caption: "Typical despatch sheet for a precast delivery.",
              code: `Element ID      Type             Dim (m)      Weight   Trailer
--------------  ---------------  -----------  -------  ----------
COL-3A-01       Column           0.4x0.4x3.6   1.4 t    Flatbed
COL-3A-02       Column           0.4x0.4x3.6   1.4 t    Flatbed
BM-3A-01        Beam             0.3x0.6x8.0   3.6 t    Flatbed
HC-3-01         Hollow-core      1.2x0.2x7.5   2.8 t    Flatbed
WALL-3S-01      Wall panel       3.0x2.8x0.18  3.5 t    A-frame
Total load                       5 elements    12.7 t   1 trailer
Escort         : Not required (max width 3.0 m)
Route          : Plant -> NH-52 -> Site gate 4
Lift crane     : TC-1 (12 t capacity at 20 m radius)
Time window    : 06:00 - 08:00 (low traffic)`
            },
            diagram: {
              kind: "flow",
              title: "Transport planning flow for a precast element",
              caption: "From despatch decision to lift-off at site.",
              steps: [
                { label: "Check dimensions vs route", note: "width, height, weight" },
                { label: "Select trailer type", note: "flatbed, low-bed, extendable" },
                { label: "Plan escort", note: "police if over 3.5 m wide" },
                { label: "Load in reverse erection order", note: "last lifted first" },
                { label: "Restrain and pad", note: "straps and timber" },
                { label: "Lift off at site", note: "crane ready before arrival" }
              ]
            },
            callout: {
              type: "tip",
              title: "Route governs design",
              body: "Never let a designer specify an element wider than the route from factory to site allows. The route geometry — minimum lane width, tightest corner radius, lowest bridge clearance — sets the maximum element dimension. Document the route survey before mould cutting and re-verify before every despatch."
            },
            keyTerms: [
              { term: "Reverse erection order", definition: "Loading sequence where the last element to be erected rides nearest the trailer cab and the first to be erected rides at the rear, so the crane never digs past one element to reach another." },
              { term: "Low-bed trailer", definition: "A trailer with a dropped deck used for tall or heavy precast elements such as long prestressed bridge beams that exceed flatbed height limits." },
              { term: "Police escort", definition: "A traffic-control escort required by law for over-dimensional precast loads, typically above 3.5 m width or 15 m length on Indian routes." }
            ],
            examQuestions: [
              {
                q: "Discuss transport logistics for precast elements. How does route geometry govern design, and what are the rules for damage prevention?",
                marks: 7,
                outline: [
                  "Transport is the cost ceiling on precast; 3.5 m width, 15 m length practical limits.",
                  "Route geometry (lane width, corner radius, bridge clearance) sets maximum element size.",
                  "Transport plan lists element ID, dimension, weight, trailer, route, time, crane.",
                  "Load in reverse erection order: last lifted nearest cab, first lifted at rear.",
                  "Driver briefing: speed limits, bridge clearances, power lines, site access.",
                  "Damage rules: support at design lift points, pad straps, restrain longitudinally.",
                  "Inspect at despatch and arrival with digital photo record for any damage claim."
                ]
              },
              {
                q: "Why are elements loaded on a trailer in reverse order of erection?",
                marks: 2
              },
              {
                q: "State three rules to prevent damage to precast elements during transport.",
                marks: 3
              }
            ]
          },
          // ----- 5.2 Lifting and Rigging -----
          {
            number: "5.2",
            title: "Lifting and Rigging of Precast Units",
            body: [
              "Every precast element is lifted at least three times — out of its mould, onto a trailer, and into its final position — and often four or more, with storage and intermediate handling. Each lift is designed as a structural event: the element must not crack under its own weight, the lifting anchors must not pull out, the rigging must remain stable. Lifting anchors are cast into the concrete during moulding — threaded sockets, lifting loops of prestressing strand, or proprietary anchors such as the Halfen or Peikko range — and rated for a working load that the manufacturer certifies per anchor.",
              "Rigging geometry determines whether the lift is stable. A four-leg sling lifting a panel at its four corners exerts an inward horizontal component on each anchor; the steeper the sling angle, the smaller the horizontal pull, but the longer the sling must be. Standard practice keeps sling angles between 45 and 60 degrees from the horizontal, which limits the horizontal component to about half the vertical load. A two-leg sling lifting a beam at its ends may have leg angles as low as 30 degrees; below this the horizontal pull dominates and the beam must be designed for the resulting compression.",
              "Lifting stresses differ from service stresses. A wall panel that hangs from its top edge is in bending under its own weight, with the tension on what will be the inside face of the wall; this tensile stress often exceeds any service load and demands temporary reinforcement. A column lifted from one end is a cantilever in bending. Prestressed elements are usually lifted from points that the prestress design has accounted for; non-prestressed elements often need a temporary steel spreader beam to lift from the right points without inducing cracks. The competent person — typically the precast plant's engineering manager — signs off every lifting design before the first lift."
            ],
            bullets: [
              "Every precast element is lifted at least three times — mould, trailer, final position.",
              "Lifting anchors cast in: threaded sockets, strand loops, Halfen or Peikko proprietary.",
              "Anchors rated per manufacturer; working load certified for each anchor.",
              "Four-leg sling: standard angles 45-60 degrees from horizontal.",
              "Two-leg sling: 30 degrees minimum; below this horizontal pull dominates.",
              "Wall panel lifted from top edge bends under self-weight; needs temporary reinforcement.",
              "Spreader beam used to lift non-prestressed elements at correct points without cracking."
            ],
            table: {
              caption: "Common lifting anchor types and working loads.",
              headers: ["Anchor", "Type", "Working load", "Use"],
              rows: [
                ["Threaded socket", "Steel insert cast in", "1-5 t", "Beams, columns"],
                ["Lifting loop", "Prestressing strand", "1-10 t", "Wall panels, slabs"],
                ["Halfen HFL", "Proprietary anchor", "1.25-25 t", "Wide panels, beams"],
                ["Peikko PPM", "Recessed anchor", "1.5-32 t", "Industrial elements"],
                ["Spreader beam", "Steel beam separate", "n/a", "Long slender elements"]
              ]
            },
            diagram: {
              kind: "pyramid",
              title: "Hierarchy of lifting design considerations",
              caption: "From the cheapest detail to the system-level lift plan.",
              tiers: [
                { label: "Anchor selection", note: "Rated load per manufacturer, cast in during pour" },
                { label: "Rigging geometry", note: "Sling angle 45-60 deg, horizontal pull check" },
                { label: "Element stress", note: "Bending under self-weight, temporary reinforcement" },
                { label: "Lift plan", note: "Crane capacity, radius, wind limits, sign-off" }
              ]
            },
            callout: {
              type: "warning",
              title: "Sling angle discipline",
              body: "A common rigging failure is using too-shallow a sling angle to save sling length. At 30 degrees from horizontal the horizontal pull on each anchor equals the vertical load; at 15 degrees it is nearly four times the vertical. Always check the horizontal pull at the chosen sling angle against the anchor's rated load — not the vertical load alone."
            },
            keyTerms: [
              { term: "Lifting anchor", definition: "A steel insert cast into a precast element during moulding, rated by the manufacturer for a maximum working load under lifting." },
              { term: "Sling angle", definition: "The angle a sling leg makes with the horizontal; standard practice keeps it between 45 and 60 degrees to limit horizontal pull on anchors." },
              { term: "Spreader beam", definition: "A temporary steel beam used above a precast element to distribute lift forces to the correct lift points without inducing bending cracks." }
            ],
            examQuestions: [
              {
                q: "Describe lifting and rigging of precast units. Explain sling angle effects, lifting stresses and the role of the spreader beam.",
                marks: 7,
                outline: [
                  "Every element lifted 3+ times; each lift designed as a structural event.",
                  "Anchors cast in: threaded sockets, strand loops, Halfen, Peikko.",
                  "Anchors rated per manufacturer; working load certified per anchor.",
                  "Four-leg sling: 45-60 deg from horizontal; horizontal pull about half vertical.",
                  "Two-leg sling: 30 deg minimum; below this beam designed for compression.",
                  "Lifting stresses differ from service: wall panel bends under self-weight from top.",
                  "Spreader beam used on non-prestressed elements to lift at correct points."
                ]
              },
              {
                q: "Why is the sling angle kept between 45 and 60 degrees from horizontal?",
                marks: 2
              },
              {
                q: "State three types of lifting anchors cast into precast elements.",
                marks: 3
              }
            ]
          },
          // ----- 5.3 Erection Sequence -----
          {
            number: "5.3",
            title: "Site Erection Sequence and Erection Tolerances",
            body: [
              "Erection converts a stack of precast elements into a building. The sequence is planned backwards from the building's structure: the most critical lifts — the heaviest, the most wind-exposed, the most inaccessible — are scheduled first, while the crane has the most room and the crew is fresh. Columns are usually erected first, braced temporarily, then beams placed on their corbels, then slabs placed on the beams, then walls and facades closed in. Each lift is checked against the erection drawing, placed with shim adjustment, grouted or bolted, and released from the crane only after the connection is stable.",
              "Temporary bracing is essential. A freestanding precast column before its beam is placed is a vertical cantilever with no lateral support; a stiff wind or an accidental nudge from the crane can topple it. Adjustable steel props, anchored to a slab or to ground anchors, hold each column plumb until the frame is closed. The braces are released only after the structural connection that they substitute has been completed — the grouted sleeve has cured, the bolt has been torqued, the diaphragm is in place. Releasing braces early is the most common cause of erection-stage collapses.",
              "Erection tolerances absorb the accumulated deviations of factory-cast elements and site-built foundations. IS 15916 specifies the maximum permitted deviation of a placed element from its theoretical grid: typically plus or minus 15 mm in plan position for a column, plus or minus 10 mm in elevation for a beam. These tolerances are looser than product tolerances because they absorb the small errors of every element below them. When the cumulative deviation exceeds tolerance, the designer is informed and the joint is re-detailed — shims added, pockets enlarged, a special connection fabricated. A disciplined erection keeps every element within tolerance; a sloppy one cascades errors until the structure cannot close."
            ],
            bullets: [
              "Erection sequence planned backwards from critical lifts (heaviest, wind-exposed).",
              "Standard order: columns braced -> beams on corbels -> slabs -> walls and facades.",
              "Each lift checked, shimmed, grouted/bolted, released only after stable.",
              "Temporary bracing holds columns plumb until frame is closed.",
              "Braces released only after grout cure, bolt torque, diaphragm in place.",
              "Erection tolerances: +/-15 mm column plan, +/-10 mm beam elevation per IS 15916.",
              "Cumulative deviation beyond tolerance triggers re-detailing with shims or specials."
            ],
            table: {
              caption: "Typical erection tolerances per IS 15916.",
              headers: ["Element", "Plan position", "Elevation", "Plumb"],
              rows: [
                ["Column at base", "+/- 15 mm", "+/- 10 mm", "+/- 6 mm per storey"],
                ["Beam seat", "+/- 10 mm", "+/- 5 mm", "n/a"],
                ["Slab edge", "+/- 15 mm", "+/- 5 mm", "n/a"],
                ["Wall panel", "+/- 10 mm", "+/- 10 mm", "+/- 6 mm"],
                ["Facade joint width", "+/- 5 mm", "+/- 5 mm", "n/a"],
                ["Overall building plumb", "n/a", "n/a", "+/- 25 mm total"]
              ]
            },
            diagram: {
              kind: "pipeline",
              title: "Erection sequence for a precast frame",
              caption: "From foundation handover to frame close in five stages.",
              stages: [
                { label: "Survey foundation", note: "verify grid and levels" },
                { label: "Erect columns", note: "brace each immediately" },
                { label: "Place beams on corbels", note: "grout and bolt" },
                { label: "Lay floor slabs", note: "grout shear keys" },
                { label: "Close walls and facades", note: "release braces" }
              ]
            },
            callout: {
              type: "exam",
              title: "Brace release rule",
              body: "Always state in an erection answer that temporary braces are released only after the permanent structural connection is complete — grout cured, bolt torqued, diaphragm placed. Releasing braces early is the most common cause of erection-stage collapses and is exactly what examiners look for as evidence of site-awareness."
            },
            keyTerms: [
              { term: "Temporary bracing", definition: "Adjustable steel props anchored to slab or ground that hold a precast column plumb until the permanent frame connection is completed." },
              { term: "Erection tolerance", definition: "The permitted deviation of a placed precast element from its theoretical grid, looser than product tolerance to absorb accumulated deviations." },
              { term: "Shim adjustment", definition: "The use of thin steel or plastic shims at bearing seats to bring a placed precast element to its correct elevation before grouting." }
            ],
            examQuestions: [
              {
                q: "Describe the site erection sequence for a precast frame, the role of temporary bracing, and erection tolerances per IS 15916.",
                marks: 7,
                outline: [
                  "Plan backwards from critical lifts; heaviest, wind-exposed, inaccessible first.",
                  "Standard order: columns braced, beams on corbels, slabs, walls and facades.",
                  "Each lift checked against drawing, shimmed, grouted/bolted, released when stable.",
                  "Temporary bracing: adjustable steel props hold columns plumb until frame closed.",
                  "Braces released only after grout cure, bolt torque, diaphragm in place.",
                  "Erection tolerances per IS 15916: +/-15 mm column plan, +/-10 mm beam elevation.",
                  "Cumulative deviation beyond tolerance triggers re-detailing with shims or specials."
                ]
              },
              {
                q: "When may temporary braces on an erected column be released?",
                marks: 2
              },
              {
                q: "State three erection tolerances per IS 15916 for placed precast elements.",
                marks: 3
              }
            ]
          },
          // ----- 5.4 Case Studies -----
          {
            number: "5.4",
            title: "Case Studies: Bridges, Housing, Parking",
            body: [
              "Precast concrete bridges are the highest-profile application of the technology. Segmental box girder bridges, built from precast segments match-cast against each other and post-tensioned together, span 50 to 200 metres per span and reach kilometres in total length; the Mumbai Trans Harbour Link and the Yamuna Expressway flyovers are Indian examples. Precast I-girder bridges, with pretensioned girders lifted onto piers and a cast-in-situ deck poured on top, span 15 to 40 metres and are the standard for medium-span highway crossings. The advantage is speed: a precast bridge can be opened to traffic months ahead of a cast-in-situ alternative, with traffic disruption minimised.",
              "Modular housing takes two forms in India. Mass affordable housing, such as the Pradhan Mantri Awas Yojana projects, uses precast concrete wall panels and hollow-core floor planks to build thousands of units per project, with three-day erection per block of flats. Premium modular housing uses steel-framed three-dimensional modules imported or locally fabricated, finished to hotel-grade interior quality and stacked to twelve storeys or more; Bhagini Planet and several Mumbai projects have demonstrated this. Both forms meet the central government's housing targets faster than conventional construction, with lower embodied carbon and better quality control.",
              "Precast parking structures are the technology's most repetitive application. A standard parking garage is a grid of precast columns at 9 to 12 metre centres, precast inverted-T or L-spandrel beams, and precast double-T floor units spanning between beams. The whole structure — columns, beams, slabs, walls, stairs and ramps — is precast and erected in a few weeks. Indian examples include airport parking at Bengaluru and Delhi, mall parking across all major cities, and metro station parking. Precast parking's economy comes from repetition: every level is identical to the one below, and the moulds amortise across hundreds of identical pours."
            ],
            bullets: [
              "Segmental box girder bridges span 50-200 m per span; Mumbai Trans Harbour Link.",
              "Precast I-girder bridges span 15-40 m; standard for medium highway crossings.",
              "Speed advantage: months ahead of cast-in-situ, traffic disruption minimised.",
              "PMAY mass housing: wall panels + hollow-core, 3-day erection per block.",
              "Premium modular: steel 3D boxes, hotel-grade finish, stacked to 12+ storeys.",
              "Precast parking: column + spandrel + double-T grid; erected in weeks.",
              "Indian parking examples: Bengaluru and Delhi airports, malls, metro stations."
            ],
            codeExample: {
              language: "text",
              caption: "Three Indian case studies at a glance.",
              code: `Project                       Type              Scale        Tech
---------------------------   ----------------  -----------  ------------------
Mumbai Trans Harbour Link     Segmental bridge  21.8 km      Match-cast seg, PT
Yamuna Expressway flyovers    I-girder bridge   ~165 km      Pretensioned girders
PMAY Bhopal mass housing      Load-bearing PC   2,500 units  Wall panels + HC
Bhagini Planet Mumbai         Modular housing   ~250 rooms   Steel 3D modules
Bengaluru airport parking     PC parking        3,500 bays   Col + IT + double-T
Delhi Metro station parking   PC parking        per station  Col + double-T ramps`
            },
            diagram: {
              kind: "compare",
              title: "Three flagship precast case study families",
              caption: "Each family shows precast winning on repetition, span or schedule.",
              left: {
                heading: "Bridges",
                items: [
                  "Segmental box girders span 50-200 m",
                  "I-girders span 15-40 m with cast-in-situ deck",
                  "Speed: months ahead of cast-in-situ",
                  "Traffic disruption minimised",
                  "Indian ex: Mumbai Trans Harbour Link"
                ]
              },
              right: {
                heading: "Housing + Parking",
                items: [
                  "Mass housing: wall panels + hollow-core",
                  "Premium modular: steel 3D boxes",
                  "PMAY projects: 3-day erection per block",
                  "Parking: column + spandrel + double-T grid",
                  "Indian ex: Delhi airport, metro station parking"
                ]
              }
            },
            callout: {
              type: "tip",
              title: "Name the project",
              body: "In a case-study answer, always name the project: Mumbai Trans Harbour Link for segmental bridges, PMAY Bhopal for mass housing, Bengaluru airport parking for parking structures. Named projects signal real knowledge and lift the answer from a generic description to a credible engineering case."
            },
            keyTerms: [
              { term: "Segmental box girder", definition: "A bridge superstructure built from precast concrete box segments match-cast against each other and post-tensioned together, spanning 50-200 m per span." },
              { term: "Match-cast segment", definition: "A precast bridge segment cast directly against the previous segment so that the joint faces match exactly, requiring only a thin epoxy bond at erection." },
              { term: "Double-T floor unit", definition: "A precast floor or roof element with two longitudinal ribs and a thin top flange, spanning 12-24 m and used in parking garages and stadia." }
            ],
            examQuestions: [
              {
                q: "Discuss three Indian case studies of precast construction: a segmental bridge, a mass housing project and a parking structure. State the technology and scale of each.",
                marks: 7,
                outline: [
                  "Segmental bridges: match-cast segments post-tensioned; span 50-200 m.",
                  "Indian example: Mumbai Trans Harbour Link, 21.8 km.",
                  "I-girder bridges: pretensioned girders + cast-in-situ deck; span 15-40 m.",
                  "Indian example: Yamuna Expressway flyovers.",
                  "Mass housing: wall panels + hollow-core planks; PMAY Bhopal 2500 units.",
                  "Parking: column + spandrel + double-T grid; Bengaluru airport 3500 bays.",
                  "Common thread: repetition, speed and quality control drive precast economics."
                ]
              },
              {
                q: "What is a segmental box girder bridge and what spans does it achieve?",
                marks: 2
              },
              {
                q: "Describe the structural layout of a precast parking garage.",
                marks: 3
              }
            ]
          },
          // ----- 5.5 Sustainability and Future -----
          {
            number: "5.5",
            title: "Sustainability and Future Trends",
            body: [
              "Precast concrete carries a mixed sustainability scorecard. On the positive side, factory casting reduces material waste to under five per cent, recycles process water, captures cement dust, and uses steel moulds that last decades. Tighter quality control means smaller safety margins, lower cement contents per square metre of floor, and longer service life. Transport is the negative — every truckload of precast burns diesel — but the construction-phase carbon is often lower than cast-in-situ because the site runs for weeks rather than months. The strongest sustainability case for precast is durability: a building that lasts a hundred years amortises its embodied carbon far below a building rebuilt every forty.",
              "Future trends converge on three directions. First, low-carbon mixes using fly ash, slag, calcined clay (LC3) and limestone fillers to cut cement's embodied carbon by thirty to fifty per cent without losing strength. Second, automation: robotic steel bending, automated concrete placement, AI-driven defect detection on stripped elements, and BIM-integrated production scheduling that closes the loop between design and factory. Third, modular and volumetric integration — precast structural cores with light-gauge steel modular rooms, hybrid precast-CLT floors, and 3D-printed precast cladding panels. Each direction pushes precast further from the concrete-yard stereotype of the 1970s and toward a true manufacturing industry.",
              "The Indian trajectory is set. Government programmes — Housing for All, Smart Cities, metro rail expansion, Bharatmala highways — all demand the speed and quality that precast delivers. Indian precast plants have multiplied from a handful in 2010 to over two hundred in 2024, with capacity now exceeding demand in some regions. Standards have caught up: IS 15916 for precast, the National Building Code 2016 amendments, and the upcoming precast seismic code give designers a complete regulatory framework. The remaining barriers are skill and finance — both fall as the industry scales. Precast and modular construction in India is no longer the future; it is the present, just unevenly distributed."
            ],
            bullets: [
              "Factory casting cuts material waste under 5% and recycles process water.",
              "Steel moulds last decades; tighter QC means lower cement per sq m.",
              "Transport is the carbon penalty, but site phase runs weeks not months.",
              "Durability is the strongest case: 100-year life amortises embodied carbon.",
              "Low-carbon mixes: fly ash, slag, LC3, limestone filler cut cement carbon 30-50%.",
              "Automation: robotic bending, AI defect detection, BIM-integrated scheduling.",
              "India: from a handful of plants in 2010 to 200+ in 2024; standards now complete."
            ],
            table: {
              caption: "Sustainability strategies and future trends in precast.",
              headers: ["Strategy", "Saving", "Status"],
              rows: [
                ["Fly ash / slag blend", "30-50% cement carbon", "Standard practice"],
                ["Calcined clay (LC3)", "30-40% cement carbon", "Pilot scale"],
                ["Self-compacting concrete", "Lower reject rate", "Standard in plants"],
                ["Automated batching", "Reduced waste <5%", "Standard in plants"],
                ["Recycled aggregate", "Up to 30% of coarse", "Trial in plants"],
                ["BIM-driven production", "Schedule efficiency", "Adopted widely"],
                ["3D-printed cladding", "Material geometry", "Pilot projects"]
              ]
            },
            diagram: {
              kind: "layers",
              title: "Sustainability layers of a precast building",
              caption: "Each layer cuts carbon or extends life; the combination is decisive.",
              layers: [
                { label: "Low-carbon mix", note: "Fly ash, slag, LC3, limestone filler" },
                { label: "Efficient section", note: "Prestress enables slender members" },
                { label: "Durable structure", note: "100-year service life amortises carbon" },
                { label: "Deconstructable joints", note: "Bolted details enable reuse" },
                { label: "Recycled aggregates", note: "Crushed concrete returns to new precast" }
              ]
            },
            callout: {
              type: "warning",
              title: "Durability beats low carbon",
              body: "The strongest sustainability case for precast is not low-carbon cement but durability. A precast building that lasts a hundred years amortises its embodied carbon far below a building rebuilt every forty years. Always pair the low-carbon mix argument with the long-service-life argument — together they defeat the cast-in-situ sustainability claim."
            },
            keyTerms: [
              { term: "Low-carbon mix", definition: "A concrete mix using fly ash, slag, calcined clay (LC3) or limestone fillers to replace Portland cement and cut embodied carbon by 30-50% without losing strength." },
              { term: "Embodied carbon", definition: "The total greenhouse-gas emissions from extracting, manufacturing, transporting and installing a building material, measured per unit mass or floor area." },
              { term: "LC3", definition: "Limestone Calcined Clay Cement, a low-clinker cement replacing up to 50% of Portland cement with calcined clay and limestone, cutting embodied carbon 30-40%." }
            ],
            examQuestions: [
              {
                q: "Discuss the sustainability of precast construction and three future trends. Describe the Indian trajectory with government programmes and standards.",
                marks: 7,
                outline: [
                  "Positives: factory waste <5%, water recycle, steel moulds last decades.",
                  "Negative: transport diesel; offset by shorter site phase.",
                  "Strongest case: durability — 100-year life amortises embodied carbon.",
                  "Trend 1: low-carbon mixes (fly ash, slag, LC3, limestone) cut cement carbon 30-50%.",
                  "Trend 2: automation — robotic bending, AI defect detection, BIM-integrated scheduling.",
                  "Trend 3: modular + volumetric integration — precast cores + steel rooms + CLT floors.",
                  "India: PMAY, Smart Cities, metro, Bharatmala drive demand; 200+ plants; IS 15916 + NBC 2016."
                ]
              },
              {
                q: "Why is durability the strongest sustainability case for precast?",
                marks: 2
              },
              {
                q: "State three low-carbon mix ingredients used to replace Portland cement.",
                marks: 3
              }
            ]
          }
        ]
      }
    }
  ],
  studyPlan: [
    {
      id: "weights",
      heading: "Exam-weighted topics",
      body: [
        "Topics below are ranked by typical RGPV weight in the CE-603(B) question paper. Topics at the top appear almost every year and should be revised first; topics at the bottom are occasional and may be touched last.",
        "Marks are out of the 70-mark end-semester paper; tutorial and sessional marks are not included."
      ],
      weightedTopics: [
        { topic: "Connection types and design (wet, dry, mechanical)", weight: "12-14 marks", note: "Always appears; master corbels and splice sleeves." },
        { topic: "Modular coordination and standardisation", weight: "10-12 marks", note: "Numerical grid problems common." },
        { topic: "3D volumetric vs 2D panel systems", weight: "8-10 marks", note: "Compare-and-contrast format." },
        { topic: "Precast beams, columns, slabs", weight: "8-10 marks", note: "Classification and prestress." },
        { topic: "Production, moulds and curing", weight: "6-8 marks", note: "Factory methods and QC." },
        { topic: "Erection sequence and tolerances", weight: "6-8 marks", note: "Site operations focus." },
        { topic: "Transport and lifting", weight: "5-7 marks", note: "Logistics and rigging geometry." },
        { topic: "Seismic detailing of connections", weight: "5-7 marks", note: "IS 13920 emulative design." },
        { topic: "History and advantages", weight: "4-6 marks", note: "Short questions only." },
        { topic: "Case studies and sustainability", weight: "4-6 marks", note: "Named projects win marks." }
      ]
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Designed for a steady six-week run before the end-semester paper. Each week pairs theory with a worked example and a past-paper question."
      ],
      weeks: [
        {
          week: "Week 1",
          focus: "Unit I — Introduction",
          tasks: [
            "Read history of precast; memorise five milestones with year and inventor.",
            "List advantages and limitations; prepare a 7-mark comparison.",
            "Note material specifications: cement, w/c, steel, embeds.",
            "Distinguish precast vs cast-in-situ and factory vs site casting."
          ]
        },
        {
          week: "Week 2",
          focus: "Unit II — Elements and production",
          tasks: [
            "Classify beams, columns, slabs, walls, stairs, piles and pipes.",
            "Trace the prestressed beam production pipeline.",
            "Compare mould types and vibration methods.",
            "Practise a QC calculation on cube strengths per IS 456."
          ]
        },
        {
          week: "Week 3",
          focus: "Unit III — Modular construction",
          tasks: [
            "Memorise modular coordination values: 100 mm module, IS 15916 grids.",
            "Distinguish 3D volumetric vs 2D panel systems.",
            "List types of modular construction (steel, concrete, timber, hybrid).",
            "Prepare a 7-mark modular vs conventional comparison."
          ]
        },
        {
          week: "Week 4",
          focus: "Unit IV — Connections and detailing",
          tasks: [
            "Classify connections: wet, dry, mechanical.",
            "Design a corbel: bearing plate, shear-friction steel, tie.",
            "Trace the grouted splice sleeve installation sequence.",
            "Revise IS 13920 seismic detailing rules for precast."
          ]
        },
        {
          week: "Week 5",
          focus: "Unit V — Erection and case studies",
          tasks: [
            "Draw the transport planning flow and lifting anchor hierarchy.",
            "Memorise erection tolerances per IS 15916.",
            "List three Indian case studies: bridges, housing, parking.",
            "Prepare a sustainability trends 7-mark answer."
          ]
        },
        {
          week: "Week 6",
          focus: "Revision and full papers",
          tasks: [
            "Solve one full past paper under timed conditions.",
            "Re-attempt all 7-mark questions from memory.",
            "Review callout boxes and key terms across all 25 sections.",
            "Final pass on numerical: tolerance stack, cube QC, modular grid."
          ]
        }
      ]
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The day before the exam is for consolidation, not new material. Focus on the highest-weight topics and the questions you have already practised."
      ],
      bullets: [
        "Re-read the three highest-weight sections: connections, modular coordination, volumetric vs panel.",
        "Memorise five exam values: 100 mm module, 0.85 f'c bearing, IS 15916 tolerances, IS 13920 strong-column weak-beam, splice sleeve 28-day grout strength.",
        "Skim every callout box in this file — they hold the examiner-favoured answers.",
        "Practise drawing the production pipeline and splice sleeve installation flow.",
        "List three Indian case studies by name: Mumbai Trans Harbour Link, PMAY Bhopal, Bengaluru airport parking.",
        "Sleep seven hours; arrive ninety minutes early with two pens, a sharp pencil and an eraser."
      ]
    },
    {
      id: "exam-hall",
      heading: "Exam-hall tactics",
      bullets: [
        "Spend the first five minutes reading the whole paper; mark the 7-mark questions you can answer and start with those.",
        "For every 7-mark answer, write the outline as the first paragraph — the examiner sees the structure before reading detail.",
        "Always draw a diagram, even a rough one; a flow, pipeline or compare diagram lifts a 5-mark answer to a 7-mark one.",
        "Quote IS codes by number: IS 15916 for precast, IS 13920 for seismic, IS 456 for concrete, IS 2911 for piles.",
        "Keep numerical answers in SI units; never mix millimetres and metres in the same calculation."
      ]
    },
    {
      id: "slips",
      heading: "Common slips to avoid",
      bullets: [
        "Confusing 'precast' (off-site cured) with 'prefabricated' (any off-site work) — precast is a subset.",
        "Forgetting that prestress transfer happens after concrete cure, not during pouring.",
        "Quoting ACI 318 in an Indian paper without also citing IS 15916 — examiners want both.",
        "Mixing up wet connections (slow, monolithic) and dry connections (fast, brittle) in answers.",
        "Drawing a corbel without the horizontal tie reinforcement — the tie is what makes it work.",
        "Stating 'precast is unsafe in seismic zones' — modern emulative precast matches cast-in-situ seismic performance."
      ]
    }
  ]
};
