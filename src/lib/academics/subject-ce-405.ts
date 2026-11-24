/**
 * Academics - RGPV Civil Engineering 4th-semester subject: CE-405
 * Engineering Geology & Remote Sensing.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce405: AcademicSubject = {
  id: "ce-405",
  code: "CE-405",
  title: "Engineering Geology & Remote Sensing",
  semester: "IV Semester",
  program: "RGPV \u00b7 Civil Engineering",
  tagline:
    "The complete visual guide for CE-405: Earth structure and mineralogy, structural geology and Indian stratigraphy, engineering geology for dams, bridges and tunnels, remote sensing fundamentals across the EM spectrum, and GIS with civil engineering applications.",
  description:
    "Five units walk from the architecture of the Earth and the minerals that build its crust, through the structures that deform rocks and the stratigraphy of India, into the geological criteria that govern dam, reservoir, bridge and tunnel sites, then across the electromagnetic spectrum and the platforms and sensors of remote sensing, and finally into GIS components, raster and vector models, GPS positioning, spatial analysis and the civil applications of site selection, urban planning, disaster management and watershed studies. Every section pairs the concept with a redrawable diagram, a table or code sample, and exam questions RGPV actually asks.",
  accentColor: "#22d3ee",
  emoji: "GL",
  unitCount: 5,
  totalSections: 25,
  units: [
    // ===== UNIT I =====
    {
      number: 1,
      roman: "I",
      title: "Geology Basics and Mineralogy",
      summary:
        "The substrate of the whole subject: the Earth's concentric shells and their seismic discontinuities, the rock cycle that links igneous, sedimentary and metamorphic rocks, the diagnostic physical properties used to identify minerals, the three rock families with their textures and origins, and the weathering processes that break solid rock into soil.",
      chapter: {
        number: "01",
        title: "Geology Basics and Mineralogy",
        intro:
          "Unit I builds the vocabulary every later unit borrows: the layered interior of the Earth from crust to inner core, the rock cycle that converts the three rock families into one another, the physical properties that identify minerals from hand-specimen examination, the igneous, sedimentary and metamorphic rock clans with their typical examples, and the physical and chemical weathering processes that govern rock durability in engineering works.",
        inOneBreath:
          "The Earth has four concentric shells - crust, mantle, outer core, inner core - separated by the Moho and Gutenberg discontinuities; the rock cycle links igneous, sedimentary and metamorphic rocks through melting, erosion, lithification and metamorphism; minerals are identified by hardness (Mohs 1-10), lustre, streak, cleavage, fracture, specific gravity, colour and crystal form; igneous rocks crystallise from magma (granite, basalt), sedimentary rocks lithify from deposits (sandstone, limestone, shale), and metamorphic rocks recrystallise under heat and pressure (slate, marble, quartzite); and weathering may be physical, chemical or biological, releasing joint-bound blocks and dissolving carbonate rocks.",
        sections: [
          {
            number: "1.1",
            title: "Structure of the Earth",
            body: [
              "The interior of the Earth is studied through the analysis of seismic wave velocities, which change abruptly at definite depth intervals marking the boundaries between concentric shells. From the surface inward these shells are the crust, the mantle, the outer core and the inner core. The crust, ranging from about 5 km under oceans to roughly 35 km under continents, is composed of silicate-rich rocks; the denser mantle extends down to about 2900 km and accounts for the bulk of planetary volume. The outer core is molten iron-nickel alloy whose convection generates the geomagnetic field, while the inner core, despite extreme temperature, is solid because of immense pressure.",
              "Two major discontinuities divide these shells. The Mohorovicic discontinuity, or Moho, lies at the base of the crust; here P-wave velocity jumps from about 6 km/s to roughly 8 km/s because the denser peridotite of the mantle replaces the lighter silicate crust. The Gutenberg discontinuity at about 2900 km marks the mantle-core boundary, where P-waves slow sharply and S-waves vanish entirely, confirming that the outer core is liquid. A further discontinuity at about 5150 km separates the molten outer core from the solid inner core. Each transition reflects an abrupt change in density, composition or phase.",
              "For the civil engineer the crust is the only shell directly loaded by structures, but knowledge of deeper layers explains why regions differ in foundation behaviour. Continental crust, with its granitic composition, underlies stable peninsular India and supplies aggregates and foundation rock; oceanic crust is basaltic and denser. Seismic risk originates at plate boundaries in the mantle and shallow crust, and geothermal gradients measured in boreholes reflect heat flowing outward from the core. Hence even a foundation engineer benefits from a planetary view of Earth structure, since the same energy budget drives the tectonic processes that shape every site.",
            ],
            bullets: [
              "Crust: outermost shell, 5-35 km thick, silicate-rich; continental granitic, oceanic basaltic.",
              "Mantle: extends to 2900 km, peridotite composition, plastic asthenosphere drives plate motion.",
              "Outer core: molten iron-nickel, 2900-5150 km, source of the geomagnetic field; S-waves do not pass.",
              "Inner core: solid iron-nickel sphere; solid despite extreme temperature due to pressure.",
              "Moho (crust-mantle) and Gutenberg (mantle-core) are the two defining seismic discontinuities.",
            ],
            table: {
              caption: "Earth's concentric shells with depth, composition and physical state.",
              headers: ["Shell", "Depth range", "Composition", "State", "P-wave velocity"],
              rows: [
                ["Crust", "0-35 km", "Silicate (granitic/basaltic)", "Solid", "6 km/s"],
                ["Mantle", "35-2900 km", "Peridotite", "Solid (plastic below)", "8-13 km/s"],
                ["Outer core", "2900-5150 km", "Molten iron-nickel", "Liquid", "8-10 km/s"],
                ["Inner core", "5150-6371 km", "Solid iron-nickel", "Solid", "11 km/s"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Seismic waves tracing the Earth's shells",
              caption:
                "P-waves bend and slow at each discontinuity; S-waves vanish at the liquid outer core.",
              steps: [
                { label: "Surface: crust (solid silicate)" },
                { label: "Moho discontinuity", note: "P-wave jumps 6 to 8 km/s" },
                { label: "Mantle (solid peridotite)" },
                { label: "Gutenberg discontinuity", note: "S-waves vanish - liquid outer core" },
                { label: "Inner core (solid under pressure)" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked about Earth's interior, draw a quarter-circle cross-section labelling crust, mantle, outer core, inner core, and the two named discontinuities (Moho, Gutenberg). Examiners award full marks for the diagram plus the S-wave argument for liquid outer core.",
            },
            keyTerms: [
              { term: "Crust", definition: "The outermost solid silicate shell of the Earth, 5 to 35 km thick, that carries all civil engineering works." },
              { term: "Moho discontinuity", definition: "The boundary between crust and mantle where seismic P-wave velocity jumps from about 6 to 8 km/s." },
              { term: "Mantle", definition: "The 2900 km thick solid peridotite shell between the Moho and the Gutenberg discontinuity." },
            ],
            examQuestions: [
              {
                q: "Describe the internal structure of the Earth with a neat diagram, giving the depth, composition and physical state of each shell and the role of seismic discontinuities.",
                marks: 7,
                outline: [
                  "Introduce the four shells - crust, mantle, outer core, inner core - and their depth ranges.",
                  "State the composition of each: silicate crust, peridotite mantle, molten iron-nickel outer core, solid iron-nickel inner core.",
                  "Define the Moho discontinuity at the crust-mantle boundary with P-wave jump 6 to 8 km/s.",
                  "Define the Gutenberg discontinuity at 2900 km; explain that S-waves vanish, proving the outer core is liquid.",
                  "Mention the inner-core boundary at about 5150 km and pressure-driven solidity.",
                  "Draw a labelled quarter-circle cross-section showing all shells and discontinuities.",
                  "Conclude with engineering relevance: only the crust is directly loaded, but deeper layers drive tectonic and seismic processes.",
                ],
              },
              {
                q: "Define the crust and the mantle of the Earth.",
                marks: 2,
              },
              {
                q: "What is the Mohorovicic discontinuity? State its depth and seismic evidence.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "The rock cycle",
            body: [
              "Rocks are the natural aggregates of one or more minerals, and the Earth recycles them endlessly through three families - igneous, sedimentary and metamorphic. Igneous rocks crystallise from cooling magma: intrusive types such as granite solidify below the surface, giving coarse grains, while extrusive types such as basalt erupt and chill rapidly into fine-grained or glassy textures. Sedimentary rocks form when existing rocks weather into fragments or dissolved ions, are transported and deposited, and are then lithified by compaction and cementation into sandstone, shale or limestone. Metamorphic rocks are pre-existing rocks recrystallised in the solid state under heat, pressure and chemically active fluids.",
              "The cycle connects all three families in a closed loop. Magma cools and solidifies into igneous rock; igneous rock weathers and erodes into sediment that lithifies into sedimentary rock; sedimentary or igneous rock, buried and subjected to heat and pressure, becomes metamorphic rock; and metamorphic rock, if melted, regenerates magma and closes the cycle. The loop is not strictly one-way: any rock may weather into sediment, any rock may metamorphose, and any rock may melt. The cycle explains why the same minerals appear across families - quartz in granite, sandstone and quartzite - in different textures.",
              "For the civil engineer the rock cycle predicts how a rock will behave under load. Igneous rocks, with their interlocking crystalline fabric, give high compressive strength and low permeability; sedimentary rocks, with their layered and often porous fabric, are anisotropic and may slide along bedding; metamorphic rocks vary with foliation, slate splitting along cleavage while quartzite remains massive. Recognising the family therefore anticipates strength, permeability, durability and ease of excavation, all of which feed directly into foundation, aggregate and tunnelling decisions.",
            ],
            bullets: [
              "Igneous rocks: crystallise from magma; intrusive coarse (granite), extrusive fine (basalt).",
              "Sedimentary rocks: form by weathering, transport, deposition and lithification of sediments.",
              "Metamorphic rocks: pre-existing rocks recrystallise under heat, pressure and active fluids.",
              "Lithification combines compaction and cementation that turn sediment into solid rock.",
              "The cycle is closed: any rock may weather, metamorphose or melt to regenerate the chain.",
            ],
            codeExample: {
              language: "text",
              caption: "Rock-cycle stage transitions as a labelled chain.",
              code: [
                "ROCK CYCLE",
                "",
                "  magma",
                "    |  cooling + crystallisation",
                "    v",
                "  igneous rock  (granite, basalt)",
                "    |  weathering + erosion + lithification",
                "    v",
                "  sedimentary rock  (sandstone, shale, limestone)",
                "    |  heat + pressure + fluids",
                "    v",
                "  metamorphic rock  (slate, marble, quartzite)",
                "    |  melting",
                "    v",
                "  magma  (cycle closes)",
                "",
                "  Side branches:",
                "    igneous  --weather-->  sediment",
                "    sedimentary --metamorphism-->  metamorphic",
                "    metamorphic --melting-->  magma",
              ].join("\n"),
            },
            diagram: {
              kind: "cycle",
              title: "The rock cycle",
              caption:
                "Magma, igneous, sedimentary and metamorphic rocks cycle through melting, weathering and metamorphism.",
              steps: [
                { label: "Magma cools", note: "crystallisation" },
                { label: "Igneous rock", note: "granite, basalt" },
                { label: "Weathering and lithification", note: "sediment to rock" },
                { label: "Sedimentary rock", note: "sandstone, shale" },
                { label: "Heat and pressure", note: "metamorphism" },
                { label: "Metamorphic rock", note: "slate, marble, quartzite" },
              ],
            },
            callout: {
              type: "warning",
              title: "The cycle is not one-way",
              body: "Avoid drawing the rock cycle as a single arrow chain. Any rock - igneous, sedimentary or metamorphic - may weather into sediment, metamorphose or melt. The diagram must show side branches, not just the main loop, or marks are lost.",
            },
            keyTerms: [
              { term: "Igneous rock", definition: "Rock formed by crystallisation of cooling magma, either intrusive (coarse grain) or extrusive (fine grain)." },
              { term: "Lithification", definition: "The conversion of loose sediment into solid rock by compaction and cementation." },
              { term: "Metamorphism", definition: "Solid-state recrystallisation of a pre-existing rock under heat, pressure and chemically active fluids." },
            ],
            examQuestions: [
              {
                q: "Explain the rock cycle with a neat sketch. Show how igneous, sedimentary and metamorphic rocks are interrelated and give two examples of each.",
                marks: 7,
                outline: [
                  "Define the three rock families and their modes of origin.",
                  "Trace the main loop: magma -> igneous -> sedimentary -> metamorphic -> magma.",
                  "Show side branches: any rock may weather, metamorphose or melt.",
                  "Give igneous examples: granite (intrusive), basalt (extrusive).",
                  "Give sedimentary examples: sandstone, shale, limestone.",
                  "Give metamorphic examples: slate, marble, quartzite.",
                  "Draw a labelled cycle diagram with all arrows and conclude with engineering relevance.",
                ],
              },
              {
                q: "Define lithification and name the two processes involved.",
                marks: 2,
              },
              {
                q: "Give two examples each of igneous, sedimentary and metamorphic rocks.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Minerals: physical properties",
            body: [
              "A mineral is a naturally occurring, inorganic, crystalline solid with a definite chemical composition and an ordered atomic arrangement. Of the several thousand known minerals, only about two dozen are common rock-formers, and a civil engineer identifies them by a small set of physical properties measured from a hand specimen. The diagnostic properties are hardness, lustre, streak, cleavage, fracture, specific gravity, colour, and crystal form or habit. Each is reproducible and independent of specimen size, so a determined set of properties uniquely identifies a mineral, distinguishing quartz from feldspar, calcite from gypsum, or hematite from magnetite.",
              "Hardness is the resistance to scratching and is measured against the Mohs scale, which ranks ten reference minerals from talc (1) to diamond (10). Quartz at 7 scratches glass; calcite at 3 is scratched by a copper coin. Lustre describes the quality of reflected light - metallic, vitreous, resinous, pearly or earthy. Streak is the colour of the powdered mineral on an unglazed porcelain plate, often more diagnostic than the surface colour, since hematite is always red-brown in streak though its surface may be silver or black. Cleavage is the tendency to split along planes of weak atomic bonding, yielding smooth flat surfaces; fracture is irregular breakage.",
              "Specific gravity, the ratio of mineral mass to the mass of an equal volume of water, separates the light silicates near 2.7 from the heavy ores above 7. Crystal form is the external geometric shape reflecting internal atomic symmetry, such as the hexagonal prism of quartz or the cubic cleavage of halite. For the civil engineer these properties decide whether a rock is suitable as aggregate or foundation: quartz-rich sandstones resist abrasion, calcite-bearing limestones dissolve in acid water, and clay minerals swell and weaken foundations. Hand-specimen identification therefore links directly to engineering performance.",
            ],
            bullets: [
              "Hardness: scratch resistance on Mohs scale, talc 1 to diamond 10; quartz 7, calcite 3.",
              "Lustre: quality of reflected light - metallic, vitreous, resinous, pearly, earthy.",
              "Streak: colour of the mineral powder on unglazed porcelain; more reliable than surface colour.",
              "Cleavage: tendency to split along smooth planes of weak bonding; fracture is irregular breakage.",
              "Specific gravity: density relative to water; light silicates near 2.7, heavy ores above 7.",
            ],
            table: {
              caption: "Mohs hardness scale of reference minerals.",
              headers: ["Hardness", "Mineral", "Common test", "Example rock"],
              rows: [
                ["1", "Talc", "Scratched by fingernail", "Soapstone"],
                ["2", "Gypsum", "Scratched by fingernail", "Alabaster"],
                ["3", "Calcite", "Scratched by copper coin", "Limestone"],
                ["4", "Fluorite", "Scratched by steel knife", "Fluorite veins"],
                ["5", "Apatite", "Scratches glass weakly", "Phosphate rock"],
                ["6", "Orthoclase", "Scratches glass", "Granite"],
                ["7", "Quartz", "Scratches steel", "Sandstone, quartzite"],
                ["8", "Topaz", "Scratches quartz", "Topaz veins"],
                ["9", "Corundum", "Scratches topaz", "Emery, sapphire"],
                ["10", "Diamond", "Scratches all", "Diamond pipes"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Mohs hardness pyramid",
              caption:
                "Hardness rises from soft talc at the base to diamond at the apex; common rock-formers sit in the 3-7 range.",
              tiers: [
                { label: "Topaz 8, Corundum 9, Diamond 10", note: "very rare in civil rocks" },
                { label: "Quartz 7, Orthoclase 6", note: "common rock-formers" },
                { label: "Apatite 5, Fluorite 4", note: "accessory minerals" },
                { label: "Calcite 3, Gypsum 2, Talc 1", note: "soft, weak in foundations" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Learn the Mohs scale as a chant - talc, gypsum, calcite, fluorite, apatite, orthoclase, quartz, topaz, corundum, diamond. The audit of any specimen in a 7-mark answer must cite at least hardness, lustre, streak and cleavage, with one common example per property.",
            },
            keyTerms: [
              { term: "Mohs hardness", definition: "A 1-10 scratch-resistance scale from talc (1) to diamond (10) used to identify minerals." },
              { term: "Cleavage", definition: "The tendency of a mineral to split along smooth planes of weak atomic bonding, leaving flat surfaces." },
              { term: "Streak", definition: "The colour of a mineral in powdered form on an unglazed porcelain plate, often more diagnostic than surface colour." },
            ],
            examQuestions: [
              {
                q: "Describe the physical properties used to identify minerals in hand specimen. Give the Mohs hardness scale and one common example for each property.",
                marks: 7,
                outline: [
                  "Define a mineral as a naturally occurring, inorganic, crystalline solid with definite chemistry.",
                  "List the diagnostic properties: hardness, lustre, streak, cleavage, fracture, specific gravity, colour, crystal form.",
                  "Define hardness and list the Mohs scale talc (1) to diamond (10).",
                  "Define lustre and streak with examples: metallic/vitreous lustre; hematite red-brown streak.",
                  "Define cleavage vs fracture with example: calcite rhombohedral cleavage, quartz conchoidal fracture.",
                  "Define specific gravity; light silicates near 2.7, heavy ores above 7.",
                  "Conclude with engineering relevance: quartz resists abrasion, calcite dissolves, clay swells.",
                ],
              },
              {
                q: "State the Mohs hardness of quartz and calcite.",
                marks: 2,
              },
              {
                q: "Distinguish between cleavage and fracture in minerals with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Igneous, sedimentary and metamorphic rocks",
            body: [
              "Igneous rocks form by solidification of magma either at depth or on the surface. Intrusive or plutonic rocks cool slowly below ground and develop coarse interlocking crystals visible to the eye; granite, with its quartz, feldspar and mica crystals, diorite and gabbro are typical. Extrusive or volcanic rocks cool rapidly at the surface and are fine-grained or glassy; basalt, the most abundant extrusive, rhyolite and obsidian belong here. Texture - grain size, fabric and relation between crystals - is the chief classifier, since chemical composition varies continuously. Igneous rocks generally give the strongest and most durable foundations and aggregates thanks to their interlocking crystalline fabric.",
              "Sedimentary rocks form at the surface from the products of weathering. Clastic types, such as sandstone, siltstone and shale, are built of mineral fragments cemented by silica, calcium carbonate or iron oxide; their grains vary from coarse sand to fine clay. Chemical types precipitate from solution - rock salt, gypsum and some limestones; organic types accumulate from biological debris, such as coal and chalky limestone. Sedimentary rocks are typically bedded and stratified, often porous and permeable, and weaker than igneous rocks. Their engineering interest lies in their bedding anisotropy, their solubility (limestone, gypsum) and their role as aquifers and petroleum reservoirs.",
              "Metamorphic rocks are pre-existing rocks recrystallised in the solid state under elevated heat, directed pressure and chemically active fluids. Foliated rocks, such as slate, schist and gneiss, display a parallel alignment of platy minerals produced by directed stress, and split readily along the foliation; their engineering quality depends strongly on orientation. Non-foliated rocks such as marble (recrystallised limestone) and quartzite (recrystallised sandstone) have a granoblastic mosaic fabric with no preferred splitting direction and behave as massive, strong units. Metamorphic rocks often give excellent foundations when massive, but foliated types need careful orientation of tunnels and foundations to avoid sliding along schistosity.",
            ],
            bullets: [
              "Igneous intrusive: coarse-grained from slow cooling; granite, diorite, gabbro.",
              "Igneous extrusive: fine or glassy from rapid cooling; basalt, rhyolite, obsidian.",
              "Sedimentary clastic: fragmental, cemented; sandstone, siltstone, shale.",
              "Sedimentary chemical and organic: precipitates and accumulations; rock salt, gypsum, coal, limestone.",
              "Metamorphic foliated: platy alignment; slate, schist, gneiss - strength is orientation-dependent.",
            ],
            table: {
              caption: "Rock families: origin, texture and typical examples.",
              headers: ["Family", "Origin", "Texture", "Examples"],
              rows: [
                ["Igneous intrusive", "Magma cooled below ground", "Coarse interlocking crystals", "Granite, diorite, gabbro"],
                ["Igneous extrusive", "Lava cooled at surface", "Fine-grained or glassy", "Basalt, rhyolite, obsidian"],
                ["Sedimentary clastic", "Fragments cemented", "Clastic, bedded", "Sandstone, siltstone, shale"],
                ["Sedimentary chemical", "Precipitated from solution", "Crystalline, evaporitic", "Rock salt, gypsum"],
                ["Metamorphic foliated", "Recrystallised under stress", "Platy alignment", "Slate, schist, gneiss"],
                ["Metamorphic non-foliated", "Recrystallised under heat", "Granoblastic mosaic", "Marble, quartzite"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Three rock families side by side",
              caption:
                "Igneous rocks crystallise, sedimentary rocks lithify, metamorphic rocks recrystallise - each yields distinct engineering behaviour.",
              left: {
                heading: "Igneous",
                items: [
                  "Formed from cooling magma or lava",
                  "Intrusive coarse: granite, gabbro",
                  "Extrusive fine: basalt, rhyolite",
                  "Interlocking fabric, high strength",
                  "Low porosity, low permeability",
                ],
              },
              right: {
                heading: "Sedimentary and Metamorphic",
                items: [
                  "Sedimentary: lithified fragments or precipitates",
                  "Bedded, often porous: sandstone, shale",
                  "Metamorphic: recrystallised under heat and pressure",
                  "Foliated: slate, schist, gneiss",
                  "Non-foliated: marble, quartzite",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Engineering rule of thumb",
              body: "For foundations and aggregates prefer massive igneous rocks and non-foliated metamorphics; treat foliated metamorphic rocks and bedded sedimentary rocks with caution because their planes of weakness reduce strength along preferred directions.",
            },
            keyTerms: [
              { term: "Igneous rock", definition: "Rock formed by crystallisation of magma or lava; intrusive types are coarse-grained, extrusive types fine-grained or glassy." },
              { term: "Sedimentary rock", definition: "Rock formed by lithification of mineral fragments, chemical precipitates or biological accumulations at the Earth's surface." },
              { term: "Metamorphic rock", definition: "Rock recrystallised in the solid state from a pre-existing rock under heat, pressure and active fluids; foliated or non-foliated." },
            ],
            examQuestions: [
              {
                q: "Classify rocks into igneous, sedimentary and metamorphic types. Describe the mode of formation of each with two examples and state their engineering significance.",
                marks: 7,
                outline: [
                  "Introduce the three-fold classification based on mode of formation.",
                  "Igneous: formed from magma; intrusive coarse (granite, gabbro), extrusive fine (basalt, rhyolite).",
                  "Igneous engineering significance: high strength, low permeability, good foundation and aggregate.",
                  "Sedimentary: formed by lithification of fragments, precipitates or organic debris.",
                  "Sedimentary examples: sandstone, shale, limestone; bedded, porous, anisotropic strength.",
                  "Metamorphic: recrystallised under heat and pressure; foliated (slate, schist) and non-foliated (marble, quartzite).",
                  "Metamorphic engineering significance: massive types excellent, foliated types weak along foliation; orient works accordingly.",
                ],
              },
              {
                q: "Define metamorphic rock with one example.",
                marks: 2,
              },
              {
                q: "Distinguish between granite and basalt in terms of origin and texture.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Weathering of rocks",
            body: [
              "Weathering is the in-situ disintegration and decomposition of rocks under the action of atmospheric agents at or near the surface. It differs from erosion, which transports the broken material away. Physical or mechanical weathering breaks rock into smaller fragments without changing its mineral composition: frost wedging when water freezes in joints and expands by about nine percent, thermal expansion and contraction in deserts, exfoliation by unloading of overburden, and biological wedging by plant roots. Each process extends joints and opens fractures, increasing the surface area exposed to chemical attack and weakening rock masses for engineering purposes.",
              "Chemical weathering decomposes the minerals themselves, chiefly by the action of water, oxygen and carbon dioxide. Solution dissolves soluble minerals such as halite and calcite; oxidation turns iron-bearing minerals to rust; hydrolysis breaks down feldspars into clay minerals and silica; carbonation, accelerated by carbonic acid in rainwater, attacks limestone to form soluble calcium bicarbonate and produces karst topography with sinkholes and caverns. Chemical weathering is most intense in warm, humid climates where water is abundant and vegetation releases organic acids, and it converts solid rock into residual soils such as laterite and bauxite.",
              "The engineering significance of weathering is direct and quantifiable. A weathered rock has lower strength, higher permeability and greater compressibility than its fresh equivalent, and the transition from fresh rock to residual soil is gradual, requiring weathering-grade classification (W1 fresh to W5 residual soil) on site. Dam abutments and tunnel portals in weathered rock need additional support or excavation; foundations on partially weathered rock may settle differentially; and slopes in weathered material are prone to landslides. Hence every site investigation reports the depth and grade of weathering, because the same rock type behaves very differently in its fresh and weathered states.",
            ],
            bullets: [
              "Physical weathering: frost wedging, thermal expansion, exfoliation, root wedging - no mineral change.",
              "Chemical weathering: solution, oxidation, hydrolysis, carbonation - minerals decompose.",
              "Carbonation of limestone by carbonic acid produces soluble bicarbonate and karst topography.",
              "Hydrolysis of feldspar yields clay minerals and silica, the basis of residual soils.",
              "Weathering grades W1 fresh to W5 residual soil are reported in every site investigation.",
            ],
            table: {
              caption: "Weathering processes, agents and engineering products.",
              headers: ["Type", "Process", "Chief agent", "Product or effect"],
              rows: [
                ["Physical", "Frost wedging", "Freezing water in joints", "Joint-bound blocks"],
                ["Physical", "Thermal expansion", "Diurnal temperature swings", "Granular disintegration"],
                ["Physical", "Exfoliation", "Unloading of overburden", "Sheet joints"],
                ["Chemical", "Solution", "Water", "Dissolved halite, karst in limestone"],
                ["Chemical", "Oxidation", "Oxygen", "Rust on iron-bearing minerals"],
                ["Chemical", "Hydrolysis", "Water", "Clay from feldspar"],
                ["Chemical", "Carbonation", "Carbonic acid", "Karst topography, sinkholes"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Weathering profile from surface downward",
              caption:
                "The weathered mantle grades from residual soil at the top to fresh rock below; engineering behaviour changes with grade.",
              layers: [
                { label: "Residual soil (W5)", note: "fully decomposed, soil-like" },
                { label: "Completely weathered rock (W4)", note: "original fabric lost" },
                { label: "Highly to moderately weathered (W3-W2)", note: "discoloured, joint-bound" },
                { label: "Slightly weathered rock (W1)", note: "fresh with surface stains" },
                { label: "Fresh rock", note: "unweathered foundation material" },
              ],
            },
            callout: {
              type: "warning",
              title: "Karst is a hidden killer",
              body: "Carbonation of limestone can develop caverns and sinkholes tens of metres below an apparently sound surface. Any dam, reservoir or building site on limestone must include borehole probing and a karst map, otherwise the foundation may collapse into a hidden cavity after first filling.",
            },
            keyTerms: [
              { term: "Physical weathering", definition: "In-situ disintegration of rock into fragments without mineralogical change, caused by frost, thermal stress, unloading or roots." },
              { term: "Chemical weathering", definition: "In-situ decomposition of rock-forming minerals by solution, oxidation, hydrolysis and carbonation under the action of water and gases." },
              { term: "Exfoliation", definition: "Physical weathering by unloading of overburden, causing the outer layers of rock to peel off in sheets." },
            ],
            examQuestions: [
              {
                q: "Define weathering. Distinguish between physical and chemical weathering with processes, agents and engineering significance.",
                marks: 7,
                outline: [
                  "Define weathering as in-situ disintegration and decomposition, contrasting it with erosion.",
                  "Physical weathering: frost wedging, thermal expansion, exfoliation, root wedging; no mineral change.",
                  "Chemical weathering: solution, oxidation, hydrolysis, carbonation; minerals decompose.",
                  "Explain carbonation of limestone producing karst topography and sinkholes.",
                  "Note that weathering lowers strength and raises permeability and compressibility.",
                  "Mention weathering grades W1 to W5 used in site investigation reports.",
                  "Conclude with engineering relevance: dam abutments, tunnel portals, foundations and slope stability all depend on weathering grade.",
                ],
              },
              {
                q: "Define weathering.",
                marks: 2,
              },
              {
                q: "Name any three chemical weathering processes with one example each.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT II =====
    {
      number: 2,
      roman: "II",
      title: "Structural Geology and Stratigraphy",
      summary:
        "The architecture of deformed rocks: attitude measurements of strike, dip and outcrop, the geometry of folds and their classification, faults, joints and unconformities with their engineering impact, geological maps and the construction of cross-sections, and a brief outline of Indian stratigraphy from the Archaean to the Quaternary.",
      chapter: {
        number: "02",
        title: "Structural Geology and Stratigraphy",
        intro:
          "Unit II describes how rock masses are deformed and how their geometry is recorded. Strike, dip and outcrop define the attitude of planar features; folds, faults, joints and unconformities record the structures produced by tectonic stress; geological maps and cross-sections communicate the three-dimensional arrangement of formations; and the Indian stratigraphic column from the Archaean gneisses to the Quaternary alluvium provides the regional context for every civil engineering project in the country.",
        inOneBreath:
          "Strike is the intersection line of a bedding plane with a horizontal plane; dip is the steepest angle measured from horizontal down from the strike line, with true dip perpendicular to strike and apparent dip in any other direction; folds bend rock into anticlines (up) and synclines (down) classified by limb symmetry as symmetrical, asymmetrical, overturned, recumbent or isoclinal; faults are fractures along which movement occurs - normal, reverse or strike-slip - distinguished from joints which lack shear displacement; unconformities are surfaces of erosion separating older from younger rocks as angular, disconformity or nonconformity; geological maps use colours and symbols to show formation contacts and the cross-section reconstructs subsurface geometry; and Indian stratigraphy runs Archaean, Dharwar, Purana, Vindhyan, Gondwana, Deccan Trap, Tertiary, Quaternary.",
        sections: [
          {
            number: "2.1",
            title: "Strike, dip and outcrop",
            body: [
              "The attitude of any planar geological feature - a bedding plane, a fault, a joint set, a cleavage or a foliation - is described by two measurements: strike and dip. Strike is the compass direction of the line formed by the intersection of the inclined plane with a horizontal plane, and is recorded as a bearing from north such as N 30 E. Dip is the angle measured in the vertical plane perpendicular to the strike, between the inclined plane and the horizontal, expressed in degrees; the dip direction is always perpendicular to the strike and is the direction in which water would flow if poured on the plane.",
              "True dip is the maximum dip angle, measured perpendicular to the strike, and is the value quoted in geological records. Apparent dip is any smaller angle measured in a vertical plane not perpendicular to the strike, such as the dip seen along a road cut or a tunnel alignment that runs obliquely across the beds. The two are related by the tangent formula tan(apparent dip) equals tan(true dip) times sin(angle between the section and the strike), so a section aligned with the strike shows zero apparent dip and a section perpendicular to the strike shows the full true dip.",
              "An outcrop is the portion of a rock formation exposed at the surface, either naturally or by excavation. The shape of an outcrop on a geological map depends on the dip of the beds, the topography, and the thickness of the formation: horizontal beds follow the contours, vertical beds crop out as straight bands regardless of topography, and inclined beds form V-shaped patterns that point up-slope for gentle dips and down-slope for steep dips. Outcrop patterns therefore reveal subsurface structure from map evidence and are the basis for cross-section construction and for siting civil works along favourable orientations.",
            ],
            bullets: [
              "Strike: compass bearing of the line where an inclined plane meets a horizontal plane.",
              "Dip: maximum angle of inclination measured perpendicular to strike, recorded in degrees.",
              "True dip perpendicular to strike; apparent dip smaller in any oblique vertical section.",
              "Dip direction: the way water would flow on the plane, always perpendicular to strike.",
              "Outcrop pattern follows contours for horizontal beds, is straight for vertical beds, and Vs for inclined beds.",
            ],
            table: {
              caption: "Attitude parameters of planar geological features.",
              headers: ["Parameter", "Definition", "Measured in", "Example value"],
              rows: [
                ["Strike", "Intersection of plane with horizontal", "Compass bearing", "N 30 E"],
                ["True dip", "Maximum inclination from horizontal", "Degrees", "45 degrees SE"],
                ["Apparent dip", "Inclination in any oblique section", "Degrees", "30 degrees"],
                ["Dip direction", "Direction of steepest descent", "Compass quadrant", "South-east"],
                ["Outcrop width", "Map width of the formation", "Metres on map", "120 m"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Relationship of strike, dip and outcrop",
              caption:
                "Strike is the horizontal line on the bed; true dip is perpendicular to it; outcrop V's point up-slope for shallow dips.",
              steps: [
                { label: "Bedding plane (inclined)" },
                { label: "Strike line", note: "horizontal intersection" },
                { label: "True dip", note: "perpendicular to strike" },
                { label: "Apparent dip", note: "oblique, smaller angle" },
                { label: "Outcrop pattern", note: "V-shape on topography" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always draw a small block diagram showing a dipping bed with the strike line drawn horizontally on top, the true dip arrow perpendicular to it and the dip angle labelled in degrees. Then explain apparent dip with the tangent formula tan(ad) equals tan(td) times sin(theta).",
            },
            keyTerms: [
              { term: "Strike", definition: "The compass bearing of the line formed by the intersection of an inclined geological plane with a horizontal plane." },
              { term: "Dip", definition: "The maximum angle of inclination of a geological plane measured from the horizontal, perpendicular to the strike." },
              { term: "Outcrop", definition: "The portion of a rock formation exposed at the surface, whose map pattern depends on dip and topography." },
            ],
            examQuestions: [
              {
                q: "Define strike, dip and outcrop. Explain true dip and apparent dip with a neat diagram and the relation between them.",
                marks: 7,
                outline: [
                  "Define strike as the horizontal intersection line of the plane.",
                  "Define dip as the maximum inclination perpendicular to strike, in degrees.",
                  "Distinguish dip direction from strike, perpendicular to it.",
                  "Define true dip as the maximum value, apparent dip as smaller in an oblique section.",
                  "State the relation tan(apparent dip) = tan(true dip) times sin(theta), where theta is the angle between section and strike.",
                  "Show special cases: section along strike gives zero apparent dip; perpendicular gives true dip.",
                  "Define outcrop and describe V-pattern for horizontal, vertical and inclined beds.",
                ],
              },
              {
                q: "Define strike of a bedding plane.",
                marks: 2,
              },
              {
                q: "Distinguish between true dip and apparent dip with the relation between them.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Folds",
            body: [
              "A fold is a bend in rock strata produced by ductile deformation under tectonic stress, without fracture. The anatomy of a fold includes two limbs, the sides of the bend; the hinge, the line of maximum curvature; the axial plane, the surface connecting the hinges of successive beds; the axis, the intersection of the axial plane with any bed; the crest, the highest point of an arch; and the trough, the lowest point of a trough. Folds are first classified by the direction of convexity: an anticline arches upward with older rocks in the core, while a syncline troughs downward with younger rocks in the core.",
              "Folds are further classified by the symmetry of their limbs. A symmetrical fold has equal limb dips on either side of a vertical axial plane; an asymmetrical fold has unequal limb dips; an overturned fold has both limbs dipping in the same direction, with one limb inverted; a recumbent fold has a horizontal axial plane with one limb lying above the other; and an isoclinal fold has parallel limbs of equal dip. The plunge of a fold is the angle its axis makes with the horizontal, and the folds are said to be plunging when this angle is non-zero, producing nose and tail outcrop patterns.",
              "Folds are of major engineering importance. Fold axes are zones of concentrated stress and fractured rock, often with weak, permeable limbs along which water and slides can develop. Tunnels driven along a fold axis encounter shattered rock and need heavier support; dams sited on the trough of a syncline risk leakage through permeable beds dipping towards the downstream side; and reservoirs in anticlinal valleys may leak through the crest. The competent beds, usually sandstone or quartzite, form the ridges and offer the strongest foundation materials, while incompetent shales underlie the valleys. Identifying fold geometry from maps and outcrop patterns is therefore essential for civil site selection.",
            ],
            bullets: [
              "Anticline: upward arch with older rocks in the core; syncline: downward trough with younger rocks.",
              "Limbs, hinge, axial plane and axis are the four anatomical parts of any fold.",
              "Symmetrical, asymmetrical, overturned, recumbent and isoclinal folds classify limb symmetry.",
              "Plunge: angle the fold axis makes with the horizontal; produces nose and tail outcrop patterns.",
              "Tunnels along fold axes and dams on synclinal troughs are weak, leaking situations to avoid.",
            ],
            table: {
              caption: "Classification of folds by limb symmetry.",
              headers: ["Fold type", "Limb relation", "Axial plane", "Engineering note"],
              rows: [
                ["Symmetrical", "Equal dips, opposite sides", "Vertical", "Stable if rocks are competent"],
                ["Asymmetrical", "Unequal dips", "Inclined", "One limb weaker"],
                ["Overturned", "Both limbs dip same way", "Inclined, one limb inverted", "Inverted bed has reduced strength"],
                ["Recumbent", "Limbs nearly flat", "Horizontal", "Lower limb may shear"],
                ["Isoclinal", "Parallel limbs, equal dip", "Parallel to limbs", "Highly deformed, fractured"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Classification of folds",
              caption:
                "A fold is sorted by limb symmetry into five named types; each has different engineering implications.",
              start: "A fold in stratified rock",
              branches: [
                { label: "Symmetrical", outcome: "Equal limbs, vertical axial plane", good: true },
                { label: "Asymmetrical", outcome: "Unequal limbs, inclined plane", good: true },
                { label: "Overturned", outcome: "Both limbs dip same way; one inverted", good: false },
                { label: "Recumbent / isoclinal", outcome: "Horizontal or parallel limbs; highly deformed", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Avoid fold axes for tunnels",
              body: "Fold axes concentrate stress and develop shattered, permeable rock. A tunnel driven along an anticlinal axis or a dam built on a synclinal trough is the classic textbook failure case. Shift alignments to the limb of a competent bed wherever possible.",
            },
            keyTerms: [
              { term: "Anticline", definition: "A fold that arches upward, with older rocks in the core and limbs dipping away from the axis." },
              { term: "Syncline", definition: "A fold that troughs downward, with younger rocks in the core and limbs dipping towards the axis." },
              { term: "Fold axis", definition: "The intersection of the axial plane with a bedding surface; its inclination to horizontal is the plunge." },
            ],
            examQuestions: [
              {
                q: "Define a fold. Describe the geometry of folds and classify them with neat sketches, giving the engineering significance of each type.",
                marks: 7,
                outline: [
                  "Define a fold as a ductile bend in strata under tectonic stress, without fracture.",
                  "Describe anatomy: limbs, hinge, axial plane, axis, crest, trough.",
                  "Classify by convexity: anticline (upward arch, older core) and syncline (downward trough, younger core).",
                  "Classify by limb symmetry: symmetrical, asymmetrical, overturned, recumbent, isoclinal.",
                  "Define plunge and its effect on outcrop pattern (nose and tail).",
                  "Draw neat sketches of at least four fold types with axial planes.",
                  "Engineering significance: avoid fold axes for tunnels and synclinal troughs for dams; competent beds form ridges.",
                ],
              },
              {
                q: "Distinguish between an anticline and a syncline.",
                marks: 2,
              },
              {
                q: "Draw a neat sketch of an overturned fold and label its parts.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Faults, joints and unconformities",
            body: [
              "A fault is a fracture along which there has been measurable movement of the blocks on either side. The two blocks are named by their relative position: the hanging wall lies above the fault plane, the footwall below. In a normal fault the hanging wall moves downward under tension, producing a step in the beds; in a reverse or thrust fault the hanging wall moves upward under compression, shortening the crust; in a strike-slip fault the movement is horizontal, as on the San Andreas system. Faults are classified by the relative dip and slip components, and the displacement may range from centimetres to many kilometres.",
              "Joints are fractures along which there has been no measurable movement; they are the most widespread structures in rocks. Joints occur in parallel sets, and a joint system is two or more intersecting sets. They may be systematic, with regular spacing and orientation, or non-systematic; they may be tectonic, formed by stress release, or columnar, formed by cooling contraction in basalt. Although individually small, joints reduce the strength and increase the permeability of rock masses, govern blasting patterns in quarries, and control slope stability and groundwater flow. A densely jointed rock behaves more like a stack of blocks than a continuous medium.",
              "An unconformity is a surface of erosion or non-deposition separating younger rocks above from older rocks below, representing a time gap in the geological record. Three types are recognised: an angular unconformity, where the beds above and below meet at an angle because the lower beds were tilted and eroded before the upper were deposited; a disconformity, where the beds are parallel but the surface shows erosion channels or a weathered zone; and a nonconformity, where sedimentary rocks rest on older igneous or metamorphic basement. Unconformities mark weak, permeable horizons and are critical in stratigraphic correlation and in identifying aquifers and leakage paths in reservoir sites.",
            ],
            bullets: [
              "Fault: fracture with measurable movement; hanging wall and footwall are the two blocks.",
              "Normal fault: hanging wall down under tension; reverse fault: hanging wall up under compression.",
              "Strike-slip fault: horizontal movement, e.g. San Andreas.",
              "Joint: fracture without measurable movement; occurs in sets and systems; reduces strength and raises permeability.",
              "Unconformity: erosion or non-deposition surface; angular, disconformity, nonconformity.",
            ],
            table: {
              caption: "Structural features: definition, type and engineering significance.",
              headers: ["Structure", "Definition", "Types", "Engineering concern"],
              rows: [
                ["Fault", "Fracture with movement", "Normal, reverse, strike-slip", "Shattered zone, leakage, seismic risk"],
                ["Joint", "Fracture without movement", "Systematic, columnar", "Reduced strength, high permeability"],
                ["Unconformity", "Surface of erosion or non-deposition", "Angular, disconformity, nonconformity", "Weak horizon, leakage path"],
                ["Bedding plane", "Original depositional surface", "Horizontal, inclined", "Anisotropic strength, sliding"],
                ["Foliation", "Metamorphic planar fabric", "Slaty, schistose, gneissose", "Sliding along fabric"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Classifying faults and unconformities",
              caption:
                "Top row: faults by movement sense; bottom row: unconformities by bed geometry.",
              axes: { x: "Movement or geometry sense", y: "Tension vs compression / parallel vs angular" },
              quadrants: [
                { label: "Normal fault (hanging wall down)", note: "tensional regime" },
                { label: "Reverse fault (hanging wall up)", note: "compressional regime" },
                { label: "Disconformity (parallel beds, erosion surface)", note: "time gap with parallelism" },
                { label: "Angular unconformity (tilted below, flat above)", note: "tilting before deposition" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked about faults, joints and unconformities together, draw four small labelled sketches on one figure - normal fault, reverse fault, joint set and angular unconformity - and tabulate the differences in one row each. The visual comparison earns full marks in seven-mark questions.",
            },
            keyTerms: [
              { term: "Fault", definition: "A fracture along which the rock blocks on either side have moved relative to each other by a measurable amount." },
              { term: "Joint", definition: "A fracture in rock along which there has been no measurable movement, occurring in parallel sets or systems." },
              { term: "Unconformity", definition: "A surface of erosion or non-deposition separating younger rocks from older rocks, representing a gap in the geological record." },
            ],
            examQuestions: [
              {
                q: "Define faults, joints and unconformities. Classify each type with neat sketches and state their engineering significance.",
                marks: 7,
                outline: [
                  "Define a fault as a fracture with measurable movement; name hanging wall and footwall.",
                  "Classify faults: normal (hanging wall down, tension), reverse (hanging wall up, compression), strike-slip (horizontal).",
                  "Define joints as fractures without measurable movement; systematic and columnar types.",
                  "State that joints reduce strength and raise permeability of rock masses.",
                  "Define unconformity as an erosion or non-deposition surface with a time gap.",
                  "Classify unconformities: angular, disconformity, nonconformity, with sketches.",
                  "Engineering significance: faults give shattered zones and leakage paths; joints control slope stability and blasting; unconformities are weak horizons and aquifers.",
                ],
              },
              {
                q: "Define a fault in geology.",
                marks: 2,
              },
              {
                q: "Name the three types of unconformity with one distinguishing feature of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Geological maps and cross-sections",
            body: [
              "A geological map records the distribution of rock formations at the Earth's surface, using distinct colours and symbols for each formation, contact lines where formations meet, and special symbols for strike and dip, fold axes, faults and unconformities. Topographic contours are usually overlaid so that the relationship between geological boundaries and relief is visible. The map is the primary tool of geological communication: it shows which formations underlie a proposed dam, tunnel or road, where the contacts run, and how the structures trend across the site. Reading a geological map therefore precedes every site investigation.",
              "A geological cross-section reconstructs the subsurface geometry along a chosen line on the map, displaying the formations and structures in vertical profile. Construction begins by drawing a topographic profile along the section line from the contours; then the formation contacts are projected from the map onto the profile, and the dips of each formation are used to draw the contacts into the subsurface to a chosen depth. Vertical exaggeration - the ratio of vertical scale to horizontal scale - is often applied to make gentle dips visible, and must be reported because it distorts true angles. The result is a slice through the Earth that an engineer can read for foundation, tunnel and slope conditions.",
              "Cross-sections make map data quantitative. The true thickness of a formation is computed from its map width and dip, and is essential for aggregate reserve estimation and for assessing aquifer thickness. The depth to a particular formation below a foundation is found by projecting its dip from the nearest outcrop. Apparent dip along an oblique section is converted to true dip to avoid mis-plotting. For civil engineering, a cross-section along a dam axis reveals whether the abutments are in the same formation, whether a fault crosses the foundation, and whether a permeable bed dips towards the downstream side - all factors that may otherwise stay hidden until excavation begins.",
            ],
            bullets: [
              "Geological map: shows formation distribution, contacts and structural symbols overlaid on topography.",
              "Cross-section: vertical profile along a chosen line, drawn from map data.",
              "Construction: topographic profile, project contacts, draw dips into subsurface.",
              "Vertical exaggeration: vertical scale divided by horizontal scale; must be reported to avoid angle distortion.",
              "True thickness from map width and dip; depth to a formation by projecting its dip from outcrop.",
            ],
            codeExample: {
              language: "text",
              caption: "Steps to construct a geological cross-section from a map.",
              code: [
                "CROSS-SECTION CONSTRUCTION",
                "",
                "1. Draw the section line A-A' on the geological map.",
                "2. Lay a strip of paper along A-A' and mark every contour crossing.",
                "3. Transfer the contour heights to a graph; join points to draw the topographic profile.",
                "4. Mark each formation contact where it crosses A-A' on the profile.",
                "5. At each contact, draw the dip using the true (or apparent) dip angle.",
                "6. Extend the contacts into the subsurface to the desired depth.",
                "7. Apply vertical exaggeration if needed; report the VE value on the section.",
                "8. Label formations, faults and unconformities on the cross-section.",
                "9. Compute true thickness from map width w and dip d: t = w * sin(d).",
                "10. Compute depth to a formation at distance x: depth = x * tan(d).",
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "From geological map to cross-section",
              caption:
                "Each layer is a step of interpretation: surface map, topographic profile, projected contacts, completed section.",
              layers: [
                { label: "Geological map", note: "formation colours, contacts, symbols" },
                { label: "Topographic profile along A-A'", note: "contours projected" },
                { label: "Projected contacts with dips", note: "true or apparent dip" },
                { label: "Completed cross-section", note: "labels, faults, vertical exaggeration" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always report vertical exaggeration",
              body: "Vertical exaggeration makes gentle dips visible but distorts every angle. A 45-degree bed drawn at VE = 5 will look almost vertical. Always write the VE value on the cross-section and convert observed angles back to true dip before drawing any conclusion.",
            },
            keyTerms: [
              { term: "Geological map", definition: "A map that shows the surface distribution of rock formations and geological structures using colours, contacts and symbols." },
              { term: "Cross-section", definition: "A vertical profile drawn along a line on a geological map, showing the subsurface geometry of formations and structures." },
              { term: "Vertical exaggeration", definition: "The ratio of vertical scale to horizontal scale on a cross-section, used to make gentle features visible but which distorts true angles." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a geological cross-section from a geological map. Explain vertical exaggeration, true thickness and depth calculation with formulas.",
                marks: 7,
                outline: [
                  "Define a geological map and the data it carries (contacts, dips, faults, contours).",
                  "Choose section line A-A'; lay a paper strip and mark contour crossings.",
                  "Transfer contours to a graph and draw the topographic profile.",
                  "Project formation contacts onto the profile; draw dips into the subsurface.",
                  "Define vertical exaggeration as vertical scale divided by horizontal scale; state its purpose and the need to report it.",
                  "Give true thickness formula t = w * sin(d), where w is map width and d is dip.",
                  "Give depth formula depth = x * tan(d); conclude with engineering uses.",
                ],
              },
              {
                q: "Define a geological map.",
                marks: 2,
              },
              {
                q: "What is vertical exaggeration in a cross-section? Why is it used?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Indian stratigraphy - brief outline",
            body: [
              "The Indian stratigraphic column records the geological history of the subcontinent from the oldest Archaean gneisses to the youngest Quaternary alluvium. The Archaean, more than 2500 million years old, consists of gneisses, schists and granulite-grade metamorphic rocks that form the basement of peninsular India - the Bengal gneiss, the Bundelkhand gneiss and the Charnockite of south India. The Proterozoic Dharwar system overlies the Archaean with metamorphosed sedimentary and volcanic rocks that host the important iron, manganese and gold deposits of Karnataka, and the Cuddapah and Vindhyan systems carry sandstones, limestones and quartzites deposited in stable basins.",
              "The Purana and Vindhyan systems grade upward into the Gondwana system of the Permian to Jurassic, which occupies rift valleys along the Damodar, Mahanadi and Godavari and contains India's major coal deposits - the Jharia, Raniganj and Bokaro fields. The close of the Gondwana is marked by the Deccan Trap volcanism at the Cretaceous-Tertiary boundary, which spread vast basalt flows over western and central India, the parent material of the black cotton soils of Maharashtra. Marine Tertiary sediments occur in Gujarat, Rajasthan and along the coasts, and hold petroleum in the Bombay High and Assam.",
              "The Quaternary alluvium of the Indo-Gangetic plain, the largest recent formation, covers most of northern India and provides the fertile soil and groundwater that sustain the region's population. For the civil engineer, the stratigraphic column predicts foundation conditions across the country: peninsular sites on Archaean gneiss or Deccan basalt offer strong rock at shallow depth, alluvial sites in the Ganga plain need deep piled foundations through soft clay and sand, and the Gondwana coal belts and Cuddapah limestones call for karst and subsidence checks. A working knowledge of Indian stratigraphy is therefore essential for any major civil project.",
            ],
            bullets: [
              "Archaean: gneiss, schist, charnockite; peninsular basement, >2500 million years.",
              "Dharwar and Purana: metamorphosed sediments with iron, manganese and gold of Karnataka.",
              "Vindhyan: sandstones, limestones and quartzites in stable central Indian basins.",
              "Gondwana: coal-bearing rift-valley sediments of Permian-Jurassic; Jharia, Raniganj.",
              "Deccan Trap: vast basalt flows at the Cretaceous-Tertiary boundary; parent of black cotton soils.",
            ],
            table: {
              caption: "Indian stratigraphic column: era, system, rock type and example.",
              headers: ["Era", "System", "Rock type", "Example / resource"],
              rows: [
                ["Archaean", "Archaean gneiss", "Gneiss, schist, charnockite", "Bundelkhand, peninsular basement"],
                ["Proterozoic", "Dharwar", "Metasediments, metavolcanics", "Iron ore of Bellary, gold of Kolar"],
                ["Proterozoic", "Cuddapah / Vindhyan", "Sandstone, limestone, quartzite", "Vindhyan sandstones, cement limestone"],
                ["Permian-Jurassic", "Gondwana", "Sandstone, shale, coal", "Jharia, Raniganj, Bokaro coal"],
                ["Cretaceous-Tertiary", "Deccan Trap", "Basalt flows", "Black cotton soil of Maharashtra"],
                ["Tertiary", "Tertiary sediments", "Sandstone, shale, limestone", "Petroleum of Bombay High, Assam"],
                ["Quaternary", "Alluvium", "Sand, silt, clay", "Indo-Gangetic plain soils and aquifers"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Indian stratigraphic column as a time pipeline",
              caption:
                "Each stage is a system in the column, oldest on the left, youngest on the right.",
              stages: [
                { label: "Archaean", note: "gneiss basement" },
                { label: "Dharwar / Purana", note: "metasediments, ores" },
                { label: "Vindhyan", note: "sandstone, limestone" },
                { label: "Gondwana", note: "coal-bearing rifts" },
                { label: "Deccan Trap", note: "basalt flows" },
                { label: "Tertiary", note: "petroleum-bearing" },
                { label: "Quaternary", note: "Indo-Gangetic alluvium" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the Indian column as a seven-step chain: Archaean, Dharwar (or Purana), Vindhyan, Gondwana, Deccan Trap, Tertiary, Quaternary. For each, recall one rock type and one economic resource - gneiss, iron ore, limestone, coal, basalt, petroleum, alluvium.",
            },
            keyTerms: [
              { term: "Archaean", definition: "The oldest era of Indian stratigraphy, comprising gneisses and high-grade metamorphic rocks that form the peninsular basement." },
              { term: "Gondwana", definition: "A Permian-Jurassic system of rift-valley sandstones and shales in India that holds the major coal deposits of Jharia, Raniganj and Bokaro." },
              { term: "Deccan Trap", definition: "A vast sequence of Cretaceous-Tertiary basalt flows covering western and central India, the parent material of black cotton soils." },
            ],
            examQuestions: [
              {
                q: "Give a brief outline of Indian stratigraphy from the Archaean to the Quaternary, naming the major systems, their rock types and economic importance.",
                marks: 7,
                outline: [
                  "Archaean: gneiss, schist, charnockite; peninsular basement; Bundelkhand, Charnockite.",
                  "Proterozoic Dharwar: metasediments and metavolcanics; iron ore of Karnataka, gold of Kolar.",
                  "Purana (Cuddapah) and Vindhyan: sandstones, limestones, quartzites; cement limestone.",
                  "Gondwana (Permian-Jurassic): coal-bearing rift-valley sediments; Jharia, Raniganj, Bokaro.",
                  "Deccan Trap (Cretaceous-Tertiary): vast basalt flows; black cotton soil parent.",
                  "Tertiary: marine sediments in Gujarat, Assam, Bombay High; petroleum.",
                  "Quaternary: Indo-Gangetic alluvium; fertile soil and groundwater.",
                ],
              },
              {
                q: "What is the Deccan Trap?",
                marks: 2,
              },
              {
                q: "Write a short note on the Gondwana system of India.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT III =====
    {
      number: 3,
      roman: "III",
      title: "Engineering Geology for Civil Works",
      summary:
        "The application of geology to civil engineering: geological criteria for dam site selection, water-tightness of reservoirs and sedimentation, geological factors in bridge and tunnel alignment, foundation behaviour on igneous, sedimentary and metamorphic rocks, and the geological hazards of earthquakes, landslides, floods and subsidence.",
      chapter: {
        number: "03",
        title: "Engineering Geology for Civil Works",
        intro:
          "Unit III applies geology to the works of the civil engineer. Dam site selection demands sound, watertight foundation rock and stable abutments; reservoirs require watertight basins free of karst and fault zones; bridge piers need scour-resistant foundations and tunnels need stable alignments through sound rock with controlled groundwater; foundations behave very differently on igneous, sedimentary and metamorphic rocks; and geological hazards - earthquakes, landslides, floods and subsidence - must be recognised and mitigated.",
        inOneBreath:
          "A good dam site has sound, massive foundation rock, watertight abutments, no faults or cavernous limestone and a favourable spillway geology; a reservoir needs a watertight basin of low-permeability rock with no fault zones or karst, an adequate catchment and acceptable sediment yield; bridge piers rest on scour-resistant rock or compact alluvium and approach roads avoid unstable slopes; tunnel alignments prefer sound massive rock, avoid faults and groundwater, and rely on stand-up time to set support; foundations on igneous rocks are strong and massive, on sedimentary rocks anisotropic along bedding and on metamorphic rocks dependent on foliation; and geological hazards include earthquakes scaled by Richter, landslides classified as fall, slide, flow and creep, floods and land subsidence.",
        sections: [
          {
            number: "3.1",
            title: "Dam site selection",
            body: [
              "The geological investigation of a dam site seeks sound, watertight rock for the foundation and abutments, adequate spillway geology, and a reservoir rim that will not leak. Foundation rock must be strong enough to carry the dam load without excessive settlement or shear, and free of weak seams, shear zones or cavernous horizons. Massive igneous rocks such as granite and gabbro, and dense metamorphic rocks such as quartzite and sound gneiss, are excellent; heavily weathered or fractured rocks, shale, and cavernous limestone are poor. The abutments must carry the thrust of the dam, be stable against sliding and provide a watertight seal against the reservoir rim.",
              "The dam axis should avoid fault zones, which provide crushed permeable rock and may be seismically active, and should avoid steeply dipping permeable beds that could carry water under pressure beneath the dam. The spillway location needs rock that can resist scour from high-velocity water - typically massive, unjointed granite or quartzite. Reservoir geology demands a basin floored by low-permeability rock or covered by an adequate alluvial seal, with no karst, no faults communicating with adjacent valleys, and no gypsum or other soluble beds that could develop leakage paths after first filling. A geological map and cross-section along the dam axis are the basic investigation tools.",
              "Engineering geological studies at a dam site include surface mapping, diamond drilling with in-situ permeability tests (Lugeon values), geophysical profiling, and exploratory adits or shafts in critical abutment areas. The data feed a rock-mass classification such as RMR or Q, which sets allowable bearing pressures, grouting requirements and excavation limits. Dams on unfavourable geology - the Kariba gorge in karstic limestone, the Malpasset arch dam on a weak thrust zone - have historically failed. The lesson is that no dam is stronger than its foundation, and geological criteria outweigh concrete strength in determining overall safety.",
            ],
            bullets: [
              "Foundation: sound, massive, low-permeability rock; granite, gneiss, quartzite preferred.",
              "Abutments: stable against sliding, watertight against reservoir rim, free of weak seams.",
              "Avoid fault zones, steeply dipping permeable beds, cavernous limestone, gypsum.",
              "Spillway geology: massive, unjointed rock resistant to high-velocity scour.",
              "Investigation tools: geological map, cross-section, diamond drilling, Lugeon tests, RMR/Q classification.",
            ],
            table: {
              caption: "Favourable and unfavourable geological conditions for dam sites.",
              headers: ["Feature", "Favourable", "Unfavourable"],
              rows: [
                ["Foundation rock", "Massive granite, quartzite", "Weathered shale, cavernous limestone"],
                ["Abutments", "Sound, watertight, stable", "Sheared, permeable, steep slopes"],
                ["Faults", "None across axis", "Active or permeable fault zone"],
                ["Reservoir basin", "Low-permeability floor", "Karst, soluble beds, leaking rim"],
                ["Spillway", "Massive scour-resistant rock", "Jointed weak rock"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Dam site: go or no-go based on geology",
              caption:
                "Each geological feature sorts the site into favourable, marginal or rejected.",
              start: "Proposed dam axis",
              branches: [
                { label: "Massive foundation and watertight abutments", outcome: "Approve - proceed to detailed design", good: true },
                { label: "Weathered rock, treatable by grouting", outcome: "Conditional - heavy grouting and drainage", good: true },
                { label: "Fault zone or karstic limestone under axis", outcome: "Reject or shift axis", good: false },
                { label: "Permeable steeply dipping beds under reservoir", outcome: "Reject - leakage risk", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Lugeon values decide grouting",
              body: "A Lugeon value above about 1 indicates permeable rock needing cement grouting; above 5 indicates heavy grouting; above 10 may force redesign. Always pair the Lugeon test with a geological section - high values in a fault zone mean rerouting, not just more grout.",
            },
            keyTerms: [
              { term: "Dam foundation", definition: "The rock mass beneath a dam that carries its load and must be strong, watertight and free of weak seams or shear zones." },
              { term: "Abutment", definition: "The valley sides against which a dam is keyed, required to carry thrust, resist sliding and seal the reservoir rim." },
              { term: "Lugeon test", definition: "An in-situ water-pressure test in a borehole that measures rock-mass permeability in Lugeon units, used to design dam grouting." },
            ],
            examQuestions: [
              {
                q: "Discuss the geological criteria for the selection of a dam site. State the favourable and unfavourable conditions and the field tests carried out.",
                marks: 7,
                outline: [
                  "Foundation: sound, massive, low-permeability rock such as granite or quartzite.",
                  "Abutments: stable against sliding, watertight against the reservoir rim.",
                  "Avoid fault zones, steeply dipping permeable beds, karstic limestone and gypsum.",
                  "Spillway: massive, unjointed, scour-resistant rock.",
                  "Reservoir rim and basin: low-permeability floor, no soluble beds, no leaking faults.",
                  "Field tests: geological map and cross-section, diamond drilling, Lugeon tests, geophysics.",
                  "Use rock-mass classification (RMR/Q) to set bearing pressure and grouting; cite Kariba and Malpasset as cautionary cases.",
                ],
              },
              {
                q: "Define a dam foundation.",
                marks: 2,
              },
              {
                q: "Name any three geological hazards that must be avoided at a dam site.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Reservoir sites and water-tightness",
            body: [
              "A reservoir is acceptable only when its basin holds water without excessive leakage and its life is not shortened by rapid sedimentation. Water-tightness is governed by the geology of the basin floor and rim: the rocks must be of low permeability, free of fault zones, joints and cavernous horizons, and the basin should not communicate through permeable beds with an adjacent valley. Massive igneous rocks, dense metamorphic rocks and unfractured shales make excellent reservoir floors; sandstones and limestones, with their high primary or secondary permeability, are risky unless covered by an impervious alluvial blanket or treated by grouting.",
              "Karst topography in limestone is the most dangerous reservoir condition: solution along joints and bedding develops sinkholes, caverns and subterranean channels that may drain the reservoir entirely within days of first filling. The famous failures of the Hales Bar and Montejaque reservoirs on limestone illustrate the problem. Faults crossing the basin or rim provide crushed permeable channels that water follows to lower ground, and gypsum beds dissolve to form cavities under hydrostatic pressure. Geological mapping of the rim, geological cross-sections through suspected leakage paths, borehole permeability tests and tracer studies using dyes or salts are the investigation tools.",
              "Reservoir sedimentation shortens the useful life of a dam by reducing its storage capacity. Sediment yield depends on the geology, soil cover, vegetation and slope of the catchment: soft, weathered rocks and deforested slopes deliver the highest yield. Catchment treatment - afforestation, check dams, contour bunding - reduces sediment inflow, and dead storage is provided below the live storage to accommodate the expected sediment over the design life. The sedimentation rate is measured by repeated range surveys inside the reservoir. Hence the geological investigation of a reservoir covers both water-tightness of the basin and the sediment yield of the catchment, since either can compromise the project.",
            ],
            bullets: [
              "Water-tightness: low-permeability basin floor and rim, free of faults, joints and karst.",
              "Karst in limestone: sinkholes and caverns can drain a reservoir within days.",
              "Faults across rim: crushed permeable channels that lead water to adjacent valleys.",
              "Gypsum beds dissolve under hydrostatic pressure to form cavities.",
              "Sediment yield from soft, deforested catchments shortens reservoir life; dead storage and afforestation mitigate.",
            ],
            table: {
              caption: "Reservoir geological factors and their consequences.",
              headers: ["Factor", "Favourable", "Risk", "Consequence"],
              rows: [
                ["Basin rock", "Massive igneous, dense metamorphic", "Sandstone, fractured shale", "Leakage"],
                ["Limestone karst", "None present", "Sinkholes, caverns", "Total loss of water"],
                ["Faults in rim", "None", "Permeable crushed zone", "Leakage to adjacent valley"],
                ["Gypsum beds", "None", "Dissolution under pressure", "Cavity formation, collapse"],
                ["Catchment yield", "Hard rock, forested", "Soft rock, deforested", "Rapid sedimentation"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Reservoir investigation from rim to catchment",
              caption:
                "Each layer is one check from the basin floor upward to the catchment that feeds sediment.",
              layers: [
                { label: "Basin floor geology", note: "low-permeability rock?" },
                { label: "Rim geology and faults", note: "any leakage paths?" },
                { label: "Karst and gypsum check", note: "any soluble beds?" },
                { label: "Catchment sediment yield", note: "soft or deforested?" },
                { label: "Sedimentation survey", note: "range surveys for design life" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always answer reservoir questions in two halves: water-tightness of the basin and sediment yield of the catchment. Cite the Hales Bar or Montejaque karst failure as a named example and the role of dead storage plus afforestation for sediment control.",
            },
            keyTerms: [
              { term: "Reservoir water-tightness", definition: "The capacity of a reservoir basin and rim to hold water without leakage through permeable rocks, faults or karst." },
              { term: "Sedimentation", definition: "The accumulation of sediment delivered by the catchment, reducing the storage capacity and useful life of a reservoir." },
              { term: "Catchment area", definition: "The drainage basin that feeds surface water and sediment to a reservoir, governing its yield and sediment inflow." },
            ],
            examQuestions: [
              {
                q: "Discuss the geological conditions required for a satisfactory reservoir site, covering water-tightness of the basin and sedimentation of the catchment.",
                marks: 7,
                outline: [
                  "State the two governing conditions: water-tightness of the basin and acceptable sediment yield.",
                  "Water-tightness: low-permeability rock floor, no faults, no karst, no gypsum.",
                  "Risk of karst in limestone: sinkholes, caverns; cite Hales Bar or Montejaque.",
                  "Risk of faults in the rim: crushed permeable channels to adjacent valleys.",
                  "Investigation: geological map, cross-sections, borehole permeability, tracer tests.",
                  "Sediment yield: governed by geology, soil, vegetation and slope of the catchment.",
                  "Mitigation: dead storage below live, afforestation, check dams, range surveys.",
                ],
              },
              {
                q: "Define reservoir sedimentation.",
                marks: 2,
              },
              {
                q: "Explain the problem of karst topography in reservoir sites.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Bridge and tunnel alignment",
            body: [
              "Bridges transfer loads through piers and abutments to the foundation, and the geology of each pier location is critical. The pier foundation must rest on a scour-resistant stratum - sound bedrock or dense, well-graded alluvium - below the maximum scour depth of the river. Granite, quartzite and massive sandstone are preferred; loose sand, soft clay and weathered shale demand deep foundations or pile groups. The abutments at the banks must be stable against the lateral thrust of the bridge and the approach embankment, and the approach roads must avoid landslide-prone slopes. Every pier is investigated by boreholes, and the depth to sound rock is plotted along the bridge axis.",
              "Tunnels are aligned to pass through the soundest rock available, avoiding faults, shear zones, heavily jointed ground and groundwater-bearing horizons wherever possible. The stand-up time of the rock - the period an unsupported opening remains stable - decides the excavation method and the timing of support installation: massive granite may stand for days, while shattered shale collapses within hours. Rock-mass classification systems such as RMR, Q and Terzaghi's rock load translate geological observations into support pressures. Tunnels in weak rock need steel sets, shotcrete and rock bolts; tunnels below the water table need pre-grouting and drainage; and tunnels crossing faults need special support and instrumentation.",
              "The cover or depth of rock above a tunnel influences its stability: too little cover allows loosening and surface settlement; too much brings high in-situ stress, spalling or rock bursts in brittle rock. The portal sections are particularly vulnerable, often in weathered rock, and need careful slope stabilisation, drainage and support. Ventilation and muck disposal are governed by the rock type, since dusty quartzite raises silicosis risk and swelling shale expands on exposure to air and water. The choice between a tunnel and a surface road is often a geological decision - sound rock favours a tunnel, weak and permeable ground favours an open cut.",
            ],
            bullets: [
              "Bridge piers rest on scour-resistant stratum below maximum scour depth; boreholes at every pier.",
              "Tunnel alignment prefers the soundest rock, avoiding faults, joints and groundwater.",
              "Stand-up time decides excavation method and support timing; massive rock stands longest.",
              "Cover influences stability: too little allows loosening, too much invites stress bursts.",
              "Portals in weathered rock need stabilisation, drainage and support; quartzite demands dust control.",
            ],
            table: {
              caption: "Geological requirements for bridges and tunnels.",
              headers: ["Structure", "Geological requirement", "Risk", "Mitigation"],
              rows: [
                ["Bridge pier", "Scour-resistant stratum below scour depth", "Settlement under load", "Boreholes, piles to rock"],
                ["Bridge abutment", "Stable, thrust-resistant bank", "Slope failure", "Slope stabilisation, drainage"],
                ["Tunnel in sound rock", "Massive, low-jointed ground", "Minor spall", "Rock bolts, shotcrete"],
                ["Tunnel in weak rock", "Shear zone, shattered shale", "Collapse, water inflow", "Steel sets, forepoling, grouting"],
                ["Tunnel portal", "Stable, weathered slope", "Landslide at entry", "Retaining wall, drainage, bolts"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Tunnel alignment geological investigation",
              caption:
                "From desk study of maps to in-tunnel support installation, each step gates the next.",
              steps: [
                { label: "Desk study: geological maps and sections" },
                { label: "Surface mapping along alignment", note: "lithology, structure" },
                { label: "Boreholes and geophysics", note: "rock quality, water table" },
                { label: "Rock-mass classification (RMR, Q)", note: "support pressure" },
                { label: "Excavation with stand-up time", note: "support follows" },
              ],
            },
            callout: {
              type: "warning",
              title: "Faults and water kill tunnels",
              body: "Most tunnel failures occur where an alignment crosses a fault or a water-bearing horizon unexpectedly. A pre-construction borehole programme and a probe drill ahead of the face during excavation are cheap insurance against a collapse that can shut a project for months.",
            },
            keyTerms: [
              { term: "Tunnel alignment", definition: "The chosen route of a tunnel through the ground, selected to pass through the soundest available rock and to avoid faults and groundwater." },
              { term: "Bridge pier", definition: "The intermediate support of a bridge that transfers load to a scour-resistant foundation stratum below the river bed." },
              { term: "Stand-up time", definition: "The period an unsupported tunnel opening remains stable before support must be installed, dependent on rock-mass quality." },
            ],
            examQuestions: [
              {
                q: "Discuss the geological factors governing tunnel alignment. Explain stand-up time, rock-mass classification and the support requirements in different rock conditions.",
                marks: 7,
                outline: [
                  "State that alignment seeks the soundest rock, avoiding faults, shear zones, joints and groundwater.",
                  "Define stand-up time and its role in choosing excavation method and support timing.",
                  "Describe rock-mass classification systems RMR, Q and Terzaghi's rock load.",
                  "Support in massive rock: rock bolts and shotcrete.",
                  "Support in weak or shattered rock: steel sets, forepoling, grouting.",
                  "Discuss cover effects: too little loosening, too much stress and bursts.",
                  "Portal sections in weathered rock: stabilisation, drainage; conclude with bridge pier geology.",
                ],
              },
              {
                q: "What geological condition is required for a bridge pier foundation?",
                marks: 2,
              },
              {
                q: "Name three types of tunnel support and where each is used.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Foundations on different rocks",
            body: [
              "Igneous rocks, with their interlocking crystalline fabric and low porosity, give the strongest and most reliable foundation behaviour. Fresh granite and gabbro carry very high bearing pressures - often above 10 MPa - with negligible settlement, and accept light spread footings directly on the cleaned rock surface. Basalt may carry vesicular and amygdaloidal horizons that reduce local strength, and columnar jointing may allow sliding along the columns; weathered basalt (black cotton soil parent) demands deeper foundations. Sound igneous rock is the preferred foundation for heavy structures such as dams, bridges and high-rise buildings.",
              "Sedimentary rocks are bedded and anisotropic: their strength and permeability vary sharply with the direction of loading relative to the bedding. Sandstone, when well cemented, gives good bearing capacity, but porous or poorly cemented varieties settle and creep under load. Shale is the most problematic sedimentary foundation: it softens and swells on wetting, slakes on drying, and develops low shear strength along bedding, often requiring rafts or piles. Limestone, though strong in massive form, may hide karstic cavities that collapse under foundation load; foundation boreholes on limestone must probe for voids. The dip of the beds matters: a foundation loaded against the dip is more stable than one loaded with the dip.",
              "Metamorphic rocks vary widely with their fabric. Non-foliated types such as marble and quartzite behave as massive, strong foundation media, similar to igneous rocks, and carry heavy loads safely. Foliated types - slate, schist and phyllite - have a strong anisotropy along the foliation: loading parallel to the foliation gives high strength, but loading normal to it may cause sliding and excessive settlement. Gneiss, with its banded fabric, is intermediate. Hence the orientation of the foliation relative to the foundation and any nearby slope must be mapped before the bearing capacity is fixed, and foliated rocks generally demand a deeper, more heavily reinforced foundation than a massive rock of the same composition.",
            ],
            bullets: [
              "Igneous: fresh granite, gabbro - very high bearing capacity, negligible settlement.",
              "Basalt: vesicular and columnar jointing can reduce local strength.",
              "Sandstone: well-cemented strong; porous or weakly cemented variable.",
              "Shale: softens, swells, slakes - often needs rafts or piles.",
              "Foliated metamorphic rocks: strength depends on foliation orientation; load normal to foliation is weak.",
            ],
            table: {
              caption: "Foundation behaviour on different rock types.",
              headers: ["Rock type", "Bearing capacity", "Behaviour", "Foundation note"],
              rows: [
                ["Fresh granite, gabbro", "10+ MPa", "Massive, strong, low permeability", "Spread footing on cleaned rock"],
                ["Vesicular basalt", "3-5 MPa", "Local weakness along vesicles", "Probe, deeper footing"],
                ["Well-cemented sandstone", "4-6 MPa", "Anisotropic along bedding", "Load against dip where possible"],
                ["Shale", "1-2 MPa", "Softens and swells on wetting", "Rafts or piles"],
                ["Massive limestone", "5-8 MPa", "Karst cavities possible", "Borehole probe for voids"],
                ["Quartzite, marble", "8+ MPa", "Massive, strong", "Direct spread footing"],
                ["Slate, schist", "2-4 MPa", "Anisotropic along foliation", "Map orientation, deeper footing"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Foundations on three rock families",
              caption:
                "Igneous and massive metamorphic rocks give reliable strength; sedimentary and foliated metamorphic rocks are anisotropic and need orientation-specific design.",
              left: {
                heading: "Reliable foundations",
                items: [
                  "Fresh granite: massive, high capacity",
                  "Gabbro, diorite: similar to granite",
                  "Quartzite: massive metamorphic",
                  "Marble: massive metamorphic",
                  "Spread footing on cleaned rock",
                ],
              },
              right: {
                heading: "Anisotropic foundations",
                items: [
                  "Sandstone: bedding-controlled strength",
                  "Shale: softens and swells on wetting",
                  "Limestone: karst cavity risk",
                  "Slate and schist: foliation-controlled",
                  "Deeper footings, rafts or piles needed",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When answering foundation questions, group the rocks into reliable (igneous + massive metamorphic) and anisotropic (sedimentary + foliated metamorphic). For each, give the bearing capacity range, one characteristic problem and the foundation type. The contrast carries the marks.",
            },
            keyTerms: [
              { term: "Bearing capacity", definition: "The maximum pressure a foundation rock or soil can carry without failure or excessive settlement, reported in MPa." },
              { term: "Settlement", definition: "The vertical downward movement of a foundation under load, governed by rock strength, modulus and jointing." },
              { term: "Rock mass quality", definition: "A numerical rating such as RMR or Q that combines intact rock strength, joint spacing, condition and water to predict engineering behaviour." },
            ],
            examQuestions: [
              {
                q: "Discuss the foundation behaviour of igneous, sedimentary and metamorphic rocks. Give typical bearing capacities, characteristic problems and the foundation types suitable for each.",
                marks: 7,
                outline: [
                  "Igneous: fresh granite, gabbro - high capacity above 10 MPa, negligible settlement, spread footing.",
                  "Basalt: vesicular and columnar jointing reduce local strength; deeper footing.",
                  "Sedimentary: bedded and anisotropic; sandstone 4-6 MPa, shale 1-2 MPa, limestone with karst risk.",
                  "Shale: softens and swells on wetting; rafts or piles.",
                  "Limestone: probe boreholes for karst cavities before loading.",
                  "Metamorphic non-foliated (quartzite, marble): massive, high capacity like igneous.",
                  "Foliated (slate, schist): anisotropic along foliation; deeper reinforced footings after mapping orientation.",
                ],
              },
              {
                q: "Define bearing capacity of a foundation.",
                marks: 2,
              },
              {
                q: "Why is limestone a problematic foundation rock? State the engineering solution.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Geological hazards: earthquakes, landslides, floods, subsidence",
            body: [
              "Earthquakes result from the sudden release of strain energy accumulated along faults, mostly at plate boundaries. The focus or hypocentre is the underground source, the epicentre the point on the surface directly above. Magnitude measures the total energy released on the Richter scale, logarithmic and instrument-based; intensity measures observed damage on the Modified Mercalli scale, twelve-graded and qualitative. India is divided into seismic zones II to V, with zone V (the Himalayan belt, Kutch, North-East) requiring the highest earthquake-resistant design. The geology of the site - soil versus rock, depth to water table, distance to fault - governs local ground shaking and liquefaction risk in saturated sands.",
              "Landslides are mass movements of soil or rock down a slope under gravity. The four main types are falls (rapid free fall of rock from a cliff), slides (shear along a definite surface, translational or rotational), flows (rapid movement of water-saturated material) and creep (slow, continuous deformation). Triggers include heavy rainfall that raises pore-water pressure, earthquakes that shock the mass, undercutting by rivers or roads, and human activity such as blasting or deforestation. Landslides are mapped from terrain evaluation, geomorphology and historical records; mitigation includes drainage, retaining walls, rock bolts, biotechnical slope protection and avoidance through zoning in the most hazardous terrain.",
              "Floods and land subsidence complete the family of geological hazards. Floods are governed by basin geology, channel geometry and rainfall intensity: a basin on impermeable rock generates rapid runoff, while one on permeable sandstone attenuates the flood. Subsidence may be tectonic (slow regional downwarping), or human-induced by groundwater withdrawal, mining or dissolution of gypsum and salt; the sinking cities of Mexico and Venice are classic examples. Tsunamis, generated by submarine earthquakes, are coastal hazards whose run-up depends on near-shore bathymetry. Civil engineering response combines hazard mapping, monitoring, regulation of land use and engineered protection, and increasingly relies on remote sensing and GIS for early warning and damage assessment.",
            ],
            bullets: [
              "Earthquake: focus, epicentre; Richter magnitude (energy), Modified Mercalli intensity (damage).",
              "Indian seismic zones II-V; zone V covers Himalaya, Kutch, North-East.",
              "Landslide types: fall, slide (translational or rotational), flow, creep.",
              "Landslide triggers: rainfall, earthquake, undercutting, human activity.",
              "Subsidence: tectonic, or induced by groundwater withdrawal, mining, dissolution of gypsum or salt.",
            ],
            table: {
              caption: "Geological hazards: cause, indicator and mitigation.",
              headers: ["Hazard", "Cause", "Indicator", "Mitigation"],
              rows: [
                ["Earthquake", "Fault slip, plate motion", "Richter magnitude, Mercalli intensity", "Zoning, codes, resistant design"],
                ["Landslide", "Rainfall, earthquake, undercutting", "Cracks, tilted trees, seepage", "Drainage, bolts, retaining walls"],
                ["Flood", "Heavy rain, basin geology", "Rising stage, bank overflow", "Levees, channel improvement, zoning"],
                ["Subsidence", "Groundwater withdrawal, mining, dissolution", "Sinking ground, cracked walls", "Controlled withdrawal, grouting"],
                ["Tsunami", "Submarine earthquake", "Receding sea, sudden wave", "Coastal zoning, warning system"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Hazard types by speed and trigger",
              caption:
                "Quadrants sort hazards by speed of onset (sudden vs slow) and trigger (natural vs human).",
              axes: { x: "Sudden vs slow onset", y: "Natural vs human trigger" },
              quadrants: [
                { label: "Earthquakes and tsunamis (sudden, natural)", note: "zone-based design" },
                { label: "Landslides (sudden, mixed)", note: "rainfall + human triggers" },
                { label: "Creep and tectonic subsidence (slow, natural)", note: "monitoring over years" },
                { label: "Mining subsidence, groundwater-induced (slow, human)", note: "regulated withdrawal" },
              ],
            },
            callout: {
              type: "warning",
              title: "Liquefaction in saturated sand",
              body: "During an earthquake, saturated loose sand loses strength and behaves as a liquid, sinking heavy structures and buoying light ones such as tanks. Foundation investigation on alluvial sites must include SPT blow counts; below a threshold the sand must be densified by vibroflotation or stone columns.",
            },
            keyTerms: [
              { term: "Earthquake", definition: "A sudden shaking of the ground caused by release of strain energy along a fault, measured by magnitude (Richter) and intensity (Mercalli)." },
              { term: "Landslide", definition: "A mass movement of soil or rock down a slope under gravity, classified as fall, slide, flow or creep." },
              { term: "Subsidence", definition: "Gradual sinking of the ground surface caused by tectonic downwarping, groundwater withdrawal, mining or dissolution of soluble beds." },
            ],
            examQuestions: [
              {
                q: "Describe the geological hazards relevant to civil engineering - earthquakes, landslides, floods and subsidence. Give causes, scales of measurement and mitigation measures for each.",
                marks: 7,
                outline: [
                  "Earthquakes: caused by fault slip; define focus and epicentre.",
                  "Magnitude on Richter (energy, logarithmic); intensity on Modified Mercalli (damage, 12 grades).",
                  "Indian seismic zones II-V; zone V covers Himalaya, Kutch, North-East.",
                  "Landslides: four types - fall, slide (translational, rotational), flow, creep; triggers rainfall, earthquake, undercutting.",
                  "Floods: governed by basin geology and rainfall intensity; impermeable basin gives rapid runoff.",
                  "Subsidence: tectonic or induced by groundwater, mining, dissolution; examples Mexico, Venice.",
                  "Mitigation: zoning, monitoring, drainage, retaining walls, codes and remote sensing for warning.",
                ],
              },
              {
                q: "Define a landslide.",
                marks: 2,
              },
              {
                q: "Distinguish between Richter magnitude and Mercalli intensity.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT IV =====
    {
      number: 4,
      roman: "IV",
      title: "Remote Sensing Fundamentals",
      summary:
        "The physics and platforms of earth observation: the electromagnetic spectrum and the interaction of energy with the earth surface, the ground-airborne-satellite platforms and their orbits, the four resolutions - spatial, spectral, temporal and radiometric - that govern image quality, active and passive sensors, and the elements of visual image interpretation.",
      chapter: {
        number: "04",
        title: "Remote Sensing Fundamentals",
        intro:
          "Unit IV introduces the science of acquiring information about the earth without physical contact. The electromagnetic spectrum is the carrier of information; energy interacts with the surface by reflection, absorption and transmission to produce spectral signatures; platforms from ground-based to satellite carry the sensors; four resolutions trade off against each other; active and passive sensors differ in illumination and weather limits; and visual image interpretation uses eight elements to read the imagery.",
        inOneBreath:
          "Remote sensing uses seven wavelength regions from UV through visible, NIR, SWIR, MWIR, TIR to microwave; energy interacts with the surface by reflection, absorption and transmission governed by spectral signatures unique to each material; platforms are ground-based, airborne (aircraft, drone) or satellite in sun-synchronous, geostationary or polar orbits - India's IRS, Resourcesat, Cartosat series; four resolutions trade off - spatial (pixel size), spectral (number and width of bands), temporal (revisit time) and radiometric (bit depth); passive sensors rely on solar illumination and are weather-limited, while active sensors such as radar and LiDAR emit their own energy and work day and night; and image interpretation uses tone, texture, shape, size, pattern, shadow, site and association to identify features.",
        sections: [
          {
            number: "4.1",
            title: "EM spectrum and energy interaction with earth surface",
            body: [
              "The electromagnetic spectrum is the continuum of energy waves classified by wavelength, from the short gamma rays and X-rays through ultraviolet, visible, infrared and microwave to the long radio waves. Remote sensing uses those wavelength regions that pass through the atmosphere - the atmospheric windows - and interact usefully with earth materials. The principal windows lie in the visible (0.4 to 0.7 micrometres), near and short-wave infrared (0.7 to 2.5 micrometres), thermal infrared (8 to 14 micrometres), and microwave (1 mm to 1 m). Outside the windows, atmospheric absorption by water vapour, carbon dioxide and ozone blocks the signal.",
              "When incident energy strikes the earth surface, three processes occur: reflection, absorption and transmission, governed by the energy conservation law that incident energy equals reflected plus absorbed plus transmitted energy. The proportion reflected varies with wavelength and material, producing a spectral signature - a curve of reflectance against wavelength - that is unique for each material. Vegetation reflects strongly in the near infrared because of its cellular structure and absorbs in the red for photosynthesis; water reflects in the visible blue but absorbs in the near infrared, appearing dark; dry soil shows a gradual rise in reflectance across visible and near infrared.",
              "Spectral signatures are the basis for material identification from imagery and for designing sensor band passes. A multispectral sensor samples the spectrum in a few broad bands, while a hyperspectral sensor samples in hundreds of narrow bands, capturing fine absorption features such as the clay absorption near 2.2 micrometres used to map alteration zones in mineral exploration. The geometry of reflection - specular on smooth surfaces like water, diffuse on rough surfaces like forests - also matters, as does the bidirectional reflectance that varies with sun and view angles. Understanding the spectrum and interaction physics lets the engineer choose the right band for the task, whether mapping water, vegetation, rock or urban land.",
            ],
            bullets: [
              "EM spectrum regions used: visible, NIR, SWIR, TIR, microwave - all in atmospheric windows.",
              "Energy conservation: incident equals reflected plus absorbed plus transmitted energy.",
              "Spectral signature: unique reflectance-vs-wavelength curve for each material.",
              "Vegetation: high NIR reflectance, red absorption by chlorophyll.",
              "Water: visible reflectance with NIR absorption; appears dark in NIR bands.",
            ],
            codeExample: {
              language: "text",
              caption: "Principal EM spectrum windows used in remote sensing.",
              code: [
                "EM SPECTRUM - REMOTE SENSING WINDOWS",
                "",
                "Region        Wavelength        Use",
                "-----         ----------        ---------------------------",
                "UV            0.3-0.4 um        Water quality, ozone",
                "Visible       0.4-0.7 um        Land cover, true-colour images",
                "NIR           0.7-1.3 um        Vegetation vigour, water bodies",
                "SWIR          1.3-2.5 um        Soil moisture, mineral mapping",
                "MWIR          3-5 um            Hot targets, fires",
                "TIR           8-14 um          Surface temperature, heat islands",
                "Microwave     1 mm-1 m         All-weather, radar, soil moisture",
                "",
                "Atmospheric absorbers:",
                "  water vapour, carbon dioxide, ozone",
                "Spectral signature key features:",
                "  vegetation: red absorption, NIR reflectance peak",
                "  water: NIR absorption",
                "  clay minerals: absorption at 2.2 um",
              ].join("\n"),
            },
            diagram: {
              kind: "flow",
              title: "Energy flow from source to sensor",
              caption:
                "The sun emits energy; the atmosphere transmits; the surface reflects; the sensor records.",
              steps: [
                { label: "Energy source (sun or active sensor)" },
                { label: "Atmospheric transmission", note: "windows, absorption" },
                { label: "Surface interaction", note: "reflect, absorb, transmit" },
                { label: "Spectral signature", note: "unique per material" },
                { label: "Sensor records reflected energy" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always pair the EM spectrum question with the energy-balance equation: incident equals reflected plus absorbed plus transmitted. Then plot three spectral signatures on a single graph - vegetation, water and dry soil - to show how bands separate materials.",
            },
            keyTerms: [
              { term: "EM spectrum", definition: "The continuum of electromagnetic energy classified by wavelength, with remote sensing using visible, infrared and microwave regions lying in atmospheric windows." },
              { term: "Spectral signature", definition: "The unique curve of reflectance against wavelength for a material, used to identify it from multispectral or hyperspectral imagery." },
              { term: "Reflectance", definition: "The ratio of reflected to incident energy at a given wavelength, expressed as a percentage or fraction between 0 and 1." },
            ],
            examQuestions: [
              {
                q: "Describe the electromagnetic spectrum and the interaction of energy with the earth surface. Explain spectral signatures with a neat sketch.",
                marks: 7,
                outline: [
                  "Define the EM spectrum and the wavelength regions used in remote sensing.",
                  "List the principal atmospheric windows: visible, NIR/SWIR, TIR, microwave.",
                  "State the energy conservation equation: incident = reflected + absorbed + transmitted.",
                  "Define spectral signature as the reflectance-vs-wavelength curve unique to each material.",
                  "Sketch spectral signatures for vegetation (red absorption, NIR peak), water (NIR absorption) and dry soil.",
                  "Note the clay absorption at 2.2 um used in mineral mapping.",
                  "Conclude with band selection for water, vegetation, rock and urban mapping.",
                ],
              },
              {
                q: "Define spectral signature.",
                marks: 2,
              },
              {
                q: "What are atmospheric windows? Name any three.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Remote sensing platforms and orbits",
            body: [
              "A remote sensing platform is the vehicle that carries the sensor above the target. Three altitude classes are recognised: ground-based platforms such as booms, towers and field spectrometers; airborne platforms such as aircraft, helicopters and unmanned aerial vehicles; and space-borne platforms - satellites in orbit around the earth. Each class trades resolution against coverage: ground platforms give the highest detail over the smallest area, aircraft give metre-scale pixels over tens of kilometres, and satellites give tens of metres to hundreds of metres pixels over the whole globe on a regular revisit.",
              "Satellite orbits are chosen to match the mission. A sun-synchronous orbit crosses each latitude at the same local solar time, keeping illumination constant for change detection and vegetation monitoring; nearly all earth-resource satellites such as Landsat and the Indian IRS series use this orbit at about 700 to 900 km altitude. A geostationary orbit, at about 36000 km over the equator, has a 24-hour period matching earth rotation and so appears stationary over a fixed longitude; it is used for weather and communication satellites such as INSAT that image the same hemisphere every half hour. Polar orbits pass over or near the poles to give full global coverage over repeated cycles.",
              "India operates one of the world's largest civilian remote sensing constellations. The IRS series began with IRS-1A in 1988 and continues with Resourcesat, Cartosat, RISAT (radar), Oceansat and INSAT for weather. Cartosat provides stereo imagery at sub-metre resolution for cartography and DEM generation; Resourcesat carries the AWiFS and LISS sensors for vegetation and crop monitoring; RISAT is a C-band radar satellite that images day and night in all weather, useful for flood and disaster mapping. Choosing a platform therefore means choosing altitude, orbit and sensor type - a high-resolution Cartosat image for a bridge site, a wide Resourcesat image for watershed management, or a RISAT radar image for flood extent.",
            ],
            bullets: [
              "Ground platforms: booms, towers, field spectrometers - highest detail, smallest area.",
              "Airborne platforms: aircraft, UAVs - metre-scale pixels over tens of km.",
              "Satellite platforms: tens to hundreds of metres pixels, regular global revisit.",
              "Sun-synchronous orbit: same local solar time, used by Landsat and IRS for change detection.",
              "Geostationary orbit: 36000 km over equator, 24-hour period; used by INSAT for weather.",
            ],
            table: {
              caption: "Remote sensing platforms and their characteristics.",
              headers: ["Platform", "Altitude", "Spatial coverage", "Pixel size", "Example"],
              rows: [
                ["Ground-based", "1-50 m", "Square metres", "mm-cm", "Field spectrometer"],
                ["UAV / drone", "100-1000 m", "Square km", "cm-dm", "Mapping drone"],
                ["Aircraft", "3-12 km", "Tens of km", "dm-m", "Aerial survey"],
                ["Sun-sync satellite", "700-900 km", "Global", "10-30 m", "Landsat, IRS"],
                ["Geostationary satellite", "36000 km", "Hemisphere", "1-5 km", "INSAT weather"],
                ["High-res satellite", "400-600 km", "Regional", "0.5-1 m", "Cartosat"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Hierarchy of remote sensing platforms",
              caption:
                "From ground instruments at the base to geostationary satellites at the apex, coverage grows but pixel size coarsens.",
              tiers: [
                { label: "Geostationary satellite (36000 km)", note: "hemisphere, 1-5 km pixels" },
                { label: "Sun-sync satellite (700-900 km)", note: "global, 10-30 m pixels" },
                { label: "Aircraft (3-12 km)", note: "regional, metre pixels" },
                { label: "UAV and ground platforms", note: "local, cm-mm pixels" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match orbit to the task",
              body: "Use sun-synchronous imagery for change detection because illumination is constant; use geostationary imagery for weather and disaster monitoring because revisit is minutes; use high-resolution satellites such as Cartosat for engineering site plans; and use radar such as RISAT for flood mapping because microwaves see through clouds.",
            },
            keyTerms: [
              { term: "Platform", definition: "The vehicle that carries a remote sensing sensor above the target - ground-based, airborne or space-borne." },
              { term: "Sun-synchronous orbit", definition: "A near-polar satellite orbit that crosses each latitude at the same local solar time, providing constant illumination for change detection." },
              { term: "Geostationary orbit", definition: "A circular equatorial orbit at about 36000 km altitude with a 24-hour period, making the satellite appear stationary over a fixed longitude." },
            ],
            examQuestions: [
              {
                q: "Describe the various platforms and orbits used in remote sensing. Give the Indian satellite series with their typical applications.",
                marks: 7,
                outline: [
                  "Ground platforms: booms, towers, field spectrometers; highest detail, smallest area.",
                  "Airborne platforms: aircraft, UAVs; metre-scale pixels over tens of km.",
                  "Satellite platforms: tens to hundreds of m pixels; global revisit.",
                  "Sun-synchronous orbit: same local solar time, 700-900 km; Landsat, IRS.",
                  "Geostationary orbit: 36000 km, 24-hour period; INSAT weather.",
                  "Polar orbit for full global coverage over repeated cycles.",
                  "Indian satellites: IRS, Resourcesat, Cartosat, RISAT, Oceansat, INSAT with one application each.",
                ],
              },
              {
                q: "Define a sun-synchronous orbit.",
                marks: 2,
              },
              {
                q: "Name any three Indian remote sensing satellites with one application each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Resolution: spatial, spectral, temporal, radiometric",
            body: [
              "Resolution is the resolving power of a remote sensing system, and four types are distinguished. Spatial resolution is the size of the smallest ground feature the sensor can distinguish, expressed as the ground footprint of one pixel; a 1 m pixel resolves cars and buildings, a 30 m pixel resolves fields and city blocks, and a 1 km pixel resolves only large weather systems. Spatial resolution depends on the instantaneous field of view of the detector, the platform altitude and the optics; finer resolution comes from lower altitude, narrower field of view and larger optics, but covers less ground per scene.",
              "Spectral resolution has two aspects: the number of wavelength bands a sensor records and the width of each band. A panchromatic sensor records one broad band, giving the finest spatial resolution but no colour; a multispectral sensor records several broad bands (typically 4 to 12), enabling land-cover discrimination; a hyperspectral sensor records hundreds of narrow contiguous bands, enabling material identification through fine absorption features. Temporal resolution is the revisit time - the interval between two successive images of the same point - governed by the orbit and swath width; geostationary satellites revisit in minutes, sun-synchronous Landsat-class satellites in 16 days, and Cartosat in days when pointed off-nadir.",
              "Radiometric resolution is the sensitivity of the sensor to differences in reflected or emitted energy, expressed as the number of bits used to quantise the signal: an 8-bit sensor records 256 levels, a 12-bit sensor records 4096 levels. Higher radiometric resolution distinguishes subtle tonal differences, important over water and shadows. The four resolutions trade off against each other: improving spatial resolution narrows the swath and reduces revisit; finer spectral resolution slows the scan and lowers signal-to-noise; and finer radiometric resolution demands wider bands to gather enough photons. Hence sensor design is a compromise, and choosing imagery for a project means matching the resolution that matters most to the application.",
            ],
            bullets: [
              "Spatial resolution: pixel ground footprint; 1 m resolves cars, 30 m resolves fields, 1 km resolves weather.",
              "Spectral resolution: number of bands and their width; panchromatic, multispectral, hyperspectral.",
              "Temporal resolution: revisit time; minutes for geostationary, days to weeks for sun-synchronous.",
              "Radiometric resolution: bit depth; 8 bits = 256 levels, 12 bits = 4096 levels.",
              "Trade-off: finer spatial resolution narrows swath; finer spectral resolution lowers signal-to-noise.",
            ],
            table: {
              caption: "Four types of resolution in remote sensing.",
              headers: ["Resolution", "Definition", "Unit", "Typical values"],
              rows: [
                ["Spatial", "Smallest ground feature distinguished", "Metres per pixel", "0.5 m to 1 km"],
                ["Spectral", "Number and width of bands", "Bands, nanometres", "1 (pan) to 200+ (hyper)"],
                ["Temporal", "Revisit time of same point", "Hours to days", "30 min to 26 days"],
                ["Radiometric", "Sensitivity to energy differences", "Bits", "8, 10, 11, 12 bits"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Resolution trade-offs in 2x2 form",
              caption:
                "Better spatial and spectral resolution usually come at the cost of swath and signal-to-noise.",
              axes: { x: "Spatial vs spectral emphasis", y: "Wide coverage vs fine detail" },
              quadrants: [
                { label: "Wide coverage, low detail (INSAT weather)", note: "1-5 km, few bands" },
                { label: "Wide coverage, many bands (MODIS)", note: "250-1000 m, 36 bands" },
                { label: "Fine detail, few bands (Cartosat pan)", note: "0.5 m, 1 band" },
                { label: "Fine detail, many bands (hyperspectral)", note: "few m, 200+ bands" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always define each resolution in one line with its unit, then state the trade-off - finer spatial narrows swath, finer spectral lowers SNR, finer temporal needs more satellites. A neat 2x2 trade-off matrix earns extra marks in a 7-mark question.",
            },
            keyTerms: [
              { term: "Spatial resolution", definition: "The size of the smallest ground feature a sensor can distinguish, expressed as the ground footprint of one pixel in metres." },
              { term: "Spectral resolution", definition: "The number and width of wavelength bands recorded by a sensor, from one panchromatic band to hundreds of hyperspectral bands." },
              { term: "Temporal resolution", definition: "The revisit time of a satellite over the same point on the ground, governing the frequency of repeat imagery." },
            ],
            examQuestions: [
              {
                q: "Define the four types of resolution in remote sensing. Explain the trade-offs between them with examples.",
                marks: 7,
                outline: [
                  "Spatial resolution: smallest ground feature resolved; pixel footprint in metres.",
                  "Spectral resolution: number and width of bands; pan, multispectral, hyperspectral.",
                  "Temporal resolution: revisit time; minutes for geostationary, 16 days for Landsat.",
                  "Radiometric resolution: bit depth; 8 bits = 256 levels, 12 bits = 4096 levels.",
                  "Trade-off 1: finer spatial narrows swath and lengthens revisit.",
                  "Trade-off 2: finer spectral resolution lowers signal-to-noise; needs wider bands or slower scan.",
                  "Trade-off 3: finer radiometric resolution needs more photons, conflicting with narrow bands.",
                ],
              },
              {
                q: "Define spatial resolution with its unit.",
                marks: 2,
              },
              {
                q: "What is radiometric resolution? Express it as the number of levels for 8-bit and 12-bit sensors.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Active and passive sensors",
            body: [
              "Passive sensors rely on an external energy source - almost always the sun - and record the radiation reflected or emitted by the earth surface. Typical examples are photographic cameras, multispectral scanners such as Landsat TM and LISS, and thermal scanners that record emitted thermal infrared radiation. Their great advantage is the use of natural solar energy, which is free and broadband; their disadvantage is that they cannot image at night, and their signal is degraded by clouds, haze and atmospheric scattering. Visible and near-infrared passive imagery is therefore limited to daytime and clear sky, while thermal passive imagery works at night but with coarser resolution.",
              "Active sensors carry their own source of energy and illuminate the target themselves. The two most important families are imaging radar (synthetic aperture radar, SAR) at microwave frequencies, and LiDAR (light detection and ranging) using pulsed laser light. Because microwaves penetrate cloud, rain and haze, radar images the surface in any weather and at any time of day, making it invaluable for flood mapping, ocean ice monitoring and tropical forest surveys. LiDAR fires thousands of laser pulses per second, measures the time of flight of each return, and produces a dense point cloud from which a high-resolution digital elevation model (DEM) and even tree heights and power-line sag are derived.",
              "The choice between active and passive sensors is governed by the application. Land-cover classification over a large area favours passive multispectral imagery because it offers many spectral bands cheaply. Flood mapping under monsoon cloud favours radar. DEM generation for a road or pipeline corridor favours LiDAR or InSAR. Subsidence monitoring over a city favours InSAR time series. Night-time thermal mapping of urban heat islands favours passive thermal sensors. Both sensor types are increasingly combined - optical for spectral content and radar for elevation and weather independence - in integrated surveys that are now standard practice in civil engineering site investigations and disaster response.",
            ],
            bullets: [
              "Passive sensors rely on solar illumination; optical and thermal imagers.",
              "Passive sensors are limited to daytime and clear sky.",
              "Active sensors emit their own energy; imaging radar (SAR) and LiDAR.",
              "Radar penetrates cloud and works day or night; ideal for flood and disaster mapping.",
              "LiDAR produces dense point clouds for high-resolution DEMs and tree-height models.",
            ],
            table: {
              caption: "Active vs passive sensors compared.",
              headers: ["Aspect", "Passive sensor", "Active sensor"],
              rows: [
                ["Energy source", "Sun (external)", "Self-emitted"],
                ["Day or night", "Day only (except thermal)", "Day and night"],
                ["Weather", "Limited by clouds and haze", "Radar penetrates cloud"],
                ["Examples", "Landsat TM, LISS, MODIS", "RISAT SAR, LiDAR, InSAR"],
                ["Best use", "Land-cover classification", "Flood, DEM, subsidence"],
                ["Cost", "Lower", "Higher"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Passive vs active sensors",
              caption:
                "Passive sensors depend on the sun and clear sky; active sensors carry their own energy and see through clouds.",
              left: {
                heading: "Passive sensors",
                items: [
                  "Energy from the sun",
                  "Daytime and clear sky only",
                  "Multispectral: Landsat, LISS, MODIS",
                  "Thermal: night heat mapping",
                  "Lower cost; many bands available",
                ],
              },
              right: {
                heading: "Active sensors",
                items: [
                  "Self-emitted energy",
                  "Day and night operation",
                  "Radar SAR: RISAT, Sentinel-1",
                  "LiDAR: laser point clouds",
                  "Penetrates cloud; DEM and subsidence",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Radar geometry differs from optical",
              body: "Radar is a side-looking sensor and its images show geometric distortions - layover, foreshortening and shadow - on steep slopes. Always interpret SAR imagery with the look direction in mind, and combine it with optical imagery for a complete picture.",
            },
            keyTerms: [
              { term: "Passive sensor", definition: "A remote sensing instrument that relies on an external energy source, usually the sun, and records reflected or emitted radiation." },
              { term: "Active sensor", definition: "A remote sensing instrument that emits its own energy, such as imaging radar or LiDAR, and records the return from the target." },
              { term: "LiDAR", definition: "Light detection and ranging; an active sensor that fires pulsed laser light, measures return time-of-flight, and produces a dense point cloud for DEM generation." },
            ],
            examQuestions: [
              {
                q: "Distinguish between active and passive sensors in remote sensing. Give two examples of each and state their advantages, limitations and applications.",
                marks: 7,
                outline: [
                  "Passive sensor: relies on the sun as energy source; records reflected or emitted radiation.",
                  "Passive examples: Landsat TM, LISS, MODIS; advantage - free broadband energy.",
                  "Passive limitations: day only (except thermal), affected by clouds and haze.",
                  "Active sensor: emits its own energy; examples - imaging radar (SAR), LiDAR.",
                  "Active advantages: day-and-night operation; radar penetrates cloud and rain.",
                  "Active applications: flood mapping under monsoon cloud, DEM generation, subsidence.",
                  "Conclude that both are combined in modern integrated site surveys.",
                ],
              },
              {
                q: "What is LiDAR?",
                marks: 2,
              },
              {
                q: "State two advantages of imaging radar over optical sensors.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Elements of image interpretation",
            body: [
              "Image interpretation is the trained examination of aerial or satellite imagery to identify objects and assess their significance. Eight elements are used, traditionally arranged in order of increasing complexity: tone (also called colour in multispectral imagery), the relative brightness or colour of a pixel; texture, the pattern of tonal variation in a small area, such as smooth, mottled or rough; shape, the geometric form of an object such as the rectangular outline of a building; and size, the dimensions of the object relative to other features in the scene.",
              "The remaining four elements are pattern, the spatial arrangement of objects such as the regular grid of an orchard; shadow, the silhouette cast by an object, which reveals height and shape that may not be visible directly; site, the geographic location or context that constrains interpretation such as a water body in a desert; and association, the related features that occur together such as a runway with taxiways and hangars, or a temple complex with a tank and residential surroundings. These eight elements are the working vocabulary of every photo-interpreter and are applied systematically to identify land cover, geology, drainage and man-made structures.",
              "Interpretation is carried out on hard-copy prints or on a computer screen, with the image often enhanced by contrast stretching, filtering or false-colour composites. A standard infrared false-colour composite (NIR-red-green) renders vegetation as red, water as dark, and built-up land as cyan, making the chief land-cover types immediately separable. Interpretation keys - tables linking image characteristics to feature classes - are compiled for specific applications such as crop identification, forest type mapping or urban land use, and the result is digitised into vector layers for GIS. Hence image interpretation bridges raw imagery and the structured layers used in civil engineering applications.",
            ],
            bullets: [
              "Tone or colour: relative brightness or hue of a pixel.",
              "Texture: pattern of tonal variation; smooth, mottled, rough.",
              "Shape: geometric form of an object; rectangle of a building.",
              "Pattern and shadow: spatial arrangement and silhouette reveal layout and height.",
              "Site and association: geographic context and co-occurring features such as runway with hangars.",
            ],
            codeExample: {
              language: "python",
              caption: "Mapping the eight interpretation elements to land-cover cues.",
              code: [
                "elements_of_image_interpretation = {",
                "    'tone':      'relative brightness or colour of a pixel',",
                "    'texture':   'pattern of tonal variation (smooth, mottled, rough)',",
                "    'shape':     'geometric form of an object (rectangle, circle)',",
                "    'size':      'dimensions relative to scene features',",
                "    'pattern':   'spatial arrangement (orchard grid, river meanders)',",
                "    'shadow':    'silhouette reveals height and shape',",
                "    'site':      'geographic context (water body in a desert)',",
                "    'association': 'co-occurring features (runway + taxiways + hangars)',",
                "}",
                "",
                "# False-colour composite NIR-red-green makes vegetation red",
                "fcc_nir_red_green = 'vegetation -> red; water -> dark; built-up -> cyan'",
                "",
                "# Interpretation key for crop identification",
                "key = {",
                "    'wheat':  ['smooth texture', 'red tone in FCC', 'rectangular fields'],",
                "    'sugarcane': ['rough texture', 'deep red tone', 'large irregular fields'],",
                "    'fallow': ['bright tone', 'no red', 'small patches'],",
                "}",
              ].join("\n"),
            },
            diagram: {
              kind: "cycle",
              title: "Eight elements of image interpretation",
              caption:
                "Each element feeds into the next; together they identify land cover, geology and man-made features.",
              steps: [
                { label: "Tone / colour", note: "brightness" },
                { label: "Texture", note: "tonal pattern" },
                { label: "Shape and size", note: "geometry" },
                { label: "Pattern", note: "spatial arrangement" },
                { label: "Shadow", note: "height cue" },
                { label: "Site and association", note: "context" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Memorise the eight elements as a chant - tone, texture, shape, size, pattern, shadow, site, association. For each give one sentence of definition and one example from a civil-engineering scene: runway, bridge, quarry, water body, crop field.",
            },
            keyTerms: [
              { term: "Image tone", definition: "The relative brightness or colour of a pixel in an image, the primary element of image interpretation." },
              { term: "Texture", definition: "The pattern of tonal variation within a small image area, described as smooth, mottled or rough." },
              { term: "Association", definition: "The co-occurrence of related features in an image, such as a runway with taxiways and hangars, that aids identification." },
            ],
            examQuestions: [
              {
                q: "List and explain the elements of visual image interpretation. Give one example of each from a civil engineering scene.",
                marks: 7,
                outline: [
                  "List the eight elements: tone, texture, shape, size, pattern, shadow, site, association.",
                  "Tone: relative brightness or colour; example - water dark in NIR.",
                  "Texture: tonal pattern; smooth for water, rough for forest.",
                  "Shape: geometric form; rectangle of a building, meander of a river.",
                  "Size: dimensions relative to scene; small building vs large factory.",
                  "Pattern, shadow, site, association: orchard grid, building silhouette, water in desert, runway with hangars.",
                  "Conclude with the use of false-colour composite and interpretation keys to derive GIS layers.",
                ],
              },
              {
                q: "Define image texture.",
                marks: 2,
              },
              {
                q: "What is image association? Give one example.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // ===== UNIT V =====
    {
      number: 5,
      roman: "V",
      title: "GIS and Applications",
      summary:
        "Geographic information systems in civil engineering: the five components of a GIS and its workflow, raster and vector data models with their trade-offs, GPS and GNSS positioning, the spatial analysis operations of overlay, buffer and network, and applications in site selection, urban planning, disaster management and watershed studies.",
      chapter: {
        number: "05",
        title: "GIS and Applications",
        intro:
          "Unit V closes the subject with the tools that integrate geology and remote sensing into engineering decisions. A GIS has five components - hardware, software, data, people and methods - and follows a workflow from input through processing to output. Data is held in raster or vector form. GPS provides the positions. Spatial analysis - overlay, buffer, network and terrain operations - turns data into decisions. And civil engineering applications range from site selection and urban planning to disaster management and watershed studies.",
        inOneBreath:
          "A GIS has five components - hardware, software, data, people and methods - and follows a workflow from data input through processing to output; data is held as raster (grid of cells, suitable for imagery and DEMs) or vector (points, lines and polygons, suitable for cadastral and network data); GPS works by trilateration from at least four satellites, with the space, control and user segments, and accuracy is improved by differential GPS and real-time kinematic correction; spatial analysis operations include overlay (union, intersect, identity), buffer (point, line, polygon), network analysis (shortest path) and terrain analysis (slope, aspect, watershed); and civil applications include site selection by multi-criteria evaluation, urban planning with land use and infrastructure, disaster management for flood and landslide, and watershed management for soil and water conservation.",
        sections: [
          {
            number: "5.1",
            title: "GIS components and workflow",
            body: [
              "A geographic information system (GIS) is a computer-based system for capturing, storing, querying, analysing and displaying geographically referenced data. It is built from five components: hardware - the computers, servers, plotters and GPS receivers that run and feed the system; software - the programs such as ArcGIS, QGIS and GRASS that provide the functions for input, management, analysis and output; data - the spatial and attribute information that is the system's most valuable and most expensive component; people - the analysts, programmers and end users who design and operate the system; and methods - the procedures and rules that govern how the system is used.",
              "The GIS workflow follows four stages. Data input converts maps, imagery, GPS tracks and tabular records into digital spatial data by digitising, scanning, importing from GPS or by direct entry; data management stores these layers in a spatial database such as PostGIS or a file geodatabase with versioning and metadata; data processing and analysis applies geoprocessing tools - projection, overlay, buffer, network and terrain operations - to derive new information; and data output produces maps, charts, reports and web services for end users. Each stage is documented in a metadata record that records source, accuracy, projection and date, since a GIS layer without metadata is untrustworthy.",
              "GIS differs from traditional mapping in three ways. First, the map and the database are linked: each graphic feature has a row of attribute data, and querying the database highlights the feature on the map. Second, analysis goes beyond cartography: a GIS computes buffers, overlays, network routes and terrain derivatives that no paper map can supply. Third, GIS handles change: time-stamped layers allow change detection, growth modelling and scenario comparison. For civil engineering, these capabilities support site suitability analysis, environmental impact assessment, route alignment and asset management, making GIS an everyday tool in the modern engineer's workflow.",
            ],
            bullets: [
              "Five components: hardware, software, data, people, methods.",
              "Data is the most valuable and most expensive component.",
              "Workflow stages: input, management, processing and analysis, output.",
              "Metadata records source, accuracy, projection and date for every layer.",
              "GIS links map features to attribute rows and supports analysis beyond cartography.",
            ],
            codeExample: {
              language: "python",
              caption: "A conceptual model of GIS components and workflow in Python.",
              code: [
                "# Five components of a GIS",
                "gis_components = {",
                "    'hardware': ['workstation', 'server', 'plotter', 'gps receiver'],",
                "    'software': ['arcgis', 'qgis', 'grass', 'postgis'],",
                "    'data':     ['vector layers', 'raster grids', 'attribute tables'],",
                "    'people':   ['analyst', 'programmer', 'end user'],",
                "    'methods':  ['digitising', 'metadata', 'quality control'],",
                "}",
                "",
                "# GIS workflow",
                "def gis_workflow(raw_inputs):",
                "    layers = input_stage(raw_inputs)         # digitise, scan, import GPS",
                "    db = manage_stage(layers, metadata=True) # store in spatial database",
                "    results = process_stage(db, tools=['overlay', 'buffer', 'network'])",
                "    return output_stage(results, formats=['map', 'chart', 'web service'])",
                "",
                "# Data and map are linked: feature has attribute row",
                "feature = {'geometry': 'POINT (77.4 23.2)', 'attrs': {'city': 'Bhopal', 'pop': 1800000}}",
              ].join("\n"),
            },
            diagram: {
              kind: "pipeline",
              title: "GIS workflow from input to output",
              caption:
                "Each stage of the pipeline adds value; metadata documents each transition.",
              stages: [
                { label: "Input", note: "digitise, scan, GPS, import" },
                { label: "Management", note: "spatial database, metadata" },
                { label: "Processing and analysis", note: "overlay, buffer, network" },
                { label: "Output", note: "maps, charts, web services" },
                { label: "Decision", note: "engineering use" },
              ],
            },
            callout: {
              type: "tip",
              title: "Metadata is not optional",
              body: "A GIS layer without metadata is a rumour. Record source, date, projection, accuracy and lineage for every layer; without these the next user cannot trust, project or combine the data and the analysis is invalid.",
            },
            keyTerms: [
              { term: "GIS", definition: "A computer-based system for capturing, storing, querying, analysing and displaying geographically referenced data, with five components: hardware, software, data, people and methods." },
              { term: "Geoprocessing", definition: "The set of GIS operations - projection, overlay, buffer, network and terrain - that transform input data into derived spatial information." },
              { term: "Spatial database", definition: "A database such as PostGIS or a file geodatabase that stores spatial features with their attribute rows and supports spatial queries." },
            ],
            examQuestions: [
              {
                q: "Define a GIS. Describe its five components and the workflow from input to output, with the role of metadata.",
                marks: 7,
                outline: [
                  "Define GIS as a computer system for capturing, storing, querying, analysing and displaying geographic data.",
                  "Hardware: workstation, server, plotter, GPS.",
                  "Software: ArcGIS, QGIS, GRASS, PostGIS.",
                  "Data: spatial and attribute, the most valuable component.",
                  "People and methods: analysts, programmers, procedures.",
                  "Workflow: input -> management -> processing and analysis -> output.",
                  "Metadata records source, accuracy, projection and date; without it the layer is untrustworthy.",
                ],
              },
              {
                q: "Define GIS.",
                marks: 2,
              },
              {
                q: "Name any three GIS data input methods.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Raster and vector data models",
            body: [
              "The raster data model represents geographic space as a regular grid of cells or pixels, each carrying a single attribute value. The cell size sets the spatial resolution: smaller cells capture more detail but demand more storage. Raster data is the natural output of remote sensing imagery and digital elevation models, and is well suited to continuous phenomena such as temperature, elevation or reflected radiation. Its operations include map algebra (cell-by-cell arithmetic), reclassification, distance computation and neighbourhood analysis. Storage is large - a single 30 m Landsat scene is tens of megabytes - but compression and tiling manage the volume.",
              "The vector data model represents geographic features as points, lines and polygons defined by coordinates and topology. Points mark single locations such as wells or trees; lines connect vertices to form polylines for roads, rivers or contours; polygons close lines to bound areas such as parcels or building footprints. Vector data is precise in boundary location, compact in storage, and carries attribute tables linking each feature to one row of data. It is the natural model for cadastral maps, road networks and administrative boundaries. Topology - the explicit recording of adjacency, connectivity and containment - enables network tracing, polygon overlay and shared boundary editing.",
              "Comparison and conversion drive the choice between the two. Raster is simpler, faster for surface analysis and well matched to remote sensing; vector is precise, compact and best for discrete features. Conversion from vector to raster is rasterisation, which loses boundary precision and depends on cell size; conversion from raster to vector is vectorisation, which generalises the cell grid into smooth lines and may introduce spurious slivers. Most GIS projects keep both models and use them in combination: imagery as raster, parcels as vector, the raster DEM supporting slope analysis, the vector road network supporting routing. The engineer selects the model that best matches the phenomenon and the analysis.",
            ],
            bullets: [
              "Raster: regular grid of cells, each carrying one value; cell size sets resolution.",
              "Raster suits continuous phenomena - imagery, DEMs, temperature.",
              "Vector: points, lines and polygons defined by coordinates and topology.",
              "Vector suits discrete features - parcels, roads, administrative boundaries.",
              "Conversion: rasterisation loses boundary precision; vectorisation smooths the grid.",
            ],
            table: {
              caption: "Raster vs vector data models compared.",
              headers: ["Aspect", "Raster", "Vector"],
              rows: [
                ["Basic unit", "Cell or pixel", "Point, line, polygon"],
                ["Boundary precision", "Cell-limited", "Exact coordinates"],
                ["Storage", "Large", "Compact"],
                ["Source", "Imagery, DEMs", "Digitised maps, GPS"],
                ["Best for", "Continuous surfaces", "Discrete features"],
                ["Operations", "Map algebra, neighbourhood", "Topology, network, overlay"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Raster vs vector data models",
              caption:
                "Raster grids continuous surfaces; vector stores precise points, lines and polygons.",
              left: {
                heading: "Raster model",
                items: [
                  "Grid of cells with one value each",
                  "Source: imagery, DEMs",
                  "Cell size sets resolution",
                  "Map algebra operations",
                  "Large storage; simple and fast",
                ],
              },
              right: {
                heading: "Vector model",
                items: [
                  "Points, lines, polygons",
                  "Source: digitised maps, GPS",
                  "Exact boundary coordinates",
                  "Topology and network operations",
                  "Compact storage; precise features",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Slivers from sloppy conversion",
              body: "Repeated vector-raster-vector conversion can introduce sliver polygons - tiny spurious shapes along shared boundaries - that bloat topology and corrupt area statistics. Always set a meaningful tolerance before conversion and clean the topology afterwards.",
            },
            keyTerms: [
              { term: "Raster data", definition: "A spatial data model representing geographic space as a regular grid of cells or pixels, each carrying a single attribute value, suited to continuous phenomena." },
              { term: "Vector data", definition: "A spatial data model representing features as points, lines and polygons defined by coordinates and topology, suited to discrete features." },
              { term: "Topology", definition: "The explicit recording of spatial relationships such as adjacency, connectivity and containment between vector features, enabling network tracing and polygon overlay." },
            ],
            examQuestions: [
              {
                q: "Distinguish between raster and vector data models in GIS. Compare their structure, sources, advantages, disadvantages and conversion.",
                marks: 7,
                outline: [
                  "Raster: grid of cells with one value each; cell size sets resolution.",
                  "Raster sources: imagery, DEMs; large storage; map algebra operations.",
                  "Raster suits continuous phenomena such as temperature, elevation, reflected radiation.",
                  "Vector: points, lines and polygons with coordinates and topology.",
                  "Vector sources: digitised maps, GPS; compact storage; network and overlay operations.",
                  "Vector suits discrete features such as parcels, roads, boundaries.",
                  "Conversion: rasterisation loses boundary precision; vectorisation smooths grid; both need tolerance.",
                ],
              },
              {
                q: "Define raster data.",
                marks: 2,
              },
              {
                q: "Name the three vector data types with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "GPS and GNSS positioning",
            body: [
              "The Global Positioning System (GPS) is a satellite-based positioning system, part of the wider Global Navigation Satellite System (GNSS) that also includes Russia's GLONASS, Europe's Galileo and China's BeiDou. GPS has three segments. The space segment is the constellation of about 31 satellites orbiting at 20200 km, each broadcasting its position and a precise time signal. The control segment is the network of ground monitoring stations that tracks the satellites, updates their orbits and synchronises their clocks. The user segment is the receivers carried by surveyors, vehicles, phones and aircraft that compute their position from the satellite signals.",
              "Positioning works by trilateration. A receiver measures the time of arrival of a signal from each satellite and multiplies by the speed of light to obtain the range; the intersection of three ranges gives latitude, longitude and altitude, but a fourth satellite is needed to correct the receiver clock, which is far less precise than the satellite atomic clocks. The Standard Positioning Service (SPS) without corrections gives about 10 m accuracy; the Precise Positioning Service is reserved for military users. Accuracy is degraded by satellite geometry (dilution of precision), ionospheric delay, multipath reflections and clock error, but is improved by differential GPS (DGPS) and real-time kinematic (RTK) corrections to centimetre level.",
              "For civil engineering, GPS replaced traditional surveying for control networks, route alignment and deformation monitoring. A DGPS base station on a known point broadcasts corrections to rovers, giving sub-metre accuracy in real time; RTK uses carrier-phase observations to reach centimetre accuracy over short baselines; and continuous operating reference stations (CORS) stream corrections over the internet to any user with a receiver. Deformation monitoring of dams, landslides and tall buildings uses fixed GPS receivers to track millimetre-level movement over time. Hence GPS is the surveying backbone of modern site investigation, construction layout and structural health monitoring.",
            ],
            bullets: [
              "Three segments: space (satellites), control (ground stations), user (receivers).",
              "Trilateration: intersection of four ranges gives 3D position and clock correction.",
              "Standard Positioning Service accuracy about 10 m; DGPS gives sub-metre; RTK gives centimetre.",
              "Accuracy limited by satellite geometry, ionospheric delay, multipath and clock error.",
              "Civil uses: control networks, route alignment, deformation monitoring of dams and buildings.",
            ],
            table: {
              caption: "GPS segments and their functions.",
              headers: ["Segment", "Components", "Function"],
              rows: [
                ["Space", "31 satellites at 20200 km", "Broadcast position and time signals"],
                ["Control", "Ground monitoring stations", "Track satellites, update orbits, sync clocks"],
                ["User", "Receivers in phones, vehicles, survey gear", "Compute position by trilateration"],
                ["Augmentation", "DGPS base, RTK base, CORS network", "Broadcast corrections for higher accuracy"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "GPS positioning: from satellites to receiver",
              caption:
                "Four satellite ranges intersect to fix 3D position and correct the receiver clock.",
              steps: [
                { label: "Satellites broadcast position and time", note: "space segment" },
                { label: "Receiver measures time of arrival", note: "user segment" },
                { label: "Range = c times delta-t", note: "speed of light" },
                { label: "Trilateration from 4 satellites", note: "3D position + clock" },
                { label: "DGPS / RTK corrections", note: "cm-level accuracy" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When explaining GPS, draw four satellites around a receiver and label each range line. State explicitly why four satellites are needed: three for position and one to correct the receiver clock. Then mention DGPS and RTK for engineering-grade accuracy.",
            },
            keyTerms: [
              { term: "GPS", definition: "A satellite-based positioning system using a constellation of about 31 satellites at 20200 km altitude, comprising space, control and user segments." },
              { term: "Trilateration", definition: "The positioning method of intersecting ranges from at least four satellites to determine three coordinates and correct the receiver clock." },
              { term: "Differential GPS", definition: "An augmentation technique in which a base station at a known point broadcasts range corrections to rovers, improving accuracy to sub-metre." },
            ],
            examQuestions: [
              {
                q: "Describe the segments of GPS and the principle of trilateration. Explain how differential GPS and RTK improve accuracy for engineering surveys.",
                marks: 7,
                outline: [
                  "Define GPS and its three segments: space, control, user.",
                  "Space segment: about 31 satellites at 20200 km broadcasting position and time.",
                  "Control segment: ground stations track satellites, update orbits and synchronise clocks.",
                  "User segment: receivers compute position by trilateration.",
                  "Explain trilateration: four ranges intersect to give 3D position and clock correction.",
                  "SPS accuracy about 10 m; DGPS gives sub-metre; RTK uses carrier phase for centimetre accuracy.",
                  "Civil applications: control networks, route alignment, deformation monitoring of dams and buildings.",
                ],
              },
              {
                q: "Define GPS.",
                marks: 2,
              },
              {
                q: "Distinguish between GPS and DGPS in terms of accuracy.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Spatial analysis operations",
            body: [
              "Spatial analysis is the heart of a GIS, turning data into decisions through operations that exploit location. Overlay operations combine two layers to produce a new one: union keeps all areas from both layers; intersect keeps only the common area; identity keeps one layer intact and clips the other to it. Overlay is the basis of suitability analysis - intersecting slope, soil, geology and land-use layers to identify land that satisfies every constraint. Buffer analysis builds a zone of specified radius around a feature: a point buffer around a well, a line buffer along a road, a polygon buffer around a forest; the result is used for setback enforcement and proximity studies.",
              "Network analysis operates on connected line features such as roads, pipelines or rivers. The most common operation is the shortest-path computation between two points, which underlies vehicle routing and emergency dispatch; service-area analysis identifies all locations reachable within a given travel time; and location-allocation places facilities such as fire stations to minimise average response time. Terrain analysis operates on a digital elevation model: slope is the maximum rate of change of elevation, aspect is the compass direction of that slope, and watershed analysis derives the drainage network and basin boundaries from flow direction and accumulation. Each output is itself a raster or vector layer that feeds further analysis.",
              "Spatial queries and map algebra complete the toolkit. A spatial query selects features by location, such as all buildings within 500 m of a fault line; an attribute query selects by data value, such as all parcels with area greater than one hectare. Map algebra applies cell-by-cell arithmetic to raster layers - adding, subtracting or applying logical conditions - to compute weighted suitability maps. Multi-criteria evaluation combines weighted and scaled layers into a single suitability surface that ranks every cell for the chosen purpose, such as landfill site selection or urban growth allocation. Together these operations make GIS a decision-support tool, not merely a map-making system.",
            ],
            bullets: [
              "Overlay operations: union, intersect, identity combine two layers into a new one.",
              "Buffer: a zone of specified radius around point, line or polygon features.",
              "Network analysis: shortest path, service area, location-allocation on connected lines.",
              "Terrain analysis: slope, aspect and watershed derived from a DEM.",
              "Map algebra: cell-by-cell arithmetic on raster layers; multi-criteria evaluation ranks cells.",
            ],
            codeExample: {
              language: "python",
              caption: "Spatial analysis operations expressed in pseudo-Python.",
              code: [
                "# Overlay operations",
                "union_layer    = layer_a.union(layer_b)        # all areas from both",
                "intersect_layer = layer_a.intersect(layer_b)    # common area only",
                "identity_layer = layer_a.identity(layer_b)      # a intact, b clipped to a",
                "",
                "# Buffers",
                "well_buffer   = wells.buffer(radius=500)         # point buffer",
                "road_buffer   = roads.buffer(radius=30)          # line buffer",
                "forest_buffer = forest.buffer(radius=200)        # polygon buffer",
                "",
                "# Network analysis",
                "shortest = road_network.shortest_path(source, target)",
                "service_30min = road_network.service_area(start, max_minutes=30)",
                "",
                "# Terrain analysis from DEM",
                "slope = dem.slope()       # degrees",
                "aspect = dem.aspect()     # compass direction",
                "flow_dir = dem.flow_direction()",
                "watershed = flow_dir.watershed(outlet_point)",
                "",
                "# Multi-criteria evaluation for landfill site selection",
                "score = (0.4 * slope_suitability",
                "         + 0.3 * distance_to_road_suitability",
                "         + 0.3 * soil_suitability)",
                "best_sites = score > 0.8",
              ].join("\n"),
            },
            diagram: {
              kind: "layers",
              title: "Stacked layers of spatial analysis",
              caption:
                "Each layer is an operation; stacked together they yield a suitability map.",
              layers: [
                { label: "Output suitability surface", note: "ranked cells" },
                { label: "Map algebra and multi-criteria", note: "weighted sum" },
                { label: "Terrain analysis: slope, aspect, watershed", note: "from DEM" },
                { label: "Network analysis: shortest path, service area", note: "on lines" },
                { label: "Buffer and overlay", note: "combine input layers" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match operation to question",
              body: "Overlay answers 'where do all constraints meet?'; buffer answers 'what is near this feature?'; network answers 'how do I get there fastest?'; terrain answers 'where does water flow?'. Pick the operation that matches the engineering question and document the weights used in multi-criteria evaluation.",
            },
            keyTerms: [
              { term: "Overlay", definition: "A spatial analysis operation that combines two layers into a new one, with variants union (all areas), intersect (common area) and identity (one layer intact)." },
              { term: "Buffer", definition: "A spatial analysis operation that builds a zone of specified radius around point, line or polygon features, used for setback enforcement and proximity studies." },
              { term: "Suitability analysis", definition: "A multi-criteria evaluation that combines weighted and scaled layers into a single surface ranking every cell for a chosen purpose such as site selection." },
            ],
            examQuestions: [
              {
                q: "Explain the spatial analysis operations in GIS: overlay, buffer, network analysis and terrain analysis. Give one engineering application of each.",
                marks: 7,
                outline: [
                  "Define spatial analysis as operations that exploit location to turn data into decisions.",
                  "Overlay: union, intersect, identity; combine two layers; application - site suitability.",
                  "Buffer: zone of specified radius around point, line or polygon; application - setback enforcement.",
                  "Network analysis: shortest path, service area, location-allocation; application - emergency routing.",
                  "Terrain analysis: slope, aspect, watershed from DEM; application - watershed management.",
                  "Spatial queries and map algebra: cell-by-cell arithmetic on raster layers.",
                  "Multi-criteria evaluation combines weighted layers into a suitability surface; conclude with landfill or urban growth as example.",
                ],
              },
              {
                q: "Define buffer analysis.",
                marks: 2,
              },
              {
                q: "Name the three overlay operations with one distinguishing feature each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Applications in civil engineering",
            body: [
              "GIS supports civil engineering across the project lifecycle, from planning to monitoring. Site selection uses multi-criteria evaluation: weighted layers of slope, soil, geology, land use, proximity to roads and proximity to services are combined into a single suitability surface, and the highest-ranked cells are shortlisted for site visits. Landfill site selection avoids settlements, water bodies and faults; industrial site selection prefers flat, well-drained land near transport; and dam site selection adds reservoir water-tightness and sediment yield. The transparency of the weighting makes the selection auditable and defensible in environmental clearance.",
              "Urban planning applies GIS to land-use mapping, infrastructure management and growth modelling. Base layers of existing land use are digitised from satellite imagery; proposed changes are evaluated against zoning, transport and environmental constraints; and the result is published as zoning maps and development regulations. Infrastructure management tracks water supply, sewerage, roads and electricity as connected networks, supporting maintenance dispatch and capacity planning. Growth modelling combines population projections, suitability and constraints to forecast urban expansion and to plan the matching infrastructure, supporting smart-city and master-plan preparation.",
              "Disaster management and watershed management complete the application set. Flood hazard maps are built by combining DEM-derived flow accumulation, rainfall intensity and historical flood extents, and are used for early warning and evacuation planning. Landslide hazard maps combine slope, geology, soil and rainfall triggers. Watershed management uses GIS to delineate basins, prioritise erosion-prone sub-basins, plan check dams and contour bunds, and monitor vegetation change through time-series imagery. Change detection - subtracting classified images of two dates - quantifies urban sprawl, deforestation and reservoir sedimentation. Hence GIS is the integrator of geology, remote sensing and engineering judgement in modern civil works.",
            ],
            bullets: [
              "Site selection: multi-criteria evaluation of slope, soil, geology, land use, proximity.",
              "Urban planning: land use mapping, zoning, infrastructure networks, growth modelling.",
              "Disaster management: flood and landslide hazard maps for warning and evacuation.",
              "Watershed management: basin delineation, erosion prioritisation, conservation planning.",
              "Change detection: subtract classified images of two dates to quantify sprawl and sedimentation.",
            ],
            table: {
              caption: "GIS applications in civil engineering.",
              headers: ["Application", "GIS technique", "Engineering benefit"],
              rows: [
                ["Site selection", "Multi-criteria evaluation", "Auditable, defensible shortlist"],
                ["Urban planning", "Land use, zoning, network", "Master-plan preparation"],
                ["Disaster management", "Hazard mapping, change detection", "Early warning, evacuation"],
                ["Watershed management", "Basin delineation, prioritisation", "Soil and water conservation"],
                ["Route alignment", "Least-cost path, network analysis", "Road, pipeline and canal routing"],
                ["Asset management", "Connected network database", "Maintenance dispatch"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Pyramid of civil engineering GIS applications",
              caption:
                "From single-site selection at the top to basin-wide watershed management at the base.",
              tiers: [
                { label: "Site selection", note: "multi-criteria evaluation" },
                { label: "Route alignment and asset management", note: "network analysis" },
                { label: "Urban planning", note: "land use, zoning, growth" },
                { label: "Disaster and watershed management", note: "basin-wide hazard and conservation" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Answer application questions by pairing a technique with an application and a benefit: multi-criteria evaluation for site selection, network analysis for route alignment, hazard mapping for disaster management, basin delineation for watershed. The three-part structure carries the marks in 7-mark questions.",
            },
            keyTerms: [
              { term: "Site suitability", definition: "A multi-criteria evaluation that combines weighted layers of slope, soil, geology and proximity into a single surface ranking every cell for a chosen civil engineering purpose." },
              { term: "Watershed management", definition: "The planning of soil and water conservation in a drainage basin, supported by GIS-delineated boundaries, erosion prioritisation and time-series vegetation monitoring." },
              { term: "Change detection", definition: "The comparison of two classified images of different dates to quantify changes such as urban sprawl, deforestation or reservoir sedimentation." },
            ],
            examQuestions: [
              {
                q: "Describe the applications of GIS in civil engineering, covering site selection, urban planning, disaster management and watershed management with one technique and one benefit for each.",
                marks: 7,
                outline: [
                  "Site selection: multi-criteria evaluation of slope, soil, geology, land use, proximity.",
                  "Benefit: auditable, defensible shortlist for landfill, industrial or dam site.",
                  "Urban planning: land-use mapping, zoning, infrastructure networks, growth modelling.",
                  "Benefit: master-plan and smart-city preparation, infrastructure capacity planning.",
                  "Disaster management: flood and landslide hazard maps combining DEM, rainfall and geology.",
                  "Watershed management: basin delineation, erosion prioritisation, conservation planning.",
                  "Change detection quantifies sprawl and sedimentation; conclude with GIS as integrator of geology, remote sensing and engineering judgement.",
                ],
              },
              {
                q: "Define watershed management.",
                marks: 2,
              },
              {
                q: "How is GIS used for site selection? Give the inputs and one example.",
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
        "RGPV CE-405 papers typically spread 60-70 of the marks across dam and reservoir site geology, structural features (folds, faults, unconformity) and the four resolutions and sensor types, with Indian stratigraphy and EM spectrum supplying the definitional short questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Dam site selection and reservoir water-tightness (geological criteria, Lugeon, karst)", weight: "10-12 marks", note: "Almost guaranteed; practise one full 7-mark answer with cross-section." },
        { topic: "Folds, faults, joints and unconformities with diagrams", weight: "10-12 marks", note: "Neat labelled sketches earn the marks; classify by limb symmetry." },
        { topic: "Four resolutions and active vs passive sensors", weight: "8-10 marks", note: "Trade-offs are the examiner's favourite; pair with examples." },
        { topic: "Rock cycle, mineral properties (Mohs scale)", weight: "8-10 marks", note: "Mohs chant and rock-cycle diagram are must-memorise items." },
        { topic: "Foundations on igneous, sedimentary and metamorphic rocks", weight: "8-10 marks", note: "Tabulate bearing capacity and problem per rock type." },
        { topic: "Tunnel alignment, stand-up time and support", weight: "6-8 marks", note: "Define stand-up time; cite RMR and Q." },
        { topic: "Indian stratigraphy (Archaean to Quaternary)", weight: "6-8 marks", note: "Seven-step chain with one rock and one resource per stage." },
        { topic: "Strike, dip, outcrop and cross-section construction", weight: "6-8 marks", note: "True vs apparent dip with tangent formula; report VE." },
        { topic: "GPS segments, trilateration, DGPS", weight: "4-6 marks", note: "Four-satellite argument and DGPS accuracy are common shorts." },
        { topic: "GIS applications in civil engineering", weight: "4-6 marks", note: "Pair technique with application and benefit." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - geology basics", tasks: ["Earth structure with Moho and Gutenberg", "Rock cycle with diagram; Mohs scale chant", "Three rock families and weathering grades"] },
        { week: "Week 2", focus: "Unit II - structural geology", tasks: ["Strike, dip, outcrop; true vs apparent dip", "Fold classification with sketches", "Faults, joints, unconformities and Indian stratigraphy chain"] },
        { week: "Week 3", focus: "Unit III - engineering geology", tasks: ["Dam site selection and reservoir water-tightness", "Tunnel alignment, stand-up time, foundation on rocks", "Geological hazards: earthquakes, landslides, subsidence"] },
        { week: "Week 4", focus: "Unit IV - remote sensing", tasks: ["EM spectrum, energy balance and spectral signatures", "Platforms, orbits, Indian satellites", "Four resolutions and active vs passive sensors"] },
        { week: "Week 5", focus: "Unit V - GIS and applications", tasks: ["GIS components and raster vs vector models", "GPS segments and trilateration; DGPS and RTK", "Spatial analysis and civil engineering applications"] },
        { week: "Week 6", focus: "Full revision", tasks: ["Redraw every diagram; chant Mohs and stratigraphy chain", "Practise 7-mark answers for dam site, folds, resolutions", "Two full past papers under exam timing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The final 24 hours should consolidate what is already known, not introduce new material. Focus on diagrams, named lists and formulas.",
      ],
      bullets: [
        "Redraw the rock cycle, fold classification, fault matrix and EM spectrum diagram - one neat sketch each.",
        "Chant the Mohs scale and the seven-step Indian stratigraphy chain; one rock and one resource per stage.",
        "Recall the four resolutions with units and the trade-off between them.",
        "Write the Lugeon thresholds (1, 5, 10) and the trilateration rule (4 satellites).",
        "List the eight image interpretation elements and the five GIS components.",
        "Keep two pens, a sharp pencil, an eraser and a scale for the diagrams - neat sketches earn marks.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Draw the diagram first, label every part, then write the explanation around the labelled figure - examiners credit the diagram before the prose.",
        "For 7-mark answers, structure the answer in seven labelled points matching the outline; the examiner can mark each point as it appears.",
        "Quote named examples for every classification: Hales Bar for karst failure, Kariba for dam geology, San Andreas for strike-slip, Jharia for Gondwana coal.",
        "Convert dip measurements with the tangent formula tan(apparent) equals tan(true) times sin(theta), and always state vertical exaggeration on cross-sections.",
        "Time-box: 2-mark questions in 3 minutes, 3-mark in 5 minutes, 7-mark in 15 minutes; reserve the last 10 minutes for the diagram-and-label check.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing weathering with erosion - weathering is in-situ breakdown, erosion transports the broken material away.",
        "Drawing the rock cycle as a one-way chain instead of showing side branches for melting, weathering and metamorphism from any family.",
        "Quoting dip direction as part of the strike value - strike is a bearing, dip is an angle with a separate direction perpendicular to it.",
        "Forgetting that four satellites are needed for GPS, not three - the fourth corrects the receiver clock.",
        "Naming only three resolutions instead of four - temporal and radiometric resolutions are often missed.",
        "Writing 'GIS = Geographic Information System' and stopping - the five components (hardware, software, data, people, methods) carry the marks.",
      ],
    },
  ],
};
