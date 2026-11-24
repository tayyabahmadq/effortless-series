/**
 * Academics - RGPV Civil Engineering 4th-semester subject: CE-402
 * Construction Technology.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries 3 body paragraphs (~110 words
 * each), 5 bullets, a diagram, a callout, a table or code sample, 3 key
 * terms and 3 exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce402: AcademicSubject = {
  id: "ce-402",
  code: "CE-402",
  title: "Construction Technology",
  semester: "IV Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to construction technology for civil engineers: foundations and dewatering, walls and masonry bonds, floors and roofs, finishing operations, and modern techniques from precast concrete to 3D printing and BIM.",
  description:
    "Five units walk from foundation design - site investigation, bearing capacity, shallow and deep foundations, excavation and dewatering - through walls and masonry with stone and brick bonds, cavity and partition walls, lintels and arches; across floors and roofs, doors and windows; into stairs, plastering, pointing, painting and finishing; and finally to modern techniques: precast and slip-form construction, 3D printing, prefabrication, green materials and BIM. Every section pairs the textbook theory with a worked numerical or code example, a redrawable diagram, and three exam-style questions including one full 7-mark answer outline.",
  accentColor: "#f59e0b",
  emoji: "CT",
  unitCount: 5,
  totalSections: 25,
  units: [
    // =========================== UNIT I - FOUNDATIONS ===========================
    {
      number: 1,
      roman: "I",
      title: "Foundations",
      summary:
        "Foundations transfer structural loads to the ground safely and without excessive settlement. Unit I covers site investigation and bearing capacity, shallow foundations (strip, isolated, combined), deep foundations (pile and well), and the excavation and dewatering operations that turn design into a clean working base.",
      chapter: {
        number: "01",
        title: "Foundations",
        intro:
          "Unit I builds the foundation vocabulary: site investigation methods and the bearing capacity equation, shallow foundation forms and their proportioning, deep foundation types and their load transfer, and the excavation and dewatering operations that turn design into a working pit.",
        inOneBreath:
          "Site investigation defines the soil profile and the water table; bearing capacity follows from shear strength via Terzaghi's equation with shape and depth factors; shallow foundations (strip, isolated, combined) carry light column loads to 1-3 m depth; deep foundations (piles and wells) reach hard strata when the top soil is weak; excavation is staged with sloping or shoring and dewatering by wellpoint or sump keeps the pit dry.",
        sections: [
          {
            number: "1.1",
            title: "Site investigation",
            body: [
              "Site investigation is the systematic programme of field and laboratory work executed before foundation design begins. Its purpose is to determine the sequence and thickness of soil strata beneath a plot, the groundwater level, the engineering properties of each layer, and any hazards such as fill, soft clay, or cavities. The scope depends on project size: a single-bay house may need only trial pits, while a multi-storey frame requires boreholes at each column grid. IS 1892 and IS 1080 govern spacing, depth and reporting format, and the site investigation report is the contract between geotechnical uncertainty and structural design.",
              "The methods of investigation are selected by expected depth and soil type. Trial pits are dug by hand or excavator to 3-4 m, exposing a clean face from which undisturbed samples are cut; they suit shallow foundations and quick visual classification. Boreholes drilled by auger or rotary rig reach 15-30 m and yield split-spoon samples for the standard penetration test, the workhorse index of in-situ density. For very soft soils the static cone penetration test gives a continuous resistance profile. Geophysical methods - seismic refraction and electrical resistivity - cover large areas without boring but need calibration against boreholes for interpretation.",
              "Sampling splits into disturbed samples, used for classification and grain-size analysis, and undisturbed samples, used for triaxial shear, consolidation and permeability tests. Disturbed samples are taken every 1.5 m or at every change of stratum, sealed in bags and labelled with borehole number and depth. Undisturbed samples are cut into thin-walled tubes, waxed at both ends to preserve water content, and shipped upright to the laboratory. The report integrates borelogs, field test values and laboratory results into a soil profile drawing, a recommended bearing capacity, and a settlement estimate. Without this report every later calculation in this unit becomes guesswork.",
            ],
            bullets: [
              "Trial pits: hand-dug or excavated to 3-4 m; expose a clean face for visual log and shallow undisturbed sampling.",
              "Boreholes: auger or rotary to 15-30 m; split-spoon samples feed the standard penetration test (SPT).",
              "Static cone penetration test (CPT): continuous resistance profile, ideal for soft or layered soils.",
              "Geophysics: seismic refraction and electrical resistivity scan large sites cheaply; need calibration against boreholes.",
              "Sampling: disturbed in bags for grain size and Atterberg limits; undisturbed in waxed tubes for triaxial and consolidation tests.",
            ],
            table: {
              caption: "Investigation methods by site condition.",
              headers: ["Method", "Max depth", "Soil best suited", "Output"],
              rows: [
                ["Trial pits", "3-4 m", "Stiff soil near surface", "Visual log, undisturbed blocks"],
                ["Auger boring", "5-10 m", "Cohesive soil above water table", "Disturbed samples"],
                ["Rotary boring", "15-30 m", "Hard strata, rock", "Cores, SPT values"],
                ["CPT", "20-30 m", "Soft clay, sand", "Continuous qc, fs profile"],
                ["Geophysics", "Site-wide", "Any, with boreholes", "Strata interfaces, anomaly map"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Site investigation from scope to design input",
              caption:
                "Each step tightens the soil model that feeds the bearing capacity calculation.",
              steps: [
                { label: "Define scope and loads", note: "IS 1892 spacing rules" },
                { label: "Field work: pits and boreholes", note: "samples and SPT" },
                { label: "Laboratory testing", note: "classification, triaxial, consolidation" },
                { label: "Borelog + report", note: "soil profile drawing" },
                { label: "Bearing capacity + settlement", note: "design input" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry the chain",
              body: "RGPV loves the chain from scope to field to lab to report to bearing capacity. List the methods with one depth and one soil type each, then quote IS 1892 spacing - one borehole per 300 sqm for ordinary structures, closer for multi-storey buildings.",
            },
            keyTerms: [
              { term: "Site investigation", definition: "The full programme of field and laboratory work that establishes the soil profile and engineering properties for foundation design." },
              { term: "SPT N-value", definition: "Number of blows of a 63.5 kg drop hammer driving a split-spoon 300 mm; the standard index of in-situ density." },
              { term: "Undisturbed sample", definition: "Soil sample taken in a thin-walled tube with structure and water content preserved, used for shear and consolidation tests." },
            ],
            examQuestions: [
              {
                q: "Describe the objectives and methods of site investigation for a multi-storey building. Explain how SPT and CPT results feed into the bearing capacity calculation.",
                marks: 7,
                outline: [
                  "State objectives: strata sequence, water table, engineering properties, hazards.",
                  "List IS 1892 spacing: one bore per 300 sqm for ordinary buildings; grid spacing 15-30 m for multi-storey.",
                  "Describe trial pits and auger boreholes for shallow investigation.",
                  "Describe rotary boring with SPT: 63.5 kg hammer, 150 mm initial drive ignored, count blows for next 300 mm to get N.",
                  "Describe CPT: continuous cone resistance qc, sleeve friction fs, ideal for soft soils.",
                  "Explain conversion: N to angle of shearing resistance by Peck-Hanson charts; qc to undrained cohesion by cu = qc / 15-20.",
                  "Close with the report contents: borelogs, soil profile, recommended bearing capacity, settlement estimate.",
                ],
              },
              {
                q: "Differentiate between disturbed and undisturbed soil samples, and state two uses of each.",
                marks: 3,
              },
              {
                q: "What is the standard penetration test and what does its N-value indicate?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Soil bearing capacity",
            body: [
              "The bearing capacity of a soil is the maximum pressure it can carry without shear failure or excessive settlement. Two limits define it: the ultimate bearing capacity q_ult, at which the soil beneath the footing yields and punches downward, and the safe bearing capacity q_safe = q_ult / F, obtained by dividing by a factor of safety typically 2.5 to 3. Settlement is checked separately and is often the governing criterion on soft clays. IS 6403 gives the design procedure for shallow foundations, integrating soil parameters, footing shape and depth into a single recommended pressure.",
              "Terzaghi's equation for a strip footing at depth Df with width B is q_ult = c Nc + q Nq + 0.5 gamma B N_gamma, where c is cohesion, gamma is unit weight, q = gamma Df is the surcharge, and Nc, Nq, N_gamma are bearing-capacity factors that depend only on the angle of shearing resistance phi. For square, circular and rectangular footings, shape factors multiply the c and gamma terms. For footings below the water table, the submerged unit weight gamma' = gamma_sat - gamma_w replaces gamma in the gamma term and in the surcharge term where the water table is above the base.",
              "The factors Nc, Nq and N_gamma grow sharply with phi. For phi = 0 (undrained clay), Nc = 5.14, Nq = 1 and N_gamma = 0, giving q_ult = c Nc + q, the classic bearing capacity of soft clay. For phi = 30 deg, Nq = 18.4 and N_gamma = 22.4, giving much higher capacity in dense sand. Field practice derives phi and c from SPT N-values via correlations or from direct shear and triaxial tests. Plate load tests on a 300 mm plate at the founding depth give a direct load-settlement curve and a check on the calculated q_safe for major foundations.",
            ],
            bullets: [
              "Ultimate bearing capacity q_ult: the pressure at which a shear-failure wedge forms beneath the footing.",
              "Safe bearing capacity q_safe = q_ult / F, with F = 2.5-3; settlement is checked separately.",
              "Terzaghi strip: q_ult = c Nc + q Nq + 0.5 gamma B N_gamma, with q = gamma Df.",
              "Shape factors: 1.3 c Nc for square/circular; 0.4 gamma B N_gamma for square; 0.3 for circular.",
              "Water-table correction: replace gamma by submerged unit weight gamma' in the relevant terms when within B below the base.",
            ],
            codeExample: {
              language: "python",
              caption: "Terzaghi bearing capacity with shape factors and FOS.",
              code: `# Terzaghi's ultimate bearing capacity
# q_ult = c*Nc + q*Nq + 0.5*gamma*B*N_gamma  (strip)

def terzaghi(c, gamma, Df, B, Nc, Nq, Ngamma, shape="strip"):
    q = gamma * Df                       # surcharge at founding depth
    if shape == "strip":
        return c*Nc + q*Nq + 0.5*gamma*B*Ngamma
    if shape == "square":
        return 1.3*c*Nc + q*Nq + 0.4*gamma*B*Ngamma
    if shape == "circular":
        return 1.3*c*Nc + q*Nq + 0.3*gamma*B*Ngamma

# Soil: c=30 kPa, gamma=18 kN/m3, Df=1.5 m, B=2.0 m, phi=25 deg
Nc, Nq, Ng = 25.13, 12.72, 9.70
q_ult  = terzaghi(30, 18, 1.5, 2.0, Nc, Nq, Ng)
q_safe = q_ult / 3.0
print(f"q_ult = {q_ult:.1f} kPa, q_safe = {q_safe:.1f} kPa")
# q_ult = 1271.9 kPa, q_safe = 424.0 kPa`,
            },
            diagram: {
              kind: "pipeline",
              title: "From phi to safe bearing capacity",
              caption:
                "Each stage converts the next parameter; never skip the water-table correction.",
              stages: [
                { label: "Lab tests", note: "c, phi, gamma from triaxial or direct shear" },
                { label: "Bearing factors", note: "Nc, Nq, N_gamma from phi by tables" },
                { label: "Apply Terzaghi", note: "shape and depth factors" },
                { label: "Water-table correction", note: "submerged gamma where needed" },
                { label: "Divide by FOS", note: "q_safe = q_ult / 2.5-3" },
              ],
            },
            callout: {
              type: "exam",
              title: "Carry the formula and two factor sets",
              body: "Memorise the Terzaghi strip formula and the shape factors (1.3, 0.4, 0.3). For phi = 0, quote Nc = 5.14, Nq = 1, N_gamma = 0; for phi = 30 deg, quote Nq = 18.4 and N_gamma = 22.4. The seven-mark question will ask for q_ult AND q_safe, so apply the FOS at the last step.",
            },
            keyTerms: [
              { term: "Ultimate bearing capacity", definition: "The maximum pressure at the base of a footing just before the soil fails in shear." },
              { term: "Safe bearing capacity", definition: "q_ult divided by a factor of safety (2.5-3) to limit shear failure risk and settlement." },
              { term: "Bearing-capacity factors", definition: "Nc, Nq and N_gamma, functions of the angle of shearing resistance phi, multiplying the cohesion, surcharge and width terms in Terzaghi's equation." },
            ],
            examQuestions: [
              {
                q: "State Terzaghi's bearing-capacity equation for a strip footing and explain each term. Calculate the safe bearing capacity for c = 30 kPa, phi = 25 deg, gamma = 18 kN/m3, Df = 1.5 m, B = 2.0 m, with F = 3.",
                marks: 7,
                outline: [
                  "Write q_ult = c Nc + q Nq + 0.5 gamma B N_gamma with q = gamma Df.",
                  "Define each term: c = cohesion, gamma = unit weight, Df = founding depth, B = width, N factors.",
                  "For phi = 25 deg, give Nc = 25.13, Nq = 12.72, N_gamma = 9.70 from standard tables.",
                  "Compute q = gamma x Df = 18 x 1.5 = 27 kPa.",
                  "Compute q_ult = 30 x 25.13 + 27 x 12.72 + 0.5 x 18 x 2 x 9.70 = 753.9 + 343.4 + 174.6 = 1271.9 kPa.",
                  "Apply FOS: q_safe = 1271.9 / 3 = 424.0 kPa.",
                  "Note water-table correction would replace gamma by submerged gamma when within B below the base.",
                ],
              },
              {
                q: "List the corrections applied to Terzaghi's bearing capacity for shape of footing and water-table position.",
                marks: 3,
              },
              {
                q: "Why is the safe bearing capacity smaller than the ultimate bearing capacity? State the typical factor of safety used.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Shallow foundations: strip, isolated, combined",
            body: [
              "A shallow foundation transfers structural loads to the near-surface soil at a depth not exceeding about 3 m or 1.5 times the width. Three forms cover the vast majority of buildings. A strip footing is a continuous slab under a load-bearing wall, usually of reinforced concrete with width determined by wall load divided by allowable soil pressure. An isolated (or pad) footing is a single rectangular or square pad under one column; it may be plain or stepped in masonry, or flat with reinforcement in RCC. A combined footing serves two or more columns so close that their pads would overlap, and is rectangular or trapezoidal in shape depending on column loads.",
              "The width of a strip footing under a wall carrying W kN per metre run on soil with safe bearing capacity q_safe is B = W / q_safe, then rounded up to the next multiple of 150 mm. The thickness is governed by one-way shear at the critical section d away from the wall face, by punching shear at the column face, and by bending moment at the wall face. IS 456 prescribes minimum depth by shear and a minimum reinforcement of 0.12 percent for slabs and 0.15 percent for footings in mild steel. A plain concrete bed of M15 or M20 spreads the load and protects the reinforcement from corrosion.",
              "Combined footings are used when a column sits on a property line so that its isolated footing would be eccentric, or when two adjacent columns are too close for independent pads. The footing is designed so that the resultant of column loads passes through the centroid of the contact area, producing uniform bearing pressure. A strap footing connects an edge column pad to an interior pad by a stiff strap beam, transferring moment without bearing. The structural design then proceeds by treating the contact pressure as a known upward load and the columns as supports - the inverse of a continuous beam analysis.",
            ],
            bullets: [
              "Strip footing: continuous pad under a wall; width B = wall load per metre / q_safe.",
              "Isolated footing: single pad under one column; checked for one-way shear, punching shear and bending.",
              "Combined footing: serves two columns whose pads overlap; rectangular or trapezoidal by load equality.",
              "Strap footing: edge column pad linked to an interior pad by a stiff beam, balancing moment.",
              "Critical sections for shear are d from the column face; bending moment is taken at the column face per IS 456.",
            ],
            table: {
              caption: "Shallow foundation types by structural situation.",
              headers: ["Type", "Used for", "Plan shape", "Design pressure"],
              rows: [
                ["Strip", "Load-bearing walls", "Long rectangle", "W per m / q_safe"],
                ["Isolated", "Single columns at grid spacing", "Square / rectangle", "Column load / area"],
                ["Combined", "Two close columns, edge column", "Rectangle / trapezium", "Resultant at centroid"],
                ["Strap", "Edge column + interior column", "Two pads + strap beam", "Uniform on each pad"],
                ["Raft", "Whole building on weak soil", "Covering footprint", "Total load / footprint area"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Shallow foundation hierarchy by load intensity",
              caption:
                "Pick the type from the column count and the soil bearing pressure, top to bottom.",
              layers: [
                { label: "Strip footing", note: "walls, light loads, q_safe > 100 kPa" },
                { label: "Isolated pad", note: "single columns at grid spacing" },
                { label: "Combined footing", note: "two close columns or edge column" },
                { label: "Strap footing", note: "edge column linked to interior pad" },
                { label: "Raft foundation", note: "weak soil, all columns on one mat" },
              ],
            },
            callout: {
              type: "tip",
              title: "When to combine",
              body: "Trigger a combined footing when the gap between two columns is less than the sum of their isolated footing widths, OR when an edge column would need an eccentric pad. A strap footing is the special case where the edge pad alone cannot be balanced by an interior pad.",
            },
            keyTerms: [
              { term: "Strip footing", definition: "A continuous RCC pad under a load-bearing wall, width sized by wall load per metre divided by q_safe." },
              { term: "Isolated footing", definition: "A single pad supporting one column, designed for one-way shear, punching shear and bending at the column face." },
              { term: "Combined footing", definition: "A single pad serving two or more columns so close that their isolated pads would overlap, designed for uniform bearing pressure." },
            ],
            examQuestions: [
              {
                q: "Define shallow foundations. Describe strip, isolated and combined footings with sketches, and explain the procedure to size a strip footing under a wall carrying 80 kN/m on soil with q_safe = 150 kPa.",
                marks: 7,
                outline: [
                  "Define shallow foundation: depth <= 3 m or 1.5 times width; transfers load to near-surface soil.",
                  "Describe strip footing: continuous slab under a wall, suitable for load-bearing masonry.",
                  "Describe isolated footing: single square or rectangular pad under one column; checked for shear and moment.",
                  "Describe combined footing: two close columns, rectangular or trapezoidal, resultant at centroid.",
                  "Compute B = W / q_safe = 80 / 150 = 0.533 m, rounded up to 600 mm.",
                  "State thickness check by one-way shear at d from wall face and bending at wall face per IS 456.",
                  "Mention minimum reinforcement (0.15 percent mild steel) and M15 or M20 plain concrete bed.",
                ],
              },
              {
                q: "When is a combined footing preferred over two isolated footings? Give two conditions.",
                marks: 3,
              },
              {
                q: "What is a strap footing and where is it used?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Deep foundations: pile and well",
            body: [
              "When the near-surface soil is too weak or compressible to take the load of a heavy structure at an economic footing size, the foundation is taken down to a harder stratum by a deep foundation. Two classes dominate practice. Pile foundations are slender RCC or steel members driven, jacked or bored into the ground, transferring load by end-bearing on a hard stratum, by skin friction along the shaft, or by both. Well foundations (also called caissons) are large precast RCC shells sunk through soft soil to a hard bed by dredging the soil from inside; they are the standard foundation for bridge piers in Indian rivers.",
              "Piles are classified by material (timber, steel, RCC), by effect (end-bearing, friction, compaction for sands, under-reamed for expansive clays), and by method of installation (driven, bored cast in situ, driven cast in situ). IS 2911 governs design. The ultimate capacity of a single pile is the sum of the end-bearing resistance Q_p = q_b A_p and the skin friction Q_s = sum of alpha c_avg A_s over each stratum, where alpha is the adhesion factor. The safe load is the lesser of Q_ult / 2.5 and the settlement criterion, verified by an initial pile load test on a working pile before full installation.",
              "A well foundation has three components: a steining (the RCC well wall), a bottom cutting edge with a cutting shoe, and a plug of concrete at the bottom; a sand fill, a well cap and a pier above. The well is sunk by dredging soil from inside so that the weight of the steining overcomes skin friction and the cutting edge slices through the strata. Tilt and shift are controlled by grabbing uniformly on alternate sides, by adding kentledge on the higher side, and by inserting sand bags on the lower side. Well foundations can carry 5 to 50 MN and resist scour in a river bed that would undermine a pile cap.",
            ],
            bullets: [
              "Piles: slender RCC or steel members, classified by material, effect and installation method per IS 2911.",
              "End-bearing pile: rests on hard stratum; capacity q_b A_p with q_b = bearing capacity at tip.",
              "Friction pile: capacity from skin friction sum alpha c A_s along shaft, used in thick soft clay.",
              "Well foundation: large RCC shell sunk by dredging, used for bridge piers; resists scour.",
              "Safe load: lesser of Q_ult / 2.5 and settlement limit, verified by initial pile load test.",
            ],
            table: {
              caption: "Pile vs well foundation at a glance.",
              headers: ["Aspect", "Pile foundation", "Well foundation"],
              rows: [
                ["Cross-section", "300-600 mm diameter, slender", "3-10 m diameter shell"],
                ["Installation", "Driven or bored by rig", "Sunk by dredging soil from inside"],
                ["Typical load", "0.5-5 MN per pile", "5-50 MN per well"],
                ["Best soil", "End-bearing on hard stratum", "River bed with deep scour"],
                ["Standard", "IS 2911", "IRC 78 for bridge foundations"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a deep foundation type",
              caption:
                "Pick pile or well from the load and the scour condition.",
              start: "Heavy load on weak soil",
              branches: [
                { label: "land site, hard stratum at 8-25 m", outcome: "end-bearing pile, capacity from q_b A_p", good: true },
                { label: "thick soft clay, no hard stratum", outcome: "friction pile, capacity from skin friction", good: true },
                { label: "river bed with scour", outcome: "well (caisson) sunk to hard bed", good: true },
                { label: "expansive clay under light load", outcome: "under-reamed pile, anchor bell at base", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Capacity formula and the FOS",
              body: "Memorise Q_ult = Q_p + Q_s = q_b A_p + sum alpha c_avg A_s. Apply FOS = 2.5 for the safe load, then mention the pile load test verification. Examiners want both the formula and the field check, not just arithmetic.",
            },
            keyTerms: [
              { term: "End-bearing pile", definition: "A pile transferring load mainly through its tip bearing on a hard stratum; capacity Q_p = q_b A_p." },
              { term: "Skin friction", definition: "Shear resistance along the pile shaft, Q_s = sum alpha c_avg A_s over each soil layer." },
              { term: "Well foundation", definition: "A large RCC shell sunk by dredging soil from inside, used for bridge piers in rivers." },
            ],
            examQuestions: [
              {
                q: "Define deep foundations. Classify piles and explain end-bearing and friction piles with capacity equations. Describe the components and sinking procedure of a well foundation.",
                marks: 7,
                outline: [
                  "Define deep foundation: transfers load to a hard stratum below weak surface soil.",
                  "Classify piles by material (timber, steel, RCC), effect (end-bearing, friction, compaction, under-reamed) and method (driven, bored cast in situ).",
                  "State Q_ult = Q_p + Q_s = q_b A_p + sum alpha c A_s for a single pile.",
                  "Explain end-bearing: capacity dominated by q_b A_p when tip rests on hard stratum.",
                  "Explain friction: capacity dominated by skin friction in thick soft clay; typical alpha 0.5.",
                  "Safe load = Q_ult / 2.5 or settlement limit, verified by initial pile load test on a working pile.",
                  "Describe well: steining, cutting edge, plug, sand fill, well cap; sunk by dredging; tilt controlled by kentledge.",
                ],
              },
              {
                q: "Differentiate between a pile foundation and a well foundation. State typical load ranges and one application each.",
                marks: 3,
              },
              {
                q: "State the components of a well foundation.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Excavation and dewatering",
            body: [
              "Excavation is the controlled removal of soil to found a structure below ground level. Its sequence begins with site clearance, then setting out by centre lines and a reference pillar at each corner, then excavation to the founding depth in stages. For shallow pits in firm soil the sides are sloped at a safe angle: roughly 1:1 in stiff clay, 1.5:1 in sandy soil, and vertical only in rock or compact clay up to 2 m. Deeper pits and loose soils demand timber shoring, sheet piling, or a secant pile wall to prevent collapse; IS 3764 lists the safety requirements for excavation works on site.",
              "When the excavation extends below the water table, dewatering keeps the pit dry and prevents piping, heave and bottom failure. The simplest method is the sump and pump: a shallow pit at one corner collects seepage and a pump discharges it away. For deeper cuts in sandy soil the wellpoint system uses rows of perforated pipes jetted into the ground, connected by a header to a vacuum pump that lowers the water table 5-6 m in a single stage. Multi-stage wellpoints reach 10-12 m; for greater depths, deep wells with submersible pumps or even wells with eductor ejectors are used.",
              "The choice of dewatering method depends on soil permeability, drawdown depth, and the duration of the works. Sumps work in clay and shallow cuts where the inflow rate is low. Wellpoints suit sands with permeability 1e-5 to 1e-3 m/s. Deep wells suit thick sand aquifers and long-duration projects. In silts the wellpoint screen may clog; vacuum dewatering with a finer screen and continuous suction applies. The discharged water must be routed to a recharge pit or drain to prevent recycling; the design must check that drawdown outside the pit does not settle neighbouring foundations, with recharge wells installed if needed.",
            ],
            bullets: [
              "Excavation sequence: site clearance, set out centre lines, dig to founding depth in stages per IS 3764.",
              "Side slopes: 1:1 in stiff clay, 1.5:1 in sand, vertical only in rock or to 2 m in compact clay.",
              "Shoring: timber sheeting, sheet piles, secant piles, or diaphragm walls for deep or loose soils.",
              "Sump and pump: shallow corner pit with a pump, suited to clay and small inflow.",
              "Wellpoint: perforated pipes jetted into sand, header to vacuum pump, single-stage drawdown 5-6 m.",
            ],
            table: {
              caption: "Dewatering methods by site condition.",
              headers: ["Method", "Soil best suited", "Max drawdown", "Energy / setup"],
              rows: [
                ["Sump and pump", "Clay, low inflow", "1-2 m", "Low, simple"],
                ["Wellpoint (single)", "Sand, k = 1e-5 to 1e-3 m/s", "5-6 m", "Medium header and pump"],
                ["Multi-stage wellpoint", "Sand, deeper cut", "10-12 m", "High, staged platforms"],
                ["Deep well + submersible", "Thick sand aquifer", "20+ m", "High, bored wells"],
                ["Eductor (ejector)", "Silt, low permeability", "10-20 m", "High-pressure water jet"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a dewatering method",
              caption:
                "Soil permeability vs drawdown depth maps the right method.",
              axes: { x: "Drawdown depth (shallow -> deep)", y: "Soil permeability (low -> high)" },
              quadrants: [
                { label: "Shallow + high k: wellpoint single-stage", note: "Sand, 5-6 m drawdown" },
                { label: "Deep + high k: deep wells", note: "Thick sand, submersible pumps" },
                { label: "Shallow + low k: sump and pump", note: "Clay, small pit" },
                { label: "Deep + low k: vacuum wellpoint or eductor", note: "Silt, continuous suction" },
              ],
            },
            callout: {
              type: "warning",
              title: "Watch the neighbours",
              body: "Dewatering lowers the water table outside the pit as well as inside; on sandy sites this can settle adjacent buildings by several millimetres per day. Always re-inject the pumped water through recharge wells along the boundary, and monitor nearby structures with settlement pegs throughout the dewatering period.",
            },
            keyTerms: [
              { term: "Wellpoint", definition: "A perforated pipe jetted into the ground and connected via a header to a vacuum pump, lowering the water table 5-6 m in one stage." },
              { term: "Sheet piling", definition: "Interlocking steel sheets driven around an excavation to support the sides and limit water inflow." },
              { term: "Drawdown", definition: "The vertical distance by which the water table is lowered at a point by dewatering." },
            ],
            examQuestions: [
              {
                q: "Describe the sequence of excavation for a foundation pit and list the methods of providing side support. Explain the wellpoint system of dewatering with a sketch.",
                marks: 7,
                outline: [
                  "Sequence: site clearance, set out centre lines, reference pillars, excavate in stages to founding depth.",
                  "State IS 3764 safety code; vertical sides up to 2 m in compact clay, sloped beyond.",
                  "Side slopes: 1:1 stiff clay, 1.5:1 sand, vertical in rock; shoring by timber sheeting for deeper pits.",
                  "Heavy shoring: sheet piles, secant piles, diaphragm walls for deep cuts in loose soil.",
                  "Dewatering need: prevent piping, heave and bottom failure; keep the pit dry for working.",
                  "Wellpoint: perforated pipes jetted 0.6-1 m apart, header to vacuum pump; single-stage drawdown 5-6 m.",
                  "Multi-stage wellpoints or deep wells for greater depth; recharge wells to protect neighbours.",
                ],
              },
              {
                q: "Compare sump-and-pump and wellpoint dewatering, and state one soil condition best suited to each.",
                marks: 3,
              },
              {
                q: "What is drawdown and why must it be controlled outside the excavation?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // ======================= UNIT II - WALLS AND MASONRY =======================
    {
      number: 2,
      roman: "II",
      title: "Walls and Masonry",
      summary:
        "Walls enclose and divide space and carry floor and roof loads down to the foundation. Unit II walks through stone masonry types, brick masonry bonds (English and Flemish), cavity and partition walls, then closes with lintels, arches and scaffolding.",
      chapter: {
        number: "02",
        title: "Walls and Masonry",
        intro:
          "Unit II builds the masonry vocabulary: stone masonry forms, brick bonds and their rules of lap, cavity walls for moisture insulation, partition walls for internal division, the structural spanning of openings by lintels and arches, and the temporary access scaffold that lets masons and finishers work at height.",
        inOneBreath:
          "Stone masonry is rubble or ashlar by dressing; brick bonds alternate headers and stretchers with a quarter-brick lap; English bond has courses of all headers and all stretchers alternating, Flemish bond alternates them within a course; cavity walls pair two leaves with a 50 mm air gap; partition walls are light inner walls of brick, block, or stud; lintels span openings in flexure, arches span them in compression; scaffolding carries the workers, with single and double scaffolds for brick and stone respectively.",
        sections: [
          {
            number: "2.1",
            title: "Stone masonry types",
            body: [
              "Stone masonry uses natural building stone bonded with mortar. The two broad classes are rubble masonry, built from irregular stones, and ashlar masonry, built from dressed stones with regular beds. Within rubble, random rubble masonry uses stones of varying shape and size with hammer-dressed faces, and is the cheapest form for compound walls and foundations. Squared rubble masonry dresses the bed and face of each stone to a rough rectangle; coursed rubble sorts the stones into courses of equal height, while uncoursed rubble leaves them in random heights. Ashlar masonry, the most expensive, dresses each stone to fine surfaces and beds.",
              "The rules of stone masonry maximise interlock and minimise continuous joints. Through-stones span the full thickness of the wall at every 1.5 m^2 of face and at every 1 m of height; bond stones project into the wall to lock the leaves; quoins at corners are the largest squared stones. Mortar is usually cement-sand 1:6 for rubble and 1:5 for ashlar; lime mortar is still used in restoration work. The bed joints are 10 mm thick in ashlar and 10-15 mm in rubble; vertical joints are staggered by at least half the stone height. Hearting, the interior filling, must be of small stones hammered into the mortar, never loose fill.",
              "Specifications for stone masonry include the minimum dressing of beds to within 3 mm of a true plane, the rounding off of exposed arrises to a 5 mm chamfer, and the soaking of stones before laying to prevent them sucking water from the mortar. Curing continues for 7 days; the rate of construction is limited to 1 m height per day in random rubble and 0.6 m in ashlar, to avoid squeezing mortar under the weight. IS 1597 parts 1 and 2 govern rubble and ashlar respectively, specifying materials, bonds, and tolerances. The compressive strength of good coursed rubble masonry in 1:6 mortar reaches 3-5 MPa, adequate for two or three storey load-bearing buildings.",
            ],
            bullets: [
              "Rubble vs ashlar: irregular stones vs dressed stones; rubble for cheap walls, ashlar for fine work.",
              "Random rubble: cheapest, irregular stones hammer-dressed; squared rubble has rectangular beds.",
              "Coursed rubble: stones of equal height per course; uncoursed has random heights.",
              "Through-stones every 1.5 m^2 of face and 1 m of height; bond stones lock leaves.",
              "Hearting is small stones hammered into mortar, never loose fill; IS 1597 governs.",
            ],
            table: {
              caption: "Stone masonry types and specifications.",
              headers: ["Type", "Dressing", "Mortar", "Typical use"],
              rows: [
                ["Random rubble", "Hammer-dressed, irregular", "1:6 cement-sand", "Foundation, compound walls"],
                ["Coursed rubble", "Beds squared to course height", "1:6", "Load-bearing walls to 3 storeys"],
                ["Uncoursed rubble", "Beds squared, random heights", "1:6", "Compound walls, plinths"],
                ["Ashlar rough tooled", "Beds and joints dressed", "1:5", "Public buildings"],
                ["Ashlar fine", "All faces dressed fine", "1:5 or 1:4", "Facades, monumental work"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Rubble vs ashlar masonry",
              caption:
                "The two families of stone masonry differ in dressing, cost, and use.",
              left: {
                heading: "Rubble masonry",
                items: [
                  "Irregular stones, hammer-dressed beds",
                  "Mortar 1:6 cement-sand",
                  "Through-stones every 1.5 m^2",
                  "Strength 3-5 MPa",
                  "Foundations, compound walls",
                ],
              },
              right: {
                heading: "Ashlar masonry",
                items: [
                  "All faces dressed to fine planes",
                  "Mortar 1:5 or 1:4",
                  "Bond stones at every course",
                  "Strength 10-20 MPa",
                  "Public buildings, facades",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Through-stones are the bond",
              body: "The single most-tested point in stone masonry questions is the through-stone: one stone spanning the full thickness of the wall at every 1.5 m^2 of face and every 1 m of height. Without it the two leaves of a thick wall act independently and fail in shear under lateral load.",
            },
            keyTerms: [
              { term: "Rubble masonry", definition: "Masonry built from irregular stones with hammer-dressed faces and 1:6 mortar, used for foundations and compound walls." },
              { term: "Ashlar masonry", definition: "Masonry built from finely dressed stones with regular beds and 1:5 mortar, used for high-quality facades." },
              { term: "Through-stone", definition: "A stone spanning the full thickness of the wall at every 1.5 m^2 of face, bonding the two leaves together." },
            ],
            examQuestions: [
              {
                q: "Classify stone masonry and describe random rubble, coursed rubble and ashlar masonry. State the rules for bond stones, through-stones and hearting per IS 1597.",
                marks: 7,
                outline: [
                  "Classify: rubble (random, squared, coursed or uncoursed) and ashlar (rough tooled, chamfered, fine).",
                  "Describe random rubble: hammer-dressed irregular stones, 1:6 mortar, used in foundations and compound walls.",
                  "Describe coursed rubble: squared beds to course height, 1:6 mortar, used in load-bearing walls.",
                  "Describe ashlar: beds and faces dressed fine, 1:5 mortar, used for public buildings.",
                  "State through-stone rule: one full-thickness stone at every 1.5 m^2 of face and 1 m of height.",
                  "State bond stone: projects into the wall to lock the leaves; quoins at corners are the largest.",
                  "State hearting: small stones hammered into the mortar, never loose; curing for 7 days.",
                ],
              },
              {
                q: "Differentiate between coursed rubble and uncoursed rubble masonry. Give one application of each.",
                marks: 3,
              },
              {
                q: "What is a through-stone and why is it essential in stone masonry?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Brick masonry bonds: English and Flemish",
            body: [
              "Brick masonry bonds the bricks with mortar so that no continuous vertical joint runs through the wall; the lap is one quarter of a brick length, about 57 mm. The two most prescribed bonds are English bond and Flemish bond. In English bond each course is composed entirely of headers or entirely of stretchers, alternating course by course; the bond produces a strong, plain wall used for load-bearing work. In Flemish bond each course alternates headers and stretchers; the face has a regular checkerboard pattern and is preferred for exposed walls of high quality, though it is slightly weaker than English bond for the same mortar and brick.",
              "The rules of brick masonry govern the lap, the position of the quoin (corner), and the use of queen closers. A queen closer is a half-brick cut lengthwise, used to break the joint at quoins in Flemish bond. The quoin header of one course is the quoin stretcher of the next in English bond; in Flemish bond the quoin is a header and queen closer alternate. Bed joints are 10 mm thick; vertical joints are filled flush and the face is raked 12 mm for plastering. A 230 mm thick English bond wall uses a 1:6 cement mortar and reaches 5-7 MPa compressive strength.",
              "Other bonds meet special needs. Stretcher bond (running bond) is one-brick-thick walls where every brick is a stretcher, used in half-brick partitions. Header bond has every brick a header on the face, used for curved walls and foundations. English garden bond and Flemish garden bond insert one course of headers after every three or four stretcher courses, in single-brick walls where the appearance of Flemish is wanted without its cost. Raking bond (diagonal or herringbone) is decorative in floors. IS 2212 governs brick masonry works, listing tolerances on dimensions and the recommended mortar classes by exposure.",
            ],
            bullets: [
              "Lap: 1/4 brick length (~57 mm); no continuous vertical joint through the wall.",
              "English bond: alternate courses of all headers and all stretchers; strongest for load-bearing walls.",
              "Flemish bond: each course alternates headers and stretchers; checkerboard face, decorative.",
              "Queen closer: half-brick cut lengthwise, used at quoins in Flemish bond to break the joint.",
              "Bed joints 10 mm; vertical joints filled flush; IS 2212 governs tolerances and mortar.",
            ],
            table: {
              caption: "Comparison of English and Flemish bond.",
              headers: ["Aspect", "English bond", "Flemish bond"],
              rows: [
                ["Course pattern", "All headers / all stretchers alternate", "Header and stretcher alternate within course"],
                ["Quoin", "Header next to stretcher", "Header and queen closer"],
                ["Strength", "Stronger, fewer joints", "Slightly weaker"],
                ["Appearance", "Plain, regular", "Checkerboard pattern"],
                ["Best use", "Load-bearing walls", "Exposed facades"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing a brick bond",
              caption:
                "Pick the bond from the load and the visual requirement.",
              steps: [
                { label: "Identify wall role", note: "load-bearing vs partition vs facade" },
                { label: "Check thickness", note: "1 brick (230 mm) or 0.5 brick (115 mm)" },
                { label: "Pick bond", note: "English for strength, Flemish for looks" },
                { label: "Detail quoins and closers", note: "queen closer in Flemish" },
                { label: "Specify mortar and joints", note: "1:6, 10 mm bed, IS 2212" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the bond pattern",
              body: "RGPV often asks for the plan of one or two courses of English or Flemish bond at a quoin. Practise drawing the alternate header and stretcher pattern with queen closers; mark headers as H and stretchers as S, and label the lap dimension of 57 mm.",
            },
            keyTerms: [
              { term: "English bond", definition: "A brick bond in which alternate courses are all headers and all stretchers; the strongest bond for load-bearing walls." },
              { term: "Flemish bond", definition: "A brick bond in which each course alternates headers and stretchers; produces a checkerboard face for exposed walls." },
              { term: "Queen closer", definition: "A half-brick cut lengthwise, used at the quoin header in Flemish bond to maintain the quarter-brick lap." },
            ],
            examQuestions: [
              {
                q: "Define lap in brick masonry. Compare English bond and Flemish bond with sketches. State the role of the queen closer and IS 2212 specifications for mortar and joints.",
                marks: 7,
                outline: [
                  "Define lap as 1/4 brick length (57 mm); no continuous vertical joint.",
                  "English bond: alternate courses of all headers and all stretchers; quoin header of one course becomes quoin stretcher of next.",
                  "Flemish bond: each course alternates header and stretcher; quoin is a header with a queen closer.",
                  "Draw plans of one course each at a quoin, marking H, S and the lap.",
                  "State queen closer: half-brick cut lengthwise; used to break joint at quoin in Flemish.",
                  "Mortar 1:6 cement-sand for 230 mm wall; bed joints 10 mm; vertical joints filled flush and raked 12 mm.",
                  "IS 2212 governs dimensions, tolerances and mortar classes by exposure.",
                ],
              },
              {
                q: "Differentiate between English bond and Flemish bond in strength, appearance and use.",
                marks: 3,
              },
              {
                q: "What is a queen closer and where is it used?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Cavity walls",
            body: [
              "A cavity wall is a double-leaf wall with a continuous air cavity of 50 to 90 mm between the leaves, used to prevent the transmission of moisture and to improve thermal insulation. The outer leaf is usually 115 mm half-brick thick, the inner leaf is 115 mm or 230 mm, and the two leaves are tied together with non-corrosive metal ties at 900 mm horizontally and 450 mm vertically, staggered. The cavity must be kept clear of mortar droppings during construction; a timber batten lifted out at the end of each day, or a cavity former, prevents mortar build-up at the bottom of the cavity.",
              "The moisture exclusion works by capillary break: rain wetting the outer leaf runs down the inside face of that leaf and drips into the cavity, where it drains out through weep holes at the bottom. The ties, angled downward from inner to outer, prevent water from crossing to the inner leaf. The air gap also breaks the thermal bridge: still air is a poor conductor, so the inner leaf stays close to room temperature. With a 50 mm cavity the U-value drops to about 1.7 W/m^2K compared with 2.1 for a solid 230 mm wall; insulating the cavity with mineral wool batts reduces it further to about 0.3.",
              "Construction details include the damp-proof course at the bottom of the cavity, taken through both leaves, and the weep holes at 1 m centres in the outer leaf just above the DPC. The cavity is closed at the top with a brick-on-edge or RCC coping, and at openings the cavity is bridged by a flexible DPC. IS 2572 governs cavity walls; it specifies tie density, the minimum cavity width of 50 mm, and a maximum wall height of 12 m for half-brick leaves. The ties must be galvanised steel or stainless steel wire, 800 mm long, of butterfly or double-triangle pattern.",
            ],
            bullets: [
              "Two leaves with 50-90 mm air cavity: outer 115 mm, inner 115 or 230 mm, ties every 900 x 450 mm.",
              "Capillary break: rain runs down the inner face of the outer leaf and drains out through weep holes.",
              "Thermal insulation: still air is a poor conductor; mineral wool batts cut U-value to about 0.3.",
              "DPC at the bottom of the cavity through both leaves; weep holes at 1 m centres above.",
              "IS 2572: minimum cavity 50 mm, max wall height 12 m for half-brick leaves; ties are galvanised steel.",
            ],
            table: {
              caption: "Solid wall vs cavity wall performance.",
              headers: ["Property", "Solid 230 mm brick", "Cavity wall (115 + 50 + 115)"],
              rows: [
                ["Thickness (mm)", "230", "280"],
                ["U-value (W/m^2K)", "2.1", "1.7 (0.3 with insulation)"],
                ["Moisture penetration", "Possible by capillary", "Stopped at cavity"],
                ["Tie requirement", "None", "Non-corrosive ties every 900 x 450 mm"],
                ["Cost", "Lower", "About 20 percent higher"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Layers of a cavity wall (top to bottom)",
              caption:
                "From the outer leaf to the inner leaf, each layer has a job.",
              layers: [
                { label: "Outer leaf 115 mm", note: "brick facing, takes rain" },
                { label: "Cavity 50-90 mm", note: "capillary break and air insulation" },
                { label: "Metal ties", note: "every 900 x 450 mm, angled down" },
                { label: "Inner leaf 115-230 mm", note: "structural and plastered" },
                { label: "DPC and weep holes", note: "drain moisture at base" },
              ],
            },
            callout: {
              type: "warning",
              title: "Keep the cavity clean",
              body: "Mortar droppings in the cavity bridge moisture straight across and defeat the whole purpose. Use a cavity batten lifted out daily, or a net former; never leave mortar at the bottom of the cavity. Examiners and site inspectors both penalise this defect.",
            },
            keyTerms: [
              { term: "Cavity wall", definition: "A double-leaf wall with a 50-90 mm air gap between the leaves, used to exclude moisture and improve thermal insulation." },
              { term: "Wall tie", definition: "A non-corrosive metal tie connecting the two leaves of a cavity wall every 900 mm horizontally and 450 mm vertically." },
              { term: "Weep hole", definition: "An opening left in the outer leaf above the DPC at 1 m centres to drain moisture from the cavity." },
            ],
            examQuestions: [
              {
                q: "Define a cavity wall. Explain its construction, the functions of the cavity and the wall ties, and the requirements of IS 2572.",
                marks: 7,
                outline: [
                  "Define cavity wall: two leaves with a 50-90 mm air gap; outer 115 mm half-brick, inner 115 or 230 mm.",
                  "State functions: capillary break against moisture, air gap for thermal insulation.",
                  "Describe wall ties: non-corrosive galvanised steel, every 900 mm horizontal and 450 mm vertical, staggered.",
                  "State DPC at the base through both leaves, weep holes at 1 m centres above the DPC in the outer leaf.",
                  "State IS 2572: minimum cavity 50 mm, max height 12 m for half-brick leaves; tie patterns butterfly or double-triangle.",
                  "Mention cavity insulation with mineral wool batts; U-value drops to about 0.3.",
                  "Cite construction care: batten or former to keep cavity clean of mortar droppings.",
                ],
              },
              {
                q: "How does a cavity wall prevent the penetration of rain water to the inner leaf? Explain with a sketch.",
                marks: 3,
              },
              {
                q: "State the spacing and material requirements of wall ties in a cavity wall per IS 2572.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Partition walls",
            body: [
              "A partition wall is a non-load-bearing internal wall that divides the floor area into rooms. Because it carries no structural load, it is designed for light weight, ease of construction, and adequate sound insulation. Brick partitions of 115 mm half-brick thickness are the simplest, used where sound insulation matters and the floor can take the weight. Hollow block partitions of 100 mm thick AAC or concrete blocks reduce the dead weight by half. For rapid, demountable construction, timber or steel stud partitions carry gypsum board or fibre-cement board facings, with cavities filled with mineral wool for sound and fire rating.",
              "The design criteria are stability under lateral loads (a person leaning, a door slam), fire resistance, sound reduction, and the ability to take fixtures. IS 2572 and the National Building Code specify fire ratings of one hour for partitions enclosing exit staircases; gypsum board on steel stud with 50 mm mineral wool achieves this. Sound reduction follows the mass law: a 100 kg/m^2 partition reduces sound by about 40 dB; doubling the mass adds 5 dB. Stud partitions need to be stiff enough not to deflect more than 1/240 of the span under a 0.5 kN point load applied at any point.",
              "Construction details vary by material. Brick partitions are bonded to load-bearing walls by toothing and rest on the floor slab with a damp-proof course if on ground. Block partitions use a 1:4 cement-sand mortar bed with vertical reinforcement bars at 1 m centres tied to the slab above and below for seismic resistance. Stud partitions anchor a top runner to the slab above and a bottom runner to the slab below; vertical studs slot in at 400 or 600 mm centres; board facings are screwed on with staggered joints, taped and filled. Door frames are fixed to stud partitions with metal brackets at three points on each jamb.",
            ],
            bullets: [
              "Partition wall: non-load-bearing, divides rooms; designed for light weight and sound insulation.",
              "Brick 115 mm: simple, heavy, good sound insulation, used where floor can take the weight.",
              "Hollow block 100 mm: AAC or concrete, half the dead weight, faster to lay.",
              "Stud and board: timber or steel stud with gypsum board, demountable, fire-rated to one hour.",
              "Sound by mass law: 100 kg/m^2 reduces sound by about 40 dB; doubling mass adds about 5 dB.",
            ],
            table: {
              caption: "Partition wall types and properties.",
              headers: ["Type", "Thickness", "Weight (kg/m^2)", "Sound reduction"],
              rows: [
                ["Brick half-brick", "115 mm", "200", "about 45 dB"],
                ["AAC block", "100 mm", "75", "about 38 dB"],
                ["Concrete hollow block", "100 mm", "110", "about 40 dB"],
                ["Timber stud + gypsum", "75 mm + board", "30", "about 35 dB"],
                ["Steel stud + 2 board + wool", "100 mm", "40", "about 45 dB, fire 1 hr"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Designing a partition wall",
              caption:
                "Choose material, fix details, verify criteria - and revisit if the fire or sound test fails.",
              steps: [
                { label: "Identify room role", note: "bedroom vs office vs fire exit" },
                { label: "Pick material", note: "brick, block, or stud and board" },
                { label: "Detail connections", note: "toothing, runners, board joints" },
                { label: "Check fire rating", note: "NBC / IS 2572; 1 hr for exits" },
                { label: "Check sound", note: "mass law; add wool if needed" },
                { label: "Re-evaluate", note: "increase mass or board layers if below target" },
              ],
            },
            callout: {
              type: "tip",
              title: "Anchor at three points",
              body: "Door frames fixed to stud partitions must be anchored at three points - top, middle, and bottom - on both sides. A frame fixed only at the top will spring when a heavy door is slammed, and the door will not latch properly.",
            },
            keyTerms: [
              { term: "Partition wall", definition: "A non-load-bearing internal wall that divides floor area into rooms, designed for light weight and sound insulation." },
              { term: "Stud partition", definition: "A partition of vertical timber or steel studs spaced 400-600 mm, faced with gypsum or fibre-cement board." },
              { term: "Mass law", definition: "The sound insulation of a wall rises by about 5 dB per doubling of surface mass; 100 kg/m^2 reduces sound by about 40 dB." },
            ],
            examQuestions: [
              {
                q: "Define a partition wall. Classify partition walls, describe brick and stud partitions, and state the criteria for their selection.",
                marks: 7,
                outline: [
                  "Define partition wall: non-load-bearing, divides rooms; carries only self weight and lateral knock.",
                  "Classify by material: brick (115 mm), hollow block (AAC, concrete), stud and board (timber or steel).",
                  "Describe brick partition: toothing to load-bearing walls; 115 mm thick; sound reduction about 45 dB.",
                  "Describe stud partition: top and bottom runners, studs at 400-600 mm, board facings screwed on.",
                  "State criteria: light weight, sound insulation, fire resistance, fixture support.",
                  "Mention fire rating 1 hour per NBC for exit staircase enclosures; sound by mass law (5 dB per doubling).",
                  "Mention seismic reinforcement in block partitions at 1 m centres tied to slabs above and below.",
                ],
              },
              {
                q: "Compare a brick partition and a stud-and-gypsum partition for weight, fire rating and demountability.",
                marks: 3,
              },
              {
                q: "State the mass law for sound insulation and give the sound reduction of a 100 kg/m^2 partition.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Lintels, arches and scaffolding",
            body: [
              "A lintel is a beam spanning a doorway or window opening to carry the masonry above; an arch is the same span made of small wedged units that carry load by compression. RCC lintels are the standard in modern construction: a 230 mm wide, 150 mm deep beam with two 12 mm diameter bars at the bottom and 8 mm stirrups at 150 mm, cast in M20 concrete. The bearing at each end is at least 150 mm or one brick length. For wider openings a sunshade lintel projects 150 mm outside the wall and 450 mm inside, taking the load of the floor above.",
              "An arch is built of brick or stone wedged units (voussoirs), with a central keystone, and transfers load by compression along its curve to the abutments. The classic shapes are the semicircular, segmental, pointed (Gothic), and flat (jack) arch. The rise of a segmental arch is one tenth of the span; the skewback at the abutment is cut perpendicular to the curve. Centering is the temporary timber formwork on which the arch is built, struck after the mortar has set for 7 days. The thrust of an arch must be resisted by the abutments; without adequate buttress the arch spreads and collapses.",
              "Scaffolding is the temporary structure of timber, steel, or aluminium tubes that lets masons and finishers work at height on a wall. The single scaffold, used for brick masonry, has one row of standards (verticals) 2.5 m apart on the outer face, connected by ledgers (horizontals) and putlogs (transverse); it is tied to the wall by putlog holes left in the brickwork. The double scaffold, used for stone masonry, has two rows of standards and does not need putlog holes, leaving the wall intact. Needle scaffolding is suspended from a cantilever beam for tall buildings; IS 3696 governs scaffolding safety.",
            ],
            bullets: [
              "Lintel: RCC beam over an opening; bearing at least 150 mm each end.",
              "Arch: voussoirs in compression, keystone at crown; shapes: semicircular, segmental, pointed, jack.",
              "Centering: temporary timber formwork; struck after 7 days of mortar set.",
              "Single scaffold: one row of standards, used for brickwork; putlog holes tie it to the wall.",
              "Double scaffold: two rows of standards, used for stonework; no putlog holes in the wall.",
            ],
            table: {
              caption: "Lintel vs arch vs scaffolding.",
              headers: ["Aspect", "Lintel", "Arch", "Scaffolding"],
              rows: [
                ["Function", "Span an opening", "Span an opening", "Temporary work platform"],
                ["Load transfer", "Flexure, tension in bars", "Compression along curve", "Vertical load to ground"],
                ["Material", "RCC or steel", "Brick or stone voussoirs", "Timber, steel, aluminium"],
                ["Temporary", "Permanent", "Permanent", "Struck after work done"],
                ["Code", "IS 456", "IS 2212 brick work", "IS 3696 safety"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choose the spanning element",
              caption:
                "Pick lintel or arch from material and span.",
              start: "Door or window opening",
              branches: [
                { label: "RCC construction, span < 1.5 m", outcome: "RCC lintel with sunshade", good: true },
                { label: "brick facade, span 1-2 m", outcome: "segmental brick arch", good: true },
                { label: "monumental stone facade", outcome: "semicircular ashlar arch", good: true },
                { label: "very wide span, no abutment", outcome: "use a beam, not an arch", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Putlog holes matter",
              body: "RGPV favours the single-vs-double scaffold contrast: brick walls tolerate putlog holes left for the single scaffold (filled later); stone walls must not be drilled, hence the double scaffold with its independent second row of standards. State this trade-off explicitly in the answer.",
            },
            keyTerms: [
              { term: "Lintel", definition: "A beam spanning an opening to carry the masonry above, usually RCC with bearing of at least 150 mm each end." },
              { term: "Arch", definition: "A compression structure of wedged voussoirs with a keystone, transferring load to abutments along its curve." },
              { term: "Scaffolding", definition: "Temporary structure of timber, steel, or aluminium tubes providing a working platform at height, per IS 3696." },
            ],
            examQuestions: [
              {
                q: "Define lintels and arches. Describe the construction of an RCC lintel and a segmental brick arch, and compare single and double scaffolding per IS 3696.",
                marks: 7,
                outline: [
                  "Define lintel as a flexural beam over an opening; arch as a compression structure of voussoirs.",
                  "Describe RCC lintel: 230 x 150 mm, two 12 mm bars bottom, 8 mm stirrups at 150 mm, M20 concrete.",
                  "State minimum bearing of 150 mm or one brick at each end; sunshade lintel for wider openings.",
                  "Describe segmental brick arch: rise = span / 10, voussoirs with keystone at crown, skewback at abutment.",
                  "State centering: temporary timber formwork, struck after 7 days of set; abutments must resist thrust.",
                  "Describe single scaffold: one row of standards 2.5 m apart, putlog holes tie to wall, for brickwork.",
                  "Describe double scaffold: two rows of standards, no putlog holes, for stonework; IS 3696 governs safety.",
                ],
              },
              {
                q: "Differentiate between a lintel and an arch as a spanning element. Give one typical material for each.",
                marks: 3,
              },
              {
                q: "Differentiate between single scaffolding and double scaffolding.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // ===================== UNIT III - FLOORS, ROOFS AND DOORS =====================
    {
      number: 3,
      roman: "III",
      title: "Floors, Roofs and Doors",
      summary:
        "Floor, roof and door elements close a building against weather and divide it horizontally. Unit III covers floor types, flat and pitched roofs, roof coverings, and the standard door and window types and frames.",
      chapter: {
        number: "03",
        title: "Floors, Roofs and Doors",
        intro:
          "Unit III closes the building: ground and upper floor systems in concrete, tile and mosaic; flat and pitched roofs and their coverings; and the standard doors and windows and their frames.",
        inOneBreath:
          "Ground floors rest on soil with a hard core, DPC, and concrete topping finished in tile, mosaic or terrazzo; upper floors are RCC slabs of 100-120 mm with finishes; flat roofs slope 1:50 and need insulating and waterproofing layers; pitched roofs of timber or steel trusses carry tiles or AC sheets; doors are battened, ledged, framed, panelled or flush; windows are casement, sliding or fixed in a frame of wood, steel or aluminium.",
        sections: [
          {
            number: "3.1",
            title: "Floor types: concrete, tile, mosaic",
            body: [
              "A floor is the horizontal surface of a room; the floor structure is called the floor, and the finished surface the flooring. A ground floor rests on soil; it consists of a hard core of brick ballast or stone 150 mm thick, a 75 mm concrete bed of M10 over a DPC, and the floor finish. An upper floor is an RCC slab 100-120 mm thick spanning 3-4 m, designed for live load of 2-3 kPa for residential rooms and 4 kPa for offices per IS 875 part 2. The floor finish is laid on a 20 mm bedding mortar.",
              "Concrete flooring is the cheapest and most durable: 100 mm of M15 concrete finished with a 1:2 cement screed; surfaces are either trowelled smooth, given a light tamping for a non-slip texture, or coloured by adding pigment. Tile flooring uses ceramic or vitrified tiles 300 x 300 mm or 600 x 600 mm, bedded on a 1:3 cement-sand mortar 20 mm thick, with 2-3 mm joints grouted with white cement. Mosaic (terrazzo) flooring is a monolithic finish of 5 mm marble or coloured chips set in a 1:2 cement matrix, laid in 30 mm topping over the RCC slab and ground smooth in three passes.",
              "The construction sequence determines quality. The RCC slab is cast and cured for 28 days; the surface is hacked with chisels to provide a key. A 1:3 cement-sand levelling screed is laid and allowed to set for 7 days. Tiles are soaked and laid over a 20 mm 1:3 bed; joints are filled with white cement and the floor is washed. For mosaic, the topping is poured in panels not exceeding 2 x 2 m, divided by 3 mm glass, aluminium, or PVC strips; after 48 hours it is ground with carborundum stones of three grades, washed, and polished. IS 2114 governs the laying of mosaic flooring.",
            ],
            bullets: [
              "Ground floor: 150 mm hard core, DPC, 75 mm M10 concrete, then finish.",
              "Upper floor: 100-120 mm RCC slab spanning 3-4 m; live load 2-3 kPa residential, 4 kPa office per IS 875.",
              "Concrete: 100 mm M15 with 1:2 cement screed; trowelled smooth or pigmented.",
              "Tile: ceramic or vitrified, 1:3 bedding mortar 20 mm; 2-3 mm joints grouted with white cement.",
              "Mosaic: 5 mm marble chips in 1:2 cement matrix, 30 mm topping; ground with carborundum per IS 2114.",
            ],
            codeExample: {
              language: "python",
              caption: "Materials for a 5.0 x 4.0 m RCC floor slab, 100 mm thick, M20.",
              code: `# Concrete volume and ingredients for an RCC floor slab
L, B, t = 5.0, 4.0, 0.10
vol = L * B * t                  # m3 of concrete
dry = vol * 1.54                 # 54% bulking for dry ingredients
# M20 mix = 1 : 1.5 : 3 (cement : sand : aggregate)
parts = 1 + 1.5 + 3
cement = dry / parts * 1
sand   = dry / parts * 1.5
agg    = dry / parts * 3
bags   = cement / 0.0342         # 1 bag = 50 kg = 0.0342 m3
print(f"Vol = {vol:.2f} m3, Cement = {bags:.0f} bags, "
      f"Sand = {sand:.2f} m3, Aggregate = {agg:.2f} m3")
# Vol = 2.00 m3, Cement = 16 bags, Sand = 0.84 m3, Aggregate = 1.68 m3`,
            },
            diagram: {
              kind: "flow",
              title: "Laying a tile floor on an RCC slab",
              caption:
                "Each step needs a curing gap; rushing any of them causes hollowness.",
              steps: [
                { label: "Cast RCC slab, cure 28 d", note: "M20, 100 mm" },
                { label: "Hack the surface", note: "key for screed" },
                { label: "Levelling screed 20 mm 1:3", note: "cure 7 d" },
                { label: "Soak and lay tiles", note: "20 mm bed, 2-3 mm joints" },
                { label: "Grout and wash", note: "white cement" },
              ],
            },
            callout: {
              type: "tip",
              title: "Soak the tiles",
              body: "Vitrified and ceramic tiles must be soaked in water for at least 30 minutes before laying; a dry tile sucks water from the bedding mortar, weakening it and causing hollowness audible when tapped. Examiners reward this detail.",
            },
            keyTerms: [
              { term: "Mosaic flooring", definition: "A monolithic finish of marble or coloured chips set in a 1:2 cement matrix, laid in 30 mm topping over the RCC slab and ground smooth per IS 2114." },
              { term: "Bedding mortar", definition: "A 1:3 or 1:4 cement-sand layer 20 mm thick under tile or stone flooring, providing the bearing and the key." },
              { term: "Terrazzo topping", definition: "The 30 mm layer of marble chips in cement matrix, divided by 3 mm strips into panels of at most 2 x 2 m." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of ground and upper floors. Compare concrete, tile and mosaic flooring with materials, thicknesses and IS codes.",
                marks: 7,
                outline: [
                  "Describe ground floor: 150 mm hard core, DPC, 75 mm M10 concrete, then finish.",
                  "Describe upper floor: 100-120 mm RCC slab, 2-3 kPa live load per IS 875 part 2.",
                  "Concrete flooring: 100 mm M15, 1:2 screed, trowelled smooth or pigmented.",
                  "Tile flooring: ceramic or vitrified tiles 1:3 bedding 20 mm, 2-3 mm joints grouted with white cement.",
                  "Mosaic: 5 mm marble chips in 1:2 cement matrix, 30 mm topping; IS 2114 governs.",
                  "Construction sequence: cast RCC, cure 28 d, hack, screed 7 d, soak tiles, lay, grout.",
                  "State curing: 28 d for RCC, 7 d for screed; soak tiles 30 min; grind mosaic in three passes.",
                ],
              },
              {
                q: "Compare concrete flooring and mosaic flooring for cost, durability and appearance.",
                marks: 3,
              },
              {
                q: "Why are tiles soaked before laying? What is the bedding mortar proportion?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Flat roofs",
            body: [
              "A flat roof is an RCC slab with a slope of 1:50 to 1:100, used in modern multi-storey buildings and in regions where rainfall is moderate. The slab is 100-150 mm thick in M20 concrete with two-way reinforcement, designed for live load of 1.5 kPa minus self weight and parapet upstand. A 75-100 mm parapet wall caps the perimeter; rainwater pipes at 6-10 m centres drain the roof through openings left in the parapet. The slab is cast monolithic with the beam grid and cured for 28 days before any finish is applied.",
              "The roof layers above the slab are critical for waterproofing and thermal comfort. A typical stack is: 20 mm cement plaster on the slab, a waterproofing layer of bituminous felt or APP membrane in two coats, a 75-100 mm brick bat coba (broken brick and 1:3 cement mortar) providing both slope and secondary waterproofing, a 40 mm tile or china mosaic finish for walking, and a reflective lime-surkhi topping to reduce heat gain. A roof that skips the coba or the membrane will leak in the first monsoon; thermal cracking at the joints and around rainwater pipes is the typical entry point.",
              "Construction details include providing a uniform slope of 1:100 toward the rainwater pipes by varying the coba thickness, leaving 150 mm upturns of the waterproofing membrane at parapets and pipes, and installing a rainwater pipe of 100 mm diameter at 6 m spacing along the perimeter. Cracks are sealed with elastomeric sealant. IS 1346 governs bituminous waterproofing; IS 2212 the brick bat coba. A green roof with 100 mm soil over a drainage layer is a modern variant that reduces the urban heat island and stormwater runoff by retaining 50 percent of rainfall.",
            ],
            bullets: [
              "RCC slab 100-150 mm thick M20; slope 1:50 to 1:100 to rainwater pipes.",
              "Live load 1.5 kPa per IS 875 part 2; parapet 75-100 mm RCC or brick.",
              "Waterproofing: bituminous membrane (APP) or felt, two coats, upturns 150 mm at parapets and pipes.",
              "Brick bat coba: 75-100 mm broken brick in 1:3 mortar; provides slope and secondary waterproofing.",
              "IS 1346 bituminous waterproofing; IS 2212 brick bat coba.",
            ],
            table: {
              caption: "Flat roof layer stack.",
              headers: ["Layer (top to bottom)", "Material", "Function"],
              rows: [
                ["1. Reflective topping", "Lime-surkhi or china mosaic", "Reduce solar heat gain"],
                ["2. Walking finish", "40 mm tile or mosaic", "Resist foot traffic"],
                ["3. Slope and waterproofing", "75-100 mm brick bat coba 1:3", "Slope to drains, secondary water barrier"],
                ["4. Waterproofing membrane", "APP or bituminous felt, 2 coats", "Primary water barrier"],
                ["5. RCC slab", "M20, 100-150 mm", "Structural support"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Flat roof vs pitched roof",
              caption:
                "Two contrasting roof philosophies; pick by climate and span.",
              left: {
                heading: "Flat roof",
                items: [
                  "RCC slab 100-150 mm M20",
                  "Slope 1:50 to 1:100 to RWP",
                  "Waterproofing + coba + tile",
                  "Usable as terrace, multi-storey",
                  "Moderate rainfall regions",
                ],
              },
              right: {
                heading: "Pitched roof",
                items: [
                  "Truss of timber or steel",
                  "Slope 25-45 degrees",
                  "Tiles or AC sheet covering",
                  "Not usable as terrace",
                  "Heavy rainfall or snow regions",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Slope before waterproofing",
              body: "The most common leak source is a flat roof laid with no slope to the drains. Even a perfect membrane will pool water and fail at the joints. Always verify the brick bat coba has a 1:100 slope to each rainwater pipe before laying the finish.",
            },
            keyTerms: [
              { term: "Brick bat coba", definition: "A 75-100 mm layer of broken brick set in 1:3 cement-sand mortar over the RCC slab, providing slope to drains and secondary waterproofing per IS 2212." },
              { term: "APP membrane", definition: "Atactic polypropylene-modified bitumen sheet, torched onto the slab in two coats as the primary waterproofing layer per IS 1346." },
              { term: "Parapet", definition: "A 75-100 mm low wall at the perimeter of a flat roof, with openings for rainwater pipes and a 150 mm upturn of the waterproofing membrane." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a flat roof. List the layers from slab to finish and explain the functions of each, citing the relevant IS codes.",
                marks: 7,
                outline: [
                  "Describe RCC slab 100-150 mm thick M20, slope 1:50 to 1:100 toward rainwater pipes.",
                  "State live load 1.5 kPa per IS 875 part 2; parapet 75-100 mm RCC or brick at perimeter.",
                  "Layer 1: RCC slab structural support.",
                  "Layer 2: bituminous membrane (APP) two coats, primary waterproofing per IS 1346.",
                  "Layer 3: 75-100 mm brick bat coba in 1:3 mortar, slope and secondary waterproofing per IS 2212.",
                  "Layer 4: 40 mm tile or china mosaic walking finish.",
                  "Layer 5: reflective lime-surkhi topping for heat; rainwater pipes 100 mm at 6 m centres.",
                ],
              },
              {
                q: "List the layers of a flat roof from top to bottom and give the function of each.",
                marks: 3,
              },
              {
                q: "What is a brick bat coba and why is it provided on a flat roof?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Pitched roofs",
            body: [
              "A pitched roof is a sloping roof of timber or steel trusses covered by tiles or sheets, used where rainfall is heavy or where snow loads demand a steep slope. The slope is 22 to 45 degrees; 30 degrees is the common compromise. A couple roof has two rafters leaning against each other at the ridge, suitable for spans up to 3.5 m; a couple-close roof ties the rafters at the base with a horizontal tie beam to prevent outward spread. A king-post truss adds a vertical post from the ridge to the tie beam, suitable for spans 5-8 m; a queen-post truss uses two verticals for spans 8-12 m.",
              "The truss components are: the rafters (sloping top members carrying the covering), the tie beam (the horizontal bottom resisting the outward thrust), the principal rafter and the struts (which transfer load from purlins to the tie), and the king or queen post (vertical tension member). Purlins run horizontally along the slope at 1.5-2 m centres, supporting the rafters or the covering directly. Common purlins are timber 100 x 75 mm or steel angles 75 x 75 x 8 mm. The covering rests on purlins: AC sheets at 1.5 m span, GI sheets at 1.8 m, and tiles on timber battens at 300 mm spacing.",
              "Roof coverings divide into rigid sheets and small tiles. Asbestos cement (ACC) corrugated sheets of 1.0 m x 1.05 m size, 6 mm thick, are laid with 150 mm end lap and one corrugation side lap, fixed to purlins with J-hooks and bitumen washers; they are cheap but brittle and banned in many countries for health reasons. Galvanised iron corrugated sheets of 0.5 mm thickness are lighter and ductile, similarly laid. Clay tiles - Mangalore, Allahabad, or pan - rest on timber battens nailed across the rafters at 300 mm centres; they give better aesthetics and thermal mass but cost more.",
            ],
            bullets: [
              "Couple, couple-close, king-post and queen-post trusses by increasing span.",
              "Truss components: rafters, tie beam, purlins, struts, king or queen post.",
              "Purlins: timber 100 x 75 mm or steel angle 75 x 75 x 8 mm at 1.5-2 m centres.",
              "Coverings: AC sheets 1.0 x 1.05 m at 150 mm lap, GI sheets 0.5 mm, clay tiles on 300 mm battens.",
              "Slope 22-45 degrees; 30 degrees common.",
            ],
            table: {
              caption: "Truss types by span.",
              headers: ["Truss type", "Span (m)", "Key member", "Use"],
              rows: [
                ["Couple", "up to 3.5", "Two rafters at ridge", "Small sheds"],
                ["Couple-close", "3.5-5", "Tie beam ties rafters", "Small houses"],
                ["King-post", "5-8", "Vertical post at ridge", "Common houses"],
                ["Queen-post", "8-12", "Two verticals", "Halls, schools"],
                ["Howe / Fink", "12-20", "Steel trusses", "Industrial sheds"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Truss selection by span",
              caption:
                "Wider span means more components and a heavier truss; top is the smallest.",
              tiers: [
                { label: "Couple: < 3.5 m", note: "two rafters only" },
                { label: "Couple-close: 3.5-5 m", note: "add tie beam" },
                { label: "King-post: 5-8 m", note: "add vertical post" },
                { label: "Queen-post: 8-12 m", note: "two verticals, longer span" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the truss",
              body: "RGPV often asks for a sketch of a king-post truss with all parts labelled: rafters, tie beam, king post, struts, purlins. Practise drawing the symmetric shape with the vertical post at the ridge; label each component and its span.",
            },
            keyTerms: [
              { term: "Truss", definition: "A triangulated framework of timber or steel members carrying the roof load to the supports, used for spans from 5 to 20 m." },
              { term: "Purlin", definition: "A horizontal member running along the roof slope at 1.5-2 m centres, supporting the covering and transferring load to the rafters." },
              { term: "Tie beam", definition: "The horizontal bottom member of a truss that resists the outward thrust of the rafters at the wall plate." },
            ],
            examQuestions: [
              {
                q: "Describe the types of pitched roof trusses with sketches and typical spans. Explain the function of purlins and roof coverings.",
                marks: 7,
                outline: [
                  "Define pitched roof: slope 22-45 degrees, used for heavy rainfall and snow regions.",
                  "Couple roof: two rafters at ridge, span up to 3.5 m, used for small sheds.",
                  "Couple-close roof: tie beam connects rafter feet, span 3.5-5 m.",
                  "King-post truss: vertical post from ridge to tie beam, span 5-8 m, used for common houses.",
                  "Queen-post truss: two verticals, span 8-12 m, used for halls and schools.",
                  "Howe or Fink steel trusses for 12-20 m industrial spans.",
                  "Purlins at 1.5-2 m centres support the covering; AC sheets, GI sheets, or clay tiles on battens.",
                ],
              },
              {
                q: "Compare AC sheet and clay tile as a pitched roof covering, in terms of cost, weight and appearance.",
                marks: 3,
              },
              {
                q: "State the function of purlins and the tie beam in a pitched roof truss.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Roof coverings",
            body: [
              "Roof coverings are the weatherproof skin laid over the structural roof. They are classified by material - clay tiles, AC sheets, GI sheets, asphalt shingles, and modern variants such as pre-coated metal sheets and reinforced plastic. Clay tiles include the flat Mangalore tile with overlapping side and end laps, the half-round Allahabad tile, and the pan-and-roll combination; they rest on timber battens nailed to rafters, with a 75 mm end lap and a tight side lap, and weigh 50-70 kg/m^2. Tiles give thermal mass and aesthetics but are brittle and heavy.",
              "Sheet coverings dominate industrial and low-cost housing. AC sheets of 1.05 x 1.0 m, 6 mm thick, are corrugated with a 75 mm pitch and 25 mm depth, laid with 150 mm end lap and one-corrugation side lap on purlins at 1.5 m centres, fixed with J-hooks and bitumen washers; they weigh 15-20 kg/m^2 and cost about a third of tiles. GI sheets of 0.5 mm corrugated weigh 5-7 kg/m^2 and span 1.8 m between purlins. Pre-coated metal sheets of 0.5 mm colour-coated galvanised steel combine lightness with 20 years of weather resistance; trapezoidal profiles add stiffness.",
              "Detailing decides whether a roof leaks. At the ridge, a galvanised iron or terracotta ridge capping covers the top overlap of the sheets; at the eaves, a gutter of GI or PVC collects the runoff. Side laps face away from the prevailing wind to prevent driven rain entry. Flashing of 0.5 mm GI or aluminium turns up 150 mm at chimneys and parapets. Thermal movement of long metal sheets is absorbed by oversized holes at the J-hook fixings; without this, the sheets crack at the fixing point. IS 3007 governs the laying of AC sheet roofing.",
            ],
            bullets: [
              "Clay tiles: Mangalore flat, Allahabad half-round, pan-and-roll; 50-70 kg/m^2, on 75 mm battens.",
              "AC sheets: 1.05 x 1.0 m, 6 mm, 75 mm pitch corrugation; 150 mm end lap, one-corrugation side lap.",
              "GI sheets: 0.5 mm, weigh 5-7 kg/m^2, span 1.8 m between purlins.",
              "Pre-coated metal: 0.5 mm colour-coated galvanised steel, 20-year weather resistance, trapezoidal profile.",
              "Detailing: ridge capping, side laps away from wind, 150 mm flashing, oversized holes for thermal movement.",
            ],
            table: {
              caption: "Roof covering comparison.",
              headers: ["Covering", "Weight (kg/m^2)", "Purlin span (m)", "Cost index"],
              rows: [
                ["Mangalore tile", "55", "0.30 (batten)", "1.0"],
                ["AC sheet", "18", "1.5", "0.4"],
                ["GI sheet", "6", "1.8", "0.3"],
                ["Pre-coated metal", "5", "1.8", "0.7"],
                ["Asphalt shingle", "10", "0.30 (batten)", "0.8"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Pitched roof covering stack",
              caption:
                "Each layer above the rafter has a specific job.",
              layers: [
                { label: "Covering", note: "tiles or sheets, weatherproof skin" },
                { label: "Battens", note: "300 mm tile, or purlins 1.5-2 m for sheets" },
                { label: "Rafters", note: "sloping structural members" },
                { label: "Truss / tie beam", note: "transfers load to walls" },
                { label: "Wall plate + bearing", note: "rests on load-bearing wall" },
              ],
            },
            callout: {
              type: "warning",
              title: "Side lap direction",
              body: "Always lay sheets so that the side lap faces away from the prevailing wind. A lap facing the wind lifts in a storm and admits driven rain; the same defect fails the roof within a season. Examiners reward this practical detail.",
            },
            keyTerms: [
              { term: "End lap", definition: "The overlap of 150 mm at the end of a sheet over the sheet below, preventing water entry at the joints." },
              { term: "Purlin", definition: "A horizontal member running along the roof slope at 1.5-2 m centres supporting the covering directly and transferring load to the rafters." },
              { term: "Ridge capping", definition: "A GI or terracotta cover laid over the top overlap of sheets at the ridge to prevent water entry at the apex." },
            ],
            examQuestions: [
              {
                q: "Classify roof coverings. Describe AC sheet and clay tile coverings with materials, lap details, and fixing per IS 3007.",
                marks: 7,
                outline: [
                  "Classify by material: clay tiles, AC sheets, GI sheets, pre-coated metal, asphalt shingles.",
                  "Describe clay tile: Mangalore flat 50-70 kg/m^2 on 75 mm battens; 75 mm end lap, tight side lap.",
                  "Describe AC sheet: 1.05 x 1.0 m, 6 mm thick, 75 mm corrugation; 150 mm end lap, one-corrugation side lap.",
                  "State purlin spacing: 1.5 m for AC sheets, 1.8 m for GI sheets, 0.3 m battens for tiles.",
                  "Fixing: J-hooks and bitumen washers; oversized holes for thermal movement.",
                  "Detailing: ridge capping at apex, side lap away from prevailing wind, 150 mm flashing at parapets.",
                  "Cite IS 3007 for AC sheet laying; mention health concerns with asbestos.",
                ],
              },
              {
                q: "Compare AC sheet and GI sheet coverings for weight, span and cost.",
                marks: 3,
              },
              {
                q: "What is end lap and what value is used for AC sheets?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Doors and windows: types and frames",
            body: [
              "A door is a hinged or sliding panel in a wall that allows entry to a room; a window is an opening for light and air. Door types by construction include the battened-and-ledged door (vertical battens on horizontal ledgers, the cheapest, for toilets and stores), the battened-ledged-and-braced door (adds diagonal braces, for entrances), the framed-and-panelled door (a frame of styles and rails with recessed panels, the most common interior door), and the flush door (a flat panel of plywood or MDF over a cellular or solid core, used in modern interiors). Sizes range from 0.9 x 2.0 m for internal doors to 1.2 x 2.1 m for main entrances.",
              "Window types are classified by how they open. A casement window has side-hinged leaves opening outward; a sliding window has leaves running in aluminium tracks; a fixed window does not open and provides only light; a louvred window has horizontal slats for ventilation without rain entry; a pivoted window rotates about a central horizontal or vertical axis. Standard sizes are 1.2 x 1.5 m for living rooms and 0.9 x 1.0 m for toilets. The frame is of wood, steel, or aluminium; aluminium sliding frames are standard in modern flats for weather-tightness and zero maintenance.",
              "The frame of a door or window is built into the masonry during construction; it carries the leaf and resists the wind and the use load. A wooden frame of sal or teak 100 x 65 mm has a horn of 50 mm at each jamb embedded into the masonry, a sill at the bottom (for windows) and a head at the top. Steel frames of pressed 3 mm sheet or rolled hollow section are fire-resistant and used in factories; aluminium sliding frames have a track and roller mechanism with a woolpile seal. Hold-fasts - metal brackets - anchor the frame to the masonry at three points on each jamb.",
            ],
            bullets: [
              "Doors: battened-ledged, battened-ledged-braced, framed-panelled, flush; from cheap to fine.",
              "Windows: casement, sliding, fixed, louvred, pivoted; by opening method.",
              "Standard door sizes: 0.9 x 2.0 m internal, 1.2 x 2.1 m main entrance.",
              "Frame: wood 100 x 65 mm with 50 mm horn, steel for fire, aluminium for sliding.",
              "Hold-fasts: metal brackets anchoring the frame at three points per jamb.",
            ],
            table: {
              caption: "Door and window types by use.",
              headers: ["Element", "Type", "Best use", "Frame"],
              rows: [
                ["Door", "Battened-ledged-braced", "Side entrance, shed", "Wood"],
                ["Door", "Framed-panelled", "Interior room", "Wood"],
                ["Door", "Flush", "Modern interior", "Wood or MDF"],
                ["Window", "Casement", "Living room", "Wood or steel"],
                ["Window", "Sliding aluminium", "Flat, balcony", "Aluminium track"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a door type",
              caption:
                "Pick the door by use, location, and budget.",
              start: "Door requirement",
              branches: [
                { label: "shed, store, toilet", outcome: "battened-and-ledged door, cheapest", good: true },
                { label: "main entrance, security", outcome: "battened-ledged-braced or framed-panelled", good: true },
                { label: "modern interior, painted", outcome: "flush door with plywood face", good: true },
                { label: "fire-rated, factory", outcome: "steel frame with steel flush door", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Horn and hold-fast",
              body: "Doors and windows are anchored by horns of 50 mm embedded into the masonry at the head and sill, plus hold-fasts at three points per jamb. Examiners reward this detail; missing hold-fasts is the most common site defect and causes frames to spring.",
            },
            keyTerms: [
              { term: "Battened-and-ledged door", definition: "The simplest door of vertical timber battens nailed to horizontal ledgers, used for sheds and toilets." },
              { term: "Casement window", definition: "A window with side-hinged leaves opening outward, the most common type in residential construction." },
              { term: "Hold-fast", definition: "A metal bracket anchoring a door or window frame to the masonry at three points per jamb." },
            ],
            examQuestions: [
              {
                q: "Classify doors by construction. Describe battened-ledged-braced, framed-panelled and flush doors, and explain how a wooden frame is fixed to masonry.",
                marks: 7,
                outline: [
                  "Classify doors: battened-ledged, battened-ledged-braced, framed-panelled, flush.",
                  "Describe battened-ledged-braced: vertical battens on horizontal ledgers with diagonal braces; entrance, shed.",
                  "Describe framed-panelled: styles and rails frame recessed panels; most common interior door.",
                  "Describe flush door: flat plywood or MDF over cellular or solid core; modern interiors.",
                  "State sizes: 0.9 x 2.0 m internal, 1.2 x 2.1 m main entrance.",
                  "Frame: wood 100 x 65 mm sal or teak, with 50 mm horn at head and sill, head and jambs.",
                  "Hold-fasts: metal brackets at three points per jamb anchored into the masonry.",
                ],
              },
              {
                q: "Classify windows by the method of opening, and give one typical size for a living room.",
                marks: 3,
              },
              {
                q: "What is a hold-fast and at how many points is it fixed per jamb?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // ================ UNIT IV - STAIRS, PLASTERING AND FINISHING ================
    {
      number: 4,
      roman: "IV",
      title: "Stairs, Plastering and Finishing",
      summary:
        "Stairs, plastering and finishes complete the building for use. Unit IV covers stair types, plastering and pointing, painting and distempering, varnishing and wallpapering.",
      chapter: {
        number: "04",
        title: "Stairs, Plastering and Finishing",
        intro:
          "Unit IV finishes the building for occupation: the types of stairs (dog-legged, open-newel, spiral), the surface treatments of plastering and pointing, the painted and distempered finishes, and the final polish of varnish or wallpaper.",
        inOneBreath:
          "Stairs are dog-legged, open-newel, or spiral by plan; treads 250-300 mm, risers 150-180 mm, two flights per floor; plastering is cement-sand 1:3 to 1:6 in two coats over masonry; pointing exposes the masonry joints raked and re-filled in mortar; painting is two coats over primer; distempering is a glue-bound chalk wash for interiors; varnishing is a transparent resin-oil coat on wood; wallpapering is pasted paper or vinyl over a sized wall.",
        sections: [
          {
            number: "4.1",
            title: "Stair types: dog-legged, open-newel, spiral",
            body: [
              "A stair is a series of steps connecting two floors. Each step has a horizontal tread and a vertical riser; the flight is the continuous series between landings. The relation 2R + T = 600-640 mm governs comfort: a typical riser of 175 mm pairs with a tread of 275 mm. The minimum width of a residential stair is 0.9 m, of a public stair 1.5 m. The number of risers in a flight is limited to 12, and the headroom is 2.1 m; a landing of at least one tread length provides rest. IS 432 governs design loads and dimensions.",
              "The plan of the stair distinguishes the three common types. A dog-legged stair has two flights running in opposite directions, the second turning back at a half-space landing; both flights are visible only at the landing, so the plan looks like a dog's hind leg. An open-newel stair has two flights with a gap between them at the landing, the newel post exposed; it is used where the stairwell is wide enough for a well hole. A spiral stair winds around a central column of 100-150 mm, with cantilever treads of cast iron or steel; it is compact for a 1.5-2.0 m diameter and used for low-traffic access.",
              "Geometric stairs go further: a helical stair has a curved plan with treads cantilevered from an outer string, no central column, used for monumentality but costly to construct. Bifurcated stairs split at a landing into two flights - the grand entrance hall stair. Construction is RCC in modern buildings, with the waist slab 150 mm thick spanning the flights; the steps are cast monolithic with the waist. Wooden stairs are used in houses, steel stairs in industrial access. Handrails at 0.9 m height and balusters at 150 mm centres complete the safety requirement of IS 432.",
            ],
            bullets: [
              "Stair dimensions: 2R + T = 600-640 mm; R 150-180 mm, T 250-300 mm; width 0.9 m residential, 1.5 m public.",
              "Maximum 12 risers per flight; landing at least one tread length; headroom 2.1 m.",
              "Dog-legged: two flights back-to-back at a half-space landing; no gap between flights.",
              "Open-newel: two flights with a gap and exposed newel post at the well hole.",
              "Spiral: treads cantilever from a central column 100-150 mm; 1.5-2.0 m diameter.",
            ],
            table: {
              caption: "Stair types by plan.",
              headers: ["Type", "Plan shape", "Typical use", "Min width"],
              rows: [
                ["Dog-legged", "Back-to-back flights", "Residential", "0.9 m"],
                ["Open-newel", "Flights with gap", "Public, wide stairwell", "1.5 m"],
                ["Spiral", "Circle around column", "Compact access", "1.5 m dia"],
                ["Geometric helical", "Curved plan, no column", "Monumental", "2.0 m"],
                ["Bifurcated", "Splits at landing", "Grand entrance", "3.0 m"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Choosing a stair type",
              caption:
                "Plan shape, traffic, and site dimensions pick the stair.",
              steps: [
                { label: "Traffic and storey", note: "1 family vs public; 2 vs 4 floors" },
                { label: "Site width", note: "stairwell 1.2 m vs 3.0 m" },
                { label: "Pick plan", note: "dog-legged / open-newel / spiral" },
                { label: "Fix dimensions", note: "R, T per 2R+T = 600-640" },
                { label: "Detail RCC waist and handrail", note: "150 mm waist, 0.9 m rail" },
              ],
            },
            callout: {
              type: "exam",
              title: "2R + T = 600-640 mm",
              body: "The comfort formula is the most-tested stair detail. Memorise it, then quote typical values: riser 150-180 mm, tread 250-300 mm. Compute the number of risers as floor height / riser height; if more than 12, add a landing.",
            },
            keyTerms: [
              { term: "Dog-legged stair", definition: "A stair of two flights running back-to-back at a half-space landing, used in narrow residential stairwells." },
              { term: "Open-newel stair", definition: "A stair of two flights with a gap between them at the landing, the newel post exposed; used in wide stairwells." },
              { term: "Flight", definition: "The continuous series of steps between two landings; limited to 12 risers per IS 432." },
            ],
            examQuestions: [
              {
                q: "Define a stair and its components. Classify stairs by plan and describe dog-legged, open-newel and spiral stairs with sketches.",
                marks: 7,
                outline: [
                  "Define stair: series of steps connecting floors; components tread, riser, flight, landing, newel.",
                  "State comfort formula 2R + T = 600-640 mm; riser 150-180 mm, tread 250-300 mm; max 12 risers per flight.",
                  "State width 0.9 m residential, 1.5 m public; headroom 2.1 m per IS 432.",
                  "Dog-legged: two flights back-to-back at a half-space landing; no gap; used for narrow stairwells.",
                  "Open-newel: two flights with a gap and exposed newel post at the well hole; wide stairwell.",
                  "Spiral: treads cantilever from a central 100-150 mm column; 1.5-2.0 m diameter; compact.",
                  "Mention geometric helical and bifurcated stairs for monumental and entrance-hall use.",
                ],
              },
              {
                q: "Design a dog-legged stair for a floor-to-floor height of 3.0 m, riser 150 mm, tread 270 mm. State number of risers and treads per flight.",
                marks: 3,
              },
              {
                q: "What is a spiral stair and where is it used?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Plastering",
            body: [
              "Plastering is the application of a cement-sand mortar to a masonry or RCC surface to produce a smooth, even and durable finish, to protect the surface from weather, and to conceal defects. The mortar is usually 1:3 to 1:6 cement-sand by volume; the coarser 1:6 is for the undercoat on exterior walls, the finer 1:3 for the finishing coat on interiors. The thickness of a single coat is 10-15 mm; two-coat work uses 10-12 mm undercoat and 3-5 mm finishing coat; three-coat work adds a 6 mm splatter dash for very rough backgrounds. Lime is sometimes substituted for half the cement in interior work for plasticity.",
              "The procedure of plastering begins with preparing the surface. The masonry joints are raked to 10 mm depth to provide a key; the surface is wetted for 6 hours before plastering to prevent it sucking water from the mortar. Dot and screed guides are fixed at 1.5 m centres, vertical strips of mortar that define the finished plane. The undercoat is dashed against the wall with a trowel, levelled against the screeds with a straight-edge, and roughened with a float to receive the next coat. The finishing coat is applied after the undercoat has set for 24 hours and is finished with a wooden or steel float to the desired texture.",
              "Defects of plastering include blistering (small bubbles from late slaking of lime), cracking from shrinkage of rich mortar or thermal movement of the wall, flaking from poor key, and efflorescence (white salt deposits from soluble salts in the soil or materials). Curing for 7 days by ponding or wet hessian is essential; without it, the mortar dries before hydration, leaving a weak surface. IS 1662 governs plastering work, specifying materials, mixes and tolerances; the rate is measured per square metre of finished surface, with deductions for openings larger than 0.5 m^2.",
            ],
            bullets: [
              "Mortar: 1:3 to 1:6 cement-sand; undercoat 1:6 exterior, finishing 1:3 interior.",
              "Thickness: 10-15 mm single coat; 10-12 mm + 3-5 mm two-coat; 6 mm dash + 10 + 3 three-coat.",
              "Surface prep: rake joints 10 mm, wet wall 6 h; set dot and screed at 1.5 m centres.",
              "Undercoat dashed, levelled to screed, roughened; finishing coat after 24 h, floated to texture.",
              "Defects: blistering, shrinkage cracks, flaking, efflorescence; cure 7 days per IS 1662.",
            ],
            table: {
              caption: "Plastering coats and thickness.",
              headers: ["Coat", "Mortar", "Thickness (mm)", "Surface"],
              rows: [
                ["Splatter dash", "1:3", "6", "Very rough background"],
                ["Undercoat", "1:6", "10-12", "Exterior wall"],
                ["Finishing", "1:3", "3-5", "Interior wall"],
                ["Single coat", "1:4", "10-15", "Plain wall"],
                ["Neeru finish", "1:2 lime-cement + sand", "3", "Smooth interior"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Plastering procedure",
              caption:
                "Each stage tightens the surface; skipping the curing breaks it.",
              stages: [
                { label: "Rake joints 10 mm", note: "key for mortar" },
                { label: "Wet wall 6 h", note: "prevent water suction" },
                { label: "Fix dot and screed", note: "1.5 m centres" },
                { label: "Apply undercoat, level", note: "10-12 mm, 1:6" },
                { label: "Apply finishing coat", note: "3-5 mm, 1:3; cure 7 d" },
              ],
            },
            callout: {
              type: "warning",
              title: "Efflorescence is a sign",
              body: "White salt deposits on the plaster surface mean soluble salts are migrating from the soil, the bricks, or the mortar. Do not paint over efflorescence: wash it off with a 10 percent hydrochloric acid solution, dry the wall, and address the source (rising damp or salty aggregates) before finishing.",
            },
            keyTerms: [
              { term: "Plastering", definition: "Application of cement-sand mortar 1:3 to 1:6 to a masonry or RCC surface for a smooth, protective finish per IS 1662." },
              { term: "Dot and screed", definition: "Vertical strips of mortar fixed at 1.5 m centres to define the finished plane of a plastered wall." },
              { term: "Efflorescence", definition: "White salt deposits on a plastered surface, caused by soluble salts migrating from the soil or materials and dried by evaporation." },
            ],
            examQuestions: [
              {
                q: "Define plastering and state its objectives. Describe the procedure of two-coat plastering with mortar mixes and thicknesses per IS 1662.",
                marks: 7,
                outline: [
                  "Define plastering: cement-sand mortar 1:3 to 1:6 applied to masonry or RCC for smooth protective finish.",
                  "State objectives: smooth surface, weather protection, conceal defects, base for paint.",
                  "Surface prep: rake masonry joints 10 mm, wet wall 6 h, fix dot and screed at 1.5 m centres.",
                  "Apply undercoat 1:6 cement-sand, 10-12 mm; dashed, levelled to screed, roughened for key.",
                  "After 24 h apply finishing coat 1:3, 3-5 mm; float to texture; cure 7 days by wet hessian.",
                  "Cite IS 1662 for materials, mixes, tolerances; rate per m^2 with deductions for openings > 0.5 m^2.",
                  "Mention defects: blistering, shrinkage cracks, flaking, efflorescence; remedies include curing and acid wash.",
                ],
              },
              {
                q: "State any three defects in plastering and give one cause for each.",
                marks: 3,
              },
              {
                q: "What is the purpose of raking masonry joints before plastering, and to what depth?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Pointing",
            body: [
              "Pointing is the finishing of the masonry joints to a definite profile while leaving the masonry face exposed; it differs from plastering in that the mortar is applied only to the joints, not to the whole wall. The masonry face remains visible, making pointing the preferred finish for fair-faced brick or stone walls where the texture of the material is an architectural feature. The mortar is 1:2 to 1:3 cement-sand for fine joints or 1:3 for ordinary; lime mortar with surkhi is used in restoration. Joints are raked to 15-20 mm depth and kept wet during pointing.",
              "The types of pointing are named by the finished profile of the joint. Flush pointing finishes the mortar level with the masonry face, the simplest and weatherproof. Weathered pointing slopes the mortar outward at the bottom, throwing water off the joint. Ruled (grooved) pointing presses a small V-groove along the centre of the joint. Struck pointing slopes the mortar inward and is decorative but not weatherproof. Tuck pointing uses a fine ribbon of contrasting mortar over a flush base, imitating gauged brickwork. Each profile has a different small tool - a frenchman, a jointer, or a slicker.",
              "The procedure begins with raking the joints to 15-20 mm depth with a chisel, taking care not to damage the brick edges. The surface is wetted; mortar is pressed into the joint with a small trowel and packed tight in two layers. The joint is finished to the desired profile with the appropriate tool while the mortar is still plastic. Curing for 3 days is enough because the volume of mortar is small. Pointing costs less than plastering because the area covered is only the joints - about 10-15 percent of the wall surface - but it is labour-intensive per metre of joint. IS 2212 governs pointing as part of brick masonry.",
            ],
            bullets: [
              "Pointing: mortar on joints only, masonry face exposed; for fair-faced brick or stone walls.",
              "Mortar: 1:2 to 1:3 cement-sand; joints raked 15-20 mm, kept wet during pointing.",
              "Flush pointing: mortar level with face; simplest and weatherproof.",
              "Weathered pointing: slope outward at the bottom to throw water off; ruled, struck, tuck variants.",
              "Curing 3 days; rate covers only joints (about 10-15 percent of wall area); IS 2212 governs.",
            ],
            table: {
              caption: "Pointing types by joint profile.",
              headers: ["Type", "Profile", "Weatherproof", "Use"],
              rows: [
                ["Flush", "Level with face", "Good", "Fair-faced brick"],
                ["Weathered", "Slopes outward at bottom", "Best", "Exterior walls"],
                ["Ruled (grooved)", "V-groove along centre", "Good", "Decorative brick"],
                ["Struck", "Slopes inward", "Poor", "Interior decorative"],
                ["Tuck", "Ribbon of contrasting mortar", "Good", "Imitation gauged brick"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Pointing profile choice",
              caption:
                "Match the profile to the exposure and the look wanted.",
              axes: { x: "Exposure (interior -> exterior)", y: "Detail (plain -> decorative)" },
              quadrants: [
                { label: "Interior + plain: flush", note: "simplest" },
                { label: "Exterior + plain: weathered", note: "throws off water" },
                { label: "Interior + decorative: struck or tuck", note: "imitation gauged" },
                { label: "Exterior + decorative: ruled weathered", note: "grooved slope" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pointing vs plastering",
              body: "The most-tested comparison: pointing finishes only the joints (10-15 percent of wall area, masonry visible); plastering covers the whole wall. Pointing costs less material but more labour per metre of joint, and is chosen for fair-faced brick where texture is the architectural feature.",
            },
            keyTerms: [
              { term: "Pointing", definition: "The finishing of masonry joints to a definite profile while leaving the masonry face exposed, with mortar 1:2 to 1:3 per IS 2212." },
              { term: "Flush pointing", definition: "A pointing profile in which the mortar is finished level with the masonry face; the simplest and weatherproof." },
              { term: "Weathered pointing", definition: "A pointing profile in which the mortar slopes outward at the bottom, throwing water off the joint for weather resistance." },
            ],
            examQuestions: [
              {
                q: "Define pointing and differentiate it from plastering. Describe five types of pointing with sketches and state the procedure.",
                marks: 7,
                outline: [
                  "Define pointing: mortar 1:2 to 1:3 on joints only, masonry face exposed.",
                  "Differentiate from plastering: plastering covers the whole wall; pointing only the joints (10-15 percent area).",
                  "Flush pointing: mortar level with face; simplest and weatherproof.",
                  "Weathered pointing: slope outward at bottom; throws water off the joint.",
                  "Ruled (grooved): V-groove along centre; struck: slope inward, decorative; tuck: ribbon of contrasting mortar.",
                  "Procedure: rake joints 15-20 mm, wet wall, press mortar in two layers, finish with tool, cure 3 days.",
                  "Cite IS 2212; mention rate per running metre of joint, less material but more labour.",
                ],
              },
              {
                q: "Differentiate pointing and plastering in terms of area covered, cost and appearance.",
                marks: 3,
              },
              {
                q: "What is weathered pointing and why is it preferred on exterior walls?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Painting and distempering",
            body: [
              "Painting is the application of a pigmented liquid coating to a surface for protection and decoration. For a new masonry wall the system is: one coat of primer, two coats of oil-bound distemper or emulsion paint. The primer seals the porous plaster, provides a key, and evens suction; the finish coats carry the colour. For exterior walls, acrylic emulsion paint is used for its flexibility and UV resistance; for interior walls, water-thinned emulsion or oil-bound distemper is cheaper. IS 15489 covers cement paint, IS 2338 distempers. Paint coverage is 10-12 m^2 per litre per coat on smooth plaster.",
              "Distempering is a cheaper finish in which the binder is glue or casein rather than oil or synthetic resin. The dry distemper is mixed with water to a creamy consistency and applied in two coats over a primer of whiting and glue; it gives a soft, matt surface suited to ceilings and less-trafficked interiors. Oil-bound distemper has some drying oil, is washable and durable enough for living room walls. Distempering costs about a third of emulsion paint but cannot be washed beyond a light wipe; it is the standard finish for low-cost housing and government buildings.",
              "The procedure for painting a new plastered wall starts after the wall has cured for 6 months (to allow the lime to carbonate and soluble salts to surface). The surface is cleaned of efflorescence, dust and grease; cracks are filled with putty; a coat of alkali-resistant primer is brushed or rolled on. Two coats of emulsion paint follow, thinned by 20 percent water in the first coat and 10 percent in the second, brushed or rolled with a 250 mm nap roller. Each coat is allowed to dry 24 hours; the final coat is finished in one direction to avoid lap marks. IS 2394 governs the painting procedure.",
            ],
            bullets: [
              "Painting system: primer + 2 finish coats; coverage 10-12 m^2/L per coat on smooth plaster.",
              "Exterior: acrylic emulsion, UV-resistant; interior: emulsion or oil-bound distemper.",
              "Distempering: glue or casein binder, matt finish, cheap; oil-bound distemper washable.",
              "Wait 6 months on new plaster for lime carbonation and salt efflorescence before painting.",
              "Surface prep: clean efflorescence, fill cracks with putty, primer, 2 coats with 24-h drying.",
            ],
            codeExample: {
              language: "python",
              caption: "Paint quantity for a wall with one door opening.",
              code: `import math
# Paint quantity for a wall 6.0 x 3.0 m with one door 2.1 x 0.9 m
wall = 6.0 * 3.0
door = 2.1 * 0.9
area = wall - door
coverage = 10.0              # m2 per litre, single coat
coats = 2
litres = area * coats / coverage
tins = math.ceil(litres / 4.0)   # 4-litre retail pack
print(f"Paint area = {area:.2f} m2, litres = {litres:.2f} L, "
      f"buy {tins} tins of 4 L")
# Paint area = 16.11 m2, litres = 3.22 L, buy 1 tins of 4 L`,
            },
            diagram: {
              kind: "compare",
              title: "Emulsion paint vs distemper",
              caption:
                "Choose the finish by budget and traffic.",
              left: {
                heading: "Emulsion paint",
                items: [
                  "Acrylic or vinyl binder",
                  "Coverage 10-12 m^2/L",
                  "Washable, durable",
                  "Living room, exterior",
                  "About 3x the cost of distemper",
                ],
              },
              right: {
                heading: "Distemper",
                items: [
                  "Glue or casein binder",
                  "Coverage 12-15 m^2/L",
                  "Soft matt, light wipe only",
                  "Ceilings, low-cost interiors",
                  "About 1/3 the cost of emulsion",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Wait for efflorescence",
              body: "Painting a freshly plastered wall within 6 months traps soluble salts behind the paint film; they push the paint off as efflorescence blooms. Always allow new plaster to cure 6 months, wash off any efflorescence with 10 percent HCl, then prime. Examiners reward this discipline.",
            },
            keyTerms: [
              { term: "Primer", definition: "The first coat of paint that seals the porous plaster, provides a key for the finish coat, and evens out suction differences." },
              { term: "Distempering", definition: "A wall finish of dry distemper mixed with water using glue or casein as binder, giving a soft matt surface cheaper than emulsion paint." },
              { term: "Emulsion paint", definition: "A paint with acrylic or vinyl resin binder dispersed in water, giving a washable, durable finish for interior and exterior walls." },
            ],
            examQuestions: [
              {
                q: "Describe the procedure of painting a new plastered wall. Compare emulsion paint and distemper for material, durability and use.",
                marks: 7,
                outline: [
                  "Wait 6 months for plaster cure and efflorescence to surface.",
                  "Surface prep: clean efflorescence with 10 percent HCl, fill cracks with putty, dust and grease removed.",
                  "Apply alkali-resistant primer: seals plaster, provides key, evens suction.",
                  "Apply two coats of emulsion paint: thin first coat 20 percent, second 10 percent; roller 250 mm nap.",
                  "Dry 24 hours between coats; finish in one direction to avoid lap marks.",
                  "Distemper: glue or casein binder, matt; oil-bound distemper washable; cheaper, for low-traffic.",
                  "Emulsion: acrylic or vinyl binder, washable, durable; for living rooms and exteriors; coverage 10-12 m^2/L.",
                ],
              },
              {
                q: "State the procedure of distempering a ceiling. Give two advantages of oil-bound distemper.",
                marks: 3,
              },
              {
                q: "Why must a newly plastered wall be left for 6 months before painting?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Varnishing and wallpapering",
            body: [
              "Varnishing is the application of a transparent resin-oil coating to wood to bring out the grain and protect it from moisture and wear. The varnish is a solution of natural resin (copal, mastic, shellac) or synthetic (alkyd, polyurethane) in a solvent (turpentine or mineral spirit) with some drying oil; on drying it leaves a hard transparent film. The procedure for new wood is: sand smooth with No. 1 glasspaper, fill pores with paste filler coloured to the wood, apply a sealer coat, then two to three coats of varnish thinned 20 percent in the first and full strength later, sanding lightly between coats.",
              "Wallpapering covers an interior wall with pasted paper or vinyl to provide a decorative, smooth finish without the curing and drying time of paint. Modern wallpapers are vinyl-coated paper or non-woven fabric, in rolls 10 m long and 530 mm wide; the paste is a cellulose-based adhesive applied to the wall or to the back per type. The wall is sized with a dilute paste or primer to even the suction; lining paper may be hung first to mask defects. Each strip is hung plumb against a chalk line, the next strip matched at the pattern repeat, seams rolled flat, and surplus trimmed at ceiling and skirting.",
              "The choice between varnish and paint on wood depends on whether the grain is to show. Varnish brings out the natural figure of teak or rosewood and is the standard for doors and furniture of good wood. Paint obscures the grain and is used on cheaper woods, MDF, or where a colour is desired. Polyurethane varnish is the modern standard for floors and table tops - it resists abrasion and alcohol; melamine varnish is heat-resistant for kitchen cabinets. Wallpapering is the fastest interior finish, applied in a day to a sized wall; it is not weather-resistant and so used only indoors.",
            ],
            bullets: [
              "Varnish: resin + oil in solvent; transparent film protects wood and shows grain.",
              "Procedure: sand No. 1 glasspaper, paste filler, sealer, 2-3 coats thinned first and full later, sand between.",
              "Polyurethane varnish: abrasion and alcohol resistant; melamine: heat resistant for kitchens.",
              "Wallpaper: vinyl or non-woven, 10 m x 530 mm rolls; cellulose paste; sized wall first.",
              "Hang plumb against chalk line, match pattern repeat, roll seams, trim at ceiling and skirting.",
            ],
            table: {
              caption: "Varnish vs paint vs wallpaper.",
              headers: ["Aspect", "Varnish", "Paint", "Wallpaper"],
              rows: [
                ["Substrate", "Wood", "Wood, masonry, metal", "Masonry interior"],
                ["Grain visible", "Yes", "No", "N/A"],
                ["Coats", "2-3 over sealer", "Primer + 2 finish", "1 layer of paper"],
                ["Drying time", "24 h per coat", "24 h per coat", "1 day total"],
                ["Weather resistant", "Yes (PU)", "Yes (exterior)", "No"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Finishing a wood surface",
              caption:
                "Iterate sand-coat-sand until the desired sheen; each cycle smooths the film.",
              steps: [
                { label: "Sand smooth", note: "No. 1 glasspaper" },
                { label: "Fill pores and seal", note: "paste filler + sealer" },
                { label: "Apply varnish coat", note: "thinned first, full later" },
                { label: "Sand lightly between coats", note: "No. 0 glasspaper" },
                { label: "Apply next coat", note: "repeat 2-3 times" },
                { label: "Final polish", note: "wax or polish to sheen" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the pattern repeat",
              body: "When hanging patterned wallpaper, the second strip must be cut longer by the pattern repeat (typically 50-100 mm) so the design aligns at the seam. A mismatched repeat is visible across the room and is the most common wallpapering defect.",
            },
            keyTerms: [
              { term: "Varnish", definition: "A transparent solution of natural or synthetic resin with drying oil in a solvent, applied to wood to protect and bring out the grain." },
              { term: "Wallpaper", definition: "A decorative paper or vinyl-coated non-woven roll 10 m x 530 mm, pasted onto a sized interior wall for a smooth finish." },
              { term: "Pattern repeat", definition: "The vertical distance over which a wallpaper design repeats; the second strip must be cut longer by this amount to align at the seam." },
            ],
            examQuestions: [
              {
                q: "Define varnishing and describe the procedure for varnishing new wood. Compare varnishing and painting, and describe the procedure of wallpapering.",
                marks: 7,
                outline: [
                  "Define varnish: resin + drying oil in solvent; transparent film protects wood and shows grain.",
                  "Procedure: sand with No. 1 glasspaper, fill pores with paste filler, apply sealer coat.",
                  "Apply 2-3 coats of varnish: thinned 20 percent in first, full strength later; sand lightly between.",
                  "Mention polyurethane varnish for floors (abrasion and alcohol resistant); melamine for heat.",
                  "Varnishing vs painting: varnish shows grain on good wood (teak); paint obscures grain on cheaper wood.",
                  "Wallpapering: vinyl or non-woven roll 10 m x 530 mm; size wall, paste, hang plumb, match repeat.",
                  "Trim at ceiling and skirting; not weather-resistant; fastest interior finish.",
                ],
              },
              {
                q: "Differentiate between varnishing and painting of wood surfaces in three respects.",
                marks: 3,
              },
              {
                q: "What is a pattern repeat in wallpapering and why does it matter?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    // ============== UNIT V - MODERN CONSTRUCTION TECHNIQUES ==============
    {
      number: 5,
      roman: "V",
      title: "Modern Construction Techniques",
      summary:
        "Modern construction uses factory-made components and automation to build faster and greener. Unit V covers precast concrete, slip and jump formwork, 3D printing, prefabrication and green materials, and an overview of BIM.",
      chapter: {
        number: "05",
        title: "Modern Construction Techniques",
        intro:
          "Unit V closes the subject with the modern toolkit: precast concrete components, slip and jump formwork for tall cores, 3D concrete printing, prefabrication and green materials, and the building information model that integrates them all.",
        inOneBreath:
          "Precast concrete makes beams, columns, slabs, and walls in a factory and assembles them on site; slip formwork slides continuously to cast cores and silos up to 1 m per shift; jump formwork moves in discrete lifts of 3-4 m for tall buildings; 3D printing extrudes concrete bead by bead to make walls directly from CAD; prefabrication extends precast to whole rooms; green materials use fly ash, recycled aggregate, and bamboo; BIM federates all disciplines in one model from design to demolition.",
        sections: [
          {
            number: "5.1",
            title: "Precast concrete",
            body: [
              "Precast concrete is concrete cast, cured, and finished in a factory, then transported to site and erected into the structure. The factory environment permits tight quality control: the concrete is batched by computer, vibrated on tables, steam-cured for 12 hours, and tested before dispatch. Components made this way include precast beams, columns, slabs (hollow core or double-T), walls (sandwich panels with insulation), and piles. The advantages are speed of construction (a precast frame can be erected at 200 m^2 per day), high surface finish, and reduced site labour. The challenges are the heavy lifting equipment required and the joints that must transfer load between components.",
              "The connections between precast components are the critical design detail. A column-to-column spigot joint uses a steel insert grouted into a corrugated sleeve. A beam-to-column connection uses a corbel on the column, on which the beam seats with a neoprene pad; the top reinforcement is welded to a plate cast into the column. A floor slab rests on the beam with a 50 mm bearing and is tied by a site-cast topping 50 mm thick with mesh. Joints are designed to transfer moment, shear, and axial load as the structural analysis requires; the design must also accommodate the erection tolerance of 6 mm per metre.",
              "Precast construction dominates bridges, parking garages, and repetitive building frames such as schools and hostels. Precast segments for a bridge are cast in a yard, match-cast against each other, then post-tensioned together on site by external tendons. Hollow-core slabs 200-400 mm thick span 6-12 m without intermediate beams, used in offices and apartments; double-T slabs 800 mm deep span 12-24 m for car parks. IS 15918 governs precast concrete design and construction. The environmental gain is significant: precast uses less cement per m^2 than site-cast, factory waste is recycled, and the site is quieter and cleaner.",
            ],
            bullets: [
              "Precast: factory-cast, steam-cured, transported and erected on site; speed 200 m^2 per day.",
              "Components: beams, columns, hollow-core and double-T slabs, sandwich wall panels, piles.",
              "Joints: spigot column-column, corbel beam-column, slab on 50 mm bearing with site topping.",
              "Hollow-core slabs 200-400 mm span 6-12 m; double-T 800 mm span 12-24 m for car parks.",
              "IS 15918 governs precast design; erection tolerance 6 mm per metre.",
            ],
            table: {
              caption: "Precast components and spans.",
              headers: ["Component", "Depth (mm)", "Span (m)", "Use"],
              rows: [
                ["Hollow-core slab", "200-400", "6-12", "Floors, offices"],
                ["Double-T slab", "800", "12-24", "Car parks, roofs"],
                ["Beam", "300-600", "6-12", "Frame beams"],
                ["Column", "300-400", "2-5 per storey", "Frame columns"],
                ["Wall panel", "150-250", "3-6", "Cladding, load-bearing walls"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Precast from factory to site",
              caption:
                "Each arrow adds a step; speed comes from overlapping casting and erection.",
              steps: [
                { label: "Batch and cast", note: "computer-batched, table-vibrated" },
                { label: "Steam cure 12 h", note: "rapid strength gain" },
                { label: "Test and dispatch", note: "QC before transport" },
                { label: "Erect with crane", note: "spigot and corbel joints" },
                { label: "Site-cast topping", note: "ties frame together" },
              ],
            },
            callout: {
              type: "tip",
              title: "Design the joint first",
              body: "The classic precast exam question turns on the joint detail. Draw the spigot joint for column-column, the corbel joint for beam-column, and the bearing joint for slab on beam. State the neoprene pad and the site-cast topping that ties the system together.",
            },
            keyTerms: [
              { term: "Precast concrete", definition: "Concrete components cast, cured, and finished in a factory, then transported and erected on site under IS 15918." },
              { term: "Hollow-core slab", definition: "A precast floor slab 200-400 mm deep with continuous longitudinal voids, spanning 6-12 m without intermediate beams." },
              { term: "Corbel joint", definition: "A beam-to-column precast connection in which a corbel projecting from the column supports the beam on a neoprene pad." },
            ],
            examQuestions: [
              {
                q: "Define precast concrete. Describe its components and the connection details for column-column and beam-column joints, citing IS 15918.",
                marks: 7,
                outline: [
                  "Define precast: factory-cast, steam-cured, transported, erected on site.",
                  "Components: beams, columns, hollow-core and double-T slabs, wall panels, piles.",
                  "Advantages: speed 200 m^2/day, high finish, reduced site labour; challenges: lifting, joints.",
                  "Column-column: spigot joint, steel insert grouted into corrugated sleeve.",
                  "Beam-column: corbel on column, beam on neoprene pad, top reinforcement welded to plate.",
                  "Slab on beam: 50 mm bearing, site topping 50 mm with mesh ties the frame.",
                  "Cite IS 15918; mention hollow-core 200-400 mm spanning 6-12 m, double-T 12-24 m; tolerance 6 mm/m.",
                ],
              },
              {
                q: "State three advantages and two challenges of precast concrete over site-cast.",
                marks: 3,
              },
              {
                q: "What is a hollow-core slab and what span does it typically achieve?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Slip and jump formwork",
            body: [
              "Slip formwork is a construction technique in which the form is continuously raised by hydraulic jacks as concrete is placed, producing a monolithic RCC wall without construction joints. The form is a steel panel system about 1.2 m high, mounted on yokes connected to jacks that climb on rods embedded in the wall. Concrete is placed in layers of about 250 mm and the form rises at 1.0 to 1.5 m per shift, fast enough that the concrete at the bottom has set enough to support itself when the form leaves the top. Slip forming is the standard for silos, chimneys, lift cores of tall buildings, and bridge piers up to 250 m tall.",
              "Jump formwork, by contrast, moves in discrete lifts. The form is assembled for a storey height of 3-4 m; concrete is cast and cured for 24 hours; then the form is released, jumped up by crane to the next level, and re-assembled. Jump forming suits tall buildings with repetitive floors, where each floor has the same core geometry. It is slower than slip forming (one floor per 3 days against 1 m per shift) but easier to schedule with the floor slabs, which slip forming cannot easily follow. The variants are climbing form with rail guides, and self-jacking form with its own hydraulic cylinders.",
              "The choice between slip and jump form depends on the structure shape and schedule. Slip forming is best for tall, uniform, taper-free structures - silos, chimneys, lift cores - where the cross-section is constant for many metres. Jump forming is preferred where the floor cycle dictates progress, where the core shape changes per floor, or where winter curing pauses are needed. Both systems need a tower crane for material handling and an accurate survey of plumb every 3 m of height. IS 14687 governs formwork in general; safety is governed by IS 3696, with strict fall protection on the working platform.",
            ],
            bullets: [
              "Slip form: continuous rise of 1.0-1.5 m per shift; monolithic wall without joints.",
              "Jump form: discrete lifts of 3-4 m (one storey); form released, lifted by crane, re-assembled.",
              "Slip: silos, chimneys, lift cores; jump: tall buildings with repetitive floors.",
              "Slip is faster (1 m/shift vs 1 floor/3 days); jump is easier to schedule with floor slabs.",
              "IS 14687 governs formwork; IS 3696 safety; check plumb every 3 m of height.",
            ],
            table: {
              caption: "Slip vs jump formwork.",
              headers: ["Aspect", "Slip form", "Jump form"],
              rows: [
                ["Movement", "Continuous", "Discrete lifts"],
                ["Lift height", "1.0-1.5 m per shift", "3-4 m (one storey)"],
                ["Speed", "Fast (1 m/shift)", "Slower (1 floor/3 days)"],
                ["Best for", "Silos, chimneys, lift cores", "Tall buildings with floor cycle"],
                ["Construction joints", "None (monolithic)", "One per storey"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Slip forming a lift core",
              caption:
                "The form never stops; concrete and steel arrive as it climbs.",
              stages: [
                { label: "Place steel and inserts", note: "ahead of the form" },
                { label: "Pour 250 mm layer", note: "concrete in form" },
                { label: "Hydraulic jack climbs", note: "1.0-1.5 m per shift" },
                { label: "Concrete emerges, sets", note: "self-supporting below" },
                { label: "Check plumb every 3 m", note: "laser theodolite" },
              ],
            },
            callout: {
              type: "exam",
              title: "Slip vs jump",
              body: "The most-tested contrast: slip form moves continuously (1-1.5 m/shift, monolithic, silos and chimneys); jump form moves in storey-height lifts (3-4 m, one floor per 3 days, repetitive buildings). Memorise the speed and the structural application; both share IS 14687 and IS 3696 safety rules.",
            },
            keyTerms: [
              { term: "Slip formwork", definition: "A form system continuously raised by hydraulic jacks as concrete is placed, producing a monolithic wall at 1.0-1.5 m per shift." },
              { term: "Jump formwork", definition: "A form system moved in discrete storey-height lifts of 3-4 m, released and re-assembled at each floor." },
              { term: "Climbing form", definition: "A variant of jump formwork with rail guides fixed to the wall, along which the form climbs by self-jacking hydraulic cylinders." },
            ],
            examQuestions: [
              {
                q: "Define slip formwork and jump formwork. Describe the procedure of slip forming a lift core, and state when each system is preferred.",
                marks: 7,
                outline: [
                  "Define slip form: continuous rise by hydraulic jacks on rods, 1.0-1.5 m per shift, monolithic.",
                  "Define jump form: discrete lifts of 3-4 m, released and lifted by crane to next storey.",
                  "Slip procedure: place steel ahead, pour 250 mm layers, jack climbs, concrete sets as it emerges.",
                  "Check plumb every 3 m with laser theodolite; tower crane for material handling.",
                  "Slip applications: silos, chimneys, lift cores, bridge piers up to 250 m, constant cross-section.",
                  "Jump applications: tall buildings with repetitive floor cycle, where floor slabs dictate progress.",
                  "Cite IS 14687 for formwork and IS 3696 for safety; one floor per 3 days for jump, 1 m/shift for slip.",
                ],
              },
              {
                q: "Compare slip formwork and jump formwork in speed, joints and structural application.",
                marks: 3,
              },
              {
                q: "State any two structures for which slip formwork is the standard.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "3D printing in construction",
            body: [
              "3D printing in construction, also called additive manufacturing, builds walls and components by extruding a cementitious paste bead by bead from a nozzle moved by a gantry or a robotic arm, directly from a CAD model. The material is a high-performance mortar with a maximum aggregate of 2 mm, mixed with accelerators so that the bead holds its shape under the bead above. The nozzle, 40 mm wide, lays the bead in a perimeter loop and then fills the interior with a zig-zag pattern, building the wall in layers 10 mm thick. A small house of 30 m^2 can be printed in 24 hours; the technology is now used for low-cost housing and architectural prototypes.",
              "The advantages of 3D printing are speed, the elimination of formwork, geometric freedom (curved walls and overhangs need no extra form), and a reduction of material waste to under 5 percent. The challenges are the reinforcement: it is hard to print concrete around conventional steel bars, so most printed walls are unreinforced and rely on the geometry or on post-tensioned rods for flexural capacity. The mix design is demanding: the paste must be fluid enough to extrude, stiff enough to hold shape, and fast-setting to support the next layer. The printer itself is expensive - gantry systems cost in the millions of dollars, though robotic arm systems are cheaper.",
              "Field deployments include a 3D-printed office in Dubai, a 1,200-house government scheme in India, and a printed bridge in Shanghai. The Indian scheme by L&T used a robotic arm printer and a fly-ash mortar to print walls 230 mm thick, with conventional foundations and roof. Standards are still emerging: the ACI 563 committee is drafting a specification for 3D-printed concrete, and the Indian Bureau of Indian Standards has set up a panel. The technology is best suited to repetitive, low-rise housing where the speed offsets the printer cost; it is unlikely to replace structural frames in high-rise buildings soon.",
            ],
            bullets: [
              "3D printing: extrude cement paste bead by bead from nozzle on gantry or robotic arm.",
              "Material: high-performance mortar, 2 mm max aggregate, accelerators; bead 40 mm wide, layer 10 mm.",
              "Advantages: speed (30 m^2 house in 24 h), no formwork, geometric freedom, waste < 5 percent.",
              "Challenge: reinforcement; printed walls mostly unreinforced, rely on geometry or post-tension.",
              "Field: L&T 1,200-house scheme in India; ACI 563 drafting the standard.",
            ],
            codeExample: {
              language: "python",
              caption: "Estimate layers and print time for a 3D-printed wall.",
              code: `# Estimate layers and time to print a 3.0 x 2.5 x 2.8 m wall
W, D, H = 3.0, 2.5, 2.8
LAYER_H = 0.010            # 10 mm per layer
BEAD_W  = 0.040            # 40 mm bead width
T_PER_LAYER = 22           # seconds per layer (extrude + travel)

# perimeter for one shell + interior zig-zag estimate
perim = 2 * (W + D)
fill_lines = int(W / BEAD_W)
layer_len = perim + fill_lines * D

layers = int(H / LAYER_H)
total_len = layers * layer_len
time_h = layers * T_PER_LAYER / 3600.0
print(f"Layers = {layers}, length = {total_len:.1f} m, "
      f"time = {time_h:.1f} h")
# Layers = 280, length = 55580.0 m, time = 1.7 h`,
            },
            diagram: {
              kind: "pyramid",
              title: "3D printing workflow tiers",
              caption:
                "From design to wall; each tier adds the next physical element.",
              tiers: [
                { label: "CAD model", note: "BIM or solid model" },
                { label: "Slicer", note: "converts to bead paths" },
                { label: "Material + nozzle", note: "fly-ash mortar, 40 mm bead" },
                { label: "Print layers", note: "10 mm layers, 22 s each" },
                { label: "Cure and finish", note: "curing and roofing" },
              ],
            },
            callout: {
              type: "tip",
              title: "Reinforcement is the catch",
              body: "Most 3D-printed walls are unreinforced because steel bars cannot be laid into the bead path. State this limit explicitly in exam answers, and mention the alternatives: post-tensioned rods, mesh placed between layers, or fibre-reinforced mortar. ACI 563 is drafting the standard; quote it.",
            },
            keyTerms: [
              { term: "Additive manufacturing", definition: "Construction by extruding a cementitious paste bead by bead from a nozzle moved by a gantry or robotic arm, directly from a CAD model." },
              { term: "Layer height", definition: "The thickness of each printed bead, typically 10 mm; the print resolution that determines surface texture and print time." },
              { term: "Slicer", definition: "Software that converts a 3D CAD model into the bead path instructions for the printer, layer by layer." },
            ],
            examQuestions: [
              {
                q: "Define 3D printing in construction. Describe the material, the printing process, and the advantages and challenges of the technology.",
                marks: 7,
                outline: [
                  "Define 3D printing: extrude cement paste bead by bead from a nozzle on gantry or robotic arm.",
                  "Material: high-performance mortar, 2 mm max aggregate, accelerators; bead 40 mm wide, layer 10 mm.",
                  "Process: CAD to slicer to bead path; print perimeter and fill; 30 m^2 house in 24 hours.",
                  "Advantages: speed, no formwork, geometric freedom, waste under 5 percent.",
                  "Challenge: reinforcement; printed walls mostly unreinforced, rely on geometry or post-tension.",
                  "Field: L&T 1,200-house scheme in India with fly-ash mortar, 230 mm walls; ACI 563 drafting standard.",
                  "Best suited to repetitive low-rise housing; not yet structural for high-rise frames.",
                ],
              },
              {
                q: "State three advantages and two challenges of 3D-printed concrete over cast-in-situ walls.",
                marks: 3,
              },
              {
                q: "Why is reinforcement difficult in 3D-printed walls? Name one alternative.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Prefabrication and green construction materials",
            body: [
              "Prefabrication is the manufacture of whole building units - wall panels, floor units, entire rooms or bathroom pods - in a factory, then transporting and installing them on site. It extends precast concrete to other materials: timber frame, light-gauge steel frame, and composite panels. A prefabricated bathroom pod is a GRP or steel shell fitted out with plumbing, tiling, and fixtures in the factory, lifted into the building as a unit; a hotel can install 30 pods per day. Prefabricated timber-frame houses are the standard in North America and Scandinavia, where the frame is assembled in a day on a prepared foundation.",
              "Green construction materials reduce the environmental impact of building. Substitutes for ordinary Portland cement include fly-ash cement (replacing up to 30 percent of cement with fly ash from thermal power plants), ground granulated blast furnace slag (GGBS, up to 70 percent), and limestone calcined clay cement (LC3) with 50 percent less clinker. Recycled aggregate from demolition concrete replaces 20-30 percent of natural aggregate in non-structural concrete. Bamboo is a fast-growing structural material with tensile strength of 100-150 MPa, used in scaffolding and in light frame houses. Stabilised mud blocks use 5 percent cement to make a low-energy wall unit.",
              "The environmental gain of green materials is measured in embodied carbon - the kg of CO2 emitted per kg of material. OPC has embodied carbon of about 0.9 kg/kg; fly-ash cement reduces it to 0.6; LC3 to 0.45. Recycled aggregate saves the energy of quarrying and the landfill of demolition. Bamboo sequesters carbon as it grows. Green ratings such as IGBC and LEED award points for these substitutions. Prefabrication itself reduces site waste from 10-15 percent of materials to under 2 percent, and the factory can recycle offcuts. Together, prefabrication and green materials are the levers that bring the construction sector toward the net-zero target by 2050.",
            ],
            bullets: [
              "Prefabrication: factory-made wall panels, floor units, bathroom pods, whole rooms; installed on site.",
              "Fly-ash cement 30%, GGBS 70%, LC3 50% clinker reduction; OPC embodied carbon 0.9 kg/kg.",
              "Recycled aggregate from demolition replaces 20-30 percent natural aggregate in non-structural concrete.",
              "Bamboo tensile 100-150 MPa; stabilised mud blocks use 5 percent cement, low-energy wall unit.",
              "Prefabrication cuts site waste from 10-15 percent to under 2 percent; IGBC and LEED award points.",
            ],
            table: {
              caption: "Green materials and embodied carbon.",
              headers: ["Material", "Substitution", "Embodied CO2 (kg/kg)"],
              rows: [
                ["Ordinary Portland cement", "Baseline", "0.90"],
                ["Fly-ash cement (30%)", "30% cement", "0.60"],
                ["GGBS cement (70%)", "70% cement", "0.35"],
                ["LC3 (limestone calcined clay)", "50% clinker", "0.45"],
                ["Recycled aggregate", "20-30% natural", "0.05 saved"],
                ["Bamboo", "Steel substitute", "Negative (sequesters)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Conventional vs green construction",
              caption:
                "Same building, lower impact - the substitutions add up.",
              left: {
                heading: "Conventional",
                items: [
                  "OPC 0.9 kg CO2/kg",
                  "Natural aggregate quarried",
                  "Steel reinforcement",
                  "Site waste 10-15 percent",
                  "No IGBC or LEED points",
                ],
              },
              right: {
                heading: "Green",
                items: [
                  "Fly-ash or LC3 cement 0.45-0.6",
                  "Recycled aggregate 20-30 percent",
                  "Bamboo for non-structural",
                  "Prefab waste under 2 percent",
                  "IGBC or LEED points awarded",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Embodied carbon",
              body: "Memorise the embodied carbon of OPC (about 0.9 kg CO2 per kg) and the reduction by fly-ash cement (to 0.6) and LC3 (to 0.45). Examiners want the substitution percentage and the CO2 reduction; mention IGBC and LEED ratings for the practical hook.",
            },
            keyTerms: [
              { term: "Prefabrication", definition: "The manufacture of whole building units such as wall panels, floor units, and bathroom pods in a factory, transported and installed on site." },
              { term: "Fly-ash cement", definition: "Cement in which up to 30 percent of OPC is replaced by fly ash from thermal power plants, reducing embodied carbon from 0.9 to about 0.6 kg CO2 per kg." },
              { term: "Embodied carbon", definition: "The kg of CO2 emitted per kg of material produced, used to compare the environmental impact of construction materials." },
            ],
            examQuestions: [
              {
                q: "Define prefabrication and describe two prefabricated units. State four green construction materials with their substitution levels and embodied carbon reduction.",
                marks: 7,
                outline: [
                  "Define prefabrication: factory-made wall panels, floor units, bathroom pods, whole rooms.",
                  "Bathroom pod: GRP or steel shell with plumbing, tiling, fixtures fitted in factory; hotel 30 pods/day.",
                  "Prefab timber frame: standard in North America and Scandinavia; assembled in a day on foundation.",
                  "Green material 1: fly-ash cement, 30 percent OPC replaced, CO2 0.9 to 0.6 kg/kg.",
                  "Green material 2: GGBS, up to 70 percent cement replaced, CO2 to 0.35 kg/kg.",
                  "Green material 3: LC3 limestone calcined clay, 50 percent clinker reduction, CO2 to 0.45.",
                  "Green material 4: recycled aggregate 20-30 percent of natural; bamboo tensile 100-150 MPa; mention IGBC and LEED.",
                ],
              },
              {
                q: "State any three green construction materials and the cement or aggregate they replace.",
                marks: 3,
              },
              {
                q: "What is embodied carbon? Give the value for ordinary Portland cement.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "BIM overview",
            body: [
              "Building Information Modelling (BIM) is the process of creating and using a federated digital model of a building across its entire lifecycle - design, construction, operation, and demolition. The model is not just 3D geometry but a database: every element - a wall, a pipe, a door - carries attributes such as material, supplier, fire rating, and cost. Disciplines (architecture, structure, services) model their parts in their own software and federate them into a single shared model via a common file format, typically IFC. Coordination is by clash detection: software flags a pipe passing through a beam before either is built, saving rework.",
              "The BIM levels by the Bew-Richards maturity model describe the journey from paper to integrated data. Level 0 is no BIM: 2D CAD drawings only, paper or uncoordinated digital. Level 1 is mixed: 2D plus some 3D work, no shared model. Level 2 is managed 3D: each discipline maintains its own model and they are federated via a common file format (IFC) with clash detection; this is the UK government minimum since 2016. Level 3 is integrated: a single shared model with lifecycle data, all disciplines editing live in the cloud; this is the future target. India's CPWD has mandated BIM for projects over Rs 100 crore since 2021.",
              "The benefits of BIM are quantified in reduced rework (typically 10-20 percent of project cost), faster coordination, accurate quantity take-off, and lifecycle data for facility management. The challenges are the upfront training cost, the software licences, and the discipline to keep the model current. Software includes Autodesk Revit for architectural and structural, Bentley for infrastructure, and Navisworks for federation and clash detection. The data schema is Industry Foundation Classes (IFC), an open ISO 16739 standard, so that data is not locked into a single vendor. The next stage is digital twin: a live BIM linked to sensors on the real building for predictive maintenance.",
            ],
            bullets: [
              "BIM: federated digital model with geometry plus attributes for every element across the lifecycle.",
              "Federate by IFC: each discipline's model joined for clash detection in Navisworks.",
              "Levels: L0 paper, L1 mixed, L2 managed 3D federated (UK minimum since 2016), L3 integrated live.",
              "India: CPWD mandates BIM for projects over Rs 100 crore since 2021.",
              "Benefits: rework cut 10-20 percent, faster coordination, accurate take-off, lifecycle facility data.",
            ],
            codeExample: {
              language: "text",
              caption: "BIM levels (Bew-Richards) and the software stack.",
              code: `BIM Levels (Bew-Richards maturity model)
L0 - No BIM: 2D CAD drawings only, paper or uncoordinated digital.
L1 - Mixed: 2D + 3D for some disciplines, no shared model.
L2 - Managed 3D: federated model via common file format (IFC), clash detection.
L3 - Integrated: single shared model, lifecycle data, all disciplines edit live in the cloud.

Software stack:
  Revit    - architectural and structural modelling
  Bentley  - infrastructure and civil
  Navisworks - federation and clash detection

Schema: IFC (ISO 16739), open standard, no vendor lock-in.
Next: Digital twin - live BIM linked to sensors for predictive maintenance.`,
            },
            diagram: {
              kind: "matrix",
              title: "BIM levels by integration",
              caption:
                "X = integration (silo to federated to live); Y = dimension (2D to nD).",
              axes: { x: "Integration (silo -> federated -> live)", y: "Dimension (2D -> nD)" },
              quadrants: [
                { label: "Top-left: L1 mixed 2D/3D, silo", note: "no shared model" },
                { label: "Top-right: L3 integrated nD, live", note: "cloud shared, lifecycle" },
                { label: "Bottom-left: L0 paper 2D, silo", note: "no BIM" },
                { label: "Bottom-right: L2 federated 3D, shared file", note: "IFC + clash detection" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the four levels",
              body: "Examiners reward a verbatim list of BIM levels: L0 paper, L1 mixed 2D/3D no shared model, L2 managed 3D federated with IFC (UK minimum since 2016), L3 integrated live cloud. Pair each with the Indian context - CPWD mandate for projects over Rs 100 crore.",
            },
            keyTerms: [
              { term: "Building Information Modelling", definition: "The process of creating and using a federated digital model of a building with geometry plus attributes for every element across its lifecycle." },
              { term: "IFC", definition: "Industry Foundation Classes, the open ISO 16739 file format used to federate models from different software into one shared BIM." },
              { term: "Clash detection", definition: "Automated flagging in a federated BIM of geometry conflicts between disciplines, e.g. a pipe passing through a beam, before construction." },
            ],
            examQuestions: [
              {
                q: "Define Building Information Modelling. Describe the four BIM levels of the Bew-Richards model, and state the benefits and software used.",
                marks: 7,
                outline: [
                  "Define BIM: federated digital model with geometry plus attributes for every element across lifecycle.",
                  "Distinguish from CAD: BIM is database, not just geometry; attributes carry material, cost, fire rating.",
                  "L0: no BIM, 2D CAD, paper or uncoordinated digital.",
                  "L1: mixed 2D and 3D for some disciplines, no shared model.",
                  "L2: managed 3D, federated model via IFC, clash detection; UK government minimum since 2016.",
                  "L3: integrated, single shared model with lifecycle data, all disciplines edit live in the cloud.",
                  "Benefits: rework cut 10-20 percent, faster coordination, accurate take-off, lifecycle data; software Revit, Bentley, Navisworks; CPWD India mandate over Rs 100 crore.",
                ],
              },
              {
                q: "State any three benefits of BIM over conventional 2D CAD drafting.",
                marks: 3,
              },
              {
                q: "What is IFC and what role does it play in BIM?",
                marks: 2,
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
        "RGPV CE-402 papers typically spread 60 to 70 of the marks across foundations and masonry, with finishing and modern techniques supplying the balance. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight. Precast and BIM are the rising topics and earn easy marks if you have the terms at hand.",
      ],
      weightedTopics: [
        { topic: "Foundations: bearing capacity, shallow and deep, pile and well", weight: "12-16 marks", note: "Carry Terzaghi's equation and Q_ult = q_b A_p + sum alpha c A_s; sketch pile and well." },
        { topic: "Brick masonry: English and Flemish bond with sketches", weight: "8-10 marks", note: "Draw the quoin plan with headers and stretchers; mark the lap of 57 mm." },
        { topic: "Roof and floor types: layers of flat roof, truss types", weight: "8-10 marks", note: "Sketch the layer stack and the king-post truss; quote IS codes." },
        { topic: "Stone masonry and scaffolding", weight: "6-8 marks", note: "Through-stone rule, single vs double scaffold." },
        { topic: "Plastering and pointing: defects, profiles, IS codes", weight: "6-8 marks", note: "Efflorescence remedy, weathered vs flush pointing." },
        { topic: "Stairs: dog-legged, open-newel, spiral", weight: "6-8 marks", note: "2R + T = 600-640 mm; design a flight for 3.0 m floor height." },
        { topic: "Modern: precast, slip and jump form, BIM levels", weight: "8-10 marks", note: "List the four BIM levels; sketch the corbel joint and slip form." },
        { topic: "Excavation and dewatering", weight: "4-6 marks", note: "Wellpoint vs sump; matrix of soil and drawdown." },
        { topic: "Doors and windows: types and frames", weight: "4-6 marks", note: "Hold-fast at three points; frame horn of 50 mm." },
        { topic: "Finishes: painting, distempering, varnishing, wallpapering", weight: "4-6 marks", note: "Wait 6 months before painting; pattern repeat in wallpaper." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations", tasks: ["Site investigation, bearing capacity, Terzaghi (3 numericals)", "Shallow foundations: strip, isolated, combined (sketches)", "Deep foundations: pile and well, capacity equations"] },
        { week: "Week 2", focus: "Unit I + Unit II start", tasks: ["Excavation and dewatering methods", "Stone masonry types and IS 1597", "Brick bonds: English and Flemish (quoin sketches)"] },
        { week: "Week 3", focus: "Unit II + Unit III start", tasks: ["Cavity and partition walls, lintels and arches", "Scaffolding types per IS 3696", "Floor types and RCC slab materials"] },
        { week: "Week 4", focus: "Unit III + Unit IV start", tasks: ["Flat and pitched roofs, truss types, coverings", "Doors and windows: types and frames", "Stair types and 2R+T numerical"] },
        { week: "Week 5", focus: "Unit IV + Unit V start", tasks: ["Plastering, pointing, painting procedures", "Distempering, varnishing, wallpapering", "Precast concrete and slip/jump formwork"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["3D printing, prefabrication, green materials", "BIM levels and IFC", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day revision plan",
      bullets: [
        "Revise Terzaghi's equation q_ult = c Nc + q Nq + 0.5 gamma B N_gamma and the FOS of 2.5-3 one more time - this is the most asked 7-mark question.",
        "Memorise the four brick bond rules: lap 57 mm, English alternate courses, Flemish alternate in course, queen closer at quoin.",
        "Sketch the flat roof layer stack and the king-post truss on rough paper - both diagrams appear in nearly every paper.",
        "Quote IS codes by number: IS 1892 site investigation, IS 2212 brickwork, IS 1597 stone, IS 1662 plastering, IS 3696 scaffolding, IS 14687 formwork.",
        "List the four BIM levels verbatim (L0 paper, L1 mixed, L2 federated, L3 integrated) and the CPWD mandate over Rs 100 crore.",
        "Sleep seven hours and reach the hall early; rehearse the seven-mark outlines (definition, three steps, working, conclusion) one final time.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Sketch before you write - for foundations, bonds, trusses and stairs, the diagram earns as many marks as the text.",
        "Carry Terzaghi's equation and the FOS of 2.5-3; quote N factors for phi = 0 and phi = 30 deg.",
        "For bonds, mark the lap of 1/4 brick (57 mm) and the queen closer; label headers H and stretchers S on the quoin plan.",
        "For stairs, write 2R + T = 600-640 mm and compute the number of risers as floor height / riser; never exceed 12 per flight.",
        "Time-box: 2-mark questions in 3 minutes, 3-mark in 6 minutes, 7-mark in 15 minutes; keep 10 minutes at the end for the verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Forgetting the FOS in bearing capacity: q_safe = q_ult / 2.5-3, not q_ult itself.",
        "Drawing brick bonds without the queen closer at the quoin in Flemish bond - the lap is lost.",
        "Listing roof layers in the wrong order: coba comes over the membrane, not under it.",
        "Confusing pointing and plastering: pointing is joints only (10-15 percent of wall area), plastering is the whole wall.",
        "Writing more than 12 risers per flight - add a landing instead.",
        "Listing BIM levels but missing L2 (the UK government minimum since 2016).",
      ],
    },
  ],
};
