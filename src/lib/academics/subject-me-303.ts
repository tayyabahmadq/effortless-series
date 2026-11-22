import type { AcademicSubject } from "./types";

export const me303: AcademicSubject = {
  id: "me-303",
  code: "ME-303",
  title: "Materials Technology",
  semester: "III Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "Every topic of the syllabus as one connected story: how liquid metal solidifies into crystals, how phase diagrams map what forms at what temperature, how heat treatment engineers the microstructure, how destructive and non-destructive tests prove the metal, and how chemical analysis reads the alloying recipe.",
  description:
    "Five units walk from solidification, crystallography and the mechanical properties of metals, through cooling curves, the iron-carbon diagram, TTT curves and the cast iron and stainless families, into heat treatment - annealing, hardening, transformation products and surface treatments, then on to tensile, hardness, impact, fatigue and Jominy testing with NDT, ending with volumetric, gravimetric, spot and spectrophotometric chemical analysis of alloying elements.",
  accentColor: "#a855f7",
  emoji: "MA",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Solidification, Crystal Structure and Mechanical Properties",
      summary:
        "Unit I starts inside the melt: how liquid metal solidifies by nucleation and growth, what separates crystals from amorphous solids and which bonds hold metals together, the crystallography of BCC, FCC and HCP lattices, stability and metastability, and the mechanical property family - strength, hardness, elasticity, plasticity, ductility, malleability, creep and fatigue - closing with the industrial metals and steels and how manufacturers make them.",
      chapter: {
        number: "01",
        title: "Inside the Metal",
        intro:
          "Unit I covers solidification and crystallisation, crystal versus amorphous structure and bonding, crystallography with lattice types and Miller indices, stability and metastability, the mechanical properties of metals, and an introduction to industrial metals, steels and their manufacturing routes.",
        inOneBreath:
          "Solidification is nucleation plus growth, and fast cooling gives fine grains; metals crystallize in BCC, FCC or HCP lattices described by Miller indices; the stress-strain curve reads off elasticity, yield, plasticity and ultimate strength; hardness resists indentation, creep deforms under steady load and temperature, fatigue kills below yield under cyclic load; and industrial steels arrive via blast furnace, converter and rolling.",
        sections: [
          {
            number: "1.1",
            title: "Solidification of metals and crystallisation",
            body: [
              "Solidification is the transformation of liquid metal into a crystalline solid, and it proceeds in two stages: nucleation and growth. Nucleation is the birth of stable solid clusters - homogeneously within the melt (rare, needing large undercooling) or heterogeneously on mould walls and inoculants (the normal route, needing only small undercooling below the melting point). Growth then proceeds by atoms attaching to the nuclei in the lattice arrangement, releasing latent heat that must be conducted away. The structure that results is polycrystalline: countless grains, each a single crystal oriented differently from its neighbours, separated by grain boundaries.",
              "Cooling rate controls grain size, and the rule is simple: fast cooling means many nuclei and fine grains; slow cooling means few nuclei and coarse grains. Fine grains are generally stronger (more grain boundaries block dislocation movement - the Hall-Petch relation) and tougher, so foundries control cooling with mould material, chills and inoculants. Worked example: an aluminium casting chilled against a steel mould plate shows a fine-grained chill zone a few millimetres deep, then columnar grains growing along the maximum heat-flow direction, then coarser equiaxed grains at the centre - the classic three-zone ingot structure that examiners ask you to sketch and explain.",
              "Dendritic growth completes the picture: because solutes segregate and heat flows anisotropically, crystals grow as branched tree-like dendrites whose arms eventually thicken into full grains. Segregation during dendritic growth produces compositional non-uniformity (coring) between dendrite cores and interdendritic regions, which subsequent homogenizing annealing removes. Understanding solidification is not academic - casting quality, weld metal structure and even 3D-printed metal microstructures are governed by exactly these nucleation and growth rules.",
              "Exam framing: the standard question is 'explain solidification of metals with a neat sketch of nucleation and growth, and discuss the effect of cooling rate on grain size'. Define both stages, sketch the ingot's three zones, quote the fine-grain-is-stronger rule with the Hall-Petch reasoning, and close with the coring note for full marks.",
            ],
            bullets: [
              "Solidification = nucleation (stable solid clusters) + growth (atoms attaching in lattice order).",
              "Homogeneous nucleation needs large undercooling; heterogeneous nucleation on mould walls or inoculants dominates in practice.",
              "Fast cooling - many nuclei, fine grains; slow cooling - few nuclei, coarse grains.",
              "Fine grains raise strength: grain boundaries block dislocations (Hall-Petch).",
              "Ingot zones: fine chill zone, columnar grains, coarse equiaxed core.",
              "Dendritic growth causes solute segregation (coring), removed by homogenizing annealing.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From melt to polycrystalline ingot",
              caption: "Heat extraction drives every stage from the first nucleus to the final grain structure.",
              stages: [
                { label: "Superheated melt", note: "liquid, no nuclei" },
                { label: "Nucleation", note: "on mould walls / inoculants" },
                { label: "Dendritic growth", note: "branched crystals advance" },
                { label: "Grain impingement", note: "crystals meet; boundaries form" },
                { label: "Polycrystalline solid", note: "chill / columnar / equiaxed zones" },
              ],
            },
            callout: {
              type: "tip",
              title: "Undercooling is the hidden driver",
              body: "Solidification always begins below the melting point - the melt must be undercooled before nuclei are stable, and the required undercooling collapses from hundreds of degrees (homogeneous) to a few degrees (heterogeneous). Exam questions love this contrast: quoting it shows you know why foundries seed melts with inoculants rather than waiting for pure liquids to self-nucleate.",
            },
            keyTerms: [
              { term: "Nucleation", definition: "Formation of stable solid clusters in the melt, homogeneous or heterogeneous." },
              { term: "Grain boundary", definition: "The disordered interface between crystals of different orientation." },
              { term: "Undercooling", definition: "The temperature drop below the melting point needed before solidification starts." },
              { term: "Dendrite", definition: "Branched tree-like crystal grown during solidification; source of coring segregation." },
            ],
            examQuestions: [
              {
                q: "Explain the mechanism of solidification of metals with a sketch of nucleation and growth. Discuss how cooling rate affects grain size and why fine grains are generally stronger.",
                marks: 14,
                outline: [
                  "Two stages: nucleation then growth",
                  "Homogeneous nucleation needs large undercooling; heterogeneous dominates on mould walls",
                  "Latent heat must be extracted for growth to continue",
                  "Fast cooling: many nuclei, fine grains; slow cooling: coarse grains",
                  "Hall-Petch: grain boundaries block dislocations, raising strength",
                  "Ingot sketch: chill zone, columnar zone, equiaxed core",
                ],
              },
              {
                q: "What is coring? Why does dendritic solidification produce it and how is it removed?",
                marks: 7,
                outline: [
                  "Coring: compositional variation within grains from solute segregation",
                  "Dendrite cores solidify first at near-pure composition; interdendritic regions enriched later",
                  "Diffusion is too slow during normal cooling to homogenize",
                  "Homogenizing (diffusion) anneal at high temperature removes it",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Crystal and amorphous structures; bonding in metals",
            body: [
              "Solid materials divide by atomic order. Crystalline solids pack atoms in a repeating three-dimensional pattern - a lattice repeated by translation - over long ranges; metals, ceramics and most minerals are crystalline. Amorphous (glassy) solids have only short-range order with no repeating pattern: glass, thermoplastic polymers below their melt, and rapidly quenched metallic glasses. The distinction matters mechanically: crystalline metals deform by dislocation slip and show sharp melting points, while amorphous solids soften gradually over a temperature range and lack slip systems.",
              "Metallic bonding explains metal behaviour. Metal atoms release their valence electrons into a shared 'electron gas' that glues the positive ion cores together; the bond is non-directional, so atom planes can slide without shattering the bond - hence ductility, malleability, and high thermal and electrical conductivity. Compare the alternatives: ionic bonds (directional charge attraction, brittle - ceramics), covalent bonds (shared electron pairs, hard and brittle - diamond, silicon), van der Waals bonds (weak, secondary - between polymer chains). The syllabus's phrase 'different types of bonds in different metals' points here: bond type predicts whether a solid bends, cleaves or shatters.",
              "Worked example: the same material class contrast that explains copper wire versus glass rod. Copper's non-directional metallic bonds let planes of atoms slip step by step under a bending load - the wire survives permanent bending with conductivity intact. Glass's directional covalent network has no slip mechanism: the same bending concentrates stress at a flaw and the rod fractures suddenly. Neither material changed its chemistry; the bond type alone fixed the mechanical answer.",
              "Exam framing: the question is 'distinguish crystalline and amorphous structures and describe the types of bonds with examples'. Give the order-versus-no-order definition with two examples each, then a bonding table (metallic, ionic, covalent, van der Waals) with one property consequence each. The closing link - bond type decides ductility versus brittleness - is the insight that earns the last mark.",
            ],
            bullets: [
              "Crystalline: long-range repeating lattice order; metals, ceramics, salts.",
              "Amorphous: short-range order only; glass, metallic glasses, many polymers.",
              "Metallic bond: shared electron gas around ion cores; non-directional - hence ductile and conductive.",
              "Ionic bond: charge attraction between ions; directional and brittle (ceramics).",
              "Covalent bond: shared electron pairs; hard, high-melting, brittle (diamond, Si).",
              "Van der Waals: weak secondary bonds between molecules and polymer chains.",
            ],
            diagram: {
              kind: "compare",
              title: "Crystalline versus amorphous",
              caption: "One has a repeatable address for every atom; the other does not.",
              left: {
                heading: "Crystalline (metals)",
                items: [
                  "Long-range repeating lattice",
                  "Sharp melting point",
                  "Deforms by dislocation slip - ductile",
                  "Examples: iron, aluminium, copper",
                ],
              },
              right: {
                heading: "Amorphous (glasses)",
                items: [
                  "Short-range order only",
                  "Softens gradually over a range",
                  "No slip systems - brittle fracture",
                  "Examples: glass, metallic glass, polymers below Tg",
                ],
              },
            },
            table: {
              caption: "Bond types and their signatures.",
              headers: ["Bond", "Mechanism", "Typical properties", "Example"],
              rows: [
                ["Metallic", "electron gas around ion cores", "ductile, malleable, conductive", "iron, copper"],
                ["Ionic", "electrostatic attraction of ions", "hard, brittle, insulating", "NaCl, ceramics"],
                ["Covalent", "shared electron pairs", "very hard, high melting, brittle", "diamond, silicon"],
                ["Van der Waals", "weak secondary attraction", "soft, low melting", "solid argon, polymer chains"],
              ],
            },
            callout: {
              type: "exam",
              title: "Bond type predicts behaviour",
              body: "Examiners reward the causal chain: non-directional metallic bonds allow atomic planes to slide, so metals are ductile; directional ionic/covalent bonds lock the lattice, so ceramics and glasses are brittle. One sentence connecting bond mechanics to a mechanical property converts a definition list into an analysis answer.",
            },
            keyTerms: [
              { term: "Crystalline solid", definition: "Solid with long-range repeating atomic arrangement - a lattice." },
              { term: "Amorphous solid", definition: "Solid with only short-range order; no repeating pattern or sharp melting point." },
              { term: "Metallic bond", definition: "Non-directional bonding via a shared electron gas - the origin of ductility and conductivity." },
              { term: "Slip", definition: "Layer-by-layer sliding of atom planes on close-packed directions; the plastic-deformation mechanism of crystals." },
            ],
            examQuestions: [
              {
                q: "Distinguish between crystalline and amorphous materials with examples. Describe the four types of atomic bonds, giving one material and one mechanical property signature of each.",
                marks: 14,
                outline: [
                  "Crystalline: long-range lattice order; sharp melting; metals and ceramics",
                  "Amorphous: short-range order; gradual softening; glass, polymers",
                  "Metallic bond: electron gas; ductile and conductive - copper",
                  "Ionic bond: ion attraction; brittle insulator - NaCl",
                  "Covalent bond: shared pairs; very hard - diamond",
                  "Van der Waals: weak secondary - polymer chains",
                  "Bond directionality decides ductility versus brittleness",
                ],
              },
              {
                q: "Explain why metals are good electrical conductors and ductile at the same time, using the nature of the metallic bond.",
                marks: 7,
                outline: [
                  "Valence electrons are delocalized - free electron gas conducts charge and heat",
                  "The same non-directionality lets atom planes slide without breaking bonds",
                  "Slip step by step gives permanent deformation without fracture",
                  "Hence conductivity and ductility share one root cause",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Crystallography: lattices, directions and planes",
            body: [
              "Metals crystallize in three dominant structures. Body-centred cubic (BCC): atoms at the cube corners plus one at the centre - alpha-iron (ferrite), chromium, tungsten; coordination number 8, atomic packing factor 0.68. Face-centred cubic (FCC): atoms at corners plus the centre of each face - gamma-iron (austenite), aluminium, copper, nickel; coordination number 12, APF 0.74. Hexagonal close-packed (HCP): layers of hexagons stacked ABAB - zinc, magnesium, titanium (alpha); coordination 12, APF 0.74. FCC and HCP pack atoms equally densely; BCC is looser, which is why carbon diffuses faster in BCC iron and why ferrite is softer than austenite's products.",
              "The geometry is tracked with lattice parameter a (the cube edge) related to atomic radius r: for FCC, a = 2 sqrt(2) r; for BCC, a = 4r/sqrt(3). Miller indices label directions and planes: a direction is the vector of its axis components reduced to integers [uvw]; a plane is labelled by the reciprocals of its intercepts (hkl). Worked example: a plane cutting the axes at 1a, infinity, infinity has intercept reciprocals 1, 0, 0 - the (100) plane; the body diagonal direction is [111]; the face diagonal [110]. Slip occurs on the densest planes along the densest directions: {111} planes in FCC, {110} in BCC.",
              "Worked numbers: for FCC copper with r = 0.128 nm, a = 2 sqrt(2) × 0.128 = 0.362 nm, and APF = (4 × 4pi r^3/3)/a^3 = 0.74 - 74 percent of space is atoms. For BCC iron with r = 0.124 nm, a = 4 × 0.124/sqrt(3) = 0.286 nm (the famous ferrite lattice constant) and APF = 0.68. These two computations - a from r, and APF from a - are the numerical backbone of crystallography questions.",
              "Exam framing: the question is 'describe BCC, FCC and HCP structures with sketches, coordination numbers and packing factors, and explain Miller indices with examples'. Draw each unit cell, tabulate the numbers, work one a-from-r computation, and show two Miller index conversions. Naming which structure iron takes below and above 912 degrees C (BCC ferrite, FCC austenite) ties the section to the iron-carbon diagram of Unit II.",
            ],
            bullets: [
              "BCC: corners + body centre; CN 8; APF 0.68; alpha-iron, Cr, W, Mo.",
              "FCC: corners + face centres; CN 12; APF 0.74; gamma-iron (austenite), Al, Cu, Ni.",
              "HCP: ABAB hexagonal stacking; CN 12; APF 0.74; Zn, Mg, alpha-Ti.",
              "FCC: a = 2 sqrt(2) r; BCC: a = 4r/sqrt(3).",
              "Miller indices: direction [uvw] from axis components; plane (hkl) from intercept reciprocals.",
              "Slip uses densest planes/directions: {111} in FCC, {110} in BCC.",
            ],
            diagram: {
              kind: "layers",
              title: "APF and coordination through the three lattices",
              caption: "How tightly each structure packs, top to bottom.",
              layers: [
                { label: "FCC and HCP - APF 0.74, CN 12", note: "closest packing; austenite, Al, Cu, Zn, Mg" },
                { label: "BCC - APF 0.68, CN 8", note: "looser; ferrite, Cr, W - faster diffusion, softer" },
                { label: "Simple reference cube - APF 0.52, CN 6", note: "the baseline no metal adopts" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "crystal.py - lattice parameter and packing factor",
              code: `import math

# FCC copper: a = 2*sqrt(2)*r
r_cu = 0.128  # nm
a_fcc = 2 * math.sqrt(2) * r_cu
apf_fcc = (4 * 4/3 * math.pi * r_cu**3) / a_fcc**3
print(f"FCC Cu: a = {a_fcc:.3f} nm, APF = {apf_fcc:.2f}")

# BCC iron: a = 4r/sqrt(3)
r_fe = 0.124
a_bcc = 4 * r_fe / math.sqrt(3)
apf_bcc = (2 * 4/3 * math.pi * r_fe**3) / a_bcc**3
print(f"BCC Fe: a = {a_bcc:.3f} nm, APF = {apf_bcc:.2f}")`,
            },
            callout: {
              type: "exam",
              title: "Iron's two faces are the exam's hinge",
              body: "Ferrite (alpha-iron) is BCC, austenite (gamma-iron) is FCC, and the transformation between them at 912 degrees C is the entire basis of steel heat treatment. Any crystallography answer that closes with this sentence connects Unit I to Units II and III - exactly the integration the examiner wants to see.",
            },
            keyTerms: [
              { term: "APF", definition: "Atomic packing factor - fraction of unit-cell volume occupied by atoms (0.74 FCC/HCP, 0.68 BCC)." },
              { term: "Coordination number", definition: "Number of nearest neighbours per atom (12 FCC/HCP, 8 BCC)." },
              { term: "Miller indices", definition: "Notation for crystal directions [uvw] and planes (hkl) using integer components or intercept reciprocals." },
              { term: "Unit cell", definition: "The smallest repeating block of the lattice; a and r link its size to atomic radius." },
            ],
            examQuestions: [
              {
                q: "Describe the BCC, FCC and HCP crystal structures with sketches. Give the coordination number and atomic packing factor of each, derive the relation between lattice parameter and atomic radius for FCC, and compute a for copper (r = 0.128 nm).",
                marks: 14,
                outline: [
                  "BCC: corners + body centre; CN 8; APF 0.68",
                  "FCC: corners + face centres; CN 12; APF 0.74",
                  "HCP: ABAB hexagonal stacking; CN 12; APF 0.74",
                  "FCC derivation: face diagonal = 4r = a sqrt(2), so a = 2 sqrt(2) r",
                  "a_Cu = 2 sqrt(2) × 0.128 = 0.362 nm",
                  "Iron: BCC below 912 degrees C, FCC above - heat-treatment basis",
                ],
              },
              {
                q: "Explain Miller indices with two worked examples: the [111] direction and the (110) plane of a cubic cell.",
                marks: 7,
                outline: [
                  "Direction: components along the three axes reduced to smallest integers - body diagonal [111]",
                  "Plane: intercepts 1, 1, infinity -> reciprocals 1, 1, 0 -> (110)",
                  "Negative indices shown with a bar over the number",
                  "Densest planes carry slip: {111} in FCC, {110} in BCC",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Stability and metastability of metals",
            body: [
              "A phase is stable when its Gibbs free energy is the lowest available at the given temperature and pressure - the state nature settles into given unlimited time. A metastable state is a local energy minimum: stable against small disturbances but not the true minimum, persisting because the path to the stable form requires an activation barrier. Metals live far more often in metastable states than students expect: martensite in quenched steel is metastable indefinitely at room temperature; supersaturated solid solutions from quenching are metastable until ageing; even room-temperature ferrite with dissolved carbon is metastable relative to ferrite plus cementite.",
              "The engineering consequence is that microstructure - and therefore properties - is a choice, not a fate. Quench past the barrier and the metastable structure is frozen in; heat gently (temper or age) and the barrier is climbed, letting the stable mixture form in a controlled way. Worked example: eutectoid steel quenched from 850 degrees C to room temperature bypasses the pearlite route and traps martensite - metastable, extremely hard (about 65 HRC) - and tempering at 300 to 600 degrees C then lets carbon precipitate as fine carbides, trading a controlled amount of hardness for toughness. The same steel, cooled slowly, takes the stable route and arrives at ferrite plus pearlite at about 25 HRC.",
              "The TTT (time-temperature-transformation) diagram of Unit II is the map of this game: it tells which phase forms at which temperature if the metal waits there long enough, and how fast cooling must be to dodge the stable products and reach martensite. Stability versus metastability is therefore the master concept of the whole subject - every heat treatment is an excursion across energy barriers, and every property is the structure you chose to trap.",
              "Exam framing: the question is 'distinguish stable and metastable states with metallurgical examples'. Define both in free-energy language, give martensite and supersaturated solutions as the canonical metastable examples, and close with the tempering numerical showing how metastability converts into controllable properties.",
            ],
            bullets: [
              "Stable phase: lowest Gibbs free energy at the given T and p - the true equilibrium.",
              "Metastable state: local minimum, guarded by an activation barrier - martensite, supersaturated solutions.",
              "Quenching freezes metastable structures; tempering or ageing lets controlled transformation occur.",
              "Martensite is metastable yet lasts indefinitely at room temperature - kinetics, not thermodynamics, decides.",
              "Same composition can deliver 65 HRC (martensite) or 25 HRC (ferrite + pearlite) - structure is the variable.",
              "TTT diagrams map metastability: time and temperature versus what forms.",
            ],
            diagram: {
              kind: "fork",
              title: "Two roads from the same austenite",
              caption: "The cooling path chooses between the stable mixture and the trapped metastable phase.",
              start: "Eutectoid steel at 850 degrees C (austenite)",
              branches: [
                { label: "Cool slowly", outcome: "stable route: ferrite + pearlite, about 25 HRC - ductile and machinable", good: true },
                { label: "Quench fast", outcome: "metastable route: martensite, about 65 HRC - hard and brittle until tempered", good: true },
                { label: "Cool at intermediate rate", outcome: "bainite / fine pearlite - intermediate hardness, the TTT middle path", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Kinetics versus thermodynamics",
              body: "The sharp one-line distinction: thermodynamics says which state is ultimately stable; kinetics says whether the system can get there in the time available. Martensite exists because kinetics wins - the diffusion needed for pearlite is outrun by the quench. Writing this sentence shows you understand metastability rather than merely naming it.",
            },
            keyTerms: [
              { term: "Stable state", definition: "The lowest-free-energy configuration at the given conditions - true equilibrium." },
              { term: "Metastable state", definition: "A local minimum protected by an activation barrier; martensite is the classic case." },
              { term: "Activation barrier", definition: "The energy hump that must be crossed before transformation to the stable state proceeds." },
              { term: "TTT diagram", definition: "Time-temperature-transformation map of which phases form where and how fast." },
            ],
            examQuestions: [
              {
                q: "Distinguish between stable and metastable states of a metal with free-energy definitions. Explain why martensite in quenched steel is metastable, and how tempering uses this metastability to control hardness and toughness.",
                marks: 14,
                outline: [
                  "Stable: lowest Gibbs free energy; metastable: local minimum behind a barrier",
                  "Martensite forms by diffusionless shear during quenching - barrier outrun",
                  "Metastable at room temperature for practical eternity",
                  "Tempering 300-600 degrees C lets carbon precipitate as fine carbides",
                  "Hardness falls from about 65 HRC toward controlled values; toughness rises",
                  "Same composition, chosen structure - the property lever",
                ],
              },
              {
                q: "Give two engineering situations where a metastable microstructure is deliberately created and exploited.",
                marks: 7,
                outline: [
                  "Quenched tool steel: martensite trapped for hardness",
                  "Age-hardened aluminium: supersaturated solution quenched, then precipitates strengthened (Al-Cu 2014)",
                  "Both exploit the activation barrier to freeze a useful non-equilibrium state",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Elastic and plastic behaviour: strength, elasticity and plasticity",
            body: [
              "Elasticity is the ability to regain the original shape on load removal; below the elastic limit, stress and strain are proportional (Hooke's law, sigma = E epsilon), and E - Young's modulus - is the stiffness. Plasticity is the ability to deform permanently without fracture once the yield point is crossed, by dislocation movement; it is what makes forging, rolling and deep drawing possible. Strength is the resistance to deformation: yield strength (where permanent strain starts, commonly 0.2 percent offset) and ultimate tensile strength (the stress at the load maximum). The tensile stress-strain curve plots the whole story in one line.",
              "The curve's landmarks: a linear elastic region up to the proportional limit, a yield point, strain hardening through the plastic region to the UTS, then necking and fracture. Ductility is measured by elongation (percent) and reduction of area at fracture; toughness is the total area under the curve - energy absorbed before fracture. Worked example: mild steel bar 10 mm diameter (A = 78.5 mm^2) yields at 20.5 kN and fails at 35.3 kN after 25 percent elongation. Yield strength = 20500/78.5 = 261 MPa; UTS = 35300/78.5 = 450 MPa; within the elastic range a 100 MPa stress stretches the bar by epsilon = 100/200000 = 0.0005, or 1 mm on a 2 m length - every number traceable to the curve.",
              "The elastic-plastic boundary is the design boundary. Machines are sized so working stresses stay below yield with a safety factor, because plastic deformation in service means dimensional loss and often failure; manufacturing processes, conversely, push metal deliberately past yield and exploit strain hardening (work hardening) - each pass of cold rolling raises yield strength by multiplying dislocations. Elasticity and plasticity are therefore not just material reports but the two halves of engineering practice: one for design, one for processing.",
              "Exam framing: the question is 'define elasticity, plasticity and strength, and explain the salient points of the tensile stress-strain curve for mild steel'. Define each property, sketch the curve with proportional limit, yield, UTS, necking and fracture labelled, and run the yield/UTS computation with real forces and areas. The 0.2 percent offset rule for yield is the detail examiners specifically hunt.",
            ],
            bullets: [
              "Elasticity: shape recovery below the elastic limit; Hooke's law sigma = E epsilon.",
              "Young's modulus E is stiffness - about 200 GPa for steel, 70 GPa for aluminium.",
              "Plasticity: permanent deformation by dislocation motion beyond yield.",
              "Yield strength via the 0.2 percent offset; UTS at the load maximum; necking follows.",
              "Ductility = elongation percent and reduction of area; toughness = area under the curve.",
              "Cold work strain-hardens: each plastic pass raises yield strength by dislocation multiplication.",
            ],
            diagram: {
              kind: "flow",
              title: "Reading the tensile curve left to right",
              caption: "Each landmark on the stress-strain curve is a named property.",
              steps: [
                { label: "Linear elastic region", note: "slope = E; recoverable" },
                { label: "Yield point", note: "permanent strain begins (0.2% offset rule)" },
                { label: "Strain hardening", note: "plastic flow; dislocations multiply" },
                { label: "UTS", note: "maximum stress; necking starts" },
                { label: "Fracture", note: "ductile cup-cone for steel" },
              ],
            },
            table: {
              caption: "Room-temperature properties of common engineering metals.",
              headers: ["Material", "E (GPa)", "Yield (MPa)", "UTS (MPa)", "Elongation (%)"],
              rows: [
                ["Mild steel", "200", "250", "450", "25"],
                ["Alloy steel (Ni-Cr)", "205", "700", "900", "15"],
                ["Aluminium alloy (6061-T6)", "70", "275", "310", "12"],
                ["Copper (annealed)", "110", "70", "220", "45"],
                ["Grey cast iron", "100", "-", "200 (breaks)", "under 1"],
              ],
            },
            callout: {
              type: "tip",
              title: "Stress uses the original area - until necking",
              body: "Engineering stress divides load by the original cross-section, which is why the curve peaks at UTS and then falls even though the real (true) stress keeps rising as the neck thins. When a question says 'stress-strain diagram of mild steel', it means the engineering curve - state that convention explicitly before computing.",
            },
            keyTerms: [
              { term: "Elasticity", definition: "Recoverable deformation; proportional to stress below the elastic limit." },
              { term: "Plasticity", definition: "Permanent deformation beyond yield by dislocation motion." },
              { term: "Yield strength", definition: "Stress at which permanent strain begins; located by the 0.2 percent offset rule." },
              { term: "Toughness", definition: "Energy absorbed to fracture - the total area under the stress-strain curve." },
            ],
            examQuestions: [
              {
                q: "Define elasticity, plasticity, yield strength and ultimate tensile strength. Sketch the tensile stress-strain curve of mild steel labelling all salient points, and compute yield strength and UTS for a 10 mm diameter bar yielding at 20.5 kN and failing at 35.3 kN after 25 percent elongation.",
                marks: 14,
                outline: [
                  "Definitions with the elastic/plastic boundary",
                  "Curve sketch: proportional limit, yield, strain hardening, UTS, necking, fracture",
                  "Area = pi × 5^2 = 78.5 mm^2",
                  "Yield = 20500/78.5 = 261 MPa",
                  "UTS = 35300/78.5 = 450 MPa",
                  "Ductility = 25 percent elongation; toughness = curve area",
                ],
              },
              {
                q: "Why does cold rolling increase the strength of mild steel, and what property does it sacrifice?",
                marks: 7,
                outline: [
                  "Plastic deformation multiplies dislocations",
                  "Dislocations impede each other - further slip needs higher stress (strain hardening)",
                  "Yield strength and hardness rise; ductility and toughness fall",
                  "Annealing restores ductility by recrystallizing the deformed structure",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Hardness, ductility and malleability",
            body: [
              "Hardness is resistance to localized surface deformation - indentation, scratching, abrasion. It is measured by pressing a standard indenter under a standard load and reading the impression: Brinell (steel or carbide ball), Rockwell (cone or ball with dial scale B and C), Vickers (diamond pyramid, HV). Hardness correlates tightly with strength - for steels, UTS in MPa is roughly 3.45 times the Brinell number - which makes the quick hardness test a proxy for the slow tensile test. Hardness also tracks wear resistance, which is why surface-hardening treatments (Unit III) are specified by final hardness.",
              "Ductility is the ability to deform plastically in tension - drawn into wire; its numbers are percent elongation and percent reduction of area at fracture. Malleability is the same ability in compression - hammered or rolled into sheet without cracking; gold is the extreme (gold leaf), and mild steel is malleable enough for forging. The two are cousins - both demand easy dislocation slip - but they are tested in different stress states, and some materials (lead: very malleable, moderately ductile) split the pair. Brittle materials have little of either: grey cast iron elongates under 1 percent before snapping.",
              "Worked example: a Vickers test on a hardened gear tooth applies 30 kgf through a square-based diamond pyramid and leaves a diagonal of 0.45 mm. HV = 1.854 × F/d^2 = 1.854 × 30/0.2025 = 274.7 kgf/mm^2 - about 275 HV, suitable for a carburized gear surface. The companion Rockwell HRC reading would be near 28-30, and the estimated tensile strength from Brinell-type correlation lands near 950 MPa. Three scales, one surface - the conversions and correlations are the everyday arithmetic of heat-treatment shops.",
              "Exam framing: the question is 'define hardness, ductility and malleability and distinguish them; describe the Brinell, Rockwell and Vickers tests'. Define each property, tabulate the three hardness tests (indenter, load, scale, use), and close with one worked HV computation and the strength-correlation sentence.",
            ],
            bullets: [
              "Hardness: resistance to indentation/scratching; correlates with strength and wear resistance.",
              "Brinell: 10 mm ball, heavy load; HB = 2P/(pi D (D - sqrt(D^2 - d^2))).",
              "Rockwell: depth-based dial scales HRB/HRC - fast, no measurement of the impression.",
              "Vickers: diamond pyramid; HV = 1.854 F/d^2; one scale for soft to hard materials.",
              "Ductility: tensile deformation ability - elongation and reduction of area.",
              "Malleability: compressive deformation ability - hammering and rolling without cracking.",
            ],
            diagram: {
              kind: "compare",
              title: "Ductility versus malleability",
              caption: "Cousin properties - both need easy slip - tested in opposite stress states.",
              left: {
                heading: "Ductility (tension)",
                items: [
                  "Drawn into wire",
                  "Measured by percent elongation and reduction of area",
                  "Copper, mild steel, aluminium excel",
                  "Test: tensile test to fracture",
                ],
              },
              right: {
                heading: "Malleability (compression)",
                items: [
                  "Hammered or rolled into sheet",
                  "Tested by forging and flattening",
                  "Gold leaf, lead, mild steel excel",
                  "Forging and rolling exploit it directly",
                ],
              },
            },
            table: {
              caption: "The three hardness tests.",
              headers: ["Test", "Indenter", "Reading", "Best for"],
              rows: [
                ["Brinell", "10 mm steel/carbide ball", "HB from impression diameter", "soft-medium bulk metals; cast iron"],
                ["Rockwell B / C", "1/16 in ball / diamond cone", "depth-based dial reading", "production floor speed; HRC for hardened steel"],
                ["Vickers", "square diamond pyramid", "HV = 1.854 F/d^2", "all hardness levels; thin layers and microhardness"],
              ],
            },
            callout: {
              type: "tip",
              title: "The strength-hardness shortcut",
              body: "For steels, UTS (MPa) is approximately 3.45 × HB. A shop measures hardness in seconds and estimates tensile strength - quote this correlation in answers about why hardness tests substitute for tensile tests in production quality control.",
            },
            keyTerms: [
              { term: "Hardness", definition: "Resistance to localized plastic deformation - indentation or scratching." },
              { term: "HV", definition: "Vickers hardness number = 1.854 F/d^2 with F in kgf and d the mean diagonal in mm." },
              { term: "Ductility", definition: "Capacity for tensile plastic deformation - elongation percent and reduction of area." },
              { term: "Malleability", definition: "Capacity for compressive plastic deformation - hammered into sheet without cracking." },
            ],
            examQuestions: [
              {
                q: "Define hardness, ductility and malleability. Describe the Brinell, Rockwell and Vickers hardness tests with their indenters and suitability, and compute the Vickers number for a 30 kgf load leaving a 0.45 mm diagonal.",
                marks: 14,
                outline: [
                  "Definitions of the three properties with their stress states",
                  "Brinell: ball indenter, impression diameter, HB formula",
                  "Rockwell: depth of penetration, HRB/HRC scales, fastest test",
                  "Vickers: diamond pyramid, HV = 1.854 F/d^2, usable across the full range",
                  "HV = 1.854 × 30/0.45^2 = 274.7, about 275 HV",
                  "Correlation: UTS about 3.45 × HB for steels",
                ],
              },
              {
                q: "Distinguish ductility from malleability with one material that exemplifies each strongly.",
                marks: 7,
                outline: [
                  "Ductility: tensile deformation - drawn wire; copper the classic",
                  "Malleability: compressive deformation - hammered sheet; gold (leaf) the extreme",
                  "Both require easy dislocation slip but different stress states",
                  "Grey cast iron has little of either - under 1 percent elongation, cracks on hammering",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Creep: deformation under sustained load",
            body: [
              "Creep is slow, continuous plastic deformation under constant stress, significant only at high homologous temperature - above roughly 0.4 to 0.5 of the melting point on the kelvin scale. Jet-engine turbine blades (nickel superalloys near 1200 K against a melting point near 1600 K) and steam-plant pipework are designed around creep; room-temperature steel structures ignore it because they sit far below the threshold. The mechanism is diffusion-assisted dislocation climb and grain-boundary sliding - time-dependent processes that ordinary tensile testing never sees.",
              "The creep curve has three stages. Primary (transient) creep: deformation rate falls as the structure hardens. Secondary (steady-state) creep: the minimum, nearly constant rate - this is the design number, and the design life is spent here. Tertiary creep: rate accelerates as necking, grain-boundary cavities and internal cracks develop, ending in rupture. Worked example: a steam-line steel at 500 degrees C shows steady-state creep rate 1e-8 per hour under design stress; over a 20-year (175,000 hour) design life the accumulated strain is 1.75e-3, about 0.18 percent - tolerable. Double the stress and the rate rises roughly an order of magnitude, cutting life to a couple of years - the exponent-law sensitivity that makes stress margins precious.",
              "Design against creep uses stress-rupture data (Larson-Miller parameter: LMP = T(C + log t), empirically combining temperature and rupture time) and creep-resistant materials: solid-solution strengtheners, stable carbides, and single-crystal or directionally-solidified turbine blades that remove the weak grain boundaries transverse to load. Creep resistance is alloy chemistry plus microstructure plus operating margin - not one number on a datasheet.",
              "Exam framing: the question is 'define creep, draw and explain the three-stage creep curve, and state the factors affecting creep'. Define with the homologous-temperature threshold, sketch the curve with primary, secondary and tertiary labelled, give the steady-state-rate design numerical, and list stress, temperature, time and microstructure as the four controlling factors.",
            ],
            bullets: [
              "Creep: time-dependent plastic deformation under constant stress at high homologous temperature.",
              "Significant above about 0.4-0.5 Tm (kelvin) - turbine blades, steam lines, furnace parts.",
              "Primary: hardening, rate falls. Secondary: steady minimum rate - the design stage. Tertiary: cavitation and rupture.",
              "Design uses steady-state creep rate and stress-rupture (Larson-Miller) data.",
              "Worked: 1e-8/hr over 175,000 hours accumulates 0.18 percent strain - life spent in stage two.",
              "Defences: solid-solution and carbide strengthening, single-crystal blades, temperature margins.",
            ],
            diagram: {
              kind: "flow",
              title: "The three stages of the creep curve",
              caption: "Strain rate versus time: falls, flattens, then races to rupture.",
              steps: [
                { label: "Primary creep", note: "hardening; rate decreasing" },
                { label: "Secondary creep", note: "steady-state minimum rate - design life spent here" },
                { label: "Tertiary creep", note: "cavities and necking; rate accelerates" },
                { label: "Rupture", note: "final failure at t_r" },
              ],
            },
            callout: {
              type: "warning",
              title: "Creep is a time problem, not a strength problem",
              body: "A component can pass its short-duration tensile proof and still fail by creep years later at the same stress. Design margins in hot service come from rupture curves extrapolated in log time - never from the room-temperature UTS. Quote this distinction whenever creep is asked alongside ordinary strength.",
            },
            keyTerms: [
              { term: "Creep", definition: "Slow continuous plastic strain under constant stress, significant at high homologous temperature." },
              { term: "Steady-state creep rate", definition: "The minimum, constant strain rate of secondary creep - the design quantity." },
              { term: "Stress-rupture curve", definition: "Stress versus time-to-rupture at temperature; basis of hot-section design life." },
              { term: "Larson-Miller parameter", definition: "T(C + log t) - combines temperature and rupture time to extrapolate creep data." },
            ],
            examQuestions: [
              {
                q: "Define creep and explain why it becomes significant only at high temperatures. Draw the three-stage creep curve, label each stage, and compute the accumulated strain for a steady-state rate of 1e-8 per hour over a 20-year design life.",
                marks: 14,
                outline: [
                  "Creep: time-dependent strain under constant stress; diffusion-assisted mechanisms",
                  "Threshold: above about 0.4-0.5 Tm (kelvin) - turbine and steam-plant territory",
                  "Primary: rate falls (hardening); secondary: steady minimum; tertiary: accelerating to rupture",
                  "Design life spent in secondary creep",
                  "Strain = 1e-8 × 175,000 h = 1.75e-3 = 0.18 percent - tolerable",
                  "Factors: stress, temperature, time, microstructure",
                ],
              },
              {
                q: "How are turbine blades protected against creep? Name three material or design strategies.",
                marks: 7,
                outline: [
                  "Nickel superalloys with solid-solution and precipitate (gamma-prime) strengthening",
                  "Directionally solidified or single-crystal blades remove weak transverse grain boundaries",
                  "Blade cooling and thermal-barrier coatings cut operating metal temperature",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Fatigue: failure under cyclic load",
            body: [
              "Fatigue is progressive crack growth under repeated or fluctuating stress, and it fails components at stresses well below the yield strength - the standard figure is that about 90 percent of mechanical-service failures involve fatigue. The mechanism: cyclic slip at a stress concentration opens a microcrack (initiation), the crack advances a band per cycle leaving beach marks (propagation), and final sudden fracture occurs when the remaining area can no longer carry the load. Fracture surfaces carry the tell-tale marks examiners ask you to identify: beach (shell) marks from load changes and fine striations from individual cycles.",
              "The design data is the S-N curve: stress amplitude S versus cycles to failure N, obtained from rotating-bending or axial tests. Ferrous metals show an endurance limit - a stress below which life is effectively infinite (about 10^7 cycles); for steel it is roughly half the UTS. Aluminium alloys have no true endurance limit, so they are designed for finite life. Worked example: a steel shaft with UTS 600 MPa has an endurance limit near 300 MPa; with a notch factor 1.5 and surface factor 0.9 the corrected limit is about 200 MPa - which is why fillet radii and surface finish dominate shaft design, and why a stress concentration at a keyway can halve shaft life.",
              "Factors that cut fatigue life: stress concentrations (notches, holes, keyways), rough surfaces, corrosion pits, residual tensile stresses, and mean tensile stress. Defences mirror the list: generous fillets, polished or shot-peened surfaces (compressive residual stress), case hardening, and avoiding corrosion. The Miner cumulative-damage rule sums partial damage across load spectra for variable-amplitude design. Fatigue design is therefore mostly geometry and surface management around a material's endurance number.",
              "Exam framing: the question is 'define fatigue, describe the mechanism and S-N curve, and state the factors affecting fatigue life'. Define, sketch the S-N curve marking the endurance limit at about 10^7 cycles, give the steel half-UTS rule with the corrected-limit numerical, and close with the beach-mark/striation fracture-surface description.",
            ],
            bullets: [
              "Fatigue: progressive cracking under cyclic stress, often below yield - about 90 percent of service failures.",
              "Mechanism: initiation at stress concentrations, propagation leaving striations, sudden final fracture.",
              "S-N curve: stress amplitude versus cycles to failure; endurance limit near 10^7 cycles for steel.",
              "Steel endurance limit is about 0.5 UTS; aluminium alloys have no true limit - finite-life design.",
              "Life killers: notches, rough or corroded surfaces, tensile residuals, high mean stress.",
              "Defences: fillets, shot peening and polishing, case hardening, corrosion control, Miner's rule.",
            ],
            diagram: {
              kind: "flow",
              title: "Three stages of fatigue failure",
              caption: "Initiation, propagation, sudden end - each stage leaves its signature on the fracture face.",
              steps: [
                { label: "Initiation", note: "cyclic slip at a notch or defect" },
                { label: "Propagation", note: "crack advances per cycle - beach marks, striations" },
                { label: "Final fracture", note: "remaining area overloaded - sudden, flat, granular" },
              ],
            },
            table: {
              caption: "Fatigue-strength modifiers on the basic endurance limit.",
              headers: ["Factor", "Typical effect", "Design response"],
              rows: [
                ["Stress concentration (notch)", "up to -50 percent at sharp keyways", "generous fillet radii; avoid abrupt sections"],
                ["Surface finish", "polished 1.0; machined 0.7-0.9; corroded 0.3-0.5", "polish or grind critical surfaces"],
                ["Residual stress", "tensile residuals cut life; compressive extend it", "shot peening, case hardening"],
                ["Mean tensile stress", "lowers allowable amplitude", "prevent preloads; Goodman correction"],
                ["Corrosion", "pits become crack starters", "coatings, inhibitors, material choice"],
              ],
            },
            callout: {
              type: "exam",
              title: "The fracture face is the diagnosis",
              body: "Examiners ask for fracture-surface evidence because it proves you know the mechanism: fatigue fractures show smooth, beach-marked crack-growth zones plus one rough, sudden-failure region; overload fractures are uniformly rough. Describing the two-zone face earns the mechanism marks even if the S-N numbers slip.",
            },
            keyTerms: [
              { term: "Fatigue", definition: "Progressive crack growth under repeated stress, failing below yield." },
              { term: "S-N curve", definition: "Stress amplitude versus cycles to failure; its horizontal tail is the endurance limit." },
              { term: "Endurance limit", definition: "Stress below which steel survives effectively infinite cycles - about half the UTS." },
              { term: "Beach marks", definition: "Macroscopic progression marks on a fatigue fracture surface from load variations." },
            ],
            examQuestions: [
              {
                q: "Define fatigue and explain its mechanism through the three stages of failure. Draw a typical S-N curve for steel, define the endurance limit, and compute the corrected endurance limit for a shaft with UTS 600 MPa, notch factor 1.5 and surface factor 0.9.",
                marks: 14,
                outline: [
                  "Fatigue: cyclic-stress cracking below yield; about 90 percent of service failures",
                  "Stages: initiation at stress raiser, propagation (beach marks/striations), sudden fracture",
                  "S-N curve: amplitude vs log N; endurance limit at about 10^7 cycles",
                  "Basic limit = 0.5 UTS = 300 MPa",
                  "Corrected = 300/(1.5 × 0.9) = 222 MPa",
                  "Defences: fillets, peening, surface finish, corrosion control",
                ],
              },
              {
                q: "Why does shot peening improve fatigue life even though it slightly roughens the surface?",
                marks: 7,
                outline: [
                  "Peening plastically flattens the surface layers",
                  "The constrained recovery leaves compressive residual stress at the surface",
                  "Compressive residual closes surface microcracks and offsets tensile cycle peaks",
                  "The residual-stress benefit outweighs the small roughness penalty",
                ],
              },
            ],
          },
          {
            number: "1.9",
            title: "Industrial metals, steels and their manufacturing routes",
            body: [
              "Commercial steel begins as iron ore and ends as rolled product, and the route is the standard exam flowchart. The blast furnace reduces iron ore (hematite Fe2O3) with coke and limestone into pig iron - 3.5 to 4.5 percent carbon plus silicon, manganese, sulphur and phosphorus - strong but brittle. The basic oxygen furnace (LD converter) blows oxygen through the molten pig iron to burn carbon down to the 0.05-1.0 percent range, producing liquid steel; the electric arc furnace melts scrap for the same purpose. Secondary refining (ladle metallurgy) trims sulphur and alloys, and continuous casting solidifies the steel directly into billets, blooms and slabs, which rolling then reduces to plate, strip, bar and sections.",
              "Steel families follow carbon content: low-carbon (mild) steel up to 0.3 percent C - structural sections, car bodies, weldable and ductile; medium-carbon 0.3-0.6 percent - shafts, gears, rails, heat-treatable; high-carbon above 0.6 percent - springs, tools, wires, hard and strong but less ductile. Alloy steels add chromium, nickel, molybdenum, vanadium for hardenability, toughness and heat resistance; stainless steels add at least 10.5 percent chromium for corrosion resistance. Cast irons (carbon above about 2 percent) are the foundry branch - covered fully in Unit II.",
              "Worked example: a 200-tonne LD heat charged with 180 tonnes pig iron and 20 tonnes scrap blows for about 18 minutes; carbon falls from 4.0 percent to a target 0.10 percent, meaning roughly (4.0 - 0.10) percent of 200 tonnes, about 7.8 tonnes of carbon, oxidizes to CO/CO2 in under twenty minutes - the intensity that makes the converter the world's principal steelmaking route. Continuous casting then freezes 200 tonnes into a slab in about an hour, replacing the older ingot-and-soaking-pit sequence and its yield losses.",
              "Exam framing: the question is 'describe the route from iron ore to finished steel with a flow diagram, and classify steels by carbon content'. Sketch blast furnace -> converter/EAF -> secondary refining -> continuous casting -> rolling, tabulate the three carbon classes with applications, and quote the pig-iron carbon range and the LD blow example.",
            ],
            bullets: [
              "Blast furnace: ore + coke + limestone -> pig iron, 3.5-4.5 percent C, brittle.",
              "Basic oxygen (LD) converter or electric arc furnace trims carbon to steel range 0.05-1.0 percent.",
              "Secondary refining trims S, P and adds alloys; continuous casting yields billets, blooms, slabs.",
              "Rolling converts casts to plate, strip, bar and structural sections.",
              "Mild steel under 0.3 percent C - structures; 0.3-0.6 - shafts and rails; above 0.6 - tools and springs.",
              "Alloy and stainless steels add Cr, Ni, Mo, V for hardenability, toughness and corrosion resistance.",
            ],
            diagram: {
              kind: "flow",
              title: "From ore to rolled steel",
              caption: "The five links of the industrial steel chain.",
              steps: [
                { label: "Blast furnace", note: "ore + coke + limestone -> pig iron (3.5-4.5% C)" },
                { label: "LD converter / EAF", note: "oxygen blow or scrap melt to 0.05-1.0% C" },
                { label: "Secondary refining", note: "ladle trimming of S, P; alloying" },
                { label: "Continuous casting", note: "billets, blooms, slabs" },
                { label: "Rolling", note: "plate, strip, bars, sections" },
              ],
            },
            table: {
              caption: "Steel classes by carbon content.",
              headers: ["Class", "Carbon", "Character", "Typical products"],
              rows: [
                ["Low-carbon (mild)", "up to 0.3%", "ductile, weldable, cheap", "car bodies, structural sections, pipe"],
                ["Medium-carbon", "0.3 - 0.6%", "heat-treatable, balanced", "shafts, gears, rails, bolts"],
                ["High-carbon", "0.6 - 1.0%", "hard, strong, less ductile", "springs, wire, cutting tools"],
                ["Alloy / stainless", "varies + Cr, Ni, Mo", "hardenability, toughness, corrosion resistance", "bearings, valves, chemical plant"],
              ],
            },
            callout: {
              type: "tip",
              title: "Pig iron versus steel in one sentence",
              body: "The boundary is carbon: pig iron carries 3.5-4.5 percent C and is brittle; steel carries under about 1 percent ( wrought iron under 0.1) and is workable. Every steelmaking route is fundamentally a controlled carbon-removal or scrap-recycling operation - quote that framing and the flowchart question becomes easy.",
            },
            keyTerms: [
              { term: "Pig iron", definition: "Blast-furnace product with 3.5-4.5 percent carbon - brittle, the feedstock for steelmaking." },
              { term: "LD converter", definition: "Basic oxygen furnace blowing oxygen through pig iron to remove carbon - the main steelmaking route." },
              { term: "Continuous casting", definition: "Direct solidification of steel into billets/blooms/slabs, replacing ingot casting." },
              { term: "Mild steel", definition: "Low-carbon steel under about 0.3 percent C - ductile, weldable, the everyday structural metal." },
            ],
            examQuestions: [
              {
                q: "Describe the manufacturing route of steel from iron ore to rolled sections with a flow diagram. Classify carbon steels by carbon content with two applications of each class.",
                marks: 14,
                outline: [
                  "Blast furnace: ore + coke + limestone -> pig iron 3.5-4.5 percent C",
                  "LD converter (oxygen) or EAF (scrap) trims carbon to steel range",
                  "Secondary refining: sulphur/phosphorus trimming, alloying",
                  "Continuous casting: billets, blooms, slabs; then rolling",
                  "Mild steel under 0.3 percent: structures, bodies",
                  "Medium 0.3-0.6: shafts, gears, rails; high-carbon above 0.6: springs, tools",
                ],
              },
              {
                q: "Why is the basic oxygen converter able to refine 200 tonnes of iron in under 20 minutes while older open-hearth furnaces needed hours?",
                marks: 7,
                outline: [
                  "Blown oxygen reacts directly with dissolved carbon - exothermic, no external fuel needed",
                  "Heat generated by oxidation itself maintains the bath",
                  "High interfacial area of the oxygen jet speeds mass transfer",
                  "Open hearth relied on slower surface oxidation through slag",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Phase Diagrams and the Iron-Carbon System",
      summary:
        "Unit II is the map-reading unit: cooling curves and the phase rule, the isomorphous and eutectic diagrams, eutectoid and peritectic reactions, the iron-carbon diagram with the lever rule, steels and cast irons including the cast-iron family, TTT diagrams that add time to the picture, and the stainless steels plus elastic, anelastic and viscoelastic behaviour.",
      chapter: {
        number: "02",
        title: "Maps of Phases",
        intro:
          "Unit II covers cooling curves and the Gibbs phase rule, isomorphous and eutectic phase diagrams, eutectoid and peritectic reactions, the iron-carbon diagram and lever rule, steels and types of cast iron, T-T-T diagrams, types of stainless steel, and elastic, anelastic and viscoelastic behaviour.",
        inOneBreath:
          "Cooling curves reveal arrests where phases change; the phase rule counts degrees of freedom; binary diagrams map isomorphous solid solutions and eutectic drops; the iron-carbon diagram fixes eutectoid at 0.8 percent C and 723 degrees C, austenite dissolving up to 2 percent; the lever rule computes phase fractions; TTT curves add time so quenching can dodge pearlite and reach martensite; cast irons and stainless families follow their own maps.",
        sections: [
          {
            number: "2.1",
            title: "Cooling curves and the Gibbs phase rule",
            body: [
              "A cooling curve plots temperature against time as a uniform melt cools, and its shape reports the phase behaviour. A pure metal cools smoothly until freezing begins, then shows a horizontal arrest - latent heat released at constant temperature while liquid and solid coexist - then resumes cooling in the solid. A solid-solution alloy shows instead a slope change (inflection) at the liquidus and another at the solidus, because freezing occurs over a temperature range. Eutectic alloys show a long horizontal eutectic arrest at the eutectic temperature where two solids freeze together. Reading arrests off cooling curves is precisely how phase diagrams were first measured experimentally.",
              "The Gibbs phase rule counts the freedom behind the curves: F = C - P + 1 for condensed systems at constant pressure (or F = C - P + 2 in full), where C is components and P coexisting phases. Pure metal freezing: C = 1, P = 2, F = 1 - 2 + 1 = 0 - no freedom, so temperature is fixed during the arrest; that is why the plateau is horizontal. Binary eutectic: C = 2, P = 3 (liquid + two solids), F = 2 - 3 + 1 = 0 - the eutectic arrest is likewise isothermal. In two-phase regions (say liquid + one solid) F = 1: temperature and composition can vary along the phase boundary - the sloping liquidus.",
              "Worked example: interpret the cooling curve of a 40 percent B alloy from an isomorphous A-B system. Smooth cooling to the liquidus at about 750 degrees C (inflection 1 - first solid appears, F drops to 1), continued cooling with slope changes as composition shifts along liquidus and solidus, second inflection at the solidus about 620 degrees C (last liquid disappears, F returns to 2), then smooth solid cooling. The two inflections are the experimental fingerprints of the two phase boundaries - exactly the technique thermocouple-based labs use.",
              "Exam framing: the question is 'explain cooling curves of pure metal, solid solution and eutectic alloy, and state the phase rule with an application'. Sketch three curves side by side, mark the arrests, compute F for the pure-metal arrest and the eutectic reaction, and close with the experimental-method sentence.",
            ],
            bullets: [
              "Pure metal: horizontal arrest at freezing - latent heat at constant temperature.",
              "Solid-solution alloy: two inflections, at liquidus and solidus - freezing over a range.",
              "Eutectic alloy: long horizontal arrest at the eutectic temperature.",
              "Phase rule (condensed): F = C - P + 1; pure metal freezing gives F = 0 - isothermal arrest.",
              "Eutectic reaction: C = 2, P = 3, F = 0 - also isothermal.",
              "Cooling curves are the experimental origin of phase diagrams.",
            ],
            diagram: {
              kind: "flow",
              title: "What the cooling curve reports",
              caption: "Arrests and inflections are phase boundaries made visible in time.",
              steps: [
                { label: "Uniform liquid cooling", note: "slope set by heat capacity" },
                { label: "Liquidus inflection", note: "first solid; F drops to 1" },
                { label: "Two-phase range", note: "slope changes; composition shifts" },
                { label: "Solidus inflection", note: "last liquid gone; F back to 2" },
                { label: "Solid cooling", note: "single-phase slope again" },
              ],
            },
            table: {
              caption: "Phase-rule arithmetic for the standard cases.",
              headers: ["Case", "C", "P", "F = C - P + 1", "Consequence"],
              rows: [
                ["Pure metal freezing", "1", "2", "0", "isothermal horizontal arrest"],
                ["Solid-solution freezing range", "2", "2", "1", "temperature and composition can vary - sloping boundaries"],
                ["Binary eutectic reaction", "2", "3", "0", "isothermal eutectic arrest at fixed composition"],
                ["Single-phase alloy field", "2", "1", "2", "both T and composition free"],
              ],
            },
            callout: {
              type: "tip",
              title: "F = 0 predicts the horizontal line",
              body: "Every horizontal line on a binary phase diagram corresponds to a three-phase reaction (eutectic, eutectoid, peritectic) and F = 0 - temperature and compositions all fixed. Saying 'F = 0, so the arrest is isothermal' converts the phase rule from a formula into an explanation, which is what the marker wants.",
            },
            keyTerms: [
              { term: "Cooling curve", definition: "Temperature versus time plot whose arrests and inflections mark phase changes." },
              { term: "Liquidus / solidus", definition: "Boundaries above which all is liquid and below which all is solid; between them liquid + solid coexist." },
              { term: "Phase rule", definition: "F = C - P + 1 (condensed) counts degrees of freedom among coexisting phases." },
              { term: "Arrest", definition: "The horizontal plateau on a cooling curve when freezing occurs at constant temperature." },
            ],
            examQuestions: [
              {
                q: "Sketch and explain the cooling curves of a pure metal, a solid-solution alloy and a eutectic alloy. State the Gibbs phase rule and compute the degrees of freedom for the pure-metal freezing arrest and the eutectic reaction.",
                marks: 14,
                outline: [
                  "Pure metal: horizontal arrest at freezing temperature",
                  "Solid solution: inflections at liquidus and solidus - freezing over a range",
                  "Eutectic: long horizontal arrest at eutectic temperature",
                  "Phase rule F = C - P + 1 for condensed systems",
                  "Pure metal: 1 - 2 + 1 = 0 - isothermal",
                  "Eutectic: 2 - 3 + 1 = 0 - isothermal at fixed composition",
                ],
              },
              {
                q: "Why are cooling curves historically important in constructing phase diagrams?",
                marks: 7,
                outline: [
                  "Thermal analysis: arrests and inflections locate phase boundaries",
                  "Pure-metal arrest gives the melting point; inflections give liquidus/solidus points",
                  "Eutectic arrest fixes the eutectic temperature and composition",
                  "Repeated for many compositions assembles the full diagram",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Isomorphous and eutectic phase diagrams",
            body: [
              "An isomorphous system has both components fully soluble in each other in liquid and solid states - one continuous solid-solution field bridges liquidus and solidus - the copper-nickel system is the textbook case. Tie lines at any temperature give the two coexisting phases' compositions (the ends of the tie line on liquidus and solidus), and the lever rule gives their amounts. Because solubility is complete, solidification of any alloy runs over a temperature range with progressive compositional shift, producing the coring already met in Unit I.",
              "A eutectic system is the opposite pattern: limited solid solubility and a special composition - the eutectic - at which liquid freezes isothermally into two solids simultaneously: L -> alpha + beta. The lead-tin solder system is the classic: eutectic at 61.9 percent Sn and 183 degrees C. Alloys left of the eutectic are hypoeutectic (primary alpha plus eutectic); right are hypereutectic (primary beta plus eutectic). Eutectic alloys are prized industrially because they melt at the lowest temperature and freeze sharply - solder, cast iron (a Fe-C eutectic story) and Al-Si casting alloys all live on this behaviour.",
              "Worked example: lead-tin solder at 40 percent Sn solidifies as follows. Below the liquidus (about 250 degrees C) primary lead-rich alpha begins to freeze; at 183 degrees C the remaining liquid has shifted to the eutectic composition and transforms: alpha + beta plates. Lever rule on the alpha + liquid tie line at, say, 200 degrees C: with liquidus at 30 percent Sn and alpha at 15 percent Sn, liquid fraction = (40 - 15)/(100 - 15) if the liquid were eutectic - the mechanical routine being: draw the tie line, read the two ends, apply lever rule. The final microstructure is primary alpha islands in a lamellar eutectic matrix - and the amount of eutectic is (40 - 15)/(61.9 - 15) = 0.53, about 53 percent.",
              "Exam framing: the question is 'draw and describe isomorphous and eutectic phase diagrams and explain the lever rule with a numerical'. Draw both diagrams labelled with their fields, define the eutectic reaction with its F = 0 signature, and run one lever-rule computation to a percent answer.",
            ],
            bullets: [
              "Isomorphous: complete liquid and solid solubility; Cu-Ni; one solid-solution field.",
              "Eutectic: limited solubility; L -> alpha + beta isothermally at the eutectic point.",
              "Pb-Sn eutectic: 61.9 percent Sn at 183 degrees C - solder's melting advantage.",
              "Hypoeutectic / hypereutectic: primary alpha or beta plus eutectic matrix.",
              "Lever rule: phase fraction = opposite arm length over total tie-line length.",
              "Eutectic alloys melt lowest and freeze sharply - solder, cast iron, Al-Si castings.",
            ],
            diagram: {
              kind: "compare",
              title: "Isomorphous versus eutectic",
              caption: "Two patterns of solubility produce two different diagrams and two different solidification stories.",
              left: {
                heading: "Isomorphous (Cu-Ni)",
                items: [
                  "Complete solubility in liquid and solid",
                  "One solid-solution field between liquidus and solidus",
                  "Freezing over a temperature range",
                  "Coriing from compositional shift during freezing",
                ],
              },
              right: {
                heading: "Eutectic (Pb-Sn)",
                items: [
                  "Limited solid solubility",
                  "Isothermal reaction L -> alpha + beta at the eutectic point",
                  "Lowest-melting composition freezes sharply",
                  "Hypo/hypereutectic alloys carry primary crystals plus eutectic",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Draw the tie line before the arithmetic",
              body: "Every lever-rule numerical starts with a horizontal tie line at the given temperature, its ends read as the two phase compositions and the alloy composition marked on it. Examiners award the tie-line sketch separately from the arithmetic - and the sketch prevents the most common error, substituting compositions in the wrong direction.",
            },
            keyTerms: [
              { term: "Isomorphous system", definition: "Binary system with complete liquid and solid solubility - one solid-solution field." },
              { term: "Eutectic reaction", definition: "Isothermal freezing of liquid into two solids: L -> alpha + beta at the eutectic point." },
              { term: "Hypoeutectic", definition: "Alloy left of the eutectic composition - primary alpha plus eutectic." },
              { term: "Lever rule", definition: "Phase fraction equals the tie-line length opposite the phase divided by total length." },
            ],
            examQuestions: [
              {
                q: "Draw and explain isomorphous and eutectic binary phase diagrams. For a Pb-Sn alloy of 40 percent Sn (eutectic 61.9 percent Sn at 183 degrees C), compute the fraction of eutectic in the final structure assuming primary alpha contains 15 percent Sn.",
                marks: 14,
                outline: [
                  "Isomorphous: liquidus/solidus bridging one solid-solution field (Cu-Ni)",
                  "Eutectic: L -> alpha + beta at fixed temperature, F = 0",
                  "Primary alpha freezes first, liquid shifts toward eutectic",
                  "At 183 degrees C all remaining liquid transforms to eutectic",
                  "Eutectic fraction = (40 - 15)/(61.9 - 15) = 0.53 - about 53 percent",
                  "Remaining 47 percent is primary alpha",
                ],
              },
              {
                q: "Why are eutectic compositions preferred for solders and casting alloys?",
                marks: 7,
                outline: [
                  "Eutectic has the lowest melting point of the system - less heat input",
                  "Freezes sharply at one temperature - crisp mould filling, clean joints",
                  "Fine lamellar eutectic structure gives uniform properties",
                  "No wide freezing range - less segregation and fewer shrinkage defects",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Eutectoid, peritectic and other invariant reactions",
            body: [
              "Beyond the eutectic, binary systems host a family of three-phase invariant reactions, all isothermal with F = 0 and all drawn as horizontal lines. Eutectoid (eutectic's solid cousin): one solid decomposes into two solids on cooling - gamma -> alpha + beta; the iron-carbon system's gamma -> ferrite + cementite at 723 degrees C is the most important reaction in metallurgy, forming pearlite. Peritectic: liquid plus one solid react to form a different solid - L + alpha -> beta; steel's L + delta -> gamma at 1495 degrees C is the example. Monotectic (L1 -> L2 + alpha), syntectic (L1 + L2 -> alpha) and eutectoid-type ordering reactions complete the family.",
              "The peritectic is metallurgically notorious because the reaction product forms a shell around the reactant solid, and further reaction must diffuse through that shell - so peritectic solidification is sluggish and often incomplete, leaving coring and unreacted cores in cast alloys. The eutectoid, by contrast, is fully solid-state and proceeds by diffusion within the solid, producing the fine lamellar pearlite whose spacing (coarse at slow cooling near the eutectoid temperature, fine at larger undercooling) sets the strength of annealed steels.",
              "Worked example: pearlite formation. Eutectoid steel (0.8 percent C) cooled below 723 degrees C transforms austenite into alternate plates of ferrite (0.02 percent C) and cementite (6.67 percent C). Carbon must redistribute over micrometres: at 700 degrees C diffusion is slow, giving coarse pearlite with thick plates (hardness near 200 HB); at 550 degrees C diffusion is fast-suppressed, giving fine pearlite (near 300 HB); below about 550 degrees C the same reaction produces bainite instead. One reaction, three microstructures, one variable - undercooling.",
              "Exam framing: the question is 'define eutectoid and peritectic reactions with the iron-carbon examples and sketch each'. Give both definitions in arrow form with their Fe-C temperatures (723 degrees C eutectoid; 1495 degrees C peritectic), sketch the horizontal line with the three-phase tie, and add the pearlite-spacing consequence to show the reaction's practical weight.",
            ],
            bullets: [
              "Eutectoid: gamma -> alpha + beta on cooling - Fe-C: austenite -> ferrite + cementite at 723 degrees C (pearlite).",
              "Peritectic: L + alpha -> beta - Fe-C: L + delta -> gamma at 1495 degrees C.",
              "All invariant reactions are isothermal horizontal lines with F = 0.",
              "Peritectic product shells the reactant - sluggish, often incomplete in castings.",
              "Eutectoid proceeds by solid-state diffusion - pearlite spacing set by undercooling.",
              "Coarse pearlite about 200 HB; fine pearlite about 300 HB; below 550 degrees C bainite forms.",
            ],
            diagram: {
              kind: "matrix",
              title: "The invariant reaction family at a glance",
              caption: "Two axes: what coexists before the reaction, and what forms after.",
              axes: { x: "Reactants (cooling)", y: "Product form" },
              quadrants: [
                { label: "Eutectic", note: "liquid -> two solids; lowest-melting point (Pb-Sn)" },
                { label: "Eutectoid", note: "one solid -> two solids; pearlite reaction at 723 degrees C" },
                { label: "Peritectic", note: "liquid + solid -> new solid; sluggish shell reaction (L + delta -> gamma)" },
                { label: "Monotectic / syntectic", note: "liquid-liquid miscibility reactions - rarer, specialist systems" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three temperatures to memorize",
              body: "The Fe-C invariant anchors: peritectic 1495 degrees C (L + delta -> gamma), eutectic 1130 degrees C (L -> austenite + cementite, ledeburite), eutectoid 723 degrees C (gamma -> ferrite + cementite, pearlite). Quoting all three with their compositions (0.17, 4.3, 0.8 percent C) is the fast path through every iron-carbon question.",
            },
            keyTerms: [
              { term: "Eutectoid reaction", definition: "One solid decomposes isothermally into two solids; in steel, austenite to pearlite at 723 degrees C." },
              { term: "Peritectic reaction", definition: "Liquid plus solid react to a new solid; sluggish because the product shells the reactant." },
              { term: "Pearlite", definition: "Lamellar mixture of ferrite and cementite from the eutectoid reaction." },
              { term: "Invariant reaction", definition: "Three-phase equilibrium at fixed temperature and compositions - F = 0." },
            ],
            examQuestions: [
              {
                q: "Define eutectoid and peritectic reactions with their iron-carbon examples. Sketch each on a phase-diagram line and explain why the peritectic reaction is often incomplete in cast alloys.",
                marks: 14,
                outline: [
                  "Eutectoid: gamma -> alpha + cementite at 723 degrees C (pearlite)",
                  "Peritectic: L + delta -> gamma at 1495 degrees C",
                  "Both isothermal, F = 0, horizontal three-phase lines",
                  "Peritectic product (gamma) shells the delta grains",
                  "Further reaction requires diffusion through the shell - slow",
                  "Result: unreacted cores and coring in cast steels",
                ],
              },
              {
                q: "How does undercooling below the eutectoid temperature change the pearlite structure and hardness?",
                marks: 7,
                outline: [
                  "Small undercooling (about 700 degrees C): slow diffusion - coarse pearlite, about 200 HB",
                  "Larger undercooling (about 550 degrees C): fine pearlite, about 300 HB",
                  "Below about 550 degrees C: bainite instead of pearlite",
                  "Spacing of ferrite/cementite lamellae is the strength lever",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "The iron-carbon phase diagram",
            body: [
              "The iron-carbon diagram is the subject's central map. Its phases: ferrite (alpha, BCC iron dissolving up to 0.02 percent C, soft and magnetic), austenite (gamma, FCC dissolving up to 2.0 percent C at 1130 degrees C, soft and non-magnetic), cementite (Fe3C, 6.67 percent C, very hard and brittle), delta ferrite (high-temperature BCC) and liquid. The horizontal invariant lines: peritectic at 1495 degrees C, eutectic at 1130 degrees C (liquid -> austenite + cementite = ledeburite, at 4.3 percent C), and the eutectoid at 723 degrees C (austenite -> ferrite + cementite = pearlite, at 0.8 percent C). Carbon beyond 6.67 percent is not plotted; industrially the useful span ends at cast iron (about 4.3 percent).",
              "Critical temperatures carry their own letters. A1 = 723 degrees C: the eutectoid line where pearlite forms or dissolves. A3: the boundary between gamma and gamma + alpha, falling from 912 degrees C at zero carbon to 723 degrees C at 0.8 percent. Acm: the gamma/gamma + cementite boundary, rising from 723 degrees C to 1130 degrees C. The A1, A3 and Acm lines tell the heat treater exactly where to austenitize: above A3 for hypoeutectoid steels, above Acm for hypereutectoid ones - Unit III's treatments are all anchored on these letters.",
              "Worked example: a 0.4 percent C steel heated to 800 degrees C is fully austenitic (above A3, which is about 800 degrees C for this carbon level). On slow cooling to 723 degrees C the austenite begins ejecting proeutectoid ferrite; just above 723 degrees C the phases are gamma of 0.8 percent C plus alpha of 0.02 percent C, and below it the gamma transforms to pearlite. The final structure is ferrite plus pearlite - the workhorse microstructure of structural steel. Every alloy between 0.02 and 0.8 percent C tells the same story with different fractions, and the lever rule of the next section fixes those fractions.",
              "Exam framing: the guaranteed question is 'draw the iron-carbon diagram, label all phases, invariant lines and critical temperatures'. Practise the sketch: axes to 6.67 percent C and 1600 degrees C, the three horizontals, the two solvus lines, and the A1/A3/Acm letters. Label the steel region (under 2 percent C) and cast-iron region (2 to 4.3 percent) - the boundary at austenite's 2 percent solubility is itself a favourite sub-question.",
            ],
            bullets: [
              "Phases: ferrite (BCC, 0.02 percent C max), austenite (FCC, 2.0 percent C max), cementite (Fe3C, 6.67 percent C), delta ferrite, liquid.",
              "Peritectic 1495 degrees C (L + delta -> gamma); eutectic 1130 degrees C at 4.3 percent C (ledeburite); eutectoid 723 degrees C at 0.8 percent C (pearlite).",
              "A1 = 723 degrees C; A3 = gamma/gamma+alpha line; Acm = gamma/gamma+cementite line.",
              "Steels: 0.02-2 percent C; cast irons: 2-4.3 percent C (in practice).",
              "Hypoeutectoid steels austenitize above A3; hypereutectoid above Acm.",
              "Slow cooling of any steel yields ferrite/pearlite or pearlite/cementite mixtures set by carbon.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Carbon content decides the family",
              caption: "The iron-carbon ladder from pure iron to cast iron.",
              tiers: [
                { label: "Steels: 0.02 - 2.0 percent C", note: "ferrite/pearlite/cementite engineering alloys" },
                { label: "Cast irons: 2.0 - 4.3 percent C", note: "ledeburite story; eutectic at 4.3 percent" },
                { label: "Beyond 4.3 percent C", note: "industrially uninteresting - too brittle, cementite-dominated" },
              ],
            },
            table: {
              caption: "The iron-carbon invariants and critical points.",
              headers: ["Feature", "Temperature", "Composition", "Reaction / meaning"],
              rows: [
                ["Peritectic", "1495 degrees C", "0.17 percent C (L), 0.10 (delta), 0.16 (gamma)", "L + delta -> gamma"],
                ["Eutectic", "1130 degrees C", "4.3 percent C", "L -> austenite + cementite (ledeburite)"],
                ["Eutectoid (A1)", "723 degrees C", "0.8 percent C", "gamma -> ferrite + cementite (pearlite)"],
                ["A3 line", "912 -> 723 degrees C", "0 -> 0.8 percent C", "austenite / austenite+ferrite boundary"],
                ["Acm line", "723 -> 1130 degrees C", "0.8 -> 2.0 percent C", "austenite / austenite+cementite boundary"],
                ["Austenite solubility limit", "1130 degrees C", "2.0 percent C", "steel / cast iron boundary"],
              ],
            },
            callout: {
              type: "exam",
              title: "The diagram is the answer sheet",
              body: "Almost every heat-treatment question begins 'with the help of the iron-carbon diagram'. Drawing it accurately - three horizontals, A3, Acm, and the 0.8/4.3/6.67 compositions - lets you read off austenitizing temperatures, final structures and phase fractions. Practise the sketch until it takes under two minutes; it is the highest-yield drawing in the subject.",
            },
            keyTerms: [
              { term: "Ferrite (alpha)", definition: "BCC iron dissolving up to 0.02 percent C; soft, ductile, magnetic." },
              { term: "Austenite (gamma)", definition: "FCC iron dissolving up to 2.0 percent C; soft, non-magnetic, the heat-treatment parent." },
              { term: "Cementite (Fe3C)", definition: "Iron carbide at 6.67 percent C - very hard and brittle." },
              { term: "A1 / A3 / Acm", definition: "The eutectoid line and the austenite boundaries used to set heat-treatment temperatures." },
            ],
            examQuestions: [
              {
                q: "Draw the iron-carbon equilibrium diagram up to 6.67 percent carbon. Label all phases, the three invariant reactions with temperatures and compositions, and the critical lines A1, A3 and Acm. Mark the steel and cast-iron regions.",
                marks: 14,
                outline: [
                  "Phases: L, delta, gamma (austenite), alpha (ferrite), Fe3C (cementite)",
                  "Peritectic 1495 degrees C; eutectic 1130 degrees C at 4.3 percent C (ledeburite)",
                  "Eutectoid 723 degrees C at 0.8 percent C (pearlite)",
                  "A3 from 912 to 723 degrees C; Acm from 723 to 1130 degrees C",
                  "Steels below 2 percent C (austenite solubility limit); cast irons 2-4.3 percent",
                  "Cementite at 6.67 percent C closes the diagram",
                ],
              },
              {
                q: "Describe the equilibrium cooling of a 0.4 percent C steel from 900 degrees C to room temperature, naming the phases present at each stage.",
                marks: 7,
                outline: [
                  "900-800 degrees C: fully austenitic (above A3)",
                  "800-723 degrees C: proeutectoid ferrite forms; austenite enriches toward 0.8 percent",
                  "At 723 degrees C: remaining austenite transforms to pearlite",
                  "Room temperature: ferrite + pearlite; fractions fixed by lever rule",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Lever rule and phase fractions in steels",
            body: [
              "The lever rule turns the diagram into numbers: on a tie line at the temperature of interest, the fraction of one phase equals the length of the tie line on the opposite side of the alloy point divided by the full tie-line length. For hypoeutectoid steels the most useful application is just above the eutectoid line, where the phases are proeutectoid ferrite (0.02 percent C) and austenite (0.8 percent C); below A1 the same arithmetic splits ferrite versus pearlite, since pearlite inherits the eutectoid composition.",
              "Worked example one: 0.4 percent C steel at 725 degrees C (just above A1). Ferrite fraction = (0.8 - 0.4)/(0.8 - 0.02) = 0.4/0.78 = 51.3 percent; austenite fraction = 48.7 percent. Below A1 the austenite becomes pearlite, so the final structure is about 51 percent ferrite and 49 percent pearlite - the familiar half-and-half micrograph of medium-carbon structural steel.",
              "Worked example two: 1.2 percent C steel (hypereutectoid) at 725 degrees C. The phases are austenite (0.8 percent C) and proeutectoid cementite (6.67 percent C). Cementite fraction = (1.2 - 0.8)/(6.67 - 0.8) = 0.4/5.87 = 6.8 percent; austenite (later pearlite) 93.2 percent. Note how little cementite there is - a few percent of a very hard phase outlining the pearlite colonies raises hardness substantially while keeping the bulk tough, which is why hypereutectoid steels suit tooling.",
              "Exam framing: the question gives a carbon percentage and asks for the phase fractions and the resulting microstructure. The routine: locate the alloy on the diagram, decide the tie line (above or below A1), apply the lever rule with 0.02/0.8 or 0.8/6.67 endpoints, and state the microstructure in plain language. Two computations - one hypo, one hyper - cover the entire question space.",
            ],
            bullets: [
              "Lever rule: fraction of a phase = opposite tie-line segment / full tie-line length.",
              "Hypoeutectoid just above A1: ferrite (0.02) vs austenite (0.8) endpoints.",
              "Below A1, austenite becomes pearlite - the fractions carry over unchanged.",
              "Worked: 0.4 percent C gives about 51 percent ferrite + 49 percent pearlite.",
              "Hypereutectoid: cementite (6.67) vs austenite (0.8) endpoints.",
              "Worked: 1.2 percent C gives about 6.8 percent proeutectoid cementite + 93.2 percent pearlite.",
            ],
            diagram: {
              kind: "flow",
              title: "The lever-rule routine",
              caption: "Five steps from carbon percentage to microstructure percentages.",
              steps: [
                { label: "Locate the alloy", note: "carbon content on the Fe-C diagram" },
                { label: "Choose the tie line", note: "at the given temperature (usually just above or below 723 degrees C)" },
                { label: "Read the endpoints", note: "0.02/0.8 for hypo; 0.8/6.67 for hyper" },
                { label: "Apply the lever", note: "opposite segment over total length" },
                { label: "Name the structure", note: "ferrite + pearlite, or pearlite + network cementite" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "lever.py - phase fractions for hypoeutectoid steel",
              code: `def hypo_fractions(c):          # carbon in percent, c < 0.8
    fe, au = 0.02, 0.8          # tie-line endpoints just above A1
    ferrite = (au - c) / (au - fe)
    return ferrite, 1 - ferrite   # ferrite, (later) pearlite

for c in [0.2, 0.4, 0.6]:
    f, p = hypo_fractions(c)
    print(f"{c}% C -> ferrite {f*100:.0f}%, pearlite {p*100:.0f}%")
# 0.2 -> 77/23   0.4 -> 51/49   0.6 -> 26/74`,
            },
            callout: {
              type: "tip",
              title: "0.02 and 0.8 and 6.67 - three numbers that solve the unit",
              body: "Every steel lever-rule question uses endpoints from just this trio: ferrite 0.02 percent C, eutectoid 0.8 percent C, cementite 6.67 percent C. Memorize them once and every fraction question - hypo or hyper, above or below A1 - becomes a two-number subtraction.",
            },
            keyTerms: [
              { term: "Lever rule", definition: "Phase fraction from tie-line lengths on a two-phase field of the diagram." },
              { term: "Proeutectoid ferrite", definition: "Ferrite forming before the eutectoid reaction in hypoeutectoid steels." },
              { term: "Proeutectoid cementite", definition: "Cementite forming before the eutectoid reaction in hypereutectoid steels - often as a network." },
              { term: "Tie line", definition: "The horizontal line at the given temperature whose ends give the two phases' compositions." },
            ],
            examQuestions: [
              {
                q: "State the lever rule and apply it to find the phase fractions just above 723 degrees C for (a) a 0.4 percent C steel and (b) a 1.2 percent C steel, and name the resulting room-temperature microstructures.",
                marks: 14,
                outline: [
                  "Rule: fraction = opposite tie-line segment over total length",
                  "(a) endpoints 0.02 and 0.8: ferrite = 0.4/0.78 = 51.3 percent",
                  "(a) austenite (later pearlite) = 48.7 percent",
                  "(b) endpoints 0.8 and 6.67: cementite = 0.4/5.87 = 6.8 percent",
                  "(b) pearlite = 93.2 percent with proeutectoid cementite network",
                  "(a) ferrite + pearlite; (b) pearlite + cementite network",
                ],
              },
              {
                q: "Why does a small percentage of proeutectoid cementite significantly harden a hypereutectoid steel?",
                marks: 7,
                outline: [
                  "Cementite is extremely hard (about 800 HV)",
                  "Even 6-7 percent outlines pearlite colonies and raises hardness sharply",
                  "It also provides carbon reservoirs for later spheroidizing",
                  "Too much network embrittles - hence normalizing to break the network",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Steels and cast irons: the families and types of cast iron",
            body: [
              "On the equilibrium diagram, cooling below the eutectoid gives steels their standard structures: hypoeutectoid steels (ferrite + pearlite, softer as carbon falls), eutectoid steel (100 percent pearlite), hypereutectoid steels (pearlite + proeutectoid cementite, hardest of the annealed family). Grey and alloy steels build on this base by alloying and heat treatment. Cast irons - carbon 2 to 4.3 percent plus 1 to 3 percent silicon - take the eutectic route through ledeburite, and silicon's role is decisive: it promotes graphitization, so the carbon may appear as free graphite rather than cementite, and which form wins decides the iron's entire personality.",
              "The cast-iron family follows the carbon's final form. Grey cast iron: carbon as graphite flakes; the flakes act as internal notches - good compressive strength, excellent damping and machinability, poor tension and negligible ductility; the fracture face is grey from graphite. White cast iron: silicon low and cooling fast, so carbon stays as cementite - extremely hard and wear-resistant but brittle; used as-is for rolls and as the starting stock for malleable iron. Malleable cast iron: white iron annealed at 900-950 degrees C so cementite decomposes into temper-carbon nodules - decent ductility and shock resistance. Ductile (nodular or spheroidal graphite) iron: magnesium or cerium treatment spheroidizes the graphite, removing the notch effect - strength approaching steel with castability retained. Compacted-graphite and alloy irons complete the family.",
              "Worked example: the same nominal 3.2 percent C chemistry can deliver three different irons. Slow cool with 2 percent Si: grey iron, UTS about 250 MPa, elongation under 1 percent, damping excellent (machine beds). Fast cool with 0.5 percent Si: white iron, hardness about 500 HB (crusher liners). Mg-treated then inoculated: ductile iron, UTS about 500 MPa with 12 percent elongation (crankshafts). Composition plus processing, not chemistry alone, selects the material - the central message of this section.",
              "Exam framing: the question is 'describe the types of cast iron with their microstructures, properties and applications'. Tabulate grey, white, malleable, ductile (and nodular) irons by carbon form, structure, properties and uses, and explain silicon's graphitizing role. One comparative table plus the Mg-treatment sentence is the full-mark skeleton.",
            ],
            bullets: [
              "Cast irons: 2-4.3 percent C, 1-3 percent Si; silicon promotes graphite formation.",
              "Grey iron: graphite flakes; strong in compression, damps vibration, machinable, brittle in tension.",
              "White iron: cementite throughout; extremely hard and wear-resistant, very brittle.",
              "Malleable iron: white iron annealed to temper-carbon nodules - moderate ductility.",
              "Ductile (SG) iron: Mg-treated spheroidal graphite; steel-like strength with castability.",
              "Applications: grey - machine beds and pipes; white - wear liners; malleable - fittings; ductile - crankshafts.",
            ],
            diagram: {
              kind: "matrix",
              title: "Cast iron family by carbon form",
              caption: "What the carbon became - flake, nodule, spheroid or carbide - decides everything.",
              axes: { x: "Carbon as graphite (Si high, slow cool)", y: "Carbon as carbide (Si low, fast cool)" },
              quadrants: [
                { label: "Grey iron - flakes", note: "damping, machinable, weak in tension; machine beds" },
                { label: "Ductile (SG) iron - spheroids", note: "Mg-treated; strong and ductile; crankshafts" },
                { label: "White iron - cementite", note: "hard about 500 HB, brittle; wear liners" },
                { label: "Malleable iron - temper carbon", note: "annealed white iron; fittings, brackets" },
              ],
            },
            table: {
              caption: "Types of cast iron compared.",
              headers: ["Type", "Carbon form", "Key properties", "Typical uses"],
              rows: [
                ["Grey", "graphite flakes", "UTS about 250 MPa, damping, machinable", "machine beds, brake drums, pipes"],
                ["White", "cementite (Fe3C)", "500 HB hardness, brittle", "crusher liners, rolls, malleable feedstock"],
                ["Malleable", "temper-carbon nodules", "moderate ductility, shock resistant", "pipe fittings, brackets, hinges"],
                ["Ductile (SG)", "spheroidal graphite (Mg-treated)", "UTS about 500 MPa, 12 percent elongation", "crankshafts, gears, valves"],
              ],
            },
            callout: {
              type: "exam",
              title: "Silicon is the graphitizer",
              body: "The one chemistry sentence that organizes the whole family: silicon (1-3 percent) pushes the Fe-C system toward stable graphite, while low silicon plus fast cooling locks carbon as cementite. Every cast-iron type follows from that lever plus the cooling rate - write the sentence before listing the types and the answer organizes itself.",
            },
            keyTerms: [
              { term: "Grey cast iron", definition: "Cast iron with flake graphite; damping and machinability with low tensile ductility." },
              { term: "White cast iron", definition: "Cast iron with all carbon as cementite; very hard, brittle; feedstock for malleable iron." },
              { term: "Ductile (SG) iron", definition: "Magnesium-treated iron with spheroidal graphite - steel-like strength with castability." },
              { term: "Ledeburite", definition: "The eutectic mixture of austenite and cementite formed at 1130 degrees C in cast irons." },
            ],
            examQuestions: [
              {
                q: "Describe the four major types of cast iron - grey, white, malleable and ductile - giving the form of carbon, microstructure, properties and two applications of each. Explain the role of silicon in deciding the type.",
                marks: 14,
                outline: [
                  "Grey: flake graphite; damping, machinable; machine beds, pipes",
                  "White: cementite; 500 HB, brittle; wear liners; Si low and cooling fast",
                  "Malleable: annealed white iron, temper carbon nodules; fittings",
                  "Ductile: Mg spheroidized graphite; 500 MPa with 12 percent elongation; crankshafts",
                  "Silicon 1-3 percent graphitizes; low Si + fast cooling keeps cementite",
                  "Composition + cooling rate jointly select the type",
                ],
              },
              {
                q: "Why is grey cast iron preferred for machine tool beds despite its low tensile strength?",
                marks: 7,
                outline: [
                  "Graphite flakes damp vibration superbly - stable machining",
                  "Excellent compressive strength for static loads",
                  "Free-machining graphite chips cleanly",
                  "Cheap to cast into complex, thick sections; low notch sensitivity in compression service",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "T-T-T diagrams: time joins temperature",
            body: [
              "The equilibrium diagram says what forms given infinite time; the TTT (time-temperature-transformation, or isothermal S-curve) diagram says what forms when time is finite. It plots temperature against log time, with three curves: the start of transformation, the finish, and (for eutectoid steel) the two C-curves of pearlite (about 723-550 degrees C, nose near 550 degrees C) and bainite (about 550-250 degrees C). Below a critical temperature - the martensite start Ms, about 220 degrees C for eutectoid steel - transformation becomes diffusionless: austenite shears directly to martensite, a metastable phase needing no diffusion time at all.",
              "The nose is the whole strategic game: cooling must be fast enough to miss the pearlite nose if martensite is wanted. The cooling curve's speed is measured by the critical cooling rate - the minimum rate that just touches the nose without entering it. Worked example: eutectoid steel's nose sits at about 1 second at 550 degrees C; a plain-carbon bar's surface may achieve that rate in water quenching but a thick section's core cannot - hence hardenability limits and the alloying (Cr, Mo, Mn) that shifts the nose rightward, buying time for the core. This is exactly the logic the Jominy test of Unit IV quantifies.",
              "Products along the curve: coarse pearlite near 700 degrees C, fine pearlite near 600, upper bainite near 500, lower bainite near 300, martensite below Ms. Hardness rises down the curve - about 200 HB at coarse pearlite to 65 HRC at martensite. Tempering then re-enters the diagram from below, transforming brittle martensite toward tempered structures with controlled toughness. The TTT diagram is thus the heat treater's itinerary: quench past the nose, hold where bainite is wanted (austempering), or temper below Ms.",
              "Exam framing: the question is 'explain the TTT diagram with a sketch, define the critical cooling rate, and name the transformation products'. Draw the S-curve with start/finish lines, Ms and the nose, mark a cooling curve missing the nose, and tabulate the products with hardness. The nose-rightward effect of alloying closes the answer at full marks.",
            ],
            bullets: [
              "TTT diagram: temperature vs log time with transformation start and finish curves.",
              "Pearlite C-curve nose near 550 degrees C for eutectoid steel; bainite band 550-250 degrees C.",
              "Ms (martensite start) about 220 degrees C for eutectoid steel; below it transformation is diffusionless.",
              "Critical cooling rate: minimum rate that just misses the nose - decides quench severity.",
              "Products vs temperature: coarse pearlite -> fine pearlite -> bainite -> martensite; hardness 200 HB to 65 HRC.",
              "Alloying (Cr, Mo, Mn) shifts the nose right - improves hardenability of thick sections.",
            ],
            diagram: {
              kind: "flow",
              title: "Reading a TTT diagram strategically",
              caption: "A cooling curve is a path across the map; miss the nose and you trap martensite.",
              steps: [
                { label: "Austenitize above A3", note: "fully gamma before the quench" },
                { label: "Quench fast", note: "cooling curve must pass left of the nose" },
                { label: "Pass through bainite band", note: "quickly, or bainite forms" },
                { label: "Reach Ms", note: "martensite starts - diffusionless shear" },
                { label: "Temper", note: "re-enter heat to trade hardness for toughness" },
              ],
            },
            table: {
              caption: "Transformation products of eutectoid steel.",
              headers: ["Product", "Formation range", "Structure", "Hardness"],
              rows: [
                ["Coarse pearlite", "about 700 degrees C", "thick ferrite/cementite lamellae", "about 200 HB"],
                ["Fine pearlite", "about 600 degrees C", "thin lamellae", "about 300 HB"],
                ["Upper bainite", "500 - 400 degrees C", "feathery carbide/ferrite", "about 400 HB"],
                ["Lower bainite", "400 - 250 degrees C", "fine plates, tempered-martensite-like", "about 500 HB"],
                ["Martensite", "below Ms about 220 degrees C", "supersaturated BCT, diffusionless", "about 65 HRC"],
              ],
            },
            callout: {
              type: "exam",
              title: "The nose is the deadline",
              body: "Frame every TTT answer around the nose: 'the critical cooling rate is the rate that just misses the pearlite nose; alloying elements push the nose to longer times, lowering the critical cooling rate and improving hardenability.' One sentence links TTT, quench severity and the Jominy test - the integration examiners reward.",
            },
            keyTerms: [
              { term: "TTT diagram", definition: "Isothermal transformation map of temperature vs log time with start/finish curves." },
              { term: "Nose", definition: "The leftmost point of the C-curve - the transformation's fastest line of attack." },
              { term: "Critical cooling rate", definition: "Minimum cooling rate that misses the nose and produces full martensite." },
              { term: "Ms temperature", definition: "Martensite start temperature; below it austenite transforms diffusionlessly." },
            ],
            examQuestions: [
              {
                q: "Draw and explain the TTT diagram of eutectoid steel, marking the pearlite nose, bainite band and Ms. Define the critical cooling rate and explain how alloying elements improve hardenability.",
                marks: 14,
                outline: [
                  "Axes temperature vs log time; start and finish curves as two C-shapes",
                  "Nose near 550 degrees C at about 1 second; bainite band 550-250 degrees C",
                  "Ms about 220 degrees C - diffusionless martensite below",
                  "Critical cooling rate: just misses the nose",
                  "Products vs temperature: coarse/fine pearlite, bainite, martensite with rising hardness",
                  "Cr, Mo, Mn shift the nose right - lower critical rate, better thick-section hardening",
                ],
              },
              {
                q: "Why can a thin plain-carbon part be fully hardened by water quenching while a thick section of the same steel cannot?",
                marks: 7,
                outline: [
                  "Plain-carbon steel's nose sits at very short times - high critical cooling rate",
                  "Thin sections quench fast enough at the core; thick cores cannot",
                  "Core misses martensite, forms pearlite/bainite - soft spot",
                  "Remedies: alloying to shift the nose, or water quench with agitation, or spray quenching",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Stainless steels; elastic, anelastic and viscoelastic behaviour",
            body: [
              "Stainless steels are iron alloys with at least 10.5 percent chromium, the level at which a self-healing chromium-oxide passive film forms and repairs itself in oxidizing environments. The family divides by crystal structure. Austenitic (18 percent Cr, 8 percent Ni - the 304 workhorse): FCC, non-magnetic, non-hardenable by heat treatment, weldable and formable; the largest family. Ferritic (10.5-18 percent Cr): BCC, magnetic, moderate corrosion resistance, cheaper, non-hardenable. Martensitic (12-18 percent Cr, higher carbon): heat-treatable to high hardness for knives, valves and turbine blades. Duplex (half austenite, half ferrite): high strength with excellent chloride resistance. Precipitation-hardening grades add strength via ageing.",
              "The mechanical-behaviour trio rounds the unit. Elastic behaviour: fully recoverable, instantaneous, linear - Hooke's law. Anelastic behaviour: recoverable but time-dependent - strain lags stress and only fully recovers after time; it is the source of internal friction (damping) and matters in springs and instrument flexures. Viscoelastic behaviour: part elastic, part viscous flow - characteristic of polymers, where strain continues to grow under constant load (creep) and stress relaxes at constant strain; metals show it only near their melting range, while polymers show it at room temperature, which is why plastic snap-fits creep loose over years.",
              "Worked example: the 304-versus-410 pairing that shops actually quote. 304 austenitic (18Cr-8Ni): non-magnetic, tensile about 515 MPa as-annealed, cannot be hardened by quenching, ideal for food and chemical equipment. 410 martensitic (12Cr-0.15C): quenched and tempered to 45 HRC, tensile over 1000 MPa, magnetic, chosen for cutlery and valve parts. Same family name, different structure, different tool - the structural classification is the practical answer.",
              "Exam framing: the question is 'classify stainless steels by structure with compositions and applications, and distinguish elastic, anelastic and viscoelastic behaviour'. Tabulate the five stainless families and give the three-behaviour definitions with one time-dependence sentence each - the anelastic definition (recoverable but delayed) is the detail examiners specifically probe.",
            ],
            bullets: [
              "Stainless threshold: at least 10.5 percent Cr forms the self-healing passive oxide film.",
              "Austenitic 18Cr-8Ni (304): FCC, non-magnetic, weldable, the largest family.",
              "Ferritic (10.5-18 Cr): BCC, magnetic, economical; martensitic (12-18 Cr + C): hardenable.",
              "Duplex: mixed structure, strong with chloride resistance; PH grades harden by ageing.",
              "Elastic: instantaneous and fully recoverable; anelastic: recoverable but time-delayed.",
              "Viscoelastic: elastic plus viscous flow - polymers creep and stress-relax at room temperature.",
            ],
            diagram: {
              kind: "compare",
              title: "Austenitic versus martensitic stainless",
              caption: "The two families opposite in every working property.",
              left: {
                heading: "Austenitic (304: 18Cr-8Ni)",
                items: [
                  "FCC, non-magnetic",
                  "Cannot be hardened by heat treatment",
                  "Excellent formability and weldability",
                  "Food, chemical and sanitary equipment",
                ],
              },
              right: {
                heading: "Martensitic (410: 12Cr-0.15C)",
                items: [
                  "BCC-derived, magnetic",
                  "Quench-hardened to about 45 HRC",
                  "Lower corrosion resistance than austenitic",
                  "Cutlery, valves, turbine blades",
                ],
              },
            },
            table: {
              caption: "Stainless steel families.",
              headers: ["Family", "Typical composition", "Structure", "Hardenable?", "Applications"],
              rows: [
                ["Austenitic", "18 Cr - 8 Ni (304)", "FCC, non-magnetic", "no (work-hardens)", "chemical and food plant"],
                ["Ferritic", "10.5 - 18 Cr (430)", "BCC, magnetic", "no", "appliance trims, exhausts"],
                ["Martensitic", "12 - 18 Cr, 0.1 - 1 C (410)", "BCC then BCT", "yes, quench + temper", "cutlery, valves, blades"],
                ["Duplex", "22 Cr - 5 Ni - 3 Mo", "austenite + ferrite", "no", "offshore, chloride duty"],
                ["Precipitation-hardening", "17 Cr - 4 Ni - Cu", "martensitic + precipitates", "ageing", "aerospace, pump shafts"],
              ],
            },
            callout: {
              type: "exam",
              title: "Anelastic is the exam's trap word",
              body: "Students collapse anelastic into elastic or viscoelastic. Keep the three apart: elastic - instant and total recovery; anelastic - total recovery but with time lag (internal friction, spring damping); viscoelastic - incomplete recovery with continuing flow (polymer creep). The anelastic definition in exactly those words is the marks.",
            },
            keyTerms: [
              { term: "Passive film", definition: "Self-healing chromium-oxide layer protecting stainless surfaces above 10.5 percent Cr." },
              { term: "Austenitic stainless", definition: "18Cr-8Ni FCC family - non-magnetic, weldable, non-hardenable (304)." },
              { term: "Anelasticity", definition: "Recoverable but time-dependent strain - strain lags stress; source of internal friction." },
              { term: "Viscoelasticity", definition: "Combined elastic and viscous response - polymer creep and stress relaxation." },
            ],
            examQuestions: [
              {
                q: "Classify stainless steels by microstructure, giving typical compositions, hardenability and applications of each family. Why is 10.5 percent chromium the defining threshold?",
                marks: 14,
                outline: [
                  "Austenitic 18Cr-8Ni: FCC, non-magnetic, non-hardenable; chemical/food plant",
                  "Ferritic 10.5-18 Cr: BCC, magnetic; trim and exhaust duty",
                  "Martensitic 12-18 Cr + C: quench-hardened; cutlery, valves",
                  "Duplex and PH grades for chloride strength and ageing hardening",
                  "10.5 percent Cr is the level forming a self-healing passive Cr2O3 film",
                  "Film repairs itself in oxidizing media - the corrosion defence",
                ],
              },
              {
                q: "Distinguish elastic, anelastic and viscoelastic behaviour with one application consequence of each.",
                marks: 7,
                outline: [
                  "Elastic: instant, linear, fully recoverable - spring design baseline",
                  "Anelastic: recoverable with time lag - internal friction damps vibration in springs",
                  "Viscoelastic: elastic plus viscous flow - polymer snap-fits creep loose over years",
                  "Metals show viscoelasticity only near melting; polymers at room temperature",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Heat Treatment of Metals",
      summary:
        "Unit III is the engineering unit: how the phase diagram and TTT curve set treatment temperatures; bulk treatments - annealing in its types, normalising, spheroidising, hardening and tempering with hard and soft martensite; the transformation products pearlite, cementite, austenite, troostite and bainite; surface treatments - flame, induction and laser hardening; thermochemical treatments - carburising, cyaniding, nitriding, boriding and ion implantation; and the metallography that inspects it all.",
      chapter: {
        number: "03",
        title: "Engineering the Microstructure",
        intro:
          "Unit III covers heat treatment based on the phase diagram and TTT diagram, bulk treatments (annealing types, normalising, spheroidising, hardening, tempering), phase transformation products (pearlite, cementite, austenite, troostite, bainite, martensite), surface hardening (flame, induction, laser), thermochemical treatments (carburising, cyaniding, nitriding, boriding, ion implantation), heat treatment cycles, and metallographic study with optical and electron microscopes.",
        inOneBreath:
          "Austenitize above A3 or Acm, then choose the cooling path: furnace cool anneals, air cool normalizes, quench traps martensite, temper then restores toughness; transformation products from coarse pearlite to martensite rank hardness; surface treatments harden only the skin by fast heating or by diffusing carbon and nitrogen; micrographs and grain-size numbers verify every treatment.",
        sections: [
          {
            number: "3.1",
            title: "Basis of heat treatment: critical temperatures and cycles",
            body: [
              "Heat treatment is the controlled combination of heating, holding and cooling to change a metal's microstructure - and therefore its properties - without changing its shape. Its basis is double: the equilibrium (iron-carbon) diagram supplies the temperatures where phases change, and the TTT/CCT curves supply the kinetics - what forms at what cooling rate. The three critical temperatures anchor every schedule: A1 at 723 degrees C (pearlite dissolves/forms), A3 (hypoeutectoid austenite completion) and Acm (hypereutectoid), with Ms marking where martensite starts on the quench.",
              "A heat-treatment cycle is specified by four parameters: heating rate (slow enough to avoid thermal cracking in heavy or brittle sections), austenitizing temperature (A3 + 30-50 degrees C for hypoeutectoid steels; Acm for dissolving carbides in hypereutectoid), holding time (long enough for full austenitization - roughly 1 hour per 25 mm of section), and cooling method (furnace, air, oil, water, salt bath - severity rising in that order). Worked example: a 40 mm diameter 0.45 percent C shaft: austenitize at about 840 degrees C (A3 about 790 plus margin), hold 1.5 hours, oil quench - the schedule written in four lines is the deliverable a shop floor expects.",
              "The chosen cooling path across the TTT diagram is what separates the treatments from one another. Furnace cooling crawls left of everything and yields the softest, most equilibrial structure (annealing). Air cooling is faster - finer pearlite, the normalizing structure. Oil or water quenching races past the nose to martensite (hardening), and a subsequent temper re-heats below A1 to trade brittleness away. Every treatment in this unit is one of these paths plus its temperature and time settings - the diagram is the decision tool.",
              "Exam framing: the question is 'explain the basis of heat treatment on the phase diagram and TTT diagram, and specify the parameters of a heat-treatment cycle'. Define the four cycle parameters, compute one austenitizing temperature from A3, and map each treatment onto its cooling curve. The mapping sentence - 'annealing is furnace cooling, normalizing is air cooling, hardening is quenching past the nose' - is the section's spine.",
            ],
            bullets: [
              "Heat treatment: heating + holding + cooling to control microstructure and properties.",
              "Critical temperatures: A1 = 723 degrees C, A3 and Acm from the Fe-C diagram, Ms from the TTT diagram.",
              "Cycle parameters: heating rate, austenitizing temperature, holding time (about 1 h per 25 mm), cooling medium.",
              "Hypoeutectoid austenitize at A3 + 30-50 degrees C; hypereutectoid above Acm.",
              "Cooling severity ladder: furnace < air < oil < water < salt-bath martempering.",
              "Every treatment = a chosen path across the TTT map.",
            ],
            diagram: {
              kind: "flow",
              title: "One diagram, four decisions",
              caption: "Every heat treatment is a temperature, a hold and a path across the TTT map.",
              steps: [
                { label: "Heat above the critical", note: "A3 + margin for hypo; Acm for hyper" },
                { label: "Hold for austenitization", note: "about 1 h per 25 mm section" },
                { label: "Choose the cooling path", note: "furnace / air / oil / water" },
                { label: "Optional temper", note: "reheat below A1 to restore toughness" },
              ],
            },
            table: {
              caption: "Cooling media by quench severity.",
              headers: ["Medium", "Relative severity", "Typical use"],
              rows: [
                ["Furnace (still) cooling", "very mild", "annealing"],
                ["Still air", "mild", "normalizing"],
                ["Oil", "moderate", "alloy steels - low distortion"],
                ["Water / brine", "severe", "plain-carbon steels - full martensite"],
                ["Salt bath / martempering", "controlled", "sections needing low quench stress"],
              ],
            },
            callout: {
              type: "exam",
              title: "Holding time scales with section size",
              body: "The rule 'about one hour per 25 mm of section thickness' is what converts textbook austenitizing into a shop schedule. Exam numericals and viva questions both probe it - a 100 mm block needs about four hours at temperature, not the one hour a thin bar needs. Quote the rule and the worked number together.",
            },
            keyTerms: [
              { term: "Austenitizing", definition: "Heating above the critical range to form fully austenitic structure before treatment." },
              { term: "Heat-treatment cycle", definition: "The specified heating rate, temperature, hold time and cooling medium." },
              { term: "Quench severity", definition: "The cooling intensity of the medium, from furnace air to brine." },
              { term: "Tempering", definition: "Reheating quenched steel below A1 to reduce brittleness at controlled hardness cost." },
            ],
            examQuestions: [
              {
                q: "Explain the basis of heat treatment in the phase diagram and TTT diagram. Specify a complete heat-treatment cycle for a 40 mm diameter bar of 0.45 percent C steel, justifying each parameter.",
                marks: 14,
                outline: [
                  "Fe-C diagram sets A1, A3, Acm; TTT sets kinetics and Ms",
                  "A3 for 0.45 percent C is about 790 degrees C",
                  "Austenitize at about 840 degrees C (A3 + margin)",
                  "Hold about 1.5 hours (rule: 1 h per 25 mm)",
                  "Oil quench - moderate severity, low distortion for the section size",
                  "Temper 500-600 degrees C if toughness is required",
                ],
              },
              {
                q: "Rank the common quenching media by severity and state when each is preferred.",
                marks: 7,
                outline: [
                  "Furnace/air mild for annealing and normalizing",
                  "Oil moderate - alloy steels, distortion control",
                  "Water/brine severe - plain-carbon steels needing full martensite",
                  "Salt bath controlled - martempering heavy or fragile sections",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Annealing and its types",
            body: [
              "Annealing is heating above (or sometimes below) the critical range followed by slow furnace cooling, and its goals are softness, stress relief, grain refinement and homogenization. Full annealing: austenitize hypoeutectoid steel at A3 + 30-50 degrees C, then furnace cool - producing coarse pearlite plus ferrite, the softest, most machinable condition (about 150-180 HB for mild steel). Process (recrystallization) annealing: cold-worked steel is heated to 550-650 degrees C - below A1 - so new strain-free grains nucleate and restore ductility between rolling passes.",
              "The specialist anneals earn their own lines. Spheroidizing (next section as a treatment in its own right): prolonged holding near A1 coarsens cementite into rounded spheroids for machinability of high-carbon steels. Homogenizing (diffusion) anneal: 1000-1200 degrees C long hold to erase dendritic segregation (coring) in castings. Stress-relief anneal: 500-600 degrees C slow cool to relax residual stresses from welding or machining without any phase change. Isothermal annealing: quench to just below the nose and hold, transforming directly to coarse pearlite in a controlled time - faster than furnace cooling for large batches.",
              "Worked example: a cold-drawn 0.6 percent C steel wire has yield 800 MPa but elongation only 6 percent - unworkable for the next drawing pass. Process annealing at 600 degrees C for one hour recrystallizes the deformed ferrite: yield falls to about 500 MPa while elongation recovers to 20 percent - the ductility budget restored without touching the carbides. The same wire fully annealed from 760 degrees C would land near 220 HB and 25 percent elongation but coarser grain - the two anneals answer different problems, recrystallization versus full equilibrium.",
              "Exam framing: the question is 'define annealing, describe full annealing and its purpose, and name the other annealing types with purposes'. Define with the furnace-cooling signature, tabulate full, process, spheroidizing, homogenizing, stress-relief and isothermal anneals by temperature, purpose and product, and close with the wire numerical.",
            ],
            bullets: [
              "Full annealing: austenitize at A3 + 30-50 degrees C, furnace cool; softest condition, coarse pearlite.",
              "Process (recrystallization) annealing: 550-650 degrees C below A1; restores ductility of cold work.",
              "Spheroidizing: prolonged hold near A1; cementite becomes rounded for machinability.",
              "Homogenizing anneal: 1000-1200 degrees C; erases coring segregation in castings.",
              "Stress-relief anneal: 500-600 degrees C; relaxes residual stress without phase change.",
              "Isothermal annealing: quench below the nose and hold; controlled-time coarse pearlite.",
            ],
            diagram: {
              kind: "fork",
              title: "Which anneal for which problem",
              caption: "Each anneal answers a different defect - the temperature tells you which.",
              start: "What is wrong with the material?",
              branches: [
                { label: "Too hard overall / needs max machinability", outcome: "full anneal above A3 with furnace cool - coarse pearlite, about 150-180 HB", good: true },
                { label: "Work-hardened from cold drawing", outcome: "process anneal 550-650 degrees C - recrystallization restores ductility", good: true },
                { label: "Segregated casting", outcome: "homogenizing anneal 1000-1200 degrees C - diffusion evens composition", good: true },
                { label: "Welded or machined, risks distortion", outcome: "stress-relief anneal 500-600 degrees C - no phase change, stresses relax", good: true },
              ],
            },
            table: {
              caption: "Annealing types at a glance.",
              headers: ["Type", "Temperature", "Cooling", "Purpose"],
              rows: [
                ["Full annealing", "A3 + 30-50 degrees C (hypo)", "furnace, slow", "softest, coarse pearlite, machinability"],
                ["Process annealing", "550 - 650 degrees C", "air/furnace", "recrystallize cold work"],
                ["Spheroidizing", "just below/around A1, long hold", "slow", "rounded carbides for high-C machinability"],
                ["Homogenizing", "1000 - 1200 degrees C", "slow", "remove dendritic segregation"],
                ["Stress relief", "500 - 600 degrees C", "slow", "relax residual stresses"],
                ["Isothermal", "hold just below nose", "hold then air", "uniform pearlite in controlled time"],
              ],
            },
            callout: {
              type: "tip",
              title: "Below A1 or above A3 - that is the fork",
              body: "Anneals divide cleanly: those above the critical range change phase (full, homogenizing, isothermal) and those below it do not (process, stress relief). Stating this division first organizes the whole answer and shows the examiner you know which treatments actually move atoms across the diagram.",
            },
            keyTerms: [
              { term: "Full annealing", definition: "Austenitize above A3 and furnace cool to the softest equilibrium structure." },
              { term: "Recrystallization annealing", definition: "Heating cold-worked metal below A1 so new strain-free grains replace deformed ones." },
              { term: "Stress-relief anneal", definition: "Subcritical hold relaxing residual stresses without phase change." },
              { term: "Homogenizing anneal", definition: "High-temperature diffusion treatment erasing segregation (coring)." },
            ],
            examQuestions: [
              {
                q: "Define annealing and describe full annealing with its temperature and cooling conditions. Name and distinguish the other annealing treatments - process, spheroidizing, homogenizing, stress-relief and isothermal - with purpose and temperature of each.",
                marks: 14,
                outline: [
                  "Annealing: heat + slow (furnace) cool for softness, ductility, homogeneity",
                  "Full: A3 + 30-50 degrees C, furnace cool, coarse pearlite + ferrite, about 150-180 HB",
                  "Process: 550-650 degrees C recrystallization of cold work",
                  "Spheroidizing: near A1, rounded cementite for machinability",
                  "Homogenizing: 1000-1200 degrees C against coring; stress relief 500-600 degrees C",
                  "Isothermal: hold below the nose for controlled pearlite",
                ],
              },
              {
                q: "A cold-drawn wire shows 6 percent elongation and cannot be drawn further. Which anneal restores drawability and why does it work?",
                marks: 7,
                outline: [
                  "Process (recrystallization) anneal at 550-650 degrees C",
                  "New strain-free grains nucleate in the deformed ferrite",
                  "Dislocation density falls - yield strength drops, ductility recovers",
                  "Held below A1, so no phase change - a cheap inter-pass operation",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Normalising and spheroidising",
            body: [
              "Normalising austenitizes steel above A3 (hypoeutectoid) or Acm (hypereutectoid) and cools it in still air. The air cool is faster than furnace cooling, so pearlite forms finer and more evenly: hardness rises modestly above the annealed condition (mild steel about 180-220 HB versus 150-180 annealed) while grain size refines. Normalising is the standard pre-machining and pre-hardening treatment: it erases the coarse grain and banded structure of hot-rolled or cast stock, breaks up the brittle cementite network of hypereutectoid steels, and gives every section a uniform structure before final hardening.",
              "Spheroidising is the machinability treatment for high-carbon steel: prolonged holding (10-15 hours) just below A1, or cyclic heating around A1, converts lamellar pearlite's cementite plates into rounded spheroids in a soft ferrite matrix. The mechanism is capillarity - the fine plates dissolve and re-deposit onto larger particles to minimize surface energy, exactly like Ostwald ripening. The result: hardness falls to about 160-180 HB, chips break cleanly instead of tearing, and cold-formability improves; spheroidized 1 percent C steel machines at roughly double the annealed lamellar rate.",
              "Worked example: a 1.1 percent C die block arrives pearlitic at 250 HB and chews through turning tools. Normalizing from 880 degrees C breaks the cementite network but keeps hardness near 280 HB - still harsh. Spheroidizing at 700 degrees C for 12 hours drops it to 170 HB with rounded carbides; machining cost per piece falls by about 40 percent, and the final quench-and-temper then rebuilds the working hardness. The sequence - normalize, spheroidize, machine, harden - is the standard hypereutectoid workflow.",
              "Exam framing: the question is 'distinguish normalising from annealing and explain spheroidising with its purpose'. Give both temperature and cooling contrasts (air versus furnace; above A3/Acm versus near A1), explain the capillarity mechanism of spheroidizing, and quote the die-block numerical as the worked case.",
            ],
            bullets: [
              "Normalising: austenitize above A3 (or Acm) and cool in still air - finer pearlite than annealing.",
              "Purposes: refine grain, erase banding from hot work, break cementite networks, pre-harden uniformity.",
              "Mild steel: about 180-220 HB normalized versus 150-180 annealed.",
              "Spheroidising: long hold just below A1 - cementite plates become spheroids by capillarity (Ostwald ripening).",
              "Result: about 160-180 HB, clean chip formation, best machinability for high-carbon steel.",
              "Workflow for tool steels: normalize -> spheroidize -> machine -> harden and temper.",
            ],
            diagram: {
              kind: "compare",
              title: "Normalising versus annealing versus spheroidising",
              caption: "Same parent austenite, three different destinations.",
              left: {
                heading: "Normalising",
                items: [
                  "Austenitize above A3/Acm",
                  "Cool in still air",
                  "Fine pearlite, about 180-220 HB",
                  "Grain refinement, structure uniformity",
                ],
              },
              right: {
                heading: "Spheroidising (vs furnace anneal)",
                items: [
                  "Hold just below A1, 10-15 hours",
                  "No austenitization needed",
                  "Rounded carbides in ferrite, 160-180 HB",
                  "Machinability of high-carbon steel",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Network cementite is why normalizing exists",
              body: "The classic justification to quote: hypereutectoid steels slowly cooled form a brittle cementite network along grain boundaries; normalizing from above Acm dissolves the network and air cooling re-disperses the carbides before the eutectoid. One sentence - but it answers 'why normalize a tool steel at all' and is the standard follow-up mark.",
            },
            keyTerms: [
              { term: "Normalising", definition: "Austenitize above the critical range and air cool - fine, uniform pearlite." },
              { term: "Spheroidising", definition: "Prolonged subcritical hold converting cementite lamellae to rounded spheroids for machinability." },
              { term: "Cementite network", definition: "Brittle grain-boundary carbide in slowly cooled hypereutectoid steel - broken by normalizing." },
              { term: "Ostwald ripening", definition: "Small particles dissolve and feed larger ones under capillarity - the spheroidizing mechanism." },
            ],
            examQuestions: [
              {
                q: "Compare normalising with full annealing in temperature, cooling and resulting structure. Explain spheroidising - its mechanism, purpose and the structure it produces.",
                marks: 14,
                outline: [
                  "Normalizing: above A3/Acm, air cool; fine pearlite, 180-220 HB",
                  "Annealing: above A3, furnace cool; coarse pearlite, 150-180 HB, softest",
                  "Spheroidising: hold just below A1 for 10-15 hours",
                  "Capillarity: plates dissolve and feed spheroids (Ostwald ripening)",
                  "Result: rounded carbides in ferrite, about 170 HB",
                  "Purposes: grain refinement vs machinability of high-carbon steel",
                ],
              },
              {
                q: "Why is a hypereutectoid tool steel normalized before spheroidizing?",
                marks: 7,
                outline: [
                  "Slow cooling leaves a brittle grain-boundary cementite network",
                  "Normalizing above Acm dissolves the network",
                  "Air cooling re-disperses carbides finely",
                  "Spheroidizing then works on a uniform, network-free structure",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Hardening and tempering; hard and soft martensite",
            body: [
              "Hardening is austenitizing followed by quenching faster than the critical cooling rate, trapping the diffusionless transformation: austenite shears to martensite, a supersaturated body-centred-tetragonal solid solution of carbon in iron. Its hardness is a function of carbon content alone - 0.2 percent C gives about 45 HRC, 0.8 percent C about 65 HRC - because tetragonality and dislocation density rise with dissolved carbon. Quench severity (water, oil, salt) and section size decide whether full martensite actually forms (hardenability - the Jominy test of Unit IV).",
              "Fresh martensite is hard but brittle: internal stresses, low toughness and no ductility. Tempering re-heats the quenched steel below A1 - 150-200 degrees C for measuring tools (stress relief, hardness kept), 300-400 degrees C for springs (troostite), 500-650 degrees C for structural parts (sorbite) - allowing carbon to precipitate as fine carbides and the tetragonal lattice to relax toward cubic. Hardness falls in a controlled way; toughness and ductility rise; residual stresses relax. Hard martensite (untempered, fully tetragonal) versus soft martensite (tempered, carbon precipitated, near-cubic) is the syllabus's phrase for exactly this state pair - the same parent phase at two points along the tempering clock.",
              "Worked example: a 0.6 percent C spring steel quenches to 62 HRC but shatters in the first test cycle. Tempering at 350 degrees C for one hour: carbon precipitates as fine epsilon-carbides, hardness settles at 45 HRC, and the part now survives 10^7 load cycles - the temper moved the spring from the hard-martensite column to the soft-martensite column where springs live. Skipping the temper is the classic shop-floor failure: quenched parts crack hours or days after hardening from residual stress alone.",
              "Exam framing: the question is 'describe the hardening process and the purpose of tempering, distinguishing hard and soft martensite'. Define martensite and its carbon-hardness link, tabulate tempering temperature bands with their products (low-temper martensite, troostite, sorbite), and give the spring numerical. The quench-crack warning - never temper late, never leave untempered steel overnight - is the practical closing line.",
            ],
            bullets: [
              "Hardening: austenitize + quench past the critical cooling rate to trap martensite.",
              "Martensite: supersaturated BCT solid solution; hardness set by carbon (0.2 percent C about 45 HRC, 0.8 about 65).",
              "Untempered martensite is hard and brittle with high residual stress - quench cracks await.",
              "Tempering below A1 precipitates fine carbides and relaxes the lattice: hardness traded for toughness.",
              "Bands: 150-200 degrees C tools; 300-400 degrees C springs (troostite); 500-650 degrees C structural (sorbite).",
              "Hard martensite = fresh tetragonal; soft martensite = tempered, carbon precipitated, near-cubic.",
            ],
            diagram: {
              kind: "flow",
              title: "The harden-and-temper sequence",
              caption: "Two operations, one property dial: quench sets the ceiling, temper sets the working point.",
              steps: [
                { label: "Austenitize", note: "A3 + margin, full gamma" },
                { label: "Quench", note: "past the nose; martensite about 62-65 HRC" },
                { label: "Temper", note: "below A1 by duty: 350 degrees C spring, 550 structural" },
                { label: "Verify", note: "hardness check + micrograph of tempered structure" },
              ],
            },
            table: {
              caption: "Tempering bands and their products.",
              headers: ["Temperature", "Product", "Character", "Typical duty"],
              rows: [
                ["150 - 200 degrees C", "low-tempered martensite", "stress relieved, hardness kept", "measuring tools, files"],
                ["300 - 400 degrees C", "troostite", "elastic, tough", "springs, chisels"],
                ["500 - 650 degrees C", "sorbite", "tough, machinable", "shafts, gears, bolts"],
              ],
            },
            callout: {
              type: "warning",
              title: "Never leave quenched steel untempered overnight",
              body: "Fresh martensite carries quench stresses close to the material's own strength; delayed cracking of hardened parts hours after quenching is a standard shop failure. The rule to quote: temper within hours of the quench - and for crack-sensitive grades use martempering (salt bath at just above Ms) to equalize before the final quench.",
            },
            keyTerms: [
              { term: "Martensite", definition: "Diffusionless BCT supersaturated solution of carbon in iron - the quenched hard phase." },
              { term: "Tempering", definition: "Sub-A1 reheat precipitating carbides from martensite - hardness traded for toughness." },
              { term: "Troostite", definition: "Fine tempered structure from about 300-400 degrees C tempering - elastic and tough." },
              { term: "Sorbite", definition: "Coarser tempered structure from 500-650 degrees C - tough structural condition." },
            ],
            examQuestions: [
              {
                q: "Explain the hardening of steel by quenching and the purpose of tempering. Distinguish hard (untempered) and soft (tempered) martensite, and state the tempering bands with their products and applications.",
                marks: 14,
                outline: [
                  "Austenitize + quench past critical cooling rate -> martensite",
                  "Martensite: BCT supersaturated; hardness from carbon (0.8 percent C about 65 HRC)",
                  "Untempered: brittle, stressed - quench-crack risk",
                  "Tempering below A1 precipitates fine carbides, relaxes lattice",
                  "150-200 degrees C tools; 300-400 troostite springs; 500-650 sorbite structural",
                  "Worked: spring at 62 HRC quenched, 45 HRC after 350 degrees C temper, survives 10^7 cycles",
                ],
              },
              {
                q: "Why does the hardness of martensite depend on carbon content rather than quench severity?",
                marks: 7,
                outline: [
                  "Martensite hardness comes from dissolved carbon forcing tetragonality",
                  "More carbon: more tetragonal distortion and higher dislocation density",
                  "0.2 percent C tops near 45 HRC; 0.8 near 65 HRC",
                  "Quench severity only decides whether martensite forms at all (hardenability), not its hardness",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Transformation products: austenite, pearlite, bainite, troostite and cementite",
            body: [
              "The syllabus's product list is the steel microstructure catalogue, and each product is a stopping point on the TTT map. Austenite: FCC solid solution, soft and non-magnetic, exists above the critical range - the parent of all transformations, fully retained at room temperature only in special steels (with Ni, Mn stabilizers). Pearlite: lamellar ferrite + cementite from the eutectoid reaction - coarse (slow cool, about 200 HB) to fine (about 300 HB). Cementite: Fe3C at 6.67 percent C, about 800 HV - hard, brittle, the carbon reservoir and reinforcement of every structure.",
              "Troostite carries two meanings the examiner may probe: in older terminology, the fine pearlite formed near 600 degrees C (troostitic pearlite); in modern tempering terminology, the tempered product of 300-400 degrees C - finely dispersed carbide in ferrite, elastic and tough, the spring structure. Bainite: formed 550-250 degrees C when transformation outruns pearlite diffusion - feather-like upper bainite (about 400 HB) and plate-like lower bainite (about 500 HB); lower bainite's fine carbides inside ferrite plates give the best toughness-per-hardness trade, and austempering holds steel in this band deliberately.",
              "Worked example: rank the same 0.8 percent C steel across its itinerary. Annealed (coarse pearlite) 200 HB; normalized (fine pearlite/troostite) 300 HB; austempered (lower bainite) about 500 HB at 48 HRC with good toughness; quenched (martensite) 65 HRC but brittle until tempered; tempered at 550 degrees C (sorbite) 35 HRC and tough. One composition, six properties - the product list is the property catalogue, and the TTT diagram is its index.",
              "Exam framing: the question is 'describe the structures of pearlite, martensite, bainite, troostite and cementite with their formation conditions and hardness'. Define each with its formation temperature band and sketch-or-describe its morphology, tabulate hardnesses, and note the two meanings of troostite - the ambiguity is itself a standard exam probe.",
            ],
            bullets: [
              "Austenite: FCC parent phase above the critical range; soft, non-magnetic; retained only in special steels.",
              "Pearlite: lamellar ferrite + cementite; coarse about 200 HB, fine about 300 HB.",
              "Cementite (Fe3C): 6.67 percent C, about 800 HV - hard, brittle reinforcement everywhere.",
              "Troostite: fine pearlite (older sense) or the 300-400 degrees C tempered product (modern) - elastic, spring duty.",
              "Bainite: 550-250 degrees C; upper feathery about 400 HB, lower plate-like about 500 HB; austempering target.",
              "Martensite: diffusionless BCT; 45-65 HRC by carbon; the hardness ceiling before tempering.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Hardness ladder of the transformation products",
              caption: "From the softest equilibrium product to the hardest metastable one.",
              tiers: [
                { label: "Martensite (quenched) - 45 to 65 HRC", note: "diffusionless BCT; brittle until tempered" },
                { label: "Lower bainite / troostite - 45 to 50 HRC", note: "austempered or tempered; elastic-tough" },
                { label: "Fine pearlite / upper bainite - 300 to 400 HB", note: "air-cooled or isothermal band" },
                { label: "Coarse pearlite - about 200 HB", note: "annealed equilibrium product" },
              ],
            },
            table: {
              caption: "Product catalogue of eutectoid steel.",
              headers: ["Product", "Formation", "Morphology", "Hardness"],
              rows: [
                ["Austenite", "above A1 (parent)", "FCC grains", "soft, non-magnetic"],
                ["Coarse pearlite", "about 700 degrees C", "thick lamellae", "about 200 HB"],
                ["Fine pearlite / troostitic pearlite", "about 600 degrees C", "thin lamellae", "about 300 HB"],
                ["Upper bainite", "500 - 400 degrees C", "feathery", "about 400 HB"],
                ["Lower bainite", "400 - 250 degrees C", "fine plates", "about 500 HB"],
                ["Martensite", "below Ms", "lath/plate BCT", "45 - 65 HRC"],
              ],
            },
            callout: {
              type: "tip",
              title: "Troostite has two histories",
              body: "Examiners sometimes set the trap: 'troostite' meant fine pearlite in classical metallography and now means the 300-400 degrees C tempered structure. Answer both senses - naming the ambiguity explicitly is itself a mark, and it shows you know the literature as well as the lab.",
            },
            keyTerms: [
              { term: "Pearlite", definition: "Lamellar ferrite + cementite eutectoid product; hardness set by lamellar spacing." },
              { term: "Bainite", definition: "Ferrite + fine carbide formed 550-250 degrees C; austempering's target product." },
              { term: "Retained austenite", definition: "Austenite that survives quenching to room temperature in high-carbon or alloy steels." },
              { term: "Sorbite", definition: "Fine tempered sorbite structure from 500-650 degrees C - tough structural condition." },
            ],
            examQuestions: [
              {
                q: "Describe the formation conditions, morphology and hardness of pearlite, bainite, martensite and the tempered products (troostite, sorbite) of eutectoid steel.",
                marks: 14,
                outline: [
                  "Pearlite: eutectoid lamellae; coarse 200 HB to fine 300 HB by undercooling",
                  "Upper bainite 500-400 degrees C feathery about 400 HB; lower bainite 400-250 degrees C about 500 HB",
                  "Martensite below Ms: BCT, 45-65 HRC by carbon content",
                  "Troostite: 300-400 degrees C tempered - elastic spring structure (also classical fine pearlite)",
                  "Sorbite: 500-650 degrees C tempered - tough structural",
                  "Austenite is the FCC parent above the critical range",
                ],
              },
              {
                q: "Why is lower bainite often preferred over quenched-and-tempered martensite for some spring and tool applications?",
                marks: 7,
                outline: [
                  "Austempering forms lower bainite directly in the salt bath",
                  "Uniform transformation avoids the steep thermal gradients of quenching",
                  "Distortion and quench cracking are minimized",
                  "Toughness-per-hardness of lower bainite rivals tempered martensite",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Surface hardening: flame, induction and laser hardening",
            body: [
              "Surface hardening hardens only a skin of the component, leaving the core tough and ductile - the ideal combination for shafts, gears and crankshafts that need wear resistance outside and shock tolerance inside. The fast-heating family works by heating the surface above A3 in seconds and quenching it instantly, transforming only the skin to martensite because the cold core conducts the heat away before it can austenitize. No change in composition occurs - the same steel, hardened only where the heat touched.",
              "Flame hardening burns oxy-acetylene (about 3100 degrees C) against the surface via a travelling burner followed by a water spray: depth 1-6 mm, equipment cheap and portable, ideal for large one-off parts like gear teeth and lathe beds. Induction hardening induces eddy currents in the skin by a high-frequency coil (10-400 kHz; higher frequency gives shallower skin): depth 0.5-2 mm, cycle time seconds, perfectly repeatable - the mass-production method for crankshaft journals and gear teeth. Laser hardening sweeps a focused CO2 or diode beam: depths 0.1-1 mm with minimal distortion and self-quenching by heat conduction - the precision method for rails, guides and finished machined surfaces that must not warp.",
              "Worked example: a crankshaft journal of 0.45 percent C steel is induction hardened at 50 kHz. The skin depth (current penetration) is about 0.7 mm, heating takes 2 seconds, a water quench follows in-line, and the surface lands at 58-62 HRC over about 1 mm depth while the core stays 25 HRC and tough. Fatigue life roughly doubles because the compressive residual stress of the transformed skin suppresses surface crack initiation - the wear benefit and the fatigue benefit arrive together, which is why induction hardening dominates automotive surface treatment.",
              "Exam framing: the question is 'describe flame, induction and laser hardening with their depth ranges and applications, and state the advantages of surface hardening'. Define the no-composition-change principle, tabulate the three methods by heat source, depth and use, and close with the crankshaft numerical plus the compressive-residual-stress bonus.",
            ],
            bullets: [
              "Principle: heat the skin above A3 in seconds; the cold core self-quenches it - composition unchanged.",
              "Flame hardening: oxy-acetylene burner + water spray; 1-6 mm; large, one-off parts.",
              "Induction hardening: high-frequency coil (10-400 kHz); 0.5-2 mm; seconds per cycle; mass production.",
              "Higher induction frequency gives shallower skin depth - the depth dial.",
              "Laser hardening: focused beam, 0.1-1 mm, self-quenching, minimal distortion on finished surfaces.",
              "Bonus: compressive residual stress in the hardened skin roughly doubles fatigue life.",
            ],
            diagram: {
              kind: "compare",
              title: "The three fast-heating methods",
              caption: "Same principle - different heat sources, depths and production tempos.",
              left: {
                heading: "Flame and induction",
                items: [
                  "Flame: portable, cheap, 1-6 mm - big one-off parts",
                  "Induction: repeatable seconds per part",
                  "Depth dialed by frequency (10-400 kHz)",
                  "Crankshaft journals, gear teeth",
                ],
              },
              right: {
                heading: "Laser hardening",
                items: [
                  "Focused beam - precision zones only",
                  "0.1-1 mm, self-quenching",
                  "Minimal distortion - hardened after final machining",
                  "Rails, slideways, guide surfaces",
                ],
              },
            },
            table: {
              caption: "Surface hardening methods compared.",
              headers: ["Method", "Heat source", "Depth", "Typical application"],
              rows: [
                ["Flame", "oxy-acetylene flame about 3100 degrees C", "1 - 6 mm", "gear teeth, lathe beds, large rolls"],
                ["Induction", "HF eddy currents 10 - 400 kHz", "0.5 - 2 mm", "crankshaft journals, gear teeth, mass production"],
                ["Laser", "focused CO2 / diode beam", "0.1 - 1 mm", "rails, guides, distortion-critical finished parts"],
              ],
            },
            callout: {
              type: "tip",
              title: "Frequency is the depth dial",
              body: "In induction hardening, skin depth falls as frequency rises: 50 kHz gives about 1 mm, 400 kHz a fraction of a millimetre. Exam questions frequently ask 'how is case depth controlled in induction hardening' - answer frequency (plus power and dwell time), not temperature alone.",
            },
            keyTerms: [
              { term: "Surface hardening", definition: "Hardening only a skin by rapid local heating and self-quenching; composition unchanged." },
              { term: "Induction hardening", definition: "HF eddy-current heating of the skin followed by spray quench; depth set by frequency." },
              { term: "Flame hardening", definition: "Oxy-acetylene heating + water spray; portable treatment for large parts." },
              { term: "Compressive residual stress", definition: "Stress state left by the transformed skin that suppresses fatigue crack initiation." },
            ],
            examQuestions: [
              {
                q: "Describe flame, induction and laser hardening - heat source, achievable case depth, advantages and applications of each. Why does surface hardening also improve fatigue life?",
                marks: 14,
                outline: [
                  "Principle: skin austenitized in seconds, self-quenched by the cold core; composition unchanged",
                  "Flame: oxy-acetylene + spray; 1-6 mm; large one-off parts",
                  "Induction: 10-400 kHz coil; 0.5-2 mm; frequency is the depth dial; mass production",
                  "Laser: focused beam 0.1-1 mm; minimal distortion; finished surfaces",
                  "Martensitic skin at 58-62 HRC with tough core",
                  "Compressive residual stress in the skin delays fatigue cracking - life roughly doubles",
                ],
              },
              {
                q: "How is the case depth controlled in induction hardening?",
                marks: 7,
                outline: [
                  "Primary dial: frequency - higher frequency, shallower skin depth",
                  "Secondary: power input and heating (dwell) time",
                  "Quench delay also shifts the transformed depth",
                  "50 kHz gives about 1 mm; 400 kHz a fraction of a millimetre",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Thermochemical treatments: carburising, cyaniding, nitriding, boriding and ion implantation",
            body: [
              "Thermochemical (case) treatments change surface composition - diffusing carbon, nitrogen, boron or metal ions into the skin - then (for carbon) quench it. They suit low-carbon steels that cannot harden by quenching alone: the core stays soft and tough while the enriched skin transforms to hard martensite or forms hard nitride/boride compounds.",
              "Case carburising: pack the part in carbon-rich medium (solid pack carburizing, gas carburizing, liquid salt bath) at 900-950 degrees C for hours; carbon diffuses 0.5-2 mm deep; quench and temper. Gas carburizing in endothermic atmosphere is the automotive standard - gears run 0.8-1.2 mm cases at 58-62 HRC. Cyaniding: molten sodium cyanide salt bath at 800-870 degrees C adds both C and N in 30 minutes to 3 hours - thin 0.1-0.3 mm cases, fast, but the bath is toxic and disposal-regulated. Nitriding: ammonia gas at 500-550 degrees C, well below A1, for 20-100 hours; nitrogen forms hard iron/chromium nitrides - no quench needed, minimal distortion, hardness 900-1100 HV - the premium treatment for crankshafts, camshafts and aluminium extrusion dies. Boriding and ion implantation are the extremes: boron forms iron boride skins above 1500 HV for extreme wear; ion implantation accelerates N or metal ions into nanometre depths for precision tools.",
              "Worked example: a 20MnCr5 car gear is gas carburized at 925 degrees C for 6 hours (case about 1.0 mm), oil quenched, and tempered at 180 degrees C. Surface hardness 60 HRC with effective case depth 1.0 mm; core remains 30-35 HRC tough. Nitriding the same gear would avoid distortion (no quench) but take 40 hours and only reach the surface layer - the choice between throughput (carburize) and precision (nitride) is the selection logic examiners want articulated.",
              "Exam framing: the question is 'describe case carburizing, cyaniding and nitriding with temperatures, case depths and applications'. Tabulate the treatments by element added, temperature, time, depth and hardness, and note the no-quench advantage of nitriding plus the toxicity caveat of cyaniding. Ion implantation and boriding earn their mention as modern extremes.",
            ],
            bullets: [
              "Principle: diffuse hardening elements (C, N, B) into a low-carbon skin, then transform it.",
              "Carburising: 900-950 degrees C, 0.5-2 mm case, quench + temper; gas carburizing is the automotive standard.",
              "Cyaniding: molten cyanide bath 800-870 degrees C; C + N together; 0.1-0.3 mm in under 3 hours; toxic bath.",
              "Nitriding: ammonia at 500-550 degrees C, 20-100 hours; nitrides give 900-1100 HV, no quench, low distortion.",
              "Boriding: FeB/Fe2B skins above 1500 HV for extreme abrasion; ion implantation: nm-depth precision doping.",
              "Selection: throughput -> carburize; distortion-critical -> nitride; extreme wear -> boride.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The gas-carburizing route",
              caption: "Five stages from clean steel to a graded hard case.",
              stages: [
                { label: "Clean and load", note: "low-carbon steel (0.15-0.2 percent C) gears" },
                { label: "Carburize", note: "925 degrees C, carbon-rich atmosphere, 6 h" },
                { label: "Diffuse / equalize", note: "case composition gradients smooth out" },
                { label: "Quench", note: "oil - case transforms to martensite, core stays tough" },
                { label: "Temper", note: "about 180 degrees C; 60 HRC surface over 1.0 mm case" },
              ],
            },
            table: {
              caption: "Thermochemical treatments compared.",
              headers: ["Treatment", "Element(s)", "Temperature", "Case depth / hardness", "Note"],
              rows: [
                ["Pack / gas carburizing", "C", "900 - 950 degrees C", "0.5 - 2 mm; 58-62 HRC after quench", "bulk gear and shaft duty"],
                ["Cyaniding", "C + N", "800 - 870 degrees C", "0.1 - 0.3 mm; thin fast case", "toxic cyanide bath"],
                ["Nitriding", "N", "500 - 550 degrees C", "0.1 - 0.7 mm; 900-1100 HV", "no quench; minimal distortion"],
                ["Boriding", "B", "900 - 1000 degrees C", "0.05 - 0.3 mm; over 1500 HV", "extreme abrasion"],
                ["Ion implantation", "N / metal ions", "room to 400 degrees C", "nanometre depths", "precision tools, dies"],
              ],
            },
            callout: {
              type: "warning",
              title: "Nitriding needs alloy steel to shine",
              body: "Nitrogen hardness comes from stable nitrides, so plain-carbon steel nitrides poorly - nitriding grades carry Cr, Mo, Al (the classic 41CrAlMo7). Quoting the alloy requirement answers the common follow-up 'why not nitride plain mild steel?' and shows you know the treatment's chemistry, not just its recipe.",
            },
            keyTerms: [
              { term: "Case carburizing", definition: "Diffusing carbon into a low-carbon skin at 900-950 degrees C, then quenching to martensitic case." },
              { term: "Cyaniding", definition: "Molten-cyanide bath adding carbon and nitrogen together for a thin, fast case." },
              { term: "Nitriding", definition: "Ammonia treatment at 500-550 degrees C forming hard nitrides - no quench, low distortion." },
              { term: "Case depth", definition: "The hardened skin thickness, specified to where hardness falls to a set level (e.g. 50 HRC)." },
            ],
            examQuestions: [
              {
                q: "Describe case carburizing, cyaniding and nitriding - medium, temperature, time, case depth, resulting hardness and typical applications of each. State one advantage and one limitation of each.",
                marks: 14,
                outline: [
                  "Carburizing: C diffusion 900-950 degrees C, 0.5-2 mm, 58-62 HRC after quench",
                  "Advantage: deep cases for gears/shafts; limitation: distortion from quenching",
                  "Cyaniding: C+N bath 800-870 degrees C, 0.1-0.3 mm in hours",
                  "Advantage: fast thin cases; limitation: toxic bath handling",
                  "Nitriding: N at 500-550 degrees C, 900-1100 HV, no quench",
                  "Advantage: minimal distortion; limitation: long cycles, needs alloy steel",
                ],
              },
              {
                q: "Why does nitriding not require a quench, and what does that imply for treated parts?",
                marks: 7,
                outline: [
                  "Hardness comes from stable nitrides formed below A1",
                  "No phase transformation occurs - the core never austenitizes",
                  "Therefore no quench stresses, minimal distortion",
                  "Parts can be finish-machined, treated and used - ideal for long shafts and dies",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Metallography: optical microscope, electron microscope and grain size",
            body: [
              "Metallography is the inspection arm of heat treatment: preparing a specimen so its microstructure can be seen and measured. The sequence: section the specimen (without overheating), mount it in resin, grind through successive grit papers (240 to 1200), polish to a mirror with alumina or diamond paste, then etch with a chemical reagent that attacks boundaries and phases selectively - 2 percent nital (nitric acid in alcohol) is the standard steel etchant, picric-acid etchants for pearlite detail. The etched surface under reflected light is the specimen's microstructure made visible.",
              "The optical microscope resolves to about 0.5 micrometre at magnifications up to about 2000x - enough for grain size, pearlite spacing, graphite form and case depth. The electron microscope goes further: the scanning electron microscope (SEM) images surfaces at 10-100,000x with great depth of field, reading fracture faces and fine bainite; the transmission electron microscope (TEM) resolves dislocations and precipitates at near-atomic scale, but needs foil-thin specimens. For heat-treatment QA, optical microscopy plus hardness is the daily pair; SEM enters for failure analysis.",
              "Grain size is quantified by the ASTM number: n grains per square inch at 100x satisfies N = 2^(n-1). Worked example: counting 32 grains per square inch at 100x gives 32 = 2^5, so n - 1 = 5 and the ASTM grain size is 5 - a medium-fine grain. Grain size 1-4 is coarse, 5-8 fine; fine grain (higher n) raises strength and toughness, which is why austenitizing temperature and time - the grain-growth levers - are controlled so carefully. Image-analysis software now counts grains automatically, but the exam still asks for the N = 2^(n-1) arithmetic.",
              "Exam framing: the question is 'describe specimen preparation for metallographic examination and the use of optical and electron microscopes, and explain ASTM grain size with a computation'. List the six preparation steps, state the resolution limits of OM/SEM/TEM, give the etchant names, and run one grain-size computation - the full standard answer.",
            ],
            bullets: [
              "Preparation: section -> mount -> grind (240-1200 grit) -> polish -> etch -> examine.",
              "Standard steel etchant: 2 percent nital; picral for pearlite detail.",
              "Optical microscope: up to about 2000x, resolution about 0.5 micrometre - daily QA tool.",
              "SEM: 10-100,000x, deep depth of field - fracture surfaces; TEM: dislocations and precipitates.",
              "ASTM grain size: N = 2^(n-1) grains per square inch at 100x.",
              "Worked: 32 grains per sq in at 100x -> 32 = 2^5 -> ASTM number 5.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Specimen preparation line",
              caption: "Six stages from cut-off saw to etched, examinable surface.",
              stages: [
                { label: "Section", note: "cut without heating the region of interest" },
                { label: "Mount", note: "resin puck for handling" },
                { label: "Grind", note: "240 -> 1200 grit, water cooled" },
                { label: "Polish", note: "alumina/diamond to mirror finish" },
                { label: "Etch", note: "2 percent nital, seconds" },
                { label: "Examine", note: "optical microscope; SEM if needed" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "grain.py - ASTM grain size from a count",
              code: `import math

def astm_number(grains_per_sqin_at_100x):
    # N = 2^(n-1)  ->  n = 1 + log2(N)
    return 1 + math.log2(grains_per_sqin_at_100x)

for N in [8, 16, 32, 64, 128]:
    print(f"N = {N:4d} grains/sq-in at 100x -> ASTM No. {astm_number(N):.0f}")
# 8->4  16->5  32->6  64->7  128->8 : finer grain, higher number`,
            },
            callout: {
              type: "exam",
              title: "Etching is the revealing step",
              body: "A polished-but-unetched surface shows nothing under the microscope - it is a mirror. The examiner's probing point is why: etching attacks grain boundaries and phase interfaces at different rates, creating the relief that scatters light. Answer 'why etch' with the differential-attack sentence and the preparation question is fully closed.",
            },
            keyTerms: [
              { term: "Nital", definition: "2 percent nitric acid in alcohol - the standard etchant for steel microstructures." },
              { term: "SEM", definition: "Scanning electron microscope - 10-100,000x surface imaging, ideal for fracture faces." },
              { term: "TEM", definition: "Transmission electron microscope - near-atomic resolution of dislocations and precipitates." },
              { term: "ASTM grain size", definition: "N = 2^(n-1) grains per square inch at 100x; higher number means finer grain." },
            ],
            examQuestions: [
              {
                q: "Describe the preparation of a metallographic specimen from sectioning to etching, naming the standard reagent for steels. Compare the capabilities of optical, scanning and transmission electron microscopes.",
                marks: 14,
                outline: [
                  "Section without heating; mount in resin",
                  "Grind 240-1200 grit, polish to mirror with alumina/diamond",
                  "Etch with 2 percent nital - differential attack reveals boundaries",
                  "Optical: about 2000x, 0.5 micrometre resolution - daily QA",
                  "SEM: 10-100,000x, deep field - fractures, fine bainite",
                  "TEM: dislocations and precipitates at near-atomic scale",
                ],
              },
              {
                q: "A micrograph shows 64 grains per square inch at 100x. Find the ASTM grain size number and comment on the expected strength relative to a grain size 3 material.",
                marks: 7,
                outline: [
                  "N = 2^(n-1): 64 = 2^6, so n = 7",
                  "ASTM 7 is a fine grain; ASTM 3 is coarse",
                  "Hall-Petch: finer grains raise yield strength and toughness",
                  "Fine grain also improves fatigue initiation resistance",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Testing of Materials: Destructive and Non-Destructive",
      summary:
        "Unit IV proves the metal: the tensile test on the UTM, compression, shear and bend tests, the three hardness tests, Izod and Charpy impact with the ductile-brittle transition, fatigue and the S-N curve, the Jominy hardenability test, fracture analysis and the NDT toolbox, and the property profiles of steels, aluminium, copper, manganese, chromium and nickel alloys.",
      chapter: {
        number: "04",
        title: "Proving the Metal",
        intro:
          "Unit IV covers destructive tests (tensile, compression, shear, bend, hardness types, impact, fatigue, hardenability) and fracture analysis with non-destructive methods, plus the properties of steels and of aluminium, copper, manganese, chromium and nickel alloys.",
        inOneBreath:
          "The UTM's tensile curve yields E, yield, UTS, ductility and toughness; hardness comes in Brinell, Rockwell and Vickers scales; Charpy/Izod measure impact energy and reveal the ductile-brittle transition; the S-N curve rates cyclic life with the endurance limit near half UTS; the Jominy end-quench maps hardenability distance; UT, MPI, dye penetrant, eddy current and radiography find flaws without cutting; and each alloy family carries its own property signature.",
        sections: [
          {
            number: "4.1",
            title: "The tensile test on the UTM",
            body: [
              "The tensile test is the master destructive test: a standard specimen (gauge length 4d or 5d for round bars, or proportional flat specimens) is gripped in a universal testing machine (UTM) and pulled at a controlled rate while load and extension are recorded. Dividing load by original area and extension by original gauge length gives the engineering stress-strain curve, from which the properties of Unit I are read: E from the elastic slope, yield by the 0.2 percent offset, UTS at the peak, ductility as elongation and reduction of area, toughness as the curve area.",
              "Specimen standards matter because geometry changes results: the gauge length sets the elongation number (longer gauges dilute the necking strain), and the shoulder radius sets the stress concentration at the grip. The standard MS-versus-CI laboratory pair tells the story: mild steel yields at about 250 MPa, strain-hardens to 450 MPa, necks and fails at 25 percent elongation with a cup-cone (ductile) fracture; grey cast iron shows no yield, fails suddenly at about 200 MPa with under 1 percent elongation and a flat granular (brittle) fracture. Two curves, two philosophies of design.",
              "Worked example: a 12 mm diameter MS specimen (A = 113 mm^2) with 60 mm gauge length yields at 29.5 kN and peaks at 50.9 kN, breaking at 76 mm gauge length with 9.4 mm final diameter. Yield = 29500/113 = 261 MPa; UTS = 50900/113 = 450 MPa; elongation = (76 - 60)/60 = 26.7 percent; reduction of area = (113 - 69.4)/113 = 38.6 percent. Four numbers, one test - and each has its tolerance band in the material certificate.",
              "Exam framing: the question is 'describe the tensile test with specimen details and the stress-strain curve, comparing MS and CI behaviour'. Sketch the machine-scheme (grips, specimen, load cell, extensometer), label the curve landmarks, run one set of property computations, and contrast the two fracture modes.",
            ],
            bullets: [
              "UTM: grips, load cell, extensometer; specimen gauge length 4d-5d (round) or proportional flat.",
              "Curve yields E, yield (0.2 percent offset), UTS, elongation, reduction of area, toughness.",
              "Mild steel: yields 250 MPa, UTS 450 MPa, 25 percent elongation, cup-cone ductile fracture.",
              "Grey cast iron: no yield, breaks about 200 MPa, under 1 percent elongation, flat granular fracture.",
              "Worked: 12 mm bar - yield 261 MPa, UTS 450 MPa, elongation 26.7 percent, RA 38.6 percent.",
              "Gauge length standardization is essential - elongation values are length-dependent.",
            ],
            diagram: {
              kind: "flow",
              title: "The tensile test chain",
              caption: "From machined specimen to material certificate in five steps.",
              steps: [
                { label: "Machine the specimen", note: "standard gauge length, smooth gauge surface" },
                { label: "Grip in UTM", note: "load cell + extensometer attached" },
                { label: "Pull at controlled rate", note: "load vs extension recorded" },
                { label: "Convert", note: "stress = load/area; strain = extension/gauge" },
                { label: "Read properties", note: "E, yield, UTS, elongation, RA, toughness" },
              ],
            },
            table: {
              caption: "Tensile properties read from the curve.",
              headers: ["Property", "Where on the curve", "MS typical", "Grey CI typical"],
              rows: [
                ["Young's modulus E", "elastic slope", "200 GPa", "100 GPa"],
                ["Yield strength", "0.2 percent offset / upper yield", "250 MPa", "no clear yield"],
                ["UTS", "peak load / area", "450 MPa", "about 200 MPa"],
                ["Elongation", "(Lf - L0)/L0", "25 percent", "under 1 percent"],
                ["Fracture mode", "end of curve", "cup-cone (ductile)", "flat granular (brittle)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two fracture faces, two philosophies",
              body: "Examiners reward the closing contrast: ductile MS fails after necking with a cup-cone face and warns before failing; brittle CI fails suddenly on a flat granular face with no warning. Design with steel gives you yielding as a safety signal; design with cast iron means the safety factor must carry the whole burden.",
            },
            keyTerms: [
              { term: "UTM", definition: "Universal testing machine - the frame that applies controlled tension/compression with load and extension readout." },
              { term: "Gauge length", definition: "The marked specimen length over which extension is measured; sets the elongation number." },
              { term: "Reduction of area", definition: "(A0 - Af)/A0 - the ductility measure from the necked cross-section." },
              { term: "Cup-cone fracture", definition: "The ductile tensile fracture shape - shear lip cone plus flat cup centre." },
            ],
            examQuestions: [
              {
                q: "Describe the standard tensile test - specimen, machine and procedure - and explain the properties obtained from the stress-strain curve. Compute the properties for a 12 mm diameter MS bar (60 mm gauge) yielding at 29.5 kN, peaking at 50.9 kN and breaking at 76 mm gauge with 9.4 mm final diameter.",
                marks: 14,
                outline: [
                  "Specimen: 4d-5d gauge length, shoulders for grips; UTM with extensometer",
                  "Curve landmarks: E slope, 0.2 percent offset yield, UTS, necking, fracture",
                  "Area = pi × 6^2 = 113 mm^2",
                  "Yield = 29500/113 = 261 MPa; UTS = 50900/113 = 450 MPa",
                  "Elongation = 16/60 = 26.7 percent",
                  "RA = (113 - 69.4)/113 = 38.6 percent",
                ],
              },
              {
                q: "Compare the tensile behaviour and fracture appearance of mild steel and grey cast iron.",
                marks: 7,
                outline: [
                  "MS: yield, strain hardening, necking, 25 percent elongation, cup-cone",
                  "CI: no yield, sudden failure about 200 MPa, under 1 percent elongation",
                  "MS warns before failing (large plastic strain); CI fails without warning",
                  "Design implication: steel uses yielding as a signal; CI needs higher safety factors",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Compression, shear and bend tests",
            body: [
              "Compression testing squeezes a specimen between platens and suits materials stronger or more natural in compression - cast iron, concrete, ceramics. Ductile metals merely barrel (friction at the platens spreads the ends) without a clean failure, so compression gives brittle materials their design numbers: grey cast iron carries about 600-800 MPa in compression against about 200 MPa in tension - the 3:1 asymmetry that makes CI the machine-bed material. Lubricated or shaped (hourglass) specimens reduce barrelling so true material response is measured.",
              "Shear testing measures the strength under transverse cutting loads, in direct (single or double) shear or torsion. A double-shear fixture loads a pin through three plates: shear strength = F/(2A) because two planes shear simultaneously. The laboratory pairing with tensile data reveals the material constant: for ductile steel, shear strength is about 0.55-0.6 of tensile strength (about 280 MPa against 450), while brittle cast iron shears at about 1.2-1.3 times its tensile strength. Punching and blanking force calculations (Unit: press working) use exactly this shear strength number.",
              "The transverse bend (flexure) test loads a simply supported rectangular beam at mid-span and reads the modulus of rupture - the fictitious maximum bending stress at failure computed from the elastic flexure formula. Wood, ceramics and cast iron are standard subjects: a 20 x 20 x 300 mm wooden beam on 280 mm span failing at 1.2 kN gives MOR = 3FL/(2bd^2) = 3 × 1200 × 280/(2 × 20 × 400) = 63 N/mm^2 (MPa). MOR overstates true strength for ductile materials (plasticity invalidates the elastic formula) but is the standard comparative number for brittle beam materials.",
              "Exam framing: the question is 'describe compression, direct shear and transverse bend tests with their formulas and suitable materials'. Give each test's fixture, formula and typical subject material, and include the CI compression-tension asymmetry and the MOR computation - both are standing numerical favourites.",
            ],
            bullets: [
              "Compression: platens squeeze the specimen; design data for CI, concrete, ceramics.",
              "Grey CI: about 600-800 MPa in compression vs about 200 MPa tension - the asymmetry to quote.",
              "Double shear: strength = F/(2A); ductile steel shear is about 0.55-0.6 of tensile.",
              "Direct/cross shear tests on MS and CI specimens show the two ratios' contrast.",
              "Transverse bend test: MOR = 3FL/(2bd^2) for centre-loaded rectangular beams.",
              "MOR suits brittle materials (wood, ceramics, CI); elastic formula overstates ductile strength.",
            ],
            diagram: {
              kind: "matrix",
              title: "Which test for which material response",
              caption: "Plot loading mode against the failure behaviour the test is built to capture.",
              axes: { x: "Tension-dominated failure", y: "Compression-dominated failure" },
              quadrants: [
                { label: "Tensile test", note: "ductile metals - yield, UTS, ductility (MS)" },
                { label: "Compression test", note: "brittle materials' strength (grey CI 600-800 MPa)" },
                { label: "Bend (MOR) test", note: "brittle beams - wood, ceramics, CI sections" },
                { label: "Shear test", note: "punching/pin design - F/(2A) in double shear" },
              ],
            },
            table: {
              caption: "The three tests at a glance.",
              headers: ["Test", "Fixture", "Key formula", "Typical material"],
              rows: [
                ["Compression", "parallel platens", "sigma = F/A", "grey CI, concrete, ceramics"],
                ["Double shear", "pin through 3 plates", "tau = F/(2A)", "pins, rivets, MS/CI bars"],
                ["Transverse bend", "3-point beam, span L", "MOR = 3FL/(2bd^2)", "wood, cast iron, ceramics"],
              ],
            },
            callout: {
              type: "tip",
              title: "The CI asymmetry is the classic contrast",
              body: "Grey cast iron is about three times stronger in compression than in tension because its graphite flakes act as internal cracks under tension but close under compression. Whenever a question compares CI with steel, this 600 MPa versus 200 MPa asymmetry is the property examiners look for - it explains why CI machines beds carry compressive loads.",
            },
            keyTerms: [
              { term: "Barrelling", definition: "Friction-induced bulging of compression specimens that distorts the measured stress." },
              { term: "Double shear", definition: "Loading that shears the specimen on two planes simultaneously: tau = F/(2A)." },
              { term: "Modulus of rupture (MOR)", definition: "Fictitious maximum bending stress at beam failure from the elastic flexure formula." },
              { term: "Three-point bend", definition: "Simply supported beam loaded at mid-span - the standard flexure fixture." },
            ],
            examQuestions: [
              {
                q: "Describe the compression, direct shear and transverse bend tests with their fixtures and formulas. Explain why grey cast iron is tested in compression, and compute the modulus of rupture for a 20 x 20 mm wooden beam on 280 mm span failing at 1.2 kN.",
                marks: 14,
                outline: [
                  "Compression: platens, sigma = F/A; CI's 600-800 MPa vs 200 MPa tension",
                  "Barrelling note: friction spreads ends; lubrication corrects it",
                  "Double shear: tau = F/(2A); steel shear about 0.55-0.6 of tensile",
                  "Bend: MOR = 3FL/(2bd^2) for centre loading",
                  "MOR = 3 × 1200 × 280/(2 × 20 × 20^2) = 63 MPa",
                  "MOR suits brittle beams; overstates ductile strength",
                ],
              },
              {
                q: "Why does the elastic modulus-of-rupture formula overestimate the true strength of ductile beam materials?",
                marks: 7,
                outline: [
                  "MOR assumes elastic stress distribution to failure",
                  "Ductile beams yield at the outer fibre and redistribute stress",
                  "The elastic formula then attributes more stress than the material actually carries",
                  "Hence MOR is a comparative index, not a true strength, for ductile materials",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Hardness testing in the laboratory: Brinell, Rockwell and Vickers",
            body: [
              "Hardness testing is the fastest quality-control measurement in metallurgy - seconds per reading, no specimen machining, and a strong correlation with strength. Brinell presses a 10 mm hardened steel or tungsten-carbide ball under 500-3000 kgf for 10-30 seconds and reads the impression diameter with a low-power microscope: HB = 2P/(pi D (D - sqrt(D^2 - d^2))). It averages over a large area - ideal for coarse-structured cast irons - but cannot test hard steels (ball deforms above about 500 HB with steel balls) or thin sections.",
              "Rockwell measures depth of penetration instead of diameter: a minor load seats the indenter, a major load presses it, and the dial (or digital) reading follows directly - HRB (1/16 inch ball, 100 kgf) for soft metals, HRC (diamond cone, 150 kgf) for hardened steel. No optical measurement, immediate reading, and the machine can step through a production batch; the price is a smaller, localized reading sensitive to surface condition. Vickers uses a square-based diamond pyramid under 1-120 kgf and measures both diagonals: HV = 1.854 F/d^2. Its geometrically similar impression means one scale covers all hardness levels from annealed aluminium to tool steel, and its small footprint suits thin cases and microhardness traverses across a carburized layer.",
              "Worked example: the same hardened gear surface reads HRC 58; converting through the standard tables lands near 650 HV and about 610 HB equivalent - and the estimated tensile strength via 3.45 × HB is about 2100 MPa (the correlation saturates for martensitic steels, a caveat worth quoting). A Brinell test on the same case would crack the thin hardened layer - which is exactly why the microhardness Vickers traverse is the standard way to document a carburized case profile: hardness every 0.1 mm from surface to core, the effective case depth read where HV falls to 550.",
              "Exam framing: the question is 'describe Brinell, Rockwell and Vickers tests with indenters, loads and formulas, and state where each is preferred'. Tabulate the three, work one HV computation, and close with the case-depth traverse application - it connects hardness testing to the heat treatments of Unit III.",
            ],
            bullets: [
              "Brinell: 10 mm ball, 500-3000 kgf; HB = 2P/(pi D (D - sqrt(D^2 - d^2))); averages coarse structures.",
              "Rockwell: depth-based, HRB ball for soft metals, HRC diamond cone for hardened steel; fastest test.",
              "Vickers: diamond pyramid, HV = 1.854 F/d^2; one scale for the full range; suits thin cases.",
              "Worked: F = 30 kgf, d = 0.45 mm gives HV about 275; hardened gear case at HRC 58 is about 650 HV.",
              "Hardness-strength correlation: UTS about 3.45 × HB for steels (saturates for martensite).",
              "Case-depth documentation: Vickers microhardness traverse, effective case at 550 HV.",
            ],
            diagram: {
              kind: "compare",
              title: "Reading depth versus reading diameter",
              caption: "The two measurement philosophies behind the hardness scales.",
              left: {
                heading: "Brinell / Vickers (optical)",
                items: [
                  "Measure the impression diameter with a microscope",
                  "Averages over a larger area - good for coarse structures",
                  "Slower; needs flat, accessible surface",
                  "Brinell limited to about 500 HB (steel ball)",
                ],
              },
              right: {
                heading: "Rockwell (depth)",
                items: [
                  "Measure penetration depth directly - instant dial reading",
                  "Fast, no optics - production floor standard",
                  "Localized reading - surface-sensitive",
                  "HRC covers hardened steel to 70 HRC",
                ],
              },
            },
            table: {
              caption: "Hardness scales and their ranges.",
              headers: ["Scale", "Indenter / load", "Range", "Best subject"],
              rows: [
                ["HB", "10 mm ball, 500-3000 kgf", "up to about 500 HB", "cast iron, annealed steels, non-ferrous"],
                ["HRB", "1/16 in ball, 100 kgf", "20 - 100 HRB", "soft steels, aluminium, copper alloys"],
                ["HRC", "diamond cone, 150 kgf", "20 - 70 HRC", "hardened and tempered steels"],
                ["HV", "diamond pyramid, 1-120 kgf", "all levels", "thin cases, microhardness traverses"],
              ],
            },
            callout: {
              type: "exam",
              title: "Why Vickers rules the case traverse",
              body: "The examiner's applied question: 'how is the case depth of a carburized gear measured?' Answer: a Vickers microhardness traverse at 0.1 mm steps from surface inward, effective case depth read where hardness falls to 550 HV (or 50 HRC). Brinell's 10 mm ball would bridge the whole case and read core values - geometry, not chemistry, is why the pyramid wins.",
            },
            keyTerms: [
              { term: "HB", definition: "Brinell hardness number from ball impression diameter; averages coarse structures." },
              { term: "HRC", definition: "Rockwell C - depth-based diamond-cone scale for hardened steels, 20-70." },
              { term: "HV", definition: "Vickers number = 1.854 F/d^2; geometrically similar impression, one scale for all levels." },
              { term: "Effective case depth", definition: "Depth where hardness falls to 550 HV (or 50 HRC) - the heat-treatment acceptance number." },
            ],
            examQuestions: [
              {
                q: "Describe the Brinell, Rockwell and Vickers hardness tests - indenter, load, reading method and preferred applications. Compute the Vickers number for a 30 kgf load producing a 0.45 mm diagonal and explain how a carburized case depth is documented.",
                marks: 14,
                outline: [
                  "Brinell: 10 mm ball, optical diameter reading, HB formula; coarse structures",
                  "Rockwell: depth reading, HRB/HRC; fastest, production standard",
                  "Vickers: diamond pyramid, HV = 1.854 F/d^2; all levels, thin cases",
                  "HV = 1.854 × 30/0.45^2 = 274.7, about 275",
                  "Case traverse: HV at 0.1 mm steps; effective depth at 550 HV",
                  "Brinell ball would bridge a thin case - why Vickers is used",
                ],
              },
              {
                q: "Why is the Rockwell test preferred on the shop floor while Vickers is preferred in the metallurgical laboratory?",
                marks: 7,
                outline: [
                  "Rockwell: instant depth reading, no microscopy, high throughput",
                  "Sensitive to surface condition but fast enough for 100 percent inspection",
                  "Vickers: slower optical measurement but one scale for all hardness levels",
                  "Microhardness traverses and thin-case work need the small pyramid impression",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Impact tests: Izod and Charpy and the ductile-brittle transition",
            body: [
              "Impact tests measure toughness under sudden loading - the energy absorbed by a notched specimen struck by a swinging pendulum. The Charpy specimen (55 x 10 x 10 mm, V-notch 2 mm deep) rests on anvil supports as a simply supported beam struck at mid-span behind the notch; the Izod specimen is clamped as a cantilever and struck at a fixed height above the notch. The pendulum's height loss gives absorbed energy directly: E = mg(h1 - h2), read in joules from the machine dial. Both are comparative index tests - the numbers rank materials and heat treatments rather than feeding directly into stress calculations.",
              "The deepest insight from impact testing is the ductile-to-brittle transition temperature (DBTT): body-centred metals (ferritic steels) are tough above a critical temperature and brittle below it, and the Charpy energy versus temperature curve shows the drop - typically from over 100 J to under 10 J across a 50-80 degrees C window. FCC metals (copper, aluminium, austenitic stainless) stay ductile at all temperatures, which is why austenitic steel is specified for cryogenic vessels. Liberty-ship hull failures in the North Atlantic winter are the historical warning that made DBTT a specification item for every structure seeing cold service.",
              "Worked example: a structural steel tested across temperature: 120 J at +20 degrees C, 90 J at 0 degrees C, 40 J at -20 degrees C, 12 J at -40 degrees C. The 27 J (or 40 J, depending on code) energy criterion locates the DBTT near -25 degrees C. A crane specified for a Himalayan site at -30 degrees C must therefore either use this steel with a fine-grained, normalized condition lowering the DBTT by 20 degrees C, or switch alloy - exactly the specification decision the test exists to inform.",
              "Exam framing: the question is 'describe the Izod and Charpy tests with specimen details and explain the ductile-brittle transition'. Contrast the two fixtures (cantilever vs simply supported), give the energy formula, sketch the transition curve and label the DBTT criterion, and close with the temperature numerical.",
            ],
            bullets: [
              "Charpy: simply supported notched bar struck at mid-span; Izod: clamped cantilever struck above the notch.",
              "Energy read from pendulum height loss: E = mg(h1 - h2), in joules.",
              "Comparative index test - ranks materials and treatments; not a direct design stress.",
              "DBTT: BCC steels drop from over 100 J to under 10 J across a 50-80 degrees C window.",
              "FCC metals (Cu, Al, austenitic SS) show no transition - cryogenic service choices.",
              "Worked: 120 J at +20, 12 J at -40 degrees C; 27-40 J criterion puts DBTT near -25 degrees C.",
            ],
            diagram: {
              kind: "compare",
              title: "Charpy versus Izod",
              caption: "Same pendulum physics, different fixture - and the same design message.",
              left: {
                heading: "Charpy",
                items: [
                  "Simply supported bar, struck behind the notch",
                  "55 x 10 x 10 mm with 2 mm V-notch",
                  "Standard in structural and weld qualification",
                  "Reads energy in joules on the dial",
                ],
              },
              right: {
                heading: "Izod",
                items: [
                  "Cantilever clamp, struck above the notch",
                  "Same 55 x 10 x 10 mm specimen type",
                  "Common in plastics testing",
                  "Same mg(h1 - h2) energy arithmetic",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Impact energy is not design stress",
              body: "A common slip is treating Charpy joules as a strength. They are a comparative index - useful for ranking steels, qualifying welds and locating the DBTT, but never converted into an allowable stress. Quote this limitation explicitly; examiners set the trap precisely to catch it.",
            },
            keyTerms: [
              { term: "Charpy test", definition: "Pendulum impact on a simply supported notched bar; energy absorbed read in joules." },
              { term: "Izod test", definition: "Pendulum impact on a clamped cantilever specimen struck above the notch." },
              { term: "DBTT", definition: "Ductile-to-brittle transition temperature - where impact energy collapses in BCC metals." },
              { term: "Notch sensitivity", definition: "A material's tendency to lose toughness sharply in the presence of a stress concentrator." },
            ],
            examQuestions: [
              {
                q: "Describe the Charpy and Izod impact tests with specimen and fixture details. Explain the ductile-to-brittle transition and sketch the energy-temperature curve, locating the DBTT for a steel showing 120 J at +20 degrees C and 12 J at -40 degrees C.",
                marks: 14,
                outline: [
                  "Charpy: simply supported, struck behind V-notch; Izod: cantilever",
                  "Energy E = mg(h1 - h2) from pendulum height loss",
                  "Comparative index - ranks materials and treatments",
                  "BCC steels show the transition; FCC metals stay ductile",
                  "Curve falls from over 100 J to under 10 J across about 50-80 degrees C",
                  "27-40 J criterion locates DBTT near -25 degrees C for the given data",
                ],
              },
              {
                q: "Why do ferritic steels show a ductile-to-brittle transition while copper and aluminium do not?",
                marks: 7,
                outline: [
                  "BCC iron's yield strength rises sharply as temperature falls",
                  "Below the transition, yield precedes crack-tip plasticity - brittle cleavage",
                  "FCC metals keep low yield strength and easy slip at all temperatures",
                  "Hence austenitic stainless is specified for cryogenic vessels",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Fatigue testing and the S-N curve",
            body: [
              "Fatigue testing cycles specimens at controlled stress amplitude until they fail, building the S-N curve - stress amplitude S against cycles to failure N on a log scale. The laboratory workhorses: rotating-bending (a shaft with a central load spinning - each revolution is one cycle, fast and cheap), axial push-pull servohydraulic machines (full control of mean stress and waveform), and plate bending rigs. Tests run from 10^3 cycles (high amplitude) to 10^8 (low); the steel curve flattens near 10^7 cycles into the endurance limit - the stress below which life is effectively infinite - typically about half the UTS.",
              "Variable service loading is handled by two further concepts: mean stress corrections (the Goodman relation: allowable amplitude falls linearly as mean tensile stress rises) and Miner's cumulative-damage rule (each load block consumes ni/Ni of life; failure when the sum reaches 1). Crack-growth testing (da/dN versus delta-K, Paris law) feeds fracture-mechanics design for inspectable structures - when cracks are assumed present, growth rate and inspection interval decide life rather than initiation curves.",
              "Worked example: a steel shaft with UTS 600 MPa has a polished rotating-bending endurance limit of 300 MPa. Applying modifiers - notch factor 1.4 (fillet), surface factor 0.85, size factor 0.9 - gives corrected endurance about 300/(1.4 × 0.85 × 0.9) = 280 MPa. A duty cycle spending 40 percent of life at 260 MPa (N = 10^6), 35 percent at 300 MPa (N = 10^5) and 25 percent below the corrected limit consumes 0.4 + 3.5 + 0 = 3.9 lifetimes at that mix - far over 1, so the design must cut the 300 MPa block's share or raise the fillet radius. The arithmetic is the whole fatigue-design conversation in miniature.",
              "Exam framing: the question is 'describe fatigue testing, draw and explain the S-N curve, and state the factors affecting fatigue life'. Describe the rotating-bending rig, sketch the curve with the endurance limit marked, apply the half-UTS rule with a modifier computation, and close with the factor list from Unit I's fatigue section.",
            ],
            bullets: [
              "Fatigue test: cycle at controlled amplitude; S-N curve from 10^3 to 10^8 cycles.",
              "Rotating-bending rig: one cycle per revolution - the standard cheap rig.",
              "Steel endurance limit near 10^7 cycles, about 0.5 UTS; aluminium has no true limit.",
              "Goodman correction lowers allowable amplitude as mean tensile stress rises.",
              "Miner's rule: sum of ni/Ni blocks reaching 1 predicts failure under mixed loading.",
              "Worked: 300 MPa polished limit corrected to about 280 MPa by notch, surface and size factors.",
            ],
            diagram: {
              kind: "flow",
              title: "From rig to design number",
              caption: "The fatigue-testing chain from spinning shaft to corrected endurance limit.",
              steps: [
                { label: "Test series", note: "rotating bending at 4-6 amplitudes" },
                { label: "Plot S vs log N", note: "each point one specimen's life" },
                { label: "Locate the knee", note: "endurance limit near 10^7 cycles" },
                { label: "Apply modifiers", note: "notch, surface, size, mean stress" },
                { label: "Design stress", note: "corrected limit + Miner's rule for duty mix" },
              ],
            },
            table: {
              caption: "Standard fatigue-strength reduction factors.",
              headers: ["Factor", "Range", "Design value example"],
              rows: [
                ["Notch (Kf)", "1.0 - 2.5", "1.4 for a generous fillet"],
                ["Surface finish", "0.3 - 1.0", "0.85 machined; 1.0 polished"],
                ["Size", "0.7 - 1.0", "0.9 for 30-50 mm sections"],
                ["Mean tensile stress", "Goodman: S_a reduced", "amplitude multiplied by (1 - Sm/Su)"],
              ],
            },
            callout: {
              type: "tip",
              title: "The endurance limit is a family of numbers",
              body: "There is no single 'fatigue strength of steel' - only a polished 10 mm rotating-bending baseline that modifiers cut down. Quote the baseline rule (about 0.5 UTS), then multiply the reductions. Examiners reward answers that show the baseline-modifier structure rather than quoting one number as if it were universal.",
            },
            keyTerms: [
              { term: "Rotating-bending test", definition: "Fatigue rig where a loaded shaft spins - one cycle per revolution." },
              { term: "Goodman relation", definition: "Linear reduction of allowable stress amplitude as mean tensile stress increases." },
              { term: "Miner's rule", definition: "Cumulative damage: failure when the sum of ni/Ni over load blocks reaches 1." },
              { term: "Paris law", definition: "Crack growth per cycle da/dN = C(delta-K)^m - the fracture-mechanics life basis." },
            ],
            examQuestions: [
              {
                q: "Describe fatigue testing with the rotating-bending rig and explain the S-N curve and endurance limit. Compute the corrected endurance limit for a steel of UTS 600 MPa with notch factor 1.4, surface factor 0.85 and size factor 0.9.",
                marks: 14,
                outline: [
                  "Rig: central-load shaft spinning; one cycle per revolution; cheap series",
                  "S-N curve: amplitude vs log N; knee at about 10^7 cycles",
                  "Baseline endurance = 0.5 UTS = 300 MPa",
                  "Corrected = 300/(1.4 × 0.85 × 0.9) = 280 MPa",
                  "Modifiers: notch, surface, size, mean stress (Goodman)",
                  "Mixed duty: Miner's rule sums ni/Ni blocks to predict failure",
                ],
              },
              {
                q: "Why do aluminium alloys have no true endurance limit while steels do?",
                marks: 7,
                outline: [
                  "Steel's S-N curve flattens - a stress exists below which cracks do not initiate",
                  "Aluminium curves keep falling slightly at every amplitude",
                  "Life is finite at any stress - design to a specified life (10^7 or 10^8)",
                  "Hence aluminium aircraft parts carry strict inspection intervals",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Hardenability: the Jominy end-quench test",
            body: [
              "Hardenability is a steel's ability to harden in depth - to form martensite not just at the surface but through the section under a given quench. It depends on carbon content (sets achievable hardness) and, decisively, on alloy content: Cr, Mo, Mn, Ni delay pearlite/bainite transformation (shift the TTT nose right), lowering the critical cooling rate so interior material can still reach martensite. Hardenability is not hardness - a plain-carbon steel hardens deeply never, whatever its surface hardness; an alloy steel hardens deeply easily.",
              "The Jominy end-quench test measures this property with one specimen: a 25 mm diameter, 100 mm long bar is austenitized, then water-jet quenched at one end only. Along the bar, cooling rate falls continuously from violent (end) to air-cooling (far end) - one specimen samples the entire quench-severity spectrum. After cooling, flats are ground and hardness is measured every 2-3 mm from the quenched end, producing the Jominy hardenability curve: flat high hardness means deep hardening (high hardenability); an early drop means shallow (low).",
              "Worked example: a plain 0.4 percent C steel reads 58 HRC at 1 mm, 35 HRC at 5 mm and 25 HRC at 15 mm - shallow hardening; the same carbon with 1 percent Cr and 0.2 percent Mo holds 55 HRC to 12 mm - the alloy's nose-shift buys twelvefold depth. Designers read such curves against section size: a shaft of 40 mm diameter needs hardness to its centre, so only the alloy steel qualifies; a thin knife blade hardens from the plain steel. The test converts alloying into a measurable depth budget - the standard way steels are specified for quench-and-temper duty.",
              "Exam framing: the question is 'define hardenability, describe the Jominy end-quench test with a sketch of the curve, and explain the effect of alloying'. Distinguish hardenability from hardness, describe the single-specimen gradient trick, sketch the two curves (plain vs alloy), and give the Cr-Mo depth numerical.",
            ],
            bullets: [
              "Hardenability: depth to which martensite forms under a given quench - set mainly by alloying.",
              "Cr, Mo, Mn, Ni shift the TTT nose right, lowering the critical cooling rate.",
              "Jominy test: 25 x 100 mm bar, austenitized, water-jet quenched at one end only.",
              "One specimen samples every cooling rate; hardness read at 2-3 mm steps along the length.",
              "Flat Jominy curve = deep hardening; early drop = shallow.",
              "Worked: plain 0.4 percent C loses hardness by 5 mm; 1 Cr - 0.2 Mo holds 55 HRC to 12 mm.",
            ],
            diagram: {
              kind: "flow",
              title: "The Jominy procedure",
              caption: "One bar, one quench, one continuous cooling-rate gradient.",
              steps: [
                { label: "Austenitize", note: "25 mm bar, above A3" },
                { label: "End-quench", note: "water jet at one end, standard flow" },
                { label: "Cool naturally", note: "rate falls along the bar from jet to air" },
                { label: "Grind flats", note: "two opposite faces, 0.4 mm deep" },
                { label: "Read hardness", note: "HRC every 2-3 mm -> hardenability curve" },
              ],
            },
            callout: {
              type: "exam",
              title: "Hardenability is not hardness",
              body: "The distinction the examiner always sets: hardness is how hard the surface can get (carbon decides); hardenability is how deep that hardness penetrates (alloying decides). A steel can have 65 HRC hardness with terrible hardenability, or 58 HRC with excellent hardenability. Write the pair of definitions side by side and the question is already half answered.",
            },
            keyTerms: [
              { term: "Hardenability", definition: "Depth capability of martensite formation under a standard quench - alloying-controlled." },
              { term: "Jominy test", definition: "End-quench of a 25 x 100 mm bar producing a continuous cooling gradient along its length." },
              { term: "Jominy curve", definition: "Hardness versus distance from the quenched end - the hardenability fingerprint." },
              { term: "Ideal diameter (D_I)", definition: "Theoretical bar diameter that would just fully harden at the centre - a hardenability index." },
            ],
            examQuestions: [
              {
                q: "Define hardenability and distinguish it from hardness. Describe the Jominy end-quench test with a sketch of the apparatus and the resulting curves for a plain-carbon and an alloy steel, explaining why alloying improves hardenability.",
                marks: 14,
                outline: [
                  "Hardenability: depth of martensite under given quench; hardness: surface level from carbon",
                  "Jominy: 25 x 100 mm bar, end water-jet quench",
                  "Cooling rate falls continuously from end to far end - one specimen, all rates",
                  "Hardness every 2-3 mm gives the hardenability curve",
                  "Plain 0.4 percent C: 58 HRC at 1 mm, 35 at 5 mm, 25 at 15 mm",
                  "Cr-Mo alloy holds 55 HRC to 12 mm - TTT nose shifted right",
                ],
              },
              {
                q: "Why does the Jominy test need only one specimen while S-N fatigue curves need dozens?",
                marks: 7,
                outline: [
                  "The end-quench creates a continuous cooling-rate gradient inside one bar",
                  "Each distance from the end corresponds to a different quench severity",
                  "Fatigue needs many specimens - one per stress level on the S-N curve",
                  "Jominy's gradient trick collapses a whole test matrix into one bar",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Fracture analysis and non-destructive testing methods",
            body: [
              "Fracture analysis reads failed surfaces to name the failure: ductile overload (dimpled, cup-cone, shear lips), brittle overload (flat, granular, chevron marks pointing to the origin), fatigue (smooth beach-marked growth zone plus final rough region), and stress-corrosion or hydrogen cracking (intergranular faces). The chevron pattern is the investigator's compass - its ribs converge on the initiation site; SEM confirms the micro-mechanism (dimples vs cleavage facets vs striations). Combined with hardness traverses, microstructure and load history, the fracture face usually convicts the cause within an afternoon.",
              "Non-destructive testing (NDT) finds flaws without cutting the part, and each method matches a flaw type. Ultrasonic testing: a piezoelectric probe sends high-frequency sound; flaws reflect echoes read on the time axis - the volumetric workhorse for welds and thick sections (internal cracks, laminations, porosity). Magnetic particle inspection: magnetize a ferromagnetic part, dust with iron powder - surface and near-surface cracks create leakage fields that hold the powder; only ferromagnetic materials. Dye (liquid) penetrant: spray a dye, wait for capillary entry into surface-breaking cracks, wash, develop with white powder - vivid red indications on any non-porous material. Eddy-current testing: an AC coil induces currents; flaws and material changes disturb them - fast for surface cracks, conductivity sorting and coating thickness. Radiography: X or gamma rays image internal voids, slag and cracks on film - the weld-code classic, with the radiation-safety regime attached.",
              "Worked example: a welded pressure vessel shows a leaking seam. Plan: radiograph the seam for internal slag/porosity, UT for lack-of-fusion at the root, MPI for toe cracks, dye penetrant on ground repair welds - four methods because each sees a different flaw population. The repaired joint is then re-radiographed: NDT is a specification-driven suite, not a single instrument, and choosing the suite is itself the examined skill.",
              "Exam framing: the question is 'describe the major NDT methods with their principles, applicable flaw types and limitations'. Tabulate UT, MPI, DP, eddy current and radiography by principle, flaw type and material restriction, and add the fracture-face vocabulary for the analysis half of the question.",
            ],
            bullets: [
              "Fracture faces: dimpled cup-cone (ductile), flat with chevrons (brittle), beach marks (fatigue), intergranular (SCC).",
              "Chevron ribs converge on the crack origin - the fracture-face compass.",
              "Ultrasonic testing: echo-based volumetric inspection of welds and thick sections.",
              "MPI: leakage fields hold iron powder over surface cracks - ferromagnetic parts only.",
              "Dye penetrant: capillary-entering dye reveals surface cracks on any non-porous material.",
              "Eddy current: fast surface-crack and conductivity screening; radiography: internal imaging with safety regime.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the NDT method",
              caption: "Flaw location and material decide the instrument - no single method sees everything.",
              start: "What flaw, where, in what material?",
              branches: [
                { label: "Internal flaws, thick section", outcome: "ultrasonic testing - echo depth reading; also radiography for voids/slag", good: true },
                { label: "Surface cracks, steel", outcome: "magnetic particle inspection - leakage-field powder indication", good: true },
                { label: "Surface cracks, non-magnetic (Al, austenitic SS)", outcome: "dye penetrant - capillary dye indication", good: true },
                { label: "Surface crack sorting, fast, on line", outcome: "eddy current - coil impedance change", good: true },
              ],
            },
            table: {
              caption: "The NDT toolbox.",
              headers: ["Method", "Principle", "Flaws found", "Limitation"],
              rows: [
                ["Ultrasonic", "reflected HF sound echoes", "internal cracks, laminations, porosity", "operator skill; geometry access"],
                ["Magnetic particle", "leakage flux at cracks holds powder", "surface/near-surface cracks", "ferromagnetic materials only"],
                ["Dye penetrant", "capillary entry of dye, developer bleed-out", "surface-breaking cracks", "non-porous surfaces only"],
                ["Eddy current", "coil impedance disturbed by flaws", "surface cracks, conductivity, coatings", "shallow depth; conductors only"],
                ["Radiography", "X/gamma absorption image", "voids, slag, cracks, density changes", "radiation safety; two-sided access"],
              ],
            },
            callout: {
              type: "exam",
              title: "Each method owns a flaw population",
              body: "The exam's comparative question is answered by one sentence per method: UT owns internal flaws, MPI owns surface cracks in steel, DP owns surface cracks in anything non-porous, eddy current owns fast surface screening, radiography owns internal imaging on film. Memorize the ownership table - the question is always 'which method and why'.",
            },
            keyTerms: [
              { term: "Chevron marks", definition: "Ribs on a brittle fracture face converging at the crack origin." },
              { term: "Ultrasonic testing", definition: "Probing internal flaws by reflected high-frequency sound echoes." },
              { term: "Magnetic particle inspection", definition: "Iron-powder indication of leakage flux at surface cracks in ferromagnetic parts." },
              { term: "Dye penetrant test", definition: "Capillary dye entering surface cracks, made visible by a white developer." },
            ],
            examQuestions: [
              {
                q: "Describe the five major NDT methods - ultrasonic, magnetic particle, dye penetrant, eddy current and radiography - with principle, applicable flaws and limitations of each. Which suite would you apply to inspect a welded steel pressure vessel?",
                marks: 14,
                outline: [
                  "UT: echo reflection; internal cracks/laminations; skill-dependent",
                  "MPI: leakage flux + powder; surface cracks; ferromagnetic only",
                  "DP: capillary dye; surface cracks; non-porous only",
                  "Eddy current: impedance change; fast surface screening; shallow",
                  "Radiography: X/gamma image; voids/slag; radiation safety",
                  "Vessel suite: radiograph + UT for volumetric, MPI at toes, DP after repairs",
                ],
              },
              {
                q: "How do chevron marks and beach marks on a fracture surface identify the failure mode and origin?",
                marks: 7,
                outline: [
                  "Chevron ribs (brittle overload) converge on the initiation point",
                  "Beach marks (fatigue) record load-change progression around the origin",
                  "Smooth fatigue zone + rough final zone = fatigue diagnosis",
                  "SEM at the origin confirms striations or cleavage facets",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Engineering alloys: steels, aluminium, copper, manganese, chromium and nickel",
            body: [
              "Beyond plain carbon steel, the alloy families divide the duty map. Steels: low-alloy (Cr, Ni, Mo for hardenability and toughness - 40NiCr2Mo gears), tool steels (high C plus Cr, W, V for hardness retention - HSS, D2 dies), and spring steels (Si-Mn). Aluminium alloys: 1xxx pure (conductors), 2xxx Al-Cu (aerospace, age-hardenable, about 400 MPa), 6xxx Al-Mg-Si (extrudable structural), 7xxx Al-Zn (highest strength, about 550-600 MPa, fatigue-critical airframes); all share low density (2.7 g/cm^3) and excellent thermal conductivity at the price of fatigue behaviour without an endurance limit.",
              "Copper and its alloys: pure copper for conductors (58 MS/m conductivity), brass (Cu-Zn: cartridge 70/30, free-cutting with lead) for corrosion resistance and formability, bronze (Cu-Sn) for bearings and marine duty, cupro-nickel for seawater piping. Manganese steel (Hadfield, 12-14 percent Mn): austenitic, work-hardens explosively under impact - the crusher-jaw and railway-point metal that stays soft until struck, then hardens exactly where struck. Chromium alloys and stainless steels carry corrosion resistance and high-temperature strength (ferritic and martensitic families from Unit II); nickel and its alloys (Monel Ni-Cu for acids and seawater, Inconel Ni-Cr for 900+ degrees C turbine duty, Hastelloy for chemical reactors) own the extreme-temperature and aggressive-media niches.",
              "Worked example: matching duty to alloy in one table row each: crusher jaw - Hadfield Mn steel (work-hardens under impact); aircraft spar - 7075 Al-Zn (strength-to-weight 190 MPa per unit density advantage over steel); ship seawater piping - 90/10 cupro-nickel (biofouling resistance); furnace radiant tube - Inconel 600 (creep and oxidation at 950 degrees C); chemical valve - Monel 400 (acid and alkali resistance). Each choice is a properties-versus-environment decision, and the exam asks for exactly this reasoning, not just the alloy names.",
              "Exam framing: the question is 'describe the properties and applications of aluminium alloys, copper alloys, manganese steel and nickel alloys'. Give each family's defining chemistry, two properties and two applications, and close with the duty-matching examples - the row-by-row justification is what separates a list from an answer.",
            ],
            bullets: [
              "Low-alloy steels: Cr-Ni-Mo for hardenability/toughness; tool steels: C + Cr, W, V for dies and cutting.",
              "Aluminium families: 2xxx (Al-Cu) and 7xxx (Al-Zn) aerospace grades; density 2.7 g/cm^3; no endurance limit.",
              "Brass (Cu-Zn) for formability and corrosion; bronze (Cu-Sn) for bearings; cupro-nickel for seawater.",
              "Hadfield manganese steel (12-14 percent Mn): austenitic, work-hardens under impact - crusher jaws, rail points.",
              "Chromium steels and stainless families carry corrosion resistance and hot strength.",
              "Nickel alloys: Monel (Ni-Cu, acids/seawater), Inconel (Ni-Cr, 900+ degrees C), Hastelloy (chemical reactors).",
            ],
            diagram: {
              kind: "matrix",
              title: "Alloy families on the duty map",
              caption: "Two axes - operating temperature and aggressive media - sort the alloy choices.",
              axes: { x: "Ambient duty -> Hot duty (900+ degrees C)", y: "Benign media -> Aggressive media" },
              quadrants: [
                { label: "Structural steels, Al alloys", note: "ambient, benign - beams, bodies, spars" },
                { label: "Inconel, Hastelloy", note: "hot + aggressive - turbine, reactors" },
                { label: "Brass, bronze, cupro-nickel", note: "ambient + corrosive - marine, bearings" },
                { label: "Tool steels, Hadfield Mn steel", note: "special mechanical duty - wear, impact" },
              ],
            },
            table: {
              caption: "Signature alloys and their duties.",
              headers: ["Alloy", "Chemistry", "Signature property", "Typical application"],
              rows: [
                ["40NiCr2Mo steel", "Ni-Cr-Mo low alloy", "deep hardenability, toughness", "gears, crankshafts"],
                ["7075 aluminium", "Al-Zn-Mg-Cu", "highest Al strength, about 570 MPa", "aircraft structures"],
                ["Cartridge brass 70/30", "Cu-Zn", "deep drawing, corrosion", "cartridge cases, radiators"],
                ["Hadfield Mn steel", "12-14 percent Mn", "work-hardens under impact", "crusher jaws, rail crossings"],
                ["Monel 400", "Ni-Cu 67/30", "acid and seawater resistance", "valves, pump shafts"],
                ["Inconel 600", "Ni-Cr-Fe", "creep and oxidation at 900+ degrees C", "furnace and turbine parts"],
              ],
            },
            callout: {
              type: "tip",
              title: "Hadfield steel's paradox is the exam gem",
              body: "Manganese steel is soft (about 200 HB) as supplied yet wears hardest of all under impact - it work-hardens exactly at the struck surface while staying tough beneath. This 'hardens only where hit' behaviour answers why crusher jaws cannot be replaced by harder tool steels, which would chip. Quote the paradox; it is the standard follow-up.",
            },
            keyTerms: [
              { term: "Age-hardening", definition: "Strengthening by fine precipitates after solution treatment and ageing - Al-Cu, Al-Zn alloys." },
              { term: "Brass / bronze", definition: "Cu-Zn and Cu-Sn alloys - formability/corrosion duty and bearing/marine duty respectively." },
              { term: "Hadfield steel", definition: "12-14 percent Mn austenitic steel that work-hardens under impact." },
              { term: "Monel / Inconel", definition: "Ni-Cu (aggressive media) and Ni-Cr (high temperature) nickel alloy families." },
            ],
            examQuestions: [
              {
                q: "Describe the composition, key properties and applications of (a) aluminium alloys, (b) copper alloys, (c) manganese (Hadfield) steel and (d) nickel alloys such as Monel and Inconel.",
                marks: 14,
                outline: [
                  "Al: 2xxx/7xxx age-hardened, density 2.7, no endurance limit; airframes",
                  "Cu: brass Cu-Zn (formability), bronze Cu-Sn (bearings), cupro-nickel (seawater)",
                  "Hadfield: 12-14 percent Mn austenitic; work-hardens under impact; crusher jaws",
                  "Monel Ni-Cu: acids and seawater; valves, pump shafts",
                  "Inconel Ni-Cr: creep/oxidation at 900+ degrees C; furnace/turbine duty",
                  "Selection is duty-to-property matching, not name recall",
                ],
              },
              {
                q: "Why is Hadfield manganese steel specified for crusher jaws despite its low initial hardness?",
                marks: 7,
                outline: [
                  "Supplied soft (about 200 HB) and tough - resists chipping",
                  "Impact work-hardens the struck surface to 500+ HB",
                  "Hard layer forms exactly where wear occurs; core stays tough",
                  "A pre-hardened tool steel would chip under the same impact",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Chemical Analysis of Metals",
      summary:
        "Unit V reads the recipe: sampling commercial metals for C, Fe, Cr, Ni, Mn, Mg, S, P, Co and Mo; the reagents and equipment of the analytical bench; volumetric (titrimetric) and gravimetric analysis with worked stoichiometry; spot tests for quick field assessment; colorimetric and spectrophotometric analysis on the Beer-Lambert law; and the instrumental methods - spectrophotometers and differential scanning calorimetry - that modern labs add on top.",
      chapter: {
        number: "05",
        title: "Reading the Chemistry",
        intro:
          "Unit V covers chemical analysis of alloying elements in commercial metals, the chemical reagents and equipment used, volumetric and gravimetric analysis, spot tests, colorimetric methods, and optical and spectrophotometric analysis.",
        inOneBreath:
          "Sampling turns a casting into a certified number: volumetric analysis titrates to an equivalence point and back-calculates weight percent; gravimetric analysis weighs an isolated precipitate like Ni-DMG; spot tests answer 'is it there' in a drop; colorimetry reads absorbance against a calibration curve via Beer-Lambert A = epsilon c l; and instrument suites (spectrophotometer, DSC) automate the whole bench.",
        sections: [
          {
            number: "5.1",
            title: "Scope of chemical analysis: elements and sampling",
            body: [
              "Chemical analysis certifies the alloy recipe: carbon, sulphur and phosphorus decide steel grade acceptance (S and P are tightly limited - typically under 0.05 percent each - because they cause hot-short and cold-short behaviour); Cr, Ni, Mo, V define alloy grades; Mn and Si come on every certificate; Mg confirms nodularizing treatment in ductile iron (residual 0.03-0.05 percent); Co and Mo mark tool and heat-resistant grades. The syllabus list - C, Fe, Cr, Ni, Mn, Mg, S, P, Co, Mo - is exactly the certificate vocabulary, and each element has a named wet-method with reagents, or a fast instrument route.",
              "Sampling is where accuracy is won or lost. Drillings or millings are taken from a clean, representative spot - never from an oxidized surface, weld zone or segregate-rich region - degreased, dried and mixed, because a spoonful of turnings must stand for a ten-tonne heat. Iron and steel samples arrive as chips for wet chemistry; carbon and sulphur go to combustion analysers (LECO-type: burn the sample in oxygen, read CO2 and SO2 by IR); the metallic elements go to wet bench or spectrometer. Worked example: a ladle sample of medium-carbon steel analyses C 0.42, S 0.032, P 0.038, Mn 0.85, Si 0.28 percent - every number inside the 45C8 grade band, so the heat releases; one number outside (say P 0.055) rejects a whole heat - the economic weight of one decimal place.",
              "Precision expectations are part of the exam: carbon by combustion to about 0.005 percent absolute, S and P by wet methods to about 0.002, alloying elements by spectrometry to 1-3 percent relative. Wet chemistry remains the referee method in disputes, which is why the syllabus keeps the bench methods alive beside the instruments.",
              "Exam framing: the question is 'why is chemical analysis of metals needed and how are samples taken and prepared'. List the certified elements with one consequence each (S/P limits, Mg for SG iron), describe drilling/turning sampling with the contamination precautions, and quote the ladle-certificate numerical.",
            ],
            bullets: [
              "Certificate elements: C, S, P, Mn, Si on every steel; Cr, Ni, Mo, V, Co on alloy grades.",
              "S and P are defect elements - hot-short and cold-short - limited typically under 0.05 percent.",
              "Residual Mg (0.03-0.05 percent) proves nodularizing in ductile iron.",
              "Sampling: clean drillings/millings, degreased and mixed; avoid scale, welds, segregation.",
              "C and S by combustion-infrared analysers; metals by wet bench or spectrometer.",
              "Worked release: 0.42 C, 0.032 S, 0.038 P, 0.85 Mn, 0.28 Si - all inside grade band.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From heat to certificate",
              caption: "The sampling-and-analysis chain that releases or rejects a steel heat.",
              stages: [
                { label: "Ladle sample", note: "scoop or suction sample from the heat" },
                { label: "Drill / mill", note: "clean turnings, degreased, mixed" },
                { label: "Split the routes", note: "C, S -> combustion analyser; metals -> wet/spectrometer" },
                { label: "Measure", note: "titration, gravimetry, absorbance, IR" },
                { label: "Certify", note: "compare to grade band; release or reject the heat" },
              ],
            },
            table: {
              caption: "Elements on a steel certificate and why each matters.",
              headers: ["Element", "Typical range", "Why it is specified"],
              rows: [
                ["Carbon", "0.05 - 1.0 percent", "strength and hardenability balance"],
                ["Sulphur", "under 0.05 percent", "hot-shortness control (except free-cutting grades)"],
                ["Phosphorus", "under 0.05 percent", "cold-shortness control"],
                ["Manganese", "0.3 - 1.6 percent", "deoxidation, sulphur fixation, strength"],
                ["Chromium / Nickel / Molybdenum", "0.3 - 4 percent", "hardenability, toughness, heat resistance"],
                ["Magnesium (ductile iron)", "0.03 - 0.05 percent", "graphite spheroidizing proof"],
              ],
            },
            callout: {
              type: "tip",
              title: "One decimal rejects ten tonnes",
              body: "The economic framing examiners like: a phosphorus reading of 0.055 against a 0.050 limit rejects a whole ladle - the analysis is not academic chemistry but quality control worth lakhs per heat. Framing answers this way connects the lab to the plant, which is exactly what the syllabus intends.",
            },
            keyTerms: [
              { term: "Hot-shortness", definition: "Cracking during hot working caused by low-melting iron sulphide films - the reason S is limited." },
              { term: "Cold-shortness", definition: "Brittleness at ambient temperature caused by phosphorus - the reason P is limited." },
              { term: "Sampling", definition: "Taking representative clean drillings or turnings standing for the whole heat." },
              { term: "Combustion analyser", definition: "Instrument burning a sample in oxygen to read C (as CO2) and S (as SO2) by infrared." },
            ],
            examQuestions: [
              {
                q: "Explain why chemical analysis of commercial metals is carried out and which elements are routinely certified. Describe the sampling and preparation of a steel sample for analysis, with precautions.",
                marks: 14,
                outline: [
                  "Certificates control grade: C, S, P, Mn, Si and alloy elements",
                  "S and P limited under about 0.05 percent (hot/cold-shortness)",
                  "Mg residual proves nodularizing in ductile iron",
                  "Sample: clean drillings from representative spots",
                  "Precautions: remove scale, avoid weld zones and segregation, degrease, mix",
                  "Route split: C/S combustion; metals wet or spectrometric",
                ],
              },
              {
                q: "A heat analyses 0.42 C, 0.055 P against a grade limit of 0.050 P. Discuss the decision and the economic weight of analytical precision.",
                marks: 7,
                outline: [
                  "Reading exceeds the specification by 0.005 percent",
                  "The heat cannot be certified as that grade - reject or downgrade",
                  "One decimal place decides a ten-tonne ladle's fate",
                  "Hence referee-method wet chemistry and calibrated instruments both matter",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Chemical reagents and equipment of the analytical bench",
            body: [
              "Wet analysis lives on a standard bench inventory. Reagents: acids (HCl for dissolution, HNO3 for oxidizing dissolution, H2SO4, aqua regia for Cr-Ni steels), alkalis (NaOH, ammonia), oxidizing agents (potassium permanganate, potassium persulphate, ammonium persulphate for Mn oxidation; potassium dichromate for Fe titration), reducing agents (oxalic acid, ferrous ammonium sulphate, stannous chloride), precipitating reagents (dimethylglyoxime for Ni, cupferron, 8-hydroxyquinoline), and indicators (phenolphthalein, methyl orange, diphenylamine, ferroin). Each reagent's name-and-role pairing is itself examinable - examiners ask 'which reagent determines which element'.",
              "Equipment: analytical balance (0.1 mg), burettes and pipettes (class A glassware), volumetric flasks, crucibles (porcelain, silica, platinum for gravimetric ignition), muffle furnace (ignitions at 800-1000 degrees C), desiccator (cooling without moisture pickup), Kjeldahl or distillation assemblies, and the spectrophotometer with cuvettes for the colorimetric bench. Special apparatus named in the syllabus: Strauhlin's apparatus for carbon determination by combustion and absorption, and Eggert's method for sulphur - both classic Indian laboratory setups for C and S in steel.",
              "Worked example: the Ni determination bench sheet reads: dissolve 1 g of steel drillings in aqua regia, mask iron with tartaric acid, add ammonium citrate, make ammoniacal, heat to 70 degrees C, add 1 percent dimethylglyoxime - the scarlet Ni(DMG)2 precipitate forms - digest 30 minutes, filter on a sintered crucible, dry at 110-120 degrees C, weigh. Every line names a reagent and a piece of equipment; together they are the answer skeleton for 'describe the determination of nickel'.",
              "Exam framing: the question is 'list the common chemical reagents and equipment used in metallurgical analysis and state the role of each'. Group reagents by function (dissolution, oxidation, reduction, precipitation, indication) and equipment by function (weighing, volumetric, heating, measuring light), and name Strauhlin's and Eggert's apparatus.",
            ],
            bullets: [
              "Dissolution: HCl, HNO3, H2SO4, aqua regia (Cr-Ni steels need the oxidizing mix).",
              "Oxidants: KMnO4, ammonium persulphate (Mn), K2Cr2O7 (Fe titration).",
              "Reductants: oxalic acid, ferrous ammonium sulphate, stannous chloride.",
              "Precipitants: dimethylglyoxime (Ni), cupferron, 8-hydroxyquinoline.",
              "Equipment: 0.1 mg balance, class-A burettes/pipettes, platinum crucibles, muffle furnace, desiccator, spectrophotometer.",
              "Named apparatus: Strauhlin's (carbon), Eggert's method (sulphur).",
            ],
            diagram: {
              kind: "layers",
              title: "The analytical bench in layers",
              caption: "From weighing to light measurement - the equipment stack of wet chemistry.",
              layers: [
                { label: "Weighing layer", note: "analytical balance 0.1 mg; sample and precipitate masses" },
                { label: "Volumetric layer", note: "class-A burettes, pipettes, flasks; titrations and dilutions" },
                { label: "Thermal layer", note: "muffle furnace ignitions, crucibles, desiccator cooling" },
                { label: "Optical layer", note: "spectrophotometer + cuvettes for colorimetry" },
              ],
            },
            table: {
              caption: "Reagents and the elements they serve.",
              headers: ["Reagent", "Function", "Element / determination"],
              rows: [
                ["Aqua regia", "oxidizing dissolution", "sample preparation for Cr-Ni steels"],
                ["Ammonium persulphate", "oxidation", "manganese (to permanganate, then read)"],
                ["Potassium dichromate", "titrant (oxidant)", "iron (Fe2+ -> Fe3+), diphenylamine end point"],
                ["Dimethylglyoxime", "precipitant", "nickel as scarlet Ni(DMG)2"],
                ["Diphenylcarbazide", "color reagent", "chromium (VI) - violet complex"],
                ["Stannous chloride", "reductant", "Fe3+ -> Fe2+ before dichromate titration"],
              ],
            },
            callout: {
              type: "exam",
              title: "Name the reagent, name the element",
              body: "The examiner's fast question format is 'which reagent is used for nickel?' - answer dimethylglyoxime (scarlet precipitate); 'for manganese?' - ammonium persulphate oxidation to purple permanganate; 'for chromium?' - diphenylcarbazide violet. Learning the six reagent-element pairs earns more marks than any general essay on reagents.",
            },
            keyTerms: [
              { term: "Aqua regia", definition: "3:1 HCl:HNO3 - the oxidizing acid mix that dissolves stainless steels." },
              { term: "Dimethylglyoxime (DMG)", definition: "The specific precipitant for nickel, forming scarlet Ni(DMG)2." },
              { term: "Strauhlin's apparatus", definition: "Classic combustion-absorption setup for carbon determination in steel." },
              { term: "Muffle furnace", definition: "Enclosed furnace for crucible ignitions at 800-1000 degrees C." },
            ],
            examQuestions: [
              {
                q: "List the principal chemical reagents used in metallurgical analysis, grouped by function, and name the equipment of a wet-analysis bench with the role of each item.",
                marks: 14,
                outline: [
                  "Dissolution: HCl, HNO3, aqua regia for alloy steels",
                  "Oxidants: KMnO4, persulphates; Reductants: SnCl2, oxalic acid",
                  "Precipitants: DMG (Ni), cupferron; Indicators: ferroin, diphenylamine",
                  "Balance 0.1 mg for sample and precipitate masses",
                  "Class-A burettes/pipettes/flasks for titration and dilution",
                  "Muffle furnace, crucibles, desiccator for ignition; spectrophotometer for colorimetry",
                ],
              },
              {
                q: "State the use of Strauhlin's apparatus and Eggert's method in steel analysis.",
                marks: 7,
                outline: [
                  "Strauhlin's: combustion of steel sample in oxygen, CO2 absorbed and measured - carbon percent",
                  "Eggert's method: combustion/absorption route for sulphur determination",
                  "Both are classic wet-bench alternatives to modern IR combustion analysers",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Volumetric (titrimetric) analysis",
            body: [
              "Volumetric analysis measures an element by the volume of a standard reagent consumed at an equivalence point. The workflow: dissolve a weighed sample, convert the analyte to the reacting form, titrate with a standard solution to an indicator end point, and back-calculate from stoichiometry: weight percent = (normality × volume × equivalent weight × 100) / sample weight (with units consistent). Standardization of the titrant against a primary standard (oxalic acid for KMnO4, potassium dichromate is itself primary) is the first line of every procedure.",
              "The steel bench's standard titrations: iron by potassium dichromate (SnCl2 reduces Fe3+ to Fe2+, HgCl2 removes excess SnCl2, then Cr2O7^2- titrates Fe2+ with diphenylamine or ferroin end point), manganese by persulphate-arsenite or by ammonium persulphate oxidation to permanganate followed by ferrous-sulphate back-titration, and chromium by oxidizing Cr3+ to dichromate and titrating with standard ferrous ammonium sulphate. Worked example: 1.0000 g of steel, Fe titration consumes 38.50 mL of 0.1000 N K2Cr2O7: Fe percent = (0.1000 × 38.50 × 55.85 × 100)/(1000 × 1.0000) with milliequivalent arithmetic = 0.1 × 38.5 × 55.85/1000 = 0.2150 g Fe, that is 21.50 percent - a cast-iron or high-alloy reading, with every intermediate visible for the examiner.",
              "Accuracy discipline: class-A glassware (a 50 mL burette reads to 0.05 mL), temperature correction for standardization, indicator blanks subtracted, and duplicate titrations agreeing within 0.1 mL. Worked to these disciplines, volumetric methods reach 0.1-0.5 percent relative accuracy - sufficient for alloy certification and fast enough for ladle control.",
              "Exam framing: the question is 'explain volumetric analysis and describe the determination of iron or manganese in steel with the reaction and computation'. Give the standardization step, the redox reactions in ionic form, the end-point indicator, and the full weight-percent computation.",
            ],
            bullets: [
              "Volumetric analysis: analyte measured by standard-solution volume at an indicator end point.",
              "Weight percent = N × V × equivalent weight × 100 / sample mass (consistent units).",
              "Iron: SnCl2 reduction, dichromate titration, diphenylamine/ferroin end point.",
              "Manganese: persulphate oxidation to permanganate, back-titration or direct reading.",
              "Chromium: oxidize Cr3+ to dichromate, titrate with ferrous ammonium sulphate.",
              "Worked: 38.50 mL of 0.1000 N dichromate on 1 g gives 21.50 percent Fe.",
            ],
            diagram: {
              kind: "flow",
              title: "One titration, end to end",
              caption: "The volumetric workflow from weighed chips to a certified percentage.",
              steps: [
                { label: "Weigh sample", note: "1.0000 g of drillings" },
                { label: "Dissolve and adjust", note: "acid dissolution; redox pre-treatment" },
                { label: "Titrate", note: "standard solution from class-A burette" },
                { label: "End point", note: "indicator colour change; volume read" },
                { label: "Compute", note: "stoichiometry -> weight percent" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "titration.py - iron percent from dichromate volume",
              code: `N = 0.1000          # normality of K2Cr2O7
V = 38.50           # mL used
eq_wt_Fe = 55.85    # g/equivalent (z = 1 for Fe2+ -> Fe3+)
mass = 1.0000       # g sample

fe_g = N * V * eq_wt_Fe / 1000      # milliequivalent arithmetic
fe_pct = fe_g / mass * 100
print(f"Fe = {fe_pct:.2f} percent")    # 21.50`,
            },
            callout: {
              type: "warning",
              title: "The equivalence factor is where marks die",
              body: "In redox titrations each element carries its own equivalent weight - Fe(II) to Fe(III) is z = 1 so 55.85; Mn(II) to Mn(VII) is z = 5 so 10.99. Using the atomic weight instead of the equivalent weight silently multiplies the answer by the valence change - the single most common error in volumetric numericals. Write the half-reaction before the arithmetic.",
            },
            keyTerms: [
              { term: "Standard solution", definition: "Reagent solution of exactly known normality, made from a primary standard." },
              { term: "End point", definition: "Indicator colour change marking (approximately) the stoichiometric equivalence point." },
              { term: "Equivalent weight", definition: "Atomic (or molecular) weight divided by electrons exchanged - z-dependent in redox titrations." },
              { term: "Back-titration", definition: "Adding excess reagent then titrating the remainder - used when direct reaction is slow." },
            ],
            examQuestions: [
              {
                q: "Explain volumetric analysis with its governing calculation. Describe the determination of iron in steel by the dichromate method - pre-treatment, reaction, indicator - and compute the percentage for 1.0000 g of sample consuming 38.50 mL of 0.1000 N K2Cr2O7.",
                marks: 14,
                outline: [
                  "Principle: standard-solution volume at end point -> stoichiometry -> percent",
                  "SnCl2 reduces Fe3+ to Fe2+; excess removed with HgCl2",
                  "Cr2O7^2- + 6Fe2+ + 14H+ -> 2Cr3+ + 6Fe3+ + 7H2O",
                  "Diphenylamine or ferroin end point",
                  "Fe g = 0.1000 × 38.50 × 55.85/1000 = 0.2150 g",
                  "Fe percent = 21.50",
                ],
              },
              {
                q: "Why must the equivalent weight rather than the atomic weight be used in redox titration calculations? Illustrate with manganese.",
                marks: 7,
                outline: [
                  "Normality counts equivalents - electrons exchanged, not atoms",
                  "Mn(II) -> Mn(VII) exchanges 5 electrons: equivalent weight = 54.94/5 = 10.99",
                  "Using 54.94 would overstate Mn by a factor of 5",
                  "Write the half-reaction first; the factor follows",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Gravimetric analysis",
            body: [
              "Gravimetric analysis measures an element by weighing an isolated, pure, stoichiometric compound of it. The workflow: dissolve a weighed sample, selectively precipitate the analyte (completeness matters - excess precipitant, right pH, digestion), filter (sintered crucible or ashless paper), wash free of mother liquor, dry or ignite to constant mass, and compute from the precipitate's known composition. The method is slow but absolute - no standard solution, no calibration curve - which is why it remains the referee method in standard disputes.",
              "The steel bench's classic gravimetries: nickel as scarlet Ni(DMG)2 (dried at 110-120 degrees C; Ni is 20.31 percent of the compound), copper as CuSCN or by electrodeposition (the electrogravimetric variant weighs the plated metal directly), chromium by precipitation after oxidation, and sulphur as barium sulphate from combustion-absorbed SO2. Worked example: 1.0000 g of steel yields 0.1856 g of Ni(DMG)2. Nickel = 0.1856 × 0.2031 = 0.0377 g, that is 3.77 percent Ni - a maraging or high-Ni alloying level, computed in two lines from one weighing.",
              "The method's pitfalls are precipitation quality: co-precipitation of impurities inflates the mass (mask iron with tartaric/citric acid before DMG), peptization on washing (wash with dilute electrolyte, not pure water), and incomplete drying (weigh to constant mass - successive weighings agreeing within 0.2 mg). Each pitfall has a named remedy, and examiners ask for exactly those pairs.",
              "Exam framing: the question is 'explain gravimetric analysis and describe the determination of nickel with dimethylglyoxime, including the computation'. Give the requirements of a good precipitate, the full procedure with pH and masking notes, the Ni fraction in Ni(DMG)2, and the two-line calculation.",
            ],
            bullets: [
              "Gravimetric analysis: analyte weighed as an isolated pure compound - absolute, no standards.",
              "Requirements: selective, complete, filterable, stoichiometric precipitate.",
              "Nickel: scarlet Ni(DMG)2 at ammoniacal pH, iron masked with citrate/tartrate, dry at 110-120 degrees C.",
              "Ni is 20.31 percent of Ni(DMG)2 - the conversion factor for the computation.",
              "Worked: 0.1856 g precipitate from 1 g steel = 0.0377 g Ni = 3.77 percent.",
              "Pitfalls and remedies: co-precipitation (masking), peptization (electrolyte wash), moisture (constant mass).",
            ],
            diagram: {
              kind: "flow",
              title: "The gravimetric chain",
              caption: "From weighed drillings to a weighed precipitate - purity at every link.",
              steps: [
                { label: "Weigh sample", note: "1.0000 g drillings" },
                { label: "Dissolve + mask", note: "aqua regia; citrate masks iron" },
                { label: "Precipitate", note: "ammoniacal; add 1 percent DMG; scarlet forms" },
                { label: "Digest, filter, wash", note: "sintered crucible; electrolyte wash" },
                { label: "Dry to constant mass", note: "110-120 degrees C; weigh" },
                { label: "Compute", note: "mass × (Ni fraction in compound) / sample" },
              ],
            },
            callout: {
              type: "tip",
              title: "Constant mass is the acceptance test",
              body: "'Dry or ignite to constant mass' means successive weighings after further drying agree within about 0.2 mg - the operational definition that all moisture is gone. Examiners probe the phrase: quoting the 0.2 mg criterion shows you have actually performed a gravimetric determination rather than read about one.",
            },
            keyTerms: [
              { term: "Precipitation", definition: "Selective formation of an insoluble compound of the analyte for weighing." },
              { term: "Digestion", definition: "Holding the precipitate in contact with the mother liquor so particles grow and purify." },
              { term: "Co-precipitation", definition: "Unwanted impurities carried down with the precipitate - controlled by masking agents." },
              { term: "Constant mass", definition: "Successive weighings agreeing within about 0.2 mg after further drying/ignition." },
            ],
            examQuestions: [
              {
                q: "Explain gravimetric analysis and its requirements of a good precipitate. Describe the determination of nickel in steel using dimethylglyoxime and compute the nickel percentage when 1.0000 g of steel yields 0.1856 g of Ni(DMG)2 (Ni = 20.31 percent of the compound).",
                marks: 14,
                outline: [
                  "Principle: isolate, purify, weigh - absolute method, no standards",
                  "Good precipitate: selective, complete, filterable, stoichiometric",
                  "Procedure: aqua regia dissolve, citrate masks Fe, ammoniacal DMG, scarlet precipitate",
                  "Digest, filter, wash with electrolyte, dry 110-120 degrees C to constant mass",
                  "Ni = 0.1856 × 0.2031 = 0.0377 g",
                  "Ni percent = 3.77",
                ],
              },
              {
                q: "Why is the precipitate washed with dilute electrolyte rather than pure water, and why is iron masked before adding DMG?",
                marks: 7,
                outline: [
                  "Pure water peptizes the precipitate - particles pass through the filter",
                  "Dilute electrolyte coagulates the precipitate and reduces loss",
                  "Iron co-precipitates with DMG and inflates the nickel mass",
                  "Citrate/tartrate complexing keeps iron in solution - purity protected",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Spot tests for quick assessment",
            body: [
              "Spot tests answer 'is this element present, roughly how much' in minutes, using a drop of test solution on filter paper or a porcelain spot plate with a specific colour reagent. They are the shop floor's triage: sorting mixed stock, checking incoming material, screening before full analysis. Each element has a signature reaction: nickel - dimethylglyoxime gives a scarlet-red spot; manganese - oxidized with persulphate/silver catalyst to purple permanganate; chromium (VI) - diphenylcarbazide gives a violet spot; molybdenum - xanthate or thiocyanate reaction; magnesium - titan yellow gives a red lake; sulphur in steel - the sulphide-print test (silver-bromide paper darkening over a polished surface).",
              "The technique is as much about control as chemistry: run a blank (reagent without analyte) and a known standard alongside every unknown, keep reagent freshness (DMG and carbazide solutions age), and interpret only colour presence versus intensity - spot tests are qualitative to semi-quantitative (comparing the unknown's shade against a series of standards gives about 0.1-1 percent accuracy). Worked example: two unmarked bar stocks are sorted in five minutes: one gives a strong scarlet spot with DMG (nickel-bearing alloy steel), the other none - the nickel steel goes to the correct heat-treatment lot, and the mix-up that would have scrapped a batch is caught at the rack.",
              "Spot tests do not replace certification - they de-risk it. The syllabus's phrase 'quick assessment of alloying elements like Mn, Cr, Ni' is exactly this triage role, and the examiner's question expects the reagent-colour-element triads plus the blank-and-standard discipline.",
              "Exam framing: the question is 'what are spot tests and how are they used for quick assessment of Mn, Cr and Ni'. Define the technique, tabulate the reagent-colour-element triads, describe the blank/standard control practice, and give the stock-sorting example as the applied case.",
            ],
            bullets: [
              "Spot test: one drop of test solution + specific reagent -> characteristic colour on paper/plate.",
              "Ni: DMG scarlet-red. Mn: persulphate-oxidized purple permanganate. Cr(VI): diphenylcarbazide violet.",
              "Mo: thiocyanate red; Mg: titan yellow red lake; S in steel: sulphide print with AgBr paper.",
              "Semi-quantitative: compare spot intensity against standard colour series (about 0.1-1 percent).",
              "Discipline: run blank and known standard with every unknown; fresh reagents.",
              "Role: triage - sorting stock and screening heats, not certification.",
            ],
            diagram: {
              kind: "compare",
              title: "Spot test versus full analysis",
              caption: "Minutes and a drop versus hours and a balance - different jobs.",
              left: {
                heading: "Spot test",
                items: [
                  "Minutes, one drop, filter paper",
                  "Qualitative to semi-quantitative",
                  "Sorting and screening at the rack",
                  "No certification value - triage only",
                ],
              },
              right: {
                heading: "Full analysis",
                items: [
                  "Hours, weighed sample, standards",
                  "Quantitative to 0.1-0.5 percent relative",
                  "Certifies the heat against specification",
                  "Referee method in disputes",
                ],
              },
            },
            table: {
              caption: "Spot-test triads to memorize.",
              headers: ["Element", "Reagent", "Colour"],
              rows: [
                ["Nickel", "dimethylglyoxime (ammoniacal)", "scarlet red"],
                ["Manganese", "persulphate + silver nitrate", "purple (permanganate)"],
                ["Chromium (VI)", "diphenylcarbazide", "violet"],
                ["Molybdenum", "thiocyanate + stannous chloride", "red-orange"],
                ["Magnesium", "titan yellow + alkali", "red lake"],
                ["Sulphur (print)", "silver bromide paper", "dark brown"],
              ],
            },
            callout: {
              type: "exam",
              title: "Blank and standard - the two controls",
              body: "Every spot-test answer should include the control pair: a blank (reagent plus pure solvent) proving the colour comes from the sample, and a standard (known concentration) anchoring the intensity comparison. Examiners read these two words as evidence of laboratory practice rather than textbook recall.",
            },
            keyTerms: [
              { term: "Spot test", definition: "Rapid qualitative/semi-quantitative element test from one drop and a colour reagent." },
              { term: "Sulphide print", definition: "AgBr paper darkening over a polished steel surface - locating sulphur segregation." },
              { term: "Blank", definition: "Control run without analyte to prove the colour response is real." },
              { term: "Colour series", definition: "Set of standards whose shades bracket the unknown's concentration." },
            ],
            examQuestions: [
              {
                q: "What are spot tests? Describe their use for quick assessment of nickel, manganese and chromium, giving reagent and colour for each, and explain the control practice that makes the results reliable.",
                marks: 14,
                outline: [
                  "Spot test: drop of test solution + reagent -> colour on paper/plate",
                  "Ni: DMG, scarlet red",
                  "Mn: persulphate oxidation, purple permanganate",
                  "Cr(VI): diphenylcarbazide, violet",
                  "Semi-quantitative by comparison with a colour series",
                  "Controls: blank + known standard with every unknown; fresh reagents",
                ],
              },
              {
                q: "How would you sort two unmarked alloy-steel bars suspected to be one nickel steel and one plain carbon steel in the stores?",
                marks: 7,
                outline: [
                  "File off clean turnings from each bar",
                  "Dissolve a few chips in dilute acid - two drops of test solution",
                  "Add ammoniacal DMG: scarlet spot identifies the nickel steel",
                  "Confirm blank stays colourless; sort and label accordingly",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Colorimetric and spectrophotometric analysis",
            body: [
              "Colorimetry measures concentration through the intensity of a coloured solution: the analyte is converted to a coloured complex and its absorbance read against a calibration curve built from standards of known concentration. The governing law is Beer-Lambert: A = log(I0/I) = epsilon c l - absorbance proportional to concentration c and path length l, with epsilon the molar absorptivity. The spectrophotometer supplies monochromatic light (prism or grating through the visible-UV range), a cuvette of fixed path (1 cm standard), and a detector reading I relative to a blank.",
              "The steel bench's colorimetric determinations: manganese (oxidized to purple permanganate, read near 525 nm), chromium (diphenylcarbazide violet complex, near 540 nm), phosphorus (molybdenum-blue, near 700-830 nm), silicon (molybdsilicic acid reduced to molybdenum blue), nickel (bromine-oxidized DMG complex or dimethylglyoxime colorimetric variant). Worked example: a manganese determination on 0.5000 g of steel dissolved and diluted to 100 mL gives absorbance 0.35 at 525 nm against a 1 cm cuvette. From the calibration slope (epsilon-l effective = 8,000 L/mol per cm), c = 0.35/8000 = 4.38e-5 mol/L; converting through the dilution and Mn's atomic weight (54.94) gives Mn in solution = 4.38e-5 × 0.1 × 54.94 = 2.41e-4 g, that is 0.048 percent Mn - the spectrophotometer certifying a low-alloy value in minutes.",
              "Method discipline: the calibration curve must bracket the unknown (never extrapolate), the blank subtracts reagent colour, the wavelength is set at the complex's absorption maximum, and interfering colours are masked or separated. With those disciplines, colorimetry reaches 1-2 percent relative accuracy at trace levels where titration is too coarse - the reason it owns the P, Si and low-Mn determinations.",
              "Exam framing: the question is 'explain the colorimetric/spectrophotometric method with the Beer-Lambert law and a worked determination'. State the law with its terms, describe calibration-curve practice, and run the manganese numerical end to end - the unit-conversion chain (absorbance -> molarity -> mass -> percent) is the examined core.",
            ],
            bullets: [
              "Colorimetry: coloured complex + absorbance read against a calibration curve of standards.",
              "Beer-Lambert: A = log(I0/I) = epsilon c l - linear in concentration and path length.",
              "Spectrophotometer: monochromator, cuvette (1 cm), detector; wavelength at the absorption maximum.",
              "Bench determinations: Mn (525 nm), Cr (540 nm), P (molybdenum blue), Si, Ni.",
              "Worked: A = 0.35, effective epsilon-l 8000 -> Mn about 0.048 percent.",
              "Disciplines: bracket with standards, subtract blank, mask interferences, never extrapolate.",
            ],
            diagram: {
              kind: "flow",
              title: "One absorbance reading to a percentage",
              caption: "The colorimetric chain from weighed sample to certified value.",
              steps: [
                { label: "Dissolve and develop colour", note: "convert analyte to its coloured complex" },
                { label: "Set wavelength", note: "at the complex's absorption maximum" },
                { label: "Read absorbance", note: "spectrophotometer vs blank, 1 cm cuvette" },
                { label: "Calibration curve", note: "A vs concentration from standards" },
                { label: "Compute", note: "c from A; dilution + atomic weight -> percent" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "beer.py - Mn percent from absorbance",
              code: `A = 0.35
eps_l = 8000.0        # effective epsilon*path (L/mol per cm)
c = A / eps_l         # mol/L of Mn in the measured solution

volume = 0.100        # L (100 mL flask)
M_mn = 54.94          # g/mol
mass_mn = c * volume * M_mn     # g of Mn in solution
sample = 0.5000       # g of steel
print(f" Mn = {mass_mn/sample*100:.3f} percent")   # 0.048`,
            },
            callout: {
              type: "warning",
              title: "Beer-Lambert fails at high absorbance",
              body: "The linear law holds only in a working band - beyond absorbance about 1.0, stray light and chemical effects bend the curve. Practice: dilute the sample so A falls between about 0.1 and 0.9, and always verify linearity with the standards. Quoting the working-band rule answers the classic 'when does Beer's law break down' follow-up.",
            },
            keyTerms: [
              { term: "Beer-Lambert law", definition: "A = epsilon c l - absorbance linear in concentration and optical path." },
              { term: "Calibration curve", definition: "Absorbance versus concentration plot from standards; the unknown is read inside its range." },
              { term: "Molybdenum blue", definition: "Reduced phosphomolybdate complex - the classical colorimetric form for phosphorus." },
              { term: "Absorption maximum", definition: "The wavelength of peak absorbance of the complex - where the spectrophotometer is set." },
            ],
            examQuestions: [
              {
                q: "State the Beer-Lambert law and explain the colorimetric determination of an alloying element. A 0.5000 g steel sample, diluted to 100 mL, gives A = 0.35 with effective epsilon-l = 8000 L/mol cm at 525 nm. Compute the manganese percentage.",
                marks: 14,
                outline: [
                  "A = log(I0/I) = epsilon c l; linear in c and path length",
                  "Procedure: coloured complex, set lambda at maximum, read vs blank",
                  "Calibration curve from standards brackets the unknown",
                  "c = 0.35/8000 = 4.38e-5 mol/L",
                  "Mass Mn = 4.38e-5 × 0.100 × 54.94 = 2.41e-4 g",
                  "Mn percent = 2.41e-4/0.5000 × 100 = 0.048",
                ],
              },
              {
                q: "Why must the unknown's absorbance fall inside the calibration range, and what is done when it does not?",
                marks: 7,
                outline: [
                  "Beer-Lambert is linear only in a working band (about 0.1-0.9 A)",
                  "Outside it, stray light and chemistry bend the response - extrapolation is invalid",
                  "Remedy: dilute (or concentrate) the solution and re-read",
                  "Standards must bracket every unknown - never fit beyond the data",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Instrumental methods: spectrometers, DSC and the modern bench",
            body: [
              "Modern laboratories automate the wet bench with instruments. Optical emission spectrometry (spark OES): a spark vaporizes the sample; each element emits characteristic lines whose intensities give the whole alloy composition in under a minute - the ladle-shop standard for Cr, Ni, Mo, Mn, Si, Cu and trace elements. X-ray fluorescence (XRF): primary X-rays excite secondary fluorescence at element-specific energies - non-destructive, excellent for alloys and coatings. Atomic absorption (AAS) and ICP spectrometry: dissolved samples aspirated into flame or plasma, absorption/emission read element by element - trace-level accuracy. Carbon and sulphur keep their combustion route: burn in oxygen, read CO2/SO2 by infrared - the modern successors of Strauhlin's and Eggert's apparatus.",
              "Differential scanning calorimetry (DSC) brings thermal analysis to the bench: a sample and reference are heated identically while the instrument records the differential heat flow; phase changes appear as endothermic or exothermic peaks. Steel DSC shows the Curie transition (about 770 degrees C, magnetic change) and transformation events; aluminium-alloy DSC maps precipitation and melting; polymer DSC gives glass transition and melting points. Worked example: an aluminium alloy's DSC on heating shows an exothermic peak near 250 degrees C (precipitation) and an endothermic dip near 540 degrees C (melting onset) - the heat-treatment window and the solidus read in one scan, which is exactly how solution-treatment schedules are validated.",
              "The integrated bench now runs: spark OES for the alloy recipe, combustion IR for C/S, XRF for verification and coatings, AAS/ICP for traces, plus DSC for thermal events - with wet chemistry retained as the referee. The exam framing asks you to name the instruments, their physical principles and their best applications, and to say why wet methods survive as arbiters.",
              "Exam framing: the question is 'describe the instrumental methods of analysis - spectrophotometry, OES, XRF, DSC - with principles and applications, and explain the continued role of wet chemical methods'. One paragraph per instrument (principle, what it reads, where it wins), the DSC peak interpretation, and the referee-method closing sentence.",
            ],
            bullets: [
              "Spark OES: element-specific emission lines from a spark - whole alloy recipe in under a minute.",
              "XRF: element-specific secondary X-ray fluorescence - non-destructive verification.",
              "AAS/ICP: flame or plasma reading of dissolved samples - trace-level accuracy.",
              "C and S: combustion in oxygen with infrared CO2/SO2 reading - modern Strauhlin/Eggert.",
              "DSC: differential heat flow vs temperature - peaks mark precipitation, Curie point, melting.",
              "Wet chemistry survives as the referee method in specification disputes.",
            ],
            diagram: {
              kind: "layers",
              title: "The integrated analytical bench",
              caption: "Layered instruments, each owning a measurement class.",
              layers: [
                { label: "Recipe layer - spark OES", note: "full alloy composition in under a minute" },
                { label: "C/S layer - combustion IR", note: "CO2 and SO2 read directly; LECO-type" },
                { label: "Verification layer - XRF", note: "non-destructive checks and coatings" },
                { label: "Trace layer - AAS / ICP", note: "ppm-level elements in dissolved samples" },
                { label: "Thermal layer - DSC", note: "phase-change peaks; heat-treatment windows" },
              ],
            },
            table: {
              caption: "Instrument, principle, best use.",
              headers: ["Instrument", "Physical principle", "Best application"],
              rows: [
                ["Spark OES", "element emission lines from spark-excited atoms", "ladle-shop alloy certification"],
                ["Combustion IR (LECO)", "burn in O2, read CO2/SO2 by infrared", "carbon and sulphur in steel"],
                ["XRF", "element-specific fluorescent X-rays", "non-destructive alloy/coating checks"],
                ["AAS / ICP", "atom absorption/emission in flame/plasma", "trace elements at ppm level"],
                ["DSC", "differential heat flow vs temperature", "transformation peaks, melting, Tg"],
              ],
            },
            callout: {
              type: "tip",
              title: "Why wet chemistry survives as referee",
              body: "Instruments are faster but inherit calibrations, matrix effects and standards traceable in the end to wet chemical values. Standard specifications therefore keep gravimetric/volumetric methods as the dispute arbiter. One sentence on this hierarchy - instruments for speed, wet methods for truth - closes the instrumental-methods answer at full marks.",
            },
            keyTerms: [
              { term: "Spark OES", definition: "Optical emission spectrometry - element identification and quantification from spark-excited line spectra." },
              { term: "XRF", definition: "X-ray fluorescence - element-specific secondary radiation for non-destructive composition checks." },
              { term: "DSC", definition: "Differential scanning calorimetry - heat-flow peaks revealing phase transformations and melting." },
              { term: "Referee method", definition: "The standard wet-chemical procedure against which instrument calibrations and disputes are settled." },
            ],
            examQuestions: [
              {
                q: "Describe the principal instrumental methods of metallurgical analysis - spark OES, combustion IR, XRF, AAS/ICP and DSC - with their physical principles and best applications. Why do wet chemical methods remain in use?",
                marks: 14,
                outline: [
                  "OES: emission line spectra from a spark; full alloy recipe, ladle shop",
                  "Combustion IR: O2 burn, CO2/SO2 read; C and S certification",
                  "XRF: fluorescent secondary X-rays; non-destructive verification",
                  "AAS/ICP: flame/plasma atom spectroscopy; trace ppm elements",
                  "DSC: differential heat flow; precipitation/Curie/melting peaks",
                  "Wet methods survive as referee standards behind all instrument calibrations",
                ],
              },
              {
                q: "How does a DSC scan help set the heat-treatment schedule of an aluminium alloy?",
                marks: 7,
                outline: [
                  "Exothermic peak marks precipitation reactions - the ageing window",
                  "Endothermic dip marks melting onset - the solidus ceiling",
                  "Solution-treatment temperature is set safely below the solidus",
                  "One scan maps the whole thermal-processing window",
                ],
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
      weightedTopics: [
        { topic: "Iron-carbon diagram, lever rule, steels and cast irons", weight: "about 14 marks", note: "The diagram sketch is the guarantee mark; practise it under two minutes." },
        { topic: "Heat treatment: annealing, normalizing, hardening, tempering, TTT", weight: "about 14 marks", note: "One treatment numerical plus the transformation-product ladder." },
        { topic: "Surface and thermochemical treatments", weight: "about 10 marks", note: "Flame/induction/laser vs carburizing/nitriding comparison tables." },
        { topic: "Testing: tensile, hardness, impact, fatigue, Jominy", weight: "about 12 marks", note: "Numericals are formula-driven: HV = 1.854 F/d^2, MOR, DBTT, corrected endurance." },
        { topic: "Solidification, crystallography, mechanical properties", weight: "about 10 marks", note: "APF computations, Miller indices, stress-strain curve reading." },
        { topic: "NDT methods and fracture analysis", weight: "about 8 marks", note: "The method-ownership table - which flaw, which instrument." },
        { topic: "Chemical analysis: volumetric, gravimetric, spot, colorimetric", weight: "about 8 marks", note: "Two-line computations (Ni-DMG, Beer-Lambert) and reagent-element pairs." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for diagram practice. This subject is picture-heavy: the Fe-C diagram, TTT curves, Jominy apparatus and stress-strain curve must be drawable from memory before Week 4.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - structure and properties", tasks: ["Solidification, nucleation, grain size", "BCC/FCC/HCP with APF computations; Miller indices", "Stress-strain curve reading; yield/UTS numerical", "Hardness/ductility/malleability definitions", "Creep curve and fatigue S-N curve sketches"] },
        { week: "Week 2", focus: "Unit II - phase diagrams", tasks: ["Cooling curves + phase rule with F computations", "Isomorphous vs eutectic; lever rule numericals", "Eutectoid/peritectic reactions with Fe-C examples", "Full Fe-C diagram sketch drill (daily)", "Cast iron family table; TTT diagram products", "Stainless families + anelastic/viscoelastic definitions"] },
        { week: "Week 3", focus: "Unit III - heat treatment", tasks: ["Critical temperatures and cycle parameters", "Annealing types; normalizing vs annealing contrast", "Spheroidizing mechanism; hardening + tempering bands", "Product ladder: pearlite to martensite with hardness", "Surface treatments: flame/induction/laser depths", "Thermochemical table: carburize/cyanide/nitride; metallography + ASTM grain size"] },
        { week: "Week 4", focus: "Unit IV - testing", tasks: ["Tensile test numerical (MS specimen)", "Compression/shear/bend formulas; CI asymmetry", "Hardness tests + HV computation", "Charpy/Izod + DBTT curve", "S-N curve + modifier computation", "Jominy procedure + curves; NDT ownership table; alloy families"] },
        { week: "Week 5", focus: "Unit V - chemical analysis", tasks: ["Certificate elements and sampling precautions", "Reagent-element pairs (six triads)", "Dichromate titration with equivalent-weight arithmetic", "Ni-DMG gravimetry with 20.31 percent factor", "Spot-test triads; Beer-Lambert computation", "Instrument suite: OES, XRF, DSC roles"] },
        { week: "Week 6", focus: "Revision and timed practice", tasks: ["Redraw the master set: Fe-C diagram, TTT, Jominy, creep curve, S-N curve, DBTT curve", "Drill the numbers: APF 0.74/0.68, DBTT criterion 27-40 J, 550 HV case depth, Ni = 20.31 percent of DMG compound", "Two full papers under 3-hour timing", "Error log rewritten same day; one-breath recaps recited"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Lead every metallurgy answer with its sketch: Fe-C diagram, TTT curve, cooling curve, Jominy apparatus, stress-strain curve. Diagrams carry named marks.",
        "Quote the three magic numbers of the lever rule - 0.02, 0.8, 6.67 percent C - and the three invariant temperatures: 1495, 1130, 723 degrees C.",
        "For treatment questions, give temperature + time + cooling medium; a treatment without all three is incomplete.",
        "In testing numericals, write the formula before substituting: HV = 1.854 F/d^2, MOR = 3FL/(2bd^2), E = mg(h1 - h2).",
        "For NDT, answer 'which method and why' with the ownership table - internal flaws UT, surface steel MPI, surface non-magnetic DP.",
        "In chemical-analysis numericals, write the equivalent weight logic (z factor) and the Ni = 20.31 percent conversion explicitly.",
        "Connect properties to structure in one closing sentence - 'fine grains, more boundaries, higher strength' - it earns the application mark.",
        "Time-box: 14-mark questions about 25 minutes; 7-mark questions about 12 minutes; sketches first, prose after.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Recite the five unit one-breath recaps aloud; vague paraphrases are tonight's targets.",
        "Redraw the master set from memory: Fe-C diagram with all letters, TTT S-curve with products, Jominy apparatus + curves, creep and S-N curves, DBTT curve, ORSAT-style NDT decision fork.",
        "Drill the number set: APF 0.74/0.68, eutectoid 0.8 percent C at 723 degrees C, cementite 6.67, Ms about 220 degrees C for eutectoid, 550 HV effective case, Ni 20.31 percent of Ni(DMG)2, ASTM N = 2^(n-1).",
        "Rehearse the two computation templates: lever-rule fractions and Beer-Lambert absorbance-to-percent.",
        "Rewrite the comparison tables once each: cast irons, stainless families, anneals, surface treatments, thermochemical treatments, hardness tests, NDT methods.",
        "Skim your error log; do not open new material today.",
        "Prepare the constants card: E for steel 200 GPa, density of Al 2.7 g/cm^3, 27-40 J DBTT criterion, 0.5 UTS endurance rule.",
        "Sleep on schedule; diagram accuracy dies at 3 a.m.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Drawing the Fe-C diagram without the A3 and Acm letters - the heat-treatment questions hang on them.",
        "Confusing hardenability with hardness - depth is alloying's job, level is carbon's job.",
        "Applying the lever rule with the alloy composition on the wrong side - always sketch the tie line first.",
        "Using atomic weight instead of equivalent weight in redox titrations - the z factor decides the answer.",
        "Treating Charpy joules as a design stress - they are a comparative index, not an allowable stress.",
        "Saying nitriding needs a quench - it forms nitrides below A1; no quench is its whole advantage.",
        "Mixing the two meanings of troostite without acknowledging both - the examiner set the trap deliberately.",
        "Forgetting the blank and standard in spot-test answers - the control pair is the reliability mark.",
      ],
    },
  ],
};
