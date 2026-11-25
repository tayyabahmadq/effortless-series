/**
 * Academics - RGPV Civil Engineering 8th-semester subject: CE-802(C) Bridge Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce802c: AcademicSubject = {
  id: "ce-802-c",
  code: "CE-802(C)",
  title: "Bridge Engineering",
  semester: "VIII Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to bridges for civil engineers: components and classification, IRC loading standards, superstructure analysis from Courbon's to grillage, bearings and substructure design, and the construction, inspection and management of the Indian bridge stock.",
  description:
    "Five units walk from the anatomy and classification of bridges - slab, girder, truss, arch and cable forms - through the IRC:6 loading standards with impact, braking, centrifugal, wind, seismic and temperature forces and their combinations, into superstructure analysis by Courbon's, Pigeaud's and grillage methods and the design of deck slabs, T-beams, box girders, composite decks and trusses, then down through bearings, piers, abutments, wing walls and well foundations, and finally across construction methods - staging, precast launching and steel erection - and the inspection, NDT, retrofitting, load rating and bridge management systems that keep the network alive. Every section pairs the theory with a redrawable diagram, a worked number or table, and the exam questions RGPV actually asks.",
  accentColor: "#f472b6",
  emoji: "BR",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Components and Classification",
      summary:
        "The vocabulary of the subject: the anatomy of every bridge from deck slab to foundation, the load path that strings the parts together, and the classification families - by material, by structural form and by span - that select slab, girder, truss, arch and cable solutions.",
      chapter: {
        number: "01",
        title: "Bridge Components and Classification",
        intro:
          "Unit I builds the picture every later unit hangs from: the three-part anatomy of superstructure, substructure and foundation; the terminology of waterway, span and flood levels; and the classification of bridges by material, structural action and span. From this vocabulary the unit tours the five great families - slab, girder, truss, arch and cable-supported bridges - and ends with the span ladder that matches each family to the reach it owns.",
        inOneBreath:
          "Every bridge is superstructure (deck, girders, joints, parapets) over bearings over substructure (piers and abutments) over foundations below scour; the load path runs wheel to slab to girder to bearing to pier to soil; waterway, HFL, afflux, freeboard, clear, effective and economic span fix the geometry; and by structural action bridges divide into flexural slabs and girders for short and medium spans, axial trusses and compression arches for longer ones, and tension cables - stayed or suspension - for the longest crossings on earth.",
        sections: [
          {
            number: "1.1",
            title: "Anatomy of a bridge: components and terminology",
            body: [
              "A bridge is a crossing built to carry a roadway, railway or footpath over a river, valley, road or any other obstruction, and every bridge - whatever its size - resolves into the same three-part anatomy. The superstructure is everything above the bearing line: the deck slab on which traffic runs, the main girders or truss members that collect the slab load and span the gap, and with them the wearing coat, the parapets and railings, and the expansion joints. The substructure lies between the bearing line and the ground: intermediate piers standing in the river or valley, and abutments at the two ends, which both support the deck and retain the approach embankment behind them.",
              "The foundation - spread footings, pile groups or well caissons - transfers the collected loads to a soil or rock stratum capable of carrying them, at a level below the deepest anticipated scour. The load path is therefore strictly one-directional: wheel loads press the deck slab, the slab delivers reactions to the girders, the girders sit on bearings that transmit vertical load while permitting rotation and thermal movement, the bearings press the pier caps and abutment seats, and the foundations finally deliver everything to the ground. An examiner's first sketch of a bridge is essentially this chain drawn as a set of arrows, and every design chapter of this subject protects one link of that chain.",
              "A working vocabulary completes the anatomy. The linear waterway is the unrestricted width of the channel under the bridge, and the waterway area governs the hydraulics. The highest flood level, or HFL, fixes the deck soffit through the prescribed vertical clearance, while freeboard is the height of the formation above HFL. The clear span is measured between the faces of supports, the effective span between the centres of bearings, and the economic span is the one for which the cost of one more metre of superstructure just equals the cost of one more pier. Afflux - the rise in flood level caused by the constriction - limits how narrow the waterway may be made.",
            ],
            bullets: [
              "Superstructure: deck slab, girders, wearing coat, parapets, expansion joints - everything above the bearing line.",
              "Substructure: piers and abutments; abutments additionally retain the approach embankment.",
              "Foundation: footings, piles or wells founded below the design scour level on competent stratum.",
              "Load path: wheel to slab to girder to bearing to pier to foundation to soil - draw it with arrows in every answer.",
              "Span vocabulary: clear span (face to face), effective span (centre of bearings), economic span (one more metre of deck costs one more pier).",
              "Afflux: the rise in flood level upstream caused by constriction of the waterway; it limits how far the channel may be narrowed.",
            ],
            table: {
              caption: "The five zones of any bridge and what each must achieve.",
              headers: ["Zone", "Members", "Primary duty", "Design driver"],
              rows: [
                ["Superstructure", "deck slab, girders, joints, parapets", "carry traffic across the gap", "live load + impact, deflection limits"],
                ["Bearings", "fixed, free, elastomeric, pot", "transmit load; allow rotation and movement", "reaction, movement, rotation"],
                ["Substructure", "piers, abutments", "carry superstructure; retain approach fill", "combined load cases, stability"],
                ["Foundation", "footings, piles, wells", "reach load to sound stratum", "bearing capacity, scour"],
                ["Approaches", "embankment, approach slab", "carry road up to deck level", "settlement, earth pressure"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The load path from wheel to soil",
              caption:
                "Every design chapter of the subject protects one arrow of this chain.",
              steps: [
                { label: "Wheel loads press the deck slab", note: "local patch + impact" },
                { label: "Girders collect the slab reactions", note: "bending + shear" },
                { label: "Bearings transmit load", note: "rotation and movement allowed" },
                { label: "Piers and abutments carry down", note: "plus wind, braking, seismic" },
                { label: "Foundations reach below scour", note: "to competent stratum" },
              ],
            },
            callout: {
              type: "exam",
              title: "Open with a labelled sketch",
              body: "Draw elevation AND cross-section, then label deck slab, girder, bearing, pier cap, pier, footing, abutment, HFL and waterway before writing a word. In RGPV answers the labelled sketch carries marks of its own, and a correct load-path arrow diagram rescues a weak paragraph.",
            },
            keyTerms: [
              { term: "Superstructure", definition: "All parts above the bearing line: deck slab, girders, wearing coat, joints and parapets." },
              { term: "Afflux", definition: "The rise in flood level upstream of a bridge caused by constriction of the waterway." },
              { term: "Economic span", definition: "The span at which the cost of adding superstructure equals the cost of adding a pier." },
            ],
            examQuestions: [
              {
                q: "Draw the elevation and cross-section of a typical girder bridge, name its components, and explain the load path from a wheel load down to the founding stratum.",
                marks: 7,
                outline: [
                  "Sketch the elevation: deck, girders, bearings, piers, abutments, foundation, HFL, waterway.",
                  "Sketch the cross-section: carriageway, kerb, parapet, deck slab, girders, diaphragms.",
                  "Define the three zones: superstructure, substructure, foundation.",
                  "Trace the load path: wheel to slab, slab to girders, girders through bearings to substructure.",
                  "Show bearings permitting rotation and thermal movement while transmitting vertical load.",
                  "Carry the load through the pier to the footing, founded below design scour.",
                  "Mention horizontal forces (braking, wind, seismic) entering the same path at deck level.",
                ],
              },
              {
                q: "Define afflux, freeboard and linear waterway.",
                marks: 2,
              },
              {
                q: "Explain the concept of economic span and state the condition that governs it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Classification by material and structural form",
            body: [
              "Classification is not museum taxidermy; it is the first step of design, because the class a bridge belongs to decides its analysis method, its code and its construction technique. By material, bridges divide into timber bridges - now confined to temporary and forest crossings; masonry bridges - the arches of the railway network, durable but massive; steel bridges - the material of long spans and fast erection; and reinforced and prestressed concrete bridges, which own the vast majority of Indian road crossings. Prestressing extended concrete from the twenty-metre reach of reinforced slabs to the hundred-metre reach of segmental boxes.",
              "By structural action the families follow the internal forces. Slab and girder bridges work in flexure - simple to analyse and build, dominant up to medium spans. Truss bridges resolve the load into axial tension and compression in triangulated members, economical in steel for long railway spans. Arches carry load in compression and thrust outward at the springings, demanding strong foundations; the tied arch or bowstring carries its own thrust in a tie. Cables work in pure tension: in suspension bridges a parabolic main cable hangs from towers and carries the deck through hangers, while cable-stayed bridges fan straight from towers to the deck, the stiffer and more modern arrangement.",
              "Further axes complete the classification. By usage: road, rail, rail-cum-road, foot and aqueduct bridges. By the position of the deck relative to the main structure: deck bridges, where traffic runs on top, and through bridges, where it runs between the main members. By support continuity: simply supported, continuous and cantilever spans. By construction: cast-in-situ, precast, launched or cantilevered. Two rules survive every classification question: state the criterion before the examples, and never mix the axes - a bridge can be a prestressed concrete continuous deck-type box-girder viaduct, which is four classifications at once, each answering a different design question.",
            ],
            bullets: [
              "By material: timber, masonry, steel, RCC and PSC - the material fixes the feasible span and the governing code.",
              "By structural action: flexure (slab, girder), axial (truss), compression (arch), tension (cable) - the action fixes the analysis.",
              "Deck bridge: traffic runs on top of the main members; through bridge: traffic runs between them.",
              "By continuity: simply supported (robust, jointed), continuous (fewer joints, redistribution) and cantilever.",
              "State the classification criterion before listing examples - unlabelled lists lose half the marks.",
              "Classification by span and classification by form are different axes; every real bridge sits at one point on each.",
            ],
            table: {
              caption: "Classification criteria with representative examples.",
              headers: ["Criterion", "Classes", "Example"],
              rows: [
                ["Material", "timber, masonry, steel, RCC, PSC", "stone arch rail bridge; PSC box flyover"],
                ["Structural form", "slab, girder, truss, arch, cable", "Warren truss; cable-stayed Naini bridge"],
                ["Deck position", "deck type, through type", "deck slab bridge; through truss bridge"],
                ["Continuity", "simple, continuous, cantilever", "simply supported PSC girder spans"],
                ["Usage", "road, rail, rail-cum-road, aqueduct", "Bogibeel rail-cum-road bridge"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Material and span choose the structural family",
              caption:
                "Read the axes: short concrete spans on the left, long steel systems on the right.",
              axes: { x: "Short spans to long spans", y: "Concrete to steel" },
              quadrants: [
                { label: "RCC slab and T-beam", note: "short span, concrete: the default road crossing" },
                { label: "Steel-composite girder", note: "short-medium span, steel: fast erection, shallow depth" },
                { label: "PSC box and segmental", note: "medium-long span, concrete: flyovers and viaducts" },
                { label: "Truss, arch, cable-stayed", note: "long span, steel: 150 m and beyond" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not mix the axes",
              body: "The classic slip is answering 'classify bridges by span' with a list of materials. Span classification (short, medium, long) and material classification (timber, masonry, steel, concrete) are independent criteria; the examiner expects each criterion named, then three or four examples under it.",
            },
            keyTerms: [
              { term: "Deck bridge", definition: "A bridge whose roadway runs on top of the main supporting members." },
              { term: "Through bridge", definition: "A bridge whose roadway runs between the main members, which rise above deck level on either side." },
              { term: "Aqueduct bridge", definition: "A bridge that carries a water channel or pipeline across a valley or river." },
            ],
            examQuestions: [
              {
                q: "Classify bridges on the basis of material, structural form and position of the deck, giving two examples of each class with a sketch of the main forms.",
                marks: 7,
                outline: [
                  "Name the classification criterion before listing classes - three criteria requested.",
                  "Material: timber, masonry, steel, RCC, PSC with one example each.",
                  "Structural form: slab, girder, truss, arch, cable-supported - state the internal force each uses.",
                  "Sketch the four classic forms: girder, truss, arch, suspension.",
                  "Deck position: deck type versus through type, with a small section sketch of each.",
                  "Add one further axis briefly: usage, continuity or construction method.",
                  "Close with the rule that a real bridge carries one label per axis simultaneously.",
                ],
              },
              {
                q: "Distinguish between a deck bridge and a through bridge.",
                marks: 2,
              },
              {
                q: "How does prestressing extend the span range of concrete bridges beyond that of reinforced concrete?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Slab bridges and girder bridges",
            body: [
              "The slab bridge is the simplest and most numerous crossing: a reinforced concrete slab spanning between abutments, with or without intermediate piers, carrying traffic directly on its top surface. It is at its best for short spans - up to about ten metres in reinforced concrete - where its uniform depth, simple formwork and redundancy in load distribution outweigh its weight. Beyond that reach the solid section grows uneconomically heavy, and the remedy is to hollow it: voided slabs, with longitudinal ducts cast in, extend the form toward fifteen metres, and in very short culverts the slab simply sits on the earth or on rigid frames.",
              "The girder bridge economises the concrete by concentrating it where bending demands it. The deck slab now spans transversely between a line of longitudinal girders - a T-beam deck when cast monolithically, or a line of precast I-girders or PSC girders carrying a cast slab. Diaphragms interconnect the girders at the ends and at intervals along the span, sharing heavy wheel loads and stiffening the deck transversely. Reinforced T-beam decks rule the ten-to-thirty-metre range; prestressed I-girders and box girders carry the same form to forty metres and well beyond. The choice between slab and girder is a span-and-depth negotiation: the slab is shallow but heavy, the girder deep but light.",
              "Selection therefore reads the site. Where the approach gradient is tight - an urban crossing or a canal bridge - the shallow slab buys vertical clearance even at extra concrete cost. Where depth is free and spans stretch past ten metres, the T-beam or PSC girder wins on material economy. Continuity and bearings add a further layer: simply supported spans are robust and easy to erect, continuous spans cut the moment peaks and the number of joints, and every joint removed is maintenance expenditure saved for the client. The comparison table of this section is a standing exam question, and the crossover economics it summarises - slab below roughly ten metres, girder above - is the number to remember.",
            ],
            bullets: [
              "Slab bridge: traffic rides the slab directly; simplest formwork; economic up to about 10 m in RCC.",
              "Voided slab: longitudinal ducts cut the dead load and stretch the slab form toward 15 m.",
              "Girder deck: slab spans transversely between girders; concrete concentrates at the tension and compression edges.",
              "Diaphragms: transverse beams connecting girders, sharing wheel loads and stiffening the deck.",
              "RCC T-beam decks rule 10-30 m; PSC I-girders and box girders extend the form past 40 m.",
              "The crossover is a span-versus-depth negotiation: shallow and heavy (slab) against deep and light (girder).",
            ],
            table: {
              caption: "Slab versus girder decks - the standing comparison.",
              headers: ["Aspect", "Solid slab bridge", "T-beam girder bridge"],
              rows: [
                ["Economic span", "up to about 10 m", "about 10-30 m (RCC)"],
                ["Structural depth", "shallowest of all forms", "deeper; about span/10 to span/12"],
                ["Dead load", "heavy per square metre", "lighter; concrete placed where needed"],
                ["Formwork", "one soffit plane", "soffit plus girder sides and diaphragms"],
                ["Load distribution", "generous two-way spread", "one-way slab feeding discrete girders"],
                ["Best use", "tight vertical clearance, short gaps", "normal road bridges past 10 m"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Slab deck versus T-beam girder deck",
              caption:
                "Same duty, different anatomy: the slab bends as one plate, the T-beam deck routes load through girders.",
              left: {
                heading: "Solid slab bridge",
                items: [
                  "One reinforced plate carries wheels directly",
                  "Shallowest construction depth",
                  "Formwork is a single soffit plane",
                  "Heavy dead load grows fast with span",
                  "Best below about 10 m span",
                ],
              },
              right: {
                heading: "T-beam girder bridge",
                items: [
                  "Slab spans between longitudinal girders",
                  "Girder webs carry the concentrated bending",
                  "Diaphragms tie girders into a grid",
                  "Deeper structure but far lighter concrete",
                  "Economic 10-30 m; PSC girders reach 40 m+",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Sketch both cross-sections",
              body: "In slab-versus-girder questions, draw the two cross-sections side by side, dimension the depth as span/10 to span/12 for the T-beam, and arrow the load path on each. The paired sketch with arrows is what converts a descriptive answer into a full-marks answer.",
            },
            keyTerms: [
              { term: "Voided slab", definition: "A slab bridge lightened by longitudinal voids cast in with duct formers, extending its economic span." },
              { term: "Diaphragm", definition: "A transverse beam connecting longitudinal girders to share loads and stiffen the deck." },
              { term: "T-beam deck", definition: "A monolithic deck in which the slab acts as the compression flange of the supporting girders." },
            ],
            examQuestions: [
              {
                q: "Compare solid slab and T-beam girder decks for a 15 m highway crossing, with sketches of both cross-sections, and state which you would adopt and why.",
                marks: 7,
                outline: [
                  "Draw the solid slab cross-section; note depth, reinforcement and simple formwork.",
                  "Draw the T-beam cross-section: slab, webs, diaphragms; depth of order span/10 to span/12.",
                  "Tabulate: span range, dead load, structural depth, formwork complexity.",
                  "Discuss the crossover economics - slab heavy but shallow, girder light but deep.",
                  "For 15 m, note RCC slab is past its comfortable reach while T-beam is standard.",
                  "Check vertical clearance and hydraulic requirements at the site as decisive constraints.",
                  "Recommend the T-beam deck with justification tied to span and economy.",
                ],
              },
              {
                q: "State the function of diaphragms in a girder bridge deck.",
                marks: 2,
              },
              {
                q: "When is a voided slab preferred over a solid slab, and what is the penalty paid?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Truss bridges: Pratt, Warren and their kin",
            body: [
              "A truss converts the bending of a long span into pure axial forces in a triangulated frame. The top and bottom chords carry the moment as a force couple - compression above, tension below for a simply supported span - while the web members of diagonals and verticals carry the shear. Because every member is axial, steel is used at its full efficiency: tension members are slender ties, compression members are stocky struts, and no material is wasted on the neutral axis. Trusses serve spans that floor girders cannot reach economically, roughly from fifty to two hundred metres, and the through truss - traffic running between the two trusses - is the classic railway silhouette.",
              "The web geometry decides the character. In the Pratt truss the inclined diagonals slope down toward mid-span? No - the signature is this: diagonals are in tension and verticals in compression, matching steel's preference for slender tension members. In the Warren truss the web is a chain of equilateral triangles; its members alternate between tension and compression, there are no verticals to fabricate, and the appearance is cleaner - the modern default. The Howe truss reverses the Pratt - compression diagonals, tension verticals - a timber-and-iron heritage. The K-truss subdivides long compression webs for the longest spans, and the deck truss places the roadway on the top chord.",
              "Analysis and detailing complete the picture. For moving loads, influence lines locate the load positions that maximise each member force; the method of joints solves the members around a node, the method of sections cuts a panel and exposes three unknowns at once. Members connect through gusset plates, and every hole, weld and splice is a fatigue detail to be designed and inspected. Modern practice reserves trusses for railway spans, major river crossings and contexts where erection depth must be minimal - the steel arch of the Chenab bridge and the cantilever truss of Howrah bridge, both visited again in Unit V, are the Indian landmarks of the family.",
            ],
            bullets: [
              "Truss action: chords carry the moment as a couple, web members carry the shear - all members axial.",
              "Pratt: diagonals in tension, verticals in compression - suits steel, historically the railway standard.",
              "Warren: equilateral triangles, alternating member forces, no verticals - lighter fabrication, cleaner look.",
              "Howe: compression diagonals and tension verticals - the timber-era mirror of the Pratt.",
              "Method of joints for whole nodes; method of sections cuts a panel for chords and nearby diagonals.",
              "Deck truss carries traffic on the top chord; through truss carries it between the truss planes.",
            ],
            table: {
              caption: "Web systems and the force character of their members.",
              headers: ["Truss", "Diagonals", "Verticals", "Character"],
              rows: [
                ["Pratt", "tension", "compression", "steel-efficient; classic railway span"],
                ["Warren", "alternating tension and compression", "none (optional)", "fewest members; modern default"],
                ["Howe", "compression", "tension", "timber-and-iron heritage form"],
                ["K-truss", "subdivided, shorter", "subdivided", "longest spans; complex joints"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a web system for a 60-120 m steel truss",
              caption:
                "The diagonal's force character - tension or compression - is the decision.",
              start: "Web system for a 60-120 m steel truss span",
              branches: [
                {
                  label: "Pratt web",
                  outcome: "Tension diagonals, short compression verticals - matches steel's strengths; proven railway choice",
                  good: true,
                },
                {
                  label: "Warren web",
                  outcome: "Equilateral triangles, alternating forces, fewest members and joints - the modern default",
                  good: true,
                },
                {
                  label: "K-truss",
                  outcome: "Subdivides compression members for spans beyond 100 m; heavier fabrication",
                  good: true,
                },
                {
                  label: "Howe-type timber diagonals",
                  outcome: "Compression diagonals in timber demand bulky members and heavy joints - obsolete for new work",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Mark T and C on the sketch",
              body: "Any 'explain Pratt versus Warren' answer must show the panel sketch with tension and compression written on each member, plus the load applied. Examiners award the force character explicitly; a correct truss drawing without T and C labels earns half.",
            },
            keyTerms: [
              { term: "Chord", definition: "The top or bottom longitudinal member of a truss, carrying the bending moment as an axial force." },
              { term: "Gusset plate", definition: "The plate through which truss members are connected at a node with bolts or welds." },
              { term: "Method of sections", definition: "An analysis technique that cuts three members of a truss and solves their forces by equilibrium of one part." },
            ],
            examQuestions: [
              {
                q: "Explain truss action in a bridge, compare Pratt and Warren web systems with sketches showing member force character, and describe how influence lines are used for moving loads.",
                marks: 7,
                outline: [
                  "Define the truss: triangulated frame, pin-jointed idealisation, axial members only.",
                  "Chords carry moment as a couple; web members carry shear - state which chord is in compression.",
                  "Sketch the Pratt: diagonals in tension, verticals in compression; explain why this suits steel.",
                  "Sketch the Warren: equilateral triangles, alternating forces, no verticals.",
                  "Contrast fabrication economy, fatigue details and appearance.",
                  "Define an influence line and show the load position maximising a mid-span bottom chord force.",
                  "Mention method of joints versus method of sections for computing the member forces.",
                ],
              },
              {
                q: "State the difference between a deck truss and a through truss.",
                marks: 2,
              },
              {
                q: "What is a gusset plate and what checks does it require at a truss node?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Arch and cable-supported bridges",
            body: [
              "The arch reverses the girder's economy: where the girder sags in bending, the arch stands in compression, and the load it carries pours down its ribs as a thrust into the foundations. The structural price is paid at the springings - the abutments must resist large inclined forces, which is why arches demand rock or very stiff foundations. Forms vary with the hinges: the fixed arch is stiffest but most sensitive to support movement, the two-hinged arch releases the moment at the supports, and the three-hinged arch is statically determinate and immune to support settlement and temperature. The tied arch, or bowstring girder, carries its own thrust in a tension tie at deck level and so frees the foundations entirely.",
              "The suspension bridge is the tension answer to the longest crossings. A main cable draped in a parabola between towers carries the deck through vertical hangers; the cable ends in massive anchorages that resist the pull, and a stiffening truss or girder distributes concentrated loads and controls aerodynamic flutter. Spans beyond one kilometre are possible and routine on the world's great crossings. The cable-stayed bridge is the modern, stiffer sibling: cables run straight from tower tops to anchorages along the deck, each stay supporting one point directly. Fan, harp and semi-fan arrangements name the cable geometry; spans from about one hundred fifty to six hundred metres are its natural territory, and it dominates new Indian river crossings.",
              "The span ladder orders the families. Solid slabs and RCC girders own the first tens of metres; PSC boxes and composite girders the range to about one hundred fifty; arches and trusses the intermediate long spans; cable-stayed bridges to about six hundred; suspension bridges beyond. Every rung trades material for reach, and every family imposes its foundation signature: arches thrust, suspension bridges pull at anchorages, cable-stayed towers carry colossal compression. Indian practice illustrates each rung - the stone arches of the railways, the PSC boxes of urban flyovers, the steel arch of the Chenab, the cable-stayed Vidyasagar Setu - and these names return as case studies in Unit V.",
            ],
            bullets: [
              "Arch action: load carried as compression in the rib, resolved into a large thrust at the springings.",
              "Hinges: fixed (stiffest, settlement-sensitive), two-hinged, three-hinged (determinate, settlement-proof).",
              "Bowstring or tied arch: the deck tie absorbs the thrust, freeing the foundations.",
              "Suspension: parabolic main cable, hangers, anchorages, stiffening truss - the longest spans, flutter-sensitive.",
              "Cable-stayed: straight stays from tower to deck in fan or harp; stiffer than suspension; 150-600 m territory.",
              "The span ladder: slab - girder - box - truss/arch - cable-stayed - suspension, each rung a material-for-reach trade.",
            ],
            table: {
              caption: "Structural families and the forces that define them.",
              headers: ["Family", "Dominant internal force", "Foundation demand", "Natural span reach"],
              rows: [
                ["Slab / girder", "flexure", "moderate vertical", "up to about 40 m"],
                ["Truss", "axial tension + compression", "vertical at supports", "about 50-200 m"],
                ["Arch", "compression + thrust", "large inclined thrust", "about 50-300 m"],
                ["Cable-stayed", "cable tension, tower compression", "heavy tower foundations", "about 150-600 m"],
                ["Suspension", "cable tension", "massive anchorages", "600 m to beyond 1 km"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The span ladder",
              caption:
                "Each tier upward trades material and fabrication for reach; the top tier is the province of suspension bridges.",
              tiers: [
                { label: "Suspension", note: "600 m to beyond 1 km - anchorages and flutter govern" },
                { label: "Cable-stayed", note: "150-600 m - the modern long-span default" },
                { label: "Arch and truss", note: "50-300 m - steel-intensive, thrust or axial action" },
                { label: "PSC box and composite girder", note: "30-150 m - flyovers and viaducts" },
                { label: "RCC slab and T-beam", note: "up to about 40 m - the everyday road crossing" },
              ],
            },
            callout: {
              type: "warning",
              title: "Arches punish bad ground",
              body: "Never recommend a fixed arch on yielding foundations: support movement induces parasitic moments of the same order as the dead-load moments. On soft ground, either tie the arch (bowstring) or move the answer to a girder - this judgement is precisely what the 7-mark question is fishing for.",
            },
            keyTerms: [
              { term: "Springing", definition: "The point where an arch rib leaves its support and delivers its thrust." },
              { term: "Stiffening truss", definition: "The girder attached to a suspension bridge deck to distribute loads and control aerodynamic motion." },
              { term: "Bowstring girder", definition: "A tied arch in which the deck-level tie absorbs the horizontal thrust, leaving only vertical reactions." },
            ],
            examQuestions: [
              {
                q: "Describe the structural action of arch bridges, explain fixed, two-hinged and three-hinged forms and the tied arch with sketches, and state the foundation demand of each.",
                marks: 7,
                outline: [
                  "Draw the arch with the compression thrust line following the rib down to the springings.",
                  "Explain that the abutment must resist a large inclined thrust - the arch's foundation signature.",
                  "Fixed arch: no hinges, stiffest, but support movement and temperature induce secondary moments.",
                  "Two-hinged arch: hinge at supports releases that moment; still statically indeterminate once.",
                  "Three-hinged arch: determinate, immune to settlement and temperature; mid-span hinge.",
                  "Tied arch or bowstring: tension tie at deck level absorbs the thrust; ordinary foundations suffice.",
                  "Conclude with selection: arch where rock or stiff stratum is available at the springings.",
                ],
              },
              {
                q: "Why is a tied arch called a bowstring girder, and where is it advantageous?",
                marks: 2,
              },
              {
                q: "Distinguish between suspension and cable-stayed bridges with respect to cable geometry, stiffness and span range.",
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
      title: "Loading and Codes",
      summary:
        "The forces a bridge must survive: IRC:6 vehicle classes Class AA, 70R, A and B; impact, braking, centrifugal, wind, seismic, temperature and current forces; earth pressure on abutments; the combinations that assemble them; and the IRC code family and its working-stress and limit-state design philosophies.",
      chapter: {
        number: "02",
        title: "Loads on Bridges and the IRC Codes",
        intro:
          "Unit II converts traffic and climate into design forces. It opens with the IRC:6 vehicular loadings - Class AA, 70R, A and B - and their placement rules, then adds the dynamic and horizontal companions: impact, braking and traction, centrifugal force on curves. Environmental forces follow in wind, seismic action and river current, and thermal movement and earth pressure complete the list. The unit closes by assembling the forces into code load combinations and by mapping the IRC code family and its two design philosophies, working stress and limit state.",
        inOneBreath:
          "IRC:6 specifies vehicular live loads - Class AA tracked 700 kN or wheeled 400 kN, Class 70R heavy loading, Class A for major roads and Class B for village roads, with AA and 70R bridges also checked under Class A; impact is a live-load fraction that falls as span grows; braking drags about a fifth of the leading lane's live load longitudinally; centrifugal force C = W V^2/(127 R) acts radially outward on curves; wind comes from zone speeds of 33-55 m/s and checks the erection stage; seismic action follows IS:1893 zones with alpha_h = beta I alpha_0; temperature moves spans by delta = alpha L deltaT; earth pressure fills the abutment's Rankine diagram; and combinations add at most one environmental extreme to the primary dead-plus-live-plus-impact case.",
        sections: [
          {
            number: "2.1",
            title: "IRC vehicle loading: Class AA, 70R, A and B",
            body: [
              "Live load on Indian road bridges is specified by IRC:6, the Standard Specifications and Code of Practice for Road Bridges, Section II - Loads and Stresses, which defines standard vehicular loadings for design. Class AA is the heaviest military loading and comes in two versions: a tracked vehicle of 700 kN carried on two long track patches, and a wheeled vehicle of 400 kN. Class 70R provides the alternative heavy loading - a 700 kN tracked vehicle with a different track spacing, and a 700 kN wheeled trailer train spread over a longer loaded length, which can govern members with larger influence lengths. Class AA or 70R applies to bridges on national highways, strategic routes and urban corridors that heavy military vehicles must cross.",
              "Class A and Class B are the loads of ordinary traffic. Class A loading represents a train of standard commercial vehicles and applies to most permanent bridges on major and district roads; the lighter Class B loading is reserved for bridges on village roads and for temporary structures. Where a bridge is designed for Class AA or 70R, IRC:6 requires it also to be checked under Class A loading, because a full train of Class A vehicles occupying every lane simultaneously can produce effects more severe than a single heavy vehicle, especially on longer spans and multi-lane decks. Lanes are loaded simultaneously wherever that produces the worse effect.",
              "Placement rules complete the loading picture. Vehicles are positioned to maximise whatever force effect is under study: near mid-span for maximum sagging moment, near a support for maximum shear, and as far transversely as the specified clearances allow for maximum girder eccentricity. Wheel loads act through prescribed contact patch areas, are dispersed through the wearing coat, and carry impact only in the primary load case - never on earth pressure, and never in combinations involving wind or seismic forces. Sketching the Class AA tracked vehicle in plan - two track patches with their contact lengths and the clearance to the parapet - is the standard opening of an exam answer on loading.",
            ],
            bullets: [
              "Class AA: 700 kN tracked vehicle on two long patches, or a 400 kN wheeled vehicle - the heavy military loading.",
              "Class 70R: 700 kN tracked or wheeled; the wheeled trailer train spreads over a longer loaded length.",
              "Class A: a train of standard commercial vehicles - the loading of major and district road bridges.",
              "Class B: lighter loading for village roads and temporary bridges.",
              "AA/70R bridges must also be checked under Class A - full lanes of traffic can govern longer spans.",
              "Position vehicles for the effect under study: mid-span for moment, near support for shear, eccentric for torsion.",
            ],
            table: {
              caption: "IRC:6 vehicular loading classes and their application.",
              headers: ["Class", "Vehicles", "Total load", "Where applied"],
              rows: [
                ["AA (tracked)", "one tracked vehicle, two patches", "700 kN", "NH, strategic and urban routes"],
                ["AA (wheeled)", "one heavy wheeled vehicle", "400 kN", "same corridors as AA tracked"],
                ["70R", "tracked or wheeled trailer train", "700 kN", "alternative heavy loading"],
                ["A", "train of standard vehicles", "per lane", "most permanent road bridges"],
                ["B", "lighter vehicle train", "per lane", "village roads, temporary works"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Selecting the governing loading class",
              caption:
                "The corridor decides the class; the class decides the deck.",
              start: "Design loading for a new road bridge",
              branches: [
                {
                  label: "Class AA / 70R",
                  outcome: "National highways and strategic corridors; the 700 kN tracked patch usually governs local deck design",
                  good: true,
                },
                {
                  label: "Class A",
                  outcome: "Ordinary permanent bridges on major and district roads; multi-lane trains govern longer spans",
                  good: true,
                },
                {
                  label: "Class B",
                  outcome: "Village roads and temporary crossings only; deliberately light loading",
                  good: true,
                },
                {
                  label: "Skip the Class A check on an AA bridge",
                  outcome: "Full lanes of Class A traffic can exceed the single heavy vehicle - an under-designed deck",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise the heavy-load numbers",
              body: "700 kN (AA and 70R tracked), 400 kN (AA wheeled) - these two numbers anchor every loading question. Follow them with the placement rule (position for maximum effect) and the Class A re-check requirement, and the first half of any loads answer is already written.",
            },
            keyTerms: [
              { term: "Class AA loading", definition: "IRC:6 heaviest loading: a 700 kN tracked vehicle or 400 kN wheeled vehicle for strategic routes." },
              { term: "Standard vehicle train", definition: "The repeated lane of vehicles representing ordinary traffic in Class A or B loading." },
              { term: "Contact patch", definition: "The prescribed tyre or track area through which a wheel load is applied to the deck." },
            ],
            examQuestions: [
              {
                q: "Describe IRC Class AA, 70R, A and B loadings with sketches, state where each is applied, and explain why a bridge designed for Class AA must also be checked under Class A.",
                marks: 7,
                outline: [
                  "Sketch the Class AA tracked vehicle in plan: two 350 kN track patches with contact length and clearance.",
                  "State Class AA wheeled: 400 kN vehicle; both for NH and strategic corridors.",
                  "Describe Class 70R: 700 kN tracked and wheeled versions, longer loaded length for the wheeled train.",
                  "Describe Class A as a lane train of standard vehicles for major roads, Class B for village roads.",
                  "State the placement principle: vehicles positioned for maximum moment, shear or torsion.",
                  "Explain the Class A re-check: full simultaneous lanes can out-load one heavy vehicle on long spans.",
                  "Note impact applies only to live load and only in the primary combination.",
                ],
              },
              {
                q: "Where is IRC Class B loading permitted?",
                marks: 2,
              },
              {
                q: "State the rule for transverse placement of vehicles on a multi-lane deck and its purpose.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Impact, braking and centrifugal forces",
            body: [
              "A moving vehicle does not press the bridge as gently as its static weight: surface undulations, expansion-joint steps and the spring action of suspensions amplify the load dynamically. IRC:6 therefore adds an impact allowance, expressed as a fraction of the live load, which is largest for short members that cannot cushion the blow and falls steadily as the loaded length grows. For local checks such as a deck slab carrying a single wheel, the allowance is of the order of a quarter of the wheel load, while long spans attract only a few per cent. Impact rides on live load alone, never on dead load, and it is dropped in combinations involving wind or seismic forces.",
              "Braking and traction are the longitudinal companions. When a vehicle brakes on the deck, a fraction of its live load - about one-fifth of the load in the leading lane, with reduced contributions from the remaining lanes - is transmitted as a horizontal force applied near axle height above the roadway, dragging the superstructure toward the approaching vehicle. Traction acts in the opposite sense as vehicles accelerate or climb the grade. The force travels through the deck to the fixed bearings and into the substructure, so every pier and abutment on the fixed line must be designed for the longitudinal force applied in either direction.",
              "On curved alignments, vehicles travelling at speed pull outward radially, and the structure must supply the centripetal force. The centrifugal force C is computed as C = W x V^2 / (127 x R) kilonewtons, where W is the live load in kN, V the speed in kilometres per hour and R the radius of the curve in metres. It acts horizontally at the level of the vehicle centroids, adding a transverse overturning effect on the deck and increasing the reactions of the outer girders and bearings. Superelevation balances the vehicles themselves against overturning, but it does not remove the structural force - the deck, the outer girder and the bearing design must absorb it.",
            ],
            bullets: [
              "Impact: a live-load fraction covering dynamic amplification; largest on short loaded lengths, small on long spans.",
              "Impact never applies to dead load, earth pressure, or combinations with wind or seismic forces.",
              "Braking: about one-fifth of the leading lane's live load, applied longitudinally near axle height; reversible.",
              "Traction: the same longitudinal force in the opposite sense, from acceleration or climbing.",
              "Centrifugal force: C = W x V^2 / (127 R) kN, with W in kN, V in km/h, R in m - outward, at vehicle centroid level.",
              "Centrifugal force raises outer girder reactions and adds transverse moment; superelevation does not remove it.",
            ],
            table: {
              caption: "The dynamic and horizontal live-load forces.",
              headers: ["Force", "Direction", "Basis", "Where it bites"],
              rows: [
                ["Impact", "vertical, with live load", "fraction falls as loaded length grows", "deck slab, girders, local checks"],
                ["Braking", "longitudinal, reversible", "about one-fifth of leading lane live load", "fixed bearings, piers, abutments"],
                ["Traction", "longitudinal, opposite sense", "same magnitude as braking", "same members, reversed"],
                ["Centrifugal", "transverse, radial outward", "C = W V^2/(127 R)", "outer girders, bearings, deck torsion"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Assembling the dynamic and horizontal forces",
              caption:
                "Each addition is a separate design force; only the impact rides with the basic vertical case.",
              steps: [
                { label: "Start from static reactions", note: "dead + live load" },
                { label: "Add impact fraction", note: "live load only; falls with span" },
                { label: "Add braking or traction", note: "longitudinal, either sense" },
                { label: "Add centrifugal force on curves", note: "C = W V^2/(127 R)" },
                { label: "Combine into envelopes", note: "impacts drop with wind/seismic cases" },
              ],
            },
            callout: {
              type: "warning",
              title: "The units trap in centrifugal force",
              body: "C = W V^2/(127 R) is valid only with V in kilometres per hour and R in metres, giving C in kN. The constant 127 already absorbs the conversion from km/h to m/s; substituting metres per second for V is the single most common numerical slip in this unit.",
            },
            keyTerms: [
              { term: "Impact allowance", definition: "A fraction of the live load added in design to cover dynamic amplification of moving vehicles." },
              { term: "Braking force", definition: "A longitudinal force, about one-fifth of the leading lane's live load, applied near deck level on braking." },
              { term: "Centrifugal force", definition: "The radial outward force C = W V^2/(127 R) exerted by vehicles moving on a curved bridge." },
            ],
            examQuestions: [
              {
                q: "What is impact allowance in bridge design? Discuss the factors that govern it, how it varies with span, and state the members and combinations in which it is excluded.",
                marks: 7,
                outline: [
                  "Define impact allowance as a live-load fraction covering dynamic amplification.",
                  "List causes: surface irregularities, joint steps, spring action, hammer blow of wheels.",
                  "State the trend: allowance largest on short loaded lengths, falling with span - order of a quarter for local wheel checks.",
                  "Emphasise: applies to live load only, never to dead load or earth pressure.",
                  "Explain exclusion from combinations containing wind or seismic forces.",
                  "Mention the braking and traction companions applied longitudinally near axle height.",
                  "Close with the members affected: deck slab and girders locally, substructure through the fixed line.",
                ],
              },
              {
                q: "Write the expression for centrifugal force with units of each term.",
                marks: 3,
              },
              {
                q: "At what level above the roadway is the braking force applied, and why does the level matter?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Wind, seismic and current forces",
            body: [
              "Wind is the permanent horizontal companion of every exposed crossing. IRC:6 and IS:875 map India into zones with basic wind speeds ranging roughly from 33 to 55 metres per second; the design pressure derives from this speed, and the exposed area of the deck, parapets, girders and piers converts pressure into drag forces. Wind attacks transversely, longitudinally and, through the exposed depth, with an uplift component; the transverse case usually governs pier design. During erection the structure lacks its full bracing, so a specified erection-stage wind - reduced in return period but by no means negligible - must be checked, and the staging of cast-in-situ decks is designed for it.",
              "Seismic action is specified through the zones of IS:1893 - the Indian mainland spans zones II to V. The classic seismic coefficient method used for ordinary bridges computes a horizontal coefficient alpha_h = beta x I x alpha_0, where alpha_0 depends on the zone, I is an importance factor that raises critical crossings, and beta is a soil-foundation factor growing from about 1.0 on rock to about 1.5 on soft alluvium. The coefficient times the tributary mass gives lateral forces applied at the deck and substructure centroids, reproducing the inverted-triangle demand. Ductile detailing of piers, adequate seat widths at the bearings and holding-down or restrainer arrangements carry the remaining responsibility in the higher zones.",
              "Rivers add a third environmental force: the pressure of flowing water on submerged piers. The current force grows with the square of the velocity and is shaped by a drag coefficient that rewards streamlined noses - rounded or semicircular pier noses are standard practice. Debris rafts and, on navigable reaches, vessel impact are treated as accidental design events. Wind, seismic action and current are each severe but statistically unlikely companions, so the codes never require their simultaneous maxima: combinations include at most one environmental extreme with reduced values for the rest - the principle Section 2.4 turns into an explicit case list.",
            ],
            bullets: [
              "Basic wind speed by zone: roughly 33-55 m/s across India; design pressure follows from it.",
              "Wind drag acts transversely and longitudinally on deck, parapets and piers; transverse usually governs piers.",
              "Erection-stage wind, with reduced return period, must be checked - the structure is at its most vulnerable.",
              "Seismic zones II to V; coefficient method: alpha_h = beta x I x alpha_0 with soil-foundation factor beta.",
              "Water current pressure grows with velocity squared; drag coefficient rewards a rounded pier nose.",
              "Only one environmental extreme is combined at full value - never full wind with full seismic action.",
            ],
            table: {
              caption: "Environmental loads and their codes of origin.",
              headers: ["Load", "Direction", "Basis", "Member typically governed"],
              rows: [
                ["Wind", "transverse + longitudinal", "zone speed 33-55 m/s; exposed area drag", "piers, staging, long spans"],
                ["Seismic", "transverse + longitudinal", "IS:1893 zones; alpha_h = beta I alpha_0", "piers, bearing seats, restrainers"],
                ["Water current", "transverse on submerged shaft", "drag pressure ~ velocity squared", "river piers, well foundations"],
                ["Debris or vessel impact", "transverse, accidental", "local strengthening of pier nose", "pier nose and cutwater"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "How an environmental force reaches the substructure",
              caption:
                "The same chain carries wind, seismic and current: source, coefficient, force, transfer, design.",
              layers: [
                { label: "Source: zone speed or seismic zone", note: "IRC:6 / IS:875 wind map; IS:1893 zones" },
                { label: "Coefficient: pressure or alpha_h", note: "exposure converts speed to force" },
                { label: "Force on deck, parapets, piers", note: "drag on exposed and submerged area" },
                { label: "Transfer at bearings", note: "transverse and longitudinal paths to substructure" },
                { label: "Substructure design forces", note: "moment and shear on piers, stability checks" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never stack the extremes",
              body: "Designing a pier for full wind plus full seismic action plus full current simultaneously is over-conservative and marks the answer as uncode-like. Combinations admit one environmental extreme at full value with the others reduced or absent - state this principle explicitly in combination questions.",
            },
            keyTerms: [
              { term: "Basic wind speed", definition: "The zone wind speed from which design pressure on a bridge is derived, roughly 33-55 m/s across India." },
              { term: "Seismic zone", definition: "The IS:1893 regional classification, zones II to V, fixing the base horizontal seismic coefficient." },
              { term: "Drag coefficient", definition: "The shape factor converting dynamic pressure into current or wind force on a member." },
            ],
            examQuestions: [
              {
                q: "Discuss wind loads on bridge superstructures: the parameters involved, the directions to be considered, and the special case of the erection stage.",
                marks: 7,
                outline: [
                  "Start from basic wind speed by zone (about 33-55 m/s per IRC:6 / IS:875).",
                  "Convert speed to design pressure; apply to exposed areas of deck, parapets and girders.",
                  "Consider transverse, longitudinal and uplift components; state that transverse usually governs.",
                  "Add wind on live load (vehicles) and on the substructure itself.",
                  "Explain erection-stage wind: reduced return period, checked because bracing is incomplete.",
                  "Note staging and temporary works design under this wind.",
                  "State that wind enters combinations without impact, and not simultaneously at full value with seismic.",
                ],
              },
              {
                q: "Name the seismic zones covering India and the expression for the horizontal seismic coefficient used for ordinary bridges.",
                marks: 3,
              },
              {
                q: "Why are pier noses made rounded or streamlined?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Temperature, earth pressure and load combinations",
            body: [
              "A bridge breathes. Daily and seasonal swings of shade air temperature - the range specified by IRC:6 for the site - make every span lengthen and shorten by delta = alpha x L x deltaT, with alpha approximately 12 x 10^-6 per degree Celsius for steel and about 10 x 10^-6 for concrete. The movement is absorbed at free bearings and expansion joints relative to a fixed point, and the designer must locate that fixed point so the movements distribute as intended. Gradient temperature - a hot deck surface over a cooler soffit - bends the superstructure and induces secondary stresses even in statically determinate spans, so it enters the serviceability checks of concrete decks.",
              "Abutments hold back the approach embankment, so earth pressure is a permanent design load for the substructure. The active pressure of a cohesionless backfill follows Rankine's coefficient Ka = (1 - sin phi)/(1 + sin phi), with phi the angle of internal friction, and live load rolling on the approach is converted to an equivalent surcharge height of fill acting on the stem. Submerged portions receive buoyancy, and waterlogged backfill multiplies the pressure - hence weep holes, granular filters and drainage layers behind the wall. Passive pressure in front of the toe helps sliding resistance but is credited cautiously, because that soil may be scoured or excavated during the bridge's life.",
              "Combinations assemble the final demand. The primary case is dead load plus live load plus impact; to it the code adds, one at a time, wind, seismic action, temperature and water current, with reduced values when secondary forces accompany the primary case. Under the historical working-stress tradition each combination permitted a modest increase of permissible stresses; under the limit-state format of IRC:112 the partial factors play that role instead. The examiner's favourite table lists each case, the loads it contains and the member it governs - and bearings and substructure feel the combinations most, because that is where every horizontal force converges.",
            ],
            bullets: [
              "Thermal movement: delta = alpha x L x deltaT; alpha about 12 x 10^-6 per deg C for steel, 10 x 10^-6 for concrete.",
              "Movements distribute from a fixed point through free bearings and expansion joints - locate it deliberately.",
              "Gradient temperature bends the deck even in determinate spans; a serviceability check, not just a movement.",
              "Rankine active pressure: Ka = (1 - sin phi)/(1 + sin phi); live load becomes an equivalent surcharge height.",
              "Drainage behind abutments is structural self-defence: waterlogged backfill multiplies the pressure.",
              "Primary case DL + LL + impact; environmental extremes added one at a time, never stacked at full value.",
            ],
            table: {
              caption: "Representative load combinations and the members they govern.",
              headers: ["Case", "Contents", "Typically governs"],
              rows: [
                ["Primary", "DL + LL + impact", "deck slab, girders, bearings"],
                ["With wind", "primary + wind (transverse or longitudinal)", "pier shaft moment, stability"],
                ["With seismic", "primary + seismic (without impact)", "piers, bearing seats, restrainers"],
                ["With temperature", "DL + temperature (+ others reduced)", "bearing movement, joint widths"],
                ["Erection", "DL + construction loads + erection wind", "staging, free cantilever stages"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Building the combination cases",
              caption:
                "Assemble the primary case first, then attach one environmental extreme at a time and envelope.",
              stages: [
                { label: "Primary case", note: "DL + LL + impact" },
                { label: "Wind case", note: "primary + transverse or longitudinal wind" },
                { label: "Seismic case", note: "primary + seismic, impact dropped" },
                { label: "Temperature case", note: "movement and secondary stresses" },
                { label: "Envelope", note: "worst of all cases per member" },
                { label: "Detail", note: "design and detail for the envelope" },
              ],
            },
            callout: {
              type: "exam",
              title: "Tabulate the cases",
              body: "For 'explain load combinations' questions, draw a table - case, loads included, member governed - and close with the two principles: impact lives only in the primary case, and only one environmental extreme appears at full value. The table format is what examiners reward over prose.",
            },
            keyTerms: [
              { term: "Active earth pressure", definition: "The minimum soil pressure a yielding wall must resist, computed with Ka = (1 - sin phi)/(1 + sin phi) for cohesionless fill." },
              { term: "Gradient temperature", definition: "The temperature difference through the deck depth that bends the superstructure and induces secondary stresses." },
              { term: "Load combination", definition: "A code-specified assembly of loads, with at most one environmental extreme at full value, used for design checks." },
            ],
            examQuestions: [
              {
                q: "Enumerate the loads on a T-beam bridge pier and assemble the design load combinations for it, stating the member each case governs.",
                marks: 7,
                outline: [
                  "List vertical loads: dead load of both spans, live load with impact, self weight of pier.",
                  "List longitudinal: braking and traction, longitudinal wind, longitudinal seismic.",
                  "List transverse: wind, seismic, centrifugal (if curved), water current.",
                  "Assemble primary case: DL + LL + impact; both spans loaded for maximum axial force.",
                  "Add one-span-loaded arrangement for maximum moment; state it usually governs the shaft.",
                  "Add wind and seismic cases separately; note impact drops out of these.",
                  "Close with erection case and envelope philosophy - only one environmental extreme at full value.",
                ],
              },
              {
                q: "How is live load on the approach converted to pressure on an abutment stem?",
                marks: 2,
              },
              {
                q: "Why does gradient temperature induce stresses even in a statically determinate span?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "The IRC code family and design philosophy",
            body: [
              "Bridge design in India is a family of IRC publications, and knowing who governs what is itself examinable. IRC:5 sets out the general features of design; IRC:6 - the load bearer of this whole unit - specifies loads and stresses; IRC:112 is the limit-state code for concrete bridges, consolidating the older codes for plain, reinforced and prestressed concrete; IRC:24 governs steel bridges and IRC:22 composite construction; IRC:83 covers bearings and IRC:78 foundations and substructure, while the IRC:SP series publishes guidelines on subjects from inspection to seismic retrofit. A design submission that ignores one member of this family will be returned by the checking authority with a polite reference number.",
              "Two design philosophies coexist in the syllabus. The working-stress method, which shaped most Indian bridges built before the last decade or two, divides material strength by a single global safety factor: stresses under service loads are kept below specified permissible values, and combinations were historically permitted a modest increase of those stresses. The limit-state method of IRC:112 instead separates the uncertainties - partial load factors amplify the actions and partial material factors reduce the resistances - and checks both the ultimate limit state of strength and the serviceability states of deflection, cracking and fatigue. Prestressed members are checked at transfer and service stages as well, because the tendon force is itself a load before it becomes strength.",
              "The workflow of a bridge project closes the unit and connects the course. Geometry comes first: alignment, waterway and vertical profile fix the span configuration. Loads follow from IRC:6, analysis from Unit III's methods, member design from IRC:112 or IRC:24, and detailing from the bearing, joint and drainage provisions that keep water away from steel. Every stage is audited - by the designer, the independent checker and the site engineer - and as-built records feed the bridge register that Unit V's management systems depend upon. Understanding this cycle is why the subject is examined, and best learned, as one connected story rather than five islands.",
            ],
            bullets: [
              "IRC:5 general features; IRC:6 loads; IRC:112 concrete limit-state design; IRC:24 steel; IRC:22 composite.",
              "IRC:83 bearings; IRC:78 foundations and substructure; IRC:SP series for guidelines and special subjects.",
              "Working stress: one global factor, permissible stresses under service loads - the older bridge tradition.",
              "Limit state: partial load and material factors; explicit ultimate and serviceability checks - IRC:112.",
              "Prestressed members are checked at transfer and service stages, not only at ultimate.",
              "Design workflow: geometry, loads, analysis, member design, detailing - each stage audited independently.",
            ],
            table: {
              caption: "The IRC codes a bridge engineer quotes by number.",
              headers: ["Code", "Covers", "Used for"],
              rows: [
                ["IRC:5", "general features of design", "geometry, waterway, clearances"],
                ["IRC:6", "loads and stresses", "every load of Unit II"],
                ["IRC:112", "concrete limit-state design", "RCC and PSC superstructures"],
                ["IRC:24", "steel bridges", "girders and trusses"],
                ["IRC:22", "composite construction", "steel-concrete composite decks"],
                ["IRC:83", "bearings", "elastomeric, pot, PTFE design"],
                ["IRC:78", "foundations and substructure", "piers, abutments, wells, piles"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The bridge design cycle",
              caption:
                "Each stage feeds the next, and the inspection data of Unit V loops back into the next design.",
              steps: [
                { label: "Fix geometry and waterway", note: "alignment, spans, clearances" },
                { label: "Assemble IRC:6 loads", note: "dead, live, impact, environmental" },
                { label: "Analyse the structure", note: "Courbon, Pigeaud, grillage" },
                { label: "Design the members", note: "IRC:112 / IRC:24 checks" },
                { label: "Detail and construct", note: "bearings, joints, drainage" },
                { label: "Inspect and record", note: "feeds the bridge register" },
              ],
            },
            callout: {
              type: "tip",
              title: "Learn codes as one-liners",
              body: "Quote codes as number plus one line of scope - 'IRC:6, loads and stresses' - never as paragraphs. Seven such one-liners fit on a revision card, and citing the right code number in an answer is the cheapest credibility an examiner can award.",
            },
            keyTerms: [
              { term: "Working stress method", definition: "A design philosophy keeping service-load stresses below permissible values from a single global safety factor." },
              { term: "Limit state method", definition: "A design philosophy using partial factors on loads and materials to check ultimate strength and serviceability explicitly." },
              { term: "Partial safety factor", definition: "A factor applied separately to loads or material strength in limit-state design to cover its own uncertainty." },
            ],
            examQuestions: [
              {
                q: "Name the IRC codes governing road bridge design and state the scope of each. Distinguish between the working stress and limit state methods as applied to bridges.",
                marks: 7,
                outline: [
                  "List the family: IRC:5, IRC:6, IRC:112, IRC:24, IRC:22, IRC:83, IRC:78.",
                  "Give one line of scope for each: features, loads, concrete LS design, steel, composite, bearings, foundations.",
                  "Define working stress: permissible stresses under service loads, one global factor.",
                  "Define limit state: partial factors on loads and materials; ultimate plus serviceability checks.",
                  "Contrast treatment of combinations: stress increase versus partial load factors.",
                  "Note that IRC:112 moved Indian concrete bridge design to the limit-state format.",
                  "Close with the designer's rule: quote the governing code number beside every check.",
                ],
              },
              {
                q: "What is covered by IRC:6?",
                marks: 2,
              },
              {
                q: "State two differences between the working stress and limit state design philosophies.",
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
      title: "Superstructure Analysis",
      summary:
        "Getting the load from deck to girder: Courbon's rigid-deck distribution with its one-line formula, Pigeaud's curves for the deck slab, and the grillage idealisation for wide and skew decks; then the design of RCC T-beam and box-girder superstructures, composite steel-concrete decks with their shear connectors, and the truss analysis of Pratt and Warren spans.",
      chapter: {
        number: "03",
        title: "Analysis and Design of Superstructures",
        intro:
          "Unit III is the computational heart of the subject. It opens with the classical load-distribution problem - how a wheel load shares among girders - answered first by Courbon's rigid-deck method, then by Pigeaud's curves for the deck slab, and finally by the grillage idealisation that handles wide, skew and continuous decks. The design chapters apply the analysis: RCC T-beam and prestressed box-girder superstructures, steel-concrete composite construction with its shear connectors and transformed sections, and the analysis of Pratt and Warren trusses under moving loads.",
        inOneBreath:
          "Courbon's method assumes a transversely rigid deck and gives each girder the load share eta_i = 1/n + e a_i / (sum of a_j squared), the coefficients summing to 1.0; Pigeaud's curves size the deck slab from dispersed wheel patches through coefficients alpha and beta; grillage analysis replaces the deck with a plane grid of beams carrying bending and torsion, valid for skew and continuous decks; T-beam decks use the least of the three effective-flange rules; box girders add an order of torsional stiffness and own curved flyovers; composite decks transform concrete to steel through the modular ratio and connect the two with shear studs; and trusses yield to the method of joints and sections under influence-line load positions.",
        sections: [
          {
            number: "3.1",
            title: "Courbon's method of load distribution",
            body: [
              "A wheel never stands over one girder alone. In a T-beam deck, several longitudinal girders share every axle through the deck slab and the diaphragms, and the designer must decide how much of the load each girder attracts. Courbon's method answers with a deliberately simple assumption: the transverse diaphragms are so stiff that a deck cross-section rotates and translates as a rigid body about the deck centreline. The girder reactions then follow a linear law - the planar counterpart of the bearing-pressure diagram beneath an eccentrically loaded footing - and one closed formula replaces a computer model.",
              "Let n girders sit at offsets a_i from the deck centreline, and let the resultant of the live load act at eccentricity e from that same centreline. The load share of girder i is eta_i = 1/n + (e x a_i)/(sum of a_j squared). The first term is the equal share under a central load; the second term adds or subtracts the torsional component produced by eccentricity, growing linearly with the girder's distance from the centre. The coefficients always sum to one, which is the arithmetic check every answer should display, and the maximum coefficient belongs to the girder farthest from the load resultant on the same side - the girder that will be designed.",
              "The method's honesty lies in its limits. It presumes a transversely stiff deck - deep diaphragms, closely spaced girders - and a deck that is narrow relative to its span; it ignores the true flexibility of the slab, and it cannot describe a skew deck or the twisting of an individually flexible girder. When the deck is wide, skewed or continuous, the grillage method of Section 3.3 replaces it. For the classic examined case - a straight T-beam bridge with three to five girders - Courbon's result sits within a few per cent of the elastic answer, which is why the method still anchors Unit III and every RGPV numerical on distribution.",
            ],
            bullets: [
              "Assumption: the deck cross-section is transversely rigid - deep diaphragms, closely spaced girders.",
              "Formula: eta_i = 1/n + (e x a_i)/(sum of a_j squared), with a_i measured from the deck centreline.",
              "The 1/n term is the central-load share; the second term is the linear eccentricity effect.",
              "Check: the coefficients must sum to 1.0 - the built-in arithmetic audit of every solution.",
              "The farthest girder on the load side takes the maximum share and is designed for the total load times its eta.",
              "Validity: straight, narrow, right decks with stiff diaphragms; use grillage for wide, skew or continuous decks.",
            ],
            codeExample: {
              language: "python",
              caption: "Courbon coefficients for 4 girders at 2 m spacing, load 1.2 m off-centre.",
              code: `# Courbon's distribution coefficients for a T-beam deck
# Rigid transverse deck assumption: deep diaphragms, small skew

def courbon_coefficients(n, spacing, e):
    """n girders at equal 'spacing', load resultant at eccentricity e."""
    # offsets of girder axes from the deck centreline
    a = [(i - (n - 1) / 2.0) * spacing for i in range(n)]
    sum_a2 = sum(x * x for x in a)          # sum of a_j squared
    return [1.0 / n + e * x / sum_a2 for x in a]

# 4 girders at 2.0 m spacing, live-load resultant 1.2 m off centreline
eta = courbon_coefficients(4, 2.0, 1.2)
for i, c in enumerate(eta, start=1):
    print(f"girder {i}: eta = {c:.3f}")

# built-in check: coefficients always sum to 1.0
assert abs(sum(eta) - 1.0) < 1e-9
print("sum of eta =", round(sum(eta), 6))

# reaction share of a 100 kN total live load
P = 100.0
print("outer girder reaction =", round(P * max(eta), 1), "kN")
# output: eta = 0.070, 0.190, 0.310, 0.430; outer reaction 43.0 kN`,
            },
            table: {
              caption: "The worked 4-girder example in numbers.",
              headers: ["Girder", "Offset a (m)", "eta", "Share of 100 kN"],
              rows: [
                ["G1 (outer, far side)", "-3.0", "0.070", "7.0 kN"],
                ["G2", "-1.0", "0.190", "19.0 kN"],
                ["G3", "1.0", "0.310", "31.0 kN"],
                ["G4 (outer, load side)", "3.0", "0.430", "43.0 kN"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Courbon's method as an exam procedure",
              caption:
                "Five steps, one formula, one check - the numerical most likely to appear on the paper.",
              steps: [
                { label: "Compute offsets a_i", note: "from deck centreline" },
                { label: "Fix load eccentricity e", note: "resultant of live load" },
                { label: "Apply eta_i = 1/n + e a_i / sum(a^2)", note: "the formula" },
                { label: "Verify sum of eta = 1.0", note: "arithmetic audit" },
                { label: "Design the max-eta girder", note: "total load x eta, plus impact" },
              ],
            },
            callout: {
              type: "warning",
              title: "State the validity, lose the trap",
              body: "Courbon's method is valid for straight, narrow decks with stiff diaphragms. The examiner's follow-up - 'can this be used for a skew deck?' - wants the answer no, with the grillage method named as the replacement. Writing the validity limits beside the formula is worth a mark and prevents the trap question.",
            },
            keyTerms: [
              { term: "Rigid deck assumption", definition: "Courbon's premise that the deck cross-section rotates and translates as a rigid body under eccentric load." },
              { term: "Distribution coefficient", definition: "The fraction of the total load assigned to one girder by the distribution analysis." },
              { term: "Eccentricity", definition: "The offset of the live-load resultant from the deck centreline, producing the torsional distribution effect." },
            ],
            examQuestions: [
              {
                q: "State the assumptions of Courbon's method, derive or explain the distribution coefficient formula, and apply it to a deck of 4 girders at 2 m spacing carrying a load with resultant 1.2 m off the centreline.",
                marks: 7,
                outline: [
                  "State assumptions: transversely rigid deck, deep diaphragms, closely spaced identical girders.",
                  "Set up: n girders at offsets a_i from the centreline, load resultant at eccentricity e.",
                  "Write the formula: eta_i = 1/n + e a_i / (sum of a_j squared) and explain each term.",
                  "Explain the rigid-body mechanics: the deck rotates, reactions follow a linear law.",
                  "Numbers: a = -3, -1, 1, 3; sum a^2 = 20; 1/n = 0.25.",
                  "Compute: eta = 0.07, 0.19, 0.31, 0.43; show they sum to 1.0.",
                  "Conclude: outer load-side girder designed for 0.43 times the load, plus impact; state validity limits.",
                ],
              },
              {
                q: "Give two situations in which Courbon's method should not be used.",
                marks: 2,
              },
              {
                q: "What is a distribution coefficient, and what should the sum of all coefficients equal?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Pigeaud's method and the deck slab",
            body: [
              "The deck slab is the bridge's first structural member: it receives each wheel directly and spans transversely between the longitudinal girders. Its design load is a single wheel or track patch, enlarged by dispersing through the wearing coat at forty-five degrees, acting on a strip whose effective span is measured between the centres of the supports. Because the slab is governed by a local patch rather than a distributed lane load, the local impact allowance is at its largest here, and the mechanics are two-way distribution of a concentrated load - not simple one-way bending - because the patch spreads both across the span and along the girder lines.",
              "Pigeaud's method treats the slab as an isotropic, simply supported rectangular strip carrying a concentrated load at the worst position, and answers with a pair of coefficients read from curves. Entering with the ratios of the dispersed contact dimensions to the effective span, the charts return coefficients from which the mid-span moment across the span and the moment distributed along the span are obtained as known fractions of the load-times-span quantity, with a Poisson's-ratio correction appropriate to concrete refining the transverse value. Design then proceeds per unit width of strip: main steel across the span, distribution steel along it, both anchored into the girders.",
              "The procedure is worth memorising as a numbered sequence, because the examiner asks for it verbatim: disperse the wheel load through the wearing coat; fix the effective span; compute the entry ratios; read the Pigeaud coefficients; compute the two moments; reinforce and check shear, punching and bond. Where the slab is continuous over three or more girders, the mid-span moments are reduced and the negative moments over the girder tops are checked; modern codes alternatively permit effective-width formulations that bypass the charts. Durability closes the design: cover, crack control and drainage in a member permanently exposed to water, de-icing chlorides and the impact of traffic.",
            ],
            bullets: [
              "Deck slab design load: a single wheel or track patch, dispersed through the wearing coat at 45 degrees.",
              "Effective span for the slab is measured between the centres of the supports with proper allowance.",
              "Pigeaud models an isotropic simply supported strip and reads coefficients from curves - a two-way distribution answer.",
              "Entry data: ratios of the dispersed contact dimensions to the effective span.",
              "Output: moment per unit width across the span, plus distributed moment along it, with a Poisson correction for concrete.",
              "Continuity over three or more girders reduces mid-span moments but demands checks over the girder tops.",
            ],
            table: {
              caption: "The Pigeaud procedure as a checklist.",
              headers: ["Step", "Action", "Key point"],
              rows: [
                ["1", "Disperse the wheel load", "45 degrees through wearing coat thickness"],
                ["2", "Fix the effective span", "between centres of supports"],
                ["3", "Compute entry ratios", "dispersed contact size to span"],
                ["4", "Read coefficients", "Pigeaud curves for the load position"],
                ["5", "Compute the two moments", "across span and along span, per unit width"],
                ["6", "Reinforce and verify", "main steel, distribution steel, shear and punching"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Pigeaud's method step by step",
              caption:
                "Six numbered steps - the examiner asks for the sequence, not just the idea.",
              steps: [
                { label: "Disperse wheel patch", note: "45 degrees through wearing coat" },
                { label: "Fix effective span", note: "centres of supports" },
                { label: "Compute entry ratios", note: "dispersed size to span" },
                { label: "Read Pigeaud coefficients", note: "curves for worst position" },
                { label: "Compute the two moments", note: "across and along, per unit width" },
                { label: "Provide steel and check", note: "main + distribution, shear, punching" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sequence earns the marks",
              body: "A Pigeaud question is marked step by step: dispersion, span, ratios, curves, moments, reinforcement. Write the six steps as headings even when the numerical data are incomplete - the skeleton alone earns over half the marks, while a paragraph of prose about 'charts and coefficients' earns almost nothing.",
            },
            keyTerms: [
              { term: "Effective span", definition: "The design span of a slab, measured between centres of supports with code allowances." },
              { term: "Dispersion", definition: "The spreading of a wheel load through the wearing coat at 45 degrees, enlarging the contact patch." },
              { term: "Distribution reinforcement", definition: "Steel running along the span direction to distribute concentrated loads and control cracking." },
            ],
            examQuestions: [
              {
                q: "Explain Pigeaud's method for the design of a bridge deck slab, describing each step from wheel-load dispersion to reinforcement, and state why a Poisson's ratio correction is applied.",
                marks: 7,
                outline: [
                  "State the problem: a concentrated wheel patch on a slab spanning between girders.",
                  "Step 1: disperse the patch through the wearing coat at 45 degrees in both directions.",
                  "Step 2: fix the effective span between centres of supports.",
                  "Step 3-4: compute entry ratios and read the Pigeaud coefficients from the curves.",
                  "Step 5: compute the moment per unit width across the span and the distributed moment along it.",
                  "Explain the Poisson correction: concrete's transverse strain modifies the distributed moment.",
                  "Step 6: provide main and distribution steel; check shear, punching and bond; note continuity effects.",
                ],
              },
              {
                q: "Why is the wheel load dispersed through the wearing coat, and at what angle?",
                marks: 2,
              },
              {
                q: "What purpose does distribution reinforcement serve in a deck slab?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Grillage analysis",
            body: [
              "When the deck is wide, skewed or irregular, Courbon's rigid deck becomes a fiction, and the grillage analysis replaces it. The superstructure is idealised as a plane grid of discrete beams: longitudinal members following the girders - or the webs of a box, or the strips of a solid-slab deck - and transverse members representing the diaphragms and the slab strips between them. Each node of the grid carries three degrees of freedom - a vertical displacement and two rotations - and each member contributes bending stiffness and torsional stiffness to the model. Solving the standard stiffness equations yields the member end forces, from which the design moments, shears and torques are extracted.",
              "The craft lies in the idealisation rules. Longitudinal and transverse member lines pass through the shear centres of the real sections; a girder with its associated slab flange uses the T-section properties with the effective flange width rules of Section 3.4; slab strips and diaphragms receive their own bending stiffnesses and, crucially, their torsion constants. The total grid must weigh exactly what the real deck weighs, and its computed total reactions must equal the applied loads - the two sanity checks that catch most modelling slips. Loads enter as nodal point loads or as equivalent nodal loads when they fall between nodes.",
              "The advantages of grillage explain its long dominance. It models the true two-way load distribution; it accommodates skew decks, varying girder stiffness, continuous and cantilever spans, and even curved decks approximated segment by segment; it runs in seconds on a laptop; and its output maps directly onto member design. Its limitations are equally clear: the model is plane, so it misses the out-of-plane distortion of thin box sections, local slab effects and transverse bending around bearings - each needing supplementary local checks. For routine RCC and prestressed beam-and-slab bridges, grillage remains the professional and academic workhorse, bridging Courbon's simplicity and full finite-element analysis.",
            ],
            bullets: [
              "Idealisation: the deck becomes a plane grid - longitudinal girders plus transverse diaphragm and slab members.",
              "Each node carries three degrees of freedom: vertical displacement and two rotations.",
              "Member properties: EI from the section with its effective flange; GJ torsion constant - both essential.",
              "Sanity checks: total model weight equals deck weight; sum of reactions equals applied load.",
              "Handles what Courbon cannot: wide decks, skew, varying stiffness, continuous and cantilever spans.",
              "Limitations: plane model - box distortion, local slab and bearing-zone bending need separate local checks.",
            ],
            codeExample: {
              language: "text",
              caption: "A grillage input summary for a 3-girder RCC T-beam deck.",
              code: `GRILLAGE MODEL - RCC T-beam deck, 3 girders, 20 m span, skew 0 deg
Member lines pass through section shear centres.

TYPE          ID   NI   NJ    EI (kN.m2)    GJ (kN.m2)   notes
LONGITUDINAL  G1    1   21     2.10E+06       9.5E+04     outer girder + flange
LONGITUDINAL  G2    2   22     2.35E+06       9.5E+04     interior girder + flange
LONGITUDINAL  G3    3   23     2.10E+06       9.5E+04     outer girder + flange
TRANSVERSE    D1    1    2     1.80E+05       3.1E+04     end diaphragm
TRANSVERSE    D2    2    3     1.80E+05       3.1E+04     end diaphragm
TRANSVERSE    S9   13   14     6.00E+04       1.2E+04     mid-span slab strip

LOADS: IRC Class AA tracked patches applied at nodes in bay of max moment
CHECKS BEFORE USE:
  (1) total model self weight = actual deck weight
  (2) sum of computed reactions = applied loads
  (3) for zero skew, compare mid-span moments with Courbon's method`,
            },
            table: {
              caption: "Grillage modelling rules and their reasons.",
              headers: ["Decision", "Rule", "Reason"],
              rows: [
                ["Member placement", "lines through shear centres", "avoids spurious member torsion"],
                ["Girder properties", "T-section with effective flange width", "slab acts as compression flange"],
                ["Torsion constant", "assign GJ to every member", "transverse distribution depends on it"],
                ["Mesh density", "transverse members every 2-3 m", "captures load spread between girders"],
                ["Load application", "at nodes or equivalent nodal loads", "grid carries loads only at joints"],
                ["Validation", "reactions + Courbon comparison", "catches modelling slips early"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The grillage workflow",
              caption:
                "From concrete geometry to design forces in six disciplined stages.",
              stages: [
                { label: "Idealise deck as grid", note: "longitudinal + transverse members" },
                { label: "Assign EI and GJ", note: "effective flange, torsion constants" },
                { label: "Verify the model", note: "weight and reaction checks" },
                { label: "Apply loads at nodes", note: "wheel patches, lanes" },
                { label: "Solve stiffness equations", note: "software or spreadsheet" },
                { label: "Extract member forces", note: "design moments, shears, torques" },
              ],
            },
            callout: {
              type: "warning",
              title: "Garbage in, garbage out",
              body: "A grillage model that weighs less than the real deck, or whose reactions do not sum to the applied load, will silently under-design the girders. These two checks - plus a Courbon comparison for right decks - are the professional minimum before any grillage output is used for design, and quoting them earns method marks in theory answers.",
            },
            keyTerms: [
              { term: "Torsion constant", definition: "The section property GJ governing a member's resistance to twist; essential in grillage models of beam decks." },
              { term: "Degree of freedom", definition: "An independent displacement at a grid node - vertical translation and two rotations in grillage analysis." },
              { term: "Skew angle", definition: "The angle between the deck's transverse axis and the normal to the supports, which defeats simple distribution methods." },
            ],
            examQuestions: [
              {
                q: "Explain the grillage method of bridge deck analysis: the idealisation, the member properties, the checks on the model, and its advantages and limitations compared with Courbon's method.",
                marks: 7,
                outline: [
                  "Define the idealisation: plane grid of longitudinal girders and transverse diaphragm/slab members.",
                  "State nodal degrees of freedom: vertical displacement and two rotations.",
                  "Member properties: EI with effective flange; GJ torsion constants for every member.",
                  "Rules: member lines through shear centres; model weight equal to deck weight.",
                  "Checks: sum of reactions equals applied load; compare with Courbon for right decks.",
                  "Advantages: two-way distribution, skew, variable stiffness, continuity; fast and design-ready output.",
                  "Limitations: plane idealisation - box distortion and local effects need supplementary checks.",
                ],
              },
              {
                q: "Why must torsion constants be included for T-beam decks in grillage analysis?",
                marks: 2,
              },
              {
                q: "State two advantages of grillage analysis over Courbon's method.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "RCC T-beam and box-girder superstructures",
            body: [
              "For spans beyond the reach of a solid slab - roughly beyond ten metres in reinforced concrete - the deck graduates to a T-beam superstructure. The deck slab becomes the flange of a series of T-beams, each comprising a vertical web and the slab strip acting with it; diaphragms interconnect the webs, and the whole is cast monolithically on staging. The trial depth of a girder is of the order of one-tenth to one-twelfth of the span, and the flange width that may be counted for bending is the least of the centre-to-centre girder spacing, one-sixth of the effective span plus the web width, and the actual available flange width on each side.",
              "Design then follows the reinforced-concrete routine with bridge-specific accents. The maximum moment includes the Courbon or grillage distribution share and the impact allowance; the section is designed as a T-section with the stress block in the flange for most locations; shear near the supports, development length and the anchorage of negative steel over intermediate supports of continuous decks receive special attention. Prestressing extends the same form far beyond reinforced concrete: standard I-girders or bulb-T girders are cast in yards, transported and launched, and the end blocks, diaphragms and cast-in-place deck complete the structure. Durability detailing - cover, drainage, creep and shrinkage allowances - completes the design file.",
              "The box girder answers a different demand. Its closed cellular section gives a torsional stiffness one or two orders larger than an open T-section, which is why curved flyovers and long continuous viaducts adopt it; its smooth soffit is elegant, hides utilities and sheds a clean silhouette in the urban sky; and its construction suits precast segmental or cast-in-situ balanced-cantilever methods. Prestressed box superstructures dominate Indian urban viaducts, from metro corridors to the sea links. Selection between T-beam and box is therefore not an aesthetic contest: span range, curvature, torsion demand, depth restriction and the intended construction method decide, and the comparison table is a standing exam question.",
            ],
            bullets: [
              "T-beam deck: slab is the flange, webs carry the bending; monolithic cast on staging.",
              "Trial girder depth: of the order of span/10 to span/12.",
              "Effective flange width: least of c/c girder spacing, span/6 + web width, and the actual flange available.",
              "Design accents: distribution share plus impact in the moment; shear and development length near supports.",
              "PSC I-girders and bulb-T girders extend the form to 40 m and beyond, cast in yards and launched.",
              "Box girder: closed cell gives very high torsional stiffness - the choice for curved flyovers and viaducts.",
            ],
            table: {
              caption: "T-beam versus box girder - the selection table.",
              headers: ["Property", "T-beam deck", "Box girder deck"],
              rows: [
                ["Typical span", "10-30 m RCC; 25-45 m PSC I-girder", "40-150 m prestressed"],
                ["Torsional stiffness", "low - open section", "very high - closed cell"],
                ["Curved alignment", "poor fit; twist demands diaphragms", "natural fit for flyovers"],
                ["Construction", "staging or precast launched girders", "segmental or balanced cantilever"],
                ["Depth and looks", "deeper webs visible", "sleek soffit; utilities inside"],
                ["Indian presence", "everyday road bridges", "metro viaducts and sea links"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Open T-section versus closed box section",
              caption:
                "The closed cell is the whole story: torsion resisted by a circulating shear flow.",
              left: {
                heading: "T-beam deck (open)",
                items: [
                  "Slab flange plus vertical webs",
                  "Low torsional stiffness - twists easily",
                  "Diaphragms share heavy eccentric loads",
                  "Simple staging or launched precast girders",
                  "Economical straight spans to about 40 m",
                ],
              },
              right: {
                heading: "Box girder deck (closed)",
                items: [
                  "Top slab, inclined webs, bottom slab",
                  "Very high torsional stiffness - closed shear flow",
                  "Ideal on curved flyovers and ramps",
                  "Segmental casting or balanced cantilever",
                  "Rules 40-150 m urban and river spans",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The effective flange rule verbatim",
              body: "Write the three limits as a list: (i) centre-to-centre spacing of girders, (ii) one-sixth of the effective span plus web width, (iii) actual available flange width - and take the least. This exact triplet is a two-to-three mark certainty in T-beam questions, and it is almost always left half-written by candidates.",
            },
            keyTerms: [
              { term: "Effective flange width", definition: "The slab width counted as the T-beam compression flange: least of girder spacing, span/6 + web width, and actual width." },
              { term: "Torsional stiffness", definition: "A section's resistance to twist, GJ; orders higher for closed boxes than for open T-sections." },
              { term: "I-girder", definition: "A precast prestressed girder of I section, transported and launched to carry the deck slab." },
            ],
            examQuestions: [
              {
                q: "Describe the design of an RCC T-beam bridge deck: components, trial dimensions, the effective flange width rule, and the sequence of design checks.",
                marks: 7,
                outline: [
                  "Components: deck slab as flange, girder webs, end and intermediate diaphragms.",
                  "Trial proportions: girder depth of order span/10 to span/12; web width from shear.",
                  "State the effective flange rule: least of c/c spacing, span/6 + web width, actual width.",
                  "Loads: dead load of slab and girder; live load share from Courbon or grillage; impact.",
                  "Design the section as a T-beam with stress block in the flange; check web shear and development length.",
                  "Design the diaphragms and the slab by Pigeaud's method; check deflection and cracking.",
                  "Detail: curtailment, anchorage over supports, cover and drainage.",
                ],
              },
              {
                q: "Why are box girders preferred for curved flyovers?",
                marks: 2,
              },
              {
                q: "State the three limits on effective flange width of a T-beam and the rule for choosing among them.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Composite construction and truss analysis",
            body: [
              "Composite construction marries a structural steel girder with a reinforced concrete deck slab so that the two act as one beam. The steel alone would carry load economically but waste capacity in compression; the slab alone is heavy and weak in tension. Joining them with shear connectors lets the steel web and bottom flange act as the tension chord while the slab acts as the compression chord of a single T-section, cutting depth, raising stiffness and trimming steel tonnage - savings of the order of a quarter of the steel are routine. IRC:22 governs the design, which proceeds on a transformed section: concrete areas are divided by the modular ratio, the ratio of steel to concrete elastic modulus, to convert them into equivalent steel.",
              "Three design decisions carry the marks. Shored construction supports the wet slab on staging so the composite section carries all loads; unshored construction lets the bare steel carry the slab's dead weight first, which is faster but demands checks at two stages. Shear connectors - headed studs or short channels welded to the top flange - must resist the horizontal shear flow at the interface; their number, spacing and fatigue class are design quantities. Long-term effects complete the picture: creep transfers stress from slab to steel over the years, shrinkage of the slab induces tension in it, and temperature gradients across the two materials add secondary forces the designer must acknowledge rather than ignore.",
              "The unit closes the superstructure syllabus with truss analysis. Moving loads on a truss are handled through influence lines: the load position that maximises a chord force or a diagonal force is read directly off the influence line, and the method of sections isolates a panel to expose three unknowns at once. In a Pratt truss the diagonals are tension members and the verticals compression; in a Warren truss the equilateral web alternates tension and compression with fewer members to fabricate. Compression chords are designed against buckling between panel points, tension members for net section through the bolt holes, and every gusset plate is checked for bearing and block shear.",
            ],
            bullets: [
              "Composite action: steel tension chord + concrete compression chord, joined by shear connectors.",
              "Transformed section: divide concrete areas by the modular ratio n = Es/EC to work in steel units.",
              "Shored erection: composite section carries everything; unshored: bare steel carries the wet slab first - check both stages.",
              "Shear connectors: headed studs (standard) or channels; resist interface shear flow; fatigue-classed.",
              "Long-term effects: creep shifts stress to steel; shrinkage and temperature add secondary forces.",
              "Truss analysis: influence lines find the worst load position; method of sections solves chords and diagonals.",
            ],
            table: {
              caption: "What composite action buys, member by member.",
              headers: ["Aspect", "Non-composite", "Composite"],
              rows: [
                ["Bending capacity", "slab and girder bend separately", "one combined inertia - much larger"],
                ["Steel tonnage", "full girder carries all load", "typically 20-30% less steel"],
                ["Structural depth", "deeper for equal stiffness", "shallower section for same stiffness"],
                ["Deflection", "larger", "markedly reduced"],
                ["Interface", "slip permitted - no composite gain", "connectors transmit shear flow"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Achieving composite action",
              caption:
                "The interface detail decides whether the two materials behave as one beam.",
              start: "Connecting a concrete deck to a steel girder",
              branches: [
                {
                  label: "Headed stud connectors",
                  outcome: "Welded through the deck to the flange; resist shear flow with proven fatigue detail - the standard choice",
                  good: true,
                },
                {
                  label: "Channel or angle connectors",
                  outcome: "Higher capacity per piece at the cost of heavier welding - a proven alternative",
                  good: true,
                },
                {
                  label: "Bond and friction alone",
                  outcome: "Slips under cyclic load within months - no reliable composite action",
                  good: false,
                },
                {
                  label: "Unshored design erected without staging",
                  outcome: "Bare-steel stage never checked although it carries the wet slab - the classic mismatch failure",
                  good: false,
                },
              ],
            },
            callout: {
              type: "tip",
              title: "The transformed-section trick",
              body: "All composite-section arithmetic reduces to one move: convert concrete to equivalent steel by dividing its area by the modular ratio n, then treat the result as a plain steel section. State the move, compute the new neutral axis and the new moment of inertia, and the rest is ordinary beam design - the shortest full-marks route in this unit.",
            },
            keyTerms: [
              { term: "Shear connector", definition: "A stud or channel welded to the steel top flange to transmit horizontal shear between deck and girder." },
              { term: "Modular ratio", definition: "The ratio of steel to concrete elastic modulus used to transform concrete area into equivalent steel." },
              { term: "Transformed section", definition: "The equivalent single-material section obtained by applying the modular ratio to the concrete parts." },
            ],
            examQuestions: [
              {
                q: "Explain composite construction in bridges: the concept, its advantages, the role and types of shear connectors, and the transformed section method of design.",
                marks: 7,
                outline: [
                  "Define composite action: steel girder + concrete slab acting as one T-beam.",
                  "Quantify the advantages: 20-30% steel saving, shallower depth, smaller deflection.",
                  "Explain the interface: horizontal shear flow must be transmitted - hence connectors.",
                  "Describe headed studs and channel connectors with a sketch.",
                  "Explain shored versus unshored erection and the two-stage checks of the latter.",
                  "Present the transformed section: divide concrete areas by the modular ratio; find neutral axis and inertia.",
                  "Mention long-term effects: creep, shrinkage, temperature; cite IRC:22.",
                ],
              },
              {
                q: "Why are headed studs preferred over channel connectors in modern composite bridges?",
                marks: 2,
              },
              {
                q: "Distinguish between shored and unshored composite construction, and state what each demands of the designer.",
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
      title: "Bearings and Substructure",
      summary:
        "Everything below the deck: the functions and families of bearings from laminated elastomeric pads to pot and PTFE types with a full elastomeric design sequence; pier types and their load arrangements; gravity, cantilever and counterfort abutments with their earth pressure; wing walls, expansion joints, and the foundations - footings, piles and wells - that must reach below scour.",
      chapter: {
        number: "04",
        title: "Bearings, Piers, Abutments and Foundations",
        intro:
          "Unit IV descends from the bearing line to the founding stratum. It opens with the bearing catalogue and its functions - transmit, rotate, translate, resist - then designs the laminated elastomeric bearing in full, from shape factor to anchorage. Piers follow with their types and the critical one-span-loaded arrangement; abutments bring earth pressure, surcharge and the middle-third rule; and the unit closes with wing walls, expansion joints and the foundation family - spread footings, piles and the well caissons of Indian rivers - founded below the design scour.",
        inOneBreath:
          "Bearings transmit load while allowing rotation and movement, one line fixed per span: laminated elastomeric pads by rubber deformation, pot bearings by a confined disc, PTFE sliders for heavy movement; elastomeric design chains the shape factor S = ab/(2(a+b)t) to stress, shear strain and stability checks; piers see their maximum moment with one span loaded; abutments retain the approach with Rankine active pressure plus live-load surcharge and obey the middle-third rule; wing walls return or splayed retain the fill beyond; expansion joints surface the movements the bearings allow; and footings, piles or wells found the structure below design scour with a customary grip of at least one-third of the scour depth.",
        sections: [
          {
            number: "4.1",
            title: "Bridge bearings: functions and types",
            body: [
              "Bearings are the smallest, least glamorous and most consequential components of a bridge. They stand between the superstructure and substructure and must satisfy four demands at once: transmit the vertical reactions; permit the end rotations that follow every deflection of the span; permit longitudinal and transverse translations from thermal movement, creep and shrinkage; and - when the scheme demands - resist or transfer horizontal forces from braking, wind and seismic action. A span therefore carries a bearing strategy, not just four pads: one line is fixed, the opposite line free or guided, so the deck knows exactly where its fixed point lies and every movement radiates from it.",
              "The catalogue follows from the demands. Laminated elastomeric pads satisfy all four functions by rubber deformation and are the default for most ordinary reactions. Pot bearings confine a rubber disc inside a steel cylinder so that it behaves almost like a fluid under compression while rotating freely - the workhorse for heavy prestressed girders. Spherical and cylindrical sliding bearings mate a PTFE surface with stainless steel to carry still heavier loads with very small friction; disc bearings offer a compact modern compromise; and rocker, roller and pin steel bearings - the historical solution - survive mainly in old bridges awaiting replacement because their corrosion and maintenance burden is heavy.",
              "Selection is a matching exercise. Reaction and movement magnitudes come from the analysis; rotation capacity from the span's deflection geometry; horizontal-force duty from the fixed-point strategy; maintenance access from the pier headroom; and the seismic zone may push the choice toward isolation bearings - lead-rubber or friction-pendulum devices that lengthen the structure's period and concentrate damage in replaceable elements. Bearings fail in service more often than any other component, usually through water and salt pooled on the bearing shelf, so detailing of drainage, pedestals and inspection access around the bearing is as much a part of bearing design as the bearing itself.",
            ],
            bullets: [
              "Four functions: transmit vertical load, permit rotation, permit movement, resist or transfer horizontal force.",
              "Bearing strategy: one fixed line per span; the opposite line free or guided - movements radiate from the fixed point.",
              "Laminated elastomeric pads: all four functions by rubber deformation; the default for ordinary bridges.",
              "Pot bearing: confined rubber disc acts like a fluid in compression; rotates freely - heavy PSC girders.",
              "PTFE-stainless sliding (spherical, cylindrical): minimum friction for heavy movements.",
              "Seismic isolation: lead-rubber or friction pendulum lengthen the period; damage parked in replaceable parts.",
            ],
            table: {
              caption: "The bearing catalogue at a glance.",
              headers: ["Type", "Movement", "Rotation", "Character"],
              rows: [
                ["Laminated elastomeric", "elastic shear both ways", "by pad deformation", "default; near-zero maintenance"],
                ["Pot", "with PTFE slider if needed", "confined disc rotates", "heavy reactions; standard PSC choice"],
                ["Spherical / cylindrical PTFE", "large, low friction", "excellent", "heaviest loads and movements"],
                ["Disc", "moderate", "polyether disc", "compact modern compromise"],
                ["Steel rocker / roller", "one-directional rolling", "rocker only", "legacy; corrosion and upkeep heavy"],
                ["Seismic isolators", "large by design", "by element", "energy-absorbing; seismic retrofit"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the bearing scheme",
              caption:
                "Reaction, movement and the fixed-point strategy select the type.",
              start: "Bearing scheme for a 35 m PSC girder span",
              branches: [
                {
                  label: "Laminated elastomeric pads",
                  outcome: "Load, rotation and movement all absorbed by rubber deformation; cheap and near maintenance-free - the default",
                  good: true,
                },
                {
                  label: "Pot bearings, fixed line + PTFE free line",
                  outcome: "Heavy reactions with controlled movement - standard on major girder corridors",
                  good: true,
                },
                {
                  label: "Legacy steel rocker-roller bearings",
                  outcome: "Corrosion, seizure and constant repainting - phased out for new construction",
                  good: false,
                },
                {
                  label: "Bolting the girder rigidly to the pier cap",
                  outcome: "Blocks rotation and thermal movement; cracking and spalling follow within seasons",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the four functions verbatim",
              body: "Every bearing question begins with the four functions - transmit, rotate, translate, resist horizontal force - and a sketch of the fixed-point strategy with arrows showing movements radiating from the fixed line. These two moves alone earn the first three marks of any seven-marker on bearings.",
            },
            keyTerms: [
              { term: "Fixed bearing", definition: "The bearing line that transmits horizontal forces while preventing translation, anchoring the span's fixed point." },
              { term: "Pot bearing", definition: "A bearing whose rubber disc is confined in a steel pot, carrying heavy compression while rotating freely." },
              { term: "PTFE", definition: "Polytetrafluoroethylene - the low-friction sliding surface paired with stainless steel in heavy-movement bearings." },
            ],
            examQuestions: [
              {
                q: "State the functions of bridge bearings, describe with sketches the laminated elastomeric, pot and steel rocker types, and explain the fixed-bearing arrangement of a simply supported span.",
                marks: 7,
                outline: [
                  "List the four functions: transmit vertical load, permit rotation, permit translation, resist horizontal force.",
                  "Sketch the span in plan showing one fixed line, one free or guided line - the fixed point strategy.",
                  "Elastomeric pad: rubber layers and steel shims; all functions by deformation.",
                  "Pot bearing: confined disc under compression, free rotation, PTFE slider for movement.",
                  "Steel rocker-roller: rolling and rocking steel; note the maintenance burden that retired it.",
                  "Explain what happens if movement is blocked: parasitic forces, cracking, spalling.",
                  "Close with selection drivers: reaction, movement, rotation, access, seismic zone.",
                ],
              },
              {
                q: "Why is one line of bearings of a span made fixed?",
                marks: 2,
              },
              {
                q: "Explain the working of a pot bearing and its typical application.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Designing a laminated elastomeric bearing",
            body: [
              "A laminated elastomeric bearing is a sandwich of rubber layers bonded to thin steel shims. The rubber is soft in shear and rotation but, when confined between shims, stiff in compression: each layer can bulge only sideways, and the bulge resistance grows steeply with the layer's shape factor S = a x b/(2 x (a + b) x t) - the loaded area divided by the area free to bulge - where a and b are the pad's plan dimensions and t the thickness of a single internal layer. Stacking layers multiplies the shear movement capacity while the shims keep the vertical stiffness high, preventing the pad from extruding sideways the way a plain block would under sustained load.",
              "The design checks follow the order the examiner expects. First, the mean compressive stress under the maximum reaction is limited - typically to a value of the order of ten megapascals for standard hardness - and the minimum reaction case is checked for non-uplift. Second, the shape factor is kept within the customary range of roughly five to twelve, which keeps the compression modulus predictable. Third, the shear strain from the design movement is limited to about half of the total rubber thickness; fourth, rotation is limited so that edge lift-off and local over-stress cannot occur; fifth, stability against rollover ties the pad's total thickness to its plan dimensions; and finally anchorage - friction usually suffices, but bolts or central dowels are added when uplift or large shear demands it.",
              "Because the arithmetic is short, this section earns its marks through completeness rather than algebra. A design that opens with the reaction envelope, chooses plan size for stress, chooses layer count for movement, and closes with rotation, stability and anchorage checks - each named with its limit - is a full-marks answer, and the worked example below runs exactly that sequence for a 2000 kN reaction and twenty millimetres of movement with a four-function calculator. Where the movement exceeds a practical pad's shear capacity, a PTFE slider is mounted above the elastomeric part, combining near-frictionless sliding with elastic rotation in one compact device.",
            ],
            bullets: [
              "Anatomy: rubber layers bonded to steel shims - stiff in compression, soft in shear and rotation.",
              "Shape factor: S = a x b/(2 x (a + b) x t) per internal layer; keep it in the customary 5 to 12 band.",
              "Stress check: mean pressure of the order of 10 MPa; always check the minimum reaction for uplift too.",
              "Shear check: movement divided by total rubber thickness limited to about one-half.",
              "Rotation and stability: prevent edge lift-off and rollover; thickness tied to plan dimensions.",
              "Anchorage: friction normally suffices; bolts or dowels where uplift or heavy shear acts; PTFE slider above if movement is large.",
            ],
            codeExample: {
              language: "python",
              caption: "Feasibility checks for a laminated elastomeric pad under a 2000 kN reaction.",
              code: `# Laminated elastomeric bearing - quick feasibility checks

a = 450.0      # pad dimension along the bridge, mm
b = 450.0      # pad dimension across the bridge, mm
t = 10.0       # thickness of ONE internal rubber layer, mm
n_layers = 5   # number of internal layers
R = 2000.0     # maximum service reaction, kN
delta = 20.0   # design movement (thermal + creep + shrinkage), mm

# 1. mean compressive stress
A = a * b                    # loaded area, sq mm
sigma = R * 1000.0 / A       # N per sq mm = MPa
print(f"mean stress = {sigma:.2f} MPa (typical limit about 10 MPa)")

# 2. shape factor of an internal layer
S = a * b / (2.0 * (a + b) * t)
print(f"shape factor S = {S:.2f} (keep within about 5 to 12)")

# 3. shear strain from the design movement
t_e = n_layers * t           # total elastomer thickness, mm
gamma = delta / t_e
print(f"shear strain = {gamma:.2f} (typical limit about 0.5)")

ok = (sigma <= 10.0) and (5.0 <= S <= 12.0) and (gamma <= 0.5)
print("bearing feasible:", ok)
# output: sigma = 9.88 MPa, S = 11.25, gamma = 0.40 -> True`,
            },
            table: {
              caption: "Typical design quantities for a standard-hardness pad.",
              headers: ["Quantity", "Typical value or limit"],
              rows: [
                ["Shear modulus G", "about 1 MPa at 60 IRHD hardness"],
                ["Mean compressive stress", "of the order of 10 MPa"],
                ["Shape factor S", "about 5 to 12"],
                ["Shear strain limit", "about 0.5 of total rubber thickness"],
                ["Movement capacity", "shear strain x total elastomer thickness"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The elastomeric design sequence",
              caption:
                "Six checks in order - each a mark, together a full answer.",
              steps: [
                { label: "Reaction envelope", note: "maximum and minimum" },
                { label: "Plan size", note: "mean stress within limit" },
                { label: "Layer thickness and count", note: "S in the 5-12 band" },
                { label: "Shear strain check", note: "movement / t_e <= about 0.5" },
                { label: "Rotation, stability, anchorage", note: "no lift-off, no rollover" },
                { label: "PTFE slider if needed", note: "for large movements" },
              ],
            },
            callout: {
              type: "exam",
              title: "Check the minimum, not only the maximum",
              body: "Almost every candidate checks the maximum reaction; examiners reserve a mark for the minimum reaction case, where a lightly loaded span can let the pad uplift or slide. Write 'maximum and minimum reaction checked' explicitly, then move to shape factor - that single sentence is regularly the difference between 5 and 7 marks.",
            },
            keyTerms: [
              { term: "Shape factor", definition: "The ratio of loaded area to the area free to bulge for one rubber layer, S = ab/(2(a+b)t), governing compressive stiffness." },
              { term: "Shear strain", definition: "The ratio of design horizontal movement to total rubber thickness, limited in design to about one-half." },
              { term: "Steel shim", definition: "The thin internal plate bonded to the rubber that blocks extrusion and raises vertical stiffness." },
            ],
            examQuestions: [
              {
                q: "Describe the construction of a laminated elastomeric bearing and the complete sequence of design checks, defining the shape factor and stating the purpose of every check.",
                marks: 7,
                outline: [
                  "Sketch the pad: rubber layers and steel shims bonded alternately.",
                  "Explain the mechanics: soft in shear and rotation, stiff in compression by confinement.",
                  "Define shape factor S = ab/(2(a+b)t) and its customary range.",
                  "Check 1: mean compressive stress under maximum reaction; also minimum reaction for uplift.",
                  "Check 2: shear strain from movement against total rubber thickness.",
                  "Check 3: rotation - prevent edge lift-off; Check 4: stability against rollover; anchorage.",
                  "Close: PTFE slider mounted above when movement exceeds pad capacity.",
                ],
              },
              {
                q: "Define the shape factor of an elastomeric bearing layer.",
                marks: 2,
              },
              {
                q: "Why are steel shims laminated inside an elastomeric pad instead of using solid rubber?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Piers: types, loads and stability",
            body: [
              "The pier is the intermediate support: it receives the loads of two adjacent spans through their bearings and delivers them to the foundation. Its forms follow the site. Solid wall piers - masonry or concrete - suit short, heavy railway bridges and shallow rivers; circular or rectangular shaft piers carrying a hammerhead cap suit most road bridges; trestle and portal piers of slender columns suit high viaducts and urban flyovers where the waterway is narrow or absent; and river piers carry streamlined noses against current, debris and log impact. Height, waterway economy, seismic mass and aesthetics together select the type.",
              "The load list on a pier is the whole of Unit II concentrated in one member. Vertically: the two spans' dead and live loads with impact, and the pier's own weight. Longitudinally: braking and traction, longitudinal wind on the superstructure and on the pier itself, and the longitudinal seismic force. Transversely: wind and seismic forces, centrifugal load on curved decks, water current pressure on the submerged shaft and, occasionally, collision. The critical arrangements are classical: both spans loaded maximises the axial force and the bearing pressure, while one span loaded with its neighbour unloaded produces the maximum moment about both axes - and it usually governs the pier shaft design.",
              "Design proceeds through stability and strength. A gravity pier is proportioned so that the resultant stays within the middle third of its base under every combination - no tension in masonry - and is checked for sliding along the base. A reinforced concrete shaft or trestle is designed as a member in combined compression and biaxial bending, with ductile detailing in seismic zones: confinement steel, restricted lap splices and generous seat widths for the girders above. Hydraulic design shapes the nose, fixes the founding level below scour, and adds cutwaters or protection where debris is expected. The pier cap - the hammerhead or capping beam that carries the bearings - is designed for the local bearing and punching effects of the concentrated reactions.",
            ],
            bullets: [
              "Pier duty: carry two spans' bearings and deliver their loads to the foundation.",
              "Types: solid wall, shaft with hammerhead cap, trestle and portal, each matched to site and height.",
              "Vertical loads: both spans' dead + live + impact, plus the pier's self weight.",
              "Horizontal loads: braking and traction, wind, seismic, centrifugal, water current, occasional collision.",
              "Both spans loaded = maximum axial force; one span loaded = maximum moment - usually the governing case.",
              "Gravity piers: resultant within the middle third; RCC shafts: compression with biaxial bending plus ductile detailing.",
            ],
            table: {
              caption: "Pier types and their habitats.",
              headers: ["Type", "Typical use", "Merit", "Drawback"],
              rows: [
                ["Solid wall (gravity)", "short heavy rail bridges, shallow rivers", "massive, durable, debris-proof", "blocks waterway; huge seismic mass"],
                ["Hammerhead shaft", "standard road bridges", "clean waterway, one foundation", "biaxial bending demands heavy steel"],
                ["Trestle / portal", "high viaducts, flyovers", "slender, ductile, fast to build", "needs protection where vehicles can hit"],
                ["Twin column with cap", "wide urban decks", "spreads heavy eccentric decks", "two foundations per station"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the pier type",
              caption:
                "Height, waterway and seismicity decide before the architect is consulted.",
              start: "Pier type for a 20 m high river crossing",
              branches: [
                {
                  label: "RCC hammerhead on a single shaft",
                  outcome: "Clean waterway and one foundation per station - the road bridge standard",
                  good: true,
                },
                {
                  label: "Twin-column trestle or portal",
                  outcome: "Slender and ductile; fast construction - viaducts and urban flyovers",
                  good: true,
                },
                {
                  label: "Solid wall pier",
                  outcome: "Heavy railway crossings and debris-laden shallow rivers; mass resists impact",
                  good: true,
                },
                {
                  label: "Unreinforced masonry monolith",
                  outcome: "Enormous waterway blockage and seismic mass - obsolete for new work",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "The one-span-loaded case",
              body: "When asked which live-load arrangement governs a pier, the answer is one span loaded with its neighbour unloaded: maximum moment about both axes with reduced axial force - the case that sizes the shaft steel. Both spans loaded gives maximum axial force and bearing pressure. State both, and mark which one governs which check.",
            },
            keyTerms: [
              { term: "Hammerhead pier", definition: "A single shaft pier whose flared cap carries the bearings of both spans like a hammer head." },
              { term: "Trestle pier", definition: "A pier of several slender columns connected by a cap, used on viaducts and flyovers." },
              { term: "One-span-loaded condition", definition: "The live-load arrangement maximising pier moment: one span loaded, the adjacent span unloaded." },
            ],
            examQuestions: [
              {
                q: "Enumerate the loads acting on a bridge pier, explain the critical load arrangements including the one-span-loaded case, and outline the design checks for a gravity and for an RCC pier.",
                marks: 7,
                outline: [
                  "List vertical loads: dead and live load of both spans with impact, self weight of pier.",
                  "List longitudinal: braking and traction, wind, seismic; transverse: wind, seismic, centrifugal, current.",
                  "Arrangement 1: both spans loaded - maximum axial force and bearing pressure.",
                  "Arrangement 2: one span loaded - maximum moment about both axes; usually governs the shaft.",
                  "Gravity pier: resultant within middle third under all combinations; sliding check at base.",
                  "RCC pier: compression with biaxial bending; ductile detailing and seat width in seismic zones.",
                  "Add water current pressure on the submerged shaft and nose shaping against debris.",
                ],
              },
              {
                q: "Why are pier noses rounded or streamlined in rivers?",
                marks: 2,
              },
              {
                q: "When is a trestle pier preferred over a hammerhead pier?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Abutments and earth pressure",
            body: [
              "The abutment is the end support that must do two jobs at once: carry the deck like a pier, and retain the approach embankment like a retaining wall. Gravity abutments resist the soil with their mass - the masonry solution beneath every old bridge. Cantilever abutments, the modern standard, comprise a stem on a base slab with a heel reaching back into the fill, using the soil's own weight to stabilise the wall against overturning; counterfort abutments add triangular ribs behind tall stems to carry the stem bending back to the base; spill-through or open abutments let the fill pass between column legs; and integral abutments eliminate the joint entirely, flexing with the deck - the jointless trend of modern practice.",
              "Earth pressure supplies the dominant horizontal load. The stem is designed for the active pressure of the backfill, computed with Rankine's coefficient Ka = (1 - sin phi)/(1 + sin phi) for a cohesionless soil, plus the live-load surcharge converted into an equivalent height of fill acting on the back of the stem. Where the stem cannot yield, at-rest pressures apply instead. The base is checked for overturning about the toe, sliding along the base using the base friction coefficient, and bearing pressure - kept within the middle third under the classical working-stress tradition so that no tension develops at the heel. Passive resistance in front of the toe is credited cautiously, since that soil may be scoured or excavated during the bridge's life.",
              "The detailing around the abutment decides its service life. The bearing shelf must be wide enough to jack the span and replace bearings decades later; back walls and expansion joints must accommodate deck-end rotations and movements without crushing; and the approach slab bridges the inevitable settlement gap between the flexible embankment and the rigid abutment, sparing traffic the classic bump at the end of the bridge. Wing walls - the subject of the next section - retain the fill beyond the abutment faces, and every year of service the drainage, sealing and joint maintenance quietly decide whether the abutment reaches its design life or its replacement list.",
            ],
            bullets: [
              "Abutment = pier duty + retaining wall duty: carry the deck and hold the approach embankment.",
              "Types: gravity, cantilever (stem + heel), counterfort for tall stems, spill-through, integral.",
              "Active pressure: Rankine Ka = (1 - sin phi)/(1 + sin phi); at-rest pressure where the stem cannot yield.",
              "Live load on the approach becomes an equivalent surcharge height of fill on the stem.",
              "Stability: overturning about the toe, sliding on the base, bearing within the middle third.",
              "Approach slab bridges embankment settlement; weep holes and filters keep the backfill drained.",
            ],
            table: {
              caption: "Abutment types and their stabilising mechanisms.",
              headers: ["Type", "Mechanism", "Soil demand", "Typical use"],
              rows: [
                ["Gravity", "self weight resists overturning", "low walls, good base", "old masonry bridges"],
                ["Cantilever", "heel fill stabilises stem + base", "moderate heights", "standard road bridge"],
                ["Counterfort", "ribs carry stem bending to base", "tall walls", "high approach embankments"],
                ["Spill-through", "fill passes between legs", "stable slopes", "wide waterways, low fills"],
                ["Integral", "abutment flexes with deck", "short jointless spans", "modern jointless practice"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Gravity versus cantilever abutment",
              caption:
                "Mass against geometry: the same soil pressure, two ways of standing up to it.",
              left: {
                heading: "Gravity abutment",
                items: [
                  "Stability from masonry or mass concrete self weight",
                  "No tension permitted anywhere at the base",
                  "Massive sections; stone where it is local",
                  "Suits low heights on sound foundations",
                  "Cheap to maintain, expensive in material",
                ],
              },
              right: {
                heading: "Cantilever abutment",
                items: [
                  "Stem and base slab; heel fill stabilises the wall",
                  "Rankine active pressure plus surcharge on the stem",
                  "Middle-third bearing check about the toe",
                  "Standard for modern road bridges",
                  "Counterfort ribs added as stems grow tall",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Middle third and drainage",
              body: "Two sentences protect every abutment answer: the resultant must stay within the middle third of the base so no tension develops, and the backfill must be drained through filters and weep holes because waterlogged fill multiplies the pressure. Omit either and the design, and half the marks, leak away.",
            },
            keyTerms: [
              { term: "Active earth pressure", definition: "The pressure of a backfill yielding the wall just enough to mobilise minimum resistance, Ka = (1 - sin phi)/(1 + sin phi)." },
              { term: "Surcharge", definition: "Live load on the approach converted to an equivalent height of fill acting on the abutment stem." },
              { term: "Counterfort", definition: "A triangular rib behind a tall stem that carries its bending back to the base slab." },
            ],
            examQuestions: [
              {
                q: "With a sketch of a cantilever abutment, show the forces acting on it and describe all the stability and strength checks required for its design.",
                marks: 7,
                outline: [
                  "Sketch: stem, base slab with toe and heel, backfill, deck bearing on the breast wall.",
                  "Show forces: self weight, heel fill weight, active pressure triangle, surcharge rectangle, deck reactions.",
                  "Write Ka = (1 - sin phi)/(1 + sin phi) and compute the pressure diagram.",
                  "Check overturning about the toe under the worst combination.",
                  "Check sliding along the base with the friction coefficient; note cautious use of passive resistance.",
                  "Check bearing pressure and the middle-third condition - no tension at the heel.",
                  "Design the stem for bending and shear; add drainage, weep holes and the approach slab.",
                ],
              },
              {
                q: "Write the expression for Rankine's active pressure coefficient and define each term.",
                marks: 3,
              },
              {
                q: "Why is an approach slab provided behind an abutment?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Wing walls, foundations and expansion joints",
            body: [
              "Wing walls extend the abutment's retaining duty sideways along the approach. Return wing walls run parallel to the roadway, holding the fill clear of the carriageway edge; splayed wing walls flare back at about forty-five degrees to shorten their length and smooth the funnel of the approach; cantilever wings hang from the abutment stem, while independent wings stand on their own footings where the geometry is generous. They retain the approach embankment against spilling onto the road or the riverbank, protect the fill from erosion, and near water they double as training works that guide the flood flow cleanly through the waterway.",
              "Below the substructure, the foundation must find competent ground beyond the reach of scour. Spread footings suit rock or stiff strata at shallow depth; pile foundations - bored or driven - carry the loads through weak alluvium to a bearing stratum, with caps tying the groups and battered piles absorbing large horizontal forces. The well foundation, an Indian river speciality, is a hollow caisson sunk through the riverbed by dredging from inside; the steining is thickened for the sinking stresses, the bottom is sealed with a concrete plug, and the well is founded with a grip length - customarily at least one-third of the maximum scour depth - below the design scour level, which for alluvial streams follows Lacey's regime equations. Tilt and shift during sinking are controlled within strict code limits.",
              "Expansion joints complete the interface story, because every movement the bearings allow must surface somewhere in the running surface. Small spans manage with buried or compression-seal joints; standard girder bridges use elastomeric strip seals anchored in concrete blockouts; and long continuous structures need modular joints whose moving beams ride on support bars to absorb movements of hundreds of millimetres. Joints are the most maintenance-hungry component on any bridge: they leak, they rattle, and they dump chloride-laden water directly onto the bearing shelf below. Specifying the right movement range, anchorage detail and drainage behind the joint is therefore a design task of the same seriousness as the girder design itself.",
            ],
            bullets: [
              "Wing walls: return (parallel to roadway), splayed (about 45 degrees), cantilever from the stem or independent.",
              "Duty: retain approach fill, prevent erosion, and train the flood funnel into the waterway.",
              "Spread footings for rock or stiff soil; pile groups where weak alluvium overlies bearing stratum.",
              "Well foundations: hollow caissons sunk by dredging, plugged with concrete - the Indian river solution.",
              "Grip length: customarily at least one-third of the maximum scour depth below design scour.",
              "Expansion joints surface the bearing movements: compression seal, strip seal, modular for large movement.",
            ],
            table: {
              caption: "Choosing the foundation and the joint.",
              headers: ["Element", "Option", "When chosen"],
              rows: [
                ["Foundation", "spread footing", "rock or stiff stratum at shallow depth"],
                ["Foundation", "pile group", "weak alluvium over a bearing stratum"],
                ["Foundation", "well / caisson", "sandy alluvial rivers; heavy piers below scour"],
                ["Founding rule", "grip below scour", "at least one-third of maximum scour depth"],
                ["Joint", "compression / strip / modular", "movement range grows with span continuity"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Below the bearing line",
              caption:
                "The vertical stack that delivers every bridge load to competent ground.",
              layers: [
                { label: "Bearing shelf", note: "bearings and joints - movement enters here" },
                { label: "Pier cap or abutment stem", note: "distributes reactions" },
                { label: "Footing or pile cap", note: "spreads the load" },
                { label: "Piles or well steining", note: "through weak soil by skin and bearing" },
                { label: "Bearing stratum", note: "below design scour - grip secured" },
              ],
            },
            callout: {
              type: "exam",
              title: "Grip length - the two-mark certainty",
              body: "'What is grip length?' appears as a short question almost every year: the depth of foundation below the design scour level, customarily at least one-third of the maximum scour depth for wells in alluvial rivers. One sentence, two marks - never leave it unlearned.",
            },
            keyTerms: [
              { term: "Wing wall", definition: "A wall extending sideways from an abutment to retain the approach fill, in return, splayed or independent form." },
              { term: "Well foundation", definition: "A hollow caisson sunk through riverbed by internal dredging and plugged with concrete to carry heavy piers." },
              { term: "Expansion joint", definition: "The deck-surface device that accommodates thermal and other movements the bearings permit." },
            ],
            examQuestions: [
              {
                q: "Describe the construction and sinking of a well foundation for a river pier, including the grip length requirement, the control of tilt and shift, and the checks after founding.",
                marks: 7,
                outline: [
                  "Describe the well: steining, curb with cutting edge, dredge hole, top plug and cap.",
                  "Explain sinking: dredging from inside lowers the well under its own weight; kentledge added if needed.",
                  "State the founding rule: grip length at least about one-third of the maximum scour depth.",
                  "Explain scour: design scour from Lacey's regime equations in alluvial streams.",
                  "Control tilt and shift during sinking within code limits; describe corrective measures.",
                  "Seal with a concrete plug, plug the dredge hole and cast the well cap.",
                  "Close with checks: bearing capacity, lateral resistance, and stability under combinations.",
                ],
              },
              {
                q: "Distinguish return and splayed wing walls.",
                marks: 2,
              },
              {
                q: "What is grip length, and what is its customary minimum?",
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
      title: "Construction and Maintenance",
      summary:
        "Building the bridge and keeping it alive: cast-in-situ construction on staging and falsework; precast, prestressed and launched erection; steel fabrication and erection; the inspection regime and its non-destructive testing toolbox; and the retrofitting, load rating and bridge management systems - with India's landmark bridges as case studies.",
      chapter: {
        number: "05",
        title: "Construction, Inspection and Bridge Management",
        intro:
          "Unit V follows the bridge from the drawing to the demolition list. It opens with cast-in-situ construction on staging and falsework, follows precast and prestressed erection by crane, launching girder, balanced cantilever and incremental launching, and traces steel bridges from shop fabrication through trial assembly to bolted and welded site erection. The maintenance half covers the inspection regime and the NDT toolbox, then the strengthening, load rating and bridge management systems - closing with the Indian landmarks from Howrah Bridge to Atal Setu that illustrate every chapter of the course.",
        inOneBreath:
          "Cast-in-situ decks are built on staging designed for construction loads and set with camber, then destaged progressively; precast girders are yard-cast, match-cast for segmental work, and erected by crane, launching girder, balanced cantilever from the piers or incremental launching with a steel nose; steel bridges are shop-fabricated, trial-assembled and site-connected with HSFG bolts or tested welds under wind-limited erection stages; inspection runs from routine walk-overs through detailed surveys to post-flood special inspections, with UPV, rebound hammer, cores, cover meters and half-cell potential interrogating the concrete; retrofitting jackets, wraps and post-tensions deficient members; load rating divides remaining capacity by the rating vehicle effect; and the bridge management system - IBMS in India - optimises the network's maintenance by life-cycle cost.",
        sections: [
          {
            number: "5.1",
            title: "Cast-in-situ construction: staging and falsework",
            body: [
              "Cast-in-situ construction builds the superstructure in its final position on temporary works. Staging - props, frames or towers of steel or timber - carries the soffit shuttering from the ground or riverbed, and falsework is the umbrella term for this entire temporary structure. Its design is a structural design in its own right: self weight, the wet concrete, construction live loads and the erection-stage wind all combine on members whose failure would drop the entire span. Camber is built upward into the shuttering to cancel the predicted deflections of staging and structure, and the staging's own foundations must not settle - on soft riverbeds they frequently need piles of their own.",
              "The construction sequence is a numbered list every site engineer can recite. Once the piers are ready: erect and plumb the staging to the surveyed line and camber; fix the soffit and side shuttering; place reinforcement, ducts and inserts; pour the concrete in the planned sequence, with construction joints located at points of low moment; vibrate and cure for the specified period; for prestressed decks, stress the tendons and grout the ducts; and finally lower and remove the falsework progressively, never abruptly, so that the dead load migrates to the permanent structure without shock. Each step has a hold point and a record, and the records become the as-built file.",
              "Quality control and risk close the section. Formwork geometry is checked against the camber diagram before every pour; concrete strength is verified before stressing and before destaging; tendon ducts are checked for freedom before concreting; and every staging member is inspected for tightness after each concrete lift. Statistically, bridges are at their most vulnerable while under construction - the permanent load paths are incomplete and the temporary works carry their heaviest loads - and the classic lessons recur in every failure case study: flood or storm striking a half-completed deck, settlement of staging founded on unprepared ground, premature release of supports. That is exactly why examiners keep asking for the checks.",
            ],
            bullets: [
              "Falsework: the entire temporary structure; staging carries the soffit shuttering of the span.",
              "Design loads for falsework: self weight, wet concrete, construction live load, erection-stage wind.",
              "Camber: shuttering set high by the predicted deflection of staging plus structure.",
              "Construction joints placed at points of low moment; pour sequence planned before casting.",
              "Stress and grout tendons only after verified concrete strength; destage progressively, never abruptly.",
              "Erection is the statistically most vulnerable stage of a bridge's life - every check is a hold point.",
            ],
            table: {
              caption: "The falsework checklist and its criterion.",
              headers: ["Check", "Criterion"],
              rows: [
                ["Member strength", "all permanent + construction loads on the temporary structure"],
                ["Stability", "overturning and sliding under erection wind; full bracing system"],
                ["Foundation settlement", "within tolerance; pile the staging on soft riverbeds"],
                ["Camber", "upward set equal to predicted staging + structural deflection"],
                ["Destaging", "progressive lowering after verified strength - no sudden release"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Cast-in-situ deck construction sequence",
              caption:
                "Six stages from ready piers to a self-supporting span.",
              stages: [
                { label: "Piers and foundations ready", note: "surveyed span line" },
                { label: "Erect staging to line and camber", note: "plumbed, braced, founded" },
                { label: "Fix shuttering, rebar, ducts", note: "pre-pour inspection" },
                { label: "Pour concrete in sequence", note: "joints at low-moment points" },
                { label: "Cure, stress, grout", note: "strength verified first" },
                { label: "Destage progressively", note: "dead load migrates without shock" },
              ],
            },
            callout: {
              type: "warning",
              title: "The most vulnerable bridge is a half-built one",
              body: "Half the world's bridge failures happen during construction, not in service: the load paths are incomplete and the temporary works are at maximum load. Any exam answer on construction methods should name this explicitly and attach one check per stage - it is the sentence that shows engineering judgement, not just a memorised sequence.",
            },
            keyTerms: [
              { term: "Falsework", definition: "The complete temporary structure - staging, shuttering and bracing - supporting a span during construction." },
              { term: "Camber", definition: "The upward pre-set of shuttering cancelling the predicted deflection of staging and structure." },
              { term: "Construction joint", definition: "A planned concrete interface between successive pours, located where moment is low." },
            ],
            examQuestions: [
              {
                q: "Describe the cast-in-situ construction of a bridge deck on staging: the sequence of operations, the design of the falsework, and the checks at every stage.",
                marks: 7,
                outline: [
                  "Define staging and falsework; sketch the temporary support of the span.",
                  "Design loads: self weight, wet concrete, construction live load, erection wind.",
                  "Foundations of staging: no settlement; piles on soft riverbeds.",
                  "Sequence: erect and plumb staging; fix shuttering to the camber line.",
                  "Place rebar and ducts; pour in planned sequence with joints at low moment.",
                  "Cure; verify strength; stress and grout tendons for PSC decks.",
                  "Destage progressively with records at every hold point; name the construction-stage vulnerability.",
                ],
              },
              {
                q: "Why is camber provided in the shuttering of a cast-in-situ deck?",
                marks: 2,
              },
              {
                q: "Why must destaging be progressive rather than abrupt?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Precast and prestressed erection",
            body: [
              "Precasting moves the concrete work off the critical path. Girders and box segments are cast in a yard - on long-line beds for I-girders, in short-line cells for segmental boxes - cured under controlled conditions, and matched against their neighbours so that every joint face is a mirror of the previous segment's face. Quality is yard-controlled: dimensional tolerances, tendon duct alignment and concrete strength are all verifiable before the piece ever reaches the bridge. The trade-off is that every piece must now be lifted, transported and erected, and each of those stages applies loads - pick-up stresses at the lifting points, transport inertia, temporary support conditions - that the finished bridge will never see again.",
              "Erection methods follow the access. Road cranes and derricks place girders on short spans with good ground beneath. A launching girder - a steel truss that straddles the piers - lifts each span from the transporter and lowers it, then walks itself forward span after span; it rules long viaducts of many equal spans. Span-by-span construction assembles complete spans on the launching girder or on ground-supported falsework and post-tensions them in place. Balanced cantilever construction - placing segments alternately on each side of a pier and stitching the halves at mid-span - reaches spans of one hundred and fifty metres and more with no support from below, which is precisely why it owns deep river and valley crossings.",
              "Incremental launching builds the deck in a casting loop behind one abutment and pushes each finished increment out over the piers with hydraulic jacks, a steel launching nose leading every push across the next span. The method demands a constant-depth deck, a straight or constant-curvature alignment, and piers designed for the travelling erection loads; in exchange it needs no access along the alignment at all - the decisive advantage over deep valleys, operating highways and protected corridors. Every method choice is a matching question - span length and count, site access, programme and equipment availability decide - and the same physics of lifting stresses, temporary stages and closure tolerances marks the exam answers whichever method is named.",
            ],
            bullets: [
              "Precasting: yard quality control; match casting makes every segment joint a mirror surface.",
              "Handling is design too: pick-up stresses and transport loads checked before lifting.",
              "Cranes and derricks for short spans with access; launching girder for many equal spans.",
              "Span-by-span: assemble and post-tension a full span on falsework or the launching girder.",
              "Balanced cantilever: segments alternate from the pier; mid-span closure; reaches 150 m and beyond.",
              "Incremental launching: casting loop plus jacks plus steel nose; no access needed along the line.",
            ],
            table: {
              caption: "Erection methods matched to their habitats.",
              headers: ["Method", "Span reach", "Access needed", "Character"],
              rows: [
                ["Crane / derrick erection", "short spans", "good ground or barge", "simple, quick, weather-limited"],
                ["Launching girder", "many equal 20-50 m spans", "from the piers only", "rules long viaducts"],
                ["Span-by-span", "30-60 m", "falsework or launcher", "fast cycles on viaducts"],
                ["Balanced cantilever", "60-250 m", "none below deck", "rivers and deep valleys"],
                ["Incremental launching", "30-60 m constant depth", "one abutment only", "no line access required"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From casting yard to completed viaduct",
              caption:
                "The precast route: quality in the yard, geometry on the bridge.",
              steps: [
                { label: "Cast and match segments", note: "yard: tolerances and curing controlled" },
                { label: "Transport to site", note: "trailers, barges; check inertia loads" },
                { label: "Erect", note: "crane, launching girder or cantilever" },
                { label: "Join segments", note: "epoxy bed + temporary prestress" },
                { label: "Continuity prestress and closure", note: "tendons lock the line" },
                { label: "Deck furniture", note: "joints, bearings, parapets, drainage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Match the method to the site",
              body: "Erection-method questions are really matching questions: balanced cantilever for no access below, incremental launching for constant-depth decks with one working area, launching girder for hundreds of equal spans. Name the constraint first, then the method that answers it - the reverse order reads like a memorised list and scores like one.",
            },
            keyTerms: [
              { term: "Launching girder", definition: "A steel truss that straddles the piers, lifts each span into place, then moves itself forward for the next." },
              { term: "Balanced cantilever", definition: "Construction that grows the deck symmetrically from a pier and closes it at mid-span, needing no support below." },
              { term: "Match casting", definition: "Casting each segment against its predecessor so the joint faces mate perfectly at erection." },
            ],
            examQuestions: [
              {
                q: "Describe the incremental launching method of bridge construction: the casting loop, the launching nose, the jacking system, the deck requirements and the advantages of the method.",
                marks: 7,
                outline: [
                  "Set the scene: deck built behind the abutment in a fixed casting loop.",
                  "Casting loop: reinforcement, ducts, casting, curing, prestressing per increment.",
                  "Launching: hydraulic jacks push the finished deck out over the completed piers.",
                  "Steel launching nose: leads the push, reduces the cantilever moment at each pier.",
                  "Requirements: constant-depth deck, near-straight or constant-curvature alignment.",
                  "Piers designed for the travelling erection loads and friction during the launch.",
                  "Advantages: no access along the alignment - valleys, highways, protected corridors.",
                ],
              },
              {
                q: "What is match casting and why is it essential for segmental bridges?",
                marks: 3,
              },
              {
                q: "State the purpose of the launching nose.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Steel bridge erection",
            body: [
              "Steel bridges are shop products. Plates are cut, drilled or punched, and welded into girders and truss panels in the fabrication shop; assemblies are trial-assembled there - at least the first panels of every configuration - to prove that every hole and camber matches before dispatch, and the painting or metallising system is applied under controlled conditions. Site work is then assembly and connection rather than construction: pieces arrive sized by transport limits and are joined by high-strength friction-grip bolts or site welds. At every stage the erection engineer re-analyses the structure, because a partially erected span is a different - and far weaker - structure than the finished one.",
              "The erection toolkit is a short list. Mobile and crawler cranes handle pieces within their reach; derricks and guyed masts work where cranes cannot travel; floating cranes and barges lift from navigable water; staging supports spans from below where the ground allows; incremental launching suits constant-depth girders; and balanced cantilever erection grows each half of a truss or girder outward from its pier on temporary backstays until the closure piece drops in at mid-span. Geometry control is continuous: every erected panel is surveyed against the camber diagram, and closure tolerances are managed by match-marking, shim packs and slotted holes rather than by force.",
              "Connections and safety close the chapter. High-strength friction-grip bolts work by clamping the plies together so that load transfers by friction rather than bearing; their installation - snug-tight, then the calibrated-wrench or turn-of-nut method - and their inspection are specified procedures with records. Site welds demand preheat, qualified welders and non-destructive testing of every critical run. Wind, and only wind, decides the schedule of a free cantilever: erection procedures specify maximum wind speeds for each lift, and work stops when gusts cross the limit. Every steel erection plan ends with a documented hold-point system - trial assembly, bolt-tension records, weld NDT, geometry survey - the audit trail that makes steel bridges certifiable.",
            ],
            bullets: [
              "Shop fabrication: cutting, drilling, welding, painting - then trial assembly to prove the geometry.",
              "Transport limits fix the piece sizes; site work is bolting and welding, not forming.",
              "HSFG bolts transfer load by friction from clamping - installation and inspection are recorded procedures.",
              "Erection kit: cranes, derricks, floating cranes, staging, incremental launching, balanced cantilever.",
              "Geometry control: survey every panel against the camber diagram; close with shims and match-marks, never force.",
              "Wind limits govern free-cantilever lifts; erection-stage analysis is a design deliverable, not an option.",
            ],
            table: {
              caption: "Steel erection methods against their constraints.",
              headers: ["Method", "Best when", "Caution"],
              rows: [
                ["Crane lifts", "good ground access, modest radii", "lift weight and reach limits"],
                ["Floating crane / barge", "navigable water below", "river stage and depth"],
                ["Staging erection", "low height, firm dry ground", "blocks the waterway; flood risk"],
                ["Incremental launching", "constant-depth girders", "pier bending during the launch"],
                ["Balanced cantilever", "no access below deck", "wind limits; backstays and closure"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Erecting a steel crossing over a navigable river",
              caption:
                "Method chosen by access and wind - the wrong choice is the classic failure story.",
              start: "Erect a 3-span steel girder bridge over a navigable river",
              branches: [
                {
                  label: "Balanced cantilever from the piers",
                  outcome: "Grows outward with temporary backstays; closure at mid-span; no support in the channel",
                  good: true,
                },
                {
                  label: "Incremental launching from one bank",
                  outcome: "Constant-depth girder pushed over the piers with a nose; channel never obstructed",
                  good: true,
                },
                {
                  label: "Floating crane with barge lifts",
                  outcome: "Large assemblies placed from the water where navigation windows allow",
                  good: true,
                },
                {
                  label: "Long free cantilever lift in storm season",
                  outcome: "Aerodynamic instability of an unbraced half-structure - the textbook erection failure",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "HSFG means friction",
              body: "The one-line mechanism of a high-strength friction-grip bolt - the clamp transfers load by friction between the plies, not by bolt shear or bearing - is a standing short question. Add the installation sequence (snug-tight, then calibrated wrench or turn-of-nut) and the answer is complete in three lines.",
            },
            keyTerms: [
              { term: "HSFG bolt", definition: "A high-strength friction-grip bolt that transfers load by clamping friction between the connected plies." },
              { term: "Trial assembly", definition: "Shop pre-assembly of fabricated steelwork to verify fit, holes and camber before dispatch." },
              { term: "Closure", definition: "The final piece joining two erection halves, fitted with shims and match-marks, never forced." },
            ],
            examQuestions: [
              {
                q: "Describe the methods of erecting steel bridges, the connections used on site, and the quality and safety controls that make erection certifiable.",
                marks: 7,
                outline: [
                  "Start from fabrication: shop welding, painting and trial assembly of the first panels.",
                  "List erection methods: cranes, derricks, floating cranes, staging, launching, balanced cantilever.",
                  "Explain balanced cantilever erection with backstays and mid-span closure - Howrah Bridge lineage.",
                  "Connections: HSFG bolts work by friction; installation and inspection are recorded.",
                  "Site welds: preheat, qualified welders, NDT of critical runs.",
                  "Geometry control: survey each panel; close with shims and match-marks, not force.",
                  "Erection-stage analysis and wind limits; the hold-point audit trail.",
                ],
              },
              {
                q: "How does an HSFG bolt transfer load between connected parts?",
                marks: 2,
              },
              {
                q: "Why is trial assembly carried out in the fabrication shop?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Inspection and non-destructive testing",
            body: [
              "Inspection is the eyes of bridge management, and it is scheduled like a discipline, not improvised like an accident. The initial or inventory inspection records every structure into the bridge register at completion. Routine inspections - frequent, superficial walk-overs - catch blockages, leaks, damaged joints and vandalism early. Detailed or principal inspections, at longer intervals, examine every element at close range with access equipment. Special inspections follow floods, earthquakes, fires, vehicle impact or suspected overload. Together they feed one habit: every observation is written, photographed and mapped against a standard element list, because unrecorded distress is, for management purposes, invisible distress.",
              "A trained eye follows crack patterns to their causes: vertical flexure cracks at mid-span, diagonal tension cracks near supports, map cracking and spalling from corrosion or alkali-aggregate reaction, longitudinal cracking along bars announcing expanding rust. Bearings are checked for seizure, bulging and out-of-square seating; joints for leakage and anchor damage; drainage for blockage; and after every monsoon the foundations are sounded for scour around piers and abutments. Condition rating converts these observations into a standard graded scale per element and per bridge, and that single number is what budget systems actually optimise - which is why the rating must be reproducible between inspectors.",
              "Non-destructive testing puts instruments behind the eye. The ultrasonic pulse velocity meter locates honeycombing and estimates concrete quality through the member; the rebound hammer reads surface hardness - indicative only, never a strength verdict; cores confirm strength where the surface tests disagree; cover meters locate the reinforcement; half-cell potential mapping flags corrosion risk before rust stains appear; carbonation-depth testing with phenolphthalein shows the depassivation front advancing toward the steel; and on steelwork, dye penetrant, magnetic particle and ultrasonic testing interrogate welds. Where doubt remains, a proof load test settles capacity by direct experiment. Each method answers one question; prescribing the right test for the symptom is the engineer's craft.",
            ],
            bullets: [
              "Inspection ladder: inventory, routine walk-over, detailed, and special after floods, quakes or impact.",
              "Every observation recorded, photographed and mapped - unrecorded distress is invisible to management.",
              "Crack patterns are diagnostic: flexure at mid-span, diagonal tension at supports, map cracking from reactivity.",
              "Post-monsoon scour sounding around piers is a standing obligation on river bridges.",
              "NDT toolbox: UPV, rebound hammer, cores, cover meter, half-cell potential, carbonation depth.",
              "Rebound hammer is indicative only; cores settle disputes; proof load testing settles capacity.",
            ],
            codeExample: {
              language: "text",
              caption: "An extract from a detailed (post-monsoon) condition inspection record.",
              code: `BRIDGE INSPECTION RECORD (extract)
Bridge ID: MP-RGT-0142-01   Structure: 3-span RCC T-beam, 3 x 16 m, built 1987
Inspection type: detailed (post-monsoon)   Date: 2024-10-12   Inspector: AE/II

ELEMENT              CONDITION OBSERVED        RATING   ACTION PROPOSED
Deck slab top        map cracks, bay 2          4      expose, check steel, seal
Girder G2 mid-span   flexure crack 0.3 mm       3      fix tell-tale gauge, monitor
Bearing B3           seized, tilted             5      replace with laminated pad
Expansion joint J1   strip seal torn            5      seal renewal this cycle
Drainage outlet D2   blocked, ponding           4      clear, re-slope spout
Pier P2 foundation   scour hollow 0.8 m deep    6      dive/sounding survey; apron

Rating scale: 0 as-new ... 9 critical. Any element rated 6 or above
escalates to the repair programme with cost estimate within 30 days.
Post-monsoon sounding of all river piers: completed as scheduled.`,
            },
            table: {
              caption: "The NDT toolbox: one method, one question.",
              headers: ["Method", "Detects", "Caution"],
              rows: [
                ["Ultrasonic pulse velocity", "honeycombing, cracks, concrete quality", "needs coupling; interpretation comparative"],
                ["Rebound hammer", "surface hardness trend", "indicative only - never strength"],
                ["Core test", "in-situ strength", "minor damage; repair the hole"],
                ["Cover meter", "rebar location and cover", "calibrate against as-built drawings"],
                ["Half-cell potential", "corrosion risk mapping", "needs moist surface, access"],
                ["Carbonation test", "depassivation front depth", "phenolphthalein on fresh break"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The inspection-to-repair loop",
              caption:
                "Management is this loop, run continuously across every bridge in the network.",
              steps: [
                { label: "Inventory and register", note: "every structure, standard element list" },
                { label: "Routine walk-over", note: "frequent, superficial" },
                { label: "Detailed survey + NDT", note: "close range, instruments" },
                { label: "Condition rating", note: "reproducible grade per element" },
                { label: "Repair programme", note: "prioritised, budgeted" },
                { label: "Execute and monitor", note: "then re-inspect on schedule" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair each NDT method with its question",
              body: "Answers listing NDT methods without the question each answers read like a shopping list. Write them as pairs - UPV for internal quality, rebound hammer for surface trend only, cores for strength, cover meter for steel location, half-cell for corrosion risk - and the same list earns full marks in half the space.",
            },
            keyTerms: [
              { term: "Ultrasonic pulse velocity", definition: "An NDT method timing ultrasonic waves through concrete to reveal internal quality and defects." },
              { term: "Half-cell potential", definition: "An electrochemical NDT survey mapping the corrosion risk of embedded reinforcement." },
              { term: "Condition rating", definition: "The standard graded score assigned to each element from inspection, driving budget prioritisation." },
            ],
            examQuestions: [
              {
                q: "Explain the types of bridge inspection and their purposes, and describe the non-destructive tests used to assess a deteriorated concrete bridge.",
                marks: 7,
                outline: [
                  "Inventory inspection: record every element into the bridge register at completion.",
                  "Routine inspection: frequent walk-over for blockages, leaks, joint damage.",
                  "Detailed inspection: close-range examination of every element at longer intervals.",
                  "Special inspection: after flood, earthquake, fire, impact or suspected overload.",
                  "NDT: UPV for internal quality; rebound hammer as indicative surface test.",
                  "Cores for strength confirmation; cover meter; half-cell potential for corrosion risk; carbonation depth.",
                  "Close with condition rating feeding the repair programme; proof load testing as the final arbiter.",
                ],
              },
              {
                q: "What does the ultrasonic pulse velocity test detect, and how?",
                marks: 2,
              },
              {
                q: "Why are foundations sounded for scour after every monsoon?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Retrofitting, load rating and bridge management",
            body: [
              "Retrofitting restores or raises a bridge's capacity without replacing it. Concrete jacketing enlarges a deficient pier or column with a reinforced concrete skin, adding strength and confinement; steel jacketing and fibre-reinforced polymer wrapping achieve the same with almost no added weight and minimal traffic disruption. External post-tensioning corrects deficient flexure in girders; supplemental girders or pier caps share the load; and the humblest interventions - epoxy injection of cracks, guniting of spalled cover, replacement of a failed joint or a seized bearing - often return more service life per rupee than any dramatic scheme. Scour protection with aprons, gabions and guide bunds defends the foundations that no surface repair can save, and seismic retrofit adds isolators, restrainers and dampers where the zone demands them.",
              "Load rating asks the quieter question: how much can this bridge actually carry today? Analytical rating computes a rating factor - the live-load capacity remaining after dead load, divided by the effect of the rating vehicle - using measured present-day strengths, deteriorated sections and observed conditions. Physical rating proves capacity by loading the bridge with proof vehicles and measuring its response. A rating factor below one triggers posting: legal load limits or lane restrictions signed on the approach, in force until strengthening restores the margin. Because deterioration is progressive, rating is repeated on a cycle, typically after each detailed inspection, so that the record - and the posted limit - stays honest.",
              "The bridge management system scales these decisions to a whole network. An inventory database holds every structure; the inspection module schedules and stores condition ratings; deterioration models project future condition; and optimisation routines spend the maintenance budget where life-cycle cost is minimised rather than where complaints are loudest. India's Indian Bridge Management System has inventoried well over a lakh of bridges and culverts on this principle. The case studies anchor the unit: Howrah Bridge (1943), the 457 m cantilever truss over the Hooghly; Vidyasagar Setu (1992), its 457 m cable-stayed companion; Mahatma Gandhi Setu (1982) over the Ganga, later rehabilitated span by span; the Bandra-Worli Sea Link (2009); the Chenab railway arch (2022), the world's highest rail bridge; and Atal Setu (2024), the country's longest sea link.",
            ],
            bullets: [
              "Jacketing: RCC, steel or FRP skins on deficient piers and columns - strength plus confinement.",
              "External post-tensioning and supplemental members correct deficient flexure without replacing the bridge.",
              "Cheap and early wins: crack injection, guniting, bearing and joint replacement.",
              "Rating factor = remaining live-load capacity divided by rating-vehicle effect; below one means posting.",
              "Proof load testing settles disputed capacity by direct experiment.",
              "BMS: inventory, inspection, deterioration modelling and life-cycle cost optimisation across the network; IBMS in India.",
            ],
            table: {
              caption: "Indian landmark bridges - the case studies that answer 'quote examples'.",
              headers: ["Bridge", "Year", "Form", "Distinguishing fact"],
              rows: [
                ["Howrah Bridge", "1943", "cantilever truss", "457 m main span over the Hooghly, Kolkata"],
                ["Mahatma Gandhi Setu", "1982", "PSC cantilever", "long crossing of the Ganga at Patna; later rehabilitated"],
                ["Vidyasagar Setu", "1992", "cable-stayed", "457 m main span; companion to Howrah"],
                ["Bandra-Worli Sea Link", "2009", "PSC + cable-stayed", "segmental viaducts over the open sea, Mumbai"],
                ["Chenab Bridge", "2022", "steel arch", "world's highest railway bridge, deck about 359 m above the river"],
                ["Atal Setu (MTHL)", "2024", "PSC sea bridge", "about 21.8 km; India's longest sea bridge"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The bridge management pyramid",
              caption:
                "Data at the base supports every decision above it; money is decided at the apex.",
              tiers: [
                { label: "Network programming", note: "which bridges get this year's budget" },
                { label: "Project-level choice", note: "repair, strengthen or replace" },
                { label: "Action selection", note: "maintain, retrofit, post a load limit" },
                { label: "Condition assessment", note: "rating + NDT + load rating" },
                { label: "Inventory and inspection data", note: "the foundation of the system" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the system, then two bridges",
              body: "Management answers gain authority from specifics: name IBMS, state what a rating factor below one means (posting), and garnish with two case studies - one old steel (Howrah 1943) and one modern (Atal Setu 2024). Three specifics turn a generic paragraph into a first-class answer.",
            },
            keyTerms: [
              { term: "Retrofitting", definition: "Strengthening or upgrading an existing bridge - jacketing, wrapping, external post-tensioning, protection." },
              { term: "Rating factor", definition: "The ratio of remaining live-load capacity to the effect of the rating vehicle; below one triggers load posting." },
              { term: "Bridge management system", definition: "The database-and-optimisation system scheduling inspection, rating and maintenance across a bridge network." },
            ],
            examQuestions: [
              {
                q: "Describe the techniques used for strengthening and rehabilitating distressed bridges, and explain how load rating and posting decide whether a bridge stays in service.",
                marks: 7,
                outline: [
                  "Open with the objective: restore capacity without full replacement.",
                  "Concrete jacketing of piers and columns - strength and confinement.",
                  "Steel jacketing and FRP wrapping - minimal weight and traffic disruption.",
                  "External post-tensioning for deficient girders; supplemental members.",
                  "Component renewal: bearings, joints, crack injection, guniting; scour protection works.",
                  "Define rating factor and the posting decision when it falls below one; proof load testing.",
                  "Close with the BMS loop: inspection, rating, prioritised repair, monitoring; cite IBMS.",
                ],
              },
              {
                q: "Define the rating factor of a bridge and state what action a value below one demands.",
                marks: 3,
              },
              {
                q: "Name two landmark Indian bridges with their structural form.",
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
        "RGPV CE-802(C) papers spread their marks across loading standards, distribution methods and the substructure, with construction and maintenance supplying reliable short questions. Allocate revision time in roughly the ratio below, and keep at least one numerical slot per unit regardless of weight - Courbon, Pigeaud and the elastomeric check are calculations, not memories.",
      ],
      weightedTopics: [
        { topic: "IRC loading - Class AA, 70R, A with impact and combinations", weight: "10-12 marks", note: "Every paper's Unit II anchor; sketch the tracked vehicle and quote the 700 kN and 400 kN figures." },
        { topic: "Courbon's method with a full numerical", weight: "8-10 marks", note: "Near-certain 7-marker; rehearse the 4-girder example until the eta values come by hand." },
        { topic: "Bearings - types plus elastomeric design checks", weight: "7-9 marks", note: "Shape factor and shear strain checks in order; one fork-type selection sketch." },
        { topic: "Pigeaud's method and deck slab design", weight: "7-9 marks", note: "The six-step sequence verbatim - dispersion, span, ratios, curves, moments, steel." },
        { topic: "T-beam and box girder design steps", weight: "6-8 marks", note: "The effective flange triplet plus the selection table earn full marks together." },
        { topic: "Piers and abutments - loads, earth pressure, stability", weight: "6-8 marks", note: "One-span-loaded case and middle-third rule are the marked points." },
        { topic: "Trusses - Pratt and Warren with force character", weight: "5-7 marks", note: "Mark T and C on the panel sketch; method of sections for the numbers." },
        { topic: "Grillage analysis idealisation", weight: "4-6 marks", note: "Member property rules and the two model checks; advantages over Courbon." },
        { topic: "Construction - staging, launching, cantilever, steel erection", weight: "4-6 marks", note: "Sequence sketches with one safety check each; the construction-stage vulnerability line." },
        { topic: "Inspection, NDT, retrofitting and BMS", weight: "4-6 marks", note: "The NDT pairing table plus two Indian case studies as garnish." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing. Every week ends with one numerical attempt without notes.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - components and classification", tasks: ["Load path, terminology, classification criteria with sketches", "Span ladder: slab to girder to truss to arch to cable", "Pratt and Warren sketches with T and C marked"] },
        { week: "Week 2", focus: "Unit II - IRC loads part 1", tasks: ["Class AA, 70R, A, B with vehicle sketches and placement rules", "Impact, braking, centrifugal numericals (C = W V^2/(127 R))", "Rankine Ka and equivalent surcharge on abutments"] },
        { week: "Week 3", focus: "Unit II - loads part 2 and codes", tasks: ["Wind, seismic, current: zones, coefficients, transfer", "Temperature movement and the combination table", "IRC code family one-liners; working stress vs limit state"] },
        { week: "Week 4", focus: "Unit III - analysis methods", tasks: ["Courbon numericals daily: 3, 4 and 5 girder decks", "Pigeaud six-step sequence with one full design", "Grillage idealisation rules and model checks"] },
        { week: "Week 5", focus: "Unit III design + Unit IV", tasks: ["T-beam design with effective flange; T versus box table", "Composite construction and transformed sections", "Bearings catalogue plus the full elastomeric check; pier and abutment cases"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Construction sequences: staging, launching, cantilever, steel", "NDT pairings, retrofit options, rating factor, IBMS", "Two full past papers under time; repair the gaps the same evening"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The last twenty-four hours are for consolidation, not exploration. Everything below is already in your notes; the job is to make it retrievable under exam pressure.",
      ],
      bullets: [
        "Redraw the five master sketches: load path, Class AA tracked vehicle, Courbon reaction diagram, elastomeric bearing section, cantilever abutment with pressure arrows.",
        "Recite the number chain: 700 kN tracked, 400 kN wheeled AA, C = W V^2/(127 R), S = ab/(2(a+b)t), Ka = (1 - sin phi)/(1 + sin phi), grip length = one-third of scour.",
        "Solve one Courbon numerical and one elastomeric check end-to-end - the two calculations most likely to appear.",
        "Reread every section's bullets once; they compress the answer skeletons.",
        "List the IRC codes as one-liners: IRC:5 features, IRC:6 loads, IRC:112 concrete, IRC:24 steel, IRC:22 composite, IRC:83 bearings, IRC:78 foundations.",
        "Sleep on time - the paper rewards labelled sketches and calm arithmetic, not midnight heroics.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every long answer with a labelled sketch - elevation or cross-section - because the sketch carries marks of its own before any prose.",
        "Write formulas before substituting numbers; named steps (dispersion, curve entry, strain check) earn method marks even when arithmetic slips.",
        "State units at every line of a numerical; kN versus kNm and metre versus millimetre slips are the cheapest marks lost.",
        "Answer comparison questions as two-column tables: slab versus girder, T-beam versus box, steel versus elastomeric, suspension versus cable-stayed.",
        "Budget about fifteen minutes per 7-marker, five minutes per short, and keep the last ten minutes to verify formulas, units and the sum of Courbon coefficients.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Using clear span where effective span - centre of bearings - governs the moment calculation.",
        "Applying impact to dead load or to wind/seismic combinations; impact rides on live load in the primary case only.",
        "Forgetting that Courbon coefficients must sum to 1.0 - the built-in check that catches every arithmetic slip.",
        "Entering V in metres per second into C = W V^2/(127 R); the 127 already assumes kilometres per hour.",
        "Designing a pier for both spans loaded only - the one-span-loaded case governs the moment.",
        "Mixing up the bearing scheme: the fixed line takes horizontal force, the free line takes movement - reversing them fails the whole span.",
      ],
    },
  ],
};
