/**
 * Academics - RGPV Civil Engineering 7th-semester subject: CE-701
 * Geotechnical Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or Python code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce701: AcademicSubject = {
  id: "ce-701",
  code: "CE-701",
  title: "Geotechnical Engineering",
  semester: "VII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to geotechnical engineering for civil: soil formation and phase relations, classification and clay structure, permeability and seepage with flow nets, effective stress and compaction, and shear strength with earth pressure and slope stability.",
  description:
    "Five units walk from the origin of soils and the three-phase system with every phase relationship, through grain-size analysis, Atterberg limits and the IS 1498 classification into clay minerals and soil structure, then across Darcy's law, laboratory and field permeability tests and flow nets with piping failure, on to Terzaghi's effective stress, Boussinesq and Westergaard stress distribution and Proctor compaction with field control, and finally into Mohr-Coulomb strength, triaxial and vane testing, Rankine and Coulomb earth pressure and Taylor's stability charts. Every section pairs theory with a redrawable diagram, a worked numerical and the exam questions RGPV actually asks.",
  accentColor: "#a78bfa",
  emoji: "GT",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Soil Formation and Properties",
      summary:
        "Where soil comes from and the arithmetic that describes it: rock weathering and transport, the three-phase system, and the full set of phase relationships - void ratio, porosity, saturation, water content, specific gravity and the family of unit weights - closed by the laboratory tests that measure them.",
      chapter: {
        number: "01",
        title: "Origin, Three-Phase System and Phase Relationships",
        intro:
          "Unit I builds the vocabulary of geotechnical engineering: soils as products of weathering and transport, the three-phase diagram that turns a soil mass into simple bookkeeping, the definitions and inter-relations of void ratio, porosity, degree of saturation, water content, specific gravity and unit weights, and the small set of laboratory tests that supply the numbers. Every later unit - classification, permeability, stress, strength - leans on these relations.",
        inOneBreath:
          "Soil forms by physical and chemical weathering of rock and travels as alluvial, glacial, aeolian, lacustrine, marine, colluvial or residual deposits; the three-phase diagram splits a soil mass into volumes of solids, water and air and weights of solids and water; from it follow e = Vv/Vs, n = Vv/V, S = Vw/Vv, w = Ww/Ws and G, the unit weights gamma = W/V, gamma_d = gamma/(1+w) = G gamma_w/(1+e), gamma_sat = (G+e)gamma_w/(1+e) and gamma' = (G-1)gamma_w/(1+e), all welded together by Se = wG.",
        sections: [
          {
            number: "1.1",
            title: "Origin, rocks and weathering",
            body: [
              "Geotechnical engineers work with the one construction material that is made rather than manufactured: soil is the product of rock breakdown. Parent rocks come in three families - igneous rocks such as granite and basalt cooled from magma, sedimentary rocks such as sandstone, shale and lithified from earlier deposits, and metamorphic rocks such as gneiss and schist altered by heat and pressure. Weathering attacks them in two ways at once. Physical weathering disintegrates: temperature cycles split grains apart, frost wedging pries joints open, and running water, wind and glacier ice abrade the fragments. Chemical weathering decomposes the minerals themselves - oxidation, carbonation, hydration, hydrolysis and solution turn feldspar into clay minerals and limestone into karst voids.",
              "What happens next decides the engineer's problems. Residual soils stay where they formed - laterite in high-rainfall tracts and the black cotton soil derived from Deccan basalt are the classic Indian examples - and they keep the fabric and structure of the parent rock. Transported soils are carried and dropped by an agent, and each agent stamps a recognisable character: gravity gives colluvial talus, rivers give stratified alluvium, lakes give laminated lacustrine silts, seas give soft marine clays, wind gives uniform loess and dune sand, and ice gives unstratified, bouldery glacial till. Rapid identification of the deposit therefore predicts its behaviour.",
              "The engineering significance of origin is not academic. Wind-deposited loess stands with vertical banks while dry, yet collapses abruptly on wetting. Glacial till is dense and strong but so heterogeneous that every borehole surprises. Marine clay along the Indian coast is soft, sensitive and highly compressible - the classic case for pile foundations and staged construction. Residual black cotton soil swells and shrinks with the seasons and cracks light structures. In the exam, a question about the origin of soils expects this chain: rock types, weathering mechanisms, transport agents, deposit names and two Indian examples with their problems.",
            ],
            bullets: [
              "Soil: the product of physical and chemical weathering of rock - an assembly of mineral grains with voids between them, not a continuous solid.",
              "Three rock families: igneous (cooled magma - granite, basalt), sedimentary (lithified deposits - sandstone, shale, limestone) and metamorphic (altered - gneiss, schist, marble).",
              "Physical weathering disintegrates (frost wedging, thermal cycles, abrasion); chemical weathering decomposes (oxidation, carbonation, hydration, hydrolysis, solution).",
              "Residual soils form and remain in place - Indian examples: black cotton soil on basalt, laterite in high-rainfall regions.",
              "Transported deposits by agent: colluvial (gravity), alluvial (rivers), lacustrine (lakes), marine (seas), aeolian (wind - loess), glacial (ice - till).",
              "Deposit origin predicts behaviour: loess is collapsible on wetting, till is strong but erratic, marine clay is soft and sensitive, black cotton soil swells.",
            ],
            table: {
              caption: "Common transported and residual soil deposits.",
              headers: ["Deposit", "Transporting agent", "Typical character"],
              rows: [
                ["Alluvial", "rivers", "stratified layers of sand, silt and clay; loose to medium dense"],
                ["Lacustrine", "lakes", "fine laminated silts and clays; compressible"],
                ["Marine", "seas", "soft, often saline clays (coastal deposits); very compressible"],
                ["Aeolian", "wind", "uniform silt (loess) and dune sand; low density, may collapse on wetting"],
                ["Glacial till", "ice", "unstratified mix from boulder to clay sizes; dense but erratic"],
                ["Colluvial", "gravity", "angular talus at the feet of slopes; loose and heterogeneous"],
                ["Residual", "none (in place)", "keeps parent-rock fabric; laterite, black cotton soil"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The soil formation cycle",
              caption:
                "Rock breaks, travels, deposits and lithifies - geotechnical engineers sample one turn of this wheel.",
              steps: [
                { label: "Uplift and exposure", note: "parent rock reaches the surface" },
                { label: "Weathering", note: "physical disintegration + chemical decomposition" },
                { label: "Transportation", note: "gravity, water, wind and ice carry the debris" },
                { label: "Deposition", note: "alluvial, glacial, aeolian and marine deposits form" },
                { label: "Burial and diagenesis", note: "cementation creates new rock - and the cycle repeats" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When a question says 'describe the geological origin of soils', structure the answer as: rock types, weathering (physical vs chemical), transport agents, deposit names, then two Indian examples (black cotton soil, laterite). That skeleton covers every mark in the scheme.",
            },
            keyTerms: [
              { term: "Weathering", definition: "The in-place breakdown of rock by physical disintegration and chemical decomposition." },
              { term: "Residual soil", definition: "Soil that remains directly above the parent rock from which it formed, e.g. laterite." },
              { term: "Alluvial deposit", definition: "Soil transported and laid down by flowing river water, typically stratified." },
              { term: "Loess", definition: "Wind-deposited silt of uniform grain size that can collapse abruptly on wetting." },
            ],
            examQuestions: [
              {
                q: "Describe the origin and formation of soils. Distinguish physical from chemical weathering and name the chief transported deposits with their engineering characteristics.",
                marks: 7,
                outline: [
                  "Define soil as the product of rock weathering and name the three rock families.",
                  "Physical weathering: thermal cycles, frost wedging, abrasion - disintegration only.",
                  "Chemical weathering: oxidation, carbonation, hydration, hydrolysis, solution - decomposition to clay minerals.",
                  "Residual soils: laterite, black cotton soil; properties inherited from parent basalt.",
                  "Transported deposits with agents: alluvial, lacustrine, marine, aeolian (loess), glacial (till), colluvial.",
                  "Engineering character of each: loess collapsible, till dense but erratic, marine clay soft and sensitive.",
                  "Close with why origin matters: it sets sampling, testing and foundation strategy.",
                ],
              },
              {
                q: "Differentiate between residual and transported soils with one example of each.",
                marks: 2,
              },
              {
                q: "List the agents of soil transportation and name the deposit each produces.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The three-phase system and the phase diagram",
            body: [
              "Unlike steel or concrete, soil is particulate and three-phase: a skeleton of mineral grains with voids between them that hold water, air, or both. Two degenerate cases matter. A saturated soil has every void full of water, so the air phase disappears and the system is two-phase; a perfectly dry soil has no water phase at all. Between these extremes lies the partially saturated soil of the monsoon-and-summer tropics, where all three phases coexist. Because each phase contributes volume, or weight, or both - air contributes only volume and weighs nothing - every mass-volume relationship in soil mechanics flows from one diagram.",
              "The phase diagram is that bookkeeping device. Draw a rectangular block: the total volume V splits into the volume of solids Vs and the volume of voids Vv, and the voids split again into the volume of water Vw and the volume of air Va. On the weight side, the total weight W is simply Ws + Ww, because the air phase carries no weight. Two volume identities and one weight identity are the entire content of the diagram: V = Vs + Vv, Vv = Va + Vw and W = Ws + Ww. Everything else in this unit is these three lines rearranged.",
              "The diagram earns its place as a computation tool through one trick: assume any single quantity equals one. Take Vs = 1; then Vv = e, V = 1 + e, Ws = G gamma_w and Ww = w Ws follow immediately, and every ratio, saturation and unit weight in the problem drops out by division. This is the standard opening move for every phase-relationship numerical in RGPV papers. The sections that follow - void ratio, saturation, unit weights and their measurement - are simply different views of this one diagram, so it pays to draw it at the top of every answer.",
            ],
            bullets: [
              "Soil is particulate and three-phase: solid grains + pore water + pore air; saturated and dry soils degenerate to two-phase systems.",
              "Total volume V = Vs + Vv and Vv = Va + Vw; the air phase carries no weight.",
              "Total weight W = Ws + Ww - the air phase contributes nothing on the weight side.",
              "The phase diagram is bookkeeping: volumes on one side of the block, weights on the other, then solve.",
              "Assume Vs = 1 (or any convenient quantity) and every other quantity follows from the definitions - the standard trick for numericals.",
              "All later relations (e, n, S, w, G, unit weights) are consequences of this single diagram.",
            ],
            table: {
              caption: "Phase quantities and their symbols.",
              headers: ["Symbol", "Meaning", "Notes"],
              rows: [
                ["V", "total volume of the soil mass", "V = Vs + Vv"],
                ["Vs", "volume of solids", "the only volume that carries weight"],
                ["Vv", "volume of voids", "Vv = Va + Vw"],
                ["Vw", "volume of water", "sets the degree of saturation"],
                ["Va", "volume of air", "no weight; zero when saturated"],
                ["W", "total weight", "W = Ws + Ww"],
                ["Ws", "weight of solids", "constant through drying"],
                ["Ww", "weight of water", "Ww = Vw x gamma_w"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The three-phase block",
              caption: "Index 0 renders at the top: air, then water, then solids - with volumes on the left and weights on the right.",
              layers: [
                { label: "Air phase - volume Va", note: "weighs nothing; vanishes when the soil saturates" },
                { label: "Water phase - volume Vw, weight Ww", note: "carries pore pressure u and dissolves salts" },
                { label: "Solid phase - volume Vs, weight Ws", note: "grains and coatings; the only phase with real weight" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw first, solve second",
              body: "Draw the phase diagram before every numerical - twenty seconds of drawing prevents nearly every algebra slip. Write volumes on the left of the block, weights on the right, and tick the knowns before touching a formula.",
            },
            keyTerms: [
              { term: "Phase diagram", definition: "Schematic block splitting a soil mass into volumes and weights of solids, water and air." },
              { term: "Voids", definition: "The space between grains, occupied by air, water, or both; Vv = Va + Vw." },
              { term: "Saturated soil", definition: "Soil whose voids are completely filled with water, Va = 0 - a two-phase system." },
            ],
            examQuestions: [
              {
                q: "Explain the three-phase system of soil with a neat phase diagram. Write all the mass-volume quantities shown on it and state which phase carries weight and which contributes volume.",
                marks: 7,
                outline: [
                  "Soil as a particulate three-phase material: solids, water and air.",
                  "Draw the block diagram: left side volumes (V, Vs, Vv, Va, Vw), right side weights (W, Ws, Ww).",
                  "State the volume identities V = Vs + Vv and Vv = Va + Vw.",
                  "State the weight identity W = Ws + Ww; the air phase weighs nothing.",
                  "Special cases: saturated (Va = 0) and dry (Vw = 0) reduce to two-phase systems.",
                  "Show how assuming Vs = 1 converts the diagram into a computation tool.",
                  "Mention that e, n, S, w, G and all unit weights derive from this diagram.",
                ],
              },
              {
                q: "Why is a dry soil called a two-phase system?",
                marks: 2,
              },
              {
                q: "Draw a neat phase diagram and mark V, Vs, Vv, Va, Vw, W, Ws and Ww on it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Void ratio, porosity and degree of saturation",
            body: [
              "Three ratios describe how densely the grains are packed and how wet the packing is. The void ratio e is the volume of voids divided by the volume of solids, e = Vv/Vs; porosity n is the volume of voids divided by the total volume, n = Vv/V, always between 0 and 100 percent; and the degree of saturation S is the volume of water divided by the volume of voids, S = Vw/Vv, running from 0 for a perfectly dry soil to 1 (100 percent) for a saturated one. The two void measures are interchangeable: substituting Vv = e Vs into the definitions gives n = e/(1 + e) and, inverted, e = n/(1 - n).",
              "The single most examined relation of the unit welds all four basic ratios together: Se = wG. Derivation: w = Ww/Ws = (gamma_w Vw)/(gamma_w G Vs), and since Vw = S Vv = S e Vs, we get w = Se/G. The relation lets any numerical jump between saturation, water content and void ratio in one line. It also shows that a soil of given e and G saturates exactly when w = e/G - the saturated water content, roughly 20 to 35 percent for common clays. For a worked check: w = 0.18, G = 2.67 and e = 0.55 give S = wG/e = 87.4 percent.",
              "Typical values anchor intuition. Sands sit at e of about 0.4 to 0.8; clays range from 0.4 in stiff deposits to beyond 1.5 in soft organic muds, which is why geotechnical engineers prefer void ratio - its denominator Vs is fixed during compression, so changes in e track settlement directly, while porosity drags a moving denominator (the shrinking total volume) along. Degree of saturation divides the field in three: dry (S = 0), partially saturated and fully saturated (S = 100 percent), and each state picks different methods for strength and permeability problems.",
            ],
            bullets: [
              "Void ratio e = Vv/Vs - a ratio of volumes; can exceed 1.0 in soft clays and peats.",
              "Porosity n = Vv/V - always between 0 and 100 percent; n = e/(1 + e) and e = n/(1 - n).",
              "Degree of saturation S = Vw/Vv - 0 for dry soil, 1 (100 percent) when saturated.",
              "Master relation Se = wG - connects the three definitions through w = Ww/Ws and G.",
              "Engineers prefer e for clays: its datum (Vs) is fixed, so changes in e track settlement directly.",
              "Worked check: w = 0.18, G = 2.67, e = 0.55 gives S = wG/e = 87.4 percent.",
            ],
            codeExample: {
              language: "python",
              caption: "Phase-relation helpers: convert e and n, and find S from w, G and e.",
              code: `def e_from_n(n):
    return n / (1.0 - n)

def n_from_e(e):
    return e / (1.0 + e)

def saturation(w, G, e):
    # Se = wG  ->  S = w*G/e
    return (w * G) / e

# sandy soil: w = 18%, G = 2.67, e = 0.55
w, G, e = 0.18, 2.67, 0.55
S = saturation(w, G, e)
print("S =", round(S * 100, 1), "percent")
print("porosity n =", round(n_from_e(e), 3))

# water content needed for full saturation: w = e/G
w_sat = e / G
print("w at S = 100%:", round(w_sat * 100, 1), "percent")

# and the other way: what e would saturate this w?
print("e at S = 100% for this w:", round(w * G, 3))`,
            },
            diagram: {
              kind: "compare",
              title: "Void ratio vs porosity - two views of the same voids",
              caption: "Same soil, different denominators: e is measured against the solids, n against the total volume.",
              left: {
                heading: "Void ratio e = Vv/Vs",
                items: [
                  "Denominator Vs is fixed - e does not move its datum when the soil compresses",
                  "Can exceed 1.0 for soft clays and organic soils",
                  "Preferred in settlement and seepage theory: delta e tracks strain directly",
                  "Changes step by step with compression: e2 = e1 - delta e",
                ],
              },
              right: {
                heading: "Porosity n = Vv/V",
                items: [
                  "Denominator V shrinks as the soil compresses - a moving datum",
                  "Always less than 100 percent",
                  "Gives voids volume per unit total volume - handy for volume estimates",
                  "Related by n = e/(1 + e) and e = n/(1 - n)",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The one-line jump",
              body: "Se = wG is the most-used relation of Unit I. If a numerical gives any three of S, e, w and G, the fourth follows instantly. Write the relation before substituting - examiners award the formula mark separately from the arithmetic.",
            },
            keyTerms: [
              { term: "Void ratio", definition: "Ratio of the volume of voids to the volume of solids, e = Vv/Vs." },
              { term: "Porosity", definition: "Ratio of the volume of voids to the total volume, n = Vv/V, always below 100 percent." },
              { term: "Degree of saturation", definition: "Ratio of the volume of water to the volume of voids, S = Vw/Vv." },
              { term: "Se = wG", definition: "The relation linking saturation, void ratio, water content and specific gravity." },
            ],
            examQuestions: [
              {
                q: "Define void ratio, porosity and degree of saturation. Establish the relations n = e/(1 + e) and Se = wG.",
                marks: 7,
                outline: [
                  "Define e = Vv/Vs, n = Vv/V and S = Vw/Vv with the phase diagram.",
                  "Derive n = e/(1 + e): V = Vs + Vv = (1 + e)Vs, divide Vv by V.",
                  "Invert the result to e = n/(1 - n).",
                  "Write w = Ww/Ws = (gamma_w Vw)/(gamma_w G Vs).",
                  "Substitute Vw = S Vv = S e Vs to get w = Se/G, hence Se = wG.",
                  "State limits: n below 100 percent, S between 0 and 1, e may exceed 1.",
                  "Verify with numbers: w = 0.18, G = 2.67, e = 0.55 gives S of about 87.4 percent.",
                ],
              },
              {
                q: "The void ratio of a soil is 0.67. Find its porosity.",
                marks: 2,
              },
              {
                q: "A soil has w = 20 percent and G = 2.70. Find the degree of saturation if e = 0.60, and state whether this soil can be saturated at this water content.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Water content, specific gravity and the unit weights",
            body: [
              "Four more definitions complete the toolkit. Water content w = (Ww/Ws) x 100 - always the weight of water over the weight of dry solids, never over the total weight. Specific gravity G is the ratio of the weight of the solids to the weight of an equal volume of water, G = Ws/(gamma_w Vs); it runs 2.65 to 2.75 for the common grain minerals, with 2.67 as the usual assumed value. The unit weights then follow: bulk (wet) unit weight gamma = W/V, dry unit weight gamma_d = Ws/V, saturated unit weight gamma_sat (bulk unit weight with S = 100 percent) and submerged (buoyant) unit weight gamma' = gamma_sat - gamma_w, the effective weight of soil below the water table.",
              "The unit weights interlock through the phase diagram. Adding water to a fixed volume of grains gives gamma_d = gamma/(1 + w); expressing the same diagram with Vs = 1 gives gamma_d = G gamma_w/(1 + e); and since Se = wG forces w = e/G at saturation, gamma_sat = (G + e)gamma_w/(1 + e). Subtraction then yields the single most useful pair in geotechnics: gamma' = gamma_sat - gamma_w = (G - 1)gamma_w/(1 + e). For a worked anchor, take G = 2.70 and e = 0.65: gamma_d = 2.70 x 9.81/1.65 = 16.05 kN/m^3 and gamma' = 1.70 x 9.81/1.65 = 10.11 kN/m^3 - typical numbers worth remembering.",
              "Sanity ranges keep numericals honest: bulk unit weight runs about 14 to 22 kN/m^3, dry unit weight 13 to 20 kN/m^3, and gamma_d must always be less than gamma and less than gamma_sat; gamma_w is 9.81 kN/m^3 (about 10) unless told otherwise. The universal solving routine is the assume-Vs = 1 flow shown in the diagram: assign solids a unit volume, fill in the voids from e, the weights from G and w, then divide the weight sum by the volume for whichever unit weight the question asks. Every unit-weight numerical in the paper is that flow with different inputs.",
            ],
            bullets: [
              "Water content w = (Ww/Ws) x 100 - weight of water over weight of dry solids, not over total weight.",
              "Specific gravity G = Ws/(gamma_w Vs) - typically 2.65 to 2.75 for common soil minerals.",
              "Bulk unit weight gamma = W/V; dry unit weight gamma_d = Ws/V = gamma/(1 + w).",
              "Saturated unit weight gamma_sat = (G + e)gamma_w/(1 + e); submerged gamma' = gamma_sat - gamma_w = (G - 1)gamma_w/(1 + e).",
              "At saturation Se = wG forces w = e/G - the saturated water content of a given soil.",
              "Worked values: G = 2.70, e = 0.65 give gamma_d = 16.05 and gamma' = 10.11 kN/m^3.",
            ],
            table: {
              caption: "Unit weights at a glance.",
              headers: ["Quantity", "Definition", "Formula", "Typical use"],
              rows: [
                ["Bulk (wet) unit weight", "total weight over total volume", "gamma = W/V", "natural ground above and below water"],
                ["Dry unit weight", "solids weight over total volume", "gamma_d = Ws/V = gamma/(1 + w)", "compaction control"],
                ["Saturated unit weight", "bulk unit weight with S = 1", "gamma_sat = (G + e)gamma_w/(1 + e)", "soil below the water table"],
                ["Submerged unit weight", "weight under water", "gamma' = gamma_sat - gamma_w", "effective stress and earth pressure below water"],
                ["Water content", "water over solids", "w = (Ww/Ws) x 100", "every index calculation"],
                ["Specific gravity", "grain weight over equal water volume", "G = Ws/(gamma_w Vs)", "links weights to volumes"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From three inputs to every unit weight",
              caption: "The assume-Vs = 1 routine that cracks any unit-weight numerical.",
              steps: [
                { label: "Assume Vs = 1", note: "one unit volume of solids" },
                { label: "Void volume Vv = e, so V = 1 + e", note: "from the phase diagram" },
                { label: "Solids weight Ws = G gamma_w", note: "definition of G" },
                { label: "Water weight Ww = w Ws", note: "definition of w" },
                { label: "Total W = Ws(1 + w)", note: "air weighs nothing" },
                { label: "Divide by V for any unit weight", note: "gamma = W/V; gamma_d = Ws/V" },
              ],
            },
            callout: {
              type: "warning",
              title: "The classic penalty",
              body: "Never write w = Ww/W. Water content is always relative to the weight of dry solids - writing it over the total weight is the single most penalised slip in Unit I numericals, and it corrupts every answer downstream.",
            },
            keyTerms: [
              { term: "Water content", definition: "Ratio of the weight of water to the weight of dry solids, expressed as a percentage." },
              { term: "Specific gravity of solids", definition: "Ratio of the weight of soil solids to the weight of an equal volume of water." },
              { term: "Submerged unit weight", definition: "The effective weight of soil below water: gamma' = gamma_sat - gamma_w." },
              { term: "Dry unit weight", definition: "Weight of solids per unit total volume; the vertical axis of the compaction curve." },
            ],
            examQuestions: [
              {
                q: "Derive expressions for dry, saturated and submerged unit weights in terms of G, e and gamma_w. Show that gamma_d = gamma/(1 + w).",
                marks: 7,
                outline: [
                  "Set up the phase diagram with Vs = 1, Vv = e and V = 1 + e.",
                  "Ws = G gamma_w, hence gamma_d = Ws/V = G gamma_w/(1 + e).",
                  "Add water content: W = Ws(1 + w) so gamma = W/V, which rearranges to gamma_d = gamma/(1 + w).",
                  "For saturation, Vw = Vv = e, so Ww = e gamma_w and W = (G + e)gamma_w.",
                  "gamma_sat = (G + e)gamma_w/(1 + e).",
                  "Submerged: gamma' = gamma_sat - gamma_w = (G - 1)gamma_w/(1 + e).",
                  "Close with Se = wG, which forces w = e/G at saturation.",
                ],
              },
              {
                q: "Define submerged unit weight. Why is it used below the water table?",
                marks: 2,
              },
              {
                q: "A soil has G = 2.70 and e = 0.65. Compute gamma_d and gamma' (take gamma_w = 9.81 kN/m^3).",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Measuring the index properties - one worked numerical",
            body: [
              "The index properties have prescribed tests. Water content comes from oven drying: 105 to 110 degrees C for 24 hours to constant weight (IS 2720 Part 2), with the sand bath, calcium carbide (speedy moisture meter) and torsion balance as rapid site alternatives. Specific gravity comes from the pycnometer (Part 3): weigh the flask dry, with soil, and topped up with de-aired distilled water, then solve the weight balance for G with a temperature correction. Bulk unit weight in place comes from the core cutter for soft, stone-free clays and from the sand replacement method for granular soils, where a calibrated sand fills an excavated hole of known volume.",
              "A complete worked example shows the machinery. A soil sample has w = 18 percent, G = 2.70 and e = 0.65; take gamma_w = 9.81 kN/m^3. Assume Vs = 1 m^3. Then Vv = 0.65 and V = 1.65 m^3; Ws = G gamma_w Vs = 2.70 x 9.81 = 26.49 kN and Ww = 0.18 x 26.49 = 4.77 kN, so W = 31.26 kN. Hence gamma = 31.26/1.65 = 18.94 kN/m^3 and gamma_d = 26.49/1.65 = 16.05 kN/m^3. The water volume is Vw = 4.77/9.81 = 0.486 m^3, so S = 0.486/0.65 = 74.8 percent (check with Se = wG: 0.18 x 2.70/0.65 = 74.8). For saturation, fill the voids: Ww,sat = 0.65 x 9.81 = 6.38 kN and gamma_sat = 32.87/1.65 = 19.92 kN/m^3.",
              "Every answer should close with cross-checks, because they catch slips cheaply. The three givens plus the computed values must satisfy Se = wG, gamma_d = gamma/(1 + w) and the ordering gamma_d < gamma < gamma_sat. Sanity ranges: bulk unit weight 14 to 22 kN/m^3, S between 0 and 100 percent - a computed S above 100 percent means inconsistent data, and the exam answer should say so rather than force a number. These index properties feed directly into Unit II's classification and into every permeability, stress and strength calculation that follows.",
            ],
            bullets: [
              "Water content: oven-dry at 105-110 C for 24 h (IS 2720 Part 2); rapid site checks use calcium carbide and the torsion balance.",
              "Specific gravity: pycnometer with de-aired distilled water (Part 3); remove entrapped air by vacuum or gentle boiling.",
              "Field bulk unit weight: core cutter for soft clays, sand replacement for granular soils.",
              "Always tabulate volumes and weights from Vs = 1 - a wrong bookkeeping line, not the algebra, is the usual error.",
              "Sanity limits: 14 to 22 kN/m^3 for gamma, gamma_d < gamma < gamma_sat, S at most 100 percent.",
              "A computed S above 100 percent means the data are inconsistent - state it, do not force the number.",
            ],
            table: {
              caption: "Index property determination.",
              headers: ["Property", "Test", "Apparatus / standard", "Points to note"],
              rows: [
                ["Water content w", "oven drying", "hot-air oven, 105-110 C, 24 h (IS 2720 Part 2)", "cool in a desiccator before weighing"],
                ["Water content w", "calcium carbide", "speedy moisture meter", "indirect; needs calibration"],
                ["Specific gravity G", "pycnometer", "glass flask (IS 2720 Part 3)", "de-air water; apply temperature correction"],
                ["Bulk unit weight gamma", "core cutter", "cutter, dolly and rammer", "only for soft, stone-free clay"],
                ["Bulk unit weight gamma", "sand replacement", "sand pouring cylinder", "calibrate the sand's bulk density first"],
                ["Grain size", "sieving + hydrometer", "IS sieve set (IS 2720 Part 4)", "wet-sieve the fraction below 75 micron"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From field to index properties",
              caption: "Each property has a prescribed test; the numbers then feed the phase relations.",
              stages: [
                { label: "Sample at site", note: "undisturbed for unit weight; disturbed for w and G" },
                { label: "Oven 24 h at 105-110 C", note: "gives w" },
                { label: "Pycnometer", note: "gives G" },
                { label: "Core cutter / sand replacement", note: "gives gamma in place" },
                { label: "Apply phase relations", note: "e, n, S and gamma_d follow" },
                { label: "Report and cross-check", note: "S at most 100 percent; ranges plausible" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pick the direct route",
              body: "In numericals, first write the three givens and the unknown, then pick the relation that links them directly - given w, G, e and asked for S, jump straight to Se = wG with no intermediate unit weights. Short routes leave less room for arithmetic error.",
            },
            keyTerms: [
              { term: "Oven-dry weight", definition: "Weight of solids after drying at 105-110 C to constant weight - the denominator of water content." },
              { term: "Pycnometer", definition: "Glass flask used to determine the specific gravity of soil solids by weight balance." },
              { term: "Sand replacement test", definition: "Field test that measures in-place density by filling an excavated hole with calibrated sand." },
            ],
            examQuestions: [
              {
                q: "A soil sample has w = 18%, G = 2.70 and e = 0.65. Taking gamma_w = 9.81 kN/m^3, determine gamma, gamma_d, S and gamma_sat, showing the phase diagram used.",
                marks: 7,
                outline: [
                  "Assume Vs = 1 m^3; then Vv = 0.65 and V = 1.65 m^3.",
                  "Ws = G gamma_w Vs = 2.70 x 9.81 = 26.49 kN.",
                  "Ww = w Ws = 0.18 x 26.49 = 4.77 kN; total W = 31.26 kN.",
                  "gamma = W/V = 31.26/1.65 = 18.94 kN/m^3; gamma_d = 26.49/1.65 = 16.05 kN/m^3.",
                  "Vw = Ww/gamma_w = 0.486 m^3; S = Vw/Vv = 74.8 percent (cross-check Se = wG).",
                  "Saturated case: fill the voids, Ww,sat = 0.65 x 9.81 = 6.38 kN, W = 32.87 kN.",
                  "gamma_sat = 32.87/1.65 = 19.92 kN/m^3; close by verifying gamma_d = gamma/(1 + w).",
                ],
              },
              {
                q: "State two quick methods of water content determination during construction control.",
                marks: 2,
              },
              {
                q: "Describe the core cutter method of in-place density determination. For which soils is it unsuitable?",
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
      title: "Classification and Structure",
      summary:
        "Grain size measured by sieves and sedimentation, consistency captured by the Atterberg limits, the IS 1498 classification that turns both into group symbols, and the structures and clay minerals that explain why fine soils behave the way they do.",
      chapter: {
        number: "02",
        title: "Grain Size, Atterberg Limits, IS Classification and Structure",
        intro:
          "Unit II turns raw measurements into a working language: the gradation curve from sieve and hydrometer analysis with its uniformity and curvature coefficients, the Atterberg limits that grade consistency, the plasticity chart of IS 1498 that assigns group symbols, and the particle arrangements and clay minerals - kaolinite, illite, montmorillonite - that control sensitivity, swelling and permeability.",
        inOneBreath:
          "Sieve analysis gives the gradation curve above 75 micron and hydrometer analysis below it; D10, D30 and D60 fix Cu = D60/D10 and Cc = D30^2/(D10 D60); Atterberg limits LL, PL and SL bracket the liquid, plastic, semi-solid and solid states, with PI = LL - PL, LI = (w - PL)/PI and activity = PI/clay fraction; IS 1498 splits soils at 75 micron and 4.75 mm and grades fines on the plasticity chart with the A-line PI = 0.73(LL - 20); and structure - single-grained, honeycomb, flocculated or dispersed, built of kaolinite, illite or montmorillonite - controls sensitivity, swelling and permeability.",
        sections: [
          {
            number: "2.1",
            title: "Grain size distribution - sieve analysis",
            body: [
              "Grain size is the primary classifier for coarse soils, and it is measured by shaking the soil through a nest of IS sieves. The working range runs from the 4.75 mm sieve down to the 75 micron sieve - the two boundaries that separate gravel, sand and fines. The procedure is prescribed: oven-dry a sample of about 500 g to 1 kg (scaled with maximum particle size), arrange the sieves coarse to fine with a pan and lid, shake mechanically for about ten minutes, and weigh the fraction retained on each sieve. Percent retained, cumulative retained and percent finer are then computed and plotted as percent finer against grain size on semi-logarithmic paper.",
              "The curve is read through three characteristic sizes: D10 (the effective size, at which 10 percent is finer), D30 and D60. Two coefficients summarise the shape: the uniformity coefficient Cu = D60/D10 measures the spread of sizes, and the coefficient of curvature Cc = D30^2/(D10 x D60) measures the smoothness of the spread. A gravel is well graded when Cu is at least 4 and a sand when Cu is at least 6, both with Cc between 1 and 3; otherwise the soil is poorly graded (uniform). A flat plateau on the curve - a band of missing sizes - marks a gap-graded soil, which behaves erratically in filters and fills.",
              "The gradation curve earns its keep far beyond naming the soil. D10 and D85 drive Terzaghi's filter criteria (Unit III) and Hazen's permeability estimate k of about C D10^2 (D10 in cm, k in cm/s, C near 100 for clean filter sands). Well-graded mixes compact to higher densities because the fines fill the voids between coarse grains, which is why base courses specify them. The Python routine below turns a set of retained masses into the full percent-finer table, the curve's characteristic sizes and both coefficients - the complete exam calculation in one script.",
            ],
            bullets: [
              "Sieve analysis suits grains retained above the 75 micron IS sieve; below that, sedimentation takes over.",
              "Percent finer = 100 - cumulative percent retained; plot against log grain size on semi-log paper.",
              "Effective size D10: the aperture through which exactly 10 percent of the soil passes.",
              "Cu = D60/D10 and Cc = D30^2/(D10 x D60) - spread and smoothness of the gradation.",
              "Well graded: gravel Cu at least 4, sand Cu at least 6, and Cc between 1 and 3; otherwise poorly graded.",
              "A flat stretch with a jump indicates a gap-graded soil - some sizes are simply missing.",
              "Hazen's estimate k of about C D10^2 (D10 in cm, k in cm/s) links gradation to permeability.",
            ],
            codeExample: {
              language: "python",
              caption: "From retained masses to Cu and Cc - the full sieve-analysis calculation.",
              code: `# IS sieves (mm) top to bottom, with retained mass in grams
sieves = [4.75, 2.0, 0.425, 0.15, 0.075]
retained = [120.0, 340.0, 280.0, 160.0, 60.0]
pan = 40.0  # mass passing the 75 micron sieve

total = sum(retained) + pan
cum = 0.0
finer = []
for r in retained + [pan]:
    cum += r
    finer.append(100.0 * (total - cum) / total)

for s, f in zip(sieves + ["pan"], finer):
    print(f"sieve {s} mm -> percent finer {round(f, 1)}")

# characteristic sizes interpolated from the curve:
D60, D30, D10 = 0.60, 0.25, 0.09   # mm
Cu = D60 / D10
Cc = D30 ** 2 / (D10 * D60)
print("Cu =", round(Cu, 2), " Cc =", round(Cc, 2))
print("sand, well graded?" , Cu >= 6 and 1 <= Cc <= 3)`,
            },
            diagram: {
              kind: "flow",
              title: "Sieve analysis, step by step",
              caption: "From oven-dry sample to the semi-log gradation curve in six moves.",
              steps: [
                { label: "Oven-dry the sample", note: "about 500 g to 1 kg, scaled to maximum size" },
                { label: "Stack IS sieves", note: "4.75 mm down to 75 micron, pan below" },
                { label: "Shake 10 minutes", note: "mechanical shaker" },
                { label: "Weigh each retained fraction", note: "check the mass balance closes" },
                { label: "Compute percent finer", note: "100 - cumulative retained" },
                { label: "Plot on semi-log paper", note: "read D10, D30, D60" },
              ],
            },
            callout: {
              type: "exam",
              title: "Boundaries to memorise",
              body: "Learn the IS boundaries cold: 4.75 mm splits gravel from sand; 75 micron splits coarse from fine; 2 micron is the clay-size ceiling. Three of five marks in classification questions sit on these three numbers.",
            },
            keyTerms: [
              { term: "Effective size", definition: "The grain size D10 at which 10 percent of the soil by weight is finer." },
              { term: "Uniformity coefficient", definition: "Cu = D60/D10 - measures the spread of grain sizes in a soil." },
              { term: "Coefficient of curvature", definition: "Cc = D30^2/(D10 x D60) - checks the shape of the curve between D10 and D60." },
              { term: "Gap-graded soil", definition: "A soil missing a range of intermediate sizes, seen as a plateau on the gradation curve." },
            ],
            examQuestions: [
              {
                q: "Explain the sieve analysis of soil and define D10, Cu and Cc. How is a well-graded soil distinguished from a poorly graded one?",
                marks: 7,
                outline: [
                  "Purpose and range: grains coarser than 75 micron.",
                  "Apparatus and procedure: oven-dry sample, IS sieve stack from 4.75 mm to 75 micron, shake about 10 minutes, weigh each retained fraction.",
                  "Computations: percent retained, cumulative retained, percent finer; semi-log plot.",
                  "Define D10, D30 and D60 from the curve.",
                  "Cu = D60/D10 and Cc = D30^2/(D10 x D60).",
                  "Well graded: gravel Cu above 4 or sand Cu above 6 with Cc between 1 and 3; otherwise poorly graded.",
                  "Uses: classification, filter design, Hazen permeability estimate.",
                ],
              },
              {
                q: "Distinguish between a well-graded and a uniformly graded soil, with sketches of their gradation curves.",
                marks: 2,
              },
              {
                q: "A sand has D10 = 0.09 mm, D30 = 0.25 mm and D60 = 0.60 mm. Compute Cu and Cc and judge whether the sand is well graded.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Fines under the microscope - hydrometer analysis",
            body: [
              "Below 75 micron the holes in a sieve approach the size of the grains themselves, and sedimentation takes over. The hydrometer analysis rests on Stokes' law: a small sphere falling through still fluid reaches a terminal velocity v = gamma_w(G - 1)D^2/(18 mu), where G is the grain specific gravity and mu the fluid viscosity. Inverting the law turns time into diameter - after t seconds of settling, everything still in suspension at depth L is finer than D = K sqrt(L/t). The law assumes spherical grains, laminar settling, no interference between grains (a dilute suspension) and a uniform fluid - assumptions the test honours by dispersing the sample and keeping it dilute.",
              "The procedure: take about 50 g of the fraction passing 75 micron, disperse it overnight with sodium hexametaphosphate (the deflocculant that keeps clay platelets from clumping), transfer to a 1000 mL sedimentation cylinder, agitate, start the clock and lower the hydrometer. Readings at 0.25, 0.5, 1 and 2 minutes and then at longer intervals sample the suspension density; the corrected reading times the suspension volume gives the mass still floating, hence the percent finer, while the reading itself fixes the effective depth L for Stokes' calculation. The fine tail of the curve is then grafted onto the coarse branch from the sieves.",
              "Three corrections separate a textbook answer from a sloppy one. The meniscus correction: the suspension is opaque, so the reading is taken at the top of the meniscus and corrected. The deflocculant correction: the dispersing agent itself adds density and must be subtracted. The temperature correction: viscosity and density of water change away from the calibration temperature, shifting both the reading and the Stokes constant. Together they form the composite correction applied to every reading; skipping them biases the percent finer and the computed diameters.",
            ],
            bullets: [
              "Hydrometer analysis covers grains finer than 75 micron, where sieves fail.",
              "Stokes' law: settling velocity v = gamma_w (G - 1) D^2/(18 mu) - laminar flow around spheres.",
              "Dispersion with sodium hexametaphosphate breaks floccs so grains settle individually.",
              "Three corrections to every reading: meniscus, deflocculant and temperature (viscosity).",
              "Effective depth L plus elapsed time t give the diameter: D = K sqrt(L/t).",
              "The corrected reading times the suspension volume gives the mass still floating - the percent finer.",
            ],
            table: {
              caption: "Corrections applied to hydrometer readings.",
              headers: ["Correction", "Why it is needed", "Direction"],
              rows: [
                ["Meniscus", "the suspension is opaque; read at the top meniscus", "add the meniscus height (about +0.5 to +1.0 g/L)"],
                ["Deflocculant", "sodium hexametaphosphate raises the suspension density", "subtract its calibrated contribution"],
                ["Temperature", "water viscosity and density differ from the calibration temperature", "add or subtract per the calibration chart"],
                ["Composite", "all three are combined into one calibration curve", "apply to every timed reading"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Hydrometer analysis in six stages",
              caption: "Sedimentation turns grain size into settling time.",
              stages: [
                { label: "Disperse 50 g of fines", note: "sodium hexametaphosphate, stand overnight" },
                { label: "Agitate the cylinder", note: "uniform suspension in 1 L, start the clock" },
                { label: "Timed readings", note: "0.25, 0.5, 1, 2 minutes, then hours" },
                { label: "Correct readings", note: "meniscus, deflocculant, temperature" },
                { label: "Diameter from Stokes", note: "D = K sqrt(L/t) at effective depth L" },
                { label: "Percent finer and merge", note: "graft onto the sieve curve" },
              ],
            },
            callout: {
              type: "warning",
              title: "State the assumptions",
              body: "Stokes' law assumes spheres settling independently. Flocculated clay violates both assumptions - which is exactly why the deflocculant exists. When a question asks for the assumptions of hydrometer analysis, list: spherical grains, laminar settling, independent grains, dilute suspension, uniform fluid.",
            },
            keyTerms: [
              { term: "Stokes' law", definition: "The drag law for a small sphere settling slowly in a fluid; underpins sedimentation analysis." },
              { term: "Deflocculating agent", definition: "Chemical such as sodium hexametaphosphate that keeps fine grains apart during sedimentation." },
              { term: "Effective depth", definition: "The settling depth represented by a hydrometer reading, used as L in D = K sqrt(L/t)." },
            ],
            examQuestions: [
              {
                q: "Explain the hydrometer method of grain size analysis. State Stokes' law, its assumptions, and the corrections applied to hydrometer readings.",
                marks: 7,
                outline: [
                  "Why sieves fail below 75 micron; the sedimentation principle.",
                  "Stokes' law: v = gamma_w (G - 1) D^2/(18 mu).",
                  "Assumptions: spherical grains, laminar flow, independent settling, dilute suspension, uniform fluid.",
                  "Procedure: disperse with sodium hexametaphosphate, 1000 mL cylinder, timed readings.",
                  "Corrections: meniscus, deflocculant and temperature (the composite correction).",
                  "D = K sqrt(L/t) from the effective depth; percent finer from the corrected reading.",
                  "Merging the hydrometer branch with the sieve branch into one gradation curve.",
                ],
              },
              {
                q: "Why must a deflocculating agent be added before a hydrometer test?",
                marks: 2,
              },
              {
                q: "State any three assumptions of Stokes' law as used in sedimentation analysis.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Consistency and the Atterberg limits",
            body: [
              "For fine soils, water content is destiny. Consistency - a fine soil's resistance to deformation - sweeps through four states as the soil dries: liquid, plastic, semi-solid and solid, separated by Atterberg's three boundaries. The liquid limit LL is the water content at which a groove cut in the pat closes over 12.7 mm at exactly 25 blows of the Casagrande cup (in practice, a flow curve of water content against log blow count, interpolated to 25). The plastic limit PL is the water content at which a rolled thread crumbles at exactly 3 mm diameter. The shrinkage limit SL is the boundary at which further drying causes no further volume loss, found by oven-drying a saturated pat and measuring its volumes.",
              "From the limits come the working indices. The plasticity index PI = LL - PL is the width of the plastic state - the soil's mouldability. The liquidity index LI = (w - PL)/PI locates the natural water content inside that range: LI near 1 means the deposit sits close to its liquid limit, a soft, dangerous clay; LI near 0 means a stiff one. The consistency index CI = (LL - w)/PI is its mirror. Activity A = PI/(clay fraction finer than 2 micron) separates soils by swelling appetite: inactive below 0.75, normal between 0.75 and 1.25, active above 1.25 - the active montmorillonitic black cotton soils of the Deccan being the cautionary example.",
              "The limits are determined on the fraction passing 425 micron after standardised preparation (IS 2720 Part 5), because grinding and drying history shift them. Their engineering reach is wide: PI correlates with strength, compressibility and shrink-swell potential; LL and PI place the soil on the plasticity chart of the next section; and the one-point liquid limit LL = w_N (N/25)^0.121 shortcuts the flow curve when time is short. A worked anchor: LL = 58, PL = 24, natural w = 36 percent gives PI = 34, LI = (36 - 24)/34 = 0.35 and CI = 0.65 - a medium, plastic clay sitting safely inside its plastic range.",
            ],
            bullets: [
              "Consistency states with falling water content: liquid, then plastic, then semi-solid, then solid.",
              "LL: Casagrande device - water content at 25 blows for a 12.7 mm groove closure, from the flow curve.",
              "PL: the rolled thread crumbles at exactly 3 mm diameter.",
              "SL: water content below which drying causes no further volume decrease.",
              "PI = LL - PL; LI = (w - PL)/PI; CI = (LL - w)/PI - the three working indices.",
              "Activity A = PI/(clay fraction below 2 micron): inactive below 0.75, normal 0.75-1.25, active above 1.25.",
            ],
            table: {
              caption: "The Atterberg limits and their tests.",
              headers: ["Limit", "State boundary", "Test"],
              rows: [
                ["Liquid limit LL", "liquid / plastic", "Casagrande cup and grooving tool; flow curve read at 25 blows"],
                ["Plastic limit PL", "plastic / semi-solid", "3 mm thread crumbles on a glass plate"],
                ["Shrinkage limit SL", "semi-solid / solid", "pat volume change on oven drying"],
                ["Plasticity index PI", "width of the plastic state", "PI = LL - PL"],
                ["Liquidity index LI", "position of natural w inside the plastic range", "LI = (w - PL)/PI"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Four consistency states of a fine soil",
              caption: "Drying walks the soil from liquid to solid; the Atterberg limits are the gateposts.",
              axes: {
                x: "Water content falls to the right",
                y: "Drying continues downward",
              },
              quadrants: [
                { label: "Liquid state (w above LL)", note: "flows under its own weight" },
                { label: "Plastic state (PL to LL)", note: "moulds without cracking" },
                { label: "Semi-solid state (SL to PL)", note: "crumbles; volume still shrinks" },
                { label: "Solid state (w below SL)", note: "volume constant; brittle" },
              ],
            },
            callout: {
              type: "tip",
              title: "One-point shortcut",
              body: "One-point liquid limit: LL = w_N (N/25)^0.121 - remember the exponent 0.121. It appears in RGPV short questions almost every alternate year, usually as a two-mark definition or a small numerical.",
            },
            keyTerms: [
              { term: "Liquid limit", definition: "Water content at which a groove closes over 12.7 mm at 25 blows of the Casagrande cup." },
              { term: "Plasticity index", definition: "PI = LL - PL; the range of water content over which the soil behaves plastically." },
              { term: "Liquidity index", definition: "LI = (w - PL)/PI; locates the natural water content within the plastic range." },
              { term: "Activity", definition: "PI per unit clay fraction; active clays (above 1.25) swell and shrink severely." },
            ],
            examQuestions: [
              {
                q: "Explain the consistency states of soil and describe the determination of the liquid limit and plastic limit. Define PI, LI and CI.",
                marks: 7,
                outline: [
                  "Consistency as a water-content-dependent property of fine soils.",
                  "Four states and the three boundaries (LL, PL, SL) - sketch the four-state diagram.",
                  "LL test: Casagrande device, grooving tool, 25 blows, flow curve of w against log N.",
                  "PL test: 3 mm crumble thread on a glass plate.",
                  "Define PI = LL - PL, LI = (w - PL)/PI and CI = (LL - w)/PI.",
                  "Interpretation: LI near 1 means the natural soil sits near its liquid limit - soft and sensitive.",
                  "Mention IS 2720 Part 5 and the role of PI in classification.",
                ],
              },
              {
                q: "Define plasticity index and state its engineering use.",
                marks: 2,
              },
              {
                q: "A clay has LL = 58 and PL = 24. Its natural water content is 36 percent. Compute PI, LI and CI and describe the field consistency.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "The IS classification system (IS 1498)",
            body: [
              "A shared language turns index numbers into design decisions, and in India that language is IS 1498 - 1970. The first gate is the 75 micron sieve: if more than half the soil passes it, the soil is fine-grained; otherwise coarse-grained. The coarse branch splits again at 4.75 mm - gravel when more than half the coarse fraction is coarser than 4.75 mm, sand otherwise. Gradation then supplies the prefix: W for well graded (meeting the Cu and Cc criteria) or P for poorly graded, with a suffix for the fines (C or M) whenever the fines content sits in the borderline 5 to 12 percent band, producing dual symbols such as SW-SM.",
              "The fine branch lives on the plasticity chart: liquid limit on the horizontal axis, plasticity index on the vertical. The A-line, PI = 0.73(LL - 20), separates clays (above) from silts and organic soils (below); the U-line, PI = 0.9(LL - 8), bounds the region of physically possible soils. Plasticity grades then scale the symbol: L for LL up to 35, I for 35 to 50, H for 50 to 70 and V above 70 - giving the familiar families CL, CI, CH, ML, MI, MH and their organic and peaty cousins. Worked point: LL = 52 with PI = 30 sits above the A-line (0.73 x 32 = 23.4) in the H band, so the soil is CH.",
              "Classification earns its keep through correlation: group symbols index directly onto tabulated strength, compressibility and permeability ranges, and specifications quote them - 'embankment core of CI/CH clay' or 'base course of well-graded crushed rock (GW)'. The exam routine is a funnel, drawn in the diagram below: run the 75 micron check, split coarse or fine, apply gradation or plasticity, and end with a group symbol plus a group name. Practise five full classifications with numbers and the marks in this section are mechanical.",
            ],
            bullets: [
              "First gate: more than 50 percent passing the 75 micron sieve sends the soil to the fine branch.",
              "Coarse branch: gravel when more than half the coarse fraction exceeds 4.75 mm, otherwise sand.",
              "Prefix W or P comes from Cu and Cc; a suffix (C or M) appears when fines are 5 to 12 percent.",
              "A-line: PI = 0.73(LL - 20); points above it are clays, below it silts.",
              "Plasticity grades: L (LL up to 35), I (35-50), H (50-70), V (above 70).",
              "Worked point: LL = 52, PI = 30 lies above the A-line (0.73 x 32 = 23.4) in the H band - the soil is CH.",
            ],
            table: {
              caption: "Letters of the IS 1498 system.",
              headers: ["Letter", "Stands for", "Letter", "Stands for"],
              rows: [
                ["G", "gravel", "W", "well graded"],
                ["S", "sand", "P", "poorly graded"],
                ["M", "silt (fines below the A-line)", "L", "low plasticity (LL up to 35)"],
                ["C", "clay (fines above the A-line)", "I", "intermediate plasticity (LL 35-50)"],
                ["O", "organic soil", "H", "high plasticity (LL 50-70)"],
                ["Pt", "peat and muck", "V", "very high plasticity (LL above 70)"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The IS 1498 classification funnel",
              caption: "Every soil enters at the base and exits at the apex with a group symbol.",
              tiers: [
                { label: "Group symbol and name", note: "the final label, e.g. CH, or SM - silty sand" },
                { label: "Fine branch: plasticity chart", note: "PI vs LL; A-line PI = 0.73(LL - 20)" },
                { label: "Coarse branch: gradation and fines", note: "Cu and Cc give W or P; fines give C or M" },
                { label: "Split at 75 micron; gravel/sand at 4.75 mm", note: "fines above 50 percent route to the fine branch" },
                { label: "All soils (IS 1498 - 1970)", note: "the funnel starts here" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show every gate",
              body: "Practise full classifications in this order: (1) percent passing 75 micron, (2) coarse: gravel or sand plus Cu and Cc, (3) fine: plot PI against LL, (4) A-line check PI = 0.73(LL - 20), (5) plasticity grade L/I/H/V, (6) write the symbol. Full marks come from showing every gate, not just the final symbol.",
            },
            keyTerms: [
              { term: "A-line", definition: "The empirical boundary PI = 0.73(LL - 20) separating clays (above) from silts (below) on the plasticity chart." },
              { term: "IS 1498", definition: "The Indian Standard classification system assigning group symbols such as CH, SM and GW." },
              { term: "Dual symbol", definition: "A pair like SW-SM used when a coarse soil sits in the 5 to 12 percent fines borderline." },
            ],
            examQuestions: [
              {
                q: "Explain the IS classification of fine-grained soils using the plasticity chart. Classify a soil with LL = 52 percent and PI = 30 percent.",
                marks: 7,
                outline: [
                  "Role of IS 1498; the first gate at the 75 micron sieve.",
                  "Draw the plasticity chart: LL on the horizontal axis, PI on the vertical axis.",
                  "Draw the A-line PI = 0.73(LL - 20) and the U-line PI = 0.9(LL - 8).",
                  "Zones: CL/CH above the line, ML/MH below; O for organic; Pt for peat.",
                  "Locate (LL = 52, PI = 30): A-line PI = 0.73(52 - 20) = 23.4; since 30 is above 23.4, the soil is a clay.",
                  "LL = 52 falls in the 50-70 band - high plasticity H.",
                  "Conclusion: CH - inorganic clay of high plasticity; note the correlations such a symbol carries.",
                ],
              },
              {
                q: "What does the group symbol 'SM' mean in the IS system?",
                marks: 2,
              },
              {
                q: "State the grain-size boundaries that separate gravel, sand, silt and clay sizes in the IS system.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Soil structure and clay minerals",
            body: [
              "Grains arrange themselves in patterns that a single number cannot capture. Coarse sands and gravels settle into single-grained structures - each grain independently in a gravity-stable packing described by relative density. Silt-size grains can arch across each other into honeycomb structures, loose cages that collapse when saturated or loaded - the classic surprise of loess and collapsible deposits. Clay platelets, being charged, build the two great fabrics: flocculated (edge-to-face contacts, formed where salt water suppresses repulsion) and dispersed (face-to-face parallelism, formed in fresh water or by remoulding). Flocculated clays carry high void ratios and high sensitivity - their strength collapses when the fabric is disturbed.",
              "The minerals themselves are sandwiches of two sheets: silica tetrahedra and alumina octahedra. Kaolinite stacks them 1:1 with strong hydrogen bonding - stable, low-swelling, the china clay of ceramics and paper. Illite stacks 2:1 with potassium ions bridging the layers - moderately stable. Montmorillonite stacks 2:1 with weak bonds and exchangeable cations between layers, so water enters and the crystal swells dramatically - bentonite, the drilling mud and cutoff material, is nearly pure montmorillonite, and the black cotton soils of the Deccan are montmorillonitic, swelling in the monsoon and shrinking in summer to crack everything light founded on them.",
              "Structure explains behaviour that composition alone cannot. Sensitivity - the ratio of undisturbed to remoulded strength - is a fabric property, and quick clays collapse to slurry on disturbance. Thixotropy is the slow, partial regain of strength with time after remoulding. Dispersive clays can pipe: deflocculated platelets migrate with seepage and tunnel through earth dams. The engineering responses follow the mineralogy: under-reamed piles and CNS (cohesive non-swelling) layers for black cotton soil, moisture barriers around footings, and anti-piping filters wherever dispersive clay meets flowing water.",
            ],
            bullets: [
              "Single-grained structure: coarse grains in gravity-stable packing, described by relative density.",
              "Honeycomb structure: silt-size grains arch into loose cages - collapsible on saturation or loading.",
              "Flocculated (edge-to-face) clays: high void ratio, high water content, very sensitive to remoulding.",
              "Dispersed (face-to-face) structure: produced by remoulding or fresh water; lower voids, lower permeability.",
              "Kaolinite (1:1 sheets) is stable; montmorillonite (2:1, weak interlayer bonds) swells dramatically.",
              "Black cotton soil is montmorillonitic - seasonal swell-shrink cracks light foundations; use under-reamed piles or CNS layers.",
            ],
            table: {
              caption: "The three principal clay minerals.",
              headers: ["Mineral", "Sheet stacking", "Interlayer bond", "Swell potential", "Deposit / use"],
              rows: [
                ["Kaolinite", "1:1 (silica + alumina)", "hydrogen bonding - strong", "low", "china clay; ceramics, paper"],
                ["Illite", "2:1 with potassium", "potassium bridging - moderate", "moderate", "common marine shales"],
                ["Montmorillonite", "2:1, expandable", "weak, exchangeable cations", "very high", "bentonite; drilling mud, cutoffs; black cotton soil"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Flocculated vs dispersed clay structure",
              caption: "Same clay, two fabrics: the arrangement of platelets - not the mineral alone - fixes sensitivity and permeability.",
              left: {
                heading: "Flocculated (edge-to-face)",
                items: [
                  "Formed in saline water - attraction between edges and faces",
                  "High void ratio and natural water content",
                  "High sensitivity: strength collapses on remoulding",
                  "Relatively higher permeability (for a clay)",
                  "Met in undisturbed marine deposits",
                ],
              },
              right: {
                heading: "Dispersed (face-to-face)",
                items: [
                  "Formed in fresh water or by remoulding a flocculated clay",
                  "Lower void ratio, particles roughly parallel",
                  "Less sensitive, more workable",
                  "Lower permeability",
                  "Dispersive clays can pipe - an internal erosion hazard in earth dams",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not swap the pair",
              body: "Sensitivity is the loss of strength on remoulding; thixotropy is the regain of strength with time after remoulding, at constant water content. Examiners routinely set a two-mark question on exactly this distinction.",
            },
            keyTerms: [
              { term: "Honeycomb structure", definition: "Loose arching arrangement of silt-size grains that collapses on saturation." },
              { term: "Sensitivity", definition: "Ratio of undisturbed to remoulded strength; quick clays have very high values." },
              { term: "Montmorillonite", definition: "The 2:1 expandable clay mineral responsible for the extreme swell-shrink behaviour of black cotton soil." },
              { term: "Thixotropy", definition: "Time-dependent regain of strength after remoulding, with no change in water content." },
            ],
            examQuestions: [
              {
                q: "Describe the structures found in soils and explain the structure and behaviour of kaolinite, illite and montmorillonite. Why is black cotton soil problematic for foundations?",
                marks: 7,
                outline: [
                  "Single-grained, honeycomb, flocculated and dispersed structures - one line and sketch each.",
                  "Clay mineral basics: silica tetrahedral and alumina octahedral sheets.",
                  "Kaolinite 1:1, hydrogen-bonded, stable, low swell.",
                  "Illite 2:1, potassium-bonded, moderate swell.",
                  "Montmorillonite 2:1 with weak interlayer bonds - water enters and the crystal swells.",
                  "Black cotton soil: montmorillonitic, seasonal volume change cracks light structures.",
                  "Remedies: under-reamed piles, CNS layer, moisture control, founding below the movement zone.",
                ],
              },
              {
                q: "Differentiate between flocculated and dispersed clay structure.",
                marks: 2,
              },
              {
                q: "What is the sensitivity of a clay? Classify clays as insensitive, sensitive and quick.",
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
      title: "Permeability and Seepage",
      summary:
        "How water moves through soil: Darcy's law and its limits, constant and falling head laboratory tests, field pumping in aquifers, equivalent permeability of layered deposits, the flow net that solves Laplace's equation graphically, and the gradients that lift foundations - uplift, boiling and piping.",
      chapter: {
        number: "03",
        title: "Darcy's Law, Permeability Tests, Flow Nets and Piping",
        intro:
          "Unit III follows a drop of water: Darcy's law and its laminar-flow limits, the constant and falling head laboratory tests, pumping tests that measure whole aquifers, the equivalent permeability of layered ground, the flow net that solves Laplace's equation graphically, and the exit gradients that boil sand and pipe beneath dams.",
        inOneBreath:
          "Darcy: v = k i and q = k i A, valid for laminar flow; the constant head test measures k in sands with k = QL/(Aht) and the falling head test in fines with k = 2.303 aL log(h1/h2)/(At); field pumping gives k from drawdown in observation wells; layered soils take k_h = sum(kH)/sum H and k_v = sum H/sum(H/k); flow nets of orthogonal flow and equipotential lines yield q = k h Nf/Nd, pore pressures, uplift and exit gradients; and upward seepage at the critical gradient i_cr = (G-1)/(1+e) of about 1 brings quicksand - guarded against by cutoffs, filters and drainage.",
        sections: [
          {
            number: "3.1",
            title: "Darcy's law and the coefficient of permeability",
            body: [
              "Water flows through soil along the tortuous paths of the interconnected voids, driven by differences in total head - elevation head plus pressure head, with velocity head negligible. The hydraulic gradient i = h/L measures the head lost per unit length of flow path. Darcy's 1856 law states that for laminar flow the discharge velocity is proportional to the gradient: v = k i, where k, the coefficient of permeability, has the units of velocity (m/s). Multiplying by the gross cross-sectional area A gives the discharge q = k i A. The discharge velocity is a fiction of convenience - water moves only through the pores, so the true seepage velocity is v/n, larger by the factor of porosity.",
              "Darcy's law holds only while flow stays laminar, roughly a Reynolds number below one - true for sands and every finer soil, questionable in clean gravels. The coefficient k is a property of both soil and fluid, but for water it is read as a soil property, and it spans six orders of magnitude: gravel above 10^-3 m/s, coarse sand 10^-3 to 10^-5, fine sand 10^-5 to 10^-7, silt 10^-7 to 10^-9, and clay below 10^-9 m/s - practically impervious. The controlling factors are pore geometry (grain size above all - Hazen's k of about C D10^2 with D10 in cm and k in cm/s), void ratio, degree of saturation, the viscosity and unit weight of the fluid (hence temperature), and the fabric and stratification of the deposit.",
              "Permeability sits underneath half the syllabus: seepage through and beneath dams (this unit), the rate of consolidation (the coefficient cv is proportional to k), dewatering design, contaminant transport and drainage filters. The exam routine is short and worth practising: compute the gradient from total heads, apply q = k i A, and convert to seepage velocity by dividing by porosity when asked. The Python snippet below runs the whole chain for a sand stratum under a hydraulic structure.",
            ],
            bullets: [
              "Hydraulic gradient i = h/L - head lost per unit flow length; dimensionless.",
              "Darcy's law: v = k i (discharge velocity) and q = k i A; k carries the units of velocity (m/s).",
              "Discharge velocity uses the gross area; true seepage velocity = v/n, larger by 1/n.",
              "Valid for laminar flow - sands and finer soils; clean gravels may go turbulent and exceed Darcy.",
              "Hazen: k of about C D10^2 (D10 in cm, k in cm/s, C near 100 for clean filter sands).",
              "Typical k: coarse sand 10^-3 to 10^-5 m/s; silt 10^-7 to 10^-9; clay below 10^-9 - six orders apart.",
            ],
            codeExample: {
              language: "python",
              caption: "Darcy flow through a sand stratum - discharge and true seepage velocity.",
              code: `def darcy_flow(k, i, A):
    # k in m/s, i dimensionless, A in m^2 -> q in m^3/s
    return k * i * A

# clean sand stratum under a hydraulic structure
k = 3.0e-4          # m/s
h, L = 1.8, 6.0     # head loss over the flow length (m)
A = 12.0            # gross cross-sectional area (m^2)
i = h / L

q = darcy_flow(k, i, A)
print("gradient i =", round(i, 3))
print("discharge q =", round(q * 1000, 2), "litres/s")

n = 0.40            # porosity of the sand
v = k * i           # discharge (superficial) velocity
print("discharge velocity =", round(v, 6), "m/s")
print("true seepage velocity =", round(v / n, 6), "m/s")`,
            },
            diagram: {
              kind: "flow",
              title: "Darcy's law from head loss to discharge",
              caption: "The chain every seepage problem walks - check laminar validity at the end.",
              steps: [
                { label: "Head difference h across length L", note: "total head, not pressure head alone" },
                { label: "Gradient i = h/L", note: "the driving force" },
                { label: "v = k i", note: "discharge velocity in m/s" },
                { label: "q = k i A", note: "gross area A of the flow section" },
                { label: "Seepage velocity = v/n", note: "divide by porosity for true speed" },
                { label: "Verify laminar flow", note: "Darcy holds only while Re stays near or below 1" },
              ],
            },
            callout: {
              type: "exam",
              title: "Convert to total head first",
              body: "If a question gives pressure heads but not elevations, convert to total heads before differencing: h_total = z + u/gamma_w. Most wrong Darcy answers in RGPV papers come from using the pressure head alone as the driving head.",
            },
            keyTerms: [
              { term: "Hydraulic gradient", definition: "Head lost per unit length of flow path, i = h/L." },
              { term: "Discharge velocity", definition: "Darcy's apparent velocity v = k i computed over the gross cross-sectional area." },
              { term: "Coefficient of permeability", definition: "k - the proportionality constant in Darcy's law; numerically the velocity under unit gradient." },
            ],
            examQuestions: [
              {
                q: "State Darcy's law, define each term and state its validity. Discuss the factors that affect the coefficient of permeability.",
                marks: 7,
                outline: [
                  "Flow through interconnected voids; total head drives flow.",
                  "i = h/L; Darcy: v = k i and q = k i A; units of k.",
                  "Discharge versus seepage velocity: v_s = v/n.",
                  "Validity: laminar flow with Reynolds number near or below 1 - sands and finer, not gravels.",
                  "Factors: grain size (Hazen k = C D10^2), void ratio, saturation, fluid viscosity and temperature, fabric, stratification.",
                  "Typical orders of magnitude from gravel down to clay.",
                  "Applications: seepage quantity, dewatering, rate of consolidation.",
                ],
              },
              {
                q: "Distinguish between discharge velocity and seepage velocity.",
                marks: 2,
              },
              {
                q: "State Hazen's empirical formula for permeability and its range of applicability.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Laboratory measurement - constant head and falling head",
            body: [
              "Two laboratory tests cover the whole permeability range, and the choice between them is dictated by the magnitude of k. The constant head test suits coarse soils: the sample sits in a permeameter, a fixed head h is maintained by overflows, and the discharge Q collected in time t gives k = QL/(Aht), where A and L are the sample's area and length. Three runs at different heads should agree; disagreement flags leakage along the walls, air in the voids or incomplete saturation.",
              "The falling head test suits fine soils, whose discharge is too small to collect at constant head. A slender standpipe of area a tops the sample; the head decays from h1 to h2 while the clock runs. The governing equation comes from continuity: in time dt the standpipe drops a depth dh, so the volume leaving, -a dh, must equal the volume flowing through the sample, k(A/L)h dt. Separating variables and integrating from h1 to h2 over 0 to t gives a ln(h1/h2) = kAt/L, hence k = (aL/At) ln(h1/h2) = 2.303 aL log10(h1/h2)/(At). The derivation is a standing seven-mark favourite.",
              "Precautions decide whether either number is trustworthy: full saturation (de-air the water and flush the sample), no side leakage along the mould wall, and a temperature correction to the standard value because viscosity changes with temperature. And even a careful lab result on a 75 mm sample may misrepresent the field, because fissures, root holes and thin seams conduct far more water than intact laboratory clay - which is the argument for the field pumping tests of the next section.",
            ],
            bullets: [
              "Constant head suits coarse soils (k above about 10^-5 m/s): k = QL/(Aht).",
              "Falling head suits fine soils: k = 2.303 aL log10(h1/h2)/(At).",
              "Derivation core: -a dh = k(A/L) h dt, integrated between h1 and h2.",
              "a = standpipe area, A = sample area, L = sample length, t = elapsed time.",
              "Precautions: full saturation, de-aired water, no side leakage, temperature correction.",
              "Lab k on small samples can miss field fabric - fissured clays leak far more in place.",
            ],
            table: {
              caption: "Choosing a permeability test.",
              headers: ["Aspect", "Constant head", "Falling head"],
              rows: [
                ["Soil type", "clean sand and gravel", "silt and clay"],
                ["Head during test", "held constant by overflow", "decays from h1 to h2 in a standpipe"],
                ["Formula", "k = QL/(Aht)", "k = 2.303 aL log10(h1/h2)/(At)"],
                ["Measured quantity", "discharge volume Q in time t", "clock time between two heads"],
                ["Typical k range", "above 10^-5 m/s", "10^-5 down to 10^-9 m/s"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two lab permeability tests",
              caption: "The choice is dictated by the magnitude of k - the formulas follow from how the head is applied.",
              left: {
                heading: "Constant head",
                items: [
                  "Best for sands and gravels (k above 10^-5 m/s)",
                  "Head held constant by overflow; discharge collected over time",
                  "k = QL/(Aht)",
                  "Large measurable Q suits high-k soils",
                  "Repeat for three heads; k should be constant",
                ],
              },
              right: {
                heading: "Falling head",
                items: [
                  "Best for silts and clays (k below 10^-5 m/s)",
                  "Head decays in a narrow standpipe of area a",
                  "k = 2.303 aL log10(h1/h2)/(At)",
                  "Sensitive timing suits slow flow through fines",
                  "Record h1, h2 and the elapsed time exactly",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Derivation marks",
              body: "The falling-head derivation is a standing seven-mark favourite. Write the continuity equation (-a dh = kAh dt/L), separate variables, integrate from h1 to h2 over 0 to t, then convert to log10. Each step is a mark on its own.",
            },
            keyTerms: [
              { term: "Constant head test", definition: "Lab permeability test for coarse soils in which the applied head is held constant and discharge is measured." },
              { term: "Falling head test", definition: "Lab permeability test for fine soils in which the head in a standpipe decays with time." },
              { term: "Permeameter", definition: "The rigid-wall cell that holds the soil sample during a permeability test." },
            ],
            examQuestions: [
              {
                q: "Describe the falling head permeability test and derive its governing equation. For which soils is it preferred over the constant head test?",
                marks: 7,
                outline: [
                  "Apparatus: soil sample of area A and length L topped by a standpipe of area a.",
                  "Why falling head: low-k soils give too little discharge to collect at constant head.",
                  "Continuity: the fall -a dh in time dt equals the flow through the sample k(A/L)h dt.",
                  "So -a dh/h = kA dt/L.",
                  "Integrate from h1 to h2 over 0 to t: a ln(h1/h2) = kAt/L.",
                  "k = (aL/At) ln(h1/h2) = 2.303 aL log10(h1/h2)/(At).",
                  "Precautions and preference: k below about 10^-5 m/s; saturation, de-aired water, temperature correction.",
                ],
              },
              {
                q: "Write the constant head formula, defining every symbol.",
                marks: 2,
              },
              {
                q: "A falling head test gives h1 = 100 cm, h2 = 40 cm in 6 minutes with a = 0.8 cm^2, A = 45 cm^2 and L = 12 cm. Compute k in cm/s.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Field pumping and stratified deposits",
            body: [
              "Laboratory samples are centimetres; aquifers are kilometres. Field permeability tests measure a large, representative volume and capture the fissures and seams that a specimen misses. The pumping-out test is the standard: pump a well at a steady rate q until the drawdown stabilises, and read the water levels in two observation wells at radial distances r1 and r2. In an unconfined (water-table) aquifer, with heads h1 and h2 measured above the impervious base, the Dupuit-Thiem analysis gives k = 2.303 q log10(r2/r1)/[pi(h2^2 - h1^2)]. In a confined aquifer of thickness b, with drawdowns s1 and s2, k = 2.303 q log10(r2/r1)/[2 pi b(s1 - s2)].",
              "The unconfined derivation is a classic: assume radial flow, a horizontal impervious base, homogeneous isotropic soil and steady state, and adopt Dupuit's assumption that the gradient equals the water-table slope. Flow through a cylinder of radius r and saturated height h is q = k(dh/dr)(2 pi r h); separating variables and integrating between the two observation wells yields q ln(r2/r1) = pi k(h2^2 - h1^2), which rearranges to the working formula. Pumping-in tests (open-end and packer) extend the same idea to boreholes in rock and tight strata.",
              "Natural deposits are layered, and a single k does not serve. Flow parallel to the layers meets conductances in parallel: the equivalent horizontal permeability is the thickness-weighted arithmetic mean, k_h = sum(k_i H_i)/sum(H_i), pulled toward the most permeable layer. Flow normal to the layers meets resistances in series: k_v = sum(H_i)/sum(H_i/k_i), a harmonic mean dominated by the tightest layer. Always k_v is less than k_h - often by a factor of several in varved and bedded deposits - which elongates flow nets horizontally and slows consolidation. The worked check in the questions shows the two formulas disagreeing by a factor of twenty-five on the same profile.",
            ],
            bullets: [
              "Pumping-out tests measure a field-average k over a large, representative volume.",
              "Unconfined aquifer: k = 2.303 q log10(r2/r1)/[pi(h2^2 - h1^2)], heads measured above the impervious base.",
              "Confined aquifer: k = 2.303 q log10(r2/r1)/[2 pi b(s1 - s2)] with drawdowns s1 and s2.",
              "Flow parallel to layers: k_h = sum(k_i H_i)/sum(H_i) - arithmetic weighting.",
              "Flow normal to layers: k_v = sum(H_i)/sum(H_i/k_i) - harmonic weighting; always k_v below k_h.",
              "Never average layer permeabilities arithmetically without checking the flow direction first.",
            ],
            table: {
              caption: "Equivalent permeability of a stratified deposit.",
              headers: ["Flow direction", "Formula", "Analogy", "Result"],
              rows: [
                ["Parallel to layers (horizontal)", "k_h = (k1H1 + k2H2 + ...)/H", "conductances in parallel", "pulled toward the largest k"],
                ["Normal to layers (vertical)", "k_v = H/(H1/k1 + H2/k2 + ...)", "resistances in series", "pulled toward the smallest k"],
                ["Always", "k_h is at least k_v", "anisotropy of natural deposits", "flow nets elongate horizontally"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which field method fits the deposit?",
              caption: "The aquifer you have dictates the formula you use.",
              start: "Assessing field permeability at a site",
              branches: [
                {
                  label: "Water-table (unconfined) aquifer",
                  outcome: "Pump a well to steady drawdown, measure heads in two observation wells, apply k = 2.303 q log(r2/r1)/[pi(h2^2 - h1^2)]",
                  good: true,
                },
                {
                  label: "Confined (artesian) aquifer",
                  outcome: "Same pumping, but use k = 2.303 q log(r2/r1)/[2 pi b(s1 - s2)] with the aquifer thickness b",
                  good: true,
                },
                {
                  label: "Layered deposit",
                  outcome: "No single k: compute k_h = sum(kH)/sum H and k_v = sum H/sum(H/k); the flow direction picks the value",
                  good: true,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Heights, not drawdowns",
              body: "In the unconfined pumping formula, h1 and h2 are saturated thicknesses measured above the impervious base - not drawdowns. Substituting drawdowns here is the most common numerical error in this unit.",
            },
            keyTerms: [
              { term: "Pumping-out test", definition: "Field test that determines in-situ permeability by pumping a well and observing the drawdown curve." },
              { term: "Dupuit's assumption", definition: "Simplification that the hydraulic gradient equals the water-table slope in radial flow to a well." },
              { term: "Equivalent permeability", definition: "Single k representing a layered system: k_h for flow along layers, k_v across them." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the coefficient of permeability from a pumping-out test in an unconfined aquifer, stating all assumptions.",
                marks: 7,
                outline: [
                  "Setup: central well pumped at steady rate q; observation wells at r1 and r2 with saturated heights h1 and h2.",
                  "Assumptions: homogeneous isotropic aquifer, horizontal impervious base, steady state, Dupuit's gradient.",
                  "Radial flow through a cylinder: q = k (dh/dr)(2 pi r h).",
                  "Separate variables: q dr/r = 2 pi k h dh.",
                  "Integrate from (r1, h1) to (r2, h2): q ln(r2/r1) = pi k(h2^2 - h1^2).",
                  "k = q ln(r2/r1)/[pi(h2^2 - h1^2)] = 2.303 q log10(r2/r1)/[pi(h2^2 - h1^2)].",
                  "Limitations: Dupuit ignores the seepage face near the well; accuracy improves with distance from the well.",
                ],
              },
              {
                q: "Write the formulas for the equivalent horizontal and vertical permeability of a two-layer deposit.",
                marks: 2,
              },
              {
                q: "A soil profile has 3 m of k = 10^-4 m/s over 2 m of k = 10^-6 m/s. Compute k_h and k_v.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Flow nets",
            body: [
              "Steady two-dimensional seepage through a homogeneous, isotropic, saturated soil is governed by Laplace's equation, d2h/dx2 + d2h/dz2 = 0, which follows from combining Darcy's law with continuity. Closed-form solutions exist for a handful of geometries; for everything else engineers solve the equation graphically. The flow net is that graphical solution: two orthogonal families of lines - flow lines, tangent to the seepage velocity, along which water travels, and equipotential lines, along which total head is constant - drawn so that they intersect at right angles and enclose curvilinear squares (a circle inscribed in any field should touch all four sides).",
              "The net is bounded by the flow lines of the problem: the impervious base below and the outline of the structure above, while the upstream and downstream water faces are the first and last equipotentials. Construction is a trained sketch: start from the region of known curvature near the structure, draw one intermediate flow line, adjust until the fields square up, then count. Nf is the number of flow channels (the bands between adjacent flow lines) and Nd the number of equipotential drops (the head steps between adjacent equipotentials). Because each channel carries the same discharge and each drop loses the same head h/Nd, the seepage per metre width is q = k h Nf/Nd.",
              "One net answers every seepage question about the structure. Pore pressure at any point: count the drops to it and multiply the remaining head by gamma_w. Uplift under the base: build the pressure diagram from the heads along the base, and check the overturning stability of the apron. Exit gradient at the downstream toe: take the gradient across the last field, and compare it with the critical gradient of the next section. Worked check: k = 4 x 10^-6 m/s, h = 6 m, Nf = 5 and Nd = 12 give q = 1 x 10^-5 m^3/s per metre of width.",
            ],
            bullets: [
              "Laplace's equation d2h/dx2 + d2h/dz2 = 0 governs steady 2D seepage in homogeneous isotropic soil.",
              "A flow net is the pair of orthogonal families: flow lines and equipotential lines.",
              "Fields must be curvilinear squares - an inscribed circle touches all four sides.",
              "Seepage per metre width: q = k h Nf/Nd - Nf flow channels, Nd equipotential drops.",
              "Pore pressure at a point = gamma_w x head remaining after the drops counted to that point.",
              "Uplift under the base and the exit gradient at the toe come from the same net.",
            ],
            codeExample: {
              language: "python",
              caption: "Flow net results: seepage quantity and a pore pressure from counted drops.",
              code: `def seepage(k, h, Nf, Nd):
    # discharge per metre width of the structure
    return k * h * Nf / Nd

k = 4.0e-6      # m/s
h = 6.0         # total head loss across the structure (m)
Nf, Nd = 5, 12  # flow channels, equipotential drops

q = seepage(k, h, Nf, Nd)
print("seepage per metre run =", round(q, 7), "m^3/s per m")
print("seepage for 80 m length =", round(q * 80, 5), "m^3/s")

# head lost per equipotential drop
dh = h / Nd
print("head lost per drop =", round(dh, 3), "m")

# pore pressure at a point 6 drops down from the upstream face
drops_at_point = 6
head_remaining = h - dh * drops_at_point
u = 9.81 * head_remaining
print("pore pressure at the point =", round(u, 1), "kPa")`,
            },
            diagram: {
              kind: "flow",
              title: "Constructing a flow net by hand",
              caption: "The routine that earns the marks: boundaries first, squares last.",
              steps: [
                { label: "Draw the section to scale", note: "structure, soil, impervious base, water levels" },
                { label: "Mark the boundary flow lines", note: "base of the structure and the impervious stratum" },
                { label: "Mark the boundary equipotentials", note: "upstream and downstream faces" },
                { label: "Sketch one intermediate flow line", note: "start near the structure where curvature is known" },
                { label: "Adjust to curvilinear squares", note: "an inscribed circle should touch all four sides" },
                { label: "Count Nf and Nd", note: "channels between flow lines, drops between equipotentials" },
              ],
            },
            callout: {
              type: "tip",
              title: "Count spaces, not lines",
              body: "Nf is the number of flow channels (the bands) and Nd the number of head drops (the steps): with five flow lines there are four channels. Half of all wrong flow-net numericals are counting errors made in the last thirty seconds.",
            },
            keyTerms: [
              { term: "Flow line", definition: "A line tangent to the seepage velocity at every point; water cannot cross flow lines." },
              { term: "Equipotential line", definition: "A line of equal total head; seepage crosses it at right angles." },
              { term: "Flow net", definition: "The orthogonal mesh of flow and equipotential lines satisfying Laplace's equation and the boundary conditions." },
              { term: "Equipotential drop", definition: "The head loss between adjacent equipotential lines, equal to h/Nd." },
            ],
            examQuestions: [
              {
                q: "What is a flow net? State its properties and uses, and show that the seepage per unit width of a structure is q = k h Nf/Nd.",
                marks: 7,
                outline: [
                  "Definition: orthogonal families of flow and equipotential lines solving Laplace's equation.",
                  "Properties: right-angle intersections, curvilinear squares, equal discharge per channel, equal head drop per step.",
                  "Boundary conditions: flow lines along impervious boundaries, equipotentials along the reservoir faces.",
                  "Head per drop = h/Nd; discharge through one square field per unit width = k x h/Nd.",
                  "Total q = Nf x k h/Nd.",
                  "Uses: seepage quantity, pore pressures, uplift diagram, exit gradient.",
                  "Assumptions: homogeneous, isotropic, saturated soil in steady two-dimensional flow.",
                ],
              },
              {
                q: "State any two properties of a flow net.",
                marks: 2,
              },
              {
                q: "A dam retains 6 m of water. The flow net has Nf = 5 and Nd = 12 with k = 4 x 10^-6 m/s. Compute the seepage per metre width of the dam.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Seepage force, uplift pressure and piping",
            body: [
              "Flowing water drags on the skeleton it passes through. The seepage pressure is i gamma_w per unit volume of soil, so a volume V experiences the seepage force J = i gamma_w V in the flow direction. Downward seepage therefore adds to the effective stress; upward seepage subtracts from it. At a depth z below an exit face carrying an upward gradient i, the effective stress is sigma' = z(gamma' - i gamma_w), and when the upward gradient reaches the critical value i_cr = gamma'/gamma_w = (G - 1)/(1 + e) - almost exactly 1 for common soils - the effective stress vanishes entirely.",
              "That vanishing is the quicksand condition: not a special soil, but any soil under zero effective stress. Sand boils at the exit, loses all bearing capacity and looks alive. The two piping failure modes grow from it. Boiling or heave is the local lifting of the exit surface when the exit gradient approaches i_cr; piping proper is backward erosion - the concentrated leak that tunnels under a dam along the base, roofed by the structure, until the roof collapses. History's dam failures are overwhelmingly piping failures. The factor of safety is F = i_cr/i_exit, with the exit gradient read from the last field of the flow net; a value of at least 3 is the customary target.",
              "Defences work by geometry or by weight. Upstream cutoffs and sheet piles lengthen the flow path and flatten the net, dropping the exit gradient; downstream inverted filters hold the grains while letting water escape freely; drainage blankets and relief wells give the seepage a safe, pressure-less exit; aprons and weighted berms add confinement. The filter itself must be graded by rule: fine enough to retain the protected soil, coarse enough to drain it - Terzaghi's criteria D15(filter)/D85(soil) of at most 4 to 5 and D15(filter)/D15(soil) of at least 4 to 5, with a uniform filter material preferred.",
            ],
            bullets: [
              "Seepage pressure = i gamma_w per unit volume; on a volume V the drag J = i gamma_w V along the flow direction.",
              "Upward seepage reduces effective stress: sigma' = z(gamma' - i gamma_w) at depth z.",
              "Critical gradient i_cr = gamma'/gamma_w = (G - 1)/(1 + e), close to 1.0 for common soils.",
              "At i = i_cr the effective stress is zero - quicksand: boils, zero bearing capacity, a condition not a material.",
              "Factor of safety against piping: F = i_cr/i_exit, keep at least 3.",
              "Defences: upstream cutoffs lengthen the path; inverted filters and relief drains cut exit gradients; berms add weight.",
              "Terzaghi filter criteria: D15(filter)/D85(soil) at most 4 to 5, and D15(filter)/D15(soil) at least 4 to 5.",
            ],
            table: {
              caption: "Anti-piping measures and how they work.",
              headers: ["Measure", "Placement", "Function"],
              rows: [
                ["Sheet pile / cutoff wall", "upstream end of the base", "lengthens the flow path and flattens the net"],
                ["Inverted (weighted) filter", "downstream exit zone", "holds grains while water escapes freely"],
                ["Drainage blanket / relief wells", "downstream of the structure", "gives seepage a safe, pressure-less exit"],
                ["Downstream apron", "along the toe", "adds weight against uplift and evens gradients"],
                ["Surcharge berm", "over the exit area", "raises effective stress against heave"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Exit gradient at the downstream toe",
              caption: "The last field of the flow net decides the fate of the structure.",
              start: "Exit gradient i at the downstream end",
              branches: [
                {
                  label: "i well below i_cr/3",
                  outcome: "Safe: seepage emerges gently; only a filter is needed to carry the water away cleanly",
                  good: true,
                },
                {
                  label: "i approaches i_cr",
                  outcome: "Boiling and heave: the exit face lifts in sand boils as effective stress collapses toward zero",
                  good: false,
                },
                {
                  label: "Erosion tunnels along the base",
                  outcome: "Piping: backward erosion opens a pipe under the structure until the roof collapses - sudden failure",
                  good: false,
                },
              ],
            },
            callout: {
              type: "warning",
              title: "Quicksand is a condition",
              body: "Quicksand is a state of zero effective stress, not a type of soil: the material is solid sand. Anything trapped in it is not sucked down - it is buoyed, since the mixture behaves as a heavy fluid. Explaining this distinction earns the viva-style mark in RGPV papers.",
            },
            keyTerms: [
              { term: "Critical hydraulic gradient", definition: "Upward gradient at which effective stress vanishes: i_cr = (G - 1)/(1 + e)." },
              { term: "Piping", definition: "Progressive internal erosion that opens a pipe-shaped channel under a hydraulic structure." },
              { term: "Inverted filter", definition: "Graded filter placed at a seepage exit that retains the protected soil while passing water freely." },
              { term: "Seepage force", definition: "The drag exerted by flowing water on the soil skeleton, J = i gamma_w V." },
            ],
            examQuestions: [
              {
                q: "Derive the expression for the critical hydraulic gradient and explain the quicksand condition. How do you safeguard a hydraulic structure against piping failure?",
                marks: 7,
                outline: [
                  "Effective stress at depth z under an upward gradient i: sigma' = z(gamma' - i gamma_w).",
                  "Set sigma' = 0: i_cr = gamma'/gamma_w.",
                  "Substitute gamma' = (G - 1)gamma_w/(1 + e) to get i_cr = (G - 1)/(1 + e).",
                  "Numbers: G = 2.67, e = 0.67 give i_cr of about 1.0.",
                  "Quicksand: zero effective stress, boiling, total loss of strength - a condition, not a material.",
                  "Safety: F = i_cr/i_exit of at least 3, with i_exit from the flow net.",
                  "Measures: upstream cutoff, inverted filter, relief drains, apron and berm - with their functions.",
                ],
              },
              {
                q: "Define the quicksand condition. What is the typical value of the critical hydraulic gradient?",
                marks: 2,
              },
              {
                q: "State Terzaghi's filter criteria and explain why both conditions are needed.",
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
      title: "Effective Stress and Compaction",
      summary:
        "The stresses that matter: Terzaghi's principle separating total stress into effective stress and pore pressure, the Boussinesq and Westergaard solutions for loaded half-spaces, the Proctor compaction curve with its optimum moisture content, and the field control that puts laboratory density into an embankment.",
      chapter: {
        number: "04",
        title: "Effective Stress, Stress Distribution and Compaction",
        intro:
          "Unit IV introduces the two stress ideas that run the rest of the subject: Terzaghi's effective stress, computed from layer weights, water tables and seepage, and the elastic stress distribution beneath loaded areas by Boussinesq and Westergaard. It then crosses from stress to improvement: the Proctor compaction curve, the optimum moisture content, the zero-air-voids ceiling, and the rollers and field tests that control density lift by lift.",
        inOneBreath:
          "Terzaghi: sigma = sigma' + u, with sigma' controlling shear strength and compression and u neutral; geostatic profiles come from layer weights and the water table, and seepage shifts sigma' by i gamma_w z; Boussinesq gives sigma_z = (Q/z^2) I_B on a homogeneous elastic half-space (I_B = 0.477 below the load) and Westergaard (I_W = 0.318) for clays reinforced by stiff seams; Proctor curves of gamma_d against w peak at OMC beneath the zero-air-voids ceiling gamma_zav = G gamma_w/(1 + wG); and the field is controlled lift by lift to 95-98 percent of gamma_d,max with sand replacement tests and matched rollers.",
        sections: [
          {
            number: "4.1",
            title: "The principle of effective stress",
            body: [
              "Terzaghi's principle, published in its final form in 1936, is the cornerstone of soil mechanics: the total stress sigma at a point is carried partly by the grain-to-grain contacts and partly by the water in the voids, sigma = sigma' + u. The pore water pressure u is a neutral stress - it pushes equally in all directions, carries no shear, and neither compresses nor strengthens the skeleton. Everything that makes soil soil - its friction, its compression, its failure - responds to the effective stress sigma' alone. Strictly, sigma' is not the true contact stress between grains (contacts are tiny and stressed far higher), but it is the macroscopic stress that governs behaviour, which is all engineering needs.",
              "Computation is layered bookkeeping. The total stress at a depth is the sum of layer weights, sigma = sum(gamma_i z_i), with the unit weight switching from bulk to saturated at the water table. The pore pressure below the water table is hydrostatic, u = gamma_w z_w. Then sigma' = sigma - u. Worked profile: 2 m of sand at gamma = 18 kN/m^3 over 4 m of saturated clay at gamma_sat = 19.5, water table at the surface of the clay: at 6 m depth, sigma = 2(18) + 4(19.5) = 114 kPa, u = 9.81(4) = 39.2 kPa, and sigma' = 74.8 kPa.",
              "Seepage moves the split. Downward flow adds i gamma_w z to the effective stress - the soil stiffens; upward flow subtracts it, and at the critical gradient the subtraction is complete - the quicksand of Unit III. Capillary water carries negative pore pressure above the water table and therefore raises the effective stress, which is why damp sands near a rising excavation stand steeper than dry ones. Every later topic - consolidation settlement, shear strength, earth pressure, bearing capacity - is written in effective stresses, and short-term undrained problems use total stresses only because u is hiding inside the measured c_u.",
            ],
            bullets: [
              "Terzaghi: total stress sigma = effective stress sigma' + pore water pressure u.",
              "u is neutral - it acts equally in all directions and carries no shear.",
              "sigma' controls both shear strength (tau = c' + sigma' tan phi') and compression.",
              "Below the water table u = gamma_w z_w; always sigma' = sigma - u.",
              "Downward seepage raises sigma', upward seepage lowers it toward zero (quicksand).",
              "Capillary water has negative u - it raises effective stress above the water table.",
            ],
            codeExample: {
              language: "python",
              caption: "A stress profile with a water table - the subtraction that defines effective stress.",
              code: `def stress_profile(layers, water_table_depth, z):
    """layers: list of (thickness, gamma); water_table_depth from surface."""
    sigma = 0.0
    depth = 0.0
    for thickness, gamma in layers:
        sigma += thickness * gamma
        depth += thickness
    u = 9.81 * max(0.0, z - water_table_depth)
    return sigma, u, sigma - u

# 2 m sand (gamma = 18.0) over 4 m saturated clay (gamma_sat = 19.5),
# water table at the top of the clay
layers = [(2.0, 18.0), (4.0, 19.5)]
sigma, u, sigma_eff = stress_profile(layers, 2.0, 6.0)

print("total stress sigma =", round(sigma, 1), "kPa")
print("pore pressure u =", round(u, 1), "kPa")
print("effective stress sigma' =", round(sigma_eff, 1), "kPa")

# upward seepage through the clay losing an extra 2.5 kPa of head
print("sigma' with upward seepage =", round(sigma_eff - 2.5, 1), "kPa")`,
            },
            diagram: {
              kind: "layers",
              title: "How total stress splits",
              caption: "The top layer is what is applied; the bottom layer is what the soil feels.",
              layers: [
                { label: "Total stress sigma", note: "overburden plus external loads, carried by the whole mass" },
                { label: "Pore water pressure u", note: "neutral stress: hydrostatic below the water table, no shear" },
                { label: "Effective stress sigma' = sigma - u", note: "grain-to-grain stress: controls strength and compression" },
              ],
            },
            callout: {
              type: "tip",
              title: "Separate the two computations",
              body: "Write sigma = sigma' + u at the top of every answer, then compute sigma and u separately before subtracting. Folding the two into one running line is where nearly all effective-stress errors creep in.",
            },
            keyTerms: [
              { term: "Effective stress", definition: "The intergranular stress sigma' = sigma - u that controls shear strength and volume change." },
              { term: "Pore water pressure", definition: "The pressure of water in the voids; hydrostatic below the water table, negative in the capillary zone." },
              { term: "Total stress", definition: "The total load per unit area from overburden and applied forces." },
            ],
            examQuestions: [
              {
                q: "State Terzaghi's principle of effective stress and explain its significance. Discuss the effect of upward and downward seepage on effective stress.",
                marks: 7,
                outline: [
                  "State sigma = sigma' + u and define each term.",
                  "u is hydrostatic below the water table and carries no shear - the neutral stress.",
                  "sigma' controls shear strength and compression - the rest of soil mechanics follows it.",
                  "Compute a layered profile: sigma = sum(gamma_i z_i), u = gamma_w z_w, sigma' = sigma - u.",
                  "Downward seepage adds i gamma_w z to sigma' - the soil stiffens.",
                  "Upward seepage subtracts; at i_cr = (G - 1)/(1 + e) the effective stress reaches zero - quicksand.",
                  "Significance: consolidation, shear, earth pressure and bearing capacity are all sigma'-based.",
                ],
              },
              {
                q: "Why is pore water pressure called a neutral stress?",
                marks: 2,
              },
              {
                q: "A 4 m depth of saturated sand (gamma_sat = 19.6 kN/m^3) has its water table at the surface. Compute sigma, u and sigma' at the base.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Stress distribution - Boussinesq's theory",
            body: [
              "Footings do not carry their loads straight down; they spread them. Settlement and strength checks both need the stress increase at depth, and the reference solution is Boussinesq's (1885) for a point load Q on an elastic half-space. The assumptions: the soil mass is homogeneous, isotropic, semi-infinite and linearly elastic, and the load is a static point load on the surface. The result: the vertical stress at depth z and radial offset r is sigma_z = (Q/z^2) I_B, with the influence factor I_B = (3/2pi)(1 + (r/z)^2)^(-5/2). Remarkably, the elastic constants E and mu cancel - no soil stiffness is needed.",
              "The influence factor is worth internalising: 0.477 directly below the load (r/z = 0), 0.273 at r/z = 0.5, 0.084 at r/z = 1.0. So a load of 800 kN produces about 95.5 kPa at 2 m directly beneath it, and barely a tenth of that at the same depth 2 m sideways. Joining points of equal sigma_z draws an isobar; the bulb so formed (often the 0.2Q/z^2 contour) encloses the soil that matters for settlement, and about two footing widths below a footing the stress increase has faded below ten percent of the applied pressure - the practical 'significant depth'.",
              "Point loads generalise by superposition and integration. Loaded areas become the sum of many point loads; line loads, strip footings, circular areas (at the centre, sigma_z = q[1 - (1/(1 + (a/z)^2))^(3/2)]) and rectangles have closed forms or influence charts - Newmark's influence chart handles arbitrary shapes by counting squares under the drawn area. The routine for any numerical: convert each load to a point, compute r/z, read or compute I_B, multiply by Q/z^2, and add. The Python table below automates the middle steps.",
            ],
            bullets: [
              "Boussinesq (1885): stress below a point load on a homogeneous, isotropic, linearly elastic half-space.",
              "sigma_z = (Q/z^2) I_B with I_B = (3/2pi)(1 + (r/z)^2)^(-5/2) - no E and no mu appear.",
              "Directly below the load (r/z = 0): I_B = 0.477, so sigma_z is about 0.48 Q/z^2.",
              "At z = 2 m under Q = 800 kN: sigma_z is about 95.5 kPa directly below the load.",
              "Pressure bulb: the chosen-isobar contour enclosing the zone that matters for settlement.",
              "Loaded areas: superpose point loads or use influence charts (Newmark for irregular shapes).",
            ],
            codeExample: {
              language: "python",
              caption: "Boussinesq influence factors and vertical stresses - the table every exam uses.",
              code: `import math

def boussinesq_factor(r_over_z):
    return (3.0 / (2.0 * math.pi)) * (1.0 + r_over_z ** 2) ** -2.5

Q = 800.0   # kN point load
z = 2.0     # m depth

print(" r/z    I_B    sigma_z (kPa)")
for r in [0.0, 0.5, 1.0, 1.5, 2.0]:
    rz = r / z
    IB = boussinesq_factor(rz)
    sigma_z = IB * Q / z ** 2
    print(f"{rz:4.2f}  {IB:5.3f}  {sigma_z:7.2f}")

# stress directly below the load at several depths
print("depth (m)  sigma_z (kPa)")
for zd in [1.0, 2.0, 4.0]:
    print(f"{zd:8.1f}  {boussinesq_factor(0.0) * Q / zd ** 2:9.2f}")`,
            },
            diagram: {
              kind: "flow",
              title: "Boussinesq in five moves",
              caption: "Point-load stress at any depth and offset: compute r/z, find I_B, multiply.",
              steps: [
                { label: "Point load Q on the surface", note: "elastic half-space assumptions" },
                { label: "Target point at depth z, offset r", note: "compute the ratio r/z" },
                { label: "I_B = (3/2pi)(1 + (r/z)^2)^(-5/2)", note: "or read from the table" },
                { label: "sigma_z = I_B x Q/z^2", note: "kPa when Q is in kN and z in m" },
                { label: "Superpose for multiple loads", note: "stress increments simply add" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise three numbers",
              body: "I_B = 0.477 at r/z = 0, 0.273 at 0.5 and 0.084 at 1.0. RGPV numericals rarely provide the table, so the r = 0 case is the favourite - and 0.477 x Q/z^2 should be reflex.",
            },
            keyTerms: [
              { term: "Pressure bulb", definition: "The zone beneath a loaded area enclosed by an isobar of chosen stress intensity." },
              { term: "Influence factor", definition: "The dimensionless multiplier I_B converting Q/z^2 to sigma_z at a given r/z." },
              { term: "Elastic half-space", definition: "The idealised soil medium: homogeneous, isotropic, linearly elastic, infinite in depth and extent." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of Boussinesq's theory and write the expression for the vertical stress at a point due to a surface point load. Explain the pressure bulb concept.",
                marks: 7,
                outline: [
                  "Assumptions: homogeneous, isotropic, semi-infinite, linearly elastic medium; static point load.",
                  "Result: sigma_z = 3Q z^3 / [2 pi (r^2 + z^2)^(5/2)].",
                  "Normalise: sigma_z = (Q/z^2) I_B with I_B = (3/2pi)(1 + (r/z)^2)^(-5/2).",
                  "Note the independence from E and mu - a property worth stating.",
                  "Table values: I_B = 0.477 (r/z = 0), 0.273 (0.5), 0.084 (1.0).",
                  "Pressure bulb: isobars of equal sigma_z; significant depth about two footing widths.",
                  "Extensions: line load, circular and rectangular areas, Newmark's chart; superposition.",
                ],
              },
              {
                q: "State any three assumptions of Boussinesq's theory.",
                marks: 2,
              },
              {
                q: "A 900 kN point load rests on the surface. Compute the vertical stress 3 m directly below it, and at the same depth 3 m horizontally away.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Westergaard's theory and the comparison",
            body: [
              "Boussinesg's uniform half-space is one idealisation; Westergaard's (1938) is the other. Westergaard models a soil reinforced by many thin, closely spaced rigid sheets of negligible compressibility - the physical picture of a clay deposit with continuous seams of sand or silt, such as varved glacial clay. The sheets block lateral deformation, so the medium is anisotropic, and the stress spreads differently: sigma_z = (Q/z^2) I_W with I_W = (1/pi)(1 + 2(r/z)^2)^(-3/2). Directly below the load this gives 0.318 Q/z^2.",
              "The two solutions bracket reality. Near the load axis Westergaard runs about one-third lighter than Boussinesq (0.318 versus 0.477 at r/z = 0; 0.173 versus 0.273 at 0.5); the curves cross near r/z of about 1.5, and beyond it Westergaard gives the larger stress. The practical default is Boussinesq - most deposits are reasonably uniform, and his larger near-axis stresses are the conservative choice for settlement. But when a borehole log shows a thick clay interleaved with stiff seams, Westergaard is the honest model, and some settlement methods for layered clay adopt it explicitly.",
              "The exam answer is the comparison. State each theory's assumptions in a line (Boussinesq: homogeneous, isotropic, free lateral strain; Westergaard: laterally reinforced, zero lateral strain), write both influence factors, quote the two r = 0 values, and note the crossing behaviour. A small table of I_B and I_W at four offsets - reproduced below - turns a vague answer into a complete one; and a numerical that computes both stresses for the same load (say 600 kN at z = 2 m: 71.6 kPa against 47.7 kPa) demonstrates the one-third difference exactly.",
            ],
            bullets: [
              "Westergaard models clay with thin, closely spaced rigid seams (varved clays) - no lateral deformation.",
              "sigma_z = (Q/z^2) I_W with I_W = (1/pi)(1 + 2(r/z)^2)^(-3/2).",
              "At r/z = 0: I_W = 0.318 against Boussinesq's 0.477 - about one-third lower.",
              "The curves cross near r/z of about 1.5; beyond it Westergaard gives the larger stress.",
              "Default choice remains Boussinesq for uniform deposits; switch for clearly stratified clays.",
            ],
            table: {
              caption: "Influence factors compared (stress multiplier at given r/z).",
              headers: ["r/z", "Boussinesq I_B", "Westergaard I_W", "Ratio I_W/I_B"],
              rows: [
                ["0.0", "0.477", "0.318", "0.67"],
                ["0.5", "0.273", "0.173", "0.63"],
                ["1.0", "0.084", "0.061", "0.73"],
                ["2.0", "0.009", "0.012", "1.39"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Boussinesq vs Westergaard",
              caption: "One medium, two idealisations: a uniform elastic half-space against clay sandwiched with rigid seams.",
              left: {
                heading: "Boussinesq (1885)",
                items: [
                  "Homogeneous, isotropic, linearly elastic half-space",
                  "Free lateral deformation",
                  "sigma_z = (3Q/2pi z^2)(1 + (r/z)^2)^(-5/2)",
                  "I_B = 0.477 directly below the load",
                  "Default for most foundation problems",
                ],
              },
              right: {
                heading: "Westergaard (1938)",
                items: [
                  "Clay with thin, rigid, closely spaced seams - varved clays",
                  "No lateral strain (laterally reinforced medium)",
                  "sigma_z = (Q/pi z^2)(1 + 2(r/z)^2)^(-3/2)",
                  "I_W = 0.318 directly below the load - about one-third less",
                  "Use for clearly stratified clay deposits",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Read the deposit",
              body: "When the question says 'saturated clay with thin seams of silt or sand', the expected answer is Westergaard. When it says nothing about layering, use Boussinesq - and write the assumptions either way, since the assumptions line carries its own mark.",
            },
            keyTerms: [
              { term: "Westergaard's theory", definition: "Stress solution for an elastic medium laterally reinforced by thin rigid sheets - stratified clays." },
              { term: "Varved clay", definition: "Glacial clay deposit of alternating thin silt and clay layers." },
              { term: "Isobar", definition: "A contour of equal vertical stress increment in the soil mass." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of Westergaard's theory and compare it with Boussinesq's theory. Which theory suits a varved clay deposit and why?",
                marks: 7,
                outline: [
                  "Westergaard's medium: elastic clay reinforced by thin rigid sheets - zero lateral strain.",
                  "Result: sigma_z = (Q/pi z^2)(1 + 2(r/z)^2)^(-3/2).",
                  "Boussinesq assumptions: homogeneous, isotropic half-space with free lateral strain.",
                  "Compare on the load axis: 0.318 against 0.477 - Westergaard lower by about a third.",
                  "Compare at larger offsets: curves cross near r/z of 1.5; Westergaard higher beyond.",
                  "Varved clay alternates silt and clay seams - Westergaard's idealisation matches it.",
                  "Practical default: Boussinesq unless the deposit is clearly stratified.",
                ],
              },
              {
                q: "Why does Boussinesq's solution not need the elastic constants E and mu of the soil?",
                marks: 2,
              },
              {
                q: "A 600 kN point load acts at the surface. Compare the vertical stress 2 m directly below it by Boussinesq and Westergaard.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Compaction - the Proctor test and OMC",
            body: [
              "Compaction is the cheapest ground improvement there is: mechanically densifying a soil by expelling air at essentially constant water content. The payoff is tripartite - shear strength rises, compressibility falls and permeability drops, which is why every embankment, base course and earthen dam is built by compaction. R. R. Proctor showed in 1933 that for a given compactive effort the achieved dry density depends on the water content: too little water and friction fights the roller; too much and pore water cushions the grains. The curve of gamma_d against w therefore has a peak, and the water content at that peak is the optimum moisture content OMC.",
              "The standard test is prescribed by IS 2720 Part 7: a 1000 cc mould, a 2.6 kg rammer falling 310 mm, soil compacted in 3 layers of 25 blows - about 600 kJ/m^3 of effort. The heavy (modified) Proctor of Part 8 uses a 4.9 kg rammer falling 450 mm, 5 layers and about 2700 kJ/m^3, lifting the peak and shifting OMC to the dry side. The ceiling above the curve is the zero-air-voids line - the dry density at 100 percent saturation, gamma_zav = G gamma_w/(1 + wG), from Se = wG with S = 1. The compaction curve can approach it on the wet side but never touch it, because compaction expels air, not water.",
              "Reading the curve drives the field decisions of the next section. On the dry side of OMC the soil is water-deficient: adding water lubricates the grains and density climbs. On the wet side, additional water only increases the volume of incompressible fluid and the curve falls away nearly parallel to the ZAV line. The dry-side versus wet-side position also changes structure and behaviour: dry-of-optimum clays flocculate and swell more, wet-of-optimum clays disperse and shrink more. For cohesionless fills the Proctor mould is replaced by vibration and the metric becomes relative density, watching for bulking - the capillary apparent cohesion that makes moist sand occupy more volume than dry.",
            ],
            bullets: [
              "Compaction expels air at constant water content - densification, not drainage.",
              "Light Proctor (IS 2720 Part 7): 2.6 kg rammer, 310 mm drop, 3 layers x 25 blows in a 1000 cc mould - about 600 kJ/m^3.",
              "Heavy Proctor (Part 8): 4.9 kg rammer, 450 mm drop, 5 layers - about 2700 kJ/m^3; the peak moves up and left.",
              "OMC: the water content at the peak; gamma_d,max is the corresponding dry unit weight.",
              "Dry side: friction dominates, water lubricates; wet side: pore water and softening flatten the curve.",
              "Zero-air-voids line: gamma_zav = G gamma_w/(1 + wG) - the unreachable 100 percent saturation ceiling.",
              "Cohesionless soils compact best by vibration; watch bulking of moist sands.",
            ],
            codeExample: {
              language: "python",
              caption: "Proctor data to dry densities - and the zero-air-voids line that caps them.",
              code: `GAMMA_W = 9.81  # kN/m^3
G = 2.68

def zav(w):
    # zero-air-voids (S = 100%) dry unit weight at water content w
    return G * GAMMA_W / (1.0 + w * G)

# Proctor observations: (w percent, bulk gamma kN/m^3)
data = [(8.0, 17.4), (10.5, 18.6), (13.0, 19.2),
        (15.5, 18.9), (18.0, 18.1)]

print(" w(%)  gamma_d  gamma_zav")
best = (0.0, 0.0)
for w_pct, gamma in data:
    w = w_pct / 100.0
    gamma_d = gamma / (1.0 + w)
    if gamma_d > best[1]:
        best = (w_pct, gamma_d)
    print(f"{w_pct:5.1f}  {gamma_d:6.2f}  {zav(w):7.2f}")

print("OMC approx", best[0], "percent at gamma_d,max =",
      round(best[1], 2), "kN/m^3")
print("every point must stay below its ZAV value")`,
            },
            diagram: {
              kind: "flow",
              title: "The Proctor test, blow by blow",
              caption: "One mould, five water contents, one curve with a peak.",
              steps: [
                { label: "Take about 3 kg passing 4.75 mm", note: "mix thoroughly with water" },
                { label: "Compact 3 layers x 25 blows", note: "2.6 kg rammer, 310 mm drop" },
                { label: "Trim and weigh the mould", note: "bulk unit weight of the sample" },
                { label: "Take the water content", note: "from the trimmings" },
                { label: "gamma_d = gamma/(1 + w)", note: "plot the point" },
                { label: "Repeat at higher water content", note: "the peak of the curve gives OMC and gamma_d,max" },
              ],
            },
            callout: {
              type: "exam",
              title: "The labelled sketch",
              body: "Draw the compaction curve with the ZAV line slightly above the wet branch, both labelled, axes gamma_d against w, then mark OMC and gamma_d,max. The labelled sketch alone carries three of the seven marks.",
            },
            keyTerms: [
              { term: "OMC", definition: "Optimum moisture content - the water content at which a given compactive effort produces the maximum dry unit weight." },
              { term: "Zero-air-voids line", definition: "The dry unit weight at 100 percent saturation, gamma_zav = G gamma_w/(1 + wG); a compaction curve can approach but never touch it." },
              { term: "Compactive effort", definition: "Energy per unit volume imparted by the rammer; raising it lifts the curve and shifts OMC lower." },
              { term: "Bulking of sand", definition: "Apparent volume increase of moist sand caused by capillary films between grains." },
            ],
            examQuestions: [
              {
                q: "Describe the Proctor compaction test and explain the shape of the compaction curve. Define OMC and the zero-air-voids line.",
                marks: 7,
                outline: [
                  "Purpose of compaction: strength up, compressibility and permeability down.",
                  "Light Proctor procedure per IS 2720 Part 7 with all numbers.",
                  "Compute gamma_d = gamma/(1 + w) at each water content; plot gamma_d against w.",
                  "Explain the peak: dry side needs water as lubricant; wet side loses to pore water.",
                  "Define OMC and gamma_d,max.",
                  "Derive the ZAV line from Se = wG at S = 1: gamma_zav = G gamma_w/(1 + wG).",
                  "Heavy Proctor: higher effort lifts the curve and lowers OMC; state typical uses.",
                ],
              },
              {
                q: "Distinguish between compaction and consolidation.",
                marks: 2,
              },
              {
                q: "A compacted sample has bulk unit weight 19.2 kN/m^3 at w = 14 percent. Compute gamma_d (G = 2.68) and check its position against the zero-air-voids line.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Compaction in the field - control and equipment",
            body: [
              "The laboratory curve becomes a field specification by proportion: compact each lift to 95-98 percent of the laboratory gamma_d,max, at a water content within about two percent of OMC. The transfer needs control at every step. Fills go down in loose lifts of 150-250 mm, each moisture-conditioned and rolled a fixed number of passes, and each tested before the next lift is placed. Equipment must match soil: sheep-foot and padfoot rollers knead clay (their feet walk through the lift and remould it), vibratory rollers shake clean sands into place, pneumatic-tyred rollers knead mixed granular-clay fills, and smooth-wheel rollers finish crushed rock and base courses.",
              "The control tests measure what the roller actually achieved. Sand replacement (IS 2720 Part 28) works on any soil: calibrate the pouring sand's bulk density, dig a small hole in the compacted lift, weigh the excavated wet soil, fill the hole with sand and back-calculate its volume - the in-place bulk unit weight follows, and gamma_d = gamma/(1 + w). The core cutter suits soft, stone-free clays; the rubber balloon method and nuclear density gauges give faster answers on production work; for cohesionless fills the specification switches to relative density (typically 70-85 percent) because Proctor is insensitive for clean sands. Deep deposits need vibro-compaction, stone columns, dynamic compaction or preloading with drains.",
              "Field curves almost always fall below the laboratory curve at equal effort, and the reasons are practical: water is never as uniformly mixed in a 200 mm lift as in a Proctor pan, lifts vary in thickness, and a roller's effort is uneven across the drum. Hence the 95 percent specification rather than a demand for gamma_d,max itself. One more caution: over-rolling a clay wet of optimum raises pore water pressure and can lower strength - the fill ruberrises and becomes rubbery, so more passes are not simply better. The pipeline diagram shows the accept-or-rework loop that a field engineer actually runs, lift after lift.",
            ],
            bullets: [
              "Specification: achieve 95-98 percent of lab gamma_d,max at OMC within about 2 percent - never specify gamma_d alone.",
              "Lifts: 150-250 mm loose thickness; more thin lifts beat one thick lift at the same effort.",
              "Sheep-foot rollers knead clay; vibratory rollers densify sand; pneumatic tyred rollers cover the middle ground.",
              "Sand replacement measures in-place density on any soil; core cutter suits soft, stone-free clays.",
              "For cohesionless fills, control by relative density (target about 70-85 percent), not Proctor.",
              "Over-compacting clay wet of optimum raises pore pressure and can lower strength - stop at the target.",
              "Field curves typically fall below lab curves - uneven mixing, lift thickness and uneven effort are the reasons.",
            ],
            table: {
              caption: "Roller selection guide.",
              headers: ["Equipment", "Best soil", "Action"],
              rows: [
                ["Smooth-wheel roller", "crushed rock, gravel, base courses", "static pressure; also finishing passes"],
                ["Sheep-foot / padfoot roller", "clay, silty clay", "kneading; feet walk through the lift"],
                ["Pneumatic-tyred roller", "mixed granular-clay fills", "kneading under rubber tyres"],
                ["Vibratory roller", "clean sand, gravel", "cyclic shaking settles the grains"],
                ["Vibrating plate / hand tamper", "trenches, against structures", "localised compaction"],
                ["Vibro-compaction / stone columns", "deep loose sand", "densifies at depth with vibration and backfill"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Field compaction control loop",
              caption: "Each lift repeats the loop - test, judge, accept or rework.",
              stages: [
                { label: "Condition the borrow", note: "bring the fill to OMC within 2 percent" },
                { label: "Spread a loose lift", note: "150-250 mm" },
                { label: "Compact with the matched roller", note: "a fixed number of passes" },
                { label: "Test density and water content", note: "sand replacement, nuclear gauge" },
                { label: "Accept or rework", note: "95 percent of gamma_d,max, or re-compact" },
              ],
            },
            callout: {
              type: "warning",
              title: "The standing two-mark trap",
              body: "'Why is field dry density lower than the lab maximum even with more total energy?' Answer: non-uniform water distribution, thicker lifts and uneven effort across the drum - which is precisely why specifications ask for 95-98 percent, not the peak.",
            },
            keyTerms: [
              { term: "Relative compaction", definition: "Field dry density expressed as a percentage of the laboratory maximum: gamma_d,field/gamma_d,max x 100." },
              { term: "Sand replacement test", definition: "In-place density test: excavate a hole, fill it with calibrated sand, back-calculate the volume." },
              { term: "Lift", definition: "One compacted layer of fill; a fill is built lift by lift." },
              { term: "Vibro-compaction", definition: "Deep densification of sands by a vibrating probe, often with stone backfill (stone columns)." },
            ],
            examQuestions: [
              {
                q: "How is compaction controlled in the field? Describe the sand replacement method of in-place density determination and list the equipment used for compacting different soils.",
                marks: 7,
                outline: [
                  "Specification: percent of gamma_d,max at OMC within 2 percent; per-lift testing.",
                  "Sand replacement: calibrate the sand's bulk density; dig the hole; weigh the wet soil; fill with sand.",
                  "Hole volume = mass of sand in the hole / sand bulk density; field gamma = soil weight / volume.",
                  "gamma_d = gamma/(1 + w); compare with 95-98 percent of gamma_d,max.",
                  "Equipment: sheep-foot (clay), vibratory (sand), pneumatic (mixed), smooth-wheel (rock, finishing).",
                  "Deep methods: vibro-compaction, stone columns, dynamic compaction, preloading with drains.",
                  "Accept-or-rework loop; over-rolling wet clay is counterproductive.",
                ],
              },
              {
                q: "Why is a vibratory roller preferred for compacting clean sands?",
                marks: 2,
              },
              {
                q: "State four reasons why field dry densities fall short of the laboratory maximum.",
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
      title: "Shear Strength and Earth Pressure",
      summary:
        "How soil fails and how it pushes: the Mohr-Coulomb criterion, the direct shear, triaxial and vane tests, Rankine and Coulomb earth pressure for walls that yield or are pushed, and Taylor's stability charts that put a factor of safety on a finite slope in one lookup.",
      chapter: {
        number: "05",
        title: "Mohr-Coulomb, Strength Tests, Earth Pressure and Slope Stability",
        intro:
          "Unit V is the design unit: the Mohr-Coulomb failure criterion and its total and effective stress forms, the laboratory tests that measure c and phi - direct shear, triaxial with its UU, CU and CD drainage conditions, and the vane for soft clays - then the earth pressure problem from Rankine's stress fields through Coulomb's wedges, and slope stability from infinite-slope formulas to Taylor's stability number charts.",
        inOneBreath:
          "Mohr-Coulomb: tau_f = c' + sigma' tan phi', with failure when the Mohr circle touches the envelope on a plane at 45 + phi/2 from the major principal plane; the direct shear box is quick but forces the failure plane, the triaxial cell controls drainage (UU gives Su, CU and CD give c' and phi'), and the vane gives tau = T/[pi D^2(H/2 + D/6)] for soft clays; walls that yield away feel Ka = (1 - sin phi)/(1 + sin phi) and walls pushed in feel Kp = 1/Ka, with Coulomb's trial wedges adding wall friction delta; and slopes are judged by F = tan phi/tan beta on infinite slopes or by Taylor's stability number Sn = c/(gamma H F) for finite ones.",
        sections: [
          {
            number: "5.1",
            title: "The Mohr-Coulomb failure criterion",
            body: [
              "Soils fail in shear. Coulomb's 1776 observation: the shear stress a soil can resist on a plane grows linearly with the normal stress on that plane, tau_f = c + sigma_n tan phi - an intercept c (the cohesion) and a slope phi (the angle of internal friction, from interlocking and sliding between grains). Mohr generalised the idea: failure occurs when the shear stress reaches a function of the normal stress, tau_f = f(sigma), and the Coulomb line is the linear version of that failure envelope. In effective-stress form - the one Terzaghi's principle demands - the criterion reads tau_f = c' + sigma' tan phi'.",
              "The Mohr circle turns the criterion into a picture. A soil element with principal stresses sigma1 and sigma3 is a circle of centre (sigma1 + sigma3)/2 and radius (sigma1 - sigma3)/2; increasing the deviator stress grows the circle until it just touches the envelope - that is failure. The tangency point gives the stresses on the failure plane, which lies at 45 + phi/2 from the plane of sigma1. Working the geometry gives the principal stress relation at failure: sigma1 = sigma3 tan^2(45 + phi/2) + 2c tan(45 + phi/2) - the basis of bearing capacity theory. For a saturated clay sheared undrained, the envelope is horizontal: phi = 0 and tau_f = c_u, the undrained strength.",
              "Typical parameters calibrate intuition. Clean sands: c = 0, phi of about 28 degrees loose to 45 dense. Normally consolidated clays: c' near zero, phi' of 20 to 28 degrees. Overconsolidated clays: c' of 10 to 25 kPa with phi' of 22 to 30 degrees - the cohesion intercept is a preconsolidation bonus, not a cementation. The analysis choice mirrors drainage: short-term (end of construction, saturated clay) uses total stresses with c_u; long-term or drained conditions use c' and phi'. Naming the analysis before drawing circles is not a formality - it decides which parameters the whole answer uses.",
            ],
            bullets: [
              "Coulomb: tau_f = c + sigma_n tan phi - a cohesion intercept c and a friction angle phi.",
              "Mohr-Coulomb in effective stress: tau_f = c' + sigma' tan phi' - the form for drained analysis.",
              "Failure occurs when the Mohr circle just touches the envelope.",
              "Failure plane orientation: 45 + phi/2 from the major principal plane.",
              "At failure: sigma1 = sigma3 tan^2(45 + phi/2) + 2c tan(45 + phi/2).",
              "Saturated clay sheared undrained: the phi = 0 analysis with tau_f = c_u.",
              "Typical: dense sand phi of 38-45 degrees, loose sand 28-33; NC clay phi' of 20-28 with c' near zero.",
            ],
            table: {
              caption: "Typical effective strength parameters.",
              headers: ["Soil", "c' (kPa)", "phi' (degrees)", "Drained behaviour"],
              rows: [
                ["Clean dense sand", "0", "38-45", "dilates before failure"],
                ["Loose sand", "0", "28-33", "contracts to failure"],
                ["Normally consolidated clay", "near 0", "20-28", "large strains to peak"],
                ["Overconsolidated clay", "10-25", "22-30", "brittle past peak"],
                ["Compacted clay fill", "5-20", "28-35", "depends on moulding water content"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Reading failure off the Mohr diagram",
              caption: "Draw the circle, slide it until it touches the envelope - that is failure.",
              steps: [
                { label: "Envelope: tau = c' + sigma' tan phi'", note: "from three or more tests" },
                { label: "Plot the Mohr circle", note: "centre (sigma1 + sigma3)/2, radius (sigma1 - sigma3)/2" },
                { label: "Circle touches the envelope", note: "the failure condition" },
                { label: "Tangency point: stresses on the failure plane", note: "the normal and shear stress at failure" },
                { label: "Failure plane at 45 + phi/2", note: "from the major principal plane" },
                { label: "Predict sigma1 from sigma3", note: "using tan^2(45 + phi/2)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the analysis",
              body: "Always write which analysis you are using - total stress (phi = 0, c_u) or effective stress (c', phi') - before drawing circles. RGPV marking schemes award a dedicated mark for naming the drainage condition.",
            },
            keyTerms: [
              { term: "Shear strength", definition: "The maximum shear stress the soil can sustain before failing along a plane." },
              { term: "Cohesion", definition: "The intercept c of the failure envelope - the shear strength at zero normal stress." },
              { term: "Angle of internal friction", definition: "The slope angle phi of the Mohr-Coulomb envelope, from interlocking and sliding friction." },
              { term: "Failure envelope", definition: "The locus of shear and normal stresses at failure; linear in the Mohr-Coulomb model." },
            ],
            examQuestions: [
              {
                q: "State the Mohr-Coulomb failure criterion in total and effective stress forms, explain the physical meaning of c and phi, and describe how a failure envelope is obtained from triaxial tests.",
                marks: 7,
                outline: [
                  "Failure occurs in shear when tau reaches tau_f = f(sigma).",
                  "Coulomb: tau_f = c + sigma tan phi; Mohr: a general envelope; the linear case is Mohr-Coulomb.",
                  "c - cohesion (bonding, attraction); phi - friction (interlock + sliding).",
                  "Effective form tau_f = c' + sigma' tan phi' via Terzaghi's principle.",
                  "Undrained saturated clay: the total stress form with phi = 0 and tau_f = c_u.",
                  "Envelope from three triaxial specimens at different cell pressures: circles plus a common tangent.",
                  "Failure plane at 45 + phi/2; the principal stress relation at failure.",
                ],
              },
              {
                q: "Distinguish between the total stress and effective stress analyses of shear strength.",
                marks: 2,
              },
              {
                q: "A direct shear test on a dry sand gives a normal stress of 100 kPa and a failure shear stress of 62 kPa. Compute phi. What is c for this soil?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Measuring strength - direct shear, triaxial and vane",
            body: [
              "The direct shear test (IS 2720 Part 13) is the oldest and quickest: a soil block in a box split horizontally, a normal load on top, and a shear force jacked along the split until the soil fails on the forced horizontal plane. Its virtues are speed and a short drainage path - the thin sample drains quickly, so drained tests on sand are easy. Its vices are the forced failure plane (which need not be the weakest), a non-uniform stress distribution across that plane, and no possibility of measuring pore pressure.",
              "The triaxial test (Part 11) fixes those faults. A cylindrical specimen - commonly 38 mm diameter and 76 mm long - sits in a rubber membrane inside a pressure cell; the cell pressure sigma3 is the minor principal stress, and an axial deviator load adds to it until failure, letting the failure plane choose itself. Drainage is fully controlled, which generates the three standard variants: UU (unconsolidated undrained - no drainage at any stage; a saturated clay gives the undrained strength Su and identical circles, the phi = 0 case), CU (consolidated undrained - consolidate under the cell pressure, then shear with drainage closed while measuring pore pressure; yields both total and effective parameters) and CD (consolidated drained - drainage open throughout; c' and phi' directly, but slowly for clay). Three specimens at different cell pressures give three circles; their common tangent is the envelope.",
              "The vane shear test serves the soils neither machine can trim: soft, sensitive, saturated clays. A four-bladed rectangular vane of diameter D and height H (often H = 2D) is pushed in and rotated at about 0.1 degree per second; the torque T at failure mobilises shear on the cylinder the blades swept, and with shear assumed uniform on the sides and ends, tau_f = T/[pi D^2(H/2 + D/6)]. The field vane logs Su against depth from a borehole - with a reduction factor applied for embankment design on plastic clays - and for a quick lab check the unconfined compression test gives Su = qu/2 for saturated clay.",
            ],
            bullets: [
              "Direct shear: quick, cheap, a forced horizontal failure plane, uncontrolled drainage - best for drained tests on sand.",
              "Triaxial: uniform stresses, a free failure plane, pore pressure and volume change measurable - the reference test.",
              "UU: no drainage at any stage - gives the undrained strength Su of saturated clay (phi = 0 circles).",
              "CU: consolidate under cell pressure, shear undrained while measuring u - total and effective envelopes from one test.",
              "CD: fully drained - c' and phi' directly; a slow test for clay.",
              "Vane: tau_f = T/[pi D^2(H/2 + D/6)] for soft, sensitive clays; Su = qu/2 from the unconfined test.",
            ],
            table: {
              caption: "Triaxial drainage conditions.",
              headers: ["Test", "Drainage in consolidation", "Drainage in shear", "Parameters obtained"],
              rows: [
                ["UU", "no", "no", "Su (undrained strength)"],
                ["CU", "yes", "no", "c and phi (total) plus c' and phi' via measured u"],
                ["CD", "yes", "yes", "c' and phi' directly"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Direct shear vs triaxial",
              caption: "The old box against the modern cell - what each can and cannot tell you.",
              left: {
                heading: "Direct shear",
                items: [
                  "Failure plane forced horizontal",
                  "Non-uniform stress across the plane",
                  "Short drainage path - suits drained tests on sand",
                  "No pore pressure measurement",
                  "Quick, cheap and simple",
                ],
              },
              right: {
                heading: "Triaxial",
                items: [
                  "Failure plane develops where the soil is weakest",
                  "Uniform stresses on the specimen",
                  "Drainage fully controlled; pore pressure measured",
                  "Su, c' and phi' all obtainable",
                  "Needs time, skill and a loading frame",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The vane formula",
              body: "Memorise tau_f = T/[pi D^2(H/2 + D/6)] with the assumption of uniform shear on the sides and the ends of the swept cylinder. If the ends are assumed not to shear, the last term changes - so always state the assumption you are using.",
            },
            keyTerms: [
              { term: "Deviator stress", definition: "The additional axial stress applied on top of the cell pressure in a triaxial test." },
              { term: "Cell pressure", definition: "The all-round confining pressure sigma3 in the triaxial cell." },
              { term: "Vane shear test", definition: "Torsion test on soft clay giving the undrained strength from the measured failure torque." },
              { term: "Unconfined compression test", definition: "Axial test at zero confining pressure; qu is twice the undrained strength of saturated clay." },
            ],
            examQuestions: [
              {
                q: "Explain the triaxial compression test. Describe the UU, CU and CD tests and state the parameters each provides. How are c and phi determined from the results?",
                marks: 7,
                outline: [
                  "Apparatus: specimen in a rubber membrane inside a pressure cell.",
                  "Stages: apply cell pressure sigma3, then add the deviator stress to failure.",
                  "UU: no drainage at any stage; saturated clay gives one Su - identical circles, phi = 0.",
                  "CU: consolidate, then shear undrained with pore pressure measurement.",
                  "CD: drainage open throughout; effective parameters c' and phi' directly.",
                  "Run at least three specimens at different sigma3 and plot the Mohr circles.",
                  "The common tangent is the envelope: read c from the intercept and phi from the slope; correct CU circles with measured u for the effective envelope.",
                ],
              },
              {
                q: "Write the expression used to compute shear strength from a vane shear test, defining the symbols.",
                marks: 2,
              },
              {
                q: "Give three advantages of the triaxial test over the direct shear test.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Rankine's earth pressure theory",
            body: [
              "A retaining wall is caught between two soil states. Rankine (1857) computed both from the stress field of a semi-infinite mass brought to plastic equilibrium. His assumptions: the backfill is homogeneous, isotropic, cohesionless and level; the wall is vertical and smooth (no wall friction); and the wall moves enough to mobilise the soil. If the wall yields away, the soil expands behind it - the active state, and the horizontal pressure falls to its minimum: Ka = (1 - sin phi)/(1 + sin phi) = tan^2(45 - phi/2). If the wall is pushed into the backfill, the soil compresses - the passive state, Kp = tan^2(45 + phi/2) = 1/Ka. A wall that cannot move at all carries the at-rest pressure, K0 = 1 - sin phi (Jaky).",
              "The pressure distribution is the drawing that earns the marks. Active pressure grows linearly with depth, p = Ka gamma z, reaching Ka gamma H at the base; the resultant thrust is Pa = 0.5 Ka gamma H^2 per metre run of wall, acting at H/3 above the base. The passive diagram mirrors it. A surcharge q adds a uniform rectangle of Ka q over the full height. A submerged backfill switches to gamma' below the water table and adds the full hydrostatic water pressure on top - the double-count error here is the classic slip. In a cohesive backfill the active diagram goes into tension near the top, p = Ka gamma z - 2c sqrt(Ka), down to the crack depth z0 = 2c/(gamma sqrt(Ka)); the tension zone is ignored, and cracks may fill with water.",
              "Numbers anchor the theory. For phi = 34 degrees: sin 34 = 0.559, so Ka = 0.283, Kp = 3.54 and K0 = 0.441. With gamma = 18.5 kN/m^3 and H = 5 m, Pa = 0.5 x 0.283 x 18.5 x 25 = 65.4 kN per metre, acting at 1.67 m above the base. The movement magnitudes matter in design: active pressure needs only about 0.001 to 0.005 of the wall height of outward yield, while passive resistance may need 0.05 H of inward movement to mobilise - which is why designers discount passive pressure in front of walls that barely move.",
            ],
            bullets: [
              "Rankine assumes: homogeneous, isotropic, cohesionless, level backfill, vertical smooth wall, plastic equilibrium.",
              "Ka = (1 - sin phi)/(1 + sin phi) = tan^2(45 - phi/2); Kp is its reciprocal.",
              "At rest: K0 = 1 - sin phi (Jaky) - for walls that do not move.",
              "Active pressure triangle: p_z = Ka gamma z; Pa = 0.5 Ka gamma H^2 per metre at H/3 above the base.",
              "A surcharge q adds a uniform Ka q over the full height (a rectangle on the diagram).",
              "With a water table: use gamma' below it and add the full hydrostatic water pressure separately.",
              "Cohesive backfill: tension cracks to depth z0 = 2c/(gamma sqrt(Ka)); the cracked zone is ignored.",
            ],
            codeExample: {
              language: "python",
              caption: "Rankine coefficients and thrusts for a 5 m wall with phi = 34 degrees.",
              code: `import math

def rankine_coeffs(phi_deg):
    phi = math.radians(phi_deg)
    Ka = (1 - math.sin(phi)) / (1 + math.sin(phi))
    Kp = (1 + math.sin(phi)) / (1 - math.sin(phi))
    K0 = 1 - math.sin(phi)
    return Ka, Kp, K0

phi = 34.0
gamma, H = 18.5, 5.0   # kN/m^3, m
Ka, Kp, K0 = rankine_coeffs(phi)

Pa = 0.5 * Ka * gamma * H ** 2      # per metre run
Pp = 0.5 * Kp * gamma * H ** 2

print("Ka =", round(Ka, 3), " Kp =", round(Kp, 3),
      " K0 =", round(K0, 3))
print("active thrust Pa =", round(Pa, 1), "kN/m")
print("acting at H/3 =", round(H / 3, 2), "m above the base")
print("passive resistance Pp =", round(Pp, 1), "kN/m")
print("base pressure = Ka*gamma*H =",
      round(Ka * gamma * H, 1), "kPa")`,
            },
            diagram: {
              kind: "fork",
              title: "Wall movement decides the pressure",
              caption: "The same backfill pushes three very different loads, depending only on how the wall moves.",
              start: "How does the retaining wall move?",
              branches: [
                {
                  label: "Yields away from the backfill",
                  outcome: "ACTIVE state: the wedge expands, Ka = (1 - sin phi)/(1 + sin phi); the thrust is the minimum, needing only about 0.002 H of movement",
                  good: true,
                },
                {
                  label: "Perfectly rigid, no movement",
                  outcome: "AT REST state: K0 = 1 - sin phi; no shear is mobilised in the backfill - the design case for basement walls braced at both levels",
                  good: true,
                },
                {
                  label: "Pushed into the backfill",
                  outcome: "PASSIVE state: the wedge compresses, Kp = (1 + sin phi)/(1 - sin phi); the resistance is the maximum but needs roughly 0.05 H of movement",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The diagram is the answer",
              body: "The pressure diagram earns marks on its own: draw the triangle, mark p = Ka gamma H at the base, and label the resultant Pa = 0.5 Ka gamma H^2 acting at H/3. For every extra condition - surcharge, water table, cohesion - draw a second diagram beside the first.",
            },
            keyTerms: [
              { term: "Active earth pressure", definition: "The minimum thrust on a wall that has yielded away from the backfill." },
              { term: "Passive earth pressure", definition: "The maximum resistance mobilised when a wall is pushed into the soil." },
              { term: "Coefficient of earth pressure at rest", definition: "K0 = 1 - sin phi; the ratio of horizontal to vertical effective stress with no lateral strain." },
              { term: "Tension crack", definition: "The near-surface zone of a cohesive backfill where theory gives tensile pressure; depth z0 = 2c/(gamma sqrt(Ka))." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of Rankine's theory and derive the coefficient of active earth pressure for a cohesionless backfill. Draw the active pressure diagram for a 5 m wall with phi = 34 degrees and gamma = 18.5 kN/m^3.",
                marks: 7,
                outline: [
                  "Assumptions: semi-infinite, homogeneous, isotropic, cohesionless, level backfill; vertical, smooth wall; wall yields to plastic equilibrium.",
                  "At a point: vertical stress sigma_v = gamma z; on the verge of failure the Mohr circle touches the envelope.",
                  "Ka = sigma_h/sigma_v = (1 - sin phi)/(1 + sin phi) = tan^2(45 - phi/2).",
                  "The pressure grows linearly: p = Ka gamma z, reaching Ka gamma H at the base.",
                  "Resultant Pa = 0.5 Ka gamma H^2 acting at H/3 above the base.",
                  "Numbers: sin 34 = 0.559, Ka = 0.283; Pa = 0.5 x 0.283 x 18.5 x 25 = 65.4 kN/m.",
                  "Draw and label the triangular diagram; contrast Kp = 1/Ka and K0 = 1 - sin phi.",
                ],
              },
              {
                q: "Define the coefficient of earth pressure at rest and give Jaky's expression.",
                marks: 2,
              },
              {
                q: "A 4 m high wall retains sand with gamma = 18 kN/m^3 and phi = 30 degrees. Compute the active thrust per metre run and its point of application.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Coulomb's wedge theory",
            body: [
              "Coulomb solved the earth pressure problem eighty years before Rankine, in 1773, with a free-body argument that is still the most teachable in mechanics. Consider the whole wedge of soil above a trial plane through the heel of the wall. Three forces act on it: its weight W, the reaction P from the wall (inclined at the wall friction angle delta from the wall normal), and the reaction R on the trial plane (inclined at phi, the friction angle of the soil). If the wedge is in limiting equilibrium, the triangle of forces closes, and P scales off. The active thrust is the maximum P over all trial planes; the passive resistance is the minimum.",
              "The trial wedge procedure: draw the wall and backfill to scale, pick a candidate failure plane (start near 45 + phi/2 from the horizontal), compute the wedge weight, draw the force triangle with the known directions of P and R, scale off P, and repeat for four to six planes. Plotting P against the wedge angle gives the peak - the active thrust - which acts at H/3 above the base, inclined at delta to the wall normal: for the active case the thrust presses downward into the wall, a vertical component that helps bearing. Closed-form graphics (Rebhann's and Poncelet's constructions) locate the peak without the trials, and for a vertical wall with level backfill the analytic result is Ka = cos^2 phi/[cos delta (1 + sqrt(sin(phi + delta) sin phi / cos delta))^2] - which collapses exactly to Rankine's Ka when delta = 0.",
              "The comparison with Rankine is a standing exam question, and the table below is the answer. Coulomb handles what Rankine ignores - wall friction, battered wall backs, sloping backfill and surcharge on the wedge - at the cost of an assumed planar failure surface. That assumption is honest for the active case and badly wrong for the passive: a wall pushing soil fails along a curved (log-spiral) surface, so Coulomb's passive coefficients overestimate the true resistance, and passive design should use log-spiral solutions or generous reduction.",
            ],
            bullets: [
              "Coulomb treats the soil above a trial plane as one rigid wedge - a free-body problem, not a stress field.",
              "Three forces on the wedge: its weight W, the wall reaction P at delta, and the soil reaction R at phi.",
              "Active thrust = the maximum P over all trial wedges; passive resistance = the minimum.",
              "Handles wall friction delta, battered walls and sloping backfill - everything Rankine ignores.",
              "Vertical wall, level fill: Ka = cos^2 phi/[cos delta (1 + sqrt(sin(phi + delta) sin phi / cos delta))^2]; delta = 0 recovers Rankine.",
              "Active thrust acts at delta below the wall normal (a downward component on the wall); passive above it.",
              "Coulomb passive Kp overestimates - use curved log-spiral surfaces for passive design.",
            ],
            table: {
              caption: "Rankine vs Coulomb.",
              headers: ["Aspect", "Rankine (1857)", "Coulomb (1773)"],
              rows: [
                ["Wall friction", "ignored (smooth wall)", "included as delta"],
                ["Wall back", "vertical", "any batter allowed"],
                ["Backfill surface", "horizontal", "sloping allowed"],
                ["Failure surface", "plane, from the stress field", "plane, assumed per trial wedge"],
                ["Method", "plastic equilibrium of a semi-infinite mass", "free body of a trial wedge"],
                ["Passive estimate", "reasonable", "overestimates - use a log-spiral surface"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The trial wedge method",
              caption: "Guess the plane, close the force triangle, scale P - repeat until P peaks.",
              steps: [
                { label: "Draw wall and backfill to scale", note: "include any surcharge" },
                { label: "Pick a trial failure plane", note: "start near 45 + phi/2 from the horizontal" },
                { label: "Compute the wedge weight W", note: "area x gamma, plus surcharge" },
                { label: "Draw the force triangle", note: "W vertical; P at delta to the wall normal; R at phi to the plane" },
                { label: "Scale off P", note: "repeat for 4-6 trial planes" },
                { label: "Peak of P against wedge angle", note: "the peak value is the active thrust Pa" },
              ],
            },
            callout: {
              type: "warning",
              title: "Friction directions decide everything",
              body: "In Coulomb problems, fix the force directions before any arithmetic: the active wedge slides down and out, so wall friction on the wedge acts upward - which means the thrust on the wall is inclined downward from the normal. A reversed friction assumption lands the numerical on the wrong side of the answer.",
            },
            keyTerms: [
              { term: "Wall friction", definition: "The friction angle delta mobilised between the backfill and the back of the wall." },
              { term: "Trial wedge", definition: "Assumed soil wedge above a candidate failure plane, analysed as a free body in Coulomb's method." },
              { term: "Rebhann's construction", definition: "Graphical construction that locates the active thrust without trial-and-error." },
            ],
            examQuestions: [
              {
                q: "Explain Coulomb's wedge theory for active earth pressure. State its assumptions and compare it with Rankine's theory.",
                marks: 7,
                outline: [
                  "Concept: the whole wedge above a trial plane as a free body.",
                  "Assumptions: planar failure surface, dry cohesionless soil, wall friction delta, a rigid wedge.",
                  "Forces: W (weight), P (wall reaction at delta to the normal), R (soil reaction at phi to the plane).",
                  "Trial wedge procedure: several planes; the maximum P is the active thrust.",
                  "Give Ka for a vertical wall with level backfill; show that delta = 0 reduces it to Rankine.",
                  "Comparison: wall friction, batter, sloping backfill - Coulomb general, Rankine simpler.",
                  "Caution: Coulomb's passive overestimates; use log-spiral surfaces for passive design.",
                ],
              },
              {
                q: "What is wall friction, and how does it change the direction of the active thrust on a wall?",
                marks: 2,
              },
              {
                q: "Explain, with a neat sketch, the trial wedge graphical procedure for determining active earth pressure.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Slope stability and Taylor's charts",
            body: [
              "Slopes fail in shear: gravity drives, strength resists, and the factor of safety is their ratio - F = tau_f/tau_mobilised, or for a circular slip, the ratio of resisting to overturning moments about the centre. Two geometries organise the subject. An infinite slope - long and uniform, with a failure surface parallel to the ground at depth z - yields to a one-line analysis: in cohesionless soil F = tan phi/tan beta, independent of depth. In a c-phi soil, F = c'/(gamma z cos^2 beta tan beta) + tan phi'/tan beta; with seepage parallel to the surface, the friction term shrinks roughly to the gamma'/gamma_sat share - about half.",
              "Finite slopes - embankments, cuts, spoil heaps - fail along curves, usually circles in homogeneous clay, and are analysed by trial. The Swedish slip circle method (method of slices) slices the assumed failure mass, computes each slice's weight, and sums moments: F = [c'L + sum(W cos alpha) tan phi] / sum(W sin alpha) for a simple total-stress analysis, with the effective-stress version subtracting pore pressure on the slip surface. The critical circle is the one that minimises F, found by trying centres on a grid. Failure modes carry their own names: rotational slips (toe, slope and base circles), translational slides along weak seams, wedge failures in jointed ground, and flow slides in liquefying sand.",
              "Taylor's 1937 charts compress the whole business into one lookup. The stability number Sn = c/(gamma H F) depends only on the slope angle beta, the friction angle phi and the depth factor; for a phi = 0 soil with beta below 53 degrees, the critical circle passes below the toe and Sn takes its maximum value of 0.181. The chart is used two ways: given the slope and soil, read Sn and compute F = c/(gamma H Sn); or set F = 1 and read off the critical height H_c = c/(gamma Sn). Worked check: a 40 degree cut, 6 m deep, in saturated clay with c = 30 kPa and gamma = 19 kN/m^3 gives F = 30/(19 x 6 x 0.181) = 1.45, and H_c = 30/(19 x 0.181) = 8.7 m - safe, but with little margin in a long-service cut.",
            ],
            bullets: [
              "Factor of safety F = tau_f/tau_mobilised, or resisting/driving moments about the circle centre.",
              "Infinite cohesionless slope: F = tan phi/tan beta - depth and geometry drop out entirely.",
              "Infinite c-phi slope: F = c'/(gamma z cos^2 beta tan beta) + tan phi'/tan beta.",
              "Seepage parallel to the surface roughly halves the friction term (the gamma'/gamma_sat share).",
              "Swedish slip circle: slice the assumed circle, sum the moments, try circles until F is minimal.",
              "Taylor's stability number: Sn = c/(gamma H F); for phi = 0 and beta below 53 degrees, Sn = 0.181.",
              "Use the chart both ways: F = c/(gamma H Sn), or the critical height H_c = c/(gamma Sn) at F = 1.",
            ],
            table: {
              caption: "Slope failure modes.",
              headers: ["Mode", "Surface", "Typical setting"],
              rows: [
                ["Rotational slip", "circular arc (toe, slope or base circle)", "homogeneous clay fills and cuts"],
                ["Translational slide", "planar, along a weak seam", "slope on bedrock or a silt seam"],
                ["Wedge failure", "two or three planes", "jointed rock slopes"],
                ["Flow slide", "mass moves as a fluid", "loose saturated sand, tailings dams"],
                ["Creep", "slow continuous strain", "stiff fissured clays"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Using Taylor's stability chart",
              caption: "From slope angle and strength to a factor of safety in four moves.",
              steps: [
                { label: "Assemble the inputs", note: "beta, phi, c, gamma and H" },
                { label: "Enter the chart with beta and phi", note: "use the dashed deep-circle curves when the slip dips below the toe" },
                { label: "Read the stability number Sn", note: "Sn = c/(gamma H F)" },
                { label: "Solve for F", note: "F = c/(gamma H Sn)" },
                { label: "Or find the critical height", note: "H_c = c/(gamma Sn) at F = 1" },
              ],
            },
            callout: {
              type: "tip",
              title: "The magic number",
              body: "For phi = 0 slopes remember 0.181 - the maximum stability number, valid whenever beta is below 53 degrees. It converts a chart question into a one-line numerical, and examiners know exactly who has memorised it.",
            },
            keyTerms: [
              { term: "Infinite slope", definition: "A slope whose failure surface is parallel to and deep compared with its length scale - analysed with a single element." },
              { term: "Stability number", definition: "Taylor's dimensionless group Sn = c/(gamma H F), read from charts for a given slope angle and phi." },
              { term: "Swedish slip circle method", definition: "Method of slices computing the factor of safety of a trial circular surface from moment equilibrium." },
              { term: "Toe circle", definition: "A failure circle that exits at the toe of the slope." },
            ],
            examQuestions: [
              {
                q: "Explain Taylor's stability number and its use in the analysis of finite slopes. A cut in saturated clay (c = 30 kPa, gamma = 19 kN/m^3) has a 40 degree slope 6 m deep. Find the factor of safety.",
                marks: 7,
                outline: [
                  "Define F for slopes: available over mobilised strength, or resisting over driving moments.",
                  "Taylor's chart inputs: beta, phi and the depth factor; output Sn.",
                  "Sn = c/(gamma H F) - a dimensionless group.",
                  "phi = 0 case: beta = 40 is below 53 degrees, so Sn = 0.181 with a circle passing below the toe.",
                  "F = c/(gamma H Sn) = 30/(19 x 6 x 0.181).",
                  "Compute: the denominator is 20.6, so F is about 1.45.",
                  "State the critical height H_c = c/(gamma Sn) of about 8.7 m - safe but with limited margin.",
                ],
              },
              {
                q: "Define the stability number as per Taylor.",
                marks: 2,
              },
              {
                q: "Show that the factor of safety of an infinite slope in cohesionless soil is F = tan phi/tan beta.",
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
      heading: "Exam weightage - where the marks are",
      body: [
        "RGPV CE-701 papers load 60-70 of the marks onto numerical-heavy territory - phase relations, permeability, flow nets, effective stress, Boussinesq, compaction, shear strength and earth pressure - with classification and soil structure supplying the definitional short questions that open nearly every paper. Allocate revision hours in roughly the ratios below, and keep one full practice slot per unit whatever its weight.",
      ],
      weightedTopics: [
        { topic: "Phase relationship numericals (e, n, S, w, G, unit weights)", weight: "8-12 marks", note: "Almost guaranteed; assume Vs = 1, tabulate volumes and weights, then divide." },
        { topic: "Atterberg limits and consistency indices", weight: "6-8 marks", note: "LL/PL determination plus PI, LI, CI; one plasticity-chart classification is near-certain." },
        { topic: "Grain size distribution and IS classification", weight: "6-10 marks", note: "Sieve table, Cu and Cc computation, A-line plot; practise five full classifications." },
        { topic: "Permeability: Darcy, lab tests, pumping, stratified soils", weight: "8-12 marks", note: "Falling head and pumping-out derivations; equivalent k numericals." },
        { topic: "Flow nets", weight: "7-10 marks", note: "Draw the net, count Nf and Nd, compute q and uplift; the sketch carries most marks." },
        { topic: "Effective stress and quicksand", weight: "6-10 marks", note: "sigma - u profiles with water table and seepage; the i_cr derivation." },
        { topic: "Boussinesq and Westergaard stress distribution", weight: "6-10 marks", note: "Point-load influence factors, the pressure bulb sketch, and the comparison table." },
        { topic: "Compaction: Proctor, OMC, field control", weight: "7-10 marks", note: "Procedure numbers, the labelled curve with ZAV line, sand replacement method." },
        { topic: "Shear strength: Mohr-Coulomb and the tests", weight: "8-12 marks", note: "UU/CU/CD triaxial logic, vane torque formula, envelopes from three circles." },
        { topic: "Earth pressure and slope stability", weight: "10-14 marks", note: "Rankine derivation with pressure diagrams; Coulomb comparison; Taylor chart numericals." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers all 25 sections twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - formation and phase relations", tasks: ["Rock cycle, weathering, deposit types with Indian examples", "Phase diagram drills: 10 numericals from Vs = 1", "Every relation derived once: e-n, Se = wG, all five unit weights"] },
        { week: "Week 2", focus: "Unit II - classification and structure", tasks: ["Sieve and hydrometer analysis, Cu/Cc numericals", "Atterberg limits, PI/LI/CI, activity", "IS 1498: five full classifications through the funnel"] },
        { week: "Week 3", focus: "Unit III - permeability and seepage", tasks: ["Darcy plus constant and falling head (derive both formulas)", "Pumping tests and stratified k_h, k_v numericals", "Three full flow nets drawn by hand; q, uplift and exit gradient"] },
        { week: "Week 4", focus: "Unit IV - effective stress and compaction", tasks: ["Layered sigma profiles with water tables and seepage", "Boussinesq and Westergaard tables; the comparison numbers", "Proctor curve, ZAV line, field control and equipment"] },
        { week: "Week 5", focus: "Unit V - strength and earth pressure", tasks: ["Mohr-Coulomb, UU/CU/CD, direct shear and vane", "Rankine derivations and pressure diagrams with surcharge and water", "Coulomb trial wedges and the comparison table"] },
        { week: "Week 6", focus: "Slope stability + full revision", tasks: ["Infinite slope formulas and Taylor chart numericals", "Two full past papers under exam timing", "Formula sheet rewritten from memory; sketch set redrawn"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day revision plan",
      bullets: [
        "Rewrite from memory: Se = wG, n = e/(1+e), gamma_d = gamma/(1+w), gamma' = (G-1)gamma_w/(1+e), i_cr = (G-1)/(1+e), q = k h Nf/Nd, k = 2.303 aL log(h1/h2)/(At), Ka = tan^2(45 - phi/2), Pa = 0.5 Ka gamma H^2, Sn = c/(gamma H F).",
        "Redraw the five exam sketches: phase diagram, gradation curve, compaction curve with the ZAV line, flow net, active pressure triangle.",
        "Rework one numerical each from: phase relations, falling head, Boussinesq at r/z = 0, Proctor dry density, Rankine thrust.",
        "Recite the boundaries: 4.75 mm, 75 micron, 2 micron; Cu/Cc criteria; the A-line PI = 0.73(LL - 20); Taylor's 0.181.",
        "Skim every unit's one-breath summary; for each 7-mark question, list its outline points from memory before checking.",
        "Check the kit - calculator, scale, French curve for flow nets - and stop studying by 10 pm; the paper rewards steady method, not last-night cramming.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Sketch first, compute second: a labelled diagram earns marks even when the numbers later go wrong.",
        "State assumptions before any derivation - Boussinesq, Rankine and Coulomb each carry a dedicated assumptions mark.",
        "Write every formula symbolically before substituting, and box the final answer with its units (kPa, kN/m, m^3/s).",
        "In classification and gradation questions, show the intermediate numbers - percent finer, A-line PI - because method marks dominate.",
        "Time-box: two-mark shorts in 4-5 minutes, seven-mark questions in 15-18 minutes, and keep the last 10 minutes for a verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing w = Ww/W instead of Ww/Ws - water content is always on the dry weight of solids.",
        "Averaging layer permeabilities arithmetically whatever the flow direction - k_h and k_v use different formulas.",
        "Counting flow lines and equipotential lines instead of channels and drops - Nf and Nd count the spaces between lines.",
        "Using total-stress parameters (c_u, phi = 0) for long-term problems - drained analysis needs c' and phi'.",
        "Forgetting to add full hydrostatic water pressure after using gamma' below the water table in an earth pressure diagram.",
        "Reading Taylor's Sn from the toe-circle curves when the phi = 0, beta below 53 degrees case needs the base-circle value 0.181.",
      ],
    },
  ],
};
